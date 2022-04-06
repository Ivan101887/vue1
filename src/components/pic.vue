<template>
	<figure class="news__imgWrap">
		<a 
			:href="newsUrl"
			class="news__link"
		>
			<img
				:src="imgSrc"
				:alt="textTitle"
				class="news__img"
			/>
		</a>
	</figure>
</template>
<style scoped>
	.news__imgWrap {
		width: 30%;
    box-sizing: border-box;
	}
	.news__img {
		display: block;
		width: 100%;
		height: auto;
	}
</style>
<script>
	export default {
		// eslint-disable-next-line vue/multi-word-component-names
		name: "Pic",
    props: ["imgSrc","newsUrl","textTitle"],
	};
</script>