<template>

    <div id="map" style="width: 100%; height: 400px;"></div>
</template>

<script>
import config from '@/config';

//let ymaps = null;

export default {
    data() {
        return {
            map: null,
            markers: [
                { coords: [55.751574, 37.573856], hint: "Marker 1" },
                { coords: [55.761574, 37.583856], hint: "Marker 2" },
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
                    zoom: 10,
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