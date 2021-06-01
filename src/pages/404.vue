<template>
    <div class="noll-box">
        <div class="flex-center">
            <el-button @click="$router.replace('/admin/home')" style="margin-top:370px" type="primary" round>返回主页</el-button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .noll-box{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01545d58d24b61a801219c77a15519.png%401280w_1l_2o_100sh.png&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624156401&t=28d6348d20bb59cffb8c71dd3c66e422');
        background-repeat: repeat-x;
        background-size: 100%;
        padding-top: 100px;
    }
</style>