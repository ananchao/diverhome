<template>
    <div class="main">
        <view-box ref="viewBox" body-padding-bottom="53px">
            <transition name="router-fade" mode="out-in">
                <router-view></router-view>
            </transition>
            <tabbar v-model="selectedIndex" slot="bottom">
                <tabbar-item @on-item-click="handler('shop')">
                    <span slot="icon" class="icon iconfont icon-gouwuche"></span>
                    <span slot="label">商城</span>
                </tabbar-item>
                <tabbar-item @on-item-click="handler('user')">
                    <span slot="icon" class="icon iconfont icon-wodejuhuasuan"></span>
                    <span slot="label">我的</span>
                </tabbar-item>
                <tabbar-item @on-item-click="handler('notice')" :badge="$store.getters.badgeStr">
                    <span slot="icon" class="icon iconfont icon-shengyin"></span>
                    <span slot="label">公告</span>
                </tabbar-item>
            </tabbar>
        </view-box>
    </div>
</template>

<script>
    import api from '../api/api'
    import env from '../config/env'
    import {
        Tabbar,
        TabbarItem
    } from 'vux'
    import {
        ViewBox
    } from 'vux'
    // 由于style目录下有重名文件，所以这里还是要指定文件后缀
    import '../style/iconfont.css'
    
    export default {
        name: 'main',
        data() {
            return {
                // 选中tab的index
                selectedIndex: 0,
            }
        },
        mounted() {
            //this.initData()
        },
        created() {
            // 初始化的时候获截取路由的path字符串，改变对应tab的颜色
            const routePath = this.$store.state.route.path.split(/\//) && this.$store.state.route.path.split(/\//)[1];
            if (routePath === 'shop') {
                this.selectedIndex = 0
            } else if (routePath === 'user') {
                this.selectedIndex = 1
            } else if(routePath === 'notice') {
                this.selectedIndex = 2
            } else {
                this.selectedIndex = sessionStorage.tabIndex
            }
        },
        methods: {
            handler(routerName) {
                // 记录点击tab index
                sessionStorage.tabIndex = this.selectedIndex
                this.$router.replace({
                    path: "/" + routerName
                })
            }
        },
        components: {
            Tabbar,
            TabbarItem,
            ViewBox
        }
    }
</script>

<style scoped>
    .main {
        position: relative;
        height: 100%;
    }
    .tabber span {
        transition: color .2s ease;
    }
    
    .icon {
        font-size: 24px;
        line-height: 27px;
    }
    
    .router-fade-enter-active,
    .router-fade-leave-active {
        transition: opacity .2s;
    }
    
    .router-fade-enter,
    .router-fade-leave-active {
        opacity: 0;
    }
</style>