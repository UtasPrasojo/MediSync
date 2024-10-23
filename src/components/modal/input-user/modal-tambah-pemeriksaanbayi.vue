<script setup lang="ts">
import { ref } from 'vue'
import { useMessage, type FormInst, type FormRules } from 'naive-ui'
import { useUserCheckupChild } from '@/services/checkup-children'


const { mutate, isPending } = useUserCheckupChild()
// Define the form object
type FormData = {
  height?: number
  weight?: number
  headCircumference?: number
}
const formData = ref<FormData>({
  height: undefined,
  weight: undefined,
  headCircumference: undefined
})

const formRef = ref<FormInst>()
const message = useMessage()

const rules: FormRules = {
  height: [{ type: 'number', required: true, message: 'Tinggi Badan wajib diisi' }],
  weigh: [{ type: 'number', required: true, message: 'Berat Badan wajib diisi' }],
  headCircumference: [{ type: 'number', required: true, message: 'Lingkar Kepala wajib diisi' }]
}

// Handle form submission
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
const isModalOpen = ref<boolean>(true)
// Handle back button click
const goBack = () => {
  isModalOpen.value = false
}

// Handle form close
const closeForm = () => {
  alert('Form closed')
}
</script>

<template>
  <div v-if="isModalOpen" class="flex items-center justify-center ">
    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-4 md:mx-0">
      <div class="flex justify-between items-center border-b pb-4 mb-4">
        <h2 class="text-lg font-semibold">Tambah Pemeriksaan Anak</h2>
        <button @click="closeForm" class="text-gray-500 hover:text-gray-700">
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
        <div class="mb-4 w-full">
          <n-form-item label="Tinggi Badan" path="height" class="w-full">
            <n-input-number
              v-model:value="formData.height"
              placeholder="Input Tinggi Badan"
              class="w-full" 
            />
          </n-form-item>
        </div>
        <div class="flex space-x-4 mb-4">
          <div class="w-1/2">
            <n-form-item label="Berat Badan" path="weight">
              <n-input-number
                v-model:value="formData.weight"
                placeholder="Input Berat Badan"
                class="w-full"
              />
            </n-form-item>
          </div>
          <div class="w-1/2">
            <n-form-item label="Lingkar Kepala" path="headCircumference">
              <n-input-number
                v-model:value="formData.headCircumference"
                placeholder="Input Lingkar Kepala"
                class="w-full" 
              />
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
/* Add any custom styles if necessary */
</style>
<route lang="yaml">
meta:
  layout: blank
</route>
