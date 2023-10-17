<script setup>
    defineProps(['text']);
</script>

<template>
    <button class="rounded-full min-w-[80px] py-2 px-6 text-button bg-lightmode-primary dark:bg-darkmode-primary text-lightmode-on-primary dark:text-darkmode-on-primary md:hover:scale-[104%] md:hover:drop-shadow-md md:active:scale-[102%] transition ease-in-out duration-200"> {{ text }}</button>
</template>