<template>
  <div class="flex flex-nowrap overflow-hidden">
    <layout-sidebar />
    <main class="flex-1 overflow-auto overflow-x-hidden">
      <layout-navbar />
      <router-view />
    </main>
  </div>
</template>
