<route lang="yaml">
    meta:
      layout: blank
    </route>

<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <div class="flex justify-between items-center border-b pb-3 mb-4">
          <h2 class="text-lg font-semibold">Edit Admin Stunting</h2>
          <button class="text-gray-500 hover:text-gray-700">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Nama</label>
            <input v-model="name" type="text" placeholder="Input Nama" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Email</label>
            <input v-model="email" type="email" placeholder="Input Email" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Tipe Role</label>
            <select v-model="role" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Pilih</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <!-- Add more roles as needed -->
            </select>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Password</label>
            <input v-model="password" type="password" placeholder="••••••••" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Konfirmasi Password</label>
            <input v-model="confirmPassword" type="password" placeholder="••••••••" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <button type="submit" class="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700">Simpan Perubahan</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        role: '',
        password: '',
        confirmPassword: ''
      };
    },
    methods: {
      handleSubmit() {
        // Handle form submission
        console.log('Form submitted:', {
          name: this.name,
          email: this.email,
          role: this.role,
          password: this.password,
          confirmPassword: this.confirmPassword
        });
      }
    }
  };
  </script>
  
  <style>
  /* Add any additional styling here */
  </style>
  