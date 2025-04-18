(function(){"use strict";var e={1542:function(e,t,n){var l=n(5471),r=function(){var e=this,t=e._self._c;return t("v-app",[t("transition",{attrs:{name:"route",mode:"out-in"}},[t("router-view")],1)],1)},a=[],o={name:"App"},i=o,u=n(1656),s=(0,u.A)(i,r,a,!1,null,null,null),c=s.exports,d=n(4432),v=n(5353);n(8384);let m={response:{},session:{},common:{},page:{},currentPage:{},isLoading:!1,windowWidth:window.innerWidth,windowHeight:window.innerHeight,headerHeight:64,withBurgerMenu:!1,withProductMenu:!1,swipers:{}};var b=m;l["default"].use(v.Ay);var f=new v.Ay.Store({state:b,modules:{}}),p=n(4600),h=n.n(p);n(4301);l["default"].use(h());var g=new(h())({});l["default"].config.productionTip=!1,new l["default"]({store:f,router:d.A,vuetify:g,render:e=>e(c)}).$mount("#app")},1999:function(e,t,n){e.exports=n.p+"img/hero-skyline-2.a1bda66d.jpg"},2042:function(e,t,n){e.exports=n.p+"img/objects.625d5bcd.jpg"},3722:function(e,t,n){e.exports=n.p+"img/beton.fc2fb64e.jpg"},4432:function(e,t,n){var l=n(5471),r=n(173),a=n(9844);l["default"].use(r.Ay);const o=new r.Ay({mode:"hash",base:"/sikarus/dist/",routes:a.A,scrollBehavior(e,t,n){return n||{x:0,y:0}}});t.A=o},8384:function(e,t){t.A={WIDTH_SM:688,WIDTH_MD:1016,WIDTH_LG:1344,WIDTH_XL:1920,YANDEX_MAP_API_KEY:"https://api-maps.yandex.ru/2.1/?apikey=9c9f32d3-c925-4121-8673-5c69d9b4f7eb&lang=ru_RU"}},9349:function(e,t,n){e.exports=n.p+"img/about.8d3143e7.jpg"},9732:function(e,t,n){n.d(t,{A:function(){return s}});var l=function(){var e=this,t=e._self._c;return e.level1?t("div",{staticClass:"breadcrumbs"},[t("div",{staticClass:"grid-container"},[t("ul",[t("li",{directives:[{name:"show",rawName:"v-show",value:e.level1,expression:"level1"}]},[t("a",[e._v(" "+e._s(e.level1)+" ")])]),t("li",{directives:[{name:"show",rawName:"v-show",value:e.level2,expression:"level2"}]},[t("a",[e._v(" "+e._s(e.level2)+" ")])]),t("li",{directives:[{name:"show",rawName:"v-show",value:e.level3,expression:"level3"}]},[t("a",[e._v(" "+e._s(e.level3)+" ")])]),t("li",{directives:[{name:"show",rawName:"v-show",value:e.level4,expression:"level4"}]},[t("a",[e._v(" "+e._s(e.level4)+" ")])]),t("li",{directives:[{name:"show",rawName:"v-show",value:e.level5,expression:"level5"}]},[t("a",[e._v(" "+e._s(e.level5)+" ")])])])])]):e._e()},r=[],a={name:"breadcrumbs",props:{level1:String,level2:String,level3:String,level4:String,level5:String},methods:{}},o=a,i=n(1656),u=(0,i.A)(o,l,r,!1,null,null,null),s=u.exports},9844:function(e,t,n){n(9732);var l=n(5471),r=n(173);l["default"].use(r.Ay);const a=[{path:"/",component:()=>Promise.all([n.e(180),n.e(751)]).then(n.bind(n,5956)),children:[{path:"/",name:"home",component:()=>Promise.all([n.e(548),n.e(180),n.e(279)]).then(n.bind(n,5356)),meta:{title:"Sika Россия",subtitle:"Строим доверие",background:n(1999),video:"https://sika.scene7.com/is/content/sika/glo-skyline-loop",breadcrumbs:{level1:"",level2:"",level3:"",level4:"",level5:""}}},{path:"/about",name:"about",component:()=>n.e(415).then(n.bind(n,2415)),meta:{title:"О компании",subtitle:null,background:n(9349),isSmall:!0,breadcrumbs:{level1:"Главная",level2:"О компании",level3:"",level4:"",level5:""}}},{path:"/contacts",name:"contacts",component:()=>Promise.all([n.e(523),n.e(580)]).then(n.bind(n,9580)),meta:{title:"Контакты",subtitle:"",background:null,video:null,isSmall:!0,breadcrumbs:{level1:"Главная",level2:"Контакты",level3:"",level4:"",level5:""}}},{path:"/objects",name:"objects",component:()=>n.e(150).then(n.bind(n,6150)),meta:{title:"Объекты",subtitle:"",background:n(2042),video:"",isSmall:!0,breadcrumbs:{level1:"Главная",level2:"Объекты",level3:"",level4:"",level5:""}}},{path:"/objects/object",name:"object",component:()=>Promise.all([n.e(168),n.e(548),n.e(145)]).then(n.bind(n,6049)),meta:{title:"Название объекта",background:n(2042),isSmall:!0,breadcrumbs:{level1:"Главная",level2:"Объекты",level3:"Название объекта",level4:"",level5:""}}},{path:"/category",name:"category",component:()=>n.e(135).then(n.bind(n,3135)),meta:{title:"Добавки в бетон",background:n(3722),video:"",isSmall:!0,breadcrumbs:{level1:"Продукция",level2:"Добавки в бетон",level3:"",level4:"",level5:""}}},{path:"/products",name:"products",component:()=>Promise.all([n.e(168),n.e(176)]).then(n.bind(n,8176)),meta:{title:"Товарный бетон",background:n(3722),isSmall:!0,breadcrumbs:{level1:"Продукция",level2:"Добавки в бетон",level3:"Товарный бетон"}}},{path:"/product",name:"product",component:()=>Promise.all([n.e(168),n.e(882)]).then(n.bind(n,6882)),meta:{title:"Название продукта",background:n(3722),isSmall:!0,breadcrumbs:{level1:"Продукция",level2:"Добавки в бетон",level3:"Товарный бетон",level4:"Название продукта"}}},{path:"/auth",name:"auth",component:()=>n.e(560).then(n.bind(n,560)),meta:{title:"Моя Sika",subtitle:"",background:"",video:"",isSmall:!0,breadcrumbs:{level1:"",level2:"",level3:"",level4:"",level5:""}}},{path:"/search",name:"search",component:()=>n.e(342).then(n.bind(n,3342)),meta:{title:"Результаты поиска",subtitle:"",background:"",video:"",isSmall:!0,breadcrumbs:{level1:"Главная",level2:"Результаты поиска",level3:"",level4:"",level5:""}}},{path:"/cabinet",name:"cabinet",component:()=>Promise.all([n.e(168),n.e(738)]).then(n.bind(n,9738)),meta:{title:"Моя Sika",isSmall:!0,breadcrumbs:{level1:"",level2:"",level3:"",level4:"",level5:""}}},{path:"/cabinet/docs",name:"cabinetDocs",component:()=>n.e(557).then(n.bind(n,9557)),meta:{title:"Моя Sika",isSmall:!0,breadcrumbs:{level1:"",level2:"",level3:"",level4:"",level5:""}}},{path:"/news",name:"news",component:()=>n.e(134).then(n.bind(n,8134)),meta:{title:"Новости",background:n(2042),isSmall:!0,breadcrumbs:{level1:"Главная",level2:"Новости",level3:"",level4:"",level5:""}}},{path:"/news/new",name:"new",component:()=>Promise.all([n.e(168),n.e(959)]).then(n.bind(n,9959)),meta:{title:"Название новости",subtitle:"",background:n(2042),video:"",isSmall:!0,breadcrumbs:{level1:"Главная",level2:"Новости",level3:"Название новости",level4:"",level5:""}}},{path:"/decisions",name:"decisions",component:()=>n.e(609).then(n.bind(n,3609)),meta:{title:"Отраслевые решения",subtitle:"",background:n(2042),video:"",isSmall:!0,breadcrumbs:{level1:"Главная",level2:"Отраслевые решения",level3:"",level4:"",level5:""}}},{path:"/decision",name:"decision",component:()=>Promise.all([n.e(168),n.e(71)]).then(n.bind(n,4071)),meta:{title:"Отраслевое решение",subtitle:"",background:n(2042),video:"",isSmall:!0,breadcrumbs:{level1:"Главная",level2:"Отраслевые решения",level3:"Отраслевое решение",level4:"",level5:""}}},{path:"/dealers",name:"dealers",component:()=>Promise.all([n.e(523),n.e(896)]).then(n.bind(n,3896)),meta:{title:"Дилеры",subtitle:"",background:n(9349),video:"",isSmall:!0,breadcrumbs:{level1:"Главная",level2:"Дилеры",level3:"",level4:"",level5:""}}}]}];t.A=a}},t={};function n(l){var r=t[l];if(void 0!==r)return r.exports;var a=t[l]={exports:{}};return e[l].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,l,r,a){if(!l){var o=1/0;for(c=0;c<e.length;c++){l=e[c][0],r=e[c][1],a=e[c][2];for(var i=!0,u=0;u<l.length;u++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](l[u])}))?l.splice(u--,1):(i=!1,a<o&&(o=a));if(i){e.splice(c--,1);var s=r();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[l,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,l){return n.f[l](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{71:"7ebb822f",134:"ccb7dfc7",135:"7ca3ff82",145:"1bc8761d",150:"4236bae2",168:"6b40735f",176:"376e1e19",180:"25722a55",279:"f42cffe3",342:"9e5a2ff2",415:"253cfe66",548:"6e64b32e",557:"58ff9cbc",560:"5e4b27df",580:"819704e6",609:"6610ded0",738:"7a3f1729",751:"4d9b40eb",882:"e1d08e88",896:"e37414aa",959:"ca78a826"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{71:"4f63ae5c",134:"b68e2d9c",135:"22b76109",145:"366e2000",150:"602b1006",176:"c6a763e1",279:"05398b7b",342:"75f445cf",415:"4d2a5147",523:"4f034e44",557:"db6232e4",560:"8f70e888",580:"34d9bc4b",609:"505e457a",738:"6a7d2d7b",751:"38089eae",882:"da2fa8b8",896:"61536fc6",959:"c11b7ead"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="sikarus:";n.l=function(l,r,a,o){if(e[l])e[l].push(r);else{var i,u;if(void 0!==a)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==l||d.getAttribute("data-webpack")==t+a){i=d;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+a),i.src=l),e[l]=[r];var v=function(t,n){i.onerror=i.onload=null,clearTimeout(m);var r=e[l];if(delete e[l],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(v.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=v.bind(null,i.onerror),i.onload=v.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/sikarus/dist/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,l,r,a){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",n.nc&&(o.nonce=n.nc);var i=function(n){if(o.onerror=o.onload=null,"load"===n.type)r();else{var l=n&&n.type,i=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+l+": "+i+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=l,u.request=i,o.parentNode&&o.parentNode.removeChild(o),a(u)}};return o.onerror=o.onload=i,o.href=t,l?l.parentNode.insertBefore(o,l.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),l=0;l<n.length;l++){var r=n[l],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var o=document.getElementsByTagName("style");for(l=0;l<o.length;l++){r=o[l],a=r.getAttribute("data-href");if(a===e||a===t)return r}},l=function(l){return new Promise((function(r,a){var o=n.miniCssF(l),i=n.p+o;if(t(o,i))return r();e(l,i,null,r,a)}))},r={524:0};n.f.miniCss=function(e,t){var n={71:1,134:1,135:1,145:1,150:1,176:1,279:1,342:1,415:1,523:1,557:1,560:1,580:1,609:1,738:1,751:1,882:1,896:1,959:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=l(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,l){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)l.push(r[2]);else if(523!=t){var a=new Promise((function(n,l){r=e[t]=[n,l]}));l.push(r[2]=a);var o=n.p+n.u(t),i=new Error,u=function(l){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=l&&("load"===l.type?"missing":l.type),o=l&&l.target&&l.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,r[1](i)}};n.l(o,u,"chunk-"+t,t)}else e[t]=0},n.O.j=function(t){return 0===e[t]};var t=function(t,l){var r,a,o=l[0],i=l[1],u=l[2],s=0;if(o.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(u)var c=u(n)}for(t&&t(l);s<o.length;s++)a=o[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},l=self["webpackChunksikarus"]=self["webpackChunksikarus"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=n.O(void 0,[504],(function(){return n(1542)}));l=n.O(l)})();
//# sourceMappingURL=app.a7d1dbfd.js.map