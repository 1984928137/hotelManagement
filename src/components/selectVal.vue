
<template>
    <div class="selectValPer">
        <el-select
            v-model="value"
            placeholder="选择城市"
            size="large"
            @click="selectClick"
            @change="seleChange"
            filterable
            class="selectDown"
        >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            ></el-option>
        </el-select>
        <el-select
            v-model="value"
            placeholder="选择酒店"
            size="large"
            @click="selectClick"
            @change="seleChange"
            filterable
            class="selectDown"
        >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            ></el-option>
        </el-select>
        <date-time-picker></date-time-picker>
        <div class="customerDivChange">
            <div  class="customerSpanText" >
                <span>{{ numOne }}客房</span>
                <span>，{{ numTwo }}客人</span>
                <span v-if="numThree > 0">，{{ numThree }}小孩</span>
            </div>
            <ul class="customerUlChange" >
                <li class="customerLi">
                    {{ customer[0].value }}
                    <el-input-number v-model="numOne" :min="0" :max="10" @change="handleChange" />
                </li>
                <li class="customerLi">
                    {{ customer[1].value }}
                    <el-input-number v-model="numTwo" :min="0" :max="10" @change="handleChange" />
                </li>
                <li class="customerLi">
                    {{ customer[2].value }}
                    <el-input-number v-model="numThree" :min="0" :max="10" @change="handleChange" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup >
import { ref, toRef } from 'vue'

defineProps({ msg: String })
const value = ref('')

const numOne = ref(1)
const numTwo = ref(1)
const numThree = ref(0)

const options = [
    {
        value: '四川',
        label: '四川',
    },
    {
        value: '广州',
        label: '广州',
    },
    {
        value: '深圳',
        label: '深圳',
    },
    {
        value: '北京',
        label: '北京',
    },
    {
        value: '黑龙江',
        label: '黑龙江',
    },
    {
        value: 'HTML',
        label: 'HTML',
    },
]
const customer = [
    {
        value: '客房',
    },
    {
        value: '成人',
    },
    {
        value: '儿童',
    },
]

function selectClick(params) {
    console.log("selectClick", params)
}

function seleChange(val) {
    console.log('seleChange', val, value.value)
}

function filterMethod(params) {
    console.log(params)
    if (!!params) {
        return options.filter(item => {
            if (item.value === params) {
                return item
            }
        })
    }
}


const handleChange = (value) => {
    console.log(value)
}

const count = ref(0)
</script>

<style>
.selectValPer {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    padding-left: 15%;
    min-width: 1016px;
}
.customerLi {
    margin-top: 10px;
}
.customerDivChange{
    width: 170px;
    height: 63px;
    padding-left: 15px;
}
.customerDivChange:hover .customerUlChange {
    display: flex;
    /* flex-direction: column; */
    position: absolute;
}
.customerUlChange{
    display: none;
    flex-direction: column;

}
.customerSpanText{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
    height: 70%;
    top: 0%;
    justify-content: center;
    align-items: flex-end;
}
.selectDown{
    height: 100%;
    display: flex;
    align-items: flex-end;
}
</style>