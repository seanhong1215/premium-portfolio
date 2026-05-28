<script setup lang="ts">
import { Icon } from '@iconify/vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import RevealBlock from '@/components/animations/RevealBlock.vue'
import { profile } from '@/data/profile'
</script>

<template>
  <section id="contact" class="section-shell py-24">
    <RevealBlock>
      <div class="glass-panel overflow-hidden rounded-3xl p-6 md:p-10">
        <div class="grid gap-10 lg:grid-cols-[1fr_0.75fr]">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">聯絡合作</p>
            <h2 class="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.12] text-white [text-wrap:balance] md:text-6xl">
              歡迎進一步聊聊。
            </h2>
            <p class="mt-6 max-w-2xl text-lg leading-9 text-zinc-400 [text-wrap:pretty]">
              如果我的作品符合你的需求，或你想進一步了解我的前端實作、產品介面與系統協作經驗，歡迎透過 Email、GitHub 或 LinkedIn 聯絡。
            </p>

            <div class="mt-7 grid gap-3 md:grid-cols-2">
              <div class="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <div class="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                  <Icon icon="mdi:briefcase-search-outline" class="h-5 w-5 text-cyan-300" />
                  適合聯絡的情境
                </div>
                <p class="text-sm leading-7 text-zinc-400">
                  前端職缺、產品介面開發、企業系統維護，UI/UX 與工程落地的合作。
                </p>
              </div>

              <div class="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <div class="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                  <Icon icon="mdi:file-document-check-outline" class="h-5 w-5 text-cyan-300" />
                  可提供的資料
                </div>
                <p class="text-sm leading-7 text-zinc-400">
                  作品 Demo、GitHub 專案、技術細節、開發角色與過去專案中的實作範圍。
                </p>
              </div>
            </div>

            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
              <BaseButton :href="`mailto:${profile.email}`" icon="mdi:send-outline">寄信聯絡</BaseButton>
            </div>
          </div>

          <div class="rounded-2xl border border-white/10 bg-black/35 p-5">
            <div class="mb-5 flex items-center gap-4">
              <img
                :src="profile.formalImage"
                :alt="`${profile.name} 正式頭像`"
                class="h-16 w-16 rounded-2xl border border-white/10 object-cover object-[center_24%]"
                loading="lazy"
              />
              <div>
                <p class="text-sm font-semibold text-white">{{ profile.name }}</p>
                <p class="mt-1 text-xs text-zinc-500">{{ profile.role }}</p>
              </div>
            </div>
            <p class="mb-2 text-sm font-semibold text-white">聯絡資訊</p>
            <p class="mb-4 text-sm leading-6 text-zinc-500">
              建議來信可簡短附上職缺、合作內容或想了解的作品案例，我會依照內容回覆。
            </p>
            <div class="space-y-3">
              <div class="flex items-center gap-3 rounded-xl bg-white/7 p-3">
                <Icon icon="mdi:map-marker-outline" class="h-5 w-5 text-cyan-300" />
                <span class="text-sm text-zinc-300">{{ profile.location }}</span>
              </div>
              <a
                v-for="social in profile.socials"
                :key="social.label"
                :href="social.href"
                class="focus-ring flex items-center gap-3 rounded-xl bg-white/7 p-3 text-sm text-zinc-300 transition hover:bg-white/12 hover:text-white"
              >
                <Icon :icon="social.icon" class="h-5 w-5 text-cyan-300" />
                {{ social.label }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </RevealBlock>
  </section>
</template>
