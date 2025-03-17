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
            {
                path: '/contacts',
                name: 'contacts',
                component: () => import("../views/Contacts"),
            },
            {
                path: '/objects',
                name: 'objects',
                component: () => import("../views/Objects"),
            },
            

        ]
    }
];


export default routes;