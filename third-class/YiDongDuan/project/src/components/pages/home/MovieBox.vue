<template>
    <div class="movie-box">
         <div class="divide-line" v-if="urls.title=='即将上映'">
            <div class="up-soon">{{urls.title}}</div>
        </div>
        <ul>
            <li is="movie-item" v-for="movie in movies" :key="movie.id" :movie="movie" :urls="urls"></li>
        </ul>
       
        <div class="more-button">更多{{urls.title}}电影</div>

    </div>
</template>
<script>
 import MovieItem from './MovieItem.vue';
 import axios from 'axios';
    export default {
        name : "MovieBox",
        props:["urls"],
        data(){
            return{
                 movies:[],
                 page:1,
            }
        },
        components:{
            MovieItem
        },
         methods:{
            getMoves(){
                axios.get("http://localhost:8080/mz/v4/api/film/"+this.urls.url_type,{
                  params:{
                    page:this.page,
                    count:this.urls.count,
                    _t:Date.now()
                  }
                })
                .then((res)=>{
                   this.movies = res.data.data.films;
                });
            }
        },
        created() {
           this.getMoves();
        }
    };
</script>
<style scoped lang="scss">
    ul{
         padding-top:0.18rem;
    }
	.more-button{
        width: 1.6rem;
        height: .3rem;
        border: 1px solid #aaa;
        border-radius: 0.15rem;
        text-align: center;
        line-height: 0.30rem;
        font-size: 0.12rem;
        color: #616161;
        cursor: pointer;
        margin:0 auto;
        margin-top:0.18rem;
        margin-bottom:0.30rem;
    }
    .divide-line{
        height:0.11rem;
       	position: relative;
	    margin-top: 0.30rem;
	    margin-bottom: 0.30rem;
	    border-bottom: 1px solid #a8a8a8;
        .up-soon{
          width:0.65rem;
          height: 0.20rem;
          border-radius: 5px;
          margin:0 auto;
          font-size: 0.10rem;
          line-height: 0.20rem;
          text-align: center;
          color: #eee;
          background-color: #a7a7a7;
        }
    }
</style>
