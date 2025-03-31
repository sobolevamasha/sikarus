<template>
    <section class="activity grid-container">
        <div class="container">
            <h2 class="cmp-layout__title">
                Сферы, в которых мы работаем
            </h2>
            <ul class="activity__list">
                <li v-for="(activity, index) in activities" :key="index" class="activity__item">
                    <router-link :to="activity.link">
                        <img :src="activity.img" />
                        <div class="activity__content">
                            <h4 class="text-left mb-8">{{ activity.name }}</h4>
                            <p class="text-left">{{ activity.text }}</p>

                        </div>
                    </router-link>
                </li>
            </ul>



        </div>
    </section>
</template>

<style lang="scss">
.activity {
    &__list {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 15px;
        justify-self: center;
        margin: 0 auto;
        justify-content: center;

        @include up($sm) {
            grid-template-columns: repeat(2, 1fr);
        }

        @include up($lg) {
            grid-template-columns: repeat(3, 1fr);
        }

        & img {
            max-width: 250px;
            max-height: 167px;

            @include up($lg) {
                max-width: 370px;
                max-height: 247px;
            }
        }
    }

    &__item {
        max-width: 250px;
        box-shadow: 0 1px 2px #0003, 0 1px 3px #0000001a;
        transition: all .3sease-in-out;
        outline: 1px solid transparent;
        margin: 0 auto;

        @include up($lg) {
            max-width: 370px;
        }
    }

    &__content {
        max-width: 250px;
        padding: 10px 15px 15px;

        @include up($lg) {
            max-width: 370px;
            padding: 20px 30px 30px;
        }
    }

    & a {
        color: $black !important;
    }
}
</style>

<script>
import { RouterLink } from 'vue-router';

export default {
    computed: {
        activities() {
            return [
                {
                    img: require('@/assets/tmp/distribuciya.jpg'),
                    name: "Строительство",
                    text: "Материалы для промышленного и гражданского строительства",
                    link: "about"
                },
                {
                    img: require('@/assets/tmp/distribuciya.jpg'),
                    name: "Производство бетона",
                    text: "Материалы для промышленного и гражданского строительства",
                    link: "about"
                },
                {
                    img: require('@/assets/tmp/stroitelstvo.jpg'),
                    name: "Частное домостроение",
                    text: "Материалы для внутренней и внешней отделки",
                    link: "about"
                },
                

            ]
        },
    }
}
</script>