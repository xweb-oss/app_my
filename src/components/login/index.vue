<template>
    <div>
        <div align="center">
            <img src="@/assets/logo.png" alt="" style="width:50%;">
        </div>
        <div class="login">
            <user-name v-if="!isshow" ref="ch"></user-name>
            <!-- 当客户点击用短信验证码登录的时候，才为true -->
            <tel-code v-if="isshow"></tel-code>
            <mt-button type="primary" size="large" @click.native="login_app('/register')">登录</mt-button>
            <div class="mtLogin">
                <span  @click="userCode" v-if="!isshow">用短信验证码登录</span>
                <span  @click="getusername" v-else>帐号登录</span>
                <span  @click="forget">忘记密码</span>
            </div>
        </div>
    </div>
</template>
<script>
import TelCode from './telcode.vue' ;
import UserName from './username.vue' ;
import { showtoast,mesBox} from '@/util/confirm.js'
// import { MessageBox} from 'mint-ui';
export default {
    components:{
        TelCode,
        UserName
    },
    data(){
        return{
            isshow:false
        }
    },
    methods:{
           // 验证码登录
        userCode(){
            console.log(this.isshow)
            console.log(9999)
            this.isshow=true
        },
        // 帐号登录
        getusername(){
             this.isshow=false
        },
        // 忘记密码
        forget(){
            console.log(5555)
            showtoast('提示,请联系管理员找回密码','middle',3000)
        },
        // 登录
        login_app(path){
            // 子组件的方法
            this.$refs.ch.successLogin()    
            // 子组件的变量
            if(this.$refs.ch.username=="wczwcz"&&this.$refs.ch.password=="123456789") return
            mesBox("此账户还没有还没有注册,是否立即注册?",path,this)
        },
        
    }
}
</script>
<style lang='scss'>
.login{
    margin:0 20px;
    .mtLogin{
        display:flex;
        justify-content: space-between;
        span{
            color:rgb(136, 136, 240);
            margin:10px 0;
        }
    }
}
    
</style>
