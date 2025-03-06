import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store';
import routes from '@/router/routes';
//import {mergeObjects} from "@/utils/utils";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

const scrollTo = (hash = null, offset = 0, behavior = 'smooth') => {
    let top = 0;

    if (hash) {
        hash = hash.match(/^.+/) ? hash.substring(1) : hash;
        const el = document.getElementById(hash);
        //console.log('Rect:', el.getBoundingClientRect());
        if (el) top = el.getBoundingClientRect().top + window.scrollY + offset;
        else {
            console.warn("Scroll to element not found: " + hash);
            return;
        }
    }

    window.scrollTo({
        behavior,
        left: 0,
        top
    });
};



export default router