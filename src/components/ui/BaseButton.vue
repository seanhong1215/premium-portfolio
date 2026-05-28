<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { cn } from '@/utils/cn'

const props = withDefaults(
  defineProps<{
    href?: string
    icon?: string
    variant?: 'primary' | 'secondary' | 'ghost'
    label?: string
  }>(),
  {
    variant: 'primary',
  },
)

const classes = computed(() =>
  cn(
    'focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition duration-200',
    props.variant === 'primary' &&
      'bg-white text-ink-900 shadow-glow hover:bg-cyan-100 hover:shadow-[0_0_56px_rgba(34,211,238,0.22)]',
    props.variant === 'secondary' &&
      'border border-white/15 bg-white/8 text-white hover:border-cyan-300/50 hover:bg-white/12',
    props.variant === 'ghost' && 'text-zinc-300 hover:bg-white/8 hover:text-white',
  ),
)
</script>

<template>
  <a v-if="href" :href="href" :class="classes" :aria-label="label">
    <Icon v-if="icon" :icon="icon" class="h-5 w-5" aria-hidden="true" />
    <slot />
  </a>
  <button v-else :class="classes" :aria-label="label">
    <Icon v-if="icon" :icon="icon" class="h-5 w-5" aria-hidden="true" />
    <slot />
  </button>
</template>
