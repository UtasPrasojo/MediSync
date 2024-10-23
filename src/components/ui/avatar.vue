<script setup lang="ts">
import { createAvatar } from '@dicebear/core'
import { initials } from '@dicebear/collection'
import { computed } from 'vue';

const props = defineProps<{
  seed?: string
}>()

const avatar = computed(() => {
  return createAvatar(initials, {
  size: 50,
  seed: props.seed
}).toDataUri()
})
</script>

<template>
  <img :src="avatar" alt="Avatar" />
</template>
