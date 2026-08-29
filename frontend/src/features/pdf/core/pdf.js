import { PDFDocument } from 'pdf-lib'
import * as pdfjs from 'pdfjs-dist/build/pdf.mjs'
import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

export * from './exporter.js'

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorkerUrl

const THUMBNAIL_WIDTH = 176

export async function inspectPdf(file, onProgress, maxPages = 200) {
  const bytes = new Uint8Array(await file.arrayBuffer())
  let editable
  try {
    editable = await PDFDocument.load(bytes, { updateMetadata: false })
  } catch (error) {
    if (/encrypt/i.test(error.message)) throw new Error('暂不支持受密码保护或加密的 PDF')
    throw new Error('无法读取这个 PDF，文件可能已损坏')
  }

  const pageCount = editable.getPageCount()
  if (pageCount > maxPages) throw new Error(`页面过多，本次最多还能添加 ${maxPages} 页`)
  const thumbnails = []
  const task = pdfjs.getDocument({ data: bytes.slice() })
  let document
  try {
    document = await task.promise
    for (let index = 0; index < document.numPages; index += 1) {
      const page = await document.getPage(index + 1)
      const baseViewport = page.getViewport({ scale: 1 })
      const scale = THUMBNAIL_WIDTH / baseViewport.width
      const viewport = page.getViewport({ scale: scale * Math.min(window.devicePixelRatio || 1, 2) })
      const canvas = documentOwner().createElement('canvas')
      canvas.width = Math.max(1, Math.round(viewport.width))
      canvas.height = Math.max(1, Math.round(viewport.height))
      await page.render({ canvas, viewport, background: '#ffffff' }).promise
      thumbnails.push({
        thumbnail: canvas.toDataURL('image/jpeg', 0.78),
        width: Math.round(baseViewport.width),
        height: Math.round(baseViewport.height),
      })
      page.cleanup()
      onProgress?.(index + 1, pageCount)
    }
  } catch (error) {
    if (/password/i.test(error.name) || /password|encrypt/i.test(error.message)) throw new Error('暂不支持受密码保护或加密的 PDF')
    throw new Error('PDF 页面预览生成失败')
  } finally {
    await document?.destroy()
  }

  return { bytes, pageCount, thumbnails }
}

function documentOwner() {
  return window.document
}
