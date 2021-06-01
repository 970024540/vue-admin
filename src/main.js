// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'nprogress/nprogress.css';  //css美化进度条
import Viser from 'viser-vue'


import Vue from 'vue';
import App from './App'
import router from './router'
import store from "./vuex";

import VueQuillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

Vue.use(VueQuillEditor, /* { default global options } */)

Vue.use(Viser); // 可视化插件 https://viserjs.gitee.io/

Vue.use(ElementUI,{ size: 'small', zIndex: 1000 });
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
