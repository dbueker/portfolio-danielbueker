<script setup>
</script>

<template>
    <div class="px-6 pt-6 space-x-6 flex justify-end items-center">
        <NuxtLink v-if="$route.path === '/'" to="/about"><p class="text-button text-lightmode-on-background dark:text-darkmode-on-background md:hover:opacity-70 transition ease-in-out duration-200">About</p></NuxtLink>
        <NuxtLink v-else to="/"><p class="text-button text-lightmode-on-background dark:text-darkmode-on-background md:hover:opacity-70 transition ease-in-out duration-200">Home</p></NuxtLink>
        <a href="https://www.linkedin.com/in/danielbueker/" target="_blank"><ButtonSmall text="LinkedIn"/></a>
    </div>
</template>