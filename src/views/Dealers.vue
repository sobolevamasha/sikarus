<template>
    <div class="dealers">
        <div class="grid-container section-margin">
            <h3 class="dealers__title mb-4">Официальные дилеры Sika в России</h3>

            <ul class="accordion">
                <li class="accordion-list" v-for="(item, index) in dealers" :key="index">
                    <h4 class="accordion-header">{{ item.region }}<svg class="arrow" viewBox="0 0 887 1024">
                            <path
                                d="M64.512 285.696l378.88 364.544 380.928-364.544q22.528-26.624 49.152 0 26.624 22.528 0 49.152l-405.504 401.408q-22.528 22.528-49.152 0l-405.504-401.408q-26.624-26.624 0-49.152 24.576-24.576 51.2 0z">
                            </path>
                        </svg></h4>
                    <div class="accordion-content">
                        <ul class="accordion">
                            <li class="accordion-list" v-for="(city, indexCity) in item.cities" :key="indexCity">
                                <h5 class="accordion-header">{{ city.name }}<svg class="arrow" viewBox="0 0 887 1024">
                                        <path
                                            d="M64.512 285.696l378.88 364.544 380.928-364.544q22.528-26.624 49.152 0 26.624 22.528 0 49.152l-405.504 401.408q-22.528 22.528-49.152 0l-405.504-401.408q-26.624-26.624 0-49.152 24.576-24.576 51.2 0z">
                                        </path>
                                    </svg></h5>
                                <div class="accordion-content">
                                    <ul>
                                        <li v-for="(dealer, indexDealer) of city.dealers" :key="indexDealer"
                                        class="accordion-content--item">
                                            <h6 class="dealers__name">{{ dealer.name }}</h6>
                                            <div v-for="(info, indexInfo) of dealer.contacts" class="dealers__info">
                                                <div>{{ info.address }}</div>
                                                <a href="info.site" target="_blank">{{ info.site }}</a>
                                                <a href="info.site2" target="_blank">{{ info.site2 }}</a>
                                                <a href="">{{ info.tel }}</a>
                                                <a href="">{{ info.tel2 }}</a>
                                                <a href="mailto:">{{ info.email }}</a>
                                                <div>{{ info.info }}</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>

                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
.dealers {

    &__name {
        font-weight: 700;
    }

    &__info {
        &:not(:last-child) {
            margin: 0 0 20px 0;
        }
    }
}
</style>

<script>
import dealers from '@/store/dealers';
import { accordion } from '@/utils/utils';

export default {
    computed: {
        dealers() {
            return dealers;
        }
    },
    methods: {
        initAccordeon() {
            accordion();
        }
    },
    mounted() {
        this.initAccordeon();
    }

}
</script>