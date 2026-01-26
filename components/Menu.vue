<script setup>
</script>

<template>
    <div class="px-6 pt-6 space-x-6 flex justify-end items-center">
        <NuxtLink v-if="$route.path === '/'" to="/about"><p class="text-button text-lightmode-primary md:hover:opacity-70 transition ease-in-out duration-150 md:active:scale-[98%]">About</p></NuxtLink>
        <NuxtLink v-else to="/"><p class="text-button text-lightmode-primary md:hover:opacity-70 transition ease-in-out duration-150 md:active:scale-[98%]">Home</p></NuxtLink>
        <a href="https://www.linkedin.com/in/danielbueker/" target="_blank"><Button text="LinkedIn"/></a>
    </div>
</template>