
<template>
    <div>
        <nav>
            <el-menu
                :ellipsis="ellipsisBool"
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                router
            >
                <el-menu-item index="/">首页</el-menu-item>
                <el-sub-menu index="2" >
                    <template #title >酒店房间</template>
                    <el-menu-item index="/hotelRoom">所有房间</el-menu-item>
                    <el-menu-item index="/singleRoom">单人间</el-menu-item>
                    <el-menu-item index="/doubleRoom">双人间</el-menu-item>
                    <el-menu-item index="2-3">总统套房</el-menu-item>
                    <el-sub-menu index="2-4">
                        <template #title>主题房间</template>
                    </el-sub-menu>
                </el-sub-menu>
                <!-- <el-menu-item index="3">酒店餐饮</el-menu-item> -->
                <el-sub-menu index="3">
                    <template #title>酒店餐饮</template>
                    <el-menu-item index="Notice">早餐</el-menu-item>
                </el-sub-menu>
                <el-menu-item index="map">酒店分布</el-menu-item>

                <!-- <el-menu-item index="5">预定</el-menu-item> -->
                
                <!-- <el-menu-item index="6">活动</el-menu-item> -->

                <el-menu-item index="8">帮助</el-menu-item>
                <el-menu-item index="9">关于我们</el-menu-item>
            </el-menu>
        </nav>
    </div>
</template>

<script setup >
import { ref } from 'vue'
import { useRouter } from 'vue-router';


const $router = useRouter()

defineProps({ msg: String })
const ellipsisBool = ref(true)
const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}
const routers = (key, keyPath) => {
    console.log(key, keyPath)
    $router.push('/hotelRoom')
}
const count = ref(0)
</script>

<style>
</style>