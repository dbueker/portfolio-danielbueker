<script setup>
import Button from '../components/Button.vue'
import Portrait from '../assets/Portrait.jpg'
</script>

<template>
    <div>
      <div class="px-6">
        <div class= "mx-auto lg:max-w-screen-xl">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-y-20 md:gap-x-10 place-items-center place-content-center mb-24 md:mb-28 lg:mb-32 pt-36 md:pt-40 lg:pt-48 text-lightmode-on-background dark:text-darkmode-on-background">
            <div class="space-y-6">
            <p class="text-title-mobile lg:text-title-desktop">I'm Daniel 👋</p>
            <div class="space-y-10">
              <p class="text-body-mobile lg:text-body-desktop">I’m a Digital Product Designer and currently live in the wonderful city of Hamburg. I strive to make our life as networked humans easier by creating digital services that are as simple, reliable and fun as possible. If you have problems to be solved or just want to chat, feel free to contact me!</p>
              <Button text="Download CV" />
            </div>
            </div>
            <img :src=Portrait alt="Portrait of Daniel" class="rounded w-full md:w-fit md:max-h-[640px]" />
          </div>
        </div>
      </div>
    </div>
</template>