webpackJsonp([8,22],{102:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"group",props:{header:String,footer:String,noPadded:Boolean}}},103:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(8);t.default={name:"navbar",mixins:[a.a],props:{titleOnLeft:{type:Boolean}},data:function(){return{name:"navbar"}},computed:{NavbarTitle:function(){return{"navbar-center":!this.titleOnLeft,"navbar-left":this.titleOnLeft}}}}},104:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(20);t.default={name:"vueview",props:{pLeft:{type:Boolean,default:!1},pRight:{type:Boolean,default:!1}},data:function(){return{translate:"translate3d(0, 0, 0)"}},computed:{objectClass:function(){return{"am-view-push":"offcanvas"==this.$vnode.data.slot}},pushStyle:{get:function(){if("offcanvas"==this.$vnode.data.slot)return{transform:this.translate}},set:function(n){this.translate="translate3d("+n+",0,0)"}}},methods:{sildeOffcanvasStart:function(n){var t=this,e=n?"-":"";this.$parent.$slots.offcanvas.forEach(function(a,i){var o=a.componentOptions.propsData;return!(!o.silde&&n||"right"===o.silde&&!n||"top"===o.silde||"bottom"===o.silde)&&void(o.open&&(t.pushStyle=e+a.elm.firstElementChild.style.width))})},sildeOffcanvasEnd:function(){this.pushStyle=0}},watch:{pLeft:function(n,t){var e=this;this.$nextTick(function(){n===!0?e.sildeOffcanvasStart():e.sildeOffcanvasEnd()})},pRight:function(n,t){var e=this;this.$nextTick(function(){n===!0?e.sildeOffcanvasStart(!0):e.sildeOffcanvasEnd()})}},components:{Container:a.a}}},105:function(n,t,e){"use strict";var a=e(115),i=e.n(a);e.d(t,"a",function(){return i.a})},106:function(n,t,e){"use strict";var a=e(116),i=e.n(a);e.d(t,"a",function(){return i.a})},107:function(n,t,e){"use strict";var a=e(117),i=e.n(a);e.d(t,"a",function(){return i.a})},108:function(n,t,e){"use strict";var a=e(106),i=e(107),o=e(18),s=e(105);t.a={Navbar:a.a,Vueview:i.a,Icon:o.a,Group:s.a}},109:function(n,t,e){t=n.exports=e(79)(),t.push([n.i,"\n.am-view-push[data-v-4d85db6e] {\n    transition: transform .5s cubic-bezier(0.23, 1, 0.320, 1);\n}\n","",{version:3,sources:["/./src/components/vueview/vueview.vue"],names:[],mappings:";AACA;IACI,0DAA0D;CAC7D",file:"vueview.vue",sourcesContent:["\n.am-view-push[data-v-4d85db6e] {\n    transition: transform .5s cubic-bezier(0.23, 1, 0.320, 1);\n}\n"],sourceRoot:"webpack://"}])},110:function(n,t,e){t=n.exports=e(79)(),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"group.vue",sourceRoot:"webpack://"}])},111:function(n,t,e){t=n.exports=e(79)(),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"navbar.vue",sourceRoot:"webpack://"}])},112:function(n,t,e){var a=e(109);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e(80)("60b4fcf9",a,!0)},113:function(n,t,e){var a=e(110);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e(80)("09e57e73",a,!0)},114:function(n,t,e){var a=e(111);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e(80)("15c1c47f",a,!0)},115:function(n,t,e){e(113);var a=e(0)(e(102),e(119),"data-v-4ff595f1",null);n.exports=a.exports},116:function(n,t,e){e(114);var a=e(0)(e(103),e(120),"data-v-7945db71",null);n.exports=a.exports},117:function(n,t,e){e(112);var a=e(0)(e(104),e(118),"data-v-4d85db6e",null);n.exports=a.exports},118:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("transition",[e("div",{staticClass:"view",class:n.objectClass,style:n.pushStyle},[n._t("header"),n._v(" "),n._t("offcanvas"),n._v(" "),n.$slots.default?e("container",{attrs:{fill:"",scrollable:""}},[n._t("default")],2):n._e()],2)])},staticRenderFns:[]}},119:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"group",class:{"group-no-padded":n.noPadded}},[n.$slots.header||n.header?e("header",{staticClass:"group-header"},[n._v("\n        "+n._s(n.header)+"\n        "),n._t("header")],2):n._e(),n._v(" "),e("div",{staticClass:"group-body"},[n._t("default")],2),n._v(" "),n.$slots.footer||n.footer?e("footer",{staticClass:"group-footer"},[n._v("\n        "+n._s(n.footer)+"\n        "),n._t("footer")],2):n._e()])},staticRenderFns:[]}},120:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("header",{ref:"navbar",staticClass:"navbar",class:n.objectClass},[e("h2",{staticClass:"navbar-title",class:n.NavbarTitle},[n._t("default")],2),n._v(" "),n.$slots.left?e("div",{staticClass:"navbar-nav navbar-left"},[n._t("left")],2):n._e(),n._v(" "),n.$slots.right?e("div",{staticClass:"navbar-nav navbar-right"},[n._t("right")],2):n._e()])},staticRenderFns:[]}},170:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"card",props:{title:String,bg:String},computed:{img:function(){return this.bg?"background-image:url("+this.bg+")":""}}}},174:function(n,t,e){"use strict";var a=e(184),i=e.n(a);e.d(t,"a",function(){return i.a})},176:function(n,t,e){t=n.exports=e(79)(),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"card.vue",sourceRoot:"webpack://"}])},180:function(n,t,e){var a=e(176);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e(80)("0c09a0b2",a,!0)},184:function(n,t,e){e(180);var a=e(0)(e(170),e(188),"data-v-1018679e",null);n.exports=a.exports},188:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"card"},[n.$slots.header||n.title?e("div",{staticClass:"card-header",class:{"card-cover":n.bg},style:n.img},[n.title?e("h2",{staticClass:"card-title"},[n._v("\n            "+n._s(n.title)+"\n        ")]):n._e(),n._v(" "),n.$slots.header?n._t("header"):n._e()],2):n._e(),n._v(" "),e("div",{staticClass:"card-body"},[n._t("default")],2),n._v(" "),n.$slots.footer?e("div",{staticClass:"card-footer"},[n._t("footer")],2):n._e()])},staticRenderFns:[]}},220:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(37);t.default={name:"accordion",mixins:[a.a],props:{inset:Boolean,behavior:Boolean,noAnimated:Boolean},methods:{accordionFun:function(n,t){this.behavior||(this.$children[t].activeitem=!1)}},data:function(){return{openitem:!1,newopenitemnum:0,oldopenitemnum:0}},watch:{openitem:function(n,t){this.accordionFun(this.newopenitemnum,this.oldopenitemnum)},newopenitemnum:function(n,t){this.oldopenitemnum=t,this.openitem=!this.openitem}}}},221:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"accordion-item",props:{title:String,active:Boolean},mounted:function(){this.active&&(this.height="auto",this.activeitem=!0),this.$parent.noAnimated&&(this.noAnimated=!0)},data:function(){return{height:"0px",activeitem:!1,noAnimated:!1}},methods:{enter:function(n,t){this.height="auto",this.height=n.scrollHeight+"px",t()},Leave:function(n){this.height="0px"},openAccordionFun:function(n){this.activeitem=!this.activeitem,this.$parent.newopenitemnum=this.currentIndex,this.$emit("openAccordion",n)}}}},235:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(19),i=e.n(a),o=e(108),s=e(254),r=e(174);t.default={components:i()({},o.a,s,{Card:r.a})}},254:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(328),i=e.n(a);e.d(t,"accordion",function(){return i.a});var o=e(329),s=e.n(o);e.d(t,"accordionItem",function(){return s.a})},264:function(n,t,e){t=n.exports=e(79)(),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"Accordion.vue",sourceRoot:"webpack://"}])},266:function(n,t,e){t=n.exports=e(79)(),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"accordion.vue",sourceRoot:"webpack://"}])},286:function(n,t,e){t=n.exports=e(79)(),t.push([n.i,"\n.collapsing[data-v-b163bd14] {\n    transform: translate3d(0, 0, 0)\n}\n","",{version:3,sources:["/./src/components/accordion/accordionItem.vue"],names:[],mappings:";AACA;IACI,+BAA+B;CAClC",file:"accordionItem.vue",sourcesContent:["\n.collapsing[data-v-b163bd14] {\n    transform: translate3d(0, 0, 0)\n}\n"],sourceRoot:"webpack://"}])},298:function(n,t,e){var a=e(264);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e(80)("6e3cb971",a,!0)},300:function(n,t,e){var a=e(266);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e(80)("c5ae5350",a,!0)},320:function(n,t,e){var a=e(286);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e(80)("3e8b0100",a,!0)},328:function(n,t,e){e(300);var a=e(0)(e(220),e(348),"data-v-32fd5d7a",null);n.exports=a.exports},329:function(n,t,e){e(320);var a=e(0)(e(221),e(368),"data-v-b163bd14",null);n.exports=a.exports},346:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("vueview",[e("navbar",{attrs:{blue:""},slot:"header"},[n._v("\n        Accordion\n        "),e("icon",{attrs:{name:"left-nav",titleRight:"返回",back:""},slot:"left"})],1),n._v(" "),e("div",{staticClass:"sk-demos"},[e("h3",[n._v("Default")]),n._v(" "),e("accordion",[e("accordion-item",{attrs:{title:"女爵"}},[e("p",[n._v("她坦白了我们所虚伪的 她单纯了我们所复杂的\n                五年以来…\n                5年的等待，是个漫长也是耗损的过程。\n                看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！\n                她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，\n                这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，\n                是我们唯一相信且期待杨乃文的理由。")])]),n._v(" "),e("accordion-item",{attrs:{title:"第一张精选"}},[e("p",[n._v("出道六年来只出过三张专辑的杨乃文，第一次集合三张专辑的精华构成了这张充满个性的精选辑。专辑收录尚未发片前首先曝光，原始浓烈的杨乃文独唱曲[爱上你只是我的错]、曾让无数人伤感落泪的《我给的爱》、悲情经典《silence》、杨乃文96年在魔岩校园live演唱会上敏感热烈的创作《fear》、充满古典优雅气质的电影[第凡内早餐]的主题曲《monn river》等好歌。通过尝试各种新鲜形象，搭配MV营造的氛围，总是给人耳目一新的新感觉。")])]),n._v(" "),e("accordion-item",{attrs:{title:"Silence"}},[e("p",[n._v("所有人都能从作品中听到能量和震撼的呈现，矛盾与妥协，失意与快乐，制作人林炜哲是真正进入到歌手的灵魂，找出最真实的瞬间再燃烧释放，献给大家；这种完全认真作音乐不哈啦的态度，不是只字片语能形容，也并非速食文化所能比拟，这种精神是和全世界的音乐人同步，这也是他们的作品和台湾大部份截然不同的原因。这样的音乐正是台湾年轻人目前需要的，与世界处在同步潮流，所有年轻人都能感受的热情和力量")])])],1),n._v(" "),e("h3",[n._v("无动画")]),n._v(" "),e("accordion",{attrs:{noAnimated:""}},[e("accordion-item",{attrs:{title:"女爵"}},[e("p",[n._v("她坦白了我们所虚伪的 她单纯了我们所复杂的\n                五年以来…\n                5年的等待，是个漫长也是耗损的过程。\n                看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！\n                她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，\n                这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，\n                是我们唯一相信且期待杨乃文的理由。")])]),n._v(" "),e("accordion-item",{attrs:{title:"第一张精选"}},[e("p",[n._v("出道六年来只出过三张专辑的杨乃文，第一次集合三张专辑的精华构成了这张充满个性的精选辑。专辑收录尚未发片前首先曝光，原始浓烈的杨乃文独唱曲[爱上你只是我的错]、曾让无数人伤感落泪的《我给的爱》、悲情经典《silence》、杨乃文96年在魔岩校园live演唱会上敏感热烈的创作《fear》、充满古典优雅气质的电影[第凡内早餐]的主题曲《monn river》等好歌。通过尝试各种新鲜形象，搭配MV营造的氛围，总是给人耳目一新的新感觉。")])]),n._v(" "),e("accordion-item",{attrs:{title:"Silence"}},[e("p",[n._v("所有人都能从作品中听到能量和震撼的呈现，矛盾与妥协，失意与快乐，制作人林炜哲是真正进入到歌手的灵魂，找出最真实的瞬间再燃烧释放，献给大家；这种完全认真作音乐不哈啦的态度，不是只字片语能形容，也并非速食文化所能比拟，这种精神是和全世界的音乐人同步，这也是他们的作品和台湾大部份截然不同的原因。这样的音乐正是台湾年轻人目前需要的，与世界处在同步潮流，所有年轻人都能感受的热情和力量")])])],1),n._v(" "),e("h3",[n._v("折叠式")]),n._v(" "),e("accordion",{attrs:{behavior:""}},[e("accordion-item",{attrs:{title:"女爵"}},[e("p",[n._v("她坦白了我们所虚伪的 她单纯了我们所复杂的\n                五年以来…\n                5年的等待，是个漫长也是耗损的过程。\n                看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！\n                她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，\n                这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，\n                是我们唯一相信且期待杨乃文的理由。")])]),n._v(" "),e("accordion-item",{attrs:{title:"第一张精选"}},[e("p",[n._v("出道六年来只出过三张专辑的杨乃文，第一次集合三张专辑的精华构成了这张充满个性的精选辑。专辑收录尚未发片前首先曝光，原始浓烈的杨乃文独唱曲[爱上你只是我的错]、曾让无数人伤感落泪的《我给的爱》、悲情经典《silence》、杨乃文96年在魔岩校园live演唱会上敏感热烈的创作《fear》、充满古典优雅气质的电影[第凡内早餐]的主题曲《monn river》等好歌。通过尝试各种新鲜形象，搭配MV营造的氛围，总是给人耳目一新的新感觉。")])]),n._v(" "),e("accordion-item",{attrs:{title:"Silence"}},[e("p",[n._v("所有人都能从作品中听到能量和震撼的呈现，矛盾与妥协，失意与快乐，制作人林炜哲是真正进入到歌手的灵魂，找出最真实的瞬间再燃烧释放，献给大家；这种完全认真作音乐不哈啦的态度，不是只字片语能形容，也并非速食文化所能比拟，这种精神是和全世界的音乐人同步，这也是他们的作品和台湾大部份截然不同的原因。这样的音乐正是台湾年轻人目前需要的，与世界处在同步潮流，所有年轻人都能感受的热情和力量")])])],1),n._v(" "),e("h3",[n._v("Inset")]),n._v(" "),e("accordion",{attrs:{inset:""}},[e("accordion-item",{attrs:{title:"女爵"}},[e("p",[n._v("她坦白了我们所虚伪的 她单纯了我们所复杂的\n                五年以来…\n                5年的等待，是个漫长也是耗损的过程。\n                看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！\n                她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，\n                这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，\n                是我们唯一相信且期待杨乃文的理由。")])]),n._v(" "),e("accordion-item",{attrs:{title:"第一张精选"}},[e("p",[n._v("出道六年来只出过三张专辑的杨乃文，第一次集合三张专辑的精华构成了这张充满个性的精选辑。专辑收录尚未发片前首先曝光，原始浓烈的杨乃文独唱曲[爱上你只是我的错]、曾让无数人伤感落泪的《我给的爱》、悲情经典《silence》、杨乃文96年在魔岩校园live演唱会上敏感热烈的创作《fear》、充满古典优雅气质的电影[第凡内早餐]的主题曲《monn river》等好歌。通过尝试各种新鲜形象，搭配MV营造的氛围，总是给人耳目一新的新感觉。")])]),n._v(" "),e("accordion-item",{attrs:{title:"Silence"}},[e("p",[n._v("所有人都能从作品中听到能量和震撼的呈现，矛盾与妥协，失意与快乐，制作人林炜哲是真正进入到歌手的灵魂，找出最真实的瞬间再燃烧释放，献给大家；这种完全认真作音乐不哈啦的态度，不是只字片语能形容，也并非速食文化所能比拟，这种精神是和全世界的音乐人同步，这也是他们的作品和台湾大部份截然不同的原因。这样的音乐正是台湾年轻人目前需要的，与世界处在同步潮流，所有年轻人都能感受的热情和力量")])])],1),n._v(" "),e("h3",[n._v("In card")]),n._v(" "),e("card",[e("accordion",[e("accordion-item",{attrs:{title:"女爵"}},[e("p",[n._v("她坦白了我们所虚伪的 她单纯了我们所复杂的\n                五年以来…\n                5年的等待，是个漫长也是耗损的过程。\n                看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！\n                她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，\n                这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，\n                是我们唯一相信且期待杨乃文的理由。")])]),n._v(" "),e("accordion-item",{attrs:{title:"第一张精选"}},[e("p",[n._v("出道六年来只出过三张专辑的杨乃文，第一次集合三张专辑的精华构成了这张充满个性的精选辑。专辑收录尚未发片前首先曝光，原始浓烈的杨乃文独唱曲[爱上你只是我的错]、曾让无数人伤感落泪的《我给的爱》、悲情经典《silence》、杨乃文96年在魔岩校园live演唱会上敏感热烈的创作《fear》、充满古典优雅气质的电影[第凡内早餐]的主题曲《monn river》等好歌。通过尝试各种新鲜形象，搭配MV营造的氛围，总是给人耳目一新的新感觉。")])]),n._v(" "),e("accordion-item",{attrs:{title:"Silence"}},[e("p",[n._v("所有人都能从作品中听到能量和震撼的呈现，矛盾与妥协，失意与快乐，制作人林炜哲是真正进入到歌手的灵魂，找出最真实的瞬间再燃烧释放，献给大家；这种完全认真作音乐不哈啦的态度，不是只字片语能形容，也并非速食文化所能比拟，这种精神是和全世界的音乐人同步，这也是他们的作品和台湾大部份截然不同的原因。这样的音乐正是台湾年轻人目前需要的，与世界处在同步潮流，所有年轻人都能感受的热情和力量")])])],1)],1)],1)],1)},staticRenderFns:[]}},348:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",{staticClass:"accordion",class:{"accordion-inset":n.inset}},[n._t("default")],2)},staticRenderFns:[]}},368:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("dl",{staticClass:"accordion-item",class:{active:n.activeitem}},[e("dt",{staticClass:"accordion-title",on:{click:n.openAccordionFun}},[n._v("\n        "+n._s(n.title)+"\n        "),e("span",{staticClass:"icon icon-right-nav accordion-icon"})]),n._v(" "),e("transition",{on:{enter:n.enter,leave:n.Leave}},[e("dd",{directives:[{name:"show",rawName:"v-show",value:n.activeitem,expression:"activeitem"}],staticClass:"accordion-body",class:{collapsing:!n.noAnimated},style:{height:n.height}},[e("div",{staticClass:"accordion-content"},[n._t("default")],2)])])],1)},staticRenderFns:[]}},82:function(n,t,e){e(298);var a=e(0)(e(235),e(346),"data-v-25d7ea5c",null);n.exports=a.exports}});