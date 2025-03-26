<template>
    <div class="objects">
        <hero :title="h1" :background="background" :isSmall="true" />
        <breadcrumbs :level1="level1" :level2="level2" />
        <div class="grid-container my-4 my-sm-8 my-lg-12">
            <ul class="objects__list">
                <li v-for="(item, index) of objects" :key="index" class="objects__item mx-2 my-2">
                    <router-link to="/objects/object"></router-link>
                    <div class="objects__item--top">
                        <div class="gradient"></div>
                        <img class="" :src="item.img" />
                        <h4>{{ item.name }}</h4>
                    </div>
                    <div class="objects__item--content text-left">
                        <div class="objects__item--spans mb-2">
                            <span>{{ item.location }}</span>
                            <span class="mb-4">{{ item.date }}</span>
                        </div>
                        <p class="cmp-text cmp-line-clamp cmp-line-clamp--3">{{ item.description }}</p>
                    </div>
                </li>
            </ul>
            <ul class="my-16">
                <li v-for="(document, index1) of documents" :key="index1">
                    <download :title="document.name" :filePath="document.filePath" />
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
import hero from '@/components/hero.vue';
import objectList from '@/store/objects';
import download from '@/components/download.vue';
import router from '@/router';
import breadcrumbs from '@/components/breadcrumbs.vue';

export default {
    name: "Objects",
    components: {
        hero,
        download,
        breadcrumbs
    },
    data() {
        return {
            h1: 'Объекты',
            background: require('@/assets/objects.jpg'),
            level1: 'Главная',
            level2: 'Объекты',
        }
    },
    computed: {
        objects() {
            return objectList[0].objects;
        },
        documents() {
            return objectList[0].documents;
        }
    },

}
</script>

<style lang="scss">
.objects {
    &__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: start;

        //grid-template-columns: repeat(3, 1fr);
        //grid-gap: 20px;
        @include up($lg) {
            justify-content: flex-start;
        }

        & img {
            max-height: 200px;
            width: 100%;
            object-fit: cover;
        }


    }

    &__item {
        position: relative;
        max-width: 374px;
        height: 390px;
        box-shadow: 0 1px 2px #0003, 0 1px 3px #0000001a;
        transition: all .3s ease-in-out;

        &--spans {
            height: 70px;
        }

        & a {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 10;
        }

        & span {
            display: block;
            font-weight: 700;

        }

        &--top {
            position: relative;

            & h4 {
                position: absolute;
                bottom: 0;
                left: 0;
                padding: 25px;
                z-index: 5;
                text-align: left;
                color: $white;
            }

            & .gradient {
                position: absolute;
                width: 100%;
                height: 100%;
                background-image: linear-gradient(rgba(60, 60, 60, 0), rgba(60, 60, 60, .9));
                z-index: 1;
                top: 0;
                left: 0;
            }

        }

        &--content {
            padding: 25px;
        }
    }
}
</style>