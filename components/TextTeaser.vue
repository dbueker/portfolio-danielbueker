<script setup>
defineProps(['headline', 'text'])
import Divider from './Divider.vue'
</script>

<template>
    <div class="space-y-4 text-lightmode-on-surface dark:text-darkmode-on-surface">
        <p class="text-body-bold">{{ headline }}</p>
        <p class="text-body">{{ text }}</p>
    </div>
</template>