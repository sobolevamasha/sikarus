<template>
    <div class="breadcrumbs d-none d-sm-block">
        <div class="grid-container">
            <ul>
                <li v-if="level1">
                    <a>
                        {{ level1 }}
                    </a>
                </li>
                <li v-if="level2">
                    <a>
                        {{ level2 }}
                    </a>
                </li>
                <li v-if="level3">
                    <a>
                        {{ level3 }}
                    </a>
                </li>
                <li v-if="level4">
                    <a>
                        {{ level4 }}
                    </a>
                </li>
                <li v-if="level5">
                    <a>
                        {{ level5 }}
                    </a>
                </li>
            </ul>
        </div>

    </div>
</template>

<style lang="scss">
.breadcrumbs {
    padding: 25px 0;

    & ul {
        display: flex;
    }

    & li {
        position: relative;
        padding: 0 15px;

        &:not(:last-child) {
            font-weight: 700;

            &::after {
                position: absolute;
                content: ">";
                height: 100%;
                top: 0;
                right: -5px;
                margin-left: 10px;
                color: $dark-gray;
            }
        }
    }

    & a {
        color: $black !important;
        transition: all 0.2s ease-in;
        &:hover {
            color: $sika-yellow !important;
        }
    }
}
</style>

<script>
export default {
    name: "breadcrumbs",
    props: ["level1", "level2", "level3", "level4", "level5"],
    methods: {

    },


}
</script>