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
    <div class="px-6 mx-auto lg:max-w-screen-xl">
    <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="line in lines">
            <div class="space-y-2 bg-lightmode-surface rounded-small px-6 py-4 h-full">
                <p class="text-chapter text-lightmode-on-background-subdued">{{ line.leading }}</p>
                <p class="text-body text-lightmode-on-surface">{{ line.trailing }}</p>
            </div>
        </div>
    </div>
    </div>
</template>