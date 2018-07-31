<template>
    <ul class="films-nav">
            <li class="navs" v-for="nav in navs" :key="nav.id" :nav="nav"
            :class="{chooseing: type===nav.type}"
            @click="$emit('change',nav.type)">{{nav.title}}</li>
          
    </ul>
</template>
<script >

    export default {
        name:"FilmsNav",
         props: ["type"],
         data(){
         return{
            navs:[
                {id:1,title:"正在热映",type:"now-playing"},
                {id:2,title:"即将上映",type:"coming-soon"}
            ]
        }
     }
    }
   
    
</script>
<style lang="scss" scoped>
     .films-nav{
           height: 0.46rem;
            margin: 0 auto;
            margin-left: 0.15rem;
            margin-right: 15px;
            border-bottom: solid #fe6e00 1px;
           .navs{
               float: left;
                width: 50%;
                height: 100%;
                text-align: center;
                font-size: 0.15rem;
                line-height: 0.46rem;
                color: #6a6a6a;
                cursor: pointer;   
           
         &.chooseing{
                
                border-bottom:3px solid #fe6e00;
                color:#fe6e00;
            }  
        }  

        }
   
</style>


