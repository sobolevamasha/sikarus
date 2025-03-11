import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router);

const routes = [
    {
        path: '/', component: () => import("../layout/layout-main"),
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import("../views/HomePage"),
                //meta: {api: "HomeController"}
            },
            {
                path: '/about',
                name: 'about',
                component: () => import("../views/AboutView"),
                //meta: {api: "HomeController"}
            },
            

        ]
    }
];
export default routes;