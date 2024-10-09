<route lang="yaml">
    meta:
      layout: blank
    </route>
<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white rounded-lg shadow-lg w-full max-w-2xl">
        <div class="border-b px-6 py-4 flex justify-between items-center">
          <h2 class="text-lg font-semibold">Penambahan Jadwal Posyandu</h2>
          <button class="text-gray-500 hover:text-gray-700" @click="close">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="p-6 space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Nama Posyandu</label>
            <input 
              type="text" 
              v-model="namaPosyandu" 
              placeholder="Input Posyandu" 
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Petugas</label>
            <input 
              type="text" 
              v-model="petugas" 
              placeholder="Input Petugas" 
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Waktu dan Tanggal</label>
            <div class="flex space-x-2">
              <input 
                type="text" 
                v-model="mulai" 
                placeholder="Mulai" 
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <span class="flex items-center text-gray-500">→</span>
              <input 
                type="text" 
                v-model="selesai" 
                placeholder="Selesai" 
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <button class="mt-1 text-gray-500 hover:text-gray-700">
                <i class="fas fa-calendar-alt"></i>
              </button>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Alamat</label>
            <textarea 
              v-model="alamat" 
              placeholder="Input Deskripsi" 
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            ></textarea>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Catatan</label>
            <textarea 
              v-model="catatan" 
              placeholder="Input Deskripsi" 
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            ></textarea>
          </div>
        </div>
        <div class="border-t px-6 py-4 flex justify-end space-x-2">
          <n-button type="tertiary">Kembali</n-button>
          <n-button type="primary" @click="simpan">Simpan</n-button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PenambahanJadwalPosyandu",
    data() {
      return {
        namaPosyandu: '',
        petugas: '',
        mulai: '',
        selesai: '',
        alamat: '',
        catatan: ''
      };
    },
    methods: {
      close() {
        // Implement the close functionality here
        console.log("Close button clicked");
      },
      kembali() {
        // Implement the kembali functionality here
        console.log("Kembali button clicked");
      },
      simpan() {
        // Implement the simpan functionality here
        console.log("Simpan button clicked");
        console.log({
          namaPosyandu: this.namaPosyandu,
          petugas: this.petugas,
          mulai: this.mulai,
          selesai: this.selesai,
          alamat: this.alamat,
          catatan: this.catatan,
        });
      }
    }
  };
  </script>
  
  <style scoped>
  /* You can include your additional styles here */
  </style>
  