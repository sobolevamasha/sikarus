<template>
    <div class="object">
        <!-- <hero :title="object.name" :background="background" :isSmall="true" /> -->
        <!-- <breadcrumbs :level1="level1" :level2="level2" :level3="object.name" /> -->
        <div class="grid-container section-margin">
            <v-row>
                <v-col cols="12" lg="8">
                    <slider-big :items="object.sliderItems" />

                    <div class="text-left">
                        <span>{{ object.date }}</span>
                        //
                        <span>{{ object.location }}</span>
                    </div>
                </v-col>
                <v-col cols="12" lg="4">
                    <div v-if="object.about" class="object__about">
                        <h4>О проекте</h4>
                        <ul class="pt-4">
                            <li v-for="(item, index) of object.about" :key="index" v-if="item.head || item.value">
                                <h6>{{ item.head }}</h6>
                                <span>{{ item.value }}</span>
                            </li>
                        </ul>
                    </div>
                </v-col>
            </v-row>
            <v-row class="mt-8">
                <v-col cols="12">
                    <p v-html="object.detailText"></p>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <h3>Использованные продукты Sika</h3>
                    <ul class="object__products">
                        <li v-for="(product, index) in products" :key="index">
                            <router-link to="/product"></router-link>
                            <h4> {{ product.name }} </h4>
                            <div>{{ product.descr }}</div>
                        </li>
                    </ul>
                </v-col>
            </v-row>
        </div>

    </div>
</template>

<script>
import hero from '@/components/hero.vue';
import objectList from '@/store/objects';
import download from '@/components/brochure.vue';
import sliderBig from '@/components/slider-big.vue';
import breadcrumbs from '@/components/breadcrumbs.vue';
import products from '@/store/products';
import router from '@/router';

export default {
    name: "Object",
    components: {
        hero,
        download,
        sliderBig,
        breadcrumbs
    },
    data() {
        return {
            h1: 'Объект',
            //h4: 'Строим доверие',
            background: require('@/assets/objects.jpg'),
            //video: 'https://sika.scene7.com/is/content/sika/glo-skyline-loop'
            level1: 'Главная',
            level2: 'Объекты',
        }
    },
    computed: {
        object() {
            return objectList[0].objects[3];
        },
        products() {
            return products;
        }
    },
    mounted() {

    }
}
</script>

<style lang="scss">
.object {
    &__about {
        padding: 25px 45px;
        background-color: $light-gray-section;
        text-align: left;

        & li {
            &:not(:first-child) {
                margin-top: 20px;
            }
        }

        & h6 {
            font-weight: 700;
            margin-bottom: 0;
        }
    }

    & p {
        font-size: 18px;
    }

    & h3 {
        margin-bottom: 26px;
    }

    &__products {
        display: grid;
        //flex-direction: column;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 15px;
        justify-content: center;
        @include up($sm) {
            grid-template-columns: repeat(2, 1fr);
        }
        @include up($md) {
            grid-template-columns: repeat(4, 1fr);
        }

        & li {
            padding: 25px;
            box-shadow: 0 1px 2px #0003, 0 1px 3px #0000001a;
            background-color: #fff;
            border: 1px solid #e0e0e0;
            outline: 1px solid transparent;
            position: relative;
            transition: all 0.2s ease;

                &:hover {
                  
                    background-color: $sika-yellow;
                    color: $white !important;
                }

            & h4 {
                font-weight: 700;
            }

            & a {
                color: $black !important;
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                //z-index: 10;
                
                
            }
        }



    }
}
</style>