<script setup>
import Portrait from '../assets/PortraitDanielWide.jpg';
</script>

<template>
      <div>
        <div class="mx-auto lg:max-w-screen-xl space-y-32 md:gap-x-10 mb-32 pt-20 text-on-background">
          <div class="text-on-background grid justify-items-center px-6">
            <p class="font-display text-display-mobile lg:text-display-desktop text-center">Creating digital products since 2019</p>
          </div>
          <ImageComponent :image1=Portrait />
          <div class="px-6 space-y-6 md:w-2/3">
            <p class="text-headline-mobile lg:text-headline-desktop">I'm Daniel 👋</p>
            <Divider color="onLight"/>
            <p class="text-body pb-8 md:pb-10">I like to design and think about everything that requires human interaction. I strive to make our lifes easier by creating experiences that are as simple, reliable and fun as possible. I’d love to talk with you if you have problems to be solved or just want to chat.</p>
            <a href="https://www.linkedin.com/in/danielbueker/" target="_blank"><Button color="onDark" text="Contact me"/></a>
          </div>
        </div>
        <Skillset />
        <HowIWork />
        <Experience />
      </div>
</template>