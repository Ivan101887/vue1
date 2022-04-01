<template>
	<li class="news__item d-flex">
		<Pic></Pic>
		<TextIn></TextIn>
	</li>
</template>
<script>
	import Pic from "./pic.vue";
	import TextIn from "./text-in.vue";
	export default {
		name: "listItem",
		components: {
			Pic,
			TextIn,
		},
	};
</script>
<style scoped>
	.news__item {
		margin-top: 15px;
		margin-bottom: 15px;
	}
</style>