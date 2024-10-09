<template>
  <div class="w-64 bg-white shadow-md">
    <div class="p-4 flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="42"
        viewBox="0 0 44 42"
        fill="none"
      >
        <path
          d="M21.365 1.15678C19.8719 0.0455612 17.9948 -0.284111 16.2122 0.250562L4.15408 3.86792C1.66998 4.61361 0 6.85631 0 9.45085V35.2231C0 37.0842 0.856134 38.7883 2.34917 39.8978C3.84247 41.0091 5.72156 41.3387 7.50212 40.8041L16.5036 38.103C16.2221 37.1746 16.0795 36.2058 16.0795 35.2231V23.5188C16.0795 21.0609 16.9758 18.7135 18.6076 16.9129C19.8053 15.5864 21.359 14.6078 23.0954 14.0853L23.7143 13.9085V5.83336C23.7143 3.97233 22.8582 2.26814 21.3649 1.15678H21.365Z"
          fill="#E74694"
        />
        <path
          d="M43.8114 19.9014V31.6057C43.8114 34.1984 42.1433 36.4431 39.6573 37.1867L27.5992 40.8042C27.0406 40.973 26.4718 41.0555 25.9091 41.0555C24.677 41.0555 23.4712 40.6616 22.4462 39.8979C21.9779 39.5482 21.572 39.1443 21.2384 38.6921C20.8325 38.1495 20.529 37.5446 20.3381 36.8954C20.336 36.8954 20.3341 36.8954 20.332 36.8973L20.336 36.8933C20.1814 36.3607 20.0969 35.8 20.0969 35.2232V23.5189C20.0969 22.317 20.4546 21.1897 21.0858 20.2531C21.7168 19.3165 22.6211 18.569 23.7144 18.1248C23.8893 18.0544 24.0682 17.99 24.2511 17.9359L25.7263 17.4938L36.3094 14.3184C38.0919 13.7838 39.9691 14.1134 41.4622 15.2248C42.9555 16.3361 43.8115 18.0403 43.8115 19.9014H43.8114Z"
          fill="#E74694"
        />
      </svg>
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
import { ref } from 'vue'

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
      { label: 'Data Bayi', icon: 'fas fa-baby-carriage' }
    ])
    return {
      menuItems
    }
  }
}
</script>
