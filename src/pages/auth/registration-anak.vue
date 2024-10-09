<route lang="yaml">
  meta:
    layout: blank
  </route>
<template>
    <div class="flex min-h-screen">
      <!-- Left Side (Form) -->
      <div class="w-1/2 flex justify-center  items-center bg-white">
        <div class="bg-white p-8 rounded-lg w-full shadow-lg max-w-xl">
          <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Data Anak</h2>
          <p class="text-center font-medium leading-9 text-gray-900">Silahkan Masukan Data Diri Anak Anda</p>
  
          <form class="space-y-6 mt-10" action="#" method="POST">
            <!-- Nama -->
            <div>
              <div class="flex items-center justify-between">
                <label for="nama" class="block text-sm font-medium leading-6 text-gray-900">Nama Lengkap</label>
              </div>
              <div class="mt-2">
                <input id="nama" name="nama" type="nama" autocomplete="nama" required
                  class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
  
            <!-- NIK dan Akta Kelahiran (Dibuat Sebaris) -->
            <div class="flex space-x-4">
              <!-- NIK -->
              <div class="w-1/2">
                <div class="flex items-center justify-between">
                  <label for="NIK" class="block text-sm font-medium leading-6 text-gray-900">NIK</label>
                </div>
                <div class="mt-2">
                  <input id="NIK" name="NIK" type="NIK" autocomplete="NIK" required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
  
              <!-- Akta Kelahiran -->
              <div class="w-1/2">
                <div class="flex items-center justify-between">
                  <label for="akta_kelahiran" class="block text-sm font-medium leading-6 text-gray-900">Nomor Akta Kelahiran</label>
                </div>
                <div class="mt-2">
                  <input id="akta_kelahiran" name="akta_kelahiran" type="text" autocomplete="akta_kelahiran" required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
            </div>
  
            <!-- Tempat Lahir dan Tanggal Lahir (Dibuat Sebaris) -->
            <div class="flex space-x-4">
              <!-- Tempat Lahir -->
              <div class="w-1/2">
                <div class="flex items-center justify-between">
                  <label for="TTL" class="block text-sm font-medium leading-6 text-gray-900">Tempat Lahir</label>
                </div>
                <div class="mt-2">
                  <input id="TTL" name="TTL" type="text" required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
  
              <!-- Tanggal Lahir -->
              <div class="w-1/2">
                <div class="flex items-center justify-between">
                  <label for="tanggal_lahir" class="block text-sm font-medium leading-6 text-gray-900">Tanggal Lahir</label>
                </div>
                <div class="mt-2">
                  <input id="tanggal_lahir" name="tanggal_lahir" type="date" required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" />
                </div>
              </div>
            </div>

            <div class="flex space-x-4">
  <!-- Umur Anak -->
  <div class="w-1/2">
    <div class="flex items-center justify-between">
      <label for="umur_anak" class="block text-sm font-medium leading-6 text-gray-900">Umur Anak</label>
    </div>
    <div class="mt-2">
      <input id="umur_anak" name="umur_anak" type="number" required
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" />
    </div>
  </div>

  <!-- Anak Ke -->
  <div class="w-1/2">
    <div class="flex items-center justify-between">
      <label for="anak_ke" class="block text-sm font-medium leading-6 text-gray-900">Anak Ke</label>
    </div>
    <div class="mt-2">
      <input id="anak_ke" name="anak_ke" type="number" required
        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" />
    </div>
  </div>
</div>

  
            <!-- GolonganDarah, Kecamatan, dan Kabupaten (Dibuat Sebaris) -->
            <div class="flex space-x-4">
              <!-- Kelurahan -->
              <div class="w-1/3">
  <div class="flex items-center justify-between">
    <label for="GolonganDarah" class="block text-sm font-medium leading-6 text-gray-900">Golongan Darah</label>
  </div>
  <div class="mt-2">
    <select id="GolonganDarah" name="GolonganDarah" required
      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6">
      <option value="" disabled selected></option>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="AB">AB</option>
      <option value="O">O</option>
      <option value="Tidak Tahu">Tidak Tahu</option>
    </select>
  </div>
</div>

  
              <!-- Kecamatan -->
              <!-- Tinggi Badan -->
<div class="w-1/3">
  <div class="flex items-center justify-between">
    <label for="TinggiBadan" class="block text-sm font-medium leading-6 text-gray-900">Tinggi Badan (cm)</label>
  </div>
  <div class="mt-2">
    <input id="TinggiBadan" name="TinggiBadan" type="number" required
      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" />
  </div>
</div>

<!-- Berat Badan -->
<div class="w-1/3">
  <div class="flex items-center justify-between">
    <label for="BeratBadan" class="block text-sm font-medium leading-6 text-gray-900">Berat Badan (kg)</label>
  </div>
  <div class="mt-2">
    <input id="BeratBadan" name="BeratBadan" type="number" required
      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" />
  </div>
</div>

            </div>
  
            <!-- Alamat -->
            <div>
              <div class="flex items-center justify-between">
                <label for="Alamat" class="block text-sm font-medium leading-6 text-gray-900">Alamat</label>
              </div>
              <div class="mt-2">
                <input id="Alamat" name="Alamat" type="Alamat" autocomplete="Alamat" required
                  class="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
  
            <!-- Submit Button -->
            <div class="flex justify-center">
              <n-button type="primary" >Lanjut</n-button>
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
  