<template>
  <div class="min-h-screen bg-white">
    <div class="bg-white shadow">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center mb-6">
        <div class="flex flex-col">
          <h1 class="text-xl font-semibold">Artikel</h1>
          <h2 class="text-lg text-gray-600">Informasi tentang data artikel</h2>
        </div>
        <div class="flex items-center space-x-4">
          <i class="fas fa-bell text-gray-600"></i>
          <img
            src="https://storage.googleapis.com/a1aa/image/CUrVzPuqgnZmC9HbfhWgAPNkDwOCvJNHjqegc9KUq9ZgylkTA.jpg"
            alt="User profile picture"
            class="w-10 h-10 rounded-full"
            width="40"
            height="40"
          />
        </div>
      </div>
    </div>

    <div class="container bg-white rounded-lg shadow-md px-4 py-6">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-semibold">Informasi tentang data artikel</h2>
        <div class="flex items-center space-x-2">
          <!-- Added a flex container for alignment -->
          <div class="relative">
            <!-- Add relative positioning for the icon -->
            <n-input v-model:value="value" type="text" placeholder="Search" class="pl-10" />
            <i class="fas fa-search absolute left-3 top-2.5 text-gray-400"></i>
          </div>
          <n-button class="bg-pink-600 text-white px-4 py-2 rounded-full">Search</n-button>
          <n-button class="bg-pink-600 text-white px-4 py-2 rounded-full">Tambah Artikel</n-button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Loop over articles -->
        <div
          class="bg-white shadow rounded-lg overflow-hidden"
          v-for="(article, index) in articles"
          :key="index"
        >
          <img
            :src="article.image"
            alt="People working on laptops"
            class="w-full h-48 object-cover"
            width="400"
            height="200"
          />
          <div class="bg-white shadow rounded-lg overflow-hidden flex flex-col h-full">
            <img
              alt="People working on laptops"
              class="w-full h-48 object-cover"
              src="https://storage.googleapis.com/a1aa/image/1UizLpg3xVrwNJDDVUU0dqSKS5ohwusDv9jfi6pupHeiylkTA.jpg"
            />
            <div class="p-4 flex-1">
              <h3 class="text-lg font-semibold">{{ article.title }}</h3>
              <p class="text-gray-600 mt-2">{{ article.description }}</p>
              <div class="mt-4 flex space-x-2 items-center">
                <!-- Buttons aligned in a row -->
                <button class="bg-pink-600 text-white px-4 py-2 rounded-full">Edit</button>
                <button class="bg-pink-600 text-white px-4 py-2 rounded-full">Hapus</button>
                <button class="bg-pink-600 text-white px-4 py-2 rounded-full ml-auto">
                  Detail
                </button>
                <!-- Push the Detail button to the right -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 flex justify-between items-center">
        <n-pagination v-model:page="page" :page-count="100" />
        <p>Menampilkan 7 dari 21 Data</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Artikel',
  setup() {
    // Sample data for the articles, you can replace it with actual data or use API calls
    const articles = ref([
      {
        title: 'Noteworthy technology acquisitions 2021',
        description:
          'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
        image:
          'https://storage.googleapis.com/a1aa/image/1UizLpg3xVrwNJDDVUU0dqSKS5ohwusDv9jfi6pupHeiylkTA.jpg'
      },
      {
        title: 'Noteworthy technology acquisitions 2021',
        description:
          'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
        image:
          'https://storage.googleapis.com/a1aa/image/1UizLpg3xVrwNJDDVUU0dqSKS5ohwusDv9jfi6pupHeiylkTA.jpg'
      },
      {
        title: 'Noteworthy technology acquisitions 2021',
        description:
          'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
        image:
          'https://storage.googleapis.com/a1aa/image/1UizLpg3xVrwNJDDVUU0dqSKS5ohwusDv9jfi6pupHeiylkTA.jpg'
      },
      {
        title: 'Noteworthy technology acquisitions 2021',
        description:
          'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
        image:
          'https://storage.googleapis.com/a1aa/image/1UizLpg3xVrwNJDDVUU0dqSKS5ohwusDv9jfi6pupHeiylkTA.jpg'
      }
    ])

    return {
      articles
    }
  }
}
</script>

<style scoped>
body {
  font-family: 'Inter', sans-serif;
}
</style>
