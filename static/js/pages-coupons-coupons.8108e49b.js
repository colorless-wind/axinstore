(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coupons-coupons"],{"0146":function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"Modal",props:{show:{type:Boolean,default:!1},custom:{type:Boolean,default:!1},width:{type:String,default:"84%"},padding:{type:String,default:"40rpx"},radius:{type:String,default:"24rpx"},title:{type:String,default:""},content:{type:String,default:""},color:{type:String,default:"#999"},size:{type:Number,default:28},shape:{type:String,default:"square"},button:{type:Array,default:function(){return[{text:"取消",type:"red",plain:!0},{text:"确定",type:"red",plain:!1}]}},maskClosable:{type:Boolean,default:!0},fadein:{type:Boolean,default:!1}},data:function(){return{}},methods:{handleClick:function(t){if(this.show){var e=t.currentTarget.dataset;this.$emit("click",{index:Number(e.index)})}},handleClickCancel:function(){this.maskClosable&&this.$emit("cancel")}}};e.default=a},"020a":function(t,e,n){"use strict";n.r(e);var a=n("ad29"),o=n("769b");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("ec2b");var r,d=n("f0c5"),s=Object(d["a"])(o["default"],a["b"],a["c"],!1,null,"6e8bdad0",null,!1,a["a"],r);e["default"]=s.exports},"033d":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={modal:n("9720").default,jyfParser:n("020a").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container position-relative w-100 h-100 overflow-hidden"},[n("v-uni-view",{staticClass:"exchange-box"},[n("v-uni-view",{staticClass:"input-box"},[n("v-uni-input",{attrs:{type:"text",placeholder:"请输入兑换码","placeholder-class":"text-color-assist font-size-base"}}),n("v-uni-button",{attrs:{type:"primary"}},[t._v("兑换")])],1),n("v-uni-view",{staticClass:"font-size-sm text-color-primary line-height-2"},[t._v("查看兑换规则")])],1),n("v-uni-view",{staticClass:"tabbar"},t._l(t.tabs,(function(e,a){return n("v-uni-view",{key:a,staticClass:"tab",class:{active:t.activeTabIndex==a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTab(a)}}},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(e.title))])],1)})),1),n("v-uni-view",{staticClass:"flex-fill"},[n("v-uni-scroll-view",{staticClass:"coupon-list",attrs:{"scroll-y":!0}},[n("v-uni-view",{staticClass:"wrapper"},t._l(t.coupons,(function(e,a){return n("v-uni-view",{key:a,staticClass:"coupon",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.openDetailModal(e)}}},[n("v-uni-view",{staticClass:"d-flex align-items-center detail"},[n("v-uni-image",{staticClass:"coupon-img",attrs:{src:e.imageUrl}}),n("v-uni-view",{staticClass:"flex-fill d-flex flex-column just-content-center overflow-hidden"},[n("v-uni-view",{staticClass:"font-size-lg text-color-base text-truncate mb-10"},[t._v(t._s(e.title))]),n("v-uni-view",{staticClass:"font-size-sm text-color-base"},[t._v("有效期至"+t._s(e.endAt))])],1)],1),n("v-uni-view",{staticClass:"d-flex align-items-center justify-content-end",staticStyle:{height:"80rpx"}},[n("v-uni-view",{staticClass:"font-size-sm text-color-primary"},[t._v("查看详情")])],1)],1)})),1)],1)],1),n("v-uni-view",{staticClass:"bottom-box d-flex align-items-center just-content-center font-size-sm text-color-primary"},[n("v-uni-view",{staticClass:"item"},[t._v("历史卡券")]),n("v-uni-view",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showTip1.apply(void 0,arguments)}}},[t._v("赠送记录")]),n("v-uni-view",{staticClass:"item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showTip2.apply(void 0,arguments)}}},[t._v("第三方权益")])],1),n("modal",{attrs:{custom:!0,show:t.detailModalVisible,width:"90%"},on:{cancel:function(e){arguments[0]=e=t.$handleEvent(e),t.closeDetailModal.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"modal-content"},[n("v-uni-view",{staticClass:"d-flex font-size-extra-lg text-color-base just-content-center mb-20"},[t._v(t._s(t.coupon.title))]),n("v-uni-view",{staticClass:"d-flex font-size-sm text-color-base mb-20"},[t._v("有效期："+t._s(t.coupon.beginAt)+"至"+t._s(t.coupon.endAt))]),n("pre",{staticClass:"pre-line font-size-sm text-color-assist mb-30"},[t._v(""),n("jyf-parser",{ref:"couponExplain"}),t._v("")],1),n("v-uni-view",{staticClass:"d-flex align-items-center just-content-center"},[n("v-uni-button",{staticClass:"use-coupon-btn",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.useCoupon.apply(void 0,arguments)}}},[t._v("立即使用")])],1)],1)],1)],1)},i=[]},"0f88":function(t,e,n){"use strict";n.r(e);var a=n("033d"),o=n("61d5");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("3ede");var r,d=n("f0c5"),s=Object(d["a"])(o["default"],a["b"],a["c"],!1,null,"0ad148e7",null,!1,a["a"],r);e["default"]=s.exports},"165e":function(t,e,n){"use strict";var a=n("8fa3"),o=n.n(a);o.a},"2d95":function(t,e,n){"use strict";var a=n("4ea4");n("4de4"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var o=a(n("1da1")),i=a(n("9720")),r=a(n("020a")),d={components:{modal:i.default,jyfParser:r.default},data:function(){return{tabs:[{title:"全部",value:"all"},{title:"茶饮券",value:"1"},{title:"酒屋券",value:"2"}],activeTabIndex:"",coupons:[],detailModalVisible:!1,coupon:{}}},onShow:function(){this.activeTabIndex=0},watch:{activeTabIndex:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=this.tabs[e].value,t.next=3,this.getCoupons(n);case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},methods:{handleTab:function(t){this.activeTabIndex=t},getCoupons:function(t){var e=this;return(0,o.default)(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$api("customerCoupons");case 2:a=n.sent,e.coupons="all"==t?a:a.filter((function(e){return e.couponType==t}));case 4:case"end":return n.stop()}}),n)})))()},openDetailModal:function(t){this.coupon=t,this.$refs["couponExplain"].setContent(this.coupon.couponExplain||""),this.detailModalVisible=!0},closeDetailModal:function(){this.detailModalVisible=!1,this.coupon={}},useCoupon:function(){uni.switchTab({url:"/pages/menu/menu"})},showTip1:function(){uni.showToast({title:"您暂时还没有赠送中卡券哦~",icon:"none"})},showTip2:function(){uni.showToast({title:"您暂时还没有券码哦~",icon:"none"})}}};e.default=d},"3c17":function(t,e,n){function a(t){for(var e={},n=t.split(","),a=n.length;a--;)e[n[a]]=!0;return e}n("ac1f"),n("1276"),t.exports={filter:null,highlight:null,onText:null,entities:{quot:'"',apos:"'",semi:";",nbsp:" ",ensp:" ",emsp:" ",ndash:"–",mdash:"—",middot:"·",lsquo:"‘",rsquo:"’",ldquo:"“",rdquo:"”",bull:"•",hellip:"…"},blankChar:a(" , ,\t,\r,\n,\f"),blockTags:a("address,article,aside,body,caption,center,cite,footer,header,html,nav,section,pre"),ignoreTags:a("area,base,basefont,canvas,command,frame,input,isindex,keygen,link,map,meta,param,script,source,style,svg,textarea,title,track,use,wbr,embed,iframe"),richOnlyTags:a("a,colgroup,fieldset,legend,picture,table"),selfClosingTags:a("area,base,basefont,br,col,circle,ellipse,embed,frame,hr,img,input,isindex,keygen,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),trustAttrs:a("align,alt,app-id,author,autoplay,border,cellpadding,cellspacing,class,color,colspan,controls,data-src,dir,face,height,href,id,ignore,loop,media,muted,name,path,poster,rowspan,size,span,src,start,style,type,unit-id,width,xmlns"),boolAttrs:a("autoplay,controls,ignore,loop,muted"),trustTags:a("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),userAgentStyles:{address:"font-style:italic",big:"display:inline;font-size:1.2em",blockquote:"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",caption:"display:table-caption;text-align:center",center:"text-align:center",cite:"font-style:italic",dd:"margin-left:40px",mark:"background-color:yellow",pre:"font-family:monospace;white-space:pre;overflow:scroll",s:"text-decoration:line-through",small:"display:inline;font-size:0.8em",u:"text-decoration:underline"}}},"3ede":function(t,e,n){"use strict";var a=n("a60d"),o=n.n(a);o.a},"61d5":function(t,e,n){"use strict";n.r(e);var a=n("2d95"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},"6f2a":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e)}}},[n("v-uni-view",{staticClass:"modal-box",class:[t.fadein||t.show?"modal-normal":"modal-scale",t.show?"modal-show":""],style:{width:t.width,padding:t.padding,borderRadius:t.radius}},[t.custom?n("v-uni-view",[t._t("default")],2):n("v-uni-view",[t.title?n("v-uni-view",{staticClass:"modal-title"},[t._v(t._s(t.title))]):t._e(),n("v-uni-view",{staticClass:"modal-content",class:[t.title?"":"mtop"],style:{color:t.color,fontSize:t.size+"rpx"}},[t._t("default")],2),n("v-uni-view",{staticClass:"modalBtn-box",class:[2!=t.button.length?"flex-column":""]},[t._l(t.button,(function(e,a){return[n("v-uni-button",{key:a+"_0",staticClass:"modal-btn",class:[(e.type||"primary")+(e.plain?"-outline":""),2!=t.button.length?"btn-width":"",t.button.length>2?"mbtm":"","circle"==t.shape?"circle-btn":"","btn-"+(e.size||"default")],attrs:{"hover-class":(e.plain?"outline":e.type||"primary")+"-hover","data-index":a},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._v(t._s(e.text||"确定"))])]}))],2)],1)],1),n("v-uni-view",{staticClass:"modal-mask",class:[t.show?"mask-show":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClickCancel.apply(void 0,arguments)}}})],1)},i=[]},"769b":function(t,e,n){"use strict";n.r(e);var a=n("c93b"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},7772:function(t,e,n){var a=n("cacd");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("4f06").default;o("aeeb6c12",a,!0,{sourceMap:!1,shadowMode:!1})},"8fa3":function(t,e,n){var a=n("9de1");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("4f06").default;o("8c819d86",a,!0,{sourceMap:!1,shadowMode:!1})},9720:function(t,e,n){"use strict";n.r(e);var a=n("6f2a"),o=n("ac7b");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("165e");var r,d=n("f0c5"),s=Object(d["a"])(o["default"],a["b"],a["c"],!1,null,"40d5d1f4",null,!1,a["a"],r);e["default"]=s.exports},"9de1":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */@font-face{font-family:iconfont;src:url(//at.alicdn.com/t/font_1789197_z1gzlwq7idq.ttf?t=1589441233693) format("truetype")}.iconfont[data-v-40d5d1f4]{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.iconshoucang[data-v-40d5d1f4]:before{content:"\\e667"}.iconshoucangfill[data-v-40d5d1f4]:before{content:"\\e6c9"}.iconjifen[data-v-40d5d1f4]:before{content:"\\e642"}.iconradio-button-off[data-v-40d5d1f4]:before{content:"\\e688"}.iconradio-button-on[data-v-40d5d1f4]:before{content:"\\e689"}.iconhelp[data-v-40d5d1f4]:before{content:"\\e752"}.iconwxpay[data-v-40d5d1f4]:before{content:"\\e611"}.iconbalance[data-v-40d5d1f4]:before{content:"\\e619"}.iconadd-select[data-v-40d5d1f4]:before{content:"\\e7b0"}.iconsami-select[data-v-40d5d1f4]:before{content:"\\e7b1"}.iconmap[data-v-40d5d1f4]:before{content:"\\e758"}.iconsuccess[data-v-40d5d1f4]:before{content:"\\e767"}.iconsuccess-fill[data-v-40d5d1f4]:before{content:"\\e78d"}.iconiconset0136[data-v-40d5d1f4]:before{content:"\\e623"}.iconzan[data-v-40d5d1f4]:before{content:"\\e640"}.iconjifenqiandao[data-v-40d5d1f4]:before{content:"\\e6a6"}.iconshouyeshouye[data-v-40d5d1f4]:before{content:"\\e606"}.icondaohang[data-v-40d5d1f4]:before{content:"\\e641"}.iconwodelianxikefu[data-v-40d5d1f4]:before{content:"\\e671"}.iconwodexinyuan[data-v-40d5d1f4]:before{content:"\\e675"}.iconphone[data-v-40d5d1f4]:before{content:"\\e6dd"}.icondingdan[data-v-40d5d1f4]:before{content:"\\e645"}.iconliwu[data-v-40d5d1f4]:before{content:"\\e61c"}.iconyinpinyinliao[data-v-40d5d1f4]:before{content:"\\e60d"}.iconyinpin[data-v-40d5d1f4]:before{content:"\\e70b"}.iconwaimaixinxi[data-v-40d5d1f4]:before{content:"\\e685"}.iconico[data-v-40d5d1f4]:before{content:"\\e646"}.iconwode[data-v-40d5d1f4]:before{content:"\\e616"}.icongengduofuwu[data-v-40d5d1f4]:before{content:"\\e607"}.iconqucan[data-v-40d5d1f4]:before{content:"\\e625"}.iconyou[data-v-40d5d1f4]:before{content:"\\e618"}.iconshouhuodizhi[data-v-40d5d1f4]:before{content:"\\e666"}.iconshangcheng[data-v-40d5d1f4]:before{content:"\\e63b"}.iconadd[data-v-40d5d1f4]:before{content:"\\e742"}.iconarrow-right[data-v-40d5d1f4]:before{content:"\\e743"}.iconarrow-lift[data-v-40d5d1f4]:before{content:"\\e744"}.iconarrow-up[data-v-40d5d1f4]:before{content:"\\e745"}.iconclose[data-v-40d5d1f4]:before{content:"\\e747"}.iconleftbutton[data-v-40d5d1f4]:before{content:"\\e755"}.iconreduce[data-v-40d5d1f4]:before{content:"\\e75e"}.iconseleted[data-v-40d5d1f4]:before{content:"\\e763"}.iconRightbutton[data-v-40d5d1f4]:before{content:"\\e765"}.iconleftbutton-fill[data-v-40d5d1f4]:before{content:"\\e782"}.iconRightbutton-fill[data-v-40d5d1f4]:before{content:"\\e78a"}.iconarrow-down[data-v-40d5d1f4]:before{content:"\\e7b2"}.iconaixin1[data-v-40d5d1f4]:before{content:"\\e63c"}.modal-box[data-v-40d5d1f4]{position:fixed;left:50%;top:50%;margin:auto;background:#fff;z-index:9999998;transition:all .3s ease-in-out;opacity:0;box-sizing:border-box;visibility:hidden}.modal-scale[data-v-40d5d1f4]{-webkit-transform:translate(-50%,-50%) scale(0);transform:translate(-50%,-50%) scale(0)}.modal-normal[data-v-40d5d1f4]{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}.modal-show[data-v-40d5d1f4]{opacity:1;visibility:visible}.modal-mask[data-v-40d5d1f4]{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.6);z-index:9999996;transition:all .3s ease-in-out;opacity:0;visibility:hidden}.mask-show[data-v-40d5d1f4]{visibility:visible;opacity:1}.modal-title[data-v-40d5d1f4]{text-align:center;font-size:%?34?%;color:#333;padding-top:%?20?%;font-weight:700}.modal-content[data-v-40d5d1f4]{color:#999;font-size:%?28?%;padding-top:%?20?%;padding-bottom:%?60?%}.mtop[data-v-40d5d1f4]{margin-top:%?30?%}.mbtm[data-v-40d5d1f4]{margin-bottom:%?30?%}.modalBtn-box[data-v-40d5d1f4]{width:100%;display:flex;align-items:center;justify-content:space-between}.flex-column[data-v-40d5d1f4]{flex-direction:column}.modal-btn[data-v-40d5d1f4]{width:46%;height:%?68?%;line-height:%?68?%;position:relative;border-radius:%?60?%;font-size:%?28?%;overflow:visible;margin-left:0;margin-right:0}.modal-btn.btn-default[data-v-40d5d1f4]{font-size:%?28?%}.modal-btn.btn-lg[data-v-40d5d1f4]{font-size:%?32?%}.modal-btn.btn-sm[data-v-40d5d1f4]{font-size:%?24?%}.modal-btn[data-v-40d5d1f4]::after{content:"";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5);left:0;top:0;border-radius:%?60?%}.btn-width[data-v-40d5d1f4]{width:80%!important}.primary[data-v-40d5d1f4]{background:#97af13;color:#fff}.primary-hover[data-v-40d5d1f4]{background:#97af13;color:#e5e5e5}.primary-outline[data-v-40d5d1f4]{color:#97af13;background:none}.primary-outline[data-v-40d5d1f4]::after{border:1px solid #97af13}.danger[data-v-40d5d1f4]{background:#ed3f14;color:#fff}.danger-hover[data-v-40d5d1f4]{background:#d53912;color:#e5e5e5}.danger-outline[data-v-40d5d1f4]{color:#ed3f14;background:none}.danger-outline[data-v-40d5d1f4]::after{border:1px solid #ed3f14}.red[data-v-40d5d1f4]{background:#e41f19;color:#fff}.red-hover[data-v-40d5d1f4]{background:#c51a15;color:#e5e5e5}.red-outline[data-v-40d5d1f4]{color:#e41f19;background:none}.red-outline[data-v-40d5d1f4]::after{border:1px solid #e41f19}.warning[data-v-40d5d1f4]{background:#ff7900;color:#fff}.warning-hover[data-v-40d5d1f4]{background:#e56d00;color:#e5e5e5}.warning-outline[data-v-40d5d1f4]{color:#ff7900;background:none}.warning-outline[data-v-40d5d1f4]::after{border:1px solid #ff7900}.green[data-v-40d5d1f4]{background:#19be6b;color:#fff}.green-hover[data-v-40d5d1f4]{background:#16ab60;color:#e5e5e5}.green-outline[data-v-40d5d1f4]{color:#19be6b;background:none}.green-outline[data-v-40d5d1f4]::after{border:1px solid #19be6b}.white[data-v-40d5d1f4]{background:#fff;color:#333}.white-hover[data-v-40d5d1f4]{background:#f7f7f9;color:#666}.white-outline[data-v-40d5d1f4]{color:#333;background:none}.white-outline[data-v-40d5d1f4]::after{border:1px solid #333}.gray[data-v-40d5d1f4]{background:#ededed;color:#999}.gray-hover[data-v-40d5d1f4]{background:#d5d5d5;color:#898989}.gray-outline[data-v-40d5d1f4]{color:#999;background:none}.gray-outline[data-v-40d5d1f4]::after{border:1px solid #999}.outline-hover[data-v-40d5d1f4]{opacity:.6}.circle-btn[data-v-40d5d1f4]{border-radius:%?40?%!important}.circle-btn[data-v-40d5d1f4]::after{border-radius:%?80?%!important}',""]),t.exports=e},a60d:function(t,e,n){var a=n("b6f9");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("4f06").default;o("ec1eb6de",a,!0,{sourceMap:!1,shadowMode:!1})},ac7b:function(t,e,n){"use strict";n.r(e);var a=n("0146"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},ad29:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.nodes.length?t._e():t._t("default"),n("v-uni-view",{style:t.showAm+(t.selectable?";user-select:text;-webkit-user-select:text":""),attrs:{id:"top",animation:t.scaleAm},on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t._touchstart.apply(void 0,arguments)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t._touchmove.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t._tap.apply(void 0,arguments)}}},[n("div",{attrs:{id:"rtf"+t.uid}})])],2)},i=[]},b6f9:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */@font-face{font-family:iconfont;src:url(//at.alicdn.com/t/font_1789197_z1gzlwq7idq.ttf?t=1589441233693) format("truetype")}.iconfont[data-v-0ad148e7]{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.iconshoucang[data-v-0ad148e7]:before{content:"\\e667"}.iconshoucangfill[data-v-0ad148e7]:before{content:"\\e6c9"}.iconjifen[data-v-0ad148e7]:before{content:"\\e642"}.iconradio-button-off[data-v-0ad148e7]:before{content:"\\e688"}.iconradio-button-on[data-v-0ad148e7]:before{content:"\\e689"}.iconhelp[data-v-0ad148e7]:before{content:"\\e752"}.iconwxpay[data-v-0ad148e7]:before{content:"\\e611"}.iconbalance[data-v-0ad148e7]:before{content:"\\e619"}.iconadd-select[data-v-0ad148e7]:before{content:"\\e7b0"}.iconsami-select[data-v-0ad148e7]:before{content:"\\e7b1"}.iconmap[data-v-0ad148e7]:before{content:"\\e758"}.iconsuccess[data-v-0ad148e7]:before{content:"\\e767"}.iconsuccess-fill[data-v-0ad148e7]:before{content:"\\e78d"}.iconiconset0136[data-v-0ad148e7]:before{content:"\\e623"}.iconzan[data-v-0ad148e7]:before{content:"\\e640"}.iconjifenqiandao[data-v-0ad148e7]:before{content:"\\e6a6"}.iconshouyeshouye[data-v-0ad148e7]:before{content:"\\e606"}.icondaohang[data-v-0ad148e7]:before{content:"\\e641"}.iconwodelianxikefu[data-v-0ad148e7]:before{content:"\\e671"}.iconwodexinyuan[data-v-0ad148e7]:before{content:"\\e675"}.iconphone[data-v-0ad148e7]:before{content:"\\e6dd"}.icondingdan[data-v-0ad148e7]:before{content:"\\e645"}.iconliwu[data-v-0ad148e7]:before{content:"\\e61c"}.iconyinpinyinliao[data-v-0ad148e7]:before{content:"\\e60d"}.iconyinpin[data-v-0ad148e7]:before{content:"\\e70b"}.iconwaimaixinxi[data-v-0ad148e7]:before{content:"\\e685"}.iconico[data-v-0ad148e7]:before{content:"\\e646"}.iconwode[data-v-0ad148e7]:before{content:"\\e616"}.icongengduofuwu[data-v-0ad148e7]:before{content:"\\e607"}.iconqucan[data-v-0ad148e7]:before{content:"\\e625"}.iconyou[data-v-0ad148e7]:before{content:"\\e618"}.iconshouhuodizhi[data-v-0ad148e7]:before{content:"\\e666"}.iconshangcheng[data-v-0ad148e7]:before{content:"\\e63b"}.iconadd[data-v-0ad148e7]:before{content:"\\e742"}.iconarrow-right[data-v-0ad148e7]:before{content:"\\e743"}.iconarrow-lift[data-v-0ad148e7]:before{content:"\\e744"}.iconarrow-up[data-v-0ad148e7]:before{content:"\\e745"}.iconclose[data-v-0ad148e7]:before{content:"\\e747"}.iconleftbutton[data-v-0ad148e7]:before{content:"\\e755"}.iconreduce[data-v-0ad148e7]:before{content:"\\e75e"}.iconseleted[data-v-0ad148e7]:before{content:"\\e763"}.iconRightbutton[data-v-0ad148e7]:before{content:"\\e765"}.iconleftbutton-fill[data-v-0ad148e7]:before{content:"\\e782"}.iconRightbutton-fill[data-v-0ad148e7]:before{content:"\\e78a"}.iconarrow-down[data-v-0ad148e7]:before{content:"\\e7b2"}.iconaixin1[data-v-0ad148e7]:before{content:"\\e63c"}uni-page-body[data-v-0ad148e7]{height:100%}.container[data-v-0ad148e7]{display:flex;flex-direction:column}.exchange-box[data-v-0ad148e7]{flex-shrink:0;height:%?200?%;background-color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center}.exchange-box .input-box[data-v-0ad148e7]{display:flex;align-items:stretch;width:70%;flex-shrink:0}.exchange-box .input-box uni-input[data-v-0ad148e7]{flex:1;height:%?80?%;border:%?1?% solid #eee;border-right:0;border-radius:%?8?% 0 0 %?8?%;padding:%?20?%;font-size:%?28?%;color:#5a5b5c}.exchange-box .input-box uni-button[data-v-0ad148e7]{border-radius:0 %?8?% %?8?% 0;display:flex;align-items:center}.tabbar[data-v-0ad148e7]{flex-shrink:0;width:100%;height:%?120?%;display:flex;align-items:center;justify-content:center}.tabbar .tab[data-v-0ad148e7]{flex:1;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:%?28?%;color:#5a5b5c;position:relative}.tabbar .tab .title[data-v-0ad148e7]{padding:%?15?% 0}.tabbar .tab.active[data-v-0ad148e7]{color:#adb838}.tabbar .tab.active .title[data-v-0ad148e7]{border-bottom:%?5?% solid #adb838}.bottom-box[data-v-0ad148e7]{height:%?80?%;flex-shrink:0}.bottom-box .item[data-v-0ad148e7]{padding:0 %?20?%;position:relative}.bottom-box .item[data-v-0ad148e7]::after{content:" ";border-right:%?1?% solid #919293;height:100%;position:absolute;right:0;top:0;-webkit-transform:scaleX(.5) scaleY(.8);transform:scaleX(.5) scaleY(.8)}.bottom-box .item[data-v-0ad148e7]:nth-last-child(1)::after{border-right:0}.coupon-list[data-v-0ad148e7]{height:calc(100vh - %?80?% - %?120?% - %?200?%);height:calc(100vh - %?80?% - %?120?% - %?200?% - 44px)}.wrapper[data-v-0ad148e7]{padding:0 %?40?%;display:flex;flex-direction:column}.wrapper .coupon[data-v-0ad148e7]{display:flex;flex-direction:column;background-color:#fff;margin-bottom:%?30?%;padding:0 %?30?%;border-radius:%?6?%;box-shadow:0 %?10?% %?10?% %?-10?% rgba(15,15,15,.1);position:relative}.wrapper .coupon[data-v-0ad148e7]::before{content:"";position:absolute;background-color:#f1f8fa;width:%?30?%;height:%?30?%;bottom:%?65?%;left:%?-15?%;border-radius:100%}.wrapper .coupon[data-v-0ad148e7]::after{content:"";position:absolute;background-color:#f1f8fa;width:%?30?%;height:%?30?%;bottom:%?65?%;right:%?-15?%;border-radius:100%}.wrapper .coupon .detail[data-v-0ad148e7]{padding:%?20?% 0;position:relative}.wrapper .coupon .detail[data-v-0ad148e7]::after{content:"";position:absolute;left:0;right:0;bottom:0;border-bottom:%?1?% dashed #c6c6c6;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.wrapper .coupon .detail .coupon-img[data-v-0ad148e7]{width:%?150?%;height:%?150?%;margin-right:%?40?%}.use-coupon-btn[data-v-0ad148e7]{width:95%;border-radius:50rem!important}',""]),t.exports=e},b85c:function(t,e,n){"use strict";n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=i;var a=o(n("06c5"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=(0,a.default)(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,d=!0,s=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return d=t.done,t},e:function(t){s=!0,r=t},f:function(){try{d||null==n["return"]||n["return"]()}finally{if(s)throw r}}}}},c93b:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__("4ea4");__webpack_require__("99af"),__webpack_require__("caad"),__webpack_require__("c975"),__webpack_require__("acd8"),__webpack_require__("ac1f"),__webpack_require__("2532"),__webpack_require__("466d"),__webpack_require__("5319"),__webpack_require__("1276"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _createForOfIteratorHelper2=_interopRequireDefault(__webpack_require__("b85c")),rpx=uni.getSystemInfoSync().screenWidth/750,cfg=__webpack_require__("3c17"),_default={name:"parser",data:function(){return{uid:this._uid,scaleAm:"",showAm:"",imgs:[],nodes:[]}},props:{html:null,autopause:{type:Boolean,default:!0},autosetTitle:{type:Boolean,default:!0},domain:String,gestureZoom:Boolean,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},mounted:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,n=this.length;e<n;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var n,a="",o=0;n=e[o];o++){if("/"==n&&"/"!=e[o-1]&&"/"!=e[o+1])break;a+=Math.random()>.5?n.toUpperCase():n}return a+=e.substr(o),this[t]=a}if(this[t]=e,e.includes("data:image")){var i=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!i)return}}},this.document=document.getElementById("rtf"+this._uid),this.html&&this.setContent(this.html)},beforeDestroy:function(){this._observer&&this._observer.disconnect(),this.imgList.each((function(t){})),clearInterval(this._timer)},methods:{_Dom2Str:function(t){var e,n="",a=(0,_createForOfIteratorHelper2.default)(t);try{for(a.s();!(e=a.n()).done;){var o=e.value;if("text"==o.type)n+=o.text;else{for(var i in n+="<"+o.name,o.attrs||{})n+=" "+i+'="'+o.attrs[i]+'"';o.children&&o.children.length?n+=">"+this._Dom2Str(o.children)+"</"+o.name+">":n+=">"}}}catch(r){a.e(r)}finally{a.f()}return n},_handleHtml:function(t,e){if("string"!=typeof t&&(t=this._Dom2Str(t.nodes||t)),!e){var n="<style scoped>@keyframes show{0%{opacity:0}100%{opacity:1}}img{max-width:100%}";for(var a in cfg.userAgentStyles)n+="".concat(a,"{").concat(cfg.userAgentStyles[a],"}");for(a in this.tagStyle)n+="".concat(a,"{").concat(this.tagStyle[a],"}");n+="</style>",t=n+t}return t.includes("rpx")&&(t=t.replace(/[0-9.]+\s*rpx/g,(function(t){return parseFloat(t)*rpx+"px"}))),t},setContent:function(t,e){var n=this;if(t){var a=document.createElement("div");e?this.rtf?this.rtf.appendChild(a):this.rtf=a:(this.rtf&&this.rtf.parentNode.removeChild(this.rtf),this.rtf=a),a.innerHTML=this._handleHtml(t,e);for(var o,i=this.rtf.getElementsByTagName("style"),r=0;o=i[r++];)o.innerHTML=o.innerHTML.replace(/body/g,"#rtf"+this._uid),o.setAttribute("scoped","true");!this._observer&&this.lazyLoad&&IntersectionObserver&&(this._observer=new IntersectionObserver((function(t){for(var e,a=0;e=t[a++];)e.isIntersecting&&(e.target.src=e.target.getAttribute("data-src"),e.target.removeAttribute("data-src"),n._observer.unobserve(e.target))}),{rootMargin:"500px 0px 500px 0px"}));var d=this,s=this.rtf.getElementsByTagName("title");s.length&&this.autosetTitle&&uni.setNavigationBarTitle({title:s[0].innerText}),this.imgList.length=0;for(var c,l=this.rtf.getElementsByTagName("img"),f=0,u=0;c=l[f];f++){var v=c.getAttribute("src");this.domain&&v&&("/"==v[0]?"/"==v[1]?c.src=(this.domain.includes("://")?this.domain.split("://")[0]:"")+":"+v:c.src=this.domain+v:v.includes("://")||(c.src=this.domain+"/"+v)),c.hasAttribute("ignore")||"A"==c.parentElement.nodeName||(c.i=u++,d.imgList.push(c.src||c.getAttribute("data-src")),c.onclick=function(){var t=!0;this.ignore=function(){return t=!1},d.$emit("imgtap",this),t&&uni.previewImage({current:this.i,urls:d.imgList})}),c.onerror=function(){var t=this;d.$emit("error",{source:"img",target:this,context:{setSrc:function(e){return t.src=e}}})},d.lazyLoad&&this._observer&&c.src&&0!=c.i&&(c.setAttribute("data-src",c.src),c.removeAttribute("src"),this._observer.observe(c))}var h,b=this.rtf.getElementsByTagName("a"),p=(0,_createForOfIteratorHelper2.default)(b);try{for(p.s();!(h=p.n()).done;){var m=h.value;m.onclick=function(){var t=!0,e=this.getAttribute("href");if(d.$emit("linkpress",{href:e,ignore:function(){return t=!1}}),t&&e)if("#"==e[0])d.useAnchor&&d.navigateTo({id:e.substr(1)});else{if(0==e.indexOf("http")||0==e.indexOf("//"))return!0;uni.navigateTo({url:e})}return!1}}}catch(A){p.e(A)}finally{p.f()}var g=this.rtf.getElementsByTagName("video");d.videoContexts=g;for(var _,x=0;_=g[x++];)_.style.maxWidth="100%",_.onerror=function(){d.$emit("error",{source:"video",target:this,context:this})},_.onplay=function(){if(d.autopause)for(var t,e=0;t=d.videoContexts[e++];)t!=this&&t.pause()};var y,w,k=this.rtf.getElementsByTagName("audios"),C=(0,_createForOfIteratorHelper2.default)(k);try{for(C.s();!(y=C.n()).done;){var T=y.value;T.onerror=function(){d.$emit("error",{source:"audio",target:this,context:this})}}}catch(A){C.e(A)}finally{C.f()}e||this.document.appendChild(this.rtf),this.$nextTick((function(){n.nodes=[1],n.$emit("load")})),setTimeout((function(){return n.showAm=""}),500),clearInterval(this._timer),this._timer=setInterval((function(){var t=[n.rtf.getBoundingClientRect()];n.width=t[0].width,t[0].height==w&&(n.$emit("ready",t[0]),clearInterval(n._timer)),w=t[0].height}),350),this.showWithAnimation&&!e&&(this.showAm="animation:show .5s")}else this.rtf&&!e&&this.rtf.parentNode.removeChild(this.rtf)},getText:function(){arguments.length>0&&void 0!==arguments[0]||this.nodes;return this.rtf.innerText},navigateTo:function(t){if(!this.useAnchor)return t.fail&&t.fail({errMsg:"Anchor is disabled"});if(!t.id)return window.scrollTo(0,this.rtf.offsetTop),t.success&&t.success({errMsg:"pageScrollTo:ok"});var e=document.getElementById(t.id);if(!e)return t.fail&&t.fail({errMsg:"Label not found"});t.scrollTop=this.rtf.offsetTop+e.offsetTop+(t.offset||0),uni.pageScrollTo(t)},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]},preLoad:function preLoad(html,num){html.constructor==Array&&(html=this._Dom2Str(html));var script="var contain=document.createElement('div');contain.innerHTML='"+html.replace(/'/g,"\\'")+"';for(var imgs=contain.querySelectorAll('img'),i=imgs.length-1;i>="+num+";i--)imgs[i].removeAttribute('src');";eval(script)},_tap:function(t){if(this.gestureZoom&&t.timeStamp-this._lastT<300){var e=t.touches[0].pageY-t.currentTarget.offsetTop;if(this._zoom)this._scaleAm.translateX(0).scale(1).step(),uni.pageScrollTo({scrollTop:(e+this._initY)/2-t.touches[0].clientY,duration:400});else{var n=t.touches[0].pageX-t.currentTarget.offsetLeft;this._initY=e,this._scaleAm=uni.createAnimation({transformOrigin:"".concat(n,"px ").concat(this._initY,"px 0"),timingFunction:"ease-in-out"}),this._scaleAm.scale(2).step(),this._tMax=n/2,this._tMin=(n-this.width)/2,this._tX=0}this._zoom=!this._zoom,this.scaleAm=this._scaleAm.export()}this._lastT=t.timeStamp},_touchstart:function(t){1==t.touches.length&&(this._initX=this._lastX=t.touches[0].pageX)},_touchmove:function(t){var e=t.touches[0].pageX-this._lastX;if(this._zoom&&1==t.touches.length&&Math.abs(e)>20){if(this._lastX=t.touches[0].pageX,this._tX<=this._tMin&&e<0||this._tX>=this._tMax&&e>0)return;this._tX+=e*Math.abs(this._lastX-this._initX)*.05,this._tX<this._tMin&&(this._tX=this._tMin),this._tX>this._tMax&&(this._tX=this._tMax),this._scaleAm.translateX(this._tX).step(),this.scaleAm=this._scaleAm.export()}}}};exports.default=_default},cacd:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"@-webkit-keyframes show-data-v-6e8bdad0{0%{opacity:0}100%{opacity:1}}@keyframes show-data-v-6e8bdad0{0%{opacity:0}100%{opacity:1}}\n\n\n\n",""]),t.exports=e},ec2b:function(t,e,n){"use strict";var a=n("7772"),o=n.n(a);o.a}}]);