<template>
	<transition name="slide-fade">
		<div class="info">
			<van-nav-bar class="nav-bar" :title="video.title ? video.title : video.issuerName" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar>

			<van-swipe :autoplay="3000" class="swipe" v-if="video.urls && video.urls.length > 0">
				<van-swipe-item
					v-for="(image, index) in video.urls"
					:key="index"
					class="swipe-item"
				>
					<img v-lazy="image"/>
				</van-swipe-item>
			</van-swipe>
			<img :src="video.icon" style="width: 100%; height: 30vh" v-else />

			<van-row v-if="video.type === 2">
				<van-cell-group>
					<van-cell>
						<audio :src="video.playUrl" style="width: 90vw" controls autoplay loop>
							你的浏览器不支持
						</audio>
					</van-cell>
				</van-cell-group>
			</van-row>
			<van-row v-else>
				<van-cell-group>
					<van-cell>
						<video :src="video.actionUrl" style="width: 90vw" controls>
							你的浏览器不支持 <code>video</code> 标签.
						</video>
					</van-cell>
				</van-cell-group>
			</van-row>
			<van-row>
				<van-cell-group>
					<van-cell>
						{{ video.description }}
					</van-cell>
				</van-cell-group>
			</van-row>
		</div>
	</transition>
</template>

<script>
	import Vue from 'vue';
	import { Cell, CellGroup, Swipe, SwipeItem, NavBar, Col, Row, Lazyload } from 'vant';
	import axios from 'axios';

	Vue.use(Lazyload, {
		loading: './img/spinner-icon-gif-29.jpg'
	});

	export default {
		data () {
			return {
				video: {}
			};
		},
		components: {
			[Col.name]: Col,
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
				axios.get('/api/videos').then(response => {
					response = response.data;
					this.video = response.data[index];
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
		.swipe
			padding-top 50px
			height 50vh
</style>
