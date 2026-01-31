<script setup>
</script>

<template>
    <div class="px-6 pt-6 space-x-6 flex justify-end mx-auto">
        <NuxtLink v-if="$route.path === '/'" to="/about"><p class="text-button text-on-background md:hover:text-on-background/60 transition ease-in-out duration-150 md:active:scale-[96%]">About</p></NuxtLink>
        <NuxtLink v-else to="/"><p class="text-button text-on-background md:hover:text-on-background/60 transition ease-in-out duration-150 md:active:scale-[98%]">Home</p></NuxtLink>
        <a href="https://www.linkedin.com/in/danielbueker/" target="_blank" class="text-button text-on-background md:hover:text-on-background/60 transition ease-in-out duration-150 md:active:scale-[98%]">LinkedIn</a>
    </div>
</template>