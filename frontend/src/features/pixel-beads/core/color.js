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

// CIEDE2000 比简单的 Lab 欧氏距离更贴近人眼对浅色、肤色和低饱和颜色的判断。
export function deltaE2000(left, right) {
  const radians = (degrees) => degrees * Math.PI / 180
  const degrees = (radiansValue) => radiansValue * 180 / Math.PI
  const chromaLeft = Math.hypot(left.a, left.b)
  const chromaRight = Math.hypot(right.a, right.b)
  const meanChroma = (chromaLeft + chromaRight) / 2
  const compensation = 0.5 * (1 - Math.sqrt((meanChroma ** 7) / (meanChroma ** 7 + 25 ** 7)))
  const aLeft = (1 + compensation) * left.a
  const aRight = (1 + compensation) * right.a
  const adjustedChromaLeft = Math.hypot(aLeft, left.b)
  const adjustedChromaRight = Math.hypot(aRight, right.b)
  const hue = (a, b) => {
    const value = degrees(Math.atan2(b, a))
    return value >= 0 ? value : value + 360
  }
  const hueLeft = hue(aLeft, left.b)
  const hueRight = hue(aRight, right.b)
  const deltaLightness = right.l - left.l
  const deltaChroma = adjustedChromaRight - adjustedChromaLeft
  let deltaHueDegrees = hueRight - hueLeft
  if (adjustedChromaLeft * adjustedChromaRight === 0) deltaHueDegrees = 0
  else if (deltaHueDegrees > 180) deltaHueDegrees -= 360
  else if (deltaHueDegrees < -180) deltaHueDegrees += 360
  const deltaHue = 2 * Math.sqrt(adjustedChromaLeft * adjustedChromaRight) * Math.sin(radians(deltaHueDegrees / 2))
  const meanLightness = (left.l + right.l) / 2
  const meanAdjustedChroma = (adjustedChromaLeft + adjustedChromaRight) / 2
  let meanHue = hueLeft + hueRight
  if (adjustedChromaLeft * adjustedChromaRight === 0) meanHue = hueLeft + hueRight
  else if (Math.abs(hueLeft - hueRight) <= 180) meanHue /= 2
  else if (meanHue < 360) meanHue = (meanHue + 360) / 2
  else meanHue = (meanHue - 360) / 2
  const hueFactor = 1
    - 0.17 * Math.cos(radians(meanHue - 30))
    + 0.24 * Math.cos(radians(2 * meanHue))
    + 0.32 * Math.cos(radians(3 * meanHue + 6))
    - 0.20 * Math.cos(radians(4 * meanHue - 63))
  const lightnessWeight = 1 + 0.015 * ((meanLightness - 50) ** 2) / Math.sqrt(20 + (meanLightness - 50) ** 2)
  const chromaWeight = 1 + 0.045 * meanAdjustedChroma
  const hueWeight = 1 + 0.015 * meanAdjustedChroma * hueFactor
  const rotation = -2 * Math.sqrt((meanAdjustedChroma ** 7) / (meanAdjustedChroma ** 7 + 25 ** 7))
    * Math.sin(radians(60 * Math.exp(-(((meanHue - 275) / 25) ** 2))))
  const lightnessTerm = deltaLightness / lightnessWeight
  const chromaTerm = deltaChroma / chromaWeight
  const hueTerm = deltaHue / hueWeight
  return Math.sqrt(
    lightnessTerm ** 2
    + chromaTerm ** 2
    + hueTerm ** 2
    + rotation * chromaTerm * hueTerm,
  )
}

export function nearestPaletteIndex(rgb, preparedColors) {
  const lab = rgbToLab(rgb)
  const sourceChroma = Math.hypot(lab.a, lab.b)
  let bestIndex = 0
  let bestDistance = Number.POSITIVE_INFINITY
  for (const color of preparedColors) {
    const candidateChroma = Math.hypot(color.lab.a, color.lab.b)
    const washoutPenalty = sourceChroma > 7 && candidateChroma < sourceChroma * 0.32
      ? (sourceChroma - candidateChroma) * 0.18
      : 0
    const distance = deltaE2000(lab, color.lab) + washoutPenalty
    if (distance < bestDistance) {
      bestDistance = distance
      bestIndex = color.index
    }
  }
  return bestIndex
}
