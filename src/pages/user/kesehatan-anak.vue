<template>
  <div class="bg-white p-6 rounded-lg shadow overflow-auto p-6">
    <div class="flex justify-between items-center mb-6">
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
        <h1 class="text-2xl font-semibold">Dashboard</h1>
        <p class="text-gray-600">Informasi tentang aktifitas anda</p>
      </div>

      <!-- Dropdown Anak -->
      <div class="relative inline-block text-left">
        <button
          @click="toggleChildDropdown"
          class="bg-pink-500 text-white px-4 py-2 rounded-md flex items-center"
        >
          {{ selectedChild }}
          <i class="ml-2 fas fa-chevron-down"></i>
        </button>

        <!-- Dropdown Menu -->
        <div v-if="isChildDropdownOpen" class="absolute mt-2 w-48 bg-white rounded-md shadow-lg">
          <div class="py-1">
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              @click="selectChild('Anak Ke-1')"
            >
              Anak Ke-1
            </a>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              @click="selectChild('Anak Ke-2')"
            >
              Anak Ke-2
            </a>
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              @click="selectChild('Anak Ke-3')"
            >
              Anak Ke-3
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white p-6 rounded-lg shadow mb-6">
      <div class="flex justify-between">
        <h2 class="text-lg font-semibold">Grafik BMI Anak</h2>

        <!-- Dropdown Bulan -->
        <div class="relative inline-block text-left">
          <button
            @click="toggleMonthDropdown"
            class="bg-pink-500 text-white px-4 py-2 rounded-md flex items-center"
          >
            {{ selectedMonth }}
            <i class="ml-2 fas fa-chevron-down"></i>
          </button>

          <!-- Dropdown Menu Bulan -->
          <div v-if="isMonthDropdownOpen" class="absolute mt-2 w-48 bg-white rounded-md shadow-lg">
            <div class="py-1">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                @click="selectMonth('Januari')"
              >
                Januari
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                @click="selectMonth('Februari')"
              >
                Februari
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                @click="selectMonth('Maret')"
              >
                Maret
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                @click="selectMonth('April')"
              >
                April
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                @click="selectMonth('Mei')"
              >
                Mei
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                @click="selectMonth('Juni')"
              >
                Juni
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                @click="selectMonth('Juli')"
              >
                Juli
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                @click="selectMonth('Agustus')"
              >
                Agustus
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                @click="selectMonth('September')"
              >
                September
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                @click="selectMonth('Oktober')"
              >
                Oktober
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                @click="selectMonth('November')"
              >
                November
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                @click="selectMonth('Desember')"
              >
                Desember
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
        <div class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
          <div class="flex justify-between">
            <div>
              <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
                32.4k
              </h5>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">Users this week</p>
            </div>
            <div
              class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center"
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
                class="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2"
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
    </div>
    <div>
      <n-data-table
        pagination-behavior-on-filter="first"
        :columns="columns"
        :data="data"
        :pagination="pagination"
      />
    </div>

    <div class="bg-white p-6 rounded-lg shadow mb-6">
      <n-table :single-line="false">
        <thead>
          <tr class="bg-pink-500 text-white">
            <th>Tanggal</th>
            <th>Tinggi Badan</th>
            <th>Berat Badan</th>
            <th>Lingkar Kepala</th>
            <th>Usia</th>
            <th>BMI Anak</th>
            <th>Opsi Input</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Juli, 23 2023</td>
            <td>45 cm</td>
            <td>12 kg</td>
            <td>24 cm</td>
            <td>20 hari</td>
            <td>21 Normal</td>
            <td>Posyandu</td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M11 6.05C12.0125 6.05 12.8333 5.31127 12.8333 4.4C12.8333 3.48873 12.0125 2.75 11 2.75C9.9875 2.75 9.16667 3.48873 9.16667 4.4C9.16667 5.31127 9.9875 6.05 11 6.05Z"
                  fill="#FFC107"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 1.25C10.3367 1.25 9.68833 1.3725 9.16667 1.65C7.61042 2.515 6.5 4.5 6.5 7C6.5 9.18929 7.87833 11.25 9.66667 11.25H12.3333C14.1217 11.25 15.5 9.18929 15.5 7C15.5 4.5 14.3896 2.515 12.8333 1.65C12.3117 1.3725 11.6633 1.25 11 1.25ZM11 16.25C12.0125 16.25 12.8333 15.5113 12.8333 14.6C12.8333 13.6887 12.0125 12.95 11 12.95C9.9875 12.95 9.16667 13.6887 9.16667 14.6C9.16667 15.5113 9.9875 16.25 11 16.25Z"
                  fill="#FFC107"
                />
              </svg>
            </td>
          </tr>
        </tbody>
      </n-table>
    </div>
  </div>
</template>


<script lang="ts">
import { ref, onMounted } from 'vue'
import VueApexCharts from "vue3-apexcharts";

interface RowData {
  key: number
  name: string
  age: number
  address: string
}

export default {
  components: {
    apexchart: VueApexCharts // Register the component
  },
  setup() {
    const selectedChild = ref('Pilih Anak')
    const isChildDropdownOpen = ref(false)
    const isMonthDropdownOpen = ref(false)
    const selectedMonth = ref('Pilih Bulan')

    const toggleChildDropdown = () => {
      isChildDropdownOpen.value = !isChildDropdown.value
    }

    const toggleMonthDropdown = () => {
      isMonthDropdownOpen.value = !isMonthDropdown.value
    }

    const selectChild = (child: string) => {
      selectedChild.value = child
      isChildDropdownOpen.value = false // Close dropdown after selection
    }

    const selectMonth = (month: string) => {
      selectedMonth.value = month
      isMonthDropdownOpen.value = false // Close dropdown after selection
    }

    // Define pagination and data
    const pagination = {
      page: 1,
      pageSize: 10,
      itemCount: 0
    }

    const data = [
      {
        date: 'Juli, 23 2023',
        high: '45 cm',
        weight: '12 kg',
        head: '24 cm',
        age: '20 hari',
        bmi: '21 Normal',
        option: 'Posyandu'
      },
      {
        date: 'Agustus, 15 2023',
        high: '46 cm',
        weight: '13 kg',
        head: '25 cm',
        age: '30 hari',
        bmi: '22 Normal',
        option: 'Posyandu'
      },
      {
        date: 'September, 10 2023',
        high: '48 cm',
        weight: '14 kg',
        head: '26 cm',
        age: '40 hari',
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
        key: 'high'
      },
      {
        title: 'Berat Badan',
        key: 'weight'
      },
      {
        title: 'Lingkar Kepala',
        key: 'head'
      },
      {
        title: 'Usia',
        key: 'age'
      },
      {
        title: 'BMI Anak',
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

    // Chart rendering logic inside onMounted
    onMounted(() => {
      const chartContainer = document.getElementById('area-chart')
      if (chartContainer && typeof ApexCharts !== 'undefined') {
        const chart = new ApexCharts(chartContainer, options)
        chart.render()
      }
    })

    return {
      selectedChild,
      isChildDropdownOpen,
      toggleChildDropdown,
      selectChild,
      selectedMonth,
      isMonthDropdownOpen,
      toggleMonthDropdown,
      selectMonth,
      pagination,
      data,
      columns
    }
  }
}
</script>


<style scoped>
/* Your styles here */
</style>
