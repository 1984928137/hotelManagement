<template>
    <div class="footer">
        <div class="footerMain">
            <div class="footerMainLeft">
                <span>© 2022 All Trend Hotel .</span>
                <img src="../assets/二维码.gif" alt="">
            </div>
            <div class="footerMainCenter">
                <span>快速链接</span>
                <ul>
                    <li><router-link to="/">首页</router-link></li>
                    <li><router-link to="/hotelRoom">酒店房间</router-link></li>
                    <li><router-link to="/">酒店餐饮</router-link></li>
                    <li><router-link to="/">酒店分布</router-link></li>
                    <li><router-link to="/">预定</router-link></li>
                    <li><router-link to="/">活动</router-link></li>
                </ul>
            </div>
            <div class="footerMainRight">
                <span>特色活动</span>
                <ul>
                    <li><a href=""><span>蜜月套餐</span></a></li>
                    <li><a href=""><span>热门瑜伽练习室</span></a></li>
                    <li><a href=""><span>美容套餐</span></a></li>
                </ul>
            </div>
            <div class="footerMainMailbox">
                <span>订阅</span>
                <span>特色服务和齐全的设施等着你的到来</span>
                <input type="email" name="email"  placeholder="邮箱">
                <input type="button" name="button"  value="发送">
            </div>
        </div>
    </div>
</template>

<script setup >
import { ref } from 'vue'

defineProps({ msg: String })

const count = ref(0)
</script>

<style>
.footer {
    width: 100%;
    height: 400px;
    background-color: #dededea1;
    display: flex;
    align-items: center;
    justify-content: center;
}
.footerMain {
    width: 1200px;
    display: flex;
    height: 200px;
}
.footerMainLeft{
    display: flex;
    flex-direction: column;
}
.footerMainLeft img{
    width: 100px;
    margin-top: 40px;
}
.footerMainCenter{
    display: flex;
    flex-direction: column;
    margin-left: 150px;
}
.footerMainCenter span{
    margin-bottom: 15px;
}
.footerMainCenter li{
    margin-bottom: 10px;
}
.footerMainCenter li a{
    color: #e28787;
}
.footerMainCenter li a:hover{
    color: skyblue;
}
.footerMainRight{
    display: flex;
    flex-direction: column;
    margin-left: 150px;
}
.footerMainRight span{
    margin-bottom: 15px;
}
.footerMainRight li{
    margin-bottom: 10px;

}

.footerMainRight li a{
    color: #e28787;
}
.footerMainRight li a:hover{
    color: skyblue;
}
.footerMainMailbox{
    display: flex;
    flex-direction: column;
    margin-left: 150px;
}
.footerMainMailbox span{
    margin-bottom: 15px;
}
</style>