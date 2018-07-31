<template>
    <router-link class="films-item" 
    tag="li"
    :to="{name:'detail',params:{id:film.id}}" :film="film">
       <div class="left-img">
            <img :src="film.poster.origin">
       </div>
       <div class="right-context" >
            <div class="title">
               <span class="title-left">{{film.name}}</span> 
                <span class="title-right" v-if="type=='now-playing'">{{film.grade}}&nbsp;&nbsp;<i class="fa fa-angle-right"></i></span>
            </div>
             <div class="desc">{{film.intro}}</div>
              <div class="score" v-if="type=='now-playing'">
                <span class="left">{{film.cinemaCount}}家影院上映</span>
                 <span class="right">{{film.watchCount}}人购票 </span>
              </div>
              <div class="score" v-else style="color:#fc7103;">
            <span class="left">{{film.premiereAt | time}}上映</span> 
              </div> 
       </div>
    </router-link>
</template>
<script>
export default {
   name:"FilmsItem",
   props: ["film","type"],
   filters:{
       time(value){
           let date = new Date(value);
           return (date.getMonth()+1)+"月" +date.getDate()+"日";
       }
   }
}
</script>
<style scoped lang="scss">
    .films-item{
        height:125px;
        width: 100%;
        padding: 20px 0;
        border-bottom: dashed 1px #c9c9c9;
        cursor: pointer;
        box-sizing: border-box;
        .left-img{
            float:left;
            width: 60px;
            img{
                 vertical-align: middle;
                 width:100%;
                 height:100%;
            }
        }
    .right-context{
        float:left;
        width:75%;
        margin-left:15px;
        .title{
            height:32px;
            .title-left{
                display: inline-block;
                width: 200px;
                font-size:16px;
                line-height: 32px;
                color: #000;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .title-right{
                float: right;
                font-size: 16px;
                line-height:32px;
                color: #fc7103;
                i{
                    color: #8e8e8e;
                }
            }
            
        }
        .desc{
            height: 24px;
            line-height: 24px;
            color: #8e8e8e;
            font-size: 12px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 100%;
            display: inline-block;
        }
    .score{
        line-height: 24px;
        color: #8e8e8e;
        font-size: 12px;
        .right{
            margin-left:23px;
        }
        
    }
    }
   

 }
    
</style>