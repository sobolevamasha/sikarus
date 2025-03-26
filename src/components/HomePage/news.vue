<template>
    <section class="news">
        <div class="grid-container">
            <v-container>
                <h2 class="cmp-layout__title">
                    Последние новости
                </h2>
                <ul class="news__list">
                    <li v-for="(item, index) in news" :key="index" v-if="news && news.length > 0 && index <= newsLimit"
                        class="news__item">
                        <router-link :to="item.link"></router-link>
                        <img :src="item.img" />
                        <div class="news__content">
                            <span class="text-left d-block">{{ item.lang }}</span>
                            <div>
                                <h4 class="text-left my-4">{{ item.title }}</h4>
                                <span class="text-left small cmp-font--bold d-block">{{ item.date }}</span>
                            </div>
                        </div>

                    </li>
                </ul>
                <btn :label="!fullLimit ? 'Показать еще' : 'Скрыть'" @click="onShowMore" class="mt-2 mt-md-8"></btn>
            </v-container>
        </div>
    </section>
</template>

<style lang="scss">
.news {
    background-color: #f5f5f5;

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
    }

    &__content {
        //max-width: 250px;
        padding: 15px;

        @include up($lg) {
            max-width: 370px;
            padding: 20px 30px 30px;
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
import btn from '../btn.vue';


export default {
    data() {
        return {
            newsLimit: 2,
            fullLimit: false
        }
    },
    //mixins: [vp],
    components: { btn },
    computed: {
        news() {
            return [
                {
                    img: require('@/assets/tmp/new1.jpg'),
                    title: "Новинка от Sika: эластичный паропроницаемый акриловый герметик для срубов Sikacryl®-121 Wood",
                    lang: "Русский",
                    date: "04/07/2024",
                    link: "about"
                },
                {
                    img: require('@/assets/tmp/new2.jpg'),
                    title: "Поздравляем с Днём строителя!",
                    lang: "Русский",
                    date: "04/07/2024",
                    link: "about"
                },
                {
                    img: require('@/assets/tmp/new3.jpg'),
                    title: "Приглашаем на мастер-классы по материалам Sika 11 июля на строительной базе «Золотые Ворота»!",
                    lang: "Русский",
                    date: "04/07/2024",
                    link: "about"
                },
                {
                    img: require('@/assets/tmp/new2.jpg'),
                    title: "Новинка от Sika: универсальный эластичный силиконовый герметик Sikasil®-142 Universal",
                    lang: "Русский",
                    date: "04/07/2024",
                    link: "about"
                },
                {
                    img: require('@/assets/tmp/new3.jpg'),
                    Title: "Презентация книги «Архитектурный бетон. Практика применения в России»",
                    lang: "Русский",
                    date: "04/07/2024",
                    link: "about"
                },
                {
                    img: require('@/assets/tmp/new1.jpg'),
                    title: "Поздравляем с Днём строителя!",
                    lang: "Русский",
                    date: "04/07/2024",
                    link: "about"
                },
                {
                    img: require('@/assets/tmp/new3.jpg'),
                    title: "Новинка от Sika: универсальный эластичный силиконовый герметик Sikasil®-142 Universal",
                    lang: "Русский",
                    date: "04/07/2024",
                    link: "about"
                },
            ]
        },
    },
    methods: {
        onShowMore(newsLimit) {
            if (this.newsLimit == this.news.length) {
                this.newsLimit = 2;
                this.fullLimit = false;
            } else {
                this.newsLimit = this.news.length;
                this.fullLimit = true;
            }
        }
    }
}
</script>