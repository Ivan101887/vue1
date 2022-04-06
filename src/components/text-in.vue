<template>
	<div class="news__content">
		<h2 class="news__title text-ellipse">
			<a
				:href="newsUrl"
				class="news__link"
			>
				{{textTitle}}
			</a>
		</h2>
		<p class="news__text">
			{{textExcerpt}}
		</p>
	</div>
</template>
<style scope>
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
<script>
	export default {
		name: 'TextIn',
		props:["newsUrl","textTitle","textExcerpt"],
	}
</script>