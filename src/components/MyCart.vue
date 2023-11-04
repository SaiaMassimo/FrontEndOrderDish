<template>
    <div class="q-pa-md q-gutter-sm">
        <q-dialog v-model="dialogCart">
            <q-card style="min-width: 350px" v-if="storeCart.getCountItem > 0">
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
                                    <q-btn icon="add" @click="incrementQuantity(item)" />
                                    <q-btn icon="remove" @click="decrementQuantity(item)" />
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
                                    <q-btn icon="add" @click="incrementQuantityB(item)" />
                                    <q-btn icon="remove" @click="decrementQuantityB(item)" />
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


                <q-card-actions align="right" class="text-primary">
                    <q-btn flat :label="textBack" v-close-popup />
                    <q-btn flat :label="textNext" v-close-popup @click="linkToNext" />
                </q-card-actions>
            </q-card>
            <q-card style="min-width: 350px" v-else>
                <q-card-section>
                    <div class="text-h6">Il tuo carrello è ancora vuoto</div>
                </q-card-section>
            </q-card>
        </q-dialog>
    </div>
    <q-page-sticky position="top-right" :offset="[9, 9]">
        <q-btn dense color="purple" round icon="shopping_basket" class="q-ml-md" @click="dialogCart = true">
            <q-badge color="red" floating>{{ storeCart.getCountItem }}</q-badge>
        </q-btn>
    </q-page-sticky>
</template>
<script lang="ts">
import { defineComponent, ref, watch, Ref } from 'vue';
import { useCartStore, cartItem, cartItemBeverage } from 'stores/cart-store'
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'MyCart',
    components: {},
    props: {
        textBack: String,
        textNext: String,
    },
    setup(props) {
        const router = useRouter()
        const incrementQuantity = (item: cartItem) => {
            storeCart.incrementDish(item)
        }
        const decrementQuantity = (item: cartItem) => {
            storeCart.decrementDish(item)
        }
        const incrementQuantityB = (item: cartItemBeverage) => {
            storeCart.incrementBeverage(item)
        }
        const decrementQuantityB = (item: cartItemBeverage) => {
            storeCart.decrementBeverage(item)
        }
        const linkToNext = () => {
            if (storeCart.getCartBeverage.length > 0) {
                router.push({ path: '/checkoutOrder' });
            } else {
                router.push({ path: '/shopBeverage' });
            }

        }
        const storeCart = useCartStore()
        const dialogCart = ref(false)
        return { storeCart, dialogCart, incrementQuantity, decrementQuantity, incrementQuantityB, decrementQuantityB, linkToNext };
    }
});
</script>
  