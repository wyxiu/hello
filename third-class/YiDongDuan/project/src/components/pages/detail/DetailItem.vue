<template>
    <div class="detail-item">
         <div class="img">
            <img :src="details.cover.origin">        
        </div>
        <div class="detail-context">
            <div class="title">影片简介</div>
            <div class="director">
                <span>导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>{{details.director}}</div>
            <div class="actor">
                <span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
                <span v-for="actor in details.actors" :key="actor.index">{{actor.name}}|</span></div>
            <div class="language">
                <span>地区语言：</span>{{details.language}}</div>
            <div class="style">
                <span>类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</span>{{details.category}}</div>
            <div class="time">
                <span>上映日期：{{details.premiereAt | time}}上映</span>
            </div>
            <div class="desc">{{details.synopsis}}</div>
            <div class="btn">
                <router-link 
                tag="button"
                :to="{name:'buy',params:{id:details.id}}">立即购票</router-link>
            </div>
            
        </div> 
    </div>
</template>
<script>
export default {
    name : "DetailItem",
    props: ["details"],
    data () {
        return {
            
        }
    },
    filters: {
        time(value){
            let date = new Date(value);
            return (date.getMonth() + 1) + "月" + date.getDate()+"日";
        }
    }
  
}
</script>
<style lang="scss" scoped>
     .detail-item{
        color:#333;
        .img{
            width: 375px;
            margin-bottom: 15px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .detail-context{
            .title{
                border-left: 16px solid RGB(228, 200, 156);
                font-size: 16px;
                padding-left: 4px;
               margin-bottom: 16px;
            }
            .director,.actor,.language,.time,.style{
                height: 18px;
                overflow: hidden;
                margin-bottom: 10px;
                padding-left: 20px;
                 font-size: 14px;
            }
            .desc{
                text-overflow: ellipsis;
                margin-bottom: 40px;
                padding-left: 20px;
                padding-right: 20px;
                font-size: 12px;
                line-height: 18px
            }
            .btn{
               display: flex;
               align-content: center;
               justify-content: center;
               button{
                    font-size: 14px;
                    min-width: 156px;
                    height: 36px;
                    line-height: 36px;
                    border: none;
                    background-color: #fe8233;
                    border-radius: 18px;
                    color: #fff;
               }
            }
        }
    }
</style>