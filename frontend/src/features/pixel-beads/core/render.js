import { hexToRgb } from './color.js'

export function drawBeadGrid(canvas, cells, columns, rows, colors, options = {}) {
  if (!canvas || !cells?.length) return
  const cellSize = options.cellSize || 18
  const showGrid = options.showGrid !== false
  const showCodes = options.showCodes === true
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

  if (showCodes && cellSize >= 12) {
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.font = `700 ${Math.max(6, Math.floor(cellSize * 0.34))}px system-ui, sans-serif`
    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        const colorIndex = cells[row * columns + column]
        const color = colors[colorIndex]
        if (!color) continue
        const rgb = hexToRgb(color.hex)
        const luminance = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000
        context.fillStyle = luminance > 158 ? '#25221f' : '#ffffff'
        context.fillText(color.code, column * cellSize + cellSize / 2, row * cellSize + cellSize / 2 + 0.5)
      }
    }
  }

  if (showGrid) {
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

  if (options.symmetry?.horizontal || options.symmetry?.vertical) {
    context.save()
    context.setLineDash([6, 4])
    context.strokeStyle = 'rgba(218, 92, 108, .9)'
    context.lineWidth = 1.5
    if (options.symmetry.horizontal) {
      context.beginPath()
      context.moveTo(canvas.width / 2, 0)
      context.lineTo(canvas.width / 2, canvas.height)
      context.stroke()
    }
    if (options.symmetry.vertical) {
      context.beginPath()
      context.moveTo(0, canvas.height / 2)
      context.lineTo(canvas.width, canvas.height / 2)
      context.stroke()
    }
    context.restore()
  }

  if (options.selection) {
    const selection = options.selection
    const left = Math.min(selection.startColumn, selection.endColumn)
    const top = Math.min(selection.startRow, selection.endRow)
    const width = Math.abs(selection.endColumn - selection.startColumn) + 1
    const height = Math.abs(selection.endRow - selection.startRow) + 1
    context.save()
    context.setLineDash([5, 3])
    context.lineWidth = 2
    context.strokeStyle = '#da5c6c'
    context.strokeRect(left * cellSize + 1, top * cellSize + 1, width * cellSize - 2, height * cellSize - 2)
    context.restore()
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
