<template>
  <div class="bg-white p-6 rounded-lg overflow-auto">
    <div class="hidden md:flex justify-between items-center mb-6">
      <div class="flex items-center space-x-2 text-gray-600">
        <i class="fas fa-home"></i>
        <span>Dashboard</span>
        <i class="fas fa-chevron-right"></i>
        <span>Kesehatan Anak</span>
      </div>
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

    <div class="flex justify-between items-center mb-6">
      <div>
        <h1 class="text-2xl font-semibold">Laporkan Stunting</h1>
        <p class="text-gray-600">Laporkan jika menemukan anak yang teridentifikasi stunting</p>
      </div>
    </div>

    <div class="hidden md:block bg-white p-6 rounded-lg shadow overflow-auto">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-lg font-semibold">Riwayat Laporan</h3>
        <n-button type="primary">Lapor Stunting</n-button>
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

    <!-- Card untuk tampilan mobile -->
    <div class="block md:hidden">
      <div class="flex justify-between">
        <h3 class="text-lg font-semibold mb-4">Riwayat Perkembangan</h3>
        <n-button type="primary">Lapor Stunting</n-button>
      </div>

      <div v-for="(row, index) in data" :key="index" class="bg-white p-4 rounded-lg shadow-md mb-4">
        <div class="flex justify-between items-center mb-2 pb-2 border-b border-gray-300">
          <p class="font-semibold text-gray-800 bg-pink-100 px-2 rounded-lg py-2">
            Tanggal: {{ row.date }}
          </p>
          <n-button>
            <i-mage:dots></i-mage:dots>
          </n-button>
        </div>

        <!-- Flex container untuk Nama Pelapor, Nama Anak, dan Alamat Anak -->
        <div class="flex justify-between mb-2">
          <div class="w-1/3">
            <p class="text-gray-800 font-bold">Nama Pelapor:</p>
            <p class="text-gray-600">{{ row.pelapor }}</p>
          </div>
          <div class="w-1/3">
            <p class="text-gray-800 font-bold">Nama Anak:</p>
            <p class="text-gray-600">{{ row.anak }}</p>
          </div>
          <div class="w-1/3">
            <p class="text-gray-800 font-bold">Alamat Anak:</p>
            <p class="text-gray-600">{{ row.alamat }}</p>
          </div>
        </div>

        <!-- Flex container untuk Jenis Kelamin, No Telepon, dan Opsi Input -->
        <div class="flex">
          <div class="w-1/3">
            <p class="text-gray-800 font-bold">Jenis Kelamin:</p>
            <p class="text-gray-600">{{ row.gender }}</p>
          </div>
          <div class="w-1/3">
            <p class="text-gray-800 font-bold">No Telepon:</p>
            <p class="text-gray-600">{{ row.phone }}</p>
          </div>
          
        </div>
      </div>
    </div>
    <div class=" flex justify-center items-center mt-4">
      <n-pagination v-model:page="page" :page-count="100" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const data = ref([
      {
        date: 'Juli, 23 2023',
        pelapor: 'Budi Santoso',
        anak: 'Ahmad Zulkarnain',
        alamat: 'Jl. Merdeka No. 45',
        gender: 'Laki-laki',
        phone: '081234567890',
        option: 'Posyandu'
      },
      {
        date: 'Agustus, 15 2023',
        pelapor: 'Siti Aminah',
        anak: 'Fatimah Aisyah',
        alamat: 'Jl. Pahlawan No. 10',
        gender: 'Perempuan',
        phone: '081987654321',
        option: 'Posyandu'
      },
      {
        date: 'September, 10 2023',
        pelapor: 'Rahmat Hidayat',
        anak: 'Deni Kurniawan',
        alamat: 'Jl. Kebon Jeruk No. 5',
        gender: 'Laki-laki',
        phone: '081234112233',
        option: 'Posyandu'
      }
    ])

    const columns = ref([
      {
        title: 'Tanggal',
        key: 'date'
      },
      {
        title: 'Nama Pelapor',
        key: 'pelapor'
      },
      {
        title: 'Nama Anak',
        key: 'anak'
      },
      {
        title: 'Alamat Anak',
        key: 'alamat'
      },
      {
        title: 'Jenis Kelamin',
        key: 'gender'
      },
      {
        title: 'No Telepon',
        key: 'phone'
      },

      {
        title: 'Opsi Input',
        key: 'option'
      }
    ])

    return {
      data,
      columns
    }
  }
}
</script>
