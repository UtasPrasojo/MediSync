

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(null)
const fileInput = ref<HTMLInputElement | null>(null)
  const timestamp = ref<number>(1183135260000)

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
  },
  {
    label: "You Won't See",
    value: 'song3',
    disabled: true
  },
  {
    label: 'Nowhere Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourself',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Michelle',
    value: 'song7',
    disabled: true
  },
  {
    label: 'What goes on',
    value: 'song8'
  },
  {
    label: 'Girl',
    value: 'song9'
  },
  {
    label: "I'm looking through you",
    value: 'song10'
  },
  {
    label: 'In My Life',
    value: 'song11'
  },
  {
    label: 'Wait',
    value: 'song12'
  }
]

// const triggerFileUpload = () => {
//   fileInput.value?.click() // Menggunakan optional chaining
// }

// const handleFileChange = (event: Event) => {
//   const target = event.target as HTMLInputElement
//   const file = target.files?.[0]
//   // Proses file di sini
//   console.log(file)
// }
</script>

<template>
  <div class="flex flex-col md:flex-row min-h-screen">
    <!-- Left Side (Form) -->
    <div class="flex-1 flex flex-col justify-center items-center bg-white p-4 md:p-8">
      <div
        class="bg-white p-2 w-full max-w-md flex justify-center items-center space-x-4 mb-6 mt-6"
      >
        <!-- SVG Logo (hidden on desktop) -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="39"
          height="36"
          viewBox="0 0 39 36"
          fill="none"
          class="md:hidden"
        >
          <path
            d="M19.4954 1.00529C18.1978 0.0395943 16.5666 -0.246903 15.0174 0.217748L4.53846 3.36137C2.37968 4.0094 0.928406 5.95839 0.928406 8.21314V30.6102C0.928406 32.2275 1.67242 33.7085 2.96992 34.6727C4.26766 35.6385 5.90066 35.9249 7.44802 35.4603L15.2706 33.1129C15.026 32.3061 14.9021 31.4642 14.9021 30.6102V20.4387C14.9021 18.3027 15.681 16.2628 17.0991 14.6979C18.14 13.5451 19.4902 12.6947 20.9991 12.2406L21.537 12.087V5.06941C21.537 3.45211 20.793 1.9711 19.4953 1.00529H19.4954Z"
            fill="#E74694"
          />
          <path
            d="M39.0021 17.2951V27.4666C39.0021 29.7197 37.5525 31.6705 35.3921 32.3167L24.9131 35.4605C24.4276 35.6071 23.9334 35.6788 23.4444 35.6788C22.3736 35.6788 21.3258 35.3366 20.435 34.6728C20.028 34.369 19.6753 34.0179 19.3853 33.625C19.0326 33.1534 18.7688 32.6277 18.6029 32.0636C18.6011 32.0636 18.5995 32.0636 18.5977 32.0652L18.6011 32.0618C18.4668 31.5989 18.3934 31.1117 18.3934 30.6104V20.4388C18.3934 19.3944 18.7042 18.4147 19.2527 17.6008C19.8011 16.7868 20.587 16.1372 21.5371 15.7512C21.6891 15.6901 21.8445 15.634 22.0035 15.5871L23.2855 15.2028L32.4826 12.4433C34.0317 11.9787 35.663 12.2652 36.9606 13.231C38.2583 14.1968 39.0022 15.6778 39.0022 17.2951H39.0021Z"
            fill="#E74694"
          />
        </svg>

        <!-- Title Text -->
        <h2 class="text-xl font-bold md:hidden">Stunting</h2>
      </div>
      <div class="bg-white p-6 rounded-lg w-full shadow-lg max-w-xl">
        <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Registrasi Akun
        </h2>
        <p class="text-center font-medium leading-9 text-gray-900 mb-4">
          Silahkan Masukan Data Diri Anda
        </p>

        <n-form class="space-y-6 mt-4" action="#" method="POST">
          <!-- NIK -->
          <div>
            <label for="NIK" class="block text-sm font-medium leading-6 text-gray-900">NIK</label>
            <div class="mt-1">
              <n-input
                id="NIK"
                name="NIK"
                type="text"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <!-- Tempat Lahir dan Tanggal Lahir (Dibuat Sebaris) -->
          <div class="flex space-x-4">
            <!-- Tempat Lahir -->
            <div class="flex-1">
              <label for="TTL" class="block text-sm font-medium leading-6 text-gray-900"
                >Tempat Lahir</label
              >
              <div class="mt-1">
                <n-input
                  id="TTL"
                  name="TTL"
                  type="text"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <!-- Tanggal Lahir -->
            <div class="flex-1">
              <label for="tanggal_lahir" class="block text-sm font-medium leading-6 text-gray-900"
                >Tanggal Lahir</label
              >
              <div class="mt-1">
                <n-date-picker v-model:value="timestamp" type="date" size="large" />
              </div>
            </div>
          </div>

          <!-- Kelurahan, Kecamatan, dan Kabupaten (Dibuat Sebaris) -->
          <div class="flex space-x-4">
            <!-- Kelurahan -->
            <div class="flex-1">
              <label for="provinsi" class="block text-sm font-medium leading-6 text-gray-900"
                >Provinsi</label
              >
              <div class="mt-1">
                <n-select v-model:value="value" :options="options">
                  
                </n-select>
              </div>
            </div>

            <!-- Kecamatan -->
            <div class="flex-1">
              <label for="kabupaten" class="block text-sm font-medium leading-6 text-gray-900"
                >Kabupaten</label
              >
              <div class="mt-1">
                <n-select v-model:value="value" :options="options">
                  
                </n-select>
              </div>
            </div>

            
          </div>
          <div class="flex space-x-4">
            <!-- Kelurahan -->
            <div class="flex-1">
              <label for="kelurahan" class="block text-sm font-medium leading-6 text-gray-900"
                >Kelurahan</label
              >
              <div class="mt-1">
                <n-select v-model:value="value" :options="options">
                  
                </n-select>
              </div>
            </div>

            <!-- Kecamatan -->
            <div class="flex-1">
              <label for="kecamatan" class="block text-sm font-medium leading-6 text-gray-900"
                >Kecamatan</label
              >
              <div class="mt-1">
                <n-select v-model:value="value" :options="options">
                  
                </n-select>
              </div>
            </div>

            
          </div>

          <!-- Alamat -->
          <div>
            <label for="Alamat" class="block text-sm font-medium leading-6 text-gray-900"
              >Alamat</label
            >
            <div class="mt-1">
              <n-input
                id="Alamat"
                name="Alamat"
                type="text"
                placeholder="Write text here.."
                required
                class="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <!-- Unggah Foto -->
          <n-upload
            multiple
            directory-dnd
            action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
            :max="5"
          >
            <n-upload-dragger>
              <div style="margin-bottom: 12px">
                <n-icon size="48" :depth="3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 9l5-5l5 5m-5-5v12"
                    />
                  </svg>
                  <ArchiveIcon />
                </n-icon>
              </div>
              <n-text style="font-size: 16px"> Klik untuk unggah foto </n-text>
              <n-p depth="3" style="margin: 8px 0 0 0">
                SVG,PNG,JPG or GIF
              </n-p>
            </n-upload-dragger>
          </n-upload>

          <!-- Tombol Registrasi -->
          <div>
            <button
              type="submit"
              class="flex justify-center w-full rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
            >
              Daftar
            </button>
          </div>
        </n-form>
      </div>
    </div>

    <!-- Right Side (Image) -->
    <div
      class="hidden md:flex md:flex-1 md:items-center md:justify-center bg-gradient-to-r from-pink-500 to-red-500"
    >
      <img src="/img1.jpeg" alt="Deskripsi Gambar" class="h-full object-cover" />
    </div>
  </div>
</template>



<style scoped>
/* Tambahan gaya dapat ditambahkan di sini jika diperlukan */
</style>

<route lang="yaml">
  meta:
    layout: blank
  </route>
