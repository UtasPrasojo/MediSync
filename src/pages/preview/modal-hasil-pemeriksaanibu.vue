<route lang="yaml">
  meta:
    layout: blank
  </route>

<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white rounded-lg shadow-lg p-6 w-96">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold">Hasil Pemeriksaan Ibu</h2>
          <button class="text-gray-400 hover:text-gray-600" @click="closeResults">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="flex flex-col items-center mb-4">
          <img
            alt="Profile picture of Mia Yuli Astuti"
            class="w-20 h-20 rounded-full mb-2"
            :src="profilePicture"
          />
          <h3 class="text-lg font-semibold">{{ name }}</h3>
        </div>
        <div class="mb-4">
          <div class="flex justify-between mb-2">
            <span>Umur Anak</span>
            <span class="text-pink-500">{{ umurAnak }}</span>
          </div>
          <div class="flex justify-between mb-2">
            <span>Tinggi Badan</span>
            <span class="text-pink-500">{{ tinggiBadan }} Cm</span>
          </div>
          <div class="flex justify-between mb-2">
            <span>Berat Badan</span>
            <span class="text-pink-500">{{ beratBadan }} KG</span>
          </div>
          <div class="flex justify-between mb-2">
            <span>Fundus Uteri</span>
            <span class="text-pink-500">{{ fundusUteri }} Cm</span>
          </div>
          <div class="flex justify-between mb-2">
            <span>Lingkar Lengan</span>
            <span class="text-pink-500">{{ lingkarLengan }} cm</span>
          </div>
          <div class="flex justify-between mb-2">
            <span>Angka BMI Ibu</span>
            <span :class="bmiClass">{{ bmi }} {{ bmiStatus }}</span>
          </div>
          <div class="flex justify-between items-center mb-2">
            <span>Surat Rujukan Stunting</span>
            <a
              class="flex items-center text-gray-600 hover:text-gray-800"
              :href="pdfLink"
              target="_blank"
            >
              <i class="fas fa-file-pdf mr-2"></i>
              Profilefoto.pdf
            </a>
          </div>
        </div>
        <div class="flex justify-between">
          <n-button type="tertiary">
            Kembali
          </n-button>
          <n-button type="primary">
            Selesai
          </n-button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    name: 'HasilPemeriksaanIbu',
    setup() {
      const profilePicture = ref("https://storage.googleapis.com/a1aa/image/szRIYa3g2BadBtRiib3kvF10p2NGosJ5Hf2dXfk9GgcEBrkTA.jpg");
      const name = ref("Mia Yuli Astuti");
      const umurAnak = ref("1 Tahun 1 Bulan 1 Hari");
      const tinggiBadan = ref(160);
      const beratBadan = ref(50);
      const fundusUteri = ref(12);
      const lingkarLengan = ref(16);
      const bmi = ref(21);
      
      const bmiStatus = computed(() => {
        return bmi.value < 18.5 ? 'Kekurangan Berat Badan' : 
               bmi.value < 24.9 ? 'Normal' : 
               'Kelebihan Berat Badan';
      });
      
      const bmiClass = computed(() => {
        return bmi.value < 18.5 ? 'bg-red-100 text-red-600 px-2 py-1 rounded' : 
               bmi.value < 24.9 ? 'bg-green-100 text-green-600 px-2 py-1 rounded' : 
               'bg-yellow-100 text-yellow-600 px-2 py-1 rounded';
      });
  
      const pdfLink = ref('#');
  
      const closeResults = () => {
        alert('Results closed');
        // Implement logic to close results if necessary
      };
  
      const goBack = () => {
        alert('Going back');
        // Implement logic to go back to the previous page
      };
  
      const finish = () => {
        alert('Finished!');
        // Implement logic to finish the process
      };
  
      return {
        profilePicture,
        name,
        umurAnak,
        tinggiBadan,
        beratBadan,
        fundusUteri,
        lingkarLengan,
        bmi,
        bmiStatus,
        bmiClass,
        pdfLink,
        closeResults,
        goBack,
        finish,
      };
    },
  };
  </script>
  
  <style scoped>
  /* You can add any additional styles here if needed */
  </style>
  