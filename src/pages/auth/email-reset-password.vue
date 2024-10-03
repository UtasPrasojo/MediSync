<route lang="yaml">
  meta:
    layout: blank
  </route>
<template>
    <div class="flex min-h-screen">
      <!-- Left Side (Form) -->
      <div class="w-1/2 flex justify-center items-center bg-white">
        <div class="bg-white p-8 rounded-lg w-full max-w-md">
          <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-4"> <!-- Reduced bottom margin -->
            Cek Email Anda
          </h2>
          <!-- Add the image here above the heading -->
          <div class="text-center mb-4"> <!-- Reduced bottom margin -->
            <img
              src="/img2.png"
              alt="OTP Image"
              class="mx-auto w-110 h-50 object-cover"
            />
          </div>
          
          <p class="text-center font-medium leading-4 text-gray-900 mb-4">
            Kami telah mengirim Intruksi Untuk Mengganti Password
          </p>
          <p class="text-center font-medium leading-4 text-gray-900">
            Belum Menerima? 
            <a
              href="#"
              class="text-blue-500 hover:text-blue-600 font-semibold cursor-pointer"
              
            >
              Kirim ulang
            </a>
            <!-- <span v-if="countdown > 0" class="ml-2 text-gray-600">
              {{ formattedCountdown }}
            </span> -->
          </p>
        </div>
      </div>
  
      <!-- Right Side (Image) -->
      <div class="w-1/2 hidden md:block">
        <img
          src="/img1.jpeg"
          alt="Placeholder Image"
          class="h-screen w-full object-cover"
        />
      </div>
    </div>
  </template>
  
 