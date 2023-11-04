<template>
    <q-page class="row q-mt-xl justify-center">
        <my-cart text-next="vai avanti" text-back="indietro">
        </my-cart>
        <div class="col-xs-12" style="max-width: 850px">
            <div class="q-pa-md">
                <q-list>
                    <q-item v-for="(item, index) in  storeCart.getIBeverage " :key="item.beverage.name">
                        <q-item-section>
                            <q-item-label class="item-section">{{ item.beverage.name }}</q-item-label>
                        </q-item-section>
                        <q-item-section side top>
                            <q-item-label caption class="item-section">{{ item.beverage.price }} CHF</q-item-label>
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
            <q-btn to="shopDish">Torna a pietanze</q-btn>
            <q-btn>Procedi</q-btn>
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
import { useCartStore, cartItemBeverage } from 'stores/cart-store'
import MyCart from 'components/MyCart.vue';

export default defineComponent({
    name: 'MenuPage',
    components: { MyCart },
    setup() {
        const store = useDishStore()
        const storeCart = useCartStore()
        //const i: Ref<cartItemBeverage[]> = ref(store.menuBeverage.map((item, index) => ({ quantity: 0, beverage: item })));
        const handleSelectChange = (index: number, newValue: number) => {
            console.log("handle");
            storeCart.setIBeverageAtIndex(index, newValue);
        }
        const numberItemSelect = [1, 2, 3, 4, 5, 6, 7]
        return { store, numberItemSelect, storeCart, handleSelectChange };
    }
});
</script>
  