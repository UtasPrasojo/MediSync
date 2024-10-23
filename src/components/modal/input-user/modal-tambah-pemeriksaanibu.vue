<script setup lang="ts">
import { ref } from 'vue'
import { useMessage, type FormInst, type FormRules } from 'naive-ui'
import { useUserCheckupParents } from '@/services/checkup-parents'

// Hooks and references
const formRef = ref<FormInst>()
const message = useMessage()
const { mutate, isPending } = useUserCheckupParents()

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
// Handle form submission
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

// Handle close modal action
const closeModal = () => {
  console.log('Modal closed')
  // Implement modal close functionality
}

// Handle back action
const isModalOpen = ref<boolean>(true)
// Handle back button click
const goBack = () => {
  isModalOpen.value = false
}
</script>

<template>
  <div v-if="isModalOpen" class="flex items-center justify-center">
    <div class="bg-white rounded-lg shadow-lg p-6 mx-4 md:w-full max-w-md">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">Tambah Perkembangan Ibu</h2>
        <button class="text-gray-500 hover:text-gray-700" @click="closeModal">
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
        <div class="mb-4">
          <n-form-item label="Tinggi Badan" path="height" class="w-full">
          <n-input-number
            v-model:value="formData.height"
            placeholder="Input Tinggi Badan"
            class="w-full"
          />
          </n-form-item>
        </div>
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <n-form-item label="Berat Badan" path="weight" class="w-full">
            <n-input-number
              v-model:value="formData.weight"
              placeholder="Input Berat Badan"
              class="w-full"
            />
            </n-form-item>
          </div>
          <div>
            <n-form-item label="Lingkar Lengan" path="upperArmCircumference" class="w-full">
            <n-input-number
              v-model:value="formData.upperArmCircumference"
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
/* Add any additional styles here */
</style>
<route lang="yaml">
meta:
  layout: blank
</route>
