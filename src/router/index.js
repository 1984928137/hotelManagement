import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'


// const Home = { template: '<div>Home</div>' }
// const About = { template: '<div>About</div>' }
import Home from '../views/home.vue'
// import headers from '../views/headers.vue';
import Person from '../views/person.vue'
import Login from '../views/login.vue'
import Register from '../components/register.vue'
import { StorageGet } from './localStorages.js'


// let userData = StorageGet()


// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', name: 'home', components: { default: Home } },
  // {path:''},
  { path: '/person', name: 'person', component: Person, meta: { qss: false } ,props: true},
  { path: '/login', name: 'login', component: Login ,props: true},
  { path: '/register', name: 'register', component: Register ,props: true},
  { path: '/hotelRoom', name: 'hotelRoom', component: HotelRoom => import('../components/room/hotelRoom.vue'),props: true },
  { path: '/singleRoom', name: 'singleRoom', component: singleRoom => import('../components/room/singleRoom.vue') ,props: true},
  { path: '/doubleRoom', name: 'doubleRoom', component: doubleRoom => import('../components/room/doubleRoom.vue'),props: true },
  { path: '/payment', name: 'payment', component: payment => import('../components/payment.vue'),props: true },
  { path: '/Notice', name: 'Notice', component: Notice => import('../components/Notice.vue'),props: true },
  { path: '/map', name: 'map', component: map => import('../components/map.vue'),props: true },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  // createWebHashHistory()
  routes, // `routes: routes` 的缩写
})

router.beforeEach((to, from) => {
  if(StorageGet().metas == true){
    to.meta.qss = true
  }
  if (to.meta.qss == false) {
    return router.push('/login')
  } else {
    return true
  }
})

export {
  router
}