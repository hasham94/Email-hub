<script setup lang="ts">
const supabase = useSupabaseClient()
const user = useSupabaseUser()

const isLoggedIn = ref<boolean>(false)
const userName = ref<string>('')
watch(user, () => {
  if (!user.value) {
      return navigateTo('/login')
  }
  isLoggedIn.value = true
}, { immediate: true })

const updateUser = async () => {
    const { error } = await supabase.auth.updateUser({
      data: {
        first_name: userName.value,
      },
    });

    if (error) throw error;
    return navigateTo('/')
}
</script>

<template>
    <div v-if="isLoggedIn" class="w-full flex justify-center h-screen items-center bg-white">
        <div class="w-96 max-w-full px-4 md:px-0 flex flex-col gap-3">
            <div class="mb-6">
                <h3 class="font-medium">Welcome to Email Hub</h3>
                <span class="text-neutral-teint font-light">Please enter your name</span>
            </div>
            <div class="flex flex-col gap-3">
                <Input v-model="userName" />
                <Button @click="updateUser">Let's Start</Button>
            </div>
        </div>
    </div>
    <div v-else>Waiting for login...</div>
</template>