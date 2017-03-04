webpackJsonp([6,22],{102:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"group",props:{header:String,footer:String,noPadded:Boolean}}},103:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e(8);t.default={name:"navbar",mixins:[s.a],props:{titleOnLeft:{type:Boolean}},data:function(){return{name:"navbar"}},computed:{NavbarTitle:function(){return{"navbar-center":!this.titleOnLeft,"navbar-left":this.titleOnLeft}}}}},104:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e(20);t.default={name:"vueview",props:{pLeft:{type:Boolean,default:!1},pRight:{type:Boolean,default:!1}},data:function(){return{translate:"translate3d(0, 0, 0)"}},computed:{objectClass:function(){return{"am-view-push":"offcanvas"==this.$vnode.data.slot}},pushStyle:{get:function(){if("offcanvas"==this.$vnode.data.slot)return{transform:this.translate}},set:function(n){this.translate="translate3d("+n+",0,0)"}}},methods:{sildeOffcanvasStart:function(n){var t=this,e=n?"-":"";this.$parent.$slots.offcanvas.forEach(function(s,a){var o=s.componentOptions.propsData;return!(!o.silde&&n||"right"===o.silde&&!n||"top"===o.silde||"bottom"===o.silde)&&void(o.open&&(t.pushStyle=e+s.elm.firstElementChild.style.width))})},sildeOffcanvasEnd:function(){this.pushStyle=0}},watch:{pLeft:function(n,t){var e=this;this.$nextTick(function(){n===!0?e.sildeOffcanvasStart():e.sildeOffcanvasEnd()})},pRight:function(n,t){var e=this;this.$nextTick(function(){n===!0?e.sildeOffcanvasStart(!0):e.sildeOffcanvasEnd()})}},components:{Container:s.a}}},105:function(n,t,e){"use strict";var s=e(115),a=e.n(s);e.d(t,"a",function(){return a.a})},106:function(n,t,e){"use strict";var s=e(116),a=e.n(s);e.d(t,"a",function(){return a.a})},107:function(n,t,e){"use strict";var s=e(117),a=e.n(s);e.d(t,"a",function(){return a.a})},108:function(n,t,e){"use strict";var s=e(106),a=e(107),o=e(18),i=e(105);t.a={Navbar:s.a,Vueview:a.a,Icon:o.a,Group:i.a}},109:function(n,t,e){t=n.exports=e(79)(),t.push([n.i,"\n.am-view-push[data-v-4d85db6e] {\n    transition: transform .5s cubic-bezier(0.23, 1, 0.320, 1);\n}\n","",{version:3,sources:["/./src/components/vueview/vueview.vue"],names:[],mappings:";AACA;IACI,0DAA0D;CAC7D",file:"vueview.vue",sourcesContent:["\n.am-view-push[data-v-4d85db6e] {\n    transition: transform .5s cubic-bezier(0.23, 1, 0.320, 1);\n}\n"],sourceRoot:"webpack://"}])},110:function(n,t,e){t=n.exports=e(79)(),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"group.vue",sourceRoot:"webpack://"}])},111:function(n,t,e){t=n.exports=e(79)(),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"navbar.vue",sourceRoot:"webpack://"}])},112:function(n,t,e){var s=e(109);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);e(80)("60b4fcf9",s,!0)},113:function(n,t,e){var s=e(110);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);e(80)("09e57e73",s,!0)},114:function(n,t,e){var s=e(111);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);e(80)("15c1c47f",s,!0)},115:function(n,t,e){e(113);var s=e(0)(e(102),e(119),"data-v-4ff595f1",null);n.exports=s.exports},116:function(n,t,e){e(114);var s=e(0)(e(103),e(120),"data-v-7945db71",null);n.exports=s.exports},117:function(n,t,e){e(112);var s=e(0)(e(104),e(118),"data-v-4d85db6e",null);n.exports=s.exports},118:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("transition",[e("div",{staticClass:"view",class:n.objectClass,style:n.pushStyle},[n._t("header"),n._v(" "),n._t("offcanvas"),n._v(" "),n.$slots.default?e("container",{attrs:{fill:"",scrollable:""}},[n._t("default")],2):n._e()],2)])},staticRenderFns:[]}},119:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"group",class:{"group-no-padded":n.noPadded}},[n.$slots.header||n.header?e("header",{staticClass:"group-header"},[n._v("\n        "+n._s(n.header)+"\n        "),n._t("header")],2):n._e(),n._v(" "),e("div",{staticClass:"group-body"},[n._t("default")],2),n._v(" "),n.$slots.footer||n.footer?e("footer",{staticClass:"group-footer"},[n._v("\n        "+n._s(n.footer)+"\n        "),n._t("footer")],2):n._e()])},staticRenderFns:[]}},120:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("header",{ref:"navbar",staticClass:"navbar",class:n.objectClass},[e("h2",{staticClass:"navbar-title",class:n.NavbarTitle},[n._t("default")],2),n._v(" "),n.$slots.left?e("div",{staticClass:"navbar-nav navbar-left"},[n._t("left")],2):n._e(),n._v(" "),n.$slots.right?e("div",{staticClass:"navbar-nav navbar-right"},[n._t("right")],2):n._e()])},staticRenderFns:[]}},123:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e(130),a=e.n(s);e.d(t,"vueButton",function(){return a.a});var o=e(131),i=e.n(o);e.d(t,"buttonGroup",function(){return i.a})},124:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e(2),a=e.n(s),o=e(8);t.default={name:"vue-button",mixins:[o.a],props:{elm:{type:String,default:"button"},href:{type:[Boolean,String],default:!1},target:{type:[Boolean,String],default:!1},amSize:String,hollow:Boolean,block:Boolean,active:Boolean,disabled:Boolean},data:function(){return{name:"btn",pamSize:"",phollow:!1}},methods:{buttonClickFun:function(n){this.$emit("buttonClick",n)}},render:function(n){var t;return n(this.href?"a":this.elm,{attrs:{disabled:this.disabled,target:this.target},class:[(t={btn:!0,"btn-block":this.block},a()(t,"btn-"+(this.amSize||this.pamSize),this.amSize||this.pamSize),a()(t,"disabled",this.disabled),a()(t,"active",this.active),a()(t,"btn-hollow",this.hollow||this.phollow),t),this.objectClass],on:{click:this.buttonClickFun}},this.$slots.default)}}},125:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e(8);t.default={name:"button-group",mixins:[s.a],props:{toolbar:Boolean,hollow:Boolean,justify:Boolean,stacked:Boolean,amSize:String},methods:{propsDataFun:function(){var n=this.objectprops,t=n.hollow,e=n.amSize,s=n.blue,a=n.sblue,o=n.green,i=n.orange,r=n.red,l=n.black,c=n.amStyle;this.$children.forEach(function(n,u){n.phollow=t,n.pamSize=e,n.pblue=s,n.psblue=a,n.pgreen=o,n.porange=i,n.pred=r,n.pblack=l,n.pamStyle=c})}},mounted:function(){this.propsDataFun()},data:function(){return{name:"btn-grounp"}},computed:{objectprops:function(){return{hollow:this.hollow,amSize:this.amSize,blue:this.blue,sblue:this.sblue,green:this.green,orange:this.orange,red:this.red,black:this.black,amStyle:this.amStyle}},btnObjectClass:function(){return{"btn-toolbar":this.toolbar,"btn-group":!this.toolbar,"btn-group-justify":this.justify,"btn-group-stacked":this.stacked}}},watch:{objectprops:function(){this.propsDataFun()}}}},126:function(n,t,e){t=n.exports=e(79)(),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"buttonGroup.vue",sourceRoot:"webpack://"}])},127:function(n,t,e){t=n.exports=e(79)(),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"button.vue",sourceRoot:"webpack://"}])},128:function(n,t,e){var s=e(126);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);e(80)("388c4dfc",s,!0)},129:function(n,t,e){var s=e(127);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);e(80)("3e8599ec",s,!0)},130:function(n,t,e){e(129);var s=e(0)(e(124),null,"data-v-e60add9e",null);n.exports=s.exports},131:function(n,t,e){e(128);var s=e(0)(e(125),e(132),"data-v-00e8ca7e",null);n.exports=s.exports},132:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{class:[n.btnObjectClass,n.objectClass]},[n._t("default")],2)},staticRenderFns:[]}},170:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"card",props:{title:String,bg:String},computed:{img:function(){return this.bg?"background-image:url("+this.bg+")":""}}}},174:function(n,t,e){"use strict";var s=e(184),a=e.n(s);e.d(t,"a",function(){return a.a})},176:function(n,t,e){t=n.exports=e(79)(),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"card.vue",sourceRoot:"webpack://"}])},180:function(n,t,e){var s=e(176);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);e(80)("0c09a0b2",s,!0)},184:function(n,t,e){e(180);var s=e(0)(e(170),e(188),"data-v-1018679e",null);n.exports=s.exports},188:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"card"},[n.$slots.header||n.title?e("div",{staticClass:"card-header",class:{"card-cover":n.bg},style:n.img},[n.title?e("h2",{staticClass:"card-title"},[n._v("\n            "+n._s(n.title)+"\n        ")]):n._e(),n._v(" "),n.$slots.header?n._t("header"):n._e()],2):n._e(),n._v(" "),e("div",{staticClass:"card-body"},[n._t("default")],2),n._v(" "),n.$slots.footer?e("div",{staticClass:"card-footer"},[n._t("footer")],2):n._e()])},staticRenderFns:[]}},230:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e(19),a=e.n(s),o=e(123),i=e(339),r=e.n(i);t.default={name:"tabs",props:{value:{type:[String,Number],default:0},inset:Boolean,amSize:{type:String,default:"sm"}},data:function(){return{itemValue:this.value}},mounted:function(){this.updateIndex()},methods:{updateIndex:function(){var n=this.$refs.buttonGroup.$children,t=this.$refs.tabsBody.$children;if((n||t)&&n.length===t.length){for(var e=!1,s=0;s<n.length;s++)n[s].currentIndex=s,t[s].currentIndex=s,n[s].active&&(this.itemValue=s,t[s].activeItem=e=!0);e||(n[this.itemValue].activeItem=!0,t[this.itemValue].activeItem=!0)}}},watch:{value:function(n,t){this.itemValue=n},itemValue:function(n,t){this.$refs.buttonGroup.$children[n].activeItem=!0,this.$refs.buttonGroup.$children[t].activeItem=!1,this.$refs.tabsBody.$children[n].activeItem=!0,this.$refs.tabsBody.$children[t].activeItem=!1,this.$emit("input",n),this.$emit("change",n)}},components:a()({},o,{tabsBody:r.a})}},231:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"tabs-body"}},232:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"tabs-item",data:function(){return{activeItem:!1}}}},233:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e(19),a=e.n(s),o=e(123),i=e(8);t.default={name:"tabs-item",mixins:[i.a],props:{hollow:Boolean,disabled:Boolean},data:function(){return{name:"btn",activeItem:this.active,pamSize:""}},methods:{tabsItemClickFun:function(n){this.$parent.$parent.itemValue=this.currentIndex,this.$emit("tabsItemClick",n)}},components:a()({},o)}},251:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e(19),a=e.n(s),o=e(108),i=e(259),r=e(123),l=e(174);t.default={data:function(){return{selected:0}},methods:{buttonClickFun:function(){this.selected=1},tabsItemClickFun:function(){alert("触发了")}},components:a()({},o.a,i,r,{Card:l.a})}},259:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e(338),a=e.n(s);e.d(t,"Tabs",function(){return a.a});var o=e(341),i=e.n(o);e.d(t,"tabsItem",function(){return i.a});var r=e(340),l=e.n(r);e.d(t,"tabsDesc",function(){return l.a})},273:function(n,t,e){t=n.exports=e(79)(),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"tabsDesc.vue",sourceRoot:"webpack://"}])},276:function(n,t,e){t=n.exports=e(79)(),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"tabsItem.vue",sourceRoot:"webpack://"}])},279:function(n,t,e){t=n.exports=e(79)(),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"Tabs.vue",sourceRoot:"webpack://"}])},283:function(n,t,e){t=n.exports=e(79)(),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"tabsBody.vue",sourceRoot:"webpack://"}])},291:function(n,t,e){t=n.exports=e(79)(),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"tabs.vue",sourceRoot:"webpack://"}])},307:function(n,t,e){var s=e(273);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);e(80)("31a46d39",s,!0)},310:function(n,t,e){var s=e(276);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);e(80)("1660b888",s,!0)},313:function(n,t,e){var s=e(279);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);e(80)("26788ebe",s,!0)},317:function(n,t,e){var s=e(283);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);e(80)("4487b1f0",s,!0)},325:function(n,t,e){var s=e(291);"string"==typeof s&&(s=[[n.i,s,""]]),s.locals&&(n.exports=s.locals);e(80)("5d2a3c6f",s,!0)},338:function(n,t,e){e(325);var s=e(0)(e(230),e(373),"data-v-c7b8fe1e",null);n.exports=s.exports},339:function(n,t,e){e(317);var s=e(0)(e(231),e(365),"data-v-7b21a933",null);n.exports=s.exports},340:function(n,t,e){e(307);var s=e(0)(e(232),e(355),"data-v-52485ea2",null);n.exports=s.exports},341:function(n,t,e){e(310);var s=e(0)(e(233),e(358),"data-v-5bd4ca24",null);n.exports=s.exports},355:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"tab-panel",class:{active:n.activeItem}},[n._t("default")],2)},staticRenderFns:[]}},358:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("vue-button",{class:n.objectClass,attrs:{amSize:n.pamSize,active:n.activeItem,hollow:n.hollow,disabled:n.disabled},on:{buttonClick:n.tabsItemClickFun}},[n._t("default")],2)},staticRenderFns:[]}},361:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("vueview",[e("navbar",{attrs:{blue:""},slot:"header"},[n._v("\n        Tabs\n        "),e("icon",{attrs:{name:"left-nav",titleRight:"返回",back:""},slot:"left"})],1),n._v(" "),e("div",{staticClass:"sk-demos"},[e("h3",[n._v("Default")]),n._v(" "),e("tabs",{directives:[{name:"model",rawName:"v-model",value:n.selected,expression:"selected"}],domProps:{value:n.selected},on:{input:function(t){n.selected=t}}},[e("tabs-item",{attrs:{orange:"",hollow:""},slot:"tabs"},[n._v("女爵 ")]),n._v(" "),e("tabs-item",{attrs:{red:"",hollow:""},slot:"tabs"},[n._v("第一张精选 ")]),n._v(" "),e("tabs-item",{attrs:{blue:"",hollow:""},slot:"tabs"},[n._v("Silence ")]),n._v(" "),e("tabs-desc",{slot:"desc"},[n._v("\n                她坦白了我们所虚伪的 她单纯了我们所复杂的\n                五年以来…\n                5年的等待，是个漫长也是耗损的过程。\n                看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！\n                她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，\n                这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，\n                是我们唯一相信且期待杨乃文的理由。\n            ")]),n._v(" "),e("tabs-desc",{slot:"desc"},[n._v("\n                出道六年来只出过三张专辑的杨乃文，第一次集合三张专辑的精华构成了这张充满个性的精选辑。专辑收录尚未发片前首先曝光，原始浓烈的杨乃文独唱曲[爱上你只是我的错]、曾让无数人伤感落泪的《我给的爱》、悲情经典《silence》、杨乃文96年在魔岩校园live演唱会上敏感热烈的创作《fear》、充满古典优雅气质的电影[第凡内早餐]的主题曲《monn river》等好歌。通过尝试各种新鲜形象，搭配MV营造的氛围，总是给人耳目一新的新感觉。\n            ")]),n._v(" "),e("tabs-desc",{slot:"desc"},[n._v("\n                所有人都能从作品中听到能量和震撼的呈现，矛盾与妥协，失意与快乐，制作人林炜哲是真正进入到歌手的灵魂，找出最真实的瞬间再燃烧释放，献给大家；这种完全认真作音乐不哈啦的态度，不是只字片语能形容，也并非速食文化所能比拟，这种精神是和全世界的音乐人同步，这也是他们的作品和台湾大部份截然不同的原因。这样的音乐正是台湾年轻人目前需要的，与世界处在同步潮流，所有年轻人都能感受的热情和力量\n            ")])],1),n._v(" "),e("div",{staticClass:"padding"},[e("vue-button",{attrs:{blue:""},on:{buttonClick:n.buttonClickFun}},[n._v("切换到第二个 Tab")])],1),n._v(" "),e("h3",[n._v("inset")]),n._v(" "),e("tabs",{attrs:{inset:""}},[e("tabs-item",{attrs:{orange:"",hollow:""},slot:"tabs"},[n._v("女爵 ")]),n._v(" "),e("tabs-item",{attrs:{red:"",hollow:""},slot:"tabs"},[n._v("第一张精选 ")]),n._v(" "),e("tabs-item",{attrs:{blue:"",hollow:""},on:{tabsItemClick:n.tabsItemClickFun},slot:"tabs"},[n._v("Silence ")]),n._v(" "),e("tabs-desc",{slot:"desc"},[n._v("\n                她坦白了我们所虚伪的 她单纯了我们所复杂的\n                五年以来…\n                5年的等待，是个漫长也是耗损的过程。\n                看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！\n                她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，\n                这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，\n                是我们唯一相信且期待杨乃文的理由。\n            ")]),n._v(" "),e("tabs-desc",{slot:"desc"},[n._v("\n                出道六年来只出过三张专辑的杨乃文，第一次集合三张专辑的精华构成了这张充满个性的精选辑。专辑收录尚未发片前首先曝光，原始浓烈的杨乃文独唱曲[爱上你只是我的错]、曾让无数人伤感落泪的《我给的爱》、悲情经典《silence》、杨乃文96年在魔岩校园live演唱会上敏感热烈的创作《fear》、充满古典优雅气质的电影[第凡内早餐]的主题曲《monn river》等好歌。通过尝试各种新鲜形象，搭配MV营造的氛围，总是给人耳目一新的新感觉。\n            ")]),n._v(" "),e("tabs-desc",{slot:"desc"},[n._v("\n                所有人都能从作品中听到能量和震撼的呈现，矛盾与妥协，失意与快乐，制作人林炜哲是真正进入到歌手的灵魂，找出最真实的瞬间再燃烧释放，献给大家；这种完全认真作音乐不哈啦的态度，不是只字片语能形容，也并非速食文化所能比拟，这种精神是和全世界的音乐人同步，这也是他们的作品和台湾大部份截然不同的原因。这样的音乐正是台湾年轻人目前需要的，与世界处在同步潮流，所有年轻人都能感受的热情和力量\n            ")])],1),n._v(" "),e("h3",[n._v("In Card")]),n._v(" "),e("card",[e("tabs",[e("tabs-item",{attrs:{orange:"",hollow:""},slot:"tabs"},[n._v("女爵 ")]),n._v(" "),e("tabs-item",{attrs:{red:"",hollow:""},slot:"tabs"},[n._v("第一张精选 ")]),n._v(" "),e("tabs-item",{attrs:{disabled:"",blue:"",hollow:""},slot:"tabs"},[n._v("Silence ")]),n._v(" "),e("tabs-desc",{slot:"desc"},[n._v("\n                她坦白了我们所虚伪的 她单纯了我们所复杂的\n                五年以来…\n                5年的等待，是个漫长也是耗损的过程。\n                看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！\n                她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，\n                这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，\n                是我们唯一相信且期待杨乃文的理由。\n            ")]),n._v(" "),e("tabs-desc",{slot:"desc"},[n._v("\n                出道六年来只出过三张专辑的杨乃文，第一次集合三张专辑的精华构成了这张充满个性的精选辑。专辑收录尚未发片前首先曝光，原始浓烈的杨乃文独唱曲[爱上你只是我的错]、曾让无数人伤感落泪的《我给的爱》、悲情经典《silence》、杨乃文96年在魔岩校园live演唱会上敏感热烈的创作《fear》、充满古典优雅气质的电影[第凡内早餐]的主题曲《monn river》等好歌。通过尝试各种新鲜形象，搭配MV营造的氛围，总是给人耳目一新的新感觉。\n            ")]),n._v(" "),e("tabs-desc",{slot:"desc"},[n._v("\n                所有人都能从作品中听到能量和震撼的呈现，矛盾与妥协，失意与快乐，制作人林炜哲是真正进入到歌手的灵魂，找出最真实的瞬间再燃烧释放，献给大家；这种完全认真作音乐不哈啦的态度，不是只字片语能形容，也并非速食文化所能比拟，这种精神是和全世界的音乐人同步，这也是他们的作品和台湾大部份截然不同的原因。这样的音乐正是台湾年轻人目前需要的，与世界处在同步潮流，所有年轻人都能感受的热情和力量\n            ")])],1)],1)],1)],1)},staticRenderFns:[]}},365:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"tabs-body"},[n._t("default")],2)},staticRenderFns:[]}},373:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"tabs",class:{"tabs-inset":n.inset}},[e("button-group",{ref:"buttonGroup",staticClass:"tabs-nav",attrs:{amSize:n.amSize,justify:""}},[n._t("tabs")],2),n._v(" "),e("tabs-body",{ref:"tabsBody",staticClass:"tabs-body"},[n._t("desc")],2),n._v(" "),n._t("default")],2)},staticRenderFns:[]}},98:function(n,t,e){e(313);var s=e(0)(e(251),e(361),"data-v-6c6b831a",null);n.exports=s.exports}});