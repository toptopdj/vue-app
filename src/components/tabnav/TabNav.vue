<template>
	<div class="tabnav">
		<van-tabbar v-model="active">
			<van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
			<van-tabbar-item to="http://www.baidu.com"  icon="search" dot>标签</van-tabbar-item>
			<van-tabbar-item icon="friends-o" info="5">用户中心</van-tabbar-item>
			<van-tabbar-item icon="setting-o" info="20">设置</van-tabbar-item>
		</van-tabbar>
		</div>
</template>

<script>
	import { Tabbar, TabbarItem } from 'vant';
	export default {
		name: 'TabNav',
		data () {
			return {
					active: 0
			};
		},
		components: {
			[Tabbar.name]: Tabbar,
			[TabbarItem.name]: TabbarItem
		}
	};
</script>

<style lang="stylus">
.tabnav
	position fixed
	bottom 0
	left 0
	width 100%
</style>
