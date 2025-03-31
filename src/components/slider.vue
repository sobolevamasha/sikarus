<template>
    <section class="slider grid-container">
        <v-container>
            <h2 class="cmp-layout__title about__title"> {{ title }} </h2>
            <div class="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item, index) in items" :key="index">
                        <router-link  :to="item.to"></router-link>
                        <div class="">
                            <div class="">

                                <v-img :src="item.img" :alt="item.name" />

                                <div class="slider__descr">
                                    <h4>{{ item.name }}</h4>
                                    <span >{{ item.location }}</span>
                                </div>
                                <div class="slider__gradient"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-navigation">
                    <button class="swiper-button-prev">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="366" height="1024"
                            viewBox="0 0 366 1024">
                            <g id="icomoon-ignore">
                            </g>
                            <path
                                d="M358.4 310.272q0 7.168-6.144 12.288l-224.256 225.28 224.256 224.256q6.144 6.144 6.144 13.312t-6.144 13.312l-28.672 28.672q-5.12 5.12-12.288 5.12t-13.312-5.12l-266.24-267.264q-6.144-5.12-6.144-12.288t6.144-13.312l266.24-266.24q5.12-6.144 13.312-6.144t12.288 6.144l28.672 28.672q6.144 5.12 6.144 13.312z">
                            </path>
                        </svg>
                    </button>
                    <button class="swiper-button-next">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="366" height="1024"
                            viewBox="0 0 366 1024">
                            <g id="icomoon-ignore">
                            </g>
                            <path
                                d="M339.968 547.84q0 7.168-5.12 12.288l-267.264 267.264q-5.12 5.12-12.288 5.12t-13.312-5.12l-28.672-28.672q-6.144-6.144-6.144-13.312t6.144-13.312l224.256-224.256-224.256-225.28q-6.144-5.12-6.144-12.288t6.144-13.312l28.672-28.672q5.12-6.144 13.312-6.144t12.288 6.144l267.264 266.24q5.12 5.12 5.12 13.312z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </v-container>
    </section>
</template>

<style lang="scss">
.slider {
    width: 100%;

    &__descr {
        position: absolute;
        bottom: 0;
        padding: 20px 30px;
        color: $white;
        text-align: left;
        z-index: 2;

        & span {
            font-weight: 700;
        }
    }

    &__gradient {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(rgba(60, 60, 60, 0), rgba(60, 60, 60, .9));
        z-index: 1;
        top: 0;
        left: 0;
    }



    & .swiper-wrapper {
        width: 100%;
    }

    & .swiper-slide {
        

        & a {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 10;
        }
    }

    & button {
        width: 55px;
        height: 55px;
        background-color: $white;

        & svg {
            width: 36px;
            height: 36px;
        }
    }

    & .swiper-button-next:after,
    & .swiper-rtl,
    & .swiper-button-prev:after {
        display: none;
    }
}
</style>

<script>

import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default {
    name: "swiper",
    props: ["title", "items"],
    components: {

    },
    mounted() {

        const swiper = new Swiper('.swiper', {
            freeMode: true,
            modules: [Navigation, Pagination],
            slidesPerView: 1,
            spaceBetween: 15,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            //mousewheel: true,
            //grabCursor: true,

            breakpoints: {
                360: {
                    slidesPerView: 1,
                },
                688: {
                    slidesPerView: 2,
                },
                1016: {
                    slidesPerView: 3,
                },
            }

        });

    }

}
</script>