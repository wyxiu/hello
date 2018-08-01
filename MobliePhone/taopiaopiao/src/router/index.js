import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/pages/Home.vue";
import Cart from "../components/pages/Cart.vue";
Vue.use(VueRouter);
const router= new VueRouter({
    routes:[
        {
            path:"/",
            redirect: "/home"
        },{
            path:"/home",
            name:"home",
            component:Home
        },{
           path: "/cart",
            name: "cart",
            component: Cart
        }
    ]
});
export default router;