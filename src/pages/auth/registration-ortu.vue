<route lang="yaml">
meta:
  layout: blank
</route>

<script>
        export default {
    methods: {
        triggerFileUpload() {
            this.$refs.fileInput.click();
        },
        handleFileChange(event) {
            const file = event.target.files[0];
            // Proses file di sini
            console.log(file);
        }
    }
}
    </script>

<template>
  <div class="flex min-h-screen">
    <!-- Left Side (Form) -->
    <div class="w-1/2 flex justify-center items-center bg-white">
      <div class="bg-white p-8 rounded-lg w-full shadow-lg max-w-xl">
        <!-- Lebarkan menjadi max-w-xl -->
        <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Registrasi Akun
        </h2>
        <p class="text-center font-medium leading-9 text-gray-900">
          Silahkan Masukan Data Diri Anda
        </p>

        <form class="space-y-6 mt-10" action="#" method="POST">
          <!-- NIK -->
          <div>
            <div class="flex items-center justify-between">
              <label for="NIK" class="block text-sm font-medium leading-6 text-gray-900">NIK</label>
            </div>
            <div class="mt-2">
              <input
                id="NIK"
                name="NIK"
                type="NIK"
                autocomplete="NIK"
                required
                class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <!-- Tempat Lahir dan Tanggal Lahir (Dibuat Sebaris) -->
          <div class="flex space-x-4">
            <!-- Tempat Lahir -->
            <div class="w-1/2">
              <div class="flex items-center justify-between">
                <label for="TTL" class="block text-sm font-medium leading-6 text-gray-900"
                  >Tempat Lahir</label
                >
              </div>
              <div class="mt-2">
                <input
                  id="TTL"
                  name="TTL"
                  type="text"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <!-- Tanggal Lahir -->
            <div class="w-1/2">
              <div class="flex items-center justify-between">
                <label for="tanggal_lahir" class="block text-sm font-medium leading-6 text-gray-900"
                  >Tanggal Lahir</label
                >
              </div>
              <div class="mt-2">
                <input
                  id="tanggal_lahir"
                  name="tanggal_lahir"
                  type="date"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <!-- Kelurahan, Kecamatan, dan Kabupaten (Dibuat Sebaris) -->
          <div class="flex space-x-4">
            <!-- Kelurahan -->
            <div class="w-1/3">
              <div class="flex items-center justify-between">
                <label for="kelurahan" class="block text-sm font-medium leading-6 text-gray-900"
                  >Kelurahan</label
                >
              </div>
              <div class="mt-2">
                <select
                  id="kelurahan"
                  name="kelurahan"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                >
                  <option value="" disabled selected>Pilih Kelurahan</option>
                  <option value="kelurahan1">Kelurahan 1</option>
                  <option value="kelurahan2">Kelurahan 2</option>
                  <option value="kelurahan3">Kelurahan 3</option>
                  <!-- Tambahkan opsi lain sesuai kebutuhan -->
                </select>
              </div>
            </div>

            <!-- Kecamatan -->
            <div class="w-1/3">
              <div class="flex items-center justify-between">
                <label for="kecamatan" class="block text-sm font-medium leading-6 text-gray-900"
                  >Kecamatan</label
                >
              </div>
              <div class="mt-2">
                <select
                  id="kecamatan"
                  name="kecamatan"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                >
                  <option value="" disabled selected>Pilih Kecamatan</option>
                  <option value="kecamatan1">Kecamatan 1</option>
                  <option value="kecamatan2">Kecamatan 2</option>
                  <option value="kecamatan3">Kecamatan 3</option>
                  <!-- Tambahkan opsi lain sesuai kebutuhan -->
                </select>
              </div>
            </div>

            <!-- Kabupaten -->
            <div class="w-1/3">
              <div class="flex items-center justify-between">
                <label for="kabupaten" class="block text-sm font-medium leading-6 text-gray-900"
                  >Kabupaten</label
                >
              </div>
              <div class="mt-2">
                <select
                  id="kabupaten"
                  name="kabupaten"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                >
                  <option value="" disabled selected>Pilih Kabupaten</option>
                  <option value="kabupaten1">Kabupaten 1</option>
                  <option value="kabupaten2">Kabupaten 2</option>
                  <option value="kabupaten3">Kabupaten 3</option>
                  <!-- Tambahkan opsi lain sesuai kebutuhan -->
                </select>
              </div>
            </div>
          </div>

          <!-- Alamat -->
          <div>
            <div class="flex items-center justify-between">
              <label for="Alamat" class="block text-sm font-medium leading-6 text-gray-900"
                >Alamat</label
              >
            </div>
            <div class="mt-2">
              <input
                id="Alamat"
                name="Alamat"
                type="Alamat"
                placeholder="Write text here.."
                autocomplete="Alamat"
                required
                class="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="Alamat" class="block text-sm font-medium leading-6 text-gray-900"
                >Unggah Foto</label
              >
            </div>
            <div class="flex justify-center mt-2 rounded-lg border-2">
              <div class="flex flex-col justify-center items-center">
                <br />
                <input
                  type="file"
                  id="file-upload"
                  class="hidden"
                  accept=".svg, .png, .gif"
                  @change="handleFileChange"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  @click="triggerFileUpload"
                >
                  <path
                    d="M21.3201 4.18404L21.3205 4.18449L27.9839 11.0184C28.1962 11.2454 28.3157 11.5512 28.313 11.8709C28.3103 12.1919 28.1846 12.4966 27.9669 12.7199C27.7495 12.9428 27.4582 13.0669 27.1564 13.0695C26.8558 13.0722 26.5638 12.9544 26.3431 12.7373L22.5248 8.8212L21.6668 7.94125V9.17026V23.8466C21.6668 24.1713 21.5409 24.4803 21.3207 24.7062C21.1009 24.9317 20.8054 25.0559 20.5002 25.0559C20.1949 25.0559 19.8995 24.9317 19.6796 24.7062C19.4594 24.4803 19.3335 24.1713 19.3335 23.8466V9.17026V7.94125L18.4755 8.8212L14.6538 12.7407L14.6536 12.741C14.4337 12.9668 14.1382 13.0913 13.8326 13.0915C13.5271 13.0918 13.2314 12.9676 13.0112 12.7422C12.7907 12.5163 12.6645 12.2071 12.6642 11.8821C12.664 11.5572 12.7897 11.248 13.0098 11.0218C13.0099 11.0217 13.01 11.0217 13.0101 11.0216L19.6765 4.18449L19.6769 4.18404C19.7859 4.07199 19.9147 3.98379 20.0555 3.92385C20.1963 3.86392 20.3468 3.83325 20.4985 3.83325C20.6502 3.83325 20.8007 3.86392 20.9415 3.92385C21.0823 3.98379 21.2111 4.07199 21.3201 4.18404ZM26.0002 23.8466V23.4919H33.8335C34.5808 23.4919 35.3001 23.7963 35.8325 24.3423C36.3653 24.8887 36.6668 25.6325 36.6668 26.4106V33.2479C36.6668 34.026 36.3653 34.7698 35.8325 35.3162C35.3001 35.8622 34.5808 36.1666 33.8335 36.1666H7.16683C6.41952 36.1666 5.70018 35.8622 5.1678 35.3162C4.635 34.7698 4.3335 34.026 4.3335 33.2479V26.4106C4.3335 25.6325 4.635 24.8887 5.1678 24.3423C5.70018 23.7963 6.41952 23.4919 7.16683 23.4919H15.0002V23.8466C15.0002 25.3352 15.5766 26.7653 16.6066 27.8217C17.6371 28.8785 19.0373 29.4746 20.5002 29.4746C21.963 29.4746 23.3633 28.8785 24.3937 27.8217C25.4237 26.7653 26.0002 25.3352 26.0002 23.8466ZM27.9953 33.2283C28.4889 33.5665 29.0706 33.7479 29.6668 33.7479C30.4666 33.7479 31.231 33.422 31.7926 32.846C32.3538 32.2705 32.6668 31.4925 32.6668 30.6839C32.6668 30.0807 32.4925 29.49 32.1644 28.9865C31.8363 28.4829 31.3686 28.0884 30.819 27.8549C30.2693 27.6214 29.6636 27.56 29.0792 27.6793C28.4948 27.7985 27.9598 28.0924 27.5411 28.5218C27.1225 28.9511 26.8388 29.4966 26.724 30.0885C26.6092 30.6804 26.668 31.2941 26.8935 31.8524C27.119 32.4108 27.5018 32.8901 27.9953 33.2283Z"
                    fill="#9CA3AF"
                    stroke="#9CA3AF"
                  />
                </svg>
                <h2 class="mt-2 font-bold text-gray-500">Klik unggah foto</h2>
                <p class="text-gray-500 text-xs">SVG, PNG or GIF</p>
                <br />
              </div>
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
