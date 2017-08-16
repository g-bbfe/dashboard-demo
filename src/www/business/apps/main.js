import Vue from 'vue';
import ElementUI from 'element-ui';
// import '../theme/index.css'
import App from './App.vue';
import echarts from 'echarts';
import Router from 'vue-router';
import Layout from './home/Layout.vue';
import Second from './second/Second.vue';

Vue.prototype.$echarts = echarts;

Vue.use(ElementUI);
Vue.use(Router);

// new Vue({
//     el: '#app1',
//     render: h => h(App1)
// })

const routes = [ // 定义路由
    { path: '/', component: Layout },
    { path: '/home', component: Layout },
  {
    path: '/2',
    component: Second
            //   children:[
            //     {path: '/', component: Submit},
            //     {path: 'submit', component: Submit}
            //   ]
  }
];

const router = new Router({ // 创建路由实例
  routes
});

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
