(globalThis.webpackChunk_openmrs_esm_patient_notes_app=globalThis.webpackChunk_openmrs_esm_patient_notes_app||[]).push([[879],{8879:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",r="second",i="minute",s="hour",u="day",a="week",o="month",h="quarter",f="year",c="date",d="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},M=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},p={s:M,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+M(r,2,"0")+":"+M(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,o),s=n-i<0,u=e.clone().add(r+(s?-1:1),o);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:f,w:a,d:u,D:c,h:s,m:i,s:r,ms:n,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",g={};g[y]=m;var v=function(t){return t instanceof w},D=function t(e,n,r){var i;if(!e)return y;if("string"==typeof e){var s=e.toLowerCase();g[s]&&(i=s),n&&(g[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;g[a]=e,i=a}return!r&&i&&(y=i),i||!r&&y},S=function(t,e){if(v(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},_=p;_.l=D,_.i=v,_.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function m(t){this.$L=D(t.locale,null,!0),this.parse(t)}var M=m.prototype;return M.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(_.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},M.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},M.$utils=function(){return _},M.isValid=function(){return!(this.$d.toString()===d)},M.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},M.isAfter=function(t,e){return S(t)<this.startOf(e)},M.isBefore=function(t,e){return this.endOf(e)<S(t)},M.$g=function(t,e,n){return _.u(t)?this[e]:this.set(n,t)},M.unix=function(){return Math.floor(this.valueOf()/1e3)},M.valueOf=function(){return this.$d.getTime()},M.startOf=function(t,e){var n=this,h=!!_.u(e)||e,d=_.p(t),$=function(t,e){var r=_.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return h?r:r.endOf(u)},l=function(t,e){return _.w(n.toDate()[t].apply(n.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,M=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(d){case f:return h?$(1,0):$(31,11);case o:return h?$(1,M):$(0,M+1);case a:var g=this.$locale().weekStart||0,v=(m<g?m+7:m)-g;return $(h?p-v:p+(6-v),M);case u:case c:return l(y+"Hours",0);case s:return l(y+"Minutes",1);case i:return l(y+"Seconds",2);case r:return l(y+"Milliseconds",3);default:return this.clone()}},M.endOf=function(t){return this.startOf(t,!1)},M.$set=function(t,e){var a,h=_.p(t),d="set"+(this.$u?"UTC":""),$=(a={},a[u]=d+"Date",a[c]=d+"Date",a[o]=d+"Month",a[f]=d+"FullYear",a[s]=d+"Hours",a[i]=d+"Minutes",a[r]=d+"Seconds",a[n]=d+"Milliseconds",a)[h],l=h===u?this.$D+(e-this.$W):e;if(h===o||h===f){var m=this.clone().set(c,1);m.$d[$](l),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},M.set=function(t,e){return this.clone().$set(t,e)},M.get=function(t){return this[_.p(t)]()},M.add=function(n,h){var c,d=this;n=Number(n);var $=_.p(h),l=function(t){var e=S(d);return _.w(e.date(e.date()+Math.round(t*n)),d)};if($===o)return this.set(o,this.$M+n);if($===f)return this.set(f,this.$y+n);if($===u)return l(1);if($===a)return l(7);var m=(c={},c[i]=t,c[s]=e,c[r]=1e3,c)[$]||1,M=this.$d.getTime()+n*m;return _.w(M,this)},M.subtract=function(t,e){return this.add(-1*t,e)},M.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=_.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,h=n.months,f=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return _.s(s%12||12,t,"0")},$=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:_.s(a+1,2,"0"),MMM:f(n.monthsShort,a,h,3),MMMM:f(h,a),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:f(n.weekdaysMin,this.$W,o,2),ddd:f(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:_.s(s,2,"0"),h:c(1),hh:c(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:_.s(u,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:i};return r.replace(l,(function(t,e){return e||m[t]||i.replace(":","")}))},M.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},M.diff=function(n,c,d){var $,l=_.p(c),m=S(n),M=(m.utcOffset()-this.utcOffset())*t,p=this-m,y=_.m(this,m);return y=($={},$[f]=y/12,$[o]=y,$[h]=y/3,$[a]=(p-M)/6048e5,$[u]=(p-M)/864e5,$[s]=p/e,$[i]=p/t,$[r]=p/1e3,$)[l]||p,d?y:_.a(y)},M.daysInMonth=function(){return this.endOf(o).$D},M.$locale=function(){return g[this.$L]},M.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},M.clone=function(){return _.w(this.$d,this)},M.toDate=function(){return new Date(this.valueOf())},M.toJSON=function(){return this.isValid()?this.toISOString():null},M.toISOString=function(){return this.$d.toISOString()},M.toString=function(){return this.$d.toUTCString()},m}(),O=w.prototype;return S.prototype=O,[["$ms",n],["$s",r],["$m",i],["$H",s],["$W",u],["$M",o],["$y",f],["$D",c]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,w,S),t.$i=!0),S},S.locale=D,S.isDayjs=v,S.unix=function(t){return S(1e3*t)},S.en=g[y],S.Ls=g,S.p={},S}()}}]);