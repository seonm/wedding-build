(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[687,158],{6988:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/attend/attend-view",function(){return l(7293)}])},8785:function(e,t,l){"use strict";l.d(t,{Z:function(){return c}});var a=l(5893);let n={black:"bg-black bg-opacity-10",white:"bg-white bg-opacity-20"};function c(e){let{children:t,className:l,type:c="white",padding:s="p-6",onClick:r}=e;return(0,a.jsx)("div",{className:"".concat(n[c]," flex w-full rounded-3xl ").concat(s," ").concat(l),onClick:r,children:t})}},2573:function(e,t,l){"use strict";l.d(t,{Z:function(){return d}});var a=l(5893),n=l(7624),c=l.n(n),s=l(9677),r=l.n(s);let i={xs:"text-xs font-light","xs-b":"text-xs",md:"text-base font-light","md-b":"text-base",lg:"text-2xl",xl:"text-4xl"},x={left:"text-left",right:"text-right",center:"text-center"};function d(e){let{children:t,size:l="md",color:n="text-black",font:s,align:d="left",className:o}=e;return(0,a.jsx)("div",{className:"".concat(i[l]," ").concat(n," ").concat("abril"===s?r().className:""," ").concat("italiana"===s?c().className:""," ").concat(d?x[d]:""," ").concat(o),children:t})}},7293:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return x}});var a=l(5893),n=l(7294),c=l(2573);function s(e){let{register:t,onChange:l}=e,[s,r]=(0,n.useState)(""),i=e=>{r(e.target.value),l(e)};return(0,a.jsx)("div",{className:"flex flex-col space-y-2",children:[{value:"1",tag:"오전 9시",label:"사당역 1번 출구"},{value:"2",tag:"오전 9시 30분",label:"수원역 1번 출구"}].map(e=>(0,a.jsxs)("label",{className:"border-1 items-left flex flex-col gap-1 rounded-md border border-white px-4 py-4 ".concat(s===e.value?"bg-red-300 text-black":""),children:[(0,a.jsx)("input",{type:"radio",value:e.value,checked:s===e.value,className:"form-radio hidden focus:ring-blue-500",...t("location",{required:!0}),onChange:i}),(0,a.jsx)(c.Z,{size:"xs-b",children:e.tag}),(0,a.jsx)(c.Z,{children:e.label})]},e.value))})}var r=l(8785),i=l(7536);function x(){let{register:e,handleSubmit:t,watch:l,formState:{errors:n},setValue:x,reset:d}=(0,i.cI)(),o=async e=>{try{await fetch("/api/attend",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),alert("제출 성공"),d()}catch(e){alert("제출 실패 : 다시 등록해주세요.")}},u="rounded-md px-3 py-2 border border-1 border-white bg-transparent font-light";return(0,a.jsx)("form",{onSubmit:t(o),className:"relative mb-20 w-full",children:(0,a.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,a.jsx)(r.Z,{type:"white",padding:"px-6 py-12",className:"flex-1 flex-col gap-12",children:(0,a.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsxs)(c.Z,{size:"xs",color:"text-black",children:["이름 ",(0,a.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,a.jsx)("input",{placeholder:"이름을 입력해주세요.",className:u,...e("name",{required:!0}),maxLength:50})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsxs)(c.Z,{size:"xs",color:"text-black",children:["연락처 ",(0,a.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,a.jsx)("input",{placeholder:"-를 제외하고 입력해주세요.",className:u,...e("tel",{required:!0}),maxLength:11,minLength:10})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsxs)(c.Z,{size:"xs",color:"text-black",children:["탑승위치 ",(0,a.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,a.jsx)(s,{register:e,onChange:e=>{x("location",e.target.value)}})]}),n.exampleRequired&&(0,a.jsx)("span",{children:"필수값을 입력해주세요."})]})}),(0,a.jsx)("button",{type:"submit",className:"fixed bottom-4 left-1/2 w-[calc(100%-3rem)] max-w-md -translate-x-1/2 rounded-3xl bg-white p-4 py-3 font-light text-red-300",children:"신청"})]})})}}},function(e){e.O(0,[208,888,774,179],function(){return e(e.s=6988)}),_N_E=e.O()}]);