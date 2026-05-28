<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import AppNavbar from '@/components/layout/AppNavbar.vue'
import DockNavigation from '@/components/layout/DockNavigation.vue'
import ScrollProgress from '@/components/layout/ScrollProgress.vue'
import CommandMenu from '@/components/common/CommandMenu.vue'
import MetricCard from '@/components/ui/MetricCard.vue'
import ImageLightbox from '@/components/ui/ImageLightbox.vue'
import RevealBlock from '@/components/animations/RevealBlock.vue'
import { projects } from '@/data/projects'
import type { ProjectImage } from '@/types/portfolio'

const activeImage = ref<ProjectImage | null>(null)
</script>

<template>
  <ScrollProgress />
  <AppNavbar />
  <main class="min-h-screen bg-premium-radial pt-32">
    <section class="section-shell pb-24">
      <RevealBlock>
        <div class="mb-12 max-w-3xl">
          <RouterLink
            to="/"
            class="focus-ring mb-6 inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
          >
            <Icon icon="mdi:arrow-left" class="h-5 w-5" />
            回首頁
          </RouterLink>
          <p class="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">All Projects</p>
          <h1 class="font-display text-4xl font-semibold leading-tight text-white md:text-6xl">完整作品案例</h1>
          <p class="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            以下是我在不同專案中負責的部分，包含問題背景、解決方式、技術架構與開發挑戰等面向的說明。
          </p>
        </div>
      </RevealBlock>

      <div class="space-y-8">
        <RevealBlock v-for="(project, index) in projects" :key="project.title" :delay="`${index * 70}ms`">
          <article class="glass-panel overflow-hidden rounded-3xl">
            <div class="grid items-stretch gap-0 xl:grid-cols-[0.46fr_0.54fr]">
              <div class="flex h-full flex-col border-b border-white/10 bg-ink-900/80 p-4 xl:min-h-[580px] xl:border-b-0 xl:border-r">
                <button
                  type="button"
                  class="group relative flex min-h-[280px] flex-1 cursor-zoom-in overflow-hidden rounded-2xl border border-white/10 bg-black/35 text-left md:min-h-[360px]"
                  :aria-label="`放大檢視 ${project.title} 主圖`"
                  @click="activeImage = { src: project.coverImage, alt: project.coverAlt, label: `${project.title} 主圖` }"
                >
                  <img :src="project.coverImage" :alt="project.coverAlt" class="h-full w-full object-contain" loading="lazy" />
                  <div class="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition duration-200 group-hover:bg-black/25 group-hover:opacity-100">
                    <span class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                      <Icon icon="mdi:magnify-plus-outline" class="h-5 w-5" />
                      點擊放大
                    </span>
                  </div>
                </button>

                <div v-if="project.detailImages?.length" class="mt-3 grid shrink-0 gap-2 sm:grid-cols-3">
                  <figure
                    v-for="image in project.detailImages.slice(0, 3)"
                    :key="image.label"
                    class="overflow-hidden rounded-lg border border-white/10 bg-black/30"
                  >
                    <button
                      type="button"
                      class="group relative aspect-[16/10] w-full cursor-zoom-in overflow-hidden"
                      :aria-label="`放大檢視 ${image.label}`"
                      @click="activeImage = image"
                    >
                      <img :src="image.src" :alt="image.alt" class="h-full w-full object-contain" loading="lazy" />
                      <span class="absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/55 text-white opacity-0 transition group-hover:opacity-100">
                        <Icon icon="mdi:magnify-plus-outline" class="h-4 w-4" />
                      </span>
                    </button>
                    <figcaption class="border-t border-white/10 px-2.5 py-1.5 text-[11px] font-medium leading-tight text-zinc-300">
                      {{ image.label }}
                    </figcaption>
                  </figure>
                </div>
              </div>

              <div class="p-6 md:p-8">
                <p class="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">{{ project.category }}</p>
                <h2 class="mt-3 font-display text-3xl font-semibold leading-tight text-white">{{ project.title }}</h2>
                <p class="mt-4 text-base leading-8 text-zinc-300">{{ project.summary }}</p>

                <div class="mt-6 grid gap-4 md:grid-cols-2">
                  <div>
                    <p class="text-sm font-semibold text-white">問題背景</p>
                    <p class="mt-2 text-sm leading-6 text-zinc-500">{{ project.problem }}</p>
                  </div>
                  <div>
                    <p class="text-sm font-semibold text-white">解決方式</p>
                    <p class="mt-2 text-sm leading-6 text-zinc-500">{{ project.solution }}</p>
                  </div>
                  <div>
                    <p class="text-sm font-semibold text-white">技術架構</p>
                    <p class="mt-2 text-sm leading-6 text-zinc-500">{{ project.architecture }}</p>
                  </div>
                  <div>
                    <p class="text-sm font-semibold text-white">開發挑戰</p>
                    <p class="mt-2 text-sm leading-6 text-zinc-500">{{ project.challenge }}</p>
                  </div>
                </div>

                <div class="mt-6 flex flex-wrap gap-2">
                  <span v-for="tech in project.techStack" :key="tech" class="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-300">
                    {{ tech }}
                  </span>
                </div>

                <div class="mt-6 flex flex-wrap gap-3">
                  <a class="focus-ring inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-ink-900 transition hover:bg-cyan-100" :href="project.demoUrl">
                    <Icon icon="mdi:open-in-new" class="h-5 w-5" />
                    線上展示
                  </a>
                  <a class="focus-ring inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-semibold text-zinc-200 transition hover:bg-white/10" :href="project.githubUrl">
                    <Icon icon="mdi:github" class="h-5 w-5" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </article>
        </RevealBlock>
      </div>
    </section>
  </main>
  <AppFooter />
  <DockNavigation />
  <CommandMenu />
  <ImageLightbox :image="activeImage" @close="activeImage = null" />
</template>
