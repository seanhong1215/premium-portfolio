<script setup lang="ts">
import type { Stat } from '@/types/portfolio'

defineProps<{
  stat: Stat
}>()
</script>

<template>
  <div class="glass-panel rounded-xl p-4">
    <div class="font-display text-2xl font-semibold leading-tight text-white">{{ stat.value }}</div>
    <div class="mt-2 text-sm font-semibold text-zinc-200">{{ stat.label }}</div>
    <p class="mt-2 text-xs leading-5 text-zinc-500">{{ stat.detail }}</p>
  </div>
</template>
