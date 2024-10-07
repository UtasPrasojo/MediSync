<route lang="yaml">
    meta:
      layout: blank
    </route>

<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white rounded-lg shadow-lg p-6 w-96">
        <div class="flex justify-between items-center border-b pb-4 mb-4">
          <h2 class="text-lg font-semibold">Hasil Pemeriksaan</h2>
          <button class="text-gray-400 hover:text-gray-600" @click="closeModal">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="text-center mb-4">
          <img
            alt="Profile picture of Yaqub Qamar"
            class="w-20 h-20 rounded-full mx-auto mb-2"
            :src="profileImage"
            width="100"
            height="100"
          />
          <h3 class="text-xl font-semibold">{{ childName }}</h3>
        </div>
        <div class="space-y-2">
          <div class="flex justify-between">
            <span class="text-gray-500">Umur Anak</span>
            <span class="text-pink-500">{{ childAge }}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500">Tinggi Badan</span>
            <span class="text-pink-500">{{ height }} Cm</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500">Berat Badan</span>
            <span class="text-pink-500">{{ weight }} KG</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-500">Lingkar Kepala</span>
            <span class="text-pink-500">{{ headCircumference }} Cm</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-gray-500">Angka BMI Anak</span>
            <span class="bg-green-100 text-green-600 px-2 py-1 rounded">{{ bmiStatus }}</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-gray-500">Surat Rujukan Stunting</span>
            <a class="flex items-center text-gray-500 hover:text-gray-700" :href="pdfLink">
              <i class="fas fa-file-pdf mr-2"></i>
              {{ pdfFileName }}
            </a>
          </div>
        </div>
        <div class="flex justify-between mt-6">
          <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded" @click="goBack">Kembali</button>
          <button class="bg-pink-500 text-white px-4 py-2 rounded" @click="finish">Selesai</button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { ref } from 'vue';
  
  export default {
    setup() {
      // Reactive properties for the component
      const profileImage = ref("https://storage.googleapis.com/a1aa/image/zIhfpoCgpGQkEahd3MTCx9vhL6caNxoqCAe2KY15bJRXVAjTA.jpg");
      const childName = ref("Yaqub Qamar");
      const childAge = ref("1 Tahun 1 Bulan 1 Hari");
      const height = ref(60);
      const weight = ref(16);
      const headCircumference = ref(24);
      const bmiStatus = ref("21 Normal");
      const pdfLink = ref("#");
      const pdfFileName = ref("Profilefoto.pdf");
  
      // Method to handle closing the modal
      const closeModal = () => {
        console.log("Modal closed");
        // Implement your modal close logic here
      }
  
      // Method to handle back action
      const goBack = () => {
        console.log("Go back action");
        // Implement your go back logic here
      }
  
      // Method to finish the process
      const finish = () => {
        console.log("Process finished");
        // Implement your finish logic here
      }
  
      return {
        profileImage,
        childName,
        childAge,
        height,
        weight,
        headCircumference,
        bmiStatus,
        pdfLink,
        pdfFileName,
        closeModal,
        goBack,
        finish,
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add any additional styles here if needed */
  </style>
  