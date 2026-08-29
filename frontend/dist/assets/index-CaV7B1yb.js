const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MarkdownTool-BLbHc6U9.js","assets/MarkdownTool-CEK31ho9.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();/**
* @vue/shared v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ds(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const be={},nn=[],gt=()=>{},Vl=()=>!1,cr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),fr=e=>e.startsWith("onUpdate:"),He=Object.assign,hs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Pi=Object.prototype.hasOwnProperty,pe=(e,t)=>Pi.call(e,t),K=Array.isArray,$t=e=>In(e)==="[object Map]",xt=e=>In(e)==="[object Set]",Ls=e=>In(e)==="[object Date]",ee=e=>typeof e=="function",xe=e=>typeof e=="string",vt=e=>typeof e=="symbol",ve=e=>e!==null&&typeof e=="object",zl=e=>(ve(e)||ee(e))&&ee(e.then)&&ee(e.catch),Ul=Object.prototype.toString,In=e=>Ul.call(e),Ai=e=>In(e).slice(8,-1),Wl=e=>In(e)==="[object Object]",ps=e=>xe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,bn=ds(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),dr=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},wi=/-\w/g,We=dr(e=>e.replace(wi,t=>t.slice(1).toUpperCase())),Si=/\B([A-Z])/g,Ft=dr(e=>e.replace(Si,"-$1").toLowerCase()),hr=dr(e=>e.charAt(0).toUpperCase()+e.slice(1)),kr=dr(e=>e?`on${hr(e)}`:""),pt=(e,t)=>!Object.is(e,t),Jn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ql=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},pr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let $s;const mr=()=>$s||($s=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ht(e){if(K(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=xe(r)?Ei(r):Ht(r);if(s)for(const l in s)t[l]=s[l]}return t}else if(xe(e)||ve(e))return e}const xi=/;(?![^(]*\))/g,ki=/:([^]+)/,_i=/\/\*[^]*?\*\//g;function Ei(e){const t={};return e.replace(_i,"").split(xi).forEach(n=>{if(n){const r=n.split(ki);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function fe(e){let t="";if(xe(e))t=e;else if(K(e))for(let n=0;n<e.length;n++){const r=fe(e[n]);r&&(t+=r+" ")}else if(ve(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ri="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Mi=ds(Ri);function Kl(e){return!!e||e===""}function Ti(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=kt(e[r],t[r]);return n}function Fs(e,t){if(e.size!==t.size)return!1;const n=Array.from(t),r=new Uint8Array(n.length);for(const s of e){let l=-1;for(let o=0;o<n.length;o++)if(!r[o]&&kt(s,n[o])){l=o;break}if(l<0)return!1;r[l]=1}return!0}function kt(e,t){if(e===t)return!0;let n=Ls(e),r=Ls(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=vt(e),r=vt(t),n||r)return e===t;if(n=K(e),r=K(t),n||r)return n&&r?Ti(e,t):!1;if(n=ve(e),r=ve(t),n||r){if(!n||!r)return!1;if(n=$t(e),r=$t(t),n||r||(n=xt(e),r=xt(t),n||r))return n&&r?Fs(e,t):!1;const s=Object.keys(e).length,l=Object.keys(t).length;if(s!==l)return!1;for(const o in e){const a=e.hasOwnProperty(o),i=t.hasOwnProperty(o);if(a&&!i||!a&&i||!kt(e[o],t[o]))return!1}}return String(e)===String(t)}function ms(e,t){return e.findIndex(n=>kt(n,t))}const Jl=e=>!!(e&&e.__v_isRef===!0),U=e=>xe(e)?e:e==null?"":K(e)||ve(e)&&(e.toString===Ul||!ee(e.toString))?Jl(e)?U(e.value):JSON.stringify(e,Yl,2):String(e),Yl=(e,t)=>Jl(t)?Yl(e,t.value):$t(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],l)=>(n[_r(r,l)+" =>"]=s,n),{})}:xt(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>_r(n))}:vt(t)?_r(t):ve(t)&&!K(t)&&!Wl(t)?String(t):t,_r=(e,t="")=>{var n;return vt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oe;class Bi{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Oe&&(Oe.active?(this.parent=Oe,this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const r=this.scopes.slice();for(t=0,n=r.length;t<n;t++)r[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const s=this.scopes.slice();for(t=0,n=s.length;t<n;t++)s[t].resume()}const r=this.effects.slice();for(t=0,n=r.length;t<n;t++)r[t].resume()}}run(t){if(this._active){const n=Oe;try{return Oe=this,t()}finally{Oe=n}}}on(){++this._on===1&&(this.prevScope=Oe,Oe=this)}off(){if(this._on>0&&--this._on===0){if(Oe===this)Oe=this.prevScope;else{let t=Oe;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ni(){return Oe}let Ce;const Er=new WeakSet;class Ql{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Oe&&(Oe.active?Oe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Er.has(this)&&(Er.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Gs(this),eo(this);const t=Ce,n=st;Ce=this,st=!0;try{return this.fn()}finally{to(this),Ce=t,st=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ys(t);this.deps=this.depsTail=void 0,Gs(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Er.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wr(this)&&this.run()}get dirty(){return Wr(this)}}let Xl=0,Cn,Pn;function Zl(e,t=!1){if(e.flags|=8,t){e.next=Pn,Pn=e;return}e.next=Cn,Cn=e}function gs(){Xl++}function vs(){if(--Xl>0)return;if(Pn){let t=Pn;for(Pn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Cn;){let t=Cn;for(Cn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function eo(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function to(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ys(r),Oi(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function Wr(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(no(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function no(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===_n)||(e.globalVersion=_n,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Wr(e))))return;e.flags|=2;const t=e.dep,n=Ce,r=st;Ce=e,st=!0;try{eo(e);const s=e.fn(e._value);(t.version===0||pt(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{Ce=n,st=r,to(e),e.flags&=-3}}function ys(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let l=n.computed.deps;l;l=l.nextDep)ys(l,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Oi(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let st=!0;const ro=[];function _t(){ro.push(st),st=!1}function Et(){const e=ro.pop();st=e===void 0?!0:e}function Gs(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Ce;Ce=void 0;try{t()}finally{Ce=n}}}let _n=0;class Ii{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class bs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Ce||!st||Ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ce)n=this.activeLink=new Ii(Ce,this),Ce.deps?(n.prevDep=Ce.depsTail,Ce.depsTail.nextDep=n,Ce.depsTail=n):Ce.deps=Ce.depsTail=n,so(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ce.depsTail,n.nextDep=void 0,Ce.depsTail.nextDep=n,Ce.depsTail=n,Ce.deps===n&&(Ce.deps=r)}return n}trigger(t){this.version++,_n++,this.notify(t)}notify(t){gs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{vs()}}}function so(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)so(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const qr=new WeakMap,qt=Symbol(""),Kr=Symbol(""),En=Symbol("");function Le(e,t,n){if(st&&Ce){let r=qr.get(e);r||qr.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new bs),s.map=r,s.key=n),s.track()}}function wt(e,t,n,r,s,l){const o=qr.get(e);if(!o){_n++;return}const a=i=>{i&&i.trigger()};if(gs(),t==="clear")o.forEach(a);else{const i=K(e),u=i&&ps(n);if(i&&n==="length"){const c=Number(r);o.forEach((f,h)=>{(h==="length"||h===En||!vt(h)&&h>=c)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(En)),t){case"add":i?u&&a(o.get("length")):(a(o.get(qt)),$t(e)&&a(o.get(Kr)));break;case"delete":i||(a(o.get(qt)),$t(e)&&a(o.get(Kr)));break;case"set":$t(e)&&a(o.get(qt));break}}vs()}function Xt(e){const t=he(e);return t===e?t:(Le(t,"iterate",En),nt(e)?t:t.map(ot))}function gr(e){return Le(e=he(e),"iterate",En),e}function dt(e,t){return Rt(e)?ln(Kt(e)?ot(t):t):ot(t)}const Hi={__proto__:null,[Symbol.iterator](){return Rr(this,Symbol.iterator,e=>dt(this,e))},concat(...e){return Xt(this).concat(...e.map(t=>K(t)?Xt(t):t))},entries(){return Rr(this,"entries",e=>(e[1]=dt(this,e[1]),e))},every(e,t){return bt(this,"every",e,t,void 0,arguments)},filter(e,t){return bt(this,"filter",e,t,n=>n.map(r=>dt(this,r)),arguments)},find(e,t){return bt(this,"find",e,t,n=>dt(this,n),arguments)},findIndex(e,t){return bt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return bt(this,"findLast",e,t,n=>dt(this,n),arguments)},findLastIndex(e,t){return bt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return bt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Mr(this,"includes",e)},indexOf(...e){return Mr(this,"indexOf",e)},join(e){return Xt(this).join(e)},lastIndexOf(...e){return Mr(this,"lastIndexOf",e)},map(e,t){return bt(this,"map",e,t,void 0,arguments)},pop(){return dn(this,"pop")},push(...e){return dn(this,"push",e)},reduce(e,...t){return js(this,"reduce",e,t)},reduceRight(e,...t){return js(this,"reduceRight",e,t)},shift(){return dn(this,"shift")},some(e,t){return bt(this,"some",e,t,void 0,arguments)},splice(...e){return dn(this,"splice",e)},toReversed(){return Xt(this).toReversed()},toSorted(e){return Xt(this).toSorted(e)},toSpliced(...e){return Xt(this).toSpliced(...e)},unshift(...e){return dn(this,"unshift",e)},values(){return Rr(this,"values",e=>dt(this,e))}};function Rr(e,t,n){const r=gr(e),s=r[t]();return r!==e&&!nt(e)&&(s._next=s.next,s.next=()=>{const l=s._next();return l.done||(l.value=n(l.value)),l}),s}const Di=Array.prototype;function bt(e,t,n,r,s,l){const o=gr(e),a=o!==e&&!nt(e),i=o[t];if(i!==Di[t]){const f=i.apply(e,l);return a?ot(f):f}let u=n;o!==e&&(a?u=function(f,h){return n.call(this,dt(e,f),h,e)}:n.length>2&&(u=function(f,h){return n.call(this,f,h,e)}));const c=i.call(o,u,r);return a&&s?s(c):c}function js(e,t,n,r){const s=gr(e),l=s!==e&&!nt(e);let o=n,a=!1;s!==e&&(l?(a=r.length===0,o=function(u,c,f){return a&&(a=!1,u=dt(e,u)),n.call(this,u,dt(e,c),f,e)}):n.length>3&&(o=function(u,c,f){return n.call(this,u,c,f,e)}));const i=s[t](o,...r);return a?dt(e,i):i}function Mr(e,t,n){const r=he(e);Le(r,"iterate",En);const s=r[t](...n);return(s===-1||s===!1)&&As(n[0])?(n[0]=he(n[0]),r[t](...n)):s}function dn(e,t,n=[]){_t(),gs();const r=he(e)[t].apply(e,n);return vs(),Et(),r}const Li=ds("__proto__,__v_isRef,__isVue"),lo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(vt));function $i(e){vt(e)||(e=String(e));const t=he(this);return Le(t,"has",e),t.hasOwnProperty(e)}class oo{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,l=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return l;if(n==="__v_raw")return r===(s?l?Ji:co:l?uo:ao).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=K(t);if(!s){let i;if(o&&(i=Hi[n]))return i;if(n==="hasOwnProperty")return $i}const a=Reflect.get(t,n,$e(t)?t:r);if((vt(n)?lo.has(n):Li(n))||(s||Le(t,"get",n),l))return a;if($e(a)){const i=o&&ps(n)?a:a.value;return s&&ve(i)?Yr(i):i}return ve(a)?s?Yr(a):Lt(a):a}}class io extends oo{constructor(t=!1){super(!1,t)}set(t,n,r,s){let l=t[n];const o=K(t)&&ps(n);if(!this._isShallow){const u=Rt(l);if(!nt(r)&&!Rt(r)&&(l=he(l),r=he(r)),!o&&$e(l)&&!$e(r))return u||(l.value=r),!0}const a=o?Number(n)<t.length:pe(t,n),i=Reflect.set(t,n,r,$e(t)?t:s);return t===he(s)&&i&&(a?pt(r,l)&&wt(t,"set",n,r):wt(t,"add",n,r)),i}deleteProperty(t,n){const r=pe(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&wt(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!vt(n)||!lo.has(n))&&Le(t,"has",n),r}ownKeys(t){return Le(t,"iterate",K(t)?"length":qt),Reflect.ownKeys(t)}}class Fi extends oo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Gi=new io,ji=new Fi,Vi=new io(!0);const Jr=e=>e,jn=e=>Reflect.getPrototypeOf(e);function zi(e,t,n){return function(...r){const s=this.__v_raw,l=he(s),o=$t(l),a=e==="entries"||e===Symbol.iterator&&o,i=e==="keys"&&o,u=s[e](...r),c=n?Jr:t?ln:ot;return!t&&Le(l,"iterate",i?Kr:qt),He(Object.create(u),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:a?[c(f[0]),c(f[1])]:c(f),done:h}}})}}function Vn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ui(e,t){const n={get(s){const l=this.__v_raw,o=he(l),a=he(s);e||(pt(s,a)&&Le(o,"get",s),Le(o,"get",a));const{has:i}=jn(o),u=t?Jr:e?ln:ot;if(i.call(o,s))return u(l.get(s));if(i.call(o,a))return u(l.get(a));l!==o&&l.get(s)},get size(){const s=this.__v_raw;return!e&&Le(he(s),"iterate",qt),s.size},has(s){const l=this.__v_raw,o=he(l),a=he(s);return e||(pt(s,a)&&Le(o,"has",s),Le(o,"has",a)),s===a?l.has(s):l.has(s)||l.has(a)},forEach(s,l){const o=this,a=o.__v_raw,i=he(a),u=t?Jr:e?ln:ot;return!e&&Le(i,"iterate",qt),a.forEach((c,f)=>s.call(l,u(c),u(f),o))}};return He(n,e?{add:Vn("add"),set:Vn("set"),delete:Vn("delete"),clear:Vn("clear")}:{add(s){const l=he(this),o=jn(l),a=he(s),i=!t&&!nt(s)&&!Rt(s)?a:s;return o.has.call(l,i)||pt(s,i)&&o.has.call(l,s)||pt(a,i)&&o.has.call(l,a)||(l.add(i),wt(l,"add",i,i)),this},set(s,l){!t&&!nt(l)&&!Rt(l)&&(l=he(l));const o=he(this),{has:a,get:i}=jn(o);let u=a.call(o,s);u||(s=he(s),u=a.call(o,s));const c=i.call(o,s);return o.set(s,l),u?pt(l,c)&&wt(o,"set",s,l):wt(o,"add",s,l),this},delete(s){const l=he(this),{has:o,get:a}=jn(l);let i=o.call(l,s);i||(s=he(s),i=o.call(l,s)),a&&a.call(l,s);const u=l.delete(s);return i&&wt(l,"delete",s,void 0),u},clear(){const s=he(this),l=s.size!==0,o=s.clear();return l&&wt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=zi(s,e,t)}),n}function Cs(e,t){const n=Ui(e,t);return(r,s,l)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(pe(n,s)&&s in r?n:r,s,l)}const Wi={get:Cs(!1,!1)},qi={get:Cs(!1,!0)},Ki={get:Cs(!0,!1)};const ao=new WeakMap,uo=new WeakMap,co=new WeakMap,Ji=new WeakMap;function Yi(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Lt(e){return Rt(e)?e:Ps(e,!1,Gi,Wi,ao)}function fo(e){return Ps(e,!1,Vi,qi,uo)}function Yr(e){return Ps(e,!0,ji,Ki,co)}function Ps(e,t,n,r,s){if(!ve(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const l=s.get(e);if(l)return l;const o=Yi(Ai(e));if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function Kt(e){return Rt(e)?Kt(e.__v_raw):!!(e&&e.__v_isReactive)}function Rt(e){return!!(e&&e.__v_isReadonly)}function nt(e){return!!(e&&e.__v_isShallow)}function As(e){return e?!!e.__v_raw:!1}function he(e){const t=e&&e.__v_raw;return t?he(t):e}function Qi(e){return!pe(e,"__v_skip")&&Object.isExtensible(e)&&ql(e,"__v_skip",!0),e}const ot=e=>ve(e)?Lt(e):e,ln=e=>ve(e)?Yr(e):e;function $e(e){return e?e.__v_isRef===!0:!1}function ne(e){return ho(e,!1)}function Qr(e){return ho(e,!0)}function ho(e,t){return $e(e)?e:new Xi(e,t)}class Xi{constructor(t,n){this.dep=new bs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:he(t),this._value=n?t:ot(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||nt(t)||Rt(t);t=r?t:he(t),pt(t,n)&&(this._rawValue=t,this._value=r?t:ot(t),this.dep.trigger())}}function F(e){return $e(e)?e.value:e}const Zi={get:(e,t,n)=>t==="__v_raw"?e:F(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return $e(s)&&!$e(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function po(e){return Kt(e)?e:new Proxy(e,Zi)}class ea{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new bs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_n-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ce!==this)return Zl(this,!0),!0}get value(){const t=this.dep.track();return no(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ta(e,t,n=!1){let r,s;return ee(e)?r=e:(r=e.get,s=e.set),new ea(r,s,n)}const zn={},Zn=new WeakMap;let Vt;function na(e,t=!1,n=Vt){if(n){let r=Zn.get(n);r||Zn.set(n,r=[]),r.push(e)}}function ra(e,t,n=be){const{immediate:r,deep:s,once:l,scheduler:o,augmentJob:a,call:i}=n,u=A=>s?A:nt(A)||s===!1||s===0?St(A,1):St(A);let c,f,h,d,y=!1,C=!1;if($e(e)?(f=()=>e.value,y=nt(e)):Kt(e)?(f=()=>u(e),y=!0):K(e)?(C=!0,y=e.some(A=>Kt(A)||nt(A)),f=()=>e.map(A=>{if($e(A))return A.value;if(Kt(A))return u(A);if(ee(A))return i?i(A,2):A()})):ee(e)?t?f=i?()=>i(e,2):e:f=()=>{if(h){_t();try{h()}finally{Et()}}const A=Vt;Vt=c;try{return i?i(e,3,[d]):e(d)}finally{Vt=A}}:f=gt,t&&s){const A=f,R=s===!0?1/0:s;f=()=>St(A(),R)}const P=Ni(),x=()=>{c.stop(),P&&P.active&&hs(P.effects,c)};if(l&&t){const A=t;t=(...R)=>{const q=A(...R);return x(),q}}let _=C?new Array(e.length).fill(zn):zn;const B=A=>{if(!(!(c.flags&1)||!c.dirty&&!A))if(t){const R=c.run();if(A||s||y||(C?R.some((q,Q)=>pt(q,_[Q])):pt(R,_))){h&&h();const q=Vt;Vt=c;try{const Q=[R,_===zn?void 0:C&&_[0]===zn?[]:_,d];_=R,i?i(t,3,Q):t(...Q)}finally{Vt=q}}}else c.run()};return a&&a(B),c=new Ql(f),c.scheduler=o?()=>o(B,!1):B,d=A=>na(A,!1,c),h=c.onStop=()=>{const A=Zn.get(c);if(A){if(i)i(A,4);else for(const R of A)R();Zn.delete(c)}},t?r?B(!0):_=c.run():o?o(B.bind(null,!0),!0):c.run(),x.pause=c.pause.bind(c),x.resume=c.resume.bind(c),x.stop=x,x}function St(e,t=1/0,n){if(t<=0||!ve(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,$e(e))St(e.value,t,n);else if(K(e))for(let r=0;r<e.length;r++)St(e[r],t,n);else if(xt(e)||$t(e))e.forEach(r=>{St(r,t,n)});else if(Wl(e)){for(const r in e)St(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&St(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hn(e,t,n,r){try{return r?e(...r):e()}catch(s){Dn(s,t,n)}}function it(e,t,n,r){if(ee(e)){const s=Hn(e,t,n,r);return s&&zl(s)&&s.catch(l=>{Dn(l,t,n)}),s}if(K(e)){const s=[];for(let l=0;l<e.length;l++)s.push(it(e[l],t,n,r));return s}}function Dn(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||be;if(t){let a=t.parent;const i=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,i,u)===!1)return}a=a.parent}if(l){_t(),Hn(l,null,10,[e,i,u]),Et();return}}sa(e,n,s,r,o)}function sa(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const Ue=[];let ft=-1;const rn=[];let Ot=null,en=0;const mo=Promise.resolve();let er=null;function tt(e){const t=er||mo;return e?t.then(this?e.bind(this):e):t}function la(e){let t=ft+1,n=Ue.length;for(;t<n;){const r=t+n>>>1,s=Ue[r],l=Rn(s);l<e||l===e&&s.flags&2?t=r+1:n=r}return t}function ws(e){if(!(e.flags&1)){const t=Rn(e),n=Ue[Ue.length-1];!n||!(e.flags&2)&&t>=Rn(n)?Ue.push(e):Ue.splice(la(t),0,e),e.flags|=1,go()}}function go(){er||(er=mo.then(yo))}function oa(e){if(!K(e))Ot&&e.id===-1?Ot.splice(en+1,0,e):e.flags&1||(rn.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)rn.push(e[t]);go()}function Vs(e,t,n=ft+1){for(;n<Ue.length;n++){const r=Ue[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Ue.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function vo(e){if(rn.length){const t=[...new Set(rn)].sort((n,r)=>Rn(n)-Rn(r));if(rn.length=0,Ot){for(let n=0;n<t.length;n++)Ot.push(t[n]);return}for(Ot=t,en=0;en<Ot.length;en++){const n=Ot[en];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ot=null,en=0}}const Rn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function yo(e){try{for(ft=0;ft<Ue.length;ft++){const t=Ue[ft];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Hn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ft<Ue.length;ft++){const t=Ue[ft];t&&(t.flags&=-2)}ft=-1,Ue.length=0,vo(),er=null,(Ue.length||rn.length)&&yo()}}let Qe=null,bo=null;function tr(e){const t=Qe;return Qe=e,bo=e&&e.type.__scopeId||null,t}function vr(e,t=Qe,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&lr(-1);const l=tr(t),o=Yt.length;let a;try{a=e(...s)}finally{for(let i=Yt.length;i>o;i--)zo();tr(l),r._d&&lr(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Se(e,t){if(Qe===null)return e;const n=wr(Qe),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[l,o,a,i=be]=t[s];l&&(ee(l)&&(l={mounted:l,updated:l}),l.deep&&St(o),r.push({dir:l,instance:n,value:o,oldValue:void 0,arg:a,modifiers:i}))}return e}function Gt(e,t,n,r){const s=e.dirs,l=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];l&&(a.oldValue=l[o].value);let i=a.dir[r];i&&(_t(),it(i,n,8,[e.el,a,e,t]),Et())}}function Yn(e,t){if(Ie){let n=Ie.provides;const r=Ie.parent&&Ie.parent.provides;r===n&&(n=Ie.provides=Object.create(r)),n[e]=t}}function lt(e,t,n=!1){const r=ru();if(r||sn){let s=sn?sn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&ee(t)?t.call(r&&r.proxy):t}}const ia=Symbol.for("v-scx"),aa=()=>lt(ia);function Jt(e,t,n){return Co(e,t,n)}function Co(e,t,n=be){const{immediate:r,deep:s,flush:l,once:o}=n,a=He({},n),i=t&&r||!t&&l!=="post";let u;if(an){if(l==="sync"){const d=aa();u=d.__watcherHandles||(d.__watcherHandles=[])}else if(!i){const d=()=>{};return d.stop=gt,d.resume=gt,d.pause=gt,d}}const c=Ie;a.call=(d,y,C)=>it(d,c,y,C);let f=!1;l==="post"?a.scheduler=d=>{Je(d,c&&c.suspense)}:l!=="sync"&&(f=!0,a.scheduler=(d,y)=>{y?d():ws(d)}),a.augmentJob=d=>{t&&(d.flags|=4),f&&(d.flags|=2,c&&(d.id=c.uid,d.i=c))};const h=ra(e,t,a);return an&&(u?u.push(h):i&&h()),h}function ua(e,t,n){const r=this.proxy,s=xe(e)?e.includes(".")?Po(r,e):()=>r[e]:e.bind(r,r);let l;ee(t)?l=t:(l=t.handler,n=t);const o=$n(this),a=Co(s,l.bind(r),n);return o(),a}function Po(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const ca=Symbol("_vte"),yr=e=>e.__isTeleport,Tr=Symbol("_leaveCb");function fa(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Mt){t=n;break}}return t}function Ao(e){if(!br(e))return yr(e.type)&&e.children?fa(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&ee(n.default))return n.default()}}function Ss(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;Ss(yr(n.type)&&Ao(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function xs(e,t){return ee(e)?He({name:e.name},t,{setup:e}):e}function ks(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function zs(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const nr=new WeakMap;function An(e,t,n,r,s=!1){if(K(e)){e.forEach((C,P)=>An(C,t&&(K(t)?t[P]:t),n,r,s));return}if(wn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&An(e,t,n,r.component.subTree);return}const l=r.shapeFlag&4?wr(r.component):r.el,o=s?null:l,{i:a,r:i}=e,u=t&&t.r,c=a.refs===be?a.refs={}:a.refs,f=a.setupState,h=he(f),d=f===be?Vl:C=>zs(c,C)?!1:pe(h,C),y=(C,P)=>!(P&&zs(c,P));if(u!=null&&u!==i){if(Us(t),xe(u))c[u]=null,d(u)&&(f[u]=null);else if($e(u)){const C=t;y(u,C.k)&&(u.value=null),C.k&&(c[C.k]=null)}}if(ee(i))Hn(i,a,12,[o,c]);else{const C=xe(i),P=$e(i);if(C||P){const x=()=>{if(e.f){const _=C?d(i)?f[i]:c[i]:y()||!e.k?i.value:c[e.k];if(s)K(_)&&hs(_,l);else if(K(_))_.includes(l)||_.push(l);else if(C)c[i]=[l],d(i)&&(f[i]=c[i]);else{const B=[l];y(i,e.k)&&(i.value=B),e.k&&(c[e.k]=B)}}else C?(c[i]=o,d(i)&&(f[i]=o)):P&&(y(i,e.k)&&(i.value=o),e.k&&(c[e.k]=o))};if(o){const _=()=>{x(),nr.delete(e)};_.id=-1,nr.set(e,_),Je(_,n)}else Us(e),x()}}}function Us(e){const t=nr.get(e);t&&(t.flags|=8,nr.delete(e))}const Ws=e=>e.nodeType===8;mr().requestIdleCallback;mr().cancelIdleCallback;function da(e,t){if(Ws(e)&&e.data==="["){let n=1,r=e.nextSibling;for(;r;){if(r.nodeType===1){if(t(r)===!1)break}else if(Ws(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else t(e)}const wn=e=>!!e.type.__asyncLoader;function ha(e){ee(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:l,timeout:o,suspensible:a=!0,onError:i}=e;let u=null,c,f=0;const h=()=>(f++,u=null,d()),d=()=>{let y;return u||(y=u=t().catch(C=>{if(C=C instanceof Error?C:new Error(String(C)),i)return new Promise((P,x)=>{i(C,()=>P(h()),()=>x(C),f+1)});throw C}).then(C=>y!==u&&u?u:(C&&(C.__esModule||C[Symbol.toStringTag]==="Module")&&(C=C.default),c=C,C)))};return xs({name:"AsyncComponentWrapper",__asyncLoader:d,__asyncHydrate(y,C,P){const x=y.isConnected;let _=!1;(C.bu||(C.bu=[])).push(()=>_=!0);const B=()=>{_||!y.parentNode||x&&!y.isConnected||P()},A=l?()=>{const R=l(B,q=>da(y,q));R&&(C.bum||(C.bum=[])).push(R)}:B;c?A():d().then(()=>!C.isUnmounted&&A())},get __asyncResolved(){return c},setup(){const y=Ie;if(ks(y),c)return()=>Un(c,y);const C=R=>{u=null,Dn(R,y,13,!r)};if(a&&y.suspense||an)return d().then(R=>()=>Un(R,y)).catch(R=>(C(R),()=>r?G(r,{error:R}):null));const P=ne(!1),x=ne(),_=ne(!!s);let B,A;return Es(()=>{B!=null&&clearTimeout(B),A!=null&&clearTimeout(A)}),s&&(A=setTimeout(()=>{y.isUnmounted||(_.value=!1)},s)),o!=null&&(B=setTimeout(()=>{if(!y.isUnmounted&&!P.value&&!x.value){const R=new Error(`Async component timed out after ${o}ms.`);C(R),x.value=R}},o)),d().then(()=>{y.isUnmounted||(P.value=!0,y.parent&&br(y.parent.vnode)&&y.parent.update())}).catch(R=>{if(y.isUnmounted){u=null;return}C(R),x.value=R}),()=>{if(P.value&&c)return Un(c,y);if(x.value&&r)return G(r,{error:x.value});if(n&&!_.value)return Un(n,y)}}})}function Un(e,t){const{ref:n,props:r,children:s,ce:l}=t.vnode,o=G(e,r,s);return o.ref=n,o.ce=l,delete t.vnode.ce,o}const br=e=>e.type.__isKeepAlive;function pa(e,t){wo(e,"a",t)}function ma(e,t){wo(e,"da",t)}function wo(e,t,n=Ie){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Cr(t,r,n),n){let s=n.parent;for(;s&&s.parent;)br(s.parent.vnode)&&ga(r,t,n,s),s=s.parent}}function ga(e,t,n,r){const s=Cr(t,e,r,!0);Es(()=>{hs(r[t],s)},n)}function Cr(e,t,n=Ie,r=!1){if(n){const s=n[e]||(n[e]=[]),l=t.__weh||(t.__weh=(...o)=>{_t();const a=$n(n),i=it(t,n,e,o);return a(),Et(),i});return r?s.unshift(l):s.push(l),l}}const Tt=e=>(t,n=Ie)=>{(!an||e==="sp")&&Cr(e,(...r)=>t(...r),n)},va=Tt("bm"),Ln=Tt("m"),ya=Tt("bu"),ba=Tt("u"),_s=Tt("bum"),Es=Tt("um"),Ca=Tt("sp"),Pa=Tt("rtg"),Aa=Tt("rtc");function wa(e,t=Ie){Cr("ec",e,t)}const So="components";function Xr(e,t){return ko(So,e,!0,t)||e}const xo=Symbol.for("v-ndc");function rr(e){return xe(e)?ko(So,e,!1)||e:e||xo}function ko(e,t,n=!0,r=!1){const s=Qe||Ie;if(s){const l=s.type;{const a=au(l,!1);if(a&&(a===t||a===We(t)||a===hr(We(t))))return l}const o=qs(s[e]||l[e],t)||qs(s.appContext[e],t);return!o&&r?l:o}}function qs(e,t){return e&&(e[t]||e[We(t)]||e[hr(We(t))])}function zt(e,t,n,r){let s;const l=n,o=K(e);if(o||xe(e)){const a=o&&Kt(e);let i=!1,u=!1;a&&(i=!nt(e),u=Rt(e),e=gr(e)),s=new Array(e.length);for(let c=0,f=e.length;c<f;c++)s[c]=t(i?u?ln(ot(e[c])):ot(e[c]):e[c],c,void 0,l)}else if(typeof e=="number"){s=new Array(e);for(let a=0;a<e;a++)s[a]=t(a+1,a,void 0,l)}else if(ve(e))if(e[Symbol.iterator])s=Array.from(e,(a,i)=>t(a,i,void 0,l));else{const a=Object.keys(e);s=new Array(a.length);for(let i=0,u=a.length;i<u;i++){const c=a[i];s[i]=t(e[c],c,i,l)}}else s=[];return s}const Zr=e=>e?qo(e)?wr(e):Zr(e.parent):null,Sn=He(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Zr(e.parent),$root:e=>Zr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Eo(e),$forceUpdate:e=>e.f||(e.f=()=>{ws(e.update)}),$nextTick:e=>e.n||(e.n=tt.bind(e.proxy)),$watch:e=>ua.bind(e)}),Br=(e,t)=>e!==be&&!e.__isScriptSetup&&pe(e,t),Sa={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:l,accessCache:o,type:a,appContext:i}=e;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return l[t]}else{if(Br(r,t))return o[t]=1,r[t];if(s!==be&&pe(s,t))return o[t]=2,s[t];if(pe(l,t))return o[t]=3,l[t];if(n!==be&&pe(n,t))return o[t]=4,n[t];es&&(o[t]=0)}}const u=Sn[t];let c,f;if(u)return t==="$attrs"&&Le(e.attrs,"get",""),u(e);if((c=a.__cssModules)&&(c=c[t]))return c;if(n!==be&&pe(n,t))return o[t]=4,n[t];if(f=i.config.globalProperties,pe(f,t))return f[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:l}=e;return Br(s,t)?(s[t]=n,!0):r!==be&&pe(r,t)?(r[t]=n,!0):pe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,props:l,type:o}},a){let i;return!!(n[a]||e!==be&&a[0]!=="$"&&pe(e,a)||Br(t,a)||pe(l,a)||pe(r,a)||pe(Sn,a)||pe(s.config.globalProperties,a)||(i=o.__cssModules)&&i[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:pe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ks(e){return K(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let es=!0;function xa(e){const t=Eo(e),n=e.proxy,r=e.ctx;es=!1,t.beforeCreate&&Js(t.beforeCreate,e,"bc");const{data:s,computed:l,methods:o,watch:a,provide:i,inject:u,created:c,beforeMount:f,mounted:h,beforeUpdate:d,updated:y,activated:C,deactivated:P,beforeDestroy:x,beforeUnmount:_,destroyed:B,unmounted:A,render:R,renderTracked:q,renderTriggered:Q,errorCaptured:ie,serverPrefetch:Pe,expose:me,inheritAttrs:Re,components:De,directives:Fe,filters:Ae}=t;if(u&&ka(u,r,null),o)for(const ue in o){const oe=o[ue];ee(oe)&&(r[ue]=oe.bind(n))}if(s){const ue=s.call(n,n);ve(ue)&&(e.data=Lt(ue))}if(es=!0,l)for(const ue in l){const oe=l[ue],et=ee(oe)?oe.bind(n,n):ee(oe.get)?oe.get.bind(n,n):gt,rt=!ee(oe)&&ee(oe.set)?oe.set.bind(n):gt,Ke=ye({get:et,set:rt});Object.defineProperty(r,ue,{enumerable:!0,configurable:!0,get:()=>Ke.value,set:Te=>Ke.value=Te})}if(a)for(const ue in a)_o(a[ue],r,n,ue);if(i){const ue=ee(i)?i.call(n):i;Reflect.ownKeys(ue).forEach(oe=>{Yn(oe,ue[oe])})}c&&Js(c,e,"c");function we(ue,oe){K(oe)?oe.forEach(et=>ue(et.bind(n))):oe&&ue(oe.bind(n))}if(we(va,f),we(Ln,h),we(ya,d),we(ba,y),we(pa,C),we(ma,P),we(wa,ie),we(Aa,q),we(Pa,Q),we(_s,_),we(Es,A),we(Ca,Pe),K(me))if(me.length){const ue=e.exposed||(e.exposed={});me.forEach(oe=>{Object.defineProperty(ue,oe,{get:()=>n[oe],set:et=>n[oe]=et,enumerable:!0})})}else e.exposed||(e.exposed={});R&&e.render===gt&&(e.render=R),Re!=null&&(e.inheritAttrs=Re),De&&(e.components=De),Fe&&(e.directives=Fe),Pe&&ks(e)}function ka(e,t,n=gt){K(e)&&(e=ts(e));for(const r in e){const s=e[r];let l;ve(s)?"default"in s?l=lt(s.from||r,s.default,!0):l=lt(s.from||r):l=lt(s),$e(l)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>l.value,set:o=>l.value=o}):t[r]=l}}function Js(e,t,n){it(K(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function _o(e,t,n,r){let s=r.includes(".")?Po(n,r):()=>n[r];if(xe(e)){const l=t[e];ee(l)&&Jt(s,l)}else if(ee(e))Jt(s,e.bind(n));else if(ve(e))if(K(e))e.forEach(l=>_o(l,t,n,r));else{const l=ee(e.handler)?e.handler.bind(n):t[e.handler];ee(l)&&Jt(s,l,e)}}function Eo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:l,config:{optionMergeStrategies:o}}=e.appContext,a=l.get(t);let i;return a?i=a:!s.length&&!n&&!r?i=t:(i={},s.length&&s.forEach(u=>sr(i,u,o,!0)),sr(i,t,o)),ve(t)&&l.set(t,i),i}function sr(e,t,n,r=!1){const{mixins:s,extends:l}=t;l&&sr(e,l,n,!0),s&&s.forEach(o=>sr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=_a[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const _a={data:Ys,props:Qs,emits:Qs,methods:vn,computed:vn,beforeCreate:Ve,created:Ve,beforeMount:Ve,mounted:Ve,beforeUpdate:Ve,updated:Ve,beforeDestroy:Ve,beforeUnmount:Ve,destroyed:Ve,unmounted:Ve,activated:Ve,deactivated:Ve,errorCaptured:Ve,serverPrefetch:Ve,components:vn,directives:vn,watch:Ra,provide:Ys,inject:Ea};function Ys(e,t){return t?e?function(){return He(ee(e)?e.call(this,this):e,ee(t)?t.call(this,this):t)}:t:e}function Ea(e,t){return vn(ts(e),ts(t))}function ts(e){if(K(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ve(e,t){return e?[...new Set([].concat(e,t))]:t}function vn(e,t){return e?He(Object.create(null),e,t):t}function Qs(e,t){return e?K(e)&&K(t)?[...new Set([...e,...t])]:He(Object.create(null),Ks(e),Ks(t??{})):t}function Ra(e,t){if(!e)return t;if(!t)return e;const n=He(Object.create(null),e);for(const r in t)n[r]=Ve(e[r],t[r]);return n}function Ro(){return{app:null,config:{isNativeTag:Vl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ma=0;function Ta(e,t){return function(r,s=null){ee(r)||(r=He({},r)),s!=null&&!ve(s)&&(s=null);const l=Ro(),o=new WeakSet,a=[];let i=!1;const u=l.app={_uid:Ma++,_component:r,_props:s,_container:null,_context:l,_instance:null,version:cu,get config(){return l.config},set config(c){},use(c,...f){return o.has(c)||(c&&ee(c.install)?(o.add(c),c.install(u,...f)):ee(c)&&(o.add(c),c(u,...f))),u},mixin(c){return l.mixins.includes(c)||l.mixins.push(c),u},component(c,f){return f?(l.components[c]=f,u):l.components[c]},directive(c,f){return f?(l.directives[c]=f,u):l.directives[c]},mount(c,f,h){if(!i){const d=u._ceVNode||G(r,s);return d.appContext=l,h===!0?h="svg":h===!1&&(h=void 0),e(d,c,h),i=!0,u._container=c,c.__vue_app__=u,wr(d.component)}},onUnmount(c){a.push(c)},unmount(){i&&(it(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,f){return l.provides[c]=f,u},runWithContext(c){const f=sn;sn=u;try{return c()}finally{sn=f}}};return u}}let sn=null;const Ba=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${We(t)}Modifiers`]||e[`${Ft(t)}Modifiers`];function Na(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||be;let s=n;const l=t.startsWith("update:"),o=l&&Ba(r,t.slice(7));o&&(o.trim&&(s=n.map(c=>xe(c)?c.trim():c)),o.number&&(s=s.map(pr)));let a,i=r[a=kr(t)]||r[a=kr(We(t))];!i&&l&&(i=r[a=kr(Ft(t))]),i&&it(i,e,6,s);const u=r[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,it(u,e,6,s)}}const Oa=new WeakMap;function Mo(e,t,n=!1){const r=n?Oa:t.emitsCache,s=r.get(e);if(s!==void 0)return s;const l=e.emits;let o={},a=!1;if(!ee(e)){const i=u=>{const c=Mo(u,t,!0);c&&(a=!0,He(o,c))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return!l&&!a?(ve(e)&&r.set(e,null),null):(K(l)?l.forEach(i=>o[i]=null):He(o,l),ve(e)&&r.set(e,o),o)}function Pr(e,t){return!e||!cr(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),pe(e,t[0].toLowerCase()+t.slice(1))||pe(e,Ft(t))||pe(e,t))}function Xs(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[l],slots:o,attrs:a,emit:i,render:u,renderCache:c,props:f,data:h,setupState:d,ctx:y,inheritAttrs:C}=e,P=tr(e);let x,_;try{if(n.shapeFlag&4){const A=s||r,R=A;x=ht(u.call(R,A,c,f,d,h,y)),_=a}else{const A=t;x=ht(A.length>1?A(f,{attrs:a,slots:o,emit:i}):A(f,null)),_=t.props?a:Ia(a)}}catch(A){Yt.length=0,Dn(A,e,1),x=G(Mt)}let B=x;if(_&&C!==!1){const A=Object.keys(_),{shapeFlag:R}=B;A.length&&R&7&&(l&&A.some(fr)&&(_=Ha(_,l)),B=on(B,_,!1,!0))}if(n.dirs&&(B=on(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition){const A=yr(B.type)&&Ao(B)||B;Ss(A,n.transition)}return x=B,tr(P),x}const Ia=e=>{let t;for(const n in e)(n==="class"||n==="style"||cr(n))&&((t||(t={}))[n]=e[n]);return t},Ha=(e,t)=>{const n={};for(const r in e)(!fr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Da(e,t,n){const{props:r,children:s,component:l}=e,{props:o,children:a,patchFlag:i}=t,u=l.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&i>=0){if(i&1024)return!0;if(i&16)return r?Zs(r,o,u):!!o;if(i&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(To(o,r,h)&&!Pr(u,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Zs(r,o,u):!0:!!o;return!1}function Zs(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const l=r[s];if(To(t,e,l)&&!Pr(n,l))return!0}return!1}function To(e,t,n){const r=e[n],s=t[n];return n==="style"&&ve(r)&&ve(s)?!kt(r,s):r!==s}function La({vnode:e,parent:t,suspense:n},r){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=r,e=s),s===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}const Bo={},No=()=>Object.create(Bo),Oo=e=>Object.getPrototypeOf(e)===Bo;function $a(e,t,n,r=!1){const s={},l=No();e.propsDefaults=Object.create(null),Io(e,t,s,l);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:fo(s):e.type.props?e.props=s:e.props=l,e.attrs=l}function Fa(e,t,n,r){const{props:s,attrs:l,vnode:{patchFlag:o}}=e,a=he(s),[i]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(Pr(e.emitsOptions,h))continue;const d=t[h];if(i)if(pe(l,h))d!==l[h]&&(l[h]=d,u=!0);else{const y=We(h);s[y]=ns(i,a,y,d,e,!1)}else d!==l[h]&&(l[h]=d,u=!0)}}}else{Io(e,t,s,l)&&(u=!0);let c;for(const f in a)(!t||!pe(t,f)&&((c=Ft(f))===f||!pe(t,c)))&&(i?n&&(n[f]!==void 0||n[c]!==void 0)&&(s[f]=ns(i,a,f,void 0,e,!0)):delete s[f]);if(l!==a)for(const f in l)(!t||!pe(t,f))&&(delete l[f],u=!0)}u&&wt(e.attrs,"set","")}function Io(e,t,n,r){const[s,l]=e.propsOptions;let o=!1,a;if(t)for(let i in t){if(bn(i))continue;const u=t[i];let c;s&&pe(s,c=We(i))?!l||!l.includes(c)?n[c]=u:(a||(a={}))[c]=u:Pr(e.emitsOptions,i)||(!(i in r)||u!==r[i])&&(r[i]=u,o=!0)}if(l){const i=he(n),u=a||be;for(let c=0;c<l.length;c++){const f=l[c];n[f]=ns(s,i,f,u[f],e,!pe(u,f))}}return o}function ns(e,t,n,r,s,l){const o=e[n];if(o!=null){const a=pe(o,"default");if(a&&r===void 0){const i=o.default;if(o.type!==Function&&!o.skipFactory&&ee(i)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const c=$n(s);r=u[n]=i.call(null,t),c()}}else r=i;s.ce&&s.ce._setProp(n,r)}o[0]&&(l&&!a?r=!1:o[1]&&(r===""||r===Ft(n))&&(r=!0))}return r}const Ga=new WeakMap;function Ho(e,t,n=!1){const r=n?Ga:t.propsCache,s=r.get(e);if(s)return s;const l=e.props,o={},a=[];let i=!1;if(!ee(e)){const c=f=>{i=!0;const[h,d]=Ho(f,t,!0);He(o,h),d&&a.push(...d)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!l&&!i)return ve(e)&&r.set(e,nn),nn;if(K(l))for(let c=0;c<l.length;c++){const f=We(l[c]);el(f)&&(o[f]=be)}else if(l)for(const c in l){const f=We(c);if(el(f)){const h=l[c],d=o[f]=K(h)||ee(h)?{type:h}:He({},h),y=d.type;let C=!1,P=!0;if(K(y))for(let x=0;x<y.length;++x){const _=y[x],B=ee(_)&&_.name;if(B==="Boolean"){C=!0;break}else B==="String"&&(P=!1)}else C=ee(y)&&y.name==="Boolean";d[0]=C,d[1]=P,(C||pe(d,"default"))&&a.push(f)}}const u=[o,a];return ve(e)&&r.set(e,u),u}function el(e){return e[0]!=="$"&&!bn(e)}const Rs=e=>e==="_"||e==="_ctx"||e==="$stable",Ms=e=>K(e)?e.map(ht):[ht(e)],ja=(e,t,n)=>{if(t._n)return t;const r=vr((...s)=>Ms(t(...s)),n);return r._c=!1,r},Do=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Rs(s))continue;const l=e[s];if(ee(l))t[s]=ja(s,l,r);else if(l!=null){const o=Ms(l);t[s]=()=>o}}},Lo=(e,t)=>{const n=Ms(t);e.slots.default=()=>n},$o=(e,t,n)=>{for(const r in t)(n||!Rs(r))&&(e[r]=t[r])},Va=(e,t,n)=>{const r=e.slots=No();if(e.vnode.shapeFlag&32){const s=t._;s?($o(r,t,n),n&&ql(r,"_",s,!0)):Do(t,r)}else t&&Lo(e,t)},za=(e,t,n)=>{const{vnode:r,slots:s}=e;let l=!0,o=be;if(r.shapeFlag&32){const a=t._;a?n&&a===1?l=!1:$o(s,t,n):(l=!t.$stable,Do(t,s)),o=t}else t&&(Lo(e,t),o={default:1});if(l)for(const a in s)!Rs(a)&&o[a]==null&&delete s[a]},Je=Ja;function Ua(e){return Wa(e)}function Wa(e,t){const n=mr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:l,createElement:o,createText:a,createComment:i,setText:u,setElementText:c,parentNode:f,nextSibling:h,setScopeId:d=gt,insertStaticContent:y}=e,C=(m,v,b,S=null,E=null,w=null,I=void 0,O=null,N=!!v.dynamicChildren)=>{if(m===v)return;m&&!hn(m,v)&&(S=k(m),Te(m,E,w,!0),m=null),v.patchFlag===-2&&(N=!1,v.dynamicChildren=null);const{type:M,ref:W,shapeFlag:L}=v;switch(M){case Ar:P(m,v,b,S);break;case Mt:x(m,v,b,S);break;case Qn:m==null&&_(v,b,S,I);break;case Ne:De(m,v,b,S,E,w,I,O,N);break;default:L&1?R(m,v,b,S,E,w,I,O,N):L&6?Fe(m,v,b,S,E,w,I,O,N):(L&64||L&128)&&M.process(m,v,b,S,E,w,I,O,N,V)}W!=null&&E?An(W,m&&m.ref,w,v||m,!v):W==null&&m&&m.ref!=null&&An(m.ref,null,w,m,!0)},P=(m,v,b,S)=>{if(m==null)r(v.el=a(v.children),b,S);else{const E=v.el=m.el;v.children!==m.children&&u(E,v.children)}},x=(m,v,b,S)=>{m==null?r(v.el=i(v.children||""),b,S):v.el=m.el},_=(m,v,b,S)=>{[m.el,m.anchor]=y(m.children,v,b,S,m.el,m.anchor)},B=({el:m,anchor:v},b,S)=>{let E;for(;m&&m!==v;)E=h(m),r(m,b,S),m=E;r(v,b,S)},A=({el:m,anchor:v})=>{let b;for(;m&&m!==v;)b=h(m),s(m),m=b;s(v)},R=(m,v,b,S,E,w,I,O,N)=>{if(v.type==="svg"?I="svg":v.type==="math"&&(I="mathml"),m==null)q(v,b,S,E,w,I,O,N);else{const M=m.el&&m.el._isVueCE?m.el:null;try{M&&M._beginPatch(),Pe(m,v,E,w,I,O,N)}finally{M&&M._endPatch()}}},q=(m,v,b,S,E,w,I,O)=>{let N,M;const{props:W,shapeFlag:L,transition:z,dirs:Y}=m;if(N=m.el=o(m.type,w,W&&W.is,W),L&8?c(N,m.children):L&16&&ie(m.children,N,null,S,E,Nr(m,w),I,O),Y&&Gt(m,null,S,"created"),Q(N,m,m.scopeId,I,S),W){for(const ge in W)ge!=="value"&&!bn(ge)&&l(N,ge,null,W[ge],w,S);"value"in W&&l(N,"value",null,W.value,w),(M=W.onVnodeBeforeMount)&&ct(M,S,m)}Y&&Gt(m,null,S,"beforeMount");const le=qa(E,z);le&&z.beforeEnter(N),r(N,v,b),((M=W&&W.onVnodeMounted)||le||Y)&&Je(()=>{try{M&&ct(M,S,m),le&&z.enter(N),Y&&Gt(m,null,S,"mounted")}finally{}},E)},Q=(m,v,b,S,E)=>{if(b&&d(m,b),S)for(let w=0;w<S.length;w++)d(m,S[w]);if(E){let w=E.subTree;if(v===w||Vo(w.type)&&(w.ssContent===v||w.ssFallback===v)){const I=E.vnode;Q(m,I,I.scopeId,I.slotScopeIds,E.parent)}}},ie=(m,v,b,S,E,w,I,O,N=0)=>{for(let M=N;M<m.length;M++){const W=m[M]=O?At(m[M]):ht(m[M]);C(null,W,v,b,S,E,w,I,O)}},Pe=(m,v,b,S,E,w,I)=>{const O=v.el=m.el;let{patchFlag:N,dynamicChildren:M,dirs:W}=v;N|=m.patchFlag&16;const L=m.props||be,z=v.props||be;let Y;if(b&&jt(b,!1),(Y=z.onVnodeBeforeUpdate)&&ct(Y,b,v,m),W&&Gt(v,m,b,"beforeUpdate"),b&&jt(b,!0),M&&(!m.dynamicChildren||m.dynamicChildren.length!==M.length)&&(N=0,I=!1,M=null),(L.innerHTML&&z.innerHTML==null||L.textContent&&z.textContent==null)&&c(O,""),M?me(m.dynamicChildren,M,O,b,S,Nr(v,E),w):I||oe(m,v,O,null,b,S,Nr(v,E),w,!1),N>0){if(N&16)Re(O,L,z,b,E);else if(N&2&&L.class!==z.class&&l(O,"class",null,z.class,E),N&4&&l(O,"style",L.style,z.style,E),N&8){const le=v.dynamicProps;for(let ge=0;ge<le.length;ge++){const ce=le[ge],ke=L[ce],Ee=z[ce];(Ee!==ke||ce==="value")&&l(O,ce,ke,Ee,E,b)}}N&1&&m.children!==v.children&&c(O,v.children)}else!I&&M==null&&Re(O,L,z,b,E);((Y=z.onVnodeUpdated)||W)&&Je(()=>{Y&&ct(Y,b,v,m),W&&Gt(v,m,b,"updated")},S)},me=(m,v,b,S,E,w,I)=>{for(let O=0;O<v.length;O++){const N=m[O],M=v[O],W=N.el&&(N.type===Ne||!hn(N,M)||N.shapeFlag&198)?f(N.el):b;C(N,M,W,null,S,E,w,I,!0)}},Re=(m,v,b,S,E)=>{if(v!==b){if(v!==be)for(const w in v)!bn(w)&&!(w in b)&&l(m,w,v[w],null,E,S);for(const w in b){if(bn(w))continue;const I=b[w],O=v[w];I!==O&&w!=="value"&&l(m,w,O,I,E,S)}"value"in b&&l(m,"value",v.value,b.value,E)}},De=(m,v,b,S,E,w,I,O,N)=>{const M=v.el=m?m.el:a(""),W=v.anchor=m?m.anchor:a("");let{patchFlag:L,dynamicChildren:z,slotScopeIds:Y}=v;Y&&(O=O?O.concat(Y):Y),m==null?(r(M,b,S),r(W,b,S),ie(v.children||[],b,W,E,w,I,O,N)):L>0&&L&64&&z&&m.dynamicChildren&&m.dynamicChildren.length===z.length?(me(m.dynamicChildren,z,b,E,w,I,O),(v.key!=null||E&&v===E.subTree)&&Fo(m,v,!0)):oe(m,v,b,W,E,w,I,O,N)},Fe=(m,v,b,S,E,w,I,O,N)=>{v.slotScopeIds=O,m==null?v.shapeFlag&512?E.ctx.activate(v,b,S,I,N):Ae(v,b,S,E,w,I,N):qe(m,v,N)},Ae=(m,v,b,S,E,w,I)=>{const O=m.component=nu(m,S,E);if(br(m)&&(O.ctx.renderer=V),su(O,!1,I),O.asyncDep){if(E&&E.registerDep(O,we,I),!m.el){const N=O.subTree=G(Mt);x(null,N,v,b),m.placeholder=N.el}}else we(O,m,v,b,E,w,I)},qe=(m,v,b)=>{const S=v.component=m.component;if(Da(m,v,b))if(S.asyncDep&&!S.asyncResolved){ue(S,v,b);return}else S.next=v,S.update();else v.el=m.el,S.vnode=v},we=(m,v,b,S,E,w,I)=>{const O=()=>{if(m.isMounted){let{next:L,bu:z,u:Y,parent:le,vnode:ge}=m;{const Ye=Go(m);if(Ye){L&&(L.el=ge.el,ue(m,L,I)),Ye.asyncDep.then(()=>{Je(()=>{m.isUnmounted||M()},E)});return}}let ce=L,ke;jt(m,!1),L?(L.el=ge.el,ue(m,L,I)):L=ge,z&&Jn(z),(ke=L.props&&L.props.onVnodeBeforeUpdate)&&ct(ke,le,L,ge),jt(m,!0);const Ee=Xs(m),je=m.subTree;m.subTree=Ee,C(je,Ee,f(je.el),k(je),m,E,w),L.el=Ee.el,ce===null&&La(m,Ee.el),Y&&Je(Y,E),(ke=L.props&&L.props.onVnodeUpdated)&&Je(()=>ct(ke,le,L,ge),E)}else{let L;const{el:z,props:Y}=v,{bm:le,m:ge,parent:ce,root:ke,type:Ee}=m,je=wn(v);jt(m,!1),le&&Jn(le),!je&&(L=Y&&Y.onVnodeBeforeMount)&&ct(L,ce,v),jt(m,!0);{ke.ce&&ke.ce._hasShadowRoot()&&ke.ce._injectChildStyle(Ee,m.parent?m.parent.type:void 0);const Ye=m.subTree=Xs(m);C(null,Ye,b,S,m,E,w),v.el=Ye.el}if(ge&&Je(ge,E),!je&&(L=Y&&Y.onVnodeMounted)){const Ye=v;Je(()=>ct(L,ce,Ye),E)}(v.shapeFlag&256||ce&&wn(ce.vnode)&&ce.vnode.shapeFlag&256)&&m.a&&Je(m.a,E),m.isMounted=!0,v=b=S=null}};m.scope.on();const N=m.effect=new Ql(O);m.scope.off();const M=m.update=N.run.bind(N),W=m.job=N.runIfDirty.bind(N);W.i=m,W.id=m.uid,N.scheduler=()=>ws(W),jt(m,!0),M()},ue=(m,v,b)=>{v.component=m;const S=m.vnode.props;m.vnode=v,m.next=null,Fa(m,v.props,S,b),za(m,v.children,b),_t(),Vs(m),Et()},oe=(m,v,b,S,E,w,I,O,N=!1)=>{const M=m&&m.children,W=m?m.shapeFlag:0,L=v.children,{patchFlag:z,shapeFlag:Y}=v;if(z>0){if(z&128){rt(M,L,b,S,E,w,I,O,N);return}else if(z&256){et(M,L,b,S,E,w,I,O,N);return}}Y&8?(W&16&&Ge(M,E,w),L!==M&&c(b,L)):W&16?Y&16?rt(M,L,b,S,E,w,I,O,N):Ge(M,E,w,!0):(W&8&&c(b,""),Y&16&&ie(L,b,S,E,w,I,O,N))},et=(m,v,b,S,E,w,I,O,N)=>{m=m||nn,v=v||nn;const M=m.length,W=v.length,L=Math.min(M,W);let z;for(z=0;z<L;z++){const Y=v[z]=N?At(v[z]):ht(v[z]);C(m[z],Y,b,null,E,w,I,O,N)}M>W?Ge(m,E,w,!0,!1,L):ie(v,b,S,E,w,I,O,N,L)},rt=(m,v,b,S,E,w,I,O,N)=>{let M=0;const W=v.length;let L=m.length-1,z=W-1;for(;M<=L&&M<=z;){const Y=m[M],le=v[M]=N?At(v[M]):ht(v[M]);if(hn(Y,le))C(Y,le,b,null,E,w,I,O,N);else break;M++}for(;M<=L&&M<=z;){const Y=m[L],le=v[z]=N?At(v[z]):ht(v[z]);if(hn(Y,le))C(Y,le,b,null,E,w,I,O,N);else break;L--,z--}if(M>L){if(M<=z){const Y=z+1,le=Y<W?v[Y].el:S;for(;M<=z;)C(null,v[M]=N?At(v[M]):ht(v[M]),b,le,E,w,I,O,N),M++}}else if(M>z)for(;M<=L;)Te(m[M],E,w,!0),M++;else{const Y=M,le=M,ge=new Map;for(M=le;M<=z;M++){const re=v[M]=N?At(v[M]):ht(v[M]);re.key!=null&&ge.set(re.key,M)}let ce,ke=0;const Ee=z-le+1;let je=!1,Ye=0;const D=new Array(Ee);for(M=0;M<Ee;M++)D[M]=0;for(M=Y;M<=L;M++){const re=m[M];if(ke>=Ee){Te(re,E,w,!0);continue}let ae;if(re.key!=null)ae=ge.get(re.key);else for(ce=le;ce<=z;ce++)if(D[ce-le]===0&&hn(re,v[ce])){ae=ce;break}ae===void 0?Te(re,E,w,!0):(D[ae-le]=M+1,ae>=Ye?Ye=ae:je=!0,C(re,v[ae],b,null,E,w,I,O,N),ke++)}const g=je?Ka(D):nn;for(ce=g.length-1,M=Ee-1;M>=0;M--){const re=le+M,ae=v[re],T=v[re+1],te=re+1<W?T.el||jo(T):S;D[M]===0?C(null,ae,b,te,E,w,I,O,N):je&&(ce<0||M!==g[ce]?Ke(ae,b,te,2):ce--)}}},Ke=(m,v,b,S,E=null)=>{const{el:w,type:I,transition:O,children:N,shapeFlag:M}=m;if(M&6){Ke(m.component.subTree,v,b,S);return}if(M&128){m.suspense.move(v,b,S);return}if(M&64){I.move(m,v,b,V);return}if(I===Ne){r(w,v,b);for(let L=0;L<N.length;L++)Ke(N[L],v,b,S);r(m.anchor,v,b);return}if(I===Qn){B(m,v,b);return}if(S!==2&&M&1&&O)if(S===0)O.persisted&&!w[Tr]?r(w,v,b):(O.beforeEnter(w),r(w,v,b),Je(()=>O.enter(w),E));else{const{leave:L,delayLeave:z,afterLeave:Y}=O,le=()=>{m.ctx.isUnmounted?s(w):r(w,v,b)},ge=()=>{const ce=w._isLeaving||!!w[Tr];w._isLeaving&&w[Tr](!0),O.persisted&&!ce?le():L(w,()=>{le(),Y&&Y()})};z?z(w,le,ge):ge()}else r(w,v,b)},Te=(m,v,b,S=!1,E=!1)=>{const{type:w,props:I,ref:O,children:N,dynamicChildren:M,shapeFlag:W,patchFlag:L,dirs:z,cacheIndex:Y,memo:le}=m;if(L===-2&&(E=!1),O!=null&&(_t(),An(O,null,b,m,!0),Et()),Y!=null&&(v.renderCache[Y]=void 0),W&256){v.ctx.deactivate(m);return}const ge=W&1&&z,ce=!wn(m);let ke;if(ce&&(ke=I&&I.onVnodeBeforeUnmount)&&ct(ke,v,m),W&6)ut(m.component,b,S);else{if(W&128){m.suspense.unmount(b,S);return}ge&&Gt(m,null,v,"beforeUnmount"),W&64?m.type.remove(m,v,b,V,S):M&&!M.hasOnce&&(w!==Ne||L>0&&L&64)?Ge(M,v,b,!1,!0):(w===Ne&&L&384||!E&&W&16)&&Ge(N,v,b),S&&yt(m)}const Ee=le!=null&&Y==null;(ce&&(ke=I&&I.onVnodeUnmounted)||ge||Ee)&&Je(()=>{ke&&ct(ke,v,m),ge&&Gt(m,null,v,"unmounted"),Ee&&(m.el=null)},b)},yt=m=>{const{type:v,el:b,anchor:S,transition:E}=m;if(v===Ne){Bt(b,S);return}if(v===Qn){A(m);return}const w=()=>{s(b),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(m.shapeFlag&1&&E&&!E.persisted){const{leave:I,delayLeave:O}=E,N=()=>I(b,w);O?O(m.el,w,N):N()}else w()},Bt=(m,v)=>{let b;for(;m!==v;)b=h(m),s(m),m=b;s(v)},ut=(m,v,b)=>{const{bum:S,scope:E,job:w,subTree:I,um:O,m:N,a:M}=m;tl(N),tl(M),S&&Jn(S),E.stop(),w&&(w.flags|=8,Te(I,m,v,b)),O&&Je(O,v),Je(()=>{m.isUnmounted=!0},v)},Ge=(m,v,b,S=!1,E=!1,w=0)=>{for(let I=w;I<m.length;I++)Te(m[I],v,b,S,E)},k=m=>{if(m.shapeFlag&6)return k(m.component.subTree);if(m.shapeFlag&128)return m.suspense.next();const v=h(m.anchor||m.el),b=v&&v[ca];return b?h(b):v};let $=!1;const H=(m,v,b)=>{let S;m==null?v._vnode&&(Te(v._vnode,null,null,!0),S=v._vnode.component):C(v._vnode||null,m,v,null,null,null,b),v._vnode=m,$||($=!0,Vs(S),vo(),$=!1)},V={p:C,um:Te,m:Ke,r:yt,mt:Ae,mc:ie,pc:oe,pbc:me,n:k,o:e};return{render:H,hydrate:void 0,createApp:Ta(H)}}function Nr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function jt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function qa(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Fo(e,t,n=!1){const r=e.children,s=t.children;if(K(r)&&K(s))for(let l=0;l<r.length;l++){const o=r[l];let a=s[l];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[l]=At(s[l]),a.el=o.el),!n&&a.patchFlag!==-2&&Fo(o,a)),a.type===Ar&&(a.patchFlag===-1&&(a=s[l]=At(a)),a.el=o.el),a.type===Mt&&!a.el&&(a.el=o.el)}}function Ka(e){const t=e.slice(),n=[0];let r,s,l,o,a;const i=e.length;for(r=0;r<i;r++){const u=e[r];if(u!==0){if(s=n[n.length-1],e[s]<u){t[r]=s,n.push(r);continue}for(l=0,o=n.length-1;l<o;)a=l+o>>1,e[n[a]]<u?l=a+1:o=a;u<e[n[l]]&&(l>0&&(t[r]=n[l-1]),n[l]=r)}}for(l=n.length,o=n[l-1];l-- >0;)n[l]=o,o=t[o];return n}function Go(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Go(t)}function tl(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function jo(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?jo(t.subTree):null}const Vo=e=>e.__isSuspense;function Ja(e,t){t&&t.pendingBranch?K(e)?t.effects.push(...e):t.effects.push(e):oa(e)}const Ne=Symbol.for("v-fgt"),Ar=Symbol.for("v-txt"),Mt=Symbol.for("v-cmt"),Qn=Symbol.for("v-stc"),Yt=[];let Xe=null;function J(e=!1){Yt.push(Xe=e?null:[])}function zo(){Yt.pop(),Xe=Yt[Yt.length-1]||null}let Mn=1;function lr(e,t=!1){Mn+=e,e<0&&Xe&&t&&(Xe.hasOnce=!0)}function Uo(e){return e.dynamicChildren=Mn>0?Xe||nn:null,zo(),Mn>0&&Xe&&Xe.push(e),e}function se(e,t,n,r,s,l){return Uo(p(e,t,n,r,s,l,!0))}function Ze(e,t,n,r,s){return Uo(G(e,t,n,r,s,!0))}function or(e){return e?e.__v_isVNode===!0:!1}function hn(e,t){return e.type===t.type&&e.key===t.key}const Wo=({key:e})=>e??null,Xn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?xe(e)||$e(e)||ee(e)?{i:Qe,r:e,k:t,f:!!n}:e:null);function p(e,t=null,n=null,r=0,s=null,l=e===Ne?0:1,o=!1,a=!1){const i={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Wo(t),ref:t&&Xn(t),scopeId:bo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Qe};return a?(ir(i,n),l&128&&e.normalize(i)):n&&(i.shapeFlag|=xe(n)?8:16),Mn>0&&!o&&Xe&&(i.patchFlag>0||l&6)&&i.patchFlag!==32&&Xe.push(i),i}const G=Ya;function Ya(e,t=null,n=null,r=0,s=null,l=!1){if((!e||e===xo)&&(e=Mt),or(e)){const a=on(e,t,!0);return n&&ir(a,n),Mn>0&&!l&&Xe&&(a.shapeFlag&6?Xe[Xe.indexOf(e)]=a:Xe.push(a)),a.patchFlag=-2,a}if(uu(e)&&(e=e.__vccOpts),t){t=Qa(t);let{class:a,style:i}=t;a&&!xe(a)&&(t.class=fe(a)),ve(i)&&(As(i)&&!K(i)&&(i=He({},i)),t.style=Ht(i))}const o=xe(e)?1:Vo(e)?128:yr(e)?64:ve(e)?4:ee(e)?2:0;return p(e,t,n,r,s,o,l,!0)}function Qa(e){return e?As(e)||Oo(e)?He({},e):e:null}function on(e,t,n=!1,r=!1){const{props:s,ref:l,patchFlag:o,children:a,transition:i}=e,u=t?Za(s||{},t):s,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Wo(u),ref:t&&t.ref?n&&l?K(l)?l.concat(Xn(t)):[l,Xn(t)]:Xn(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ne?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:i,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&on(e.ssContent),ssFallback:e.ssFallback&&on(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return i&&r&&Ss(c,i.clone(c)),c}function j(e=" ",t=0){return G(Ar,null,e,t)}function Xa(e,t){const n=G(Qn,null,e);return n.staticCount=t,n}function Ut(e="",t=!1){return t?(J(),Ze(Mt,null,e)):G(Mt,null,e)}function ht(e){return e==null||typeof e=="boolean"?G(Mt):K(e)?G(Ne,null,e.slice()):or(e)?At(e):G(Ar,null,String(e))}function At(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:on(e)}function ir(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(K(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),ir(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Oo(t)?t._ctx=Qe:s===3&&Qe&&(Qe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(ee(t)){if(r&65){ir(e,{default:t});return}t={default:t,_ctx:Qe},n=32}else t=String(t),r&64?(n=16,t=[j(t)]):n=8;e.children=t,e.shapeFlag|=n}function Za(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=fe([t.class,r.class]));else if(s==="style")t.style=Ht([t.style,r.style]);else if(cr(s)){const l=t[s],o=r[s];o&&l!==o&&!(K(l)&&l.includes(o))?t[s]=l?[].concat(l,o):o:o==null&&l==null&&!fr(s)&&(t[s]=o)}else s!==""&&(t[s]=r[s])}return t}function ct(e,t,n,r=null){it(e,t,7,[n,r])}const eu=Ro();let tu=0;function nu(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||eu,l={uid:tu++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Bi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ho(r,s),emitsOptions:Mo(r,s),emit:null,emitted:null,propsDefaults:be,inheritAttrs:r.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=Na.bind(null,l),e.ce&&e.ce(l),l}let Ie=null;const ru=()=>Ie||Qe;let ar,Tn;{const e=mr(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),l=>{s.length>1?s.forEach(o=>o(l)):s[0](l)}};ar=t("__VUE_INSTANCE_SETTERS__",n=>Ie=n),Tn=t("__VUE_SSR_SETTERS__",n=>an=n)}const $n=e=>{const t=Ie;return ar(e),e.scope.on(),()=>{e.scope.off(),ar(t)}},nl=()=>{Ie&&Ie.scope.off(),ar(null)};function qo(e){return e.vnode.shapeFlag&4}let an=!1;function su(e,t=!1,n=!1){t&&Tn(t);const{props:r,children:s}=e.vnode,l=qo(e);$a(e,r,l,t),Va(e,s,n||t);const o=l?lu(e,t):void 0;return t&&Tn(!1),o}function lu(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Sa);const{setup:r}=n;if(r){_t();const s=e.setupContext=r.length>1?iu(e):null,l=$n(e),o=Hn(r,e,0,[e.props,s]),a=zl(o);if(Et(),l(),(a||e.sp)&&!wn(e)&&ks(e),a){if(o.then(nl,nl),t)return o.then(i=>{Tn(!0);try{rl(e,i,t)}finally{Tn(!1)}}).catch(i=>{Dn(i,e,0)});e.asyncDep=o}else rl(e,o)}else Ko(e)}function rl(e,t,n){ee(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ve(t)&&(e.setupState=po(t)),Ko(e)}function Ko(e,t,n){const r=e.type;e.render||(e.render=r.render||gt);{const s=$n(e);_t();try{xa(e)}finally{Et(),s()}}}const ou={get(e,t){return Le(e,"get",""),e[t]}};function iu(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,ou),slots:e.slots,emit:e.emit,expose:t}}function wr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(po(Qi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Sn)return Sn[n](e)},has(t,n){return n in t||n in Sn}})):e.proxy}function au(e,t=!0){return ee(e)?e.displayName||e.name:e.name||t&&e.__name}function uu(e){return ee(e)&&"__vccOpts"in e}const ye=(e,t)=>ta(e,t,an);function Bn(e,t,n){try{lr(-1);const r=arguments.length;return r===2?ve(t)&&!K(t)?or(t)?G(e,null,[t]):G(e,t):G(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&or(n)&&(n=[n]),G(e,t,n))}finally{lr(1)}}const cu="3.5.42";/**
* @vue/runtime-dom v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rs;const sl=typeof window<"u"&&window.trustedTypes;if(sl)try{rs=sl.createPolicy("vue",{createHTML:e=>e})}catch{}const Jo=rs?e=>rs.createHTML(e):e=>e,fu="http://www.w3.org/2000/svg",du="http://www.w3.org/1998/Math/MathML",Pt=typeof document<"u"?document:null,ll=Pt&&Pt.createElement("template"),hu={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?Pt.createElementNS(fu,e):t==="mathml"?Pt.createElementNS(du,e):n?Pt.createElement(e,{is:n}):Pt.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Pt.createTextNode(e),createComment:e=>Pt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Pt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,l){const o=n?n.previousSibling:t.lastChild;if(s&&(s===l||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===l||!(s=s.nextSibling)););else{ll.innerHTML=Jo(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=ll.content;if(r==="svg"||r==="mathml"){const i=a.firstChild;for(;i.firstChild;)a.appendChild(i.firstChild);a.removeChild(i)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},pu=Symbol("_vtc");function mu(e,t,n){const r=e[pu];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ol=Symbol("_vod"),gu=Symbol("_vsh"),vu=Symbol(""),yu=/(?:^|;)\s*display\s*:/;function bu(e,t,n){const r=e.style,s=xe(n);let l=!1;if(n&&!s){if(t)if(xe(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&yn(r,a,"")}else for(const o in t)n[o]==null&&yn(r,o,"");for(const o in n){o==="display"&&(l=!0);const a=n[o];a!=null?Pu(e,o,!xe(t)&&t?t[o]:void 0,a)||yn(r,o,a):yn(r,o,"")}}else if(s){if(t!==n){const o=r[vu];o&&(n+=";"+o),r.cssText=n,l=yu.test(n)}}else t&&e.removeAttribute("style");ol in e&&(e[ol]=l?r.display:"",e[gu]&&(r.display="none"))}const Wn=/\s*!important$/;function yn(e,t,n){if(K(n))n.forEach(r=>yn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))Wn.test(n)?e.setProperty(t,n.replace(Wn,""),"important"):e.setProperty(t,n);else{const r=Cu(e,t);Wn.test(n)?e.setProperty(Ft(r),n.replace(Wn,""),"important"):e[r]=n}}const il=["Webkit","Moz","ms"],Or={};function Cu(e,t){const n=Or[t];if(n)return n;let r=We(t);if(r!=="filter"&&r in e)return Or[t]=r;r=hr(r);for(let s=0;s<il.length;s++){const l=il[s]+r;if(l in e)return Or[t]=l}return t}function Pu(e,t,n,r){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&xe(r)&&n===r}const al="http://www.w3.org/1999/xlink";function ul(e,t,n,r,s,l=Mi(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(al,t.slice(6,t.length)):e.setAttributeNS(al,t,n):n==null||l&&!Kl(n)?e.removeAttribute(t):e.setAttribute(t,l?"":vt(n)?String(n):n)}function cl(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Jo(n):n);return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const a=l==="OPTION"?e.getAttribute("value")||"":e.value,i=n==null?e.type==="checkbox"?"on":"":String(n);(a!==i||!("_value"in e))&&(e.value=i),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Kl(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function Dt(e,t,n,r){e.addEventListener(t,n,r)}function Au(e,t,n,r){e.removeEventListener(t,n,r)}const fl=Symbol("_vei");function wu(e,t,n,r,s=null){const l=e[fl]||(e[fl]={}),o=l[t];if(r&&o)o.value=r;else{const[a,i]=ku(t);if(r){const u=l[t]=Ru(r,s);Dt(e,a,u,i)}else o&&(Au(e,a,o,i),l[t]=void 0)}}const Su=/(Once|Passive|Capture)$/,xu=/^on:?(?:Once|Passive|Capture)$/;function ku(e){let t,n;for(;(n=e.match(Su))&&!xu.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):Ft(e.slice(2)),t]}let Ir=0;const _u=Promise.resolve(),Eu=()=>Ir||(_u.then(()=>Ir=0),Ir=Date.now());function Ru(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(K(s)){const l=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{l.call(r),r._stopped=!0};const o=s.slice(),a=[r];for(let i=0;i<o.length&&!r._stopped;i++){const u=o[i];u&&it(u,t,5,a)}}else it(s,t,5,[r])};return n.value=e,n.attached=Eu(),n}const dl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Mu=(e,t,n,r,s,l)=>{const o=s==="svg";t==="class"?mu(e,r,o):t==="style"?bu(e,n,r):cr(t)?fr(t)||wu(e,t,n,r,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Tu(e,t,r,o))?(cl(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ul(e,t,r,o,l,t!=="value")):e._isVueCE&&(Bu(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!xe(r)))?cl(e,We(t),r,l,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ul(e,t,r,o))};function Tu(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&dl(t)&&ee(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return dl(t)&&xe(n)?!1:t in e}function Bu(e,t){const n=e._def.props;if(!n)return!1;const r=We(t);return Array.isArray(n)?n.some(s=>We(s)===r):Object.keys(n).some(s=>We(s)===r)}const un=e=>{const t=e.props["onUpdate:modelValue"]||!1;return K(t)?n=>Jn(t,n):t};function Nu(e){e.target.composing=!0}function hl(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const mt=Symbol("_assign"),qn=Symbol("_initialValue");function Hr(e,t,n){return t&&(e=e.trim()),n&&(e=pr(e)),e}const Be={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e.parentNode&&(e.type==="text"?e[qn]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[qn]=e.defaultValue.replace(/\r\n?/g,`
`))),e[mt]=un(s);const l=r||s.props&&s.props.type==="number";Dt(e,t?"change":"input",o=>{o.target.composing||e[mt](Hr(e.value,n,l))}),(n||l)&&Dt(e,"change",()=>{e.value=Hr(e.value,n,l)}),t||(Dt(e,"compositionstart",Nu),Dt(e,"compositionend",hl),Dt(e,"change",hl))},mounted(e,{value:t,modifiers:{trim:n,number:r}}){const s=t??"",l=e[qn];delete e[qn],l!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==l?e[mt](Hr(e.value,n,r)):e.value=s},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:l}},o){if(e[mt]=un(o),e.composing)return;const a=(l||e.type==="number")&&!/^0\d/.test(e.value)?pr(e.value):e.value,i=t??"";if(a===i)return;const u=e.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===e&&e.type!=="range"&&(r&&t===n||s&&e.value.trim()===i)||(e.value=i)}},Kn={deep:!0,created(e,t,n){e[mt]=un(n),Dt(e,"change",()=>{const r=e._modelValue,s=Nn(e),l=e.checked,o=e[mt];if(K(r)){const a=ms(r,s),i=a!==-1;if(l&&!i)o(r.concat(s));else if(!l&&i){const u=[...r];u.splice(a,1),o(u)}}else if(xt(r)){const a=new Set(r);l?a.add(s):a.delete(s),o(a)}else o(Yo(e,l))})},mounted:pl,beforeUpdate(e,t,n){e[mt]=un(n),pl(e,t,n)}};function pl(e,{value:t,oldValue:n},r){e._modelValue=t;let s;if(K(t))s=ms(t,r.props.value)>-1;else if(xt(t))s=t.has(r.props.value);else{if(t===n)return;s=kt(t,Yo(e,!0))}e.checked!==s&&(e.checked=s)}const ml={deep:!0,created(e,{value:t,modifiers:{number:n}},r){e._modelValue=t,Dt(e,"change",()=>{const s=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>n?pr(Nn(i)):Nn(i)),l=e.multiple,o=l?xt(e._modelValue)?new Set(s):s:s[0],a=e._pendingValue=[l,l?K(o)?s.slice():s:o];try{e[mt](o)}finally{tt(()=>{e._pendingValue===a&&(e._pendingValue=void 0)})}}),e[mt]=un(r)},mounted(e,{value:t}){gl(e,t)},beforeUpdate(e,{value:t},n){e._modelValue=t,e[mt]=un(n)},updated(e,{value:t}){const n=e._pendingValue;e._pendingValue=void 0,(!n||n[0]!==e.multiple||!Ou(t,n[1],n[0]))&&gl(e,t)}};function Ou(e,t,n){if(!n||K(e))return kt(e,t);if(xt(e)){if(e.size!==t.length)return!1;for(const r of t)if(!e.has(r))return!1;return!0}return!1}function gl(e,t){const n=e.multiple,r=K(t);if(!(n&&!r&&!xt(t))){for(let s=0,l=e.options.length;s<l;s++){const o=e.options[s],a=Nn(o);if(n)if(r){const i=typeof a;i==="string"||i==="number"?o.selected=t.some(u=>String(u)===String(a)):o.selected=ms(t,a)>-1}else o.selected=t.has(a);else if(kt(Nn(o),t)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Nn(e){return"_value"in e?e._value:e.value}function Yo(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Iu=["ctrl","shift","alt","meta"],Hu={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Iu.some(n=>e[`${n}Key`]&&!t.includes(n))},pn=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=((s,...l)=>{for(let o=0;o<t.length;o++){const a=Hu[t[o]];if(a&&a(s,t))return}return e(s,...l)}))},Du={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Lu=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=(s=>{if(!("key"in s))return;const l=Ft(s.key);if(t.some(o=>o===l||Du[o]===l))return e(s)}))},$u=He({patchProp:Mu},hu);let vl;function Fu(){return vl||(vl=Ua($u))}const Gu=((...e)=>{const t=Fu().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Vu(r);if(!s)return;const l=t._component;!ee(l)&&!l.render&&!l.template&&(l.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,ju(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function ju(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Vu(e){return xe(e)?document.querySelector(e):e}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const tn=typeof document<"u";function Qo(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function zu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Qo(e.default)}const de=Object.assign;function Dr(e,t){const n={};for(const r in t){const s=t[r];n[r]=at(s)?s.map(e):e(s)}return n}const xn=()=>{},at=Array.isArray;function yl(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const Xo=/#/g,Uu=/&/g,Wu=/\//g,qu=/=/g,Ku=/\?/g,Zo=/\+/g,Ju=/%5B/g,Yu=/%5D/g,ei=/%5E/g,Qu=/%60/g,ti=/%7B/g,Xu=/%7C/g,ni=/%7D/g,Zu=/%20/g;function Ts(e){return e==null?"":encodeURI(""+e).replace(Xu,"|").replace(Ju,"[").replace(Yu,"]")}function ec(e){return Ts(e).replace(ti,"{").replace(ni,"}").replace(ei,"^")}function ss(e){return Ts(e).replace(Zo,"%2B").replace(Zu,"+").replace(Xo,"%23").replace(Uu,"%26").replace(Qu,"`").replace(ti,"{").replace(ni,"}").replace(ei,"^")}function tc(e){return ss(e).replace(qu,"%3D")}function nc(e){return Ts(e).replace(Xo,"%23").replace(Ku,"%3F")}function rc(e){return nc(e).replace(Wu,"%2F")}function On(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const sc=/\/$/,lc=e=>e.replace(sc,"");function Lr(e,t,n="/"){let r,s={},l="",o="";const a=t.indexOf("#");let i=t.indexOf("?");return i=a>=0&&i>a?-1:i,i>=0&&(r=t.slice(0,i),l=t.slice(i,a>0?a:t.length),s=e(l.slice(1))),a>=0&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=uc(r??t,n),{fullPath:r+l+o,path:r,query:s,hash:On(o)}}function oc(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function bl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ic(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&cn(t.matched[r],n.matched[s])&&ri(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function cn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ri(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!ac(e[n],t[n]))return!1;return!0}function ac(e,t){return at(e)?Cl(e,t):at(t)?Cl(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function Cl(e,t){return at(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function uc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let l=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")l>1&&l--;else break;return n.slice(0,l).join("/")+"/"+r.slice(o).join("/")}const Nt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let ls=(function(e){return e.pop="pop",e.push="push",e})({}),$r=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function cc(e){if(!e)if(tn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),lc(e)}const fc=/^[^#]+#/;function dc(e,t){return e.replace(fc,"#")+t}function hc(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Sr=()=>({left:window.scrollX,top:window.scrollY});function pc(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=hc(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Pl(e,t){return(history.state?history.state.position-t:-1)+e}const os=new Map;function mc(e,t){os.set(e,t)}function gc(e){const t=os.get(e);return os.delete(e),t}function vc(e){return typeof e=="string"||e&&typeof e=="object"}function si(e){return typeof e=="string"||typeof e=="symbol"}let _e=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const li=Symbol("");_e.MATCHER_NOT_FOUND+"",_e.NAVIGATION_GUARD_REDIRECT+"",_e.NAVIGATION_ABORTED+"",_e.NAVIGATION_CANCELLED+"",_e.NAVIGATION_DUPLICATED+"";function fn(e,t){return de(new Error,{type:e,[li]:!0},t)}function Ct(e,t){return e instanceof Error&&li in e&&(t==null||!!(e.type&t))}const yc=["params","query","hash"];function bc(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of yc)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function Cc(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Zo," "),l=s.indexOf("="),o=On(l<0?s:s.slice(0,l)),a=l<0?null:On(s.slice(l+1));if(o in t){let i=t[o];at(i)||(i=t[o]=[i]),i.push(a)}else t[o]=a}return t}function Al(e){let t="";for(let n in e){const r=e[n];if(n=tc(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(at(r)?r.map(s=>s&&ss(s)):[r&&ss(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Pc(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=at(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Ac=Symbol(""),wl=Symbol(""),Bs=Symbol(""),Ns=Symbol(""),is=Symbol("");function mn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function It(e,t,n,r,s,l=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,i)=>{const u=h=>{h===!1?i(fn(_e.NAVIGATION_ABORTED,{from:n,to:t})):h instanceof Error?i(h):vc(h)?i(fn(_e.NAVIGATION_GUARD_REDIRECT,{from:t,to:h})):(o&&r.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),a())},c=l(()=>e.call(r&&r.instances[s],t,n,u));let f=Promise.resolve(c);e.length<3&&(f=f.then(u)),f.catch(h=>i(h))})}function Fr(e,t,n,r,s=l=>l()){const l=[];for(const o of e)for(const a in o.components){let i=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Qo(i)){const u=(i.__vccOpts||i)[t];u&&l.push(It(u,n,r,o,a,s))}else{let u=i();l.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=zu(c)?c.default:c;o.mods[a]=c,o.components[a]=f;const h=(f.__vccOpts||f)[t];return h&&It(h,n,r,o,a,s)()}))}}return l}function wc(e,t){const n=[],r=[],s=[],l=Math.max(t.matched.length,e.matched.length);for(let o=0;o<l;o++){const a=t.matched[o];a&&(e.matched.find(u=>cn(u,a))?r.push(a):n.push(a));const i=e.matched[o];i&&(t.matched.find(u=>cn(u,i))||s.push(i))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Sc=()=>location.protocol+"//"+location.host;function oi(e,t){const{pathname:n,search:r,hash:s}=t,l=e.indexOf("#");if(l>-1){let o=s.includes(e.slice(l))?e.slice(l).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),bl(a,"")}return bl(n,e)+r+s}function xc(e,t,n,r){let s=[],l=[],o=null;const a=({state:h})=>{const d=oi(e,location),y=n.value,C=t.value;let P=0;if(h){if(n.value=d,t.value=h,o&&o===y){o=null;return}P=C?h.position-C.position:0}else r(d);s.forEach(x=>{x(n.value,y,{delta:P,type:ls.pop,direction:P?P>0?$r.forward:$r.back:$r.unknown})})};function i(){o=n.value}function u(h){s.push(h);const d=()=>{const y=s.indexOf(h);y>-1&&s.splice(y,1)};return l.push(d),d}function c(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(de({},h.state,{scroll:Sr()}),"")}}function f(){for(const h of l)h();l=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:i,listen:u,destroy:f}}function Sl(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Sr():null}}function kc(e){const{history:t,location:n}=window,r={value:oi(e,n)},s={value:t.state};s.value||l(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(i,u,c){const f=e.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+i:Sc()+e+i;try{t[c?"replaceState":"pushState"](u,"",h),s.value=u}catch(d){console.error(d),n[c?"replace":"assign"](h)}}function o(i,u){l(i,de({},t.state,Sl(s.value.back,i,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=i}function a(i,u){const c=de({},s.value,t.state,{forward:i,scroll:Sr()});l(c.current,c,!0),l(i,de({},Sl(r.value,i,null),{position:c.position+1},u),!1),r.value=i}return{location:r,state:s,push:a,replace:o}}function _c(e){e=cc(e);const t=kc(e),n=xc(e,t.state,t.location,t.replace);function r(l,o=!0){o||n.pauseListeners(),history.go(l)}const s=de({location:"",base:e,go:r,createHref:dc.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}let Wt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Me=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Me||{});const Ec={type:Wt.Static,value:""},Rc=/[a-zA-Z0-9_]/;function Mc(e){if(!e)return[[]];if(e==="/")return[[Ec]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(d){throw new Error(`ERR (${n})/"${u}": ${d}`)}let n=Me.Static,r=n;const s=[];let l;function o(){l&&s.push(l),l=[]}let a=0,i,u="",c="";function f(){u&&(n===Me.Static?l.push({type:Wt.Static,value:u}):n===Me.Param||n===Me.ParamRegExp||n===Me.ParamRegExpEnd?(l.length>1&&(i==="*"||i==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:Wt.Param,value:u,regexp:c,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):t("Invalid state to consume buffer"),u="")}function h(){u+=i}for(;a<e.length;){if(i=e[a++],i==="\\"&&n!==Me.ParamRegExp){r=n,n=Me.EscapeNext;continue}switch(n){case Me.Static:i==="/"?(u&&f(),o()):i===":"?(f(),n=Me.Param):h();break;case Me.EscapeNext:h(),n=r;break;case Me.Param:i==="("?n=Me.ParamRegExp:Rc.test(i)?h():(f(),n=Me.Static,i!=="*"&&i!=="?"&&i!=="+"&&a--);break;case Me.ParamRegExp:i===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+i:n=Me.ParamRegExpEnd:c+=i;break;case Me.ParamRegExpEnd:f(),n=Me.Static,i!=="*"&&i!=="?"&&i!=="+"&&a--,c="";break;default:t("Unknown state");break}}return n===Me.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}const xl="[^/]+?",Tc={sensitive:!1,strict:!1,start:!0,end:!0};var ze=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(ze||{});const Bc=/[.+*?^${}()[\]/\\]/g;function Nc(e,t){const n=de({},Tc,t),r=[];let s=n.start?"^":"";const l=[];for(const u of e){const c=u.length?[]:[ze.Root];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const h=u[f];let d=ze.Segment+(n.sensitive?ze.BonusCaseSensitive:0);if(h.type===Wt.Static)f||(s+="/"),s+=h.value.replace(Bc,"\\$&"),d+=ze.Static;else if(h.type===Wt.Param){const{value:y,repeatable:C,optional:P,regexp:x}=h;l.push({name:y,repeatable:C,optional:P});const _=x||xl;if(_!==xl){d+=ze.BonusCustomRegExp;try{`${_}`}catch(A){throw new Error(`Invalid custom RegExp for param "${y}" (${_}): `+A.message)}}let B=C?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;f||(B=P&&u.length<2?`(?:/${B})`:"/"+B),P&&(B+="?"),s+=B,d+=ze.Dynamic,P&&(d+=ze.BonusOptional),C&&(d+=ze.BonusRepeatable),_===".*"&&(d+=ze.BonusWildcard)}c.push(d)}r.push(c)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=ze.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const c=u.match(o),f={};if(!c)return null;for(let h=1;h<c.length;h++){const d=c[h]||"",y=l[h-1];f[y.name]=d&&y.repeatable?d.split("/"):d}return f}function i(u){let c="",f=!1;for(const h of e){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const d of h)if(d.type===Wt.Static)c+=d.value;else if(d.type===Wt.Param){const{value:y,repeatable:C,optional:P}=d,x=y in u?u[y]:"";if(at(x)&&!C)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const _=at(x)?x.join("/"):x;if(!_)if(P)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${y}"`);c+=_}}return c||"/"}return{re:o,score:r,keys:l,parse:a,stringify:i}}function Oc(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===ze.Static+ze.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===ze.Static+ze.Segment?1:-1:0}function ii(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const l=Oc(r[n],s[n]);if(l)return l;n++}if(Math.abs(s.length-r.length)===1){if(kl(r))return 1;if(kl(s))return-1}return s.length-r.length}function kl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ic={strict:!1,end:!0,sensitive:!1};function Hc(e,t,n){const r=Nc(Mc(e.path),n),s=de(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Dc(e,t){const n=[],r=new Map;t=yl(Ic,t);function s(f){return r.get(f)}function l(f,h,d){const y=!d,C=El(f);C.aliasOf=d&&d.record;const P=yl(t,f),x=[C];if("alias"in f){const A=typeof f.alias=="string"?[f.alias]:f.alias;for(const R of A)x.push(El(de({},C,{components:d?d.record.components:C.components,path:R,aliasOf:d?d.record:C})))}let _,B;for(const A of x){const{path:R}=A;if(h&&R[0]!=="/"){const q=h.record.path,Q=q[q.length-1]==="/"?"":"/";A.path=h.record.path+(R&&Q+R)}if(_=Hc(A,h,P),d?d.alias.push(_):(B=B||_,B!==_&&B.alias.push(_),y&&f.name&&!Rl(_)&&o(f.name)),ai(_)&&i(_),C.children){const q=C.children;for(let Q=0;Q<q.length;Q++)l(q[Q],_,d&&d.children[Q])}d=d||_}return B?()=>{o(B)}:xn}function o(f){if(si(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function i(f){const h=Fc(f,n);n.splice(h,0,f),f.record.name&&!Rl(f)&&r.set(f.record.name,f)}function u(f,h){let d,y={},C,P;if("name"in f&&f.name){if(d=r.get(f.name),!d)throw fn(_e.MATCHER_NOT_FOUND,{location:f});P=d.record.name,y=de(_l(h.params,d.keys.filter(B=>!B.optional).concat(d.parent?d.parent.keys.filter(B=>B.optional):[]).map(B=>B.name)),f.params&&_l(f.params,d.keys.map(B=>B.name))),C=d.stringify(y)}else if(f.path!=null)C=f.path,d=n.find(B=>B.re.test(C)),d&&(y=d.parse(C),P=d.record.name);else{if(d=h.name?r.get(h.name):n.find(B=>B.re.test(h.path)),!d)throw fn(_e.MATCHER_NOT_FOUND,{location:f,currentLocation:h});P=d.record.name,y=de({},h.params,f.params),C=d.stringify(y)}const x=[];let _=d;for(;_;)x.unshift(_.record),_=_.parent;return{name:P,path:C,params:y,matched:x,meta:$c(x)}}e.forEach(f=>l(f));function c(){n.length=0,r.clear()}return{addRoute:l,resolve:u,removeRoute:o,clearRoutes:c,getRoutes:a,getRecordMatcher:s}}function _l(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function El(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Lc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Lc(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Rl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function $c(e){return e.reduce((t,n)=>de(t,n.meta),{})}function Fc(e,t){let n=0,r=t.length;for(;n!==r;){const l=n+r>>1;ii(e,t[l])<0?r=l:n=l+1}const s=Gc(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function Gc(e){let t=e;for(;t=t.parent;)if(ai(t)&&ii(e,t)===0)return t}function ai({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Ml(e){const t=lt(Bs),n=lt(Ns),r=ye(()=>{const i=F(e.to);return t.resolve(i)}),s=ye(()=>{const{matched:i}=r.value,{length:u}=i,c=i[u-1],f=n.matched;if(!c||!f.length)return-1;const h=f.findIndex(cn.bind(null,c));if(h>-1)return h;const d=Tl(i[u-2]);return u>1&&Tl(c)===d&&f[f.length-1].path!==d?f.findIndex(cn.bind(null,i[u-2])):h}),l=ye(()=>s.value>-1&&Wc(n.params,r.value.params)),o=ye(()=>s.value>-1&&s.value===n.matched.length-1&&ri(n.params,r.value.params));function a(i={}){if(Uc(i)){const u=t[F(e.replace)?"replace":"push"](F(e.to)).catch(xn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:ye(()=>r.value.href),isActive:l,isExactActive:o,navigate:a}}function jc(e){return e.length===1?e[0]:e}const Vc=xs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ml,setup(e,{slots:t}){const n=Lt(Ml(e)),{options:r}=lt(Bs),s=ye(()=>({[Bl(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Bl(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&jc(t.default(n));return e.custom?l:Bn("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},l)}}}),zc=Vc;function Uc(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Wc(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!at(s)||s.length!==r.length||r.some((l,o)=>l.valueOf()!==s[o].valueOf()))return!1}return!0}function Tl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Bl=(e,t,n)=>e??t??n,qc=xs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=lt(is),s=ye(()=>e.route||r.value),l=lt(wl,0),o=ye(()=>{let u=F(l);const{matched:c}=s.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),a=ye(()=>s.value.matched[o.value]);Yn(wl,ye(()=>o.value+1)),Yn(Ac,a),Yn(is,s);const i=ne();return Jt(()=>[i.value,a.value,e.name],([u,c,f],[h,d,y])=>{c&&(c.instances[f]=u,d&&d!==c&&u&&u===h&&(c.leaveGuards.size||(c.leaveGuards=d.leaveGuards),c.updateGuards.size||(c.updateGuards=d.updateGuards))),u&&c&&(!d||!cn(c,d)||!h)&&(c.enterCallbacks[f]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=s.value,c=e.name,f=a.value,h=f&&f.components[c];if(!h)return Nl(n.default,{Component:h,route:u});const d=f.props[c],y=d?d===!0?u.params:typeof d=="function"?d(u):d:null,P=Bn(h,de({},y,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(f.instances[c]=null)},ref:i}));return Nl(n.default,{Component:P,route:u})||P}}});function Nl(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Kc=qc;function Jc(e){const t=Dc(e.routes,e),n=e.parseQuery||Cc,r=e.stringifyQuery||Al,s=e.history,l=mn(),o=mn(),a=mn(),i=Qr(Nt);let u=Nt;tn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Dr.bind(null,k=>""+k),f=Dr.bind(null,rc),h=Dr.bind(null,On);function d(k,$){let H,V;return si(k)?(H=t.getRecordMatcher(k),V=$):V=k,t.addRoute(V,H)}function y(k){const $=t.getRecordMatcher(k);$&&t.removeRoute($)}function C(){return t.getRoutes().map(k=>k.record)}function P(k){return!!t.getRecordMatcher(k)}function x(k,$){if($=de({},$||i.value),typeof k=="string"){const b=Lr(n,k,$.path),S=t.resolve({path:b.path},$),E=s.createHref(b.fullPath);return de(b,S,{params:h(S.params),hash:On(b.hash),redirectedFrom:void 0,href:E})}let H;if(k.path!=null)H=de({},k,{path:Lr(n,k.path,$.path).path});else{const b=de({},k.params);for(const S in b)b[S]==null&&delete b[S];H=de({},k,{params:f(b)}),$.params=f($.params)}const V=t.resolve(H,$),Z=k.hash||"";V.params=c(h(V.params));const m=oc(r,de({},k,{hash:ec(Z),path:V.path})),v=s.createHref(m);return de({fullPath:m,hash:Z,query:r===Al?Pc(k.query):k.query||{}},V,{redirectedFrom:void 0,href:v})}function _(k){return typeof k=="string"?Lr(n,k,i.value.path):de({},k)}function B(k,$){if(u!==k)return fn(_e.NAVIGATION_CANCELLED,{from:$,to:k})}function A(k){return Q(k)}function R(k){return A(de(_(k),{replace:!0}))}function q(k,$){const H=k.matched[k.matched.length-1];if(H&&H.redirect){const{redirect:V}=H;let Z=typeof V=="function"?V(k,$):V;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=_(Z):{path:Z},Z.params={}),de({query:k.query,hash:k.hash,params:Z.path!=null?{}:k.params},Z)}}function Q(k,$){const H=u=x(k),V=i.value,Z=k.state,m=k.force,v=k.replace===!0,b=q(H,V);if(b)return Q(de(_(b),{state:typeof b=="object"?de({},Z,b.state):Z,force:m,replace:v}),$||H);const S=H;S.redirectedFrom=$;let E;return!m&&ic(r,V,H)&&(E=fn(_e.NAVIGATION_DUPLICATED,{to:S,from:V}),Ke(V,V,!0,!1)),(E?Promise.resolve(E):me(S,V)).catch(w=>Ct(w)?Ct(w,_e.NAVIGATION_GUARD_REDIRECT)?w:rt(w):oe(w,S,V)).then(w=>{if(w){if(Ct(w,_e.NAVIGATION_GUARD_REDIRECT))return Q(de({replace:v},_(w.to),{state:typeof w.to=="object"?de({},Z,w.to.state):Z,force:m}),$||S)}else w=De(S,V,!0,v,Z);return Re(S,V,w),w})}function ie(k,$){const H=B(k,$);return H?Promise.reject(H):Promise.resolve()}function Pe(k){const $=Bt.values().next().value;return $&&typeof $.runWithContext=="function"?$.runWithContext(k):k()}function me(k,$){let H;const[V,Z,m]=wc(k,$);H=Fr(V.reverse(),"beforeRouteLeave",k,$);for(const b of V)b.leaveGuards.forEach(S=>{H.push(It(S,k,$))});const v=ie.bind(null,k,$);return H.push(v),Ge(H).then(()=>{H=[];for(const b of l.list())H.push(It(b,k,$));return H.push(v),Ge(H)}).then(()=>{H=Fr(Z,"beforeRouteUpdate",k,$);for(const b of Z)b.updateGuards.forEach(S=>{H.push(It(S,k,$))});return H.push(v),Ge(H)}).then(()=>{H=[];for(const b of m)if(b.beforeEnter)if(at(b.beforeEnter))for(const S of b.beforeEnter)H.push(It(S,k,$));else H.push(It(b.beforeEnter,k,$));return H.push(v),Ge(H)}).then(()=>(k.matched.forEach(b=>b.enterCallbacks={}),H=Fr(m,"beforeRouteEnter",k,$,Pe),H.push(v),Ge(H))).then(()=>{H=[];for(const b of o.list())H.push(It(b,k,$));return H.push(v),Ge(H)}).catch(b=>Ct(b,_e.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function Re(k,$,H){a.list().forEach(V=>Pe(()=>V(k,$,H)))}function De(k,$,H,V,Z){const m=B(k,$);if(m)return m;const v=$===Nt,b=tn?history.state:{};H&&(V||v?s.replace(k.fullPath,de({scroll:v&&b&&b.scroll},Z)):s.push(k.fullPath,Z)),i.value=k,Ke(k,$,H,v),rt()}let Fe;function Ae(){Fe||(Fe=s.listen((k,$,H)=>{if(!ut.listening)return;const V=x(k),Z=q(V,ut.currentRoute.value);if(Z){Q(de(Z,{replace:!0,force:!0}),V).catch(xn);return}u=V;const m=i.value;tn&&mc(Pl(m.fullPath,H.delta),Sr()),me(V,m).catch(v=>Ct(v,_e.NAVIGATION_ABORTED|_e.NAVIGATION_CANCELLED)?v:Ct(v,_e.NAVIGATION_GUARD_REDIRECT)?(Q(de(_(v.to),{force:!0}),V).then(b=>{Ct(b,_e.NAVIGATION_ABORTED|_e.NAVIGATION_DUPLICATED)&&!H.delta&&H.type===ls.pop&&s.go(-1,!1)}).catch(xn),Promise.reject()):(H.delta&&s.go(-H.delta,!1),oe(v,V,m))).then(v=>{v=v||De(V,m,!1),v&&(H.delta&&!Ct(v,_e.NAVIGATION_CANCELLED)?s.go(-H.delta,!1):H.type===ls.pop&&Ct(v,_e.NAVIGATION_ABORTED|_e.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),Re(V,m,v)}).catch(xn)}))}let qe=mn(),we=mn(),ue;function oe(k,$,H){rt(k);const V=we.list();return V.length?V.forEach(Z=>Z(k,$,H)):console.error(k),Promise.reject(k)}function et(){return ue&&i.value!==Nt?Promise.resolve():new Promise((k,$)=>{qe.add([k,$])})}function rt(k){return ue||(ue=!k,Ae(),qe.list().forEach(([$,H])=>k?H(k):$()),qe.reset()),k}function Ke(k,$,H,V){const{scrollBehavior:Z}=e;if(!tn||!Z)return Promise.resolve();const m=!H&&gc(Pl(k.fullPath,0))||(V||!H)&&history.state&&history.state.scroll||null;return tt().then(()=>Z(k,$,m)).then(v=>v&&pc(v)).catch(v=>oe(v,k,$))}const Te=k=>s.go(k);let yt;const Bt=new Set,ut={currentRoute:i,listening:!0,addRoute:d,removeRoute:y,clearRoutes:t.clearRoutes,hasRoute:P,getRoutes:C,resolve:x,options:e,push:A,replace:R,go:Te,back:()=>Te(-1),forward:()=>Te(1),beforeEach:l.add,beforeResolve:o.add,afterEach:a.add,onError:we.add,isReady:et,install(k){k.component("RouterLink",zc),k.component("RouterView",Kc),k.config.globalProperties.$router=ut,Object.defineProperty(k.config.globalProperties,"$route",{enumerable:!0,get:()=>F(i)}),tn&&!yt&&i.value===Nt&&(yt=!0,A(s.location).catch(V=>{}));const $={};for(const V in Nt)Object.defineProperty($,V,{get:()=>i.value[V],enumerable:!0});k.provide(Bs,ut),k.provide(Ns,fo($)),k.provide(is,i);const H=k.unmount;Bt.add(k),k.unmount=function(){Bt.delete(k),Bt.size<1&&(u=Nt,Fe&&Fe(),Fe=null,i.value=Nt,yt=!1,ue=!1),H()}}};function Ge(k){return k.reduce(($,H)=>$.then(()=>Pe(H)),Promise.resolve())}return ut}function ui(e){return lt(Ns)}/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=e=>e==="";/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=e=>{const t=Qc(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Zt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=Symbol("lucide-icons");function e1(){return lt(Zc,{})}/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=({name:e,iconNode:t,"icon-node":n,absoluteStrokeWidth:r,"absolute-stroke-width":s,strokeWidth:l,"stroke-width":o,size:a,color:i,...u},{slots:c})=>{const{size:f,color:h,strokeWidth:d=2,absoluteStrokeWidth:y=!1,class:C=""}=e1(),P=ye(()=>{const x=Ol(r)||Ol(s)||r===!0||s===!0||y===!0,_=l||o||d||Zt["stroke-width"];return x?Number(_)*24/Number(a??f??Zt.width):_});return Bn("svg",{...Zt,...u,width:a??f??Zt.width,height:a??f??Zt.height,stroke:i??h??Zt.stroke,"stroke-width":P.value,class:Yc("lucide",C,...e?[`lucide-${Il(Xc(e))}-icon`,`lucide-${Il(e)}`]:["lucide-icon"])},[...(t??n??[]).map(x=>Bn(...x)),...c.default?[c.default()]:[]])};/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=(e,t)=>(n,{slots:r,attrs:s})=>Bn(t1,{...s,...n,iconNode:t,name:e},r.default?{default:r.default}:void 0);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"m21 8-4-4-4 4",key:"1c9v7m"}],["path",{d:"M17 4v16",key:"7dpous"}]],r1=X("arrow-down-up",n1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],l1=X("arrow-left",s1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],i1=X("arrow-up-right",o1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]],u1=X("binary",a1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],f1=X("braces",c1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],as=X("check",d1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]],ur=X("clipboard",h1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6h4",key:"135r8i"}]],m1=X("clock-3",p1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],v1=X("clock",g1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],b1=X("cloud-upload",y1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14",key:"ron5a4"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2",key:"7s9ehn"}]],P1=X("crop",C1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],w1=X("eraser",A1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]],x1=X("file-image",S1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],ci=X("file-text",k1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=[["path",{d:"M12 22h6a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6",key:"15usau"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M3 16v-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V16",key:"s1gz5"}],["path",{d:"M6 22h2",key:"194x9m"}],["path",{d:"M7 14v8",key:"11ixej"}]],E1=X("file-type-corner",_1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=[["path",{d:"m17 3-5 5-5-5h10",key:"1ftt6x"}],["path",{d:"m17 21-5-5-5 5h10",key:"1m0wmu"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]],Hl=X("flip-vertical-2",R1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=[["path",{d:"m3 7 5 5-5 5V7",key:"couhi7"}],["path",{d:"m21 7-5 5 5 5V7",key:"6ouia7"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]],Dl=X("flip-horizontal-2",M1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Gr=X("folder-open",T1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]],N1=X("git-fork",B1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],us=X("grid-3x3",O1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],H1=X("heart",I1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],L1=X("image-plus",D1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],F1=X("image",$1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],j1=X("key-round",G1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],z1=X("languages",V1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=[["path",{d:"M13 5h8",key:"a7qcls"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}]],Ll=X("list-checks",U1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]],q1=X("lock-keyhole",W1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],J1=X("maximize-2",K1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],Q1=X("minimize-2",Y1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Z1=X("moon",X1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=[["path",{d:"M11 7 6 2",key:"1jwth8"}],["path",{d:"M18.992 12H2.041",key:"xw1gg"}],["path",{d:"M21.145 18.38A3.34 3.34 0 0 1 20 16.5a3.3 3.3 0 0 1-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0 0 20 22a2 2 0 0 0 2-2.025c0-.58-.285-1.13-.855-1.595",key:"1nkol4"}],["path",{d:"m8.5 4.5 2.148-2.148a1.205 1.205 0 0 1 1.704 0l7.296 7.296a1.205 1.205 0 0 1 0 1.704l-7.592 7.592a3.615 3.615 0 0 1-5.112 0l-3.888-3.888a3.615 3.615 0 0 1 0-5.112L5.67 7.33",key:"1nk1rd"}]],tf=X("paint-bucket",ef);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=[["path",{d:"m14.622 17.897-10.68-2.913",key:"vj2p1u"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",key:"18tc5c"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",key:"ytzfxy"}]],rf=X("paintbrush",nf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=[["path",{d:"m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12",key:"1y3wsu"}],["path",{d:"m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z",key:"110lr1"}],["path",{d:"m2 22 .414-.414",key:"jhxm08"}]],cs=X("pipette",sf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],of=X("redo-2",lf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Os=X("refresh-cw",af);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=[["path",{d:"M14 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1",key:"zg1ipl"}],["path",{d:"M14 4a1 1 0 0 1 1-1",key:"dhj8ez"}],["path",{d:"M15 10a1 1 0 0 1-1-1",key:"1mnyi5"}],["path",{d:"M19 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1",key:"txt6k4"}],["path",{d:"M21 4a1 1 0 0 0-1-1",key:"sfs9ap"}],["path",{d:"M21 9a1 1 0 0 1-1 1",key:"mp6qeo"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5a2 2 0 0 1 2-2h2",key:"15xut4"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}]],cf=X("replace-all",uf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],df=X("save",ff);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],pf=X("search",hf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],gf=X("shield-check",mf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],fi=X("sparkles",vf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}]],bf=X("square-dashed",yf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],Pf=X("square",Cf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],wf=X("sun",Af);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=[["path",{d:"M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z",key:"16rjxf"}],["path",{d:"M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193",key:"178nd4"}],["circle",{cx:"10.5",cy:"6.5",r:".5",fill:"currentColor",key:"12ikhr"}]],$l=X("tags",Sf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],kf=X("undo-2",xf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],Ef=X("wand-sparkles",_f),Rf="/assets/fufu-3FWaQxCW.png",Mf={class:"site-header"},Tf={class:"brand-mark","aria-hidden":"true"},Bf=["src"],Nf={class:"header-actions","aria-label":"页面操作"},Of={class:"icon-button",href:"https://github.com/",target:"_blank",rel:"noreferrer","aria-label":"GitHub 仓库"},If=["aria-label"],Hf={class:"site-footer"},Df={__name:"App",setup(e){const t=ui(),n=ne(!1),r=ye(()=>["pixel-beads","markdown"].includes(t.params.slug));Ln(()=>{const l=localStorage.getItem("sakura-theme");n.value=l?l==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches,document.documentElement.classList.toggle("dark",n.value)});function s(){n.value=!n.value,document.documentElement.classList.toggle("dark",n.value),localStorage.setItem("sakura-theme",n.value?"dark":"light")}return(l,o)=>{const a=Xr("router-link"),i=Xr("router-view");return J(),se("div",{class:fe(["site-shell",{"site-shell-wide":r.value}])},[p("header",Mf,[G(a,{class:"brand",to:"/","aria-label":"Sakura Tools 首页"},{default:vr(()=>[p("span",Tf,[p("img",{src:F(Rf),alt:""},null,8,Bf)]),o[1]||(o[1]=p("span",null,[p("strong",null,"Sakura"),p("small",null,"TOOLS / 工具箱")],-1))]),_:1}),p("nav",Nf,[p("a",Of,[G(F(N1),{size:18})]),p("button",{class:"icon-button",type:"button","aria-label":n.value?"切换到浅色模式":"切换到深色模式",onClick:o[0]||(o[0]=u=>s())},[n.value?(J(),Ze(F(wf),{key:0,size:18})):(J(),Ze(F(Z1),{key:1,size:18}))],8,If)])]),p("main",null,[G(i)]),p("footer",Hf,[o[4]||(o[4]=p("p",null,[p("span",{class:"status-dot"}),j(" 所有基础工具均在浏览器本地运行")],-1)),p("p",null,[o[2]||(o[2]=j("用 ",-1)),G(F(H1),{size:13,fill:"currentColor"}),o[3]||(o[3]=j(" 和 Go 构建",-1))])])],2)}}},Lf=["全部","开发","文本","图像","文档","生活"],fs=[{slug:"json",index:"01",name:"JSON 格式化",summary:"格式化、压缩并验证 JSON 数据",category:"开发",icon:f1,color:"red",ready:!0},{slug:"base64",index:"02",name:"Base64 编解码",summary:"文本与 Base64 安全互转，支持 Unicode",category:"开发",icon:u1,color:"blue",ready:!0},{slug:"timestamp",index:"03",name:"时间戳转换",summary:"时间戳与本地日期双向转换",category:"开发",icon:m1,color:"ochre",ready:!0},{slug:"password",index:"04",name:"随机密码",summary:"在本地生成高强度随机密码",category:"生活",icon:j1,color:"green",ready:!0},{slug:"translate",index:"05",name:"在线翻译",summary:"快速翻译文本并保留原始格式",category:"文本",icon:z1,color:"blue"},{slug:"markdown",index:"06",name:"Markdown 编辑器",summary:"实时预览并导出 Markdown 与 PDF 文档",category:"文本",icon:ci,color:"ochre",ready:!0},{slug:"image",index:"07",name:"图片处理",summary:"压缩、裁剪与格式转换",category:"图像",icon:F1,color:"green"},{slug:"pdf",index:"08",name:"PDF 工具",summary:"合并、拆分与页面整理",category:"文档",icon:E1,color:"red"},{slug:"pixel-beads",index:"09",name:"像素拼豆图纸",summary:"照片转网格图纸，精准匹配拼豆色号",category:"图像",icon:us,color:"special",ready:!0},{slug:"color",index:"10",name:"颜色工具",summary:"取色、转换与调色板生成",category:"开发",icon:cs,color:"blue"}],$f=e=>fs.find(t=>t.slug===e),Ff={class:"tool-index","aria-labelledby":"tool-index-heading"},Gf={class:"section-heading"},jf={class:"tool-count"},Vf={class:"tool-controls"},zf={class:"search-box"},Uf={class:"category-tabs","aria-label":"工具分类"},Wf=["onClick"],qf={key:0,class:"tool-grid"},Kf={class:"card-topline"},Jf={class:"tool-number"},Yf={key:0,class:"soon-label"},Qf={class:"tool-symbol"},Xf={class:"category-label"},Zf={key:1,class:"empty-state"},ed={__name:"HomeView",setup(e){const t=ne(""),n=ne("全部"),r=ne(null),s=ye(()=>{const o=t.value.trim().toLowerCase();return fs.filter(a=>{const i=n.value==="全部"||a.category===n.value,u=!o||`${a.name} ${a.summary} ${a.category}`.toLowerCase().includes(o);return i&&u})});function l(o){var a,i;o.key==="/"&&((a=document.activeElement)==null?void 0:a.tagName)!=="INPUT"&&((i=document.activeElement)==null?void 0:i.tagName)!=="TEXTAREA"&&(o.preventDefault(),tt(()=>{var u;return(u=r.value)==null?void 0:u.focus()}))}return Ln(()=>window.addEventListener("keydown",l)),_s(()=>window.removeEventListener("keydown",l)),(o,a)=>(J(),se(Ne,null,[a[4]||(a[4]=Xa('<section class="home-intro"><div class="eyebrow"><span></span> SAKURA WORKBENCH · 2026</div><div class="intro-grid"><div><h1>需要什么，<br><em>拿来即用。</em></h1></div><div class="intro-copy"><p>一组简洁、快速、尊重隐私的在线工具。常用处理尽可能留在你的浏览器里完成。</p><div class="privacy-note"><span class="status-dot"></span> 无需登录 · 本地优先</div></div></div></section>',1)),p("section",Ff,[p("div",Gf,[a[2]||(a[2]=p("div",null,[p("p",{class:"section-kicker"},"TOOL INDEX"),p("h2",{id:"tool-index-heading"},"工具索引")],-1)),p("p",jf,U(String(s.value.length).padStart(2,"0"))+" / "+U(F(fs).length),1)]),p("div",Vf,[p("label",zf,[G(F(pf),{size:19}),Se(p("input",{ref_key:"searchInput",ref:r,"onUpdate:modelValue":a[0]||(a[0]=i=>t.value=i),type:"search",placeholder:"搜索工具，例如 JSON、图片…"},null,512),[[Be,t.value]]),a[3]||(a[3]=p("kbd",null,"/",-1))]),p("div",Uf,[(J(!0),se(Ne,null,zt(F(Lf),i=>(J(),se("button",{key:i,type:"button",class:fe({active:n.value===i}),onClick:u=>n.value=i},U(i),11,Wf))),128))])]),s.value.length?(J(),se("div",qf,[(J(!0),se(Ne,null,zt(s.value,i=>(J(),Ze(rr(i.ready?"router-link":"article"),{key:i.slug,to:i.ready?`/tools/${i.slug}`:void 0,class:fe(["tool-card",[`tone-${i.color}`,{upcoming:!i.ready,featured:i.color==="special"}]])},{default:vr(()=>[p("div",Kf,[p("span",Jf,U(i.index),1),i.ready?(J(),Ze(F(i1),{key:1,size:18})):(J(),se("span",Yf,"筹备中"))]),p("div",Qf,[(J(),Ze(rr(i.icon),{size:25,"stroke-width":1.8}))]),p("h3",null,U(i.name),1),p("p",null,U(i.summary),1),p("span",Xf,U(i.category),1),i.color==="special"?(J(),Ze(F(fi),{key:0,class:"special-mark",size:17})):Ut("",!0)]),_:2},1032,["to","class"]))),128))])):(J(),se("div",Zf,[p("p",null,"没有找到“"+U(t.value)+"”",1),p("button",{type:"button",onClick:a[1]||(a[1]=i=>{t.value="",n.value="全部"})},"清除筛选")]))])],64))}},td="modulepreload",nd=function(e){return"/"+e},Fl={},rd=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(u){return Promise.all(u.map(c=>Promise.resolve(c).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),i=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=o(n.map(u=>{if(u=nd(u),u in Fl)return;Fl[u]=!0;const c=u.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":td,c||(h.as="script"),h.crossOrigin="",h.href=u,i&&h.setAttribute("nonce",i),document.head.appendChild(h),c)return new Promise((d,y)=>{h.addEventListener("load",d),h.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${u}`)))})}))}function l(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&l(a.reason);return t().catch(l)})},sd={class:"tool-panel"},ld={class:"tool-bar"},od={class:"action-group"},id={key:0,class:"error-message"},ad={key:1,class:"success-message"},ud={__name:"JsonTool",setup(e){const t=ne(`{
  "project": "sakura-tools",
  "status": "growing",
  "private": true
}`),n=ne(""),r=ne(!1);function s(a=!1){try{t.value=JSON.stringify(JSON.parse(t.value),null,a?0:2),n.value=""}catch(i){n.value=`第 ${l(i.message)} 行附近：${i.message}`}}function l(a){var u;const i=Number(((u=a.match(/position (\d+)/))==null?void 0:u[1])||0);return t.value.slice(0,i).split(`
`).length}async function o(){await navigator.clipboard.writeText(t.value),r.value=!0,setTimeout(()=>r.value=!1,1400)}return(a,i)=>(J(),se("div",sd,[p("div",ld,[p("div",od,[p("button",{class:"primary-button",type:"button",onClick:i[0]||(i[0]=u=>s(!1))},[G(F(Ef),{size:16}),i[4]||(i[4]=j(" 格式化",-1))]),p("button",{class:"secondary-button",type:"button",onClick:i[1]||(i[1]=u=>s(!0))},[G(F(Q1),{size:16}),i[5]||(i[5]=j(" 压缩",-1))])]),p("button",{class:"secondary-button",type:"button",onClick:o},[r.value?(J(),Ze(F(as),{key:0,size:16})):(J(),Ze(F(ur),{key:1,size:16})),j(" "+U(r.value?"已复制":"复制"),1)])]),i[7]||(i[7]=p("label",{class:"editor-label",for:"json-input"},"JSON INPUT",-1)),Se(p("textarea",{id:"json-input","onUpdate:modelValue":i[2]||(i[2]=u=>t.value=u),class:"code-editor",spellcheck:"false",onInput:i[3]||(i[3]=u=>n.value="")},null,544),[[Be,t.value]]),n.value?(J(),se("p",id,U(n.value),1)):(J(),se("p",ad,[G(F(as),{size:14}),i[6]||(i[6]=j(" 输入内容仅在当前浏览器中处理",-1))]))]))}},cd={class:"tool-panel split-editor"},fd={class:"editor-heading"},dd={class:"swap-mark"},hd={class:"editor-heading"},pd={key:0,class:"error-message wide-message"},md={__name:"Base64Tool",setup(e){const t=ne("你好，Sakura Tools!"),n=ne(""),r=ne("");function s(){n.value=btoa(String.fromCharCode(...new TextEncoder().encode(t.value))),r.value=""}function l(){try{t.value=new TextDecoder().decode(Uint8Array.from(atob(n.value.trim()),a=>a.charCodeAt(0))),r.value=""}catch{r.value="这不是有效的 Base64 内容，请检查后重试。"}}async function o(a){await navigator.clipboard.writeText(a)}return s(),(a,i)=>(J(),se("div",cd,[p("section",null,[p("div",fd,[i[5]||(i[5]=p("label",{for:"plain-text"},"原始文本",-1)),p("button",{type:"button",onClick:i[0]||(i[0]=u=>o(t.value))},[G(F(ur),{size:15}),i[4]||(i[4]=j("复制",-1))])]),Se(p("textarea",{id:"plain-text","onUpdate:modelValue":i[1]||(i[1]=u=>t.value=u),spellcheck:"false"},null,512),[[Be,t.value]]),p("button",{class:"primary-button full-button",type:"button",onClick:s},"编码为 Base64")]),p("div",dd,[G(F(r1),{size:18})]),p("section",null,[p("div",hd,[i[7]||(i[7]=p("label",{for:"encoded-text"},"Base64",-1)),p("button",{type:"button",onClick:i[2]||(i[2]=u=>o(n.value))},[G(F(ur),{size:15}),i[6]||(i[6]=j("复制",-1))])]),Se(p("textarea",{id:"encoded-text","onUpdate:modelValue":i[3]||(i[3]=u=>n.value=u),spellcheck:"false"},null,512),[[Be,n.value]]),p("button",{class:"secondary-button full-button",type:"button",onClick:l},"解码为文本")]),r.value?(J(),se("p",pd,U(r.value),1)):Ut("",!0)]))}},gd={class:"tool-panel timestamp-panel"},vd={class:"timestamp-grid"},yd={class:"unit-toggle"},bd={class:"timezone-note"},Cd={__name:"TimestampTool",setup(e){const t=Date.now(),n=ne(Math.floor(t/1e3)),r=ne(l(t)),s=ne("seconds");function l(c){const f=new Date(c);if(Number.isNaN(f.getTime()))return"";const h=f.getTimezoneOffset()*6e4;return new Date(f.getTime()-h).toISOString().slice(0,19)}function o(){const c=s.value==="seconds"?Number(n.value)*1e3:Number(n.value),f=l(c);f&&(r.value=f)}function a(){const c=new Date(r.value).getTime();Number.isNaN(c)||(n.value=s.value==="seconds"?Math.floor(c/1e3):c)}function i(){const c=Date.now();n.value=s.value==="seconds"?Math.floor(c/1e3):c,r.value=l(c)}const u=ye(()=>{const c=new Date(r.value);return Number.isNaN(c.getTime())?"请输入完整日期时间":c.toLocaleString("zh-CN",{dateStyle:"full",timeStyle:"medium"})});return(c,f)=>(J(),se("div",gd,[p("div",vd,[p("section",null,[f[4]||(f[4]=p("label",{for:"timestamp"},"时间戳",-1)),Se(p("input",{id:"timestamp","onUpdate:modelValue":f[0]||(f[0]=h=>n.value=h),type:"number",onInput:o},null,544),[[Be,n.value]]),p("div",yd,[p("button",{type:"button",class:fe({active:s.value==="seconds"}),onClick:f[1]||(f[1]=h=>{s.value="seconds",a()})},"秒",2),p("button",{type:"button",class:fe({active:s.value==="milliseconds"}),onClick:f[2]||(f[2]=h=>{s.value="milliseconds",a()})},"毫秒",2)])]),p("section",null,[f[5]||(f[5]=p("label",{for:"date-input"},"本地日期时间",-1)),Se(p("input",{id:"date-input","onUpdate:modelValue":f[3]||(f[3]=h=>r.value=h),type:"datetime-local",step:"1",onInput:a},null,544),[[Be,r.value]]),p("p",null,U(u.value),1)])]),p("button",{class:"secondary-button",type:"button",onClick:i},[G(F(Os),{size:16}),f[6]||(f[6]=j(" 使用当前时间",-1))]),p("div",bd,[G(F(v1),{size:15}),j(" 当前浏览器时区："+U(Intl.DateTimeFormat().resolvedOptions().timeZone),1)])]))}},Pd={class:"tool-panel password-panel"},Ad={class:"password-output"},wd={class:"password-options"},Sd={class:"length-control"},xd={class:"check-grid"},kd={class:"password-footer"},_d={__name:"PasswordTool",setup(e){const t=ne(20),n=ne({upper:!0,lower:!0,numbers:!0,symbols:!0}),r=ne(""),s=ne(!1),l=ye(()=>{const i=Object.values(n.value).filter(Boolean).length,u=t.value*Math.log2(Math.max(i*18,2));return u>110?"很强":u>75?"强":u>45?"一般":"较弱"});function o(){const i=[];n.value.upper&&i.push("ABCDEFGHJKLMNPQRSTUVWXYZ"),n.value.lower&&i.push("abcdefghijkmnopqrstuvwxyz"),n.value.numbers&&i.push("23456789"),n.value.symbols&&i.push("!@#$%&*+-=?");const u=i.join("")||"abcdefghijkmnopqrstuvwxyz",c=crypto.getRandomValues(new Uint32Array(t.value));r.value=Array.from(c,f=>u[f%u.length]).join("")}async function a(){await navigator.clipboard.writeText(r.value),s.value=!0,setTimeout(()=>s.value=!1,1400)}return o(),(i,u)=>(J(),se("div",Pd,[p("div",Ad,[p("code",null,U(r.value),1),p("button",{type:"button",onClick:a},[s.value?(J(),Ze(F(as),{key:0,size:18})):(J(),Ze(F(ur),{key:1,size:18})),p("span",null,U(s.value?"已复制":"复制"),1)])]),p("div",wd,[p("label",Sd,[u[5]||(u[5]=j("密码长度 ",-1)),p("strong",null,U(t.value),1),Se(p("input",{"onUpdate:modelValue":u[0]||(u[0]=c=>t.value=c),type:"range",min:"8",max:"64",onInput:o},null,544),[[Be,t.value,void 0,{number:!0}]])]),p("div",xd,[p("label",null,[Se(p("input",{"onUpdate:modelValue":u[1]||(u[1]=c=>n.value.upper=c),type:"checkbox",onChange:o},null,544),[[Kn,n.value.upper]]),u[6]||(u[6]=j(" 大写字母",-1))]),p("label",null,[Se(p("input",{"onUpdate:modelValue":u[2]||(u[2]=c=>n.value.lower=c),type:"checkbox",onChange:o},null,544),[[Kn,n.value.lower]]),u[7]||(u[7]=j(" 小写字母",-1))]),p("label",null,[Se(p("input",{"onUpdate:modelValue":u[3]||(u[3]=c=>n.value.numbers=c),type:"checkbox",onChange:o},null,544),[[Kn,n.value.numbers]]),u[8]||(u[8]=j(" 数字",-1))]),p("label",null,[Se(p("input",{"onUpdate:modelValue":u[4]||(u[4]=c=>n.value.symbols=c),type:"checkbox",onChange:o},null,544),[[Kn,n.value.symbols]]),u[9]||(u[9]=j(" 特殊符号",-1))])])]),p("div",kd,[p("span",null,[u[10]||(u[10]=j("强度：",-1)),p("strong",null,U(l.value),1)]),p("button",{class:"primary-button",type:"button",onClick:o},[G(F(Os),{size:16}),u[11]||(u[11]=j(" 重新生成",-1))])])]))}},Ed=`
A1,A1,249,240,205,Asher
A10,A10,255,157,85,Asher
A11,A11,255,221,153,Asher
A12,A12,252,181,143,Asher
A13,A13,255,187,89,Asher
A14,A14,255,109,64,Asher
A15,A15,253,255,68,Asher
A16,A16,254,249,174,Asher
A17,A17,255,227,110,Asher
A18,A18,254,207,152,Asher
A19,A19,253,123,114,Asher
A2,A2,251,251,212,Asher
A20,A20,239,205,103,Asher
A21,A21,255,227,149,Asher
A22,A22,255,243,164,Asher
A23,A23,243,213,191,Asher
A24,A24,251,248,201,Asher
A25,A25,255,214,125,Asher
A26,A26,255,187,39,Asher
A3,A3,250,252,159,Asher
A4,A4,255,233,83,Asher
A5,A5,244,215,56,Asher
A6,A6,253,173,73,Asher
A7,A7,255,124,47,Asher
A8,A8,234,202,73,Asher
A9,A9,255,153,90,Asher
B1,B1,230,238,50,Asher
B10,B10,149,211,194,Asher
B11,B11,93,114,42,Asher
B12,B12,21,111,64,Asher
B13,B13,217,247,148,Asher
B14,B14,173,233,69,Asher
B15,B15,46,81,50,Asher
B16,B16,198,237,156,Asher
B17,B17,155,177,58,Asher
B18,B18,230,238,73,Asher
B19,B19,37,184,140,Asher
B2,B2,91,228,25,Asher
B20,B20,194,240,204,Asher
B21,B21,20,106,107,Asher
B22,B22,11,60,67,Asher
B23,B23,48,57,33,Asher
B24,B24,238,252,165,Asher
B25,B25,78,132,109,Asher
B26,B26,140,122,54,Asher
B27,B27,209,220,193,Asher
B28,B28,158,229,185,Asher
B29,B29,197,226,84,Asher
B3,B3,124,238,157,Asher
B30,B30,236,251,208,Asher
B31,B31,196,230,181,Asher
B32,B32,155,171,90,Asher
B4,B4,30,249,66,Asher
B5,B5,0,189,53,Asher
B6,B6,90,232,186,Asher
B7,B7,3,172,136,Asher
B8,B8,2,157,38,Asher
B9,B9,38,82,58,Asher
C1,C1,232,255,231,Asher
C10,C10,62,188,226,Asher
C11,C11,3,185,185,Asher
C12,C12,28,51,77,Asher
C13,C13,205,232,255,Asher
C14,C14,213,253,255,Asher
C15,C15,35,196,198,Asher
C16,C16,23,87,168,Asher
C17,C17,80,211,236,Asher
C18,C18,28,51,68,Asher
C19,C19,23,135,162,Asher
C2,C2,188,249,246,Asher
C20,C20,0,130,190,Asher
C21,C21,190,221,255,Asher
C22,C22,103,180,190,Asher
C23,C23,194,220,235,Asher
C24,C24,125,196,255,Asher
C25,C25,169,229,229,Asher
C26,C26,47,153,179,Asher
C27,C27,235,245,252,Asher
C28,C28,187,207,237,Asher
C29,C29,75,91,163,Asher
C3,C3,160,226,251,Asher
C4,C4,66,204,255,Asher
C5,C5,1,172,235,Asher
C6,C6,80,169,240,Asher
C7,C7,1,136,211,Asher
C8,C8,16,84,192,Asher
C9,C9,49,75,202,Asher
D1,D1,174,180,242,Asher
D10,D10,54,27,80,Asher
D11,D11,185,186,225,Asher
D12,D12,222,154,212,Asher
D13,D13,185,2,149,Asher
D14,D14,139,39,155,Asher
D15,D15,47,31,144,Asher
D16,D16,226,225,238,Asher
D17,D17,196,212,246,Asher
D18,D18,164,94,199,Asher
D19,D19,216,195,215,Asher
D2,D2,133,142,221,Asher
D20,D20,156,50,178,Asher
D21,D21,154,0,155,Asher
D22,D22,51,57,149,Asher
D23,D23,234,218,252,Asher
D24,D24,119,134,229,Asher
D25,D25,72,79,199,Asher
D26,D26,233,195,246,Asher
D3,D3,48,84,175,Asher
D4,D4,24,42,132,Asher
D5,D5,184,67,197,Asher
D6,D6,172,123,222,Asher
D7,D7,110,57,154,Asher
D8,D8,226,211,255,Asher
D9,D9,213,185,248,Asher
E1,E1,253,211,204,Asher
E10,E10,211,56,147,Asher
E11,E11,252,221,210,Asher
E12,E12,255,161,197,Asher
E13,E13,182,0,109,Asher
E14,E14,255,209,186,Asher
E15,E15,242,207,208,Asher
E16,E16,255,236,222,Asher
E17,E17,255,226,234,Asher
E18,E18,255,201,214,Asher
E19,E19,255,210,231,Asher
E2,E2,254,205,223,Asher
E20,E20,216,199,209,Asher
E21,E21,189,157,161,Asher
E22,E22,204,120,167,Asher
E23,E23,147,122,141,Asher
E24,E24,246,228,249,Asher
E3,E3,255,151,195,Asher
E4,E4,232,100,158,Asher
E5,E5,245,81,162,Asher
E6,E6,255,52,107,Asher
E7,E7,198,53,120,Asher
E8,E8,255,219,233,Asher
E9,E9,233,112,204,Asher
F1,F1,253,149,123,Asher
F10,F10,167,77,34,Asher
F11,F11,111,32,31,Asher
F12,F12,253,77,106,Asher
F13,F13,221,66,47,Asher
F14,F14,255,169,173,Asher
F15,F15,200,0,32,Asher
F16,F16,255,217,200,Asher
F17,F17,247,155,113,Asher
F18,F18,211,124,70,Asher
F19,F19,193,68,74,Asher
F2,F2,252,61,69,Asher
F20,F20,205,147,145,Asher
F21,F21,244,177,180,Asher
F22,F22,255,208,203,Asher
F23,F23,245,126,102,Asher
F24,F24,252,193,196,Asher
F25,F25,229,75,79,Asher
F3,F3,247,73,65,Asher
F4,F4,252,40,60,Asher
F5,F5,216,1,39,Asher
F6,F6,176,68,61,Asher
F7,F7,151,25,55,Asher
F8,F8,188,1,39,Asher
F9,F9,226,103,122,Asher
G1,G1,255,226,206,Asher
G10,G10,200,129,53,Asher
G11,G11,224,197,147,Asher
G12,G12,235,187,131,Asher
G13,G13,183,113,74,Asher
G14,G14,141,97,76,Asher
G15,G15,252,249,224,Asher
G16,G16,242,217,186,Asher
G17,G17,86,64,60,Asher
G18,G18,255,228,204,Asher
G19,G19,225,148,58,Asher
G2,G2,255,202,170,Asher
G20,G20,169,64,35,Asher
G21,G21,203,142,119,Asher
G3,G3,244,195,165,Asher
G4,G4,225,179,131,Asher
G5,G5,237,148,53,Asher
G6,G6,245,151,52,Asher
G7,G7,157,91,62,Asher
G8,G8,89,42,33,Asher
G9,G9,230,180,131,Asher
H1,H1,226,226,226,Asher
H10,H10,238,233,234,Asher
H11,H11,206,205,213,Asher
H12,H12,255,245,237,Asher
H13,H13,243,225,201,Asher
H14,H14,207,215,211,Asher
H15,H15,152,166,168,Asher
H16,H16,59,47,35,Asher
H17,H17,241,237,237,Asher
H18,H18,255,253,240,Asher
H19,H19,246,239,226,Asher
H2,H2,255,255,255,Asher
H20,H20,148,159,163,Asher
H21,H21,247,243,228,Asher
H22,H22,202,202,213,Asher
H23,H23,154,157,148,Asher
H3,H3,179,179,179,Asher
H4,H4,134,134,134,Asher
H5,H5,71,71,71,Asher
H6,H6,44,44,44,Asher
H7,H7,0,0,0,Asher
H8,H8,231,214,219,Asher
H9,H9,228,231,227,Asher
M1,M1,188,198,184,Asher
M10,M10,197,177,188,Asher
M11,M11,159,116,148,Asher
M12,M12,100,71,73,Asher
M13,M13,209,144,102,Asher
M14,M14,199,115,97,Asher
M15,M15,117,125,123,Asher
M2,M2,138,163,133,Asher
M3,M3,105,125,128,Asher
M4,M4,218,206,190,Asher
M5,M5,208,204,170,Asher
M6,M6,176,167,130,Asher
M7,M7,180,164,151,Asher
M8,M8,179,130,129,Asher
M9,M9,165,135,103,Asher
P1,P1,252,248,249,Asher
P10,P10,213,200,233,Asher
P11,P11,243,236,200,Asher
P12,P12,230,238,241,Asher
P13,P13,169,203,241,Asher
P14,P14,49,119,176,Asher
P15,P15,102,133,117,Asher
P16,P16,255,190,70,Asher
P17,P17,255,163,36,Asher
P18,P18,254,184,159,Asher
P19,P19,255,224,232,Asher
P2,P2,189,169,171,Asher
P20,P20,254,190,207,Asher
P21,P21,236,190,192,Asher
P22,P22,228,168,158,Asher
P23,P23,165,98,105,Asher
P3,P3,174,221,169,Asher
P4,P4,253,164,158,Asher
P5,P5,236,141,61,Asher
P6,P6,96,207,168,Asher
P7,P7,235,146,113,Asher
P8,P8,240,217,88,Asher
P9,P9,217,217,217,Asher
Q1,Q1,242,165,232,Asher
Q2,Q2,115,178,158,Asher
Q3,Q3,255,255,0,Asher
Q4,Q4,255,235,250,Asher
Q5,Q5,79,94,91,Asher
R1,R1,213,14,33,Asher
R10,R10,255,219,77,Asher
R11,R11,255,235,250,Asher
R12,R12,216,213,206,Asher
R13,R13,85,81,76,Asher
R14,R14,158,228,223,Asher
R15,R15,119,206,233,Asher
R16,R16,61,207,202,Asher
R17,R17,74,134,122,Asher
R18,R18,127,205,157,Asher
R19,R19,205,229,93,Asher
R2,R2,249,46,131,Asher
R20,R20,232,199,180,Asher
R21,R21,173,111,60,Asher
R22,R22,108,55,47,Asher
R23,R23,254,184,114,Asher
R24,R24,242,193,192,Asher
R25,R25,201,103,93,Asher
R26,R26,210,147,190,Asher
R27,R27,234,140,177,Asher
R28,R28,156,135,214,Asher
R3,R3,253,130,37,Asher
R4,R4,248,236,49,Asher
R5,R5,52,199,91,Asher
R6,R6,37,184,145,Asher
R7,R7,23,119,157,Asher
R8,R8,27,96,195,Asher
R9,R9,154,86,180,Asher
T1,T1,226,223,215,Asher
Y1,Y1,253,111,180,Asher
Y2,Y2,254,180,129,Asher
Y3,Y3,215,250,160,Asher
Y4,Y4,139,219,250,Asher
Y5,Y5,233,135,234,Asher
ZG1,ZG1,218,171,179,Asher
ZG2,ZG2,214,170,135,Asher
ZG3,ZG3,193,189,141,Asher
ZG4,ZG4,150,134,159,Asher
ZG5,ZG5,132,144,166,Asher
ZG6,ZG6,148,191,226,Asher
ZG7,ZG7,226,169,210,Asher
ZG8,ZG8,171,145,192,Asher
`.trim();function jr(e){return Number(e).toString(16).padStart(2,"0").toUpperCase()}function Rd(e,t){const n=a=>{var i;return((i=a.match(/^([A-Z]+)(\d+)$/))==null?void 0:i.slice(1))||[a,"0"]},[r,s]=n(e.code),[l,o]=n(t.code);return r.localeCompare(l)||Number(s)-Number(o)}const Md={id:"mard-291-community",brand:"MARD",name:"MARD 291 色（社区校准）",source:"https://github.com/maxcleme/beadcolors",colors:Ed.split(`
`).map(e=>{const[t,n,r,s,l,o]=e.split(",");return{id:`mard-${t.toLowerCase()}`,code:t,name:n,hex:`#${jr(r)}${jr(s)}${jr(l)}`,contributor:o}}).sort(Rd)};function Is({id:e,brand:t,name:n,source:r,csv:s}){return{id:e,brand:t,name:n,source:r,colors:s.trim().split(/\r?\n/).map(l=>{const[o,a,i,u,c]=l.split(","),f=`#${[i,u,c].map(h=>Number(h).toString(16).padStart(2,"0")).join("")}`.toUpperCase();return{id:`${e}-${o.toLowerCase()}`,code:o,name:a,hex:f}})}}const Td=`
H01,White,229,236,241,Jeppewl
H02,Cream,228,228,197,Jeppewl
H03,Yellow,233,199,4,Jeppewl
H04,Orange,209,72,3,Jeppewl
H05,Red,180,6,14,Jeppewl
H06,Pink,234,138,165,Jeppewl
H07,Purple,113,34,151,Jeppewl
H08,Blue,2,57,163,Jeppewl
H09,Light Blue,2,91,195,Jeppewl
H10,Green,2,118,67,Jeppewl
H11,Light Green,25,205,167,Jeppewl
H12,Brown,62,39,26,Jeppewl
H13,Transparent Red,192,36,53,LThanda
H14,Transparent Yellow,228,170,50,galaxy
H16,Transparent Green,55,184,118,LThanda
H17,Grey,131,143,152,Jeppewl
H18,Black,20,19,21,Jeppewl
H19,Clear,216,210,206,LThanda
H20,Reddish Brown,141,42,15,Jeppewl
H21,Light Brown,190,108,33,Jeppewl
H22,Dark Red,145,2,10,Jeppewl
H24,Translucent Purple,104,62,154,LThanda
H25,Translucent Brown,135,89,61,LThanda
H26,Matt Rose,232,164,152,Jeppewl
H27,Beige,220,177,142,Jeppewl
H28,Dark Green,30,44,28,Jeppewl
H29,Claret,191,1,66,Jeppewl
H30,Burgundy,78,12,27,Jeppewl
H31,Turquoise,72,154,185,Jeppewl
H32,Neon Fuchsia,255,32,141,LThanda
H33,Cerise,255,57,86,Jeppewl
H34,Neon Yellow,229,239,19,LThanda
H35,Neon Red,255,40,51,LThanda
H36,Neon Blue,35,83,176,LThanda
H37,Neon Green,6,183,60,LThanda
H38,Neon Orange,253,134,0,LThanda
H39,Fluorescent Yellow,241,242,28,LThanda
H40,Fluorescent Orange,254,99,11,LThanda
H41,Fluorescent Blue,38,89,178,LThanda
H42,Fluorescent Green,12,189,81,LThanda
H43,Pastel Yellow,231,228,90,Jeppewl
H44,Pastel Red,249,97,96,Jeppewl
H45,Pastel Purple,142,105,205,Jeppewl
H46,Pastel Blue,81,174,228,Jeppewl
H47,Pastel Green,128,223,150,Jeppewl
H48,Pastel Pink,214,122,209,Jeppewl
H49,Azure,15,172,209,Jeppewl
H60,Teddybear Brown,240,152,30,Jeppewl
H70,Light Grey,165,179,192,Jeppewl
H71,Dark Grey,68,80,89,Jeppewl
H75,Tan,183,140,109,Jeppewl
H76,Nougat,138,89,55,Jeppewl
H77,Cloudy White,206,209,200,Jeppewl
H78,Light Peach,247,193,170,Jeppewl
H79,Apricot,248,118,51,Jeppewl
H82,Plum,145,23,90,Jeppewl
H83,Petrol Blue,3,122,159,Jeppewl
H84,Olive Green,104,120,54,Jeppewl
H95,Pastel Rose,221,155,163,Jeppewl
H96,Pastel Lilac,180,145,173,Jeppewl
H97,Pastel Ice Blue,138,175,194,Jeppewl
H98,Pastel Mint,148,204,164,Jeppewl
H15,Transparent Blue,72,126,213,Exodeca1
H55,Green (Glow in the Dark),250,248,237,Exodeca1
H56,Red (Glow in the Dark),237,191,159,Exodeca1
H57,Blue (Glow in the Dark),196,208,227,Exodeca1
H61,Gold,217,147,80,Exodeca1
H62,Silver,72,71,74,Exodeca1
H63,Bronze,66,49,47,Exodeca1
H64,Pearl,239,235,228,Exodeca1
H72,Translucent Pink,240,151,176,Exodeca1
H73,Translucent Aqua,89,174,245,Exodeca1
H74,Translucent Lilac,91,85,189,Exodeca1
H101,Eucalyptus,169,195,155,Tryk47
H102,Forest Green,53,107,45,Tryk47
H103,Light Yellow,255,230,96,Tryk47
H104,Lime,188,209,34,Tryk47
H105,Light Apricot,255,172,120,Tryk47
H106,Light Lavender,204,197,237,Tryk47
H107,Lavender,106,135,193,Tryk47
H108,Aubergine,42,37,54,rYonder
H109,Cloudy Grey,138,132,127,rYonder
H110,Matcha,131,137,86,rYonder
H111,Dark Blush,131,88,84,rYonder
H112,Blush,173,138,130,rYonder
H113,Aqua,95,136,123,rYonder
H114,Cherry Red,154,44,49,rYonder
H115,Bright Green,110,151,95,rYonder
H116,Midnight Blue,34,40,56,rYonder
H117,Taupe Grey,119,113,105,rYonder
H118,Maroon Red,97,41,50,rYonder
H119,Sky Blue,65,103,180,rYonder
`,Bd=`
C01,White,234,238,243,Perlervault
C02,Black,41,42,43,Perlervault
C03,Tangerine,255,166,48,Perlervault
C04,Yellow Orange,230,135,57,Perlervault
C05,Tall Poppy,203,53,49,Perlervault
C06,Red,182,25,39,Perlervault
C07,Carnation Pink,225,130,176,Perlervault
C08,Hot Pink,220,81,154,Perlervault
C09,Magenta,218,67,131,Perlervault
C10,Picasso,234,222,127,Perlervault
C11,Yellow,234,193,37,Perlervault
C12,Pistachio,151,207,135,Perlervault
C13,Pastel Green,139,178,58,Perlervault
C14,Green,0,144,83,Perlervault
C15,Green Tea,0,118,95,Perlervault
C16,Bright Carrot,249,111,64,Perlervault
C17,Orange,235,96,39,Perlervault
C18,Sky Blue,167,205,222,Perlervault
C19,Baby Blue,46,171,216,Perlervault
C20,Light Blue,0,132,206,Perlervault
C21,Dark Blue,0,79,164,Perlervault
C22,Bubble Gun,242,191,184,Perlervault
C23,Sand,220,163,132,Perlervault
C24,Beeswax,238,211,158,Perlervault
C25,Lavender,138,126,194,Perlervault
C26,Pastel Lavender,145,101,178,Perlervault
C27,Purple,72,51,126,Perlervault
C28,Marigold,178,121,56,Perlervault
C29,Buccaneer,179,85,64,Perlervault
C30,Redwood,154,69,65,Perlervault
C31,Light Brown,137,93,73,Perlervault
C32,Brown,101,70,61,Perlervault
C33,Gray,149,150,152,Perlervault
C34,Dark Gray,112,117,123,Perlervault
C35,Silver,103,107,115,LThanda
C36,Old Pink,206,109,131,Perlervault
C37,True Blue,0,120,191,Perlervault
C38,Turquoise,85,164,217,Perlervault
C39,Shadow Green,158,201,205,Perlervault
C40,Key Lomen Pie,205,192,63,Perlervault
C41,Pastel Yellow,225,211,103,Perlervault
C42,Sandstorm,225,200,53,Perlervault
C43,Paprika,177,24,54,Perlervault
C44,Burning Sand,238,146,124,Perlervault
C46,Canary,226,230,93,Perlervault
C47,Vanilla,233,193,166,Perlervault
C48,Corn,236,192,61,Perlervault
C49,Raspberry Pink,239,103,178,Perlervault
C50,Maverick,192,183,215,Perlervault
C51,Spring Sun,223,218,189,Perlervault
C52,Butterfly Bush,79,57,137,Perlervault
C53,Bright Green,142,195,36,Perlervault
C54,Medium Turquoise,0,165,161,Perlervault
C56,Oslo Gray,130,135,139,Perlervault
C58,Black Rock,54,56,77,Perlervault
C60,Sea Mist,178,215,206,Perlervault
C69,Mine Shaft,56,62,68,Perlervault
C70,Brunswick Green,21,56,56,Perlervault
C71,Goldenrod,232,174,0,Perlervault
C72,Pastel Orange,217,179,94,Perlervault
C73,Sienna,187,104,51,Perlervault
C74,Deer,205,178,119,jweeks2023
C75,Clay,170,116,78,Perlervault
C76,Coral Red,236,98,94,Perlervault
C77,Deep Chestnut,190,93,101,Perlervault
C78,Red Wine,153,50,58,Perlervault
C79,Light Sea Blue,104,196,210,Perlervault
C80,Sea Blue,0,147,169,Perlervault
C81,Steel Blue,90,176,191,Perlervault
C82,Azure,0,158,194,Perlervault
C83,Dark Steel Blue,0,132,178,Perlervault
C84,Drark Algae,173,173,41,Perlervault
C85,Dark Olive,143,142,60,Perlervault
C86,Jade Green,0,125,43,Perlervault
C87,Ghost While,212,216,211,Perlervault
C88,Ash Grey,194,196,194,Perlervault
C89,Light Gray,167,172,173,Perlervault
C90,Charcoal Gray,86,90,94,Perlervault
C91,Dandelion,206,164,51,Perlervault
C92,Pale Skin,220,183,148,Perlervault
C93,Warm Blush,221,146,133,Perlervault
C94,Salmon,224,123,105,Perlervault
C95,Apricot,239,127,97,Perlervault
C96,Papaya,220,119,43,Perlervault
C97,Himalaya Blue,106,174,219,Perlervault
C98,Waterfall,97,187,211,Perlervault
C99,Lagoon,39,155,190,Perlervault
C100,Electric Blue,0,167,227,Perlervault
C101,Pool Blue,0,119,202,Perlervault
C102,Caribbian Blue,0,90,169,Perlervault
C103,Deep Water,0,127,158,Perlervault
C104,Petrol Blue,0,125,145,Perlervault
C105,Wegdewood Blue,0,100,154,Perlervault
C106,Pond Blue,0,108,159,Perlervault
C107,Seashell Beige,207,193,121,Perlervault
C108,Beige,196,174,100,Perlervault
C109,Beach Beige,171,151,69,Perlervault
C110,Caffe Latté,151,129,56,Perlervault
C111,Oaktree Brown,144,124,65,Perlervault
C112,Khaki,182,174,132,Perlervault
C113,Light Greengray,165,159,101,Perlervault
C114,Mossy Green,147,141,84,Perlervault
C115,Earth Green,141,139,81,Perlervault
C116,Sage Green,127,126,73,Perlervault
C117,Pinetree Green,91,110,53,Perlervault
C118,Frosty Blue,138,213,201,Perlervault
C119,Polar Mint,124,210,165,Perlervault
C120,Celadon Green,114,172,154,Perlervault
C121,Eucalyptus,0,178,111,Perlervault
C122,Clover Field,62,183,36,Perlervault
C123,Pooltable Felt,13,117,53,Perlervault
C124,Snake Green,0,125,110,Perlervault
C125,Dark Eucalyptus,0,110,105,Perlervault
C126,Marsmallow Rose,223,195,225,Perlervault
C127,Light Grape,211,142,212,Perlervault
C128,Rosebud Pink,213,166,186,Perlervault
C129,Fuschia,214,102,142,Perlervault
C130,Candy Violet,184,170,217,Perlervault
C131,Flamingo,223,72,109,Perlervault
C132,Pink Plum,188,60,166,Perlervault
C133,Amethyst,128,56,151,Perlervault
C134,Moonlight Blue,167,186,225,Perlervault
C135,Summer Rain,175,184,223,Perlervault
C136,Azur Blue,107,154,212,Perlervault
C137,Cornflower Blue,90,137,206,Perlervault
C138,Forget Me Not,101,138,208,Perlervault
C139,Indigo,86,108,189,Perlervault
C140,Horizon Blue,77,116,198,Perlervault
C141,Cobolt,65,109,190,Perlervault
C142,Royal Blue,48,66,158,Perlervault
C143,Marine,2,66,136,Perlervault
C144,Pale Yellow Moss,214,202,106,Perlervault
C145,Bloodrose Red,157,26,56,Perlervault
C146,Spearmint,128,183,161,Perlervault
C147,Mocha,122,89,79,Perlervault
C148,Creme,239,219,161,Perlervault
C149,Iris Violet,136,132,208,Perlervault
C150,Forrest Green,52,86,33,Perlervault
C151,Lilac,174,173,220,Perlervault
C152,Pale Lilac,188,195,225,Perlervault
C153,Sahara Sand,227,192,154,Perlervault
C154,Sunkissed Teint,197,139,96,Perlervault
C155,Steel Grey,90,95,101,Perlervault
C156,Iron Grey,76,81,86,Perlervault
C157,Pepper,58,62,66,Perlervault
C45,Spring Green,93,219,93,Exodeca1
C55,Conifer,108,194,74,Exodeca1
C57,Fresh Red,188,4,35,Exodeca1
C59,Scarlett,83,26,35,Exodeca1
C61,Feta,241,235,156,Exodeca1
C62,Carnation,252,63,63,Exodeca1
C63,Pink Pearl,234,190,219,Exodeca1
C64,Rose,165,0,80,Exodeca1
C65,Mango,239,126,46,Exodeca1
C66,Wild Watermelon,252,108,133,Exodeca1
C67,Orchid,177,78,181,Exodeca1
C68,Toothpaste Blue,105,194,238,Exodeca1
CE01,Columbia Blue,195,206,214,felix-oq
CE02,Pale Cerulean,154,178,219,felix-oq
CE03,Silver Lake Blue,93,136,178,felix-oq
CE04,Sky Blue (Crayola),2,189,209,felix-oq
CE05,Maximum Blue Green,82,202,172,felix-oq
CE06,Bright Navy Blue,45,109,178,felix-oq
CE07,Black Shadows,194,163,183,felix-oq
CE08,Mountbatten Pink,138,88,119,felix-oq
CE09,Halayà Úbe,104,53,93,felix-oq
CE10,Deep Mauve,184,79,168,felix-oq
CE11,Heliotrope Magenta,176,47,164,felix-oq
CE12,Rajah,226,163,101,felix-oq
CE13,Earth Yellow,190,142,89,felix-oq
CE14,Chinese Bronze,168,116,67,felix-oq
CE15,Alloy Orange,160,110,82,felix-oq
CE16,Orchid Pink,249,193,215,felix-oq
CE17,Caput Mortuum,89,41,43,felix-oq
`,Nd=`
S01,White,234,238,243,Perlervault
S02,Burning Sand,238,146,124,Perlervault
S03,Tangerine,255,166,48,Perlervault
S04,Orange,235,96,39,Perlervault
S05,Tall Poppy,203,53,49,Perlervault
S06,Raspberry Pink,239,103,178,Perlervault
S07,Gray,149,150,152,Perlervault
S08,Emerald,31,196,103,Perlervault
S09,Dark Green,0,104,94,Perlervault
S10,Baby Blue,46,171,216,Perlervault
S11,Dark Blue,0,79,164,Perlervault
S12,Pastel Lavender,145,101,178,Perlervault
S13,Black,41,42,43,Perlervault
S14,Sandstorm,225,200,53,Perlervault
S15,Redwood,154,69,65,Perlervault
S16,Brown,101,70,61,Perlervault
S17,Light Brown,137,93,73,Perlervault
S18,Sand,220,163,132,Perlervault
S19,Bubble Gun,242,191,184,Perlervault
S20,Green,0,144,83,Perlervault
S21,Pastel Green,139,178,58,Perlervault
S22,Purple,72,51,126,Perlervault
S23,Royal Purple,100,79,164,Perlervault
S24,True Blue,0,120,191,Perlervault
S25,Hot Pink,220,81,154,Perlervault
S26,Magenta,218,67,131,Perlervault
S27,Yellow,234,193,37,Perlervault
S28,Lily Pink,221,161,204,Perlervault
S29,Pastel Yellow,225,211,103,Perlervault
S30,Shadow Green,158,201,205,Perlervault
S31,Sea Mist,178,215,206,Perlervault
S32,Beeswax,238,211,158,Perlervault
S33,Maverick,192,183,215,Perlervault
S34,Red,182,25,39,Perlervault
S35,Mona Lisa,225,204,210,Perlervault
S36,Old Pink,206,109,131,Perlervault
S37,Blue-Green,96,191,203,Perlervault
S38,Burgundy,163,19,74,Perlervault
S39,Yellow Orange,230,135,57,Perlervault
S40,Carnation Pink,225,130,176,Perlervault
S41,Copper,157,91,46,LThanda
S42,Silver,103,107,115,LThanda
S43,Dark Gray,112,117,123,Perlervault
S44,Sky Blue,167,205,222,Perlervault
S45,Medium Turquoise,0,165,161,Perlervault
S46,Bright Green,142,195,36,Perlervault
S47,Marigold,178,121,56,Perlervault
S48,Corn,236,192,61,Perlervault
S49,Mulberry Wood,146,30,93,Perlervault
S50,Mandys Pink,226,164,136,Perlervault
S51,Spring Sun,223,218,189,Perlervault
S52,Picasso,234,222,127,Perlervault
S53,Turquoise,85,164,217,Perlervault
S54,Light Blue,0,132,206,Perlervault
S55,Pistachio,151,207,135,Perlervault
S56,Bright Carrot,249,111,64,Perlervault
S57,Buccaneer,179,85,64,Perlervault
S58,Paprika,177,24,54,Perlervault
S59,Butterfly Bush,79,57,137,Perlervault
S60,Lavender,138,126,194,Perlervault
S61,Key Lomen Pie,205,192,63,Perlervault
S62,Green Tea,0,118,95,Perlervault
S63,Metallic Gold,105,96,70,LThanda
S64,Black Rock,54,56,77,Perlervault
S65,Canary,226,230,93,Perlervault
S66,Blaze Orange,229,83,60,Perlervault
S67,Vanilla,233,193,166,Perlervault
S68,Tan,204,155,116,Perlervault
S69,Mine Shaft,56,62,68,Perlervault
S70,Drark Algae,173,173,41,Perlervault
S71,Jade Green,0,125,43,Perlervault
S72,Light Sea Blue,104,196,210,Perlervault
S73,Steel Blue,90,176,191,Perlervault
S74,Azure,0,158,194,Perlervault
S75,Dark Steel Blue,0,132,178,Perlervault
S76,Sea Blue,0,147,169,Perlervault
S77,Ghost While,212,216,211,Perlervault
S78,Ash Grey,194,196,194,Perlervault
S79,Light Gray,167,172,173,Perlervault
S80,Dark Olive,143,142,60,Perlervault
S81,Deer,191,145,104,Perlervault
S82,Clay,170,116,78,Perlervault
S83,Sienna,187,104,51,Perlervault
S84,Deep Chestnut,190,93,101,Perlervault
S85,Red Wine,153,50,58,Perlervault
S86,Goldenrod,232,174,0,Perlervault
S87,Coral Red,236,98,94,Perlervault
S88,Dark Pink,214,39,121,Perlervault
S89,Charcoal Gray,86,90,94,Perlervault
S90,Pastel Orange,217,179,94,Perlervault
S91,Brunswick Green,21,56,56,Perlervault
S92,Dandelion,206,164,51,Perlervault
S93,Pale Skin,220,183,148,Perlervault
S94,Warm Blush,221,146,133,Perlervault
S95,Salmon,224,123,105,Perlervault
S96,Apricot,239,127,97,Perlervault
S97,Papaya,220,119,43,Perlervault
S98,Himalaya Blue,106,174,219,Perlervault
S99,Waterfall,97,187,211,Perlervault
S100,Lagoon,39,155,190,Perlervault
S101,Electric Blue,0,167,227,Perlervault
S102,Pool Blue,0,119,202,Perlervault
S103,Caribbian Blue,0,90,169,Perlervault
S104,Deep Water,0,127,158,Perlervault
S105,Petrol Blue,0,125,145,Perlervault
S106,Wegdewood Blue,0,100,154,Perlervault
S107,Pond Blue,0,108,159,Perlervault
S108,Seashell Beige,207,193,121,Perlervault
S109,Beige,196,174,100,Perlervault
S110,Beach Beige,171,151,69,Perlervault
S111,Caffe Latté,151,129,56,Perlervault
S112,Oaktree Brown,144,124,65,Perlervault
S113,Khaki,182,174,132,Perlervault
S114,Light Greengray,165,159,101,Perlervault
S115,Mossy Green,147,141,84,Perlervault
S116,Earth Green,141,139,81,Perlervault
S117,Sage Green,127,126,73,Perlervault
S118,Pinetree Green,91,110,53,Perlervault
S119,Frosty Blue,138,213,201,Perlervault
S120,Polar Mint,124,210,165,Perlervault
S121,Celadon Green,114,172,154,Perlervault
S122,Eucalyptus,0,178,111,Perlervault
S123,Clover Field,62,183,36,Perlervault
S124,Pooltable Felt,13,117,53,Perlervault
S125,Snake Green,0,125,110,Perlervault
S126,Dark Eucalyptus,0,110,105,Perlervault
S127,Marsmallow Rose,223,195,225,Perlervault
S128,Light Grape,211,142,212,Perlervault
S129,Rosebud Pink,213,166,186,Perlervault
S130,Fuschia,214,102,142,Perlervault
S131,Candy Violet,184,170,217,Perlervault
S132,Flamingo,223,72,109,Perlervault
S133,Pink Plum,188,60,166,Perlervault
S134,Amethyst,128,56,151,Perlervault
S135,Moonlight Blue,167,186,225,Perlervault
S136,Summer Rain,175,184,223,Perlervault
S137,Azur Blue,107,154,212,Perlervault
S138,Cornflower Blue,90,137,206,Perlervault
S139,Forget Me Not,101,138,208,Perlervault
S140,Indigo,86,108,189,Perlervault
S141,Horizon Blue,77,116,198,Perlervault
S142,Cobolt,65,109,190,Perlervault
S143,Royal Blue,48,66,158,Perlervault
S144,Marine,2,66,136,Perlervault
S145,Pale Yellow Moss,214,202,106,Perlervault
S146,Bloodrose Red,157,26,56,Perlervault
S147,Spearmint,128,183,161,Perlervault
S148,Mocha,122,89,79,Perlervault
S149,Creme,239,219,161,Perlervault
S150,Iris Violet,136,132,208,Perlervault
S151,Forrest Green,52,86,33,Perlervault
S152,Lilac,174,173,220,Perlervault
S153,Pale Lilac,188,195,225,Perlervault
S154,Sahara Sand,227,192,154,Perlervault
S155,Sunkissed Teint,197,139,96,Perlervault
S156,Steel Grey,90,95,101,Perlervault
S157,Iron Grey,76,81,86,Perlervault
S158,Pepper,58,62,66,Perlervault
S159,Oslo Gray,130,135,139,Perlervault
SE1,Moon,241,244,250,Exodeca1
SE2,Raincloud,162,178,211,Exodeca1
SE3,Winter,131,166,220,Exodeca1
SE4,Tide,112,216,237,Exodeca1
SE5,Aquamarine,105,227,213,Exodeca1
SE6,Neptune,042,099,200,Exodeca1
SE7,Rose Quartz,213,174,201,Exodeca1
SE8,Mauve,175,115,154,Exodeca1
SE9,Dark Mauve,112,075,109,Exodeca1
SE10,Wild Berry,217,119,205,Exodeca1
SE11,Sugar Plum,182,067,172,Exodeca1
SE12,Desert,222,177,129,Exodeca1
SE13,Peanut,188,157,119,Exodeca1
SE14,Toffee,172,127,093,Exodeca1
SE15,Bark,163,126,102,Exodeca1
SG1,Glow Yellow,198,192,180,LThanda
SG2,Glow Pink,223,171,188,LThanda
SG3,Glow Blue,111,173,193,LThanda
SL1,Glitter Blue,54,135,178,LThanda
SL2,Glitter Green,17,124,82,LThanda
SL3,Glitter Red,194,41,51,LThanda
SL4,Glitter Yellow,205,189,0,LThanda
SN1,Neon Orange,255,116,5,LThanda
SN2,Neon Green,1,198,62,LThanda
SN3,Neon Yellow,242,243,60,LThanda
SN4,Neon Rose,255,71,122,LThanda
SP1,Pearlescent Green,147,202,135,LThanda
SP2,Pearlescent Tangerine,254,127,84,LThanda
SP3,Pearlescent Orange,240,161,73,LThanda
SP4,Pearlescent Pink,220,158,169,LThanda
SP5,Pearlescent Red,214,60,83,LThanda
SP6,Pearlescent Blue,44,78,151,LThanda
SP7,Pearlescent Purple,100,66,126,LThanda
SP8,Pearlescent White,224,219,202,LThanda
ST1,Transparent,199,188,184,LThanda
ST2,Transparent Pink,249,84,152,LThanda
ST3,Transparent Tangering,255,124,69,LThanda
ST4,Transparent Yellow,218,223,61,LThanda
ST5,Transparent Green,15,174,88,LThanda
ST6,Transparent Purple,132,119,179,LThanda
`,Od=Is({id:"hama-midi-community",brand:"Hama",name:"Hama Midi（92 色）",source:"https://github.com/maxcleme/beadcolors/blob/master/raw/hama.csv",csv:Td}),Id=Is({id:"artkal-c-community",brand:"Artkal",name:"Artkal C 2.6 mm（174 色）",source:"https://github.com/maxcleme/beadcolors/blob/master/raw/artkal_c.csv",csv:Bd}),Hd=Is({id:"artkal-s-community",brand:"Artkal",name:"Artkal S 5 mm（199 色）",source:"https://github.com/maxcleme/beadcolors/blob/master/raw/artkal_s.csv",csv:Nd}),Dd={id:"perler-standard-2025",brand:"Perler",name:"Perler 标准色（屏幕参考）",source:"https://perler.com/content/uploaded_images/Perler_Bead-Color-Reference_2025.pdf",colors:[["white","White","白色","#F4F4EF"],["cream","Creme","奶油色","#F1E4C2"],["toasted-marshmallow","Toasted Marshmallow","烤棉花糖","#D8C5B4"],["sand","Sand","沙色","#D8B58A"],["tan","Tan","棕褐色","#B8875E"],["light-brown","Light Brown","浅棕色","#9A6547"],["brown","Brown","棕色","#613E2C"],["dark-brown","Dark Brown","深棕色","#3D2924"],["apricot","Apricot","杏色","#F3C3A5"],["peach","Peach","蜜桃色","#F3B38F"],["blush","Blush","腮红色","#ED927E"],["light-pink","Light Pink","浅粉色","#F3B7CD"],["bubblegum","Bubblegum","泡泡糖粉","#EE78A8"],["pink","Pink","粉色","#DA4E91"],["raspberry","Raspberry","覆盆子色","#A93064"],["plum","Plum","李子色","#73355E"],["red","Red","红色","#D83B3E"],["cranapple","Cranapple","蔓越莓红","#9D2735"],["hot-coral","Hot Coral","珊瑚红","#F06055"],["rust","Rust","铁锈红","#A9472D"],["brick","Brick","砖红色","#994D3A"],["orange","Orange","橙色","#F37932"],["cheddar","Cheddar","切达橙","#F5A623"],["butterscotch","Butterscotch","奶糖色","#D88B2C"],["rich-butter","Rich Butter","浓黄油色","#EBC65E"],["yellow","Yellow","黄色","#F5D547"],["pastel-yellow","Pastel Yellow","粉彩黄","#F5E88A"],["prickly-pear","Prickly Pear","仙人掌黄绿","#C8D746"],["kiwi-lime","Kiwi Lime","奇异果绿","#8BC34A"],["pastel-green","Pastel Green","粉彩绿","#A8D69B"],["light-green","Light Green","浅绿色","#70C486"],["green","Green","绿色","#3C9B61"],["shamrock","Shamrock","三叶草绿","#16845B"],["dark-green","Dark Green","深绿色","#236044"],["evergreen","Evergreen","常青绿","#194638"],["sage","Sage","鼠尾草绿","#94A58C"],["parrot-green","Parrot Green","鹦鹉绿","#31A88A"],["toothpaste","Toothpaste","薄荷色","#7DCEBE"],["turquoise","Turquoise","青绿色","#27A8B5"],["lagoon","Lagoon","潟湖蓝","#268F91"],["pastel-blue","Pastel Blue","粉彩蓝","#A7D7E8"],["light-blue","Light Blue","浅蓝色","#5CB9DD"],["periwinkle-blue","Periwinkle Blue","长春花蓝","#7587C9"],["blueberry-cream","Blueberry Cream","蓝莓奶油","#8EA7D4"],["cobalt","Cobalt","钴蓝色","#2866A3"],["dark-blue","Dark Blue","深蓝色","#264B84"],["midnight","Midnight","午夜蓝","#252C57"],["pastel-lavender","Pastel Lavender","粉彩薰衣草","#C1A7D7"],["purple","Purple","紫色","#76519B"],["magenta","Magenta","品红色","#B63F8D"],["light-grey","Light Grey","浅灰色","#C8C8C2"],["mist","Mist","雾灰色","#AEB8B5"],["grey","Grey","灰色","#858681"],["stone","Stone","石色","#77756F"],["dark-grey","Dark Grey","深灰色","#50524F"],["black","Black","黑色","#242424"]].map(([e,t,n,r])=>({id:e,code:t,name:n,hex:r}))},kn=[Md,Od,Id,Hd,Dd];function Ld(e){return kn.find(t=>t.id===e)||kn[0]}function Qt(e){const t=Number.parseInt(e.replace("#",""),16);return{r:t>>16&255,g:t>>8&255,b:t&255}}function Vr(e){const t=e/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4}function xr({r:e,g:t,b:n}){const r=Vr(e),s=Vr(t),l=Vr(n),o=(r*.4124+s*.3576+l*.1805)/.95047,a=r*.2126+s*.7152+l*.0722,i=(r*.0193+s*.1192+l*.9505)/1.08883,u=d=>d>.008856?Math.cbrt(d):7.787*d+16/116,c=u(o),f=u(a),h=u(i);return{l:116*f-16,a:500*(c-f),b:200*(f-h)}}function di(e){return e.map((t,n)=>({...t,index:n,rgb:Qt(t.hex),lab:xr(Qt(t.hex))}))}function Hs(e,t){const n=Ae=>Ae*Math.PI/180,r=Ae=>Ae*180/Math.PI,s=Math.hypot(e.a,e.b),l=Math.hypot(t.a,t.b),o=(s+l)/2,a=.5*(1-Math.sqrt(o**7/(o**7+25**7))),i=(1+a)*e.a,u=(1+a)*t.a,c=Math.hypot(i,e.b),f=Math.hypot(u,t.b),h=(Ae,qe)=>{const we=r(Math.atan2(qe,Ae));return we>=0?we:we+360},d=h(i,e.b),y=h(u,t.b),C=t.l-e.l,P=f-c;let x=y-d;c*f===0?x=0:x>180?x-=360:x<-180&&(x+=360);const _=2*Math.sqrt(c*f)*Math.sin(n(x/2)),B=(e.l+t.l)/2,A=(c+f)/2;let R=d+y;c*f===0?R=d+y:Math.abs(d-y)<=180?R/=2:R<360?R=(R+360)/2:R=(R-360)/2;const q=1-.17*Math.cos(n(R-30))+.24*Math.cos(n(2*R))+.32*Math.cos(n(3*R+6))-.2*Math.cos(n(4*R-63)),Q=1+.015*(B-50)**2/Math.sqrt(20+(B-50)**2),ie=1+.045*A,Pe=1+.015*A*q,me=-2*Math.sqrt(A**7/(A**7+25**7))*Math.sin(n(60*Math.exp(-(((R-275)/25)**2)))),Re=C/Q,De=P/ie,Fe=_/Pe;return Math.sqrt(Re**2+De**2+Fe**2+me*De*Fe)}function $d(e,t){const n=xr(e),r=Math.hypot(n.a,n.b);let s=0,l=Number.POSITIVE_INFINITY;for(const o of t){const a=Math.hypot(o.lab.a,o.lab.b),i=r>7&&a<r*.32?(r-a)*.18:0,u=Hs(n,o.lab)+i;u<l&&(l=u,s=o.index)}return s}function Fd(e,t,n,r,s,l={}){var f,h;if(!e||!(t!=null&&t.length))return;const o=l.cellSize||18,a=l.showGrid!==!1,i=l.showCodes===!0,u=l.mode||"pixel";e.width=n*o,e.height=r*o;const c=e.getContext("2d");c.clearRect(0,0,e.width,e.height),c.fillStyle=l.background||"#f4f1eb",c.fillRect(0,0,e.width,e.height);for(let d=0;d<r;d+=1)for(let y=0;y<n;y+=1){const C=t[d*n+y];if(C<0||!s[C])continue;const{hex:P}=s[C],x=y*o+o/2,_=d*o+o/2;if(u==="pixel"||o<9)c.fillStyle=P,c.fillRect(y*o,d*o,o,o);else{c.beginPath(),c.arc(x,_,o*.42,0,Math.PI*2),c.fillStyle=P,c.fill();const B=Qt(P),A=(B.r*299+B.g*587+B.b*114)/1e3;c.beginPath(),c.arc(x,_,Math.max(1,o*.105),0,Math.PI*2),c.fillStyle=A>170?"rgba(40,36,32,.24)":"rgba(255,255,255,.45)",c.fill()}}if(i&&o>=12){c.textAlign="center",c.textBaseline="middle",c.font=`700 ${Math.max(6,Math.floor(o*.34))}px system-ui, sans-serif`;for(let d=0;d<r;d+=1)for(let y=0;y<n;y+=1){const C=t[d*n+y],P=s[C];if(!P)continue;const x=Qt(P.hex),_=(x.r*299+x.g*587+x.b*114)/1e3;c.fillStyle=_>158?"#25221f":"#ffffff",c.fillText(P.code,y*o+o/2,d*o+o/2+.5)}}if(a){c.lineWidth=1;for(let d=0;d<=n;d+=1)c.beginPath(),c.moveTo(d*o+.5,0),c.lineTo(d*o+.5,e.height),c.strokeStyle=d%10===0?"rgba(35,33,30,.42)":d%5===0?"rgba(35,33,30,.23)":"rgba(35,33,30,.09)",c.stroke();for(let d=0;d<=r;d+=1)c.beginPath(),c.moveTo(0,d*o+.5),c.lineTo(e.width,d*o+.5),c.strokeStyle=d%10===0?"rgba(35,33,30,.42)":d%5===0?"rgba(35,33,30,.23)":"rgba(35,33,30,.09)",c.stroke()}if(((f=l.symmetry)!=null&&f.horizontal||(h=l.symmetry)!=null&&h.vertical)&&(c.save(),c.setLineDash([6,4]),c.strokeStyle="rgba(218, 92, 108, .9)",c.lineWidth=1.5,l.symmetry.horizontal&&(c.beginPath(),c.moveTo(e.width/2,0),c.lineTo(e.width/2,e.height),c.stroke()),l.symmetry.vertical&&(c.beginPath(),c.moveTo(0,e.height/2),c.lineTo(e.width,e.height/2),c.stroke()),c.restore()),l.selection){const d=l.selection,y=Math.min(d.startColumn,d.endColumn),C=Math.min(d.startRow,d.endRow),P=Math.abs(d.endColumn-d.startColumn)+1,x=Math.abs(d.endRow-d.startRow)+1;c.save(),c.setLineDash([5,3]),c.lineWidth=2,c.strokeStyle="#da5c6c",c.strokeRect(y*o+1,C*o+1,P*o-2,x*o-2),c.restore()}}function Fn(e,t){const n=new Map;for(const r of e||[])r>=0&&n.set(r,(n.get(r)||0)+1);return[...n.entries()].map(([r,s])=>({...t[r],index:r,count:s})).sort((r,s)=>s.count-r.count)}function hi(e,t,n){return e?{left:Math.max(0,Math.min(e.startColumn,e.endColumn)),top:Math.max(0,Math.min(e.startRow,e.endRow)),right:Math.min(t-1,Math.max(e.startColumn,e.endColumn)),bottom:Math.min(n-1,Math.max(e.startRow,e.endRow))}:{left:0,top:0,right:t-1,bottom:n-1}}function Ds(e,t,n,r={}){const s=Math.floor(e/t),l=e%t,o=new Set([e]);return r.horizontal&&o.add(s*t+(t-l-1)),r.vertical&&o.add((n-s-1)*t+l),r.horizontal&&r.vertical&&o.add((n-s-1)*t+(t-l-1)),[...o]}function Gd(e,t,n,r,s,l={}){if(r<0||r>=e.length)return new Int16Array(e);const o=e[r];if(o===s)return new Int16Array(e);const a=new Int16Array(e),i=new Uint8Array(e.length),u=[r];i[r]=1;for(let c=0;c<u.length;c+=1){const f=u[c],h=Math.floor(f/t),d=f%t;for(const C of Ds(f,t,n,l))a[C]=s;const y=[d>0?f-1:-1,d<t-1?f+1:-1,h>0?f-t:-1,h<n-1?f+t:-1];for(const C of y)C>=0&&!i[C]&&e[C]===o&&(i[C]=1,u.push(C))}return a}function jd(e,t,n,r,s,l={}){const o=new Int16Array(e),{left:a,top:i,right:u,bottom:c}=hi(r,t,n);for(let f=i;f<=c;f+=1)for(let h=a;h<=u;h+=1){const d=f*t+h;for(const y of Ds(d,t,n,l))o[y]=s}return o}function Gl(e,t,n){const r=new Int16Array(e);if(t===n)return r;for(let s=0;s<r.length;s+=1)r[s]===t&&(r[s]=n);return r}function Vd(e,t,n,r,s=null){const l=new Int16Array(e),{left:o,top:a,right:i,bottom:u}=hi(s,t,n);for(let c=a;c<=u;c+=1)for(let f=o;f<=i;f+=1){const h=c*t+f,d=r==="horizontal"?i-(f-o):f,y=r==="vertical"?u-(c-a):c;l[y*t+d]=e[h]}return l}function pi(e,t,n){const r=Fn(e,t),s=Math.max(2,Number(n)||t.length);if(r.length<=s)return new Int16Array(e);const l=r.slice(0,s),o=di(l),a=new Map;for(const u of r.slice(s)){const c=xr(Qt(u.hex));let f=l[0].index,h=Number.POSITIVE_INFINITY;for(const d of o){const y=Hs(c,d.lab);y<h&&(h=y,f=l[d.index].index)}a.set(u.index,f)}const i=new Int16Array(e);for(let u=0;u<i.length;u+=1)a.has(i[u])&&(i[u]=a.get(i[u]));return i}function zd(e,t,n,r=1){let s=new Int16Array(e);const l=[-1,0,1];for(let o=0;o<r;o+=1){const a=s,i=new Int16Array(a);for(let u=0;u<n;u+=1)for(let c=0;c<t;c+=1){const f=u*t+c,h=a[f];if(h<0)continue;const d=new Map;let y=0;for(const x of l)for(const _ of l){if(!_&&!x)continue;const B=c+_,A=u+x;if(B<0||A<0||B>=t||A>=n)continue;const R=a[A*t+B];R<0||(R===h&&(y+=1),d.set(R,(d.get(R)||0)+1))}const[C,P]=[...d.entries()].sort((x,_)=>_[1]-x[1])[0]||[];y<=1&&C!==void 0&&C!==h&&P>=4&&(i[f]=C)}s=i}return s}function Ud(e,t,n=8,r=6){const s=Fn(e,t),l=new Map(s.map(a=>[a.index,xr(Qt(a.hex))])),o=[];for(let a=0;a<s.length;a+=1)for(let i=a+1;i<s.length;i+=1){const u=s[a],c=s[i],f=Hs(l.get(u.index),l.get(c.index));if(f>r)continue;const h=u.count<=c.count?u:c,d=h===u?c:u;o.push({source:h,target:d,distance:f})}return o.sort((a,i)=>a.distance-i.distance).slice(0,n)}async function Wd(e){return"createImageBitmap"in window?createImageBitmap(e,{imageOrientation:"from-image"}):new Promise((t,n)=>{const r=URL.createObjectURL(e),s=new Image;s.onload=()=>{URL.revokeObjectURL(r),t(s)},s.onerror=()=>{URL.revokeObjectURL(r),n(new Error("无法读取这张图片"))},s.src=r})}function mi(e,t,n,r=1,s=50,l=50){const o=e/t;let a=e,i=t;o>n?a=t*n:i=e/n,a/=r,i/=r;const u=a/2+(e-a)*(s/100),c=i/2+(t-i)*(l/100);return{x:Math.max(0,Math.min(e-a,u-a/2)),y:Math.max(0,Math.min(t-i,c-i/2)),width:a,height:i}}function qd(e,t,n){if(!e||!t)return;const{columns:r,rows:s,zoom:l,focusX:o,focusY:a}=n,i=r/s;e.width=520,e.height=260;const u=mi(t.width,t.height,i,l,o,a),c=e.getContext("2d");c.fillStyle="#23211e",c.fillRect(0,0,e.width,e.height);const f=Math.min(e.width,e.height*i),h=f/i,d=(e.width-f)/2,y=(e.height-h)/2;c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high",c.drawImage(t,u.x,u.y,u.width,u.height,d,y,f,h),c.strokeStyle="rgba(255,255,255,.55)",c.strokeRect(d+.5,y+.5,f-1,h-1)}function Kd(e,t,n){const{columns:r,rows:s,zoom:l,focusX:o,focusY:a}=t,i=4,u=document.createElement("canvas");u.width=r*i,u.height=s*i;const c=u.getContext("2d"),f=mi(e.width,e.height,r/s,l,o,a);c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high",c.drawImage(e,f.x,f.y,f.width,f.height,0,0,u.width,u.height);const h=document.createElement("canvas");h.width=r,h.height=s;const d=h.getContext("2d",{willReadFrequently:!0});d.imageSmoothingEnabled=!0,d.imageSmoothingQuality="high",d.clearRect(0,0,r,s),d.drawImage(u,0,0,r,s);const y=d.getImageData(0,0,r,s).data,C=Jd(y,r,s,t),P=di(n),x=new Int16Array(r*s);for(let _=0;_<x.length;_+=1){const B=_*4;x[_]=y[B+3]<48?-1:$d({r:C[B],g:C[B+1],b:C[B+2]},P)}return pi(x,n,t.maxColors)}function Jd(e,t,n,r){const s=(r.brightness??100)/100,l=(r.contrast??100)/100,o=(r.saturation??100)/100,a=(r.detail??0)/100,i=new Float32Array(e.length),u=h=>Math.max(0,Math.min(255,h));for(let h=0;h<e.length;h+=4){const d=e[h],y=e[h+1],C=e[h+2],P=d*.2126+y*.7152+C*.0722;i[h]=u(((P+(d-P)*o-128)*l+128)*s),i[h+1]=u(((P+(y-P)*o-128)*l+128)*s),i[h+2]=u(((P+(C-P)*o-128)*l+128)*s),i[h+3]=e[h+3]}if(a<=0)return i;const c=new Float32Array(i),f=[[-1,0],[1,0],[0,-1],[0,1]];for(let h=0;h<n;h+=1)for(let d=0;d<t;d+=1){const y=(h*t+d)*4;if(i[y+3]<48)continue;const C=[0,0,0];let P=0;for(const[x,_]of f){const B=d+x,A=h+_;if(B<0||A<0||B>=t||A>=n)continue;const R=(A*t+B)*4;i[R+3]<48||(C[0]+=i[R],C[1]+=i[R+1],C[2]+=i[R+2],P+=1)}if(P)for(let x=0;x<3;x+=1){const _=C[x]/P;c[y+x]=u(i[y+x]+(i[y+x]-_)*a)}}return c}const zr=595.28,Ur=841.89;function gi(e,t){const n=URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=t,r.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}function vi(e){const{r:t,g:n,b:r}=Qt(e);return(t*299+n*587+r*114)/1e3>158?"#26231f":"#ffffff"}function gn(e,t,n,r,s,l="#27241f"){e.font=s,e.fillStyle=l,e.textAlign="center",e.textBaseline="middle",e.fillText(t,n,r)}function yi(e,t,n,r,s={}){const l=s.startColumn||0,o=s.startRow||0,a=Math.min(t,s.endColumn??t),i=Math.min(n,s.endRow??n),u=a-l,c=i-o,f=s.cellSize||28,h=Math.max(30,Math.round(f*1.2)),d=s.titleHeight??58,y=s.footerHeight??26,C=document.createElement("canvas");C.width=h*2+u*f,C.height=d+h*2+c*f+y;const P=C.getContext("2d");P.fillStyle="#fbfaf7",P.fillRect(0,0,C.width,C.height),P.textAlign="left",P.textBaseline="middle",P.fillStyle="#24211d",P.font="700 20px system-ui, sans-serif",P.fillText(s.title||`${t} × ${n} 拼豆图纸`,h,d/2-4),s.subtitle&&(P.textAlign="right",P.font="12px system-ui, sans-serif",P.fillStyle="#6f6961",P.fillText(s.subtitle,C.width-h,d/2-4));const x=h,_=d+h,B=Math.max(7,Math.min(12,Math.floor(f*.36)));for(let A=o;A<i;A+=1)for(let R=l;R<a;R+=1){const q=R-l,Q=A-o,ie=x+q*f,Pe=_+Q*f,me=r[e[A*t+R]];P.fillStyle=(me==null?void 0:me.hex)||"#ffffff",P.fillRect(ie,Pe,f,f),me&&gn(P,me.code,ie+f/2,Pe+f/2+.5,`700 ${B}px system-ui, sans-serif`,vi(me.hex))}for(let A=0;A<=u;A+=1){const R=l+A,q=x+A*f+.5;P.beginPath(),P.moveTo(q,_),P.lineTo(q,_+c*f),P.strokeStyle=R%10===0?"#4d4943":R%5===0?"#77716a":"#c8c4bd",P.lineWidth=R%10===0?1.5:1,P.stroke()}for(let A=0;A<=c;A+=1){const R=o+A,q=_+A*f+.5;P.beginPath(),P.moveTo(x,q),P.lineTo(x+u*f,q),P.strokeStyle=R%10===0?"#4d4943":R%5===0?"#77716a":"#c8c4bd",P.lineWidth=R%10===0?1.5:1,P.stroke()}for(let A=0;A<u;A+=1){const R=String(l+A+1),q=x+A*f+f/2;gn(P,R,q,_-h/2,"600 11px system-ui, sans-serif","#56514b"),gn(P,R,q,_+c*f+h/2,"600 11px system-ui, sans-serif","#56514b")}for(let A=0;A<c;A+=1){const R=String(o+A+1),q=_+A*f+f/2;gn(P,R,x-h/2,q,"600 11px system-ui, sans-serif","#56514b"),gn(P,R,x+u*f+h/2,q,"600 11px system-ui, sans-serif","#56514b")}return C}function bi(e,t,n){const{x:r,y:s,width:l,columns:o=5,rowHeight:a=42}=n,i=10,u=(l-i*(o-1))/o;return t.forEach((c,f)=>{const h=f%o,d=Math.floor(f/o),y=r+h*(u+i),C=s+d*a;e.fillStyle="#ffffff",e.strokeStyle="#d4d0c9",e.lineWidth=1,e.fillRect(y,C,u,a-8),e.strokeRect(y+.5,C+.5,u-1,a-9);const P=Math.min(58,Math.max(42,u*.28));e.fillStyle=c.hex,e.fillRect(y,C,P,a-8),e.textBaseline="middle",e.font="700 12px system-ui, sans-serif",e.fillStyle=vi(c.hex),e.textAlign="center",e.fillText(c.code,y+P/2,C+(a-8)/2),e.textAlign="right",e.fillStyle="#37332e",e.font="600 12px system-ui, sans-serif",e.fillText(String(c.count),y+u-10,C+(a-8)/2)}),Math.ceil(t.length/o)*a}function Yd(e,t,n,r,s={}){const l=Fn(e,r),o=Math.max(22,Math.min(30,Math.floor(3600/Math.max(t,n)))),a=yi(e,t,n,r,{cellSize:o,title:`${t} × ${n} 拼豆图纸`,subtitle:s.paletteName||"",footerHeight:0}),i=Math.max(4,Math.min(16,Math.floor((a.width-54)/200))),u=Math.ceil(l.length/i),c=82,f=Math.max(90,u*42),h=document.createElement("canvas");h.width=a.width,h.height=a.height+c+f+26;const d=h.getContext("2d");d.fillStyle="#fbfaf7",d.fillRect(0,0,h.width,h.height),d.drawImage(a,0,0);const y=a.height+34;d.textAlign="left",d.textBaseline="middle",d.fillStyle="#24211d",d.font="700 22px system-ui, sans-serif";const C=l.reduce((P,x)=>P+x.count,0);return d.fillText(`拼豆数量统计（${C} 颗）`,32,y),d.font="12px system-ui, sans-serif",d.fillStyle="#6f6961",d.textAlign="right",d.fillText(`${l.length} 种颜色`,h.width-32,y),bi(d,l,{x:32,y:a.height+c,width:h.width-64,columns:i}),h}function Qd(e,t,n=""){const r=Fn(e,t),s=96,l=[];for(let o=0;o<r.length;o+=s){const a=r.slice(o,o+s),i=document.createElement("canvas");i.width=900,i.height=1273;const u=i.getContext("2d");u.fillStyle="#fbfaf7",u.fillRect(0,0,i.width,i.height),u.fillStyle="#24211d",u.textAlign="left",u.textBaseline="middle",u.font="700 30px system-ui, sans-serif";const c=r.reduce((f,h)=>f+h.count,0);u.fillText(`拼豆数量统计（${c} 颗）`,52,62),u.font="15px system-ui, sans-serif",u.fillStyle="#6f6961",u.fillText(`${n} · ${r.length} 种颜色`,52,101),bi(u,a,{x:52,y:142,width:796,columns:4,rowHeight:43}),u.textAlign="right",u.font="14px system-ui, sans-serif",u.fillText(`统计表 ${Math.floor(o/s)+1} / ${Math.ceil(r.length/s)}`,848,1230),l.push(i)}return l}function Xd(e){const t=atob(e.split(",")[1]),n=new Uint8Array(t.length);for(let r=0;r<t.length;r+=1)n[r]=t.charCodeAt(r);return n}function Zd(e){const t=new TextEncoder,n=new Map,r=e.map((u,c)=>`${3+c*3} 0 R`).join(" ");n.set(1,t.encode("<< /Type /Catalog /Pages 2 0 R >>")),n.set(2,t.encode(`<< /Type /Pages /Kids [${r}] /Count ${e.length} >>`)),e.forEach((u,c)=>{const f=3+c*3,h=f+1,d=f+2,y=Xd(u.toDataURL("image/jpeg",.92)),C=Math.min((zr-30)/u.width,(Ur-30)/u.height),P=u.width*C,x=u.height*C,_=(zr-P)/2,B=(Ur-x)/2,A=t.encode(`q
${P.toFixed(2)} 0 0 ${x.toFixed(2)} ${_.toFixed(2)} ${B.toFixed(2)} cm
/Im${c} Do
Q`);n.set(f,t.encode(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${zr} ${Ur}] /Resources << /XObject << /Im${c} ${h} 0 R >> >> /Contents ${d} 0 R >>`));const R=t.encode(`<< /Type /XObject /Subtype /Image /Width ${u.width} /Height ${u.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${y.length} >>
stream
`),q=t.encode(`
endstream`),Q=new Uint8Array(R.length+y.length+q.length);Q.set(R),Q.set(y,R.length),Q.set(q,R.length+y.length),n.set(h,Q);const ie=t.encode(`<< /Length ${A.length} >>
stream
`),Pe=t.encode(`
endstream`),me=new Uint8Array(ie.length+A.length+Pe.length);me.set(ie),me.set(A,ie.length),me.set(Pe,ie.length+A.length),n.set(d,me)});const s=[t.encode(`%PDF-1.4
%âãÏÓ
`)],l=[0];let o=s[0].length;for(let u=1;u<=n.size;u+=1){l[u]=o;const c=t.encode(`${u} 0 obj
`),f=t.encode(`
endobj
`);s.push(c,n.get(u),f),o+=c.length+n.get(u).length+f.length}const a=o,i=[`xref
0 ${n.size+1}
`,`0000000000 65535 f 
`];for(let u=1;u<=n.size;u+=1)i.push(`${String(l[u]).padStart(10,"0")} 00000 n 
`);return i.push(`trailer
<< /Size ${n.size+1} /Root 1 0 R >>
startxref
${a}
%%EOF`),s.push(t.encode(i.join(""))),new Blob(s,{type:"application/pdf"})}function eh(e,t,n,r,s,l={}){if(!(e!=null&&e.length))return;Yd(e,t,n,r,l).toBlob(a=>{a&&gi(a,s)},"image/png")}function th(e,t,n,r,s,l={}){if(!(e!=null&&e.length))return;const o=[],a=Math.max(8,Number(l.boardSize)||29),i=a,u=Math.ceil(t/a),c=Math.ceil(n/i);for(let f=0;f<c;f+=1)for(let h=0;h<u;h+=1)o.push(yi(e,t,n,r,{startColumn:h*a,endColumn:(h+1)*a,startRow:f*i,endRow:(f+1)*i,cellSize:32,title:`${t} × ${n} 拼豆图纸`,subtitle:`区域 ${h+1}/${u} · ${f+1}/${c}`}));o.push(...Qd(e,r,l.paletteName||"")),gi(Zd(o),s)}const Ci=1;function nh({cells:e,columns:t,rows:n,paletteId:r,settings:s,inventory:l}){return{type:"sakura-tools/pixel-beads",version:Ci,savedAt:new Date().toISOString(),paletteId:r,grid:{columns:t,rows:n,cells:Array.from(e)},settings:{beadSize:s.beadSize,detail:s.detail,saturation:s.saturation,contrast:s.contrast,brightness:s.brightness,maxColors:s.maxColors},inventory:{...l}}}function rh(e,t){var a,i;const n=JSON.parse(e);if((n==null?void 0:n.type)!=="sakura-tools/pixel-beads"||n.version!==Ci)throw new Error("不是受支持的 Sakura Tools 拼豆工程文件");const r=t.find(u=>u.id===n.paletteId);if(!r)throw new Error("工程使用的色板在当前版本中不可用");const s=Number((a=n.grid)==null?void 0:a.columns),l=Number((i=n.grid)==null?void 0:i.rows);if(!Number.isInteger(s)||!Number.isInteger(l)||s<8||l<8||s>150||l>150)throw new Error("工程网格尺寸无效");if(!Array.isArray(n.grid.cells)||n.grid.cells.length!==s*l)throw new Error("工程网格数据不完整");const o=new Int16Array(n.grid.cells);if([...o].some(u=>u<-1||u>=r.colors.length))throw new Error("工程中包含无效色号");return{...n,palette:r,columns:s,rows:l,cells:o}}function jl(e,t,n="application/json"){const r=new Blob([e],{type:n}),s=URL.createObjectURL(r),l=document.createElement("a");l.href=s,l.download=t,l.click(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function sh(e,t){const n=[["色号","颜色","需要","已有","缺少"]];for(const r of e){const s=Math.max(0,Number(t[r.id])||0);n.push([r.code,r.name,r.count,s,Math.max(0,r.count-s)])}return`\uFEFF${n.map(r=>r.map(s=>`"${String(s).replaceAll('"','""')}"`).join(",")).join(`\r
`)}`}const lh={class:"bead-studio"},oh={class:"upload-symbol"},ih=["disabled"],ah={key:0,class:"error-message"},uh={class:"bead-flow","aria-label":"工作流程"},ch={class:"bead-workbench"},fh={class:"bead-sidebar bead-source-panel"},dh={class:"bead-panel-heading"},hh={key:1,class:"project-preview"},ph=["title"],mh={key:2,class:"error-message"},gh={class:"bead-field-row"},vh={class:"bead-size-presets","aria-label":"常用方形网格预设"},yh=["onClick"],bh={class:"bead-range"},Ch={class:"bead-range"},Ph={class:"bead-range"},Ah={class:"bead-range compact-range"},wh={class:"bead-range compact-range"},Sh={class:"bead-range compact-range"},xh={class:"bead-range compact-range"},kh={class:"bead-select"},_h={class:"bead-optimize-actions"},Eh=["disabled"],Rh=["disabled"],Mh={class:"bead-segmented"},Th={class:"bead-select"},Bh=["value"],Nh=["disabled"],Oh={class:"bead-editor-panel"},Ih={class:"bead-toolbar"},Hh={class:"bead-tool-group","aria-label":"绘制工具"},Dh={class:"bead-tool-group compact"},Lh=["disabled","title"],$h=["disabled","title"],Fh={class:"canvas-zoom"},Gh={class:"preview-toggle","aria-label":"预览样式"},jh={class:"bead-editor-actions"},Vh={class:"bead-canvas-status"},zh={class:"bead-sidebar bead-color-panel"},Uh={class:"bead-panel-heading"},Wh={class:"bead-palette","aria-label":"拼豆色板"},qh=["title","onClick"],Kh={class:"bead-materials"},Jh={class:"bead-usage"},Yh=["onClick","onKeydown"],Qh={title:"需要数量"},Xh=["onUpdate:modelValue"],Zh={key:0},e2={key:1,class:"enough"},t2={key:0,class:"merge-suggestions"},n2=["onClick"],r2={class:"bead-export"},s2={class:"project-actions"},l2={class:"local-processing"},o2={__name:"PixelBeadsTool",setup(e){const t=ne(null),n=ne(null),r=ne(null),s=ne(null),l=ne(null),o=Qr(null),a=ne(""),i=ne(""),u=ne(!1),c=ne(!1),f=Qr(new Int16Array),h=Lt({columns:0,rows:0}),d=Lt({columns:48,rows:48,zoom:1,focusX:50,focusY:50,detail:32,saturation:106,contrast:104,brightness:100,maxColors:0,beadSize:5,paletteId:kn[0].id}),y=ne("brush"),C=ne(0),P=ne(16),x=ne(!0),_=ne(!1),B=ne("pixel"),A=ne(null),R=Lt({horizontal:!1,vertical:!1}),q=Lt({}),Q=ne([]),ie=ne([]);let Pe=null,me=-1,Re=null,De=0;const Fe=[29,48,52,80,100],Ae=ye(()=>Ld(d.paletteId)),qe=ye(()=>Fn(f.value,Ae.value.colors)),we=ye(()=>qe.value.reduce((D,g)=>D+g.count,0)),ue=ye(()=>({width:(h.columns*d.beadSize/10).toFixed(1),height:(h.rows*d.beadSize/10).toFixed(1)})),oe=ye(()=>Q.value.length>0),et=ye(()=>ie.value.length>0),rt=ye(()=>Ae.value.colors[C.value]),Ke=ye(()=>Ud(f.value,Ae.value.colors)),Te=ye(()=>qe.value.reduce((D,g)=>{const re=Math.max(0,Number(q[g.id])||0);return D+Math.max(0,g.count-re)},0));function yt(){d.columns=Math.max(8,Math.min(150,Number(d.columns)||48)),d.rows=Math.max(8,Math.min(150,Number(d.rows)||48))}function Bt(D){d.columns=D,d.rows=D}async function ut(D){var g,re;if(i.value="",!D||!["image/jpeg","image/png","image/webp"].includes(D.type)){i.value="请选择 JPG、PNG 或 WebP 图片";return}if(D.size>12*1024*1024){i.value="图片不能超过 12 MB";return}u.value=!0;try{(re=(g=o.value)==null?void 0:g.close)==null||re.call(g),o.value=await Wd(D),a.value=D.name,d.zoom=1,d.focusX=50,d.focusY=50,await tt(),$(),H()}catch(ae){i.value=ae.message||"图片读取失败"}finally{u.value=!1}}function Ge(D){var g;ut((g=D.target.files)==null?void 0:g[0]),D.target.value=""}function k(D){var g,re;c.value=!1,ut((re=(g=D.dataTransfer)==null?void 0:g.files)==null?void 0:re[0])}function $(){o.value&&(yt(),qd(r.value,o.value,d))}function H(){if(o.value){yt(),u.value=!0;try{const D=Kd(o.value,d,Ae.value.colors);h.columns=d.columns,h.rows=d.rows,f.value=D,C.value=D.find(g=>g>=0)??0,Q.value=[],ie.value=[],tt(()=>{m(),Z()})}finally{u.value=!1}}}function V(){Fd(s.value,f.value,h.columns,h.rows,Ae.value.colors,{cellSize:P.value,showGrid:x.value,showCodes:_.value,mode:B.value,selection:A.value,symmetry:R})}function Z(){De||(De=requestAnimationFrame(()=>{De=0,V()}))}function m(){if(!l.value||!h.columns||!h.rows)return;const D=Math.max(240,l.value.clientWidth-56),g=Math.max(240,l.value.clientHeight-56);P.value=Math.max(4,Math.min(25,Math.floor(Math.min(D/h.columns,g/h.rows))))}function v(){Q.value=[...Q.value.slice(-39),new Int16Array(f.value)],ie.value=[]}function b(){oe.value&&(ie.value=[new Int16Array(f.value),...ie.value.slice(0,39)],f.value=Q.value[Q.value.length-1],Q.value=Q.value.slice(0,-1),tt(Z))}function S(){et.value&&(Q.value=[...Q.value.slice(-39),new Int16Array(f.value)],f.value=ie.value[0],ie.value=ie.value.slice(1),tt(Z))}function E(D){const g=s.value.getBoundingClientRect(),re=(D.clientX-g.left)*(s.value.width/g.width),ae=(D.clientY-g.top)*(s.value.height/g.height),T=Math.floor(re/P.value),te=Math.floor(ae/P.value);return T<0||te<0||T>=h.columns||te>=h.rows?-1:te*h.columns+T}function w(D){return{column:D%h.columns,row:Math.floor(D/h.columns)}}function I(D){v(),f.value=D,tt(Z)}function O(D){if(D<0||D===me)return;if(me=D,y.value==="picker"){const ae=f.value[D];ae>=0&&(C.value=ae,y.value="brush"),Pe=null;return}const g=y.value==="eraser"?-1:C.value,re=Ds(D,h.columns,h.rows,R);if(!re.every(ae=>Pe[ae]===g)){for(const ae of re)Pe[ae]=g;f.value=new Int16Array(Pe),Z()}}function N(D){var re,ae;if(!f.value.length)return;D.preventDefault(),(ae=(re=s.value).setPointerCapture)==null||ae.call(re,D.pointerId),me=-1;const g=E(D);if(!(g<0)){if(y.value==="bucket"){I(Gd(f.value,h.columns,h.rows,g,C.value,R));return}if(y.value==="replace"){I(Gl(f.value,f.value[g],C.value));return}if(y.value==="rectangle"||y.value==="select"){const T=w(g);Re={startColumn:T.column,startRow:T.row,endColumn:T.column,endRow:T.row},A.value={...Re},y.value==="rectangle"&&v(),Z();return}y.value!=="picker"&&v(),Pe=new Int16Array(f.value),O(g)}}function M(D){if(!(D.buttons&1))return;const g=E(D);if(Re&&g>=0){const re=w(g);Re.endColumn=re.column,Re.endRow=re.row,A.value={...Re},Z();return}Pe&&O(g)}function W(){Re&&y.value==="rectangle"&&(f.value=jd(f.value,h.columns,h.rows,Re,C.value,R),A.value=null),Re=null,Pe=null,me=-1,Z()}function L(D){f.value.length&&I(Vd(f.value,h.columns,h.rows,D,A.value))}function z(){f.value.length&&I(zd(f.value,h.columns,h.rows,2))}function Y(){!f.value.length||!d.maxColors||I(pi(f.value,Ae.value.colors,d.maxColors))}function le(D){I(Gl(f.value,D.source.index,D.target.index))}function ge(){if(!f.value.length)return;const D=nh({cells:f.value,columns:h.columns,rows:h.rows,paletteId:Ae.value.id,settings:d,inventory:q});jl(JSON.stringify(D),`${je()}.sakurabeads`)}async function ce(D){var re,ae,T;const g=(re=D.target.files)==null?void 0:re[0];if(D.target.value="",!!g){i.value="";try{const te=rh(await g.text(),kn);(T=(ae=o.value)==null?void 0:ae.close)==null||T.call(ae),o.value=null,a.value=g.name.replace(/\.sakurabeads$/i,""),d.paletteId=te.palette.id,d.columns=te.columns,d.rows=te.rows,Object.assign(d,te.settings||{}),h.columns=te.columns,h.rows=te.rows,f.value=te.cells;for(const Gn of Object.keys(q))delete q[Gn];Object.assign(q,te.inventory||{}),C.value=te.cells.find(Gn=>Gn>=0)??0,A.value=null,Q.value=[],ie.value=[],await tt(),m(),Z()}catch(te){i.value=te.message||"工程文件读取失败"}}}function ke(){jl(sh(qe.value,q),`${je()}-材料清单.csv`,"text/csv;charset=utf-8")}function Ee(D){C.value=D}function je(){return`${a.value.replace(/\.[^.]+$/,"").replace(/[^a-zA-Z0-9\u4e00-\u9fa5_-]+/g,"-")||"pattern"}-${h.columns}x${h.rows}`}Jt(()=>[d.columns,d.rows,d.zoom,d.focusX,d.focusY],()=>tt($)),Jt(()=>d.paletteId,()=>{o.value&&H()}),Jt([P,x,_,B,A,()=>R.horizontal,()=>R.vertical],()=>tt(Z));function Ye(D){var g;!(D.ctrlKey||D.metaKey)||D.key.toLowerCase()!=="z"||["INPUT","SELECT","TEXTAREA"].includes((g=D.target)==null?void 0:g.tagName)||(D.preventDefault(),D.shiftKey?S():b())}return Ln(()=>window.addEventListener("keydown",Ye)),_s(()=>{var D,g;window.removeEventListener("keydown",Ye),De&&cancelAnimationFrame(De),(g=(D=o.value)==null?void 0:D.close)==null||g.call(D)}),(D,g)=>{var re,ae;return J(),se("div",lh,[!o.value&&!f.value.length?(J(),se("div",{key:0,class:fe(["bead-upload",{dragging:c.value}]),onDragenter:g[2]||(g[2]=pn(T=>c.value=!0,["prevent"])),onDragover:g[3]||(g[3]=pn(()=>{},["prevent"])),onDragleave:g[4]||(g[4]=pn(T=>c.value=!1,["prevent"])),onDrop:pn(k,["prevent"])},[p("input",{ref_key:"fileInput",ref:t,type:"file",accept:"image/jpeg,image/png,image/webp",hidden:"",onChange:Ge},null,544),p("span",oh,[G(F(b1),{size:34,"stroke-width":1.5})]),g[41]||(g[41]=p("p",{class:"bead-kicker"},"LOCAL IMAGE WORKFLOW",-1)),g[42]||(g[42]=p("h2",null,"从一张图片开始",-1)),g[43]||(g[43]=p("p",null,"拖入 JPG、PNG 或 WebP，图片只在当前浏览器中解码与处理。",-1)),p("button",{class:"primary-button",type:"button",disabled:u.value,onClick:g[0]||(g[0]=T=>{var te;return(te=t.value)==null?void 0:te.click()})},[G(F(L1),{size:17}),j(" "+U(u.value?"正在读取…":"选择图片"),1)],8,ih),p("button",{class:"project-open-button",type:"button",onClick:g[1]||(g[1]=T=>{var te;return(te=n.value)==null?void 0:te.click()})},[G(F(Gr),{size:16}),g[40]||(g[40]=j(" 打开拼豆工程",-1))]),p("input",{ref_key:"projectInput",ref:n,type:"file",accept:".sakurabeads,application/json",hidden:"",onChange:ce},null,544),g[44]||(g[44]=p("small",null,"最大 12 MB · 不上传服务器",-1)),i.value?(J(),se("p",ah,U(i.value),1)):Ut("",!0)],34)):(J(),se(Ne,{key:1},[p("div",uh,[g[45]||(g[45]=p("span",{class:"done"},"01 图片",-1)),g[46]||(g[46]=p("i",null,null,-1)),g[47]||(g[47]=p("span",{class:"done"},"02 裁剪",-1)),g[48]||(g[48]=p("i",null,null,-1)),p("span",{class:fe({done:f.value.length})},"03 配色",2),g[49]||(g[49]=p("i",null,null,-1)),p("span",{class:fe({done:f.value.length})},"04 编辑导出",2)]),p("div",ch,[p("aside",fh,[p("div",dh,[p("span",null,[G(F(P1),{size:15}),g[50]||(g[50]=j(" 图片与网格",-1))]),p("button",{type:"button",onClick:g[5]||(g[5]=T=>{var te;return(te=t.value)==null?void 0:te.click()})},[G(F(Os),{size:13}),g[51]||(g[51]=j(" 换图",-1))]),p("input",{ref_key:"fileInput",ref:t,type:"file",accept:"image/jpeg,image/png,image/webp",hidden:"",onChange:Ge},null,544)]),o.value?(J(),se("canvas",{key:0,ref_key:"cropCanvas",ref:r,class:"crop-preview","aria-label":"裁剪预览"},null,512)):(J(),se("div",hh,[G(F(Gr),{size:22}),g[52]||(g[52]=p("span",null,"已打开工程网格",-1))])),p("p",{class:"source-name",title:a.value},U(a.value),9,ph),i.value?(J(),se("p",mh,U(i.value),1)):Ut("",!0),p("div",gh,[p("label",null,[g[53]||(g[53]=j("宽度 ",-1)),Se(p("input",{"onUpdate:modelValue":g[6]||(g[6]=T=>d.columns=T),type:"number",min:"8",max:"150"},null,512),[[Be,d.columns,void 0,{number:!0}]])]),g[55]||(g[55]=p("span",null,"×",-1)),p("label",null,[g[54]||(g[54]=j("高度 ",-1)),Se(p("input",{"onUpdate:modelValue":g[7]||(g[7]=T=>d.rows=T),type:"number",min:"8",max:"150"},null,512),[[Be,d.rows,void 0,{number:!0}]])])]),p("div",vh,[(J(),se(Ne,null,zt(Fe,T=>p("button",{key:T,type:"button",class:fe({active:d.columns===T&&d.rows===T}),onClick:te=>Bt(T)},U(T),11,yh)),64))]),p("label",bh,[p("span",null,[g[56]||(g[56]=j("裁剪缩放 ",-1)),p("b",null,U(d.zoom.toFixed(1))+"×",1)]),Se(p("input",{"onUpdate:modelValue":g[8]||(g[8]=T=>d.zoom=T),type:"range",min:"1",max:"3",step:"0.1"},null,512),[[Be,d.zoom,void 0,{number:!0}]])]),p("label",Ch,[p("span",null,[g[57]||(g[57]=j("水平取景 ",-1)),p("b",null,U(d.focusX)+"%",1)]),Se(p("input",{"onUpdate:modelValue":g[9]||(g[9]=T=>d.focusX=T),type:"range",min:"0",max:"100"},null,512),[[Be,d.focusX,void 0,{number:!0}]])]),p("label",Ph,[p("span",null,[g[58]||(g[58]=j("垂直取景 ",-1)),p("b",null,U(d.focusY)+"%",1)]),Se(p("input",{"onUpdate:modelValue":g[10]||(g[10]=T=>d.focusY=T),type:"range",min:"0",max:"100"},null,512),[[Be,d.focusY,void 0,{number:!0}]])]),g[68]||(g[68]=p("span",{class:"bead-label"},"成像调整",-1)),p("label",Ah,[p("span",null,[g[59]||(g[59]=j("细节增强 ",-1)),p("b",null,U(d.detail),1)]),Se(p("input",{"onUpdate:modelValue":g[11]||(g[11]=T=>d.detail=T),type:"range",min:"0",max:"80"},null,512),[[Be,d.detail,void 0,{number:!0}]])]),p("label",wh,[p("span",null,[g[60]||(g[60]=j("饱和度 ",-1)),p("b",null,U(d.saturation)+"%",1)]),Se(p("input",{"onUpdate:modelValue":g[12]||(g[12]=T=>d.saturation=T),type:"range",min:"70",max:"140"},null,512),[[Be,d.saturation,void 0,{number:!0}]])]),p("label",Sh,[p("span",null,[g[61]||(g[61]=j("对比度 ",-1)),p("b",null,U(d.contrast)+"%",1)]),Se(p("input",{"onUpdate:modelValue":g[13]||(g[13]=T=>d.contrast=T),type:"range",min:"80",max:"130"},null,512),[[Be,d.contrast,void 0,{number:!0}]])]),p("label",xh,[p("span",null,[g[62]||(g[62]=j("亮度 ",-1)),p("b",null,U(d.brightness)+"%",1)]),Se(p("input",{"onUpdate:modelValue":g[14]||(g[14]=T=>d.brightness=T),type:"range",min:"80",max:"120"},null,512),[[Be,d.brightness,void 0,{number:!0}]])]),p("label",kh,[g[64]||(g[64]=p("span",null,"颜色数限制",-1)),Se(p("select",{"onUpdate:modelValue":g[15]||(g[15]=T=>d.maxColors=T)},[...g[63]||(g[63]=[p("option",{value:0},"不限颜色",-1),p("option",{value:10},"最多 10 色",-1),p("option",{value:20},"最多 20 色",-1),p("option",{value:30},"最多 30 色",-1),p("option",{value:40},"最多 40 色",-1),p("option",{value:60},"最多 60 色",-1)])],512),[[ml,d.maxColors,void 0,{number:!0}]])]),p("div",_h,[p("button",{type:"button",disabled:!f.value.length||!d.maxColors,onClick:Y},[G(F($l),{size:14}),g[65]||(g[65]=j(" 应用限色",-1))],8,Eh),p("button",{type:"button",disabled:!f.value.length,onClick:z},[G(F(fi),{size:14}),g[66]||(g[66]=j(" 去除杂点",-1))],8,Rh)]),g[69]||(g[69]=p("span",{class:"bead-label"},"拼豆规格",-1)),p("div",Mh,[p("button",{type:"button",class:fe({active:d.beadSize===5}),onClick:g[16]||(g[16]=T=>d.beadSize=5)},"5 mm",2),p("button",{type:"button",class:fe({active:d.beadSize===2.6}),onClick:g[17]||(g[17]=T=>d.beadSize=2.6)},"2.6 mm",2)]),p("label",Th,[g[67]||(g[67]=p("span",null,"品牌色板",-1)),Se(p("select",{"onUpdate:modelValue":g[18]||(g[18]=T=>d.paletteId=T)},[(J(!0),se(Ne,null,zt(F(kn),T=>(J(),se("option",{key:T.id,value:T.id},U(T.name),9,Bh))),128))],512),[[ml,d.paletteId]])]),p("button",{class:"primary-button bead-generate",type:"button",disabled:u.value||!o.value,onClick:H},[G(F(us),{size:16}),j(" "+U(u.value?"生成中…":"应用并重新生成"),1)],8,Nh),g[70]||(g[70]=p("p",{class:"palette-note"},"品牌色号来自社区校准数据；屏幕颜色与实物、批次可能存在差异。",-1))]),p("section",Oh,[p("div",Ih,[p("div",Hh,[p("button",{type:"button",class:fe({active:y.value==="brush"}),title:"画笔",onClick:g[19]||(g[19]=T=>y.value="brush")},[G(F(rf),{size:17}),g[71]||(g[71]=p("span",null,"画笔",-1))],2),p("button",{type:"button",class:fe({active:y.value==="eraser"}),title:"橡皮擦",onClick:g[20]||(g[20]=T=>y.value="eraser")},[G(F(w1),{size:17}),g[72]||(g[72]=p("span",null,"擦除",-1))],2),p("button",{type:"button",class:fe({active:y.value==="bucket"}),title:"填充连续区域",onClick:g[21]||(g[21]=T=>y.value="bucket")},[G(F(tf),{size:17}),g[73]||(g[73]=p("span",null,"油漆桶",-1))],2),p("button",{type:"button",class:fe({active:y.value==="rectangle"}),title:"拖动填充矩形",onClick:g[22]||(g[22]=T=>y.value="rectangle")},[G(F(Pf),{size:17}),g[74]||(g[74]=p("span",null,"矩形",-1))],2),p("button",{type:"button",class:fe({active:y.value==="select"}),title:"拖动选择区域，镜像操作将只作用于选区",onClick:g[23]||(g[23]=T=>y.value="select")},[G(F(bf),{size:17}),g[75]||(g[75]=p("span",null,"选区",-1))],2),p("button",{type:"button",class:fe({active:y.value==="replace"}),title:"点击一种现有颜色，将其全部替换成当前选中色",onClick:g[24]||(g[24]=T=>y.value="replace")},[G(F(cf),{size:17}),g[76]||(g[76]=p("span",null,"替换",-1))],2),p("button",{type:"button",class:fe({active:y.value==="picker"}),title:"吸色",onClick:g[25]||(g[25]=T=>y.value="picker")},[G(F(cs),{size:17}),g[77]||(g[77]=p("span",null,"吸色",-1))],2)]),p("div",Dh,[p("button",{type:"button",disabled:!oe.value,title:`撤销（${Q.value.length} 步历史）`,onClick:b},[G(F(kf),{size:17})],8,Lh),p("button",{type:"button",disabled:!et.value,title:`重做（${ie.value.length} 步历史）`,onClick:S},[G(F(of),{size:17})],8,$h)]),p("label",Fh,[g[78]||(g[78]=j("缩放 ",-1)),Se(p("input",{"onUpdate:modelValue":g[26]||(g[26]=T=>P.value=T),type:"range",min:"4",max:"25"},null,512),[[Be,P.value,void 0,{number:!0}]])]),p("button",{class:"fit-button",type:"button",title:"适应画布",onClick:m},[G(F(J1),{size:15}),g[79]||(g[79]=j(" 适应",-1))]),p("div",Gh,[p("button",{type:"button",class:fe({active:B.value==="pixel"}),onClick:g[27]||(g[27]=T=>B.value="pixel")},"色块",2),p("button",{type:"button",class:fe({active:B.value==="bead"}),onClick:g[28]||(g[28]=T=>B.value="bead")},"拼豆",2)]),p("button",{class:fe(["grid-toggle",{active:x.value}]),type:"button",onClick:g[29]||(g[29]=T=>x.value=!x.value)},[G(F(us),{size:16}),g[80]||(g[80]=j(" 网格",-1))],2)]),p("div",jh,[g[86]||(g[86]=p("span",null,"对称编辑",-1)),p("button",{type:"button",class:fe({active:R.horizontal}),onClick:g[30]||(g[30]=T=>R.horizontal=!R.horizontal)},[G(F(Dl),{size:14}),g[81]||(g[81]=j(" 左右",-1))],2),p("button",{type:"button",class:fe({active:R.vertical}),onClick:g[31]||(g[31]=T=>R.vertical=!R.vertical)},[G(F(Hl),{size:14}),g[82]||(g[82]=j(" 上下",-1))],2),g[87]||(g[87]=p("i",null,null,-1)),p("span",null,U(A.value?"镜像选区":"镜像全图"),1),p("button",{type:"button",onClick:g[32]||(g[32]=T=>L("horizontal"))},[G(F(Dl),{size:14}),g[83]||(g[83]=j(" 左右",-1))]),p("button",{type:"button",onClick:g[33]||(g[33]=T=>L("vertical"))},[G(F(Hl),{size:14}),g[84]||(g[84]=j(" 上下",-1))]),A.value?(J(),se("button",{key:0,type:"button",onClick:g[34]||(g[34]=T=>A.value=null)},"取消选区")):Ut("",!0),p("button",{class:fe(["code-toggle",{active:_.value}]),type:"button",title:"单格放大到 12px 以上时显示色号",onClick:g[35]||(g[35]=T=>_.value=!_.value)},[G(F($l),{size:14}),g[85]||(g[85]=j(" 格内色号",-1))],2)]),p("div",{ref_key:"canvasViewport",ref:l,class:"bead-canvas-viewport"},[p("canvas",{ref_key:"beadCanvas",ref:s,class:"bead-canvas","aria-label":"拼豆编辑画布",onPointerdown:N,onPointermove:M,onPointerup:W,onPointercancel:W,onPointerleave:W},null,544)],512),p("div",Vh,[p("span",null,U(h.columns)+" × "+U(h.rows)+" 颗",1),p("span",null,U(ue.value.width)+" × "+U(ue.value.height)+" cm",1),p("span",null,U(we.value)+" 颗豆",1),p("span",null,"历史 "+U(Q.value.length)+" / "+U(ie.value.length),1),p("span",null,[p("i",{class:"selected-swatch",style:Ht({background:(re=rt.value)==null?void 0:re.hex})},null,4),j(U((ae=rt.value)==null?void 0:ae.name),1)])])]),p("aside",zh,[p("div",Uh,[p("span",null,[G(F(cs),{size:15}),g[88]||(g[88]=j(" 颜色与用量",-1))]),p("b",null,U(qe.value.length)+" 色",1)]),p("div",Wh,[(J(!0),se(Ne,null,zt(Ae.value.colors,(T,te)=>(J(),se("button",{key:T.id,type:"button",class:fe({active:C.value===te}),style:Ht({"--swatch":T.hex}),title:`${T.name} / ${T.code}`,onClick:Gn=>Ee(te)},[...g[89]||(g[89]=[p("span",null,null,-1)])],14,qh))),128))]),p("div",Kh,[p("div",{class:fe(["material-summary",{complete:Te.value===0}])},[G(F(Ll),{size:14}),p("span",null,U(Te.value?`按库存还缺 ${Te.value} 颗`:"库存数量充足"),1)],2),p("div",Jh,[(J(!0),se(Ne,null,zt(qe.value,T=>(J(),se("div",{key:T.id,class:"bead-usage-row",role:"button",tabindex:"0",onClick:te=>Ee(T.index),onKeydown:Lu(te=>Ee(T.index),["enter"])},[p("i",{style:Ht({background:T.hex})},null,4),p("span",null,[p("b",null,U(T.name),1),p("small",null,U(T.code),1)]),p("strong",Qh,"需 "+U(T.count),1),p("label",{title:"输入已有库存",onClick:g[36]||(g[36]=pn(()=>{},["stop"]))},[g[90]||(g[90]=j("有 ",-1)),Se(p("input",{"onUpdate:modelValue":te=>q[T.id]=te,type:"number",min:"0"},null,8,Xh),[[Be,q[T.id],void 0,{number:!0}]])]),T.count>(Number(q[T.id])||0)?(J(),se("em",Zh,"缺 "+U(T.count-(Number(q[T.id])||0)),1)):(J(),se("em",e2,"足够"))],40,Yh))),128))]),Ke.value.length?(J(),se("details",t2,[p("summary",null,[g[91]||(g[91]=j("颜色合并建议 ",-1)),p("b",null,U(Ke.value.length),1)]),(J(!0),se(Ne,null,zt(Ke.value,T=>(J(),se("button",{key:`${T.source.id}-${T.target.id}`,type:"button",onClick:te=>le(T)},[p("i",{style:Ht({background:T.source.hex})},null,4),j(U(T.source.code)+" ",1),g[92]||(g[92]=p("span",null,"→",-1)),p("i",{style:Ht({background:T.target.hex})},null,4),j(U(T.target.code)+" ",1),p("small",null,"ΔE "+U(T.distance.toFixed(1)),1)],8,n2))),128))])):Ut("",!0)]),p("div",r2,[g[98]||(g[98]=p("span",{class:"bead-label"},"导出图纸",-1)),p("button",{type:"button",onClick:g[37]||(g[37]=T=>F(eh)(f.value,h.columns,h.rows,Ae.value.colors,`${je()}.png`,{paletteName:Ae.value.name}))},[G(F(x1),{size:16}),g[93]||(g[93]=j(" PNG 图片",-1))]),p("button",{type:"button",onClick:g[38]||(g[38]=T=>F(th)(f.value,h.columns,h.rows,Ae.value.colors,`${je()}.pdf`,{paletteName:Ae.value.name,boardSize:29}))},[G(F(ci),{size:16}),g[94]||(g[94]=j(" PDF（29×29 分页）",-1))]),p("button",{type:"button",onClick:ke},[G(F(Ll),{size:16}),g[95]||(g[95]=j(" 材料清单 CSV",-1))]),g[99]||(g[99]=p("span",{class:"bead-label project-label"},"工程文件",-1)),p("div",s2,[p("button",{type:"button",onClick:ge},[G(F(df),{size:15}),g[96]||(g[96]=j(" 保存",-1))]),p("button",{type:"button",onClick:g[39]||(g[39]=T=>{var te;return(te=n.value)==null?void 0:te.click()})},[G(F(Gr),{size:15}),g[97]||(g[97]=j(" 打开",-1))])]),p("input",{ref_key:"projectInput",ref:n,type:"file",accept:".sakurabeads,application/json",hidden:"",onChange:ce},null,544)]),p("p",l2,[G(F(gf),{size:14}),g[100]||(g[100]=j(" 图片与编辑数据仅保留在当前页面",-1))])])])],64))])}}},i2={key:0,class:"workspace"},a2={class:"workspace-header"},u2={class:"local-badge"},c2={__name:"ToolView",setup(e){const t=ui(),n=ye(()=>$f(t.params.slug)),s={json:ud,base64:md,timestamp:Cd,password:_d,markdown:ha(()=>rd(()=>import("./MarkdownTool-BLbHc6U9.js"),__vite__mapDeps([0,1]))),"pixel-beads":o2},l=ye(()=>s[t.params.slug]);return Ln(()=>{fetch("/api/v1/events/tool-opened",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:t.params.slug})}).catch(()=>{})}),(o,a)=>{const i=Xr("router-link");return n.value&&l.value?(J(),se("section",i2,[G(i,{class:"back-link",to:"/"},{default:vr(()=>[G(F(l1),{size:16}),a[0]||(a[0]=j(" 返回工具索引",-1))]),_:1}),p("header",a2,[p("div",{class:fe(["workspace-icon",`tone-${n.value.color}`])},[(J(),Ze(rr(n.value.icon),{size:28}))],2),p("div",null,[p("p",null,U(n.value.index)+" / "+U(n.value.category),1),p("h1",null,U(n.value.name),1),p("span",null,U(n.value.summary),1)]),p("div",u2,[G(F(q1),{size:14}),a[1]||(a[1]=j(" 本地处理",-1))])]),(J(),Ze(rr(l.value)))])):Ut("",!0)}}},f2=Jc({history:_c(),routes:[{path:"/",component:ed},{path:"/tools/:slug",component:c2},{path:"/:pathMatch(.*)*",redirect:"/"}],scrollBehavior:()=>({top:0})});Gu(Df).use(f2).mount("#app");export{F1 as I,_s as a,J as b,X as c,se as d,p as e,G as f,j as g,Se as h,Ht as i,ye as j,tt as k,fe as n,Ln as o,ne as r,U as t,F as u,Be as v,Jt as w};
