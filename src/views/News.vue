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
                        <div>
                            <span class="text-left d-block">{{ item.lang }}</span>
                            <h4 class="text-left my-4">{{ item.title }}</h4>
                        </div>
                        <span class="text-left small cmp-font--bold d-block">{{ item.date }}</span>

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
        // display: grid;
        // grid-template-columns: repeat(1, 1fr);


       

        @include up($md) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 15px;
            justify-self: center;
        }

        @include up($lg) {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }
    }

    &__item {
        // max-width: 280px;
        transition: all .3s ease-in-out;
        border: 4px solid transparent;
        margin: 0 auto;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 20px;

        @include up($md) {
            max-width: 320px;
            margin-bottom: 0;
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

        &:hover {
            background-color: $sika-yellow;
            border: 4px solid $sika-yellow;

            & .news__content {
                box-shadow: none;
            }
        }

        & img {
            max-height: 250px;
            width: 100%;
            height: 100%;
            object-fit: cover;

            @include up($sm) {
                max-height: 400px;

            }

            @include up($md) {
                //max-width: 370px;
                max-height: 247px;

            }
        }

    }

    &__content {
        padding: 15px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: left;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1019607843);

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