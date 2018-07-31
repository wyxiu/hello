<template>
    <div class="home page">
        <banner></banner>
        <movie-box v-for="urls in types" :urls="urls" :key="urls.id"></movie-box>
    </div>

</template>
<script>
import Banner from './Banner.vue';
import MovieBox from './MovieBox.vue';
    export default {
        name : "Home",
        data(){
            return{
                types:[
                    {id:1,url_type:"now-playing",count:5,name:"playing",title:"热映"},
                    {id:2,url_type:"coming-soon",count:3,name:"coming",title:"即将上映"}
                    ]
            }
        },
        components:{
            Banner,
            MovieBox
        }
    };
</script>
<style scoped lang="scss">
	
</style>
