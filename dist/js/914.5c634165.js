"use strict";(self["webpackChunksikarus"]=self["webpackChunksikarus"]||[]).push([[914],{1736:function(t,e,i){t.exports=i.p+"img/product1.6d7317e2.jpg"},3722:function(t,e,i){t.exports=i.p+"img/beton.fc2fb64e.jpg"},4718:function(t,e,i){i.d(e,{A:function(){return l}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"cmp-font--klavika hero"},[e("div",{staticClass:"cmp-hero cmp-hero--darkbg cmp-hero--parallax",class:t.heroClass},[t.background&&!t.video?e("div",{staticClass:"cmp-hero__background"},[t.background?e("picture",[e("img",{attrs:{src:t.background}})]):t._e()]):e("div",{staticClass:"cmp-video"},[e("video",{attrs:{playsinline:"",autoplay:"autoplay",muted:"muted",loop:"loop"},domProps:{muted:!0}},[e("source",{attrs:{src:t.video,type:"video/mp4"}})])]),e("v-container",{staticClass:"cmp-hero__content cmp-hero__content--video"},[e("div",{staticClass:"cmp-hero__content--wrapper"},[e("div",{staticClass:"cmp-hero__content--wrapper--dark"},[e("h1",{staticClass:"cmp-display"},[t._v(t._s(t.title))]),t.subtitle?e("h4",{staticClass:"cmp-font--regular"},[t._v(t._s(t.subtitle))]):t._e()])])])],1)])},r=[],a={name:"hero",props:["title","subtitle","background","video","isSmall"],computed:{heroClass(){return{"cmp-hero--noimage cmp-hero--small":!this.background,"cmp-hero--small":this.isSmall}}}},n=a,c=i(1656),o=(0,c.A)(n,s,r,!1,null,null,null),l=o.exports},5132:function(t,e,i){e.A=[{name:"SikaControl®-95 Aer",descr:"Воздухововлекающая добавка для бетонов и растворов",previewImg:i(1736),benifits:[{benifit:"Значительное увеличение морозостойкости бетона, в том числе в растворах солей"},{benifit:"Повышение подвижности и удобоукладываемости бетонной смеси"},{benifit:"Повышение сегрегационной устойчивости бетонной смеси"},{benifit:"Повышение качества лицевой поверхности бетона"},{benifit:"Не содержит хлоридов или других веществ, вызывающих коррозию арматуры"}],detailText:"SikaControl®-95 Aer – воздухововлекающая добавка нового поколения для бетонов и растворов. Применяется для создания в бетоне системы закрытых и равномерно распределённых в объёме пор определённого размера, обеспечивающих бетонным конструкциям высокие показатели по морозостойкости. Соответствует требованиям ТУ 20.59.59-036-13613997-2019",descriptionItems:[{name:"Применение",items:[{item:"Мосты, путепроводы и эстакады"},{item:"Дороги, тротуары, паркинги, отмостки"},{item:"Тротуарная плитка (вибролитьё)"},{item:"Взлётно-посадочные полосы и др. аэродромные сооружения"},{item:"Гидротехнические сооружения"},{item:"Элементы тоннелей"}]},{name:"Преимущества",items:[{item:"Значительное увеличение морозостойкости бетона, в том числе в растворах солей"},{item:"Повышение подвижности и удобоукладываемости бетонной смеси"},{item:"Повышение сегрегационной устойчивости бетонной смеси"},{item:"Повышение водонепроницаемости бетона"},{item:"Повышение трещиностойкости бетона"},{item:"Частичная компенсация негативного влияния на бетонную смесь неоптимального гранулометрического состава"},{item:"Получение бетонов с высокой стойкостью по отношению к химическим и механическим воздействиям"},{item:"Повышение качества лицевой поверхности бетона"},{item:"Не содержит хлоридов или других веществ, вызывающих коррозию арматуры"}]},{name:"Упаковка",items:[{item:"Контейнер 1000 кг, канистры 10, 5 и 0,9 л"}]},{name:"Цвет",items:[{item:"Жидкость светло-коричневого цвета"}]}]},{name:"SikaControl®-95 Aer",descr:"Воздухововлекающая добавка для бетонов и растворов",previewImg:i(1736),benifits:[{benifit:"Значительное увеличение морозостойкости бетона, в том числе в растворах солей"},{benifit:"Повышение подвижности и удобоукладываемости бетонной смеси"},{benifit:"Повышение сегрегационной устойчивости бетонной смеси"},{benifit:"Повышение качества лицевой поверхности бетона"},{benifit:"Не содержит хлоридов или других веществ, вызывающих коррозию арматуры"}]}]},5914:function(t,e,i){i.r(e),i.d(e,{default:function(){return p}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"products"},[e("hero",{attrs:{title:t.title,background:t.background,isSmall:!0}}),e("div",{staticClass:"grid-container my-4 my-sm-8 my-lg-16"},[e("ul",{staticClass:"products__list"},t._l(t.products,(function(i,s){return e("li",{staticClass:"products__item"},[i.previewImg?e("img",{attrs:{src:i.previewImg}}):t._e(),e("div",{staticClass:"products__item--content"},[e("h3",[t._v(" "+t._s(i.name))]),e("p",{staticClass:"cmp-line-clamp cmp-line-clamp--3"},[t._v(t._s(i.descr))]),e("ul",{staticClass:"cmp-product__attributes cmp-font--light cmp-line-clamp cmp-line-clamp--3"},t._l(i.benifits,(function(i,s){return e("li",[t._v(" "+t._s(i.benifit)+" ")])})),0)]),e("a",{staticClass:"products__item--link",attrs:{href:"/product"}})])})),0)])],1)},r=[],a=i(4718),n=i(5132),c={data(){return{title:"Продукты",background:i(3722)}},components:{hero:a.A},computed:{products(){return n.A}},mounted(){console.log("catalog: ",this.products)}},o=c,l=i(1656),m=(0,l.A)(o,s,r,!1,null,null,null),p=m.exports}}]);
//# sourceMappingURL=914.5c634165.js.map