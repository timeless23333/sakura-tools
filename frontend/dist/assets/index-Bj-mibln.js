const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MarkdownTool-BoLoeF8g.js","assets/MarkdownTool-CEK31ho9.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}})();/**
* @vue/shared v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Cl(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Se={},rn=[],wt=()=>{},Ys=()=>!1,mr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),vr=e=>e.startsWith("onUpdate:"),ze=Object.assign,Pl=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ti=Object.prototype.hasOwnProperty,we=(e,t)=>Ti.call(e,t),Q=Array.isArray,zt=e=>Dn(e)==="[object Map]",Mt=e=>Dn(e)==="[object Set]",Wl=e=>Dn(e)==="[object Date]",re=e=>typeof e=="function",Me=e=>typeof e=="string",Ct=e=>typeof e=="symbol",Pe=e=>e!==null&&typeof e=="object",Js=e=>(Pe(e)||re(e))&&re(e.then)&&re(e.catch),Xs=Object.prototype.toString,Dn=e=>Xs.call(e),Bi=e=>Dn(e).slice(8,-1),Qs=e=>Dn(e)==="[object Object]",Al=e=>Me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Pn=Cl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),gr=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Ni=/-\w/g,Ye=gr(e=>e.replace(Ni,t=>t.slice(1).toUpperCase())),$i=/\B([A-Z])/g,Vt=gr(e=>e.replace($i,"-$1").toLowerCase()),yr=gr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Tr=gr(e=>e?`on${yr(e)}`:""),gt=(e,t)=>!Object.is(e,t),Jn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Zs=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},br=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ql;const wr=()=>ql||(ql=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ht(e){if(Q(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],l=Me(r)?Di(r):Ht(r);if(l)for(const s in l)t[s]=l[s]}return t}else if(Me(e)||Pe(e))return e}const Oi=/;(?![^(]*\))/g,Ii=/:([^]+)/,Li=/\/\*[^]*?\*\//g;function Di(e){const t={};return e.replace(Li,"").split(Oi).forEach(n=>{if(n){const r=n.split(Ii);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function le(e){let t="";if(Me(e))t=e;else if(Q(e))for(let n=0;n<e.length;n++){const r=le(e[n]);r&&(t+=r+" ")}else if(Pe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Hi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fi=Cl(Hi);function eo(e){return!!e||e===""}function Gi(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Rt(e[r],t[r]);return n}function Kl(e,t){if(e.size!==t.size)return!1;const n=Array.from(t),r=new Uint8Array(n.length);for(const l of e){let s=-1;for(let o=0;o<n.length;o++)if(!r[o]&&Rt(l,n[o])){s=o;break}if(s<0)return!1;r[s]=1}return!0}function Rt(e,t){if(e===t)return!0;let n=Wl(e),r=Wl(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Ct(e),r=Ct(t),n||r)return e===t;if(n=Q(e),r=Q(t),n||r)return n&&r?Gi(e,t):!1;if(n=Pe(e),r=Pe(t),n||r){if(!n||!r)return!1;if(n=zt(e),r=zt(t),n||r||(n=Mt(e),r=Mt(t),n||r))return n&&r?Kl(e,t):!1;const l=Object.keys(e).length,s=Object.keys(t).length;if(l!==s)return!1;for(const o in e){const a=e.hasOwnProperty(o),i=t.hasOwnProperty(o);if(a&&!i||!a&&i||!Rt(e[o],t[o]))return!1}}return String(e)===String(t)}function xl(e,t){return e.findIndex(n=>Rt(n,t))}const to=e=>!!(e&&e.__v_isRef===!0),D=e=>Me(e)?e:e==null?"":Q(e)||Pe(e)&&(e.toString===Xs||!re(e.toString))?to(e)?D(e.value):JSON.stringify(e,no,2):String(e),no=(e,t)=>to(t)?no(e,t.value):zt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,l],s)=>(n[Br(r,s)+" =>"]=l,n),{})}:Mt(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Br(n))}:Ct(t)?Br(t):Pe(t)&&!Q(t)&&!Qs(t)?String(t):t,Br=(e,t="")=>{var n;return Ct(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let He;class zi{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&He&&(He.active?(this.parent=He,this.index=(He.scopes||(He.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const r=this.scopes.slice();for(t=0,n=r.length;t<n;t++)r[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const l=this.scopes.slice();for(t=0,n=l.length;t<n;t++)l[t].resume()}const r=this.effects.slice();for(t=0,n=r.length;t<n;t++)r[t].resume()}}run(t){if(this._active){const n=He;try{return He=this,t()}finally{He=n}}}on(){++this._on===1&&(this.prevScope=He,He=this)}off(){if(this._on>0&&--this._on===0){if(He===this)He=this.prevScope;else{let t=He;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const l=this.scopes.slice();for(n=0,r=l.length;n<r;n++)l[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0}}}function ji(){return He}let ke;const Nr=new WeakSet;class ro{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,He&&(He.active?He.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Nr.has(this)&&(Nr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||so(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Yl(this),oo(this);const t=ke,n=at;ke=this,at=!0;try{return this.fn()}finally{io(this),ke=t,at=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)_l(t);this.deps=this.depsTail=void 0,Yl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Nr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Qr(this)&&this.run()}get dirty(){return Qr(this)}}let lo=0,An,xn;function so(e,t=!1){if(e.flags|=8,t){e.next=xn,xn=e;return}e.next=An,An=e}function Sl(){lo++}function kl(){if(--lo>0)return;if(xn){let t=xn;for(xn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;An;){let t=An;for(An=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function oo(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function io(e){let t,n=e.depsTail,r=n;for(;r;){const l=r.prevDep;r.version===-1?(r===n&&(n=l),_l(r),Vi(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=l}e.deps=t,e.depsTail=n}function Qr(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ao(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ao(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Rn)||(e.globalVersion=Rn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Qr(e))))return;e.flags|=2;const t=e.dep,n=ke,r=at;ke=e,at=!0;try{oo(e);const l=e.fn(e._value);(t.version===0||gt(l,e._value))&&(e.flags|=128,e._value=l,t.version++)}catch(l){throw t.version++,l}finally{ke=n,at=r,io(e),e.flags&=-3}}function _l(e,t=!1){const{dep:n,prevSub:r,nextSub:l}=e;if(r&&(r.nextSub=l,e.prevSub=void 0),l&&(l.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)_l(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Vi(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let at=!0;const uo=[];function Tt(){uo.push(at),at=!1}function Bt(){const e=uo.pop();at=e===void 0?!0:e}function Yl(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ke;ke=void 0;try{t()}finally{ke=n}}}let Rn=0;class Ui{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class El{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ke||!at||ke===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ke)n=this.activeLink=new Ui(ke,this),ke.deps?(n.prevDep=ke.depsTail,ke.depsTail.nextDep=n,ke.depsTail=n):ke.deps=ke.depsTail=n,co(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ke.depsTail,n.nextDep=void 0,ke.depsTail.nextDep=n,ke.depsTail=n,ke.deps===n&&(ke.deps=r)}return n}trigger(t){this.version++,Rn++,this.notify(t)}notify(t){Sl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{kl()}}}function co(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)co(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Zr=new WeakMap,Yt=Symbol(""),el=Symbol(""),Tn=Symbol("");function je(e,t,n){if(at&&ke){let r=Zr.get(e);r||Zr.set(e,r=new Map);let l=r.get(n);l||(r.set(n,l=new El),l.map=r,l.key=n),l.track()}}function kt(e,t,n,r,l,s){const o=Zr.get(e);if(!o){Rn++;return}const a=i=>{i&&i.trigger()};if(Sl(),t==="clear")o.forEach(a);else{const i=Q(e),c=i&&Al(n);if(i&&n==="length"){const u=Number(r);o.forEach((f,h)=>{(h==="length"||h===Tn||!Ct(h)&&h>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Tn)),t){case"add":i?c&&a(o.get("length")):(a(o.get(Yt)),zt(e)&&a(o.get(el)));break;case"delete":i||(a(o.get(Yt)),zt(e)&&a(o.get(el)));break;case"set":zt(e)&&a(o.get(Yt));break}}kl()}function Zt(e){const t=be(e);return t===e?t:(je(t,"iterate",Tn),ot(e)?t:t.map(ct))}function Cr(e){return je(e=be(e),"iterate",Tn),e}function mt(e,t){return Nt(e)?on(Jt(e)?ct(t):t):ct(t)}const Wi={__proto__:null,[Symbol.iterator](){return $r(this,Symbol.iterator,e=>mt(this,e))},concat(...e){return Zt(this).concat(...e.map(t=>Q(t)?Zt(t):t))},entries(){return $r(this,"entries",e=>(e[1]=mt(this,e[1]),e))},every(e,t){return Pt(this,"every",e,t,void 0,arguments)},filter(e,t){return Pt(this,"filter",e,t,n=>n.map(r=>mt(this,r)),arguments)},find(e,t){return Pt(this,"find",e,t,n=>mt(this,n),arguments)},findIndex(e,t){return Pt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Pt(this,"findLast",e,t,n=>mt(this,n),arguments)},findLastIndex(e,t){return Pt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Pt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Or(this,"includes",e)},indexOf(...e){return Or(this,"indexOf",e)},join(e){return Zt(this).join(e)},lastIndexOf(...e){return Or(this,"lastIndexOf",e)},map(e,t){return Pt(this,"map",e,t,void 0,arguments)},pop(){return mn(this,"pop")},push(...e){return mn(this,"push",e)},reduce(e,...t){return Jl(this,"reduce",e,t)},reduceRight(e,...t){return Jl(this,"reduceRight",e,t)},shift(){return mn(this,"shift")},some(e,t){return Pt(this,"some",e,t,void 0,arguments)},splice(...e){return mn(this,"splice",e)},toReversed(){return Zt(this).toReversed()},toSorted(e){return Zt(this).toSorted(e)},toSpliced(...e){return Zt(this).toSpliced(...e)},unshift(...e){return mn(this,"unshift",e)},values(){return $r(this,"values",e=>mt(this,e))}};function $r(e,t,n){const r=Cr(e),l=r[t]();return r!==e&&!ot(e)&&(l._next=l.next,l.next=()=>{const s=l._next();return s.done||(s.value=n(s.value)),s}),l}const qi=Array.prototype;function Pt(e,t,n,r,l,s){const o=Cr(e),a=o!==e&&!ot(e),i=o[t];if(i!==qi[t]){const f=i.apply(e,s);return a?ct(f):f}let c=n;o!==e&&(a?c=function(f,h){return n.call(this,mt(e,f),h,e)}:n.length>2&&(c=function(f,h){return n.call(this,f,h,e)}));const u=i.call(o,c,r);return a&&l?l(u):u}function Jl(e,t,n,r){const l=Cr(e),s=l!==e&&!ot(e);let o=n,a=!1;l!==e&&(s?(a=r.length===0,o=function(c,u,f){return a&&(a=!1,c=mt(e,c)),n.call(this,c,mt(e,u),f,e)}):n.length>3&&(o=function(c,u,f){return n.call(this,c,u,f,e)}));const i=l[t](o,...r);return a?mt(e,i):i}function Or(e,t,n){const r=be(e);je(r,"iterate",Tn);const l=r[t](...n);return(l===-1||l===!1)&&Tl(n[0])?(n[0]=be(n[0]),r[t](...n)):l}function mn(e,t,n=[]){Tt(),Sl();const r=be(e)[t].apply(e,n);return kl(),Bt(),r}const Ki=Cl("__proto__,__v_isRef,__isVue"),fo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ct));function Yi(e){Ct(e)||(e=String(e));const t=be(this);return je(t,"has",e),t.hasOwnProperty(e)}class ho{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const l=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!l;if(n==="__v_isReadonly")return l;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(l?s?sa:go:s?vo:mo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=Q(t);if(!l){let i;if(o&&(i=Wi[n]))return i;if(n==="hasOwnProperty")return Yi}const a=Reflect.get(t,n,Ve(t)?t:r);if((Ct(n)?fo.has(n):Ki(n))||(l||je(t,"get",n),s))return a;if(Ve(a)){const i=o&&Al(n)?a:a.value;return l&&Pe(i)?nl(i):i}return Pe(a)?l?nl(a):Gt(a):a}}class po extends ho{constructor(t=!1){super(!1,t)}set(t,n,r,l){let s=t[n];const o=Q(t)&&Al(n);if(!this._isShallow){const c=Nt(s);if(!ot(r)&&!Nt(r)&&(s=be(s),r=be(r)),!o&&Ve(s)&&!Ve(r))return c||(s.value=r),!0}const a=o?Number(n)<t.length:we(t,n),i=Reflect.set(t,n,r,Ve(t)?t:l);return t===be(l)&&i&&(a?gt(r,s)&&kt(t,"set",n,r):kt(t,"add",n,r)),i}deleteProperty(t,n){const r=we(t,n);t[n];const l=Reflect.deleteProperty(t,n);return l&&r&&kt(t,"delete",n,void 0),l}has(t,n){const r=Reflect.has(t,n);return(!Ct(n)||!fo.has(n))&&je(t,"has",n),r}ownKeys(t){return je(t,"iterate",Q(t)?"length":Yt),Reflect.ownKeys(t)}}class Ji extends ho{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Xi=new po,Qi=new Ji,Zi=new po(!0);const tl=e=>e,Vn=e=>Reflect.getPrototypeOf(e);function ea(e,t,n){return function(...r){const l=this.__v_raw,s=be(l),o=zt(s),a=e==="entries"||e===Symbol.iterator&&o,i=e==="keys"&&o,c=l[e](...r),u=n?tl:t?on:ct;return!t&&je(s,"iterate",i?el:Yt),ze(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function Un(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ta(e,t){const n={get(l){const s=this.__v_raw,o=be(s),a=be(l);e||(gt(l,a)&&je(o,"get",l),je(o,"get",a));const{has:i}=Vn(o),c=t?tl:e?on:ct;if(i.call(o,l))return c(s.get(l));if(i.call(o,a))return c(s.get(a));s!==o&&s.get(l)},get size(){const l=this.__v_raw;return!e&&je(be(l),"iterate",Yt),l.size},has(l){const s=this.__v_raw,o=be(s),a=be(l);return e||(gt(l,a)&&je(o,"has",l),je(o,"has",a)),l===a?s.has(l):s.has(l)||s.has(a)},forEach(l,s){const o=this,a=o.__v_raw,i=be(a),c=t?tl:e?on:ct;return!e&&je(i,"iterate",Yt),a.forEach((u,f)=>l.call(s,c(u),c(f),o))}};return ze(n,e?{add:Un("add"),set:Un("set"),delete:Un("delete"),clear:Un("clear")}:{add(l){const s=be(this),o=Vn(s),a=be(l),i=!t&&!ot(l)&&!Nt(l)?a:l;return o.has.call(s,i)||gt(l,i)&&o.has.call(s,l)||gt(a,i)&&o.has.call(s,a)||(s.add(i),kt(s,"add",i,i)),this},set(l,s){!t&&!ot(s)&&!Nt(s)&&(s=be(s));const o=be(this),{has:a,get:i}=Vn(o);let c=a.call(o,l);c||(l=be(l),c=a.call(o,l));const u=i.call(o,l);return o.set(l,s),c?gt(s,u)&&kt(o,"set",l,s):kt(o,"add",l,s),this},delete(l){const s=be(this),{has:o,get:a}=Vn(s);let i=o.call(s,l);i||(l=be(l),i=o.call(s,l)),a&&a.call(s,l);const c=s.delete(l);return i&&kt(s,"delete",l,void 0),c},clear(){const l=be(this),s=l.size!==0,o=l.clear();return s&&kt(l,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(l=>{n[l]=ea(l,e,t)}),n}function Ml(e,t){const n=ta(e,t);return(r,l,s)=>l==="__v_isReactive"?!e:l==="__v_isReadonly"?e:l==="__v_raw"?r:Reflect.get(we(n,l)&&l in r?n:r,l,s)}const na={get:Ml(!1,!1)},ra={get:Ml(!1,!0)},la={get:Ml(!0,!1)};const mo=new WeakMap,vo=new WeakMap,go=new WeakMap,sa=new WeakMap;function oa(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Gt(e){return Nt(e)?e:Rl(e,!1,Xi,na,mo)}function yo(e){return Rl(e,!1,Zi,ra,vo)}function nl(e){return Rl(e,!0,Qi,la,go)}function Rl(e,t,n,r,l){if(!Pe(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const s=l.get(e);if(s)return s;const o=oa(Bi(e));if(o===0)return e;const a=new Proxy(e,o===2?r:n);return l.set(e,a),a}function Jt(e){return Nt(e)?Jt(e.__v_raw):!!(e&&e.__v_isReactive)}function Nt(e){return!!(e&&e.__v_isReadonly)}function ot(e){return!!(e&&e.__v_isShallow)}function Tl(e){return e?!!e.__v_raw:!1}function be(e){const t=e&&e.__v_raw;return t?be(t):e}function ia(e){return!we(e,"__v_skip")&&Object.isExtensible(e)&&Zs(e,"__v_skip",!0),e}const ct=e=>Pe(e)?Gt(e):e,on=e=>Pe(e)?nl(e):e;function Ve(e){return e?e.__v_isRef===!0:!1}function G(e){return bo(e,!1)}function rl(e){return bo(e,!0)}function bo(e,t){return Ve(e)?e:new aa(e,t)}class aa{constructor(t,n){this.dep=new El,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:be(t),this._value=n?t:ct(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||ot(t)||Nt(t);t=r?t:be(t),gt(t,n)&&(this._rawValue=t,this._value=r?t:ct(t),this.dep.trigger())}}function I(e){return Ve(e)?e.value:e}const ua={get:(e,t,n)=>t==="__v_raw"?e:I(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const l=e[t];return Ve(l)&&!Ve(n)?(l.value=n,!0):Reflect.set(e,t,n,r)}};function wo(e){return Jt(e)?e:new Proxy(e,ua)}class ca{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new El(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Rn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ke!==this)return so(this,!0),!0}get value(){const t=this.dep.track();return ao(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function fa(e,t,n=!1){let r,l;return re(e)?r=e:(r=e.get,l=e.set),new ca(r,l,n)}const Wn={},er=new WeakMap;let qt;function da(e,t=!1,n=qt){if(n){let r=er.get(n);r||er.set(n,r=[]),r.push(e)}}function ha(e,t,n=Se){const{immediate:r,deep:l,once:s,scheduler:o,augmentJob:a,call:i}=n,c=S=>l?S:ot(S)||l===!1||l===0?_t(S,1):_t(S);let u,f,h,p,y=!1,w=!1;if(Ve(e)?(f=()=>e.value,y=ot(e)):Jt(e)?(f=()=>c(e),y=!0):Q(e)?(w=!0,y=e.some(S=>Jt(S)||ot(S)),f=()=>e.map(S=>{if(Ve(S))return S.value;if(Jt(S))return c(S);if(re(S))return i?i(S,2):S()})):re(e)?t?f=i?()=>i(e,2):e:f=()=>{if(h){Tt();try{h()}finally{Bt()}}const S=qt;qt=u;try{return i?i(e,3,[p]):e(p)}finally{qt=S}}:f=wt,t&&l){const S=f,_=l===!0?1/0:l;f=()=>_t(S(),_)}const A=ji(),x=()=>{u.stop(),A&&A.active&&Pl(A.effects,u)};if(s&&t){const S=t;t=(..._)=>{const L=S(..._);return x(),L}}let k=w?new Array(e.length).fill(Wn):Wn;const B=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(t){const _=u.run();if(S||l||y||(w?_.some((L,z)=>gt(L,k[z])):gt(_,k))){h&&h();const L=qt;qt=u;try{const z=[_,k===Wn?void 0:w&&k[0]===Wn?[]:k,p];k=_,i?i(t,3,z):t(...z)}finally{qt=L}}}else u.run()};return a&&a(B),u=new ro(f),u.scheduler=o?()=>o(B,!1):B,p=S=>da(S,!1,u),h=u.onStop=()=>{const S=er.get(u);if(S){if(i)i(S,4);else for(const _ of S)_();er.delete(u)}},t?r?B(!0):k=u.run():o?o(B.bind(null,!0),!0):u.run(),x.pause=u.pause.bind(u),x.resume=u.resume.bind(u),x.stop=x,x}function _t(e,t=1/0,n){if(t<=0||!Pe(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ve(e))_t(e.value,t,n);else if(Q(e))for(let r=0;r<e.length;r++)_t(e[r],t,n);else if(Mt(e)||zt(e))e.forEach(r=>{_t(r,t,n)});else if(Qs(e)){for(const r in e)_t(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&_t(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hn(e,t,n,r){try{return r?e(...r):e()}catch(l){Fn(l,t,n)}}function ft(e,t,n,r){if(re(e)){const l=Hn(e,t,n,r);return l&&Js(l)&&l.catch(s=>{Fn(s,t,n)}),l}if(Q(e)){const l=[];for(let s=0;s<e.length;s++)l.push(ft(e[s],t,n,r));return l}}function Fn(e,t,n,r=!0){const l=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Se;if(t){let a=t.parent;const i=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,i,c)===!1)return}a=a.parent}if(s){Tt(),Hn(s,null,10,[e,i,c]),Bt();return}}pa(e,n,l,r,o)}function pa(e,t,n,r=!0,l=!1){if(l)throw e;console.error(e)}const Ke=[];let pt=-1;const ln=[];let Lt=null,tn=0;const Co=Promise.resolve();let tr=null;function tt(e){const t=tr||Co;return e?t.then(this?e.bind(this):e):t}function ma(e){let t=pt+1,n=Ke.length;for(;t<n;){const r=t+n>>>1,l=Ke[r],s=Bn(l);s<e||s===e&&l.flags&2?t=r+1:n=r}return t}function Bl(e){if(!(e.flags&1)){const t=Bn(e),n=Ke[Ke.length-1];!n||!(e.flags&2)&&t>=Bn(n)?Ke.push(e):Ke.splice(ma(t),0,e),e.flags|=1,Po()}}function Po(){tr||(tr=Co.then(xo))}function va(e){if(!Q(e))Lt&&e.id===-1?Lt.splice(tn+1,0,e):e.flags&1||(ln.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)ln.push(e[t]);Po()}function Xl(e,t,n=pt+1){for(;n<Ke.length;n++){const r=Ke[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;Ke.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ao(e){if(ln.length){const t=[...new Set(ln)].sort((n,r)=>Bn(n)-Bn(r));if(ln.length=0,Lt){for(let n=0;n<t.length;n++)Lt.push(t[n]);return}for(Lt=t,tn=0;tn<Lt.length;tn++){const n=Lt[tn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Lt=null,tn=0}}const Bn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function xo(e){try{for(pt=0;pt<Ke.length;pt++){const t=Ke[pt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Hn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;pt<Ke.length;pt++){const t=Ke[pt];t&&(t.flags&=-2)}pt=-1,Ke.length=0,Ao(),tr=null,(Ke.length||ln.length)&&xo()}}let nt=null,So=null;function nr(e){const t=nt;return nt=e,So=e&&e.type.__scopeId||null,t}function Pr(e,t=nt,n){if(!t||e._n)return e;const r=(...l)=>{r._d&&or(-1);const s=nr(t),o=Xt.length;let a;try{a=e(...l)}finally{for(let i=Xt.length;i>o;i--)Jo();nr(s),r._d&&or(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function me(e,t){if(nt===null)return e;const n=Er(nt),r=e.dirs||(e.dirs=[]);for(let l=0;l<t.length;l++){let[s,o,a,i=Se]=t[l];s&&(re(s)&&(s={mounted:s,updated:s}),s.deep&&_t(o),r.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:i}))}return e}function Ut(e,t,n,r){const l=e.dirs,s=t&&t.dirs;for(let o=0;o<l.length;o++){const a=l[o];s&&(a.oldValue=s[o].value);let i=a.dir[r];i&&(Tt(),ft(i,n,8,[e.el,a,e,t]),Bt())}}function Xn(e,t){if(Fe){let n=Fe.provides;const r=Fe.parent&&Fe.parent.provides;r===n&&(n=Fe.provides=Object.create(r)),n[e]=t}}function ut(e,t,n=!1){const r=hu();if(r||sn){let l=sn?sn._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(l&&e in l)return l[e];if(arguments.length>1)return n&&re(t)?t.call(r&&r.proxy):t}}const ga=Symbol.for("v-scx"),ya=()=>ut(ga);function jt(e,t,n){return ko(e,t,n)}function ko(e,t,n=Se){const{immediate:r,deep:l,flush:s,once:o}=n,a=ze({},n),i=t&&r||!t&&s!=="post";let c;if(un){if(s==="sync"){const p=ya();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!i){const p=()=>{};return p.stop=wt,p.resume=wt,p.pause=wt,p}}const u=Fe;a.call=(p,y,w)=>ft(p,u,y,w);let f=!1;s==="post"?a.scheduler=p=>{Ze(p,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(p,y)=>{y?p():Bl(p)}),a.augmentJob=p=>{t&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=ha(e,t,a);return un&&(c?c.push(h):i&&h()),h}function ba(e,t,n){const r=this.proxy,l=Me(e)?e.includes(".")?_o(r,e):()=>r[e]:e.bind(r,r);let s;re(t)?s=t:(s=t.handler,n=t);const o=Gn(this),a=ko(l,s.bind(r),n);return o(),a}function _o(e,t){const n=t.split(".");return()=>{let r=e;for(let l=0;l<n.length&&r;l++)r=r[n[l]];return r}}const wa=Symbol("_vte"),Ar=e=>e.__isTeleport,Ir=Symbol("_leaveCb");function Ca(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==$t){t=n;break}}return t}function Eo(e){if(!xr(e))return Ar(e.type)&&e.children?Ca(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&re(n.default))return n.default()}}function Nl(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;Nl(Ar(n.type)&&Eo(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function $l(e,t){return re(e)?ze({name:e.name},t,{setup:e}):e}function Ol(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Ql(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const rr=new WeakMap;function Sn(e,t,n,r,l=!1){if(Q(e)){e.forEach((w,A)=>Sn(w,t&&(Q(t)?t[A]:t),n,r,l));return}if(kn(r)&&!l){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Sn(e,t,n,r.component.subTree);return}const s=r.shapeFlag&4?Er(r.component):r.el,o=l?null:s,{i:a,r:i}=e,c=t&&t.r,u=a.refs===Se?a.refs={}:a.refs,f=a.setupState,h=be(f),p=f===Se?Ys:w=>Ql(u,w)?!1:we(h,w),y=(w,A)=>!(A&&Ql(u,A));if(c!=null&&c!==i){if(Zl(t),Me(c))u[c]=null,p(c)&&(f[c]=null);else if(Ve(c)){const w=t;y(c,w.k)&&(c.value=null),w.k&&(u[w.k]=null)}}if(re(i))Hn(i,a,12,[o,u]);else{const w=Me(i),A=Ve(i);if(w||A){const x=()=>{if(e.f){const k=w?p(i)?f[i]:u[i]:y()||!e.k?i.value:u[e.k];if(l)Q(k)&&Pl(k,s);else if(Q(k))k.includes(s)||k.push(s);else if(w)u[i]=[s],p(i)&&(f[i]=u[i]);else{const B=[s];y(i,e.k)&&(i.value=B),e.k&&(u[e.k]=B)}}else w?(u[i]=o,p(i)&&(f[i]=o)):A&&(y(i,e.k)&&(i.value=o),e.k&&(u[e.k]=o))};if(o){const k=()=>{x(),rr.delete(e)};k.id=-1,rr.set(e,k),Ze(k,n)}else Zl(e),x()}}}function Zl(e){const t=rr.get(e);t&&(t.flags|=8,rr.delete(e))}const es=e=>e.nodeType===8;wr().requestIdleCallback;wr().cancelIdleCallback;function Pa(e,t){if(es(e)&&e.data==="["){let n=1,r=e.nextSibling;for(;r;){if(r.nodeType===1){if(t(r)===!1)break}else if(es(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else t(e)}const kn=e=>!!e.type.__asyncLoader;function Aa(e){re(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:r,delay:l=200,hydrate:s,timeout:o,suspensible:a=!0,onError:i}=e;let c=null,u,f=0;const h=()=>(f++,c=null,p()),p=()=>{let y;return c||(y=c=t().catch(w=>{if(w=w instanceof Error?w:new Error(String(w)),i)return new Promise((A,x)=>{i(w,()=>A(h()),()=>x(w),f+1)});throw w}).then(w=>y!==c&&c?c:(w&&(w.__esModule||w[Symbol.toStringTag]==="Module")&&(w=w.default),u=w,w)))};return $l({name:"AsyncComponentWrapper",__asyncLoader:p,__asyncHydrate(y,w,A){const x=y.isConnected;let k=!1;(w.bu||(w.bu=[])).push(()=>k=!0);const B=()=>{k||!y.parentNode||x&&!y.isConnected||A()},S=s?()=>{const _=s(B,L=>Pa(y,L));_&&(w.bum||(w.bum=[])).push(_)}:B;u?S():p().then(()=>!w.isUnmounted&&S())},get __asyncResolved(){return u},setup(){const y=Fe;if(Ol(y),u)return()=>qn(u,y);const w=_=>{c=null,Fn(_,y,13,!r)};if(a&&y.suspense||un)return p().then(_=>()=>qn(_,y)).catch(_=>(w(_),()=>r?H(r,{error:_}):null));const A=G(!1),x=G(),k=G(!!l);let B,S;return Il(()=>{B!=null&&clearTimeout(B),S!=null&&clearTimeout(S)}),l&&(S=setTimeout(()=>{y.isUnmounted||(k.value=!1)},l)),o!=null&&(B=setTimeout(()=>{if(!y.isUnmounted&&!A.value&&!x.value){const _=new Error(`Async component timed out after ${o}ms.`);w(_),x.value=_}},o)),p().then(()=>{y.isUnmounted||(A.value=!0,y.parent&&xr(y.parent.vnode)&&y.parent.update())}).catch(_=>{if(y.isUnmounted){c=null;return}w(_),x.value=_}),()=>{if(A.value&&u)return qn(u,y);if(x.value&&r)return H(r,{error:x.value});if(n&&!k.value)return qn(n,y)}}})}function qn(e,t){const{ref:n,props:r,children:l,ce:s}=t.vnode,o=H(e,r,l);return o.ref=n,o.ce=s,delete t.vnode.ce,o}const xr=e=>e.type.__isKeepAlive;function xa(e,t){Mo(e,"a",t)}function Sa(e,t){Mo(e,"da",t)}function Mo(e,t,n=Fe){const r=e.__wdc||(e.__wdc=()=>{let l=n;for(;l;){if(l.isDeactivated)return;l=l.parent}return e()});if(Sr(t,r,n),n){let l=n.parent;for(;l&&l.parent;)xr(l.parent.vnode)&&ka(r,t,n,l),l=l.parent}}function ka(e,t,n,r){const l=Sr(t,e,r,!0);Il(()=>{Pl(r[t],l)},n)}function Sr(e,t,n=Fe,r=!1){if(n){const l=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{Tt();const a=Gn(n),i=ft(t,n,e,o);return a(),Bt(),i});return r?l.unshift(s):l.push(s),s}}const Ot=e=>(t,n=Fe)=>{(!un||e==="sp")&&Sr(e,(...r)=>t(...r),n)},_a=Ot("bm"),hn=Ot("m"),Ea=Ot("bu"),Ma=Ot("u"),pn=Ot("bum"),Il=Ot("um"),Ra=Ot("sp"),Ta=Ot("rtg"),Ba=Ot("rtc");function Na(e,t=Fe){Sr("ec",e,t)}const Ro="components";function ll(e,t){return Bo(Ro,e,!0,t)||e}const To=Symbol.for("v-ndc");function lr(e){return Me(e)?Bo(Ro,e,!1)||e:e||To}function Bo(e,t,n=!0,r=!1){const l=nt||Fe;if(l){const s=l.type;{const a=yu(s,!1);if(a&&(a===t||a===Ye(t)||a===yr(Ye(t))))return s}const o=ts(l[e]||s[e],t)||ts(l.appContext[e],t);return!o&&r?s:o}}function ts(e,t){return e&&(e[t]||e[Ye(t)]||e[yr(Ye(t))])}function it(e,t,n,r){let l;const s=n,o=Q(e);if(o||Me(e)){const a=o&&Jt(e);let i=!1,c=!1;a&&(i=!ot(e),c=Nt(e),e=Cr(e)),l=new Array(e.length);for(let u=0,f=e.length;u<f;u++)l[u]=t(i?c?on(ct(e[u])):ct(e[u]):e[u],u,void 0,s)}else if(typeof e=="number"){l=new Array(e);for(let a=0;a<e;a++)l[a]=t(a+1,a,void 0,s)}else if(Pe(e))if(e[Symbol.iterator])l=Array.from(e,(a,i)=>t(a,i,void 0,s));else{const a=Object.keys(e);l=new Array(a.length);for(let i=0,c=a.length;i<c;i++){const u=a[i];l[i]=t(e[u],u,i,s)}}else l=[];return l}const sl=e=>e?Zo(e)?Er(e):sl(e.parent):null,_n=ze(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>sl(e.parent),$root:e=>sl(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>$o(e),$forceUpdate:e=>e.f||(e.f=()=>{Bl(e.update)}),$nextTick:e=>e.n||(e.n=tt.bind(e.proxy)),$watch:e=>ba.bind(e)}),Lr=(e,t)=>e!==Se&&!e.__isScriptSetup&&we(e,t),$a={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:l,props:s,accessCache:o,type:a,appContext:i}=e;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return r[t];case 2:return l[t];case 4:return n[t];case 3:return s[t]}else{if(Lr(r,t))return o[t]=1,r[t];if(l!==Se&&we(l,t))return o[t]=2,l[t];if(we(s,t))return o[t]=3,s[t];if(n!==Se&&we(n,t))return o[t]=4,n[t];ol&&(o[t]=0)}}const c=_n[t];let u,f;if(c)return t==="$attrs"&&je(e.attrs,"get",""),c(e);if((u=a.__cssModules)&&(u=u[t]))return u;if(n!==Se&&we(n,t))return o[t]=4,n[t];if(f=i.config.globalProperties,we(f,t))return f[t]},set({_:e},t,n){const{data:r,setupState:l,ctx:s}=e;return Lr(l,t)?(l[t]=n,!0):r!==Se&&we(r,t)?(r[t]=n,!0):we(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:l,props:s,type:o}},a){let i;return!!(n[a]||e!==Se&&a[0]!=="$"&&we(e,a)||Lr(t,a)||we(s,a)||we(r,a)||we(_n,a)||we(l.config.globalProperties,a)||(i=o.__cssModules)&&i[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:we(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ns(e){return Q(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ol=!0;function Oa(e){const t=$o(e),n=e.proxy,r=e.ctx;ol=!1,t.beforeCreate&&rs(t.beforeCreate,e,"bc");const{data:l,computed:s,methods:o,watch:a,provide:i,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:y,activated:w,deactivated:A,beforeDestroy:x,beforeUnmount:k,destroyed:B,unmounted:S,render:_,renderTracked:L,renderTriggered:z,errorCaptured:te,serverPrefetch:de,expose:ce,inheritAttrs:_e,components:Ae,directives:Oe,filters:se}=t;if(c&&Ia(c,r,null),o)for(const oe in o){const ue=o[oe];re(ue)&&(r[oe]=ue.bind(n))}if(l){const oe=l.call(n,n);Pe(oe)&&(e.data=Gt(oe))}if(ol=!0,s)for(const oe in s){const ue=s[oe],Je=re(ue)?ue.bind(n,n):re(ue.get)?ue.get.bind(n,n):wt,Xe=!re(ue)&&re(ue.set)?ue.set.bind(n):wt,Le=ve({get:Je,set:Xe});Object.defineProperty(r,oe,{enumerable:!0,configurable:!0,get:()=>Le.value,set:Ne=>Le.value=Ne})}if(a)for(const oe in a)No(a[oe],r,n,oe);if(i){const oe=re(i)?i.call(n):i;Reflect.ownKeys(oe).forEach(ue=>{Xn(ue,oe[ue])})}u&&rs(u,e,"c");function he(oe,ue){Q(ue)?ue.forEach(Je=>oe(Je.bind(n))):ue&&oe(ue.bind(n))}if(he(_a,f),he(hn,h),he(Ea,p),he(Ma,y),he(xa,w),he(Sa,A),he(Na,te),he(Ba,L),he(Ta,z),he(pn,k),he(Il,S),he(Ra,de),Q(ce))if(ce.length){const oe=e.exposed||(e.exposed={});ce.forEach(ue=>{Object.defineProperty(oe,ue,{get:()=>n[ue],set:Je=>n[ue]=Je,enumerable:!0})})}else e.exposed||(e.exposed={});_&&e.render===wt&&(e.render=_),_e!=null&&(e.inheritAttrs=_e),Ae&&(e.components=Ae),Oe&&(e.directives=Oe),de&&Ol(e)}function Ia(e,t,n=wt){Q(e)&&(e=il(e));for(const r in e){const l=e[r];let s;Pe(l)?"default"in l?s=ut(l.from||r,l.default,!0):s=ut(l.from||r):s=ut(l),Ve(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[r]=s}}function rs(e,t,n){ft(Q(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function No(e,t,n,r){let l=r.includes(".")?_o(n,r):()=>n[r];if(Me(e)){const s=t[e];re(s)&&jt(l,s)}else if(re(e))jt(l,e.bind(n));else if(Pe(e))if(Q(e))e.forEach(s=>No(s,t,n,r));else{const s=re(e.handler)?e.handler.bind(n):t[e.handler];re(s)&&jt(l,s,e)}}function $o(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:l,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let i;return a?i=a:!l.length&&!n&&!r?i=t:(i={},l.length&&l.forEach(c=>sr(i,c,o,!0)),sr(i,t,o)),Pe(t)&&s.set(t,i),i}function sr(e,t,n,r=!1){const{mixins:l,extends:s}=t;s&&sr(e,s,n,!0),l&&l.forEach(o=>sr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=La[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const La={data:ls,props:ss,emits:ss,methods:bn,computed:bn,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:bn,directives:bn,watch:Ha,provide:ls,inject:Da};function ls(e,t){return t?e?function(){return ze(re(e)?e.call(this,this):e,re(t)?t.call(this,this):t)}:t:e}function Da(e,t){return bn(il(e),il(t))}function il(e){if(Q(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function We(e,t){return e?[...new Set([].concat(e,t))]:t}function bn(e,t){return e?ze(Object.create(null),e,t):t}function ss(e,t){return e?Q(e)&&Q(t)?[...new Set([...e,...t])]:ze(Object.create(null),ns(e),ns(t??{})):t}function Ha(e,t){if(!e)return t;if(!t)return e;const n=ze(Object.create(null),e);for(const r in t)n[r]=We(e[r],t[r]);return n}function Oo(){return{app:null,config:{isNativeTag:Ys,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fa=0;function Ga(e,t){return function(r,l=null){re(r)||(r=ze({},r)),l!=null&&!Pe(l)&&(l=null);const s=Oo(),o=new WeakSet,a=[];let i=!1;const c=s.app={_uid:Fa++,_component:r,_props:l,_container:null,_context:s,_instance:null,version:wu,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&re(u.install)?(o.add(u),u.install(c,...f)):re(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!i){const p=c._ceVNode||H(r,l);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),e(p,u,h),i=!0,c._container=u,u.__vue_app__=c,Er(p.component)}},onUnmount(u){a.push(u)},unmount(){i&&(ft(a,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=sn;sn=c;try{return u()}finally{sn=f}}};return c}}let sn=null;const za=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ye(t)}Modifiers`]||e[`${Vt(t)}Modifiers`];function ja(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Se;let l=n;const s=t.startsWith("update:"),o=s&&za(r,t.slice(7));o&&(o.trim&&(l=n.map(u=>Me(u)?u.trim():u)),o.number&&(l=l.map(br)));let a,i=r[a=Tr(t)]||r[a=Tr(Ye(t))];!i&&s&&(i=r[a=Tr(Vt(t))]),i&&ft(i,e,6,l);const c=r[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ft(c,e,6,l)}}const Va=new WeakMap;function Io(e,t,n=!1){const r=n?Va:t.emitsCache,l=r.get(e);if(l!==void 0)return l;const s=e.emits;let o={},a=!1;if(!re(e)){const i=c=>{const u=Io(c,t,!0);u&&(a=!0,ze(o,u))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return!s&&!a?(Pe(e)&&r.set(e,null),null):(Q(s)?s.forEach(i=>o[i]=null):ze(o,s),Pe(e)&&r.set(e,o),o)}function kr(e,t){return!e||!mr(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),we(e,t[0].toLowerCase()+t.slice(1))||we(e,Vt(t))||we(e,t))}function os(e){const{type:t,vnode:n,proxy:r,withProxy:l,propsOptions:[s],slots:o,attrs:a,emit:i,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:y,inheritAttrs:w}=e,A=nr(e);let x,k;try{if(n.shapeFlag&4){const S=l||r,_=S;x=vt(c.call(_,S,u,f,p,h,y)),k=a}else{const S=t;x=vt(S.length>1?S(f,{attrs:a,slots:o,emit:i}):S(f,null)),k=t.props?a:Ua(a)}}catch(S){Xt.length=0,Fn(S,e,1),x=H($t)}let B=x;if(k&&w!==!1){const S=Object.keys(k),{shapeFlag:_}=B;S.length&&_&7&&(s&&S.some(vr)&&(k=Wa(k,s)),B=an(B,k,!1,!0))}if(n.dirs&&(B=an(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition){const S=Ar(B.type)&&Eo(B)||B;Nl(S,n.transition)}return x=B,nr(A),x}const Ua=e=>{let t;for(const n in e)(n==="class"||n==="style"||mr(n))&&((t||(t={}))[n]=e[n]);return t},Wa=(e,t)=>{const n={};for(const r in e)(!vr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function qa(e,t,n){const{props:r,children:l,component:s}=e,{props:o,children:a,patchFlag:i}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&i>=0){if(i&1024)return!0;if(i&16)return r?is(r,o,c):!!o;if(i&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Lo(o,r,h)&&!kr(c,h))return!0}}}else return(l||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?is(r,o,c):!0:!!o;return!1}function is(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let l=0;l<r.length;l++){const s=r[l];if(Lo(t,e,s)&&!kr(n,s))return!0}return!1}function Lo(e,t,n){const r=e[n],l=t[n];return n==="style"&&Pe(r)&&Pe(l)?!Rt(r,l):r!==l}function Ka({vnode:e,parent:t,suspense:n},r){for(;t;){const l=t.subTree;if(l.suspense&&l.suspense.activeBranch===e&&(l.suspense.vnode.el=l.el=r,e=l),l===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}const Do={},Ho=()=>Object.create(Do),Fo=e=>Object.getPrototypeOf(e)===Do;function Ya(e,t,n,r=!1){const l={},s=Ho();e.propsDefaults=Object.create(null),Go(e,t,l,s);for(const o in e.propsOptions[0])o in l||(l[o]=void 0);n?e.props=r?l:yo(l):e.type.props?e.props=l:e.props=s,e.attrs=s}function Ja(e,t,n,r){const{props:l,attrs:s,vnode:{patchFlag:o}}=e,a=be(l),[i]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(kr(e.emitsOptions,h))continue;const p=t[h];if(i)if(we(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const y=Ye(h);l[y]=al(i,a,y,p,e,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{Go(e,t,l,s)&&(c=!0);let u;for(const f in a)(!t||!we(t,f)&&((u=Vt(f))===f||!we(t,u)))&&(i?n&&(n[f]!==void 0||n[u]!==void 0)&&(l[f]=al(i,a,f,void 0,e,!0)):delete l[f]);if(s!==a)for(const f in s)(!t||!we(t,f))&&(delete s[f],c=!0)}c&&kt(e.attrs,"set","")}function Go(e,t,n,r){const[l,s]=e.propsOptions;let o=!1,a;if(t)for(let i in t){if(Pn(i))continue;const c=t[i];let u;l&&we(l,u=Ye(i))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:kr(e.emitsOptions,i)||(!(i in r)||c!==r[i])&&(r[i]=c,o=!0)}if(s){const i=be(n),c=a||Se;for(let u=0;u<s.length;u++){const f=s[u];n[f]=al(l,i,f,c[f],e,!we(c,f))}}return o}function al(e,t,n,r,l,s){const o=e[n];if(o!=null){const a=we(o,"default");if(a&&r===void 0){const i=o.default;if(o.type!==Function&&!o.skipFactory&&re(i)){const{propsDefaults:c}=l;if(n in c)r=c[n];else{const u=Gn(l);r=c[n]=i.call(null,t),u()}}else r=i;l.ce&&l.ce._setProp(n,r)}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===Vt(n))&&(r=!0))}return r}const Xa=new WeakMap;function zo(e,t,n=!1){const r=n?Xa:t.propsCache,l=r.get(e);if(l)return l;const s=e.props,o={},a=[];let i=!1;if(!re(e)){const u=f=>{i=!0;const[h,p]=zo(f,t,!0);ze(o,h),p&&a.push(...p)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!i)return Pe(e)&&r.set(e,rn),rn;if(Q(s))for(let u=0;u<s.length;u++){const f=Ye(s[u]);as(f)&&(o[f]=Se)}else if(s)for(const u in s){const f=Ye(u);if(as(f)){const h=s[u],p=o[f]=Q(h)||re(h)?{type:h}:ze({},h),y=p.type;let w=!1,A=!0;if(Q(y))for(let x=0;x<y.length;++x){const k=y[x],B=re(k)&&k.name;if(B==="Boolean"){w=!0;break}else B==="String"&&(A=!1)}else w=re(y)&&y.name==="Boolean";p[0]=w,p[1]=A,(w||we(p,"default"))&&a.push(f)}}const c=[o,a];return Pe(e)&&r.set(e,c),c}function as(e){return e[0]!=="$"&&!Pn(e)}const Ll=e=>e==="_"||e==="_ctx"||e==="$stable",Dl=e=>Q(e)?e.map(vt):[vt(e)],Qa=(e,t,n)=>{if(t._n)return t;const r=Pr((...l)=>Dl(t(...l)),n);return r._c=!1,r},jo=(e,t,n)=>{const r=e._ctx;for(const l in e){if(Ll(l))continue;const s=e[l];if(re(s))t[l]=Qa(l,s,r);else if(s!=null){const o=Dl(s);t[l]=()=>o}}},Vo=(e,t)=>{const n=Dl(t);e.slots.default=()=>n},Uo=(e,t,n)=>{for(const r in t)(n||!Ll(r))&&(e[r]=t[r])},Za=(e,t,n)=>{const r=e.slots=Ho();if(e.vnode.shapeFlag&32){const l=t._;l?(Uo(r,t,n),n&&Zs(r,"_",l,!0)):jo(t,r)}else t&&Vo(e,t)},eu=(e,t,n)=>{const{vnode:r,slots:l}=e;let s=!0,o=Se;if(r.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:Uo(l,t,n):(s=!t.$stable,jo(t,l)),o=t}else t&&(Vo(e,t),o={default:1});if(s)for(const a in l)!Ll(a)&&o[a]==null&&delete l[a]},Ze=su;function tu(e){return nu(e)}function nu(e,t){const n=wr();n.__VUE__=!0;const{insert:r,remove:l,patchProp:s,createElement:o,createText:a,createComment:i,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=wt,insertStaticContent:y}=e,w=(m,g,C,M=null,T=null,P=null,b=void 0,E=null,O=!!g.dynamicChildren)=>{if(m===g)return;m&&!vn(m,g)&&(M=R(m),Ne(m,T,P,!0),m=null),g.patchFlag===-2&&(O=!1,g.dynamicChildren=null);const{type:N,ref:X,shapeFlag:W}=g;switch(N){case _r:A(m,g,C,M);break;case $t:x(m,g,C,M);break;case Qn:m==null&&k(g,C,M,b);break;case Be:Ae(m,g,C,M,T,P,b,E,O);break;default:W&1?_(m,g,C,M,T,P,b,E,O):W&6?Oe(m,g,C,M,T,P,b,E,O):(W&64||W&128)&&N.process(m,g,C,M,T,P,b,E,O,K)}X!=null&&T?Sn(X,m&&m.ref,P,g||m,!g):X==null&&m&&m.ref!=null&&Sn(m.ref,null,P,m,!0)},A=(m,g,C,M)=>{if(m==null)r(g.el=a(g.children),C,M);else{const T=g.el=m.el;g.children!==m.children&&c(T,g.children)}},x=(m,g,C,M)=>{m==null?r(g.el=i(g.children||""),C,M):g.el=m.el},k=(m,g,C,M)=>{[m.el,m.anchor]=y(m.children,g,C,M,m.el,m.anchor)},B=({el:m,anchor:g},C,M)=>{let T;for(;m&&m!==g;)T=h(m),r(m,C,M),m=T;r(g,C,M)},S=({el:m,anchor:g})=>{let C;for(;m&&m!==g;)C=h(m),l(m),m=C;l(g)},_=(m,g,C,M,T,P,b,E,O)=>{if(g.type==="svg"?b="svg":g.type==="math"&&(b="mathml"),m==null)L(g,C,M,T,P,b,E,O);else{const N=m.el&&m.el._isVueCE?m.el:null;try{N&&N._beginPatch(),de(m,g,T,P,b,E,O)}finally{N&&N._endPatch()}}},L=(m,g,C,M,T,P,b,E)=>{let O,N;const{props:X,shapeFlag:W,transition:J,dirs:ee}=m;if(O=m.el=o(m.type,P,X&&X.is,X),W&8?u(O,m.children):W&16&&te(m.children,O,null,M,T,Dr(m,P),b,E),ee&&Ut(m,null,M,"created"),z(O,m,m.scopeId,b,M),X){for(const Ce in X)Ce!=="value"&&!Pn(Ce)&&s(O,Ce,null,X[Ce],P,M);"value"in X&&s(O,"value",null,X.value,P),(N=X.onVnodeBeforeMount)&&ht(N,M,m)}ee&&Ut(m,null,M,"beforeMount");const fe=ru(T,J);fe&&J.beforeEnter(O),r(O,g,C),((N=X&&X.onVnodeMounted)||fe||ee)&&Ze(()=>{try{N&&ht(N,M,m),fe&&J.enter(O),ee&&Ut(m,null,M,"mounted")}finally{}},T)},z=(m,g,C,M,T)=>{if(C&&p(m,C),M)for(let P=0;P<M.length;P++)p(m,M[P]);if(T){let P=T.subTree;if(g===P||Yo(P.type)&&(P.ssContent===g||P.ssFallback===g)){const b=T.vnode;z(m,b,b.scopeId,b.slotScopeIds,T.parent)}}},te=(m,g,C,M,T,P,b,E,O=0)=>{for(let N=O;N<m.length;N++){const X=m[N]=E?St(m[N]):vt(m[N]);w(null,X,g,C,M,T,P,b,E)}},de=(m,g,C,M,T,P,b)=>{const E=g.el=m.el;let{patchFlag:O,dynamicChildren:N,dirs:X}=g;O|=m.patchFlag&16;const W=m.props||Se,J=g.props||Se;let ee;if(C&&Wt(C,!1),(ee=J.onVnodeBeforeUpdate)&&ht(ee,C,g,m),X&&Ut(g,m,C,"beforeUpdate"),C&&Wt(C,!0),N&&(!m.dynamicChildren||m.dynamicChildren.length!==N.length)&&(O=0,b=!1,N=null),(W.innerHTML&&J.innerHTML==null||W.textContent&&J.textContent==null)&&u(E,""),N?ce(m.dynamicChildren,N,E,C,M,Dr(g,T),P):b||ue(m,g,E,null,C,M,Dr(g,T),P,!1),O>0){if(O&16)_e(E,W,J,C,T);else if(O&2&&W.class!==J.class&&s(E,"class",null,J.class,T),O&4&&s(E,"style",W.style,J.style,T),O&8){const fe=g.dynamicProps;for(let Ce=0;Ce<fe.length;Ce++){const ge=fe[Ce],Re=W[ge],$e=J[ge];($e!==Re||ge==="value")&&s(E,ge,Re,$e,T,C)}}O&1&&m.children!==g.children&&u(E,g.children)}else!b&&N==null&&_e(E,W,J,C,T);((ee=J.onVnodeUpdated)||X)&&Ze(()=>{ee&&ht(ee,C,g,m),X&&Ut(g,m,C,"updated")},M)},ce=(m,g,C,M,T,P,b)=>{for(let E=0;E<g.length;E++){const O=m[E],N=g[E],X=O.el&&(O.type===Be||!vn(O,N)||O.shapeFlag&198)?f(O.el):C;w(O,N,X,null,M,T,P,b,!0)}},_e=(m,g,C,M,T)=>{if(g!==C){if(g!==Se)for(const P in g)!Pn(P)&&!(P in C)&&s(m,P,g[P],null,T,M);for(const P in C){if(Pn(P))continue;const b=C[P],E=g[P];b!==E&&P!=="value"&&s(m,P,E,b,T,M)}"value"in C&&s(m,"value",g.value,C.value,T)}},Ae=(m,g,C,M,T,P,b,E,O)=>{const N=g.el=m?m.el:a(""),X=g.anchor=m?m.anchor:a("");let{patchFlag:W,dynamicChildren:J,slotScopeIds:ee}=g;ee&&(E=E?E.concat(ee):ee),m==null?(r(N,C,M),r(X,C,M),te(g.children||[],C,X,T,P,b,E,O)):W>0&&W&64&&J&&m.dynamicChildren&&m.dynamicChildren.length===J.length?(ce(m.dynamicChildren,J,C,T,P,b,E),(g.key!=null||T&&g===T.subTree)&&Wo(m,g,!0)):ue(m,g,C,X,T,P,b,E,O)},Oe=(m,g,C,M,T,P,b,E,O)=>{g.slotScopeIds=E,m==null?g.shapeFlag&512?T.ctx.activate(g,C,M,b,O):se(g,C,M,T,P,b,O):xe(m,g,O)},se=(m,g,C,M,T,P,b)=>{const E=m.component=du(m,M,T);if(xr(m)&&(E.ctx.renderer=K),pu(E,!1,b),E.asyncDep){if(T&&T.registerDep(E,he,b),!m.el){const O=E.subTree=H($t);x(null,O,g,C),m.placeholder=O.el}}else he(E,m,g,C,T,P,b)},xe=(m,g,C)=>{const M=g.component=m.component;if(qa(m,g,C))if(M.asyncDep&&!M.asyncResolved){oe(M,g,C);return}else M.next=g,M.update();else g.el=m.el,M.vnode=g},he=(m,g,C,M,T,P,b)=>{const E=()=>{if(m.isMounted){let{next:W,bu:J,u:ee,parent:fe,vnode:Ce}=m;{const et=qo(m);if(et){W&&(W.el=Ce.el,oe(m,W,b)),et.asyncDep.then(()=>{Ze(()=>{m.isUnmounted||N()},T)});return}}let ge=W,Re;Wt(m,!1),W?(W.el=Ce.el,oe(m,W,b)):W=Ce,J&&Jn(J),(Re=W.props&&W.props.onVnodeBeforeUpdate)&&ht(Re,fe,W,Ce),Wt(m,!0);const $e=os(m),Ue=m.subTree;m.subTree=$e,w(Ue,$e,f(Ue.el),R(Ue),m,T,P),W.el=$e.el,ge===null&&Ka(m,$e.el),ee&&Ze(ee,T),(Re=W.props&&W.props.onVnodeUpdated)&&Ze(()=>ht(Re,fe,W,Ce),T)}else{let W;const{el:J,props:ee}=g,{bm:fe,m:Ce,parent:ge,root:Re,type:$e}=m,Ue=kn(g);Wt(m,!1),fe&&Jn(fe),!Ue&&(W=ee&&ee.onVnodeBeforeMount)&&ht(W,ge,g),Wt(m,!0);{Re.ce&&Re.ce._hasShadowRoot()&&Re.ce._injectChildStyle($e,m.parent?m.parent.type:void 0);const et=m.subTree=os(m);w(null,et,C,M,m,T,P),g.el=et.el}if(Ce&&Ze(Ce,T),!Ue&&(W=ee&&ee.onVnodeMounted)){const et=g;Ze(()=>ht(W,ge,et),T)}(g.shapeFlag&256||ge&&kn(ge.vnode)&&ge.vnode.shapeFlag&256)&&m.a&&Ze(m.a,T),m.isMounted=!0,g=C=M=null}};m.scope.on();const O=m.effect=new ro(E);m.scope.off();const N=m.update=O.run.bind(O),X=m.job=O.runIfDirty.bind(O);X.i=m,X.id=m.uid,O.scheduler=()=>Bl(X),Wt(m,!0),N()},oe=(m,g,C)=>{g.component=m;const M=m.vnode.props;m.vnode=g,m.next=null,Ja(m,g.props,M,C),eu(m,g.children,C),Tt(),Xl(m),Bt()},ue=(m,g,C,M,T,P,b,E,O=!1)=>{const N=m&&m.children,X=m?m.shapeFlag:0,W=g.children,{patchFlag:J,shapeFlag:ee}=g;if(J>0){if(J&128){Xe(N,W,C,M,T,P,b,E,O);return}else if(J&256){Je(N,W,C,M,T,P,b,E,O);return}}ee&8?(X&16&&De(N,T,P),W!==N&&u(C,W)):X&16?ee&16?Xe(N,W,C,M,T,P,b,E,O):De(N,T,P,!0):(X&8&&u(C,""),ee&16&&te(W,C,M,T,P,b,E,O))},Je=(m,g,C,M,T,P,b,E,O)=>{m=m||rn,g=g||rn;const N=m.length,X=g.length,W=Math.min(N,X);let J;for(J=0;J<W;J++){const ee=g[J]=O?St(g[J]):vt(g[J]);w(m[J],ee,C,null,T,P,b,E,O)}N>X?De(m,T,P,!0,!1,W):te(g,C,M,T,P,b,E,O,W)},Xe=(m,g,C,M,T,P,b,E,O)=>{let N=0;const X=g.length;let W=m.length-1,J=X-1;for(;N<=W&&N<=J;){const ee=m[N],fe=g[N]=O?St(g[N]):vt(g[N]);if(vn(ee,fe))w(ee,fe,C,null,T,P,b,E,O);else break;N++}for(;N<=W&&N<=J;){const ee=m[W],fe=g[J]=O?St(g[J]):vt(g[J]);if(vn(ee,fe))w(ee,fe,C,null,T,P,b,E,O);else break;W--,J--}if(N>W){if(N<=J){const ee=J+1,fe=ee<X?g[ee].el:M;for(;N<=J;)w(null,g[N]=O?St(g[N]):vt(g[N]),C,fe,T,P,b,E,O),N++}}else if(N>J)for(;N<=W;)Ne(m[N],T,P,!0),N++;else{const ee=N,fe=N,Ce=new Map;for(N=fe;N<=J;N++){const ae=g[N]=O?St(g[N]):vt(g[N]);ae.key!=null&&Ce.set(ae.key,N)}let ge,Re=0;const $e=J-fe+1;let Ue=!1,et=0;const j=new Array($e);for(N=0;N<$e;N++)j[N]=0;for(N=ee;N<=W;N++){const ae=m[N];if(Re>=$e){Ne(ae,T,P,!0);continue}let pe;if(ae.key!=null)pe=Ce.get(ae.key);else for(ge=fe;ge<=J;ge++)if(j[ge-fe]===0&&vn(ae,g[ge])){pe=ge;break}pe===void 0?Ne(ae,T,P,!0):(j[pe-fe]=N+1,pe>=et?et=pe:Ue=!0,w(ae,g[pe],C,null,T,P,b,E,O),Re++)}const v=Ue?lu(j):rn;for(ge=v.length-1,N=$e-1;N>=0;N--){const ae=fe+N,pe=g[ae],$=g[ae+1],ie=ae+1<X?$.el||Ko($):M;j[N]===0?w(null,pe,C,ie,T,P,b,E,O):Ue&&(ge<0||N!==v[ge]?Le(pe,C,ie,2):ge--)}}},Le=(m,g,C,M,T=null)=>{const{el:P,type:b,transition:E,children:O,shapeFlag:N}=m;if(N&6){Le(m.component.subTree,g,C,M);return}if(N&128){m.suspense.move(g,C,M);return}if(N&64){b.move(m,g,C,K);return}if(b===Be){r(P,g,C);for(let W=0;W<O.length;W++)Le(O[W],g,C,M);r(m.anchor,g,C);return}if(b===Qn){B(m,g,C);return}if(M!==2&&N&1&&E)if(M===0)E.persisted&&!P[Ir]?r(P,g,C):(E.beforeEnter(P),r(P,g,C),Ze(()=>E.enter(P),T));else{const{leave:W,delayLeave:J,afterLeave:ee}=E,fe=()=>{m.ctx.isUnmounted?l(P):r(P,g,C)},Ce=()=>{const ge=P._isLeaving||!!P[Ir];P._isLeaving&&P[Ir](!0),E.persisted&&!ge?fe():W(P,()=>{fe(),ee&&ee()})};J?J(P,fe,Ce):Ce()}else r(P,g,C)},Ne=(m,g,C,M=!1,T=!1)=>{const{type:P,props:b,ref:E,children:O,dynamicChildren:N,shapeFlag:X,patchFlag:W,dirs:J,cacheIndex:ee,memo:fe}=m;if(W===-2&&(T=!1),E!=null&&(Tt(),Sn(E,null,C,m,!0),Bt()),ee!=null&&(g.renderCache[ee]=void 0),X&256){g.ctx.deactivate(m);return}const Ce=X&1&&J,ge=!kn(m);let Re;if(ge&&(Re=b&&b.onVnodeBeforeUnmount)&&ht(Re,g,m),X&6)st(m.component,C,M);else{if(X&128){m.suspense.unmount(C,M);return}Ce&&Ut(m,null,g,"beforeUnmount"),X&64?m.type.remove(m,g,C,K,M):N&&!N.hasOnce&&(P!==Be||W>0&&W&64)?De(N,g,C,!1,!0):(P===Be&&W&384||!T&&X&16)&&De(O,g,C),M&&Qe(m)}const $e=fe!=null&&ee==null;(ge&&(Re=b&&b.onVnodeUnmounted)||Ce||$e)&&Ze(()=>{Re&&ht(Re,g,m),Ce&&Ut(m,null,g,"unmounted"),$e&&(m.el=null)},C)},Qe=m=>{const{type:g,el:C,anchor:M,transition:T}=m;if(g===Be){lt(C,M);return}if(g===Qn){S(m);return}const P=()=>{l(C),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(m.shapeFlag&1&&T&&!T.persisted){const{leave:b,delayLeave:E}=T,O=()=>b(C,P);E?E(m.el,P,O):O()}else P()},lt=(m,g)=>{let C;for(;m!==g;)C=h(m),l(m),m=C;l(g)},st=(m,g,C)=>{const{bum:M,scope:T,job:P,subTree:b,um:E,m:O,a:N}=m;us(O),us(N),M&&Jn(M),T.stop(),P&&(P.flags|=8,Ne(b,m,g,C)),E&&Ze(E,g),Ze(()=>{m.isUnmounted=!0},g)},De=(m,g,C,M=!1,T=!1,P=0)=>{for(let b=P;b<m.length;b++)Ne(m[b],g,C,M,T)},R=m=>{if(m.shapeFlag&6)return R(m.component.subTree);if(m.shapeFlag&128)return m.suspense.next();const g=h(m.anchor||m.el),C=g&&g[wa];return C?h(C):g};let U=!1;const F=(m,g,C)=>{let M;m==null?g._vnode&&(Ne(g._vnode,null,null,!0),M=g._vnode.component):w(g._vnode||null,m,g,null,null,null,C),g._vnode=m,U||(U=!0,Xl(M),Ao(),U=!1)},K={p:w,um:Ne,m:Le,r:Qe,mt:se,mc:te,pc:ue,pbc:ce,n:R,o:e};return{render:F,hydrate:void 0,createApp:Ga(F)}}function Dr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Wt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ru(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Wo(e,t,n=!1){const r=e.children,l=t.children;if(Q(r)&&Q(l))for(let s=0;s<r.length;s++){const o=r[s];let a=l[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=l[s]=St(l[s]),a.el=o.el),!n&&a.patchFlag!==-2&&Wo(o,a)),a.type===_r&&(a.patchFlag===-1&&(a=l[s]=St(a)),a.el=o.el),a.type===$t&&!a.el&&(a.el=o.el)}}function lu(e){const t=e.slice(),n=[0];let r,l,s,o,a;const i=e.length;for(r=0;r<i;r++){const c=e[r];if(c!==0){if(l=n[n.length-1],e[l]<c){t[r]=l,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}function qo(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:qo(t)}function us(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Ko(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Ko(t.subTree):null}const Yo=e=>e.__isSuspense;function su(e,t){t&&t.pendingBranch?Q(e)?t.effects.push(...e):t.effects.push(e):va(e)}const Be=Symbol.for("v-fgt"),_r=Symbol.for("v-txt"),$t=Symbol.for("v-cmt"),Qn=Symbol.for("v-stc"),Xt=[];let rt=null;function q(e=!1){Xt.push(rt=e?null:[])}function Jo(){Xt.pop(),rt=Xt[Xt.length-1]||null}let Nn=1;function or(e,t=!1){Nn+=e,e<0&&rt&&t&&(rt.hasOnce=!0)}function Xo(e){return e.dynamicChildren=Nn>0?rt||rn:null,Jo(),Nn>0&&rt&&rt.push(e),e}function ne(e,t,n,r,l,s){return Xo(d(e,t,n,r,l,s,!0))}function Ge(e,t,n,r,l){return Xo(H(e,t,n,r,l,!0))}function ir(e){return e?e.__v_isVNode===!0:!1}function vn(e,t){return e.type===t.type&&e.key===t.key}const Qo=({key:e})=>e??null,Zn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Me(e)||Ve(e)||re(e)?{i:nt,r:e,k:t,f:!!n}:e:null);function d(e,t=null,n=null,r=0,l=null,s=e===Be?0:1,o=!1,a=!1){const i={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Qo(t),ref:t&&Zn(t),scopeId:So,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:nt};return a?(ar(i,n),s&128&&e.normalize(i)):n&&(i.shapeFlag|=Me(n)?8:16),Nn>0&&!o&&rt&&(i.patchFlag>0||s&6)&&i.patchFlag!==32&&rt.push(i),i}const H=ou;function ou(e,t=null,n=null,r=0,l=null,s=!1){if((!e||e===To)&&(e=$t),ir(e)){const a=an(e,t,!0);return n&&ar(a,n),Nn>0&&!s&&rt&&(a.shapeFlag&6?rt[rt.indexOf(e)]=a:rt.push(a)),a.patchFlag=-2,a}if(bu(e)&&(e=e.__vccOpts),t){t=iu(t);let{class:a,style:i}=t;a&&!Me(a)&&(t.class=le(a)),Pe(i)&&(Tl(i)&&!Q(i)&&(i=ze({},i)),t.style=Ht(i))}const o=Me(e)?1:Yo(e)?128:Ar(e)?64:Pe(e)?4:re(e)?2:0;return d(e,t,n,r,l,o,s,!0)}function iu(e){return e?Tl(e)||Fo(e)?ze({},e):e:null}function an(e,t,n=!1,r=!1){const{props:l,ref:s,patchFlag:o,children:a,transition:i}=e,c=t?uu(l||{},t):l,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Qo(c),ref:t&&t.ref?n&&s?Q(s)?s.concat(Zn(t)):[s,Zn(t)]:Zn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Be?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:i,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&an(e.ssContent),ssFallback:e.ssFallback&&an(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return i&&r&&Nl(u,i.clone(u)),u}function V(e=" ",t=0){return H(_r,null,e,t)}function au(e,t){const n=H(Qn,null,e);return n.staticCount=t,n}function Et(e="",t=!1){return t?(q(),Ge($t,null,e)):H($t,null,e)}function vt(e){return e==null||typeof e=="boolean"?H($t):Q(e)?H(Be,null,e.slice()):ir(e)?St(e):H(_r,null,String(e))}function St(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:an(e)}function ar(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(Q(t))n=16;else if(typeof t=="object")if(r&65){const l=t.default;l&&(l._c&&(l._d=!1),ar(e,l()),l._c&&(l._d=!0));return}else{n=32;const l=t._;!l&&!Fo(t)?t._ctx=nt:l===3&&nt&&(nt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(re(t)){if(r&65){ar(e,{default:t});return}t={default:t,_ctx:nt},n=32}else t=String(t),r&64?(n=16,t=[V(t)]):n=8;e.children=t,e.shapeFlag|=n}function uu(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const l in r)if(l==="class")t.class!==r.class&&(t.class=le([t.class,r.class]));else if(l==="style")t.style=Ht([t.style,r.style]);else if(mr(l)){const s=t[l],o=r[l];o&&s!==o&&!(Q(s)&&s.includes(o))?t[l]=s?[].concat(s,o):o:o==null&&s==null&&!vr(l)&&(t[l]=o)}else l!==""&&(t[l]=r[l])}return t}function ht(e,t,n,r=null){ft(e,t,7,[n,r])}const cu=Oo();let fu=0;function du(e,t,n){const r=e.type,l=(t?t.appContext:e.appContext)||cu,s={uid:fu++,vnode:e,type:r,parent:t,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(l.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zo(r,l),emitsOptions:Io(r,l),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:r.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=ja.bind(null,s),e.ce&&e.ce(s),s}let Fe=null;const hu=()=>Fe||nt;let ur,$n;{const e=wr(),t=(n,r)=>{let l;return(l=e[n])||(l=e[n]=[]),l.push(r),s=>{l.length>1?l.forEach(o=>o(s)):l[0](s)}};ur=t("__VUE_INSTANCE_SETTERS__",n=>Fe=n),$n=t("__VUE_SSR_SETTERS__",n=>un=n)}const Gn=e=>{const t=Fe;return ur(e),e.scope.on(),()=>{e.scope.off(),ur(t)}},cs=()=>{Fe&&Fe.scope.off(),ur(null)};function Zo(e){return e.vnode.shapeFlag&4}let un=!1;function pu(e,t=!1,n=!1){t&&$n(t);const{props:r,children:l}=e.vnode,s=Zo(e);Ya(e,r,s,t),Za(e,l,n||t);const o=s?mu(e,t):void 0;return t&&$n(!1),o}function mu(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,$a);const{setup:r}=n;if(r){Tt();const l=e.setupContext=r.length>1?gu(e):null,s=Gn(e),o=Hn(r,e,0,[e.props,l]),a=Js(o);if(Bt(),s(),(a||e.sp)&&!kn(e)&&Ol(e),a){if(o.then(cs,cs),t)return o.then(i=>{$n(!0);try{fs(e,i,t)}finally{$n(!1)}}).catch(i=>{Fn(i,e,0)});e.asyncDep=o}else fs(e,o)}else ei(e)}function fs(e,t,n){re(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Pe(t)&&(e.setupState=wo(t)),ei(e)}function ei(e,t,n){const r=e.type;e.render||(e.render=r.render||wt);{const l=Gn(e);Tt();try{Oa(e)}finally{Bt(),l()}}}const vu={get(e,t){return je(e,"get",""),e[t]}};function gu(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,vu),slots:e.slots,emit:e.emit,expose:t}}function Er(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(wo(ia(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in _n)return _n[n](e)},has(t,n){return n in t||n in _n}})):e.proxy}function yu(e,t=!0){return re(e)?e.displayName||e.name:e.name||t&&e.__name}function bu(e){return re(e)&&"__vccOpts"in e}const ve=(e,t)=>fa(e,t,un);function On(e,t,n){try{or(-1);const r=arguments.length;return r===2?Pe(t)&&!Q(t)?ir(t)?H(e,null,[t]):H(e,t):H(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ir(n)&&(n=[n]),H(e,t,n))}finally{or(1)}}const wu="3.5.42";/**
* @vue/runtime-dom v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ul;const ds=typeof window<"u"&&window.trustedTypes;if(ds)try{ul=ds.createPolicy("vue",{createHTML:e=>e})}catch{}const ti=ul?e=>ul.createHTML(e):e=>e,Cu="http://www.w3.org/2000/svg",Pu="http://www.w3.org/1998/Math/MathML",xt=typeof document<"u"?document:null,hs=xt&&xt.createElement("template"),Au={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const l=t==="svg"?xt.createElementNS(Cu,e):t==="mathml"?xt.createElementNS(Pu,e):n?xt.createElement(e,{is:n}):xt.createElement(e);return e==="select"&&r&&r.multiple!=null&&l.setAttribute("multiple",r.multiple),l},createText:e=>xt.createTextNode(e),createComment:e=>xt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>xt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,l,s){const o=n?n.previousSibling:t.lastChild;if(l&&(l===s||l.nextSibling))for(;t.insertBefore(l.cloneNode(!0),n),!(l===s||!(l=l.nextSibling)););else{hs.innerHTML=ti(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=hs.content;if(r==="svg"||r==="mathml"){const i=a.firstChild;for(;i.firstChild;)a.appendChild(i.firstChild);a.removeChild(i)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},xu=Symbol("_vtc");function Su(e,t,n){const r=e[xu];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ps=Symbol("_vod"),ku=Symbol("_vsh"),_u=Symbol(""),Eu=/(?:^|;)\s*display\s*:/;function Mu(e,t,n){const r=e.style,l=Me(n);let s=!1;if(n&&!l){if(t)if(Me(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&wn(r,a,"")}else for(const o in t)n[o]==null&&wn(r,o,"");for(const o in n){o==="display"&&(s=!0);const a=n[o];a!=null?Tu(e,o,!Me(t)&&t?t[o]:void 0,a)||wn(r,o,a):wn(r,o,"")}}else if(l){if(t!==n){const o=r[_u];o&&(n+=";"+o),r.cssText=n,s=Eu.test(n)}}else t&&e.removeAttribute("style");ps in e&&(e[ps]=s?r.display:"",e[ku]&&(r.display="none"))}const Kn=/\s*!important$/;function wn(e,t,n){if(Q(n))n.forEach(r=>wn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))Kn.test(n)?e.setProperty(t,n.replace(Kn,""),"important"):e.setProperty(t,n);else{const r=Ru(e,t);Kn.test(n)?e.setProperty(Vt(r),n.replace(Kn,""),"important"):e[r]=n}}const ms=["Webkit","Moz","ms"],Hr={};function Ru(e,t){const n=Hr[t];if(n)return n;let r=Ye(t);if(r!=="filter"&&r in e)return Hr[t]=r;r=yr(r);for(let l=0;l<ms.length;l++){const s=ms[l]+r;if(s in e)return Hr[t]=s}return t}function Tu(e,t,n,r){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Me(r)&&n===r}const vs="http://www.w3.org/1999/xlink";function gs(e,t,n,r,l,s=Fi(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(vs,t.slice(6,t.length)):e.setAttributeNS(vs,t,n):n==null||s&&!eo(n)?e.removeAttribute(t):e.setAttribute(t,s?"":Ct(n)?String(n):n)}function ys(e,t,n,r,l){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?ti(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?e.getAttribute("value")||"":e.value,i=n==null?e.type==="checkbox"?"on":"":String(n);(a!==i||!("_value"in e))&&(e.value=i),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=eo(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(l||t)}function Ft(e,t,n,r){e.addEventListener(t,n,r)}function Bu(e,t,n,r){e.removeEventListener(t,n,r)}const bs=Symbol("_vei");function Nu(e,t,n,r,l=null){const s=e[bs]||(e[bs]={}),o=s[t];if(r&&o)o.value=r;else{const[a,i]=Iu(t);if(r){const c=s[t]=Hu(r,l);Ft(e,a,c,i)}else o&&(Bu(e,a,o,i),s[t]=void 0)}}const $u=/(Once|Passive|Capture)$/,Ou=/^on:?(?:Once|Passive|Capture)$/;function Iu(e){let t,n;for(;(n=e.match($u))&&!Ou.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):Vt(e.slice(2)),t]}let Fr=0;const Lu=Promise.resolve(),Du=()=>Fr||(Lu.then(()=>Fr=0),Fr=Date.now());function Hu(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const l=n.value;if(Q(l)){const s=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{s.call(r),r._stopped=!0};const o=l.slice(),a=[r];for(let i=0;i<o.length&&!r._stopped;i++){const c=o[i];c&&ft(c,t,5,a)}}else ft(l,t,5,[r])};return n.value=e,n.attached=Du(),n}const ws=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Fu=(e,t,n,r,l,s)=>{const o=l==="svg";t==="class"?Su(e,r,o):t==="style"?Mu(e,n,r):mr(t)?vr(t)||Nu(e,t,n,r,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Gu(e,t,r,o))?(ys(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&gs(e,t,r,o,s,t!=="value")):e._isVueCE&&(zu(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!Me(r)))?ys(e,Ye(t),r,s,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),gs(e,t,r,o))};function Gu(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&ws(t)&&re(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const l=e.tagName;if(l==="IMG"||l==="VIDEO"||l==="CANVAS"||l==="SOURCE")return!1}return ws(t)&&Me(n)?!1:t in e}function zu(e,t){const n=e._def.props;if(!n)return!1;const r=Ye(t);return Array.isArray(n)?n.some(l=>Ye(l)===r):Object.keys(n).some(l=>Ye(l)===r)}const cn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Q(t)?n=>Jn(t,n):t};function ju(e){e.target.composing=!0}function Cs(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const bt=Symbol("_assign"),Yn=Symbol("_initialValue");function Gr(e,t,n){return t&&(e=e.trim()),n&&(e=br(e)),e}const Ee={created(e,{modifiers:{lazy:t,trim:n,number:r}},l){e.parentNode&&(e.type==="text"?e[Yn]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[Yn]=e.defaultValue.replace(/\r\n?/g,`
`))),e[bt]=cn(l);const s=r||l.props&&l.props.type==="number";Ft(e,t?"change":"input",o=>{o.target.composing||e[bt](Gr(e.value,n,s))}),(n||s)&&Ft(e,"change",()=>{e.value=Gr(e.value,n,s)}),t||(Ft(e,"compositionstart",ju),Ft(e,"compositionend",Cs),Ft(e,"change",Cs))},mounted(e,{value:t,modifiers:{trim:n,number:r}}){const l=t??"",s=e[Yn];delete e[Yn],s!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==s?e[bt](Gr(e.value,n,r)):e.value=l},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:l,number:s}},o){if(e[bt]=cn(o),e.composing)return;const a=(s||e.type==="number")&&!/^0\d/.test(e.value)?br(e.value):e.value,i=t??"";if(a===i)return;const c=e.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===e&&e.type!=="range"&&(r&&t===n||l&&e.value.trim()===i)||(e.value=i)}},Cn={deep:!0,created(e,t,n){e[bt]=cn(n),Ft(e,"change",()=>{const r=e._modelValue,l=In(e),s=e.checked,o=e[bt];if(Q(r)){const a=xl(r,l),i=a!==-1;if(s&&!i)o(r.concat(l));else if(!s&&i){const c=[...r];c.splice(a,1),o(c)}}else if(Mt(r)){const a=new Set(r);s?a.add(l):a.delete(l),o(a)}else o(ni(e,s))})},mounted:Ps,beforeUpdate(e,t,n){e[bt]=cn(n),Ps(e,t,n)}};function Ps(e,{value:t,oldValue:n},r){e._modelValue=t;let l;if(Q(t))l=xl(t,r.props.value)>-1;else if(Mt(t))l=t.has(r.props.value);else{if(t===n)return;l=Rt(t,ni(e,!0))}e.checked!==l&&(e.checked=l)}const cr={deep:!0,created(e,{value:t,modifiers:{number:n}},r){e._modelValue=t,Ft(e,"change",()=>{const l=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>n?br(In(i)):In(i)),s=e.multiple,o=s?Mt(e._modelValue)?new Set(l):l:l[0],a=e._pendingValue=[s,s?Q(o)?l.slice():l:o];try{e[bt](o)}finally{tt(()=>{e._pendingValue===a&&(e._pendingValue=void 0)})}}),e[bt]=cn(r)},mounted(e,{value:t}){As(e,t)},beforeUpdate(e,{value:t},n){e._modelValue=t,e[bt]=cn(n)},updated(e,{value:t}){const n=e._pendingValue;e._pendingValue=void 0,(!n||n[0]!==e.multiple||!Vu(t,n[1],n[0]))&&As(e,t)}};function Vu(e,t,n){if(!n||Q(e))return Rt(e,t);if(Mt(e)){if(e.size!==t.length)return!1;for(const r of t)if(!e.has(r))return!1;return!0}return!1}function As(e,t){const n=e.multiple,r=Q(t);if(!(n&&!r&&!Mt(t))){for(let l=0,s=e.options.length;l<s;l++){const o=e.options[l],a=In(o);if(n)if(r){const i=typeof a;i==="string"||i==="number"?o.selected=t.some(c=>String(c)===String(a)):o.selected=xl(t,a)>-1}else o.selected=t.has(a);else if(Rt(In(o),t)){e.selectedIndex!==l&&(e.selectedIndex=l);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function In(e){return"_value"in e?e._value:e.value}function ni(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Uu=["ctrl","shift","alt","meta"],Wu={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Uu.some(n=>e[`${n}Key`]&&!t.includes(n))},yt=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=((l,...s)=>{for(let o=0;o<t.length;o++){const a=Wu[t[o]];if(a&&a(l,t))return}return e(l,...s)}))},qu={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ku=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=(l=>{if(!("key"in l))return;const s=Vt(l.key);if(t.some(o=>o===s||qu[o]===s))return e(l)}))},Yu=ze({patchProp:Fu},Au);let xs;function Ju(){return xs||(xs=tu(Yu))}const Xu=((...e)=>{const t=Ju().createApp(...e),{mount:n}=t;return t.mount=r=>{const l=Zu(r);if(!l)return;const s=t._component;!re(s)&&!s.render&&!s.template&&(s.template=l.innerHTML),l.nodeType===1&&(l.textContent="");const o=n(l,!1,Qu(l));return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),o},t});function Qu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Zu(e){return Me(e)?document.querySelector(e):e}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const nn=typeof document<"u";function ri(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ec(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&ri(e.default)}const ye=Object.assign;function zr(e,t){const n={};for(const r in t){const l=t[r];n[r]=dt(l)?l.map(e):e(l)}return n}const En=()=>{},dt=Array.isArray;function Ss(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const li=/#/g,tc=/&/g,nc=/\//g,rc=/=/g,lc=/\?/g,si=/\+/g,sc=/%5B/g,oc=/%5D/g,oi=/%5E/g,ic=/%60/g,ii=/%7B/g,ac=/%7C/g,ai=/%7D/g,uc=/%20/g;function Hl(e){return e==null?"":encodeURI(""+e).replace(ac,"|").replace(sc,"[").replace(oc,"]")}function cc(e){return Hl(e).replace(ii,"{").replace(ai,"}").replace(oi,"^")}function cl(e){return Hl(e).replace(si,"%2B").replace(uc,"+").replace(li,"%23").replace(tc,"%26").replace(ic,"`").replace(ii,"{").replace(ai,"}").replace(oi,"^")}function fc(e){return cl(e).replace(rc,"%3D")}function dc(e){return Hl(e).replace(li,"%23").replace(lc,"%3F")}function hc(e){return dc(e).replace(nc,"%2F")}function Ln(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const pc=/\/$/,mc=e=>e.replace(pc,"");function jr(e,t,n="/"){let r,l={},s="",o="";const a=t.indexOf("#");let i=t.indexOf("?");return i=a>=0&&i>a?-1:i,i>=0&&(r=t.slice(0,i),s=t.slice(i,a>0?a:t.length),l=e(s.slice(1))),a>=0&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=bc(r??t,n),{fullPath:r+s+o,path:r,query:l,hash:Ln(o)}}function vc(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ks(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function gc(e,t,n){const r=t.matched.length-1,l=n.matched.length-1;return r>-1&&r===l&&fn(t.matched[r],n.matched[l])&&ui(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function fn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ui(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!yc(e[n],t[n]))return!1;return!0}function yc(e,t){return dt(e)?_s(e,t):dt(t)?_s(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function _s(e,t){return dt(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function bc(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),l=r[r.length-1];(l===".."||l===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o).join("/")}const It={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let fl=(function(e){return e.pop="pop",e.push="push",e})({}),Vr=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function wc(e){if(!e)if(nn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),mc(e)}const Cc=/^[^#]+#/;function Pc(e,t){return e.replace(Cc,"#")+t}function Ac(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Mr=()=>({left:window.scrollX,top:window.scrollY});function xc(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),l=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!l)return;t=Ac(l,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Es(e,t){return(history.state?history.state.position-t:-1)+e}const dl=new Map;function Sc(e,t){dl.set(e,t)}function kc(e){const t=dl.get(e);return dl.delete(e),t}function _c(e){return typeof e=="string"||e&&typeof e=="object"}function ci(e){return typeof e=="string"||typeof e=="symbol"}let Te=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const fi=Symbol("");Te.MATCHER_NOT_FOUND+"",Te.NAVIGATION_GUARD_REDIRECT+"",Te.NAVIGATION_ABORTED+"",Te.NAVIGATION_CANCELLED+"",Te.NAVIGATION_DUPLICATED+"";function dn(e,t){return ye(new Error,{type:e,[fi]:!0},t)}function At(e,t){return e instanceof Error&&fi in e&&(t==null||!!(e.type&t))}const Ec=["params","query","hash"];function Mc(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of Ec)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function Rc(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const l=n[r].replace(si," "),s=l.indexOf("="),o=Ln(s<0?l:l.slice(0,s)),a=s<0?null:Ln(l.slice(s+1));if(o in t){let i=t[o];dt(i)||(i=t[o]=[i]),i.push(a)}else t[o]=a}return t}function Ms(e){let t="";for(let n in e){const r=e[n];if(n=fc(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(dt(r)?r.map(l=>l&&cl(l)):[r&&cl(r)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+n,l!=null&&(t+="="+l))})}return t}function Tc(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=dt(r)?r.map(l=>l==null?null:""+l):r==null?r:""+r)}return t}const Bc=Symbol(""),Rs=Symbol(""),Fl=Symbol(""),Gl=Symbol(""),hl=Symbol("");function gn(){let e=[];function t(r){return e.push(r),()=>{const l=e.indexOf(r);l>-1&&e.splice(l,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Dt(e,t,n,r,l,s=o=>o()){const o=r&&(r.enterCallbacks[l]=r.enterCallbacks[l]||[]);return()=>new Promise((a,i)=>{const c=h=>{h===!1?i(dn(Te.NAVIGATION_ABORTED,{from:n,to:t})):h instanceof Error?i(h):_c(h)?i(dn(Te.NAVIGATION_GUARD_REDIRECT,{from:t,to:h})):(o&&r.enterCallbacks[l]===o&&typeof h=="function"&&o.push(h),a())},u=s(()=>e.call(r&&r.instances[l],t,n,c));let f=Promise.resolve(u);e.length<3&&(f=f.then(c)),f.catch(h=>i(h))})}function Ur(e,t,n,r,l=s=>s()){const s=[];for(const o of e)for(const a in o.components){let i=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(ri(i)){const c=(i.__vccOpts||i)[t];c&&s.push(Dt(c,n,r,o,a,l))}else{let c=i();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=ec(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const h=(f.__vccOpts||f)[t];return h&&Dt(h,n,r,o,a,l)()}))}}return s}function Nc(e,t){const n=[],r=[],l=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const a=t.matched[o];a&&(e.matched.find(c=>fn(c,a))?r.push(a):n.push(a));const i=e.matched[o];i&&(t.matched.find(c=>fn(c,i))||l.push(i))}return[n,r,l]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let $c=()=>location.protocol+"//"+location.host;function di(e,t){const{pathname:n,search:r,hash:l}=t,s=e.indexOf("#");if(s>-1){let o=l.includes(e.slice(s))?e.slice(s).length:1,a=l.slice(o);return a[0]!=="/"&&(a="/"+a),ks(a,"")}return ks(n,e)+r+l}function Oc(e,t,n,r){let l=[],s=[],o=null;const a=({state:h})=>{const p=di(e,location),y=n.value,w=t.value;let A=0;if(h){if(n.value=p,t.value=h,o&&o===y){o=null;return}A=w?h.position-w.position:0}else r(p);l.forEach(x=>{x(n.value,y,{delta:A,type:fl.pop,direction:A?A>0?Vr.forward:Vr.back:Vr.unknown})})};function i(){o=n.value}function c(h){l.push(h);const p=()=>{const y=l.indexOf(h);y>-1&&l.splice(y,1)};return s.push(p),p}function u(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(ye({},h.state,{scroll:Mr()}),"")}}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:i,listen:c,destroy:f}}function Ts(e,t,n,r=!1,l=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:l?Mr():null}}function Ic(e){const{history:t,location:n}=window,r={value:di(e,n)},l={value:t.state};l.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(i,c,u){const f=e.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+i:$c()+e+i;try{t[u?"replaceState":"pushState"](c,"",h),l.value=c}catch(p){console.error(p),n[u?"replace":"assign"](h)}}function o(i,c){s(i,ye({},t.state,Ts(l.value.back,i,l.value.forward,!0),c,{position:l.value.position}),!0),r.value=i}function a(i,c){const u=ye({},l.value,t.state,{forward:i,scroll:Mr()});s(u.current,u,!0),s(i,ye({},Ts(r.value,i,null),{position:u.position+1},c),!1),r.value=i}return{location:r,state:l,push:a,replace:o}}function Lc(e){e=wc(e);const t=Ic(e),n=Oc(e,t.state,t.location,t.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const l=ye({location:"",base:e,go:r,createHref:Pc.bind(null,e)},t,n);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>t.state.value}),l}let Kt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Ie=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Ie||{});const Dc={type:Kt.Static,value:""},Hc=/[a-zA-Z0-9_]/;function Fc(e){if(!e)return[[]];if(e==="/")return[[Dc]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=Ie.Static,r=n;const l=[];let s;function o(){s&&l.push(s),s=[]}let a=0,i,c="",u="";function f(){c&&(n===Ie.Static?s.push({type:Kt.Static,value:c}):n===Ie.Param||n===Ie.ParamRegExp||n===Ie.ParamRegExpEnd?(s.length>1&&(i==="*"||i==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:Kt.Param,value:c,regexp:u,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):t("Invalid state to consume buffer"),c="")}function h(){c+=i}for(;a<e.length;){if(i=e[a++],i==="\\"&&n!==Ie.ParamRegExp){r=n,n=Ie.EscapeNext;continue}switch(n){case Ie.Static:i==="/"?(c&&f(),o()):i===":"?(f(),n=Ie.Param):h();break;case Ie.EscapeNext:h(),n=r;break;case Ie.Param:i==="("?n=Ie.ParamRegExp:Hc.test(i)?h():(f(),n=Ie.Static,i!=="*"&&i!=="?"&&i!=="+"&&a--);break;case Ie.ParamRegExp:i===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+i:n=Ie.ParamRegExpEnd:u+=i;break;case Ie.ParamRegExpEnd:f(),n=Ie.Static,i!=="*"&&i!=="?"&&i!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===Ie.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),f(),o(),l}const Bs="[^/]+?",Gc={sensitive:!1,strict:!1,start:!0,end:!0};var qe=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(qe||{});const zc=/[.+*?^${}()[\]/\\]/g;function jc(e,t){const n=ye({},Gc,t),r=[];let l=n.start?"^":"";const s=[];for(const c of e){const u=c.length?[]:[qe.Root];n.strict&&!c.length&&(l+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=qe.Segment+(n.sensitive?qe.BonusCaseSensitive:0);if(h.type===Kt.Static)f||(l+="/"),l+=h.value.replace(zc,"\\$&"),p+=qe.Static;else if(h.type===Kt.Param){const{value:y,repeatable:w,optional:A,regexp:x}=h;s.push({name:y,repeatable:w,optional:A});const k=x||Bs;if(k!==Bs){p+=qe.BonusCustomRegExp;try{`${k}`}catch(S){throw new Error(`Invalid custom RegExp for param "${y}" (${k}): `+S.message)}}let B=w?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;f||(B=A&&c.length<2?`(?:/${B})`:"/"+B),A&&(B+="?"),l+=B,p+=qe.Dynamic,A&&(p+=qe.BonusOptional),w&&(p+=qe.BonusRepeatable),k===".*"&&(p+=qe.BonusWildcard)}u.push(p)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=qe.BonusStrict}n.strict||(l+="/?"),n.end?l+="$":n.strict&&!l.endsWith("/")&&(l+="(?:/|$)");const o=new RegExp(l,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",y=s[h-1];f[y.name]=p&&y.repeatable?p.split("/"):p}return f}function i(c){let u="",f=!1;for(const h of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===Kt.Static)u+=p.value;else if(p.type===Kt.Param){const{value:y,repeatable:w,optional:A}=p,x=y in c?c[y]:"";if(dt(x)&&!w)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const k=dt(x)?x.join("/"):x;if(!k)if(A)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${y}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:s,parse:a,stringify:i}}function Vc(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===qe.Static+qe.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===qe.Static+qe.Segment?1:-1:0}function hi(e,t){let n=0;const r=e.score,l=t.score;for(;n<r.length&&n<l.length;){const s=Vc(r[n],l[n]);if(s)return s;n++}if(Math.abs(l.length-r.length)===1){if(Ns(r))return 1;if(Ns(l))return-1}return l.length-r.length}function Ns(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Uc={strict:!1,end:!0,sensitive:!1};function Wc(e,t,n){const r=jc(Fc(e.path),n),l=ye(r,{record:e,parent:t,children:[],alias:[]});return t&&!l.record.aliasOf==!t.record.aliasOf&&t.children.push(l),l}function qc(e,t){const n=[],r=new Map;t=Ss(Uc,t);function l(f){return r.get(f)}function s(f,h,p){const y=!p,w=Os(f);w.aliasOf=p&&p.record;const A=Ss(t,f),x=[w];if("alias"in f){const S=typeof f.alias=="string"?[f.alias]:f.alias;for(const _ of S)x.push(Os(ye({},w,{components:p?p.record.components:w.components,path:_,aliasOf:p?p.record:w})))}let k,B;for(const S of x){const{path:_}=S;if(h&&_[0]!=="/"){const L=h.record.path,z=L[L.length-1]==="/"?"":"/";S.path=h.record.path+(_&&z+_)}if(k=Wc(S,h,A),p?p.alias.push(k):(B=B||k,B!==k&&B.alias.push(k),y&&f.name&&!Is(k)&&o(f.name)),pi(k)&&i(k),w.children){const L=w.children;for(let z=0;z<L.length;z++)s(L[z],k,p&&p.children[z])}p=p||k}return B?()=>{o(B)}:En}function o(f){if(ci(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function i(f){const h=Jc(f,n);n.splice(h,0,f),f.record.name&&!Is(f)&&r.set(f.record.name,f)}function c(f,h){let p,y={},w,A;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw dn(Te.MATCHER_NOT_FOUND,{location:f});A=p.record.name,y=ye($s(h.params,p.keys.filter(B=>!B.optional).concat(p.parent?p.parent.keys.filter(B=>B.optional):[]).map(B=>B.name)),f.params&&$s(f.params,p.keys.map(B=>B.name))),w=p.stringify(y)}else if(f.path!=null)w=f.path,p=n.find(B=>B.re.test(w)),p&&(y=p.parse(w),A=p.record.name);else{if(p=h.name?r.get(h.name):n.find(B=>B.re.test(h.path)),!p)throw dn(Te.MATCHER_NOT_FOUND,{location:f,currentLocation:h});A=p.record.name,y=ye({},h.params,f.params),w=p.stringify(y)}const x=[];let k=p;for(;k;)x.unshift(k.record),k=k.parent;return{name:A,path:w,params:y,matched:x,meta:Yc(x)}}e.forEach(f=>s(f));function u(){n.length=0,r.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:l}}function $s(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Os(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Kc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Kc(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Is(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Yc(e){return e.reduce((t,n)=>ye(t,n.meta),{})}function Jc(e,t){let n=0,r=t.length;for(;n!==r;){const s=n+r>>1;hi(e,t[s])<0?r=s:n=s+1}const l=Xc(e);return l&&(r=t.lastIndexOf(l,r-1)),r}function Xc(e){let t=e;for(;t=t.parent;)if(pi(t)&&hi(e,t)===0)return t}function pi({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Ls(e){const t=ut(Fl),n=ut(Gl),r=ve(()=>{const i=I(e.to);return t.resolve(i)}),l=ve(()=>{const{matched:i}=r.value,{length:c}=i,u=i[c-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(fn.bind(null,u));if(h>-1)return h;const p=Ds(i[c-2]);return c>1&&Ds(u)===p&&f[f.length-1].path!==p?f.findIndex(fn.bind(null,i[c-2])):h}),s=ve(()=>l.value>-1&&n1(n.params,r.value.params)),o=ve(()=>l.value>-1&&l.value===n.matched.length-1&&ui(n.params,r.value.params));function a(i={}){if(t1(i)){const c=t[I(e.replace)?"replace":"push"](I(e.to)).catch(En);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:r,href:ve(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}function Qc(e){return e.length===1?e[0]:e}const Zc=$l({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ls,setup(e,{slots:t}){const n=Gt(Ls(e)),{options:r}=ut(Fl),l=ve(()=>({[Hs(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Hs(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&Qc(t.default(n));return e.custom?s:On("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:l.value},s)}}}),e1=Zc;function t1(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function n1(e,t){for(const n in t){const r=t[n],l=e[n];if(typeof r=="string"){if(r!==l)return!1}else if(!dt(l)||l.length!==r.length||r.some((s,o)=>s.valueOf()!==l[o].valueOf()))return!1}return!0}function Ds(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Hs=(e,t,n)=>e??t??n,r1=$l({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=ut(hl),l=ve(()=>e.route||r.value),s=ut(Rs,0),o=ve(()=>{let c=I(s);const{matched:u}=l.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=ve(()=>l.value.matched[o.value]);Xn(Rs,ve(()=>o.value+1)),Xn(Bc,a),Xn(hl,l);const i=G();return jt(()=>[i.value,a.value,e.name],([c,u,f],[h,p,y])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!fn(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(w=>w(c))},{flush:"post"}),()=>{const c=l.value,u=e.name,f=a.value,h=f&&f.components[u];if(!h)return Fs(n.default,{Component:h,route:c});const p=f.props[u],y=p?p===!0?c.params:typeof p=="function"?p(c):p:null,A=On(h,ye({},y,t,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(f.instances[u]=null)},ref:i}));return Fs(n.default,{Component:A,route:c})||A}}});function Fs(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const l1=r1;function s1(e){const t=qc(e.routes,e),n=e.parseQuery||Rc,r=e.stringifyQuery||Ms,l=e.history,s=gn(),o=gn(),a=gn(),i=rl(It);let c=It;nn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=zr.bind(null,R=>""+R),f=zr.bind(null,hc),h=zr.bind(null,Ln);function p(R,U){let F,K;return ci(R)?(F=t.getRecordMatcher(R),K=U):K=R,t.addRoute(K,F)}function y(R){const U=t.getRecordMatcher(R);U&&t.removeRoute(U)}function w(){return t.getRoutes().map(R=>R.record)}function A(R){return!!t.getRecordMatcher(R)}function x(R,U){if(U=ye({},U||i.value),typeof R=="string"){const C=jr(n,R,U.path),M=t.resolve({path:C.path},U),T=l.createHref(C.fullPath);return ye(C,M,{params:h(M.params),hash:Ln(C.hash),redirectedFrom:void 0,href:T})}let F;if(R.path!=null)F=ye({},R,{path:jr(n,R.path,U.path).path});else{const C=ye({},R.params);for(const M in C)C[M]==null&&delete C[M];F=ye({},R,{params:f(C)}),U.params=f(U.params)}const K=t.resolve(F,U),Z=R.hash||"";K.params=u(h(K.params));const m=vc(r,ye({},R,{hash:cc(Z),path:K.path})),g=l.createHref(m);return ye({fullPath:m,hash:Z,query:r===Ms?Tc(R.query):R.query||{}},K,{redirectedFrom:void 0,href:g})}function k(R){return typeof R=="string"?jr(n,R,i.value.path):ye({},R)}function B(R,U){if(c!==R)return dn(Te.NAVIGATION_CANCELLED,{from:U,to:R})}function S(R){return z(R)}function _(R){return S(ye(k(R),{replace:!0}))}function L(R,U){const F=R.matched[R.matched.length-1];if(F&&F.redirect){const{redirect:K}=F;let Z=typeof K=="function"?K(R,U):K;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=k(Z):{path:Z},Z.params={}),ye({query:R.query,hash:R.hash,params:Z.path!=null?{}:R.params},Z)}}function z(R,U){const F=c=x(R),K=i.value,Z=R.state,m=R.force,g=R.replace===!0,C=L(F,K);if(C)return z(ye(k(C),{state:typeof C=="object"?ye({},Z,C.state):Z,force:m,replace:g}),U||F);const M=F;M.redirectedFrom=U;let T;return!m&&gc(r,K,F)&&(T=dn(Te.NAVIGATION_DUPLICATED,{to:M,from:K}),Le(K,K,!0,!1)),(T?Promise.resolve(T):ce(M,K)).catch(P=>At(P)?At(P,Te.NAVIGATION_GUARD_REDIRECT)?P:Xe(P):ue(P,M,K)).then(P=>{if(P){if(At(P,Te.NAVIGATION_GUARD_REDIRECT))return z(ye({replace:g},k(P.to),{state:typeof P.to=="object"?ye({},Z,P.to.state):Z,force:m}),U||M)}else P=Ae(M,K,!0,g,Z);return _e(M,K,P),P})}function te(R,U){const F=B(R,U);return F?Promise.reject(F):Promise.resolve()}function de(R){const U=lt.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(R):R()}function ce(R,U){let F;const[K,Z,m]=Nc(R,U);F=Ur(K.reverse(),"beforeRouteLeave",R,U);for(const C of K)C.leaveGuards.forEach(M=>{F.push(Dt(M,R,U))});const g=te.bind(null,R,U);return F.push(g),De(F).then(()=>{F=[];for(const C of s.list())F.push(Dt(C,R,U));return F.push(g),De(F)}).then(()=>{F=Ur(Z,"beforeRouteUpdate",R,U);for(const C of Z)C.updateGuards.forEach(M=>{F.push(Dt(M,R,U))});return F.push(g),De(F)}).then(()=>{F=[];for(const C of m)if(C.beforeEnter)if(dt(C.beforeEnter))for(const M of C.beforeEnter)F.push(Dt(M,R,U));else F.push(Dt(C.beforeEnter,R,U));return F.push(g),De(F)}).then(()=>(R.matched.forEach(C=>C.enterCallbacks={}),F=Ur(m,"beforeRouteEnter",R,U,de),F.push(g),De(F))).then(()=>{F=[];for(const C of o.list())F.push(Dt(C,R,U));return F.push(g),De(F)}).catch(C=>At(C,Te.NAVIGATION_CANCELLED)?C:Promise.reject(C))}function _e(R,U,F){a.list().forEach(K=>de(()=>K(R,U,F)))}function Ae(R,U,F,K,Z){const m=B(R,U);if(m)return m;const g=U===It,C=nn?history.state:{};F&&(K||g?l.replace(R.fullPath,ye({scroll:g&&C&&C.scroll},Z)):l.push(R.fullPath,Z)),i.value=R,Le(R,U,F,g),Xe()}let Oe;function se(){Oe||(Oe=l.listen((R,U,F)=>{if(!st.listening)return;const K=x(R),Z=L(K,st.currentRoute.value);if(Z){z(ye(Z,{replace:!0,force:!0}),K).catch(En);return}c=K;const m=i.value;nn&&Sc(Es(m.fullPath,F.delta),Mr()),ce(K,m).catch(g=>At(g,Te.NAVIGATION_ABORTED|Te.NAVIGATION_CANCELLED)?g:At(g,Te.NAVIGATION_GUARD_REDIRECT)?(z(ye(k(g.to),{force:!0}),K).then(C=>{At(C,Te.NAVIGATION_ABORTED|Te.NAVIGATION_DUPLICATED)&&!F.delta&&F.type===fl.pop&&l.go(-1,!1)}).catch(En),Promise.reject()):(F.delta&&l.go(-F.delta,!1),ue(g,K,m))).then(g=>{g=g||Ae(K,m,!1),g&&(F.delta&&!At(g,Te.NAVIGATION_CANCELLED)?l.go(-F.delta,!1):F.type===fl.pop&&At(g,Te.NAVIGATION_ABORTED|Te.NAVIGATION_DUPLICATED)&&l.go(-1,!1)),_e(K,m,g)}).catch(En)}))}let xe=gn(),he=gn(),oe;function ue(R,U,F){Xe(R);const K=he.list();return K.length?K.forEach(Z=>Z(R,U,F)):console.error(R),Promise.reject(R)}function Je(){return oe&&i.value!==It?Promise.resolve():new Promise((R,U)=>{xe.add([R,U])})}function Xe(R){return oe||(oe=!R,se(),xe.list().forEach(([U,F])=>R?F(R):U()),xe.reset()),R}function Le(R,U,F,K){const{scrollBehavior:Z}=e;if(!nn||!Z)return Promise.resolve();const m=!F&&kc(Es(R.fullPath,0))||(K||!F)&&history.state&&history.state.scroll||null;return tt().then(()=>Z(R,U,m)).then(g=>g&&xc(g)).catch(g=>ue(g,R,U))}const Ne=R=>l.go(R);let Qe;const lt=new Set,st={currentRoute:i,listening:!0,addRoute:p,removeRoute:y,clearRoutes:t.clearRoutes,hasRoute:A,getRoutes:w,resolve:x,options:e,push:S,replace:_,go:Ne,back:()=>Ne(-1),forward:()=>Ne(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:he.add,isReady:Je,install(R){R.component("RouterLink",e1),R.component("RouterView",l1),R.config.globalProperties.$router=st,Object.defineProperty(R.config.globalProperties,"$route",{enumerable:!0,get:()=>I(i)}),nn&&!Qe&&i.value===It&&(Qe=!0,S(l.location).catch(K=>{}));const U={};for(const K in It)Object.defineProperty(U,K,{get:()=>i.value[K],enumerable:!0});R.provide(Fl,st),R.provide(Gl,yo(U)),R.provide(hl,i);const F=R.unmount;lt.add(R),R.unmount=function(){lt.delete(R),lt.size<1&&(c=It,Oe&&Oe(),Oe=null,i.value=It,Qe=!1,oe=!1),F()}}};function De(R){return R.reduce((U,F)=>U.then(()=>de(F)),Promise.resolve())}return st}function mi(e){return ut(Gl)}/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=e=>e==="";/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=e=>{const t=i1(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var en={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=Symbol("lucide-icons");function c1(){return ut(u1,{})}/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=({name:e,iconNode:t,"icon-node":n,absoluteStrokeWidth:r,"absolute-stroke-width":l,strokeWidth:s,"stroke-width":o,size:a,color:i,...c},{slots:u})=>{const{size:f,color:h,strokeWidth:p=2,absoluteStrokeWidth:y=!1,class:w=""}=c1(),A=ve(()=>{const x=Gs(r)||Gs(l)||r===!0||l===!0||y===!0,k=s||o||p||en["stroke-width"];return x?Number(k)*24/Number(a??f??en.width):k});return On("svg",{...en,...c,width:a??f??en.width,height:a??f??en.height,stroke:i??h??en.stroke,"stroke-width":A.value,class:o1("lucide",w,...e?[`lucide-${zs(a1(e))}-icon`,`lucide-${zs(e)}`]:["lucide-icon"])},[...(t??n??[]).map(x=>On(...x)),...u.default?[u.default()]:[]])};/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=(e,t)=>(n,{slots:r,attrs:l})=>On(f1,{...l,...n,iconNode:t,name:e},r.default?{default:r.default}:void 0);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"m21 8-4-4-4 4",key:"1c9v7m"}],["path",{d:"M17 4v16",key:"7dpous"}]],h1=Y("arrow-down-up",d1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]],m1=Y("arrow-left-right",p1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],g1=Y("arrow-left",v1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],b1=Y("arrow-up-right",y1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]],C1=Y("binary",w1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],A1=Y("braces",P1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],pl=Y("check",x1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=[["path",{d:"M11 14h10",key:"1w8e9d"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v1.344",key:"1e62lh"}],["path",{d:"m17 18 4-4-4-4",key:"z2g111"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113",key:"bjbb7m"}],["rect",{x:"8",y:"2",width:"8",height:"4",rx:"1",key:"ublpy"}]],k1=Y("clipboard-paste",S1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]],fr=Y("clipboard",_1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6h4",key:"135r8i"}]],M1=Y("clock-3",E1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],T1=Y("clock",R1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],N1=Y("cloud-upload",B1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],O1=Y("cloud",$1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],L1=Y("copy",I1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14",key:"ron5a4"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2",key:"7s9ehn"}]],vi=Y("crop",D1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],F1=Y("download",H1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],z1=Y("eraser",G1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]],V1=Y("file-image",j1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],gi=Y("file-text",U1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=[["path",{d:"M12 22h6a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6",key:"15usau"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M3 16v-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V16",key:"s1gz5"}],["path",{d:"M6 22h2",key:"194x9m"}],["path",{d:"M7 14v8",key:"11ixej"}]],q1=Y("file-type-corner",W1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=[["path",{d:"m17 3-5 5-5-5h10",key:"1ftt6x"}],["path",{d:"m17 21-5-5-5 5h10",key:"1m0wmu"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]],ml=Y("flip-vertical-2",K1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=[["path",{d:"m3 7 5 5-5 5V7",key:"couhi7"}],["path",{d:"m21 7-5 5 5 5V7",key:"6ouia7"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]],vl=Y("flip-horizontal-2",Y1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Wr=Y("folder-open",J1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]],Q1=Y("git-fork",X1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],gl=Y("grid-3x3",Z1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],tf=Y("heart",ef);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],yl=Y("image-plus",nf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],lf=Y("image",rf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],of=Y("key-round",sf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],yi=Y("languages",af);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=[["path",{d:"M13 5h8",key:"a7qcls"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 19h8",key:"c3s6r1"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}]],js=Y("list-checks",uf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],ff=Y("loader-circle",cf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]],hf=Y("lock-keyhole",df);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],mf=Y("maximize-2",pf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],gf=Y("minimize-2",vf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],bf=Y("moon",yf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=[["path",{d:"M11 7 6 2",key:"1jwth8"}],["path",{d:"M18.992 12H2.041",key:"xw1gg"}],["path",{d:"M21.145 18.38A3.34 3.34 0 0 1 20 16.5a3.3 3.3 0 0 1-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0 0 20 22a2 2 0 0 0 2-2.025c0-.58-.285-1.13-.855-1.595",key:"1nkol4"}],["path",{d:"m8.5 4.5 2.148-2.148a1.205 1.205 0 0 1 1.704 0l7.296 7.296a1.205 1.205 0 0 1 0 1.704l-7.592 7.592a3.615 3.615 0 0 1-5.112 0l-3.888-3.888a3.615 3.615 0 0 1 0-5.112L5.67 7.33",key:"1nk1rd"}]],Cf=Y("paint-bucket",wf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=[["path",{d:"m14.622 17.897-10.68-2.913",key:"vj2p1u"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",key:"18tc5c"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",key:"ytzfxy"}]],Af=Y("paintbrush",Pf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=[["path",{d:"m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12",key:"1y3wsu"}],["path",{d:"m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z",key:"110lr1"}],["path",{d:"m2 22 .414-.414",key:"jhxm08"}]],bl=Y("pipette",xf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],kf=Y("redo-2",Sf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],zl=Y("refresh-cw",_f);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=[["path",{d:"M14 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1",key:"zg1ipl"}],["path",{d:"M14 4a1 1 0 0 1 1-1",key:"dhj8ez"}],["path",{d:"M15 10a1 1 0 0 1-1-1",key:"1mnyi5"}],["path",{d:"M19 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1",key:"txt6k4"}],["path",{d:"M21 4a1 1 0 0 0-1-1",key:"sfs9ap"}],["path",{d:"M21 9a1 1 0 0 1-1 1",key:"mp6qeo"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5a2 2 0 0 1 2-2h2",key:"15xut4"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}]],Mf=Y("replace-all",Ef);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Tf=Y("rotate-ccw",Rf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],Nf=Y("rotate-cw",Bf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Of=Y("save",$f);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Lf=Y("search",If);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],dr=Y("shield-check",Df);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],bi=Y("sparkles",Hf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}]],Gf=Y("square-dashed",Ff);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],jf=Y("square",zf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Uf=Y("sun",Vf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=[["path",{d:"M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z",key:"16rjxf"}],["path",{d:"M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193",key:"178nd4"}],["circle",{cx:"10.5",cy:"6.5",r:".5",fill:"currentColor",key:"12ikhr"}]],Vs=Y("tags",Wf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Kf=Y("trash-2",qf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],Jf=Y("undo-2",Yf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Qf=Y("upload",Xf);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],ed=Y("wand-sparkles",Zf),td="/assets/fufu-3FWaQxCW.png",nd={class:"site-header"},rd={class:"brand-mark","aria-hidden":"true"},ld=["src"],sd={class:"header-actions","aria-label":"页面操作"},od={class:"icon-button",href:"https://github.com/",target:"_blank",rel:"noreferrer","aria-label":"GitHub 仓库"},id=["aria-label"],ad={class:"site-footer"},ud={__name:"App",setup(e){const t=mi(),n=G(!1),r=ve(()=>["pixel-beads","markdown"].includes(t.params.slug));hn(()=>{const s=localStorage.getItem("sakura-theme");n.value=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches,document.documentElement.classList.toggle("dark",n.value)});function l(){n.value=!n.value,document.documentElement.classList.toggle("dark",n.value),localStorage.setItem("sakura-theme",n.value?"dark":"light")}return(s,o)=>{const a=ll("router-link"),i=ll("router-view");return q(),ne("div",{class:le(["site-shell",{"site-shell-wide":r.value}])},[d("header",nd,[H(a,{class:"brand",to:"/","aria-label":"Sakura Tools 首页"},{default:Pr(()=>[d("span",rd,[d("img",{src:I(td),alt:""},null,8,ld)]),o[1]||(o[1]=d("span",null,[d("strong",null,"Sakura"),d("small",null,"TOOLS / 工具箱")],-1))]),_:1}),d("nav",sd,[d("a",od,[H(I(Q1),{size:18})]),d("button",{class:"icon-button",type:"button","aria-label":n.value?"切换到浅色模式":"切换到深色模式",onClick:o[0]||(o[0]=c=>l())},[n.value?(q(),Ge(I(Uf),{key:0,size:18})):(q(),Ge(I(bf),{key:1,size:18}))],8,id)])]),d("main",null,[H(i)]),d("footer",ad,[o[4]||(o[4]=d("p",null,[d("span",{class:"status-dot"}),V(" 所有基础工具均在浏览器本地运行")],-1)),d("p",null,[o[2]||(o[2]=V("用 ",-1)),H(I(tf),{size:13,fill:"currentColor"}),o[3]||(o[3]=V(" 和 Go 构建",-1))])])],2)}}},cd=["全部","开发","文本","图像","文档","生活"],wl=[{slug:"json",index:"01",name:"JSON 格式化",summary:"格式化、压缩并验证 JSON 数据",category:"开发",icon:A1,color:"red",ready:!0},{slug:"base64",index:"02",name:"Base64 编解码",summary:"文本与 Base64 安全互转，支持 Unicode",category:"开发",icon:C1,color:"blue",ready:!0},{slug:"timestamp",index:"03",name:"时间戳转换",summary:"时间戳与本地日期双向转换",category:"开发",icon:M1,color:"ochre",ready:!0},{slug:"password",index:"04",name:"随机密码",summary:"在本地生成高强度随机密码",category:"生活",icon:of,color:"green",ready:!0},{slug:"translate",index:"05",name:"在线翻译",summary:"安全代理第三方服务，快速翻译多语言文本",category:"文本",icon:yi,color:"blue",ready:!0},{slug:"markdown",index:"06",name:"Markdown 编辑器",summary:"实时预览并导出 Markdown 与 PDF 文档",category:"文本",icon:gi,color:"ochre",ready:!0},{slug:"image",index:"07",name:"图片处理",summary:"本地裁剪、压缩并转换图片格式",category:"图像",icon:lf,color:"green",ready:!0},{slug:"pdf",index:"08",name:"PDF 工具",summary:"合并、拆分与页面整理",category:"文档",icon:q1,color:"red"},{slug:"pixel-beads",index:"09",name:"像素拼豆图纸",summary:"照片转网格图纸，精准匹配拼豆色号",category:"图像",icon:gl,color:"special",ready:!0},{slug:"color",index:"10",name:"颜色工具",summary:"取色、转换与调色板生成",category:"开发",icon:bl,color:"blue"}],fd=e=>wl.find(t=>t.slug===e),dd={class:"tool-index","aria-labelledby":"tool-index-heading"},hd={class:"section-heading"},pd={class:"tool-count"},md={class:"tool-controls"},vd={class:"search-box"},gd={class:"category-tabs","aria-label":"工具分类"},yd=["onClick"],bd={key:0,class:"tool-grid"},wd={class:"card-topline"},Cd={class:"tool-number"},Pd={key:0,class:"soon-label"},Ad={class:"tool-symbol"},xd={class:"category-label"},Sd={key:1,class:"empty-state"},kd={__name:"HomeView",setup(e){const t=G(""),n=G("全部"),r=G(null),l=ve(()=>{const o=t.value.trim().toLowerCase();return wl.filter(a=>{const i=n.value==="全部"||a.category===n.value,c=!o||`${a.name} ${a.summary} ${a.category}`.toLowerCase().includes(o);return i&&c})});function s(o){var a,i;o.key==="/"&&((a=document.activeElement)==null?void 0:a.tagName)!=="INPUT"&&((i=document.activeElement)==null?void 0:i.tagName)!=="TEXTAREA"&&(o.preventDefault(),tt(()=>{var c;return(c=r.value)==null?void 0:c.focus()}))}return hn(()=>window.addEventListener("keydown",s)),pn(()=>window.removeEventListener("keydown",s)),(o,a)=>(q(),ne(Be,null,[a[4]||(a[4]=au('<section class="home-intro"><div class="eyebrow"><span></span> SAKURA WORKBENCH · 2026</div><div class="intro-grid"><div><h1>需要什么，<br><em>拿来即用。</em></h1></div><div class="intro-copy"><p>一组简洁、快速、尊重隐私的在线工具。常用处理尽可能留在你的浏览器里完成。</p><div class="privacy-note"><span class="status-dot"></span> 无需登录 · 本地优先</div></div></div></section>',1)),d("section",dd,[d("div",hd,[a[2]||(a[2]=d("div",null,[d("p",{class:"section-kicker"},"TOOL INDEX"),d("h2",{id:"tool-index-heading"},"工具索引")],-1)),d("p",pd,D(String(l.value.length).padStart(2,"0"))+" / "+D(I(wl).length),1)]),d("div",md,[d("label",vd,[H(I(Lf),{size:19}),me(d("input",{ref_key:"searchInput",ref:r,"onUpdate:modelValue":a[0]||(a[0]=i=>t.value=i),type:"search",placeholder:"搜索工具，例如 JSON、图片…"},null,512),[[Ee,t.value]]),a[3]||(a[3]=d("kbd",null,"/",-1))]),d("div",gd,[(q(!0),ne(Be,null,it(I(cd),i=>(q(),ne("button",{key:i,type:"button",class:le({active:n.value===i}),onClick:c=>n.value=i},D(i),11,yd))),128))])]),l.value.length?(q(),ne("div",bd,[(q(!0),ne(Be,null,it(l.value,i=>(q(),Ge(lr(i.ready?"router-link":"article"),{key:i.slug,to:i.ready?`/tools/${i.slug}`:void 0,class:le(["tool-card",[`tone-${i.color}`,{upcoming:!i.ready,featured:i.color==="special"}]])},{default:Pr(()=>[d("div",wd,[d("span",Cd,D(i.index),1),i.ready?(q(),Ge(I(b1),{key:1,size:18})):(q(),ne("span",Pd,"筹备中"))]),d("div",Ad,[(q(),Ge(lr(i.icon),{size:25,"stroke-width":1.8}))]),d("h3",null,D(i.name),1),d("p",null,D(i.summary),1),d("span",xd,D(i.category),1),i.color==="special"?(q(),Ge(I(bi),{key:0,class:"special-mark",size:17})):Et("",!0)]),_:2},1032,["to","class"]))),128))])):(q(),ne("div",Sd,[d("p",null,"没有找到“"+D(t.value)+"”",1),d("button",{type:"button",onClick:a[1]||(a[1]=i=>{t.value="",n.value="全部"})},"清除筛选")]))])],64))}},_d="modulepreload",Ed=function(e){return"/"+e},Us={},Md=function(t,n,r){let l=Promise.resolve();if(n&&n.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),i=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));l=o(n.map(c=>{if(c=Ed(c),c in Us)return;Us[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":_d,u||(h.as="script"),h.crossOrigin="",h.href=c,i&&h.setAttribute("nonce",i),document.head.appendChild(h),u)return new Promise((p,y)=>{h.addEventListener("load",p),h.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return l.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})},Rd={class:"tool-panel"},Td={class:"tool-bar"},Bd={class:"action-group"},Nd={key:0,class:"error-message"},$d={key:1,class:"success-message"},Od={__name:"JsonTool",setup(e){const t=G(`{
  "project": "sakura-tools",
  "status": "growing",
  "private": true
}`),n=G(""),r=G(!1);function l(a=!1){try{t.value=JSON.stringify(JSON.parse(t.value),null,a?0:2),n.value=""}catch(i){n.value=`第 ${s(i.message)} 行附近：${i.message}`}}function s(a){var c;const i=Number(((c=a.match(/position (\d+)/))==null?void 0:c[1])||0);return t.value.slice(0,i).split(`
`).length}async function o(){await navigator.clipboard.writeText(t.value),r.value=!0,setTimeout(()=>r.value=!1,1400)}return(a,i)=>(q(),ne("div",Rd,[d("div",Td,[d("div",Bd,[d("button",{class:"primary-button",type:"button",onClick:i[0]||(i[0]=c=>l(!1))},[H(I(ed),{size:16}),i[4]||(i[4]=V(" 格式化",-1))]),d("button",{class:"secondary-button",type:"button",onClick:i[1]||(i[1]=c=>l(!0))},[H(I(gf),{size:16}),i[5]||(i[5]=V(" 压缩",-1))])]),d("button",{class:"secondary-button",type:"button",onClick:o},[r.value?(q(),Ge(I(pl),{key:0,size:16})):(q(),Ge(I(fr),{key:1,size:16})),V(" "+D(r.value?"已复制":"复制"),1)])]),i[7]||(i[7]=d("label",{class:"editor-label",for:"json-input"},"JSON INPUT",-1)),me(d("textarea",{id:"json-input","onUpdate:modelValue":i[2]||(i[2]=c=>t.value=c),class:"code-editor",spellcheck:"false",onInput:i[3]||(i[3]=c=>n.value="")},null,544),[[Ee,t.value]]),n.value?(q(),ne("p",Nd,D(n.value),1)):(q(),ne("p",$d,[H(I(pl),{size:14}),i[6]||(i[6]=V(" 输入内容仅在当前浏览器中处理",-1))]))]))}},Id={class:"tool-panel split-editor"},Ld={class:"editor-heading"},Dd={class:"swap-mark"},Hd={class:"editor-heading"},Fd={key:0,class:"error-message wide-message"},Gd={__name:"Base64Tool",setup(e){const t=G("你好，Sakura Tools!"),n=G(""),r=G("");function l(){n.value=btoa(String.fromCharCode(...new TextEncoder().encode(t.value))),r.value=""}function s(){try{t.value=new TextDecoder().decode(Uint8Array.from(atob(n.value.trim()),a=>a.charCodeAt(0))),r.value=""}catch{r.value="这不是有效的 Base64 内容，请检查后重试。"}}async function o(a){await navigator.clipboard.writeText(a)}return l(),(a,i)=>(q(),ne("div",Id,[d("section",null,[d("div",Ld,[i[5]||(i[5]=d("label",{for:"plain-text"},"原始文本",-1)),d("button",{type:"button",onClick:i[0]||(i[0]=c=>o(t.value))},[H(I(fr),{size:15}),i[4]||(i[4]=V("复制",-1))])]),me(d("textarea",{id:"plain-text","onUpdate:modelValue":i[1]||(i[1]=c=>t.value=c),spellcheck:"false"},null,512),[[Ee,t.value]]),d("button",{class:"primary-button full-button",type:"button",onClick:l},"编码为 Base64")]),d("div",Dd,[H(I(h1),{size:18})]),d("section",null,[d("div",Hd,[i[7]||(i[7]=d("label",{for:"encoded-text"},"Base64",-1)),d("button",{type:"button",onClick:i[2]||(i[2]=c=>o(n.value))},[H(I(fr),{size:15}),i[6]||(i[6]=V("复制",-1))])]),me(d("textarea",{id:"encoded-text","onUpdate:modelValue":i[3]||(i[3]=c=>n.value=c),spellcheck:"false"},null,512),[[Ee,n.value]]),d("button",{class:"secondary-button full-button",type:"button",onClick:s},"解码为文本")]),r.value?(q(),ne("p",Fd,D(r.value),1)):Et("",!0)]))}},zd={class:"tool-panel timestamp-panel"},jd={class:"timestamp-grid"},Vd={class:"unit-toggle"},Ud={class:"timezone-note"},Wd={__name:"TimestampTool",setup(e){const t=Date.now(),n=G(Math.floor(t/1e3)),r=G(s(t)),l=G("seconds");function s(u){const f=new Date(u);if(Number.isNaN(f.getTime()))return"";const h=f.getTimezoneOffset()*6e4;return new Date(f.getTime()-h).toISOString().slice(0,19)}function o(){const u=l.value==="seconds"?Number(n.value)*1e3:Number(n.value),f=s(u);f&&(r.value=f)}function a(){const u=new Date(r.value).getTime();Number.isNaN(u)||(n.value=l.value==="seconds"?Math.floor(u/1e3):u)}function i(){const u=Date.now();n.value=l.value==="seconds"?Math.floor(u/1e3):u,r.value=s(u)}const c=ve(()=>{const u=new Date(r.value);return Number.isNaN(u.getTime())?"请输入完整日期时间":u.toLocaleString("zh-CN",{dateStyle:"full",timeStyle:"medium"})});return(u,f)=>(q(),ne("div",zd,[d("div",jd,[d("section",null,[f[4]||(f[4]=d("label",{for:"timestamp"},"时间戳",-1)),me(d("input",{id:"timestamp","onUpdate:modelValue":f[0]||(f[0]=h=>n.value=h),type:"number",onInput:o},null,544),[[Ee,n.value]]),d("div",Vd,[d("button",{type:"button",class:le({active:l.value==="seconds"}),onClick:f[1]||(f[1]=h=>{l.value="seconds",a()})},"秒",2),d("button",{type:"button",class:le({active:l.value==="milliseconds"}),onClick:f[2]||(f[2]=h=>{l.value="milliseconds",a()})},"毫秒",2)])]),d("section",null,[f[5]||(f[5]=d("label",{for:"date-input"},"本地日期时间",-1)),me(d("input",{id:"date-input","onUpdate:modelValue":f[3]||(f[3]=h=>r.value=h),type:"datetime-local",step:"1",onInput:a},null,544),[[Ee,r.value]]),d("p",null,D(c.value),1)])]),d("button",{class:"secondary-button",type:"button",onClick:i},[H(I(zl),{size:16}),f[6]||(f[6]=V(" 使用当前时间",-1))]),d("div",Ud,[H(I(T1),{size:15}),V(" 当前浏览器时区："+D(Intl.DateTimeFormat().resolvedOptions().timeZone),1)])]))}},qd={class:"tool-panel password-panel"},Kd={class:"password-output"},Yd=["aria-label"],Jd={key:0,class:"error-message",role:"status"},Xd={class:"password-options"},Qd={class:"length-control"},Zd={class:"check-grid"},eh={class:"password-footer"},th={__name:"PasswordTool",setup(e){const t=G(20),n=G({upper:!0,lower:!0,numbers:!0,symbols:!0}),r=G(""),l=G(!1),s=G("");let o;const a=ve(()=>{const f=Object.values(n.value).filter(Boolean).length,h=t.value*Math.log2(Math.max(f*18,2));return h>110?"很强":h>75?"强":h>45?"一般":"较弱"});function i(){const f=[];n.value.upper&&f.push("ABCDEFGHJKLMNPQRSTUVWXYZ"),n.value.lower&&f.push("abcdefghijkmnopqrstuvwxyz"),n.value.numbers&&f.push("23456789"),n.value.symbols&&f.push("!@#$%&*+-=?");const h=f.join("")||"abcdefghijkmnopqrstuvwxyz",p=crypto.getRandomValues(new Uint32Array(t.value));r.value=Array.from(p,y=>h[y%h.length]).join("")}function c(f){const h=document.createElement("textarea");h.value=f,h.setAttribute("readonly",""),h.style.position="fixed",h.style.opacity="0",h.style.pointerEvents="none",document.body.appendChild(h),h.select(),h.setSelectionRange(0,h.value.length);try{return document.execCommand("copy")}finally{h.remove()}}async function u(){var f;if(r.value){s.value="";try{let h=!1;if((f=navigator.clipboard)!=null&&f.writeText&&window.isSecureContext)try{await navigator.clipboard.writeText(r.value),h=!0}catch{h=!1}if(!h&&!c(r.value))throw new Error("copy failed");l.value=!0,clearTimeout(o),o=setTimeout(()=>l.value=!1,1400)}catch{l.value=!1,s.value="复制失败，请长按或选中密码手动复制。"}}}return pn(()=>clearTimeout(o)),i(),(f,h)=>(q(),ne("div",qd,[d("div",Kd,[d("code",null,D(r.value),1),d("button",{type:"button","aria-label":l.value?"密码已复制":"复制密码",onClick:u},[l.value?(q(),Ge(I(pl),{key:0,size:18})):(q(),Ge(I(fr),{key:1,size:18})),d("span",null,D(l.value?"已复制":"复制"),1)],8,Yd)]),s.value?(q(),ne("p",Jd,D(s.value),1)):Et("",!0),d("div",Xd,[d("label",Qd,[h[5]||(h[5]=V("密码长度 ",-1)),d("strong",null,D(t.value),1),me(d("input",{"onUpdate:modelValue":h[0]||(h[0]=p=>t.value=p),type:"range",min:"8",max:"64",onInput:i},null,544),[[Ee,t.value,void 0,{number:!0}]])]),d("div",Zd,[d("label",null,[me(d("input",{"onUpdate:modelValue":h[1]||(h[1]=p=>n.value.upper=p),type:"checkbox",onChange:i},null,544),[[Cn,n.value.upper]]),h[6]||(h[6]=V(" 大写字母",-1))]),d("label",null,[me(d("input",{"onUpdate:modelValue":h[2]||(h[2]=p=>n.value.lower=p),type:"checkbox",onChange:i},null,544),[[Cn,n.value.lower]]),h[7]||(h[7]=V(" 小写字母",-1))]),d("label",null,[me(d("input",{"onUpdate:modelValue":h[3]||(h[3]=p=>n.value.numbers=p),type:"checkbox",onChange:i},null,544),[[Cn,n.value.numbers]]),h[8]||(h[8]=V(" 数字",-1))]),d("label",null,[me(d("input",{"onUpdate:modelValue":h[4]||(h[4]=p=>n.value.symbols=p),type:"checkbox",onChange:i},null,544),[[Cn,n.value.symbols]]),h[9]||(h[9]=V(" 特殊符号",-1))])])]),d("div",eh,[d("span",null,[h[10]||(h[10]=V("强度：",-1)),d("strong",null,D(a.value),1)]),d("button",{class:"primary-button",type:"button",onClick:i},[H(I(zl),{size:16}),h[11]||(h[11]=V(" 重新生成",-1))])])]))}},nh=`
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
`.trim();function qr(e){return Number(e).toString(16).padStart(2,"0").toUpperCase()}function rh(e,t){const n=a=>{var i;return((i=a.match(/^([A-Z]+)(\d+)$/))==null?void 0:i.slice(1))||[a,"0"]},[r,l]=n(e.code),[s,o]=n(t.code);return r.localeCompare(s)||Number(l)-Number(o)}const lh={id:"mard-291-community",brand:"MARD",name:"MARD 291 色（社区校准）",source:"https://github.com/maxcleme/beadcolors",colors:nh.split(`
`).map(e=>{const[t,n,r,l,s,o]=e.split(",");return{id:`mard-${t.toLowerCase()}`,code:t,name:n,hex:`#${qr(r)}${qr(l)}${qr(s)}`,contributor:o}}).sort(rh)};function jl({id:e,brand:t,name:n,source:r,csv:l}){return{id:e,brand:t,name:n,source:r,colors:l.trim().split(/\r?\n/).map(s=>{const[o,a,i,c,u]=s.split(","),f=`#${[i,c,u].map(h=>Number(h).toString(16).padStart(2,"0")).join("")}`.toUpperCase();return{id:`${e}-${o.toLowerCase()}`,code:o,name:a,hex:f}})}}const sh=`
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
`,oh=`
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
`,ih=`
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
`,ah=jl({id:"hama-midi-community",brand:"Hama",name:"Hama Midi（92 色）",source:"https://github.com/maxcleme/beadcolors/blob/master/raw/hama.csv",csv:sh}),uh=jl({id:"artkal-c-community",brand:"Artkal",name:"Artkal C 2.6 mm（174 色）",source:"https://github.com/maxcleme/beadcolors/blob/master/raw/artkal_c.csv",csv:oh}),ch=jl({id:"artkal-s-community",brand:"Artkal",name:"Artkal S 5 mm（199 色）",source:"https://github.com/maxcleme/beadcolors/blob/master/raw/artkal_s.csv",csv:ih}),fh={id:"perler-standard-2025",brand:"Perler",name:"Perler 标准色（屏幕参考）",source:"https://perler.com/content/uploaded_images/Perler_Bead-Color-Reference_2025.pdf",colors:[["white","White","白色","#F4F4EF"],["cream","Creme","奶油色","#F1E4C2"],["toasted-marshmallow","Toasted Marshmallow","烤棉花糖","#D8C5B4"],["sand","Sand","沙色","#D8B58A"],["tan","Tan","棕褐色","#B8875E"],["light-brown","Light Brown","浅棕色","#9A6547"],["brown","Brown","棕色","#613E2C"],["dark-brown","Dark Brown","深棕色","#3D2924"],["apricot","Apricot","杏色","#F3C3A5"],["peach","Peach","蜜桃色","#F3B38F"],["blush","Blush","腮红色","#ED927E"],["light-pink","Light Pink","浅粉色","#F3B7CD"],["bubblegum","Bubblegum","泡泡糖粉","#EE78A8"],["pink","Pink","粉色","#DA4E91"],["raspberry","Raspberry","覆盆子色","#A93064"],["plum","Plum","李子色","#73355E"],["red","Red","红色","#D83B3E"],["cranapple","Cranapple","蔓越莓红","#9D2735"],["hot-coral","Hot Coral","珊瑚红","#F06055"],["rust","Rust","铁锈红","#A9472D"],["brick","Brick","砖红色","#994D3A"],["orange","Orange","橙色","#F37932"],["cheddar","Cheddar","切达橙","#F5A623"],["butterscotch","Butterscotch","奶糖色","#D88B2C"],["rich-butter","Rich Butter","浓黄油色","#EBC65E"],["yellow","Yellow","黄色","#F5D547"],["pastel-yellow","Pastel Yellow","粉彩黄","#F5E88A"],["prickly-pear","Prickly Pear","仙人掌黄绿","#C8D746"],["kiwi-lime","Kiwi Lime","奇异果绿","#8BC34A"],["pastel-green","Pastel Green","粉彩绿","#A8D69B"],["light-green","Light Green","浅绿色","#70C486"],["green","Green","绿色","#3C9B61"],["shamrock","Shamrock","三叶草绿","#16845B"],["dark-green","Dark Green","深绿色","#236044"],["evergreen","Evergreen","常青绿","#194638"],["sage","Sage","鼠尾草绿","#94A58C"],["parrot-green","Parrot Green","鹦鹉绿","#31A88A"],["toothpaste","Toothpaste","薄荷色","#7DCEBE"],["turquoise","Turquoise","青绿色","#27A8B5"],["lagoon","Lagoon","潟湖蓝","#268F91"],["pastel-blue","Pastel Blue","粉彩蓝","#A7D7E8"],["light-blue","Light Blue","浅蓝色","#5CB9DD"],["periwinkle-blue","Periwinkle Blue","长春花蓝","#7587C9"],["blueberry-cream","Blueberry Cream","蓝莓奶油","#8EA7D4"],["cobalt","Cobalt","钴蓝色","#2866A3"],["dark-blue","Dark Blue","深蓝色","#264B84"],["midnight","Midnight","午夜蓝","#252C57"],["pastel-lavender","Pastel Lavender","粉彩薰衣草","#C1A7D7"],["purple","Purple","紫色","#76519B"],["magenta","Magenta","品红色","#B63F8D"],["light-grey","Light Grey","浅灰色","#C8C8C2"],["mist","Mist","雾灰色","#AEB8B5"],["grey","Grey","灰色","#858681"],["stone","Stone","石色","#77756F"],["dark-grey","Dark Grey","深灰色","#50524F"],["black","Black","黑色","#242424"]].map(([e,t,n,r])=>({id:e,code:t,name:n,hex:r}))},Mn=[lh,ah,uh,ch,fh];function dh(e){return Mn.find(t=>t.id===e)||Mn[0]}function Qt(e){const t=Number.parseInt(e.replace("#",""),16);return{r:t>>16&255,g:t>>8&255,b:t&255}}function Kr(e){const t=e/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4}function Rr({r:e,g:t,b:n}){const r=Kr(e),l=Kr(t),s=Kr(n),o=(r*.4124+l*.3576+s*.1805)/.95047,a=r*.2126+l*.7152+s*.0722,i=(r*.0193+l*.1192+s*.9505)/1.08883,c=p=>p>.008856?Math.cbrt(p):7.787*p+16/116,u=c(o),f=c(a),h=c(i);return{l:116*f-16,a:500*(u-f),b:200*(f-h)}}function wi(e){return e.map((t,n)=>({...t,index:n,rgb:Qt(t.hex),lab:Rr(Qt(t.hex))}))}function Vl(e,t){const n=se=>se*Math.PI/180,r=se=>se*180/Math.PI,l=Math.hypot(e.a,e.b),s=Math.hypot(t.a,t.b),o=(l+s)/2,a=.5*(1-Math.sqrt(o**7/(o**7+25**7))),i=(1+a)*e.a,c=(1+a)*t.a,u=Math.hypot(i,e.b),f=Math.hypot(c,t.b),h=(se,xe)=>{const he=r(Math.atan2(xe,se));return he>=0?he:he+360},p=h(i,e.b),y=h(c,t.b),w=t.l-e.l,A=f-u;let x=y-p;u*f===0?x=0:x>180?x-=360:x<-180&&(x+=360);const k=2*Math.sqrt(u*f)*Math.sin(n(x/2)),B=(e.l+t.l)/2,S=(u+f)/2;let _=p+y;u*f===0?_=p+y:Math.abs(p-y)<=180?_/=2:_<360?_=(_+360)/2:_=(_-360)/2;const L=1-.17*Math.cos(n(_-30))+.24*Math.cos(n(2*_))+.32*Math.cos(n(3*_+6))-.2*Math.cos(n(4*_-63)),z=1+.015*(B-50)**2/Math.sqrt(20+(B-50)**2),te=1+.045*S,de=1+.015*S*L,ce=-2*Math.sqrt(S**7/(S**7+25**7))*Math.sin(n(60*Math.exp(-(((_-275)/25)**2)))),_e=w/z,Ae=A/te,Oe=k/de;return Math.sqrt(_e**2+Ae**2+Oe**2+ce*Ae*Oe)}function hh(e,t){const n=Rr(e),r=Math.hypot(n.a,n.b);let l=0,s=Number.POSITIVE_INFINITY;for(const o of t){const a=Math.hypot(o.lab.a,o.lab.b),i=r>7&&a<r*.32?(r-a)*.18:0,c=Vl(n,o.lab)+i;c<s&&(s=c,l=o.index)}return l}function ph(e,t,n,r,l,s={}){var f,h;if(!e||!(t!=null&&t.length))return;const o=s.cellSize||18,a=s.showGrid!==!1,i=s.showCodes===!0,c=s.mode||"pixel";e.width=n*o,e.height=r*o;const u=e.getContext("2d");u.clearRect(0,0,e.width,e.height),u.fillStyle=s.background||"#f4f1eb",u.fillRect(0,0,e.width,e.height);for(let p=0;p<r;p+=1)for(let y=0;y<n;y+=1){const w=t[p*n+y];if(w<0||!l[w])continue;const{hex:A}=l[w],x=y*o+o/2,k=p*o+o/2;if(c==="pixel"||o<9)u.fillStyle=A,u.fillRect(y*o,p*o,o,o);else{u.beginPath(),u.arc(x,k,o*.42,0,Math.PI*2),u.fillStyle=A,u.fill();const B=Qt(A),S=(B.r*299+B.g*587+B.b*114)/1e3;u.beginPath(),u.arc(x,k,Math.max(1,o*.105),0,Math.PI*2),u.fillStyle=S>170?"rgba(40,36,32,.24)":"rgba(255,255,255,.45)",u.fill()}}if(i&&o>=12){u.textAlign="center",u.textBaseline="middle",u.font=`700 ${Math.max(6,Math.floor(o*.34))}px system-ui, sans-serif`;for(let p=0;p<r;p+=1)for(let y=0;y<n;y+=1){const w=t[p*n+y],A=l[w];if(!A)continue;const x=Qt(A.hex),k=(x.r*299+x.g*587+x.b*114)/1e3;u.fillStyle=k>158?"#25221f":"#ffffff",u.fillText(A.code,y*o+o/2,p*o+o/2+.5)}}if(a){u.lineWidth=1;for(let p=0;p<=n;p+=1)u.beginPath(),u.moveTo(p*o+.5,0),u.lineTo(p*o+.5,e.height),u.strokeStyle=p%10===0?"rgba(35,33,30,.42)":p%5===0?"rgba(35,33,30,.23)":"rgba(35,33,30,.09)",u.stroke();for(let p=0;p<=r;p+=1)u.beginPath(),u.moveTo(0,p*o+.5),u.lineTo(e.width,p*o+.5),u.strokeStyle=p%10===0?"rgba(35,33,30,.42)":p%5===0?"rgba(35,33,30,.23)":"rgba(35,33,30,.09)",u.stroke()}if(((f=s.symmetry)!=null&&f.horizontal||(h=s.symmetry)!=null&&h.vertical)&&(u.save(),u.setLineDash([6,4]),u.strokeStyle="rgba(218, 92, 108, .9)",u.lineWidth=1.5,s.symmetry.horizontal&&(u.beginPath(),u.moveTo(e.width/2,0),u.lineTo(e.width/2,e.height),u.stroke()),s.symmetry.vertical&&(u.beginPath(),u.moveTo(0,e.height/2),u.lineTo(e.width,e.height/2),u.stroke()),u.restore()),s.selection){const p=s.selection,y=Math.min(p.startColumn,p.endColumn),w=Math.min(p.startRow,p.endRow),A=Math.abs(p.endColumn-p.startColumn)+1,x=Math.abs(p.endRow-p.startRow)+1;u.save(),u.setLineDash([5,3]),u.lineWidth=2,u.strokeStyle="#da5c6c",u.strokeRect(y*o+1,w*o+1,A*o-2,x*o-2),u.restore()}}function zn(e,t){const n=new Map;for(const r of e||[])r>=0&&n.set(r,(n.get(r)||0)+1);return[...n.entries()].map(([r,l])=>({...t[r],index:r,count:l})).sort((r,l)=>l.count-r.count)}function Ci(e,t,n){return e?{left:Math.max(0,Math.min(e.startColumn,e.endColumn)),top:Math.max(0,Math.min(e.startRow,e.endRow)),right:Math.min(t-1,Math.max(e.startColumn,e.endColumn)),bottom:Math.min(n-1,Math.max(e.startRow,e.endRow))}:{left:0,top:0,right:t-1,bottom:n-1}}function Ul(e,t,n,r={}){const l=Math.floor(e/t),s=e%t,o=new Set([e]);return r.horizontal&&o.add(l*t+(t-s-1)),r.vertical&&o.add((n-l-1)*t+s),r.horizontal&&r.vertical&&o.add((n-l-1)*t+(t-s-1)),[...o]}function mh(e,t,n,r,l,s={}){if(r<0||r>=e.length)return new Int16Array(e);const o=e[r];if(o===l)return new Int16Array(e);const a=new Int16Array(e),i=new Uint8Array(e.length),c=[r];i[r]=1;for(let u=0;u<c.length;u+=1){const f=c[u],h=Math.floor(f/t),p=f%t;for(const w of Ul(f,t,n,s))a[w]=l;const y=[p>0?f-1:-1,p<t-1?f+1:-1,h>0?f-t:-1,h<n-1?f+t:-1];for(const w of y)w>=0&&!i[w]&&e[w]===o&&(i[w]=1,c.push(w))}return a}function vh(e,t,n,r,l,s={}){const o=new Int16Array(e),{left:a,top:i,right:c,bottom:u}=Ci(r,t,n);for(let f=i;f<=u;f+=1)for(let h=a;h<=c;h+=1){const p=f*t+h;for(const y of Ul(p,t,n,s))o[y]=l}return o}function Ws(e,t,n){const r=new Int16Array(e);if(t===n)return r;for(let l=0;l<r.length;l+=1)r[l]===t&&(r[l]=n);return r}function gh(e,t,n,r,l=null){const s=new Int16Array(e),{left:o,top:a,right:i,bottom:c}=Ci(l,t,n);for(let u=a;u<=c;u+=1)for(let f=o;f<=i;f+=1){const h=u*t+f,p=r==="horizontal"?i-(f-o):f,y=r==="vertical"?c-(u-a):u;s[y*t+p]=e[h]}return s}function Pi(e,t,n){const r=zn(e,t),l=Math.max(2,Number(n)||t.length);if(r.length<=l)return new Int16Array(e);const s=r.slice(0,l),o=wi(s),a=new Map;for(const c of r.slice(l)){const u=Rr(Qt(c.hex));let f=s[0].index,h=Number.POSITIVE_INFINITY;for(const p of o){const y=Vl(u,p.lab);y<h&&(h=y,f=s[p.index].index)}a.set(c.index,f)}const i=new Int16Array(e);for(let c=0;c<i.length;c+=1)a.has(i[c])&&(i[c]=a.get(i[c]));return i}function yh(e,t,n,r=1){let l=new Int16Array(e);const s=[-1,0,1];for(let o=0;o<r;o+=1){const a=l,i=new Int16Array(a);for(let c=0;c<n;c+=1)for(let u=0;u<t;u+=1){const f=c*t+u,h=a[f];if(h<0)continue;const p=new Map;let y=0;for(const x of s)for(const k of s){if(!k&&!x)continue;const B=u+k,S=c+x;if(B<0||S<0||B>=t||S>=n)continue;const _=a[S*t+B];_<0||(_===h&&(y+=1),p.set(_,(p.get(_)||0)+1))}const[w,A]=[...p.entries()].sort((x,k)=>k[1]-x[1])[0]||[];y<=1&&w!==void 0&&w!==h&&A>=4&&(i[f]=w)}l=i}return l}function bh(e,t,n=8,r=6){const l=zn(e,t),s=new Map(l.map(a=>[a.index,Rr(Qt(a.hex))])),o=[];for(let a=0;a<l.length;a+=1)for(let i=a+1;i<l.length;i+=1){const c=l[a],u=l[i],f=Vl(s.get(c.index),s.get(u.index));if(f>r)continue;const h=c.count<=u.count?c:u,p=h===c?u:c;o.push({source:h,target:p,distance:f})}return o.sort((a,i)=>a.distance-i.distance).slice(0,n)}async function wh(e){return"createImageBitmap"in window?createImageBitmap(e,{imageOrientation:"from-image"}):new Promise((t,n)=>{const r=URL.createObjectURL(e),l=new Image;l.onload=()=>{URL.revokeObjectURL(r),t(l)},l.onerror=()=>{URL.revokeObjectURL(r),n(new Error("无法读取这张图片"))},l.src=r})}function Ai(e,t,n,r=1,l=50,s=50){const o=e/t;let a=e,i=t;o>n?a=t*n:i=e/n,a/=r,i/=r;const c=a/2+(e-a)*(l/100),u=i/2+(t-i)*(s/100);return{x:Math.max(0,Math.min(e-a,c-a/2)),y:Math.max(0,Math.min(t-i,u-i/2)),width:a,height:i}}function Ch(e,t,n){if(!e||!t)return;const{columns:r,rows:l,zoom:s,focusX:o,focusY:a}=n,i=r/l;e.width=520,e.height=260;const c=Ai(t.width,t.height,i,s,o,a),u=e.getContext("2d");u.fillStyle="#23211e",u.fillRect(0,0,e.width,e.height);const f=Math.min(e.width,e.height*i),h=f/i,p=(e.width-f)/2,y=(e.height-h)/2;u.imageSmoothingEnabled=!0,u.imageSmoothingQuality="high",u.drawImage(t,c.x,c.y,c.width,c.height,p,y,f,h),u.strokeStyle="rgba(255,255,255,.55)",u.strokeRect(p+.5,y+.5,f-1,h-1)}function Ph(e,t,n){const{columns:r,rows:l,zoom:s,focusX:o,focusY:a}=t,i=4,c=document.createElement("canvas");c.width=r*i,c.height=l*i;const u=c.getContext("2d"),f=Ai(e.width,e.height,r/l,s,o,a);u.imageSmoothingEnabled=!0,u.imageSmoothingQuality="high",u.drawImage(e,f.x,f.y,f.width,f.height,0,0,c.width,c.height);const h=document.createElement("canvas");h.width=r,h.height=l;const p=h.getContext("2d",{willReadFrequently:!0});p.imageSmoothingEnabled=!0,p.imageSmoothingQuality="high",p.clearRect(0,0,r,l),p.drawImage(c,0,0,r,l);const y=p.getImageData(0,0,r,l).data,w=Ah(y,r,l,t),A=wi(n),x=new Int16Array(r*l);for(let k=0;k<x.length;k+=1){const B=k*4;x[k]=y[B+3]<48?-1:hh({r:w[B],g:w[B+1],b:w[B+2]},A)}return Pi(x,n,t.maxColors)}function Ah(e,t,n,r){const l=(r.brightness??100)/100,s=(r.contrast??100)/100,o=(r.saturation??100)/100,a=(r.detail??0)/100,i=new Float32Array(e.length),c=h=>Math.max(0,Math.min(255,h));for(let h=0;h<e.length;h+=4){const p=e[h],y=e[h+1],w=e[h+2],A=p*.2126+y*.7152+w*.0722;i[h]=c(((A+(p-A)*o-128)*s+128)*l),i[h+1]=c(((A+(y-A)*o-128)*s+128)*l),i[h+2]=c(((A+(w-A)*o-128)*s+128)*l),i[h+3]=e[h+3]}if(a<=0)return i;const u=new Float32Array(i),f=[[-1,0],[1,0],[0,-1],[0,1]];for(let h=0;h<n;h+=1)for(let p=0;p<t;p+=1){const y=(h*t+p)*4;if(i[y+3]<48)continue;const w=[0,0,0];let A=0;for(const[x,k]of f){const B=p+x,S=h+k;if(B<0||S<0||B>=t||S>=n)continue;const _=(S*t+B)*4;i[_+3]<48||(w[0]+=i[_],w[1]+=i[_+1],w[2]+=i[_+2],A+=1)}if(A)for(let x=0;x<3;x+=1){const k=w[x]/A;u[y+x]=c(i[y+x]+(i[y+x]-k)*a)}}return u}const Yr=595.28,Jr=841.89;function xi(e,t){const n=URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=t,r.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}function Si(e){const{r:t,g:n,b:r}=Qt(e);return(t*299+n*587+r*114)/1e3>158?"#26231f":"#ffffff"}function yn(e,t,n,r,l,s="#27241f"){e.font=l,e.fillStyle=s,e.textAlign="center",e.textBaseline="middle",e.fillText(t,n,r)}function ki(e,t,n,r,l={}){const s=l.startColumn||0,o=l.startRow||0,a=Math.min(t,l.endColumn??t),i=Math.min(n,l.endRow??n),c=a-s,u=i-o,f=l.cellSize||28,h=Math.max(30,Math.round(f*1.2)),p=l.titleHeight??58,y=l.footerHeight??26,w=document.createElement("canvas");w.width=h*2+c*f,w.height=p+h*2+u*f+y;const A=w.getContext("2d");A.fillStyle="#fbfaf7",A.fillRect(0,0,w.width,w.height),A.textAlign="left",A.textBaseline="middle",A.fillStyle="#24211d",A.font="700 20px system-ui, sans-serif",A.fillText(l.title||`${t} × ${n} 拼豆图纸`,h,p/2-4),l.subtitle&&(A.textAlign="right",A.font="12px system-ui, sans-serif",A.fillStyle="#6f6961",A.fillText(l.subtitle,w.width-h,p/2-4));const x=h,k=p+h,B=Math.max(7,Math.min(12,Math.floor(f*.36)));for(let S=o;S<i;S+=1)for(let _=s;_<a;_+=1){const L=_-s,z=S-o,te=x+L*f,de=k+z*f,ce=r[e[S*t+_]];A.fillStyle=(ce==null?void 0:ce.hex)||"#ffffff",A.fillRect(te,de,f,f),ce&&yn(A,ce.code,te+f/2,de+f/2+.5,`700 ${B}px system-ui, sans-serif`,Si(ce.hex))}for(let S=0;S<=c;S+=1){const _=s+S,L=x+S*f+.5;A.beginPath(),A.moveTo(L,k),A.lineTo(L,k+u*f),A.strokeStyle=_%10===0?"#4d4943":_%5===0?"#77716a":"#c8c4bd",A.lineWidth=_%10===0?1.5:1,A.stroke()}for(let S=0;S<=u;S+=1){const _=o+S,L=k+S*f+.5;A.beginPath(),A.moveTo(x,L),A.lineTo(x+c*f,L),A.strokeStyle=_%10===0?"#4d4943":_%5===0?"#77716a":"#c8c4bd",A.lineWidth=_%10===0?1.5:1,A.stroke()}for(let S=0;S<c;S+=1){const _=String(s+S+1),L=x+S*f+f/2;yn(A,_,L,k-h/2,"600 11px system-ui, sans-serif","#56514b"),yn(A,_,L,k+u*f+h/2,"600 11px system-ui, sans-serif","#56514b")}for(let S=0;S<u;S+=1){const _=String(o+S+1),L=k+S*f+f/2;yn(A,_,x-h/2,L,"600 11px system-ui, sans-serif","#56514b"),yn(A,_,x+c*f+h/2,L,"600 11px system-ui, sans-serif","#56514b")}return w}function _i(e,t,n){const{x:r,y:l,width:s,columns:o=5,rowHeight:a=42}=n,i=10,c=(s-i*(o-1))/o;return t.forEach((u,f)=>{const h=f%o,p=Math.floor(f/o),y=r+h*(c+i),w=l+p*a;e.fillStyle="#ffffff",e.strokeStyle="#d4d0c9",e.lineWidth=1,e.fillRect(y,w,c,a-8),e.strokeRect(y+.5,w+.5,c-1,a-9);const A=Math.min(58,Math.max(42,c*.28));e.fillStyle=u.hex,e.fillRect(y,w,A,a-8),e.textBaseline="middle",e.font="700 12px system-ui, sans-serif",e.fillStyle=Si(u.hex),e.textAlign="center",e.fillText(u.code,y+A/2,w+(a-8)/2),e.textAlign="right",e.fillStyle="#37332e",e.font="600 12px system-ui, sans-serif",e.fillText(String(u.count),y+c-10,w+(a-8)/2)}),Math.ceil(t.length/o)*a}function xh(e,t,n,r,l={}){const s=zn(e,r),o=Math.max(22,Math.min(30,Math.floor(3600/Math.max(t,n)))),a=ki(e,t,n,r,{cellSize:o,title:`${t} × ${n} 拼豆图纸`,subtitle:l.paletteName||"",footerHeight:0}),i=Math.max(4,Math.min(16,Math.floor((a.width-54)/200))),c=Math.ceil(s.length/i),u=82,f=Math.max(90,c*42),h=document.createElement("canvas");h.width=a.width,h.height=a.height+u+f+26;const p=h.getContext("2d");p.fillStyle="#fbfaf7",p.fillRect(0,0,h.width,h.height),p.drawImage(a,0,0);const y=a.height+34;p.textAlign="left",p.textBaseline="middle",p.fillStyle="#24211d",p.font="700 22px system-ui, sans-serif";const w=s.reduce((A,x)=>A+x.count,0);return p.fillText(`拼豆数量统计（${w} 颗）`,32,y),p.font="12px system-ui, sans-serif",p.fillStyle="#6f6961",p.textAlign="right",p.fillText(`${s.length} 种颜色`,h.width-32,y),_i(p,s,{x:32,y:a.height+u,width:h.width-64,columns:i}),h}function Sh(e,t,n=""){const r=zn(e,t),l=96,s=[];for(let o=0;o<r.length;o+=l){const a=r.slice(o,o+l),i=document.createElement("canvas");i.width=900,i.height=1273;const c=i.getContext("2d");c.fillStyle="#fbfaf7",c.fillRect(0,0,i.width,i.height),c.fillStyle="#24211d",c.textAlign="left",c.textBaseline="middle",c.font="700 30px system-ui, sans-serif";const u=r.reduce((f,h)=>f+h.count,0);c.fillText(`拼豆数量统计（${u} 颗）`,52,62),c.font="15px system-ui, sans-serif",c.fillStyle="#6f6961",c.fillText(`${n} · ${r.length} 种颜色`,52,101),_i(c,a,{x:52,y:142,width:796,columns:4,rowHeight:43}),c.textAlign="right",c.font="14px system-ui, sans-serif",c.fillText(`统计表 ${Math.floor(o/l)+1} / ${Math.ceil(r.length/l)}`,848,1230),s.push(i)}return s}function kh(e){const t=atob(e.split(",")[1]),n=new Uint8Array(t.length);for(let r=0;r<t.length;r+=1)n[r]=t.charCodeAt(r);return n}function _h(e){const t=new TextEncoder,n=new Map,r=e.map((c,u)=>`${3+u*3} 0 R`).join(" ");n.set(1,t.encode("<< /Type /Catalog /Pages 2 0 R >>")),n.set(2,t.encode(`<< /Type /Pages /Kids [${r}] /Count ${e.length} >>`)),e.forEach((c,u)=>{const f=3+u*3,h=f+1,p=f+2,y=kh(c.toDataURL("image/jpeg",.92)),w=Math.min((Yr-30)/c.width,(Jr-30)/c.height),A=c.width*w,x=c.height*w,k=(Yr-A)/2,B=(Jr-x)/2,S=t.encode(`q
${A.toFixed(2)} 0 0 ${x.toFixed(2)} ${k.toFixed(2)} ${B.toFixed(2)} cm
/Im${u} Do
Q`);n.set(f,t.encode(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${Yr} ${Jr}] /Resources << /XObject << /Im${u} ${h} 0 R >> >> /Contents ${p} 0 R >>`));const _=t.encode(`<< /Type /XObject /Subtype /Image /Width ${c.width} /Height ${c.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${y.length} >>
stream
`),L=t.encode(`
endstream`),z=new Uint8Array(_.length+y.length+L.length);z.set(_),z.set(y,_.length),z.set(L,_.length+y.length),n.set(h,z);const te=t.encode(`<< /Length ${S.length} >>
stream
`),de=t.encode(`
endstream`),ce=new Uint8Array(te.length+S.length+de.length);ce.set(te),ce.set(S,te.length),ce.set(de,te.length+S.length),n.set(p,ce)});const l=[t.encode(`%PDF-1.4
%âãÏÓ
`)],s=[0];let o=l[0].length;for(let c=1;c<=n.size;c+=1){s[c]=o;const u=t.encode(`${c} 0 obj
`),f=t.encode(`
endobj
`);l.push(u,n.get(c),f),o+=u.length+n.get(c).length+f.length}const a=o,i=[`xref
0 ${n.size+1}
`,`0000000000 65535 f 
`];for(let c=1;c<=n.size;c+=1)i.push(`${String(s[c]).padStart(10,"0")} 00000 n 
`);return i.push(`trailer
<< /Size ${n.size+1} /Root 1 0 R >>
startxref
${a}
%%EOF`),l.push(t.encode(i.join(""))),new Blob(l,{type:"application/pdf"})}function Eh(e,t,n,r,l,s={}){if(!(e!=null&&e.length))return;xh(e,t,n,r,s).toBlob(a=>{a&&xi(a,l)},"image/png")}function Mh(e,t,n,r,l,s={}){if(!(e!=null&&e.length))return;const o=[],a=Math.max(8,Number(s.boardSize)||29),i=a,c=Math.ceil(t/a),u=Math.ceil(n/i);for(let f=0;f<u;f+=1)for(let h=0;h<c;h+=1)o.push(ki(e,t,n,r,{startColumn:h*a,endColumn:(h+1)*a,startRow:f*i,endRow:(f+1)*i,cellSize:32,title:`${t} × ${n} 拼豆图纸`,subtitle:`区域 ${h+1}/${c} · ${f+1}/${u}`}));o.push(...Sh(e,r,s.paletteName||"")),xi(_h(o),l)}const Ei=1;function Rh({cells:e,columns:t,rows:n,paletteId:r,settings:l,inventory:s}){return{type:"sakura-tools/pixel-beads",version:Ei,savedAt:new Date().toISOString(),paletteId:r,grid:{columns:t,rows:n,cells:Array.from(e)},settings:{beadSize:l.beadSize,detail:l.detail,saturation:l.saturation,contrast:l.contrast,brightness:l.brightness,maxColors:l.maxColors},inventory:{...s}}}function Th(e,t){var a,i;const n=JSON.parse(e);if((n==null?void 0:n.type)!=="sakura-tools/pixel-beads"||n.version!==Ei)throw new Error("不是受支持的 Sakura Tools 拼豆工程文件");const r=t.find(c=>c.id===n.paletteId);if(!r)throw new Error("工程使用的色板在当前版本中不可用");const l=Number((a=n.grid)==null?void 0:a.columns),s=Number((i=n.grid)==null?void 0:i.rows);if(!Number.isInteger(l)||!Number.isInteger(s)||l<8||s<8||l>150||s>150)throw new Error("工程网格尺寸无效");if(!Array.isArray(n.grid.cells)||n.grid.cells.length!==l*s)throw new Error("工程网格数据不完整");const o=new Int16Array(n.grid.cells);if([...o].some(c=>c<-1||c>=r.colors.length))throw new Error("工程中包含无效色号");return{...n,palette:r,columns:l,rows:s,cells:o}}function qs(e,t,n="application/json"){const r=new Blob([e],{type:n}),l=URL.createObjectURL(r),s=document.createElement("a");s.href=l,s.download=t,s.click(),setTimeout(()=>URL.revokeObjectURL(l),1e3)}function Bh(e,t){const n=[["色号","颜色","需要","已有","缺少"]];for(const r of e){const l=Math.max(0,Number(t[r.id])||0);n.push([r.code,r.name,r.count,l,Math.max(0,r.count-l)])}return`\uFEFF${n.map(r=>r.map(l=>`"${String(l).replaceAll('"','""')}"`).join(",")).join(`\r
`)}`}const Nh={class:"bead-studio"},$h={class:"upload-symbol"},Oh=["disabled"],Ih={key:0,class:"error-message"},Lh={class:"bead-flow","aria-label":"工作流程"},Dh={class:"bead-workbench"},Hh={class:"bead-sidebar bead-source-panel"},Fh={class:"bead-panel-heading"},Gh={key:1,class:"project-preview"},zh=["title"],jh={key:2,class:"error-message"},Vh={class:"bead-field-row"},Uh={class:"bead-size-presets","aria-label":"常用方形网格预设"},Wh=["onClick"],qh={class:"bead-range"},Kh={class:"bead-range"},Yh={class:"bead-range"},Jh={class:"bead-range compact-range"},Xh={class:"bead-range compact-range"},Qh={class:"bead-range compact-range"},Zh={class:"bead-range compact-range"},e2={class:"bead-select"},t2={class:"bead-optimize-actions"},n2=["disabled"],r2=["disabled"],l2={class:"bead-segmented"},s2={class:"bead-select"},o2=["value"],i2=["disabled"],a2={class:"bead-editor-panel"},u2={class:"bead-toolbar"},c2={class:"bead-tool-group","aria-label":"绘制工具"},f2={class:"bead-tool-group compact"},d2=["disabled","title"],h2=["disabled","title"],p2={class:"canvas-zoom"},m2={class:"preview-toggle","aria-label":"预览样式"},v2={class:"bead-editor-actions"},g2={class:"bead-canvas-status"},y2={class:"bead-sidebar bead-color-panel"},b2={class:"bead-panel-heading"},w2={class:"bead-palette","aria-label":"拼豆色板"},C2=["title","onClick"],P2={class:"bead-materials"},A2={class:"bead-usage"},x2=["onClick","onKeydown"],S2={title:"需要数量"},k2=["onUpdate:modelValue"],_2={key:0},E2={key:1,class:"enough"},M2={key:0,class:"merge-suggestions"},R2=["onClick"],T2={class:"bead-export"},B2={class:"project-actions"},N2={class:"local-processing"},$2={__name:"PixelBeadsTool",setup(e){const t=G(null),n=G(null),r=G(null),l=G(null),s=G(null),o=rl(null),a=G(""),i=G(""),c=G(!1),u=G(!1),f=rl(new Int16Array),h=Gt({columns:0,rows:0}),p=Gt({columns:48,rows:48,zoom:1,focusX:50,focusY:50,detail:32,saturation:106,contrast:104,brightness:100,maxColors:0,beadSize:5,paletteId:Mn[0].id}),y=G("brush"),w=G(0),A=G(16),x=G(!0),k=G(!1),B=G("pixel"),S=G(null),_=Gt({horizontal:!1,vertical:!1}),L=Gt({}),z=G([]),te=G([]);let de=null,ce=-1,_e=null,Ae=0;const Oe=[29,48,52,80,100],se=ve(()=>dh(p.paletteId)),xe=ve(()=>zn(f.value,se.value.colors)),he=ve(()=>xe.value.reduce((j,v)=>j+v.count,0)),oe=ve(()=>({width:(h.columns*p.beadSize/10).toFixed(1),height:(h.rows*p.beadSize/10).toFixed(1)})),ue=ve(()=>z.value.length>0),Je=ve(()=>te.value.length>0),Xe=ve(()=>se.value.colors[w.value]),Le=ve(()=>bh(f.value,se.value.colors)),Ne=ve(()=>xe.value.reduce((j,v)=>{const ae=Math.max(0,Number(L[v.id])||0);return j+Math.max(0,v.count-ae)},0));function Qe(){p.columns=Math.max(8,Math.min(150,Number(p.columns)||48)),p.rows=Math.max(8,Math.min(150,Number(p.rows)||48))}function lt(j){p.columns=j,p.rows=j}async function st(j){var v,ae;if(i.value="",!j||!["image/jpeg","image/png","image/webp"].includes(j.type)){i.value="请选择 JPG、PNG 或 WebP 图片";return}if(j.size>12*1024*1024){i.value="图片不能超过 12 MB";return}c.value=!0;try{(ae=(v=o.value)==null?void 0:v.close)==null||ae.call(v),o.value=await wh(j),a.value=j.name,p.zoom=1,p.focusX=50,p.focusY=50,await tt(),U(),F()}catch(pe){i.value=pe.message||"图片读取失败"}finally{c.value=!1}}function De(j){var v;st((v=j.target.files)==null?void 0:v[0]),j.target.value=""}function R(j){var v,ae;u.value=!1,st((ae=(v=j.dataTransfer)==null?void 0:v.files)==null?void 0:ae[0])}function U(){o.value&&(Qe(),Ch(r.value,o.value,p))}function F(){if(o.value){Qe(),c.value=!0;try{const j=Ph(o.value,p,se.value.colors);h.columns=p.columns,h.rows=p.rows,f.value=j,w.value=j.find(v=>v>=0)??0,z.value=[],te.value=[],tt(()=>{m(),Z()})}finally{c.value=!1}}}function K(){ph(l.value,f.value,h.columns,h.rows,se.value.colors,{cellSize:A.value,showGrid:x.value,showCodes:k.value,mode:B.value,selection:S.value,symmetry:_})}function Z(){Ae||(Ae=requestAnimationFrame(()=>{Ae=0,K()}))}function m(){if(!s.value||!h.columns||!h.rows)return;const j=Math.max(240,s.value.clientWidth-56),v=Math.max(240,s.value.clientHeight-56);A.value=Math.max(4,Math.min(25,Math.floor(Math.min(j/h.columns,v/h.rows))))}function g(){z.value=[...z.value.slice(-39),new Int16Array(f.value)],te.value=[]}function C(){ue.value&&(te.value=[new Int16Array(f.value),...te.value.slice(0,39)],f.value=z.value[z.value.length-1],z.value=z.value.slice(0,-1),tt(Z))}function M(){Je.value&&(z.value=[...z.value.slice(-39),new Int16Array(f.value)],f.value=te.value[0],te.value=te.value.slice(1),tt(Z))}function T(j){const v=l.value.getBoundingClientRect(),ae=(j.clientX-v.left)*(l.value.width/v.width),pe=(j.clientY-v.top)*(l.value.height/v.height),$=Math.floor(ae/A.value),ie=Math.floor(pe/A.value);return $<0||ie<0||$>=h.columns||ie>=h.rows?-1:ie*h.columns+$}function P(j){return{column:j%h.columns,row:Math.floor(j/h.columns)}}function b(j){g(),f.value=j,tt(Z)}function E(j){if(j<0||j===ce)return;if(ce=j,y.value==="picker"){const pe=f.value[j];pe>=0&&(w.value=pe,y.value="brush"),de=null;return}const v=y.value==="eraser"?-1:w.value,ae=Ul(j,h.columns,h.rows,_);if(!ae.every(pe=>de[pe]===v)){for(const pe of ae)de[pe]=v;f.value=new Int16Array(de),Z()}}function O(j){var ae,pe;if(!f.value.length)return;j.preventDefault(),(pe=(ae=l.value).setPointerCapture)==null||pe.call(ae,j.pointerId),ce=-1;const v=T(j);if(!(v<0)){if(y.value==="bucket"){b(mh(f.value,h.columns,h.rows,v,w.value,_));return}if(y.value==="replace"){b(Ws(f.value,f.value[v],w.value));return}if(y.value==="rectangle"||y.value==="select"){const $=P(v);_e={startColumn:$.column,startRow:$.row,endColumn:$.column,endRow:$.row},S.value={..._e},y.value==="rectangle"&&g(),Z();return}y.value!=="picker"&&g(),de=new Int16Array(f.value),E(v)}}function N(j){if(!(j.buttons&1))return;const v=T(j);if(_e&&v>=0){const ae=P(v);_e.endColumn=ae.column,_e.endRow=ae.row,S.value={..._e},Z();return}de&&E(v)}function X(){_e&&y.value==="rectangle"&&(f.value=vh(f.value,h.columns,h.rows,_e,w.value,_),S.value=null),_e=null,de=null,ce=-1,Z()}function W(j){f.value.length&&b(gh(f.value,h.columns,h.rows,j,S.value))}function J(){f.value.length&&b(yh(f.value,h.columns,h.rows,2))}function ee(){!f.value.length||!p.maxColors||b(Pi(f.value,se.value.colors,p.maxColors))}function fe(j){b(Ws(f.value,j.source.index,j.target.index))}function Ce(){if(!f.value.length)return;const j=Rh({cells:f.value,columns:h.columns,rows:h.rows,paletteId:se.value.id,settings:p,inventory:L});qs(JSON.stringify(j),`${Ue()}.sakurabeads`)}async function ge(j){var ae,pe,$;const v=(ae=j.target.files)==null?void 0:ae[0];if(j.target.value="",!!v){i.value="";try{const ie=Th(await v.text(),Mn);($=(pe=o.value)==null?void 0:pe.close)==null||$.call(pe),o.value=null,a.value=v.name.replace(/\.sakurabeads$/i,""),p.paletteId=ie.palette.id,p.columns=ie.columns,p.rows=ie.rows,Object.assign(p,ie.settings||{}),h.columns=ie.columns,h.rows=ie.rows,f.value=ie.cells;for(const jn of Object.keys(L))delete L[jn];Object.assign(L,ie.inventory||{}),w.value=ie.cells.find(jn=>jn>=0)??0,S.value=null,z.value=[],te.value=[],await tt(),m(),Z()}catch(ie){i.value=ie.message||"工程文件读取失败"}}}function Re(){qs(Bh(xe.value,L),`${Ue()}-材料清单.csv`,"text/csv;charset=utf-8")}function $e(j){w.value=j}function Ue(){return`${a.value.replace(/\.[^.]+$/,"").replace(/[^a-zA-Z0-9\u4e00-\u9fa5_-]+/g,"-")||"pattern"}-${h.columns}x${h.rows}`}jt(()=>[p.columns,p.rows,p.zoom,p.focusX,p.focusY],()=>tt(U)),jt(()=>p.paletteId,()=>{o.value&&F()}),jt([A,x,k,B,S,()=>_.horizontal,()=>_.vertical],()=>tt(Z));function et(j){var v;!(j.ctrlKey||j.metaKey)||j.key.toLowerCase()!=="z"||["INPUT","SELECT","TEXTAREA"].includes((v=j.target)==null?void 0:v.tagName)||(j.preventDefault(),j.shiftKey?M():C())}return hn(()=>window.addEventListener("keydown",et)),pn(()=>{var j,v;window.removeEventListener("keydown",et),Ae&&cancelAnimationFrame(Ae),(v=(j=o.value)==null?void 0:j.close)==null||v.call(j)}),(j,v)=>{var ae,pe;return q(),ne("div",Nh,[!o.value&&!f.value.length?(q(),ne("div",{key:0,class:le(["bead-upload",{dragging:u.value}]),onDragenter:v[2]||(v[2]=yt($=>u.value=!0,["prevent"])),onDragover:v[3]||(v[3]=yt(()=>{},["prevent"])),onDragleave:v[4]||(v[4]=yt($=>u.value=!1,["prevent"])),onDrop:yt(R,["prevent"])},[d("input",{ref_key:"fileInput",ref:t,type:"file",accept:"image/jpeg,image/png,image/webp",hidden:"",onChange:De},null,544),d("span",$h,[H(I(N1),{size:34,"stroke-width":1.5})]),v[41]||(v[41]=d("p",{class:"bead-kicker"},"LOCAL IMAGE WORKFLOW",-1)),v[42]||(v[42]=d("h2",null,"从一张图片开始",-1)),v[43]||(v[43]=d("p",null,"拖入 JPG、PNG 或 WebP，图片只在当前浏览器中解码与处理。",-1)),d("button",{class:"primary-button",type:"button",disabled:c.value,onClick:v[0]||(v[0]=$=>{var ie;return(ie=t.value)==null?void 0:ie.click()})},[H(I(yl),{size:17}),V(" "+D(c.value?"正在读取…":"选择图片"),1)],8,Oh),d("button",{class:"project-open-button",type:"button",onClick:v[1]||(v[1]=$=>{var ie;return(ie=n.value)==null?void 0:ie.click()})},[H(I(Wr),{size:16}),v[40]||(v[40]=V(" 打开拼豆工程",-1))]),d("input",{ref_key:"projectInput",ref:n,type:"file",accept:".sakurabeads,application/json",hidden:"",onChange:ge},null,544),v[44]||(v[44]=d("small",null,"最大 12 MB · 不上传服务器",-1)),i.value?(q(),ne("p",Ih,D(i.value),1)):Et("",!0)],34)):(q(),ne(Be,{key:1},[d("div",Lh,[v[45]||(v[45]=d("span",{class:"done"},"01 图片",-1)),v[46]||(v[46]=d("i",null,null,-1)),v[47]||(v[47]=d("span",{class:"done"},"02 裁剪",-1)),v[48]||(v[48]=d("i",null,null,-1)),d("span",{class:le({done:f.value.length})},"03 配色",2),v[49]||(v[49]=d("i",null,null,-1)),d("span",{class:le({done:f.value.length})},"04 编辑导出",2)]),d("div",Dh,[d("aside",Hh,[d("div",Fh,[d("span",null,[H(I(vi),{size:15}),v[50]||(v[50]=V(" 图片与网格",-1))]),d("button",{type:"button",onClick:v[5]||(v[5]=$=>{var ie;return(ie=t.value)==null?void 0:ie.click()})},[H(I(zl),{size:13}),v[51]||(v[51]=V(" 换图",-1))]),d("input",{ref_key:"fileInput",ref:t,type:"file",accept:"image/jpeg,image/png,image/webp",hidden:"",onChange:De},null,544)]),o.value?(q(),ne("canvas",{key:0,ref_key:"cropCanvas",ref:r,class:"crop-preview","aria-label":"裁剪预览"},null,512)):(q(),ne("div",Gh,[H(I(Wr),{size:22}),v[52]||(v[52]=d("span",null,"已打开工程网格",-1))])),d("p",{class:"source-name",title:a.value},D(a.value),9,zh),i.value?(q(),ne("p",jh,D(i.value),1)):Et("",!0),d("div",Vh,[d("label",null,[v[53]||(v[53]=V("宽度 ",-1)),me(d("input",{"onUpdate:modelValue":v[6]||(v[6]=$=>p.columns=$),type:"number",min:"8",max:"150"},null,512),[[Ee,p.columns,void 0,{number:!0}]])]),v[55]||(v[55]=d("span",null,"×",-1)),d("label",null,[v[54]||(v[54]=V("高度 ",-1)),me(d("input",{"onUpdate:modelValue":v[7]||(v[7]=$=>p.rows=$),type:"number",min:"8",max:"150"},null,512),[[Ee,p.rows,void 0,{number:!0}]])])]),d("div",Uh,[(q(),ne(Be,null,it(Oe,$=>d("button",{key:$,type:"button",class:le({active:p.columns===$&&p.rows===$}),onClick:ie=>lt($)},D($),11,Wh)),64))]),d("label",qh,[d("span",null,[v[56]||(v[56]=V("裁剪缩放 ",-1)),d("b",null,D(p.zoom.toFixed(1))+"×",1)]),me(d("input",{"onUpdate:modelValue":v[8]||(v[8]=$=>p.zoom=$),type:"range",min:"1",max:"3",step:"0.1"},null,512),[[Ee,p.zoom,void 0,{number:!0}]])]),d("label",Kh,[d("span",null,[v[57]||(v[57]=V("水平取景 ",-1)),d("b",null,D(p.focusX)+"%",1)]),me(d("input",{"onUpdate:modelValue":v[9]||(v[9]=$=>p.focusX=$),type:"range",min:"0",max:"100"},null,512),[[Ee,p.focusX,void 0,{number:!0}]])]),d("label",Yh,[d("span",null,[v[58]||(v[58]=V("垂直取景 ",-1)),d("b",null,D(p.focusY)+"%",1)]),me(d("input",{"onUpdate:modelValue":v[10]||(v[10]=$=>p.focusY=$),type:"range",min:"0",max:"100"},null,512),[[Ee,p.focusY,void 0,{number:!0}]])]),v[68]||(v[68]=d("span",{class:"bead-label"},"成像调整",-1)),d("label",Jh,[d("span",null,[v[59]||(v[59]=V("细节增强 ",-1)),d("b",null,D(p.detail),1)]),me(d("input",{"onUpdate:modelValue":v[11]||(v[11]=$=>p.detail=$),type:"range",min:"0",max:"80"},null,512),[[Ee,p.detail,void 0,{number:!0}]])]),d("label",Xh,[d("span",null,[v[60]||(v[60]=V("饱和度 ",-1)),d("b",null,D(p.saturation)+"%",1)]),me(d("input",{"onUpdate:modelValue":v[12]||(v[12]=$=>p.saturation=$),type:"range",min:"70",max:"140"},null,512),[[Ee,p.saturation,void 0,{number:!0}]])]),d("label",Qh,[d("span",null,[v[61]||(v[61]=V("对比度 ",-1)),d("b",null,D(p.contrast)+"%",1)]),me(d("input",{"onUpdate:modelValue":v[13]||(v[13]=$=>p.contrast=$),type:"range",min:"80",max:"130"},null,512),[[Ee,p.contrast,void 0,{number:!0}]])]),d("label",Zh,[d("span",null,[v[62]||(v[62]=V("亮度 ",-1)),d("b",null,D(p.brightness)+"%",1)]),me(d("input",{"onUpdate:modelValue":v[14]||(v[14]=$=>p.brightness=$),type:"range",min:"80",max:"120"},null,512),[[Ee,p.brightness,void 0,{number:!0}]])]),d("label",e2,[v[64]||(v[64]=d("span",null,"颜色数限制",-1)),me(d("select",{"onUpdate:modelValue":v[15]||(v[15]=$=>p.maxColors=$)},[...v[63]||(v[63]=[d("option",{value:0},"不限颜色",-1),d("option",{value:10},"最多 10 色",-1),d("option",{value:20},"最多 20 色",-1),d("option",{value:30},"最多 30 色",-1),d("option",{value:40},"最多 40 色",-1),d("option",{value:60},"最多 60 色",-1)])],512),[[cr,p.maxColors,void 0,{number:!0}]])]),d("div",t2,[d("button",{type:"button",disabled:!f.value.length||!p.maxColors,onClick:ee},[H(I(Vs),{size:14}),v[65]||(v[65]=V(" 应用限色",-1))],8,n2),d("button",{type:"button",disabled:!f.value.length,onClick:J},[H(I(bi),{size:14}),v[66]||(v[66]=V(" 去除杂点",-1))],8,r2)]),v[69]||(v[69]=d("span",{class:"bead-label"},"拼豆规格",-1)),d("div",l2,[d("button",{type:"button",class:le({active:p.beadSize===5}),onClick:v[16]||(v[16]=$=>p.beadSize=5)},"5 mm",2),d("button",{type:"button",class:le({active:p.beadSize===2.6}),onClick:v[17]||(v[17]=$=>p.beadSize=2.6)},"2.6 mm",2)]),d("label",s2,[v[67]||(v[67]=d("span",null,"品牌色板",-1)),me(d("select",{"onUpdate:modelValue":v[18]||(v[18]=$=>p.paletteId=$)},[(q(!0),ne(Be,null,it(I(Mn),$=>(q(),ne("option",{key:$.id,value:$.id},D($.name),9,o2))),128))],512),[[cr,p.paletteId]])]),d("button",{class:"primary-button bead-generate",type:"button",disabled:c.value||!o.value,onClick:F},[H(I(gl),{size:16}),V(" "+D(c.value?"生成中…":"应用并重新生成"),1)],8,i2),v[70]||(v[70]=d("p",{class:"palette-note"},"品牌色号来自社区校准数据；屏幕颜色与实物、批次可能存在差异。",-1))]),d("section",a2,[d("div",u2,[d("div",c2,[d("button",{type:"button",class:le({active:y.value==="brush"}),title:"画笔",onClick:v[19]||(v[19]=$=>y.value="brush")},[H(I(Af),{size:17}),v[71]||(v[71]=d("span",null,"画笔",-1))],2),d("button",{type:"button",class:le({active:y.value==="eraser"}),title:"橡皮擦",onClick:v[20]||(v[20]=$=>y.value="eraser")},[H(I(z1),{size:17}),v[72]||(v[72]=d("span",null,"擦除",-1))],2),d("button",{type:"button",class:le({active:y.value==="bucket"}),title:"填充连续区域",onClick:v[21]||(v[21]=$=>y.value="bucket")},[H(I(Cf),{size:17}),v[73]||(v[73]=d("span",null,"油漆桶",-1))],2),d("button",{type:"button",class:le({active:y.value==="rectangle"}),title:"拖动填充矩形",onClick:v[22]||(v[22]=$=>y.value="rectangle")},[H(I(jf),{size:17}),v[74]||(v[74]=d("span",null,"矩形",-1))],2),d("button",{type:"button",class:le({active:y.value==="select"}),title:"拖动选择区域，镜像操作将只作用于选区",onClick:v[23]||(v[23]=$=>y.value="select")},[H(I(Gf),{size:17}),v[75]||(v[75]=d("span",null,"选区",-1))],2),d("button",{type:"button",class:le({active:y.value==="replace"}),title:"点击一种现有颜色，将其全部替换成当前选中色",onClick:v[24]||(v[24]=$=>y.value="replace")},[H(I(Mf),{size:17}),v[76]||(v[76]=d("span",null,"替换",-1))],2),d("button",{type:"button",class:le({active:y.value==="picker"}),title:"吸色",onClick:v[25]||(v[25]=$=>y.value="picker")},[H(I(bl),{size:17}),v[77]||(v[77]=d("span",null,"吸色",-1))],2)]),d("div",f2,[d("button",{type:"button",disabled:!ue.value,title:`撤销（${z.value.length} 步历史）`,onClick:C},[H(I(Jf),{size:17})],8,d2),d("button",{type:"button",disabled:!Je.value,title:`重做（${te.value.length} 步历史）`,onClick:M},[H(I(kf),{size:17})],8,h2)]),d("label",p2,[v[78]||(v[78]=V("缩放 ",-1)),me(d("input",{"onUpdate:modelValue":v[26]||(v[26]=$=>A.value=$),type:"range",min:"4",max:"25"},null,512),[[Ee,A.value,void 0,{number:!0}]])]),d("button",{class:"fit-button",type:"button",title:"适应画布",onClick:m},[H(I(mf),{size:15}),v[79]||(v[79]=V(" 适应",-1))]),d("div",m2,[d("button",{type:"button",class:le({active:B.value==="pixel"}),onClick:v[27]||(v[27]=$=>B.value="pixel")},"色块",2),d("button",{type:"button",class:le({active:B.value==="bead"}),onClick:v[28]||(v[28]=$=>B.value="bead")},"拼豆",2)]),d("button",{class:le(["grid-toggle",{active:x.value}]),type:"button",onClick:v[29]||(v[29]=$=>x.value=!x.value)},[H(I(gl),{size:16}),v[80]||(v[80]=V(" 网格",-1))],2)]),d("div",v2,[v[86]||(v[86]=d("span",null,"对称编辑",-1)),d("button",{type:"button",class:le({active:_.horizontal}),onClick:v[30]||(v[30]=$=>_.horizontal=!_.horizontal)},[H(I(vl),{size:14}),v[81]||(v[81]=V(" 左右",-1))],2),d("button",{type:"button",class:le({active:_.vertical}),onClick:v[31]||(v[31]=$=>_.vertical=!_.vertical)},[H(I(ml),{size:14}),v[82]||(v[82]=V(" 上下",-1))],2),v[87]||(v[87]=d("i",null,null,-1)),d("span",null,D(S.value?"镜像选区":"镜像全图"),1),d("button",{type:"button",onClick:v[32]||(v[32]=$=>W("horizontal"))},[H(I(vl),{size:14}),v[83]||(v[83]=V(" 左右",-1))]),d("button",{type:"button",onClick:v[33]||(v[33]=$=>W("vertical"))},[H(I(ml),{size:14}),v[84]||(v[84]=V(" 上下",-1))]),S.value?(q(),ne("button",{key:0,type:"button",onClick:v[34]||(v[34]=$=>S.value=null)},"取消选区")):Et("",!0),d("button",{class:le(["code-toggle",{active:k.value}]),type:"button",title:"单格放大到 12px 以上时显示色号",onClick:v[35]||(v[35]=$=>k.value=!k.value)},[H(I(Vs),{size:14}),v[85]||(v[85]=V(" 格内色号",-1))],2)]),d("div",{ref_key:"canvasViewport",ref:s,class:"bead-canvas-viewport"},[d("canvas",{ref_key:"beadCanvas",ref:l,class:"bead-canvas","aria-label":"拼豆编辑画布",onPointerdown:O,onPointermove:N,onPointerup:X,onPointercancel:X,onPointerleave:X},null,544)],512),d("div",g2,[d("span",null,D(h.columns)+" × "+D(h.rows)+" 颗",1),d("span",null,D(oe.value.width)+" × "+D(oe.value.height)+" cm",1),d("span",null,D(he.value)+" 颗豆",1),d("span",null,"历史 "+D(z.value.length)+" / "+D(te.value.length),1),d("span",null,[d("i",{class:"selected-swatch",style:Ht({background:(ae=Xe.value)==null?void 0:ae.hex})},null,4),V(D((pe=Xe.value)==null?void 0:pe.name),1)])])]),d("aside",y2,[d("div",b2,[d("span",null,[H(I(bl),{size:15}),v[88]||(v[88]=V(" 颜色与用量",-1))]),d("b",null,D(xe.value.length)+" 色",1)]),d("div",w2,[(q(!0),ne(Be,null,it(se.value.colors,($,ie)=>(q(),ne("button",{key:$.id,type:"button",class:le({active:w.value===ie}),style:Ht({"--swatch":$.hex}),title:`${$.name} / ${$.code}`,onClick:jn=>$e(ie)},[...v[89]||(v[89]=[d("span",null,null,-1)])],14,C2))),128))]),d("div",P2,[d("div",{class:le(["material-summary",{complete:Ne.value===0}])},[H(I(js),{size:14}),d("span",null,D(Ne.value?`按库存还缺 ${Ne.value} 颗`:"库存数量充足"),1)],2),d("div",A2,[(q(!0),ne(Be,null,it(xe.value,$=>(q(),ne("div",{key:$.id,class:"bead-usage-row",role:"button",tabindex:"0",onClick:ie=>$e($.index),onKeydown:Ku(ie=>$e($.index),["enter"])},[d("i",{style:Ht({background:$.hex})},null,4),d("span",null,[d("b",null,D($.name),1),d("small",null,D($.code),1)]),d("strong",S2,"需 "+D($.count),1),d("label",{title:"输入已有库存",onClick:v[36]||(v[36]=yt(()=>{},["stop"]))},[v[90]||(v[90]=V("有 ",-1)),me(d("input",{"onUpdate:modelValue":ie=>L[$.id]=ie,type:"number",min:"0"},null,8,k2),[[Ee,L[$.id],void 0,{number:!0}]])]),$.count>(Number(L[$.id])||0)?(q(),ne("em",_2,"缺 "+D($.count-(Number(L[$.id])||0)),1)):(q(),ne("em",E2,"足够"))],40,x2))),128))]),Le.value.length?(q(),ne("details",M2,[d("summary",null,[v[91]||(v[91]=V("颜色合并建议 ",-1)),d("b",null,D(Le.value.length),1)]),(q(!0),ne(Be,null,it(Le.value,$=>(q(),ne("button",{key:`${$.source.id}-${$.target.id}`,type:"button",onClick:ie=>fe($)},[d("i",{style:Ht({background:$.source.hex})},null,4),V(D($.source.code)+" ",1),v[92]||(v[92]=d("span",null,"→",-1)),d("i",{style:Ht({background:$.target.hex})},null,4),V(D($.target.code)+" ",1),d("small",null,"ΔE "+D($.distance.toFixed(1)),1)],8,R2))),128))])):Et("",!0)]),d("div",T2,[v[98]||(v[98]=d("span",{class:"bead-label"},"导出图纸",-1)),d("button",{type:"button",onClick:v[37]||(v[37]=$=>I(Eh)(f.value,h.columns,h.rows,se.value.colors,`${Ue()}.png`,{paletteName:se.value.name}))},[H(I(V1),{size:16}),v[93]||(v[93]=V(" PNG 图片",-1))]),d("button",{type:"button",onClick:v[38]||(v[38]=$=>I(Mh)(f.value,h.columns,h.rows,se.value.colors,`${Ue()}.pdf`,{paletteName:se.value.name,boardSize:29}))},[H(I(gi),{size:16}),v[94]||(v[94]=V(" PDF（29×29 分页）",-1))]),d("button",{type:"button",onClick:Re},[H(I(js),{size:16}),v[95]||(v[95]=V(" 材料清单 CSV",-1))]),v[99]||(v[99]=d("span",{class:"bead-label project-label"},"工程文件",-1)),d("div",B2,[d("button",{type:"button",onClick:Ce},[H(I(Of),{size:15}),v[96]||(v[96]=V(" 保存",-1))]),d("button",{type:"button",onClick:v[39]||(v[39]=$=>{var ie;return(ie=n.value)==null?void 0:ie.click()})},[H(I(Wr),{size:15}),v[97]||(v[97]=V(" 打开",-1))])]),d("input",{ref_key:"projectInput",ref:n,type:"file",accept:".sakurabeads,application/json",hidden:"",onChange:ge},null,544)]),d("p",N2,[H(I(dr),{size:14}),v[100]||(v[100]=V(" 图片与编辑数据仅保留在当前页面",-1))])])])],64))])}}},O2={class:"translation-studio"},I2={class:"translation-languagebar"},L2=["value"],D2=["value"],H2=["disabled"],F2={class:"translation-workbench"},G2={class:"translation-pane source-pane"},z2={class:"translation-pane-heading"},j2={class:"translation-pane result-pane"},V2={class:"translation-pane-heading"},U2=["disabled"],W2=["value","placeholder"],q2={class:"translation-footer"},K2={__name:"TranslateTool",setup(e){const t=[{code:"zh-CN",name:"简体中文"},{code:"zh-TW",name:"繁体中文"},{code:"en",name:"英语"},{code:"ja",name:"日语"},{code:"ko",name:"韩语"},{code:"fr",name:"法语"},{code:"de",name:"德语"},{code:"es",name:"西班牙语"},{code:"ru",name:"俄语"},{code:"it",name:"意大利语"},{code:"pt",name:"葡萄牙语"},{code:"ar",name:"阿拉伯语"},{code:"nl",name:"荷兰语"},{code:"pl",name:"波兰语"}],n=G("auto"),r=G("zh-CN"),l=G(""),s=G(""),o=G(""),a=G(""),i=G(!1),c=G(""),u=G("输入文本后按 Ctrl + Enter 翻译");let f=null;const h=ve(()=>Array.from(l.value).length),p=ve(()=>{var _;return((_=t.find(L=>L.code.toLowerCase()===o.value.toLowerCase()))==null?void 0:_.name)||o.value.toUpperCase()});function y(_){var L;return((L=t.find(z=>z.code===_))==null?void 0:L.name)||_}async function w(){const _=l.value.trim();if(!_||i.value)return;c.value="",u.value="",i.value=!0,f==null||f.abort(),f=new AbortController;const L=setTimeout(()=>f==null?void 0:f.abort(),15e3);try{const z=await fetch("/api/v1/translate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:_,source_lang:n.value,target_lang:r.value}),signal:f.signal}),te=await z.json().catch(()=>({}));if(!z.ok)throw z.status===413?new Error("内容过长，请缩短文本后分段翻译"):z.status===429?new Error("请求较频繁，请稍后再试"):new Error("翻译服务暂时不可用，请稍后重试");s.value=te.text||"",o.value=te.detected_source||"",a.value=te.provider||"",u.value=`${a.value} · ${h.value} 字符`}catch(z){c.value=z.name==="AbortError"?"翻译请求超时，请检查网络后重试":z.message}finally{clearTimeout(L),i.value=!1}}function A(){const _=n.value==="auto"?o.value||"en":n.value;if(n.value=r.value,r.value=t.some(L=>L.code===_)?_:"en",s.value){const L=l.value;l.value=s.value,s.value=L}o.value="",a.value=""}async function x(){try{l.value=await navigator.clipboard.readText(),u.value="已从剪贴板粘贴"}catch{c.value="浏览器没有授予剪贴板读取权限"}}async function k(){if(s.value)try{await navigator.clipboard.writeText(s.value),u.value="译文已复制"}catch{c.value="复制失败，请手动选择译文"}}function B(){f==null||f.abort(),l.value="",s.value="",o.value="",a.value="",c.value="",u.value="已清空"}function S(_){(_.ctrlKey||_.metaKey)&&_.key==="Enter"&&(_.preventDefault(),w())}return pn(()=>f==null?void 0:f.abort()),(_,L)=>(q(),ne("div",O2,[d("div",I2,[d("label",null,[L[4]||(L[4]=d("span",null,"源语言",-1)),me(d("select",{"onUpdate:modelValue":L[0]||(L[0]=z=>n.value=z)},[L[3]||(L[3]=d("option",{value:"auto"},"自动检测",-1)),(q(),ne(Be,null,it(t,z=>d("option",{key:z.code,value:z.code},D(z.name),9,L2)),64))],512),[[cr,n.value]])]),d("button",{class:"translation-swap",type:"button",title:"交换语言和文本",onClick:A},[H(I(m1),{size:17})]),d("label",null,[L[5]||(L[5]=d("span",null,"目标语言",-1)),me(d("select",{"onUpdate:modelValue":L[1]||(L[1]=z=>r.value=z)},[(q(),ne(Be,null,it(t,z=>d("option",{key:z.code,value:z.code},D(z.name),9,D2)),64))],512),[[cr,r.value]])]),d("button",{class:"translation-primary",type:"button",disabled:i.value||!l.value.trim()||h.value>5e3,onClick:w},[i.value?(q(),Ge(I(ff),{key:0,class:"spin",size:15})):(q(),Ge(I(yi),{key:1,size:15})),V(" "+D(i.value?"翻译中…":"翻译"),1)],8,H2)]),d("div",F2,[d("section",G2,[d("div",z2,[d("span",null,D(n.value==="auto"?o.value?`检测为 ${p.value}`:"自动检测语言":y(n.value)),1),d("div",null,[d("button",{type:"button",title:"从剪贴板粘贴",onClick:x},[H(I(k1),{size:14}),L[6]||(L[6]=V(" 粘贴",-1))]),d("button",{type:"button",title:"清空",onClick:B},[H(I(Kf),{size:14})])])]),me(d("textarea",{"onUpdate:modelValue":L[2]||(L[2]=z=>l.value=z),maxlength:"5000","aria-label":"需要翻译的文本",placeholder:"输入或粘贴需要翻译的内容…",spellcheck:"true",onKeydown:S},null,544),[[Ee,l.value]]),d("footer",null,[L[7]||(L[7]=d("span",null,"Ctrl + Enter",-1)),d("strong",{class:le({over:h.value>5e3})},D(h.value)+" / 5000",3)])]),d("section",j2,[d("div",V2,[d("span",null,D(y(r.value)),1),d("button",{type:"button",disabled:!s.value,title:"复制译文",onClick:k},[H(I(L1),{size:14}),L[8]||(L[8]=V(" 复制",-1))],8,U2)]),d("textarea",{value:s.value,readonly:"","aria-label":"翻译结果",placeholder:i.value?"正在等待翻译服务…":"译文会显示在这里"},null,8,W2),d("footer",null,[d("span",null,D(a.value||"等待翻译"),1),d("strong",null,D(Array.from(s.value).length)+" 字符",1)])])]),d("div",q2,[d("p",{class:le({error:c.value})},D(c.value||u.value),3),d("span",null,[H(I(dr),{size:14}),V(" 文本经本站后端发送给 "+D(a.value||"第三方翻译服务")+"，不会写入数据库",1)])])]))}},Mi=32e6,hr=12e3;async function Y2(e){var n;let t;if("createImageBitmap"in window)try{t=await createImageBitmap(e,{imageOrientation:"from-image"})}catch{t=await Ks(e)}else t=await Ks(e);if(t.width>hr||t.height>hr||t.width*t.height>Mi)throw(n=t.close)==null||n.call(t),new Error("图片分辨率过大，请选择边长不超过 12000 px、总计不超过 3200 万像素的图片");return t}function Ks(e){return new Promise((t,n)=>{const r=URL.createObjectURL(e),l=new Image;l.onload=()=>{URL.revokeObjectURL(r),t(l)},l.onerror=()=>{URL.revokeObjectURL(r),n(new Error("无法读取这张图片"))},l.src=r})}function J2(e,t={}){const n=ep(t.rotation),r=n===90||n===270,l=document.createElement("canvas");l.width=r?e.height:e.width,l.height=r?e.width:e.height;const s=l.getContext("2d");return s.save(),s.translate(l.width/2,l.height/2),s.scale(t.flipX?-1:1,t.flipY?-1:1),s.rotate(n*Math.PI/180),s.drawImage(e,-e.width/2,-e.height/2),s.restore(),l}function Ri(e,t,n,r=1,l=50,s=50){const o=Math.max(.01,n||e/t);let a=e,i=t;e/t>o?a=t*o:i=e/o,a/=Math.max(1,r),i/=Math.max(1,r);const c=(e-a)*pr(l/100,0,1),u=(t-i)*pr(s/100,0,1);return{x:c,y:u,width:a,height:i}}function X2(e,t,n){if(!e||!t)return;const r=n.width/n.height,l=Math.min(980,Math.max(320,n.previewWidth||760)),s=620;let o=l,a=o/r;a>s&&(a=s,o=a*r);const i=Math.min(window.devicePixelRatio||1,2);e.width=Math.max(1,Math.round(o*i)),e.height=Math.max(1,Math.round(a*i)),e.style.aspectRatio=`${n.width} / ${n.height}`;const c=e.getContext("2d");c.setTransform(i,0,0,i,0,0),c.clearRect(0,0,o,a);const u=Ri(t.width,t.height,r,n.zoom,n.focusX,n.focusY);c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high",c.drawImage(t,u.x,u.y,u.width,u.height,0,0,o,a)}async function Q2(e,t){const n=pr(Math.round(t.width),1,hr),r=pr(Math.round(t.height),1,hr);if(n*r>Mi)throw new Error("导出尺寸不能超过 3200 万像素");const l=document.createElement("canvas");l.width=n,l.height=r;const s=l.getContext("2d");t.mimeType==="image/jpeg"&&(s.fillStyle=t.background||"#ffffff",s.fillRect(0,0,n,r));const o=Ri(e.width,e.height,n/r,t.zoom,t.focusX,t.focusY);s.imageSmoothingEnabled=!0,s.imageSmoothingQuality="high",s.drawImage(e,o.x,o.y,o.width,o.height,0,0,n,r);const a=await new Promise(i=>l.toBlob(i,t.mimeType,t.quality));if(!a)throw new Error("浏览器无法导出当前格式");return a}function Z2(e,t){const n=URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=t,r.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}function Xr(e){return!Number.isFinite(e)||e<0?"—":e<1024?`${e} B`:e<1024**2?`${(e/1024).toFixed(1)} KB`:`${(e/1024**2).toFixed(2)} MB`}function ep(e){return(Number(e)%360+360)%360}function pr(e,t,n){return Math.min(n,Math.max(t,e))}const tp={class:"image-drop-symbol"},np=["disabled"],rp={key:0,class:"error-message",role:"status"},lp={key:1,class:"image-studio"},sp={class:"image-commandbar"},op={class:"image-file-summary"},ip={class:"image-transform-tools","aria-label":"图像方向"},ap={class:"image-workbench"},up={class:"image-stage-heading"},cp={class:"image-canvas-wrap"},fp={class:"image-position-controls"},dp={class:"image-settings"},hp={class:"image-preset-grid"},pp=["onClick"],mp={class:"image-size-fields"},vp={class:"image-ratio-lock"},gp={class:"image-format-tabs"},yp=["onClick"],bp={key:0,class:"image-quality"},wp={key:1,class:"image-lossless-note"},Cp={class:"image-export-summary"},Pp=["disabled"],Ap={class:"image-statusbar"},xp={__name:"ImageTool",setup(e){const t=[{value:"original",label:"原图"},{value:"1:1",label:"1 : 1"},{value:"4:3",label:"4 : 3"},{value:"3:2",label:"3 : 2"},{value:"16:9",label:"16 : 9"},{value:"9:16",label:"9 : 16"}],n=[{mime:"image/jpeg",extension:"jpg",label:"JPEG"},{mime:"image/png",extension:"png",label:"PNG"},{mime:"image/webp",extension:"webp",label:"WebP"}],r=G(),l=G(),s=G(),o=G(!1),a=G(""),i=G(0),c=G(0),u=G(0),f=G(0),h=G(!1),p=G(!1),y=G(1),w=G(50),A=G(50),x=G(1200),k=G(800),B=G(1.5),S=G(!0),_=G("original"),L=G("image/jpeg"),z=G(82),te=G(null),de=G(!1),ce=G(!1),_e=G(!1),Ae=G(""),Oe=G("拖动画面调整裁剪位置，滚轮可以缩放");let se,xe,he,oe;const ue=ve(()=>n.find(P=>P.mime===L.value)||n[0]),Je=ve(()=>L.value!=="image/png"),Xe=ve(()=>`${x.value} × ${k.value} px`);async function Le(P){var b;if(P){if(!P.type.startsWith("image/")){Ae.value="请选择图片文件";return}if(P.size>20*1024*1024){Ae.value="图片不能超过 20 MB";return}de.value=!0,Ae.value="";try{const E=await Y2(P);(b=se==null?void 0:se.close)==null||b.call(se),se=E,a.value=P.name,i.value=P.size,c.value=E.width,u.value=E.height,f.value=0,h.value=!1,p.value=!1,y.value=1,w.value=50,A.value=50,te.value=null,Ne(),o.value=!0,lt("original"),Oe.value="图片仅在当前浏览器中处理",await tt(),s.value&&(he==null||he.observe(s.value)),U()}catch(E){Ae.value=E.message||"图片读取失败"}finally{de.value=!1,r.value&&(r.value.value="")}}}function Ne(){se&&(xe=J2(se,{rotation:f.value,flipX:h.value,flipY:p.value}))}function Qe(P){se&&(P==="left"&&(f.value=(f.value+270)%360),P==="right"&&(f.value=(f.value+90)%360),P==="flip-x"&&(h.value=!h.value),P==="flip-y"&&(p.value=!p.value),Ne(),_.value==="original"?lt("original"):U())}function lt(P){if(!xe)return;_.value=P;const b=P==="original"?xe.width/xe.height:Number(P.split(":")[0])/Number(P.split(":")[1]);B.value=b,S.value=!0,xe.width/xe.height>=b?(k.value=xe.height,x.value=Math.round(k.value*b)):(x.value=xe.width,k.value=Math.round(x.value/b)),te.value=null,U()}function st(){x.value=M(x.value),S.value?k.value=M(Math.round(x.value/B.value)):B.value=x.value/k.value,_.value="custom",te.value=null}function De(){k.value=M(k.value),S.value?x.value=M(Math.round(k.value*B.value)):B.value=x.value/k.value,_.value="custom",te.value=null}function R(){S.value&&(B.value=x.value/k.value)}function U(){var P;!l.value||!xe||X2(l.value,xe,{width:x.value,height:k.value,zoom:y.value,focusX:w.value,focusY:A.value,previewWidth:Math.max(320,(((P=s.value)==null?void 0:P.clientWidth)||800)-56)})}function F(P){o.value&&(_e.value=!0,oe={x:P.clientX,y:P.clientY,focusX:w.value,focusY:A.value},l.value.setPointerCapture(P.pointerId))}function K(P){if(!_e.value||!oe)return;const b=l.value.getBoundingClientRect();w.value=T(oe.focusX-(P.clientX-oe.x)/b.width*100,0,100),A.value=T(oe.focusY-(P.clientY-oe.y)/b.height*100,0,100),U()}function Z(){_e.value=!1,oe=null}function m(P){y.value=T(Number((y.value-Math.sign(P.deltaY)*.1).toFixed(1)),1,4)}async function g(){if(!(!xe||de.value)){de.value=!0,Ae.value="",Oe.value="正在生成图片…";try{const P=await Q2(xe,{width:x.value,height:k.value,zoom:y.value,focusX:w.value,focusY:A.value,mimeType:L.value,quality:z.value/100});te.value=P.size;const b=a.value.replace(/\.[^.]+$/,"")||"image";Z2(P,`${b}-edited.${ue.value.extension}`),Oe.value=`已导出 ${ue.value.label} · ${Xr(P.size)}`}catch(P){Ae.value=P.message||"导出失败，请缩小尺寸后重试"}finally{de.value=!1}}}function C(P){var b,E;ce.value=!1,Le((E=(b=P.dataTransfer)==null?void 0:b.files)==null?void 0:E[0])}function M(P){return T(Math.round(Number(P)||1),1,12e3)}function T(P,b,E){return Math.min(E,Math.max(b,P))}return jt([y,w,A,x,k],()=>{te.value=null,U()}),hn(()=>{he=new ResizeObserver(U),s.value&&he.observe(s.value)}),pn(()=>{var P;he==null||he.disconnect(),(P=se==null?void 0:se.close)==null||P.call(se)}),(P,b)=>o.value?(q(),ne("div",lp,[d("div",sp,[d("div",op,[d("strong",null,D(a.value),1),d("span",null,D(c.value)+" × "+D(u.value)+" px · "+D(I(Xr)(i.value)),1)]),d("div",ip,[d("button",{type:"button",title:"向左旋转",onClick:b[5]||(b[5]=E=>Qe("left"))},[H(I(Tf),{size:16})]),d("button",{type:"button",title:"向右旋转",onClick:b[6]||(b[6]=E=>Qe("right"))},[H(I(Nf),{size:16})]),d("button",{type:"button",title:"水平翻转",class:le({active:h.value}),onClick:b[7]||(b[7]=E=>Qe("flip-x"))},[H(I(vl),{size:16})],2),d("button",{type:"button",title:"垂直翻转",class:le({active:p.value}),onClick:b[8]||(b[8]=E=>Qe("flip-y"))},[H(I(ml),{size:16})],2)]),d("input",{ref_key:"fileInput",ref:r,type:"file",accept:"image/*",hidden:"",onChange:b[9]||(b[9]=E=>{var O;return Le((O=E.target.files)==null?void 0:O[0])})},null,544),d("button",{class:"image-replace",type:"button",onClick:b[10]||(b[10]=E=>{var O;return(O=r.value)==null?void 0:O.click()})},[H(I(yl),{size:15}),b[21]||(b[21]=V(" 换一张",-1))])]),d("div",ap,[d("section",{ref_key:"previewStage",ref:s,class:"image-preview-stage"},[d("div",up,[d("span",null,[H(I(vi),{size:14}),b[22]||(b[22]=V(" 裁剪预览",-1))]),d("em",null,D(Xe.value),1)]),d("div",cp,[d("canvas",{ref_key:"previewCanvas",ref:l,class:le({dragging:_e.value}),"aria-label":"裁剪预览，拖动图片调整位置",onPointerdown:F,onPointermove:K,onPointerup:Z,onPointercancel:Z,onWheel:yt(m,["prevent"])},null,34)]),d("div",fp,[d("label",null,[b[23]||(b[23]=V("缩放 ",-1)),d("strong",null,D(y.value.toFixed(1))+"×",1),me(d("input",{"onUpdate:modelValue":b[11]||(b[11]=E=>y.value=E),type:"range",min:"1",max:"4",step:"0.1"},null,512),[[Ee,y.value,void 0,{number:!0}]])]),b[24]||(b[24]=d("span",null,"拖动画面定位 · 滚轮缩放",-1))])],512),d("aside",dp,[d("section",null,[b[25]||(b[25]=d("h3",null,[d("span",null,"01"),V(" 裁剪比例")],-1)),d("div",hp,[(q(),ne(Be,null,it(t,E=>d("button",{key:E.value,type:"button",class:le({active:_.value===E.value}),onClick:O=>lt(E.value)},D(E.label),11,pp)),64))])]),d("section",null,[b[32]||(b[32]=d("h3",null,[d("span",null,"02"),V(" 输出尺寸")],-1)),d("div",mp,[d("label",null,[b[26]||(b[26]=V("宽度",-1)),me(d("input",{"onUpdate:modelValue":b[12]||(b[12]=E=>x.value=E),type:"number",min:"1",max:"12000",onChange:st},null,544),[[Ee,x.value,void 0,{number:!0}]]),b[27]||(b[27]=d("small",null,"px",-1))]),b[30]||(b[30]=d("i",null,"×",-1)),d("label",null,[b[28]||(b[28]=V("高度",-1)),me(d("input",{"onUpdate:modelValue":b[13]||(b[13]=E=>k.value=E),type:"number",min:"1",max:"12000",onChange:De},null,544),[[Ee,k.value,void 0,{number:!0}]]),b[29]||(b[29]=d("small",null,"px",-1))])]),d("label",vp,[me(d("input",{"onUpdate:modelValue":b[14]||(b[14]=E=>S.value=E),type:"checkbox",onChange:R},null,544),[[Cn,S.value]]),b[31]||(b[31]=V(" 锁定宽高比",-1))])]),d("section",null,[b[34]||(b[34]=d("h3",null,[d("span",null,"03"),V(" 格式与压缩")],-1)),d("div",gp,[(q(),ne(Be,null,it(n,E=>d("button",{key:E.mime,type:"button",class:le({active:L.value===E.mime}),onClick:O=>{L.value=E.mime,te.value=null}},D(E.label),11,yp)),64))]),Je.value?(q(),ne("label",bp,[b[33]||(b[33]=V("质量 ",-1)),d("strong",null,D(z.value)+"%",1),me(d("input",{"onUpdate:modelValue":b[15]||(b[15]=E=>z.value=E),type:"range",min:"10",max:"100",step:"1",onInput:b[16]||(b[16]=E=>te.value=null)},null,544),[[Ee,z.value,void 0,{number:!0}]])])):(q(),ne("p",wp,"PNG 使用无损导出，不提供质量调节。"))]),d("div",Cp,[b[35]||(b[35]=d("span",null,"输出",-1)),d("strong",null,D(Xe.value),1),b[36]||(b[36]=d("span",null,"最近导出",-1)),d("strong",null,D(te.value===null?"尚未导出":I(Xr)(te.value)),1)]),d("button",{class:"image-download",type:"button",disabled:de.value,onClick:g},[H(I(F1),{size:17}),V(" "+D(de.value?"正在生成…":`下载 ${ue.value.label}`),1)],8,Pp)])]),d("footer",Ap,[d("p",{class:le({error:Ae.value})},D(Ae.value||Oe.value),3),d("span",null,[H(I(dr),{size:14}),b[37]||(b[37]=V(" 全程在浏览器本地处理，不上传服务器",-1))])])])):(q(),ne("div",{key:0,class:le(["image-dropzone",{active:ce.value}]),onDragenter:b[2]||(b[2]=yt(E=>ce.value=!0,["prevent"])),onDragover:b[3]||(b[3]=yt(E=>ce.value=!0,["prevent"])),onDragleave:b[4]||(b[4]=yt(E=>ce.value=!1,["prevent"])),onDrop:yt(C,["prevent"])},[d("input",{ref_key:"fileInput",ref:r,type:"file",accept:"image/*",hidden:"",onChange:b[0]||(b[0]=E=>{var O;return Le((O=E.target.files)==null?void 0:O[0])})},null,544),d("div",tp,[H(I(yl),{size:30})]),b[18]||(b[18]=d("p",{class:"section-kicker"},"LOCAL IMAGE LAB",-1)),b[19]||(b[19]=d("h2",null,"拖入一张图片开始处理",-1)),b[20]||(b[20]=d("p",null,"支持浏览器可读取的常见图片格式，单张不超过 20 MB / 3200 万像素，最长边不超过 12000 px。",-1)),d("button",{class:"primary-button",type:"button",disabled:de.value,onClick:b[1]||(b[1]=E=>{var O;return(O=r.value)==null?void 0:O.click()})},[H(I(Qf),{size:16}),V(" "+D(de.value?"正在读取…":"选择图片"),1)],8,np),d("span",null,[H(I(dr),{size:14}),b[17]||(b[17]=V(" 图片不会离开当前设备",-1))]),Ae.value?(q(),ne("p",rp,D(Ae.value),1)):Et("",!0)],34))}},Sp={key:0,class:"workspace"},kp={class:"workspace-header"},_p={__name:"ToolView",setup(e){const t=mi(),n=ve(()=>fd(t.params.slug)),l={json:Od,base64:Gd,timestamp:Wd,password:th,translate:K2,markdown:Aa(()=>Md(()=>import("./MarkdownTool-BoLoeF8g.js"),__vite__mapDeps([0,1]))),image:xp,"pixel-beads":$2},s=ve(()=>l[t.params.slug]);return hn(()=>{fetch("/api/v1/events/tool-opened",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:t.params.slug})}).catch(()=>{})}),(o,a)=>{const i=ll("router-link");return n.value&&s.value?(q(),ne("section",Sp,[H(i,{class:"back-link",to:"/"},{default:Pr(()=>[H(I(g1),{size:16}),a[0]||(a[0]=V(" 返回工具索引",-1))]),_:1}),d("header",kp,[d("div",{class:le(["workspace-icon",`tone-${n.value.color}`])},[(q(),Ge(lr(n.value.icon),{size:28}))],2),d("div",null,[d("p",null,D(n.value.index)+" / "+D(n.value.category),1),d("h1",null,D(n.value.name),1),d("span",null,D(n.value.summary),1)]),d("div",{class:le(["local-badge",{online:n.value.slug==="translate"}])},[n.value.slug==="translate"?(q(),Ge(I(O1),{key:0,size:14})):(q(),Ge(I(hf),{key:1,size:14})),V(" "+D(n.value.slug==="translate"?"云端翻译":"本地处理"),1)],2)]),(q(),Ge(lr(s.value)))])):Et("",!0)}}},Ep=s1({history:Lc(),routes:[{path:"/",component:kd},{path:"/tools/:slug",component:_p},{path:"/:pathMatch(.*)*",redirect:"/"}],scrollBehavior:()=>({top:0})});Xu(ud).use(Ep).mount("#app");export{F1 as D,lf as I,Qf as U,pn as a,q as b,Y as c,ne as d,d as e,H as f,V as g,me as h,Ht as i,ve as j,tt as k,le as n,hn as o,G as r,D as t,I as u,Ee as v,jt as w};
