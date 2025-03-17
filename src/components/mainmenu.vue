<template>
    <div class="mainmenu d-none d-lg-block">
        <v-container>
            <ul class="mainmenu__list">
                <li v-for="(menuItem, index) in menuItems" :key="index" class="mainmenu__list-item"
                    @click="toggleMenu(index)">
                    {{ menuItem.name }}

                    <div v-if="menuOpened"
                    class="mainmenu__list-subitem grid-x">
                        <div v-for="(el, index) in menuItem.items" :key="index" class="mainmenu__list-subitemList
                        cell medium-2 cmp-nav-mega-dropdown__column">

                            <h6 class="cmp-nav-mega-dropdown__content__sub-title cmp-font--bold">
                                {{ el.title }}
                            </h6>
                            <ul>
                                <li v-for="(subItem, index) in el.subitems">
                                    <a :href="subItem.to" target="_self">
                                        {{ subItem.name }}
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
            showMenu: false,
            selectedItem: {}
        }
    },
    components: {
        menuItems,
    },
    computed: {
        menuItems() {
            return menuItems;
        },
        menuOpened() {
            return this.$store.state.menuOpened;
        },
    },
    methods: {
        toggleMenu(index) {
            this.selectedItem = this.menuItems[index];
            this.$store.state.menuOpened = !this.$store.state.menuOpened;
            console.log('this.selectedItem = ', this.selectedItem);
        }
    },
    mounted() {
    },
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