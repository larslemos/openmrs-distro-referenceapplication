/*! For license information please see 6913.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_openmrs_esm_patient_chart_app=globalThis.webpackChunk_openmrs_esm_patient_chart_app||[]).push([[6913],{6278:(r,t,n)=>{n.d(t,{y:()=>h});var e=n(4658),o=n(1881),i=n(2532),s=n(5629),c=n(8859),u=n(1199),a=n(604),h=function(){function r(r){this._isScalar=!1,r&&(this._subscribe=r)}return r.prototype.lift=function(t){var n=new r;return n.source=this,n.operator=t,n},r.prototype.subscribe=function(r,t,n){var e=this.operator,c=function(r,t,n){if(r){if(r instanceof o.L)return r;if(r[i.b])return r[i.b]()}return r||t||n?new o.L(r,t,n):new o.L(s.c)}(r,t,n);if(e?c.add(e.call(c,this.source)):c.add(this.source||a.v.useDeprecatedSynchronousErrorHandling&&!c.syncErrorThrowable?this._subscribe(c):this._trySubscribe(c)),a.v.useDeprecatedSynchronousErrorHandling&&c.syncErrorThrowable&&(c.syncErrorThrowable=!1,c.syncErrorThrown))throw c.syncErrorValue;return c},r.prototype._trySubscribe=function(r){try{return this._subscribe(r)}catch(t){a.v.useDeprecatedSynchronousErrorHandling&&(r.syncErrorThrown=!0,r.syncErrorValue=t),(0,e._)(r)?r.error(t):console.warn(t)}},r.prototype.forEach=function(r,t){var n=this;return new(t=p(t))((function(t,e){var o;o=n.subscribe((function(t){try{r(t)}catch(r){e(r),o&&o.unsubscribe()}}),e,t)}))},r.prototype._subscribe=function(r){var t=this.source;return t&&t.subscribe(r)},r.prototype[c.L]=function(){return this},r.prototype.pipe=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return 0===r.length?this:(0,u.U)(r)(this)},r.prototype.toPromise=function(r){var t=this;return new(r=p(r))((function(r,n){var e;t.subscribe((function(r){return e=r}),(function(r){return n(r)}),(function(){return r(e)}))}))},r.create=function(t){return new r(t)},r}();function p(r){if(r||(r=a.v.Promise||Promise),!r)throw new Error("no Promise impl found");return r}},5629:(r,t,n)=>{n.d(t,{c:()=>i});var e=n(604),o=n(7804),i={closed:!0,next:function(r){},error:function(r){if(e.v.useDeprecatedSynchronousErrorHandling)throw r;(0,o.z)(r)},complete:function(){}}},1881:(r,t,n)=>{n.d(t,{L:()=>h});var e=n(2995),o=n(7371),i=n(5629),s=n(1586),c=n(2532),u=n(604),a=n(7804),h=function(r){function t(n,e,o){var s=r.call(this)||this;switch(s.syncErrorValue=null,s.syncErrorThrown=!1,s.syncErrorThrowable=!1,s.isStopped=!1,arguments.length){case 0:s.destination=i.c;break;case 1:if(!n){s.destination=i.c;break}if("object"==typeof n){n instanceof t?(s.syncErrorThrowable=n.syncErrorThrowable,s.destination=n,n.add(s)):(s.syncErrorThrowable=!0,s.destination=new p(s,n));break}default:s.syncErrorThrowable=!0,s.destination=new p(s,n,e,o)}return s}return e.ZT(t,r),t.prototype[c.b]=function(){return this},t.create=function(r,n,e){var o=new t(r,n,e);return o.syncErrorThrowable=!1,o},t.prototype.next=function(r){this.isStopped||this._next(r)},t.prototype.error=function(r){this.isStopped||(this.isStopped=!0,this._error(r))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,r.prototype.unsubscribe.call(this))},t.prototype._next=function(r){this.destination.next(r)},t.prototype._error=function(r){this.destination.error(r),this.unsubscribe()},t.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},t.prototype._unsubscribeAndRecycle=function(){var r=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=r,this},t}(s.w),p=function(r){function t(t,n,e,s){var c,u=r.call(this)||this;u._parentSubscriber=t;var a=u;return(0,o.m)(n)?c=n:n&&(c=n.next,e=n.error,s=n.complete,n!==i.c&&(a=Object.create(n),(0,o.m)(a.unsubscribe)&&u.add(a.unsubscribe.bind(a)),a.unsubscribe=u.unsubscribe.bind(u))),u._context=a,u._next=c,u._error=e,u._complete=s,u}return e.ZT(t,r),t.prototype.next=function(r){if(!this.isStopped&&this._next){var t=this._parentSubscriber;u.v.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,r)&&this.unsubscribe():this.__tryOrUnsub(this._next,r)}},t.prototype.error=function(r){if(!this.isStopped){var t=this._parentSubscriber,n=u.v.useDeprecatedSynchronousErrorHandling;if(this._error)n&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,r),this.unsubscribe()):(this.__tryOrUnsub(this._error,r),this.unsubscribe());else if(t.syncErrorThrowable)n?(t.syncErrorValue=r,t.syncErrorThrown=!0):(0,a.z)(r),this.unsubscribe();else{if(this.unsubscribe(),n)throw r;(0,a.z)(r)}}},t.prototype.complete=function(){var r=this;if(!this.isStopped){var t=this._parentSubscriber;if(this._complete){var n=function(){return r._complete.call(r._context)};u.v.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},t.prototype.__tryOrUnsub=function(r,t){try{r.call(this._context,t)}catch(r){if(this.unsubscribe(),u.v.useDeprecatedSynchronousErrorHandling)throw r;(0,a.z)(r)}},t.prototype.__tryOrSetError=function(r,t,n){if(!u.v.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,n)}catch(t){return u.v.useDeprecatedSynchronousErrorHandling?(r.syncErrorValue=t,r.syncErrorThrown=!0,!0):((0,a.z)(t),!0)}return!1},t.prototype._unsubscribe=function(){var r=this._parentSubscriber;this._context=null,this._parentSubscriber=null,r.unsubscribe()},t}(h)},1586:(r,t,n)=>{n.d(t,{w:()=>c});var e=n(3073),o=n(757),i=n(7371),s=n(2674),c=function(){function r(r){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,r&&(this._ctorUnsubscribe=!0,this._unsubscribe=r)}var t;return r.prototype.unsubscribe=function(){var t;if(!this.closed){var n=this,c=n._parentOrParents,a=n._ctorUnsubscribe,h=n._unsubscribe,p=n._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,c instanceof r)c.remove(this);else if(null!==c)for(var f=0;f<c.length;++f)c[f].remove(this);if((0,i.m)(h)){a&&(this._unsubscribe=void 0);try{h.call(this)}catch(r){t=r instanceof s.B?u(r.errors):[r]}}if((0,e.k)(p)){f=-1;for(var b=p.length;++f<b;){var l=p[f];if((0,o.K)(l))try{l.unsubscribe()}catch(r){t=t||[],r instanceof s.B?t=t.concat(u(r.errors)):t.push(r)}}}if(t)throw new s.B(t)}},r.prototype.add=function(t){var n=t;if(!t)return r.EMPTY;switch(typeof t){case"function":n=new r(t);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof r)){var e=n;(n=new r)._subscriptions=[e]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}var o=n._parentOrParents;if(null===o)n._parentOrParents=this;else if(o instanceof r){if(o===this)return n;n._parentOrParents=[o,this]}else{if(-1!==o.indexOf(this))return n;o.push(this)}var i=this._subscriptions;return null===i?this._subscriptions=[n]:i.push(n),n},r.prototype.remove=function(r){var t=this._subscriptions;if(t){var n=t.indexOf(r);-1!==n&&t.splice(n,1)}},r.EMPTY=((t=new r).closed=!0,t),r}();function u(r){return r.reduce((function(r,t){return r.concat(t instanceof s.B?t.errors:t)}),[])}},604:(r,t,n)=>{n.d(t,{v:()=>o});var e=!1,o={Promise:void 0,set useDeprecatedSynchronousErrorHandling(r){r&&(new Error).stack,e=r},get useDeprecatedSynchronousErrorHandling(){return e}}},4773:(r,t,n)=>{n.d(t,{E:()=>o,c:()=>i});var e=n(6278),o=new e.y((function(r){return r.complete()}));function i(r){return r?function(r){return new e.y((function(t){return r.schedule((function(){return t.complete()}))}))}(r):o}},2730:(r,t,n)=>{n.d(t,{h:()=>i});var e=n(2995),o=n(1881);function i(r,t){return function(n){return n.lift(new s(r,t))}}var s=function(){function r(r,t){this.predicate=r,this.thisArg=t}return r.prototype.call=function(r,t){return t.subscribe(new c(r,this.predicate,this.thisArg))},r}(),c=function(r){function t(t,n,e){var o=r.call(this,t)||this;return o.predicate=n,o.thisArg=e,o.count=0,o}return e.ZT(t,r),t.prototype._next=function(r){var t;try{t=this.predicate.call(this.thisArg,r,this.count++)}catch(r){return void this.destination.error(r)}t&&this.destination.next(r)},t}(o.L)},8859:(r,t,n)=>{n.d(t,{L:()=>e});var e=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}()},2532:(r,t,n)=>{n.d(t,{b:()=>e});var e=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}()},9120:(r,t,n)=>{n.d(t,{W:()=>e});var e=function(){function r(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}return r.prototype=Object.create(Error.prototype),r}()},4397:(r,t,n)=>{n.d(t,{K:()=>e});var e=function(){function r(){return Error.call(this),this.message="no elements in sequence",this.name="EmptyError",this}return r.prototype=Object.create(Error.prototype),r}()},2674:(r,t,n)=>{n.d(t,{B:()=>e});var e=function(){function r(r){return Error.call(this),this.message=r?r.length+" errors occurred during unsubscription:\n"+r.map((function(r,t){return t+1+") "+r.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=r,this}return r.prototype=Object.create(Error.prototype),r}()},4658:(r,t,n)=>{n.d(t,{_:()=>o});var e=n(1881);function o(r){for(;r;){var t=r,n=t.closed,o=t.destination,i=t.isStopped;if(n||i)return!1;r=o&&o instanceof e.L?o:null}return!0}},7804:(r,t,n)=>{function e(r){setTimeout((function(){throw r}),0)}n.d(t,{z:()=>e})},6930:(r,t,n)=>{function e(r){return r}n.d(t,{y:()=>e})},3073:(r,t,n)=>{n.d(t,{k:()=>e});var e=function(){return Array.isArray||function(r){return r&&"number"==typeof r.length}}()},7371:(r,t,n)=>{function e(r){return"function"==typeof r}n.d(t,{m:()=>e})},757:(r,t,n)=>{function e(r){return null!==r&&"object"==typeof r}n.d(t,{K:()=>e})},1199:(r,t,n)=>{n.d(t,{U:()=>i,z:()=>o});var e=n(6930);function o(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return i(r)}function i(r){return 0===r.length?e.y:1===r.length?r[0]:function(t){return r.reduce((function(r,t){return t(r)}),t)}}},2995:(r,t,n)=>{n.d(t,{ZT:()=>o});var e=function(r,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var n in t)t.hasOwnProperty(n)&&(r[n]=t[n])},e(r,t)};function o(r,t){function n(){this.constructor=r}e(r,t),r.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}}}]);