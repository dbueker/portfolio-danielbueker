<script setup>
import Divider from './Divider.vue'
import TextTeaser from './TextTeaser.vue'
</script>

<template>
    <div class="bg-lightmode-surface dark:bg-darkmode-surface">
        <div class="w-full px-6 py-20 mx-auto lg:max-w-screen-xl">
            <p class="text-h2-mobile lg:text-h2-desktop text-lightmode-on-surface dark:text-darkmode-on-surface pb-10 lg:pb-20">I have a focus on …</p>
            <Divider class="lg:hidden" />
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
                <TextTeaser headline="Experience Design" text="With a strong foundation in psychology I conduct and build on research to create thoughtful concepts and a holistic user experience."/>
                <Divider class="md:hidden" />
                <TextTeaser headline="Interface Design" text="I design human-centered interfaces that are as simple as possible. Profound knowledge in computer science and frontend technologies help me to realize those together with the developers."/>
                <Divider class="md:hidden" />
                <TextTeaser headline="Design Operations" text="Wether it’s building a design system or setting your products tone and voice, I always thrive to create a reliable foundation for my work. "/>
            </div>
        </div>
    </div>
</template>