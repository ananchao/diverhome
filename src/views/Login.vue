<template>
    <div>
        <x-header :left-options="{backText: '返回',showBack: true}"
            class="header">登录</x-header>
        <div class="content">
            <group>
                <x-input title="手机号码" v-model="phone" placeholder="请输入手机号码" 
                    keyboard="number" is-type="china-mobile"></x-input>
                <x-input title="验证码" v-model="inputVerifyCode" class="weui-cell_vcode">
                    <img slot="right" @click="getVerifyCode" class="weui-vcode-img" 
                        :src="img_url">
                </x-input>
            </group>
            <div style="padding:40px 15px">
                <x-button @click.native="login" type="primary">登 录</x-button>
            </div>
        </div>
    </div>
</template>

<script>
    import { XHeader, XInput, XButton, Group } from 'vux'
    import api from '../api/api'
    import auth from '../api/auth'
    import env from '../config/env'
    export default {
        data() {
            return {
                // 从服务端获取的验证码
                verifyCode: '',
                img_url: null,
                phone: '',
                // 用户输入的验证码
                inputVerifyCode: '',
                showLoading: false
            }
        },
        mounted() {
            this.getVerifyCode()
        },
        methods: {
            // 获取验证码
            getVerifyCode() {
                let vm = this
                // 获取图片验证码
                api.get('getWeChatVerifyCode').then((res) => {
                    if(res.status===1){
                        vm.verifyCode = res.data.verifyCode
                        vm.img_url = env.serverUrl + res.data.img_url
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
            },
            // 登录
            login() {
                if (!this.phone) {
                    this.$vux.alert.show({
                        title: env.alertInfo,
                        content: '请输入手机号',
                        buttonText: '确定',
                        dialogTransition:'',
                        maskTransition:''
                    })
                    return
                }
                if (!this.inputVerifyCode) {
                    this.$vux.alert.show({
                        title: env.alertInfo,
                        content: '请输入验证码',
                        buttonText: '确定',
                        dialogTransition:'',
                        maskTransition:''
                    })
                    return
                }
                if (this.inputVerifyCode.toLowerCase() != this.verifyCode.toLowerCase()) {
                    this.$vux.alert.show({
                        title: env.alertInfo,
                        content: '验证码输入有误',
                        buttonText: '确定',
                        dialogTransition:'',
                        maskTransition:''
                    })
                    return
                }
                // 执行登录
                auth.login(this.phone, () => {
                        // 登录成功，跳转至之前访问的页面
                        this.$router.replace(this.$route.query.redirect || '/')
                    }, 
                    () => {
                        // 登录失败
                        this.$vux.alert.show({
                            title: '登录失败',
                            content: '手机号错误',
                            buttonText: '确定',
                            dialogTransition:'',
                            maskTransition:''
                        })
                        // 刷新验证码
                        this.getVerifyCode()
                    })
            }
        },
        components: {
            XHeader, 
            XInput, 
            XButton, 
            Group
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
    .register {
        float: right;
        font-size: 0.9em;
        padding: 5px 15px;
        color: #FF9900;
    }
</style>