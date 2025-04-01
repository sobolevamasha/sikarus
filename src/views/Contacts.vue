<template>
    <div class="contacts">
        <hero :title="h1" :isSmall="true" />
        <div class="grid-container my-4 my-sm-8 my-lg-16">
            <div id="acc"></div>

            <div class="contacts__accordion">
                <h4 class="contacts__accordion-header">Санкт-Петербург<svg class="arrow" viewBox="0 0 887 1024">
                        <path
                            d="M64.512 285.696l378.88 364.544 380.928-364.544q22.528-26.624 49.152 0 26.624 22.528 0 49.152l-405.504 401.408q-22.528 22.528-49.152 0l-405.504-401.408q-26.624-26.624 0-49.152 24.576-24.576 51.2 0z">
                        </path>
                    </svg></h4>
                <div class="contacts__accordion-content">
                    <ul>
                        <li>
                            <h6>Офис</h6>
                            <div>194292, Россия, Санкт-Петербург, 4-й Верхний переулок, 7</div><a
                                href="tel:+7 (812) 334-79-79">Тел.: +7 (812) 334-79-79</a><a
                                href="mailto:spb@ru.sika.com">E-mail: spb@ru.sika.com</a>
                        </li>
                        <li>
                            <h6>Руководитель подразделения Санкт-Петербург</h6>
                            <div>Лобастов Антон Александрович</div><a href="tel:+7 981 698 01 52">Тел.: +7 981 698 01
                                52</a><a href="mailto:spb@ru.sika.com">E-mail: spb@ru.sika.com</a>
                        </li>
                        <li>
                            <h6>Склад</h6>
                            <div>195279, г. Санкт-Петербург, шоссе Революции, д. 88/3</div><a
                                href="tel:+7 (495) 5 777 333">Тел.: +7 (495) 5 777 333</a>
                        </li>
                    </ul>

                    <div class="contacts__download">
                        <a class="contacts__download--link" href="/assets/tmp/map-spb.jpg" target="_blank">
                            <div class="contacts__download--content">
                                <i class="cmp-icon cmp-icon-download"></i>
                                <h5 class="contacts__download--title">Схема проезда склад Санкт-Петербург.jpg</h5>
                            </div>
                            <div class="contacts__download--descr">
                                <div class="">Изображение</div>
                                <span class="contacts__download--size">2 MB</span>
                            </div>
                        </a>

                        <button class="contacts__download--btn">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                viewBox="0 0 768 768">
                                <g id="icomoon-ignore">
                                </g>
                                <path fill="#000"
                                    d="M415.5 288h177l-177-175.5v175.5zM511.5 511.5v-63h-96v-96h-63v96h-96v63h96v96h63v-96h96zM448.5 64.5l192 192v384q0 25.5-19.5 44.25t-45 18.75h-384q-25.5 0-45-18.75t-19.5-44.25l1.5-513q0-25.5 18.75-44.25t44.25-18.75h256.5z">
                                </path>
                            </svg>

                        </button>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import hero from '@/components/hero.vue';
import download from '@/components/download.vue';

export default {
    name: "Contacts",
    components: {
        hero,
        download

    },
    data() {
        return {
            h1: 'Контакты',
            //h4: 'Строим доверие',
            //background: require('@/assets/hero-skyline-2.jpg'),
            //video: 'https://sika.scene7.com/is/content/sika/glo-skyline-loop'
        }
    },
    methods: {
        initAccordeon() {
            const header = document.querySelector('.contacts__accordion-header');
            const content = document.querySelector('.contacts__accordion-content');
            const button = document.querySelector('.contacts__download--btn');

            header.addEventListener('click', () => {
                const isActive = content.classList.toggle('active');

                const arrowElement = header.querySelector('.arrow');
                if (isActive) {
                    arrowElement.classList.add('rotate');
                } else {
                    arrowElement.classList.remove('rotate');
                }
            });

            button.addEventListener('click', () => {
                const isButtonActive = button.classList.toggle('contacts__download--btn--active');
            })
        }

    },
    mounted() {
        this.initAccordeon();
    }

}
</script>

<style lang="scss">
.contacts {
    & h4 {
        margin: 0;
    }

    & h6 {
        font-weight: 700;
    }


    & a {
        color: $black !important;
    }

    &__items {
        & a {
            display: block;
            color: $black !important;
        }

    }

    &__accordion {
        border-radius: 4px;
        margin-bottom: 10px;
    }

    &__accordion-header {
        border-radius: 4px;
        padding: 16px 24px;
        cursor: pointer;
        background-color: #f5f5f5;
        //border-bottom: 1px solid #ccc;
        outline: unset;
        text-align: left;
        margin-bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__accordion-content {
        display: none;
        padding: 24px 24px;
        text-align: left;

        & li {
            margin-bottom: 32px;

            & div {
                margin-bottom: 10px;
            }

            & a {
                display: table;
            }
        }

        &.active {
            display: block;
        }
    }

    & .arrow {
        width: 24px;
        height: 24px;
        transition: transform 0.2s;
    }

    & .rotate {
        transform: rotate(180deg);
    }

    &__download {
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all 0.3s ease-in;
        padding: 15px 25px;
        background-color: $light-gray-section;
        margin-bottom: 15px;

        &:hover {
            box-shadow: 0 1px 2px #0003, 0 1px 5px #0000001a;
        }

        &--link {
            width: 100%;
            padding-right: 40px;
            display: flex !important;
            justify-content: space-between;
            align-items: center;
        }

        &--content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &--title {
            margin-left: 20px;
        }

        // &--descr {
        //     display: flex;
        //     justify-content: space-between;
        //     align-items: center;
        // }

        &--btn {
            position: relative;
            z-index: 10;

            &--active {
                & svg path {
                    @include transition();
                    fill: $sika-yellow;
                }
            }
        }
    }




}
</style>