<template>
    <div id="app" class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
        <!-- Header -->
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold">Penambahan Data Anak</h2>
          <button class="text-gray-500 hover:text-gray-700" @click="closeForm">
            <i class="fas fa-times"></i>
          </button>
        </div>
  
        <!-- Form -->
        <form @submit.prevent="submitForm">
          <!-- Nama Anak -->
          <div class="mb-4">
            <label class="block text-gray-700">Nama Anak</label>
            <input type="text" v-model="form.namaAnak" placeholder="Input Nama" class="w-full mt-1 p-2 border rounded-md">
          </div>
  
          <!-- NIK -->
          <div class="mb-4">
            <label class="block text-gray-700">NIK</label>
            <input type="text" v-model="form.nik" placeholder="Input NIK" class="w-full mt-1 p-2 border rounded-md">
          </div>
  
          <!-- Tempat Lahir, Tanggal Lahir, Anak Ke -->
          <div class="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label class="block text-gray-700">Tempat Lahir</label>
              <select v-model="form.tempatLahir" class="w-full mt-1 p-2 border rounded-md">
                <option>Pilih</option>
                <!-- Add more options as needed -->
              </select>
            </div>
            <div>
              <label class="block text-gray-700">Tanggal Lahir</label>
              <div class="relative">
                <input type="text" v-model="form.tanggalLahir" placeholder="Pilih" class="w-full mt-1 p-2 border rounded-md">
                <i class="fas fa-calendar-alt absolute top-3 right-3 text-gray-500"></i>
              </div>
            </div>
            <div>
              <label class="block text-gray-700">Anak Ke</label>
              <select v-model="form.anakKe" class="w-full mt-1 p-2 border rounded-md">
                <option>Pilih</option>
                <!-- Add more options as needed -->
              </select>
            </div>
          </div>
  
          <!-- Golongan Darah, Tinggi Badan, Berat Badan -->
          <div class="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label class="block text-gray-700">Golongan Darah</label>
              <select v-model="form.golonganDarah" class="w-full mt-1 p-2 border rounded-md">
                <option>Pilih</option>
                <!-- Add more options as needed -->
              </select>
            </div>
            <div>
              <label class="block text-gray-700">Tinggi Badan</label>
              <input type="text" v-model="form.tinggiBadan" placeholder="Input" class="w-full mt-1 p-2 border rounded-md">
            </div>
            <div>
              <label class="block text-gray-700">Berat Badan</label>
              <input type="text" v-model="form.beratBadan" placeholder="Input" class="w-full mt-1 p-2 border rounded-md">
            </div>
          </div>
  
          <!-- Unggah Dokumen -->
          <div class="mb-4">
    <label class="block text-gray-700">Unggah Dokumen Anak</label>
    <div class="flex items-center mt-1">
      <!-- Hidden File Input -->
      <input type="file" ref="fileInput" class="hidden" @change="handleFileUpload">
      <!-- Trigger Button for File Input -->
      <button type="button" @click="triggerFileInput" class="bg-gray-800 text-white px-4 py-2 rounded-md">
        Choose file
      </button>
      <span class="ml-2">{{ selectedFileName || 'No file chosen' }}</span>
    </div>

    <!-- Hardcoded Uploaded Files -->
    <div class="flex flex-wrap mt-2">
      <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-md mr-2 mb-2">Foto.pdf <i class="fas fa-times ml-1"></i></span>
      <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-md mr-2 mb-2">Akta.pdf <i class="fas fa-times ml-1"></i></span>
      <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-md mr-2 mb-2">KK.pdf <i class="fas fa-times ml-1"></i></span>
      <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-md mr-2 mb-2">KIA.pdf <i class="fas fa-times ml-1"></i></span>
    </div>

    <!-- Dynamically Uploaded Files -->
    <div class="flex flex-wrap mt-2">
      <span
        v-for="(file, index) in uploadedFiles"
        :key="index"
        class="bg-gray-200 text-gray-700 px-3 py-1 rounded-md mr-2 mb-2"
      >
        {{ file.name }}
        <i class="fas fa-times ml-1 cursor-pointer" @click="removeFile(index)"></i>
      </span>
    </div>
  </div>
  
          <!-- Buttons -->
          <div class="flex justify-end">
            <button type="button" class="bg-gray-200 text-gray-700 px-4 py-2 rounded-md mr-2" @click="goBack">Kembali</button>
            <button type="submit" class="bg-pink-600 text-white px-4 py-2 rounded-md">Simpan</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          namaAnak: "",
          nik: "",
          tempatLahir: "",
          tanggalLahir: "",
          anakKe: "",
          golonganDarah: "",
          tinggiBadan: "",
          beratBadan: "",
        },
        uploadedFiles: [],
        selectedFileName: "",
      };
    },
    methods: {
      submitForm() {
        // Handle form submission
        console.log(this.form);
      },
      closeForm() {
        // Handle form close action
        console.log("Form closed");
      },
      handleFileUpload(event) {
        const files = event.target.files;
        if (files.length > 0) {
          this.selectedFileName = files[0].name;
          this.uploadedFiles.push({ name: files[0].name });
        }
      },
      triggerFileInput() {
        this.$refs.fileInput.click();
      },
      removeFile(index) {
        this.uploadedFiles.splice(index, 1);
      },
      goBack() {
        // Handle back button
        console.log("Go back");
      },
    },
  };
  </script>
  
  <style scoped>
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");
  </style>
  