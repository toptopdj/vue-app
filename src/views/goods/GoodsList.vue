<template>
	<transition name="slide-fade">
	<div class="goods-list">
		<van-row>
			<Topic :topic="topic"></Topic>
		</van-row>
		<van-row>
			<app-nav></app-nav>
		</van-row>
		<van-row>
			<van-tree-select
				:items="items"
				:main-active-index.sync="activeIndex"
			>
				<template slot="content">
					<van-cell-group v-for="(food, index) in foods[activeIndex]" :key="index">
						<van-cell @click="info(activeIndex, index)">
							<van-card
								:price = "food.price"
								:desc="food.info"
								:title="food.name"
								:thumb="food.icon"
							></van-card>
						</van-cell>
					</van-cell-group>
				</template>
			</van-tree-select>
		</van-row>
	</div>
	</transition>
</template>

<script>
	import { Cell, CellGroup, Card, TreeSelect, Row } from 'vant';
	import axios from 'axios';
	import Topic from '@/components/topic/Topic';
	import AppNav from '@/components/appNav/AppNav';

	export default {
		name: 'GoodsList',
	  data () {
		  return {
				items: [],
			  foods: [],
				topic: [],
				activeIndex: 0
			};
	  },
	  components: {
			[Cell.name]: Cell,
			[CellGroup.name]: CellGroup,
		  [Card.name]: Card,
		  [Row.name]: Row,
			[TreeSelect.name]: TreeSelect,
			Topic,
			AppNav
	  },
	  methods: {
		  info (a, b) {
        this.$router.push({
          path: '/goods/info/',
					query: {
						pid: a,
						id: b
					}
        });
		  }
	  },
	  created () {
		  axios.get('/api/goods').then(response => {
			  response = response.data;
			  if (response.errno === 0) {
					for (let i = 0; i < response.data.length; i++) {
						this.items.push({ text: response.data[i].name });
						this.foods.push(response.data[i].foods);
					}
			  }
		  });
		  this.topic = this.$parent.topic;
	  }
  };
</script>

<style lang="stylus" scoped>
	.goods-list
		display flex
		flex-direction column
		position absolute
		top 0
		padding-bottom 50px
		width 100vw
</style>
