import Vue from 'vue'
import App from './App.vue'

//导入要用到的插件
//element ui 插件
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUi);

//路由插件
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//axios插件
import axios from 'axios';
Vue.prototype.$axios = axios;

//导入全局样式
import './assets/base.css';


//导入组件
import login from './components/login.vue';
import index from './components/index.vue';

//制定路由规则
const routes = [
  {path:'/login',component:login},
  {path:'/index',component:index},
];

//实例化路由对象
const router = new VueRouter({
  routes
});



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
