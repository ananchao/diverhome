webpackJsonp([8,15],{195:function(n,t,e){e(395);var a=e(10)(e(381),e(422),"data-v-15ac177a",null);n.exports=a.exports},204:function(n,t,e){t=n.exports=e(185)(),t.push([n.i,"\n.vux-spinner {\n  stroke: #444;\n  fill: #444;\n  vertical-align: middle;\n  display: inline-block;\n  width: 28px;\n  height: 28px;\n}\n.vux-spinner svg {\n  width: 28px;\n  height: 28px;\n}\n.vux-spinner.vux-spinner-inverse {\n  stroke: #fff;\n  fill: #fff;\n}\n.vux-spinner-android {\n  stroke: #4b8bf4;\n}\n.vux-spinner-ios, .vux-spinner-ios-small {\n  stroke: #69717d;\n}\n.vux-spinner-spiral .stop1 {\n  stop-color: #fff;\n  stop-opacity: 0;\n}\n.vux-spinner-spiral.vux-spinner-inverse .stop1 {\n  stop-color: #000;\n}\n.vux-spinner-spiral.vux-spinner-inverse .stop2 {\n  stop-color: #fff;\n}\n","",{version:3,sources:["/./node_modules/vux/src/components/spinner/index.vue"],names:[],mappings:";AACA;EACE,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,sBAAsB;EACtB,YAAY;EACZ,aAAa;CACd;AACD;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,aAAa;EACb,WAAW;CACZ;AACD;EACE,gBAAgB;CACjB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,iBAAiB;EACjB,gBAAgB;CACjB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB",file:"index.vue",sourcesContent:["\n.vux-spinner {\n  stroke: #444;\n  fill: #444;\n  vertical-align: middle;\n  display: inline-block;\n  width: 28px;\n  height: 28px;\n}\n.vux-spinner svg {\n  width: 28px;\n  height: 28px;\n}\n.vux-spinner.vux-spinner-inverse {\n  stroke: #fff;\n  fill: #fff;\n}\n.vux-spinner-android {\n  stroke: #4b8bf4;\n}\n.vux-spinner-ios, .vux-spinner-ios-small {\n  stroke: #69717d;\n}\n.vux-spinner-spiral .stop1 {\n  stop-color: #fff;\n  stop-opacity: 0;\n}\n.vux-spinner-spiral.vux-spinner-inverse .stop1 {\n  stop-color: #000;\n}\n.vux-spinner-spiral.vux-spinner-inverse .stop2 {\n  stop-color: #fff;\n}\n"],sourceRoot:"webpack://"}])},205:function(n,t,e){e(219);var a=e(10)(e(216),e(220),null,null);n.exports=a.exports},216:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(218),r=["android","ios","ios-small","bubbles","circles","crescent","dots","lines","ripple","spiral"];t.default={mounted:function(){var n=this;this.$nextTick(function(){e.i(a.a)(n.$el,n.type)})},props:{type:{type:String,default:"ios"}},computed:{className:function(){for(var n={},t=0;t<r.length;t++)n["vux-spinner-"+r[t]]=this.type===r[t];return n}}}},217:function(n,t){for(var e=0,a=["webkit","moz"],r=0;r<a.length&&!window.requestAnimationFrame;++r)window.requestAnimationFrame=window[a[r]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[a[r]+"CancelAnimationFrame"]||window[a[r]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(n,t){var a=(new Date).getTime(),r=Math.max(0,16-(a-e)),i=window.setTimeout(function(){n(a+r)},r);return e=a+r,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(n){clearTimeout(n)})},218:function(n,t,e){"use strict";function a(n,t,e,i){var o,s,A,c=document.createElement(d[n]||n);for(o in t)if("[object Array]"===Object.prototype.toString.call(t[o]))for(s=0;s<t[o].length;s++)if(t[o][s].fn)for(A=0;A<t[o][s].t;A++)a(o,t[o][s].fn(A,i),c,i);else a(o,t[o][s],c,i);else r(c,o,t[o]);e.appendChild(c)}function r(n,t,e){n.setAttribute(d[t]||t,e)}function i(n,t){var e=n.split(";"),a=e.slice(t),r=e.slice(0,e.length-a.length);return e=a.concat(r).reverse(),e.join(";")+";"+e[0]}function o(n,t){return n/=t/2,n<1?.5*n*n*n:(n-=2,.5*(n*n*n+2))}var s=e(217),A=(e.n(s),"translate(32,32)"),c="stroke-opacity",p="round",l="indefinite",u="750ms",f="none",d={a:"animate",an:"attributeName",at:"animateTransform",c:"circle",da:"stroke-dasharray",os:"stroke-dashoffset",f:"fill",lc:"stroke-linecap",rc:"repeatCount",sw:"stroke-width",t:"transform",v:"values"},h={v:"0,32,32;360,32,32",an:"transform",type:"rotate",rc:l,dur:u},v={sw:4,lc:p,line:[{fn:function(n,t){return{y1:"ios"===t?17:12,y2:"ios"===t?29:20,t:A+" rotate("+(30*n+(n<6?180:-180))+")",a:[{fn:function(){return{an:c,dur:u,v:i("0;.1;.15;.25;.35;.45;.55;.65;.7;.85;1",n),rc:l}},t:1}]}},t:12}]},C={android:{c:[{sw:6,da:128,os:82,r:26,cx:32,cy:32,f:f}]},ios:v,"ios-small":v,bubbles:{sw:0,c:[{fn:function(n){return{cx:24*Math.cos(2*Math.PI*n/8),cy:24*Math.sin(2*Math.PI*n/8),t:A,a:[{fn:function(){return{an:"r",dur:u,v:i("1;2;3;4;5;6;7;8",n),rc:l}},t:1}]}},t:8}]},circles:{c:[{fn:function(n){return{r:5,cx:24*Math.cos(2*Math.PI*n/8),cy:24*Math.sin(2*Math.PI*n/8),t:A,sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:u,v:i(".3;.3;.3;.4;.7;.85;.9;1",n),rc:l}},t:1}]}},t:8}]},crescent:{c:[{sw:4,da:128,os:82,r:26,cx:32,cy:32,f:f,at:[h]}]},dots:{c:[{fn:function(n){return{cx:16+16*n,cy:32,sw:0,a:[{fn:function(){return{an:"fill-opacity",dur:u,v:i(".5;.6;.8;1;.8;.6;.5",n),rc:l}},t:1},{fn:function(){return{an:"r",dur:u,v:i("4;5;6;5;4;3;3",n),rc:l}},t:1}]}},t:3}]},lines:{sw:7,lc:p,line:[{fn:function(n){return{x1:10+14*n,x2:10+14*n,a:[{fn:function(){return{an:"y1",dur:u,v:i("16;18;28;18;16",n),rc:l}},t:1},{fn:function(){return{an:"y2",dur:u,v:i("48;44;36;46;48",n),rc:l}},t:1},{fn:function(){return{an:c,dur:u,v:i("1;.8;.5;.4;1",n),rc:l}},t:1}]}},t:4}]},ripple:{f:f,"fill-rule":"evenodd",sw:3,circle:[{fn:function(n){return{cx:32,cy:32,a:[{fn:function(){return{an:"r",begin:n*-1+"s",dur:"2s",v:"0;24",keyTimes:"0;1",keySplines:"0.1,0.2,0.3,1",calcMode:"spline",rc:l}},t:1},{fn:function(){return{an:c,begin:n*-1+"s",dur:"2s",v:".2;1;.2;0",rc:l}},t:1}]}},t:2}]},spiral:{defs:[{linearGradient:[{id:"sGD",gradientUnits:"userSpaceOnUse",x1:55,y1:46,x2:2,y2:46,stop:[{offset:.1,class:"stop1"},{offset:1,class:"stop2"}]}]}],g:[{sw:4,lc:p,f:f,path:[{stroke:"url(#sGD)",d:"M4,32 c0,15,12,28,28,28c8,0,16-4,21-9"},{d:"M60,32 C60,16,47.464,4,32,4S4,16,4,32"}],at:[h]}]}},x={android:function(n){function t(){if(!e.stop){var n=o(Date.now()-a,650),p=1,l=0,u=188-58*n,f=182-182*n;i%2&&(p=-1,l=-64,u=128- -58*n,f=182*n);var d=[0,-101,-90,-11,-180,79,-270,-191][i];r(c,"da",Math.max(Math.min(u,188),128)),r(c,"os",Math.max(Math.min(f,182),0)),r(c,"t","scale("+p+",1) translate("+l+",0) rotate("+d+",32,32)"),s+=4.1,s>359&&(s=0),r(A,"t","rotate("+s+",32,32)"),n>=1&&(i++,i>7&&(i=0),a=Date.now()),window.requestAnimationFrame(t)}}var e=this;this.stop=!1;var a,i=0,s=0,A=n.querySelector("g"),c=n.querySelector("circle");return function(){return a=Date.now(),t(),e}}};t.a=function(n,t){function e(){x[r]&&(i=x[r](n)())}var r,i;r=t;var o=document.createElement("div");return a("svg",{viewBox:"0 0 64 64",g:[C[r]]},o,r),n.innerHTML=o.innerHTML,e(),n}},219:function(n,t,e){var a=e(204);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e(186)("4673108e",a,!0)},220:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement;return(n._self._c||t)("span",{staticClass:"vux-spinner",class:n.className})},staticRenderFns:[]}},221:function(n,t,e){t=n.exports=e(185)(),t.push([n.i,'/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* form-preview\n*/\n/**\n* load-more\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* search\n*/\n.vux-header {\n  position: relative;\n  padding: 3px 0;\n  box-sizing: border-box;\n  background-color: #35495e;\n}\n.vux-header .vux-header-title,\n.vux-header h1 {\n  margin: 0 88px;\n  line-height: 40px;\n  text-align: center;\n  height: 40px;\n  font-size: 18px;\n  font-weight: 400;\n  width: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #fff;\n}\n.vux-header .vux-header-title > span {\n  display: inline-block;\n}\n.vux-header .vux-header-left,\n.vux-header .vux-header-right {\n  position: absolute;\n  top: 14px;\n  display: block;\n  font-size: 14px;\n  line-height: 21px;\n  color: #ccc;\n}\n.vux-header .vux-header-left a,\n.vux-header .vux-header-left button,\n.vux-header .vux-header-right a,\n.vux-header .vux-header-right button {\n  float: left;\n  margin-right: 8px;\n  color: #ccc;\n}\n.vux-header .vux-header-left a:active,\n.vux-header .vux-header-left button:active,\n.vux-header .vux-header-right a:active,\n.vux-header .vux-header-right button:active {\n  opacity: 0.5;\n}\n.vux-header .vux-header-left {\n  left: 18px;\n}\n.vux-header .vux-header-left .vux-header-back {\n  padding-left: 16px;\n}\n.vux-header .vux-header-left .left-arrow {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  top: -5px;\n  left: -5px;\n}\n.vux-header .vux-header-left .left-arrow:before {\n  content: "";\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  border: 1px solid #ccc;\n  border-width: 1px 0 0 1px;\n  -webkit-transform: rotate(315deg);\n          transform: rotate(315deg);\n  top: 8px;\n  left: 7px;\n}\n.vux-header .vux-header-right {\n  right: 15px;\n}\n.vux-header .vux-header-right a,\n.vux-header .vux-header-right button {\n  margin-left: 8px;\n  margin-right: 0;\n}\n.vux-header .vux-header-right .vux-header-more:after {\n  content: "\\2022   \\2022   \\2022   ";\n  font-size: 16px;\n}\n.vux-header-fade-in-right-enter-active {\n  -webkit-animation: fadeinR .5s;\n          animation: fadeinR .5s;\n}\n.vux-header-fade-in-left-enter-active {\n  -webkit-animation: fadeinL .5s;\n          animation: fadeinL .5s;\n}\n@-webkit-keyframes fadeinR {\n0% {\n    opacity: 0;\n    -webkit-transform: translateX(150px);\n            transform: translateX(150px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n}\n@keyframes fadeinR {\n0% {\n    opacity: 0;\n    -webkit-transform: translateX(150px);\n            transform: translateX(150px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n}\n@-webkit-keyframes fadeinL {\n0% {\n    opacity: 0;\n    -webkit-transform: translateX(-150px);\n            transform: translateX(-150px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n}\n@keyframes fadeinL {\n0% {\n    opacity: 0;\n    -webkit-transform: translateX(-150px);\n            transform: translateX(-150px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n}\n',"",{version:3,sources:["/./node_modules/vux/src/components/x-header/index.vue"],names:[],mappings:"AAAA;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF,WAAW;AACX;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;;EAEE;AACF;EACE,mBAAmB;EACnB,eAAe;EACf,uBAAuB;EACvB,0BAA0B;CAC3B;AACD;;EAEE,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;EACjB,wBAAwB;EACxB,oBAAoB;EACpB,YAAY;CACb;AACD;EACE,sBAAsB;CACvB;AACD;;EAEE,mBAAmB;EACnB,UAAU;EACV,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;CACb;AACD;;;;EAIE,YAAY;EACZ,kBAAkB;EAClB,YAAY;CACb;AACD;;;;EAIE,aAAa;CACd;AACD;EACE,WAAW;CACZ;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,UAAU;EACV,WAAW;CACZ;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,0BAA0B;EAC1B,kCAAkC;UAC1B,0BAA0B;EAClC,SAAS;EACT,UAAU;CACX;AACD;EACE,YAAY;CACb;AACD;;EAEE,iBAAiB;EACjB,gBAAgB;CACjB;AACD;EACE,oCAA0C;EAC1C,gBAAgB;CACjB;AACD;EACE,+BAA+B;UACvB,uBAAuB;CAChC;AACD;EACE,+BAA+B;UACvB,uBAAuB;CAChC;AACD;AACA;IACI,WAAW;IACX,qCAAqC;YAC7B,6BAA6B;CACxC;AACD;IACI,WAAW;IACX,iCAAiC;YACzB,yBAAyB;CACpC;CACA;AACD;AACA;IACI,WAAW;IACX,qCAAqC;YAC7B,6BAA6B;CACxC;AACD;IACI,WAAW;IACX,iCAAiC;YACzB,yBAAyB;CACpC;CACA;AACD;AACA;IACI,WAAW;IACX,sCAAsC;YAC9B,8BAA8B;CACzC;AACD;IACI,WAAW;IACX,iCAAiC;YACzB,yBAAyB;CACpC;CACA;AACD;AACA;IACI,WAAW;IACX,sCAAsC;YAC9B,8BAA8B;CACzC;AACD;IACI,WAAW;IACX,iCAAiC;YACzB,yBAAyB;CACpC;CACA",file:"index.vue",sourcesContent:['/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* form-preview\n*/\n/**\n* load-more\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* search\n*/\n.vux-header {\n  position: relative;\n  padding: 3px 0;\n  box-sizing: border-box;\n  background-color: #35495e;\n}\n.vux-header .vux-header-title,\n.vux-header h1 {\n  margin: 0 88px;\n  line-height: 40px;\n  text-align: center;\n  height: 40px;\n  font-size: 18px;\n  font-weight: 400;\n  width: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #fff;\n}\n.vux-header .vux-header-title > span {\n  display: inline-block;\n}\n.vux-header .vux-header-left,\n.vux-header .vux-header-right {\n  position: absolute;\n  top: 14px;\n  display: block;\n  font-size: 14px;\n  line-height: 21px;\n  color: #ccc;\n}\n.vux-header .vux-header-left a,\n.vux-header .vux-header-left button,\n.vux-header .vux-header-right a,\n.vux-header .vux-header-right button {\n  float: left;\n  margin-right: 8px;\n  color: #ccc;\n}\n.vux-header .vux-header-left a:active,\n.vux-header .vux-header-left button:active,\n.vux-header .vux-header-right a:active,\n.vux-header .vux-header-right button:active {\n  opacity: 0.5;\n}\n.vux-header .vux-header-left {\n  left: 18px;\n}\n.vux-header .vux-header-left .vux-header-back {\n  padding-left: 16px;\n}\n.vux-header .vux-header-left .left-arrow {\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  top: -5px;\n  left: -5px;\n}\n.vux-header .vux-header-left .left-arrow:before {\n  content: "";\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  border: 1px solid #ccc;\n  border-width: 1px 0 0 1px;\n  -webkit-transform: rotate(315deg);\n          transform: rotate(315deg);\n  top: 8px;\n  left: 7px;\n}\n.vux-header .vux-header-right {\n  right: 15px;\n}\n.vux-header .vux-header-right a,\n.vux-header .vux-header-right button {\n  margin-left: 8px;\n  margin-right: 0;\n}\n.vux-header .vux-header-right .vux-header-more:after {\n  content: "\\2022\\0020\\2022\\0020\\2022\\0020";\n  font-size: 16px;\n}\n.vux-header-fade-in-right-enter-active {\n  -webkit-animation: fadeinR .5s;\n          animation: fadeinR .5s;\n}\n.vux-header-fade-in-left-enter-active {\n  -webkit-animation: fadeinL .5s;\n          animation: fadeinL .5s;\n}\n@-webkit-keyframes fadeinR {\n0% {\n    opacity: 0;\n    -webkit-transform: translateX(150px);\n            transform: translateX(150px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n}\n@keyframes fadeinR {\n0% {\n    opacity: 0;\n    -webkit-transform: translateX(150px);\n            transform: translateX(150px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n}\n@-webkit-keyframes fadeinL {\n0% {\n    opacity: 0;\n    -webkit-transform: translateX(-150px);\n            transform: translateX(-150px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n}\n@keyframes fadeinL {\n0% {\n    opacity: 0;\n    -webkit-transform: translateX(-150px);\n            transform: translateX(-150px);\n}\n100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n}\n'],sourceRoot:"webpack://"}])},222:function(n,t,e){e(225);var a=e(10)(e(223),e(226),null,null);n.exports=a.exports},223:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(77),r=e.n(a);t.default={props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},computed:{_leftOptions:function(){return r()({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}}}},225:function(n,t,e){var a=e(221);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e(186)("3adf8134",a,!0)},226:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"vux-header"},[e("div",{staticClass:"vux-header-left"},[e("transition",{attrs:{name:n.transition}},[e("a",{directives:[{name:"show",rawName:"v-show",value:n._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(t){if(n._k(t.keyCode,"preventDefault"))return null},n.onClickBack]}},[n._v(n._s(void 0===n._leftOptions.backText?n.$t("vux.x-header.back_text"):n._leftOptions.backText))])]),n._v(" "),e("transition",{attrs:{name:n.transition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:n._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:n.onClickBack}})]),n._v(" "),n._t("left")],2),n._v(" "),e("h1",{staticClass:"vux-header-title",on:{click:function(t){n.$emit("on-click-title")}}},[n._t("default",[e("transition",{attrs:{name:n.transition}},[e("span",{directives:[{name:"show",rawName:"v-show",value:n.title,expression:"title"}]},[n._v(n._s(n.title))])])])],2),n._v(" "),e("div",{staticClass:"vux-header-right"},[n.rightOptions.showMore?e("a",{staticClass:"vux-header-more",on:{click:[function(t){if(n._k(t.keyCode,"preventDefault"))return null},function(t){n.$emit("on-click-more")}]}}):n._e(),n._v(" "),n._t("right")],2)])},staticRenderFns:[]}},227:function(n,t,e){(function(t){var a="object"==typeof t?t:"object"==typeof window?window:"object"==typeof self?self:this,r=a.regeneratorRuntime&&Object.getOwnPropertyNames(a).indexOf("regeneratorRuntime")>=0,i=r&&a.regeneratorRuntime;if(a.regeneratorRuntime=void 0,n.exports=e(228),r)a.regeneratorRuntime=i;else try{delete a.regeneratorRuntime}catch(n){a.regeneratorRuntime=void 0}}).call(t,e(14))},228:function(n,t,e){(function(t,e){!function(t){"use strict";function a(n,t,e,a){var r=t&&t.prototype instanceof i?t:i,o=Object.create(r.prototype),s=new d(a||[]);return o._invoke=p(n,e,s),o}function r(n,t,e){try{return{type:"normal",arg:n.call(t,e)}}catch(n){return{type:"throw",arg:n}}}function i(){}function o(){}function s(){}function A(n){["next","throw","return"].forEach(function(t){n[t]=function(n){return this._invoke(t,n)}})}function c(n){function t(e,a,i,o){var s=r(n[e],n,a);if("throw"!==s.type){var A=s.arg,c=A.value;return c&&"object"==typeof c&&m.call(c,"__await")?Promise.resolve(c.__await).then(function(n){t("next",n,i,o)},function(n){t("throw",n,i,o)}):Promise.resolve(c).then(function(n){A.value=n,i(A)},o)}o(s.arg)}function a(n,e){function a(){return new Promise(function(a,r){t(n,e,a,r)})}return i=i?i.then(a,a):a()}"object"==typeof e&&e.domain&&(t=e.domain.bind(t));var i;this._invoke=a}function p(n,t,e){var a=b;return function(i,o){if(a===_)throw new Error("Generator is already running");if(a===F){if("throw"===i)throw o;return v()}for(e.method=i,e.arg=o;;){var s=e.delegate;if(s){var A=l(s,e);if(A){if(A===D)continue;return A}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(a===b)throw a=F,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);a=_;var c=r(n,t,e);if("normal"===c.type){if(a=e.done?F:k,c.arg===D)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(a=F,e.method="throw",e.arg=c.arg)}}}function l(n,t){var e=n.iterator[t.method];if(e===C){if(t.delegate=null,"throw"===t.method){if(n.iterator.return&&(t.method="return",t.arg=C,l(n,t),"throw"===t.method))return D;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return D}var a=r(e,n.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,D;var i=a.arg;return i?i.done?(t[n.resultName]=i.value,t.next=n.nextLoc,"return"!==t.method&&(t.method="next",t.arg=C),t.delegate=null,D):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,D)}function u(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function f(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function d(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(u,this),this.reset(!0)}function h(n){if(n){var t=n[y];if(t)return t.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var e=-1,a=function t(){for(;++e<n.length;)if(m.call(n,e))return t.value=n[e],t.done=!1,t;return t.value=C,t.done=!0,t};return a.next=a}}return{next:v}}function v(){return{value:C,done:!0}}var C,x=Object.prototype,m=x.hasOwnProperty,g="function"==typeof Symbol?Symbol:{},y=g.iterator||"@@iterator",E=g.toStringTag||"@@toStringTag",B="object"==typeof n,w=t.regeneratorRuntime;if(w)return void(B&&(n.exports=w));w=t.regeneratorRuntime=B?n.exports:{},w.wrap=a;var b="suspendedStart",k="suspendedYield",_="executing",F="completed",D={},I={};I[y]=function(){return this};var X=Object.getPrototypeOf,L=X&&X(X(h([])));L&&L!==x&&m.call(L,y)&&(I=L);var Y=s.prototype=i.prototype=Object.create(I);o.prototype=Y.constructor=s,s.constructor=o,s[E]=o.displayName="GeneratorFunction",w.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===o||"GeneratorFunction"===(t.displayName||t.name))},w.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,s):(n.__proto__=s,E in n||(n[E]="GeneratorFunction")),n.prototype=Object.create(Y),n},w.awrap=function(n){return{__await:n}},A(c.prototype),w.AsyncIterator=c,w.async=function(n,t,e,r){var i=new c(a(n,t,e,r));return w.isGeneratorFunction(t)?i:i.next().then(function(n){return n.done?n.value:i.next()})},A(Y),Y[E]="Generator",Y.toString=function(){return"[object Generator]"},w.keys=function(n){var t=[];for(var e in n)t.push(e);return t.reverse(),function e(){for(;t.length;){var a=t.pop();if(a in n)return e.value=a,e.done=!1,e}return e.done=!0,e}},w.values=h,d.prototype={constructor:d,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=C,this.done=!1,this.delegate=null,this.method="next",this.arg=C,this.tryEntries.forEach(f),!n)for(var t in this)"t"===t.charAt(0)&&m.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=C)},stop:function(){this.done=!0;var n=this.tryEntries[0],t=n.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){function t(t,a){return i.type="throw",i.arg=n,e.next=t,a&&(e.method="next",e.arg=C),!!a}if(this.done)throw n;for(var e=this,a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a],i=r.completion;if("root"===r.tryLoc)return t("end");if(r.tryLoc<=this.prev){var o=m.call(r,"catchLoc"),s=m.call(r,"finallyLoc");if(o&&s){if(this.prev<r.catchLoc)return t(r.catchLoc,!0);if(this.prev<r.finallyLoc)return t(r.finallyLoc)}else if(o){if(this.prev<r.catchLoc)return t(r.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return t(r.finallyLoc)}}}},abrupt:function(n,t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc<=this.prev&&m.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var r=a;break}}r&&("break"===n||"continue"===n)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var i=r?r.completion:{};return i.type=n,i.arg=t,r?(this.method="next",this.next=r.finallyLoc,D):this.complete(i)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),D},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.finallyLoc===n)return this.complete(e.completion,e.afterLoc),f(e),D}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var e=this.tryEntries[t];if(e.tryLoc===n){var a=e.completion;if("throw"===a.type){var r=a.arg;f(e)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(n,t,e){return this.delegate={iterator:h(n),resultName:t,nextLoc:e},"next"===this.method&&(this.arg=C),D}}}("object"==typeof t?t:"object"==typeof window?window:"object"==typeof self?self:this)}).call(t,e(14),e(15))},229:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}t.__esModule=!0;var r=e(78),i=a(r);t.default=function(n){return function(){var t=n.apply(this,arguments);return new i.default(function(n,e){function a(r,o){try{var s=t[r](o),A=s.value}catch(n){return void e(n)}if(!s.done)return i.default.resolve(A).then(function(n){a("next",n)},function(n){a("throw",n)});n(A)}return a("next")})}}},230:function(n,t,e){n.exports=e(227)},294:function(n,t,e){t=n.exports=e(185)(),t.push([n.i,"\n[v-cloak][data-v-15ac177a] {\n    display: none;\n}\n.header[data-v-15ac177a] {\n    width: 100%;\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    z-index: 100;\n}\n.content[data-v-15ac177a] {\n    padding-top: 46px;\n}\n/*加载动画水平垂直居中*/\n.loading[data-v-15ac177a] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n}\n.paypage .div[data-v-15ac177a]{background: #FFF;\n}\n.paypage .tit[data-v-15ac177a]{padding:10px 20px;font-size:14px;\n}\n.paypage .payinf p[data-v-15ac177a]{line-height:20px;padding-left:100px;overflow: hidden;position: relative;border-bottom:1px solid #EEE;height: 40px;\n}\n.paypage .payinf p span[data-v-15ac177a]{margin-right:10px;font-size:16px;display: block;float: left;line-height: 40px;\n}\n.paypage .payinf p span.i[data-v-15ac177a]{color:#999;position: absolute;left:20px;top:0;width:80px;text-align: left;\n}\n.paypage .price[data-v-15ac177a]{border-top:1px solid #EEE;\n}\n.paypage .payformtable[data-v-15ac177a]{font-size:16px;background: #FFF;\n}\n.paypage .payformtable span#payok[data-v-15ac177a]{text-align: center;font-size:26px;padding:10px 20px;display: block;line-height: 40px;color: #009933;width: 160px;margin: auto;height: 40px;padding-top:60px;\n}\n.paypage .payformtable span#payok img[data-v-15ac177a]{margin-right: 15px;display: inline-block;float: left\n}\n.paypage .payformtable span#payok b[data-v-15ac177a]{font-size:26px;font-weight: normal;float: left;\n}\n.payoffline[data-v-15ac177a] {padding:20px;\n}\n.payoffline p[data-v-15ac177a]{font-size:16px;\n}\n.payoffline p[data-v-15ac177a]:nth-child(2),.payoffline p[data-v-15ac177a]:nth-child(1){margin-bottom: 20px;\n}\n.payoffline p.tit[data-v-15ac177a]{color:#009933;padding: 0;text-indent: 0;font-size: 18px;\n}\n.payoffline p.idval[data-v-15ac177a]{font-size:18px;text-align: center;font-weight: bold;padding:20px 0;background: #FFFFFF;border-radius: 6px;\n}\n.payoffline p.text[data-v-15ac177a]{color:#666666\n}\n","",{version:3,sources:["/./src/views/OrderDetail.vue"],names:[],mappings:";AACA;IACI,cAAc;CACjB;AACD;IACI,YAAY;IACZ,mBAAmB;IACnB,UAAU;IACV,SAAS;IACT,aAAa;CAChB;AACD;IACI,kBAAkB;CACrB;AACD,cAAc;AACd;IACI,mBAAmB;IACnB,SAAS;IACT,UAAU;IACV,yCAAyC;YACjC,iCAAiC;CAC5C;AACD,+BAA+B,iBAAiB;CAC/C;AACD,+BAA+B,kBAAkB,eAAe;CAC/D;AACD,oCAAoC,iBAAiB,mBAAmB,iBAAiB,mBAAmB,6BAA6B,aAAa;CACrJ;AACD,yCAAyC,kBAAkB,eAAe,eAAe,YAAY,kBAAkB;CACtH;AACD,2CAA2C,WAAW,mBAAmB,UAAU,MAAM,WAAW,iBAAiB;CACpH;AACD,iCAAiC,0BAA0B;CAC1D;AACD,wCAAwC,eAAe,iBAAiB;CACvE;AACD,mDAAmD,mBAAmB,eAAe,kBAAkB,eAAe,kBAAkB,eAAe,aAAa,aAAa,aAAa,iBAAiB;CAC9M;AACD,uDAAuD,mBAAmB,sBAAsB,WAAW;CAC1G;AACD,qDAAqD,eAAe,oBAAoB,YAAY;CACnG;AACD,8BAA8B,aAAa;CAC1C;AACD,+BAA+B,eAAe;CAC7C;AACD,wFAAwF,oBAAoB;CAC3G;AACD,mCAAmC,cAAc,WAAW,eAAe,gBAAgB;CAC1F;AACD,qCAAqC,eAAe,mBAAmB,kBAAkB,eAAe,oBAAoB,mBAAmB;CAC9I;AACD,oCAAoC,aAAa;CAChD",file:"OrderDetail.vue",sourcesContent:["\n[v-cloak][data-v-15ac177a] {\n    display: none;\n}\n.header[data-v-15ac177a] {\n    width: 100%;\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    z-index: 100;\n}\n.content[data-v-15ac177a] {\n    padding-top: 46px;\n}\n/*加载动画水平垂直居中*/\n.loading[data-v-15ac177a] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n}\n.paypage .div[data-v-15ac177a]{background: #FFF;\n}\n.paypage .tit[data-v-15ac177a]{padding:10px 20px;font-size:14px;\n}\n.paypage .payinf p[data-v-15ac177a]{line-height:20px;padding-left:100px;overflow: hidden;position: relative;border-bottom:1px solid #EEE;height: 40px;\n}\n.paypage .payinf p span[data-v-15ac177a]{margin-right:10px;font-size:16px;display: block;float: left;line-height: 40px;\n}\n.paypage .payinf p span.i[data-v-15ac177a]{color:#999;position: absolute;left:20px;top:0;width:80px;text-align: left;\n}\n.paypage .price[data-v-15ac177a]{border-top:1px solid #EEE;\n}\n.paypage .payformtable[data-v-15ac177a]{font-size:16px;background: #FFF;\n}\n.paypage .payformtable span#payok[data-v-15ac177a]{text-align: center;font-size:26px;padding:10px 20px;display: block;line-height: 40px;color: #009933;width: 160px;margin: auto;height: 40px;padding-top:60px;\n}\n.paypage .payformtable span#payok img[data-v-15ac177a]{margin-right: 15px;display: inline-block;float: left\n}\n.paypage .payformtable span#payok b[data-v-15ac177a]{font-size:26px;font-weight: normal;float: left;\n}\n.payoffline[data-v-15ac177a] {padding:20px;\n}\n.payoffline p[data-v-15ac177a]{font-size:16px;\n}\n.payoffline p[data-v-15ac177a]:nth-child(2),.payoffline p[data-v-15ac177a]:nth-child(1){margin-bottom: 20px;\n}\n.payoffline p.tit[data-v-15ac177a]{color:#009933;padding: 0;text-indent: 0;font-size: 18px;\n}\n.payoffline p.idval[data-v-15ac177a]{font-size:18px;text-align: center;font-weight: bold;padding:20px 0;background: #FFFFFF;border-radius: 6px;\n}\n.payoffline p.text[data-v-15ac177a]{color:#666666\n}\n"],sourceRoot:"webpack://"}])},381:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(230),r=e.n(a),i=e(229),o=e.n(i),s=e(205),A=e.n(s),c=e(222),p=e.n(c),l=e(42),u=(e(79),e(76));t.default={data:function(){return{id:-1,order:{},showLoading:!1,loadingType:"lines"}},mounted:function(){this.id=this.$route.params.id,this.initData()},methods:{initData:function(){var n=this;return o()(r.a.mark(function t(){var e;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=n,e.showLoading=!0,l.a.get("getOrderInfo/"+e.id).then(function(n){1===n.status?e.order=n.data:e.$vux.alert.show({title:u.a.alertInfo,content:n.message,buttonText:"确定",dialogTransition:"",maskTransition:""}),e.showLoading=!1}).catch(function(n){e.$vux.alert.show({title:u.a.alertInfo,content:u.a.errorInfo,buttonText:"确定",dialogTransition:"",maskTransition:""})});case 3:case"end":return t.stop()}},t,n)}))()},back:function(){this.$router.replace({path:"/myOrder"})}},components:{Spinner:A.a,XHeader:p.a}}},395:function(n,t,e){var a=e(294);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e(186)("dab7f7e6",a,!0)},422:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("x-header",{staticClass:"header",attrs:{"left-options":{backText:"返回",showBack:!0,preventGoBack:!0}},on:{"on-click-back":n.back}},[n._v("订单详情")]),n._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"paypage"},[e("div",{staticClass:"div payinf"},[e("p",[e("span",{staticClass:"i"},[n._v("订单编号:")]),e("span",[n._v(n._s(n.order.order_no))])]),n._v(" "),e("p",[e("span",{staticClass:"i"},[n._v("产品名称:")]),e("span",[n._v(n._s(n.order.product&&n.order.product.title))])]),n._v(" "),e("p",[e("span",{staticClass:"i"},[n._v("原价:")]),e("span",[n._v(n._s(n.order.product&&n.order.product.original_price)+"元")])]),n._v(" "),e("p",[e("span",{staticClass:"i"},[n._v("订单价:")]),e("span",[n._v(n._s(n.order.order_price)+"元")])]),n._v(" "),e("p",[e("span",{staticClass:"i"},[n._v("下单时间:")]),e("span",[n._v(n._s(n.order.insert_time))])]),n._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:"1"==n.order.state,expression:"order.state == '1'"}]},[e("span",{staticClass:"i"},[n._v("验证时间:")]),e("span",[n._v(n._s(n.order.validate_time))])])]),n._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:"0"==n.order.state,expression:"order.state == '0'"}],staticClass:"payoffline"},[e("p",{staticClass:"text"},[n._v("您已下单成功，验证码为：\n                ")]),e("p",{staticClass:"idval"},[n._v(n._s(n.order.verification_code))]),n._v(" "),e("p",[n._v("请尽快前往潜水者之家验证订单，验证时请出示此验证码方可享受专属优惠，请妥善保管。")])])])]),n._v(" "),e("spinner",{directives:[{name:"show",rawName:"v-show",value:n.showLoading,expression:"showLoading"}],staticClass:"loading",attrs:{type:n.loadingType}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=8.d28e6be88d0ce7aa3f0e.js.map