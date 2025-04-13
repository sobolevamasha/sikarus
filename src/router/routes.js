import Breadcrumbs from "@/components/breadcrumbs.vue";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: () => import("../layout/layout-main"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../views/HomePage"),
        meta: {
          title: "Sika Россия",
          subtitle: "Строим доверие",
          background: require("@/assets/hero-skyline-2.jpg"),
          video: "https://sika.scene7.com/is/content/sika/glo-skyline-loop",
          //isSmall: false,
          breadcrumbs: {
            level1: "",
            level2: "",
            level3: "",
            level4: "",
            level5: "",
          },
        },
      },
      {
        path: "/about",
        name: "about",
        component: () => import("../views/About"),
        meta: {
          title: "О компании",
          subtitle: null,
          background: require("@/assets/about.jpg"),
          //video: "",
          isSmall: true,
          breadcrumbs: {
            level1: "Главная",
            level2: "О компании",
            level3: "",
            level4: "",
            level5: "",
          },
        },
      },
      {
        path: "/contacts",
        name: "contacts",
        component: () => import("../views/Contacts"),
        meta: {
          title: "Контакты",
          subtitle: "",
          background: null,
          video: null,
          isSmall: true,
          breadcrumbs: {
            level1: "Главная",
            level2: "Контакты",
            level3: "",
            level4: "",
            level5: "",
          },
        },
      },
      {
        path: "/objects",
        name: "objects",
        component: () => import("../views/Objects"),
        meta: {
          title: "Объекты",
          subtitle: "",
          background: require("@/assets/objects.jpg"),
          video: "",
          isSmall: true,
          breadcrumbs: {
            level1: "Главная",
            level2: "Объекты",
            level3: "",
            level4: "",
            level5: "",
          },
        },
      },
      {
        path: "/objects/object",
        name: "object",
        component: () => import("../views/Object"),
        meta: {
          title: "Название объекта",
          background: require("@/assets/objects.jpg"),
          isSmall: true,
          breadcrumbs: {
            level1: "Главная",
            level2: "Объекты",
            level3: "Название объекта",
            level4: "",
            level5: "",
          },
        },
      },
      {
        path: "/category",
        name: "category",
        component: () => import("../views/Catalog/Category"),
        meta: {
          title: "Добавки в бетон",
          background: require("@/assets/tmp/beton.jpg"),
          video: "",
          isSmall: true,
          breadcrumbs: {
            level1: "Продукция",
            level2: "Добавки в бетон",
            level3: "",
            level4: "",
            level5: "",
          },
        },
      },
      {
        path: "/products",
        name: "products",
        component: () => import("../views/Catalog/Products"),
        meta: {
          title: "Товарный бетон",
          background: require("@/assets/tmp/beton.jpg"),
          isSmall: true,
          breadcrumbs: {
            level1: "Продукция",
            level2: "Добавки в бетон",
            level3: "Товарный бетон",
          },
        },
      },
      {
        path: "/product",
        name: "product",
        component: () => import("../views/Catalog/Product"),
        meta: {
          title: 'Название продукта',
          background: require("@/assets/tmp/beton.jpg"),
          isSmall: true,
          breadcrumbs: {
            level1: 'Продукция',
            level2: 'Добавки в бетон',
            level3: 'Товарный бетон',
            level4: 'Название продукта',
          },
        },
      },
      {
        path: "/auth",
        name: "auth",
        component: () => import("../views/Auth"),
        meta: {
          title: "Моя Sika",
          subtitle: "",
          background: "",
          video: "",
          isSmall: true,
          breadcrumbs: {
            level1: "",
            level2: "",
            level3: "",
            level4: "",
            level5: "",
          },
        },
      },
      {
        path: "/search",
        name: "search",
        component: () => import("../views/Search"),
        meta: {
          title: "Результаты поиска",
          subtitle: "",
          background: "",
          video: "",
          isSmall: true,
          breadcrumbs: {
            level1: "Главная",
            level2: "Результаты поиска",
            level3: "",
            level4: "",
            level5: "",
          },
        },
      },
      {
        path: "/cabinet",
        name: "cabinet",
        component: () => import("../views/Cabinet"),
        meta: {
          title: "Моя Sika",
          isSmall: true,
          breadcrumbs: {
            level1: "",
            level2: "",
            level3: "",
            level4: "",
            level5: "",
          },
        },
      },
      {
        path: "/news",
        name: "news",
        component: () => import("../views/News"),
        meta: {
          title: "Новости",
          background: require("@/assets/objects.jpg"),
          isSmall: true,
          breadcrumbs: {
            level1: "Главная",
            level2: "Новости",
            level3: "",
            level4: "",
            level5: "",
          },
        },
      },
      {
        path: "/news/new",
        name: "new",
        component: () => import("../views/New"),
        meta: {
          title: "Название новости",
          subtitle: "",
          background: require('@/assets/objects.jpg'),
          video: "",
          isSmall: true,
          breadcrumbs: {
            level1: "Главная",
            level2: "Новости",
            level3: "Название новости",
            level4: "",
            level5: "",
          },
        },
      },
    ],
  },
];

export default routes;
