import axios from "axios";
import qs from "qs";
import { baseURl } from './axiosConfig'

const service = axios.create({
    // baseURL: baseURl,
    timeout: 8000
})

service.interceptors.request.use(
    // config => {

    //     return config
    // },
    // err => {
    //     return Promise.reject(err)
    // }
)

service.interceptors.response.use(
    // response => {
    //     const res = response.data
    //     if (res.code === '303') {

    //     } else {
    //         return res
    //     }
    // },
    // error => {
    //     return Promise.reject(error)
    // }
)

function msgRes(response) {
    if (response && (response.status == 200 || response.status == 304 || response.status == 400)) {
 console.log('数据获取成功')
        // return response
    } else {
        console.log('数据获取错误')
    }
}
function apiAxios(method, url, params) {
    let httpDefault = {
        method: method,
        baseURl: baseURl,
        url: url,
        params: method === 'GET' || method === 'DELETE' ? params : null,
        data: method === 'POST' || method === 'PUT' ? qs.stringify(params) : null
    }
    return service(httpDefault).then(res => {
        msgRes(res)
        let data = res.data
        console.log(data)
        return data
    }).catch(err => {
        msgRes(err)
        
        console.log(err)
        return err
    })

}

export {
    service,
    apiAxios
}