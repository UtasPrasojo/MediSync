<route lang="yaml">
    meta:
      layout: blank
    </route>

<template>
    <div class="flex items-center justify-center min-h-screen bg-white">
      <div class="bg-white rounded-lg shadow-lg p-6 w-96">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold">Input Kode Ibu</h2>
          <button class="text-gray-500 hover:text-gray-700" @click="closeModal">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="mb-4">
          <label for="kodeIbu" class="block text-sm font-medium text-gray-700 mb-1">Kode Ibu</label>
          <input
            type="text"
            id="kodeIbu"
            v-model="kodeIbu"
            class="w-full border border-gray-300 rounded-md p-2"
            placeholder="Input Kode Ibu"
          />
        </div>
        <div class="flex justify-end space-x-2">
          <n-button type="tertiary" >Kembali</n-button>
          <n-button type="primary">Submit</n-button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'InputKodeIbu',
    setup() {
      const kodeIbu = ref('');
  
      const submit = () => {
        // Handle the submit logic here
        alert(`Kode Ibu submitted: ${kodeIbu.value}`);
      };
  
      const goBack = () => {
        // Logic for going back
        alert('Going back...');
      };
  
      const closeModal = () => {
        // Logic for closing the modal
        alert('Closing modal...');
      };
  
      return {
        kodeIbu,
        submit,
        goBack,
        closeModal,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styles here if needed */
  </style>
  