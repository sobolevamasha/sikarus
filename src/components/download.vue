<template>
    <div class="download">
        <div v-if="brochure" class="cmp-teaser cmp-teaser--document">
            <a :href="filePath" target="_blank" class="download">
                <div class="cmp-teaser__content cmp-teaser__content--extended">
                    <div class="cmp-teaser__content--left">
                        <picture>
                            <img :src="brochure" alt="Car Park Systems for Manufaktura">
                        </picture>
                    </div>

                    <div class="cmp-teaser__content--right text-left">
                        <span class="cmp-teaser__content--right__title">{{ title }}</span>
                        <div v-if="description" class="cmp-line-clamp cmp-line-clamp--3">{{ description }}</div>
                        <div>
                            <i class="cmp-icon cmp-icon-download"></i>
                            <span v-if="fileSize" class="ml-4">{{ fileSize }}</span>
                        </div>
                    </div>
                </div>
            </a>

            <button class="addToDocumentCart cart has-tooltip">
                <i class="">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 768 768">
                        <g id="icomoon-ignore">
                        </g>
                        <path fill="#000"
                            d="M415.5 288h177l-177-175.5v175.5zM511.5 511.5v-63h-96v-96h-63v96h-96v63h96v96h63v-96h96zM448.5 64.5l192 192v384q0 25.5-19.5 44.25t-45 18.75h-384q-25.5 0-45-18.75t-19.5-44.25l1.5-513q0-25.5 18.75-44.25t44.25-18.75h256.5z">
                        </path>
                    </svg>
                </i>
            </button>
        </div>



        <div v-else class="cmp-teaser cmp-teaser--document">
            <a target="_blank" class="download" :href="filePath">
                <div class="cmp-teaser__content">
                    <div class="cmp-teaser__content--left">
                        <i class="cmp-icon cmp-icon-download"></i>
                    </div>
                    <div class="cmp-teaser__content--right text-left">
                        <span class="cmp-teaser__content--right__title">
                            {{ title }}
                        </span>
                        <div v-if="description" class="cmp-line-clamp cmp-line-clamp--3">{{ description }}</div>
                        <div v-if="fileSize">{{ fileSize }}</div>
                    </div>
                </div>
            </a>
            <button @click="addToCart" class="addToDocumentCart cart has-tooltip"
                :class="{ 'addToDocumentCart--active': isAddedToCart }">
                <i class="">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 768 768">
                        <g id="icomoon-ignore">
                        </g>
                        <path fill="#000"
                            d="M415.5 288h177l-177-175.5v175.5zM511.5 511.5v-63h-96v-96h-63v96h-96v63h96v96h63v-96h96zM448.5 64.5l192 192v384q0 25.5-19.5 44.25t-45 18.75h-384q-25.5 0-45-18.75t-19.5-44.25l1.5-513q0-25.5 18.75-44.25t44.25-18.75h256.5z">
                        </path>
                    </svg>
                </i>
            </button>
        </div>
    </div>

</template>

<script>
export default {
    name: "download",
    props: ["title", "description", "filePath", "brochure", "fileSize"],
    data() {
        return {
            isAddedToCart: false
        }
    },
    methods: {
        addToCart() {
            this.isAddedToCart = !this.isAddedToCart;
        }
    },


}
</script>

<style lang="scss">
.download {
    max-width: 900px;
    margin: 0 auto;

    & .addToDocumentCart {
        &--active {
            & i svg path {
                @include transition();
                fill: $sika-yellow;
            }
        }
    }
}
</style>
