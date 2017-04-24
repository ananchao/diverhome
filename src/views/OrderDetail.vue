<template>
    <div>
        <x-header :left-options="{backText: '返回',showBack: true, preventGoBack: true}"
            class="header" @on-click-back="back">订单详情</x-header>
        <div class="content">
            <div class="paypage" v-cloak>
                <div class="div payinf">
                    <p><span class="i">订单编号:</span><span>{{order.order_no}}</span></p>
                    <p><span class="i">产品名称:</span><span>{{order.product&&order.product.title}}</span></p>
                    <p><span class="i">原价:</span><span>{{order.product&&order.product.original_price}}元</span></p>
                    <p><span class="i">订单价:</span><span>{{order.order_price}}元</span></p>
                    <p><span class="i">下单时间:</span><span>{{order.insert_time}}</span></p>
                    <p v-show="order.state == '1'"><span class="i">验证时间:</span><span>{{order.validate_time}}</span></p>
                </div>
                <div class="payoffline" v-show="order.state == '0'">
                    <p class="text">您已下单成功，验证码为：
                    <p class="idval">{{order.verification_code}}</p>
                    <p>请尽快前往潜水者之家验证订单，验证时请出示此验证码方可享受专属优惠，请妥善保管。</p>
                </div>
            </div>
        </div>
        <spinner :type="loadingType" v-show="showLoading" class="loading"></spinner>
    </div>
</template>

<script>
    import { Spinner, XHeader } from 'vux'
    import api from '../api/api'
    import auth from '../api/auth'
    import env from '../config/env'
    export default {
        data() {
            return {
                id: -1,
                order: {},
                showLoading: false,
                loadingType: 'lines'
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
                // 根据产品id获取订单详细信息
                api.get('getOrderInfo/' + vm.id).then((res) => {
                    if(res.status===1){
                        // 订单对象
                        vm.order = res.data
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
            back() {
                this.$router.replace({path: '/myOrder'});
            }
        },
        components: {
            Spinner,
            XHeader
        }
    }
</script>

<style scoped>
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
    .paypage .div{background: #FFF;}
    .paypage .tit{padding:10px 20px;font-size:14px;}
    .paypage .payinf p{line-height:20px;padding-left:100px;overflow: hidden;position: relative;border-bottom:1px solid #EEE;height: 40px;}
    .paypage .payinf p span{margin-right:10px;font-size:16px;display: block;float: left;line-height: 40px;}
    .paypage .payinf p span.i{color:#999;position: absolute;left:20px;top:0;width:80px;text-align: left;}
    .paypage .price{border-top:1px solid #EEE;}
    .paypage .payformtable{font-size:16px;background: #FFF;}
    .paypage .payformtable span#payok{text-align: center;font-size:26px;padding:10px 20px;display: block;line-height: 40px;color: #009933;width: 160px;margin: auto;height: 40px;padding-top:60px;}
    .paypage .payformtable span#payok img{margin-right: 15px;display: inline-block;float: left}
    .paypage .payformtable span#payok b{font-size:26px;font-weight: normal;float: left;}
    .payoffline {padding:20px;}
    .payoffline p{font-size:16px;}
    .payoffline p:nth-child(2),.payoffline p:nth-child(1){margin-bottom: 20px;}
    .payoffline p.tit{color:#009933;padding: 0;text-indent: 0;font-size: 18px;}
    .payoffline p.idval{font-size:18px;text-align: center;font-weight: bold;padding:20px 0;background: #FFFFFF;border-radius: 6px;}
    .payoffline p.text{color:#666666}
</style>