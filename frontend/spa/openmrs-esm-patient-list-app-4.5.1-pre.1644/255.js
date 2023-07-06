/*! For license information please see 255.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_openmrs_esm_patient_list_app=globalThis.webpackChunk_openmrs_esm_patient_list_app||[]).push([[255],{452:(e,t,n)=>{var r=n(268),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=r.useState,a=r.useEffect,s=r.useLayoutEffect,u=r.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(e){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),o=r[0].inst,l=r[1];return s((function(){o.value=n,o.getSnapshot=t,c(o)&&l({inst:o})}),[e,n,t]),a((function(){return c(o)&&l({inst:o}),e((function(){c(o)&&l({inst:o})}))}),[e]),u(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:l},3100:(e,t,n)=>{e.exports=n(452)},4729:(e,t,n)=>{n.d(t,{$l:()=>u,BN:()=>x,DY:()=>o,J$:()=>U,JN:()=>h,LI:()=>R,PM:()=>d,W6:()=>O,i_:()=>s,ko:()=>Z,kw:()=>k,mf:()=>l,o8:()=>c,qC:()=>V,s6:()=>H,sj:()=>I,u3:()=>N,u_:()=>A,w6:()=>T,xD:()=>z});var r=n(268);const o=new WeakMap,i={},a=()=>{},s=a(),u=Object,c=e=>e===s,l=e=>"function"==typeof e,d=(e,t)=>({...e,...t}),f="undefined",g=typeof window!=f,p=typeof document!=f,h=(e,t)=>{const n=o.get(e);return[()=>e.get(t)||i,r=>{const o=e.get(t);n[5](t,d(o,r),o||i)},n[6]]},w=new WeakMap;let v=0;const _=e=>{const t=typeof e,n=e&&e.constructor,r=n==Date;let o,i;if(u(e)!==e||r||n==RegExp)o=r?e.toJSON():"symbol"==t?e.toString():"string"==t?JSON.stringify(e):""+e;else{if(o=w.get(e),o)return o;if(o=++v+"~",w.set(e,o),n==Array){for(o="@",i=0;i<e.length;i++)o+=_(e[i])+",";w.set(e,o)}if(n==u){o="#";const t=u.keys(e).sort();for(;!c(i=t.pop());)c(e[i])||(o+=i+":"+_(e[i])+",");w.set(e,o)}}return o};let E=!0;const[y,m]=g&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[a,a],b={isOnline:()=>E,isVisible:()=>{const e=p&&document.visibilityState;return c(e)||"hidden"!==e}},S={initFocus:e=>(p&&document.addEventListener("visibilitychange",e),y("focus",e),()=>{p&&document.removeEventListener("visibilitychange",e),m("focus",e)}),initReconnect:e=>{const t=()=>{E=!0,e()},n=()=>{E=!1};return y("online",t),y("offline",n),()=>{m("online",t),m("offline",n)}}},T=!r.useId,O=!g||"Deno"in window,k=e=>g&&typeof window.requestAnimationFrame!=f?window.requestAnimationFrame(e):setTimeout(e,1),R=O?r.useEffect:r.useLayoutEffect,C="undefined"!=typeof navigator&&navigator.connection,L=!O&&C&&(["slow-2g","2g"].includes(C.effectiveType)||C.saveData),V=e=>{if(l(e))try{e=e()}catch(t){e=""}const t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?_(e):"",t]};let D=0;const N=()=>++D;var I={__proto__:null,FOCUS_EVENT:0,RECONNECT_EVENT:1,MUTATE_EVENT:2};async function x(...e){const[t,n,r,i]=e,a=d({populateCache:!0,throwOnError:!0},"boolean"==typeof i?{revalidate:i}:i||{});let u=a.populateCache;const f=a.rollbackOnError;let g=a.optimisticData;const p=!1!==a.revalidate,w=a.throwOnError;if(l(n)){const e=n,r=[],o=t.keys();for(let n=o.next();!n.done;n=o.next()){const o=n.value;!o.startsWith("$inf$")&&e(t.get(o)._k)&&r.push(o)}return Promise.all(r.map(v))}return v(n);async function v(n){const[i]=V(n);if(!i)return;const[a,d]=h(t,i),[v,_,E]=o.get(t),y=v[i],m=()=>p&&(delete E[i],y&&y[0])?y[0](2).then((()=>a().data)):a().data;if(e.length<3)return m();let b,S=r;const T=N();_[i]=[T,0];const O=!c(g),k=a(),R=k.data,C=k._c,L=c(C)?R:C;if(O&&(g=l(g)?g(L):g,d({data:g,_c:L})),l(S))try{S=S(L)}catch(e){b=e}if(S&&l(S.then)){if(S=await S.catch((e=>{b=e})),T!==_[i][0]){if(b)throw b;return S}b&&O&&(e=>"function"==typeof f?f(e):!1!==f)(b)&&(u=!0,S=L,d({data:S,_c:s}))}u&&(b||(l(u)&&(S=u(S,L)),d({data:S,_c:s}))),_[i][1]=N();const D=await m();if(d({_c:s}),!b)return u?D:S;if(w)throw b}}const M=(e,t)=>{for(const n in e)e[n][0]&&e[n][0](t)},P=(e,t)=>{if(!o.has(e)){const n=d(S,t),r={},i=x.bind(s,e);let u=a;const c={},l=(e,t)=>{const n=c[e]||[];return c[e]=n,n.push(t),()=>n.splice(n.indexOf(t),1)},f=(t,n,r)=>{e.set(t,n);const o=c[t];if(o)for(let e=o.length;e--;)o[e](r,n)},g=()=>{if(!o.has(e)&&(o.set(e,[r,{},{},{},i,f,l]),!O)){const t=n.initFocus(setTimeout.bind(s,M.bind(s,r,0))),i=n.initReconnect(setTimeout.bind(s,M.bind(s,r,1)));u=()=>{t&&t(),i&&i(),o.delete(e)}}};return g(),[e,i,g,u]}return[e,o.get(e)[4]]},[W,F]=P(new Map),A=d({onLoadingSlow:a,onSuccess:a,onError:a,onErrorRetry:(e,t,n,r,o)=>{const i=n.errorRetryCount,a=o.retryCount,s=~~((Math.random()+.5)*(1<<(a<8?a:8)))*n.errorRetryInterval;!c(i)&&a>i||setTimeout(r,s,o)},onDiscarded:a,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:L?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:L?5e3:3e3,compare:(e,t)=>_(e)==_(t),isPaused:()=>!1,cache:W,mutate:F,fallback:{}},b),j=(e,t)=>{const n=d(e,t);if(t){const{use:r,fallback:o}=e,{use:i,fallback:a}=t;r&&i&&(n.use=r.concat(i)),o&&a&&(n.fallback=d(o,a))}return n},J=(0,r.createContext)({}),U=e=>{const{value:t}=e,n=(0,r.useContext)(J),o=l(t),i=(0,r.useMemo)((()=>o?t(n):t),[o,n,t]),a=(0,r.useMemo)((()=>o?i:j(n,i)),[o,n,i]),u=i&&i.provider,[c]=(0,r.useState)((()=>u?P(u(a.cache||W),i):s));return c&&(a.cache=c[0],a.mutate=c[1]),R((()=>{if(c)return c[2]&&c[2](),c[3]}),[]),(0,r.createElement)(J.Provider,d(e,{value:a}))},$=g&&window.__SWR_DEVTOOLS_USE__,q=$?window.__SWR_DEVTOOLS_USE__:[],B=e=>l(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],Y=q.concat((e=>(t,n,r)=>e(t,n&&((...e)=>{const r=V(t)[0],[,,,i]=o.get(W),a=i[r];return a?(delete i[r],a):n(...e)}),r))),H=e=>function(...t){const n=d(A,(0,r.useContext)(J)),[o,i,a]=B(t),s=j(n,a);let u=e;const{use:c}=s,l=(c||[]).concat(Y);for(let e=l.length;e--;)u=l[e](u);return u(o,i||s.fetcher||null,s)},Z=(e,t,n)=>{const r=t[e]||(t[e]=[]);return r.push(n),()=>{const e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}},z=(e,t)=>(...n)=>{const[r,o,i]=B(n),a=(i.use||[]).concat(t);return e(r,o,{...i,use:a})};$&&(window.__SWR_DEVTOOLS_REACT__=r)},3255:(e,t,n)=>{n.d(t,{ZP:()=>s});var r=n(268),o=n(3100),i=n(4729);const a={dedupe:!0};i.$l.defineProperty(i.J$,"defaultValue",{value:i.u_});var s=(0,i.s6)(((e,t,n)=>{const{cache:s,compare:u,suspense:c,fallbackData:l,revalidateOnMount:d,refreshInterval:f,refreshWhenHidden:g,refreshWhenOffline:p,keepPreviousData:h}=n,[w,v,_]=i.DY.get(s),[E,y]=(0,i.qC)(e),m=(0,r.useRef)(!1),b=(0,r.useRef)(!1),S=(0,r.useRef)(E),T=(0,r.useRef)(t),O=(0,r.useRef)(n),k=()=>O.current,R=()=>k().isVisible()&&k().isOnline(),[C,L,V]=(0,i.JN)(s,E),D=(0,r.useRef)({}).current,N=(0,i.o8)(l)?n.fallback[E]:l,I=(e,t)=>{let n=!0;for(const r in D){const o=r;u(t[o],e[o])||"data"===o&&(0,i.o8)(e[o])&&u(t[o],J)||(n=!1)}return n},x=(0,r.useMemo)((()=>{const e=!!E&&!!t&&((0,i.o8)(d)?!k().isPaused()&&!c:d),n=()=>{const t=C(),n=(0,i.PM)(t);return delete n._k,e?{isValidating:!0,isLoading:!0,...n}:n};let r=n();return()=>{const e=n();return I(e,r)?r:r=e}}),[s,E]),M=(0,o.useSyncExternalStore)((0,r.useCallback)((e=>V(E,((t,n)=>{I(t,n)||e()}))),[s,E]),x,x),P=!m.current,W=M.data,F=(0,i.o8)(W)?N:W,A=M.error,j=(0,r.useRef)(F),J=h?(0,i.o8)(W)?j.current:W:F,U=P&&!(0,i.o8)(d)?d:!k().isPaused()&&(c?!(0,i.o8)(F)&&n.revalidateIfStale:(0,i.o8)(F)||n.revalidateIfStale),$=!!(E&&t&&P&&U),q=(0,i.o8)(M.isValidating)?$:M.isValidating,B=(0,i.o8)(M.isLoading)?$:M.isLoading,Y=(0,r.useCallback)((async e=>{const t=T.current;if(!E||!t||b.current||k().isPaused())return!1;let r,o,a=!0;const s=e||{},c=!_[E]||!s.dedupe,l=()=>i.w6?!b.current&&E===S.current&&m.current:E===S.current,d={isValidating:!1,isLoading:!1},f=()=>{L(d)},g=()=>{const e=_[E];e&&e[1]===o&&delete _[E]},p={isValidating:!0};(0,i.o8)(C().data)&&(p.isLoading=!0);try{if(c&&(L(p),n.loadingTimeout&&(0,i.o8)(C().data)&&setTimeout((()=>{a&&l()&&k().onLoadingSlow(E,n)}),n.loadingTimeout),_[E]=[t(y),(0,i.u3)()]),[r,o]=_[E],r=await r,c&&setTimeout(g,n.dedupingInterval),!_[E]||_[E][1]!==o)return c&&l()&&k().onDiscarded(E),!1;d.error=i.i_;const e=v[E];if(!(0,i.o8)(e)&&(o<=e[0]||o<=e[1]||0===e[1]))return f(),c&&l()&&k().onDiscarded(E),!1;const s=C().data;d.data=u(s,r)?s:r,c&&l()&&k().onSuccess(r,E,n)}catch(e){g();const t=k(),{shouldRetryOnError:n}=t;t.isPaused()||(d.error=e,c&&l()&&(t.onError(e,E,t),(!0===n||(0,i.mf)(n)&&n(e))&&R()&&t.onErrorRetry(e,E,t,Y,{retryCount:(s.retryCount||0)+1,dedupe:!0})))}return a=!1,f(),!0}),[E,s]),H=(0,r.useCallback)(((...e)=>(0,i.BN)(s,S.current,...e)),[]);if((0,i.LI)((()=>{T.current=t,O.current=n,(0,i.o8)(W)||(j.current=W)})),(0,i.LI)((()=>{if(!E)return;const e=Y.bind(i.i_,a);let t=0;const n=(0,i.ko)(E,w,(n=>{if(n==i.sj.FOCUS_EVENT){const n=Date.now();k().revalidateOnFocus&&n>t&&R()&&(t=n+k().focusThrottleInterval,e())}else if(n==i.sj.RECONNECT_EVENT)k().revalidateOnReconnect&&R()&&e();else if(n==i.sj.MUTATE_EVENT)return Y()}));return b.current=!1,S.current=E,m.current=!0,L({_k:y}),U&&((0,i.o8)(F)||i.W6?e():(0,i.kw)(e)),()=>{b.current=!0,n()}}),[E]),(0,i.LI)((()=>{let e;function t(){const t=(0,i.mf)(f)?f(F):f;t&&-1!==e&&(e=setTimeout(n,t))}function n(){C().error||!g&&!k().isVisible()||!p&&!k().isOnline()?t():Y(a).then(t)}return t(),()=>{e&&(clearTimeout(e),e=-1)}}),[f,g,p,E]),(0,r.useDebugValue)(J),c&&(0,i.o8)(F)&&E){if(!i.w6&&i.W6)throw new Error("Fallback data is required when using suspense in SSR.");throw T.current=t,O.current=n,b.current=!1,(0,i.o8)(A)?Y(a):A}return{mutate:H,get data(){return D.data=!0,J},get error(){return D.error=!0,A},get isValidating(){return D.isValidating=!0,q},get isLoading(){return D.isLoading=!0,B}}}))}}]);