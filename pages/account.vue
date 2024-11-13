<script lang="ts" setup>

definePageMeta({
    layout: 'registered'
})

const supabase = useSupabaseClient()
const user = useSupabaseUser()

const logoutHandler = () => {
    supabase.auth.signOut()
    navigateTo('/login')
}

</script>

<template>
    <div class="container bg-white rounded p-2 mt-6"> 
        <div class="flex justify-between items-center">
            <h3>Hi {{ user?.user_metadata?.first_name }}</h3>
            <Button @click="logoutHandler">Logout</Button>
        </div>
    </div>
</template>