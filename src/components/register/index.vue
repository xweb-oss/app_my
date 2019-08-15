<template>
    <div class="register">
        <div>
            <img src="@/assets/images/success.jpg" alt="" style="width:100%">
        </div>
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username.value" :attr="{ maxlength: 20 }" :state="username.state"></mt-field>
        <mt-field label="密码" placeholder="8-12个英文字母或数字" type="password" v-model="password.value"
        :attr="{ maxlength: 12 }" :state="password.state"></mt-field>
        <mt-field label="确认密码" placeholder="再次输入密码" type="password" v-model="surepassword.value" :attr="{ maxlength: 12 }" :state="surepassword.state"></mt-field>
        <mt-field label="邮箱" placeholder="请输入邮箱"  v-model="email.value" :state="email.state"></mt-field>
        <mt-button type="danger" size="large" @click.native="register_app">立即注册</mt-button>
        <span @click="goback('/')" class="mtSpan">已有帐号点击跳转登录页面</span>
    </div>
</template>
<script>
import {regpassword,validateEmail,regtel,regusername} from '@/util/reg.js';
import {showtoast} from '@/util/confirm.js';
import {listenKeyboard} from '@/util/phoneType.js';
export default {
    data(){
        return{
            password:{value:"",state:""},
            username:{value:"",state:""},
            surepassword:{value:"",state:""},
            email:{value:"",state:""},
        }
    },
     // 路由改变之前
    beforeRouteEnter(to, from, next) {
        next(vm => vm.resetForm());
    },
    mounted(){
         this.$nextTick(() => {
            const $inputs = document.querySelectorAll('.register input');
            for (let index = 0; index < $inputs.length; index++) {
                const element = $inputs[index];
                listenKeyboard(element);
            }
        });
    },
    methods:{
         resetForm() {
            const keys = ['password', 'username', 'surepassword', 'email'];
            for (let i = 0; i < keys.length; i++) {
                this[keys[i]].value = '';
                this[keys[i]].state = '';
            }
        },
        /** 
         * try {
                tryCode - 尝试执行代码块
            }
            catch(err) {
                catchCode - 捕获错误的代码块
            } 
            finally {
                finallyCode - 无论 try / catch 结果如何都会执行的代码块
            }
        */
        validation() {
            try {
                // 用户名
                if (regusername(this.username.value)) {
                    console.log(this.username.value)
                    this.username.state = 'success';
                } else {
                    this.username.state = 'error';
                    throw  new Error('用户名為4-20个英文字母或数字');
                }
                // 密码
                if (regpassword(this.password.value)) {
                    console.log(this.password.value)
                    this.password.state = 'success';
                } else {
                    this.password.state = 'error';
                    throw new Error('密码為8-12个英文,字母或数字');
                }
                // 确认密码
                if (this.surepassword.value === this.password.value) {
                    this.surepassword.state = 'success';
                } else {
                    this.surepassword.state = 'error';
                    throw new Error('二次输入密码不一样');
                }
                // 邮箱
                if (validateEmail(this.email.value)) {
                    this.email.state = 'success';
                } else {
                    this.email.state = 'error';
                    throw new Error('请输入正确的邮箱');
                }
                return true;
            } catch (error) {
                console.log(error.message)
                showtoast(error.message);
                return false;
            }
        },
        register_app(){
            console.log(6666)
            if(!this.validation()){
                return
            }
            // 验证通过后执行后面  ,注册成功直接进入首页

            this.$router.push('/home/house')

        },
        // 返回登录页面
        goback(path){
            this.$router.push(path);
        }
    }
}
</script>
<style scoped>
.mtSpan{
    color:rgb(136, 136, 240);
    height:30px;
    margin-left:10px;
    line-height: 30px;
}
</style>
