"use strict";(self["webpackChunksikarus"]=self["webpackChunksikarus"]||[]).push([[395],{1736:function(t,i,e){t.exports=e.p+"img/product1.6d7317e2.jpg"},2191:function(t,i,e){function s(){const t=document.querySelectorAll(".accordion-header"),i=document.querySelectorAll(".download--btn");t.forEach((t=>{t.addEventListener("click",(function(){const i=this.parentElement,e=i.querySelector(".accordion-content");e.classList.toggle("active");const s=t.querySelector(".arrow"),a=s.classList.toggle("active");a?s.classList.add("rotate"):s.classList.remove("rotate")}))})),i.forEach((t=>{t.addEventListener("click",(()=>{t.classList.toggle("download--btn--active")}))}))}function a(){const t=document.querySelectorAll(".download--btn");t.forEach((t=>{t.addEventListener("click",(()=>{t.classList.toggle("download--btn--active")}))}))}e.d(i,{JC:function(){return s},v5:function(){return a}})},4045:function(t,i,e){e.d(i,{A:function(){return u}});var s=function(){var t=this,i=t._self._c;return i("div",{staticClass:"brochure"},[i("div",{staticClass:"brochure__item"},[i("a",{staticClass:"brochure__link",attrs:{target:"_blank",href:t.filePath}},[i("div",{staticClass:"brochure__content text-left"},[i("i",{staticClass:"cmp-icon cmp-icon-download mr-4"}),i("h5",{staticClass:"brochure__content--title mb-0 mr-4"},[t._v(" "+t._s(t.title)+" ")])]),i("div",{staticClass:"d-flex align-center"},[t.description?i("div",{staticClass:"cmp-line-clamp cmp-line-clamp--3 mr-4"},[t._v(t._s(t.description))]):t._e(),t.fileSize?i("span",[t._v(t._s(t.fileSize))]):t._e()])]),i("button",{staticClass:"download--btn"},[i("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 768 768"}},[i("g",{attrs:{id:"icomoon-ignore"}}),i("path",{attrs:{fill:"#000",d:"M415.5 288h177l-177-175.5v175.5zM511.5 511.5v-63h-96v-96h-63v96h-96v63h96v96h63v-96h96zM448.5 64.5l192 192v384q0 25.5-19.5 44.25t-45 18.75h-384q-25.5 0-45-18.75t-19.5-44.25l1.5-513q0-25.5 18.75-44.25t44.25-18.75h256.5z"}})])])]),i("img",{staticClass:"brochure__brochure",attrs:{src:t.brochure,alt:"Car Park Systems for Manufaktura"}})])},a=[],c=e(2191),n={name:"brochure",props:["title","description","filePath","brochure","fileSize"],methods:{initActiveBtn(){(0,c.v5)()}},mounted(){this.initActiveBtn()}},r=n,o=e(1656),l=(0,o.A)(r,s,a,!1,null,null,null),u=l.exports},4395:function(t,i,e){e.r(i),e.d(i,{default:function(){return v}});var s=function(){var t=this,i=t._self._c;return i("div",{staticClass:"product"},[i("div",{staticClass:"grid-container section-margin"},[i("div",{staticClass:"product__main"},[t.product.previewImg?i("img",{staticClass:"product__img",attrs:{src:t.product.previewImg}}):t._e(),i("div",{staticClass:"product__right"},[i("h1",[t._v(" "+t._s(t.product.name))]),i("h4",{staticClass:"cmp-line-clamp cmp-line-clamp--3"},[t._v(t._s(t.product.descr))]),i("p",[t._v(t._s(t.product.detailText))]),i("ul",{staticClass:"cmp-product__attributes"},t._l(t.product.benifits,(function(e,s){return i("li",[t._v(" "+t._s(e.benifit)+" ")])})),0),i("div",{staticClass:"product__main--links"},[i("a",[i("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"19",height:"19",viewBox:"0 0 1024 1024"}},[i("g",{attrs:{id:"icomoon-ignore"}}),i("path",{attrs:{fill:"#000",d:"M883.968 670.56l-30.656 162.304h-682.624l-30.656-162.304h-76.32v257.984h896.576v-257.984h-76.32zM864.64 382.272h-224.704v-93.76h-255.808v93.76h-222.56l349.248 365.184 353.824-365.184zM639.904 127.424h-255.808v34.112h255.808v-34.112zM639.904 191.136h-255.808v65.216h255.808v-65.216z"}})]),t._v(" Техническое описание")]),i("a",[t._v("Показать все документы")])])])])]),i("div",{staticClass:"product__info"},[i("div",{staticClass:"grid-container section-margin"},[t._m(0),i("ul",{staticClass:"product__info--description"},t._l(t.product.descriptionItems,(function(e,s){return i("li",[i("h4",[t._v(t._s(e.name))]),i("ul",{staticClass:"list-style"},t._l(e.items,(function(e,s){return i("li",{staticClass:"list-style"},[t._v(" "+t._s(e.item)+" ")])})),0)])})),0),i("div",{staticClass:"product__info--chars"},[i("h2",[t._v("Характеристики")]),i("ul",{staticClass:"accordion"},[i("li",{staticClass:"accordion-list"},[i("h4",{staticClass:"accordion-header"},[t._v(" Информация о материале "),i("svg",{staticClass:"arrow",attrs:{viewBox:"0 0 887 1024"}},[i("path",{attrs:{d:"M64.512 285.696l378.88 364.544 380.928-364.544q22.528-26.624 49.152 0 26.624 22.528 0 49.152l-405.504 401.408q-22.528 22.528-49.152 0l-405.504-401.408q-26.624-26.624 0-49.152 24.576-24.576 51.2 0z"}})])]),i("div",{staticClass:"text-left accordion-content"},[i("ul",{staticClass:"product__info--list"},t._l(t.product.chars,(function(e,s){return i("li",[i("h5",[t._v(t._s(e.name)+" ")]),i("p",[t._v(t._s(e.value))])])})),0)])])])]),i("div",{staticClass:"product__info--usage"},[i("h2",[t._v("Применение")]),i("ul",{staticClass:"accordion"},t._l(t.product.usage,(function(e,s){return i("li",{staticClass:"accordion-list"},[i("h4",{staticClass:"accordion-header"},[t._v(" "+t._s(e.title)+" "),i("svg",{staticClass:"arrow",attrs:{viewBox:"0 0 887 1024"}},[i("path",{attrs:{d:"M64.512 285.696l378.88 364.544 380.928-364.544q22.528-26.624 49.152 0 26.624 22.528 0 49.152l-405.504 401.408q-22.528 22.528-49.152 0l-405.504-401.408q-26.624-26.624 0-49.152 24.576-24.576 51.2 0z"}})])]),i("div",{staticClass:"text-left accordion-content"},[i("ul",{staticClass:"product__info--list"},t._l(e.info,(function(e,s){return i("li",[i("h5",[t._v(t._s(e.name)+" ")]),i("p",[t._v(t._s(e.value))])])})),0)])])})),0)]),i("div",{staticClass:"product__info--docs"},[i("brochure",{attrs:{title:t.docTitle,description:t.description,fileSize:t.fileSize,filePath:t.filePath,brochure:t.brochure}})],1)])])])},a=[function(){var t=this,i=t._self._c;return i("nav",{staticClass:"product__info--navigation"},[i("ul",[i("li",[t._v("Описание")]),i("li",[t._v("Характеристики")]),i("li",[t._v("Применение")]),i("li",[t._v("Документы")]),i("li",[t._v("Видео")])])])}],c=e(5132),n=e(4045),r=e(2191),o={data(){return{docTitle:c.A[0].docs[0].title,description:c.A[0].docs[0].description,fileSize:c.A[0].docs[0].fileSize,filePath:c.A[0].docs[0].filePath,brochure:c.A[0].docs[0].brochure,level1:"Продукция",level2:"Добавки в бетон",level3:"Товарный бетон",level4:c.A[0].name}},components:{brochure:n.A},computed:{product(){return c.A[0]}},methods:{initAccordeon(){(0,r.JC)()}},mounted(){this.initAccordeon()}},l=o,u=e(1656),d=(0,u.A)(l,s,a,!1,null,null,null),v=d.exports},5132:function(t,i,e){i.A=[{name:"SikaControl®-95 Aer",descr:"Воздухововлекающая добавка для бетонов и растворов",previewImg:e(1736),benifits:[{benifit:"Значительное увеличение морозостойкости бетона, в том числе в растворах солей"},{benifit:"Повышение подвижности и удобоукладываемости бетонной смеси"},{benifit:"Повышение сегрегационной устойчивости бетонной смеси"},{benifit:"Повышение качества лицевой поверхности бетона"},{benifit:"Не содержит хлоридов или других веществ, вызывающих коррозию арматуры"}],detailText:"SikaControl®-95 Aer – воздухововлекающая добавка нового поколения для бетонов и растворов. Применяется для создания в бетоне системы закрытых и равномерно распределённых в объёме пор определённого размера, обеспечивающих бетонным конструкциям высокие показатели по морозостойкости. Соответствует требованиям ТУ 20.59.59-036-13613997-2019",descriptionItems:[{name:"Применение",items:[{item:"Мосты, путепроводы и эстакады"},{item:"Дороги, тротуары, паркинги, отмостки"},{item:"Тротуарная плитка (вибролитьё)"},{item:"Взлётно-посадочные полосы и др. аэродромные сооружения"},{item:"Гидротехнические сооружения"},{item:"Элементы тоннелей"}]},{name:"Преимущества",items:[{item:"Значительное увеличение морозостойкости бетона, в том числе в растворах солей"},{item:"Повышение подвижности и удобоукладываемости бетонной смеси"},{item:"Повышение сегрегационной устойчивости бетонной смеси"},{item:"Повышение водонепроницаемости бетона"},{item:"Повышение трещиностойкости бетона"},{item:"Частичная компенсация негативного влияния на бетонную смесь неоптимального гранулометрического состава"},{item:"Получение бетонов с высокой стойкостью по отношению к химическим и механическим воздействиям"},{item:"Повышение качества лицевой поверхности бетона"},{item:"Не содержит хлоридов или других веществ, вызывающих коррозию арматуры"}]},{name:"Упаковка",items:[{item:"Контейнер 1000 кг, канистры 10, 5 и 0,9 л"}]},{name:"Цвет",items:[{item:"Жидкость светло-коричневого цвета"}]}],chars:[{name:"Химическая основа",value:"Поверхностно-активные вещества"},{name:"Срок годности",value:"12 месяцев с даты изготовления"},{name:"Условия хранения",value:"В герметичной заводской упаковке, в сухом помещении, предохраняя от воздействия прямых солнечных лучей и замораживания, при температуре от +5°С до +35°С. В случае замерзания возможно ухудшение свойств. Для дальнейшего использования добавки, подвергнутой замораживанию, необходимо проведение дополнительных лабораторных испытаний для подтверждения выполнения установленных заказчиком требований"},{name:"Плотность",value:"0,998 – 1,008 кг/дм"},{name:"Значение pH",value:"9,0 – 11,0"}],usage:[{title:"Информация по применению",info:[{name:"Совместимость",value:"Для получения необходимых свойств бетонной смеси при использовании SikaControl®-95 Aer с другими добавками необходимо провести лабораторные испытания для оптимизации состава бетонной смеси"}]},{title:"Расход",info:[{name:"Рекомендуемая дозировка",value:"0,1 – 2,0% жидкой добавки от массы цемента. Дозировка добавки может варьироваться как в большую, так и в меньшую сторону в зависимости от требований к бетонной смеси, при этом оптимальная дозировка устанавливается на основании лабораторных испытаний"}]},{title:"Схема применения",info:[{name:"Инструкции по применению",value:"SikaControl®-95 Aer добавляется в воду замеса или одновременно с ней в миксер. Для получения однородной бетонной смеси время перемешивания должно составлять не менее 90 секунд при наладке выпуска производственной партии бетонной смеси. После наладки время перемешивания в стационарном смесителе может быть сокращено при учёте того, что дальнейшее перемешивание будет осуществляться в автобетоносмесителе. Добавка должна дозироваться отдельно от других добавок, используемых в бетоне. Дозировка рассчитывается на основании предварительных испытаний и измерения содержания воздуха в бетонной смеси на строительной площадке. Дозировка добавка зависит от: параметров мелкого заполнителя; количества тонкодисперсных наполнителей; количества, марки и типа цемента; времени перемешивания; температуры бетонной смеси."}]}],docs:[{title:"SikaPaver® HC-26",filePath:"/assets/tmp/map-spb.jpg",description:"Техническое описание",fileSize:"10 MB",brochure:e(9159)}]},{name:"SikaControl®-95 Aer",descr:"Воздухововлекающая добавка для бетонов и растворов",previewImg:e(1736),benifits:[{benifit:"Значительное увеличение морозостойкости бетона, в том числе в растворах солей"},{benifit:"Повышение подвижности и удобоукладываемости бетонной смеси"},{benifit:"Повышение сегрегационной устойчивости бетонной смеси"},{benifit:"Повышение качества лицевой поверхности бетона"},{benifit:"Не содержит хлоридов или других веществ, вызывающих коррозию арматуры"}]}]},9159:function(t,i,e){t.exports=e.p+"img/brochure.98faf021.jpeg"}}]);
//# sourceMappingURL=395.1c2882b3.js.map