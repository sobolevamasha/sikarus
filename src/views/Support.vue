<template>
    <div class="support">
        <div class="grid-container section-margin">
            <img class="support__img" src="@/assets/tmp/decision.jpg" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis dolor rerum debitis assumenda cumque
                totam velit soluta earum delectus, libero, laborum incidunt eligendi ex minima minus eaque quaerat
                itaque? Voluptatem?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis dolor rerum debitis assumenda cumque
                totam velit soluta earum delectus, libero, laborum incidunt eligendi ex minima minus eaque quaerat
                itaque? Voluptatem?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis dolor rerum debitis assumenda cumque
                totam velit soluta earum delectus, libero, laborum incidunt eligendi ex minima minus eaque quaerat
                itaque? Voluptatem?</p>

            <div class="accordion">
                <div class="accordion-list">
                    <h4 class="accordion-header">Дополнительная информация<svg class="arrow" viewBox="0 0 887 1024">
                            <path
                                d="M64.512 285.696l378.88 364.544 380.928-364.544q22.528-26.624 49.152 0 26.624 22.528 0 49.152l-405.504 401.408q-22.528 22.528-49.152 0l-405.504-401.408q-26.624-26.624 0-49.152 24.576-24.576 51.2 0z">
                            </path>
                        </svg></h4>
                    <div class="accordion-content">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis dolor rerum debitis assumenda
                            cumque
                            totam velit soluta earum delectus, libero, laborum incidunt eligendi ex minima minus eaque
                            quaerat
                            itaque? Voluptatem?</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis dolor rerum debitis assumenda
                            cumque
                            totam velit soluta earum delectus, libero, laborum incidunt eligendi ex minima minus eaque
                            quaerat
                            itaque? Voluptatem?</p>
                    </div>
                </div>
            </div>

            <div class="support__btns">
                <router-link to="/">
                    Техническая поддержка
                </router-link>
                <router-link to="/">
                    Записаться на вебинар
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { accordion } from '@/utils/utils';

export default {

    methods: {
        initAccordeon() {
            accordion();
        }
    },
    mounted() {
        this.initAccordeon();
    }
}
</script>

<style lang="scss">
.support {
    text-align: left;

    & a {
        color: #000 !important;
    }

    &__img {
        max-width: 800px;
        max-height: 400px;
        width: 100%;
        object-fit: cover;
        margin-bottom: 20px;
    }

    &__btns {
        @include up($sm) {
            display: flex;
            justify-content: center;
        }

        & a {
            display: block;
            padding: 5px 10px;
            margin: 10px;
            border: 4px solid transparent;
            background-color: $sika-yellow;
            border-radius: 3px;

            &:hover {
                border: 4px solid $sika-yellow;
                background-color: #fff;
            }
        }
    }
}
</style>