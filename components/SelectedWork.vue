<script setup>
defineProps(['color', 'image', 'subheadline', 'headline']);

import DBStreckenagentTeaser from '../assets/DBStreckenagentTeaser.png';
import HEKTeaser from '../assets/HEKTeaser.png';
import LightelligenceTeaser from '../assets/LightelligenceTeaser.png';
</script>

<template>
    <div class="px-6 grid grid-cols-1 md:grid-cols-2 gap-20 lg:max-w-screen-lg mx-auto">
        <div>
        <NuxtLink to="/streckenagent">
            <Teaser color="streckenagent" :image=DBStreckenagentTeaser subheadline="Deutsche Bahn" headline="Mobility App"/>
        </NuxtLink>
        </div>
        <div class="md:row-span-2 md:mt-[240px]">
        <NuxtLink to="/hek-service-app">
            <Teaser color="hek" :image=HEKTeaser subheadline="HEK" headline="Insurance App"/>
        </NuxtLink>
        </div>
        <div>
        <NuxtLink to="/lightelligence">
            <Teaser color="lightelligence" :image=LightelligenceTeaser subheadline="OSRAM" headline="IoT-platform"/>
        </NuxtLink>
        </div>
    </div>
</template>