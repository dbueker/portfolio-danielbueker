<script setup>

const props = defineProps({
  product: String,
  role: String,
  date: String,
  credits: String,
  client: String
});

const { product, role, date, credits, client } = toRefs(props);

const lines = ref([{ leading: 'Product', trailing:product }, {leading: 'My Role', trailing:role }, {leading: 'Date', trailing:date }, {leading: 'Project of', trailing:credits }, {leading: 'Client', trailing:client }  ])
</script>

<template>
    <div>
    <div class="w-full grid grid-cols-2 md:grid-cols-3 gap-4">
        <div v-for="line in lines">
            <div class="space-y-2 bg-lightmode-surface dark:bg-darkmode-surface rounded p-10 h-full">
                <p class="text-chapter-mobile lg:text-chapter-desktop text-lightmode-on-background-subdued dark:text-darkmode-on-background-subdued">{{ line.leading }}</p>
                <p class="text-body-mobile lg:text-body-desktop text-lightmode-on-surface dark:text-darkmode-on-surface">{{ line.trailing }}</p>
            </div>
        </div>
    </div>
    </div>
</template>