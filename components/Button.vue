<script setup>
    defineProps(['text']);
</script>

<template>
    <button class="rounded min-w-[100px] py-6 px-10 bg-lightmode-background dark:bg-darkmode-background border-2 border-lightmode-primary dark:border-darkmode-primary text-button text-lightmode-on-background dark:text-darkmode-on-background hover:bg-accent hover:text-on-accent hover:border-accent transition ease-out delay-75 duration-200"> {{ text }}</button>
</template>