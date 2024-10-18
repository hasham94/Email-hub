<script lang="ts" setup>
import { columns } from "../columns/users" 
import { generateDummyData } from "../mockData/users" // this will be removed after API implementation

const data = ref<any>([]) //type any will be removed after scehema design

onMounted(() => {
    data.value = generateDummyData(10)
})

</script>

<template>
    <div class="my-5">
        <DataTable :data="data" :columns="columns" class="container bg-white"/>
    </div>
</template>