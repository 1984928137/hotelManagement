
<template>
    <div>
        <!-- <input type="button" class='iconfont icon-search search'> -->
        <ul>
            <li v-if="shopCart">
                <span @click="drawer = true" class="iconfont icon-gouwuchekong"></span>
            </li>
            <li v-else>
                <span @click="drawer = true" class="iconfont icon-gouwucheman"></span>
            </li>
        </ul>
        <el-drawer v-model="drawer" title :with-header="true" size="65%" :show-close="true">
            <template #title>
                <span v-if="shopCart" class="iconfont icon-gouwuchekong">购物车</span>
                <span v-else class="iconfont icon-gouwuchekong">购物车</span>
            </template>

            <span>Hi there!</span>
            <div class="sa">
                <ul>
                    <li v-for="(item,index) in values" :key="index" class="roomLi">
                        <input
                            type="checkbox"
                            class="selectAllCheck"
                            name="selectAllChecks"
                            id
                            :value="item.id"
                        />
                        <div class="roomBar">
                            <div class="time">
                                <span>{{ item.stTime }}</span> |
                                <span>{{ item.enTime }}</span>
                            </div>
                            <div class="roomTitle" style="justify-content: center;">
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
                                <input
                                    type="hidden"
                                    :value="item.roomprice"
                                    name="roomprice"
                                    id="roomprice"
                                />
                            </span>
                            <!-- 价格 -->
                            <span class="rooms">房间数量：{{ item.roomNum == null ? 0 : item.roomNum }}</span>
                            <!-- 房间数量 -->
                            <input
                                type="button"
                                value="删除"
                                @click="closeCartBtn(index)"
                                name
                                id
                                class="addCartBtn"
                            />
                            <!-- 加购物车按钮 -->
                        </div>
                    </li>
                </ul>
            </div>
            <div style="display: flex; justify-content: center;">
                <input
                    type="button"
                    name="alls"
                    class="addCartBtn"
                    id="all"
                    @click="allCheck()"
                    value="全选"
                />
                <input
                    type="button"
                    name="noAll"
                    class="addCartBtn"
                    id="noAll"
                    value="全不选"
                    @click="noAllCheck()"
                />
                <input type="button" class="addCartBtn" value="支付" @click="jumpPayment" name id />
                <div style="display: flex;align-items: center;">
                    <el-input-number v-model="num" :min="1" :max="10" />
                </div>
                
            </div>
        </el-drawer>
    </div>
</template>

<script >
import { defineComponent, onBeforeMount, onBeforeUpdate, onMounted, reactive, ref, toRef, toRefs, watch } from 'vue'
import { carts, closeCart, dayTimes } from '../assets/js/buy'
import { rTime } from '../assets/js/time'
import { useRoute, useRouter } from 'vue-router'
import { StorageGet } from '../router/localStorages'



export default defineComponent({

    name: '',
    props: {

    },

    setup(props, { emit, expose }) {
        const num = ref(1)
        const drawer = ref(false)
        const shopCart = ref(true)
        const allChecksvalue = ref([])
        const allCheckspricevalue = ref(0)
        const values = ref([])
        const $router = useRouter()
        const router = useRouter()
        // emit('addCarts','asfs')
        let allChecks = document.getElementsByName("selectAllChecks");
        let roomprice = document.getElementsByName('roomprice')
        function allCheck(params) {

            for (let i = 0; i < allChecks.length; i++) {
                console.log()
                allChecks[i].checked = true
            }
        }
        function closeCartBtn(params) {
            for (let i = 0; i < carts.length; i++) {
                if (i == params) {

                    values.value.splice(i, 1);
                    console.log(carts)
                }
            }
            // closeCart(params)
        }
        function noAllCheck(params) {
            let allChecks = document.getElementsByName("selectAllChecks");
            for (let i = 0; i < allChecks.length; i++) {
                allChecks[i].checked = false
            }
        }
        function jumpPayment(params) {
            drawer.value = false
            allCheckspricevalue.value = null
            for (let i = 0; i < allChecks.length; i++) {
                if (allChecks[i].checked == true) {
                    allChecksvalue.value.push(allChecks[i].value)
                    allCheckspricevalue.value = allCheckspricevalue.value + Number.parseInt(roomprice[i].value)
                }

            }
            if (allChecksvalue.value.length == 0) {
                ElMessage('您还没有选择房间')
                drawer.value = true
            } else {
                console.log('allChecksvalue',allChecksvalue.value)
                router.push({
                    name: 'payment',
                    params: {
                        idArr: allChecksvalue.value,
                        id: allChecksvalue.value[0],
                        roomprice: allCheckspricevalue.value,
                        userid: StorageGet().name == undefined ? '' : StorageGet().name,
                        num: num.value
                    }
                })
                allChecksvalue.value = []
            }


        }

        onBeforeMount(() => {
            console.log(111)
        })
        onBeforeUpdate(() => {
            values.value = carts
            // $forceUpdate()
        })
        expose({

        })

        // watch(

        // )
        return {
            drawer,
            shopCart,
            allChecksvalue,
            values,
            allCheck,
            noAllCheck,
            jumpPayment,
            closeCartBtn,
            num
        }
    }
})

</script>

<style>
.hotelrs {
    display: none;
}
.time{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
</style>