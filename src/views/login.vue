
<template>
    <div>
        欢迎登录
        <!-- 用户框 -->
        <div class="loginUser">
            <span>用户名：</span>
            <el-input
                type="text"
                v-model="loginInput"
                @input="loginInputUserVal(loginInput)"
                id="loginInputUser"
                placeholder="请输入用户名"
            ></el-input>
        </div>
        <!--密码框 -->
        <div class="loginPassword">
            <span>密码：</span>
            <el-input
                v-model="loginInputPassword"
                type="password"
                show-password
                placeholder="请输入密码"
                id="loginInputPassword"
                
                @input="loginInputUserPasswordVal(loginInputPassword)"
            ></el-input>
        </div>
        <div>
            <input type="submit" value="登录" @click="loginInputPasswordVals" class="userButton" />
        </div>
        <div>
            <input type="submit" value="忘记密码" @click="loginInputPasswordVals" class="userChangePwd" />
        </div>
        <div>{{ axiosTate }}</div>
    </div>
</template>



<script setup >
import { ref } from 'vue'
// 引入 自定义的 axjx 回调函数
import { apiAxios } from '../assets/js/axios'
import { StorageSet } from '../router/localStorages.js';
import { useRouter,useRoute } from 'vue-router'


defineProps({ msg: String })
// 使用vue路由
const $router = useRouter()
// 使用vue路由
const $route = useRoute()

const loginInput = ref('')

const axiosTate = ref()

const loginInputPassword = ref()

const count = ref(0)

const loginInputUserVal = function (val) {
    // 清除输入用户名的空格
    let userStr = String(val).toString().trim()
    // 打印
    console.log(userStr)
}
const loginInputUserPasswordVal = function (val) {
    console.log(val)
}
const loginInputPasswordVals = function (val) {
    // let userStr = loginInput.value
    // let userPwd = loginInputPassword.value
    if (loginInputPassword.value == undefined || loginInput.value == undefined) {
        alert('请输入用户名或密码')
    } else {
        // 使用正则查询，防止恶意代码输入
        let userStrReg = loginInput.value.toString().match(/(\<|\>|\[|\]|\{|\})/gi)
        let userPwdStrReg = loginInputPassword.value.toString().match(/(\<|\>|\[|\]|\{|\})/gi)
        if (userStrReg || userPwdStrReg) {
            alert('请不要使用‘<>’、‘{}’、‘[]’等非法字符作为用户名')
        } else {
            
            (async function retData() {
                // 等待异步回调返回后台返回的信息
                axiosTate.value = await apiAxios('POST', '/user/login', { userName: loginInput.value, userPwd: loginInputPassword.value })
                // StorageSet(axiosTate.value)
                if (axiosTate.value.metas == true) {
                    // 本地存储信息
                    StorageSet(axiosTate.value)
                    // router.push({name:'person'})
                    $router.push('/')
                }
            })()

            // 打印后台返回的信息是否有值
            console.log(45, axiosTate.value)
        }
    }


//    打印用户名和密码的值
    console.log(loginInput.value, loginInputPassword.value)
}
</script>



<style>
.loginUser {
    width: 400px;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.loginUser span {
    width: 70px;
    min-width: 70px;
    display: flex;
    padding-left: 15px;
}
.loginPassword {
    width: 400px;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.loginPassword span {
    width: 70px;
    min-width: 70px;
    display: flex;
    padding-left: 15px;
}
.userButton {
    border: solid 1px rgb(34, 112, 143);
    background-color: hsl(189, 88%, 55%);
    border-radius: 30px;
    width: 80px;
    height: 50px;
}
.userChangePwd {
    background-color: snow;
    border: solid 2px rgba(82, 80, 80, 0.363);
    border-radius: 8px;
    width: 80px;
    height: 25px;
}
</style>