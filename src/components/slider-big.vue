<template>
    <div class="slider-big">

        <!-- <h2 class="cmp-layout__title about__title"> {{ title }} </h2> -->
        <div class="swiper swiper-big mySwiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in items" :key="index">
                    <img :src="item.img" :alt="item.name" />
                </div>
            </div>
        </div>

        <div class="swiper swiper-big mySwiper2">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in items" :key="index">
                    <img :src="item.img" :alt="item.name" />
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

    </div>
</template>

<style lang="scss">
.slider-big {
    width: 100%;

    & .mySwiper {
        width: 100%;

        & img {
            width: 100%;
            object-fit: cover;
        }
    }

    & .mySwiper2 {
        //max-width: 700px;
        padding: 10px 0;

        & .swiper-wrapper {
            //justify-content: center;
        }

        & .swiper-slide {
            height: 100px;
            //width: 100px !important;
            opacity: 0.7;
        }

        & .swiper-slide-thumb-active {
            @include transition();
            opacity: 1;
        }

        & img {
            height: 100px;
            width: 100px;
            object-fit: cover;
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
import { ref } from 'vue';
import { Swiper, SwiperSlide, Navigation, FreeMode, Thumbs } from 'swiper';
import 'swiper/swiper.min.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';


export default {
    name: "swiper-big",
    props: ["title", "items"],
    components: {
        Swiper,
        SwiperSlide,
        FreeMode,
        Thumbs
    },
    mounted() {

        const swiper2 = new Swiper('.mySwiper2', {
            freeMode: true,
            modules: [Navigation],
            spaceBetween: 5,
            slidesPerView: 3,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                360: {
                    slidesPerView: 3,
                    spaceBetween: 5,
                },
                688: {
                    slidesPerView: 6,
                    spaceBetween: 5,
                },
                1016: {
                    slidesPerView: 7,
                    spaceBetween: 15,
                },
            }

        });


        const swiper1 = new Swiper('.mySwiper', {
            //freeMode: true,
            modules: [Thumbs],
            slidesPerView: 1,
            spaceBetween: 15,
            thumbs: {
                swiper: swiper2
            },
            
        });


    }

}
</script>