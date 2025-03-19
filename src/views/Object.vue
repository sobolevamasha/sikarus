<template>
    <div class="object">
        <hero :title="object.name" :background="background" :isSmall="true" />
        <div class="grid-container pt-16">
            <v-row>
                <v-col cols="12" lg="8">
                    <slider-big :items="object.sliderItems" />
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
            <v-row>
                <v-col cols="12">
                    <p v-html="object.detailText"></p>
                </v-col>
            </v-row>
        </div>

    </div>
</template>

<script>
import hero from '@/components/hero.vue';
import objectList from '@/store/objects';
import download from '@/components/download.vue';
import sliderBig from '@/components/slider-big.vue';

export default {
    name: "Object",
    components: {
        hero,
        download,
        sliderBig
    },
    data() {
        return {
            h1: 'Объект',
            //h4: 'Строим доверие',
            background: require('@/assets/objects.jpg'),
            //video: 'https://sika.scene7.com/is/content/sika/glo-skyline-loop'
        }
    },
    computed: {
        object() {
            return objectList[0].objects[3];
        }
    },
    mounted() {
        console.log('object: ', this.object);
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
}
</style>