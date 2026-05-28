<script setup lang="ts">
import SectionHeader from '@/components/ui/SectionHeader.vue'
import RevealBlock from '@/components/animations/RevealBlock.vue'
import { timeline } from '@/data/profile'
</script>

<template>
  <section id="about" class="section-shell py-24">
    <RevealBlock>
      <SectionHeader
        eyebrow="關於我"
        title="不只完成畫面，也把資料流程與使用體驗一起整理清楚。"
        description="我的經驗橫跨 Vue / React 產品介面、後端服務協作、雲端部署流程與 UI/UX 設計。能從需求、資料狀態、元件結構到操作流程，整理成可維護、可交付的前端方案。"
      />
    </RevealBlock>

    <div class="grid gap-5 lg:grid-cols-3">
      <RevealBlock v-for="(item, index) in timeline" :key="item.title" :delay="`${index * 90}ms`">
        <article class="glass-panel h-full rounded-2xl p-6">
          <p class="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">{{ item.period }}</p>
          <h3 class="font-display text-2xl font-semibold text-white">{{ item.title }}</h3>
          <p class="mt-4 leading-7 text-zinc-400">{{ item.description }}</p>
        </article>
      </RevealBlock>
    </div>
  </section>
</template>
