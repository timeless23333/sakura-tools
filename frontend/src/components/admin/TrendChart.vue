<script setup>
import { computed, ref } from 'vue'

// 轻量 30 天趋势柱状图：纯 SVG，无第三方图表库。
const props = defineProps({
  points: { type: Array, default: () => [] },
})

const series = [
  { key: 'pv', label: 'PV', color: 'var(--sakura)' },
  { key: 'uv', label: 'UV', color: 'var(--blue)' },
  { key: 'tool_use', label: '工具使用', color: 'var(--green)' },
]
const active = ref('pv')

const width = 760
const height = 216
const plotTop = 14
const plotBottom = 178
const slot = width / Math.max(props.points.length, 1)
const barWidth = Math.max(slot - 6, 2)

const maxValue = computed(() => Math.max(1, ...props.points.map((point) => point[active.value] || 0)))

function barX(index) {
  return index * slot + (slot - barWidth) / 2
}

function barHeight(value) {
  return (value / maxValue.value) * (plotBottom - plotTop)
}

function label(point) {
  return point.day.slice(5)
}

function shouldShowLabel(index) {
  return index % 5 === 0 || index === props.points.length - 1
}

function seriesColor() {
  return series.find((item) => item.key === active.value)?.color || 'var(--sakura)'
}
</script>

<template>
  <div class="trend-chart">
    <div class="trend-switch" role="tablist" aria-label="趋势指标">
      <button
        v-for="item in series"
        :key="item.key"
        type="button"
        :class="{ active: active === item.key }"
        @click="active = item.key"
      >{{ item.label }}</button>
    </div>
    <svg :viewBox="`0 0 ${width} ${height}`" class="trend-svg" role="img" aria-label="最近30天趋势图">
      <line :x1="0" :y1="plotBottom" :x2="width" :y2="plotBottom" class="trend-axis" />
      <text :x="4" :y="plotTop - 2" class="trend-max">{{ maxValue }}</text>
      <g v-for="(point, index) in points" :key="point.day">
        <rect
          :x="barX(index)"
          :y="plotBottom - barHeight(point[active] || 0)"
          :width="barWidth"
          :height="barHeight(point[active] || 0)"
          rx="3"
          :fill="seriesColor()"
          class="trend-bar"
        >
          <title>{{ point.day }} · {{ series.find(s => s.key === active)?.label }} {{ (point[active] || 0).toLocaleString() }}</title>
        </rect>
        <text
          v-if="shouldShowLabel(index)"
          :x="barX(index) + barWidth / 2"
          :y="plotBottom + 18"
          class="trend-label"
          text-anchor="middle"
        >{{ label(point) }}</text>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.trend-chart { width: 100%; }
.trend-switch { display: flex; gap: 8px; margin-bottom: 10px; }
.trend-switch button {
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--muted);
  border-radius: 999px;
  padding: 4px 14px;
  font-size: 13px;
  cursor: pointer;
}
.trend-switch button.active {
  border-color: var(--sakura);
  color: var(--sakura);
  background: var(--sakura-pale);
}
.trend-svg { width: 100%; height: auto; display: block; }
.trend-bar { opacity: 0.85; }
.trend-bar:hover { opacity: 1; }
.trend-axis { stroke: var(--line-dark); stroke-width: 1; }
.trend-max { fill: var(--muted); font-size: 11px; }
.trend-label { fill: var(--muted); font-size: 11px; }
</style>
