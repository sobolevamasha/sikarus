"use strict";(self["webpackChunksikarus"]=self["webpackChunksikarus"]||[]).push([[38],{43:function(t,s,a){a.d(s,{A:function(){return c}});var e=function(){var t=this,s=t._self._c;return s("v-btn",{staticClass:"cmp-button btn",attrs:{type:"button"},on:{click:function(s){return t.$emit("click")}}},[t._t("default",(function(){return[t._v(t._s(t.label))]}))],2)},r=[],i={name:"btn",props:{label:{}}},l=i,n=a(1656),o=(0,n.A)(l,e,r,!1,null,null,null),c=o.exports},1999:function(t,s,a){t.exports=a.p+"img/hero-skyline-2.a1bda66d.jpg"},3034:function(t,s,a){a.d(s,{A:function(){return c}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"cmp-font--klavika hero"},[s("div",{staticClass:"cmp-hero cmp-hero--darkbg cmp-hero--parallax",class:t.heroClass},[t.background&&!t.video?s("div",{staticClass:"cmp-hero__background"},[s("picture",{directives:[{name:"show",rawName:"v-show",value:t.background,expression:"background"}]},[s("img",{attrs:{src:t.background}})])]):s("div",{staticClass:"cmp-video"},[s("video",{attrs:{playsinline:"",autoplay:"autoplay",muted:"muted",loop:"loop"},domProps:{muted:!0}},[s("source",{attrs:{src:t.video,type:"video/mp4"}})])]),s("div",{staticClass:"container cmp-hero__content"},[s("div",{staticClass:"cmp-hero__content--wrapper"},[s("div",{staticClass:"cmp-hero__content--wrapper--dark"},[s("h1",{staticClass:"cmp-display"},[t._v(t._s(t.title))]),s("h4",{staticClass:"cmp-font--regular"},[t._v(t._s(t.subtitle))])])])])])])},r=[],i={name:"hero",props:["title","subtitle","background","video","isSmall"],computed:{heroClass(){return{"cmp-hero--noimage cmp-hero--small":!this.background,"cmp-hero--small":this.isSmall}}}},l=i,n=a(1656),o=(0,n.A)(l,e,r,!1,null,null,null),c=o.exports},4038:function(t,s,a){a.r(s),a.d(s,{default:function(){return p}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"auth"},[s("hero",{attrs:{title:t.h1,background:t.background,isSmall:!0}}),s("div",{staticClass:"grid-container my-4 my-sm-8 my-lg-16"},[s("h3",{staticClass:"mb-8"},[t._v("Авторизируйтесь, чтобы попасть в личный кабинет")]),s("form",{staticClass:"auth__form"},[t._m(0),t._m(1),s("btn",{attrs:{label:"Войти",type:"submit"}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.errorMessage,expression:"errorMessage"}],staticClass:"auth__error mt-4"},[t._v("Проверьте правильность данных")])],1)])],1)},r=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"auth__field"},[s("label",{staticClass:"auth__label h5",attrs:{for:"username"}},[t._v("Логин:")]),s("input",{staticClass:"auth__input",attrs:{type:"text",id:"username",required:"",placeholder:"Введите Ваш логин"}})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"auth__field"},[s("label",{staticClass:"auth__label h5",attrs:{for:"password"}},[t._v("Пароль:")]),s("input",{staticClass:"auth__input",attrs:{type:"password",id:"password",required:"",placeholder:"Введите Ваш пароль"}})])}],i=a(3034),l=a(43),n={name:"Auth",components:{hero:i.A,btn:l.A},data(){return{h1:"Авторизация",background:a(1999),username:"",password:"",errorMessage:!1}},methods:{}},o=n,c=a(1656),u=(0,c.A)(o,e,r,!1,null,null,null),p=u.exports}}]);
//# sourceMappingURL=38.4d25fd9e.js.map