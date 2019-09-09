<template>
	<transition name="slide-fade">
		<div class="article">
			<van-row>
				<Topic :topic="topic"></Topic>
			</van-row>
			<van-row>
				<AppNav></AppNav>
			</van-row>
			<van-row>
				<container :lists="lists"></container>
			</van-row>
		</div>
	</transition>
</template>

<script>
	import Container from '../../components/container/Container';
	import axios from 'axios';
	import Topic from '@/components/topic/Topic';
	import AppNav from '@/components/appNav/AppNav';
	import { Row } from 'vant';
	export default {
		name: 'Article',
		components: {
			Container,
			Topic,
			AppNav,
			[Row.name]: Row
		},
	  data () {
		  return {
			  lists: [],
				topic: []
		  };
	  },
		created () {
			axios.get('/api/article').then(response => {
				response = response.data;
				if (response.errno === 0) {
					this.lists = response.data;
				}
			});
			this.topic = this.$parent.topic;
	  }
  };
</script>
<style lang="stylus">
	.article
		display flex
		flex-direction column
		position absolute
		top 0
		padding-bottom 50px
		width 100vw
</style>
