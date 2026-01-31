<script setup>
defineProps(['color']);

const colorVariants = {
    onDark: "bg-on-surface-variant",
    onLight: "bg-on-background",
    onRed: "bg-on-red"
};
</script>

<template>
    <div :class="['h-px w-full', colorVariants[color]]"></div>
</template>