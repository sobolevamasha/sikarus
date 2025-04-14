<template>
    <div class="products">
        <div class="grid-container section-margin">
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
                        <productList />
                    </div>
                </li>

                <li class="accordion-list">
                    <h4 class="accordion-header">Пласификаторы<svg class="arrow" viewBox="0 0 887 1024">
                            <path
                                d="M64.512 285.696l378.88 364.544 380.928-364.544q22.528-26.624 49.152 0 26.624 22.528 0 49.152l-405.504 401.408q-22.528 22.528-49.152 0l-405.504-401.408q-26.624-26.624 0-49.152 24.576-24.576 51.2 0z">
                            </path>
                        </svg></h4>
                    <div class="accordion-content">
                        <productList />
                    </div>
                </li>
            </ul>
        </div>
    </div>

</template>

<style lang="scss">
.products {
    & p {
        text-align: left;
    }
}
</style>

<script>
import products from '@/store/products';
import { accordion } from '@/utils/utils';
import productList from '@/components/product-list.vue';

export default {
    components: {
        productList
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