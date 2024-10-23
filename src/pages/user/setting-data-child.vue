
<script setup lang="ts">
import { ref, h, computed,  } from 'vue'
import { NButton, NCard } from 'naive-ui'
import EditProfilChild from '@/components/componen-user/edit-profil-child.vue'
import { DateTime } from 'luxon'
import { useReadChild } from '@/services/child'

const selectedChild = ref<Child | null>(null)

const showModal = ref(false)
const TambahAnak = ref(false)

const selectChild = (child: Child) => {
  selectedChild.value = child // Simpan data anak yang dipilih
  showModal.value = true // Tampilkan modal
}

// Definisikan interface untuk tipe data anak
interface Child {
  id: string
  name: string
  identityNumber: string
  placeOfBirth: string
  dateOfBirth: string
  age: string
  childPicture: string
}

// Data anak


const columns = ref([
  { title: 'Nama Anak', key: 'name', sorter: (a: Child, b: Child) => a.name.localeCompare(b.name) },
  { title: 'NIK Anak', key: 'identityNumber' },
  { title: 'Tempat Lahir', key: 'placeOfBirth' },
  { title: 'Tanggal Lahir', key: 'dateOfBirth' },
  { title: 'Umur Anak', key: 'age' },
  {
    title: 'Aksi',
    key: 'action',
    render(row: Child) {
      return h(
        EditProfilChild,
        {
          type: 'primary',
          size: 'small',
          id: row.id,
          onRefetch: () => refetch(),
          onClick: () => console.log(row) // Panggil modal saat tombol diklik
        },
        { default: () => 'Lihat Detail' }
      )
    }
  }
])



const { data, isLoading, refetch } = useReadChild() // Call the API using your custom hook

const handlePaginationChange = (newPagination: { page: number; pageSize: number }) => {
  pagination.value = newPagination
}

// const selectChild = (child: Child) => {
//   alert(`Selected Child: ${child.name}`) // Handle the child selection logic
// }

// Pagination
const pagination = ref({
  page: 1,
  pageSize: 10
})

const items = computed(() => {
  return data.value?.data.map((child: Child) => {
    return {
      id: child.id,
      name: child.name,
      identityNumber: child.identityNumber,
      placeOfBirth: child.placeOfBirth,
      dateOfBirth: child.dateOfBirth,
      age: calculateAge(child.dateOfBirth),
      childPicture: child.childPicture
    }
  })
})

const showTambahAnak = ref(false)

// Menghitung usia dengan Luxon menggunakan computed property
function calculateAge(birthDate: string): number {
  if(!birthDate) return 0
  const birthDateTime = DateTime.fromISO(birthDate) // Konversi ke Luxon DateTime
  const currentDate = DateTime.now() // Tanggal saat ini
  const diffInYears = currentDate.diff(birthDateTime, 'years').years // Hitung selisih tahun

  return Math.floor(diffInYears) // Kembalikan usia dalam bilangan bulat
}
</script>

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

    <!-- Judul dan deskripsi -->
    <h1 class="text-xl font-semibold mb-2 mt-4">Pengaturan Data Anak</h1>
    <p class="text-gray-500 mb-6">Silahkan atur akun anda disini</p>

    <!-- Tabs -->
    

    <!-- Kartu untuk tampilan mobile -->
    <div class="block md:hidden">
      <div class="flex justify-between items-center mb-4">
        <h3 class="font-bold text-md">Data Anak</h3>
        <n-button @click="showTambahAnak = true" type="tertiary">Tambah Data Anak</n-button>
        <n-modal v-model:show="showTambahAnak" :on-after-leave="() => (showTambahAnak = false)">
          <modal-input-user-input-data-child />
        </n-modal>
      </div>

      <div class="flex md:hidden flex-wrap">
        <n-card
          v-for="child in items"
          :key="child.identityNumber"
          hoverable
          class="m-2 w-full md:w-1/2 lg:w-1/3"
        >
          <div class="flex items-center mb-2">
            <img
              :src="child.childPicture"
              alt="Profile Picture"
              class="w-10 h-10 rounded-full mr-2"
            />
            <div class="w-full">
              <span class="font-semibold">{{ child.name }}</span>
              <p class="text-sm text-gray-500"><strong>NIK:</strong> {{ child.identityNumber }}</p>
              <hr class="border-gray-300 my-1 w-full" />
            </div>
          </div>
          <div class="flex flex-wrap">
            <div class="mr-4">
              <strong>Tempat Lahir:</strong>
              <div>{{ child.placeOfBirth }}</div>
            </div>
            <div class="mr-4">
              <strong>Tanggal Lahir:</strong>
              <div>{{ child.dateOfBirth }}</div>
            </div>
            <div>
              <strong>Umur:</strong>
              <div>{{ calculateAge(child.dateOfBirth) }}</div>
            </div>
          </div>
        </n-card>
      </div>
    </div>

    <!-- Tabel Data Anak desktop -->
    <div class="hidden md:block bg-white p-6 rounded-md shadow-md">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold">Data Anak</h2>
        <n-button class="px-4 py-2 bg-pink-500 text-white rounded-md flex items-center" @click="TambahAnak= true">
          Tambah Profil Anak
        </n-button>
        <n-modal v-model:show="TambahAnak"><modal-input-user-modal-input-data-child/></n-modal>
      </div>
      <div>
        <n-data-table
          pagination-behavior-on-filter="first"
          :columns="columns"
          :data="items"
          :pagination="pagination"
          :loading="isLoading"
          @refetch="refetch"
          @update:pagination="handlePaginationChange"
        />
      </div>
    </div>
  </div>
</template>



<style scoped>
/* Tambahkan style jika diperlukan */
</style>
