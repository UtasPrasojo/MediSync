<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white rounded-lg shadow-lg p-6 w-80">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold">QR Pemeriksaan Anak</h2>
        <hr class="absolute left-0 right-0 top-full border-t border-gray-800" />
        <div class="relative">
          <i class="fas fa-times cursor-pointer" @click="closeModal"></i>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <img
          alt="Profile picture of Yaqub Qamar"
          class="rounded-full mb-4"
          :src="profilePicture"
          width="50"
          height="50"
        />
        <div class="flex items-center mr-6">
          <div class="flex justify-center">
            <n-qr-code :value="text" />
          </div>
        </div>

        <h3 class="text-lg font-semibold mb-2 mt-4">{{ childName }}</h3>
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
          <n-button type="tertiary" @click="goBack">
            Kembali
          </n-button>
          <n-button type="primary" @click="finish">
            Selesai
          </n-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      profilePicture:
        'https://storage.googleapis.com/a1aa/image/f1bLfIM4N2hgjUFavE9iqSQpWDsVQbn0feMXJkeVQigkefTxJA.jpg',
      qrCode: '', // Inisialisasi QR code sebagai string kosong
      childName: 'Yaqub Qamar',
      age: '1 Tahun',
      bloodType: 'O',
      height: '60 Cm',
      weight: '16 KG'
    }
  },
  created() {
    this.fetchQRCode() // Memanggil fungsi untuk mengambil QR code dari database saat komponen dibuat
  },
  methods: {
    async fetchQRCode() {
      try {
        const response = await axios.get('URL_API_ANDA') // Ganti dengan URL API Anda
        this.qrCode = response.data.qrCode // Sesuaikan dengan struktur data yang Anda terima
      } catch (error) {
        console.error('Error fetching QR code:', error)
      }
    },
    closeModal() {
      console.log('Modal closed')
    },
    goBack() {
      console.log('Go back')
    },
    finish() {
      console.log('Finished')
    }
  }
}
</script>

<style scoped>
/* Jika ada gaya khusus, tambahkan di sini */
</style>
