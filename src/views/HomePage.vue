<template>
	<div class="homepage" v-scroll="handleScroll">
		<!-- <hero :title="h1" :subtitle="h4" :background="background" :video="video" /> -->
		<helpbox />
		<activity />
		<about />
		<news />
		
		<slider :title="title" :items="swiperItems" />
		<statistics :blocks="blocks" />
	</div>
</template>

<script>

//import {scrollTo} from '@/utils/utils';
import helpbox from '@/components/HomePage/helpbox.vue';
import hero from '@/components/hero.vue';
import activity from '@/components/HomePage/activity.vue';
import news from '@/components/HomePage/news.vue';
import about from '@/components/HomePage/about.vue';
import slider from '@/components/slider.vue';
import statistics from '@/components/statistics.vue';

import objectList from '@/store/objects';

import burgerMenu from '@/layout/burger-menu.vue';

export default {
	name: "HomePage",
	components: {
		hero,
		helpbox,
		activity,
		news,
		about,
		slider,
		statistics,
		burgerMenu
	},
	data() {
		return {
			title: "Объекты Sika в России",
			// swiperItems: [
			// 	{
			// 		name: "Жилой комплекс PRIME PARK",
			// 		location: "г. Москва",
			// 		to: "",
			// 		img: require('@/assets/tmp/slide1.jpg')
			// 	},
			// 	{
			// 		name: 'Многофункциональный комплекс "Лахта-Центр"',
			// 		location: "г. Санкт-Петербург",
			// 		to: "",
			// 		img: require('@/assets/tmp/slide2.jpg')
			// 	},
			// 	{
			// 		name: "Музей русского импрессионизма",
			// 		location: "г. Москва",
			// 		to: "",
			// 		img: require('@/assets/tmp/slide3.jpg')
			// 	},
			// 	{
			// 		name: "Жилой комплекс PRIME PARK",
			// 		location: "г. Москва",
			// 		to: "",
			// 		img: require('@/assets/tmp/slide1.jpg')
			// 	}
			// ],
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
			],
			h1: 'Sika Россия',
			h4: 'Строим доверие',
			background: require('@/assets/hero-skyline-2.jpg'),
			video: 'https://sika.scene7.com/is/content/sika/glo-skyline-loop'
		}
	},
	computed: {
		swiperItems() {
			return objectList[0].objects.filter(el => (el.mainPage === 'Y'));
		}
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
			
				window.history.pushState("", "", path + "#" + anchor);
			
			} else if (!anchor && currentAnchor) {

				window.history.pushState("", "", path);
			}
		},
		scrollTo(id) {
			scrollTo(id);
		}
	},
	mounted() {

	}
}
</script>

<style lang="scss">
.homepage {


	 & .activity {
	 	padding-top: 30px;

	 	@include up($lg) {
	 		padding-top: 60px;
	 	}

	 }

	& .about,
	//& .activity,
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