<template>
    <div>
        <div class="order-list">
            <router-link :to="{path: '/orderDetail/'+item.id}" v-for="item in orderList" :key="item.id" 
                class="order-item">
                <div class="item-left">
                    <img :src="getImgUrl(item.product.thumbnail_img_url)" alt="" class="item-img">
                </div>
                <div class="item-right">
                    <i class="icon"></i>
                    <h4 class="item-title">{{item.product.title}}</h4>
                    <p class="item-desc">订单号：{{item.order_no}}</p>
                    <p v-show="item.state == '0'" class="item-desc">下单时间：{{item.insert_time}}</p>
                    <p v-show="item.state == '1'" class="item-desc">验证时间：{{item.validate_time}}</p>
                </div>
            </router-link>
        </div>
        <spinner :type="loadingType" v-show="showLoading" class="loading"></spinner>
    </div>
</template>

<script>
    import { Spinner } from 'vux'
    import api from '../api/api'
    import env from '../config/env'

    export default {
        props: [
            'category'
        ],
        data() {
            return {
                orderList: [],
                showLoading: false,
                loadingType: 'lines',
                iconStyle: 'icon-remaituijian'
            }
        },
        mounted() {
            this.initData()
        },
        watch: {
            category(newVal) {
                // 这里有个bug，当主菜单切换的时候，也会触发改变，此时category为空，所以在这里多加了个if判断
                if(newVal) {
                    this.initData()
                }
            }
        },
        methods: {
            async initData() {
                let vm = this
                // 显示加载动画
                vm.showLoading = true
                // 0：待验证 1：已验证
                let state = vm.category === 'toVerifyOrder' ? '0' : '1'
                // 服务端获取订单列表，一次获取10条记录
                api.get('getOrderList', 
                        {member_id: localStorage.member_id, state , startLimit: 0, pageSize: 99}
                    ).then((res) => {
                    if(res.status===1){
                        // 转换数组
                        vm.orderList = res.data
                    }else{
                        vm.$vux.alert.show({
                            title: env.alertInfo,
                            content: res.message,
                            buttonText: '确定',
                            dialogTransition:'',
                            maskTransition:''
                        })
                    }
                    // 隐藏加载动画
                    vm.showLoading = false
                }).catch(error => {
                    vm.$vux.alert.show({
                        title: env.alertInfo,
                        content: env.errorInfo,
                        buttonText: '确定',
                        dialogTransition:'',
                        maskTransition:''
                    })
                })
            },
            getImgUrl(thumbnail_img_url) {
                return env.serverUrl + thumbnail_img_url
            }
        },
        components: {
            Spinner
        }
    }
</script>

<style scoped>
    .order-list {
        background-color: #FFFFFF;
        margin-top: 10px;
        position: relative;
        overflow: hidden;
        height: 100%;
    }
    .order-list:before {
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
    .order-item {
        color: #000000;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
        padding: 15px;
        position: relative;
    }
    .order-item:before {
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
        width: 60px;
        height: 60px;
        line-height: 60px;
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
    /*加载动画水平垂直居中*/
    .loading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
