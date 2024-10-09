<template>
  <div class="flex h-screen" id="app">
    <div class="flex-1 p-6">
      <header class="flex justify-between items-center mb-6">
        <div>
          <h1 class="text-2xl font-semibold">Master data</h1>
          <p class="text-gray-600">Informasi tentang laporan tentang data user dan bayi</p>
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
            <n-button type="primary">Tambah User</n-button>
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
import { ref, h } from 'vue'
import { NButton } from 'naive-ui'

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
        nama: 'Sigit',
        email: 'sigit@user.com',
        tipe: 'Admin Puskesmas'
      },
      {
        id: 2,
        nama: 'Rina',
        email: 'rina@user.com',
        tipe: 'Kader Puskesmas'
      },
      {
        id: 3,
        nama: 'Dina',
        email: 'dina@user.com',
        tipe: 'Perangkat Kecamatan'
      }
    ])

    const columns = ref([
      {
        title: 'Nama',
        key: 'nama'
      },
      {
        title: 'Email',
        key: 'email'
      },
      {
        title: 'Tipe',
        key: 'tipe',
        render(row) {
          // Tentukan warna berdasarkan tipe user
          let bgColor = ''
          if (row.tipe === 'Admin Puskesmas') {
            bgColor = 'bg-red-100 text-red-700' // Warna background untuk Admin
          } else if (row.tipe === 'Kader Puskesmas') {
            bgColor = 'bg-blue-100 text-blue-700' // Warna background untuk Kader
          } else if (row.tipe === 'Perangkat Kecamatan') {
            bgColor = 'bg-green-100 text-green-700' // Warna background untuk Perangkat Kecamatan
          }

          return h(
            'span',
            {
              class: `${bgColor} px-2 py-1 rounded-md inline-block text-sm font-medium`
            },
            row.tipe
          )
        }
      },

      {
        title: 'Aksi',
        key: 'actions',
        render(row) {
          return h(
            NButton,
            {
              type: 'primary',
              onClick: () => {
                // Redirect ke halaman edit dengan ID pengguna
                window.location.href = `/users/edit/${row.id}`
              }
            },
            'Edit'
          )
        }
      },
      {
        title: '',
        key: 'hapus',
        render(row) {
          return h(
            NButton,
            {
              type: 'tertiary',
              onClick: () => {
                // Redirect ke halaman edit dengan ID pengguna
                window.location.href = `/users/hapus/${row.id}`
              }
            },
            'Hapus'
          )
        }
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
