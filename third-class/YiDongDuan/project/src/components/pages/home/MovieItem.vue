<template>
   <li class="movie-item">
        <div class="item-img">
            <img :src="movie.cover.origin" />
        </div>
        <div class="movie-contxt" :class="urls.name">
         <div class="item-left">
            <div class="item-left-title">{{movie.name}}</div>
            <div class="item-left-desc" v-if="urls.id=='1'">{{movie.cinemaCount}}家影院上映{{movie.watchCount}}人购票</div>
         </div>
         <div class="item-right">
             <div class="item-right-score" v-if="urls.id=='1'">{{movie.grade}}</div>
             <div class="item-right-data" v-else>{{movie.premiereAt | time}}上映</div>
         </div>
         </div>
   </li>

</template>
<script>

    export default {
        name : "MovieItem",
        props:["urls","movie"],
        filters:{
            time(value) {
				let date = new Date(value);
				return date.getMonth() + 1 + "月" + date.getDate() + "日";
			}
        }

    }
</script>
<style scoped lang="scss">
	.movie-item{
        height:2.45rem;
        border:1px solide #e5e5e5;
        padding:0 0.18rem;
        cursor: pointer;
        margin-bottom:0.18rem;
        .item-img{
          background: url("/static/images/loading.png") no-repeat center center;
          background-size: 100% 100%;
           img{
            height:1.85rem;
            width:100%;
          }
        }

       .movie-contxt{
             height:0.50rem;
             background:#fff;
            .item-left{
            padding-top:6px;
            padding-left:0.15rem;
            font-size:0.14rem;
            float:left;

            .item-left-title{
               line-height:0.18rem;
               color:#333;
            }
            .item-left-desc{
                color:#9a9a9a;
                 line-height:0.18rem;
            }
         }
        
        .item-right{
            float:right;
            height:0.50rem;
            line-height:0.50rem;
            color:#f78360;
            font-size:0.14rem;
            margin-right:0.18rem;

        }
    
}
     
       .coming{
            height:0.50rem;
             background:#fff;
            .item-left{
            padding-top:6px;
            padding-left:0.15rem;
            font-size:0.14rem;
            float:left;
            .item-left-title{
               line-height:0.18rem;
               color:#333;
               padding-top: 8px;
            }
        }
        .item-right{
            float:right;
            height:0.50rem;
            line-height:0.50rem;
            color:#f78360;
            font-size:0.14rem;
            margin-right:0.18rem;

        }
       }
    }
</style>
