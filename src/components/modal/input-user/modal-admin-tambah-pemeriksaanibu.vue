<script setup lang="ts">
import { ref } from 'vue'
import { useMessage, type FormInst, type FormRules } from 'naive-ui'
import { useUserCheckupParents } from '@/services/checkup-parents'

// Deklarasi tipe untuk setiap variabel
const namaIbu = ref<string>('')
const posyandu = ref<string>('')
const waktuMulai = ref<string>('')
const waktuSelesai = ref<string>('')
const petugas = ref<string>('')
const tinggiBadan = ref<string | number>('')
const beratBadan = ref<string | number>('')
const lingkarLengan = ref<string | number>('')
const fundusUteri = ref<string | number>('')
const file = ref<File | null>(null) // File bisa null
const range= ref<[number, number]>([1183135260000, Date.now()])
const { mutate, isPending } = useUserCheckupParents()
const formRef = ref<FormInst>()
const message = useMessage()

type FormData = {
  height?: number
  weight?: number
  upperArmCircumference?: number
}
const formData = ref<FormData>({
  height: undefined,
  weight: undefined,
  upperArmCircumference: undefined
})
const rules: FormRules = {
  height: [{ type: 'number', required: true, message: 'Tinggi Badan wajib diisi' }],
  weigh: [{ type: 'number', required: true, message: 'Berat Badan wajib diisi' }],
  upperArmCircumference: [{ type: 'number', required: true, message: 'Lingkar Kepala wajib diisi' }]
}



// Fungsi dengan tipe void (tidak mengembalikan apa-apa)
const closeForm = (): void => {
  alert('Form closed')
}

const handleSubmit = () => {
  formRef.value?.validate((errors) => {
    if (!errors) {
      mutate({
        ...formData.value,
       
      })

      return
    }
    message.error('Validasi gagal')
  })
}
</script>

<template>
  <div class="flex items-center justify-center bg-gray-100">
    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
      <div class="flex justify-between items-center border-b pb-4 mb-4">
        <h2 class="text-lg font-semibold">Pemeriksaan Ibu Hamil</h2>
        <button class="text-gray-500 hover:text-gray-700" @click="closeForm">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <n-form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label class="block text-gray-700 mb-2">Nama Ibu</label>
          <n-input
            v-model="namaIbu"
            type="text"
            placeholder="Auto Input QR"
            class="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 mb-2">Posyandu</label>
          <n-input
            v-model="posyandu"
            type="text"
            placeholder="Input Petugas"
            class="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 mb-2">Waktu dan Tanggal</label>
          <n-date-picker v-model:value="range" type="datetimerange" clearable />
          <!-- <pre>{{ JSON.stringify(range) }}</pre> -->
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 mb-2">Petugas</label>
          <n-input
            v-model="petugas"
            type="text"
            placeholder="Input Petugas"
            class="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 mb-2">Usia Kehamilan</label>
          <n-input
            v-model="petugas"
            type="text"
            placeholder="Input Petugas"
            class="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label class="block text-gray-700 mb-2">Tinggi Badan</label>
            <n-input
              v-model="tinggiBadan"
              type="text"
              placeholder="Input Tinggi Badan"
              class="w-full p-2 border rounded bg-gray-100"
            />
          </div>
          <div>
            <label class="block text-gray-700 mb-2">Berat Badan</label>
            <n-input
              v-model="beratBadan"
              type="text"
              placeholder="Input Berat Badan"
              class="w-full p-2 border rounded bg-gray-100"
            />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label class="block text-gray-700 mb-2">Lingkar Lengan</label>
            <n-input
              v-model="lingkarLengan"
              type="text"
              placeholder="Input Lingkar Lengan"
              class="w-full p-2 border rounded bg-gray-100"
            />
          </div>
          <div>
            <label class="block text-gray-700 mb-2">Fundus Uteri</label>
            <n-input
              v-model="fundusUteri"
              type="text"
              placeholder="Input Fundus Uteri"
              class="w-full p-2 border rounded bg-gray-100"
            />
          </div>
        </div>
        <div class="mb-4">
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
        <div class="flex justify-end space-x-2">
          <n-button type="tertiary">Kembali</n-button>
          <n-button type="primary">Simpan</n-button>
        </div>
      </n-form>
    </div>
  </div>
</template>

<style scoped>
/* You can add any additional styles here if needed */
</style>
<route lang="yaml">
meta:
  layout: blank
</route>
