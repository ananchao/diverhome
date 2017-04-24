import axios from 'axios'
import qs from 'qs'
import md5 from 'md5'
import LRU from 'lru-cache'
import env from '../config/env'

// 服务端接口地址配置
let config
if (process.__API__) {
    config = process.__API__
} else {
    config = process.__API__ = {
        api: env.serverUrl + '/diverhome/rest/',
        // 接口数据缓存，15分钟有效期
        cached: LRU({
            max: 1000,
            maxAge: 1000 * 60 * 15
        })
    }
}

export default {
    // post请求，会先判断缓存中是否已经存在对应数据
    post(url, data, headers) {
        const key = md5(url + JSON.stringify(data))
        if (config.cached && config.cached.has(key)) {
            return new Promise((resolve, reject) => {
                resolve(config.cached.get(key));
            })
        }
        // 缓存无数据，发起post请求
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: config.api + url,
                // jwt验证的token放在header中传递到服务端
                headers: { customToken: localStorage.getItem("customToken") },
                // 请求参数
                data: qs.stringify(data),
            }).then(res => {
                // 如果请求参数中含有cache属性且为true，则将响应数据加入缓存
                if (config.cached && data.cache) config.cached.set(key, res.data)
                    // axios响应的数据被封装在data属性中
                resolve(res.data)
            }).catch(function(error) {
                reject()
            });
        })
    },
    // get请求，会先判断缓存中是否已经存在对应数据
    get(url, data, headers) {
        const key = md5(url + JSON.stringify(data))
        if (config.cached && config.cached.has(key)) {
            return new Promise((resolve, reject) => {
                resolve(config.cached.get(key));
            })
        }
        // 缓存无数据，发起get请求
        return new Promise((resolve, reject) => {
            axios.get(config.api + url, {
                headers: { customToken: localStorage.getItem("customToken") },
                params: data
            }).then(res => {
                resolve(res.data)
            }).catch(error => {
                reject()
            })
        })
    }
}