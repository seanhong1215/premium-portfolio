<script setup lang="ts">
import SectionHeader from '@/components/ui/SectionHeader.vue'
import RevealBlock from '@/components/animations/RevealBlock.vue'
import { skills } from '@/data/skills'
</script>

<template>
  <section id="skills" class="bg-white/[0.025] py-24">
    <div class="section-shell">
      <RevealBlock>
        <SectionHeader
          eyebrow="能力地圖"
          title="前端工程、系統協作與雲端部署能力。"
          description="技能內容聚焦面試會評估的工程能力：Vue / React、API 串接、後端服務協作、雲端部署、企業級平台與 Design System。"
        />
      </RevealBlock>

      <div class="grid gap-5 lg:grid-cols-2">
        <RevealBlock v-for="(skill, index) in skills" :key="skill.name" :delay="`${index * 60}ms`">
          <article class="group glass-panel rounded-2xl p-5 transition duration-200 hover:border-cyan-300/40 md:p-6">
            <h3 class="font-display text-xl font-semibold leading-7 text-white md:text-2xl">{{ skill.name }}</h3>
            <p class="mt-3 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">{{ skill.description }}</p>
            <div class="mt-5 flex flex-wrap gap-2">
              <span v-for="tool in skill.tools" :key="tool" class="rounded-full bg-white/7 px-3 py-1.5 text-xs text-zinc-300">
                {{ tool }}
              </span>
            </div>
          </article>
        </RevealBlock>
      </div>
    </div>
  </section>
</template>
