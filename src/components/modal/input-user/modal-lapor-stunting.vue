<script setup lang="ts">
import { useUserReportStunting } from '@/services/report-stunting'
import { ref } from 'vue'
import { useMessage, type FormInst, type FormRules } from 'naive-ui'

// Definisikan tipe untuk form data

const { mutate, isPending } = useUserReportStunting()
// Deklarasi ref dengan tipe FormData
type FormData = {
  reporter?: string
  phoneNumber?: string
  childName?: string
  childAddress?: string
  fileChildPicture?: string
  fileHousePicture?: string
  observation?: string
}
const formData = ref<FormData>({
  reporter: undefined,
  phoneNumber: undefined,
  childName: undefined,
  childAddress: undefined,
  fileChildPicture: undefined,
  fileHousePicture: undefined,
  observation: undefined
})

const formRef = ref<FormInst>()
const message = useMessage()

const rules: FormRules = {
  reporter: [{ type: 'string', required: true, message: 'Pelapor wajib diisi' }],
  phoneNumber: [{ type: 'string', required: true, message: 'Nomor wajib diisi' }],
  childName: [{ type: 'string', required: true, message: 'Nama Anak wajib diisi' }],
  childAddress: [{ type: 'string', required: true, message: 'Alamat Anak wajib diisi' }],
  fileChiledPicture: [{ type: 'string', required: true, message: 'Foto Anak wajib diisi' }],
  fileHousePicture: [{ type: 'string', message: 'Foto Rumah wajib diisi' }],
  observation: [{ type: 'string', message: 'Observasi wajib diisi' }]
}

// Fungsi untuk mengirimkan formulir
const handleSubmit = () => {
  formRef.value?.validate((errors) => {
    if (!errors) {
      mutate({
        ...formData.value
      })

      return
    }
    message.error('Validasi gagal')
  })
}
// Fungsi untuk kembali
const isModalOpen = ref<boolean>(true)
// Handle back button click
const goBack = () => {
  isModalOpen.value = false
}

// Fungsi untuk menutup formulir
const closeForm = () => {
  console.log('Closing form...')
  // Implementasikan logika penutupan formulir di sini
}

// Tidak perlu mengembalikan nilai dalam script setup, karena semua ini otomatis tersedia di template
</script>

<template>
  <div v-if="isModalOpen" class="flex items-center justify-center  mx-auto my-8 md:h-[80%]">
    <div
      class="bg-white p-6 rounded-lg shadow-lg mx-4 md:w-full md:max-w-2xl h-auto md:h-[80%] overflow-y-auto max-h-screen"
    >
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">Laporan Stunting</h2>
        <button class="text-gray-500 hover:text-gray-700" @click="closeForm">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <n-form
        class="space-y-6 mt-4"
        @submit.prevent="handleSubmit"
        ref="formRef"
        :model="formData"
        :rules="rules"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <n-form-item label="Nama Pelapor" path="reporter">
              <n-input
                v-model:value="formData.reporter"
                type="text"
                placeholder="Masukan Nama Pelapor"
              />
            </n-form-item>
          </div>
          <div>
            <n-form-item label="Nomor Telepon" path="phoneNumber">
              <n-input
                v-model:value="formData.phoneNumber"
                type="text"
                placeholder="Masukan Nomor Telepon"
              />
            </n-form-item>
          </div>
        </div>
        <div class="mb-4">
          <n-form-item label="Nama Anak" path="childName">
            <n-input
              v-model:value="formData.childName"
              type="text"
              placeholder="Masukan Nama Anak"
            />
          </n-form-item>
        </div>
        <div class="mb-4">
          <n-form-item label="Alamat Anak" path="childAddress">
            <n-input
              v-model:value="formData.childAddress"
              type="text"
              placeholder="Masukan Alamat Anak"
            />
          </n-form-item>
        </div>
        <div class="mb-4">
          <n-form-item label="Observasi" path="observation">
            <n-input
              v-model:value="formData.observation"
              type="textarea"
              placeholder="Masukan Hasil Observasi Anak"
            />
          </n-form-item>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div
            class="border-2 border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center justify-center"
          >
            <n-form-item label="Foto Anak" path="fileChildPicture">
              <n-upload
                multiple
                directory-dnd
                action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
                :max="5"
              >
                <n-upload-dragger>
                  <div style="margin-bottom: 12px">
                    <n-icon size="48" :depth="3">
                      <ArchiveIcon />
                    </n-icon>
                  </div>
                  <n-text style="font-size: 16px">
                    Click or drag a file to this area to upload
                  </n-text>
                  <n-p depth="3" style="margin: 8px 0 0 0">
                    Strictly prohibit from uploading sensitive information. For example, your bank
                    card PIN or your credit card expiry date.
                  </n-p>
                </n-upload-dragger>
              </n-upload>
            </n-form-item>
          </div>
          <div
            class="border-2 border-dashed border-gray-300 rounded-md p-4 flex flex-col items-center justify-center"
          >
            <n-form-item label="Foto Rumah" path="fileHousePicture">
              <n-upload
                multiple
                directory-dnd
                action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
                :max="5"
                v-model="formData.fileChildPicture"
              >
                <n-upload-dragger>
                  <div style="margin-bottom: 12px">
                    <n-icon size="48" :depth="3">
                      <ArchiveIcon />
                    </n-icon>
                  </div>
                  <n-text style="font-size: 16px">
                    Click or drag a file to this area to upload
                  </n-text>
                  <n-p depth="3" style="margin: 8px 0 0 0">
                    Strictly prohibit from uploading sensitive information. For example, your bank
                    card PIN or your credit card expiry date.
                  </n-p>
                </n-upload-dragger>
              </n-upload>
            </n-form-item>
          </div>
        </div>
        <div class="flex justify-end space-x-4">
          <n-button
            type="tertiary"
            @click="goBack"
            class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
          >
            Kembali
          </n-button>
          <n-button
            type="primary"
            :loading="isPending"
            attr-type="submit"
            class="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
          >
            Submit
          </n-button>
        </div>
      </n-form>
    </div>
  </div>
</template>

<style scoped>
/* Add any custom styling here if needed */
</style>
