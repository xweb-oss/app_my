<template>
    <div>
        <mt-header :title="menu_tit">
            <router-link to="/detail" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div>
            {{msg}}
        </div>
        <div>
            
        </div>
    </div>

</template>

<script>
export default {
    data(){
        return{
            menu_tit:"",
            msg:""
           
        }
    },
    methods:{
        // await只会等promise
        async promis(){
            this.count = await this.settime()
            console.log(this.count)
        },

        settime(){
            this.msg ='count等页面加载完成后才执行哦'
            console.log('count等我执行完了才会去执行哦，')
            return new Promise((resolve,reject) =>{
                setTimeout(()=>{
                    resolve('zhao')
                },1500)
            })
        }
    },
    mounted(){
        this.promis()
        this.menu_tit = this.$route.query.tit
    }
}
</script>
