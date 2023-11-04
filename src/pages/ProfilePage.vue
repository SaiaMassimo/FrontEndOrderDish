<template>
    <q-page>
        <div class="row q-mt-xl justify-around align-center">
            <div class="col-12 col-md-6 q-pa-md" style="max-width: 500px;">
                <q-card flat bordered class="full-width">
                    <q-card-section>
                        <div class="text-h6">Lista ordini</div>
                    </q-card-section>

                    <q-card-section class="q-pt-none q-px-xl">

                        <div v-for="item in userStore.getOrders" :key="item.date.getTime" class="column">
                            <q-separator />
                            <div class="row justify-between">
                                <div>
                                    {{ DateParse(item.date) }}
                                </div>
                            </div>
                            <div class="row justify-between " v-for="dishOreder in item.dishs" :key="dishOreder.dish.name">
                                <div>{{ dishOreder.dish.name }}</div>
                                <div class="">
                                    {{ dishOreder.quantity }}
                                </div>
                            </div>
                            <div class=" text-right text-bold">{{ item.total }}</div>

                        </div>
                        <q-separator />

                    </q-card-section>
                </q-card>
            </div>
            <div class="col-12 col-md-6 q-pa-md" style="max-width: 500px;">
                <q-card flat bordered>
                    <q-card-section>
                        <div class="text-h6">Promozioni</div>
                    </q-card-section>
                    <q-card-section class="q-pt-none">
                        Pizza gratis
                        <q-linear-progress rounded size="15px" :value="progress" color="secondary" class="q-mt-sm" />
                        4/5 pizze
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </q-page>
</template>
  
<script lang="ts">
import { useUserStore } from 'src/stores/user-store';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ProfilePage',
    components: {},
    setup() {
        const DateParse = (date: Date) => {
            return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
        }
        const userStore = useUserStore()
        const progress = 0.4
        return { userStore, progress, DateParse };
    }
});
</script>
  