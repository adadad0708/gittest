(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-index"],{1724:function(e,t,i){"use strict";var n=i("6f4e"),s=i.n(n);s.a},"42db":function(e,t,i){"use strict";i("4160"),i("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("4a5f"),s=i("7c9c"),a=i("2f62"),r=getApp(),u={components:{},computed:(0,a.mapGetters)(["isLogin"]),data:function(){return{orderMenu:[{img:"/static/images/order1.png",title:"待付款",url:"/pages/users/order_list/index?status=0"},{img:"/static/images/order2.png",title:"待发货",url:"/pages/users/order_list/index?status=1"},{img:"/static/images/order3.png",title:"待收货",url:"/pages/users/order_list/index?status=2"},{img:"/static/images/order4.png",title:"待评价",url:"/pages/users/order_list/index?status=3"},{img:"/static/images/order5.png",title:"售后/退款",url:"/pages/users/user_return_list/index"}],imgUrls:[],userMenu:[{icon:"/static/images/user_menu01.png",title:"会员中心",url:"/pages/users/user_vip/index"},{icon:"/static/images/user_menu02.png",title:"我的推广",url:"/pages/users/user_spread_user/index"},{icon:"/static/images/user_menu03.png",title:"优惠券",url:"/pages/users/user_coupon/index"},{icon:"/static/images/user_menu04.png",title:"砍价记录",url:"/pages/activity/bargain/index"},{icon:"/static/images/user_menu05.png",title:"我的余额",url:"/pages/users/user_money/index"},{icon:"/static/images/user_menu06.png",title:"我的收藏",url:"/pages/users/user_goods_collection/index"},{icon:"/static/images/user_menu07.png",title:"地址管理",url:"/pages/users/user_address_list/index"}],autoplay:!0,circular:!0,interval:3e3,duration:500,isAuto:!1,isShowAuth:!1,orderStatusNum:{},userInfo:{},MyMenus:[]}},onLoad:function(){var e=this;e.$set(e,"MyMenus",r.globalData.MyMenus),0==e.isLogin&&(0,s.toLogin)()},onShow:function(){var e=this;e.isLogin&&(this.getUserInfo(),this.getMyMenus(),this.setVisit())},methods:{setVisit:function(){(0,n.setVisit)({url:"/pages/user/index"}).then((function(e){}))},openAuto:function(){this.isAuto=!0,this.isShowAuth=!0},onLoadFun:function(){this.getUserInfo(),this.getMyMenus(),this.setVisit()},Setting:function(){uni.openSetting({success:function(e){}})},authColse:function(e){this.isShowAuth=e},bindPhone:function(){uni.navigateTo({url:"/pages/users/user_phone/index"})},getUserInfo:function(){var e=this;(0,n.getUserInfo)().then((function(t){e.userInfo=t.data,e.$store.commit("SETUID",t.data.uid),e.orderMenu.forEach((function(e,i){switch(e.title){case"待付款":e.num=t.data.orderStatusNum.unpaid_count;break;case"待发货":e.num=t.data.orderStatusNum.unshipped_count;break;case"待收货":e.num=t.data.orderStatusNum.received_count;break;case"待评价":e.num=t.data.orderStatusNum.evaluated_count;break;case"售后/退款":e.num=t.data.orderStatusNum.refund_count;break}}))}))},getMyMenus:function(){var e=this,t=this;this.MyMenus.length||(0,n.getMenuList)().then((function(i){t.$set(t,"MyMenus",i.data.routine_my_menus),e.imgUrls=i.data.routine_my_banner}))},goEdit:function(){uni.navigateTo({url:"/pages/users/user_info/index"})},goSignIn:function(){uni.navigateTo({url:"/pages/users/user_sgin/index"})},goMenuPage:function(e){this.isLogin&&uni.navigateTo({url:e})}}};t.default=u},"4ce9":function(e,t,i){"use strict";i.r(t);var n=i("93c8"),s=i("73be");for(var a in s)"default"!==a&&function(e){i.d(t,e,(function(){return s[e]}))}(a);i("1724");var r,u=i("f0c5"),o=Object(u["a"])(s["default"],n["b"],n["c"],!1,null,"6f0ca71f",null,!1,n["a"],r);t["default"]=o.exports},"62fc":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.new-users .head[data-v-6f0ca71f]{padding-top:%?30?%;background:#fff}.new-users .head .user-card[data-v-6f0ca71f]{position:relative;width:%?710?%;height:%?340?%;margin:0 auto;padding:%?35?% %?28?%;background:-webkit-linear-gradient(left,#f62c2c,#f96e29);background:linear-gradient(90deg,#f62c2c,#f96e29);box-shadow:0 %?10?% %?20?% 0 rgba(255,2,0,.2);border-radius:%?24?%}.new-users .head .user-card .bg[data-v-6f0ca71f]{position:absolute;left:0;top:0;width:100%;height:100%;background-image:url(https://api.duodianshop.com/user_bg.png);background-size:100% 100%}.new-users .head .user-card .user-info[data-v-6f0ca71f]{z-index:20;position:relative;display:-webkit-box;display:-webkit-flex;display:flex}.new-users .head .user-card .user-info .avatar[data-v-6f0ca71f]{width:%?120?%;height:%?120?%;border-radius:50%}.new-users .head .user-card .user-info .info[data-v-6f0ca71f]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-left:%?20?%;padding:%?15?% 0}.new-users .head .user-card .user-info .info .name[data-v-6f0ca71f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#fff;font-size:%?31?%}.new-users .head .user-card .user-info .info .name .vip[data-v-6f0ca71f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?36?%;padding:0 %?20?%;background:rgba(0,0,0,.2);border-radius:18px;font-size:%?20?%;margin-left:%?12?%}.new-users .head .user-card .user-info .info .name .vip uni-image[data-v-6f0ca71f]{width:%?27?%;height:%?27?%}.new-users .head .user-card .user-info .info .num[data-v-6f0ca71f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?26?%;color:hsla(0,0%,100%,.6)}.new-users .head .user-card .user-info .info .num uni-image[data-v-6f0ca71f]{width:%?22?%;height:%?23?%;margin-left:%?20?%}.new-users .head .user-card .num-wrapper[data-v-6f0ca71f]{z-index:30;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin-top:%?60?%;color:#fff}.new-users .head .user-card .num-wrapper .num-item[data-v-6f0ca71f]{width:33.33%;text-align:center}.new-users .head .user-card .num-wrapper .num-item .num[data-v-6f0ca71f]{font-size:%?42?%;font-weight:700}.new-users .head .user-card .num-wrapper .num-item .txt[data-v-6f0ca71f]{margin-top:%?8?%;font-size:%?26?%;color:hsla(0,0%,100%,.6)}.new-users .head .user-card .sign[data-v-6f0ca71f]{z-index:200;position:absolute;right:%?-12?%;top:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?120?%;height:%?60?%;background:-webkit-linear-gradient(left,#ffe157,#eec10f);background:linear-gradient(90deg,#ffe157,#eec10f);border-radius:%?29?% %?4?% %?4?% %?29?%;color:#282828;font-size:%?28?%;font-weight:700}.new-users .head .order-wrapper[data-v-6f0ca71f]{width:96%;margin-left:2%;border-radius:%?15?%;box-shadow:0 2px 10px 2px #f1f1f1}.new-users .head .order-wrapper .order-hd[data-v-6f0ca71f]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?20?% %?20?% %?28?% %?28?%;margin-top:%?33?%;border-bottom:1px solid #f5f5f5;font-size:%?30?%;color:#282828}.new-users .head .order-wrapper .order-hd .right[data-v-6f0ca71f]{-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#666;font-size:%?26?%}.new-users .head .order-wrapper .order-hd .right .icon-xiangyou[data-v-6f0ca71f]{margin-left:%?5?%;margin-top:%?6?%;font-size:%?26?%}.new-users .head .order-wrapper .order-bd[data-v-6f0ca71f]{display:-webkit-box;display:-webkit-flex;display:flex;padding:0 %?24?%}.new-users .head .order-wrapper .order-bd .order-item[data-v-6f0ca71f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:20%;height:%?160?%}.new-users .head .order-wrapper .order-bd .order-item .pic[data-v-6f0ca71f]{position:relative;text-align:center}.new-users .head .order-wrapper .order-bd .order-item .pic uni-image[data-v-6f0ca71f]{width:%?48?%;height:%?48?%}.new-users .head .order-wrapper .order-bd .order-item .txt[data-v-6f0ca71f]{margin-top:%?15?%;font-size:%?26?%;color:#454545}.new-users .slider-wrapper[data-v-6f0ca71f]{margin:%?20?% 0;height:%?130?%}.new-users .slider-wrapper uni-swiper[data-v-6f0ca71f],\r\n.new-users .slider-wrapper uni-swiper-item[data-v-6f0ca71f]{height:100%}.new-users .slider-wrapper uni-image[data-v-6f0ca71f]{width:96%;height:%?130?%;margin-left:2%;border-radius:%?10?%}.new-users .user-menus[data-v-6f0ca71f]{background-color:#fff}.new-users .user-menus .item[data-v-6f0ca71f]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?90?%;padding:0 %?30?%}.new-users .user-menus .item .left[data-v-6f0ca71f]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.new-users .user-menus .item .left uni-image[data-v-6f0ca71f]{width:%?46?%;height:%?46?%;margin-right:%?25?%}.new-users .user-menus .item[data-v-6f0ca71f]::before{content:" ";position:absolute;right:0;bottom:0;width:%?655?%;height:1px;background-color:#eee}.new-users .user-menus .item[data-v-6f0ca71f]:last-child::before{display:none}.new-users .user-menus uni-button[data-v-6f0ca71f]{font-size:%?28?%}.new-users .phone[data-v-6f0ca71f]{color:#fff}.new-users .order-status-num[data-v-6f0ca71f]{min-width:%?12?%;background-color:#fff;color:#ee5a52;border-radius:15px;position:absolute;right:%?-14?%;top:%?-15?%;font-size:%?20?%;padding:0 %?8?%;border:1px solid #ee5a52}',""]),e.exports=t},"6f4e":function(e,t,i){var n=i("62fc");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=i("4f06").default;s("9e1606fa",n,!0,{sourceMap:!1,shadowMode:!1})},"73be":function(e,t,i){"use strict";i.r(t);var n=i("42db"),s=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=s.a},"93c8":function(e,t,i){"use strict";var n,s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"new-users"},[i("v-uni-view",{staticClass:"head"},[i("v-uni-view",{staticClass:"user-card"},[i("v-uni-view",{staticClass:"bg"}),i("v-uni-view",{staticClass:"user-info"},[e.userInfo.avatar?i("v-uni-image",{staticClass:"avatar",attrs:{src:e.userInfo.avatar},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goEdit()}}}):i("v-uni-image",{staticClass:"avatar",attrs:{src:"/static/images/f.png",mode:""},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goEdit()}}}),i("v-uni-view",{staticClass:"info"},[e.userInfo.uid?i("v-uni-view",{staticClass:"name"},[e._v(e._s(e.userInfo.nickname)),e.userInfo.vip?i("v-uni-view",{staticClass:"vip"},[i("v-uni-image",{attrs:{src:e.userInfo.vip_icon,alt:""}}),i("v-uni-view",{staticClass:"vip-txt",staticStyle:{"margin-left":"10rpx"}},[e._v(e._s(e.userInfo.vip_name))])],1):e._e()],1):e._e(),e.userInfo.phone?i("v-uni-view",{staticClass:"num",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goEdit()}}},[i("v-uni-view",{staticClass:"num-txt"},[e._v("ID："+e._s(e.userInfo.uid))]),i("v-uni-view",{staticClass:"icon"},[i("v-uni-image",{attrs:{src:"/static/images/edit.png",mode:""}})],1)],1):e._e(),!e.userInfo.phone&&e.isLogin?i("v-uni-view",{staticClass:"phone",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.bindPhone.apply(void 0,arguments)}}},[e._v("绑定手机号")]):e._e()],1)],1),i("v-uni-view",{staticClass:"num-wrapper"},[i("v-uni-view",{staticClass:"num-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goMenuPage("/pages/users/user_money/index")}}},[i("v-uni-text",{staticClass:"num"},[e._v(e._s(e.userInfo.now_money||0))]),i("v-uni-view",{staticClass:"txt"},[e._v("余额")])],1),i("v-uni-view",{staticClass:"num-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goMenuPage("/pages/users/user_integral/index")}}},[i("v-uni-text",{staticClass:"num"},[e._v(e._s(e.userInfo.integral||0))]),i("v-uni-view",{staticClass:"txt"},[e._v("积分")])],1),i("v-uni-view",{staticClass:"num-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goMenuPage("/pages/users/user_coupon/index")}}},[i("v-uni-text",{staticClass:"num"},[e._v(e._s(e.userInfo.couponCount||0))]),i("v-uni-view",{staticClass:"txt"},[e._v("优惠券")])],1)],1),i("v-uni-view",{staticClass:"sign",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.goSignIn.apply(void 0,arguments)}}},[e._v("签到")])],1),i("v-uni-view",{staticClass:"order-wrapper"},[i("v-uni-view",{staticClass:"order-hd flex"},[i("v-uni-view",{staticClass:"left"},[e._v("订单中心")]),i("v-uni-navigator",{staticClass:"right flex",attrs:{"hover-class":"none",url:"/pages/users/order_list/index","open-type":"navigate"}},[e._v("查看全部"),i("v-uni-text",{staticClass:"iconfont icon-xiangyou"})],1)],1),i("v-uni-view",{staticClass:"order-bd"},[e._l(e.orderMenu,(function(t,n){return[i("v-uni-navigator",{key:n+"_0",staticClass:"order-item",attrs:{"hover-class":"none",url:t.url}},[i("v-uni-view",{staticClass:"pic"},[i("v-uni-image",{attrs:{src:t.img,mode:""}}),t.num>0?i("v-uni-text",{staticClass:"order-status-num"},[e._v(e._s(t.num))]):e._e()],1),i("v-uni-view",{staticClass:"txt"},[e._v(e._s(t.title))])],1)]}))],2)],1)],1),e.imgUrls.length>0?i("v-uni-view",{staticClass:"slider-wrapper"},[i("v-uni-swiper",{attrs:{"indicator-dots":"true",autoplay:e.autoplay,circular:e.circular,interval:e.interval,duration:e.duration,"indicator-color":"rgba(255,255,255,0.6)","indicator-active-color":"#fff"}},[e._l(e.imgUrls,(function(e,t){return[i("v-uni-swiper-item",[i("v-uni-navigator",{staticClass:"slide-navigator acea-row row-between-wrapper",attrs:{url:e.url,"hover-class":"none"}},[i("v-uni-image",{staticClass:"slide-image",attrs:{src:e.pic}})],1)],1)]}))],2)],1):e._e(),i("v-uni-view",{staticClass:"user-menus",staticStyle:{"margin-top":"20rpx",width:"96%","margin-left":"2%","border-radius":"15rpx","box-shadow":"0 2px 10px 2px #f1f1f1"}},[e._l(e.MyMenus,(function(t,n){return["#"!=t.url&&"/pages/service/index"!=t.url?i("v-uni-navigator",{key:n+"_0",staticClass:"item",attrs:{url:t.url,"hover-class":"none"}},[i("v-uni-view",{staticClass:"left"},[i("v-uni-image",{attrs:{src:t.pic}}),i("v-uni-text",[e._v(e._s(t.name))])],1),i("v-uni-view",{staticClass:"iconfont icon-xiangyou"})],1):e._e()]})),i("v-uni-navigator",{staticClass:"item",attrs:{url:"/pages/customer_list/index","hover-class":"none"}},[i("v-uni-view",{staticClass:"left"},[i("v-uni-image",{attrs:{src:"/static/images/user_menu08.png"}}),i("v-uni-text",[e._v("联系客服")])],1),i("v-uni-view",{staticClass:"iconfont icon-xiangyou"})],1)],2),i("v-uni-view",{staticStyle:{height:"50rpx"}})],1)},a=[];i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}))}}]);