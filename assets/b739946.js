(window.webpackJsonp=window.webpackJsonp||[]).push([[26,5,15,17],{256:function(t,e,r){var content=r(261);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(70).default)("3bdfe8ed",content,!0,{sourceMap:!1})},257:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(258);var n=r(19);function o(t){return(t*n.snipcart.factor).toFixed(2)}},258:function(t,e,r){"use strict";var n=r(5),o=r(1),l=r(3),c=r(56),d=r(193),f=r(192),m=r(4),v=o.RangeError,h=o.String,x=Math.floor,_=l(f),C=l("".slice),y=l(1..toFixed),w=function(t,e,r){return 0===e?r:e%2==1?w(t,e-1,r*t):w(t*t,e/2,r)},k=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=x(n/1e7)},D=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=x(r/t),r=r%t*1e7},S=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=h(data[t]);s=""===s?e:s+_("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:m((function(){return"0.000"!==y(8e-5,3)||"1"!==y(.9,0)||"1.25"!==y(1.255,2)||"1000000000000000128"!==y(0xde0b6b3a7640080,0)}))||!m((function(){y({})}))},{toFixed:function(t){var e,r,n,o,l=d(this),f=c(t),data=[0,0,0,0,0,0],m="",x="0";if(f<0||f>20)throw v("Incorrect fraction digits");if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return h(l);if(l<0&&(m="-",l=-l),l>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(l*w(2,69,1))-69)<0?l*w(2,-e,1):l/w(2,e,1),r*=4503599627370496,(e=52-e)>0){for(k(data,0,r),n=f;n>=7;)k(data,1e7,0),n-=7;for(k(data,w(10,n,1),0),n=e-1;n>=23;)D(data,1<<23),n-=23;D(data,1<<n),k(data,1,1),D(data,2),x=S(data)}else k(data,0,r),k(data,1<<-e,0),x=S(data)+_("0",f);return x=f>0?m+((o=x.length)<=f?"0."+_("0",f-o)+x:C(x,0,o-f)+"."+C(x,o-f)):m+x}})},259:function(t,e,r){"use strict";r.r(e);r(141),r(10),r(30);var n=r(19),o=r(68),l=r(140),c=r(257),d=r(262),f={name:"productItem",props:{product:Object},data:function(){var t=this,e=o.find((function(e){return e.name===t.product.category})),r=l.find((function(e){return e.name===t.product.brand}));return{config:n,categoryData:e,brandData:r}},computed:{calculatedPrice:function(){return Object(c.a)(this.product.price)}},methods:{decode:function(t){return d.decode(t)}}},m=(r(260),r(18)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"course-item bg-light"},[r("div",{staticClass:"position-relative overflow-hidden"},[r("NuxtLink",{attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[r("nuxt-img",{staticClass:"img-fluid",attrs:{preset:"productThumbnail",src:""+t.config.imageFolder+t.product.localThumbs[0],alt:t.product.linkTitle}})],1),t._v(" "),r("div",{staticClass:"w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"},[r("NuxtLink",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3",staticStyle:{"border-radius":"30px"},attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[t._v("Testbericht")])],1)],1),t._v(" "),r("div",{staticClass:"text-center p-4 pb-0"},[r("div",{staticClass:"mb-0 h3"},[t._v(t._s(t.calculatedPrice)+" €")]),t._v(" "),r("div",{staticClass:"mb-3"},[t._l(t.product.stars,(function(t){return r("small",{key:t,staticClass:"pl-3 fa fa-star text-primary"})})),t._v(" "),t._l(5-t.product.stars,(function(t){return r("small",{key:t,staticClass:"fa fa-star text-default"})})),t._v(" "),r("small",[t._v("("+t._s(t.product.reviewCount)+")")])],2),t._v(" "),r("div",{staticClass:"mb-4 h5"},[r("nuxt-link",{staticClass:"noLinkStyle",attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.name}},[t._v("\n          "+t._s(t.product.name)+"\n        ")])],1)]),t._v(" "),r("div",{staticClass:"d-flex border-top"},[r("small",{staticClass:"flex-fill text-center border-end py-2"},[r("i",{staticClass:"fa fa-toilet text-primary me-2"}),r("NuxtLink",{attrs:{to:"/marken/"+t.brandData.slug+"/",title:t.decode(t.product.brand)},domProps:{innerHTML:t._s(t.product.brand)}})],1),t._v(" "),r("small",{staticClass:"flex-fill text-center border-end py-2"},[r("i",{staticClass:"fa text-primary me-2"}),r("NuxtLink",{attrs:{to:"/kategorie/"+t.categoryData.slug+"/",title:t.categoryData.name}},[t._v("\n          "+t._s(t.categoryData.name))])],1)])])])}),[],!1,null,"457de142",null);e.default=component.exports},260:function(t,e,r){"use strict";r(256)},261:function(t,e,r){var n=r(69)(!1);n.push([t.i,".course-item[data-v-457de142]{min-height:450px;display:flex;flex-direction:column}.course-item .text-center[data-v-457de142]{flex-grow:1;display:flex;flex-direction:column;justify-content:space-between}.mb-4 h5[data-v-457de142]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}",""]),t.exports=n},263:function(t,e,r){"use strict";r.r(e);var n={name:"products",props:{products:Array}},o=r(18),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},t._l(t.products,(function(t,e){return r("div",{key:e,staticClass:"col-lg-2 col-md-4 col-sm-6 col-xs-12 fadeInUp"},[r("ProductItem",{staticClass:"mt-5",attrs:{product:t}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:r(259).default})},265:function(t,e,r){"use strict";r.r(e);r(20),r(10);var n=r(19),o=r(68),l=r(50);for(var c=[],i=0;i<=l.length;i++)try{c.push(l[i].brand)}catch(t){}c=c.filter((function(t,e,r){return r.indexOf(t)===e}));var d={name:"categorySidebar",data:function(){return{config:n,categories:o}}},f=r(18),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row"},[r("div",{staticClass:"d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"},t._l(t.categories,(function(e,n){return r("div",{key:n,staticClass:"dropdown"},[r("nuxt-link",{staticClass:"d-flex align-items-center text-white text-decoration-none",class:e.subCategories.length>=1&&"dropdown-toggle",attrs:{to:"/kategorie/"+e.slug+"/",title:""+e.name,id:"dropdownUser1","data-bs-toggle":e.subCategories.length>=1&&"dropdown","aria-expanded":"false"}},[r("strong",[t._v(t._s(e.name))])]),t._v(" "),e.subCategories.length>=1?r("ul",{staticClass:"dropdown-menu dropdown-menu-dark text-small shadow",attrs:{"aria-labelledby":"dropdownUser1"}},[r("li",t._l(e.subCategories,(function(e,n){return r("a",{key:n,staticClass:"dropdown-item",attrs:{href:"/kategorie/"+e.slug+"/"}},[t._v(t._s(e.name))])})),0)]):t._e()],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports},266:function(t,e,r){r(267)},267:function(t,e,r){"use strict";var n=r(5),o=r(1),l=r(13),c=r(3),d=r(25),f=r(8),m=r(110),v=r(14),h=r(51),x=r(111),_=r(194),C=r(6),y=r(32),w=C("replace"),k=RegExp.prototype,D=o.TypeError,S=c(x),E=c("".indexOf),T=c("".replace),L=c("".slice),P=Math.max,j=function(t,e,r){return r>t.length?-1:""===e?r:E(t,e,r)};n({target:"String",proto:!0},{replaceAll:function(t,e){var r,n,o,c,x,C,I,O,M,N=d(this),R=0,$=0,F="";if(null!=t){if((r=m(t))&&(n=v(d("flags"in k?t.flags:S(t))),!~E(n,"g")))throw D("`.replaceAll` does not allow non-global regexes");if(o=h(t,w))return l(o,t,N,e);if(y&&r)return T(v(N),t,e)}for(c=v(N),x=v(t),(C=f(e))||(e=v(e)),I=x.length,O=P(1,I),R=j(c,x,0);-1!==R;)M=C?v(e(x,R,c)):_(x,c,R,[],void 0,e),F+=L(c,$,R)+M,$=R+I,R=j(c,x,R+O);return $<c.length&&(F+=L(c,$)),F}})},290:function(t,e,r){"use strict";r.r(e);r(33),r(71),r(266),r(30),r(20),r(10);var n=r(19),o=r(50),l=r(109),c={name:"singleBrandComponent",head:function(){return{title:this.seoData&&this.seoData.seo&&this.seoData.seo.title?this.seoData.seo.title:n.brandSeo.defaultTitle.replaceAll("$HERSTELLER",this.brandData.name),meta:[{hid:"description",name:"description",content:this.seoData&&this.seoData.seo&&this.seoData.seo.metaDescription?this.seoData.seo.metaDescription:n.brandSeo.defaultMetaDescription.replaceAll("$HERSTELLER",this.brandData.name)},{hid:"robots",name:"robots",content:this.seoData&&this.seoData.seo&&this.seoData.seo.robots?this.seoData.seo.robots:n.brandSeo.defaultRobots}]}},data:function(){var t=this.$route.params.slug,e=l.a.brands.getBrandFromSlug(t),r=l.a.seo.getSeoForBrand(e);return{filteredProducts:o.filter((function(t){return t.brand===e.name})),brandData:e,seoData:r,config:n}}},d=r(18),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container-fluid py-5"},[r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row g-5"},[r("div",{staticClass:"col-lg-2 fadeInUp"},[r("CategorySidebar")],1),t._v(" "),r("div",{staticClass:"col-lg-10 fadeInUp"},[r("div",{staticClass:"text-center fadeInUp"},[r("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n              "+t._s(t.config.seo.mainKeyword)+"\n            ")]),t._v(" "),r("h1",{staticClass:"mb-5 h2",domProps:{innerHTML:t._s(t.brandData.name)}})]),t._v(" "),r("Products",{attrs:{products:t.filteredProducts}})],1)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CategorySidebar:r(265).default,Products:r(263).default})}}]);