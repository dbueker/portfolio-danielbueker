<script setup>
defineProps(['color', 'image', 'subheadline', 'headline']);

const colorVariants = {
    streckenagent: "bg-[#061350]",
    hek: "bg-[#51BCFF]",
    lightelligence: "bg-[#FF6600]"
};
</script>

<template>
    <div class="group space-y-6 md:hover:scale-[102%] md:active:scale-[99%] transition ease-in-out duration-[0.4s]">
        <div class="rounded px-20 py-20" :class="colorVariants[color]">
            <img :src=image alt="" class="object-scale-down"/>
        </div>
        <div>
            <div class="mb-[-4px]">
                <div class="relative overflow-hidden px-2 inline-block">
                    <span class="delay-200 absolute inset-0 bg-surface-variant md:group-hover:bg-surface-variant translate-x-[-100%] md:group-hover:translate-x-0 transition-transform ease-in-out duration-[0.2s]"></span>
                    <span class="delay-200 relative z-10 text-body text-on-background md:group-hover:text-on-surface-variant ease-in-out duration-[0.2s]">{{ subheadline }}</span>
                </div>
            </div>
            <div>
                <div class="relative overflow-hidden px-2 inline-block">
                    <span class="delay-300 absolute inset-0 bg-surface-variant md:group-hover:bg-surface-variant translate-x-[-100%] md:group-hover:translate-x-0 transition-transform ease-in-out duration-[0.2s]"></span>
                    <span class="delay-300 relative z-10 text-body-semibold text-on-background md:group-hover:text-on-surface-variant ease-in-out duration-[0.2s]">{{ headline }}</span>
                </div>
            </div>
        </div>
    </div>
</template>