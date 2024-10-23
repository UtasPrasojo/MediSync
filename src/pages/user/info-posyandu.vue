<script setup lang="ts">
import DetailPosyandu from '@/components/componen-user/comp-detail-posyandu.vue';
import { useReadSchedule } from '@/services/schedule';
import { DateTime } from 'luxon';
import { NButton, NDataTable, NInput, NList, NListItem, NPagination } from 'naive-ui'; // Ensure proper Naive UI imports
import { h, ref } from 'vue';

interface Schedule {
  id: string
  healthPost: string
  address: string
  staff: string
  open: string
  close: string
  date: string
  note: string
}

interface PaginatedResponse<T> {
  data: T[]
}

// Reactive parameter for pagination
const params = ref<{ page: number }>({
  page: 21
})

const search = ref<string>('')

// Use the read schedule service to get data
const { data: schedules } = useReadSchedule(params)

// Function to handle search input
const searchSchedule = () => {
  console.log('Searching for:', search.value)
}

// Column definitions for the table
const columns = ref([
  {
    title: 'Tanggal',
    key: 'date',
    render(data) {
      return DateTime.fromISO(data.date).toFormat('dd LLL yyyy')
    }
  },
  {
    title: 'Posyandu',
    key: 'healthPost'
  },
  {
    title: 'Waktu',
    key: 'open-close',
    render(data) {
      const openTime = DateTime.fromISO(data.open).toFormat('HH:mm');
      const closeTime = DateTime.fromISO(data.close).toFormat('HH:mm');
      return `${openTime} - ${closeTime}`;
    }
  },
  {
    title: 'Petugas',
    key: 'staff'
  },
  {
    title: 'Catatan',
    key: 'note'
  },
  {
    title: 'Action',
    key: 'action',
    render(data) {
      return h('div', [
        h(DetailPosyandu, {
          id: data.id
        }) // Render the DetailPosyandu component
      ])
    }
  }
])


</script>

<template>
  <div class="bg-white rounded-lg overflow-auto p-6">
    <div class="hidden md:flex justify-end items-center mb-6">
      <div>
        <div class="flex items-center space-x-4">
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
            <n-Input
              v-model:value="search"
              class="border border-gray-300 rounded-lg h-12 p-2 flex-grow"
              placeholder="Search"
              type="text"
            />
            <i class="fas fa-search absolute left-3 top-3 text-gray-600"></i>
          </div>
          <button
            class="bg-pink-500 text-white h-12 w-12 rounded-lg ml-2 flex items-center justify-center"
            @click="searchSchedule"
          >
            <i-material-symbols:search></i-material-symbols:search>
          </button>
        </div>
      </div>

      <n-data-table
        v-if="schedules"
        :columns="columns"
        :data="schedules.data"
        pagination-behavior-on-filter="first"
      />
      <n-pagination v-model:page="page" :page-count="100" />
    </div>

    <!-- Card for mobile view -->
    <div class="block md:hidden mt-6">
      <h3 class="text-lg font-semibold mb-4">Jadwal Posyandu</h3>
      <div class="flex items-center space-x-2">
        <div class="w-full relative">
          <input
            type="text"
            placeholder="Search"
            class="border rounded-lg w-full p-2 pl-10"
            v-model="search"
          />
          <i class="fas fa-search absolute left-3 top-3 text-gray-600"></i>
        </div>
        <NButton type="primary" @click="searchSchedule">
          <i class="fas fa-search"></i>
        </NButton>
      </div>
      <NList>
        <NListItem
          v-for="(row, index) in schedules?.data"
          :key="index"
          class="flex justify-between bg-white"
        >
          <div>
            <div class="flex justify-between border-b border-gray-300">
              <div class="w-3/4">
                <div class="flex justify-between items-center mb-2 pb-2 border-gray-300">
                  <p class="font-semibold text-gray-800">{{ row.healthPost }}</p>
                  <div class="flex items-center">
                    <p class="font-semibold text-gray-800">{{ DateTime.fromISO(row.date).toFormat('dd LLL yyyy') }}</p>
                  </div>
                </div>
                <div class="flex justify-between items-center mb-2 pb-2 border-gray-300">
                  <p class="text-gray-500">Petugas: {{ row.staff }}</p>
                  <div class="flex items-center">
                    <p class="text-gray-500">{{ DateTime.fromISO(row.open).toFormat('HH:mm') }} - {{ DateTime.fromISO(row.close).toFormat('HH:mm') }}</p>
                  </div>
                </div>
              </div>
              <div class="w-1/4 flex justify-center items-center">
                <DetailPosyandu :id="row.id" />
              </div>
            </div>
          </div>
        </NListItem>
      </NList>
      <NPagination v-model:page="params.page" :page-count="3" />
    </div>
  </div>
</template>
