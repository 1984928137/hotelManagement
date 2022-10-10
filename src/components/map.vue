<template>
    <div id="mapMain">
        
        <div>
            经度：
            <input type="text" id="lon" />
            纬度：
            <input type="text" id="lat" />
            <input type="button" value="查询坐标点" @click="query()" />
        </div>
        <div id="container"></div>
        <!-- <div id="mapdiv" style="position:absolute;width:800px; height:500px"></div> -->
    </div>
</template>

<script setup >

import { onBeforeMount, onMounted, ref } from 'vue'

defineProps({ msg: String })

const count = ref(0)


// let  map;               //地图对象123
let zoom = 12;         //层级，值越大，地图范围越小
let lon = 113.14;   //经度
let lat = 23.08;    //纬度

    let center = new qq.maps.LatLng(lat, lon);
    



function query() {
    lon = document.getElementById('lon').value;
    lat = document.getElementById('lat').value;
    if (lon == '' || lon == null) lon = 116.40769;
    if (lat == '' || lat == null) lat = 39.89945;
    let center = new TMap.LatLng(lon, lat);
    // map.centerAndZoom(t, zoom);
}
onMounted(()=>{//初始化地图
    let map = new qq.maps.Map(document.getElementById('container'), {
        rotation: 20,//设置地图旋转角度
        pitch: 30, //设置俯仰角度（0~45）
        zoom: zoom,//设置地图缩放级别
        center: center//设置地图中心点坐标
    });
})

// let mapMain = document.getElementById('mapMain').onload = initMap()

</script>

<style>
    #container{
        position:relative;width:800px; height:500px
    }
    #mapMain{
        display: flex;
    flex-direction: column;
    align-items: center;
    }
</style>