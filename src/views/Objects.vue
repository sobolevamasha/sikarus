<template>
    <div class="objects">
        <div class="grid-container section-margin">
            <ul class="objects__list">
                <li v-for="(item, index) of objects" :key="index" class="objects__item mx-2 my-2">
                    <router-link to="/objects/object"></router-link>
                    <div class="objects__item--top">
                        <div class="gradient"></div>
                        <img class="" :src="item.img" />
                        <h4>{{ item.name }}</h4>
                    </div>
                    <div class="objects__item--content text-left">
                        <div class="objects__item--spans mb-2">
                            <span>{{ item.location }}</span>
                            <span class="mb-4">{{ item.date }}</span>
                        </div>
                        <p class="cmp-text cmp-line-clamp cmp-line-clamp--3">{{ item.description }}</p>
                    </div>
                </li>
            </ul>
            <ul class="my-16">
                <li class="download">
                    <a class="download--link" href="/assets/tmp/map-spb.jpg" target="_blank">
                        <div class="download--content">
                            <i class="cmp-icon cmp-icon-download"></i>
                            <h5 class="download--title">Референс Sika Россия по кровельным материалам</h5>
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
                            <h5 class="download--title">Референс Sika Россия по полам и напольным покрытиям
                            </h5>
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

        </div>
    </div>
</template>

<script>

import objectList from '@/store/objects';
import download from '@/components/brochure.vue';
import { activeDownloadBtn } from '@/utils/utils';


export default {
    name: "Objects",
    components: {
        download
    },
    computed: {
        objects() {
            return objectList[0].objects;
        },
        documents() {
            return objectList[0].documents;
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

<style lang="scss">
.objects {
    &__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: start;

        //grid-template-columns: repeat(3, 1fr);
        //grid-gap: 20px;
        @include up($lg) {
            justify-content: flex-start;
        }

        & img {
            max-height: 200px;
            width: 100%;
            object-fit: cover;
        }


    }

    &__item {
        position: relative;
        max-width: 374px;
        height: 390px;
        box-shadow: 0 1px 2px #0003, 0 1px 3px #0000001a;
        transition: all .3s ease-in-out;

        &--spans {
            height: 70px;
        }

        & a {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 10;
        }

        & span {
            display: block;
            font-weight: 700;

        }

        &--top {
            position: relative;

            & h4 {
                position: absolute;
                bottom: 0;
                left: 0;
                padding: 25px;
                z-index: 1;
                text-align: left;
                color: $white;
            }

            & .gradient {
                position: absolute;
                width: 100%;
                height: 100%;
                background-image: linear-gradient(rgba(60, 60, 60, 0), rgba(60, 60, 60, .9));
                z-index: 1;
                top: 0;
                left: 0;
            }

        }

        &--content {
            padding: 25px;
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