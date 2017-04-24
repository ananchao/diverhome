<template>
    <div>
        <spinner :type="loadingType" v-show="showLoading" class="loading"></spinner>
    </div>
</template>

<script>
    import { Spinner } from 'vux'
    import api from '../api/api'
    export default {
        data() {
            return {
                showLoading: false,
                loadingType: 'lines'
            }
        },
        created() {
            this.getOpenId()
        },
        methods: {
            // 获取openid
            getOpenId() {
                // 显示加载动画
                this.showLoading = true
                let phone = sessionStorage.phone
                let code = location.href.split('code=')[1].split('&')[0]
                api.post('validopenid', { code, phone }).then(res => {
                    if (res.status == '1') {
                        // 成功
                        localStorage.customToken = res.data.customToken
                        localStorage.member_id = res.data.member_id
                        this.$router.replace({path: sessionStorage.toPullPath})
                    } else {
                        this.$router.replace({path: '/login'})
                    }
                    this.showLoading = false
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
            Spinner
        }
    }
</script>

<style scoped>
    .loading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>