import api from './api'
import store from '../store'
import router from '../router'
import axios from 'axios'
import $ from 'jquery'

export default {
    // 登录
    login(phone, success, faild) {
        pretendRequest(phone, (res) => {
            if (res.authenticated) {
                localStorage.customToken = res.customToken
                localStorage.member_id = res.member_id
                // 修改store中的
                //store.dispatch()
                if (success) success()
            } else {
                localStorage.removeItem("customToken")
                localStorage.removeItem("member_id")
                if (faild) faild()
            }
        })
    },
    // logout(cb) {
    //     // 删除本地token
    //     localStorage.removeItem('customToken')
    //     if (cb) cb()
    // },
    // 验证路由访问权限
    loggedIn(success, faild) {
        if (!localStorage.customToken || !localStorage.member_id) {
            // 这里还要多加个请求，服务端获取openid，然后服务端验证openid是否注册过，没有注册则faild，注册过将member_id和token返回，加到localStorage，这样做的目的是防止用户清除浏览器缓存导致localStorage清空
            return faild()
        } else {
            // 路由拦截不再向服务器做token的校验
            return success()
        }
    }
}

function pretendRequest(phone, cb) {
    api.post('wechatLogin', { phone, cache: false }).then(res => {
        if (res.status == '1') {
            // 成功
            cb({
                authenticated: true,
                //token: Math.random().toString(36).substring(7)
                customToken: res.data.customToken,
                member_id: res.data.member_id,
            })
        } else if (res.status == '3') {
            sessionStorage.phone = phone
            // 请求openid跳转
            window.location.href = res.data
        } else {
            //失败
            cb({ authenticated: false })
        }
    })
}