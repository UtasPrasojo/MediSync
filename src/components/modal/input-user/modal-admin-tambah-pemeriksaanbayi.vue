<script setup lang="ts">
import { ref } from 'vue'

const namaBayi = ref<string>('')
const posyandu = ref<string>('')
const waktuMulai = ref<string>('')
const waktuSelesai = ref<string>('')
const petugas = ref<string>('')
const tinggiBadan = ref<string>('')
const beratBadan = ref<string>('')
const lingkarKepala = ref<string>('')
const file = ref<File | null>(null)

const submitForm = () => {
  // Logic for submitting the form
  alert(
    `Data submitted: ${namaBayi.value}, ${posyandu.value}, ${waktuMulai.value}, ${waktuSelesai.value}`
  )
  // Here you can handle the form data and send it to your backend if needed
}

const goBack = () => {
  // Logic for going back
  alert('Going back...')
}

const closeModal = () => {
  // Logic for closing the modal
  alert('Closing modal...')
}

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  file.value = target.files ? target.files[0] : null
  if (file.value) {
    alert(`File uploaded: ${file.value.name}`)
  }
}

const openCalendar = () => {
  // Logic for opening a calendar (if needed)
  alert('Opening calendar...')
}
</script>

<template>
  <div class="flex items-center justify-center  bg-gray-100">
    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold">Pemeriksaan Bayi</h2>
        <button class="text-gray-500" @click="closeModal">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <n-form @submit.prevent="submitForm">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">Nama Bayi</label>
          <n-input
            v-model="namaBayi"
            type="text"
            class="w-full border border-gray-300 rounded-md p-2"
            placeholder="Auto Input QR"
          />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">Posyandu</label>
          <n-input
            v-model="posyandu"
            type="text"
            class="w-full border border-gray-300 rounded-md p-2"
            placeholder="Input Petugas"
          />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">Waktu dan Tanggal</label>
          <div class="flex items-center space-x-2">
            <n-input
              v-model="waktuMulai"
              type="text"
              class="w-full border border-gray-300 rounded-md p-2"
              placeholder="Mulai"
            />
            <span class="text-gray-500">→</span>
            <n-input
              v-model="waktuSelesai"
              type="text"
              class="w-full border border-gray-300 rounded-md p-2"
              placeholder="Selesai"
            />
            <button type="button" class="text-gray-500" @click="openCalendar">
              <i class="fas fa-calendar-alt"></i>
            </button>
          </div>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">Petugas</label>
          <input
            v-model="petugas"
            type="text"
            class="w-full border border-gray-300 rounded-md p-2"
            placeholder="Input Petugas"
          />
        </div>
        <div class="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Tinggi Badan</label>
            <input
              v-model="tinggiBadan"
              type="text"
              class="w-full border border-gray-300 rounded-md p-2"
              placeholder="Input Tinggi Badan"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Berat Badan</label>
            <input
              v-model="beratBadan"
              type="text"
              class="w-full border border-gray-300 rounded-md p-2"
              placeholder="Input Berat Badan"
            />
          </div>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1">Lingkar Kepala</label>
          <input
            v-model="lingkarKepala"
            type="text"
            class="w-full border border-gray-300 rounded-md p-2"
            placeholder="Input Lingkar Kepala"
          />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-1"
            >Unggah Hasil Pemeriksaan</label
          >
          <input
            type="file"
            class="w-full border border-gray-300 rounded-md p-2"
            @change="handleFileUpload"
          />
        </div>
        <div class="flex justify-end space-x-2">
          <n-button type="tertiary">Kembali</n-button>
          <n-button type="primary">Simpan</n-button>
        </div>
      </n-form>
    </div>
  </div>
</template>



<style scoped>
/* Add any additional styles here if needed */
</style>
<route lang="yaml">
meta:
  layout: blank
</route>
