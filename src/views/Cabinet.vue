<template>
    <div class="cabinet">
        <div class="grid-container section-margin ">
            <h3 class="mb-8">Ваша корзина документов</h3>
            <ul class="mb-16">
                <li class="download">
                    <a class="download--link" href="/assets/tmp/map-spb.jpg" target="_blank">
                        <div class="download--content">
                            <i class="cmp-icon cmp-icon-download"></i>
                            <h6 class="download--title">Референс Sika Россия по кровельным материалам</h6>
                        </div>
                        <div class="download--descr">
                            <div class="">PDF-файл</div>
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
                            <div class="">PDF-файл</div>
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
            <h3 class="mb-8">Ваши выбранные продукты</h3>
            <productListBlocks />
            <h3 class="mb-8">Ваши выбранные брошюры</h3>
            <brochure :title="title" :description="description" :brochure="brochure" :filePath="filePath"
                :fileSize="fileSize" />
            <brochure :title="title" :description="description" :brochure="brochure" :filePath="filePath"
                :fileSize="fileSize" />
        </div>
    </div>
</template>

<script>
import { activeDownloadBtn } from '@/utils/utils';
import productListBlocks from '@/components/product-list-blocks.vue';
import brochure from '@/components/brochure.vue';
export default {
    name: "Cabinet",
    data() {
        return {
            title: 'Брошюра 2',
            description: 'Описание брошюры 2',
            brochure: require('@/assets/tmp/brochure.jpeg'),
            filePath: require('@/assets/tmp/brochure.jpeg'),
            fileSize: '10 Mb'
        }
    },
    components: {
        productListBlocks,
        brochure
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