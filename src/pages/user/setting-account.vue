<script setup lang="ts">
import DataAkun from '../user/setting-data-parent.vue'
import Anak from '../user/setting-data-child.vue'
import Keamanan from '../user/user-change-password.vue'
</script>

<template>
  <div>
    <div class="hidden md:flex items-center space-x-2 pl-4">
      <i class="fas fa-home text-gray-500"></i>
      <span class="text-black ml-2">Dashboard</span>
      <span class="text-black">/</span>
      <span class="text-black">Pengaturan</span>
    </div>
    <!-- Profil dan Icon -->
    <!-- tampilan mobile -->
    <div>
      <div class="flex md:hidden items-center pl-4">
        <i class="fas fa-home text-gray-500"></i>
        <span class="text-gray-800 ml-2">Dashboard</span>
        <span class="text-gray-800">/</span>
        <span class="text-gray-800">Pengaturan</span>
      </div>
    </div>
    <div class="md:flex flex-col hidden pb-4 pl-4">
      <h1 class="text-2xl font-semibold">Pengaturan Akun</h1>
      <p class="text-gray-500">Silahkan manage akun anda disini</p>
    </div>

    <!-- tampilan mobile -->
    <div class="flex md:hidden pb-4">
      <div class="pl-4">
        <h3 class="text-lg font-semibold">Pengaturan Akun</h3>
        <p class="text-xs text-gray-500">Silahkan manage akun anda disini</p>
      </div>
    </div>

    <div class="flex justify-start">
      <div class="w-full mx-6">
        <n-tabs type="segment" animated>
          <n-tab-pane name="Data Akun" tab="Data Akun"> <DataAkun /> </n-tab-pane>
          <n-tab-pane name="Anak" tab="Anak"> <Anak /> </n-tab-pane>
          <n-tab-pane name="Keamanan" tab="Keamanan"> <Keamanan /> </n-tab-pane>
        </n-tabs>
      </div>
    </div>
  </div>
</template>
