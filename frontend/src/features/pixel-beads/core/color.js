export function hexToRgb(hex) {
  const value = Number.parseInt(hex.replace('#', ''), 16)
  return { r: (value >> 16) & 255, g: (value >> 8) & 255, b: value & 255 }
}

function srgbToLinear(value) {
  const normalized = value / 255
  return normalized <= 0.04045
    ? normalized / 12.92
    : ((normalized + 0.055) / 1.055) ** 2.4
}

export function rgbToLab({ r, g, b }) {
  const red = srgbToLinear(r)
  const green = srgbToLinear(g)
  const blue = srgbToLinear(b)
  const x = (red * 0.4124 + green * 0.3576 + blue * 0.1805) / 0.95047
  const y = red * 0.2126 + green * 0.7152 + blue * 0.0722
  const z = (red * 0.0193 + green * 0.1192 + blue * 0.9505) / 1.08883
  const transform = (value) => value > 0.008856 ? Math.cbrt(value) : 7.787 * value + 16 / 116
  const fx = transform(x)
  const fy = transform(y)
  const fz = transform(z)
  return { l: 116 * fy - 16, a: 500 * (fx - fy), b: 200 * (fy - fz) }
}

export function preparePalette(colors) {
  return colors.map((color, index) => ({
    ...color,
    index,
    rgb: hexToRgb(color.hex),
    lab: rgbToLab(hexToRgb(color.hex)),
  }))
}

export function nearestPaletteIndex(rgb, preparedColors) {
  const lab = rgbToLab(rgb)
  let bestIndex = 0
  let bestDistance = Number.POSITIVE_INFINITY
  for (const color of preparedColors) {
    const distance = (lab.l - color.lab.l) ** 2 + (lab.a - color.lab.a) ** 2 + (lab.b - color.lab.b) ** 2
    if (distance < bestDistance) {
      bestDistance = distance
      bestIndex = color.index
    }
  }
  return bestIndex
}
