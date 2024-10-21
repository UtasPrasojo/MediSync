<script setup lang="ts">
import { ref } from 'vue'
import { useMessage, type FormInst, type FormRules } from 'naive-ui'
import { useUserChildRegistration } from '@/services/child'
import { DateTime } from 'luxon'

// Mengambil fungsi mutate untuk pendaftaran anak
const { mutate, isPending } = useUserChildRegistration()

// Definisikan tipe data untuk form
type FormData = {
  name?: string
  identityNumber?: string
  placeOfBirth?: string
  dateOfBirth?: number
  childOrder?: number
  bloodType?: string
  height?: number
  weight?: number
  childPicture?: string
  fileBirthCertificate?: string
  fileChildIdentity?: string
  fileFamilyCard?: string
}

// Data form yang akan digunakan
const formData = ref<FormData>({
  name: undefined,
  identityNumber: undefined,
  placeOfBirth: undefined,
  dateOfBirth: undefined,
  childOrder: undefined,
  bloodType: undefined,
  height: undefined,
  weight: undefined,
  childPicture: undefined,
  fileBirthCertificate: undefined,
  fileChildIdentity: undefined,
  fileFamilyCard: undefined
})

// Referensi untuk form
const formRef = ref<FormInst>()
const message = useMessage()

// Fungsi untuk submit form
const handleSubmit = () => {
  formRef.value?.validate((errors) => {
    if (!errors) {
      mutate({
        ...formData.value,
        dateOfBirth: DateTime.fromMillis(formData.value.dateOfBirth||0).toISO(
          
        )
      })

      return
    }
    message.error('Validasi gagal')
  })
}

// Aturan validasi
const rules: FormRules = {
  name: [{ type: 'string', required: true, message: 'Nama lengkap wajib diisi' }],
  identityNumber: [{ type: 'number', required: true, message: 'NIK wajib diisi' }],
  placeOfBirth: [{ type: 'string', required: true, message: 'Tempat Lahir wajib diisi' }],
  dateOfBirth: [{ type: 'number', required: true, message: 'Tanggal Lahir wajib diisi' }],
  childOrder: [{ type: 'number', required: true, message: 'Urutan Anak wajib diisi' }],
  bloodType: [{ type: 'string', required: true, message: 'Golongan Darah wajib diisi' }],
  height: [{ type: 'number', required: true, message: 'Tinggi Badan wajib diisi' }],
  weigh: [{ type: 'number', required: true, message: 'Berat Badan wajib diisi' }],
  childPicture: [{ type: 'string', required: true, message: 'Foto Anak wajib diisi' }],
  fileBirthCertificate: [{ type: 'string', required: true, message: 'Akte Kelahiran wajib diisi' }],
  fileChildIdentity: [{ type: 'string', required: true, message: 'Identitas Anak wajib diisi' }],
  fileFamilyCard: [{ type: 'string', required: true, message: 'Kartu Keluarga wajib diisi' }]
}

// Opsi untuk dropdown Golongan Darah
const options = [
  { label: 'A', value: 'A' },
  { label: 'B', value: 'B' },
  { label: 'AB', value: 'AB' },
  { label: 'O', value: 'O' }
]
const placeOfBirthOptions = ref([
  { label: 'Jakarta', value: 'Jakarta' },
  { label: 'Bandung', value: 'Bandung' },
  { label: 'Surabaya', value: 'Surabaya' }
  // Tambahkan opsi lainnya sesuai kebutuhan
])
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
      <div class="bg-white p-8 rounded-lg w-full shadow-lg max-w-xl">
        <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Data Anak
        </h2>
        <p class="text-center font-medium leading-9 text-gray-900">
          Silahkan Masukan Data Diri Anak Anda
        </p>

        <n-form
          class="space-y-6 mt-4"
          @submit.prevent="handleSubmit"
          ref="formRef"
          :model="formData"
          :rules="rules"
        >
          <!-- Nama -->
          <div>
            <div class="mt-2">
              <n-form-item label="Nama Lengkap" path="name">
                <n-input v-model:value="formData.name" />
              </n-form-item>
            </div>
          </div>

          <div class="">
            <div class="flex items-center justify-between"></div>
            <div class="mt-2">
              <n-form-item label="NIK" path="NIK">
                <n-input v-model:value="formData.identityNumber" name="NIK" required />
              </n-form-item>
            </div>
          </div>

          <!-- Tempat Lahir dan Tanggal Lahir (Dibuat Sebaris) -->
          <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <!-- Tempat Lahir -->
            <div class="w-full md:w-1/2">
              <div class="flex items-center justify-between"></div>
              <div class="mt-2">
                <n-form-item label="Tempat Lahir" path="TTL">
                  <n-select
                    v-model:value="formData.placeOfBirth"
                    :options="placeOfBirthOptions"
                    size="large"
                  />
                </n-form-item>
              </div>
            </div>

            <!-- Tanggal Lahir -->
            <div class="w-full md:w-1/2">
              <div class="flex items-center justify-between"></div>
              <div class="mt-2">
                <n-form-item label="Tanggal Lahir" path="tanggal_lahir">
                  <n-date-picker
                    v-model:value="formData.dateOfBirth"
                    name="tanggal_lahir"
                    required
                    size="large"
                  />
                </n-form-item>
              </div>
            </div>

            <div class="w-full md:w-1/2">
              <div class="mt-2">
                <n-form-item label="Anak Ke" path="anak_ke">
                  <n-input-number
                    v-model:value="formData.childOrder"
                    required
                    size="large"
                /></n-form-item>
              </div>
            </div>
          </div>

          <!-- Golongan Darah, Tinggi Badan, dan Berat Badan (Dibuat Sebaris) -->
          <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <!-- Golongan Darah -->
            <div class="w-full md:w-1/3">
              <div class="mt-2">
                <n-form-item label="Golongan Darah" path="bloodType">
                  <n-select v-model:value="formData.bloodType" :options="options" size="large" />
                </n-form-item>
              </div>
            </div>

            <!-- Tinggi Badan -->
            <div class="w-full md:w-1/3">
              <div class="mt-2">
                <n-form-item label="Tinggi Badan (cm)" path="TinggiBadan">
                  <n-input-number
                    v-model:value="formData.height"
                    required
                    size="large"
                    
                  />
                </n-form-item>
              </div>
            </div>

            <!-- Berat Badan -->
            <div class="w-full md:w-1/3">
              <div class="mt-2">
                <n-form-item label="Berat Badan (kg)" path="BeratBadan">
                  <n-input-number
                    v-model:value="formData.weight"
                    required
                    size="large"
                  />
                </n-form-item>
              </div>
            </div>
          </div>

          <div>
            <n-form-item label="Unggah Foto Anak" path="fotoanak">
              <n-upload
              
                action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
                :headers="{
                  'naive-info': 'hello!'
                }"
                :data="{
                  'naive-data': 'cool! naive!'
                }"
              >
                <n-button v-model:value="formData.childPicture">Upload File</n-button>
              </n-upload>
            </n-form-item>
          </div>
          <div>
            <n-form-item label="Unggah Akta Anak" path="aktaanak">
              <n-upload
                action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
                :headers="{
                  'naive-info': 'hello!'
                }"
                :data="{
                  'naive-data': 'cool! naive!'
                }"
              >
                <n-button v-model:value="formData.fileBirthCertificate" >Upload File</n-button>
              </n-upload>
            </n-form-item>
          </div>
          <div>
            <n-form-item label="Unggah Kartu Keluarga Anak" path="kartukeluarga">
              <n-upload
                action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
                :headers="{
                  'naive-info': 'hello!'
                }"
                :data="{
                  'naive-data': 'cool! naive!'
                }"
              >
                <n-button v-model="formData.fileFamilyCard">Upload File</n-button>
              </n-upload>
            </n-form-item>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="KIA" class="block text-sm font-medium leading-6 text-gray-900"
                >Unggah KIA</label
              >
            </div>
            <n-form-item>
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
            </n-form-item>
          </div>

          <!-- Submit Button -->
          <div class="flex justify-end space-x-4">
            <n-button type="tertiary">Kembali</n-button>
            <n-button type="primary" :loading="isPending" attr-type="submit">Simpan</n-button>
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

<route lang="yaml">
meta:
  layout: blank
</route>
