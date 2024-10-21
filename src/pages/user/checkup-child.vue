<script lang="ts">
import { ref, onMounted } from 'vue'
import ApexCharts from 'apexcharts'
import { NDropdown, NButton, NIcon, NDataTable } from 'naive-ui'
import { useReadChild } from '@/services/child'

interface RowData {
  date: string
  high: string
  weight: string
  head: string
  age: string
  bmi: string
  option: string
  action: string
}

export default {
  setup() {
    const selectedChild = ref('Pilih Anak')
    const selectedMonth = ref('Pilih Bulan')

    // Opsi dropdown untuk anak
    const childOptions = [
      { label: 'Anak Ke-1', key: 'Anak Ke-1' },
      { label: 'Anak Ke-2', key: 'Anak Ke-2' },
      { label: 'Anak Ke-3', key: 'Anak Ke-3' }
    ]

    // Opsi dropdown untuk bulan
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

    const selectChild = (key: string) => {
      selectedChild.value = key
    }

    const selectMonth = (key: string) => {
      selectedMonth.value = key
    }

    // Data yang diambil dari API
    const childData = ref<RowData[]>([]) // Untuk menyimpan data anak
    const { data, error } = useReadChild()

    onMounted(() => {
      if (data.value) {
        childData.value = data.value.map((item: any) => ({
          date: item.date,
          high: item.high + ' cm',
          weight: item.weight + ' kg',
          head: item.head + ' cm',
          age: item.age + ' hari',
          bmi:
            item.bmi + ' ' + (item.bmi < 18.5 ? 'Stunting' : item.bmi < 25 ? 'Normal' : 'Obesitas'),
          option: 'Posyandu'
        }))
      }
      if (error.value) {
        console.error('Error fetching child data:', error.value)
      }
    })

    const pagination = {
      page: 1,
      pageSize: 10,
      itemCount: 0
    }

    const page = ref(1)

    const columns = [
      { title: 'Tanggal', key: 'date' },
      { title: 'Tinggi Badan', key: 'high' },
      { title: 'Berat Badan', key: 'weight' },
      { title: 'Lingkar Kepala', key: 'head' },
      { title: 'Usia', key: 'age' },
      { title: 'BMI Anak', key: 'bmi' },
      { title: 'Opsi Input', key: 'option' }
    ]

    // Opsi chart
    const options = {
      chart: {
        height: '100%',
        maxWidth: '100%',
        type: 'area',
        toolbar: {
          show: false
        }
      },
      series: [
        {
          name: 'Pengguna Baru',
          data: [6500, 6418, 6456, 6526, 6356, 6456],
          color: '#1A56DB'
        }
      ],
      xaxis: {
        categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb']
      }
    }

    onMounted(() => {
      const chartContainer = document.getElementById('area-chart')
      if (chartContainer) {
        const chart = new ApexCharts(chartContainer, options)
        chart.render()
      }
    })

    return {
      selectedChild,
      selectedMonth,
      childOptions,
      monthOptions,
      childData,
      columns,
      selectChild,
      selectMonth,
      pagination,
      page
    }
  }
}
</script>

<template>
  <div class="bg-white p-6 rounded-lg shadow overflow-auto">
    <div class="hidden md:flex justify-between items-center mb-6"></div>

    <div class="flex justify-between items-center mb-6">
      <div>
        <h1 class="text-2xl font-semibold">Dashboard</h1>
        <p class="text-gray-600">Informasi tentang aktifitas anda</p>
      </div>

      <!-- Dropdown Anak -->
      <n-dropdown :options="childOptions" trigger="click" @select="selectChild">
        <n-button class="bg-pink-500 text-white">
          {{ selectedChild }}
          <n-icon class="ml-2">
            <i class="fas fa-chevron-down"></i>
          </n-icon>
        </n-button>
      </n-dropdown>
    </div>
    <!-- div BIM -->
    <div class="bg-white p-2 rounded-lg mb-6">
      <div class="flex justify-between">
        <h2 class="text-lg font-semibold mb-2">Grafik BMI Putri</h2>

        <!-- Dropdown Bulan -->
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

      <div class="h-full w-full bg-white rounded-lg shadow dark:bg-white p-4">
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
    <div class="md:flex justify-between">
      <div>
        <h2 class="text-lg font-semibold mb-4">Riwayat Perkembangan</h2>
      </div>
      <div class="flex justify-start md:justify-end mb-6">
        <n-button type="primary">Tambah Pertumbuhan Mandiri</n-button>
      </div>
    </div>

    <div>
      <!-- Tabel untuk tampilan Desktop -->
      <div class="hidden md:block overflow-x-auto">
        <n-data-table
          pagination-behavior-on-filter="first"
          :columns="columns"
          :data="data"
          :pagination="pagination"
          class="min-w-full text-sm lg:text-base"
          :page="page"
        >
          <!-- Slot untuk kolom action -->
          <template #action="{ row }">
            <n-button @click="handleEdit(row)" type="primary"> Edit </n-button>
          </template>
        </n-data-table>
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
              <p class="text-gray-600">{{ row.head }}</p>
            </div>
            <div class="ml-10">
              <p class="text-gray-600 font-bold">Usia:</p>
              <p class="text-gray-600">{{ row.age }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Your styles here */
</style>
