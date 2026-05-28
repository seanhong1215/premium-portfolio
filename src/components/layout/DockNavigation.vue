<script setup lang="ts">
import { Icon } from '@iconify/vue'

const links = [
  { label: '首頁', href: '/#home', icon: 'mdi:home-outline' },
  { label: '作品', href: '/#projects', icon: 'mdi:briefcase-outline' },
  { label: '經歷', href: '/#experience', icon: 'mdi:timeline-text-outline' },
  { label: '聯絡', href: '/#contact', icon: 'mdi:message-outline' },
]
</script>

<template>
  <nav class="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 rounded-2xl border border-white/10 bg-black/70 p-2 shadow-soft backdrop-blur-xl md:hidden">
    <a
      v-for="link in links"
      :key="link.href"
      :href="link.href"
      class="focus-ring grid h-12 w-14 place-items-center rounded-xl text-zinc-400 transition hover:bg-white/10 hover:text-white"
      :aria-label="link.label"
    >
      <Icon :icon="link.icon" class="h-5 w-5" />
    </a>
  </nav>
</template>
