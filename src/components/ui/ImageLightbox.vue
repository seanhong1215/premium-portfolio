<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps<{
  image: {
    src: string
    alt: string
    label: string
  } | null
}>()

const emit = defineEmits<{
  close: []
}>()
</script>

<template>
  <Teleport to="body">
    <div
      v-if="image"
      class="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md md:p-8"
      role="dialog"
      aria-modal="true"
      @click.self="emit('close')"
    >
      <div class="relative w-full max-w-6xl">
        <button
          type="button"
          class="focus-ring absolute -top-12 right-0 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
          :aria-label="`關閉 ${image.label} 放大圖`"
          @click="emit('close')"
        >
          <Icon icon="mdi:close" class="h-6 w-6" />
        </button>

        <figure class="overflow-hidden rounded-2xl border border-white/15 bg-zinc-950 shadow-2xl shadow-black/60">
          <div class="flex max-h-[78vh] items-center justify-center p-3 md:p-5">
            <img :src="image.src" :alt="image.alt" class="max-h-[72vh] w-full object-contain" />
          </div>
          <figcaption class="border-t border-white/10 px-4 py-3 text-sm font-medium text-zinc-200">
            {{ image.label }}
          </figcaption>
        </figure>
      </div>
    </div>
  </Teleport>
</template>
