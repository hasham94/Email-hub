<script lang="ts" setup>
import { ref } from "vue";
import { useForm } from 'vee-validate'
import * as yup from 'yup';
const supabase = useSupabaseClient()


const isEmailSubmit = ref(false)
const loading = ref(false)

const { values, errors, defineField } = useForm({
    validationSchema: yup.object({
        email: yup.string().email().required(),
    }),
});

const [email, emailProps] = defineField('email');

const submitLogin = async () => {

    if (email.value) {
        try {
            loading.value = true
            const { error } = await supabase.auth.signInWithOtp({ email: email.value, options: {
                shouldCreateUser: true,
                emailRedirectTo: 'http://localhost:3001/login/confirm'
            } })
            if (error) throw error
            isEmailSubmit.value = true
        } catch (error) {
            // error here
        } finally {
            loading.value = false
        }
    }
}
</script>

<template>
    <div class="w-full flex justify-center h-screen items-center bg-white">
        <div class="w-96 max-w-full px-4 md:px-0 flex flex-col gap-3">
            <div class="mb-6">
                <h3 class="font-medium">Welcome to Email Hub</h3>
                <span class="text-neutral-teint font-light">Sending newsletters easy way</span>
            </div>
            <div class="flex flex-col gap-3" v-if="!isEmailSubmit">
                <Input v-model="email" />
                <span class="text-red-500 text-sm">{{ errors.email }}</span>
                <Button @click="submitLogin">Get Magic Link</Button>
                <span class="block mt-3 text-xs">By singning in, you agree to out Terms and Services and Privacy
                    Policy</span>
            </div>
            <div v-else>
                <p>Magic Link sent to <span class="text-sky-600">{{ email }}</span></p>
                <p class="text-neutral-teint font-light text-sm">did not recieve the link? resent it.</p>
            </div>
        </div>
    </div>
</template>