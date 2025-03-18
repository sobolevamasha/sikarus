<template>
    <nav class="header" :class="headerClass">

        <transition name="burger" appear>
            <burger-menu v-if="withBurgerMenu" />
        </transition>

        <div class="header__mobile d-md-none">
            <v-container class="header__mobile--wrap px- d-flex justify-space-between">
                <div class="header__mobile--left d-flex align-center">
                    <div class="header__mobile--title d-flex align-center">
                        <a href="/" class="logo">
                            <img src="../assets/logo1.png" />
                        </a>
                        <a href="https://www.sika.com" target="_blank" class="ml-4">Sika Group</a>
                    </div>
                </div>
                <div class="header__mobile--right">
                    <transition name="fade-quick" mode="out-in">
                        <button @click="onToggleBurgerMenu" class="header__mobile--btn d-flex flex-column"
                            :class="{ 'header__mobile--close-btn': withBurgerMenu }">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </transition>
                </div>
            </v-container>
        </div>
        <div class="header__top  d-none d-md-flex">
            <div class="header__wrap header__container px-2 d-flex justify-space-between">
                <div class="header__left d-flex align-center">
                    <div class="header__title">
                        <a href="https://www.sika.com" target="_blank">Sika Group</a>
                    </div>
                    <div class="header__dropdown d-flex ">
                        <button class="d-flex align-center">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="28" height="25"
                                viewBox="0 0 512 512" fill="white" class="mr-2">
                                <g id="icomoon-ignore">
                                </g>
                                <path
                                    d="M256 0c-141.385 0-256 114.615-256 256s114.615 256 256 256 256-114.615 256-256-114.615-256-256-256zM256 480.001c-31.479 0-61.436-6.506-88.615-18.226l116.574-131.145c2.603-2.929 4.041-6.711 4.041-10.63v-48c0-8.837-7.163-16-16-16-56.495 0-116.102-58.731-116.687-59.313-3-3.001-7.070-4.687-11.313-4.687h-64c-8.836 0-16 7.164-16 16v96c0 6.061 3.424 11.601 8.845 14.311l55.155 27.578v93.943c-58.026-40.478-96-107.716-96-183.832 0-34.357 7.745-66.903 21.569-96h58.431c4.244 0 8.313-1.686 11.314-4.686l64-64c3-3.001 4.686-7.070 4.686-11.314v-38.706c20.281-6.037 41.759-9.294 64-9.294 35.203 0 68.502 8.13 98.141 22.6-2.072 1.751-4.088 3.582-6.023 5.518-18.133 18.132-28.118 42.239-28.118 67.882s9.985 49.75 28.118 67.882c18.217 18.216 42.609 28.132 67.817 28.13 1.583 0 3.171-0.040 4.759-0.118 6.907 25.901 19.376 93.328-4.202 186.167-0.222 0.872-0.348 1.744-0.421 2.612-40.662 41.54-97.35 67.328-160.071 67.328z">
                                </path>
                            </svg>

                            Countries
                            <!-- <ul class="header__dropdown--country">
                                <li v-for="(country, index) in countries" :key="index">
                                    <a :href="country.link">
                                        {{ country.name }}
                                    </a>
                                </li>
                            </ul> -->
                        </button>
                        <button class="header__dropdown--product-list">
                            Продукция
                            <ul class="header__dropdown--product-item">
                                <li v-for="(product, index) in products" :key="index">
                                    <a :href="product.link" target="_blank">
                                        {{ product.title }}
                                    </a>
                                </li>

                            </ul>
                        </button>
                    </div>
                </div>
                <div class="header__right">
                    <ul class="header__dropdown d-flex">
                        <li>
                            <router-link to="/about">О компании</router-link>
                        </li>
                        <li>
                            <router-link to="/contacts">Контакты</router-link>
                        </li>
                        <li>
                            <a>Дилеры</a>
                        </li>
                        <li>
                            <a>Моя Sika</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="header__content  d-none d-md-flex">
            <div class="header__container d-flex justify-space-between align-center">
                <router-link to="/" class="header__content-left d-flex align-center">
                    <div class="logo">
                        <img src="../assets/Sika_ClaimU_pos_rgb.svg" />
                    </div>

                    <div class="header__content-title">Sika Россия</div>
                </router-link>
                <div class="header__content-right">
                    <div class="header__content-search">
                        <form method="get" class="search-form">
                            <input type="text" name="q" placeholder="Поиск"
                                data-placeholder-large="Найти Продукт, Систему или Решение" autocomplete="off"
                                class="cmp-search-form__field cmp-font--light" />
                            <button type="submit">
                                <img src="../assets/icons/search.svg" />
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
        <mainmenu />

    </nav>
</template>

<style lang="scss">
.header__dropdown--product-list:hover {
    transition: all 0.2s ease-in;

    .header__dropdown--product-item {
        display: block;
    }
}

.header {
    min-height: 75px;
    width: 100%;

    @include up($md) {
        position: absolute;
    }

    &__mobile {
        background-color: $sika-yellow;
        position: fixed;
        width: 100%;
        z-index: 10;

        &--title a {
            color: $black !important;
        }

        &--btn {
            justify-content: space-between;
            height: 50px;
            padding: 15px 0 15.5px 0;
            border: 0;

            span {
                display: block;
                width: 30px;
                height: 1.5px;
                background: $black;
                @include transition();
            }
        }

        &--close-btn {
            position: relative;
            padding: 0;
            height: 50px;
            width: 30px;

            .the-header__basket-btn & {
                left: -3px;
            }


            span {
                display: block;
                width: 30px;
                height: 1.5px;
                background: $black;
                @include transition();

                &:nth-child(1) {
                    position: absolute;
                    top: 50%;
                    transform: rotate(45deg) translateY(-50%);
                }

                &:nth-child(3) {
                    display: none;
                }

                &:nth-child(2) {
                    position: absolute;
                    top: 50%;
                    transform: rotate(-45deg) translateY(-50%);
                }
            }
        }
    }

    &__top {
        box-shadow: 0 1px 2px #0003, 0 1px 3px #0000001a;
        background-color: $dark-gray;
        z-index: 10;
        position: relative;
    }

    &__container {
        width: 100%;
        margin: auto;
        max-width: 1920px;
        padding: 10px 20px;
    }

    &__title {
        padding: 8px 20px;
        color: $white;
    }

    &__dropdown {
        & button {
            padding: 8px 20px;
            color: $white;
            position: relative;
        }

        & li {
            padding: 8px 20px;
            color: $white;
            position: relative;
            
            &:hover,
            &:focus {

                &::after {

                    content: "";
                    position: absolute;
                    width: 100%;
                    bottom: -10px;
                    left: 0;
                    border-bottom: 4px solid $sika-yellow;
                    border-radius: 20px;
                }
            }
        }

        & a {
            display: block;
            height: 100%;
        }

        &--product-item {
            display: none;
            position: absolute;
            background: $gray;
            z-index: 100;
            top: 50px;
            text-align: left;
            padding: 10px 25px 20px !important;


            & li {
                padding: 10px 0;
                position: relative;
                border-bottom: 1px solid #ffffff;

                &:first-child:after {
                    content: "";
                    position: absolute;
                    width: 0;
                    height: 0;
                    //bottom: 0;
                    top: -19px;
                    left: -10px;
                    z-index: 11;
                    filter: drop-shadow(0 -1px 1px rgba(0, 0, 0, .16));
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                    border-bottom: 10px solid $gray;
                }
            }
        }

        &--product-list {
            position: relative;

            &:hover {
                &::after {
                    content: "";
                    position: absolute;
                    width: 100%;
                    bottom: -11px;
                    left: 0;
                    border-bottom: 4px solid $sika-yellow;
                    border-radius: 20px;
                }
            }

        }
    }

    &__content {
        animation: slide-up .4s;
        background-color: $sika-yellow;
        color: black;
        position: absolute;
        width: 100%;
        height: 90px;
        z-index: 10;

        & a {
            color: black !important;
        }

        @include up($md) {
            //top: 80px;
            height: 100px;
            position: relative;
        }

        @include up($lg) {
            position: relative;
            height: 135px;
            margin-top: 10px;
        }
    }

    & .logo {
        & img {
            max-height: 55px;
            max-width: 60px;

            @include up($lg) {
                max-height: 115px;
                max-width: 120px;
            }
        }
    }

    &__content-title {
        font-size: 30px;
    }

    & .search-form {
        & input {
            border-bottom: 1px solid $black;
            color: $black;
            padding: 10px 5px;
        }
    }


}
</style>

<script>
import burgerMenu from '@/layout/burger-menu.vue';
import mainmenu from '@/components/mainmenu.vue';
import router from '@/router';

export default {
    name: "the-header",
    components: {
        burgerMenu,
        mainmenu
    },
    data() {
        return {
            isHeaderScrolled: false,
            isHeaderBurgered: false,
        }
    },
    computed: {
        headerClass() {
            return {
                'burgered': this.isHeaderBurgered,
            }
        },
        withBurgerMenu() {
            return this.$store.state.withBurgerMenu;
        },
        withProductMenu() {
            //return this.$store.state.withProductMenu;
        },
        products() {
            return [
                {
                    title: 'Строительство',
                    link: 'about',
                },
                {
                    title: 'Частное домостроение',
                    link: 'https://sikahome.ru/',
                },

            ]
        }
    },
    methods: {
        onToggleBurgerMenu() {
            this.$store.state.withBurgerMenu = !this.$store.state.withBurgerMenu;
            if (this.$store.state.withBurgerMenu) setTimeout(() => {
                this.isHeaderBurgered = true;
            }, 100);
            else this.isHeaderBurgered = false;
        },
        // onToggleProductMenu() {
        //     this.$store.state.withProductMenu = !this.$store.state.withProductMenu;
        // },



    },
}

</script>