<template>
    <section class="statistics">
        <div class="grid-container">
            <v-container>
                <ul class="statistics__list" :class="{ 'statistics__list--withgrid': blocks.length > 2 }">
                    <li v-for="(block, index) in blocks" :key="index" class="statistics__block">
                        <div>{{ block.top }}</div>
                        <span>{{ block.bottom }}</span>
                    </li>
                </ul>
            </v-container>
        </div>
    </section>
</template>

<style lang="scss">
.statistics {
    background-color: $sika-yellow;
    background-image: url("~@/assets/bg-yellow.jpg");
    background-position: top center;

    &__list {

        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        column-gap: 25px;

        @include up($sm) {
            flex-wrap: nowrap;
        }

        &--withgrid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 10px;

            @include up($sm) {
                grid-template-columns: repeat(2, 1fr);
                flex-wrap: nowrap;
                grid-gap: 25px;
            }

            @include up($lg) {
                grid-template-columns: repeat(3, 1fr);
            }
        }

    }

    &__block {
        width: 100%;
        color: $sika-yellow;
        padding: 25px;
        font-size: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 10px 0;
        @include up($sm) {
            margin: 0;
        }

        &:nth-child(odd) {
            background-color: $white;

            & span {
                color: $black;
                font-size: 22px;
            }
        }

        &:nth-child(even) {
            background-color: $light-gray;

            & span {
                color: $white;
                font-size: 22px;
            }
        }
    }
}
</style>

<script>
export default {
    name: "statistics",
    props: ["blocks"],
}

</script>