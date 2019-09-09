<template>
  <div class='nav'>
    <van-grid :border='false' :column-num='4'>
      <van-grid-item v-for='(menu, index) in menus' :key='index' class='pet_circle_nav_list'>
        <router-link :to='menu.path' :class='menu.tag' v-html='menu.ifont'></router-link>
        <span>{{ menu.name }}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import Vue from 'vue';
import { Grid, GridItem } from 'vant';
import axios from 'axios';
import '@/assets/css/wap.css?2';

Vue.use(Grid).use(GridItem);

export default {
  name: 'AppNav',
  data () {
    return {
      menus: []
    };
  },
  created () {
    axios.get('/api/menus').then(response => {
      response = response.data;
      if (response.errno === 0) {
        this.menus = response.data;
      }
    });
  }
};
</script>

<style lang='stylus' scoped>
.nav {
  width: 100%;
  overflow: hidden;
  margin: 5px 0;
	background #fff;
}
</style>
