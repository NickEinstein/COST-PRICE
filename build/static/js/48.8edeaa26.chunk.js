"use strict";(self.webpackChunktodoors_web=self.webpackChunktodoors_web||[]).push([[48],{14781:function(e,n,t){var o=t(29439),r=t(72791),s=t(8152),i=t(16856),a=t(60676),l=t(84373),c=t(4565),u=t(49371),d=t(38254),p=t(73978),v=t(81872),f=t(16871),m=t(80184);n.Z=function(e){var n=e.hide,t=e.pad,x=(0,a.Z)(),h=r.useState(null===x||void 0===x?void 0:x._id),g=(0,o.Z)(h,2),w=g[0],j=(g[1],(0,f.s0)());console.log(x);var Z=null===s.Z||void 0===s.Z?void 0:s.Z.useGetUserProfileQuery({userId:w});return null===Z||void 0===Z||Z.data,(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:"flex justify-between items-center w-full",children:[(0,m.jsxs)(c.Z,{className:"",children:["Welcome Back, ",(0,m.jsx)("span",{className:"font-bold",children:null===x||void 0===x?void 0:x.name})]}),(0,m.jsx)(u.Z,{InputProps:{endAdornment:(0,m.jsx)(d.Z,{position:"start",children:(0,m.jsx)(i.Zh8,{})})},variant:"outlined",style:{backgroundColor:"white",border:"none",borderRadius:"7px"},className:"w-[30%] text-ssm "}),(0,m.jsx)("div",{className:"flex items-center",children:(0,m.jsx)("div",{className:" py-2 px-10",children:(0,m.jsxs)("div",{className:t?"flex justify-between items-center pr-8":"flex justify-between items-center",children:[(0,m.jsx)("div",{className:"px-4",children:(0,m.jsx)(l.G58,{className:"text-[#00000080]",size:26})}),(0,m.jsxs)("div",{className:"flex items-center justify-center ",children:[(0,m.jsx)(p.Z,{className:"mr-3 h-9 w-9",alt:"Travis Howard",src:null===x||void 0===x?void 0:x.pic}),(0,m.jsxs)("div",{className:"cursor-pointer",onClick:function(){j("/profile")},children:[(0,m.jsx)(c.Z,{className:"text-black font-bold text-left mb",children:null===x||void 0===x?void 0:x.name}),(0,m.jsx)(c.Z,{className:"text-[#2E4457] text-left text-[11px] mb-1",children:null===x||void 0===x?void 0:x.type})]})]})]})})})]}),!n&&(0,m.jsx)(v.Z,{className:"mb-8"})]})}},93449:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var o=t(1413),r=t(74165),s=t(15861),i=t(29439),a=t(72791),l=(t(96612),t(81724),t(5588),t(60676),t(39126)),c=t(71066),u=t(7993),d=t.p+"static/media/todoor image.2dabe7881be92a826a0c.png",p=t(17205),v=t(16871),f=t(14781),m=t(80184);var x=function(e){var n,t=(0,a.useState)(null),x=(0,i.Z)(t,2),h=x[0],g=x[1],w=(0,a.useState)(null),j=(0,i.Z)(w,2),Z=(j[0],j[1]),b=(0,a.useState)({lat:7,lng:5}),y=(0,i.Z)(b,2),N=y[0],C=(y[1],(0,a.useState)([])),k=(0,i.Z)(C,2),L=k[0],S=k[1],A=(0,a.useState)(null),I=(0,i.Z)(A,2),z=(I[0],I[1]),T=(0,a.useState)(null),O=(0,i.Z)(T,2),R=O[0],P=O[1],G=((0,a.useRef)(null),function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n){var t,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.U2)({endpoint:"api/company/getActiveCompanyRiders",auth:!0});case 2:return o=e.sent,S((null===o||void 0===o?void 0:o.data)||[]),e.abrupt("return",null===o||void 0===o||null===(t=o.data)||void 0===t?void 0:t.length);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),U=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.U2)({endpoint:"api/company/getActiveCompanyRiders",auth:!0});case 2:t=e.sent,console.log(null===t||void 0===t?void 0:t.data[0]),V(null===t||void 0===t?void 0:t.data[0]);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),V=function(e){if(h){console.log(null===e||void 0===e?void 0:e.gpsLoc);var n=new window.google.maps.LatLngBounds;n.extend(new window.google.maps.LatLng(null===e||void 0===e?void 0:e.gpsLoc[1],null===e||void 0===e?void 0:e.gpsLoc[0])),h.fitBounds(n),h.panTo(new window.google.maps.LatLng(null===e||void 0===e?void 0:e.gpsLoc[1],null===e||void 0===e?void 0:e.gpsLoc[0]))}};(0,a.useEffect)((function(){var e=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:G();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();U();var n=setInterval(e,3e3);return function(){return clearInterval(n)}}),[h]),(0,v.s0)();var _=(0,u.Ji)({googleMapsApiKey:"AIzaSyAOcmuq7zgq9R_ZubLHlhw6VO_XRidO1Vg"}).isLoaded;if(!_)return(0,m.jsx)("p",{children:"isloaded"});var E=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n,t){var o,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=n&&""!=t){e.next=2;break}return e.abrupt("return");case 2:return o=new google.maps.DirectionsService,e.next=5,o.route({origin:n,destination:t,travelMode:google.maps.TravelMode.DRIVING});case 5:s=e.sent,P(s),Z(s.routes[0].legs[0].distance.text),z(s.routes[0].legs[0].duration.text);case 9:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),M={color:"blue",fontSize:"12px",fontWeight:"bold",anchor:new window.google.maps.Point(0,20)},B={url:d,scaledSize:new window.google.maps.Size(60,60)};return _?(0,m.jsxs)("div",{className:"w-full",children:[(0,m.jsx)(f.Z,{}),(0,m.jsxs)("div",{className:"flex justify-between items-center",children:[(0,m.jsx)("div",{className:"mb-4",children:(0,m.jsx)(p.Z,{onClick:function(){return E("Apapa, Lagos","Ikeja, Lagos")},style:{color:"#8C8C8C"},className:" ml-3 px-7 py-2 bg-transparent",children:"God's View"})}),(0,m.jsx)("div",{className:"flex-between w-2/5 mr-12",children:(0,m.jsxs)("div",{className:" flex items-center",children:[(0,m.jsx)(l.KC7,{className:"mr-1",style:{color:"#078532"},fontSize:12}),(0,m.jsxs)("p",{children:["Online ",null===L||void 0===L||null===(n=L.map((function(e){return e.isAvailable})))||void 0===n?void 0:n.length]})]})})]}),(0,m.jsxs)(u.b6,{mapContainerStyle:{width:"100%",height:"45vw"},center:N,zoom:50,options:{zoomControl:!1,streetViewControl:!1,mapTypeControl:!1,fullscreenControl:!1},onLoad:function(e){setTimeout((function(){g(e)}))},children:[h&&(0,m.jsx)("div",{children:null===L||void 0===L?void 0:L.map((function(e){return(null===e||void 0===e?void 0:e.gpsLoc)&&(0,m.jsx)("div",{children:(null===e||void 0===e?void 0:e.isAvailable)&&(0,m.jsx)("div",{children:(0,m.jsx)(u.Jx,{style:{width:"10px"},onClick:function(){V(e)},icon:B,position:{lat:null===e||void 0===e?void 0:e.gpsLoc[1],lng:null===e||void 0===e?void 0:e.gpsLoc[0]},label:(0,o.Z)({text:null===e||void 0===e?void 0:e.fname},M)})})})}))}),R&&(0,m.jsx)(u.tH,{directions:R}),(0,m.jsx)(m.Fragment,{})]})]}):(0,m.jsx)(m.Fragment,{})}},11101:function(e,n){n.Z={login:"login",dashboardStats:"payrollapi/dashboardstats",postPassword2:"services/api/resetpassword/resetpassword",notification:"services/api/notifications",employeeProfile:"global/api/employee/profile"}},71066:function(e,n,t){t.d(n,{U2:function(){return c}});var o=t(74165),r=t(15861),s=t(74569),i=t.n(s),a=t(11101),l=function(){var e=(0,r.Z)((0,o.Z)().mark((function e(n,t,s,l,c,u,d){var p,v,f,m,x,h;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p={"Content-Type":"application/json; charset=utf-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST GET OPTIONS"},v=a.Z[n]||n,f="".concat("https://api.costprice.ng/api","/").concat(v),console.log("https://api.costprice.ng/api"),u&&(f+="/".concat(u)),c&&(m=Object.keys(c).map((function(e){return c[e]&&"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(c[e]))})),f+="?".concat(m.join("&"))),s&&(x=localStorage.getItem("token"))&&(p.Authorization="".concat(x)),h={url:f,method:t,headers:p},l&&(h.data=l),e.abrupt("return",i()(h).then((function(e){return e}),function(){var e=(0,r.Z)((0,o.Z)().mark((function e(n){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n&&n.response&&n.response.status,e.abrupt("return",n.response);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 10:case"end":return e.stop()}}),e)})));return function(n,t,o,r,s,i,a){return e.apply(this,arguments)}}(),c=function(e){var n=e.endpoint,t=e.pQuery,o=e.param,r=void 0===o?null:o,s=e.auth;return l(n,"GET",void 0===s||s,null,t,r)}}}]);
//# sourceMappingURL=48.8edeaa26.chunk.js.map