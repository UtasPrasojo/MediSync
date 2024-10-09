<template>
  <div class="flex h-screen" id="app">
    <div class="flex-1 p-6">
      <header class="flex justify-between items-center mb-6">
        <div>
          <h1 class="text-2xl font-semibold">Laporan Stunting</h1>
          <p class="text-gray-600">Informasi tentang laporan stunting</p>
        </div>
        <div class="flex items-center">
          <i class="fas fa-bell text-gray-600 mr-4"></i>
          <img
            src="https://storage.googleapis.com/a1aa/image/IUcGwjIkznK5EhaH5sNe2isVqYeeyEJAxude5ZExyzsfFfD5E.jpg"
            alt="User Avatar"
            class="w-10 h-10 rounded-full"
          />
        </div>
      </header>
      <div class="bg-white p-6 rounded-lg shadow-md mt-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold">Data User</h2>
          <div class="flex items-center space-x-2">
            <div class="relative">
              <input type="text" placeholder="Search" class="border rounded-lg p-2 pl-10" />
              <i class="fas fa-search absolute left-3 top-3 text-gray-600"></i>
            </div>
            <n-button type="primary"> <i class="fas fa-search"></i> Search </n-button>
            
          </div>
        </div>

        <!-- Data Table -->
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
import { ref,  } from 'vue'


export default {
  setup() {
    const menuItems = ref([
      { label: 'Dashboard', icon: 'fas fa-tachometer-alt', active: true },
      { label: 'Laporan Stunting', icon: 'fas fa-file-alt' },
      { label: 'Pemeriksaan Ibu Hamil', icon: 'fas fa-user-md' },
      { label: 'Pemeriksaan Bayi', icon: 'fas fa-baby' },
      { label: 'Artikel', icon: 'fas fa-newspaper' },
      { label: 'Jadwal Posyandu', icon: 'fas fa-calendar-alt' },
      { label: 'Master Data', icon: 'fas fa-database' },
      { label: 'Data Bayi', icon: 'fas fa-baby-carriage' }
    ])

    const data = ref([
      {
        id: 1,
        tanggal: 'Juli,23 2023',
        namapelapor: 'Bagas',
        namaanak: 'Piko',
        alamatanak: 'Jl.mangga No.67',
        jeniskelamin: 'Pria',
        nomortelepon: '089669643272',
        action: ' ',
      },
      {
        id: 1,
        tanggal: 'Juli,23 2023',
        namapelapor: 'Bagas',
        namaanak: 'Piko',
        alamatanak: 'Jl.mangga No.67',
        jeniskelamin: 'Pria',
        nomortelepon: '089669643272',
        action: ' ',
      },
      {
        id: 1,
        tanggal: 'Juli,23 2023',
        namapelapor: 'Bagas',
        namaanak: 'Piko',
        alamatanak: 'Jl.mangga No.67',
        jeniskelamin: 'Pria',
        nomortelepon: '089669643272',
        action: ' ',
      },
    ])

    const columns = ref([
      {
        title: 'Tanggal',
        key: 'tanggal'
      },
      {
        title: 'Nama Pelapor',
        key: 'namapelapor'
      },
      {
        title: 'Nama Anak',
        key: 'namaanak',
      },

      {
        title: 'Alamat Anak',
        key: 'alamatanak',
      },
      {
        title: 'Jenis kelamin',
        key: 'jeniskelamin',
      },
      {
        title: 'Nomor Telepon',
        key: 'nomortelepon',
      },
      {
        title: '',
        key: 'action',
      }
    ])

    const pagination = ref({
      page: 1,
      pageSize: 10,
      itemCount: data.value.length // Ini harus di set untuk menghitung total data
    })

    return {
      menuItems,
      data,
      columns,
      pagination
    }
  }
}
</script>
