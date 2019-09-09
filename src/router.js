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
			path: '/user',
			component: () => import('./views/user/User.vue'),
			meta: {
				title: '会员中心'
			}
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
			path: '/cart',
			component: () => import('./views/cart/Cart.vue'),
			meta: {
				title: '购物车'
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
		}
  ]
});
