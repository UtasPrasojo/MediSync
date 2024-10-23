<script setup lang="ts">
import { ref, onMounted,computed } from 'vue'
import ApexCharts from 'apexcharts'
import { useReadParentsCheckup } from '@/services/checkup-parents'

// Definisikan tipe untuk data baris

interface checkup {
  id: string
  date: string
  height: number
  weight: number
  fundusMeasurement:number
  upperArmCircumference: number
  bmi: string
  option: string
}


const { data: checkupData, isLoading, refetch } = useReadParentsCheckup()
const isMonthDropdownOpen = ref(false)
const selectedMonth = ref('Pilih Bulan')
const showModal = ref(false)

const itemsCheckup = computed(() => {
  return checkupData.value?.data.map((checkup: checkup) => {
    return {
      id: checkup.id,
      date: checkup.date,
      height: checkup.height,
      weight: checkup.weight,
      upperArmCircumference: checkup.upperArmCircumference,
      
    }
  })
})


// Fungsi untuk mengubah status dropdown bulan
const toggleMonthDropdown = () => {
  isMonthDropdownOpen.value = !isMonthDropdownOpen.value
}

// Fungsi untuk memilih anak


// Fungsi untuk memilih bulan
const selectMonth = (month: string) => {
  selectedMonth.value = month
  isMonthDropdownOpen.value = false // Menutup dropdown setelah pemilihan
}

// Definisikan pagination dan data
const pagination = {
  page: 1,
  pageSize: 10,
  itemCount: 0
}
const page = ref(1)

const data = [
  {
    date: 'Juli, 23 2023',
    high: '45 cm',
    weight: '12 kg',
    urteri: '24 cm',
    lengan: '20 hari',
    bmi: '21 Normal',
    option: 'Posyandu'
  },
  {
    date: 'Agustus, 15 2023',
    high: '46 cm',
    weight: '13 kg',
    urteri: '25 cm',
    lengan: '30 hari',
    bmi: '22 Normal',
    option: 'Posyandu'
  },
  {
    date: 'September, 10 2023',
    high: '48 cm',
    weight: '14 kg',
    urteri: '26 cm',
    lengan: '40 hari',
    bmi: '23 Normal',
    option: 'Posyandu'
  }
  // Tambahkan lebih banyak baris jika diperlukan
]

const columns = [
  {
    title: 'Tanggal',
    key: 'date'
  },
  {
    title: 'Tinggi Badan',
    key: 'height'
  },
  {
    title: 'Berat Badan',
    key: 'weight'
  },
  {
    title: 'Fundus Uteri',
    key: 'upperArmCircumference'
  },
  {
    title: 'Lingkar Lengan',
    key: 'lengan'
  },
  {
    title: 'BMI Ibu',
    key: 'weight'
  },
  {
    title: 'Opsi Input',
    key: 'option'
  },
  {
    title: ' ',
    key: 'action'
  }
]

const monthOptions = [
  { label: 'Januari', key: 'Januari' },
  { label: 'Februari', key: 'Februari' },
  { label: 'Maret', key: 'Maret' },
  { label: 'April', key: 'April' },
  { label: 'Mei', key: 'Mei' },
  { label: 'Juni', key: 'Juni' },
  { label: 'Juli', key: 'Juli' },
  { label: 'Agustus', key: 'Agustus' },
  { label: 'September', key: 'September' },
  { label: 'Oktober', key: 'Oktober' },
  { label: 'November', key: 'November' },
  { label: 'Desember', key: 'Desember' }
]

const options = {
  chart: {
    height: '100%',
    maxWidth: '100%',
    type: 'area',
    fontFamily: 'Inter, sans-serif',
    dropShadow: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  tooltip: {
    enabled: true,
    x: {
      show: false
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.55,
      opacityTo: 0,
      shade: '#1C64F2',
      gradientToColors: ['#1C64F2']
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 6
  },
  grid: {
    show: false,
    strokeDashArray: 4,
    padding: {
      left: 2,
      right: 2,
      top: 0
    }
  },
  series: [
    {
      name: 'New users',
      data: [6500, 6418, 6456, 6526, 6356, 6456],
      color: '#1A56DB'
    }
  ],
  xaxis: {
    categories: [
      '01 February',
      '02 February',
      '03 February',
      '04 February',
      '05 February',
      '06 February',
      '07 February'
    ],
    labels: {
      show: false
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    show: false
  }
}

// Logika render chart di dalam onMounted
onMounted(() => {
  const chartContainer = document.getElementById('area-chart')
  if (chartContainer && typeof ApexCharts !== 'undefined') {
    const chart = new ApexCharts(chartContainer, options)
    chart.render()
  }
})

// Ekspos variabel dan fungsi
</script>

<template>
  <div class="bg-white p-6 rounded-lg shadow overflow-auto p-6">
    <div class="flex justify-between items-center mb-6">
      <div>
        <h1 class="text-2xl font-semibold">Dashboard</h1>
        <p class="text-gray-600">Informasi tentang aktifitas anda</p>
      </div>

      <!-- Dropdown Anak -->
    </div>
    <!-- div BIM -->
    <div class="bg-white p-2 rounded-lg shadow mb-6">
      <div class="flex justify-between">
        <h2 class="text-lg font-semibold">Grafik BMI Ibu</h2>

        <!-- Dropdown Bulan -->
        <div class="relative inline-block text-left">
          <!-- Dropdown Menu Bulan -->
          <div class="relative inline-block text-left mb-2">
            <!-- Dropdown Bulan -->
            <n-dropdown :options="monthOptions" trigger="click" @select="selectMonth">
              <n-button class="bg-pink-500 text-white">
                {{ selectedMonth }}
                <n-icon class="ml-2">
                  <i class="fas fa-chevron-down"></i>
                </n-icon>
              </n-button>
            </n-dropdown>
          </div>
        </div>
      </div>

      <div class="h-full w-full bg-white rounded-lg dark:bg-white p-4">
        <div class="flex justify-between">
          <div>
            <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
              32.4k
            </h5>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Users this week</p>
          </div>
          <div
            class="flex items-center px-2.5 py-0.5 text-base font-semibold text-pink-500 dark:text-pink-500 text-center"
          >
            12%
            <svg
              class="w-3 h-3 ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13V1m0 0L1 5m4-4 4 4"
              />
            </svg>
          </div>
        </div>
        <div id="area-chart"></div>
        <div
          class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between"
        >
          <div class="flex justify-between items-center pt-5">
            <!-- Button -->
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="lastDaysdropdown"
              data-dropdown-placement="bottom"
              class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
              type="button"
            >
              Last 7 days
              <svg
                class="w-2.5 m-2.5 ms-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div
              id="lastDaysdropdown"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Yesterday</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Today</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Last 7 days</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Last 30 days</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Last 90 days</a
                  >
                </li>
              </ul>
            </div>
            <a
              href="#"
              class="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-pink-600 hover:text-pink-700 dark:hover:text-white hover:bg-gray-500 dark:hover:bg-pink-700 dark:focus:ring-pink-700 dark:border-pink-700 px-3 py-2"
            >
              Users Report
              <svg
                class="w-2.5 h-2.5 ms-1.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="rounded-lg mb-6">
      <div class="flex justify-between mb-6">
        <h2 class="text-lg font-semibold">Riwayat Perkembangan</h2>
        <n-button type="primary" @click="showModal = true">Input Mandiri</n-button>
        <n-modal v-model:show="showModal"><modal-input-user-modal-tambah-pemeriksaanibu /></n-modal>
      </div>
      <div class="hidden md:block">
        <n-data-table
          pagination-behavior-on-filter="first"
          :columns="columns"
          :data="itemsCheckup"
          :pagination="pagination"
        />
      </div>
      <!-- Card Layout untuk tampilan Mobile -->
      <div class="block md:hidden space-y-4">
        <div v-for="(row, index) in data" :key="index" class="bg-white p-4 rounded-lg shadow-md">
          <!-- Flex container untuk Tanggal dan BMI Anak dengan garis bawah -->
          <div class="flex justify-between items-center mb-2 pb-2 border-b border-gray-300">
            <p class="font-semibold text-gray-800 bg-pink-200 p-2 rounded">
              Tanggal: {{ row.date }}
            </p>
            <p class="text-gray-600">{{ row.bmi }}</p>
            <button>
              <i-mage:dots></i-mage:dots>
            </button>
          </div>

          <!-- Data lainnya di bawah -->
          <div class="flex justify-between mb-2">
            <div>
              <p class="text-gray-600 font-bold">Tinggi Badan:</p>
              <p class="text-gray-600">{{ row.high }}</p>
            </div>
            <div>
              <p class="text-gray-600 font-bold">Berat Badan:</p>
              <p class="text-gray-600">{{ row.weight }}</p>
            </div>
            <div>
              <p class="text-gray-600 font-bold">Opsi Input:</p>
              <p class="text-gray-600">{{ row.option }}</p>
            </div>
          </div>

          <!-- Data tambahan dengan jarak yang sama -->
          <div class="flex justify-start">
            <div>
              <p class="text-gray-600 font-bold">Lingkar Kepala:</p>
              <p class="text-gray-600">{{ row.urteri }}</p>
            </div>
            <div class="ml-10">
              <p class="text-gray-600 font-bold">Usia:</p>
              <p class="text-gray-600">{{ row.lengan }}</p>
            </div>
          </div>
        </div>
        <n-pagination v-model:page="page" :page-count="100" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Your styles here */
</style>
