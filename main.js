import App from './App'

// 引入全局uView
import uView from '@/uni_modules/uview-ui'

import cfg from './utils/config.js'
import http from './utils/http.js'//通过请求数据方法
import uti from './utils/utils.js'//通用方法
import us from './utils/user.js'
import up from 'utils/upload.js'

Vue.prototype.$cfg = cfg;
Vue.prototype.$uti = uti;
Vue.prototype.$http = http;
Vue.prototype.$us = us;
Vue.prototype.$up = up;

Vue.prototype.prePage = ()=>{
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$vm;
}

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif