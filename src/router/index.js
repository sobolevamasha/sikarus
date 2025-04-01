import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import routes from "@/router/routes";
//import {mergeObjects} from "@/utils/utils";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
