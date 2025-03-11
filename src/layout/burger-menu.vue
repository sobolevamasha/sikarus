<template>
    <div class="burger-menu">
        <v-container class="d-flex pa-7">
            <div class="d-flex flex-column burger-menu__block">
                <div class="burger-menu__scroll">
                    <ul class="burger-menu__list pa-0">
                        <li v-for="(item, index) of items" class="d-flex align-center justify-space-between">
                            <router-link 
                            @click.native="onRouterClick"
                            :to="item.to">{{ item.name }}</router-link>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 366 1024">
                                <g id="icomoon-ignore">
                                </g>
                                <path
                                    d="M339.968 547.84q0 7.168-5.12 12.288l-267.264 267.264q-5.12 5.12-12.288 5.12t-13.312-5.12l-28.672-28.672q-6.144-6.144-6.144-13.312t6.144-13.312l224.256-224.256-224.256-225.28q-6.144-5.12-6.144-12.288t6.144-13.312l28.672-28.672q5.12-6.144 13.312-6.144t12.288 6.144l267.264 266.24q5.12 5.12 5.12 13.312z">
                                </path>
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
//import Divider from "../components/divider";

export default {
    name: "burger-menu",
    components: {
        //Divider
    },
    data() {
        return {
        }
    },
    computed: {
        items() {
            //return this.$store.state.menuItems;
            return [
                {
                    name: "О компании",
                    to: "about"
                },
                {
                    name: "Строительство",
                    to: "about"
                },
                {
                    name: "Контакты",
                    to: "about"
                }
            ]
        }
    },
    methods: {
        onRouterClick() {
            this.$store.state.withBurgerMenu = !this.$store.state.withBurgerMenu
        }
    }
}

</script>

<style lang="scss">
.burger-menu {
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
            border-bottom: 1px solid #e0e0e0;
            padding: 10px 0;
            text-align: left;
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
}
</style>