(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();/**
* @vue/shared v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function cs(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const be={},nn=[],mt=()=>{},Dl=()=>!1,ar=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ur=e=>e.startsWith("onUpdate:"),Ie=Object.assign,fs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},yi=Object.prototype.hasOwnProperty,pe=(e,t)=>yi.call(e,t),q=Array.isArray,$t=e=>In(e)==="[object Map]",xt=e=>In(e)==="[object Set]",Os=e=>In(e)==="[object Date]",ee=e=>typeof e=="function",xe=e=>typeof e=="string",vt=e=>typeof e=="symbol",ve=e=>e!==null&&typeof e=="object",Ll=e=>(ve(e)||ee(e))&&ee(e.then)&&ee(e.catch),$l=Object.prototype.toString,In=e=>$l.call(e),bi=e=>In(e).slice(8,-1),Fl=e=>In(e)==="[object Object]",ds=e=>xe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,yn=cs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cr=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Ci=/-\w/g,We=cr(e=>e.replace(Ci,t=>t.slice(1).toUpperCase())),Pi=/\B([A-Z])/g,Ft=cr(e=>e.replace(Pi,"-$1").toLowerCase()),fr=cr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Sr=cr(e=>e?`on${fr(e)}`:""),pt=(e,t)=>!Object.is(e,t),qn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Gl=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},dr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Is;const hr=()=>Is||(Is=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ht(e){if(q(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=xe(r)?xi(r):Ht(r);if(s)for(const l in s)t[l]=s[l]}return t}else if(xe(e)||ve(e))return e}const Ai=/;(?![^(]*\))/g,wi=/:([^]+)/,Si=/\/\*[^]*?\*\//g;function xi(e){const t={};return e.replace(Si,"").split(Ai).forEach(n=>{if(n){const r=n.split(wi);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function fe(e){let t="";if(xe(e))t=e;else if(q(e))for(let n=0;n<e.length;n++){const r=fe(e[n]);r&&(t+=r+" ")}else if(ve(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ki="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_i=cs(ki);function jl(e){return!!e||e===""}function Ei(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=kt(e[r],t[r]);return n}function Hs(e,t){if(e.size!==t.size)return!1;const n=Array.from(t),r=new Uint8Array(n.length);for(const s of e){let l=-1;for(let o=0;o<n.length;o++)if(!r[o]&&kt(s,n[o])){l=o;break}if(l<0)return!1;r[l]=1}return!0}function kt(e,t){if(e===t)return!0;let n=Os(e),r=Os(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=vt(e),r=vt(t),n||r)return e===t;if(n=q(e),r=q(t),n||r)return n&&r?Ei(e,t):!1;if(n=ve(e),r=ve(t),n||r){if(!n||!r)return!1;if(n=$t(e),r=$t(t),n||r||(n=xt(e),r=xt(t),n||r))return n&&r?Hs(e,t):!1;const s=Object.keys(e).length,l=Object.keys(t).length;if(s!==l)return!1;for(const o in e){const a=e.hasOwnProperty(o),i=t.hasOwnProperty(o);if(a&&!i||!a&&i||!kt(e[o],t[o]))return!1}}return String(e)===String(t)}function hs(e,t){return e.findIndex(n=>kt(n,t))}const Vl=e=>!!(e&&e.__v_isRef===!0),U=e=>xe(e)?e:e==null?"":q(e)||ve(e)&&(e.toString===$l||!ee(e.toString))?Vl(e)?U(e.value):JSON.stringify(e,zl,2):String(e),zl=(e,t)=>Vl(t)?zl(e,t.value):$t(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],l)=>(n[xr(r,l)+" =>"]=s,n),{})}:xt(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>xr(n))}:vt(t)?xr(t):ve(t)&&!q(t)&&!Fl(t)?String(t):t,xr=(e,t="")=>{var n;return vt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oe;class Ri{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Oe&&(Oe.active?(this.parent=Oe,this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const r=this.scopes.slice();for(t=0,n=r.length;t<n;t++)r[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const s=this.scopes.slice();for(t=0,n=s.length;t<n;t++)s[t].resume()}const r=this.effects.slice();for(t=0,n=r.length;t<n;t++)r[t].resume()}}run(t){if(this._active){const n=Oe;try{return Oe=this,t()}finally{Oe=n}}}on(){++this._on===1&&(this.prevScope=Oe,Oe=this)}off(){if(this._on>0&&--this._on===0){if(Oe===this)Oe=this.prevScope;else{let t=Oe;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Mi(){return Oe}let Ce;const kr=new WeakSet;class Ul{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Oe&&(Oe.active?Oe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,kr.has(this)&&(kr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ql(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ds(this),Kl(this);const t=Ce,n=st;Ce=this,st=!0;try{return this.fn()}finally{Jl(this),Ce=t,st=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ms(t);this.deps=this.depsTail=void 0,Ds(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?kr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){zr(this)&&this.run()}get dirty(){return zr(this)}}let Wl=0,bn,Cn;function ql(e,t=!1){if(e.flags|=8,t){e.next=Cn,Cn=e;return}e.next=bn,bn=e}function ps(){Wl++}function gs(){if(--Wl>0)return;if(Cn){let t=Cn;for(Cn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;bn;){let t=bn;for(bn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Kl(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Jl(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ms(r),Ti(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function zr(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Yl(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Yl(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===kn)||(e.globalVersion=kn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!zr(e))))return;e.flags|=2;const t=e.dep,n=Ce,r=st;Ce=e,st=!0;try{Kl(e);const s=e.fn(e._value);(t.version===0||pt(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{Ce=n,st=r,Jl(e),e.flags&=-3}}function ms(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let l=n.computed.deps;l;l=l.nextDep)ms(l,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ti(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let st=!0;const Ql=[];function _t(){Ql.push(st),st=!1}function Et(){const e=Ql.pop();st=e===void 0?!0:e}function Ds(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Ce;Ce=void 0;try{t()}finally{Ce=n}}}let kn=0;class Bi{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class vs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Ce||!st||Ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ce)n=this.activeLink=new Bi(Ce,this),Ce.deps?(n.prevDep=Ce.depsTail,Ce.depsTail.nextDep=n,Ce.depsTail=n):Ce.deps=Ce.depsTail=n,Xl(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ce.depsTail,n.nextDep=void 0,Ce.depsTail.nextDep=n,Ce.depsTail=n,Ce.deps===n&&(Ce.deps=r)}return n}trigger(t){this.version++,kn++,this.notify(t)}notify(t){ps();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{gs()}}}function Xl(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Xl(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ur=new WeakMap,qt=Symbol(""),Wr=Symbol(""),_n=Symbol("");function De(e,t,n){if(st&&Ce){let r=Ur.get(e);r||Ur.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new vs),s.map=r,s.key=n),s.track()}}function wt(e,t,n,r,s,l){const o=Ur.get(e);if(!o){kn++;return}const a=i=>{i&&i.trigger()};if(ps(),t==="clear")o.forEach(a);else{const i=q(e),u=i&&ds(n);if(i&&n==="length"){const c=Number(r);o.forEach((f,h)=>{(h==="length"||h===_n||!vt(h)&&h>=c)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(_n)),t){case"add":i?u&&a(o.get("length")):(a(o.get(qt)),$t(e)&&a(o.get(Wr)));break;case"delete":i||(a(o.get(qt)),$t(e)&&a(o.get(Wr)));break;case"set":$t(e)&&a(o.get(qt));break}}gs()}function Xt(e){const t=he(e);return t===e?t:(De(t,"iterate",_n),nt(e)?t:t.map(ot))}function pr(e){return De(e=he(e),"iterate",_n),e}function dt(e,t){return Rt(e)?ln(Kt(e)?ot(t):t):ot(t)}const Ni={__proto__:null,[Symbol.iterator](){return _r(this,Symbol.iterator,e=>dt(this,e))},concat(...e){return Xt(this).concat(...e.map(t=>q(t)?Xt(t):t))},entries(){return _r(this,"entries",e=>(e[1]=dt(this,e[1]),e))},every(e,t){return bt(this,"every",e,t,void 0,arguments)},filter(e,t){return bt(this,"filter",e,t,n=>n.map(r=>dt(this,r)),arguments)},find(e,t){return bt(this,"find",e,t,n=>dt(this,n),arguments)},findIndex(e,t){return bt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return bt(this,"findLast",e,t,n=>dt(this,n),arguments)},findLastIndex(e,t){return bt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return bt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Er(this,"includes",e)},indexOf(...e){return Er(this,"indexOf",e)},join(e){return Xt(this).join(e)},lastIndexOf(...e){return Er(this,"lastIndexOf",e)},map(e,t){return bt(this,"map",e,t,void 0,arguments)},pop(){return fn(this,"pop")},push(...e){return fn(this,"push",e)},reduce(e,...t){return Ls(this,"reduce",e,t)},reduceRight(e,...t){return Ls(this,"reduceRight",e,t)},shift(){return fn(this,"shift")},some(e,t){return bt(this,"some",e,t,void 0,arguments)},splice(...e){return fn(this,"splice",e)},toReversed(){return Xt(this).toReversed()},toSorted(e){return Xt(this).toSorted(e)},toSpliced(...e){return Xt(this).toSpliced(...e)},unshift(...e){return fn(this,"unshift",e)},values(){return _r(this,"values",e=>dt(this,e))}};function _r(e,t,n){const r=pr(e),s=r[t]();return r!==e&&!nt(e)&&(s._next=s.next,s.next=()=>{const l=s._next();return l.done||(l.value=n(l.value)),l}),s}const Oi=Array.prototype;function bt(e,t,n,r,s,l){const o=pr(e),a=o!==e&&!nt(e),i=o[t];if(i!==Oi[t]){const f=i.apply(e,l);return a?ot(f):f}let u=n;o!==e&&(a?u=function(f,h){return n.call(this,dt(e,f),h,e)}:n.length>2&&(u=function(f,h){return n.call(this,f,h,e)}));const c=i.call(o,u,r);return a&&s?s(c):c}function Ls(e,t,n,r){const s=pr(e),l=s!==e&&!nt(e);let o=n,a=!1;s!==e&&(l?(a=r.length===0,o=function(u,c,f){return a&&(a=!1,u=dt(e,u)),n.call(this,u,dt(e,c),f,e)}):n.length>3&&(o=function(u,c,f){return n.call(this,u,c,f,e)}));const i=s[t](o,...r);return a?dt(e,i):i}function Er(e,t,n){const r=he(e);De(r,"iterate",_n);const s=r[t](...n);return(s===-1||s===!1)&&Cs(n[0])?(n[0]=he(n[0]),r[t](...n)):s}function fn(e,t,n=[]){_t(),ps();const r=he(e)[t].apply(e,n);return gs(),Et(),r}const Ii=cs("__proto__,__v_isRef,__isVue"),Zl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(vt));function Hi(e){vt(e)||(e=String(e));const t=he(this);return De(t,"has",e),t.hasOwnProperty(e)}class eo{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,l=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return l;if(n==="__v_raw")return r===(s?l?Wi:so:l?ro:no).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=q(t);if(!s){let i;if(o&&(i=Ni[n]))return i;if(n==="hasOwnProperty")return Hi}const a=Reflect.get(t,n,$e(t)?t:r);if((vt(n)?Zl.has(n):Ii(n))||(s||De(t,"get",n),l))return a;if($e(a)){const i=o&&ds(n)?a:a.value;return s&&ve(i)?Kr(i):i}return ve(a)?s?Kr(a):Lt(a):a}}class to extends eo{constructor(t=!1){super(!1,t)}set(t,n,r,s){let l=t[n];const o=q(t)&&ds(n);if(!this._isShallow){const u=Rt(l);if(!nt(r)&&!Rt(r)&&(l=he(l),r=he(r)),!o&&$e(l)&&!$e(r))return u||(l.value=r),!0}const a=o?Number(n)<t.length:pe(t,n),i=Reflect.set(t,n,r,$e(t)?t:s);return t===he(s)&&i&&(a?pt(r,l)&&wt(t,"set",n,r):wt(t,"add",n,r)),i}deleteProperty(t,n){const r=pe(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&wt(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!vt(n)||!Zl.has(n))&&De(t,"has",n),r}ownKeys(t){return De(t,"iterate",q(t)?"length":qt),Reflect.ownKeys(t)}}class Di extends eo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Li=new to,$i=new Di,Fi=new to(!0);const qr=e=>e,Gn=e=>Reflect.getPrototypeOf(e);function Gi(e,t,n){return function(...r){const s=this.__v_raw,l=he(s),o=$t(l),a=e==="entries"||e===Symbol.iterator&&o,i=e==="keys"&&o,u=s[e](...r),c=n?qr:t?ln:ot;return!t&&De(l,"iterate",i?Wr:qt),Ie(Object.create(u),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:a?[c(f[0]),c(f[1])]:c(f),done:h}}})}}function jn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ji(e,t){const n={get(s){const l=this.__v_raw,o=he(l),a=he(s);e||(pt(s,a)&&De(o,"get",s),De(o,"get",a));const{has:i}=Gn(o),u=t?qr:e?ln:ot;if(i.call(o,s))return u(l.get(s));if(i.call(o,a))return u(l.get(a));l!==o&&l.get(s)},get size(){const s=this.__v_raw;return!e&&De(he(s),"iterate",qt),s.size},has(s){const l=this.__v_raw,o=he(l),a=he(s);return e||(pt(s,a)&&De(o,"has",s),De(o,"has",a)),s===a?l.has(s):l.has(s)||l.has(a)},forEach(s,l){const o=this,a=o.__v_raw,i=he(a),u=t?qr:e?ln:ot;return!e&&De(i,"iterate",qt),a.forEach((c,f)=>s.call(l,u(c),u(f),o))}};return Ie(n,e?{add:jn("add"),set:jn("set"),delete:jn("delete"),clear:jn("clear")}:{add(s){const l=he(this),o=Gn(l),a=he(s),i=!t&&!nt(s)&&!Rt(s)?a:s;return o.has.call(l,i)||pt(s,i)&&o.has.call(l,s)||pt(a,i)&&o.has.call(l,a)||(l.add(i),wt(l,"add",i,i)),this},set(s,l){!t&&!nt(l)&&!Rt(l)&&(l=he(l));const o=he(this),{has:a,get:i}=Gn(o);let u=a.call(o,s);u||(s=he(s),u=a.call(o,s));const c=i.call(o,s);return o.set(s,l),u?pt(l,c)&&wt(o,"set",s,l):wt(o,"add",s,l),this},delete(s){const l=he(this),{has:o,get:a}=Gn(l);let i=o.call(l,s);i||(s=he(s),i=o.call(l,s)),a&&a.call(l,s);const u=l.delete(s);return i&&wt(l,"delete",s,void 0),u},clear(){const s=he(this),l=s.size!==0,o=s.clear();return l&&wt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Gi(s,e,t)}),n}function ys(e,t){const n=ji(e,t);return(r,s,l)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(pe(n,s)&&s in r?n:r,s,l)}const Vi={get:ys(!1,!1)},zi={get:ys(!1,!0)},Ui={get:ys(!0,!1)};const no=new WeakMap,ro=new WeakMap,so=new WeakMap,Wi=new WeakMap;function qi(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Lt(e){return Rt(e)?e:bs(e,!1,Li,Vi,no)}function lo(e){return bs(e,!1,Fi,zi,ro)}function Kr(e){return bs(e,!0,$i,Ui,so)}function bs(e,t,n,r,s){if(!ve(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const l=s.get(e);if(l)return l;const o=qi(bi(e));if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function Kt(e){return Rt(e)?Kt(e.__v_raw):!!(e&&e.__v_isReactive)}function Rt(e){return!!(e&&e.__v_isReadonly)}function nt(e){return!!(e&&e.__v_isShallow)}function Cs(e){return e?!!e.__v_raw:!1}function he(e){const t=e&&e.__v_raw;return t?he(t):e}function Ki(e){return!pe(e,"__v_skip")&&Object.isExtensible(e)&&Gl(e,"__v_skip",!0),e}const ot=e=>ve(e)?Lt(e):e,ln=e=>ve(e)?Kr(e):e;function $e(e){return e?e.__v_isRef===!0:!1}function se(e){return oo(e,!1)}function Jr(e){return oo(e,!0)}function oo(e,t){return $e(e)?e:new Ji(e,t)}class Ji{constructor(t,n){this.dep=new vs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:he(t),this._value=n?t:ot(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||nt(t)||Rt(t);t=r?t:he(t),pt(t,n)&&(this._rawValue=t,this._value=r?t:ot(t),this.dep.trigger())}}function F(e){return $e(e)?e.value:e}const Yi={get:(e,t,n)=>t==="__v_raw"?e:F(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return $e(s)&&!$e(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function io(e){return Kt(e)?e:new Proxy(e,Yi)}class Qi{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new vs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=kn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ce!==this)return ql(this,!0),!0}get value(){const t=this.dep.track();return Yl(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Xi(e,t,n=!1){let r,s;return ee(e)?r=e:(r=e.get,s=e.set),new Qi(r,s,n)}const Vn={},Qn=new WeakMap;let Vt;function Zi(e,t=!1,n=Vt){if(n){let r=Qn.get(n);r||Qn.set(n,r=[]),r.push(e)}}function ea(e,t,n=be){const{immediate:r,deep:s,once:l,scheduler:o,augmentJob:a,call:i}=n,u=S=>s?S:nt(S)||s===!1||s===0?St(S,1):St(S);let c,f,h,d,b=!1,C=!1;if($e(e)?(f=()=>e.value,b=nt(e)):Kt(e)?(f=()=>u(e),b=!0):q(e)?(C=!0,b=e.some(S=>Kt(S)||nt(S)),f=()=>e.map(S=>{if($e(S))return S.value;if(Kt(S))return u(S);if(ee(S))return i?i(S,2):S()})):ee(e)?t?f=i?()=>i(e,2):e:f=()=>{if(h){_t();try{h()}finally{Et()}}const S=Vt;Vt=c;try{return i?i(e,3,[d]):e(d)}finally{Vt=S}}:f=mt,t&&s){const S=f,B=s===!0?1/0:s;f=()=>St(S(),B)}const P=Mi(),E=()=>{c.stop(),P&&P.active&&fs(P.effects,c)};if(l&&t){const S=t;t=(...B)=>{const K=S(...B);return E(),K}}let _=C?new Array(e.length).fill(Vn):Vn;const T=S=>{if(!(!(c.flags&1)||!c.dirty&&!S))if(t){const B=c.run();if(S||s||b||(C?B.some((K,Q)=>pt(K,_[Q])):pt(B,_))){h&&h();const K=Vt;Vt=c;try{const Q=[B,_===Vn?void 0:C&&_[0]===Vn?[]:_,d];_=B,i?i(t,3,Q):t(...Q)}finally{Vt=K}}}else c.run()};return a&&a(T),c=new Ul(f),c.scheduler=o?()=>o(T,!1):T,d=S=>Zi(S,!1,c),h=c.onStop=()=>{const S=Qn.get(c);if(S){if(i)i(S,4);else for(const B of S)B();Qn.delete(c)}},t?r?T(!0):_=c.run():o?o(T.bind(null,!0),!0):c.run(),E.pause=c.pause.bind(c),E.resume=c.resume.bind(c),E.stop=E,E}function St(e,t=1/0,n){if(t<=0||!ve(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,$e(e))St(e.value,t,n);else if(q(e))for(let r=0;r<e.length;r++)St(e[r],t,n);else if(xt(e)||$t(e))e.forEach(r=>{St(r,t,n)});else if(Fl(e)){for(const r in e)St(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&St(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hn(e,t,n,r){try{return r?e(...r):e()}catch(s){gr(s,t,n)}}function it(e,t,n,r){if(ee(e)){const s=Hn(e,t,n,r);return s&&Ll(s)&&s.catch(l=>{gr(l,t,n)}),s}if(q(e)){const s=[];for(let l=0;l<e.length;l++)s.push(it(e[l],t,n,r));return s}}function gr(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||be;if(t){let a=t.parent;const i=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,i,u)===!1)return}a=a.parent}if(l){_t(),Hn(l,null,10,[e,i,u]),Et();return}}ta(e,n,s,r,o)}function ta(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const Ue=[];let ft=-1;const rn=[];let Ot=null,en=0;const ao=Promise.resolve();let Xn=null;function tt(e){const t=Xn||ao;return e?t.then(this?e.bind(this):e):t}function na(e){let t=ft+1,n=Ue.length;for(;t<n;){const r=t+n>>>1,s=Ue[r],l=En(s);l<e||l===e&&s.flags&2?t=r+1:n=r}return t}function Ps(e){if(!(e.flags&1)){const t=En(e),n=Ue[Ue.length-1];!n||!(e.flags&2)&&t>=En(n)?Ue.push(e):Ue.splice(na(t),0,e),e.flags|=1,uo()}}function uo(){Xn||(Xn=ao.then(fo))}function ra(e){if(!q(e))Ot&&e.id===-1?Ot.splice(en+1,0,e):e.flags&1||(rn.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)rn.push(e[t]);uo()}function $s(e,t,n=ft+1){for(;n<Ue.length;n++){const r=Ue[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Ue.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function co(e){if(rn.length){const t=[...new Set(rn)].sort((n,r)=>En(n)-En(r));if(rn.length=0,Ot){for(let n=0;n<t.length;n++)Ot.push(t[n]);return}for(Ot=t,en=0;en<Ot.length;en++){const n=Ot[en];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ot=null,en=0}}const En=e=>e.id==null?e.flags&2?-1:1/0:e.id;function fo(e){try{for(ft=0;ft<Ue.length;ft++){const t=Ue[ft];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Hn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ft<Ue.length;ft++){const t=Ue[ft];t&&(t.flags&=-2)}ft=-1,Ue.length=0,co(),Xn=null,(Ue.length||rn.length)&&fo()}}let Qe=null,ho=null;function Zn(e){const t=Qe;return Qe=e,ho=e&&e.type.__scopeId||null,t}function mr(e,t=Qe,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&rr(-1);const l=Zn(t),o=Yt.length;let a;try{a=e(...s)}finally{for(let i=Yt.length;i>o;i--)Go();Zn(l),r._d&&rr(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Se(e,t){if(Qe===null)return e;const n=Pr(Qe),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[l,o,a,i=be]=t[s];l&&(ee(l)&&(l={mounted:l,updated:l}),l.deep&&St(o),r.push({dir:l,instance:n,value:o,oldValue:void 0,arg:a,modifiers:i}))}return e}function Gt(e,t,n,r){const s=e.dirs,l=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];l&&(a.oldValue=l[o].value);let i=a.dir[r];i&&(_t(),it(i,n,8,[e.el,a,e,t]),Et())}}function Kn(e,t){if(Le){let n=Le.provides;const r=Le.parent&&Le.parent.provides;r===n&&(n=Le.provides=Object.create(r)),n[e]=t}}function lt(e,t,n=!1){const r=Xa();if(r||sn){let s=sn?sn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&ee(t)?t.call(r&&r.proxy):t}}const sa=Symbol.for("v-scx"),la=()=>lt(sa);function Jt(e,t,n){return po(e,t,n)}function po(e,t,n=be){const{immediate:r,deep:s,flush:l,once:o}=n,a=Ie({},n),i=t&&r||!t&&l!=="post";let u;if(Tn){if(l==="sync"){const d=la();u=d.__watcherHandles||(d.__watcherHandles=[])}else if(!i){const d=()=>{};return d.stop=mt,d.resume=mt,d.pause=mt,d}}const c=Le;a.call=(d,b,C)=>it(d,c,b,C);let f=!1;l==="post"?a.scheduler=d=>{Je(d,c&&c.suspense)}:l!=="sync"&&(f=!0,a.scheduler=(d,b)=>{b?d():Ps(d)}),a.augmentJob=d=>{t&&(d.flags|=4),f&&(d.flags|=2,c&&(d.id=c.uid,d.i=c))};const h=ea(e,t,a);return Tn&&(u?u.push(h):i&&h()),h}function oa(e,t,n){const r=this.proxy,s=xe(e)?e.includes(".")?go(r,e):()=>r[e]:e.bind(r,r);let l;ee(t)?l=t:(l=t.handler,n=t);const o=Ln(this),a=po(s,l.bind(r),n);return o(),a}function go(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const ia=Symbol("_vte"),vr=e=>e.__isTeleport,Rr=Symbol("_leaveCb");function aa(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Mt){t=n;break}}return t}function mo(e){if(!ws(e))return vr(e.type)&&e.children?aa(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&ee(n.default))return n.default()}}function As(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;As(vr(n.type)&&mo(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function vo(e,t){return ee(e)?Ie({name:e.name},t,{setup:e}):e}function yo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Fs(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const er=new WeakMap;function Pn(e,t,n,r,s=!1){if(q(e)){e.forEach((C,P)=>Pn(C,t&&(q(t)?t[P]:t),n,r,s));return}if(An(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Pn(e,t,n,r.component.subTree);return}const l=r.shapeFlag&4?Pr(r.component):r.el,o=s?null:l,{i:a,r:i}=e,u=t&&t.r,c=a.refs===be?a.refs={}:a.refs,f=a.setupState,h=he(f),d=f===be?Dl:C=>Fs(c,C)?!1:pe(h,C),b=(C,P)=>!(P&&Fs(c,P));if(u!=null&&u!==i){if(Gs(t),xe(u))c[u]=null,d(u)&&(f[u]=null);else if($e(u)){const C=t;b(u,C.k)&&(u.value=null),C.k&&(c[C.k]=null)}}if(ee(i))Hn(i,a,12,[o,c]);else{const C=xe(i),P=$e(i);if(C||P){const E=()=>{if(e.f){const _=C?d(i)?f[i]:c[i]:b()||!e.k?i.value:c[e.k];if(s)q(_)&&fs(_,l);else if(q(_))_.includes(l)||_.push(l);else if(C)c[i]=[l],d(i)&&(f[i]=c[i]);else{const T=[l];b(i,e.k)&&(i.value=T),e.k&&(c[e.k]=T)}}else C?(c[i]=o,d(i)&&(f[i]=o)):P&&(b(i,e.k)&&(i.value=o),e.k&&(c[e.k]=o))};if(o){const _=()=>{E(),er.delete(e)};_.id=-1,er.set(e,_),Je(_,n)}else Gs(e),E()}}}function Gs(e){const t=er.get(e);t&&(t.flags|=8,er.delete(e))}hr().requestIdleCallback;hr().cancelIdleCallback;const An=e=>!!e.type.__asyncLoader,ws=e=>e.type.__isKeepAlive;function ua(e,t){bo(e,"a",t)}function ca(e,t){bo(e,"da",t)}function bo(e,t,n=Le){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(yr(t,r,n),n){let s=n.parent;for(;s&&s.parent;)ws(s.parent.vnode)&&fa(r,t,n,s),s=s.parent}}function fa(e,t,n,r){const s=yr(t,e,r,!0);Co(()=>{fs(r[t],s)},n)}function yr(e,t,n=Le,r=!1){if(n){const s=n[e]||(n[e]=[]),l=t.__weh||(t.__weh=(...o)=>{_t();const a=Ln(n),i=it(t,n,e,o);return a(),Et(),i});return r?s.unshift(l):s.push(l),l}}const Tt=e=>(t,n=Le)=>{(!Tn||e==="sp")&&yr(e,(...r)=>t(...r),n)},da=Tt("bm"),Dn=Tt("m"),ha=Tt("bu"),pa=Tt("u"),Ss=Tt("bum"),Co=Tt("um"),ga=Tt("sp"),ma=Tt("rtg"),va=Tt("rtc");function ya(e,t=Le){yr("ec",e,t)}const Po="components";function Yr(e,t){return wo(Po,e,!0,t)||e}const Ao=Symbol.for("v-ndc");function tr(e){return xe(e)?wo(Po,e,!1)||e:e||Ao}function wo(e,t,n=!0,r=!1){const s=Qe||Le;if(s){const l=s.type;{const a=ru(l,!1);if(a&&(a===t||a===We(t)||a===fr(We(t))))return l}const o=js(s[e]||l[e],t)||js(s.appContext[e],t);return!o&&r?l:o}}function js(e,t){return e&&(e[t]||e[We(t)]||e[fr(We(t))])}function zt(e,t,n,r){let s;const l=n,o=q(e);if(o||xe(e)){const a=o&&Kt(e);let i=!1,u=!1;a&&(i=!nt(e),u=Rt(e),e=pr(e)),s=new Array(e.length);for(let c=0,f=e.length;c<f;c++)s[c]=t(i?u?ln(ot(e[c])):ot(e[c]):e[c],c,void 0,l)}else if(typeof e=="number"){s=new Array(e);for(let a=0;a<e;a++)s[a]=t(a+1,a,void 0,l)}else if(ve(e))if(e[Symbol.iterator])s=Array.from(e,(a,i)=>t(a,i,void 0,l));else{const a=Object.keys(e);s=new Array(a.length);for(let i=0,u=a.length;i<u;i++){const c=a[i];s[i]=t(e[c],c,i,l)}}else s=[];return s}const Qr=e=>e?zo(e)?Pr(e):Qr(e.parent):null,wn=Ie(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Qr(e.parent),$root:e=>Qr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>xo(e),$forceUpdate:e=>e.f||(e.f=()=>{Ps(e.update)}),$nextTick:e=>e.n||(e.n=tt.bind(e.proxy)),$watch:e=>oa.bind(e)}),Mr=(e,t)=>e!==be&&!e.__isScriptSetup&&pe(e,t),ba={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:l,accessCache:o,type:a,appContext:i}=e;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return l[t]}else{if(Mr(r,t))return o[t]=1,r[t];if(s!==be&&pe(s,t))return o[t]=2,s[t];if(pe(l,t))return o[t]=3,l[t];if(n!==be&&pe(n,t))return o[t]=4,n[t];Xr&&(o[t]=0)}}const u=wn[t];let c,f;if(u)return t==="$attrs"&&De(e.attrs,"get",""),u(e);if((c=a.__cssModules)&&(c=c[t]))return c;if(n!==be&&pe(n,t))return o[t]=4,n[t];if(f=i.config.globalProperties,pe(f,t))return f[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:l}=e;return Mr(s,t)?(s[t]=n,!0):r!==be&&pe(r,t)?(r[t]=n,!0):pe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,props:l,type:o}},a){let i;return!!(n[a]||e!==be&&a[0]!=="$"&&pe(e,a)||Mr(t,a)||pe(l,a)||pe(r,a)||pe(wn,a)||pe(s.config.globalProperties,a)||(i=o.__cssModules)&&i[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:pe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Vs(e){return q(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Xr=!0;function Ca(e){const t=xo(e),n=e.proxy,r=e.ctx;Xr=!1,t.beforeCreate&&zs(t.beforeCreate,e,"bc");const{data:s,computed:l,methods:o,watch:a,provide:i,inject:u,created:c,beforeMount:f,mounted:h,beforeUpdate:d,updated:b,activated:C,deactivated:P,beforeDestroy:E,beforeUnmount:_,destroyed:T,unmounted:S,render:B,renderTracked:K,renderTriggered:Q,errorCaptured:ie,serverPrefetch:Pe,expose:ge,inheritAttrs:Re,components:He,directives:Fe,filters:Ae}=t;if(u&&Pa(u,r,null),o)for(const ue in o){const oe=o[ue];ee(oe)&&(r[ue]=oe.bind(n))}if(s){const ue=s.call(n,n);ve(ue)&&(e.data=Lt(ue))}if(Xr=!0,l)for(const ue in l){const oe=l[ue],et=ee(oe)?oe.bind(n,n):ee(oe.get)?oe.get.bind(n,n):mt,rt=!ee(oe)&&ee(oe.set)?oe.set.bind(n):mt,Ke=ye({get:et,set:rt});Object.defineProperty(r,ue,{enumerable:!0,configurable:!0,get:()=>Ke.value,set:Te=>Ke.value=Te})}if(a)for(const ue in a)So(a[ue],r,n,ue);if(i){const ue=ee(i)?i.call(n):i;Reflect.ownKeys(ue).forEach(oe=>{Kn(oe,ue[oe])})}c&&zs(c,e,"c");function we(ue,oe){q(oe)?oe.forEach(et=>ue(et.bind(n))):oe&&ue(oe.bind(n))}if(we(da,f),we(Dn,h),we(ha,d),we(pa,b),we(ua,C),we(ca,P),we(ya,ie),we(va,K),we(ma,Q),we(Ss,_),we(Co,S),we(ga,Pe),q(ge))if(ge.length){const ue=e.exposed||(e.exposed={});ge.forEach(oe=>{Object.defineProperty(ue,oe,{get:()=>n[oe],set:et=>n[oe]=et,enumerable:!0})})}else e.exposed||(e.exposed={});B&&e.render===mt&&(e.render=B),Re!=null&&(e.inheritAttrs=Re),He&&(e.components=He),Fe&&(e.directives=Fe),Pe&&yo(e)}function Pa(e,t,n=mt){q(e)&&(e=Zr(e));for(const r in e){const s=e[r];let l;ve(s)?"default"in s?l=lt(s.from||r,s.default,!0):l=lt(s.from||r):l=lt(s),$e(l)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>l.value,set:o=>l.value=o}):t[r]=l}}function zs(e,t,n){it(q(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function So(e,t,n,r){let s=r.includes(".")?go(n,r):()=>n[r];if(xe(e)){const l=t[e];ee(l)&&Jt(s,l)}else if(ee(e))Jt(s,e.bind(n));else if(ve(e))if(q(e))e.forEach(l=>So(l,t,n,r));else{const l=ee(e.handler)?e.handler.bind(n):t[e.handler];ee(l)&&Jt(s,l,e)}}function xo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:l,config:{optionMergeStrategies:o}}=e.appContext,a=l.get(t);let i;return a?i=a:!s.length&&!n&&!r?i=t:(i={},s.length&&s.forEach(u=>nr(i,u,o,!0)),nr(i,t,o)),ve(t)&&l.set(t,i),i}function nr(e,t,n,r=!1){const{mixins:s,extends:l}=t;l&&nr(e,l,n,!0),s&&s.forEach(o=>nr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=Aa[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Aa={data:Us,props:Ws,emits:Ws,methods:mn,computed:mn,beforeCreate:Ve,created:Ve,beforeMount:Ve,mounted:Ve,beforeUpdate:Ve,updated:Ve,beforeDestroy:Ve,beforeUnmount:Ve,destroyed:Ve,unmounted:Ve,activated:Ve,deactivated:Ve,errorCaptured:Ve,serverPrefetch:Ve,components:mn,directives:mn,watch:Sa,provide:Us,inject:wa};function Us(e,t){return t?e?function(){return Ie(ee(e)?e.call(this,this):e,ee(t)?t.call(this,this):t)}:t:e}function wa(e,t){return mn(Zr(e),Zr(t))}function Zr(e){if(q(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ve(e,t){return e?[...new Set([].concat(e,t))]:t}function mn(e,t){return e?Ie(Object.create(null),e,t):t}function Ws(e,t){return e?q(e)&&q(t)?[...new Set([...e,...t])]:Ie(Object.create(null),Vs(e),Vs(t??{})):t}function Sa(e,t){if(!e)return t;if(!t)return e;const n=Ie(Object.create(null),e);for(const r in t)n[r]=Ve(e[r],t[r]);return n}function ko(){return{app:null,config:{isNativeTag:Dl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xa=0;function ka(e,t){return function(r,s=null){ee(r)||(r=Ie({},r)),s!=null&&!ve(s)&&(s=null);const l=ko(),o=new WeakSet,a=[];let i=!1;const u=l.app={_uid:xa++,_component:r,_props:s,_container:null,_context:l,_instance:null,version:lu,get config(){return l.config},set config(c){},use(c,...f){return o.has(c)||(c&&ee(c.install)?(o.add(c),c.install(u,...f)):ee(c)&&(o.add(c),c(u,...f))),u},mixin(c){return l.mixins.includes(c)||l.mixins.push(c),u},component(c,f){return f?(l.components[c]=f,u):l.components[c]},directive(c,f){return f?(l.directives[c]=f,u):l.directives[c]},mount(c,f,h){if(!i){const d=u._ceVNode||G(r,s);return d.appContext=l,h===!0?h="svg":h===!1&&(h=void 0),e(d,c,h),i=!0,u._container=c,c.__vue_app__=u,Pr(d.component)}},onUnmount(c){a.push(c)},unmount(){i&&(it(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,f){return l.provides[c]=f,u},runWithContext(c){const f=sn;sn=u;try{return c()}finally{sn=f}}};return u}}let sn=null;const _a=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${We(t)}Modifiers`]||e[`${Ft(t)}Modifiers`];function Ea(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||be;let s=n;const l=t.startsWith("update:"),o=l&&_a(r,t.slice(7));o&&(o.trim&&(s=n.map(c=>xe(c)?c.trim():c)),o.number&&(s=s.map(dr)));let a,i=r[a=Sr(t)]||r[a=Sr(We(t))];!i&&l&&(i=r[a=Sr(Ft(t))]),i&&it(i,e,6,s);const u=r[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,it(u,e,6,s)}}const Ra=new WeakMap;function _o(e,t,n=!1){const r=n?Ra:t.emitsCache,s=r.get(e);if(s!==void 0)return s;const l=e.emits;let o={},a=!1;if(!ee(e)){const i=u=>{const c=_o(u,t,!0);c&&(a=!0,Ie(o,c))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return!l&&!a?(ve(e)&&r.set(e,null),null):(q(l)?l.forEach(i=>o[i]=null):Ie(o,l),ve(e)&&r.set(e,o),o)}function br(e,t){return!e||!ar(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),pe(e,t[0].toLowerCase()+t.slice(1))||pe(e,Ft(t))||pe(e,t))}function qs(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[l],slots:o,attrs:a,emit:i,render:u,renderCache:c,props:f,data:h,setupState:d,ctx:b,inheritAttrs:C}=e,P=Zn(e);let E,_;try{if(n.shapeFlag&4){const S=s||r,B=S;E=ht(u.call(B,S,c,f,d,h,b)),_=a}else{const S=t;E=ht(S.length>1?S(f,{attrs:a,slots:o,emit:i}):S(f,null)),_=t.props?a:Ma(a)}}catch(S){Yt.length=0,gr(S,e,1),E=G(Mt)}let T=E;if(_&&C!==!1){const S=Object.keys(_),{shapeFlag:B}=T;S.length&&B&7&&(l&&S.some(ur)&&(_=Ta(_,l)),T=on(T,_,!1,!0))}if(n.dirs&&(T=on(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition){const S=vr(T.type)&&mo(T)||T;As(S,n.transition)}return E=T,Zn(P),E}const Ma=e=>{let t;for(const n in e)(n==="class"||n==="style"||ar(n))&&((t||(t={}))[n]=e[n]);return t},Ta=(e,t)=>{const n={};for(const r in e)(!ur(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ba(e,t,n){const{props:r,children:s,component:l}=e,{props:o,children:a,patchFlag:i}=t,u=l.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&i>=0){if(i&1024)return!0;if(i&16)return r?Ks(r,o,u):!!o;if(i&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(Eo(o,r,h)&&!br(u,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ks(r,o,u):!0:!!o;return!1}function Ks(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const l=r[s];if(Eo(t,e,l)&&!br(n,l))return!0}return!1}function Eo(e,t,n){const r=e[n],s=t[n];return n==="style"&&ve(r)&&ve(s)?!kt(r,s):r!==s}function Na({vnode:e,parent:t,suspense:n},r){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=r,e=s),s===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}const Ro={},Mo=()=>Object.create(Ro),To=e=>Object.getPrototypeOf(e)===Ro;function Oa(e,t,n,r=!1){const s={},l=Mo();e.propsDefaults=Object.create(null),Bo(e,t,s,l);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:lo(s):e.type.props?e.props=s:e.props=l,e.attrs=l}function Ia(e,t,n,r){const{props:s,attrs:l,vnode:{patchFlag:o}}=e,a=he(s),[i]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(br(e.emitsOptions,h))continue;const d=t[h];if(i)if(pe(l,h))d!==l[h]&&(l[h]=d,u=!0);else{const b=We(h);s[b]=es(i,a,b,d,e,!1)}else d!==l[h]&&(l[h]=d,u=!0)}}}else{Bo(e,t,s,l)&&(u=!0);let c;for(const f in a)(!t||!pe(t,f)&&((c=Ft(f))===f||!pe(t,c)))&&(i?n&&(n[f]!==void 0||n[c]!==void 0)&&(s[f]=es(i,a,f,void 0,e,!0)):delete s[f]);if(l!==a)for(const f in l)(!t||!pe(t,f))&&(delete l[f],u=!0)}u&&wt(e.attrs,"set","")}function Bo(e,t,n,r){const[s,l]=e.propsOptions;let o=!1,a;if(t)for(let i in t){if(yn(i))continue;const u=t[i];let c;s&&pe(s,c=We(i))?!l||!l.includes(c)?n[c]=u:(a||(a={}))[c]=u:br(e.emitsOptions,i)||(!(i in r)||u!==r[i])&&(r[i]=u,o=!0)}if(l){const i=he(n),u=a||be;for(let c=0;c<l.length;c++){const f=l[c];n[f]=es(s,i,f,u[f],e,!pe(u,f))}}return o}function es(e,t,n,r,s,l){const o=e[n];if(o!=null){const a=pe(o,"default");if(a&&r===void 0){const i=o.default;if(o.type!==Function&&!o.skipFactory&&ee(i)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const c=Ln(s);r=u[n]=i.call(null,t),c()}}else r=i;s.ce&&s.ce._setProp(n,r)}o[0]&&(l&&!a?r=!1:o[1]&&(r===""||r===Ft(n))&&(r=!0))}return r}const Ha=new WeakMap;function No(e,t,n=!1){const r=n?Ha:t.propsCache,s=r.get(e);if(s)return s;const l=e.props,o={},a=[];let i=!1;if(!ee(e)){const c=f=>{i=!0;const[h,d]=No(f,t,!0);Ie(o,h),d&&a.push(...d)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!l&&!i)return ve(e)&&r.set(e,nn),nn;if(q(l))for(let c=0;c<l.length;c++){const f=We(l[c]);Js(f)&&(o[f]=be)}else if(l)for(const c in l){const f=We(c);if(Js(f)){const h=l[c],d=o[f]=q(h)||ee(h)?{type:h}:Ie({},h),b=d.type;let C=!1,P=!0;if(q(b))for(let E=0;E<b.length;++E){const _=b[E],T=ee(_)&&_.name;if(T==="Boolean"){C=!0;break}else T==="String"&&(P=!1)}else C=ee(b)&&b.name==="Boolean";d[0]=C,d[1]=P,(C||pe(d,"default"))&&a.push(f)}}const u=[o,a];return ve(e)&&r.set(e,u),u}function Js(e){return e[0]!=="$"&&!yn(e)}const xs=e=>e==="_"||e==="_ctx"||e==="$stable",ks=e=>q(e)?e.map(ht):[ht(e)],Da=(e,t,n)=>{if(t._n)return t;const r=mr((...s)=>ks(t(...s)),n);return r._c=!1,r},Oo=(e,t,n)=>{const r=e._ctx;for(const s in e){if(xs(s))continue;const l=e[s];if(ee(l))t[s]=Da(s,l,r);else if(l!=null){const o=ks(l);t[s]=()=>o}}},Io=(e,t)=>{const n=ks(t);e.slots.default=()=>n},Ho=(e,t,n)=>{for(const r in t)(n||!xs(r))&&(e[r]=t[r])},La=(e,t,n)=>{const r=e.slots=Mo();if(e.vnode.shapeFlag&32){const s=t._;s?(Ho(r,t,n),n&&Gl(r,"_",s,!0)):Oo(t,r)}else t&&Io(e,t)},$a=(e,t,n)=>{const{vnode:r,slots:s}=e;let l=!0,o=be;if(r.shapeFlag&32){const a=t._;a?n&&a===1?l=!1:Ho(s,t,n):(l=!t.$stable,Oo(t,s)),o=t}else t&&(Io(e,t),o={default:1});if(l)for(const a in s)!xs(a)&&o[a]==null&&delete s[a]},Je=za;function Fa(e){return Ga(e)}function Ga(e,t){const n=hr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:l,createElement:o,createText:a,createComment:i,setText:u,setElementText:c,parentNode:f,nextSibling:h,setScopeId:d=mt,insertStaticContent:b}=e,C=(g,v,y,w=null,k=null,A=null,I=void 0,O=null,N=!!v.dynamicChildren)=>{if(g===v)return;g&&!dn(g,v)&&(w=x(g),Te(g,k,A,!0),g=null),v.patchFlag===-2&&(N=!1,v.dynamicChildren=null);const{type:R,ref:W,shapeFlag:L}=v;switch(R){case Cr:P(g,v,y,w);break;case Mt:E(g,v,y,w);break;case Jn:g==null&&_(v,y,w,I);break;case Ne:He(g,v,y,w,k,A,I,O,N);break;default:L&1?B(g,v,y,w,k,A,I,O,N):L&6?Fe(g,v,y,w,k,A,I,O,N):(L&64||L&128)&&R.process(g,v,y,w,k,A,I,O,N,V)}W!=null&&k?Pn(W,g&&g.ref,A,v||g,!v):W==null&&g&&g.ref!=null&&Pn(g.ref,null,A,g,!0)},P=(g,v,y,w)=>{if(g==null)r(v.el=a(v.children),y,w);else{const k=v.el=g.el;v.children!==g.children&&u(k,v.children)}},E=(g,v,y,w)=>{g==null?r(v.el=i(v.children||""),y,w):v.el=g.el},_=(g,v,y,w)=>{[g.el,g.anchor]=b(g.children,v,y,w,g.el,g.anchor)},T=({el:g,anchor:v},y,w)=>{let k;for(;g&&g!==v;)k=h(g),r(g,y,w),g=k;r(v,y,w)},S=({el:g,anchor:v})=>{let y;for(;g&&g!==v;)y=h(g),s(g),g=y;s(v)},B=(g,v,y,w,k,A,I,O,N)=>{if(v.type==="svg"?I="svg":v.type==="math"&&(I="mathml"),g==null)K(v,y,w,k,A,I,O,N);else{const R=g.el&&g.el._isVueCE?g.el:null;try{R&&R._beginPatch(),Pe(g,v,k,A,I,O,N)}finally{R&&R._endPatch()}}},K=(g,v,y,w,k,A,I,O)=>{let N,R;const{props:W,shapeFlag:L,transition:z,dirs:Y}=g;if(N=g.el=o(g.type,A,W&&W.is,W),L&8?c(N,g.children):L&16&&ie(g.children,N,null,w,k,Tr(g,A),I,O),Y&&Gt(g,null,w,"created"),Q(N,g,g.scopeId,I,w),W){for(const me in W)me!=="value"&&!yn(me)&&l(N,me,null,W[me],A,w);"value"in W&&l(N,"value",null,W.value,A),(R=W.onVnodeBeforeMount)&&ct(R,w,g)}Y&&Gt(g,null,w,"beforeMount");const le=ja(k,z);le&&z.beforeEnter(N),r(N,v,y),((R=W&&W.onVnodeMounted)||le||Y)&&Je(()=>{try{R&&ct(R,w,g),le&&z.enter(N),Y&&Gt(g,null,w,"mounted")}finally{}},k)},Q=(g,v,y,w,k)=>{if(y&&d(g,y),w)for(let A=0;A<w.length;A++)d(g,w[A]);if(k){let A=k.subTree;if(v===A||Fo(A.type)&&(A.ssContent===v||A.ssFallback===v)){const I=k.vnode;Q(g,I,I.scopeId,I.slotScopeIds,k.parent)}}},ie=(g,v,y,w,k,A,I,O,N=0)=>{for(let R=N;R<g.length;R++){const W=g[R]=O?At(g[R]):ht(g[R]);C(null,W,v,y,w,k,A,I,O)}},Pe=(g,v,y,w,k,A,I)=>{const O=v.el=g.el;let{patchFlag:N,dynamicChildren:R,dirs:W}=v;N|=g.patchFlag&16;const L=g.props||be,z=v.props||be;let Y;if(y&&jt(y,!1),(Y=z.onVnodeBeforeUpdate)&&ct(Y,y,v,g),W&&Gt(v,g,y,"beforeUpdate"),y&&jt(y,!0),R&&(!g.dynamicChildren||g.dynamicChildren.length!==R.length)&&(N=0,I=!1,R=null),(L.innerHTML&&z.innerHTML==null||L.textContent&&z.textContent==null)&&c(O,""),R?ge(g.dynamicChildren,R,O,y,w,Tr(v,k),A):I||oe(g,v,O,null,y,w,Tr(v,k),A,!1),N>0){if(N&16)Re(O,L,z,y,k);else if(N&2&&L.class!==z.class&&l(O,"class",null,z.class,k),N&4&&l(O,"style",L.style,z.style,k),N&8){const le=v.dynamicProps;for(let me=0;me<le.length;me++){const ce=le[me],ke=L[ce],Ee=z[ce];(Ee!==ke||ce==="value")&&l(O,ce,ke,Ee,k,y)}}N&1&&g.children!==v.children&&c(O,v.children)}else!I&&R==null&&Re(O,L,z,y,k);((Y=z.onVnodeUpdated)||W)&&Je(()=>{Y&&ct(Y,y,v,g),W&&Gt(v,g,y,"updated")},w)},ge=(g,v,y,w,k,A,I)=>{for(let O=0;O<v.length;O++){const N=g[O],R=v[O],W=N.el&&(N.type===Ne||!dn(N,R)||N.shapeFlag&198)?f(N.el):y;C(N,R,W,null,w,k,A,I,!0)}},Re=(g,v,y,w,k)=>{if(v!==y){if(v!==be)for(const A in v)!yn(A)&&!(A in y)&&l(g,A,v[A],null,k,w);for(const A in y){if(yn(A))continue;const I=y[A],O=v[A];I!==O&&A!=="value"&&l(g,A,O,I,k,w)}"value"in y&&l(g,"value",v.value,y.value,k)}},He=(g,v,y,w,k,A,I,O,N)=>{const R=v.el=g?g.el:a(""),W=v.anchor=g?g.anchor:a("");let{patchFlag:L,dynamicChildren:z,slotScopeIds:Y}=v;Y&&(O=O?O.concat(Y):Y),g==null?(r(R,y,w),r(W,y,w),ie(v.children||[],y,W,k,A,I,O,N)):L>0&&L&64&&z&&g.dynamicChildren&&g.dynamicChildren.length===z.length?(ge(g.dynamicChildren,z,y,k,A,I,O),(v.key!=null||k&&v===k.subTree)&&Do(g,v,!0)):oe(g,v,y,W,k,A,I,O,N)},Fe=(g,v,y,w,k,A,I,O,N)=>{v.slotScopeIds=O,g==null?v.shapeFlag&512?k.ctx.activate(v,y,w,I,N):Ae(v,y,w,k,A,I,N):qe(g,v,N)},Ae=(g,v,y,w,k,A,I)=>{const O=g.component=Qa(g,w,k);if(ws(g)&&(O.ctx.renderer=V),Za(O,!1,I),O.asyncDep){if(k&&k.registerDep(O,we,I),!g.el){const N=O.subTree=G(Mt);E(null,N,v,y),g.placeholder=N.el}}else we(O,g,v,y,k,A,I)},qe=(g,v,y)=>{const w=v.component=g.component;if(Ba(g,v,y))if(w.asyncDep&&!w.asyncResolved){ue(w,v,y);return}else w.next=v,w.update();else v.el=g.el,w.vnode=v},we=(g,v,y,w,k,A,I)=>{const O=()=>{if(g.isMounted){let{next:L,bu:z,u:Y,parent:le,vnode:me}=g;{const Ye=Lo(g);if(Ye){L&&(L.el=me.el,ue(g,L,I)),Ye.asyncDep.then(()=>{Je(()=>{g.isUnmounted||R()},k)});return}}let ce=L,ke;jt(g,!1),L?(L.el=me.el,ue(g,L,I)):L=me,z&&qn(z),(ke=L.props&&L.props.onVnodeBeforeUpdate)&&ct(ke,le,L,me),jt(g,!0);const Ee=qs(g),je=g.subTree;g.subTree=Ee,C(je,Ee,f(je.el),x(je),g,k,A),L.el=Ee.el,ce===null&&Na(g,Ee.el),Y&&Je(Y,k),(ke=L.props&&L.props.onVnodeUpdated)&&Je(()=>ct(ke,le,L,me),k)}else{let L;const{el:z,props:Y}=v,{bm:le,m:me,parent:ce,root:ke,type:Ee}=g,je=An(v);jt(g,!1),le&&qn(le),!je&&(L=Y&&Y.onVnodeBeforeMount)&&ct(L,ce,v),jt(g,!0);{ke.ce&&ke.ce._hasShadowRoot()&&ke.ce._injectChildStyle(Ee,g.parent?g.parent.type:void 0);const Ye=g.subTree=qs(g);C(null,Ye,y,w,g,k,A),v.el=Ye.el}if(me&&Je(me,k),!je&&(L=Y&&Y.onVnodeMounted)){const Ye=v;Je(()=>ct(L,ce,Ye),k)}(v.shapeFlag&256||ce&&An(ce.vnode)&&ce.vnode.shapeFlag&256)&&g.a&&Je(g.a,k),g.isMounted=!0,v=y=w=null}};g.scope.on();const N=g.effect=new Ul(O);g.scope.off();const R=g.update=N.run.bind(N),W=g.job=N.runIfDirty.bind(N);W.i=g,W.id=g.uid,N.scheduler=()=>Ps(W),jt(g,!0),R()},ue=(g,v,y)=>{v.component=g;const w=g.vnode.props;g.vnode=v,g.next=null,Ia(g,v.props,w,y),$a(g,v.children,y),_t(),$s(g),Et()},oe=(g,v,y,w,k,A,I,O,N=!1)=>{const R=g&&g.children,W=g?g.shapeFlag:0,L=v.children,{patchFlag:z,shapeFlag:Y}=v;if(z>0){if(z&128){rt(R,L,y,w,k,A,I,O,N);return}else if(z&256){et(R,L,y,w,k,A,I,O,N);return}}Y&8?(W&16&&Ge(R,k,A),L!==R&&c(y,L)):W&16?Y&16?rt(R,L,y,w,k,A,I,O,N):Ge(R,k,A,!0):(W&8&&c(y,""),Y&16&&ie(L,y,w,k,A,I,O,N))},et=(g,v,y,w,k,A,I,O,N)=>{g=g||nn,v=v||nn;const R=g.length,W=v.length,L=Math.min(R,W);let z;for(z=0;z<L;z++){const Y=v[z]=N?At(v[z]):ht(v[z]);C(g[z],Y,y,null,k,A,I,O,N)}R>W?Ge(g,k,A,!0,!1,L):ie(v,y,w,k,A,I,O,N,L)},rt=(g,v,y,w,k,A,I,O,N)=>{let R=0;const W=v.length;let L=g.length-1,z=W-1;for(;R<=L&&R<=z;){const Y=g[R],le=v[R]=N?At(v[R]):ht(v[R]);if(dn(Y,le))C(Y,le,y,null,k,A,I,O,N);else break;R++}for(;R<=L&&R<=z;){const Y=g[L],le=v[z]=N?At(v[z]):ht(v[z]);if(dn(Y,le))C(Y,le,y,null,k,A,I,O,N);else break;L--,z--}if(R>L){if(R<=z){const Y=z+1,le=Y<W?v[Y].el:w;for(;R<=z;)C(null,v[R]=N?At(v[R]):ht(v[R]),y,le,k,A,I,O,N),R++}}else if(R>z)for(;R<=L;)Te(g[R],k,A,!0),R++;else{const Y=R,le=R,me=new Map;for(R=le;R<=z;R++){const ne=v[R]=N?At(v[R]):ht(v[R]);ne.key!=null&&me.set(ne.key,R)}let ce,ke=0;const Ee=z-le+1;let je=!1,Ye=0;const D=new Array(Ee);for(R=0;R<Ee;R++)D[R]=0;for(R=Y;R<=L;R++){const ne=g[R];if(ke>=Ee){Te(ne,k,A,!0);continue}let ae;if(ne.key!=null)ae=me.get(ne.key);else for(ce=le;ce<=z;ce++)if(D[ce-le]===0&&dn(ne,v[ce])){ae=ce;break}ae===void 0?Te(ne,k,A,!0):(D[ae-le]=R+1,ae>=Ye?Ye=ae:je=!0,C(ne,v[ae],y,null,k,A,I,O,N),ke++)}const m=je?Va(D):nn;for(ce=m.length-1,R=Ee-1;R>=0;R--){const ne=le+R,ae=v[ne],M=v[ne+1],te=ne+1<W?M.el||$o(M):w;D[R]===0?C(null,ae,y,te,k,A,I,O,N):je&&(ce<0||R!==m[ce]?Ke(ae,y,te,2):ce--)}}},Ke=(g,v,y,w,k=null)=>{const{el:A,type:I,transition:O,children:N,shapeFlag:R}=g;if(R&6){Ke(g.component.subTree,v,y,w);return}if(R&128){g.suspense.move(v,y,w);return}if(R&64){I.move(g,v,y,V);return}if(I===Ne){r(A,v,y);for(let L=0;L<N.length;L++)Ke(N[L],v,y,w);r(g.anchor,v,y);return}if(I===Jn){T(g,v,y);return}if(w!==2&&R&1&&O)if(w===0)O.persisted&&!A[Rr]?r(A,v,y):(O.beforeEnter(A),r(A,v,y),Je(()=>O.enter(A),k));else{const{leave:L,delayLeave:z,afterLeave:Y}=O,le=()=>{g.ctx.isUnmounted?s(A):r(A,v,y)},me=()=>{const ce=A._isLeaving||!!A[Rr];A._isLeaving&&A[Rr](!0),O.persisted&&!ce?le():L(A,()=>{le(),Y&&Y()})};z?z(A,le,me):me()}else r(A,v,y)},Te=(g,v,y,w=!1,k=!1)=>{const{type:A,props:I,ref:O,children:N,dynamicChildren:R,shapeFlag:W,patchFlag:L,dirs:z,cacheIndex:Y,memo:le}=g;if(L===-2&&(k=!1),O!=null&&(_t(),Pn(O,null,y,g,!0),Et()),Y!=null&&(v.renderCache[Y]=void 0),W&256){v.ctx.deactivate(g);return}const me=W&1&&z,ce=!An(g);let ke;if(ce&&(ke=I&&I.onVnodeBeforeUnmount)&&ct(ke,v,g),W&6)ut(g.component,y,w);else{if(W&128){g.suspense.unmount(y,w);return}me&&Gt(g,null,v,"beforeUnmount"),W&64?g.type.remove(g,v,y,V,w):R&&!R.hasOnce&&(A!==Ne||L>0&&L&64)?Ge(R,v,y,!1,!0):(A===Ne&&L&384||!k&&W&16)&&Ge(N,v,y),w&&yt(g)}const Ee=le!=null&&Y==null;(ce&&(ke=I&&I.onVnodeUnmounted)||me||Ee)&&Je(()=>{ke&&ct(ke,v,g),me&&Gt(g,null,v,"unmounted"),Ee&&(g.el=null)},y)},yt=g=>{const{type:v,el:y,anchor:w,transition:k}=g;if(v===Ne){Bt(y,w);return}if(v===Jn){S(g);return}const A=()=>{s(y),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(g.shapeFlag&1&&k&&!k.persisted){const{leave:I,delayLeave:O}=k,N=()=>I(y,A);O?O(g.el,A,N):N()}else A()},Bt=(g,v)=>{let y;for(;g!==v;)y=h(g),s(g),g=y;s(v)},ut=(g,v,y)=>{const{bum:w,scope:k,job:A,subTree:I,um:O,m:N,a:R}=g;Ys(N),Ys(R),w&&qn(w),k.stop(),A&&(A.flags|=8,Te(I,g,v,y)),O&&Je(O,v),Je(()=>{g.isUnmounted=!0},v)},Ge=(g,v,y,w=!1,k=!1,A=0)=>{for(let I=A;I<g.length;I++)Te(g[I],v,y,w,k)},x=g=>{if(g.shapeFlag&6)return x(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const v=h(g.anchor||g.el),y=v&&v[ia];return y?h(y):v};let $=!1;const H=(g,v,y)=>{let w;g==null?v._vnode&&(Te(v._vnode,null,null,!0),w=v._vnode.component):C(v._vnode||null,g,v,null,null,null,y),v._vnode=g,$||($=!0,$s(w),co(),$=!1)},V={p:C,um:Te,m:Ke,r:yt,mt:Ae,mc:ie,pc:oe,pbc:ge,n:x,o:e};return{render:H,hydrate:void 0,createApp:ka(H)}}function Tr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function jt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ja(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Do(e,t,n=!1){const r=e.children,s=t.children;if(q(r)&&q(s))for(let l=0;l<r.length;l++){const o=r[l];let a=s[l];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[l]=At(s[l]),a.el=o.el),!n&&a.patchFlag!==-2&&Do(o,a)),a.type===Cr&&(a.patchFlag===-1&&(a=s[l]=At(a)),a.el=o.el),a.type===Mt&&!a.el&&(a.el=o.el)}}function Va(e){const t=e.slice(),n=[0];let r,s,l,o,a;const i=e.length;for(r=0;r<i;r++){const u=e[r];if(u!==0){if(s=n[n.length-1],e[s]<u){t[r]=s,n.push(r);continue}for(l=0,o=n.length-1;l<o;)a=l+o>>1,e[n[a]]<u?l=a+1:o=a;u<e[n[l]]&&(l>0&&(t[r]=n[l-1]),n[l]=r)}}for(l=n.length,o=n[l-1];l-- >0;)n[l]=o,o=t[o];return n}function Lo(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Lo(t)}function Ys(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function $o(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?$o(t.subTree):null}const Fo=e=>e.__isSuspense;function za(e,t){t&&t.pendingBranch?q(e)?t.effects.push(...e):t.effects.push(e):ra(e)}const Ne=Symbol.for("v-fgt"),Cr=Symbol.for("v-txt"),Mt=Symbol.for("v-cmt"),Jn=Symbol.for("v-stc"),Yt=[];let Xe=null;function J(e=!1){Yt.push(Xe=e?null:[])}function Go(){Yt.pop(),Xe=Yt[Yt.length-1]||null}let Rn=1;function rr(e,t=!1){Rn+=e,e<0&&Xe&&t&&(Xe.hasOnce=!0)}function jo(e){return e.dynamicChildren=Rn>0?Xe||nn:null,Go(),Rn>0&&Xe&&Xe.push(e),e}function re(e,t,n,r,s,l){return jo(p(e,t,n,r,s,l,!0))}function Ze(e,t,n,r,s){return jo(G(e,t,n,r,s,!0))}function sr(e){return e?e.__v_isVNode===!0:!1}function dn(e,t){return e.type===t.type&&e.key===t.key}const Vo=({key:e})=>e??null,Yn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?xe(e)||$e(e)||ee(e)?{i:Qe,r:e,k:t,f:!!n}:e:null);function p(e,t=null,n=null,r=0,s=null,l=e===Ne?0:1,o=!1,a=!1){const i={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Vo(t),ref:t&&Yn(t),scopeId:ho,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Qe};return a?(lr(i,n),l&128&&e.normalize(i)):n&&(i.shapeFlag|=xe(n)?8:16),Rn>0&&!o&&Xe&&(i.patchFlag>0||l&6)&&i.patchFlag!==32&&Xe.push(i),i}const G=Ua;function Ua(e,t=null,n=null,r=0,s=null,l=!1){if((!e||e===Ao)&&(e=Mt),sr(e)){const a=on(e,t,!0);return n&&lr(a,n),Rn>0&&!l&&Xe&&(a.shapeFlag&6?Xe[Xe.indexOf(e)]=a:Xe.push(a)),a.patchFlag=-2,a}if(su(e)&&(e=e.__vccOpts),t){t=Wa(t);let{class:a,style:i}=t;a&&!xe(a)&&(t.class=fe(a)),ve(i)&&(Cs(i)&&!q(i)&&(i=Ie({},i)),t.style=Ht(i))}const o=xe(e)?1:Fo(e)?128:vr(e)?64:ve(e)?4:ee(e)?2:0;return p(e,t,n,r,s,o,l,!0)}function Wa(e){return e?Cs(e)||To(e)?Ie({},e):e:null}function on(e,t,n=!1,r=!1){const{props:s,ref:l,patchFlag:o,children:a,transition:i}=e,u=t?Ka(s||{},t):s,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Vo(u),ref:t&&t.ref?n&&l?q(l)?l.concat(Yn(t)):[l,Yn(t)]:Yn(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ne?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:i,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&on(e.ssContent),ssFallback:e.ssFallback&&on(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return i&&r&&As(c,i.clone(c)),c}function j(e=" ",t=0){return G(Cr,null,e,t)}function qa(e,t){const n=G(Jn,null,e);return n.staticCount=t,n}function Ut(e="",t=!1){return t?(J(),Ze(Mt,null,e)):G(Mt,null,e)}function ht(e){return e==null||typeof e=="boolean"?G(Mt):q(e)?G(Ne,null,e.slice()):sr(e)?At(e):G(Cr,null,String(e))}function At(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:on(e)}function lr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(q(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),lr(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!To(t)?t._ctx=Qe:s===3&&Qe&&(Qe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(ee(t)){if(r&65){lr(e,{default:t});return}t={default:t,_ctx:Qe},n=32}else t=String(t),r&64?(n=16,t=[j(t)]):n=8;e.children=t,e.shapeFlag|=n}function Ka(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=fe([t.class,r.class]));else if(s==="style")t.style=Ht([t.style,r.style]);else if(ar(s)){const l=t[s],o=r[s];o&&l!==o&&!(q(l)&&l.includes(o))?t[s]=l?[].concat(l,o):o:o==null&&l==null&&!ur(s)&&(t[s]=o)}else s!==""&&(t[s]=r[s])}return t}function ct(e,t,n,r=null){it(e,t,7,[n,r])}const Ja=ko();let Ya=0;function Qa(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Ja,l={uid:Ya++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ri(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:No(r,s),emitsOptions:_o(r,s),emit:null,emitted:null,propsDefaults:be,inheritAttrs:r.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=Ea.bind(null,l),e.ce&&e.ce(l),l}let Le=null;const Xa=()=>Le||Qe;let or,Mn;{const e=hr(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),l=>{s.length>1?s.forEach(o=>o(l)):s[0](l)}};or=t("__VUE_INSTANCE_SETTERS__",n=>Le=n),Mn=t("__VUE_SSR_SETTERS__",n=>Tn=n)}const Ln=e=>{const t=Le;return or(e),e.scope.on(),()=>{e.scope.off(),or(t)}},Qs=()=>{Le&&Le.scope.off(),or(null)};function zo(e){return e.vnode.shapeFlag&4}let Tn=!1;function Za(e,t=!1,n=!1){t&&Mn(t);const{props:r,children:s}=e.vnode,l=zo(e);Oa(e,r,l,t),La(e,s,n||t);const o=l?eu(e,t):void 0;return t&&Mn(!1),o}function eu(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ba);const{setup:r}=n;if(r){_t();const s=e.setupContext=r.length>1?nu(e):null,l=Ln(e),o=Hn(r,e,0,[e.props,s]),a=Ll(o);if(Et(),l(),(a||e.sp)&&!An(e)&&yo(e),a){if(o.then(Qs,Qs),t)return o.then(i=>{Mn(!0);try{Xs(e,i,t)}finally{Mn(!1)}}).catch(i=>{gr(i,e,0)});e.asyncDep=o}else Xs(e,o)}else Uo(e)}function Xs(e,t,n){ee(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ve(t)&&(e.setupState=io(t)),Uo(e)}function Uo(e,t,n){const r=e.type;e.render||(e.render=r.render||mt);{const s=Ln(e);_t();try{Ca(e)}finally{Et(),s()}}}const tu={get(e,t){return De(e,"get",""),e[t]}};function nu(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,tu),slots:e.slots,emit:e.emit,expose:t}}function Pr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(io(Ki(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in wn)return wn[n](e)},has(t,n){return n in t||n in wn}})):e.proxy}function ru(e,t=!0){return ee(e)?e.displayName||e.name:e.name||t&&e.__name}function su(e){return ee(e)&&"__vccOpts"in e}const ye=(e,t)=>Xi(e,t,Tn);function Bn(e,t,n){try{rr(-1);const r=arguments.length;return r===2?ve(t)&&!q(t)?sr(t)?G(e,null,[t]):G(e,t):G(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&sr(n)&&(n=[n]),G(e,t,n))}finally{rr(1)}}const lu="3.5.42";/**
* @vue/runtime-dom v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ts;const Zs=typeof window<"u"&&window.trustedTypes;if(Zs)try{ts=Zs.createPolicy("vue",{createHTML:e=>e})}catch{}const Wo=ts?e=>ts.createHTML(e):e=>e,ou="http://www.w3.org/2000/svg",iu="http://www.w3.org/1998/Math/MathML",Pt=typeof document<"u"?document:null,el=Pt&&Pt.createElement("template"),au={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?Pt.createElementNS(ou,e):t==="mathml"?Pt.createElementNS(iu,e):n?Pt.createElement(e,{is:n}):Pt.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>Pt.createTextNode(e),createComment:e=>Pt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Pt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,l){const o=n?n.previousSibling:t.lastChild;if(s&&(s===l||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===l||!(s=s.nextSibling)););else{el.innerHTML=Wo(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=el.content;if(r==="svg"||r==="mathml"){const i=a.firstChild;for(;i.firstChild;)a.appendChild(i.firstChild);a.removeChild(i)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},uu=Symbol("_vtc");function cu(e,t,n){const r=e[uu];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const tl=Symbol("_vod"),fu=Symbol("_vsh"),du=Symbol(""),hu=/(?:^|;)\s*display\s*:/;function pu(e,t,n){const r=e.style,s=xe(n);let l=!1;if(n&&!s){if(t)if(xe(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&vn(r,a,"")}else for(const o in t)n[o]==null&&vn(r,o,"");for(const o in n){o==="display"&&(l=!0);const a=n[o];a!=null?mu(e,o,!xe(t)&&t?t[o]:void 0,a)||vn(r,o,a):vn(r,o,"")}}else if(s){if(t!==n){const o=r[du];o&&(n+=";"+o),r.cssText=n,l=hu.test(n)}}else t&&e.removeAttribute("style");tl in e&&(e[tl]=l?r.display:"",e[fu]&&(r.display="none"))}const zn=/\s*!important$/;function vn(e,t,n){if(q(n))n.forEach(r=>vn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))zn.test(n)?e.setProperty(t,n.replace(zn,""),"important"):e.setProperty(t,n);else{const r=gu(e,t);zn.test(n)?e.setProperty(Ft(r),n.replace(zn,""),"important"):e[r]=n}}const nl=["Webkit","Moz","ms"],Br={};function gu(e,t){const n=Br[t];if(n)return n;let r=We(t);if(r!=="filter"&&r in e)return Br[t]=r;r=fr(r);for(let s=0;s<nl.length;s++){const l=nl[s]+r;if(l in e)return Br[t]=l}return t}function mu(e,t,n,r){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&xe(r)&&n===r}const rl="http://www.w3.org/1999/xlink";function sl(e,t,n,r,s,l=_i(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(rl,t.slice(6,t.length)):e.setAttributeNS(rl,t,n):n==null||l&&!jl(n)?e.removeAttribute(t):e.setAttribute(t,l?"":vt(n)?String(n):n)}function ll(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Wo(n):n);return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const a=l==="OPTION"?e.getAttribute("value")||"":e.value,i=n==null?e.type==="checkbox"?"on":"":String(n);(a!==i||!("_value"in e))&&(e.value=i),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=jl(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function Dt(e,t,n,r){e.addEventListener(t,n,r)}function vu(e,t,n,r){e.removeEventListener(t,n,r)}const ol=Symbol("_vei");function yu(e,t,n,r,s=null){const l=e[ol]||(e[ol]={}),o=l[t];if(r&&o)o.value=r;else{const[a,i]=Pu(t);if(r){const u=l[t]=Su(r,s);Dt(e,a,u,i)}else o&&(vu(e,a,o,i),l[t]=void 0)}}const bu=/(Once|Passive|Capture)$/,Cu=/^on:?(?:Once|Passive|Capture)$/;function Pu(e){let t,n;for(;(n=e.match(bu))&&!Cu.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):Ft(e.slice(2)),t]}let Nr=0;const Au=Promise.resolve(),wu=()=>Nr||(Au.then(()=>Nr=0),Nr=Date.now());function Su(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(q(s)){const l=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{l.call(r),r._stopped=!0};const o=s.slice(),a=[r];for(let i=0;i<o.length&&!r._stopped;i++){const u=o[i];u&&it(u,t,5,a)}}else it(s,t,5,[r])};return n.value=e,n.attached=wu(),n}const il=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,xu=(e,t,n,r,s,l)=>{const o=s==="svg";t==="class"?cu(e,r,o):t==="style"?pu(e,n,r):ar(t)?ur(t)||yu(e,t,n,r,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ku(e,t,r,o))?(ll(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&sl(e,t,r,o,l,t!=="value")):e._isVueCE&&(_u(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!xe(r)))?ll(e,We(t),r,l,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),sl(e,t,r,o))};function ku(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&il(t)&&ee(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return il(t)&&xe(n)?!1:t in e}function _u(e,t){const n=e._def.props;if(!n)return!1;const r=We(t);return Array.isArray(n)?n.some(s=>We(s)===r):Object.keys(n).some(s=>We(s)===r)}const an=e=>{const t=e.props["onUpdate:modelValue"]||!1;return q(t)?n=>qn(t,n):t};function Eu(e){e.target.composing=!0}function al(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const gt=Symbol("_assign"),Un=Symbol("_initialValue");function Or(e,t,n){return t&&(e=e.trim()),n&&(e=dr(e)),e}const Be={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e.parentNode&&(e.type==="text"?e[Un]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[Un]=e.defaultValue.replace(/\r\n?/g,`
`))),e[gt]=an(s);const l=r||s.props&&s.props.type==="number";Dt(e,t?"change":"input",o=>{o.target.composing||e[gt](Or(e.value,n,l))}),(n||l)&&Dt(e,"change",()=>{e.value=Or(e.value,n,l)}),t||(Dt(e,"compositionstart",Eu),Dt(e,"compositionend",al),Dt(e,"change",al))},mounted(e,{value:t,modifiers:{trim:n,number:r}}){const s=t??"",l=e[Un];delete e[Un],l!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==l?e[gt](Or(e.value,n,r)):e.value=s},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:l}},o){if(e[gt]=an(o),e.composing)return;const a=(l||e.type==="number")&&!/^0\d/.test(e.value)?dr(e.value):e.value,i=t??"";if(a===i)return;const u=e.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===e&&e.type!=="range"&&(r&&t===n||s&&e.value.trim()===i)||(e.value=i)}},Wn={deep:!0,created(e,t,n){e[gt]=an(n),Dt(e,"change",()=>{const r=e._modelValue,s=Nn(e),l=e.checked,o=e[gt];if(q(r)){const a=hs(r,s),i=a!==-1;if(l&&!i)o(r.concat(s));else if(!l&&i){const u=[...r];u.splice(a,1),o(u)}}else if(xt(r)){const a=new Set(r);l?a.add(s):a.delete(s),o(a)}else o(qo(e,l))})},mounted:ul,beforeUpdate(e,t,n){e[gt]=an(n),ul(e,t,n)}};function ul(e,{value:t,oldValue:n},r){e._modelValue=t;let s;if(q(t))s=hs(t,r.props.value)>-1;else if(xt(t))s=t.has(r.props.value);else{if(t===n)return;s=kt(t,qo(e,!0))}e.checked!==s&&(e.checked=s)}const cl={deep:!0,created(e,{value:t,modifiers:{number:n}},r){e._modelValue=t,Dt(e,"change",()=>{const s=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>n?dr(Nn(i)):Nn(i)),l=e.multiple,o=l?xt(e._modelValue)?new Set(s):s:s[0],a=e._pendingValue=[l,l?q(o)?s.slice():s:o];try{e[gt](o)}finally{tt(()=>{e._pendingValue===a&&(e._pendingValue=void 0)})}}),e[gt]=an(r)},mounted(e,{value:t}){fl(e,t)},beforeUpdate(e,{value:t},n){e._modelValue=t,e[gt]=an(n)},updated(e,{value:t}){const n=e._pendingValue;e._pendingValue=void 0,(!n||n[0]!==e.multiple||!Ru(t,n[1],n[0]))&&fl(e,t)}};function Ru(e,t,n){if(!n||q(e))return kt(e,t);if(xt(e)){if(e.size!==t.length)return!1;for(const r of t)if(!e.has(r))return!1;return!0}return!1}function fl(e,t){const n=e.multiple,r=q(t);if(!(n&&!r&&!xt(t))){for(let s=0,l=e.options.length;s<l;s++){const o=e.options[s],a=Nn(o);if(n)if(r){const i=typeof a;i==="string"||i==="number"?o.selected=t.some(u=>String(u)===String(a)):o.selected=hs(t,a)>-1}else o.selected=t.has(a);else if(kt(Nn(o),t)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Nn(e){return"_value"in e?e._value:e.value}function qo(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Mu=["ctrl","shift","alt","meta"],Tu={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Mu.some(n=>e[`${n}Key`]&&!t.includes(n))},hn=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=((s,...l)=>{for(let o=0;o<t.length;o++){const a=Tu[t[o]];if(a&&a(s,t))return}return e(s,...l)}))},Bu={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Nu=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=(s=>{if(!("key"in s))return;const l=Ft(s.key);if(t.some(o=>o===l||Bu[o]===l))return e(s)}))},Ou=Ie({patchProp:xu},au);let dl;function Iu(){return dl||(dl=Fa(Ou))}const Hu=((...e)=>{const t=Iu().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Lu(r);if(!s)return;const l=t._component;!ee(l)&&!l.render&&!l.template&&(l.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Du(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function Du(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Lu(e){return xe(e)?document.querySelector(e):e}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const tn=typeof document<"u";function Ko(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function $u(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Ko(e.default)}const de=Object.assign;function Ir(e,t){const n={};for(const r in t){const s=t[r];n[r]=at(s)?s.map(e):e(s)}return n}const Sn=()=>{},at=Array.isArray;function hl(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const Jo=/#/g,Fu=/&/g,Gu=/\//g,ju=/=/g,Vu=/\?/g,Yo=/\+/g,zu=/%5B/g,Uu=/%5D/g,Qo=/%5E/g,Wu=/%60/g,Xo=/%7B/g,qu=/%7C/g,Zo=/%7D/g,Ku=/%20/g;function _s(e){return e==null?"":encodeURI(""+e).replace(qu,"|").replace(zu,"[").replace(Uu,"]")}function Ju(e){return _s(e).replace(Xo,"{").replace(Zo,"}").replace(Qo,"^")}function ns(e){return _s(e).replace(Yo,"%2B").replace(Ku,"+").replace(Jo,"%23").replace(Fu,"%26").replace(Wu,"`").replace(Xo,"{").replace(Zo,"}").replace(Qo,"^")}function Yu(e){return ns(e).replace(ju,"%3D")}function Qu(e){return _s(e).replace(Jo,"%23").replace(Vu,"%3F")}function Xu(e){return Qu(e).replace(Gu,"%2F")}function On(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Zu=/\/$/,ec=e=>e.replace(Zu,"");function Hr(e,t,n="/"){let r,s={},l="",o="";const a=t.indexOf("#");let i=t.indexOf("?");return i=a>=0&&i>a?-1:i,i>=0&&(r=t.slice(0,i),l=t.slice(i,a>0?a:t.length),s=e(l.slice(1))),a>=0&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=sc(r??t,n),{fullPath:r+l+o,path:r,query:s,hash:On(o)}}function tc(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function pl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function nc(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&un(t.matched[r],n.matched[s])&&ei(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function un(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ei(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!rc(e[n],t[n]))return!1;return!0}function rc(e,t){return at(e)?gl(e,t):at(t)?gl(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function gl(e,t){return at(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function sc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let l=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")l>1&&l--;else break;return n.slice(0,l).join("/")+"/"+r.slice(o).join("/")}const Nt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let rs=(function(e){return e.pop="pop",e.push="push",e})({}),Dr=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function lc(e){if(!e)if(tn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),ec(e)}const oc=/^[^#]+#/;function ic(e,t){return e.replace(oc,"#")+t}function ac(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Ar=()=>({left:window.scrollX,top:window.scrollY});function uc(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=ac(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ml(e,t){return(history.state?history.state.position-t:-1)+e}const ss=new Map;function cc(e,t){ss.set(e,t)}function fc(e){const t=ss.get(e);return ss.delete(e),t}function dc(e){return typeof e=="string"||e&&typeof e=="object"}function ti(e){return typeof e=="string"||typeof e=="symbol"}let _e=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const ni=Symbol("");_e.MATCHER_NOT_FOUND+"",_e.NAVIGATION_GUARD_REDIRECT+"",_e.NAVIGATION_ABORTED+"",_e.NAVIGATION_CANCELLED+"",_e.NAVIGATION_DUPLICATED+"";function cn(e,t){return de(new Error,{type:e,[ni]:!0},t)}function Ct(e,t){return e instanceof Error&&ni in e&&(t==null||!!(e.type&t))}const hc=["params","query","hash"];function pc(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of hc)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function gc(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Yo," "),l=s.indexOf("="),o=On(l<0?s:s.slice(0,l)),a=l<0?null:On(s.slice(l+1));if(o in t){let i=t[o];at(i)||(i=t[o]=[i]),i.push(a)}else t[o]=a}return t}function vl(e){let t="";for(let n in e){const r=e[n];if(n=Yu(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(at(r)?r.map(s=>s&&ns(s)):[r&&ns(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function mc(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=at(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const vc=Symbol(""),yl=Symbol(""),Es=Symbol(""),Rs=Symbol(""),ls=Symbol("");function pn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function It(e,t,n,r,s,l=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,i)=>{const u=h=>{h===!1?i(cn(_e.NAVIGATION_ABORTED,{from:n,to:t})):h instanceof Error?i(h):dc(h)?i(cn(_e.NAVIGATION_GUARD_REDIRECT,{from:t,to:h})):(o&&r.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),a())},c=l(()=>e.call(r&&r.instances[s],t,n,u));let f=Promise.resolve(c);e.length<3&&(f=f.then(u)),f.catch(h=>i(h))})}function Lr(e,t,n,r,s=l=>l()){const l=[];for(const o of e)for(const a in o.components){let i=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Ko(i)){const u=(i.__vccOpts||i)[t];u&&l.push(It(u,n,r,o,a,s))}else{let u=i();l.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=$u(c)?c.default:c;o.mods[a]=c,o.components[a]=f;const h=(f.__vccOpts||f)[t];return h&&It(h,n,r,o,a,s)()}))}}return l}function yc(e,t){const n=[],r=[],s=[],l=Math.max(t.matched.length,e.matched.length);for(let o=0;o<l;o++){const a=t.matched[o];a&&(e.matched.find(u=>un(u,a))?r.push(a):n.push(a));const i=e.matched[o];i&&(t.matched.find(u=>un(u,i))||s.push(i))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let bc=()=>location.protocol+"//"+location.host;function ri(e,t){const{pathname:n,search:r,hash:s}=t,l=e.indexOf("#");if(l>-1){let o=s.includes(e.slice(l))?e.slice(l).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),pl(a,"")}return pl(n,e)+r+s}function Cc(e,t,n,r){let s=[],l=[],o=null;const a=({state:h})=>{const d=ri(e,location),b=n.value,C=t.value;let P=0;if(h){if(n.value=d,t.value=h,o&&o===b){o=null;return}P=C?h.position-C.position:0}else r(d);s.forEach(E=>{E(n.value,b,{delta:P,type:rs.pop,direction:P?P>0?Dr.forward:Dr.back:Dr.unknown})})};function i(){o=n.value}function u(h){s.push(h);const d=()=>{const b=s.indexOf(h);b>-1&&s.splice(b,1)};return l.push(d),d}function c(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(de({},h.state,{scroll:Ar()}),"")}}function f(){for(const h of l)h();l=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:i,listen:u,destroy:f}}function bl(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Ar():null}}function Pc(e){const{history:t,location:n}=window,r={value:ri(e,n)},s={value:t.state};s.value||l(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(i,u,c){const f=e.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+i:bc()+e+i;try{t[c?"replaceState":"pushState"](u,"",h),s.value=u}catch(d){console.error(d),n[c?"replace":"assign"](h)}}function o(i,u){l(i,de({},t.state,bl(s.value.back,i,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=i}function a(i,u){const c=de({},s.value,t.state,{forward:i,scroll:Ar()});l(c.current,c,!0),l(i,de({},bl(r.value,i,null),{position:c.position+1},u),!1),r.value=i}return{location:r,state:s,push:a,replace:o}}function Ac(e){e=lc(e);const t=Pc(e),n=Cc(e,t.state,t.location,t.replace);function r(l,o=!0){o||n.pauseListeners(),history.go(l)}const s=de({location:"",base:e,go:r,createHref:ic.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}let Wt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Me=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Me||{});const wc={type:Wt.Static,value:""},Sc=/[a-zA-Z0-9_]/;function xc(e){if(!e)return[[]];if(e==="/")return[[wc]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(d){throw new Error(`ERR (${n})/"${u}": ${d}`)}let n=Me.Static,r=n;const s=[];let l;function o(){l&&s.push(l),l=[]}let a=0,i,u="",c="";function f(){u&&(n===Me.Static?l.push({type:Wt.Static,value:u}):n===Me.Param||n===Me.ParamRegExp||n===Me.ParamRegExpEnd?(l.length>1&&(i==="*"||i==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:Wt.Param,value:u,regexp:c,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):t("Invalid state to consume buffer"),u="")}function h(){u+=i}for(;a<e.length;){if(i=e[a++],i==="\\"&&n!==Me.ParamRegExp){r=n,n=Me.EscapeNext;continue}switch(n){case Me.Static:i==="/"?(u&&f(),o()):i===":"?(f(),n=Me.Param):h();break;case Me.EscapeNext:h(),n=r;break;case Me.Param:i==="("?n=Me.ParamRegExp:Sc.test(i)?h():(f(),n=Me.Static,i!=="*"&&i!=="?"&&i!=="+"&&a--);break;case Me.ParamRegExp:i===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+i:n=Me.ParamRegExpEnd:c+=i;break;case Me.ParamRegExpEnd:f(),n=Me.Static,i!=="*"&&i!=="?"&&i!=="+"&&a--,c="";break;default:t("Unknown state");break}}return n===Me.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}const Cl="[^/]+?",kc={sensitive:!1,strict:!1,start:!0,end:!0};var ze=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(ze||{});const _c=/[.+*?^${}()[\]/\\]/g;function Ec(e,t){const n=de({},kc,t),r=[];let s=n.start?"^":"";const l=[];for(const u of e){const c=u.length?[]:[ze.Root];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const h=u[f];let d=ze.Segment+(n.sensitive?ze.BonusCaseSensitive:0);if(h.type===Wt.Static)f||(s+="/"),s+=h.value.replace(_c,"\\$&"),d+=ze.Static;else if(h.type===Wt.Param){const{value:b,repeatable:C,optional:P,regexp:E}=h;l.push({name:b,repeatable:C,optional:P});const _=E||Cl;if(_!==Cl){d+=ze.BonusCustomRegExp;try{`${_}`}catch(S){throw new Error(`Invalid custom RegExp for param "${b}" (${_}): `+S.message)}}let T=C?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;f||(T=P&&u.length<2?`(?:/${T})`:"/"+T),P&&(T+="?"),s+=T,d+=ze.Dynamic,P&&(d+=ze.BonusOptional),C&&(d+=ze.BonusRepeatable),_===".*"&&(d+=ze.BonusWildcard)}c.push(d)}r.push(c)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=ze.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const c=u.match(o),f={};if(!c)return null;for(let h=1;h<c.length;h++){const d=c[h]||"",b=l[h-1];f[b.name]=d&&b.repeatable?d.split("/"):d}return f}function i(u){let c="",f=!1;for(const h of e){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const d of h)if(d.type===Wt.Static)c+=d.value;else if(d.type===Wt.Param){const{value:b,repeatable:C,optional:P}=d,E=b in u?u[b]:"";if(at(E)&&!C)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const _=at(E)?E.join("/"):E;if(!_)if(P)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${b}"`);c+=_}}return c||"/"}return{re:o,score:r,keys:l,parse:a,stringify:i}}function Rc(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===ze.Static+ze.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===ze.Static+ze.Segment?1:-1:0}function si(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const l=Rc(r[n],s[n]);if(l)return l;n++}if(Math.abs(s.length-r.length)===1){if(Pl(r))return 1;if(Pl(s))return-1}return s.length-r.length}function Pl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Mc={strict:!1,end:!0,sensitive:!1};function Tc(e,t,n){const r=Ec(xc(e.path),n),s=de(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Bc(e,t){const n=[],r=new Map;t=hl(Mc,t);function s(f){return r.get(f)}function l(f,h,d){const b=!d,C=wl(f);C.aliasOf=d&&d.record;const P=hl(t,f),E=[C];if("alias"in f){const S=typeof f.alias=="string"?[f.alias]:f.alias;for(const B of S)E.push(wl(de({},C,{components:d?d.record.components:C.components,path:B,aliasOf:d?d.record:C})))}let _,T;for(const S of E){const{path:B}=S;if(h&&B[0]!=="/"){const K=h.record.path,Q=K[K.length-1]==="/"?"":"/";S.path=h.record.path+(B&&Q+B)}if(_=Tc(S,h,P),d?d.alias.push(_):(T=T||_,T!==_&&T.alias.push(_),b&&f.name&&!Sl(_)&&o(f.name)),li(_)&&i(_),C.children){const K=C.children;for(let Q=0;Q<K.length;Q++)l(K[Q],_,d&&d.children[Q])}d=d||_}return T?()=>{o(T)}:Sn}function o(f){if(ti(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function i(f){const h=Ic(f,n);n.splice(h,0,f),f.record.name&&!Sl(f)&&r.set(f.record.name,f)}function u(f,h){let d,b={},C,P;if("name"in f&&f.name){if(d=r.get(f.name),!d)throw cn(_e.MATCHER_NOT_FOUND,{location:f});P=d.record.name,b=de(Al(h.params,d.keys.filter(T=>!T.optional).concat(d.parent?d.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),f.params&&Al(f.params,d.keys.map(T=>T.name))),C=d.stringify(b)}else if(f.path!=null)C=f.path,d=n.find(T=>T.re.test(C)),d&&(b=d.parse(C),P=d.record.name);else{if(d=h.name?r.get(h.name):n.find(T=>T.re.test(h.path)),!d)throw cn(_e.MATCHER_NOT_FOUND,{location:f,currentLocation:h});P=d.record.name,b=de({},h.params,f.params),C=d.stringify(b)}const E=[];let _=d;for(;_;)E.unshift(_.record),_=_.parent;return{name:P,path:C,params:b,matched:E,meta:Oc(E)}}e.forEach(f=>l(f));function c(){n.length=0,r.clear()}return{addRoute:l,resolve:u,removeRoute:o,clearRoutes:c,getRoutes:a,getRecordMatcher:s}}function Al(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function wl(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Nc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Nc(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Sl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Oc(e){return e.reduce((t,n)=>de(t,n.meta),{})}function Ic(e,t){let n=0,r=t.length;for(;n!==r;){const l=n+r>>1;si(e,t[l])<0?r=l:n=l+1}const s=Hc(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function Hc(e){let t=e;for(;t=t.parent;)if(li(t)&&si(e,t)===0)return t}function li({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function xl(e){const t=lt(Es),n=lt(Rs),r=ye(()=>{const i=F(e.to);return t.resolve(i)}),s=ye(()=>{const{matched:i}=r.value,{length:u}=i,c=i[u-1],f=n.matched;if(!c||!f.length)return-1;const h=f.findIndex(un.bind(null,c));if(h>-1)return h;const d=kl(i[u-2]);return u>1&&kl(c)===d&&f[f.length-1].path!==d?f.findIndex(un.bind(null,i[u-2])):h}),l=ye(()=>s.value>-1&&Gc(n.params,r.value.params)),o=ye(()=>s.value>-1&&s.value===n.matched.length-1&&ei(n.params,r.value.params));function a(i={}){if(Fc(i)){const u=t[F(e.replace)?"replace":"push"](F(e.to)).catch(Sn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:ye(()=>r.value.href),isActive:l,isExactActive:o,navigate:a}}function Dc(e){return e.length===1?e[0]:e}const Lc=vo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:xl,setup(e,{slots:t}){const n=Lt(xl(e)),{options:r}=lt(Es),s=ye(()=>({[_l(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[_l(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&Dc(t.default(n));return e.custom?l:Bn("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},l)}}}),$c=Lc;function Fc(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Gc(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!at(s)||s.length!==r.length||r.some((l,o)=>l.valueOf()!==s[o].valueOf()))return!1}return!0}function kl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const _l=(e,t,n)=>e??t??n,jc=vo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=lt(ls),s=ye(()=>e.route||r.value),l=lt(yl,0),o=ye(()=>{let u=F(l);const{matched:c}=s.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),a=ye(()=>s.value.matched[o.value]);Kn(yl,ye(()=>o.value+1)),Kn(vc,a),Kn(ls,s);const i=se();return Jt(()=>[i.value,a.value,e.name],([u,c,f],[h,d,b])=>{c&&(c.instances[f]=u,d&&d!==c&&u&&u===h&&(c.leaveGuards.size||(c.leaveGuards=d.leaveGuards),c.updateGuards.size||(c.updateGuards=d.updateGuards))),u&&c&&(!d||!un(c,d)||!h)&&(c.enterCallbacks[f]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=s.value,c=e.name,f=a.value,h=f&&f.components[c];if(!h)return El(n.default,{Component:h,route:u});const d=f.props[c],b=d?d===!0?u.params:typeof d=="function"?d(u):d:null,P=Bn(h,de({},b,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(f.instances[c]=null)},ref:i}));return El(n.default,{Component:P,route:u})||P}}});function El(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Vc=jc;function zc(e){const t=Bc(e.routes,e),n=e.parseQuery||gc,r=e.stringifyQuery||vl,s=e.history,l=pn(),o=pn(),a=pn(),i=Jr(Nt);let u=Nt;tn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Ir.bind(null,x=>""+x),f=Ir.bind(null,Xu),h=Ir.bind(null,On);function d(x,$){let H,V;return ti(x)?(H=t.getRecordMatcher(x),V=$):V=x,t.addRoute(V,H)}function b(x){const $=t.getRecordMatcher(x);$&&t.removeRoute($)}function C(){return t.getRoutes().map(x=>x.record)}function P(x){return!!t.getRecordMatcher(x)}function E(x,$){if($=de({},$||i.value),typeof x=="string"){const y=Hr(n,x,$.path),w=t.resolve({path:y.path},$),k=s.createHref(y.fullPath);return de(y,w,{params:h(w.params),hash:On(y.hash),redirectedFrom:void 0,href:k})}let H;if(x.path!=null)H=de({},x,{path:Hr(n,x.path,$.path).path});else{const y=de({},x.params);for(const w in y)y[w]==null&&delete y[w];H=de({},x,{params:f(y)}),$.params=f($.params)}const V=t.resolve(H,$),Z=x.hash||"";V.params=c(h(V.params));const g=tc(r,de({},x,{hash:Ju(Z),path:V.path})),v=s.createHref(g);return de({fullPath:g,hash:Z,query:r===vl?mc(x.query):x.query||{}},V,{redirectedFrom:void 0,href:v})}function _(x){return typeof x=="string"?Hr(n,x,i.value.path):de({},x)}function T(x,$){if(u!==x)return cn(_e.NAVIGATION_CANCELLED,{from:$,to:x})}function S(x){return Q(x)}function B(x){return S(de(_(x),{replace:!0}))}function K(x,$){const H=x.matched[x.matched.length-1];if(H&&H.redirect){const{redirect:V}=H;let Z=typeof V=="function"?V(x,$):V;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=_(Z):{path:Z},Z.params={}),de({query:x.query,hash:x.hash,params:Z.path!=null?{}:x.params},Z)}}function Q(x,$){const H=u=E(x),V=i.value,Z=x.state,g=x.force,v=x.replace===!0,y=K(H,V);if(y)return Q(de(_(y),{state:typeof y=="object"?de({},Z,y.state):Z,force:g,replace:v}),$||H);const w=H;w.redirectedFrom=$;let k;return!g&&nc(r,V,H)&&(k=cn(_e.NAVIGATION_DUPLICATED,{to:w,from:V}),Ke(V,V,!0,!1)),(k?Promise.resolve(k):ge(w,V)).catch(A=>Ct(A)?Ct(A,_e.NAVIGATION_GUARD_REDIRECT)?A:rt(A):oe(A,w,V)).then(A=>{if(A){if(Ct(A,_e.NAVIGATION_GUARD_REDIRECT))return Q(de({replace:v},_(A.to),{state:typeof A.to=="object"?de({},Z,A.to.state):Z,force:g}),$||w)}else A=He(w,V,!0,v,Z);return Re(w,V,A),A})}function ie(x,$){const H=T(x,$);return H?Promise.reject(H):Promise.resolve()}function Pe(x){const $=Bt.values().next().value;return $&&typeof $.runWithContext=="function"?$.runWithContext(x):x()}function ge(x,$){let H;const[V,Z,g]=yc(x,$);H=Lr(V.reverse(),"beforeRouteLeave",x,$);for(const y of V)y.leaveGuards.forEach(w=>{H.push(It(w,x,$))});const v=ie.bind(null,x,$);return H.push(v),Ge(H).then(()=>{H=[];for(const y of l.list())H.push(It(y,x,$));return H.push(v),Ge(H)}).then(()=>{H=Lr(Z,"beforeRouteUpdate",x,$);for(const y of Z)y.updateGuards.forEach(w=>{H.push(It(w,x,$))});return H.push(v),Ge(H)}).then(()=>{H=[];for(const y of g)if(y.beforeEnter)if(at(y.beforeEnter))for(const w of y.beforeEnter)H.push(It(w,x,$));else H.push(It(y.beforeEnter,x,$));return H.push(v),Ge(H)}).then(()=>(x.matched.forEach(y=>y.enterCallbacks={}),H=Lr(g,"beforeRouteEnter",x,$,Pe),H.push(v),Ge(H))).then(()=>{H=[];for(const y of o.list())H.push(It(y,x,$));return H.push(v),Ge(H)}).catch(y=>Ct(y,_e.NAVIGATION_CANCELLED)?y:Promise.reject(y))}function Re(x,$,H){a.list().forEach(V=>Pe(()=>V(x,$,H)))}function He(x,$,H,V,Z){const g=T(x,$);if(g)return g;const v=$===Nt,y=tn?history.state:{};H&&(V||v?s.replace(x.fullPath,de({scroll:v&&y&&y.scroll},Z)):s.push(x.fullPath,Z)),i.value=x,Ke(x,$,H,v),rt()}let Fe;function Ae(){Fe||(Fe=s.listen((x,$,H)=>{if(!ut.listening)return;const V=E(x),Z=K(V,ut.currentRoute.value);if(Z){Q(de(Z,{replace:!0,force:!0}),V).catch(Sn);return}u=V;const g=i.value;tn&&cc(ml(g.fullPath,H.delta),Ar()),ge(V,g).catch(v=>Ct(v,_e.NAVIGATION_ABORTED|_e.NAVIGATION_CANCELLED)?v:Ct(v,_e.NAVIGATION_GUARD_REDIRECT)?(Q(de(_(v.to),{force:!0}),V).then(y=>{Ct(y,_e.NAVIGATION_ABORTED|_e.NAVIGATION_DUPLICATED)&&!H.delta&&H.type===rs.pop&&s.go(-1,!1)}).catch(Sn),Promise.reject()):(H.delta&&s.go(-H.delta,!1),oe(v,V,g))).then(v=>{v=v||He(V,g,!1),v&&(H.delta&&!Ct(v,_e.NAVIGATION_CANCELLED)?s.go(-H.delta,!1):H.type===rs.pop&&Ct(v,_e.NAVIGATION_ABORTED|_e.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),Re(V,g,v)}).catch(Sn)}))}let qe=pn(),we=pn(),ue;function oe(x,$,H){rt(x);const V=we.list();return V.length?V.forEach(Z=>Z(x,$,H)):console.error(x),Promise.reject(x)}function et(){return ue&&i.value!==Nt?Promise.resolve():new Promise((x,$)=>{qe.add([x,$])})}function rt(x){return ue||(ue=!x,Ae(),qe.list().forEach(([$,H])=>x?H(x):$()),qe.reset()),x}function Ke(x,$,H,V){const{scrollBehavior:Z}=e;if(!tn||!Z)return Promise.resolve();const g=!H&&fc(ml(x.fullPath,0))||(V||!H)&&history.state&&history.state.scroll||null;return tt().then(()=>Z(x,$,g)).then(v=>v&&uc(v)).catch(v=>oe(v,x,$))}const Te=x=>s.go(x);let yt;const Bt=new Set,ut={currentRoute:i,listening:!0,addRoute:d,removeRoute:b,clearRoutes:t.clearRoutes,hasRoute:P,getRoutes:C,resolve:E,options:e,push:S,replace:B,go:Te,back:()=>Te(-1),forward:()=>Te(1),beforeEach:l.add,beforeResolve:o.add,afterEach:a.add,onError:we.add,isReady:et,install(x){x.component("RouterLink",$c),x.component("RouterView",Vc),x.config.globalProperties.$router=ut,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>F(i)}),tn&&!yt&&i.value===Nt&&(yt=!0,S(s.location).catch(V=>{}));const $={};for(const V in Nt)Object.defineProperty($,V,{get:()=>i.value[V],enumerable:!0});x.provide(Es,ut),x.provide(Rs,lo($)),x.provide(ls,i);const H=x.unmount;Bt.add(x),x.unmount=function(){Bt.delete(x),Bt.size<1&&(u=Nt,Fe&&Fe(),Fe=null,i.value=Nt,yt=!1,ue=!1),H()}}};function Ge(x){return x.reduce(($,H)=>$.then(()=>Pe(H)),Promise.resolve())}return ut}function oi(e){return lt(Rs)}/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=e=>e==="";/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=e=>{const t=Wc(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Zt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=Symbol("lucide-icons");function Jc(){return lt(Kc,{})}/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=({name:e,iconNode:t,"icon-node":n,absoluteStrokeWidth:r,"absolute-stroke-width":s,strokeWidth:l,"stroke-width":o,size:a,color:i,...u},{slots:c})=>{const{size:f,color:h,strokeWidth:d=2,absoluteStrokeWidth:b=!1,class:C=""}=Jc(),P=ye(()=>{const E=Rl(r)||Rl(s)||r===!0||s===!0||b===!0,_=l||o||d||Zt["stroke-width"];return E?Number(_)*24/Number(a??f??Zt.width):_});return Bn("svg",{...Zt,...u,width:a??f??Zt.width,height:a??f??Zt.height,stroke:i??h??Zt.stroke,"stroke-width":P.value,class:Uc("lucide",C,...e?[`lucide-${Ml(qc(e))}-icon`,`lucide-${Ml(e)}`]:["lucide-icon"])},[...(t??n??[]).map(E=>Bn(...E)),...c.default?[c.default()]:[]])};/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=(e,t)=>(n,{slots:r,attrs:s})=>Bn(Yc,{...s,...n,iconNode:t,name:e},r.default?{default:r.default}:void 0);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"m21 8-4-4-4 4",key:"1c9v7m"}],["path",{d:"M17 4v16",key:"7dpous"}]],Xc=X("arrow-down-up",Qc);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],e1=X("arrow-left",Zc);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],n1=X("arrow-up-right",t1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]],s1=X("binary",r1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],o1=X("braces",l1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],os=X("check",i1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]],ir=X("clipboard",a1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6h4",key:"135r8i"}]],c1=X("clock-3",u1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],d1=X("clock",f1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],p1=X("cloud-upload",h1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14",key:"ron5a4"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2",key:"7s9ehn"}]],m1=X("crop",g1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],y1=X("eraser",v1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]],C1=X("file-image",b1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],ii=X("file-text",P1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=[["path",{d:"M12 22h6a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6",key:"15usau"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M3 16v-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V16",key:"s1gz5"}],["path",{d:"M6 22h2",key:"194x9m"}],["path",{d:"M7 14v8",key:"11ixej"}]],w1=X("file-type-corner",A1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=[["path",{d:"m17 3-5 5-5-5h10",key:"1ftt6x"}],["path",{d:"m17 21-5-5-5 5h10",key:"1m0wmu"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]],Tl=X("flip-vertical-2",S1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=[["path",{d:"m3 7 5 5-5 5V7",key:"couhi7"}],["path",{d:"m21 7-5 5 5 5V7",key:"6ouia7"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]],Bl=X("flip-horizontal-2",x1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],$r=X("folder-open",k1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]],E1=X("git-fork",_1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],is=X("grid-3x3",R1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],T1=X("heart",M1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],N1=X("image-plus",B1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],I1=X("image",O1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],D1=X("key-round",H1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],$1=X("languages",L1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=[["path",{d:"M13 5h8",key:"a7qcls"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}]],Nl=X("list-checks",F1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]],j1=X("lock-keyhole",G1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],z1=X("maximize-2",V1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],W1=X("minimize-2",U1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],K1=X("moon",q1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=[["path",{d:"M11 7 6 2",key:"1jwth8"}],["path",{d:"M18.992 12H2.041",key:"xw1gg"}],["path",{d:"M21.145 18.38A3.34 3.34 0 0 1 20 16.5a3.3 3.3 0 0 1-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0 0 20 22a2 2 0 0 0 2-2.025c0-.58-.285-1.13-.855-1.595",key:"1nkol4"}],["path",{d:"m8.5 4.5 2.148-2.148a1.205 1.205 0 0 1 1.704 0l7.296 7.296a1.205 1.205 0 0 1 0 1.704l-7.592 7.592a3.615 3.615 0 0 1-5.112 0l-3.888-3.888a3.615 3.615 0 0 1 0-5.112L5.67 7.33",key:"1nk1rd"}]],Y1=X("paint-bucket",J1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=[["path",{d:"m14.622 17.897-10.68-2.913",key:"vj2p1u"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",key:"18tc5c"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",key:"ytzfxy"}]],X1=X("paintbrush",Q1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=[["path",{d:"m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12",key:"1y3wsu"}],["path",{d:"m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z",key:"110lr1"}],["path",{d:"m2 22 .414-.414",key:"jhxm08"}]],as=X("pipette",Z1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],tf=X("redo-2",ef);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Ms=X("refresh-cw",nf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=[["path",{d:"M14 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1",key:"zg1ipl"}],["path",{d:"M14 4a1 1 0 0 1 1-1",key:"dhj8ez"}],["path",{d:"M15 10a1 1 0 0 1-1-1",key:"1mnyi5"}],["path",{d:"M19 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1",key:"txt6k4"}],["path",{d:"M21 4a1 1 0 0 0-1-1",key:"sfs9ap"}],["path",{d:"M21 9a1 1 0 0 1-1 1",key:"mp6qeo"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5a2 2 0 0 1 2-2h2",key:"15xut4"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}]],sf=X("replace-all",rf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],of=X("save",lf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],uf=X("search",af);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ff=X("shield-check",cf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],ai=X("sparkles",df);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}]],pf=X("square-dashed",hf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],mf=X("square",gf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],yf=X("sun",vf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=[["path",{d:"M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z",key:"16rjxf"}],["path",{d:"M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193",key:"178nd4"}],["circle",{cx:"10.5",cy:"6.5",r:".5",fill:"currentColor",key:"12ikhr"}]],Ol=X("tags",bf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],Pf=X("undo-2",Cf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],wf=X("wand-sparkles",Af),Sf="/assets/fufu-3FWaQxCW.png",xf={class:"site-header"},kf={class:"brand-mark","aria-hidden":"true"},_f=["src"],Ef={class:"header-actions","aria-label":"页面操作"},Rf={class:"icon-button",href:"https://github.com/",target:"_blank",rel:"noreferrer","aria-label":"GitHub 仓库"},Mf=["aria-label"],Tf={class:"site-footer"},Bf={__name:"App",setup(e){const t=oi(),n=se(!1),r=ye(()=>t.params.slug==="pixel-beads");Dn(()=>{const l=localStorage.getItem("sakura-theme");n.value=l?l==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches,document.documentElement.classList.toggle("dark",n.value)});function s(){n.value=!n.value,document.documentElement.classList.toggle("dark",n.value),localStorage.setItem("sakura-theme",n.value?"dark":"light")}return(l,o)=>{const a=Yr("router-link"),i=Yr("router-view");return J(),re("div",{class:fe(["site-shell",{"site-shell-wide":r.value}])},[p("header",xf,[G(a,{class:"brand",to:"/","aria-label":"Sakura Tools 首页"},{default:mr(()=>[p("span",kf,[p("img",{src:F(Sf),alt:""},null,8,_f)]),o[1]||(o[1]=p("span",null,[p("strong",null,"Sakura"),p("small",null,"TOOLS / 工具箱")],-1))]),_:1}),p("nav",Ef,[p("a",Rf,[G(F(E1),{size:18})]),p("button",{class:"icon-button",type:"button","aria-label":n.value?"切换到浅色模式":"切换到深色模式",onClick:o[0]||(o[0]=u=>s())},[n.value?(J(),Ze(F(yf),{key:0,size:18})):(J(),Ze(F(K1),{key:1,size:18}))],8,Mf)])]),p("main",null,[G(i)]),p("footer",Tf,[o[4]||(o[4]=p("p",null,[p("span",{class:"status-dot"}),j(" 所有基础工具均在浏览器本地运行")],-1)),p("p",null,[o[2]||(o[2]=j("用 ",-1)),G(F(T1),{size:13,fill:"currentColor"}),o[3]||(o[3]=j(" 和 Go 构建",-1))])])],2)}}},Nf=["全部","开发","文本","图像","文档","生活"],us=[{slug:"json",index:"01",name:"JSON 格式化",summary:"格式化、压缩并验证 JSON 数据",category:"开发",icon:o1,color:"red",ready:!0},{slug:"base64",index:"02",name:"Base64 编解码",summary:"文本与 Base64 安全互转，支持 Unicode",category:"开发",icon:s1,color:"blue",ready:!0},{slug:"timestamp",index:"03",name:"时间戳转换",summary:"时间戳与本地日期双向转换",category:"开发",icon:c1,color:"ochre",ready:!0},{slug:"password",index:"04",name:"随机密码",summary:"在本地生成高强度随机密码",category:"生活",icon:D1,color:"green",ready:!0},{slug:"translate",index:"05",name:"在线翻译",summary:"快速翻译文本并保留原始格式",category:"文本",icon:$1,color:"blue"},{slug:"markdown",index:"06",name:"Markdown 编辑器",summary:"实时预览与导出 Markdown 文档",category:"文本",icon:ii,color:"ochre"},{slug:"image",index:"07",name:"图片处理",summary:"压缩、裁剪与格式转换",category:"图像",icon:I1,color:"green"},{slug:"pdf",index:"08",name:"PDF 工具",summary:"合并、拆分与页面整理",category:"文档",icon:w1,color:"red"},{slug:"pixel-beads",index:"09",name:"像素拼豆图纸",summary:"照片转网格图纸，精准匹配拼豆色号",category:"图像",icon:is,color:"special",ready:!0},{slug:"color",index:"10",name:"颜色工具",summary:"取色、转换与调色板生成",category:"开发",icon:as,color:"blue"}],Of=e=>us.find(t=>t.slug===e),If={class:"tool-index","aria-labelledby":"tool-index-heading"},Hf={class:"section-heading"},Df={class:"tool-count"},Lf={class:"tool-controls"},$f={class:"search-box"},Ff={class:"category-tabs","aria-label":"工具分类"},Gf=["onClick"],jf={key:0,class:"tool-grid"},Vf={class:"card-topline"},zf={class:"tool-number"},Uf={key:0,class:"soon-label"},Wf={class:"tool-symbol"},qf={class:"category-label"},Kf={key:1,class:"empty-state"},Jf={__name:"HomeView",setup(e){const t=se(""),n=se("全部"),r=se(null),s=ye(()=>{const o=t.value.trim().toLowerCase();return us.filter(a=>{const i=n.value==="全部"||a.category===n.value,u=!o||`${a.name} ${a.summary} ${a.category}`.toLowerCase().includes(o);return i&&u})});function l(o){var a,i;o.key==="/"&&((a=document.activeElement)==null?void 0:a.tagName)!=="INPUT"&&((i=document.activeElement)==null?void 0:i.tagName)!=="TEXTAREA"&&(o.preventDefault(),tt(()=>{var u;return(u=r.value)==null?void 0:u.focus()}))}return Dn(()=>window.addEventListener("keydown",l)),Ss(()=>window.removeEventListener("keydown",l)),(o,a)=>(J(),re(Ne,null,[a[4]||(a[4]=qa('<section class="home-intro"><div class="eyebrow"><span></span> SAKURA WORKBENCH · 2026</div><div class="intro-grid"><div><h1>需要什么，<br><em>拿来即用。</em></h1></div><div class="intro-copy"><p>一组简洁、快速、尊重隐私的在线工具。常用处理尽可能留在你的浏览器里完成。</p><div class="privacy-note"><span class="status-dot"></span> 无需登录 · 本地优先</div></div></div></section>',1)),p("section",If,[p("div",Hf,[a[2]||(a[2]=p("div",null,[p("p",{class:"section-kicker"},"TOOL INDEX"),p("h2",{id:"tool-index-heading"},"工具索引")],-1)),p("p",Df,U(String(s.value.length).padStart(2,"0"))+" / "+U(F(us).length),1)]),p("div",Lf,[p("label",$f,[G(F(uf),{size:19}),Se(p("input",{ref_key:"searchInput",ref:r,"onUpdate:modelValue":a[0]||(a[0]=i=>t.value=i),type:"search",placeholder:"搜索工具，例如 JSON、图片…"},null,512),[[Be,t.value]]),a[3]||(a[3]=p("kbd",null,"/",-1))]),p("div",Ff,[(J(!0),re(Ne,null,zt(F(Nf),i=>(J(),re("button",{key:i,type:"button",class:fe({active:n.value===i}),onClick:u=>n.value=i},U(i),11,Gf))),128))])]),s.value.length?(J(),re("div",jf,[(J(!0),re(Ne,null,zt(s.value,i=>(J(),Ze(tr(i.ready?"router-link":"article"),{key:i.slug,to:i.ready?`/tools/${i.slug}`:void 0,class:fe(["tool-card",[`tone-${i.color}`,{upcoming:!i.ready,featured:i.color==="special"}]])},{default:mr(()=>[p("div",Vf,[p("span",zf,U(i.index),1),i.ready?(J(),Ze(F(n1),{key:1,size:18})):(J(),re("span",Uf,"筹备中"))]),p("div",Wf,[(J(),Ze(tr(i.icon),{size:25,"stroke-width":1.8}))]),p("h3",null,U(i.name),1),p("p",null,U(i.summary),1),p("span",qf,U(i.category),1),i.color==="special"?(J(),Ze(F(ai),{key:0,class:"special-mark",size:17})):Ut("",!0)]),_:2},1032,["to","class"]))),128))])):(J(),re("div",Kf,[p("p",null,"没有找到“"+U(t.value)+"”",1),p("button",{type:"button",onClick:a[1]||(a[1]=i=>{t.value="",n.value="全部"})},"清除筛选")]))])],64))}},Yf={class:"tool-panel"},Qf={class:"tool-bar"},Xf={class:"action-group"},Zf={key:0,class:"error-message"},ed={key:1,class:"success-message"},td={__name:"JsonTool",setup(e){const t=se(`{
  "project": "sakura-tools",
  "status": "growing",
  "private": true
}`),n=se(""),r=se(!1);function s(a=!1){try{t.value=JSON.stringify(JSON.parse(t.value),null,a?0:2),n.value=""}catch(i){n.value=`第 ${l(i.message)} 行附近：${i.message}`}}function l(a){var u;const i=Number(((u=a.match(/position (\d+)/))==null?void 0:u[1])||0);return t.value.slice(0,i).split(`
`).length}async function o(){await navigator.clipboard.writeText(t.value),r.value=!0,setTimeout(()=>r.value=!1,1400)}return(a,i)=>(J(),re("div",Yf,[p("div",Qf,[p("div",Xf,[p("button",{class:"primary-button",type:"button",onClick:i[0]||(i[0]=u=>s(!1))},[G(F(wf),{size:16}),i[4]||(i[4]=j(" 格式化",-1))]),p("button",{class:"secondary-button",type:"button",onClick:i[1]||(i[1]=u=>s(!0))},[G(F(W1),{size:16}),i[5]||(i[5]=j(" 压缩",-1))])]),p("button",{class:"secondary-button",type:"button",onClick:o},[r.value?(J(),Ze(F(os),{key:0,size:16})):(J(),Ze(F(ir),{key:1,size:16})),j(" "+U(r.value?"已复制":"复制"),1)])]),i[7]||(i[7]=p("label",{class:"editor-label",for:"json-input"},"JSON INPUT",-1)),Se(p("textarea",{id:"json-input","onUpdate:modelValue":i[2]||(i[2]=u=>t.value=u),class:"code-editor",spellcheck:"false",onInput:i[3]||(i[3]=u=>n.value="")},null,544),[[Be,t.value]]),n.value?(J(),re("p",Zf,U(n.value),1)):(J(),re("p",ed,[G(F(os),{size:14}),i[6]||(i[6]=j(" 输入内容仅在当前浏览器中处理",-1))]))]))}},nd={class:"tool-panel split-editor"},rd={class:"editor-heading"},sd={class:"swap-mark"},ld={class:"editor-heading"},od={key:0,class:"error-message wide-message"},id={__name:"Base64Tool",setup(e){const t=se("你好，Sakura Tools!"),n=se(""),r=se("");function s(){n.value=btoa(String.fromCharCode(...new TextEncoder().encode(t.value))),r.value=""}function l(){try{t.value=new TextDecoder().decode(Uint8Array.from(atob(n.value.trim()),a=>a.charCodeAt(0))),r.value=""}catch{r.value="这不是有效的 Base64 内容，请检查后重试。"}}async function o(a){await navigator.clipboard.writeText(a)}return s(),(a,i)=>(J(),re("div",nd,[p("section",null,[p("div",rd,[i[5]||(i[5]=p("label",{for:"plain-text"},"原始文本",-1)),p("button",{type:"button",onClick:i[0]||(i[0]=u=>o(t.value))},[G(F(ir),{size:15}),i[4]||(i[4]=j("复制",-1))])]),Se(p("textarea",{id:"plain-text","onUpdate:modelValue":i[1]||(i[1]=u=>t.value=u),spellcheck:"false"},null,512),[[Be,t.value]]),p("button",{class:"primary-button full-button",type:"button",onClick:s},"编码为 Base64")]),p("div",sd,[G(F(Xc),{size:18})]),p("section",null,[p("div",ld,[i[7]||(i[7]=p("label",{for:"encoded-text"},"Base64",-1)),p("button",{type:"button",onClick:i[2]||(i[2]=u=>o(n.value))},[G(F(ir),{size:15}),i[6]||(i[6]=j("复制",-1))])]),Se(p("textarea",{id:"encoded-text","onUpdate:modelValue":i[3]||(i[3]=u=>n.value=u),spellcheck:"false"},null,512),[[Be,n.value]]),p("button",{class:"secondary-button full-button",type:"button",onClick:l},"解码为文本")]),r.value?(J(),re("p",od,U(r.value),1)):Ut("",!0)]))}},ad={class:"tool-panel timestamp-panel"},ud={class:"timestamp-grid"},cd={class:"unit-toggle"},fd={class:"timezone-note"},dd={__name:"TimestampTool",setup(e){const t=Date.now(),n=se(Math.floor(t/1e3)),r=se(l(t)),s=se("seconds");function l(c){const f=new Date(c);if(Number.isNaN(f.getTime()))return"";const h=f.getTimezoneOffset()*6e4;return new Date(f.getTime()-h).toISOString().slice(0,19)}function o(){const c=s.value==="seconds"?Number(n.value)*1e3:Number(n.value),f=l(c);f&&(r.value=f)}function a(){const c=new Date(r.value).getTime();Number.isNaN(c)||(n.value=s.value==="seconds"?Math.floor(c/1e3):c)}function i(){const c=Date.now();n.value=s.value==="seconds"?Math.floor(c/1e3):c,r.value=l(c)}const u=ye(()=>{const c=new Date(r.value);return Number.isNaN(c.getTime())?"请输入完整日期时间":c.toLocaleString("zh-CN",{dateStyle:"full",timeStyle:"medium"})});return(c,f)=>(J(),re("div",ad,[p("div",ud,[p("section",null,[f[4]||(f[4]=p("label",{for:"timestamp"},"时间戳",-1)),Se(p("input",{id:"timestamp","onUpdate:modelValue":f[0]||(f[0]=h=>n.value=h),type:"number",onInput:o},null,544),[[Be,n.value]]),p("div",cd,[p("button",{type:"button",class:fe({active:s.value==="seconds"}),onClick:f[1]||(f[1]=h=>{s.value="seconds",a()})},"秒",2),p("button",{type:"button",class:fe({active:s.value==="milliseconds"}),onClick:f[2]||(f[2]=h=>{s.value="milliseconds",a()})},"毫秒",2)])]),p("section",null,[f[5]||(f[5]=p("label",{for:"date-input"},"本地日期时间",-1)),Se(p("input",{id:"date-input","onUpdate:modelValue":f[3]||(f[3]=h=>r.value=h),type:"datetime-local",step:"1",onInput:a},null,544),[[Be,r.value]]),p("p",null,U(u.value),1)])]),p("button",{class:"secondary-button",type:"button",onClick:i},[G(F(Ms),{size:16}),f[6]||(f[6]=j(" 使用当前时间",-1))]),p("div",fd,[G(F(d1),{size:15}),j(" 当前浏览器时区："+U(Intl.DateTimeFormat().resolvedOptions().timeZone),1)])]))}},hd={class:"tool-panel password-panel"},pd={class:"password-output"},gd={class:"password-options"},md={class:"length-control"},vd={class:"check-grid"},yd={class:"password-footer"},bd={__name:"PasswordTool",setup(e){const t=se(20),n=se({upper:!0,lower:!0,numbers:!0,symbols:!0}),r=se(""),s=se(!1),l=ye(()=>{const i=Object.values(n.value).filter(Boolean).length,u=t.value*Math.log2(Math.max(i*18,2));return u>110?"很强":u>75?"强":u>45?"一般":"较弱"});function o(){const i=[];n.value.upper&&i.push("ABCDEFGHJKLMNPQRSTUVWXYZ"),n.value.lower&&i.push("abcdefghijkmnopqrstuvwxyz"),n.value.numbers&&i.push("23456789"),n.value.symbols&&i.push("!@#$%&*+-=?");const u=i.join("")||"abcdefghijkmnopqrstuvwxyz",c=crypto.getRandomValues(new Uint32Array(t.value));r.value=Array.from(c,f=>u[f%u.length]).join("")}async function a(){await navigator.clipboard.writeText(r.value),s.value=!0,setTimeout(()=>s.value=!1,1400)}return o(),(i,u)=>(J(),re("div",hd,[p("div",pd,[p("code",null,U(r.value),1),p("button",{type:"button",onClick:a},[s.value?(J(),Ze(F(os),{key:0,size:18})):(J(),Ze(F(ir),{key:1,size:18})),p("span",null,U(s.value?"已复制":"复制"),1)])]),p("div",gd,[p("label",md,[u[5]||(u[5]=j("密码长度 ",-1)),p("strong",null,U(t.value),1),Se(p("input",{"onUpdate:modelValue":u[0]||(u[0]=c=>t.value=c),type:"range",min:"8",max:"64",onInput:o},null,544),[[Be,t.value,void 0,{number:!0}]])]),p("div",vd,[p("label",null,[Se(p("input",{"onUpdate:modelValue":u[1]||(u[1]=c=>n.value.upper=c),type:"checkbox",onChange:o},null,544),[[Wn,n.value.upper]]),u[6]||(u[6]=j(" 大写字母",-1))]),p("label",null,[Se(p("input",{"onUpdate:modelValue":u[2]||(u[2]=c=>n.value.lower=c),type:"checkbox",onChange:o},null,544),[[Wn,n.value.lower]]),u[7]||(u[7]=j(" 小写字母",-1))]),p("label",null,[Se(p("input",{"onUpdate:modelValue":u[3]||(u[3]=c=>n.value.numbers=c),type:"checkbox",onChange:o},null,544),[[Wn,n.value.numbers]]),u[8]||(u[8]=j(" 数字",-1))]),p("label",null,[Se(p("input",{"onUpdate:modelValue":u[4]||(u[4]=c=>n.value.symbols=c),type:"checkbox",onChange:o},null,544),[[Wn,n.value.symbols]]),u[9]||(u[9]=j(" 特殊符号",-1))])])]),p("div",yd,[p("span",null,[u[10]||(u[10]=j("强度：",-1)),p("strong",null,U(l.value),1)]),p("button",{class:"primary-button",type:"button",onClick:o},[G(F(Ms),{size:16}),u[11]||(u[11]=j(" 重新生成",-1))])])]))}},Cd=`
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
`.trim();function Fr(e){return Number(e).toString(16).padStart(2,"0").toUpperCase()}function Pd(e,t){const n=a=>{var i;return((i=a.match(/^([A-Z]+)(\d+)$/))==null?void 0:i.slice(1))||[a,"0"]},[r,s]=n(e.code),[l,o]=n(t.code);return r.localeCompare(l)||Number(s)-Number(o)}const Ad={id:"mard-291-community",brand:"MARD",name:"MARD 291 色（社区校准）",source:"https://github.com/maxcleme/beadcolors",colors:Cd.split(`
`).map(e=>{const[t,n,r,s,l,o]=e.split(",");return{id:`mard-${t.toLowerCase()}`,code:t,name:n,hex:`#${Fr(r)}${Fr(s)}${Fr(l)}`,contributor:o}}).sort(Pd)};function Ts({id:e,brand:t,name:n,source:r,csv:s}){return{id:e,brand:t,name:n,source:r,colors:s.trim().split(/\r?\n/).map(l=>{const[o,a,i,u,c]=l.split(","),f=`#${[i,u,c].map(h=>Number(h).toString(16).padStart(2,"0")).join("")}`.toUpperCase();return{id:`${e}-${o.toLowerCase()}`,code:o,name:a,hex:f}})}}const wd=`
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
`,Sd=`
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
`,xd=`
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
`,kd=Ts({id:"hama-midi-community",brand:"Hama",name:"Hama Midi（92 色）",source:"https://github.com/maxcleme/beadcolors/blob/master/raw/hama.csv",csv:wd}),_d=Ts({id:"artkal-c-community",brand:"Artkal",name:"Artkal C 2.6 mm（174 色）",source:"https://github.com/maxcleme/beadcolors/blob/master/raw/artkal_c.csv",csv:Sd}),Ed=Ts({id:"artkal-s-community",brand:"Artkal",name:"Artkal S 5 mm（199 色）",source:"https://github.com/maxcleme/beadcolors/blob/master/raw/artkal_s.csv",csv:xd}),Rd={id:"perler-standard-2025",brand:"Perler",name:"Perler 标准色（屏幕参考）",source:"https://perler.com/content/uploaded_images/Perler_Bead-Color-Reference_2025.pdf",colors:[["white","White","白色","#F4F4EF"],["cream","Creme","奶油色","#F1E4C2"],["toasted-marshmallow","Toasted Marshmallow","烤棉花糖","#D8C5B4"],["sand","Sand","沙色","#D8B58A"],["tan","Tan","棕褐色","#B8875E"],["light-brown","Light Brown","浅棕色","#9A6547"],["brown","Brown","棕色","#613E2C"],["dark-brown","Dark Brown","深棕色","#3D2924"],["apricot","Apricot","杏色","#F3C3A5"],["peach","Peach","蜜桃色","#F3B38F"],["blush","Blush","腮红色","#ED927E"],["light-pink","Light Pink","浅粉色","#F3B7CD"],["bubblegum","Bubblegum","泡泡糖粉","#EE78A8"],["pink","Pink","粉色","#DA4E91"],["raspberry","Raspberry","覆盆子色","#A93064"],["plum","Plum","李子色","#73355E"],["red","Red","红色","#D83B3E"],["cranapple","Cranapple","蔓越莓红","#9D2735"],["hot-coral","Hot Coral","珊瑚红","#F06055"],["rust","Rust","铁锈红","#A9472D"],["brick","Brick","砖红色","#994D3A"],["orange","Orange","橙色","#F37932"],["cheddar","Cheddar","切达橙","#F5A623"],["butterscotch","Butterscotch","奶糖色","#D88B2C"],["rich-butter","Rich Butter","浓黄油色","#EBC65E"],["yellow","Yellow","黄色","#F5D547"],["pastel-yellow","Pastel Yellow","粉彩黄","#F5E88A"],["prickly-pear","Prickly Pear","仙人掌黄绿","#C8D746"],["kiwi-lime","Kiwi Lime","奇异果绿","#8BC34A"],["pastel-green","Pastel Green","粉彩绿","#A8D69B"],["light-green","Light Green","浅绿色","#70C486"],["green","Green","绿色","#3C9B61"],["shamrock","Shamrock","三叶草绿","#16845B"],["dark-green","Dark Green","深绿色","#236044"],["evergreen","Evergreen","常青绿","#194638"],["sage","Sage","鼠尾草绿","#94A58C"],["parrot-green","Parrot Green","鹦鹉绿","#31A88A"],["toothpaste","Toothpaste","薄荷色","#7DCEBE"],["turquoise","Turquoise","青绿色","#27A8B5"],["lagoon","Lagoon","潟湖蓝","#268F91"],["pastel-blue","Pastel Blue","粉彩蓝","#A7D7E8"],["light-blue","Light Blue","浅蓝色","#5CB9DD"],["periwinkle-blue","Periwinkle Blue","长春花蓝","#7587C9"],["blueberry-cream","Blueberry Cream","蓝莓奶油","#8EA7D4"],["cobalt","Cobalt","钴蓝色","#2866A3"],["dark-blue","Dark Blue","深蓝色","#264B84"],["midnight","Midnight","午夜蓝","#252C57"],["pastel-lavender","Pastel Lavender","粉彩薰衣草","#C1A7D7"],["purple","Purple","紫色","#76519B"],["magenta","Magenta","品红色","#B63F8D"],["light-grey","Light Grey","浅灰色","#C8C8C2"],["mist","Mist","雾灰色","#AEB8B5"],["grey","Grey","灰色","#858681"],["stone","Stone","石色","#77756F"],["dark-grey","Dark Grey","深灰色","#50524F"],["black","Black","黑色","#242424"]].map(([e,t,n,r])=>({id:e,code:t,name:n,hex:r}))},xn=[Ad,kd,_d,Ed,Rd];function Md(e){return xn.find(t=>t.id===e)||xn[0]}function Qt(e){const t=Number.parseInt(e.replace("#",""),16);return{r:t>>16&255,g:t>>8&255,b:t&255}}function Gr(e){const t=e/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4}function wr({r:e,g:t,b:n}){const r=Gr(e),s=Gr(t),l=Gr(n),o=(r*.4124+s*.3576+l*.1805)/.95047,a=r*.2126+s*.7152+l*.0722,i=(r*.0193+s*.1192+l*.9505)/1.08883,u=d=>d>.008856?Math.cbrt(d):7.787*d+16/116,c=u(o),f=u(a),h=u(i);return{l:116*f-16,a:500*(c-f),b:200*(f-h)}}function ui(e){return e.map((t,n)=>({...t,index:n,rgb:Qt(t.hex),lab:wr(Qt(t.hex))}))}function Bs(e,t){const n=Ae=>Ae*Math.PI/180,r=Ae=>Ae*180/Math.PI,s=Math.hypot(e.a,e.b),l=Math.hypot(t.a,t.b),o=(s+l)/2,a=.5*(1-Math.sqrt(o**7/(o**7+25**7))),i=(1+a)*e.a,u=(1+a)*t.a,c=Math.hypot(i,e.b),f=Math.hypot(u,t.b),h=(Ae,qe)=>{const we=r(Math.atan2(qe,Ae));return we>=0?we:we+360},d=h(i,e.b),b=h(u,t.b),C=t.l-e.l,P=f-c;let E=b-d;c*f===0?E=0:E>180?E-=360:E<-180&&(E+=360);const _=2*Math.sqrt(c*f)*Math.sin(n(E/2)),T=(e.l+t.l)/2,S=(c+f)/2;let B=d+b;c*f===0?B=d+b:Math.abs(d-b)<=180?B/=2:B<360?B=(B+360)/2:B=(B-360)/2;const K=1-.17*Math.cos(n(B-30))+.24*Math.cos(n(2*B))+.32*Math.cos(n(3*B+6))-.2*Math.cos(n(4*B-63)),Q=1+.015*(T-50)**2/Math.sqrt(20+(T-50)**2),ie=1+.045*S,Pe=1+.015*S*K,ge=-2*Math.sqrt(S**7/(S**7+25**7))*Math.sin(n(60*Math.exp(-(((B-275)/25)**2)))),Re=C/Q,He=P/ie,Fe=_/Pe;return Math.sqrt(Re**2+He**2+Fe**2+ge*He*Fe)}function Td(e,t){const n=wr(e),r=Math.hypot(n.a,n.b);let s=0,l=Number.POSITIVE_INFINITY;for(const o of t){const a=Math.hypot(o.lab.a,o.lab.b),i=r>7&&a<r*.32?(r-a)*.18:0,u=Bs(n,o.lab)+i;u<l&&(l=u,s=o.index)}return s}function Bd(e,t,n,r,s,l={}){var f,h;if(!e||!(t!=null&&t.length))return;const o=l.cellSize||18,a=l.showGrid!==!1,i=l.showCodes===!0,u=l.mode||"pixel";e.width=n*o,e.height=r*o;const c=e.getContext("2d");c.clearRect(0,0,e.width,e.height),c.fillStyle=l.background||"#f4f1eb",c.fillRect(0,0,e.width,e.height);for(let d=0;d<r;d+=1)for(let b=0;b<n;b+=1){const C=t[d*n+b];if(C<0||!s[C])continue;const{hex:P}=s[C],E=b*o+o/2,_=d*o+o/2;if(u==="pixel"||o<9)c.fillStyle=P,c.fillRect(b*o,d*o,o,o);else{c.beginPath(),c.arc(E,_,o*.42,0,Math.PI*2),c.fillStyle=P,c.fill();const T=Qt(P),S=(T.r*299+T.g*587+T.b*114)/1e3;c.beginPath(),c.arc(E,_,Math.max(1,o*.105),0,Math.PI*2),c.fillStyle=S>170?"rgba(40,36,32,.24)":"rgba(255,255,255,.45)",c.fill()}}if(i&&o>=12){c.textAlign="center",c.textBaseline="middle",c.font=`700 ${Math.max(6,Math.floor(o*.34))}px system-ui, sans-serif`;for(let d=0;d<r;d+=1)for(let b=0;b<n;b+=1){const C=t[d*n+b],P=s[C];if(!P)continue;const E=Qt(P.hex),_=(E.r*299+E.g*587+E.b*114)/1e3;c.fillStyle=_>158?"#25221f":"#ffffff",c.fillText(P.code,b*o+o/2,d*o+o/2+.5)}}if(a){c.lineWidth=1;for(let d=0;d<=n;d+=1)c.beginPath(),c.moveTo(d*o+.5,0),c.lineTo(d*o+.5,e.height),c.strokeStyle=d%10===0?"rgba(35,33,30,.42)":d%5===0?"rgba(35,33,30,.23)":"rgba(35,33,30,.09)",c.stroke();for(let d=0;d<=r;d+=1)c.beginPath(),c.moveTo(0,d*o+.5),c.lineTo(e.width,d*o+.5),c.strokeStyle=d%10===0?"rgba(35,33,30,.42)":d%5===0?"rgba(35,33,30,.23)":"rgba(35,33,30,.09)",c.stroke()}if(((f=l.symmetry)!=null&&f.horizontal||(h=l.symmetry)!=null&&h.vertical)&&(c.save(),c.setLineDash([6,4]),c.strokeStyle="rgba(218, 92, 108, .9)",c.lineWidth=1.5,l.symmetry.horizontal&&(c.beginPath(),c.moveTo(e.width/2,0),c.lineTo(e.width/2,e.height),c.stroke()),l.symmetry.vertical&&(c.beginPath(),c.moveTo(0,e.height/2),c.lineTo(e.width,e.height/2),c.stroke()),c.restore()),l.selection){const d=l.selection,b=Math.min(d.startColumn,d.endColumn),C=Math.min(d.startRow,d.endRow),P=Math.abs(d.endColumn-d.startColumn)+1,E=Math.abs(d.endRow-d.startRow)+1;c.save(),c.setLineDash([5,3]),c.lineWidth=2,c.strokeStyle="#da5c6c",c.strokeRect(b*o+1,C*o+1,P*o-2,E*o-2),c.restore()}}function $n(e,t){const n=new Map;for(const r of e||[])r>=0&&n.set(r,(n.get(r)||0)+1);return[...n.entries()].map(([r,s])=>({...t[r],index:r,count:s})).sort((r,s)=>s.count-r.count)}function ci(e,t,n){return e?{left:Math.max(0,Math.min(e.startColumn,e.endColumn)),top:Math.max(0,Math.min(e.startRow,e.endRow)),right:Math.min(t-1,Math.max(e.startColumn,e.endColumn)),bottom:Math.min(n-1,Math.max(e.startRow,e.endRow))}:{left:0,top:0,right:t-1,bottom:n-1}}function Ns(e,t,n,r={}){const s=Math.floor(e/t),l=e%t,o=new Set([e]);return r.horizontal&&o.add(s*t+(t-l-1)),r.vertical&&o.add((n-s-1)*t+l),r.horizontal&&r.vertical&&o.add((n-s-1)*t+(t-l-1)),[...o]}function Nd(e,t,n,r,s,l={}){if(r<0||r>=e.length)return new Int16Array(e);const o=e[r];if(o===s)return new Int16Array(e);const a=new Int16Array(e),i=new Uint8Array(e.length),u=[r];i[r]=1;for(let c=0;c<u.length;c+=1){const f=u[c],h=Math.floor(f/t),d=f%t;for(const C of Ns(f,t,n,l))a[C]=s;const b=[d>0?f-1:-1,d<t-1?f+1:-1,h>0?f-t:-1,h<n-1?f+t:-1];for(const C of b)C>=0&&!i[C]&&e[C]===o&&(i[C]=1,u.push(C))}return a}function Od(e,t,n,r,s,l={}){const o=new Int16Array(e),{left:a,top:i,right:u,bottom:c}=ci(r,t,n);for(let f=i;f<=c;f+=1)for(let h=a;h<=u;h+=1){const d=f*t+h;for(const b of Ns(d,t,n,l))o[b]=s}return o}function Il(e,t,n){const r=new Int16Array(e);if(t===n)return r;for(let s=0;s<r.length;s+=1)r[s]===t&&(r[s]=n);return r}function Id(e,t,n,r,s=null){const l=new Int16Array(e),{left:o,top:a,right:i,bottom:u}=ci(s,t,n);for(let c=a;c<=u;c+=1)for(let f=o;f<=i;f+=1){const h=c*t+f,d=r==="horizontal"?i-(f-o):f,b=r==="vertical"?u-(c-a):c;l[b*t+d]=e[h]}return l}function fi(e,t,n){const r=$n(e,t),s=Math.max(2,Number(n)||t.length);if(r.length<=s)return new Int16Array(e);const l=r.slice(0,s),o=ui(l),a=new Map;for(const u of r.slice(s)){const c=wr(Qt(u.hex));let f=l[0].index,h=Number.POSITIVE_INFINITY;for(const d of o){const b=Bs(c,d.lab);b<h&&(h=b,f=l[d.index].index)}a.set(u.index,f)}const i=new Int16Array(e);for(let u=0;u<i.length;u+=1)a.has(i[u])&&(i[u]=a.get(i[u]));return i}function Hd(e,t,n,r=1){let s=new Int16Array(e);const l=[-1,0,1];for(let o=0;o<r;o+=1){const a=s,i=new Int16Array(a);for(let u=0;u<n;u+=1)for(let c=0;c<t;c+=1){const f=u*t+c,h=a[f];if(h<0)continue;const d=new Map;let b=0;for(const E of l)for(const _ of l){if(!_&&!E)continue;const T=c+_,S=u+E;if(T<0||S<0||T>=t||S>=n)continue;const B=a[S*t+T];B<0||(B===h&&(b+=1),d.set(B,(d.get(B)||0)+1))}const[C,P]=[...d.entries()].sort((E,_)=>_[1]-E[1])[0]||[];b<=1&&C!==void 0&&C!==h&&P>=4&&(i[f]=C)}s=i}return s}function Dd(e,t,n=8,r=6){const s=$n(e,t),l=new Map(s.map(a=>[a.index,wr(Qt(a.hex))])),o=[];for(let a=0;a<s.length;a+=1)for(let i=a+1;i<s.length;i+=1){const u=s[a],c=s[i],f=Bs(l.get(u.index),l.get(c.index));if(f>r)continue;const h=u.count<=c.count?u:c,d=h===u?c:u;o.push({source:h,target:d,distance:f})}return o.sort((a,i)=>a.distance-i.distance).slice(0,n)}async function Ld(e){return"createImageBitmap"in window?createImageBitmap(e,{imageOrientation:"from-image"}):new Promise((t,n)=>{const r=URL.createObjectURL(e),s=new Image;s.onload=()=>{URL.revokeObjectURL(r),t(s)},s.onerror=()=>{URL.revokeObjectURL(r),n(new Error("无法读取这张图片"))},s.src=r})}function di(e,t,n,r=1,s=50,l=50){const o=e/t;let a=e,i=t;o>n?a=t*n:i=e/n,a/=r,i/=r;const u=a/2+(e-a)*(s/100),c=i/2+(t-i)*(l/100);return{x:Math.max(0,Math.min(e-a,u-a/2)),y:Math.max(0,Math.min(t-i,c-i/2)),width:a,height:i}}function $d(e,t,n){if(!e||!t)return;const{columns:r,rows:s,zoom:l,focusX:o,focusY:a}=n,i=r/s;e.width=520,e.height=260;const u=di(t.width,t.height,i,l,o,a),c=e.getContext("2d");c.fillStyle="#23211e",c.fillRect(0,0,e.width,e.height);const f=Math.min(e.width,e.height*i),h=f/i,d=(e.width-f)/2,b=(e.height-h)/2;c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high",c.drawImage(t,u.x,u.y,u.width,u.height,d,b,f,h),c.strokeStyle="rgba(255,255,255,.55)",c.strokeRect(d+.5,b+.5,f-1,h-1)}function Fd(e,t,n){const{columns:r,rows:s,zoom:l,focusX:o,focusY:a}=t,i=4,u=document.createElement("canvas");u.width=r*i,u.height=s*i;const c=u.getContext("2d"),f=di(e.width,e.height,r/s,l,o,a);c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high",c.drawImage(e,f.x,f.y,f.width,f.height,0,0,u.width,u.height);const h=document.createElement("canvas");h.width=r,h.height=s;const d=h.getContext("2d",{willReadFrequently:!0});d.imageSmoothingEnabled=!0,d.imageSmoothingQuality="high",d.clearRect(0,0,r,s),d.drawImage(u,0,0,r,s);const b=d.getImageData(0,0,r,s).data,C=Gd(b,r,s,t),P=ui(n),E=new Int16Array(r*s);for(let _=0;_<E.length;_+=1){const T=_*4;E[_]=b[T+3]<48?-1:Td({r:C[T],g:C[T+1],b:C[T+2]},P)}return fi(E,n,t.maxColors)}function Gd(e,t,n,r){const s=(r.brightness??100)/100,l=(r.contrast??100)/100,o=(r.saturation??100)/100,a=(r.detail??0)/100,i=new Float32Array(e.length),u=h=>Math.max(0,Math.min(255,h));for(let h=0;h<e.length;h+=4){const d=e[h],b=e[h+1],C=e[h+2],P=d*.2126+b*.7152+C*.0722;i[h]=u(((P+(d-P)*o-128)*l+128)*s),i[h+1]=u(((P+(b-P)*o-128)*l+128)*s),i[h+2]=u(((P+(C-P)*o-128)*l+128)*s),i[h+3]=e[h+3]}if(a<=0)return i;const c=new Float32Array(i),f=[[-1,0],[1,0],[0,-1],[0,1]];for(let h=0;h<n;h+=1)for(let d=0;d<t;d+=1){const b=(h*t+d)*4;if(i[b+3]<48)continue;const C=[0,0,0];let P=0;for(const[E,_]of f){const T=d+E,S=h+_;if(T<0||S<0||T>=t||S>=n)continue;const B=(S*t+T)*4;i[B+3]<48||(C[0]+=i[B],C[1]+=i[B+1],C[2]+=i[B+2],P+=1)}if(P)for(let E=0;E<3;E+=1){const _=C[E]/P;c[b+E]=u(i[b+E]+(i[b+E]-_)*a)}}return c}const jr=595.28,Vr=841.89;function hi(e,t){const n=URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=t,r.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}function pi(e){const{r:t,g:n,b:r}=Qt(e);return(t*299+n*587+r*114)/1e3>158?"#26231f":"#ffffff"}function gn(e,t,n,r,s,l="#27241f"){e.font=s,e.fillStyle=l,e.textAlign="center",e.textBaseline="middle",e.fillText(t,n,r)}function gi(e,t,n,r,s={}){const l=s.startColumn||0,o=s.startRow||0,a=Math.min(t,s.endColumn??t),i=Math.min(n,s.endRow??n),u=a-l,c=i-o,f=s.cellSize||28,h=Math.max(30,Math.round(f*1.2)),d=s.titleHeight??58,b=s.footerHeight??26,C=document.createElement("canvas");C.width=h*2+u*f,C.height=d+h*2+c*f+b;const P=C.getContext("2d");P.fillStyle="#fbfaf7",P.fillRect(0,0,C.width,C.height),P.textAlign="left",P.textBaseline="middle",P.fillStyle="#24211d",P.font="700 20px system-ui, sans-serif",P.fillText(s.title||`${t} × ${n} 拼豆图纸`,h,d/2-4),s.subtitle&&(P.textAlign="right",P.font="12px system-ui, sans-serif",P.fillStyle="#6f6961",P.fillText(s.subtitle,C.width-h,d/2-4));const E=h,_=d+h,T=Math.max(7,Math.min(12,Math.floor(f*.36)));for(let S=o;S<i;S+=1)for(let B=l;B<a;B+=1){const K=B-l,Q=S-o,ie=E+K*f,Pe=_+Q*f,ge=r[e[S*t+B]];P.fillStyle=(ge==null?void 0:ge.hex)||"#ffffff",P.fillRect(ie,Pe,f,f),ge&&gn(P,ge.code,ie+f/2,Pe+f/2+.5,`700 ${T}px system-ui, sans-serif`,pi(ge.hex))}for(let S=0;S<=u;S+=1){const B=l+S,K=E+S*f+.5;P.beginPath(),P.moveTo(K,_),P.lineTo(K,_+c*f),P.strokeStyle=B%10===0?"#4d4943":B%5===0?"#77716a":"#c8c4bd",P.lineWidth=B%10===0?1.5:1,P.stroke()}for(let S=0;S<=c;S+=1){const B=o+S,K=_+S*f+.5;P.beginPath(),P.moveTo(E,K),P.lineTo(E+u*f,K),P.strokeStyle=B%10===0?"#4d4943":B%5===0?"#77716a":"#c8c4bd",P.lineWidth=B%10===0?1.5:1,P.stroke()}for(let S=0;S<u;S+=1){const B=String(l+S+1),K=E+S*f+f/2;gn(P,B,K,_-h/2,"600 11px system-ui, sans-serif","#56514b"),gn(P,B,K,_+c*f+h/2,"600 11px system-ui, sans-serif","#56514b")}for(let S=0;S<c;S+=1){const B=String(o+S+1),K=_+S*f+f/2;gn(P,B,E-h/2,K,"600 11px system-ui, sans-serif","#56514b"),gn(P,B,E+u*f+h/2,K,"600 11px system-ui, sans-serif","#56514b")}return C}function mi(e,t,n){const{x:r,y:s,width:l,columns:o=5,rowHeight:a=42}=n,i=10,u=(l-i*(o-1))/o;return t.forEach((c,f)=>{const h=f%o,d=Math.floor(f/o),b=r+h*(u+i),C=s+d*a;e.fillStyle="#ffffff",e.strokeStyle="#d4d0c9",e.lineWidth=1,e.fillRect(b,C,u,a-8),e.strokeRect(b+.5,C+.5,u-1,a-9);const P=Math.min(58,Math.max(42,u*.28));e.fillStyle=c.hex,e.fillRect(b,C,P,a-8),e.textBaseline="middle",e.font="700 12px system-ui, sans-serif",e.fillStyle=pi(c.hex),e.textAlign="center",e.fillText(c.code,b+P/2,C+(a-8)/2),e.textAlign="right",e.fillStyle="#37332e",e.font="600 12px system-ui, sans-serif",e.fillText(String(c.count),b+u-10,C+(a-8)/2)}),Math.ceil(t.length/o)*a}function jd(e,t,n,r,s={}){const l=$n(e,r),o=Math.max(22,Math.min(30,Math.floor(3600/Math.max(t,n)))),a=gi(e,t,n,r,{cellSize:o,title:`${t} × ${n} 拼豆图纸`,subtitle:s.paletteName||"",footerHeight:0}),i=Math.max(4,Math.min(16,Math.floor((a.width-54)/200))),u=Math.ceil(l.length/i),c=82,f=Math.max(90,u*42),h=document.createElement("canvas");h.width=a.width,h.height=a.height+c+f+26;const d=h.getContext("2d");d.fillStyle="#fbfaf7",d.fillRect(0,0,h.width,h.height),d.drawImage(a,0,0);const b=a.height+34;d.textAlign="left",d.textBaseline="middle",d.fillStyle="#24211d",d.font="700 22px system-ui, sans-serif";const C=l.reduce((P,E)=>P+E.count,0);return d.fillText(`拼豆数量统计（${C} 颗）`,32,b),d.font="12px system-ui, sans-serif",d.fillStyle="#6f6961",d.textAlign="right",d.fillText(`${l.length} 种颜色`,h.width-32,b),mi(d,l,{x:32,y:a.height+c,width:h.width-64,columns:i}),h}function Vd(e,t,n=""){const r=$n(e,t),s=96,l=[];for(let o=0;o<r.length;o+=s){const a=r.slice(o,o+s),i=document.createElement("canvas");i.width=900,i.height=1273;const u=i.getContext("2d");u.fillStyle="#fbfaf7",u.fillRect(0,0,i.width,i.height),u.fillStyle="#24211d",u.textAlign="left",u.textBaseline="middle",u.font="700 30px system-ui, sans-serif";const c=r.reduce((f,h)=>f+h.count,0);u.fillText(`拼豆数量统计（${c} 颗）`,52,62),u.font="15px system-ui, sans-serif",u.fillStyle="#6f6961",u.fillText(`${n} · ${r.length} 种颜色`,52,101),mi(u,a,{x:52,y:142,width:796,columns:4,rowHeight:43}),u.textAlign="right",u.font="14px system-ui, sans-serif",u.fillText(`统计表 ${Math.floor(o/s)+1} / ${Math.ceil(r.length/s)}`,848,1230),l.push(i)}return l}function zd(e){const t=atob(e.split(",")[1]),n=new Uint8Array(t.length);for(let r=0;r<t.length;r+=1)n[r]=t.charCodeAt(r);return n}function Ud(e){const t=new TextEncoder,n=new Map,r=e.map((u,c)=>`${3+c*3} 0 R`).join(" ");n.set(1,t.encode("<< /Type /Catalog /Pages 2 0 R >>")),n.set(2,t.encode(`<< /Type /Pages /Kids [${r}] /Count ${e.length} >>`)),e.forEach((u,c)=>{const f=3+c*3,h=f+1,d=f+2,b=zd(u.toDataURL("image/jpeg",.92)),C=Math.min((jr-30)/u.width,(Vr-30)/u.height),P=u.width*C,E=u.height*C,_=(jr-P)/2,T=(Vr-E)/2,S=t.encode(`q
${P.toFixed(2)} 0 0 ${E.toFixed(2)} ${_.toFixed(2)} ${T.toFixed(2)} cm
/Im${c} Do
Q`);n.set(f,t.encode(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${jr} ${Vr}] /Resources << /XObject << /Im${c} ${h} 0 R >> >> /Contents ${d} 0 R >>`));const B=t.encode(`<< /Type /XObject /Subtype /Image /Width ${u.width} /Height ${u.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${b.length} >>
stream
`),K=t.encode(`
endstream`),Q=new Uint8Array(B.length+b.length+K.length);Q.set(B),Q.set(b,B.length),Q.set(K,B.length+b.length),n.set(h,Q);const ie=t.encode(`<< /Length ${S.length} >>
stream
`),Pe=t.encode(`
endstream`),ge=new Uint8Array(ie.length+S.length+Pe.length);ge.set(ie),ge.set(S,ie.length),ge.set(Pe,ie.length+S.length),n.set(d,ge)});const s=[t.encode(`%PDF-1.4
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
%%EOF`),s.push(t.encode(i.join(""))),new Blob(s,{type:"application/pdf"})}function Wd(e,t,n,r,s,l={}){if(!(e!=null&&e.length))return;jd(e,t,n,r,l).toBlob(a=>{a&&hi(a,s)},"image/png")}function qd(e,t,n,r,s,l={}){if(!(e!=null&&e.length))return;const o=[],a=Math.max(8,Number(l.boardSize)||29),i=a,u=Math.ceil(t/a),c=Math.ceil(n/i);for(let f=0;f<c;f+=1)for(let h=0;h<u;h+=1)o.push(gi(e,t,n,r,{startColumn:h*a,endColumn:(h+1)*a,startRow:f*i,endRow:(f+1)*i,cellSize:32,title:`${t} × ${n} 拼豆图纸`,subtitle:`区域 ${h+1}/${u} · ${f+1}/${c}`}));o.push(...Vd(e,r,l.paletteName||"")),hi(Ud(o),s)}const vi=1;function Kd({cells:e,columns:t,rows:n,paletteId:r,settings:s,inventory:l}){return{type:"sakura-tools/pixel-beads",version:vi,savedAt:new Date().toISOString(),paletteId:r,grid:{columns:t,rows:n,cells:Array.from(e)},settings:{beadSize:s.beadSize,detail:s.detail,saturation:s.saturation,contrast:s.contrast,brightness:s.brightness,maxColors:s.maxColors},inventory:{...l}}}function Jd(e,t){var a,i;const n=JSON.parse(e);if((n==null?void 0:n.type)!=="sakura-tools/pixel-beads"||n.version!==vi)throw new Error("不是受支持的 Sakura Tools 拼豆工程文件");const r=t.find(u=>u.id===n.paletteId);if(!r)throw new Error("工程使用的色板在当前版本中不可用");const s=Number((a=n.grid)==null?void 0:a.columns),l=Number((i=n.grid)==null?void 0:i.rows);if(!Number.isInteger(s)||!Number.isInteger(l)||s<8||l<8||s>150||l>150)throw new Error("工程网格尺寸无效");if(!Array.isArray(n.grid.cells)||n.grid.cells.length!==s*l)throw new Error("工程网格数据不完整");const o=new Int16Array(n.grid.cells);if([...o].some(u=>u<-1||u>=r.colors.length))throw new Error("工程中包含无效色号");return{...n,palette:r,columns:s,rows:l,cells:o}}function Hl(e,t,n="application/json"){const r=new Blob([e],{type:n}),s=URL.createObjectURL(r),l=document.createElement("a");l.href=s,l.download=t,l.click(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function Yd(e,t){const n=[["色号","颜色","需要","已有","缺少"]];for(const r of e){const s=Math.max(0,Number(t[r.id])||0);n.push([r.code,r.name,r.count,s,Math.max(0,r.count-s)])}return`\uFEFF${n.map(r=>r.map(s=>`"${String(s).replaceAll('"','""')}"`).join(",")).join(`\r
`)}`}const Qd={class:"bead-studio"},Xd={class:"upload-symbol"},Zd=["disabled"],eh={key:0,class:"error-message"},th={class:"bead-flow","aria-label":"工作流程"},nh={class:"bead-workbench"},rh={class:"bead-sidebar bead-source-panel"},sh={class:"bead-panel-heading"},lh={key:1,class:"project-preview"},oh=["title"],ih={key:2,class:"error-message"},ah={class:"bead-field-row"},uh={class:"bead-size-presets","aria-label":"常用方形网格预设"},ch=["onClick"],fh={class:"bead-range"},dh={class:"bead-range"},hh={class:"bead-range"},ph={class:"bead-range compact-range"},gh={class:"bead-range compact-range"},mh={class:"bead-range compact-range"},vh={class:"bead-range compact-range"},yh={class:"bead-select"},bh={class:"bead-optimize-actions"},Ch=["disabled"],Ph=["disabled"],Ah={class:"bead-segmented"},wh={class:"bead-select"},Sh=["value"],xh=["disabled"],kh={class:"bead-editor-panel"},_h={class:"bead-toolbar"},Eh={class:"bead-tool-group","aria-label":"绘制工具"},Rh={class:"bead-tool-group compact"},Mh=["disabled","title"],Th=["disabled","title"],Bh={class:"canvas-zoom"},Nh={class:"preview-toggle","aria-label":"预览样式"},Oh={class:"bead-editor-actions"},Ih={class:"bead-canvas-status"},Hh={class:"bead-sidebar bead-color-panel"},Dh={class:"bead-panel-heading"},Lh={class:"bead-palette","aria-label":"拼豆色板"},$h=["title","onClick"],Fh={class:"bead-materials"},Gh={class:"bead-usage"},jh=["onClick","onKeydown"],Vh={title:"需要数量"},zh=["onUpdate:modelValue"],Uh={key:0},Wh={key:1,class:"enough"},qh={key:0,class:"merge-suggestions"},Kh=["onClick"],Jh={class:"bead-export"},Yh={class:"project-actions"},Qh={class:"local-processing"},Xh={__name:"PixelBeadsTool",setup(e){const t=se(null),n=se(null),r=se(null),s=se(null),l=se(null),o=Jr(null),a=se(""),i=se(""),u=se(!1),c=se(!1),f=Jr(new Int16Array),h=Lt({columns:0,rows:0}),d=Lt({columns:48,rows:48,zoom:1,focusX:50,focusY:50,detail:32,saturation:106,contrast:104,brightness:100,maxColors:0,beadSize:5,paletteId:xn[0].id}),b=se("brush"),C=se(0),P=se(16),E=se(!0),_=se(!1),T=se("pixel"),S=se(null),B=Lt({horizontal:!1,vertical:!1}),K=Lt({}),Q=se([]),ie=se([]);let Pe=null,ge=-1,Re=null,He=0;const Fe=[29,48,52,80,100],Ae=ye(()=>Md(d.paletteId)),qe=ye(()=>$n(f.value,Ae.value.colors)),we=ye(()=>qe.value.reduce((D,m)=>D+m.count,0)),ue=ye(()=>({width:(h.columns*d.beadSize/10).toFixed(1),height:(h.rows*d.beadSize/10).toFixed(1)})),oe=ye(()=>Q.value.length>0),et=ye(()=>ie.value.length>0),rt=ye(()=>Ae.value.colors[C.value]),Ke=ye(()=>Dd(f.value,Ae.value.colors)),Te=ye(()=>qe.value.reduce((D,m)=>{const ne=Math.max(0,Number(K[m.id])||0);return D+Math.max(0,m.count-ne)},0));function yt(){d.columns=Math.max(8,Math.min(150,Number(d.columns)||48)),d.rows=Math.max(8,Math.min(150,Number(d.rows)||48))}function Bt(D){d.columns=D,d.rows=D}async function ut(D){var m,ne;if(i.value="",!D||!["image/jpeg","image/png","image/webp"].includes(D.type)){i.value="请选择 JPG、PNG 或 WebP 图片";return}if(D.size>12*1024*1024){i.value="图片不能超过 12 MB";return}u.value=!0;try{(ne=(m=o.value)==null?void 0:m.close)==null||ne.call(m),o.value=await Ld(D),a.value=D.name,d.zoom=1,d.focusX=50,d.focusY=50,await tt(),$(),H()}catch(ae){i.value=ae.message||"图片读取失败"}finally{u.value=!1}}function Ge(D){var m;ut((m=D.target.files)==null?void 0:m[0]),D.target.value=""}function x(D){var m,ne;c.value=!1,ut((ne=(m=D.dataTransfer)==null?void 0:m.files)==null?void 0:ne[0])}function $(){o.value&&(yt(),$d(r.value,o.value,d))}function H(){if(o.value){yt(),u.value=!0;try{const D=Fd(o.value,d,Ae.value.colors);h.columns=d.columns,h.rows=d.rows,f.value=D,C.value=D.find(m=>m>=0)??0,Q.value=[],ie.value=[],tt(()=>{g(),Z()})}finally{u.value=!1}}}function V(){Bd(s.value,f.value,h.columns,h.rows,Ae.value.colors,{cellSize:P.value,showGrid:E.value,showCodes:_.value,mode:T.value,selection:S.value,symmetry:B})}function Z(){He||(He=requestAnimationFrame(()=>{He=0,V()}))}function g(){if(!l.value||!h.columns||!h.rows)return;const D=Math.max(240,l.value.clientWidth-56),m=Math.max(240,l.value.clientHeight-56);P.value=Math.max(4,Math.min(25,Math.floor(Math.min(D/h.columns,m/h.rows))))}function v(){Q.value=[...Q.value.slice(-39),new Int16Array(f.value)],ie.value=[]}function y(){oe.value&&(ie.value=[new Int16Array(f.value),...ie.value.slice(0,39)],f.value=Q.value[Q.value.length-1],Q.value=Q.value.slice(0,-1),tt(Z))}function w(){et.value&&(Q.value=[...Q.value.slice(-39),new Int16Array(f.value)],f.value=ie.value[0],ie.value=ie.value.slice(1),tt(Z))}function k(D){const m=s.value.getBoundingClientRect(),ne=(D.clientX-m.left)*(s.value.width/m.width),ae=(D.clientY-m.top)*(s.value.height/m.height),M=Math.floor(ne/P.value),te=Math.floor(ae/P.value);return M<0||te<0||M>=h.columns||te>=h.rows?-1:te*h.columns+M}function A(D){return{column:D%h.columns,row:Math.floor(D/h.columns)}}function I(D){v(),f.value=D,tt(Z)}function O(D){if(D<0||D===ge)return;if(ge=D,b.value==="picker"){const ae=f.value[D];ae>=0&&(C.value=ae,b.value="brush"),Pe=null;return}const m=b.value==="eraser"?-1:C.value,ne=Ns(D,h.columns,h.rows,B);if(!ne.every(ae=>Pe[ae]===m)){for(const ae of ne)Pe[ae]=m;f.value=new Int16Array(Pe),Z()}}function N(D){var ne,ae;if(!f.value.length)return;D.preventDefault(),(ae=(ne=s.value).setPointerCapture)==null||ae.call(ne,D.pointerId),ge=-1;const m=k(D);if(!(m<0)){if(b.value==="bucket"){I(Nd(f.value,h.columns,h.rows,m,C.value,B));return}if(b.value==="replace"){I(Il(f.value,f.value[m],C.value));return}if(b.value==="rectangle"||b.value==="select"){const M=A(m);Re={startColumn:M.column,startRow:M.row,endColumn:M.column,endRow:M.row},S.value={...Re},b.value==="rectangle"&&v(),Z();return}b.value!=="picker"&&v(),Pe=new Int16Array(f.value),O(m)}}function R(D){if(!(D.buttons&1))return;const m=k(D);if(Re&&m>=0){const ne=A(m);Re.endColumn=ne.column,Re.endRow=ne.row,S.value={...Re},Z();return}Pe&&O(m)}function W(){Re&&b.value==="rectangle"&&(f.value=Od(f.value,h.columns,h.rows,Re,C.value,B),S.value=null),Re=null,Pe=null,ge=-1,Z()}function L(D){f.value.length&&I(Id(f.value,h.columns,h.rows,D,S.value))}function z(){f.value.length&&I(Hd(f.value,h.columns,h.rows,2))}function Y(){!f.value.length||!d.maxColors||I(fi(f.value,Ae.value.colors,d.maxColors))}function le(D){I(Il(f.value,D.source.index,D.target.index))}function me(){if(!f.value.length)return;const D=Kd({cells:f.value,columns:h.columns,rows:h.rows,paletteId:Ae.value.id,settings:d,inventory:K});Hl(JSON.stringify(D),`${je()}.sakurabeads`)}async function ce(D){var ne,ae,M;const m=(ne=D.target.files)==null?void 0:ne[0];if(D.target.value="",!!m){i.value="";try{const te=Jd(await m.text(),xn);(M=(ae=o.value)==null?void 0:ae.close)==null||M.call(ae),o.value=null,a.value=m.name.replace(/\.sakurabeads$/i,""),d.paletteId=te.palette.id,d.columns=te.columns,d.rows=te.rows,Object.assign(d,te.settings||{}),h.columns=te.columns,h.rows=te.rows,f.value=te.cells;for(const Fn of Object.keys(K))delete K[Fn];Object.assign(K,te.inventory||{}),C.value=te.cells.find(Fn=>Fn>=0)??0,S.value=null,Q.value=[],ie.value=[],await tt(),g(),Z()}catch(te){i.value=te.message||"工程文件读取失败"}}}function ke(){Hl(Yd(qe.value,K),`${je()}-材料清单.csv`,"text/csv;charset=utf-8")}function Ee(D){C.value=D}function je(){return`${a.value.replace(/\.[^.]+$/,"").replace(/[^a-zA-Z0-9\u4e00-\u9fa5_-]+/g,"-")||"pattern"}-${h.columns}x${h.rows}`}Jt(()=>[d.columns,d.rows,d.zoom,d.focusX,d.focusY],()=>tt($)),Jt(()=>d.paletteId,()=>{o.value&&H()}),Jt([P,E,_,T,S,()=>B.horizontal,()=>B.vertical],()=>tt(Z));function Ye(D){var m;!(D.ctrlKey||D.metaKey)||D.key.toLowerCase()!=="z"||["INPUT","SELECT","TEXTAREA"].includes((m=D.target)==null?void 0:m.tagName)||(D.preventDefault(),D.shiftKey?w():y())}return Dn(()=>window.addEventListener("keydown",Ye)),Ss(()=>{var D,m;window.removeEventListener("keydown",Ye),He&&cancelAnimationFrame(He),(m=(D=o.value)==null?void 0:D.close)==null||m.call(D)}),(D,m)=>{var ne,ae;return J(),re("div",Qd,[!o.value&&!f.value.length?(J(),re("div",{key:0,class:fe(["bead-upload",{dragging:c.value}]),onDragenter:m[2]||(m[2]=hn(M=>c.value=!0,["prevent"])),onDragover:m[3]||(m[3]=hn(()=>{},["prevent"])),onDragleave:m[4]||(m[4]=hn(M=>c.value=!1,["prevent"])),onDrop:hn(x,["prevent"])},[p("input",{ref_key:"fileInput",ref:t,type:"file",accept:"image/jpeg,image/png,image/webp",hidden:"",onChange:Ge},null,544),p("span",Xd,[G(F(p1),{size:34,"stroke-width":1.5})]),m[41]||(m[41]=p("p",{class:"bead-kicker"},"LOCAL IMAGE WORKFLOW",-1)),m[42]||(m[42]=p("h2",null,"从一张图片开始",-1)),m[43]||(m[43]=p("p",null,"拖入 JPG、PNG 或 WebP，图片只在当前浏览器中解码与处理。",-1)),p("button",{class:"primary-button",type:"button",disabled:u.value,onClick:m[0]||(m[0]=M=>{var te;return(te=t.value)==null?void 0:te.click()})},[G(F(N1),{size:17}),j(" "+U(u.value?"正在读取…":"选择图片"),1)],8,Zd),p("button",{class:"project-open-button",type:"button",onClick:m[1]||(m[1]=M=>{var te;return(te=n.value)==null?void 0:te.click()})},[G(F($r),{size:16}),m[40]||(m[40]=j(" 打开拼豆工程",-1))]),p("input",{ref_key:"projectInput",ref:n,type:"file",accept:".sakurabeads,application/json",hidden:"",onChange:ce},null,544),m[44]||(m[44]=p("small",null,"最大 12 MB · 不上传服务器",-1)),i.value?(J(),re("p",eh,U(i.value),1)):Ut("",!0)],34)):(J(),re(Ne,{key:1},[p("div",th,[m[45]||(m[45]=p("span",{class:"done"},"01 图片",-1)),m[46]||(m[46]=p("i",null,null,-1)),m[47]||(m[47]=p("span",{class:"done"},"02 裁剪",-1)),m[48]||(m[48]=p("i",null,null,-1)),p("span",{class:fe({done:f.value.length})},"03 配色",2),m[49]||(m[49]=p("i",null,null,-1)),p("span",{class:fe({done:f.value.length})},"04 编辑导出",2)]),p("div",nh,[p("aside",rh,[p("div",sh,[p("span",null,[G(F(m1),{size:15}),m[50]||(m[50]=j(" 图片与网格",-1))]),p("button",{type:"button",onClick:m[5]||(m[5]=M=>{var te;return(te=t.value)==null?void 0:te.click()})},[G(F(Ms),{size:13}),m[51]||(m[51]=j(" 换图",-1))]),p("input",{ref_key:"fileInput",ref:t,type:"file",accept:"image/jpeg,image/png,image/webp",hidden:"",onChange:Ge},null,544)]),o.value?(J(),re("canvas",{key:0,ref_key:"cropCanvas",ref:r,class:"crop-preview","aria-label":"裁剪预览"},null,512)):(J(),re("div",lh,[G(F($r),{size:22}),m[52]||(m[52]=p("span",null,"已打开工程网格",-1))])),p("p",{class:"source-name",title:a.value},U(a.value),9,oh),i.value?(J(),re("p",ih,U(i.value),1)):Ut("",!0),p("div",ah,[p("label",null,[m[53]||(m[53]=j("宽度 ",-1)),Se(p("input",{"onUpdate:modelValue":m[6]||(m[6]=M=>d.columns=M),type:"number",min:"8",max:"150"},null,512),[[Be,d.columns,void 0,{number:!0}]])]),m[55]||(m[55]=p("span",null,"×",-1)),p("label",null,[m[54]||(m[54]=j("高度 ",-1)),Se(p("input",{"onUpdate:modelValue":m[7]||(m[7]=M=>d.rows=M),type:"number",min:"8",max:"150"},null,512),[[Be,d.rows,void 0,{number:!0}]])])]),p("div",uh,[(J(),re(Ne,null,zt(Fe,M=>p("button",{key:M,type:"button",class:fe({active:d.columns===M&&d.rows===M}),onClick:te=>Bt(M)},U(M),11,ch)),64))]),p("label",fh,[p("span",null,[m[56]||(m[56]=j("裁剪缩放 ",-1)),p("b",null,U(d.zoom.toFixed(1))+"×",1)]),Se(p("input",{"onUpdate:modelValue":m[8]||(m[8]=M=>d.zoom=M),type:"range",min:"1",max:"3",step:"0.1"},null,512),[[Be,d.zoom,void 0,{number:!0}]])]),p("label",dh,[p("span",null,[m[57]||(m[57]=j("水平取景 ",-1)),p("b",null,U(d.focusX)+"%",1)]),Se(p("input",{"onUpdate:modelValue":m[9]||(m[9]=M=>d.focusX=M),type:"range",min:"0",max:"100"},null,512),[[Be,d.focusX,void 0,{number:!0}]])]),p("label",hh,[p("span",null,[m[58]||(m[58]=j("垂直取景 ",-1)),p("b",null,U(d.focusY)+"%",1)]),Se(p("input",{"onUpdate:modelValue":m[10]||(m[10]=M=>d.focusY=M),type:"range",min:"0",max:"100"},null,512),[[Be,d.focusY,void 0,{number:!0}]])]),m[68]||(m[68]=p("span",{class:"bead-label"},"成像调整",-1)),p("label",ph,[p("span",null,[m[59]||(m[59]=j("细节增强 ",-1)),p("b",null,U(d.detail),1)]),Se(p("input",{"onUpdate:modelValue":m[11]||(m[11]=M=>d.detail=M),type:"range",min:"0",max:"80"},null,512),[[Be,d.detail,void 0,{number:!0}]])]),p("label",gh,[p("span",null,[m[60]||(m[60]=j("饱和度 ",-1)),p("b",null,U(d.saturation)+"%",1)]),Se(p("input",{"onUpdate:modelValue":m[12]||(m[12]=M=>d.saturation=M),type:"range",min:"70",max:"140"},null,512),[[Be,d.saturation,void 0,{number:!0}]])]),p("label",mh,[p("span",null,[m[61]||(m[61]=j("对比度 ",-1)),p("b",null,U(d.contrast)+"%",1)]),Se(p("input",{"onUpdate:modelValue":m[13]||(m[13]=M=>d.contrast=M),type:"range",min:"80",max:"130"},null,512),[[Be,d.contrast,void 0,{number:!0}]])]),p("label",vh,[p("span",null,[m[62]||(m[62]=j("亮度 ",-1)),p("b",null,U(d.brightness)+"%",1)]),Se(p("input",{"onUpdate:modelValue":m[14]||(m[14]=M=>d.brightness=M),type:"range",min:"80",max:"120"},null,512),[[Be,d.brightness,void 0,{number:!0}]])]),p("label",yh,[m[64]||(m[64]=p("span",null,"颜色数限制",-1)),Se(p("select",{"onUpdate:modelValue":m[15]||(m[15]=M=>d.maxColors=M)},[...m[63]||(m[63]=[p("option",{value:0},"不限颜色",-1),p("option",{value:10},"最多 10 色",-1),p("option",{value:20},"最多 20 色",-1),p("option",{value:30},"最多 30 色",-1),p("option",{value:40},"最多 40 色",-1),p("option",{value:60},"最多 60 色",-1)])],512),[[cl,d.maxColors,void 0,{number:!0}]])]),p("div",bh,[p("button",{type:"button",disabled:!f.value.length||!d.maxColors,onClick:Y},[G(F(Ol),{size:14}),m[65]||(m[65]=j(" 应用限色",-1))],8,Ch),p("button",{type:"button",disabled:!f.value.length,onClick:z},[G(F(ai),{size:14}),m[66]||(m[66]=j(" 去除杂点",-1))],8,Ph)]),m[69]||(m[69]=p("span",{class:"bead-label"},"拼豆规格",-1)),p("div",Ah,[p("button",{type:"button",class:fe({active:d.beadSize===5}),onClick:m[16]||(m[16]=M=>d.beadSize=5)},"5 mm",2),p("button",{type:"button",class:fe({active:d.beadSize===2.6}),onClick:m[17]||(m[17]=M=>d.beadSize=2.6)},"2.6 mm",2)]),p("label",wh,[m[67]||(m[67]=p("span",null,"品牌色板",-1)),Se(p("select",{"onUpdate:modelValue":m[18]||(m[18]=M=>d.paletteId=M)},[(J(!0),re(Ne,null,zt(F(xn),M=>(J(),re("option",{key:M.id,value:M.id},U(M.name),9,Sh))),128))],512),[[cl,d.paletteId]])]),p("button",{class:"primary-button bead-generate",type:"button",disabled:u.value||!o.value,onClick:H},[G(F(is),{size:16}),j(" "+U(u.value?"生成中…":"应用并重新生成"),1)],8,xh),m[70]||(m[70]=p("p",{class:"palette-note"},"品牌色号来自社区校准数据；屏幕颜色与实物、批次可能存在差异。",-1))]),p("section",kh,[p("div",_h,[p("div",Eh,[p("button",{type:"button",class:fe({active:b.value==="brush"}),title:"画笔",onClick:m[19]||(m[19]=M=>b.value="brush")},[G(F(X1),{size:17}),m[71]||(m[71]=p("span",null,"画笔",-1))],2),p("button",{type:"button",class:fe({active:b.value==="eraser"}),title:"橡皮擦",onClick:m[20]||(m[20]=M=>b.value="eraser")},[G(F(y1),{size:17}),m[72]||(m[72]=p("span",null,"擦除",-1))],2),p("button",{type:"button",class:fe({active:b.value==="bucket"}),title:"填充连续区域",onClick:m[21]||(m[21]=M=>b.value="bucket")},[G(F(Y1),{size:17}),m[73]||(m[73]=p("span",null,"油漆桶",-1))],2),p("button",{type:"button",class:fe({active:b.value==="rectangle"}),title:"拖动填充矩形",onClick:m[22]||(m[22]=M=>b.value="rectangle")},[G(F(mf),{size:17}),m[74]||(m[74]=p("span",null,"矩形",-1))],2),p("button",{type:"button",class:fe({active:b.value==="select"}),title:"拖动选择区域，镜像操作将只作用于选区",onClick:m[23]||(m[23]=M=>b.value="select")},[G(F(pf),{size:17}),m[75]||(m[75]=p("span",null,"选区",-1))],2),p("button",{type:"button",class:fe({active:b.value==="replace"}),title:"点击一种现有颜色，将其全部替换成当前选中色",onClick:m[24]||(m[24]=M=>b.value="replace")},[G(F(sf),{size:17}),m[76]||(m[76]=p("span",null,"替换",-1))],2),p("button",{type:"button",class:fe({active:b.value==="picker"}),title:"吸色",onClick:m[25]||(m[25]=M=>b.value="picker")},[G(F(as),{size:17}),m[77]||(m[77]=p("span",null,"吸色",-1))],2)]),p("div",Rh,[p("button",{type:"button",disabled:!oe.value,title:`撤销（${Q.value.length} 步历史）`,onClick:y},[G(F(Pf),{size:17})],8,Mh),p("button",{type:"button",disabled:!et.value,title:`重做（${ie.value.length} 步历史）`,onClick:w},[G(F(tf),{size:17})],8,Th)]),p("label",Bh,[m[78]||(m[78]=j("缩放 ",-1)),Se(p("input",{"onUpdate:modelValue":m[26]||(m[26]=M=>P.value=M),type:"range",min:"4",max:"25"},null,512),[[Be,P.value,void 0,{number:!0}]])]),p("button",{class:"fit-button",type:"button",title:"适应画布",onClick:g},[G(F(z1),{size:15}),m[79]||(m[79]=j(" 适应",-1))]),p("div",Nh,[p("button",{type:"button",class:fe({active:T.value==="pixel"}),onClick:m[27]||(m[27]=M=>T.value="pixel")},"色块",2),p("button",{type:"button",class:fe({active:T.value==="bead"}),onClick:m[28]||(m[28]=M=>T.value="bead")},"拼豆",2)]),p("button",{class:fe(["grid-toggle",{active:E.value}]),type:"button",onClick:m[29]||(m[29]=M=>E.value=!E.value)},[G(F(is),{size:16}),m[80]||(m[80]=j(" 网格",-1))],2)]),p("div",Oh,[m[86]||(m[86]=p("span",null,"对称编辑",-1)),p("button",{type:"button",class:fe({active:B.horizontal}),onClick:m[30]||(m[30]=M=>B.horizontal=!B.horizontal)},[G(F(Bl),{size:14}),m[81]||(m[81]=j(" 左右",-1))],2),p("button",{type:"button",class:fe({active:B.vertical}),onClick:m[31]||(m[31]=M=>B.vertical=!B.vertical)},[G(F(Tl),{size:14}),m[82]||(m[82]=j(" 上下",-1))],2),m[87]||(m[87]=p("i",null,null,-1)),p("span",null,U(S.value?"镜像选区":"镜像全图"),1),p("button",{type:"button",onClick:m[32]||(m[32]=M=>L("horizontal"))},[G(F(Bl),{size:14}),m[83]||(m[83]=j(" 左右",-1))]),p("button",{type:"button",onClick:m[33]||(m[33]=M=>L("vertical"))},[G(F(Tl),{size:14}),m[84]||(m[84]=j(" 上下",-1))]),S.value?(J(),re("button",{key:0,type:"button",onClick:m[34]||(m[34]=M=>S.value=null)},"取消选区")):Ut("",!0),p("button",{class:fe(["code-toggle",{active:_.value}]),type:"button",title:"单格放大到 12px 以上时显示色号",onClick:m[35]||(m[35]=M=>_.value=!_.value)},[G(F(Ol),{size:14}),m[85]||(m[85]=j(" 格内色号",-1))],2)]),p("div",{ref_key:"canvasViewport",ref:l,class:"bead-canvas-viewport"},[p("canvas",{ref_key:"beadCanvas",ref:s,class:"bead-canvas","aria-label":"拼豆编辑画布",onPointerdown:N,onPointermove:R,onPointerup:W,onPointercancel:W,onPointerleave:W},null,544)],512),p("div",Ih,[p("span",null,U(h.columns)+" × "+U(h.rows)+" 颗",1),p("span",null,U(ue.value.width)+" × "+U(ue.value.height)+" cm",1),p("span",null,U(we.value)+" 颗豆",1),p("span",null,"历史 "+U(Q.value.length)+" / "+U(ie.value.length),1),p("span",null,[p("i",{class:"selected-swatch",style:Ht({background:(ne=rt.value)==null?void 0:ne.hex})},null,4),j(U((ae=rt.value)==null?void 0:ae.name),1)])])]),p("aside",Hh,[p("div",Dh,[p("span",null,[G(F(as),{size:15}),m[88]||(m[88]=j(" 颜色与用量",-1))]),p("b",null,U(qe.value.length)+" 色",1)]),p("div",Lh,[(J(!0),re(Ne,null,zt(Ae.value.colors,(M,te)=>(J(),re("button",{key:M.id,type:"button",class:fe({active:C.value===te}),style:Ht({"--swatch":M.hex}),title:`${M.name} / ${M.code}`,onClick:Fn=>Ee(te)},[...m[89]||(m[89]=[p("span",null,null,-1)])],14,$h))),128))]),p("div",Fh,[p("div",{class:fe(["material-summary",{complete:Te.value===0}])},[G(F(Nl),{size:14}),p("span",null,U(Te.value?`按库存还缺 ${Te.value} 颗`:"库存数量充足"),1)],2),p("div",Gh,[(J(!0),re(Ne,null,zt(qe.value,M=>(J(),re("div",{key:M.id,class:"bead-usage-row",role:"button",tabindex:"0",onClick:te=>Ee(M.index),onKeydown:Nu(te=>Ee(M.index),["enter"])},[p("i",{style:Ht({background:M.hex})},null,4),p("span",null,[p("b",null,U(M.name),1),p("small",null,U(M.code),1)]),p("strong",Vh,"需 "+U(M.count),1),p("label",{title:"输入已有库存",onClick:m[36]||(m[36]=hn(()=>{},["stop"]))},[m[90]||(m[90]=j("有 ",-1)),Se(p("input",{"onUpdate:modelValue":te=>K[M.id]=te,type:"number",min:"0"},null,8,zh),[[Be,K[M.id],void 0,{number:!0}]])]),M.count>(Number(K[M.id])||0)?(J(),re("em",Uh,"缺 "+U(M.count-(Number(K[M.id])||0)),1)):(J(),re("em",Wh,"足够"))],40,jh))),128))]),Ke.value.length?(J(),re("details",qh,[p("summary",null,[m[91]||(m[91]=j("颜色合并建议 ",-1)),p("b",null,U(Ke.value.length),1)]),(J(!0),re(Ne,null,zt(Ke.value,M=>(J(),re("button",{key:`${M.source.id}-${M.target.id}`,type:"button",onClick:te=>le(M)},[p("i",{style:Ht({background:M.source.hex})},null,4),j(U(M.source.code)+" ",1),m[92]||(m[92]=p("span",null,"→",-1)),p("i",{style:Ht({background:M.target.hex})},null,4),j(U(M.target.code)+" ",1),p("small",null,"ΔE "+U(M.distance.toFixed(1)),1)],8,Kh))),128))])):Ut("",!0)]),p("div",Jh,[m[98]||(m[98]=p("span",{class:"bead-label"},"导出图纸",-1)),p("button",{type:"button",onClick:m[37]||(m[37]=M=>F(Wd)(f.value,h.columns,h.rows,Ae.value.colors,`${je()}.png`,{paletteName:Ae.value.name}))},[G(F(C1),{size:16}),m[93]||(m[93]=j(" PNG 图片",-1))]),p("button",{type:"button",onClick:m[38]||(m[38]=M=>F(qd)(f.value,h.columns,h.rows,Ae.value.colors,`${je()}.pdf`,{paletteName:Ae.value.name,boardSize:29}))},[G(F(ii),{size:16}),m[94]||(m[94]=j(" PDF（29×29 分页）",-1))]),p("button",{type:"button",onClick:ke},[G(F(Nl),{size:16}),m[95]||(m[95]=j(" 材料清单 CSV",-1))]),m[99]||(m[99]=p("span",{class:"bead-label project-label"},"工程文件",-1)),p("div",Yh,[p("button",{type:"button",onClick:me},[G(F(of),{size:15}),m[96]||(m[96]=j(" 保存",-1))]),p("button",{type:"button",onClick:m[39]||(m[39]=M=>{var te;return(te=n.value)==null?void 0:te.click()})},[G(F($r),{size:15}),m[97]||(m[97]=j(" 打开",-1))])]),p("input",{ref_key:"projectInput",ref:n,type:"file",accept:".sakurabeads,application/json",hidden:"",onChange:ce},null,544)]),p("p",Qh,[G(F(ff),{size:14}),m[100]||(m[100]=j(" 图片与编辑数据仅保留在当前页面",-1))])])])],64))])}}},Zh={key:0,class:"workspace"},e2={class:"workspace-header"},t2={class:"local-badge"},n2={__name:"ToolView",setup(e){const t=oi(),n=ye(()=>Of(t.params.slug)),r={json:td,base64:id,timestamp:dd,password:bd,"pixel-beads":Xh},s=ye(()=>r[t.params.slug]);return Dn(()=>{fetch("/api/v1/events/tool-opened",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:t.params.slug})}).catch(()=>{})}),(l,o)=>{const a=Yr("router-link");return n.value&&s.value?(J(),re("section",Zh,[G(a,{class:"back-link",to:"/"},{default:mr(()=>[G(F(e1),{size:16}),o[0]||(o[0]=j(" 返回工具索引",-1))]),_:1}),p("header",e2,[p("div",{class:fe(["workspace-icon",`tone-${n.value.color}`])},[(J(),Ze(tr(n.value.icon),{size:28}))],2),p("div",null,[p("p",null,U(n.value.index)+" / "+U(n.value.category),1),p("h1",null,U(n.value.name),1),p("span",null,U(n.value.summary),1)]),p("div",t2,[G(F(j1),{size:14}),o[1]||(o[1]=j(" 本地处理",-1))])]),(J(),Ze(tr(s.value)))])):Ut("",!0)}}},r2=zc({history:Ac(),routes:[{path:"/",component:Jf},{path:"/tools/:slug",component:n2},{path:"/:pathMatch(.*)*",redirect:"/"}],scrollBehavior:()=>({top:0})});Hu(Bf).use(r2).mount("#app");
