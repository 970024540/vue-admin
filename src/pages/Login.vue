<template>
    <div class="login-box">
        <el-card style="width:380px">
            <h2  slot="header" class="text-cneter margin-0">后台管理系统</h2>
            <div>
                <el-input v-model="account" placeholder="请输入帐号" class="padding-b-20" >
                    <template slot="prepend">
                        <i class="el-icon-user-solid"></i>
                    </template>
                </el-input>
                <el-input v-model="pass" placeholder="请输入密码" class="padding-b-20">
                    <template slot="prepend">
                        <i class="el-icon-lock"></i>
                    </template>
                </el-input>
                <el-button @click="loginBtn" style="width:100%" type="primary">登录</el-button>
                <p class="color-gray padding-tb-10">Tips : 用户名和密码随便填。</p>
            </div>
        </el-card>
    </div>
</template>
<script>
import Nprogress from 'nprogress';
export default {
    data(){
        return {
            account:'',
            pass:''
        }
    },
    created(){
        
    },
    methods:{
        loginBtn(){
            this.$router.push('/admin/home');
        }
    }
}
</script>
<style scoped>
    .login-box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        height: 100%;
        background-image: url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcz-video-photo.oss-cn-beijing.aliyuncs.com%2F20200418%2Fd8d6e80b1d50ad7552457f9f0ea1ca7f_00002.jpg&refer=http%3A%2F%2Fcz-video-photo.oss-cn-beijing.aliyuncs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624066388&t=3c376d6c2f1b5627b7c109b34ae9023f');
        background-repeat:no-repeat;
        background-size:100% ;
    }
</style>