<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="text-white" height-hint="98" style="background-color: #8db62d;">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="../assets/buonaCartoon.svg">
          </q-avatar>
          Madam
        </q-toolbar-title>
        <q-space />
        <q-btn flat round dense icon="more_vert">
          <q-menu auto-close>
            <q-list dense>
              <q-item clickable>
                <q-item-section v-if="userStore.getLogged">
                  <div>Signed in as <strong>Mary</strong></div>
                </q-item-section>
                <q-item-section v-else>
                  Login
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item v-if="userStore.getLogged" clickable>
                <q-item-section>Your profile</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/home" label="home" />
        <q-route-tab to="/menu" label="menu" />

      </q-tabs>
    </q-header>

    <q-page-container style="background-color: #f2eac5 ;">
      <router-view />
    </q-page-container>



  </q-layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from 'stores/user-store'
export default defineComponent({
  name: 'SideLayout',
  components: {},
  setup() {
    const userStore = useUserStore()

    return { userStore };
  }
});
</script>