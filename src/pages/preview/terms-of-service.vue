<route lang="yaml">
meta:
  layout: blank
</route>

<template>
  <div id="app" class="flex items-center justify-center min-h-screen">
    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">Terms of Service</h2>
        <button class="text-gray-500 hover:text-gray-700" @click="closeModal">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label class="block text-gray-700 mb-2">Tinggi Badan</label>
          <input
            v-model="height"
            type="text"
            placeholder="Input Tinggi Badan"
            class="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div class="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label class="block text-gray-700 mb-2">Berat Badan</label>
            <input
              v-model="weight"
              type="text"
              placeholder="Input Berat Badan"
              class="w-full p-2 border rounded bg-gray-100"
            />
          </div>
          <div>
            <label class="block text-gray-700 mb-2">Lingkar Kepala</label>
            <input
              v-model="headCircumference"
              type="text"
              placeholder="Input Lingkar Kepala"
              class="w-full p-2 border rounded bg-gray-100"
            />
          </div>
        </div>

        <div class="flex justify-end space-x-4">
          <button type="button" class="px-4 py-2 border rounded text-gray-700" @click="goBack">
            Kembali
          </button>
          <button type="submit" class="px-4 py-2 bg-pink-600 text-white rounded">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    // Reactive data properties
    const height = ref('')
    const weight = ref('')
    const headCircumference = ref('')
    const ageYears = ref('')
    const ageMonths = ref('')
    const ageDays = ref('')

    // Handle form submission
    const handleSubmit = () => {
      const data = {
        height: height.value,
        weight: weight.value,
        headCircumference: headCircumference.value,
        age: {
          years: ageYears.value,
          months: ageMonths.value,
          days: ageDays.value
        }
      }
      console.log('Form submitted:', data)
      // Add your form submission logic here
    }

    // Handle close modal action
    const closeModal = () => {
      console.log('Modal closed')
      // Implement modal close functionality
    }

    // Handle back action
    const goBack = () => {
      console.log('Go back action')
      // Implement go back functionality
    }

    return {
      height,
      weight,
      headCircumference,
      ageYears,
      ageMonths,
      ageDays,
      handleSubmit,
      closeModal,
      goBack
    }
  }
}
</script>

<style scoped>
/* Add any additional styles here */
</style>
