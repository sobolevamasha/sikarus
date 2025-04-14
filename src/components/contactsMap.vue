<template>
    <div id="map" style="width: 100%; height: 500px;"></div>
</template>

<script>
import config from '@/config';

export default {
    data() {
        return {
            map: null,
            markers: [
                { coords: [60.069984, 30.357676], hint: "Офис Санкт-Петербург" },
                { coords: [55.751426, 37.618879], hint: "Офис Москва" },
            ],
        };
    },
    mounted() {
        this.loadYandexMaps()
    },
    methods: {
        loadYandexMaps() {
            const script = document.createElement("script");
            script.src = config.YANDEX_MAP_API_KEY;
            script.onload = () => {
                this.initMap();
            };

            document.head.appendChild(script);

        },
        initMap() {
            ymaps.ready(() => {
                this.map = new ymaps.Map("map", {
                    center: [55.755814, 37.617673],
                    zoom: 4,
                });

                this.markers.forEach(marker => {
                    const placemark = new ymaps.Placemark(marker.coords, {
                        hintContent: marker.hint,
                    });
                    this.map.geoObjects.add(placemark);
                });
            });
        },
    },
};

</script>

<style lang="scss">
/* Добавьте стили, если необходимо */
</style>