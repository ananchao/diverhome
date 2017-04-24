<template>
    <div>
        <x-header :left-options="{backText: '返回',showBack: true}"
            class="header">公告</x-header>
        <div class="content">
            <div class="notice-list">
                <div v-for="item in noticeList" :key="item.id" 
                    class="notice-item">
                    <div class="item-right">
                        <i v-show="item.unread" class="icon iconfont icon-weidu"></i>
                        <h4 class="item-title">{{item.title}}</h4>
                        <p class="item-desc">{{item.content}}</p>
                    </div>
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
                noticeList: [],
                showLoading: false,
                loadingType: 'lines'
            }
        },
        mounted() {
            this.initData()
            this.updateReadNotice()
        },
        methods: {
            async initData() {
                let vm = this
                // 显示加载动画
                vm.showLoading = true
                // 获取公告
                api.get('getNoticeListPage', {startLimit: 0, pageSize: 999}).then((res) => {
                    if(res.status===1){
                        vm.noticeList = res.data.map((item,index) => {
                            item.unread = index < vm.$store.state.user.badge
                            return item
                        })
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
            // 更新用户已读公告
            updateReadNotice() {
                let vm = this
                api.post('updateReadNotice', 
                {member_id: localStorage.member_id}).then((res) => {
                    if(res.status===1){
                        // 更新badge
                        vm.$store.dispatch('getBadge', {member_id: localStorage.member_id})
                    }else{
                        vm.$vux.alert.show({
                            title: env.alertInfo,
                            content: res.message,
                            buttonText: '确定',
                            dialogTransition:'',
                            maskTransition:''
                        })
                    }
                }).catch(error => {
                    vm.$vux.alert.show({
                        title: env.alertInfo,
                        content: env.errorInfo,
                        buttonText: '确定',
                        dialogTransition:'',
                        maskTransition:''
                    })
                })
            }
        },
        components: {
            Spinner,
            XHeader
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
    }
    .loading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .notice-list {
        background-color: #FFFFFF;
        margin-top: 10px;
        position: relative;
        overflow: hidden;
        height: 100%;
    }
    .notice-list:before {
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
    .notice-item {
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
    .notice-item:before {
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
        float: right;
        color: #FC251C;
        font-size: 20px;
    }
</style>