import { createApp } from 'vue'

import App from './App.vue'
import './assets/font_3375/iconfont.css'
import { router } from './router/index'
// import 'element-plus/dist/index.css'


createApp(App).use(router).mount('#app')
// app.use(router)
