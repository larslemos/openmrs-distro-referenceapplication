var _openmrs_esm_patient_notes_app;(()=>{function j(a){var b=g[a];if(void 0!==b)return b.exports;var c=g[a]={id:a,loaded:!1,exports:{}};return M[a].call(c.exports,c,c.exports,j),c.loaded=!0,c.exports}var k,q,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M={240:(b,c,d)=>{var f={"./start":()=>d.e(459).then(()=>()=>d(2459))},e=(a,b)=>(d.R=b,b=d.o(f,a)?f[a]():Promise.resolve().then(()=>{throw new Error("Module \""+a+"\" does not exist in container.")}),d.R=void 0,b),g=(a,b)=>{if(d.S){var c=d.S["default"];if(c&&c!==a)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return d.S["default"]=a,d.I("default",b)}};d.d(c,{get:()=>e,init:()=>g})}},g={};j.m=M,j.c=g,j.n=a=>{var b=a&&a.__esModule?()=>a.default:()=>a;return j.d(b,{a:b}),b},j.d=(a,b)=>{for(var c in b)j.o(b,c)&&!j.o(a,c)&&Object.defineProperty(a,c,{enumerable:!0,get:b[c]})},j.f={},j.e=a=>Promise.all(Object.keys(j.f).reduce((b,c)=>(j.f[c](a,b),b),[])),j.u=a=>a+".js",j.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"==typeof window)return window}}(),j.o=(a,b)=>Object.prototype.hasOwnProperty.call(a,b),k={},q="@openmrs/esm-patient-notes-app:",j.l=(a,b,c)=>{if(k[a])k[a].push(b);else{var e,g;if(void 0!==c)for(var h,m=document.getElementsByTagName("script"),l=0;l<m.length;l++)if(h=m[l],h.getAttribute("src")==a||h.getAttribute("data-webpack")==q+c){e=h;break}e||(g=!0,(e=document.createElement("script")).charset="utf-8",e.timeout=120,j.nc&&e.setAttribute("nonce",j.nc),e.setAttribute("data-webpack",q+c),e.src=a),k[a]=[b];var n=(b,c)=>{e.onerror=e.onload=null,clearTimeout(f);var d=k[a];if(delete k[a],e.parentNode&&e.parentNode.removeChild(e),d&&d.forEach(a=>a(c)),b)return b(c)},f=setTimeout(n.bind(null,void 0,{type:"timeout",target:e}),12e4);e.onerror=n.bind(null,e.onerror),e.onload=n.bind(null,e.onload),g&&document.head.appendChild(e)}},j.r=a=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},j.nmd=a=>(a.paths=[],a.children||(a.children=[]),a),(()=>{j.S={};var b={},c={};j.I=(d,e)=>{e||(e=[]);var f=c[d];if(f||(f=c[d]={}),!(0<=e.indexOf(f))){if(e.push(f),b[d])return b[d];j.o(j.S,d)||(j.S[d]={});var g=j.S[d],a=(a,b,c,d)=>{var e=g[a]=g[a]||{},f=e[b];f&&(f.loaded||(!d==!f.eager?!("@openmrs/esm-patient-notes-app">f.from):!d))||(e[b]={get:c,from:"@openmrs/esm-patient-notes-app",eager:!!d})},h=[];return"default"===d&&(a("@openmrs/esm-framework","4.4.2-pre.736",()=>Promise.all([j.e(858),j.e(268)]).then(()=>()=>j(6858))),a("@openmrs/esm-patient-common-lib","4.6.1-pre.1669",()=>Promise.all([j.e(542),j.e(45),j.e(310),j.e(917),j.e(268),j.e(924),j.e(294),j.e(660)]).then(()=>()=>j(8294))),a("dayjs","1.11.3",()=>j.e(879).then(()=>()=>j(8879))),a("react-i18next","11.18.6",()=>Promise.all([j.e(588),j.e(268)]).then(()=>()=>j(6588))),a("react-router-dom","6.4.3",()=>Promise.all([j.e(591),j.e(268)]).then(()=>()=>j(6591))),a("react","18.2.0",()=>j.e(784).then(()=>()=>j(2784))),a("rxjs","6.6.7",()=>Promise.all([j.e(188),j.e(417)]).then(()=>()=>j(6417)))),b[d]=h.length?Promise.all(h).then(()=>b[d]=1):1}}})(),(()=>{var a;j.g.importScripts&&(a=j.g.location+"");var b=j.g.document;if(!a&&b&&(b.currentScript&&(a=b.currentScript.src),!a)){var c=b.getElementsByTagName("script");c.length&&(a=c[c.length-1].src)}if(!a)throw new Error("Automatic publicPath is not supported in this browser");a=a.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),j.p=a})(),x=a=>{var b=a=>a.split(".").map(a=>+a==a?+a:a),c=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(a),d=c[1]?b(c[1]):[];return c[2]&&(d.length++,d.push.apply(d,b(c[2]))),c[3]&&(d.push([]),d.push.apply(d,b(c[3]))),d},y=(b,c)=>{b=x(b),c=x(c);for(var d=0;;){if(d>=b.length)return d<c.length&&"u"!=(typeof c[d])[0];var f=b[d],g=(typeof f)[0];if(d>=c.length)return"u"==g;var a=c[d],h=(typeof a)[0];if(g!=h)return"o"==g&&"n"==h||"s"==h||"u"==g;if("o"!=g&&"u"!=g&&f!=a)return f<a;d++}},z=b=>{function c(){return h.pop().replace(/^\((.+)\)$/,"$1")}var d=b[0],e="";if(1===b.length)return"*";if(d+.5){e+=0==d?">=":-1==d?"<":1==d?"^":2==d?"~":0<d?"=":"!=";for(var f=1,g=1;g<b.length;g++)f--,e+="u"==(typeof(i=b[g]))[0]?"-":(0<f?".":"")+(f=2,i);return e}var h=[];for(g=1;g<b.length;g++){var i=b[g];h.push(0===i?"not("+c()+")":1===i?"("+c()+" || "+c()+")":2===i?h.pop()+" "+h.pop():z(i))}return c()},A=(a,b)=>{if(0 in a){b=x(b);var e=a[0],g=0>e;g&&(e=-e-1);for(var j=0,k=1,m=!0;;k++,j++){var o,q,t=k<a.length?(typeof a[k])[0]:"";if(j>=b.length||"o"==(q=(typeof(o=b[j]))[0]))return!m||("u"==t?k>e&&!g:""==t!=g);if("u"==q){if(!m||"u"!=t)return!1;}else if(!m)"s"!=t&&"n"!=t&&(m=!1,k--);else if(t==q){if(!(k<=e)){if(g?o>a[k]:o<a[k])return!1;o!=a[k]&&(m=!1)}else if(o!=a[k])return!1;}else if("s"!=t&&"n"!=t){if(g||k<=e)return!1;m=!1,k--}else{if(k<=e||q<t!=g)return!1;m=!1}}}var f=[],d=f.pop.bind(f);for(j=1;j<a.length;j++){var c=a[j];f.push(1==c?d()|d():2==c?d()&d():c?A(c,b):!d())}return!!d()},B=(a,b)=>{var c=a[b];return Object.keys(c).reduce((a,b)=>a&&(c[a].loaded||!y(a,b))?a:b,0)},C=(a,b,c,d)=>"Unsatisfied version "+c+" from "+(c&&a[b][c].from)+" of shared singleton module "+b+" (required "+z(d)+")",D=(a,b,c)=>{var d=B(a,c);return F(a[c][d])},E=(a,b,c,d)=>{var e=B(a,c);return A(d,e)||"undefined"!=typeof console&&console.warn&&console.warn(C(a,c,e,d)),F(a[c][e])},F=a=>(a.loaded=1,a.get()),H=(G=b=>function(c,d,e,f){var g=j.I(c);return g&&g.then?g.then(b.bind(b,c,j.S[c],d,e,f)):b(c,j.S[c],d,e,f)})((a,b,c,d)=>b&&j.o(b,c)?D(b,0,c):d()),I=G((a,b,c,d,e)=>b&&j.o(b,c)?E(b,0,c,d):e()),J={},K={268:()=>I("default","react",[1,18],()=>j.e(784).then(()=>()=>j(2784))),4924:()=>I("default","react-i18next",[1,11],()=>j.e(588).then(()=>()=>j(6588))),2444:()=>I("default","rxjs",[1,6],()=>Promise.all([j.e(188),j.e(417)]).then(()=>()=>j(6417))),6081:()=>H("default","@openmrs/esm-framework/src/internal",()=>j.e(858).then(()=>()=>j(6858))),8744:()=>I("default","react-router-dom",[1,6],()=>j.e(591).then(()=>()=>j(6591))),906:()=>I("default","@openmrs/esm-framework",[1,4],()=>Promise.all([j.e(858),j.e(268)]).then(()=>()=>j(6858))),6217:()=>I("default","@openmrs/esm-patient-common-lib",[1,4],()=>Promise.all([j.e(542),j.e(45),j.e(310),j.e(917),j.e(268),j.e(924),j.e(294)]).then(()=>()=>j(8294))),3565:()=>I("default","dayjs",[1,1],()=>j.e(879).then(()=>()=>j(8879)))},L={268:[268],294:[2444,6081,8744],400:[3565],459:[906,6217],660:[906,6217],924:[4924]},j.f.consumes=(a,b)=>{j.o(L,a)&&L[a].forEach(a=>{if(j.o(J,a))return b.push(J[a]);var c=b=>{J[a]=0,j.m[a]=c=>{delete j.c[a],c.exports=b()}},d=b=>{delete J[a],j.m[a]=()=>{throw delete j.c[a],b}};try{var e=K[a]();e.then?b.push(J[a]=e.then(c).catch(d)):c(e)}catch(a){d(a)}})},(()=>{var b={715:0};j.f.j=(c,d)=>{var e=j.o(b,c)?b[c]:void 0;if(0!==e)if(e)d.push(e[2]);else if(/^(268|660|924)$/.test(c))b[c]=0;else{var f=new Promise((a,d)=>e=b[c]=[a,d]);d.push(e[2]=f);var g=j.p+j.u(c),h=new Error;j.l(g,d=>{if(j.o(b,c)&&(0!==(e=b[c])&&(b[c]=void 0),e)){var f=d&&("load"===d.type?"missing":d.type),g=d&&d.target&&d.target.src;h.message="Loading chunk "+c+" failed.\n("+f+": "+g+")",h.name="ChunkLoadError",h.type=f,h.request=g,e[1](h)}},"chunk-"+c,c)}};var a=(c,d)=>{var e,f,[g,a,h]=d,i=0;if(g.some(a=>0!==b[a])){for(e in a)j.o(a,e)&&(j.m[e]=a[e]);h&&h(j)}for(c&&c(d);i<g.length;i++)f=g[i],j.o(b,f)&&b[f]&&b[f][0](),b[f]=0},c=globalThis.webpackChunk_openmrs_esm_patient_notes_app=globalThis.webpackChunk_openmrs_esm_patient_notes_app||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})(),j.nc=void 0;var b=j(240);_openmrs_esm_patient_notes_app=b})();