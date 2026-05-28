<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description: string
}>()
</script>

<template>
  <div class="mx-auto mb-10 max-w-4xl text-center md:mb-14">
    <p class="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">{{ eyebrow }}</p>
    <h2 class="mx-auto max-w-3xl font-display text-3xl font-semibold leading-[1.14] text-white [text-wrap:balance] md:text-5xl md:leading-[1.12]">
      {{ title }}
    </h2>
    <p class="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-400 [text-wrap:pretty] md:text-lg">
      {{ description }}
    </p>
  </div>
</template>
