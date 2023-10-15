<script setup>
defineProps(['headline', 'text']);
</script>

<template>
    <div class="space-y-4 text-lightmode-on-surface dark:text-darkmode-on-surface">
        <p class="text-body-bold">{{ headline }}</p>
        <p class="text-body">{{ text }}</p>
    </div>
</template>