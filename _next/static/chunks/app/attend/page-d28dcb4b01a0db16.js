(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[568],{81:function(e,l,a){Promise.resolve().then(a.bind(a,8313)),Promise.resolve().then(a.bind(a,4538))},5254:function(e,l,a){"use strict";a.d(l,{Z:function(){return n}});var t=a(7437),s=a(9976),r=a(3585);function n(e){let{open:l,setOpen:a,children:n,type:i}=e;return(0,t.jsxs)(s.Vq,{open:l,onClose:a,className:"relative z-10",children:[(0,t.jsx)(s.ZR,{transition:!0,className:"fixed inset-0 bg-black bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"}),(0,t.jsxs)("div",{className:"fixed inset-0 z-10 max-h-dvh w-screen overflow-y-auto",children:[(0,t.jsx)("div",{className:"close absolute right-0 top-0 z-50 p-4 ".concat("attend"===i?"fill-black sm:fill-white":"fill-white"),onClick:()=>{a(!1)},children:(0,t.jsx)(r.mP,{})}),(0,t.jsx)(s.EM,{transition:!0,className:"relative m-auto transform overflow-hidden rounded-lg text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95",children:n})]})]})}},4965:function(e,l,a){"use strict";a.d(l,{Z:function(){return r}});var t=a(7437);let s={black:"bg-black bg-opacity-10",white:"bg-white bg-opacity-20"};function r(e){let{children:l,className:a,type:r="white",padding:n="p-6",onClick:i}=e;return(0,t.jsx)("div",{className:"".concat(s[r]," flex w-full rounded-3xl ").concat(n," ").concat(a),onClick:i,children:l})}},4538:function(e,l,a){"use strict";a.d(l,{default:function(){return g}});var t=a(7437),s=a(8472),r=a(6463),n=a(2265),i=a(9343),c=a(3585),d=a(5254),o=a(9242);function x(e){let{register:l,onChange:a,list:s,name:r}=e,[i,c]=(0,n.useState)(""),d=e=>{c(e.target.value),a(e,r)};return(0,t.jsx)("div",{className:"flex flex-col space-y-2",children:s.map(e=>(0,t.jsxs)("label",{className:"border-1 items-left flex flex-col gap-1 rounded-md border border-white px-4 py-4 ".concat(i===e.value?"bg-red-300 text-black":""),children:[(0,t.jsx)("input",{type:"radio",value:e.value,checked:i===e.value,className:"form-radio hidden focus:ring-blue-500",...l(r,{required:!0}),onChange:d}),e.tag&&(0,t.jsx)(o.Z,{size:"xs-b",children:e.tag}),(0,t.jsx)(o.Z,{children:e.label})]},e.value))})}var u=a(4965),h=a(166),m=a(7138);let p=[{value:"1",label:"하행",tag:"예식장으로 가는 버스"},{value:"2",label:"상행",tag:"집으로 가는 버스"},{value:"3",label:"왕복"}],f=[{value:"1",tag:"오전 7시",label:"호매실입구 판다팜 맞은편 주유소 앞"},{value:"2",tag:"오전 7시 20분",label:"수원역 6번 출구 방면 매산지구대 앞"},{value:"3",tag:"오전 8시",label:"사당역 1번 출구 방면 공영 주차장"}],b=s.Z.create({baseURL:"https://wedding-api-iota.vercel.app",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}});function g(){let[e,l]=(0,n.useState)(!1),[a,s]=(0,n.useState)(!1),[g,j]=(0,n.useState)(""),[v,N]=(0,n.useState)(null),{register:w,handleSubmit:y,formState:{errors:k},setValue:Z,reset:z}=(0,i.cI)(),{register:C,handleSubmit:S,reset:q}=(0,i.cI)(),E=(0,r.useRouter)(),L=async e=>{l(!0);try{let l=await b.post("/api/attend",e);if(201===l.status||200===l.status)alert("탑승 신청이 완료되었습니다."),z(),E.push("main");else throw Error("post error")}catch(e){alert("제출 실패 : 다시 등록해주세요.")}l(!1)},_=async e=>{l(!0);try{let l=await b.get("/api/attend?name=".concat(e.name,"&tel=").concat(e.tel));if(201===l.status||200===l.status)N({direction:l.data.direction,name:l.data.name,tel:l.data.tel});else if(404===l.status)N({name:"-",tel:"-",direction:"접수내역이 없습니다."});else throw Error("post error")}catch(e){alert("실패")}l(!1)},O="rounded-md px-3 py-2 border border-1 border-white bg-transparent font-light",R="w-full rounded-md px-3 py-2 border border-1 border-black bg-transparent font-light",D=(e,l)=>{e.target.value&&j(e.target.value),"2"===e.target.value&&"direction"===l?Z("boarding","-"):Z(l,e.target.value)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(h.z,{className:"border-1 rounded-2xl border border-black px-2 py-1",onClick:()=>{s(!0)},children:(0,t.jsx)(o.Z,{size:"xs-b",children:"예약확인"})}),a&&(0,t.jsx)(d.Z,{open:!0,setOpen:()=>{s(!1),q(),N(null)},type:"attend",children:(0,t.jsxs)("div",{className:"flex flex-col items-center justify-center gap-8 bg-white px-12 py-12",children:[(0,t.jsx)(o.Z,{size:"md-b",children:"예약확인"}),v?(0,t.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,t.jsxs)(o.Z,{size:"md",children:["이름 : ",v.name]}),(0,t.jsxs)(o.Z,{size:"md",children:["연락처 : ",v.tel]}),(0,t.jsxs)(o.Z,{size:"md",children:["탑승유형 :","1"===v.direction?"[하행]서울/수원 → 부산":"2"===v.direction?"[상행] 부산 → 서울/수원":"[왕복] 서울/수원 ↔ 부산"]})]}):(0,t.jsxs)("form",{onSubmit:S(_),className:"flex w-full flex-col gap-8",children:[(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,t.jsxs)(o.Z,{size:"md-b",color:"text-black",children:["이름 ",(0,t.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,t.jsx)("input",{placeholder:"이름을 입력해주세요.",className:R,...C("name",{required:!0}),maxLength:50})]}),(0,t.jsxs)("div",{className:"flex w-full flex-col gap-2",children:[(0,t.jsxs)(o.Z,{size:"md-b",color:"text-black",children:["연락처 ",(0,t.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,t.jsx)("input",{placeholder:"-를 제외하고 입력해주세요.",className:R,...C("tel",{required:!0}),maxLength:11,minLength:10})]}),(0,t.jsx)("button",{type:"submit",className:"w-full rounded-3xl bg-black px-4 py-3 font-light text-white",children:"찾기"})]})]})}),e&&(0,t.jsx)(d.Z,{open:!0,setOpen:l,children:(0,t.jsxs)("div",{className:"flex h-dvh flex-col items-center justify-center",children:[(0,t.jsx)(c.gb,{}),(0,t.jsxs)(o.Z,{color:"text-white",align:"center",children:["접속량이 많아 시간이 걸리고 있어요\uD83D\uDE25",(0,t.jsx)("br",{}),"잠시만 기다려주세요."]})]})}),(0,t.jsx)("form",{onSubmit:y(L),className:"relative mb-20 w-full",children:(0,t.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,t.jsx)(u.Z,{type:"white",padding:"px-6 py-12",className:"flex-1 flex-col gap-12",children:(0,t.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,t.jsxs)(o.Z,{size:"md-b",color:"text-black",children:["이름 ",(0,t.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,t.jsx)("input",{placeholder:"이름을 입력해주세요.",className:O,...w("name",{required:!0}),maxLength:50})]}),(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,t.jsxs)(o.Z,{size:"md-b",color:"text-black",children:["연락처 ",(0,t.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,t.jsx)("input",{placeholder:"-를 제외하고 입력해주세요.",className:O,...w("tel",{required:!0}),maxLength:11,minLength:10})]}),(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,t.jsxs)(o.Z,{size:"md-b",color:"text-black",children:["탑승 유형 ",(0,t.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,t.jsx)(m.default,{href:"tel:010-7630-6689",className:"flex items-center gap-2",children:(0,t.jsx)(o.Z,{size:"xs",children:"[기사님] 장수용 010-7630-6689 "})}),(0,t.jsx)(o.Z,{size:"xs",color:"text-black",children:"[차량번호] 경기77 아 9078"}),(0,t.jsx)(x,{register:w,onChange:D,list:p,name:"direction"})]}),("1"===g||"3"===g)&&(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,t.jsxs)(o.Z,{size:"md-b",color:"text-black",children:["하행선 탑승 위치 ",(0,t.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,t.jsx)(x,{register:w,onChange:D,list:f,name:"boarding"})]}),"2"===g&&(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,t.jsx)(o.Z,{size:"md-b",color:"text-black",children:"하차 위치"}),(0,t.jsx)(o.Z,{size:"md",color:"text-black",children:"호매실 / 수원역 / 사당역"})]}),k.exampleRequired&&(0,t.jsx)("span",{children:"필수값을 입력해주세요."})]})}),(0,t.jsx)("button",{type:"submit",className:"fixed bottom-4 left-1/2 w-[calc(100%-6rem)] max-w-[400px] -translate-x-1/2 rounded-3xl bg-white px-4 py-3 font-light text-red-300",children:"신청"})]})})]})}}},function(e){e.O(0,[158,684,976,244,313,971,23,744],function(){return e(e.s=81)}),_N_E=e.O()}]);