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
          Masukan Kode OTP
        </h2>
        <p class="text-center font-medium leading-9 text-gray-900">
          Masukan kode OTP yang telah dikirim ke email {{ userEmail }}
        </p>

        <form class="space-y-6 mt-10" action="#" method="POST">
          <!-- Input OTP -->
          <div class="flex items-center justify-center space-x-2">
            <!-- 6-digit OTP input fields -->
            <input
              v-for="(otpDigit, index) in otp"
              :key="index"
              type="text"
              maxlength="1"
              class="w-12 h-12 text-center border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-600 focus:outline-none"
              v-model="otp[index]"
            />
          </div>
          <div class="mt-6 text-center">
            <button
              type="submit"
              class="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
              @click.prevent="submitOtp"
            >
              Konfirmasi
            </button>
          </div>
        </form>
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

<script>
export default {
  data() {
    return {
      userEmail: 'user@gmail.com', // Ubah dengan email dinamis nanti
      otp: Array(6).fill('') // Array untuk 6 digit OTP
    };
  },
  methods: {
    submitOtp() {
      const otpCode = this.otp.join(''); // Gabungkan semua digit menjadi satu string
      console.log('OTP yang dimasukkan:', otpCode);
      // Tambahkan logika pengiriman OTP di sini
    }
  }
};
</script>
