<template>
	<transition name="slide-fade">
		<div class="videos">
			<van-row>
				<Topic :topic="topic"></Topic>
			</van-row>
			<van-row>
				<app-nav></app-nav>
			</van-row>
			<van-row>
				<keep-alive include="lists">
					<Container :lists="lists"></Container>
				</keep-alive>
			</van-row>
		</div>
	</transition>
</template>

<script>
	import Container from '@/components/container/Container';
	import axios from 'axios';
	import Topic from '@/components/topic/Topic';
	import AppNav from '@/components/appNav/AppNav';
	import { Row } from 'vant';

	export default {
		name: 'Videos',
		data () {
			return {
				lists: [],
				topic: []
			};
		},
		components: {
			Container,
			Topic,
			AppNav,
			[Row.name]: Row
		},
		created () {
			axios.get('/api/videos').then(response => {
				response = response.data;
				if (response.errno === 0) {
					for (let i = 0; i < response.data.length; i++) {
						this.lists.push({
							id: response.data[i].id,
							url: response.data[i].url,
							title: response.data[i].title,
							content: response.data[i].description,
							img: response.data[i].cover.feed
						});
					}

					for (let i = 0; i < 4; i++) {
						this.topic.push({
							id: i,
							url: response.data[i].icon,
							title: response.data[i].issuerName
						});
					}
				}
			});
		}
	};
</script>

<style lang="stylus" scoped>
	.videos
		display flex
		flex-direction column
		position absolute
		top 0
		padding-bottom 55px
		width 100vw
</style>
