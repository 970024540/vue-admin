import Vue from 'vue';
import VueRouter from 'vue-router';
import 'nprogress/nprogress.css';  //css美化进度条
import NProgress from "nprogress"; // 进度条
import getAsyncRoutes from "./utilsRouter";
import constRoutes from "./constRoutes";
import { Message } from "element-ui";
import Store from "../vuex";
// let {state,mutations} = loginState;

// 避免重复点击重定向报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);
NProgress.configure({ showSpinner: false });

const Routers = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes: constRoutes
})

export default Routers;

const whiteList = ['/login'];
var isGetRoutes;
Routers.beforeEach(async (to, from, next) => {
  NProgress.start()
  document.title = to.meta.title;
  if (!isGetRoutes) {
    // 获取用户token，用来判断当前用户是否登录
    const hasToken = true
    if (hasToken) {
      if (false) {
        NProgress.done()
      } else {
        //异步获取store中的路由
        // let route = await store.state.addRoutes;
        // const hasRouters = route && route.length > 0;
        //判断store中是否有路由，若有，进行下一步
        // if (hasRouters) {
        if (false) {
          next()
        } else {
          //store中没有路由，则需要获取获取异步路由，并进行格式化处理
          try {
            let accessRoutes = getAsyncRoutes;
            // accessRoutes.push({
            //   path:'*',
            //   redirect: "/"
            // })
            // 动态添加格式化过的路由
            Routers.options.routes.push(...accessRoutes);
            Routers.addRoute(...accessRoutes);
            isGetRoutes = true;
            next({ ...to, replace: true })
          } catch (error) {
            Message.error(error)
            isGetRoutes = true;
            next(`/login?redirect=${to.path}`)
          }
        }
      }
    } else {
      if (whiteList.indexOf(to.path) !== -1) {
        next()
      } else {
        next(`/login`)
      }
    }
  } else {
    if (to.matched.length ===0) { //未匹配到路由,则返回首页
      next('/');
    } else {
      next();
    }
  }
})


Routers.afterEach((to, from) => {
  Store.commit('updateCrumbs',
    {
      crumbs: {
        title: to.meta.title,
        path: to.path
      }
    })
  NProgress.done();
})