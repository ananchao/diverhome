<template>
    <div>
        <swiper loop auto :list="bannerList"></swiper>
        <div style="height:44px;">
            <sticky scroll-box="vux_view_box_body" :check-sticky-support="false">
                <tab :line-width="1" v-model="index">
                    <tab-item selected @on-item-click="tabClick">热门课程 <i class="icon iconfont icon-remaichanpin"></i></tab-item>
                    <tab-item @on-item-click="tabClick">特惠商品 <i class="icon iconfont icon-zhekou"></i></tab-item>
                </tab>
            </sticky>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import { Swiper, SwiperItem, Tab, TabItem, Sticky } from 'vux'

    const routerMap = ['course', 'goods']

    const bannerList = [{
        img: 'https://static.vux.li/demo/1.jpg',
    }, {
        img: 'https://static.vux.li/demo/2.jpg',
    }, {
        img: 'https://static.vux.li/demo/3.jpg',
    }]

    export default {
        name: 'shop',
        data() {
            return {
                bannerList,
                index: 0
            }
        },
        methods: {
            tabClick() {
                this.$router.replace({path: routerMap[this.index]});
            }
        },
        components: {
            Swiper,
            SwiperItem,
            Tab, 
            TabItem, 
            Sticky
        }
    }
</script>

<style scoped>
</style>