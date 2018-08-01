import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const vuex = new Vuex.Store({
    state: {
        cart:[]
    },
    getters: {
        totalMoney(state){
            let money = 0;
           state.cart.forEach(curr => {
               money += curr.price * curr.amount;
            });
            return money.toFixed(2);
        },
        totalAmount(state){
            let num = 0;
            state.cart.forEach((curr)=>{
                num += curr.amount;
            });
            return num;
        }
    },
    mutations: {
        updateCart(state,newCart) {
            state.cart = newCart;
        }
    },
    actions: {
        init({commit}){
            let cart = JSON.parse(localStorage.cart ? localStorage.cart : "[]");
            commit("updateCart", cart);
        },
      addToCart(context,currPro){
       let cart = JSON.parse(localStorage.cart ? localStorage.cart : "[]");
       let has = cart.some((curr)=>{
            if(curr.id===currPro.id){
                curr.amount++;
                return true;
            }
       });
       if(!has){
            currPro.amount = 1;
            currPro.discount = 20;
            cart.push(currPro);
       }
            localStorage.cart = JSON.stringify(cart);
            context.commit("updateCart",cart);
    },
        increment({commit},currPro){
         let cart = JSON.parse(localStorage.cart ? localStorage.cart : "[]");
         let has = cart.some((curr) => {
             if (curr.id === currPro.id) {
                 curr.amount++;
                 return true;
             }
         });
         localStorage.cart = JSON.stringify(cart);
         commit("updateCart", cart)
    },
    decrement({ commit }, currPro) {
            let cart = JSON.parse(localStorage.cart ? localStorage.cart : "[]");
           cart =  cart.filter((curr) => {
                if (curr.id === currPro.id) {
                    curr.amount--;
                    if (curr.amount<0){
                        return false;
                    }
                    return true;
                } 
                return true;
            });
            localStorage.cart = JSON.stringify(cart);
            commit("updateCart", cart)
        },

}
})
export default vuex;