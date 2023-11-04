<template>
    <div class="q-pa-md">
        <pre>{{ dishStore.menu }}</pre>
    </div>
    <q-page>
        <div>Nuovo piatto</div>
        <q-form @submit="salvaPiatto" style="max-width: 850px;">
            <q-input v-model="piatto.nome" label="Nome piatto" />
            <q-select v-model="ingredientiSelezionati" :options="dishStore.getIngredients" label="tipologia" multiple
                emit-value map-options :option-value="'id'" :option-label="'nameIngredient'" :menu-class="'mySelect'" />


            <q-select v-model="ingredientiSelezionati" :options="dishStore.getIngredients" label="Seleziona ingredienti"
                multiple emit-value map-options :option-value="'id'" :option-label="'name'" />
            <div class="row full-width justify-around">
                <q-input v-model="piatto.prezzoRidotto" label="Prezzo ridotto" type="number" />
                <q-input v-model="piatto.prezzo" label="Prezzo" type="number" />
            </div>
            <q-btn label="Salva" type="submit" />
        </q-form>
    </q-page>
</template>
<style scoped>
.mySelect {
    background-color: #ffcc00;
    /* Cambia il colore del menu a tua scelta */
    /* Altre personalizzazioni CSS qui */
}
</style>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useDishStoreOnline } from 'stores/menu-online-store'


export default defineComponent({
    name: 'ProvaAPi',
    components: {},
    data() {
        const dishStore = useDishStoreOnline()
        console.log(dishStore.getIngredients)
        return {
            piatto: {
                nome: '',
                prezzo: null,
                prezzoRidotto: null,
            },

            ingredientiSelezionati: [],
            dishStore
        };
    },
    async mounted() {
        //const restLink = new RestLink({ uri: "https://swapi.dev/api/" })

    },
    methods: {
        salvaPiatto() {
            // Qui puoi fare qualcosa con i dati del piatto, ad esempio inviarli al backend
            console.log("Piatto:", this.piatto);
            console.log("Ingredienti selezionati:", this.ingredientiSelezionati);
        },
    },
});
</script>
  