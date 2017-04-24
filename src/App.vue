<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';

body {
  background-color: #fbf9fe;
}

html, body{ margin:0px; height:100%; width: 100%; overflow-x: hidden;}

#app{
  position: relative;
  height:100%;
}

.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .2s;
	}
.router-fade-enter, .router-fade-leave-active {
    opacity: 0;
}
</style>
