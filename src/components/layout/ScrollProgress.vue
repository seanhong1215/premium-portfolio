<script setup lang="ts">
import { computed } from 'vue'
import { useScroll } from '@vueuse/core'

const { y } = useScroll(window)
const scale = computed(() => {
  if (typeof document === 'undefined') return '0%'
  const height = document.documentElement.scrollHeight - window.innerHeight
  return Math.min(1, Math.max(0, y.value / height))
})
</script>

<template>
  <div class="fixed left-0 top-0 z-50 h-1 w-full bg-transparent">
    <div
      class="h-full origin-left scale-x-0 bg-gradient-to-r from-blue-500 via-cyan-300 to-emerald-400 will-change-transform"
      :style="{ transform: `scaleX(${scale})` }"
    />
  </div>
</template>
