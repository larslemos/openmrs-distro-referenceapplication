var _ohri_openmrs_esm_ohri_hiv_app;(()=>{function j(a){var b=g[a];if(void 0!==b)return b.exports;var c=g[a]={id:a,loaded:!1,exports:{}};return L[a].call(c.exports,c,c.exports,j),c.loaded=!0,c.exports}var k,q,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L={6483:(b,c,d)=>{var f={"./start":()=>Promise.all([d.e(425),d.e(906),d.e(900),d.e(134),d.e(432)]).then(()=>()=>d(5877))},e=(a,b)=>(d.R=b,b=d.o(f,a)?f[a]():Promise.resolve().then(()=>{throw new Error("Module \""+a+"\" does not exist in container.")}),d.R=void 0,b),g=(a,b)=>{if(d.S){var c=d.S["default"];if(c&&c!==a)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return d.S["default"]=a,d.I("default",b)}};d.d(c,{get:()=>e,init:()=>g})}},g={};j.m=L,j.c=g,j.n=a=>{var b=a&&a.__esModule?()=>a.default:()=>a;return j.d(b,{a:b}),b},j.d=(a,b)=>{for(var c in b)j.o(b,c)&&!j.o(a,c)&&Object.defineProperty(a,c,{enumerable:!0,get:b[c]})},j.f={},j.e=a=>Promise.all(Object.keys(j.f).reduce((b,c)=>(j.f[c](a,b),b),[])),j.u=a=>a+".js",j.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"==typeof window)return window}}(),j.o=(a,b)=>Object.prototype.hasOwnProperty.call(a,b),k={},q="@ohri/openmrs-esm-ohri-hiv-app:",j.l=(a,b,c)=>{if(k[a])k[a].push(b);else{var d,e;if(void 0!==c)for(var g,m=document.getElementsByTagName("script"),n=0;n<m.length;n++)if(g=m[n],g.getAttribute("src")==a||g.getAttribute("data-webpack")==q+c){d=g;break}d||(e=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,j.nc&&d.setAttribute("nonce",j.nc),d.setAttribute("data-webpack",q+c),d.src=a),k[a]=[b];var o=(b,c)=>{d.onerror=d.onload=null,clearTimeout(h);var e=k[a];if(delete k[a],d.parentNode&&d.parentNode.removeChild(d),e&&e.forEach(a=>a(c)),b)return b(c)},h=setTimeout(o.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=o.bind(null,d.onerror),d.onload=o.bind(null,d.onload),e&&document.head.appendChild(d)}},j.r=a=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},j.nmd=a=>(a.paths=[],a.children||(a.children=[]),a),j.j=784,(()=>{j.S={};var b={},c={};j.I=(d,e)=>{e||(e=[]);var f=c[d];if(f||(f=c[d]={}),!(0<=e.indexOf(f))){if(e.push(f),b[d])return b[d];j.o(j.S,d)||(j.S[d]={});var g=j.S[d],a=(a,b,c,d)=>{var e=g[a]=g[a]||{},f=e[b];f&&(f.loaded||(!d==!f.eager?!("@ohri/openmrs-esm-ohri-hiv-app">f.from):!d))||(e[b]={get:c,from:"@ohri/openmrs-esm-ohri-hiv-app",eager:!!d})},h=[];return"default"===d&&(a("@openmrs/esm-framework","4.3.1-pre.632",()=>Promise.all([j.e(817),j.e(900)]).then(()=>()=>j(7817))),a("@openmrs/esm-patient-common-lib","4.0.0",()=>Promise.all([j.e(425),j.e(911),j.e(900),j.e(134),j.e(81)]).then(()=>()=>j(9911))),a("dayjs","1.11.6",()=>j.e(194).then(()=>()=>j(6194))),a("react-i18next","11.18.6",()=>Promise.all([j.e(900),j.e(175)]).then(()=>()=>j(9175))),a("react","18.2.0",()=>j.e(933).then(()=>()=>j(3933)))),b[d]=h.length?Promise.all(h).then(()=>b[d]=1):1}}})(),(()=>{var a;j.g.importScripts&&(a=j.g.location+"");var b=j.g.document;if(!a&&b&&(b.currentScript&&(a=b.currentScript.src),!a)){var c=b.getElementsByTagName("script");c.length&&(a=c[c.length-1].src)}if(!a)throw new Error("Automatic publicPath is not supported in this browser");a=a.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),j.p=a})(),w=a=>{var b=a=>a.split(".").map(a=>+a==a?+a:a),c=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(a),d=c[1]?b(c[1]):[];return c[2]&&(d.length++,d.push.apply(d,b(c[2]))),c[3]&&(d.push([]),d.push.apply(d,b(c[3]))),d},x=(b,c)=>{b=w(b),c=w(c);for(var d=0;;){if(d>=b.length)return d<c.length&&"u"!=(typeof c[d])[0];var f=b[d],g=(typeof f)[0];if(d>=c.length)return"u"==g;var h=c[d],j=(typeof h)[0];if(g!=j)return"o"==g&&"n"==j||"s"==j||"u"==g;if("o"!=g&&"u"!=g&&f!=h)return f<h;d++}},y=b=>{function c(){return h.pop().replace(/^\((.+)\)$/,"$1")}var d=b[0],e="";if(1===b.length)return"*";if(d+.5){e+=0==d?">=":-1==d?"<":1==d?"^":2==d?"~":0<d?"=":"!=";for(var f=1,g=1;g<b.length;g++)f--,e+="u"==(typeof(i=b[g]))[0]?"-":(0<f?".":"")+(f=2,i);return e}var h=[];for(g=1;g<b.length;g++){var i=b[g];h.push(0===i?"not("+c()+")":1===i?"("+c()+" || "+c()+")":2===i?h.pop()+" "+h.pop():y(i))}return c()},z=(a,b)=>{if(0 in a){b=w(b);var e=a[0],g=0>e;g&&(e=-e-1);for(var j=0,k=1,m=!0;;k++,j++){var o,q,t=k<a.length?(typeof a[k])[0]:"";if(j>=b.length||"o"==(q=(typeof(o=b[j]))[0]))return!m||("u"==t?k>e&&!g:""==t!=g);if("u"==q){if(!m||"u"!=t)return!1;}else if(!m)"s"!=t&&"n"!=t&&(m=!1,k--);else if(t==q){if(!(k<=e)){if(g?o>a[k]:o<a[k])return!1;o!=a[k]&&(m=!1)}else if(o!=a[k])return!1;}else if("s"!=t&&"n"!=t){if(g||k<=e)return!1;m=!1,k--}else{if(k<=e||q<t!=g)return!1;m=!1}}}var v=[],f=v.pop.bind(v);for(j=1;j<a.length;j++){var d=a[j];v.push(1==d?f()|f():2==d?f()&f():d?z(d,b):!f())}return!!f()},A=(a,b)=>{var c=a[b];return Object.keys(c).reduce((a,b)=>a&&(c[a].loaded||!x(a,b))?a:b,0)},B=(a,b,c,d)=>"Unsatisfied version "+c+" from "+(c&&a[b][c].from)+" of shared singleton module "+b+" (required "+y(d)+")",C=(a,b,c)=>{var d=A(a,c);return E(a[c][d])},D=(a,b,c,d)=>{var e=A(a,c);return z(d,e)||"undefined"!=typeof console&&console.warn&&console.warn(B(a,c,e,d)),E(a[c][e])},E=a=>(a.loaded=1,a.get()),G=(F=b=>function(c,d,e,f){var g=j.I(c);return g&&g.then?g.then(b.bind(b,c,j.S[c],d,e,f)):b(c,j.S[c],d,e,f)})((a,b,c,d)=>b&&j.o(b,c)?C(b,0,c):d()),H=F((a,b,c,d,e)=>b&&j.o(b,c)?D(b,0,c,d):e()),I={},J={7900:()=>H("default","react",[1,18,2,0],()=>j.e(933).then(()=>()=>j(3933))),906:()=>H("default","@openmrs/esm-framework",[1,4],()=>j.e(817).then(()=>()=>j(7817))),1824:()=>H("default","@openmrs/esm-patient-common-lib",[1,4],()=>Promise.all([j.e(911),j.e(81)]).then(()=>()=>j(9911))),6903:()=>H("default","react-i18next",[1,11,7,0],()=>j.e(92).then(()=>()=>j(9175))),6081:()=>G("default","@openmrs/esm-framework/src/internal",()=>j.e(817).then(()=>()=>j(7817))),1361:()=>H("default","dayjs",[1,1,8,16],()=>j.e(194).then(()=>()=>j(6194)))},K={81:[6081],134:[906,1824,6903],432:[1361],900:[7900]},j.f.consumes=(a,b)=>{j.o(K,a)&&K[a].forEach(a=>{if(j.o(I,a))return b.push(I[a]);var c=b=>{I[a]=0,j.m[a]=c=>{delete j.c[a],c.exports=b()}},d=b=>{delete I[a],j.m[a]=()=>{throw delete j.c[a],b}};try{var e=J[a]();e.then?b.push(I[a]=e.then(c).catch(d)):c(e)}catch(a){d(a)}})},(()=>{var b={784:0};j.f.j=(c,d)=>{var e=j.o(b,c)?b[c]:void 0;if(0!==e)if(e)d.push(e[2]);else if(/^(134|81|900)$/.test(c))b[c]=0;else{var f=new Promise((a,d)=>e=b[c]=[a,d]);d.push(e[2]=f);var g=j.p+j.u(c),h=new Error;j.l(g,d=>{if(j.o(b,c)&&(0!==(e=b[c])&&(b[c]=void 0),e)){var f=d&&("load"===d.type?"missing":d.type),g=d&&d.target&&d.target.src;h.message="Loading chunk "+c+" failed.\n("+f+": "+g+")",h.name="ChunkLoadError",h.type=f,h.request=g,e[1](h)}},"chunk-"+c,c)}};var a=(c,d)=>{var e,f,[g,a,h]=d,i=0;if(g.some(a=>0!==b[a])){for(e in a)j.o(a,e)&&(j.m[e]=a[e]);h&&h(j)}for(c&&c(d);i<g.length;i++)f=g[i],j.o(b,f)&&b[f]&&b[f][0](),b[f]=0},c=globalThis.webpackChunk_ohri_openmrs_esm_ohri_hiv_app=globalThis.webpackChunk_ohri_openmrs_esm_ohri_hiv_app||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})(),j.nc=void 0;var b=j(6483);_ohri_openmrs_esm_ohri_hiv_app=b})();