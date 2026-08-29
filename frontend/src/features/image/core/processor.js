const MAX_IMAGE_PIXELS = 32_000_000
const MAX_IMAGE_SIDE = 12_000

export async function decodeImageFile(file) {
  let image
  if ('createImageBitmap' in window) {
    try {
      image = await createImageBitmap(file, { imageOrientation: 'from-image' })
    } catch {
      image = await decodeWithImageElement(file)
    }
  } else {
    image = await decodeWithImageElement(file)
  }
  if (image.width > MAX_IMAGE_SIDE || image.height > MAX_IMAGE_SIDE || image.width * image.height > MAX_IMAGE_PIXELS) {
    image.close?.()
    throw new Error('图片分辨率过大，请选择边长不超过 12000 px、总计不超过 3200 万像素的图片')
  }
  return image
}

function decodeWithImageElement(file) {
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

export function createTransformedSource(image, options = {}) {
  const rotation = normalizeRotation(options.rotation)
  const swapsSides = rotation === 90 || rotation === 270
  const canvas = document.createElement('canvas')
  canvas.width = swapsSides ? image.height : image.width
  canvas.height = swapsSides ? image.width : image.height
  const context = canvas.getContext('2d')

  context.save()
  context.translate(canvas.width / 2, canvas.height / 2)
  context.scale(options.flipX ? -1 : 1, options.flipY ? -1 : 1)
  context.rotate((rotation * Math.PI) / 180)
  context.drawImage(image, -image.width / 2, -image.height / 2)
  context.restore()
  return canvas
}

export function calculateCrop(sourceWidth, sourceHeight, aspect, zoom = 1, focusX = 50, focusY = 50) {
  const safeAspect = Math.max(0.01, aspect || sourceWidth / sourceHeight)
  let width = sourceWidth
  let height = sourceHeight
  if (sourceWidth / sourceHeight > safeAspect) width = sourceHeight * safeAspect
  else height = sourceWidth / safeAspect
  width /= Math.max(1, zoom)
  height /= Math.max(1, zoom)
  const x = (sourceWidth - width) * clamp(focusX / 100, 0, 1)
  const y = (sourceHeight - height) * clamp(focusY / 100, 0, 1)
  return { x, y, width, height }
}

export function drawPreview(canvas, source, options) {
  if (!canvas || !source) return
  const aspect = options.width / options.height
  const maxWidth = Math.min(980, Math.max(320, options.previewWidth || 760))
  const maxHeight = 620
  let width = maxWidth
  let height = width / aspect
  if (height > maxHeight) {
    height = maxHeight
    width = height * aspect
  }
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
  canvas.width = Math.max(1, Math.round(width * pixelRatio))
  canvas.height = Math.max(1, Math.round(height * pixelRatio))
  canvas.style.aspectRatio = `${options.width} / ${options.height}`

  const context = canvas.getContext('2d')
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
  context.clearRect(0, 0, width, height)
  const crop = calculateCrop(source.width, source.height, aspect, options.zoom, options.focusX, options.focusY)
  context.imageSmoothingEnabled = true
  context.imageSmoothingQuality = 'high'
  context.drawImage(source, crop.x, crop.y, crop.width, crop.height, 0, 0, width, height)
}

export async function exportImage(source, options) {
  const width = clamp(Math.round(options.width), 1, MAX_IMAGE_SIDE)
  const height = clamp(Math.round(options.height), 1, MAX_IMAGE_SIDE)
  if (width * height > MAX_IMAGE_PIXELS) throw new Error('导出尺寸不能超过 3200 万像素')

  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const context = canvas.getContext('2d')
  if (options.mimeType === 'image/jpeg') {
    context.fillStyle = options.background || '#ffffff'
    context.fillRect(0, 0, width, height)
  }
  const crop = calculateCrop(source.width, source.height, width / height, options.zoom, options.focusX, options.focusY)
  context.imageSmoothingEnabled = true
  context.imageSmoothingQuality = 'high'
  context.drawImage(source, crop.x, crop.y, crop.width, crop.height, 0, 0, width, height)

  const blob = await new Promise((resolve) => canvas.toBlob(resolve, options.mimeType, options.quality))
  if (!blob) throw new Error('浏览器无法导出当前格式')
  return blob
}

export function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

export function formatBytes(bytes) {
  if (!Number.isFinite(bytes) || bytes < 0) return '—'
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 ** 2) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / 1024 ** 2).toFixed(2)} MB`
}

function normalizeRotation(value) {
  return ((Number(value) % 360) + 360) % 360
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}
