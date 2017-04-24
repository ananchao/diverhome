<template>
    <div>
        <div class="product-list">
            <router-link :to="{path: '/productDetail/'+item.id}" v-for="item in productList" :key="item.id" 
                class="product-item">
                <div class="item-left">
                    <img :src="getImgUrl(item.thumbnail_img_url)" alt="" class="item-img">
                </div>
                <div class="item-right">
                    <i class="icon iconfont" :class="iconStyle"></i>
                    <h4 class="item-title">{{item.title}}</h4>
                    <p class="item-original-price">原价：￥{{item.original_price}}</p>
                    <p class="item-member-price">会员价：￥{{item.member_price}}</p>
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
                productList: [],
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
                // /course  =>  /goods 调用
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
                // 服务端获取产品列表，一次获取10条记录
                api.get('getProductList', 
                        {category: vm.category, startLimit: 0, pageSize: 99}
                    ).then((res) => {
                    if(res.status===1){
                        // 转换数组
                        vm.productList = res.data
                        if(vm.category==='course'){
                            this.iconStyle = "icon-remaituijian"
                        }else{
                            this.iconStyle = "icon-zhekoutuijian"
                        }
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
    .product-list {
        background-color: #FFFFFF;
        margin-top: 10px;
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
        padding: 15px;
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
        font-weight: 700;
        font-size: 16px;
        width: auto;
        line-height: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        word-wrap: break-word;
        word-break: break-all;
    }
    .item-original-price {
        color: #999999;
        font-size: 13px;
        line-height: 1.8;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
    .item-member-price {
        color: #FF6600;
        font-size: 13px;
        line-height: 1.8;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
    .icon {
        float: right;
        color: #FC251C;
        font-size: 20px;
    }
    /*加载动画水平垂直居中*/
    .loading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
