<script setup>
defineProps(['text', 'color']);

const colorVariants = {
    onDark: "text-on-background border-on-background md:hover:text-on-surface-variant md:hover:bg-surface-variant",
    onLight: "text-on-surface-variant border-on-surface-variant md:hover:text-on-background md:hover:bg-background"
};
</script>

<template>
    <button :class="['border rounded-full min-w-[80px] py-6 px-8 text-button md:active:scale-[96%] transition ease-in-out duration-150', colorVariants[color]]"> {{ text }}</button>
</template>