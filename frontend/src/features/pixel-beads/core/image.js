import { nearestPaletteIndex, preparePalette } from './color.js'

export async function decodeImage(file) {
  if ('createImageBitmap' in window) {
    return createImageBitmap(file, { imageOrientation: 'from-image' })
  }
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const image = new Image()
    image.onload = () => {
      URL.revokeObjectURL(url)
      resolve(image)
    }
    image.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error('无法读取这张图片'))
    }
    image.src = url
  })
}

export function calculateCrop(sourceWidth, sourceHeight, targetAspect, zoom = 1, focusX = 50, focusY = 50) {
  const sourceAspect = sourceWidth / sourceHeight
  let width = sourceWidth
  let height = sourceHeight
  if (sourceAspect > targetAspect) width = sourceHeight * targetAspect
  else height = sourceWidth / targetAspect
  width /= zoom
  height /= zoom
  const centerX = width / 2 + (sourceWidth - width) * (focusX / 100)
  const centerY = height / 2 + (sourceHeight - height) * (focusY / 100)
  return {
    x: Math.max(0, Math.min(sourceWidth - width, centerX - width / 2)),
    y: Math.max(0, Math.min(sourceHeight - height, centerY - height / 2)),
    width,
    height,
  }
}

export function drawCropPreview(canvas, image, options) {
  if (!canvas || !image) return
  const { columns, rows, zoom, focusX, focusY } = options
  const aspect = columns / rows
  canvas.width = 520
  canvas.height = 260
  const crop = calculateCrop(image.width, image.height, aspect, zoom, focusX, focusY)
  const context = canvas.getContext('2d')
  context.fillStyle = '#23211e'
  context.fillRect(0, 0, canvas.width, canvas.height)
  const previewWidth = Math.min(canvas.width, canvas.height * aspect)
  const previewHeight = previewWidth / aspect
  const offsetX = (canvas.width - previewWidth) / 2
  const offsetY = (canvas.height - previewHeight) / 2
  context.imageSmoothingEnabled = true
  context.imageSmoothingQuality = 'high'
  context.drawImage(image, crop.x, crop.y, crop.width, crop.height, offsetX, offsetY, previewWidth, previewHeight)
  context.strokeStyle = 'rgba(255,255,255,.55)'
  context.strokeRect(offsetX + 0.5, offsetY + 0.5, previewWidth - 1, previewHeight - 1)
}

export function quantizeImage(image, options, paletteColors) {
  const { columns, rows, zoom, focusX, focusY } = options
  const sampleScale = 4
  const sampleCanvas = document.createElement('canvas')
  sampleCanvas.width = columns * sampleScale
  sampleCanvas.height = rows * sampleScale
  const sampleContext = sampleCanvas.getContext('2d')
  const crop = calculateCrop(image.width, image.height, columns / rows, zoom, focusX, focusY)
  sampleContext.imageSmoothingEnabled = true
  sampleContext.imageSmoothingQuality = 'high'
  sampleContext.drawImage(
    image,
    crop.x,
    crop.y,
    crop.width,
    crop.height,
    0,
    0,
    sampleCanvas.width,
    sampleCanvas.height,
  )
  const canvas = document.createElement('canvas')
  canvas.width = columns
  canvas.height = rows
  const context = canvas.getContext('2d', { willReadFrequently: true })
  context.imageSmoothingEnabled = true
  context.imageSmoothingQuality = 'high'
  context.clearRect(0, 0, columns, rows)
  context.drawImage(sampleCanvas, 0, 0, columns, rows)
  const pixels = context.getImageData(0, 0, columns, rows).data
  const adjusted = adjustPixels(pixels, columns, rows, options)
  const prepared = preparePalette(paletteColors)
  const cells = new Int16Array(columns * rows)
  for (let index = 0; index < cells.length; index += 1) {
    const offset = index * 4
    cells[index] = pixels[offset + 3] < 48
      ? -1
      : nearestPaletteIndex({ r: adjusted[offset], g: adjusted[offset + 1], b: adjusted[offset + 2] }, prepared)
  }
  return cells
}

function adjustPixels(pixels, columns, rows, options) {
  const brightness = (options.brightness ?? 100) / 100
  const contrast = (options.contrast ?? 100) / 100
  const saturation = (options.saturation ?? 100) / 100
  const detail = (options.detail ?? 0) / 100
  const toned = new Float32Array(pixels.length)
  const clamp = (value) => Math.max(0, Math.min(255, value))
  for (let offset = 0; offset < pixels.length; offset += 4) {
    const red = pixels[offset]
    const green = pixels[offset + 1]
    const blue = pixels[offset + 2]
    const luminance = red * 0.2126 + green * 0.7152 + blue * 0.0722
    toned[offset] = clamp(((luminance + (red - luminance) * saturation - 128) * contrast + 128) * brightness)
    toned[offset + 1] = clamp(((luminance + (green - luminance) * saturation - 128) * contrast + 128) * brightness)
    toned[offset + 2] = clamp(((luminance + (blue - luminance) * saturation - 128) * contrast + 128) * brightness)
    toned[offset + 3] = pixels[offset + 3]
  }
  if (detail <= 0) return toned
  const result = new Float32Array(toned)
  const neighbors = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const offset = (row * columns + column) * 4
      if (toned[offset + 3] < 48) continue
      const sums = [0, 0, 0]
      let count = 0
      for (const [moveX, moveY] of neighbors) {
        const nextX = column + moveX
        const nextY = row + moveY
        if (nextX < 0 || nextY < 0 || nextX >= columns || nextY >= rows) continue
        const nextOffset = (nextY * columns + nextX) * 4
        if (toned[nextOffset + 3] < 48) continue
        sums[0] += toned[nextOffset]
        sums[1] += toned[nextOffset + 1]
        sums[2] += toned[nextOffset + 2]
        count += 1
      }
      if (!count) continue
      for (let channel = 0; channel < 3; channel += 1) {
        const average = sums[channel] / count
        result[offset + channel] = clamp(toned[offset + channel] + (toned[offset + channel] - average) * detail)
      }
    }
  }
  return result
}
