<template>
	<ul class="news container mx-auto">
		<listItem v-for="item in data" :key="item.title" :parent-data="item" />
	</ul>
</template>

<script>
	import ListItem from "@/components/ListItem";
	export default {
		name: "List",
		data() {
			return {
				data: [],
			};
		},
		components: {
			ListItem,
		},
		async created() {
			const api = "./data.json ";
			try {
				const res = await this.$http.get(api);
				this.data = res.data;
			} 
			catch (err) {
				console.log("獲取資料失敗:\n", err);
			}
		},
	};
</script>