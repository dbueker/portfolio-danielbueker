<script setup>
import Portrait from '../assets/Portrait.jpg';
</script>

<template>
      <div>
        <div class="px-6 mx-auto lg:max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-y-20 md:gap-x-10 place-items-center place-content-center mb-24 md:mb-28 lg:mb-32 pt-20 text-lightmode-on-background dark:text-darkmode-on-background">
          <div class="space-y-6">
            <p class="text-headline-mobile lg:text-headline-desktop">I'm Daniel 👋</p>
            <p class="text-body ">I like to design and think about everything that requires human interaction. I strive to make our life easier by creating interfaces and experiences that are as simple, reliable and fun as possible. If you have problems to be solved or just want to chat, feel free to <a class="text-body-bold text-lightmode-primary dark:text-darkmode-primary md:hover:opacity-70 transition ease-in-out duration-150" href="https://www.linkedin.com/in/danielbueker/" target="_blank">contact me</a><span class="text-body-bold">.</span></p>
          </div>
          <img :src=Portrait alt="Portrait of Daniel" class="rounded w-full md:w-fit md:max-h-[640px]" />
        </div>
        <Skillset />
        <HowIWork />
      </div>
</template>