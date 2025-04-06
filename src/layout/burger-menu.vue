<template>
    <div class="burger-menu" id="burgerMenu">
        <div class="burger-menu__top">
            <div class="container">
                <div class="d-flex flex-column burger-menu__block">
                    <div class="burger-menu__scroll">
                        <ul class="burger-menu__list">
                            <li v-for="(menuItem, index) in menuData" :key="index" class="burger-menu__list--item">
                                <router-link v-show="menuItem.to" :to="menuItem.to"></router-link>
                                <div class="burger-menu__toggleInnerMenu d-flex align-center justify-space-between">
                                    <div class="burger-menu__list-name">
                                        {{ menuItem.name }}
                                    </div>
                                    <svg v-show="!menuItem.to" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 366 1024">
                                        <g id="icomoon-ignore">
                                        </g>
                                        <path
                                            d="M339.968 547.84q0 7.168-5.12 12.288l-267.264 267.264q-5.12 5.12-12.288 5.12t-13.312-5.12l-28.672-28.672q-6.144-6.144-6.144-13.312t6.144-13.312l224.256-224.256-224.256-225.28q-6.144-5.12-6.144-12.288t6.144-13.312l28.672-28.672q5.12-6.144 13.312-6.144t12.288 6.144l267.264 266.24q5.12 5.12 5.12 13.312z">
                                        </path>
                                    </svg>


                                </div>
                                <ul class="burger-menu__sublist">
                                    <li v-for="(item, itemIndex) in menuItem.items" :key="itemIndex"
                                        class="burger-menu__sublist--item">
                                        <div class="burger-menu__toggleInnerSubMenu">
                                            <router-link v-show="item.to" :to="item.to"></router-link>
                                            {{ item.title }}
                                        </div>
                                        <ul class="burger-menu__subsublist">
                                            <li v-for="(subitem, subIndex) in item.subitems" :key="subIndex">
                                                <router-link :to="subitem.to">{{ subitem.name }}</router-link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="burger-menu__middle">
            <div class="container">
                <ul class="burger-menu__list">
                    <li v-for="(item, index) in bottomMenu" :key="index" class="burger-menu__list--item">
                        <router-link v-show="item.to" :to="item.to"></router-link>
                        <div class="d-flex align-center justify-space-between">
                            <div class="burger-menu__list-name">
                                {{ item.name }}
                            </div>
                        </div>
                    </li>
                    <li>
                        <button id="open-modal" class="d-flex align-center">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="28" height="25"
                                viewBox="0 0 512 512" fill="white" class="mr-2">
                                <g id="icomoon-ignore">
                                </g>
                                <path
                                    d="M256 0c-141.385 0-256 114.615-256 256s114.615 256 256 256 256-114.615 256-256-114.615-256-256-256zM256 480.001c-31.479 0-61.436-6.506-88.615-18.226l116.574-131.145c2.603-2.929 4.041-6.711 4.041-10.63v-48c0-8.837-7.163-16-16-16-56.495 0-116.102-58.731-116.687-59.313-3-3.001-7.070-4.687-11.313-4.687h-64c-8.836 0-16 7.164-16 16v96c0 6.061 3.424 11.601 8.845 14.311l55.155 27.578v93.943c-58.026-40.478-96-107.716-96-183.832 0-34.357 7.745-66.903 21.569-96h58.431c4.244 0 8.313-1.686 11.314-4.686l64-64c3-3.001 4.686-7.070 4.686-11.314v-38.706c20.281-6.037 41.759-9.294 64-9.294 35.203 0 68.502 8.13 98.141 22.6-2.072 1.751-4.088 3.582-6.023 5.518-18.133 18.132-28.118 42.239-28.118 67.882s9.985 49.75 28.118 67.882c18.217 18.216 42.609 28.132 67.817 28.13 1.583 0 3.171-0.040 4.759-0.118 6.907 25.901 19.376 93.328-4.202 186.167-0.222 0.872-0.348 1.744-0.421 2.612-40.662 41.54-97.35 67.328-160.071 67.328z">
                                </path>
                            </svg>
                            Countries
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <div class="burger-menu__bottom">
            <div class="container">
                <ul>
                    <li class="isActive">

                        <a href="/"></a>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                            viewBox="0 0 1024 1024">
                            <g id="icomoon-ignore">
                            </g>
                            <path fill="#000"
                                d="M736 864h128.082c35.301 0 63.918-28.51 63.918-63.918v-544.082h-159.811c-35.451 0-64.189-28.375-64.189-63.939v-192.061h-319.727c-35.497 0-64.273 28.747-64.273 64.235v63.765h240l208 243.2v492.8h-32v-448h-159.811c-35.451 0-64.189-28.375-64.189-63.939v-192.061h-319.727c-35.497 0-64.273 28.747-64.273 64.235v735.531c0 35.476 28.51 64.235 63.918 64.235h480.165c35.301 0 63.918-28.51 63.918-63.918v-96.082zM736 0v191.906c0 17.725 14.431 32.094 31.705 32.094h160.295l-192-224zM544 160v191.906c0 17.725 14.431 32.094 31.705 32.094h160.295l-192-224z">
                            </path>
                        </svg>

                    </li>
                    <li>

                        <a href="/"></a>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                            viewBox="0 0 512 512">
                            <g id="icomoon-ignore">
                            </g>
                            <path
                                d="M512 198.525l-176.89-25.704-79.11-160.291-79.108 160.291-176.892 25.704 128 124.769-30.216 176.176 158.216-83.179 158.216 83.179-30.217-176.176 128.001-124.769z">
                            </path>
                        </svg>

                    </li>
                </ul>
            </div>

        </div>
        <!-- <transition name="modal">
            <div id="modalCountires" class="modalCountires">
                <countries />
            </div>
        </transition> -->
    </div>


</template>

<script>
import menuData from '@/store/menu-items.js'
import countries from '@/components/countries.vue';

import { onToggleInnerMenu } from '@/utils/utils';
import { onToggleInnerSubMenu } from '@/utils/utils';

export default {
    name: "burger-menu",
    data() {
        return {
            menuData: menuData,
            
            bottomMenu: [
                {
                    name: "О компании",
                    to: "/about"
                },
                {
                    name: "Контакты",
                    to: "/contacts"
                },
                {
                    name: "Объекты",
                    to: "/objects"
                },
                {
                    name: "Sika Group",
                    to: "/"
                },
            ]
        }
    },
    components: {
        countries
    },
    methods: {
        initScripts() {
            onToggleInnerMenu();
            onToggleInnerSubMenu();
        }
    },
    mounted() {
        this.initScripts();
    }
}
</script>

<style lang="scss">
.burger-menu {
    font-size: 18px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background: $white;
    color: $black !important;
    box-sizing: border-box;
    overflow: scroll;
    z-index: 4;

    display: none;



    &--opened {
        display: block;

        @include up($md) {
            display: none;
        }
    }

    &--zindex {
        z-index: 5;
    }

    .container {
        height: 100%;
        padding-top: 0;
        padding-bottom: 0;
    }

    &__middle {
        background-color: $dark-gray;
        height: 60vh;
        color: $white;

        & li {
            border-bottom: none !important;
        }
    }

    &__bottom {
        background-color: $white;
        position: fixed;
        bottom: 0;
        width: 100%;
        //height: 100%;
        background-color: #f5f5f5;

        & ul {
            display: grid;
            grid-template-columns: repeat(2, 1fr);


            & li {
                padding: 25px 10px;
                position: relative;

                & a {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                }

                &.isActive {
                    & svg path {
                        fill: $sika-yellow;
                    }
                }
            }
        }

    }

    &__block {
        width: 100%;
        margin-top: 75px;
    }


    a {
        display: inline-block;
        padding-right: 10px;
        color: $black !important;
        white-space: nowrap;

        &:hover,
        &:active {
            opacity: 0.6;
            text-decoration-color: transparent;
        }
    }

    &__list li {
        padding: 20px 0;
        position: relative;

        text-align: left;

        &:not(:last-child) {
            border-bottom: 1px solid #e0e0e0;
        }

        & a {
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 10;
        }
    }

    &__list-name {
        position: relative;
    }


    &__sublist {
        display: none;

        &.active {
            display: block;
        }

        & li {
            padding: 20px;
            font-weight: 700;

            text-align: left;

            &:not(:last-child) {
                border-bottom: 1px solid #e0e0e0;
            }
        }


    }

    &__subsublist {
        padding: 20px;

        display: none;

        &.active {
            display: block;
        }

        & li {
            font-weight: 400;
            margin: 20px;

            & a {
                display: flex;
                align-items: center;

            }
        }
    }

    & .modalCountires {
        display: none;

        &.active {
            display: block;
        }
    }
}
</style>
