<template>
    <div class="sleRoom">
        <div class="sleRoomBar">
            <!-- 标题栏 -->
            <h1 class="sleRoomBarText">所有房间</h1>
            <span class="sleRoomBarText">HOTEL</span>
            <span class="sleRoomBarSpan">"</span>
            <div class="breadcrumb">
                <!-- 面包屑，动态路由导航 -->
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/hotelRoom' }">所有房间</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
    </div>

    <div>
        <div >
        <date-time-picker ref="timeValue" @blur='ass'></date-time-picker></div>
        <!-- 房间信息列表 -->
        <ul>
            <li v-for="(item,index) in axiosTata" :key="index" class="roomLi">
                <div class="roomBar">
                    <div class="roomTitle">
                        <img :src="'src/assets/lb'+(index + 1)+'.jpeg'" width="120" height="120" alt srcset class="roomImg" />
                        <span class="roomName">{{ item.roomname }}</span>
                        <!-- 名称 -->
                    </div>
                    <div class="icons">
                        <span class="iconfont icon-ren"></span>
                        <!-- 图标 -->
                        <span class="iconfont icon-ren"></span>
                        <!-- 图标 -->
                    </div>

                    <span class="rooms">
                        床位:
                        {{ item.roombeds }}
                    </span>
                    <!-- 床位 -->
                    <span class="rooms">{{ item.breakfast == 0 ? '没早餐' : '有早餐' }}</span>
                    <!-- 是否有早餐 -->
                    <span class="rooms">{{ item.windowed == 0 ? '没窗' : '有窗' }}</span>
                    <!-- 房间是否有窗 -->
                    <span class="rooms">
                        价格:
                        {{ item.roomprice }}
                    </span>
                    <!-- 价格 -->
                    <span class="rooms">房间数量：{{ item.roomNum == null ? 0 : item.roomNum-item.use }}</span>
                    <!-- 房间数量 -->
                    <input
                        type="button"
                        name
                        id
                        value="预定"
                        @click="cilckPayment(index)"
                        class="reservationBtn"
                        :disabled="item.roomNum == null ? true : (item.roomNum > 0 ? false : true)"
                    />
                    <!-- 预定按钮 -->
                    <input
                        type="button"
                        value="加入购物车"
                        @click="addCartBtn(index)"
                        name
                        id
                        :disabled="item.roomNum == null ? true : (item.roomNum-item.use > 0 ? false : true)"
                        class="addCartBtn"
                    />
                    <!-- 加购物车按钮 -->
                </div>
            </li>
        </ul>
    </div>
</template>



<script >
    // vue 的 全局 api
import { defineComponent, onBeforeMount, watch, onMounted, reactive, ref, toRef, toRefs } from 'vue'
// 引入自定义 AJAX发送请求 的回调函数
import { apiAxios } from '../../assets/js/axios'
// 引入 vue路由的 api
import { useRouter, useRoute } from 'vue-router'
// 引入 自定义 公共常量函数 的回调函数
import {rTime} from '../../assets/js/time'
import { cartValues,dayTimesValues ,dayTimes} from '../../assets/js/buy'
import {StorageGet} from '../../router/localStorages'

export default defineComponent({
    name: '',
    props: {
    },
    setup(props, { emit, expose }) {
        const axiosTata = ref()

        const timeValue = ref('')
        const $route = useRoute()
        const router = useRouter()
        // 获取 ‘roomLi’类名的标签数组
        let addCart = document.getElementsByClassName("roomLi")
        // 点击click事件，跳转支付页面
        const cilckPayment = (value) => {
            if (timeValue.value.value2 == '') {
                ElMessage('您还没有选择时间')
            } else {
                
                router.push({
                    name: 'payment',
                    params: {
                        userid:StorageGet().name == undefined?'':StorageGet().name,
                        id: axiosTata.value[value].id,
                        roomprice: axiosTata.value[value].roomprice
                    }
                })
            }
            // $route.params = axiosTata.value[value].roomprice

        }
        const ass = ()=>{
            console.log( 'ass',timeValue.value.value2)
        }
        // 点击click事件，加入购物车
        const addCartBtn = (value) => {

            if (timeValue.value.value2 == '') {
                ElMessage('您还没有选择时间')
            } else {
                
                dayTimesValues(timeValue.value.value2)
                axiosTata.value[value].stTime = rTime(timeValue.value.value2[0])
                axiosTata.value[value].enTime = rTime(timeValue.value.value2[1])
                cartValues(axiosTata.value[value])
            }

            // vaas.value = axiosTata.value[value]
            // 打印要加入购物车的值 和 选择的时间
            
            
            // dayTimes.push(timeValue.value.value2[1])
            console.log(addCart[value], "timeValue", timeValue.value.value2)
        }
        // 监视路由跳转
        watch(
            () => $route.path,
            (to, from) => {
                to == '/payment' ? console.log("window") : null
                console.log('route.path', to, from)
            },
            { deep: true }
        )
        onBeforeMount(() => {
            // 获取后台的房间数据
            async function retData() {
                let Tata = ref()
                Tata.value = await apiAxios('GET', '/api/hotelRoom', {})
                // StorageSet(axiosTate.value)
                if (!Tata.value) {
                    console.log("数据错误")
                    // router.push({name:'person'})
                    return

                }
                axiosTata.value = Tata.value.userNameQuery
                console.log('axiosTata', axiosTata.value[0])
            }
            retData()
        })
        return {
            axiosTata,
            cilckPayment,
            timeValue,
            addCart,
            addCartBtn,
            ass
        }
    }
})
</script>

<style>
.sleRoom {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.sleRoomBar {
    display: flex;
    width: 1130px;
    height: 120px;
    background-color: rgba(139, 203, 255, 0.61);
    color: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
.sleRoomBarText {
    margin-left: 80%;
}
.sleRoomBarSpan {
    width: 130px;
    height: 10px;
    color: #fff;
    background-color: white;
    margin-left: 80%;
}
.breadcrumb {
    display: flex;
    margin-left: 3%;
    position: absolute;
    /* color: #fff; */
}
.el-breadcrumb {
    font-size: 24px;
}

.roomLi {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    flex-direction: row;
    border: solid 1px rgba(224, 240, 253, 0.719);
    height: 150px;
    width: 100%;
    /* justify-content: center; */
}
.roomBar {
    display: flex;
    /* height: 150px;
      width: 100%;
      align-content: center;
      justify-content: center; */
}
.roomTitle {
    display: flex;
    width: 170px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    align-content: center;
}

.roomImg {
    display: flex;
}

.roomName {
    display: flex;
}

.icons {
    display: flex;
    align-items: center;
    margin-left: 25px;
}

.rooms {
    display: flex;
    align-items: center;
    margin-left: 25px;
}

.reservationBtn {
    display: flex;
    align-items: center;
    width: 90px;
    height: 40px;
    border-radius: 7px;
    border: solid 1px rgba(65, 64, 64, 0.479);
    margin: 55px;
    justify-content: center;
}

.confirmBtn {
    display: flex;
    align-items: center;
    width: 90px;
    height: 40px;
    border-radius: 7px;
    border: solid 1px rgba(65, 64, 64, 0.479);
    margin: 55px;
    justify-content: center;
}

.addCartBtn {
    display: flex;
    align-items: center;
    width: 90px;
    height: 40px;
    border-radius: 7px;
    border: solid 1px rgba(65, 64, 64, 0.479);
    margin: 55px;
    justify-content: center;
}
</style>