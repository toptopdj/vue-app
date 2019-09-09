// 本地json服务器
const express = require('express');
const app = express();
let appData = require('./src/json/data.json');
let topic = appData.topic;
let menus = appData.menus;
let seller = appData.seller;
let goods = appData.goods;
let ratings = appData.ratings;
let novel = appData.novel;
let videos = appData.videos;
let article = appData.article;
let news = appData.news;
let apiRoutes = express.Router();
app.use('/api', apiRoutes);

module.exports = {
  /* 指定生成文件名中包含hash default: true */

  filenameHashing: false,

  devServer: {
    // 自动启动浏览器
    open: false,

    before (app) {
			app.get('/api/topic', (req, res) => {
        res.json({
          errno: 0,
          data: topic
        });
      });
			app.get('/api/menus', (req, res) => {
        res.json({
          errno: 0,
          data: menus
        });
      });
      app.get('/api/seller', (req, res) => {
        res.json({
          errno: 0,
          data: seller
        });
      });
      app.get('/api/ratings', (req, res) => {
        res.json({
          errno: 0,
          data: ratings
        });
      });
      app.get('/api/goods', (req, res) => {
        res.json({
          errno: 0,
          data: goods
        });
      });
      app.get('/api/novel', (req, res) => {
        res.json({
          errno: 0,
          data: novel
        });
      });
      app.get('/api/videos', (req, res) => {
        res.json({
          errno: 0,
          data: videos
        });
      });
      app.get('/api/news', (req, res) => {
        res.json({
          errno: 0,
          data: news
        });
      });
      app.get('/api/article', (req, res) => {
        res.json({
          errno: 0,
          data: article
        });
      });
    }
  }

    /* proxy: {
      "/api": {
        //代理路径 例如 https://baidu.com
        target:  "https://baidu.com",
        // 将主机标头的原点更改为目标URL
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    } */
};
