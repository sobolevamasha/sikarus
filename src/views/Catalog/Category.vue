<template>
    <div class="category">
        <hero :title="title" :background="background" :isSmall="true" />
        <breadcrumbs :level1="level1" :level2="level2" />
        <div class="grid-container my-4 my-sm-8 my-lg-12">
            <ul class="category__list">
                <li class="category__item" v-for="(item, index) in catalog">
                    <router-link  class="category__item--link" to="/products"></router-link>
                    <img :src="item.img" />
                    <div class="category__item--content">
                        <h4>
                            {{ item.title }}
                        </h4>
                        <p v-if="item.descr" class="cmp-text cmp-line-clamp cmp-line-clamp--3"> {{ item.descr }}</p>
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
        }

        @include up($md) {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    &__item {
        max-width: 360px;
        box-shadow: 0 1px 2px #0003, 0 1px 3px #0000001a;
        transition: all .3s ease-in-out;
        outline: 1px solid transparent;
        position: relative;

        &--content {
            padding: 30px;
            text-align: left;
        }

        &--link {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
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