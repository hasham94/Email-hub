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
    <!-- flex-1 is needed here to stick the footer to the bottom -->
    <div class="my-5 flex-1"> 
        <DataTable :data="data" :columns="columns" class="container bg-white"/>
    </div>
</template>