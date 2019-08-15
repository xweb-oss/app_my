<template>
    <div>
        <mt-header title="填写订单">
            <router-link to="/detail" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    mounted(){
        console.log(this.$route.query)
    }
}
</script>
