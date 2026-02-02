<script setup>
defineProps(['text', 'color']);

const colorVariants = {
    onDark: "border-on-background",
    onLight: "border-on-surface-variant",
};

</script>

<template>
    <button :class="colorVariants[color]" class="relative py-6 px-8 text-button group border overflow-hidden rounded-full min-w-[80px] md:active:scale-[96%]">
        <span v-if="color === 'onDark'" class="bg-background md:group-hover:bg-surface-variant absolute inset-0 translate-x-[-100%] md:group-hover:translate-x-0 transition duration-[0.3s] ease-in-out"></span>
        <span v-if="color === 'onLight'" class="bg-surface-variant md:group-hover:bg-background absolute inset-0 translate-x-[-100%] md:group-hover:translate-x-0 transition duration-[0.3s] ease-in-out"></span>
        <span v-if="color === 'onDark'" class="text-on-background md:group-hover:text-on-surface-variant relative z-10 transition duration-[0.3s] ease-in-out">{{ text }}</span>
        <span v-if="color === 'onLight'" class="text-on-surface-variant md:group-hover:text-on-background relative z-10 transition duration-[0.3s] ease-in-out">{{ text }}</span>
    </button>
</template>