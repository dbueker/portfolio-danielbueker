<script setup>
</script>

<template>
    <div class="bg-lightmode-surface dark:bg-darkmode-surface px-6 py-20">
        <div class="space-y-16 md:space-y-0 md:grid md:grid-cols-4 md:gap-20 lg:mx-auto lg:max-w-screen-xl">
            <p class="text-chapter text-lightmode-on-surface dark:text-darkmode-on-surface">I can help you with</p>
            <div class="space-y-10 md:col-span-3">
                <div class="space-y-10">
                <AboutContent headline="Experience Design" text="With a strong foundation in psychology I conduct and build on research to create thoughtful concepts and a holistic user experience."/>
                <Divider />
                </div>
                <div class="space-y-10">
                <AboutContent headline="Interface Design" text="I design human-centered interfaces that are as simple as possible. Profound knowledge in computer science and frontend technologies help me to realize those together with the developers."/>
                <Divider />
                </div>
                <div class="space-y-10">
                <AboutContent headline="Design Operations" text="Wether it’s building a design system or setting your products tone and voice, I always thrive to create a reliable foundation for my work. "/>
                </div>
            </div>
        </div>
    </div>
</template>