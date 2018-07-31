<template>
    <div class="films-box">
        <ul class="films-contxt"
            v-infinite-scroll="loadMore"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="10"
            infinite-scroll-immediate-check="false">
            <li is="films-item" v-for="film in films"
            :key="film.id"
            :film="film"
            :type="type"
            ></li>
        </ul>
    </div>
</template>
<script >
import FilmsItem from "./FilmsItem.vue";
import axios from "axios";
import {Toast} from "mint-ui";
    export default {
        name:"FilmsBox",
        props: ["type"],
        components: {
            FilmsItem
        },
        data () {
            return {
                 page:1,
                count:7,
                films:[],
                loading:false
            }
        },
        methods:{
            getFilms(){
                var toast = Toast({
					  message: 'Loading...',
					  duration: -1,
					  iconClass: 'fa fa-spinner fa-spin'
				});

                 axios.get("/mz/v4/api/film/" + this.type, {
					params : {
						page:this.page,
						count:this.count
					}
				}).then(res=>{
                    this.films = this.films.concat(res.data.data.films);
                    console.log(this.films)
                    let{current,total}=res.data.data.page;
                    if(current===total){
                        return;
                        toast.close();
                    }
                    toast.close();
                    
                    this.loading = false;
                    this.page++;
                    console.log(this.page);
					
				});
            },
            loadMore() {
              this.loading = true;  
               this.getFilms();      
            }  
        },
       
        watch: {
            type:{
                immediate:true,
                handler(val){
                this.page = 1;
                this.loading=false;
                this.films=[];
                this.getFilms(); 
                }
                
            }
        }
    }
    
</script>
<style lang="scss" scoped>
     .films-box{
         padding-left: 0.15rem;
         padding-right: 0.15rem;
    }
</style>