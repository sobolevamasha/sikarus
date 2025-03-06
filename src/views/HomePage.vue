<template>
	<div class="homepage" v-scroll="handleScroll">
	<hero/>
	<helpbox/>
	</div>
</template>

<script>
	
	//import {scrollTo} from '@/utils/utils';
import helpbox from '@/components/HomePage/helpbox.vue';
import hero from '@/components/HomePage/hero.vue';

	export default {
		name: "HomePage",
		components: {
			hero,
			helpbox
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
@import "../styles/variables.scss";

	.homepage {
		//font-family: $secondary-font-family, sans-serif !important;
	}
</style>