(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[606],{4662:function(t,n,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/main/account-list",function(){return c(7074)}])},2573:function(t,n,c){"use strict";c.d(n,{Z:function(){return i}});var e=c(5893);let u={xs:"text-xs",md:"text-base font-medium",lg:"text-2xl",xl:"text-4xl"};function i(t){let{children:n,size:c,color:i="text-white"}=t;return(0,e.jsx)("div",{className:"".concat(u[c]," ").concat(i," font-abril"),children:n})}},7074:function(t,n,c){"use strict";c.r(n),c.d(n,{default:function(){return r}});var e=c(5893),u=c(2573),i=c(7294);function r(t){let{role:n,name:c,account:r,bank:o}=t,[s,a]=(0,i.useState)(!1),l=async()=>{try{await navigator.clipboard.writeText("".concat(o," ").concat(r)),alert("Account is copied")}catch(t){console.error("복사 실패: ",t)}};return(0,e.jsx)(u.Z,{size:"xs",children:(0,e.jsxs)("div",{onClick:l,className:"cursor-pointer",children:["Groom"==n?"\uD83E\uDD35\uD83C\uDFFB":"\uD83D\uDC70\uD83C\uDFFB",c," ",r," ",o," \uD83D\uDCDD"]})})}}},function(t){t.O(0,[888,774,179],function(){return t(t.s=4662)}),_N_E=t.O()}]);