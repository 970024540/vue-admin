<template>
  <el-container class="height-100">
    <el-aside :width="isCollapse ? '64px' : '200px'" class="bg-gray trans overflow-h">
      <div class="flex-start padding-tb-10" style="height: 60px; background: rgb(1 22 42)">
        <i class="font-5x padding-rl-20 color-white el-icon-grape"></i>
        <transition name="el-zoom-in-center">
          <div
            v-show="!isCollapse"
            class="font-3x transition-box color-white overflow-h"
          >
            vue-admin
          </div>
        </transition>
      </div>
      <el-menu
        :collapse="isCollapse"
        :unique-opened="true"
        router
        :default-active="$route.path"
        class="height-100 overflow-h aside-box"
        background-color="#002140"
        text-color="white"
        active-text-color="white"
      >
        <template v-for="(item,index) in routesData">
          <el-submenu v-if="item.children&&item.children.length>0" :key="index" :index="item.link">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{item.meta.title}}</span>
            </template>
            <el-menu-item v-for="(val,i) in item.children" :key="i" :index="val.link">
              {{val.meta.title}}
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-else :index="item.link" :key="index">
            <i :class="item.icon"></i>
            <span slot="title">{{item.meta.title}}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-aside>
    <el-container class="height-100">
      <el-header class="bg-white height-100 flex-space-between">
        <div class="flex-start-center">
          <i
            @click="isCollapse = !isCollapse"
            :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
            class="padding-tb-10 margin-r-10 font-4x"
          ></i>
          <breadcrumb-title></breadcrumb-title>
        </div>
        <div class="flex-center">
          <el-avatar :size="40" :src="avatar" />
          <el-dropdown class="margin-l-10" @command="handleCommand">
            <span class="el-dropdown-link">
              admin <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <route-crumbs></route-crumbs>

      <el-main>
        <el-card style="overflow-y:auto" class="height-100">
          <router-view></router-view>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import breadcrumbTitle from "./breadcrumbTitle";
import routeCrumbs from "./routeCrumbs";
export default {
  components:{breadcrumbTitle,routeCrumbs},
  data() {
    return {
      isCollapse: false,
      routesData:[],
      avatar:'https://avatars.githubusercontent.com/u/26833603?s=400&u=88f16ad0f75d59ff9e9b871c1b66819c514b0f2c&v=4',
    };
  },
  created(){
    this.routesData=this.$store.state.Login.asyncRoutes;
  },
  methods: {
    handleCommand(val){
      if(val=='logout') this.$router.push('/login')
    }
  },
};
</script>
<style lang="less" scoped>
.aside-box {
  border-right: 0;
}
.trans {
  transition: width 0.3s ease-in-out 0s;
}
.transition-box {
  height: 32px;
}
</style>
<style>
.aside-box:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu-item.is-active {
    background-color: #228ced!important;
}
</style>