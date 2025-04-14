<template>
    <ul class="product-list-blocks">
        <li v-for="(product, index) in products" :key="index">
            <router-link to="/product"></router-link>
            <h4> {{ product.name }} </h4>
            <div class="product-list-blocks__descr">{{ product.descr }}</div>
        </li>
    </ul>

</template>

<style lang="scss">
.product-list-blocks {
    display: grid;
    text-align: left;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
    justify-content: center;
    margin-bottom: 40px !important;

    @include up($sm) {
        grid-template-columns: repeat(2, 1fr);
    }

    @include up($md) {
        grid-template-columns: repeat(4, 1fr);
    }

    & li {
        padding: 25px;
        box-shadow: 0 1px 2px #0003, 0 1px 3px #0000001a;
        background-color: #fff;
        border: 1px solid #e0e0e0;
        outline: 1px solid transparent;
        position: relative;
        transition: all 0.2s ease;

        &:hover {
            background-color: $sika-yellow;
            color: $white !important;
        }

        & h4 {
            font-weight: 700;
        }

        & a {
            color: $black !important;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }
    }
}
</style>

<script>
import products from '@/store/products';
export default {
    computed: {
        products() {
            return products;
        }
    },
}
</script>