<script setup lang="ts">
import { onKeyStroke } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import { useUiStore } from '@/stores/ui'

const ui = useUiStore()

const commands = [
  { label: '查看作品案例', href: '/#projects', icon: 'mdi:briefcase-outline' },
  { label: '完整作品列表', href: '/projects', icon: 'mdi:view-list-outline' },
  { label: '查看工作經歷', href: '/#experience', icon: 'mdi:timeline-text-outline' },
  { label: '聯絡合作', href: '/#contact', icon: 'mdi:send-outline' },
]

onKeyStroke('Escape', () => ui.closeCommand())
</script>

<template>
  <div
    v-if="ui.commandOpen"
    class="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 pt-24 backdrop-blur-sm"
    role="dialog"
    aria-modal="true"
  >
    <div class="glass-panel w-full max-w-xl rounded-2xl p-3 shadow-soft">
      <div class="flex items-center gap-3 border-b border-white/10 px-3 py-4">
        <Icon icon="mdi:console" class="h-5 w-5 text-cyan-300" />
        <span class="text-sm font-semibold text-white">快速導覽</span>
        <button class="focus-ring ml-auto rounded-md p-2 text-zinc-400 hover:bg-white/10 hover:text-white" @click="ui.closeCommand">
          <Icon icon="mdi:close" class="h-5 w-5" />
        </button>
      </div>
      <div class="py-2">
        <a
          v-for="command in commands"
          :key="command.label"
          :href="command.href"
          class="focus-ring flex items-center gap-3 rounded-xl px-3 py-4 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
          @click="ui.closeCommand"
        >
          <Icon :icon="command.icon" class="h-5 w-5 text-cyan-300" />
          {{ command.label }}
        </a>
      </div>
    </div>
  </div>
</template>
