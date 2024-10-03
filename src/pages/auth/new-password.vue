<route lang="yaml">
meta:
  layout: blank
</route>
<template>
  <div class="flex min-h-screen">
    <!-- Left Side (Form) -->
    <div class="w-1/2 flex justify-center items-center bg-white">
      <div class="bg-white p-8 rounded-lg w-full shadow-lg max-w-md">
        <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Password Baru
        </h2>
        <p class="text-center font-medium leading-9 text-gray-900">
          Silahkan Masukan Password Baru Anda
        </p>

        <form class="space-y-6 mt-10" action="#" method="POST">
          <div>
            <div class="flex items-center justify-between">
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
                >Password Baru</label
              >
            </div>
            <div class="mt-2">
              <input
                id="Password"
                name="PasswordBaru"
                type="password"
                autocomplete="current-password"
                required
                class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div class="flex items-center justify-between">
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
                >Konfirmasi Password</label
              >
            </div>
            <div class="mt-2">
              <input
                id="KonfirmasiPassword"
                name="KonfirmasiPassword"
                type="password"
                autocomplete="current-password"
                required
                class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <!-- Password -->
          <!-- Lupa password -->

          <!-- Submit Button -->
          <div>
            <RouterLink
              to="/login"
              class="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
            >
              Reset Password
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
