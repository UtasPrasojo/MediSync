<script setup lang="ts">
import { tv } from 'tailwind-variants'

const className = tv({
  base: 'font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none',
  variants: {
    fill: {
      primary:
        'text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800',
      secondary:
        'bg-white text-pink-500 border border-pink-500 px-4 py-2 rounded-lg hover:bg-pink-300 hover:text-white focus:ring-4 focus:ring-pink-300 ',
    }
  }
})
const props = defineProps<{
  color: 'primary' | 'secondary',
  variant: 'fill'
}>()
</script>

<template>
  <button
    type="button"
    :class="
      className({
        [props.variant]: props.color
      })
    "
  >
    <slot />
  </button>
</template>
