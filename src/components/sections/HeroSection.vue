<script setup lang="ts">
import { Icon } from '@iconify/vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import MetricCard from '@/components/ui/MetricCard.vue'
import RevealBlock from '@/components/animations/RevealBlock.vue'
import { heroSignals, profile, stats } from '@/data/profile'
</script>

<template>
  <section id="home" class="relative min-h-screen overflow-hidden bg-premium-radial pt-32">
    <div class="premium-grid absolute inset-0" aria-hidden="true" />
    <div class="absolute inset-x-0 top-24 mx-auto h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" aria-hidden="true" />

    <div class="section-shell relative grid gap-12 pb-20 pt-6 lg:grid-cols-[1.06fr_0.94fr] lg:items-start lg:pt-16">
      <RevealBlock>
        <div class="max-w-3xl">
          <div class="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
            <span class="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(34,197,94,0.9)]" />
            {{ profile.availability }}
          </div>
          <p class="mb-4 text-sm font-semibold uppercase tracking-[0.26em] text-cyan-300">
            {{ profile.role }}
          </p>
          <h1 class="max-w-4xl font-display text-5xl font-semibold leading-[1.08] text-white [text-wrap:balance] sm:text-6xl lg:text-7xl">
            <span class="block">打造穩定、可維護、</span>
            <span class="block">可擴充的前端產品介面。</span>
          </h1>
          <p class="mt-6 max-w-2xl text-lg leading-9 text-zinc-300 [text-wrap:pretty]">
            {{ profile.summary }}
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <BaseButton href="#projects" icon="mdi:arrow-right">查看作品案例</BaseButton>
            <BaseButton :href="profile.resumeUrl" variant="secondary" icon="mdi:file-download-outline">聯絡資訊</BaseButton>
          </div>

          <div class="mt-7 flex flex-wrap items-center gap-3">
            <a
              v-for="social in profile.socials"
              :key="social.label"
              :href="social.href"
              class="focus-ring inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-zinc-300 transition hover:border-cyan-300/50 hover:bg-white/10 hover:text-white"
            >
              <Icon :icon="social.icon" class="h-5 w-5" />
              {{ social.label }}
            </a>
          </div>
        </div>
      </RevealBlock>

      <RevealBlock delay="120ms">
        <div class="glass-panel relative rounded-3xl p-4 md:p-5">
          <div class="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <img
              :src="profile.heroImage"
              :alt="`${profile.name} 個人形象照`"
              class="max-h-[475px] w-full object-cover"
              loading="eager"
            />
          </div>
          <div class="mt-5 flex items-center justify-between">
            <div>
              <p class="text-sm font-semibold text-white">核心能力訊號</p>
              <p class="text-xs text-zinc-500">前端、介面、資料與部署協作</p>
            </div>
            <div class="flex gap-1.5">
              <span class="h-3 w-3 rounded-full bg-red-400/80" />
              <span class="h-3 w-3 rounded-full bg-yellow-300/80" />
              <span class="h-3 w-3 rounded-full bg-emerald-400/80" />
            </div>
          </div>

          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="signal in heroSignals"
              :key="signal"
              class="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-xs text-zinc-300"
            >
              {{ signal }}
            </span>
          </div>
        </div>
      </RevealBlock>

      <RevealBlock delay="180ms" class="lg:col-span-2">
        <div class="grid gap-4 md:grid-cols-3">
          <MetricCard v-for="stat in stats" :key="stat.label" :stat="stat" />
        </div>
      </RevealBlock>
    </div>
  </section>
</template>
