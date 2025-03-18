<template>
    <div class="mainmenu d-none d-md-block">
        <v-container>
            <ul class="mainmenu__list" ref="menu">
                <li v-for="(menuItem, index) in menuItems" :key="index" class="mainmenu__list-item"
                    @click="toggleDropdown(index)">
                    {{ menuItem.name }}

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
        </v-container>

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
        // handleClickOutside() {
        //     this.menuItems.forEach(item => {
        //         item.isOpen = false;
        //     });
        // },
    },
    mounted() {
        //document.addEventListener('click', this.handleClickOutside);
    },
    beforeDestroy() {
        //document.removeEventListener('click', this.handleClickOutside);
    }

}
</script>

<style lang="scss">
.mainmenu {
    //position: absolute;

    color: $black;

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
        height: 50px;
        display: flex;
        justify-content: left;
        align-items: center;
    }

    &__list-item {
        padding: 0 15px;
        //position: relative;
        height: 100%;
        //width: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;

        &:not(:last-child)::after {
            position: absolute;
            content: "";
            height: 100%;
            width: 2px;
            background-color: #e0e0e0;
            right: 0;
            top: 0;

        }
    }

    &__list-subitem {
        background: $white;
        position: absolute;
        top: 60px;
        left: 0;
        display: flex;
        width: 100%;
        text-align: left;

        & a {
            color: $black !important;
        }

    }

    &__list-subitemList {
        width: 100%;
        padding: 20px;
    }
}
</style>