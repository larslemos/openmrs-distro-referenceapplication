(self.webpackChunk_openmrs_esm_dispensing_app=self.webpackChunk_openmrs_esm_dispensing_app||[]).push([[247],{8247:(e,n,t)=>{"use strict";t.r(n),t.d(n,{I18nContext:()=>S,I18nextProvider:()=>ue,Trans:()=>J,Translation:()=>se,composeInitialProps:()=>T,date:()=>ge,getDefaults:()=>N,getI18n:()=>D,getInitialProps:()=>A,initReactI18next:()=>R,number:()=>me,plural:()=>be,select:()=>he,selectOrdinal:()=>ve,setDefaults:()=>k,setI18n:()=>C,time:()=>ye,useSSR:()=>le,useTranslation:()=>te,withSSR:()=>de,withTranslation:()=>ae});var r=t(3366);function o(e,n){if(null==e)return{};var t,o,i=(0,r.Z)(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var c=t(1672),s=t(1739),u=t.n(s),l=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function p(e){var n={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},t=e.match(/<\/?([^\s]+?)[/\s>]/);if(t&&(n.name=t[1],(u()[t[1]]||"/"===e.charAt(e.length-2))&&(n.voidElement=!0),n.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var o=new RegExp(l),i=null;null!==(i=o.exec(e));)if(i[0].trim())if(i[1]){var a=i[1].trim(),c=[a,""];a.indexOf("=")>-1&&(c=a.split("=")),n.attrs[c[0]]=c[1],o.lastIndex--}else i[2]&&(n.attrs[i[2]]=i[3].trim().substring(1,i[3].length-1));return n}var f=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,d=/^\s*$/,g=Object.create(null);function y(e,n){switch(n.type){case"text":return e+n.content;case"tag":return e+="<"+n.name+(n.attrs?function(e){var n=[];for(var t in e)n.push(t+'="'+e[t]+'"');return n.length?" "+n.join(" "):""}(n.attrs):"")+(n.voidElement?"/>":">"),n.voidElement?e:e+n.children.reduce(y,"")+"</"+n.name+">";case"comment":return e+"\x3c!--"+n.comment+"--\x3e"}}var m={parse:function(e,n){n||(n={}),n.components||(n.components=g);var t,r=[],o=[],i=-1,a=!1;if(0!==e.indexOf("<")){var c=e.indexOf("<");r.push({type:"text",content:-1===c?e:e.substring(0,c)})}return e.replace(f,(function(c,s){if(a){if(c!=="</"+t.name+">")return;a=!1}var u,l="/"!==c.charAt(1),f=c.startsWith("\x3c!--"),g=s+c.length,y=e.charAt(g);if(f){var m=p(c);return i<0?(r.push(m),r):((u=o[i]).children.push(m),r)}if(l&&(i++,"tag"===(t=p(c)).type&&n.components[t.name]&&(t.type="component",a=!0),t.voidElement||a||!y||"<"===y||t.children.push({type:"text",content:e.slice(g,e.indexOf("<",g))}),0===i&&r.push(t),(u=o[i-1])&&u.children.push(t),o[i]=t),(!l||t.voidElement)&&(i>-1&&(t.voidElement||t.name===c.slice(2,-1))&&(i--,t=-1===i?r:o[i]),!a&&"<"!==y&&y)){u=-1===i?r:o[i].children;var h=e.indexOf("<",g),b=e.slice(g,-1===h?void 0:h);d.test(b)&&(b=" "),(h>-1&&i+u.length>=0||" "!==b)&&u.push({type:"text",content:b})}})),r},stringify:function(e){return e.reduce((function(e,n){return e+y("",n)}),"")}};const h=m;function b(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230);/g,O={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…"},j=function(e){return O[e]};function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function P(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var E,x={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:function(e){return e.replace(v,j)}},S=(0,c.createContext)();function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};x=P(P({},x),e)}function N(){return x}var I=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.usedNamespaces={}}var n,t;return n=e,(t=[{key:"addUsedNamespaces",value:function(e){var n=this;e.forEach((function(e){n.usedNamespaces[e]||(n.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}])&&b(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),e}();function C(e){E=e}function D(){return E}var R={type:"3rdParty",init:function(e){k(e.options.react),C(e)}};function T(e){return function(n){return new Promise((function(t){var r=A();e.getInitialProps?e.getInitialProps(n).then((function(e){t(P(P({},e),r))})):t(r)}))}}function A(){var e=D(),n=e.reportNamespaces?e.reportNamespaces.getUsedNamespaces():[],t={},r={};return e.languages.forEach((function(t){r[t]={},n.forEach((function(n){r[t][n]=e.getResourceBundle(t,n)||{}}))})),t.initialI18nStore=r,t.initialLanguage=e.language,t}function L(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"==typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var z={};function B(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&z[n[0]]||("string"==typeof n[0]&&(z[n[0]]=new Date),L.apply(void 0,n))}function U(e,n,t){e.loadNamespaces(n,(function(){e.isInitialized?t():e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}))}function _(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.languages[0],o=!!n.options&&n.options.fallbackLng,i=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!a(n.isLanguageChangingTo,e)||!n.hasResourceBundle(r,e)&&n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages)&&(!a(r,e)||o&&!a(i,e)))}function H(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return B("i18n.languages were undefined or empty",n.languages),!0;var r=void 0!==n.options.ignoreJSONStructure;return r?n.hasLoadedNamespace(e,{precheck:function(n,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!r(n.isLanguageChangingTo,e))return!1}}):_(e,n,t)}function K(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")}var V=["format"],F=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function W(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function M(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?W(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function $(e,n){if(!e)return!1;var t=e.props?e.props.children:e.children;return n?t.length>0:!!t}function Z(e){return e?e.props?e.props.children:e.children:[]}function q(e){return Array.isArray(e)?e:[e]}function Y(e,n){if(!e)return"";var t="",r=q(e),a=n.transSupportBasicHtmlNodes&&n.transKeepBasicHtmlNodesFor?n.transKeepBasicHtmlNodesFor:[];return r.forEach((function(e,r){if("string"==typeof e)t+="".concat(e);else if((0,c.isValidElement)(e)){var s=Object.keys(e.props).length,u=a.indexOf(e.type)>-1,l=e.props.children;if(!l&&u&&0===s)t+="<".concat(e.type,"/>");else if(l||u&&0===s)if(e.props.i18nIsDynamicList)t+="<".concat(r,"></").concat(r,">");else if(u&&1===s&&"string"==typeof l)t+="<".concat(e.type,">").concat(l,"</").concat(e.type,">");else{var p=Y(l,n);t+="<".concat(r,">").concat(p,"</").concat(r,">")}else t+="<".concat(r,"></").concat(r,">")}else if(null===e)L("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===i(e)){var f=e.format,d=o(e,V),g=Object.keys(d);if(1===g.length){var y=f?"".concat(g[0],", ").concat(f):g[0];t+="{{".concat(y,"}}")}else L("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else L("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),t}function J(e){var n=e.children,t=e.count,r=e.parent,a=e.i18nKey,s=e.context,u=e.tOptions,l=void 0===u?{}:u,p=e.values,f=e.defaults,d=e.components,g=e.ns,y=e.i18n,m=e.t,b=e.shouldUnescape,v=o(e,F),O=(0,c.useContext)(S)||{},j=O.i18n,w=O.defaultNS,P=y||j||D();if(!P)return B("You will need to pass in an i18next instance by using i18nextReactModule"),n;var E=m||P.t.bind(P)||function(e){return e};s&&(l.context=s);var x=M(M({},N()),P.options&&P.options.react),k=g||E.ns||w||P.options&&P.options.defaultNS;k="string"==typeof k?[k]:k||["translation"];var I=f||Y(n,x)||x.transEmptyNodeValue||a,C=x.hashTransKey,R=a||(C?C(I):I),T=p?l.interpolation:{interpolation:M(M({},l.interpolation),{},{prefix:"#$?",suffix:"?$#"})},A=M(M(M(M({},l),{},{count:t},p),T),{},{defaultValue:I,ns:k}),L=function(e,n,t,r,o,a){if(""===n)return[];var s=r.transKeepBasicHtmlNodesFor||[],u=n&&new RegExp(s.join("|")).test(n);if(!e&&!u)return[n];var l={};!function e(n){q(n).forEach((function(n){"string"!=typeof n&&($(n)?e(Z(n)):"object"!==i(n)||(0,c.isValidElement)(n)||Object.assign(l,n))}))}(e);var p=h.parse("<0>".concat(n,"</0>")),f=M(M({},l),o);function d(e,n,t){var r=Z(e),o=y(r,n.children,t);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return(0,c.isValidElement)(e)}))}(r)&&0===o.length?r:o}function g(e,n,t,r,o){e.dummy&&(e.children=n),t.push((0,c.cloneElement)(e,M(M({},e.props),{},{key:r}),o?void 0:n))}function y(n,o,l){var p=q(n);return q(o).reduce((function(n,o,m){var h,b,v,O=o.children&&o.children[0]&&o.children[0].content&&t.services.interpolator.interpolate(o.children[0].content,f,t.language);if("tag"===o.type){var j=p[parseInt(o.name,10)];!j&&1===l.length&&l[0][o.name]&&(j=l[0][o.name]),j||(j={});var w=0!==Object.keys(o.attrs).length?(h={props:o.attrs},(v=M({},b=j)).props=Object.assign(h.props,b.props),v):j,P=(0,c.isValidElement)(w),E=P&&$(o,!0)&&!o.voidElement,x=u&&"object"===i(w)&&w.dummy&&!P,S="object"===i(e)&&null!==e&&Object.hasOwnProperty.call(e,o.name);if("string"==typeof w){var k=t.services.interpolator.interpolate(w,f,t.language);n.push(k)}else if($(w)||E)g(w,d(w,o,l),n,m);else if(x){var N=y(p,o.children,l);n.push((0,c.cloneElement)(w,M(M({},w.props),{},{key:m}),N))}else if(Number.isNaN(parseFloat(o.name)))if(S)g(w,d(w,o,l),n,m,o.voidElement);else if(r.transSupportBasicHtmlNodes&&s.indexOf(o.name)>-1)if(o.voidElement)n.push((0,c.createElement)(o.name,{key:"".concat(o.name,"-").concat(m)}));else{var I=y(p,o.children,l);n.push((0,c.createElement)(o.name,{key:"".concat(o.name,"-").concat(m)},I))}else if(o.voidElement)n.push("<".concat(o.name," />"));else{var C=y(p,o.children,l);n.push("<".concat(o.name,">").concat(C,"</").concat(o.name,">"))}else if("object"!==i(w)||P)1===o.children.length&&O?n.push((0,c.cloneElement)(w,M(M({},w.props),{},{key:m}),O)):n.push((0,c.cloneElement)(w,M(M({},w.props),{},{key:m})));else{var D=o.children[0]?O:null;D&&n.push(D)}}else if("text"===o.type){var R=r.transWrapTextNodes,T=a?r.unescape(t.services.interpolator.interpolate(o.content,f,t.language)):t.services.interpolator.interpolate(o.content,f,t.language);R?n.push((0,c.createElement)(R,{key:"".concat(o.name,"-").concat(m)},T)):n.push(T)}return n}),[])}return Z(y([{dummy:!0,children:e||[]}],p,q(e||[]))[0])}(d||n,R?E(R,A):I,P,x,A,b),z=void 0!==r?r:x.defaultTransParent;return z?(0,c.createElement)(z,v,L):L}function G(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Q(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return G(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?G(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ee(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?X(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):X(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var ne=function(e,n){var t=(0,c.useRef)();return(0,c.useEffect)((function(){t.current=n?t.current:e}),[e,n]),t.current};function te(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=(0,c.useContext)(S)||{},o=r.i18n,i=r.defaultNS,a=t||o||D();if(a&&!a.reportNamespaces&&(a.reportNamespaces=new I),!a){B("You will need to pass in an i18next instance by using initReactI18next");var s=function(e){return Array.isArray(e)?e[e.length-1]:e},u=[s,{},!1];return u.t=s,u.i18n={},u.ready=!1,u}a.options.react&&void 0!==a.options.react.wait&&B("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var l=ee(ee(ee({},N()),a.options.react),n),p=l.useSuspense,f=l.keyPrefix,d=e||i||a.options&&a.options.defaultNS;d="string"==typeof d?[d]:d||["translation"],a.reportNamespaces.addUsedNamespaces&&a.reportNamespaces.addUsedNamespaces(d);var g=(a.isInitialized||a.initializedStoreOnce)&&d.every((function(e){return H(e,a,l)}));function y(){return a.getFixedT(null,"fallback"===l.nsMode?d:d[0],f)}var m=(0,c.useState)(y),h=Q(m,2),b=h[0],v=h[1],O=d.join(),j=ne(O),w=(0,c.useRef)(!0);(0,c.useEffect)((function(){var e=l.bindI18n,n=l.bindI18nStore;function t(){w.current&&v(y)}return w.current=!0,g||p||U(a,d,(function(){w.current&&v(y)})),g&&j&&j!==O&&w.current&&v(y),e&&a&&a.on(e,t),n&&a&&a.store.on(n,t),function(){w.current=!1,e&&a&&e.split(" ").forEach((function(e){return a.off(e,t)})),n&&a&&n.split(" ").forEach((function(e){return a.store.off(e,t)}))}}),[a,O]);var P=(0,c.useRef)(!0);(0,c.useEffect)((function(){w.current&&!P.current&&v(y),P.current=!1}),[a,f]);var E=[b,a,g];if(E.t=b,E.i18n=a,E.ready=g,g)return E;if(!g&&!p)return E;throw new Promise((function(e){U(a,d,(function(){e()}))}))}var re=["forwardedRef"];function oe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ie(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?oe(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):oe(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function ae(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(t){function r(r){var i=r.forwardedRef,a=o(r,re),s=Q(te(e,ie(ie({},a),{},{keyPrefix:n.keyPrefix})),3),u=s[0],l=s[1],p=s[2],f=ie(ie({},a),{},{t:u,i18n:l,tReady:p});return n.withRef&&i?f.ref=i:!n.withRef&&i&&(f.forwardedRef=i),(0,c.createElement)(t,f)}return r.displayName="withI18nextTranslation(".concat(K(t),")"),r.WrappedComponent=t,n.withRef?(0,c.forwardRef)((function(e,n){return(0,c.createElement)(r,Object.assign({},e,{forwardedRef:n}))})):r}}var ce=["ns","children"];function se(e){var n=e.ns,t=e.children,r=Q(te(n,o(e,ce)),3),i=r[0],a=r[1],c=r[2];return t(i,{i18n:a,lng:a.language},c)}function ue(e){var n=e.i18n,t=e.defaultNS,r=e.children,o=(0,c.useMemo)((function(){return{i18n:n,defaultNS:t}}),[n,t]);return(0,c.createElement)(S.Provider,{value:o},r)}function le(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.i18n,o=(0,c.useContext)(S)||{},i=o.i18n,a=r||i||D();a.options&&a.options.isClone||(e&&!a.initializedStoreOnce&&(a.services.resourceStore.data=e,a.options.ns=Object.values(e).reduce((function(e,n){return Object.keys(n).forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e}),a.options.ns),a.initializedStoreOnce=!0,a.isInitialized=!0),n&&!a.initializedLanguageOnce&&(a.changeLanguage(n),a.initializedLanguageOnce=!0))}var pe=["initialI18nStore","initialLanguage"];function fe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function de(){return function(e){function n(n){var t=n.initialI18nStore,r=n.initialLanguage,i=o(n,pe);return le(t,r),(0,c.createElement)(e,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?fe(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):fe(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},i))}return n.getInitialProps=T(e),n.displayName="withI18nextSSR(".concat(K(e),")"),n.WrappedComponent=e,n}}var ge=function(){return""},ye=function(){return""},me=function(){return""},he=function(){return""},be=function(){return""},ve=function(){return""}},1739:e=>{e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},3366:(e,n,t)=>{"use strict";function r(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(n,{Z:()=>r})}}]);