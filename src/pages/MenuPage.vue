<template>
  <q-page class="row">
    <div class="col-md-3  q-display-flex q-item-center  q-pb-xl">
      <img src="../assets/buonaCartoon.svg" alt="Logo" class="q-mt-md q-mb-xl q-md-hidden"
        style="height: 100vh; position: fixed; z-index: 999; object-position: -100vh -10vh;" v-if="$q.screen.gt.sm" />
    </div>
    <div class="col-sm-12 col-md-9 ">
      <div class="q-pa-md" style="max-width: 850px">

        <div>
          <div class="row item-section q-mt-sm">
            <div class="col-8">PIZZE CLASSICHE</div>

            <div class="col-4 text-right">
              Prezzo
            </div>
          </div>
          <div v-for="item in dishStore.menu.filter(item => item.tipology == 'Piazza Classica')" :key="item.name">
            <div class="row item-section q-mt-sm">
              <div class="col-8">{{ item.name }}</div>

              <div class="col-4 text-right">
                {{ item.price }} CHF

              </div>
            </div>
            <div class="row undertext">{{ item.ingredients.map(ingredient => ingredient.name).join(', ') }}</div>
          </div>

        </div>
      </div>
    </div>


  </q-page>
  <!--<q-footer elevated class="text-white justify-center column relative" style="background-color: #f6f2cb  ;"
    v-model="stato">-->
  <div style="background-color: #d6cecd   ; margin-top: 4rem;">
    <div class="row justify-evenly q-pt-sm">
      <div class="column">
        <div class="row">

          <div class="q-ml-md text-black">Vieni a trovarci: <br> Madam <br> Via Giovanni Ferri 2 <br>LUGANO 6900</div>
        </div>

      </div>
      <div class="column">
        <div class="text-black">seguci su</div>
        <div class="row justify-center text-black">
          <q-btn flat round dense icon="img:icons/instagram.svg" href="https://www.instagram.com/madamlugano/" />
        </div>
      </div>
    </div>



    <div class="row justify-center text-black q-mt-sm text-caption">
      MADAM Copyright © 2023 - All rights reserved
    </div>
  </div>


  <!--<div elevated class="bg-grey-8 text-white justify-center column ">
    <div class="row justify-evenly">
      <div class="column">
        <div class="row">

          <div class="q-ml-md">Vieni a trovarci in: <br> Madam <br> Via fulvio pelli <br>LUGANO 6900</div>
        </div>

      </div>
      <div class="column">
        <div>seguci su</div>
        <div class="row justify-center">

          <q-btn flat round dense icon="img:../../public/icons/facebook.svg" />
          <q-btn flat round dense icon="img:../../public/icons/instagram.svg" />
        </div>
      </div>
    </div>



    <div class="row justify-center">
      MADAM Copyright © 2023 - All rights reserved
    </div>

  </div>-->
</template>
<style scoped>
.item-section {
  border-bottom: 1px solid #d6cecd;
  font-size: large;
}

.undertext {
  color: rgba(0, 0, 0, 0.54);
}

.imgback {
  /* Altezza del contenitore che conterrà l'immagine */
  background-image: url('../assets/buonaCartoon.svg');
  /* Inserisci l'URL dell'immagine */
  background-size: 230% 90%;
  /* Imposta il fattore di zoom e assicura che l'immagine copra completamente il contenitore */
  background-position: right;
  /* Posiziona l'immagine per mostrare solo il lato sinistro */
  background-attachment: fixed;
}
</style>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useDishStore } from 'stores/menu-store'

export default defineComponent({
  name: 'MenuPage',
  components: {},
  /*
  <q-list>
          <q-item v-for="item in dishStore.menu" :key="item.name">
            <q-item-section>
              <q-item-label class="item-section">{{ item.name }}</q-item-label>
              <q-item-label caption lines="2">
                {{ item.ingredients.map(ingredient => ingredient.name).join(', ') }}
              </q-item-label>
            </q-item-section>
            <q-item-section side top>
              <q-item-label caption class="item-section">{{ item.price }} CHF</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
        
        
        */
  setup() {
    const dishStore = useDishStore()
    const stato = ref(false)
    setTimeout(() => stato.value = true, 3000)
    return {
      dishStore, stato
    };
  }
});
</script>
  