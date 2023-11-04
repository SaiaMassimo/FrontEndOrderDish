<template>
  <q-page class="row justify-evenly align-center content-start">

    <div class="col-md-5 col-sm-12 q-mb-md text-center" v-if="cond" style="height: fit-content;">
      <transition appear enter-active-class="animated fadeIn delay-1s slow" leave-active-class="animated fadeOut">
        <div class="text-h1 title" style="color:#ee623b" v-if="cond">MADAM</div>

      </transition>
      <transition appear enter-active-class="animated fadeIn delay-2s slow" leave-active-class="animated fadeOut">

        <div class="text-h3">La <span style="color:#8db62d ">qualità</span> a
          portata di mano </div>
      </transition>
    </div>


    <div class="col-md-7 col-sm-12 text-center items-start imagediv">
      <div>
        <transition appear enter-active-class="animated fadeIn delay-3s slow" leave-active-class="animated fadeOut">
          <img src="../assets/buonaCartoon.svg" alt="Logo" class="q-mt-md pizzasvg" />
        </transition>
      </div>
    </div>
    <transition appear enter-active-class="animated fadeIn delay-3s slow" leave-active-class="animated fadeOut">
      <q-page-sticky position="bottom" :offset="[0, 18]">
        <q-btn to="/menu" outline rounded> Scopri il menu </q-btn>
      </q-page-sticky>
    </transition>

  </q-page>
</template>
<style>
.pizzasvg {
  max-width: 50vw;
  margin-top: 20vh;

}

.title {
  margin-top: 30vh;
}

@media (max-width: 1024px) {
  .text-h1 {
    font-size: 4rem
  }

  .text-h3 {
    font-size: 2rem
  }

  .pizzasvg {
    max-width: 80vw;
    width: 80vw;
    margin-top: 0px;
  }

  .title {
    margin-top: 3rem;
  }

}

@media (max-width: 800px) {
  .pizzasvg {
    margin-top: 4rem;

  }

}
</style>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: {},
  setup() {
    const cond = ref(true)
    //setTimeout(() => cond.value = true, 1000)
    return { cond };
  }
});
</script>
