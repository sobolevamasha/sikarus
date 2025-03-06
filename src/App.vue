<template>
  <v-app>
		<transition name="route" mode="out-in">
			<router-view/>
		</transition>
	</v-app>
</template>

<script>
    export default {
        name: 'App',
    };
</script>

<style lang="scss">
#app {
  //font-family: $font-family;
  text-align: center;
  color: #2c3e50;
}

</style>
