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

// const scrollTo = (hash = null, offset = 0, behavior = "smooth") => {
//   let top = 0;

//   if (hash) {
//     hash = hash.match(/^.+/) ? hash.substring(1) : hash;
//     const el = document.getElementById(hash);
//     //console.log('Rect:', el.getBoundingClientRect());
//     if (el) top = el.getBoundingClientRect().top + window.scrollY + offset;
//     else {
//       console.warn("Scroll to element not found: " + hash);
//       return;
//     }
//   }

//   window.scrollTo({
//     behavior,
//     left: 0,
//     top,
//   });
// };

// router.beforeEach((to, from, next) => {
//     if ( to.meta?.forced ) {  // todo still used?
//         console.log("FORCED");
//         return;
//     }
//     // если мы навигируем только по hash-ам на том же роуте - просто скроллим
//     const fromPath = from.path.replace(/^(.*?)(#.+)/, "$1");
//     const toPath = to.path.replace(/^(.*?)(#.+)/, "$1");
//     if (fromPath === toPath && (to.meta?.hash || from.meta?.hash)) {
//         if ( to.meta.hash ) scrollTo(to.meta.hash);
//         else scrollTo(null, 0, );  // clicked over logo - move to top
//         store.state.withBurgerMenu = false;
//         next();
//         return;
//     }

//     // we need to fetch (1) user & (2) page data
//     const ps = [];

//     store.state.isLoading = true;

//     // 1. загружаем данные юзаера (некэшируемые), они не зависят от роута:
//     ps.push(new Promise((resolve, reject) => {
//         store.dispatch('fetchSession').then(() => {
//             // user data fetched
//             // здесь не вызываем next() - его вызовем ниже после получения обои запросов
//             resolve();
//         }).catch(() => {
//             console.warn("User data is empty...");

//             // todo
//             //reject();
//             resolve();
//         });
//     }));

//     // 2. загружаем данные текущего роута (кэшируемые), в т.ч. common данные:
//     if (to.meta?.api) {
//         ps.push(new Promise((resolve, reject) => {
//             let params = mergeObjects({}, {
//                 action: to.meta.api,
//                 method: to.meta.method,
//                 params: mergeObjects({}, to.params, to.query),
//             }, to.meta);
//             store.dispatch('fetchPage', params)
//                 .then(() => {
//                     // page data fetched
//                     // здесь не вызываем next() - его вызовем ниже после получения обои запросов
//                     resolve();
//                 })
//                 .catch((err) => {
//                     console.error("API error: ", err);
//                     reject();
//                 });
//         }));
//     }

//     Promise.all(ps)
//         .then(values => {
//             console.log("All fetched");
//             next();
//         })
//         .catch(err => {
//             // todo

//             /*if (err.code === Config.API_EXCEPTION_NOT_FOUND) {
//               router.replace({name: 'error404'});
//             } else if (err.code == Config.ERROR_CODE_FORBIDDEN || err.code == Config.API_EXCEPTION_FORBIDDEN) {
//               router.replace({name: 'login'});
//             } else if (err.code === Config.API_EXCEPTION_SUSPENDED) {
//               router.replace({name: 'report-accepted'});
//             } else {
//               router.replace({name: 'error500'});
//             }*/
//         });
// });

// router.afterEach((to, from) => {
//     // если мы навигируем только по hash-ам на том же роуте - то мы уже проскролили
//     const fromPath = from.path.replace(/^(.*?)(#.+)/, "$1");
//     const toPath = to.path.replace(/^(.*?)(#.+)/, "$1");
//     if (fromPath === toPath && (to.meta?.hash || from.meta?.hash)) {
//         return;
//     }

//     store.state.isLoading = false;
//     store.state.isHeaderInversed = to.meta?.isHeaderInversed;// && !to.meta?.hash;

//     setTimeout(() => {
//         if (from?.path && to?.path !== from.path) {
//             scrollTo(null, 0, 'instant');

//             const anchor = (document.URL.split('#').length > 1) ? document.URL.split('#')[1] : null;
//             if (anchor) {
//                 // yet more pause to allow dom-model to appear
//                 setTimeout(() => scrollTo(anchor, -120, 'smooth'), 500);
//             }
//         }

//         store.state.withBurgerMenu = false;

//     }, 310);
// });

export default router;
