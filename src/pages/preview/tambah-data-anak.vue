<!-- <route lang="yaml">
    meta:
      layout: blank
    </route> -->

<template>
  <div id="app" class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
      <!-- Header -->
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">Penambahan Data Anak</h2>
        <n-button class="text-gray-500 hover:text-gray-700" @click="closeForm">
          <i class="fas fa-times"></i>
        </n-button>
      </div>

      <!-- Form -->
      <n-form @submit.prevent="submitForm">
        <!-- Nama Anak -->
        <div class="mb-4">
          <n-input v-model:value="value" type="text" placeholder="Nama" />
        </div>

        <!-- NIK -->
        <div class="mb-4">
          <n-input v-model:value="value" type="number" placeholder="NIK" />
        </div>

        <!-- Tempat Lahir, Tanggal Lahir, Anak Ke -->
        <div class="hidden md:grid grid-cols-3 gap-4 mb-4">
          <div>
            <label class="block text-gray-700">Tempat Lahir</label>
            <n-select v-model:value="value" :options="options" />
          </div>
          <div>
            <label class="block text-gray-700">Tanggal Lahir</label>
            <div class="relative">
              <n-date-picker v-model:value="timestamp" type="date" />
            </div>
          </div>
          <div>
            <label class="block text-gray-700">Anak Ke</label>
            <n-select v-model:value="value" :options="options" />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mb-4 md:hidden">
          <div>
            <label class="block text-gray-700">Tempat Lahir</label>
            <n-select v-model:value="value" :options="options" />
          </div>
          <div>
            <label class="block text-gray-700">Tanggal Lahir</label>
            <div class="relative">
              <n-date-picker v-model:value="timestamp" type="date" />
            </div>
          </div>
        </div>
        <div class="block md:hidden">
          <label class="block text-gray-700">Anak Ke</label>
          <n-select v-model:value="value" :options="options" />
        </div>

        <!-- Golongan Darah, Tinggi Badan, Berat Badan mobile -->
        <div class="block md:hidden">
          <label class="block text-gray-700">Golongan Darah</label>
          <n-select v-model:value="value" :options="options" />
        </div>
        <div class="grid grid-cols-2 gap-4 mb-4 md:hidden">
          <div>
            <label class="block text-gray-700">Tinggi Badan</label>
            <n-input v-model:value="value" type="number" placeholder="Tinggi Badan" />
          </div>
          <div>
            <label class="block text-gray-700">Berat Badan</label>
            <n-input v-model:value="value" type="number" placeholder="Berat badan" />
          </div>
        </div>

        <!-- Golongan Darah, Tinggi Badan, Berat Badan -->
        <div class="hidden md:grid grid-cols-3 gap-4 mb-4">
          <div>
            <label class="block text-gray-700">Golongan Darah</label>
            <n-select v-model:value="value" :options="options" />
          </div>
          <div>
            <label class="block text-gray-700">Tinggi Badan</label>
            <n-input v-model:value="value" type="number" placeholder="Tinggi Badan" />
          </div>
          <div>
            <label class="block text-gray-700">Berat Badan</label>
            <n-input v-model:value="value" type="number" placeholder="Berat badan" />
          </div>
        </div>

        <!-- Unggah Dokumen -->
        <div class="mb-4">
          <label class="block text-gray-700">Unggah Dokumen Anak</label>
          <div class="flex items-center mt-1">
            <n-upload
              action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
              :default-file-list="fileList"
              list-type="image"
              :create-thumbnail-url="createThumbnailUrl"
            >
              <n-button>Choose File</n-button>
            </n-upload>
          </div>

          <!-- Hardcoded Uploaded Files -->
          <!-- <div class="flex flex-wrap mt-2">
            <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-md mr-2 mb-2"
              >Foto.pdf <i class="fas fa-times ml-1"></i
            ></span>
            <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-md mr-2 mb-2"
              >Akta.pdf <i class="fas fa-times ml-1"></i
            ></span>
            <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-md mr-2 mb-2"
              >KK.pdf <i class="fas fa-times ml-1"></i
            ></span>
            <span class="bg-gray-200 text-gray-700 px-3 py-1 rounded-md mr-2 mb-2"
              >KIA.pdf <i class="fas fa-times ml-1"></i
            ></span>
          </div> -->

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
        <div class="flex justify-end space-x-2">
          <n-button type="tertiary" @click="goBack"> Kembali </n-button>
          <n-button type="primary">Simpan</n-button>
        </div>
      </n-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        namaAnak: '',
        nik: '',
        tempatLahir: '',
        tanggalLahir: '',
        anakKe: '',
        golonganDarah: '',
        tinggiBadan: '',
        beratBadan: ''
      },
      uploadedFiles: [],
      selectedFileName: ''
    }
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log(this.form)
    },
    closeForm() {
      // Handle form close action
      console.log('Form closed')
    },
    handleFileUpload(event) {
      const files = event.target.files
      if (files.length > 0) {
        this.selectedFileName = files[0].name
        this.uploadedFiles.push({ name: files[0].name })
      }
    },
    triggerFileInput() {
      this.$refs.fileInput.click()
    },
    removeFile(index) {
      this.uploadedFiles.splice(index, 1)
    },
    goBack() {
      // Handle back button
      console.log('Go back')
    }
  }
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
</style>
