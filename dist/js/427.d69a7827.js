"use strict";(self["webpackChunksikarus"]=self["webpackChunksikarus"]||[]).push([[427],{1439:function(t,e,s){s.r(e),s.d(e,{default:function(){return C}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"object"},[e("div",{staticClass:"grid-container section-margin"},[e("v-row",[e("v-col",{attrs:{cols:"12",lg:"6"}},[e("slider-big",{attrs:{items:t.object.sliderItems}}),e("div",{staticClass:"text-left"},[e("span",[t._v(t._s(t.object.date))]),t._v(" // "),e("span",[t._v(t._s(t.object.location))])])],1),e("v-col",{attrs:{cols:"12",lg:"6"}},[t.object.about?e("div",{staticClass:"object__about"},[e("h4",[t._v("О проекте")]),e("ul",{staticClass:"pt-4"},t._l(t.object.about,(function(s,i){return s.head||s.value?e("li",{key:i},[e("h6",[t._v(t._s(s.head))]),e("span",[t._v(t._s(s.value))])]):t._e()})),0)]):t._e()])],1),e("p",{staticClass:"object__text",domProps:{innerHTML:t._s(t.object.detailText)}}),e("h3",[t._v("Использованные продукты Sika")]),e("ul",{staticClass:"object__products"},t._l(t.products,(function(s,i){return e("li",{key:i},[e("router-link",{attrs:{to:"/product"}}),e("h4",[t._v(" "+t._s(s.name)+" ")]),e("div",[t._v(t._s(s.descr))])],1)})),0),e("brochure",{attrs:{title:t.title,description:t.description,brochure:t.brochure,filePath:t.filePath,fileSize:t.fileSize}})],1)])},r=[],a=s(8392),l=s(1814),n=s(4045),o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"slider-big"},[e("div",{staticClass:"swiper swiper-big mySwiper"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.items,(function(t,s){return e("div",{key:s,staticClass:"swiper-slide"},[e("img",{attrs:{src:t.img,alt:t.name}})])})),0)]),e("div",{staticClass:"swiper swiper-big mySwiper2"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.items,(function(t,s){return e("div",{key:s,staticClass:"swiper-slide"},[e("img",{attrs:{src:t.img,alt:t.name}})])})),0),e("div",{staticClass:"swiper-navigation"},[e("button",{staticClass:"swiper-button-prev"},[e("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"366",height:"1024",viewBox:"0 0 366 1024"}},[e("g",{attrs:{id:"icomoon-ignore"}}),e("path",{attrs:{d:"M358.4 310.272q0 7.168-6.144 12.288l-224.256 225.28 224.256 224.256q6.144 6.144 6.144 13.312t-6.144 13.312l-28.672 28.672q-5.12 5.12-12.288 5.12t-13.312-5.12l-266.24-267.264q-6.144-5.12-6.144-12.288t6.144-13.312l266.24-266.24q5.12-6.144 13.312-6.144t12.288 6.144l28.672 28.672q6.144 5.12 6.144 13.312z"}})])]),e("button",{staticClass:"swiper-button-next"},[e("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"366",height:"1024",viewBox:"0 0 366 1024"}},[e("g",{attrs:{id:"icomoon-ignore"}}),e("path",{attrs:{d:"M339.968 547.84q0 7.168-5.12 12.288l-267.264 267.264q-5.12 5.12-12.288 5.12t-13.312-5.12l-28.672-28.672q-6.144-6.144-6.144-13.312t6.144-13.312l224.256-224.256-224.256-225.28q-6.144-5.12-6.144-12.288t6.144-13.312l28.672-28.672q5.12-6.144 13.312-6.144t12.288 6.144l267.264 266.24q5.12 5.12 5.12 13.312z"}})])])])])])},c=[],u=s(1304),d={name:"swiper-big",props:["title","items"],components:{Swiper:u.RC,SwiperSlide:u.SwiperSlide,FreeMode:u.U1,Thumbs:u.WO},mounted(){const t=new u.RC(".mySwiper2",{freeMode:!0,modules:[u.Vx],spaceBetween:5,slidesPerView:3,watchSlidesVisibility:!0,watchSlidesProgress:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{360:{slidesPerView:3,spaceBetween:5},688:{slidesPerView:6,spaceBetween:5},1016:{slidesPerView:7,spaceBetween:15}}});new u.RC(".mySwiper",{modules:[u.WO],slidesPerView:1,spaceBetween:15,thumbs:{swiper:t}})}},p=d,v=s(1656),h=(0,v.A)(p,o,c,!1,null,null,null),w=h.exports,b=s(9732),_=s(5132),m={name:"Object",components:{hero:a.A,brochure:n.A,sliderBig:w,breadcrumbs:b.A},data(){return{title:"Брошюра 2",description:"Описание брошюры 2",brochure:s(9159),filePath:s(9159),fileSize:"10 Mb"}},computed:{object(){return l.A[0].objects[3]},products(){return _.A}},mounted(){}},g=m,f=(0,v.A)(g,i,r,!1,null,null,null),C=f.exports},4045:function(t,e,s){s.d(e,{A:function(){return u}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"brochure"},[e("div",{staticClass:"brochure__item"},[e("a",{staticClass:"brochure__link",attrs:{target:"_blank",href:t.filePath}},[e("div",{staticClass:"brochure__content text-left"},[e("i",{staticClass:"cmp-icon cmp-icon-download mr-4"}),e("h5",{staticClass:"brochure__content--title mb-0 mr-4"},[t._v(" "+t._s(t.title)+" ")])]),e("div",{staticClass:"d-flex align-center"},[t.description?e("div",{staticClass:"cmp-line-clamp cmp-line-clamp--3 mr-4"},[t._v(t._s(t.description))]):t._e(),t.fileSize?e("span",[t._v(t._s(t.fileSize))]):t._e()])]),e("button",{staticClass:"download--btn"},[e("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"25",height:"25",viewBox:"0 0 768 768"}},[e("g",{attrs:{id:"icomoon-ignore"}}),e("path",{attrs:{fill:"#000",d:"M415.5 288h177l-177-175.5v175.5zM511.5 511.5v-63h-96v-96h-63v96h-96v63h96v96h63v-96h96zM448.5 64.5l192 192v384q0 25.5-19.5 44.25t-45 18.75h-384q-25.5 0-45-18.75t-19.5-44.25l1.5-513q0-25.5 18.75-44.25t44.25-18.75h256.5z"}})])])]),e("img",{staticClass:"brochure__brochure",attrs:{src:t.brochure,alt:"Car Park Systems for Manufaktura"}})])},r=[],a=s(2191),l={name:"brochure",props:["title","description","filePath","brochure","fileSize"],methods:{initActiveBtn(){(0,a.v5)()}},mounted(){this.initActiveBtn()}},n=l,o=s(1656),c=(0,o.A)(n,i,r,!1,null,null,null),u=c.exports}}]);
//# sourceMappingURL=427.d69a7827.js.map