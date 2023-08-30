<script setup>
defineProps(['headline', 'text'])
import Divider from './Divider.vue'
</script>

<template>
    <div class="space-y-4 lg:space-y-6 text-lightmode-on-surface dark:text-darkmode-on-surface">
        <p class="text-body-bold">{{ headline }}</p>
        <Divider class="hidden lg:block" />
        <p class="text-body">{{ text }}</p>
    </div>
</template>