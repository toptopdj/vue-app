import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
		{
			path: '/',
			redirect: '/news'
		},
		{
			path: '/goods',
			component: () => import('./views/goods/GoodsList.vue'),
			meta: {
				title: '商品'
			}
		},
		{
			path: '/goods/info',
			component: () => import('./views/goods/Goods.vue'),
			meta: {
				title: '商品'
			}
		},
		{
			path: '/videos',
			component: () => import('./views/videos/Videos.vue'),
			meta: {
				title: '影视'
			}
		},
		{
			path: '/videos/info',
			component: () => import('./views/videos/Video.vue'),
			meta: {
				title: '影片介绍'
			}
		},
		{
			path: '/news',
			component: () => import('./views/news/News.vue'),
			meta: {
				title: '资讯'
			}
		},
		{
			path: '/article',
			component: () => import('./views/article/Article.vue'),
			meta: {
				title: '美文'
			}
		},
		{
			path: '/article/info',
			component: () => import('./views/article/Info.vue'),
			meta: {
				title: '美文'
			}
		},
		{
			path: '/novel',
			component: () => import('./views/novel/Novel.vue'),
			meta: {
				title: '风情小说'
			}
		},
		{
			path: '/novel/info',
			component: () => import('./views/novel/Info.vue'),
			meta: {
				title: '风情小说'
			}
		},
		{
			path: '/ucenter',
			component: () => import('./views/ucenter/index/Index.vue'),
			meta: {
				title: '用户中心'
			}
		},
		{
			path: '/ucenter/user',
			component: () => import('./views/ucenter/user/User.vue'),
			meta: {
				title: '会员中心'
			}
		},
		{
			path: '/ucenter/cart',
			component: () => import('./views/ucenter/cart/Cart.vue'),
			meta: {
				title: '购物车'
			}
		},
		{
			path: '/ucenter/address',
			component: () => import('./views/ucenter/address/Address.vue'),
			meta: {
				title: '地址列表'
			}
		},
		{
			path: '/ucenter/address/add',
			component: () => import('./views/ucenter/address/Add.vue'),
			meta: {
				title: '新增地址'
			}
		},
		{
			path: '/ucenter/address/edit/:id',
			component: () => import('./views/ucenter/address/Edit.vue'),
			meta: {
				title: '修改地址'
			}
		}
  ]
});
