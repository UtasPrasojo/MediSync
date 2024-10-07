<template>
  <div class="bg-white p-6 rounded-lg shadow overflow-auto p-6">
    <div class="flex justify-between items-center mb-6">
      <div class="flex items-center space-x-2 text-gray-600">
        <i class="fas fa-home"></i>
        <span>Dashboard</span>
        <i class="fas fa-chevron-right"></i>
        <span>Info Posyandu</span>
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
        <h3 class="text-lg font-semibold">Jadwal Posyanndu</h3>
        <button class="bg-pink-500 text-white px-4 py-2 rounded-md">
          <i-material-symbols:search></i-material-symbols:search>
        </button>
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
        date: 'Juli, 23 2023',
        pelapor: 'Budi Santoso',
        anak: 'Ahmad Zulkarnain',
        alamat: 'Jl. Merdeka No. 45',
        gender: 'Laki-laki',
        phone: '081234567890',
        bmi: '21 Normal',
        option: 'Posyandu'
      },
      {
        date: 'Agustus, 15 2023',
        pelapor: 'Siti Aminah',
        anak: 'Fatimah Aisyah',
        alamat: 'Jl. Pahlawan No. 10',
        gender: 'Perempuan',
        phone: '081987654321',
        bmi: '22 Normal',
        option: 'Posyandu'
      },
      {
        date: 'September, 10 2023',
        pelapor: 'Rahmat Hidayat',
        anak: 'Deni Kurniawan',
        alamat: 'Jl. Kebon Jeruk No. 5',
        gender: 'Laki-laki',
        phone: '081234112233',
        bmi: '23 Normal',
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
        title: 'BMI',
        key: 'bmi'
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
