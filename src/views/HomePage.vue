<template>
	<div class="homepage" v-scroll="handleScroll">
		<hero :title="h1" :subtitle="h4" :background="background" :video="video" />
		<helpbox />
		<activity />
		<about />
		<news />
		
		<slider :title="title" :items="swiperItems" />
		<statistics :blocks="blocks" />
		<!-- <ul class="burger-menu__list pa-0">
                        <li v-for="(menuItem, index) in menuData" :key="index" @click="toggleMenu(index)"
                            :class="{ 'isOpen': menuItem.isOpen }" class="d-flex align-center justify-space-between ">

                            <div class="burger-menu__list-item-name">

                                <a v-if="menuItem.to" @click="onRouterClick" :href="menuItem.to"></a>
                                {{ menuItem.name }}

                            </div>
                            <svg v-if="menuItem.to" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 366 1024">
                                <g id="icomoon-ignore">
                                </g>
                                <path
                                    d="M339.968 547.84q0 7.168-5.12 12.288l-267.264 267.264q-5.12 5.12-12.288 5.12t-13.312-5.12l-28.672-28.672q-6.144-6.144-6.144-13.312t6.144-13.312l224.256-224.256-224.256-225.28q-6.144-5.12-6.144-12.288t6.144-13.312l28.672-28.672q5.12-6.144 13.312-6.144t12.288 6.144l267.264 266.24q5.12 5.12 5.12 13.312z">
                                </path>
                            </svg>

                            <ul v-show="menuItem.isOpen" class="dropdown burger-menu__list-subitem grid-x">
                                <li v-for="(item, itemIndex) in menuItem.items" :key="itemIndex" class="burger-menu__list-subitemList
                        cell medium-2 cmp-nav-mega-dropdown__column">

                                    <h6 @click="toggleSubMenu(menuItem, item)" :class="{ 'isOpen': item.isOpen }"
                                        class="cmp-nav-mega-dropdown__content__sub-title cmp-font--bold">
                                        {{ item.title }}
                                    </h6>
                                    <ul v-show="item.isOpen">
                                        <li v-for="(subitem, subIndex) in item.subitems" :key="subIndex">
                                            <router-link :to="subitem.to">{{ subitem.name }}</router-link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>



                        </li>
                    </ul> -->

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
	},
	mounted() {
		console.log('swiper: ', this.swiperItems)
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