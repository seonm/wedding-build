"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[536],{7536:function(e,t,r){r.d(t,{cI:function(){return eg}});var a=r(7294),s=e=>"checkbox"===e.type,i=e=>e instanceof Date,l=e=>null==e;let u=e=>"object"==typeof e;var n=e=>!l(e)&&!Array.isArray(e)&&u(e)&&!i(e),o=e=>n(e)&&e.target?s(e.target)?e.target.checked:e.target.value:e,d=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,f=(e,t)=>e.has(d(t)),c=e=>{let t=e.constructor&&e.constructor.prototype;return n(t)&&t.hasOwnProperty("isPrototypeOf")},y="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function m(e){let t;let r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(!(y&&(e instanceof Blob||e instanceof FileList))&&(r||n(e))))return e;else if(t=r?[]:{},r||c(e))for(let r in e)e.hasOwnProperty(r)&&(t[r]=m(e[r]));else t=e;return t}var v=e=>Array.isArray(e)?e.filter(Boolean):[],h=e=>void 0===e,g=(e,t,r)=>{if(!t||!n(e))return r;let a=v(t.split(/[,[\].]+?/)).reduce((e,t)=>l(e)?e:e[t],e);return h(a)||a===e?h(e[t])?r:e[t]:a},b=e=>"boolean"==typeof e,p=e=>/^\w*$/.test(e),_=e=>v(e.replace(/["|']|\]/g,"").split(/\.|\[/)),V=(e,t,r)=>{let a=-1,s=p(t)?[t]:_(t),i=s.length,l=i-1;for(;++a<i;){let t=s[a],i=r;if(a!==l){let r=e[t];i=n(r)||Array.isArray(r)?r:isNaN(+s[a+1])?{}:[]}if("__proto__"===t)return;e[t]=i,e=e[t]}return e};let A={BLUR:"blur",FOCUS_OUT:"focusout"},F={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},w={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};a.createContext(null);var x=(e,t,r,a=!0)=>{let s={defaultValues:t._defaultValues};for(let i in e)Object.defineProperty(s,i,{get:()=>(t._proxyFormState[i]!==F.all&&(t._proxyFormState[i]=!a||F.all),r&&(r[i]=!0),e[i])});return s},S=e=>n(e)&&!Object.keys(e).length,k=(e,t,r,a)=>{r(e);let{name:s,...i}=e;return S(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(e=>t[e]===(!a||F.all))},D=e=>Array.isArray(e)?e:[e],O=e=>"string"==typeof e,E=(e,t,r,a,s)=>O(e)?(a&&t.watch.add(e),g(r,e,s)):Array.isArray(e)?e.map(e=>(a&&t.watch.add(e),g(r,e))):(a&&(t.watchAll=!0),r),C=(e,t,r,a,s)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[a]:s||!0}}:{},T=e=>({isOnSubmit:!e||e===F.onSubmit,isOnBlur:e===F.onBlur,isOnChange:e===F.onChange,isOnAll:e===F.all,isOnTouch:e===F.onTouched}),L=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))));let U=(e,t,r,a)=>{for(let s of r||Object.keys(e)){let r=g(e,s);if(r){let{_f:e,...i}=r;if(e){if(e.refs&&e.refs[0]&&t(e.refs[0],s)&&!a||e.ref&&t(e.ref,e.name)&&!a)return!0;if(U(i,t))break}else if(n(i)&&U(i,t))break}}};var j=(e,t,r)=>{let a=D(g(e,r));return V(a,"root",t[r]),V(e,r,a),e},B=e=>"file"===e.type,N=e=>"function"==typeof e,M=e=>{if(!y)return!1;let t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},q=e=>O(e),I=e=>"radio"===e.type,P=e=>e instanceof RegExp;let R={value:!1,isValid:!1},$={value:!0,isValid:!0};var H=e=>{if(Array.isArray(e)){if(e.length>1){let t=e.filter(e=>e&&e.checked&&!e.disabled).map(e=>e.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!h(e[0].attributes.value)?h(e[0].value)||""===e[0].value?$:{value:e[0].value,isValid:!0}:$:R}return R};let W={isValid:!1,value:null};var z=e=>Array.isArray(e)?e.reduce((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e,W):W;function G(e,t,r="validate"){if(q(e)||Array.isArray(e)&&e.every(q)||b(e)&&!e)return{type:r,message:q(e)?e:"",ref:t}}var J=e=>n(e)&&!P(e)?e:{value:e,message:""},K=async(e,t,r,a,i)=>{let{ref:u,refs:o,required:d,maxLength:f,minLength:c,min:y,max:m,pattern:v,validate:p,name:_,valueAsNumber:V,mount:A,disabled:F}=e._f,x=g(t,_);if(!A||F)return{};let k=o?o[0]:u,D=e=>{a&&k.reportValidity&&(k.setCustomValidity(b(e)?"":e||""),k.reportValidity())},E={},T=I(u),L=s(u),U=(V||B(u))&&h(u.value)&&h(x)||M(u)&&""===u.value||""===x||Array.isArray(x)&&!x.length,j=C.bind(null,_,r,E),R=(e,t,r,a=w.maxLength,s=w.minLength)=>{let i=e?t:r;E[_]={type:e?a:s,message:i,ref:u,...j(e?a:s,i)}};if(i?!Array.isArray(x)||!x.length:d&&(!(T||L)&&(U||l(x))||b(x)&&!x||L&&!H(o).isValid||T&&!z(o).isValid)){let{value:e,message:t}=q(d)?{value:!!d,message:d}:J(d);if(e&&(E[_]={type:w.required,message:t,ref:k,...j(w.required,t)},!r))return D(t),E}if(!U&&(!l(y)||!l(m))){let e,t;let a=J(m),s=J(y);if(l(x)||isNaN(x)){let r=u.valueAsDate||new Date(x),i=e=>new Date(new Date().toDateString()+" "+e),l="time"==u.type,n="week"==u.type;O(a.value)&&x&&(e=l?i(x)>i(a.value):n?x>a.value:r>new Date(a.value)),O(s.value)&&x&&(t=l?i(x)<i(s.value):n?x<s.value:r<new Date(s.value))}else{let r=u.valueAsNumber||(x?+x:x);l(a.value)||(e=r>a.value),l(s.value)||(t=r<s.value)}if((e||t)&&(R(!!e,a.message,s.message,w.max,w.min),!r))return D(E[_].message),E}if((f||c)&&!U&&(O(x)||i&&Array.isArray(x))){let e=J(f),t=J(c),a=!l(e.value)&&x.length>+e.value,s=!l(t.value)&&x.length<+t.value;if((a||s)&&(R(a,e.message,t.message),!r))return D(E[_].message),E}if(v&&!U&&O(x)){let{value:e,message:t}=J(v);if(P(e)&&!x.match(e)&&(E[_]={type:w.pattern,message:t,ref:u,...j(w.pattern,t)},!r))return D(t),E}if(p){if(N(p)){let e=G(await p(x,t),k);if(e&&(E[_]={...e,...j(w.validate,e.message)},!r))return D(e.message),E}else if(n(p)){let e={};for(let a in p){if(!S(e)&&!r)break;let s=G(await p[a](x,t),k,a);s&&(e={...s,...j(a,s.message)},D(s.message),r&&(E[_]=e))}if(!S(e)&&(E[_]={ref:k,...e},!r))return E}}return D(!0),E};function Q(e,t){let r=Array.isArray(t)?t:p(t)?[t]:_(t),a=1===r.length?e:function(e,t){let r=t.slice(0,-1).length,a=0;for(;a<r;)e=h(e)?a++:e[t[a++]];return e}(e,r),s=r.length-1,i=r[s];return a&&delete a[i],0!==s&&(n(a)&&S(a)||Array.isArray(a)&&function(e){for(let t in e)if(e.hasOwnProperty(t)&&!h(e[t]))return!1;return!0}(a))&&Q(e,r.slice(0,-1)),e}var X=()=>{let e=[];return{get observers(){return e},next:t=>{for(let r of e)r.next&&r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter(e=>e!==t)}}),unsubscribe:()=>{e=[]}}},Y=e=>l(e)||!u(e);function Z(e,t){if(Y(e)||Y(t))return e===t;if(i(e)&&i(t))return e.getTime()===t.getTime();let r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(let s of r){let r=e[s];if(!a.includes(s))return!1;if("ref"!==s){let e=t[s];if(i(r)&&i(e)||n(r)&&n(e)||Array.isArray(r)&&Array.isArray(e)?!Z(r,e):r!==e)return!1}}return!0}var ee=e=>"select-multiple"===e.type,et=e=>I(e)||s(e),er=e=>M(e)&&e.isConnected,ea=e=>{for(let t in e)if(N(e[t]))return!0;return!1};function es(e,t={}){let r=Array.isArray(e);if(n(e)||r)for(let r in e)Array.isArray(e[r])||n(e[r])&&!ea(e[r])?(t[r]=Array.isArray(e[r])?[]:{},es(e[r],t[r])):l(e[r])||(t[r]=!0);return t}var ei=(e,t)=>(function e(t,r,a){let s=Array.isArray(t);if(n(t)||s)for(let s in t)Array.isArray(t[s])||n(t[s])&&!ea(t[s])?h(r)||Y(a[s])?a[s]=Array.isArray(t[s])?es(t[s],[]):{...es(t[s])}:e(t[s],l(r)?{}:r[s],a[s]):a[s]=!Z(t[s],r[s]);return a})(e,t,es(t)),el=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:a})=>h(e)?e:t?""===e?NaN:e?+e:e:r&&O(e)?new Date(e):a?a(e):e;function eu(e){let t=e.ref;return(e.refs?e.refs.every(e=>e.disabled):t.disabled)?void 0:B(t)?t.files:I(t)?z(e.refs).value:ee(t)?[...t.selectedOptions].map(({value:e})=>e):s(t)?H(e.refs).value:el(h(t.value)?e.ref.value:t.value,e)}var en=(e,t,r,a)=>{let s={};for(let r of e){let e=g(t,r);e&&V(s,r,e._f)}return{criteriaMode:r,names:[...e],fields:s,shouldUseNativeValidation:a}},eo=e=>h(e)?e:P(e)?e.source:n(e)?P(e.value)?e.value.source:e.value:e;let ed="AsyncFunction";var ef=e=>(!e||!e.validate)&&!!(N(e.validate)&&e.validate.constructor.name===ed||n(e.validate)&&Object.values(e.validate).find(e=>e.constructor.name===ed)),ec=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ey(e,t,r){let a=g(e,r);if(a||p(r))return{error:a,name:r};let s=r.split(".");for(;s.length;){let a=s.join("."),i=g(t,a),l=g(e,a);if(i&&!Array.isArray(i)&&r!==a)break;if(l&&l.type)return{name:a,error:l};s.pop()}return{name:r}}var em=(e,t,r,a,s)=>!s.isOnAll&&(!r&&s.isOnTouch?!(t||e):(r?a.isOnBlur:s.isOnBlur)?!e:(r?!a.isOnChange:!s.isOnChange)||e),ev=(e,t)=>!v(g(e,t)).length&&Q(e,t);let eh={mode:F.onSubmit,reValidateMode:F.onChange,shouldFocusError:!0};function eg(e={}){let t=a.useRef(),r=a.useRef(),[u,d]=a.useState({isDirty:!1,isValidating:!1,isLoading:N(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:N(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...function(e={}){let t,r={...eh,...e},a={submitCount:0,isDirty:!1,isLoading:N(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:r.errors||{},disabled:r.disabled||!1},u={},d=(n(r.defaultValues)||n(r.values))&&m(r.defaultValues||r.values)||{},c=r.shouldUnregister?{}:m(d),p={action:!1,mount:!1,watch:!1},_={mount:new Set,unMount:new Set,array:new Set,watch:new Set},w=0,x={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},k={values:X(),array:X(),state:X()},C=T(r.mode),q=T(r.reValidateMode),I=r.criteriaMode===F.all,P=e=>t=>{clearTimeout(w),w=setTimeout(e,t)},R=async t=>{if(!e.disabled&&(x.isValid||t)){let e=r.resolver?S((await J()).errors):await ea(u,!0);e!==a.isValid&&k.state.next({isValid:e})}},$=(t,r)=>{!e.disabled&&(x.isValidating||x.validatingFields)&&((t||Array.from(_.mount)).forEach(e=>{e&&(r?V(a.validatingFields,e,r):Q(a.validatingFields,e))}),k.state.next({validatingFields:a.validatingFields,isValidating:!S(a.validatingFields)}))},H=(e,t)=>{V(a.errors,e,t),k.state.next({errors:a.errors})},W=(e,t,r,a)=>{let s=g(u,e);if(s){let i=g(c,e,h(r)?g(d,e):r);h(i)||a&&a.defaultChecked||t?V(c,e,t?i:eu(s._f)):eg(e,i),p.mount&&R()}},z=(t,r,s,i,l)=>{let n=!1,o=!1,f={name:t};if(!e.disabled){let e=!!(g(u,t)&&g(u,t)._f&&g(u,t)._f.disabled);if(!s||i){x.isDirty&&(o=a.isDirty,a.isDirty=f.isDirty=es(),n=o!==f.isDirty);let s=e||Z(g(d,t),r);o=!!(!e&&g(a.dirtyFields,t)),s||e?Q(a.dirtyFields,t):V(a.dirtyFields,t,!0),f.dirtyFields=a.dirtyFields,n=n||x.dirtyFields&&!s!==o}if(s){let e=g(a.touchedFields,t);e||(V(a.touchedFields,t,s),f.touchedFields=a.touchedFields,n=n||x.touchedFields&&e!==s)}n&&l&&k.state.next(f)}return n?f:{}},G=(r,s,i,l)=>{let u=g(a.errors,r),n=x.isValid&&b(s)&&a.isValid!==s;if(e.delayError&&i?(t=P(()=>H(r,i)))(e.delayError):(clearTimeout(w),t=null,i?V(a.errors,r,i):Q(a.errors,r)),(i?!Z(u,i):u)||!S(l)||n){let e={...l,...n&&b(s)?{isValid:s}:{},errors:a.errors,name:r};a={...a,...e},k.state.next(e)}},J=async e=>{$(e,!0);let t=await r.resolver(c,r.context,en(e||_.mount,u,r.criteriaMode,r.shouldUseNativeValidation));return $(e),t},Y=async e=>{let{errors:t}=await J(e);if(e)for(let r of e){let e=g(t,r);e?V(a.errors,r,e):Q(a.errors,r)}else a.errors=t;return t},ea=async(e,t,s={valid:!0})=>{for(let i in e){let l=e[i];if(l){let{_f:e,...u}=l;if(e){let u=_.array.has(e.name),n=l._f&&ef(l._f);n&&x.validatingFields&&$([i],!0);let o=await K(l,c,I,r.shouldUseNativeValidation&&!t,u);if(n&&x.validatingFields&&$([i]),o[e.name]&&(s.valid=!1,t))break;t||(g(o,e.name)?u?j(a.errors,o,e.name):V(a.errors,e.name,o[e.name]):Q(a.errors,e.name))}S(u)||await ea(u,t,s)}}return s.valid},es=(t,r)=>!e.disabled&&(t&&r&&V(c,t,r),!Z(eF(),d)),ed=(e,t,r)=>E(e,_,{...p.mount?c:h(t)?d:O(e)?{[e]:t}:t},r,t),eg=(e,t,r={})=>{let a=g(u,e),i=t;if(a){let r=a._f;r&&(r.disabled||V(c,e,el(t,r)),i=M(r.ref)&&l(t)?"":t,ee(r.ref)?[...r.ref.options].forEach(e=>e.selected=i.includes(e.value)):r.refs?s(r.ref)?r.refs.length>1?r.refs.forEach(e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(i)?!!i.find(t=>t===e.value):i===e.value)):r.refs[0]&&(r.refs[0].checked=!!i):r.refs.forEach(e=>e.checked=e.value===i):B(r.ref)?r.ref.value="":(r.ref.value=i,r.ref.type||k.values.next({name:e,values:{...c}})))}(r.shouldDirty||r.shouldTouch)&&z(e,i,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&eA(e)},eb=(e,t,r)=>{for(let a in t){let s=t[a],l=`${e}.${a}`,o=g(u,l);(_.array.has(e)||n(s)||o&&!o._f)&&!i(s)?eb(l,s,r):eg(l,s,r)}},ep=(e,t,r={})=>{let s=g(u,e),i=_.array.has(e),n=m(t);V(c,e,n),i?(k.array.next({name:e,values:{...c}}),(x.isDirty||x.dirtyFields)&&r.shouldDirty&&k.state.next({name:e,dirtyFields:ei(d,c),isDirty:es(e,n)})):!s||s._f||l(n)?eg(e,n,r):eb(e,n,r),L(e,_)&&k.state.next({...a}),k.values.next({name:p.mount?e:void 0,values:{...c}})},e_=async s=>{p.mount=!0;let l=s.target,n=l.name,d=!0,f=g(u,n),y=e=>{d=Number.isNaN(e)||i(e)&&isNaN(e.getTime())||Z(e,g(c,n,e))};if(f){let i,m;let v=l.type?eu(f._f):o(s),h=s.type===A.BLUR||s.type===A.FOCUS_OUT,b=!ec(f._f)&&!r.resolver&&!g(a.errors,n)&&!f._f.deps||em(h,g(a.touchedFields,n),a.isSubmitted,q,C),p=L(n,_,h);V(c,n,v),h?(f._f.onBlur&&f._f.onBlur(s),t&&t(0)):f._f.onChange&&f._f.onChange(s);let F=z(n,v,h,!1),w=!S(F)||p;if(h||k.values.next({name:n,type:s.type,values:{...c}}),b)return x.isValid&&("onBlur"===e.mode?h&&R():R()),w&&k.state.next({name:n,...p?{}:F});if(!h&&p&&k.state.next({...a}),r.resolver){let{errors:e}=await J([n]);if(y(v),d){let t=ey(a.errors,u,n),r=ey(e,u,t.name||n);i=r.error,n=r.name,m=S(e)}}else $([n],!0),i=(await K(f,c,I,r.shouldUseNativeValidation))[n],$([n]),y(v),d&&(i?m=!1:x.isValid&&(m=await ea(u,!0)));d&&(f._f.deps&&eA(f._f.deps),G(n,m,i,F))}},eV=(e,t)=>{if(g(a.errors,t)&&e.focus)return e.focus(),1},eA=async(e,t={})=>{let s,i;let l=D(e);if(r.resolver){let t=await Y(h(e)?e:l);s=S(t),i=e?!l.some(e=>g(t,e)):s}else e?((i=(await Promise.all(l.map(async e=>{let t=g(u,e);return await ea(t&&t._f?{[e]:t}:t)}))).every(Boolean))||a.isValid)&&R():i=s=await ea(u);return k.state.next({...!O(e)||x.isValid&&s!==a.isValid?{}:{name:e},...r.resolver||!e?{isValid:s}:{},errors:a.errors}),t.shouldFocus&&!i&&U(u,eV,e?l:_.mount),i},eF=e=>{let t={...p.mount?c:d};return h(e)?t:O(e)?g(t,e):e.map(e=>g(t,e))},ew=(e,t)=>({invalid:!!g((t||a).errors,e),isDirty:!!g((t||a).dirtyFields,e),error:g((t||a).errors,e),isValidating:!!g(a.validatingFields,e),isTouched:!!g((t||a).touchedFields,e)}),ex=(e,t,r)=>{let s=(g(u,e,{_f:{}})._f||{}).ref,{ref:i,message:l,type:n,...o}=g(a.errors,e)||{};V(a.errors,e,{...o,...t,ref:s}),k.state.next({name:e,errors:a.errors,isValid:!1}),r&&r.shouldFocus&&s&&s.focus&&s.focus()},eS=(e,t={})=>{for(let s of e?D(e):_.mount)_.mount.delete(s),_.array.delete(s),t.keepValue||(Q(u,s),Q(c,s)),t.keepError||Q(a.errors,s),t.keepDirty||Q(a.dirtyFields,s),t.keepTouched||Q(a.touchedFields,s),t.keepIsValidating||Q(a.validatingFields,s),r.shouldUnregister||t.keepDefaultValue||Q(d,s);k.values.next({values:{...c}}),k.state.next({...a,...t.keepDirty?{isDirty:es()}:{}}),t.keepIsValid||R()},ek=({disabled:e,name:t,field:r,fields:a,value:s})=>{if(b(e)&&p.mount||e){let i=e?void 0:h(s)?eu(r?r._f:g(a,t)._f):s;V(c,t,i),z(t,i,!1,!1,!0)}},eD=(t,a={})=>{let s=g(u,t),i=b(a.disabled)||b(e.disabled);return V(u,t,{...s||{},_f:{...s&&s._f?s._f:{ref:{name:t}},name:t,mount:!0,...a}}),_.mount.add(t),s?ek({field:s,disabled:b(a.disabled)?a.disabled:e.disabled,name:t,value:a.value}):W(t,!0,a.value),{...i?{disabled:a.disabled||e.disabled}:{},...r.progressive?{required:!!a.required,min:eo(a.min),max:eo(a.max),minLength:eo(a.minLength),maxLength:eo(a.maxLength),pattern:eo(a.pattern)}:{},name:t,onChange:e_,onBlur:e_,ref:e=>{if(e){eD(t,a),s=g(u,t);let r=h(e.value)&&e.querySelectorAll&&e.querySelectorAll("input,select,textarea")[0]||e,i=et(r),l=s._f.refs||[];(i?l.find(e=>e===r):r===s._f.ref)||(V(u,t,{_f:{...s._f,...i?{refs:[...l.filter(er),r,...Array.isArray(g(d,t))?[{}]:[]],ref:{type:r.type,name:t}}:{ref:r}}}),W(t,!1,void 0,r))}else(s=g(u,t,{}))._f&&(s._f.mount=!1),(r.shouldUnregister||a.shouldUnregister)&&!(f(_.array,t)&&p.action)&&_.unMount.add(t)}}},eO=()=>r.shouldFocusError&&U(u,eV,_.mount),eE=(e,t)=>async s=>{let i;s&&(s.preventDefault&&s.preventDefault(),s.persist&&s.persist());let l=m(c);if(k.state.next({isSubmitting:!0}),r.resolver){let{errors:e,values:t}=await J();a.errors=e,l=t}else await ea(u);if(Q(a.errors,"root"),S(a.errors)){k.state.next({errors:{}});try{await e(l,s)}catch(e){i=e}}else t&&await t({...a.errors},s),eO(),setTimeout(eO);if(k.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:S(a.errors)&&!i,submitCount:a.submitCount+1,errors:a.errors}),i)throw i},eC=(t,r={})=>{let s=t?m(t):d,i=m(s),l=S(t),n=l?d:i;if(r.keepDefaultValues||(d=s),!r.keepValues){if(r.keepDirtyValues)for(let e of Array.from(new Set([..._.mount,...Object.keys(ei(d,c))])))g(a.dirtyFields,e)?V(n,e,g(c,e)):ep(e,g(n,e));else{if(y&&h(t))for(let e of _.mount){let t=g(u,e);if(t&&t._f){let e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(M(e)){let t=e.closest("form");if(t){t.reset();break}}}}u={}}c=e.shouldUnregister?r.keepDefaultValues?m(d):{}:m(n),k.array.next({values:{...n}}),k.values.next({values:{...n}})}_={mount:r.keepDirtyValues?_.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},p.mount=!x.isValid||!!r.keepIsValid||!!r.keepDirtyValues,p.watch=!!e.shouldUnregister,k.state.next({submitCount:r.keepSubmitCount?a.submitCount:0,isDirty:!l&&(r.keepDirty?a.isDirty:!!(r.keepDefaultValues&&!Z(t,d))),isSubmitted:!!r.keepIsSubmitted&&a.isSubmitted,dirtyFields:l?{}:r.keepDirtyValues?r.keepDefaultValues&&c?ei(d,c):a.dirtyFields:r.keepDefaultValues&&t?ei(d,t):r.keepDirty?a.dirtyFields:{},touchedFields:r.keepTouched?a.touchedFields:{},errors:r.keepErrors?a.errors:{},isSubmitSuccessful:!!r.keepIsSubmitSuccessful&&a.isSubmitSuccessful,isSubmitting:!1})},eT=(e,t)=>eC(N(e)?e(c):e,t);return{control:{register:eD,unregister:eS,getFieldState:ew,handleSubmit:eE,setError:ex,_executeSchema:J,_getWatch:ed,_getDirty:es,_updateValid:R,_removeUnmounted:()=>{for(let e of _.unMount){let t=g(u,e);t&&(t._f.refs?t._f.refs.every(e=>!er(e)):!er(t._f.ref))&&eS(e)}_.unMount=new Set},_updateFieldArray:(t,r=[],s,i,l=!0,n=!0)=>{if(i&&s&&!e.disabled){if(p.action=!0,n&&Array.isArray(g(u,t))){let e=s(g(u,t),i.argA,i.argB);l&&V(u,t,e)}if(n&&Array.isArray(g(a.errors,t))){let e=s(g(a.errors,t),i.argA,i.argB);l&&V(a.errors,t,e),ev(a.errors,t)}if(x.touchedFields&&n&&Array.isArray(g(a.touchedFields,t))){let e=s(g(a.touchedFields,t),i.argA,i.argB);l&&V(a.touchedFields,t,e)}x.dirtyFields&&(a.dirtyFields=ei(d,c)),k.state.next({name:t,isDirty:es(t,r),dirtyFields:a.dirtyFields,errors:a.errors,isValid:a.isValid})}else V(c,t,r)},_updateDisabledField:ek,_getFieldArray:t=>v(g(p.mount?c:d,t,e.shouldUnregister?g(d,t,[]):[])),_reset:eC,_resetDefaultValues:()=>N(r.defaultValues)&&r.defaultValues().then(e=>{eT(e,r.resetOptions),k.state.next({isLoading:!1})}),_updateFormState:e=>{a={...a,...e}},_disableForm:e=>{b(e)&&(k.state.next({disabled:e}),U(u,(t,r)=>{let a=g(u,r);a&&(t.disabled=a._f.disabled||e,Array.isArray(a._f.refs)&&a._f.refs.forEach(t=>{t.disabled=a._f.disabled||e}))},0,!1))},_subjects:k,_proxyFormState:x,_setErrors:e=>{a.errors=e,k.state.next({errors:a.errors,isValid:!1})},get _fields(){return u},get _formValues(){return c},get _state(){return p},set _state(value){p=value},get _defaultValues(){return d},get _names(){return _},set _names(value){_=value},get _formState(){return a},set _formState(value){a=value},get _options(){return r},set _options(value){r={...r,...value}}},trigger:eA,register:eD,handleSubmit:eE,watch:(e,t)=>N(e)?k.values.subscribe({next:r=>e(ed(void 0,t),r)}):ed(e,t,!0),setValue:ep,getValues:eF,reset:eT,resetField:(e,t={})=>{g(u,e)&&(h(t.defaultValue)?ep(e,m(g(d,e))):(ep(e,t.defaultValue),V(d,e,m(t.defaultValue))),t.keepTouched||Q(a.touchedFields,e),t.keepDirty||(Q(a.dirtyFields,e),a.isDirty=t.defaultValue?es(e,m(g(d,e))):es()),!t.keepError&&(Q(a.errors,e),x.isValid&&R()),k.state.next({...a}))},clearErrors:e=>{e&&D(e).forEach(e=>Q(a.errors,e)),k.state.next({errors:e?a.errors:{}})},unregister:eS,setError:ex,setFocus:(e,t={})=>{let r=g(u,e),a=r&&r._f;if(a){let e=a.refs?a.refs[0]:a.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:ew}}(e),formState:u});let c=t.current.control;return c._options=e,!function(e){let t=a.useRef(e);t.current=e,a.useEffect(()=>{let r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}({subject:c._subjects.state,next:e=>{k(e,c._proxyFormState,c._updateFormState,!0)&&d({...c._formState})}}),a.useEffect(()=>c._disableForm(e.disabled),[c,e.disabled]),a.useEffect(()=>{if(c._proxyFormState.isDirty){let e=c._getDirty();e!==u.isDirty&&c._subjects.state.next({isDirty:e})}},[c,u.isDirty]),a.useEffect(()=>{e.values&&!Z(e.values,r.current)?(c._reset(e.values,c._options.resetOptions),r.current=e.values,d(e=>({...e}))):c._resetDefaultValues()},[e.values,c]),a.useEffect(()=>{e.errors&&c._setErrors(e.errors)},[e.errors,c]),a.useEffect(()=>{c._state.mount||(c._updateValid(),c._state.mount=!0),c._state.watch&&(c._state.watch=!1,c._subjects.state.next({...c._formState})),c._removeUnmounted()}),a.useEffect(()=>{e.shouldUnregister&&c._subjects.values.next({values:c._getWatch()})},[e.shouldUnregister,c]),a.useEffect(()=>{t.current&&(t.current.watch=t.current.watch.bind({}))},[u]),t.current.formState=x(u,c),t.current}}}]);