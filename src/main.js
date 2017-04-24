// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import store from './store'
import App from './App'

FastClick.attach(document.body);

import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'

Vue.use(Vuex)
let i18nStore = new Vuex.Store({
  modules: {
    i18n: vuexI18n.store
  }
})

Vue.use(vuexI18n.plugin, i18nStore);

import { sync } from 'vuex-router-sync'
sync(store, router)

import  { LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin)

import  { AlertPlugin } from 'vux'
Vue.use(AlertPlugin)

import { ConfirmPlugin } from 'vux'
Vue.use(ConfirmPlugin)


/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
