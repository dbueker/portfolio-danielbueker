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
    <div v-if="headline !== null" class="px-6 gap-y-4 grid md:grid-cols-6 lg:max-w-screen-lg lg:mx-auto text-on-background">
        <p class="text-chapter md:col-start-3 md:col-span-4">{{ headline }}</p>
        <p class="text-body md:col-start-3 md:col-span-4">{{ text }}</p>
    </div>

    <div v-else>
      <div class="px-6 grid md:grid-cols-6 lg:max-w-screen-lg lg:mx-auto text-on-background">
            <p class="text-body md:col-start-3 md:col-span-4">{{ text }}</p>
      </div>
    </div>
</template>