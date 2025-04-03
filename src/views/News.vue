<template>
    <div class="newsList">
        <!-- <hero :title="h1" :background="background" :isSmall="true" /> -->
        <!-- <breadcrumbs :level1="level1" :level2="level2" /> -->
        <div class="grid-container section-margin ">
            <ul class="newsList__list">
                <li v-for="(item, index) in news" :key="index" v-show="news && news.length > 0 && index <= newsLimit"
                    class="newsList__item">
                    <router-link :to="item.link"></router-link>
                    <img :src="item.img" />
                    <div class="newsList__content">
                        <span class="text-left d-block">{{ item.lang }}</span>
                        <div>
                            <h4 class="text-left my-4">{{ item.title }}</h4>
                            <span class="text-left small cmp-font--bold d-block">{{ item.date }}</span>
                        </div>
                    </div>

                </li>
            </ul>
            <btn :label="!fullLimit ? 'Показать еще' : 'Скрыть'" @click="onShowMore" class="mt-2 mt-md-8"></btn>
        </div>
    </div>
</template>

<style lang="scss">
.newsList {

    &__list {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 15px;

        justify-self: center;

        & img {
            //max-width: 250px;
            //max-height: 167px;


            @include up($lg) {
                max-width: 370px;
                max-height: 247px;
            }
        }

        @include up($md) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }

        @include up($lg) {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }
    }

    &__item {
        max-width: 280px;
        box-shadow: 0 1px 2px #0003, 0 1px 3px #0000001a;
        transition: all .3s ease-in-out;
        outline: 1px solid transparent;
        margin: 0 auto;
        position: relative;

        @include up($md) {
            max-width: 320px;
        }

        @include up($lg) {
            max-width: 370px;
        }

        & a {
            color: $black !important;
            position: absolute;
            width: 100%;
            height: 100%;

        }
    }

    &__content {
        //max-width: 250px;
        padding: 15px;

        @include up($lg) {
            max-width: 370px;
            padding: 20px 30px 30px;
        }
    }


}
</style>

<script>
import news from '@/store/news';
import hero from '@/components/hero.vue';
import breadcrumbs from '@/components/breadcrumbs.vue';
import btn from '@/components/btn.vue';

export default {
    components: {
        hero,
        breadcrumbs,
        btn
    },
    data() {
        return {
            h1: 'Новости',
            background: require('@/assets/objects.jpg'),
            level1: 'Главная',
            level2: 'Новости',
            newsLimit: 5,
            fullLimit: false,
            news: news
        }
    },
    methods: {
        onShowMore(newsLimit) {
            if (this.newsLimit == this.news.length) {
                this.newsLimit = 5;
                this.fullLimit = false;
            } else {
                this.newsLimit = this.news.length;
                this.fullLimit = true;
            }
        }
    }
}
</script>