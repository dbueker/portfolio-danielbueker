<script setup>
defineProps({
  image1: {
    default: null,
    required: true
  },
  image2: {
    default: null
  },
  image3: {
    default: null
  }
})
</script>

<template >
    <div v-if="image1 !== null && image2 === null && image3 === null">
        <img :src=image1 alt="" class="w-full"/>
    </div>

    <div v-else-if="image1 !== null && image2 !== null && image3 === null" class="grid grid-cols-1 lg:grid-cols-2">
        <img :src=image1 alt="" class="mx-auto"/>
        <img :src=image2 alt="" class="mx-auto"/>
    </div>


    <div v-else class="grid grid-cols-1 lg:grid-cols-2">
        <img :src=image1 alt="" class="mx-auto"/>
        <img :src=image2 alt="" class="mx-auto"/>
        <img :src=image3 alt="" class="lg:col-span-2 mx-auto"/>
    </div>
</template>