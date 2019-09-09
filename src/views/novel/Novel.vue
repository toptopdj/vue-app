<template>
	<transition name="slide-fade">
	<div class="novel">
		<van-row>
			<Topic :topic="topic"></Topic>
		</van-row>
		<van-row>
			<app-nav></app-nav>
		</van-row>
		<van-row>
			<van-cell-group>
				<van-cell v-for="(book, index) in books" :key="index">
					<van-card
						:desc="book.book_info"
						:title="book.bookname"
						:thumb="book.book_cover"
						@click="selectItem(index)"
					>
					</van-card>
				</van-cell>
			</van-cell-group>
		</van-row>
	</div>
	</transition>
</template>

<script>
	import { Cell, CellGroup, Card, Row } from 'vant';
	import axios from 'axios';
	import Topic from '@/components/topic/Topic';
	import AppNav from '@/components/appNav/AppNav';

	export default {
		name: 'Novel',
	  data () {
		  return {
			  books: [],
				topic: []
		  };
	  },
		components: {
			[CellGroup.name]: CellGroup,
			[Cell.name]: Cell,
			[Card.name]: Card,
			[Row.name]: Row,
			Topic,
			AppNav
		},
	  methods: {
			selectItem (index) {
				console.log(index);
				this.$router.push({
					path: '/novel/info',
					query: {
						index: index
					}
				});
			}
	  },
		created () {
	    axios.get('/api/novel').then(response => {
				response = response.data;
				if (response.errno === 0) {
					this.books = response.data;
		    }
	    });
	    this.topic = this.$parent.topic;
		}
  };
</script>

<style lang="stylus">
	.novel
		display flex
		flex-direction column
		position absolute
		top 0
		padding-bottom 50px
		width 100vw
</style>
