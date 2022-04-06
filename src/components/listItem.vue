<template>
	<li class="news__item d-flex">
		<figure class="news__imgWrap">
			<a :href="parentData.url" class="news__link">
				<img 
					:src="parentData.src" 
					:alt="parentData.title" 
					class="news__img" 
				/>
			</a>
		</figure>
		<div class="news__content">
			<h2 class="news__title text-ellipse">
				<a :href="parentData.url" class="news__link"> {{ parentData.title }} </a>
			</h2>
			<p class="news__text"> {{ parentData.excerpt }} </p>
		</div>
	</li>
</template>

<script>
	export default {
		name: "ListItem",
		props:{
			parentData: Object,
		},
	};
</script>
<style scoped>
	.news__item {
		background-color: #fff;
		margin-top: 15px;
		margin-bottom: 15px;
	}
	.news__imgWrap {
		width: 30%;
		box-sizing: border-box;
	}
	.news__img {
		display: block;
		width: 100%;
		height: auto;
	}
	.news__content {
		width: 70%;
		padding: 15px;
		box-sizing: border-box;
	}
	.news__link {
		text-decoration: none;
		color: inherit;
	}
	.news__title {
		font-size: 25px;
		color: #007bff;
		font-weight: 600;
		margin-bottom: 23px;
	}
	.news__text {
		line-height: 1.5em;
	}
</style>