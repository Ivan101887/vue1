<template>
	<li class="news__item d-flex">
		<Pic
			:img-src="newsItem.src"
			:news-url="newsItem.url"
			:text-title="newsItem.title"
		></Pic>
		<TextIn
			:news-url="newsItem.url"
			:text-title="newsItem.title"
			:text-excerpt="newsItem.excerpt"
		></TextIn>
	</li>
</template>
<script>
	import Pic from "./pic";
	import TextIn from "./text-in";
	export default {
		name: "listItem",
		data() {
			return {
				listData: [],
			};
		},
		// eslint-disable-next-line no-undef
		props: ["newsItem"],
		components: {
			Pic,
			TextIn,
		},
		created() {
			this.listData = this.$parent.allData;
		},
	};
</script>
<style scoped>
	.news__item {
		background-color: #fff;
		margin-top: 15px;
		margin-bottom: 15px;
	}
</style>