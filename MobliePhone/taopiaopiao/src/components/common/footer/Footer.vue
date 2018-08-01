<template>
  <div class="footer">
     <mt-tabbar class="tabbox">
      <mt-tab-item class="context"
        v-for="nav in navs"
        :key="nav.id">
        <router-link
          tag="li"
          :to="{name: nav.name}">
          <i class="fa" :class="['fa-' + nav.icon]"></i>
          {{nav.title}}
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
    export default {
      name:"Footer",
      data () {
        return {
           navs : [
        {id:1, title:"首页", name:"home", icon: "home"},
        {id:2, title:"购物车", name:"cart", icon: "shopping-cart"}
      ]
        }
      }
    }
</script>
<style lang="scss" scoped>
    .footer{
      .tabbox{
         height: 40px;
         .context{
            display: flex;
            justify-content: space-around;
            align-items: center;
            li{
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              i{
                font-size: 18px;
              }
              }
         }
         
      }
    }
</style>

