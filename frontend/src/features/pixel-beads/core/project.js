const PROJECT_VERSION = 1

export function createProject({ cells, columns, rows, paletteId, settings, inventory }) {
  return {
    type: 'sakura-tools/pixel-beads',
    version: PROJECT_VERSION,
    savedAt: new Date().toISOString(),
    paletteId,
    grid: { columns, rows, cells: Array.from(cells) },
    settings: {
      beadSize: settings.beadSize,
      detail: settings.detail,
      saturation: settings.saturation,
      contrast: settings.contrast,
      brightness: settings.brightness,
      maxColors: settings.maxColors,
    },
    inventory: { ...inventory },
  }
}

export function parseProject(text, palettes) {
  const project = JSON.parse(text)
  if (project?.type !== 'sakura-tools/pixel-beads' || project.version !== PROJECT_VERSION) {
    throw new Error('不是受支持的 Sakura Tools 拼豆工程文件')
  }
  const palette = palettes.find((item) => item.id === project.paletteId)
  if (!palette) throw new Error('工程使用的色板在当前版本中不可用')
  const columns = Number(project.grid?.columns)
  const rows = Number(project.grid?.rows)
  if (!Number.isInteger(columns) || !Number.isInteger(rows) || columns < 8 || rows < 8 || columns > 150 || rows > 150) {
    throw new Error('工程网格尺寸无效')
  }
  if (!Array.isArray(project.grid.cells) || project.grid.cells.length !== columns * rows) {
    throw new Error('工程网格数据不完整')
  }
  const cells = new Int16Array(project.grid.cells)
  if ([...cells].some((value) => value < -1 || value >= palette.colors.length)) {
    throw new Error('工程中包含无效色号')
  }
  return { ...project, palette, columns, rows, cells }
}

export function downloadTextFile(text, filename, type = 'application/json') {
  const blob = new Blob([text], { type })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

export function materialListCsv(statistics, inventory) {
  const rows = [['色号', '颜色', '需要', '已有', '缺少']]
  for (const item of statistics) {
    const owned = Math.max(0, Number(inventory[item.id]) || 0)
    rows.push([item.code, item.name, item.count, owned, Math.max(0, item.count - owned)])
  }
  return `\uFEFF${rows.map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(',')).join('\r\n')}`
}
