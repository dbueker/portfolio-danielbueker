<script setup>
defineProps(['color', 'image', 'subheadline', 'headline']);

const colorVariants = {
    streckenagent: "bg-[#061350]",
    hek: "bg-[#51BCFF]",
    lightelligence: "bg-[#FF6600]"
};
</script>

<template>
    <div class="space-y-6 md:hover:underline md:hover:scale-[102%] md:active:scale-[99%] transition ease-in-out duration-[0.4s]">
        <div class="rounded px-20 py-20" :class="colorVariants[color]">
            <img :src=image alt="" class="object-scale-down"/>
        </div>
        <div>
            <p class="text-body text-on-background">{{ subheadline }}</p>
            <p class="text-body-semibold text-on-background">{{ headline }}</p>
        </div>
    </div>
</template>