

<template>
    <el-carousel :interval="4000" type="card" height="400px" class="carouselsChange">
        <el-carousel-item v-for="item in imgArr" :key="item">
            <img :src="item" alt="">
        </el-carousel-item>
    </el-carousel>
</template>

<script setup >
import { ref } from 'vue'

defineProps({ msg: String })

const imgArr = ['src/assets/lb1.jpeg','src/assets/lb2.jpeg',
'src/assets/lb3.jpeg','src/assets/lb4.jpeg',
'src/assets/lb5.jpeg','src/assets/lb6.jpeg']
</script>
  
<style >
.carouselsChange {
    margin-top: 30px;
}
.carouselsChange img{
    width: 100%;
    height: 400px;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>
  