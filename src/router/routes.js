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
            },
            {
                path: '/about',
                name: 'about',
                component: () => import("../views/About"),
            },
            

        ]
    }
];
export default routes;