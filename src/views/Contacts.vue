<template>
    <div class="contacts">
        <hero :title="h1" :isSmall="true" />
        <div class="grid-container">
            <v-expansion-panels flat accordion>
                <v-expansion-panel v-for="(item, index) of contactItems" :key="index">
                    <v-expansion-panel-header expand-icon="mdi-menu-down">
                        <h4>{{ item.region }}</h4>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="text-left">
                        <div v-for="(place, index1) of item.places" :key="index1">

                            <ul class="my-8 contacts__items">
                                <li v-for="(subitem, index1) of place.subitems" :key="index1" class="mb-8">
                                    <h6 v-if="subitem.title"> {{ subitem.title }} </h6>
                                    <div v-if="subitem.text2" class="mb-2"> {{ subitem.text2 }} </div>
                                    <a v-if="subitem.phone" :href="'tel:' + subitem.phone" class="mb-2">Тел.: {{
                                        subitem.phone }} </a>
                                    <a v-if="subitem.mail" :href="'emailto:' + subitem.mail" class="mb-2">E-mail: {{
                                        subitem.mail }} </a>
                                    <div v-if="subitem.text3" class="mb-2"> {{ subitem.text3 }} </div>
                                    <div v-if="subitem.text4" class="mb-2"> {{ subitem.text4 }} </div>
                                    <div v-if="subitem.text5" class="mb-2"> {{ subitem.text5 }} </div>

                                </li>


                            </ul>

                            <div v-if="place.maps" v-for="(map, index2) of place.maps"
                                class="cell small-18 medium-9 large-6">

                                <download :title="map.title" :filePath="map.filePath" />
                            </div>

                        </div>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>


    </div>
</template>

<script>
import contactItems from '@/store/contact-items';
import hero from '@/components/hero.vue';
import download from '@/components/download.vue';
export default {
    name: "Contacts",
    components: {
        hero,
        download

    },
    data() {
        return {
            h1: 'Контакты',
            //h4: 'Строим доверие',
            //background: require('@/assets/hero-skyline-2.jpg'),
            //video: 'https://sika.scene7.com/is/content/sika/glo-skyline-loop'
        }
    },
    computed: {
        contactItems() {
            return contactItems;
        },
    },
    methods: {

    },
    mounted() {

    }

}
</script>

<style lang="scss">
.contacts {
    & h4 {
        margin: 0;
    }

    & h6 {
        font-weight: 700;
    }

    // & a {
    //     display: block;
    //     color: $black !important;
    // }
    &__items{
        & a {
        display: block;
        color: $black !important;
    }

    }




}
</style>