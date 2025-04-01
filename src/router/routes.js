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
            {
                path: '/objects/object',
                name: 'object',
                component: () => import("../views/Object"),
            },
            {
                path: '/category',
                name: 'category',
                component: () => import("../views/Catalog/Category"),
            },
            {
                path: '/products',
                name: 'products',
                component: () => import("../views/Catalog/Products"),
            },
            {
                path: '/product',
                name: 'product',
                component: () => import("../views/Catalog/Product"),
            },
            {
                path: '/auth',
                name: 'auth',
                component: () => import("../views/Auth"),
            },
            {
                path: '/cabinet',
                name: 'cabinet',
                component: () => import("../views/Cabinet"),
            },
            

        ]
    }
];


export default routes;