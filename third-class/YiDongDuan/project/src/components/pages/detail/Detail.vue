<template>
    <div class="detail page">
        <detail-header></detail-header>
        <detail-item :details="details"></detail-item>
      
        
    </div>
</template>
<script>
 import DetailHeader from "./DetailHeader.vue";
 import DetailItem from "./DetailItem.vue";
 import axios from "axios";
export default {
    name : "Detail",
    props: ["id"],
    data () {
        return {
            details:[],
        }
    },
    components: {
        DetailHeader,
        DetailItem
    },
    
    methods: {
    getDtails(){
         axios.get("/mz/v4/api/film/" + this.id,{
             params:{
                 _t:Date.now()
             }
        }).then(res=>{
            this.details = res.data.data.film;
            console.log(this.details);
        });

    }
       
    },
    created () {
        this.getDtails();
    }
}
</script>
<style lang="scss" scoped>
   
</style>


