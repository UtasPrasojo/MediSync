<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  namaAnak: '',
  nik: '',
  tempatLahir: '',
  tanggalLahir: '',
  anakKe: '',
  golonganDarah: '',
  tinggiBadan: '',
  beratBadan: ''
})

const uploadedFiles = ref<any[]>([]) // Ganti 'any' dengan tipe data yang tepat jika ada
const selectedFileName = ref('')

const submitForm = () => {
  // Handle form submission
  console.log(form.value)
}

const closeForm = () => {
  // Handle form close action
  console.log('Form closed')
}

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  const files = target.files
  if (files && files.length > 0) {
    selectedFileName.value = files[0].name
    uploadedFiles.value.push({ name: files[0].name })
  }
}

const triggerFileInput = () => {
  const input = document.querySelector('input[type="file"]') as HTMLInputElement
  input.click()
}

const removeFile = (index: number) => {
  uploadedFiles.value.splice(index, 1)
}

const goBack = () => {
  // Handle back button
  console.log('Go back')
}
</script>

<template>
  <div id="app" class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
      <!-- Header -->
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">Penambahan Data Anak</h2>
        <n-button class="text-gray-500 hover:text-gray-700" @click="closeForm">
          <i class="fas fa-times"></i>
        </n-button>
      </div>

      <!-- Form -->
      <n-form @submit.prevent="submitForm">
        <!-- Nama Anak -->
        <div class="mb-4">
          <n-form-item label="Nama Lengkap" path="name">
            <n-input v-model:value="formData.name" />
          </n-form-item>
        </div>

        <!-- NIK -->
        <div class="mb-4">
          <n-form-item label="NIK" path="NIK">
            <n-input v-model:value="formData.identityNumber" name="NIK" required />
          </n-form-item>
        </div>

        <!-- Tempat Lahir, Tanggal Lahir, Anak Ke -->
        <div class="hidden md:grid grid-cols-3 gap-4 mb-4">
          <div>
            <n-form-item label="Tempat Lahir" path="TTL">
              <n-select v-model:value="formData.placeOfBirth" :options="placeOfBirthOptions" size="large" />
            </n-form-item>
          </div>
          <div>
            <label class="block text-gray-700">Tanggal Lahir</label>
            <div class="relative">
              <n-form-item label="Tanggal Lahir" path="tanggal_lahir">
              <n-date-picker v-model:value="formData.dateOfBirth" name="tanggal_lahir" required size="large" />
            </n-form-item>
            </div>
          </div>
          <div>
            <n-form-item label="Anak Ke" path="anak_ke">
              <n-input-number v-model:value="formData.childOrder" required size="large" />
            </n-form-item>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mb-4 md:hidden">
          <div>
            <n-form-item label="Tempat Lahir" path="TTL">
              <n-select v-model:value="formData.placeOfBirth" :options="placeOfBirthOptions" size="large" />
            </n-form-item>
          </div>
          <div>
            <label class="block text-gray-700">Tanggal Lahir</label>
            <div class="relative">
              <n-form-item label="Tanggal Lahir" path="tanggal_lahir">
              <n-date-picker v-model:value="formData.dateOfBirth" name="tanggal_lahir" required size="large" />
            </n-form-item>
            </div>
          </div>
        </div>
        <div class="block md:hidden">
          <n-form-item label="Anak Ke" path="anak_ke">
            <n-input-number v-model:value="formData.childOrder" required size="large" />
          </n-form-item>
        </div>

        <!-- Golongan Darah, Tinggi Badan, Berat Badan mobile -->
        <div class="block md:hidden">
          <n-form-item label="Golongan Darah" path="bloodType">
            <n-select v-model:value="formData.bloodType" :options="options" size="large" />
          </n-form-item>
        </div>
        <div class="grid grid-cols-2 gap-4 mb-4 md:hidden">
          <div>
            <n-form-item label="Tinggi Badan (cm)" path="TinggiBadan">
              <n-input-number v-model:value="formData.height" required size="large" />
            </n-form-item>
          </div>
          <div>
            <n-form-item label="Berat Badan (kg)" path="BeratBadan">
              <n-input-number v-model:value="formData.weight" required size="large" />
            </n-form-item>
          </div>
        </div>

        <!-- Golongan Darah, Tinggi Badan, Berat Badan -->
        <div class="hidden md:grid grid-cols-3 gap-4 mb-4">
          <div>
            <n-form-item label="Golongan Darah" path="bloodType">
              <n-select v-model:value="formData.bloodType" :options="options" size="large" />
            </n-form-item>
          </div>
          <div>
            <n-form-item label="Tinggi Badan (cm)" path="TinggiBadan">
              <n-input-number v-model:value="formData.height" required size="large" />
            </n-form-item>
          </div>
          <div>
            <n-form-item label="Berat Badan (kg)" path="BeratBadan">
              <n-input-number v-model:value="formData.weight" required size="large" />
            </n-form-item>
          </div>
        </div>

        <!-- Unggah Dokumen -->
        <div class="mb-4">
          
          <div class="flex items-center mt-1">
            <n-form-item label="Unggah file" path="file">
            <n-upload
              action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
              :headers="{ 'naive-info': 'hello!' }"
              :data="{ 'naive-data': 'cool! naive!' }"
            >
              <n-button v-model:value="formData.childPicture">Upload File</n-button>
            </n-upload>
          </n-form-item>
          </div>

          <!-- Dynamically Uploaded Files -->
          <div class="flex flex-wrap mt-2">
            <span
              v-for="(file, index) in uploadedFiles"
              :key="index"
              class="bg-gray-200 text-gray-700 px-3 py-1 rounded-md mr-2 mb-2"
            >
              {{ file.name }}
              <i class="fas fa-times ml-1 cursor-pointer" @click="removeFile(index)"></i>
            </span>
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex justify-end space-x-2">
          <n-button type="tertiary" @click="goBack"> Kembali </n-button>
          <!-- <n-button type="primary" @click="openEditModal">Simpan</n-button> -->
        </div>
      </n-form>
    </div>

    <!-- Modal untuk Edit Profil Anak -->
    <!-- <EditProfilChild v-if="isModalOpen" @close="closeEditModal" :childData="selectedChild" /> -->
  </div>
</template>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
</style>

<route lang="yaml">
meta:
  layout: blank
</route>
