<template>
  <div class="min-h-screen bg-gray-50">
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
          :src="profileImage"
          width="40"
          height="40"
        />
      </div>
    </div>

    <div class="py-8 px-6 text-left">
      <div class="flex justify-between items-center pb-4">
        <!-- Container untuk teks di sebelah kiri -->
        <div>
          <h1 class="text-2xl font-semibold">Pengaturan Akun</h1>
          <p class="text-gray-500">Silahkan manage akun anda disini</p>
        </div>

        <!-- Container untuk tombol di sebelah kanan -->
        <div class="flex space-x-4">
          <button class="text-white bg-pink-500 px-4 py-2 rounded-lg">Data Akun</button>
          <button class="text-gray-500 bg-white px-4 py-2 rounded-lg">Anak</button>
          <button class="text-gray-500 bg-white px-4 py-2 rounded-lg">Keamanan</button>
        </div>
      </div>

      <div class="flex w-full gap-4">
        <div class="w-1/3">
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <div class="flex justify-between items-center">
              <h2 class="text-lg font-semibold">Profil Pengguna</h2>
              <button class="text-black bg-white px-4 py-2 rounded-lg border border-gray-400">
                Ubah Profil
              </button>
            </div>
            <div class="flex flex-col items-center mt-4">
              <img
                alt="User profile picture"
                class="w-24 h-24 rounded-full"
                :src="profileImage"
                width="100"
                height="100"
              />
              <h3 class="mt-4 text-xl font-semibold">{{ userName }}</h3>
              <p class="text-gray-500">{{ userEmail }}</p>

              <div class="mt-4 space-y-2 text-gray-500">
                <div class="flex items-center space-x-2">
                  <i class="fas fa-phone-alt"></i>
                  <span>{{ userPhone }}</span>
                </div>
                <div class="flex items-center space-x-2">
                  <i class="fas fa-map-marker-alt"></i>
                  <span>{{ userAddress }}</span>
                </div>
              </div>

              <button class="mt-6 text-red-500 flex items-center space-x-2">
                <i class="fas fa-trash-alt"></i>
                <span>Hapus Akun</span>
              </button>
            </div>
          </div>
        </div>
        <div class="w-2/3">
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <div class="flex justify-between items-center mt-6">
              <h2 class="text-lg font-semibold">Data Orang Tua</h2>
              <!-- Checkbox untuk Data Orang Tua -->
              <div>
                <input type="checkbox" id="dataOrangTua" class="mr-2">
                <label for="dataOrangTua" class="text-gray-700">Samakan dengan profil</label>
              </div>
            </div>

            <div class="mt-4 space-y-4">
              <!-- Profil Ibu Button -->
              <button
                @click="toggleDropdown('ibu')"
                :class="[
                  'w-full text-left px-4 py-2 rounded-lg flex justify-between items-center',
                  showIbu ? 'bg-pink-500 text-white' : 'bg-gray-100 text-black'
                ]"
              >
                <span>Profil Ibu</span>
                <i :class="{ 'fas fa-chevron-down': !showIbu, 'fas fa-chevron-up': showIbu }"></i>
              </button>

              <!-- Dropdown Form Profil Ibu -->
              <div v-if="showIbu" class="bg-gray-50 p-4 rounded-lg">
                <form>
                  <div class="mb-4">
                    <label class="block text-gray-700">Nama Ibu</label>
                    <input
                      class="w-full p-2 border rounded"
                      placeholder="Input Nama"
                      type="text"
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block text-gray-700">NIK</label>
                    <input
                      class="w-full p-2 border rounded"
                      placeholder="Input NIK"
                      type="text"
                    />
                  </div>

                  <!-- Flex container for Tempat Lahir and Tanggal Lahir -->
                  <div class="mb-4 flex space-x-4">
                    <!-- Tempat Lahir -->
                    <div class="w-1/2">
                      <label class="block text-gray-700">Tempat Lahir</label>
                      <input
                        class="w-full p-2 border rounded"
                        placeholder="Input Tempat Lahir"
                        type="text"
                      />
                    </div>

                    <!-- Tanggal Lahir -->
                    <div class="w-1/2">
                      <label class="block text-gray-700">Tanggal Lahir</label>
                      <input
                        class="w-full p-2 border rounded"
                        placeholder="Input Tanggal Lahir"
                        type="date"
                      />
                    </div>
                  </div>
                  <div class="mb-4 flex space-x-4">
                    <!-- Kelurahan -->
                    <div class="w-1/3">
                      <label class="block text-gray-700">Kelurahan</label>
                      <select class="w-full p-2 border rounded">
                        <option value="">Pilih Kelurahan</option>
                        <option value="kelurahan1">Kelurahan 1</option>
                        <option value="kelurahan2">Kelurahan 2</option>
                        <option value="kelurahan3">Kelurahan 3</option>
                        <!-- Tambahkan opsi lainnya di sini -->
                      </select>
                    </div>

                    <!-- Kecamatan -->
                    <div class="w-1/3">
                      <label class="block text-gray-700">Kecamatan</label>
                      <select class="w-full p-2 border rounded">
                        <option value="">Pilih Kecamatan</option>
                        <option value="kecamatan1">Kecamatan 1</option>
                        <option value="kecamatan2">Kecamatan 2</option>
                        <option value="kecamatan3">Kecamatan 3</option>
                        <!-- Tambahkan opsi lainnya di sini -->
                      </select>
                    </div>

                    <!-- Kabupaten -->
                    <div class="w-1/3">
                      <label class="block text-gray-700">Kabupaten</label>
                      <select class="w-full p-2 border rounded">
                        <option value="">Pilih Kabupaten</option>
                        <option value="kabupaten1">Kabupaten 1</option>
                        <option value="kabupaten2">Kabupaten 2</option>
                        <option value="kabupaten3">Kabupaten 3</option>
                        <!-- Tambahkan opsi lainnya di sini -->
                      </select>
                    </div>
                  </div>
                  <div class="mb-4">
                    <label class="block text-gray-700">Alamat</label>
                    <textarea
                      class="w-full p-2 border rounded h-24"
                      placeholder="Masukkan Alamat"
                    ></textarea>
                  </div>
                  <ui-button color="primary" variant="fill">Simpan</ui-button>

                  <!-- Form fields lainnya -->
                </form>
              </div>

              <!-- Profil Ayah Button -->
              <button
                @click="toggleDropdown('ayah')"
                :class="[
                  'w-full text-left px-4 py-2 rounded-lg flex justify-between items-center',
                  showAyah ? 'bg-pink-500 text-white' : 'bg-gray-100 text-black'
                ]"
              >
                <span>Profil Ayah</span>
                <i
                  :class="{ 'fas fa-chevron-down': !showAyah, 'fas fa-chevron-up': showAyah }"
                ></i>
              </button>

              <!-- Dropdown Form Profil Ayah -->
              <div v-if="showAyah" class="bg-gray-50 p-4 rounded-lg">
                <form>
                  <div class="mb-4">
                    <label class="block text-gray-700">Nama Ayah</label>
                    <input
                      class="w-full p-2 border rounded"
                      placeholder="Input Nama"
                      type="text"
                    />
                  </div>
                  <div class="mb-4">
                    <label class="block text-gray-700">NIK</label>
                    <input
                      class="w-full p-2 border rounded"
                      placeholder="Input NIK"
                      type="text"
                    />
                  </div>

                  <!-- Flex container for Tempat Lahir and Tanggal Lahir -->
                  <div class="mb-4 flex space-x-4">
                    <!-- Tempat Lahir -->
                    <div class="w-1/2">
                      <label class="block text-gray-700">Tempat Lahir</label>
                      <input
                        class="w-full p-2 border rounded"
                        placeholder="Input Tempat Lahir"
                        type="text"
                      />
                    </div>

                    <!-- Tanggal Lahir -->
                    <div class="w-1/2">
                      <label class="block text-gray-700">Tanggal Lahir</label>
                      <input
                        class="w-full p-2 border rounded"
                        placeholder="Input Tanggal Lahir"
                        type="date"
                      />
                    </div>
                  </div>
                  <div class="mb-4 flex space-x-4">
                    <!-- Kelurahan -->
                    <div class="w-1/3">
                      <label class="block text-gray-700">Kelurahan</label>
                      <select class="w-full p-2 border rounded">
                        <option value="">Pilih Kelurahan</option>
                        <option value="kelurahan1">Kelurahan 1</option>
                        <option value="kelurahan2">Kelurahan 2</option>
                        <option value="kelurahan3">Kelurahan 3</option>
                        <!-- Tambahkan opsi lainnya di sini -->
                      </select>
                    </div>

                    <!-- Kecamatan -->
                    <div class="w-1/3">
                      <label class="block text-gray-700">Kecamatan</label>
                      <select class="w-full p-2 border rounded">
                        <option value="">Pilih Kecamatan</option>
                        <option value="kecamatan1">Kecamatan 1</option>
                        <option value="kecamatan2">Kecamatan 2</option>
                        <option value="kecamatan3">Kecamatan 3</option>
                        <!-- Tambahkan opsi lainnya di sini -->
                      </select>
                    </div>

                    <!-- Kabupaten -->
                    <div class="w-1/3">
                      <label class="block text-gray-700">Kabupaten</label>
                      <select class="w-full p-2 border rounded">
                        <option value="">Pilih Kabupaten</option>
                        <option value="kabupaten1">Kabupaten 1</option>
                        <option value="kabupaten2">Kabupaten 2</option>
                        <option value="kabupaten3">Kabupaten 3</option>
                        <!-- Tambahkan opsi lainnya di sini -->
                      </select>
                    </div>
                  </div>
                  <div class="mb-4">
                    <label class="block text-gray-700">Alamat</label>
                    <textarea
                      class="w-full p-2 border rounded h-24"
                      placeholder="Masukkan Alamat"
                    ></textarea>
                  </div>
                  <ui-button color="primary" variant="fill">Simpan</ui-button>

                  <!-- Form fields lainnya -->
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showIbu: false,
      showAyah: false,
      profileImage: 'https://randomuser.me/api/portraits/women/1.jpg', // Sesuaikan dengan data sebenarnya
      userName: 'Nama Pengguna',
      userEmail: 'email@example.com',
      userPhone: '081234567890',
      userAddress: 'Jl. Contoh Alamat, Indonesia',
    };
  },
  methods: {
    toggleDropdown(profile) {
      if (profile === 'ibu') {
        this.showIbu = !this.showIbu;
      } else if (profile === 'ayah') {
        this.showAyah = !this.showAyah;
      }
    },
  },
};
</script>

<style scoped>
/* Tambahkan style kustom jika diperlukan */
</style>
