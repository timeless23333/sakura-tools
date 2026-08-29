export function parseHex(input) {
  const raw = String(input || '').trim().replace(/^#/, '')
  if (![3, 4, 6, 8].includes(raw.length) || !/^[0-9a-f]+$/i.test(raw)) return null
  const expanded = raw.length <= 4 ? [...raw].map((character) => character + character).join('') : raw
  return {
    r: Number.parseInt(expanded.slice(0, 2), 16),
    g: Number.parseInt(expanded.slice(2, 4), 16),
    b: Number.parseInt(expanded.slice(4, 6), 16),
    a: expanded.length === 8 ? Number.parseInt(expanded.slice(6, 8), 16) / 255 : 1,
  }
}

export function rgbToHex({ r, g, b, a = 1 }, includeAlpha = a < 1) {
  const channel = (value) => clamp(Math.round(value), 0, 255).toString(16).padStart(2, '0')
  const alpha = includeAlpha ? channel(clamp(a, 0, 1) * 255) : ''
  return `#${channel(r)}${channel(g)}${channel(b)}${alpha}`.toUpperCase()
}

export function rgbToHsl({ r, g, b }) {
  const red = r / 255
  const green = g / 255
  const blue = b / 255
  const max = Math.max(red, green, blue)
  const min = Math.min(red, green, blue)
  const delta = max - min
  let hue = 0
  if (delta) {
    if (max === red) hue = 60 * (((green - blue) / delta) % 6)
    else if (max === green) hue = 60 * ((blue - red) / delta + 2)
    else hue = 60 * ((red - green) / delta + 4)
  }
  const lightness = (max + min) / 2
  const saturation = delta ? delta / (1 - Math.abs(2 * lightness - 1)) : 0
  return { h: normalizeHue(hue), s: saturation * 100, l: lightness * 100 }
}

export function hslToRgb({ h, s, l, a = 1 }) {
  const hue = normalizeHue(h)
  const saturation = clamp(s, 0, 100) / 100
  const lightness = clamp(l, 0, 100) / 100
  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation
  const section = hue / 60
  const second = chroma * (1 - Math.abs((section % 2) - 1))
  const match = lightness - chroma / 2
  const options = [[chroma, second, 0], [second, chroma, 0], [0, chroma, second], [0, second, chroma], [second, 0, chroma], [chroma, 0, second]]
  const [red, green, blue] = options[Math.floor(section) % 6]
  return { r: (red + match) * 255, g: (green + match) * 255, b: (blue + match) * 255, a }
}

export function rgbToHsv({ r, g, b }) {
  const red = r / 255
  const green = g / 255
  const blue = b / 255
  const max = Math.max(red, green, blue)
  const min = Math.min(red, green, blue)
  const delta = max - min
  let hue = 0
  if (delta) {
    if (max === red) hue = 60 * (((green - blue) / delta) % 6)
    else if (max === green) hue = 60 * ((blue - red) / delta + 2)
    else hue = 60 * ((red - green) / delta + 4)
  }
  return { h: normalizeHue(hue), s: max ? (delta / max) * 100 : 0, v: max * 100 }
}

export function hsvToRgb({ h, s, v, a = 1 }) {
  const hue = normalizeHue(h)
  const saturation = clamp(s, 0, 100) / 100
  const value = clamp(v, 0, 100) / 100
  const chroma = value * saturation
  const section = hue / 60
  const second = chroma * (1 - Math.abs((section % 2) - 1))
  const match = value - chroma
  const options = [[chroma, second, 0], [second, chroma, 0], [0, chroma, second], [0, second, chroma], [second, 0, chroma], [chroma, 0, second]]
  const [red, green, blue] = options[Math.floor(section) % 6]
  return { r: (red + match) * 255, g: (green + match) * 255, b: (blue + match) * 255, a }
}

export function rgbToCmyk({ r, g, b }) {
  const red = r / 255
  const green = g / 255
  const blue = b / 255
  const key = 1 - Math.max(red, green, blue)
  if (key >= 1) return { c: 0, m: 0, y: 0, k: 100 }
  return {
    c: ((1 - red - key) / (1 - key)) * 100,
    m: ((1 - green - key) / (1 - key)) * 100,
    y: ((1 - blue - key) / (1 - key)) * 100,
    k: key * 100,
  }
}

export function contrastRatio(first, second) {
  const lighter = Math.max(relativeLuminance(first), relativeLuminance(second))
  const darker = Math.min(relativeLuminance(first), relativeLuminance(second))
  return (lighter + 0.05) / (darker + 0.05)
}

export function compositeColors(foreground, background) {
  const alpha = clamp(foreground.a ?? 1, 0, 1)
  return {
    r: foreground.r * alpha + background.r * (1 - alpha),
    g: foreground.g * alpha + background.g * (1 - alpha),
    b: foreground.b * alpha + background.b * (1 - alpha),
    a: 1,
  }
}

export function readableTextColor(color) {
  return contrastRatio(color, { r: 255, g: 255, b: 255 }) >= contrastRatio(color, { r: 25, g: 24, b: 22 }) ? '#FFFFFF' : '#191816'
}

export function generatePalette(color, scheme = 'analogous') {
  const hsl = rgbToHsl(color)
  if (scheme === 'monochrome') {
    return [18, 32, 48, 64, 80].map((lightness) => rgbToHex(hslToRgb({ ...hsl, l: lightness })))
  }
  const rotations = {
    analogous: [-40, -20, 0, 20, 40],
    complementary: [-30, 0, 180, 200, 220],
    triadic: [0, 120, 240, 260, 100],
    tetradic: [0, 90, 180, 270, 315],
  }[scheme] || [0]
  return rotations.map((offset, index) => rgbToHex(hslToRgb({
    h: hsl.h + offset,
    s: clamp(hsl.s + (index % 2 ? -6 : 5), 18, 92),
    l: clamp(hsl.l + (index === 3 ? 10 : index === 4 ? -10 : 0), 12, 88),
  })))
}

function relativeLuminance({ r, g, b }) {
  const linear = [r, g, b].map((value) => {
    const channel = clamp(value, 0, 255) / 255
    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
  })
  return linear[0] * 0.2126 + linear[1] * 0.7152 + linear[2] * 0.0722
}

function normalizeHue(value) {
  return ((Number(value) % 360) + 360) % 360
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}
