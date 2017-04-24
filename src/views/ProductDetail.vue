<template>
    <div>
        <x-header :left-options="{backText: '返回',showBack: true, preventGoBack: true}"
            class="header" @on-click-back="back">{{title}}详情</x-header>
        <div class="content">
            <div v-cloak>
                <x-img :src="getImgUrl(product.img_url)" class="ximg-demo"      error-class="ximg-error"></x-img>
                <form-preview :header-label="title+'名称：'" 
                    :header-value="product.title" 
                    :body-items="productItem">
                </form-preview>
                <div style="padding:15px;">
                    <x-button @click.native="order" type="primary">确认下单</x-button>
                </div>
            </div>
        </div>
        <spinner :type="loadingType" v-show="showLoading" class="loading"></spinner>
    </div>
</template>

<script>
    import { Spinner, XHeader, XImg, Card, FormPreview, XButton } from 'vux'
    import api from '../api/api'
    import env from '../config/env'
    export default {
        data() {
            return {
                id: -1,
                product: {},
                productItem: [],
                title: '',
                showLoading: false,
                loadingType: 'lines',
            }
        },
        mounted() {
            this.id = this.$route.params.id
            this.initData()
        },
        methods: {
            async initData() {
                let vm = this
                // 显示加载动画
                vm.showLoading = true
                // 根据产品id获取产品详细信息
                api.get('getProductById/' + vm.id).then((res) => {
                    if(res.status===1){
                        // 产品对象
                        vm.product = res.data
                        vm.title = vm.product.type === '0' ? '课程' : '商品'
                        vm.productItem.push({label: "品牌：", value: vm.product.brand})
                        vm.productItem.push({label: "原价：", 
                            value: "￥"+vm.product.original_price.toString()})
                        vm.productItem.push({label: "会员价：", 
                            value: "￥"+vm.product.member_price.toString()})
                        if(vm.title === '商品'){
                            vm.productItem.push({label: "现货数量：", value: vm.product.quantity.toString()})
                        }
                        vm.productItem.push({label: "简介：", value: vm.product.description})
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
            getImgUrl(img_url) {
                return img_url && env.serverUrl + img_url
            },
            // 立即下单
            order() {
                // 跳转至订单确认页面
                this.$router.push({path: '/order/'+this.product.id});
            },
            back() {
                this.$router.replace({path: '/shop'});
            }
        },
        components: {
            Spinner,
            XHeader,
            XImg,
            Card,
            FormPreview,
            XButton
        }
    }
</script>

<style scoped lang="less">
    @import '../style/theme.less';
    @import '~vux/src/styles/1px.less';
    [v-cloak] {
        display: none;
    }
    .header {
        width: 100%;
        position: absolute;
        left: 0px;
        top: 0px;
        z-index: 100;
    }
    .content {
        padding-top: 46px;
    }
    /*加载动画水平垂直居中*/
    .loading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .ximg-demo {
        width: 100%;
        height: auto;
    }
    .ximg-error {
        background-color: #eeeeee;
    }
    .ximg-error:after {
        content: '加载失败';
        color: #000000;
    }
    .card-padding {
        padding: 15px;
    }
</style>

<style>
    .weui-form-preview__hd .weui-form-preview__value {
        font-size: 1.1em !important;
    }
    .weui-form-preview__value {
        text-align: left !important;
    }
</style>