<template>
    <div class="swiper-container banner">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="banner in BannerList" :key="banner.id">
            <img :src="banner.imageUrl"/>
        </div>
    </div>
</div>
</template>
<script>
    import axios from 'axios';
    import Swiper from 'swiper';
    import "swiper/dist/css/swiper.min.css";
     export default {
        name: "Banner",
        data(){
            return{
                BannerList:[],
            }
        },
        methods:{
            getBanner(){
                axios.get("/static/mock/banner.json").then((res)=>{
                    this.BannerList = res.data;
                });
            }
        },
        created() {
             this.getBanner();
        },
        updated (){
           new Swiper('.swiper-container',{
               loop: true,
               autoplay:true
           })
        }
    }
</script>
<style scoped lang="scss">
    .banner{
        height:2rem;
        img{
            width:100%;
        }
    }
</style>
