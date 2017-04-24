import Vue from 'vue'
import Router from 'vue-router'
import auth from '../api/auth'
import store from '../store'

Vue.use(Router)

const main = resolve => { require(['views/Main'], resolve) }
const shop = resolve => { require(['views/Shop'], resolve) }
const user = resolve => { require(['views/User'], resolve) }
const notice = resolve => { require(['views/Notice'], resolve) }
const productList = resolve => { require(['components/ProductList'], resolve) }
const productDetail = resolve => { require(['views/ProductDetail'], resolve) }
const order = resolve => { require(['views/Order'], resolve) }
const login = resolve => { require(['views/Login'], resolve) }
const myOrder = resolve => { require(['views/MyOrder'], resolve) }
const orderList = resolve => { require(['components/OrderList'], resolve) }
const orderDetail = resolve => { require(['views/OrderDetail'], resolve) }
const userInfo = resolve => { require(['views/UserInfo'], resolve) }
const openIdValid = resolve => { require(['views/OpenIdValid'], resolve) }

var router = new Router({
    // mode: 'history',
    // scrollBehavior(to, from, savedPosition) {
    //     if (savedPosition) {
    //         return savedPosition
    //     } else {
    //         return { x: 0, y: 0 }
    //     }
    // },
    routes: [{
            path: '/',
            redirect: '/main'
        },
        {
            path: '/main',
            component: main,
            children: [{
                    path: '',
                    redirect: '/shop'
                },
                {
                    path: '/shop',
                    component: shop,
                    children: [{
                            path: '',
                            redirect: 'course'
                        },
                        {
                            path: 'course',
                            component: productList,
                            props: { category: 'course' }
                        },
                        {
                            path: 'goods',
                            component: productList,
                            props: { category: 'goods' }
                        }
                    ]
                },
                {
                    path: '/user',
                    component: user,
                    meta: { requiresAuth: true },
                },
                {
                    path: '/notice',
                    component: notice,
                    meta: { requiresAuth: true },
                },
                {
                    path: '/productDetail/:id',
                    component: productDetail
                },
                {
                    path: '/order/:id',
                    component: order,
                    meta: { requiresAuth: true },
                },
                {
                    path: '/login',
                    component: login
                },
                {
                    path: '/myOrder',
                    component: myOrder,
                    meta: { requiresAuth: true },
                    children: [{
                            path: '',
                            redirect: 'toVerifyOrder'
                        },
                        {
                            path: 'toVerifyOrder',
                            component: orderList,
                            props: { category: 'toVerifyOrder' }
                        },
                        {
                            path: 'verifiedOrder',
                            component: orderList,
                            props: { category: 'verifiedOrder' }
                        }
                    ]
                },
                {
                    path: '/orderDetail/:id',
                    component: orderDetail,
                    meta: { requiresAuth: true }
                },
                {
                    path: '/userInfo',
                    component: userInfo,
                    meta: { requiresAuth: true }
                },
                {
                    path: '/openIdValid',
                    component: openIdValid
                }
            ]
        }
    ]
})

// 注册全局的before钩子
router.beforeEach((to, from, next) => {
    // 判断路由是否需要先进行身份验证
    if (localStorage.member_id && store.state.user.badge == -1) {
        // 如果localStorage的member_id存在，直接获取未读公告数
        store.dispatch('getBadge', {member_id: localStorage.member_id})
    }
    if (to.matched.some(record => record.meta.requiresAuth)) {
        auth.loggedIn(() => {
            // 此时localStorage.member_id一定存在
            let member_id = localStorage.member_id
            // 如果用户信息不存在，初始化全局用户信息和未读公告数
            if (JSON.stringify(store.state.user.memberShip) == '{}') {
                store.dispatch('initUser', {member_id})
                store.dispatch('getBadge', {member_id})
            }
            next()
        }, () => {
            sessionStorage.toPullPath = to.fullPath
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        })
    } else {
        next() // 确保一定要调用 next()
    }
})

export default router