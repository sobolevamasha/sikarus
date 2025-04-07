<template>
    <div class="category">

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
            <ul class="category__list">
                <!-- <li class="category__item" v-for="(item, index) in catalog">
                    <router-link class="category__item--link" to="/products"></router-link>
                    <img :src="item.img" />
                    <div class="category__item--content">
                        <h4>
                            {{ item.title }}
                        </h4>
                        <p v-if="item.descr" class="cmp-text cmp-line-clamp cmp-line-clamp--3"> {{ item.descr }}</p>
                    </div>

                </li> -->

                <li class="category__item" v-for="(item, index) in catalog" :key="index">
                    <div class="category__item--imagebackground">
                        <img :src="item.img" />
                    </div>
                    <div class="category__item--content">
                        <router-link class="category__item--link" to="/products">
                            <h4 class="category__item--title">
                                {{ item.title }}
                            </h4>
                        </router-link>

                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
.category {
    &__list {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-self: center;
        grid-gap: 35px;


        @include up($sm) {
            grid-template-columns: repeat(2, 1fr);
            padding-top: 30px !important;
        }

        @include up($md) {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    &__item {
        // max-width: 360px;
        // box-shadow: 0 1px 2px #0003, 0 1px 3px #0000001a;
        // transition: all .3s ease-in-out;
        // outline: 1px solid transparent;
        position: relative;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        width: 100%;

        &--imagebackground {
            position: absolute;
            width: 100%;
            overflow: hidden;
            height: 100%;
            top: 0;
            left: 0;
            //z-index: -1;
        }

        &--content {
            position: relative;
            z-index: 1;
            padding: 20px 20px 40px;
            width: 100%;
            display: flex;
            min-height: 230px;
        }

        &--link {
            background-color: #ffffffb3;
            display: flex;
            flex-direction: column;
            margin-right: auto;
            transition: all .3s ease-in;
            width: 80%;
            color: $black !important;
            &:hover {
                background-color: $sika-yellow;
            }
        }

        &--title {
            padding: 20px 15px 10px;
            text-align: left;
            word-break: break-word;
        }
    }

}
</style>

<script>
import hero from '@/components/hero.vue';
import catalog from '@/store/catalog';
import breadcrumbs from '@/components/breadcrumbs.vue';

export default {
    data() {
        return {
            title: 'Добавки в бетон',
            background: require('@/assets/tmp/beton.jpg'),
            level1: 'Продукция',
            level2: 'Добавки в бетон',
        }
    },
    components: {
        hero,
        breadcrumbs
    },
    computed: {
        catalog() {
            return catalog[0].subcategory;
        },
    },
    mounted() {
    }
}
</script>