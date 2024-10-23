<script setup lang="ts">
import { ref } from 'vue';

const name = 'DetailPosyandu'
const props = defineProps<{
  id: string
}>()

const options = [
  {
    label: 'Detail',
    key: 'Detail'
  }
]

const detailPosyandu = ref(false)

const handleOptionClick = (key: string) => {
  if (key === 'Detail') {
    detailPosyandu.value = true
  }
}
</script>

<template>
  <n-dropdown :options="options" @select="handleOptionClick">
    <n-button>
      <i-mage:dots></i-mage:dots>
    </n-button>
  </n-dropdown>

  <n-modal v-model:show="detailPosyandu" :on-after-leave="() => (detailPosyandu = false)">
    <modal-input-user-detail-posyandu :id="$props.id" @close="detailPosyandu = false" />
  </n-modal>
</template>
