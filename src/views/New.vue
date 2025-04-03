<template>
    <div class="new">
        <!-- <hero :title="this.new.title" :background="background" :isSmall="true" /> -->
        <!-- <breadcrumbs :level1="level1" :level2="level2" :level3="this.new.title" /> -->
        <div class="grid-container my-4 my-sm-8 my-lg-12">
            <img class="new__img" :src="this.new.img" />
            <div class="new__detail" v-html="this.new.detailText"></div>

            <ul>
                <li class="new__download">
                    <a class="new__download--link" href="/assets/tmp/map-spb.jpg" target="_blank">
                        <div class="new__download--content">
                            <i class="cmp-icon cmp-icon-download"></i>
                            <h5 class="new__download--title">Референс Sika Россия по кровельным материалам</h5>
                        </div>
                        <div class="new__download--descr">
                            <div class="">Изображение</div>
                            <span class="new__download--size">2 MB</span>
                        </div>
                    </a>

                    <button class="new__download--btn">
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
                <li class="new__download">
                    <a class="new__download--link" href="/assets/tmp/map-spb.jpg" target="_blank">
                        <div class="new__download--content">
                            <i class="cmp-icon cmp-icon-download"></i>
                            <h5 class="new__download--title">Референс Sika Россия по полам и напольным покрытиям
                            </h5>
                        </div>
                        <div class="new__download--descr">
                            <div class="">Изображение</div>
                            <span class="objects__download--size">2 MB</span>
                        </div>
                    </a>

                    <button class="new__download--btn">
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

<style lang="scss">
.new {

    &__img {
        display: block;
        margin-right: auto;
    }

    &__detail {
        text-align: left;
        padding: 40px 0;
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
        }
    },

    methods: {
        initActiveBtn() {
            const button = document.querySelector('.new__download--btn');
            button.addEventListener('click', () => {
                const isButtonActive = button.classList.toggle('new__download--btn--active');
            })
        },
    },

    mounted() {
        this.initActiveBtn();
    }

}
</script>