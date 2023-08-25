<script setup>
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="bg-lightmode-background dark:bg-darkmode-background">
    <Menu />
      <NuxtPage />
    <Footer />
  </div>
</template>