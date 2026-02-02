<script setup>
import Portrait from '../assets/PortraitDanielWide.jpg';
</script>

<template>
      <div>
        <div class="mx-auto lg:max-w-screen-xl space-y-20 md:space-y-32 mb-32 md:gap-x-10 pt-20 text-on-background">
          <div class="text-on-background grid justify-items-center px-6">
            <p class="font-display text-display-mobile lg:text-display-desktop text-center">Creating digital products since 2019</p>
          </div>
          <ImageComponent :image1=Portrait />
          <div class="px-6 space-y-6 md:w-2/3">
            <p class="text-headline-mobile lg:text-headline-desktop">I'm Daniel 👋</p>
            <Divider color="onLight"/>
            <p class="text-body pb-8 md:pb-10">7 years ago I started to design digital products and services. I have worked with startups, digital agencies and international organisations. My experience in product design, user research and project management allows me to create elegant solutions for complex business problems.</p>
            <a href="https://www.linkedin.com/in/danielbueker/" target="_blank"><Button color="onDark" text="Contact me"/></a>
          </div>
        </div>
        <Skillset />
        <HowIWork />
        <Experience />
      </div>
</template>