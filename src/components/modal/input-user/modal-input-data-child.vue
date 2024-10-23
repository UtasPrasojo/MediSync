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
        dateOfBirth: DateTime.fromMillis(formData.value.dateOfBirth || 0).toISO()
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
  <div class="flex items-center justify-center mt-6 mb-6 bg-gray-100 h-[100%]">
    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
      <n-form
        class="space-y-2 mt-4"
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
                <n-input-number v-model:value="formData.childOrder" required size="large"
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
                <n-input-number v-model:value="formData.height" required size="large" />
              </n-form-item>
            </div>
          </div>

          <!-- Berat Badan -->
          <div class="w-full md:w-1/3">
            <div class="mt-2">
              <n-form-item label="Berat Badan (kg)" path="BeratBadan">
                <n-input-number v-model:value="formData.weight" required size="large" />
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
              <n-button v-model:value="formData.fileBirthCertificate">Upload File</n-button>
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
</template>
