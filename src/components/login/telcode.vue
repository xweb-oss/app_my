<!--
手机号验证码登录 
attr原生属性
state校验状态
value绑定表单输入的值
-->
<template>
    <div>
         <mt-field label="手机号" placeholder="请输入手机号"  v-model="tel" :attr = "{ minlength:11, maxlength:11}" ></mt-field>
         <mt-field label="请输入验证吗" v-model="telCode" disableClear>
            <mt-button type="default" size="small" @click.native="getCode" v-show="show" style="width:100px">获取验证码</mt-button>
            <mt-button type="default" size="small" @click.native="getCode" v-show="!show" disabled style="width:100px">{{count}}s</mt-button>
        </mt-field>
    </div>
</template>
<script>
import {regtel} from '@/util/reg.js';
import { showtoast} from '@/util/confirm.js'
export default {
    data(){
        return{
            tel:null,
            telCode:null,
            show:true,
            count: '',    
            timer: null, // 定义定时器
        }
    },
    methods:{
        // 获取短信验证码
        getCode(){
            if(!this.tel) return showtoast('手机号码为空');
            if(this.tel&&regtel(this.tel)) 
                this.setime(60,false,1000)
              else showtoast('请输入正确的手机号码');
        },
        setime(time,isshow,interval){
            var TIME_COUNT =time
            if(!this.timer){
                this.count =TIME_COUNT
                this.show =isshow
                this.timer= setInterval(() => {
                    if (this.count > 0 && this.count <= TIME_COUNT) {          
                        this.count--;         
                    } else {          
                        this.show = true;          
                        clearInterval(this.timer);          
                        this.timer = null;         
                    }        
                }, interval);
            }
        }
    }
}
</script>
