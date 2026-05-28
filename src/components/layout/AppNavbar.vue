<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useUiStore } from '@/stores/ui'

const ui = useUiStore()

const links = [
  { label: '關於', href: '/#about' },
  { label: '能力', href: '/#skills' },
  { label: '作品', href: '/#projects' },
  { label: '經歷', href: '/#experience' },
  { label: '聯絡', href: '/#contact' },
]
</script>

<template>
  <header class="fixed left-4 right-4 top-4 z-40">
    <nav class="glass-panel mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl px-4">
      <RouterLink to="/" class="focus-ring flex items-center gap-3 rounded-lg">
        <span class="grid h-9 w-9 place-items-center rounded-lg bg-white text-sm font-black text-ink-900">SH</span>
        <span class="hidden text-sm font-semibold text-white sm:block">前端工程師作品集</span>
      </RouterLink>
      <div class="hidden items-center gap-1 md:flex">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="focus-ring rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/8 hover:text-white"
        >
          {{ link.label }}
        </a>
      </div>
      <button
        class="focus-ring inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm font-semibold text-zinc-200 transition hover:border-cyan-300/50 hover:bg-white/10"
        @click="ui.toggleCommand"
      >
        <Icon icon="mdi:console-line" class="h-5 w-5 text-cyan-300" />
        <span class="hidden sm:inline">快速導覽</span>
      </button>
    </nav>
  </header>
</template>
