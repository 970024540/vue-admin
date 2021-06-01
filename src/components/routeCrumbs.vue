<template>
  <div class="crumbs-box bg-white border-1px-t border-1px-b">
    <el-tag
        @click="$router.push(item.path)"
        @close="delCrumbs(item.path)"
      v-for="item in getCrumbs"
      class="margin-r-5"
      style="cursor: pointer"
      :key="item.title"
      :closable="item.title != '首页'"
      effect="plain"
      type="info"
    >
      <i
        :class="$route.path == item.path ? 'bg-blue' : 'bg-light-gray'"
        class="circle"
      ></i
      ><span>{{ item.title }}</span>
    </el-tag>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getCrumbs"]),
  },
  methods:{
      ...mapMutations(['mapDelCrumbs']),
      delCrumbs(path){
          this.mapDelCrumbs({path});
          if(this.$route.path==path){
              this.$router.push(this.getCrumbs[this.getCrumbs.length-1].path)
          }
      }
  }
};
</script>
<style lang="less" scoped>
.margin-r-0 {
  margin-right: 0px;
}
.circle {
  width: 10px;
  height: 10px;
  display: inline-block;
  border-radius: 50%;
  margin-right: 5px;
}
</style>
<style lang="less">
.crumbs-box {
  padding: 2px 10px;
}
</style>