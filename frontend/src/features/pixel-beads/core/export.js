import { hexToRgb } from './color.js'
import { countColors } from './render.js'

const PAPER_WIDTH = 595.28
const PAPER_HEIGHT = 841.89

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

function readableText(hex) {
  const { r, g, b } = hexToRgb(hex)
  return (r * 299 + g * 587 + b * 114) / 1000 > 158 ? '#26231f' : '#ffffff'
}

function drawCenteredText(context, text, x, y, font, color = '#27241f') {
  context.font = font
  context.fillStyle = color
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.fillText(text, x, y)
}

function drawPatternPage(cells, columns, rows, colors, range = {}) {
  const startColumn = range.startColumn || 0
  const startRow = range.startRow || 0
  const endColumn = Math.min(columns, range.endColumn ?? columns)
  const endRow = Math.min(rows, range.endRow ?? rows)
  const pageColumns = endColumn - startColumn
  const pageRows = endRow - startRow
  const cellSize = range.cellSize || 28
  const ruler = Math.max(30, Math.round(cellSize * 1.2))
  const titleHeight = range.titleHeight ?? 58
  const footerHeight = range.footerHeight ?? 26
  const canvas = document.createElement('canvas')
  canvas.width = ruler * 2 + pageColumns * cellSize
  canvas.height = titleHeight + ruler * 2 + pageRows * cellSize + footerHeight
  const context = canvas.getContext('2d')

  context.fillStyle = '#fbfaf7'
  context.fillRect(0, 0, canvas.width, canvas.height)
  context.textAlign = 'left'
  context.textBaseline = 'middle'
  context.fillStyle = '#24211d'
  context.font = '700 20px system-ui, sans-serif'
  context.fillText(range.title || `${columns} × ${rows} 拼豆图纸`, ruler, titleHeight / 2 - 4)
  if (range.subtitle) {
    context.textAlign = 'right'
    context.font = '12px system-ui, sans-serif'
    context.fillStyle = '#6f6961'
    context.fillText(range.subtitle, canvas.width - ruler, titleHeight / 2 - 4)
  }

  const gridX = ruler
  const gridY = titleHeight + ruler
  const fontSize = Math.max(7, Math.min(12, Math.floor(cellSize * 0.36)))

  for (let row = startRow; row < endRow; row += 1) {
    for (let column = startColumn; column < endColumn; column += 1) {
      const localColumn = column - startColumn
      const localRow = row - startRow
      const x = gridX + localColumn * cellSize
      const y = gridY + localRow * cellSize
      const color = colors[cells[row * columns + column]]
      context.fillStyle = color?.hex || '#ffffff'
      context.fillRect(x, y, cellSize, cellSize)
      if (color) {
        drawCenteredText(
          context,
          color.code,
          x + cellSize / 2,
          y + cellSize / 2 + 0.5,
          `700 ${fontSize}px system-ui, sans-serif`,
          readableText(color.hex),
        )
      }
    }
  }

  for (let column = 0; column <= pageColumns; column += 1) {
    const globalColumn = startColumn + column
    const x = gridX + column * cellSize + 0.5
    context.beginPath()
    context.moveTo(x, gridY)
    context.lineTo(x, gridY + pageRows * cellSize)
    context.strokeStyle = globalColumn % 10 === 0 ? '#4d4943' : globalColumn % 5 === 0 ? '#77716a' : '#c8c4bd'
    context.lineWidth = globalColumn % 10 === 0 ? 1.5 : 1
    context.stroke()
  }
  for (let row = 0; row <= pageRows; row += 1) {
    const globalRow = startRow + row
    const y = gridY + row * cellSize + 0.5
    context.beginPath()
    context.moveTo(gridX, y)
    context.lineTo(gridX + pageColumns * cellSize, y)
    context.strokeStyle = globalRow % 10 === 0 ? '#4d4943' : globalRow % 5 === 0 ? '#77716a' : '#c8c4bd'
    context.lineWidth = globalRow % 10 === 0 ? 1.5 : 1
    context.stroke()
  }

  for (let column = 0; column < pageColumns; column += 1) {
    const label = String(startColumn + column + 1)
    const x = gridX + column * cellSize + cellSize / 2
    drawCenteredText(context, label, x, gridY - ruler / 2, '600 11px system-ui, sans-serif', '#56514b')
    drawCenteredText(context, label, x, gridY + pageRows * cellSize + ruler / 2, '600 11px system-ui, sans-serif', '#56514b')
  }
  for (let row = 0; row < pageRows; row += 1) {
    const label = String(startRow + row + 1)
    const y = gridY + row * cellSize + cellSize / 2
    drawCenteredText(context, label, gridX - ruler / 2, y, '600 11px system-ui, sans-serif', '#56514b')
    drawCenteredText(context, label, gridX + pageColumns * cellSize + ruler / 2, y, '600 11px system-ui, sans-serif', '#56514b')
  }

  return canvas
}

function drawLegend(context, statistics, options) {
  const { x, y, width, columns = 5, rowHeight = 42 } = options
  const gap = 10
  const itemWidth = (width - gap * (columns - 1)) / columns
  statistics.forEach((item, index) => {
    const column = index % columns
    const row = Math.floor(index / columns)
    const itemX = x + column * (itemWidth + gap)
    const itemY = y + row * rowHeight
    context.fillStyle = '#ffffff'
    context.strokeStyle = '#d4d0c9'
    context.lineWidth = 1
    context.fillRect(itemX, itemY, itemWidth, rowHeight - 8)
    context.strokeRect(itemX + 0.5, itemY + 0.5, itemWidth - 1, rowHeight - 9)
    const swatchWidth = Math.min(58, Math.max(42, itemWidth * 0.28))
    context.fillStyle = item.hex
    context.fillRect(itemX, itemY, swatchWidth, rowHeight - 8)
    context.textBaseline = 'middle'
    context.font = '700 12px system-ui, sans-serif'
    context.fillStyle = readableText(item.hex)
    context.textAlign = 'center'
    context.fillText(item.code, itemX + swatchWidth / 2, itemY + (rowHeight - 8) / 2)
    context.textAlign = 'right'
    context.fillStyle = '#37332e'
    context.font = '600 12px system-ui, sans-serif'
    context.fillText(String(item.count), itemX + itemWidth - 10, itemY + (rowHeight - 8) / 2)
  })
  return Math.ceil(statistics.length / columns) * rowHeight
}

function createCompleteSheet(cells, columns, rows, colors, options = {}) {
  const statistics = countColors(cells, colors)
  const cellSize = Math.max(22, Math.min(30, Math.floor(3600 / Math.max(columns, rows))))
  const pattern = drawPatternPage(cells, columns, rows, colors, {
    cellSize,
    title: `${columns} × ${rows} 拼豆图纸`,
    subtitle: options.paletteName || '',
    footerHeight: 0,
  })
  const legendColumns = Math.max(4, Math.min(16, Math.floor((pattern.width - 54) / 200)))
  const legendRows = Math.ceil(statistics.length / legendColumns)
  const legendTop = 82
  const legendHeight = Math.max(90, legendRows * 42)
  const canvas = document.createElement('canvas')
  canvas.width = pattern.width
  canvas.height = pattern.height + legendTop + legendHeight + 26
  const context = canvas.getContext('2d')
  context.fillStyle = '#fbfaf7'
  context.fillRect(0, 0, canvas.width, canvas.height)
  context.drawImage(pattern, 0, 0)
  const y = pattern.height + 34
  context.textAlign = 'left'
  context.textBaseline = 'middle'
  context.fillStyle = '#24211d'
  context.font = '700 22px system-ui, sans-serif'
  const total = statistics.reduce((sum, item) => sum + item.count, 0)
  context.fillText(`拼豆数量统计（${total} 颗）`, 32, y)
  context.font = '12px system-ui, sans-serif'
  context.fillStyle = '#6f6961'
  context.textAlign = 'right'
  context.fillText(`${statistics.length} 种颜色`, canvas.width - 32, y)
  drawLegend(context, statistics, {
    x: 32,
    y: pattern.height + legendTop,
    width: canvas.width - 64,
    columns: legendColumns,
  })
  return canvas
}

function createLegendPages(cells, colors, paletteName = '') {
  const statistics = countColors(cells, colors)
  const perPage = 96
  const pages = []
  for (let start = 0; start < statistics.length; start += perPage) {
    const items = statistics.slice(start, start + perPage)
    const canvas = document.createElement('canvas')
    canvas.width = 900
    canvas.height = 1273
    const context = canvas.getContext('2d')
    context.fillStyle = '#fbfaf7'
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = '#24211d'
    context.textAlign = 'left'
    context.textBaseline = 'middle'
    context.font = '700 30px system-ui, sans-serif'
    const total = statistics.reduce((sum, item) => sum + item.count, 0)
    context.fillText(`拼豆数量统计（${total} 颗）`, 52, 62)
    context.font = '15px system-ui, sans-serif'
    context.fillStyle = '#6f6961'
    context.fillText(`${paletteName} · ${statistics.length} 种颜色`, 52, 101)
    drawLegend(context, items, { x: 52, y: 142, width: 796, columns: 4, rowHeight: 43 })
    context.textAlign = 'right'
    context.font = '14px system-ui, sans-serif'
    context.fillText(`统计表 ${Math.floor(start / perPage) + 1} / ${Math.ceil(statistics.length / perPage)}`, 848, 1230)
    pages.push(canvas)
  }
  return pages
}

function dataUrlToBytes(dataUrl) {
  const binary = atob(dataUrl.split(',')[1])
  const bytes = new Uint8Array(binary.length)
  for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index)
  return bytes
}

function buildPdf(canvases) {
  const encoder = new TextEncoder()
  const objects = new Map()
  const pageRefs = canvases.map((_, index) => `${3 + index * 3} 0 R`).join(' ')
  objects.set(1, encoder.encode('<< /Type /Catalog /Pages 2 0 R >>'))
  objects.set(2, encoder.encode(`<< /Type /Pages /Kids [${pageRefs}] /Count ${canvases.length} >>`))

  canvases.forEach((canvas, index) => {
    const pageNumber = 3 + index * 3
    const imageNumber = pageNumber + 1
    const contentNumber = pageNumber + 2
    const image = dataUrlToBytes(canvas.toDataURL('image/jpeg', 0.92))
    const scale = Math.min((PAPER_WIDTH - 30) / canvas.width, (PAPER_HEIGHT - 30) / canvas.height)
    const width = canvas.width * scale
    const height = canvas.height * scale
    const x = (PAPER_WIDTH - width) / 2
    const y = (PAPER_HEIGHT - height) / 2
    const content = encoder.encode(`q\n${width.toFixed(2)} 0 0 ${height.toFixed(2)} ${x.toFixed(2)} ${y.toFixed(2)} cm\n/Im${index} Do\nQ`)
    objects.set(pageNumber, encoder.encode(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAPER_WIDTH} ${PAPER_HEIGHT}] /Resources << /XObject << /Im${index} ${imageNumber} 0 R >> >> /Contents ${contentNumber} 0 R >>`))
    const imageHeader = encoder.encode(`<< /Type /XObject /Subtype /Image /Width ${canvas.width} /Height ${canvas.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${image.length} >>\nstream\n`)
    const imageFooter = encoder.encode('\nendstream')
    const imageObject = new Uint8Array(imageHeader.length + image.length + imageFooter.length)
    imageObject.set(imageHeader)
    imageObject.set(image, imageHeader.length)
    imageObject.set(imageFooter, imageHeader.length + image.length)
    objects.set(imageNumber, imageObject)
    const contentHeader = encoder.encode(`<< /Length ${content.length} >>\nstream\n`)
    const contentFooter = encoder.encode('\nendstream')
    const contentObject = new Uint8Array(contentHeader.length + content.length + contentFooter.length)
    contentObject.set(contentHeader)
    contentObject.set(content, contentHeader.length)
    contentObject.set(contentFooter, contentHeader.length + content.length)
    objects.set(contentNumber, contentObject)
  })

  const parts = [encoder.encode('%PDF-1.4\n%âãÏÓ\n')]
  const offsets = [0]
  let offset = parts[0].length
  for (let number = 1; number <= objects.size; number += 1) {
    offsets[number] = offset
    const header = encoder.encode(`${number} 0 obj\n`)
    const footer = encoder.encode('\nendobj\n')
    parts.push(header, objects.get(number), footer)
    offset += header.length + objects.get(number).length + footer.length
  }
  const xrefOffset = offset
  const xref = [`xref\n0 ${objects.size + 1}\n`, '0000000000 65535 f \n']
  for (let number = 1; number <= objects.size; number += 1) {
    xref.push(`${String(offsets[number]).padStart(10, '0')} 00000 n \n`)
  }
  xref.push(`trailer\n<< /Size ${objects.size + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`)
  parts.push(encoder.encode(xref.join('')))
  return new Blob(parts, { type: 'application/pdf' })
}

export function exportPng(cells, columns, rows, colors, filename, options = {}) {
  if (!cells?.length) return
  const canvas = createCompleteSheet(cells, columns, rows, colors, options)
  canvas.toBlob((blob) => {
    if (blob) downloadBlob(blob, filename)
  }, 'image/png')
}

export function exportPdf(cells, columns, rows, colors, filename, options = {}) {
  if (!cells?.length) return
  const pages = []
  const columnsPerPage = Math.max(8, Number(options.boardSize) || 29)
  const rowsPerPage = columnsPerPage
  const columnPages = Math.ceil(columns / columnsPerPage)
  const rowPages = Math.ceil(rows / rowsPerPage)
  for (let rowPage = 0; rowPage < rowPages; rowPage += 1) {
    for (let columnPage = 0; columnPage < columnPages; columnPage += 1) {
      pages.push(drawPatternPage(cells, columns, rows, colors, {
        startColumn: columnPage * columnsPerPage,
        endColumn: (columnPage + 1) * columnsPerPage,
        startRow: rowPage * rowsPerPage,
        endRow: (rowPage + 1) * rowsPerPage,
        cellSize: 32,
        title: `${columns} × ${rows} 拼豆图纸`,
        subtitle: `区域 ${columnPage + 1}/${columnPages} · ${rowPage + 1}/${rowPages}`,
      }))
    }
  }
  pages.push(...createLegendPages(cells, colors, options.paletteName || ''))
  downloadBlob(buildPdf(pages), filename)
}
