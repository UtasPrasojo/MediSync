<template>
  <div class="min-h-screen bg-gray-100">
    <div class="bg-white shadow-sm">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-xl font-semibold">Artikel Kesehatan</h1>
        <div class="flex items-center space-x-4">
          <i class="fas fa-user-circle text-2xl"></i>
          <img
            alt="User profile picture"
            class="rounded-full w-10 h-10"
            height="40"
            :src="userImage"
            width="40"
          />
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 py-6">
      <div class="flex space-x-6">
        <!-- Article Content -->
        <div class="w-2/3 h-full  bg-white rounded-lg shadow-md mr-4 px-6">
          <!-- Menambahkan padding di seluruh konten dalam div -->
          <div class="mb-4 my-6">
            <nav class="text-sm mb-4">
              <a class="text-gray-500" href="#">Dashboard</a>
              <span class="text-gray-500">/</span>
              <a class="text-gray-500" href="#">Artikel</a>
              <span class="text-gray-500">/</span>
              <span class="text-gray-700">Detail</span>
            </nav>
          </div>

          <img
            alt="Illustration of a person with glasses and balloons"
            class="w-full rounded-lg mb-4"
            src="/fotoartikel.png"
          />

          <div class="text-sm text-gray-500 mb-4">
            By
            <a class="text-blue-500" href="#">John Doe</a>
            <span class="mx-1">|</span>
            12 Januari 2024
          </div>

          <h2 class="text-2xl font-semibold mb-4">Pentingnya Gosok Gigi</h2>

          <p class="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur. Faucibus risus adipiscing amet nibh. Luctus ac
            fringilla urna mauris elit vitae sed turpis ultrices.
          </p>
          <p class="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur. Faucibus risus adipiscing amet nibh. Luctus ac
            fringilla urna mauris elit vitae sed turpis ultrices.
          </p>
          <p class="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur. Faucibus risus adipiscing amet nibh. Luctus ac
            fringilla urna mauris elit vitae sed turpis ultrices.
          </p>
        </div>

        <!-- Sidebar -->
        <div class="w-1/3">
          <div class="bg-white shadow-sm rounded-lg p-4 mb-6">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-lg font-semibold">Artikel Kesehatan</h3>
              <a class="text-blue-500 text-sm" href="#">Lihat Semua</a>
            </div>

            <div class="space-y-4">
              <div v-for="(article, index) in relatedArticles" :key="index" class="flex space-x-4">
                <img
                  :src="article.image"
                  alt="Illustration"
                  class="w-20 h-20 rounded-lg"
                  height="100"
                  width="100"
                />
                <div>
                  <h4 class="text-sm font-semibold">{{ article.title }}</h4>
                  <p class="text-xs text-gray-500">{{ article.description }}</p>
                  <a class="text-pink-500 text-xs" href="#">
                    Baca Selengkapnya <i class="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const userImage = ref(
      'https://storage.googleapis.com/a1aa/image/NsHsmgOtFMJjOJEs5cDBb6pqP3M3FdHPhCjLJDBKcBfCiUyJA.jpg'
    )
    const articleImage = ref(
      'https://storage.googleapis.com/a1aa/image/6fMUiedn2KuQu0kOLrkMn9ffb2PFbrbFb8PZw1fDHLDRgIlcC.jpg'
    )

    const relatedArticles = ref([
      {
        image:
          'https://storage.googleapis.com/a1aa/image/6fMUiedn2KuQu0kOLrkMn9ffb2PFbrbFb8PZw1fDHLDRgIlcC.jpg',
        title: 'Pentingnya Gosok Gigi',
        description: 'Here are the biggest enterprise technology acquisitions of 2021.'
      },
      {
        image:
          'https://storage.googleapis.com/a1aa/image/hhXFER66FjY6Pl5eDZgKdUWw2Cezb4d52duXHtzt10rEEpkTA.jpg',
        title: 'Pentingnya ASI',
        description: 'Here are the biggest enterprise technology acquisitions of 2021.'
      },
      {
        image:
          'https://storage.googleapis.com/a1aa/image/6fMUiedn2KuQu0kOLrkMn9ffb2PFbrbFb8PZw1fDHLDRgIlcC.jpg',
        title: 'Pentingnya Gosok Gigi',
        description: 'Here are the biggest enterprise technology acquisitions of 2021.'
      },
      {
        image:
          'https://storage.googleapis.com/a1aa/image/hhXFER66FjY6Pl5eDZgKdUWw2Cezb4d52duXHtzt10rEEpkTA.jpg',
        title: 'Pentingnya ASI',
        description: 'Here are the biggest enterprise technology acquisitions of 2021.'
      }
    ])

    return {
      userImage,
      articleImage,
      relatedArticles
    }
  }
}
</script>

<style>
body {
  font-family: 'Inter', sans-serif;
}
</style>
