import axios from 'axios'
import router from '../router'
import {
    Message
} from 'element-ui'

const service = axios.create({
    timeout: 60000,
    baseURL: process.env.BASE_URL
})

service.defaults.header.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

/**
 * 请求前拦截
 * 用于处理需要在请求前的操作
 */
service.interceptors.request.use(config => {
    const token = localStorage.getItem('token')

    if (token) {
        config.headers['Authorization'] = token
    }

    return config
}, error => {
    return Promise.reject(error)
})

/**
 * 请求响应拦截
 * 用于处理需要在请求返回后的操作
 */
service.interceptors.response.use(response => {
    const responseCode = response.status

    if (responseCode === 200) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(response)
    }
}, error => {
    // 断网 或者 请求超时 状态
    if(!error.response) {
        if(error.message.includes('timeout')) {
            console.log('超时了')
            Message.error('请求超时，请检查网络是否连接正常')
        }else {
            console.log('断网了')
            Message.error('请求失败，请检查网络是否已连接')
        }

        return
    }
    
    const responseCode = error.response.status

    switch (responseCode) {
        case 401:
            router.replace({
                path: '/login',
                query: {
                    redirect: router.currentRoute.fullPath
                }
            })
            break
        case 403:
            Message({
                type: 'error',
                message: '登录信息过期，请重新登录'
            })
            localStorage.removeItem('token')
            setTimeout(() => {
                router.replace({
                    path: '/login',
                    query: {
                        redirect: router.currentRoute.fullPath
                    }
                })
            }, 1000)
            break
        case 404:
            Message({
                type: 'error',
                message: '网络请求不存在'
            })
            break
        default:
            Message({
                type: 'error',
                message: error.response.data.message
            })
    }

    return Promise.reject(error)
})


export default service
