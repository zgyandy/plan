// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './srore/index.js'
import {getData, postData} from './config/base.js'
Vue.prototype.getData = getData
Vue.prototype.postData = postData
// 判断当前环境
if (process.env.NODE_ENV === 'development') {
  require('./mock.js')
}
require('./config/rem.js')
require('./assets/css/common.css')

Vue.config.productionTip = false
// 修改title值
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = 'plan'
  }
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
