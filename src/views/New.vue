<template>
    <div class="new">
        <!-- <hero :title="this.new.title" :background="background" :isSmall="true" /> -->
        <!-- <breadcrumbs :level1="level1" :level2="level2" :level3="this.new.title" /> -->
        <div class="grid-container section-margin ">
            <h1>{{ this.new.title }}</h1>
            <img class="new__img" :src="this.new.img" />
            <div class="new__detail" v-html="this.new.detailText"></div>

            <ul>
                <li class="download">
                    <a class="download--link" href="/assets/tmp/map-spb.jpg" target="_blank">
                        <div class="download--content">
                            <i class="cmp-icon cmp-icon-download"></i>
                            <h6 class="download--title">Референс Sika Россия по кровельным материалам</h6>
                        </div>
                        <div class="download--descr">
                            <div class="">Изображение</div>
                            <span class="download--size">2 MB</span>
                        </div>
                    </a>

                    <button class="download--btn">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                            viewBox="0 0 768 768">
                            <g id="icomoon-ignore">
                            </g>
                            <path fill="#000"
                                d="M415.5 288h177l-177-175.5v175.5zM511.5 511.5v-63h-96v-96h-63v96h-96v63h96v96h63v-96h96zM448.5 64.5l192 192v384q0 25.5-19.5 44.25t-45 18.75h-384q-25.5 0-45-18.75t-19.5-44.25l1.5-513q0-25.5 18.75-44.25t44.25-18.75h256.5z">
                            </path>
                        </svg>

                    </button>
                </li>
                <li class="download">
                    <a class="download--link" href="/assets/tmp/map-spb.jpg" target="_blank">
                        <div class="download--content">
                            <i class="cmp-icon cmp-icon-download"></i>
                            <h6 class="download--title">Референс Sika Россия по полам и напольным покрытиям
                            </h6>
                        </div>
                        <div class="download--descr">
                            <div class="">Изображение</div>
                            <span class="download--size">2 MB</span>
                        </div>
                    </a>

                    <button class="download--btn">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                            viewBox="0 0 768 768">
                            <g id="icomoon-ignore">
                            </g>
                            <path fill="#000"
                                d="M415.5 288h177l-177-175.5v175.5zM511.5 511.5v-63h-96v-96h-63v96h-96v63h96v96h63v-96h96zM448.5 64.5l192 192v384q0 25.5-19.5 44.25t-45 18.75h-384q-25.5 0-45-18.75t-19.5-44.25l1.5-513q0-25.5 18.75-44.25t44.25-18.75h256.5z">
                            </path>
                        </svg>

                    </button>
                </li>
            </ul>

            <h3>Продукты Sika</h3>
            <ul class="new__products">
                <li v-for="(product, index) in products" :key="index">
                    <router-link to="/product"></router-link>
                    <h4> {{ product.name }} </h4>
                    <div>{{ product.descr }}</div>
                </li>
            </ul>
        </div>

    </div>
</template>

<style lang="scss">
.new {
    font-family: 'Parachute', sans-serif;

    h1 {
        text-align: left;
        margin-bottom: 20px;
        @include up($md) {
            margin-bottom: 40px;
        }
    }

    & h3 {
        margin: 40px 0 20px;
    }

    &__products {
        display: grid;
        //flex-direction: column;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 15px;
        justify-content: center;
        margin-bottom: 40px !important;

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
            }
        }
    }

    &__img {
        display: block;
        margin-right: auto;
        margin-left: auto;
        margin-bottom: 20px;
        width: 100%;
        max-width: 300px;
        object-fit: cover;

        @include up($md) {
            float: right;
            margin-left: 20px;
        }

    }

    &__detail {
        text-align: left;
        padding: 0 0 40px 0;
        font-size: 18px;

        & a {
            color: $black !important;
            border-bottom: 3px solid $sika-yellow;
        }
    }

    &__download {
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all 0.3s ease-in;
        padding: 15px 25px;
        background-color: $light-gray-section;
        margin-bottom: 15px;

        &:hover {
            box-shadow: 0 1px 2px #0003, 0 1px 5px #0000001a;
        }

        &--link {
            width: 100%;
            padding-right: 40px;
            display: flex !important;
            justify-content: space-between;
            align-items: center;
            color: $black !important;
        }

        &--content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &--title {
            margin-left: 20px;
            margin-bottom: 0;
        }

        // &--descr {
        //     display: flex;
        //     justify-content: space-between;
        //     align-items: center;
        // }

        &--btn {
            position: relative;
            z-index: 10;

            &--active {
                & svg path {
                    @include transition();
                    fill: $sika-yellow;
                }
            }
        }
    }
}
</style>

<script>
import news from '@/store/news';
import btn from '@/components/btn.vue';
import { activeDownloadBtn } from '@/utils/utils';
import products from '@/store/products';

export default {
    components: {
        btn
    },
    data() {
        return {
        }
    },
    computed: {
        new() {
            return news[0];
        },
        products() {
            return products;
        }
    },

    methods: {
        initActiveBtn() {
            activeDownloadBtn();
        },
    },

    mounted() {
        this.initActiveBtn();
    }

}
</script>