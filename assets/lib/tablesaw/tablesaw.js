/*!
 * jQuery JavaScript Library v2.1.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:01Z
 */
!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document")
return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t="length"in e&&e.length,n=K.type(e)
return"function"!==n&&!K.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e))}function i(e,t,n){if(K.isFunction(t))return K.grep(e,function(e,i){return!!t.call(e,i,e)!==n})
if(t.nodeType)return K.grep(e,function(e){return e===t!==n})
if("string"==typeof t){if(ae.test(t))return K.filter(t,e,n)
t=K.filter(t,e)}return K.grep(e,function(e){return U.call(t,e)>=0!==n})}function r(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function o(e){var t=fe[e]={}
return K.each(e.match(de)||[],function(e,n){t[n]=!0}),t}function a(){J.removeEventListener("DOMContentLoaded",a,!1),e.removeEventListener("load",a,!1),K.ready()}function s(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=K.expando+s.uid++}function l(e,t,n){var i
if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(be,"-$1").toLowerCase(),"string"==typeof(n=e.getAttribute(i))){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:ve.test(n)?K.parseJSON(n):n)}catch(e){}me.set(e,t,n)}else n=void 0
return n}function c(){return!0}function u(){return!1}function d(){try{return J.activeElement}catch(e){}}function f(e,t){return K.nodeName(e,"table")&&K.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function p(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function h(e){var t=He.exec(e.type)
return t?e.type=t[1]:e.removeAttribute("type"),e}function g(e,t){for(var n=0,i=e.length;n<i;n++)ge.set(e[n],"globalEval",!t||ge.get(t[n],"globalEval"))}function m(e,t){var n,i,r,o,a,s,l,c
if(1===t.nodeType){if(ge.hasData(e)&&(o=ge.access(e),a=ge.set(t,o),c=o.events)){delete a.handle,a.events={}
for(r in c)for(n=0,i=c[r].length;n<i;n++)K.event.add(t,r,c[r][n])}me.hasData(e)&&(s=me.access(e),l=K.extend({},s),me.set(t,l))}}function v(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[]
return void 0===t||t&&K.nodeName(e,t)?K.merge([e],n):n}function b(e,t){var n=t.nodeName.toLowerCase()
"input"===n&&Ce.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function y(t,n){var i,r=K(n.createElement(t)).appendTo(n.body),o=e.getDefaultComputedStyle&&(i=e.getDefaultComputedStyle(r[0]))?i.display:K.css(r[0],"display")
return r.detach(),o}function w(e){var t=J,n=Fe[e]
return n||(n=y(e,t),"none"!==n&&n||(Re=(Re||K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=Re[0].contentDocument,t.write(),t.close(),n=y(e,t),Re.detach()),Fe[e]=n),n}function x(e,t,n){var i,r,o,a,s=e.style
return n=n||Oe(e),n&&(a=n.getPropertyValue(t)||n[t]),n&&(""!==a||K.contains(e.ownerDocument,e)||(a=K.style(e,t)),Pe.test(a)&&Me.test(t)&&(i=s.width,r=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=i,s.minWidth=r,s.maxWidth=o)),void 0!==a?a+"":a}function C(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function T(e,t){if(t in e)return t
for(var n=t[0].toUpperCase()+t.slice(1),i=t,r=Ue.length;r--;)if((t=Ue[r]+n)in e)return t
return i}function k(e,t,n){var i=Ie.exec(t)
return i?Math.max(0,i[1]-(n||0))+(i[2]||"px"):t}function N(e,t,n,i,r){for(var o=n===(i?"border":"content")?4:"width"===t?1:0,a=0;o<4;o+=2)"margin"===n&&(a+=K.css(e,n+we[o],!0,r)),i?("content"===n&&(a-=K.css(e,"padding"+we[o],!0,r)),"margin"!==n&&(a-=K.css(e,"border"+we[o]+"Width",!0,r))):(a+=K.css(e,"padding"+we[o],!0,r),"padding"!==n&&(a+=K.css(e,"border"+we[o]+"Width",!0,r)))
return a}function E(e,t,n){var i=!0,r="width"===t?e.offsetWidth:e.offsetHeight,o=Oe(e),a="border-box"===K.css(e,"boxSizing",!1,o)
if(r<=0||null==r){if(r=x(e,t,o),(r<0||null==r)&&(r=e.style[t]),Pe.test(r))return r
i=a&&(Q.boxSizingReliable()||r===e.style[t]),r=parseFloat(r)||0}return r+N(e,t,n||(a?"border":"content"),i,o)+"px"}function S(e,t){for(var n,i,r,o=[],a=0,s=e.length;a<s;a++)i=e[a],i.style&&(o[a]=ge.get(i,"olddisplay"),n=i.style.display,t?(o[a]||"none"!==n||(i.style.display=""),""===i.style.display&&xe(i)&&(o[a]=ge.access(i,"olddisplay",w(i.nodeName)))):(r=xe(i),"none"===n&&r||ge.set(i,"olddisplay",r?n:K.css(i,"display"))))
for(a=0;a<s;a++)i=e[a],i.style&&(t&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=t?o[a]||"":"none"))
return e}function $(e,t,n,i,r){return new $.prototype.init(e,t,n,i,r)}function D(){return setTimeout(function(){Ve=void 0}),Ve=K.now()}function j(e,t){var n,i=0,r={height:e}
for(t=t?1:0;i<4;i+=2-t)n=we[i],r["margin"+n]=r["padding"+n]=e
return t&&(r.opacity=r.width=e),r}function A(e,t,n){for(var i,r=(Ze[t]||[]).concat(Ze["*"]),o=0,a=r.length;o<a;o++)if(i=r[o].call(n,t,e))return i}function L(e,t,n){var i,r,o,a,s,l,c,u=this,d={},f=e.style,p=e.nodeType&&xe(e),h=ge.get(e,"fxshow")
n.queue||(s=K._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,K.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],c=K.css(e,"display"),"inline"===("none"===c?ge.get(e,"olddisplay")||w(e.nodeName):c)&&"none"===K.css(e,"float")&&(f.display="inline-block")),n.overflow&&(f.overflow="hidden",u.always(function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]}))
for(i in t)if(r=t[i],Ge.exec(r)){if(delete t[i],o=o||"toggle"===r,r===(p?"hide":"show")){if("show"!==r||!h||void 0===h[i])continue
p=!0}d[i]=h&&h[i]||K.style(e,i)}else c=void 0
if(K.isEmptyObject(d))"inline"===("none"===c?w(e.nodeName):c)&&(f.display=c)
else{h?"hidden"in h&&(p=h.hidden):h=ge.access(e,"fxshow",{}),o&&(h.hidden=!p),p?K(e).show():u.done(function(){K(e).hide()}),u.done(function(){var t
ge.remove(e,"fxshow")
for(t in d)K.style(e,t,d[t])})
for(i in d)a=A(p?h[i]:0,i,u),i in h||(h[i]=a.start,p&&(a.end=a.start,a.start="width"===i||"height"===i?1:0))}}function H(e,t){var n,i,r,o,a
for(n in e)if(i=K.camelCase(n),r=t[i],o=e[n],K.isArray(o)&&(r=o[1],o=e[n]=o[0]),n!==i&&(e[i]=o,delete e[n]),(a=K.cssHooks[i])&&"expand"in a){o=a.expand(o),delete e[i]
for(n in o)n in e||(e[n]=o[n],t[n]=r)}else t[i]=r}function q(e,t,n){var i,r,o=0,a=Ke.length,s=K.Deferred().always(function(){delete l.elem}),l=function(){if(r)return!1
for(var t=Ve||D(),n=Math.max(0,c.startTime+c.duration-t),i=n/c.duration||0,o=1-i,a=0,l=c.tweens.length;a<l;a++)c.tweens[a].run(o)
return s.notifyWith(e,[c,o,n]),o<1&&l?n:(s.resolveWith(e,[c]),!1)},c=s.promise({elem:e,props:K.extend({},t),opts:K.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Ve||D(),duration:n.duration,tweens:[],createTween:function(t,n){var i=K.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing)
return c.tweens.push(i),i},stop:function(t){var n=0,i=t?c.tweens.length:0
if(r)return this
for(r=!0;n<i;n++)c.tweens[n].run(1)
return t?s.resolveWith(e,[c,t]):s.rejectWith(e,[c,t]),this}}),u=c.props
for(H(u,c.opts.specialEasing);o<a;o++)if(i=Ke[o].call(c,e,u,c.opts))return i
return K.map(u,A,c),K.isFunction(c.opts.start)&&c.opts.start.call(e,c),K.fx.timer(K.extend(l,{elem:e,anim:c,queue:c.opts.queue})),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always)}function _(e){return function(t,n){"string"!=typeof t&&(n=t,t="*")
var i,r=0,o=t.toLowerCase().match(de)||[]
if(K.isFunction(n))for(;i=o[r++];)"+"===i[0]?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(n)):(e[i]=e[i]||[]).push(n)}}function R(e,t,n,i){function r(s){var l
return o[s]=!0,K.each(e[s]||[],function(e,s){var c=s(t,n,i)
return"string"!=typeof c||a||o[c]?a?!(l=c):void 0:(t.dataTypes.unshift(c),r(c),!1)}),l}var o={},a=e===gt
return r(t.dataTypes[0])||!o["*"]&&r("*")}function F(e,t){var n,i,r=K.ajaxSettings.flatOptions||{}
for(n in t)void 0!==t[n]&&((r[n]?e:i||(i={}))[n]=t[n])
return i&&K.extend(!0,e,i),e}function M(e,t,n){for(var i,r,o,a,s=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"))
if(i)for(r in s)if(s[r]&&s[r].test(i)){l.unshift(r)
break}if(l[0]in n)o=l[0]
else{for(r in n){if(!l[0]||e.converters[r+" "+l[0]]){o=r
break}a||(a=r)}o=o||a}if(o)return o!==l[0]&&l.unshift(o),n[o]}function P(e,t,n,i){var r,o,a,s,l,c={},u=e.dataTypes.slice()
if(u[1])for(a in e.converters)c[a.toLowerCase()]=e.converters[a]
for(o=u.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=u.shift())if("*"===o)o=l
else if("*"!==l&&l!==o){if(!(a=c[l+" "+o]||c["* "+o]))for(r in c)if(s=r.split(" "),s[1]===o&&(a=c[l+" "+s[0]]||c["* "+s[0]])){!0===a?a=c[r]:!0!==c[r]&&(o=s[0],u.unshift(s[1]))
break}if(!0!==a)if(a&&e.throws)t=a(t)
else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}function O(e,t,n,i){var r
if(K.isArray(t))K.each(t,function(t,r){n||wt.test(e)?i(e,r):O(e+"["+("object"==typeof r?t:"")+"]",r,n,i)})
else if(n||"object"!==K.type(t))i(e,t)
else for(r in t)O(e+"["+r+"]",t[r],n,i)}function B(e){return K.isWindow(e)?e:9===e.nodeType&&e.defaultView}var I=[],W=I.slice,z=I.concat,X=I.push,U=I.indexOf,V={},Y=V.toString,G=V.hasOwnProperty,Q={},J=e.document,K=function(e,t){return new K.fn.init(e,t)},Z=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ee=/^-ms-/,te=/-([\da-z])/gi,ne=function(e,t){return t.toUpperCase()}
K.fn=K.prototype={jquery:"2.1.4",constructor:K,selector:"",length:0,toArray:function(){return W.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:W.call(this)},pushStack:function(e){var t=K.merge(this.constructor(),e)
return t.prevObject=this,t.context=this.context,t},each:function(e,t){return K.each(this,e,t)},map:function(e){return this.pushStack(K.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(W.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0)
return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:X,sort:I.sort,splice:I.splice},K.extend=K.fn.extend=function(){var e,t,n,i,r,o,a=arguments[0]||{},s=1,l=arguments.length,c=!1
for("boolean"==typeof a&&(c=a,a=arguments[s]||{},s++),"object"==typeof a||K.isFunction(a)||(a={}),s===l&&(a=this,s--);s<l;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],i=e[t],a!==i&&(c&&i&&(K.isPlainObject(i)||(r=K.isArray(i)))?(r?(r=!1,o=n&&K.isArray(n)?n:[]):o=n&&K.isPlainObject(n)?n:{},a[t]=K.extend(c,o,i)):void 0!==i&&(a[t]=i))
return a},K.extend({expando:"jQuery"+("2.1.4"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===K.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!K.isArray(e)&&e-parseFloat(e)+1>=0},isPlainObject:function(e){return"object"===K.type(e)&&!e.nodeType&&!K.isWindow(e)&&!(e.constructor&&!G.call(e.constructor.prototype,"isPrototypeOf"))},isEmptyObject:function(e){var t
for(t in e)return!1
return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?V[Y.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;(e=K.trim(e))&&(1===e.indexOf("use strict")?(t=J.createElement("script"),t.text=e,J.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(ee,"ms-").replace(te,ne)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,i){var r=0,o=e.length,a=n(e)
if(i){if(a)for(;r<o&&!1!==t.apply(e[r],i);r++);else for(r in e)if(!1===t.apply(e[r],i))break}else if(a)for(;r<o&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break
return e},trim:function(e){return null==e?"":(e+"").replace(Z,"")},makeArray:function(e,t){var i=t||[]
return null!=e&&(n(Object(e))?K.merge(i,"string"==typeof e?[e]:e):X.call(i,e)),i},inArray:function(e,t,n){return null==t?-1:U.call(t,e,n)},merge:function(e,t){for(var n=+t.length,i=0,r=e.length;i<n;i++)e[r++]=t[i]
return e.length=r,e},grep:function(e,t,n){for(var i=[],r=0,o=e.length,a=!n;r<o;r++)!t(e[r],r)!==a&&i.push(e[r])
return i},map:function(e,t,i){var r,o=0,a=e.length,s=n(e),l=[]
if(s)for(;o<a;o++)null!=(r=t(e[o],o,i))&&l.push(r)
else for(o in e)null!=(r=t(e[o],o,i))&&l.push(r)
return z.apply([],l)},guid:1,proxy:function(e,t){var n,i,r
if("string"==typeof t&&(n=e[t],t=e,e=n),K.isFunction(e))return i=W.call(arguments,2),r=function(){return e.apply(t||this,i.concat(W.call(arguments)))},r.guid=e.guid=e.guid||K.guid++,r},now:Date.now,support:Q}),K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){V["[object "+t+"]"]=t.toLowerCase()})
var ie=function(e){function t(e,t,n,i){var r,o,a,s,c,d,f,p,h,g
if((t?t.ownerDocument||t:M)!==j&&D(t),t=t||j,n=n||[],s=t.nodeType,"string"!=typeof e||!e||1!==s&&9!==s&&11!==s)return n
if(!i&&L){if(11!==s&&(r=me.exec(e)))if(a=r[1]){if(9===s){if(!(o=t.getElementById(a))||!o.parentNode)return n
if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&R(t,o)&&o.id===a)return n.push(o),n}else{if(r[2])return Q.apply(n,t.getElementsByTagName(e)),n
if((a=r[3])&&y.getElementsByClassName)return Q.apply(n,t.getElementsByClassName(a)),n}if(y.qsa&&(!H||!H.test(e))){if(p=f=F,h=t,g=1!==s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(d=T(e),(f=t.getAttribute("id"))?p=f.replace(be,"\\$&"):t.setAttribute("id",p),p="[id='"+p+"'] ",c=d.length;c--;)d[c]=p+u(d[c])
h=ve.test(e)&&l(t.parentNode)||t,g=d.join(",")}if(g)try{return Q.apply(n,h.querySelectorAll(g)),n}catch(e){}finally{f||t.removeAttribute("id")}}}return N(e.replace(ae,"$1"),t,n,i)}function n(){function e(n,i){return t.push(n+" ")>w.cacheLength&&delete e[t.shift()],e[n+" "]=i}var t=[]
return e}function i(e){return e[F]=!0,e}function r(e){var t=j.createElement("div")
try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),i=e.length;i--;)w.attrHandle[n[i]]=t}function a(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||X)-(~e.sourceIndex||X)
if(i)return i
if(n)for(;n=n.nextSibling;)if(n===t)return-1
return e?1:-1}function s(e){return i(function(t){return t=+t,i(function(n,i){for(var r,o=e([],n.length,t),a=o.length;a--;)n[r=o[a]]&&(n[r]=!(i[r]=n[r]))})})}function l(e){return e&&void 0!==e.getElementsByTagName&&e}function c(){}function u(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value
return i}function d(e,t,n){var i=t.dir,r=n&&"parentNode"===i,o=O++
return t.first?function(t,n,o){for(;t=t[i];)if(1===t.nodeType||r)return e(t,n,o)}:function(t,n,a){var s,l,c=[P,o]
if(a){for(;t=t[i];)if((1===t.nodeType||r)&&e(t,n,a))return!0}else for(;t=t[i];)if(1===t.nodeType||r){if(l=t[F]||(t[F]={}),(s=l[i])&&s[0]===P&&s[1]===o)return c[2]=s[2]
if(l[i]=c,c[2]=e(t,n,a))return!0}}}function f(e){return e.length>1?function(t,n,i){for(var r=e.length;r--;)if(!e[r](t,n,i))return!1
return!0}:e[0]}function p(e,n,i){for(var r=0,o=n.length;r<o;r++)t(e,n[r],i)
return i}function h(e,t,n,i,r){for(var o,a=[],s=0,l=e.length,c=null!=t;s<l;s++)(o=e[s])&&(n&&!n(o,i,r)||(a.push(o),c&&t.push(s)))
return a}function g(e,t,n,r,o,a){return r&&!r[F]&&(r=g(r)),o&&!o[F]&&(o=g(o,a)),i(function(i,a,s,l){var c,u,d,f=[],g=[],m=a.length,v=i||p(t||"*",s.nodeType?[s]:s,[]),b=!e||!i&&t?v:h(v,f,e,s,l),y=n?o||(i?e:m||r)?[]:a:b
if(n&&n(b,y,s,l),r)for(c=h(y,g),r(c,[],s,l),u=c.length;u--;)(d=c[u])&&(y[g[u]]=!(b[g[u]]=d))
if(i){if(o||e){if(o){for(c=[],u=y.length;u--;)(d=y[u])&&c.push(b[u]=d)
o(null,y=[],c,l)}for(u=y.length;u--;)(d=y[u])&&(c=o?K(i,d):f[u])>-1&&(i[c]=!(a[c]=d))}}else y=h(y===a?y.splice(m,y.length):y),o?o(null,a,y,l):Q.apply(a,y)})}function m(e){for(var t,n,i,r=e.length,o=w.relative[e[0].type],a=o||w.relative[" "],s=o?1:0,l=d(function(e){return e===t},a,!0),c=d(function(e){return K(t,e)>-1},a,!0),p=[function(e,n,i){var r=!o&&(i||n!==E)||((t=n).nodeType?l(e,n,i):c(e,n,i))
return t=null,r}];s<r;s++)if(n=w.relative[e[s].type])p=[d(f(p),n)]
else{if(n=w.filter[e[s].type].apply(null,e[s].matches),n[F]){for(i=++s;i<r&&!w.relative[e[i].type];i++);return g(s>1&&f(p),s>1&&u(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ae,"$1"),n,s<i&&m(e.slice(s,i)),i<r&&m(e=e.slice(i)),i<r&&u(e))}p.push(n)}return f(p)}function v(e,n){var r=n.length>0,o=e.length>0,a=function(i,a,s,l,c){var u,d,f,p=0,g="0",m=i&&[],v=[],b=E,y=i||o&&w.find.TAG("*",c),x=P+=null==b?1:Math.random()||.1,C=y.length
for(c&&(E=a!==j&&a);g!==C&&null!=(u=y[g]);g++){if(o&&u){for(d=0;f=e[d++];)if(f(u,a,s)){l.push(u)
break}c&&(P=x)}r&&((u=!f&&u)&&p--,i&&m.push(u))}if(p+=g,r&&g!==p){for(d=0;f=n[d++];)f(m,v,a,s)
if(i){if(p>0)for(;g--;)m[g]||v[g]||(v[g]=Y.call(l))
v=h(v)}Q.apply(l,v),c&&!i&&v.length>0&&p+n.length>1&&t.uniqueSort(l)}return c&&(P=x,E=b),m}
return r?i(a):a}var b,y,w,x,C,T,k,N,E,S,$,D,j,A,L,H,q,_,R,F="sizzle"+1*new Date,M=e.document,P=0,O=0,B=n(),I=n(),W=n(),z=function(e,t){return e===t&&($=!0),0},X=1<<31,U={}.hasOwnProperty,V=[],Y=V.pop,G=V.push,Q=V.push,J=V.slice,K=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n
return-1},Z="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ee="[\\x20\\t\\r\\n\\f]",te="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ne=te.replace("w","w#"),ie="\\["+ee+"*("+te+")(?:"+ee+"*([*^$|!~]?=)"+ee+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ne+"))|)"+ee+"*\\]",re=":("+te+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ie+")*)|.*)\\)|)",oe=new RegExp(ee+"+","g"),ae=new RegExp("^"+ee+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ee+"+$","g"),se=new RegExp("^"+ee+"*,"+ee+"*"),le=new RegExp("^"+ee+"*([>+~]|"+ee+")"+ee+"*"),ce=new RegExp("="+ee+"*([^\\]'\"]*?)"+ee+"*\\]","g"),ue=new RegExp(re),de=new RegExp("^"+ne+"$"),fe={ID:new RegExp("^#("+te+")"),CLASS:new RegExp("^\\.("+te+")"),TAG:new RegExp("^("+te.replace("w","w*")+")"),ATTR:new RegExp("^"+ie),PSEUDO:new RegExp("^"+re),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ee+"*(even|odd|(([+-]|)(\\d*)n|)"+ee+"*(?:([+-]|)"+ee+"*(\\d+)|))"+ee+"*\\)|)","i"),bool:new RegExp("^(?:"+Z+")$","i"),needsContext:new RegExp("^"+ee+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ee+"*((?:-\\d)?\\d*)"+ee+"*\\)|)(?=[^-]|$)","i")},pe=/^(?:input|select|textarea|button)$/i,he=/^h\d$/i,ge=/^[^{]+\{\s*\[native \w/,me=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ve=/[+~]/,be=/'|\\/g,ye=new RegExp("\\\\([\\da-f]{1,6}"+ee+"?|("+ee+")|.)","ig"),we=function(e,t,n){var i="0x"+t-65536
return i!==i||n?t:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},xe=function(){D()}
try{Q.apply(V=J.call(M.childNodes),M.childNodes),V[M.childNodes.length].nodeType}catch(e){Q={apply:V.length?function(e,t){G.apply(e,J.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}y=t.support={},C=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement
return!!t&&"HTML"!==t.nodeName},D=t.setDocument=function(e){var t,n,i=e?e.ownerDocument||e:M
return i!==j&&9===i.nodeType&&i.documentElement?(j=i,A=i.documentElement,n=i.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",xe,!1):n.attachEvent&&n.attachEvent("onunload",xe)),L=!C(i),y.attributes=r(function(e){return e.className="i",!e.getAttribute("className")}),y.getElementsByTagName=r(function(e){return e.appendChild(i.createComment("")),!e.getElementsByTagName("*").length}),y.getElementsByClassName=ge.test(i.getElementsByClassName),y.getById=r(function(e){return A.appendChild(e).id=F,!i.getElementsByName||!i.getElementsByName(F).length}),y.getById?(w.find.ID=function(e,t){if(void 0!==t.getElementById&&L){var n=t.getElementById(e)
return n&&n.parentNode?[n]:[]}},w.filter.ID=function(e){var t=e.replace(ye,we)
return function(e){return e.getAttribute("id")===t}}):(delete w.find.ID,w.filter.ID=function(e){var t=e.replace(ye,we)
return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id")
return n&&n.value===t}}),w.find.TAG=y.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):y.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],r=0,o=t.getElementsByTagName(e)
if("*"===e){for(;n=o[r++];)1===n.nodeType&&i.push(n)
return i}return o},w.find.CLASS=y.getElementsByClassName&&function(e,t){if(L)return t.getElementsByClassName(e)},q=[],H=[],(y.qsa=ge.test(i.querySelectorAll))&&(r(function(e){A.appendChild(e).innerHTML="<a id='"+F+"'></a><select id='"+F+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&H.push("[*^$]="+ee+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||H.push("\\["+ee+"*(?:value|"+Z+")"),e.querySelectorAll("[id~="+F+"-]").length||H.push("~="),e.querySelectorAll(":checked").length||H.push(":checked"),e.querySelectorAll("a#"+F+"+*").length||H.push(".#.+[+~]")}),r(function(e){var t=i.createElement("input")
t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&H.push("name"+ee+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||H.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),H.push(",.*:")})),(y.matchesSelector=ge.test(_=A.matches||A.webkitMatchesSelector||A.mozMatchesSelector||A.oMatchesSelector||A.msMatchesSelector))&&r(function(e){y.disconnectedMatch=_.call(e,"div"),_.call(e,"[s!='']:x"),q.push("!=",re)}),H=H.length&&new RegExp(H.join("|")),q=q.length&&new RegExp(q.join("|")),t=ge.test(A.compareDocumentPosition),R=t||ge.test(A.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode
return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0
return!1},z=t?function(e,t){if(e===t)return $=!0,0
var n=!e.compareDocumentPosition-!t.compareDocumentPosition
return n||(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!y.sortDetached&&t.compareDocumentPosition(e)===n?e===i||e.ownerDocument===M&&R(M,e)?-1:t===i||t.ownerDocument===M&&R(M,t)?1:S?K(S,e)-K(S,t):0:4&n?-1:1)}:function(e,t){if(e===t)return $=!0,0
var n,r=0,o=e.parentNode,s=t.parentNode,l=[e],c=[t]
if(!o||!s)return e===i?-1:t===i?1:o?-1:s?1:S?K(S,e)-K(S,t):0
if(o===s)return a(e,t)
for(n=e;n=n.parentNode;)l.unshift(n)
for(n=t;n=n.parentNode;)c.unshift(n)
for(;l[r]===c[r];)r++
return r?a(l[r],c[r]):l[r]===M?-1:c[r]===M?1:0},i):j},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==j&&D(e),n=n.replace(ce,"='$1']"),y.matchesSelector&&L&&(!q||!q.test(n))&&(!H||!H.test(n)))try{var i=_.call(e,n)
if(i||y.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(e){}return t(n,j,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==j&&D(e),R(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==j&&D(e)
var n=w.attrHandle[t.toLowerCase()],i=n&&U.call(w.attrHandle,t.toLowerCase())?n(e,t,!L):void 0
return void 0!==i?i:y.attributes||!L?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],i=0,r=0
if($=!y.detectDuplicates,S=!y.sortStable&&e.slice(0),e.sort(z),$){for(;t=e[r++];)t===e[r]&&(i=n.push(r))
for(;i--;)e.splice(n[i],1)}return S=null,e},x=t.getText=function(e){var t,n="",i=0,r=e.nodeType
if(r){if(1===r||9===r||11===r){if("string"==typeof e.textContent)return e.textContent
for(e=e.firstChild;e;e=e.nextSibling)n+=x(e)}else if(3===r||4===r)return e.nodeValue}else for(;t=e[i++];)n+=x(t)
return n},w=t.selectors={cacheLength:50,createPseudo:i,match:fe,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ye,we),e[3]=(e[3]||e[4]||e[5]||"").replace(ye,we),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2]
return fe.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&ue.test(n)&&(t=T(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(ye,we).toLowerCase()
return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=B[e+" "]
return t||(t=new RegExp("(^|"+ee+")"+e+"("+ee+"|$)"))&&B(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,i){return function(r){var o=t.attr(r,e)
return null==o?"!="===n:!n||(o+="","="===n?o===i:"!="===n?o!==i:"^="===n?i&&0===o.indexOf(i):"*="===n?i&&o.indexOf(i)>-1:"$="===n?i&&o.slice(-i.length)===i:"~="===n?(" "+o.replace(oe," ")+" ").indexOf(i)>-1:"|="===n&&(o===i||o.slice(0,i.length+1)===i+"-"))}},CHILD:function(e,t,n,i,r){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t
return 1===i&&0===r?function(e){return!!e.parentNode}:function(t,n,l){var c,u,d,f,p,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,v=s&&t.nodeName.toLowerCase(),b=!l&&!s
if(m){if(o){for(;g;){for(d=t;d=d[g];)if(s?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1
h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&b){for(u=m[F]||(m[F]={}),c=u[e]||[],p=c[0]===P&&c[1],f=c[0]===P&&c[2],d=p&&m.childNodes[p];d=++p&&d&&d[g]||(f=p=0)||h.pop();)if(1===d.nodeType&&++f&&d===t){u[e]=[P,p,f]
break}}else if(b&&(c=(t[F]||(t[F]={}))[e])&&c[0]===P)f=c[1]
else for(;(d=++p&&d&&d[g]||(f=p=0)||h.pop())&&((s?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++f||(b&&((d[F]||(d[F]={}))[e]=[P,f]),d!==t)););return(f-=r)===i||f%i==0&&f/i>=0}}},PSEUDO:function(e,n){var r,o=w.pseudos[e]||w.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e)
return o[F]?o(n):o.length>1?(r=[e,e,"",n],w.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,t){for(var i,r=o(e,n),a=r.length;a--;)i=K(e,r[a]),e[i]=!(t[i]=r[a])}):function(e){return o(e,0,r)}):o}},pseudos:{not:i(function(e){var t=[],n=[],r=k(e.replace(ae,"$1"))
return r[F]?i(function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:i(function(e){return function(n){return t(e,n).length>0}}),contains:i(function(e){return e=e.replace(ye,we),function(t){return(t.textContent||t.innerText||x(t)).indexOf(e)>-1}}),lang:i(function(e){return de.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(ye,we).toLowerCase(),function(t){var n
do{if(n=L?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType)
return!1}}),target:function(t){var n=e.location&&e.location.hash
return n&&n.slice(1)===t.id},root:function(e){return e===A},focus:function(e){return e===j.activeElement&&(!j.hasFocus||j.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1
return!0},parent:function(e){return!w.pseudos.empty(e)},header:function(e){return he.test(e.nodeName)},input:function(e){return pe.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:s(function(){return[0]}),last:s(function(e,t){return[t-1]}),eq:s(function(e,t,n){return[n<0?n+t:n]}),even:s(function(e,t){for(var n=0;n<t;n+=2)e.push(n)
return e}),odd:s(function(e,t){for(var n=1;n<t;n+=2)e.push(n)
return e}),lt:s(function(e,t,n){for(var i=n<0?n+t:n;--i>=0;)e.push(i)
return e}),gt:s(function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i)
return e})}},w.pseudos.nth=w.pseudos.eq
for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[b]=function(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}(b)
for(b in{submit:!0,reset:!0})w.pseudos[b]=function(e){return function(t){var n=t.nodeName.toLowerCase()
return("input"===n||"button"===n)&&t.type===e}}(b)
return c.prototype=w.filters=w.pseudos,w.setFilters=new c,T=t.tokenize=function(e,n){var i,r,o,a,s,l,c,u=I[e+" "]
if(u)return n?0:u.slice(0)
for(s=e,l=[],c=w.preFilter;s;){i&&!(r=se.exec(s))||(r&&(s=s.slice(r[0].length)||s),l.push(o=[])),i=!1,(r=le.exec(s))&&(i=r.shift(),o.push({value:i,type:r[0].replace(ae," ")}),s=s.slice(i.length))
for(a in w.filter)!(r=fe[a].exec(s))||c[a]&&!(r=c[a](r))||(i=r.shift(),o.push({value:i,type:a,matches:r}),s=s.slice(i.length))
if(!i)break}return n?s.length:s?t.error(e):I(e,l).slice(0)},k=t.compile=function(e,t){var n,i=[],r=[],o=W[e+" "]
if(!o){for(t||(t=T(e)),n=t.length;n--;)o=m(t[n]),o[F]?i.push(o):r.push(o)
o=W(e,v(r,i)),o.selector=e}return o},N=t.select=function(e,t,n,i){var r,o,a,s,c,d="function"==typeof e&&e,f=!i&&T(e=d.selector||e)
if(n=n||[],1===f.length){if(o=f[0]=f[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&y.getById&&9===t.nodeType&&L&&w.relative[o[1].type]){if(!(t=(w.find.ID(a.matches[0].replace(ye,we),t)||[])[0]))return n
d&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(r=fe.needsContext.test(e)?0:o.length;r--&&(a=o[r],!w.relative[s=a.type]);)if((c=w.find[s])&&(i=c(a.matches[0].replace(ye,we),ve.test(o[0].type)&&l(t.parentNode)||t))){if(o.splice(r,1),!(e=i.length&&u(o)))return Q.apply(n,i),n
break}}return(d||k(e,f))(i,t,!L,n,ve.test(e)&&l(t.parentNode)||t),n},y.sortStable=F.split("").sort(z).join("")===F,y.detectDuplicates=!!$,D(),y.sortDetached=r(function(e){return 1&e.compareDocumentPosition(j.createElement("div"))}),r(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),y.attributes&&r(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),r(function(e){return null==e.getAttribute("disabled")})||o(Z,function(e,t,n){var i
if(!n)return!0===e[t]?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null}),t}(e)
K.find=ie,K.expr=ie.selectors,K.expr[":"]=K.expr.pseudos,K.unique=ie.uniqueSort,K.text=ie.getText,K.isXMLDoc=ie.isXML,K.contains=ie.contains
var re=K.expr.match.needsContext,oe=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,ae=/^.[^:#\[\.,]*$/
K.filter=function(e,t,n){var i=t[0]
return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?K.find.matchesSelector(i,e)?[i]:[]:K.find.matches(e,K.grep(t,function(e){return 1===e.nodeType}))},K.fn.extend({find:function(e){var t,n=this.length,i=[],r=this
if("string"!=typeof e)return this.pushStack(K(e).filter(function(){for(t=0;t<n;t++)if(K.contains(r[t],this))return!0}))
for(t=0;t<n;t++)K.find(e,r[t],i)
return i=this.pushStack(n>1?K.unique(i):i),i.selector=this.selector?this.selector+" "+e:e,i},filter:function(e){return this.pushStack(i(this,e||[],!1))},not:function(e){return this.pushStack(i(this,e||[],!0))},is:function(e){return!!i(this,"string"==typeof e&&re.test(e)?K(e):e||[],!1).length}})
var se,le=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(K.fn.init=function(e,t){var n,i
if(!e)return this
if("string"==typeof e){if(!(n="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:le.exec(e))||!n[1]&&t)return!t||t.jquery?(t||se).find(e):this.constructor(t).find(e)
if(n[1]){if(t=t instanceof K?t[0]:t,K.merge(this,K.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:J,!0)),oe.test(n[1])&&K.isPlainObject(t))for(n in t)K.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n])
return this}return i=J.getElementById(n[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=J,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):K.isFunction(e)?void 0!==se.ready?se.ready(e):e(K):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),K.makeArray(e,this))}).prototype=K.fn,se=K(J)
var ce=/^(?:parents|prev(?:Until|All))/,ue={children:!0,contents:!0,next:!0,prev:!0}
K.extend({dir:function(e,t,n){for(var i=[],r=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(r&&K(e).is(n))break
i.push(e)}return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e)
return n}}),K.fn.extend({has:function(e){var t=K(e,this),n=t.length
return this.filter(function(){for(var e=0;e<n;e++)if(K.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,i=0,r=this.length,o=[],a=re.test(e)||"string"!=typeof e?K(e,t||this.context):0;i<r;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&K.find.matchesSelector(n,e))){o.push(n)
break}return this.pushStack(o.length>1?K.unique(o):o)},index:function(e){return e?"string"==typeof e?U.call(K(e),this[0]):U.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(K.unique(K.merge(this.get(),K(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),K.each({parent:function(e){var t=e.parentNode
return t&&11!==t.nodeType?t:null},parents:function(e){return K.dir(e,"parentNode")},parentsUntil:function(e,t,n){return K.dir(e,"parentNode",n)},next:function(e){return r(e,"nextSibling")},prev:function(e){return r(e,"previousSibling")},nextAll:function(e){return K.dir(e,"nextSibling")},prevAll:function(e){return K.dir(e,"previousSibling")},nextUntil:function(e,t,n){return K.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return K.dir(e,"previousSibling",n)},siblings:function(e){return K.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return K.sibling(e.firstChild)},contents:function(e){return e.contentDocument||K.merge([],e.childNodes)}},function(e,t){K.fn[e]=function(n,i){var r=K.map(this,t,n)
return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=K.filter(i,r)),this.length>1&&(ue[e]||K.unique(r),ce.test(e)&&r.reverse()),this.pushStack(r)}})
var de=/\S+/g,fe={}
K.Callbacks=function(e){e="string"==typeof e?fe[e]||o(e):K.extend({},e)
var t,n,i,r,a,s,l=[],c=!e.once&&[],u=function(o){for(t=e.memory&&o,n=!0,s=r||0,r=0,a=l.length,i=!0;l&&s<a;s++)if(!1===l[s].apply(o[0],o[1])&&e.stopOnFalse){t=!1
break}i=!1,l&&(c?c.length&&u(c.shift()):t?l=[]:d.disable())},d={add:function(){if(l){var n=l.length
!function t(n){K.each(n,function(n,i){var r=K.type(i)
"function"===r?e.unique&&d.has(i)||l.push(i):i&&i.length&&"string"!==r&&t(i)})}(arguments),i?a=l.length:t&&(r=n,u(t))}return this},remove:function(){return l&&K.each(arguments,function(e,t){for(var n;(n=K.inArray(t,l,n))>-1;)l.splice(n,1),i&&(n<=a&&a--,n<=s&&s--)}),this},has:function(e){return e?K.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],a=0,this},disable:function(){return l=c=t=void 0,this},disabled:function(){return!l},lock:function(){return c=void 0,t||d.disable(),this},locked:function(){return!c},fireWith:function(e,t){return!l||n&&!c||(t=t||[],t=[e,t.slice?t.slice():t],i?c.push(t):u(t)),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!n}}
return d},K.extend({Deferred:function(e){var t=[["resolve","done",K.Callbacks("once memory"),"resolved"],["reject","fail",K.Callbacks("once memory"),"rejected"],["notify","progress",K.Callbacks("memory")]],n="pending",i={state:function(){return n},always:function(){return r.done(arguments).fail(arguments),this},then:function(){var e=arguments
return K.Deferred(function(n){K.each(t,function(t,o){var a=K.isFunction(e[t])&&e[t]
r[o[1]](function(){var e=a&&a.apply(this,arguments)
e&&K.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+"With"](this===i?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?K.extend(e,i):i}},r={}
return i.pipe=i.then,K.each(t,function(e,o){var a=o[2],s=o[3]
i[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),r[o[0]]=function(){return r[o[0]+"With"](this===r?i:this,arguments),this},r[o[0]+"With"]=a.fireWith}),i.promise(r),e&&e.call(r,r),r},when:function(e){var t,n,i,r=0,o=W.call(arguments),a=o.length,s=1!==a||e&&K.isFunction(e.promise)?a:0,l=1===s?e:K.Deferred(),c=function(e,n,i){return function(r){n[e]=this,i[e]=arguments.length>1?W.call(arguments):r,i===t?l.notifyWith(n,i):--s||l.resolveWith(n,i)}}
if(a>1)for(t=new Array(a),n=new Array(a),i=new Array(a);r<a;r++)o[r]&&K.isFunction(o[r].promise)?o[r].promise().done(c(r,i,o)).fail(l.reject).progress(c(r,n,t)):--s
return s||l.resolveWith(i,o),l.promise()}})
var pe
K.fn.ready=function(e){return K.ready.promise().done(e),this},K.extend({isReady:!1,readyWait:1,holdReady:function(e){e?K.readyWait++:K.ready(!0)},ready:function(e){(!0===e?--K.readyWait:K.isReady)||(K.isReady=!0,!0!==e&&--K.readyWait>0||(pe.resolveWith(J,[K]),K.fn.triggerHandler&&(K(J).triggerHandler("ready"),K(J).off("ready"))))}}),K.ready.promise=function(t){return pe||(pe=K.Deferred(),"complete"===J.readyState?setTimeout(K.ready):(J.addEventListener("DOMContentLoaded",a,!1),e.addEventListener("load",a,!1))),pe.promise(t)},K.ready.promise()
var he=K.access=function(e,t,n,i,r,o,a){var s=0,l=e.length,c=null==n
if("object"===K.type(n)){r=!0
for(s in n)K.access(e,t,s,n[s],!0,o,a)}else if(void 0!==i&&(r=!0,K.isFunction(i)||(a=!0),c&&(a?(t.call(e,i),t=null):(c=t,t=function(e,t,n){return c.call(K(e),n)})),t))for(;s<l;s++)t(e[s],n,a?i:i.call(e[s],s,t(e[s],n)))
return r?e:c?t.call(e):l?t(e[0],n):o}
K.acceptData=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType},s.uid=1,s.accepts=K.acceptData,s.prototype={key:function(e){if(!s.accepts(e))return 0
var t={},n=e[this.expando]
if(!n){n=s.uid++
try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(i){t[this.expando]=n,K.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var i,r=this.key(e),o=this.cache[r]
if("string"==typeof t)o[t]=n
else if(K.isEmptyObject(o))K.extend(this.cache[r],t)
else for(i in t)o[i]=t[i]
return o},get:function(e,t){var n=this.cache[this.key(e)]
return void 0===t?n:n[t]},access:function(e,t,n){var i
return void 0===t||t&&"string"==typeof t&&void 0===n?(i=this.get(e,t),void 0!==i?i:this.get(e,K.camelCase(t))):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i,r,o=this.key(e),a=this.cache[o]
if(void 0===t)this.cache[o]={}
else{K.isArray(t)?i=t.concat(t.map(K.camelCase)):(r=K.camelCase(t),t in a?i=[t,r]:(i=r,i=i in a?[i]:i.match(de)||[])),n=i.length
for(;n--;)delete a[i[n]]}},hasData:function(e){return!K.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}}
var ge=new s,me=new s,ve=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,be=/([A-Z])/g
K.extend({hasData:function(e){return me.hasData(e)||ge.hasData(e)},data:function(e,t,n){return me.access(e,t,n)},removeData:function(e,t){me.remove(e,t)},_data:function(e,t,n){return ge.access(e,t,n)},_removeData:function(e,t){ge.remove(e,t)}}),K.fn.extend({data:function(e,t){var n,i,r,o=this[0],a=o&&o.attributes
if(void 0===e){if(this.length&&(r=me.get(o),1===o.nodeType&&!ge.get(o,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&(i=a[n].name,0===i.indexOf("data-")&&(i=K.camelCase(i.slice(5)),l(o,i,r[i])))
ge.set(o,"hasDataAttrs",!0)}return r}return"object"==typeof e?this.each(function(){me.set(this,e)}):he(this,function(t){var n,i=K.camelCase(e)
if(o&&void 0===t){if(void 0!==(n=me.get(o,e)))return n
if(void 0!==(n=me.get(o,i)))return n
if(void 0!==(n=l(o,i,void 0)))return n}else this.each(function(){var n=me.get(this,i)
me.set(this,i,t),-1!==e.indexOf("-")&&void 0!==n&&me.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){me.remove(this,e)})}}),K.extend({queue:function(e,t,n){var i
if(e)return t=(t||"fx")+"queue",i=ge.get(e,t),n&&(!i||K.isArray(n)?i=ge.access(e,t,K.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx"
var n=K.queue(e,t),i=n.length,r=n.shift(),o=K._queueHooks(e,t),a=function(){K.dequeue(e,t)}
"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===t&&n.unshift("inprogress"),delete o.stop,r.call(e,a,o)),!i&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks"
return ge.get(e,n)||ge.access(e,n,{empty:K.Callbacks("once memory").add(function(){ge.remove(e,[t+"queue",n])})})}}),K.fn.extend({queue:function(e,t){var n=2
return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?K.queue(this[0],e):void 0===t?this:this.each(function(){var n=K.queue(this,e,t)
K._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&K.dequeue(this,e)})},dequeue:function(e){return this.each(function(){K.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,r=K.Deferred(),o=this,a=this.length,s=function(){--i||r.resolveWith(o,[o])}
for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=ge.get(o[a],e+"queueHooks"))&&n.empty&&(i++,n.empty.add(s))
return s(),r.promise(t)}})
var ye=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,we=["Top","Right","Bottom","Left"],xe=function(e,t){return e=t||e,"none"===K.css(e,"display")||!K.contains(e.ownerDocument,e)},Ce=/^(?:checkbox|radio)$/i
!function(){var e=J.createDocumentFragment(),t=e.appendChild(J.createElement("div")),n=J.createElement("input")
n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),Q.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",Q.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}()
Q.focusinBubbles="onfocusin"in e
var Te=/^key/,ke=/^(?:mouse|pointer|contextmenu)|click/,Ne=/^(?:focusinfocus|focusoutblur)$/,Ee=/^([^.]*)(?:\.(.+)|)$/
K.event={global:{},add:function(e,t,n,i,r){var o,a,s,l,c,u,d,f,p,h,g,m=ge.get(e)
if(m)for(n.handler&&(o=n,n=o.handler,r=o.selector),n.guid||(n.guid=K.guid++),(l=m.events)||(l=m.events={}),(a=m.handle)||(a=m.handle=function(t){return void 0!==K&&K.event.triggered!==t.type?K.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(de)||[""],c=t.length;c--;)s=Ee.exec(t[c])||[],p=g=s[1],h=(s[2]||"").split(".").sort(),p&&(d=K.event.special[p]||{},p=(r?d.delegateType:d.bindType)||p,d=K.event.special[p]||{},u=K.extend({type:p,origType:g,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&K.expr.match.needsContext.test(r),namespace:h.join(".")},o),(f=l[p])||(f=l[p]=[],f.delegateCount=0,d.setup&&!1!==d.setup.call(e,i,h,a)||e.addEventListener&&e.addEventListener(p,a,!1)),d.add&&(d.add.call(e,u),u.handler.guid||(u.handler.guid=n.guid)),r?f.splice(f.delegateCount++,0,u):f.push(u),K.event.global[p]=!0)},remove:function(e,t,n,i,r){var o,a,s,l,c,u,d,f,p,h,g,m=ge.hasData(e)&&ge.get(e)
if(m&&(l=m.events)){for(t=(t||"").match(de)||[""],c=t.length;c--;)if(s=Ee.exec(t[c])||[],p=g=s[1],h=(s[2]||"").split(".").sort(),p){for(d=K.event.special[p]||{},p=(i?d.delegateType:d.bindType)||p,f=l[p]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=f.length;o--;)u=f[o],!r&&g!==u.origType||n&&n.guid!==u.guid||s&&!s.test(u.namespace)||i&&i!==u.selector&&("**"!==i||!u.selector)||(f.splice(o,1),u.selector&&f.delegateCount--,d.remove&&d.remove.call(e,u))
a&&!f.length&&(d.teardown&&!1!==d.teardown.call(e,h,m.handle)||K.removeEvent(e,p,m.handle),delete l[p])}else for(p in l)K.event.remove(e,p+t[c],n,i,!0)
K.isEmptyObject(l)&&(delete m.handle,ge.remove(e,"events"))}},trigger:function(t,n,i,r){var o,a,s,l,c,u,d,f=[i||J],p=G.call(t,"type")?t.type:t,h=G.call(t,"namespace")?t.namespace.split("."):[]
if(a=s=i=i||J,3!==i.nodeType&&8!==i.nodeType&&!Ne.test(p+K.event.triggered)&&(p.indexOf(".")>=0&&(h=p.split("."),p=h.shift(),h.sort()),c=p.indexOf(":")<0&&"on"+p,t=t[K.expando]?t:new K.Event(p,"object"==typeof t&&t),t.isTrigger=r?2:3,t.namespace=h.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:K.makeArray(n,[t]),d=K.event.special[p]||{},r||!d.trigger||!1!==d.trigger.apply(i,n))){if(!r&&!d.noBubble&&!K.isWindow(i)){for(l=d.delegateType||p,Ne.test(l+p)||(a=a.parentNode);a;a=a.parentNode)f.push(a),s=a
s===(i.ownerDocument||J)&&f.push(s.defaultView||s.parentWindow||e)}for(o=0;(a=f[o++])&&!t.isPropagationStopped();)t.type=o>1?l:d.bindType||p,u=(ge.get(a,"events")||{})[t.type]&&ge.get(a,"handle"),u&&u.apply(a,n),(u=c&&a[c])&&u.apply&&K.acceptData(a)&&(t.result=u.apply(a,n),!1===t.result&&t.preventDefault())
return t.type=p,r||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(f.pop(),n)||!K.acceptData(i)||c&&K.isFunction(i[p])&&!K.isWindow(i)&&(s=i[c],s&&(i[c]=null),K.event.triggered=p,i[p](),K.event.triggered=void 0,s&&(i[c]=s)),t.result}},dispatch:function(e){e=K.event.fix(e)
var t,n,i,r,o,a=[],s=W.call(arguments),l=(ge.get(this,"events")||{})[e.type]||[],c=K.event.special[e.type]||{}
if(s[0]=e,e.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,e)){for(a=K.event.handlers.call(this,e,l),t=0;(r=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=r.elem,n=0;(o=r.handlers[n++])&&!e.isImmediatePropagationStopped();)e.namespace_re&&!e.namespace_re.test(o.namespace)||(e.handleObj=o,e.data=o.data,void 0!==(i=((K.event.special[o.origType]||{}).handle||o.handler).apply(r.elem,s))&&!1===(e.result=i)&&(e.preventDefault(),e.stopPropagation()))
return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,i,r,o,a=[],s=t.delegateCount,l=e.target
if(s&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!==this;l=l.parentNode||this)if(!0!==l.disabled||"click"!==e.type){for(i=[],n=0;n<s;n++)o=t[n],r=o.selector+" ",void 0===i[r]&&(i[r]=o.needsContext?K(r,this).index(l)>=0:K.find(r,this,null,[l]).length),i[r]&&i.push(o)
i.length&&a.push({elem:l,handlers:i})}return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,i,r,o=t.button
return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||J,i=n.documentElement,r=n.body,e.pageX=t.clientX+(i&&i.scrollLeft||r&&r.scrollLeft||0)-(i&&i.clientLeft||r&&r.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||r&&r.scrollTop||0)-(i&&i.clientTop||r&&r.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(e){if(e[K.expando])return e
var t,n,i,r=e.type,o=e,a=this.fixHooks[r]
for(a||(this.fixHooks[r]=a=ke.test(r)?this.mouseHooks:Te.test(r)?this.keyHooks:{}),i=a.props?this.props.concat(a.props):this.props,e=new K.Event(o),t=i.length;t--;)n=i[t],e[n]=o[n]
return e.target||(e.target=J),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==d()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===d()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&K.nodeName(this,"input"))return this.click(),!1},_default:function(e){return K.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,i){var r=K.extend(new K.Event,n,{type:e,isSimulated:!0,originalEvent:{}})
i?K.event.trigger(r,null,t):K.event.dispatch.call(t,r),r.isDefaultPrevented()&&n.preventDefault()}},K.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},K.Event=function(e,t){if(!(this instanceof K.Event))return new K.Event(e,t)
e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?c:u):this.type=e,t&&K.extend(this,t),this.timeStamp=e&&e.timeStamp||K.now(),this[K.expando]=!0},K.Event.prototype={isDefaultPrevented:u,isPropagationStopped:u,isImmediatePropagationStopped:u,preventDefault:function(){var e=this.originalEvent
this.isDefaultPrevented=c,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent
this.isPropagationStopped=c,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent
this.isImmediatePropagationStopped=c,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},K.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){K.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,r=e.relatedTarget,o=e.handleObj
return r&&(r===i||K.contains(i,r))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),Q.focusinBubbles||K.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){K.event.simulate(t,e.target,K.event.fix(e),!0)}
K.event.special[t]={setup:function(){var i=this.ownerDocument||this,r=ge.access(i,t)
r||i.addEventListener(e,n,!0),ge.access(i,t,(r||0)+1)},teardown:function(){var i=this.ownerDocument||this,r=ge.access(i,t)-1
r?ge.access(i,t,r):(i.removeEventListener(e,n,!0),ge.remove(i,t))}}}),K.fn.extend({on:function(e,t,n,i,r){var o,a
if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0)
for(a in e)this.on(a,t,n,e[a],r)
return this}if(null==n&&null==i?(i=t,n=t=void 0):null==i&&("string"==typeof t?(i=n,n=void 0):(i=n,n=t,t=void 0)),!1===i)i=u
else if(!i)return this
return 1===r&&(o=i,i=function(e){return K().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=K.guid++)),this.each(function(){K.event.add(this,e,i,n,t)})},one:function(e,t,n,i){return this.on(e,t,n,i,1)},off:function(e,t,n){var i,r
if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,K(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this
if("object"==typeof e){for(r in e)this.off(r,t,e[r])
return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=u),this.each(function(){K.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){K.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0]
if(n)return K.event.trigger(e,t,n,!0)}})
var Se=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,$e=/<([\w:]+)/,De=/<|&#?\w+;/,je=/<(?:script|style|link)/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Le=/^$|\/(?:java|ecma)script/i,He=/^true\/(.*)/,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,_e={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}
_e.optgroup=_e.option,_e.tbody=_e.tfoot=_e.colgroup=_e.caption=_e.thead,_e.th=_e.td,K.extend({clone:function(e,t,n){var i,r,o,a,s=e.cloneNode(!0),l=K.contains(e.ownerDocument,e)
if(!(Q.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||K.isXMLDoc(e)))for(a=v(s),o=v(e),i=0,r=o.length;i<r;i++)b(o[i],a[i])
if(t)if(n)for(o=o||v(e),a=a||v(s),i=0,r=o.length;i<r;i++)m(o[i],a[i])
else m(e,s)
return a=v(s,"script"),a.length>0&&g(a,!l&&v(e,"script")),s},buildFragment:function(e,t,n,i){for(var r,o,a,s,l,c,u=t.createDocumentFragment(),d=[],f=0,p=e.length;f<p;f++)if((r=e[f])||0===r)if("object"===K.type(r))K.merge(d,r.nodeType?[r]:r)
else if(De.test(r)){for(o=o||u.appendChild(t.createElement("div")),a=($e.exec(r)||["",""])[1].toLowerCase(),s=_e[a]||_e._default,o.innerHTML=s[1]+r.replace(Se,"<$1></$2>")+s[2],c=s[0];c--;)o=o.lastChild
K.merge(d,o.childNodes),o=u.firstChild,o.textContent=""}else d.push(t.createTextNode(r))
for(u.textContent="",f=0;r=d[f++];)if((!i||-1===K.inArray(r,i))&&(l=K.contains(r.ownerDocument,r),o=v(u.appendChild(r),"script"),l&&g(o),n))for(c=0;r=o[c++];)Le.test(r.type||"")&&n.push(r)
return u},cleanData:function(e){for(var t,n,i,r,o=K.event.special,a=0;void 0!==(n=e[a]);a++){if(K.acceptData(n)&&(r=n[ge.expando])&&(t=ge.cache[r])){if(t.events)for(i in t.events)o[i]?K.event.remove(n,i):K.removeEvent(n,i,t.handle)
ge.cache[r]&&delete ge.cache[r]}delete me.cache[n[me.expando]]}}}),K.fn.extend({text:function(e){return he(this,function(e){return void 0===e?K.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){f(this,e).appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=f(this,e)
t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,i=e?K.filter(e,this):this,r=0;null!=(n=i[r]);r++)t||1!==n.nodeType||K.cleanData(v(n)),n.parentNode&&(t&&K.contains(n.ownerDocument,n)&&g(v(n,"script")),n.parentNode.removeChild(n))
return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(K.cleanData(v(e,!1)),e.textContent="")
return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return K.clone(this,e,t)})},html:function(e){return he(this,function(e){var t=this[0]||{},n=0,i=this.length
if(void 0===e&&1===t.nodeType)return t.innerHTML
if("string"==typeof e&&!je.test(e)&&!_e[($e.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(Se,"<$1></$2>")
try{for(;n<i;n++)t=this[n]||{},1===t.nodeType&&(K.cleanData(v(t,!1)),t.innerHTML=e)
t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0]
return this.domManip(arguments,function(t){e=this.parentNode,K.cleanData(v(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=z.apply([],e)
var n,i,r,o,a,s,l=0,c=this.length,u=this,d=c-1,f=e[0],g=K.isFunction(f)
if(g||c>1&&"string"==typeof f&&!Q.checkClone&&Ae.test(f))return this.each(function(n){var i=u.eq(n)
g&&(e[0]=f.call(this,n,i.html())),i.domManip(e,t)})
if(c&&(n=K.buildFragment(e,this[0].ownerDocument,!1,this),i=n.firstChild,1===n.childNodes.length&&(n=i),i)){for(r=K.map(v(n,"script"),p),o=r.length;l<c;l++)a=n,l!==d&&(a=K.clone(a,!0,!0),o&&K.merge(r,v(a,"script"))),t.call(this[l],a,l)
if(o)for(s=r[r.length-1].ownerDocument,K.map(r,h),l=0;l<o;l++)a=r[l],Le.test(a.type||"")&&!ge.access(a,"globalEval")&&K.contains(s,a)&&(a.src?K._evalUrl&&K._evalUrl(a.src):K.globalEval(a.textContent.replace(qe,"")))}return this}}),K.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){K.fn[e]=function(e){for(var n,i=[],r=K(e),o=r.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),K(r[a])[t](n),X.apply(i,n.get())
return this.pushStack(i)}})
var Re,Fe={},Me=/^margin/,Pe=new RegExp("^("+ye+")(?!px)[a-z%]+$","i"),Oe=function(t){return t.ownerDocument.defaultView.opener?t.ownerDocument.defaultView.getComputedStyle(t,null):e.getComputedStyle(t,null)}
!function(){function t(){a.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",a.innerHTML="",r.appendChild(o)
var t=e.getComputedStyle(a,null)
n="1%"!==t.top,i="4px"===t.width,r.removeChild(o)}var n,i,r=J.documentElement,o=J.createElement("div"),a=J.createElement("div")
a.style&&(a.style.backgroundClip="content-box",a.cloneNode(!0).style.backgroundClip="",Q.clearCloneStyle="content-box"===a.style.backgroundClip,o.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",o.appendChild(a),e.getComputedStyle&&K.extend(Q,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return null==i&&t(),i},reliableMarginRight:function(){var t,n=a.appendChild(J.createElement("div"))
return n.style.cssText=a.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",a.style.width="1px",r.appendChild(o),t=!parseFloat(e.getComputedStyle(n,null).marginRight),r.removeChild(o),a.removeChild(n),t}}))}(),K.swap=function(e,t,n,i){var r,o,a={}
for(o in t)a[o]=e.style[o],e.style[o]=t[o]
r=n.apply(e,i||[])
for(o in t)e.style[o]=a[o]
return r}
var Be=/^(none|table(?!-c[ea]).+)/,Ie=new RegExp("^("+ye+")(.*)$","i"),We=new RegExp("^([+-])=("+ye+")","i"),ze={position:"absolute",visibility:"hidden",display:"block"},Xe={letterSpacing:"0",fontWeight:"400"},Ue=["Webkit","O","Moz","ms"]
K.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=x(e,"opacity")
return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var r,o,a,s=K.camelCase(t),l=e.style
if(t=K.cssProps[s]||(K.cssProps[s]=T(l,s)),a=K.cssHooks[t]||K.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(r=a.get(e,!1,i))?r:l[t]
o=typeof n,"string"===o&&(r=We.exec(n))&&(n=(r[1]+1)*r[2]+parseFloat(K.css(e,t)),o="number"),null!=n&&n===n&&("number"!==o||K.cssNumber[s]||(n+="px"),Q.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,i))||(l[t]=n))}},css:function(e,t,n,i){var r,o,a,s=K.camelCase(t)
return t=K.cssProps[s]||(K.cssProps[s]=T(e.style,s)),a=K.cssHooks[t]||K.cssHooks[s],a&&"get"in a&&(r=a.get(e,!0,n)),void 0===r&&(r=x(e,t,i)),"normal"===r&&t in Xe&&(r=Xe[t]),""===n||n?(o=parseFloat(r),!0===n||K.isNumeric(o)?o||0:r):r}}),K.each(["height","width"],function(e,t){K.cssHooks[t]={get:function(e,n,i){if(n)return Be.test(K.css(e,"display"))&&0===e.offsetWidth?K.swap(e,ze,function(){return E(e,t,i)}):E(e,t,i)},set:function(e,n,i){var r=i&&Oe(e)
return k(e,n,i?N(e,t,i,"border-box"===K.css(e,"boxSizing",!1,r),r):0)}}}),K.cssHooks.marginRight=C(Q.reliableMarginRight,function(e,t){if(t)return K.swap(e,{display:"inline-block"},x,[e,"marginRight"])}),K.each({margin:"",padding:"",border:"Width"},function(e,t){K.cssHooks[e+t]={expand:function(n){for(var i=0,r={},o="string"==typeof n?n.split(" "):[n];i<4;i++)r[e+we[i]+t]=o[i]||o[i-2]||o[0]
return r}},Me.test(e)||(K.cssHooks[e+t].set=k)}),K.fn.extend({css:function(e,t){return he(this,function(e,t,n){var i,r,o={},a=0
if(K.isArray(t)){for(i=Oe(e),r=t.length;a<r;a++)o[t[a]]=K.css(e,t[a],!1,i)
return o}return void 0!==n?K.style(e,t,n):K.css(e,t)},e,t,arguments.length>1)},show:function(){return S(this,!0)},hide:function(){return S(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){xe(this)?K(this).show():K(this).hide()})}}),K.Tween=$,$.prototype={constructor:$,init:function(e,t,n,i,r,o){this.elem=e,this.prop=n,this.easing=r||"swing",this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=o||(K.cssNumber[n]?"":"px")},cur:function(){var e=$.propHooks[this.prop]
return e&&e.get?e.get(this):$.propHooks._default.get(this)},run:function(e){var t,n=$.propHooks[this.prop]
return this.options.duration?this.pos=t=K.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):$.propHooks._default.set(this),this}},$.prototype.init.prototype=$.prototype,$.propHooks={_default:{get:function(e){var t
return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=K.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){K.fx.step[e.prop]?K.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[K.cssProps[e.prop]]||K.cssHooks[e.prop])?K.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},$.propHooks.scrollTop=$.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},K.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},K.fx=$.prototype.init,K.fx.step={}
var Ve,Ye,Ge=/^(?:toggle|show|hide)$/,Qe=new RegExp("^(?:([+-])=|)("+ye+")([a-z%]*)$","i"),Je=/queueHooks$/,Ke=[L],Ze={"*":[function(e,t){var n=this.createTween(e,t),i=n.cur(),r=Qe.exec(t),o=r&&r[3]||(K.cssNumber[e]?"":"px"),a=(K.cssNumber[e]||"px"!==o&&+i)&&Qe.exec(K.css(n.elem,e)),s=1,l=20
if(a&&a[3]!==o){o=o||a[3],r=r||[],a=+i||1
do{s=s||".5",a/=s,K.style(n.elem,e,a+o)}while(s!==(s=n.cur()/i)&&1!==s&&--l)}return r&&(a=n.start=+a||+i||0,n.unit=o,n.end=r[1]?a+(r[1]+1)*r[2]:+r[2]),n}]}
K.Animation=K.extend(q,{tweener:function(e,t){K.isFunction(e)?(t=e,e=["*"]):e=e.split(" ")
for(var n,i=0,r=e.length;i<r;i++)n=e[i],Ze[n]=Ze[n]||[],Ze[n].unshift(t)},prefilter:function(e,t){t?Ke.unshift(e):Ke.push(e)}}),K.speed=function(e,t,n){var i=e&&"object"==typeof e?K.extend({},e):{complete:n||!n&&t||K.isFunction(e)&&e,duration:e,easing:n&&t||t&&!K.isFunction(t)&&t}
return i.duration=K.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in K.fx.speeds?K.fx.speeds[i.duration]:K.fx.speeds._default,null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){K.isFunction(i.old)&&i.old.call(this),i.queue&&K.dequeue(this,i.queue)},i},K.fn.extend({fadeTo:function(e,t,n,i){return this.filter(xe).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var r=K.isEmptyObject(e),o=K.speed(t,n,i),a=function(){var t=q(this,K.extend({},e),o);(r||ge.get(this,"finish"))&&t.stop(!0)}
return a.finish=a,r||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var i=function(e){var t=e.stop
delete e.stop,t(n)}
return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,r=null!=e&&e+"queueHooks",o=K.timers,a=ge.get(this)
if(r)a[r]&&a[r].stop&&i(a[r])
else for(r in a)a[r]&&a[r].stop&&Je.test(r)&&i(a[r])
for(r=o.length;r--;)o[r].elem!==this||null!=e&&o[r].queue!==e||(o[r].anim.stop(n),t=!1,o.splice(r,1))
!t&&n||K.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=ge.get(this),i=n[e+"queue"],r=n[e+"queueHooks"],o=K.timers,a=i?i.length:0
for(n.finish=!0,K.queue(this,e,[]),r&&r.stop&&r.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1))
for(t=0;t<a;t++)i[t]&&i[t].finish&&i[t].finish.call(this)
delete n.finish})}}),K.each(["toggle","show","hide"],function(e,t){var n=K.fn[t]
K.fn[t]=function(e,i,r){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(j(t,!0),e,i,r)}}),K.each({slideDown:j("show"),slideUp:j("hide"),slideToggle:j("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){K.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}}),K.timers=[],K.fx.tick=function(){var e,t=0,n=K.timers
for(Ve=K.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1)
n.length||K.fx.stop(),Ve=void 0},K.fx.timer=function(e){K.timers.push(e),e()?K.fx.start():K.timers.pop()},K.fx.interval=13,K.fx.start=function(){Ye||(Ye=setInterval(K.fx.tick,K.fx.interval))},K.fx.stop=function(){clearInterval(Ye),Ye=null},K.fx.speeds={slow:600,fast:200,_default:400},K.fn.delay=function(e,t){return e=K.fx?K.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var i=setTimeout(t,e)
n.stop=function(){clearTimeout(i)}})},function(){var e=J.createElement("input"),t=J.createElement("select"),n=t.appendChild(J.createElement("option"))
e.type="checkbox",Q.checkOn=""!==e.value,Q.optSelected=n.selected,t.disabled=!0,Q.optDisabled=!n.disabled,e=J.createElement("input"),e.value="t",e.type="radio",Q.radioValue="t"===e.value}()
var et,tt=K.expr.attrHandle
K.fn.extend({attr:function(e,t){return he(this,K.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){K.removeAttr(this,e)})}}),K.extend({attr:function(e,t,n){var i,r,o=e.nodeType
if(e&&3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?K.prop(e,t,n):(1===o&&K.isXMLDoc(e)||(t=t.toLowerCase(),i=K.attrHooks[t]||(K.expr.match.bool.test(t)?et:void 0)),void 0===n?i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=K.find.attr(e,t),null==r?void 0:r):null!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):void K.removeAttr(e,t))},removeAttr:function(e,t){var n,i,r=0,o=t&&t.match(de)
if(o&&1===e.nodeType)for(;n=o[r++];)i=K.propFix[n]||n,K.expr.match.bool.test(n)&&(e[i]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!Q.radioValue&&"radio"===t&&K.nodeName(e,"input")){var n=e.value
return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),et={set:function(e,t,n){return!1===t?K.removeAttr(e,n):e.setAttribute(n,n),n}},K.each(K.expr.match.bool.source.match(/\w+/g),function(e,t){var n=tt[t]||K.find.attr
tt[t]=function(e,t,i){var r,o
return i||(o=tt[t],tt[t]=r,r=null!=n(e,t,i)?t.toLowerCase():null,tt[t]=o),r}})
var nt=/^(?:input|select|textarea|button)$/i
K.fn.extend({prop:function(e,t){return he(this,K.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[K.propFix[e]||e]})}}),K.extend({propFix:{for:"htmlFor",class:"className"},prop:function(e,t,n){var i,r,o,a=e.nodeType
if(e&&3!==a&&8!==a&&2!==a)return o=1!==a||!K.isXMLDoc(e),o&&(t=K.propFix[t]||t,r=K.propHooks[t]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||nt.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),Q.optSelected||(K.propHooks.selected={get:function(e){var t=e.parentNode
return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),K.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){K.propFix[this.toLowerCase()]=this})
var it=/[\t\r\n\f]/g
K.fn.extend({addClass:function(e){var t,n,i,r,o,a,s="string"==typeof e&&e,l=0,c=this.length
if(K.isFunction(e))return this.each(function(t){K(this).addClass(e.call(this,t,this.className))})
if(s)for(t=(e||"").match(de)||[];l<c;l++)if(n=this[l],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(it," "):" ")){for(o=0;r=t[o++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ")
a=K.trim(i),n.className!==a&&(n.className=a)}return this},removeClass:function(e){var t,n,i,r,o,a,s=0===arguments.length||"string"==typeof e&&e,l=0,c=this.length
if(K.isFunction(e))return this.each(function(t){K(this).removeClass(e.call(this,t,this.className))})
if(s)for(t=(e||"").match(de)||[];l<c;l++)if(n=this[l],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(it," "):"")){for(o=0;r=t[o++];)for(;i.indexOf(" "+r+" ")>=0;)i=i.replace(" "+r+" "," ")
a=e?K.trim(i):"",n.className!==a&&(n.className=a)}return this},toggleClass:function(e,t){var n=typeof e
return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):K.isFunction(e)?this.each(function(n){K(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n)for(var t,i=0,r=K(this),o=e.match(de)||[];t=o[i++];)r.hasClass(t)?r.removeClass(t):r.addClass(t)
else"undefined"!==n&&"boolean"!==n||(this.className&&ge.set(this,"__className__",this.className),this.className=this.className||!1===e?"":ge.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,i=this.length;n<i;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(it," ").indexOf(t)>=0)return!0
return!1}})
var rt=/\r/g
K.fn.extend({val:function(e){var t,n,i,r=this[0]
{if(arguments.length)return i=K.isFunction(e),this.each(function(n){var r
1===this.nodeType&&(r=i?e.call(this,n,K(this).val()):e,null==r?r="":"number"==typeof r?r+="":K.isArray(r)&&(r=K.map(r,function(e){return null==e?"":e+""})),(t=K.valHooks[this.type]||K.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r))})
if(r)return(t=K.valHooks[r.type]||K.valHooks[r.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:(n=r.value,"string"==typeof n?n.replace(rt,""):null==n?"":n)}}}),K.extend({valHooks:{option:{get:function(e){var t=K.find.attr(e,"value")
return null!=t?t:K.trim(K.text(e))}},select:{get:function(e){for(var t,n,i=e.options,r=e.selectedIndex,o="select-one"===e.type||r<0,a=o?null:[],s=o?r+1:i.length,l=r<0?s:o?r:0;l<s;l++)if(n=i[l],(n.selected||l===r)&&(Q.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!K.nodeName(n.parentNode,"optgroup"))){if(t=K(n).val(),o)return t
a.push(t)}return a},set:function(e,t){for(var n,i,r=e.options,o=K.makeArray(t),a=r.length;a--;)i=r[a],(i.selected=K.inArray(i.value,o)>=0)&&(n=!0)
return n||(e.selectedIndex=-1),o}}}}),K.each(["radio","checkbox"],function(){K.valHooks[this]={set:function(e,t){if(K.isArray(t))return e.checked=K.inArray(K(e).val(),t)>=0}},Q.checkOn||(K.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){K.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),K.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}})
var ot=K.now(),at=/\?/
K.parseJSON=function(e){return JSON.parse(e+"")},K.parseXML=function(e){var t,n
if(!e||"string"!=typeof e)return null
try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||K.error("Invalid XML: "+e),t}
var st=/#.*$/,lt=/([?&])_=[^&]*/,ct=/^(.*?):[ \t]*([^\r\n]*)$/gm,ut=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,dt=/^(?:GET|HEAD)$/,ft=/^\/\//,pt=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,ht={},gt={},mt="*/".concat("*"),vt=e.location.href,bt=pt.exec(vt.toLowerCase())||[]
K.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:vt,type:"GET",isLocal:ut.test(bt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":mt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":K.parseJSON,"text xml":K.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?F(F(e,K.ajaxSettings),t):F(K.ajaxSettings,e)},ajaxPrefilter:_(ht),ajaxTransport:_(gt),ajax:function(e,t){function n(e,t,n,a){var l,u,v,b,w,C=t
2!==y&&(y=2,s&&clearTimeout(s),i=void 0,o=a||"",x.readyState=e>0?4:0,l=e>=200&&e<300||304===e,n&&(b=M(d,x,n)),b=P(d,b,x,l),l?(d.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(K.lastModified[r]=w),(w=x.getResponseHeader("etag"))&&(K.etag[r]=w)),204===e||"HEAD"===d.type?C="nocontent":304===e?C="notmodified":(C=b.state,u=b.data,v=b.error,l=!v)):(v=C,!e&&C||(C="error",e<0&&(e=0))),x.status=e,x.statusText=(t||C)+"",l?h.resolveWith(f,[u,C,x]):h.rejectWith(f,[x,C,v]),x.statusCode(m),m=void 0,c&&p.trigger(l?"ajaxSuccess":"ajaxError",[x,d,l?u:v]),g.fireWith(f,[x,C]),c&&(p.trigger("ajaxComplete",[x,d]),--K.active||K.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{}
var i,r,o,a,s,l,c,u,d=K.ajaxSetup({},t),f=d.context||d,p=d.context&&(f.nodeType||f.jquery)?K(f):K.event,h=K.Deferred(),g=K.Callbacks("once memory"),m=d.statusCode||{},v={},b={},y=0,w="canceled",x={readyState:0,getResponseHeader:function(e){var t
if(2===y){if(!a)for(a={};t=ct.exec(o);)a[t[1].toLowerCase()]=t[2]
t=a[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===y?o:null},setRequestHeader:function(e,t){var n=e.toLowerCase()
return y||(e=b[n]=b[n]||e,v[e]=t),this},overrideMimeType:function(e){return y||(d.mimeType=e),this},statusCode:function(e){var t
if(e)if(y<2)for(t in e)m[t]=[m[t],e[t]]
else x.always(e[x.status])
return this},abort:function(e){var t=e||w
return i&&i.abort(t),n(0,t),this}}
if(h.promise(x).complete=g.add,x.success=x.done,x.error=x.fail,d.url=((e||d.url||vt)+"").replace(st,"").replace(ft,bt[1]+"//"),d.type=t.method||t.type||d.method||d.type,d.dataTypes=K.trim(d.dataType||"*").toLowerCase().match(de)||[""],null==d.crossDomain&&(l=pt.exec(d.url.toLowerCase()),d.crossDomain=!(!l||l[1]===bt[1]&&l[2]===bt[2]&&(l[3]||("http:"===l[1]?"80":"443"))===(bt[3]||("http:"===bt[1]?"80":"443")))),d.data&&d.processData&&"string"!=typeof d.data&&(d.data=K.param(d.data,d.traditional)),R(ht,d,t,x),2===y)return x
c=K.event&&d.global,c&&0==K.active++&&K.event.trigger("ajaxStart"),d.type=d.type.toUpperCase(),d.hasContent=!dt.test(d.type),r=d.url,d.hasContent||(d.data&&(r=d.url+=(at.test(r)?"&":"?")+d.data,delete d.data),!1===d.cache&&(d.url=lt.test(r)?r.replace(lt,"$1_="+ot++):r+(at.test(r)?"&":"?")+"_="+ot++)),d.ifModified&&(K.lastModified[r]&&x.setRequestHeader("If-Modified-Since",K.lastModified[r]),K.etag[r]&&x.setRequestHeader("If-None-Match",K.etag[r])),(d.data&&d.hasContent&&!1!==d.contentType||t.contentType)&&x.setRequestHeader("Content-Type",d.contentType),x.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+mt+"; q=0.01":""):d.accepts["*"])
for(u in d.headers)x.setRequestHeader(u,d.headers[u])
if(d.beforeSend&&(!1===d.beforeSend.call(f,x,d)||2===y))return x.abort()
w="abort"
for(u in{success:1,error:1,complete:1})x[u](d[u])
if(i=R(gt,d,t,x)){x.readyState=1,c&&p.trigger("ajaxSend",[x,d]),d.async&&d.timeout>0&&(s=setTimeout(function(){x.abort("timeout")},d.timeout))
try{y=1,i.send(v,n)}catch(e){if(!(y<2))throw e
n(-1,e)}}else n(-1,"No Transport")
return x},getJSON:function(e,t,n){return K.get(e,t,n,"json")},getScript:function(e,t){return K.get(e,void 0,t,"script")}}),K.each(["get","post"],function(e,t){K[t]=function(e,n,i,r){return K.isFunction(n)&&(r=r||i,i=n,n=void 0),K.ajax({url:e,type:t,dataType:r,data:n,success:i})}}),K._evalUrl=function(e){return K.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},K.fn.extend({wrapAll:function(e){var t
return K.isFunction(e)?this.each(function(t){K(this).wrapAll(e.call(this,t))}):(this[0]&&(t=K(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild
return e}).append(this)),this)},wrapInner:function(e){return K.isFunction(e)?this.each(function(t){K(this).wrapInner(e.call(this,t))}):this.each(function(){var t=K(this),n=t.contents()
n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=K.isFunction(e)
return this.each(function(n){K(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){K.nodeName(this,"body")||K(this).replaceWith(this.childNodes)}).end()}}),K.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0},K.expr.filters.visible=function(e){return!K.expr.filters.hidden(e)}
var yt=/%20/g,wt=/\[\]$/,xt=/\r?\n/g,Ct=/^(?:submit|button|image|reset|file)$/i,Tt=/^(?:input|select|textarea|keygen)/i
K.param=function(e,t){var n,i=[],r=function(e,t){t=K.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)}
if(void 0===t&&(t=K.ajaxSettings&&K.ajaxSettings.traditional),K.isArray(e)||e.jquery&&!K.isPlainObject(e))K.each(e,function(){r(this.name,this.value)})
else for(n in e)O(n,e[n],t,r)
return i.join("&").replace(yt,"+")},K.fn.extend({serialize:function(){return K.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=K.prop(this,"elements")
return e?K.makeArray(e):this}).filter(function(){var e=this.type
return this.name&&!K(this).is(":disabled")&&Tt.test(this.nodeName)&&!Ct.test(e)&&(this.checked||!Ce.test(e))}).map(function(e,t){var n=K(this).val()
return null==n?null:K.isArray(n)?K.map(n,function(e){return{name:t.name,value:e.replace(xt,"\r\n")}}):{name:t.name,value:n.replace(xt,"\r\n")}}).get()}}),K.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}}
var kt=0,Nt={},Et={0:200,1223:204},St=K.ajaxSettings.xhr()
e.attachEvent&&e.attachEvent("onunload",function(){for(var e in Nt)Nt[e]()}),Q.cors=!!St&&"withCredentials"in St,Q.ajax=St=!!St,K.ajaxTransport(function(e){var t
if(Q.cors||St&&!e.crossDomain)return{send:function(n,i){var r,o=e.xhr(),a=++kt
if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(r in e.xhrFields)o[r]=e.xhrFields[r]
e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest")
for(r in n)o.setRequestHeader(r,n[r])
t=function(e){return function(){t&&(delete Nt[a],t=o.onload=o.onerror=null,"abort"===e?o.abort():"error"===e?i(o.status,o.statusText):i(Et[o.status]||o.status,o.statusText,"string"==typeof o.responseText?{text:o.responseText}:void 0,o.getAllResponseHeaders()))}},o.onload=t(),o.onerror=t("error"),t=Nt[a]=t("abort")
try{o.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}}),K.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return K.globalEval(e),e}}}),K.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),K.ajaxTransport("script",function(e){if(e.crossDomain){var t,n
return{send:function(i,r){t=K("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&r("error"===e.type?404:200,e.type)}),J.head.appendChild(t[0])},abort:function(){n&&n()}}}})
var $t=[],Dt=/(=)\?(?=&|$)|\?\?/
K.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=$t.pop()||K.expando+"_"+ot++
return this[e]=!0,e}}),K.ajaxPrefilter("json jsonp",function(t,n,i){var r,o,a,s=!1!==t.jsonp&&(Dt.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dt.test(t.data)&&"data")
if(s||"jsonp"===t.dataTypes[0])return r=t.jsonpCallback=K.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Dt,"$1"+r):!1!==t.jsonp&&(t.url+=(at.test(t.url)?"&":"?")+t.jsonp+"="+r),t.converters["script json"]=function(){return a||K.error(r+" was not called"),a[0]},t.dataTypes[0]="json",o=e[r],e[r]=function(){a=arguments},i.always(function(){e[r]=o,t[r]&&(t.jsonpCallback=n.jsonpCallback,$t.push(r)),a&&K.isFunction(o)&&o(a[0]),a=o=void 0}),"script"}),K.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null
"boolean"==typeof t&&(n=t,t=!1),t=t||J
var i=oe.exec(e),r=!n&&[]
return i?[t.createElement(i[1])]:(i=K.buildFragment([e],t,r),r&&r.length&&K(r).remove(),K.merge([],i.childNodes))}
var jt=K.fn.load
K.fn.load=function(e,t,n){if("string"!=typeof e&&jt)return jt.apply(this,arguments)
var i,r,o,a=this,s=e.indexOf(" ")
return s>=0&&(i=K.trim(e.slice(s)),e=e.slice(0,s)),K.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(r="POST"),a.length>0&&K.ajax({url:e,type:r,dataType:"html",data:t}).done(function(e){o=arguments,a.html(i?K("<div>").append(K.parseHTML(e)).find(i):e)}).complete(n&&function(e,t){a.each(n,o||[e.responseText,t,e])}),this},K.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){K.fn[t]=function(e){return this.on(t,e)}}),K.expr.filters.animated=function(e){return K.grep(K.timers,function(t){return e===t.elem}).length}
var At=e.document.documentElement
K.offset={setOffset:function(e,t,n){var i,r,o,a,s,l,c,u=K.css(e,"position"),d=K(e),f={}
"static"===u&&(e.style.position="relative"),s=d.offset(),o=K.css(e,"top"),l=K.css(e,"left"),c=("absolute"===u||"fixed"===u)&&(o+l).indexOf("auto")>-1,c?(i=d.position(),a=i.top,r=i.left):(a=parseFloat(o)||0,r=parseFloat(l)||0),K.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+r),"using"in t?t.using.call(e,f):d.css(f)}},K.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){K.offset.setOffset(this,e,t)})
var t,n,i=this[0],r={top:0,left:0},o=i&&i.ownerDocument
if(o)return t=o.documentElement,K.contains(t,i)?(void 0!==i.getBoundingClientRect&&(r=i.getBoundingClientRect()),n=B(o),{top:r.top+n.pageYOffset-t.clientTop,left:r.left+n.pageXOffset-t.clientLeft}):r},position:function(){if(this[0]){var e,t,n=this[0],i={top:0,left:0}
return"fixed"===K.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),K.nodeName(e[0],"html")||(i=e.offset()),i.top+=K.css(e[0],"borderTopWidth",!0),i.left+=K.css(e[0],"borderLeftWidth",!0)),{top:t.top-i.top-K.css(n,"marginTop",!0),left:t.left-i.left-K.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||At;e&&!K.nodeName(e,"html")&&"static"===K.css(e,"position");)e=e.offsetParent
return e||At})}}),K.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var i="pageYOffset"===n
K.fn[t]=function(r){return he(this,function(t,r,o){var a=B(t)
if(void 0===o)return a?a[n]:t[r]
a?a.scrollTo(i?e.pageXOffset:o,i?o:e.pageYOffset):t[r]=o},t,r,arguments.length,null)}}),K.each(["top","left"],function(e,t){K.cssHooks[t]=C(Q.pixelPosition,function(e,n){if(n)return n=x(e,t),Pe.test(n)?K(e).position()[t]+"px":n})}),K.each({Height:"height",Width:"width"},function(e,t){K.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){K.fn[i]=function(i,r){var o=arguments.length&&(n||"boolean"!=typeof i),a=n||(!0===i||!0===r?"margin":"border")
return he(this,function(t,n,i){var r
return K.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(r=t.documentElement,Math.max(t.body["scroll"+e],r["scroll"+e],t.body["offset"+e],r["offset"+e],r["client"+e])):void 0===i?K.css(t,n,a):K.style(t,n,i,a)},t,o?i:void 0,o,null)}})}),K.fn.size=function(){return this.length},K.fn.andSelf=K.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return K})
var Lt=e.jQuery,Ht=e.$
return K.noConflict=function(t){return e.$===K&&(e.$=Ht),t&&e.jQuery===K&&(e.jQuery=Lt),K},void 0===t&&(e.jQuery=e.$=K),K}),function(e,t){"function"==typeof define&&define.amd?define(["jquery"],function(n){return e.Tablesaw=t(n,e)}):"object"==typeof exports?module.exports=t(require("jquery")(e),e):e.Tablesaw=t(jQuery,e)}("undefined"!=typeof window?window:this,function(e,t){"use strict"
var n=!1
document.addEventListener("DOMContentLoaded",function(){n=!0})
var i={i18n:{modeStack:"Stack",modeSwipe:"Swipe",modeToggle:"Toggle",modeSwitchColumnsAbbreviated:"Cols",modeSwitchColumns:"Columns",columnToggleButton:"Columns",columnToggleError:"No eligible columns.",sort:"Sort",swipePreviousColumn:"Previous column",swipeNextColumn:"Next column"},mustard:"head"in document&&(!window.blackberry||window.WebKitPoint)&&!window.operamini,$:e,_init:function(e){i.$(e||document).trigger("enhance.tablesaw")},init:function(e){n?i._init(e):"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){i._init(e)})}}
return e(t.document).on("enhance.tablesaw",function(){"undefined"!=typeof TablesawConfig&&TablesawConfig.i18n&&(i.i18n=e.extend(i.i18n,TablesawConfig.i18n||{})),i.i18n.modes=[i.i18n.modeStack,i.i18n.modeSwipe,i.i18n.modeToggle]}),i.mustard&&e(document.documentElement).addClass("tablesaw-enhanced"),function(){var n={toolbar:"tablesaw-bar"},r={create:"tablesawcreate",destroy:"tablesawdestroy",refresh:"tablesawrefresh",resize:"tablesawresize"},o={}
i.events=r
var a=function(t){if(!t)throw new Error("Tablesaw requires an element.")
this.table=t,this.$table=e(t),this.$thead=this.$table.children().filter("thead").eq(0),this.$tbody=this.$table.children().filter("tbody"),this.mode=this.$table.attr("data-tablesaw-mode")||"stack",this.$toolbar=null,this.attributes={subrow:"data-tablesaw-subrow",ignorerow:"data-tablesaw-ignorerow"},this.init()}
a.prototype.init=function(){if(!this.$thead.length)throw new Error("tablesaw: a <thead> is required, but none was found.")
if(!this.$thead.find("th").length)throw new Error("tablesaw: no header cells found. Are you using <th> inside of <thead>?")
this.$table.attr("id")||this.$table.attr("id","tablesaw-"+Math.round(1e4*Math.random())),this.createToolbar(),this._initCells(),this.$table.data("tablesaw",this),this.$table.trigger(r.create,[this])},a.prototype.getConfig=function(t){var n=e.extend(o,t||{})
return e.extend(n,"undefined"!=typeof TablesawConfig?TablesawConfig:{})},a.prototype._getPrimaryHeaderRow=function(){return this._getHeaderRows().eq(0)},a.prototype._getHeaderRows=function(){return this.$thead.children().filter("tr").filter(function(){return!e(this).is("[data-tablesaw-ignorerow]")})},a.prototype._getRowIndex=function(e){return e.prevAll().length},a.prototype._getHeaderRowIndeces=function(){var t=this,n=[]
return this._getHeaderRows().each(function(){n.push(t._getRowIndex(e(this)))}),n},a.prototype._getPrimaryHeaderCells=function(e){return(e||this._getPrimaryHeaderRow()).find("th")},a.prototype._$getCells=function(t){var n=this
return e(t).add(t.cells).filter(function(){var t=e(this),i=t.parent(),r=t.is("[colspan]")
return!(i.is("["+n.attributes.subrow+"]")||i.is("["+n.attributes.ignorerow+"]")&&r)})},a.prototype._getVisibleColspan=function(){var t=0
return this._getPrimaryHeaderCells().each(function(){var n=e(this)
"none"!==n.css("display")&&(t+=parseInt(n.attr("colspan"),10)||1)}),t},a.prototype.getColspanForCell=function(t){var n=this._getVisibleColspan(),i=0
return t.closest("tr").data("tablesaw-rowspanned")&&i++,t.siblings().each(function(){var t=e(this),n=parseInt(t.attr("colspan"),10)||1
"none"!==t.css("display")&&(i+=n)}),n-i},a.prototype.isCellInColumn=function(t,n){return e(t).add(t.cells).filter(function(){return this===n}).length},a.prototype.updateColspanCells=function(t,n,i){var r=this,o=r._getPrimaryHeaderRow()
this.$table.find("[rowspan][data-tablesaw-priority]").each(function(){var t=e(this)
if("persist"===t.attr("data-tablesaw-priority")){var n=t.closest("tr"),i=parseInt(t.attr("rowspan"),10)
i>1&&(n=n.next(),n.data("tablesaw-rowspanned",!0),i--)}}),this.$table.find("[colspan],[data-tablesaw-maxcolspan]").filter(function(){return e(this).closest("tr")[0]!==o[0]}).each(function(){var o=e(this)
if(void 0===i||r.isCellInColumn(n,this)){var a=r.getColspanForCell(o)
t&&void 0!==i&&o[0===a?"addClass":"removeClass"](t)
var s=parseInt(o.attr("data-tablesaw-maxcolspan"),10)
s?a>s&&(a=s):o.attr("data-tablesaw-maxcolspan",o.attr("colspan")),o.attr("colspan",a)}})},a.prototype._findPrimaryHeadersForCell=function(e){for(var t=this._getPrimaryHeaderRow(),n=this._getPrimaryHeaderCells(t),i=this._getRowIndex(t),r=[],o=0;o<this.headerMapping.length;o++)if(o!==i)for(var a=0;a<this.headerMapping[o].length;a++)this.headerMapping[o][a]===e&&r.push(n[a])
return r},a.prototype.getRows=function(){var t=this
return this.$table.find("tr").filter(function(){return e(this).closest("table").is(t.$table)})},a.prototype.getBodyRows=function(t){return(t?e(t):this.$tbody).children().filter("tr")},a.prototype.getHeaderCellIndex=function(e){for(var t=this.headerMapping[0],n=0;n<t.length;n++)if(t[n]===e)return n
return-1},a.prototype._initCells=function(){this.$table.find("[data-tablesaw-maxcolspan]").each(function(){var t=e(this)
t.attr("colspan",t.attr("data-tablesaw-maxcolspan"))})
var t=this.getRows(),n=[]
t.each(function(e){n[e]=[]}),t.each(function(t){var i=0
e(this).children().each(function(){for(var e=parseInt(this.getAttribute("data-tablesaw-maxcolspan")||this.getAttribute("colspan"),10),r=parseInt(this.getAttribute("rowspan"),10);n[t][i];)i++
if(n[t][i]=this,e)for(var o=0;o<e-1;o++)i++,n[t][i]=this
if(r)for(var a=1;a<r;a++)n[t+a][i]=this
i++})})
for(var i=this._getHeaderRowIndeces(),r=0;r<n[0].length;r++)for(var o=0,a=i.length;o<a;o++){var s,l=n[i[o]][r],c=i[o]
for(l.cells||(l.cells=[]);c<n.length;)s=n[c][r],l!==s&&l.cells.push(s),c++}this.headerMapping=n},a.prototype.refresh=function(){this._initCells(),this.$table.trigger(r.refresh,[this])},a.prototype._getToolbarAnchor=function(){var e=this.$table.parent()
return e.is(".tablesaw-overflow")?e:this.$table},a.prototype._getToolbar=function(e){return e||(e=this._getToolbarAnchor()),e.prev().filter("."+n.toolbar)},a.prototype.createToolbar=function(){var t=this._getToolbarAnchor(),i=this._getToolbar(t)
i.length||(i=e("<div>").addClass(n.toolbar).insertBefore(t)),this.$toolbar=i,this.mode&&this.$toolbar.addClass("tablesaw-mode-"+this.mode)},a.prototype.destroy=function(){this._getToolbar().each(function(){this.className=this.className.replace(/\btablesaw-mode\-\w*\b/gi,"")})
var t=this.$table.attr("id")
e(document).off("."+t),e(window).off("."+t),this.$table.trigger(r.destroy,[this]),this.$table.removeData("tablesaw")},e.fn.tablesaw=function(){return this.each(function(){e(this).data("tablesaw")||new a(this)})}
var s=e(t.document)
s.on("enhance.tablesaw",function(t){i.mustard&&e(t.target).find("table").filter("[data-tablesaw],[data-tablesaw-mode],[data-tablesaw-sortable]").tablesaw()})
var l,c=!1
s.on("scroll.tablesaw",function(){c=!0,t.clearTimeout(l),l=t.setTimeout(function(){c=!1},300)})
var u
e(t).on("resize",function(){c||(t.clearTimeout(u),u=t.setTimeout(function(){s.trigger(r.resize)},150))}),i.Table=a}(),function(){var t={stackTable:"tablesaw-stack",cellLabels:"tablesaw-cell-label",cellContentLabels:"tablesaw-cell-content"},n={key:"tablesaw-stack"},r={labelless:"data-tablesaw-no-labels",hideempty:"data-tablesaw-hide-empty"},o=function(t,i){this.tablesaw=i,this.$table=e(t),this.labelless=this.$table.is("["+r.labelless+"]"),this.hideempty=this.$table.is("["+r.hideempty+"]"),this.$table.data(n.key,this)}
o.prototype.init=function(){if(this.$table.addClass(t.stackTable),!this.labelless){var n=this
this.$table.find("th, td").filter(function(){return!e(this).closest("thead").length}).filter(function(){return!(e(this).closest("tr").is("["+r.labelless+"]")||n.hideempty&&!e(this).html())}).each(function(){var i=e(document.createElement("b")).addClass(t.cellLabels),r=e(this)
e(n.tablesaw._findPrimaryHeadersForCell(this)).each(function(t){var n=e(this.cloneNode(!0)),r=n.find(".tablesaw-sortable-btn")
n.find(".tablesaw-sortable-arrow").remove()
var o=n.find("[data-tablesaw-checkall]")
if(o.closest("label").remove(),o.length)return void(i=e([]))
t>0&&i.append(document.createTextNode(", ")),i.append(r.length?r[0].childNodes:n[0].childNodes)}),i.length&&!r.find("."+t.cellContentLabels).length&&r.wrapInner("<span class='"+t.cellContentLabels+"'></span>")
var o=r.find("."+t.cellLabels)
o.length?o.replaceWith(i):r.prepend(i)})}},o.prototype.destroy=function(){this.$table.removeClass(t.stackTable),this.$table.find("."+t.cellLabels).remove(),this.$table.find("."+t.cellContentLabels).each(function(){e(this).replaceWith(this.childNodes)})},e(document).on(i.events.create,function(e,t){if("stack"===t.mode){new o(t.table,t).init()}}).on(i.events.refresh,function(t,i){"stack"===i.mode&&e(i.table).data(n.key).init()}).on(i.events.destroy,function(t,i){"stack"===i.mode&&e(i.table).data(n.key).destroy()}),i.Stack=o}(),function(){var t="tablesawbtn",n={_create:function(){return e(this).each(function(){e(this).trigger("beforecreate.tablesawbtn")[t]("_init").trigger("create.tablesawbtn")})},_init:function(){var n=e(this),i=this.getElementsByTagName("select")[0]
return i&&e(this).addClass("btn-select tablesaw-btn-select")[t]("_select",i),n},_select:function(t){var n=function(t,n){var i,r,o=e(n).find("option"),a=document.createElement("span"),s=!1
if(a.setAttribute("aria-hidden","true"),a.innerHTML="&#160;",o.each(function(){var e=this
e.selected&&(a.innerHTML=e.text)}),r=t.childNodes,o.length>0){for(var l=0,c=r.length;l<c;l++)(i=r[l])&&"SPAN"===i.nodeName.toUpperCase()&&(t.replaceChild(a,i),s=!0)
s||t.insertBefore(a,t.firstChild)}}
n(this,t),e(this).on("change refresh",function(){n(this,t)})}}
e.fn[t]=function(n,i,r,o){return this.each(function(){return n&&"string"==typeof n?e.fn[t].prototype[n].call(this,i,r,o):e(this).data("tablesawbtnactive")?e(this):(e(this).data("tablesawbtnactive",!0),void e.fn[t].prototype._create.call(this))})},e.extend(e.fn[t].prototype,n)}(),function(){var t={key:"tablesaw-coltoggle"},n=function(n){this.$table=e(n),this.$table.length&&(this.tablesaw=this.$table.data("tablesaw"),this.attributes={btnTarget:"data-tablesaw-columntoggle-btn-target",set:"data-tablesaw-columntoggle-set"},this.classes={columnToggleTable:"tablesaw-columntoggle",columnBtnContain:"tablesaw-columntoggle-btnwrap tablesaw-advance",columnBtn:"tablesaw-columntoggle-btn tablesaw-nav-btn down",popup:"tablesaw-columntoggle-popup",priorityPrefix:"tablesaw-priority-"},this.set=[],this.$headers=this.tablesaw._getPrimaryHeaderCells(),this.$table.data(t.key,this))}
n.prototype.initSet=function(){var t=this.$table.attr(this.attributes.set)
if(t){var n=this.$table[0]
this.set=e("table["+this.attributes.set+"='"+t+"']").filter(function(){return this!==n}).get()}},n.prototype.init=function(){function n(e){var t=e.checked,n=f.getHeaderFromCheckbox(e),i=f.tablesaw._$getCells(n)
i[t?"removeClass":"addClass"]("tablesaw-toggle-cellhidden"),i[t?"addClass":"removeClass"]("tablesaw-toggle-cellvisible"),f.updateColspanCells(n,t),f.$table.trigger("tablesawcolumns")}function r(t){t&&e(t.target).closest("."+f.classes.popup).length||(e(document).off("click."+a),l.removeClass("up").addClass("down"),d.removeClass("visible"))}function o(){d.addClass("visible"),l.removeClass("down").addClass("up"),e(document).off("click."+a,r),window.clearTimeout(m),m=window.setTimeout(function(){e(document).on("click."+a,r)},15)}if(this.$table.length){var a,s,l,c,u,d,f=this,p=this.tablesaw.getConfig({getColumnToggleLabelTemplate:function(e){return"<label><input type='checkbox' checked>"+e+"</label>"}})
this.$table.addClass(this.classes.columnToggleTable),a=this.$table.attr("id"),s=a+"-popup",d=e("<div class='"+this.classes.columnBtnContain+"'></div>"),l=e("<a href='#"+s+"' class='btn tablesaw-btn btn-micro "+this.classes.columnBtn+"' data-popup-link><span>"+i.i18n.columnToggleButton+"</span></a>"),c=e("<div class='"+this.classes.popup+"' id='"+s+"'></div>"),u=e("<div class='btn-group'></div>"),this.$popup=c
var h=!1
this.$headers.each(function(){var t=e(this),n=t.attr("data-tablesaw-priority"),i=f.tablesaw._$getCells(this)
n&&"persist"!==n&&(i.addClass(f.classes.priorityPrefix+n),e(p.getColumnToggleLabelTemplate(t.text())).appendTo(u).find('input[type="checkbox"]').data("tablesaw-header",this),h=!0)}),h||u.append("<label>"+i.i18n.columnToggleError+"</label>"),u.appendTo(c),u.find('input[type="checkbox"]').on("change",function(i){if(n(i.target),f.set.length){var r
e(f.$popup).find("input[type='checkbox']").each(function(e){if(this===i.target)return r=e,!1}),e(f.set).each(function(){var o=e(this).data(t.key).$popup.find("input[type='checkbox']").get(r)
o&&(o.checked=i.target.checked,n(o))})}}),l.appendTo(d)
var g=e(this.$table.attr(this.attributes.btnTarget))
d.appendTo(g.length?g:this.tablesaw.$toolbar)
var m
l.on("click.tablesaw",function(e){e.preventDefault(),d.is(".visible")?r():o()}),c.appendTo(d),this.$menu=u
var v=this.$table.closest(".tablesaw-overflow")
if(v.css("-webkit-overflow-scrolling")){var b
v.on("scroll",function(){var t=e(this)
window.clearTimeout(b),b=window.setTimeout(function(){t.css("-webkit-overflow-scrolling","auto"),window.setTimeout(function(){t.css("-webkit-overflow-scrolling","touch")},0)},100)})}e(window).on(i.events.resize+"."+a,function(){f.refreshToggle()}),this.initSet(),this.refreshToggle()}},n.prototype.getHeaderFromCheckbox=function(t){return e(t).data("tablesaw-header")},n.prototype.refreshToggle=function(){var e=this
this.$menu.find("input").each(function(){var t=e.getHeaderFromCheckbox(this)
this.checked="table-cell"===e.tablesaw._$getCells(t).eq(0).css("display")}),this.updateColspanCells()},n.prototype.updateColspanCells=function(e,t){this.tablesaw.updateColspanCells("tablesaw-toggle-cellhidden",e,t)},n.prototype.destroy=function(){this.$table.removeClass(this.classes.columnToggleTable),this.$table.find("th, td").each(function(){e(this).removeClass("tablesaw-toggle-cellhidden").removeClass("tablesaw-toggle-cellvisible"),this.className=this.className.replace(/\bui\-table\-priority\-\d\b/g,"")})},e(document).on(i.events.create,function(e,t){if("columntoggle"===t.mode){new n(t.table).init()}}),e(document).on(i.events.destroy,function(n,i){"columntoggle"===i.mode&&e(i.table).data(t.key).destroy()}),e(document).on(i.events.refresh,function(n,i){"columntoggle"===i.mode&&e(i.table).data(t.key).refreshPriority()}),i.ColumnToggle=n}(),function(){function t(t){var n=[]
return e(t.childNodes).each(function(){var t=e(this)
t.is("input, select")?n.push(t.val()):t.is(".tablesaw-cell-label")||n.push((t.text()||"").replace(/^\s+|\s+$/g,""))}),n.join("")}var n="tablesaw-sortable",r="table[data-"+n+"]",o="[data-"+n+"-switch]",a={sortCol:"data-tablesaw-sortable-col",defaultCol:"data-tablesaw-sortable-default-col",numericCol:"data-tablesaw-sortable-numeric",subRow:"data-tablesaw-subrow",ignoreRow:"data-tablesaw-ignorerow"},s={head:n+"-head",ascend:n+"-ascending",descend:n+"-descending",switcher:n+"-switch",tableToolbar:"tablesaw-bar-section",sortButton:n+"-btn"},l={_create:function(t){return e(this).each(function(){if(e(this).data(n+"-init"))return!1
e(this).data(n+"-init",!0).trigger("beforecreate."+n)[n]("_init",t).trigger("create."+n)})},_init:function(){function r(t){e.each(t,function(t,n){var i=e(n)
i.removeAttr(a.defaultCol),i.removeClass(s.ascend),i.removeClass(s.descend)})}function l(t){if(!e(t.target).is("a[href]")){t.stopPropagation()
var i=e(t.target).closest("["+a.sortCol+"]"),o=t.data.col,l=c.index(i[0])
r(i.closest("thead").find("th").filter(function(){return this!==i[0]})),i.is("."+s.descend)||!i.is("."+s.ascend)?(d[n]("sortBy",o,!0),l+="_asc"):(d[n]("sortBy",o),l+="_desc"),u&&u.find("select").val(l).trigger("refresh"),t.preventDefault()}}var c,u,d=e(this),f=d.data("tablesaw")
d.addClass(n),c=d.children().filter("thead").find("th["+a.sortCol+"]"),function(t){e.each(t,function(t,n){e(n).addClass(s.head)})}(c),function(t,n){e.each(t,function(t,i){var r=e("<button class='"+s.sortButton+"'/>")
r.on("click",{col:i},n),e(i).wrapInner(r).find("button").append("<span class='tablesaw-sortable-arrow'>")})}(c,l),function(t){e.each(t,function(t,n){var i=e(n)
i.is("["+a.defaultCol+"]")&&(i.is("."+s.descend)||i.addClass(s.ascend))})}(c),d.is(o)&&function(o){u=e("<div>").addClass(s.switcher).addClass(s.tableToolbar)
var l=["<label>"+i.i18n.sort+":"]
l.push('<span class="btn tablesaw-btn"><select>'),o.each(function(n){var i=e(this),r=i.is("["+a.defaultCol+"]"),o=i.is("."+s.descend),c=i.is("["+a.numericCol+"]"),u=0
e(this.cells.slice(0,5)).each(function(){isNaN(parseInt(t(this),10))||u++})
var d=5===u
c||i.attr(a.numericCol,d?"":"false"),l.push("<option"+(r&&!o?" selected":"")+' value="'+n+'_asc">'+i.text()+" "+(d?"&#x2191;":"(A-Z)")+"</option>"),l.push("<option"+(r&&o?" selected":"")+' value="'+n+'_desc">'+i.text()+" "+(d?"&#x2193;":"(Z-A)")+"</option>")}),l.push("</select></span></label>"),u.html(l.join(""))
var c=f.$toolbar.children().eq(0)
c.length?u.insertBefore(c):u.appendTo(f.$toolbar),u.find(".tablesaw-btn").tablesawbtn(),u.find("select").on("change",function(){var t=e(this).val().split("_"),i=o.eq(t[0])
r(i.siblings()),d[n]("sortBy",i.get(0),"asc"===t[1])})}(c)},sortRows:function(n,i,r,o,s){var l,c,u=function(n,i){var r=[]
return e.each(n,function(n,o){for(var s=o.parentNode,l=e(s),c=[],u=l.next();u.is("["+a.subRow+"]");)c.push(u[0]),u=u.next()
var d=s.parentNode
l.is("["+a.subRow+"]")||d===i&&r.push({element:o,cell:t(o),row:s,subrows:c.length?c:null,ignored:l.is("["+a.ignoreRow+"]")})}),r}(o.cells,s),d=e(o).data("tablesaw-sort")
return l=!(!d||"function"!=typeof d)&&d(r)||function(e,t){var n=/[^\-\+\d\.]/g
return e?function(e,i){return e.ignored||i.ignored?0:t?parseFloat(e.cell.replace(n,""))-parseFloat(i.cell.replace(n,"")):e.cell.toLowerCase()>i.cell.toLowerCase()?1:-1}:function(e,i){return e.ignored||i.ignored?0:t?parseFloat(i.cell.replace(n,""))-parseFloat(e.cell.replace(n,"")):e.cell.toLowerCase()<i.cell.toLowerCase()?1:-1}}(r,e(o).is("["+a.numericCol+"]")&&!e(o).is("["+a.numericCol+'="false"]')),c=u.sort(l),function(e){var t,n,i=[]
for(t=0,n=e.length;t<n;t++)i.push(e[t].row),e[t].subrows&&i.push(e[t].subrows)
return i}(c)},makeColDefault:function(t,n){var i=e(t)
i.attr(a.defaultCol,"true"),n?(i.removeClass(s.descend),i.addClass(s.ascend)):(i.removeClass(s.ascend),i.addClass(s.descend))},sortBy:function(t,i){var r,o=e(this),a=o.data("tablesaw")
a.$tbody.each(function(){var s,l,c,u=this,d=e(this),f=a.getBodyRows(u),p=a.headerMapping[0]
for(l=0,c=p.length;l<c;l++)if(p[l]===t){r=l
break}for(s=o[n]("sortRows",f,r,i,t,u),l=0,c=s.length;l<c;l++)d.append(s[l])}),o[n]("makeColDefault",t,i),o.trigger("tablesaw-sorted")}}
e.fn[n]=function(t){var i,r=Array.prototype.slice.call(arguments,1)
return t&&"string"==typeof t?(i=e.fn[n].prototype[t].apply(this[0],r),void 0!==i?i:e(this)):(e(this).data(n+"-active")||(e(this).data(n+"-active",!0),e.fn[n].prototype._create.call(this,t)),e(this))},e.extend(e.fn[n].prototype,l),e(document).on(i.events.create,function(e,t){t.$table.is(r)&&t.$table[n]()})}(),function(){function n(n,a){function s(){a.css({width:"1px"}),a.find("."+r.hiddenCol).removeClass(r.hiddenCol),$=[],E.each(function(){$.push(this.offsetWidth)}),a.css({width:""})}function l(e){C._$getCells(e).removeClass(r.hiddenCol)}function c(e){C._$getCells(e).addClass(r.hiddenCol)}function u(e){C._$getCells(e).addClass(r.persistCol)}function d(t){return e(t).is('[data-tablesaw-priority="persist"]')}function f(){a.removeClass(r.persistWidths),e("#"+j+"-persist").remove()}function p(){var t,n="#"+j+".tablesaw-swipe ",i=[],o=a.width(),s=[]
if(E.each(function(e){var t
d(this)&&(t=this.offsetWidth)<.75*o&&(s.push(e+"-"+t),i.push(n+" ."+r.persistCol+":nth-child("+(e+1)+") { width: "+t+"px; }"))}),t=s.join("_"),i.length){a.addClass(r.persistWidths)
var l=e("#"+j+"-persist")
l.length&&l.data("tablesaw-hash")===t||(l.remove(),e("<style>"+i.join("\n")+"</style>").attr("id",j+"-persist").data("tablesaw-hash",t).appendTo(D))}}function h(){var t,n=[]
return S.each(function(i){var o=e(this),a="none"===o.css("display")||o.is("."+r.hiddenCol)
if(a||t){if(a&&t)return n[1]=i,!1}else t=!0,n[0]=i}),n}function g(){var e=h()
return[e[1]-1,e[0]-1]}function m(e){return e?h():g()}function v(e){return e[1]>-1&&e[1]<S.length}function b(){var e=a.attr("data-tablesaw-swipe-media")
return!e||"matchMedia"in t&&t.matchMedia(e).matches}function y(){if(b()){var t=a.parent().width(),n=[],i=0,o=[],s=E.length
E.each(function(r){var a=e(this),l=a.is('[data-tablesaw-priority="persist"]')
n.push(l),i+=$[r],o.push(i),(l||i>t)&&s--})
var d=0===s
E.each(function(e){o[e]>t&&c(this)}),E.each(function(e){if(n[e])return void u(this);(o[e]<=t||d)&&(d=!1,l(this),C.updateColspanCells(r.hiddenCol,this,!0))}),f(),a.trigger("tablesawcolumns")}}function w(e){var t=m(e)
v(t)&&(isNaN(t[0])&&(t[0]=e?0:S.length-1),p(),c(S.get(t[0])),C.updateColspanCells(r.hiddenCol,S.get(t[0]),!1),l(S.get(t[1])),C.updateColspanCells(r.hiddenCol,S.get(t[1]),!0),a.trigger("tablesawcolumns"))}function x(e,t){return(e.touches||e.originalEvent.touches)[0][t]}var C=a.data("tablesaw"),T=e("<div class='tablesaw-advance'></div>"),k=e("<a href='#' class='btn tablesaw-nav-btn tablesaw-btn btn-micro left'>"+i.i18n.swipePreviousColumn+"</a>").appendTo(T),N=e("<a href='#' class='btn tablesaw-nav-btn tablesaw-btn btn-micro right'>"+i.i18n.swipeNextColumn+"</a>").appendTo(T),E=n._getPrimaryHeaderCells(),S=E.not('[data-tablesaw-priority="persist"]'),$=[],D=e(document.head||"head"),j=a.attr("id")
if(!E.length)throw new Error("tablesaw swipe: no header cells found.")
a.addClass("tablesaw-swipe"),s(),T.appendTo(C.$toolbar),j||(j="tableswipe-"+Math.round(1e4*Math.random()),a.attr("id",j)),k.add(N).on("click",function(t){w(!!e(t.target).closest(N).length),t.preventDefault()}),a.is("["+o.disableTouchEvents+"]")||a.on("touchstart.swipetoggle",function(r){var o,a,s=x(r,"pageX"),l=x(r,"pageY"),c=window.pageYOffset
e(t).off(i.events.resize,y),e(this).on("touchmove.swipetoggle",function(e){o=x(e,"pageX"),a=x(e,"pageY")}).on("touchend.swipetoggle",function(){var r=n.getConfig({swipeHorizontalThreshold:30,swipeVerticalThreshold:30}),u=r.swipe?r.swipe.verticalThreshold:r.swipeVerticalThreshold,d=r.swipe?r.swipe.horizontalThreshold:r.swipeHorizontalThreshold,f=Math.abs(window.pageYOffset-c)>=u
Math.abs(a-l)>=u||f||(o-s<-1*d&&w(!0),o-s>d&&w(!1)),window.setTimeout(function(){e(t).on(i.events.resize,y)},300),e(this).off("touchmove.swipetoggle touchend.swipetoggle")})}),a.on("tablesawcolumns.swipetoggle",function(){var e=v(g()),t=v(h())
k[e?"removeClass":"addClass"](r.hideBtn),N[t?"removeClass":"addClass"](r.hideBtn),C.$toolbar[e||t?"removeClass":"addClass"](r.allColumnsVisible)}).on("tablesawnext.swipetoggle",function(){w(!0)}).on("tablesawprev.swipetoggle",function(){w(!1)}).on(i.events.destroy+".swipetoggle",function(){var n=e(this)
n.removeClass("tablesaw-swipe"),C.$toolbar.find(".tablesaw-advance").remove(),e(t).off(i.events.resize,y),n.off(".swipetoggle")}).on(i.events.refresh,function(){f(),s(),y()}),y(),e(t).on(i.events.resize,y)}var r={hideBtn:"disabled",persistWidths:"tablesaw-fix-persist",hiddenCol:"tablesaw-swipe-cellhidden",persistCol:"tablesaw-swipe-cellpersist",allColumnsVisible:"tablesaw-all-cols-visible"},o={disableTouchEvents:"data-tablesaw-no-touch",ignorerow:"data-tablesaw-ignorerow",subrow:"data-tablesaw-subrow"}
e(document).on(i.events.create,function(e,t){"swipe"===t.mode&&n(t,t.$table)})}(),function(){function n(n){function o(){if(!r.show(n[0]))return void s.css("display","none")
s.css("display","block")
var t=l.find("li").removeClass(c)
n.find("thead th").each(function(n){"none"===e(this).css("display")&&t.eq(n).addClass(c)})}var a=n.data("tablesaw"),s=e('<div class="tablesaw-advance minimap">'),l=e('<ul class="tablesaw-advance-dots">').appendTo(s),c="tablesaw-advance-dots-hide"
n.data("tablesaw")._getPrimaryHeaderCells().each(function(){l.append("<li><i></i></li>")}),s.appendTo(a.$toolbar),o(),e(t).on(i.events.resize,o),n.on("tablesawcolumns.minimap",function(){o()}).on(i.events.destroy+".minimap",function(){var n=e(this)
a.$toolbar.find(".tablesaw-advance").remove(),e(t).off(i.events.resize,o),n.off(".minimap")})}var r={attr:{init:"data-tablesaw-minimap"},show:function(e){var n=e.getAttribute(r.attr.init)
return""===n||!!(n&&"matchMedia"in t)&&t.matchMedia(n).matches}}
e(document).on(i.events.create,function(e,t){"swipe"!==t.mode&&"columntoggle"!==t.mode||!t.$table.is("[ "+r.attr.init+"]")||n(t.$table)}),i.MiniMap=r}(),function(){var n={selectors:{init:"table[data-tablesaw-mode-switch]"},attributes:{excludeMode:"data-tablesaw-mode-exclude"},classes:{main:"tablesaw-modeswitch",toolbar:"tablesaw-bar-section"},modes:["stack","swipe","columntoggle"],init:function(t){var r,o=e(t),a=o.data("tablesaw"),s=o.attr(n.attributes.excludeMode),l=a.$toolbar,c=e("<div>").addClass(n.classes.main+" "+n.classes.toolbar),u=['<label><span class="abbreviated">'+i.i18n.modeSwitchColumnsAbbreviated+'</span><span class="longform">'+i.i18n.modeSwitchColumns+"</span>:"],d=o.attr("data-tablesaw-mode")
u.push('<span class="btn tablesaw-btn"><select>')
for(var f=0,p=n.modes.length;f<p;f++)s&&s.toLowerCase()===n.modes[f]||(r=d===n.modes[f],u.push("<option"+(r?" selected":"")+' value="'+n.modes[f]+'">'+i.i18n.modes[f]+"</option>"))
u.push("</select></span></label>"),c.html(u.join(""))
var h=l.find(".tablesaw-advance").eq(0)
h.length?c.insertBefore(h):c.appendTo(l),c.find(".tablesaw-btn").tablesawbtn(),c.find("select").on("change",function(i){return n.onModeChange.call(t,i,e(this).val())})},onModeChange:function(t,i){var r=e(this),o=r.data("tablesaw")
o.$toolbar.find("."+n.classes.main).remove(),o.destroy(),r.attr("data-tablesaw-mode",i),r.tablesaw()}}
e(t.document).on(i.events.create,function(e,t){t.$table.is(n.selectors.init)&&n.init(t.table)})}(),function(){function t(e){this.tablesaw=e,this.$table=e.$table,this.attr="data-tablesaw-checkall",this.checkAllSelector="["+this.attr+"]",this.forceCheckedSelector="["+this.attr+"-checked]",this.forceUncheckedSelector="["+this.attr+"-unchecked]",this.checkboxSelector='input[type="checkbox"]',this.$triggers=null,this.$checkboxes=null,this.$table.data(n)||(this.$table.data(n,this),this.init())}var n="tablesawCheckAll"
t.prototype._filterCells=function(t){return t.filter(function(){return!e(this).closest("tr").is("[data-tablesaw-subrow],[data-tablesaw-ignorerow]")}).find(this.checkboxSelector).not(this.checkAllSelector)},t.prototype.getCheckboxesForButton=function(t){return this._filterCells(e(e(t).attr(this.attr)))},t.prototype.getCheckboxesForCheckbox=function(t){return this._filterCells(e(e(t).closest("th")[0].cells))},t.prototype.init=function(){var t=this
this.$table.find(this.checkAllSelector).each(function(){e(this).is(t.checkboxSelector)?t.addCheckboxEvents(this):t.addButtonEvents(this)})},t.prototype.addButtonEvents=function(t){var i=this
e(t).on("click",function(t){t.preventDefault()
var r=i.getCheckboxesForButton(this),o=!0
r.each(function(){this.checked||(o=!1)})
var a
a=!!e(this).is(i.forceCheckedSelector)||!e(this).is(i.forceUncheckedSelector)&&!o,r.each(function(){this.checked=a,e(this).trigger("change."+n)})})},t.prototype.addCheckboxEvents=function(t){var i=this
e(t).on("change",function(){var e=this.checked
i.getCheckboxesForCheckbox(this).each(function(){this.checked=e})})
var r=i.getCheckboxesForCheckbox(t)
r.on("change."+n,function(){var e=0
r.each(function(){this.checked&&e++})
var n=e===r.length
t.checked=n,t.indeterminate=0!==e&&!n})},e(document).on(i.events.create,function(e,n){new t(n)}),i.CheckAll=t}(),i}),$(document).ready(function(){function e(e,t){var r=e.find("thead tr:has(th)"),o=e.find("tbody tr:has(td)"),a=(String.fromCharCode(11),String.fromCharCode(0),'"')
a+=n(r.map(i)),a+='"\r\n"',a+=n(o.map(i))+'"'
var s="data:application/csv;charset=utf-8,"+encodeURIComponent(a)
$(this).attr({download:t,href:s})}function t(e,t){var n=document.getElementById(e),i=n.innerHTML,r=encodeURI("data:application/csv;charset=utf-8,"+i)
dlLink=document.createElement("a"),dlLink.setAttribute("href",r),dlLink.setAttribute("download",t),dlLink.click()}function n(e){return e.get().join(tmpRowDelim).split(tmpRowDelim).join(rowDelim).split(tmpColDelim).join(colDelim)}function i(e,t){var n=$(t),i=n.find("td")
return i.length||(i=n.find("th")),i.map(r).get().join(tmpColDelim)}function r(e,t){return $(t).text().replace('"','""')}$(".csvExportLink").click(function(e){t(e.currentTarget.dataset.csvid,"datatable-export.csv")}),$(".exportLink").click(function(t){var n="export.csv"
n=n.replace(".csv","")+".csv",e.apply(this,[$(".gi-module>table"),n])}),$("#search-table").on("blur",function(e){if(""!=this.value){var t=new RegExp(this.value,"i")
$(".table tbody").find("tr").each(function(){var e=$(this)
e.children("td").text().match(t)?e.show():e.hide()})}else $(".gi-module>table tbody").find("tr").show()})})
var tabled_d_hote_loaded=!0
