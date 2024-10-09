<template>
    <div class="bg-white p-6 rounded-lg shadow overflow-auto p-6">
      <div class="flex justify-between items-center mb-6">
        <div>
          <div class="flex flex-col space-y-2 text-gray-600">
            <h1 class="text-2xl font-semibold text-black">Pemeriksaan Ibu Hamil</h1>
            <p>Informasi tentang data pemeriksaan ibu hamil</p>
          </div>
        </div>
  
        <div>
          <div class="flex items-center space-x-4">
            <img
              class="rounded-full"
              width="40"
              height="40"
              src="https://storage.googleapis.com/a1aa/image/C2jfwt8kRwSWCK9YWQt3bHFWCuCch2VBzspxx6mSoIXhBeiTA.jpg"
              alt="User profile picture"
            />
          </div>
        </div>
      </div>
  
      <div class="bg-white p-6 rounded-lg shadow overflow-auto">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-lg font-semibold">Data Pemeriksaan</h3>
          <div class="flex items-center space-x-2">
            <div class="relative">
              <input
                type="text"
                placeholder="Search"
                class="border rounded-lg p-2 pl-10"
                v-model="searchQuery"
              />
              <i class="fas fa-search absolute left-3 top-3 text-gray-600"></i>
            </div>
            <n-button type="primary">
              <i-material-symbols:search></i-material-symbols:search>
            </n-button>
            <n-button type="primary">Tambah User</n-button>
          </div>
        </div>
  
        <div>
          <n-data-table
            pagination-behavior-on-filter="first"
            :columns="columns"
            :data="data"
            :pagination="pagination"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    setup() {
      const data = ref([
        {
          namaibu: 'Siti',
          usiakehamilan: '2 Bulan',
          posyandu: 'Suka makmur',
          tanggal: 'Juli, 23 2023',
          waktu: '08.00-09.00',
          petugas: 'Dono,Doni',
          diagnosis: 'Surat Rujukan.pdf',
          action: '',
        },
        {
          namaibu: 'Siti',
          usiakehamilan: '2 Bulan',
          posyandu: 'Suka makmur',
          tanggal: 'Juli, 23 2023',
          waktu: '08.00-09.00',
          petugas: 'Dono,Doni',
          diagnosis: 'Surat Rujukan.pdf',
          action: '',
        },
        {
          namaibu: 'Siti',
          usiakehamilan: '2 Bulan',
          posyandu: 'Suka makmur',
          tanggal: 'Juli, 23 2023',
          waktu: '08.00-09.00',
          petugas: 'Dono,Doni',
          diagnosis: 'Surat Rujukan.pdf',
          action: '',
        },
      ])
  
      const columns = ref([
        {
          title: 'Nama Ibu',
          key: 'namaibu'
        },
        {
          title: 'Usia kehamilan',
          key: 'usiakehamilan'
        },
        {
          title: 'Posyandu',
          key: 'posyandu'
        },
        {
          title: 'Tanggal',
          key: 'tanggal'
        },
        {
          title: 'Waktu',
          key: 'waktu'
        },
        {
          title: 'Petugas',
          key: 'petugas'
        },
        {
          title: 'Diagnosis',
          key: 'diagnosis'
        },
        {
          title: '',
          key: 'action'
        },
        
      ])
  
      return {
        data,
        columns
      }
    }
  }
  </script>
  