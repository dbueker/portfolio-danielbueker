<script setup>
defineProps(['color', 'image', 'subheadline', 'headline'])

const colorVariants = {
    streckenagent: "bg-secondary-streckenagent text-on-secondary-dark",
    hek: "bg-secondary-hek text-on-secondary-light",
    lightelligence: "bg-secondary-lightelligence text-on-secondary-dark"
}
</script>

<template>
    <div class="rounded pt-10 px-6 lg:px-12 lg:grid lg:grid-cols-5 lg:min-h-[560px] lg:gap-10 hover:scale-[102%] hover:drop-shadow-xl transition ease-in-out duration-[0.4s]" :class="colorVariants[color]">
        <img :src=image class="max-w-xs mx-auto lg:self-center lg:col-span-2 lg:justify-end" alt=""/>
        <div class="pt-8 pb-14 space-y-6 self-center lg:col-span-3 lg:order-first">
            <p class="text-chapter-mobile lg:text-chapter-desktop text-center lg:text-left">{{ subheadline }}</p>
            <p class="text-headline-mobile lg:text-headline-desktop text-center lg:text-left">{{ headline }}</p>
        </div>
    </div>
</template>