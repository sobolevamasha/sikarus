<template>
    <ul class="products__list">
        <li v-for="(product, index) in products" class="products__item">
            <img v-if="product.previewImg" :src="product.previewImg" />
            <div class="products__item--content">
                <h4> {{ product.name }}</h4>
                <p class="cmp-line-clamp cmp-line-clamp--3">{{ product.descr }}</p>
                <ul class="cmp-product__attributes cmp-font--light cmp-line-clamp cmp-line-clamp--3">
                    <li v-for="(benifit, index1) in product.benifits">
                        {{ benifit.benifit }}
                    </li>
                </ul>
            </div>
            <router-link class="products__item--link" to="/product"></router-link>
        </li>
    </ul>
</template>

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

<style lang="scss">
.products {

    &__item {
        display: flex;
        justify-content: flex-start;
        padding-bottom: 20px;
        border-bottom: 2px solid #e0e0e0;
        margin: 20px 0;
        position: relative;
        flex-direction: column;
        align-items: center;
        transition: all 0.2s ease-in;

        &:hover {
            border-bottom: 2px solid $sika-yellow;

            & h4 {
                transition: all 0.2s ease-in;
                color: $sika-yellow;
            }
        }

        @include up($md) {
            flex-direction: row;
        }

        & img {
            max-width: 230px;
            margin: 0 50px;
            object-fit: contain;
        }

        &--content {
            //width: 100%;
            text-align: left;
        }

        &--link {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }

        & li {
            position: relative;
            margin-left: 30px;
            margin-bottom: 5px;

            &::before {
                position: absolute;
                content: url('@/assets/icons/check.svg');
                width: 15px;
                height: 15px;
                top: 0;
                left: -30px;
            }
        }
    }

}
</style>