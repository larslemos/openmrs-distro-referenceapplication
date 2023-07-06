/*! For license information please see 890.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_openmrs_esm_patient_test_results_app=globalThis.webpackChunk_openmrs_esm_patient_test_results_app||[]).push([[890],{452:(t,e,n)=>{var r=n(268),o="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e},a=r.useState,c=r.useEffect,u=r.useLayoutEffect,i=r.useDebugValue;function s(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!o(t,n)}catch(t){return!0}}var f="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(t,e){return e()}:function(t,e){var n=e(),r=a({inst:{value:n,getSnapshot:e}}),o=r[0].inst,f=r[1];return u((function(){o.value=n,o.getSnapshot=e,s(o)&&f({inst:o})}),[t,n,e]),c((function(){return s(o)&&f({inst:o}),t((function(){s(o)&&f({inst:o})}))}),[t]),i(n),n};e.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:f},3100:(t,e,n)=>{t.exports=n(452)},3761:(t,e,n)=>{n.d(e,{Z:()=>u});var r=n(6300);var o=n(8896),a=n(3549);function c(t){var e=this.__data__=new r.Z(t);this.size=e.size}c.prototype.clear=function(){this.__data__=new r.Z,this.size=0},c.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},c.prototype.get=function(t){return this.__data__.get(t)},c.prototype.has=function(t){return this.__data__.has(t)},c.prototype.set=function(t,e){var n=this.__data__;if(n instanceof r.Z){var c=n.__data__;if(!o.Z||c.length<199)return c.push([t,e]),this.size=++n.size,this;n=this.__data__=new a.Z(c)}return n.set(t,e),this.size=n.size,this};const u=c},8282:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n(3221).Z.Uint8Array},7178:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(4405),o=n(7885),a=n(2143),c=n(6401),u=n(8532),i=Object.prototype.hasOwnProperty;const s=function(t,e){var n=(0,o.Z)(t),s=!n&&(0,r.Z)(t),f=!n&&!s&&(0,a.Z)(t),l=!n&&!s&&!f&&(0,u.Z)(t),d=n||s||f||l,v=d?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],p=v.length;for(var Z in t)!e&&!i.call(t,Z)||d&&("length"==Z||f&&("offset"==Z||"parent"==Z)||l&&("buffer"==Z||"byteLength"==Z||"byteOffset"==Z)||(0,c.Z)(Z,p))||v.push(Z);return v}},5598:(t,e,n)=>{n.d(e,{Z:()=>r});const r=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},5810:(t,e,n)=>{n.d(e,{Z:()=>r});const r=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}},9395:(t,e,n)=>{n.d(e,{Z:()=>r});const r=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}},9523:(t,e,n)=>{n.d(e,{Z:()=>a});var r=n(858),o=n(7969);const a=function(t,e){for(var n=0,a=(e=(0,r.Z)(e,t)).length;null!=t&&n<a;)t=t[(0,o.Z)(e[n++])];return n&&n==a?t:void 0}},2938:(t,e,n)=>{n.d(e,{Z:()=>a});var r=n(5810),o=n(7885);const a=function(t,e,n){var a=e(t);return(0,o.Z)(t)?a:(0,r.Z)(a,n(t))}},6008:(t,e,n)=>{n.d(e,{Z:()=>T});var r=n(3761),o=n(463),a=n(9395),c=n(1749);const u=function(t,e,n,r,u,i){var s=1&n,f=t.length,l=e.length;if(f!=l&&!(s&&l>f))return!1;var d=i.get(t),v=i.get(e);if(d&&v)return d==e&&v==t;var p=-1,Z=!0,b=2&n?new o.Z:void 0;for(i.set(t,e),i.set(e,t);++p<f;){var y=t[p],h=e[p];if(r)var g=s?r(h,y,p,e,t,i):r(y,h,p,t,e,i);if(void 0!==g){if(g)continue;Z=!1;break}if(b){if(!(0,a.Z)(e,(function(t,e){if(!(0,c.Z)(b,e)&&(y===t||u(y,t,n,r,i)))return b.push(e)}))){Z=!1;break}}else if(y!==h&&!u(y,h,n,r,i)){Z=!1;break}}return i.delete(t),i.delete(e),Z};var i=n(187),s=n(8282),f=n(8804);const l=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n};var d=n(3249),v=i.Z?i.Z.prototype:void 0,p=v?v.valueOf:void 0;var Z=n(7245),b=Object.prototype.hasOwnProperty;var y=n(2263),h=n(7885),g=n(2143),_=n(8532),w="[object Arguments]",j="[object Array]",m="[object Object]",O=Object.prototype.hasOwnProperty;const E=function(t,e,n,o,a,c){var i=(0,h.Z)(t),v=(0,h.Z)(e),E=i?j:(0,y.Z)(t),S=v?j:(0,y.Z)(e),T=(E=E==w?m:E)==m,k=(S=S==w?m:S)==m,A=E==S;if(A&&(0,g.Z)(t)){if(!(0,g.Z)(e))return!1;i=!0,T=!1}if(A&&!T)return c||(c=new r.Z),i||(0,_.Z)(t)?u(t,e,n,o,a,c):function(t,e,n,r,o,a,c){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!a(new s.Z(t),new s.Z(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return(0,f.Z)(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var i=l;case"[object Set]":var v=1&r;if(i||(i=d.Z),t.size!=e.size&&!v)return!1;var Z=c.get(t);if(Z)return Z==e;r|=2,c.set(t,e);var b=u(i(t),i(e),r,o,a,c);return c.delete(t),b;case"[object Symbol]":if(p)return p.call(t)==p.call(e)}return!1}(t,e,E,n,o,a,c);if(!(1&n)){var L=T&&O.call(t,"__wrapped__"),R=k&&O.call(e,"__wrapped__");if(L||R){var x=L?t.value():t,C=R?e.value():e;return c||(c=new r.Z),a(x,C,n,o,c)}}return!!A&&(c||(c=new r.Z),function(t,e,n,r,o,a){var c=1&n,u=(0,Z.Z)(t),i=u.length;if(i!=(0,Z.Z)(e).length&&!c)return!1;for(var s=i;s--;){var f=u[s];if(!(c?f in e:b.call(e,f)))return!1}var l=a.get(t),d=a.get(e);if(l&&d)return l==e&&d==t;var v=!0;a.set(t,e),a.set(e,t);for(var p=c;++s<i;){var y=t[f=u[s]],h=e[f];if(r)var g=c?r(h,y,f,e,t,a):r(y,h,f,t,e,a);if(!(void 0===g?y===h||o(y,h,n,r,a):g)){v=!1;break}p||(p="constructor"==f)}if(v&&!p){var _=t.constructor,w=e.constructor;_==w||!("constructor"in t)||!("constructor"in e)||"function"==typeof _&&_ instanceof _&&"function"==typeof w&&w instanceof w||(v=!1)}return a.delete(t),a.delete(e),v}(t,e,n,o,a,c))};var S=n(3391);const T=function t(e,n,r,o,a){return e===n||(null==e||null==n||!(0,S.Z)(e)&&!(0,S.Z)(n)?e!=e&&n!=n:E(e,n,r,o,t,a))}},7393:(t,e,n)=>{n.d(e,{Z:()=>m});var r=n(3761),o=n(6008);var a=n(3122);const c=function(t){return t==t&&!(0,a.Z)(t)};var u=n(649);const i=function(t,e){return function(n){return null!=n&&n[t]===e&&(void 0!==e||t in Object(n))}},s=function(t){var e=function(t){for(var e=(0,u.Z)(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,c(o)]}return e}(t);return 1==e.length&&e[0][2]?i(e[0][0],e[0][1]):function(n){return n===t||function(t,e,n,a){var c=n.length,u=c,i=!a;if(null==t)return!u;for(t=Object(t);c--;){var s=n[c];if(i&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++c<u;){var f=(s=n[c])[0],l=t[f],d=s[1];if(i&&s[2]){if(void 0===l&&!(f in t))return!1}else{var v=new r.Z;if(a)var p=a(l,d,f,t,e,v);if(!(void 0===p?(0,o.Z)(d,l,3,a,v):p))return!1}}return!0}(n,t,e)}};var f=n(772);const l=function(t,e){return null!=t&&e in Object(t)};var d=n(858),v=n(4405),p=n(7885),Z=n(6401),b=n(1164),y=n(7969);const h=function(t,e){return null!=t&&function(t,e,n){for(var r=-1,o=(e=(0,d.Z)(e,t)).length,a=!1;++r<o;){var c=(0,y.Z)(e[r]);if(!(a=null!=t&&n(t,c)))break;t=t[c]}return a||++r!=o?a:!!(o=null==t?0:t.length)&&(0,b.Z)(o)&&(0,Z.Z)(c,o)&&((0,p.Z)(t)||(0,v.Z)(t))}(t,e,l)};var g=n(3502);var _=n(9930);var w=n(9523);const j=function(t){return(0,g.Z)(t)?(e=(0,y.Z)(t),function(t){return null==t?void 0:t[e]}):function(t){return function(e){return(0,w.Z)(e,t)}}(t);var e},m=function(t){return"function"==typeof t?t:null==t?_.Z:"object"==typeof t?(0,p.Z)(t)?(e=t[0],n=t[1],(0,g.Z)(e)&&c(n)?i((0,y.Z)(e),n):function(t){var r=(0,f.Z)(t,e);return void 0===r&&r===n?h(t,e):(0,o.Z)(n,r,3)}):s(t):j(t);var e,n}},9601:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(5441);const o=(0,n(6048).Z)(Object.keys,Object);var a=Object.prototype.hasOwnProperty;const c=function(t){if(!(0,r.Z)(t))return o(t);var e=[];for(var n in Object(t))a.call(t,n)&&"constructor"!=n&&e.push(n);return e}},3225:(t,e,n)=>{n.d(e,{Z:()=>r});const r=function(t){return function(e){return t(e)}}},858:(t,e,n)=>{n.d(e,{Z:()=>v});var r=n(7885),o=n(3502),a=n(3549);function c(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var c=t.apply(this,r);return n.cache=a.set(o,c)||a,c};return n.cache=new(c.Cache||a.Z),n}c.Cache=a.Z;var u=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g;const s=(f=c((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(u,(function(t,n,r,o){e.push(r?o.replace(i,"$1"):n||t)})),e}),(function(t){return 500===l.size&&l.clear(),t})),l=f.cache,f);var f,l,d=n(63);const v=function(t,e){return(0,r.Z)(t)?t:(0,o.Z)(t,e)?[t]:s((0,d.Z)(t))}},7245:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(2938),o=n(9582),a=n(649);const c=function(t){return(0,r.Z)(t,a.Z,o.Z)}},9582:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(813),o=Object.prototype.propertyIsEnumerable,a=Object.getOwnPropertySymbols;const c=a?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,a=[];++n<r;){var c=t[n];e(c,n,t)&&(a[o++]=c)}return a}(a(t),(function(e){return o.call(t,e)})))}:r.Z},2263:(t,e,n)=>{n.d(e,{Z:()=>m});var r=n(2411),o=n(3221);const a=(0,r.Z)(o.Z,"DataView");var c=n(8896);const u=(0,r.Z)(o.Z,"Promise");var i=n(7459);const s=(0,r.Z)(o.Z,"WeakMap");var f=n(8147),l=n(6682),d="[object Map]",v="[object Promise]",p="[object Set]",Z="[object WeakMap]",b="[object DataView]",y=(0,l.Z)(a),h=(0,l.Z)(c.Z),g=(0,l.Z)(u),_=(0,l.Z)(i.Z),w=(0,l.Z)(s),j=f.Z;(a&&j(new a(new ArrayBuffer(1)))!=b||c.Z&&j(new c.Z)!=d||u&&j(u.resolve())!=v||i.Z&&j(new i.Z)!=p||s&&j(new s)!=Z)&&(j=function(t){var e=(0,f.Z)(t),n="[object Object]"==e?t.constructor:void 0,r=n?(0,l.Z)(n):"";if(r)switch(r){case y:return b;case h:return d;case g:return v;case _:return p;case w:return Z}return e});const m=j},6401:(t,e,n)=>{n.d(e,{Z:()=>o});var r=/^(?:0|[1-9]\d*)$/;const o=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&r.test(t))&&t>-1&&t%1==0&&t<e}},3502:(t,e,n)=>{n.d(e,{Z:()=>u});var r=n(7885),o=n(2758),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,c=/^\w*$/;const u=function(t,e){if((0,r.Z)(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!(0,o.Z)(t))||c.test(t)||!a.test(t)||null!=e&&t in Object(e)}},5441:(t,e,n)=>{n.d(e,{Z:()=>o});var r=Object.prototype;const o=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}},7755:(t,e,n)=>{n.d(e,{Z:()=>u});var r=n(2168),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,a=o&&"object"==typeof module&&module&&!module.nodeType&&module,c=a&&a.exports===o&&r.Z.process;const u=function(){try{return a&&a.require&&a.require("util").types||c&&c.binding&&c.binding("util")}catch(t){}}()},6048:(t,e,n)=>{n.d(e,{Z:()=>r});const r=function(t,e){return function(n){return t(e(n))}}},7969:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(2758);const o=function(t){if("string"==typeof t||(0,r.Z)(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},772:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(9523);const o=function(t,e,n){var o=null==t?void 0:(0,r.Z)(t,e);return void 0===o?n:o}},9930:(t,e,n)=>{n.d(e,{Z:()=>r});const r=function(t){return t}},4405:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(8147),o=n(3391);const a=function(t){return(0,o.Z)(t)&&"[object Arguments]"==(0,r.Z)(t)};var c=Object.prototype,u=c.hasOwnProperty,i=c.propertyIsEnumerable;const s=a(function(){return arguments}())?a:function(t){return(0,o.Z)(t)&&u.call(t,"callee")&&!i.call(t,"callee")}},7885:(t,e,n)=>{n.d(e,{Z:()=>r});const r=Array.isArray},3282:(t,e,n)=>{n.d(e,{Z:()=>a});var r=n(8936),o=n(1164);const a=function(t){return null!=t&&(0,o.Z)(t.length)&&!(0,r.Z)(t)}},2143:(t,e,n)=>{n.d(e,{Z:()=>u});var r=n(3221);var o="object"==typeof exports&&exports&&!exports.nodeType&&exports,a=o&&"object"==typeof module&&module&&!module.nodeType&&module,c=a&&a.exports===o?r.Z.Buffer:void 0;const u=(c?c.isBuffer:void 0)||function(){return!1}},1164:(t,e,n)=>{n.d(e,{Z:()=>r});const r=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},3391:(t,e,n)=>{n.d(e,{Z:()=>r});const r=function(t){return null!=t&&"object"==typeof t}},2758:(t,e,n)=>{n.d(e,{Z:()=>a});var r=n(8147),o=n(3391);const a=function(t){return"symbol"==typeof t||(0,o.Z)(t)&&"[object Symbol]"==(0,r.Z)(t)}},8532:(t,e,n)=>{n.d(e,{Z:()=>f});var r=n(8147),o=n(1164),a=n(3391),c={};c["[object Float32Array]"]=c["[object Float64Array]"]=c["[object Int8Array]"]=c["[object Int16Array]"]=c["[object Int32Array]"]=c["[object Uint8Array]"]=c["[object Uint8ClampedArray]"]=c["[object Uint16Array]"]=c["[object Uint32Array]"]=!0,c["[object Arguments]"]=c["[object Array]"]=c["[object ArrayBuffer]"]=c["[object Boolean]"]=c["[object DataView]"]=c["[object Date]"]=c["[object Error]"]=c["[object Function]"]=c["[object Map]"]=c["[object Number]"]=c["[object Object]"]=c["[object RegExp]"]=c["[object Set]"]=c["[object String]"]=c["[object WeakMap]"]=!1;var u=n(3225),i=n(7755),s=i.Z&&i.Z.isTypedArray;const f=s?(0,u.Z)(s):function(t){return(0,a.Z)(t)&&(0,o.Z)(t.length)&&!!c[(0,r.Z)(t)]}},649:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(7178),o=n(9601),a=n(3282);const c=function(t){return(0,a.Z)(t)?(0,r.Z)(t):(0,o.Z)(t)}},2228:(t,e,n)=>{n.d(e,{Z:()=>r});const r=function(t){var e=null==t?0:t.length;return e?t[e-1]:void 0}},813:(t,e,n)=>{n.d(e,{Z:()=>r});const r=function(){return[]}},63:(t,e,n)=>{n.d(e,{Z:()=>f});var r=n(187),o=n(5598),a=n(7885),c=n(2758),u=r.Z?r.Z.prototype:void 0,i=u?u.toString:void 0;const s=function t(e){if("string"==typeof e)return e;if((0,a.Z)(e))return(0,o.Z)(e,t)+"";if((0,c.Z)(e))return i?i.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n},f=function(t){return null==t?"":s(t)}},4729:(t,e,n)=>{n.d(e,{$l:()=>i,BN:()=>V,DY:()=>o,J$:()=>F,JN:()=>Z,LI:()=>T,PM:()=>l,W6:()=>E,i_:()=>u,ko:()=>Y,kw:()=>S,mf:()=>f,o8:()=>s,qC:()=>L,s6:()=>J,sj:()=>C,u3:()=>x,u_:()=>N,w6:()=>O,xD:()=>H});var r=n(268);const o=new WeakMap,a={},c=()=>{},u=c(),i=Object,s=t=>t===u,f=t=>"function"==typeof t,l=(t,e)=>({...t,...e}),d="undefined",v=typeof window!=d,p=typeof document!=d,Z=(t,e)=>{const n=o.get(t);return[()=>t.get(e)||a,r=>{const o=t.get(e);n[5](e,l(o,r),o||a)},n[6]]},b=new WeakMap;let y=0;const h=t=>{const e=typeof t,n=t&&t.constructor,r=n==Date;let o,a;if(i(t)!==t||r||n==RegExp)o=r?t.toJSON():"symbol"==e?t.toString():"string"==e?JSON.stringify(t):""+t;else{if(o=b.get(t),o)return o;if(o=++y+"~",b.set(t,o),n==Array){for(o="@",a=0;a<t.length;a++)o+=h(t[a])+",";b.set(t,o)}if(n==i){o="#";const e=i.keys(t).sort();for(;!s(a=e.pop());)s(t[a])||(o+=a+":"+h(t[a])+",");b.set(t,o)}}return o};let g=!0;const[_,w]=v&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[c,c],j={isOnline:()=>g,isVisible:()=>{const t=p&&document.visibilityState;return s(t)||"hidden"!==t}},m={initFocus:t=>(p&&document.addEventListener("visibilitychange",t),_("focus",t),()=>{p&&document.removeEventListener("visibilitychange",t),w("focus",t)}),initReconnect:t=>{const e=()=>{g=!0,t()},n=()=>{g=!1};return _("online",e),_("offline",n),()=>{w("online",e),w("offline",n)}}},O=!r.useId,E=!v||"Deno"in window,S=t=>v&&typeof window.requestAnimationFrame!=d?window.requestAnimationFrame(t):setTimeout(t,1),T=E?r.useEffect:r.useLayoutEffect,k="undefined"!=typeof navigator&&navigator.connection,A=!E&&k&&(["slow-2g","2g"].includes(k.effectiveType)||k.saveData),L=t=>{if(f(t))try{t=t()}catch(e){t=""}const e=t;return[t="string"==typeof t?t:(Array.isArray(t)?t.length:t)?h(t):"",e]};let R=0;const x=()=>++R;var C={__proto__:null,FOCUS_EVENT:0,RECONNECT_EVENT:1,MUTATE_EVENT:2};async function V(...t){const[e,n,r,a]=t,c=l({populateCache:!0,throwOnError:!0},"boolean"==typeof a?{revalidate:a}:a||{});let i=c.populateCache;const d=c.rollbackOnError;let v=c.optimisticData;const p=!1!==c.revalidate,b=c.throwOnError;if(f(n)){const t=n,r=[],o=e.keys();for(let n=o.next();!n.done;n=o.next()){const o=n.value;!o.startsWith("$inf$")&&t(e.get(o)._k)&&r.push(o)}return Promise.all(r.map(y))}return y(n);async function y(n){const[a]=L(n);if(!a)return;const[c,l]=Z(e,a),[y,h,g]=o.get(e),_=y[a],w=()=>p&&(delete g[a],_&&_[0])?_[0](2).then((()=>c().data)):c().data;if(t.length<3)return w();let j,m=r;const O=x();h[a]=[O,0];const E=!s(v),S=c(),T=S.data,k=S._c,A=s(k)?T:k;if(E&&(v=f(v)?v(A):v,l({data:v,_c:A})),f(m))try{m=m(A)}catch(t){j=t}if(m&&f(m.then)){if(m=await m.catch((t=>{j=t})),O!==h[a][0]){if(j)throw j;return m}j&&E&&(t=>"function"==typeof d?d(t):!1!==d)(j)&&(i=!0,m=A,l({data:m,_c:u}))}i&&(j||(f(i)&&(m=i(m,A)),l({data:m,_c:u}))),h[a][1]=x();const R=await w();if(l({_c:u}),!j)return i?R:m;if(b)throw j}}const D=(t,e)=>{for(const n in t)t[n][0]&&t[n][0](e)},I=(t,e)=>{if(!o.has(t)){const n=l(m,e),r={},a=V.bind(u,t);let i=c;const s={},f=(t,e)=>{const n=s[t]||[];return s[t]=n,n.push(e),()=>n.splice(n.indexOf(e),1)},d=(e,n,r)=>{t.set(e,n);const o=s[e];if(o)for(let t=o.length;t--;)o[t](r,n)},v=()=>{if(!o.has(t)&&(o.set(t,[r,{},{},{},a,d,f]),!E)){const e=n.initFocus(setTimeout.bind(u,D.bind(u,r,0))),a=n.initReconnect(setTimeout.bind(u,D.bind(u,r,1)));i=()=>{e&&e(),a&&a(),o.delete(t)}}};return v(),[t,a,v,i]}return[t,o.get(t)[4]]},[P,M]=I(new Map),N=l({onLoadingSlow:c,onSuccess:c,onError:c,onErrorRetry:(t,e,n,r,o)=>{const a=n.errorRetryCount,c=o.retryCount,u=~~((Math.random()+.5)*(1<<(c<8?c:8)))*n.errorRetryInterval;!s(a)&&c>a||setTimeout(r,u,o)},onDiscarded:c,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:A?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:A?5e3:3e3,compare:(t,e)=>h(t)==h(e),isPaused:()=>!1,cache:P,mutate:M,fallback:{}},j),W=(t,e)=>{const n=l(t,e);if(e){const{use:r,fallback:o}=t,{use:a,fallback:c}=e;r&&a&&(n.use=r.concat(a)),o&&c&&(n.fallback=l(o,c))}return n},z=(0,r.createContext)({}),F=t=>{const{value:e}=t,n=(0,r.useContext)(z),o=f(e),a=(0,r.useMemo)((()=>o?e(n):e),[o,n,e]),c=(0,r.useMemo)((()=>o?a:W(n,a)),[o,n,a]),i=a&&a.provider,[s]=(0,r.useState)((()=>i?I(i(c.cache||P),a):u));return s&&(c.cache=s[0],c.mutate=s[1]),T((()=>{if(s)return s[2]&&s[2](),s[3]}),[]),(0,r.createElement)(z.Provider,l(t,{value:c}))},U=v&&window.__SWR_DEVTOOLS_USE__,$=U?window.__SWR_DEVTOOLS_USE__:[],B=t=>f(t[1])?[t[0],t[1],t[2]||{}]:[t[0],null,(null===t[1]?t[2]:t[1])||{}],q=$.concat((t=>(e,n,r)=>t(e,n&&((...t)=>{const r=L(e)[0],[,,,a]=o.get(P),c=a[r];return c?(delete a[r],c):n(...t)}),r))),J=t=>function(...e){const n=l(N,(0,r.useContext)(z)),[o,a,c]=B(e),u=W(n,c);let i=t;const{use:s}=u,f=(s||[]).concat(q);for(let t=f.length;t--;)i=f[t](i);return i(o,a||u.fetcher||null,u)},Y=(t,e,n)=>{const r=e[t]||(e[t]=[]);return r.push(n),()=>{const t=r.indexOf(n);t>=0&&(r[t]=r[r.length-1],r.pop())}},H=(t,e)=>(...n)=>{const[r,o,a]=B(n),c=(a.use||[]).concat(e);return t(r,o,{...a,use:c})};U&&(window.__SWR_DEVTOOLS_REACT__=r)},3255:(t,e,n)=>{n.d(e,{ZP:()=>u});var r=n(268),o=n(3100),a=n(4729);const c={dedupe:!0};a.$l.defineProperty(a.J$,"defaultValue",{value:a.u_});var u=(0,a.s6)(((t,e,n)=>{const{cache:u,compare:i,suspense:s,fallbackData:f,revalidateOnMount:l,refreshInterval:d,refreshWhenHidden:v,refreshWhenOffline:p,keepPreviousData:Z}=n,[b,y,h]=a.DY.get(u),[g,_]=(0,a.qC)(t),w=(0,r.useRef)(!1),j=(0,r.useRef)(!1),m=(0,r.useRef)(g),O=(0,r.useRef)(e),E=(0,r.useRef)(n),S=()=>E.current,T=()=>S().isVisible()&&S().isOnline(),[k,A,L]=(0,a.JN)(u,g),R=(0,r.useRef)({}).current,x=(0,a.o8)(f)?n.fallback[g]:f,C=(t,e)=>{let n=!0;for(const r in R){const o=r;i(e[o],t[o])||"data"===o&&(0,a.o8)(t[o])&&i(e[o],z)||(n=!1)}return n},V=(0,r.useMemo)((()=>{const t=!!g&&!!e&&((0,a.o8)(l)?!S().isPaused()&&!s:l),n=()=>{const e=k(),n=(0,a.PM)(e);return delete n._k,t?{isValidating:!0,isLoading:!0,...n}:n};let r=n();return()=>{const t=n();return C(t,r)?r:r=t}}),[u,g]),D=(0,o.useSyncExternalStore)((0,r.useCallback)((t=>L(g,((e,n)=>{C(e,n)||t()}))),[u,g]),V,V),I=!w.current,P=D.data,M=(0,a.o8)(P)?x:P,N=D.error,W=(0,r.useRef)(M),z=Z?(0,a.o8)(P)?W.current:P:M,F=I&&!(0,a.o8)(l)?l:!S().isPaused()&&(s?!(0,a.o8)(M)&&n.revalidateIfStale:(0,a.o8)(M)||n.revalidateIfStale),U=!!(g&&e&&I&&F),$=(0,a.o8)(D.isValidating)?U:D.isValidating,B=(0,a.o8)(D.isLoading)?U:D.isLoading,q=(0,r.useCallback)((async t=>{const e=O.current;if(!g||!e||j.current||S().isPaused())return!1;let r,o,c=!0;const u=t||{},s=!h[g]||!u.dedupe,f=()=>a.w6?!j.current&&g===m.current&&w.current:g===m.current,l={isValidating:!1,isLoading:!1},d=()=>{A(l)},v=()=>{const t=h[g];t&&t[1]===o&&delete h[g]},p={isValidating:!0};(0,a.o8)(k().data)&&(p.isLoading=!0);try{if(s&&(A(p),n.loadingTimeout&&(0,a.o8)(k().data)&&setTimeout((()=>{c&&f()&&S().onLoadingSlow(g,n)}),n.loadingTimeout),h[g]=[e(_),(0,a.u3)()]),[r,o]=h[g],r=await r,s&&setTimeout(v,n.dedupingInterval),!h[g]||h[g][1]!==o)return s&&f()&&S().onDiscarded(g),!1;l.error=a.i_;const t=y[g];if(!(0,a.o8)(t)&&(o<=t[0]||o<=t[1]||0===t[1]))return d(),s&&f()&&S().onDiscarded(g),!1;const u=k().data;l.data=i(u,r)?u:r,s&&f()&&S().onSuccess(r,g,n)}catch(t){v();const e=S(),{shouldRetryOnError:n}=e;e.isPaused()||(l.error=t,s&&f()&&(e.onError(t,g,e),(!0===n||(0,a.mf)(n)&&n(t))&&T()&&e.onErrorRetry(t,g,e,q,{retryCount:(u.retryCount||0)+1,dedupe:!0})))}return c=!1,d(),!0}),[g,u]),J=(0,r.useCallback)(((...t)=>(0,a.BN)(u,m.current,...t)),[]);if((0,a.LI)((()=>{O.current=e,E.current=n,(0,a.o8)(P)||(W.current=P)})),(0,a.LI)((()=>{if(!g)return;const t=q.bind(a.i_,c);let e=0;const n=(0,a.ko)(g,b,(n=>{if(n==a.sj.FOCUS_EVENT){const n=Date.now();S().revalidateOnFocus&&n>e&&T()&&(e=n+S().focusThrottleInterval,t())}else if(n==a.sj.RECONNECT_EVENT)S().revalidateOnReconnect&&T()&&t();else if(n==a.sj.MUTATE_EVENT)return q()}));return j.current=!1,m.current=g,w.current=!0,A({_k:_}),F&&((0,a.o8)(M)||a.W6?t():(0,a.kw)(t)),()=>{j.current=!0,n()}}),[g]),(0,a.LI)((()=>{let t;function e(){const e=(0,a.mf)(d)?d(M):d;e&&-1!==t&&(t=setTimeout(n,e))}function n(){k().error||!v&&!S().isVisible()||!p&&!S().isOnline()?e():q(c).then(e)}return e(),()=>{t&&(clearTimeout(t),t=-1)}}),[d,v,p,g]),(0,r.useDebugValue)(z),s&&(0,a.o8)(M)&&g){if(!a.w6&&a.W6)throw new Error("Fallback data is required when using suspense in SSR.");throw O.current=e,E.current=n,j.current=!1,(0,a.o8)(N)?q(c):N}return{mutate:J,get data(){return R.data=!0,z},get error(){return R.error=!0,N},get isValidating(){return R.isValidating=!0,$},get isLoading(){return R.isLoading=!0,B}}}))}}]);