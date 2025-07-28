<script lang="ts" setup>

definePageMeta({
    layout: 'registered'
})
const supabase = useSupabaseClient()

const data = ref<any>([]) //type any will be removed after scehema design

onMounted(async () => {
    const { data: scheduledEmails } = await supabase
    .from('scheduled_emails')
    .select('*')

    data.value = scheduledEmails
})

</script>

<template>
    <div class="container px-2 lg:p-0 my-4">
        <div>
            <h1 class="text-xl font-bold">Analytics</h1>
        </div>
        <div class="flex gap-4 mt-5 flex-wrap">
            <div class="border rounded-md bg-white p-4 flex flex-col flex-1 min-w-72">
                <span class="text-sm mb-1">Email Sent</span>
                <span class="text-xl font-bold">100</span>
                <span class="text-xs text-neutral-teint">20 last month</span>
            </div>
            <div class="border rounded-md bg-white p-4 flex flex-col flex-1 min-w-72">
                <span class="text-sm mb-1">Scheduled Emails</span>
                <span class="text-xl font-bold">2</span>
                <span class="text-xs text-neutral-teint">1 this week</span>
            </div>
            <div class="border rounded-md bg-white p-4 flex flex-col flex-1 min-w-72">
                <span class="text-sm mb-1">Active Users</span>
                <span class="text-xl font-bold">1500</span>
                <span class="text-xs text-neutral-teint">132 from dashboard</span>
            </div>
        </div>
    </div>
</template>