<script lang="ts" setup>

definePageMeta({
    layout: 'registered'
})
import { columns } from "../columns/users"
import { generateDummyData } from "../mockData/users" // this will be removed after API implementation

const data = ref<any>([]) //type any will be removed after scehema design

onMounted(() => {
    data.value = generateDummyData(10)
})

</script>

<template>
    <DataTable :data="data" :columns="columns" class="container bg-white my-5" />
</template>