

<template>
  <div class="flex min-h-screen items-center justify-center bg-white">
    <!-- Left Side (Form) -->
    <div class="w-full md:w-1/2 flex justify-center items-center p-4">
      <div class="bg-white p-8 rounded-lg w-full shadow-lg max-w-md">
        <!-- Logo and Title (now above Password Baru) -->
        <div class="flex justify-center items-center space-x-4 mb-4">
          <!-- SVG Logo -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="39"
            height="36"
            viewBox="0 0 39 36"
            fill="none"
          >
            <path
              d="M19.4954 1.00529C18.1978 0.0395943 16.5666 -0.246903 15.0174 0.217748L4.53846 3.36137C2.37968 4.0094 0.928406 5.95839 0.928406 8.21314V30.6102C0.928406 32.2275 1.67242 33.7085 2.96992 34.6727C4.26766 35.6385 5.90066 35.9249 7.44802 35.4603L15.2706 33.1129C15.026 32.3061 14.9021 31.4642 14.9021 30.6102V20.4387C14.9021 18.3027 15.681 16.2628 17.0991 14.6979C18.14 13.5451 19.4902 12.6947 20.9991 12.2406L21.537 12.087V5.06941C21.537 3.45211 20.793 1.9711 19.4953 1.00529H19.4954Z"
              fill="#E74694"
            />
            <path
              d="M39.0021 17.2951V27.4666C39.0021 29.7197 37.5525 31.6705 35.3921 32.3167L24.9131 35.4605C24.4276 35.6071 23.9334 35.6788 23.4444 35.6788C22.3736 35.6788 21.3258 35.3366 20.435 34.6728C20.028 34.369 19.6753 34.0179 19.3853 33.625C19.0326 33.1534 18.7688 32.6277 18.6029 32.0636C18.6011 32.0636 18.5995 32.0636 18.5977 32.0652L18.6011 32.0618C18.4668 31.5989 18.3934 31.1117 18.3934 30.6104V20.4388C18.3934 19.3944 18.7042 18.4147 19.2527 17.6008C19.8011 16.7868 20.587 16.1372 21.5371 15.7512C21.6891 15.6901 21.8445 15.634 22.0035 15.5871L23.2855 15.2028L32.4826 12.4433C34.0317 11.9787 35.663 12.2652 36.9606 13.231C38.2583 14.1968 39.0022 15.6778 39.0022 17.2951H39.0021Z"
              fill="#E74694"
            />
          </svg>

          <!-- Title Text -->
          <h2 class="text-xl font-bold">Stunting</h2>
        </div>

        <!-- Form Heading -->
        <h2 class="text-center text-xl  leading-9 tracking-tight text-gray-900">
          Password Baru
        </h2>
        <p class="text-center font-medium leading-9 text-gray-900">
          Silahkan Masukan Password Baru Anda
        </p>

        <form class="space-y-6 mt-10" action="#" method="POST">
          <div>
            <!-- Password Baru -->
            <div class="flex items-center justify-between">
              <label for="Password" class="block text-sm font-medium leading-6 text-gray-900">
                Password Baru
              </label>
            </div>
            <div class="mt-2">
              <input
                id="Password"
                name="PasswordBaru"
                type="password"
                autocomplete="new-password"
                required
                class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
              />
            </div>

            <!-- Konfirmasi Password -->
            <div class="flex items-center justify-between mt-4">
              <label for="KonfirmasiPassword" class="block text-sm font-medium leading-6 text-gray-900">
                Konfirmasi Password
              </label>
            </div>
            <div class="mt-2">
              <input
                id="KonfirmasiPassword"
                name="KonfirmasiPassword"
                type="password"
                autocomplete="new-password"
                required
                class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <!-- Submit Button -->
          <div class="flex justify-center mt-6">
            <n-button type="primary">Reset Password</n-button>
          </div>
        </form>
      </div>
    </div>

    <!-- Right Side (Image) - Hidden on mobile -->
    <div class="hidden md:block md:w-1/2">
      <img src="/img1.jpeg" alt="Placeholder Image" class="h-screen w-full object-cover" />
    </div>
  </div>
</template>


<route lang="yaml">
  meta:
    layout: blank
  </route>