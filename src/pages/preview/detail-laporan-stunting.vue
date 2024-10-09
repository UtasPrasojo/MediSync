<template>
    <div class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div class="flex justify-between items-center mb-4">
          <h1 class="text-lg font-semibold">Laporan Stunting</h1>
          <button class="text-gray-500 hover:text-gray-700">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="text-center mb-6">
          <h2 class="text-xl font-bold">Terimakasih atas Laporan Anda</h2>
          <div class="my-4">
            <img
              src="https://storage.googleapis.com/a1aa/image/NJUgkXcG1aqhBtmBMsNBDZiFL3UPhlNqbdeYfyquNKoyplkTA.jpg"
              alt="Shield with check mark icon"
              class="mx-auto"
              width="100"
              height="100"
            />
          </div>
        </div>
        <div class="mb-4">
          <div class="flex justify-between mb-2">
            <span>Nama Pelapor</span>
            <span class="text-pink-500">Bayu Gatra</span>
          </div>
          <div class="flex justify-between mb-2">
            <span>Nomor Telepon</span>
            <span class="text-pink-500">098765432345</span>
          </div>
          <div class="flex justify-between mb-2">
            <span>Nama Anak</span>
            <span class="text-pink-500">Bayu Boyolali</span>
          </div>
          <div class="flex justify-between mb-2">
            <span>Alamat Anak</span>
            <span class="text-pink-500">JL. Gunung Merapi V NO.7</span>
          </div>
          <div class="flex justify-between mb-2">
            <span>Hasil Observasi</span>
            <span class="text-pink-500">xxxxxxxxxx</span>
          </div>
          <div class="flex justify-between mb-2">
            <span>Dokumen</span>
            <div class="flex space-x-2">
              <button class="flex items-center px-2 py-1 border rounded text-gray-700">
                <i class="fas fa-file-image mr-1"></i> FotoAnak.jpg
              </button>
              <button class="flex items-center px-2 py-1 border rounded text-gray-700">
                <i class="fas fa-file-pdf mr-1"></i> RumahAnak.pdf
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-between">
          <button class="px-4 py-2 border rounded text-gray-700">Kembali</button>
          <button class="px-4 py-2 bg-pink-500 text-white rounded">Selesai</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LaporanStunting',
  };
  </script>
  
  <style scoped>
  body {
    font-family: 'Roboto', sans-serif;
  }
  </style>
  