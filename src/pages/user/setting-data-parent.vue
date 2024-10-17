<!-- <route lang="yaml">
  meta:
    layout: blank
  </route> -->

<template>
  <div class="min-h-screen bg-gray-50">
    <div class="bg-white shadow-md py-4 px-6 justify-between items-center hidden md:flex">
      <!-- Breadcrumbs atau navigasi -->
      <div class="flex items-center space-x-2">
        <i class="fas fa-home text-gray-500"></i>
        <span class="text-black">Dashboard</span>
        <span class="text-black">/</span>
        <span class="text-black">Pengaturan</span>
      </div>
      <!-- Profil dan Icon -->
      <div class="flex items-center space-x-4">
        <i class="fas fa-user-circle text-gray-500"></i>
        <img
          alt="User profile picture"
          class="w-10 h-10 rounded-full"
          :src="profileImage"
          width="40"
          height="40"
        />
      </div>
    </div>
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
    <div class="flex md:hidden justify-center px-4">
      <n-tabs type="segment" animated>
        <n-tab-pane name="Data Akun" tab="Data Akun"> Data Akun </n-tab-pane>
        <n-tab-pane name="Anak" tab="Anak"> Anak </n-tab-pane>
        <n-tab-pane name="Keamanan" tab="Keamanan"> Keamanan </n-tab-pane>
      </n-tabs>
    </div>

    <div class="py-4 px-6 text-left">
      <div class="hidden md:flex justify-between items-center pb-4">
        <!-- Container untuk teks di sebelah kiri -->
        <div>
          <h1 class="text-2xl font-semibold">Pengaturan Akun</h1>
          <p class="text-gray-500">Silahkan manage akun anda disini</p>
        </div>

        <!-- Container untuk tombol di sebelah kanan -->
        <n-radio-group v-model:value="value" name="radiobuttongroup1">
          <n-radio-button
            v-for="song in songs"
            :key="song.value"
            :value="song.value"
            :disabled="
              (song.label === 'Live Forever' && disabled1) ||
              (song.label === 'Shakermaker' && disabled2)
            "
            :label="song.label"
          />
        </n-radio-group>
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
            <img
              alt="User profile picture"
              class="w-24 h-24 rounded-full"
              :src="profileImage"
              width="100"
              height="100"
            />
            <h3 class="mt-4 text-xl font-semibold">{{ userName }}</h3>
            <p class="text-gray-500">{{ userEmail }}</p>

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
                    <n-checkbox v-model:checked="checked" class="mb-4"> Samakan dengan profile </n-checkbox>
                  </div>
                  <div class="mb-4">
                    <label class="block text-gray-700">Nama Ibu</label>
                    <n-input
                      class="w-full p-2 border rounded"
                      placeholder="n-input Nama"
                      type="text"
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block text-gray-700">NIK</label>
                    <n-input
                      class="w-full p-2 border rounded"
                      placeholder="n-input NIK"
                      type="text"
                    />
                  </div>

                  <!-- Flex container for Tempat Lahir and Tanggal Lahir -->
                  <div class="mb-4 flex space-x-4">
                    <!-- Tempat Lahir -->
                    <div class="w-1/2">
                      <label class="block text-gray-700">Tempat Lahir</label>
                      <n-input
                        class="w-full p-2 border rounded"
                        placeholder="n-input Tempat Lahir"
                        type="text"
                      />
                    </div>

                    <!-- Tanggal Lahir -->
                    <div class="w-1/2">
                      <n-date-picker v-model:value="timestamp" type="date" />
                    </div>
                  </div>
                  <div class="mb-4 flex space-x-4">
                    <div class="w-1/2">
                      <label class="block text-gray-700">Provinsi</label>
                      <n-select v-model:value="value" :options="options" />
                    </div>

                    <div class="w-1/2">
                      <label class="block text-gray-700">Kabupaten</label>
                      <n-select v-model:value="value" :options="options" />
                    </div>
                  </div>
                  <div class="mb-4 flex space-x-4">
                    <!-- Kelurahan -->
                    <div class="w-1/2">
                      <label class="block text-gray-700">Kelurahan</label>
                      <n-select v-model:value="value" :options="options" />
                    </div>

                    <!-- Kecamatan -->
                    <div class="w-1/2">
                      <label class="block text-gray-700">Kecamatan</label>
                      <n-select v-model:value="value" :options="options" />
                    </div>
                  </div>
                  <div class="mb-4">
                    <label class="block text-gray-700">Alamat</label>
                    <textarea
                      class="w-full p-2 border rounded h-24"
                      placeholder="Masukkan Alamat"
                    ></textarea>
                  </div>
                  <div class="flex justify-end">
                    <ui-button color="primary" variant="fill">Simpan</ui-button>
                  </div>

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
                    <n-checkbox v-model:checked="checked" class="mb-4"> Samakan dengan profile </n-checkbox>
                  </div>
                  <div class="mb-4">
                    <label class="block text-gray-700">Nama Ayah</label>
                    <n-input
                      class="w-full p-2 border rounded"
                      placeholder="n-input Nama"
                      type="text"
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block text-gray-700">NIK</label>
                    <n-input
                      class="w-full p-2 border rounded"
                      placeholder="n-input NIK"
                      type="text"
                    />
                  </div>

                  <!-- Flex container for Tempat Lahir and Tanggal Lahir -->
                  <div class="mb-4 flex space-x-4">
                    <!-- Tempat Lahir -->
                    <div class="w-1/2">
                      <label class="block text-gray-700">Tempat Lahir</label>
                      <n-input
                        class="w-full p-2 border rounded"
                        placeholder="n-input Tempat Lahir"
                        type="text"
                      />
                    </div>

                    <!-- Tanggal Lahir -->
                    <div class="w-1/2">
                      <label class="block text-gray-700">Tanggal Lahir</label>
                      <n-date-picker v-model:value="timestamp" type="date" />
                    </div>
                  </div>
                  <div class="mb-4 flex space-x-4">
                    <div class="w-1/2">
                      <label class="block text-gray-700">Provinsi</label>
                      <n-select v-model:value="value" :options="options" />
                    </div>

                    <div class="w-1/2">
                      <label class="block text-gray-700">Kabupaten</label>
                      <n-select v-model:value="value" :options="options" />
                    </div>
                  </div>
                  <div class="mb-4 flex space-x-4">
                    <!-- Kelurahan -->
                    <div class="w-1/2">
                      <label class="block text-gray-700">Kelurahan</label>
                      <n-select v-model:value="value" :options="options" />
                    </div>

                    <!-- Kecamatan -->
                    <div class="w-1/2">
                      <label class="block text-gray-700">Kecamatan</label>
                      <n-select v-model:value="value" :options="options" />
                    </div>
                  </div>
                  <div class="mb-4">
                    <label class="block text-gray-700">Alamat</label>
                    <textarea
                      class="w-full p-2 border rounded h-24"
                      placeholder="Masukkan Alamat"
                    ></textarea>
                  </div>
                  <div class="flex justify-end">
                    <ui-button color="primary" variant="fill">Simpan</ui-button>
                  </div>

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
              <img
                alt="User profile picture"
                class="w-24 h-24 rounded-full"
                :src="profileImage"
                width="100"
                height="100"
              />
              <h3 class="mt-4 text-xl font-semibold">{{ userName }}</h3>
              <p class="text-gray-500">{{ userEmail }}</p>

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
                <form>
                  <div>
                    <h3 class="font-bold text-lg mb-2">Form Data Akun Ibu</h3>
                    <n-checkbox v-model:checked="checked" class="mb-4"> Samakan dengan profile </n-checkbox>
                  </div>
                  <div class="mb-4">
                    <label class="block text-gray-700">Nama Ibu</label>
                    <n-input
                      class="w-full p-2 border rounded"
                      placeholder="n-input Nama"
                      type="text"
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block text-gray-700">NIK</label>
                    <n-input
                      class="w-full p-2 border rounded"
                      placeholder="n-input NIK"
                      type="text"
                    />
                  </div>

                  <!-- Flex container for Tempat Lahir and Tanggal Lahir -->
                  <div class="mb-4 flex space-x-4">
                    <!-- Tempat Lahir -->
                    <div class="w-1/2">
                      <label class="block text-gray-700">Tempat Lahir</label>
                      <n-input
                        class="w-full p-2 border rounded"
                        placeholder="n-input Tempat Lahir"
                        type="text"
                      />
                    </div>

                    <!-- Tanggal Lahir -->
                    <div class="w-1/2">
                      <label class="block text-gray-700">Tanggal Lahir</label>
                      <n-date-picker v-model:value="timestamp" type="date" />
                    </div>
                  </div>
                  <div class="mb-4 flex space-x-4">
                    <div class="w-1/2">
                      <label class="block text-gray-700">Provinsi</label>
                      <n-select v-model:value="value" :options="options" />
                    </div>

                    <div class="w-1/2">
                      <label class="block text-gray-700">Kabupaten</label>
                      <n-select v-model:value="value" :options="options" />
                    </div>
                  </div>
                  <div class="mb-4 flex space-x-4">
                    <!-- Kelurahan -->
                    <div class="w-1/2">
                      <label class="block text-gray-700">Kelurahan</label>
                      <n-select v-model:value="value" :options="options" />
                    </div>

                    <!-- Kecamatan -->
                    <div class="w-1/2">
                      <label class="block text-gray-700">Kecamatan</label>
                      <n-select v-model:value="value" :options="options" />
                    </div>
                  </div>
                  <div class="mb-4">
                    <label class="block text-gray-700">Alamat</label>
                    <textarea
                      class="w-full p-2 border rounded h-24"
                      placeholder="Masukkan Alamat"
                    ></textarea>
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
                    <n-checkbox v-model:checked="checked" class="mb-4"> Samakan dengan profile </n-checkbox>
                  </div>
                  <div class="mb-4">
                    <label class="block text-gray-700">Nama Ayah</label>
                    <n-input
                      class="w-full p-2 border rounded"
                      placeholder="n-input Nama"
                      type="text"
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block text-gray-700">NIK</label>
                    <n-input
                      class="w-full p-2 border rounded"
                      placeholder="n-input NIK"
                      type="text"
                    />
                  </div>

                  <!-- Flex container for Tempat Lahir and Tanggal Lahir -->
                  <div class="mb-4 flex space-x-4">
                    <!-- Tempat Lahir -->
                    <div class="w-1/2">
                      <label class="block text-gray-700">Tempat Lahir</label>
                      <n-input
                        class="w-full p-2 border rounded"
                        placeholder="n-input Tempat Lahir"
                        type="text"
                      />
                    </div>

                    <!-- Tanggal Lahir -->
                    <div class="w-1/2">
                      <label class="block text-gray-700">Tanggal Lahir</label>
                      <n-date-picker v-model:value="timestamp" type="date" />
                    </div>
                  </div>
                  <div class="mb-4 flex space-x-4">
                    <div class="w-1/2">
                      <label class="block text-gray-700">Provinsi</label>
                      <n-select v-model:value="value" :options="options" />
                    </div>

                    <div class="w-1/2">
                      <label class="block text-gray-700">Kabupaten</label>
                      <n-select v-model:value="value" :options="options" />
                    </div>
                  </div>
                  <div class="mb-4 flex space-x-4">
                    <!-- Kelurahan -->
                    <div class="w-1/2">
                      <label class="block text-gray-700">Kelurahan</label>
                      <n-select v-model:value="value" :options="options" />
                    </div>

                    <!-- Kecamatan -->
                    <div class="w-1/2">
                      <label class="block text-gray-700">Kecamatan</label>
                      <n-select v-model:value="value" :options="options" />
                    </div>
                  </div>
                  <div class="mb-4">
                    <label class="block text-gray-700">Alamat</label>
                    <textarea
                      class="w-full p-2 border rounded h-24"
                      placeholder="Masukkan Alamat"
                    ></textarea>
                  </div>
                  <ui-button color="primary" variant="fill">Simpan</ui-button>

                  <!-- Form fields lainnya -->
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showIbu = ref(false)
const showAyah = ref(false)
const profileImage = ref('https://randomuser.me/api/portraits/women/1.jpg') // Sesuaikan dengan data sebenarnya
const userName = ref('Nama Pengguna')
const userEmail = ref('email@example.com')
const userPhone = ref('081234567890')
const userAddress = ref('Jl. Contoh Alamat, Indonesia')

function toggleDropdown(profile: string) {
  if (profile === 'ibu') {
    showIbu.value = !showIbu.value
  } else if (profile === 'ayah') {
    showAyah.value = !showAyah.value
  }
}

const value = ref(null)
const checked = ref(false)
const disabled1 = ref(false)
const disabled2 = ref(false)

const songs = [
  {
    value: 'Data Akun',
    label: 'Data Akun'
  },
  {
    value: 'Anak',
    label: 'Anak'
  },
  {
    value: 'Keamanan',
    label: 'Keamanan'
  }
].map((s) => {
  s.value = s.value.toLowerCase()
  return s
})

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

<style scoped>
/* Tambahkan style kustom jika diperlukan */
</style>
