<template>
    <div class="countries">
        <div class="cmp-website-selection__header countries__header">
            <div class="cmp-website-selection__header-inner countries__header-inner">
                <div class="cmp-website-selection__logo countries__logo"><a href="/">
                        <picture
                            data-image-src="{&quot;isResponsive&quot;:false,&quot;pattern&quot;:&quot;https://sika.scene7.com/is/content/sika/Sika_ClaimU_pos_rgb&quot;,&quot;alt&quot;:&quot;Sika Logo with Building Trust below triangle&quot;,&quot;imageProfileNamePrefix&quot;:&quot;:&quot;,&quot;imageProfileMap&quot;:{}}"
                            data-height-based="false"><img
                                src="https://sika.scene7.com/is/content/sika/Sika_ClaimU_pos_rgb"
                                alt="Sika Logo with Building Trust below triangle" title="Sika Logo" class=""></picture>
                    </a></div>
                <div class="cmp-website-selection__title-wrap">
                    <h3 class="cmp-website-selection__title">Choose a country</h3>
                </div>
            </div>
            <button class="close-button" @click="handleClose">×</button>
        </div>
        <div class="countries-content">

            <h4>Global sites</h4>
            <ul class="countries__section countries__section--global">

                <li v-for="(item, indexGlobal) in globalLinks" :key="indexGlobal" class="d-flex align-center">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 366 1024">
                        <g id="icomoon-ignore">
                        </g>
                        <path
                            d="M339.968 547.84q0 7.168-5.12 12.288l-267.264 267.264q-5.12 5.12-12.288 5.12t-13.312-5.12l-28.672-28.672q-6.144-6.144-6.144-13.312t6.144-13.312l224.256-224.256-224.256-225.28q-6.144-5.12-6.144-12.288t6.144-13.312l28.672-28.672q5.12-6.144 13.312-6.144t12.288 6.144l267.264 266.24q5.12 5.12 5.12 13.312z">
                        </path>
                    </svg>
                    <a :href="item.link" target="_blank">{{ item.title }}</a>
                </li>
            </ul>

            <!-- <h4>Regions</h4> -->
            <ul class="countries__section countries__section--regions">
                <li v-for="(region, indexRegion) in regions" :key="indexRegion" class="countries__section--item">
                    <div class="d-flex align-center" @click="toggleRegion(indexRegion)">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 887 1024">
                            <g id="icomoon-ignore">
                            </g>
                            <path
                                d="M64.512 285.696l378.88 364.544 380.928-364.544q22.528-26.624 49.152 0 26.624 22.528 0 49.152l-405.504 401.408q-22.528 22.528-49.152 0l-405.504-401.408q-26.624-26.624 0-49.152 24.576-24.576 51.2 0z">
                            </path>
                        </svg>

                        <h4>{{ region.region }}</h4>
                    </div>
                    <ul v-show="region.isOpen" class="countries__section--countries">
                        <li v-for="(country, indexCountry) in region.countries" :key="indexCountry">
                            <button @click="onCountryToggle(indexRegion, indexCountry)">{{ country.name }}</button>
                            <ul v-show="country.isExpanded" class="countries__section--linkList">
                                <li v-for="(link, indexLink) in country.links" :key="indexLink">
                                    <a :href="link.to" target="_blank" class="countries__section--linkList-links">
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            viewBox="0 0 366 1024">
                                            <g id="icomoon-ignore">
                                            </g>
                                            <path
                                                d="M339.968 547.84q0 7.168-5.12 12.288l-267.264 267.264q-5.12 5.12-12.288 5.12t-13.312-5.12l-28.672-28.672q-6.144-6.144-6.144-13.312t6.144-13.312l224.256-224.256-224.256-225.28q-6.144-5.12-6.144-12.288t6.144-13.312l28.672-28.672q5.12-6.144 13.312-6.144t12.288 6.144l267.264 266.24q5.12 5.12 5.12 13.312z">
                                            </path>
                                        </svg>
                                        {{ link.name }}
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

import countires from '@/store/countires';

export default {
    data() {
        return {
            countires: countires,
        };
    },
    computed: {
        globalLinks() {
            return this.countires[0].global;
        },
        regions() {
            return this.countires.filter(item => !item.global);
        },

    },
    created() {

    },
    methods: {
        toggleRegion(indexRegion) {
            this.regions.forEach((item, idx) => {
                item.isOpen = idx === indexRegion ? !item.isOpen : false;
            });
        },
        handleClose() {
            this.$emit('close');
        },
        onCountryToggle(indexRegion, indexCountry) {
            const region = this.regions[indexRegion];
            // Получаем нужную страну
            const country = region.countries[indexCountry];

            // Переключаем состояние isExpanded
            country.isExpanded = !country.isExpanded;

            // Закрываем все другие страны в этом регионе
            region.countries.forEach((otherCountry, index) => {
                if (index !== indexCountry) {
                    otherCountry.isExpanded = false;
                }
            });
        },
    },
    mounted() {
        console.log('countiryList: ', this.countryList);

    }
};
</script>

<style lang="scss">
.countries {
    /* Стили для модального окна */
    font-family: $secondary-font-family;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    overflow-y: hidden;
    background: white;
    animation: enterFade .7s cubic-bezier(.25, .75, .5, 1.25);

    &__header {
        background-color: $sika-yellow;

        &-inner {
            display: flex;
            align-items: end;
        }

        & h3 {
            font-weight: 700;
            padding: 15px;
            font-family: $secondary-font-family;
        }


    }

    &__logo {
        max-width: 120px;
    }

    &-content {

        padding: 40px 20px;
        width: 100%;
        height: 100%;
        text-align: left;

        @include up($md) {
            padding: 40px;
        }

        & a {
            color: $black !important;
        }

        & h4 {
            font-weight: 700;
            //padding: 15px 0 0;
            font-family: $secondary-font-family;
            text-transform: uppercase !important;
            margin-left: 10px;
            margin-bottom: 0;
        }
    }

    &__section {
        margin: 20px 0;

        &--global {
            padding: 20px !important;

            @include up($md) {
                display: grid;
                grid-template-columns: repeat(6, 1fr);
            }

        }

        &--regions {
            padding: 40px 0 !important;

            & li {
                margin-bottom: 0;
            }
        }

        &--item {
            border-bottom: 1px solid $black;
            padding: 15px 0;
        }

        &--countries {
            padding: 15px !important;

            @include up($md) {
                display: grid;
                grid-template-columns: repeat(6, 1fr);
            }

            & li {
                margin: 10px 0;
            }


        }

        &--linkList {
            position: absolute;
            padding: 3px 10px !important;
            background-color: #fff;
            border: 1px solid #000;
            z-index: 10;

            & li {
                margin: 0;

            }

            &-links {
                display: flex;
                align-items: center;
                max-width: fit-content;

            }
        }
    }




}
</style>