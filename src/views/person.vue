
<template>
    <el-container>
        <el-aside class="leftAside">
            <div class="personAvatar">
                <el-avatar :src="'/images' + src"></el-avatar>
                <span class="personAvatarName">{{ userName }}</span>
            </div>
            <div>
                <ul class="personList">
                    <li id="liBack" name="liBack" @click="clickLiBack(0)">
                        <span>帐号信息</span>
                    </li>
                    <li name="liBack" @click="clickLiBack(1)">
                        <span>订单</span>
                    </li>
                    <li name="liBack" @click="clickLiBack(2)">
                        <span>退房</span>
                    </li>
                </ul>
            </div>
        </el-aside>
        <el-main style="width:1000px;max-width: 1000px;min-width: 700px;">
            <!-- 用户个人信息 -->
            <div class="liBolckOne" name="liBolck">
                <div>
                    用户名：
                    <span>{{ personAxiosTate.name }}</span>
                </div>
                <br />
                <div>
                    密码：
                    <span>{{ personAxiosTate.userPwd }}</span>
                </div>
                <br />
                <div>
                    手机：
                    <span>{{ personAxiosTate.phone }}</span>
                </div>
                <br />
                <div>
                    身份证号：
                    <span>{{ personAxiosTate.idNumber }}</span>
                </div>
                <br />
                <div>
                    帐号注册时间：
                    <span>{{ rTime(personAxiosTate.createdate) }}</span>
                </div>
            </div>
            <div class="liBolckTwo" name="liBolck">
                <div class="shelf-table">
                    <div class="table-msg">
                        <h2 class="shelf-title" id="shelfTitle">所有订单</h2>共
                        <strong class="dark ml5 mr5" id="elMoTotal">2</strong>
                        <span id="shelfAmount">个订单</span>
                    </div>
                    <div class="table-size">
                        <table id="shelfTable" class="ui-table table-checkbox">
                            <thead>
                                <tr style="height: 40px;border-bottom: 1px solid #e0deda;">
                                    <th
                                        scope="col"
                                        style="width: 40px;justify-content: center;display: flex;align-items: center;"
                                    >
                                        <input
                                            type="checkbox"
                                            id="chkBookNameAll"
                                            name="bookname"
                                            value="all"
                                        />
                                        <label class="ui-checkbox" for="chkBookNameAll"></label>
                                    </th>
                                    <th scope="col" width="230">订单号</th>
                                    <th scope="col" width="230">创建时间</th>
                                    <th scope="col" width="120">订购者</th>
                                    <th scope="col" width="230">入住时间</th>
                                    <!-- <th scope="col" width="230">退房时间</th> -->
                                    <th scope="col" width="120">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    class="ddTrs"
                                    style="border-bottom: 1px solid #e0deda;height: 50px;"
                                    v-for="(item, index) in outRoomOrdFs"
                                    :key="index"
                                >
                                    <td class="trda">
                                        <input
                                            type="checkbox"
                                            class="elWcheckbox"
                                            id="chkBookName0"
                                            name="ddbookname"
                                            value="1026938964"
                                        />
                                        <label class="ui-checkbox" for="chkBookName0"></label>
                                    </td>
                                    <td class="col2">
                                        <span class="shelf-table-name">{{ item.ordformid }}</span>
                                    </td>
                                    <!-- 订单号 -->
                                    <td class="col3 font12">
                                        <span>{{ rTime(item.createdate) }}</span>
                                        <!-- 创建时间 -->
                                    </td>
                                    <td class="col4">
                                        <span>{{ personAxiosTate.name }}</span>
                                        <!-- 用户名 -->
                                    </td>
                                    <td class="col5">
                                        <span>{{ rTime(item.checkIntime) }}</span>
                                        <!-- 退房时间 -->
                                    </td>

                                    <td class="col6">
                                        <a href>
                                            <span>更多></span>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="altText">
                            <span>没有查询到您的订单记录哦</span>
                        </div>
                        <div style="height:51px;">
                            <table class="ui-table table-checkbox">
                                <thead>
                                    <tr>
                                        <th
                                            scope="col"
                                            class="trda2 trv2"
                                            style="line-height:50px;"
                                        >
                                            <input
                                                type="checkbox"
                                                id="chkBookNameAll2"
                                                name="bookname"
                                                value="all"
                                            />
                                            <label for="chkBookNameAll2" class="mr12">全选</label>
                                        </th>
                                        <th scope="col" class="trv1" style="line-height:50px;">
                                            <input type="button" value="置顶" />
                                            <input type="button" @click="closeDdTrs" value="删除" />
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="liBolckThree" name="liBolck">
                <ul>
                    <li>
                        <span style="display: flex;">进行中</span>
                        <br>
                    </li>
                    <li>
                        <span style="display: flex;">已完成</span>
                        <div class="shelf-table">
                            <div class="table-msg">
                                <h2 class="shelf-title" id="shelfTitle">所有订单</h2>共
                                <strong class="dark ml5 mr5" id="elMoTotal">{{outRoomOrdFs.length}}</strong>
                                <span id="shelfAmount">个订单</span>
                            </div>
                            <div class="table-size">
                                <table id="shelfTable" class="ui-table table-checkbox">
                                    <thead>
                                        <tr style="height: 40px;border-bottom: 1px solid #e0deda;">
                                            <th
                                                scope="col"
                                                style="width: 40px;justify-content: center;display: flex;align-items: center;"
                                            >
                                                <input
                                                    type="checkbox"
                                                    id="chkBookNameAll"
                                                    name="bookname"
                                                    value="all"
                                                />
                                                <label class="ui-checkbox" for="chkBookNameAll"></label>
                                            </th>
                                            <th scope="col" width="230">订单号</th>
                                            <th scope="col" width="230">创建时间</th>
                                            <th scope="col" width="120">订购者</th>
                                            <th scope="col" width="230">入住时间</th>
                                            <!-- <th scope="col" width="230">退房时间</th> -->
                                            <th scope="col" width="120">&nbsp;</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            class="tableTrs"
                                            style="border-bottom: 1px solid #e0deda;height: 50px;"
                                            v-for="(item, index) in outRoomOrdFs"
                                            :key="index"
                                        >
                                            <td class="trda">
                                                <input
                                                    type="checkbox"
                                                    class="elWcheckbox"
                                                    id="chkBookName0"
                                                    name="tfBookname"
                                                    value="1026938964"
                                                />
                                                <label class="ui-checkbox" for="chkBookName0"></label>
                                            </td>
                                            <td class="col2">
                                                <span class="shelf-table-name">{{ item.ordformid }}</span>
                                            </td>
                                            <!-- 订单号 -->
                                            <td class="col3 font12">
                                                <span>{{ rTime(item.createdate) }}</span>
                                                <!-- 创建时间 -->
                                            </td>
                                            <td class="col4">
                                                <span>{{ personAxiosTate.name }}</span>
                                                <!-- 用户名 -->
                                            </td>
                                            <td class="col5">
                                                <span>{{ rTime(item.checkIntime) }}</span>
                                                <!-- 退房时间 -->
                                            </td>

                                            <td class="col6">
                                                <a href>
                                                    <span>更多></span>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="altText">
                                    <span>没有查询到您的订单记录哦</span>
                                </div>
                                <div style="height:51px;">
                                    <table class="ui-table table-checkbox">
                                        <thead>
                                            <tr>
                                                <th
                                                    scope="col"
                                                    class="trda2 trv2"
                                                    style="line-height:50px;"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        id="chkBookNameAll2"
                                                        name="bookname"
                                                        value="all"
                                                    />
                                                    <label for="chkBookNameAll2" class="mr12">全选</label>
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="trv1"
                                                    style="line-height:50px;"
                                                >
                                                    <input type="button" value="置顶" />
                                                    <input type="button" @click="closeTabel" value="删除" />
                                                </th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- </div> -->
        </el-main>
    </el-container>
</template>

<script setup >
import { onBeforeMount, onMounted, ref } from 'vue'
import { StorageGet } from '../router/localStorages'
import { apiAxios } from '../assets/js/axios'
import { rTime } from '../assets/js/time'
import { formatDate, nowDate } from '../assets/js/time'

defineProps({ msg: String })

const axiosTate = ref()
const personAxiosTate = ref({})
const src = ref('')
const userid = ref()
const outRoomOrdFs = ref([])
const userName = ref('')
const ordFs = ref()
const time = formatDate(new Date(2021, 1, 25, 10, 33, 30, 0))
const price = ref(124)
const endTime = formatDate(new Date(2021, 1, 27, 18))
let liBack = document.getElementsByName('liBack')
let liBolck = document.getElementsByName('liBolck')
const ordfrom = ref(16468186608462)

let StoGet = StorageGet()
console.log(StoGet)
src.value = StoGet.src
userid.value = StoGet.id
userName.value = StoGet.name

let bookname = document.getElementsByName('tfBookname')
let ddbookname = document.getElementsByName('ddbookname')
let tableTrs = document.getElementsByClassName('tableTrs')
let ddTrs = document.getElementsByClassName('ddTrs')


const closeTabel =()=>{
    for (let index = 0; index < bookname.length; index++) {
        console.log(bookname[index].checked)
        if (bookname[index].checked == true) {
            tableTrs[index].style.display = 'none'
        }
    }
}
const closeDdTrs =()=>{
    for (let index = 0; index < ddbookname.length; index++) {
        console.log(ddbookname[index].checked)
        if (ddbookname[index].checked == true) {
            ddTrs[index].style.display = 'none'
        }
    }
}

async function retData() {
    // 等待异步回调返回后台返回的信息
    axiosTate.value = await apiAxios('GET', '/user/person', { userName: userName.value, userid: userid.value })
    // StorageSet(axiosTate.value)
    ordFs.value = axiosTate.value.userNameAdm
    for (const key in ordFs.value) {
        if (ordFs.hasOwnProperty.call(ordFs.value, key)) {
            const element = ordFs.value[key];
            console.log(`element`, element.whetherToOut)
            if (element.whetherToOut == 1) {
                outRoomOrdFs.value.push(element)
            }

        }
    }
}
retData()
async function retUserData() {
    // 等待异步回调返回后台返回的信息
    personAxiosTate.value = await apiAxios('GET', '/user/personData', { id: userid.value })
    // StorageSet(axiosTate.value)
    console.log(`personAxiosTate`, personAxiosTate.value.name)

}


// 点击不同的按钮，切换页面内容

const clickLiBack = (value) => {

    for (let index = 0; index < liBack.length; index++) {
        if (index == value) {
            // 设置页面为显示，按钮颜色为#a3e4ff30
            liBolck[index].style.display = "flex"
            liBack[index].style.backgroundColor = '#a3e4ff30'
        } else {
            // 设置页面不显示，按钮颜色为空
            liBolck[index].style.display = "none"
            liBack[index].style.backgroundColor = ''
        }

    }
}

onBeforeMount(() => {
    // ordFs.value = axiosTate.value.userNameAdm
    retUserData()
})
onMounted(() => {
    // 默认 第一个按钮的颜色 
    liBack[0].style.backgroundColor = '#a3e4ff30'
})
</script>

<style>
.leftAside {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    margin-left: 2%;
}
.personAvatar {
    display: flex;
    flex-direction: column;
    width: 200px;
    align-items: center;
    justify-content: center;
    align-content: center;
    margin-left: 50px;
    margin-top: 30px;
}
.personAvatarName {
    margin: 15px 0px;
}
.personList {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    margin-left: 50px;
    margin-top: 10px;
}
.personList li {
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    /* background-color: #a3e4ff30; */
    margin: 5px;
    border-radius: 10px;
}
.personList li:hover {
    color: rgb(50, 115, 255);
}
.liBolckOne {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.liBolckTwo {
    display: none;
}
.liBolckThree {
    display: none;
}
tr {
    display: flex;
    align-items: center;
}
.trda {
    width: 40px;
    justify-content: center;
    display: flex;
    align-items: center;
}
.trda2 {
    width: 40px;
    justify-content: center;
    display: flex;
    align-items: center;
}
.col2 {
    width: 230px;
}
.col3 {
    width: 230px;
}
.col4 {
    width: 120px;
}
.col5 {
    width: 230px;
}
.col6 {
    width: 120px;
}
.trv1 {
    display: flex;
    justify-content: space-around;
    width: 30%;
    align-items: center;
    margin-left: auto;
}
.trv2 {
    width: 12%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}
.altText {
    display: none;
    align-items: center;
    height: 200px;
    justify-content: center;
}
td span {
    color: #000;
}
</style>