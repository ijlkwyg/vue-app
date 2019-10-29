// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//图片懒加载模块
import VueLazyload from 'vue-lazyload'
//引入vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
//引入阿里矢量图
import './common/fonts/iconfont.css'

//导入Vuex
import store from './store/index'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

//使用懒加载
Vue.use(VueLazyload,{
  loading:require('./common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
