<template>
    <div class="mainmenu d-none d-md-block" ref="dropdown">

        <ul class="mainmenu__list">
            <li v-for="(menuItem, index) in menuItems" :key="index" class="mainmenu__list-item"
           
                @click="toggleDropdown(index)">

                <div class="mainmenu__list-item-name">
                    <a v-if="menuItem.to" :href="menuItem.to"></a>
                    {{ menuItem.name }}
                </div>

                <div v-if="menuItem.isOpen" class="dropdown mainmenu__list-subitem grid-x">
                    <div v-for="(item, itemIndex) in menuItem.items" :key="itemIndex" class="mainmenu__list-subitemList
                        cell medium-2 cmp-nav-mega-dropdown__column">

                        <h6 class="cmp-nav-mega-dropdown__content__sub-title cmp-font--bold">
                            {{ item.title }}
                        </h6>
                        <ul>
                            <li v-for="(subitem, subIndex) in item.subitems" :key="subIndex">
                                <a :href="subitem.to" target="_self">
                                    {{ subitem.name }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>

<!-- <ul class="burger-menu__list pa-0">
                        <li v-for="(menuItem, index) in menuData" :key="index" @click="toggleDropdown(index)"
                            class="d-flex align-center justify-space-between"
                            :class="{ 'burger-menu__list-item--isOpen': menuItem.isOpen }">

                            <div class="burger-menu__list-item-name">

                                <a v-if="menuItem.to" @click="onRouterClick" :href="menuItem.to"></a>
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

                            <ul v-if="menuItem.isOpen" class="dropdown burger-menu__list-subitem grid-x">
                                <li v-for="(item, itemIndex) in menuItem.items" :key="itemIndex" class="burger-menu__list-subitemList
                        cell medium-2 cmp-nav-mega-dropdown__column">

                                    <h6 class="cmp-nav-mega-dropdown__content__sub-title cmp-font--bold">
                                        {{ item.title }}
                                    </h6>
                                </li>
                            </ul>



                        </li>
                    </ul> -->

                    
    </div>
</template>

<script>
import Vue from "vue";
import menuItems from '@/store/menu-items.js'

export default {
    data() {
        return {
            menuItems: menuItems,
            openDropdownIndex: null
        }
    },

    methods: {
        toggleDropdown(index) {
            this.menuItems.forEach((item, idx) => {
                item.isOpen = idx === index ? !item.isOpen : false;
            });
        },
        handleClickOutside(event) {
            const dropdown = this.$refs.dropdown;
            if (dropdown && !dropdown.contains(event.target)) {
                this.menuItems.forEach((item, idx) => {
                    item.isOpen = false;
                });
            }
        },
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.handleClickOutside);
    }

}
</script>

<style lang="scss">
.mainmenu {
    position: absolute;
    width: 85%;
    right: 40px;
    bottom: -50px;
    color: $black;

    @include up($lg) {
        bottom: -35px;
        width: 86%;
    }

    @include up($xl) {
        width: 87%;
    }

    h6 {
        font-weight: 700;
        border-bottom: 2px solid #3c3c3c;
        margin-bottom: 10px;
    }

    &__list {
        background: $white;
        z-index: 100;
        position: relative;
        //width: auto;
        height: 70px;
        display: flex;
        justify-content: left;
        align-items: center;
        padding: 0 15px !important;
    }

    &__list-item {
        padding: 0 15px;
        //position: relative;
        height: 100%;
        //width: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;

        &:not(:last-child) {
            & .mainmenu__list-item-name {
                &::after {

                    content: "";
                    width: 1px;
                    background-color: #e0e0e0;
                    height: 60%;
                    position: absolute;
                    right: -15px;
                }
            }
        }
    }

    &__list-item-name {
        position: relative;
        display: flex;
        height: 100%;
        align-items: center;

        & a {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }


    }

    &__list-subitem {
        background: $white;
        position: absolute;
        top: 60px;
        left: 0;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        text-align: left;

        & a {
            display: block;
            color: $black !important;
            padding: 5px 10px 10px;
            border-bottom: 1px solid #e0e0e0;
        }

    }

    &__list-subitemList {
        width: 100%;
        padding: 20px;
    }
}
</style>