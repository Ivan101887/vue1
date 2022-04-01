<template>
	<div id="app">
		<list></list>
	</div>
</template>

<script>
	import list from "./components/list.vue";
	export default {
		name: "App",
		data() {
			return {
				data: [],
			};
		},
		components: {
			list,
		},
		created() {
			const api = "./data.json ";
			this.$http.get(api).then((res) => {
				this.data = res.data;
			});
		},
	};
</script>
<style>
</style>


