<script lang="ts" setup>

definePageMeta({
    layout: 'registered'
})
const supabase = useSupabaseClient()
import { columns } from "../columns/users"

const data = ref<any>([]) //type any will be removed after scehema design

onMounted(async () => {
    const { data: users } = await supabase
    .from('users')
    .select('*')

    data.value = users
})

</script>

<template>
    <DataTable :data="data" :columns="columns" class="container bg-white my-5" />
</template>