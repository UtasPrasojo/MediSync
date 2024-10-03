<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white rounded-lg shadow-lg p-6 w-80">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold">QR Pemeriksaan Anak</h2>
          <i class="fas fa-times cursor-pointer" @click="closeModal"></i>
        </div>
        <div class="flex flex-col items-center">
          <img
            alt="Profile picture of Yaqub Qamar"
            class="rounded-full mb-4"
            :src="profilePicture"
            width="50"
            height="50"
          />
          
          <img
            alt="QR code for Yaqub Qamar"
            class="mb-4"
            :src="qrCode"
            width="200"
            height="200"
          />
          <h3 class="text-lg font-semibold mb-2">{{ childName }}</h3>
          <div class="text-sm text-gray-600 mb-2">
            <span>
              Umur
              <span class="text-pink-500">{{ age }}</span>
            </span>
            |
            <span>Golongan Darah {{ bloodType }}</span>
          </div>
          <div class="text-sm text-gray-600 mb-4">
            <span>
              Tinggi Badan
              <span class="text-pink-500">{{ height }}</span>
            </span>
            |
            <span>
              Berat Badan
              <span class="text-pink-500">{{ weight }}</span>
            </span>
          </div>
          <div class="flex justify-between w-full">
            <button class="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg" @click="goBack">
              Kembali
            </button>
            <button class="bg-pink-500 text-white py-2 px-4 rounded-lg" @click="finish">
              Selesai
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        profilePicture: "https://storage.googleapis.com/a1aa/image/f1bLfIM4N2hgjUFavE9iqSQpWDsVQbn0feMXJkeVQigkefTxJA.jpg",
        qrCode: "", // Inisialisasi QR code sebagai string kosong
        childName: "Yaqub Qamar",
        age: "1 Tahun",
        bloodType: "O",
        height: "60 Cm",
        weight: "16 KG",
      };
    },
    created() {
      this.fetchQRCode(); // Memanggil fungsi untuk mengambil QR code dari database saat komponen dibuat
    },
    methods: {
      async fetchQRCode() {
        try {
          const response = await axios.get('URL_API_ANDA'); // Ganti dengan URL API Anda
          this.qrCode = response.data.qrCode; // Sesuaikan dengan struktur data yang Anda terima
        } catch (error) {
          console.error("Error fetching QR code:", error);
        }
      },
      closeModal() {
        console.log("Modal closed");
      },
      goBack() {
        console.log("Go back");
      },
      finish() {
        console.log("Finished");
      },
    },
  };
  </script>
  
  <style scoped>
  /* Jika ada gaya khusus, tambahkan di sini */
  </style>
  