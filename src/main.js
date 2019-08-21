// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import store from '@/vuex/store'

import App from './App'
import router from './router'
import './assets/index.scss' // 样式的引入
import './style/index.scss'

import MintUi from "mint-ui" 
Vue.use(MintUi)     //样式的全局声明
import vueAwesomeSwiper from "vue-awesome-swiper";
Vue.use(vueAwesomeSwiper)//全局使用
Vue.config.productionTip = false

 // v-click-outside-x 
import * as vClickOutside from 'v-click-outside-x';
Vue.use(vClickOutside);

// 全局定义过滤器
Vue.filter('capitalize', function (value) {
  // debugger;
  if (!value) return ''
  value = value.toString()
  console.log(value.charAt(0))  // h   
  console.log(value.charAt(0).toUpperCase()) // H
  console.log(value.slice(1)) // ello  截取第一个，必须要用变量接收  会改变源字符串
  return value.charAt(0).toUpperCase() + value.slice(1)
})

// 全局自定义指令
Vue.directive('permission',{
    bind: function (el, binding, vnode) {
      console.log(el)
      console.log(binding)
      console.log(vnode)
      let hasPerm = false
      if (!binding.value) {   
        hasPerm = true
      } else {
        hasPerm = store.getters.permissions.indexOf(binding.value) !== -1
      }
      if (!hasPerm) {
         
        // replace HTMLElement with comment node
        const comment = document.createComment(' ');
        Object.defineProperty(comment, 'setAttribute', {
          value: () => undefined,
        });
        vnode.elm = comment;
        vnode.text = ' ';
        vnode.isComment = true;
        vnode.context = undefined;
        vnode.tag = undefined;
        vnode.data.directives = undefined;

        if (vnode.componentInstance) {
          vnode.componentInstance.$el = comment;
        }
        if (el.parentNode) {
          el.parentNode.replaceChild(comment, el);
        }
      }
    }
  })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})











