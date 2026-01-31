<script setup>
defineProps(['headline', 'text', 'color']);

const colorVariants = {
    onRed: "text-on-red",
    onDark: "text-on-surface-variant",
    onLight: "text-on-background"
};
</script>

<template>
    <div :class="['space-y-10 pb-10 md:pb-20', colorVariants[color]]">
        <Divider :color="color" />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-y-2">
            <p class="text-body-semibold">{{ headline }}</p>
            <p class="text-body col-span-2">{{ text }}</p>
        </div>
    </div>
</template>