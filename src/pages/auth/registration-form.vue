<route lang="yaml">
meta:
  layout: blank
</route>

<script setup lang="ts">
import { ref } from 'vue'
import { useHttpMutation } from '@/composables/http/http'
import { useMessage } from 'naive-ui'

const message = useMessage()

let formData = ref({
  email: '',
  fullName: '',
  phone: '',
  password: '',
  confirmPassword: ''
})

const onSubmit = () => {
  mutate(formData.value)
  console.log(formData)
}
const { mutate, isPending } = useHttpMutation('/v1/auth/user/sign-up', {
  method: 'POST',
  queryOptions: {
    onSuccess: () => {
      message.success('Registrasi berhasil')
    },
    onError: () => {
      message.error('Password atau email anda salah')
    }
  }
})
</script>

<template>
  <div class="flex min-h-screen">
    <!-- Left Side (Form) -->
    <div class="w-1/2 flex justify-center items-center bg-white">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-black">Daftar</h2>
        <p class="text-center font-medium leading-9 text-gray-500">
          Silahkan Masukan Data Diri Anda
        </p>

        <form class="space-y-6 mt-10" @submit.prevent="onSubmit" :model="formData">
          <!-- Flex container for Nama Lengkap and Password -->
          <div class="flex gap-4">
            <!-- Nama Lengkap -->
            <div class="w-1/2">
              <div class="flex items-center justify-between">
                <label for="namalengkap" class="block text-sm font-medium leading-6 text-gray-900"
                  >Nama Lengkap</label
                >
              </div>
              <div class="mt-2">
                <input
                  type="text"
                  required
                  v-model="formData.fullName"
                  class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <!-- Password -->
            <div class="w-1/2">
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
                  >Password</label
                >
              </div>
              <div class="mt-2">
                <input
                  type="password"
                  v-model="formData.password"
                  autocomplete="current-password"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <!-- Flex container for Email and Confirm Password -->
          <div class="flex gap-4">
            <!-- Email -->
            <div class="w-1/2">
              <div class="flex items-center justify-between">
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
                  >Email</label
                >
              </div>
              <div class="mt-2">
                <input
                  type="email"
                  v-model="formData.email"
                  autocomplete="email"
                  required
                  class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <!-- Confirm Password -->
            <div class="w-1/2">
              <div class="flex items-center justify-between">
                <label
                  for="confirm-password"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Confirm Password</label
                >
              </div>
              <div class="mt-2">
                <input
                  type="password"
                  v-model="formData.confirmPassword"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <!-- Nomor WA -->
          <div>
            <div class="flex items-center justify-between">
              <label for="wa" class="block text-sm font-medium leading-6 text-gray-900"
                >Nomor WA</label
              >
            </div>
            <div class="mt-2">
              <input
                type="tel"
                v-model="formData.phone"
                placeholder=""
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <!-- Submit Button -->
          <div>
            <!-- <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600"
              >
                Sign in
              </button> -->
            <div class="flex justify-center">
              <n-button type="primary" attr-type="submit"> Sign In </n-button>
            </div>
          </div>

          <!-- Login -->
          <div class="mt-2 flex justify-center items-center">
            <span class="font-semibold text-gray-900">Sudah punya akun? </span>
            <RouterLink
              to="/auth/loginform"
              class="font-semibold text-pink-600 hover:text-pink-500"
            >
              Masuk
            </RouterLink>
          </div>
        </form>
      </div>
    </div>

    <!-- Right Side (Image) -->
    <div class="w-1/2 hidden md:block">
      <img src="/img1.jpeg" alt="Placeholder Image" class="h-screen w-full object-cover" />
    </div>
  </div>
</template>
