<!-- <route lang="yaml">
    meta:
      layout: blank
    </route> -->

    <template>
        <div class="flex items-center justify-center min-h-screen bg-opacity-100"> <!-- Adjusted for transparency -->
          <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-md"> <!-- Changed max-w-lg to max-w-md -->
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-lg font-semibold">Edit Artikel</h2>
              <button @click="closeModal" class="text-gray-500 hover:text-gray-700">
                <i class="fas fa-times"></i>
              </button>
            </div>
            <form @submit.prevent="submitForm">
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">Judul Artikel</label>
                <input type="text" v-model="articleTitle" placeholder="Input Judul" class="w-full border border-gray-300 rounded-md p-2">
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
                <textarea v-model="articleDescription" placeholder="Input Deskripsi" class="w-full border border-gray-300 rounded-md p-2 h-24"></textarea>
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">Waktu Publikasi</label>
                <div class="relative">
                    <n-date-picker v-model:value="timestamp" type="date" />
                  <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <i class="fas fa-calendar-alt text-gray-400"></i>
                  </div>
                </div>
              </div>
              <div class="mb-4">
                <label class="block text-sm font-medium text-gray-700 mb-1">Unggah Dokumen Anak</label>
                <div class="flex items-center">
                  <n-button type="primary" @click="chooseFile" >Choose file</n-button>
                  <span class="ml-3 text-gray-500">{{ fileName }}</span>
                </div>
              </div>
              <div class="flex justify-end space-x-2">
                <n-button type="tertiary" @click="goBack" >Kembali</n-button>
                <n-button type="primary" >Simpan Perubahan</n-button>
              </div>
            </form>
          </div>
        </div>
      </template>
      
      <script>
      import { ref } from 'vue';
      
      export default {
        setup() {
          const articleTitle = ref('');
          const articleDescription = ref('');
          const publishTime = ref('');
          const fileName = ref('No file chosen');
      
          const chooseFile = () => {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.onchange = (event) => {
              if (event.target.files.length > 0) {
                fileName.value = event.target.files[0].name;
              }
            };
            fileInput.click();
          };
      
          const submitForm = () => {
            console.log('Form submitted with:', {
              title: articleTitle.value,
              description: articleDescription.value,
              publishTime: publishTime.value,
              fileName: fileName.value,
            });
          };
      
          const closeModal = () => {
            articleTitle.value = '';
            articleDescription.value = '';
            publishTime.value = '';
            fileName.value = 'No file chosen';
          };
      
          const goBack = () => {
            console.log('Going back...');
          };
      
          return {
            articleTitle,
            articleDescription,
            publishTime,
            fileName,
            chooseFile,
            submitForm,
            closeModal,
            goBack,
          };
        },
      };
      </script>
      
      <style scoped>
      /* Additional styles can be added here if needed */
      </style>
      