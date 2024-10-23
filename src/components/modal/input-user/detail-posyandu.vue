<script setup lang="ts">
import { useReadScheduleById } from '@/services/schedule'; // Import the service
import { DateTime } from 'luxon';
import { computed } from 'vue';

const props = defineProps<{
  id: string
}>()

const { data: scheduleDetail } = useReadScheduleById(computed(() => props.id))

const formattedDate = computed(() => {
  return DateTime.fromISO(scheduleDetail.value?.date).toFormat('dd LLL yyyy')
});

const formattedTime = computed(() => {
  const openTime = DateTime.fromISO(scheduleDetail.value?.open).toFormat('HH:mm');
  const closeTime = DateTime.fromISO(scheduleDetail.value?.close).toFormat('HH:mm');
  return `${openTime} - ${closeTime}`;});
</script>

<template>
  <div class="flex items-center justify-center bg-gray-100">
    <div class="bg-white p-6 rounded-lg shadow-lg w-96">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg">Detail Posyandu</h2>
        <i class="fas fa-times cursor-pointer"></i>
      </div>
      <h3 class="text-center text-xl font-semibold mb-6">
        {{ scheduleDetail?.healthPost || 'Posyandu' }}
      </h3>
      <div class="mb-4">
        <div class="flex justify-between mb-2">
          <span class="text-gray-700">Tanggal</span>
          <span class="text-pink-500">{{ formattedDate }}</span>
        </div>
        <div class="flex justify-between mb-2">
          <span class="text-gray-700">Jam</span>
          <span class="text-pink-500">{{ formattedTime }}</span>
        </div>
        <div class="flex justify-between mb-2">
          <span class="text-gray-700">Petugas</span>
          <span class="text-pink-500">{{ scheduleDetail?.staff || '-' }}</span>
        </div>
        <div class="flex justify-between mb-2">
          <span class="text-gray-700">Alamat</span>
          <span class="text-pink-500">{{ scheduleDetail?.address || '-' }}</span>
        </div>
        <div class="flex justify-between mb-2">
          <span class="text-gray-700">Catatan</span>
          <span class="text-pink-500">{{ scheduleDetail?.note || '-' }} </span>
        </div>
      </div>
      <div class="flex justify-end space-x-4">
        <n-button type="tertiary">Kembali</n-button>
        <n-button type="primary">Selesai</n-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* You can include your additional styles here */
</style>
