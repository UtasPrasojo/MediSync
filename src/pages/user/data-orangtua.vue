<template>
    <div class="min-h-screen bg-gray-50 p-6">
      <div class="flex justify-between items-center mb-6">
        <div class="text-gray-600">
          <i class="fas fa-home"></i>
          <div class="flex items-center space-x-2">
        <i class="fas fa-home text-gray-500"></i>
        <span class="text-gray-500">Dashboard</span>
        <span class="text-gray-500">/</span>
        <span class="text-gray-500">Pengaturan</span>
      </div>
        </div>
        <div class="flex items-center">
          <img
            alt="User profile picture"
            class="rounded-full"
            height="40"
            src="/profil.png"
            width="40"
          />
        </div>
      </div>
      <h1 class="text-2xl font-semibold mb-2">Pengaturan Akun</h1>
      <p class="text-gray-600 mb-6">Silahkan atur akun anda disini</p>
  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Profil Pengguna -->
        <div class="bg-white p-6 rounded-lg shadow fit-content ">
          <div class="flex items-center mb-4 ">
            <img
              alt="User profile picture"
              class="rounded-full w-20 h-20"
              height="80"
              src="/profil2.png"
              width="80"
            />
            <div class="ml-4">
              <h2 class="text-xl font-semibold">{{ userName }}</h2>
              <p class="text-gray-600">{{ userEmail }}</p>
            </div>
          </div>
          <div class="text-gray-600 mb-4">
            <p><i class="fas fa-phone-alt"></i> {{ userPhone }}</p>
            <p><i class="fas fa-map-marker-alt"></i> {{ userAddress }}</p>
          </div>
          <button class="text-red-600 flex items-center">
            <i class="fas fa-trash-alt"></i>
            <span class="ml-2">Hapus Akun</span>
          </button>
        </div>
  
        <!-- Form Data Akun -->
        <div class="col-span-2 bg-white p-6 rounded-lg shadow">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-semibold text-white bg-pink-600 px-4 py-2 rounded">
              Profil Ibu
            </h2>
            <button class="text-pink-600">
              <i class="fas fa-chevron-down"></i>
            </button>
          </div>
  
          <div class="mb-4">
            <label class="block text-black mb-2">Data Orang Tua</label>
            <div class="flex items-center mb-4">
              <input class="mr-2" type="checkbox" />
              <span class="text-gray-600">Samakan Dengan Profile</span>
            </div>
  
            <!-- Input Fields -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label class="block text-gray-700 mb-2">Nama Ibu</label>
                <input class="w-full p-2 border rounded" placeholder="Input Nama" type="text" />
              </div>
              <div>
                <label class="block text-gray-700 mb-2">NIK</label>
                <input class="w-full p-2 border rounded" placeholder="Input NIK" type="text" />
              </div>
            </div>
  
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label class="block text-gray-700 mb-2">Tempat Lahir</label>
                <select class="w-full p-2 border rounded">
                  <option>Pilih</option>
                </select>
              </div>
              <div>
                <label class="block text-gray-700 mb-2">Tanggal Lahir</label>
                <input class="w-full p-2 border rounded" type="date" />
              </div>
            </div>
  
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label class="block text-gray-700 mb-2">Kelurahan</label>
                <select class="w-full p-2 border rounded">
                  <option>Pilih</option>
                </select>
              </div>
              <div>
                <label class="block text-gray-700 mb-2">Kecamatan</label>
                <select class="w-full p-2 border rounded">
                  <option>Pilih</option>
                </select>
              </div>
              <div>
                <label class="block text-gray-700 mb-2">Kabupaten</label>
                <select class="w-full p-2 border rounded">
                  <option>Pilih</option>
                </select>
              </div>
            </div>
  
            <div class="mb-4">
              <label class="block text-gray-700 mb-2">Alamat Lengkap</label>
              <textarea
                class="w-full p-2 border rounded"
                placeholder="Tulis Alamat"
              ></textarea>
            </div>
  
            <button class="bg-pink-600 text-white px-4 py-2 rounded">Simpan</button>
          </div>
  
          <div>
            <button class="text-gray-600 flex items-center">
              <span class="mr-2">Profil Ayah</span>
              <i class="fas fa-chevron-down"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userName: "Yudha Pratama",
        userEmail: "Yudha@email.com",
        userPhone: "33000xxxxxxxxx000",
        userAddress: "Jl. Kresna, Gamping Kidul, Ambarketawang, Yogyakarta",
        profileImage:
          "https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-lpQRiNydpCmkZ7ozQw3hZwSy.png",
      };
    },
  };
  </script>
  
  <style scoped>
  body {
    font-family: 'Inter', sans-serif;
  }
  </style>
  