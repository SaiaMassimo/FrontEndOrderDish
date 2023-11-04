<template>
    <my-cart text-next="ordina" text-back="indietro"></my-cart>
    <div class="q-pa-md">
        <!-- Stack the columns on mobile by making one full-width and the other half-width -->

        <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
        <div class="row">
            <div class="col-6 col-md-4 justify-center align-center q-pa-md" @click="linkTo('/shopDish')">
                <div class="text-h5 text-center q-mb-md">Pizze</div>
                <div class="justify-center flex">
                    <img src="https://picsum.photos/500/300" style="height: 140px; max-width: 150px" />
                </div>
            </div>
            <div class="col-6 col-md-4 justify-center align-center q-pa-md">
                <div class="text-h5 text-center q-mb-md">Pizze in teglia</div>
                <div class="justify-center flex">
                    <img src="https://picsum.photos/500/300" style="height: 140px; max-width: 150px" />
                </div>
            </div>
            <div class="col-6 col-md-4 justify-center align-center q-pa-md">
                <div class="text-h5 text-center q-mb-md">Pizze del giorno</div>
                <div class="justify-center flex">
                    <img src="https://picsum.photos/500/300" style="height: 140px; max-width: 150px" />
                </div>
            </div>
            <div class="col-6 col-md-4 justify-center align-center q-pa-md">
                <div class="text-h5 text-center q-mb-md">Panini e focacce</div>
                <div class="justify-center flex">
                    <img src="https://picsum.photos/500/300" style="height: 140px; max-width: 150px" />
                </div>
            </div>
            <div class="col-6 col-md-4 justify-center align-center q-pa-md">
                <div class="text-h5 text-center q-mb-md">Colazione</div>
                <div class="justify-center flex">
                    <img src="https://picsum.photos/500/300" style="height: 140px; max-width: 150px" />
                </div>
            </div>
            <div class="col-6 col-md-4 justify-center align-center q-pa-md" @click="linkTo('/shopBeverage')">
                <div class="text-h5 text-center q-mb-md">Bibite</div>
                <div class="justify-center flex">
                    <img src="https://picsum.photos/500/300" style="height: 140px; max-width: 150px" />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useDishStore } from 'stores/menu-store'
import MyCart from 'src/components/MyCart.vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'MenuTypology',
    components: { MyCart },
    setup() {
        const store = useDishStore()
        const router = useRouter()
        /*const i: Ref<cartItem[]> = ref(store.menu.map((item, index) => ({ quantity: 0, dish: item })));*/
        const linkTo = (link: string) => {
            router.push({ path: link })
        }
        return { store, linkTo };

    }
});
</script>
  