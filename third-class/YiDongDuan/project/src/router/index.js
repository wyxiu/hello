import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from "../components/pages/home/Home.vue";
import Films from "../components/pages/films/Films.vue";
import Detail from "../components/pages/detail/Detail.vue";
import Buy from "../components/pages/buy/Buy.vue"
import notFound from "../components/common/notFound.vue";
import mine from "../components/pages/mine/mine.vue";
import mzcard from "../components/pages/mzcard/mzcard.vue";
import mall from "../components/pages/mall/mall.vue";
import cinema from "../components/pages/cinema/cinema.vue";
const router = new VueRouter({
    routes: [
        {
            path:"",
            redirect:"/home"
        },{
            path:"/home",
            component:Home
        },{
            path:"/films",
            component:Films
        }, {
            path: "/detail/:id",
            name:"detail",
            component: Detail,
            props: true
        },{
            path: "/buy/:id",
            name:"buy",
            component: Buy,
            props: true
        },
        {
            path: "/mine",
            component: mine
        },
        {
            path: "/cinema",
            component: cinema
        },
        {
            path: "/mzcard",
            component: mzcard
        },
        {
            path: "/404",
            component: notFound
        },
        {
            path: "/mall",
            component: mall
        },
        {
            path:"**",
            redirect: "/404"

        }
    ]
});
export default router;