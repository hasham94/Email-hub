<script lang="ts" setup>

definePageMeta({
    layout: 'registered'
})

</script>

<template>
    <div class="container bg-white p-6 mt-6 rounded"> 
        <div class="text-center flex flex-col gap-5">
            <img class="w-80 h-full max-w-full m-auto" src="~/assets/images/no-email.png" alt="no emails" />
            <p>Let's get started to create your first email template</p>
            <NuxtLink class="max-w-48 m-auto bg-black text-white rounded py-2 px-5" to="/email/create-new">Create Template</NuxtLink>
        </div>
    </div>
</template>