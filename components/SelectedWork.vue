<script setup>
defineProps(['color', 'image', 'subheadline', 'headline']);

import DBStreckenagentTeaser from '../assets/DBStreckenagentTeaser.png';
import Confidential from '../assets/confidential.png';
import HEKTeaser from '../assets/HEKTeaser.png';
import LightelligenceTeaser from '../assets/LightelligenceTeaser.png';
</script>

<template>
    <div class="px-6 mx-auto lg:max-w-screen-xl space-y-4">
        <div>
            <Teaser color="lht" :image=Confidential subheadline="Lufthansa Technik" headline="Digitizing aircraft engine maintenance"/>
        </div>
        <div>
        <NuxtLink to="/db-streckenagent">
            <Teaser color="streckenagent" :image=DBStreckenagentTeaser subheadline="DB Streckenagent" headline="Compare mobility options at your location"/>
        </NuxtLink>
        </div>
        <div>
        <NuxtLink to="/hek-service-app">
            <Teaser color="hek" :image=HEKTeaser subheadline="HEK Service App" headline="Digital companion for health insurance"/>
        </NuxtLink>
        </div>
        <div>
        <NuxtLink to="/lightelligence">
            <Teaser color="lightelligence" :image=LightelligenceTeaser subheadline="OSRAM Lightelligence" headline="Design system for a scalable IoT-platform"/>
        </NuxtLink>
        </div>
    </div>
</template>