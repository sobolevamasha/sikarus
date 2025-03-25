<template>
    <div class="product">
        <hero :title="title" :background="background" :isSmall="true" />
        <div class="grid-container my-4 my-sm-8 my-lg-16">
            <div class="product__main">
                <img class="product__img" v-if="product.previewImg" :src="product.previewImg" />
                <div class="product__right">
                    <h1> {{ product.name }}</h1>
                    <h4 class="cmp-line-clamp cmp-line-clamp--3">{{ product.descr }}</h4>
                    <p>{{ product.detailText }}</p>
                    <ul class="cmp-product__attributes">
                        <li v-for="(benifit, index1) in product.benifits">
                            {{ benifit.benifit }}
                        </li>
                    </ul>

                    <div class="product__main--links">
                        <a>Техническое описание</a>
                        <a>Показать все документы</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="product__info">
            <div class="grid-container my-4 my-sm-8 my-lg-16">
                <nav class="product__info--navigation">
                    <ul>
                        <li>Описание</li>
                        <li>Характеристики</li>
                        <li>Применение</li>
                        <li>Документы</li>
                        <li>Видео</li>
                    </ul>
                </nav>

                <ul class="product__info--description">
                    <li v-for="(item, index) in product.descriptionItems">
                        <h4>{{ item.name }}</h4>
                        <ul class="list-style">
                            <li v-for="(subitem, index2) in item.items" class="list-style">
                                {{ subitem.item }}
                            </li>
                        </ul>
                    </li>
                </ul>

                <div class="product__info--chars">
                    <h2>Характеристики</h2>
                    <v-expansion-panels flat accordion>
                        <v-expansion-panel>
                            <v-expansion-panel-header expand-icon="mdi-menu-down">
                                <h3>Информация о материале</h3>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="text-left">
                                <ul>
                                    <li v-for="(char, indexChar) in product.chars">
                                        <h4>{{ char.name }}
                                        </h4>
                                        <p>{{ char.value }}</p>
                                    </li>
                                </ul>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>

                </div>

                <div class="product__info--usage">

                    <h2>Применение</h2>
                    <v-expansion-panels flat accordion>
                        <v-expansion-panel v-for="(usage, indexUsage) in product.usage">
                            <v-expansion-panel-header expand-icon="mdi-menu-down">
                                <h3>{{ usage.title }}</h3>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="text-left">
                                <ul>
                                    <li v-for="(item, indexItem) in usage.info">
                                        <h4>{{ item.name }}
                                        </h4>
                                        <p>{{ item.value }}</p>
                                    </li>
                                </ul>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>

                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.product {
    &__img {
        max-width: 250px;
        object-fit: contain;

        @include up($md) {
            max-width: 350px;
            margin: 0 50px;
        }
    }

    &__main {
        display: flex;
        text-align: left;
        flex-direction: column;
        align-items: center;

        @include up($md) {
            flex-direction: row;
            align-items: flex-start;
        }

        & p {
            font-size: 20px;
        }

        & li {
            font-size: 18px;
            position: relative;
            margin-left: 30px;

            &::before {
                position: absolute;
                content: url('@/assets/icons/check.svg');
                width: 20px;
                height: 20px;
                top: 3px;
                left: -30px;
            }
        }

        & h4 {
            font-weight: 700;
        }

        &--links {
            margin-top: 40px;
            text-align: right;
            display: flex;
            flex-direction: column;

            @include up($md) {
                display: block;
            }

            & a {
                color: $black !important;
                text-transform: uppercase;
                font-weight: 700;
                padding: 10px 0;
                transition: all 0.3s ease-in;

                @include up($md) {
                    padding: 20px;
                }

                &:hover {
                    color: $sika-yellow !important;
                }

            }
        }
    }

    &__info {

        & h4 {
            font-weight: 700;
            margin-bottom: 10px;
            border-bottom: 1px solid #000;
        }

        & p {
            font-size: 20px;
        }

        &--navigation {
            font-weight: 700;
            font-size: 28px;
            margin-bottom: 40px;

            & ul {
                display: flex;
                justify-content: center;
                flex-direction: column;

                @include up($md) {
                    flex-direction: row;
                }
            }

            & li {
                padding: 15px 20px;
            }
        }

        &--description {
            margin: 30px 0;
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 20px;
            text-align: left;

            @include up($md) {
                grid-template-columns: repeat(2, 1fr);
                grid-gap: 30px;
            }



            & li {
                font-size: 20px;
            }
        }

        &--chars {
            margin-top: 50px;
        }
    }
}
</style>

<script>
import hero from '@/components/hero.vue';
import products from '@/store/products';


export default {
    data() {
        return {
            title: products[0].name,
            background: require('@/assets/tmp/beton.jpg')
        }
    },
    components: {
        hero
    },
    computed: {
        product() {
            return products[0];
        },
    },
    mounted() {
        //console.log('product: ', this.product);
    }
}
</script>