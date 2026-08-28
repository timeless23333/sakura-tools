<script setup>
import { computed, ref } from 'vue'
import { ClockIcon as Clock, RefreshCwIcon as RefreshCw } from '@lucide/vue'

const now = Date.now()
const timestamp = ref(Math.floor(now / 1000))
const dateInput = ref(toLocalInput(now))
const unit = ref('seconds')

function toLocalInput(value) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  const offset = date.getTimezoneOffset() * 60000
  return new Date(date.getTime() - offset).toISOString().slice(0, 19)
}

function fromTimestamp() {
  const millis = unit.value === 'seconds' ? Number(timestamp.value) * 1000 : Number(timestamp.value)
  const converted = toLocalInput(millis)
  if (converted) dateInput.value = converted
}

function fromDate() {
  const millis = new Date(dateInput.value).getTime()
  if (Number.isNaN(millis)) return
  timestamp.value = unit.value === 'seconds' ? Math.floor(millis / 1000) : millis
}

function resetNow() {
  const value = Date.now()
  timestamp.value = unit.value === 'seconds' ? Math.floor(value / 1000) : value
  dateInput.value = toLocalInput(value)
}

const readable = computed(() => {
  const date = new Date(dateInput.value)
  return Number.isNaN(date.getTime()) ? '请输入完整日期时间' : date.toLocaleString('zh-CN', { dateStyle: 'full', timeStyle: 'medium' })
})
</script>

<template>
  <div class="tool-panel timestamp-panel">
    <div class="timestamp-grid">
      <section>
        <label for="timestamp">时间戳</label>
        <input id="timestamp" v-model="timestamp" type="number" @input="fromTimestamp" />
        <div class="unit-toggle">
          <button type="button" :class="{ active: unit === 'seconds' }" @click="unit = 'seconds'; fromDate()">秒</button>
          <button type="button" :class="{ active: unit === 'milliseconds' }" @click="unit = 'milliseconds'; fromDate()">毫秒</button>
        </div>
      </section>
      <section>
        <label for="date-input">本地日期时间</label>
        <input id="date-input" v-model="dateInput" type="datetime-local" step="1" @input="fromDate" />
        <p>{{ readable }}</p>
      </section>
    </div>
    <button class="secondary-button" type="button" @click="resetNow"><RefreshCw :size="16" /> 使用当前时间</button>
    <div class="timezone-note"><Clock :size="15" /> 当前浏览器时区：{{ Intl.DateTimeFormat().resolvedOptions().timeZone }}</div>
  </div>
</template>
