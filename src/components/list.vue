<template>
	<ul class="news container mx-auto">
		<listItem
			v-for="(item, index) in allData"
			:key="index"
      :news-item="item"
		>
    <div>item</div>
    </listItem>
	</ul>
</template>
<script>
	import listItem from "./listItem.vue";
	export default {
		// eslint-disable-next-line vue/multi-word-component-names
		name: "list",
		data() {
			return {
				allData: [],
			};
		},
		components: {
			listItem,
		},
		created() {
			const api = "./data.json ";
			this.$http.get(api).then((res) => {
				this.allData = res.data;
			});
		},
	};
</script>