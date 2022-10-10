<template>
    <div class="payment">
        <form class="paymentform" action="/api/payment" method="post" target="nm_iframe" > 
        <!--form规定当提交表单时向何处发送表单数据, 意思是当前的数据用post方法传递-->
          <table width="60%">
            <tr>  
                <td bgcolor="#F7FEFF" colspan="4"> <!--colspan 属性规定单元格可横跨的列数。-->
                     订单号：<span>{{ordformid}}</span>
                     支付金额：<span>{{props.roomprice == null? 0: props.roomprice}}</span> 元
                 </td>
            </tr>
            <tr><td><br/></td></tr>
            <tr>
                <td>请您选择在线支付银行</td>
            </tr>
            <tr>
              <td><input type="radio" name="pd_FrpId" value="CMBCHINA-NET">招商银行 </td>
              <td><input type="radio" name="pd_FrpId" value="ICBC-NET">工商银行</td>
              <td><input type="radio" name="pd_FrpId" value="ABC-NET">农业银行</td>
              <td><input type="radio" name="pd_FrpId" value="CCB-NET">建设银行 </td>
            </tr>
            <tr>
              <td><input type="radio" name="pd_FrpId" value="CMBC-NET">中国民生银行总行</td>
              <td><input type="radio" name="pd_FrpId" value="CEB-NET" >光大银行 </td>
              <td><input type="radio" name="pd_FrpId" value="BOCO-NET">交通银行</td>
              <td><input type="radio" name="pd_FrpId" value="SDB-NET">深圳发展银行</td>
            </tr>
            <tr>
              <td><input type="radio" name="pd_FrpId" value="BCCB-NET">北京银行</td>
              <td><input type="radio" name="pd_FrpId" value="CIB-NET">兴业银行 </td>
              <td><input type="radio" name="pd_FrpId" value="SPDB-NET">上海浦东发展银行 </td>
              <td><input type="radio" name="pd_FrpId" value="ECITIC-NET">中信银行</td>
            </tr>
            <tr><input type="hidden" name="idArr" :value="props.idArr" >
                <input type="hidden" name="userid" :value="props.userid" >
                <input type="hidden" name="stTime" :value="stTime" >
                <input type="hidden" name="enTime" :value="enTime" >
                <input type="hidden" name="nowDate" :value="rTime(new Date())" >
                <input type="hidden" name="ordformid" :value="ordformid" >
                <input type="hidden" name="reservationNum" :value="reservationNum" >
                
            <td><br/></td></tr>
            <tr>
              <td><input type="submit" @click="aviod" value="确定支付"></td>
              <td><input type="button" @click="aviodjumps" value="取消"></td>
            </tr>
         </table>
           </form>
           <iframe name="nm_iframe" style="display:none;" frameborder="0"></iframe>
           
    </div>
</template>

<script setup >
    import { ref, toRef, watch } from 'vue'
    import {useRouter,useRoute} from 'vue-router'
    import {rTime} from '../assets/js/time'
    import {dayTimes} from '../assets/js/buy'
    const $route = useRoute()
    const router = useRouter()
    const ordFrom = ref(Date.now())
    const stTime = rTime(dayTimes[0])
    const enTime = rTime(dayTimes[1])
    
    watch(
            () => $route.path,
            (to,from)=>{
                from == '/hotelRoom'? console.log("window"):  null
                console.log('payment route.path',to,from)
            },
            {deep:true}
        )
    const props = defineProps({roomprice:String,id:String,idArr:Array,userid:String,num:String})
    const price = ref()
    
    let ordformid = props.id== null? 0: ordFrom.value + props.id
    let reservationNum = props.num
    console.log(reservationNum)
    const count = ref(0)

    const aviod = ()=>{
        ElMessage('支付完成,正在跳转首页')
        
        setTimeout(rouers,3000)

    }

    function rouers(params) {
        router.push('/')
    }
    const aviodjumps = ()=>{
        
        console.log($route.params,props.roomprice)
    }
</script>

<style>
.payment{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
.paymentform{
    display: flex;
    justify-content: center;
}
</style>