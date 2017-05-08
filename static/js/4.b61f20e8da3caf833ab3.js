webpackJsonp([4,22],{100:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(20);e.default={name:"vue-view",props:{pLeft:{type:Boolean,default:!1},pRight:{type:Boolean,default:!1}},data:function(){return{translate:"translate3d(0, 0, 0)"}},computed:{objectClass:function(){return{"am-view-push":"offcanvas"==this.$vnode.data.slot}},pushStyle:{get:function(){if("offcanvas"==this.$vnode.data.slot)return{transform:this.translate}},set:function(t){this.translate="translate3d("+t+",0,0)"}}},methods:{sildeOffcanvasStart:function(t){var e=this,n=t?"-":"";this.$parent.$slots.offcanvas.forEach(function(i,r){var s=i.componentOptions.propsData;return!(!s.silde&&t||"right"===s.silde&&!t||"top"===s.silde||"bottom"===s.silde)&&void(s.open&&(e.pushStyle=n+i.elm.firstElementChild.style.width))})},sildeOffcanvasEnd:function(){this.pushStyle=0}},watch:{pLeft:function(t,e){var n=this;this.$nextTick(function(){t===!0?n.sildeOffcanvasStart():n.sildeOffcanvasEnd()})},pRight:function(t,e){var n=this;this.$nextTick(function(){t===!0?n.sildeOffcanvasStart(!0):n.sildeOffcanvasEnd()})}},components:{Container:i.a}}},101:function(t,e,n){"use strict";var i=n(107),r=n.n(i);n.d(e,"a",function(){return r.a})},102:function(t,e,n){"use strict";var i=n(108),r=n.n(i);n.d(e,"a",function(){return r.a})},103:function(t,e,n){"use strict";var i=n(109),r=n.n(i);n.d(e,"a",function(){return r.a})},104:function(t,e,n){"use strict";var i=n(102),r=n(103),s=n(18),a=n(101);e.a={Navbar:i.a,Vueview:r.a,Icon:s.a,Group:a.a}},105:function(t,e,n){e=t.exports=n(75)(),e.push([t.i,"\n.am-view-push[data-v-4d85db6e] {\n    -webkit-transition: -webkit-transform .5s cubic-bezier(0.23, 1, 0.320, 1);\n    transition: -webkit-transform .5s cubic-bezier(0.23, 1, 0.320, 1);\n    transition: transform .5s cubic-bezier(0.23, 1, 0.320, 1);\n    transition: transform .5s cubic-bezier(0.23, 1, 0.320, 1), -webkit-transform .5s cubic-bezier(0.23, 1, 0.320, 1);\n}\n","",{version:3,sources:["/./src/components/vueview/vueview.vue"],names:[],mappings:";AACA;IACI,0EAA0E;IAC1E,kEAAkE;IAClE,0DAA0D;IAC1D,iHAAiH;CACpH",file:"vueview.vue",sourcesContent:["\n.am-view-push[data-v-4d85db6e] {\n    -webkit-transition: -webkit-transform .5s cubic-bezier(0.23, 1, 0.320, 1);\n    transition: -webkit-transform .5s cubic-bezier(0.23, 1, 0.320, 1);\n    transition: transform .5s cubic-bezier(0.23, 1, 0.320, 1);\n    transition: transform .5s cubic-bezier(0.23, 1, 0.320, 1), -webkit-transform .5s cubic-bezier(0.23, 1, 0.320, 1);\n}\n"],sourceRoot:"webpack://"}])},106:function(t,e,n){var i=n(105);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(76)("60b4fcf9",i,!0)},107:function(t,e,n){var i=n(0)(n(98),n(111),null,null);t.exports=i.exports},108:function(t,e,n){var i=n(0)(n(99),n(112),null,null);t.exports=i.exports},109:function(t,e,n){n(106);var i=n(0)(n(100),n(110),"data-v-4d85db6e",null);t.exports=i.exports},110:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",[n("div",{staticClass:"view",class:t.objectClass,style:t.pushStyle},[t._t("header"),t._v(" "),t.$slots.default&&!t.$slots.offcanvas?n("container",{attrs:{fill:"",scrollable:""}},[t._t("default")],2):t._e(),t._v(" "),t.$slots.offcanvas?t._t("default"):t._e(),t._v(" "),t.$slots.offcanvas?t._t("offcanvas"):t._e()],2)])},staticRenderFns:[]}},111:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"group",class:{"group-no-padded":t.noPadded}},[t.$slots.header||t.header?n("header",{staticClass:"group-header"},[t._v("\n        "+t._s(t.header)+"\n        "),t._t("header")],2):t._e(),t._v(" "),n("div",{staticClass:"group-body"},[t._t("default")],2),t._v(" "),t.$slots.footer||t.footer?n("footer",{staticClass:"group-footer"},[t._v("\n        "+t._s(t.footer)+"\n        "),t._t("footer")],2):t._e()])},staticRenderFns:[]}},112:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{ref:"navbar",staticClass:"navbar",class:t.objectClass},[n("h2",{staticClass:"navbar-title",class:t.NavbarTitle},[t._t("default")],2),t._v(" "),t.$slots.left?n("div",{staticClass:"navbar-nav navbar-left"},[t._t("left")],2):t._e(),t._v(" "),t.$slots.right?n("div",{staticClass:"navbar-nav navbar-right"},[t._t("right")],2):t._e()])},staticRenderFns:[]}},113:function(t,e){t.exports={}},114:function(t,e,n){var i=n(9).f,r=n(22),s=n(97)("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,s)&&i(t,s,{configurable:!0,value:e})}},121:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"item",props:{href:{type:[Boolean,String],default:!1},objectClass:Object},methods:{listItemClickFun:function(t){this.$emit("listItemClick",t)}}}},122:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"list",props:{inset:Boolean}}},123:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),r=n.n(i),s=n(125),a=n(18);e.default={name:"list-item",props:{role:Boolean,title:String,subTitle:String,desc:String,href:{type:[Boolean,String],default:!1},after:String,nested:{type:[String,Boolean],default:!1}},methods:{listItemClickFun:function(t){this.$emit("listItemClick",t)}},computed:{objectClass:function(){return r()({"item-header":this.role,"item-linked":""===this.href||this.href},"item-"+this.nested,this.nested)}},components:{itemContent:s.a,Icon:a.a}}},124:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(147),r=n.n(i);n.d(e,"list",function(){return r.a});var s=n(148),a=n.n(s);n.d(e,"listItem",function(){return a.a})},125:function(t,e,n){"use strict";var i=n(127),r=n.n(i),s=n(27),a=n.n(s),o=n(2),l=n.n(o),c=n(146),u=n.n(c);e.a={name:"item-content",props:{href:{type:[Boolean,String],default:!1},objectClass:Object,slotsImg:{type:[Array,Boolean]},subTitle:{type:[Array,String]},desc:{type:[Array,String]},nested:{type:[String,Boolean],default:!1}},methods:{subTitleDescChildren:function(t,e,n){var i=Array.isArray(e);return e?t("div",{class:l()({},n,!0),domProps:i?{}:{innerHTML:e}},i?e:[]):""},listItemClickFun:function(t){this.$emit("listItemClick",t)}},render:function(t){var e=this.subTitle,n=this.desc,i=this.slotsImg,s=this.$slots,o=this.objectClass,l=this.nested,c=[s.default],f=[t("div",{class:{"item-title-row":!0}},s.default)],d=[s.default];return(e||n||l)&&((e||n)&&(a()(o,{"item-content":!0}),d=[f,this.subTitleDescChildren(t,e,"item-subtitle"),this.subTitleDescChildren(t,n,"item-desc")]),c=[t("div",{class:{"item-main":!0}},d)]),i&&(c=[t("div",{class:{"item-media":!0}},i),t("div",{class:{"item-main":!0}},d)]),t(u.a,{props:{objectClass:o,href:this.href},on:{listItemClick:this.listItemClickFun}},[].concat(r()(c)))},components:{Item:u.a}}},126:function(t,e,n){t.exports={default:n(128),__esModule:!0}},127:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=n(126),s=i(r);e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,s.default)(t)}},128:function(t,e,n){n(145),n(144),t.exports=n(3).Array.from},129:function(t,e,n){var i=n(28),r=n(97)("toStringTag"),s="Arguments"==i(function(){return arguments}()),a=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,o;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=a(e=Object(t),r))?n:s?i(e):"Object"==(o=i(e))&&"function"==typeof e.callee?"Arguments":o}},130:function(t,e,n){"use strict";var i=n(9),r=n(24);t.exports=function(t,e,n){e in t?i.f(t,e,r(0,n)):t[e]=n}},131:function(t,e,n){t.exports=n(4).document&&document.documentElement},132:function(t,e,n){var i=n(113),r=n(97)("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||s[r]===t)}},133:function(t,e,n){var i=n(21);t.exports=function(t,e,n,r){try{return r?e(i(n)[0],n[1]):e(n)}catch(e){var s=t.return;throw void 0!==s&&i(s.call(t)),e}}},134:function(t,e,n){"use strict";var i=n(138),r=n(24),s=n(114),a={};n(23)(a,n(97)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=i(a,{next:r(1,n)}),s(t,e+" Iterator")}},135:function(t,e,n){"use strict";var i=n(137),r=n(10),s=n(141),a=n(23),o=n(22),l=n(113),c=n(134),u=n(114),f=n(140),d=n(97)("iterator"),m=!([].keys&&"next"in[].keys()),p="@@iterator",v="keys",h="values",_=function(){return this};t.exports=function(t,e,n,b,g,y,x){c(n,e,b);var C,w,k,A=function(t){if(!m&&t in j)return j[t];switch(t){case v:return function(){return new n(this,t)};case h:return function(){return new n(this,t)}}return function(){return new n(this,t)}},S=e+" Iterator",$=g==h,O=!1,j=t.prototype,T=j[d]||j[p]||g&&j[g],I=T||A(g),P=g?$?A("entries"):I:void 0,E="Array"==e?j.entries||T:T;if(E&&(k=f(E.call(new t)),k!==Object.prototype&&(u(k,S,!0),i||o(k,d)||a(k,d,_))),$&&T&&T.name!==h&&(O=!0,I=function(){return T.call(this)}),i&&!x||!m&&!O&&j[d]||a(j,d,I),l[e]=I,l[S]=_,g)if(C={values:$?I:A(h),keys:y?I:A(v),entries:P},x)for(w in C)w in j||s(j,w,C[w]);else r(r.P+r.F*(m||O),e,C);return C}},136:function(t,e,n){var i=n(97)("iterator"),r=!1;try{var s=[7][i]();s.return=function(){r=!0},Array.from(s,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var n=!1;try{var s=[7],a=s[i]();a.next=function(){return{done:n=!0}},s[i]=function(){return a},t(s)}catch(t){}return n}},137:function(t,e){t.exports=!0},138:function(t,e,n){var i=n(21),r=n(139),s=n(31),a=n(25)("IE_PROTO"),o=function(){},l="prototype",c=function(){var t,e=n(30)("iframe"),i=s.length,r="<",a=">";for(e.style.display="none",n(131).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(r+"script"+a+"document.F=Object"+r+"/script"+a),t.close(),c=t.F;i--;)delete c[l][s[i]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(o[l]=i(t),n=new o,o[l]=null,n[a]=t):n=c(),void 0===e?n:r(n,e)}},139:function(t,e,n){var i=n(9),r=n(21),s=n(32);t.exports=n(1)?Object.defineProperties:function(t,e){r(t);for(var n,a=s(e),o=a.length,l=0;o>l;)i.f(t,n=a[l++],e[n]);return t}},140:function(t,e,n){var i=n(22),r=n(26),s=n(25)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),i(t,s)?t[s]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},141:function(t,e,n){t.exports=n(23)},142:function(t,e,n){var i=n(12),r=n(11);t.exports=function(t){return function(e,n){var s,a,o=String(r(e)),l=i(n),c=o.length;return l<0||l>=c?t?"":void 0:(s=o.charCodeAt(l),s<55296||s>56319||l+1===c||(a=o.charCodeAt(l+1))<56320||a>57343?t?o.charAt(l):s:t?o.slice(l,l+2):(s-55296<<10)+(a-56320)+65536)}}},143:function(t,e,n){var i=n(129),r=n(97)("iterator"),s=n(113);t.exports=n(3).getIteratorMethod=function(t){if(void 0!=t)return t[r]||t["@@iterator"]||s[i(t)]}},144:function(t,e,n){"use strict";var i=n(29),r=n(10),s=n(26),a=n(133),o=n(132),l=n(34),c=n(130),u=n(143);r(r.S+r.F*!n(136)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,r,f,d=s(t),m="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,h=void 0!==v,_=0,b=u(d);if(h&&(v=i(v,p>2?arguments[2]:void 0,2)),void 0==b||m==Array&&o(b))for(e=l(d.length),n=new m(e);e>_;_++)c(n,_,h?v(d[_],_):d[_]);else for(f=b.call(d),n=new m;!(r=f.next()).done;_++)c(n,_,h?a(f,v,[r.value,_],!0):r.value);return n.length=_,n}})},145:function(t,e,n){"use strict";var i=n(142)(!0);n(135)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=i(e,n),this._i+=t.length,{value:t,done:!1})})},146:function(t,e,n){var i=n(0)(n(121),n(151),null,null);t.exports=i.exports},147:function(t,e,n){var i=n(0)(n(122),n(150),null,null);t.exports=i.exports},148:function(t,e,n){var i=n(0)(n(123),n(149),null,null);t.exports=i.exports},149:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("item-content",{attrs:{objectClass:t.objectClass,href:t.href,slotsImg:t.$slots.img,subTitle:t.subTitle||t.$slots.subTitle,desc:t.desc||t.$slots.desc,nested:t.nested},on:{listItemClick:t.listItemClickFun}},[t.nested?t._t("default"):t._e(),t._v(" "),t.role?t._t("default"):t._e(),t._v(" "),t.title?n("h3",{staticClass:"item-title"},[t._v("\n        "+t._s(t.title)+"\n    ")]):t._e(),t._v(" "),t.after||t.$slots.after?n("div",{staticClass:"item-after"},[t._v("\n        "+t._s(t.after)+"\n        "),t._t("after")],2):t._e(),t._v(" "),""===t.href||t.href?n("icon",{attrs:{name:"right-nav",iconClass:"item-icon"}}):t._e()],2)},staticRenderFns:[]}},150:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"list",class:{"list-inset":t.inset}},[t._t("default")],2)},staticRenderFns:[]}},151:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"item",class:t.objectClass,on:{click:t.listItemClickFun}},[""===t.href||t.href?n("router-link",{attrs:{to:""!==t.href&&t.href?t.href:t.$route.path}},[t._t("default")],2):t._t("default")],2)},staticRenderFns:[]}},152:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"card",props:{title:String,bg:String},computed:{img:function(){return this.bg?"background-image:url("+this.bg+")":""}}}},156:function(t,e,n){"use strict";var i=n(158),r=n.n(i);n.d(e,"a",function(){return r.a})},158:function(t,e,n){var i=n(0)(n(152),n(162),null,null);t.exports=i.exports},162:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[t.$slots.header||t.title?n("div",{staticClass:"card-header",class:{"card-cover":t.bg},style:t.img},[t.title?n("h2",{staticClass:"card-title"},[t._v("\n            "+t._s(t.title)+"\n        ")]):t._e(),t._v(" "),t.$slots.header?t._t("header"):t._e()],2):t._e(),t._v(" "),n("div",{staticClass:"card-body"},[t._t("default")],2),t._v(" "),t.$slots.footer?n("div",{staticClass:"card-footer"},[t._t("footer")],2):t._e()])},staticRenderFns:[]}},166:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"vue-switch",props:{value:Boolean,disabled:Boolean},data:function(){return{inputValue:this.value}},methods:{handleChange:function(){this.$emit("change",this.inputValue)}},watch:{value:function(t){this.inputValue=t},inputValue:function(t){this.$emit("input",t)}}}},167:function(t,e,n){var i=n(0)(n(166),n(168),null,null);t.exports=i.exports},168:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"switch"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],attrs:{type:"checkbox",disabled:t.disabled},domProps:{checked:Array.isArray(t.inputValue)?t._i(t.inputValue,null)>-1:t.inputValue},on:{change:t.handleChange,click:function(e){var n=t.inputValue,i=e.target,r=!!i.checked;if(Array.isArray(n)){var s=null,a=t._i(n,s);r?a<0&&(t.inputValue=n.concat(s)):a>-1&&(t.inputValue=n.slice(0,a).concat(n.slice(a+1)))}else t.inputValue=r}}}),t._v(" "),n("span",{staticClass:"switch-label"})])},staticRenderFns:[]}},208:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(19),r=n.n(i),s=n(104),a=n(167),o=n.n(a),l=n(124),c=n(36),u=n(156);e.default={methods:{listItemClickFun:function(){alert("触发了我")}},components:r()({Badge:c.a,vueSwitch:o.a},l,s.a,{Card:u.a})}},228:function(t,e,n){e=t.exports=n(75)(),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"List.vue",sourceRoot:"webpack://"}])},255:function(t,e,n){var i=n(228);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(76)("084e7f04",i,!0)},297:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vueview",[n("navbar",{attrs:{blue:""},slot:"header"},[t._v("\n        List\n        "),n("icon",{attrs:{name:"left-nav",titleRight:"返回",back:""},slot:"left"})],1),t._v(" "),n("div",{staticClass:"sk-demos"},[n("group",{attrs:{noPadded:"",header:"静态列表"}},[n("list",[n("list-item",{attrs:{role:""}},[t._v("A")]),t._v(" "),n("list-item",{attrs:{title:"list item 1"},on:{listItemClick:t.listItemClickFun}},[n("badge",{attrs:{rounded:"",red:""},slot:"after"},[t._v("5")])],1),t._v(" "),n("list-item",{attrs:{title:"list item 2"}},[n("badge",{attrs:{rounded:"",green:""},slot:"after"},[t._v("ok")])],1),t._v(" "),n("list-item",{attrs:{title:"list item 3"}},[n("vue-switch",{slot:"after"})],1),t._v(" "),n("list-item",{attrs:{role:""}},[t._v("B")]),t._v(" "),n("list-item",{attrs:{title:"list item 1"}}),t._v(" "),n("list-item",{attrs:{title:"list item 2"}}),t._v(" "),n("list-item",{attrs:{title:"list item 3"}}),t._v(" "),n("list-item",{attrs:{role:""}},[t._v("C")]),t._v(" "),n("list-item",{attrs:{title:"list item 1"}}),t._v(" "),n("list-item",{attrs:{title:"list item 2"}}),t._v(" "),n("list-item",{attrs:{title:"list item 3",after:"After"}})],1)],1),t._v(" "),n("group",{attrs:{noPadded:"",header:"包含链接列表"}},[n("list",[n("list-item",{attrs:{title:"list item 1",href:"/"}}),t._v(" "),n("list-item",{attrs:{title:"list item 2",href:"/"}}),t._v(" "),n("list-item",{attrs:{title:"list item 3",href:"/",after:"2017.02"}})],1)],1),t._v(" "),n("group",{attrs:{noPadded:"",header:"包含图标的列表"}},[n("list",[n("list-item",{attrs:{title:"list item 1"}},[n("img",{attrs:{width:"32",src:"http://lorempixel.com/128/128/people/"},slot:"img"}),t._v(" "),n("badge",{attrs:{rounded:"",red:""},slot:"after"},[t._v("5")])],1),t._v(" "),n("list-item",{attrs:{title:"list item 2",href:"/",after:"2017.02"}},[n("img",{attrs:{width:"32",src:"http://lorempixel.com/128/128/people/"},slot:"img"})]),t._v(" "),n("list-item",{attrs:{title:"list item 3",href:"/"}},[n("img",{attrs:{width:"32",src:"http://lorempixel.com/128/128/people/"},slot:"img"}),t._v(" "),n("badge",{attrs:{rounded:"",red:""},slot:"after"},[t._v("5")])],1)],1)],1),t._v(" "),n("group",{attrs:{noPadded:"",header:"含描述的文字列表"}},[n("list",[n("list-item",{attrs:{title:"女爵",after:"2017.02",subTitle:"发行公司：环球唱片",desc:"她坦白了我们所虚伪的 她单纯了我们所复杂的\n                    五年以来…\n                    5年的等待，是个漫长也是耗损的过程。\n                    看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！\n                    她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，\n                    这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，\n                    是我们唯一相信且期待杨乃文的理由。",href:"http://music.163.com/#/album?id=31308"}}),t._v(" "),n("list-item",{attrs:{title:"第一张精选",href:"http://music.163.com/#/album?id=31312"}},[n("span",{slot:"after"},[t._v("2017.02")]),t._v(" "),n("span",{slot:"subTitle"},[t._v("发行公司：滚石唱片")]),t._v(" "),n("span",{slot:"desc"},[t._v("出道六年来只出过三张专辑的杨乃文，第一次集合三张专辑的精华构成了这张充满个性的精选辑。专辑收录尚未发片前首先曝光，原始浓烈的杨乃文独唱曲[爱上你只是我的错]、曾让无数人伤感落泪的《我给的爱》、悲情经典《silence》、杨乃文96年在魔岩校园live演唱会上敏感热烈的创作《fear》、充满古典优雅气质的电影[第凡内早餐]的主题曲《monn river》等好歌。通过尝试各种新鲜形象，搭配MV营造的氛围，总是给人耳目一新的新感觉。")])]),t._v(" "),n("list-item",{attrs:{title:"Silence",after:"2017.02",subTitle:"发行公司：魔岩唱片",desc:"所有人都能从作品中听到能量和震撼的呈现，矛盾与妥协，失意与快乐，制作人林炜哲是真正进入到歌手的灵魂，找出最真实的瞬间再燃烧释放，献给大家；这种完全认真作音乐不哈啦的态度，不是只字片语能形容，也并非速食文化所能比拟，这种精神是和全世界的音乐人同步，这也是他们的作品和台湾大部份截然不同的原因。这样的音乐正是台湾年轻人目前需要的，与世界处在同步潮流，所有年轻人都能感受的热情和力量",href:"http://music.163.com/#/album?id=31319"}})],1)],1),t._v(" "),n("group",{attrs:{noPadded:"",header:"图文列表"}},[n("list",[n("list-item",{attrs:{title:"女爵",after:"2017.02",subTitle:"发行公司：环球唱片"}},[n("img",{attrs:{src:"http://lorempixel.com/160/160/people/",width:"48",alt:""},slot:"img"})]),t._v(" "),n("list-item",{attrs:{title:"第一张精选",after:"2017.02",subTitle:"发行公司：滚石唱片",href:"http://music.163.com/#/album?id=31312"}},[n("img",{attrs:{src:"http://lorempixel.com/160/160/people/",width:"48",alt:""},slot:"img"})]),t._v(" "),n("list-item",{attrs:{title:"Silence",after:"2017.02",subTitle:"发行公司：魔岩唱片",href:"http://music.163.com/#/album?id=31319"}},[n("img",{attrs:{src:"http://lorempixel.com/160/160/people/",width:"48",alt:""},slot:"img"})])],1)],1),t._v(" "),n("h3",[t._v("Inset")]),t._v(" "),n("list",{attrs:{inset:""}},[n("list-item",{attrs:{title:"女爵",after:"2017.02",subTitle:"发行公司：环球唱片"}},[n("img",{attrs:{src:"http://lorempixel.com/160/160/people/",width:"48",alt:""},slot:"img"})]),t._v(" "),n("list-item",{attrs:{title:"第一张精选",after:"2017.02",subTitle:"发行公司：滚石唱片",href:"http://music.163.com/#/album?id=31312"}},[n("img",{attrs:{src:"http://lorempixel.com/160/160/people/",width:"48",alt:""},slot:"img"})]),t._v(" "),n("list-item",{attrs:{title:"Silence",after:"2017.02",subTitle:"发行公司：魔岩唱片",href:"http://music.163.com/#/album?id=31319"}},[n("img",{attrs:{src:"http://lorempixel.com/160/160/people/",width:"48",alt:""},slot:"img"})])],1),t._v(" "),n("list",[n("list-item",{attrs:{title:"女爵",after:"2017.02",subTitle:"发行公司：环球唱片",desc:"她坦白了我们所虚伪的 她单纯了我们所复杂的\n                    五年以来…\n                    5年的等待，是个漫长也是耗损的过程。\n                    看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！\n                    她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，\n                    这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，\n                    是我们唯一相信且期待杨乃文的理由。"}},[n("img",{attrs:{src:"http://lorempixel.com/160/160/people/",width:"80",alt:""},slot:"img"})]),t._v(" "),n("list-item",{attrs:{title:"第一张精选",after:"2017.02",subTitle:"发行公司：滚石唱片",desc:"出道六年来只出过三张专辑的杨乃文，第一次集合三张专辑的精华构成了这张充满个性的精选辑。专辑收录尚未发片前首先曝光，原始浓烈的杨乃文独唱曲[爱上你只是我的错]、曾让无数人伤感落泪的《我给的爱》、悲情经典《silence》、杨乃文96年在魔岩校园live演唱会上敏感热烈的创作《fear》、充满古典优雅气质的电影[第凡内早餐]的主题曲《monn river》等好歌。通过尝试各种新鲜形象，搭配MV营造的氛围，总是给人耳目一新的新感觉。",href:"http://music.163.com/#/album?id=31312"}},[n("img",{attrs:{src:"http://lorempixel.com/160/160/people/",width:"80",alt:""},slot:"img"})]),t._v(" "),n("list-item",{attrs:{title:"Silence",after:"2017.02",subTitle:"发行公司：魔岩唱片",desc:"所有人都能从作品中听到能量和震撼的呈现，矛盾与妥协，失意与快乐，制作人林炜哲是真正进入到歌手的灵魂，找出最真实的瞬间再燃烧释放，献给大家；这种完全认真作音乐不哈啦的态度，不是只字片语能形容，也并非速食文化所能比拟，这种精神是和全世界的音乐人同步，这也是他们的作品和台湾大部份截然不同的原因。这样的音乐正是台湾年轻人目前需要的，与世界处在同步潮流，所有年轻人都能感受的热情和力量",href:"http://music.163.com/#/album?id=31319"}},[n("img",{attrs:{src:"http://lorempixel.com/160/160/people/",width:"80",alt:""},slot:"img"})])],1),t._v(" "),n("h3",[t._v("card 嵌套")]),t._v(" "),n("card",[n("list",[n("list-item",{attrs:{title:"list item 1"}},[n("badge",{attrs:{rounded:"",red:""},slot:"after"},[t._v("5")])],1),t._v(" "),n("list-item",{attrs:{title:"list item 2"}},[n("badge",{attrs:{rounded:"",green:""},slot:"after"},[t._v("ok")])],1),t._v(" "),n("list-item",{attrs:{title:"list item 3"}},[n("vue-switch",{slot:"after"})],1)],1)],1),t._v(" "),n("card",[n("list",[n("list-item",{attrs:{title:"list item 1",href:"/"}}),t._v(" "),n("list-item",{attrs:{title:"list item 2",href:"/"}}),t._v(" "),n("list-item",{attrs:{title:"list item 3",href:"/",after:"2017.02"}})],1)],1),t._v(" "),n("card",[n("list",[n("list-item",{attrs:{title:"女爵",after:"2017.02",subTitle:"发行公司：环球唱片"}},[n("img",{attrs:{src:"http://lorempixel.com/160/160/people/",width:"48",alt:""},slot:"img"})]),t._v(" "),n("list-item",{attrs:{title:"第一张精选",after:"2017.02",subTitle:"发行公司：滚石唱片",href:"http://music.163.com/#/album?id=31312"}},[n("img",{attrs:{src:"http://lorempixel.com/160/160/people/",width:"48",alt:""},slot:"img"})]),t._v(" "),n("list-item",{attrs:{title:"Silence",after:"2017.02",subTitle:"发行公司：魔岩唱片",href:"http://music.163.com/#/album?id=31319"}},[n("img",{attrs:{src:"http://lorempixel.com/160/160/people/",width:"48",alt:""},slot:"img"})])],1)],1)],1)],1)},staticRenderFns:[]}},85:function(t,e,n){n(255);var i=n(0)(n(208),n(297),"data-v-1cb71f8c",null);t.exports=i.exports},97:function(t,e,n){var i=n(33)("wks"),r=n(35),s=n(4).Symbol,a="function"==typeof s,o=t.exports=function(t){return i[t]||(i[t]=a&&s[t]||(a?s:r)("Symbol."+t))};o.store=i},98:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"group",props:{header:String,footer:String,noPadded:Boolean}}},99:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(8);e.default={name:"navbar",mixins:[i.a],props:{titleOnLeft:{type:Boolean}},data:function(){return{name:"navbar"}},computed:{NavbarTitle:function(){return{"navbar-center":!this.titleOnLeft,"navbar-left":this.titleOnLeft}}}}}});