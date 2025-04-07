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
                            <h4>{{ activity.name }}</h4>
                            <p class="cmp-text cmp-line-clamp cmp-line-clamp--4">{{ activity.text }}</p>

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


    }

    &__item {
        //max-width: 250px;

        transition: all .3s ease-in-out;
        outline: 1px solid transparent;
        margin: 0 auto;
        border: 4px solid transparent;

        &:hover {
            background-color: $sika-yellow;
            border: 4px solid $sika-yellow;
            & .activity__content {
                box-shadow: none;
            }
        }

        @include up($lg) {
            //max-width: 370px;
        }

        // & img {
        //     max-width: 230px;
        //     max-height: 167px;

        //     @include up($lg) {
        //         max-width: 270px;
        //         max-height: 247px;
        //     }
        // }

        & h4 {
            margin-bottom: 10px;
            font-weight: 700;
            line-height: 100%;
            min-height: 45px;
        }

        & p {
            margin-bottom: 0;
        }
    }

    &__content {
        padding: 20px 25px;
        text-align: left;

        @include up($lg) {
            padding: 20px 25px 25px;
        }

        box-shadow: 0 1px 2px #0003, 0 1px 3px #0000001a;
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
                    img: require('@/assets/tmp/activity1.jpg'),
                    name: "Строительство и восстановление",
                    text: "Материалы для промышленного и гражданского строительства. Материалы для промышленного и гражданского строительства. Материалы для промышленного и гражданского строительства",
                    link: "about"
                },
                {
                    img: require('@/assets/tmp/activity2.jpg'),
                    name: "Производство бетона",
                    text: "Материалы для промышленного и гражданского строительства. Материалы для промышленного и гражданского строительства",
                    link: "about"
                },
                {
                    img: require('@/assets/tmp/activity3.jpg'),
                    name: "Частное домостроение",
                    text: "Материалы для внутренней и внешней отделки. Материалы для промышленного и гражданского строительства. Материалы для промышленного и гражданского строительства. Материалы для промышленного и гражданского строительства.",
                    link: "about"
                },


            ]
        },
    }
}
</script>