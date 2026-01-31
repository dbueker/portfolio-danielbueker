<script setup>
defineProps({
  columns: {
    type: String,
    default: null,
    required: true
  },
  headline: {
    type: String,
    default: null,
    required: true
  },
  text1: {
    type: String,
    default: null,
    required: true
  },
  text2: {
    type: String,
    default: null
  },
  date1: {
    type: String,
    default: null,
    required: true
  },
  date2: {
    type: String,
    default: null
  },
  color: {
    type: String,
    default: null,
    required: true
  }
});
const colorVariants = {
    onRed: "text-on-red",
    onDark: "text-on-surface-variant",
    onLight: "text-on-background"
};
</script>

<template>
  <div :class="[colorVariants[color]]">
    <div v-if="columns==='1'" class="space-y-10">
      <Divider :color="color" />
      <div class="grid grid-cols-2 md:grid-cols-7 gap-2 md:gap-6">
        <p class="text-body-semibold col-span-2">{{ headline }}</p>
        <p class="text-body md:col-span-3">{{ text1 }}</p>
        <p class="text-body md:col-span-2 justify-self-end">{{ date1 }}</p>
      </div>
    </div>

    <div v-else-if="columns==='2'" class="space-y-10">
      <Divider :color="color" />
      <div class="grid grid-cols-2 md:grid-cols-7 gap-2 md:gap-4">
        <p class="text-body-semibold col-span-2">{{ headline }}</p>
        <p class="text-body md:col-span-3">{{ text1 }}</p>
        <p class="text-body md:col-span-2 justify-self-end">{{ date1 }}</p>
        <p class="text-body md:col-start-3 md:col-span-3">{{ text2 }}</p>
        <p class="text-body md:col-span-2 justify-self-end">{{ date2 }}</p>
      </div>
    </div>
</div>
</template>