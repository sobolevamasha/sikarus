<template>
	<div class="layout-main">
		<the-header/>
		<v-main>
			<transition name="route" mode="out-in">
				<router-view />
			</transition>
		</v-main>
		<the-footer />
	</div>
</template>

<script>
    import TheHeader from './the-header';
    import TheFooter from './the-footer';

    export default {
        name: "layout-main",
        components: {
            TheHeader,
            TheFooter
        },
    }
</script>

<style lang="scss">

</style>