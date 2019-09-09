<template>
  <div id='app'>
		<router-view></router-view>
    <tab-nav></tab-nav>
  </div>
</template>

<script>
import TabNav from './components/tabnav/TabNav';
import axios from 'axios';
export default {
  name: 'app',
  components: {
    TabNav
  },
  data () {
    return {
			topic: []
    };
  },
	created () {
		this.setStorageTopic();
		this.getTopic();
	},
	methods: {
		setStorageTopic () {
			axios.get('/api/topic').then(response => {
				response = response.data;
				if (response.errno === 0) {
					const storage = window.localStorage;
					let data = response.data;
					let topicData = JSON.stringify(data);
					storage.setItem('topic', topicData);
				}
			});
		},
		getTopic () {
			const storage = window.localStorage;
			const data = storage.getItem('topic');
			const topic = JSON.parse(data);
			this.topic = topic;
		}
	}
};
</script>

<style lang='stylus'>
* {
  margin: 0;
  padding: 0;
}
.slide-fade-enter-active {
	transition: all 2s ease;
}
.slide-fade-leave-active {
	transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to, .slide-fade-leave-active {
	transform: translateX(10px);
	opacity: 0
}
</style>
