<template>
  <div class="bg-white rounded-lg overflow-auto p-6">
    <div class="hidden md:flex justify-end items-center mb-6">
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
    <div class="flex items-center space-x-2 text-gray-600">
      <i class="fas fa-home"></i>
      <span>Dashboard</span>
      <i class="fas fa-chevron-right"></i>
      <span>Info Posyandu</span>
    </div>

    <div class="hidden md:block bg-white p-6 rounded-lg shadow overflow-auto">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-lg font-semibold">Jadwal Posyandu</h3>
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
        </div>
      </div>

      <div class="hidden md:block">
        <n-data-table
          pagination-behavior-on-filter="first"
          :columns="columns"
          :data="data"
          :pagination="pagination"
        />
      </div>
    </div>

    <!-- Card untuk tampilan mobile -->
    <div class="block md:hidden mt-6">
      <h3 class="text-lg font-semibold mb-4">Jadwal Posyandu</h3>
      <div class="flex items-center space-x-2">
        <div class="w-full">
          <input
            type="text"
            placeholder="Search"
            class="border rounded-lg w-full p-2 pl-10"
            v-model="searchQuery"
          />
          <i class="fas fa-search absolute left-3 top-3 text-gray-600"></i>
        </div>
        <n-button type="primary">
          <i-material-symbols:search></i-material-symbols:search>
        </n-button>
      </div>
      <n-list>
        <n-list-item
          v-for="(row, index) in data"
          :key="index"
          class="flex justify-between bg-white"
        >
          <div>
            <div class="flex justify-between border-b border-gray-300">
              <div class="w-3/4">
                <div class="flex justify-between items-center mb-2 pb-2 border-gray-300">
                  <p class="font-semibold text-gray-800">Dusun Menoreh II</p>
                  <div class="flex items-center">
                    <p class="font-semibold text-gray-800">{{ row.date }}</p>
                  </div>
                </div>
                <div class="flex justify-between items-center mb-2 pb-2 border-gray-300">
                  <p class="text-gray-500">Puskesmas</p>
                  <div class="flex items-center">
                    <p class="text-gray-500">{{ row.waktu }}</p>
                  </div>
                </div>
              </div>
              <div class="w-1/4 flex justify-center items-center">
                <n-button class="ml-2 p-2 text-2xl">
                  <i-mage:dots></i-mage:dots>
                </n-button>
              </div>
            </div>
          </div>
        </n-list-item>
      </n-list>
      <n-pagination v-model:page="page" :page-count="50" />
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
        posyandu: 'Suka Makmur',
        waktu: '8.00-9.00',
        petugas: 'Dono,Doni',
        catatan: 'Sarapan dulu',
        option: 'Posyandu'
      },
      {
        date: 'Juli, 23 2023',
        posyandu: 'Suka Makmur',
        waktu: '8.00-9.00',
        petugas: 'Dono,Doni',
        catatan: 'Sarapan dulu',
        option: 'Posyandu'
      },
      {
        date: 'Juli, 23 2023',
        posyandu: 'Suka Makmur',
        waktu: '8.00-9.00',
        petugas: 'Dono,Doni',
        catatan: 'Sarapan dulu',
        option: 'Posyandu'
      }
    ])

    const columns = ref([
      {
        title: 'Tanggal',
        key: 'date'
      },
      {
        title: 'Posyandu',
        key: 'posyandu'
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
        title: 'Catatan',
        key: 'catatan'
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
