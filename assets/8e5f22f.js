(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{282:function(t,e,n){"use strict";n.r(e);var c=n(19);n(35);var o=c.seo.faq,r=function(t){return t.map((function(t,e){return{"@type":"Question",name:t.question,acceptedAnswer:{"@type":"Answer",text:t.answer}}}))}(o.faqs),l={name:"FaqPage",head:{title:o.title,meta:[{hid:"description",name:"description",content:o.metaDescription},{hid:"robots",name:"robots",content:o.robots}]},data:function(){return{faqData:r}},jsonld:function(){return{"@context":"https://schema.org","@graph":[{"@context":"https://schema.org","@type":"FAQPage",mainEntity:this.faqData}]}}},d=n(18),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container-xxl py-5 category",attrs:{id:"hersteller"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row g-3"},[n("div",{staticClass:"col-md-12"},[t._m(0),t._v(" "),n("div",{staticClass:"accordion",attrs:{id:"basicAccordion"}},t._l(t.faqData,(function(e,c){return n("div",{key:c,staticClass:"accordion-item"},[n("h2",{staticClass:"accordion-header",attrs:{id:"heading"+c}},[n("button",{staticClass:"accordion-button collapsed",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapse"+c,"aria-expanded":"false","aria-controls":"collapseOne"+c}},[t._v("\n                                    "+t._s(e.name)+"\n                                ")])]),t._v(" "),n("div",{staticClass:"accordion-collapse collapse",attrs:{id:"collapse"+c,"aria-labelledby":"heading"+c,"data-bs-parent":"#basicAccordion"}},[n("div",{staticClass:"accordion-body"},[t._v("\n                                    "+t._s(e.acceptedAnswer.text)+"\n                                ")])])])})),0)])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"text-center mb-4 mt-4"},[t._v("Häufig gestellte Fragen zum Thema Schlafsack")])])}],!1,null,null,null);e.default=component.exports}}]);