const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MarkdownTool-D0DouI6f.js","assets/MarkdownTool-CEK31ho9.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();/**
* @vue/shared v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ps(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Ce={},nn=[],gt=()=>{},zl=()=>!1,fr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),dr=e=>e.startsWith("onUpdate:"),Le=Object.assign,ms=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},wi=Object.prototype.hasOwnProperty,pe=(e,t)=>wi.call(e,t),Q=Array.isArray,Ft=e=>In(e)==="[object Map]",kt=e=>In(e)==="[object Set]",$s=e=>In(e)==="[object Date]",te=e=>typeof e=="function",xe=e=>typeof e=="string",vt=e=>typeof e=="symbol",ye=e=>e!==null&&typeof e=="object",Vl=e=>(ye(e)||te(e))&&te(e.then)&&te(e.catch),Ul=Object.prototype.toString,In=e=>Ul.call(e),Si=e=>In(e).slice(8,-1),Wl=e=>In(e)==="[object Object]",gs=e=>xe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,bn=ps(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),hr=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},xi=/-\w/g,Ke=hr(e=>e.replace(xi,t=>t.slice(1).toUpperCase())),ki=/\B([A-Z])/g,Gt=hr(e=>e.replace(ki,"-$1").toLowerCase()),pr=hr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Er=hr(e=>e?`on${pr(e)}`:""),pt=(e,t)=>!Object.is(e,t),Jn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Kl=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},mr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Fs;const gr=()=>Fs||(Fs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Lt(e){if(Q(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=xe(r)?Ri(r):Lt(r);if(s)for(const l in s)t[l]=s[l]}return t}else if(xe(e)||ye(e))return e}const _i=/;(?![^(]*\))/g,Ei=/:([^]+)/,Mi=/\/\*[^]*?\*\//g;function Ri(e){const t={};return e.replace(Mi,"").split(_i).forEach(n=>{if(n){const r=n.split(Ei);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ae(e){let t="";if(xe(e))t=e;else if(Q(e))for(let n=0;n<e.length;n++){const r=ae(e[n]);r&&(t+=r+" ")}else if(ye(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ti="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bi=ps(Ti);function ql(e){return!!e||e===""}function Ni(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=_t(e[r],t[r]);return n}function Gs(e,t){if(e.size!==t.size)return!1;const n=Array.from(t),r=new Uint8Array(n.length);for(const s of e){let l=-1;for(let o=0;o<n.length;o++)if(!r[o]&&_t(s,n[o])){l=o;break}if(l<0)return!1;r[l]=1}return!0}function _t(e,t){if(e===t)return!0;let n=$s(e),r=$s(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=vt(e),r=vt(t),n||r)return e===t;if(n=Q(e),r=Q(t),n||r)return n&&r?Ni(e,t):!1;if(n=ye(e),r=ye(t),n||r){if(!n||!r)return!1;if(n=Ft(e),r=Ft(t),n||r||(n=kt(e),r=kt(t),n||r))return n&&r?Gs(e,t):!1;const s=Object.keys(e).length,l=Object.keys(t).length;if(s!==l)return!1;for(const o in e){const a=e.hasOwnProperty(o),i=t.hasOwnProperty(o);if(a&&!i||!a&&i||!_t(e[o],t[o]))return!1}}return String(e)===String(t)}function vs(e,t){return e.findIndex(n=>_t(n,t))}const Jl=e=>!!(e&&e.__v_isRef===!0),V=e=>xe(e)?e:e==null?"":Q(e)||ye(e)&&(e.toString===Ul||!te(e.toString))?Jl(e)?V(e.value):JSON.stringify(e,Yl,2):String(e),Yl=(e,t)=>Jl(t)?Yl(e,t.value):Ft(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],l)=>(n[Mr(r,l)+" =>"]=s,n),{})}:kt(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Mr(n))}:vt(t)?Mr(t):ye(t)&&!Q(t)&&!Wl(t)?String(t):t,Mr=(e,t="")=>{var n;return vt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oe;class Oi{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Oe&&(Oe.active?(this.parent=Oe,this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const r=this.scopes.slice();for(t=0,n=r.length;t<n;t++)r[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const s=this.scopes.slice();for(t=0,n=s.length;t<n;t++)s[t].resume()}const r=this.effects.slice();for(t=0,n=r.length;t<n;t++)r[t].resume()}}run(t){if(this._active){const n=Oe;try{return Oe=this,t()}finally{Oe=n}}}on(){++this._on===1&&(this.prevScope=Oe,Oe=this)}off(){if(this._on>0&&--this._on===0){if(Oe===this)Oe=this.prevScope;else{let t=Oe;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ii(){return Oe}let Pe;const Rr=new WeakSet;class Ql{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Oe&&(Oe.active?Oe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Rr.has(this)&&(Rr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,js(this),eo(this);const t=Pe,n=st;Pe=this,st=!0;try{return this.fn()}finally{to(this),Pe=t,st=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Cs(t);this.deps=this.depsTail=void 0,js(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Rr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){qr(this)&&this.run()}get dirty(){return qr(this)}}let Xl=0,Cn,Pn;function Zl(e,t=!1){if(e.flags|=8,t){e.next=Pn,Pn=e;return}e.next=Cn,Cn=e}function ys(){Xl++}function bs(){if(--Xl>0)return;if(Pn){let t=Pn;for(Pn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Cn;){let t=Cn;for(Cn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function eo(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function to(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Cs(r),Hi(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function qr(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(no(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function no(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===_n)||(e.globalVersion=_n,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!qr(e))))return;e.flags|=2;const t=e.dep,n=Pe,r=st;Pe=e,st=!0;try{eo(e);const s=e.fn(e._value);(t.version===0||pt(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{Pe=n,st=r,to(e),e.flags&=-3}}function Cs(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let l=n.computed.deps;l;l=l.nextDep)Cs(l,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Hi(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let st=!0;const ro=[];function Et(){ro.push(st),st=!1}function Mt(){const e=ro.pop();st=e===void 0?!0:e}function js(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Pe;Pe=void 0;try{t()}finally{Pe=n}}}let _n=0;class Li{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ps{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Pe||!st||Pe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Pe)n=this.activeLink=new Li(Pe,this),Pe.deps?(n.prevDep=Pe.depsTail,Pe.depsTail.nextDep=n,Pe.depsTail=n):Pe.deps=Pe.depsTail=n,so(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Pe.depsTail,n.nextDep=void 0,Pe.depsTail.nextDep=n,Pe.depsTail=n,Pe.deps===n&&(Pe.deps=r)}return n}trigger(t){this.version++,_n++,this.notify(t)}notify(t){ys();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{bs()}}}function so(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)so(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Jr=new WeakMap,Kt=Symbol(""),Yr=Symbol(""),En=Symbol("");function $e(e,t,n){if(st&&Pe){let r=Jr.get(e);r||Jr.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new Ps),s.map=r,s.key=n),s.track()}}function wt(e,t,n,r,s,l){const o=Jr.get(e);if(!o){_n++;return}const a=i=>{i&&i.trigger()};if(ys(),t==="clear")o.forEach(a);else{const i=Q(e),u=i&&gs(n);if(i&&n==="length"){const c=Number(r);o.forEach((f,h)=>{(h==="length"||h===En||!vt(h)&&h>=c)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(En)),t){case"add":i?u&&a(o.get("length")):(a(o.get(Kt)),Ft(e)&&a(o.get(Yr)));break;case"delete":i||(a(o.get(Kt)),Ft(e)&&a(o.get(Yr)));break;case"set":Ft(e)&&a(o.get(Kt));break}}bs()}function Xt(e){const t=he(e);return t===e?t:($e(t,"iterate",En),nt(e)?t:t.map(ot))}function vr(e){return $e(e=he(e),"iterate",En),e}function dt(e,t){return Rt(e)?ln(qt(e)?ot(t):t):ot(t)}const Di={__proto__:null,[Symbol.iterator](){return Tr(this,Symbol.iterator,e=>dt(this,e))},concat(...e){return Xt(this).concat(...e.map(t=>Q(t)?Xt(t):t))},entries(){return Tr(this,"entries",e=>(e[1]=dt(this,e[1]),e))},every(e,t){return bt(this,"every",e,t,void 0,arguments)},filter(e,t){return bt(this,"filter",e,t,n=>n.map(r=>dt(this,r)),arguments)},find(e,t){return bt(this,"find",e,t,n=>dt(this,n),arguments)},findIndex(e,t){return bt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return bt(this,"findLast",e,t,n=>dt(this,n),arguments)},findLastIndex(e,t){return bt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return bt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Br(this,"includes",e)},indexOf(...e){return Br(this,"indexOf",e)},join(e){return Xt(this).join(e)},lastIndexOf(...e){return Br(this,"lastIndexOf",e)},map(e,t){return bt(this,"map",e,t,void 0,arguments)},pop(){return dn(this,"pop")},push(...e){return dn(this,"push",e)},reduce(e,...t){return zs(this,"reduce",e,t)},reduceRight(e,...t){return zs(this,"reduceRight",e,t)},shift(){return dn(this,"shift")},some(e,t){return bt(this,"some",e,t,void 0,arguments)},splice(...e){return dn(this,"splice",e)},toReversed(){return Xt(this).toReversed()},toSorted(e){return Xt(this).toSorted(e)},toSpliced(...e){return Xt(this).toSpliced(...e)},unshift(...e){return dn(this,"unshift",e)},values(){return Tr(this,"values",e=>dt(this,e))}};function Tr(e,t,n){const r=vr(e),s=r[t]();return r!==e&&!nt(e)&&(s._next=s.next,s.next=()=>{const l=s._next();return l.done||(l.value=n(l.value)),l}),s}const $i=Array.prototype;function bt(e,t,n,r,s,l){const o=vr(e),a=o!==e&&!nt(e),i=o[t];if(i!==$i[t]){const f=i.apply(e,l);return a?ot(f):f}let u=n;o!==e&&(a?u=function(f,h){return n.call(this,dt(e,f),h,e)}:n.length>2&&(u=function(f,h){return n.call(this,f,h,e)}));const c=i.call(o,u,r);return a&&s?s(c):c}function zs(e,t,n,r){const s=vr(e),l=s!==e&&!nt(e);let o=n,a=!1;s!==e&&(l?(a=r.length===0,o=function(u,c,f){return a&&(a=!1,u=dt(e,u)),n.call(this,u,dt(e,c),f,e)}):n.length>3&&(o=function(u,c,f){return n.call(this,u,c,f,e)}));const i=s[t](o,...r);return a?dt(e,i):i}function Br(e,t,n){const r=he(e);$e(r,"iterate",En);const s=r[t](...n);return(s===-1||s===!1)&&Ss(n[0])?(n[0]=he(n[0]),r[t](...n)):s}function dn(e,t,n=[]){Et(),ys();const r=he(e)[t].apply(e,n);return bs(),Mt(),r}const Fi=ps("__proto__,__v_isRef,__isVue"),lo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(vt));function Gi(e){vt(e)||(e=String(e));const t=he(this);return $e(t,"has",e),t.hasOwnProperty(e)}class oo{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,l=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return l;if(n==="__v_raw")return r===(s?l?Qi:co:l?uo:ao).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=Q(t);if(!s){let i;if(o&&(i=Di[n]))return i;if(n==="hasOwnProperty")return Gi}const a=Reflect.get(t,n,Fe(t)?t:r);if((vt(n)?lo.has(n):Fi(n))||(s||$e(t,"get",n),l))return a;if(Fe(a)){const i=o&&gs(n)?a:a.value;return s&&ye(i)?Xr(i):i}return ye(a)?s?Xr(a):$t(a):a}}class io extends oo{constructor(t=!1){super(!1,t)}set(t,n,r,s){let l=t[n];const o=Q(t)&&gs(n);if(!this._isShallow){const u=Rt(l);if(!nt(r)&&!Rt(r)&&(l=he(l),r=he(r)),!o&&Fe(l)&&!Fe(r))return u||(l.value=r),!0}const a=o?Number(n)<t.length:pe(t,n),i=Reflect.set(t,n,r,Fe(t)?t:s);return t===he(s)&&i&&(a?pt(r,l)&&wt(t,"set",n,r):wt(t,"add",n,r)),i}deleteProperty(t,n){const r=pe(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&wt(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!vt(n)||!lo.has(n))&&$e(t,"has",n),r}ownKeys(t){return $e(t,"iterate",Q(t)?"length":Kt),Reflect.ownKeys(t)}}class ji extends oo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const zi=new io,Vi=new ji,Ui=new io(!0);const Qr=e=>e,jn=e=>Reflect.getPrototypeOf(e);function Wi(e,t,n){return function(...r){const s=this.__v_raw,l=he(s),o=Ft(l),a=e==="entries"||e===Symbol.iterator&&o,i=e==="keys"&&o,u=s[e](...r),c=n?Qr:t?ln:ot;return!t&&$e(l,"iterate",i?Yr:Kt),Le(Object.create(u),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:a?[c(f[0]),c(f[1])]:c(f),done:h}}})}}function zn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ki(e,t){const n={get(s){const l=this.__v_raw,o=he(l),a=he(s);e||(pt(s,a)&&$e(o,"get",s),$e(o,"get",a));const{has:i}=jn(o),u=t?Qr:e?ln:ot;if(i.call(o,s))return u(l.get(s));if(i.call(o,a))return u(l.get(a));l!==o&&l.get(s)},get size(){const s=this.__v_raw;return!e&&$e(he(s),"iterate",Kt),s.size},has(s){const l=this.__v_raw,o=he(l),a=he(s);return e||(pt(s,a)&&$e(o,"has",s),$e(o,"has",a)),s===a?l.has(s):l.has(s)||l.has(a)},forEach(s,l){const o=this,a=o.__v_raw,i=he(a),u=t?Qr:e?ln:ot;return!e&&$e(i,"iterate",Kt),a.forEach((c,f)=>s.call(l,u(c),u(f),o))}};return Le(n,e?{add:zn("add"),set:zn("set"),delete:zn("delete"),clear:zn("clear")}:{add(s){const l=he(this),o=jn(l),a=he(s),i=!t&&!nt(s)&&!Rt(s)?a:s;return o.has.call(l,i)||pt(s,i)&&o.has.call(l,s)||pt(a,i)&&o.has.call(l,a)||(l.add(i),wt(l,"add",i,i)),this},set(s,l){!t&&!nt(l)&&!Rt(l)&&(l=he(l));const o=he(this),{has:a,get:i}=jn(o);let u=a.call(o,s);u||(s=he(s),u=a.call(o,s));const c=i.call(o,s);return o.set(s,l),u?pt(l,c)&&wt(o,"set",s,l):wt(o,"add",s,l),this},delete(s){const l=he(this),{has:o,get:a}=jn(l);let i=o.call(l,s);i||(s=he(s),i=o.call(l,s)),a&&a.call(l,s);const u=l.delete(s);return i&&wt(l,"delete",s,void 0),u},clear(){const s=he(this),l=s.size!==0,o=s.clear();return l&&wt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Wi(s,e,t)}),n}function As(e,t){const n=Ki(e,t);return(r,s,l)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(pe(n,s)&&s in r?n:r,s,l)}const qi={get:As(!1,!1)},Ji={get:As(!1,!0)},Yi={get:As(!0,!1)};const ao=new WeakMap,uo=new WeakMap,co=new WeakMap,Qi=new WeakMap;function Xi(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $t(e){return Rt(e)?e:ws(e,!1,zi,qi,ao)}function fo(e){return ws(e,!1,Ui,Ji,uo)}function Xr(e){return ws(e,!0,Vi,Yi,co)}function ws(e,t,n,r,s){if(!ye(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const l=s.get(e);if(l)return l;const o=Xi(Si(e));if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function qt(e){return Rt(e)?qt(e.__v_raw):!!(e&&e.__v_isReactive)}function Rt(e){return!!(e&&e.__v_isReadonly)}function nt(e){return!!(e&&e.__v_isShallow)}function Ss(e){return e?!!e.__v_raw:!1}function he(e){const t=e&&e.__v_raw;return t?he(t):e}function Zi(e){return!pe(e,"__v_skip")&&Object.isExtensible(e)&&Kl(e,"__v_skip",!0),e}const ot=e=>ye(e)?$t(e):e,ln=e=>ye(e)?Xr(e):e;function Fe(e){return e?e.__v_isRef===!0:!1}function Z(e){return ho(e,!1)}function Zr(e){return ho(e,!0)}function ho(e,t){return Fe(e)?e:new ea(e,t)}class ea{constructor(t,n){this.dep=new Ps,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:he(t),this._value=n?t:ot(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||nt(t)||Rt(t);t=r?t:he(t),pt(t,n)&&(this._rawValue=t,this._value=r?t:ot(t),this.dep.trigger())}}function $(e){return Fe(e)?e.value:e}const ta={get:(e,t,n)=>t==="__v_raw"?e:$(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Fe(s)&&!Fe(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function po(e){return qt(e)?e:new Proxy(e,ta)}class na{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Ps(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_n-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Pe!==this)return Zl(this,!0),!0}get value(){const t=this.dep.track();return no(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ra(e,t,n=!1){let r,s;return te(e)?r=e:(r=e.get,s=e.set),new na(r,s,n)}const Vn={},Zn=new WeakMap;let Vt;function sa(e,t=!1,n=Vt){if(n){let r=Zn.get(n);r||Zn.set(n,r=[]),r.push(e)}}function la(e,t,n=Ce){const{immediate:r,deep:s,once:l,scheduler:o,augmentJob:a,call:i}=n,u=A=>s?A:nt(A)||s===!1||s===0?St(A,1):St(A);let c,f,h,d,y=!1,C=!1;if(Fe(e)?(f=()=>e.value,y=nt(e)):qt(e)?(f=()=>u(e),y=!0):Q(e)?(C=!0,y=e.some(A=>qt(A)||nt(A)),f=()=>e.map(A=>{if(Fe(A))return A.value;if(qt(A))return u(A);if(te(A))return i?i(A,2):A()})):te(e)?t?f=i?()=>i(e,2):e:f=()=>{if(h){Et();try{h()}finally{Mt()}}const A=Vt;Vt=c;try{return i?i(e,3,[d]):e(d)}finally{Vt=A}}:f=gt,t&&s){const A=f,w=s===!0?1/0:s;f=()=>St(A(),w)}const P=Ii(),k=()=>{c.stop(),P&&P.active&&ms(P.effects,c)};if(l&&t){const A=t;t=(...w)=>{const I=A(...w);return k(),I}}let _=C?new Array(e.length).fill(Vn):Vn;const B=A=>{if(!(!(c.flags&1)||!c.dirty&&!A))if(t){const w=c.run();if(A||s||y||(C?w.some((I,j)=>pt(I,_[j])):pt(w,_))){h&&h();const I=Vt;Vt=c;try{const j=[w,_===Vn?void 0:C&&_[0]===Vn?[]:_,d];_=w,i?i(t,3,j):t(...j)}finally{Vt=I}}}else c.run()};return a&&a(B),c=new Ql(f),c.scheduler=o?()=>o(B,!1):B,d=A=>sa(A,!1,c),h=c.onStop=()=>{const A=Zn.get(c);if(A){if(i)i(A,4);else for(const w of A)w();Zn.delete(c)}},t?r?B(!0):_=c.run():o?o(B.bind(null,!0),!0):c.run(),k.pause=c.pause.bind(c),k.resume=c.resume.bind(c),k.stop=k,k}function St(e,t=1/0,n){if(t<=0||!ye(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Fe(e))St(e.value,t,n);else if(Q(e))for(let r=0;r<e.length;r++)St(e[r],t,n);else if(kt(e)||Ft(e))e.forEach(r=>{St(r,t,n)});else if(Wl(e)){for(const r in e)St(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&St(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hn(e,t,n,r){try{return r?e(...r):e()}catch(s){Ln(s,t,n)}}function it(e,t,n,r){if(te(e)){const s=Hn(e,t,n,r);return s&&Vl(s)&&s.catch(l=>{Ln(l,t,n)}),s}if(Q(e)){const s=[];for(let l=0;l<e.length;l++)s.push(it(e[l],t,n,r));return s}}function Ln(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Ce;if(t){let a=t.parent;const i=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,i,u)===!1)return}a=a.parent}if(l){Et(),Hn(l,null,10,[e,i,u]),Mt();return}}oa(e,n,s,r,o)}function oa(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const We=[];let ft=-1;const rn=[];let It=null,en=0;const mo=Promise.resolve();let er=null;function tt(e){const t=er||mo;return e?t.then(this?e.bind(this):e):t}function ia(e){let t=ft+1,n=We.length;for(;t<n;){const r=t+n>>>1,s=We[r],l=Mn(s);l<e||l===e&&s.flags&2?t=r+1:n=r}return t}function xs(e){if(!(e.flags&1)){const t=Mn(e),n=We[We.length-1];!n||!(e.flags&2)&&t>=Mn(n)?We.push(e):We.splice(ia(t),0,e),e.flags|=1,go()}}function go(){er||(er=mo.then(yo))}function aa(e){if(!Q(e))It&&e.id===-1?It.splice(en+1,0,e):e.flags&1||(rn.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)rn.push(e[t]);go()}function Vs(e,t,n=ft+1){for(;n<We.length;n++){const r=We[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;We.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function vo(e){if(rn.length){const t=[...new Set(rn)].sort((n,r)=>Mn(n)-Mn(r));if(rn.length=0,It){for(let n=0;n<t.length;n++)It.push(t[n]);return}for(It=t,en=0;en<It.length;en++){const n=It[en];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}It=null,en=0}}const Mn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function yo(e){try{for(ft=0;ft<We.length;ft++){const t=We[ft];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Hn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ft<We.length;ft++){const t=We[ft];t&&(t.flags&=-2)}ft=-1,We.length=0,vo(),er=null,(We.length||rn.length)&&yo()}}let Xe=null,bo=null;function tr(e){const t=Xe;return Xe=e,bo=e&&e.type.__scopeId||null,t}function yr(e,t=Xe,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&lr(-1);const l=tr(t),o=Yt.length;let a;try{a=e(...s)}finally{for(let i=Yt.length;i>o;i--)Vo();tr(l),r._d&&lr(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function be(e,t){if(Xe===null)return e;const n=xr(Xe),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[l,o,a,i=Ce]=t[s];l&&(te(l)&&(l={mounted:l,updated:l}),l.deep&&St(o),r.push({dir:l,instance:n,value:o,oldValue:void 0,arg:a,modifiers:i}))}return e}function jt(e,t,n,r){const s=e.dirs,l=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];l&&(a.oldValue=l[o].value);let i=a.dir[r];i&&(Et(),it(i,n,8,[e.el,a,e,t]),Mt())}}function Yn(e,t){if(Ie){let n=Ie.provides;const r=Ie.parent&&Ie.parent.provides;r===n&&(n=Ie.provides=Object.create(r)),n[e]=t}}function lt(e,t,n=!1){const r=lu();if(r||sn){let s=sn?sn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&te(t)?t.call(r&&r.proxy):t}}const ua=Symbol.for("v-scx"),ca=()=>lt(ua);function Jt(e,t,n){return Co(e,t,n)}function Co(e,t,n=Ce){const{immediate:r,deep:s,flush:l,once:o}=n,a=Le({},n),i=t&&r||!t&&l!=="post";let u;if(an){if(l==="sync"){const d=ca();u=d.__watcherHandles||(d.__watcherHandles=[])}else if(!i){const d=()=>{};return d.stop=gt,d.resume=gt,d.pause=gt,d}}const c=Ie;a.call=(d,y,C)=>it(d,c,y,C);let f=!1;l==="post"?a.scheduler=d=>{Ye(d,c&&c.suspense)}:l!=="sync"&&(f=!0,a.scheduler=(d,y)=>{y?d():xs(d)}),a.augmentJob=d=>{t&&(d.flags|=4),f&&(d.flags|=2,c&&(d.id=c.uid,d.i=c))};const h=la(e,t,a);return an&&(u?u.push(h):i&&h()),h}function fa(e,t,n){const r=this.proxy,s=xe(e)?e.includes(".")?Po(r,e):()=>r[e]:e.bind(r,r);let l;te(t)?l=t:(l=t.handler,n=t);const o=$n(this),a=Co(s,l.bind(r),n);return o(),a}function Po(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const da=Symbol("_vte"),br=e=>e.__isTeleport,Nr=Symbol("_leaveCb");function ha(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Tt){t=n;break}}return t}function Ao(e){if(!Cr(e))return br(e.type)&&e.children?ha(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&te(n.default))return n.default()}}function ks(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;ks(br(n.type)&&Ao(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function _s(e,t){return te(e)?Le({name:e.name},t,{setup:e}):e}function Es(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Us(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const nr=new WeakMap;function An(e,t,n,r,s=!1){if(Q(e)){e.forEach((C,P)=>An(C,t&&(Q(t)?t[P]:t),n,r,s));return}if(wn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&An(e,t,n,r.component.subTree);return}const l=r.shapeFlag&4?xr(r.component):r.el,o=s?null:l,{i:a,r:i}=e,u=t&&t.r,c=a.refs===Ce?a.refs={}:a.refs,f=a.setupState,h=he(f),d=f===Ce?zl:C=>Us(c,C)?!1:pe(h,C),y=(C,P)=>!(P&&Us(c,P));if(u!=null&&u!==i){if(Ws(t),xe(u))c[u]=null,d(u)&&(f[u]=null);else if(Fe(u)){const C=t;y(u,C.k)&&(u.value=null),C.k&&(c[C.k]=null)}}if(te(i))Hn(i,a,12,[o,c]);else{const C=xe(i),P=Fe(i);if(C||P){const k=()=>{if(e.f){const _=C?d(i)?f[i]:c[i]:y()||!e.k?i.value:c[e.k];if(s)Q(_)&&ms(_,l);else if(Q(_))_.includes(l)||_.push(l);else if(C)c[i]=[l],d(i)&&(f[i]=c[i]);else{const B=[l];y(i,e.k)&&(i.value=B),e.k&&(c[e.k]=B)}}else C?(c[i]=o,d(i)&&(f[i]=o)):P&&(y(i,e.k)&&(i.value=o),e.k&&(c[e.k]=o))};if(o){const _=()=>{k(),nr.delete(e)};_.id=-1,nr.set(e,_),Ye(_,n)}else Ws(e),k()}}}function Ws(e){const t=nr.get(e);t&&(t.flags|=8,nr.delete(e))}const Ks=e=>e.nodeType===8;gr().requestIdleCallback;gr().cancelIdleCallback;function pa(e,t){if(Ks(e)&&e.data==="["){let n=1,r=e.nextSibling;for(;r;){if(r.nodeType===1){if(t(r)===!1)break}else if(Ks(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else t(e)}const wn=e=>!!e.type.__asyncLoader;function ma(e){te(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:l,timeout:o,suspensible:a=!0,onError:i}=e;let u=null,c,f=0;const h=()=>(f++,u=null,d()),d=()=>{let y;return u||(y=u=t().catch(C=>{if(C=C instanceof Error?C:new Error(String(C)),i)return new Promise((P,k)=>{i(C,()=>P(h()),()=>k(C),f+1)});throw C}).then(C=>y!==u&&u?u:(C&&(C.__esModule||C[Symbol.toStringTag]==="Module")&&(C=C.default),c=C,C)))};return _s({name:"AsyncComponentWrapper",__asyncLoader:d,__asyncHydrate(y,C,P){const k=y.isConnected;let _=!1;(C.bu||(C.bu=[])).push(()=>_=!0);const B=()=>{_||!y.parentNode||k&&!y.isConnected||P()},A=l?()=>{const w=l(B,I=>pa(y,I));w&&(C.bum||(C.bum=[])).push(w)}:B;c?A():d().then(()=>!C.isUnmounted&&A())},get __asyncResolved(){return c},setup(){const y=Ie;if(Es(y),c)return()=>Un(c,y);const C=w=>{u=null,Ln(w,y,13,!r)};if(a&&y.suspense||an)return d().then(w=>()=>Un(w,y)).catch(w=>(C(w),()=>r?G(r,{error:w}):null));const P=Z(!1),k=Z(),_=Z(!!s);let B,A;return Ms(()=>{B!=null&&clearTimeout(B),A!=null&&clearTimeout(A)}),s&&(A=setTimeout(()=>{y.isUnmounted||(_.value=!1)},s)),o!=null&&(B=setTimeout(()=>{if(!y.isUnmounted&&!P.value&&!k.value){const w=new Error(`Async component timed out after ${o}ms.`);C(w),k.value=w}},o)),d().then(()=>{y.isUnmounted||(P.value=!0,y.parent&&Cr(y.parent.vnode)&&y.parent.update())}).catch(w=>{if(y.isUnmounted){u=null;return}C(w),k.value=w}),()=>{if(P.value&&c)return Un(c,y);if(k.value&&r)return G(r,{error:k.value});if(n&&!_.value)return Un(n,y)}}})}function Un(e,t){const{ref:n,props:r,children:s,ce:l}=t.vnode,o=G(e,r,s);return o.ref=n,o.ce=l,delete t.vnode.ce,o}const Cr=e=>e.type.__isKeepAlive;function ga(e,t){wo(e,"a",t)}function va(e,t){wo(e,"da",t)}function wo(e,t,n=Ie){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Pr(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Cr(s.parent.vnode)&&ya(r,t,n,s),s=s.parent}}function ya(e,t,n,r){const s=Pr(t,e,r,!0);Ms(()=>{ms(r[t],s)},n)}function Pr(e,t,n=Ie,r=!1){if(n){const s=n[e]||(n[e]=[]),l=t.__weh||(t.__weh=(...o)=>{Et();const a=$n(n),i=it(t,n,e,o);return a(),Mt(),i});return r?s.unshift(l):s.push(l),l}}const Bt=e=>(t,n=Ie)=>{(!an||e==="sp")&&Pr(e,(...r)=>t(...r),n)},ba=Bt("bm"),Dn=Bt("m"),Ca=Bt("bu"),Pa=Bt("u"),Ar=Bt("bum"),Ms=Bt("um"),Aa=Bt("sp"),wa=Bt("rtg"),Sa=Bt("rtc");function xa(e,t=Ie){Pr("ec",e,t)}const So="components";function es(e,t){return ko(So,e,!0,t)||e}const xo=Symbol.for("v-ndc");function rr(e){return xe(e)?ko(So,e,!1)||e:e||xo}function ko(e,t,n=!0,r=!1){const s=Xe||Ie;if(s){const l=s.type;{const a=cu(l,!1);if(a&&(a===t||a===Ke(t)||a===pr(Ke(t))))return l}const o=qs(s[e]||l[e],t)||qs(s.appContext[e],t);return!o&&r?l:o}}function qs(e,t){return e&&(e[t]||e[Ke(t)]||e[pr(Ke(t))])}function xt(e,t,n,r){let s;const l=n,o=Q(e);if(o||xe(e)){const a=o&&qt(e);let i=!1,u=!1;a&&(i=!nt(e),u=Rt(e),e=vr(e)),s=new Array(e.length);for(let c=0,f=e.length;c<f;c++)s[c]=t(i?u?ln(ot(e[c])):ot(e[c]):e[c],c,void 0,l)}else if(typeof e=="number"){s=new Array(e);for(let a=0;a<e;a++)s[a]=t(a+1,a,void 0,l)}else if(ye(e))if(e[Symbol.iterator])s=Array.from(e,(a,i)=>t(a,i,void 0,l));else{const a=Object.keys(e);s=new Array(a.length);for(let i=0,u=a.length;i<u;i++){const c=a[i];s[i]=t(e[c],c,i,l)}}else s=[];return s}const ts=e=>e?Ko(e)?xr(e):ts(e.parent):null,Sn=Le(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ts(e.parent),$root:e=>ts(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Eo(e),$forceUpdate:e=>e.f||(e.f=()=>{xs(e.update)}),$nextTick:e=>e.n||(e.n=tt.bind(e.proxy)),$watch:e=>fa.bind(e)}),Or=(e,t)=>e!==Ce&&!e.__isScriptSetup&&pe(e,t),ka={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:l,accessCache:o,type:a,appContext:i}=e;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return l[t]}else{if(Or(r,t))return o[t]=1,r[t];if(s!==Ce&&pe(s,t))return o[t]=2,s[t];if(pe(l,t))return o[t]=3,l[t];if(n!==Ce&&pe(n,t))return o[t]=4,n[t];ns&&(o[t]=0)}}const u=Sn[t];let c,f;if(u)return t==="$attrs"&&$e(e.attrs,"get",""),u(e);if((c=a.__cssModules)&&(c=c[t]))return c;if(n!==Ce&&pe(n,t))return o[t]=4,n[t];if(f=i.config.globalProperties,pe(f,t))return f[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:l}=e;return Or(s,t)?(s[t]=n,!0):r!==Ce&&pe(r,t)?(r[t]=n,!0):pe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,props:l,type:o}},a){let i;return!!(n[a]||e!==Ce&&a[0]!=="$"&&pe(e,a)||Or(t,a)||pe(l,a)||pe(r,a)||pe(Sn,a)||pe(s.config.globalProperties,a)||(i=o.__cssModules)&&i[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:pe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Js(e){return Q(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ns=!0;function _a(e){const t=Eo(e),n=e.proxy,r=e.ctx;ns=!1,t.beforeCreate&&Ys(t.beforeCreate,e,"bc");const{data:s,computed:l,methods:o,watch:a,provide:i,inject:u,created:c,beforeMount:f,mounted:h,beforeUpdate:d,updated:y,activated:C,deactivated:P,beforeDestroy:k,beforeUnmount:_,destroyed:B,unmounted:A,render:w,renderTracked:I,renderTriggered:j,errorCaptured:le,serverPrefetch:Ae,expose:me,inheritAttrs:Me,components:De,directives:Ge,filters:we}=t;if(u&&Ea(u,r,null),o)for(const ce in o){const ie=o[ce];te(ie)&&(r[ce]=ie.bind(n))}if(s){const ce=s.call(n,n);ye(ce)&&(e.data=$t(ce))}if(ns=!0,l)for(const ce in l){const ie=l[ce],et=te(ie)?ie.bind(n,n):te(ie.get)?ie.get.bind(n,n):gt,rt=!te(ie)&&te(ie.set)?ie.set.bind(n):gt,Je=ve({get:et,set:rt});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>Je.value,set:Ne=>Je.value=Ne})}if(a)for(const ce in a)_o(a[ce],r,n,ce);if(i){const ce=te(i)?i.call(n):i;Reflect.ownKeys(ce).forEach(ie=>{Yn(ie,ce[ie])})}c&&Ys(c,e,"c");function Se(ce,ie){Q(ie)?ie.forEach(et=>ce(et.bind(n))):ie&&ce(ie.bind(n))}if(Se(ba,f),Se(Dn,h),Se(Ca,d),Se(Pa,y),Se(ga,C),Se(va,P),Se(xa,le),Se(Sa,I),Se(wa,j),Se(Ar,_),Se(Ms,A),Se(Aa,Ae),Q(me))if(me.length){const ce=e.exposed||(e.exposed={});me.forEach(ie=>{Object.defineProperty(ce,ie,{get:()=>n[ie],set:et=>n[ie]=et,enumerable:!0})})}else e.exposed||(e.exposed={});w&&e.render===gt&&(e.render=w),Me!=null&&(e.inheritAttrs=Me),De&&(e.components=De),Ge&&(e.directives=Ge),Ae&&Es(e)}function Ea(e,t,n=gt){Q(e)&&(e=rs(e));for(const r in e){const s=e[r];let l;ye(s)?"default"in s?l=lt(s.from||r,s.default,!0):l=lt(s.from||r):l=lt(s),Fe(l)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>l.value,set:o=>l.value=o}):t[r]=l}}function Ys(e,t,n){it(Q(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function _o(e,t,n,r){let s=r.includes(".")?Po(n,r):()=>n[r];if(xe(e)){const l=t[e];te(l)&&Jt(s,l)}else if(te(e))Jt(s,e.bind(n));else if(ye(e))if(Q(e))e.forEach(l=>_o(l,t,n,r));else{const l=te(e.handler)?e.handler.bind(n):t[e.handler];te(l)&&Jt(s,l,e)}}function Eo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:l,config:{optionMergeStrategies:o}}=e.appContext,a=l.get(t);let i;return a?i=a:!s.length&&!n&&!r?i=t:(i={},s.length&&s.forEach(u=>sr(i,u,o,!0)),sr(i,t,o)),ye(t)&&l.set(t,i),i}function sr(e,t,n,r=!1){const{mixins:s,extends:l}=t;l&&sr(e,l,n,!0),s&&s.forEach(o=>sr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=Ma[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Ma={data:Qs,props:Xs,emits:Xs,methods:vn,computed:vn,beforeCreate:Ve,created:Ve,beforeMount:Ve,mounted:Ve,beforeUpdate:Ve,updated:Ve,beforeDestroy:Ve,beforeUnmount:Ve,destroyed:Ve,unmounted:Ve,activated:Ve,deactivated:Ve,errorCaptured:Ve,serverPrefetch:Ve,components:vn,directives:vn,watch:Ta,provide:Qs,inject:Ra};function Qs(e,t){return t?e?function(){return Le(te(e)?e.call(this,this):e,te(t)?t.call(this,this):t)}:t:e}function Ra(e,t){return vn(rs(e),rs(t))}function rs(e){if(Q(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ve(e,t){return e?[...new Set([].concat(e,t))]:t}function vn(e,t){return e?Le(Object.create(null),e,t):t}function Xs(e,t){return e?Q(e)&&Q(t)?[...new Set([...e,...t])]:Le(Object.create(null),Js(e),Js(t??{})):t}function Ta(e,t){if(!e)return t;if(!t)return e;const n=Le(Object.create(null),e);for(const r in t)n[r]=Ve(e[r],t[r]);return n}function Mo(){return{app:null,config:{isNativeTag:zl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ba=0;function Na(e,t){return function(r,s=null){te(r)||(r=Le({},r)),s!=null&&!ye(s)&&(s=null);const l=Mo(),o=new WeakSet,a=[];let i=!1;const u=l.app={_uid:Ba++,_component:r,_props:s,_container:null,_context:l,_instance:null,version:du,get config(){return l.config},set config(c){},use(c,...f){return o.has(c)||(c&&te(c.install)?(o.add(c),c.install(u,...f)):te(c)&&(o.add(c),c(u,...f))),u},mixin(c){return l.mixins.includes(c)||l.mixins.push(c),u},component(c,f){return f?(l.components[c]=f,u):l.components[c]},directive(c,f){return f?(l.directives[c]=f,u):l.directives[c]},mount(c,f,h){if(!i){const d=u._ceVNode||G(r,s);return d.appContext=l,h===!0?h="svg":h===!1&&(h=void 0),e(d,c,h),i=!0,u._container=c,c.__vue_app__=u,xr(d.component)}},onUnmount(c){a.push(c)},unmount(){i&&(it(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,f){return l.provides[c]=f,u},runWithContext(c){const f=sn;sn=u;try{return c()}finally{sn=f}}};return u}}let sn=null;const Oa=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ke(t)}Modifiers`]||e[`${Gt(t)}Modifiers`];function Ia(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Ce;let s=n;const l=t.startsWith("update:"),o=l&&Oa(r,t.slice(7));o&&(o.trim&&(s=n.map(c=>xe(c)?c.trim():c)),o.number&&(s=s.map(mr)));let a,i=r[a=Er(t)]||r[a=Er(Ke(t))];!i&&l&&(i=r[a=Er(Gt(t))]),i&&it(i,e,6,s);const u=r[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,it(u,e,6,s)}}const Ha=new WeakMap;function Ro(e,t,n=!1){const r=n?Ha:t.emitsCache,s=r.get(e);if(s!==void 0)return s;const l=e.emits;let o={},a=!1;if(!te(e)){const i=u=>{const c=Ro(u,t,!0);c&&(a=!0,Le(o,c))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return!l&&!a?(ye(e)&&r.set(e,null),null):(Q(l)?l.forEach(i=>o[i]=null):Le(o,l),ye(e)&&r.set(e,o),o)}function wr(e,t){return!e||!fr(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),pe(e,t[0].toLowerCase()+t.slice(1))||pe(e,Gt(t))||pe(e,t))}function Zs(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[l],slots:o,attrs:a,emit:i,render:u,renderCache:c,props:f,data:h,setupState:d,ctx:y,inheritAttrs:C}=e,P=tr(e);let k,_;try{if(n.shapeFlag&4){const A=s||r,w=A;k=ht(u.call(w,A,c,f,d,h,y)),_=a}else{const A=t;k=ht(A.length>1?A(f,{attrs:a,slots:o,emit:i}):A(f,null)),_=t.props?a:La(a)}}catch(A){Yt.length=0,Ln(A,e,1),k=G(Tt)}let B=k;if(_&&C!==!1){const A=Object.keys(_),{shapeFlag:w}=B;A.length&&w&7&&(l&&A.some(dr)&&(_=Da(_,l)),B=on(B,_,!1,!0))}if(n.dirs&&(B=on(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition){const A=br(B.type)&&Ao(B)||B;ks(A,n.transition)}return k=B,tr(P),k}const La=e=>{let t;for(const n in e)(n==="class"||n==="style"||fr(n))&&((t||(t={}))[n]=e[n]);return t},Da=(e,t)=>{const n={};for(const r in e)(!dr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function $a(e,t,n){const{props:r,children:s,component:l}=e,{props:o,children:a,patchFlag:i}=t,u=l.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&i>=0){if(i&1024)return!0;if(i&16)return r?el(r,o,u):!!o;if(i&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(To(o,r,h)&&!wr(u,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?el(r,o,u):!0:!!o;return!1}function el(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const l=r[s];if(To(t,e,l)&&!wr(n,l))return!0}return!1}function To(e,t,n){const r=e[n],s=t[n];return n==="style"&&ye(r)&&ye(s)?!_t(r,s):r!==s}function Fa({vnode:e,parent:t,suspense:n},r){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=r,e=s),s===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}const Bo={},No=()=>Object.create(Bo),Oo=e=>Object.getPrototypeOf(e)===Bo;function Ga(e,t,n,r=!1){const s={},l=No();e.propsDefaults=Object.create(null),Io(e,t,s,l);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:fo(s):e.type.props?e.props=s:e.props=l,e.attrs=l}function ja(e,t,n,r){const{props:s,attrs:l,vnode:{patchFlag:o}}=e,a=he(s),[i]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(wr(e.emitsOptions,h))continue;const d=t[h];if(i)if(pe(l,h))d!==l[h]&&(l[h]=d,u=!0);else{const y=Ke(h);s[y]=ss(i,a,y,d,e,!1)}else d!==l[h]&&(l[h]=d,u=!0)}}}else{Io(e,t,s,l)&&(u=!0);let c;for(const f in a)(!t||!pe(t,f)&&((c=Gt(f))===f||!pe(t,c)))&&(i?n&&(n[f]!==void 0||n[c]!==void 0)&&(s[f]=ss(i,a,f,void 0,e,!0)):delete s[f]);if(l!==a)for(const f in l)(!t||!pe(t,f))&&(delete l[f],u=!0)}u&&wt(e.attrs,"set","")}function Io(e,t,n,r){const[s,l]=e.propsOptions;let o=!1,a;if(t)for(let i in t){if(bn(i))continue;const u=t[i];let c;s&&pe(s,c=Ke(i))?!l||!l.includes(c)?n[c]=u:(a||(a={}))[c]=u:wr(e.emitsOptions,i)||(!(i in r)||u!==r[i])&&(r[i]=u,o=!0)}if(l){const i=he(n),u=a||Ce;for(let c=0;c<l.length;c++){const f=l[c];n[f]=ss(s,i,f,u[f],e,!pe(u,f))}}return o}function ss(e,t,n,r,s,l){const o=e[n];if(o!=null){const a=pe(o,"default");if(a&&r===void 0){const i=o.default;if(o.type!==Function&&!o.skipFactory&&te(i)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const c=$n(s);r=u[n]=i.call(null,t),c()}}else r=i;s.ce&&s.ce._setProp(n,r)}o[0]&&(l&&!a?r=!1:o[1]&&(r===""||r===Gt(n))&&(r=!0))}return r}const za=new WeakMap;function Ho(e,t,n=!1){const r=n?za:t.propsCache,s=r.get(e);if(s)return s;const l=e.props,o={},a=[];let i=!1;if(!te(e)){const c=f=>{i=!0;const[h,d]=Ho(f,t,!0);Le(o,h),d&&a.push(...d)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!l&&!i)return ye(e)&&r.set(e,nn),nn;if(Q(l))for(let c=0;c<l.length;c++){const f=Ke(l[c]);tl(f)&&(o[f]=Ce)}else if(l)for(const c in l){const f=Ke(c);if(tl(f)){const h=l[c],d=o[f]=Q(h)||te(h)?{type:h}:Le({},h),y=d.type;let C=!1,P=!0;if(Q(y))for(let k=0;k<y.length;++k){const _=y[k],B=te(_)&&_.name;if(B==="Boolean"){C=!0;break}else B==="String"&&(P=!1)}else C=te(y)&&y.name==="Boolean";d[0]=C,d[1]=P,(C||pe(d,"default"))&&a.push(f)}}const u=[o,a];return ye(e)&&r.set(e,u),u}function tl(e){return e[0]!=="$"&&!bn(e)}const Rs=e=>e==="_"||e==="_ctx"||e==="$stable",Ts=e=>Q(e)?e.map(ht):[ht(e)],Va=(e,t,n)=>{if(t._n)return t;const r=yr((...s)=>Ts(t(...s)),n);return r._c=!1,r},Lo=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Rs(s))continue;const l=e[s];if(te(l))t[s]=Va(s,l,r);else if(l!=null){const o=Ts(l);t[s]=()=>o}}},Do=(e,t)=>{const n=Ts(t);e.slots.default=()=>n},$o=(e,t,n)=>{for(const r in t)(n||!Rs(r))&&(e[r]=t[r])},Ua=(e,t,n)=>{const r=e.slots=No();if(e.vnode.shapeFlag&32){const s=t._;s?($o(r,t,n),n&&Kl(r,"_",s,!0)):Lo(t,r)}else t&&Do(e,t)},Wa=(e,t,n)=>{const{vnode:r,slots:s}=e;let l=!0,o=Ce;if(r.shapeFlag&32){const a=t._;a?n&&a===1?l=!1:$o(s,t,n):(l=!t.$stable,Lo(t,s)),o=t}else t&&(Do(e,t),o={default:1});if(l)for(const a in s)!Rs(a)&&o[a]==null&&delete s[a]},Ye=Qa;function Ka(e){return qa(e)}function qa(e,t){const n=gr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:l,createElement:o,createText:a,createComment:i,setText:u,setElementText:c,parentNode:f,nextSibling:h,setScopeId:d=gt,insertStaticContent:y}=e,C=(m,v,b,x=null,M=null,S=null,H=void 0,O=null,N=!!v.dynamicChildren)=>{if(m===v)return;m&&!hn(m,v)&&(x=E(m),Ne(m,M,S,!0),m=null),v.patchFlag===-2&&(N=!1,v.dynamicChildren=null);const{type:R,ref:J,shapeFlag:F}=v;switch(R){case Sr:P(m,v,b,x);break;case Tt:k(m,v,b,x);break;case Qn:m==null&&_(v,b,x,H);break;case Re:De(m,v,b,x,M,S,H,O,N);break;default:F&1?w(m,v,b,x,M,S,H,O,N):F&6?Ge(m,v,b,x,M,S,H,O,N):(F&64||F&128)&&R.process(m,v,b,x,M,S,H,O,N,K)}J!=null&&M?An(J,m&&m.ref,S,v||m,!v):J==null&&m&&m.ref!=null&&An(m.ref,null,S,m,!0)},P=(m,v,b,x)=>{if(m==null)r(v.el=a(v.children),b,x);else{const M=v.el=m.el;v.children!==m.children&&u(M,v.children)}},k=(m,v,b,x)=>{m==null?r(v.el=i(v.children||""),b,x):v.el=m.el},_=(m,v,b,x)=>{[m.el,m.anchor]=y(m.children,v,b,x,m.el,m.anchor)},B=({el:m,anchor:v},b,x)=>{let M;for(;m&&m!==v;)M=h(m),r(m,b,x),m=M;r(v,b,x)},A=({el:m,anchor:v})=>{let b;for(;m&&m!==v;)b=h(m),s(m),m=b;s(v)},w=(m,v,b,x,M,S,H,O,N)=>{if(v.type==="svg"?H="svg":v.type==="math"&&(H="mathml"),m==null)I(v,b,x,M,S,H,O,N);else{const R=m.el&&m.el._isVueCE?m.el:null;try{R&&R._beginPatch(),Ae(m,v,M,S,H,O,N)}finally{R&&R._endPatch()}}},I=(m,v,b,x,M,S,H,O)=>{let N,R;const{props:J,shapeFlag:F,transition:q,dirs:X}=m;if(N=m.el=o(m.type,S,J&&J.is,J),F&8?c(N,m.children):F&16&&le(m.children,N,null,x,M,Ir(m,S),H,O),X&&jt(m,null,x,"created"),j(N,m,m.scopeId,H,x),J){for(const ge in J)ge!=="value"&&!bn(ge)&&l(N,ge,null,J[ge],S,x);"value"in J&&l(N,"value",null,J.value,S),(R=J.onVnodeBeforeMount)&&ct(R,x,m)}X&&jt(m,null,x,"beforeMount");const oe=Ja(M,q);oe&&q.beforeEnter(N),r(N,v,b),((R=J&&J.onVnodeMounted)||oe||X)&&Ye(()=>{try{R&&ct(R,x,m),oe&&q.enter(N),X&&jt(m,null,x,"mounted")}finally{}},M)},j=(m,v,b,x,M)=>{if(b&&d(m,b),x)for(let S=0;S<x.length;S++)d(m,x[S]);if(M){let S=M.subTree;if(v===S||zo(S.type)&&(S.ssContent===v||S.ssFallback===v)){const H=M.vnode;j(m,H,H.scopeId,H.slotScopeIds,M.parent)}}},le=(m,v,b,x,M,S,H,O,N=0)=>{for(let R=N;R<m.length;R++){const J=m[R]=O?At(m[R]):ht(m[R]);C(null,J,v,b,x,M,S,H,O)}},Ae=(m,v,b,x,M,S,H)=>{const O=v.el=m.el;let{patchFlag:N,dynamicChildren:R,dirs:J}=v;N|=m.patchFlag&16;const F=m.props||Ce,q=v.props||Ce;let X;if(b&&zt(b,!1),(X=q.onVnodeBeforeUpdate)&&ct(X,b,v,m),J&&jt(v,m,b,"beforeUpdate"),b&&zt(b,!0),R&&(!m.dynamicChildren||m.dynamicChildren.length!==R.length)&&(N=0,H=!1,R=null),(F.innerHTML&&q.innerHTML==null||F.textContent&&q.textContent==null)&&c(O,""),R?me(m.dynamicChildren,R,O,b,x,Ir(v,M),S):H||ie(m,v,O,null,b,x,Ir(v,M),S,!1),N>0){if(N&16)Me(O,F,q,b,M);else if(N&2&&F.class!==q.class&&l(O,"class",null,q.class,M),N&4&&l(O,"style",F.style,q.style,M),N&8){const oe=v.dynamicProps;for(let ge=0;ge<oe.length;ge++){const fe=oe[ge],ke=F[fe],Ee=q[fe];(Ee!==ke||fe==="value")&&l(O,fe,ke,Ee,M,b)}}N&1&&m.children!==v.children&&c(O,v.children)}else!H&&R==null&&Me(O,F,q,b,M);((X=q.onVnodeUpdated)||J)&&Ye(()=>{X&&ct(X,b,v,m),J&&jt(v,m,b,"updated")},x)},me=(m,v,b,x,M,S,H)=>{for(let O=0;O<v.length;O++){const N=m[O],R=v[O],J=N.el&&(N.type===Re||!hn(N,R)||N.shapeFlag&198)?f(N.el):b;C(N,R,J,null,x,M,S,H,!0)}},Me=(m,v,b,x,M)=>{if(v!==b){if(v!==Ce)for(const S in v)!bn(S)&&!(S in b)&&l(m,S,v[S],null,M,x);for(const S in b){if(bn(S))continue;const H=b[S],O=v[S];H!==O&&S!=="value"&&l(m,S,O,H,M,x)}"value"in b&&l(m,"value",v.value,b.value,M)}},De=(m,v,b,x,M,S,H,O,N)=>{const R=v.el=m?m.el:a(""),J=v.anchor=m?m.anchor:a("");let{patchFlag:F,dynamicChildren:q,slotScopeIds:X}=v;X&&(O=O?O.concat(X):X),m==null?(r(R,b,x),r(J,b,x),le(v.children||[],b,J,M,S,H,O,N)):F>0&&F&64&&q&&m.dynamicChildren&&m.dynamicChildren.length===q.length?(me(m.dynamicChildren,q,b,M,S,H,O),(v.key!=null||M&&v===M.subTree)&&Fo(m,v,!0)):ie(m,v,b,J,M,S,H,O,N)},Ge=(m,v,b,x,M,S,H,O,N)=>{v.slotScopeIds=O,m==null?v.shapeFlag&512?M.ctx.activate(v,b,x,H,N):we(v,b,x,M,S,H,N):qe(m,v,N)},we=(m,v,b,x,M,S,H)=>{const O=m.component=su(m,x,M);if(Cr(m)&&(O.ctx.renderer=K),ou(O,!1,H),O.asyncDep){if(M&&M.registerDep(O,Se,H),!m.el){const N=O.subTree=G(Tt);k(null,N,v,b),m.placeholder=N.el}}else Se(O,m,v,b,M,S,H)},qe=(m,v,b)=>{const x=v.component=m.component;if($a(m,v,b))if(x.asyncDep&&!x.asyncResolved){ce(x,v,b);return}else x.next=v,x.update();else v.el=m.el,x.vnode=v},Se=(m,v,b,x,M,S,H)=>{const O=()=>{if(m.isMounted){let{next:F,bu:q,u:X,parent:oe,vnode:ge}=m;{const Qe=Go(m);if(Qe){F&&(F.el=ge.el,ce(m,F,H)),Qe.asyncDep.then(()=>{Ye(()=>{m.isUnmounted||R()},M)});return}}let fe=F,ke;zt(m,!1),F?(F.el=ge.el,ce(m,F,H)):F=ge,q&&Jn(q),(ke=F.props&&F.props.onVnodeBeforeUpdate)&&ct(ke,oe,F,ge),zt(m,!0);const Ee=Zs(m),ze=m.subTree;m.subTree=Ee,C(ze,Ee,f(ze.el),E(ze),m,M,S),F.el=Ee.el,fe===null&&Fa(m,Ee.el),X&&Ye(X,M),(ke=F.props&&F.props.onVnodeUpdated)&&Ye(()=>ct(ke,oe,F,ge),M)}else{let F;const{el:q,props:X}=v,{bm:oe,m:ge,parent:fe,root:ke,type:Ee}=m,ze=wn(v);zt(m,!1),oe&&Jn(oe),!ze&&(F=X&&X.onVnodeBeforeMount)&&ct(F,fe,v),zt(m,!0);{ke.ce&&ke.ce._hasShadowRoot()&&ke.ce._injectChildStyle(Ee,m.parent?m.parent.type:void 0);const Qe=m.subTree=Zs(m);C(null,Qe,b,x,m,M,S),v.el=Qe.el}if(ge&&Ye(ge,M),!ze&&(F=X&&X.onVnodeMounted)){const Qe=v;Ye(()=>ct(F,fe,Qe),M)}(v.shapeFlag&256||fe&&wn(fe.vnode)&&fe.vnode.shapeFlag&256)&&m.a&&Ye(m.a,M),m.isMounted=!0,v=b=x=null}};m.scope.on();const N=m.effect=new Ql(O);m.scope.off();const R=m.update=N.run.bind(N),J=m.job=N.runIfDirty.bind(N);J.i=m,J.id=m.uid,N.scheduler=()=>xs(J),zt(m,!0),R()},ce=(m,v,b)=>{v.component=m;const x=m.vnode.props;m.vnode=v,m.next=null,ja(m,v.props,x,b),Wa(m,v.children,b),Et(),Vs(m),Mt()},ie=(m,v,b,x,M,S,H,O,N=!1)=>{const R=m&&m.children,J=m?m.shapeFlag:0,F=v.children,{patchFlag:q,shapeFlag:X}=v;if(q>0){if(q&128){rt(R,F,b,x,M,S,H,O,N);return}else if(q&256){et(R,F,b,x,M,S,H,O,N);return}}X&8?(J&16&&je(R,M,S),F!==R&&c(b,F)):J&16?X&16?rt(R,F,b,x,M,S,H,O,N):je(R,M,S,!0):(J&8&&c(b,""),X&16&&le(F,b,x,M,S,H,O,N))},et=(m,v,b,x,M,S,H,O,N)=>{m=m||nn,v=v||nn;const R=m.length,J=v.length,F=Math.min(R,J);let q;for(q=0;q<F;q++){const X=v[q]=N?At(v[q]):ht(v[q]);C(m[q],X,b,null,M,S,H,O,N)}R>J?je(m,M,S,!0,!1,F):le(v,b,x,M,S,H,O,N,F)},rt=(m,v,b,x,M,S,H,O,N)=>{let R=0;const J=v.length;let F=m.length-1,q=J-1;for(;R<=F&&R<=q;){const X=m[R],oe=v[R]=N?At(v[R]):ht(v[R]);if(hn(X,oe))C(X,oe,b,null,M,S,H,O,N);else break;R++}for(;R<=F&&R<=q;){const X=m[F],oe=v[q]=N?At(v[q]):ht(v[q]);if(hn(X,oe))C(X,oe,b,null,M,S,H,O,N);else break;F--,q--}if(R>F){if(R<=q){const X=q+1,oe=X<J?v[X].el:x;for(;R<=q;)C(null,v[R]=N?At(v[R]):ht(v[R]),b,oe,M,S,H,O,N),R++}}else if(R>q)for(;R<=F;)Ne(m[R],M,S,!0),R++;else{const X=R,oe=R,ge=new Map;for(R=oe;R<=q;R++){const se=v[R]=N?At(v[R]):ht(v[R]);se.key!=null&&ge.set(se.key,R)}let fe,ke=0;const Ee=q-oe+1;let ze=!1,Qe=0;const D=new Array(Ee);for(R=0;R<Ee;R++)D[R]=0;for(R=X;R<=F;R++){const se=m[R];if(ke>=Ee){Ne(se,M,S,!0);continue}let ue;if(se.key!=null)ue=ge.get(se.key);else for(fe=oe;fe<=q;fe++)if(D[fe-oe]===0&&hn(se,v[fe])){ue=fe;break}ue===void 0?Ne(se,M,S,!0):(D[ue-oe]=R+1,ue>=Qe?Qe=ue:ze=!0,C(se,v[ue],b,null,M,S,H,O,N),ke++)}const g=ze?Ya(D):nn;for(fe=g.length-1,R=Ee-1;R>=0;R--){const se=oe+R,ue=v[se],T=v[se+1],ne=se+1<J?T.el||jo(T):x;D[R]===0?C(null,ue,b,ne,M,S,H,O,N):ze&&(fe<0||R!==g[fe]?Je(ue,b,ne,2):fe--)}}},Je=(m,v,b,x,M=null)=>{const{el:S,type:H,transition:O,children:N,shapeFlag:R}=m;if(R&6){Je(m.component.subTree,v,b,x);return}if(R&128){m.suspense.move(v,b,x);return}if(R&64){H.move(m,v,b,K);return}if(H===Re){r(S,v,b);for(let F=0;F<N.length;F++)Je(N[F],v,b,x);r(m.anchor,v,b);return}if(H===Qn){B(m,v,b);return}if(x!==2&&R&1&&O)if(x===0)O.persisted&&!S[Nr]?r(S,v,b):(O.beforeEnter(S),r(S,v,b),Ye(()=>O.enter(S),M));else{const{leave:F,delayLeave:q,afterLeave:X}=O,oe=()=>{m.ctx.isUnmounted?s(S):r(S,v,b)},ge=()=>{const fe=S._isLeaving||!!S[Nr];S._isLeaving&&S[Nr](!0),O.persisted&&!fe?oe():F(S,()=>{oe(),X&&X()})};q?q(S,oe,ge):ge()}else r(S,v,b)},Ne=(m,v,b,x=!1,M=!1)=>{const{type:S,props:H,ref:O,children:N,dynamicChildren:R,shapeFlag:J,patchFlag:F,dirs:q,cacheIndex:X,memo:oe}=m;if(F===-2&&(M=!1),O!=null&&(Et(),An(O,null,b,m,!0),Mt()),X!=null&&(v.renderCache[X]=void 0),J&256){v.ctx.deactivate(m);return}const ge=J&1&&q,fe=!wn(m);let ke;if(fe&&(ke=H&&H.onVnodeBeforeUnmount)&&ct(ke,v,m),J&6)ut(m.component,b,x);else{if(J&128){m.suspense.unmount(b,x);return}ge&&jt(m,null,v,"beforeUnmount"),J&64?m.type.remove(m,v,b,K,x):R&&!R.hasOnce&&(S!==Re||F>0&&F&64)?je(R,v,b,!1,!0):(S===Re&&F&384||!M&&J&16)&&je(N,v,b),x&&yt(m)}const Ee=oe!=null&&X==null;(fe&&(ke=H&&H.onVnodeUnmounted)||ge||Ee)&&Ye(()=>{ke&&ct(ke,v,m),ge&&jt(m,null,v,"unmounted"),Ee&&(m.el=null)},b)},yt=m=>{const{type:v,el:b,anchor:x,transition:M}=m;if(v===Re){Nt(b,x);return}if(v===Qn){A(m);return}const S=()=>{s(b),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(m.shapeFlag&1&&M&&!M.persisted){const{leave:H,delayLeave:O}=M,N=()=>H(b,S);O?O(m.el,S,N):N()}else S()},Nt=(m,v)=>{let b;for(;m!==v;)b=h(m),s(m),m=b;s(v)},ut=(m,v,b)=>{const{bum:x,scope:M,job:S,subTree:H,um:O,m:N,a:R}=m;nl(N),nl(R),x&&Jn(x),M.stop(),S&&(S.flags|=8,Ne(H,m,v,b)),O&&Ye(O,v),Ye(()=>{m.isUnmounted=!0},v)},je=(m,v,b,x=!1,M=!1,S=0)=>{for(let H=S;H<m.length;H++)Ne(m[H],v,b,x,M)},E=m=>{if(m.shapeFlag&6)return E(m.component.subTree);if(m.shapeFlag&128)return m.suspense.next();const v=h(m.anchor||m.el),b=v&&v[da];return b?h(b):v};let z=!1;const L=(m,v,b)=>{let x;m==null?v._vnode&&(Ne(v._vnode,null,null,!0),x=v._vnode.component):C(v._vnode||null,m,v,null,null,null,b),v._vnode=m,z||(z=!0,Vs(x),vo(),z=!1)},K={p:C,um:Ne,m:Je,r:yt,mt:we,mc:le,pc:ie,pbc:me,n:E,o:e};return{render:L,hydrate:void 0,createApp:Na(L)}}function Ir({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function zt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Ja(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Fo(e,t,n=!1){const r=e.children,s=t.children;if(Q(r)&&Q(s))for(let l=0;l<r.length;l++){const o=r[l];let a=s[l];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[l]=At(s[l]),a.el=o.el),!n&&a.patchFlag!==-2&&Fo(o,a)),a.type===Sr&&(a.patchFlag===-1&&(a=s[l]=At(a)),a.el=o.el),a.type===Tt&&!a.el&&(a.el=o.el)}}function Ya(e){const t=e.slice(),n=[0];let r,s,l,o,a;const i=e.length;for(r=0;r<i;r++){const u=e[r];if(u!==0){if(s=n[n.length-1],e[s]<u){t[r]=s,n.push(r);continue}for(l=0,o=n.length-1;l<o;)a=l+o>>1,e[n[a]]<u?l=a+1:o=a;u<e[n[l]]&&(l>0&&(t[r]=n[l-1]),n[l]=r)}}for(l=n.length,o=n[l-1];l-- >0;)n[l]=o,o=t[o];return n}function Go(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Go(t)}function nl(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function jo(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?jo(t.subTree):null}const zo=e=>e.__isSuspense;function Qa(e,t){t&&t.pendingBranch?Q(e)?t.effects.push(...e):t.effects.push(e):aa(e)}const Re=Symbol.for("v-fgt"),Sr=Symbol.for("v-txt"),Tt=Symbol.for("v-cmt"),Qn=Symbol.for("v-stc"),Yt=[];let Ze=null;function W(e=!1){Yt.push(Ze=e?null:[])}function Vo(){Yt.pop(),Ze=Yt[Yt.length-1]||null}let Rn=1;function lr(e,t=!1){Rn+=e,e<0&&Ze&&t&&(Ze.hasOnce=!0)}function Uo(e){return e.dynamicChildren=Rn>0?Ze||nn:null,Vo(),Rn>0&&Ze&&Ze.push(e),e}function re(e,t,n,r,s,l){return Uo(p(e,t,n,r,s,l,!0))}function He(e,t,n,r,s){return Uo(G(e,t,n,r,s,!0))}function or(e){return e?e.__v_isVNode===!0:!1}function hn(e,t){return e.type===t.type&&e.key===t.key}const Wo=({key:e})=>e??null,Xn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?xe(e)||Fe(e)||te(e)?{i:Xe,r:e,k:t,f:!!n}:e:null);function p(e,t=null,n=null,r=0,s=null,l=e===Re?0:1,o=!1,a=!1){const i={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Wo(t),ref:t&&Xn(t),scopeId:bo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Xe};return a?(ir(i,n),l&128&&e.normalize(i)):n&&(i.shapeFlag|=xe(n)?8:16),Rn>0&&!o&&Ze&&(i.patchFlag>0||l&6)&&i.patchFlag!==32&&Ze.push(i),i}const G=Xa;function Xa(e,t=null,n=null,r=0,s=null,l=!1){if((!e||e===xo)&&(e=Tt),or(e)){const a=on(e,t,!0);return n&&ir(a,n),Rn>0&&!l&&Ze&&(a.shapeFlag&6?Ze[Ze.indexOf(e)]=a:Ze.push(a)),a.patchFlag=-2,a}if(fu(e)&&(e=e.__vccOpts),t){t=Za(t);let{class:a,style:i}=t;a&&!xe(a)&&(t.class=ae(a)),ye(i)&&(Ss(i)&&!Q(i)&&(i=Le({},i)),t.style=Lt(i))}const o=xe(e)?1:zo(e)?128:br(e)?64:ye(e)?4:te(e)?2:0;return p(e,t,n,r,s,o,l,!0)}function Za(e){return e?Ss(e)||Oo(e)?Le({},e):e:null}function on(e,t,n=!1,r=!1){const{props:s,ref:l,patchFlag:o,children:a,transition:i}=e,u=t?tu(s||{},t):s,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Wo(u),ref:t&&t.ref?n&&l?Q(l)?l.concat(Xn(t)):[l,Xn(t)]:Xn(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Re?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:i,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&on(e.ssContent),ssFallback:e.ssFallback&&on(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return i&&r&&ks(c,i.clone(c)),c}function U(e=" ",t=0){return G(Sr,null,e,t)}function eu(e,t){const n=G(Qn,null,e);return n.staticCount=t,n}function Ut(e="",t=!1){return t?(W(),He(Tt,null,e)):G(Tt,null,e)}function ht(e){return e==null||typeof e=="boolean"?G(Tt):Q(e)?G(Re,null,e.slice()):or(e)?At(e):G(Sr,null,String(e))}function At(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:on(e)}function ir(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(Q(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),ir(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Oo(t)?t._ctx=Xe:s===3&&Xe&&(Xe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(te(t)){if(r&65){ir(e,{default:t});return}t={default:t,_ctx:Xe},n=32}else t=String(t),r&64?(n=16,t=[U(t)]):n=8;e.children=t,e.shapeFlag|=n}function tu(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=ae([t.class,r.class]));else if(s==="style")t.style=Lt([t.style,r.style]);else if(fr(s)){const l=t[s],o=r[s];o&&l!==o&&!(Q(l)&&l.includes(o))?t[s]=l?[].concat(l,o):o:o==null&&l==null&&!dr(s)&&(t[s]=o)}else s!==""&&(t[s]=r[s])}return t}function ct(e,t,n,r=null){it(e,t,7,[n,r])}const nu=Mo();let ru=0;function su(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||nu,l={uid:ru++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Oi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ho(r,s),emitsOptions:Ro(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=Ia.bind(null,l),e.ce&&e.ce(l),l}let Ie=null;const lu=()=>Ie||Xe;let ar,Tn;{const e=gr(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),l=>{s.length>1?s.forEach(o=>o(l)):s[0](l)}};ar=t("__VUE_INSTANCE_SETTERS__",n=>Ie=n),Tn=t("__VUE_SSR_SETTERS__",n=>an=n)}const $n=e=>{const t=Ie;return ar(e),e.scope.on(),()=>{e.scope.off(),ar(t)}},rl=()=>{Ie&&Ie.scope.off(),ar(null)};function Ko(e){return e.vnode.shapeFlag&4}let an=!1;function ou(e,t=!1,n=!1){t&&Tn(t);const{props:r,children:s}=e.vnode,l=Ko(e);Ga(e,r,l,t),Ua(e,s,n||t);const o=l?iu(e,t):void 0;return t&&Tn(!1),o}function iu(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ka);const{setup:r}=n;if(r){Et();const s=e.setupContext=r.length>1?uu(e):null,l=$n(e),o=Hn(r,e,0,[e.props,s]),a=Vl(o);if(Mt(),l(),(a||e.sp)&&!wn(e)&&Es(e),a){if(o.then(rl,rl),t)return o.then(i=>{Tn(!0);try{sl(e,i,t)}finally{Tn(!1)}}).catch(i=>{Ln(i,e,0)});e.asyncDep=o}else sl(e,o)}else qo(e)}function sl(e,t,n){te(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ye(t)&&(e.setupState=po(t)),qo(e)}function qo(e,t,n){const r=e.type;e.render||(e.render=r.render||gt);{const s=$n(e);Et();try{_a(e)}finally{Mt(),s()}}}const au={get(e,t){return $e(e,"get",""),e[t]}};function uu(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,au),slots:e.slots,emit:e.emit,expose:t}}function xr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(po(Zi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Sn)return Sn[n](e)},has(t,n){return n in t||n in Sn}})):e.proxy}function cu(e,t=!0){return te(e)?e.displayName||e.name:e.name||t&&e.__name}function fu(e){return te(e)&&"__vccOpts"in e}const ve=(e,t)=>ra(e,t,an);function Bn(e,t,n){try{lr(-1);const r=arguments.length;return r===2?ye(t)&&!Q(t)?or(t)?G(e,null,[t]):G(e,t):G(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&or(n)&&(n=[n]),G(e,t,n))}finally{lr(1)}}const du="3.5.42";/**
* @vue/runtime-dom v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ls;const ll=typeof window<"u"&&window.trustedTypes;if(ll)try{ls=ll.createPolicy("vue",{createHTML:e=>e})}catch{}const Jo=ls?e=>ls.createHTML(e):e=>e,hu="http://www.w3.org/2000/svg",pu="http://www.w3.org/1998/Math/MathML",Pt=typeof document<"u"?document:null,ol=Pt&&Pt.createElement("template"),mu={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?Pt.createElementNS(hu,e):t==="mathml"?Pt.createElementNS(pu,e):n?Pt.createElement(e,{is:n}):Pt.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Pt.createTextNode(e),createComment:e=>Pt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Pt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,l){const o=n?n.previousSibling:t.lastChild;if(s&&(s===l||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===l||!(s=s.nextSibling)););else{ol.innerHTML=Jo(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=ol.content;if(r==="svg"||r==="mathml"){const i=a.firstChild;for(;i.firstChild;)a.appendChild(i.firstChild);a.removeChild(i)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},gu=Symbol("_vtc");function vu(e,t,n){const r=e[gu];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const il=Symbol("_vod"),yu=Symbol("_vsh"),bu=Symbol(""),Cu=/(?:^|;)\s*display\s*:/;function Pu(e,t,n){const r=e.style,s=xe(n);let l=!1;if(n&&!s){if(t)if(xe(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&yn(r,a,"")}else for(const o in t)n[o]==null&&yn(r,o,"");for(const o in n){o==="display"&&(l=!0);const a=n[o];a!=null?wu(e,o,!xe(t)&&t?t[o]:void 0,a)||yn(r,o,a):yn(r,o,"")}}else if(s){if(t!==n){const o=r[bu];o&&(n+=";"+o),r.cssText=n,l=Cu.test(n)}}else t&&e.removeAttribute("style");il in e&&(e[il]=l?r.display:"",e[yu]&&(r.display="none"))}const Wn=/\s*!important$/;function yn(e,t,n){if(Q(n))n.forEach(r=>yn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))Wn.test(n)?e.setProperty(t,n.replace(Wn,""),"important"):e.setProperty(t,n);else{const r=Au(e,t);Wn.test(n)?e.setProperty(Gt(r),n.replace(Wn,""),"important"):e[r]=n}}const al=["Webkit","Moz","ms"],Hr={};function Au(e,t){const n=Hr[t];if(n)return n;let r=Ke(t);if(r!=="filter"&&r in e)return Hr[t]=r;r=pr(r);for(let s=0;s<al.length;s++){const l=al[s]+r;if(l in e)return Hr[t]=l}return t}function wu(e,t,n,r){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&xe(r)&&n===r}const ul="http://www.w3.org/1999/xlink";function cl(e,t,n,r,s,l=Bi(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ul,t.slice(6,t.length)):e.setAttributeNS(ul,t,n):n==null||l&&!ql(n)?e.removeAttribute(t):e.setAttribute(t,l?"":vt(n)?String(n):n)}function fl(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Jo(n):n);return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const a=l==="OPTION"?e.getAttribute("value")||"":e.value,i=n==null?e.type==="checkbox"?"on":"":String(n);(a!==i||!("_value"in e))&&(e.value=i),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=ql(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function Dt(e,t,n,r){e.addEventListener(t,n,r)}function Su(e,t,n,r){e.removeEventListener(t,n,r)}const dl=Symbol("_vei");function xu(e,t,n,r,s=null){const l=e[dl]||(e[dl]={}),o=l[t];if(r&&o)o.value=r;else{const[a,i]=Eu(t);if(r){const u=l[t]=Tu(r,s);Dt(e,a,u,i)}else o&&(Su(e,a,o,i),l[t]=void 0)}}const ku=/(Once|Passive|Capture)$/,_u=/^on:?(?:Once|Passive|Capture)$/;function Eu(e){let t,n;for(;(n=e.match(ku))&&!_u.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):Gt(e.slice(2)),t]}let Lr=0;const Mu=Promise.resolve(),Ru=()=>Lr||(Mu.then(()=>Lr=0),Lr=Date.now());function Tu(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(Q(s)){const l=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{l.call(r),r._stopped=!0};const o=s.slice(),a=[r];for(let i=0;i<o.length&&!r._stopped;i++){const u=o[i];u&&it(u,t,5,a)}}else it(s,t,5,[r])};return n.value=e,n.attached=Ru(),n}const hl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Bu=(e,t,n,r,s,l)=>{const o=s==="svg";t==="class"?vu(e,r,o):t==="style"?Pu(e,n,r):fr(t)?dr(t)||xu(e,t,n,r,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Nu(e,t,r,o))?(fl(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&cl(e,t,r,o,l,t!=="value")):e._isVueCE&&(Ou(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!xe(r)))?fl(e,Ke(t),r,l,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),cl(e,t,r,o))};function Nu(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&hl(t)&&te(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return hl(t)&&xe(n)?!1:t in e}function Ou(e,t){const n=e._def.props;if(!n)return!1;const r=Ke(t);return Array.isArray(n)?n.some(s=>Ke(s)===r):Object.keys(n).some(s=>Ke(s)===r)}const un=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Q(t)?n=>Jn(t,n):t};function Iu(e){e.target.composing=!0}function pl(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const mt=Symbol("_assign"),Kn=Symbol("_initialValue");function Dr(e,t,n){return t&&(e=e.trim()),n&&(e=mr(e)),e}const Be={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e.parentNode&&(e.type==="text"?e[Kn]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[Kn]=e.defaultValue.replace(/\r\n?/g,`
`))),e[mt]=un(s);const l=r||s.props&&s.props.type==="number";Dt(e,t?"change":"input",o=>{o.target.composing||e[mt](Dr(e.value,n,l))}),(n||l)&&Dt(e,"change",()=>{e.value=Dr(e.value,n,l)}),t||(Dt(e,"compositionstart",Iu),Dt(e,"compositionend",pl),Dt(e,"change",pl))},mounted(e,{value:t,modifiers:{trim:n,number:r}}){const s=t??"",l=e[Kn];delete e[Kn],l!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==l?e[mt](Dr(e.value,n,r)):e.value=s},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:l}},o){if(e[mt]=un(o),e.composing)return;const a=(l||e.type==="number")&&!/^0\d/.test(e.value)?mr(e.value):e.value,i=t??"";if(a===i)return;const u=e.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===e&&e.type!=="range"&&(r&&t===n||s&&e.value.trim()===i)||(e.value=i)}},qn={deep:!0,created(e,t,n){e[mt]=un(n),Dt(e,"change",()=>{const r=e._modelValue,s=Nn(e),l=e.checked,o=e[mt];if(Q(r)){const a=vs(r,s),i=a!==-1;if(l&&!i)o(r.concat(s));else if(!l&&i){const u=[...r];u.splice(a,1),o(u)}}else if(kt(r)){const a=new Set(r);l?a.add(s):a.delete(s),o(a)}else o(Yo(e,l))})},mounted:ml,beforeUpdate(e,t,n){e[mt]=un(n),ml(e,t,n)}};function ml(e,{value:t,oldValue:n},r){e._modelValue=t;let s;if(Q(t))s=vs(t,r.props.value)>-1;else if(kt(t))s=t.has(r.props.value);else{if(t===n)return;s=_t(t,Yo(e,!0))}e.checked!==s&&(e.checked=s)}const ur={deep:!0,created(e,{value:t,modifiers:{number:n}},r){e._modelValue=t,Dt(e,"change",()=>{const s=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>n?mr(Nn(i)):Nn(i)),l=e.multiple,o=l?kt(e._modelValue)?new Set(s):s:s[0],a=e._pendingValue=[l,l?Q(o)?s.slice():s:o];try{e[mt](o)}finally{tt(()=>{e._pendingValue===a&&(e._pendingValue=void 0)})}}),e[mt]=un(r)},mounted(e,{value:t}){gl(e,t)},beforeUpdate(e,{value:t},n){e._modelValue=t,e[mt]=un(n)},updated(e,{value:t}){const n=e._pendingValue;e._pendingValue=void 0,(!n||n[0]!==e.multiple||!Hu(t,n[1],n[0]))&&gl(e,t)}};function Hu(e,t,n){if(!n||Q(e))return _t(e,t);if(kt(e)){if(e.size!==t.length)return!1;for(const r of t)if(!e.has(r))return!1;return!0}return!1}function gl(e,t){const n=e.multiple,r=Q(t);if(!(n&&!r&&!kt(t))){for(let s=0,l=e.options.length;s<l;s++){const o=e.options[s],a=Nn(o);if(n)if(r){const i=typeof a;i==="string"||i==="number"?o.selected=t.some(u=>String(u)===String(a)):o.selected=vs(t,a)>-1}else o.selected=t.has(a);else if(_t(Nn(o),t)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Nn(e){return"_value"in e?e._value:e.value}function Yo(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Lu=["ctrl","shift","alt","meta"],Du={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Lu.some(n=>e[`${n}Key`]&&!t.includes(n))},pn=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=((s,...l)=>{for(let o=0;o<t.length;o++){const a=Du[t[o]];if(a&&a(s,t))return}return e(s,...l)}))},$u={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Fu=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=(s=>{if(!("key"in s))return;const l=Gt(s.key);if(t.some(o=>o===l||$u[o]===l))return e(s)}))},Gu=Le({patchProp:Bu},mu);let vl;function ju(){return vl||(vl=Ka(Gu))}const zu=((...e)=>{const t=ju().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Uu(r);if(!s)return;const l=t._component;!te(l)&&!l.render&&!l.template&&(l.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Vu(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function Vu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Uu(e){return xe(e)?document.querySelector(e):e}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const tn=typeof document<"u";function Qo(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Wu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Qo(e.default)}const de=Object.assign;function $r(e,t){const n={};for(const r in t){const s=t[r];n[r]=at(s)?s.map(e):e(s)}return n}const xn=()=>{},at=Array.isArray;function yl(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const Xo=/#/g,Ku=/&/g,qu=/\//g,Ju=/=/g,Yu=/\?/g,Zo=/\+/g,Qu=/%5B/g,Xu=/%5D/g,ei=/%5E/g,Zu=/%60/g,ti=/%7B/g,ec=/%7C/g,ni=/%7D/g,tc=/%20/g;function Bs(e){return e==null?"":encodeURI(""+e).replace(ec,"|").replace(Qu,"[").replace(Xu,"]")}function nc(e){return Bs(e).replace(ti,"{").replace(ni,"}").replace(ei,"^")}function os(e){return Bs(e).replace(Zo,"%2B").replace(tc,"+").replace(Xo,"%23").replace(Ku,"%26").replace(Zu,"`").replace(ti,"{").replace(ni,"}").replace(ei,"^")}function rc(e){return os(e).replace(Ju,"%3D")}function sc(e){return Bs(e).replace(Xo,"%23").replace(Yu,"%3F")}function lc(e){return sc(e).replace(qu,"%2F")}function On(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const oc=/\/$/,ic=e=>e.replace(oc,"");function Fr(e,t,n="/"){let r,s={},l="",o="";const a=t.indexOf("#");let i=t.indexOf("?");return i=a>=0&&i>a?-1:i,i>=0&&(r=t.slice(0,i),l=t.slice(i,a>0?a:t.length),s=e(l.slice(1))),a>=0&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=fc(r??t,n),{fullPath:r+l+o,path:r,query:s,hash:On(o)}}function ac(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function bl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function uc(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&cn(t.matched[r],n.matched[s])&&ri(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function cn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ri(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!cc(e[n],t[n]))return!1;return!0}function cc(e,t){return at(e)?Cl(e,t):at(t)?Cl(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function Cl(e,t){return at(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function fc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let l=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")l>1&&l--;else break;return n.slice(0,l).join("/")+"/"+r.slice(o).join("/")}const Ot={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let is=(function(e){return e.pop="pop",e.push="push",e})({}),Gr=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function dc(e){if(!e)if(tn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ic(e)}const hc=/^[^#]+#/;function pc(e,t){return e.replace(hc,"#")+t}function mc(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const kr=()=>({left:window.scrollX,top:window.scrollY});function gc(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=mc(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Pl(e,t){return(history.state?history.state.position-t:-1)+e}const as=new Map;function vc(e,t){as.set(e,t)}function yc(e){const t=as.get(e);return as.delete(e),t}function bc(e){return typeof e=="string"||e&&typeof e=="object"}function si(e){return typeof e=="string"||typeof e=="symbol"}let _e=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const li=Symbol("");_e.MATCHER_NOT_FOUND+"",_e.NAVIGATION_GUARD_REDIRECT+"",_e.NAVIGATION_ABORTED+"",_e.NAVIGATION_CANCELLED+"",_e.NAVIGATION_DUPLICATED+"";function fn(e,t){return de(new Error,{type:e,[li]:!0},t)}function Ct(e,t){return e instanceof Error&&li in e&&(t==null||!!(e.type&t))}const Cc=["params","query","hash"];function Pc(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of Cc)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function Ac(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Zo," "),l=s.indexOf("="),o=On(l<0?s:s.slice(0,l)),a=l<0?null:On(s.slice(l+1));if(o in t){let i=t[o];at(i)||(i=t[o]=[i]),i.push(a)}else t[o]=a}return t}function Al(e){let t="";for(let n in e){const r=e[n];if(n=rc(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(at(r)?r.map(s=>s&&os(s)):[r&&os(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function wc(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=at(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Sc=Symbol(""),wl=Symbol(""),Ns=Symbol(""),Os=Symbol(""),us=Symbol("");function mn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Ht(e,t,n,r,s,l=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,i)=>{const u=h=>{h===!1?i(fn(_e.NAVIGATION_ABORTED,{from:n,to:t})):h instanceof Error?i(h):bc(h)?i(fn(_e.NAVIGATION_GUARD_REDIRECT,{from:t,to:h})):(o&&r.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),a())},c=l(()=>e.call(r&&r.instances[s],t,n,u));let f=Promise.resolve(c);e.length<3&&(f=f.then(u)),f.catch(h=>i(h))})}function jr(e,t,n,r,s=l=>l()){const l=[];for(const o of e)for(const a in o.components){let i=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Qo(i)){const u=(i.__vccOpts||i)[t];u&&l.push(Ht(u,n,r,o,a,s))}else{let u=i();l.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Wu(c)?c.default:c;o.mods[a]=c,o.components[a]=f;const h=(f.__vccOpts||f)[t];return h&&Ht(h,n,r,o,a,s)()}))}}return l}function xc(e,t){const n=[],r=[],s=[],l=Math.max(t.matched.length,e.matched.length);for(let o=0;o<l;o++){const a=t.matched[o];a&&(e.matched.find(u=>cn(u,a))?r.push(a):n.push(a));const i=e.matched[o];i&&(t.matched.find(u=>cn(u,i))||s.push(i))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let kc=()=>location.protocol+"//"+location.host;function oi(e,t){const{pathname:n,search:r,hash:s}=t,l=e.indexOf("#");if(l>-1){let o=s.includes(e.slice(l))?e.slice(l).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),bl(a,"")}return bl(n,e)+r+s}function _c(e,t,n,r){let s=[],l=[],o=null;const a=({state:h})=>{const d=oi(e,location),y=n.value,C=t.value;let P=0;if(h){if(n.value=d,t.value=h,o&&o===y){o=null;return}P=C?h.position-C.position:0}else r(d);s.forEach(k=>{k(n.value,y,{delta:P,type:is.pop,direction:P?P>0?Gr.forward:Gr.back:Gr.unknown})})};function i(){o=n.value}function u(h){s.push(h);const d=()=>{const y=s.indexOf(h);y>-1&&s.splice(y,1)};return l.push(d),d}function c(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(de({},h.state,{scroll:kr()}),"")}}function f(){for(const h of l)h();l=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:i,listen:u,destroy:f}}function Sl(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?kr():null}}function Ec(e){const{history:t,location:n}=window,r={value:oi(e,n)},s={value:t.state};s.value||l(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(i,u,c){const f=e.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+i:kc()+e+i;try{t[c?"replaceState":"pushState"](u,"",h),s.value=u}catch(d){console.error(d),n[c?"replace":"assign"](h)}}function o(i,u){l(i,de({},t.state,Sl(s.value.back,i,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=i}function a(i,u){const c=de({},s.value,t.state,{forward:i,scroll:kr()});l(c.current,c,!0),l(i,de({},Sl(r.value,i,null),{position:c.position+1},u),!1),r.value=i}return{location:r,state:s,push:a,replace:o}}function Mc(e){e=dc(e);const t=Ec(e),n=_c(e,t.state,t.location,t.replace);function r(l,o=!0){o||n.pauseListeners(),history.go(l)}const s=de({location:"",base:e,go:r,createHref:pc.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}let Wt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Te=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Te||{});const Rc={type:Wt.Static,value:""},Tc=/[a-zA-Z0-9_]/;function Bc(e){if(!e)return[[]];if(e==="/")return[[Rc]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(d){throw new Error(`ERR (${n})/"${u}": ${d}`)}let n=Te.Static,r=n;const s=[];let l;function o(){l&&s.push(l),l=[]}let a=0,i,u="",c="";function f(){u&&(n===Te.Static?l.push({type:Wt.Static,value:u}):n===Te.Param||n===Te.ParamRegExp||n===Te.ParamRegExpEnd?(l.length>1&&(i==="*"||i==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:Wt.Param,value:u,regexp:c,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):t("Invalid state to consume buffer"),u="")}function h(){u+=i}for(;a<e.length;){if(i=e[a++],i==="\\"&&n!==Te.ParamRegExp){r=n,n=Te.EscapeNext;continue}switch(n){case Te.Static:i==="/"?(u&&f(),o()):i===":"?(f(),n=Te.Param):h();break;case Te.EscapeNext:h(),n=r;break;case Te.Param:i==="("?n=Te.ParamRegExp:Tc.test(i)?h():(f(),n=Te.Static,i!=="*"&&i!=="?"&&i!=="+"&&a--);break;case Te.ParamRegExp:i===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+i:n=Te.ParamRegExpEnd:c+=i;break;case Te.ParamRegExpEnd:f(),n=Te.Static,i!=="*"&&i!=="?"&&i!=="+"&&a--,c="";break;default:t("Unknown state");break}}return n===Te.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}const xl="[^/]+?",Nc={sensitive:!1,strict:!1,start:!0,end:!0};var Ue=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Ue||{});const Oc=/[.+*?^${}()[\]/\\]/g;function Ic(e,t){const n=de({},Nc,t),r=[];let s=n.start?"^":"";const l=[];for(const u of e){const c=u.length?[]:[Ue.Root];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const h=u[f];let d=Ue.Segment+(n.sensitive?Ue.BonusCaseSensitive:0);if(h.type===Wt.Static)f||(s+="/"),s+=h.value.replace(Oc,"\\$&"),d+=Ue.Static;else if(h.type===Wt.Param){const{value:y,repeatable:C,optional:P,regexp:k}=h;l.push({name:y,repeatable:C,optional:P});const _=k||xl;if(_!==xl){d+=Ue.BonusCustomRegExp;try{`${_}`}catch(A){throw new Error(`Invalid custom RegExp for param "${y}" (${_}): `+A.message)}}let B=C?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;f||(B=P&&u.length<2?`(?:/${B})`:"/"+B),P&&(B+="?"),s+=B,d+=Ue.Dynamic,P&&(d+=Ue.BonusOptional),C&&(d+=Ue.BonusRepeatable),_===".*"&&(d+=Ue.BonusWildcard)}c.push(d)}r.push(c)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=Ue.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const c=u.match(o),f={};if(!c)return null;for(let h=1;h<c.length;h++){const d=c[h]||"",y=l[h-1];f[y.name]=d&&y.repeatable?d.split("/"):d}return f}function i(u){let c="",f=!1;for(const h of e){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const d of h)if(d.type===Wt.Static)c+=d.value;else if(d.type===Wt.Param){const{value:y,repeatable:C,optional:P}=d,k=y in u?u[y]:"";if(at(k)&&!C)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const _=at(k)?k.join("/"):k;if(!_)if(P)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${y}"`);c+=_}}return c||"/"}return{re:o,score:r,keys:l,parse:a,stringify:i}}function Hc(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===Ue.Static+Ue.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ue.Static+Ue.Segment?1:-1:0}function ii(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const l=Hc(r[n],s[n]);if(l)return l;n++}if(Math.abs(s.length-r.length)===1){if(kl(r))return 1;if(kl(s))return-1}return s.length-r.length}function kl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Lc={strict:!1,end:!0,sensitive:!1};function Dc(e,t,n){const r=Ic(Bc(e.path),n),s=de(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function $c(e,t){const n=[],r=new Map;t=yl(Lc,t);function s(f){return r.get(f)}function l(f,h,d){const y=!d,C=El(f);C.aliasOf=d&&d.record;const P=yl(t,f),k=[C];if("alias"in f){const A=typeof f.alias=="string"?[f.alias]:f.alias;for(const w of A)k.push(El(de({},C,{components:d?d.record.components:C.components,path:w,aliasOf:d?d.record:C})))}let _,B;for(const A of k){const{path:w}=A;if(h&&w[0]!=="/"){const I=h.record.path,j=I[I.length-1]==="/"?"":"/";A.path=h.record.path+(w&&j+w)}if(_=Dc(A,h,P),d?d.alias.push(_):(B=B||_,B!==_&&B.alias.push(_),y&&f.name&&!Ml(_)&&o(f.name)),ai(_)&&i(_),C.children){const I=C.children;for(let j=0;j<I.length;j++)l(I[j],_,d&&d.children[j])}d=d||_}return B?()=>{o(B)}:xn}function o(f){if(si(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function i(f){const h=jc(f,n);n.splice(h,0,f),f.record.name&&!Ml(f)&&r.set(f.record.name,f)}function u(f,h){let d,y={},C,P;if("name"in f&&f.name){if(d=r.get(f.name),!d)throw fn(_e.MATCHER_NOT_FOUND,{location:f});P=d.record.name,y=de(_l(h.params,d.keys.filter(B=>!B.optional).concat(d.parent?d.parent.keys.filter(B=>B.optional):[]).map(B=>B.name)),f.params&&_l(f.params,d.keys.map(B=>B.name))),C=d.stringify(y)}else if(f.path!=null)C=f.path,d=n.find(B=>B.re.test(C)),d&&(y=d.parse(C),P=d.record.name);else{if(d=h.name?r.get(h.name):n.find(B=>B.re.test(h.path)),!d)throw fn(_e.MATCHER_NOT_FOUND,{location:f,currentLocation:h});P=d.record.name,y=de({},h.params,f.params),C=d.stringify(y)}const k=[];let _=d;for(;_;)k.unshift(_.record),_=_.parent;return{name:P,path:C,params:y,matched:k,meta:Gc(k)}}e.forEach(f=>l(f));function c(){n.length=0,r.clear()}return{addRoute:l,resolve:u,removeRoute:o,clearRoutes:c,getRoutes:a,getRecordMatcher:s}}function _l(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function El(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Fc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Fc(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Ml(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Gc(e){return e.reduce((t,n)=>de(t,n.meta),{})}function jc(e,t){let n=0,r=t.length;for(;n!==r;){const l=n+r>>1;ii(e,t[l])<0?r=l:n=l+1}const s=zc(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function zc(e){let t=e;for(;t=t.parent;)if(ai(t)&&ii(e,t)===0)return t}function ai({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Rl(e){const t=lt(Ns),n=lt(Os),r=ve(()=>{const i=$(e.to);return t.resolve(i)}),s=ve(()=>{const{matched:i}=r.value,{length:u}=i,c=i[u-1],f=n.matched;if(!c||!f.length)return-1;const h=f.findIndex(cn.bind(null,c));if(h>-1)return h;const d=Tl(i[u-2]);return u>1&&Tl(c)===d&&f[f.length-1].path!==d?f.findIndex(cn.bind(null,i[u-2])):h}),l=ve(()=>s.value>-1&&qc(n.params,r.value.params)),o=ve(()=>s.value>-1&&s.value===n.matched.length-1&&ri(n.params,r.value.params));function a(i={}){if(Kc(i)){const u=t[$(e.replace)?"replace":"push"]($(e.to)).catch(xn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:ve(()=>r.value.href),isActive:l,isExactActive:o,navigate:a}}function Vc(e){return e.length===1?e[0]:e}const Uc=_s({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Rl,setup(e,{slots:t}){const n=$t(Rl(e)),{options:r}=lt(Ns),s=ve(()=>({[Bl(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Bl(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&Vc(t.default(n));return e.custom?l:Bn("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},l)}}}),Wc=Uc;function Kc(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function qc(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!at(s)||s.length!==r.length||r.some((l,o)=>l.valueOf()!==s[o].valueOf()))return!1}return!0}function Tl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Bl=(e,t,n)=>e??t??n,Jc=_s({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=lt(us),s=ve(()=>e.route||r.value),l=lt(wl,0),o=ve(()=>{let u=$(l);const{matched:c}=s.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),a=ve(()=>s.value.matched[o.value]);Yn(wl,ve(()=>o.value+1)),Yn(Sc,a),Yn(us,s);const i=Z();return Jt(()=>[i.value,a.value,e.name],([u,c,f],[h,d,y])=>{c&&(c.instances[f]=u,d&&d!==c&&u&&u===h&&(c.leaveGuards.size||(c.leaveGuards=d.leaveGuards),c.updateGuards.size||(c.updateGuards=d.updateGuards))),u&&c&&(!d||!cn(c,d)||!h)&&(c.enterCallbacks[f]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=s.value,c=e.name,f=a.value,h=f&&f.components[c];if(!h)return Nl(n.default,{Component:h,route:u});const d=f.props[c],y=d?d===!0?u.params:typeof d=="function"?d(u):d:null,P=Bn(h,de({},y,t,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(f.instances[c]=null)},ref:i}));return Nl(n.default,{Component:P,route:u})||P}}});function Nl(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Yc=Jc;function Qc(e){const t=$c(e.routes,e),n=e.parseQuery||Ac,r=e.stringifyQuery||Al,s=e.history,l=mn(),o=mn(),a=mn(),i=Zr(Ot);let u=Ot;tn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=$r.bind(null,E=>""+E),f=$r.bind(null,lc),h=$r.bind(null,On);function d(E,z){let L,K;return si(E)?(L=t.getRecordMatcher(E),K=z):K=E,t.addRoute(K,L)}function y(E){const z=t.getRecordMatcher(E);z&&t.removeRoute(z)}function C(){return t.getRoutes().map(E=>E.record)}function P(E){return!!t.getRecordMatcher(E)}function k(E,z){if(z=de({},z||i.value),typeof E=="string"){const b=Fr(n,E,z.path),x=t.resolve({path:b.path},z),M=s.createHref(b.fullPath);return de(b,x,{params:h(x.params),hash:On(b.hash),redirectedFrom:void 0,href:M})}let L;if(E.path!=null)L=de({},E,{path:Fr(n,E.path,z.path).path});else{const b=de({},E.params);for(const x in b)b[x]==null&&delete b[x];L=de({},E,{params:f(b)}),z.params=f(z.params)}const K=t.resolve(L,z),ee=E.hash||"";K.params=c(h(K.params));const m=ac(r,de({},E,{hash:nc(ee),path:K.path})),v=s.createHref(m);return de({fullPath:m,hash:ee,query:r===Al?wc(E.query):E.query||{}},K,{redirectedFrom:void 0,href:v})}function _(E){return typeof E=="string"?Fr(n,E,i.value.path):de({},E)}function B(E,z){if(u!==E)return fn(_e.NAVIGATION_CANCELLED,{from:z,to:E})}function A(E){return j(E)}function w(E){return A(de(_(E),{replace:!0}))}function I(E,z){const L=E.matched[E.matched.length-1];if(L&&L.redirect){const{redirect:K}=L;let ee=typeof K=="function"?K(E,z):K;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=_(ee):{path:ee},ee.params={}),de({query:E.query,hash:E.hash,params:ee.path!=null?{}:E.params},ee)}}function j(E,z){const L=u=k(E),K=i.value,ee=E.state,m=E.force,v=E.replace===!0,b=I(L,K);if(b)return j(de(_(b),{state:typeof b=="object"?de({},ee,b.state):ee,force:m,replace:v}),z||L);const x=L;x.redirectedFrom=z;let M;return!m&&uc(r,K,L)&&(M=fn(_e.NAVIGATION_DUPLICATED,{to:x,from:K}),Je(K,K,!0,!1)),(M?Promise.resolve(M):me(x,K)).catch(S=>Ct(S)?Ct(S,_e.NAVIGATION_GUARD_REDIRECT)?S:rt(S):ie(S,x,K)).then(S=>{if(S){if(Ct(S,_e.NAVIGATION_GUARD_REDIRECT))return j(de({replace:v},_(S.to),{state:typeof S.to=="object"?de({},ee,S.to.state):ee,force:m}),z||x)}else S=De(x,K,!0,v,ee);return Me(x,K,S),S})}function le(E,z){const L=B(E,z);return L?Promise.reject(L):Promise.resolve()}function Ae(E){const z=Nt.values().next().value;return z&&typeof z.runWithContext=="function"?z.runWithContext(E):E()}function me(E,z){let L;const[K,ee,m]=xc(E,z);L=jr(K.reverse(),"beforeRouteLeave",E,z);for(const b of K)b.leaveGuards.forEach(x=>{L.push(Ht(x,E,z))});const v=le.bind(null,E,z);return L.push(v),je(L).then(()=>{L=[];for(const b of l.list())L.push(Ht(b,E,z));return L.push(v),je(L)}).then(()=>{L=jr(ee,"beforeRouteUpdate",E,z);for(const b of ee)b.updateGuards.forEach(x=>{L.push(Ht(x,E,z))});return L.push(v),je(L)}).then(()=>{L=[];for(const b of m)if(b.beforeEnter)if(at(b.beforeEnter))for(const x of b.beforeEnter)L.push(Ht(x,E,z));else L.push(Ht(b.beforeEnter,E,z));return L.push(v),je(L)}).then(()=>(E.matched.forEach(b=>b.enterCallbacks={}),L=jr(m,"beforeRouteEnter",E,z,Ae),L.push(v),je(L))).then(()=>{L=[];for(const b of o.list())L.push(Ht(b,E,z));return L.push(v),je(L)}).catch(b=>Ct(b,_e.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function Me(E,z,L){a.list().forEach(K=>Ae(()=>K(E,z,L)))}function De(E,z,L,K,ee){const m=B(E,z);if(m)return m;const v=z===Ot,b=tn?history.state:{};L&&(K||v?s.replace(E.fullPath,de({scroll:v&&b&&b.scroll},ee)):s.push(E.fullPath,ee)),i.value=E,Je(E,z,L,v),rt()}let Ge;function we(){Ge||(Ge=s.listen((E,z,L)=>{if(!ut.listening)return;const K=k(E),ee=I(K,ut.currentRoute.value);if(ee){j(de(ee,{replace:!0,force:!0}),K).catch(xn);return}u=K;const m=i.value;tn&&vc(Pl(m.fullPath,L.delta),kr()),me(K,m).catch(v=>Ct(v,_e.NAVIGATION_ABORTED|_e.NAVIGATION_CANCELLED)?v:Ct(v,_e.NAVIGATION_GUARD_REDIRECT)?(j(de(_(v.to),{force:!0}),K).then(b=>{Ct(b,_e.NAVIGATION_ABORTED|_e.NAVIGATION_DUPLICATED)&&!L.delta&&L.type===is.pop&&s.go(-1,!1)}).catch(xn),Promise.reject()):(L.delta&&s.go(-L.delta,!1),ie(v,K,m))).then(v=>{v=v||De(K,m,!1),v&&(L.delta&&!Ct(v,_e.NAVIGATION_CANCELLED)?s.go(-L.delta,!1):L.type===is.pop&&Ct(v,_e.NAVIGATION_ABORTED|_e.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),Me(K,m,v)}).catch(xn)}))}let qe=mn(),Se=mn(),ce;function ie(E,z,L){rt(E);const K=Se.list();return K.length?K.forEach(ee=>ee(E,z,L)):console.error(E),Promise.reject(E)}function et(){return ce&&i.value!==Ot?Promise.resolve():new Promise((E,z)=>{qe.add([E,z])})}function rt(E){return ce||(ce=!E,we(),qe.list().forEach(([z,L])=>E?L(E):z()),qe.reset()),E}function Je(E,z,L,K){const{scrollBehavior:ee}=e;if(!tn||!ee)return Promise.resolve();const m=!L&&yc(Pl(E.fullPath,0))||(K||!L)&&history.state&&history.state.scroll||null;return tt().then(()=>ee(E,z,m)).then(v=>v&&gc(v)).catch(v=>ie(v,E,z))}const Ne=E=>s.go(E);let yt;const Nt=new Set,ut={currentRoute:i,listening:!0,addRoute:d,removeRoute:y,clearRoutes:t.clearRoutes,hasRoute:P,getRoutes:C,resolve:k,options:e,push:A,replace:w,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:l.add,beforeResolve:o.add,afterEach:a.add,onError:Se.add,isReady:et,install(E){E.component("RouterLink",Wc),E.component("RouterView",Yc),E.config.globalProperties.$router=ut,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>$(i)}),tn&&!yt&&i.value===Ot&&(yt=!0,A(s.location).catch(K=>{}));const z={};for(const K in Ot)Object.defineProperty(z,K,{get:()=>i.value[K],enumerable:!0});E.provide(Ns,ut),E.provide(Os,fo(z)),E.provide(us,i);const L=E.unmount;Nt.add(E),E.unmount=function(){Nt.delete(E),Nt.size<1&&(u=Ot,Ge&&Ge(),Ge=null,i.value=Ot,yt=!1,ce=!1),L()}}};function je(E){return E.reduce((z,L)=>z.then(()=>Ae(L)),Promise.resolve())}return ut}function ui(e){return lt(Os)}/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=e=>e==="";/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=e=>{const t=Zc(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Zt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=Symbol("lucide-icons");function n1(){return lt(t1,{})}/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=({name:e,iconNode:t,"icon-node":n,absoluteStrokeWidth:r,"absolute-stroke-width":s,strokeWidth:l,"stroke-width":o,size:a,color:i,...u},{slots:c})=>{const{size:f,color:h,strokeWidth:d=2,absoluteStrokeWidth:y=!1,class:C=""}=n1(),P=ve(()=>{const k=Ol(r)||Ol(s)||r===!0||s===!0||y===!0,_=l||o||d||Zt["stroke-width"];return k?Number(_)*24/Number(a??f??Zt.width):_});return Bn("svg",{...Zt,...u,width:a??f??Zt.width,height:a??f??Zt.height,stroke:i??h??Zt.stroke,"stroke-width":P.value,class:Xc("lucide",C,...e?[`lucide-${Il(e1(e))}-icon`,`lucide-${Il(e)}`]:["lucide-icon"])},[...(t??n??[]).map(k=>Bn(...k)),...c.default?[c.default()]:[]])};/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=(e,t)=>(n,{slots:r,attrs:s})=>Bn(r1,{...s,...n,iconNode:t,name:e},r.default?{default:r.default}:void 0);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"m21 8-4-4-4 4",key:"1c9v7m"}],["path",{d:"M17 4v16",key:"7dpous"}]],l1=Y("arrow-down-up",s1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]],i1=Y("arrow-left-right",o1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],u1=Y("arrow-left",a1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],f1=Y("arrow-up-right",c1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]],h1=Y("binary",d1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],m1=Y("braces",p1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],cs=Y("check",g1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=[["path",{d:"M11 14h10",key:"1w8e9d"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v1.344",key:"1e62lh"}],["path",{d:"m17 18 4-4-4-4",key:"z2g111"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113",key:"bjbb7m"}],["rect",{x:"8",y:"2",width:"8",height:"4",rx:"1",key:"ublpy"}]],y1=Y("clipboard-paste",v1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]],cr=Y("clipboard",b1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6h4",key:"135r8i"}]],P1=Y("clock-3",C1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],w1=Y("clock",A1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],x1=Y("cloud-upload",S1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],_1=Y("cloud",k1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],M1=Y("copy",E1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14",key:"ron5a4"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2",key:"7s9ehn"}]],T1=Y("crop",R1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],N1=Y("eraser",B1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]],I1=Y("file-image",O1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],ci=Y("file-text",H1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=[["path",{d:"M12 22h6a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6",key:"15usau"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M3 16v-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V16",key:"s1gz5"}],["path",{d:"M6 22h2",key:"194x9m"}],["path",{d:"M7 14v8",key:"11ixej"}]],D1=Y("file-type-corner",L1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=[["path",{d:"m17 3-5 5-5-5h10",key:"1ftt6x"}],["path",{d:"m17 21-5-5-5 5h10",key:"1m0wmu"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]],Hl=Y("flip-vertical-2",$1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=[["path",{d:"m3 7 5 5-5 5V7",key:"couhi7"}],["path",{d:"m21 7-5 5 5 5V7",key:"6ouia7"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]],Ll=Y("flip-horizontal-2",F1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],zr=Y("folder-open",G1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]],z1=Y("git-fork",j1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],fs=Y("grid-3x3",V1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],W1=Y("heart",U1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],q1=Y("image-plus",K1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],Y1=Y("image",J1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],X1=Y("key-round",Q1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],fi=Y("languages",Z1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=[["path",{d:"M13 5h8",key:"a7qcls"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}]],Dl=Y("list-checks",ef);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],nf=Y("loader-circle",tf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]],sf=Y("lock-keyhole",rf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],of=Y("maximize-2",lf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],uf=Y("minimize-2",af);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],ff=Y("moon",cf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=[["path",{d:"M11 7 6 2",key:"1jwth8"}],["path",{d:"M18.992 12H2.041",key:"xw1gg"}],["path",{d:"M21.145 18.38A3.34 3.34 0 0 1 20 16.5a3.3 3.3 0 0 1-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0 0 20 22a2 2 0 0 0 2-2.025c0-.58-.285-1.13-.855-1.595",key:"1nkol4"}],["path",{d:"m8.5 4.5 2.148-2.148a1.205 1.205 0 0 1 1.704 0l7.296 7.296a1.205 1.205 0 0 1 0 1.704l-7.592 7.592a3.615 3.615 0 0 1-5.112 0l-3.888-3.888a3.615 3.615 0 0 1 0-5.112L5.67 7.33",key:"1nk1rd"}]],hf=Y("paint-bucket",df);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=[["path",{d:"m14.622 17.897-10.68-2.913",key:"vj2p1u"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",key:"18tc5c"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",key:"ytzfxy"}]],mf=Y("paintbrush",pf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=[["path",{d:"m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12",key:"1y3wsu"}],["path",{d:"m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z",key:"110lr1"}],["path",{d:"m2 22 .414-.414",key:"jhxm08"}]],ds=Y("pipette",gf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],yf=Y("redo-2",vf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Is=Y("refresh-cw",bf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=[["path",{d:"M14 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1",key:"zg1ipl"}],["path",{d:"M14 4a1 1 0 0 1 1-1",key:"dhj8ez"}],["path",{d:"M15 10a1 1 0 0 1-1-1",key:"1mnyi5"}],["path",{d:"M19 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1",key:"txt6k4"}],["path",{d:"M21 4a1 1 0 0 0-1-1",key:"sfs9ap"}],["path",{d:"M21 9a1 1 0 0 1-1 1",key:"mp6qeo"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5a2 2 0 0 1 2-2h2",key:"15xut4"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}]],Pf=Y("replace-all",Cf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],wf=Y("save",Af);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],xf=Y("search",Sf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],di=Y("shield-check",kf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],hi=Y("sparkles",_f);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}]],Mf=Y("square-dashed",Ef);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],Tf=Y("square",Rf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Nf=Y("sun",Bf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=[["path",{d:"M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z",key:"16rjxf"}],["path",{d:"M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193",key:"178nd4"}],["circle",{cx:"10.5",cy:"6.5",r:".5",fill:"currentColor",key:"12ikhr"}]],$l=Y("tags",Of);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Hf=Y("trash-2",If);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],Df=Y("undo-2",Lf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],Ff=Y("wand-sparkles",$f),Gf="/assets/fufu-3FWaQxCW.png",jf={class:"site-header"},zf={class:"brand-mark","aria-hidden":"true"},Vf=["src"],Uf={class:"header-actions","aria-label":"页面操作"},Wf={class:"icon-button",href:"https://github.com/",target:"_blank",rel:"noreferrer","aria-label":"GitHub 仓库"},Kf=["aria-label"],qf={class:"site-footer"},Jf={__name:"App",setup(e){const t=ui(),n=Z(!1),r=ve(()=>["pixel-beads","markdown"].includes(t.params.slug));Dn(()=>{const l=localStorage.getItem("sakura-theme");n.value=l?l==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches,document.documentElement.classList.toggle("dark",n.value)});function s(){n.value=!n.value,document.documentElement.classList.toggle("dark",n.value),localStorage.setItem("sakura-theme",n.value?"dark":"light")}return(l,o)=>{const a=es("router-link"),i=es("router-view");return W(),re("div",{class:ae(["site-shell",{"site-shell-wide":r.value}])},[p("header",jf,[G(a,{class:"brand",to:"/","aria-label":"Sakura Tools 首页"},{default:yr(()=>[p("span",zf,[p("img",{src:$(Gf),alt:""},null,8,Vf)]),o[1]||(o[1]=p("span",null,[p("strong",null,"Sakura"),p("small",null,"TOOLS / 工具箱")],-1))]),_:1}),p("nav",Uf,[p("a",Wf,[G($(z1),{size:18})]),p("button",{class:"icon-button",type:"button","aria-label":n.value?"切换到浅色模式":"切换到深色模式",onClick:o[0]||(o[0]=u=>s())},[n.value?(W(),He($(Nf),{key:0,size:18})):(W(),He($(ff),{key:1,size:18}))],8,Kf)])]),p("main",null,[G(i)]),p("footer",qf,[o[4]||(o[4]=p("p",null,[p("span",{class:"status-dot"}),U(" 所有基础工具均在浏览器本地运行")],-1)),p("p",null,[o[2]||(o[2]=U("用 ",-1)),G($(W1),{size:13,fill:"currentColor"}),o[3]||(o[3]=U(" 和 Go 构建",-1))])])],2)}}},Yf=["全部","开发","文本","图像","文档","生活"],hs=[{slug:"json",index:"01",name:"JSON 格式化",summary:"格式化、压缩并验证 JSON 数据",category:"开发",icon:m1,color:"red",ready:!0},{slug:"base64",index:"02",name:"Base64 编解码",summary:"文本与 Base64 安全互转，支持 Unicode",category:"开发",icon:h1,color:"blue",ready:!0},{slug:"timestamp",index:"03",name:"时间戳转换",summary:"时间戳与本地日期双向转换",category:"开发",icon:P1,color:"ochre",ready:!0},{slug:"password",index:"04",name:"随机密码",summary:"在本地生成高强度随机密码",category:"生活",icon:X1,color:"green",ready:!0},{slug:"translate",index:"05",name:"在线翻译",summary:"安全代理第三方服务，快速翻译多语言文本",category:"文本",icon:fi,color:"blue",ready:!0},{slug:"markdown",index:"06",name:"Markdown 编辑器",summary:"实时预览并导出 Markdown 与 PDF 文档",category:"文本",icon:ci,color:"ochre",ready:!0},{slug:"image",index:"07",name:"图片处理",summary:"压缩、裁剪与格式转换",category:"图像",icon:Y1,color:"green"},{slug:"pdf",index:"08",name:"PDF 工具",summary:"合并、拆分与页面整理",category:"文档",icon:D1,color:"red"},{slug:"pixel-beads",index:"09",name:"像素拼豆图纸",summary:"照片转网格图纸，精准匹配拼豆色号",category:"图像",icon:fs,color:"special",ready:!0},{slug:"color",index:"10",name:"颜色工具",summary:"取色、转换与调色板生成",category:"开发",icon:ds,color:"blue"}],Qf=e=>hs.find(t=>t.slug===e),Xf={class:"tool-index","aria-labelledby":"tool-index-heading"},Zf={class:"section-heading"},ed={class:"tool-count"},td={class:"tool-controls"},nd={class:"search-box"},rd={class:"category-tabs","aria-label":"工具分类"},sd=["onClick"],ld={key:0,class:"tool-grid"},od={class:"card-topline"},id={class:"tool-number"},ad={key:0,class:"soon-label"},ud={class:"tool-symbol"},cd={class:"category-label"},fd={key:1,class:"empty-state"},dd={__name:"HomeView",setup(e){const t=Z(""),n=Z("全部"),r=Z(null),s=ve(()=>{const o=t.value.trim().toLowerCase();return hs.filter(a=>{const i=n.value==="全部"||a.category===n.value,u=!o||`${a.name} ${a.summary} ${a.category}`.toLowerCase().includes(o);return i&&u})});function l(o){var a,i;o.key==="/"&&((a=document.activeElement)==null?void 0:a.tagName)!=="INPUT"&&((i=document.activeElement)==null?void 0:i.tagName)!=="TEXTAREA"&&(o.preventDefault(),tt(()=>{var u;return(u=r.value)==null?void 0:u.focus()}))}return Dn(()=>window.addEventListener("keydown",l)),Ar(()=>window.removeEventListener("keydown",l)),(o,a)=>(W(),re(Re,null,[a[4]||(a[4]=eu('<section class="home-intro"><div class="eyebrow"><span></span> SAKURA WORKBENCH · 2026</div><div class="intro-grid"><div><h1>需要什么，<br><em>拿来即用。</em></h1></div><div class="intro-copy"><p>一组简洁、快速、尊重隐私的在线工具。常用处理尽可能留在你的浏览器里完成。</p><div class="privacy-note"><span class="status-dot"></span> 无需登录 · 本地优先</div></div></div></section>',1)),p("section",Xf,[p("div",Zf,[a[2]||(a[2]=p("div",null,[p("p",{class:"section-kicker"},"TOOL INDEX"),p("h2",{id:"tool-index-heading"},"工具索引")],-1)),p("p",ed,V(String(s.value.length).padStart(2,"0"))+" / "+V($(hs).length),1)]),p("div",td,[p("label",nd,[G($(xf),{size:19}),be(p("input",{ref_key:"searchInput",ref:r,"onUpdate:modelValue":a[0]||(a[0]=i=>t.value=i),type:"search",placeholder:"搜索工具，例如 JSON、图片…"},null,512),[[Be,t.value]]),a[3]||(a[3]=p("kbd",null,"/",-1))]),p("div",rd,[(W(!0),re(Re,null,xt($(Yf),i=>(W(),re("button",{key:i,type:"button",class:ae({active:n.value===i}),onClick:u=>n.value=i},V(i),11,sd))),128))])]),s.value.length?(W(),re("div",ld,[(W(!0),re(Re,null,xt(s.value,i=>(W(),He(rr(i.ready?"router-link":"article"),{key:i.slug,to:i.ready?`/tools/${i.slug}`:void 0,class:ae(["tool-card",[`tone-${i.color}`,{upcoming:!i.ready,featured:i.color==="special"}]])},{default:yr(()=>[p("div",od,[p("span",id,V(i.index),1),i.ready?(W(),He($(f1),{key:1,size:18})):(W(),re("span",ad,"筹备中"))]),p("div",ud,[(W(),He(rr(i.icon),{size:25,"stroke-width":1.8}))]),p("h3",null,V(i.name),1),p("p",null,V(i.summary),1),p("span",cd,V(i.category),1),i.color==="special"?(W(),He($(hi),{key:0,class:"special-mark",size:17})):Ut("",!0)]),_:2},1032,["to","class"]))),128))])):(W(),re("div",fd,[p("p",null,"没有找到“"+V(t.value)+"”",1),p("button",{type:"button",onClick:a[1]||(a[1]=i=>{t.value="",n.value="全部"})},"清除筛选")]))])],64))}},hd="modulepreload",pd=function(e){return"/"+e},Fl={},md=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(u){return Promise.all(u.map(c=>Promise.resolve(c).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),i=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=o(n.map(u=>{if(u=pd(u),u in Fl)return;Fl[u]=!0;const c=u.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":hd,c||(h.as="script"),h.crossOrigin="",h.href=u,i&&h.setAttribute("nonce",i),document.head.appendChild(h),c)return new Promise((d,y)=>{h.addEventListener("load",d),h.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${u}`)))})}))}function l(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&l(a.reason);return t().catch(l)})},gd={class:"tool-panel"},vd={class:"tool-bar"},yd={class:"action-group"},bd={key:0,class:"error-message"},Cd={key:1,class:"success-message"},Pd={__name:"JsonTool",setup(e){const t=Z(`{
  "project": "sakura-tools",
  "status": "growing",
  "private": true
}`),n=Z(""),r=Z(!1);function s(a=!1){try{t.value=JSON.stringify(JSON.parse(t.value),null,a?0:2),n.value=""}catch(i){n.value=`第 ${l(i.message)} 行附近：${i.message}`}}function l(a){var u;const i=Number(((u=a.match(/position (\d+)/))==null?void 0:u[1])||0);return t.value.slice(0,i).split(`
`).length}async function o(){await navigator.clipboard.writeText(t.value),r.value=!0,setTimeout(()=>r.value=!1,1400)}return(a,i)=>(W(),re("div",gd,[p("div",vd,[p("div",yd,[p("button",{class:"primary-button",type:"button",onClick:i[0]||(i[0]=u=>s(!1))},[G($(Ff),{size:16}),i[4]||(i[4]=U(" 格式化",-1))]),p("button",{class:"secondary-button",type:"button",onClick:i[1]||(i[1]=u=>s(!0))},[G($(uf),{size:16}),i[5]||(i[5]=U(" 压缩",-1))])]),p("button",{class:"secondary-button",type:"button",onClick:o},[r.value?(W(),He($(cs),{key:0,size:16})):(W(),He($(cr),{key:1,size:16})),U(" "+V(r.value?"已复制":"复制"),1)])]),i[7]||(i[7]=p("label",{class:"editor-label",for:"json-input"},"JSON INPUT",-1)),be(p("textarea",{id:"json-input","onUpdate:modelValue":i[2]||(i[2]=u=>t.value=u),class:"code-editor",spellcheck:"false",onInput:i[3]||(i[3]=u=>n.value="")},null,544),[[Be,t.value]]),n.value?(W(),re("p",bd,V(n.value),1)):(W(),re("p",Cd,[G($(cs),{size:14}),i[6]||(i[6]=U(" 输入内容仅在当前浏览器中处理",-1))]))]))}},Ad={class:"tool-panel split-editor"},wd={class:"editor-heading"},Sd={class:"swap-mark"},xd={class:"editor-heading"},kd={key:0,class:"error-message wide-message"},_d={__name:"Base64Tool",setup(e){const t=Z("你好，Sakura Tools!"),n=Z(""),r=Z("");function s(){n.value=btoa(String.fromCharCode(...new TextEncoder().encode(t.value))),r.value=""}function l(){try{t.value=new TextDecoder().decode(Uint8Array.from(atob(n.value.trim()),a=>a.charCodeAt(0))),r.value=""}catch{r.value="这不是有效的 Base64 内容，请检查后重试。"}}async function o(a){await navigator.clipboard.writeText(a)}return s(),(a,i)=>(W(),re("div",Ad,[p("section",null,[p("div",wd,[i[5]||(i[5]=p("label",{for:"plain-text"},"原始文本",-1)),p("button",{type:"button",onClick:i[0]||(i[0]=u=>o(t.value))},[G($(cr),{size:15}),i[4]||(i[4]=U("复制",-1))])]),be(p("textarea",{id:"plain-text","onUpdate:modelValue":i[1]||(i[1]=u=>t.value=u),spellcheck:"false"},null,512),[[Be,t.value]]),p("button",{class:"primary-button full-button",type:"button",onClick:s},"编码为 Base64")]),p("div",Sd,[G($(l1),{size:18})]),p("section",null,[p("div",xd,[i[7]||(i[7]=p("label",{for:"encoded-text"},"Base64",-1)),p("button",{type:"button",onClick:i[2]||(i[2]=u=>o(n.value))},[G($(cr),{size:15}),i[6]||(i[6]=U("复制",-1))])]),be(p("textarea",{id:"encoded-text","onUpdate:modelValue":i[3]||(i[3]=u=>n.value=u),spellcheck:"false"},null,512),[[Be,n.value]]),p("button",{class:"secondary-button full-button",type:"button",onClick:l},"解码为文本")]),r.value?(W(),re("p",kd,V(r.value),1)):Ut("",!0)]))}},Ed={class:"tool-panel timestamp-panel"},Md={class:"timestamp-grid"},Rd={class:"unit-toggle"},Td={class:"timezone-note"},Bd={__name:"TimestampTool",setup(e){const t=Date.now(),n=Z(Math.floor(t/1e3)),r=Z(l(t)),s=Z("seconds");function l(c){const f=new Date(c);if(Number.isNaN(f.getTime()))return"";const h=f.getTimezoneOffset()*6e4;return new Date(f.getTime()-h).toISOString().slice(0,19)}function o(){const c=s.value==="seconds"?Number(n.value)*1e3:Number(n.value),f=l(c);f&&(r.value=f)}function a(){const c=new Date(r.value).getTime();Number.isNaN(c)||(n.value=s.value==="seconds"?Math.floor(c/1e3):c)}function i(){const c=Date.now();n.value=s.value==="seconds"?Math.floor(c/1e3):c,r.value=l(c)}const u=ve(()=>{const c=new Date(r.value);return Number.isNaN(c.getTime())?"请输入完整日期时间":c.toLocaleString("zh-CN",{dateStyle:"full",timeStyle:"medium"})});return(c,f)=>(W(),re("div",Ed,[p("div",Md,[p("section",null,[f[4]||(f[4]=p("label",{for:"timestamp"},"时间戳",-1)),be(p("input",{id:"timestamp","onUpdate:modelValue":f[0]||(f[0]=h=>n.value=h),type:"number",onInput:o},null,544),[[Be,n.value]]),p("div",Rd,[p("button",{type:"button",class:ae({active:s.value==="seconds"}),onClick:f[1]||(f[1]=h=>{s.value="seconds",a()})},"秒",2),p("button",{type:"button",class:ae({active:s.value==="milliseconds"}),onClick:f[2]||(f[2]=h=>{s.value="milliseconds",a()})},"毫秒",2)])]),p("section",null,[f[5]||(f[5]=p("label",{for:"date-input"},"本地日期时间",-1)),be(p("input",{id:"date-input","onUpdate:modelValue":f[3]||(f[3]=h=>r.value=h),type:"datetime-local",step:"1",onInput:a},null,544),[[Be,r.value]]),p("p",null,V(u.value),1)])]),p("button",{class:"secondary-button",type:"button",onClick:i},[G($(Is),{size:16}),f[6]||(f[6]=U(" 使用当前时间",-1))]),p("div",Td,[G($(w1),{size:15}),U(" 当前浏览器时区："+V(Intl.DateTimeFormat().resolvedOptions().timeZone),1)])]))}},Nd={class:"tool-panel password-panel"},Od={class:"password-output"},Id={class:"password-options"},Hd={class:"length-control"},Ld={class:"check-grid"},Dd={class:"password-footer"},$d={__name:"PasswordTool",setup(e){const t=Z(20),n=Z({upper:!0,lower:!0,numbers:!0,symbols:!0}),r=Z(""),s=Z(!1),l=ve(()=>{const i=Object.values(n.value).filter(Boolean).length,u=t.value*Math.log2(Math.max(i*18,2));return u>110?"很强":u>75?"强":u>45?"一般":"较弱"});function o(){const i=[];n.value.upper&&i.push("ABCDEFGHJKLMNPQRSTUVWXYZ"),n.value.lower&&i.push("abcdefghijkmnopqrstuvwxyz"),n.value.numbers&&i.push("23456789"),n.value.symbols&&i.push("!@#$%&*+-=?");const u=i.join("")||"abcdefghijkmnopqrstuvwxyz",c=crypto.getRandomValues(new Uint32Array(t.value));r.value=Array.from(c,f=>u[f%u.length]).join("")}async function a(){await navigator.clipboard.writeText(r.value),s.value=!0,setTimeout(()=>s.value=!1,1400)}return o(),(i,u)=>(W(),re("div",Nd,[p("div",Od,[p("code",null,V(r.value),1),p("button",{type:"button",onClick:a},[s.value?(W(),He($(cs),{key:0,size:18})):(W(),He($(cr),{key:1,size:18})),p("span",null,V(s.value?"已复制":"复制"),1)])]),p("div",Id,[p("label",Hd,[u[5]||(u[5]=U("密码长度 ",-1)),p("strong",null,V(t.value),1),be(p("input",{"onUpdate:modelValue":u[0]||(u[0]=c=>t.value=c),type:"range",min:"8",max:"64",onInput:o},null,544),[[Be,t.value,void 0,{number:!0}]])]),p("div",Ld,[p("label",null,[be(p("input",{"onUpdate:modelValue":u[1]||(u[1]=c=>n.value.upper=c),type:"checkbox",onChange:o},null,544),[[qn,n.value.upper]]),u[6]||(u[6]=U(" 大写字母",-1))]),p("label",null,[be(p("input",{"onUpdate:modelValue":u[2]||(u[2]=c=>n.value.lower=c),type:"checkbox",onChange:o},null,544),[[qn,n.value.lower]]),u[7]||(u[7]=U(" 小写字母",-1))]),p("label",null,[be(p("input",{"onUpdate:modelValue":u[3]||(u[3]=c=>n.value.numbers=c),type:"checkbox",onChange:o},null,544),[[qn,n.value.numbers]]),u[8]||(u[8]=U(" 数字",-1))]),p("label",null,[be(p("input",{"onUpdate:modelValue":u[4]||(u[4]=c=>n.value.symbols=c),type:"checkbox",onChange:o},null,544),[[qn,n.value.symbols]]),u[9]||(u[9]=U(" 特殊符号",-1))])])]),p("div",Dd,[p("span",null,[u[10]||(u[10]=U("强度：",-1)),p("strong",null,V(l.value),1)]),p("button",{class:"primary-button",type:"button",onClick:o},[G($(Is),{size:16}),u[11]||(u[11]=U(" 重新生成",-1))])])]))}},Fd=`
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
`.trim();function Vr(e){return Number(e).toString(16).padStart(2,"0").toUpperCase()}function Gd(e,t){const n=a=>{var i;return((i=a.match(/^([A-Z]+)(\d+)$/))==null?void 0:i.slice(1))||[a,"0"]},[r,s]=n(e.code),[l,o]=n(t.code);return r.localeCompare(l)||Number(s)-Number(o)}const jd={id:"mard-291-community",brand:"MARD",name:"MARD 291 色（社区校准）",source:"https://github.com/maxcleme/beadcolors",colors:Fd.split(`
`).map(e=>{const[t,n,r,s,l,o]=e.split(",");return{id:`mard-${t.toLowerCase()}`,code:t,name:n,hex:`#${Vr(r)}${Vr(s)}${Vr(l)}`,contributor:o}}).sort(Gd)};function Hs({id:e,brand:t,name:n,source:r,csv:s}){return{id:e,brand:t,name:n,source:r,colors:s.trim().split(/\r?\n/).map(l=>{const[o,a,i,u,c]=l.split(","),f=`#${[i,u,c].map(h=>Number(h).toString(16).padStart(2,"0")).join("")}`.toUpperCase();return{id:`${e}-${o.toLowerCase()}`,code:o,name:a,hex:f}})}}const zd=`
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
`,Vd=`
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
`,Ud=`
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
`,Wd=Hs({id:"hama-midi-community",brand:"Hama",name:"Hama Midi（92 色）",source:"https://github.com/maxcleme/beadcolors/blob/master/raw/hama.csv",csv:zd}),Kd=Hs({id:"artkal-c-community",brand:"Artkal",name:"Artkal C 2.6 mm（174 色）",source:"https://github.com/maxcleme/beadcolors/blob/master/raw/artkal_c.csv",csv:Vd}),qd=Hs({id:"artkal-s-community",brand:"Artkal",name:"Artkal S 5 mm（199 色）",source:"https://github.com/maxcleme/beadcolors/blob/master/raw/artkal_s.csv",csv:Ud}),Jd={id:"perler-standard-2025",brand:"Perler",name:"Perler 标准色（屏幕参考）",source:"https://perler.com/content/uploaded_images/Perler_Bead-Color-Reference_2025.pdf",colors:[["white","White","白色","#F4F4EF"],["cream","Creme","奶油色","#F1E4C2"],["toasted-marshmallow","Toasted Marshmallow","烤棉花糖","#D8C5B4"],["sand","Sand","沙色","#D8B58A"],["tan","Tan","棕褐色","#B8875E"],["light-brown","Light Brown","浅棕色","#9A6547"],["brown","Brown","棕色","#613E2C"],["dark-brown","Dark Brown","深棕色","#3D2924"],["apricot","Apricot","杏色","#F3C3A5"],["peach","Peach","蜜桃色","#F3B38F"],["blush","Blush","腮红色","#ED927E"],["light-pink","Light Pink","浅粉色","#F3B7CD"],["bubblegum","Bubblegum","泡泡糖粉","#EE78A8"],["pink","Pink","粉色","#DA4E91"],["raspberry","Raspberry","覆盆子色","#A93064"],["plum","Plum","李子色","#73355E"],["red","Red","红色","#D83B3E"],["cranapple","Cranapple","蔓越莓红","#9D2735"],["hot-coral","Hot Coral","珊瑚红","#F06055"],["rust","Rust","铁锈红","#A9472D"],["brick","Brick","砖红色","#994D3A"],["orange","Orange","橙色","#F37932"],["cheddar","Cheddar","切达橙","#F5A623"],["butterscotch","Butterscotch","奶糖色","#D88B2C"],["rich-butter","Rich Butter","浓黄油色","#EBC65E"],["yellow","Yellow","黄色","#F5D547"],["pastel-yellow","Pastel Yellow","粉彩黄","#F5E88A"],["prickly-pear","Prickly Pear","仙人掌黄绿","#C8D746"],["kiwi-lime","Kiwi Lime","奇异果绿","#8BC34A"],["pastel-green","Pastel Green","粉彩绿","#A8D69B"],["light-green","Light Green","浅绿色","#70C486"],["green","Green","绿色","#3C9B61"],["shamrock","Shamrock","三叶草绿","#16845B"],["dark-green","Dark Green","深绿色","#236044"],["evergreen","Evergreen","常青绿","#194638"],["sage","Sage","鼠尾草绿","#94A58C"],["parrot-green","Parrot Green","鹦鹉绿","#31A88A"],["toothpaste","Toothpaste","薄荷色","#7DCEBE"],["turquoise","Turquoise","青绿色","#27A8B5"],["lagoon","Lagoon","潟湖蓝","#268F91"],["pastel-blue","Pastel Blue","粉彩蓝","#A7D7E8"],["light-blue","Light Blue","浅蓝色","#5CB9DD"],["periwinkle-blue","Periwinkle Blue","长春花蓝","#7587C9"],["blueberry-cream","Blueberry Cream","蓝莓奶油","#8EA7D4"],["cobalt","Cobalt","钴蓝色","#2866A3"],["dark-blue","Dark Blue","深蓝色","#264B84"],["midnight","Midnight","午夜蓝","#252C57"],["pastel-lavender","Pastel Lavender","粉彩薰衣草","#C1A7D7"],["purple","Purple","紫色","#76519B"],["magenta","Magenta","品红色","#B63F8D"],["light-grey","Light Grey","浅灰色","#C8C8C2"],["mist","Mist","雾灰色","#AEB8B5"],["grey","Grey","灰色","#858681"],["stone","Stone","石色","#77756F"],["dark-grey","Dark Grey","深灰色","#50524F"],["black","Black","黑色","#242424"]].map(([e,t,n,r])=>({id:e,code:t,name:n,hex:r}))},kn=[jd,Wd,Kd,qd,Jd];function Yd(e){return kn.find(t=>t.id===e)||kn[0]}function Qt(e){const t=Number.parseInt(e.replace("#",""),16);return{r:t>>16&255,g:t>>8&255,b:t&255}}function Ur(e){const t=e/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4}function _r({r:e,g:t,b:n}){const r=Ur(e),s=Ur(t),l=Ur(n),o=(r*.4124+s*.3576+l*.1805)/.95047,a=r*.2126+s*.7152+l*.0722,i=(r*.0193+s*.1192+l*.9505)/1.08883,u=d=>d>.008856?Math.cbrt(d):7.787*d+16/116,c=u(o),f=u(a),h=u(i);return{l:116*f-16,a:500*(c-f),b:200*(f-h)}}function pi(e){return e.map((t,n)=>({...t,index:n,rgb:Qt(t.hex),lab:_r(Qt(t.hex))}))}function Ls(e,t){const n=we=>we*Math.PI/180,r=we=>we*180/Math.PI,s=Math.hypot(e.a,e.b),l=Math.hypot(t.a,t.b),o=(s+l)/2,a=.5*(1-Math.sqrt(o**7/(o**7+25**7))),i=(1+a)*e.a,u=(1+a)*t.a,c=Math.hypot(i,e.b),f=Math.hypot(u,t.b),h=(we,qe)=>{const Se=r(Math.atan2(qe,we));return Se>=0?Se:Se+360},d=h(i,e.b),y=h(u,t.b),C=t.l-e.l,P=f-c;let k=y-d;c*f===0?k=0:k>180?k-=360:k<-180&&(k+=360);const _=2*Math.sqrt(c*f)*Math.sin(n(k/2)),B=(e.l+t.l)/2,A=(c+f)/2;let w=d+y;c*f===0?w=d+y:Math.abs(d-y)<=180?w/=2:w<360?w=(w+360)/2:w=(w-360)/2;const I=1-.17*Math.cos(n(w-30))+.24*Math.cos(n(2*w))+.32*Math.cos(n(3*w+6))-.2*Math.cos(n(4*w-63)),j=1+.015*(B-50)**2/Math.sqrt(20+(B-50)**2),le=1+.045*A,Ae=1+.015*A*I,me=-2*Math.sqrt(A**7/(A**7+25**7))*Math.sin(n(60*Math.exp(-(((w-275)/25)**2)))),Me=C/j,De=P/le,Ge=_/Ae;return Math.sqrt(Me**2+De**2+Ge**2+me*De*Ge)}function Qd(e,t){const n=_r(e),r=Math.hypot(n.a,n.b);let s=0,l=Number.POSITIVE_INFINITY;for(const o of t){const a=Math.hypot(o.lab.a,o.lab.b),i=r>7&&a<r*.32?(r-a)*.18:0,u=Ls(n,o.lab)+i;u<l&&(l=u,s=o.index)}return s}function Xd(e,t,n,r,s,l={}){var f,h;if(!e||!(t!=null&&t.length))return;const o=l.cellSize||18,a=l.showGrid!==!1,i=l.showCodes===!0,u=l.mode||"pixel";e.width=n*o,e.height=r*o;const c=e.getContext("2d");c.clearRect(0,0,e.width,e.height),c.fillStyle=l.background||"#f4f1eb",c.fillRect(0,0,e.width,e.height);for(let d=0;d<r;d+=1)for(let y=0;y<n;y+=1){const C=t[d*n+y];if(C<0||!s[C])continue;const{hex:P}=s[C],k=y*o+o/2,_=d*o+o/2;if(u==="pixel"||o<9)c.fillStyle=P,c.fillRect(y*o,d*o,o,o);else{c.beginPath(),c.arc(k,_,o*.42,0,Math.PI*2),c.fillStyle=P,c.fill();const B=Qt(P),A=(B.r*299+B.g*587+B.b*114)/1e3;c.beginPath(),c.arc(k,_,Math.max(1,o*.105),0,Math.PI*2),c.fillStyle=A>170?"rgba(40,36,32,.24)":"rgba(255,255,255,.45)",c.fill()}}if(i&&o>=12){c.textAlign="center",c.textBaseline="middle",c.font=`700 ${Math.max(6,Math.floor(o*.34))}px system-ui, sans-serif`;for(let d=0;d<r;d+=1)for(let y=0;y<n;y+=1){const C=t[d*n+y],P=s[C];if(!P)continue;const k=Qt(P.hex),_=(k.r*299+k.g*587+k.b*114)/1e3;c.fillStyle=_>158?"#25221f":"#ffffff",c.fillText(P.code,y*o+o/2,d*o+o/2+.5)}}if(a){c.lineWidth=1;for(let d=0;d<=n;d+=1)c.beginPath(),c.moveTo(d*o+.5,0),c.lineTo(d*o+.5,e.height),c.strokeStyle=d%10===0?"rgba(35,33,30,.42)":d%5===0?"rgba(35,33,30,.23)":"rgba(35,33,30,.09)",c.stroke();for(let d=0;d<=r;d+=1)c.beginPath(),c.moveTo(0,d*o+.5),c.lineTo(e.width,d*o+.5),c.strokeStyle=d%10===0?"rgba(35,33,30,.42)":d%5===0?"rgba(35,33,30,.23)":"rgba(35,33,30,.09)",c.stroke()}if(((f=l.symmetry)!=null&&f.horizontal||(h=l.symmetry)!=null&&h.vertical)&&(c.save(),c.setLineDash([6,4]),c.strokeStyle="rgba(218, 92, 108, .9)",c.lineWidth=1.5,l.symmetry.horizontal&&(c.beginPath(),c.moveTo(e.width/2,0),c.lineTo(e.width/2,e.height),c.stroke()),l.symmetry.vertical&&(c.beginPath(),c.moveTo(0,e.height/2),c.lineTo(e.width,e.height/2),c.stroke()),c.restore()),l.selection){const d=l.selection,y=Math.min(d.startColumn,d.endColumn),C=Math.min(d.startRow,d.endRow),P=Math.abs(d.endColumn-d.startColumn)+1,k=Math.abs(d.endRow-d.startRow)+1;c.save(),c.setLineDash([5,3]),c.lineWidth=2,c.strokeStyle="#da5c6c",c.strokeRect(y*o+1,C*o+1,P*o-2,k*o-2),c.restore()}}function Fn(e,t){const n=new Map;for(const r of e||[])r>=0&&n.set(r,(n.get(r)||0)+1);return[...n.entries()].map(([r,s])=>({...t[r],index:r,count:s})).sort((r,s)=>s.count-r.count)}function mi(e,t,n){return e?{left:Math.max(0,Math.min(e.startColumn,e.endColumn)),top:Math.max(0,Math.min(e.startRow,e.endRow)),right:Math.min(t-1,Math.max(e.startColumn,e.endColumn)),bottom:Math.min(n-1,Math.max(e.startRow,e.endRow))}:{left:0,top:0,right:t-1,bottom:n-1}}function Ds(e,t,n,r={}){const s=Math.floor(e/t),l=e%t,o=new Set([e]);return r.horizontal&&o.add(s*t+(t-l-1)),r.vertical&&o.add((n-s-1)*t+l),r.horizontal&&r.vertical&&o.add((n-s-1)*t+(t-l-1)),[...o]}function Zd(e,t,n,r,s,l={}){if(r<0||r>=e.length)return new Int16Array(e);const o=e[r];if(o===s)return new Int16Array(e);const a=new Int16Array(e),i=new Uint8Array(e.length),u=[r];i[r]=1;for(let c=0;c<u.length;c+=1){const f=u[c],h=Math.floor(f/t),d=f%t;for(const C of Ds(f,t,n,l))a[C]=s;const y=[d>0?f-1:-1,d<t-1?f+1:-1,h>0?f-t:-1,h<n-1?f+t:-1];for(const C of y)C>=0&&!i[C]&&e[C]===o&&(i[C]=1,u.push(C))}return a}function eh(e,t,n,r,s,l={}){const o=new Int16Array(e),{left:a,top:i,right:u,bottom:c}=mi(r,t,n);for(let f=i;f<=c;f+=1)for(let h=a;h<=u;h+=1){const d=f*t+h;for(const y of Ds(d,t,n,l))o[y]=s}return o}function Gl(e,t,n){const r=new Int16Array(e);if(t===n)return r;for(let s=0;s<r.length;s+=1)r[s]===t&&(r[s]=n);return r}function th(e,t,n,r,s=null){const l=new Int16Array(e),{left:o,top:a,right:i,bottom:u}=mi(s,t,n);for(let c=a;c<=u;c+=1)for(let f=o;f<=i;f+=1){const h=c*t+f,d=r==="horizontal"?i-(f-o):f,y=r==="vertical"?u-(c-a):c;l[y*t+d]=e[h]}return l}function gi(e,t,n){const r=Fn(e,t),s=Math.max(2,Number(n)||t.length);if(r.length<=s)return new Int16Array(e);const l=r.slice(0,s),o=pi(l),a=new Map;for(const u of r.slice(s)){const c=_r(Qt(u.hex));let f=l[0].index,h=Number.POSITIVE_INFINITY;for(const d of o){const y=Ls(c,d.lab);y<h&&(h=y,f=l[d.index].index)}a.set(u.index,f)}const i=new Int16Array(e);for(let u=0;u<i.length;u+=1)a.has(i[u])&&(i[u]=a.get(i[u]));return i}function nh(e,t,n,r=1){let s=new Int16Array(e);const l=[-1,0,1];for(let o=0;o<r;o+=1){const a=s,i=new Int16Array(a);for(let u=0;u<n;u+=1)for(let c=0;c<t;c+=1){const f=u*t+c,h=a[f];if(h<0)continue;const d=new Map;let y=0;for(const k of l)for(const _ of l){if(!_&&!k)continue;const B=c+_,A=u+k;if(B<0||A<0||B>=t||A>=n)continue;const w=a[A*t+B];w<0||(w===h&&(y+=1),d.set(w,(d.get(w)||0)+1))}const[C,P]=[...d.entries()].sort((k,_)=>_[1]-k[1])[0]||[];y<=1&&C!==void 0&&C!==h&&P>=4&&(i[f]=C)}s=i}return s}function rh(e,t,n=8,r=6){const s=Fn(e,t),l=new Map(s.map(a=>[a.index,_r(Qt(a.hex))])),o=[];for(let a=0;a<s.length;a+=1)for(let i=a+1;i<s.length;i+=1){const u=s[a],c=s[i],f=Ls(l.get(u.index),l.get(c.index));if(f>r)continue;const h=u.count<=c.count?u:c,d=h===u?c:u;o.push({source:h,target:d,distance:f})}return o.sort((a,i)=>a.distance-i.distance).slice(0,n)}async function sh(e){return"createImageBitmap"in window?createImageBitmap(e,{imageOrientation:"from-image"}):new Promise((t,n)=>{const r=URL.createObjectURL(e),s=new Image;s.onload=()=>{URL.revokeObjectURL(r),t(s)},s.onerror=()=>{URL.revokeObjectURL(r),n(new Error("无法读取这张图片"))},s.src=r})}function vi(e,t,n,r=1,s=50,l=50){const o=e/t;let a=e,i=t;o>n?a=t*n:i=e/n,a/=r,i/=r;const u=a/2+(e-a)*(s/100),c=i/2+(t-i)*(l/100);return{x:Math.max(0,Math.min(e-a,u-a/2)),y:Math.max(0,Math.min(t-i,c-i/2)),width:a,height:i}}function lh(e,t,n){if(!e||!t)return;const{columns:r,rows:s,zoom:l,focusX:o,focusY:a}=n,i=r/s;e.width=520,e.height=260;const u=vi(t.width,t.height,i,l,o,a),c=e.getContext("2d");c.fillStyle="#23211e",c.fillRect(0,0,e.width,e.height);const f=Math.min(e.width,e.height*i),h=f/i,d=(e.width-f)/2,y=(e.height-h)/2;c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high",c.drawImage(t,u.x,u.y,u.width,u.height,d,y,f,h),c.strokeStyle="rgba(255,255,255,.55)",c.strokeRect(d+.5,y+.5,f-1,h-1)}function oh(e,t,n){const{columns:r,rows:s,zoom:l,focusX:o,focusY:a}=t,i=4,u=document.createElement("canvas");u.width=r*i,u.height=s*i;const c=u.getContext("2d"),f=vi(e.width,e.height,r/s,l,o,a);c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high",c.drawImage(e,f.x,f.y,f.width,f.height,0,0,u.width,u.height);const h=document.createElement("canvas");h.width=r,h.height=s;const d=h.getContext("2d",{willReadFrequently:!0});d.imageSmoothingEnabled=!0,d.imageSmoothingQuality="high",d.clearRect(0,0,r,s),d.drawImage(u,0,0,r,s);const y=d.getImageData(0,0,r,s).data,C=ih(y,r,s,t),P=pi(n),k=new Int16Array(r*s);for(let _=0;_<k.length;_+=1){const B=_*4;k[_]=y[B+3]<48?-1:Qd({r:C[B],g:C[B+1],b:C[B+2]},P)}return gi(k,n,t.maxColors)}function ih(e,t,n,r){const s=(r.brightness??100)/100,l=(r.contrast??100)/100,o=(r.saturation??100)/100,a=(r.detail??0)/100,i=new Float32Array(e.length),u=h=>Math.max(0,Math.min(255,h));for(let h=0;h<e.length;h+=4){const d=e[h],y=e[h+1],C=e[h+2],P=d*.2126+y*.7152+C*.0722;i[h]=u(((P+(d-P)*o-128)*l+128)*s),i[h+1]=u(((P+(y-P)*o-128)*l+128)*s),i[h+2]=u(((P+(C-P)*o-128)*l+128)*s),i[h+3]=e[h+3]}if(a<=0)return i;const c=new Float32Array(i),f=[[-1,0],[1,0],[0,-1],[0,1]];for(let h=0;h<n;h+=1)for(let d=0;d<t;d+=1){const y=(h*t+d)*4;if(i[y+3]<48)continue;const C=[0,0,0];let P=0;for(const[k,_]of f){const B=d+k,A=h+_;if(B<0||A<0||B>=t||A>=n)continue;const w=(A*t+B)*4;i[w+3]<48||(C[0]+=i[w],C[1]+=i[w+1],C[2]+=i[w+2],P+=1)}if(P)for(let k=0;k<3;k+=1){const _=C[k]/P;c[y+k]=u(i[y+k]+(i[y+k]-_)*a)}}return c}const Wr=595.28,Kr=841.89;function yi(e,t){const n=URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=t,r.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}function bi(e){const{r:t,g:n,b:r}=Qt(e);return(t*299+n*587+r*114)/1e3>158?"#26231f":"#ffffff"}function gn(e,t,n,r,s,l="#27241f"){e.font=s,e.fillStyle=l,e.textAlign="center",e.textBaseline="middle",e.fillText(t,n,r)}function Ci(e,t,n,r,s={}){const l=s.startColumn||0,o=s.startRow||0,a=Math.min(t,s.endColumn??t),i=Math.min(n,s.endRow??n),u=a-l,c=i-o,f=s.cellSize||28,h=Math.max(30,Math.round(f*1.2)),d=s.titleHeight??58,y=s.footerHeight??26,C=document.createElement("canvas");C.width=h*2+u*f,C.height=d+h*2+c*f+y;const P=C.getContext("2d");P.fillStyle="#fbfaf7",P.fillRect(0,0,C.width,C.height),P.textAlign="left",P.textBaseline="middle",P.fillStyle="#24211d",P.font="700 20px system-ui, sans-serif",P.fillText(s.title||`${t} × ${n} 拼豆图纸`,h,d/2-4),s.subtitle&&(P.textAlign="right",P.font="12px system-ui, sans-serif",P.fillStyle="#6f6961",P.fillText(s.subtitle,C.width-h,d/2-4));const k=h,_=d+h,B=Math.max(7,Math.min(12,Math.floor(f*.36)));for(let A=o;A<i;A+=1)for(let w=l;w<a;w+=1){const I=w-l,j=A-o,le=k+I*f,Ae=_+j*f,me=r[e[A*t+w]];P.fillStyle=(me==null?void 0:me.hex)||"#ffffff",P.fillRect(le,Ae,f,f),me&&gn(P,me.code,le+f/2,Ae+f/2+.5,`700 ${B}px system-ui, sans-serif`,bi(me.hex))}for(let A=0;A<=u;A+=1){const w=l+A,I=k+A*f+.5;P.beginPath(),P.moveTo(I,_),P.lineTo(I,_+c*f),P.strokeStyle=w%10===0?"#4d4943":w%5===0?"#77716a":"#c8c4bd",P.lineWidth=w%10===0?1.5:1,P.stroke()}for(let A=0;A<=c;A+=1){const w=o+A,I=_+A*f+.5;P.beginPath(),P.moveTo(k,I),P.lineTo(k+u*f,I),P.strokeStyle=w%10===0?"#4d4943":w%5===0?"#77716a":"#c8c4bd",P.lineWidth=w%10===0?1.5:1,P.stroke()}for(let A=0;A<u;A+=1){const w=String(l+A+1),I=k+A*f+f/2;gn(P,w,I,_-h/2,"600 11px system-ui, sans-serif","#56514b"),gn(P,w,I,_+c*f+h/2,"600 11px system-ui, sans-serif","#56514b")}for(let A=0;A<c;A+=1){const w=String(o+A+1),I=_+A*f+f/2;gn(P,w,k-h/2,I,"600 11px system-ui, sans-serif","#56514b"),gn(P,w,k+u*f+h/2,I,"600 11px system-ui, sans-serif","#56514b")}return C}function Pi(e,t,n){const{x:r,y:s,width:l,columns:o=5,rowHeight:a=42}=n,i=10,u=(l-i*(o-1))/o;return t.forEach((c,f)=>{const h=f%o,d=Math.floor(f/o),y=r+h*(u+i),C=s+d*a;e.fillStyle="#ffffff",e.strokeStyle="#d4d0c9",e.lineWidth=1,e.fillRect(y,C,u,a-8),e.strokeRect(y+.5,C+.5,u-1,a-9);const P=Math.min(58,Math.max(42,u*.28));e.fillStyle=c.hex,e.fillRect(y,C,P,a-8),e.textBaseline="middle",e.font="700 12px system-ui, sans-serif",e.fillStyle=bi(c.hex),e.textAlign="center",e.fillText(c.code,y+P/2,C+(a-8)/2),e.textAlign="right",e.fillStyle="#37332e",e.font="600 12px system-ui, sans-serif",e.fillText(String(c.count),y+u-10,C+(a-8)/2)}),Math.ceil(t.length/o)*a}function ah(e,t,n,r,s={}){const l=Fn(e,r),o=Math.max(22,Math.min(30,Math.floor(3600/Math.max(t,n)))),a=Ci(e,t,n,r,{cellSize:o,title:`${t} × ${n} 拼豆图纸`,subtitle:s.paletteName||"",footerHeight:0}),i=Math.max(4,Math.min(16,Math.floor((a.width-54)/200))),u=Math.ceil(l.length/i),c=82,f=Math.max(90,u*42),h=document.createElement("canvas");h.width=a.width,h.height=a.height+c+f+26;const d=h.getContext("2d");d.fillStyle="#fbfaf7",d.fillRect(0,0,h.width,h.height),d.drawImage(a,0,0);const y=a.height+34;d.textAlign="left",d.textBaseline="middle",d.fillStyle="#24211d",d.font="700 22px system-ui, sans-serif";const C=l.reduce((P,k)=>P+k.count,0);return d.fillText(`拼豆数量统计（${C} 颗）`,32,y),d.font="12px system-ui, sans-serif",d.fillStyle="#6f6961",d.textAlign="right",d.fillText(`${l.length} 种颜色`,h.width-32,y),Pi(d,l,{x:32,y:a.height+c,width:h.width-64,columns:i}),h}function uh(e,t,n=""){const r=Fn(e,t),s=96,l=[];for(let o=0;o<r.length;o+=s){const a=r.slice(o,o+s),i=document.createElement("canvas");i.width=900,i.height=1273;const u=i.getContext("2d");u.fillStyle="#fbfaf7",u.fillRect(0,0,i.width,i.height),u.fillStyle="#24211d",u.textAlign="left",u.textBaseline="middle",u.font="700 30px system-ui, sans-serif";const c=r.reduce((f,h)=>f+h.count,0);u.fillText(`拼豆数量统计（${c} 颗）`,52,62),u.font="15px system-ui, sans-serif",u.fillStyle="#6f6961",u.fillText(`${n} · ${r.length} 种颜色`,52,101),Pi(u,a,{x:52,y:142,width:796,columns:4,rowHeight:43}),u.textAlign="right",u.font="14px system-ui, sans-serif",u.fillText(`统计表 ${Math.floor(o/s)+1} / ${Math.ceil(r.length/s)}`,848,1230),l.push(i)}return l}function ch(e){const t=atob(e.split(",")[1]),n=new Uint8Array(t.length);for(let r=0;r<t.length;r+=1)n[r]=t.charCodeAt(r);return n}function fh(e){const t=new TextEncoder,n=new Map,r=e.map((u,c)=>`${3+c*3} 0 R`).join(" ");n.set(1,t.encode("<< /Type /Catalog /Pages 2 0 R >>")),n.set(2,t.encode(`<< /Type /Pages /Kids [${r}] /Count ${e.length} >>`)),e.forEach((u,c)=>{const f=3+c*3,h=f+1,d=f+2,y=ch(u.toDataURL("image/jpeg",.92)),C=Math.min((Wr-30)/u.width,(Kr-30)/u.height),P=u.width*C,k=u.height*C,_=(Wr-P)/2,B=(Kr-k)/2,A=t.encode(`q
${P.toFixed(2)} 0 0 ${k.toFixed(2)} ${_.toFixed(2)} ${B.toFixed(2)} cm
/Im${c} Do
Q`);n.set(f,t.encode(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${Wr} ${Kr}] /Resources << /XObject << /Im${c} ${h} 0 R >> >> /Contents ${d} 0 R >>`));const w=t.encode(`<< /Type /XObject /Subtype /Image /Width ${u.width} /Height ${u.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${y.length} >>
stream
`),I=t.encode(`
endstream`),j=new Uint8Array(w.length+y.length+I.length);j.set(w),j.set(y,w.length),j.set(I,w.length+y.length),n.set(h,j);const le=t.encode(`<< /Length ${A.length} >>
stream
`),Ae=t.encode(`
endstream`),me=new Uint8Array(le.length+A.length+Ae.length);me.set(le),me.set(A,le.length),me.set(Ae,le.length+A.length),n.set(d,me)});const s=[t.encode(`%PDF-1.4
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
%%EOF`),s.push(t.encode(i.join(""))),new Blob(s,{type:"application/pdf"})}function dh(e,t,n,r,s,l={}){if(!(e!=null&&e.length))return;ah(e,t,n,r,l).toBlob(a=>{a&&yi(a,s)},"image/png")}function hh(e,t,n,r,s,l={}){if(!(e!=null&&e.length))return;const o=[],a=Math.max(8,Number(l.boardSize)||29),i=a,u=Math.ceil(t/a),c=Math.ceil(n/i);for(let f=0;f<c;f+=1)for(let h=0;h<u;h+=1)o.push(Ci(e,t,n,r,{startColumn:h*a,endColumn:(h+1)*a,startRow:f*i,endRow:(f+1)*i,cellSize:32,title:`${t} × ${n} 拼豆图纸`,subtitle:`区域 ${h+1}/${u} · ${f+1}/${c}`}));o.push(...uh(e,r,l.paletteName||"")),yi(fh(o),s)}const Ai=1;function ph({cells:e,columns:t,rows:n,paletteId:r,settings:s,inventory:l}){return{type:"sakura-tools/pixel-beads",version:Ai,savedAt:new Date().toISOString(),paletteId:r,grid:{columns:t,rows:n,cells:Array.from(e)},settings:{beadSize:s.beadSize,detail:s.detail,saturation:s.saturation,contrast:s.contrast,brightness:s.brightness,maxColors:s.maxColors},inventory:{...l}}}function mh(e,t){var a,i;const n=JSON.parse(e);if((n==null?void 0:n.type)!=="sakura-tools/pixel-beads"||n.version!==Ai)throw new Error("不是受支持的 Sakura Tools 拼豆工程文件");const r=t.find(u=>u.id===n.paletteId);if(!r)throw new Error("工程使用的色板在当前版本中不可用");const s=Number((a=n.grid)==null?void 0:a.columns),l=Number((i=n.grid)==null?void 0:i.rows);if(!Number.isInteger(s)||!Number.isInteger(l)||s<8||l<8||s>150||l>150)throw new Error("工程网格尺寸无效");if(!Array.isArray(n.grid.cells)||n.grid.cells.length!==s*l)throw new Error("工程网格数据不完整");const o=new Int16Array(n.grid.cells);if([...o].some(u=>u<-1||u>=r.colors.length))throw new Error("工程中包含无效色号");return{...n,palette:r,columns:s,rows:l,cells:o}}function jl(e,t,n="application/json"){const r=new Blob([e],{type:n}),s=URL.createObjectURL(r),l=document.createElement("a");l.href=s,l.download=t,l.click(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function gh(e,t){const n=[["色号","颜色","需要","已有","缺少"]];for(const r of e){const s=Math.max(0,Number(t[r.id])||0);n.push([r.code,r.name,r.count,s,Math.max(0,r.count-s)])}return`\uFEFF${n.map(r=>r.map(s=>`"${String(s).replaceAll('"','""')}"`).join(",")).join(`\r
`)}`}const vh={class:"bead-studio"},yh={class:"upload-symbol"},bh=["disabled"],Ch={key:0,class:"error-message"},Ph={class:"bead-flow","aria-label":"工作流程"},Ah={class:"bead-workbench"},wh={class:"bead-sidebar bead-source-panel"},Sh={class:"bead-panel-heading"},xh={key:1,class:"project-preview"},kh=["title"],_h={key:2,class:"error-message"},Eh={class:"bead-field-row"},Mh={class:"bead-size-presets","aria-label":"常用方形网格预设"},Rh=["onClick"],Th={class:"bead-range"},Bh={class:"bead-range"},Nh={class:"bead-range"},Oh={class:"bead-range compact-range"},Ih={class:"bead-range compact-range"},Hh={class:"bead-range compact-range"},Lh={class:"bead-range compact-range"},Dh={class:"bead-select"},$h={class:"bead-optimize-actions"},Fh=["disabled"],Gh=["disabled"],jh={class:"bead-segmented"},zh={class:"bead-select"},Vh=["value"],Uh=["disabled"],Wh={class:"bead-editor-panel"},Kh={class:"bead-toolbar"},qh={class:"bead-tool-group","aria-label":"绘制工具"},Jh={class:"bead-tool-group compact"},Yh=["disabled","title"],Qh=["disabled","title"],Xh={class:"canvas-zoom"},Zh={class:"preview-toggle","aria-label":"预览样式"},e2={class:"bead-editor-actions"},t2={class:"bead-canvas-status"},n2={class:"bead-sidebar bead-color-panel"},r2={class:"bead-panel-heading"},s2={class:"bead-palette","aria-label":"拼豆色板"},l2=["title","onClick"],o2={class:"bead-materials"},i2={class:"bead-usage"},a2=["onClick","onKeydown"],u2={title:"需要数量"},c2=["onUpdate:modelValue"],f2={key:0},d2={key:1,class:"enough"},h2={key:0,class:"merge-suggestions"},p2=["onClick"],m2={class:"bead-export"},g2={class:"project-actions"},v2={class:"local-processing"},y2={__name:"PixelBeadsTool",setup(e){const t=Z(null),n=Z(null),r=Z(null),s=Z(null),l=Z(null),o=Zr(null),a=Z(""),i=Z(""),u=Z(!1),c=Z(!1),f=Zr(new Int16Array),h=$t({columns:0,rows:0}),d=$t({columns:48,rows:48,zoom:1,focusX:50,focusY:50,detail:32,saturation:106,contrast:104,brightness:100,maxColors:0,beadSize:5,paletteId:kn[0].id}),y=Z("brush"),C=Z(0),P=Z(16),k=Z(!0),_=Z(!1),B=Z("pixel"),A=Z(null),w=$t({horizontal:!1,vertical:!1}),I=$t({}),j=Z([]),le=Z([]);let Ae=null,me=-1,Me=null,De=0;const Ge=[29,48,52,80,100],we=ve(()=>Yd(d.paletteId)),qe=ve(()=>Fn(f.value,we.value.colors)),Se=ve(()=>qe.value.reduce((D,g)=>D+g.count,0)),ce=ve(()=>({width:(h.columns*d.beadSize/10).toFixed(1),height:(h.rows*d.beadSize/10).toFixed(1)})),ie=ve(()=>j.value.length>0),et=ve(()=>le.value.length>0),rt=ve(()=>we.value.colors[C.value]),Je=ve(()=>rh(f.value,we.value.colors)),Ne=ve(()=>qe.value.reduce((D,g)=>{const se=Math.max(0,Number(I[g.id])||0);return D+Math.max(0,g.count-se)},0));function yt(){d.columns=Math.max(8,Math.min(150,Number(d.columns)||48)),d.rows=Math.max(8,Math.min(150,Number(d.rows)||48))}function Nt(D){d.columns=D,d.rows=D}async function ut(D){var g,se;if(i.value="",!D||!["image/jpeg","image/png","image/webp"].includes(D.type)){i.value="请选择 JPG、PNG 或 WebP 图片";return}if(D.size>12*1024*1024){i.value="图片不能超过 12 MB";return}u.value=!0;try{(se=(g=o.value)==null?void 0:g.close)==null||se.call(g),o.value=await sh(D),a.value=D.name,d.zoom=1,d.focusX=50,d.focusY=50,await tt(),z(),L()}catch(ue){i.value=ue.message||"图片读取失败"}finally{u.value=!1}}function je(D){var g;ut((g=D.target.files)==null?void 0:g[0]),D.target.value=""}function E(D){var g,se;c.value=!1,ut((se=(g=D.dataTransfer)==null?void 0:g.files)==null?void 0:se[0])}function z(){o.value&&(yt(),lh(r.value,o.value,d))}function L(){if(o.value){yt(),u.value=!0;try{const D=oh(o.value,d,we.value.colors);h.columns=d.columns,h.rows=d.rows,f.value=D,C.value=D.find(g=>g>=0)??0,j.value=[],le.value=[],tt(()=>{m(),ee()})}finally{u.value=!1}}}function K(){Xd(s.value,f.value,h.columns,h.rows,we.value.colors,{cellSize:P.value,showGrid:k.value,showCodes:_.value,mode:B.value,selection:A.value,symmetry:w})}function ee(){De||(De=requestAnimationFrame(()=>{De=0,K()}))}function m(){if(!l.value||!h.columns||!h.rows)return;const D=Math.max(240,l.value.clientWidth-56),g=Math.max(240,l.value.clientHeight-56);P.value=Math.max(4,Math.min(25,Math.floor(Math.min(D/h.columns,g/h.rows))))}function v(){j.value=[...j.value.slice(-39),new Int16Array(f.value)],le.value=[]}function b(){ie.value&&(le.value=[new Int16Array(f.value),...le.value.slice(0,39)],f.value=j.value[j.value.length-1],j.value=j.value.slice(0,-1),tt(ee))}function x(){et.value&&(j.value=[...j.value.slice(-39),new Int16Array(f.value)],f.value=le.value[0],le.value=le.value.slice(1),tt(ee))}function M(D){const g=s.value.getBoundingClientRect(),se=(D.clientX-g.left)*(s.value.width/g.width),ue=(D.clientY-g.top)*(s.value.height/g.height),T=Math.floor(se/P.value),ne=Math.floor(ue/P.value);return T<0||ne<0||T>=h.columns||ne>=h.rows?-1:ne*h.columns+T}function S(D){return{column:D%h.columns,row:Math.floor(D/h.columns)}}function H(D){v(),f.value=D,tt(ee)}function O(D){if(D<0||D===me)return;if(me=D,y.value==="picker"){const ue=f.value[D];ue>=0&&(C.value=ue,y.value="brush"),Ae=null;return}const g=y.value==="eraser"?-1:C.value,se=Ds(D,h.columns,h.rows,w);if(!se.every(ue=>Ae[ue]===g)){for(const ue of se)Ae[ue]=g;f.value=new Int16Array(Ae),ee()}}function N(D){var se,ue;if(!f.value.length)return;D.preventDefault(),(ue=(se=s.value).setPointerCapture)==null||ue.call(se,D.pointerId),me=-1;const g=M(D);if(!(g<0)){if(y.value==="bucket"){H(Zd(f.value,h.columns,h.rows,g,C.value,w));return}if(y.value==="replace"){H(Gl(f.value,f.value[g],C.value));return}if(y.value==="rectangle"||y.value==="select"){const T=S(g);Me={startColumn:T.column,startRow:T.row,endColumn:T.column,endRow:T.row},A.value={...Me},y.value==="rectangle"&&v(),ee();return}y.value!=="picker"&&v(),Ae=new Int16Array(f.value),O(g)}}function R(D){if(!(D.buttons&1))return;const g=M(D);if(Me&&g>=0){const se=S(g);Me.endColumn=se.column,Me.endRow=se.row,A.value={...Me},ee();return}Ae&&O(g)}function J(){Me&&y.value==="rectangle"&&(f.value=eh(f.value,h.columns,h.rows,Me,C.value,w),A.value=null),Me=null,Ae=null,me=-1,ee()}function F(D){f.value.length&&H(th(f.value,h.columns,h.rows,D,A.value))}function q(){f.value.length&&H(nh(f.value,h.columns,h.rows,2))}function X(){!f.value.length||!d.maxColors||H(gi(f.value,we.value.colors,d.maxColors))}function oe(D){H(Gl(f.value,D.source.index,D.target.index))}function ge(){if(!f.value.length)return;const D=ph({cells:f.value,columns:h.columns,rows:h.rows,paletteId:we.value.id,settings:d,inventory:I});jl(JSON.stringify(D),`${ze()}.sakurabeads`)}async function fe(D){var se,ue,T;const g=(se=D.target.files)==null?void 0:se[0];if(D.target.value="",!!g){i.value="";try{const ne=mh(await g.text(),kn);(T=(ue=o.value)==null?void 0:ue.close)==null||T.call(ue),o.value=null,a.value=g.name.replace(/\.sakurabeads$/i,""),d.paletteId=ne.palette.id,d.columns=ne.columns,d.rows=ne.rows,Object.assign(d,ne.settings||{}),h.columns=ne.columns,h.rows=ne.rows,f.value=ne.cells;for(const Gn of Object.keys(I))delete I[Gn];Object.assign(I,ne.inventory||{}),C.value=ne.cells.find(Gn=>Gn>=0)??0,A.value=null,j.value=[],le.value=[],await tt(),m(),ee()}catch(ne){i.value=ne.message||"工程文件读取失败"}}}function ke(){jl(gh(qe.value,I),`${ze()}-材料清单.csv`,"text/csv;charset=utf-8")}function Ee(D){C.value=D}function ze(){return`${a.value.replace(/\.[^.]+$/,"").replace(/[^a-zA-Z0-9\u4e00-\u9fa5_-]+/g,"-")||"pattern"}-${h.columns}x${h.rows}`}Jt(()=>[d.columns,d.rows,d.zoom,d.focusX,d.focusY],()=>tt(z)),Jt(()=>d.paletteId,()=>{o.value&&L()}),Jt([P,k,_,B,A,()=>w.horizontal,()=>w.vertical],()=>tt(ee));function Qe(D){var g;!(D.ctrlKey||D.metaKey)||D.key.toLowerCase()!=="z"||["INPUT","SELECT","TEXTAREA"].includes((g=D.target)==null?void 0:g.tagName)||(D.preventDefault(),D.shiftKey?x():b())}return Dn(()=>window.addEventListener("keydown",Qe)),Ar(()=>{var D,g;window.removeEventListener("keydown",Qe),De&&cancelAnimationFrame(De),(g=(D=o.value)==null?void 0:D.close)==null||g.call(D)}),(D,g)=>{var se,ue;return W(),re("div",vh,[!o.value&&!f.value.length?(W(),re("div",{key:0,class:ae(["bead-upload",{dragging:c.value}]),onDragenter:g[2]||(g[2]=pn(T=>c.value=!0,["prevent"])),onDragover:g[3]||(g[3]=pn(()=>{},["prevent"])),onDragleave:g[4]||(g[4]=pn(T=>c.value=!1,["prevent"])),onDrop:pn(E,["prevent"])},[p("input",{ref_key:"fileInput",ref:t,type:"file",accept:"image/jpeg,image/png,image/webp",hidden:"",onChange:je},null,544),p("span",yh,[G($(x1),{size:34,"stroke-width":1.5})]),g[41]||(g[41]=p("p",{class:"bead-kicker"},"LOCAL IMAGE WORKFLOW",-1)),g[42]||(g[42]=p("h2",null,"从一张图片开始",-1)),g[43]||(g[43]=p("p",null,"拖入 JPG、PNG 或 WebP，图片只在当前浏览器中解码与处理。",-1)),p("button",{class:"primary-button",type:"button",disabled:u.value,onClick:g[0]||(g[0]=T=>{var ne;return(ne=t.value)==null?void 0:ne.click()})},[G($(q1),{size:17}),U(" "+V(u.value?"正在读取…":"选择图片"),1)],8,bh),p("button",{class:"project-open-button",type:"button",onClick:g[1]||(g[1]=T=>{var ne;return(ne=n.value)==null?void 0:ne.click()})},[G($(zr),{size:16}),g[40]||(g[40]=U(" 打开拼豆工程",-1))]),p("input",{ref_key:"projectInput",ref:n,type:"file",accept:".sakurabeads,application/json",hidden:"",onChange:fe},null,544),g[44]||(g[44]=p("small",null,"最大 12 MB · 不上传服务器",-1)),i.value?(W(),re("p",Ch,V(i.value),1)):Ut("",!0)],34)):(W(),re(Re,{key:1},[p("div",Ph,[g[45]||(g[45]=p("span",{class:"done"},"01 图片",-1)),g[46]||(g[46]=p("i",null,null,-1)),g[47]||(g[47]=p("span",{class:"done"},"02 裁剪",-1)),g[48]||(g[48]=p("i",null,null,-1)),p("span",{class:ae({done:f.value.length})},"03 配色",2),g[49]||(g[49]=p("i",null,null,-1)),p("span",{class:ae({done:f.value.length})},"04 编辑导出",2)]),p("div",Ah,[p("aside",wh,[p("div",Sh,[p("span",null,[G($(T1),{size:15}),g[50]||(g[50]=U(" 图片与网格",-1))]),p("button",{type:"button",onClick:g[5]||(g[5]=T=>{var ne;return(ne=t.value)==null?void 0:ne.click()})},[G($(Is),{size:13}),g[51]||(g[51]=U(" 换图",-1))]),p("input",{ref_key:"fileInput",ref:t,type:"file",accept:"image/jpeg,image/png,image/webp",hidden:"",onChange:je},null,544)]),o.value?(W(),re("canvas",{key:0,ref_key:"cropCanvas",ref:r,class:"crop-preview","aria-label":"裁剪预览"},null,512)):(W(),re("div",xh,[G($(zr),{size:22}),g[52]||(g[52]=p("span",null,"已打开工程网格",-1))])),p("p",{class:"source-name",title:a.value},V(a.value),9,kh),i.value?(W(),re("p",_h,V(i.value),1)):Ut("",!0),p("div",Eh,[p("label",null,[g[53]||(g[53]=U("宽度 ",-1)),be(p("input",{"onUpdate:modelValue":g[6]||(g[6]=T=>d.columns=T),type:"number",min:"8",max:"150"},null,512),[[Be,d.columns,void 0,{number:!0}]])]),g[55]||(g[55]=p("span",null,"×",-1)),p("label",null,[g[54]||(g[54]=U("高度 ",-1)),be(p("input",{"onUpdate:modelValue":g[7]||(g[7]=T=>d.rows=T),type:"number",min:"8",max:"150"},null,512),[[Be,d.rows,void 0,{number:!0}]])])]),p("div",Mh,[(W(),re(Re,null,xt(Ge,T=>p("button",{key:T,type:"button",class:ae({active:d.columns===T&&d.rows===T}),onClick:ne=>Nt(T)},V(T),11,Rh)),64))]),p("label",Th,[p("span",null,[g[56]||(g[56]=U("裁剪缩放 ",-1)),p("b",null,V(d.zoom.toFixed(1))+"×",1)]),be(p("input",{"onUpdate:modelValue":g[8]||(g[8]=T=>d.zoom=T),type:"range",min:"1",max:"3",step:"0.1"},null,512),[[Be,d.zoom,void 0,{number:!0}]])]),p("label",Bh,[p("span",null,[g[57]||(g[57]=U("水平取景 ",-1)),p("b",null,V(d.focusX)+"%",1)]),be(p("input",{"onUpdate:modelValue":g[9]||(g[9]=T=>d.focusX=T),type:"range",min:"0",max:"100"},null,512),[[Be,d.focusX,void 0,{number:!0}]])]),p("label",Nh,[p("span",null,[g[58]||(g[58]=U("垂直取景 ",-1)),p("b",null,V(d.focusY)+"%",1)]),be(p("input",{"onUpdate:modelValue":g[10]||(g[10]=T=>d.focusY=T),type:"range",min:"0",max:"100"},null,512),[[Be,d.focusY,void 0,{number:!0}]])]),g[68]||(g[68]=p("span",{class:"bead-label"},"成像调整",-1)),p("label",Oh,[p("span",null,[g[59]||(g[59]=U("细节增强 ",-1)),p("b",null,V(d.detail),1)]),be(p("input",{"onUpdate:modelValue":g[11]||(g[11]=T=>d.detail=T),type:"range",min:"0",max:"80"},null,512),[[Be,d.detail,void 0,{number:!0}]])]),p("label",Ih,[p("span",null,[g[60]||(g[60]=U("饱和度 ",-1)),p("b",null,V(d.saturation)+"%",1)]),be(p("input",{"onUpdate:modelValue":g[12]||(g[12]=T=>d.saturation=T),type:"range",min:"70",max:"140"},null,512),[[Be,d.saturation,void 0,{number:!0}]])]),p("label",Hh,[p("span",null,[g[61]||(g[61]=U("对比度 ",-1)),p("b",null,V(d.contrast)+"%",1)]),be(p("input",{"onUpdate:modelValue":g[13]||(g[13]=T=>d.contrast=T),type:"range",min:"80",max:"130"},null,512),[[Be,d.contrast,void 0,{number:!0}]])]),p("label",Lh,[p("span",null,[g[62]||(g[62]=U("亮度 ",-1)),p("b",null,V(d.brightness)+"%",1)]),be(p("input",{"onUpdate:modelValue":g[14]||(g[14]=T=>d.brightness=T),type:"range",min:"80",max:"120"},null,512),[[Be,d.brightness,void 0,{number:!0}]])]),p("label",Dh,[g[64]||(g[64]=p("span",null,"颜色数限制",-1)),be(p("select",{"onUpdate:modelValue":g[15]||(g[15]=T=>d.maxColors=T)},[...g[63]||(g[63]=[p("option",{value:0},"不限颜色",-1),p("option",{value:10},"最多 10 色",-1),p("option",{value:20},"最多 20 色",-1),p("option",{value:30},"最多 30 色",-1),p("option",{value:40},"最多 40 色",-1),p("option",{value:60},"最多 60 色",-1)])],512),[[ur,d.maxColors,void 0,{number:!0}]])]),p("div",$h,[p("button",{type:"button",disabled:!f.value.length||!d.maxColors,onClick:X},[G($($l),{size:14}),g[65]||(g[65]=U(" 应用限色",-1))],8,Fh),p("button",{type:"button",disabled:!f.value.length,onClick:q},[G($(hi),{size:14}),g[66]||(g[66]=U(" 去除杂点",-1))],8,Gh)]),g[69]||(g[69]=p("span",{class:"bead-label"},"拼豆规格",-1)),p("div",jh,[p("button",{type:"button",class:ae({active:d.beadSize===5}),onClick:g[16]||(g[16]=T=>d.beadSize=5)},"5 mm",2),p("button",{type:"button",class:ae({active:d.beadSize===2.6}),onClick:g[17]||(g[17]=T=>d.beadSize=2.6)},"2.6 mm",2)]),p("label",zh,[g[67]||(g[67]=p("span",null,"品牌色板",-1)),be(p("select",{"onUpdate:modelValue":g[18]||(g[18]=T=>d.paletteId=T)},[(W(!0),re(Re,null,xt($(kn),T=>(W(),re("option",{key:T.id,value:T.id},V(T.name),9,Vh))),128))],512),[[ur,d.paletteId]])]),p("button",{class:"primary-button bead-generate",type:"button",disabled:u.value||!o.value,onClick:L},[G($(fs),{size:16}),U(" "+V(u.value?"生成中…":"应用并重新生成"),1)],8,Uh),g[70]||(g[70]=p("p",{class:"palette-note"},"品牌色号来自社区校准数据；屏幕颜色与实物、批次可能存在差异。",-1))]),p("section",Wh,[p("div",Kh,[p("div",qh,[p("button",{type:"button",class:ae({active:y.value==="brush"}),title:"画笔",onClick:g[19]||(g[19]=T=>y.value="brush")},[G($(mf),{size:17}),g[71]||(g[71]=p("span",null,"画笔",-1))],2),p("button",{type:"button",class:ae({active:y.value==="eraser"}),title:"橡皮擦",onClick:g[20]||(g[20]=T=>y.value="eraser")},[G($(N1),{size:17}),g[72]||(g[72]=p("span",null,"擦除",-1))],2),p("button",{type:"button",class:ae({active:y.value==="bucket"}),title:"填充连续区域",onClick:g[21]||(g[21]=T=>y.value="bucket")},[G($(hf),{size:17}),g[73]||(g[73]=p("span",null,"油漆桶",-1))],2),p("button",{type:"button",class:ae({active:y.value==="rectangle"}),title:"拖动填充矩形",onClick:g[22]||(g[22]=T=>y.value="rectangle")},[G($(Tf),{size:17}),g[74]||(g[74]=p("span",null,"矩形",-1))],2),p("button",{type:"button",class:ae({active:y.value==="select"}),title:"拖动选择区域，镜像操作将只作用于选区",onClick:g[23]||(g[23]=T=>y.value="select")},[G($(Mf),{size:17}),g[75]||(g[75]=p("span",null,"选区",-1))],2),p("button",{type:"button",class:ae({active:y.value==="replace"}),title:"点击一种现有颜色，将其全部替换成当前选中色",onClick:g[24]||(g[24]=T=>y.value="replace")},[G($(Pf),{size:17}),g[76]||(g[76]=p("span",null,"替换",-1))],2),p("button",{type:"button",class:ae({active:y.value==="picker"}),title:"吸色",onClick:g[25]||(g[25]=T=>y.value="picker")},[G($(ds),{size:17}),g[77]||(g[77]=p("span",null,"吸色",-1))],2)]),p("div",Jh,[p("button",{type:"button",disabled:!ie.value,title:`撤销（${j.value.length} 步历史）`,onClick:b},[G($(Df),{size:17})],8,Yh),p("button",{type:"button",disabled:!et.value,title:`重做（${le.value.length} 步历史）`,onClick:x},[G($(yf),{size:17})],8,Qh)]),p("label",Xh,[g[78]||(g[78]=U("缩放 ",-1)),be(p("input",{"onUpdate:modelValue":g[26]||(g[26]=T=>P.value=T),type:"range",min:"4",max:"25"},null,512),[[Be,P.value,void 0,{number:!0}]])]),p("button",{class:"fit-button",type:"button",title:"适应画布",onClick:m},[G($(of),{size:15}),g[79]||(g[79]=U(" 适应",-1))]),p("div",Zh,[p("button",{type:"button",class:ae({active:B.value==="pixel"}),onClick:g[27]||(g[27]=T=>B.value="pixel")},"色块",2),p("button",{type:"button",class:ae({active:B.value==="bead"}),onClick:g[28]||(g[28]=T=>B.value="bead")},"拼豆",2)]),p("button",{class:ae(["grid-toggle",{active:k.value}]),type:"button",onClick:g[29]||(g[29]=T=>k.value=!k.value)},[G($(fs),{size:16}),g[80]||(g[80]=U(" 网格",-1))],2)]),p("div",e2,[g[86]||(g[86]=p("span",null,"对称编辑",-1)),p("button",{type:"button",class:ae({active:w.horizontal}),onClick:g[30]||(g[30]=T=>w.horizontal=!w.horizontal)},[G($(Ll),{size:14}),g[81]||(g[81]=U(" 左右",-1))],2),p("button",{type:"button",class:ae({active:w.vertical}),onClick:g[31]||(g[31]=T=>w.vertical=!w.vertical)},[G($(Hl),{size:14}),g[82]||(g[82]=U(" 上下",-1))],2),g[87]||(g[87]=p("i",null,null,-1)),p("span",null,V(A.value?"镜像选区":"镜像全图"),1),p("button",{type:"button",onClick:g[32]||(g[32]=T=>F("horizontal"))},[G($(Ll),{size:14}),g[83]||(g[83]=U(" 左右",-1))]),p("button",{type:"button",onClick:g[33]||(g[33]=T=>F("vertical"))},[G($(Hl),{size:14}),g[84]||(g[84]=U(" 上下",-1))]),A.value?(W(),re("button",{key:0,type:"button",onClick:g[34]||(g[34]=T=>A.value=null)},"取消选区")):Ut("",!0),p("button",{class:ae(["code-toggle",{active:_.value}]),type:"button",title:"单格放大到 12px 以上时显示色号",onClick:g[35]||(g[35]=T=>_.value=!_.value)},[G($($l),{size:14}),g[85]||(g[85]=U(" 格内色号",-1))],2)]),p("div",{ref_key:"canvasViewport",ref:l,class:"bead-canvas-viewport"},[p("canvas",{ref_key:"beadCanvas",ref:s,class:"bead-canvas","aria-label":"拼豆编辑画布",onPointerdown:N,onPointermove:R,onPointerup:J,onPointercancel:J,onPointerleave:J},null,544)],512),p("div",t2,[p("span",null,V(h.columns)+" × "+V(h.rows)+" 颗",1),p("span",null,V(ce.value.width)+" × "+V(ce.value.height)+" cm",1),p("span",null,V(Se.value)+" 颗豆",1),p("span",null,"历史 "+V(j.value.length)+" / "+V(le.value.length),1),p("span",null,[p("i",{class:"selected-swatch",style:Lt({background:(se=rt.value)==null?void 0:se.hex})},null,4),U(V((ue=rt.value)==null?void 0:ue.name),1)])])]),p("aside",n2,[p("div",r2,[p("span",null,[G($(ds),{size:15}),g[88]||(g[88]=U(" 颜色与用量",-1))]),p("b",null,V(qe.value.length)+" 色",1)]),p("div",s2,[(W(!0),re(Re,null,xt(we.value.colors,(T,ne)=>(W(),re("button",{key:T.id,type:"button",class:ae({active:C.value===ne}),style:Lt({"--swatch":T.hex}),title:`${T.name} / ${T.code}`,onClick:Gn=>Ee(ne)},[...g[89]||(g[89]=[p("span",null,null,-1)])],14,l2))),128))]),p("div",o2,[p("div",{class:ae(["material-summary",{complete:Ne.value===0}])},[G($(Dl),{size:14}),p("span",null,V(Ne.value?`按库存还缺 ${Ne.value} 颗`:"库存数量充足"),1)],2),p("div",i2,[(W(!0),re(Re,null,xt(qe.value,T=>(W(),re("div",{key:T.id,class:"bead-usage-row",role:"button",tabindex:"0",onClick:ne=>Ee(T.index),onKeydown:Fu(ne=>Ee(T.index),["enter"])},[p("i",{style:Lt({background:T.hex})},null,4),p("span",null,[p("b",null,V(T.name),1),p("small",null,V(T.code),1)]),p("strong",u2,"需 "+V(T.count),1),p("label",{title:"输入已有库存",onClick:g[36]||(g[36]=pn(()=>{},["stop"]))},[g[90]||(g[90]=U("有 ",-1)),be(p("input",{"onUpdate:modelValue":ne=>I[T.id]=ne,type:"number",min:"0"},null,8,c2),[[Be,I[T.id],void 0,{number:!0}]])]),T.count>(Number(I[T.id])||0)?(W(),re("em",f2,"缺 "+V(T.count-(Number(I[T.id])||0)),1)):(W(),re("em",d2,"足够"))],40,a2))),128))]),Je.value.length?(W(),re("details",h2,[p("summary",null,[g[91]||(g[91]=U("颜色合并建议 ",-1)),p("b",null,V(Je.value.length),1)]),(W(!0),re(Re,null,xt(Je.value,T=>(W(),re("button",{key:`${T.source.id}-${T.target.id}`,type:"button",onClick:ne=>oe(T)},[p("i",{style:Lt({background:T.source.hex})},null,4),U(V(T.source.code)+" ",1),g[92]||(g[92]=p("span",null,"→",-1)),p("i",{style:Lt({background:T.target.hex})},null,4),U(V(T.target.code)+" ",1),p("small",null,"ΔE "+V(T.distance.toFixed(1)),1)],8,p2))),128))])):Ut("",!0)]),p("div",m2,[g[98]||(g[98]=p("span",{class:"bead-label"},"导出图纸",-1)),p("button",{type:"button",onClick:g[37]||(g[37]=T=>$(dh)(f.value,h.columns,h.rows,we.value.colors,`${ze()}.png`,{paletteName:we.value.name}))},[G($(I1),{size:16}),g[93]||(g[93]=U(" PNG 图片",-1))]),p("button",{type:"button",onClick:g[38]||(g[38]=T=>$(hh)(f.value,h.columns,h.rows,we.value.colors,`${ze()}.pdf`,{paletteName:we.value.name,boardSize:29}))},[G($(ci),{size:16}),g[94]||(g[94]=U(" PDF（29×29 分页）",-1))]),p("button",{type:"button",onClick:ke},[G($(Dl),{size:16}),g[95]||(g[95]=U(" 材料清单 CSV",-1))]),g[99]||(g[99]=p("span",{class:"bead-label project-label"},"工程文件",-1)),p("div",g2,[p("button",{type:"button",onClick:ge},[G($(wf),{size:15}),g[96]||(g[96]=U(" 保存",-1))]),p("button",{type:"button",onClick:g[39]||(g[39]=T=>{var ne;return(ne=n.value)==null?void 0:ne.click()})},[G($(zr),{size:15}),g[97]||(g[97]=U(" 打开",-1))])]),p("input",{ref_key:"projectInput",ref:n,type:"file",accept:".sakurabeads,application/json",hidden:"",onChange:fe},null,544)]),p("p",v2,[G($(di),{size:14}),g[100]||(g[100]=U(" 图片与编辑数据仅保留在当前页面",-1))])])])],64))])}}},b2={class:"translation-studio"},C2={class:"translation-languagebar"},P2=["value"],A2=["value"],w2=["disabled"],S2={class:"translation-workbench"},x2={class:"translation-pane source-pane"},k2={class:"translation-pane-heading"},_2={class:"translation-pane result-pane"},E2={class:"translation-pane-heading"},M2=["disabled"],R2=["value","placeholder"],T2={class:"translation-footer"},B2={__name:"TranslateTool",setup(e){const t=[{code:"zh-CN",name:"简体中文"},{code:"zh-TW",name:"繁体中文"},{code:"en",name:"英语"},{code:"ja",name:"日语"},{code:"ko",name:"韩语"},{code:"fr",name:"法语"},{code:"de",name:"德语"},{code:"es",name:"西班牙语"},{code:"ru",name:"俄语"},{code:"it",name:"意大利语"},{code:"pt",name:"葡萄牙语"},{code:"ar",name:"阿拉伯语"},{code:"nl",name:"荷兰语"},{code:"pl",name:"波兰语"}],n=Z("auto"),r=Z("zh-CN"),s=Z(""),l=Z(""),o=Z(""),a=Z(""),i=Z(!1),u=Z(""),c=Z("输入文本后按 Ctrl + Enter 翻译");let f=null;const h=ve(()=>Array.from(s.value).length),d=ve(()=>{var w;return((w=t.find(I=>I.code.toLowerCase()===o.value.toLowerCase()))==null?void 0:w.name)||o.value.toUpperCase()});function y(w){var I;return((I=t.find(j=>j.code===w))==null?void 0:I.name)||w}async function C(){const w=s.value.trim();if(!w||i.value)return;u.value="",c.value="",i.value=!0,f==null||f.abort(),f=new AbortController;const I=setTimeout(()=>f==null?void 0:f.abort(),15e3);try{const j=await fetch("/api/v1/translate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:w,source_lang:n.value,target_lang:r.value}),signal:f.signal}),le=await j.json().catch(()=>({}));if(!j.ok)throw j.status===413?new Error("内容过长，请缩短文本后分段翻译"):j.status===429?new Error("请求较频繁，请稍后再试"):new Error("翻译服务暂时不可用，请稍后重试");l.value=le.text||"",o.value=le.detected_source||"",a.value=le.provider||"",c.value=`${a.value} · ${h.value} 字符`}catch(j){u.value=j.name==="AbortError"?"翻译请求超时，请检查网络后重试":j.message}finally{clearTimeout(I),i.value=!1}}function P(){const w=n.value==="auto"?o.value||"en":n.value;if(n.value=r.value,r.value=t.some(I=>I.code===w)?w:"en",l.value){const I=s.value;s.value=l.value,l.value=I}o.value="",a.value=""}async function k(){try{s.value=await navigator.clipboard.readText(),c.value="已从剪贴板粘贴"}catch{u.value="浏览器没有授予剪贴板读取权限"}}async function _(){if(l.value)try{await navigator.clipboard.writeText(l.value),c.value="译文已复制"}catch{u.value="复制失败，请手动选择译文"}}function B(){f==null||f.abort(),s.value="",l.value="",o.value="",a.value="",u.value="",c.value="已清空"}function A(w){(w.ctrlKey||w.metaKey)&&w.key==="Enter"&&(w.preventDefault(),C())}return Ar(()=>f==null?void 0:f.abort()),(w,I)=>(W(),re("div",b2,[p("div",C2,[p("label",null,[I[4]||(I[4]=p("span",null,"源语言",-1)),be(p("select",{"onUpdate:modelValue":I[0]||(I[0]=j=>n.value=j)},[I[3]||(I[3]=p("option",{value:"auto"},"自动检测",-1)),(W(),re(Re,null,xt(t,j=>p("option",{key:j.code,value:j.code},V(j.name),9,P2)),64))],512),[[ur,n.value]])]),p("button",{class:"translation-swap",type:"button",title:"交换语言和文本",onClick:P},[G($(i1),{size:17})]),p("label",null,[I[5]||(I[5]=p("span",null,"目标语言",-1)),be(p("select",{"onUpdate:modelValue":I[1]||(I[1]=j=>r.value=j)},[(W(),re(Re,null,xt(t,j=>p("option",{key:j.code,value:j.code},V(j.name),9,A2)),64))],512),[[ur,r.value]])]),p("button",{class:"translation-primary",type:"button",disabled:i.value||!s.value.trim()||h.value>5e3,onClick:C},[i.value?(W(),He($(nf),{key:0,class:"spin",size:15})):(W(),He($(fi),{key:1,size:15})),U(" "+V(i.value?"翻译中…":"翻译"),1)],8,w2)]),p("div",S2,[p("section",x2,[p("div",k2,[p("span",null,V(n.value==="auto"?o.value?`检测为 ${d.value}`:"自动检测语言":y(n.value)),1),p("div",null,[p("button",{type:"button",title:"从剪贴板粘贴",onClick:k},[G($(y1),{size:14}),I[6]||(I[6]=U(" 粘贴",-1))]),p("button",{type:"button",title:"清空",onClick:B},[G($(Hf),{size:14})])])]),be(p("textarea",{"onUpdate:modelValue":I[2]||(I[2]=j=>s.value=j),maxlength:"5000","aria-label":"需要翻译的文本",placeholder:"输入或粘贴需要翻译的内容…",spellcheck:"true",onKeydown:A},null,544),[[Be,s.value]]),p("footer",null,[I[7]||(I[7]=p("span",null,"Ctrl + Enter",-1)),p("strong",{class:ae({over:h.value>5e3})},V(h.value)+" / 5000",3)])]),p("section",_2,[p("div",E2,[p("span",null,V(y(r.value)),1),p("button",{type:"button",disabled:!l.value,title:"复制译文",onClick:_},[G($(M1),{size:14}),I[8]||(I[8]=U(" 复制",-1))],8,M2)]),p("textarea",{value:l.value,readonly:"","aria-label":"翻译结果",placeholder:i.value?"正在等待翻译服务…":"译文会显示在这里"},null,8,R2),p("footer",null,[p("span",null,V(a.value||"等待翻译"),1),p("strong",null,V(Array.from(l.value).length)+" 字符",1)])])]),p("div",T2,[p("p",{class:ae({error:u.value})},V(u.value||c.value),3),p("span",null,[G($(di),{size:14}),U(" 文本经本站后端发送给 "+V(a.value||"第三方翻译服务")+"，不会写入数据库",1)])])]))}},N2={key:0,class:"workspace"},O2={class:"workspace-header"},I2={__name:"ToolView",setup(e){const t=ui(),n=ve(()=>Qf(t.params.slug)),s={json:Pd,base64:_d,timestamp:Bd,password:$d,translate:B2,markdown:ma(()=>md(()=>import("./MarkdownTool-D0DouI6f.js"),__vite__mapDeps([0,1]))),"pixel-beads":y2},l=ve(()=>s[t.params.slug]);return Dn(()=>{fetch("/api/v1/events/tool-opened",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:t.params.slug})}).catch(()=>{})}),(o,a)=>{const i=es("router-link");return n.value&&l.value?(W(),re("section",N2,[G(i,{class:"back-link",to:"/"},{default:yr(()=>[G($(u1),{size:16}),a[0]||(a[0]=U(" 返回工具索引",-1))]),_:1}),p("header",O2,[p("div",{class:ae(["workspace-icon",`tone-${n.value.color}`])},[(W(),He(rr(n.value.icon),{size:28}))],2),p("div",null,[p("p",null,V(n.value.index)+" / "+V(n.value.category),1),p("h1",null,V(n.value.name),1),p("span",null,V(n.value.summary),1)]),p("div",{class:ae(["local-badge",{online:n.value.slug==="translate"}])},[n.value.slug==="translate"?(W(),He($(_1),{key:0,size:14})):(W(),He($(sf),{key:1,size:14})),U(" "+V(n.value.slug==="translate"?"云端翻译":"本地处理"),1)],2)]),(W(),He(rr(l.value)))])):Ut("",!0)}}},H2=Qc({history:Mc(),routes:[{path:"/",component:dd},{path:"/tools/:slug",component:I2},{path:"/:pathMatch(.*)*",redirect:"/"}],scrollBehavior:()=>({top:0})});zu(Jf).use(H2).mount("#app");export{Y1 as I,Ar as a,W as b,Y as c,re as d,p as e,G as f,U as g,be as h,Lt as i,ve as j,tt as k,ae as n,Dn as o,Z as r,V as t,$ as u,Be as v,Jt as w};
