<template>
    <div class="burger-menu">
        <v-container class="d-flex pa-7">
            <div class="d-flex flex-column burger-menu__block">
                <div class="burger-menu__scroll">
                    <ul class="burger-menu__list">
                        <li v-for="(menuItem, index) in menuData" :key="index">
                            <a v-if="menuItem.to" :href="menuItem.to"></a>
                            <div @click="toggleMenu(index)" :class="{ 'isOpen': menuItem.isOpen && menuItem.items }"
                                class="d-flex align-center justify-space-between">
                                <div class="burger-menu__list-name">

                                    {{ menuItem.name }}
                                </div>
                                <svg v-if="menuItem.to" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" viewBox="0 0 366 1024">
                                    <g id="icomoon-ignore">
                                    </g>
                                    <path
                                        d="M339.968 547.84q0 7.168-5.12 12.288l-267.264 267.264q-5.12 5.12-12.288 5.12t-13.312-5.12l-28.672-28.672q-6.144-6.144-6.144-13.312t6.144-13.312l224.256-224.256-224.256-225.28q-6.144-5.12-6.144-12.288t6.144-13.312l28.672-28.672q5.12-6.144 13.312-6.144t12.288 6.144l267.264 266.24q5.12 5.12 5.12 13.312z">
                                    </path>
                                </svg>


                            </div>
                            <ul class="burger-menu__sublist" v-show="menuItem.isOpen">
                                <li v-for="(item, itemIndex) in menuItem.items" :key="itemIndex">
                                    <div @click="toggleSubMenu(menuItem, item)" :class="{ 'isOpen': item.isOpen }">
                                        {{ item.title }}
                                    </div>
                                    <ul class="burger-menu__subsublist" v-show="item.isOpen">
                                        <li v-for="(subitem, subIndex) in item.subitems" :key="subIndex">
                                            <a :href="subitem.to">{{ subitem.name }}</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
import menuData from '@/store/menu-items.js'

export default {
    name: "burger-menu",
    data() {
        return {
            menuData: [
                {
                    name: "О нас",
                    to: '',
                    isOpen: false,
                    items: [
                        {
                            isOpen: false,
                            title: "Концерн Sika",
                            subitems: [
                                {
                                    name: "Цели и бренд Sika",
                                    to: "",
                                },
                                {
                                    name: "Ценности и принципы",
                                    to: "",
                                },
                                {
                                    name: "История",
                                    to: "",
                                },
                                {
                                    name: "Целевые рынки сбыта",
                                    to: "",
                                },
                            ],
                        },
                        {
                            isOpen: false,
                            title: "Sika Россия",
                            subitems: [
                                {
                                    name: "О компании",
                                    to: "",
                                },
                                {
                                    name: "Заводы Sika в России",
                                    to: "",
                                },
                                {
                                    name: "Лаборатории Sika в России",
                                    to: "",
                                },
                                {
                                    name: "Техподдержка",
                                    to: "",
                                },
                            ],
                        },
                    ],
                },
                {
                    name: "Продукция",
                    to: '',
                    isOpen: false,
                    items: [
                        {
                            isOpen: false,
                            title: "Концерн Sika",
                            subitems: [
                                {
                                    name: "Цели и бренд Sika",
                                    to: "",
                                },

                            ],
                        },
                    ],
                },
                {
                    name: "Отраслевые решения",
                    to: '',
                    isOpen: false,
                    items: [
                        {
                            isOpen: false,
                            title: "Концерн Sika",
                            subitems: [
                                {
                                    name: "Цели и бренд Sika",
                                    to: "",
                                },
                                {
                                    name: "Ценности и принципы",
                                    to: "",
                                },
                                {
                                    name: "История",
                                    to: "",
                                },
                                {
                                    name: "Целевые рынки сбыта",
                                    to: "",
                                },
                            ],
                        },
                    ],
                },
                {
                    name: "Продуктовые бренды",
                    to: '/contacts',
                    isOpen: false,
                },
                {
                    name: "Сервис",
                    to: '/about',
                    isOpen: false,
                },
                {
                    name: "Где купить",
                    to: '/objects',
                    isOpen: false,
                },
            ]
        }
    },
    methods: {
        toggleMenu(index) {
            this.menuData[index].isOpen = !this.menuData[index].isOpen;
        },
        toggleSubMenu(menuItem, item) {
            // Закрываем все подменю, кроме текущего
            menuItem.items.forEach(i => {
                if (i !== item) {
                    i.isOpen = false;
                }
            });
            item.isOpen = !item.isOpen;
        },
    },
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
    overflow: hidden;
    z-index: 10;

    .container {
        height: 100%;
    }

    &__block {
        width: 100%;
        margin-top: 75px;
    }

    & ul {
        & li {

            text-align: left;

            &:not(:last-child) {
                border-bottom: 1px solid #e0e0e0;
            }
        }
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

    &__sublist li {
        padding: 20px;
        font-weight: 700;
    }

    &__subsublist {
        padding: 20px;

        & li {
            font-weight: 400;
            margin: 20px;

            & a {
                display: flex;
                align-items: center;
                
            }
        }
    }
}
</style>
