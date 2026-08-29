import { hexToRgb } from './color.js'

export function drawBeadGrid(canvas, cells, columns, rows, colors, options = {}) {
  if (!canvas || !cells?.length) return
  const cellSize = options.cellSize || 18
  const showGrid = options.showGrid !== false
  const mode = options.mode || 'pixel'
  canvas.width = columns * cellSize
  canvas.height = rows * cellSize
  const context = canvas.getContext('2d')
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.fillStyle = options.background || '#f4f1eb'
  context.fillRect(0, 0, canvas.width, canvas.height)

  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const colorIndex = cells[row * columns + column]
      if (colorIndex < 0 || !colors[colorIndex]) continue
      const { hex } = colors[colorIndex]
      const centerX = column * cellSize + cellSize / 2
      const centerY = row * cellSize + cellSize / 2
      if (mode === 'pixel' || cellSize < 9) {
        context.fillStyle = hex
        context.fillRect(column * cellSize, row * cellSize, cellSize, cellSize)
      } else {
        context.beginPath()
        context.arc(centerX, centerY, cellSize * 0.42, 0, Math.PI * 2)
        context.fillStyle = hex
        context.fill()
        const rgb = hexToRgb(hex)
        const luminance = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000
        context.beginPath()
        context.arc(centerX, centerY, Math.max(1, cellSize * 0.105), 0, Math.PI * 2)
        context.fillStyle = luminance > 170 ? 'rgba(40,36,32,.24)' : 'rgba(255,255,255,.45)'
        context.fill()
      }
    }
  }

  if (!showGrid) return
  context.lineWidth = 1
  for (let column = 0; column <= columns; column += 1) {
    context.beginPath()
    context.moveTo(column * cellSize + 0.5, 0)
    context.lineTo(column * cellSize + 0.5, canvas.height)
    context.strokeStyle = column % 10 === 0 ? 'rgba(35,33,30,.42)' : column % 5 === 0 ? 'rgba(35,33,30,.23)' : 'rgba(35,33,30,.09)'
    context.stroke()
  }
  for (let row = 0; row <= rows; row += 1) {
    context.beginPath()
    context.moveTo(0, row * cellSize + 0.5)
    context.lineTo(canvas.width, row * cellSize + 0.5)
    context.strokeStyle = row % 10 === 0 ? 'rgba(35,33,30,.42)' : row % 5 === 0 ? 'rgba(35,33,30,.23)' : 'rgba(35,33,30,.09)'
    context.stroke()
  }
}

export function countColors(cells, colors) {
  const counts = new Map()
  for (const colorIndex of cells || []) {
    if (colorIndex >= 0) counts.set(colorIndex, (counts.get(colorIndex) || 0) + 1)
  }
  return [...counts.entries()]
    .map(([index, count]) => ({ ...colors[index], index, count }))
    .sort((left, right) => right.count - left.count)
}
