"use strict";(globalThis.webpackChunk_openmrs_esm_patient_chart_app=globalThis.webpackChunk_openmrs_esm_patient_chart_app||[]).push([[6274],{2525:(t,e,n)=>{n.d(e,{hY:()=>c});var r,o=n(3394),i=n(268),a=n.n(i),u=["children","size"],c=a().forwardRef((function(t,e){var n=t.children,i=t.size,c=void 0===i?16:i,s=(0,o._)(t,u);return a().createElement(o.I,(0,o.a)({width:c,height:c,ref:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"currentColor"},s),r||(r=a().createElement("path",{d:"M16 18L6 8 7.4 6.6 16 15.2 24.6 6.6 26 8zM4 22H28V24H4z"})),n)}))},2609:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var u=0;u<this.length;u++){var c=this[u][0];null!=c&&(a[c]=!0)}for(var s=0;s<t.length;s++){var f=[].concat(t[s]);r&&a[f[0]]||(void 0!==i&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=i),n&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=n):f[2]=n),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),e.push(f))}},e}},272:t=>{t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */"),a=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[e].concat(a).concat([i]).join("\n")}return[e].join("\n")}},1354:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],u=0;u<t.length;u++){var c=t[u],s=r.base?c[0]+r.base:c[0],f=i[s]||0,l="".concat(s," ").concat(f);i[s]=f+1;var p=n(l),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(h);else{var d=o(h,r);r.byIndex=u,e.splice(u,0,{identifier:l,updater:d,references:1})}a.push(l)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var u=n(i[a]);e[u].references--}for(var c=r(t,o),s=0;s<i.length;s++){var f=n(i[s]);0===e[f].references&&(e[f].updater(),e.splice(f,1))}i=c}}},7378:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},4154:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},5993:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},1583:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},8141:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},309:(t,e,n)=>{n.d(e,{BP:()=>$});var r=Object.freeze({__proto__:null,get start(){return Bt},get ensureJQuerySupport(){return ht},get setBootstrapMaxTime(){return q},get setMountMaxTime(){return K},get setUnmountMaxTime(){return V},get setUnloadMaxTime(){return Z},get registerApplication(){return St},get unregisterApplication(){return _t},get getMountedApps(){return Pt},get getAppStatus(){return Tt},get unloadApplication(){return Dt},get checkActivityFunctions(){return At},get getAppNames(){return Ot},get pathToActiveWhen(){return Mt},get navigateToUrl(){return ot},get triggerAppChange(){return Ct},get addErrorHandler(){return f},get removeErrorHandler(){return l},get mountRootParcel(){return $},get NOT_LOADED(){return d},get LOADING_SOURCE_CODE(){return m},get NOT_BOOTSTRAPPED(){return v},get BOOTSTRAPPING(){return w},get NOT_MOUNTED(){return g},get MOUNTING(){return y},get UPDATING(){return b},get LOAD_ERROR(){return O},get MOUNTED(){return E},get UNMOUNTING(){return P},get SKIP_BECAUSE_BROKEN(){return T}});function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{}).CustomEvent,u=function(){try{var t=new a("cat",{detail:{foo:"bar"}});return"cat"===t.type&&"bar"===t.detail.foo}catch(t){}return!1}()?a:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(t,e){var n=document.createEvent("CustomEvent");return e?n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail):n.initCustomEvent(t,!1,!1,void 0),n}:function(t,e){var n=document.createEventObject();return n.type=t,e?(n.bubbles=Boolean(e.bubbles),n.cancelable=Boolean(e.cancelable),n.detail=e.detail):(n.bubbles=!1,n.cancelable=!1,n.detail=void 0),n},c=[];function s(t,e,n){var r=h(t,e,n);c.length?c.forEach((function(t){return t(r)})):setTimeout((function(){throw r}))}function f(t){if("function"!=typeof t)throw Error(p(28,!1));c.push(t)}function l(t){if("function"!=typeof t)throw Error(p(29,!1));var e=!1;return c=c.filter((function(n){var r=n===t;return e=e||r,!r})),e}function p(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return"single-spa minified message #".concat(t,": ").concat(e?e+" ":"","See https://single-spa.js.org/error/?code=").concat(t).concat(r.length?"&arg=".concat(r.join("&arg=")):"")}function h(t,e,n){var r,o="".concat(N(e)," '").concat(_(e),"' died in status ").concat(e.status,": ");if(t instanceof Error){try{t.message=o+t.message}catch(t){}r=t}else{console.warn(p(30,!1,e.status,_(e)));try{r=Error(o+JSON.stringify(t))}catch(e){r=t}}return r.appOrParcelName=_(e),e.status=n,r}var d="NOT_LOADED",m="LOADING_SOURCE_CODE",v="NOT_BOOTSTRAPPED",w="BOOTSTRAPPING",g="NOT_MOUNTED",y="MOUNTING",E="MOUNTED",b="UPDATING",P="UNMOUNTING",O="LOAD_ERROR",T="SKIP_BECAUSE_BROKEN";function S(t){return t.status===E}function A(t){try{return t.activeWhen(window.location)}catch(e){return s(e,t,T),!1}}function _(t){return t.name}function D(t){return Boolean(t.unmountThisParcel)}function N(t){return D(t)?"parcel":"application"}function j(){for(var t=arguments.length-1;t>0;t--)for(var e in arguments[t])"__proto__"!==e&&(arguments[t-1][e]=arguments[t][e]);return arguments[0]}function M(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return t[n];return null}function R(t){return t&&("function"==typeof t||(e=t,Array.isArray(e)&&!M(e,(function(t){return"function"!=typeof t}))));var e}function U(t,e){var n=t[e]||[];0===(n=Array.isArray(n)?n:[n]).length&&(n=[function(){return Promise.resolve()}]);var r=N(t),o=_(t);return function(t){return n.reduce((function(n,i,a){return n.then((function(){var n=i(t);return x(n)?n:Promise.reject(p(15,!1,r,o,e,a))}))}),Promise.resolve())}}function x(t){return t&&"function"==typeof t.then&&"function"==typeof t.catch}function C(t,e){return Promise.resolve().then((function(){return t.status!==v?t:(t.status=w,t.bootstrap?Q(t,"bootstrap").then(n).catch((function(n){if(e)throw h(n,t,T);return s(n,t,T),t})):Promise.resolve().then(n))}));function n(){return t.status=g,t}}function L(t,e){return Promise.resolve().then((function(){if(t.status!==E)return t;t.status=P;var n=Object.keys(t.parcels).map((function(e){return t.parcels[e].unmountThisParcel()}));return Promise.all(n).then(r,(function(n){return r().then((function(){var r=Error(n.message);if(e)throw h(r,t,T);s(r,t,T)}))})).then((function(){return t}));function r(){return Q(t,"unmount").then((function(){t.status=g})).catch((function(n){if(e)throw h(n,t,T);s(n,t,T)}))}}))}var I=!1,k=!1;function B(t,e){return Promise.resolve().then((function(){return t.status!==g?t:(I||(window.dispatchEvent(new u("single-spa:before-first-mount")),I=!0),Q(t,"mount").then((function(){return t.status=E,k||(window.dispatchEvent(new u("single-spa:first-mount")),k=!0),t})).catch((function(n){return t.status=E,L(t,!0).then(r,r);function r(){if(e)throw h(n,t,T);return s(n,t,T),t}})))}))}var W=0,G={parcels:{}};function $(){return F.apply(G,arguments)}function F(t,e){var n=this;if(!t||"object"!==o(t)&&"function"!=typeof t)throw Error(p(2,!1));if(t.name&&"string"!=typeof t.name)throw Error(p(3,!1,o(t.name)));if("object"!==o(e))throw Error(p(4,!1,name,o(e)));if(!e.domElement)throw Error(p(5,!1,name));var r,i=W++,a="function"==typeof t,u=a?t:function(){return Promise.resolve(t)},c={id:i,parcels:{},status:a?m:v,customProps:e,parentName:_(n),unmountThisParcel:function(){return w.then((function(){if(c.status!==E)throw Error(p(6,!1,name,c.status));return L(c,!0)})).then((function(t){return c.parentName&&delete n.parcels[c.id],t})).then((function(t){return f(t),t})).catch((function(t){throw c.status=T,l(t),t}))}};n.parcels[i]=c;var s=u();if(!s||"function"!=typeof s.then)throw Error(p(7,!1));var f,l,d=(s=s.then((function(t){if(!t)throw Error(p(8,!1));var e=t.name||"parcel-".concat(i);if(Object.prototype.hasOwnProperty.call(t,"bootstrap")&&!R(t.bootstrap))throw Error(p(9,!1,e));if(!R(t.mount))throw Error(p(10,!1,e));if(!R(t.unmount))throw Error(p(11,!1,e));if(t.update&&!R(t.update))throw Error(p(12,!1,e));var n=U(t,"bootstrap"),o=U(t,"mount"),a=U(t,"unmount");c.status=v,c.name=e,c.bootstrap=n,c.mount=o,c.unmount=a,c.timeouts=Y(t.timeouts),t.update&&(c.update=U(t,"update"),r.update=function(t){return c.customProps=t,H(function(t){return Promise.resolve().then((function(){if(t.status!==E)throw Error(p(32,!1,_(t)));return t.status=b,Q(t,"update").then((function(){return t.status=E,t})).catch((function(e){throw h(e,t,T)}))}))}(c))})}))).then((function(){return C(c,!0)})),w=d.then((function(){return B(c,!0)})),y=new Promise((function(t,e){f=t,l=e}));return r={mount:function(){return H(Promise.resolve().then((function(){if(c.status!==g)throw Error(p(13,!1,name,c.status));return n.parcels[i]=c,B(c)})))},unmount:function(){return H(c.unmountThisParcel())},getStatus:function(){return c.status},loadPromise:H(s),bootstrapPromise:H(d),mountPromise:H(w),unmountPromise:H(y)}}function H(t){return t.then((function(){return null}))}function z(t){var e=_(t),n="function"==typeof t.customProps?t.customProps(e,window.location):t.customProps;("object"!==o(n)||null===n||Array.isArray(n))&&(n={},console.warn(p(40,!1),e,n));var i=j({},n,{name:e,mountParcel:F.bind(t),singleSpa:r});return D(t)&&(i.unmountSelf=t.unmountThisParcel),i}var J={bootstrap:{millis:4e3,dieOnTimeout:!1,warningMillis:1e3},mount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unmount:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},unload:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3},update:{millis:3e3,dieOnTimeout:!1,warningMillis:1e3}};function q(t,e,n){if("number"!=typeof t||t<=0)throw Error(p(16,!1));J.bootstrap={millis:t,dieOnTimeout:e,warningMillis:n||1e3}}function K(t,e,n){if("number"!=typeof t||t<=0)throw Error(p(17,!1));J.mount={millis:t,dieOnTimeout:e,warningMillis:n||1e3}}function V(t,e,n){if("number"!=typeof t||t<=0)throw Error(p(18,!1));J.unmount={millis:t,dieOnTimeout:e,warningMillis:n||1e3}}function Z(t,e,n){if("number"!=typeof t||t<=0)throw Error(p(19,!1));J.unload={millis:t,dieOnTimeout:e,warningMillis:n||1e3}}function Q(t,e){var n=t.timeouts[e],r=n.warningMillis,o=N(t);return new Promise((function(i,a){var u=!1,c=!1;t[e](z(t)).then((function(t){u=!0,i(t)})).catch((function(t){u=!0,a(t)})),setTimeout((function(){return f(1)}),r),setTimeout((function(){return f(!0)}),n.millis);var s=p(31,!1,e,o,_(t),n.millis);function f(t){if(!u)if(!0===t)c=!0,n.dieOnTimeout?a(Error(s)):console.error(s);else if(!c){var e=t,o=e*r;console.warn(s),o+r<n.millis&&setTimeout((function(){return f(e+1)}),r)}}}))}function Y(t){var e={};for(var n in J)e[n]=j({},J[n],t&&t[n]||{});return e}function X(t){return Promise.resolve().then((function(){return t.loadPromise?t.loadPromise:t.status!==d&&t.status!==O?t:(t.status=m,t.loadPromise=Promise.resolve().then((function(){var r=t.loadApp(z(t));if(!x(r))throw n=!0,Error(p(33,!1,_(t)));return r.then((function(n){var r;t.loadErrorTime=null,"object"!==o(e=n)&&(r=34),Object.prototype.hasOwnProperty.call(e,"bootstrap")&&!R(e.bootstrap)&&(r=35),R(e.mount)||(r=36),R(e.unmount)||(r=37);var i=N(e);if(r){var a;try{a=JSON.stringify(e)}catch(t){}return console.error(p(r,!1,i,_(t),a),e),s(void 0,t,T),t}return e.devtools&&e.devtools.overlays&&(t.devtools.overlays=j({},t.devtools.overlays,e.devtools.overlays)),t.status=v,t.bootstrap=U(e,"bootstrap"),t.mount=U(e,"mount"),t.unmount=U(e,"unmount"),t.unload=U(e,"unload"),t.timeouts=Y(e.timeouts),delete t.loadPromise,t}))})).catch((function(e){var r;return delete t.loadPromise,n?r=T:(r=O,t.loadErrorTime=(new Date).getTime()),s(e,t,r),t})));var e,n}))}var tt,et="undefined"!=typeof window,nt={hashchange:[],popstate:[]},rt=["hashchange","popstate"];function ot(t){var e;if("string"==typeof t)e=t;else if(this&&this.href)e=this.href;else{if(!(t&&t.currentTarget&&t.currentTarget.href&&t.preventDefault))throw Error(p(14,!1));e=t.currentTarget.href,t.preventDefault()}var n=lt(window.location.href),r=lt(e);0===e.indexOf("#")?window.location.hash=r.hash:n.host!==r.host&&r.host?window.location.href=e:r.pathname===n.pathname&&r.search===n.search?window.location.hash=r.hash:window.history.pushState(null,null,e)}function it(t){var e=this;if(t){var n=t[0].type;rt.indexOf(n)>=0&&nt[n].forEach((function(n){try{n.apply(e,t)}catch(t){setTimeout((function(){throw t}))}}))}}function at(){Lt([],arguments)}function ut(t,e){return function(){var n=window.location.href,r=t.apply(this,arguments),o=window.location.href;return tt&&n===o||(Wt()?window.dispatchEvent(ct(window.history.state,e)):Lt([])),r}}function ct(t,e){var n;try{n=new PopStateEvent("popstate",{state:t})}catch(e){(n=document.createEvent("PopStateEvent")).initPopStateEvent("popstate",!1,!1,t)}return n.singleSpa=!0,n.singleSpaTrigger=e,n}if(et){window.addEventListener("hashchange",at),window.addEventListener("popstate",at);var st=window.addEventListener,ft=window.removeEventListener;window.addEventListener=function(t,e){if(!("function"==typeof e&&rt.indexOf(t)>=0)||M(nt[t],(function(t){return t===e})))return st.apply(this,arguments);nt[t].push(e)},window.removeEventListener=function(t,e){if(!("function"==typeof e&&rt.indexOf(t)>=0))return ft.apply(this,arguments);nt[t]=nt[t].filter((function(t){return t!==e}))},window.history.pushState=ut(window.history.pushState,"pushState"),window.history.replaceState=ut(window.history.replaceState,"replaceState"),window.singleSpaNavigate?console.warn(p(41,!1)):window.singleSpaNavigate=ot}function lt(t){var e=document.createElement("a");return e.href=t,e}var pt=!1;function ht(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.jQuery;if(t||window.$&&window.$.fn&&window.$.fn.jquery&&(t=window.$),t&&!pt){var e=t.fn.on,n=t.fn.off;t.fn.on=function(t,n){return dt.call(this,e,window.addEventListener,t,n,arguments)},t.fn.off=function(t,e){return dt.call(this,n,window.removeEventListener,t,e,arguments)},pt=!0}}function dt(t,e,n,r,o){return"string"!=typeof n?t.apply(this,o):(n.split(/\s+/).forEach((function(t){rt.indexOf(t)>=0&&(e(t,r),n=n.replace(t,""))})),""===n.trim()?this:t.apply(this,o))}var mt={};function vt(t){return Promise.resolve().then((function(){var e=mt[_(t)];if(!e)return t;if(t.status===d)return wt(t,e),t;if("UNLOADING"===t.status)return e.promise.then((function(){return t}));if(t.status!==g&&t.status!==O)return t;var n=t.status===O?Promise.resolve():Q(t,"unload");return t.status="UNLOADING",n.then((function(){return wt(t,e),t})).catch((function(n){return function(t,e,n){delete mt[_(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,s(n,t,T),e.reject(n)}(t,e,n),t}))}))}function wt(t,e){delete mt[_(t)],delete t.bootstrap,delete t.mount,delete t.unmount,delete t.unload,t.status=d,e.resolve()}function gt(t,e,n,r){mt[_(t)]={app:t,resolve:n,reject:r},Object.defineProperty(mt[_(t)],"promise",{get:e})}function yt(t){return mt[t]}var Et=[];function bt(){var t=[],e=[],n=[],r=[],o=(new Date).getTime();return Et.forEach((function(i){var a=i.status!==T&&A(i);switch(i.status){case O:a&&o-i.loadErrorTime>=200&&n.push(i);break;case d:case m:a&&n.push(i);break;case v:case g:!a&&yt(_(i))?t.push(i):a&&r.push(i);break;case E:a||e.push(i)}})),{appsToUnload:t,appsToUnmount:e,appsToLoad:n,appsToMount:r}}function Pt(){return Et.filter(S).map(_)}function Ot(){return Et.map(_)}function Tt(t){var e=M(Et,(function(e){return _(e)===t}));return e?e.status:null}function St(t,e,n,r){var i=function(t,e,n,r){var i,a={name:null,loadApp:null,activeWhen:null,customProps:null};return"object"===o(t)?(function(t){if(Array.isArray(t)||null===t)throw Error(p(39,!1));var e=["name","app","activeWhen","customProps"],n=Object.keys(t).reduce((function(t,n){return e.indexOf(n)>=0?t:t.concat(n)}),[]);if(0!==n.length)throw Error(p(38,!1,e.join(", "),n.join(", ")));if("string"!=typeof t.name||0===t.name.length)throw Error(p(20,!1));if("object"!==o(t.app)&&"function"!=typeof t.app)throw Error(p(20,!1));var r=function(t){return"string"==typeof t||"function"==typeof t};if(!(r(t.activeWhen)||Array.isArray(t.activeWhen)&&t.activeWhen.every(r)))throw Error(p(24,!1));if(!jt(t.customProps))throw Error(p(22,!1))}(t),a.name=t.name,a.loadApp=t.app,a.activeWhen=t.activeWhen,a.customProps=t.customProps):(function(t,e,n,r){if("string"!=typeof t||0===t.length)throw Error(p(20,!1));if(!e)throw Error(p(23,!1));if("function"!=typeof n)throw Error(p(24,!1));if(!jt(r))throw Error(p(22,!1))}(t,e,n,r),a.name=t,a.loadApp=e,a.activeWhen=n,a.customProps=r),a.loadApp="function"!=typeof(i=a.loadApp)?function(){return Promise.resolve(i)}:i,a.customProps=function(t){return t||{}}(a.customProps),a.activeWhen=function(t){var e=Array.isArray(t)?t:[t];return e=e.map((function(t){return"function"==typeof t?t:Mt(t)})),function(t){return e.some((function(e){return e(t)}))}}(a.activeWhen),a}(t,e,n,r);if(-1!==Ot().indexOf(i.name))throw Error(p(21,!1,i.name));Et.push(j({loadErrorTime:null,status:d,parcels:{},devtools:{overlays:{options:{},selectors:[]}}},i)),et&&(ht(),Lt())}function At(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location;return Et.filter((function(e){return e.activeWhen(t)})).map(_)}function _t(t){if(0===Et.filter((function(e){return _(e)===t})).length)throw Error(p(25,!1,t));return Dt(t).then((function(){var e=Et.map(_).indexOf(t);Et.splice(e,1)}))}function Dt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{waitForUnmount:!1};if("string"!=typeof t)throw Error(p(26,!1));var n=M(Et,(function(e){return _(e)===t}));if(!n)throw Error(p(27,!1,t));var r,o=yt(_(n));if(e&&e.waitForUnmount){if(o)return o.promise;var i=new Promise((function(t,e){gt(n,(function(){return i}),t,e)}));return i}return o?(r=o.promise,Nt(n,o.resolve,o.reject)):r=new Promise((function(t,e){gt(n,(function(){return r}),t,e),Nt(n,t,e)})),r}function Nt(t,e,n){L(t).then(vt).then((function(){e(),setTimeout((function(){Lt()}))})).catch(n)}function jt(t){return!t||"function"==typeof t||"object"===o(t)&&null!==t&&!Array.isArray(t)}function Mt(t,e){var n=function(t,e){var n=0,r=!1,o="^";"/"!==t[0]&&(t="/"+t);for(var i=0;i<t.length;i++){var a=t[i];(!r&&":"===a||r&&"/"===a)&&u(i)}return u(t.length),new RegExp(o,"i");function u(i){var a=t.slice(n,i).replace(/[|\\{}()[\]^$+*?.]/g,"\\$&");if(o+=r?"[^/]+/?":a,i===t.length)if(r)e&&(o+="$");else{var u=e?"":".*";o="/"===o.charAt(o.length-1)?"".concat(o).concat(u,"$"):"".concat(o,"(/").concat(u,")?(#.*)?$")}r=!r,n=i}}(t,e);return function(t){var e=t.origin;e||(e="".concat(t.protocol,"//").concat(t.host));var r=t.href.replace(e,"").replace(t.search,"").split("?")[0];return n.test(r)}}var Rt=!1,Ut=[],xt=et&&window.location.href;function Ct(){return Lt()}function Lt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;if(Rt)return new Promise((function(t,n){Ut.push({resolve:t,reject:n,eventArguments:e})}));var n,r=bt(),o=r.appsToUnload,a=r.appsToUnmount,c=r.appsToLoad,s=r.appsToMount,f=!1,l=xt,p=xt=window.location.href;return Wt()?(Rt=!0,n=o.concat(c,a,s),v()):(n=c,m());function h(){f=!0}function m(){return Promise.resolve().then((function(){var t=c.map(X);return Promise.all(t).then(y).then((function(){return[]})).catch((function(t){throw y(),t}))}))}function v(){return Promise.resolve().then((function(){if(window.dispatchEvent(new u(0===n.length?"single-spa:before-no-app-change":"single-spa:before-app-change",b(!0))),window.dispatchEvent(new u("single-spa:before-routing-event",b(!0,{cancelNavigation:h}))),f)return window.dispatchEvent(new u("single-spa:before-mount-routing-event",b(!0))),w(),void ot(l);var e=o.map(vt),r=a.map(L).map((function(t){return t.then(vt)})).concat(e),i=Promise.all(r);i.then((function(){window.dispatchEvent(new u("single-spa:before-mount-routing-event",b(!0)))}));var p=c.map((function(t){return X(t).then((function(t){return It(t,i)}))})),d=s.filter((function(t){return c.indexOf(t)<0})).map((function(t){return It(t,i)}));return i.catch((function(t){throw y(),t})).then((function(){return y(),Promise.all(p.concat(d)).catch((function(e){throw t.forEach((function(t){return t.reject(e)})),e})).then(w)}))}))}function w(){var e=Pt();t.forEach((function(t){return t.resolve(e)}));try{var r=0===n.length?"single-spa:no-app-change":"single-spa:app-change";window.dispatchEvent(new u(r,b())),window.dispatchEvent(new u("single-spa:routing-event",b()))}catch(t){setTimeout((function(){throw t}))}if(Rt=!1,Ut.length>0){var o=Ut;Ut=[],Lt(o)}return e}function y(){t.forEach((function(t){it(t.eventArguments)})),it(e)}function b(){var t,r=arguments.length>0&&void 0!==arguments[0]&&arguments[0],u=arguments.length>1?arguments[1]:void 0,h={},m=(i(t={},E,[]),i(t,g,[]),i(t,d,[]),i(t,T,[]),t);r?(c.concat(s).forEach((function(t,e){w(t,E)})),o.forEach((function(t){w(t,d)})),a.forEach((function(t){w(t,g)}))):n.forEach((function(t){w(t)}));var v={detail:{newAppStatuses:h,appsByNewStatus:m,totalAppChanges:n.length,originalEvent:null==e?void 0:e[0],oldUrl:l,newUrl:p,navigationIsCanceled:f}};return u&&j(v.detail,u),v;function w(t,e){var n=_(t);e=e||Tt(n),h[n]=e,(m[e]=m[e]||[]).push(n)}}}function It(t,e){return A(t)?C(t).then((function(t){return e.then((function(){return A(t)?B(t):t}))})):e.then((function(){return t}))}var kt=!1;function Bt(t){var e;kt=!0,t&&t.urlRerouteOnly&&(e=t.urlRerouteOnly,tt=e),et&&Lt()}function Wt(){return kt}et&&setTimeout((function(){kt||console.warn(p(1,!1))}),5e3);var Gt={getRawAppData:function(){return[].concat(Et)},reroute:Lt,NOT_LOADED:d,toLoadPromise:X,toBootstrapPromise:C,unregisterApplication:_t};et&&window.__SINGLE_SPA_DEVTOOLS__&&(window.__SINGLE_SPA_DEVTOOLS__.exposedMethods=Gt)},3701:(t,e,n)=>{n.d(e,{Z:()=>p});var r=null;try{r=require("react").createContext()}catch(t){}var o=n(268);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return f(t)}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(h,o.Component);var e,n,i,p=(n=h,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=c(n);if(i){var r=c(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return l(this,t)});function h(t){var e;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,h),u(f(e=p.call(this,t)),"handleRef",(function(t){e.el=t})),u(f(e),"addThingToDo",(function(t,n){e.state.hasError&&"unmount"!==t||(e.nextThingToDo=(e.nextThingToDo||Promise.resolve()).then((function(){if(!e.unmounted||"unmount"===t)return n.apply(void 0,arguments)})).catch((function(n){throw e.nextThingToDo=Promise.resolve(),e.setState({hasError:!0}),n&&n.message&&(n.message="During '".concat(t,"', parcel threw an error: ").concat(n.message)),e.props.handleError?e.props.handleError(n):setTimeout((function(){throw n})),n})))})),u(f(e),"getParcelProps",(function(){var t=a(a({},e.props),{},{domElement:e.el});return delete t.mountParcel,delete t.config,delete t.wrapWith,delete t.wrapStyle,delete t.appendTo,delete t.handleError,delete t.parcelDidMount,t})),e.state={hasError:!1},!t.config)throw new Error("single-spa-react's Parcel component requires the 'config' prop to either be a parcel config or a loading function that returns a promise. See https://github.com/single-spa/single-spa-react");return e}return(e=[{key:"componentDidMount",value:function(){var t=this;this.addThingToDo("mount",(function(){var e,n=t.props.mountParcel||t.mountParcel;if(!n)throw new Error("\n\t\t\t\t  <Parcel /> was not passed a mountParcel prop, nor is it rendered where mountParcel is within the React context.\n\t\t\t\t  If you are using <Parcel /> within a module that is not a single-spa application, you will need to import mountRootParcel from single-spa and pass it into <Parcel /> as a mountParcel prop\t\n\t\t\t\t");return t.el?e=t.el:(t.createdDomElement=e=document.createElement(t.props.wrapWith),Object.keys(t.props.wrapStyle).forEach((function(n){e.style[n]=t.props.wrapStyle[n]})),t.props.appendTo.appendChild(e)),t.parcel=n(t.props.config,a({domElement:e},t.getParcelProps())),t.parcel.mountPromise.then(t.props.parcelDidMount),t.parcel.mountPromise}))}},{key:"componentDidUpdate",value:function(){var t=this;this.addThingToDo("update",(function(){if(t.parcel&&t.parcel.update)return t.parcel.update(t.getParcelProps())}))}},{key:"componentWillUnmount",value:function(){var t=this;this.addThingToDo("unmount",(function(){if(t.parcel&&"MOUNTED"===t.parcel.getStatus())return t.parcel.unmount()})),this.createdDomElement&&this.createdDomElement.parentNode.removeChild(this.createdDomElement),this.unmounted=!0}},{key:"render",value:function(){var t=this;if(this.props.appendTo)return r&&r.Consumer?o.createElement(r.Consumer,null,(function(e){return t.mountParcel=e?e.mountParcel:null,null})):null;var e=r&&r.Consumer?o.createElement(r.Consumer,null,(function(e){return t.mountParcel=e?e.mountParcel:null,null})):void 0;return o.createElement(this.props.wrapWith,{ref:this.handleRef,style:this.props.wrapStyle,className:this.props.wrapClassName},e)}}])&&function(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(h.prototype,e),h}();u(p,"defaultProps",{wrapWith:"div",wrapStyle:{},parcelDidMount:function(){}})},2303:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(3255),o=(0,n(4729).xD)(r.ZP,(t=>(e,n,r)=>(r.revalidateOnFocus=!1,r.revalidateIfStale=!1,r.revalidateOnReconnect=!1,t(e,n,r))))}}]);