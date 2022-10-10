<script setup>
import { reactive, ref } from 'vue'
import Inputs from './min-component/inputs.vue'
import InputSearch from './min-component/inputInit.vue'
import InputT from './serach.vue'
import Radio from './min-component/Radio.vue'
import Slot from './min-component/slotsss.vue'
import Selects from './min-component/selects.vue'
import navmenu from './min-component/navmenu.vue'
import Timeout from './min-component/Timeout.vue'
import navMenu from './min-component/navmenu/navMenu.vue'
import menuItem from './min-component/navmenu/menu-item.vue'
const searchInput = Inputs.searchInput
const inputValues = ref('')
const opein = ref([
  'mmas', 'ssj', 'jdjs', 'jfjs', 'wjjs', '时光飞逝', '很舒服'
])
const opain = reactive([
  'mmas', 'ssj', 'jdjs', 'jfjs', 'wjjs', '时光飞逝', '很舒服'
])
const activities = reactive(
  [{
    content: '支持使用图标',
    timestamp: '2018-04-12 20:46',
    size: 'large',
    type: 'primary',
    icon: 'el-icon-more'
  }, {
    content: '支持自定义颜色',
    timestamp: '2018-04-03 20:46',
    color: '#0bbd87'
  }, {
    content: '支持自定义尺寸',
    timestamp: '2018-04-03 20:46',
    size: 'large'
  }, {
    content: '默认样式的节点',
    timestamp: '2018-04-03 20:46'
  }]

)
const activitiesa = reactive(
  [{
    content: '支持使用图标',
    timestamp: '2018-04-12 20:46',
    href: 'sssa',
    size: 'large',
    type: 'primary',
    two: {
      content: '支持自sa颜色',
      timestamp: '2018-04-03 20:46',
      color: '#0bbd87',
      href: 'svaks',
    }
  }, {
    content: '支持自定义颜色',
    timestamp: '2018-04-03 20:46',
    color: '#0bbd87',
    href: 'sssa',
  }, {
    content: '支持自定义尺寸',
    href: 'sssa',
  }, {
    content: '默认样式的节点',
    href: 'sssa',
  }]

)
// const inpVal = inputValues.value.InputSearch
// console.log(inputValues.value)
// const inputClg = ()=>console.log(inputValues.value)
const inputAt = function () {
  let inputId = document.getElementById("inputInit")
  inputId.onkeyup = (e) => {
    console.log(e.code == "Enter")
    console.log(e.code, inputValues.value)
  }
  console.log(inputId)
}
const lis = ref([
  [
    { href: 'scrsi', content: '阿瑟费呢' },
    [
      { href: 'scrsi', content: '阿瑟费呢' },
      [
        { href: 'scrsi', content: '阿瑟费呢' },
        { href: 'scrsi', content: '阿瑟费呢' }
      ]
    ]
  ],
  { href: 'ewj', content: '沙发上' },
  [
    { href: 'zsj', content: '官方数据' },
    [{ href: 'zsj', content: '官方数据' },
    { href: 'zsj', content: '官方数据' },
    { href: 'zsj', content: '官方数据' }]
  ],
  { href: 'ewj', content: '沙发上' }
])
const lia = ref([['scrsi#阿瑟费呢', 'jav#是法国撒谎', 'jav#是法国撒谎', 'jav#是法国撒谎'], 'javascript:;#护手霜', ['scrsi#阿瑟费呢', 'jav#是法国撒谎', 'jav#是法国撒谎', 'jav#是法国撒谎'], 'javascript:;#护手霜'])
const bool = ref(true)

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <div>
    <Inputs type="button" ref></Inputs>
    <!-- {{searchInput}} -->
    <!-- <button type="menu" >jjs</button> -->
    <InputSearch type="text" id="inputList"></InputSearch>
    <br />sb
    <input type="checkbox" name="ss" id value="gsg" disabled="true" />
    <InputT type="text" id="inputInit">
      <template v-slot:slotProps>
        <i>鬼故事</i>
        <!-- <span class="green">{{ slotProps.item }}</span> -->
        {{ slotProps.item }}
      </template>
    </InputT>
    <Radio label="故事发生" id="radioStr" disabled></Radio>
    <Slot>假戏真做</Slot>
    <Selects :values="opain"></Selects>
    <navmenu :liArray="lis">
      <template #navTitle>hsdh</template>
    </navmenu>
    <nav-menu>
      <menu-item>
        酒店管理
        <nav-menu>
          <menu-item>服务管理</menu-item>
        </nav-menu>
      </menu-item>
      <menu-item>
        酒店管理
        <nav-menu>
          <menu-item>服务管理</menu-item>
          <menu-item>服务管理</menu-item>
          <menu-item>服务管理</menu-item>
        </nav-menu>
      </menu-item>
      <menu-item>
        酒店管理
        <nav-menu>
          <menu-item>服务管理</menu-item>
        </nav-menu>
      </menu-item>
    </nav-menu>
    <Timeout :liArray="activities"></Timeout>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
