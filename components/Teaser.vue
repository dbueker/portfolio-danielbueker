<script setup>
defineProps(['color', 'image', 'subheadline', 'headline']);

const colorVariants = {
    streckenagent: "bg-[#061350] dark:bg-[#152151] text-[#FFFFFF] dark:text-[#FFFFFF]",
    hek: "bg-gradient-to-tr from-[#F2F3F6] from-10% to-[#9CE0F3] text-[#1D1B20] dark:bg-gradient-to-tr dark:from-[#DDDFE9] dark:from-10% dark:to-[#68C1D9] dark:text-[#1D1B20]",
    lightelligence: "bg-gradient-to-br from-[#D52727] via-[#D45500] from-20% to-[#874DBA] text-[#FFFFFF] dark:bg-gradient-to-br dark:from-[#B54545] dark:via-[#BC5815] dark:from-20% dark:to-[#8565A2] dark:text-[#FFFFFF]dark:"
};
</script>

<template>
    <div class="rounded pt-10 px-6 lg:px-12 lg:grid lg:grid-cols-5 lg:min-h-[560px] lg:gap-10 md:hover:scale-[102%] md:hover:drop-shadow-xl transition ease-in-out duration-[0.4s]" :class="colorVariants[color]">
        <div class="max-w-xs mx-auto lg:self-center lg:col-span-2 lg:justify-end">
            <img :src=image alt="" class="object-scale-down"/>
        </div>
        <div class="pt-8 pb-14 space-y-6 self-center lg:col-span-3 lg:order-first">
            <p class="text-chapter  text-center lg:text-left">{{ subheadline }}</p>
            <p class="text-headline-mobile lg:text-headline-desktop text-center lg:text-left">{{ headline }}</p>
        </div>
    </div>
</template>