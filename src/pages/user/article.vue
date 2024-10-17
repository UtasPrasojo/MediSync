<template>
  <div class="p-4">
    <div class="hidden md:flex justify-end items-center mb-4 shadow-md">
      <div class="flex items-center space-x-4">
        <i class="fas fa-bell text-xl"></i>
        <div class="flex items-center space-x-2">
          <img src="/profil.png" alt="Gambar profil pengguna" class="w-10 h-10 rounded-full" />
          <span class="font-medium">Faygo Umandana</span>
        </div>
      </div>
    </div>
    <div class="bg-white p-6 rounded-lg">
      <h1 class="text-2xl font-semibold">Artikel Kesehatan</h1>
      <p class="text-gray-600">Kumpulan Artikel Kesehatan</p>
      <nav class="flex items-center text-gray-600 mt-4">
        <a class="flex items-center text-gray-600 hover:text-gray-800" href="#">
          <i class="fas fa-home mr-2"></i>
          Dashboard
        </a>
        <span class="mx-2">/</span>
        <span>Artikel</span>
      </nav>
    </div>
    <div class="bg-white p-6 mt-6 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Artikel Kesehatan</h2>
      <div class="flex justify-between md:justify-end mb-6 w-full">
        <div class="w-full flex items-center mb-6 md:w-1/3">
          <n-input
            class="border border-gray-300 rounded-lg h-12 p-2 flex-grow"
            placeholder="Search"
            type="text"
          />
          <button
            class="bg-pink-500 text-white h-12 w-12 rounded-lg ml-2 flex items-center justify-center"
          >
            <i-material-symbols:search></i-material-symbols:search>
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-6">
        <div
          class="bg-white p-4 rounded-lg shadow-md"
          v-for="(article, index) in articles"
          :key="index"
        >
          <img
            :src="article.image"
            alt="Illustration"
            class="rounded-t-l"
            height="400"
            width="600"
          />
          <h3 class="text-lg font-semibold mt-4">{{ article.title }}</h3>
          <p class="text-gray-600">{{ article.description }}</p>
          <a class="text-pink-500 mt-4 inline-block" href="#">
            Baca Selengkapnya
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-6">
        <div
          class="bg-white p-4 rounded-lg shadow-md"
          v-for="(article, index) in articles"
          :key="index"
        >
          <img
            :src="article.image"
            alt="Illustration"
            class="rounded-t-lg"
            height="400"
            width="600"
          />
          <h3 class="text-lg font-semibold mt-4">{{ article.title }}</h3>
          <p class="text-gray-600">{{ article.description }}</p>
          <a class="text-pink-500 mt-4 inline-block" href="#">
            Baca Selengkapnya
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      <div class="flex justify-between items-center mt-6">
        <n-button class="bg-gray-200 text-gray-600 p-2 rounded-lg">Sebelum</n-button>
        <div class="flex space-x-2">
          <n-button
            v-for="(page, index) in pagination"
            :key="index"
            class="p-2 rounded-lg"
            :class="page === currentPage ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-600'"
          >
            {{ page }}
          </n-button>
        </div>
        <n-button class="bg-gray-200 text-gray-600 p-2 rounded-lg">Sesudah</n-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Data for articles
const articles = ref([
  {
    title: 'Pentingnya Gosok Gigi',
    description:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    image:
      'https://storage.googleapis.com/a1aa/image/6iZ5DImgU2ZeRatAwFujmLqECgW8St1SDQuxypvQH4eFxrjTA.jpg'
  },
  {
    title: 'Pentingnya ASI',
    description:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    image:
      'https://storage.googleapis.com/a1aa/image/EjciwTWOYlqpMhKbXeG6z2FcFBawYA7cV0ZFzewevyHMiXHnA.jpg'
  },
  {
    title: 'Pentingnya Gosok Gigi',
    description:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    image:
      'https://storage.googleapis.com/a1aa/image/6iZ5DImgU2ZeRatAwFujmLqECgW8St1SDQuxypvQH4eFxrjTA.jpg'
  },
  {
    title: 'Pentingnya ASI',
    description:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    image:
      'https://storage.googleapis.com/a1aa/image/EjciwTWOYlqpMhKbXeG6z2FcFBawYA7cV0ZFzewevyHMiXHnA.jpg'
  }
  // Add more articles as needed
])

// Pagination data
const pagination = ref([1, 2, 3])
const currentPage = ref(1)
</script>

<style>
body {
  font-family: 'Inter', sans-serif;
}
</style>
