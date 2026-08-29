import { drawBeadGrid } from './render.js'

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  anchor.click()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

function exportCanvas(cells, columns, rows, colors, options = {}) {
  const canvas = document.createElement('canvas')
  const cellSize = Math.max(16, Math.min(32, Math.floor(3200 / Math.max(columns, rows))))
  drawBeadGrid(canvas, cells, columns, rows, colors, {
    cellSize,
    showGrid: true,
    background: '#f7f5f1',
    mode: options.mode || 'pixel',
  })
  return canvas
}

export function exportPng(cells, columns, rows, colors, filename = 'sakura-beads-pattern.png', options = {}) {
  exportCanvas(cells, columns, rows, colors, options).toBlob((blob) => {
    if (blob) downloadBlob(blob, filename)
  }, 'image/png')
}

function dataUrlBytes(dataUrl) {
  const binary = atob(dataUrl.split(',')[1])
  return Uint8Array.from(binary, (character) => character.charCodeAt(0))
}

function concatBytes(parts) {
  const length = parts.reduce((total, part) => total + part.length, 0)
  const result = new Uint8Array(length)
  let offset = 0
  for (const part of parts) {
    result.set(part, offset)
    offset += part.length
  }
  return result
}

export function exportPdf(cells, columns, rows, colors, filename = 'sakura-beads-pattern.pdf', options = {}) {
  const canvas = exportCanvas(cells, columns, rows, colors, options)
  const jpeg = dataUrlBytes(canvas.toDataURL('image/jpeg', 0.94))
  const encoder = new TextEncoder()
  const landscape = columns > rows
  const pageWidth = landscape ? 841.89 : 595.28
  const pageHeight = landscape ? 595.28 : 841.89
  const margin = 28
  const scale = Math.min((pageWidth - margin * 2) / canvas.width, (pageHeight - margin * 2) / canvas.height)
  const imageWidth = canvas.width * scale
  const imageHeight = canvas.height * scale
  const x = (pageWidth - imageWidth) / 2
  const y = (pageHeight - imageHeight) / 2
  const content = `q\n${imageWidth.toFixed(2)} 0 0 ${imageHeight.toFixed(2)} ${x.toFixed(2)} ${y.toFixed(2)} cm\n/Im0 Do\nQ\n`
  const objects = [
    encoder.encode('<< /Type /Catalog /Pages 2 0 R >>'),
    encoder.encode('<< /Type /Pages /Kids [3 0 R] /Count 1 >>'),
    encoder.encode(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>`),
    concatBytes([
      encoder.encode(`<< /Type /XObject /Subtype /Image /Width ${canvas.width} /Height ${canvas.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpeg.length} >>\nstream\n`),
      jpeg,
      encoder.encode('\nendstream'),
    ]),
    encoder.encode(`<< /Length ${encoder.encode(content).length} >>\nstream\n${content}endstream`),
  ]
  const parts = [encoder.encode('%PDF-1.4\n%âãÏÓ\n')]
  const offsets = [0]
  let currentLength = parts[0].length
  objects.forEach((object, index) => {
    offsets.push(currentLength)
    const wrapped = concatBytes([encoder.encode(`${index + 1} 0 obj\n`), object, encoder.encode('\nendobj\n')])
    parts.push(wrapped)
    currentLength += wrapped.length
  })
  const xrefOffset = currentLength
  const xref = ['xref', `0 ${objects.length + 1}`, '0000000000 65535 f ']
  offsets.slice(1).forEach((offset) => xref.push(`${String(offset).padStart(10, '0')} 00000 n `))
  xref.push(`trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>`, `startxref\n${xrefOffset}`, '%%EOF')
  parts.push(encoder.encode(`${xref.join('\n')}\n`))
  downloadBlob(new Blob(parts, { type: 'application/pdf' }), filename)
}
