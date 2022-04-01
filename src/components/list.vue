<template>
	<ul class="news container mx-auto">
		<listItem></listItem>
	</ul>
</template>
<style scoped>
	.news {
		background-color: #fff;
	}
</style>
<script>
	import listItem from "./listItem.vue";
	export default {
		// eslint-disable-next-line vue/multi-word-component-names
		name: "list",
		components: {
			listItem,
		},
	};
</script>