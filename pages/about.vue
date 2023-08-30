<script setup>
import Skillset from '../components/Skillset.vue'
import Portrait from '../assets/Portrait.jpg'
</script>

<template>
    <div>
      <div class="px-6 mx-auto lg:max-w-screen-xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-y-20 md:gap-x-10 place-items-center place-content-center mb-24 md:mb-28 lg:mb-32 pt-20 text-lightmode-on-background dark:text-darkmode-on-background">
          <div class="space-y-6">
            <p class="text-h1-mobile lg:text-h1-desktop">I'm Daniel 👋</p>
            <p class="text-body ">I’m a Digital Product Designer and currently live in the wonderful city of Hamburg. I strive to make our life as networked humans easier by creating digital services that are as simple, reliable and fun as possible. If you have problems to be solved or just want to chat, feel free to contact me!</p>
          </div>
          <img :src=Portrait alt="Portrait of Daniel" class="rounded w-full md:w-fit md:max-h-[640px]" />
        </div>
      </div>
      <Skillset />
    </div>
</template>