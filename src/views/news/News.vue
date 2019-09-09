<template>
	<transition name="slide-fade">
    <div class="news">
			<van-row>
				<Topic :topic="topic"></Topic>
			</van-row>
			<van-row>
				<app-nav></app-nav>
			</van-row>
			<van-row>
				<Container :lists="lists"></Container>
			</van-row>
    </div>
	</transition>
</template>

<script>
	import axios from 'axios';
	import Topic from '@/components/topic/Topic';
	import AppNav from '@/components/appNav/AppNav';
	import Container from '../../components/container/Container';
	import { Row } from 'vant';

	export default {
		name: 'News',
	  data () {
		  return {
			  lists: [],
				topic: []
		  };
	  },
		components: {
			Topic,
			AppNav,
			Container,
			[Row.name]: Row
		},
		created () {
			axios.get('/api/news').then(response => {
				response = response.data;
				if (response.errno === 0) {
					this.lists = response.data;
				}
			});
			this.topic = this.$parent.topic;
	  }
  };
</script>

<style lang="stylus" scoped>
	.news
		display flex
		flex-direction column
		position absolute
		top 0
		padding-bottom 50px
		width 100vw
</style>
