<template>
	<transition name="slide-fade">
		<div class="ucenter">
			<van-nav-bar class="nav-bar" :title="this.$route.meta.title" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar>
			<van-row class="top" type="flex" justify="center" align="center">
				<img class="avatar" src="@/assets/img/a1.png" alt="">
				<h3>ID:xxxx</h3>
			</van-row>
			<van-row class="tag" type="flex" justify="space-around" align="center">
				<van-col span="5" align="center">
					<router-link to="">
						<svg class="icon svg-icon" aria-hidden="true">
							<use xlink:href="#icon-shoucang"></use>
						</svg>
						<div class="name">我的收藏</div>
					</router-link>
				</van-col>
				<van-col span="5" align="center">
					<router-link to="/ucenter/address">
						<svg class="icon svg-icon" aria-hidden="true">
							<use xlink:href="#icon-dizhi"></use>
						</svg>
						<div class="name">地址管理</div>
					</router-link>
				</van-col>
				<van-col span="5" align="center">
					<router-link to="/ucenter/myratings">
						<svg class="icon svg-icon" aria-hidden="true">
							<use xlink:href="#icon-pinglun"></use>
						</svg>
						<div class="name">我的评论</div>
					</router-link>
				</van-col>
				<van-col span="5" align="center">
					<router-link to="">
						<svg class="icon svg-icon" aria-hidden="true">
							<use xlink:href="#icon-zuji"></use>
						</svg>
						<div class="name">我的足迹</div>
					</router-link>
				</van-col>
			</van-row>
			<van-row class="container">
				<van-list>
					<van-cell
						v-for="(item, index) in list"
						:key="index"
						:title="item.name"
						is-link
						:to="item.path"
					/>
				</van-list>
			</van-row>
		</div>
	</transition>
</template>

<script>
import '@/assets/yum/iconfont.js';
import { NavBar, Row, Col, List, Cell } from 'vant';
export default {
	name: 'Index',
	data () {
		return {
			list: [
				{
					name: '优惠券',
					path: ''
				},
				{
					name: '订单查询',
					path: '/ucenter/cart'
				},
				{
					name: '收获地址',
					path: ''
				},
				{
					name: '邀请奖励',
					path: ''
				},
				{
					name: '个人信息',
					path: ''
				}
			]
		};
	},
	components: {
		[NavBar.name]: NavBar,
		[Row.name]: Row,
		[Col.name]: Col,
		[Cell.name]: Cell,
		[List.name]: List
	},
	methods: {
		onClickLeft () {
			this.$router.back();
		}
	}
};
</script>

<style lang="stylus">
.ucenter
	display flex
	flex-direction column
	position absolute
	top 0
	padding-bottom 50px
	width 100vw
	.nav-bar
		position fixed
		display flex
		width 100vw
	.top
		width 100vw
		padding-top 80px
		padding-bottom 50px
		background coral
		flex-direction column
		border-bottom-left-radius 20px
		border-bottom-right-radius 20px
		.avatar
			border-radius 50%
			width 120px
			height 120px
			margin-bottom 10px
	.tag
		width 90vw
		height 100px
		border-radius 20px
		border-color rgb(248, 213, 138)
		background #fff
		box-shadow 5px 5px 10px rgba(248, 213, 147, .8)
		margin -30px auto 0
		z-index 50
		a
			color #000
		.icon
			display block
			width 40px
			height 40px
			font-size 30px
			color: #333
			-webkit-transition font-size 0.25s linear, width 0.25s linear
			-moz-transition font-size 0.25s linear, width 0.25s linear
			transition font-size 0.25s linear, width 0.25s linear
		.svg-icon
			fill currentColor
			overflow hidden
	.container
		padding-top 30px
		margin-top -20px
		border-top-left-radius 20px
		border-top-right-radius 20px
		border-top 1px solid rgb(248, 213, 138)
		background #fff
</style>
