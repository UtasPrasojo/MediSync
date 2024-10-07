<template>
<div class="w-64 bg-white shadow-md">
    <div class="p-4 flex items-center">
      <img
        src="https://storage.googleapis.com/a1aa/image/hJ4jOfD8zzUCT6eGtrSyyOf9u30T9oeMvXoAMcR1Nsa0ifhcC.jpg"
        alt="App Logo"
        class="w-10 h-10"
      />
      <span class="ml-2 text-xl font-semibold">Stunting Apps</span>
    </div>
    <nav class="mt-4">
      <ul>
        <li
          v-for="item in menuItems"
          :key="item.label"
          class="flex items-center p-4"
          :class="item.active ? 'bg-pink-500 text-white' : 'hover:bg-gray-200'"
        >
          <i :class="item.icon + ' mr-2'"></i>
          <span>{{ item.label }}</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const menuItems = ref([
      { label: 'Dashboard', icon: 'fas fa-tachometer-alt', active: true },
      { label: 'Laporan Stunting', icon: 'fas fa-file-alt' },
      { label: 'Pemeriksaan Ibu Hamil', icon: 'fas fa-user-md' },
      { label: 'Pemeriksaan Bayi', icon: 'fas fa-baby' },
      { label: 'Artikel', icon: 'fas fa-newspaper' },
      { label: 'Jadwal Posyandu', icon: 'fas fa-calendar-alt' },
      { label: 'Master Data', icon: 'fas fa-database' },
      { label: 'Data Bayi', icon: 'fas fa-baby-carriage' },
    ]);
    return {
        menuItems,
    };
},
  };
  </script>