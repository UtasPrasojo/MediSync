<template>
  <div class="p-6" id="app">
    <!-- Breadcrumbs dan navigasi -->
    <div>
      <div class="flex md:hidden items-center pl-4">
        <i class="fas fa-home text-gray-500"></i>
        <span class="text-gray-800">Dashboard</span>
        <span class="text-gray-800">/</span>
        <span class="text-gray-800">Data Anak</span>
      </div>
    </div>
    <div class="hidden md:flex bg-white shadow-sm py-4 px-6 justify-between items-center">
      <div class="flex items-center space-x-2">
        <i class="fas fa-home text-gray-500"></i>
        <span class="text-black">Dashboard</span>
        <span class="text-black">/</span>
        <span class="text-black">Pengaturan</span>
      </div>
      <div class="flex items-center space-x-4">
        <i class="fas fa-user-circle text-gray-500"></i>
        <img
          alt="User profile picture"
          class="w-10 h-10 rounded-full"
          src="/profil.png"
          width="40"
          height="40"
        />
      </div>
    </div>

    <!-- Judul dan deskripsi -->
    <h1 class="text-xl font-semibold mb-2 mt-4">Pengaturan Data Anak</h1>
    <p class="text-gray-500 mb-6">Silahkan atur akun anda disini</p>

    <!-- Tabs -->
    <div class="flex justify-start">
      <div class="w-full max-w-lg">
        <n-tabs type="segment" animated>
          <n-tab-pane name="Data Akun" tab="Data Akun"> Data Akun </n-tab-pane>
          <n-tab-pane name="Anak" tab="Anak"> Anak </n-tab-pane>
          <n-tab-pane name="Keamanan" tab="Keamanan"> Keamanan </n-tab-pane>
        </n-tabs>
      </div>
    </div>

    <!-- Kartu untuk tampilan mobile -->
    <div class="block md:hidden">
      <div class="flex justify-between items-center mb-4">
        <h3 class="font-bold text-md">Data Anak</h3>
        <n-button type="tertiary">Tambah Data Anak</n-button>
      </div>

      <div class="flex md:hidden flex-wrap">
        <n-card
          v-for="child in children"
          :key="child.nik"
          hoverable
          class="m-2 w-full md:w-1/2 lg:w-1/3"
        >
          <div class="flex items-center mb-2">
            <img
              :src="child.profilePicture"
              alt="Profile Picture"
              class="w-10 h-10 rounded-full mr-2"
            />
            <div class="w-full">
              <span class="font-semibold">{{ child.name }}</span>
              <p class="text-sm text-gray-500"><strong>NIK:</strong> {{ child.nik }}</p>
              <hr class="border-gray-300 my-1 w-full" />
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="mr-4">
              <strong>Tempat Lahir:</strong>
              <div>{{ child.birthPlace }}</div>
            </div>
            <div class="mr-4">
              <strong>Tanggal Lahir:</strong>
              <div>{{ child.birthDate }}</div>
            </div>
            <div>
              <strong>Umur:</strong>
              <div>{{ child.age }}</div>
            </div>
          </div>
        </n-card>
      </div>
    </div>

    <!-- Tabel Data Anak desktop -->
    <div class="hidden md:block bg-white p-6 rounded-md shadow-md">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold">Data Anak</h2>
        <n-button class="px-4 py-2 bg-pink-500 text-white rounded-md flex items-center">
          Tambah Profil Anak
        </n-button>
      </div>
      <div>
        <n-data-table
          pagination-behavior-on-filter="first"
          :columns="columns"
          :data="children"
          :pagination="pagination"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, h } from 'vue'
import { NButton, NCard } from 'naive-ui'

interface Child {
  name: string
  nik: string
  birthPlace: string
  birthDate: string
  age: string
  profilePicture: string
}

export default defineComponent({
  setup() {
    const children = ref<Child[]>([
      {
        name: 'Yaqub Qamar',
        nik: '33000xxxxxxxxxx000',
        birthPlace: 'Blora',
        birthDate: 'Jul 23, 2023',
        age: '3 Tahun',
        profilePicture:
          'https://storage.googleapis.com/a1aa/image/qzw3F2EMnMaPNthE5vJIlIXTp3zv46HoDeouZXvh9trObUxJA.jpg'
      },
      {
        name: 'Khalid Kasimiri',
        nik: '33000xxxxxxxxxx000',
        birthPlace: 'Sleman',
        birthDate: 'Jun 12, 2022',
        age: '6 Tahun',
        profilePicture:
          'https://storage.googleapis.com/a1aa/image/VDyshKcfeQsLu0yQFKBcQO8vW275b0u3Jtl8GI4om9ma2oiTA.jpg'
      },
      {
        name: 'Khadir Karawita',
        nik: '33000xxxxxxxxxx000',
        birthPlace: 'Sleman',
        birthDate: 'Feb 22, 2024',
        age: '7 Tahun',
        profilePicture:
          'https://storage.googleapis.com/a1aa/image/ve3wg56sXTRQNyvjiGMteVUKTA1VvRY7cIE04F6ef7syZjKOB.jpg'
      }
    ])

    const columns = ref([
      { title: 'Nama Anak', key: 'name' },
      { title: 'NIK Anak', key: 'nik' },
      { title: 'Tempat Lahir', key: 'birthPlace' },
      { title: 'Tanggal Lahir', key: 'birthDate' },
      { title: 'Umur Anak', key: 'age' },
      {
        title: 'Aksi',
        key: 'action',
        render(row: Child) {
          return h(
            NButton,
            {
              type: 'primary',
              size: 'small',
              onClick: () => handleClick(row)
            },
            { default: () => 'Lihat Detail' }
          )
        }
      }
    ])

    const pagination = ref({
      page: 1,
      pageSize: 10
    })

    const handleClick = (child: Child) => {
      alert(`Anda mengklik ikon untuk ${child.name}`)
    }

    return {
      children,
      columns,
      pagination,
      handleClick
    }
  }
})
</script>

<style scoped>
/* Tambahkan style jika diperlukan */
</style>
