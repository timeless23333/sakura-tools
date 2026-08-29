import katex from 'katex'

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function renderMath(value, displayMode = false) {
  return katex.renderToString(value.trim(), {
    displayMode,
    throwOnError: false,
    strict: 'ignore',
    trust: false,
    output: 'htmlAndMathml',
  })
}

function safeUrl(value, image = false) {
  const url = value.trim()
  if (/^(https?:\/\/|#|\/)/i.test(url)) return escapeHtml(url)
  if (!image && /^mailto:/i.test(url)) return escapeHtml(url)
  if (image && /^data:image\/(png|jpe?g|gif|webp);base64,/i.test(url)) return escapeHtml(url)
  return '#'
}

function inlineMarkdown(value) {
  const codeSpans = []
  const inlineAssets = []
  const inlineMath = []
  let html = String(value).replace(/`([^`\n]+)`/g, (_, code) => {
    codeSpans.push(`<code>${escapeHtml(code)}</code>`)
    return `\u0000CODE${codeSpans.length - 1}\u0000`
  })
  html = html
    .replace(/\\\((.+?)\\\)/g, (_, expression) => {
      inlineMath.push(renderMath(expression))
      return `\u0000MATH${inlineMath.length - 1}\u0000`
    })
    .replace(/(^|[^\\$])\$(?!\$)([^$\n]+?)\$(?!\$)/g, (_, prefix, expression) => {
      inlineMath.push(renderMath(expression))
      return `${prefix}\u0000MATH${inlineMath.length - 1}\u0000`
    })
  html = escapeHtml(html)
  html = html.replace(/!\[([^\]]*)\]\(([^\s)]+)(?:\s+&quot;([^&]*)&quot;)?\)/g, (_, alt, url, title) => {
    const titleAttribute = title ? ` title="${escapeHtml(title)}"` : ''
    inlineAssets.push(`<img src="${safeUrl(url, true)}" alt="${alt}"${titleAttribute} loading="lazy">`)
    return `\u0000ASSET${inlineAssets.length - 1}\u0000`
  })
  html = html.replace(/\[([^\]]+)\]\(([^\s)]+)(?:\s+&quot;([^&]*)&quot;)?\)/g, (_, label, url, title) => {
    const titleAttribute = title ? ` title="${escapeHtml(title)}"` : ''
    inlineAssets.push(`<a href="${safeUrl(url)}"${titleAttribute} target="_blank" rel="noopener noreferrer">${label}</a>`)
    return `\u0000ASSET${inlineAssets.length - 1}\u0000`
  })
  html = html
    .replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>')
    .replace(/__([^_\n]+)__/g, '<strong>$1</strong>')
    .replace(/~~([^~\n]+)~~/g, '<del>$1</del>')
    .replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>')
    .replace(/(^|[^_])_([^_\n]+)_/g, '$1<em>$2</em>')
    .replace(/ {2}\n/g, '<br>')
  return html
    .replace(/\u0000ASSET(\d+)\u0000/g, (_, index) => inlineAssets[Number(index)])
    .replace(/\u0000MATH(\d+)\u0000/g, (_, index) => inlineMath[Number(index)])
    .replace(/\u0000CODE(\d+)\u0000/g, (_, index) => codeSpans[Number(index)])
}

function sanitizeTableHtml(rawHtml) {
  const allowed = new Set(['table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'caption', 'colgroup', 'col', 'br'])
  const selfClosing = new Set(['col', 'br'])
  const tokens = String(rawHtml).match(/<[^>]*>|[^<]+/g) || []
  return tokens.map((token) => {
    if (!token.startsWith('<')) return inlineMarkdown(token)
    const match = token.match(/^<\s*(\/?)\s*([a-zA-Z0-9]+)([^>]*)>/)
    if (!match) return escapeHtml(token)
    const closing = Boolean(match[1])
    const tag = match[2].toLowerCase()
    if (!allowed.has(tag)) return ''
    if (closing) return selfClosing.has(tag) ? '' : `</${tag}>`
    const attributes = []
    if (tag === 'td' || tag === 'th') {
      for (const name of ['colspan', 'rowspan']) {
        const value = match[3].match(new RegExp(`${name}\\s*=\\s*["']?(\\d{1,2})`, 'i'))?.[1]
        if (value) attributes.push(`${name}="${value}"`)
      }
    }
    return `<${tag}${attributes.length ? ` ${attributes.join(' ')}` : ''}>`
  }).join('')
}

function isTableDivider(line) {
  return /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line)
}

function tableCells(line) {
  return line.trim().replace(/^\||\|$/g, '').split('|').map((cell) => cell.trim())
}

function renderList(lines, start) {
  const ordered = /^\s*\d+[.)]\s+/.test(lines[start])
  const pattern = ordered ? /^\s*\d+[.)]\s+(.+)$/ : /^\s*[-+*]\s+(.+)$/
  const items = []
  let index = start
  while (index < lines.length) {
    const match = lines[index].match(pattern)
    if (!match) break
    const task = match[1].match(/^\[([ xX])\]\s+(.+)$/)
    if (task) {
      items.push(`<li class="task-item"><input type="checkbox" disabled${task[1].toLowerCase() === 'x' ? ' checked' : ''}> <span>${inlineMarkdown(task[2])}</span></li>`)
    } else {
      items.push(`<li>${inlineMarkdown(match[1])}</li>`)
    }
    index += 1
  }
  const tag = ordered ? 'ol' : 'ul'
  return { html: `<${tag}>${items.join('')}</${tag}>`, next: index }
}

export function renderMarkdown(markdown) {
  const lines = String(markdown || '').replaceAll('\r\n', '\n').split('\n')
  const blocks = []
  let index = 0
  while (index < lines.length) {
    const line = lines[index]
    if (!line.trim()) {
      index += 1
      continue
    }

    const trimmed = line.trim()
    if (trimmed.startsWith('$$') || trimmed.startsWith('\\[')) {
      const dollar = trimmed.startsWith('$$')
      const opening = dollar ? '$$' : '\\['
      const closing = dollar ? '$$' : '\\]'
      const expression = []
      let first = trimmed.slice(opening.length)
      if (first.endsWith(closing)) {
        first = first.slice(0, -closing.length)
        expression.push(first)
        index += 1
      } else {
        if (first) expression.push(first)
        index += 1
        while (index < lines.length && !lines[index].trim().endsWith(closing)) {
          expression.push(lines[index])
          index += 1
        }
        if (index < lines.length) {
          expression.push(lines[index].trim().slice(0, -closing.length))
          index += 1
        }
      }
      blocks.push(`<div class="math-display">${renderMath(expression.join('\n'), true)}</div>`)
      continue
    }

    if (/^<table(?:\s|>)/i.test(trimmed)) {
      const table = [line]
      index += 1
      while (index < lines.length && !table[table.length - 1].toLowerCase().includes('</table>')) {
        table.push(lines[index])
        index += 1
      }
      blocks.push(`<div class="table-wrap html-table">${sanitizeTableHtml(table.join('\n'))}</div>`)
      continue
    }

    const fence = line.match(/^\s*```([^`]*)$/)
    if (fence) {
      const code = []
      index += 1
      while (index < lines.length && !/^\s*```\s*$/.test(lines[index])) {
        code.push(lines[index])
        index += 1
      }
      index += index < lines.length ? 1 : 0
      const language = fence[1].trim().replace(/[^a-zA-Z0-9_-]/g, '')
      blocks.push(`<pre><code${language ? ` class="language-${language}"` : ''}>${escapeHtml(code.join('\n'))}</code></pre>`)
      continue
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/)
    if (heading) {
      const level = heading[1].length
      blocks.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`)
      index += 1
      continue
    }

    if (/^\s*((\*\s*){3,}|(-\s*){3,}|(_\s*){3,})$/.test(line)) {
      blocks.push('<hr>')
      index += 1
      continue
    }

    if (/^\s*>/.test(line)) {
      const quote = []
      while (index < lines.length && /^\s*>/.test(lines[index])) {
        quote.push(lines[index].replace(/^\s*>\s?/, ''))
        index += 1
      }
      blocks.push(`<blockquote>${renderMarkdown(quote.join('\n'))}</blockquote>`)
      continue
    }

    if (/^\s*([-+*]|\d+[.)])\s+/.test(line)) {
      const list = renderList(lines, index)
      blocks.push(list.html)
      index = list.next
      continue
    }

    if (index + 1 < lines.length && line.includes('|') && isTableDivider(lines[index + 1])) {
      const headers = tableCells(line)
      index += 2
      const rows = []
      while (index < lines.length && lines[index].includes('|') && lines[index].trim()) {
        rows.push(tableCells(lines[index]))
        index += 1
      }
      blocks.push(`<div class="table-wrap"><table><thead><tr>${headers.map((cell) => `<th>${inlineMarkdown(cell)}</th>`).join('')}</tr></thead><tbody>${rows.map((row) => `<tr>${headers.map((_, cellIndex) => `<td>${inlineMarkdown(row[cellIndex] || '')}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`)
      continue
    }

    const paragraph = [line]
    index += 1
    while (index < lines.length && lines[index].trim()
      && !/^(#{1,6})\s+/.test(lines[index])
      && !/^\s*```/.test(lines[index])
      && !/^\s*>/.test(lines[index])
      && !/^\s*([-+*]|\d+[.)])\s+/.test(lines[index])) {
      if (index + 1 < lines.length && isTableDivider(lines[index + 1])) break
      paragraph.push(lines[index])
      index += 1
    }
    blocks.push(`<p>${inlineMarkdown(paragraph.join('\n'))}</p>`)
  }
  return blocks.join('\n')
}

export function markdownTitle(markdown) {
  const match = String(markdown || '').match(/^#\s+(.+)$/m)
  return (match?.[1] || 'markdown-document').replace(/[*_`~<>:"/\\|?]+/g, '').trim() || 'markdown-document'
}
