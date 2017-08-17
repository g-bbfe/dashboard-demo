import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
// import '../theme/index.css'
import App from './App.vue';
import echarts from 'echarts';
import Router from 'vue-router';
import Navigation from '../public-apps/navigation/index.vue';
import Home from './home/Home.vue';
import Second from './second/Second.vue';

Vue.prototype.$echarts = echarts;

Vue.use(ElementUI);
Vue.use(Router);

// new Vue({
//   el: '#app1',
//   render: h => h(App1)
// })

const routes = [
  // 定义路由
  {
    path: '/',
    component: Navigation,
    children: [
      { path: '/', component: Home },
      { path: '/1-1', component: Home },
      { path: '/1-2', component: Home },
      { path: '/1-3', component: Home },
      { path: '/1-4-1', component: Home },
      { path: '/2', component: Second },
      { path: '/3', component: Second }
    ]
  }
];

const router = new Router({ // 创建路由实例
  routes
});

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
