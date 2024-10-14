<!-- <route lang="yaml">
  meta:
    layout: blank
  </route> -->

  <script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      value: ref(null),
      options: [
        {
          label: 'Everybody\'s Got Something to Hide Except Me and My Monkey',
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
          label: 'You Won\'t See',
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
          label: 'I\'m looking through you',
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
    }
  }
})
</script>

<template>
  <div class="flex min-h-screen">
    <!-- Left Side (Form) -->
    <div class="w-full md:w-1/2 flex flex-col justify-center items-center bg-white">
       <div class="flex justify-center items-center space-x-4 mb-4 mt-6 md:hidden">
          <!-- SVG Logo -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="39"
            height="36"
            viewBox="0 0 39 36"
            fill="none"
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
          <h2 class="text-xl font-bold">Stunting</h2>
        </div>
      <div class="bg-white p-8 rounded-lg w-full shadow-lg   max-w-xl">
        <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Data Anak
        </h2>
        <p class="text-center font-medium leading-9 text-gray-900">
          Silahkan Masukan Data Diri Anak Anda
        </p>

        <n-form class="space-y-6 mt-10" action="#" method="POST">
          <!-- Nama -->
          <div>
            <div class="flex items-center justify-between">
              <label for="nama" class="block text-sm font-medium leading-6 text-gray-900">Nama Lengkap</label>
            </div>
            <div class="mt-2">
              <n-input
                id="nama"
                name="nama"
                type="text"
                autocomplete="nama"
                required
                class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <!-- NIK dan Akta Kelahiran (Dibuat Sebaris) -->
          <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <!-- NIK -->
            <div class="w-full md:w-1/2">
              <div class="flex items-center justify-between">
                <label for="NIK" class="block text-sm font-medium leading-6 text-gray-900">NIK</label>
              </div>
              <div class="mt-2">
                <n-input
                  id="NIK"
                  name="NIK"
                  type="text"
                  autocomplete="NIK"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <!-- Akta Kelahiran -->
            <div class="w-full md:w-1/2">
              <div class="flex items-center justify-between">
                <label for="akta_kelahiran" class="block text-sm font-medium leading-6 text-gray-900">Nomor Akta Kelahiran</label>
              </div>
              <div class="mt-2">
                <n-input
                  id="akta_kelahiran"
                  name="akta_kelahiran"
                  type="text"
                  autocomplete="akta_kelahiran"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <!-- Tempat Lahir dan Tanggal Lahir (Dibuat Sebaris) -->
          <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <!-- Tempat Lahir -->
            <div class="w-full md:w-1/2">
              <div class="flex items-center justify-between">
                <label for="TTL" class="block text-sm font-medium leading-6 text-gray-900">Tempat Lahir</label>
              </div>
              <div class="mt-2">
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
            <div class="w-full md:w-1/2">
              <div class="flex items-center justify-between">
                <label for="tanggal_lahir" class="block text-sm font-medium leading-6 text-gray-900">Tanggal Lahir</label>
              </div>
              <div class="mt-2">
                <n-input
                  id="tanggal_lahir"
                  name="tanggal_lahir"
                  type="text"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <!-- Umur Anak -->
            <div class="w-full md:w-1/2">
              <div class="flex items-center justify-between">
                <label for="umur_anak" class="block text-sm font-medium leading-6 text-gray-900">Umur Anak</label>
              </div>
              <div class="mt-2">
                <n-input
                  id="umur_anak"
                  name="umur_anak"
                  type="text"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <!-- Anak Ke -->
            <div class="w-full md:w-1/2">
              <div class="flex items-center justify-between">
                <label for="anak_ke" class="block text-sm font-medium leading-6 text-gray-900">Anak Ke</label>
              </div>
              <div class="mt-2">
                <n-input
                  id="anak_ke"
                  name="anak_ke"
                  type="text"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <!-- Golongan Darah, Tinggi Badan, dan Berat Badan (Dibuat Sebaris) -->
          <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <!-- Golongan Darah -->
            <div class="w-full md:w-1/3">
              <div class="flex items-center justify-between">
                <label for="GolonganDarah" class="block text-sm font-medium leading-6 text-gray-900">Golongan Darah</label>
              </div>
              <div class="mt-2">
                <n-select v-model:value="value" :options="options" size='large' />
              </div>
            </div>

            <!-- Tinggi Badan -->
            <div class="w-full md:w-1/3">
              <div class="flex items-center justify-between">
                <label for="TinggiBadan" class="block text-sm font-medium leading-6 text-gray-900">Tinggi Badan (cm)</label>
              </div>
              <div class="mt-2">
                <n-input
                  id="TinggiBadan"
                  name="TinggiBadan"
                  type="text"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <!-- Berat Badan -->
            <div class="w-full md:w-1/3">
              <div class="flex items-center justify-between">
                <label for="BeratBadan" class="block text-sm font-medium leading-6 text-gray-900">Berat Badan (kg)</label>
              </div>
              <div class="mt-2">
                <n-input
                  id="BeratBadan"
                  name="BeratBadan"
                  type="text"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="fotoanak" class="block text-sm font-medium leading-6 text-gray-900">Unggah foto anak</label>
            </div>
            <n-upload
              action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
              :headers="{
                'naive-info': 'hello!'
              }"
              :data="{
                'naive-data': 'cool! naive!'
              }"
            >
              <n-button>Upload File</n-button>
            </n-upload>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="aktaanak" class="block text-sm font-medium leading-6 text-gray-900">Unggah akta anak</label>
            </div>
            <n-upload
              action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
              :headers="{
                'naive-info': 'hello!'
              }"
              :data="{
                'naive-data': 'cool! naive!'
              }"
            >
              <n-button>Upload File</n-button>
            </n-upload>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="kartukeluarga" class="block text-sm font-medium leading-6 text-gray-900">Unggah kartu keluarga anak</label>
            </div>
            <n-upload
              action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
              :headers="{
                'naive-info': 'hello!'
              }"
              :data="{
                'naive-data': 'cool! naive!'
              }"
            >
              <n-button>Upload File</n-button>
            </n-upload>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="KIA" class="block text-sm font-medium leading-6 text-gray-900">Unggah KIA</label>
            </div>
            <n-upload
              action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
              :headers="{
                'naive-info': 'hello!'
              }"
              :data="{
                'naive-data': 'cool! naive!'
              }"
            >
              <n-button>Upload File</n-button>
            </n-upload>
          </div>

          <!-- Submit Button -->
          <div class="flex justify-end space-x-4">
            <n-button type="tertiary">Kembali</n-button>
            <n-button type="primary">Simpan</n-button>
          </div>
        </n-form>
      </div>
    </div>

    <!-- Right Side (Image) -->
    <div class="w-0 md:w-1/2 hidden md:block fixed top-0 right-0 h-full">
      <img src="/img1.jpeg" alt="Placeholder Image" class="h-full w-full object-cover" />
    </div>
  </div>
</template>

