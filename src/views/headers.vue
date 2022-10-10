<template>
    <div>
        <el-container>
            <el-header class="home-containerHeader">
                <!-- 导航栏的菜单文本，如“酒店房间”、“酒店餐饮” -->
                <menus class="home-menus"></menus>
                <!-- 搜索框组件 -->
                <serach id="homeSerach" type="text" class="home-Serach"></serach>
                <message></message>
                <!-- 购物车组件 -->
                <shopping-cart :drawer="drawer" class="home-shoppingCart"></shopping-cart>

                <!-- 登录和注册组件 -->
                <div v-if="!tinyints" style= "margin: 20px;">
                    <router-link to="/login">
                        <span>登录</span>
                    </router-link>|
                    <router-link to="/register">
                        <span>注册</span>
                    </router-link>
                </div>
                <!-- 判断是否登录，如果登录就切换个人中心，否则显示 登录注册组件 -->
                <router-link to="/person" style= "margin: 20px;" v-else>
                    <el-dropdown size="large" style="margin: 20px;">
                        <el-avatar
                            class="imgChange"
                            shape="circle"
                            :size="50"
                            fit="fill"
                            src="src/assets/364253.jpeg"
                            
                        ></el-avatar>
                        <!-- 退出登录组件 是头像下的下拉按钮，有退出登录的功能 -->
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item @click="avatarClicks">退出登录</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </router-link>
            </el-header>
        </el-container>
    </div>
</template>

<script >
// vue 的 全局 api
import { defineComponent, onBeforeMount, onBeforeUpdate, reactive, ref, watch } from 'vue'
// 引入搜索框组件
import serach from '../components/serach.vue'
// 引入购物车组件
import ShoppingCart from '../components/shoppingCart.vue'
// 引入自定义 本地缓存的回调函数
import { StorageGet ,StorageSet} from '../router/localStorages.js'
// 引入 vue路由的 api
import { useRoute } from 'vue-router'
// import {} from ''

export default defineComponent({
    // vue 组件挂载
    components: { serach, ShoppingCart },
    // 页面名
    name: 'home',
    setup() {
        // 定义 常量
        const $route = useRoute()
        const avatarSrc = ref('')
        const tinyints = ref(false)
        const drawer = ref(false)
        const src = ref('')

        // @click事件 退出登录 功能函数
        function avatarClicks(params) {
            tinyints.value = false
            StorageSet({})
            // StorageGet()
        }
        onBeforeMount(()=>{
            tinyints.value = StorageGet().metas
            src.value = StorageGet().src
        })
        
        // 监视 路由动态，根据是否登录修改 tinyints的值，登录为true，否则为false
        watch(
            () => $route.path,
            (to, from) => {
                to == '/' ? (tinyints.value = StorageGet().metas, avatarSrc.value = StorageGet().src) : null
                console.log('route.path', to, from, tinyints.value)
            },
            { deep: true }
        )
        // 变量暴露给模板
        return {
            drawer,
            tinyints,
            avatarSrc,
            avatarClicks,
            src
        }
    }
})
</script>

<style>
.home-shoppingCart {
    /* display: flex; */
    /* top: 50%; */
    margin-left: 10px;
}
.home-avatar {
    /* display: flex; */
    /* top: 50%; */
    margin-left: 10px;
}
.home-Serach {
    /* display: flex; */
    /* top: 50%; */
    margin-left: 50px;
}
.home-menus {
    display: flex;
    /* max-width: 800px; */
}
.home-containerHeader {
    display: flex;
    padding-right: 20px;
    justify-content: center;
    align-items: center;
}
.imgChange {
    transition: all 0.7s ease;
}
.imgChange:hover {
    transform: scale(1.05);
    opacity: 0.7;
}
</style>