
<template>
    <div>
        <el-badge :value="12" class="item">
            <span class="iconfont icon-tongzhi"></span>
        </el-badge>
    </div>
</template>

<script setup >
import { ref } from 'vue'

defineProps({ msg: String })

const count = ref(0)
</script>

<style>
.item {
    /* margin-top: 10px; */
    margin-right: 20px;
}
</style>