<template>
    <div>
        <x-header :left-options="{backText: '返回',showBack: true}"
            class="header">用户中心</x-header>
        <div class="content">
            <p class="center"></p><img src="../assets/touxiang.jpg" class="touxiang">
            <div class="phone">{{$store.state.user.memberShip.phone}}</div>
            <div class="product-list">
            <router-link :to="{path: item.path}" v-for="item in list" :key="item.title"
                class="product-item">
                <div class="item-left">
                    <img :src="item.src" alt="" class="item-img">
                </div>
                <div class="item-right">
                    <i class="icon"></i>
                    <h4 class="item-title">{{item.title}}</h4>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </router-link>
        </div>
        </div>
        <spinner :type="loadingType" v-show="showLoading" class="loading"></spinner>
    </div>
</template>

<script>
    import { Panel, Spinner, XHeader } from 'vux'
    import api from '../api/api'
    import auth from '../api/auth'
    import env from '../config/env'
    export default {
        data() {
            return {
                showLoading: false,
                loadingType: 'lines',
                type: '1',
                iconStyle: 'icon-remaituijian',
                list: [{
                    src: require('../assets/user.png'),
                    title: '个人信息',
                    desc: '查询个人相关信息',
                    path: '/userInfo'
                }, {
                    src: require('../assets/order.png'),
                    title: '我的订单',
                    desc: '查询待验证及已验证订单',
                    path: '/myOrder'
                }],
            }
        },
        mounted() {
        },
        methods: {
        },
        components: {
            Panel,
            XHeader, 
            Spinner
        }
    }
</script>

<style scoped>
    .header {
        width: 100%;
        position: absolute;
        left: 0px;
        top: 0px;
        z-index: 100;
    }
    .content {
        padding-top: 46px;
        position: relative;
    }
    .center {
        text-align: center;
        color: #fff;
        font-size: 18px;
        background: url('../assets/bg-1.jpg') no-repeat;
        background-size: 100%;
        line-height: 150px;
        height: 150px;
        padding-top: 20px;
    }
    .touxiang {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 70px auto;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 2px solid #ececec;
        -moz-box-shadow:2px 2px 5px #333333; 
        -webkit-box-shadow:2px 2px 5px #333333; 
        box-shadow:2px 2px 5px #333333;
    }
    .phone {
        text-align: center;
        margin-top: -45px;
        color: #ffffff;
        font-weight: bold;
        font-size: 18px;
        position:relative;
        z-index: 999;
        -moz-text-shadow:2px 2px 5px #333333; 
        -webkit-text-shadow:2px 2px 5px #333333; 
        text-shadow:2px 2px 5px #333333;
    }
    .product-list {
        background-color: #FFFFFF;
        margin-top: 27px;
        position: relative;
        overflow: hidden;
        height: 100%;
    }
    .product-list:before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #E5E5E5;
        color: #E5E5E5;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
    }
    .product-item {
        color: #000000;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        padding: 10px 15px;
        position: relative;
    }
    .product-item:before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #E5E5E5;
        color: #E5E5E5;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
        left: 15px;
    }
    .item-left {
        margin-right: .8em;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
    }
    .item-img {
        width: 100%;
        max-height: 100%;
        vertical-align: top;
        border: 0;
    }
    .item-right {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        min-width: 0;
    }
    .item-title {
        font-weight: 400;
        font-size: 15px;
        width: auto;
        line-height: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        word-wrap: break-word;
        word-break: break-all;
    }
    .item-desc {
        color: #999999;
        font-size: 13px;
        line-height: 1.8;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
    .icon {
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        right: 0px;
    }
    .icon:after{
        content: " ";
        display: inline-block;
        height: 6px;
        width: 6px;
        border-width: 2px 2px 0 0;
        border-color: #C8C8CD;
        border-style: solid;
        transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        position: absolute;
        top: 50%;
        margin-top: -4px;
        right: 15px;
    }
    .loading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>