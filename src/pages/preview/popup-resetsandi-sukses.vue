<template>
  <div class="bg-gray-800 flex items-center justify-center min-h-screen">
    <div class="bg-white rounded-lg shadow-lg p-6 w-96">
      <div class="flex justify-between items-center border-b pb-4 mb-4">
        <h2 class="text-lg font-semibold">Ganti Kata Sandi</h2>
        <i class="fas fa-times cursor-pointer" @click="closeModal"></i>
      </div>
      <div class="text-center">
        <div class="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="42"
            viewBox="0 0 44 42"
            fill="none"
            class="mr-2"
          >
            <path
              d="M21.4593 1.15678C19.9661 0.0455612 18.0891 -0.284111 16.3064 0.250562L4.24832 3.86792C1.76422 4.61361 0.0942383 6.85631 0.0942383 9.45085V35.2231C0.0942383 37.0842 0.950372 38.7883 2.44341 39.8978C3.93671 41.0091 5.8158 41.3387 7.59636 40.8041L16.5978 38.103C16.3163 37.1746 16.1737 36.2058 16.1737 35.2231V23.5188C16.1737 21.0609 17.0701 18.7135 18.7019 16.9129C19.8996 15.5864 21.4532 14.6078 23.1896 14.0853L23.8086 13.9085V5.83336C23.8086 3.97233 22.9524 2.26814 21.4591 1.15678H21.4593Z"
              fill="#E74694"
            />
            <path
              d="M43.9054 19.9014V31.6057C43.9054 34.1984 42.2373 36.4431 39.7513 37.1867L27.6932 40.8042C27.1346 40.973 26.5658 41.0555 26.0031 41.0555C24.771 41.0555 23.5652 40.6616 22.5402 39.8979C22.0719 39.5482 21.666 39.1443 21.3324 38.6921C20.9265 38.1495 20.623 37.5446 20.432 36.8954C20.43 36.8954 20.4281 36.8954 20.426 36.8973L20.43 36.8933C20.2754 36.3607 20.1909 35.8 20.1909 35.2232V23.5189C20.1909 22.317 20.5486 21.1897 21.1798 20.2531C21.8108 19.3165 22.7151 18.569 23.8084 18.1248C23.9833 18.0544 24.1622 17.99 24.3451 17.9359L25.8202 17.4938L36.4034 14.3184C38.1859 13.7838 40.063 14.1134 41.5562 15.2248C43.0495 16.3361 43.9055 18.0403 43.9055 19.9014H43.9054Z"
              fill="#E74694"
            />
          </svg>
          <h3 class="text-xl font-semibold mb-2">Stunting Apps</h3>
        </div>
        <p class="text-gray-600 mb-6 mt-4">
          Kata Sandi berhasil diganti, <br> silahkan login kembali ke dalam aplikasi
        </p>
        <button class="bg-pink-500 text-white px-4 py-2 rounded" @click="goToLogin">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoSrc:
        'https://storage.googleapis.com/a1aa/image/ZdD10ZtciF67E9ccrQwba0se9bTwaalk8JUHsowfpPAfRQFnA.jpg'
    }
  },
  methods: {
    closeModal() {
      // Logika untuk menutup modal atau kembali ke halaman sebelumnya
      console.log('Modal closed')
    },
    goToLogin() {
      // Logika untuk kembali ke halaman login
      console.log('Navigating to login page')
      // Anda dapat menggunakan router jika menggunakan Vue Router
      // this.$router.push('/login'); // Ganti dengan rute login Anda
    }
  }
}
</script>

<style scoped>
body {
  font-family: 'Inter', sans-serif;
}
</style>
