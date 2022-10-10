
<template>
    <div>
        <el-avatar
                class="imgChange"
                shape="circle"
                :size="50"
                fit="fill"
                :src="'/images' + props.src"
                @click="avatarClick"
            ></el-avatar>
        <el-dropdown size="large">
            
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item @click="avatarClicks">退出登录</el-dropdown-item>
                    
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup >
import { ref ,defineExpose} from 'vue'
import {StorageSet,StorageGet} from '../router/localStorages'


const props = defineProps({ src: String })
const url = '../../assets/logo.png'
const count = ref(true)
function avatarClick(params) {
    console.log('avatarClick', params)
}
function avatarClicks(params) {
    count.value = false
    StorageSet({})
    StorageGet()
}

defineExpose({
    count
})
</script>

<style>
.imgChange {
    transition: all 0.7s ease;
    
}
.imgChange:hover{
    transform: scale(1.05);
    opacity: 0.7;
}
</style>