
<template>
    <el-autocomplete
        v-model="state"
        :fetch-suggestions="querySearchAsync"
        placeholder="请输入"
        @select="handleSelect"
    />
</template>
  
  <script setup>
import { ref, onMounted } from 'vue'
import {useRouter} from 'vue-router'

const state = ref('')

const links = ref([])

const router = useRouter()

const loadAll = () => {
    return [
        { value: '单人间', link: "/singleRoom" },
        { value: '双人间', link: 'https://github.com/ElemeFE/element' },
        { value: '总统套房', link: 'https://github.com/ElemeFE/cooking' },
        { value: '主题房间', link: 'https://github.com/ElemeFE/mint-ui' },
        { value: '早餐', link: 'https://github.com/vuejs/vuex' },
        { value: '酒店位置', link: 'https://github.com/vuejs/vue-router' },
    ]
}

let timeout 
const querySearchAsync = (queryString, cb) => {
    console.log(queryString)
    const results = queryString
        ? links.value.filter(createFilter(queryString))
        : links.value

    clearTimeout(timeout)
    timeout = setTimeout(() => {
        cb(results)
    }, 3000 * Math.random())
}
const createFilter = (queryString) => {
    return (restaurant) => {
        return (
            restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        )
    }
}

const handleSelect = (item) => {
    router.push(item.link)
}

onMounted(() => {
    links.value = loadAll()
})
</script>
  