<template>
 <header>
    <nav class="toolbar">
        <div class="left">           
                <i class="fa fa-navicon" @click="isNavShow = !isNavShow"></i>
                <div class="left-title">卖座电影</div>          
        </div>
        <div class="right">       
             <div class="right-title" @click="chgaddr">
                成都
                <i class="fa fa-angle-down"></i>
             </div>
             <div class="right-icon">
                <i class="fa fa-user"></i> 
             </div>
                          
        </div>
   </nav>
   <nav-list  :isNavShow="isNavShow"  @close="isNavShow = false"></nav-list>
   </header>
</template>

<script>
    import NavList from './NavList.vue';
    import router from "../../../router/index.js"
    export default {
       	name : "Header",
        data(){
            return{
                isNavShow : false
            }
        },
        components:{
            NavList
        },
        methods: {
            closeNavList(){
                this.isNavShow = false;
            },
            chgaddr(){
                this.$router.push("/addr");
            }
        },
        created () {
            router.beforeEach((to, from, next) => {
               this.closeNavList();
               next();
                
            })
        }
    }
</script>
<style scoped lang="scss">
    .toolbar{
       background: #282828;
        width:auto;
        height:50px;
        line-height:50px;
	    z-index: 500;
         position: fixed;
         top: 0;
	    right: 0;
	    left: 0;
        .left{
            float:left;
            color: #fff;
		    font-size: 16px;
		    line-height: 50px;
            text-shadow: 0 -1px 0 rgba(0,0,0,0.8);
		    width: auto;
		    height: 50px;
		    margin: 0 auto;
            i{
                line-height: 50px;
                float: left;
                width: 48px;
                text-align: center;
                border-right: 1px solid #222;
                box-shadow: 1px 0 1px #363636;
                color: #999;
            }
            .left-title{
                padding: 0 1em;
			    float: left;
			    font-size: 14px;
			    color: #efefef;
                 text-overflow: ellipsis;
			    white-space: nowrap;
            }
        }
        .right{
           float: right;
	       color: #999;
             .right-title{
               float: left;
			    font-size: 14px;
			    padding: 0 6px;               
           } 
            .right-icon{            
                   float: left;
                    font-size: 16px;
                    width: 48px;
                    text-align: center;        
           }
           
        }
    }

</style>