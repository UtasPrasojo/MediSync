<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <n-message-provider>
    <n-config-provider> <RouterView /></n-config-provider>
  </n-message-provider>
</template>
