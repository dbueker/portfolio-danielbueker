<script setup>
import Divider from './Divider.vue'
import TextTeaser from './TextTeaser.vue'
</script>

<template>
    <div class="bg-lightmode-surface dark:bg-darkmode-surface">
        <div class="md:flex w-full px-6 py-20 space-y-8 md:space-y-0 mx-auto lg:max-w-screen-xl">
            <p class="basis-full mr-20 text-chapter text-lightmode-on-surface dark:text-darkmode-on-surface">I have a focus on …</p>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div class="space-y-10">
                <TextTeaser headline="Experience Design" text="With a strong foundation in psychology I conduct and build on research to create thoughtful concepts and a holistic user experience."/>
                <Divider class="lg:hidden" />
                </div>
                <div class="space-y-10">
                <TextTeaser headline="Interface Design" text="I design human-centered interfaces that are as simple as possible. Profound knowledge in computer science and frontend technologies help me to realize those together with the developers."/>
                <Divider class="lg:hidden" />
                </div>
                <div class="space-y-10">
                <TextTeaser headline="Design Operations" text="Wether it’s building a design system or setting your products tone and voice, I always thrive to create a reliable foundation for my work. "/>
                </div>
            </div>
        </div>
    </div>
</template>