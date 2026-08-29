import { zipSync } from 'fflate'
import { degrees, PDFDocument } from 'pdf-lib'

export function parsePageRange(value, total) {
  const input = value.trim().replaceAll('，', ',')
  if (!input) return Array.from({ length: total }, (_, index) => index)
  const selected = new Set()
  for (const rawPart of input.split(',')) {
    const part = rawPart.trim()
    if (!part) continue
    const match = part.match(/^(\d+)(?:\s*-\s*(\d*)?)?$/)
    if (!match) throw new Error(`无法识别页码范围“${part}”`)
    const start = Number(match[1])
    const end = part.includes('-') ? (match[2] ? Number(match[2]) : total) : start
    if (start < 1 || start > total || end < start || end > total) throw new Error(`页码“${part}”超出 1-${total}`)
    for (let page = start; page <= end; page += 1) selected.add(page - 1)
  }
  if (!selected.size) throw new Error('请至少选择一页')
  return [...selected].sort((a, b) => a - b)
}

export async function buildMergedPdf(documents, pages) {
  const output = await PDFDocument.create()
  const sources = await loadSources(documents, pages)
  for (const item of pages) {
    const [page] = await output.copyPages(sources.get(item.documentId), [item.sourceIndex])
    if (item.rotation) page.setRotation(degrees(normalizeRotation(page.getRotation().angle + item.rotation)))
    output.addPage(page)
  }
  output.setProducer('Sakura Tools')
  output.setCreator('Sakura Tools PDF 工具')
  return output.save({ useObjectStreams: true })
}

export async function buildSplitZip(documents, pages, baseName) {
  const sources = await loadSources(documents, pages)
  const files = {}
  const digits = Math.max(2, String(pages.length).length)
  for (let index = 0; index < pages.length; index += 1) {
    const item = pages[index]
    const output = await PDFDocument.create()
    const [page] = await output.copyPages(sources.get(item.documentId), [item.sourceIndex])
    if (item.rotation) page.setRotation(degrees(normalizeRotation(page.getRotation().angle + item.rotation)))
    output.addPage(page)
    output.setProducer('Sakura Tools')
    files[`${sanitizeFilename(baseName)}-${String(index + 1).padStart(digits, '0')}.pdf`] = await output.save({ useObjectStreams: true })
  }
  return zipSync(files, { level: 0 })
}

export function downloadBytes(bytes, filename, mimeType) {
  const blob = new Blob([bytes], { type: mimeType })
  const url = URL.createObjectURL(blob)
  const link = window.document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
  return blob.size
}

export function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 ** 2) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / 1024 ** 2).toFixed(2)} MB`
}

export function sanitizeFilename(value) {
  return (value || 'sakura-pdf').trim().replace(/[<>:"/\\|?*\x00-\x1F]/g, '-').replace(/\.+$/, '') || 'sakura-pdf'
}

async function loadSources(documents, pages) {
  const needed = new Set(pages.map((page) => page.documentId))
  const sources = new Map()
  for (const document of documents) {
    if (needed.has(document.id)) sources.set(document.id, await PDFDocument.load(document.bytes, { updateMetadata: false }))
  }
  return sources
}

function normalizeRotation(value) {
  return ((value % 360) + 360) % 360
}
