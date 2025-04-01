<template>
    <div class="cabinet">
        <hero :title="h1" :background="background" :isSmall="true" />
        <div class="grid-container my-4 my-sm-8 my-lg-16">
            <h3 class="mb-8">Ваша корзина документов</h3>
            <h3 class="mb-8">Ваши выбранные продукты</h3>

        </div>
    </div>

</template>

<script>
import hero from '@/components/hero.vue';
export default {
    name: "Auth",
    components: {
        hero
    },
    data() {
        return {
            h1: 'Моя Sika',
            background: require('@/assets/hero-skyline-2.jpg'),
        }
    },
}
</script>