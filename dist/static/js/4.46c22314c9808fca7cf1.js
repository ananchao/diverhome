webpackJsonp([4,15],{197:function(n,t,e){e(404);var i=e(10)(e(383),e(430),"data-v-4ab45422",null);n.exports=i.exports},224:function(n,t,e){"use strict";function i(n,t){if(!/^javas/.test(n)&&n){"object"===(void 0===n?"undefined":s()(n))||t&&"string"==typeof n&&!/http/.test(n)?t.push(n):window.location.href=n}}function o(n,t){return!t||t._history||"string"!=typeof n||/http/.test(n)?n&&"object"!==(void 0===n?"undefined":s()(n))?n:"javascript:void(0);":"#!"+n}var r=e(26),s=e.n(r);t.a=i,t.b=o},233:function(n,t,e){"use strict";var i=e(224);e.d(t,"b",function(){return o}),e.d(t,"a",function(){return r});var o={mounted:function(){this.value>=0&&(this.currentIndex=this.value),this.updateIndex()},methods:{updateIndex:function(){if(this.$children&&this.$children.length){this.number=this.$children.length;for(var n=this.$children,t=0;t<n.length;t++)n[t].currentIndex=t,n[t].currentSelected&&(this.index=t)}}},props:{value:Number},watch:{currentIndex:function(n,t){t>-1&&this.$children[t]&&(this.$children[t].currentSelected=!1),n>-1&&this.$children[n]&&(this.$children[n].currentSelected=!0),this.$emit("input",n)},index:function(n){this.currentIndex=n},value:function(n){this.index=n}},data:function(){return{index:-1,currentIndex:this.index,number:this.$children.length}}},r={props:{selected:{type:Boolean,default:!1}},mounted:function(){this.$parent.updateIndex()},beforeDestroy:function(){var n=this.$parent;this.$nextTick(function(){n.updateIndex()})},methods:{onItemClick:function(n){var t=this;void 0!==this.disabled&&this.disabled!==!1||(this.currentSelected=!0,this.$parent.currentIndex=this.currentIndex,this.$nextTick(function(){t.$emit("on-item-click",t.currentIndex)})),n===!0&&e.i(i.a)(this.link,this.$router)}},watch:{currentSelected:function(n){n&&(this.$parent.index=this.currentIndex)},selected:function(n){this.currentSelected=n}},data:function(){return{currentIndex:-1,currentSelected:this.selected}}}},250:function(n,t,e){t=n.exports=e(185)(),t.push([n.i,"/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* form-preview\n*/\n/**\n* load-more\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* search\n*/\n.vux-tab-ink-bar {\n  position: absolute;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: #FF9900;\n  text-align: center;\n}\n.vux-tab-ink-bar-transition-forward {\n  -webkit-transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1), left 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s;\n  transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1), left 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s;\n}\n.vux-tab-ink-bar-transition-backward {\n  -webkit-transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s, left 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n  transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s, left 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n}\n.vux-tab {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  background-color: #fff;\n  height: 44px;\n  position: relative;\n}\n.vux-tab button {\n  padding: 0;\n  border: 0;\n  outline: 0;\n  background: 0 0;\n  -webkit-appearance: none;\n          appearance: none;\n}\n.vux-tab .vux-tab-item {\n  display: block;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  background: -webkit-linear-gradient(top, #e5e5e5, #e5e5e5, rgba(229, 229, 229, 0)) bottom left no-repeat;\n  background: linear-gradient(180deg, #e5e5e5, #e5e5e5, rgba(229, 229, 229, 0)) bottom left no-repeat;\n  background-size: 100% 1px;\n  font-size: 14px;\n  text-align: center;\n  line-height: 44px;\n  color: #666;\n}\n.vux-tab .vux-tab-item.vux-tab-selected {\n  color: #FF9900;\n  border-bottom: 3px solid #FF9900;\n}\n.vux-tab .vux-tab-item.vux-tab-disabled {\n  color: #ddd;\n}\n.vux-tab.vux-tab-no-animate .vux-tab-item.vux-tab-selected {\n  background: 0 0;\n}\n/** when=prop:custom-bar-width **/\n.vux-tab-bar-inner {\n  display: block;\n  background-color: #FF9900;\n  margin: auto;\n  height: 100%;\n  -webkit-transition: width 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n  transition: width 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n}\n","",{version:3,sources:["/./node_modules/vux/src/components/tab/tab.vue"],names:[],mappings:"AAAA;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF,WAAW;AACX;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;EACE,mBAAmB;EACnB,YAAY;EACZ,UAAU;EACV,QAAQ;EACR,0BAA0B;EAC1B,mBAAmB;CACpB;AACD;EACE,8GAA8G;EAC9G,sGAAsG;CACvG;AACD;EACE,8GAA8G;EAC9G,sGAAsG;CACvG;AACD;EACE,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,uBAAuB;EACvB,aAAa;EACb,mBAAmB;CACpB;AACD;EACE,WAAW;EACX,UAAU;EACV,WAAW;EACX,gBAAgB;EAChB,yBAAyB;UACjB,iBAAiB;CAC1B;AACD;EACE,eAAe;EACf,oBAAoB;EACpB,gBAAgB;UACR,QAAQ;EAChB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,yGAAyG;EACzG,oGAAoG;EACpG,0BAA0B;EAC1B,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,YAAY;CACb;AACD;EACE,eAAe;EACf,iCAAiC;CAClC;AACD;EACE,YAAY;CACb;AACD;EACE,gBAAgB;CACjB;AACD,kCAAkC;AAClC;EACE,eAAe;EACf,0BAA0B;EAC1B,aAAa;EACb,aAAa;EACb,8DAA8D;EAC9D,sDAAsD;CACvD",file:"tab.vue",sourcesContent:["/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* form-preview\n*/\n/**\n* load-more\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* search\n*/\n.vux-tab-ink-bar {\n  position: absolute;\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: #FF9900;\n  text-align: center;\n}\n.vux-tab-ink-bar-transition-forward {\n  -webkit-transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1), left 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s;\n  transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1), left 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s;\n}\n.vux-tab-ink-bar-transition-backward {\n  -webkit-transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s, left 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n  transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1) 0.09s, left 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n}\n.vux-tab {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  background-color: #fff;\n  height: 44px;\n  position: relative;\n}\n.vux-tab button {\n  padding: 0;\n  border: 0;\n  outline: 0;\n  background: 0 0;\n  -webkit-appearance: none;\n          appearance: none;\n}\n.vux-tab .vux-tab-item {\n  display: block;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n          flex: 1;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  background: -webkit-linear-gradient(top, #e5e5e5, #e5e5e5, rgba(229, 229, 229, 0)) bottom left no-repeat;\n  background: linear-gradient(180deg, #e5e5e5, #e5e5e5, rgba(229, 229, 229, 0)) bottom left no-repeat;\n  background-size: 100% 1px;\n  font-size: 14px;\n  text-align: center;\n  line-height: 44px;\n  color: #666;\n}\n.vux-tab .vux-tab-item.vux-tab-selected {\n  color: #FF9900;\n  border-bottom: 3px solid #FF9900;\n}\n.vux-tab .vux-tab-item.vux-tab-disabled {\n  color: #ddd;\n}\n.vux-tab.vux-tab-no-animate .vux-tab-item.vux-tab-selected {\n  background: 0 0;\n}\n/** when=prop:custom-bar-width **/\n.vux-tab-bar-inner {\n  display: block;\n  background-color: #FF9900;\n  margin: auto;\n  height: 100%;\n  -webkit-transition: width 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n  transition: width 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n}\n"],sourceRoot:"webpack://"}])},254:function(n,t,e){var i=e(10)(e(270),e(280),null,null);n.exports=i.exports},255:function(n,t,e){e(278);var i=e(10)(e(271),e(284),null,null);n.exports=i.exports},270:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(233);t.default={mixins:[i.a],props:{activeClass:String,disabled:Boolean},computed:{style:function(){return{borderWidth:this.$parent.lineWidth+"px",borderColor:this.$parent.activeColor,color:this.currentSelected?this.$parent.activeColor:this.disabled?this.$parent.disabledColor:this.$parent.defaultColor,border:this.$parent.animate?"none":"auto"}}}}},271:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(233);t.default={mixins:[i.b],mounted:function(){var n=this;this.$nextTick(function(){setTimeout(function(){n.hasReady=!0},0)})},props:{lineWidth:{type:Number,default:3},activeColor:String,barActiveColor:String,defaultColor:String,disabledColor:String,animate:{type:Boolean,default:!0},customBarWidth:[Function,String]},computed:{barLeft:function(){return this.currentIndex*(100/this.number)+"%"},barRight:function(){return(this.number-this.currentIndex-1)*(100/this.number)+"%"},innerBarStyle:function(){return{width:"function"==typeof this.customBarWidth?this.customBarWidth(this.currentIndex):this.customBarWidth,backgroundColor:this.barActiveColor||this.activeColor}},barStyle:function(){var n={left:this.barLeft,right:this.barRight,display:"block",height:this.lineWidth+"px",transition:this.hasReady?null:"none"};return this.customBarWidth?n.backgroundColor="transparent":n.backgroundColor=this.barActiveColor||this.activeColor,n},barClass:function(){return{"vux-tab-ink-bar-transition-forward":"forward"===this.direction,"vux-tab-ink-bar-transition-backward":"backward"===this.direction}}},watch:{currentIndex:function(n,t){this.direction=n>t?"forward":"backward",this.$emit("on-index-change",n,t)}},data:function(){return{direction:"forward",right:"100%",hasReady:!1}}}},278:function(n,t,e){var i=e(250);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e(186)("7c62587e",i,!0)},280:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement;return(n._self._c||t)("div",{staticClass:"vux-tab-item",class:[n.currentSelected?n.activeClass:"",{"vux-tab-selected":n.currentSelected,"vux-tab-disabled":n.disabled}],style:n.style,on:{click:n.onItemClick}},[n._t("default")],2)},staticRenderFns:[]}},284:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"vux-tab",class:{"vux-tab-no-animate":!n.animate}},[n._t("default"),n._v(" "),n.animate?e("div",{staticClass:"vux-tab-ink-bar",class:n.barClass,style:n.barStyle},[n.customBarWidth?e("span",{staticClass:"vux-tab-bar-inner",style:n.innerBarStyle}):n._e()]):n._e()],2)},staticRenderFns:[]}},298:function(n,t,e){t=n.exports=e(185)(),t.push([n.i,"/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* form-preview\n*/\n/**\n* load-more\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* search\n*/\n.vux-sticky-box {\n  z-index: 500;\n}\n.vux-sticky {\n  width: 100%;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n.vux-fixed {\n  width: 100%;\n  position: fixed;\n  top: 0;\n}\n","",{version:3,sources:["/./node_modules/vux/src/components/sticky/index.vue"],names:[],mappings:"AAAA;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF,WAAW;AACX;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;EACE,aAAa;CACd;AACD;EACE,YAAY;EACZ,yBAAyB;EACzB,iBAAiB;EACjB,OAAO;CACR;AACD;EACE,YAAY;EACZ,gBAAgB;EAChB,OAAO;CACR",file:"index.vue",sourcesContent:["/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* form-preview\n*/\n/**\n* load-more\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* search\n*/\n.vux-sticky-box {\n  z-index: 500;\n}\n.vux-sticky {\n  width: 100%;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n.vux-fixed {\n  width: 100%;\n  position: fixed;\n  top: 0;\n}\n"],sourceRoot:"webpack://"}])},303:function(n,t,e){t=n.exports=e(185)(),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n","",{version:3,sources:[],names:[],mappings:"",file:"Shop.vue",sourceRoot:"webpack://"}])},305:function(n,t,e){t=n.exports=e(185)(),t.push([n.i,"/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* form-preview\n*/\n/**\n* load-more\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* search\n*/\n.vux-slider {\n  overflow: hidden;\n  position: relative;\n}\n.vux-slider > .vux-indicator,\n.vux-slider .vux-indicator-right {\n  position: absolute;\n  right: 15px;\n  bottom: 10px;\n}\n.vux-slider > .vux-indicator > a,\n.vux-slider .vux-indicator-right > a {\n  float: left;\n  margin-left: 6px;\n}\n.vux-slider > .vux-indicator > a > .vux-icon-dot,\n.vux-slider .vux-indicator-right > a > .vux-icon-dot {\n  display: inline-block;\n  vertical-align: middle;\n  width: 6px;\n  height: 6px;\n  border-radius: 3px;\n  background-color: #d0cdd1;\n}\n.vux-slider > .vux-indicator > a > .vux-icon-dot.active,\n.vux-slider .vux-indicator-right > a > .vux-icon-dot.active {\n  background-color: #FF9900;\n}\n.vux-slider > .vux-indicator-center {\n  right: 50%;\n  -webkit-transform: translateX(50%);\n          transform: translateX(50%);\n}\n.vux-slider > .vux-indicator-left {\n  left: 15px;\n  right: auto;\n}\n.vux-slider > .vux-swiper {\n  overflow: hidden;\n  position: relative;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item > a {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: center center no-repeat;\n  background-size: cover;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 1.4em;\n  font-size: 16px;\n  padding: 20px 50px 12px 13px;\n  margin: 0;\n  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.7) 100%);\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.7) 100%);\n  color: #fff;\n  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-wrap: normal;\n}\n","",{version:3,sources:["/./node_modules/vux/src/components/swiper/swiper.vue"],names:[],mappings:"AAAA;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF,WAAW;AACX;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;EACE,iBAAiB;EACjB,mBAAmB;CACpB;AACD;;EAEE,mBAAmB;EACnB,YAAY;EACZ,aAAa;CACd;AACD;;EAEE,YAAY;EACZ,iBAAiB;CAClB;AACD;;EAEE,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,0BAA0B;CAC3B;AACD;;EAEE,0BAA0B;CAC3B;AACD;EACE,WAAW;EACX,mCAAmC;UAC3B,2BAA2B;CACpC;AACD;EACE,WAAW;EACX,YAAY;CACb;AACD;EACE,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,aAAa;CACd;AACD;EACE,eAAe;EACf,YAAY;EACZ,aAAa;CACd;AACD;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,oCAAoC;EACpC,uBAAuB;CACxB;AACD;EACE,mBAAmB;EACnB,QAAQ;EACR,SAAS;EACT,UAAU;EACV,cAAc;EACd,gBAAgB;EAChB,6BAA6B;EAC7B,UAAU;EACV,4FAA4F;EAC5F,0FAA0F;EAC1F,YAAY;EACZ,wCAAwC;EACxC,iBAAiB;EACjB,wBAAwB;EACxB,oBAAoB;EACpB,kBAAkB;CACnB",file:"swiper.vue",sourcesContent:["/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* form-preview\n*/\n/**\n* load-more\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* search\n*/\n.vux-slider {\n  overflow: hidden;\n  position: relative;\n}\n.vux-slider > .vux-indicator,\n.vux-slider .vux-indicator-right {\n  position: absolute;\n  right: 15px;\n  bottom: 10px;\n}\n.vux-slider > .vux-indicator > a,\n.vux-slider .vux-indicator-right > a {\n  float: left;\n  margin-left: 6px;\n}\n.vux-slider > .vux-indicator > a > .vux-icon-dot,\n.vux-slider .vux-indicator-right > a > .vux-icon-dot {\n  display: inline-block;\n  vertical-align: middle;\n  width: 6px;\n  height: 6px;\n  border-radius: 3px;\n  background-color: #d0cdd1;\n}\n.vux-slider > .vux-indicator > a > .vux-icon-dot.active,\n.vux-slider .vux-indicator-right > a > .vux-icon-dot.active {\n  background-color: #FF9900;\n}\n.vux-slider > .vux-indicator-center {\n  right: 50%;\n  -webkit-transform: translateX(50%);\n          transform: translateX(50%);\n}\n.vux-slider > .vux-indicator-left {\n  left: 15px;\n  right: auto;\n}\n.vux-slider > .vux-swiper {\n  overflow: hidden;\n  position: relative;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item > a {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: center center no-repeat;\n  background-size: cover;\n}\n.vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 1.4em;\n  font-size: 16px;\n  padding: 20px 50px 12px 13px;\n  margin: 0;\n  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.7) 100%);\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.7) 100%);\n  color: #fff;\n  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-wrap: normal;\n}\n"],sourceRoot:"webpack://"}])},333:function(n,t,e){e(399);var i=e(10)(e(366),e(425),null,null);n.exports=i.exports},334:function(n,t,e){var i=e(10)(e(367),e(418),null,null);n.exports=i.exports},335:function(n,t,e){e(406);var i=e(10)(e(368),e(432),null,null);n.exports=i.exports},341:function(n,t,e){n.exports="function"==typeof Array.from?Array.from:e(342)},342:function(n,t){n.exports=function(){var n=function(n){return"function"==typeof n},t=function(n){var t=Number(n);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t},e=Math.pow(2,53)-1,i=function(n){var i=t(n);return Math.min(Math.max(i,0),e)},o=function(n){if(null!=n){if(["string","number","boolean","symbol"].indexOf(typeof n)>-1)return Symbol.iterator;if("undefined"!=typeof Symbol&&"iterator"in Symbol&&Symbol.iterator in n)return Symbol.iterator;if("@@iterator"in n)return"@@iterator"}},r=function(t,e){if(null!=t&&null!=e){var i=t[e];if(null==i)return;if(!n(i))throw new TypeError(i+" is not a function");return i}},s=function(n){var t=n.next();return!Boolean(t.done)&&t};return function(t){"use strict";var e,a=this,c=arguments.length>1?arguments[1]:void 0;if(void 0!==c){if(!n(c))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(e=arguments[2])}var u,l,A=r(t,o(t));if(void 0!==A){u=n(a)?Object(new a):[];var d=A.call(t);if(null==d)throw new TypeError("Array.from requires an array-like or iterable object");l=0;for(var h,p;;){if(h=s(d),!h)return u.length=l,u;p=h.value,u[l]=c?c.call(e,p,l):p,l++}}else{var E=Object(t);if(null==t)throw new TypeError("Array.from requires an array-like object - not null or undefined");var v=i(E.length);u=n(a)?Object(new a(v)):new Array(v),l=0;for(var f;l<v;)f=E[l],u[l]=c?c.call(e,f,l):f,l++;u.length=v}return u}}()},358:function(n,t,e){"use strict";t.__esModule=!0,t.default=function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}},359:function(n,t,e){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}t.__esModule=!0;var o=e(81),r=i(o);t.default=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,r.default)(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}()},366:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(389);t.default={mounted:function(){var n=this;this.$nextTick(function(){e.i(i.a)(n.$el,{scrollBox:n.scrollBox,offset:n.offset,checkStickySupport:void 0===n.checkStickySupport||n.checkStickySupport})})},props:["scrollBox","offset","checkStickySupport"]}},367:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={mounted:function(){var n=this;this.$nextTick(function(){n.$parent.rerender()})},beforeDestroy:function(){var n=this.$parent;this.$nextTick(function(){n.rerender()})}}},368:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(43),o=e.n(i),r=e(390),s=e(224);t.default={created:function(){this.index=this.value||0,this.index&&(this.current=this.index)},mounted:function(){var n=this;this.$nextTick(function(){n.list&&0===n.list.length||n.render(n.index),n.xheight=n.getHeight()})},methods:{clickListItem:function(n){e.i(s.a)(n.url,this.$router),this.$emit("on-click-list-item",JSON.parse(o()(n)))},buildBackgroundUrl:function(n){return"url("+n+")"},render:function(){var n=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.swiper&&this.swiper.destroy(),this.swiper=new r.a({container:this.$el,direction:this.direction,auto:this.auto,loop:this.loop,interval:this.interval,threshold:this.threshold,duration:this.duration,height:this.height||this._height,minMovingDistance:this.minMovingDistance,imgList:this.imgList}).on("swiped",function(t,e){n.current=e%n.length,n.index=e%n.length}),t>0&&this.swiper.go(t)},rerender:function(){var n=this;this.$el&&this.$nextTick(function(){n.index=n.value||0,n.current=n.value||0,n.length=n.list.length||n.$children.length,n.destroy(),n.render(n.value)})},destroy:function(){this.swiper&&this.swiper.destroy()},getHeight:function(){var n=parseInt(this.height,10);return n?this.height:n?void 0:this.aspectRatio?this.$el.offsetWidth*this.aspectRatio+"px":"180px"}},props:{list:{type:Array,default:function(){return[]}},direction:{type:String,default:"horizontal"},showDots:{type:Boolean,default:!0},showDescMask:{type:Boolean,default:!0},dotsPosition:{type:String,default:"right"},dotsClass:String,auto:{type:Boolean,default:!1},loop:Boolean,interval:{type:Number,default:3e3},threshold:{type:Number,default:50},duration:{type:Number,default:300},height:{type:String,default:"auto"},aspectRatio:Number,minMovingDistance:{type:Number,default:0},value:{type:Number,default:0}},data:function(){return{current:this.index||0,xheight:"auto",length:this.list.length,index:0}},watch:{list:function(n){this.rerender()},current:function(n){this.index=n,this.$emit("on-index-change",n)},index:function(n){var t=this;n!==this.current&&this.$nextTick(function(){t.swiper&&t.swiper.go(n)}),this.$emit("input",n)},value:function(n){this.index=n}},beforeDestroy:function(){this.destroy()}}},383:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(335),o=e.n(i),r=e(334),s=e.n(r),a=e(255),c=e.n(a),u=e(254),l=e.n(u),A=e(333),d=e.n(A),h=["course","goods"],p=[{img:"https://static.vux.li/demo/1.jpg"},{img:"https://static.vux.li/demo/2.jpg"},{img:"https://static.vux.li/demo/3.jpg"}];t.default={name:"shop",data:function(){return{bannerList:p,index:0}},methods:{tabClick:function(){this.$router.replace({path:h[this.index]})}},components:{Swiper:o.a,SwiperItem:s.a,Tab:c.a,TabItem:l.a,Sticky:d.a}}},389:function(n,t,e){"use strict";function i(){var n=window.navigator.userAgent,t=n.match(/(iPad|iPhone|iPod)\s+OS\s([\d_.]+)/);return t&&t[2]&&parseInt(t[2].replace(/_/g,"."),10)>=6}function o(){for(var n=["","-webkit-","-ms-","-moz-","-o-"],t="",e=0;e<n.length;e++)t+="position:"+n[e]+"sticky";var i=document.createElement("div"),o=document.body;i.style.cssText="display:none"+t,o.appendChild(i);var r=/sticky/i.test(window.getComputedStyle(i).position);return o.removeChild(i),i=null,r}t.a=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.scrollBox||window,r=t.offset||0,s=t.checkStickySupport===!0||!1;"string"==typeof e&&(e=document.getElementById(e));var a=n.offsetTop-r,c=function(){return e===window?document.documentElement.scrollTop:e.scrollTop},u=function(){c()>=a?(n.style.top=r+"px",n.classList.add("vux-fixed")):n.classList.remove("vux-fixed")};s&&(i()||o())?n.classList.add("vux-sticky"):setTimeout(function(){a=n.offsetTop-r,e.addEventListener("scroll",u)},1e3)}},390:function(n,t,e){"use strict";var i=e(358),o=e.n(i),r=e(359),s=e.n(r),a=e(341),c=e.n(a),u=e(77),l=e.n(u),A=function(){function n(t){if(o()(this,n),this._default={container:".vux-swiper",item:".vux-swiper-item",direction:"vertical",activeClass:"active",threshold:50,duration:300,auto:!1,loop:!1,interval:3e3,height:"auto",minMovingDistance:0},this._options=l()(this._default,t),this._options.height=this._options.height.replace("px",""),this._start={},this._move={},this._end={},this._eventHandlers={},this._prev=this._current=this._goto=0,this._width=this._height=this._distance=0,this._offset=[],this.$box=this._options.container,this.$container=this._options.container.querySelector(".vux-swiper"),this.$items=this.$container.querySelectorAll(this._options.item),this.count=this.$items.length,this.realCount=this.$items.length,this._position=[],this._firstItemIndex=0,this.count)return this._init(),this._auto(),this._bind(),this._onResize(),this}return s()(n,[{key:"_auto",value:function(){var n=this;n.stop(),n._options.auto&&(n.timer=setTimeout(function(){n.next()},n._options.interval))}},{key:"updateItemWidth",value:function(){this._width=this.$box.offsetWidth||document.documentElement.offsetWidth,this._distance="horizontal"===this._options.direction?this._width:this._height}},{key:"stop",value:function(){this.timer&&clearTimeout(this.timer)}},{key:"_loop",value:function(){return this._options.loop&&this.realCount>=3}},{key:"_onResize",value:function(){var n=this;this.resizeHandler=function(){setTimeout(function(){n.updateItemWidth(),n._setOffset(),n._setTransform()},100)},window.addEventListener("orientationchange",this.resizeHandler,!1)}},{key:"_init",value:function(){this._options.loop&&this._loopTwoItems(),this._height="auto"===this._options.height?"auto":this._options.height-0,this.updateItemWidth(),this._initPosition(),this._activate(this._current),this._setOffset(),this._setTransform(),this._loop()&&this._loopRender()}},{key:"_initPosition",value:function(){for(var n=0;n<this.realCount;n++)this._position.push(n)}},{key:"_movePosition",value:function(n){var t=this;if(n>0){var e=t._position.splice(0,1);t._position.push(e[0])}else if(n<0){var i=t._position.pop();t._position.unshift(i)}}},{key:"_setOffset",value:function(){var n=this,t=n._position.indexOf(n._current);n._offset=[],c()(n.$items).forEach(function(e,i){n._offset.push((i-t)*n._distance)})}},{key:"_setTransition",value:function(n){n=n||this._options.duration||"none";var t="none"===n?"none":n+"ms";c()(this.$items).forEach(function(n,e){n.style.webkitTransition=t,n.style.transition=t})}},{key:"_setTransform",value:function(n){var t=this;n=n||0,c()(t.$items).forEach(function(e,i){var o=t._offset[i]+n,r="translate3d("+o+"px, 0, 0)";"vertical"===t._options.direction&&(r="translate3d(0, "+o+"px, 0)"),e.style.webkitTransform=r,e.style.transform=r})}},{key:"_bind",value:function(){var n=this;n.touchstartHandler=function(t){n.stop(),n._start.x=t.changedTouches[0].pageX,n._start.y=t.changedTouches[0].pageY,n._setTransition("none")},n.touchmoveHandler=function(t){n._move.x=t.changedTouches[0].pageX,n._move.y=t.changedTouches[0].pageY;var e=n._move.x-n._start.x,i=n._move.y-n._start.y,o=i,r=Math.abs(e)>Math.abs(i);"horizontal"===n._options.direction&&r&&(o=e),(n._options.minMovingDistance&&Math.abs(o)>=n._options.minMovingDistance||!n._options.minMovingDistance)&&r&&n._setTransform(o),r&&t.preventDefault()},n.touchendHandler=function(t){n._end.x=t.changedTouches[0].pageX,n._end.y=t.changedTouches[0].pageY;var e=n._end.y-n._start.y;"horizontal"===n._options.direction&&(e=n._end.x-n._start.x),e=n.getDistance(e),0!==e&&n._options.minMovingDistance&&Math.abs(e)<n._options.minMovingDistance||(e>n._options.threshold?n.move(-1):e<-n._options.threshold?n.move(1):n.move(0),n._loopRender())},n.transitionEndHandler=function(t){n._activate(n._current);var e=n._eventHandlers.swiped;e&&e.apply(n,[n._prev%n.count,n._current%n.count]),n._auto(),n._loopRender(),t.preventDefault()},n.$container.addEventListener("touchstart",n.touchstartHandler,!1),n.$container.addEventListener("touchmove",n.touchmoveHandler,!1),n.$container.addEventListener("touchend",n.touchendHandler,!1),n.$items[1]&&n.$items[1].addEventListener("webkitTransitionEnd",n.transitionEndHandler,!1)}},{key:"_loopTwoItems",value:function(){if(2===this.count){for(var n=document.createElement("div"),t=void 0,e=this.$items.length-1;e>=0;e--)n.innerHTML=this.$items[e].outerHTML,t=n.querySelector(this._options.item),t.classList.add(this._options.item.replace(".","")+"-clone"),this.$container.appendChild(t);this.realCount=4}}},{key:"_loopRender",value:function(){var n=this;n._loop()&&(0===n._offset[n._offset.length-1]?(n.$container.appendChild(n.$items[0]),n._loopEvent(1)):0===n._offset[0]&&(n.$container.insertBefore(n.$items[n.$items.length-1],n.$container.firstChild),n._loopEvent(-1)))}},{key:"_loopEvent",value:function(n){var t=this;t._itemDestoy(),t.$items=t.$container.querySelectorAll(t._options.item),t.$items[1]&&t.$items[1].addEventListener("webkitTransitionEnd",t.transitionEndHandler,!1),t._movePosition(n),t._setOffset(),t._setTransform()}},{key:"getDistance",value:function(n){return this._loop()?n:n>0&&0===this._current?0:n<0&&this._current===this.realCount-1?0:n}},{key:"_moveIndex",value:function(n){0!==n&&(this._prev=this._current,this._current+=this.realCount,this._current+=n,this._current%=this.realCount)}},{key:"_activate",value:function(n){var t=this._options.activeClass;Array.prototype.forEach.call(this.$items,function(e,i){e.classList.remove(t),n===Number(e.dataset.index)&&e.classList.add(t)})}},{key:"go",value:function(n){var t=this;return t.stop(),n=n||0,n+=this.realCount,n%=this.realCount,n=this._position.indexOf(n)-this._position.indexOf(this._current),t._moveIndex(n),t._setOffset(),t._setTransition(),t._setTransform(),t._auto(),this}},{key:"next",value:function(){return this.move(1),this}},{key:"move",value:function(n){return this.go(this._current+n),this}},{key:"on",value:function(n,t){return this._eventHandlers[n]&&console.error("[swiper] event "+n+" is already register"),"function"!=typeof t&&console.error("[swiper] parameter callback must be a function"),this._eventHandlers[n]=t,this}},{key:"_itemDestoy",value:function(){var n=this;this.$items.length&&c()(this.$items).forEach(function(t){t.removeEventListener("webkitTransitionEnd",n.transitionEndHandler,!1)})}},{key:"destroy",value:function(){if(this.stop(),this._current=0,this._setTransform(0),window.removeEventListener("orientationchange",this.resizeHandler,!1),this.$container.removeEventListener("touchstart",this.touchstartHandler,!1),this.$container.removeEventListener("touchmove",this.touchmoveHandler,!1),this.$container.removeEventListener("touchend",this.touchendHandler,!1),this._itemDestoy(),this._options.loop&&2===this.count){var n=this.$container.querySelector(this._options.item+"-clone");n&&this.$container.removeChild(n),n=this.$container.querySelector(this._options.item+"-clone"),n&&this.$container.removeChild(n)}}}]),n}();t.a=A},399:function(n,t,e){var i=e(298);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e(186)("5df72f1e",i,!0)},404:function(n,t,e){var i=e(303);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e(186)("826ae94c",i,!0)},406:function(n,t,e){var i=e(305);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e(186)("33270170",i,!0)},418:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement;return(n._self._c||t)("div",{staticClass:"vux-swiper-item"},[n._t("default")],2)},staticRenderFns:[]}},425:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement;return(n._self._c||t)("div",{staticClass:"vux-sticky-box"},[n._t("default")],2)},staticRenderFns:[]}},430:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("swiper",{attrs:{loop:"",auto:"",list:n.bannerList}}),n._v(" "),e("div",{staticStyle:{height:"44px"}},[e("sticky",{attrs:{"scroll-box":"vux_view_box_body","check-sticky-support":!1}},[e("tab",{attrs:{"line-width":1},model:{value:n.index,callback:function(t){n.index=t}}},[e("tab-item",{attrs:{selected:""},on:{"on-item-click":n.tabClick}},[n._v("热门课程 "),e("i",{staticClass:"icon iconfont icon-remaichanpin"})]),n._v(" "),e("tab-item",{on:{"on-item-click":n.tabClick}},[n._v("特惠商品 "),e("i",{staticClass:"icon iconfont icon-zhekou"})])],1)],1)],1),n._v(" "),e("router-view")],1)},staticRenderFns:[]}},432:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"vux-slider"},[e("div",{staticClass:"vux-swiper",style:{height:n.xheight}},[n._t("default"),n._v(" "),n._l(n.list,function(t,i){return e("div",{staticClass:"vux-swiper-item",attrs:{"data-index":i},on:{click:function(e){n.clickListItem(t)}}},[e("a",{attrs:{href:"javascript:"}},[e("div",{staticClass:"vux-img",style:{backgroundImage:n.buildBackgroundUrl(t.img)}}),n._v(" "),n.showDescMask?e("p",{staticClass:"vux-swiper-desc"},[n._v(n._s(t.title))]):n._e()])])})],2),n._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:n.showDots,expression:"showDots"}],class:[n.dotsClass,"vux-indicator","vux-indicator-"+n.dotsPosition]},n._l(n.length,function(t){return e("a",{attrs:{href:"javascript:"}},[e("i",{staticClass:"vux-icon-dot",class:{active:t-1===n.current}})])}))])},staticRenderFns:[]}}});
//# sourceMappingURL=4.46c22314c9808fca7cf1.js.map