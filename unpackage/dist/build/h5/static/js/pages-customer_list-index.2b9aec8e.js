(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-customer_list-index"],{"09bb":function(t,e,i){"use strict";i.r(e);var r=i("d491"),d=i("6d48");for(var o in d)"default"!==o&&function(t){i.d(e,t,(function(){return d[t]}))}(o);i("7ddc");var a,n=i("f0c5"),s=Object(n["a"])(d["default"],r["b"],r["c"],!1,null,"1569e050",null,!1,r["a"],a);e["default"]=s.exports},"69e3":function(t,e,i){var r=i("c844");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var d=i("4f06").default;d("99bf3774",r,!0,{sourceMap:!1,shadowMode:!1})},"6d48":function(t,e,i){"use strict";i.r(e);var r=i("ad8f"),d=i.n(r);for(var o in r)"default"!==o&&function(t){i.d(e,t,(function(){return r[t]}))}(o);e["default"]=d.a},"7ddc":function(t,e,i){"use strict";var r=i("69e3"),d=i.n(r);d.a},ad8f:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i("4a5f"),d={name:"CustomerList",data:function(){return{list:[],productId:0,orderId:""}},methods:{getList:function(){var t=this;(0,r.serviceList)().then((function(e){t.list=e.data}))},goPage:function(t){uni.navigateTo({url:"/pages/customer_list/chat?uid="+t.uid+"&productId="+this.productId+"&orderId="+this.orderId})}},onLoad:function(t){this.getList(),t.productId&&(this.productId=t.productId),t.orderId&&(this.orderId=t.orderId)}};e.default=d},c844:function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,".CustomerList[data-v-1569e050]{margin-top:%?13?%}.CustomerList .item[data-v-1569e050]{height:%?138?%;border-bottom:1px solid #eee;padding:0 %?24?%;background-color:#fff}.CustomerList .item .pictrue[data-v-1569e050]{width:%?90?%;height:%?90?%;border-radius:50%;border:%?3?% solid #fff;box-shadow:0 0 %?1?% %?5?% #f3f3f3}.CustomerList .item .pictrue img[data-v-1569e050]{width:100%;height:100%;border-radius:50%}.CustomerList .item .text[data-v-1569e050]{width:%?582?%;font-size:%?32?%;color:#000}",""]),t.exports=e},d491:function(t,e,i){"use strict";var r,d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"CustomerList"},t._l(t.list,(function(e){return i("div",{key:e.id,staticClass:"item acea-row row-between-wrapper",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goPage(e)}}},[i("div",{staticClass:"pictrue"},[i("img",{attrs:{src:e.avatar}})]),i("div",{staticClass:"text line1"},[t._v(t._s(e.nickname))])])})),0)},o=[];i.d(e,"b",(function(){return d})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return r}))}}]);