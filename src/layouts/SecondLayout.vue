<template>
    <q-layout class="bg-grey-1">
        <q-header elevated class="text-white" style="background: #8db62d" height-hint="61.59">
            <q-toolbar class="q-py-sm q-px-md">
                <q-btn round dense flat :ripple="false" :icon="fabGithub" size="19px" color="white" class="q-mr-sm"
                    no-caps />



                <q-space />

                <div class="q-pl-sm q-gutter-sm row items-center no-wrap">
                    <q-btn dense flat round size="sm" icon="notifications" />
                </div>
            </q-toolbar>
        </q-header>

        <q-page-container style="background-color: #f2eac5 ;">
            <router-view />
        </q-page-container>
    </q-layout>
</template>
<script>
import { ref } from 'vue'
import { fabGithub } from '@quasar/extras/fontawesome-v6'



export default {
    name: 'MyLayout',

    setup() {




        return {
            fabGithub,
        }
    }
}
</script>