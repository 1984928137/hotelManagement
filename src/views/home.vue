
<template>
    <el-container class="home">
        <el-container class="homeMain">
            <!-- 轮播图 -->
            <carousels></carousels>
            <el-container class="homeMenuDown"></el-container>
            <div>
                <!-- 酒店特色 -->
                <ul class="advantages_of_options_Ul">
                    <li class="advantages_of_options_li">
                        <div class="liSpan">
                            <span class="iconfont icon-weibiaoti-3 liSpanIcon"></span>
                        </div>
                        <span style="font-size: 18px;color: #555;font-weight: 500;">地理位置优越</span>
                        <span>酒店位置交通便利、出行方便，周围环境有银行、大型商场、地铁、医院等</span>
                    </li>
                    <li class="advantages_of_options_li">
                        <div class="liSpan">
                            <span class="iconfont icon-fangyuzhong liSpanIcon"></span>
                        </div>
                        <span style="font-size: 18px;color: #555;font-weight: 500;">室内豪华装修</span>
                        <span>高级壁纸或高级乳胶漆墙面、复合地板地面、石膏板吊顶天花板、大理石台面窗台</span>
                    </li>
                    <li class="advantages_of_options_li">
                        <div class="liSpan">
                            <span class="iconfont icon-zhuangxiu liSpanIcon"></span>
                        </div>
                        <span style="font-size: 18px;color: #555;font-weight: 500;">高级安全系数</span>
                        <span>请放心使用本酒店，酒店内房间都是经过严格检查，几乎没有安全隐患</span>
                    </li>
                    <li class="advantages_of_options_li">
                        <div class="liSpan">
                            <span class="iconfont icon-huanjing liSpanIcon"></span>
                        </div>
                        <span style="font-size: 18px;color: #555;font-weight: 500;">住宿环境良好</span>
                        <span>房间隔音效果好，周围环境良好，噪音很低，空气质量高，睡眠质量高</span>
                    </li>
                </ul>
            </div>

            <div>
                <span class="activityTexts">精品套房</span>
            </div>
            <el-container>
                <!-- 酒店房间图 -->
                <el-aside
                    style="display: flex;flex-direction: column;justify-content: space-between;"
                >
                    <div class="backRoom">
                        <!-- 放 房间图片 到 背景图片 上 -->
                        <span>Balcony Room</span>
                    </div>
                    <div class="backRoomOne">
                        <!-- 放 房间图片 到 背景图片 上 -->
                        <span>Sea View Room</span>
                    </div>
                </el-aside>
                <el-main>
                    <div class="backRoomTwo">
                        <!-- 放 房间图片 到 背景图片 上 -->
                        <span>Superior Room</span>
                    </div>
                </el-main>
                <el-aside
                    style="display: flex;flex-direction: column;justify-content: space-between;"
                >
                    <div class="backRoomThree">
                        <!-- 放 房间图片 到 背景图片 上 -->
                        <span>Deluxe Room</span>
                    </div>
                    <div class="backRoomFive">
                        <!-- 放 房间图片 到 背景图片 上 -->
                        <span>Luxury Suite Room</span>
                    </div>
                </el-aside>
            </el-container>
            <el-container>
                <span class="activityTexts">热门活动精选</span>
            </el-container>
            <el-container>
                <el-aside class="activityAside">
                    <div class="activityTable">
                        <div class="images">
                            <img src="../assets/565.jpeg" alt />
                        </div>
                        <div class="activityTableText">
                            <span>客房价格：50</span>
                            <span>附赠：</span>
                            <span>Honeymoon Packagem 蜜月套餐</span>
                        </div>
                    </div>
                    <div class="activityTable">
                        <div class="images">
                            <img src="../assets/565.jpeg" alt />
                        </div>
                        <div class="activityTableText">
                            <span>客房价格：50</span>
                            <span>附赠：</span>
                            <span>Free Breakfast Package 免费早餐套餐</span>
                        </div>
                    </div>
                    <div class="activityTable">
                        <div class="images">
                            <img src="../assets/565.jpeg" alt />
                        </div>
                        <div class="activityTableText">
                            <span>客房价格：50</span>
                            <span>附赠：</span>
                            <span>Facial Treatments 美容护理</span>
                        </div>
                    </div>
                </el-aside>
                <el-main class="activityMain">
                    <!-- 图片 -->
                    <div class="activityMainOneimg">
                        <img src="../assets/265641.jpg" alt />
                    </div>
                    <div class="activityMainTwoimg">
                        <img src="../assets/56039.jpg" alt />
                    </div>
                    <div class="activityMainThreeimg">
                        <img src="../assets/120410.jpg" alt />
                    </div>
                </el-main>
            </el-container>
        </el-container>
        <el-container class="messageBoard">
            <ul class="messageBoardUl">
                <!-- 底部评价轮播图 -->
                <li v-for="item in 8" :key="item">
                    <div>
                        <span v-for="item in 5" :key="item" class="iconfont icon-star-yellow"></span>
                    </div>
                    <span class="messageBoardUlLiSpan">这个房间特别干净，隔音效果非常不错，真的可以试一试</span>
                    <el-avatar class="messageBoardAvatar" src="src/assets/6236225.jpeg"></el-avatar>
                    <span class="messageBoardAvatarSpan">哈奇在线 {{ item >= 6 ? item - 5 : item }}</span>
                </li>
            </ul>
        </el-container>
    </el-container>
</template>

<script >
import { defineComponent, onBeforeMount, onBeforeUpdate, onMounted, reactive, ref } from 'vue'


// import {} from ''

export default {
    name: 'home',
    setup() {
        const drawer = ref(false)

        onMounted(() => {
            let num = 0
            // 获取 底部轮播图 元素
            let qersCss = document.querySelector(".messageBoardUl")
            // let times
            function setTimeoutCall() { // 轮播图  setTimeout调用
                if (num <= 0 && num > -1800) {
                    num = num - 360
                } else {
                    num = 0

                }
                if (num == 0) {
                    qersCss.style.transition = ""
                    let times = setTimeout(setTimeoutCall, 200)
                } else {  //  图片滑动 时间
                    qersCss.style.transition = "all 1.5s ease 0s"

                    let times = setTimeout(setTimeoutCall, 2000)
                }
                // transform 设置底部轮播图动画效果
                qersCss.style.transform = "translate3d(" + num + "px, 0px, 0px)"



            }
            setTimeoutCall()


        })

        return {
            drawer
        }
    }

}
</script>

<style>
.home {
    display: flex;
    flex-wrap: wrap;
    min-width: 100%;
}
.homeMenuDown {
    display: flex;
    flex-direction: row;
}
.homeMain {
    display: flex;
    flex-direction: column;
    min-width: 1420px;
}
.advantages_of_options_Ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;
    /* padding: 20px; */
}
.advantages_of_options_li {
    width: 250px;
    height: 300px;
    border: solid 1px rgb(184, 182, 182);
    background-color: white;
    display: flex;
    flex-direction: column;
    /* padding: 20px; */
    margin: 20px;
    align-content: center;
    align-items: center;
    justify-content: space-evenly;
}
.messageBoard {
    width: 1080px;
    height: 300px;
    margin: 20px auto;
    max-width: 1080px;
    min-width: 1080px;
    overflow: hidden;
    /* display: flex; */
    /* left: 50%; */
    background-color: rgba(144, 238, 250, 0.219);
}
.messageBoardUl {
    /* width: 50%; */
    /* height: 270px; */
    margin: auto;
    /* max-width: 97%; */
    padding: 0;
    transform: translate3d(0px, 0px, 0px);
    /* transition: all 1s ease 1s; */
    width: 2160px;
    /* background-color: burlywood; */
    display: flex;
}
.messageBoardUl li {
    margin: 15px 30px;
    width: 300px;
    height: 270px;
    display: flex;
    flex-wrap: wrap;
    /* max-width: 33%; */
    /* min-width: 33%; */
}
.messageBoardUl li div {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: flex-start;
    height: 60px;
    width: 300px;
}
.messageBoardUlLiSpan {
    display: flex;
    height: 120px;
    width: 300px;
    padding: 10px 0;
}
.messageBoardAvatar {
    display: flex;
    /* padding: 5px 0; */
    /* height: 60px; */
}
.el-avatar--large {
    --el-avatar-size: 70px;
}
.messageBoardAvatarSpan {
    display: flex;
    width: 190px;
    justify-content: flex-start;
    margin: 8px 20px;
    align-content: center;
    align-items: center;
}
.activityAside {
    width: 700px;
    margin-bottom: 10px;
}
.images {
    width: 100px;
    height: 100px;
    border-radius: 45% 55% 70% 35% / 45% 45% 55% 45%;
    overflow: hidden;
}
.images img {
    width: 100px;
    height: 100px;
}
.activityTable {
    width: 600px;
    height: 100px;
    transition: all 300ms ease;
    padding: 40px 40px 35px;
    display: flex;
    margin-bottom: 10px;
}
.activityTableText {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
}
.activityTable:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
}
.activityMain {
    display: flex;
    position: relative;
}
.activityMainOneimg {
    position: absolute;
    width: 270px;
    z-index: 2;
}
.activityMainOneimg img {
    width: 100%;
    box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.2),
        0px 10px 27px 0px rgba(0, 0, 0, 0.2);
}
.activityMainTwoimg {
    position: absolute;
    width: 600px;
    top: 60px;
    left: 50px;
}
.activityMainTwoimg img {
    width: 100%;
    box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.2),
        0px 10px 27px 0px rgba(0, 0, 0, 0.2);
}
.activityMainThreeimg {
    position: absolute;
    width: 170px;
    top: 286px;
    left: 520px;
}
.activityMainThreeimg img {
    width: 100%;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2),
        0px 10px 27px 0px rgba(0, 0, 0, 0.2);
}
.activityTexts {
    display: flex;
    font-size: xx-large;
    justify-content: space-around;
    width: 100%;
    align-content: center;
    align-items: center;
    font-weight: bold;
    text-shadow: 0 10px 15px #000000b8;
}
.liSpan {
    width: 50px;
    height: 50px;
    padding: 20px 22px;
    background: #90704d;
    display: flex;
    border-radius: 75px;
    box-shadow: 0px 0px 20px -5px #90704d;
    border-color: #90704d;
    justify-content: center;
    align-items: center;
}
.liSpanIcon {
    color: white;
    font-size: xx-large;
}
.advantages_of_options_li:hover {
    background-color: #90704d;
}
.advantages_of_options_li:hover .liSpan {
    background-color: white;
}
.advantages_of_options_li:hover span {
    color: white;
}
.advantages_of_options_li span:hover {
    color: white;
}
.advantages_of_options_li:hover .liSpanIcon {
    color: #90704d;
}
.backRoom {
    width: 300px;
    height: 230px;
    background-image: url(src/assets/5.jpeg);
    background-size: 100% 100%;
}

.backRoomOne {
    width: 300px;
    height: 230px;
    background-image: url(src/assets/4.jpeg);
    background-size: 100% 100%;
}
.backRoomTwo {
    width: 100%;
    height: 430px;
    background-image: url(src/assets/3.jpeg);
    background-size: 100% 100%;
}
.backRoomThree {
    width: 300px;
    height: 230px;
    background-image: url(src/assets/2.jpeg);
    background-size: 100% 100%;
}
.backRoomFive {
    width: 300px;
    height: 230px;
    background-image: url(src/assets/1.jpeg);
    background-size: 100% 100%;
}
</style>