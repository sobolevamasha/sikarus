<template>
    <div class="brochure">

        <div class="brochure__item">
            <a target="_blank" class="brochure__link" :href="filePath">
                <div class="brochure__content text-left">
                    <i class="cmp-icon cmp-icon-download mr-4"></i>
                    <h6 class="brochure__content--title mb-0 mr-4">
                        {{ title }}
                    </h6>
                </div>

                <div class="d-flex align-center">
                    <div v-if="description" class="cmp-line-clamp cmp-line-clamp--3 mr-4">{{ description }}</div>
                    <span v-if="fileSize">{{ fileSize }}</span>
                </div>


            </a>

            <button class="download--btn">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 768 768">
                    <g id="icomoon-ignore">
                    </g>
                    <path fill="#000"
                        d="M415.5 288h177l-177-175.5v175.5zM511.5 511.5v-63h-96v-96h-63v96h-96v63h96v96h63v-96h96zM448.5 64.5l192 192v384q0 25.5-19.5 44.25t-45 18.75h-384q-25.5 0-45-18.75t-19.5-44.25l1.5-513q0-25.5 18.75-44.25t44.25-18.75h256.5z">
                    </path>
                </svg>

            </button>
        </div>

        <img class="brochure__brochure" :src="brochure" alt="Car Park Systems for Manufaktura">

    </div>

</template>

<script>
import { activeDownloadBtn } from '@/utils/utils';
export default {
    name: "brochure",
    props: ["title", "description", "filePath", "brochure", "fileSize"],

    methods: {
        initActiveBtn() {
            activeDownloadBtn();
        },
    },
    mounted() {
        this.initActiveBtn();
    }


}
</script>

<style lang="scss">
.brochure {

    margin: 0 auto 20px;

    & a {
        color: $black !important;
        display: flex;
        justify-content: space-between;
    }

    &__item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all 0.3s ease-in;
        padding: 10px 20px;
        background-color: $light-gray-section;
        margin-bottom: 15px;

        &:hover {
            box-shadow: 0 1px 2px #0003, 0 1px 5px #0000001a;
        }
    }

    &__brochure {
        margin: 25px auto 0 35px;
        display: block;
        max-width: 100px;
        object-fit: contain;

        @include up($sm) {
            max-width: 150px;
        }
    }

    &__content {
        display: flex;
        align-items: center;
    }

    &__link {
        width: 100%;
        padding-right: 40px;
    }

    &__btn {
        position: relative;
        z-index: 10;

        &--active {
            & svg path {
                @include transition();
                fill: $sika-yellow;
            }
        }
    }
}
</style>
