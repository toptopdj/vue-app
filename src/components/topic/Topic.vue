<template>
	<div class="topic">
		<van-swipe :autoplay="3000" class="swipe">
			<van-swipe-item
				v-for="image in topic"
				:key="image.id"
				touchable
				class="swipe-item"
			>
				<img v-lazy="image.url" :key="image.url"/>
				<span class="swipe-font">{{ image.title }}</span>
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Swipe, SwipeItem, Lazyload } from 'vant';

	Vue.use(Swipe)
		.use(SwipeItem)
		.use(Lazyload, {
			loading: './img/spinner-icon-gif-29.jpg'
		});

	export default {
		name: 'Topic',
		props: {
			topic: {
				type: Array
			}
		}
	};
</script>

<style lang="stylus">
	.topic
		height 30vh
		overflow hidden
	.swipe
		width 100vw
		height 30vh

		.swipe-item
			width 100%
			position relative

			img
				width 100%
				height 100%

			.swipe-font
				position absolute
				display block
				width 100%
				text-align center
				bottom 35px
				z-index 3
				color #fff
</style>
