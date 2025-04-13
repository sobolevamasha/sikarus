<template>
    <div class="products">
        <div class="grid-container section-margin">
            <!-- <ul class="products__list">
                <li v-for="(product, index) in products" class="products__item">
                    <img v-if="product.previewImg" :src="product.previewImg" />
                    <div class="products__item--content">
                        <h3> {{ product.name }}</h3>
                        <p class="cmp-line-clamp cmp-line-clamp--3">{{ product.descr }}</p>
                        <ul class="cmp-product__attributes cmp-font--light cmp-line-clamp cmp-line-clamp--3">
                            <li v-for="(benifit, index1) in product.benifits">
                                {{ benifit.benifit }}
                            </li>
                        </ul>
                    </div>
                    <router-link class="products__item--link" to="/product"></router-link>
                </li>
            </ul> -->
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad alias cupiditate fugiat quos aspernatur ab
                officiis, dignissimos odio quae temporibus labore! Quo eius laudantium, similique harum necessitatibus
                commodi magnam perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad alias cupiditate
                fugiat quos aspernatur ab
                officiis, dignissimos odio quae temporibus labore! Quo eius laudantium, similique harum necessitatibus
                commodi magnam perferendis?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad alias cupiditate fugiat quos aspernatur ab
                officiis, dignissimos odio quae temporibus labore! Quo eius laudantium, similique harum necessitatibus
                commodi magnam perferendis?</p>

            <ul class="accordion">
                <li class="accordion-list">
                    <h4 class="accordion-header">Суперпласификаторы<svg class="arrow" viewBox="0 0 887 1024">
                            <path
                                d="M64.512 285.696l378.88 364.544 380.928-364.544q22.528-26.624 49.152 0 26.624 22.528 0 49.152l-405.504 401.408q-22.528 22.528-49.152 0l-405.504-401.408q-26.624-26.624 0-49.152 24.576-24.576 51.2 0z">
                            </path>
                        </svg></h4>
                    <div class="accordion-content">
                        <ul class="products__list">
                            <li v-for="(product, index) in products" class="products__item">
                                <img v-if="product.previewImg" :src="product.previewImg" />
                                <div class="products__item--content">
                                    <h3> {{ product.name }}</h3>
                                    <p class="cmp-line-clamp cmp-line-clamp--3">{{ product.descr }}</p>
                                    <ul
                                        class="cmp-product__attributes cmp-font--light cmp-line-clamp cmp-line-clamp--3">
                                        <li v-for="(benifit, index1) in product.benifits">
                                            {{ benifit.benifit }}
                                        </li>
                                    </ul>
                                </div>
                                <router-link class="products__item--link" to="/product"></router-link>
                            </li>
                        </ul>
                    </div>
                </li>

                <li class="accordion-list">
                    <h4 class="accordion-header">Пласификаторы<svg class="arrow" viewBox="0 0 887 1024">
                            <path
                                d="M64.512 285.696l378.88 364.544 380.928-364.544q22.528-26.624 49.152 0 26.624 22.528 0 49.152l-405.504 401.408q-22.528 22.528-49.152 0l-405.504-401.408q-26.624-26.624 0-49.152 24.576-24.576 51.2 0z">
                            </path>
                        </svg></h4>
                    <div class="accordion-content">
                        <ul class="products__list">
                            <li v-for="(product, index) in products" class="products__item">
                                <img v-if="product.previewImg" :src="product.previewImg" />
                                <div class="products__item--content">
                                    <h3> {{ product.name }}</h3>
                                    <p class="cmp-line-clamp cmp-line-clamp--3">{{ product.descr }}</p>
                                    <ul
                                        class="cmp-product__attributes cmp-font--light cmp-line-clamp cmp-line-clamp--3">
                                        <li v-for="(benifit, index1) in product.benifits">
                                            {{ benifit.benifit }}
                                        </li>
                                    </ul>
                                </div>
                                <router-link class="products__item--link" to="/product"></router-link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>

</template>

<style lang="scss">
.products {
    & .accordion .accordion-content li {
        margin-bottom: 0;
    }

    & p {
        text-align: left;
    }

    &__item {
        display: flex;
        justify-content: center;
        padding-bottom: 20px;
        border-bottom: 2px solid #e0e0e0;
        margin: 20px 0;
        position: relative;
        flex-direction: column;
        align-items: center;
        transition: all 0.2s ease-in;

        &:hover {
            border-bottom: 2px solid $sika-yellow;

            & h3 {
                transition: all 0.2s ease-in;
                color: $sika-yellow;
            }
        }

        @include up($md) {
            flex-direction: row;
        }

        & img {
            max-width: 230px;
            margin: 0 50px;
            object-fit: contain;
        }

        &--content {
            //width: 100%;
            text-align: left;
        }

        &--link {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }

        & p {
            font-size: 22px;

            @include up($md) {
                font-size: 24px;
            }
        }

        & li {
            font-size: 20px;
            position: relative;
            margin-left: 30px;
            margin-bottom: 10px;

            &::before {
                position: absolute;
                content: url('@/assets/icons/check.svg');
                width: 20px;
                height: 20px;
                top: 3px;
                left: -30px;
            }
        }
    }
}
</style>

<script>
import products from '@/store/products';
import { accordion } from '@/utils/utils';

export default {
    components: {

    },
    computed: {
        products() {
            return products;
        }
    },
    methods: {
        initScripts() {
            accordion();
        }
    },
    mounted() {
        this.initScripts();
    }
}
</script>