<script lang="ts" setup>
const supabase = useSupabaseClient()

const templates = ref<any>([])
definePageMeta({
    layout: 'registered'
})

const getTemplates = async () => {
    const { data } = await supabase
        .from('templates')
        .select('*')

    templates.value = data
}

onMounted(() => {
    getTemplates()
})

const deleteTemplateHandler = async (id: number) => {
    const { data, error } = await supabase
    .from('templates')
    .delete()
    .eq('id', id)

    if(error) {
        console.log('error', error)
        return
    }
    getTemplates()
}

</script>

<template>
    <div class="container bg-white p-6 mt-6 rounded flex flex-col">
        <NuxtLink to="/email/new" class="bg-black text-white py-2 px-4 rounded ml-auto mb-6">Create New</NuxtLink>
        <div v-if="templates?.length" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="template in templates" :key="template.id"
                class="p-6 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 relative">
                <span class="text-xl font-medium text-gray-900">{{ template.name }}</span>
                <div class="mt-3 text-gray-700 text-sm leading-relaxed" v-html="template.content"></div>
                <NuxtLink :to="`email/${template.id}`" class="text-xs text-neutral-teint absolute top-4 right-4">edit</NuxtLink>
                <button @click="() => deleteTemplateHandler(template.id)" class="text-xs text-neutral-teint absolute top-4 right-10 p-0">delete</button>
            </div>
        </div>
        <div v-else class="text-center flex flex-col gap-5">
            <img class="w-80 h-full max-w-full m-auto" src="~/assets/images/no-email.png" alt="no emails" />
            <p>Let's get started to create your first email template</p>
            <NuxtLink class="max-w-48 m-auto bg-black text-white rounded py-2 px-5" to="/email/new">Create Template
            </NuxtLink>
        </div>
    </div>
</template>