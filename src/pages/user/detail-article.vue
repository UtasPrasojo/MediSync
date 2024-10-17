<template>
  <div class="min-h-screen bg-white">
    <div class="bg-white shadow-sm">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-xl font-semibold">Artikel Kesehatan</h1>
        <div class="hidden md:flex items-center space-x-4">
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

    <div class="container w-full mx-auto px-2 py-6">
      <div class="flex space-x-6">
        <!-- Article Content -->
        <div class="w-full md:w-3/4 h-full bg-white px-2">
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
            class="w-full mb-4"
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
            fringilla urna mauris elit vitae sed turpis ultrices. Lorem ipsum dolor sit amet
            consectetur. Faucibus risus adipiscing amet nibh. Luctus ac fringilla urna mauris elit
            vitae sed turpis ultrices. Lorem ipsum dolor sit amet consectetur. Faucibus risus
            adipiscing amet nibh. Luctus ac fringilla urna mauris elit vitae sed turpis ultrices.
            Lorem ipsum dolor sit amet consectetur. Faucibus risus adipiscing amet nibh. Luctus ac
            fringilla urna mauris elit vitae sed turpis ultrices.
          </p>
        </div>

        <!-- Sidebar -->
        <div class="hidden md:block w-1/4">
          <div class="bg-white shadow-sm rounded-lg p-2 mb-6">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-lg font-semibold">Artikel Kesehatan</h3>
              <a class="text-gray-500 text-sm" href="#">Lihat Semua</a>
            </div>

            <div class="space-y-4">
              <div v-for="(article, index) in relatedArticles" :key="index" class="flex space-x-4">
                <div class="flex flex-col rounded-lg shadow-md items-center">
                  <!-- Membungkus gambar dan teks -->
                  <img
                    :src="article.image"
                    alt="Illustration"
                    class="w-full h-32 rounded-lg mb-2 object-cover"
                    height="100"
                    width="100"
                  />
                  <div class="ml-4 min-h-32 item">
                    <!-- Mengatur teks agar terpusat -->
                    <div>
                      <h4 class="text-sm font-semibold">{{ article.title }}</h4>
                      <p class="text-xs text-gray-500">{{ article.description }}</p>
                    </div>
                    <div>
                      <a class="text-pink-500 text-xs" href="#">
                        Baca Selengkapnya
                        <i-lsicon:arrow-right-filled></i-lsicon:arrow-right-filled>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- mobile display -->
    <div class="md:hidden w-full px-4">
      <div class="bg-white shadow-sm rounded-lg p-2 mb-6">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-semibold">Artikel Kesehatan</h3>
          <a class="text-gray-500 text-sm" href="#">Lihat Semua</a>
        </div>

        <div class="space-y-4">
          <div
            v-for="(article, index) in relatedArticles"
            :key="index"
            class="flex flex-col items-center space-y-4"
          >
            <!-- Membungkus gambar dan teks -->
            <div class="flex flex-col rounded-lg shadow-md items-center w-full">
              <img
                :src="article.image"
                alt="Illustration"
                class="w-full h-32 rounded-lg mb-2 object-cover"
                height="100"
                width="100"
              />
              <div class=" w-full">
                <!-- Mengatur teks agar terpusat -->
                <h4 class="text-sm font-semibold ml-2">{{ article.title }}</h4>
                <p class="text-xs text-gray-500 ml-2">{{ article.description }}</p>
                <a class="text-pink-500 text-xs ml-2" href="#">
                  Baca Selengkapnya <i-lsicon:arrow-right-filled></i-lsicon:arrow-right-filled>
                </a>
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
