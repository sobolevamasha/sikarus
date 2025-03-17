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

                            <ul class="my-8">
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
                                <!-- <div class="cmp-teaser cmp-teaser--document">
                                    <a target="_blank" class="download" :href="map.filePath">
                                        <div class="cmp-teaser__content">
                                            <div class="cmp-teaser__content--left">
                                                <i class="cmp-icon cmp-icon-download"></i>
                                            </div>
                                            <div class="cmp-teaser__content--right">
                                                <span class="cmp-teaser__content--right__title">
                                                    {{ map.title }}
                                                </span>
                                                <div>JPG - 331 KB (en)</div>
                                            </div>
                                        </div>
                                    </a>
                                    <button @click="addToCart" class="addToDocumentCart cart has-tooltip"
                                    :class="{'addToDocumentCart--active' : isAddedToCart}"
                                        >
                                        <i class="">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                                viewBox="0 0 768 768">
                                                <g id="icomoon-ignore">
                                                </g>
                                                <path fill="#000"
                                                    d="M415.5 288h177l-177-175.5v175.5zM511.5 511.5v-63h-96v-96h-63v96h-96v63h96v96h63v-96h96zM448.5 64.5l192 192v384q0 25.5-19.5 44.25t-45 18.75h-384q-25.5 0-45-18.75t-19.5-44.25l1.5-513q0-25.5 18.75-44.25t44.25-18.75h256.5z">
                                                </path>
                                            </svg>
                                        </i>
                                    </button>
                                </div> -->
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

    & a {
        display: block;
        color: $black !important;
    }

    & .v-expansion-panels {
        margin: 40px 0;
    }

    & .v-expansion-panel-header {
        background-color: $light-gray-section;
        margin-bottom: 10px;
    }

    & .mdi-menu-down::before {
        content: url('~@/assets/icons/down-open-big.svg');
        width: 24px;
        height: 24px;
    }

   


}
</style>