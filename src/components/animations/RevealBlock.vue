<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

defineProps<{
  delay?: string
}>()

const root = ref<HTMLElement | null>(null)
useScrollReveal(root)
</script>

<template>
  <div ref="root" class="reveal-block" :style="{ transitionDelay: delay || '0ms' }">
    <slot />
  </div>
</template>

<style scoped>
.reveal-block {
  transform: translateZ(0);
  backface-visibility: hidden;
}
</style>
