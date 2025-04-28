<template>
    <div class="service-object">
        <div class="grid-container section-margin">
            <img class="service-object__img" src="@/assets/tmp/decision.jpg" />
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
                    <h4 class="accordion-header">Ремонт и защита<svg class="arrow" viewBox="0 0 887 1024">
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
                <div class="accordion-list">
                    <h4 class="accordion-header">Гидроизоляция<svg class="arrow" viewBox="0 0 887 1024">
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
                <div class="accordion-list">
                    <h4 class="accordion-header">Устройство полов<svg class="arrow" viewBox="0 0 887 1024">
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
.service-object {
    text-align: left;

    &__img {
        max-width: 800px;
        max-height: 400px;
        object-fit: cover;
        margin-bottom: 20px;
    }
}
</style>