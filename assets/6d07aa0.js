(window.webpackJsonp=window.webpackJsonp||[]).push([[12,15],{256:function(t,e,r){var content=r(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(70).default)("3bdfe8ed",content,!0,{sourceMap:!1})},257:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(258);var n=r(19);function o(t){return(t*n.snipcart.factor).toFixed(2)}},258:function(t,e,r){"use strict";var n=r(5),o=r(1),c=r(3),l=r(56),d=r(193),f=r(192),v=r(4),m=o.RangeError,x=o.String,h=Math.floor,_=c(f),y=c("".slice),C=c(1..toFixed),k=function(t,e,r){return 0===e?r:e%2==1?k(t,e-1,r*t):k(t*t,e/2,r)},w=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=h(n/1e7)},P=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=h(r/t),r=r%t*1e7},j=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=x(data[t]);s=""===s?e:s+_("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:v((function(){return"0.000"!==C(8e-5,3)||"1"!==C(.9,0)||"1.25"!==C(1.255,2)||"1000000000000000128"!==C(0xde0b6b3a7640080,0)}))||!v((function(){C({})}))},{toFixed:function(t){var e,r,n,o,c=d(this),f=l(t),data=[0,0,0,0,0,0],v="",h="0";if(f<0||f>20)throw m("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return x(c);if(c<0&&(v="-",c=-c),c>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(c*k(2,69,1))-69)<0?c*k(2,-e,1):c/k(2,e,1),r*=4503599627370496,(e=52-e)>0){for(w(data,0,r),n=f;n>=7;)w(data,1e7,0),n-=7;for(w(data,k(10,n,1),0),n=e-1;n>=23;)P(data,1<<23),n-=23;P(data,1<<n),w(data,1,1),P(data,2),h=j(data)}else w(data,0,r),w(data,1<<-e,0),h=j(data)+_("0",f);return h=f>0?v+((o=h.length)<=f?"0."+_("0",f-o)+h:y(h,0,o-f)+"."+y(h,o-f)):v+h}})},259:function(t,e,r){"use strict";r.r(e);r(141),r(10),r(30);var n=r(19),o=r(68),c=r(140),l=r(257),d=r(262),f={name:"productItem",props:{product:Object},data:function(){var t=this,e=o.find((function(e){return e.name===t.product.category})),r=c.find((function(e){return e.name===t.product.brand}));return{config:n,categoryData:e,brandData:r}},computed:{calculatedPrice:function(){return Object(l.a)(this.product.price)}},methods:{decode:function(t){return d.decode(t)}}},v=(r(260),r(18)),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"course-item bg-light"},[r("div",{staticClass:"position-relative overflow-hidden"},[r("NuxtLink",{attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[r("nuxt-img",{staticClass:"img-fluid",attrs:{preset:"productThumbnail",src:""+t.config.imageFolder+t.product.localThumbs[0],alt:t.product.linkTitle}})],1),t._v(" "),r("div",{staticClass:"w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"},[r("NuxtLink",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3",staticStyle:{"border-radius":"30px"},attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[t._v("Testbericht")])],1)],1),t._v(" "),r("div",{staticClass:"text-center p-4 pb-0"},[r("div",{staticClass:"mb-0 h3"},[t._v(t._s(t.calculatedPrice)+" €")]),t._v(" "),r("div",{staticClass:"mb-3"},[t._l(t.product.stars,(function(t){return r("small",{key:t,staticClass:"pl-3 fa fa-star text-primary"})})),t._v(" "),t._l(5-t.product.stars,(function(t){return r("small",{key:t,staticClass:"fa fa-star text-default"})})),t._v(" "),r("small",[t._v("("+t._s(t.product.reviewCount)+")")])],2),t._v(" "),r("div",{staticClass:"mb-4 h5"},[r("nuxt-link",{staticClass:"noLinkStyle",attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.name}},[t._v("\n          "+t._s(t.product.name)+"\n        ")])],1)]),t._v(" "),r("div",{staticClass:"d-flex border-top"},[r("small",{staticClass:"flex-fill text-center border-end py-2"},[r("i",{staticClass:"fa fa-toilet text-primary me-2"}),r("NuxtLink",{attrs:{to:"/marken/"+t.brandData.slug+"/",title:t.decode(t.product.brand)},domProps:{innerHTML:t._s(t.product.brand)}})],1),t._v(" "),r("small",{staticClass:"flex-fill text-center border-end py-2"},[r("i",{staticClass:"fa text-primary me-2"}),r("NuxtLink",{attrs:{to:"/kategorie/"+t.categoryData.slug+"/",title:t.categoryData.name}},[t._v("\n          "+t._s(t.categoryData.name))])],1)])])])}),[],!1,null,"457de142",null);e.default=component.exports},260:function(t,e,r){"use strict";r(256)},261:function(t,e,r){var n=r(69)(!1);n.push([t.i,".course-item[data-v-457de142]{min-height:450px;display:flex;flex-direction:column}.course-item .text-center[data-v-457de142]{flex-grow:1;display:flex;flex-direction:column;justify-content:space-between}.mb-4 h5[data-v-457de142]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}",""]),t.exports=n},278:function(t,e,r){"use strict";r.r(e);var n=r(19),o=r(109).a.products.getFeaturedProducts(),c={name:"popularProducts",data:function(){return{config:n,products:o}}},l=r(18),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-xxl py-5",attrs:{id:"testsieger"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"text-center fadeInUp"},[r("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n        "+t._s(t.config.seo.mainKeyword)+"\n      ")]),t._v(" "),r("div",{staticClass:"mb-5 h2"},[t._v("Beliebte Produkte")])]),t._v(" "),r("div",{staticClass:"row g-4 justify-content-center"},t._l(t.products,(function(t){return r("div",{key:t.name,staticClass:"col-lg-4 col-md-6 col-sm-8 col-xs-12 fadeInUp"},[r("ProductItem",{attrs:{product:t}})],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:r(259).default})}}]);