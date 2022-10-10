<template>
    <div class="sleRoom">
        <div class="sleRoomBar">
            <h1 class="sleRoomBarText">双人间</h1>
            <span class="sleRoomBarText">HOTEL</span>
            <span class="sleRoomBarSpan">"</span>
            <div class="breadcrumb">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/singleRoom' }">双人间</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
        <div class="roomList">
            <ul>
                <li class="roomListli" v-for="(item,index) in 4" :key="index">
                    <div>
                        <img :src="'src/assets/lb'+( 4 - index )+'.jpeg'" alt />
                    </div>
                    <span class="boldSpan">双人间</span>
                    <span class>干净舒适</span>
                    <input type="button" class="resbutton" name="" id="" value="预定">
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup >
import { ref } from 'vue'

defineProps({ msg: String })

const count = ref(0)
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
.el-breadcrumb__inner {
    color: #fff;
}
.roomList {
    display: flex;
    border: solid 1px rgb(255, 255, 255);
    width: 1100px;
}
.roomList ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.roomListli {
    display: flex;
    width: 300px;
    height: 450px;
    margin-left: 50px;
    flex-direction: column;
    margin-top: 20px;
    align-items: center;
}
.boldSpan{
    font-size: xx-large;
    font-weight: bold;
}
.roomListli:hover img {
    transform: scale(1.05);
    opacity: 0.7;
}
.roomListli span {
    margin-top: 10px;
    transition: all 0.5s ease;
}
.roomListli:hover span {
    transform: scale(1.05);
    opacity: 0.7;
}

.roomListli div {
    width: 290px;
    height: 290px;
    overflow: hidden;
}
.roomListli img {
    width: 300px;
    height: 300px;
    transition: all 0.7s ease;
}
.resbutton{
    display: flex;
    position: relative;
    left: 35%;
    border: solid 1px rgb(57, 199, 255);
    width: 100px;
    height: 45px;
    justify-content: center;
    align-content: center;
    align-items: center;
    color: rgb(57, 199, 255);
    border-radius: 7px;
    background-color: #fff;
}
.resbutton:hover{
    color: #fff;
    background-color: rgb(57, 199, 255);
}
</style>
