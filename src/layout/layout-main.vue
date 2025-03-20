<template>
    <div class="layout-main">

        <the-header />
        <v-main>
            <transition name="route" mode="out-in">
                <router-view />
            </transition>
        </v-main>
        <the-footer />
    </div>
</template>

<script>
import TheHeader from './the-header';
import TheFooter from './the-footer';
import countries from '@/components/countries.vue';

export default {
    name: "layout-main",
    components: {
        TheHeader,
        TheFooter,
        countries
    },
}
</script>

<style lang="scss">
.layout-main {
    @include up($md) {
        min-height: 100%;
        display: grid;
        grid-template-rows: 1fr auto;
    }

    & main {

        //margin-top: 75px;
        @include up($md) {
            //margin-top: 0;
        }

        @include up($lg) {
            //margin-top: -240px;
        }
    }
}
</style>