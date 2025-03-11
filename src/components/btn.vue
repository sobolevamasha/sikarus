<template>
        <v-btn type="button" class="cmp-button btn"
        @click="$emit('click')">
            <slot name="default">{{ label }}</slot>
        </v-btn>
</template>

<script>
export default {
    name: "btn",
    props: {
        label: {},
    }
}
</script>

<style lang="scss">
.btn {
    font-weight: 700;
    text-transform: uppercase;
    background-color: $sika-yellow !important;
    color: $dark-gray !important;
    height: 40px !important;
    padding: 8px 30px !important;
    font-family: $secondary-font-family;
    font-size: 16px !important;
    line-height: 10px !important;
}
</style>