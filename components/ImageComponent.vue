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
  },
  preventStacking: {
    type: Boolean,
    default: false
  }
})
</script>

<template >
    <div v-if="image1 !== null && image2 === null && image3 === null">
        <img :src=image1 alt="" class="rounded w-full"/>
    </div>

    <div v-else-if="image1 !== null && image2 !== null && image3 === null && !preventStacking" class="grid grid-cols-1 lg:grid-cols-2">
        <img :src=image1 alt="" class="rounded-top lg:rounded-left mx-auto"/>
        <img :src=image2 alt="" class="rounded-bottom lg:rounded-right mx-auto"/>
    </div>

    <div v-else-if="image1 !== null && image2 !== null && image3 === null && preventStacking">
        <img :src=image1 alt="" class="rounded-top mx-auto"/>
        <img :src=image2 alt="" class="rounded-bottom mx-auto"/>
    </div>

    <div v-else-if="image1 !== null && image2 !== null && image3 !== null && !preventStacking" class="grid grid-cols-1 lg:grid-cols-2">
        <img :src=image1 alt="" class="rounded-top lg:rounded-top-left mx-auto "/>
        <img :src=image2 alt="" class="lg:rounded-top-right mx-auto "/>
        <img :src=image3 alt="" class="rounded-bottom lg:col-span-2 mx-auto "/>
    </div>

    <div v-else>
        <img :src=image1 alt="" class="rounded-top lg:rounded-top-left mx-auto"/>
        <img :src=image2 alt="" class="lg:rounded-top-right mx-auto"/>
        <img :src=image3 alt="" class="rounded-bottom lg:col-span-2 mx-auto"/>
    </div>
</template>