<template>
	<div class="pet_content_main">
		<div data-am-widget="list_news" class="am-list-news am-list-news-default">
			<div class="am-list-news-bd">
				<ul class="am-list">
					<!--缩略图在标题右边-->
					<li
						class="am-g am-list-item-desced am-list-item-thumbed am-list-item-thumb-right pet_list_one_block"
						v-for="(item, index) in lists"
						:key="index"
						@click="selectedItem(index)"
					>
						<div class=" am-u-sm-8 am-list-main pet_list_one_nr">
							<h3 class="am-list-item-hd pet_list_one_bt">
								{{item.title}}
							</h3>
							<div class="am-list-item-text pet_list_one_text">
								{{item.content | eclipse}}
							</div>

						</div>
						<div class="am-u-sm-4 am-list-thumb">
							<a :href="item.url" class="">
								<img v-lazy="item.img" class="pet_list_one_img" alt=""/>
							</a>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import Lazyload from 'vant';
	import '@/assets/css/amazeui.min.css';
	import '@/assets/css/animate.min.css';
	import '@/assets/css/wap.css?2';
	export default {
		name: 'Container',
	  props: {
		  lists: {
			  type: Array
		  }
	  },
	  filters: {
		  eclipse: function (value) {
			  if (value && (value.length > 30)) {
				  return value.slice(0, 30) + '...';
			  }
		  }
	  },
		components: {
			[Lazyload.name]: Lazyload
		},
		methods: {
			selectedItem (index) {
				let path = window.location.pathname;
				this.$router.push({
					path: `${path}/info/`,
					query: {
						index: index
					}
				});
			}
		}
	};
</script>

<style scoped>

</style>
