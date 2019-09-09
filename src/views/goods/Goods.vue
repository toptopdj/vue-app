<template>
	<transition name="slide-fade">
		<div class="goods">
			<van-nav-bar class="nav-bar" :title="food.name" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar>

			<img :src="food.image" :style="{ width: '100%', height: '200'}" />

			<van-cell-group>
				<van-cell>
					<div class="goods-title">{{ food.name }}</div>
					<div class="goods-price">{{ food.price }}</div>
				</van-cell>
			</van-cell-group>

			<van-cell-group class="goods-cell-group">
				<van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
					<template slot="title">
						<span class="van-cell-text">有赞的店</span>
						<van-tag class="goods-tag" type="danger">官方</van-tag>
					</template>
				</van-cell>
				<van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
			</van-cell-group>

			<van-cell-group class="goods-cell-group">
				<van-cell title="查看商品详情">
				</van-cell>
				<van-cell title="顾客评价">
				</van-cell>
				<div class="rating">
					<van-row v-for="(rating, index) in food.ratings" :key="index" class="rating-row">
						<van-col span="8">
							<img style="width: 80px; height: 80px; border-radius: 50%; padding: 10px" :src="rating.avatar" alt="">
						</van-col>
						<van-col span="16">
							<h6>{{ rating.username }}</h6>
							<p>{{ rating.text }}</p>
						</van-col>
					</van-row>
				</div>
			</van-cell-group>

			<van-goods-action>
				<van-goods-action-icon icon="chat-o" @click="sorry">
					客服
				</van-goods-action-icon>
				<van-goods-action-icon icon="cart-o" @click="onClickCart">
					购物车
				</van-goods-action-icon>
				<van-goods-action-button type="warning" @click="sorry">
					加入购物车
				</van-goods-action-button>
				<van-goods-action-button type="danger" @click="sorry">
					立即购买
				</van-goods-action-button>
			</van-goods-action>
		</div>
	</transition>
</template>

<script>
import axios from 'axios';
import {
	Tag,
	Col,
	Icon,
	Cell,
	Row,
	CellGroup,
	Image,
	Swipe,
	Toast,
	SwipeItem,
	NavBar,
	GoodsAction,
	GoodsActionIcon,
	GoodsActionButton
} from 'vant';

export default {
	components: {
		[Tag.name]: Tag,
		[Row.name]: Row,
		[Col.name]: Col,
		[Icon.name]: Icon,
		[Cell.name]: Cell,
		[Image.name]: Image,
		[CellGroup.name]: CellGroup,
		[Swipe.name]: Swipe,
		[SwipeItem.name]: SwipeItem,
		[NavBar.name]: NavBar,
		[GoodsAction.name]: GoodsAction,
		[GoodsActionIcon.name]: GoodsActionIcon,
		[GoodsActionButton.name]: GoodsActionButton
	},
	data () {
		return {
			food: {}
		};
	},
	methods: {
		onClickCart () {
			this.$router.push('cart');
		},
		onClickLeft () {
      this.$router.back();
		},
		sorry () {
			Toast('暂无后续逻辑~');
		},
		getSelectedItem () {
			let pid = this.$route.query.pid;
			let id = this.$route.query.id;
			axios.get('/api/goods').then(response => {
				response = response.data;
				let selectedItem = response.data[pid].foods[id];
				this.food = selectedItem;
			});
		}
	},
	created () {
		this.getSelectedItem();
	}
};
</script>

<style lang="stylus">
.goods
	display flex
	flex-direction column
	position absolute
	top 0
	padding-bottom 50px
	width 100vw
	.nav-bar
		position fixed
		width 100%
		top 0
		left 0
  &-swipe
    img
      width 100%
			height 100%
      display block

  &-title
    font-size 16px

  &-price
    color #f44

  &-express
    color #999
    font-size 12px
    padding 5px 15px

  &-cell-group
    margin 15px 0
    .van-cell__value
      color #999

  &-tag
    margin-left 5px

	.rating-row
		padding 5px 10px
		margin-bottom 10px
		.van-col
			width 80px
			height 80px
			overflow hidden
</style>
