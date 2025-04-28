<template>
    <section class="news">
        <div class="grid-container">
            <div class="container">
                <h2 class="cmp-layout__title">
                    Последние новости
                </h2>
                <ul class="news__list">
                    <li v-for="(item, index) in news" :key="index" class="news__item">
                        <router-link :to="item.link"></router-link>
                        <img :src="item.img" />
                        <div class="news__content">
                            <div>
                                <span>{{ item.lang }}</span>
                                <h4>{{ item.title }}</h4>
                            </div>
                            <span>{{ item.date }}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.news {
    //background-color: #f5f5f5;

    &__list {
        //display: grid;
        //grid-template-columns: repeat(1, 1fr);
        grid-gap: 15px;
        justify-self: center;

        & img {
            max-height: 250px;
            width: 100%;
            object-fit: cover;

            @include up($sm) {
                max-height: 400px;
            }

            @include up($md) {
                //max-width: 370px;
                max-height: 247px;

            }
        }

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
        //max-width: 280px;

        transition: all .3s ease-in;
        //outline: 1px solid transparent;
        margin: 0 auto;
        position: relative;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        border: 4px solid transparent;
        margin-bottom: 20px;

        &:hover {
            background-color: $sika-yellow;
            border: 4px solid $sika-yellow;

            & .news__content {
                box-shadow: none;
            }
        }

        @include up($md) {
            //max-width: 320px;
            margin-bottom: 0;
        }

        @include up($lg) {
            //max-width: 370px;
        }
    }

    &__content {
        padding: 20px 25px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: left;
        box-shadow: 0 1px 2px #0003, 0 1px 3px #0000001a;

        & h4 {
            margin: 5px 0 20px;
        }

        @include up($lg) {
            max-width: 370px;
            padding: 20px 25px 25px;
        }
    }

    & a {
        color: $black !important;
        position: absolute;
        width: 100%;
        height: 100%;

    }
}
</style>

<script>
import { RouterLink } from 'vue-router';
import news from '@/store/news';


export default {
    data() {
        return {
            news: news
        }
    },
    computed: {
    },
    
}
</script>