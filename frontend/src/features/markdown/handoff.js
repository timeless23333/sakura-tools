// 页面间的 Markdown 交接：PDF → Markdown 工具把结果传给现有 Markdown 编辑器。
// 只保存在当前 SPA 会话内存中，不写入 localStorage/服务器，刷新即失效，
// 与编辑器“刷新后清空”的隐私约定一致。

let pending = null

export function setPendingMarkdown(content, name = 'converted.md') {
  pending = { content, name }
}

export function takePendingMarkdown() {
  const item = pending
  pending = null
  return item
}
