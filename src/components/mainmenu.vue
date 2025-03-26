<template>
    <div class="mainmenu d-none d-md-block" ref="dropdown">

        <ul class="mainmenu__list">
            <li v-for="(menuItem, index) in menuItems" :key="index" class="mainmenu__list-item"
                @click="toggleDropdown(index)">

                <div class="mainmenu__list-item-name">
                    <router-link v-if="menuItem.to" :to="menuItem.to"></router-link>
                    {{ menuItem.name }}
                </div>

                <div v-if="menuItem.isOpen" class="dropdown mainmenu__list-subitem grid-x">
                    <div v-for="(item, itemIndex) in menuItem.items" :key="itemIndex" class="mainmenu__list-subitemList
                        cell medium-2 cmp-nav-mega-dropdown__column">
                        <router-link v-if="item.to" :to="item.to" class="dropdown mainmenu__list-subitem-link">
                            <h6 class="cmp-nav-mega-dropdown__content__sub-title cmp-font--bold">

                                {{ item.title }}
                            </h6>
                        </router-link>
                        <h6 v-else class="cmp-nav-mega-dropdown__content__sub-title cmp-font--bold">
                            {{ item.title }}
                        </h6>
                        <ul>
                            <li v-for="(subitem, subIndex) in item.subitems" :key="subIndex">
                                <router-link :to="subitem.to" target="_self">
                                    {{ subitem.name }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import Vue from "vue";
import menuItems from '@/store/menu-items.js'
import router from "@/router";

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

    color: $black;

    @include up($lg) {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: -40px;
        padding-left: 130px;
        padding-right: 40px;
    }

    @include up($xl) {
        //width: 80%;
        //max-width: 2200px;
    }

    h6 {
        font-weight: 700;
        border-bottom: 2px solid #3c3c3c;
        margin-bottom: 10px;
    }

    &__list {
        background: $white;
        z-index: 5;
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

        & li {
            transition: all 0.3s ease-in;

            &:hover {
                & a {
                    color: $sika-yellow !important;
                    border-bottom: 1px solid $sika-yellow;
                }
            }
        }
    }

    &__list-subitem-link {
        border-bottom: none !important;
        padding: 0 !important;


    }
}
</style>