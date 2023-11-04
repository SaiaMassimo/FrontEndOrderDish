<template>
    <q-page class="row justify-center">
        <div style="max-width: 850px">
            <div class="q-pa-md justify-center">
                <q-card style="min-width: 350px">
                    <q-card-section>
                        <div class="text-h6">Il tuo carrello</div>
                    </q-card-section>
                    <q-card-section class="q-pt-none">
                        <q-list>
                            <q-item v-for="(item, index) in storeCart.getCart" :key="index">
                                <q-item-section>
                                    <q-item-label>{{ item.dish.name }}</q-item-label>
                                </q-item-section>
                                <q-item-section side>
                                    <q-item-label>
                                        Quantità: {{ item.quantity }}
                                        <q-btn icon="add" />
                                        <q-btn icon="remove" />
                                    </q-item-label>
                                </q-item-section>
                            </q-item>
                            <q-item v-for="(item, index) in storeCart.getCartBeverage" :key="index">
                                <q-item-section>
                                    <q-item-label>{{ item.beverage.name }}</q-item-label>
                                </q-item-section>
                                <q-item-section side>
                                    <q-item-label>
                                        Quantità: {{ item.quantity }}
                                        <q-btn icon="add" />
                                        <q-btn icon="remove" />
                                    </q-item-label>
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </q-card-section>
                    <q-card-section class="q-pt-none">
                        <div class="row">
                            <div class="col-6 text-left q-pl-md text-bold">
                                totale
                            </div>
                            <div class="col-6 text-right q-pr-md">
                                {{ storeCart.getTotal }} CHF
                            </div>
                        </div>

                    </q-card-section>
                </q-card>

                <q-card class="q-mt-md q-pa-md">
                    <div class="row">
                        <q-btn @click="dialogTime = true" class="col-6"> seleziona orario</q-btn>
                        <div class="col-6 text-right q-pa-md">
                            {{ selectedTime }}
                        </div>
                    </div>
                </q-card>
                <q-card class="q-mt-md q-pa-md">
                    <q-form @submit="onSubmit" class="q-gutter-md">
                        <div class="text-h6">Consegna</div>

                        <q-input v-model="city" label="città" stack-label />
                        <q-input v-model="address" label="indirizzo" stack-label placeholder="Via, Piazza, ..." lazy-rules
                            :rules="[val => val && val.length > 0 || 'Please type something']" />
                        <q-page-sticky position="bottom-right" :offset="[9, 9]">
                            <q-btn @click="onSubmit" type="submit">Conferma ordine</q-btn>
                        </q-page-sticky>
                    </q-form>
                </q-card>
                <q-dialog v-model="dialogTime">
                    <q-time v-model="selectedTime" :minute-options="[0, 15, 30, 45]"
                        :hour-options="[12, 13, 14, 15, 18, 19, 20, 21]" />
                </q-dialog>

            </div>

        </div>


    </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, watch, Ref } from 'vue';
import { useDishStore } from 'stores/menu-store'
import { useCartStore, cartItemBeverage } from 'stores/cart-store'
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';


export default defineComponent({
    name: 'RecapOrder',
    components: {},
    setup() {
        const $q = useQuasar()
        const storeCart = useCartStore()
        const dialogTime = ref(false)
        const selectedTime = ref('--:--');
        const address = ref('');

        const city = ref('Lugano');
        const timePickerOptions = {
            mask: 'HH:mm',
            timeFormat: '24hr',
            minutesInterval: 15,
            hoursOptions: {
                min: 8,
                max: 12
            }
        };
        const router = useRouter()
        return {
            storeCart, selectedTime, timePickerOptions, dialogTime, address, city,
            onSubmit() {
                if (selectedTime.value == '--:--') {
                    $q.notify({
                        color: 'red-5',
                        textColor: 'white',
                        icon: 'warning',
                        message: 'Seleziona un orario '
                    })
                }
                else {
                    router.push({ path: '/recapOrder' })
                }
            },
        };

    }
});
</script>
  