(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-goods_details_store-index"],{"07a5":function(t,e,a){"use strict";a.r(e);var i=a("6109"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},"20c9":function(t,e,a){var i=a("f2f1");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("57b84390",i,!0,{sourceMap:!1,shadowMode:!1})},"5a67":function(t,e,a){"use strict";var i=a("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.getProductDetail=n,e.getProductCode=r,e.collectAdd=s,e.collectDel=d,e.postCartAdd=c,e.getCategoryList=l,e.getProductslist=u,e.getProductHot=f,e.collectAll=g,e.getGroomList=p,e.getCollectUserList=h,e.getReplyList=v,e.getReplyConfig=m,e.getSearchKeyword=b,e.storeListApi=w;var o=i(a("452d"));function n(t){return o.default.get("product/detail/"+t,{},{noAuth:!0})}function r(t){return o.default.get("product/code/"+t,{})}function s(t,e){return o.default.post("collect/add",{id:t,product:void 0===e?"product":e})}function d(t,e){return o.default.post("collect/del",{id:t,category:void 0===e?"product":e})}function c(t){return o.default.post("cart/add",t)}function l(){return o.default.get("category",{},{noAuth:!0})}function u(t){return o.default.get("products",t,{noAuth:!0})}function f(t,e){return o.default.get("product/hot",{page:void 0===t?1:t,limit:void 0===e?4:e},{noAuth:!0})}function g(t,e){return o.default.post("collect/all",{id:t,category:void 0===e?"product":e})}function p(t,e){return o.default.get("groom/list/"+t,e,{noAuth:!0})}function h(t){return o.default.get("collect/user",t)}function v(t,e){return o.default.get("reply/list/"+t,e)}function m(t){return o.default.get("reply/config/"+t)}function b(){return o.default.get("search/keyword",{},{noAuth:!0})}function w(t){return o.default.get("store_list",t)}},"5f2e":function(t,e,a){"use strict";a.r(e);var i=a("c36c"),o=a("07a5");for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("9ad9");var r,s=a("f0c5"),d=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"5657c9c3",null,!1,i["a"],r);e["default"]=d.exports},6109:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"Loading",props:{loaded:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}}};e.default=i},"75e0":function(t,e,a){"use strict";a.r(e);var i=a("bb03"),o=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=o.a},"9ad9":function(t,e,a){"use strict";var i=a("ab65"),o=a.n(i);o.a},a19a:function(t,e,a){"use strict";a.r(e);var i=a("e917"),o=a("75e0");for(var n in o)"default"!==n&&function(t){a.d(e,t,(function(){return o[t]}))}(n);a("c0e2");var r,s=a("f0c5"),d=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"04aa7706",null,!1,i["a"],r);e["default"]=d.exports},ab65:function(t,e,a){var i=a("dbbe");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=a("4f06").default;o("613d36ea",i,!0,{sourceMap:!1,shadowMode:!1})},bb03:function(t,e,a){"use strict";var i=a("ee27");a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(a("5f2e")),n=a("5a67"),r=(a("db2a"),a("5ed1"),a("2f62"),{name:"storeList",components:{Loading:o.default},data:function(){return{page:1,limit:20,loaded:!1,loading:!1,storeList:[],mapShow:!1,system_store:{},locationShow:!1,user_latitude:0,user_longitude:0}},onLoad:function(){try{this.user_latitude=uni.getStorageSync("user_latitude"),this.user_longitude=uni.getStorageSync("user_longitude")}catch(t){}},mounted:function(){this.user_latitude&&this.user_longitude?this.getList():this.selfLocation()},methods:{selfLocation:function(){var t=this;uni.getLocation({type:"wgs84",success:function(e){try{uni.setStorageSync("user_latitude",e.latitude),uni.setStorageSync("user_longitude",e.longitude)}catch(a){}t.getList()},complete:function(){t.getList()}})},showMaoLocation:function(t){uni.openLocation({latitude:Number(t.latitude),longitude:Number(t.longitude),success:function(){}})},checked:function(t){uni.$emit("handClick",{address:t}),uni.navigateBack()},getList:function(){var t=this;if(!this.loading&&!this.loaded){this.loading=!0;var e={latitude:this.user_latitude||"",longitude:this.user_longitude||"",page:this.page,limit:this.limit};(0,n.storeListApi)(e).then((function(e){t.loading=!1,t.loaded=e.data.list.length<t.limit,t.storeList.push.apply(t.storeList,e.data.list.list),t.page=t.page+1})).catch((function(e){t.$dialog.error(e.msg)}))}}},onReachBottom:function(){this.getList()}});e.default=r},c0e2:function(t,e,a){"use strict";var i=a("20c9"),o=a.n(i);o.a},c36c:function(t,e,a){"use strict";var i,o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[t.loading&&!t.loaded?a("v-uni-view",{staticClass:"Loads acea-row row-center-wrapper",staticStyle:{"margin-top":".2rem"}},[t.loading?a("v-uni-view",[a("v-uni-view",{staticClass:"iconfont icon-jiazai loading acea-row row-center-wrapper"}),t._v("正在加载中")],1):a("v-uni-view",[t._v("上拉加载更多")])],1):t._e()],1)},n=[];a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}))},dbbe:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".Loads[data-v-5657c9c3]{height:%?80?%;font-size:%?25?%;color:#000}.Loads .iconfont[data-v-5657c9c3]{font-size:%?30?%;margin-right:%?10?%;height:%?32?%;line-height:%?32?%}\n/*加载动画*/@-webkit-keyframes load-data-v-5657c9c3{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes load-data-v-5657c9c3{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.loadingpic[data-v-5657c9c3]{-webkit-animation:load-data-v-5657c9c3 3s linear 1s infinite;animation:load-data-v-5657c9c3 3s linear 1s infinite}.loading[data-v-5657c9c3]{-webkit-animation:load-data-v-5657c9c3 linear 1s infinite;animation:load-data-v-5657c9c3 linear 1s infinite}",""]),t.exports=e},e917:function(t,e,a){"use strict";var i,o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{ref:"container",staticClass:"storeBox"},[t._l(t.storeList,(function(e,i){return a("div",{key:i,staticClass:"storeBox-box",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.checked(e)}}},[a("div",{staticClass:"store-img"},[a("img",{attrs:{src:e.image,"lazy-load":"true"}})]),a("div",{staticClass:"store-cent-left"},[a("div",{staticClass:"store-name"},[t._v(t._s(e.name))]),a("div",{staticClass:"store-address line1"},[t._v(t._s(e.address)+t._s(", "+e.detailed_address))])]),a("div",{staticClass:"row-right"},[a("div",[a("a",{staticClass:"store-phone",attrs:{href:"tel:"+e.phone}},[a("span",{staticClass:"iconfont icon-dadianhua01"})])]),a("div",{staticClass:"store-distance",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.showMaoLocation(e)}}},[e.range?a("span",{staticClass:"addressTxt"},[t._v("距离"+t._s(e.range)+"千米")]):a("span",{staticClass:"addressTxt"},[t._v("查看地图")]),a("span",{staticClass:"iconfont icon-youjian"})])])])})),a("Loading",{attrs:{loaded:t.loaded,loading:t.loading}})],2),a("div",[t.locationShow&&!t.isWeixin?a("iframe",{ref:"geoPage",staticStyle:{display:"none"},attrs:{width:"0",height:"0",frameborder:"0",scrolling:"no",src:"https://apis.map.qq.com/tools/geolocation?key="+t.mapKey+"&referer=myapp"}}):t._e()]),t.mapShow?a("div",{staticClass:"geoPage"},[a("iframe",{attrs:{width:"100%",height:"100%",frameborder:"0",scrolling:"no",src:"https://apis.map.qq.com/uri/v1/geocoder?coord="+t.system_store.latitude+","+t.system_store.longitude+"&referer="+t.mapKey}})]):t._e()])},n=[];a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return i}))},f2f1:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".geoPage[data-v-04aa7706]{position:fixed;width:100%;height:100%;top:0;z-index:10000}.storeBox[data-v-04aa7706]{width:100%;background-color:#fff;padding:0 %?30?%}.storeBox-box[data-v-04aa7706]{width:100%;height:auto;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?23?% 0;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;border-bottom:1px solid #eee}.store-cent[data-v-04aa7706]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:80%}.store-cent-left[data-v-04aa7706]{width:45%}.store-img[data-v-04aa7706]{width:%?120?%;height:%?120?%;border-radius:%?6?%;margin-right:%?22?%}.store-img img[data-v-04aa7706]{width:100%;height:100%}.store-name[data-v-04aa7706]{color:#282828;font-size:%?30?%;margin-bottom:%?22?%;font-weight:800}.store-address[data-v-04aa7706]{color:#666;font-size:%?24?%}.store-phone[data-v-04aa7706]{width:%?50?%;height:%?50?%;color:#fff;border-radius:50%;display:block;text-align:center;line-height:%?50?%;background-color:#e83323;margin-bottom:%?22?%}.store-distance[data-v-04aa7706]{font-size:%?22?%;color:#e83323}.iconfont[data-v-04aa7706]{font-size:%?20?%}.row-right[data-v-04aa7706]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;width:33.5%}",""]),t.exports=e}}]);