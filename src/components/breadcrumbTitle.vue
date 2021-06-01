<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <template v-for="(item,i) in routesChange">
        <el-breadcrumb-item v-if="routesChange.length!=1" :key="i">{{item.meta.title}}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>
<script>
export default {
    computed:{
        routesChange(){
            let metcheds=Object.assign([],this.$route.matched);
            metcheds.shift();
            return metcheds
        }
    }
}
</script>