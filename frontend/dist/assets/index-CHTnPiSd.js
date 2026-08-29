(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();/**
* @vue/shared v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ds(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ke={},sn=[],gt=()=>{},Vl=()=>!1,cr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),fr=e=>e.startsWith("onUpdate:"),De=Object.assign,hs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},_i=Object.prototype.hasOwnProperty,we=(e,t)=>_i.call(e,t),Q=Array.isArray,Ft=e=>Dn(e)==="[object Map]",St=e=>Dn(e)==="[object Set]",Hs=e=>Dn(e)==="[object Date]",se=e=>typeof e=="function",Ee=e=>typeof e=="string",vt=e=>typeof e=="symbol",Ae=e=>e!==null&&typeof e=="object",Ul=e=>(Ae(e)||se(e))&&se(e.then)&&se(e.catch),ql=Object.prototype.toString,Dn=e=>ql.call(e),Ei=e=>Dn(e).slice(8,-1),Wl=e=>Dn(e)==="[object Object]",ps=e=>Ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,wn=ds(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),dr=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Mi=/-\w/g,We=dr(e=>e.replace(Mi,t=>t.slice(1).toUpperCase())),Ri=/\B([A-Z])/g,jt=dr(e=>e.replace(Ri,"-$1").toLowerCase()),hr=dr(e=>e.charAt(0).toUpperCase()+e.slice(1)),xr=dr(e=>e?`on${hr(e)}`:""),pt=(e,t)=>!Object.is(e,t),Jn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Kl=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},pr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Is;const mr=()=>Is||(Is=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ht(e){if(Q(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Ee(r)?Ni(r):Ht(r);if(s)for(const l in s)t[l]=s[l]}return t}else if(Ee(e)||Ae(e))return e}const Ti=/;(?![^(]*\))/g,Bi=/:([^]+)/,$i=/\/\*[^]*?\*\//g;function Ni(e){const t={};return e.replace($i,"").split(Ti).forEach(n=>{if(n){const r=n.split(Bi);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function pe(e){let t="";if(Ee(e))t=e;else if(Q(e))for(let n=0;n<e.length;n++){const r=pe(e[n]);r&&(t+=r+" ")}else if(Ae(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Oi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hi=ds(Oi);function Jl(e){return!!e||e===""}function Ii(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=xt(e[r],t[r]);return n}function Ds(e,t){if(e.size!==t.size)return!1;const n=Array.from(t),r=new Uint8Array(n.length);for(const s of e){let l=-1;for(let o=0;o<n.length;o++)if(!r[o]&&xt(s,n[o])){l=o;break}if(l<0)return!1;r[l]=1}return!0}function xt(e,t){if(e===t)return!0;let n=Hs(e),r=Hs(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=vt(e),r=vt(t),n||r)return e===t;if(n=Q(e),r=Q(t),n||r)return n&&r?Ii(e,t):!1;if(n=Ae(e),r=Ae(t),n||r){if(!n||!r)return!1;if(n=Ft(e),r=Ft(t),n||r||(n=St(e),r=St(t),n||r))return n&&r?Ds(e,t):!1;const s=Object.keys(e).length,l=Object.keys(t).length;if(s!==l)return!1;for(const o in e){const a=e.hasOwnProperty(o),i=t.hasOwnProperty(o);if(a&&!i||!a&&i||!xt(e[o],t[o]))return!1}}return String(e)===String(t)}function ms(e,t){return e.findIndex(n=>xt(n,t))}const Yl=e=>!!(e&&e.__v_isRef===!0),q=e=>Ee(e)?e:e==null?"":Q(e)||Ae(e)&&(e.toString===ql||!se(e.toString))?Yl(e)?q(e.value):JSON.stringify(e,Xl,2):String(e),Xl=(e,t)=>Yl(t)?Xl(e,t.value):Ft(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],l)=>(n[_r(r,l)+" =>"]=s,n),{})}:St(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>_r(n))}:vt(t)?_r(t):Ae(t)&&!Q(t)&&!Wl(t)?String(t):t,_r=(e,t="")=>{var n;return vt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ie;class Di{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Ie&&(Ie.active?(this.parent=Ie,this.index=(Ie.scopes||(Ie.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const r=this.scopes.slice();for(t=0,n=r.length;t<n;t++)r[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const s=this.scopes.slice();for(t=0,n=s.length;t<n;t++)s[t].resume()}const r=this.effects.slice();for(t=0,n=r.length;t<n;t++)r[t].resume()}}run(t){if(this._active){const n=Ie;try{return Ie=this,t()}finally{Ie=n}}}on(){++this._on===1&&(this.prevScope=Ie,Ie=this)}off(){if(this._on>0&&--this._on===0){if(Ie===this)Ie=this.prevScope;else{let t=Ie;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Li(){return Ie}let Se;const Er=new WeakSet;class Ql{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ie&&(Ie.active?Ie.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Er.has(this)&&(Er.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||eo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ls(this),to(this);const t=Se,n=st;Se=this,st=!0;try{return this.fn()}finally{no(this),Se=t,st=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ys(t);this.deps=this.depsTail=void 0,Ls(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Er.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){qr(this)&&this.run()}get dirty(){return qr(this)}}let Zl=0,Pn,An;function eo(e,t=!1){if(e.flags|=8,t){e.next=An,An=e;return}e.next=Pn,Pn=e}function gs(){Zl++}function vs(){if(--Zl>0)return;if(An){let t=An;for(An=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Pn;){let t=Pn;for(Pn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function to(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function no(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ys(r),Fi(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function qr(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ro(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ro(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Mn)||(e.globalVersion=Mn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!qr(e))))return;e.flags|=2;const t=e.dep,n=Se,r=st;Se=e,st=!0;try{to(e);const s=e.fn(e._value);(t.version===0||pt(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{Se=n,st=r,no(e),e.flags&=-3}}function ys(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let l=n.computed.deps;l;l=l.nextDep)ys(l,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Fi(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let st=!0;const so=[];function _t(){so.push(st),st=!1}function Et(){const e=so.pop();st=e===void 0?!0:e}function Ls(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Se;Se=void 0;try{t()}finally{Se=n}}}let Mn=0,Gi=class{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}};class bs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Se||!st||Se===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Se)n=this.activeLink=new Gi(Se,this),Se.deps?(n.prevDep=Se.depsTail,Se.depsTail.nextDep=n,Se.depsTail=n):Se.deps=Se.depsTail=n,lo(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Se.depsTail,n.nextDep=void 0,Se.depsTail.nextDep=n,Se.depsTail=n,Se.deps===n&&(Se.deps=r)}return n}trigger(t){this.version++,Mn++,this.notify(t)}notify(t){gs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{vs()}}}function lo(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)lo(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Wr=new WeakMap,Jt=Symbol(""),Kr=Symbol(""),Rn=Symbol("");function Le(e,t,n){if(st&&Se){let r=Wr.get(e);r||Wr.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new bs),s.map=r,s.key=n),s.track()}}function At(e,t,n,r,s,l){const o=Wr.get(e);if(!o){Mn++;return}const a=i=>{i&&i.trigger()};if(gs(),t==="clear")o.forEach(a);else{const i=Q(e),u=i&&ps(n);if(i&&n==="length"){const c=Number(r);o.forEach((f,p)=>{(p==="length"||p===Rn||!vt(p)&&p>=c)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Rn)),t){case"add":i?u&&a(o.get("length")):(a(o.get(Jt)),Ft(e)&&a(o.get(Kr)));break;case"delete":i||(a(o.get(Jt)),Ft(e)&&a(o.get(Kr)));break;case"set":Ft(e)&&a(o.get(Jt));break}}vs()}function Zt(e){const t=Ce(e);return t===e?t:(Le(t,"iterate",Rn),nt(e)?t:t.map(ot))}function gr(e){return Le(e=Ce(e),"iterate",Rn),e}function dt(e,t){return Mt(e)?an(Yt(e)?ot(t):t):ot(t)}const ji={__proto__:null,[Symbol.iterator](){return Mr(this,Symbol.iterator,e=>dt(this,e))},concat(...e){return Zt(this).concat(...e.map(t=>Q(t)?Zt(t):t))},entries(){return Mr(this,"entries",e=>(e[1]=dt(this,e[1]),e))},every(e,t){return bt(this,"every",e,t,void 0,arguments)},filter(e,t){return bt(this,"filter",e,t,n=>n.map(r=>dt(this,r)),arguments)},find(e,t){return bt(this,"find",e,t,n=>dt(this,n),arguments)},findIndex(e,t){return bt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return bt(this,"findLast",e,t,n=>dt(this,n),arguments)},findLastIndex(e,t){return bt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return bt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Rr(this,"includes",e)},indexOf(...e){return Rr(this,"indexOf",e)},join(e){return Zt(this).join(e)},lastIndexOf(...e){return Rr(this,"lastIndexOf",e)},map(e,t){return bt(this,"map",e,t,void 0,arguments)},pop(){return pn(this,"pop")},push(...e){return pn(this,"push",e)},reduce(e,...t){return Fs(this,"reduce",e,t)},reduceRight(e,...t){return Fs(this,"reduceRight",e,t)},shift(){return pn(this,"shift")},some(e,t){return bt(this,"some",e,t,void 0,arguments)},splice(...e){return pn(this,"splice",e)},toReversed(){return Zt(this).toReversed()},toSorted(e){return Zt(this).toSorted(e)},toSpliced(...e){return Zt(this).toSpliced(...e)},unshift(...e){return pn(this,"unshift",e)},values(){return Mr(this,"values",e=>dt(this,e))}};function Mr(e,t,n){const r=gr(e),s=r[t]();return r!==e&&!nt(e)&&(s._next=s.next,s.next=()=>{const l=s._next();return l.done||(l.value=n(l.value)),l}),s}const zi=Array.prototype;function bt(e,t,n,r,s,l){const o=gr(e),a=o!==e&&!nt(e),i=o[t];if(i!==zi[t]){const f=i.apply(e,l);return a?ot(f):f}let u=n;o!==e&&(a?u=function(f,p){return n.call(this,dt(e,f),p,e)}:n.length>2&&(u=function(f,p){return n.call(this,f,p,e)}));const c=i.call(o,u,r);return a&&s?s(c):c}function Fs(e,t,n,r){const s=gr(e),l=s!==e&&!nt(e);let o=n,a=!1;s!==e&&(l?(a=r.length===0,o=function(u,c,f){return a&&(a=!1,u=dt(e,u)),n.call(this,u,dt(e,c),f,e)}):n.length>3&&(o=function(u,c,f){return n.call(this,u,c,f,e)}));const i=s[t](o,...r);return a?dt(e,i):i}function Rr(e,t,n){const r=Ce(e);Le(r,"iterate",Rn);const s=r[t](...n);return(s===-1||s===!1)&&Ps(n[0])?(n[0]=Ce(n[0]),r[t](...n)):s}function pn(e,t,n=[]){_t(),gs();const r=Ce(e)[t].apply(e,n);return vs(),Et(),r}const Vi=ds("__proto__,__v_isRef,__isVue"),oo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(vt));function Ui(e){vt(e)||(e=String(e));const t=Ce(this);return Le(t,"has",e),t.hasOwnProperty(e)}class io{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,l=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return l;if(n==="__v_raw")return r===(s?l?ta:fo:l?co:uo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=Q(t);if(!s){let i;if(o&&(i=ji[n]))return i;if(n==="hasOwnProperty")return Ui}const a=Reflect.get(t,n,Ge(t)?t:r);if((vt(n)?oo.has(n):Vi(n))||(s||Le(t,"get",n),l))return a;if(Ge(a)){const i=o&&ps(n)?a:a.value;return s&&Ae(i)?Yr(i):i}return Ae(a)?s?Yr(a):Dt(a):a}}class ao extends io{constructor(t=!1){super(!1,t)}set(t,n,r,s){let l=t[n];const o=Q(t)&&ps(n);if(!this._isShallow){const u=Mt(l);if(!nt(r)&&!Mt(r)&&(l=Ce(l),r=Ce(r)),!o&&Ge(l)&&!Ge(r))return u||(l.value=r),!0}const a=o?Number(n)<t.length:we(t,n),i=Reflect.set(t,n,r,Ge(t)?t:s);return t===Ce(s)&&i&&(a?pt(r,l)&&At(t,"set",n,r):At(t,"add",n,r)),i}deleteProperty(t,n){const r=we(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&At(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!vt(n)||!oo.has(n))&&Le(t,"has",n),r}ownKeys(t){return Le(t,"iterate",Q(t)?"length":Jt),Reflect.ownKeys(t)}}class qi extends io{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Wi=new ao,Ki=new qi,Ji=new ao(!0);const Jr=e=>e,zn=e=>Reflect.getPrototypeOf(e);function Yi(e,t,n){return function(...r){const s=this.__v_raw,l=Ce(s),o=Ft(l),a=e==="entries"||e===Symbol.iterator&&o,i=e==="keys"&&o,u=s[e](...r),c=n?Jr:t?an:ot;return!t&&Le(l,"iterate",i?Kr:Jt),De(Object.create(u),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:a?[c(f[0]),c(f[1])]:c(f),done:p}}})}}function Vn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Xi(e,t){const n={get(s){const l=this.__v_raw,o=Ce(l),a=Ce(s);e||(pt(s,a)&&Le(o,"get",s),Le(o,"get",a));const{has:i}=zn(o),u=t?Jr:e?an:ot;if(i.call(o,s))return u(l.get(s));if(i.call(o,a))return u(l.get(a));l!==o&&l.get(s)},get size(){const s=this.__v_raw;return!e&&Le(Ce(s),"iterate",Jt),s.size},has(s){const l=this.__v_raw,o=Ce(l),a=Ce(s);return e||(pt(s,a)&&Le(o,"has",s),Le(o,"has",a)),s===a?l.has(s):l.has(s)||l.has(a)},forEach(s,l){const o=this,a=o.__v_raw,i=Ce(a),u=t?Jr:e?an:ot;return!e&&Le(i,"iterate",Jt),a.forEach((c,f)=>s.call(l,u(c),u(f),o))}};return De(n,e?{add:Vn("add"),set:Vn("set"),delete:Vn("delete"),clear:Vn("clear")}:{add(s){const l=Ce(this),o=zn(l),a=Ce(s),i=!t&&!nt(s)&&!Mt(s)?a:s;return o.has.call(l,i)||pt(s,i)&&o.has.call(l,s)||pt(a,i)&&o.has.call(l,a)||(l.add(i),At(l,"add",i,i)),this},set(s,l){!t&&!nt(l)&&!Mt(l)&&(l=Ce(l));const o=Ce(this),{has:a,get:i}=zn(o);let u=a.call(o,s);u||(s=Ce(s),u=a.call(o,s));const c=i.call(o,s);return o.set(s,l),u?pt(l,c)&&At(o,"set",s,l):At(o,"add",s,l),this},delete(s){const l=Ce(this),{has:o,get:a}=zn(l);let i=o.call(l,s);i||(s=Ce(s),i=o.call(l,s)),a&&a.call(l,s);const u=l.delete(s);return i&&At(l,"delete",s,void 0),u},clear(){const s=Ce(this),l=s.size!==0,o=s.clear();return l&&At(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Yi(s,e,t)}),n}function Cs(e,t){const n=Xi(e,t);return(r,s,l)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(we(n,s)&&s in r?n:r,s,l)}const Qi={get:Cs(!1,!1)},Zi={get:Cs(!1,!0)},ea={get:Cs(!0,!1)};const uo=new WeakMap,co=new WeakMap,fo=new WeakMap,ta=new WeakMap;function na(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Dt(e){return Mt(e)?e:ws(e,!1,Wi,Qi,uo)}function ho(e){return ws(e,!1,Ji,Zi,co)}function Yr(e){return ws(e,!0,Ki,ea,fo)}function ws(e,t,n,r,s){if(!Ae(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const l=s.get(e);if(l)return l;const o=na(Ei(e));if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function Yt(e){return Mt(e)?Yt(e.__v_raw):!!(e&&e.__v_isReactive)}function Mt(e){return!!(e&&e.__v_isReadonly)}function nt(e){return!!(e&&e.__v_isShallow)}function Ps(e){return e?!!e.__v_raw:!1}function Ce(e){const t=e&&e.__v_raw;return t?Ce(t):e}function ra(e){return!we(e,"__v_skip")&&Object.isExtensible(e)&&Kl(e,"__v_skip",!0),e}const ot=e=>Ae(e)?Dt(e):e,an=e=>Ae(e)?Yr(e):e;function Ge(e){return e?e.__v_isRef===!0:!1}function le(e){return po(e,!1)}function Xr(e){return po(e,!0)}function po(e,t){return Ge(e)?e:new sa(e,t)}class sa{constructor(t,n){this.dep=new bs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:Ce(t),this._value=n?t:ot(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||nt(t)||Mt(t);t=r?t:Ce(t),pt(t,n)&&(this._rawValue=t,this._value=r?t:ot(t),this.dep.trigger())}}function O(e){return Ge(e)?e.value:e}const la={get:(e,t,n)=>t==="__v_raw"?e:O(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Ge(s)&&!Ge(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function mo(e){return Yt(e)?e:new Proxy(e,la)}class oa{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new bs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Mn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Se!==this)return eo(this,!0),!0}get value(){const t=this.dep.track();return ro(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ia(e,t,n=!1){let r,s;return se(e)?r=e:(r=e.get,s=e.set),new oa(r,s,n)}const Un={},Zn=new WeakMap;let Ut;function aa(e,t=!1,n=Ut){if(n){let r=Zn.get(n);r||Zn.set(n,r=[]),r.push(e)}}function ua(e,t,n=ke){const{immediate:r,deep:s,once:l,scheduler:o,augmentJob:a,call:i}=n,u=A=>s?A:nt(A)||s===!1||s===0?kt(A,1):kt(A);let c,f,p,d,b=!1,C=!1;if(Ge(e)?(f=()=>e.value,b=nt(e)):Yt(e)?(f=()=>u(e),b=!0):Q(e)?(C=!0,b=e.some(A=>Yt(A)||nt(A)),f=()=>e.map(A=>{if(Ge(A))return A.value;if(Yt(A))return u(A);if(se(A))return i?i(A,2):A()})):se(e)?t?f=i?()=>i(e,2):e:f=()=>{if(p){_t();try{p()}finally{Et()}}const A=Ut;Ut=c;try{return i?i(e,3,[d]):e(d)}finally{Ut=A}}:f=gt,t&&s){const A=f,$=s===!0?1/0:s;f=()=>kt(A(),$)}const w=Li(),E=()=>{c.stop(),w&&w.active&&hs(w.effects,c)};if(l&&t){const A=t;t=(...$)=>{const X=A(...$);return E(),X}}let k=C?new Array(e.length).fill(Un):Un;const B=A=>{if(!(!(c.flags&1)||!c.dirty&&!A))if(t){const $=c.run();if(A||s||b||(C?$.some((X,ee)=>pt(X,k[ee])):pt($,k))){p&&p();const X=Ut;Ut=c;try{const ee=[$,k===Un?void 0:C&&k[0]===Un?[]:k,d];k=$,i?i(t,3,ee):t(...ee)}finally{Ut=X}}}else c.run()};return a&&a(B),c=new Ql(f),c.scheduler=o?()=>o(B,!1):B,d=A=>aa(A,!1,c),p=c.onStop=()=>{const A=Zn.get(c);if(A){if(i)i(A,4);else for(const $ of A)$();Zn.delete(c)}},t?r?B(!0):k=c.run():o?o(B.bind(null,!0),!0):c.run(),E.pause=c.pause.bind(c),E.resume=c.resume.bind(c),E.stop=E,E}function kt(e,t=1/0,n){if(t<=0||!Ae(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ge(e))kt(e.value,t,n);else if(Q(e))for(let r=0;r<e.length;r++)kt(e[r],t,n);else if(St(e)||Ft(e))e.forEach(r=>{kt(r,t,n)});else if(Wl(e)){for(const r in e)kt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&kt(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ln(e,t,n,r){try{return r?e(...r):e()}catch(s){vr(s,t,n)}}function it(e,t,n,r){if(se(e)){const s=Ln(e,t,n,r);return s&&Ul(s)&&s.catch(l=>{vr(l,t,n)}),s}if(Q(e)){const s=[];for(let l=0;l<e.length;l++)s.push(it(e[l],t,n,r));return s}}function vr(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ke;if(t){let a=t.parent;const i=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,i,u)===!1)return}a=a.parent}if(l){_t(),Ln(l,null,10,[e,i,u]),Et();return}}ca(e,n,s,r,o)}function ca(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const qe=[];let ft=-1;const ln=[];let Nt=null,tn=0;const go=Promise.resolve();let er=null;function Xe(e){const t=er||go;return e?t.then(this?e.bind(this):e):t}function fa(e){let t=ft+1,n=qe.length;for(;t<n;){const r=t+n>>>1,s=qe[r],l=Tn(s);l<e||l===e&&s.flags&2?t=r+1:n=r}return t}function As(e){if(!(e.flags&1)){const t=Tn(e),n=qe[qe.length-1];!n||!(e.flags&2)&&t>=Tn(n)?qe.push(e):qe.splice(fa(t),0,e),e.flags|=1,vo()}}function vo(){er||(er=go.then(bo))}function da(e){if(!Q(e))Nt&&e.id===-1?Nt.splice(tn+1,0,e):e.flags&1||(ln.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)ln.push(e[t]);vo()}function Gs(e,t,n=ft+1){for(;n<qe.length;n++){const r=qe[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;qe.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function yo(e){if(ln.length){const t=[...new Set(ln)].sort((n,r)=>Tn(n)-Tn(r));if(ln.length=0,Nt){for(let n=0;n<t.length;n++)Nt.push(t[n]);return}for(Nt=t,tn=0;tn<Nt.length;tn++){const n=Nt[tn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Nt=null,tn=0}}const Tn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function bo(e){try{for(ft=0;ft<qe.length;ft++){const t=qe[ft];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ln(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ft<qe.length;ft++){const t=qe[ft];t&&(t.flags&=-2)}ft=-1,qe.length=0,yo(),er=null,(qe.length||ln.length)&&bo()}}let Qe=null,Co=null;function tr(e){const t=Qe;return Qe=e,Co=e&&e.type.__scopeId||null,t}function yr(e,t=Qe,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&lr(-1);const l=tr(t),o=Xt.length;let a;try{a=e(...s)}finally{for(let i=Xt.length;i>o;i--)Ko();tr(l),r._d&&lr(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function _e(e,t){if(Qe===null)return e;const n=Ar(Qe),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[l,o,a,i=ke]=t[s];l&&(se(l)&&(l={mounted:l,updated:l}),l.deep&&kt(o),r.push({dir:l,instance:n,value:o,oldValue:void 0,arg:a,modifiers:i}))}return e}function zt(e,t,n,r){const s=e.dirs,l=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];l&&(a.oldValue=l[o].value);let i=a.dir[r];i&&(_t(),it(i,n,8,[e.el,a,e,t]),Et())}}function Yn(e,t){if(Fe){let n=Fe.provides;const r=Fe.parent&&Fe.parent.provides;r===n&&(n=Fe.provides=Object.create(r)),n[e]=t}}function lt(e,t,n=!1){const r=iu();if(r||on){let s=on?on._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&se(t)?t.call(r&&r.proxy):t}}const ha=Symbol.for("v-scx"),pa=()=>lt(ha);function Gt(e,t,n){return wo(e,t,n)}function wo(e,t,n=ke){const{immediate:r,deep:s,flush:l,once:o}=n,a=De({},n),i=t&&r||!t&&l!=="post";let u;if(Nn){if(l==="sync"){const d=pa();u=d.__watcherHandles||(d.__watcherHandles=[])}else if(!i){const d=()=>{};return d.stop=gt,d.resume=gt,d.pause=gt,d}}const c=Fe;a.call=(d,b,C)=>it(d,c,b,C);let f=!1;l==="post"?a.scheduler=d=>{Je(d,c&&c.suspense)}:l!=="sync"&&(f=!0,a.scheduler=(d,b)=>{b?d():As(d)}),a.augmentJob=d=>{t&&(d.flags|=4),f&&(d.flags|=2,c&&(d.id=c.uid,d.i=c))};const p=ua(e,t,a);return Nn&&(u?u.push(p):i&&p()),p}function ma(e,t,n){const r=this.proxy,s=Ee(e)?e.includes(".")?Po(r,e):()=>r[e]:e.bind(r,r);let l;se(t)?l=t:(l=t.handler,n=t);const o=Fn(this),a=wo(s,l.bind(r),n);return o(),a}function Po(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const ga=Symbol("_vte"),br=e=>e.__isTeleport,Tr=Symbol("_leaveCb");function va(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Rt){t=n;break}}return t}function Ao(e){if(!Ss(e))return br(e.type)&&e.children?va(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&se(n.default))return n.default()}}function ks(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;ks(br(n.type)&&Ao(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ko(e,t){return se(e)?De({name:e.name},t,{setup:e}):e}function So(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function js(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const nr=new WeakMap;function kn(e,t,n,r,s=!1){if(Q(e)){e.forEach((C,w)=>kn(C,t&&(Q(t)?t[w]:t),n,r,s));return}if(Sn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&kn(e,t,n,r.component.subTree);return}const l=r.shapeFlag&4?Ar(r.component):r.el,o=s?null:l,{i:a,r:i}=e,u=t&&t.r,c=a.refs===ke?a.refs={}:a.refs,f=a.setupState,p=Ce(f),d=f===ke?Vl:C=>js(c,C)?!1:we(p,C),b=(C,w)=>!(w&&js(c,w));if(u!=null&&u!==i){if(zs(t),Ee(u))c[u]=null,d(u)&&(f[u]=null);else if(Ge(u)){const C=t;b(u,C.k)&&(u.value=null),C.k&&(c[C.k]=null)}}if(se(i))Ln(i,a,12,[o,c]);else{const C=Ee(i),w=Ge(i);if(C||w){const E=()=>{if(e.f){const k=C?d(i)?f[i]:c[i]:b()||!e.k?i.value:c[e.k];if(s)Q(k)&&hs(k,l);else if(Q(k))k.includes(l)||k.push(l);else if(C)c[i]=[l],d(i)&&(f[i]=c[i]);else{const B=[l];b(i,e.k)&&(i.value=B),e.k&&(c[e.k]=B)}}else C?(c[i]=o,d(i)&&(f[i]=o)):w&&(b(i,e.k)&&(i.value=o),e.k&&(c[e.k]=o))};if(o){const k=()=>{E(),nr.delete(e)};k.id=-1,nr.set(e,k),Je(k,n)}else zs(e),E()}}}function zs(e){const t=nr.get(e);t&&(t.flags|=8,nr.delete(e))}mr().requestIdleCallback;mr().cancelIdleCallback;const Sn=e=>!!e.type.__asyncLoader,Ss=e=>e.type.__isKeepAlive;function ya(e,t){xo(e,"a",t)}function ba(e,t){xo(e,"da",t)}function xo(e,t,n=Fe){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Cr(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Ss(s.parent.vnode)&&Ca(r,t,n,s),s=s.parent}}function Ca(e,t,n,r){const s=Cr(t,e,r,!0);_o(()=>{hs(r[t],s)},n)}function Cr(e,t,n=Fe,r=!1){if(n){const s=n[e]||(n[e]=[]),l=t.__weh||(t.__weh=(...o)=>{_t();const a=Fn(n),i=it(t,n,e,o);return a(),Et(),i});return r?s.unshift(l):s.push(l),l}}const Tt=e=>(t,n=Fe)=>{(!Nn||e==="sp")&&Cr(e,(...r)=>t(...r),n)},wa=Tt("bm"),hn=Tt("m"),Pa=Tt("bu"),Aa=Tt("u"),xs=Tt("bum"),_o=Tt("um"),ka=Tt("sp"),Sa=Tt("rtg"),xa=Tt("rtc");function _a(e,t=Fe){Cr("ec",e,t)}const Eo="components";function Qr(e,t){return Ro(Eo,e,!0,t)||e}const Mo=Symbol.for("v-ndc");function rr(e){return Ee(e)?Ro(Eo,e,!1)||e:e||Mo}function Ro(e,t,n=!0,r=!1){const s=Qe||Fe;if(s){const l=s.type;{const a=du(l,!1);if(a&&(a===t||a===We(t)||a===hr(We(t))))return l}const o=Vs(s[e]||l[e],t)||Vs(s.appContext[e],t);return!o&&r?l:o}}function Vs(e,t){return e&&(e[t]||e[We(t)]||e[hr(We(t))])}function qt(e,t,n,r){let s;const l=n,o=Q(e);if(o||Ee(e)){const a=o&&Yt(e);let i=!1,u=!1;a&&(i=!nt(e),u=Mt(e),e=gr(e)),s=new Array(e.length);for(let c=0,f=e.length;c<f;c++)s[c]=t(i?u?an(ot(e[c])):ot(e[c]):e[c],c,void 0,l)}else if(typeof e=="number"){s=new Array(e);for(let a=0;a<e;a++)s[a]=t(a+1,a,void 0,l)}else if(Ae(e))if(e[Symbol.iterator])s=Array.from(e,(a,i)=>t(a,i,void 0,l));else{const a=Object.keys(e);s=new Array(a.length);for(let i=0,u=a.length;i<u;i++){const c=a[i];s[i]=t(e[c],c,i,l)}}else s=[];return s}const Zr=e=>e?Xo(e)?Ar(e):Zr(e.parent):null,xn=De(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Zr(e.parent),$root:e=>Zr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Bo(e),$forceUpdate:e=>e.f||(e.f=()=>{As(e.update)}),$nextTick:e=>e.n||(e.n=Xe.bind(e.proxy)),$watch:e=>ma.bind(e)}),Br=(e,t)=>e!==ke&&!e.__isScriptSetup&&we(e,t),Ea={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:l,accessCache:o,type:a,appContext:i}=e;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return l[t]}else{if(Br(r,t))return o[t]=1,r[t];if(s!==ke&&we(s,t))return o[t]=2,s[t];if(we(l,t))return o[t]=3,l[t];if(n!==ke&&we(n,t))return o[t]=4,n[t];es&&(o[t]=0)}}const u=xn[t];let c,f;if(u)return t==="$attrs"&&Le(e.attrs,"get",""),u(e);if((c=a.__cssModules)&&(c=c[t]))return c;if(n!==ke&&we(n,t))return o[t]=4,n[t];if(f=i.config.globalProperties,we(f,t))return f[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:l}=e;return Br(s,t)?(s[t]=n,!0):r!==ke&&we(r,t)?(r[t]=n,!0):we(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,props:l,type:o}},a){let i;return!!(n[a]||e!==ke&&a[0]!=="$"&&we(e,a)||Br(t,a)||we(l,a)||we(r,a)||we(xn,a)||we(s.config.globalProperties,a)||(i=o.__cssModules)&&i[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:we(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Us(e){return Q(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let es=!0;function Ma(e){const t=Bo(e),n=e.proxy,r=e.ctx;es=!1,t.beforeCreate&&qs(t.beforeCreate,e,"bc");const{data:s,computed:l,methods:o,watch:a,provide:i,inject:u,created:c,beforeMount:f,mounted:p,beforeUpdate:d,updated:b,activated:C,deactivated:w,beforeDestroy:E,beforeUnmount:k,destroyed:B,unmounted:A,render:$,renderTracked:X,renderTriggered:ee,errorCaptured:de,serverPrefetch:z,expose:T,inheritAttrs:V,components:ne,directives:me,filters:ae}=t;if(u&&Ra(u,r,null),o)for(const he in o){const ce=o[he];se(ce)&&(r[he]=ce.bind(n))}if(s){const he=s.call(n,n);Ae(he)&&(e.data=Dt(he))}if(es=!0,l)for(const he in l){const ce=l[he],tt=se(ce)?ce.bind(n,n):se(ce.get)?ce.get.bind(n,n):gt,rt=!se(ce)&&se(ce.set)?ce.set.bind(n):gt,Ke=ve({get:tt,set:rt});Object.defineProperty(r,he,{enumerable:!0,configurable:!0,get:()=>Ke.value,set:Oe=>Ke.value=Oe})}if(a)for(const he in a)To(a[he],r,n,he);if(i){const he=se(i)?i.call(n):i;Reflect.ownKeys(he).forEach(ce=>{Yn(ce,he[ce])})}c&&qs(c,e,"c");function xe(he,ce){Q(ce)?ce.forEach(tt=>he(tt.bind(n))):ce&&he(ce.bind(n))}if(xe(wa,f),xe(hn,p),xe(Pa,d),xe(Aa,b),xe(ya,C),xe(ba,w),xe(_a,de),xe(xa,X),xe(Sa,ee),xe(xs,k),xe(_o,A),xe(ka,z),Q(T))if(T.length){const he=e.exposed||(e.exposed={});T.forEach(ce=>{Object.defineProperty(he,ce,{get:()=>n[ce],set:tt=>n[ce]=tt,enumerable:!0})})}else e.exposed||(e.exposed={});$&&e.render===gt&&(e.render=$),V!=null&&(e.inheritAttrs=V),ne&&(e.components=ne),me&&(e.directives=me),z&&So(e)}function Ra(e,t,n=gt){Q(e)&&(e=ts(e));for(const r in e){const s=e[r];let l;Ae(s)?"default"in s?l=lt(s.from||r,s.default,!0):l=lt(s.from||r):l=lt(s),Ge(l)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>l.value,set:o=>l.value=o}):t[r]=l}}function qs(e,t,n){it(Q(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function To(e,t,n,r){let s=r.includes(".")?Po(n,r):()=>n[r];if(Ee(e)){const l=t[e];se(l)&&Gt(s,l)}else if(se(e))Gt(s,e.bind(n));else if(Ae(e))if(Q(e))e.forEach(l=>To(l,t,n,r));else{const l=se(e.handler)?e.handler.bind(n):t[e.handler];se(l)&&Gt(s,l,e)}}function Bo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:l,config:{optionMergeStrategies:o}}=e.appContext,a=l.get(t);let i;return a?i=a:!s.length&&!n&&!r?i=t:(i={},s.length&&s.forEach(u=>sr(i,u,o,!0)),sr(i,t,o)),Ae(t)&&l.set(t,i),i}function sr(e,t,n,r=!1){const{mixins:s,extends:l}=t;l&&sr(e,l,n,!0),s&&s.forEach(o=>sr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=Ta[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const Ta={data:Ws,props:Ks,emits:Ks,methods:bn,computed:bn,beforeCreate:Ve,created:Ve,beforeMount:Ve,mounted:Ve,beforeUpdate:Ve,updated:Ve,beforeDestroy:Ve,beforeUnmount:Ve,destroyed:Ve,unmounted:Ve,activated:Ve,deactivated:Ve,errorCaptured:Ve,serverPrefetch:Ve,components:bn,directives:bn,watch:$a,provide:Ws,inject:Ba};function Ws(e,t){return t?e?function(){return De(se(e)?e.call(this,this):e,se(t)?t.call(this,this):t)}:t:e}function Ba(e,t){return bn(ts(e),ts(t))}function ts(e){if(Q(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ve(e,t){return e?[...new Set([].concat(e,t))]:t}function bn(e,t){return e?De(Object.create(null),e,t):t}function Ks(e,t){return e?Q(e)&&Q(t)?[...new Set([...e,...t])]:De(Object.create(null),Us(e),Us(t??{})):t}function $a(e,t){if(!e)return t;if(!t)return e;const n=De(Object.create(null),e);for(const r in t)n[r]=Ve(e[r],t[r]);return n}function $o(){return{app:null,config:{isNativeTag:Vl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Na=0;function Oa(e,t){return function(r,s=null){se(r)||(r=De({},r)),s!=null&&!Ae(s)&&(s=null);const l=$o(),o=new WeakSet,a=[];let i=!1;const u=l.app={_uid:Na++,_component:r,_props:s,_container:null,_context:l,_instance:null,version:pu,get config(){return l.config},set config(c){},use(c,...f){return o.has(c)||(c&&se(c.install)?(o.add(c),c.install(u,...f)):se(c)&&(o.add(c),c(u,...f))),u},mixin(c){return l.mixins.includes(c)||l.mixins.push(c),u},component(c,f){return f?(l.components[c]=f,u):l.components[c]},directive(c,f){return f?(l.directives[c]=f,u):l.directives[c]},mount(c,f,p){if(!i){const d=u._ceVNode||D(r,s);return d.appContext=l,p===!0?p="svg":p===!1&&(p=void 0),e(d,c,p),i=!0,u._container=c,c.__vue_app__=u,Ar(d.component)}},onUnmount(c){a.push(c)},unmount(){i&&(it(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,f){return l.provides[c]=f,u},runWithContext(c){const f=on;on=u;try{return c()}finally{on=f}}};return u}}let on=null;const Ha=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${We(t)}Modifiers`]||e[`${jt(t)}Modifiers`];function Ia(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ke;let s=n;const l=t.startsWith("update:"),o=l&&Ha(r,t.slice(7));o&&(o.trim&&(s=n.map(c=>Ee(c)?c.trim():c)),o.number&&(s=s.map(pr)));let a,i=r[a=xr(t)]||r[a=xr(We(t))];!i&&l&&(i=r[a=xr(jt(t))]),i&&it(i,e,6,s);const u=r[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,it(u,e,6,s)}}const Da=new WeakMap;function No(e,t,n=!1){const r=n?Da:t.emitsCache,s=r.get(e);if(s!==void 0)return s;const l=e.emits;let o={},a=!1;if(!se(e)){const i=u=>{const c=No(u,t,!0);c&&(a=!0,De(o,c))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return!l&&!a?(Ae(e)&&r.set(e,null),null):(Q(l)?l.forEach(i=>o[i]=null):De(o,l),Ae(e)&&r.set(e,o),o)}function wr(e,t){return!e||!cr(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),we(e,t[0].toLowerCase()+t.slice(1))||we(e,jt(t))||we(e,t))}function Js(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[l],slots:o,attrs:a,emit:i,render:u,renderCache:c,props:f,data:p,setupState:d,ctx:b,inheritAttrs:C}=e,w=tr(e);let E,k;try{if(n.shapeFlag&4){const A=s||r,$=A;E=ht(u.call($,A,c,f,d,p,b)),k=a}else{const A=t;E=ht(A.length>1?A(f,{attrs:a,slots:o,emit:i}):A(f,null)),k=t.props?a:La(a)}}catch(A){Xt.length=0,vr(A,e,1),E=D(Rt)}let B=E;if(k&&C!==!1){const A=Object.keys(k),{shapeFlag:$}=B;A.length&&$&7&&(l&&A.some(fr)&&(k=Fa(k,l)),B=un(B,k,!1,!0))}if(n.dirs&&(B=un(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition){const A=br(B.type)&&Ao(B)||B;ks(A,n.transition)}return E=B,tr(w),E}const La=e=>{let t;for(const n in e)(n==="class"||n==="style"||cr(n))&&((t||(t={}))[n]=e[n]);return t},Fa=(e,t)=>{const n={};for(const r in e)(!fr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ga(e,t,n){const{props:r,children:s,component:l}=e,{props:o,children:a,patchFlag:i}=t,u=l.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&i>=0){if(i&1024)return!0;if(i&16)return r?Ys(r,o,u):!!o;if(i&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const p=c[f];if(Oo(o,r,p)&&!wr(u,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ys(r,o,u):!0:!!o;return!1}function Ys(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const l=r[s];if(Oo(t,e,l)&&!wr(n,l))return!0}return!1}function Oo(e,t,n){const r=e[n],s=t[n];return n==="style"&&Ae(r)&&Ae(s)?!xt(r,s):r!==s}function ja({vnode:e,parent:t,suspense:n},r){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=r,e=s),s===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}const Ho={},Io=()=>Object.create(Ho),Do=e=>Object.getPrototypeOf(e)===Ho;function za(e,t,n,r=!1){const s={},l=Io();e.propsDefaults=Object.create(null),Lo(e,t,s,l);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:ho(s):e.type.props?e.props=s:e.props=l,e.attrs=l}function Va(e,t,n,r){const{props:s,attrs:l,vnode:{patchFlag:o}}=e,a=Ce(s),[i]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let f=0;f<c.length;f++){let p=c[f];if(wr(e.emitsOptions,p))continue;const d=t[p];if(i)if(we(l,p))d!==l[p]&&(l[p]=d,u=!0);else{const b=We(p);s[b]=ns(i,a,b,d,e,!1)}else d!==l[p]&&(l[p]=d,u=!0)}}}else{Lo(e,t,s,l)&&(u=!0);let c;for(const f in a)(!t||!we(t,f)&&((c=jt(f))===f||!we(t,c)))&&(i?n&&(n[f]!==void 0||n[c]!==void 0)&&(s[f]=ns(i,a,f,void 0,e,!0)):delete s[f]);if(l!==a)for(const f in l)(!t||!we(t,f))&&(delete l[f],u=!0)}u&&At(e.attrs,"set","")}function Lo(e,t,n,r){const[s,l]=e.propsOptions;let o=!1,a;if(t)for(let i in t){if(wn(i))continue;const u=t[i];let c;s&&we(s,c=We(i))?!l||!l.includes(c)?n[c]=u:(a||(a={}))[c]=u:wr(e.emitsOptions,i)||(!(i in r)||u!==r[i])&&(r[i]=u,o=!0)}if(l){const i=Ce(n),u=a||ke;for(let c=0;c<l.length;c++){const f=l[c];n[f]=ns(s,i,f,u[f],e,!we(u,f))}}return o}function ns(e,t,n,r,s,l){const o=e[n];if(o!=null){const a=we(o,"default");if(a&&r===void 0){const i=o.default;if(o.type!==Function&&!o.skipFactory&&se(i)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const c=Fn(s);r=u[n]=i.call(null,t),c()}}else r=i;s.ce&&s.ce._setProp(n,r)}o[0]&&(l&&!a?r=!1:o[1]&&(r===""||r===jt(n))&&(r=!0))}return r}const Ua=new WeakMap;function Fo(e,t,n=!1){const r=n?Ua:t.propsCache,s=r.get(e);if(s)return s;const l=e.props,o={},a=[];let i=!1;if(!se(e)){const c=f=>{i=!0;const[p,d]=Fo(f,t,!0);De(o,p),d&&a.push(...d)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!l&&!i)return Ae(e)&&r.set(e,sn),sn;if(Q(l))for(let c=0;c<l.length;c++){const f=We(l[c]);Xs(f)&&(o[f]=ke)}else if(l)for(const c in l){const f=We(c);if(Xs(f)){const p=l[c],d=o[f]=Q(p)||se(p)?{type:p}:De({},p),b=d.type;let C=!1,w=!0;if(Q(b))for(let E=0;E<b.length;++E){const k=b[E],B=se(k)&&k.name;if(B==="Boolean"){C=!0;break}else B==="String"&&(w=!1)}else C=se(b)&&b.name==="Boolean";d[0]=C,d[1]=w,(C||we(d,"default"))&&a.push(f)}}const u=[o,a];return Ae(e)&&r.set(e,u),u}function Xs(e){return e[0]!=="$"&&!wn(e)}const _s=e=>e==="_"||e==="_ctx"||e==="$stable",Es=e=>Q(e)?e.map(ht):[ht(e)],qa=(e,t,n)=>{if(t._n)return t;const r=yr((...s)=>Es(t(...s)),n);return r._c=!1,r},Go=(e,t,n)=>{const r=e._ctx;for(const s in e){if(_s(s))continue;const l=e[s];if(se(l))t[s]=qa(s,l,r);else if(l!=null){const o=Es(l);t[s]=()=>o}}},jo=(e,t)=>{const n=Es(t);e.slots.default=()=>n},zo=(e,t,n)=>{for(const r in t)(n||!_s(r))&&(e[r]=t[r])},Wa=(e,t,n)=>{const r=e.slots=Io();if(e.vnode.shapeFlag&32){const s=t._;s?(zo(r,t,n),n&&Kl(r,"_",s,!0)):Go(t,r)}else t&&jo(e,t)},Ka=(e,t,n)=>{const{vnode:r,slots:s}=e;let l=!0,o=ke;if(r.shapeFlag&32){const a=t._;a?n&&a===1?l=!1:zo(s,t,n):(l=!t.$stable,Go(t,s)),o=t}else t&&(jo(e,t),o={default:1});if(l)for(const a in s)!_s(a)&&o[a]==null&&delete s[a]},Je=Za;function Ja(e){return Ya(e)}function Ya(e,t){const n=mr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:l,createElement:o,createText:a,createComment:i,setText:u,setElementText:c,parentNode:f,nextSibling:p,setScopeId:d=gt,insertStaticContent:b}=e,C=(m,v,y,S=null,_=null,P=null,I=void 0,H=null,N=!!v.dynamicChildren)=>{if(m===v)return;m&&!mn(m,v)&&(S=x(m),Oe(m,_,P,!0),m=null),v.patchFlag===-2&&(N=!1,v.dynamicChildren=null);const{type:M,ref:Y,shapeFlag:G}=v;switch(M){case Pr:w(m,v,y,S);break;case Rt:E(m,v,y,S);break;case Xn:m==null&&k(v,y,S,I);break;case He:ne(m,v,y,S,_,P,I,H,N);break;default:G&1?$(m,v,y,S,_,P,I,H,N):G&6?me(m,v,y,S,_,P,I,H,N):(G&64||G&128)&&M.process(m,v,y,S,_,P,I,H,N,K)}Y!=null&&_?kn(Y,m&&m.ref,P,v||m,!v):Y==null&&m&&m.ref!=null&&kn(m.ref,null,P,m,!0)},w=(m,v,y,S)=>{if(m==null)r(v.el=a(v.children),y,S);else{const _=v.el=m.el;v.children!==m.children&&u(_,v.children)}},E=(m,v,y,S)=>{m==null?r(v.el=i(v.children||""),y,S):v.el=m.el},k=(m,v,y,S)=>{[m.el,m.anchor]=b(m.children,v,y,S,m.el,m.anchor)},B=({el:m,anchor:v},y,S)=>{let _;for(;m&&m!==v;)_=p(m),r(m,y,S),m=_;r(v,y,S)},A=({el:m,anchor:v})=>{let y;for(;m&&m!==v;)y=p(m),s(m),m=y;s(v)},$=(m,v,y,S,_,P,I,H,N)=>{if(v.type==="svg"?I="svg":v.type==="math"&&(I="mathml"),m==null)X(v,y,S,_,P,I,H,N);else{const M=m.el&&m.el._isVueCE?m.el:null;try{M&&M._beginPatch(),z(m,v,_,P,I,H,N)}finally{M&&M._endPatch()}}},X=(m,v,y,S,_,P,I,H)=>{let N,M;const{props:Y,shapeFlag:G,transition:J,dirs:te}=m;if(N=m.el=o(m.type,P,Y&&Y.is,Y),G&8?c(N,m.children):G&16&&de(m.children,N,null,S,_,$r(m,P),I,H),te&&zt(m,null,S,"created"),ee(N,m,m.scopeId,I,S),Y){for(const Pe in Y)Pe!=="value"&&!wn(Pe)&&l(N,Pe,null,Y[Pe],P,S);"value"in Y&&l(N,"value",null,Y.value,P),(M=Y.onVnodeBeforeMount)&&ct(M,S,m)}te&&zt(m,null,S,"beforeMount");const fe=Xa(_,J);fe&&J.beforeEnter(N),r(N,v,y),((M=Y&&Y.onVnodeMounted)||fe||te)&&Je(()=>{try{M&&ct(M,S,m),fe&&J.enter(N),te&&zt(m,null,S,"mounted")}finally{}},_)},ee=(m,v,y,S,_)=>{if(y&&d(m,y),S)for(let P=0;P<S.length;P++)d(m,S[P]);if(_){let P=_.subTree;if(v===P||Wo(P.type)&&(P.ssContent===v||P.ssFallback===v)){const I=_.vnode;ee(m,I,I.scopeId,I.slotScopeIds,_.parent)}}},de=(m,v,y,S,_,P,I,H,N=0)=>{for(let M=N;M<m.length;M++){const Y=m[M]=H?Pt(m[M]):ht(m[M]);C(null,Y,v,y,S,_,P,I,H)}},z=(m,v,y,S,_,P,I)=>{const H=v.el=m.el;let{patchFlag:N,dynamicChildren:M,dirs:Y}=v;N|=m.patchFlag&16;const G=m.props||ke,J=v.props||ke;let te;if(y&&Vt(y,!1),(te=J.onVnodeBeforeUpdate)&&ct(te,y,v,m),Y&&zt(v,m,y,"beforeUpdate"),y&&Vt(y,!0),M&&(!m.dynamicChildren||m.dynamicChildren.length!==M.length)&&(N=0,I=!1,M=null),(G.innerHTML&&J.innerHTML==null||G.textContent&&J.textContent==null)&&c(H,""),M?T(m.dynamicChildren,M,H,y,S,$r(v,_),P):I||ce(m,v,H,null,y,S,$r(v,_),P,!1),N>0){if(N&16)V(H,G,J,y,_);else if(N&2&&G.class!==J.class&&l(H,"class",null,J.class,_),N&4&&l(H,"style",G.style,J.style,_),N&8){const fe=v.dynamicProps;for(let Pe=0;Pe<fe.length;Pe++){const ye=fe[Pe],Re=G[ye],Be=J[ye];(Be!==Re||ye==="value")&&l(H,ye,Re,Be,_,y)}}N&1&&m.children!==v.children&&c(H,v.children)}else!I&&M==null&&V(H,G,J,y,_);((te=J.onVnodeUpdated)||Y)&&Je(()=>{te&&ct(te,y,v,m),Y&&zt(v,m,y,"updated")},S)},T=(m,v,y,S,_,P,I)=>{for(let H=0;H<v.length;H++){const N=m[H],M=v[H],Y=N.el&&(N.type===He||!mn(N,M)||N.shapeFlag&198)?f(N.el):y;C(N,M,Y,null,S,_,P,I,!0)}},V=(m,v,y,S,_)=>{if(v!==y){if(v!==ke)for(const P in v)!wn(P)&&!(P in y)&&l(m,P,v[P],null,_,S);for(const P in y){if(wn(P))continue;const I=y[P],H=v[P];I!==H&&P!=="value"&&l(m,P,H,I,_,S)}"value"in y&&l(m,"value",v.value,y.value,_)}},ne=(m,v,y,S,_,P,I,H,N)=>{const M=v.el=m?m.el:a(""),Y=v.anchor=m?m.anchor:a("");let{patchFlag:G,dynamicChildren:J,slotScopeIds:te}=v;te&&(H=H?H.concat(te):te),m==null?(r(M,y,S),r(Y,y,S),de(v.children||[],y,Y,_,P,I,H,N)):G>0&&G&64&&J&&m.dynamicChildren&&m.dynamicChildren.length===J.length?(T(m.dynamicChildren,J,y,_,P,I,H),(v.key!=null||_&&v===_.subTree)&&Vo(m,v,!0)):ce(m,v,y,Y,_,P,I,H,N)},me=(m,v,y,S,_,P,I,H,N)=>{v.slotScopeIds=H,m==null?v.shapeFlag&512?_.ctx.activate(v,y,S,I,N):ae(v,y,S,_,P,I,N):Me(m,v,N)},ae=(m,v,y,S,_,P,I)=>{const H=m.component=ou(m,S,_);if(Ss(m)&&(H.ctx.renderer=K),au(H,!1,I),H.asyncDep){if(_&&_.registerDep(H,xe,I),!m.el){const N=H.subTree=D(Rt);E(null,N,v,y),m.placeholder=N.el}}else xe(H,m,v,y,_,P,I)},Me=(m,v,y)=>{const S=v.component=m.component;if(Ga(m,v,y))if(S.asyncDep&&!S.asyncResolved){he(S,v,y);return}else S.next=v,S.update();else v.el=m.el,S.vnode=v},xe=(m,v,y,S,_,P,I)=>{const H=()=>{if(m.isMounted){let{next:G,bu:J,u:te,parent:fe,vnode:Pe}=m;{const Ye=Uo(m);if(Ye){G&&(G.el=Pe.el,he(m,G,I)),Ye.asyncDep.then(()=>{Je(()=>{m.isUnmounted||M()},_)});return}}let ye=G,Re;Vt(m,!1),G?(G.el=Pe.el,he(m,G,I)):G=Pe,J&&Jn(J),(Re=G.props&&G.props.onVnodeBeforeUpdate)&&ct(Re,fe,G,Pe),Vt(m,!0);const Be=Js(m),ze=m.subTree;m.subTree=Be,C(ze,Be,f(ze.el),x(ze),m,_,P),G.el=Be.el,ye===null&&ja(m,Be.el),te&&Je(te,_),(Re=G.props&&G.props.onVnodeUpdated)&&Je(()=>ct(Re,fe,G,Pe),_)}else{let G;const{el:J,props:te}=v,{bm:fe,m:Pe,parent:ye,root:Re,type:Be}=m,ze=Sn(v);Vt(m,!1),fe&&Jn(fe),!ze&&(G=te&&te.onVnodeBeforeMount)&&ct(G,ye,v),Vt(m,!0);{Re.ce&&Re.ce._hasShadowRoot()&&Re.ce._injectChildStyle(Be,m.parent?m.parent.type:void 0);const Ye=m.subTree=Js(m);C(null,Ye,y,S,m,_,P),v.el=Ye.el}if(Pe&&Je(Pe,_),!ze&&(G=te&&te.onVnodeMounted)){const Ye=v;Je(()=>ct(G,ye,Ye),_)}(v.shapeFlag&256||ye&&Sn(ye.vnode)&&ye.vnode.shapeFlag&256)&&m.a&&Je(m.a,_),m.isMounted=!0,v=y=S=null}};m.scope.on();const N=m.effect=new Ql(H);m.scope.off();const M=m.update=N.run.bind(N),Y=m.job=N.runIfDirty.bind(N);Y.i=m,Y.id=m.uid,N.scheduler=()=>As(Y),Vt(m,!0),M()},he=(m,v,y)=>{v.component=m;const S=m.vnode.props;m.vnode=v,m.next=null,Va(m,v.props,S,y),Ka(m,v.children,y),_t(),Gs(m),Et()},ce=(m,v,y,S,_,P,I,H,N=!1)=>{const M=m&&m.children,Y=m?m.shapeFlag:0,G=v.children,{patchFlag:J,shapeFlag:te}=v;if(J>0){if(J&128){rt(M,G,y,S,_,P,I,H,N);return}else if(J&256){tt(M,G,y,S,_,P,I,H,N);return}}te&8?(Y&16&&je(M,_,P),G!==M&&c(y,G)):Y&16?te&16?rt(M,G,y,S,_,P,I,H,N):je(M,_,P,!0):(Y&8&&c(y,""),te&16&&de(G,y,S,_,P,I,H,N))},tt=(m,v,y,S,_,P,I,H,N)=>{m=m||sn,v=v||sn;const M=m.length,Y=v.length,G=Math.min(M,Y);let J;for(J=0;J<G;J++){const te=v[J]=N?Pt(v[J]):ht(v[J]);C(m[J],te,y,null,_,P,I,H,N)}M>Y?je(m,_,P,!0,!1,G):de(v,y,S,_,P,I,H,N,G)},rt=(m,v,y,S,_,P,I,H,N)=>{let M=0;const Y=v.length;let G=m.length-1,J=Y-1;for(;M<=G&&M<=J;){const te=m[M],fe=v[M]=N?Pt(v[M]):ht(v[M]);if(mn(te,fe))C(te,fe,y,null,_,P,I,H,N);else break;M++}for(;M<=G&&M<=J;){const te=m[G],fe=v[J]=N?Pt(v[J]):ht(v[J]);if(mn(te,fe))C(te,fe,y,null,_,P,I,H,N);else break;G--,J--}if(M>G){if(M<=J){const te=J+1,fe=te<Y?v[te].el:S;for(;M<=J;)C(null,v[M]=N?Pt(v[M]):ht(v[M]),y,fe,_,P,I,H,N),M++}}else if(M>J)for(;M<=G;)Oe(m[M],_,P,!0),M++;else{const te=M,fe=M,Pe=new Map;for(M=fe;M<=J;M++){const ie=v[M]=N?Pt(v[M]):ht(v[M]);ie.key!=null&&Pe.set(ie.key,M)}let ye,Re=0;const Be=J-fe+1;let ze=!1,Ye=0;const F=new Array(Be);for(M=0;M<Be;M++)F[M]=0;for(M=te;M<=G;M++){const ie=m[M];if(Re>=Be){Oe(ie,_,P,!0);continue}let ge;if(ie.key!=null)ge=Pe.get(ie.key);else for(ye=fe;ye<=J;ye++)if(F[ye-fe]===0&&mn(ie,v[ye])){ge=ye;break}ge===void 0?Oe(ie,_,P,!0):(F[ge-fe]=M+1,ge>=Ye?Ye=ge:ze=!0,C(ie,v[ge],y,null,_,P,I,H,N),Re++)}const g=ze?Qa(F):sn;for(ye=g.length-1,M=Be-1;M>=0;M--){const ie=fe+M,ge=v[ie],R=v[ie+1],oe=ie+1<Y?R.el||qo(R):S;F[M]===0?C(null,ge,y,oe,_,P,I,H,N):ze&&(ye<0||M!==g[ye]?Ke(ge,y,oe,2):ye--)}}},Ke=(m,v,y,S,_=null)=>{const{el:P,type:I,transition:H,children:N,shapeFlag:M}=m;if(M&6){Ke(m.component.subTree,v,y,S);return}if(M&128){m.suspense.move(v,y,S);return}if(M&64){I.move(m,v,y,K);return}if(I===He){r(P,v,y);for(let G=0;G<N.length;G++)Ke(N[G],v,y,S);r(m.anchor,v,y);return}if(I===Xn){B(m,v,y);return}if(S!==2&&M&1&&H)if(S===0)H.persisted&&!P[Tr]?r(P,v,y):(H.beforeEnter(P),r(P,v,y),Je(()=>H.enter(P),_));else{const{leave:G,delayLeave:J,afterLeave:te}=H,fe=()=>{m.ctx.isUnmounted?s(P):r(P,v,y)},Pe=()=>{const ye=P._isLeaving||!!P[Tr];P._isLeaving&&P[Tr](!0),H.persisted&&!ye?fe():G(P,()=>{fe(),te&&te()})};J?J(P,fe,Pe):Pe()}else r(P,v,y)},Oe=(m,v,y,S=!1,_=!1)=>{const{type:P,props:I,ref:H,children:N,dynamicChildren:M,shapeFlag:Y,patchFlag:G,dirs:J,cacheIndex:te,memo:fe}=m;if(G===-2&&(_=!1),H!=null&&(_t(),kn(H,null,y,m,!0),Et()),te!=null&&(v.renderCache[te]=void 0),Y&256){v.ctx.deactivate(m);return}const Pe=Y&1&&J,ye=!Sn(m);let Re;if(ye&&(Re=I&&I.onVnodeBeforeUnmount)&&ct(Re,v,m),Y&6)ut(m.component,y,S);else{if(Y&128){m.suspense.unmount(y,S);return}Pe&&zt(m,null,v,"beforeUnmount"),Y&64?m.type.remove(m,v,y,K,S):M&&!M.hasOnce&&(P!==He||G>0&&G&64)?je(M,v,y,!1,!0):(P===He&&G&384||!_&&Y&16)&&je(N,v,y),S&&yt(m)}const Be=fe!=null&&te==null;(ye&&(Re=I&&I.onVnodeUnmounted)||Pe||Be)&&Je(()=>{Re&&ct(Re,v,m),Pe&&zt(m,null,v,"unmounted"),Be&&(m.el=null)},y)},yt=m=>{const{type:v,el:y,anchor:S,transition:_}=m;if(v===He){Bt(y,S);return}if(v===Xn){A(m);return}const P=()=>{s(y),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(m.shapeFlag&1&&_&&!_.persisted){const{leave:I,delayLeave:H}=_,N=()=>I(y,P);H?H(m.el,P,N):N()}else P()},Bt=(m,v)=>{let y;for(;m!==v;)y=p(m),s(m),m=y;s(v)},ut=(m,v,y)=>{const{bum:S,scope:_,job:P,subTree:I,um:H,m:N,a:M}=m;Qs(N),Qs(M),S&&Jn(S),_.stop(),P&&(P.flags|=8,Oe(I,m,v,y)),H&&Je(H,v),Je(()=>{m.isUnmounted=!0},v)},je=(m,v,y,S=!1,_=!1,P=0)=>{for(let I=P;I<m.length;I++)Oe(m[I],v,y,S,_)},x=m=>{if(m.shapeFlag&6)return x(m.component.subTree);if(m.shapeFlag&128)return m.suspense.next();const v=p(m.anchor||m.el),y=v&&v[ga];return y?p(y):v};let j=!1;const L=(m,v,y)=>{let S;m==null?v._vnode&&(Oe(v._vnode,null,null,!0),S=v._vnode.component):C(v._vnode||null,m,v,null,null,null,y),v._vnode=m,j||(j=!0,Gs(S),yo(),j=!1)},K={p:C,um:Oe,m:Ke,r:yt,mt:ae,mc:de,pc:ce,pbc:T,n:x,o:e};return{render:L,hydrate:void 0,createApp:Oa(L)}}function $r({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Vt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Xa(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Vo(e,t,n=!1){const r=e.children,s=t.children;if(Q(r)&&Q(s))for(let l=0;l<r.length;l++){const o=r[l];let a=s[l];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[l]=Pt(s[l]),a.el=o.el),!n&&a.patchFlag!==-2&&Vo(o,a)),a.type===Pr&&(a.patchFlag===-1&&(a=s[l]=Pt(a)),a.el=o.el),a.type===Rt&&!a.el&&(a.el=o.el)}}function Qa(e){const t=e.slice(),n=[0];let r,s,l,o,a;const i=e.length;for(r=0;r<i;r++){const u=e[r];if(u!==0){if(s=n[n.length-1],e[s]<u){t[r]=s,n.push(r);continue}for(l=0,o=n.length-1;l<o;)a=l+o>>1,e[n[a]]<u?l=a+1:o=a;u<e[n[l]]&&(l>0&&(t[r]=n[l-1]),n[l]=r)}}for(l=n.length,o=n[l-1];l-- >0;)n[l]=o,o=t[o];return n}function Uo(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Uo(t)}function Qs(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function qo(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?qo(t.subTree):null}const Wo=e=>e.__isSuspense;function Za(e,t){t&&t.pendingBranch?Q(e)?t.effects.push(...e):t.effects.push(e):da(e)}const He=Symbol.for("v-fgt"),Pr=Symbol.for("v-txt"),Rt=Symbol.for("v-cmt"),Xn=Symbol.for("v-stc"),Xt=[];let Ze=null;function Z(e=!1){Xt.push(Ze=e?null:[])}function Ko(){Xt.pop(),Ze=Xt[Xt.length-1]||null}let Bn=1;function lr(e,t=!1){Bn+=e,e<0&&Ze&&t&&(Ze.hasOnce=!0)}function Jo(e){return e.dynamicChildren=Bn>0?Ze||sn:null,Ko(),Bn>0&&Ze&&Ze.push(e),e}function ue(e,t,n,r,s,l){return Jo(h(e,t,n,r,s,l,!0))}function et(e,t,n,r,s){return Jo(D(e,t,n,r,s,!0))}function or(e){return e?e.__v_isVNode===!0:!1}function mn(e,t){return e.type===t.type&&e.key===t.key}const Yo=({key:e})=>e??null,Qn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ee(e)||Ge(e)||se(e)?{i:Qe,r:e,k:t,f:!!n}:e:null);function h(e,t=null,n=null,r=0,s=null,l=e===He?0:1,o=!1,a=!1){const i={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Yo(t),ref:t&&Qn(t),scopeId:Co,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Qe};return a?(ir(i,n),l&128&&e.normalize(i)):n&&(i.shapeFlag|=Ee(n)?8:16),Bn>0&&!o&&Ze&&(i.patchFlag>0||l&6)&&i.patchFlag!==32&&Ze.push(i),i}const D=eu;function eu(e,t=null,n=null,r=0,s=null,l=!1){if((!e||e===Mo)&&(e=Rt),or(e)){const a=un(e,t,!0);return n&&ir(a,n),Bn>0&&!l&&Ze&&(a.shapeFlag&6?Ze[Ze.indexOf(e)]=a:Ze.push(a)),a.patchFlag=-2,a}if(hu(e)&&(e=e.__vccOpts),t){t=tu(t);let{class:a,style:i}=t;a&&!Ee(a)&&(t.class=pe(a)),Ae(i)&&(Ps(i)&&!Q(i)&&(i=De({},i)),t.style=Ht(i))}const o=Ee(e)?1:Wo(e)?128:br(e)?64:Ae(e)?4:se(e)?2:0;return h(e,t,n,r,s,o,l,!0)}function tu(e){return e?Ps(e)||Do(e)?De({},e):e:null}function un(e,t,n=!1,r=!1){const{props:s,ref:l,patchFlag:o,children:a,transition:i}=e,u=t?ru(s||{},t):s,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Yo(u),ref:t&&t.ref?n&&l?Q(l)?l.concat(Qn(t)):[l,Qn(t)]:Qn(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==He?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:i,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&un(e.ssContent),ssFallback:e.ssFallback&&un(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return i&&r&&ks(c,i.clone(c)),c}function U(e=" ",t=0){return D(Pr,null,e,t)}function nu(e,t){const n=D(Xn,null,e);return n.staticCount=t,n}function Wt(e="",t=!1){return t?(Z(),et(Rt,null,e)):D(Rt,null,e)}function ht(e){return e==null||typeof e=="boolean"?D(Rt):Q(e)?D(He,null,e.slice()):or(e)?Pt(e):D(Pr,null,String(e))}function Pt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:un(e)}function ir(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(Q(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),ir(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Do(t)?t._ctx=Qe:s===3&&Qe&&(Qe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(se(t)){if(r&65){ir(e,{default:t});return}t={default:t,_ctx:Qe},n=32}else t=String(t),r&64?(n=16,t=[U(t)]):n=8;e.children=t,e.shapeFlag|=n}function ru(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=pe([t.class,r.class]));else if(s==="style")t.style=Ht([t.style,r.style]);else if(cr(s)){const l=t[s],o=r[s];o&&l!==o&&!(Q(l)&&l.includes(o))?t[s]=l?[].concat(l,o):o:o==null&&l==null&&!fr(s)&&(t[s]=o)}else s!==""&&(t[s]=r[s])}return t}function ct(e,t,n,r=null){it(e,t,7,[n,r])}const su=$o();let lu=0;function ou(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||su,l={uid:lu++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Di(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fo(r,s),emitsOptions:No(r,s),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:r.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=Ia.bind(null,l),e.ce&&e.ce(l),l}let Fe=null;const iu=()=>Fe||Qe;let ar,$n;{const e=mr(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),l=>{s.length>1?s.forEach(o=>o(l)):s[0](l)}};ar=t("__VUE_INSTANCE_SETTERS__",n=>Fe=n),$n=t("__VUE_SSR_SETTERS__",n=>Nn=n)}const Fn=e=>{const t=Fe;return ar(e),e.scope.on(),()=>{e.scope.off(),ar(t)}},Zs=()=>{Fe&&Fe.scope.off(),ar(null)};function Xo(e){return e.vnode.shapeFlag&4}let Nn=!1;function au(e,t=!1,n=!1){t&&$n(t);const{props:r,children:s}=e.vnode,l=Xo(e);za(e,r,l,t),Wa(e,s,n||t);const o=l?uu(e,t):void 0;return t&&$n(!1),o}function uu(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ea);const{setup:r}=n;if(r){_t();const s=e.setupContext=r.length>1?fu(e):null,l=Fn(e),o=Ln(r,e,0,[e.props,s]),a=Ul(o);if(Et(),l(),(a||e.sp)&&!Sn(e)&&So(e),a){if(o.then(Zs,Zs),t)return o.then(i=>{$n(!0);try{el(e,i,t)}finally{$n(!1)}}).catch(i=>{vr(i,e,0)});e.asyncDep=o}else el(e,o)}else Qo(e)}function el(e,t,n){se(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ae(t)&&(e.setupState=mo(t)),Qo(e)}function Qo(e,t,n){const r=e.type;e.render||(e.render=r.render||gt);{const s=Fn(e);_t();try{Ma(e)}finally{Et(),s()}}}const cu={get(e,t){return Le(e,"get",""),e[t]}};function fu(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,cu),slots:e.slots,emit:e.emit,expose:t}}function Ar(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(mo(ra(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in xn)return xn[n](e)},has(t,n){return n in t||n in xn}})):e.proxy}function du(e,t=!0){return se(e)?e.displayName||e.name:e.name||t&&e.__name}function hu(e){return se(e)&&"__vccOpts"in e}const ve=(e,t)=>ia(e,t,Nn);function On(e,t,n){try{lr(-1);const r=arguments.length;return r===2?Ae(t)&&!Q(t)?or(t)?D(e,null,[t]):D(e,t):D(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&or(n)&&(n=[n]),D(e,t,n))}finally{lr(1)}}const pu="3.5.42";/**
* @vue/runtime-dom v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rs;const tl=typeof window<"u"&&window.trustedTypes;if(tl)try{rs=tl.createPolicy("vue",{createHTML:e=>e})}catch{}const Zo=rs?e=>rs.createHTML(e):e=>e,mu="http://www.w3.org/2000/svg",gu="http://www.w3.org/1998/Math/MathML",wt=typeof document<"u"?document:null,nl=wt&&wt.createElement("template"),vu={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?wt.createElementNS(mu,e):t==="mathml"?wt.createElementNS(gu,e):n?wt.createElement(e,{is:n}):wt.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>wt.createTextNode(e),createComment:e=>wt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>wt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,l){const o=n?n.previousSibling:t.lastChild;if(s&&(s===l||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===l||!(s=s.nextSibling)););else{nl.innerHTML=Zo(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=nl.content;if(r==="svg"||r==="mathml"){const i=a.firstChild;for(;i.firstChild;)a.appendChild(i.firstChild);a.removeChild(i)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},yu=Symbol("_vtc");function bu(e,t,n){const r=e[yu];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const rl=Symbol("_vod"),Cu=Symbol("_vsh"),wu=Symbol(""),Pu=/(?:^|;)\s*display\s*:/;function Au(e,t,n){const r=e.style,s=Ee(n);let l=!1;if(n&&!s){if(t)if(Ee(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Cn(r,a,"")}else for(const o in t)n[o]==null&&Cn(r,o,"");for(const o in n){o==="display"&&(l=!0);const a=n[o];a!=null?Su(e,o,!Ee(t)&&t?t[o]:void 0,a)||Cn(r,o,a):Cn(r,o,"")}}else if(s){if(t!==n){const o=r[wu];o&&(n+=";"+o),r.cssText=n,l=Pu.test(n)}}else t&&e.removeAttribute("style");rl in e&&(e[rl]=l?r.display:"",e[Cu]&&(r.display="none"))}const qn=/\s*!important$/;function Cn(e,t,n){if(Q(n))n.forEach(r=>Cn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))qn.test(n)?e.setProperty(t,n.replace(qn,""),"important"):e.setProperty(t,n);else{const r=ku(e,t);qn.test(n)?e.setProperty(jt(r),n.replace(qn,""),"important"):e[r]=n}}const sl=["Webkit","Moz","ms"],Nr={};function ku(e,t){const n=Nr[t];if(n)return n;let r=We(t);if(r!=="filter"&&r in e)return Nr[t]=r;r=hr(r);for(let s=0;s<sl.length;s++){const l=sl[s]+r;if(l in e)return Nr[t]=l}return t}function Su(e,t,n,r){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Ee(r)&&n===r}const ll="http://www.w3.org/1999/xlink";function ol(e,t,n,r,s,l=Hi(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ll,t.slice(6,t.length)):e.setAttributeNS(ll,t,n):n==null||l&&!Jl(n)?e.removeAttribute(t):e.setAttribute(t,l?"":vt(n)?String(n):n)}function il(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Zo(n):n);return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const a=l==="OPTION"?e.getAttribute("value")||"":e.value,i=n==null?e.type==="checkbox"?"on":"":String(n);(a!==i||!("_value"in e))&&(e.value=i),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Jl(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function It(e,t,n,r){e.addEventListener(t,n,r)}function xu(e,t,n,r){e.removeEventListener(t,n,r)}const al=Symbol("_vei");function _u(e,t,n,r,s=null){const l=e[al]||(e[al]={}),o=l[t];if(r&&o)o.value=r;else{const[a,i]=Ru(t);if(r){const u=l[t]=$u(r,s);It(e,a,u,i)}else o&&(xu(e,a,o,i),l[t]=void 0)}}const Eu=/(Once|Passive|Capture)$/,Mu=/^on:?(?:Once|Passive|Capture)$/;function Ru(e){let t,n;for(;(n=e.match(Eu))&&!Mu.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):jt(e.slice(2)),t]}let Or=0;const Tu=Promise.resolve(),Bu=()=>Or||(Tu.then(()=>Or=0),Or=Date.now());function $u(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(Q(s)){const l=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{l.call(r),r._stopped=!0};const o=s.slice(),a=[r];for(let i=0;i<o.length&&!r._stopped;i++){const u=o[i];u&&it(u,t,5,a)}}else it(s,t,5,[r])};return n.value=e,n.attached=Bu(),n}const ul=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Nu=(e,t,n,r,s,l)=>{const o=s==="svg";t==="class"?bu(e,r,o):t==="style"?Au(e,n,r):cr(t)?fr(t)||_u(e,t,n,r,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ou(e,t,r,o))?(il(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ol(e,t,r,o,l,t!=="value")):e._isVueCE&&(Hu(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!Ee(r)))?il(e,We(t),r,l,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),ol(e,t,r,o))};function Ou(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&ul(t)&&se(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ul(t)&&Ee(n)?!1:t in e}function Hu(e,t){const n=e._def.props;if(!n)return!1;const r=We(t);return Array.isArray(n)?n.some(s=>We(s)===r):Object.keys(n).some(s=>We(s)===r)}const cn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Q(t)?n=>Jn(t,n):t};function Iu(e){e.target.composing=!0}function cl(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const mt=Symbol("_assign"),Wn=Symbol("_initialValue");function Hr(e,t,n){return t&&(e=e.trim()),n&&(e=pr(e)),e}const Ne={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e.parentNode&&(e.type==="text"?e[Wn]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[Wn]=e.defaultValue.replace(/\r\n?/g,`
`))),e[mt]=cn(s);const l=r||s.props&&s.props.type==="number";It(e,t?"change":"input",o=>{o.target.composing||e[mt](Hr(e.value,n,l))}),(n||l)&&It(e,"change",()=>{e.value=Hr(e.value,n,l)}),t||(It(e,"compositionstart",Iu),It(e,"compositionend",cl),It(e,"change",cl))},mounted(e,{value:t,modifiers:{trim:n,number:r}}){const s=t??"",l=e[Wn];delete e[Wn],l!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==l?e[mt](Hr(e.value,n,r)):e.value=s},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:l}},o){if(e[mt]=cn(o),e.composing)return;const a=(l||e.type==="number")&&!/^0\d/.test(e.value)?pr(e.value):e.value,i=t??"";if(a===i)return;const u=e.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===e&&e.type!=="range"&&(r&&t===n||s&&e.value.trim()===i)||(e.value=i)}},Kn={deep:!0,created(e,t,n){e[mt]=cn(n),It(e,"change",()=>{const r=e._modelValue,s=Hn(e),l=e.checked,o=e[mt];if(Q(r)){const a=ms(r,s),i=a!==-1;if(l&&!i)o(r.concat(s));else if(!l&&i){const u=[...r];u.splice(a,1),o(u)}}else if(St(r)){const a=new Set(r);l?a.add(s):a.delete(s),o(a)}else o(ei(e,l))})},mounted:fl,beforeUpdate(e,t,n){e[mt]=cn(n),fl(e,t,n)}};function fl(e,{value:t,oldValue:n},r){e._modelValue=t;let s;if(Q(t))s=ms(t,r.props.value)>-1;else if(St(t))s=t.has(r.props.value);else{if(t===n)return;s=xt(t,ei(e,!0))}e.checked!==s&&(e.checked=s)}const dl={deep:!0,created(e,{value:t,modifiers:{number:n}},r){e._modelValue=t,It(e,"change",()=>{const s=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>n?pr(Hn(i)):Hn(i)),l=e.multiple,o=l?St(e._modelValue)?new Set(s):s:s[0],a=e._pendingValue=[l,l?Q(o)?s.slice():s:o];try{e[mt](o)}finally{Xe(()=>{e._pendingValue===a&&(e._pendingValue=void 0)})}}),e[mt]=cn(r)},mounted(e,{value:t}){hl(e,t)},beforeUpdate(e,{value:t},n){e._modelValue=t,e[mt]=cn(n)},updated(e,{value:t}){const n=e._pendingValue;e._pendingValue=void 0,(!n||n[0]!==e.multiple||!Du(t,n[1],n[0]))&&hl(e,t)}};function Du(e,t,n){if(!n||Q(e))return xt(e,t);if(St(e)){if(e.size!==t.length)return!1;for(const r of t)if(!e.has(r))return!1;return!0}return!1}function hl(e,t){const n=e.multiple,r=Q(t);if(!(n&&!r&&!St(t))){for(let s=0,l=e.options.length;s<l;s++){const o=e.options[s],a=Hn(o);if(n)if(r){const i=typeof a;i==="string"||i==="number"?o.selected=t.some(u=>String(u)===String(a)):o.selected=ms(t,a)>-1}else o.selected=t.has(a);else if(xt(Hn(o),t)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Hn(e){return"_value"in e?e._value:e.value}function ei(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Lu=["ctrl","shift","alt","meta"],Fu={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Lu.some(n=>e[`${n}Key`]&&!t.includes(n))},gn=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=((s,...l)=>{for(let o=0;o<t.length;o++){const a=Fu[t[o]];if(a&&a(s,t))return}return e(s,...l)}))},Gu={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ju=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=(s=>{if(!("key"in s))return;const l=jt(s.key);if(t.some(o=>o===l||Gu[o]===l))return e(s)}))},zu=De({patchProp:Nu},vu);let pl;function Vu(){return pl||(pl=Ja(zu))}const Uu=((...e)=>{const t=Vu().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Wu(r);if(!s)return;const l=t._component;!se(l)&&!l.render&&!l.template&&(l.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,qu(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function qu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Wu(e){return Ee(e)?document.querySelector(e):e}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const nn=typeof document<"u";function ti(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ku(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&ti(e.default)}const be=Object.assign;function Ir(e,t){const n={};for(const r in t){const s=t[r];n[r]=at(s)?s.map(e):e(s)}return n}const _n=()=>{},at=Array.isArray;function ml(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const ni=/#/g,Ju=/&/g,Yu=/\//g,Xu=/=/g,Qu=/\?/g,ri=/\+/g,Zu=/%5B/g,ec=/%5D/g,si=/%5E/g,tc=/%60/g,li=/%7B/g,nc=/%7C/g,oi=/%7D/g,rc=/%20/g;function Ms(e){return e==null?"":encodeURI(""+e).replace(nc,"|").replace(Zu,"[").replace(ec,"]")}function sc(e){return Ms(e).replace(li,"{").replace(oi,"}").replace(si,"^")}function ss(e){return Ms(e).replace(ri,"%2B").replace(rc,"+").replace(ni,"%23").replace(Ju,"%26").replace(tc,"`").replace(li,"{").replace(oi,"}").replace(si,"^")}function lc(e){return ss(e).replace(Xu,"%3D")}function oc(e){return Ms(e).replace(ni,"%23").replace(Qu,"%3F")}function ic(e){return oc(e).replace(Yu,"%2F")}function In(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const ac=/\/$/,uc=e=>e.replace(ac,"");function Dr(e,t,n="/"){let r,s={},l="",o="";const a=t.indexOf("#");let i=t.indexOf("?");return i=a>=0&&i>a?-1:i,i>=0&&(r=t.slice(0,i),l=t.slice(i,a>0?a:t.length),s=e(l.slice(1))),a>=0&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=hc(r??t,n),{fullPath:r+l+o,path:r,query:s,hash:In(o)}}function cc(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function gl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function fc(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&fn(t.matched[r],n.matched[s])&&ii(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function fn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ii(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!dc(e[n],t[n]))return!1;return!0}function dc(e,t){return at(e)?vl(e,t):at(t)?vl(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function vl(e,t){return at(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function hc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let l=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")l>1&&l--;else break;return n.slice(0,l).join("/")+"/"+r.slice(o).join("/")}const $t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let ls=(function(e){return e.pop="pop",e.push="push",e})({}),Lr=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function pc(e){if(!e)if(nn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),uc(e)}const mc=/^[^#]+#/;function gc(e,t){return e.replace(mc,"#")+t}function vc(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const kr=()=>({left:window.scrollX,top:window.scrollY});function yc(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=vc(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function yl(e,t){return(history.state?history.state.position-t:-1)+e}const os=new Map;function bc(e,t){os.set(e,t)}function Cc(e){const t=os.get(e);return os.delete(e),t}function wc(e){return typeof e=="string"||e&&typeof e=="object"}function ai(e){return typeof e=="string"||typeof e=="symbol"}let Te=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const ui=Symbol("");Te.MATCHER_NOT_FOUND+"",Te.NAVIGATION_GUARD_REDIRECT+"",Te.NAVIGATION_ABORTED+"",Te.NAVIGATION_CANCELLED+"",Te.NAVIGATION_DUPLICATED+"";function dn(e,t){return be(new Error,{type:e,[ui]:!0},t)}function Ct(e,t){return e instanceof Error&&ui in e&&(t==null||!!(e.type&t))}const Pc=["params","query","hash"];function Ac(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of Pc)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function kc(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(ri," "),l=s.indexOf("="),o=In(l<0?s:s.slice(0,l)),a=l<0?null:In(s.slice(l+1));if(o in t){let i=t[o];at(i)||(i=t[o]=[i]),i.push(a)}else t[o]=a}return t}function bl(e){let t="";for(let n in e){const r=e[n];if(n=lc(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(at(r)?r.map(s=>s&&ss(s)):[r&&ss(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Sc(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=at(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const xc=Symbol(""),Cl=Symbol(""),Rs=Symbol(""),Ts=Symbol(""),is=Symbol("");function vn(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Ot(e,t,n,r,s,l=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,i)=>{const u=p=>{p===!1?i(dn(Te.NAVIGATION_ABORTED,{from:n,to:t})):p instanceof Error?i(p):wc(p)?i(dn(Te.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),a())},c=l(()=>e.call(r&&r.instances[s],t,n,u));let f=Promise.resolve(c);e.length<3&&(f=f.then(u)),f.catch(p=>i(p))})}function Fr(e,t,n,r,s=l=>l()){const l=[];for(const o of e)for(const a in o.components){let i=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(ti(i)){const u=(i.__vccOpts||i)[t];u&&l.push(Ot(u,n,r,o,a,s))}else{let u=i();l.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Ku(c)?c.default:c;o.mods[a]=c,o.components[a]=f;const p=(f.__vccOpts||f)[t];return p&&Ot(p,n,r,o,a,s)()}))}}return l}function _c(e,t){const n=[],r=[],s=[],l=Math.max(t.matched.length,e.matched.length);for(let o=0;o<l;o++){const a=t.matched[o];a&&(e.matched.find(u=>fn(u,a))?r.push(a):n.push(a));const i=e.matched[o];i&&(t.matched.find(u=>fn(u,i))||s.push(i))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Ec=()=>location.protocol+"//"+location.host;function ci(e,t){const{pathname:n,search:r,hash:s}=t,l=e.indexOf("#");if(l>-1){let o=s.includes(e.slice(l))?e.slice(l).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),gl(a,"")}return gl(n,e)+r+s}function Mc(e,t,n,r){let s=[],l=[],o=null;const a=({state:p})=>{const d=ci(e,location),b=n.value,C=t.value;let w=0;if(p){if(n.value=d,t.value=p,o&&o===b){o=null;return}w=C?p.position-C.position:0}else r(d);s.forEach(E=>{E(n.value,b,{delta:w,type:ls.pop,direction:w?w>0?Lr.forward:Lr.back:Lr.unknown})})};function i(){o=n.value}function u(p){s.push(p);const d=()=>{const b=s.indexOf(p);b>-1&&s.splice(b,1)};return l.push(d),d}function c(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(be({},p.state,{scroll:kr()}),"")}}function f(){for(const p of l)p();l=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:i,listen:u,destroy:f}}function wl(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?kr():null}}function Rc(e){const{history:t,location:n}=window,r={value:ci(e,n)},s={value:t.state};s.value||l(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(i,u,c){const f=e.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+i:Ec()+e+i;try{t[c?"replaceState":"pushState"](u,"",p),s.value=u}catch(d){console.error(d),n[c?"replace":"assign"](p)}}function o(i,u){l(i,be({},t.state,wl(s.value.back,i,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=i}function a(i,u){const c=be({},s.value,t.state,{forward:i,scroll:kr()});l(c.current,c,!0),l(i,be({},wl(r.value,i,null),{position:c.position+1},u),!1),r.value=i}return{location:r,state:s,push:a,replace:o}}function Tc(e){e=pc(e);const t=Rc(e),n=Mc(e,t.state,t.location,t.replace);function r(l,o=!0){o||n.pauseListeners(),history.go(l)}const s=be({location:"",base:e,go:r,createHref:gc.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}let Kt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var $e=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})($e||{});const Bc={type:Kt.Static,value:""},$c=/[a-zA-Z0-9_]/;function Nc(e){if(!e)return[[]];if(e==="/")return[[Bc]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(d){throw new Error(`ERR (${n})/"${u}": ${d}`)}let n=$e.Static,r=n;const s=[];let l;function o(){l&&s.push(l),l=[]}let a=0,i,u="",c="";function f(){u&&(n===$e.Static?l.push({type:Kt.Static,value:u}):n===$e.Param||n===$e.ParamRegExp||n===$e.ParamRegExpEnd?(l.length>1&&(i==="*"||i==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:Kt.Param,value:u,regexp:c,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):t("Invalid state to consume buffer"),u="")}function p(){u+=i}for(;a<e.length;){if(i=e[a++],i==="\\"&&n!==$e.ParamRegExp){r=n,n=$e.EscapeNext;continue}switch(n){case $e.Static:i==="/"?(u&&f(),o()):i===":"?(f(),n=$e.Param):p();break;case $e.EscapeNext:p(),n=r;break;case $e.Param:i==="("?n=$e.ParamRegExp:$c.test(i)?p():(f(),n=$e.Static,i!=="*"&&i!=="?"&&i!=="+"&&a--);break;case $e.ParamRegExp:i===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+i:n=$e.ParamRegExpEnd:c+=i;break;case $e.ParamRegExpEnd:f(),n=$e.Static,i!=="*"&&i!=="?"&&i!=="+"&&a--,c="";break;default:t("Unknown state");break}}return n===$e.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}const Pl="[^/]+?",Oc={sensitive:!1,strict:!1,start:!0,end:!0};var Ue=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Ue||{});const Hc=/[.+*?^${}()[\]/\\]/g;function Ic(e,t){const n=be({},Oc,t),r=[];let s=n.start?"^":"";const l=[];for(const u of e){const c=u.length?[]:[Ue.Root];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const p=u[f];let d=Ue.Segment+(n.sensitive?Ue.BonusCaseSensitive:0);if(p.type===Kt.Static)f||(s+="/"),s+=p.value.replace(Hc,"\\$&"),d+=Ue.Static;else if(p.type===Kt.Param){const{value:b,repeatable:C,optional:w,regexp:E}=p;l.push({name:b,repeatable:C,optional:w});const k=E||Pl;if(k!==Pl){d+=Ue.BonusCustomRegExp;try{`${k}`}catch(A){throw new Error(`Invalid custom RegExp for param "${b}" (${k}): `+A.message)}}let B=C?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;f||(B=w&&u.length<2?`(?:/${B})`:"/"+B),w&&(B+="?"),s+=B,d+=Ue.Dynamic,w&&(d+=Ue.BonusOptional),C&&(d+=Ue.BonusRepeatable),k===".*"&&(d+=Ue.BonusWildcard)}c.push(d)}r.push(c)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=Ue.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const c=u.match(o),f={};if(!c)return null;for(let p=1;p<c.length;p++){const d=c[p]||"",b=l[p-1];f[b.name]=d&&b.repeatable?d.split("/"):d}return f}function i(u){let c="",f=!1;for(const p of e){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const d of p)if(d.type===Kt.Static)c+=d.value;else if(d.type===Kt.Param){const{value:b,repeatable:C,optional:w}=d,E=b in u?u[b]:"";if(at(E)&&!C)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const k=at(E)?E.join("/"):E;if(!k)if(w)p.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${b}"`);c+=k}}return c||"/"}return{re:o,score:r,keys:l,parse:a,stringify:i}}function Dc(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===Ue.Static+Ue.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ue.Static+Ue.Segment?1:-1:0}function fi(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const l=Dc(r[n],s[n]);if(l)return l;n++}if(Math.abs(s.length-r.length)===1){if(Al(r))return 1;if(Al(s))return-1}return s.length-r.length}function Al(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Lc={strict:!1,end:!0,sensitive:!1};function Fc(e,t,n){const r=Ic(Nc(e.path),n),s=be(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Gc(e,t){const n=[],r=new Map;t=ml(Lc,t);function s(f){return r.get(f)}function l(f,p,d){const b=!d,C=Sl(f);C.aliasOf=d&&d.record;const w=ml(t,f),E=[C];if("alias"in f){const A=typeof f.alias=="string"?[f.alias]:f.alias;for(const $ of A)E.push(Sl(be({},C,{components:d?d.record.components:C.components,path:$,aliasOf:d?d.record:C})))}let k,B;for(const A of E){const{path:$}=A;if(p&&$[0]!=="/"){const X=p.record.path,ee=X[X.length-1]==="/"?"":"/";A.path=p.record.path+($&&ee+$)}if(k=Fc(A,p,w),d?d.alias.push(k):(B=B||k,B!==k&&B.alias.push(k),b&&f.name&&!xl(k)&&o(f.name)),di(k)&&i(k),C.children){const X=C.children;for(let ee=0;ee<X.length;ee++)l(X[ee],k,d&&d.children[ee])}d=d||k}return B?()=>{o(B)}:_n}function o(f){if(ai(f)){const p=r.get(f);p&&(r.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function i(f){const p=Vc(f,n);n.splice(p,0,f),f.record.name&&!xl(f)&&r.set(f.record.name,f)}function u(f,p){let d,b={},C,w;if("name"in f&&f.name){if(d=r.get(f.name),!d)throw dn(Te.MATCHER_NOT_FOUND,{location:f});w=d.record.name,b=be(kl(p.params,d.keys.filter(B=>!B.optional).concat(d.parent?d.parent.keys.filter(B=>B.optional):[]).map(B=>B.name)),f.params&&kl(f.params,d.keys.map(B=>B.name))),C=d.stringify(b)}else if(f.path!=null)C=f.path,d=n.find(B=>B.re.test(C)),d&&(b=d.parse(C),w=d.record.name);else{if(d=p.name?r.get(p.name):n.find(B=>B.re.test(p.path)),!d)throw dn(Te.MATCHER_NOT_FOUND,{location:f,currentLocation:p});w=d.record.name,b=be({},p.params,f.params),C=d.stringify(b)}const E=[];let k=d;for(;k;)E.unshift(k.record),k=k.parent;return{name:w,path:C,params:b,matched:E,meta:zc(E)}}e.forEach(f=>l(f));function c(){n.length=0,r.clear()}return{addRoute:l,resolve:u,removeRoute:o,clearRoutes:c,getRoutes:a,getRecordMatcher:s}}function kl(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Sl(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:jc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function jc(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function xl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function zc(e){return e.reduce((t,n)=>be(t,n.meta),{})}function Vc(e,t){let n=0,r=t.length;for(;n!==r;){const l=n+r>>1;fi(e,t[l])<0?r=l:n=l+1}const s=Uc(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function Uc(e){let t=e;for(;t=t.parent;)if(di(t)&&fi(e,t)===0)return t}function di({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function _l(e){const t=lt(Rs),n=lt(Ts),r=ve(()=>{const i=O(e.to);return t.resolve(i)}),s=ve(()=>{const{matched:i}=r.value,{length:u}=i,c=i[u-1],f=n.matched;if(!c||!f.length)return-1;const p=f.findIndex(fn.bind(null,c));if(p>-1)return p;const d=El(i[u-2]);return u>1&&El(c)===d&&f[f.length-1].path!==d?f.findIndex(fn.bind(null,i[u-2])):p}),l=ve(()=>s.value>-1&&Yc(n.params,r.value.params)),o=ve(()=>s.value>-1&&s.value===n.matched.length-1&&ii(n.params,r.value.params));function a(i={}){if(Jc(i)){const u=t[O(e.replace)?"replace":"push"](O(e.to)).catch(_n);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:ve(()=>r.value.href),isActive:l,isExactActive:o,navigate:a}}function qc(e){return e.length===1?e[0]:e}const Wc=ko({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:_l,setup(e,{slots:t}){const n=Dt(_l(e)),{options:r}=lt(Rs),s=ve(()=>({[Ml(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ml(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&qc(t.default(n));return e.custom?l:On("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},l)}}}),Kc=Wc;function Jc(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Yc(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!at(s)||s.length!==r.length||r.some((l,o)=>l.valueOf()!==s[o].valueOf()))return!1}return!0}function El(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ml=(e,t,n)=>e??t??n,Xc=ko({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=lt(is),s=ve(()=>e.route||r.value),l=lt(Cl,0),o=ve(()=>{let u=O(l);const{matched:c}=s.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),a=ve(()=>s.value.matched[o.value]);Yn(Cl,ve(()=>o.value+1)),Yn(xc,a),Yn(is,s);const i=le();return Gt(()=>[i.value,a.value,e.name],([u,c,f],[p,d,b])=>{c&&(c.instances[f]=u,d&&d!==c&&u&&u===p&&(c.leaveGuards.size||(c.leaveGuards=d.leaveGuards),c.updateGuards.size||(c.updateGuards=d.updateGuards))),u&&c&&(!d||!fn(c,d)||!p)&&(c.enterCallbacks[f]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=s.value,c=e.name,f=a.value,p=f&&f.components[c];if(!p)return Rl(n.default,{Component:p,route:u});const d=f.props[c],b=d?d===!0?u.params:typeof d=="function"?d(u):d:null,w=On(p,be({},b,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(f.instances[c]=null)},ref:i}));return Rl(n.default,{Component:w,route:u})||w}}});function Rl(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Qc=Xc;function Zc(e){const t=Gc(e.routes,e),n=e.parseQuery||kc,r=e.stringifyQuery||bl,s=e.history,l=vn(),o=vn(),a=vn(),i=Xr($t);let u=$t;nn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Ir.bind(null,x=>""+x),f=Ir.bind(null,ic),p=Ir.bind(null,In);function d(x,j){let L,K;return ai(x)?(L=t.getRecordMatcher(x),K=j):K=x,t.addRoute(K,L)}function b(x){const j=t.getRecordMatcher(x);j&&t.removeRoute(j)}function C(){return t.getRoutes().map(x=>x.record)}function w(x){return!!t.getRecordMatcher(x)}function E(x,j){if(j=be({},j||i.value),typeof x=="string"){const y=Dr(n,x,j.path),S=t.resolve({path:y.path},j),_=s.createHref(y.fullPath);return be(y,S,{params:p(S.params),hash:In(y.hash),redirectedFrom:void 0,href:_})}let L;if(x.path!=null)L=be({},x,{path:Dr(n,x.path,j.path).path});else{const y=be({},x.params);for(const S in y)y[S]==null&&delete y[S];L=be({},x,{params:f(y)}),j.params=f(j.params)}const K=t.resolve(L,j),re=x.hash||"";K.params=c(p(K.params));const m=cc(r,be({},x,{hash:sc(re),path:K.path})),v=s.createHref(m);return be({fullPath:m,hash:re,query:r===bl?Sc(x.query):x.query||{}},K,{redirectedFrom:void 0,href:v})}function k(x){return typeof x=="string"?Dr(n,x,i.value.path):be({},x)}function B(x,j){if(u!==x)return dn(Te.NAVIGATION_CANCELLED,{from:j,to:x})}function A(x){return ee(x)}function $(x){return A(be(k(x),{replace:!0}))}function X(x,j){const L=x.matched[x.matched.length-1];if(L&&L.redirect){const{redirect:K}=L;let re=typeof K=="function"?K(x,j):K;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=k(re):{path:re},re.params={}),be({query:x.query,hash:x.hash,params:re.path!=null?{}:x.params},re)}}function ee(x,j){const L=u=E(x),K=i.value,re=x.state,m=x.force,v=x.replace===!0,y=X(L,K);if(y)return ee(be(k(y),{state:typeof y=="object"?be({},re,y.state):re,force:m,replace:v}),j||L);const S=L;S.redirectedFrom=j;let _;return!m&&fc(r,K,L)&&(_=dn(Te.NAVIGATION_DUPLICATED,{to:S,from:K}),Ke(K,K,!0,!1)),(_?Promise.resolve(_):T(S,K)).catch(P=>Ct(P)?Ct(P,Te.NAVIGATION_GUARD_REDIRECT)?P:rt(P):ce(P,S,K)).then(P=>{if(P){if(Ct(P,Te.NAVIGATION_GUARD_REDIRECT))return ee(be({replace:v},k(P.to),{state:typeof P.to=="object"?be({},re,P.to.state):re,force:m}),j||S)}else P=ne(S,K,!0,v,re);return V(S,K,P),P})}function de(x,j){const L=B(x,j);return L?Promise.reject(L):Promise.resolve()}function z(x){const j=Bt.values().next().value;return j&&typeof j.runWithContext=="function"?j.runWithContext(x):x()}function T(x,j){let L;const[K,re,m]=_c(x,j);L=Fr(K.reverse(),"beforeRouteLeave",x,j);for(const y of K)y.leaveGuards.forEach(S=>{L.push(Ot(S,x,j))});const v=de.bind(null,x,j);return L.push(v),je(L).then(()=>{L=[];for(const y of l.list())L.push(Ot(y,x,j));return L.push(v),je(L)}).then(()=>{L=Fr(re,"beforeRouteUpdate",x,j);for(const y of re)y.updateGuards.forEach(S=>{L.push(Ot(S,x,j))});return L.push(v),je(L)}).then(()=>{L=[];for(const y of m)if(y.beforeEnter)if(at(y.beforeEnter))for(const S of y.beforeEnter)L.push(Ot(S,x,j));else L.push(Ot(y.beforeEnter,x,j));return L.push(v),je(L)}).then(()=>(x.matched.forEach(y=>y.enterCallbacks={}),L=Fr(m,"beforeRouteEnter",x,j,z),L.push(v),je(L))).then(()=>{L=[];for(const y of o.list())L.push(Ot(y,x,j));return L.push(v),je(L)}).catch(y=>Ct(y,Te.NAVIGATION_CANCELLED)?y:Promise.reject(y))}function V(x,j,L){a.list().forEach(K=>z(()=>K(x,j,L)))}function ne(x,j,L,K,re){const m=B(x,j);if(m)return m;const v=j===$t,y=nn?history.state:{};L&&(K||v?s.replace(x.fullPath,be({scroll:v&&y&&y.scroll},re)):s.push(x.fullPath,re)),i.value=x,Ke(x,j,L,v),rt()}let me;function ae(){me||(me=s.listen((x,j,L)=>{if(!ut.listening)return;const K=E(x),re=X(K,ut.currentRoute.value);if(re){ee(be(re,{replace:!0,force:!0}),K).catch(_n);return}u=K;const m=i.value;nn&&bc(yl(m.fullPath,L.delta),kr()),T(K,m).catch(v=>Ct(v,Te.NAVIGATION_ABORTED|Te.NAVIGATION_CANCELLED)?v:Ct(v,Te.NAVIGATION_GUARD_REDIRECT)?(ee(be(k(v.to),{force:!0}),K).then(y=>{Ct(y,Te.NAVIGATION_ABORTED|Te.NAVIGATION_DUPLICATED)&&!L.delta&&L.type===ls.pop&&s.go(-1,!1)}).catch(_n),Promise.reject()):(L.delta&&s.go(-L.delta,!1),ce(v,K,m))).then(v=>{v=v||ne(K,m,!1),v&&(L.delta&&!Ct(v,Te.NAVIGATION_CANCELLED)?s.go(-L.delta,!1):L.type===ls.pop&&Ct(v,Te.NAVIGATION_ABORTED|Te.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),V(K,m,v)}).catch(_n)}))}let Me=vn(),xe=vn(),he;function ce(x,j,L){rt(x);const K=xe.list();return K.length?K.forEach(re=>re(x,j,L)):console.error(x),Promise.reject(x)}function tt(){return he&&i.value!==$t?Promise.resolve():new Promise((x,j)=>{Me.add([x,j])})}function rt(x){return he||(he=!x,ae(),Me.list().forEach(([j,L])=>x?L(x):j()),Me.reset()),x}function Ke(x,j,L,K){const{scrollBehavior:re}=e;if(!nn||!re)return Promise.resolve();const m=!L&&Cc(yl(x.fullPath,0))||(K||!L)&&history.state&&history.state.scroll||null;return Xe().then(()=>re(x,j,m)).then(v=>v&&yc(v)).catch(v=>ce(v,x,j))}const Oe=x=>s.go(x);let yt;const Bt=new Set,ut={currentRoute:i,listening:!0,addRoute:d,removeRoute:b,clearRoutes:t.clearRoutes,hasRoute:w,getRoutes:C,resolve:E,options:e,push:A,replace:$,go:Oe,back:()=>Oe(-1),forward:()=>Oe(1),beforeEach:l.add,beforeResolve:o.add,afterEach:a.add,onError:xe.add,isReady:tt,install(x){x.component("RouterLink",Kc),x.component("RouterView",Qc),x.config.globalProperties.$router=ut,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>O(i)}),nn&&!yt&&i.value===$t&&(yt=!0,A(s.location).catch(K=>{}));const j={};for(const K in $t)Object.defineProperty(j,K,{get:()=>i.value[K],enumerable:!0});x.provide(Rs,ut),x.provide(Ts,ho(j)),x.provide(is,i);const L=x.unmount;Bt.add(x),x.unmount=function(){Bt.delete(x),Bt.size<1&&(u=$t,me&&me(),me=null,i.value=$t,yt=!1,he=!1),L()}}};function je(x){return x.reduce((j,L)=>j.then(()=>z(L)),Promise.resolve())}return ut}function hi(e){return lt(Ts)}/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=e=>e==="";/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=e=>{const t=t1(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var en={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=Symbol("lucide-icons");function s1(){return lt(r1,{})}/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=({name:e,iconNode:t,"icon-node":n,absoluteStrokeWidth:r,"absolute-stroke-width":s,strokeWidth:l,"stroke-width":o,size:a,color:i,...u},{slots:c})=>{const{size:f,color:p,strokeWidth:d=2,absoluteStrokeWidth:b=!1,class:C=""}=s1(),w=ve(()=>{const E=Tl(r)||Tl(s)||r===!0||s===!0||b===!0,k=l||o||d||en["stroke-width"];return E?Number(k)*24/Number(a??f??en.width):k});return On("svg",{...en,...u,width:a??f??en.width,height:a??f??en.height,stroke:i??p??en.stroke,"stroke-width":w.value,class:e1("lucide",C,...e?[`lucide-${Bl(n1(e))}-icon`,`lucide-${Bl(e)}`]:["lucide-icon"])},[...(t??n??[]).map(E=>On(...E)),...c.default?[c.default()]:[]])};/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=(e,t)=>(n,{slots:r,attrs:s})=>On(l1,{...s,...n,iconNode:t,name:e},r.default?{default:r.default}:void 0);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"m21 8-4-4-4 4",key:"1c9v7m"}],["path",{d:"M17 4v16",key:"7dpous"}]],i1=W("arrow-down-up",o1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],u1=W("arrow-left",a1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],f1=W("arrow-up-right",c1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]],h1=W("binary",d1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]],m1=W("bold",p1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],v1=W("braces",g1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],as=W("check",y1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]],ur=W("clipboard",b1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6h4",key:"135r8i"}]],w1=W("clock-3",C1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],A1=W("clock",P1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],S1=W("cloud-upload",k1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],$l=W("code-xml",x1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],E1=W("columns-2",_1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14",key:"ron5a4"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2",key:"7s9ehn"}]],R1=W("crop",M1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],B1=W("download",T1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],N1=W("eraser",$1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],H1=W("eye",O1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]],D1=W("file-image",I1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],pi=W("file-text",L1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=[["path",{d:"M12 22h6a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6",key:"15usau"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M3 16v-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V16",key:"s1gz5"}],["path",{d:"M6 22h2",key:"194x9m"}],["path",{d:"M7 14v8",key:"11ixej"}]],G1=W("file-type-corner",F1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=[["path",{d:"m17 3-5 5-5-5h10",key:"1ftt6x"}],["path",{d:"m17 21-5-5-5 5h10",key:"1m0wmu"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]],Nl=W("flip-vertical-2",j1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=[["path",{d:"m3 7 5 5-5 5V7",key:"couhi7"}],["path",{d:"m21 7-5 5 5 5V7",key:"6ouia7"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]],Ol=W("flip-horizontal-2",z1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Gr=W("folder-open",V1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]],q1=W("git-fork",U1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],us=W("grid-3x3",W1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1",key:"9jr5yi"}]],J1=W("heading-2",K1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],X1=W("heart",Y1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],Z1=W("image-plus",Q1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],mi=W("image",ef);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]],nf=W("italic",tf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],sf=W("key-round",rf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],of=W("languages",lf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],uf=W("link",af);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=[["path",{d:"M13 5h8",key:"a7qcls"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}]],Hl=W("list-checks",cf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=[["path",{d:"M11 5h10",key:"1cz7ny"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 19h10",key:"11t30w"}],["path",{d:"M4 4h1v5",key:"10yrso"}],["path",{d:"M4 9h2",key:"r1h2o0"}],["path",{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",key:"xtkcd5"}]],df=W("list-ordered",ff);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],pf=W("list",hf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]],gf=W("lock-keyhole",mf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],yf=W("maximize-2",vf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],Cf=W("minimize-2",bf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],Pf=W("moon",wf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=[["path",{d:"M11 7 6 2",key:"1jwth8"}],["path",{d:"M18.992 12H2.041",key:"xw1gg"}],["path",{d:"M21.145 18.38A3.34 3.34 0 0 1 20 16.5a3.3 3.3 0 0 1-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0 0 20 22a2 2 0 0 0 2-2.025c0-.58-.285-1.13-.855-1.595",key:"1nkol4"}],["path",{d:"m8.5 4.5 2.148-2.148a1.205 1.205 0 0 1 1.704 0l7.296 7.296a1.205 1.205 0 0 1 0 1.704l-7.592 7.592a3.615 3.615 0 0 1-5.112 0l-3.888-3.888a3.615 3.615 0 0 1 0-5.112L5.67 7.33",key:"1nk1rd"}]],kf=W("paint-bucket",Af);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=[["path",{d:"m14.622 17.897-10.68-2.913",key:"vj2p1u"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",key:"18tc5c"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",key:"ytzfxy"}]],xf=W("paintbrush",Sf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=[["path",{d:"m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12",key:"1y3wsu"}],["path",{d:"m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z",key:"110lr1"}],["path",{d:"m2 22 .414-.414",key:"jhxm08"}]],cs=W("pipette",_f);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],Mf=W("printer",Ef);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],Tf=W("quote",Rf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],$f=W("redo-2",Bf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Bs=W("refresh-cw",Nf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=[["path",{d:"M14 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1",key:"zg1ipl"}],["path",{d:"M14 4a1 1 0 0 1 1-1",key:"dhj8ez"}],["path",{d:"M15 10a1 1 0 0 1-1-1",key:"1mnyi5"}],["path",{d:"M19 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1",key:"txt6k4"}],["path",{d:"M21 4a1 1 0 0 0-1-1",key:"sfs9ap"}],["path",{d:"M21 9a1 1 0 0 1-1 1",key:"mp6qeo"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5a2 2 0 0 1 2-2h2",key:"15xut4"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}]],Hf=W("replace-all",Of);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Df=W("save",If);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Ff=W("search",Lf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],jf=W("shield-check",Gf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],gi=W("sparkles",zf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}]],Uf=W("square-dashed",Vf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],Wf=W("square",qf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Jf=W("sun",Kf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",key:"gugj83"}]],Xf=W("table-2",Yf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=[["path",{d:"M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z",key:"16rjxf"}],["path",{d:"M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193",key:"178nd4"}],["circle",{cx:"10.5",cy:"6.5",r:".5",fill:"currentColor",key:"12ikhr"}]],Il=W("tags",Qf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],ed=W("undo-2",Zf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],nd=W("upload",td);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],sd=W("wand-sparkles",rd),ld="/assets/fufu-3FWaQxCW.png",od={class:"site-header"},id={class:"brand-mark","aria-hidden":"true"},ad=["src"],ud={class:"header-actions","aria-label":"页面操作"},cd={class:"icon-button",href:"https://github.com/",target:"_blank",rel:"noreferrer","aria-label":"GitHub 仓库"},fd=["aria-label"],dd={class:"site-footer"},hd={__name:"App",setup(e){const t=hi(),n=le(!1),r=ve(()=>["pixel-beads","markdown"].includes(t.params.slug));hn(()=>{const l=localStorage.getItem("sakura-theme");n.value=l?l==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches,document.documentElement.classList.toggle("dark",n.value)});function s(){n.value=!n.value,document.documentElement.classList.toggle("dark",n.value),localStorage.setItem("sakura-theme",n.value?"dark":"light")}return(l,o)=>{const a=Qr("router-link"),i=Qr("router-view");return Z(),ue("div",{class:pe(["site-shell",{"site-shell-wide":r.value}])},[h("header",od,[D(a,{class:"brand",to:"/","aria-label":"Sakura Tools 首页"},{default:yr(()=>[h("span",id,[h("img",{src:O(ld),alt:""},null,8,ad)]),o[1]||(o[1]=h("span",null,[h("strong",null,"Sakura"),h("small",null,"TOOLS / 工具箱")],-1))]),_:1}),h("nav",ud,[h("a",cd,[D(O(q1),{size:18})]),h("button",{class:"icon-button",type:"button","aria-label":n.value?"切换到浅色模式":"切换到深色模式",onClick:o[0]||(o[0]=u=>s())},[n.value?(Z(),et(O(Jf),{key:0,size:18})):(Z(),et(O(Pf),{key:1,size:18}))],8,fd)])]),h("main",null,[D(i)]),h("footer",dd,[o[4]||(o[4]=h("p",null,[h("span",{class:"status-dot"}),U(" 所有基础工具均在浏览器本地运行")],-1)),h("p",null,[o[2]||(o[2]=U("用 ",-1)),D(O(X1),{size:13,fill:"currentColor"}),o[3]||(o[3]=U(" 和 Go 构建",-1))])])],2)}}},pd=["全部","开发","文本","图像","文档","生活"],fs=[{slug:"json",index:"01",name:"JSON 格式化",summary:"格式化、压缩并验证 JSON 数据",category:"开发",icon:v1,color:"red",ready:!0},{slug:"base64",index:"02",name:"Base64 编解码",summary:"文本与 Base64 安全互转，支持 Unicode",category:"开发",icon:h1,color:"blue",ready:!0},{slug:"timestamp",index:"03",name:"时间戳转换",summary:"时间戳与本地日期双向转换",category:"开发",icon:w1,color:"ochre",ready:!0},{slug:"password",index:"04",name:"随机密码",summary:"在本地生成高强度随机密码",category:"生活",icon:sf,color:"green",ready:!0},{slug:"translate",index:"05",name:"在线翻译",summary:"快速翻译文本并保留原始格式",category:"文本",icon:of,color:"blue"},{slug:"markdown",index:"06",name:"Markdown 编辑器",summary:"实时预览并导出 Markdown 与 PDF 文档",category:"文本",icon:pi,color:"ochre",ready:!0},{slug:"image",index:"07",name:"图片处理",summary:"压缩、裁剪与格式转换",category:"图像",icon:mi,color:"green"},{slug:"pdf",index:"08",name:"PDF 工具",summary:"合并、拆分与页面整理",category:"文档",icon:G1,color:"red"},{slug:"pixel-beads",index:"09",name:"像素拼豆图纸",summary:"照片转网格图纸，精准匹配拼豆色号",category:"图像",icon:us,color:"special",ready:!0},{slug:"color",index:"10",name:"颜色工具",summary:"取色、转换与调色板生成",category:"开发",icon:cs,color:"blue"}],md=e=>fs.find(t=>t.slug===e),gd={class:"tool-index","aria-labelledby":"tool-index-heading"},vd={class:"section-heading"},yd={class:"tool-count"},bd={class:"tool-controls"},Cd={class:"search-box"},wd={class:"category-tabs","aria-label":"工具分类"},Pd=["onClick"],Ad={key:0,class:"tool-grid"},kd={class:"card-topline"},Sd={class:"tool-number"},xd={key:0,class:"soon-label"},_d={class:"tool-symbol"},Ed={class:"category-label"},Md={key:1,class:"empty-state"},Rd={__name:"HomeView",setup(e){const t=le(""),n=le("全部"),r=le(null),s=ve(()=>{const o=t.value.trim().toLowerCase();return fs.filter(a=>{const i=n.value==="全部"||a.category===n.value,u=!o||`${a.name} ${a.summary} ${a.category}`.toLowerCase().includes(o);return i&&u})});function l(o){var a,i;o.key==="/"&&((a=document.activeElement)==null?void 0:a.tagName)!=="INPUT"&&((i=document.activeElement)==null?void 0:i.tagName)!=="TEXTAREA"&&(o.preventDefault(),Xe(()=>{var u;return(u=r.value)==null?void 0:u.focus()}))}return hn(()=>window.addEventListener("keydown",l)),xs(()=>window.removeEventListener("keydown",l)),(o,a)=>(Z(),ue(He,null,[a[4]||(a[4]=nu('<section class="home-intro"><div class="eyebrow"><span></span> SAKURA WORKBENCH · 2026</div><div class="intro-grid"><div><h1>需要什么，<br><em>拿来即用。</em></h1></div><div class="intro-copy"><p>一组简洁、快速、尊重隐私的在线工具。常用处理尽可能留在你的浏览器里完成。</p><div class="privacy-note"><span class="status-dot"></span> 无需登录 · 本地优先</div></div></div></section>',1)),h("section",gd,[h("div",vd,[a[2]||(a[2]=h("div",null,[h("p",{class:"section-kicker"},"TOOL INDEX"),h("h2",{id:"tool-index-heading"},"工具索引")],-1)),h("p",yd,q(String(s.value.length).padStart(2,"0"))+" / "+q(O(fs).length),1)]),h("div",bd,[h("label",Cd,[D(O(Ff),{size:19}),_e(h("input",{ref_key:"searchInput",ref:r,"onUpdate:modelValue":a[0]||(a[0]=i=>t.value=i),type:"search",placeholder:"搜索工具，例如 JSON、图片…"},null,512),[[Ne,t.value]]),a[3]||(a[3]=h("kbd",null,"/",-1))]),h("div",wd,[(Z(!0),ue(He,null,qt(O(pd),i=>(Z(),ue("button",{key:i,type:"button",class:pe({active:n.value===i}),onClick:u=>n.value=i},q(i),11,Pd))),128))])]),s.value.length?(Z(),ue("div",Ad,[(Z(!0),ue(He,null,qt(s.value,i=>(Z(),et(rr(i.ready?"router-link":"article"),{key:i.slug,to:i.ready?`/tools/${i.slug}`:void 0,class:pe(["tool-card",[`tone-${i.color}`,{upcoming:!i.ready,featured:i.color==="special"}]])},{default:yr(()=>[h("div",kd,[h("span",Sd,q(i.index),1),i.ready?(Z(),et(O(f1),{key:1,size:18})):(Z(),ue("span",xd,"筹备中"))]),h("div",_d,[(Z(),et(rr(i.icon),{size:25,"stroke-width":1.8}))]),h("h3",null,q(i.name),1),h("p",null,q(i.summary),1),h("span",Ed,q(i.category),1),i.color==="special"?(Z(),et(O(gi),{key:0,class:"special-mark",size:17})):Wt("",!0)]),_:2},1032,["to","class"]))),128))])):(Z(),ue("div",Md,[h("p",null,"没有找到“"+q(t.value)+"”",1),h("button",{type:"button",onClick:a[1]||(a[1]=i=>{t.value="",n.value="全部"})},"清除筛选")]))])],64))}},Td={class:"tool-panel"},Bd={class:"tool-bar"},$d={class:"action-group"},Nd={key:0,class:"error-message"},Od={key:1,class:"success-message"},Hd={__name:"JsonTool",setup(e){const t=le(`{
  "project": "sakura-tools",
  "status": "growing",
  "private": true
}`),n=le(""),r=le(!1);function s(a=!1){try{t.value=JSON.stringify(JSON.parse(t.value),null,a?0:2),n.value=""}catch(i){n.value=`第 ${l(i.message)} 行附近：${i.message}`}}function l(a){var u;const i=Number(((u=a.match(/position (\d+)/))==null?void 0:u[1])||0);return t.value.slice(0,i).split(`
`).length}async function o(){await navigator.clipboard.writeText(t.value),r.value=!0,setTimeout(()=>r.value=!1,1400)}return(a,i)=>(Z(),ue("div",Td,[h("div",Bd,[h("div",$d,[h("button",{class:"primary-button",type:"button",onClick:i[0]||(i[0]=u=>s(!1))},[D(O(sd),{size:16}),i[4]||(i[4]=U(" 格式化",-1))]),h("button",{class:"secondary-button",type:"button",onClick:i[1]||(i[1]=u=>s(!0))},[D(O(Cf),{size:16}),i[5]||(i[5]=U(" 压缩",-1))])]),h("button",{class:"secondary-button",type:"button",onClick:o},[r.value?(Z(),et(O(as),{key:0,size:16})):(Z(),et(O(ur),{key:1,size:16})),U(" "+q(r.value?"已复制":"复制"),1)])]),i[7]||(i[7]=h("label",{class:"editor-label",for:"json-input"},"JSON INPUT",-1)),_e(h("textarea",{id:"json-input","onUpdate:modelValue":i[2]||(i[2]=u=>t.value=u),class:"code-editor",spellcheck:"false",onInput:i[3]||(i[3]=u=>n.value="")},null,544),[[Ne,t.value]]),n.value?(Z(),ue("p",Nd,q(n.value),1)):(Z(),ue("p",Od,[D(O(as),{size:14}),i[6]||(i[6]=U(" 输入内容仅在当前浏览器中处理",-1))]))]))}},Id={class:"tool-panel split-editor"},Dd={class:"editor-heading"},Ld={class:"swap-mark"},Fd={class:"editor-heading"},Gd={key:0,class:"error-message wide-message"},jd={__name:"Base64Tool",setup(e){const t=le("你好，Sakura Tools!"),n=le(""),r=le("");function s(){n.value=btoa(String.fromCharCode(...new TextEncoder().encode(t.value))),r.value=""}function l(){try{t.value=new TextDecoder().decode(Uint8Array.from(atob(n.value.trim()),a=>a.charCodeAt(0))),r.value=""}catch{r.value="这不是有效的 Base64 内容，请检查后重试。"}}async function o(a){await navigator.clipboard.writeText(a)}return s(),(a,i)=>(Z(),ue("div",Id,[h("section",null,[h("div",Dd,[i[5]||(i[5]=h("label",{for:"plain-text"},"原始文本",-1)),h("button",{type:"button",onClick:i[0]||(i[0]=u=>o(t.value))},[D(O(ur),{size:15}),i[4]||(i[4]=U("复制",-1))])]),_e(h("textarea",{id:"plain-text","onUpdate:modelValue":i[1]||(i[1]=u=>t.value=u),spellcheck:"false"},null,512),[[Ne,t.value]]),h("button",{class:"primary-button full-button",type:"button",onClick:s},"编码为 Base64")]),h("div",Ld,[D(O(i1),{size:18})]),h("section",null,[h("div",Fd,[i[7]||(i[7]=h("label",{for:"encoded-text"},"Base64",-1)),h("button",{type:"button",onClick:i[2]||(i[2]=u=>o(n.value))},[D(O(ur),{size:15}),i[6]||(i[6]=U("复制",-1))])]),_e(h("textarea",{id:"encoded-text","onUpdate:modelValue":i[3]||(i[3]=u=>n.value=u),spellcheck:"false"},null,512),[[Ne,n.value]]),h("button",{class:"secondary-button full-button",type:"button",onClick:l},"解码为文本")]),r.value?(Z(),ue("p",Gd,q(r.value),1)):Wt("",!0)]))}},zd={class:"tool-panel timestamp-panel"},Vd={class:"timestamp-grid"},Ud={class:"unit-toggle"},qd={class:"timezone-note"},Wd={__name:"TimestampTool",setup(e){const t=Date.now(),n=le(Math.floor(t/1e3)),r=le(l(t)),s=le("seconds");function l(c){const f=new Date(c);if(Number.isNaN(f.getTime()))return"";const p=f.getTimezoneOffset()*6e4;return new Date(f.getTime()-p).toISOString().slice(0,19)}function o(){const c=s.value==="seconds"?Number(n.value)*1e3:Number(n.value),f=l(c);f&&(r.value=f)}function a(){const c=new Date(r.value).getTime();Number.isNaN(c)||(n.value=s.value==="seconds"?Math.floor(c/1e3):c)}function i(){const c=Date.now();n.value=s.value==="seconds"?Math.floor(c/1e3):c,r.value=l(c)}const u=ve(()=>{const c=new Date(r.value);return Number.isNaN(c.getTime())?"请输入完整日期时间":c.toLocaleString("zh-CN",{dateStyle:"full",timeStyle:"medium"})});return(c,f)=>(Z(),ue("div",zd,[h("div",Vd,[h("section",null,[f[4]||(f[4]=h("label",{for:"timestamp"},"时间戳",-1)),_e(h("input",{id:"timestamp","onUpdate:modelValue":f[0]||(f[0]=p=>n.value=p),type:"number",onInput:o},null,544),[[Ne,n.value]]),h("div",Ud,[h("button",{type:"button",class:pe({active:s.value==="seconds"}),onClick:f[1]||(f[1]=p=>{s.value="seconds",a()})},"秒",2),h("button",{type:"button",class:pe({active:s.value==="milliseconds"}),onClick:f[2]||(f[2]=p=>{s.value="milliseconds",a()})},"毫秒",2)])]),h("section",null,[f[5]||(f[5]=h("label",{for:"date-input"},"本地日期时间",-1)),_e(h("input",{id:"date-input","onUpdate:modelValue":f[3]||(f[3]=p=>r.value=p),type:"datetime-local",step:"1",onInput:a},null,544),[[Ne,r.value]]),h("p",null,q(u.value),1)])]),h("button",{class:"secondary-button",type:"button",onClick:i},[D(O(Bs),{size:16}),f[6]||(f[6]=U(" 使用当前时间",-1))]),h("div",qd,[D(O(A1),{size:15}),U(" 当前浏览器时区："+q(Intl.DateTimeFormat().resolvedOptions().timeZone),1)])]))}},Kd={class:"tool-panel password-panel"},Jd={class:"password-output"},Yd={class:"password-options"},Xd={class:"length-control"},Qd={class:"check-grid"},Zd={class:"password-footer"},e2={__name:"PasswordTool",setup(e){const t=le(20),n=le({upper:!0,lower:!0,numbers:!0,symbols:!0}),r=le(""),s=le(!1),l=ve(()=>{const i=Object.values(n.value).filter(Boolean).length,u=t.value*Math.log2(Math.max(i*18,2));return u>110?"很强":u>75?"强":u>45?"一般":"较弱"});function o(){const i=[];n.value.upper&&i.push("ABCDEFGHJKLMNPQRSTUVWXYZ"),n.value.lower&&i.push("abcdefghijkmnopqrstuvwxyz"),n.value.numbers&&i.push("23456789"),n.value.symbols&&i.push("!@#$%&*+-=?");const u=i.join("")||"abcdefghijkmnopqrstuvwxyz",c=crypto.getRandomValues(new Uint32Array(t.value));r.value=Array.from(c,f=>u[f%u.length]).join("")}async function a(){await navigator.clipboard.writeText(r.value),s.value=!0,setTimeout(()=>s.value=!1,1400)}return o(),(i,u)=>(Z(),ue("div",Kd,[h("div",Jd,[h("code",null,q(r.value),1),h("button",{type:"button",onClick:a},[s.value?(Z(),et(O(as),{key:0,size:18})):(Z(),et(O(ur),{key:1,size:18})),h("span",null,q(s.value?"已复制":"复制"),1)])]),h("div",Yd,[h("label",Xd,[u[5]||(u[5]=U("密码长度 ",-1)),h("strong",null,q(t.value),1),_e(h("input",{"onUpdate:modelValue":u[0]||(u[0]=c=>t.value=c),type:"range",min:"8",max:"64",onInput:o},null,544),[[Ne,t.value,void 0,{number:!0}]])]),h("div",Qd,[h("label",null,[_e(h("input",{"onUpdate:modelValue":u[1]||(u[1]=c=>n.value.upper=c),type:"checkbox",onChange:o},null,544),[[Kn,n.value.upper]]),u[6]||(u[6]=U(" 大写字母",-1))]),h("label",null,[_e(h("input",{"onUpdate:modelValue":u[2]||(u[2]=c=>n.value.lower=c),type:"checkbox",onChange:o},null,544),[[Kn,n.value.lower]]),u[7]||(u[7]=U(" 小写字母",-1))]),h("label",null,[_e(h("input",{"onUpdate:modelValue":u[3]||(u[3]=c=>n.value.numbers=c),type:"checkbox",onChange:o},null,544),[[Kn,n.value.numbers]]),u[8]||(u[8]=U(" 数字",-1))]),h("label",null,[_e(h("input",{"onUpdate:modelValue":u[4]||(u[4]=c=>n.value.symbols=c),type:"checkbox",onChange:o},null,544),[[Kn,n.value.symbols]]),u[9]||(u[9]=U(" 特殊符号",-1))])])]),h("div",Zd,[h("span",null,[u[10]||(u[10]=U("强度：",-1)),h("strong",null,q(l.value),1)]),h("button",{class:"primary-button",type:"button",onClick:o},[D(O(Bs),{size:16}),u[11]||(u[11]=U(" 重新生成",-1))])])]))}},t2=`
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
`.trim();function jr(e){return Number(e).toString(16).padStart(2,"0").toUpperCase()}function n2(e,t){const n=a=>{var i;return((i=a.match(/^([A-Z]+)(\d+)$/))==null?void 0:i.slice(1))||[a,"0"]},[r,s]=n(e.code),[l,o]=n(t.code);return r.localeCompare(l)||Number(s)-Number(o)}const r2={id:"mard-291-community",brand:"MARD",name:"MARD 291 色（社区校准）",source:"https://github.com/maxcleme/beadcolors",colors:t2.split(`
`).map(e=>{const[t,n,r,s,l,o]=e.split(",");return{id:`mard-${t.toLowerCase()}`,code:t,name:n,hex:`#${jr(r)}${jr(s)}${jr(l)}`,contributor:o}}).sort(n2)};function $s({id:e,brand:t,name:n,source:r,csv:s}){return{id:e,brand:t,name:n,source:r,colors:s.trim().split(/\r?\n/).map(l=>{const[o,a,i,u,c]=l.split(","),f=`#${[i,u,c].map(p=>Number(p).toString(16).padStart(2,"0")).join("")}`.toUpperCase();return{id:`${e}-${o.toLowerCase()}`,code:o,name:a,hex:f}})}}const s2=`
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
`,l2=`
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
`,o2=`
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
`,i2=$s({id:"hama-midi-community",brand:"Hama",name:"Hama Midi（92 色）",source:"https://github.com/maxcleme/beadcolors/blob/master/raw/hama.csv",csv:s2}),a2=$s({id:"artkal-c-community",brand:"Artkal",name:"Artkal C 2.6 mm（174 色）",source:"https://github.com/maxcleme/beadcolors/blob/master/raw/artkal_c.csv",csv:l2}),u2=$s({id:"artkal-s-community",brand:"Artkal",name:"Artkal S 5 mm（199 色）",source:"https://github.com/maxcleme/beadcolors/blob/master/raw/artkal_s.csv",csv:o2}),c2={id:"perler-standard-2025",brand:"Perler",name:"Perler 标准色（屏幕参考）",source:"https://perler.com/content/uploaded_images/Perler_Bead-Color-Reference_2025.pdf",colors:[["white","White","白色","#F4F4EF"],["cream","Creme","奶油色","#F1E4C2"],["toasted-marshmallow","Toasted Marshmallow","烤棉花糖","#D8C5B4"],["sand","Sand","沙色","#D8B58A"],["tan","Tan","棕褐色","#B8875E"],["light-brown","Light Brown","浅棕色","#9A6547"],["brown","Brown","棕色","#613E2C"],["dark-brown","Dark Brown","深棕色","#3D2924"],["apricot","Apricot","杏色","#F3C3A5"],["peach","Peach","蜜桃色","#F3B38F"],["blush","Blush","腮红色","#ED927E"],["light-pink","Light Pink","浅粉色","#F3B7CD"],["bubblegum","Bubblegum","泡泡糖粉","#EE78A8"],["pink","Pink","粉色","#DA4E91"],["raspberry","Raspberry","覆盆子色","#A93064"],["plum","Plum","李子色","#73355E"],["red","Red","红色","#D83B3E"],["cranapple","Cranapple","蔓越莓红","#9D2735"],["hot-coral","Hot Coral","珊瑚红","#F06055"],["rust","Rust","铁锈红","#A9472D"],["brick","Brick","砖红色","#994D3A"],["orange","Orange","橙色","#F37932"],["cheddar","Cheddar","切达橙","#F5A623"],["butterscotch","Butterscotch","奶糖色","#D88B2C"],["rich-butter","Rich Butter","浓黄油色","#EBC65E"],["yellow","Yellow","黄色","#F5D547"],["pastel-yellow","Pastel Yellow","粉彩黄","#F5E88A"],["prickly-pear","Prickly Pear","仙人掌黄绿","#C8D746"],["kiwi-lime","Kiwi Lime","奇异果绿","#8BC34A"],["pastel-green","Pastel Green","粉彩绿","#A8D69B"],["light-green","Light Green","浅绿色","#70C486"],["green","Green","绿色","#3C9B61"],["shamrock","Shamrock","三叶草绿","#16845B"],["dark-green","Dark Green","深绿色","#236044"],["evergreen","Evergreen","常青绿","#194638"],["sage","Sage","鼠尾草绿","#94A58C"],["parrot-green","Parrot Green","鹦鹉绿","#31A88A"],["toothpaste","Toothpaste","薄荷色","#7DCEBE"],["turquoise","Turquoise","青绿色","#27A8B5"],["lagoon","Lagoon","潟湖蓝","#268F91"],["pastel-blue","Pastel Blue","粉彩蓝","#A7D7E8"],["light-blue","Light Blue","浅蓝色","#5CB9DD"],["periwinkle-blue","Periwinkle Blue","长春花蓝","#7587C9"],["blueberry-cream","Blueberry Cream","蓝莓奶油","#8EA7D4"],["cobalt","Cobalt","钴蓝色","#2866A3"],["dark-blue","Dark Blue","深蓝色","#264B84"],["midnight","Midnight","午夜蓝","#252C57"],["pastel-lavender","Pastel Lavender","粉彩薰衣草","#C1A7D7"],["purple","Purple","紫色","#76519B"],["magenta","Magenta","品红色","#B63F8D"],["light-grey","Light Grey","浅灰色","#C8C8C2"],["mist","Mist","雾灰色","#AEB8B5"],["grey","Grey","灰色","#858681"],["stone","Stone","石色","#77756F"],["dark-grey","Dark Grey","深灰色","#50524F"],["black","Black","黑色","#242424"]].map(([e,t,n,r])=>({id:e,code:t,name:n,hex:r}))},En=[r2,i2,a2,u2,c2];function f2(e){return En.find(t=>t.id===e)||En[0]}function Qt(e){const t=Number.parseInt(e.replace("#",""),16);return{r:t>>16&255,g:t>>8&255,b:t&255}}function zr(e){const t=e/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4}function Sr({r:e,g:t,b:n}){const r=zr(e),s=zr(t),l=zr(n),o=(r*.4124+s*.3576+l*.1805)/.95047,a=r*.2126+s*.7152+l*.0722,i=(r*.0193+s*.1192+l*.9505)/1.08883,u=d=>d>.008856?Math.cbrt(d):7.787*d+16/116,c=u(o),f=u(a),p=u(i);return{l:116*f-16,a:500*(c-f),b:200*(f-p)}}function vi(e){return e.map((t,n)=>({...t,index:n,rgb:Qt(t.hex),lab:Sr(Qt(t.hex))}))}function Ns(e,t){const n=ae=>ae*Math.PI/180,r=ae=>ae*180/Math.PI,s=Math.hypot(e.a,e.b),l=Math.hypot(t.a,t.b),o=(s+l)/2,a=.5*(1-Math.sqrt(o**7/(o**7+25**7))),i=(1+a)*e.a,u=(1+a)*t.a,c=Math.hypot(i,e.b),f=Math.hypot(u,t.b),p=(ae,Me)=>{const xe=r(Math.atan2(Me,ae));return xe>=0?xe:xe+360},d=p(i,e.b),b=p(u,t.b),C=t.l-e.l,w=f-c;let E=b-d;c*f===0?E=0:E>180?E-=360:E<-180&&(E+=360);const k=2*Math.sqrt(c*f)*Math.sin(n(E/2)),B=(e.l+t.l)/2,A=(c+f)/2;let $=d+b;c*f===0?$=d+b:Math.abs(d-b)<=180?$/=2:$<360?$=($+360)/2:$=($-360)/2;const X=1-.17*Math.cos(n($-30))+.24*Math.cos(n(2*$))+.32*Math.cos(n(3*$+6))-.2*Math.cos(n(4*$-63)),ee=1+.015*(B-50)**2/Math.sqrt(20+(B-50)**2),de=1+.045*A,z=1+.015*A*X,T=-2*Math.sqrt(A**7/(A**7+25**7))*Math.sin(n(60*Math.exp(-((($-275)/25)**2)))),V=C/ee,ne=w/de,me=k/z;return Math.sqrt(V**2+ne**2+me**2+T*ne*me)}function d2(e,t){const n=Sr(e),r=Math.hypot(n.a,n.b);let s=0,l=Number.POSITIVE_INFINITY;for(const o of t){const a=Math.hypot(o.lab.a,o.lab.b),i=r>7&&a<r*.32?(r-a)*.18:0,u=Ns(n,o.lab)+i;u<l&&(l=u,s=o.index)}return s}function h2(e,t,n,r,s,l={}){var f,p;if(!e||!(t!=null&&t.length))return;const o=l.cellSize||18,a=l.showGrid!==!1,i=l.showCodes===!0,u=l.mode||"pixel";e.width=n*o,e.height=r*o;const c=e.getContext("2d");c.clearRect(0,0,e.width,e.height),c.fillStyle=l.background||"#f4f1eb",c.fillRect(0,0,e.width,e.height);for(let d=0;d<r;d+=1)for(let b=0;b<n;b+=1){const C=t[d*n+b];if(C<0||!s[C])continue;const{hex:w}=s[C],E=b*o+o/2,k=d*o+o/2;if(u==="pixel"||o<9)c.fillStyle=w,c.fillRect(b*o,d*o,o,o);else{c.beginPath(),c.arc(E,k,o*.42,0,Math.PI*2),c.fillStyle=w,c.fill();const B=Qt(w),A=(B.r*299+B.g*587+B.b*114)/1e3;c.beginPath(),c.arc(E,k,Math.max(1,o*.105),0,Math.PI*2),c.fillStyle=A>170?"rgba(40,36,32,.24)":"rgba(255,255,255,.45)",c.fill()}}if(i&&o>=12){c.textAlign="center",c.textBaseline="middle",c.font=`700 ${Math.max(6,Math.floor(o*.34))}px system-ui, sans-serif`;for(let d=0;d<r;d+=1)for(let b=0;b<n;b+=1){const C=t[d*n+b],w=s[C];if(!w)continue;const E=Qt(w.hex),k=(E.r*299+E.g*587+E.b*114)/1e3;c.fillStyle=k>158?"#25221f":"#ffffff",c.fillText(w.code,b*o+o/2,d*o+o/2+.5)}}if(a){c.lineWidth=1;for(let d=0;d<=n;d+=1)c.beginPath(),c.moveTo(d*o+.5,0),c.lineTo(d*o+.5,e.height),c.strokeStyle=d%10===0?"rgba(35,33,30,.42)":d%5===0?"rgba(35,33,30,.23)":"rgba(35,33,30,.09)",c.stroke();for(let d=0;d<=r;d+=1)c.beginPath(),c.moveTo(0,d*o+.5),c.lineTo(e.width,d*o+.5),c.strokeStyle=d%10===0?"rgba(35,33,30,.42)":d%5===0?"rgba(35,33,30,.23)":"rgba(35,33,30,.09)",c.stroke()}if(((f=l.symmetry)!=null&&f.horizontal||(p=l.symmetry)!=null&&p.vertical)&&(c.save(),c.setLineDash([6,4]),c.strokeStyle="rgba(218, 92, 108, .9)",c.lineWidth=1.5,l.symmetry.horizontal&&(c.beginPath(),c.moveTo(e.width/2,0),c.lineTo(e.width/2,e.height),c.stroke()),l.symmetry.vertical&&(c.beginPath(),c.moveTo(0,e.height/2),c.lineTo(e.width,e.height/2),c.stroke()),c.restore()),l.selection){const d=l.selection,b=Math.min(d.startColumn,d.endColumn),C=Math.min(d.startRow,d.endRow),w=Math.abs(d.endColumn-d.startColumn)+1,E=Math.abs(d.endRow-d.startRow)+1;c.save(),c.setLineDash([5,3]),c.lineWidth=2,c.strokeStyle="#da5c6c",c.strokeRect(b*o+1,C*o+1,w*o-2,E*o-2),c.restore()}}function Gn(e,t){const n=new Map;for(const r of e||[])r>=0&&n.set(r,(n.get(r)||0)+1);return[...n.entries()].map(([r,s])=>({...t[r],index:r,count:s})).sort((r,s)=>s.count-r.count)}function yi(e,t,n){return e?{left:Math.max(0,Math.min(e.startColumn,e.endColumn)),top:Math.max(0,Math.min(e.startRow,e.endRow)),right:Math.min(t-1,Math.max(e.startColumn,e.endColumn)),bottom:Math.min(n-1,Math.max(e.startRow,e.endRow))}:{left:0,top:0,right:t-1,bottom:n-1}}function Os(e,t,n,r={}){const s=Math.floor(e/t),l=e%t,o=new Set([e]);return r.horizontal&&o.add(s*t+(t-l-1)),r.vertical&&o.add((n-s-1)*t+l),r.horizontal&&r.vertical&&o.add((n-s-1)*t+(t-l-1)),[...o]}function p2(e,t,n,r,s,l={}){if(r<0||r>=e.length)return new Int16Array(e);const o=e[r];if(o===s)return new Int16Array(e);const a=new Int16Array(e),i=new Uint8Array(e.length),u=[r];i[r]=1;for(let c=0;c<u.length;c+=1){const f=u[c],p=Math.floor(f/t),d=f%t;for(const C of Os(f,t,n,l))a[C]=s;const b=[d>0?f-1:-1,d<t-1?f+1:-1,p>0?f-t:-1,p<n-1?f+t:-1];for(const C of b)C>=0&&!i[C]&&e[C]===o&&(i[C]=1,u.push(C))}return a}function m2(e,t,n,r,s,l={}){const o=new Int16Array(e),{left:a,top:i,right:u,bottom:c}=yi(r,t,n);for(let f=i;f<=c;f+=1)for(let p=a;p<=u;p+=1){const d=f*t+p;for(const b of Os(d,t,n,l))o[b]=s}return o}function Dl(e,t,n){const r=new Int16Array(e);if(t===n)return r;for(let s=0;s<r.length;s+=1)r[s]===t&&(r[s]=n);return r}function g2(e,t,n,r,s=null){const l=new Int16Array(e),{left:o,top:a,right:i,bottom:u}=yi(s,t,n);for(let c=a;c<=u;c+=1)for(let f=o;f<=i;f+=1){const p=c*t+f,d=r==="horizontal"?i-(f-o):f,b=r==="vertical"?u-(c-a):c;l[b*t+d]=e[p]}return l}function bi(e,t,n){const r=Gn(e,t),s=Math.max(2,Number(n)||t.length);if(r.length<=s)return new Int16Array(e);const l=r.slice(0,s),o=vi(l),a=new Map;for(const u of r.slice(s)){const c=Sr(Qt(u.hex));let f=l[0].index,p=Number.POSITIVE_INFINITY;for(const d of o){const b=Ns(c,d.lab);b<p&&(p=b,f=l[d.index].index)}a.set(u.index,f)}const i=new Int16Array(e);for(let u=0;u<i.length;u+=1)a.has(i[u])&&(i[u]=a.get(i[u]));return i}function v2(e,t,n,r=1){let s=new Int16Array(e);const l=[-1,0,1];for(let o=0;o<r;o+=1){const a=s,i=new Int16Array(a);for(let u=0;u<n;u+=1)for(let c=0;c<t;c+=1){const f=u*t+c,p=a[f];if(p<0)continue;const d=new Map;let b=0;for(const E of l)for(const k of l){if(!k&&!E)continue;const B=c+k,A=u+E;if(B<0||A<0||B>=t||A>=n)continue;const $=a[A*t+B];$<0||($===p&&(b+=1),d.set($,(d.get($)||0)+1))}const[C,w]=[...d.entries()].sort((E,k)=>k[1]-E[1])[0]||[];b<=1&&C!==void 0&&C!==p&&w>=4&&(i[f]=C)}s=i}return s}function y2(e,t,n=8,r=6){const s=Gn(e,t),l=new Map(s.map(a=>[a.index,Sr(Qt(a.hex))])),o=[];for(let a=0;a<s.length;a+=1)for(let i=a+1;i<s.length;i+=1){const u=s[a],c=s[i],f=Ns(l.get(u.index),l.get(c.index));if(f>r)continue;const p=u.count<=c.count?u:c,d=p===u?c:u;o.push({source:p,target:d,distance:f})}return o.sort((a,i)=>a.distance-i.distance).slice(0,n)}async function b2(e){return"createImageBitmap"in window?createImageBitmap(e,{imageOrientation:"from-image"}):new Promise((t,n)=>{const r=URL.createObjectURL(e),s=new Image;s.onload=()=>{URL.revokeObjectURL(r),t(s)},s.onerror=()=>{URL.revokeObjectURL(r),n(new Error("无法读取这张图片"))},s.src=r})}function Ci(e,t,n,r=1,s=50,l=50){const o=e/t;let a=e,i=t;o>n?a=t*n:i=e/n,a/=r,i/=r;const u=a/2+(e-a)*(s/100),c=i/2+(t-i)*(l/100);return{x:Math.max(0,Math.min(e-a,u-a/2)),y:Math.max(0,Math.min(t-i,c-i/2)),width:a,height:i}}function C2(e,t,n){if(!e||!t)return;const{columns:r,rows:s,zoom:l,focusX:o,focusY:a}=n,i=r/s;e.width=520,e.height=260;const u=Ci(t.width,t.height,i,l,o,a),c=e.getContext("2d");c.fillStyle="#23211e",c.fillRect(0,0,e.width,e.height);const f=Math.min(e.width,e.height*i),p=f/i,d=(e.width-f)/2,b=(e.height-p)/2;c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high",c.drawImage(t,u.x,u.y,u.width,u.height,d,b,f,p),c.strokeStyle="rgba(255,255,255,.55)",c.strokeRect(d+.5,b+.5,f-1,p-1)}function w2(e,t,n){const{columns:r,rows:s,zoom:l,focusX:o,focusY:a}=t,i=4,u=document.createElement("canvas");u.width=r*i,u.height=s*i;const c=u.getContext("2d"),f=Ci(e.width,e.height,r/s,l,o,a);c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high",c.drawImage(e,f.x,f.y,f.width,f.height,0,0,u.width,u.height);const p=document.createElement("canvas");p.width=r,p.height=s;const d=p.getContext("2d",{willReadFrequently:!0});d.imageSmoothingEnabled=!0,d.imageSmoothingQuality="high",d.clearRect(0,0,r,s),d.drawImage(u,0,0,r,s);const b=d.getImageData(0,0,r,s).data,C=P2(b,r,s,t),w=vi(n),E=new Int16Array(r*s);for(let k=0;k<E.length;k+=1){const B=k*4;E[k]=b[B+3]<48?-1:d2({r:C[B],g:C[B+1],b:C[B+2]},w)}return bi(E,n,t.maxColors)}function P2(e,t,n,r){const s=(r.brightness??100)/100,l=(r.contrast??100)/100,o=(r.saturation??100)/100,a=(r.detail??0)/100,i=new Float32Array(e.length),u=p=>Math.max(0,Math.min(255,p));for(let p=0;p<e.length;p+=4){const d=e[p],b=e[p+1],C=e[p+2],w=d*.2126+b*.7152+C*.0722;i[p]=u(((w+(d-w)*o-128)*l+128)*s),i[p+1]=u(((w+(b-w)*o-128)*l+128)*s),i[p+2]=u(((w+(C-w)*o-128)*l+128)*s),i[p+3]=e[p+3]}if(a<=0)return i;const c=new Float32Array(i),f=[[-1,0],[1,0],[0,-1],[0,1]];for(let p=0;p<n;p+=1)for(let d=0;d<t;d+=1){const b=(p*t+d)*4;if(i[b+3]<48)continue;const C=[0,0,0];let w=0;for(const[E,k]of f){const B=d+E,A=p+k;if(B<0||A<0||B>=t||A>=n)continue;const $=(A*t+B)*4;i[$+3]<48||(C[0]+=i[$],C[1]+=i[$+1],C[2]+=i[$+2],w+=1)}if(w)for(let E=0;E<3;E+=1){const k=C[E]/w;c[b+E]=u(i[b+E]+(i[b+E]-k)*a)}}return c}const Vr=595.28,Ur=841.89;function wi(e,t){const n=URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=t,r.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}function Pi(e){const{r:t,g:n,b:r}=Qt(e);return(t*299+n*587+r*114)/1e3>158?"#26231f":"#ffffff"}function yn(e,t,n,r,s,l="#27241f"){e.font=s,e.fillStyle=l,e.textAlign="center",e.textBaseline="middle",e.fillText(t,n,r)}function Ai(e,t,n,r,s={}){const l=s.startColumn||0,o=s.startRow||0,a=Math.min(t,s.endColumn??t),i=Math.min(n,s.endRow??n),u=a-l,c=i-o,f=s.cellSize||28,p=Math.max(30,Math.round(f*1.2)),d=s.titleHeight??58,b=s.footerHeight??26,C=document.createElement("canvas");C.width=p*2+u*f,C.height=d+p*2+c*f+b;const w=C.getContext("2d");w.fillStyle="#fbfaf7",w.fillRect(0,0,C.width,C.height),w.textAlign="left",w.textBaseline="middle",w.fillStyle="#24211d",w.font="700 20px system-ui, sans-serif",w.fillText(s.title||`${t} × ${n} 拼豆图纸`,p,d/2-4),s.subtitle&&(w.textAlign="right",w.font="12px system-ui, sans-serif",w.fillStyle="#6f6961",w.fillText(s.subtitle,C.width-p,d/2-4));const E=p,k=d+p,B=Math.max(7,Math.min(12,Math.floor(f*.36)));for(let A=o;A<i;A+=1)for(let $=l;$<a;$+=1){const X=$-l,ee=A-o,de=E+X*f,z=k+ee*f,T=r[e[A*t+$]];w.fillStyle=(T==null?void 0:T.hex)||"#ffffff",w.fillRect(de,z,f,f),T&&yn(w,T.code,de+f/2,z+f/2+.5,`700 ${B}px system-ui, sans-serif`,Pi(T.hex))}for(let A=0;A<=u;A+=1){const $=l+A,X=E+A*f+.5;w.beginPath(),w.moveTo(X,k),w.lineTo(X,k+c*f),w.strokeStyle=$%10===0?"#4d4943":$%5===0?"#77716a":"#c8c4bd",w.lineWidth=$%10===0?1.5:1,w.stroke()}for(let A=0;A<=c;A+=1){const $=o+A,X=k+A*f+.5;w.beginPath(),w.moveTo(E,X),w.lineTo(E+u*f,X),w.strokeStyle=$%10===0?"#4d4943":$%5===0?"#77716a":"#c8c4bd",w.lineWidth=$%10===0?1.5:1,w.stroke()}for(let A=0;A<u;A+=1){const $=String(l+A+1),X=E+A*f+f/2;yn(w,$,X,k-p/2,"600 11px system-ui, sans-serif","#56514b"),yn(w,$,X,k+c*f+p/2,"600 11px system-ui, sans-serif","#56514b")}for(let A=0;A<c;A+=1){const $=String(o+A+1),X=k+A*f+f/2;yn(w,$,E-p/2,X,"600 11px system-ui, sans-serif","#56514b"),yn(w,$,E+u*f+p/2,X,"600 11px system-ui, sans-serif","#56514b")}return C}function ki(e,t,n){const{x:r,y:s,width:l,columns:o=5,rowHeight:a=42}=n,i=10,u=(l-i*(o-1))/o;return t.forEach((c,f)=>{const p=f%o,d=Math.floor(f/o),b=r+p*(u+i),C=s+d*a;e.fillStyle="#ffffff",e.strokeStyle="#d4d0c9",e.lineWidth=1,e.fillRect(b,C,u,a-8),e.strokeRect(b+.5,C+.5,u-1,a-9);const w=Math.min(58,Math.max(42,u*.28));e.fillStyle=c.hex,e.fillRect(b,C,w,a-8),e.textBaseline="middle",e.font="700 12px system-ui, sans-serif",e.fillStyle=Pi(c.hex),e.textAlign="center",e.fillText(c.code,b+w/2,C+(a-8)/2),e.textAlign="right",e.fillStyle="#37332e",e.font="600 12px system-ui, sans-serif",e.fillText(String(c.count),b+u-10,C+(a-8)/2)}),Math.ceil(t.length/o)*a}function A2(e,t,n,r,s={}){const l=Gn(e,r),o=Math.max(22,Math.min(30,Math.floor(3600/Math.max(t,n)))),a=Ai(e,t,n,r,{cellSize:o,title:`${t} × ${n} 拼豆图纸`,subtitle:s.paletteName||"",footerHeight:0}),i=Math.max(4,Math.min(16,Math.floor((a.width-54)/200))),u=Math.ceil(l.length/i),c=82,f=Math.max(90,u*42),p=document.createElement("canvas");p.width=a.width,p.height=a.height+c+f+26;const d=p.getContext("2d");d.fillStyle="#fbfaf7",d.fillRect(0,0,p.width,p.height),d.drawImage(a,0,0);const b=a.height+34;d.textAlign="left",d.textBaseline="middle",d.fillStyle="#24211d",d.font="700 22px system-ui, sans-serif";const C=l.reduce((w,E)=>w+E.count,0);return d.fillText(`拼豆数量统计（${C} 颗）`,32,b),d.font="12px system-ui, sans-serif",d.fillStyle="#6f6961",d.textAlign="right",d.fillText(`${l.length} 种颜色`,p.width-32,b),ki(d,l,{x:32,y:a.height+c,width:p.width-64,columns:i}),p}function k2(e,t,n=""){const r=Gn(e,t),s=96,l=[];for(let o=0;o<r.length;o+=s){const a=r.slice(o,o+s),i=document.createElement("canvas");i.width=900,i.height=1273;const u=i.getContext("2d");u.fillStyle="#fbfaf7",u.fillRect(0,0,i.width,i.height),u.fillStyle="#24211d",u.textAlign="left",u.textBaseline="middle",u.font="700 30px system-ui, sans-serif";const c=r.reduce((f,p)=>f+p.count,0);u.fillText(`拼豆数量统计（${c} 颗）`,52,62),u.font="15px system-ui, sans-serif",u.fillStyle="#6f6961",u.fillText(`${n} · ${r.length} 种颜色`,52,101),ki(u,a,{x:52,y:142,width:796,columns:4,rowHeight:43}),u.textAlign="right",u.font="14px system-ui, sans-serif",u.fillText(`统计表 ${Math.floor(o/s)+1} / ${Math.ceil(r.length/s)}`,848,1230),l.push(i)}return l}function S2(e){const t=atob(e.split(",")[1]),n=new Uint8Array(t.length);for(let r=0;r<t.length;r+=1)n[r]=t.charCodeAt(r);return n}function x2(e){const t=new TextEncoder,n=new Map,r=e.map((u,c)=>`${3+c*3} 0 R`).join(" ");n.set(1,t.encode("<< /Type /Catalog /Pages 2 0 R >>")),n.set(2,t.encode(`<< /Type /Pages /Kids [${r}] /Count ${e.length} >>`)),e.forEach((u,c)=>{const f=3+c*3,p=f+1,d=f+2,b=S2(u.toDataURL("image/jpeg",.92)),C=Math.min((Vr-30)/u.width,(Ur-30)/u.height),w=u.width*C,E=u.height*C,k=(Vr-w)/2,B=(Ur-E)/2,A=t.encode(`q
${w.toFixed(2)} 0 0 ${E.toFixed(2)} ${k.toFixed(2)} ${B.toFixed(2)} cm
/Im${c} Do
Q`);n.set(f,t.encode(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${Vr} ${Ur}] /Resources << /XObject << /Im${c} ${p} 0 R >> >> /Contents ${d} 0 R >>`));const $=t.encode(`<< /Type /XObject /Subtype /Image /Width ${u.width} /Height ${u.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${b.length} >>
stream
`),X=t.encode(`
endstream`),ee=new Uint8Array($.length+b.length+X.length);ee.set($),ee.set(b,$.length),ee.set(X,$.length+b.length),n.set(p,ee);const de=t.encode(`<< /Length ${A.length} >>
stream
`),z=t.encode(`
endstream`),T=new Uint8Array(de.length+A.length+z.length);T.set(de),T.set(A,de.length),T.set(z,de.length+A.length),n.set(d,T)});const s=[t.encode(`%PDF-1.4
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
%%EOF`),s.push(t.encode(i.join(""))),new Blob(s,{type:"application/pdf"})}function _2(e,t,n,r,s,l={}){if(!(e!=null&&e.length))return;A2(e,t,n,r,l).toBlob(a=>{a&&wi(a,s)},"image/png")}function E2(e,t,n,r,s,l={}){if(!(e!=null&&e.length))return;const o=[],a=Math.max(8,Number(l.boardSize)||29),i=a,u=Math.ceil(t/a),c=Math.ceil(n/i);for(let f=0;f<c;f+=1)for(let p=0;p<u;p+=1)o.push(Ai(e,t,n,r,{startColumn:p*a,endColumn:(p+1)*a,startRow:f*i,endRow:(f+1)*i,cellSize:32,title:`${t} × ${n} 拼豆图纸`,subtitle:`区域 ${p+1}/${u} · ${f+1}/${c}`}));o.push(...k2(e,r,l.paletteName||"")),wi(x2(o),s)}const Si=1;function M2({cells:e,columns:t,rows:n,paletteId:r,settings:s,inventory:l}){return{type:"sakura-tools/pixel-beads",version:Si,savedAt:new Date().toISOString(),paletteId:r,grid:{columns:t,rows:n,cells:Array.from(e)},settings:{beadSize:s.beadSize,detail:s.detail,saturation:s.saturation,contrast:s.contrast,brightness:s.brightness,maxColors:s.maxColors},inventory:{...l}}}function R2(e,t){var a,i;const n=JSON.parse(e);if((n==null?void 0:n.type)!=="sakura-tools/pixel-beads"||n.version!==Si)throw new Error("不是受支持的 Sakura Tools 拼豆工程文件");const r=t.find(u=>u.id===n.paletteId);if(!r)throw new Error("工程使用的色板在当前版本中不可用");const s=Number((a=n.grid)==null?void 0:a.columns),l=Number((i=n.grid)==null?void 0:i.rows);if(!Number.isInteger(s)||!Number.isInteger(l)||s<8||l<8||s>150||l>150)throw new Error("工程网格尺寸无效");if(!Array.isArray(n.grid.cells)||n.grid.cells.length!==s*l)throw new Error("工程网格数据不完整");const o=new Int16Array(n.grid.cells);if([...o].some(u=>u<-1||u>=r.colors.length))throw new Error("工程中包含无效色号");return{...n,palette:r,columns:s,rows:l,cells:o}}function Ll(e,t,n="application/json"){const r=new Blob([e],{type:n}),s=URL.createObjectURL(r),l=document.createElement("a");l.href=s,l.download=t,l.click(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function T2(e,t){const n=[["色号","颜色","需要","已有","缺少"]];for(const r of e){const s=Math.max(0,Number(t[r.id])||0);n.push([r.code,r.name,r.count,s,Math.max(0,r.count-s)])}return`\uFEFF${n.map(r=>r.map(s=>`"${String(s).replaceAll('"','""')}"`).join(",")).join(`\r
`)}`}const B2={class:"bead-studio"},$2={class:"upload-symbol"},N2=["disabled"],O2={key:0,class:"error-message"},H2={class:"bead-flow","aria-label":"工作流程"},I2={class:"bead-workbench"},D2={class:"bead-sidebar bead-source-panel"},L2={class:"bead-panel-heading"},F2={key:1,class:"project-preview"},G2=["title"],j2={key:2,class:"error-message"},z2={class:"bead-field-row"},V2={class:"bead-size-presets","aria-label":"常用方形网格预设"},U2=["onClick"],q2={class:"bead-range"},W2={class:"bead-range"},K2={class:"bead-range"},J2={class:"bead-range compact-range"},Y2={class:"bead-range compact-range"},X2={class:"bead-range compact-range"},Q2={class:"bead-range compact-range"},Z2={class:"bead-select"},eh={class:"bead-optimize-actions"},th=["disabled"],nh=["disabled"],rh={class:"bead-segmented"},sh={class:"bead-select"},lh=["value"],oh=["disabled"],ih={class:"bead-editor-panel"},ah={class:"bead-toolbar"},uh={class:"bead-tool-group","aria-label":"绘制工具"},ch={class:"bead-tool-group compact"},fh=["disabled","title"],dh=["disabled","title"],hh={class:"canvas-zoom"},ph={class:"preview-toggle","aria-label":"预览样式"},mh={class:"bead-editor-actions"},gh={class:"bead-canvas-status"},vh={class:"bead-sidebar bead-color-panel"},yh={class:"bead-panel-heading"},bh={class:"bead-palette","aria-label":"拼豆色板"},Ch=["title","onClick"],wh={class:"bead-materials"},Ph={class:"bead-usage"},Ah=["onClick","onKeydown"],kh={title:"需要数量"},Sh=["onUpdate:modelValue"],xh={key:0},_h={key:1,class:"enough"},Eh={key:0,class:"merge-suggestions"},Mh=["onClick"],Rh={class:"bead-export"},Th={class:"project-actions"},Bh={class:"local-processing"},$h={__name:"PixelBeadsTool",setup(e){const t=le(null),n=le(null),r=le(null),s=le(null),l=le(null),o=Xr(null),a=le(""),i=le(""),u=le(!1),c=le(!1),f=Xr(new Int16Array),p=Dt({columns:0,rows:0}),d=Dt({columns:48,rows:48,zoom:1,focusX:50,focusY:50,detail:32,saturation:106,contrast:104,brightness:100,maxColors:0,beadSize:5,paletteId:En[0].id}),b=le("brush"),C=le(0),w=le(16),E=le(!0),k=le(!1),B=le("pixel"),A=le(null),$=Dt({horizontal:!1,vertical:!1}),X=Dt({}),ee=le([]),de=le([]);let z=null,T=-1,V=null,ne=0;const me=[29,48,52,80,100],ae=ve(()=>f2(d.paletteId)),Me=ve(()=>Gn(f.value,ae.value.colors)),xe=ve(()=>Me.value.reduce((F,g)=>F+g.count,0)),he=ve(()=>({width:(p.columns*d.beadSize/10).toFixed(1),height:(p.rows*d.beadSize/10).toFixed(1)})),ce=ve(()=>ee.value.length>0),tt=ve(()=>de.value.length>0),rt=ve(()=>ae.value.colors[C.value]),Ke=ve(()=>y2(f.value,ae.value.colors)),Oe=ve(()=>Me.value.reduce((F,g)=>{const ie=Math.max(0,Number(X[g.id])||0);return F+Math.max(0,g.count-ie)},0));function yt(){d.columns=Math.max(8,Math.min(150,Number(d.columns)||48)),d.rows=Math.max(8,Math.min(150,Number(d.rows)||48))}function Bt(F){d.columns=F,d.rows=F}async function ut(F){var g,ie;if(i.value="",!F||!["image/jpeg","image/png","image/webp"].includes(F.type)){i.value="请选择 JPG、PNG 或 WebP 图片";return}if(F.size>12*1024*1024){i.value="图片不能超过 12 MB";return}u.value=!0;try{(ie=(g=o.value)==null?void 0:g.close)==null||ie.call(g),o.value=await b2(F),a.value=F.name,d.zoom=1,d.focusX=50,d.focusY=50,await Xe(),j(),L()}catch(ge){i.value=ge.message||"图片读取失败"}finally{u.value=!1}}function je(F){var g;ut((g=F.target.files)==null?void 0:g[0]),F.target.value=""}function x(F){var g,ie;c.value=!1,ut((ie=(g=F.dataTransfer)==null?void 0:g.files)==null?void 0:ie[0])}function j(){o.value&&(yt(),C2(r.value,o.value,d))}function L(){if(o.value){yt(),u.value=!0;try{const F=w2(o.value,d,ae.value.colors);p.columns=d.columns,p.rows=d.rows,f.value=F,C.value=F.find(g=>g>=0)??0,ee.value=[],de.value=[],Xe(()=>{m(),re()})}finally{u.value=!1}}}function K(){h2(s.value,f.value,p.columns,p.rows,ae.value.colors,{cellSize:w.value,showGrid:E.value,showCodes:k.value,mode:B.value,selection:A.value,symmetry:$})}function re(){ne||(ne=requestAnimationFrame(()=>{ne=0,K()}))}function m(){if(!l.value||!p.columns||!p.rows)return;const F=Math.max(240,l.value.clientWidth-56),g=Math.max(240,l.value.clientHeight-56);w.value=Math.max(4,Math.min(25,Math.floor(Math.min(F/p.columns,g/p.rows))))}function v(){ee.value=[...ee.value.slice(-39),new Int16Array(f.value)],de.value=[]}function y(){ce.value&&(de.value=[new Int16Array(f.value),...de.value.slice(0,39)],f.value=ee.value[ee.value.length-1],ee.value=ee.value.slice(0,-1),Xe(re))}function S(){tt.value&&(ee.value=[...ee.value.slice(-39),new Int16Array(f.value)],f.value=de.value[0],de.value=de.value.slice(1),Xe(re))}function _(F){const g=s.value.getBoundingClientRect(),ie=(F.clientX-g.left)*(s.value.width/g.width),ge=(F.clientY-g.top)*(s.value.height/g.height),R=Math.floor(ie/w.value),oe=Math.floor(ge/w.value);return R<0||oe<0||R>=p.columns||oe>=p.rows?-1:oe*p.columns+R}function P(F){return{column:F%p.columns,row:Math.floor(F/p.columns)}}function I(F){v(),f.value=F,Xe(re)}function H(F){if(F<0||F===T)return;if(T=F,b.value==="picker"){const ge=f.value[F];ge>=0&&(C.value=ge,b.value="brush"),z=null;return}const g=b.value==="eraser"?-1:C.value,ie=Os(F,p.columns,p.rows,$);if(!ie.every(ge=>z[ge]===g)){for(const ge of ie)z[ge]=g;f.value=new Int16Array(z),re()}}function N(F){var ie,ge;if(!f.value.length)return;F.preventDefault(),(ge=(ie=s.value).setPointerCapture)==null||ge.call(ie,F.pointerId),T=-1;const g=_(F);if(!(g<0)){if(b.value==="bucket"){I(p2(f.value,p.columns,p.rows,g,C.value,$));return}if(b.value==="replace"){I(Dl(f.value,f.value[g],C.value));return}if(b.value==="rectangle"||b.value==="select"){const R=P(g);V={startColumn:R.column,startRow:R.row,endColumn:R.column,endRow:R.row},A.value={...V},b.value==="rectangle"&&v(),re();return}b.value!=="picker"&&v(),z=new Int16Array(f.value),H(g)}}function M(F){if(!(F.buttons&1))return;const g=_(F);if(V&&g>=0){const ie=P(g);V.endColumn=ie.column,V.endRow=ie.row,A.value={...V},re();return}z&&H(g)}function Y(){V&&b.value==="rectangle"&&(f.value=m2(f.value,p.columns,p.rows,V,C.value,$),A.value=null),V=null,z=null,T=-1,re()}function G(F){f.value.length&&I(g2(f.value,p.columns,p.rows,F,A.value))}function J(){f.value.length&&I(v2(f.value,p.columns,p.rows,2))}function te(){!f.value.length||!d.maxColors||I(bi(f.value,ae.value.colors,d.maxColors))}function fe(F){I(Dl(f.value,F.source.index,F.target.index))}function Pe(){if(!f.value.length)return;const F=M2({cells:f.value,columns:p.columns,rows:p.rows,paletteId:ae.value.id,settings:d,inventory:X});Ll(JSON.stringify(F),`${ze()}.sakurabeads`)}async function ye(F){var ie,ge,R;const g=(ie=F.target.files)==null?void 0:ie[0];if(F.target.value="",!!g){i.value="";try{const oe=R2(await g.text(),En);(R=(ge=o.value)==null?void 0:ge.close)==null||R.call(ge),o.value=null,a.value=g.name.replace(/\.sakurabeads$/i,""),d.paletteId=oe.palette.id,d.columns=oe.columns,d.rows=oe.rows,Object.assign(d,oe.settings||{}),p.columns=oe.columns,p.rows=oe.rows,f.value=oe.cells;for(const jn of Object.keys(X))delete X[jn];Object.assign(X,oe.inventory||{}),C.value=oe.cells.find(jn=>jn>=0)??0,A.value=null,ee.value=[],de.value=[],await Xe(),m(),re()}catch(oe){i.value=oe.message||"工程文件读取失败"}}}function Re(){Ll(T2(Me.value,X),`${ze()}-材料清单.csv`,"text/csv;charset=utf-8")}function Be(F){C.value=F}function ze(){return`${a.value.replace(/\.[^.]+$/,"").replace(/[^a-zA-Z0-9\u4e00-\u9fa5_-]+/g,"-")||"pattern"}-${p.columns}x${p.rows}`}Gt(()=>[d.columns,d.rows,d.zoom,d.focusX,d.focusY],()=>Xe(j)),Gt(()=>d.paletteId,()=>{o.value&&L()}),Gt([w,E,k,B,A,()=>$.horizontal,()=>$.vertical],()=>Xe(re));function Ye(F){var g;!(F.ctrlKey||F.metaKey)||F.key.toLowerCase()!=="z"||["INPUT","SELECT","TEXTAREA"].includes((g=F.target)==null?void 0:g.tagName)||(F.preventDefault(),F.shiftKey?S():y())}return hn(()=>window.addEventListener("keydown",Ye)),xs(()=>{var F,g;window.removeEventListener("keydown",Ye),ne&&cancelAnimationFrame(ne),(g=(F=o.value)==null?void 0:F.close)==null||g.call(F)}),(F,g)=>{var ie,ge;return Z(),ue("div",B2,[!o.value&&!f.value.length?(Z(),ue("div",{key:0,class:pe(["bead-upload",{dragging:c.value}]),onDragenter:g[2]||(g[2]=gn(R=>c.value=!0,["prevent"])),onDragover:g[3]||(g[3]=gn(()=>{},["prevent"])),onDragleave:g[4]||(g[4]=gn(R=>c.value=!1,["prevent"])),onDrop:gn(x,["prevent"])},[h("input",{ref_key:"fileInput",ref:t,type:"file",accept:"image/jpeg,image/png,image/webp",hidden:"",onChange:je},null,544),h("span",$2,[D(O(S1),{size:34,"stroke-width":1.5})]),g[41]||(g[41]=h("p",{class:"bead-kicker"},"LOCAL IMAGE WORKFLOW",-1)),g[42]||(g[42]=h("h2",null,"从一张图片开始",-1)),g[43]||(g[43]=h("p",null,"拖入 JPG、PNG 或 WebP，图片只在当前浏览器中解码与处理。",-1)),h("button",{class:"primary-button",type:"button",disabled:u.value,onClick:g[0]||(g[0]=R=>{var oe;return(oe=t.value)==null?void 0:oe.click()})},[D(O(Z1),{size:17}),U(" "+q(u.value?"正在读取…":"选择图片"),1)],8,N2),h("button",{class:"project-open-button",type:"button",onClick:g[1]||(g[1]=R=>{var oe;return(oe=n.value)==null?void 0:oe.click()})},[D(O(Gr),{size:16}),g[40]||(g[40]=U(" 打开拼豆工程",-1))]),h("input",{ref_key:"projectInput",ref:n,type:"file",accept:".sakurabeads,application/json",hidden:"",onChange:ye},null,544),g[44]||(g[44]=h("small",null,"最大 12 MB · 不上传服务器",-1)),i.value?(Z(),ue("p",O2,q(i.value),1)):Wt("",!0)],34)):(Z(),ue(He,{key:1},[h("div",H2,[g[45]||(g[45]=h("span",{class:"done"},"01 图片",-1)),g[46]||(g[46]=h("i",null,null,-1)),g[47]||(g[47]=h("span",{class:"done"},"02 裁剪",-1)),g[48]||(g[48]=h("i",null,null,-1)),h("span",{class:pe({done:f.value.length})},"03 配色",2),g[49]||(g[49]=h("i",null,null,-1)),h("span",{class:pe({done:f.value.length})},"04 编辑导出",2)]),h("div",I2,[h("aside",D2,[h("div",L2,[h("span",null,[D(O(R1),{size:15}),g[50]||(g[50]=U(" 图片与网格",-1))]),h("button",{type:"button",onClick:g[5]||(g[5]=R=>{var oe;return(oe=t.value)==null?void 0:oe.click()})},[D(O(Bs),{size:13}),g[51]||(g[51]=U(" 换图",-1))]),h("input",{ref_key:"fileInput",ref:t,type:"file",accept:"image/jpeg,image/png,image/webp",hidden:"",onChange:je},null,544)]),o.value?(Z(),ue("canvas",{key:0,ref_key:"cropCanvas",ref:r,class:"crop-preview","aria-label":"裁剪预览"},null,512)):(Z(),ue("div",F2,[D(O(Gr),{size:22}),g[52]||(g[52]=h("span",null,"已打开工程网格",-1))])),h("p",{class:"source-name",title:a.value},q(a.value),9,G2),i.value?(Z(),ue("p",j2,q(i.value),1)):Wt("",!0),h("div",z2,[h("label",null,[g[53]||(g[53]=U("宽度 ",-1)),_e(h("input",{"onUpdate:modelValue":g[6]||(g[6]=R=>d.columns=R),type:"number",min:"8",max:"150"},null,512),[[Ne,d.columns,void 0,{number:!0}]])]),g[55]||(g[55]=h("span",null,"×",-1)),h("label",null,[g[54]||(g[54]=U("高度 ",-1)),_e(h("input",{"onUpdate:modelValue":g[7]||(g[7]=R=>d.rows=R),type:"number",min:"8",max:"150"},null,512),[[Ne,d.rows,void 0,{number:!0}]])])]),h("div",V2,[(Z(),ue(He,null,qt(me,R=>h("button",{key:R,type:"button",class:pe({active:d.columns===R&&d.rows===R}),onClick:oe=>Bt(R)},q(R),11,U2)),64))]),h("label",q2,[h("span",null,[g[56]||(g[56]=U("裁剪缩放 ",-1)),h("b",null,q(d.zoom.toFixed(1))+"×",1)]),_e(h("input",{"onUpdate:modelValue":g[8]||(g[8]=R=>d.zoom=R),type:"range",min:"1",max:"3",step:"0.1"},null,512),[[Ne,d.zoom,void 0,{number:!0}]])]),h("label",W2,[h("span",null,[g[57]||(g[57]=U("水平取景 ",-1)),h("b",null,q(d.focusX)+"%",1)]),_e(h("input",{"onUpdate:modelValue":g[9]||(g[9]=R=>d.focusX=R),type:"range",min:"0",max:"100"},null,512),[[Ne,d.focusX,void 0,{number:!0}]])]),h("label",K2,[h("span",null,[g[58]||(g[58]=U("垂直取景 ",-1)),h("b",null,q(d.focusY)+"%",1)]),_e(h("input",{"onUpdate:modelValue":g[10]||(g[10]=R=>d.focusY=R),type:"range",min:"0",max:"100"},null,512),[[Ne,d.focusY,void 0,{number:!0}]])]),g[68]||(g[68]=h("span",{class:"bead-label"},"成像调整",-1)),h("label",J2,[h("span",null,[g[59]||(g[59]=U("细节增强 ",-1)),h("b",null,q(d.detail),1)]),_e(h("input",{"onUpdate:modelValue":g[11]||(g[11]=R=>d.detail=R),type:"range",min:"0",max:"80"},null,512),[[Ne,d.detail,void 0,{number:!0}]])]),h("label",Y2,[h("span",null,[g[60]||(g[60]=U("饱和度 ",-1)),h("b",null,q(d.saturation)+"%",1)]),_e(h("input",{"onUpdate:modelValue":g[12]||(g[12]=R=>d.saturation=R),type:"range",min:"70",max:"140"},null,512),[[Ne,d.saturation,void 0,{number:!0}]])]),h("label",X2,[h("span",null,[g[61]||(g[61]=U("对比度 ",-1)),h("b",null,q(d.contrast)+"%",1)]),_e(h("input",{"onUpdate:modelValue":g[13]||(g[13]=R=>d.contrast=R),type:"range",min:"80",max:"130"},null,512),[[Ne,d.contrast,void 0,{number:!0}]])]),h("label",Q2,[h("span",null,[g[62]||(g[62]=U("亮度 ",-1)),h("b",null,q(d.brightness)+"%",1)]),_e(h("input",{"onUpdate:modelValue":g[14]||(g[14]=R=>d.brightness=R),type:"range",min:"80",max:"120"},null,512),[[Ne,d.brightness,void 0,{number:!0}]])]),h("label",Z2,[g[64]||(g[64]=h("span",null,"颜色数限制",-1)),_e(h("select",{"onUpdate:modelValue":g[15]||(g[15]=R=>d.maxColors=R)},[...g[63]||(g[63]=[h("option",{value:0},"不限颜色",-1),h("option",{value:10},"最多 10 色",-1),h("option",{value:20},"最多 20 色",-1),h("option",{value:30},"最多 30 色",-1),h("option",{value:40},"最多 40 色",-1),h("option",{value:60},"最多 60 色",-1)])],512),[[dl,d.maxColors,void 0,{number:!0}]])]),h("div",eh,[h("button",{type:"button",disabled:!f.value.length||!d.maxColors,onClick:te},[D(O(Il),{size:14}),g[65]||(g[65]=U(" 应用限色",-1))],8,th),h("button",{type:"button",disabled:!f.value.length,onClick:J},[D(O(gi),{size:14}),g[66]||(g[66]=U(" 去除杂点",-1))],8,nh)]),g[69]||(g[69]=h("span",{class:"bead-label"},"拼豆规格",-1)),h("div",rh,[h("button",{type:"button",class:pe({active:d.beadSize===5}),onClick:g[16]||(g[16]=R=>d.beadSize=5)},"5 mm",2),h("button",{type:"button",class:pe({active:d.beadSize===2.6}),onClick:g[17]||(g[17]=R=>d.beadSize=2.6)},"2.6 mm",2)]),h("label",sh,[g[67]||(g[67]=h("span",null,"品牌色板",-1)),_e(h("select",{"onUpdate:modelValue":g[18]||(g[18]=R=>d.paletteId=R)},[(Z(!0),ue(He,null,qt(O(En),R=>(Z(),ue("option",{key:R.id,value:R.id},q(R.name),9,lh))),128))],512),[[dl,d.paletteId]])]),h("button",{class:"primary-button bead-generate",type:"button",disabled:u.value||!o.value,onClick:L},[D(O(us),{size:16}),U(" "+q(u.value?"生成中…":"应用并重新生成"),1)],8,oh),g[70]||(g[70]=h("p",{class:"palette-note"},"品牌色号来自社区校准数据；屏幕颜色与实物、批次可能存在差异。",-1))]),h("section",ih,[h("div",ah,[h("div",uh,[h("button",{type:"button",class:pe({active:b.value==="brush"}),title:"画笔",onClick:g[19]||(g[19]=R=>b.value="brush")},[D(O(xf),{size:17}),g[71]||(g[71]=h("span",null,"画笔",-1))],2),h("button",{type:"button",class:pe({active:b.value==="eraser"}),title:"橡皮擦",onClick:g[20]||(g[20]=R=>b.value="eraser")},[D(O(N1),{size:17}),g[72]||(g[72]=h("span",null,"擦除",-1))],2),h("button",{type:"button",class:pe({active:b.value==="bucket"}),title:"填充连续区域",onClick:g[21]||(g[21]=R=>b.value="bucket")},[D(O(kf),{size:17}),g[73]||(g[73]=h("span",null,"油漆桶",-1))],2),h("button",{type:"button",class:pe({active:b.value==="rectangle"}),title:"拖动填充矩形",onClick:g[22]||(g[22]=R=>b.value="rectangle")},[D(O(Wf),{size:17}),g[74]||(g[74]=h("span",null,"矩形",-1))],2),h("button",{type:"button",class:pe({active:b.value==="select"}),title:"拖动选择区域，镜像操作将只作用于选区",onClick:g[23]||(g[23]=R=>b.value="select")},[D(O(Uf),{size:17}),g[75]||(g[75]=h("span",null,"选区",-1))],2),h("button",{type:"button",class:pe({active:b.value==="replace"}),title:"点击一种现有颜色，将其全部替换成当前选中色",onClick:g[24]||(g[24]=R=>b.value="replace")},[D(O(Hf),{size:17}),g[76]||(g[76]=h("span",null,"替换",-1))],2),h("button",{type:"button",class:pe({active:b.value==="picker"}),title:"吸色",onClick:g[25]||(g[25]=R=>b.value="picker")},[D(O(cs),{size:17}),g[77]||(g[77]=h("span",null,"吸色",-1))],2)]),h("div",ch,[h("button",{type:"button",disabled:!ce.value,title:`撤销（${ee.value.length} 步历史）`,onClick:y},[D(O(ed),{size:17})],8,fh),h("button",{type:"button",disabled:!tt.value,title:`重做（${de.value.length} 步历史）`,onClick:S},[D(O($f),{size:17})],8,dh)]),h("label",hh,[g[78]||(g[78]=U("缩放 ",-1)),_e(h("input",{"onUpdate:modelValue":g[26]||(g[26]=R=>w.value=R),type:"range",min:"4",max:"25"},null,512),[[Ne,w.value,void 0,{number:!0}]])]),h("button",{class:"fit-button",type:"button",title:"适应画布",onClick:m},[D(O(yf),{size:15}),g[79]||(g[79]=U(" 适应",-1))]),h("div",ph,[h("button",{type:"button",class:pe({active:B.value==="pixel"}),onClick:g[27]||(g[27]=R=>B.value="pixel")},"色块",2),h("button",{type:"button",class:pe({active:B.value==="bead"}),onClick:g[28]||(g[28]=R=>B.value="bead")},"拼豆",2)]),h("button",{class:pe(["grid-toggle",{active:E.value}]),type:"button",onClick:g[29]||(g[29]=R=>E.value=!E.value)},[D(O(us),{size:16}),g[80]||(g[80]=U(" 网格",-1))],2)]),h("div",mh,[g[86]||(g[86]=h("span",null,"对称编辑",-1)),h("button",{type:"button",class:pe({active:$.horizontal}),onClick:g[30]||(g[30]=R=>$.horizontal=!$.horizontal)},[D(O(Ol),{size:14}),g[81]||(g[81]=U(" 左右",-1))],2),h("button",{type:"button",class:pe({active:$.vertical}),onClick:g[31]||(g[31]=R=>$.vertical=!$.vertical)},[D(O(Nl),{size:14}),g[82]||(g[82]=U(" 上下",-1))],2),g[87]||(g[87]=h("i",null,null,-1)),h("span",null,q(A.value?"镜像选区":"镜像全图"),1),h("button",{type:"button",onClick:g[32]||(g[32]=R=>G("horizontal"))},[D(O(Ol),{size:14}),g[83]||(g[83]=U(" 左右",-1))]),h("button",{type:"button",onClick:g[33]||(g[33]=R=>G("vertical"))},[D(O(Nl),{size:14}),g[84]||(g[84]=U(" 上下",-1))]),A.value?(Z(),ue("button",{key:0,type:"button",onClick:g[34]||(g[34]=R=>A.value=null)},"取消选区")):Wt("",!0),h("button",{class:pe(["code-toggle",{active:k.value}]),type:"button",title:"单格放大到 12px 以上时显示色号",onClick:g[35]||(g[35]=R=>k.value=!k.value)},[D(O(Il),{size:14}),g[85]||(g[85]=U(" 格内色号",-1))],2)]),h("div",{ref_key:"canvasViewport",ref:l,class:"bead-canvas-viewport"},[h("canvas",{ref_key:"beadCanvas",ref:s,class:"bead-canvas","aria-label":"拼豆编辑画布",onPointerdown:N,onPointermove:M,onPointerup:Y,onPointercancel:Y,onPointerleave:Y},null,544)],512),h("div",gh,[h("span",null,q(p.columns)+" × "+q(p.rows)+" 颗",1),h("span",null,q(he.value.width)+" × "+q(he.value.height)+" cm",1),h("span",null,q(xe.value)+" 颗豆",1),h("span",null,"历史 "+q(ee.value.length)+" / "+q(de.value.length),1),h("span",null,[h("i",{class:"selected-swatch",style:Ht({background:(ie=rt.value)==null?void 0:ie.hex})},null,4),U(q((ge=rt.value)==null?void 0:ge.name),1)])])]),h("aside",vh,[h("div",yh,[h("span",null,[D(O(cs),{size:15}),g[88]||(g[88]=U(" 颜色与用量",-1))]),h("b",null,q(Me.value.length)+" 色",1)]),h("div",bh,[(Z(!0),ue(He,null,qt(ae.value.colors,(R,oe)=>(Z(),ue("button",{key:R.id,type:"button",class:pe({active:C.value===oe}),style:Ht({"--swatch":R.hex}),title:`${R.name} / ${R.code}`,onClick:jn=>Be(oe)},[...g[89]||(g[89]=[h("span",null,null,-1)])],14,Ch))),128))]),h("div",wh,[h("div",{class:pe(["material-summary",{complete:Oe.value===0}])},[D(O(Hl),{size:14}),h("span",null,q(Oe.value?`按库存还缺 ${Oe.value} 颗`:"库存数量充足"),1)],2),h("div",Ph,[(Z(!0),ue(He,null,qt(Me.value,R=>(Z(),ue("div",{key:R.id,class:"bead-usage-row",role:"button",tabindex:"0",onClick:oe=>Be(R.index),onKeydown:ju(oe=>Be(R.index),["enter"])},[h("i",{style:Ht({background:R.hex})},null,4),h("span",null,[h("b",null,q(R.name),1),h("small",null,q(R.code),1)]),h("strong",kh,"需 "+q(R.count),1),h("label",{title:"输入已有库存",onClick:g[36]||(g[36]=gn(()=>{},["stop"]))},[g[90]||(g[90]=U("有 ",-1)),_e(h("input",{"onUpdate:modelValue":oe=>X[R.id]=oe,type:"number",min:"0"},null,8,Sh),[[Ne,X[R.id],void 0,{number:!0}]])]),R.count>(Number(X[R.id])||0)?(Z(),ue("em",xh,"缺 "+q(R.count-(Number(X[R.id])||0)),1)):(Z(),ue("em",_h,"足够"))],40,Ah))),128))]),Ke.value.length?(Z(),ue("details",Eh,[h("summary",null,[g[91]||(g[91]=U("颜色合并建议 ",-1)),h("b",null,q(Ke.value.length),1)]),(Z(!0),ue(He,null,qt(Ke.value,R=>(Z(),ue("button",{key:`${R.source.id}-${R.target.id}`,type:"button",onClick:oe=>fe(R)},[h("i",{style:Ht({background:R.source.hex})},null,4),U(q(R.source.code)+" ",1),g[92]||(g[92]=h("span",null,"→",-1)),h("i",{style:Ht({background:R.target.hex})},null,4),U(q(R.target.code)+" ",1),h("small",null,"ΔE "+q(R.distance.toFixed(1)),1)],8,Mh))),128))])):Wt("",!0)]),h("div",Rh,[g[98]||(g[98]=h("span",{class:"bead-label"},"导出图纸",-1)),h("button",{type:"button",onClick:g[37]||(g[37]=R=>O(_2)(f.value,p.columns,p.rows,ae.value.colors,`${ze()}.png`,{paletteName:ae.value.name}))},[D(O(D1),{size:16}),g[93]||(g[93]=U(" PNG 图片",-1))]),h("button",{type:"button",onClick:g[38]||(g[38]=R=>O(E2)(f.value,p.columns,p.rows,ae.value.colors,`${ze()}.pdf`,{paletteName:ae.value.name,boardSize:29}))},[D(O(pi),{size:16}),g[94]||(g[94]=U(" PDF（29×29 分页）",-1))]),h("button",{type:"button",onClick:Re},[D(O(Hl),{size:16}),g[95]||(g[95]=U(" 材料清单 CSV",-1))]),g[99]||(g[99]=h("span",{class:"bead-label project-label"},"工程文件",-1)),h("div",Th,[h("button",{type:"button",onClick:Pe},[D(O(Df),{size:15}),g[96]||(g[96]=U(" 保存",-1))]),h("button",{type:"button",onClick:g[39]||(g[39]=R=>{var oe;return(oe=n.value)==null?void 0:oe.click()})},[D(O(Gr),{size:15}),g[97]||(g[97]=U(" 打开",-1))])]),h("input",{ref_key:"projectInput",ref:n,type:"file",accept:".sakurabeads,application/json",hidden:"",onChange:ye},null,544)]),h("p",Bh,[D(O(jf),{size:14}),g[100]||(g[100]=U(" 图片与编辑数据仅保留在当前页面",-1))])])])],64))])}}};function Lt(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Fl(e,t=!1){const n=e.trim();return/^(https?:\/\/|#|\/)/i.test(n)||!t&&/^mailto:/i.test(n)||t&&/^data:image\/(png|jpe?g|gif|webp);base64,/i.test(n)?Lt(n):"#"}function rn(e){const t=[],n=[];let r=String(e).replace(/`([^`\n]+)`/g,(s,l)=>(t.push(`<code>${Lt(l)}</code>`),`\0CODE${t.length-1}\0`));return r=Lt(r),r=r.replace(/!\[([^\]]*)\]\(([^\s)]+)(?:\s+&quot;([^&]*)&quot;)?\)/g,(s,l,o,a)=>{const i=a?` title="${Lt(a)}"`:"";return n.push(`<img src="${Fl(o,!0)}" alt="${l}"${i} loading="lazy">`),`\0ASSET${n.length-1}\0`}),r=r.replace(/\[([^\]]+)\]\(([^\s)]+)(?:\s+&quot;([^&]*)&quot;)?\)/g,(s,l,o,a)=>{const i=a?` title="${Lt(a)}"`:"";return n.push(`<a href="${Fl(o)}"${i} target="_blank" rel="noopener noreferrer">${l}</a>`),`\0ASSET${n.length-1}\0`}),r=r.replace(/\*\*([^*\n]+)\*\*/g,"<strong>$1</strong>").replace(/__([^_\n]+)__/g,"<strong>$1</strong>").replace(/~~([^~\n]+)~~/g,"<del>$1</del>").replace(/(^|[^*])\*([^*\n]+)\*/g,"$1<em>$2</em>").replace(/(^|[^_])_([^_\n]+)_/g,"$1<em>$2</em>").replace(/ {2}\n/g,"<br>"),r.replace(/\u0000ASSET(\d+)\u0000/g,(s,l)=>n[Number(l)]).replace(/\u0000CODE(\d+)\u0000/g,(s,l)=>t[Number(l)])}function Gl(e){return/^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(e)}function jl(e){return e.trim().replace(/^\||\|$/g,"").split("|").map(t=>t.trim())}function Nh(e,t){const n=/^\s*\d+[.)]\s+/.test(e[t]),r=n?/^\s*\d+[.)]\s+(.+)$/:/^\s*[-+*]\s+(.+)$/,s=[];let l=t;for(;l<e.length;){const a=e[l].match(r);if(!a)break;const i=a[1].match(/^\[([ xX])\]\s+(.+)$/);i?s.push(`<li class="task-item"><input type="checkbox" disabled${i[1].toLowerCase()==="x"?" checked":""}> <span>${rn(i[2])}</span></li>`):s.push(`<li>${rn(a[1])}</li>`),l+=1}const o=n?"ol":"ul";return{html:`<${o}>${s.join("")}</${o}>`,next:l}}function xi(e){const t=String(e||"").replaceAll(`\r
`,`
`).split(`
`),n=[];let r=0;for(;r<t.length;){const s=t[r];if(!s.trim()){r+=1;continue}const l=s.match(/^\s*```([^`]*)$/);if(l){const i=[];for(r+=1;r<t.length&&!/^\s*```\s*$/.test(t[r]);)i.push(t[r]),r+=1;r+=r<t.length?1:0;const u=l[1].trim().replace(/[^a-zA-Z0-9_-]/g,"");n.push(`<pre><code${u?` class="language-${u}"`:""}>${Lt(i.join(`
`))}</code></pre>`);continue}const o=s.match(/^(#{1,6})\s+(.+)$/);if(o){const i=o[1].length;n.push(`<h${i}>${rn(o[2])}</h${i}>`),r+=1;continue}if(/^\s*((\*\s*){3,}|(-\s*){3,}|(_\s*){3,})$/.test(s)){n.push("<hr>"),r+=1;continue}if(/^\s*>/.test(s)){const i=[];for(;r<t.length&&/^\s*>/.test(t[r]);)i.push(t[r].replace(/^\s*>\s?/,"")),r+=1;n.push(`<blockquote>${xi(i.join(`
`))}</blockquote>`);continue}if(/^\s*([-+*]|\d+[.)])\s+/.test(s)){const i=Nh(t,r);n.push(i.html),r=i.next;continue}if(r+1<t.length&&s.includes("|")&&Gl(t[r+1])){const i=jl(s);r+=2;const u=[];for(;r<t.length&&t[r].includes("|")&&t[r].trim();)u.push(jl(t[r])),r+=1;n.push(`<div class="table-wrap"><table><thead><tr>${i.map(c=>`<th>${rn(c)}</th>`).join("")}</tr></thead><tbody>${u.map(c=>`<tr>${i.map((f,p)=>`<td>${rn(c[p]||"")}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);continue}const a=[s];for(r+=1;r<t.length&&t[r].trim()&&!/^(#{1,6})\s+/.test(t[r])&&!/^\s*```/.test(t[r])&&!/^\s*>/.test(t[r])&&!/^\s*([-+*]|\d+[.)])\s+/.test(t[r])&&!(r+1<t.length&&Gl(t[r+1]));)a.push(t[r]),r+=1;n.push(`<p>${rn(a.join(`
`))}</p>`)}return n.join(`
`)}function Oh(e){const t=String(e||"").match(/^#\s+(.+)$/m);return((t==null?void 0:t[1])||"markdown-document").replace(/[*_`~<>:"/\\|?]+/g,"").trim()||"markdown-document"}const Hh={class:"markdown-commandbar"},Ih={class:"markdown-format-tools","aria-label":"Markdown 格式工具"},Dh={class:"markdown-view-toggle","aria-label":"编辑器视图"},Lh={class:"markdown-file-actions"},Fh={class:"markdown-workbench"},Gh={class:"markdown-editor-pane"},jh={class:"markdown-pane-heading"},zh={class:"markdown-pane-heading"},Vh=["innerHTML"],Uh={class:"markdown-statusbar"},zl="sakura-tools-markdown-draft-v1",qh=`# 一份新的 Markdown 文档

在左侧开始写作，右侧会实时生成适合阅读与打印的预览。

## 支持的内容

- **粗体**、*斜体*、~~删除线~~和行内代码
- 引用、有序列表、任务列表
- 链接、图片、表格与代码块

> 内容只保存在当前浏览器中，不会上传服务器。

| 功能 | 状态 |
| --- | --- |
| 实时预览 | 已启用 |
| PDF 导出 | 已启用 |

\`\`\`javascript
const message = 'Hello, Sakura Tools'
console.log(message)
\`\`\`
`,Wh={__name:"MarkdownTool",setup(e){const t=le(qh),n=le("split"),r=le(null),s=le(null),l=le(null),o=le(""),a=le("自动保存已开启"),i=ve(()=>xi(t.value)),u=ve(()=>Oh(t.value)),c=ve(()=>t.value?t.value.split(/\r?\n/).length:0),f=ve(()=>t.value.replace(/\s/g,"").length),p=ve(()=>Math.max(1,Math.ceil(f.value/500)));function d(z,T){Xe(()=>{var V,ne;(V=r.value)==null||V.focus(),(ne=r.value)==null||ne.setSelectionRange(z,T)})}function b(z,T,V){const ne=r.value,me=(ne==null?void 0:ne.selectionStart)??t.value.length,ae=(ne==null?void 0:ne.selectionEnd)??me;t.value=`${t.value.slice(0,me)}${z}${t.value.slice(ae)}`,d(me+T,me+V)}function C(z,T,V){const ne=r.value,me=(ne==null?void 0:ne.selectionStart)??t.value.length,ae=(ne==null?void 0:ne.selectionEnd)??me,Me=t.value.slice(me,ae)||V;b(`${z}${Me}${T}`,z.length,z.length+Me.length)}function w(z,T){const V=r.value,ne=(V==null?void 0:V.selectionStart)??t.value.length,me=(V==null?void 0:V.selectionEnd)??ne,ae=t.value.lastIndexOf(`
`,ne-1)+1;let Me=t.value.indexOf(`
`,me);Me<0&&(Me=t.value.length);const he=(t.value.slice(ae,Me)||T).split(`
`).map(ce=>`${z}${ce}`).join(`
`);t.value=`${t.value.slice(0,ae)}${he}${t.value.slice(Me)}`,d(ae,ae+he.length)}function E(z,T=z.length){const V=r.value,ne=(V==null?void 0:V.selectionStart)??t.value.length,me=ne>0&&t.value[ne-1]!==`
`?`

`:"";b(`${me}${z}`,me.length+T,me.length+T)}function k(z){var V;const T={bold:()=>C("**","**","粗体文本"),italic:()=>C("*","*","斜体文本"),heading:()=>w("## ","二级标题"),quote:()=>w("> ","引用内容"),list:()=>w("- ","列表项目"),ordered:()=>w("1. ","列表项目"),link:()=>C("[","](https://example.com)","链接文字"),image:()=>E("![图片说明](https://example.com/image.png)",2),code:()=>C("`","`","code"),table:()=>E(`| 列一 | 列二 |
| --- | --- |
| 内容 | 内容 |`)};(V=T[z])==null||V.call(T)}function B(z,T,V){const ne=new Blob([z],{type:V}),me=URL.createObjectURL(ne),ae=document.createElement("a");ae.href=me,ae.download=T,ae.click(),setTimeout(()=>URL.revokeObjectURL(me),1e3)}function A(){B(t.value,`${u.value}.md`,"text/markdown;charset=utf-8"),a.value="Markdown 文件已导出"}async function $(z){var V;const T=(V=z.target.files)==null?void 0:V[0];if(z.target.value="",!!T){if(T.size>2*1024*1024){a.value="文件超过 2 MB，未打开";return}t.value=await T.text(),o.value=T.name,a.value=`已打开 ${T.name}`}}function X(){const z=document.title;document.title=u.value,document.documentElement.classList.add("printing-markdown"),window.print(),document.documentElement.classList.remove("printing-markdown"),document.title=z}function ee(z){if(z.key==="Tab"){z.preventDefault(),b("  ",2,2);return}(z.ctrlKey||z.metaKey)&&(z.key.toLowerCase()==="b"?(z.preventDefault(),k("bold")):z.key.toLowerCase()==="i"?(z.preventDefault(),k("italic")):z.key.toLowerCase()==="s"&&(z.preventDefault(),A()))}function de(z){if(!s.value||n.value!=="split")return;const T=z.currentTarget,V=T.scrollHeight-T.clientHeight,ne=V>0?T.scrollTop/V:0;s.value.scrollTop=ne*Math.max(0,s.value.scrollHeight-s.value.clientHeight)}return Gt(t,z=>{try{localStorage.setItem(zl,z),a.value="草稿已自动保存在浏览器"}catch{a.value="浏览器存储空间不足，草稿未自动保存"}}),hn(()=>{const z=localStorage.getItem(zl);z!==null&&(t.value=z)}),(z,T)=>(Z(),ue("div",{class:pe(["markdown-studio",`mode-${n.value}`])},[h("header",Hh,[h("div",Ih,[h("button",{type:"button",title:"粗体 Ctrl+B",onClick:T[0]||(T[0]=V=>k("bold"))},[D(O(m1),{size:15})]),h("button",{type:"button",title:"斜体 Ctrl+I",onClick:T[1]||(T[1]=V=>k("italic"))},[D(O(nf),{size:15})]),h("button",{type:"button",title:"二级标题",onClick:T[2]||(T[2]=V=>k("heading"))},[D(O(J1),{size:15})]),h("button",{type:"button",title:"引用",onClick:T[3]||(T[3]=V=>k("quote"))},[D(O(Tf),{size:15})]),h("button",{type:"button",title:"无序列表",onClick:T[4]||(T[4]=V=>k("list"))},[D(O(pf),{size:15})]),h("button",{type:"button",title:"有序列表",onClick:T[5]||(T[5]=V=>k("ordered"))},[D(O(df),{size:15})]),h("button",{type:"button",title:"链接",onClick:T[6]||(T[6]=V=>k("link"))},[D(O(uf),{size:15})]),h("button",{type:"button",title:"图片",onClick:T[7]||(T[7]=V=>k("image"))},[D(O(mi),{size:15})]),h("button",{type:"button",title:"行内代码",onClick:T[8]||(T[8]=V=>k("code"))},[D(O($l),{size:15})]),h("button",{type:"button",title:"表格",onClick:T[9]||(T[9]=V=>k("table"))},[D(O(Xf),{size:15})])]),h("div",Dh,[h("button",{type:"button",class:pe({active:n.value==="edit"}),title:"仅编辑",onClick:T[10]||(T[10]=V=>n.value="edit")},[D(O($l),{size:14})],2),h("button",{type:"button",class:pe({active:n.value==="split"}),title:"分栏",onClick:T[11]||(T[11]=V=>n.value="split")},[D(O(E1),{size:14})],2),h("button",{type:"button",class:pe({active:n.value==="preview"}),title:"仅预览",onClick:T[12]||(T[12]=V=>n.value="preview")},[D(O(H1),{size:14})],2)]),h("div",Lh,[h("input",{ref_key:"fileInput",ref:l,type:"file",accept:".md,.markdown,text/markdown,text/plain",hidden:"",onChange:$},null,544),h("button",{type:"button",onClick:T[13]||(T[13]=V=>{var ne;return(ne=l.value)==null?void 0:ne.click()})},[D(O(nd),{size:14}),T[15]||(T[15]=U(" 打开",-1))]),h("button",{type:"button",onClick:A},[D(O(B1),{size:14}),T[16]||(T[16]=U(" MD",-1))]),h("button",{class:"pdf-button",type:"button",onClick:X},[D(O(Mf),{size:14}),T[17]||(T[17]=U(" 导出 PDF",-1))])])]),h("main",Fh,[h("section",Gh,[h("div",jh,[T[18]||(T[18]=h("span",null,"MARKDOWN",-1)),h("small",null,q(c.value)+" 行 · "+q(f.value)+" 字符",1)]),_e(h("textarea",{ref_key:"editor",ref:r,"onUpdate:modelValue":T[14]||(T[14]=V=>t.value=V),"aria-label":"Markdown 编辑区",spellcheck:"true",onKeydown:ee,onScroll:de},null,544),[[Ne,t.value]])]),h("section",{ref_key:"preview",ref:s,class:"markdown-preview-pane"},[h("div",zh,[T[19]||(T[19]=h("span",null,"PREVIEW",-1)),h("small",null,"约 "+q(p.value)+" 分钟阅读",1)]),h("article",{class:"markdown-print-root markdown-preview",innerHTML:i.value},null,8,Vh)],512)]),h("footer",Uh,[h("span",null,q(o.value||`${u.value}.md`),1),h("span",null,q(a.value),1),T[20]||(T[20]=h("span",null,"原始 HTML 已禁用",-1))])],2))}},Kh={key:0,class:"workspace"},Jh={class:"workspace-header"},Yh={class:"local-badge"},Xh={__name:"ToolView",setup(e){const t=hi(),n=ve(()=>md(t.params.slug)),r={json:Hd,base64:jd,timestamp:Wd,password:e2,markdown:Wh,"pixel-beads":$h},s=ve(()=>r[t.params.slug]);return hn(()=>{fetch("/api/v1/events/tool-opened",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:t.params.slug})}).catch(()=>{})}),(l,o)=>{const a=Qr("router-link");return n.value&&s.value?(Z(),ue("section",Kh,[D(a,{class:"back-link",to:"/"},{default:yr(()=>[D(O(u1),{size:16}),o[0]||(o[0]=U(" 返回工具索引",-1))]),_:1}),h("header",Jh,[h("div",{class:pe(["workspace-icon",`tone-${n.value.color}`])},[(Z(),et(rr(n.value.icon),{size:28}))],2),h("div",null,[h("p",null,q(n.value.index)+" / "+q(n.value.category),1),h("h1",null,q(n.value.name),1),h("span",null,q(n.value.summary),1)]),h("div",Yh,[D(O(gf),{size:14}),o[1]||(o[1]=U(" 本地处理",-1))])]),(Z(),et(rr(s.value)))])):Wt("",!0)}}},Qh=Zc({history:Tc(),routes:[{path:"/",component:Rd},{path:"/tools/:slug",component:Xh},{path:"/:pathMatch(.*)*",redirect:"/"}],scrollBehavior:()=>({top:0})});Uu(hd).use(Qh).mount("#app");
