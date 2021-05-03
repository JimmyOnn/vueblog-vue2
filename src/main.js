import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import "element-plus/lib/theme-chalk/index.css"
import axios from 'axios'

//import locale from 'element-plus/lib/locale/zh-cn'
const app = createApp(App)
app.use(ElementPlus)
app.use(router).mount('#app')
// Vue.config.productionTip = false
app.config.globalProperties.$axios = axios
