<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-200">
      <div class="bg-white p-8 rounded-lg shadow-lg w-96">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold">Laporan Stunting</h2>
          <button class="text-gray-500" @click="closeReport">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="text-center mb-6">
          <h3 class="text-xl font-semibold">Terimakasih atas Laporan Anda</h3>
          <div class="my-4">
            <img
              class="mx-auto"
              width="100"
              height="100"
              src="https://storage.googleapis.com/a1aa/image/l9zBSXvpwJaoFN5Fvfn2DLz2Qeg7d5tLxsxnKlrC1eSX7pGnA.jpg"
              alt="Shield with check mark icon"
            />
          </div>
        </div>
        <div class="mb-4">
          <div class="flex justify-between mb-2">
            <span class="text-gray-600">Nama Pelapor</span>
            <span class="text-pink-500">{{ report.namaPelapor }}</span>
          </div>
          <div class="flex justify-between mb-2">
            <span class="text-gray-600">Nomor Telepon</span>
            <span class="text-pink-500">{{ report.nomorTelepon }}</span>
          </div>
          <div class="flex justify-between mb-2">
            <span class="text-gray-600">Nama Anak</span>
            <span class="text-pink-500">{{ report.namaAnak }}</span>
          </div>
          <div class="flex justify-between mb-2">
            <span class="text-gray-600">Alamat Anak</span>
            <span class="text-pink-500">{{ report.alamatAnak }}</span>
          </div>
          <div class="flex justify-between mb-2">
            <span class="text-gray-600">Hasil Observasi</span>
            <span class="text-pink-500">{{ report.hasilObservasi }}</span>
          </div>
          <div class="flex justify-between mb-2">
            <span class="text-gray-600">Dokumen</span>
            <div class="flex space-x-2">
              <button class="flex items-center px-2 py-1 border rounded text-gray-600">
                <i class="fas fa-file-alt mr-1"></i> {{ report.dokumen[0] }}
              </button>
              <button class="flex items-center px-2 py-1 border rounded text-gray-600">
                <i class="fas fa-file-alt mr-1"></i> {{ report.dokumen[1] }}
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-between">
          <button class="px-4 py-2 bg-gray-200 rounded" @click="goBack">Kembali</button>
          <button class="px-4 py-2 bg-pink-500 text-white rounded" @click="finishReport">Selesai</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      // Data laporan yang ditampilkan
      const report = ref({
        namaPelapor: 'Bayu Gatra',
        nomorTelepon: '098765432345',
        namaAnak: 'Bayu Boyolali',
        alamatAnak: 'JL. Gunung Merapi V NO.7',
        hasilObservasi: 'xxxxxxxxxx',
        dokumen: ['FotoAnak.jpg', 'RumahAnak.pdf']
      });
  
      // Fungsi untuk menutup laporan (misalnya kembali ke halaman sebelumnya)
      const closeReport = () => {
        console.log('Form closed');
        // Tambahkan logika untuk menutup form atau kembali
      };
  
      // Fungsi untuk tombol kembali
      const goBack = () => {
        console.log('Navigating back...');
        // Tambahkan logika navigasi kembali
      };
  
      // Fungsi untuk menyelesaikan laporan
      const finishReport = () => {
        console.log('Report completed');
        // Tambahkan logika untuk menyelesaikan laporan
      };
  
      return {
        report,
        closeReport,
        goBack,
        finishReport
      };
    }
  };
  </script>
  
  <style scoped>
  /* Custom styling jika diperlukan */
  </style>
  