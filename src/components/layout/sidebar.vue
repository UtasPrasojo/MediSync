<script setup lang="ts">
import { ref } from 'vue'

// Tipe objek untuk setiap opsi



const dropdownOpen = ref(false);
const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

</script>

<template>
  
  <aside
    class="hidden md:block  sticky inset-y-0 top-0 left-0 w-64 h-screen bg-white border-r border-gray-200 dark:bg-white dark:border-gray-200"
  >
    <div class="flex items-center justify-center my-6">
      <img src="/public/stunting.svg" alt="Logo" width="44" height="42" />
      <h3 class="ml-2 font-bold text-xl">Stunting</h3>
    </div>

    <div class="flex justify-center h-1/3 flex-col py-5 px-3">
      <ul>
        <li>
          <router-link
            to="/user/dashboard"
            class="block text-gray-900 w-full dark:text-black hover:text-white"
          >
            <div class="rounded-lg w-full h-14 hover:bg-pink-600 dark:hover:bg-pink-600">
              <div class="flex items-center justify-start h-full  ml-12">
                <i-ic:baseline-home class="text-xl"></i-ic:baseline-home>
                <span class="ml-2 text-md">Dashboard</span>
              </div>
            </div>
          </router-link>
        </li>

        <!-- Dropdown for Kesehatan -->
        <li>
          <div @click="toggleDropdown" class="block text-gray-900 w-full dark:text-black hover:text-white cursor-pointer">
            <div class="rounded-lg w-full h-14 hover:bg-pink-600 dark:hover:bg-pink-600 ">
              <div class="flex items-center justify-start h-full ml-12">
                <i-lucide:file-chart-line class="text-xl"></i-lucide:file-chart-line>
                <span class="ml-2 text-md">Kesehatan</span>

                <i :class="dropdownOpen ? 'i-ep:arrow-down-bold' : 'i-ic:baseline-arrow-drop-down'" class="ml-2 text-xl"></i>
              </div>
            </div>
          </div>

          <!-- Dropdown items -->
          <ul v-if="dropdownOpen" class="ml-6 mt-2 space-y-2">
            <li>
              <router-link to="/user/checkup-child" class="flex items-center justify-center ml-10 my-3 text-gray-900 dark:text-black hover:text-pink-600">
                Perkembangan Anak
              </router-link>
            </li>
            <li>
              <router-link to="/user/health-mom" class="flex items-center justify-center mt-4 my-3 text-gray-900 dark:text-black hover:text-pink-600">
                Kesehatan Ibu
              </router-link>
            </li>
          </ul>
        </li>

        <li>
          <router-link
            to="/user/info-posyandu"
            class="block text-gray-900 w-full dark:text-black hover:text-white"
          >
            <div class="rounded-lg w-full h-14 hover:bg-pink-600 dark:hover:bg-pink-600">
              <div class="flex items-center justify-start ml-12 h-full">
                <i-uil:calender class="text-xl"></i-uil:calender>
                <span class="ml-2 text-md">Posyandu</span>
              </div>
            </div>
          </router-link>
        </li>

        <li>
          <router-link
            to="/user/article"
            class="block text-gray-900 w-full dark:text-black hover:text-white"
          >
            <div class="rounded-lg w-full h-14 hover:bg-pink-600 dark:hover:bg-pink-600">
              <div class="flex items-center justify-start ml-12 h-full">
                <i-material-symbols:article-outline
                  class="text-xl"
                ></i-material-symbols:article-outline>
                <span class="ml-2 text-md">Artikel</span>
              </div>
            </div>
          </router-link>
        </li>

        <li>
          <router-link
            to="/user/report-stunting"
            class="block text-gray-900 w-full dark:text-black hover:text-white"
          >
            <div class="rounded-lg w-full h-14 hover:bg-pink-600 dark:hover:bg-pink-600">
              <div class="flex items-center justify-start ml-12 h-full">
                <i-ic:outline-message class="text-xl"></i-ic:outline-message>
                <span class="ml-2 text-md">Laporkan Stunting</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped></style>
