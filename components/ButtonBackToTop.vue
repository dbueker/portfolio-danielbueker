<script setup>
import ArrowTop from '../assets/ArrowTop.svg';

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
}
</script>

<template>
    <button @click="scrollToTop" class="flex rounded-full min-w-[80px] py-4 px-6 space-x-2 text-button border-2 border-lightmode-on-surface-variant-subdued dark:border-darkmode-on-surface-variant-subdued text-lightmode-on-surface-variant dark:text-darkmode-on-surface-variant md:hover:scale-[104%] md:active:scale-[102%] transition ease-in-out duration-200"><p>Back to top</p><img :src=ArrowTop alt="Arrow facing upwards"></button>
</template>