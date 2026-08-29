import { deltaE2000, hexToRgb, preparePalette, rgbToLab } from './color.js'
import { countColors } from './render.js'

function normalizeRegion(region, columns, rows) {
  if (!region) return { left: 0, top: 0, right: columns - 1, bottom: rows - 1 }
  return {
    left: Math.max(0, Math.min(region.startColumn, region.endColumn)),
    top: Math.max(0, Math.min(region.startRow, region.endRow)),
    right: Math.min(columns - 1, Math.max(region.startColumn, region.endColumn)),
    bottom: Math.min(rows - 1, Math.max(region.startRow, region.endRow)),
  }
}

export function symmetricIndices(index, columns, rows, symmetry = {}) {
  const row = Math.floor(index / columns)
  const column = index % columns
  const points = new Set([index])
  if (symmetry.horizontal) points.add(row * columns + (columns - column - 1))
  if (symmetry.vertical) points.add((rows - row - 1) * columns + column)
  if (symmetry.horizontal && symmetry.vertical) {
    points.add((rows - row - 1) * columns + (columns - column - 1))
  }
  return [...points]
}

export function paintIndices(cells, indices, colorIndex) {
  const result = new Int16Array(cells)
  for (const index of indices) result[index] = colorIndex
  return result
}

export function floodFill(cells, columns, rows, startIndex, colorIndex, symmetry = {}) {
  if (startIndex < 0 || startIndex >= cells.length) return new Int16Array(cells)
  const sourceColor = cells[startIndex]
  if (sourceColor === colorIndex) return new Int16Array(cells)
  const result = new Int16Array(cells)
  const visited = new Uint8Array(cells.length)
  const queue = [startIndex]
  visited[startIndex] = 1
  for (let cursor = 0; cursor < queue.length; cursor += 1) {
    const index = queue[cursor]
    const row = Math.floor(index / columns)
    const column = index % columns
    for (const target of symmetricIndices(index, columns, rows, symmetry)) result[target] = colorIndex
    const neighbors = [
      column > 0 ? index - 1 : -1,
      column < columns - 1 ? index + 1 : -1,
      row > 0 ? index - columns : -1,
      row < rows - 1 ? index + columns : -1,
    ]
    for (const neighbor of neighbors) {
      if (neighbor >= 0 && !visited[neighbor] && cells[neighbor] === sourceColor) {
        visited[neighbor] = 1
        queue.push(neighbor)
      }
    }
  }
  return result
}

export function fillRectangle(cells, columns, rows, region, colorIndex, symmetry = {}) {
  const result = new Int16Array(cells)
  const { left, top, right, bottom } = normalizeRegion(region, columns, rows)
  for (let row = top; row <= bottom; row += 1) {
    for (let column = left; column <= right; column += 1) {
      const index = row * columns + column
      for (const target of symmetricIndices(index, columns, rows, symmetry)) result[target] = colorIndex
    }
  }
  return result
}

export function replaceColor(cells, sourceIndex, targetIndex) {
  const result = new Int16Array(cells)
  if (sourceIndex === targetIndex) return result
  for (let index = 0; index < result.length; index += 1) {
    if (result[index] === sourceIndex) result[index] = targetIndex
  }
  return result
}

export function mirrorCells(cells, columns, rows, axis, region = null) {
  const result = new Int16Array(cells)
  const { left, top, right, bottom } = normalizeRegion(region, columns, rows)
  for (let row = top; row <= bottom; row += 1) {
    for (let column = left; column <= right; column += 1) {
      const source = row * columns + column
      const targetColumn = axis === 'horizontal' ? right - (column - left) : column
      const targetRow = axis === 'vertical' ? bottom - (row - top) : row
      result[targetRow * columns + targetColumn] = cells[source]
    }
  }
  return result
}

export function reducePaletteUsage(cells, colors, maximumColors) {
  const statistics = countColors(cells, colors)
  const limit = Math.max(2, Number(maximumColors) || colors.length)
  if (statistics.length <= limit) return new Int16Array(cells)
  const retained = statistics.slice(0, limit)
  const prepared = preparePalette(retained)
  const replacements = new Map()
  for (const item of statistics.slice(limit)) {
    const lab = rgbToLab(hexToRgb(item.hex))
    let closest = retained[0].index
    let distance = Number.POSITIVE_INFINITY
    for (const candidate of prepared) {
      const nextDistance = deltaE2000(lab, candidate.lab)
      if (nextDistance < distance) {
        distance = nextDistance
        closest = retained[candidate.index].index
      }
    }
    replacements.set(item.index, closest)
  }
  const result = new Int16Array(cells)
  for (let index = 0; index < result.length; index += 1) {
    if (replacements.has(result[index])) result[index] = replacements.get(result[index])
  }
  return result
}

export function removeSpeckles(cells, columns, rows, passes = 1) {
  let result = new Int16Array(cells)
  const moves = [-1, 0, 1]
  for (let pass = 0; pass < passes; pass += 1) {
    const source = result
    const next = new Int16Array(source)
    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < columns; column += 1) {
        const index = row * columns + column
        const ownColor = source[index]
        if (ownColor < 0) continue
        const counts = new Map()
        let sameNeighbors = 0
        for (const moveY of moves) {
          for (const moveX of moves) {
            if (!moveX && !moveY) continue
            const x = column + moveX
            const y = row + moveY
            if (x < 0 || y < 0 || x >= columns || y >= rows) continue
            const color = source[y * columns + x]
            if (color < 0) continue
            if (color === ownColor) sameNeighbors += 1
            counts.set(color, (counts.get(color) || 0) + 1)
          }
        }
        const [dominantColor, dominantCount] = [...counts.entries()].sort((a, b) => b[1] - a[1])[0] || []
        if (sameNeighbors <= 1 && dominantColor !== undefined && dominantColor !== ownColor && dominantCount >= 4) {
          next[index] = dominantColor
        }
      }
    }
    result = next
  }
  return result
}

export function suggestColorMerges(cells, colors, maximum = 8, threshold = 6) {
  const used = countColors(cells, colors)
  const prepared = new Map(used.map((item) => [item.index, rgbToLab(hexToRgb(item.hex))]))
  const suggestions = []
  for (let left = 0; left < used.length; left += 1) {
    for (let right = left + 1; right < used.length; right += 1) {
      const first = used[left]
      const second = used[right]
      const distance = deltaE2000(prepared.get(first.index), prepared.get(second.index))
      if (distance > threshold) continue
      const source = first.count <= second.count ? first : second
      const target = source === first ? second : first
      suggestions.push({ source, target, distance })
    }
  }
  return suggestions.sort((a, b) => a.distance - b.distance).slice(0, maximum)
}
