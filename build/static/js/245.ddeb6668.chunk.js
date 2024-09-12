"use strict";(self.webpackChunktodoors_web=self.webpackChunktodoors_web||[]).push([[245],{53245:function(e,t,n){n.d(t,{Z:function(){return Ve}});var r=n(87462),o=n(29439),i=n(63366),a=n(72791),s=n(47563),f=n(75721),c=n(99723);function p(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function u(e){return e instanceof p(e).Element||e instanceof Element}function l(e){return e instanceof p(e).HTMLElement||e instanceof HTMLElement}function d(e){return"undefined"!==typeof ShadowRoot&&(e instanceof p(e).ShadowRoot||e instanceof ShadowRoot)}var m=Math.max,h=Math.min,v=Math.round;function y(){var e=navigator.userAgentData;return null!=e&&e.brands?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function g(){return!/^((?!chrome|android).)*safari/i.test(y())}function b(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var r=e.getBoundingClientRect(),o=1,i=1;t&&l(e)&&(o=e.offsetWidth>0&&v(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&v(r.height)/e.offsetHeight||1);var a=(u(e)?p(e):window).visualViewport,s=!g()&&n,f=(r.left+(s&&a?a.offsetLeft:0))/o,c=(r.top+(s&&a?a.offsetTop:0))/i,d=r.width/o,m=r.height/i;return{width:d,height:m,top:c,right:f+d,bottom:c+m,left:f,x:f,y:c}}function w(e){var t=p(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function x(e){return e?(e.nodeName||"").toLowerCase():null}function O(e){return((u(e)?e.ownerDocument:e.document)||window.document).documentElement}function j(e){return b(O(e)).left+w(e).scrollLeft}function E(e){return p(e).getComputedStyle(e)}function P(e){var t=E(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function D(e,t,n){void 0===n&&(n=!1);var r=l(t),o=l(t)&&function(e){var t=e.getBoundingClientRect(),n=v(t.width)/e.offsetWidth||1,r=v(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),i=O(t),a=b(e,o,n),s={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(r||!r&&!n)&&(("body"!==x(t)||P(i))&&(s=function(e){return e!==p(e)&&l(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:w(e);var t}(t)),l(t)?((f=b(t,!0)).x+=t.clientLeft,f.y+=t.clientTop):i&&(f.x=j(i))),{x:a.left+s.scrollLeft-f.x,y:a.top+s.scrollTop-f.y,width:a.width,height:a.height}}function R(e){var t=b(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function k(e){return"html"===x(e)?e:e.assignedSlot||e.parentNode||(d(e)?e.host:null)||O(e)}function A(e){return["html","body","#document"].indexOf(x(e))>=0?e.ownerDocument.body:l(e)&&P(e)?e:A(k(e))}function M(e,t){var n;void 0===t&&(t=[]);var r=A(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=p(r),a=o?[i].concat(i.visualViewport||[],P(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(M(k(a)))}function Z(e){return["table","td","th"].indexOf(x(e))>=0}function L(e){return l(e)&&"fixed"!==E(e).position?e.offsetParent:null}function W(e){for(var t=p(e),n=L(e);n&&Z(n)&&"static"===E(n).position;)n=L(n);return n&&("html"===x(n)||"body"===x(n)&&"static"===E(n).position)?t:n||function(e){var t=/firefox/i.test(y());if(/Trident/i.test(y())&&l(e)&&"fixed"===E(e).position)return null;var n=k(e);for(d(n)&&(n=n.host);l(n)&&["html","body"].indexOf(x(n))<0;){var r=E(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var T="top",B="bottom",H="right",S="left",C="auto",V=[T,B,H,S],q="start",N="end",U="viewport",I="popper",F=V.reduce((function(e,t){return e.concat([t+"-"+q,t+"-"+N])}),[]),_=[].concat(V,[C]).reduce((function(e,t){return e.concat([t,t+"-"+q,t+"-"+N])}),[]),z=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function X(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function Y(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var G={placement:"bottom",modifiers:[],strategy:"absolute"};function J(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function K(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?G:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},G,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,f={state:o,setOptions:function(n){var s="function"===typeof n?n(o.options):n;c(),o.options=Object.assign({},i,o.options,s),o.scrollParents={reference:u(e)?M(e):e.contextElement?M(e.contextElement):[],popper:M(t)};var p=function(e){var t=X(e);return z.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=p.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:f,options:r}),c=function(){};a.push(s||c)}})),f.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(J(t,n)){o.rects={reference:D(t,W(n),"fixed"===o.options.strategy),popper:R(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,c=i.options,p=void 0===c?{}:c,u=i.name;"function"===typeof a&&(o=a({state:o,options:p,name:u,instance:f})||o)}else o.reset=!1,r=-1}}},update:Y((function(){return new Promise((function(e){f.forceUpdate(),e(o)}))})),destroy:function(){c(),s=!0}};if(!J(e,t))return f;function c(){a.forEach((function(e){return e()})),a=[]}return f.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),f}}var Q={passive:!0};function $(e){return e.split("-")[0]}function ee(e){return e.split("-")[1]}function te(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ne(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?$(o):null,a=o?ee(o):null,s=n.x+n.width/2-r.width/2,f=n.y+n.height/2-r.height/2;switch(i){case T:t={x:s,y:n.y-r.height};break;case B:t={x:s,y:n.y+n.height};break;case H:t={x:n.x+n.width,y:f};break;case S:t={x:n.x-r.width,y:f};break;default:t={x:n.x,y:n.y}}var c=i?te(i):null;if(null!=c){var p="y"===c?"height":"width";switch(a){case q:t[c]=t[c]-(n[p]/2-r[p]/2);break;case N:t[c]=t[c]+(n[p]/2-r[p]/2)}}return t}var re={top:"auto",right:"auto",bottom:"auto",left:"auto"};function oe(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,f=e.gpuAcceleration,c=e.adaptive,u=e.roundOffsets,l=e.isFixed,d=a.x,m=void 0===d?0:d,h=a.y,y=void 0===h?0:h,g="function"===typeof u?u({x:m,y:y}):{x:m,y:y};m=g.x,y=g.y;var b=a.hasOwnProperty("x"),w=a.hasOwnProperty("y"),x=S,j=T,P=window;if(c){var D=W(n),R="clientHeight",k="clientWidth";if(D===p(n)&&"static"!==E(D=O(n)).position&&"absolute"===s&&(R="scrollHeight",k="scrollWidth"),o===T||(o===S||o===H)&&i===N)j=B,y-=(l&&D===P&&P.visualViewport?P.visualViewport.height:D[R])-r.height,y*=f?1:-1;if(o===S||(o===T||o===B)&&i===N)x=H,m-=(l&&D===P&&P.visualViewport?P.visualViewport.width:D[k])-r.width,m*=f?1:-1}var A,M=Object.assign({position:s},c&&re),Z=!0===u?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:v(t*r)/r||0,y:v(n*r)/r||0}}({x:m,y:y}):{x:m,y:y};return m=Z.x,y=Z.y,f?Object.assign({},M,((A={})[j]=w?"0":"",A[x]=b?"0":"",A.transform=(P.devicePixelRatio||1)<=1?"translate("+m+"px, "+y+"px)":"translate3d("+m+"px, "+y+"px, 0)",A)):Object.assign({},M,((t={})[j]=w?y+"px":"",t[x]=b?m+"px":"",t.transform="",t))}var ie={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=_.reduce((function(e,n){return e[n]=function(e,t,n){var r=$(e),o=[S,T].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[S,H].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[r]=a}},ae={left:"right",right:"left",bottom:"top",top:"bottom"};function se(e){return e.replace(/left|right|bottom|top/g,(function(e){return ae[e]}))}var fe={start:"end",end:"start"};function ce(e){return e.replace(/start|end/g,(function(e){return fe[e]}))}function pe(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&d(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function ue(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function le(e,t,n){return t===U?ue(function(e,t){var n=p(e),r=O(e),o=n.visualViewport,i=r.clientWidth,a=r.clientHeight,s=0,f=0;if(o){i=o.width,a=o.height;var c=g();(c||!c&&"fixed"===t)&&(s=o.offsetLeft,f=o.offsetTop)}return{width:i,height:a,x:s+j(e),y:f}}(e,n)):u(t)?function(e,t){var n=b(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):ue(function(e){var t,n=O(e),r=w(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=m(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=m(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+j(e),f=-r.scrollTop;return"rtl"===E(o||n).direction&&(s+=m(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}(O(e)))}function de(e,t,n,r){var o="clippingParents"===t?function(e){var t=M(k(e)),n=["absolute","fixed"].indexOf(E(e).position)>=0&&l(e)?W(e):e;return u(n)?t.filter((function(e){return u(e)&&pe(e,n)&&"body"!==x(e)})):[]}(e):[].concat(t),i=[].concat(o,[n]),a=i[0],s=i.reduce((function(t,n){var o=le(e,n,r);return t.top=m(o.top,t.top),t.right=h(o.right,t.right),t.bottom=h(o.bottom,t.bottom),t.left=m(o.left,t.left),t}),le(e,a,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function me(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function he(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function ve(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.strategy,a=void 0===i?e.strategy:i,s=n.boundary,f=void 0===s?"clippingParents":s,c=n.rootBoundary,p=void 0===c?U:c,l=n.elementContext,d=void 0===l?I:l,m=n.altBoundary,h=void 0!==m&&m,v=n.padding,y=void 0===v?0:v,g=me("number"!==typeof y?y:he(y,V)),w=d===I?"reference":I,x=e.rects.popper,j=e.elements[h?w:d],E=de(u(j)?j:j.contextElement||O(e.elements.popper),f,p,a),P=b(e.elements.reference),D=ne({reference:P,element:x,strategy:"absolute",placement:o}),R=ue(Object.assign({},x,D)),k=d===I?R:P,A={top:E.top-k.top+g.top,bottom:k.bottom-E.bottom+g.bottom,left:E.left-k.left+g.left,right:k.right-E.right+g.right},M=e.modifiersData.offset;if(d===I&&M){var Z=M[o];Object.keys(A).forEach((function(e){var t=[H,B].indexOf(e)>=0?1:-1,n=[T,B].indexOf(e)>=0?"y":"x";A[e]+=Z[n]*t}))}return A}function ye(e,t,n){return m(e,h(t,n))}var ge={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,f=n.boundary,c=n.rootBoundary,p=n.altBoundary,u=n.padding,l=n.tether,d=void 0===l||l,v=n.tetherOffset,y=void 0===v?0:v,g=ve(t,{boundary:f,rootBoundary:c,padding:u,altBoundary:p}),b=$(t.placement),w=ee(t.placement),x=!w,O=te(b),j="x"===O?"y":"x",E=t.modifiersData.popperOffsets,P=t.rects.reference,D=t.rects.popper,k="function"===typeof y?y(Object.assign({},t.rects,{placement:t.placement})):y,A="number"===typeof k?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),M=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,Z={x:0,y:0};if(E){if(i){var L,C="y"===O?T:S,V="y"===O?B:H,N="y"===O?"height":"width",U=E[O],I=U+g[C],F=U-g[V],_=d?-D[N]/2:0,z=w===q?P[N]:D[N],X=w===q?-D[N]:-P[N],Y=t.elements.arrow,G=d&&Y?R(Y):{width:0,height:0},J=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},K=J[C],Q=J[V],ne=ye(0,P[N],G[N]),re=x?P[N]/2-_-ne-K-A.mainAxis:z-ne-K-A.mainAxis,oe=x?-P[N]/2+_+ne+Q+A.mainAxis:X+ne+Q+A.mainAxis,ie=t.elements.arrow&&W(t.elements.arrow),ae=ie?"y"===O?ie.clientTop||0:ie.clientLeft||0:0,se=null!=(L=null==M?void 0:M[O])?L:0,fe=U+oe-se,ce=ye(d?h(I,U+re-se-ae):I,U,d?m(F,fe):F);E[O]=ce,Z[O]=ce-U}if(s){var pe,ue="x"===O?T:S,le="x"===O?B:H,de=E[j],me="y"===j?"height":"width",he=de+g[ue],ge=de-g[le],be=-1!==[T,S].indexOf(b),we=null!=(pe=null==M?void 0:M[j])?pe:0,xe=be?he:de-P[me]-D[me]-we+A.altAxis,Oe=be?de+P[me]+D[me]-we-A.altAxis:ge,je=d&&be?function(e,t,n){var r=ye(e,t,n);return r>n?n:r}(xe,de,Oe):ye(d?xe:he,de,d?Oe:ge);E[j]=je,Z[j]=je-de}t.modifiersData[r]=Z}},requiresIfExists:["offset"]};var be={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=$(n.placement),f=te(s),c=[S,H].indexOf(s)>=0?"height":"width";if(i&&a){var p=function(e,t){return me("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:he(e,V))}(o.padding,n),u=R(i),l="y"===f?T:S,d="y"===f?B:H,m=n.rects.reference[c]+n.rects.reference[f]-a[f]-n.rects.popper[c],h=a[f]-n.rects.reference[f],v=W(i),y=v?"y"===f?v.clientHeight||0:v.clientWidth||0:0,g=m/2-h/2,b=p[l],w=y-u[c]-p[d],x=y/2-u[c]/2+g,O=ye(b,x,w),j=f;n.modifiersData[r]=((t={})[j]=O,t.centerOffset=O-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&pe(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function we(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function xe(e){return[T,H,B,S].some((function(t){return e[t]>=0}))}var Oe=K({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,f=p(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,Q)})),s&&f.addEventListener("resize",n.update,Q),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,Q)})),s&&f.removeEventListener("resize",n.update,Q)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=ne({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,f=void 0===s||s,c={placement:$(t.placement),variation:ee(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,oe(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:f})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,oe(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];l(o)&&x(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});l(r)&&x(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},ie,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,f=n.fallbackPlacements,c=n.padding,p=n.boundary,u=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,y=$(v),g=f||(y===v||!m?[se(v)]:function(e){if($(e)===C)return[];var t=se(e);return[ce(e),t,ce(t)]}(v)),b=[v].concat(g).reduce((function(e,n){return e.concat($(n)===C?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=void 0===f?_:f,p=ee(r),u=p?s?F:F.filter((function(e){return ee(e)===p})):V,l=u.filter((function(e){return c.indexOf(e)>=0}));0===l.length&&(l=u);var d=l.reduce((function(t,n){return t[n]=ve(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[$(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:p,rootBoundary:u,padding:c,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,j=!0,E=b[0],P=0;P<b.length;P++){var D=b[P],R=$(D),k=ee(D)===q,A=[T,B].indexOf(R)>=0,M=A?"width":"height",Z=ve(t,{placement:D,boundary:p,rootBoundary:u,altBoundary:l,padding:c}),L=A?k?H:S:k?B:T;w[M]>x[M]&&(L=se(L));var W=se(L),N=[];if(i&&N.push(Z[R]<=0),s&&N.push(Z[L]<=0,Z[W]<=0),N.every((function(e){return e}))){E=D,j=!1;break}O.set(D,N)}if(j)for(var U=function(e){var t=b.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},I=m?3:1;I>0;I--){if("break"===U(I))break}t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},ge,be,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ve(t,{elementContext:"reference"}),s=ve(t,{altBoundary:!0}),f=we(a,r),c=we(s,o,i),p=xe(f),u=xe(c);t.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":u})}}]}),je=n(94419),Ee=n(96174),Pe=n(21217);function De(e){return(0,Pe.Z)("MuiPopperUnstyled",e)}(0,n(75878).Z)("MuiPopperUnstyled",["root"]);var Re=n(78069),ke=n(80184),Ae=["anchorEl","children","component","components","componentsProps","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","TransitionProps"],Me=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function Ze(e){return"function"===typeof e?e():e}var Le={},We=a.forwardRef((function(e,t){var n,c=e.anchorEl,p=e.children,u=e.component,l=e.components,d=void 0===l?{}:l,m=e.componentsProps,h=void 0===m?{}:m,v=e.direction,y=e.disablePortal,g=e.modifiers,b=e.open,w=e.ownerState,x=e.placement,O=e.popperOptions,j=e.popperRef,E=e.TransitionProps,P=(0,i.Z)(e,Ae),D=a.useRef(null),R=(0,s.Z)(D,t),k=a.useRef(null),A=(0,s.Z)(k,j),M=a.useRef(A);(0,f.Z)((function(){M.current=A}),[A]),a.useImperativeHandle(j,(function(){return k.current}),[]);var Z=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(x,v),L=a.useState(Z),W=(0,o.Z)(L,2),T=W[0],B=W[1];a.useEffect((function(){k.current&&k.current.forceUpdate()})),(0,f.Z)((function(){if(c&&b){Ze(c);var e=[{name:"preventOverflow",options:{altBoundary:y}},{name:"flip",options:{altBoundary:y}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:function(e){var t=e.state;B(t.placement)}}];null!=g&&(e=e.concat(g)),O&&null!=O.modifiers&&(e=e.concat(O.modifiers));var t=Oe(Ze(c),D.current,(0,r.Z)({placement:Z},O,{modifiers:e}));return M.current(t),function(){t.destroy(),M.current(null)}}}),[c,y,g,b,O,Z]);var H={placement:T};null!==E&&(H.TransitionProps=E);var S=(0,je.Z)({root:["root"]},De,{}),C=null!=(n=null!=u?u:d.Root)?n:"div",V=(0,Re.Z)({elementType:C,externalSlotProps:h.root,externalForwardedProps:P,additionalProps:{role:"tooltip",ref:R},ownerState:(0,r.Z)({},e,w),className:S.root});return(0,ke.jsx)(C,(0,r.Z)({},V,{children:"function"===typeof p?p(H):p}))})),Te=a.forwardRef((function(e,t){var n=e.anchorEl,s=e.children,f=e.container,p=e.direction,u=void 0===p?"ltr":p,l=e.disablePortal,d=void 0!==l&&l,m=e.keepMounted,h=void 0!==m&&m,v=e.modifiers,y=e.open,g=e.placement,b=void 0===g?"bottom":g,w=e.popperOptions,x=void 0===w?Le:w,O=e.popperRef,j=e.style,E=e.transition,P=void 0!==E&&E,D=(0,i.Z)(e,Me),R=a.useState(!0),k=(0,o.Z)(R,2),A=k[0],M=k[1];if(!h&&!y&&(!P||A))return null;var Z=f||(n?(0,c.Z)(Ze(n)).body:void 0);return(0,ke.jsx)(Ee.Z,{disablePortal:d,container:Z,children:(0,ke.jsx)(We,(0,r.Z)({anchorEl:n,direction:u,disablePortal:d,modifiers:v,ref:t,open:P?!A:y,placement:b,popperOptions:x,popperRef:O},D,{style:(0,r.Z)({position:"fixed",top:0,left:0,display:y||!h||P&&!A?null:"none"},j),TransitionProps:P?{in:y,onEnter:function(){M(!1)},onExited:function(){M(!0)}}:null,children:s}))})})),Be=n(69120),He=n(76863),Se=n(67254),Ce=(0,He.ZP)(Te,{name:"MuiPopper",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),Ve=a.forwardRef((function(e,t){var n=(0,Be.Z)(),o=(0,Se.Z)({props:e,name:"MuiPopper"});return(0,ke.jsx)(Ce,(0,r.Z)({direction:null==n?void 0:n.direction},o,{ref:t}))}))}}]);
//# sourceMappingURL=245.ddeb6668.chunk.js.map