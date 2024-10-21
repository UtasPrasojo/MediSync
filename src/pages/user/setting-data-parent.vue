<script lang="ts" setup>
import { ref } from 'vue'
import { useMessage, type FormInst, type FormRules } from 'naive-ui'
import { useUserParentAddData } from '@/services/parents'
import { DateTime } from 'luxon'

const showIbu = ref(false)
const showAyah = ref(false)
const profileImage = ref('https://randomuser.me/api/portraits/women/1.jpg') // Sesuaikan dengan data sebenarnya
const userName = ref('Nama Pengguna')
const userEmail = ref('email@example.com')
const userPhone = ref('081234567890')
const userAddress = ref('Jl. Contoh Alamat, Indonesia')

const { mutate, isPending } = useUserParentAddData()

type FormData = {
  name?: string
  identityNumber?: string
  dateOfBirth?: number
  placeOfBirth?: string
  address?: string
  subDistrict?: string
  district?: string
  regency?: string
  type?: 'Father' | 'Mother'
}

// Data form yang akan digunakan
const formDataFather = ref<FormData>({
  name: undefined,
  identityNumber: undefined,
  dateOfBirth: undefined,
  placeOfBirth: undefined,
  address: undefined,
  subDistrict: undefined,
  district: undefined,
  regency: undefined,
  type: 'Father'
})

const formDataMother = ref<FormData>({
  name: undefined,
  identityNumber: undefined,
  dateOfBirth: undefined,
  placeOfBirth: undefined,
  address: undefined,
  subDistrict: undefined,
  district: undefined,
  regency: undefined,
  type: 'Mother'
})

const rules: FormRules = {
  name: [{ type: 'string', required: true, message: 'Nama lengkap wajib diisi' }],
  identityNumber: [{ type: 'number', required: true, message: 'NIK wajib diisi' }],
  placeOfBirth: [{ type: 'string', required: true, message: 'Tempat Lahir wajib diisi' }],
  dateOfBirth: [{ type: 'number', required: true, message: 'Tanggal Lahir wajib diisi' }],
  address: [{ type: 'string', required: true, message: 'Alamat wajib diisi' }],
  subDistrict: [{ type: 'string', required: true, message: 'Kecamatan wajib diisi' }],
  district: [{ type: 'string', required: true, message: 'Kabupaten wajib diisi' }],
  regency: [{ type: 'string', required: true, message: 'Kelurahan wajib diisi' }]
}

// Referensi untuk form
const formRef = ref<FormInst>()
const message = useMessage()

function toggleDropdown(profile: string) {
  if (profile === 'ibu') {
    showIbu.value = !showIbu.value
  } else if (profile === 'ayah') {
    showAyah.value = !showAyah.value
  }
}

const handleSubmitFather = () => {
  formRef.value?.validate((errors) => {
    if (!errors) {
      mutate({
        ...formDataFather.value,
        dateOfBirth: DateTime.fromMillis(formDataFather.value.dateOfBirth || 0).toISO()
      })

      return
    }
    message.error('Validasi gagal')
  })
}

const handleSubmitMother = () => {
  formRef.value?.validate((errors) => {
    if (!errors) {
      mutate({
        ...formDataMother.value,
        dateOfBirth: DateTime.fromMillis(formDataMother.value.dateOfBirth || 0).toISO()
      })

      return
    }
    message.error('Validasi gagal')
  })
}

const value = ref(null)
const checked = ref(false)
const disabled1 = ref(false)
const disabled2 = ref(false)

// Perbaikan tipe array untuk options
const options = [
  {
    label: "Everybody's Got Something to Hide Except Me and My Monkey",
    value: 'song0',
    disabled: true
  },
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  }
]

// Anda bisa langsung menambahkan timestamp di sini
const timestamp = ref(1183135260000)
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Breadcrumbs atau navigasi -->
    <div class="hidden md:flex items-center space-x-2">
      <i class="fas fa-home text-gray-500"></i>
      <span class="text-black">Dashboard</span>
      <span class="text-black">/</span>
      <span class="text-black">Pengaturan</span>
    </div>
    <!-- Profil dan Icon -->
    <!-- tampilan mobile -->
    <div>
      <div class="flex md:hidden items-center pl-4">
        <i class="fas fa-home text-gray-500"></i>
        <span class="text-gray-800">Dashboard</span>
        <span class="text-gray-800">/</span>
        <span class="text-gray-800">Pengaturan</span>
      </div>
    </div>

    <!-- tampilan mobile -->
    <div class="flex md:hidden pb-4">
      <div class="pl-4">
        <h3 class="text-lg font-semibold">Pengaturan Akun</h3>
        <p class="text-xs text-gray-500">Silahkan manage akun anda disini</p>
      </div>
    </div>

    <div class="py-4 px-6 text-left">
      <div class="hidden md:flex justify-between items-center pb-4">
        <!-- Container untuk teks di sebelah kiri -->
        <div>
          <h1 class="text-2xl font-semibold">Pengaturan Akun</h1>
          <p class="text-gray-500">Silahkan manage akun anda disini</p>
        </div>

        <!-- Container untuk tombol di sebelah kanan -->
      </div>

      <!-- tampilan mobile -->
      <div class="flex items-center justify-center md:hidden">
        <div class="bg-white w-full rounded-lg p-2 shadow-sm">
          <div class="flex justify-between items-center mx-4 mt-2">
            <h2 class="text-lg font-semibold">Profil Pengguna</h2>
            <n-button
              type="primary"
              class="text-black bg-white px-4 py-2 rounded-lg border border-gray-400"
            >
              Ubah Profil
            </n-button>
          </div>
          <div class="flex flex-col items-center mt-4">
            <div>
              <img
                alt="User profile picture"
                class="w-24 h-24 rounded-full"
                :src="profileImage"
                width="100"
                height="100"
              />
              <h3 class="mt-4 text-xl font-semibold">{{ userName }}</h3>
              <p class="text-gray-500">{{ userEmail }}</p>
            </div>

            <div class="mt-4 space-y-2 text-gray-500">
              <div class="flex items-center space-x-2">
                <i class="fas fa-phone-alt"></i>
                <span>{{ userPhone }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <i class="fas fa-map-marker-alt"></i>
                <span>{{ userAddress }}</span>
              </div>
            </div>

            <button class="mt-6 text-red-500 flex items-center space-x-2">
              <i class="fas fa-trash-alt"></i>
              <span>Hapus Akun</span>
            </button>
          </div>
        </div>
      </div>
      <!-- form mobile -->
      <div class="flex justify-center mt-2 w-full md:hidden">
        <div class="w-full">
          <div class="bg-white p-4 rounded-lg w-full shadow-sm">
            <div class="flex justify-between items-center mt-6">
              <h3 class="text-lg font-semibold">Data Orang Tua</h3>
              <!-- Checkbox untuk Data Orang Tua -->
            </div>

            <div class="mt-4 space-y-4">
              <!-- Profil Ibu Button -->
              <button
                @click="toggleDropdown('ibu')"
                :class="[
                  'w-full text-left px-4 py-2 rounded-lg flex justify-between items-center',
                  showIbu ? 'bg-pink-500 text-white' : 'bg-gray-100 text-black'
                ]"
              >
                <span>Profil Ibu</span>
                <i :class="{ 'fas fa-chevron-down': !showIbu, 'fas fa-chevron-up': showIbu }"></i>
              </button>

              <!-- Dropdown Form Profil Ibu -->
              <div v-if="showIbu" class="bg-gray-50 p-4 rounded-lg">
                <form>
                  <div>
                    <h3 class="font-bold text-lg mb-2">Form Data Akun Ibu</h3>
                    <n-checkbox v-model:checked="checked" class="mb-4">
                      Samakan dengan profile
                    </n-checkbox>
                  </div>
                  <div class="mb-4">
                    <n-form-item label="Nama Ibu" path="namaibu">
                      <n-input class="w-full p-2 border rounded" type="text" />
                    </n-form-item>
                  </div>
                  <div class="mb-4">
                    <n-form-item label="NIK" path="nik">
                      <n-input class="w-full p-2 border rounded" type="text" />
                    </n-form-item>
                  </div>

                  <!-- Flex container for Tempat Lahir and Tanggal Lahir -->
                  <div class="mb-4 flex space-x-4">
                    <!-- Tempat Lahir -->
                    <div class="w-1/2">
                      <n-form-item label="Tempat Lahir" path="tempatlahir">
                        <n-input class="w-full p-2 border rounded" type="text" />
                      </n-form-item>
                    </div>

                    <!-- Tanggal Lahir -->
                    <div class="w-1/2">
                      <n-form-item label="Tanggal Lahir" path="tanggallahir">
                        <n-date-picker v-model:value="timestamp" type="date" />
                      </n-form-item>
                    </div>
                  </div>
                  <div class="mb-4 flex space-x-4">
                    <div class="w-1/2">
                      <n-form-item label="Provinsi" path="provinsi">
                        <n-select v-model:value="value" :options="options" />
                      </n-form-item>
                    </div>

                    <div class="w-1/2">
                      <n-form-item path="kabupaten" label="Kabupaten">
                        <n-select v-model:value="value" :options="options" />
                      </n-form-item>
                    </div>
                  </div>
                  <div class="mb-4 flex space-x-4">
                    <!-- Kelurahan -->
                    <div class="w-1/2">
                      <n-form-item path="kelurahan" label="Kelurahan">
                        <n-select v-model:value="value" :options="options" />
                      </n-form-item>
                    </div>

                    <!-- Kecamatan -->
                    <div class="w-1/2">
                      <n-form-item path="kecamatan" label="Kecamatan">
                        <n-select v-model:value="value" :options="options" />
                      </n-form-item>
                    </div>
                  </div>
                  <div class="mb-4">
                    <n-form-item path="alamat" label="Alamat">
                      <n-input ctype="textarea" />
                    </n-form-item>
                  </div>
                  <ui-button color="primary" variant="fill">Simpan</ui-button>

                  <!-- Form fields lainnya -->
                </form>
              </div>

              <!-- Profil Ayah Button -->
              <button
                @click="toggleDropdown('ayah')"
                :class="[
                  'w-full text-left px-4 py-2 rounded-lg flex justify-between items-center',
                  showAyah ? 'bg-pink-500 text-white' : 'bg-gray-100 text-black'
                ]"
              >
                <span>Profil Ayah</span>
                <i :class="{ 'fas fa-chevron-down': !showAyah, 'fas fa-chevron-up': showAyah }"></i>
              </button>

              <!-- Dropdown Form Profil Ayah -->
              <div v-if="showAyah" class="bg-gray-50 p-4 rounded-lg">
                <form>
                  <div>
                    <h3 class="font-bold text-lg mb-2">Form Data Akun Ayah</h3>
                    <n-checkbox v-model:checked="checked" class="mb-4">
                      Samakan dengan profile
                    </n-checkbox>
                  </div>
                  <div class="mb-4">
                    <n-form-item label="Nama Ibu" path="namaibu">
                      <n-input class="w-full p-2 border rounded" type="text" />
                    </n-form-item>
                  </div>
                  <div class="mb-4">
                    <n-form-item label="NIK" path="nik">
                      <n-input class="w-full p-2 border rounded" type="text" />
                    </n-form-item>
                  </div>

                  <!-- Flex container for Tempat Lahir and Tanggal Lahir -->
                  <div class="mb-4 flex space-x-4">
                    <!-- Tempat Lahir -->
                    <div class="w-1/2">
                      <n-form-item label="Tempat Lahir" path="tempatlahir">
                        <n-input type="text" />
                      </n-form-item>
                    </div>

                    <!-- Tanggal Lahir -->
                    <div class="w-1/2">
                      <n-form-item label="Tanggal Lahir" path="tanggallahir">
                        <n-date-picker v-model:value="timestamp" type="date" />
                      </n-form-item>
                    </div>
                  </div>
                  <div class="mb-4 flex space-x-4">
                    <div class="w-1/2">
                      <n-form-item label="Provinsi" path="provinsi">
                        <n-select v-model:value="value" :options="options" />
                      </n-form-item>
                    </div>

                    <div class="w-1/2">
                      <n-form-item path="kabupaten" label="Kabupaten">
                        <n-select v-model:value="value" :options="options" />
                      </n-form-item>
                    </div>
                  </div>
                  <div class="mb-4 flex space-x-4">
                    <!-- Kelurahan -->
                    <div class="w-1/2">
                      <n-form-item path="kelurahan" label="Kelurahan">
                        <n-select v-model:value="value" :options="options" />
                      </n-form-item>
                    </div>

                    <!-- Kecamatan -->
                    <div class="w-1/2">
                      <n-form-item path="kecamatan" label="Kecamatan">
                        <n-select v-model:value="value" :options="options" />
                      </n-form-item>
                    </div>
                  </div>
                  <div class="mb-4">
                    <label class="block text-gray-700">Alamat</label>
                    <n-form-item path="alamat" label="Alamat">
                      <n-input ctype="textarea" />
                    </n-form-item>
                  </div>
                  <ui-button color="primary" variant="fill">Simpan</ui-button>

                  <!-- Form fields lainnya -->
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hidden md:flex w-full gap-4">
        <div class="w-1/3">
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <div class="flex justify-between items-center">
              <h2 class="text-lg font-semibold">Profil Pengguna</h2>
              <button class="text-black bg-white px-4 py-2 rounded-lg border border-gray-400">
                Ubah Profil
              </button>
            </div>
            <div class="flex flex-col items-center mt-4">
              <div>
                <img
                  alt="User profile picture"
                  class="w-24 h-24 rounded-full"
                  :src="profileImage"
                  width="100"
                  height="100"
                />
                <h3 class="mt-4 text-xl font-semibold">{{ userName }}</h3>
                <p class="text-gray-500">{{ userEmail }}</p>
              </div>

              <hr class="w-full mt-2 border-t border-gray-200" />
              <div class="mt-4 space-y-2 text-gray-500">
                <div class="flex items-center space-x-2">
                  <i-ic:round-phone></i-ic:round-phone>
                  <span>{{ userPhone }}</span>
                </div>
                <div class="flex items-center space-x-2">
                  <i-prime:address-book></i-prime:address-book>
                  <span>{{ userAddress }}</span>
                </div>
                <div class="flex items-center space-x-2">
                  <i-mdi:address-marker></i-mdi:address-marker>
                  <span>{{ userAddress }}</span>
                </div>
              </div>

              <button class="mt-6 text-red-500 flex items-center space-x-2">
                <i class="fas fa-trash-alt"></i>
                <span>Hapus Akun</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Tampilan Desktop -->
        <div class="w-2/3">
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <div class="flex justify-between items-center mt-6">
              <h2 class="text-lg font-semibold">Data Orang Tua</h2>
              <!-- Checkbox untuk Data Orang Tua -->
            </div>

            <div class="mt-4 space-y-4">
              <!-- Profil Ibu Button -->
              <button
                @click="toggleDropdown('ibu')"
                :class="[
                  'w-full text-left px-4 py-2 rounded-lg flex justify-between items-center',
                  showIbu ? 'bg-pink-500 text-white' : 'bg-gray-100 text-black'
                ]"
              >
                <span>Profil Ibu</span>
                <i :class="{ 'fas fa-chevron-down': !showIbu, 'fas fa-chevron-up': showIbu }"></i>
              </button>

              <!-- Dropdown Form Profil Ibu -->
              <div v-if="showIbu" class="bg-gray-50 p-4 rounded-lg">
                <n-form
                  @submit.prevent="handleSubmitMother"
                  ref="formRef"
                  :model="formDataMother"
                  :rules="rules"
                >
                  <div>
                    <h3 class="font-bold text-lg mb-2">Form Data Akun Ibu</h3>
                    <n-checkbox v-model:checked="checked" class="mb-4">
                      Samakan dengan profile
                    </n-checkbox>
                  </div>
                  <div class="mb-4">
                    <n-form-item label="Nama Ibu" path="namaibu">
                      <n-input class="w-full p-2 border rounded" type="text" v-model:value="formDataMother.name" />
                    </n-form-item>
                  </div>
                  <div class="mb-4">
                    <n-form-item label="NIK" path="nik">
                      <n-input class="w-full p-2 border rounded" type="text" v-model:value="formDataMother.identityNumber" />
                    </n-form-item>
                  </div>

                  <!-- Flex container for Tempat Lahir and Tanggal Lahir -->
                  <div class="mb-4 flex space-x-4">
                    <!-- Tempat Lahir -->
                    <div class="w-1/2">
                      <n-form-item label="Tempat Lahir" path="tempatlahir">
                        <n-input class="w-full p-2 border rounded" type="text" v-model:value="formDataMother.placeOfBirth"/>
                      </n-form-item>
                    </div>

                    <!-- Tanggal Lahir -->
                    <div class="w-1/2">
                      <n-form-item label="Tanggal Lahir" path="tanggallahir">
                        <n-date-picker v-model:value="formDataMother.dateOfBirth" type="date"  />
                      </n-form-item>
                    </div>
                  </div>
                  <div class="mb-4 flex space-x-4">
                    <div class="w-1/2">
                      <n-form-item label="Provinsi" path="provinsi">
                        <n-select v-model:value="value" :options="options" />
                      </n-form-item>
                    </div>

                    <div class="w-1/2">
                      <n-form-item path="kabupaten" label="Kabupaten">
                        <n-select v-model:value="formDataMother.district" :options="options" />
                      </n-form-item>
                    </div>
                  </div>
                  <div class="mb-4 flex space-x-4">
                    <!-- Kelurahan -->
                    <div class="w-1/2">
                      <n-form-item path="kelurahan" label="Kelurahan">
                        <n-select v-model:value="formDataMother.subDistrict" :options="options" />
                      </n-form-item>
                    </div>

                    <!-- Kecamatan -->
                    <div class="w-1/2">
                      <n-form-item path="kecamatan" label="Kecamatan">
                        <n-select v-model:value="formDataMother.regency" :options="options" />
                      </n-form-item>
                    </div>
                  </div>
                  <div class="mb-4">
                    <n-form-item path="alamat" label="Alamat">
                      <n-input v-model:value="formDataMother.address" type="textarea" />
                    </n-form-item>
                  </div>
                  <n-button type="primary" :loading="isPending" attr-type="submit">Simpan</n-button>

                  <!-- Form fields lainnya -->
                </n-form>
              </div>

              <!-- Profil Ayah Button -->
              <button
                @click="toggleDropdown('ayah')"
                :class="[
                  'w-full text-left px-4 py-2 rounded-lg flex justify-between items-center',
                  showAyah ? 'bg-pink-500 text-white' : 'bg-gray-100 text-black'
                ]"
              >
                <span>Profil Ayah</span>
                <i :class="{ 'fas fa-chevron-down': !showAyah, 'fas fa-chevron-up': showAyah }"></i>
              </button>

              <!-- Dropdown Form Profil Ayah -->
              <div v-if="showAyah" class="bg-gray-50 p-4 rounded-lg">
                <n-form
                  @submit.prevent="handleSubmitFather"
                  ref="formRef"
                  :model="formDataFather"
                  :rules="rules"
                >
                  <div>
                    <h3 class="font-bold text-lg mb-2">Form Data Akun Ayah</h3>
                    <n-checkbox v-model:checked="checked" class="mb-4">
                      Samakan dengan profile
                    </n-checkbox>
                  </div>
                  <div class="mb-4">
                    <n-form-item label="Nama Ibu" path="namaibu">
                      <n-input class="w-full p-2 border rounded" type="text" />
                    </n-form-item>
                  </div>
                  <div class="mb-4">
                    <n-form-item label="NIK" path="nik">
                      <n-input class="w-full p-2 border rounded" type="text" />
                    </n-form-item>
                  </div>

                  <!-- Flex container for Tempat Lahir and Tanggal Lahir -->
                  <div class="mb-4 flex space-x-4">
                    <!-- Tempat Lahir -->
                    <div class="w-1/2">
                      <n-form-item label="Tempat Lahir" path="tempatlahir">
                        <n-input class="w-full p-2 border rounded" type="text" />
                      </n-form-item>
                    </div>

                    <!-- Tanggal Lahir -->
                    <div class="w-1/2">
                      >
                      <n-form-item label="Tanggal Lahir" path="tanggallahir">
                        <n-date-picker v-model:value="timestamp" type="date" />
                      </n-form-item>
                    </div>
                  </div>
                  <div class="mb-4 flex space-x-4">
                    <div class="w-1/2">
                      <n-form-item label="Provinsi" path="provinsi">
                        <n-select v-model:value="value" :options="options" />
                      </n-form-item>
                    </div>

                    <div class="w-1/2">
                      <n-form-item path="kabupaten" label="Kabupaten">
                        <n-select v-model:value="value" :options="options" />
                      </n-form-item>
                    </div>
                  </div>
                  <div class="mb-4 flex space-x-4">
                    <!-- Kelurahan -->
                    <div class="w-1/2">
                      <n-form-item path="kelurahan" label="Kelurahan">
                        <n-select v-model:value="value" :options="options" />
                      </n-form-item>
                    </div>

                    <!-- Kecamatan -->
                    <div class="w-1/2">
                      <n-form-item path="kecamatan" label="Kecamatan">
                        <n-select v-model:value="value" :options="options" />
                      </n-form-item>
                    </div>
                  </div>
                  <div class="mb-4">
                    <n-form-item path="alamat" label="Alamat">
                      <n-input ctype="textarea" />
                    </n-form-item>
                  </div>
                  <ui-button color="primary" variant="fill">Simpan</ui-button>

                  <!-- Form fields lainnya -->
                </n-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Tambahkan style kustom jika diperlukan */
</style>
