<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold">Laporan Stunting</h2>
          <button class="text-gray-500 hover:text-gray-700" @click="closeForm">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label class="block text-sm font-medium text-gray-700">Nama Pelapor</label>
              <input v-model="form.namaPelapor" type="text" placeholder="Masukan Nama Pelapor" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700">Nomor Telepon</label>
              <input v-model="form.nomorTelepon" type="text" placeholder="Masukan Nomor Telepon" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Nama Anak</label>
            <input v-model="form.namaAnak" type="text" placeholder="Masukan Nama Anak" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Alamat Anak</label>
            <input v-model="form.alamatAnak" type="text" placeholder="Masukan Alamat Anak" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-700">Hasil Observasi</label>
            <textarea v-model="form.hasilObservasi" placeholder="Masukan Hasil Observasi Anak" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div class="border-2 border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center justify-center">
              <i class="fas fa-upload text-gray-400 text-2xl mb-2"></i>
              <p class="text-gray-500 text-sm">Click to upload or drag and drop</p>
              <p class="text-gray-400 text-xs">SVG, PNG, JPG or GIF (MAX. 800×400px)</p>
            </div>
            <div class="border-2 border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center justify-center">
              <i class="fas fa-upload text-gray-400 text-2xl mb-2"></i>
              <p class="text-gray-500 text-sm">Click to upload or drag and drop</p>
              <p class="text-gray-400 text-xs">SVG, PNG, JPG or GIF (MAX. 800×400px)</p>
            </div>
          </div>
          <div class="flex justify-end space-x-4">
            <button type="button" class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md" @click="goBack">Kembali</button>
            <button type="submit" class="px-4 py-2 bg-pink-500 text-white rounded-md">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const form = ref({
        namaPelapor: '',
        nomorTelepon: '',
        namaAnak: '',
        alamatAnak: '',
        hasilObservasi: ''
      });
  
      const submitForm = () => {
        console.log('Form Data:', form.value);
        // Handle form submission logic here
      };
  
      const goBack = () => {
        console.log('Navigating back...');
        // Handle navigation logic here
      };
  
      const closeForm = () => {
        console.log('Closing form...');
        // Handle closing the form
      };
  
      return {
        form,
        submitForm,
        goBack,
        closeForm
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add any custom styling here if needed */
  </style>
  