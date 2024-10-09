<template>
    <div class="flex items-center justify-center h-screen bg-gray-100">
      <div class="bg-white p-6 rounded-lg shadow-lg w-96">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg ">Detail Posyandu</h2>
          <i class="fas fa-times cursor-pointer"></i>
        </div>
        <h3 class="text-center text-xl font-semibold mb-6">Posyandu Suka Makmur</h3>
        <div class="mb-4">
          <div class="flex justify-between mb-2">
            <span class="text-gray-700">Tanggal</span>
            <span class="text-pink-500">Bayu Gatra</span>
          </div>
          <div class="flex justify-between mb-2">
            <span class="text-gray-700">Jam</span>
            <span class="text-pink-500">098765432345</span>
          </div>
          <div class="flex justify-between mb-2">
            <span class="text-gray-700">Petugas</span>
            <span class="text-pink-500">Bayu Boyolali</span>
          </div>
          <div class="flex justify-between mb-2">
            <span class="text-gray-700">Alamat</span>
            <span class="text-pink-500">JL. Gunung Merapi V NO.7</span>
          </div>
          <div class="flex justify-between mb-2">
            <span class="text-gray-700">Dokumen</span>
            <span class="text-gray-700 flex items-center">
              <i class="fas fa-file-alt mr-2"></i>FotoAnak.jpg
            </span>
          </div>
        </div>
        <div class="flex justify-end space-x-4">
          <n-button type="tertiary">Kembali</n-button>
          <n-button type="primary">Selesai</n-button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "DetailPosyandu",
  };
  </script>
  
  <style scoped>
  /* You can include your additional styles here */
  </style>
  