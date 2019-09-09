<template>
	<transition name="slide-fade">
		<div class="info">
			<van-nav-bar class="nav-bar" :title="book.bookname" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar>

			<van-row class="top">
				<van-col>
					<img v-lazy="book.book_cover" />
				</van-col>
				<van-col class="intro">
					<h3>作者：{{ book.author_name }}</h3>
					<van-tag round v-for="item in book.tag">{{ item }}</van-tag>
				</van-col>
			</van-row>

			<van-row class="container">
				<van-col>{{ book.book_info }}</van-col>
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
				book: {}
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
				axios.get('/api/novel').then(response => {
					response = response.data;
					this.book = response.data[index];
				});
			}
		},
		created () {
			this.getSelected();
		}
	};
</script>

<style lang="stylus" scoped>
.info
	min-height 100vh
	background #fff
	.nav-bar
		position fixed
		width 100vw
		display flex
		flex-wrap nowrap

	.top
		padding-top 50px
		img
			padding 10px
		.intro
			padding-top 10px
			margin-left 10px
	.container
		padding 10px
</style>
