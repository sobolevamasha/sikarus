"use strict";(self["webpackChunksikarus"]=self["webpackChunksikarus"]||[]).push([[395],{1736:function(t,e,i){t.exports=i.p+"img/product1.6d7317e2.jpg"},2191:function(t,e,i){function n(){const t=document.querySelectorAll(".accordion-header"),e=document.querySelectorAll(".download--btn");t.forEach((t=>{t.addEventListener("click",(function(){const e=this.parentElement,i=e.querySelector(".accordion-content");i.classList.toggle("active");const n=t.querySelector(".arrow"),c=n.classList.toggle("active");c?n.classList.add("rotate"):n.classList.remove("rotate")}))})),e.forEach((t=>{t.addEventListener("click",(()=>{t.classList.toggle("download--btn--active")}))}))}function c(){const t=document.querySelectorAll(".download--btn");t.forEach((t=>{t.addEventListener("click",(()=>{t.classList.toggle("download--btn--active")}))}))}function s(){const t=document.getElementById("toggleBurgerMenu"),e=document.getElementById("burgerMenu");function i(){e.classList.toggle("burger-menu--opened"),t.classList.toggle("header__mobile--close-btn")}function n(){e.classList.remove("burger-menu--opened"),t.classList.remove("header__mobile--close-btn")}t.addEventListener("click",i);const c=document.getElementsByTagName("a");Array.from(c).forEach((t=>{t.addEventListener("click",n)}))}function r(){const t=document.getElementById("open-modal"),e=document.getElementById("modalCountires"),i=document.querySelector(".burger-menu"),n=document.getElementById("openModalBtn"),c=document.getElementById("close-modal");function s(){e.classList.toggle("active"),i.classList.toggle("burger-menu--zindex")}t.addEventListener("click",s),n.addEventListener("click",s),c.addEventListener("click",s)}function o(){const t=document.querySelectorAll(".burger-menu__toggleInnerMenu"),e=document.querySelectorAll(".burger-menu__sublist");function i(i){const n=Array.from(t).indexOf(i.currentTarget),c=e[n];c&&c.classList.toggle("active")}t.forEach((t=>{t.addEventListener("click",i)}))}function a(){const t=document.querySelectorAll(".burger-menu__toggleInnerSubMenu"),e=document.querySelectorAll(".burger-menu__subsublist");function i(i){const n=Array.from(t).indexOf(i.currentTarget),c=e[n];c&&c.classList.toggle("active")}t.forEach((t=>{t.addEventListener("click",i)}))}function l(){const t=document.getElementById("toggleProducts"),e=document.querySelector(".productItems");function i(){e.classList.toggle("active")}function n(i){t.contains(i.target)||e.contains(i.target)||e.classList.remove("active")}t.addEventListener("click",i),document.addEventListener("click",n)}function u(){const t=document.querySelector(".header__dropdown--cabinet"),e=document.querySelector(".header__dropdown--cabinet-item");function i(){e.classList.toggle("active")}function n(i){t.contains(i.target)||e.contains(i.target)||e.classList.remove("active")}t.addEventListener("click",i),document.addEventListener("click",n)}function d(){const t=document.querySelectorAll(".toggleRegions"),e=document.querySelectorAll(".toggleCountries"),i=document.querySelectorAll(".countries__section--countries"),n=document.querySelectorAll(".countries__section--linkList");function c(e){const n=Array.from(t).indexOf(e.currentTarget),c=i[n];c&&c.classList.toggle("active")}function s(t){const i=Array.from(e).indexOf(t.currentTarget),c=n[i];c&&c.classList.toggle("active")}t.forEach((t=>{t.addEventListener("click",c)})),e.forEach((t=>{t.addEventListener("click",s)}))}i.d(e,{Cs:function(){return u},JC:function(){return n},MU:function(){return s},YA:function(){return d},bz:function(){return r},dX:function(){return o},i8:function(){return l},rl:function(){return a},v5:function(){return c}})},4045:function(t,e,i){i.d(e,{A:function(){return u}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"brochure"},[e("div",{staticClass:"brochure__item"},[e("a",{staticClass:"brochure__link",attrs:{target:"_blank",href:t.filePath}},[e("div",{staticClass:"brochure__content text-left"},[e("i",{staticClass:"cmp-icon cmp-icon-download mr-4"}),e("h5",{staticClass:"brochure__content--title mb-0 mr-4"},[t._v(" "+t._s(t.title)+" ")])]),e("div",{staticClass:"d-flex align-center"},[t.description?e("div",{staticClass:"cmp-line-clamp cmp-line-clamp--3 mr-4"},[t._v(t._s(t.description))]):t._e(),t.fileSize?e("span",[t._v(t._s(t.fileSize))]):t._e()])]),e("button",{staticClass:"download--btn"},[e("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 768 768"}},[e("g",{attrs:{id:"icomoon-ignore"}}),e("path",{attrs:{fill:"#000",d:"M415.5 288h177l-177-175.5v175.5zM511.5 511.5v-63h-96v-96h-63v96h-96v63h96v96h63v-96h96zM448.5 64.5l192 192v384q0 25.5-19.5 44.25t-45 18.75h-384q-25.5 0-45-18.75t-19.5-44.25l1.5-513q0-25.5 18.75-44.25t44.25-18.75h256.5z"}})])])]),e("img",{staticClass:"brochure__brochure",attrs:{src:t.brochure,alt:"Car Park Systems for Manufaktura"}})])},c=[],s=i(2191),r={name:"brochure",props:["title","description","filePath","brochure","fileSize"],methods:{initActiveBtn(){(0,s.v5)()}},mounted(){this.initActiveBtn()}},o=r,a=i(1656),l=(0,a.A)(o,n,c,!1,null,null,null),u=l.exports},4395:function(t,e,i){i.r(e),i.d(e,{default:function(){return m}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"product"},[e("div",{staticClass:"grid-container section-margin"},[e("div",{staticClass:"product__main"},[t.product.previewImg?e("img",{staticClass:"product__img",attrs:{src:t.product.previewImg}}):t._e(),e("div",{staticClass:"product__right"},[e("h1",[t._v(" "+t._s(t.product.name))]),e("h4",{staticClass:"cmp-line-clamp cmp-line-clamp--3"},[t._v(t._s(t.product.descr))]),e("p",[t._v(t._s(t.product.detailText))]),e("ul",{staticClass:"cmp-product__attributes"},t._l(t.product.benifits,(function(i,n){return e("li",[t._v(" "+t._s(i.benifit)+" ")])})),0),e("div",{staticClass:"product__main--links"},[e("a",[e("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"19",height:"19",viewBox:"0 0 1024 1024"}},[e("g",{attrs:{id:"icomoon-ignore"}}),e("path",{attrs:{fill:"#000",d:"M883.968 670.56l-30.656 162.304h-682.624l-30.656-162.304h-76.32v257.984h896.576v-257.984h-76.32zM864.64 382.272h-224.704v-93.76h-255.808v93.76h-222.56l349.248 365.184 353.824-365.184zM639.904 127.424h-255.808v34.112h255.808v-34.112zM639.904 191.136h-255.808v65.216h255.808v-65.216z"}})]),t._v(" Техническое описание")]),e("a",[t._v("Показать все документы")])])])])]),e("div",{staticClass:"product__info"},[e("div",{staticClass:"grid-container section-margin"},[t._m(0),e("ul",{staticClass:"product__info--description"},t._l(t.product.descriptionItems,(function(i,n){return e("li",[e("h4",[t._v(t._s(i.name))]),e("ul",{staticClass:"list-style"},t._l(i.items,(function(i,n){return e("li",{staticClass:"list-style"},[t._v(" "+t._s(i.item)+" ")])})),0)])})),0),e("div",{staticClass:"product__info--chars"},[e("h2",[t._v("Характеристики")]),e("ul",{staticClass:"accordion"},[e("li",{staticClass:"accordion-list"},[e("h4",{staticClass:"accordion-header"},[t._v(" Информация о материале "),e("svg",{staticClass:"arrow",attrs:{viewBox:"0 0 887 1024"}},[e("path",{attrs:{d:"M64.512 285.696l378.88 364.544 380.928-364.544q22.528-26.624 49.152 0 26.624 22.528 0 49.152l-405.504 401.408q-22.528 22.528-49.152 0l-405.504-401.408q-26.624-26.624 0-49.152 24.576-24.576 51.2 0z"}})])]),e("div",{staticClass:"text-left accordion-content"},[e("ul",{staticClass:"product__info--list"},t._l(t.product.chars,(function(i,n){return e("li",[e("h5",[t._v(t._s(i.name)+" ")]),e("p",[t._v(t._s(i.value))])])})),0)])])])]),e("div",{staticClass:"product__info--usage"},[e("h2",[t._v("Применение")]),e("ul",{staticClass:"accordion"},t._l(t.product.usage,(function(i,n){return e("li",{staticClass:"accordion-list"},[e("h4",{staticClass:"accordion-header"},[t._v(" "+t._s(i.title)+" "),e("svg",{staticClass:"arrow",attrs:{viewBox:"0 0 887 1024"}},[e("path",{attrs:{d:"M64.512 285.696l378.88 364.544 380.928-364.544q22.528-26.624 49.152 0 26.624 22.528 0 49.152l-405.504 401.408q-22.528 22.528-49.152 0l-405.504-401.408q-26.624-26.624 0-49.152 24.576-24.576 51.2 0z"}})])]),e("div",{staticClass:"text-left accordion-content"},[e("ul",{staticClass:"product__info--list"},t._l(i.info,(function(i,n){return e("li",[e("h5",[t._v(t._s(i.name)+" ")]),e("p",[t._v(t._s(i.value))])])})),0)])])})),0)]),e("div",{staticClass:"product__info--docs"},[e("brochure",{attrs:{title:t.docTitle,description:t.description,fileSize:t.fileSize,filePath:t.filePath,brochure:t.brochure}})],1)])])])},c=[function(){var t=this,e=t._self._c;return e("nav",{staticClass:"product__info--navigation"},[e("ul",[e("li",[t._v("Описание")]),e("li",[t._v("Характеристики")]),e("li",[t._v("Применение")]),e("li",[t._v("Документы")]),e("li",[t._v("Видео")])])])}],s=i(5132),r=i(4045),o=i(2191),a={data(){return{docTitle:s.A[0].docs[0].title,description:s.A[0].docs[0].description,fileSize:s.A[0].docs[0].fileSize,filePath:s.A[0].docs[0].filePath,brochure:s.A[0].docs[0].brochure,level1:"Продукция",level2:"Добавки в бетон",level3:"Товарный бетон",level4:s.A[0].name}},components:{brochure:r.A},computed:{product(){return s.A[0]}},methods:{initAccordeon(){(0,o.JC)()}},mounted(){this.initAccordeon()}},l=a,u=i(1656),d=(0,u.A)(l,n,c,!1,null,null,null),m=d.exports},5132:function(t,e,i){e.A=[{name:"SikaControl®-95 Aer",descr:"Воздухововлекающая добавка для бетонов и растворов",previewImg:i(1736),benifits:[{benifit:"Значительное увеличение морозостойкости бетона, в том числе в растворах солей"},{benifit:"Повышение подвижности и удобоукладываемости бетонной смеси"},{benifit:"Повышение сегрегационной устойчивости бетонной смеси"},{benifit:"Повышение качества лицевой поверхности бетона"},{benifit:"Не содержит хлоридов или других веществ, вызывающих коррозию арматуры"}],detailText:"SikaControl®-95 Aer – воздухововлекающая добавка нового поколения для бетонов и растворов. Применяется для создания в бетоне системы закрытых и равномерно распределённых в объёме пор определённого размера, обеспечивающих бетонным конструкциям высокие показатели по морозостойкости. Соответствует требованиям ТУ 20.59.59-036-13613997-2019",descriptionItems:[{name:"Применение",items:[{item:"Мосты, путепроводы и эстакады"},{item:"Дороги, тротуары, паркинги, отмостки"},{item:"Тротуарная плитка (вибролитьё)"},{item:"Взлётно-посадочные полосы и др. аэродромные сооружения"},{item:"Гидротехнические сооружения"},{item:"Элементы тоннелей"}]},{name:"Преимущества",items:[{item:"Значительное увеличение морозостойкости бетона, в том числе в растворах солей"},{item:"Повышение подвижности и удобоукладываемости бетонной смеси"},{item:"Повышение сегрегационной устойчивости бетонной смеси"},{item:"Повышение водонепроницаемости бетона"},{item:"Повышение трещиностойкости бетона"},{item:"Частичная компенсация негативного влияния на бетонную смесь неоптимального гранулометрического состава"},{item:"Получение бетонов с высокой стойкостью по отношению к химическим и механическим воздействиям"},{item:"Повышение качества лицевой поверхности бетона"},{item:"Не содержит хлоридов или других веществ, вызывающих коррозию арматуры"}]},{name:"Упаковка",items:[{item:"Контейнер 1000 кг, канистры 10, 5 и 0,9 л"}]},{name:"Цвет",items:[{item:"Жидкость светло-коричневого цвета"}]}],chars:[{name:"Химическая основа",value:"Поверхностно-активные вещества"},{name:"Срок годности",value:"12 месяцев с даты изготовления"},{name:"Условия хранения",value:"В герметичной заводской упаковке, в сухом помещении, предохраняя от воздействия прямых солнечных лучей и замораживания, при температуре от +5°С до +35°С. В случае замерзания возможно ухудшение свойств. Для дальнейшего использования добавки, подвергнутой замораживанию, необходимо проведение дополнительных лабораторных испытаний для подтверждения выполнения установленных заказчиком требований"},{name:"Плотность",value:"0,998 – 1,008 кг/дм"},{name:"Значение pH",value:"9,0 – 11,0"}],usage:[{title:"Информация по применению",info:[{name:"Совместимость",value:"Для получения необходимых свойств бетонной смеси при использовании SikaControl®-95 Aer с другими добавками необходимо провести лабораторные испытания для оптимизации состава бетонной смеси"}]},{title:"Расход",info:[{name:"Рекомендуемая дозировка",value:"0,1 – 2,0% жидкой добавки от массы цемента. Дозировка добавки может варьироваться как в большую, так и в меньшую сторону в зависимости от требований к бетонной смеси, при этом оптимальная дозировка устанавливается на основании лабораторных испытаний"}]},{title:"Схема применения",info:[{name:"Инструкции по применению",value:"SikaControl®-95 Aer добавляется в воду замеса или одновременно с ней в миксер. Для получения однородной бетонной смеси время перемешивания должно составлять не менее 90 секунд при наладке выпуска производственной партии бетонной смеси. После наладки время перемешивания в стационарном смесителе может быть сокращено при учёте того, что дальнейшее перемешивание будет осуществляться в автобетоносмесителе. Добавка должна дозироваться отдельно от других добавок, используемых в бетоне. Дозировка рассчитывается на основании предварительных испытаний и измерения содержания воздуха в бетонной смеси на строительной площадке. Дозировка добавка зависит от: параметров мелкого заполнителя; количества тонкодисперсных наполнителей; количества, марки и типа цемента; времени перемешивания; температуры бетонной смеси."}]}],docs:[{title:"SikaPaver® HC-26",filePath:"/assets/tmp/map-spb.jpg",description:"Техническое описание",fileSize:"10 MB",brochure:i(9159)}]},{name:"SikaControl®-95 Aer",descr:"Воздухововлекающая добавка для бетонов и растворов",previewImg:i(1736),benifits:[{benifit:"Значительное увеличение морозостойкости бетона, в том числе в растворах солей"},{benifit:"Повышение подвижности и удобоукладываемости бетонной смеси"},{benifit:"Повышение сегрегационной устойчивости бетонной смеси"},{benifit:"Повышение качества лицевой поверхности бетона"},{benifit:"Не содержит хлоридов или других веществ, вызывающих коррозию арматуры"}]}]},9159:function(t,e,i){t.exports=i.p+"img/brochure.98faf021.jpeg"}}]);
//# sourceMappingURL=395.ae0e922b.js.map