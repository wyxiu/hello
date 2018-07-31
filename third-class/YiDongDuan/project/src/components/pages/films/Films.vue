<template>
    <div class="films page">
        <films-nav :type = "type" @change="change"></films-nav>
        <films-box :type = "type"></films-box>
        
    </div>
</template>
<script>
import FilmsNav from './FilmsNav.vue';
import FilmsBox from './FilmsBox.vue';
export default {
    name:"Films",  
    data () {
        return {
            type:"now-playing",
        }
    },
    components:{
        FilmsNav,
        FilmsBox
    },
    methods: {
        change(type){
            this.type = type;
        }
    }
   
}
</script>
<style scoped lang="scss">   
       .films{
         background-color: #f9f9f9;
       }
  
</style>


