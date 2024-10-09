<route lang="yaml">
meta:
  layout: blank
</route>
<template>
  <div class="flex min-h-screen">
    <!-- Left Side (Form) -->
    <div class="w-1/2 flex justify-center items-center bg-white">
      <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Lupa Password
        </h2>
        <p class="text-center font-medium leading-9 text-gray-900">Silahkan Masukan Email Anda</p>

        <form class="space-y-6 mt-10" action="#" method="POST">
          <!-- Email -->
          <div>
            <div class="flex items-center justify-between">
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
                >Email</label
              >
            </div>
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <!-- Password -->
          <!-- Lupa password -->

          <!-- Submit Button -->
          <div class="flex justify-center">
            <n-button type="primary" >Reset Password</n-button>
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
