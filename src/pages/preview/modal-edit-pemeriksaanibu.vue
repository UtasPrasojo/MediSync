
    
<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
        <div class="flex justify-between items-center border-b pb-4 mb-4">
          <h2 class="text-lg font-semibold">Pemeriksaan Ibu Hamil</h2>
          <button class="text-gray-500 hover:text-gray-700" @click="closeForm">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Nama Ibu</label>
            <input v-model="namaIbu" type="text" placeholder="Auto Input QR" class="w-full p-2 border rounded bg-gray-100">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Posyandu</label>
            <input v-model="posyandu" type="text" placeholder="Input Petugas" class="w-full p-2 border rounded bg-gray-100">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Waktu dan Tanggal</label>
            <div class="flex space-x-2">
              <input v-model="waktuMulai" type="text" placeholder="Mulai" class="w-full p-2 border rounded bg-gray-100">
              <span class="flex items-center text-gray-500">→</span>
              <input v-model="waktuSelesai" type="text" placeholder="Selesai" class="w-full p-2 border rounded bg-gray-100">
              <button type="button" class="text-gray-500 hover:text-gray-700" @click="openCalendar">
                <i class="fas fa-calendar-alt"></i>
              </button>
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Petugas</label>
            <input v-model="petugas" type="text" placeholder="Input Petugas" class="w-full p-2 border rounded bg-gray-100">
          </div>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label class="block text-gray-700 mb-2">Tinggi Badan</label>
              <input v-model="tinggiBadan" type="text" placeholder="Input Tinggi Badan" class="w-full p-2 border rounded bg-gray-100">
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Berat Badan</label>
              <input v-model="beratBadan" type="text" placeholder="Input Berat Badan" class="w-full p-2 border rounded bg-gray-100">
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label class="block text-gray-700 mb-2">Lingkar Lengan</label>
              <input v-model="lingkarLengan" type="text" placeholder="Input Lingkar Lengan" class="w-full p-2 border rounded bg-gray-100">
            </div>
            <div>
              <label class="block text-gray-700 mb-2">Fundus Uteri</label>
              <input v-model="fundusUteri" type="text" placeholder="Input Fundus Uteri" class="w-full p-2 border rounded bg-gray-100">
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Unggah Hasil Pemeriksaan</label>
            <input type="file" @change="handleFileUpload" class="w-full p-2 border rounded bg-gray-100">
          </div>
          <div class="flex justify-end space-x-2">
            <n-button type="tertiary" >Kembali</n-button>
            <n-button type="primary">Simpan Perubahan</n-button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'PemeriksaanIbuHamil',
    setup() {
      const namaIbu = ref('');
      const posyandu = ref('');
      const waktuMulai = ref('');
      const waktuSelesai = ref('');
      const petugas = ref('');
      const tinggiBadan = ref('');
      const beratBadan = ref('');
      const lingkarLengan = ref('');
      const fundusUteri = ref('');
      const file = ref(null);
  
      const closeForm = () => {
        alert('Form closed');
        // Implement form closing logic if needed
      };
  
      const openCalendar = () => {
        alert('Open calendar');
        // Implement calendar opening logic if needed
      };
  
      const handleFileUpload = (event) => {
        file.value = event.target.files[0];
        alert(`File uploaded: ${file.value.name}`);
      };
  
      const goBack = () => {
        alert('Going back');
        // Implement back navigation logic if needed
      };
  
      const handleSubmit = () => {
        alert('Form submitted!');
        // Implement form submission logic
        // You can collect the form data here and send it to your API
      };
  
      return {
        namaIbu,
        posyandu,
        waktuMulai,
        waktuSelesai,
        petugas,
        tinggiBadan,
        beratBadan,
        lingkarLengan,
        fundusUteri,
        file,
        closeForm,
        openCalendar,
        handleFileUpload,
        goBack,
        handleSubmit,
      };
    },
  };
  </script>
  
  <style scoped>
  /* You can add any additional styles here if needed */
  </style>
  

  <route lang="yaml">
    meta:
      layout: blank
    </route>