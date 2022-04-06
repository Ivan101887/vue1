<template>
	<ul class="news container mx-auto">
		<listItem
			v-for="item in data"
			:key="item.title"
      :parent-data="item"
		/>
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
		created() {
			const api = "./data.json ";
			this.$http.get(api)
				.then((res) => {
					this.data = res.data;
				})
				.catch(err=>{
					console.log(err)
				})
		},
	};
</script>