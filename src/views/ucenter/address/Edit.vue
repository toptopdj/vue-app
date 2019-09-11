<template>
<transition name="slide-fade">
	<div class="ucenter">
		<van-nav-bar class="nav-bar" :title="this.$route.meta.title" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar>
		<van-address-edit
			:area-list="areaList"
			show-postal
			show-delete
			show-set-default
			show-search-result
			:search-result="searchResult"
			@save="onSave"
			@delete="onDelete"
			@change-detail="onChangeDetail"
		/>
	</div>
</transition>
</template>

<script>
	import { AddressEdit, NavBar } from 'vant';
	import areaList from '../../../json/area.json';
	export default {
		name: 'Edit',
		components: {
			[AddressEdit.name]: AddressEdit,
			[NavBar.name]: NavBar
		},
		data () {
			return {
				areaList,
				searchResult: []
			};
		},
		methods: {
			onSave () {
				console.log('save');
			},
			onDelete () {
				console.log('delete');
			},
			onChangeDetail (val) {
				if (val) {
					this.searchResult = [{
						name: '黄龙万科中心',
						address: '杭州市西湖区'
					}];
				} else {
					this.searchResult = [];
				}
			},
			onClickLeft () {
				this.$router.back();
			},
			getAddress () {
				console.log(this.$route.query.id);
			}
		},
		created () {
			this.getAddress();
		}
	};
</script>
