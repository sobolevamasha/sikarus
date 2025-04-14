<template>
    <div class="decision">
        <div class="section-margin grid-container">
            <img class="decision__img left" src="@/assets/tmp/decision.jpg" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum impedit doloribus temporibus minus omnis
                consequuntur facilis corporis, praesentium sequi iure ipsa architecto! Esse expedita nostrum optio
                reiciendis facere illum delectus?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum impedit doloribus temporibus minus omnis
                consequuntur facilis corporis, praesentium sequi iure ipsa architecto! Esse expedita nostrum optio
                reiciendis facere illum delectus?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum impedit doloribus temporibus minus omnis
                consequuntur facilis corporis, praesentium sequi iure ipsa architecto! Esse expedita nostrum optio
                reiciendis facere illum delectus?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum impedit doloribus temporibus minus omnis
                consequuntur facilis corporis, praesentium sequi iure ipsa architecto! Esse expedita nostrum optio
                reiciendis facere illum delectus?</p>
            <!-- <h3>Продукты</h3> -->
            <ul class="accordion">
                <li class="accordion-list">
                    <h4 class="accordion-header">Продукция<svg class="arrow" viewBox="0 0 887 1024">
                            <path
                                d="M64.512 285.696l378.88 364.544 380.928-364.544q22.528-26.624 49.152 0 26.624 22.528 0 49.152l-405.504 401.408q-22.528 22.528-49.152 0l-405.504-401.408q-26.624-26.624 0-49.152 24.576-24.576 51.2 0z">
                            </path>
                        </svg></h4>
                    <div class="accordion-content">
                        <productList />
                    </div>
                </li>



            </ul>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nobis autem ipsam sit reprehenderit odio
                perferendis! Minus fugiat illum voluptatibus iste reprehenderit temporibus nostrum laborum odio, odit
                nam, quisquam repudiandae.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nobis autem ipsam sit reprehenderit odio
                perferendis! Minus fugiat illum voluptatibus iste reprehenderit temporibus nostrum laborum odio, odit
                nam, quisquam repudiandae.</p>

            <ul class="my-16">
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

            <brochure :title="title" :description="description" :brochure="brochure" />
        </div>
    </div>
</template>

<style lang="scss">
.decision {
    & p {
        text-align: left;
    }

    &__img {
        &.left {
            float: left;
            margin-right: 20px;
            margin-bottom: 30px;
        }

        &.right {
            float: right;
            margin-left: 20px;
            margin-bottom: 30px;
        }
    }

}
</style>

<script>
import products from '@/store/products';
import { activeDownloadBtn } from '@/utils/utils';
import { accordion } from '@/utils/utils';
import brochure from '@/components/brochure.vue';
import productList from '@/components/product-list.vue';

export default {
    data() {
        return {
            title: 'Брошюра 1',
            description: 'Описание брошюры',
            brochure: require('@/assets/tmp/brochure.jpeg')
        }
    },
    components: {
        brochure,
        productList
    },
    computed: {
        products() {
            return products;
        }
    },
    methods: {
        initAccordeon() {
            accordion();
            activeDownloadBtn();
        }
    },
    mounted() {
        this.initAccordeon();
    }
}
</script>