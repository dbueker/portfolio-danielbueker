<script setup>
defineProps({
  headline: {
    default: String,
    required: true
  },
  text: {
    default: String,
    required: true
  },
  icon: {
    required: true
  }
})
let open = ref(false);
</script>

<template>
    <button @click="open = !open" class="bg-lightmode-primary dark:bg-darkmode-primary text-lightmode-on-primary dark:text-darkmode-on-primary rounded-[52px] py-5 pr-5 pl-10 w-full text-left group">
        <div class="flex justify-between items-center">
            <p class="text-body-large-bold-mobile lg:text-h1-desktop group-hover:opacity-70 transition-all duration-200 ease-in-out">{{ headline }}</p>
            <img :src=icon alt="" class="h-16 w-16"/>
        </div>
        <p v-if="open" class="text-body ">{{ text }}</p>
    </button>
</template>