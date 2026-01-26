<script setup>
const props = defineProps({
  title: String,
  subtitle: String
});
</script>

<template>
    <div class="w-full pt-20 mb-24 md:mb-28 lg:mb-32">
        <div class="w-full px-6 mx-auto space-y-10 lg:max-w-screen-xl mb-20 text-on-background">
          <p class="text-chapter  ">{{ subtitle }}</p>
          <p class="text-title-mobile lg:text-title-desktop">{{ title }}</p>
        </div>
        <slot></slot>
    </div>
</template>