<template>
  <div class="cart page">
     <mt-cell
        v-for="prod in cart"
        :key="prod.id"
        :title="prod.title"
        :label="'价格：' + prod.price + ',数量：'+ prod.amount +',折扣：'+prod.discount">
        
        <mt-button type="danger" size="small" @click="decrement(prod)">-</mt-button>
        <mt-button type="danger" size="small" @click="increment(prod)">+</mt-button>
      </mt-cell>
      <div class="total">
          总共{{totalAmount}}件商品，一共{{totalMoney}}元
      </div>
  </div>
</template>
<script>
import {mapState,mapGetters} from "vuex"
    export default{
      name:"Cart",
      computed: {
          ...mapState(["cart"]),
          ...mapGetters(["totalMoney","totalAmount"])
      },
      methods: {
          increment(prod){
            this.$store.dispatch("increment",prod);
          },
          decrement(prod){
            this.$store.dispatch("decrement",prod)
          }
      }
    }
</script>
<style lang="scss" scoped>
    .total{
      font-size: 14px;
      margin-top: 20px;
      float: right;
    }
</style>
