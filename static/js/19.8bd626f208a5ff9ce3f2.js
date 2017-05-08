webpackJsonp([19,22],{100:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(20);e.default={name:"vue-view",props:{pLeft:{type:Boolean,default:!1},pRight:{type:Boolean,default:!1}},data:function(){return{translate:"translate3d(0, 0, 0)"}},computed:{objectClass:function(){return{"am-view-push":"offcanvas"==this.$vnode.data.slot}},pushStyle:{get:function(){if("offcanvas"==this.$vnode.data.slot)return{transform:this.translate}},set:function(t){this.translate="translate3d("+t+",0,0)"}}},methods:{sildeOffcanvasStart:function(t){var e=this,n=t?"-":"";this.$parent.$slots.offcanvas.forEach(function(a,s){var r=a.componentOptions.propsData;return!(!r.silde&&t||"right"===r.silde&&!t||"top"===r.silde||"bottom"===r.silde)&&void(r.open&&(e.pushStyle=n+a.elm.firstElementChild.style.width))})},sildeOffcanvasEnd:function(){this.pushStyle=0}},watch:{pLeft:function(t,e){var n=this;this.$nextTick(function(){t===!0?n.sildeOffcanvasStart():n.sildeOffcanvasEnd()})},pRight:function(t,e){var n=this;this.$nextTick(function(){t===!0?n.sildeOffcanvasStart(!0):n.sildeOffcanvasEnd()})}},components:{Container:a.a}}},101:function(t,e,n){"use strict";var a=n(107),s=n.n(a);n.d(e,"a",function(){return s.a})},102:function(t,e,n){"use strict";var a=n(108),s=n.n(a);n.d(e,"a",function(){return s.a})},103:function(t,e,n){"use strict";var a=n(109),s=n.n(a);n.d(e,"a",function(){return s.a})},104:function(t,e,n){"use strict";var a=n(102),s=n(103),r=n(18),i=n(101);e.a={Navbar:a.a,Vueview:s.a,Icon:r.a,Group:i.a}},105:function(t,e,n){e=t.exports=n(75)(),e.push([t.i,"\n.am-view-push[data-v-4d85db6e] {\n    -webkit-transition: -webkit-transform .5s cubic-bezier(0.23, 1, 0.320, 1);\n    transition: -webkit-transform .5s cubic-bezier(0.23, 1, 0.320, 1);\n    transition: transform .5s cubic-bezier(0.23, 1, 0.320, 1);\n    transition: transform .5s cubic-bezier(0.23, 1, 0.320, 1), -webkit-transform .5s cubic-bezier(0.23, 1, 0.320, 1);\n}\n","",{version:3,sources:["/./src/components/vueview/vueview.vue"],names:[],mappings:";AACA;IACI,0EAA0E;IAC1E,kEAAkE;IAClE,0DAA0D;IAC1D,iHAAiH;CACpH",file:"vueview.vue",sourcesContent:["\n.am-view-push[data-v-4d85db6e] {\n    -webkit-transition: -webkit-transform .5s cubic-bezier(0.23, 1, 0.320, 1);\n    transition: -webkit-transform .5s cubic-bezier(0.23, 1, 0.320, 1);\n    transition: transform .5s cubic-bezier(0.23, 1, 0.320, 1);\n    transition: transform .5s cubic-bezier(0.23, 1, 0.320, 1), -webkit-transform .5s cubic-bezier(0.23, 1, 0.320, 1);\n}\n"],sourceRoot:"webpack://"}])},106:function(t,e,n){var a=n(105);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(76)("60b4fcf9",a,!0)},107:function(t,e,n){var a=n(0)(n(98),n(111),null,null);t.exports=a.exports},108:function(t,e,n){var a=n(0)(n(99),n(112),null,null);t.exports=a.exports},109:function(t,e,n){n(106);var a=n(0)(n(100),n(110),"data-v-4d85db6e",null);t.exports=a.exports},110:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",[n("div",{staticClass:"view",class:t.objectClass,style:t.pushStyle},[t._t("header"),t._v(" "),t.$slots.default&&!t.$slots.offcanvas?n("container",{attrs:{fill:"",scrollable:""}},[t._t("default")],2):t._e(),t._v(" "),t.$slots.offcanvas?t._t("default"):t._e(),t._v(" "),t.$slots.offcanvas?t._t("offcanvas"):t._e()],2)])},staticRenderFns:[]}},111:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"group",class:{"group-no-padded":t.noPadded}},[t.$slots.header||t.header?n("header",{staticClass:"group-header"},[t._v("\n        "+t._s(t.header)+"\n        "),t._t("header")],2):t._e(),t._v(" "),n("div",{staticClass:"group-body"},[t._t("default")],2),t._v(" "),t.$slots.footer||t.footer?n("footer",{staticClass:"group-footer"},[t._v("\n        "+t._s(t.footer)+"\n        "),t._t("footer")],2):t._e()])},staticRenderFns:[]}},112:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{ref:"navbar",staticClass:"navbar",class:t.objectClass},[n("h2",{staticClass:"navbar-title",class:t.NavbarTitle},[t._t("default")],2),t._v(" "),t.$slots.left?n("div",{staticClass:"navbar-nav navbar-left"},[t._t("left")],2):t._e(),t._v(" "),t.$slots.right?n("div",{staticClass:"navbar-nav navbar-right"},[t._t("right")],2):t._e()])},staticRenderFns:[]}},200:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(19),s=n.n(a),r=n(104);e.default={components:s()({},r.a)}},234:function(t,e,n){e=t.exports=n(75)(),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"About.vue",sourceRoot:"webpack://"}])},261:function(t,e,n){var a=n(234);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(76)("194d2d14",a,!0)},304:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vueview",[n("navbar",{attrs:{blue:""},slot:"header"},[t._v("\n        About\n        "),n("icon",{attrs:{name:"left-nav",titleRight:"返回",back:""},slot:"left"})],1),t._v(" "),n("group",{attrs:{header:"关于 vue-amazeui",footer:"ver 1.0.0"}},[n("p",[t._v("vue-amazeui 是基于Amaze UI Touch React.js 的移动端 Web 组件库样式基础上用Vue2.0.js来重构的移动端 Web 组件库。"),n("br"),t._v(" PS：个人写来玩的，大概花了两个星期完工，可能会存在一些bug")])]),t._v(" "),n("group",{attrs:{header:"开发人员"}},[n("a",{attrs:{href:"https://github.com/zjhr",target:"_black"}},[t._v("@zjhr")])]),t._v(" "),n("group",{attrs:{header:"鸣谢"}},[t._v("\n        Amaze UI Touch开发者："),n("br"),t._v(" "),n("a",{attrs:{href:"https://github.com/minwe",target:"_blank"}},[t._v("@minwe")]),t._v("，"),n("a",{attrs:{href:"https://github.com/huangzhipeng",target:"_blank"}},[t._v("@huangzhipeng")]),t._v(" "),n("p",[t._v(" 感谢所有参与、关注 vue-amazeui 的用户。")])]),t._v(" "),n("group",{attrs:{header:"版权"}},[t._v("\n        MIT © 2015 - 2017 AllMobilize Inc.\n    ")]),t._v(" "),n("group",{attrs:{header:"UA"}},[t._v("\n        Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36\n    ")])],1)},staticRenderFns:[]}},77:function(t,e,n){n(261);var a=n(0)(n(200),n(304),"data-v-3ea63c21",null);t.exports=a.exports},98:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"group",props:{header:String,footer:String,noPadded:Boolean}}},99:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(8);e.default={name:"navbar",mixins:[a.a],props:{titleOnLeft:{type:Boolean}},data:function(){return{name:"navbar"}},computed:{NavbarTitle:function(){return{"navbar-center":!this.titleOnLeft,"navbar-left":this.titleOnLeft}}}}}});