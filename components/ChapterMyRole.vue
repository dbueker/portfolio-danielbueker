<script setup>
defineProps({
  text: {
    default: null,
    required: true
  },

  credits: {
    default: null,
  }
});
</script>

<template>
    <div class="px-6 gap-y-4 grid md:grid-cols-6 lg:max-w-screen-lg lg:mx-auto text-on-background">
        <p class="text-chapter md:col-start-3 md:col-span-4">My role</p>
        <p class="text-body md:col-start-3 md:col-span-4">{{ text }}</p>
        <div class="space-y-1 mt-10 md:col-start-3 md:col-span-4">
          <p class="text-body-semibold">Credits</p>
          <p class="text-body">{{ credits }}</p>
        </div>
    </div>
</template>