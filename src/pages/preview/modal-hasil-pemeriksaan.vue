<route lang="yaml">
    meta:
      layout: blank
    </route>
<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white rounded-lg shadow-lg p-6 w-96">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold">Hasil Pemeriksaan</h2>
          <button class="text-gray-400 hover:text-gray-600" @click="closeModal">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="flex flex-col items-center mb-4">
          <img 
            alt="Profile picture of Yaqub Qamar" 
            class="w-20 h-20 rounded-full mb-2" 
            :src="profileImage" 
          />
          <h3 class="text-lg font-semibold">{{ namaAnak }}</h3>
        </div>
        <div class="mb-4">
          <div class="flex justify-between mb-2" v-for="(detail, index) in details" :key="index">
            <span class="text-gray-600">{{ detail.label }}</span>
            <span :class="detail.valueClass">{{ detail.value }}</span>
          </div>
          <div class="flex justify-between items-center mb-2">
            <span class="text-gray-600">Surat Rujukan Stunting</span>
            <a class="text-gray-600 flex items-center" :href="pdfLink">
              <i class="fas fa-file-pdf mr-2"></i>
              {{ pdfName }}
            </a>
          </div>
        </div>
        <div class="flex justify-between">
          <n-button type="tertiary">Kembali</n-button>
          <n-button type="primary">Selesai</n-button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'HasilPemeriksaan',
    setup() {
      const namaAnak = ref('Yaqub Qamar');
      const profileImage = ref('https://storage.googleapis.com/a1aa/image/E3pvdibIzyYIGZrWlyArH1DkfEJyrrVvHNtAtaqUgwvHWVyJA.jpg');
      
      const details = ref([
        { label: 'Umur Anak', value: '1 Tahun 1 Bulan 1 Hari', valueClass: 'text-pink-500' },
        { label: 'Tinggi Badan', value: '60 Cm', valueClass: 'text-pink-500' },
        { label: 'Berat Badan', value: '16 KG', valueClass: 'text-pink-500' },
        { label: 'Lingkar Kepala', value: '24 Cm', valueClass: 'text-pink-500' },
        { label: 'Angka BMI Anak', value: '21 Normal', valueClass: 'text-green-500' },
      ]);
  
      const pdfLink = ref('#');
      const pdfName = ref('Profilefoto.pdf');
  
      const closeModal = () => {
        alert('Closing modal...');
        // Implement modal closing logic if needed
      };
  
      const goBack = () => {
        alert('Going back...');
        // Implement back navigation logic
      };
  
      const finish = () => {
        alert('Finishing...');
        // Implement finishing logic
      };
  
      return {
        namaAnak,
        profileImage,
        details,
        pdfLink,
        pdfName,
        closeModal,
        goBack,
        finish,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styles here if needed */
  </style>
  