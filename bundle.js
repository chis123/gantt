!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r={};function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){for(var n=[],r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return function t(e,n){if(null!==e&&void 0!==e)if("string"==typeof e||"number"==typeof e)n.push(e.toString());else if(Array.isArray(e))for(var r=0;r<e.length;r++)t(e[r],n);else n.push(e)}(o,n),"function"==typeof t?t(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){i(t,e,n[e])})}return t}({},e,{children:n})):{tag:t,props:e,children:n}}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.r(r),n.d(r,"DAY",function(){return l}),n.d(r,"addDays",function(){return u}),n.d(r,"getDates",function(){return s}),n.d(r,"textWidth",function(){return f}),n.d(r,"formatMonth",function(){return h}),n.d(r,"formatDay",function(){return p}),n.d(r,"minDate",function(){return d}),n.d(r,"maxDate",function(){return y}),n.d(r,"max",function(){return g}),n.d(r,"p2s",function(){return v}),n.d(r,"s2p",function(){return m}),n.d(r,"formatData",function(){return x}),n.d(r,"hasPath",function(){return b}),n.d(r,"toposort",function(){return k}),n.d(r,"autoSchedule",function(){return w});var l=864e5;function u(t,e){return new Date(t.valueOf()+e*l)}function s(t,e){var n=[],r=new Date(t);for(r.setHours(24,0,0,0);r.getTime()<=e;)n.push(r.getTime()),r=u(r,1);return n}var c=null;function f(t,e,n){return(c=c||document.createElement("canvas").getContext("2d")).font=e,c.measureText(t).width+n}function h(t){var e=t.getFullYear(),n=t.getMonth()+1;return"".concat(e,"/").concat(n>9?n:"0".concat(n))}function p(t){var e=t.getMonth()+1,n=t.getDate();return"".concat(e,"/").concat(n)}function d(t,e){return t&&e?t>e?e:t:t||e}function y(t,e){return t&&e?t<e?e:t:t||e}function g(t,e){return t.length?Math.max.apply(null,t):e}function v(t){return t.map(function(t){return"".concat(t[0],",").concat(t[1])}).join(" ")}function m(t){return t.split(" ").map(function(t){var e=t.split(",");return[parseFloat(e[0]),parseFloat(e[1])]})}function x(t,e){var n={},r=t.map(function(t,e){return n[t.id]=e,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){a(t,e,n[e])})}return t}({},t,{children:[],links:[]})}),i=[];r.forEach(function(t){var e=r[n[t.parent]];e?e.children.push(t):i.push(t)}),e.forEach(function(t){var e=r[n[t.source]],i=r[n[t.target]];e&&i&&e.links.push({id:i.id,type:t.type})}),function t(e,n){for(var r=0;r<e.length;r++){var i=e[r];i.level="".concat(n).concat(r+1),i.text="".concat(i.level," ").concat(i.name),t(i.children,"".concat(i.level,"."))}}(i,""),function t(e){for(var n=null,r=null,i=0,o=0;o<e.length;o++){var a=e[o];if(a.children.length){var s=t(a.children);a.start=s.start,a.end=s.end,a.percent=s.percent,s.start&&s.end&&(a.duration=(s.end-s.start)/l)}else a.percent=a.percent||0,a.start&&(a.end=u(a.start,a.duration||0)),"milestone"===a.type&&(a.end=a.start);n=d(n,a.start),r=y(r,a.end),i+=a.percent}return e.length&&(i/=e.length),{start:n,end:r,percent:i}}(i);var o=[];return i.forEach(function(t){var e=[];for(e.push(t);e.length;){var n=e.pop(),r=n.children.length;r&&(n.type="group"),o.push(n);for(var i=r-1;i>=0;i--)e.push(n.children[i])}}),o}function b(t,e,n){var r=[];for(r.push(t[e]);r.length;){var i=r.pop();if(i.id===n)return!0;for(var o=0;o<i.links.length;o++)r.push(i.links[o])}return!1}function k(t){var e={};t.forEach(function(t){var n=function(t){return{id:t,out:[],in:0}};e[t.source]=n(t.source),e[t.target]=n(t.target)});for(var n=0;n<t.length;n++){var r=t[n];e[r.target].in++,e[r.source].out.push(n)}for(var i=Object.keys(e).map(function(t){return e[t].id}).filter(function(t){return!e[t].in}),o=[];i.length;){var a=i.pop();o.push(a);for(var l=0;l<e[a].out.length;l++){var u=e[a].out[l],s=e[t[u].target];s.in--,s.in||i.push(s.id)}}return o}function w(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r={};e.forEach(function(t){r[t.source]={id:t.source,links:[]},r[t.target]={id:t.target,links:[]}});var i=[];e.forEach(function(t){var e=t.source,n=t.target;b(r,n,e)||(i.push(t),r[e].links.push(r[n]))});for(var o=k(i),a={},l=0;l<t.length;l++){var s=t[l];"milestone"===s.type&&(s.duration=0),a[s.id]=l}var c={};o.forEach(function(t){c[t]=[]}),i.forEach(function(t){c[t.target].push(t)}),o.forEach(function(e){var r=t[a[e]],i=r.duration||0;if(!n||"milestone"!==r.type){for(var o=null,l=null,s=0;s<c[e].length;s++){var f=c[e][s],h=t[a[f.source]];if(h.start){var p=u(h.start,h.duration||0);"SS"===f.type&&(o=y(o,h.start)),"FS"===f.type&&(o=y(o,p)),"SF"===f.type&&(l=d(l,h.start)),"FF"===f.type&&(l=d(l,p))}}l&&(r.start=u(l,-i)),o&&(r.start=o)}})}function O(t){var e=t.styles,n=t.width,r=t.height,i=t.offsetY,a=t.thickWidth,l=t.maxTextWidth,u=a/2;return o("g",null,o("rect",{x:u,y:u,width:n-a,height:r-a,style:e.box}),o("line",{x1:0,x2:n,y1:i-u,y2:i-u,style:e.bline}),o("line",{x1:l,x2:n,y1:i/2,y2:i/2,style:e.line}))}function T(t){var e=t.styles,n=t.dates,r=t.unit,i=t.offsetY,a=t.minTime,l=t.maxTime,u=t.maxTextWidth,s=n.filter(function(t){return 1===new Date(t).getDate()});s.unshift(a),s.push(l);for(var c=[],f=u,p=i/2,d=s.length-1,y=0;y<d;y++){var g=h(new Date(s[y])),v=f+(s[y]-a)/r,m=(s[y+1]-s[y])/r;c.push(o("g",null,o("line",{x1:v,x2:v,y1:0,y2:p,style:e.line}),m>50?o("text",{x:v+m/2,y:.25*i,style:e.text3},g):null))}return o("g",null,c)}function S(t){for(var e=t.styles,n=t.unit,r=t.minTime,i=t.maxTime,a=t.height,l=t.offsetY,u=t.maxTextWidth,c=s(r,i),f=[],h=u,p=l/2,d=a-p,y=c.length-1,g=0;g<y;g++){var v=new Date(c[g]),m=v.getDay(),x=h+(c[g]-r)/n,b=(c[g+1]-c[g])/n;f.push(o("g",null,0===m||6===m?o("rect",{x:x,y:p,width:b,height:d,style:e.week}):null,o("line",{x1:x,x2:x,y1:p,y2:l,style:e.line}),o("text",{x:x+b/2,y:.75*l,style:e.text3},v.getDate()),g===y-1?o("line",{x1:x+b,x2:x+b,y1:p,y2:l,style:e.line}):null))}return o("g",null,o(T,{styles:e,unit:n,dates:c,offsetY:l,minTime:r,maxTime:i,maxTextWidth:u}),f)}function D(t){var e=t.styles,n=t.unit,r=t.minTime,i=t.maxTime,a=t.height,c=t.offsetY,f=t.maxTextWidth,h=s(r,i),p=h.filter(function(t){return 0===new Date(t).getDay()});p.push(i);for(var d=[],y=f,g=c,v=a-g,m=l/n,x=p.length-1,b=0;b<x;b++){var k=new Date(p[b]),w=y+(p[b]-r)/n,O=k.getDate(),S=u(k,-1).getDate();d.push(o("g",null,o("rect",{x:w-m,y:g,width:2*m,height:v,style:e.week}),o("line",{x1:w,x2:w,y1:c/2,y2:c,style:e.line}),o("text",{x:w+3,y:.75*c,style:e.text2},O),w-y>28?o("text",{x:w-3,y:.75*c,style:e.text1},S):null))}return o("g",null,o(T,{styles:e,unit:n,dates:h,offsetY:c,minTime:r,maxTime:i,maxTextWidth:f}),d)}function j(t){var e=t.styles,n=t.months,r=t.unit,i=t.offsetY,a=t.minTime,l=t.maxTime,u=t.maxTextWidth,s=n.filter(function(t){return 0===new Date(t).getMonth()});s.unshift(a),s.push(l);for(var c=[],f=u,h=i/2,p=s.length-1,d=0;d<p;d++){var y=new Date(s[d]),g=f+(s[d]-a)/r,v=(s[d+1]-s[d])/r;c.push(o("g",null,o("line",{x1:g,x2:g,y1:0,y2:h,style:e.line}),v>35?o("text",{x:g+v/2,y:.25*i,style:e.text3},y.getFullYear()):null))}return o("g",null,c)}function P(t){var e=t.styles,n=t.unit,r=t.minTime,i=t.maxTime,a=t.offsetY,l=t.maxTextWidth,u=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],c=s(r,i).filter(function(t){return 1===new Date(t).getDate()});c.unshift(r),c.push(i);for(var f=[],h=l,p=a/2,d=c.length-1,y=0;y<d;y++){var g=new Date(c[y]).getMonth(),v=h+(c[y]-r)/n,m=(c[y+1]-c[y])/n;f.push(o("g",null,o("line",{x1:v,x2:v,y1:p,y2:a,style:e.line}),m>30?o("text",{x:v+m/2,y:.75*a,style:e.text3},u[g]):null))}return o("g",null,o(j,{styles:e,unit:n,months:c,offsetY:a,minTime:r,maxTime:i,maxTextWidth:l}),f)}function C(t){var e=t.styles,n=t.data,r=t.width,i=t.height,a=t.offsetY,l=t.rowHeight,u=t.maxTextWidth;return o("g",null,n.map(function(t,n){var i=(n+1)*l+a;return o("line",{key:n,x1:0,x2:r,y1:i,y2:i,style:e.line})}),o("line",{x1:u,x2:u,y1:0,y2:i,style:e.bline}))}function E(t){var e=t.styles,n=t.data,r=t.rowHeight,i=t.offsetY;return o("g",null,n.map(function(t,n){return o("text",{key:n,x:10,y:(n+.5)*r+i,style:e.label},t.text)}))}function F(t){var e=t.styles,n=t.data,r=t.unit,i=t.offsetY,a=t.minTime,l=t.rowHeight,u=t.barHeight,s=t.maxTextWidth,c=l/2+i,f={};return n.forEach(function(t,e){f[t.id]=e}),o("g",null,n.map(function(t,i){return t.end&&t.start?t.links.map(function(h){var p=f[h.id],d=n[p];if(!d||!d.start||!d.end)return null;var y="milestone"===d.type?u/2:0,g=c+i*l,m=c+p*l,x=u/2+4;if(g>m&&(x=-x),"FS"===h.type){var b=s+(t.end-a)/r,k=s+(d.start-a)/r-y,w=[[b,g],[b+12,g]];k-b>=24?w.push([b+12,m]):(w.push([b+12,m-x]),w.push([k-12,m-x]),w.push([k-12,m])),w.push([k-6,m]);var O=[[k-6,m-6],[k,m],[k-6,m+6]];return o("g",null,o("polyline",{points:v(w),style:e.link}),o("polygon",{points:v(O),style:e.linkArrow}))}if("FF"===h.type){var T=s+(t.end-a)/r,S=s+(d.end-a)/r+y,D=[[T,g],[T+12,g]];S<=T?D.push([T+12,m]):(D.push([T+12,m-x]),D.push([S+12,m-x]),D.push([S+12,m])),D.push([S+6,m]);var j=[[S+6,m-6],[S,m],[S+6,m+6]];return o("g",null,o("polyline",{points:v(D),style:e.link}),o("polygon",{points:v(j),style:e.linkArrow}))}if("SS"===h.type){var P=s+(t.start-a)/r,C=s+(d.start-a)/r-y,E=[[P,g],[P-12,g]];P<=C?E.push([P-12,m]):(E.push([P-12,m-x]),E.push([C-12,m-x]),E.push([C-12,m])),E.push([C-6,m]);var F=[[C-6,m-6],[C,m],[C-6,m+6]];return o("g",null,o("polyline",{points:v(E),style:e.link}),o("polygon",{points:v(F),style:e.linkArrow}))}if("SF"===h.type){var W=s+(t.start-a)/r,A=s+(d.end-a)/r+y,Y=[[W,g],[W-12,g]];W-A>=24?Y.push([W-12,m]):(Y.push([W-12,m-x]),Y.push([A+12,m-x]),Y.push([A+12,m])),Y.push([A+6,m]);var M=[[A+6,m-6],[A,m],[A+6,m+6]];return o("g",null,o("polyline",{points:v(Y),style:e.link}),o("polygon",{points:v(M),style:e.linkArrow}))}return null}):null}))}function W(t){var e=t.styles,n=t.data,r=t.unit,i=t.height,a=t.offsetY,l=t.minTime,u=t.showDelay,s=t.rowHeight,c=t.barHeight,f=t.maxTextWidth,h=t.current,d=t.onClick,y=f,g=(s-c)/2+a,v=y+(h-l)/r;return o("g",null,o("line",{x1:v,x2:v,y1:a,y2:i,style:e.cline}),n.map(function(t,n){if(!t.end||!t.start)return null;var i=function(){return d(t)},a=y+(t.start-l)/r,f=g+n*s,h=f+c/2;if("milestone"===t.type){var m=c/2;return o("g",{key:n,class:"gantt-bar",style:{cursor:"pointer"},onClick:i},o("polygon",{points:[[a,h-m],[a+m,h],[a,h+m],[a-m,h]].map(function(t){return"".concat(t[0],",").concat(t[1])}).join(" "),style:e.milestone,onClick:i}),o("circle",{class:"gantt-ctrl-start","data-id":t.id,cx:a,cy:h,r:6,style:e.ctrl}))}var x=(t.end-t.start)/r,b=x*t.percent,k="group"===t.type?{back:e.groupBack,front:e.groupFront}:{back:e.taskBack,front:e.taskFront};return u&&(a+b<v&&t.percent<.999999&&(k.front=e.warning),a+x<v&&t.percent<.999999&&(k.front=e.danger)),o("g",{key:n,class:"gantt-bar",style:{cursor:"pointer"},onClick:i},o("text",{x:a-4,y:h,style:e.text1},p(t.start)),o("text",{x:a+x+4,y:h,style:e.text2},p(t.end)),o("rect",{x:a,y:f,width:x,height:c,rx:1.8,ry:1.8,style:k.back,onClick:i}),b>1e-6?o("rect",{x:a,y:f,width:b,height:c,rx:1.8,ry:1.8,style:k.front}):null,"group"===t.type?null:o("g",null,o("circle",{class:"gantt-ctrl-start","data-id":t.id,cx:a-12,cy:h,r:6,style:e.ctrl}),o("circle",{class:"gantt-ctrl-finish","data-id":t.id,cx:a+x+12,cy:h,r:6,style:e.ctrl})))}))}function A(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){Y(t,e,n[e])})}return t}function Y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var M="14px",B='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';function H(t){var e=t.fontSize,n=void 0===e?M:e,r=t.fontFamily,i=void 0===r?B:r;return"bold ".concat(n," ").concat(i)}var q={day:l/28,week:7*l/56,month:30*l/56};function L(){}function R(t){var e=t.data,n=void 0===e?[]:e,r=t.onClick,i=void 0===r?L:r,a=t.viewMode,l=void 0===a?"week":a,u=t.maxTextWidth,s=void 0===u?140:u,c=t.offsetY,f=void 0===c?60:c,h=t.rowHeight,p=void 0===h?40:h,d=t.barHeight,y=void 0===d?16:d,g=t.thickWidth,v=void 0===g?1.4:g,m=t.styleOptions,x=void 0===m?{}:m,b=t.showLinks,k=void 0===b||b,w=t.showDelay,T=void 0===w||w,j=t.start,Y=t.end,H=q[l],R=j.getTime()-48*H,z=Y.getTime()+48*H,I=(z-R)/H+s,N=n.length*p+f,$="0 0 ".concat(I," ").concat(N),_=Date.now(),J=function(t){var e=t.bgColor,n=void 0===e?"#fff":e,r=t.lineColor,i=void 0===r?"#eee":r,o=t.redLineColor,a=void 0===o?"#f04134":o,l=t.groupBack,u=void 0===l?"#3db9d3":l,s=t.groupFront,c=void 0===s?"#299cb4":s,f=t.taskBack,h=void 0===f?"#65c16f":f,p=t.taskFront,d=void 0===p?"#46ad51":p,y=t.milestone,g=void 0===y?"#d33daf":y,v=t.warning,m=void 0===v?"#faad14":v,x=t.danger,b=void 0===x?"#f5222d":x,k=t.link,w=void 0===k?"#ffa011":k,O=t.textColor,T=void 0===O?"#222":O,S=t.lightTextColor,D=void 0===S?"#999":S,j=t.lineWidth,P=void 0===j?"1px":j,C=t.thickLineWidth,E=void 0===C?"1.4px":C,F=t.fontSize,W=void 0===F?M:F,Y=t.smallFontSize,H=void 0===Y?"12px":Y,q=t.fontFamily,L={stroke:i,"stroke-width":P},R={stroke:a,"stroke-width":P},z={stroke:i,"stroke-width":E},I={fill:T,"dominant-baseline":"central","font-size":W,"font-family":void 0===q?B:q},N={fill:D,"font-size":H};return{week:{fill:"rgba(252, 248, 227, .6)"},box:A({},z,{fill:n}),line:L,cline:R,bline:z,label:I,groupLabel:A({},I,{"font-weight":"600"}),text1:A({},I,N,{"text-anchor":"end"}),text2:A({},I,N),text3:A({},I,N,{"text-anchor":"middle"}),link:{stroke:w,"stroke-width":"1.5px",fill:"none"},linkArrow:{fill:w},milestone:{fill:g},groupBack:{fill:u},groupFront:{fill:c},taskBack:{fill:h},taskFront:{fill:d},warning:{fill:m},danger:{fill:b},ctrl:{display:"none",fill:"#f0f0f0",stroke:"#929292","stroke-width":"1px"}}}(x);return o("svg",{width:I,height:N,viewBox:$},o(O,{styles:J,width:I,height:N,offsetY:f,thickWidth:v,maxTextWidth:s}),"day"===l?o(S,{styles:J,unit:H,height:N,offsetY:f,minTime:R,maxTime:z,maxTextWidth:s}):null,"week"===l?o(D,{styles:J,unit:H,height:N,offsetY:f,minTime:R,maxTime:z,maxTextWidth:s}):null,"month"===l?o(P,{styles:J,unit:H,offsetY:f,minTime:R,maxTime:z,maxTextWidth:s}):null,o(C,{styles:J,data:n,width:I,height:N,offsetY:f,rowHeight:p,maxTextWidth:s}),s>0?o(E,{styles:J,data:n,offsetY:f,rowHeight:p}):null,k?o(F,{styles:J,data:n,unit:H,height:N,current:_,offsetY:f,minTime:R,onClick:i,rowHeight:p,barHeight:y,maxTextWidth:s}):null,o(W,{styles:J,data:n,unit:H,height:N,current:_,offsetY:f,minTime:R,onClick:i,showDelay:T,rowHeight:p,barHeight:y,maxTextWidth:s}))}function z(t){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var I="http://www.w3.org/2000/svg",N=document;function $(t,e){var n=t.tag,r=t.props,i=t.children,o=N.createElementNS(I,n);return r&&function(t,e){Object.keys(e).forEach(function(n){var r=e[n];"style"===n&&"object"===z(r)?Object.keys(r).forEach(function(e){t.style[e]=r[e]}):"onClick"===n?"function"==typeof r&&"g"===t.tagName&&t.addEventListener("click",r):t.setAttribute(n,r)})}(o,r),i.forEach(function(t){o.appendChild("string"==typeof t?N.createTextNode(t):$(t,e))}),o}function _(){return(_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function J(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){X(t,e,n[e])})}return t}function X(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var V=function(){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dom="string"==typeof e?document.querySelector(e):e,this.format(n),this.options=r,this.render()}return function(t,e,n){e&&U(t.prototype,e),n&&U(t,n)}(t,[{key:"format",value:function(t){this.data=t;var e=null,n=null;t.forEach(function(t){e=d(e,t.start),n=y(n,t.end)}),this.start=e||new Date,this.end=n||new Date}},{key:"setData",value:function(t){this.format(t),this.render()}},{key:"setOptions",value:function(t){this.options=J({},this.options,t),this.render()}},{key:"render",value:function(){var t=this.data,e=this.start,n=this.end,r=this.options;if(this.tree&&this.dom.removeChild(this.tree),void 0===r.maxTextWidth){var i=H(r.styleOptions||{});r.maxTextWidth=g(t.map(function(t){return f(t.text,i,20)}),0)}var a=J({},r,{start:e,end:n});this.tree=$(o(R,_({data:t},a))),this.dom.appendChild(this.tree)}}]),t}();function G(){return(G=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function K(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){Q(t,e,n[e])})}return t}function Q(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Z(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var tt=function(){function t(e,n){var r=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=function(t){var e="string"==typeof t?document.querySelector(t):t,n=e.getContext("2d"),r=n.webkitBackingStorePixelRatio||n.mozBackingStorePixelRatio||n.msBackingStorePixelRatio||n.oBackingStorePixelRatio||n.backingStorePixelRatio||1,i=(window.devicePixelRatio||1)/r;return["width","height"].forEach(function(t){Object.defineProperty(n,t,{get:function(){return e[t]/i},set:function(r){e[t]=r*i,e.style[t]="".concat(r,"px"),n.scale(i,i)},enumerable:!0,configurable:!0})}),e.addEventListener("click",function(t){if(n.onClick){var r=e.getBoundingClientRect();n.onClick({x:(t.clientX-r.left)*i,y:(t.clientY-r.top)*i})}}),n}(e),this.format(n),this.options=i,this.render(),this.ctx.onClick=function(t){return r.render(t)}}return function(t,e,n){e&&Z(t.prototype,e),n&&Z(t,n)}(t,[{key:"format",value:function(t){this.data=t;var e=null,n=null;t.forEach(function(t){e=d(e,t.start),n=y(n,t.end)}),this.start=e||new Date,this.end=n||new Date}},{key:"setData",value:function(t){this.format(t),this.render()}},{key:"setOptions",value:function(t){this.options=K({},this.options,t),this.render()}},{key:"render",value:function(t){var e=this.data,n=this.start,r=this.end,i=this.options;if(void 0===i.maxTextWidth){var a=H(i.styleOptions||{});i.maxTextWidth=g(e.map(function(t){return f(t.text,a,20)}),0)}!function t(e,n,r){var i=e.tag,o=e.props,a=e.children;if("svg"===i){var l=o.width,u=o.height;n.width=l,n.height=u}if("line"===i){var s=o.x1,c=o.x2,f=o.y1,h=o.y2,p=o.style,d=void 0===p?{}:p;d.stroke&&(n.strokeStyle=d.stroke,n.lineWidth=parseFloat(d["stroke-width"]||1)),n.beginPath(),n.moveTo(s,f),n.lineTo(c,h),n.stroke()}if("polyline"===i||"polygon"===i){var y=o.points,g=o.style,v=void 0===g?{}:g,x=m(y);v.stroke&&(n.strokeStyle=v.stroke,n.lineWidth=parseFloat(v["stroke-width"]||1)),v.fill&&(n.fillStyle=v.fill),n.beginPath(),n.moveTo(x[0][0],x[0][1]);for(var b=1;b<x.length;b++)n.lineTo(x[b][0],x[b][1]);"polyline"===i?n.stroke():n.fill()}if("rect"===i){var k=o.x,w=o.y,O=o.width,T=o.height,S=o.rx,D=void 0===S?0:S,j=o.ry,P=void 0===j?0:j,C=o.onClick,E=o.style,F=void 0===E?{}:E;n.beginPath(),n.moveTo(k+D,w),n.lineTo(k+O-D,w),n.quadraticCurveTo(k+O,w,k+O,w+P),n.lineTo(k+O,w+T-P),n.quadraticCurveTo(k+O,w+T,k+O-D,w+T),n.lineTo(k+D,w+T),n.quadraticCurveTo(k,w+T,k,w+T-P),n.lineTo(k,w+P),n.quadraticCurveTo(k,w,k+D,w),r&&C&&n.isPointInPath(r.x,r.y)&&C(),n.closePath(),F.fill&&(n.fillStyle=F.fill),n.fill(),F.stroke&&(n.strokeStyle=F.stroke,n.lineWidth=parseFloat(F["stroke-width"]||1),n.stroke())}if("text"===i){var W=o.x,A=o.y,Y=o.style;Y&&(n.fillStyle=Y.fill,n.textBaseline={central:"middle",middle:"middle",hanging:"hanging",alphabetic:"alphabetic",ideographic:"ideographic"}[Y["dominant-baseline"]]||"alphabetic",n.textAlign={start:"start",middle:"center",end:"end"}[Y["text-anchor"]]||"start",n.font="".concat(Y["font-weight"]||""," ").concat(Y["font-size"]," ").concat(Y["font-family"])),n.fillText(a.join(""),W,A)}a.forEach(function(e){"string"!=typeof e&&t(e,n,r)})}(o(R,G({data:e},K({},i,{start:n,end:r}))),this.ctx,t)}}]),t}();function et(t){return(et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function nt(t,e){var n=t.tag,r=t.props,i=t.children,o=[];return o.push("<".concat(n)),Object.keys(r||{}).forEach(function(t){var e=r[t];"onClick"!==t&&("style"===t&&"object"===et(e)&&(e=Object.keys(e).map(function(t){return"".concat(t,":").concat(e[t],";")}).join("")),o.push(" ".concat(t,'="').concat(function(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/\t/g,"&#x9;").replace(/\n/g,"&#xA;").replace(/\r/g,"&#xD;")}(e),'"')))}),i&&i.length?(o.push(">"),i.forEach(function(t){"string"==typeof t?o.push(function(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r/g,"&#xD;")}(t)):o.push(nt(t,e))}),o.push("</".concat(n,">")),o.join("")):(o.push(" />"),o.join(""))}function rt(){return(rt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function it(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){ot(t,e,n[e])})}return t}function ot(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function at(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var lt=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.format(e),this.options=n}return function(t,e,n){e&&at(t.prototype,e),n&&at(t,n)}(t,[{key:"format",value:function(t){this.data=t;var e=null,n=null;t.forEach(function(t){e=d(e,t.start),n=y(n,t.end)}),this.start=e||new Date,this.end=n||new Date}},{key:"setData",value:function(t){this.format(t)}},{key:"setOptions",value:function(t){this.options=it({},this.options,t)}},{key:"render",value:function(){var t=this.data,e=this.start,n=this.end;return nt(o(R,rt({data:t},it({},this.options,{start:e,end:n}))))}}]),t}();var ut=function(t){return document.querySelector(t)},st=function(){var t=[{id:1,name:"Waterfall model"},{id:11,parent:1,name:"Requirements"},{id:12,parent:1,name:"Design"},{id:13,parent:1,name:"Implement",type:"milestone"},{id:14,parent:1,name:"Verification"},{id:2,name:"Development"},{id:21,parent:2,name:"Preliminary"},{id:22,parent:2,name:"Systems design"},{id:23,parent:2,name:"Development"},{id:24,parent:2,name:"Integration"}];return t.forEach(function(t){t.start=function(t){var e,n;return t?(n=60*Math.random()+5,e=new Date(t)):(n=60*Math.random()-60,e=new Date),e.setDate(e.getDate()+n),e}(),t.duration=90*Math.random(),t.percent=Math.random()}),{tasks:t,links:[{source:11,target:12,type:"FS"},{source:12,target:13,type:"FS"},{source:13,target:14,type:"FS"},{source:13,target:21,type:"FS"},{source:23,target:24,type:"SF"}]}}(),ct=st.tasks,ft=st.links,ht=r.formatData(ct,ft),pt={viewMode:"week",onClick:function(t){return console.log(t)}},dt=new V("#svg",ht,pt),yt=new tt("#canvas",ht,pt),gt=new lt(ht,pt);function vt(){ut("#str").textContent=function(t){for(var e="",n=(t=t.replace(/(>)\s*(<)(\/*)/g,"$1\n$2$3").replace(/ *(.*) +\n/g,"$1\n").replace(/(<.+>)(.+\n)/g,"$1\n$2")).split("\n"),r=0,i="other",o={"single->single":0,"single->closing":-1,"single->opening":0,"single->other":0,"closing->single":0,"closing->closing":-1,"closing->opening":0,"closing->other":0,"opening->single":1,"opening->closing":0,"opening->opening":1,"opening->other":1,"other->single":0,"other->closing":-1,"other->opening":0,"other->other":0},a=0;a<n.length;a++){var l=n[a];if(l.match(/\s*<\?xml/))e+=l+"\n";else{var u=Boolean(l.match(/<.+\/>/)),s=Boolean(l.match(/<\/.+>/)),c=Boolean(l.match(/<[^!].*>/)),f=u?"single":s?"closing":c?"opening":"other",h=i+"->"+f;i=f;var p="";r+=o[h];for(var d=0;d<r;d++)p+="  ";"opening->closing"==h?e=e.substr(0,e.length-1)+l+"\n":e+=p+l+"\n"}}return e}(gt.render())}function mt(t){dt.setOptions(t),yt.setOptions(t),gt.setOptions(t),vt()}function xt(){var t=r.formatData(ct,ft);dt.setData(t),yt.setData(t),gt.setData(t),vt()}vt(),ut("#viewMode").onchange=function(t){mt({viewMode:t.target.value})},ut("#showLinks").onchange=function(){mt({showLinks:ut("#showLinks").checked})},ut("#showDelay").onchange=function(){mt({showDelay:ut("#showDelay").checked})},ut("#autoSchedule").onclick=function(){r.autoSchedule(ct,ft),xt()};var bt=null,kt=!1,wt=null,Ot=null;function Tt(t){return t.classList.contains("gantt-ctrl-start")}function St(t){return t.classList.contains("gantt-ctrl-finish")}document.onmousedown=function(t){if(bt=ut("svg"),Tt(t.target)||St(t.target)){t.preventDefault(),wt=t.target,document.querySelectorAll(".gantt-ctrl-start,.gantt-ctrl-finish").forEach(function(t){t.style.display="block"}),kt=!0,Ot=document.createElementNS("http://www.w3.org/2000/svg","line");var e=wt.getAttribute("cx"),n=wt.getAttribute("cy");Ot.setAttribute("x1",e),Ot.setAttribute("y1",n),Ot.setAttribute("x2",e),Ot.setAttribute("y2",n),Ot.style.stroke="#ffa011",Ot.style["stroke-width"]="2",Ot.style["stroke-dasharray"]="5",bt.appendChild(Ot)}},document.onmousemove=function(t){if(kt)if(t.preventDefault(),Tt(t.target)||St(t.target)){var e=t.target.getAttribute("cx"),n=t.target.getAttribute("cy");Ot.setAttribute("x2",e),Ot.setAttribute("y2",n)}else{var r=t.clientX,i=t.clientY,o=bt.getBoundingClientRect();Ot.setAttribute("x2",r-o.left),Ot.setAttribute("y2",i-o.top)}},document.onmouseup=function(t){if(kt){t.preventDefault();var e=Tt(t.target)||St(t.target);wt&&e&&function(t,e){var n=parseInt(t.dataset.id),r=parseInt(e.dataset.id),i=ct.find(function(t){return t.id===n}),o=ct.find(function(t){return t.id===r}),a=Tt(t)?"S":"F",l=Tt(e)?"S":"F";"milestone"===i.type&&(a="F"),"milestone"===o.type&&(l="S"),ft.push({source:n,target:r,type:"".concat(a).concat(l)}),xt()}(wt,t.target),document.querySelectorAll(".gantt-ctrl-start,.gantt-ctrl-finish").forEach(function(t){t.style.display="none"}),kt=!1,wt&&(wt.style.display="none",wt=null),Ot&&(bt.removeChild(Ot),Ot=null)}}}]);