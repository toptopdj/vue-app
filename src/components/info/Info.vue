<template>
	<div class="goods" :style="{ height: '100%' }">
		<van-nav-bar
			:title="selectFood.name"
			left-text="返回"
			left-arrow
			@click-left="onClickLeft"
			class="nav_bar"
		>
			<van-goods-action slot="right">
				<van-goods-action-button type="warning" @click="sorry">
					加入购物车
				</van-goods-action-button>
			</van-goods-action>
		</van-nav-bar>

		<van-image :src="selectFood.image"/>

		<van-cell-group>
			<van-cell>
				<div class="goods-title">{{ selectFood.name }}</div>
				<div class="goods-price">{{ selectFood.price }}</div>
			</van-cell>
			<!--<van-cell class="goods-express">
					<van-col span="10">运费：{{ goods.express }}</van-col>
					<van-col span="14">剩余：{{ goods.remain }}</van-col>
			</van-cell>-->
		</van-cell-group>

		<van-cell-group class="goods-cell-group">
			<van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
				<template slot="title">
					<span class="van-cell-text">有赞的店</span>
					<van-tag class="goods-tag" type="danger">官方</van-tag>
				</template>
			</van-cell>
			<van-cell title="线下门店" icon="location-o" is-link @click="sorry"/>
		</van-cell-group>

		<van-cell-group class="goods-cell-group">
			<van-cell title="查看商品详情" is-link @click="sorry"/>
		</van-cell-group>
	</div>
</template>

<script>
	import {
		Tag,
		Col,
		Image,
		Icon,
		Cell,
		CellGroup,
		NavBar,
		Toast,
		GoodsAction,
		GoodsActionIcon,
		GoodsActionButton
	} from 'vant';

	export default {
		components: {
			[Tag.name]: Tag,
			[Col.name]: Col,
			[Image.name]: Image,
			[Icon.name]: Icon,
			[Cell.name]: Cell,
			[NavBar.name]: NavBar,
			[CellGroup.name]: CellGroup,
			[GoodsAction.name]: GoodsAction,
			[GoodsActionIcon.name]: GoodsActionIcon,
			[GoodsActionButton.name]: GoodsActionButton
		},
		methods: {
			onClickCart () {
				this.$router.push('cart');
			},

			sorry () {
				Toast('暂无后续逻辑~');
			},
			onClickLeft () {

			}
		},
		filters: {
			formatPrice (value) {
				return '¥' + (value / 100).toFixed(2);
			}
		},

		props: {
			selectFood: Object
		}
	};
</script>

<style lang="stylus">
	.goods {
		padding-bottom: 50px;

		&-swipe {
			img {
				width: 100%;
				height: 180px;
				display: block;
			}
		}

		&-title {
			font-size: 16px;
		}

		&-price {
			color: #f44;
		}

		&-express {
			color: #999;
			font-size: 12px;
			padding: 5px 15px;
		}

		&-cell-group {
			margin: 15px 0;

			.van-cell__value {
				color: #999;
			}
		}

		&-tag {
			margin-left: 5px;
		}
	}

	.nav_bar
		position absolute
		width 100%
		top 0
		left 0
</style>
