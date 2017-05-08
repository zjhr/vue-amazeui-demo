webpackJsonp([9,22],{100:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(20);e.default={name:"vue-view",props:{pLeft:{type:Boolean,default:!1},pRight:{type:Boolean,default:!1}},data:function(){return{translate:"translate3d(0, 0, 0)"}},computed:{objectClass:function(){return{"am-view-push":"offcanvas"==this.$vnode.data.slot}},pushStyle:{get:function(){if("offcanvas"==this.$vnode.data.slot)return{transform:this.translate}},set:function(t){this.translate="translate3d("+t+",0,0)"}}},methods:{sildeOffcanvasStart:function(t){var e=this,n=t?"-":"";this.$parent.$slots.offcanvas.forEach(function(a,r){var s=a.componentOptions.propsData;return!(!s.silde&&t||"right"===s.silde&&!t||"top"===s.silde||"bottom"===s.silde)&&void(s.open&&(e.pushStyle=n+a.elm.firstElementChild.style.width))})},sildeOffcanvasEnd:function(){this.pushStyle=0}},watch:{pLeft:function(t,e){var n=this;this.$nextTick(function(){t===!0?n.sildeOffcanvasStart():n.sildeOffcanvasEnd()})},pRight:function(t,e){var n=this;this.$nextTick(function(){t===!0?n.sildeOffcanvasStart(!0):n.sildeOffcanvasEnd()})}},components:{Container:a.a}}},101:function(t,e,n){"use strict";var a=n(107),r=n.n(a);n.d(e,"a",function(){return r.a})},102:function(t,e,n){"use strict";var a=n(108),r=n.n(a);n.d(e,"a",function(){return r.a})},103:function(t,e,n){"use strict";var a=n(109),r=n.n(a);n.d(e,"a",function(){return r.a})},104:function(t,e,n){"use strict";var a=n(102),r=n(103),s=n(18),i=n(101);e.a={Navbar:a.a,Vueview:r.a,Icon:s.a,Group:i.a}},105:function(t,e,n){e=t.exports=n(75)(),e.push([t.i,"\n.am-view-push[data-v-4d85db6e] {\n    -webkit-transition: -webkit-transform .5s cubic-bezier(0.23, 1, 0.320, 1);\n    transition: -webkit-transform .5s cubic-bezier(0.23, 1, 0.320, 1);\n    transition: transform .5s cubic-bezier(0.23, 1, 0.320, 1);\n    transition: transform .5s cubic-bezier(0.23, 1, 0.320, 1), -webkit-transform .5s cubic-bezier(0.23, 1, 0.320, 1);\n}\n","",{version:3,sources:["/./src/components/vueview/vueview.vue"],names:[],mappings:";AACA;IACI,0EAA0E;IAC1E,kEAAkE;IAClE,0DAA0D;IAC1D,iHAAiH;CACpH",file:"vueview.vue",sourcesContent:["\n.am-view-push[data-v-4d85db6e] {\n    -webkit-transition: -webkit-transform .5s cubic-bezier(0.23, 1, 0.320, 1);\n    transition: -webkit-transform .5s cubic-bezier(0.23, 1, 0.320, 1);\n    transition: transform .5s cubic-bezier(0.23, 1, 0.320, 1);\n    transition: transform .5s cubic-bezier(0.23, 1, 0.320, 1), -webkit-transform .5s cubic-bezier(0.23, 1, 0.320, 1);\n}\n"],sourceRoot:"webpack://"}])},106:function(t,e,n){var a=n(105);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(76)("60b4fcf9",a,!0)},107:function(t,e,n){var a=n(0)(n(98),n(111),null,null);t.exports=a.exports},108:function(t,e,n){var a=n(0)(n(99),n(112),null,null);t.exports=a.exports},109:function(t,e,n){n(106);var a=n(0)(n(100),n(110),"data-v-4d85db6e",null);t.exports=a.exports},110:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",[n("div",{staticClass:"view",class:t.objectClass,style:t.pushStyle},[t._t("header"),t._v(" "),t.$slots.default&&!t.$slots.offcanvas?n("container",{attrs:{fill:"",scrollable:""}},[t._t("default")],2):t._e(),t._v(" "),t.$slots.offcanvas?t._t("default"):t._e(),t._v(" "),t.$slots.offcanvas?t._t("offcanvas"):t._e()],2)])},staticRenderFns:[]}},111:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"group",class:{"group-no-padded":t.noPadded}},[t.$slots.header||t.header?n("header",{staticClass:"group-header"},[t._v("\n        "+t._s(t.header)+"\n        "),t._t("header")],2):t._e(),t._v(" "),n("div",{staticClass:"group-body"},[t._t("default")],2),t._v(" "),t.$slots.footer||t.footer?n("footer",{staticClass:"group-footer"},[t._v("\n        "+t._s(t.footer)+"\n        "),t._t("footer")],2):t._e()])},staticRenderFns:[]}},112:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{ref:"navbar",staticClass:"navbar",class:t.objectClass},[n("h2",{staticClass:"navbar-title",class:t.NavbarTitle},[t._t("default")],2),t._v(" "),t.$slots.left?n("div",{staticClass:"navbar-nav navbar-left"},[t._t("left")],2):t._e(),t._v(" "),t.$slots.right?n("div",{staticClass:"navbar-nav navbar-right"},[t._t("right")],2):t._e()])},staticRenderFns:[]}},193:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(289),r=n.n(a),s=n(18);e.default={name:"slider",props:{noControls:Boolean,noPager:Boolean,interval:{type:[String,Number],default:5e3},noAutoPlay:Boolean,noLoop:Boolean,defaultActiveIndex:{type:[String,Number],default:0}},data:function(){return{sliderItemActive:1*this.defaultActiveIndex,isThumbs:!1,items:[],oneTap:!1,timeout:"",playtime:5e3,children:[]}},mounted:function(){if(this.updateIndex(),!this.noAutoPlay){var t=this.interval<1e3?1e3:1*this.interval;this.playtime=t,this.autoPlayFun(t)}},methods:{enterAfterFun:function(t,e){this.$emit("enterAfter",t,e)},leaveAfterFun:function(t,e){this.$emit("leaveAfter",t,e)},silderStartFun:function(){clearTimeout(this.timeout)},autoPlayFun:function(t){var e=this;this.timeout=setTimeout(function(){e.silderStartFun(),e.rightNavFun({autoPlay:t})},t)},updateIndex:function(){var t=this.children=this.$refs.sliderSlides.$children;if(t.length){for(var e=0,n=0;n<t.length;n++)t[n].currentIndex=n,n==this.defaultActiveIndex&&(t[n].activeItem=!0),this.items.push({active:t[n].activeItem,img:t[n].src}),t[n].src&&e++;e===t.length&&(this.isThumbs=!0)}},sliderFun:function(t,e,n){var a=this;if(!this.oneTap){this.oneTap=!0;var r=this.children,s=this.sliderItemActive,i=void 0;i=e===!1&&"left"===t?this.noLoop?s+1>=r.length?r.length-1:s+1:s+1==r.length?0:s+1:e===!1&&"right"===t?this.noLoop?s-1<0?0:s-1:s-1<0?r.length-1:s-1:e,r[s].slide=r[i].slide=t,r[s].leave=!0,r[i].enter=!0,r[i].activeItem=!0,this.noPager||(this.items[s].active=!1,this.items[i].active=!0),setTimeout(function(){r[s].activeItem=!1,a.sliderItemActive=i,a.oneTap=!1,n&&a.autoPlayFun(n)},500)}},leftNavFun:function(t){var e=t.index,n=void 0!==e&&e,a=t.autoPlay,r=void 0!==a&&a;this.sliderFun("right",n,r)},rightNavFun:function(t){var e=t.index,n=void 0!==e&&e,a=t.autoPlay,r=void 0!==a&&a;this.sliderFun("left",n,r)},pagerClickFun:function(t){this.silderStartFun(),t>this.sliderItemActive?this.rightNavFun({index:t,autoPlay:this.playtime}):t<this.sliderItemActive&&this.leftNavFun({index:t,autoPlay:this.playtime})}},computed:{sliderPagerClass:function(){return{"slider-indicators":!this.isThumbs,"slider-thumbs":this.isThumbs}}},components:{sliderSlides:r.a,Icon:s.a}}},194:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),r=n.n(a);e.default={name:"slider-item",props:{title:String,src:{type:[String,Boolean],default:!1}},data:function(){return{activeItem:!1,slide:"",currentIndex:0,enter:!1,leave:!1}},computed:{objectClass:function(){var t;return t={active:this.activeItem},r()(t,"slider-"+this.slide+"-enter",this.enter),r()(t,"slider-"+this.slide+"-leave",this.leave),t}},watch:{enter:function(t,e){var n=this;t&&setTimeout(function(){n.$parent.$parent.enterAfterFun(n.currentIndex,n.slide),n.enter=!1},500)},leave:function(t,e){var n=this;t&&setTimeout(function(){n.$parent.$parent.leaveAfterFun(n.currentIndex,n.slide),n.leave=!1},500)}}}},195:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"slider-slides",data:function(){return{startX:0,endX:0}},methods:{touchstartFun:function(t){var e=t.touches[0];this.startX=e.pageX,this.endX=0,this.$emit("silderStart")},touchmoveFun:function(t){var e=t.touches[0];this.endX=e.pageX-this.startX},touchendFun:function(t){this.endX>50?this.$emit("silderRight"):this.endX<-50&&this.$emit("silderLeft")}}}},215:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(19),r=n.n(a),s=n(104),i=n(224);e.default={methods:{enterAfterFun:function(t,e){console.log("进入下标："+t+",方向："+e)},leaveAfterFun:function(t,e){console.log("离开下标："+t+",方向："+e)}},components:r()({},s.a,i)}},224:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(287),r=n.n(a);n.d(e,"slider",function(){return r.a});var s=n(288),i=n.n(s);n.d(e,"sliderItem",function(){return i.a})},249:function(t,e,n){e=t.exports=n(75)(),e.push([t.i,"\n.slider-left-enter[data-v-bf89b0f8] {\n    -webkit-animation: sliderleftenter .5s ease forwards;\n            animation: sliderleftenter .5s ease forwards\n}\n.slider-left-leave[data-v-bf89b0f8] {\n    -webkit-animation: sliderleftleave .5s ease forwards;\n            animation: sliderleftleave .5s ease forwards\n}\n.slider-right-enter[data-v-bf89b0f8] {\n    -webkit-animation: sliderrightenter .5s ease forwards;\n            animation: sliderrightenter .5s ease forwards\n}\n.slider-right-leave[data-v-bf89b0f8] {\n    -webkit-animation: sliderrightleave .5s ease forwards;\n            animation: sliderrightleave .5s ease forwards\n}\n@-webkit-keyframes sliderrightleave {\n0% {\n        -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0)\n}\n100% {\n        position: absolute;\n        top: 0;\n        -webkit-transform: translate3d(100%, 0, 0);\n                transform: translate3d(100%, 0, 0)\n}\n}\n@keyframes sliderrightleave {\n0% {\n        -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0)\n}\n100% {\n        position: absolute;\n        top: 0;\n        -webkit-transform: translate3d(100%, 0, 0);\n                transform: translate3d(100%, 0, 0)\n}\n}\n@-webkit-keyframes sliderrightenter {\n0% {\n        position: absolute;\n        top: 0;\n        -webkit-transform: translate3d(-100%, 0, 0);\n                transform: translate3d(-100%, 0, 0)\n}\n100% {\n        -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0)\n}\n}\n@keyframes sliderrightenter {\n0% {\n        position: absolute;\n        top: 0;\n        -webkit-transform: translate3d(-100%, 0, 0);\n                transform: translate3d(-100%, 0, 0)\n}\n100% {\n        -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0)\n}\n}\n@-webkit-keyframes sliderleftenter {\n0% {\n        position: absolute;\n        top: 0;\n        -webkit-transform: translate3d(100%, 0, 0);\n                transform: translate3d(100%, 0, 0)\n}\n100% {\n        -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0)\n}\n}\n@keyframes sliderleftenter {\n0% {\n        position: absolute;\n        top: 0;\n        -webkit-transform: translate3d(100%, 0, 0);\n                transform: translate3d(100%, 0, 0)\n}\n100% {\n        -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0)\n}\n}\n@-webkit-keyframes sliderleftleave {\n0% {\n        -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0)\n}\n100% {\n        position: absolute;\n        top: 0;\n        -webkit-transform: translate3d(-100%, 0, 0);\n                transform: translate3d(-100%, 0, 0)\n}\n}\n@keyframes sliderleftleave {\n0% {\n        -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0)\n}\n100% {\n        position: absolute;\n        top: 0;\n        -webkit-transform: translate3d(-100%, 0, 0);\n                transform: translate3d(-100%, 0, 0)\n}\n}\n","",{version:3,sources:["/./src/components/slider/sliderItem.vue"],names:[],mappings:";AACA;IACI,qDAAqD;YAC7C,4CAA4C;CACvD;AACD;IACI,qDAAqD;YAC7C,4CAA4C;CACvD;AACD;IACI,sDAAsD;YAC9C,6CAA6C;CACxD;AACD;IACI,sDAAsD;YAC9C,6CAA6C;CACxD;AACD;AACA;QACQ,wCAAwC;gBAChC,+BAA+B;CAC9C;AACD;QACQ,mBAAmB;QACnB,OAAO;QACP,2CAA2C;gBACnC,kCAAkC;CACjD;CACA;AACD;AACA;QACQ,wCAAwC;gBAChC,+BAA+B;CAC9C;AACD;QACQ,mBAAmB;QACnB,OAAO;QACP,2CAA2C;gBACnC,kCAAkC;CACjD;CACA;AACD;AACA;QACQ,mBAAmB;QACnB,OAAO;QACP,4CAA4C;gBACpC,mCAAmC;CAClD;AACD;QACQ,wCAAwC;gBAChC,+BAA+B;CAC9C;CACA;AACD;AACA;QACQ,mBAAmB;QACnB,OAAO;QACP,4CAA4C;gBACpC,mCAAmC;CAClD;AACD;QACQ,wCAAwC;gBAChC,+BAA+B;CAC9C;CACA;AACD;AACA;QACQ,mBAAmB;QACnB,OAAO;QACP,2CAA2C;gBACnC,kCAAkC;CACjD;AACD;QACQ,wCAAwC;gBAChC,+BAA+B;CAC9C;CACA;AACD;AACA;QACQ,mBAAmB;QACnB,OAAO;QACP,2CAA2C;gBACnC,kCAAkC;CACjD;AACD;QACQ,wCAAwC;gBAChC,+BAA+B;CAC9C;CACA;AACD;AACA;QACQ,wCAAwC;gBAChC,+BAA+B;CAC9C;AACD;QACQ,mBAAmB;QACnB,OAAO;QACP,4CAA4C;gBACpC,mCAAmC;CAClD;CACA;AACD;AACA;QACQ,wCAAwC;gBAChC,+BAA+B;CAC9C;AACD;QACQ,mBAAmB;QACnB,OAAO;QACP,4CAA4C;gBACpC,mCAAmC;CAClD;CACA",file:"sliderItem.vue",sourcesContent:["\n.slider-left-enter[data-v-bf89b0f8] {\n    -webkit-animation: sliderleftenter .5s ease forwards;\n            animation: sliderleftenter .5s ease forwards\n}\n.slider-left-leave[data-v-bf89b0f8] {\n    -webkit-animation: sliderleftleave .5s ease forwards;\n            animation: sliderleftleave .5s ease forwards\n}\n.slider-right-enter[data-v-bf89b0f8] {\n    -webkit-animation: sliderrightenter .5s ease forwards;\n            animation: sliderrightenter .5s ease forwards\n}\n.slider-right-leave[data-v-bf89b0f8] {\n    -webkit-animation: sliderrightleave .5s ease forwards;\n            animation: sliderrightleave .5s ease forwards\n}\n@-webkit-keyframes sliderrightleave {\n0% {\n        -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0)\n}\n100% {\n        position: absolute;\n        top: 0;\n        -webkit-transform: translate3d(100%, 0, 0);\n                transform: translate3d(100%, 0, 0)\n}\n}\n@keyframes sliderrightleave {\n0% {\n        -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0)\n}\n100% {\n        position: absolute;\n        top: 0;\n        -webkit-transform: translate3d(100%, 0, 0);\n                transform: translate3d(100%, 0, 0)\n}\n}\n@-webkit-keyframes sliderrightenter {\n0% {\n        position: absolute;\n        top: 0;\n        -webkit-transform: translate3d(-100%, 0, 0);\n                transform: translate3d(-100%, 0, 0)\n}\n100% {\n        -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0)\n}\n}\n@keyframes sliderrightenter {\n0% {\n        position: absolute;\n        top: 0;\n        -webkit-transform: translate3d(-100%, 0, 0);\n                transform: translate3d(-100%, 0, 0)\n}\n100% {\n        -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0)\n}\n}\n@-webkit-keyframes sliderleftenter {\n0% {\n        position: absolute;\n        top: 0;\n        -webkit-transform: translate3d(100%, 0, 0);\n                transform: translate3d(100%, 0, 0)\n}\n100% {\n        -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0)\n}\n}\n@keyframes sliderleftenter {\n0% {\n        position: absolute;\n        top: 0;\n        -webkit-transform: translate3d(100%, 0, 0);\n                transform: translate3d(100%, 0, 0)\n}\n100% {\n        -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0)\n}\n}\n@-webkit-keyframes sliderleftleave {\n0% {\n        -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0)\n}\n100% {\n        position: absolute;\n        top: 0;\n        -webkit-transform: translate3d(-100%, 0, 0);\n                transform: translate3d(-100%, 0, 0)\n}\n}\n@keyframes sliderleftleave {\n0% {\n        -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0)\n}\n100% {\n        position: absolute;\n        top: 0;\n        -webkit-transform: translate3d(-100%, 0, 0);\n                transform: translate3d(-100%, 0, 0)\n}\n}\n"],sourceRoot:"webpack://"}])},252:function(t,e,n){e=t.exports=n(75)(),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"Slider.vue",sourceRoot:"webpack://"}])},276:function(t,e,n){var a=n(249);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(76)("58463591",a,!0)},279:function(t,e,n){var a=n(252);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(76)("b95aa4d0",a,!0)},287:function(t,e,n){var a=n(0)(n(193),n(294),null,null);t.exports=a.exports},288:function(t,e,n){n(276);var a=n(0)(n(194),n(322),"data-v-bf89b0f8",null);t.exports=a.exports},289:function(t,e,n){var a=n(0)(n(195),n(326),null,null);t.exports=a.exports},294:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slider"},[n("slider-slides",{ref:"sliderSlides",on:{silderRight:function(e){t.leftNavFun({index:!1,autoPlay:t.playtime})},silderLeft:function(e){t.rightNavFun({index:!1,autoPlay:t.playtime})},silderStart:t.silderStartFun}},[t._t("default")],2),t._v(" "),t.noControls?t._e():n("div",{staticClass:"slider-control"},[n("span",{staticClass:"slider-control-prev"},[n("icon",{attrs:{name:"left-nav"},on:{iconClick:t.leftNavFun}})],1),t._v(" "),n("span",{staticClass:"slider-control-next"},[n("icon",{attrs:{name:"right-nav"},on:{iconClick:t.rightNavFun}})],1)]),t._v(" "),t.noPager?t._e():n("ol",{staticClass:"slider-pager",class:t.sliderPagerClass},t._l(t.items,function(e,a){return n("li",{class:{active:e.active},on:{click:function(e){t.pagerClickFun(a)}}},[t.isThumbs?n("img",{attrs:{src:e.img}}):t._e()])}))],1)},staticRenderFns:[]}},322:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{key:t.currentIndex,class:t.objectClass},[t._t("default"),t._v(" "),t.title?n("div",{staticClass:"slider-caption",domProps:{textContent:t._s(t.title)}}):t._e()],2)},staticRenderFns:[]}},326:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"slider-slides",on:{touchstart:function(e){e.stopPropagation(),t.touchstartFun(e)},touchmove:function(e){e.stopPropagation(),t.touchmoveFun(e)},touchend:function(e){e.stopPropagation(),t.touchendFun(e)}}},[t._t("default")],2)},staticRenderFns:[]}},327:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vueview",[n("navbar",{attrs:{blue:""},slot:"header"},[t._v("\n        Slider\n        "),n("icon",{attrs:{name:"left-nav",titleRight:"返回",back:""},slot:"left"})],1),t._v(" "),n("group",{attrs:{header:"默认",noPadded:""}},[n("slider",{on:{enterAfter:t.enterAfterFun,leaveAfter:t.leaveAfterFun}},[n("slider-item",[n("img",{attrs:{src:"http://s.amazeui.org/media/i/demos/bing-1.jpg"}})]),t._v(" "),n("slider-item",[n("img",{attrs:{src:"http://s.amazeui.org/media/i/demos/bing-2.jpg"}})]),t._v(" "),n("slider-item",[n("img",{attrs:{src:"http://s.amazeui.org/media/i/demos/bing-3.jpg"}})]),t._v(" "),n("slider-item",[n("img",{attrs:{src:"http://s.amazeui.org/media/i/demos/bing-4.jpg"}})])],1)],1),t._v(" "),n("group",{attrs:{header:"缩略图",noPadded:""}},[n("slider",{attrs:{noControls:""}},[n("slider-item",{attrs:{src:"http://s.amazeui.org/media/i/demos/bing-1.jpg"}},[n("img",{attrs:{src:"http://s.amazeui.org/media/i/demos/bing-1.jpg"}})]),t._v(" "),n("slider-item",{attrs:{src:"http://s.amazeui.org/media/i/demos/bing-2.jpg"}},[n("img",{attrs:{src:"http://s.amazeui.org/media/i/demos/bing-2.jpg"}})]),t._v(" "),n("slider-item",{attrs:{src:"http://s.amazeui.org/media/i/demos/bing-3.jpg"}},[n("img",{attrs:{src:"http://s.amazeui.org/media/i/demos/bing-3.jpg"}})]),t._v(" "),n("slider-item",{attrs:{src:"http://s.amazeui.org/media/i/demos/bing-4.jpg"}},[n("img",{attrs:{src:"http://s.amazeui.org/media/i/demos/bing-4.jpg"}})])],1)],1),t._v(" "),n("group",{attrs:{header:"标题",noPadded:""}},[n("slider",[n("slider-item",{attrs:{title:"标题1"}},[n("img",{attrs:{src:"http://s.amazeui.org/media/i/demos/bing-1.jpg"}})]),t._v(" "),n("slider-item",{attrs:{title:"标题2"}},[n("img",{attrs:{src:"http://s.amazeui.org/media/i/demos/bing-2.jpg"}})]),t._v(" "),n("slider-item",{attrs:{title:"标题3"}},[n("img",{attrs:{src:"http://s.amazeui.org/media/i/demos/bing-3.jpg"}})]),t._v(" "),n("slider-item",{attrs:{title:"标题4"}},[n("img",{attrs:{src:"http://s.amazeui.org/media/i/demos/bing-4.jpg"}})])],1)],1)],1)},staticRenderFns:[]}},92:function(t,e,n){n(279);var a=n(0)(n(215),n(327),"data-v-f5292406",null);t.exports=a.exports},98:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"group",props:{header:String,footer:String,noPadded:Boolean}}},99:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(8);e.default={name:"navbar",mixins:[a.a],props:{titleOnLeft:{type:Boolean}},data:function(){return{name:"navbar"}},computed:{NavbarTitle:function(){return{"navbar-center":!this.titleOnLeft,"navbar-left":this.titleOnLeft}}}}}});