<template>
    <div class="p-6" id="app">
      <div class="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
        <!-- Breadcrumbs atau navigasi -->
        <div class="flex items-center space-x-2">
          <i class="fas fa-home text-gray-500"></i>
          <span class="text-black">Dashboard</span>
          <span class="text-black">/</span>
          <span class="text-black">Pengaturan</span>
        </div>
        <!-- Profil dan Icon -->
        <div class="flex items-center space-x-4">
          <i class="fas fa-user-circle text-gray-500"></i>
          <img
            alt="User profile picture"
            class="w-10 h-10 rounded-full"
            src="/profil.png"
            width="40"
            height="40"
          />
        </div>
      </div>
      <h1 class="text-xl font-semibold mb-2 mt-4">Pengaturan Data Anak</h1>
      <p class="text-gray-500 mb-6">Silahkan atur akun anda disini</p>
      <div class="flex mb-6">
        <button class="px-4 py-2 bg-white border border-gray-300 rounded-md mr-2">Data Akun</button>
        <button class="px-4 py-2 bg-pink-500 text-white border border-pink-500 rounded-md mr-2">
          Anak
        </button>
        <button class="px-4 py-2 bg-white border border-gray-300 rounded-md">Keamanan</button>
      </div>
      <div class="bg-white p-6 rounded-md shadow-md">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold">Data Anak</h2>
          <button class="px-4 py-2 bg-pink-500 text-white rounded-md flex items-center" @click="() => console.log('p')">
            <i class="fas fa-plus mr-2"></i>
            Tambah Profil Anak
          </button>
        </div>
        <table class="min-w-full bg-white">
          <thead>
            <tr class="w-full bg-pink-50">
              <th class="py-2 px-4 text-left">URUTAN ANAK</th>
              <th class="py-2 px-4 text-left">NAMA PASIEN</th>
              <th class="py-2 px-4 text-left">NIK ANAK</th>
              <th class="py-2 px-4 text-left">TEMPAT LAHIR</th>
              <th class="py-2 px-4 text-left">TANGGAL LAHIR</th>
              <th class="py-2 px-4 text-left">UMUR ANAK</th>
              <th class="py-2 px-4 text-left">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t" v-for="(child, index) in children" :key="index">
              <td class="py-2 px-4">{{ index + 1 }}</td>
              <td class="py-2 px-4 flex items-center">
                <img
                  :alt="'Profile picture of ' + child.name"
                  class="w-10 h-10 rounded-full mr-2"
                  :src="child.profilePicture"
                  width="40"
                  height="40"
                />
                {{ child.name }}
              </td>
              <td class="py-2 px-4">{{ child.nik }}</td>
              <td class="py-2 px-4">{{ child.birthPlace }}</td>
              <td class="py-2 px-4">{{ child.birthDate }}</td>
              <td class="py-2 px-4 flex items-center">
                {{ child.age }}
              </td>
              <td class="py-2 px-4 text-right">
                <svg
                  @click="handleClick(child)"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  class="cursor-pointer"
                >
                  <path
                    d="M10.9998 6.275C12.0124 6.275 12.8332 5.56985 12.8332 4.7C12.8332 3.83015 12.0124 3.125 10.9998 3.125C9.98731 3.125 9.1665 3.83015 9.1665 4.7C9.1665 5.56985 9.98731 6.275 10.9998 6.275Z"
                    fill="#1F2A37"
                  />
                  <path
                    d="M10.9998 12.575C12.0124 12.575 12.8332 11.8698 12.8332 11C12.8332 10.1302 12.0124 9.425 10.9998 9.425C9.98731 9.425 9.1665 10.1302 9.1665 11C9.1665 11.8698 9.98731 12.575 10.9998 12.575Z"
                    fill="#1F2A37"
                  />
                  <path
                    d="M10.9998 18.875C12.0124 18.875 12.8332 18.1698 12.8332 17.3C12.8332 16.4302 12.0124 15.725 10.9998 15.725C9.98731 15.725 9.1665 16.4302 9.1665 17.3C9.1665 18.1698 9.98731 18.875 10.9998 18.875Z"
                    fill="#1F2A37"
                  />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        children: [
          {
            name: 'Yaqub Qamar',
            nik: '33000xxxxxxxxxx000',
            birthPlace: 'Blora',
            birthDate: 'Jul 23, 2023',
            age: '3 Tahun',
            profilePicture:
              'https://storage.googleapis.com/a1aa/image/qzw3F2EMnMaPNthE5vJIlIXTp3zv46HoDeouZXvh9trObUxJA.jpg'
          },
          {
            name: 'Khalid Kasimiri',
            nik: '33000xxxxxxxxxx000',
            birthPlace: 'Sleman',
            birthDate: 'Jun 12, 2022',
            age: '6 Tahun',
            profilePicture:
              'https://storage.googleapis.com/a1aa/image/VDyshKcfeQsLu0yQFKBcQO8vW275b0u3Jtl8GI4om9ma2oiTA.jpg'
          },
          {
            name: 'Khadir Karawita',
            nik: '33000xxxxxxxxxx000',
            birthPlace: 'Sleman',
            birthDate: 'Feb 22, 2024',
            age: '7 Tahun',
            profilePicture:
              'https://storage.googleapis.com/a1aa/image/ve3wg56sXTRQNyvjiGMteVUKTA1VvRY7cIE04F6ef7syZjKOB.jpg'
          }
        ]
      }
    },
    methods: {
      handleClick(child) {
        // Aksi saat ikon diklik
        alert(`Anda mengklik ikon untuk ${child.name}`);
        // Di sini Anda bisa menambahkan logika lain, misalnya menampilkan menu dropdown
      }
    }
  }
  </script>
  
  <style scoped>
  /* Jika ada gaya khusus, tambahkan di sini */
  </style>
  