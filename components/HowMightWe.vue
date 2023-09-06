<script setup>

const props = defineProps({
  problem: String,
  howMightWe: String,
  solution: String
});

const { problem, howMightWe, solution } = toRefs(props);

const modals = ref([{ headline: 'Problem', text:problem, color:'red' }, { headline: 'How might we', text:howMightWe, color:'blue' }, { headline: 'To', text:solution, color:'green' }  ])

const colorVariantsTop = {
    red: 'bg-utility-red',
    blue: 'bg-utility-blue',
    green: 'bg-utility-green'
  }

const colorVariantsBottom = {
    red: 'bg-utility-lightred',
    blue: 'bg-utility-lightblue',
    green: 'bg-utility-lightgreen'
  }
</script>

<template>
  <div class="px-6 grid grid-rows-auto gap-4 md:max-w-screen-md md:mx-auto">
    <div v-for="modal in modals">
      <div class="text-on-utility-dark py-2 px-6 rounded-t-[16px]" :class="colorVariantsTop[modal.color]">
        <p class="text-body-bold">{{ modal.headline }}</p>
      </div>
      <div class="text-on-utility-light pt-4 pb-6 px-6 rounded-b-[16px] w-full" :class=colorVariantsBottom[modal.color]>
        <p class="text-body-semibold">{{ modal.text }}</p>
      </div>
    </div>
  </div>
</template>