<template>
	<div class="homepage" v-scroll="handleScroll">
		<hero />
		<helpbox />
		<activity />
		<news />
		<about />
		<slider :title="title" :items="swiperItems" />
		<statistics :blocks="blocks" />

	</div>
</template>

<script>

//import {scrollTo} from '@/utils/utils';
import helpbox from '@/components/HomePage/helpbox.vue';
import hero from '@/components/HomePage/hero.vue';
import activity from '@/components/HomePage/activity.vue';
import news from '@/components/HomePage/news.vue';
import about from '@/components/HomePage/about.vue';
import slider from '@/components/slider.vue';
import statistics from '@/components/statistics.vue';

export default {
	name: "HomePage",
	components: {
		hero,
		helpbox,
		activity,
		news,
		about,
		slider,
		statistics
	},
	data() {
		return {
			title: "Объекты Sika в России",
			swiperItems: [
				{
					name: "Жилой комплекс PRIME PARK",
					location: "г. Москва",
					to: "",
					img: require('@/assets/tmp/slide1.jpg')
				},
				{
					name: 'Многофункциональный комплекс "Лахта-Центр"',
					location: "г. Санкт-Петербург",
					to: "",
					img: require('@/assets/tmp/slide2.jpg')
				},
				{
					name: "Музей русского импрессионизма",
					location: "г. Москва",
					to: "",
					img: require('@/assets/tmp/slide3.jpg')
				},
				{
					name: "Жилой комплекс PRIME PARK",
					location: "г. Москва",
					to: "",
					img: require('@/assets/tmp/slide1.jpg')
				}
			],
			blocks: [
				{
					top: "114",
					bottom: "лет в мире"
				},
				{
					top: "33000+",
					bottom: "сотрудников"
				},
				{
					top: "11,24 млрд",
					bottom: "CHF выручка в 2023 году"
				},
				{
					top: "5",
					bottom: "филиалов в России"
				},
				{
					top: "12",
					bottom: "заводов в России"
				},
				{
					top: "380+",
					bottom: "сотрудников в России"
				},
			]
		}
	},
	computed: {

	},
	methods: {
		handleScroll() {
			// set anchor
			let anchor = null;
			const ids = ["shop", "flavours", "story", "corporate", "stores", "partnership", "contacts"];
			ids.forEach(id => {
				const el = document.getElementById(id);
				if (!el) return;
				const rect = el.getBoundingClientRect();
				if (rect.top <= 0) anchor = id;
			});
			const path = window.location.href.replace(/^(.*?)(#.+)/, "$1");
			let currentAnchor = window.location.href.replace(/^.*?#(.+)/, "$1");
			if (currentAnchor === path) currentAnchor = null;
			if (anchor && anchor !== currentAnchor) {
				//console.log("New anchor: "+anchor);
				window.history.pushState("", "", path + "#" + anchor);
				//this.$router.replace({path: "/#"+anchor, query:{forced:true}});
			} else if (!anchor && currentAnchor) {
				//console.log("New anchor: unset");
				//this.$router.replace({path: "/", query:{forced:true}});
				window.history.pushState("", "", path);
			}
		},
		scrollTo(id) {
			scrollTo(id);
		}
	}
}
</script>

<style lang="scss">
.homepage {


	& .about {
		padding-top: 30px;

		@include up($lg) {
			padding-top: 60px;
		}

	}

	& .activity,
	& .news,
	& .slider,
	& .statistics {
		padding: 30px 0;

		@include up($lg) {
			padding: 60px 0;
		}
	}

	& h2 {
		@include up($lg) {
			margin-bottom: 30px;
		}
	}
}
</style>