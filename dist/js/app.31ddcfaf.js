(function(){"use strict";var e={405:function(e,n,t){var r=t(5471),o=function(){var e=this,n=e._self._c;return n("v-app",[n("transition",{attrs:{name:"route",mode:"out-in"}},[n("router-view")],1)],1)},i=[],u={name:"App"},a=u,c=t(1656),f=(0,c.A)(a,o,i,!1,null,null,null),d=f.exports,s=t(8743),l=t(5197),p=t(4600),h=t.n(p);t(4301);r["default"].use(h());var m=new(h())({});r["default"].config.productionTip=!1,new r["default"]({store:l.A,router:s.A,vuetify:m,render:e=>e(d)}).$mount("#app")},5197:function(e,n,t){t.d(n,{A:function(){return a}});var r=t(5471),o=t(5353);let i={response:{},session:{},common:{},page:{},currentPage:{},isLoading:!1,windowWidth:window.innerWidth,windowHeight:window.innerHeight,headerHeight:64,withBurgerMenu:!1,withProductMenu:!1,swipers:{}};var u=i;r["default"].use(o.Ay);var a=new o.Ay.Store({state:u,modules:{}})},8743:function(e,n,t){t.d(n,{A:function(){return c}});var r=t(5471),o=t(173);t(5197);r["default"].use(o.Ay);const i=[{path:"/",component:()=>Promise.all([t.e(678),t.e(658)]).then(t.bind(t,2703)),children:[{path:"/",name:"home",component:()=>Promise.all([t.e(130),t.e(678),t.e(144)]).then(t.bind(t,3857))},{path:"/about",name:"about",component:()=>t.e(480).then(t.bind(t,1480))},{path:"/contacts",name:"contacts",component:()=>t.e(183).then(t.bind(t,9183))},{path:"/objects",name:"objects",component:()=>t.e(597).then(t.bind(t,1597))},{path:"/objects/object",name:"object",component:()=>Promise.all([t.e(130),t.e(248)]).then(t.bind(t,7622))},{path:"/category",name:"category",component:()=>t.e(890).then(t.bind(t,6890))},{path:"/products",name:"products",component:()=>t.e(992).then(t.bind(t,9992))},{path:"/product",name:"product",component:()=>t.e(310).then(t.bind(t,3310))}]}];var u=i;r["default"].use(o.Ay);const a=new o.Ay({mode:"history",base:"/sikarus/dist/",routes:u,scrollBehavior(e,n,t){return t||{x:0,y:0}}});var c=a}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var u=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],i=e[d][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(d--,1);var f=o();void 0!==f&&(n=f)}}return n}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{130:"b01d83d1",144:"ef27b614",183:"32dc48c2",248:"13154735",310:"a18492f9",480:"43cbe717",597:"9e59fd3e",658:"d2b173d4",678:"c2ad9b2d",890:"c7d9dc90",992:"0f454f29"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{144:"81903378",183:"a437018d",248:"4eb81665",310:"7fb7e156",480:"0ed6c52a",597:"a72a21ea",658:"74d12109",890:"d376b06e",992:"1d4cf4eb"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="sikarus:";t.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),d=0;d<f.length;d++){var s=f[d];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==n+i){a=s;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+i),a.src=r),e[r]=[o];var l=function(n,t){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/sikarus/dist/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,r,o,i){var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",t.nc&&(u.nonce=t.nc);var a=function(t){if(u.onerror=u.onload=null,"load"===t.type)o();else{var r=t&&t.type,a=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+a+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=a,u.parentNode&&u.parentNode.removeChild(u),i(c)}};return u.onerror=u.onload=a,u.href=n,r?r.parentNode.insertBefore(u,r.nextSibling):document.head.appendChild(u),u},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var u=t.miniCssF(r),a=t.p+u;if(n(u,a))return o();e(r,a,null,o,i)}))},o={524:0};t.f.miniCss=function(e,n){var t={144:1,183:1,248:1,310:1,480:1,597:1,658:1,890:1,992:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var u=t.p+t.u(n),a=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};t.l(u,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,u=r[0],a=r[1],c=r[2],f=0;if(u.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var d=c(t)}for(n&&n(r);f<u.length;f++)i=u[f],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(d)},r=self["webpackChunksikarus"]=self["webpackChunksikarus"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(405)}));r=t.O(r)})();
//# sourceMappingURL=app.31ddcfaf.js.map