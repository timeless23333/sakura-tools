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
  const canvas = document.createElement('canvas')
  canvas.width = columns
  canvas.height = rows
  const context = canvas.getContext('2d', { willReadFrequently: true })
  const crop = calculateCrop(image.width, image.height, columns / rows, zoom, focusX, focusY)
  context.imageSmoothingEnabled = true
  context.imageSmoothingQuality = 'high'
  context.clearRect(0, 0, columns, rows)
  context.drawImage(image, crop.x, crop.y, crop.width, crop.height, 0, 0, columns, rows)
  const pixels = context.getImageData(0, 0, columns, rows).data
  const prepared = preparePalette(paletteColors)
  const cells = new Int16Array(columns * rows)
  for (let index = 0; index < cells.length; index += 1) {
    const offset = index * 4
    cells[index] = pixels[offset + 3] < 48
      ? -1
      : nearestPaletteIndex({ r: pixels[offset], g: pixels[offset + 1], b: pixels[offset + 2] }, prepared)
  }
  return cells
}
