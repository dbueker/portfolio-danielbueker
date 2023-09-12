<script setup>
defineProps({
  headline: {
    default: null,
  },
  text: {
    default: null,
    required: true
  }
});
</script>

<template>
    <div v-if="headline !== null" class="px-6 space-y-8 md:space-y-0 md:grid md:grid-cols-4 md:gap-20 lg:max-w-screen-lg lg:mx-auto">
        <p class="text-chapter text-lightmode-on-background dark:text-darkmode-on-background md:pt-1">{{ headline }}</p>
        <p class="text-body text-lightmode-on-background dark:text-darkmode-on-background md:col-span-3">{{ text }}</p>
    </div>

    <div v-else>
      <div class="px-6 md:max-w-screen-md md:mx-auto">
            <p class="text-body text-lightmode-on-background dark:text-darkmode-on-background">{{ text }}</p>
      </div>
    </div>
</template>