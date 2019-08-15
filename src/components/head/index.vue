<template>
    <div class="head">
        <mt-header fixed :title="themTitle"></mt-header>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    data(){
        return{
            
        }

    },
     computed: {
        ...mapState({
          themTitle: state => state.themTitle,
        })
    },
    mounted(){
        console.log(this.themTitle)
    }
}
</script>

