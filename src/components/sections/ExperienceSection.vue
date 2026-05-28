<script setup lang="ts">
import SectionHeader from '@/components/ui/SectionHeader.vue'
import RevealBlock from '@/components/animations/RevealBlock.vue'
import { workExperiences } from '@/data/experience'

</script>

<template>
  <section id="experience" class="section-shell py-24">
    <RevealBlock>
      <SectionHeader
        eyebrow="工作經歷"
        title="企業級平台、前後端協作與產品介面開發經驗。"
        description="經歷涵蓋 FinTech、BPM、前端元件、API 串接、資料表與雲端部署協作，也保留 UI/UX 與網站設計背景作為產品理解能力。"
      />
    </RevealBlock>

    <div class="space-y-5">
      <RevealBlock v-for="(item, index) in workExperiences" :key="`${item.company}-${item.period}`" :delay="`${index * 80}ms`">
        <div class="glass-panel rounded-2xl p-6">
          <div class="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <p class="text-sm font-semibold text-cyan-300">{{ item.period }}</p>
              <h3 class="mt-2 font-display text-2xl font-semibold text-white">{{ item.company }}</h3>
              <p class="mt-1 text-sm font-semibold text-zinc-300">{{ item.role }}</p>
            </div>
          </div>
          <p class="mt-4 leading-7 text-zinc-400">{{ item.summary }}</p>
          <ul class="mt-5 grid gap-3 md:grid-cols-3">
            <li
              v-for="highlight in item.highlights"
              :key="highlight"
              class="rounded-xl border border-white/10 bg-white/6 p-4 text-sm leading-6 text-zinc-400"
            >
              {{ highlight }}
            </li>
          </ul>
        </div>
      </RevealBlock>
    </div>
  </section>
</template>
