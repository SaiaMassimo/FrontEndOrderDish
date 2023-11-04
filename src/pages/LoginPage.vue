<template>
    <q-page class="flex flex-center bg-grey-2">
        <q-card class="q-pa-md shadow-2 my_card" bordered>
            <q-form @submit="onSubmit" class="q-gutter-md">
                <q-card-section class="text-center">
                    <div class="text-grey-9 text-h5 text-weight-bold">Sign in</div>
                    <div class="text-grey-8">Sign in below to access your account</div>
                </q-card-section>
                <q-card-section>
                    <q-input dense outlined v-model="email" label="Email Address" lazy-rules
                        :rules="[val => val && val.length > 0]"></q-input>
                    <q-input dense outlined class="q-mt-md" v-model="password" type="password" label="Password" lazy-rules
                        :rules="[val => val && val.length > 0 || 'Please type something']"></q-input>
                </q-card-section>
                <q-card-section>
                    <q-btn style="
  border-radius: 8px;" color="dark" rounded size="md" label="Sign in" no-caps class="full-width" type="submit"></q-btn>
                </q-card-section>
                <q-card-section class="text-center q-pt-none">
                    <div class="text-grey-8">Don't have an account yet?
                        <a class="text-dark text-weight-bold" style="text-decoration: none">Sign
                            up.</a>
                    </div>
                </q-card-section>
            </q-form>
        </q-card>
    </q-page>
</template>
<style>
.my_card {
    width: 25rem;
    border-radius: 8px;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}
</style>
<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from 'stores/user-store'

export default defineComponent({

    name: 'LoginPage',
    components: {}

    ,
    setup() {
        const router = useRouter()
        const userStore = useUserStore()
        const email = ref('')
        const password = ref('')
        const username = ref('')
        return {
            email, password, username,
            onSubmit() {
                userStore.login()
                router.push({ path: '/profilePage' })
            },
        };
    }
});
</script>