<template>
    <div>
        <x-header :left-options="{backText: '返回',showBack: true}"
            class="header">个人信息</x-header>
        <div class="content">
            <group label-margin-right="2em" label-align="right">
                <cell v-show="memberShip.membership_level == '1'" title="姓名" :value="memberShip.name" value-align="left"></cell>
                <cell v-show="memberShip.membership_level == '1'" title="年龄" :value="memberShip.age" value-align="left"></cell>
                <cell title="手机" :value="memberShip.phone" value-align="left"></cell>
                <cell v-show="memberShip.membership_level == '1'" title="邮箱" :value="memberShip.email" value-align="left"></cell>
                <cell v-show="memberShip.membership_level == '1'" title="性别" :value="sex" value-align="left"></cell>
                <cell v-show="memberShip.membership_level == '1'" title="地区" :value="memberShip.area_name" value-align="left"></cell>
                <cell v-show="memberShip.membership_level == '1'" title="注册时间" :value="memberShip.insert_time" value-align="left"></cell>
            </group>
        </div>
        <spinner :type="loadingType" v-show="showLoading" class="loading"></spinner>
    </div>
</template>

<script>
    import { Spinner, XHeader, Group, Cell } from 'vux'
    import api from '../api/api'
    import auth from '../api/auth'
    import env from '../config/env'
    export default {
        data() {
            return {
                memberShip: {},
                sex: '',
                showLoading: false,
                loadingType: 'lines'
            }
        },
        mounted() {
            this.initData()
        },
        methods: {
            async initData() {
                let vm = this
                // 显示加载动画
                vm.showLoading = true
                // 根据产品id获取用户详细信息
                api.get('getMemberById/' + localStorage.member_id).then((res) => {
                    if(res.status===1){
                        // 用户对象
                        vm.memberShip = res.data
                        vm.sex = res.data.sex == '0' ? '男' : '女'
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
            }
        },
        components: {
            Spinner,
            XHeader, 
            Group,
            Cell
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
</style>