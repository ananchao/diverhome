<template>
    <div>
        <x-header :left-options="{backText: '返回',showBack: true}"
            class="header">我的订单</x-header>
        <div class="content">
            <tab :line-width="1" v-model="index">
                <tab-item selected @on-item-click="tabClick">待验证订单 <i class="icon iconfont icon-shijian"></i></tab-item>
                <tab-item @on-item-click="tabClick">已验证订单 <i class="icon iconfont icon-weibiaoti3"></i></tab-item>
            </tab>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import { XHeader, Tab, TabItem } from 'vux'

    const routerMap = ['toVerifyOrder', 'verifiedOrder']

    export default {
        name: 'shop',
        data() {
            return {
                index: 0
            }
        },
        methods: {
            tabClick() {
                this.$router.replace({path: routerMap[this.index]});
            }
        },
        components: {
            XHeader,
            Tab, 
            TabItem
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
        height:44px;
    }
</style>