(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-mine"],{2863:function(e,i,t){var n=t("b365");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=t("4f06").default;a("9ad82acc",n,!0,{sourceMap:!1,shadowMode:!1})},"617c":function(e,i,t){"use strict";t.r(i);var n=t("67ae"),a=t("d630");for(var o in a)"default"!==o&&function(e){t.d(i,e,(function(){return a[e]}))}(o);t("ccc3");var s,c=t("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"c799bbe8",null,!1,n["a"],s);i["default"]=r.exports},"67ae":function(e,i,t){"use strict";var n;t.d(i,"b",(function(){return a})),t.d(i,"c",(function(){return o})),t.d(i,"a",(function(){return n}));var a=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"container"},[t("v-uni-view",{staticClass:"position-relative"},[t("v-uni-image",{staticClass:"bg",attrs:{src:"https://img-shop.qmimg.cn/s16/images/2020/01/20/9a82219bedcae5c2.jpeg"}}),t("v-uni-button",{staticClass:"hym-btn",attrs:{type:"default",size:"mini"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.memberCode.apply(void 0,arguments)}}},[t("v-uni-image",{attrs:{src:"/static/images/mine/hym.png"}}),t("v-uni-text",[e._v("会员码")])],1)],1),t("v-uni-view",{staticStyle:{padding:"0 30rpx"}},[t("v-uni-view",{staticClass:"d-flex flex-column bg-white user-box"},[t("v-uni-view",{staticClass:"d-flex align-items-center"},[t("v-uni-view",{staticClass:"avatar"},[t("v-uni-image",{attrs:{src:e.isLogin?e.member.avatar:"/static/images/mine/default.png"}}),e.isLogin?t("v-uni-view",{staticClass:"badge"},[t("v-uni-image",{attrs:{src:"/static/images/mine/level.png"}}),t("v-uni-view",[e._v(e._s(e.member.memberLevel))])],1):e._e()],1),t("v-uni-view",{staticClass:"d-flex flex-column flex-fill overflow-hidden",staticStyle:{"margin-top":"20rpx"}},[e.isLogin?t("v-uni-view",{staticClass:"font-size-lg font-weight-bold d-flex justify-content-start align-items-center",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.userinfo.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"text-truncate"},[e._v(e._s(e.member.nickname))]),t("v-uni-view",{staticClass:"iconfont iconarrow-right line-height-100"})],1):t("v-uni-view",{staticClass:"font-size-lg font-weight-bold",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.login.apply(void 0,arguments)}}},[e._v("请点击授权登录")]),t("v-uni-view",{staticClass:"font-size-sm text-color-assist"},[e._v("当前成长值"+e._s(e.isLogin?e.member.currentValue:0)+"/"+e._s(e.isLogin?e.member.currentValue+e.member.needValue:0))]),t("v-uni-view",{staticClass:"w-100"},[t("v-uni-progress",{attrs:{percent:"0",activeColor:"#ADB838",height:"8rpx",percent:e.growthValue,"border-radius":"8rpx"}})],1)],1),t("v-uni-view",{staticClass:"level-benefit d-flex flex-shrink-0 align-items-center justify-content-end text-color-white bg-warning font-size-sm"},[t("v-uni-view",[e._v("会员权益")]),t("v-uni-view",{staticClass:"iconfont iconarrow-right line-height-100"})],1)],1),t("v-uni-view",{staticClass:"w-100 d-flex align-items-center just-content-center"},[t("v-uni-view",{staticClass:"user-grid",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.coupons.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"value font-size-extra-lg font-weight-bold text-color-base"},[e._v(e._s(e.isLogin?e.member.couponNum:"***"))]),t("v-uni-view",{staticClass:"font-size-sm text-color-assist"},[e._v("奈雪券")])],1),t("v-uni-view",{staticClass:"user-grid",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.integrals.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"value font-size-extra-lg font-weight-bold text-color-base"},[e._v(e._s(e.isLogin?e.member.pointNum:"***"))]),t("v-uni-view",{staticClass:"font-size-sm text-color-assist"},[e._v("积分商城")])],1),t("v-uni-view",{staticClass:"user-grid",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.balance.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"value font-size-extra-lg font-weight-bold text-color-base"},[e._v(e._s(e.isLogin?e.member.balance:"***"))]),t("v-uni-view",{staticClass:"font-size-sm text-color-assist"},[e._v("余额")])],1),t("v-uni-view",{staticClass:"user-grid",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.giftCards.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"value font-size-extra-lg font-weight-bold text-color-base"},[e._v(e._s(e.isLogin?e.member.giftBalance:"***"))]),t("v-uni-view",{staticClass:"font-size-sm text-color-assist"},[e._v("礼品卡")])],1)],1)],1),e.isLogin?e._e():t("v-uni-view",{staticClass:"level-benefit-box"},[t("v-uni-view",{staticClass:"d-flex align-items-center justify-content-between font-size-base"},[t("v-uni-view",{staticClass:"text-color-base"},[e._v("新用户加入会员，享会员权益")]),t("v-uni-view",{staticClass:"text-color-primary",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.login.apply(void 0,arguments)}}},[e._v("立即加入")])],1),t("v-uni-view",{staticClass:"row"},[t("v-uni-view",{staticClass:"grid"},[t("v-uni-image",{attrs:{src:"/static/images/mine/rhyl.png"}}),t("v-uni-view",[e._v("入会有礼")])],1),t("v-uni-view",{staticClass:"grid"},[t("v-uni-image",{attrs:{src:"/static/images/mine/jfdh.png"}}),t("v-uni-view",[e._v("积分兑换")])],1),t("v-uni-view",{staticClass:"grid"},[t("v-uni-image",{attrs:{src:"/static/images/mine/sjtq.png"}}),t("v-uni-view",[e._v("升级特权")])],1),t("v-uni-view",{staticClass:"grid"},[t("v-uni-image",{attrs:{src:"/static/images/mine/srtq.png"}}),t("v-uni-view",[e._v("生日特权")])],1),t("v-uni-view",{staticClass:"grid"},[t("v-uni-image",{attrs:{src:"/static/images/mine/nxbz.png"}}),t("v-uni-view",[e._v("奈雪宝藏")])],1)],1)],1),t("v-uni-image",{staticClass:"banner",attrs:{src:"/static/images/mine/banner.png",mode:"widthFix"}})],1),t("v-uni-view",{staticClass:"service-box"},[t("v-uni-view",{staticClass:"font-size-lg text-color-base font-weight-bold",staticStyle:{"margin-bottom":"20rpx"}},[e._v("我的服务")]),t("v-uni-view",{staticClass:"row"},[t("v-uni-view",{staticClass:"grid",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.attendance.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"image"},[t("v-uni-image",{attrs:{src:"/static/images/mine/jfqd.png"}})],1),t("v-uni-view",[e._v("积分签到")])],1),t("v-uni-view",{staticClass:"grid"},[t("v-uni-view",{staticClass:"image"},[t("v-uni-image",{attrs:{src:"/static/images/mine/stxy.png"}})],1),t("v-uni-view",[e._v("送她心愿")]),t("v-uni-image",{staticClass:"new-badage",attrs:{src:e.newIcon}})],1),t("v-uni-view",{staticClass:"grid"},[t("v-uni-view",{staticClass:"image"},[t("v-uni-image",{attrs:{src:"/static/images/mine/nxsc.png"}})],1),t("v-uni-view",[e._v("奈雪商城")])],1),t("v-uni-view",{staticClass:"grid"},[t("v-uni-view",{staticClass:"image"},[t("v-uni-image",{attrs:{src:"/static/images/mine/lxkf.png"}})],1),t("v-uni-view",[e._v("联系客服")])],1),t("v-uni-view",{staticClass:"grid",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.orders.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"image"},[t("v-uni-image",{attrs:{src:"/static/images/mine/wddd.png"}})],1),t("v-uni-view",[e._v("我的订单")])],1),t("v-uni-view",{staticClass:"grid",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.userinfo.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"image"},[t("v-uni-image",{attrs:{src:"/static/images/mine/wdzl.png"}})],1),t("v-uni-view",[e._v("我的资料")])],1),t("v-uni-view",{staticClass:"grid",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.addresses.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"image"},[t("v-uni-image",{attrs:{src:"/static/images/mine/shdz.png"}})],1),t("v-uni-view",[e._v("收货地址")])],1),t("v-uni-view",{staticClass:"grid",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.services.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"image"},[t("v-uni-image",{attrs:{src:"/static/images/mine/gdfw.png"}})],1),t("v-uni-view",[e._v("更多服务")])],1)],1)],1),t("v-uni-view",{staticClass:"d-flex just-content-center align-items-center text-color-assist",staticStyle:{padding:"30rpx 0","font-size":"22rpx"}},[e._v("会员卡适用于奈雪的茶和奈雪酒屋指定范围")])],1)},o=[]},b365:function(e,i,t){var n=t("24fb");i=n(!1),i.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */@font-face{font-family:iconfont;src:url(//at.alicdn.com/t/font_1789197_z1gzlwq7idq.ttf?t=1589441233693) format("truetype")}.iconfont[data-v-c799bbe8]{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.iconshoucang[data-v-c799bbe8]:before{content:"\\e667"}.iconshoucangfill[data-v-c799bbe8]:before{content:"\\e6c9"}.iconjifen[data-v-c799bbe8]:before{content:"\\e642"}.iconradio-button-off[data-v-c799bbe8]:before{content:"\\e688"}.iconradio-button-on[data-v-c799bbe8]:before{content:"\\e689"}.iconhelp[data-v-c799bbe8]:before{content:"\\e752"}.iconwxpay[data-v-c799bbe8]:before{content:"\\e611"}.iconbalance[data-v-c799bbe8]:before{content:"\\e619"}.iconadd-select[data-v-c799bbe8]:before{content:"\\e7b0"}.iconsami-select[data-v-c799bbe8]:before{content:"\\e7b1"}.iconmap[data-v-c799bbe8]:before{content:"\\e758"}.iconsuccess[data-v-c799bbe8]:before{content:"\\e767"}.iconsuccess-fill[data-v-c799bbe8]:before{content:"\\e78d"}.iconiconset0136[data-v-c799bbe8]:before{content:"\\e623"}.iconzan[data-v-c799bbe8]:before{content:"\\e640"}.iconjifenqiandao[data-v-c799bbe8]:before{content:"\\e6a6"}.iconshouyeshouye[data-v-c799bbe8]:before{content:"\\e606"}.icondaohang[data-v-c799bbe8]:before{content:"\\e641"}.iconwodelianxikefu[data-v-c799bbe8]:before{content:"\\e671"}.iconwodexinyuan[data-v-c799bbe8]:before{content:"\\e675"}.iconphone[data-v-c799bbe8]:before{content:"\\e6dd"}.icondingdan[data-v-c799bbe8]:before{content:"\\e645"}.iconliwu[data-v-c799bbe8]:before{content:"\\e61c"}.iconyinpinyinliao[data-v-c799bbe8]:before{content:"\\e60d"}.iconyinpin[data-v-c799bbe8]:before{content:"\\e70b"}.iconwaimaixinxi[data-v-c799bbe8]:before{content:"\\e685"}.iconico[data-v-c799bbe8]:before{content:"\\e646"}.iconwode[data-v-c799bbe8]:before{content:"\\e616"}.icongengduofuwu[data-v-c799bbe8]:before{content:"\\e607"}.iconqucan[data-v-c799bbe8]:before{content:"\\e625"}.iconyou[data-v-c799bbe8]:before{content:"\\e618"}.iconshouhuodizhi[data-v-c799bbe8]:before{content:"\\e666"}.iconshangcheng[data-v-c799bbe8]:before{content:"\\e63b"}.iconadd[data-v-c799bbe8]:before{content:"\\e742"}.iconarrow-right[data-v-c799bbe8]:before{content:"\\e743"}.iconarrow-lift[data-v-c799bbe8]:before{content:"\\e744"}.iconarrow-up[data-v-c799bbe8]:before{content:"\\e745"}.iconclose[data-v-c799bbe8]:before{content:"\\e747"}.iconleftbutton[data-v-c799bbe8]:before{content:"\\e755"}.iconreduce[data-v-c799bbe8]:before{content:"\\e75e"}.iconseleted[data-v-c799bbe8]:before{content:"\\e763"}.iconRightbutton[data-v-c799bbe8]:before{content:"\\e765"}.iconleftbutton-fill[data-v-c799bbe8]:before{content:"\\e782"}.iconRightbutton-fill[data-v-c799bbe8]:before{content:"\\e78a"}.iconarrow-down[data-v-c799bbe8]:before{content:"\\e7b2"}.iconaixin1[data-v-c799bbe8]:before{content:"\\e63c"}uni-page-body[data-v-c799bbe8]{height:auto;min-height:100%}.bg[data-v-c799bbe8]{width:100%;height:calc(410 / 594 * %?750?%)}.hym-btn[data-v-c799bbe8]{position:absolute;top:%?40?%;right:%?40?%;color:#adb838;display:flex;align-items:center;justify-content:center;border-radius:50rem;font-size:%?24?%;box-shadow:0 0 %?20?% rgba(66,66,66,.1)}.hym-btn[data-v-c799bbe8]::after{border:0}.hym-btn uni-image[data-v-c799bbe8]{width:%?30?%;height:%?30?%;margin-right:%?10?%}.user-box[data-v-c799bbe8]{position:relative;border-radius:%?8?%;margin-bottom:%?30?%;margin-top:%?-115?%;box-shadow:0 %?20?% %?20?% %?-20?% rgba(51,51,51,.1)}.avatar[data-v-c799bbe8]{position:relative;margin-top:%?-35?%;margin-left:%?35?%;margin-right:%?35?%;width:%?160?%;height:%?160?%;border-radius:100%;display:flex;align-items:center;justify-content:center;background-color:#fff;box-shadow:0 0 %?20?% rgba(0,0,0,.2)}.avatar uni-image[data-v-c799bbe8]{width:%?140?%;height:%?140?%;border-radius:100%}.avatar .badge[data-v-c799bbe8]{position:absolute;right:%?-10?%;bottom:%?-10?%;background-color:#fff;border-radius:50rem;display:flex;align-items:center;justify-content:center;color:#fab714;font-size:%?24?%;padding:%?8?% %?16?%;box-shadow:0 0 %?20?% rgba(0,0,0,.2)}.avatar .badge uni-image[data-v-c799bbe8]{width:%?30?%;height:%?30?%}.level-benefit[data-v-c799bbe8]{margin-left:%?35?%;padding:%?10?% 0 %?10?% %?30?%;border-radius:50rem 0 0 50rem}.user-grid[data-v-c799bbe8]{width:25%;padding:%?30?%;display:flex;flex-direction:column;align-items:center;justify-content:center}.user-grid .value[data-v-c799bbe8]{margin-bottom:%?20?%}.level-benefit-box[data-v-c799bbe8]{border-radius:%?8?%;margin-bottom:%?30?%;box-shadow:0 %?10?% %?8?% rgba(135,136,137,.1);width:100%;display:flex;padding:%?30?%;flex-direction:column;background-color:#fff}.level-benefit-box .row[data-v-c799bbe8]{display:flex;padding:%?30?% 0 %?20?%;justify-content:space-around;align-items:center}.level-benefit-box .row .grid[data-v-c799bbe8]{width:20%;display:flex;flex-direction:column;font-size:%?24?%;color:#919293;align-items:center}.level-benefit-box .row .grid uni-image[data-v-c799bbe8]{width:%?80?%;height:%?80?%;margin-bottom:%?10?%}.banner[data-v-c799bbe8]{width:100%;border-radius:%?8?%;margin-bottom:%?30?%}.service-box[data-v-c799bbe8]{width:100%;background-color:#fff;padding:%?32?% %?30?% %?10?%;box-shadow:0 %?20?% %?20?% %?-20?% rgba(51,51,51,.1)}.service-box .row[data-v-c799bbe8]{display:flex;flex-wrap:wrap;color:#919293;font-size:%?24?%;padding-bottom:%?-40?%}.service-box .row .grid[data-v-c799bbe8]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:%?40?%;width:25%;position:relative}.service-box .row .grid .image uni-image[data-v-c799bbe8]{width:%?80?%;height:%?80?%;margin-bottom:%?20?%}.service-box .row .grid .new-badage[data-v-c799bbe8]{width:%?40?%;height:%?40?%;position:absolute;top:0;right:%?30?%}',""]),e.exports=i},b816:function(e,i,t){"use strict";var n=t("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(t("5530")),o=t("26cb"),s={data:function(){return{newIcon:"https://img-shop.qmimg.cn/s16/images/2020/05/12/ffb0613dded704b6.png"}},computed:(0,a.default)((0,a.default)((0,a.default)({},(0,o.mapState)(["member"])),(0,o.mapGetters)(["isLogin"])),{},{growthValue:function(){if(!this.isLogin)return 0;var e=this.member,i=e.currentValue,t=e.needValue;return i/(i+t)*100}}),onLoad:function(){},methods:{login:function(){uni.navigateTo({url:"/pages/login/login"})},packages:function(){this.isLogin?uni.navigateTo({url:"/pages/packages/index"}):this.login()},balance:function(){this.isLogin?uni.navigateTo({url:"/pages/balance/balance"}):this.login()},addresses:function(){this.isLogin?uni.navigateTo({url:"/pages/address/address"}):this.login()},integrals:function(){this.isLogin?uni.navigateTo({url:"/pages/integrals/integrals"}):this.login()},attendance:function(){this.isLogin?uni.navigateTo({url:"/pages/attendance/attendance"}):this.login()},orders:function(){this.isLogin?uni.navigateTo({url:"/pages/orders/orders"}):this.login()},memberCode:function(){this.isLogin?uni.navigateTo({url:"/pages/mine/member-code"}):this.login()},coupons:function(){this.isLogin?uni.navigateTo({url:"/pages/coupons/coupons"}):this.login()},userinfo:function(){this.isLogin?uni.navigateTo({url:"/pages/mine/userinfo"}):this.login()},services:function(){uni.navigateTo({url:"/pages/services/services"})},giftCards:function(){this.isLogin?uni.navigateTo({url:"/pages/giftcard/giftcard"}):this.login()}}};i.default=s},ccc3:function(e,i,t){"use strict";var n=t("2863"),a=t.n(n);a.a},d630:function(e,i,t){"use strict";t.r(i);var n=t("b816"),a=t.n(n);for(var o in n)"default"!==o&&function(e){t.d(i,e,(function(){return n[e]}))}(o);i["default"]=a.a}}]);