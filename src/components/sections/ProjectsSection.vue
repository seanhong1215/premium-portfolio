<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import ImageLightbox from '@/components/ui/ImageLightbox.vue'
import RevealBlock from '@/components/animations/RevealBlock.vue'
import { projects } from '@/data/projects'
import type { ProjectImage } from '@/types/portfolio'

const featuredProjects = computed(() => projects.slice(0, 3))
const activeImage = ref<ProjectImage | null>(null)
</script>

<template>
  <section id="projects" class="section-shell py-24">
    <RevealBlock>
      <SectionHeader
        eyebrow="作品案例"
        title="用作品說明我如何把需求、介面與工程落地。"
        description="首頁先呈現三個最能代表前端工程能力的案例：元件系統、即時資料介面與企業流程平台。每個案例都保留問題、解法、技術拆解與可檢視連結。"
      />
    </RevealBlock>

    <div class="space-y-10">
      <RevealBlock v-for="(project, index) in featuredProjects" :key="project.title" :delay="`${index * 80}ms`">
        <article class="glass-panel overflow-hidden rounded-3xl transition duration-200 hover:border-cyan-300/35">
          <div class="grid items-stretch gap-0 xl:grid-cols-[0.47fr_0.53fr]">
            <div class="flex h-full flex-col border-b border-white/10 bg-ink-950/80 p-4 md:p-5 xl:min-h-[620px] xl:border-b-0 xl:border-r">
              <button
                type="button"
                class="group relative flex min-h-[280px] flex-1 cursor-zoom-in overflow-hidden rounded-2xl border border-white/10 bg-black/35 text-left md:min-h-[360px]"
                :aria-label="`放大檢視 ${project.title} 主圖`"
                @click="activeImage = { src: project.coverImage, alt: project.coverAlt, label: `${project.title} 主圖` }"
              >
                <img
                  :src="project.coverImage"
                  :alt="project.coverAlt"
                  class="h-full w-full object-contain transition duration-300 hover:scale-[1.01]"
                  loading="lazy"
                />
                <div class="absolute left-4 top-4 rounded-full border border-white/15 bg-black/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  Case {{ String(index + 1).padStart(2, '0') }}
                </div>
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

            <div class="p-5 md:p-8">
              <p class="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">{{ project.category }}</p>
              <h3 class="mt-3 font-display text-3xl font-semibold leading-tight text-white md:text-4xl">{{ project.title }}</h3>
              <p class="mt-4 text-base leading-8 text-zinc-300">{{ project.summary }}</p>

              <div class="mt-6 grid gap-4 md:grid-cols-2">
                <div class="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <div class="flex items-center gap-2 text-sm font-semibold text-white">
                    <Icon icon="mdi:target-variant" class="h-5 w-5 text-cyan-300" />
                    作品目標
                  </div>
                  <p class="mt-3 text-sm leading-7 text-zinc-400">{{ project.problem }}</p>
                </div>

                <div class="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <div class="flex items-center gap-2 text-sm font-semibold text-white">
                    <Icon icon="mdi:lightbulb-on-outline" class="h-5 w-5 text-cyan-300" />
                    解決方式
                  </div>
                  <p class="mt-3 text-sm leading-7 text-zinc-400">{{ project.solution }}</p>
                </div>

                <div class="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <div class="flex items-center gap-2 text-sm font-semibold text-white">
                    <Icon icon="mdi:source-branch" class="h-5 w-5 text-cyan-300" />
                    技術拆解
                  </div>
                  <p class="mt-3 text-sm leading-7 text-zinc-400">{{ project.architecture }}</p>
                </div>

                <div class="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <div class="flex items-center gap-2 text-sm font-semibold text-white">
                    <Icon icon="mdi:shield-check-outline" class="h-5 w-5 text-cyan-300" />
                    開發挑戰
                  </div>
                  <p class="mt-3 text-sm leading-7 text-zinc-400">{{ project.challenge }}</p>
                </div>
              </div>

              <div class="mt-6">
                <p class="mb-3 text-sm font-semibold text-zinc-200">Tech Stack</p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in project.techStack"
                    :key="tech"
                    class="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-zinc-300"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <div class="mt-6 flex flex-wrap gap-3">
                <a class="focus-ring inline-flex cursor-pointer items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-ink-900 transition hover:bg-cyan-100" :href="project.demoUrl">
                  <Icon icon="mdi:open-in-new" class="h-5 w-5" />
                  線上展示
                </a>
                <a class="focus-ring inline-flex cursor-pointer items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-semibold text-zinc-200 transition hover:bg-white/10" :href="project.githubUrl">
                  <Icon icon="mdi:github" class="h-5 w-5" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </article>
      </RevealBlock>
    </div>

    <RevealBlock delay="160ms">
      <div class="mt-10 flex justify-center">
        <RouterLink
          to="/projects"
          class="focus-ring inline-flex cursor-pointer items-center gap-2 rounded-lg border border-white/15 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/12"
        >
          查看全部作品
          <Icon icon="mdi:arrow-right" class="h-5 w-5" />
        </RouterLink>
      </div>
    </RevealBlock>

    <ImageLightbox :image="activeImage" @close="activeImage = null" />
  </section>
</template>
