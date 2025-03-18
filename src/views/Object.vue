<template>
    <div class="object">
        <hero :title="h1" :background="background" :isSmall="true" />
    </div>
</template>

<script>
import hero from '@/components/hero.vue';
import objectList from '@/store/objects';
import download from '@/components/download.vue';

export default {
    name: "Object",
    components: {
        hero,
        download
    },
    data() {
        return {
            h1: 'Объект',
            //h4: 'Строим доверие',
            background: require('@/assets/objects.jpg'),
            //video: 'https://sika.scene7.com/is/content/sika/glo-skyline-loop'
        }
    },
}
</script>