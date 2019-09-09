<template>
	<transition name="slide-fade">
		<div class="info">
			<van-nav-bar class="nav-bar" :title="article.title" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar>

			<van-row class="top">
				<van-col>
					<img v-lazy="article.img" />
					<h3>作者：{{ article.author }}</h3>
				</van-col>
			</van-row>

			<van-row class="tips">
				<van-col>Tips: {{ article.yiyu }}</van-col>
			</van-row>

			<van-row class="container">
				<van-col v-html="article.content"></van-col>
			</van-row>
		</div>
	</transition>
</template>

<script>
	import Vue from 'vue';
	import { Tag, Cell, CellGroup, Swipe, SwipeItem, NavBar, Col, Row, Lazyload } from 'vant';
	import axios from 'axios';

	Vue.use(Lazyload, {
		loading: './img/spinner-icon-gif-29.jpg'
	});

	export default {
		data () {
			return {
				article: {}
			};
		},
		components: {
			[Col.name]: Col,
			[Tag.name]: Tag,
			[Cell.name]: Cell,
			[Row.name]: Row,
			[CellGroup.name]: CellGroup,
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem,
			[NavBar.name]: NavBar
		},
		methods: {
			onClickLeft () {
				this.$router.back();
			},
			getSelected () {
				const index = this.$route.query.index;
				axios.get('/api/article').then(response => {
					response = response.data;
					this.article = response.data[index];
				});
			}
		},
		created () {
			console.log(this.$route.query.index);
			this.getSelected();
		}
	};
</script>

<style lang="stylus" scoped>
.info
	min-height 100vh
	background #fff
	padding-bottom 50px
	.nav-bar
		position fixed
		width 100vw
		display flex
		flex-wrap nowrap

	.top
		padding-top 50px
		text-align center
		img
			padding 10px
			height 30vh
		.intro
			padding-top 10px
			margin-left 10px
	.tips, .container
		padding 10px
</style>
