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

    <div class="bg-white p-6 rounded-lg shadow-md">
      <div class="flex justify-between items-center mb-6">
        <div>
          <h1 class="text-xl font-semibold">Ganti Kata Sandi</h1>
          <p class="text-gray-500">Anda Dapat Mengganti Kata Sandi Anda Sendiri Disini</p>
        </div>
        <div class="flex space-x-4">
          <button class="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded">
            Data Akun
          </button>
          <button class="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded">
            Anak
          </button>
          <button class="bg-pink-500 text-white px-4 py-2 rounded">Keamanan</button>
        </div>
      </div>

      <div class="flex items-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="211"
          height="198"
          viewBox="0 0 211 198"
          fill="none"
          class="mr-6 mx-6"
        >
          <path
            d="M86.3286 76.5018C77.4972 73.7464 72.4715 77.3419 65.6437 77.5435C60.2822 77.7115 43.6268 72.9848 38.1086 86.28C35.87 91.7571 34.4149 103.316 34.5716 114.819C34.7171 126.558 35.5342 137.658 43.5261 139.326C52.9171 141.298 70.8544 141.617 83.1892 141.841"
            stroke="#0E0E0F"
            stroke-width="1.2"
            stroke-miterlimit="10"
          />
          <path
            d="M126.033 94.5724C126.033 94.5724 134.203 91.9572 136.528 91.0415C138.853 90.1257 139.488 88.7087 138.475 88.1885C137.462 87.6682 123.502 91.5092 123.502 91.5092C123.502 91.5092 124.698 90.9849 126.404 90.2167C129.881 88.6194 131.46 87.1726 130.982 86.3879C130.504 85.6033 129.166 86.134 128.241 86.3505C128.241 86.3505 118.092 88.945 116.231 92.0945C114.371 95.244 105.718 126.022 105.718 126.022L98.1738 96.2715"
            stroke="#222325"
            stroke-width="1.5"
            stroke-miterlimit="10"
          />
          <path
            d="M136.744 90.965C139.312 90.3109 142.17 89.1939 142.658 90.5709C142.984 91.4349 141.103 92.7433 136.591 94.4431C132.078 96.1429 127.231 97.5551 127.231 97.5551"
            stroke="#222325"
            stroke-width="1.5"
            stroke-miterlimit="10"
          />
          <path
            d="M138.418 93.7243C139.718 93.5843 140.248 95.0197 137.653 96.504C135.059 97.9882 125.077 102.3 125.077 102.3L119.308 141.381"
            stroke="#222325"
            stroke-width="1.5"
            stroke-miterlimit="10"
          />
          <mask
            id="mask0_527_10189"
            style="mask-type: luminance"
            maskUnits="userSpaceOnUse"
            x="79"
            y="72"
            width="130"
            height="126"
          >
            <path
              d="M208.748 130.563L129.066 72.0605L79.7884 139.141L159.47 197.643L208.748 130.563Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_527_10189)">
            <path
              d="M97.0811 137.978C100.387 139.146 103.706 140.649 105.15 140.998C106.594 141.348 107.738 140.746 106.226 139.534C104.606 138.366 102.876 137.357 101.062 136.522"
              stroke="#232426"
              stroke-width="1.5"
              stroke-miterlimit="10"
            />
            <path
              d="M87.522 128.616C92.449 127.875 96.8082 127.359 99.4391 128.817C99.4391 128.817 104.555 131.707 107.151 133.288C110.15 135.124 110.318 136.73 108.798 136.602C106.824 136.446 100.508 132.993 99.3044 132.502"
              stroke="#232426"
              stroke-width="1.5"
              stroke-miterlimit="10"
            />
            <path
              d="M101.47 133.558C105.705 135.584 109.564 137.788 109.511 138.785C109.463 139.508 108.249 139.577 107.016 139.078C105.195 138.344 98.4458 135.378 98.4458 135.378"
              stroke="#232426"
              stroke-width="1.5"
              stroke-miterlimit="10"
            />
            <path
              d="M102.71 140.14C105.118 141.631 103.299 142.793 99.1237 141.196C97.8144 140.736 96.4645 140.402 95.0926 140.2C92.0375 139.31 87.9699 139.398 83.2295 141.664"
              stroke="#232426"
              stroke-width="1.5"
              stroke-miterlimit="10"
            />
            <mask
              id="mask1_527_10189"
              style="mask-type: luminance"
              maskUnits="userSpaceOnUse"
              x="110"
              y="119"
              width="83"
              height="33"
            >
              <path d="M110 119H193V152H110V119Z" fill="white" />
            </mask>
            <g mask="url(#mask1_527_10189)">
              <path
                d="M192.216 119.498H149.849L134.975 151.502H177.342L192.216 119.498Z"
                stroke="#232426"
                stroke-width="1.5"
                stroke-miterlimit="10"
              />
              <path
                d="M134.975 151.503H110.499V149.565L136.776 147.627L134.975 151.503Z"
                stroke="#232426"
                stroke-width="1.5"
                stroke-miterlimit="10"
              />
              <path
                d="M163.598 138.752C161.87 138.752 160.468 137.353 160.468 135.626C160.468 133.9 161.87 132.5 163.598 132.5C165.327 132.5 166.729 133.9 166.729 135.626C166.729 137.353 165.327 138.752 163.598 138.752Z"
                stroke="#232426"
                stroke-width="1.5"
                stroke-miterlimit="10"
              />
            </g>
          </g>
          <path d="M142.5 70L136.5 57" stroke="#00BE6B" stroke-width="1.5" stroke-miterlimit="10" />
          <path d="M151.5 70L154.5 55" stroke="#00BE6B" stroke-width="1.5" stroke-miterlimit="10" />
          <path d="M158.5 73L167.5 62" stroke="#00BE6B" stroke-width="1.5" stroke-miterlimit="10" />
          <path
            d="M33.7235 106.971L51.9878 107.633V125.581L68.1073 127.417L87.6811 129.646L87.1466 103.893L100.043 99.9513C98.605 94.058 96.8426 88.25 94.7641 82.5543C92.4365 76.5007 87.9373 73.5694 81.6005 73.648C67.3566 73.8839 65.3631 74.2545 59.9283 74.3107C48.9252 74.4454 39.2028 74.3107 35.7059 87.2714C34.0832 93.7029 33.4151 100.342 33.7235 106.971Z"
            fill="#222325"
          />
          <path
            d="M15.0059 141.838H139M200.1 141.838H181.5"
            stroke="#232426"
            stroke-width="1.5"
            stroke-miterlimit="10"
          />
          <path
            d="M65.7242 65.9156C61.6193 67.7113 56.8354 65.8402 55.039 61.7363C53.2427 57.6324 55.1141 52.8498 59.2189 51.0541C63.3238 49.2584 68.1077 51.1295 69.9041 55.2334C71.7005 59.3373 69.8291 64.1199 65.7242 65.9156Z"
            stroke="#242526"
            stroke-width="1.5"
            stroke-miterlimit="10"
          />
          <path
            d="M63.1226 49.8579C63.1226 49.8579 67.0175 59.4379 59.5878 65.6501C59.5878 65.6501 53.079 62.7144 54.6561 57.7931C56.1295 52.635 60.7773 49.6144 63.1226 49.8579Z"
            fill="#242526"
          />
          <path
            d="M54.2817 58.5164C50.7733 62.082 47.7051 64.1495 41.1985 63.3694C34.6918 62.5893 29.3826 57.6589 22.2366 61.3652C15.9573 64.5473 20.8685 75.4543 28.6681 76.6842C36.4677 77.9141 43.0752 75.1686 47.4502 71.0788C51.8252 66.9891 55.5045 59.432 55.5045 59.432"
            fill="#242526"
          />
        </svg>
        <div class="flex-grow ml-4">
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Kata Sandi Sekarang</label>
            <input
              class="w-full p-2 border border-gray-300 rounded"
              placeholder="Input Kata Sandi"
              type="password"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Kata Sandi Baru</label>
            <input
              class="w-full p-2 border border-gray-300 rounded"
              placeholder="Input Kata Sandi Baru"
              type="password"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Konfirmasi Kata Sandi</label>
            <input
              class="w-full p-2 border border-gray-300 rounded"
              placeholder="Input Konfirmasi Kata Sandi"
              type="password"
            />
          </div>
          <button class="bg-pink-500 text-white px-4 py-2 rounded">Simpan</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChangePassword' // Nama komponen
}
</script>

<style scoped>
body {
  font-family: 'Inter', sans-serif;
}
</style>
