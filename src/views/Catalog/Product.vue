<template>
    <div class="product">
        <!-- <hero :title="title" :background="background" :isSmall="true" /> -->
        <!-- <breadcrumbs :level1="level1" :level2="level2" :level3="level3" :level4="level4" /> -->
        <div class="grid-container my-4 my-sm-8 my-lg-12">
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
                        <a>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="19" height="19"
                                viewBox="0 0 1024 1024">
                                <g id="icomoon-ignore">
                                </g>
                                <path fill="#000"
                                    d="M883.968 670.56l-30.656 162.304h-682.624l-30.656-162.304h-76.32v257.984h896.576v-257.984h-76.32zM864.64 382.272h-224.704v-93.76h-255.808v93.76h-222.56l349.248 365.184 353.824-365.184zM639.904 127.424h-255.808v34.112h255.808v-34.112zM639.904 191.136h-255.808v65.216h255.808v-65.216z">
                                </path>
                            </svg>

                            Техническое описание</a>
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
                                <h4 class="product__info--header">Информация о материале</h4>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="text-left">
                                <ul class="product__info--list">
                                    <li v-for="(char, indexChar) in product.chars">
                                        <h5>{{ char.name }}
                                        </h5>
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
                                <h4 class="product__info--header">{{ usage.title }}</h4>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="text-left">
                                <ul class="product__info--list">
                                    <li v-for="(item, indexItem) in usage.info">
                                        <h5>{{ item.name }}
                                        </h5>
                                        <p>{{ item.value }}</p>
                                    </li>
                                </ul>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>

                </div>

                <div class="product__info--docs">
                    <download :title="docTitle" :description="description" :fileSize="fileSize" :filePath="filePath"
                        :brochure="brochure" />
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
            margin: 0 50px 0 0;
        }
    }

    &__main {
        display: flex;
        text-align: left;
        flex-direction: column;
        align-items: center;
        justify-content: center;

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
                //display: block;
                flex-direction: row;
                justify-content: flex-end;
            }

            & a {
                color: $black !important;
                text-transform: uppercase;
                font-weight: 700;
                padding: 10px 0;
                transition: all 0.2s ease-out;
                display: flex;
                //align-items: center;

                @include up($md) {
                    padding: 20px;
                }

                & svg {
                    margin-right: 10px;
                }

                &:hover {
                    color: $sika-yellow !important;
                    transition: all 0.2s ease;
                    & svg path {
                        fill: $sika-yellow;
                    }
                }

            }
        }
    }

    &__info {

        &--list h5 {
            font-weight: 700;
            margin-bottom: 10px;
            border-bottom: 1px solid #000;
        }

        &--header {
            border-bottom: none;
            font-weight: 400;
            margin-bottom: 0;
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

            & h4 {
                font-weight: 700;
                margin-bottom: 10px;
                border-bottom: 1px solid #000;
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
import products from '@/store/products';
import download from '@/components/download.vue';


export default {
    data() {
        return {
            
            docTitle: products[0].docs[0].title,
            description: products[0].docs[0].description,
            fileSize: products[0].docs[0].fileSize,
            filePath: products[0].docs[0].filePath,
            brochure: products[0].docs[0].brochure,
            level1: 'Продукция',
            level2: 'Добавки в бетон',
            level3: 'Товарный бетон',
            level4: products[0].name,
            
        }
    },
    components: {
        download
    },
    computed: {
        product() {
            return products[0];
        },
    },
    mounted() {
    }
}
</script>