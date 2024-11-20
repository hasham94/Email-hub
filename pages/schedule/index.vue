<script lang="ts" setup>

definePageMeta({
    layout: 'registered'
})
const supabase = useSupabaseClient()
import { columns } from "../../columns/scheduleEmails"

const data = ref<any>([]) //type any will be removed after scehema design

onMounted(async () => {
    const { data: scheduledEmails } = await supabase
    .from('scheduled_emails')
    .select('*')

    data.value = scheduledEmails
})

</script>

<template>
    <DataTable :data="data" :columns="columns" class="container bg-white my-5" />
</template>