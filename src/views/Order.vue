<template>
    <div v-cloak>
        <x-header :left-options="{backText: '返回',showBack: true}"
            class="header">确认订单</x-header>
        <div class="content">
            <!-- 普通会员才需要完善信息 -->
            <group title="完善个人信息，即可享受会员优惠" v-show="!isVip">
                <x-input title="姓名" v-model="name" placeholder="请填写真实姓名"></x-input>
                <x-input title="年龄" type="number" v-model="age" placeholder="请填写年龄"></x-input>
                <x-input title="邮箱" is-type="email" v-model="email" placeholder="请填写邮箱"></x-input>
                <selector placeholder="请选择性别" v-model="sex" title="性别" name="sex" :options="sexList"></selector>
                <selector placeholder="请选择潜水资质" v-model="qualification" title="潜水资质" name="qualification" :options="qualificationList"></selector>
                <selector placeholder="请选择所在区域" v-model="area_code" title="区域" name="area_code" :options="areaCodeList"></selector>
            </group>
            <group>
                <form-preview :header-label="'实付金额：'" 
                    :header-value="'¥'+product.member_price" 
                    :body-items="productItem" :footer-buttons="button">
                </form-preview>
            </group>
        </div>
        <spinner :type="loadingType" v-show="showLoading" class="loading"></spinner>
    </div>
</template>

<script>
    import { Spinner, XHeader, FormPreview, XInput, Group, Radio,Selector } from 'vux'
    import api from '../api/api'
    import env from '../config/env'
    export default {
        data() {
            return {
                id: -1,
                product: {},
                productItem: [],
                name:"",
                age:0,
                email:'',
                qualification: '',
                qualificationList: [
                    {key: '0', value: '自由潜水员'}, 
                    {key: '1', value: '水肺潜水员'}, 
                    {key: '2', value: '非潜水员'}],
                sexList:  [{
                    key: '0',
                    value: '男'
                }, {
                    key: '1',
                    value: '女'
                }],
                sex:'',
                areaCodeList:[
                    {key: '01', value: '鼓楼区'},
                    {key: '02', value: '玄武区'},
                    {key: '03', value: '建邺区'},
                    {key: '04', value: '秦淮区'},
                    {key: '05', value: '栖霞区'},
                    {key: '06', value: '江宁区'},
                    {key: '07', value: '雨花台区'},
                    {key: '08', value: '浦口区'},
                    {key: '09', value: '六合区'},
                    {key: '10', value: '溧水区'},
                    {key: '11', value: '高淳区'}],
                area_code: '',
                button:[{
                    style: 'primary',
                    text: '立即下单',
                    onButtonClick: (name) => {
                        // 下单前进行二次确认
                        let vm = this
                        // 不是vip会员需要验证表单
                        if((!this.isVip && this.validInput()) || this.isVip) {
                            this.$vux.confirm.show({
                                title: env.alertInfo,
                                content: '确定下单吗？',
                                hideOnBlur: true,
                                confirmText: '确定',
                                cancelText: '取消',
                                maskTransition: '',
                                dialogTransition: '',
                                onConfirm () {
                                    vm.order()
                                }
                            })
                        }
                    }
                }],
                showLoading: false,
                loadingType: 'lines',
            }
        },
        computed: {
            isVip() {
                return this.$store.state.user.memberShip.membership_level == '1'
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
                let vm = this
                vm.showLoading = true
                api.post('addWechatOrder', 
                { product_id: this.id, 
                order_price: this.product.member_price, 
                member_id: localStorage.member_id,
                name: this.name,
                age: this.age,
                email: this.email,
                qualification: this.qualification,
                sex: this.sex,
                area_code: this.area_code,
                membership_level: this.$store.state.user.memberShip.membership_level
                }).then(res => {
                    vm.showLoading = false
                    if (res.status == '1') {
                        // 成功
                        if (!vm.isVip) {
                            // 更新store中的用户信息
                            vm.$store.dispatch('initUser', {member_id: localStorage.member_id}) 
                        }
                        vm.$vux.alert.show({
                            title: env.alertInfo,
                            content: res.message,
                            buttonText: '确定',
                            dialogTransition:'',
                            maskTransition:'',
                            onHide () {
                                // 跳转至我的订单页面
                                vm.$router.replace({path: '/orderDetail/'+ res.data.id});
                            }
                        })
                    } else {
                        // 失败
                        vm.$vux.alert.show({
                            title: env.alertInfo,
                            content: res.message,
                            buttonText: '确定',
                            dialogTransition:'',
                            maskTransition:''
                        })
                    }
                }).catch(error => {
                    vm.showLoading = false
                    vm.$vux.alert.show({
                        title: env.alertInfo,
                        content: env.errorInfo,
                        buttonText: '确定',
                        dialogTransition:'',
                        maskTransition:''
                    })
                })
            },
            // 必填项验证
            validInput(){
                if (!this.name) {
                    this.$vux.alert.show({
                        title: env.alertInfo,
                        content: '请填写真实姓名',
                        buttonText: '确定',
                        dialogTransition:'',
                        maskTransition:''
                    })
                    return false
                }
                if (!this.age) {
                    this.$vux.alert.show({
                        title: env.alertInfo,
                        content: '请填写年龄',
                        buttonText: '确定',
                        dialogTransition:'',
                        maskTransition:''
                    })
                    return false
                }
                if (!this.email) {
                    this.$vux.alert.show({
                        title: env.alertInfo,
                        content: '请填写邮箱',
                        buttonText: '确定',
                        dialogTransition:'',
                        maskTransition:''
                    })
                    return false
                }
                if (!this.sex) {
                    this.$vux.alert.show({
                        title: env.alertInfo,
                        content: '请选择性别',
                        buttonText: '确定',
                        dialogTransition:'',
                        maskTransition:''
                    })
                    return false
                }
                if (!this.qualification) {
                    this.$vux.alert.show({
                        title: env.alertInfo,
                        content: '请选择潜水资质',
                        buttonText: '确定',
                        dialogTransition:'',
                        maskTransition:''
                    })
                    return false
                }
                if (!this.area_code) {
                    this.$vux.alert.show({
                        title: env.alertInfo,
                        content: '请选择所在区域',
                        buttonText: '确定',
                        dialogTransition:'',
                        maskTransition:''
                    })
                    return false
                }
                return true
            },
            back() {
                this.$router.replace({path: '/shop'});
            }
        },
        components: {
            Spinner,
            XHeader,
            FormPreview,
            XInput,
            Group,
            Radio,
            Selector
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
    .loading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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