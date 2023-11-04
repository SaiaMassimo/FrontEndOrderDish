<template>
    <q-page class="row q-mt-xl justify-center">
        <my-cart text-next="vai avanti" text-back="indietro">
        </my-cart>
        <div class="col-xs-12" style="max-width: 850px">
            <div class="q-pa-md">
                <div class="text-h3">Pizze</div>
                <q-list>
                    <q-item v-for="(item, index) in  storeCart.getI " :key="item.dish.name">
                        <q-item-section>
                            <q-item-label class="item-section">{{ item.dish.name }}</q-item-label>
                            <q-item-label caption lines="2">{{ item.dish.ingredients.map(ingredient =>
                                ingredient.name).join(",") }}</q-item-label>
                        </q-item-section>
                        <q-item-section side top>
                            <q-item-label caption class="item-section">{{ item.dish.price }} CHF</q-item-label>
                        </q-item-section>
                        <q-item-section style="max-width: 5rem">
                            <q-select rounded outlined v-model="item.quantity" :options="numberItemSelect"
                                @update:model-value="(newValue: number) => { handleSelectChange(index, newValue) }" />
                        </q-item-section>
                    </q-item>
                </q-list>
                <div class="text-h3">Colazione</div>
                <q-list>
                    <q-item v-for="(item, index) in  storeCart.getI " :key="item.dish.name">
                        <q-item-section>
                            <q-item-label class="item-section">{{ item.dish.name }}</q-item-label>
                            <q-item-label caption lines="2">{{ item.dish.ingredients.map(ingredient =>
                                ingredient.name).join(",") }}</q-item-label>
                        </q-item-section>
                        <q-item-section side top>
                            <q-item-label caption class="item-section">{{ item.dish.price }} CHF</q-item-label>
                        </q-item-section>
                        <q-item-section style="max-width: 5rem">
                            <q-select rounded outlined v-model="item.quantity" :options="numberItemSelect"
                                @update:model-value="(newValue: number) => { handleSelectChange(index, newValue) }" />
                        </q-item-section>
                    </q-item>
                </q-list>
            </div>
        </div>
        <q-page-sticky position="bottom-right" :offset="[9, 9]">
            <q-btn to="menuTypology">Torna a pietanze</q-btn>
            <q-btn @click="cliccami">procedi</q-btn>
        </q-page-sticky>
    </q-page>
</template>
<style scoped>
.item-section {
    border-bottom: 1px solid black;
    /* Bordo inferiore nero e solido */
    padding-bottom: 10px;
    /* Spazio tra il contenuto e il bordo inferiore */
}
</style>
<script lang="ts">
import { defineComponent, ref, watch, Ref } from 'vue';
import { useDishStore } from 'stores/menu-store'
import { useCartStore, cartItem } from 'stores/cart-store'
import MyCart from 'components/MyCart.vue'
import { useRouter } from 'vue-router';
export default defineComponent({
    name: 'MenuPage',
    components: { MyCart },
    setup() {
        const store = useDishStore()
        const storeCart = useCartStore()
        const router = useRouter()
        /*const i: Ref<cartItem[]> = ref(store.menu.map((item, index) => ({ quantity: 0, dish: item })));*/
        const cliccami = () => {
            if (storeCart.getCart.length > 0) {
                router.push({ path: '/shopBeverage' })
            } else {
                alert("aggiungi qualcosa al carrello")
            }
        }


        const handleSelectChange = (index: number, newValue: number) => {
            console.log("handle");
            storeCart.setIAtIndex(index, newValue);
        }
        const numberItemSelect: number[] = [0, 1, 2, 3, 4, 5, 6, 7]
        return { store, storeCart, handleSelectChange, numberItemSelect, cliccami };
    }
});
</script>
  