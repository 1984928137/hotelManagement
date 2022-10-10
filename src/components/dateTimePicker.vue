
<template>
    <div>
        <div class="demonstration">
            <span>入住时间</span>
            <el-date-picker
            @change="ass(val)"
                v-model="value2"
                type="datetimerange"
                size="large"
                :start-placeholder="startTime"
                :end-placeholder="endTime"
                :default-time="defaultTime2"
            ></el-date-picker>
            <span>退房时间</span>
        </div>
    </div>
</template>

<script setup  >
import { ref,defineExpose } from 'vue'
import {dayTimes,dayTimesValues} from '../assets/js/buy'

const value1 = ref()
let value2 = ref()

const yearVal = ref(new Date().getFullYear())
const monthVal = ref(new Date().getMonth())
const dayVal = ref(new Date().getDay())
const hoursVal = ref(new Date().getHours())
const minutesVal = ref(new Date().getMinutes())
const secondsVal = ref(new Date().getSeconds())
const millisecondsVal = ref(new Date().getMilliseconds())
// console.log(monthVal.value)
const startTime = ref(new Date().toString())
const endTime = ref(new Date(yearVal.value, monthVal.value + 1, dayVal.value, hoursVal.value,
    minutesVal.value, secondsVal.value, millisecondsVal.value).toString())
// console.log(endTime.value.toString().split('').join('-'))
const defaultTime1 = [new Date(2000, 1, 1, 12, 0, 0)] // '12:00:00'
const defaultTime2 = [
    new Date(2000, 1, 1, 12, 0, 0),
    new Date(2000, 2, 1, 8, 0, 0),
] // '12:00:00', '08:00:00'

defineExpose({
    value2
})


let timeChange = function(){
    
    console.log('dayTimes',dayTimes,value2.value)
}

let ass = (val)=>{
    let dayTime = []
    if (value2.value != null) {
     
     dayTime.push(value2.value[0])
     dayTime.push(value2.value[1])
     console.log('q',dayTime)

    }
    
}
</script>

<style>
.demonstration {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

}
</style>