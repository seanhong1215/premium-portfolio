<script setup lang="ts">
import { profile } from '@/data/profile'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="section-shell border-t border-white/10 py-10">
    <div class="flex flex-col gap-4 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
      <div>
        <p class="font-semibold text-zinc-300">{{ profile.name }}</p>
        <p class="mt-1">{{ profile.role }}</p>
      </div>

      <div class="text-left md:text-right">
        <p>Built with Vue 3, TypeScript and TailwindCSS.</p>
        <p class="mt-1">© {{ year }} {{ profile.name }}. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
