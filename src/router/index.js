import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['../pages/home/home.vue'], resolve),
      meta: {
        title: '首页'
      }
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
