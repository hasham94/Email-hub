import { useRouter } from 'vue-router'

export default defineNuxtRouteMiddleware(() => {
    const user = useSupabaseUser()
    const router = useRouter()

    if (!user.value) {
        // Redirect to login if the user is not logged in
        // return router.push('/login')
    }
})