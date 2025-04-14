<template>
    <div class="product">
        <div class="grid-container section-margin">
            <div class="product__main">
                <img class="product__img" v-if="product.previewImg" :src="product.previewImg" />
                <div class="product__right">
                    <div class="product__head">
                        <h1> {{ product.name }}</h1>
                        <favoriteBtn />
                    </div>
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
            <div class="grid-container section-margin">
                <nav class="product__info--navigation">
                    <ul>
                        <li>
                            <a class="product__info--anchor" href="#description">
                                Описание
                            </a>
                        </li>
                        <li>
                            <a class="product__info--anchor" href="#chars">
                                Характеристики
                            </a>
                        </li>
                        <li>
                            <a class="product__info--anchor" href="#usage">
                                Применение
                            </a>
                        </li>
                        <li>
                            <a class="product__info--anchor" href="#docs">
                                Документы
                            </a>
                        </li>
                        <li>
                            <a class="product__info--anchor" href="#media">
                                Видео
                            </a>
                        </li>
                    </ul>
                </nav>

                <ul id="description" class="product__info--description">
                    <li v-for="(item, index) in product.descriptionItems">
                        <h4>{{ item.name }}</h4>
                        <ul class="list-style">
                            <li v-for="(subitem, index2) in item.items" class="list-style">
                                {{ subitem.item }}
                            </li>
                        </ul>
                    </li>
                </ul>

                <div id="chars" class="product__info--chars">
                    <h2>Характеристики</h2>

                    <ul class="accordion">
                        <li class="accordion-list">
                            <h4 class="accordion-header">
                                Информация о материале
                                <svg class="arrow" viewBox="0 0 887 1024">
                                    <path
                                        d="M64.512 285.696l378.88 364.544 380.928-364.544q22.528-26.624 49.152 0 26.624 22.528 0 49.152l-405.504 401.408q-22.528 22.528-49.152 0l-405.504-401.408q-26.624-26.624 0-49.152 24.576-24.576 51.2 0z">
                                    </path>
                                </svg>
                            </h4>

                            <div class="text-left accordion-content">
                                <ul class="product__info--list">
                                    <li v-for="(char, indexChar) in product.chars">
                                        <h5>{{ char.name }}
                                        </h5>
                                        <p>{{ char.value }}</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>


                </div>

                <div id="usage" class="product__info--usage">

                    <h2>Применение</h2>
                    <ul class="accordion">
                        <li class="accordion-list" v-for="(usage, indexUsage) in product.usage">
                            <h4 class="accordion-header">
                                {{ usage.title }}
                                <svg class="arrow" viewBox="0 0 887 1024">
                                    <path
                                        d="M64.512 285.696l378.88 364.544 380.928-364.544q22.528-26.624 49.152 0 26.624 22.528 0 49.152l-405.504 401.408q-22.528 22.528-49.152 0l-405.504-401.408q-26.624-26.624 0-49.152 24.576-24.576 51.2 0z">
                                    </path>
                                </svg>
                            </h4>
                            <div class="text-left accordion-content">
                                <ul class="product__info--list">

                                    <li v-for="(item, indexItem) in usage.info">
                                        <h5>{{ item.name }}
                                        </h5>
                                        <p>{{ item.value }}</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>

                </div>

                <div id="docs" class="product__info--docs">
                    <h2>Документы</h2>
                    <brochure :title="docTitle" :description="description" :fileSize="fileSize" :filePath="filePath"
                        :brochure="brochure" />
                </div>

                <div id="media" class="product__info--media">
                    <h2>Видео</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.product {

    &__head {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

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

        &--anchor {
            color: #000 !important;

            &:hover,
            &:active {
                color: $sika-yellow !important;
                border-bottom: 2px solid $sika-yellow;
            }
        }

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
import brochure from '@/components/brochure.vue';
import { accordion } from '@/utils/utils';
import { scrollToAnchor } from '@/utils/utils';
import favoriteBtn from '@/components/favoriteBtn.vue';

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
        brochure,
        favoriteBtn
    },
    computed: {
        product() {
            return products[0];
        },
    },
    methods: {
        initScripts() {
            accordion();
            scrollToAnchor();
        }
    },
    mounted() {
        this.initScripts();
    }
}
</script>