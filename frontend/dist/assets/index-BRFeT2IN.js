(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();/**
* @vue/shared v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rs(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ce={},Kt=[],dt=()=>{},_l=()=>!1,nr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),rr=e=>e.startsWith("onUpdate:"),xe=Object.assign,ss=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ni=Object.prototype.hasOwnProperty,le=(e,t)=>ni.call(e,t),F=Array.isArray,Ot=e=>kn(e)==="[object Map]",Ct=e=>kn(e)==="[object Set]",Rs=e=>kn(e)==="[object Date]",W=e=>typeof e=="function",ge=e=>typeof e=="string",ht=e=>typeof e=="symbol",oe=e=>e!==null&&typeof e=="object",xl=e=>(oe(e)||W(e))&&W(e.then)&&W(e.catch),El=Object.prototype.toString,kn=e=>El.call(e),ri=e=>kn(e).slice(8,-1),kl=e=>kn(e)==="[object Object]",ls=e=>ge(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,dn=rs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sr=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},si=/-\w/g,He=sr(e=>e.replace(si,t=>t.slice(1).toUpperCase())),li=/\B([A-Z])/g,Vt=sr(e=>e.replace(li,"-$1").toLowerCase()),lr=sr(e=>e.charAt(0).toUpperCase()+e.slice(1)),yr=sr(e=>e?`on${lr(e)}`:""),ct=(e,t)=>!Object.is(e,t),Gn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Rl=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},or=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ms;const ir=()=>Ms||(Ms=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jt(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=ge(r)?ui(r):Jt(r);if(s)for(const l in s)t[l]=s[l]}return t}else if(ge(e)||oe(e))return e}const oi=/;(?![^(]*\))/g,ii=/:([^]+)/,ai=/\/\*[^]*?\*\//g;function ui(e){const t={};return e.replace(ai,"").split(oi).forEach(n=>{if(n){const r=n.split(ii);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function me(e){let t="";if(ge(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=me(e[n]);r&&(t+=r+" ")}else if(oe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ci="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",fi=rs(ci);function Ml(e){return!!e||e===""}function di(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=St(e[r],t[r]);return n}function Ts(e,t){if(e.size!==t.size)return!1;const n=Array.from(t),r=new Uint8Array(n.length);for(const s of e){let l=-1;for(let o=0;o<n.length;o++)if(!r[o]&&St(s,n[o])){l=o;break}if(l<0)return!1;r[l]=1}return!0}function St(e,t){if(e===t)return!0;let n=Rs(e),r=Rs(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=ht(e),r=ht(t),n||r)return e===t;if(n=F(e),r=F(t),n||r)return n&&r?di(e,t):!1;if(n=oe(e),r=oe(t),n||r){if(!n||!r)return!1;if(n=Ot(e),r=Ot(t),n||r||(n=Ct(e),r=Ct(t),n||r))return n&&r?Ts(e,t):!1;const s=Object.keys(e).length,l=Object.keys(t).length;if(s!==l)return!1;for(const o in e){const a=e.hasOwnProperty(o),i=t.hasOwnProperty(o);if(a&&!i||!a&&i||!St(e[o],t[o]))return!1}}return String(e)===String(t)}function os(e,t){return e.findIndex(n=>St(n,t))}const Tl=e=>!!(e&&e.__v_isRef===!0),U=e=>ge(e)?e:e==null?"":F(e)||oe(e)&&(e.toString===El||!W(e.toString))?Tl(e)?U(e.value):JSON.stringify(e,Bl,2):String(e),Bl=(e,t)=>Tl(t)?Bl(e,t.value):Ot(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],l)=>(n[br(r,l)+" =>"]=s,n),{})}:Ct(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>br(n))}:ht(t)?br(t):oe(t)&&!F(t)&&!kl(t)?String(t):t,br=(e,t="")=>{var n;return ht(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Se;class hi{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Se&&(Se.active?(this.parent=Se,this.index=(Se.scopes||(Se.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const r=this.scopes.slice();for(t=0,n=r.length;t<n;t++)r[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const s=this.scopes.slice();for(t=0,n=s.length;t<n;t++)s[t].resume()}const r=this.effects.slice();for(t=0,n=r.length;t<n;t++)r[t].resume()}}run(t){if(this._active){const n=Se;try{return Se=this,t()}finally{Se=n}}}on(){++this._on===1&&(this.prevScope=Se,Se=this)}off(){if(this._on>0&&--this._on===0){if(Se===this)Se=this.prevScope;else{let t=Se;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function pi(){return Se}let de;const Pr=new WeakSet;class Ol{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Se&&(Se.active?Se.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Pr.has(this)&&(Pr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Dl(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bs(this),Hl(this);const t=de,n=Qe;de=this,Qe=!0;try{return this.fn()}finally{Il(this),de=t,Qe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)us(t);this.deps=this.depsTail=void 0,Bs(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Pr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ir(this)&&this.run()}get dirty(){return Ir(this)}}let Nl=0,hn,pn;function Dl(e,t=!1){if(e.flags|=8,t){e.next=pn,pn=e;return}e.next=hn,hn=e}function is(){Nl++}function as(){if(--Nl>0)return;if(pn){let t=pn;for(pn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;hn;){let t=hn;for(hn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Hl(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Il(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),us(r),gi(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function Ir(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ll(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ll(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===bn)||(e.globalVersion=bn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ir(e))))return;e.flags|=2;const t=e.dep,n=de,r=Qe;de=e,Qe=!0;try{Hl(e);const s=e.fn(e._value);(t.version===0||ct(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{de=n,Qe=r,Il(e),e.flags&=-3}}function us(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let l=n.computed.deps;l;l=l.nextDep)us(l,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function gi(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Qe=!0;const Gl=[];function wt(){Gl.push(Qe),Qe=!1}function _t(){const e=Gl.pop();Qe=e===void 0?!0:e}function Bs(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=de;de=void 0;try{t()}finally{de=n}}}let bn=0;class mi{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class cs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!de||!Qe||de===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==de)n=this.activeLink=new mi(de,this),de.deps?(n.prevDep=de.depsTail,de.depsTail.nextDep=n,de.depsTail=n):de.deps=de.depsTail=n,Fl(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=de.depsTail,n.nextDep=void 0,de.depsTail.nextDep=n,de.depsTail=n,de.deps===n&&(de.deps=r)}return n}trigger(t){this.version++,bn++,this.notify(t)}notify(t){is();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{as()}}}function Fl(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Fl(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Lr=new WeakMap,Lt=Symbol(""),Gr=Symbol(""),Pn=Symbol("");function Re(e,t,n){if(Qe&&de){let r=Lr.get(e);r||Lr.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new cs),s.map=r,s.key=n),s.track()}}function Pt(e,t,n,r,s,l){const o=Lr.get(e);if(!o){bn++;return}const a=i=>{i&&i.trigger()};if(is(),t==="clear")o.forEach(a);else{const i=F(e),u=i&&ls(n);if(i&&n==="length"){const c=Number(r);o.forEach((f,d)=>{(d==="length"||d===Pn||!ht(d)&&d>=c)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Pn)),t){case"add":i?u&&a(o.get("length")):(a(o.get(Lt)),Ot(e)&&a(o.get(Gr)));break;case"delete":i||(a(o.get(Lt)),Ot(e)&&a(o.get(Gr)));break;case"set":Ot(e)&&a(o.get(Lt));break}}as()}function jt(e){const t=se(e);return t===e?t:(Re(t,"iterate",Pn),qe(e)?t:t.map(Ze))}function ar(e){return Re(e=se(e),"iterate",Pn),e}function it(e,t){return xt(e)?Zt(Gt(e)?Ze(t):t):Ze(t)}const vi={__proto__:null,[Symbol.iterator](){return Ar(this,Symbol.iterator,e=>it(this,e))},concat(...e){return jt(this).concat(...e.map(t=>F(t)?jt(t):t))},entries(){return Ar(this,"entries",e=>(e[1]=it(this,e[1]),e))},every(e,t){return mt(this,"every",e,t,void 0,arguments)},filter(e,t){return mt(this,"filter",e,t,n=>n.map(r=>it(this,r)),arguments)},find(e,t){return mt(this,"find",e,t,n=>it(this,n),arguments)},findIndex(e,t){return mt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return mt(this,"findLast",e,t,n=>it(this,n),arguments)},findLastIndex(e,t){return mt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return mt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Cr(this,"includes",e)},indexOf(...e){return Cr(this,"indexOf",e)},join(e){return jt(this).join(e)},lastIndexOf(...e){return Cr(this,"lastIndexOf",e)},map(e,t){return mt(this,"map",e,t,void 0,arguments)},pop(){return ln(this,"pop")},push(...e){return ln(this,"push",e)},reduce(e,...t){return Os(this,"reduce",e,t)},reduceRight(e,...t){return Os(this,"reduceRight",e,t)},shift(){return ln(this,"shift")},some(e,t){return mt(this,"some",e,t,void 0,arguments)},splice(...e){return ln(this,"splice",e)},toReversed(){return jt(this).toReversed()},toSorted(e){return jt(this).toSorted(e)},toSpliced(...e){return jt(this).toSpliced(...e)},unshift(...e){return ln(this,"unshift",e)},values(){return Ar(this,"values",e=>it(this,e))}};function Ar(e,t,n){const r=ar(e),s=r[t]();return r!==e&&!qe(e)&&(s._next=s.next,s.next=()=>{const l=s._next();return l.done||(l.value=n(l.value)),l}),s}const yi=Array.prototype;function mt(e,t,n,r,s,l){const o=ar(e),a=o!==e&&!qe(e),i=o[t];if(i!==yi[t]){const f=i.apply(e,l);return a?Ze(f):f}let u=n;o!==e&&(a?u=function(f,d){return n.call(this,it(e,f),d,e)}:n.length>2&&(u=function(f,d){return n.call(this,f,d,e)}));const c=i.call(o,u,r);return a&&s?s(c):c}function Os(e,t,n,r){const s=ar(e),l=s!==e&&!qe(e);let o=n,a=!1;s!==e&&(l?(a=r.length===0,o=function(u,c,f){return a&&(a=!1,u=it(e,u)),n.call(this,u,it(e,c),f,e)}):n.length>3&&(o=function(u,c,f){return n.call(this,u,c,f,e)}));const i=s[t](o,...r);return a?it(e,i):i}function Cr(e,t,n){const r=se(e);Re(r,"iterate",Pn);const s=r[t](...n);return(s===-1||s===!1)&&hs(n[0])?(n[0]=se(n[0]),r[t](...n)):s}function ln(e,t,n=[]){wt(),is();const r=se(e)[t].apply(e,n);return as(),_t(),r}const bi=rs("__proto__,__v_isRef,__isVue"),$l=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ht));function Pi(e){ht(e)||(e=String(e));const t=se(this);return Re(t,"has",e),t.hasOwnProperty(e)}class Vl{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,l=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return l;if(n==="__v_raw")return r===(s?l?Mi:Wl:l?zl:Ul).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=F(t);if(!s){let i;if(o&&(i=vi[n]))return i;if(n==="hasOwnProperty")return Pi}const a=Reflect.get(t,n,Te(t)?t:r);if((ht(n)?$l.has(n):bi(n))||(s||Re(t,"get",n),l))return a;if(Te(a)){const i=o&&ls(n)?a:a.value;return s&&oe(i)?$r(i):i}return oe(a)?s?$r(a):Xt(a):a}}class jl extends Vl{constructor(t=!1){super(!1,t)}set(t,n,r,s){let l=t[n];const o=F(t)&&ls(n);if(!this._isShallow){const u=xt(l);if(!qe(r)&&!xt(r)&&(l=se(l),r=se(r)),!o&&Te(l)&&!Te(r))return u||(l.value=r),!0}const a=o?Number(n)<t.length:le(t,n),i=Reflect.set(t,n,r,Te(t)?t:s);return t===se(s)&&i&&(a?ct(r,l)&&Pt(t,"set",n,r):Pt(t,"add",n,r)),i}deleteProperty(t,n){const r=le(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&Pt(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!ht(n)||!$l.has(n))&&Re(t,"has",n),r}ownKeys(t){return Re(t,"iterate",F(t)?"length":Lt),Reflect.ownKeys(t)}}class Ai extends Vl{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Ci=new jl,Si=new Ai,wi=new jl(!0);const Fr=e=>e,Bn=e=>Reflect.getPrototypeOf(e);function _i(e,t,n){return function(...r){const s=this.__v_raw,l=se(s),o=Ot(l),a=e==="entries"||e===Symbol.iterator&&o,i=e==="keys"&&o,u=s[e](...r),c=n?Fr:t?Zt:Ze;return!t&&Re(l,"iterate",i?Gr:Lt),xe(Object.create(u),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:a?[c(f[0]),c(f[1])]:c(f),done:d}}})}}function On(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function xi(e,t){const n={get(s){const l=this.__v_raw,o=se(l),a=se(s);e||(ct(s,a)&&Re(o,"get",s),Re(o,"get",a));const{has:i}=Bn(o),u=t?Fr:e?Zt:Ze;if(i.call(o,s))return u(l.get(s));if(i.call(o,a))return u(l.get(a));l!==o&&l.get(s)},get size(){const s=this.__v_raw;return!e&&Re(se(s),"iterate",Lt),s.size},has(s){const l=this.__v_raw,o=se(l),a=se(s);return e||(ct(s,a)&&Re(o,"has",s),Re(o,"has",a)),s===a?l.has(s):l.has(s)||l.has(a)},forEach(s,l){const o=this,a=o.__v_raw,i=se(a),u=t?Fr:e?Zt:Ze;return!e&&Re(i,"iterate",Lt),a.forEach((c,f)=>s.call(l,u(c),u(f),o))}};return xe(n,e?{add:On("add"),set:On("set"),delete:On("delete"),clear:On("clear")}:{add(s){const l=se(this),o=Bn(l),a=se(s),i=!t&&!qe(s)&&!xt(s)?a:s;return o.has.call(l,i)||ct(s,i)&&o.has.call(l,s)||ct(a,i)&&o.has.call(l,a)||(l.add(i),Pt(l,"add",i,i)),this},set(s,l){!t&&!qe(l)&&!xt(l)&&(l=se(l));const o=se(this),{has:a,get:i}=Bn(o);let u=a.call(o,s);u||(s=se(s),u=a.call(o,s));const c=i.call(o,s);return o.set(s,l),u?ct(l,c)&&Pt(o,"set",s,l):Pt(o,"add",s,l),this},delete(s){const l=se(this),{has:o,get:a}=Bn(l);let i=o.call(l,s);i||(s=se(s),i=o.call(l,s)),a&&a.call(l,s);const u=l.delete(s);return i&&Pt(l,"delete",s,void 0),u},clear(){const s=se(this),l=s.size!==0,o=s.clear();return l&&Pt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=_i(s,e,t)}),n}function fs(e,t){const n=xi(e,t);return(r,s,l)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(le(n,s)&&s in r?n:r,s,l)}const Ei={get:fs(!1,!1)},ki={get:fs(!1,!0)},Ri={get:fs(!0,!1)};const Ul=new WeakMap,zl=new WeakMap,Wl=new WeakMap,Mi=new WeakMap;function Ti(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xt(e){return xt(e)?e:ds(e,!1,Ci,Ei,Ul)}function ql(e){return ds(e,!1,wi,ki,zl)}function $r(e){return ds(e,!0,Si,Ri,Wl)}function ds(e,t,n,r,s){if(!oe(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const l=s.get(e);if(l)return l;const o=Ti(ri(e));if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function Gt(e){return xt(e)?Gt(e.__v_raw):!!(e&&e.__v_isReactive)}function xt(e){return!!(e&&e.__v_isReadonly)}function qe(e){return!!(e&&e.__v_isShallow)}function hs(e){return e?!!e.__v_raw:!1}function se(e){const t=e&&e.__v_raw;return t?se(t):e}function Bi(e){return!le(e,"__v_skip")&&Object.isExtensible(e)&&Rl(e,"__v_skip",!0),e}const Ze=e=>oe(e)?Xt(e):e,Zt=e=>oe(e)?$r(e):e;function Te(e){return e?e.__v_isRef===!0:!1}function ee(e){return Kl(e,!1)}function Vr(e){return Kl(e,!0)}function Kl(e,t){return Te(e)?e:new Oi(e,t)}class Oi{constructor(t,n){this.dep=new cs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:se(t),this._value=n?t:Ze(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||qe(t)||xt(t);t=r?t:se(t),ct(t,n)&&(this._rawValue=t,this._value=r?t:Ze(t),this.dep.trigger())}}function $(e){return Te(e)?e.value:e}const Ni={get:(e,t,n)=>t==="__v_raw"?e:$(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Te(s)&&!Te(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Jl(e){return Gt(e)?e:new Proxy(e,Ni)}class Di{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new cs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=bn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&de!==this)return Dl(this,!0),!0}get value(){const t=this.dep.track();return Ll(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Hi(e,t,n=!1){let r,s;return W(e)?r=e:(r=e.get,s=e.set),new Di(r,s,n)}const Nn={},jn=new WeakMap;let Ht;function Ii(e,t=!1,n=Ht){if(n){let r=jn.get(n);r||jn.set(n,r=[]),r.push(e)}}function Li(e,t,n=ce){const{immediate:r,deep:s,once:l,scheduler:o,augmentJob:a,call:i}=n,u=x=>s?x:qe(x)||s===!1||s===0?At(x,1):At(x);let c,f,d,v,E=!1,A=!1;if(Te(e)?(f=()=>e.value,E=qe(e)):Gt(e)?(f=()=>u(e),E=!0):F(e)?(A=!0,E=e.some(x=>Gt(x)||qe(x)),f=()=>e.map(x=>{if(Te(x))return x.value;if(Gt(x))return u(x);if(W(x))return i?i(x,2):x()})):W(e)?t?f=i?()=>i(e,2):e:f=()=>{if(d){wt();try{d()}finally{_t()}}const x=Ht;Ht=c;try{return i?i(e,3,[v]):e(v)}finally{Ht=x}}:f=dt,t&&s){const x=f,O=s===!0?1/0:s;f=()=>At(x(),O)}const _=pi(),R=()=>{c.stop(),_&&_.active&&ss(_.effects,c)};if(l&&t){const x=t;t=(...O)=>{const z=x(...O);return R(),z}}let k=A?new Array(e.length).fill(Nn):Nn;const B=x=>{if(!(!(c.flags&1)||!c.dirty&&!x))if(t){const O=c.run();if(x||s||E||(A?O.some((z,Q)=>ct(z,k[Q])):ct(O,k))){d&&d();const z=Ht;Ht=c;try{const Q=[O,k===Nn?void 0:A&&k[0]===Nn?[]:k,v];k=O,i?i(t,3,Q):t(...Q)}finally{Ht=z}}}else c.run()};return a&&a(B),c=new Ol(f),c.scheduler=o?()=>o(B,!1):B,v=x=>Ii(x,!1,c),d=c.onStop=()=>{const x=jn.get(c);if(x){if(i)i(x,4);else for(const O of x)O();jn.delete(c)}},t?r?B(!0):k=c.run():o?o(B.bind(null,!0),!0):c.run(),R.pause=c.pause.bind(c),R.resume=c.resume.bind(c),R.stop=R,R}function At(e,t=1/0,n){if(t<=0||!oe(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Te(e))At(e.value,t,n);else if(F(e))for(let r=0;r<e.length;r++)At(e[r],t,n);else if(Ct(e)||Ot(e))e.forEach(r=>{At(r,t,n)});else if(kl(e)){for(const r in e)At(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&At(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Rn(e,t,n,r){try{return r?e(...r):e()}catch(s){ur(s,t,n)}}function et(e,t,n,r){if(W(e)){const s=Rn(e,t,n,r);return s&&xl(s)&&s.catch(l=>{ur(l,t,n)}),s}if(F(e)){const s=[];for(let l=0;l<e.length;l++)s.push(et(e[l],t,n,r));return s}}function ur(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ce;if(t){let a=t.parent;const i=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,i,u)===!1)return}a=a.parent}if(l){wt(),Rn(l,null,10,[e,i,u]),_t();return}}Gi(e,n,s,r,o)}function Gi(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const De=[];let ot=-1;const Yt=[];let Mt=null,zt=0;const Yl=Promise.resolve();let Un=null;function at(e){const t=Un||Yl;return e?t.then(this?e.bind(this):e):t}function Fi(e){let t=ot+1,n=De.length;for(;t<n;){const r=t+n>>>1,s=De[r],l=An(s);l<e||l===e&&s.flags&2?t=r+1:n=r}return t}function ps(e){if(!(e.flags&1)){const t=An(e),n=De[De.length-1];!n||!(e.flags&2)&&t>=An(n)?De.push(e):De.splice(Fi(t),0,e),e.flags|=1,Ql()}}function Ql(){Un||(Un=Yl.then(Zl))}function $i(e){if(!F(e))Mt&&e.id===-1?Mt.splice(zt+1,0,e):e.flags&1||(Yt.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)Yt.push(e[t]);Ql()}function Ns(e,t,n=ot+1){for(;n<De.length;n++){const r=De[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;De.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Xl(e){if(Yt.length){const t=[...new Set(Yt)].sort((n,r)=>An(n)-An(r));if(Yt.length=0,Mt){for(let n=0;n<t.length;n++)Mt.push(t[n]);return}for(Mt=t,zt=0;zt<Mt.length;zt++){const n=Mt[zt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Mt=null,zt=0}}const An=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Zl(e){try{for(ot=0;ot<De.length;ot++){const t=De[ot];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Rn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ot<De.length;ot++){const t=De[ot];t&&(t.flags&=-2)}ot=-1,De.length=0,Xl(),Un=null,(De.length||Yt.length)&&Zl()}}let je=null,eo=null;function zn(e){const t=je;return je=e,eo=e&&e.type.__scopeId||null,t}function cr(e,t=je,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Jn(-1);const l=zn(t),o=$t.length;let a;try{a=e(...s)}finally{for(let i=$t.length;i>o;i--)Ro();zn(l),r._d&&Jn(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function ye(e,t){if(je===null)return e;const n=mr(je),r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[l,o,a,i=ce]=t[s];l&&(W(l)&&(l={mounted:l,updated:l}),l.deep&&At(o),r.push({dir:l,instance:n,value:o,oldValue:void 0,arg:a,modifiers:i}))}return e}function Nt(e,t,n,r){const s=e.dirs,l=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];l&&(a.oldValue=l[o].value);let i=a.dir[r];i&&(wt(),et(i,n,8,[e.el,a,e,t]),_t())}}function Fn(e,t){if(Me){let n=Me.provides;const r=Me.parent&&Me.parent.provides;r===n&&(n=Me.provides=Object.create(r)),n[e]=t}}function Xe(e,t,n=!1){const r=Ha();if(r||Qt){let s=Qt?Qt._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&W(t)?t.call(r&&r.proxy):t}}const Vi=Symbol.for("v-scx"),ji=()=>Xe(Vi);function Ft(e,t,n){return to(e,t,n)}function to(e,t,n=ce){const{immediate:r,deep:s,flush:l,once:o}=n,a=xe({},n),i=t&&r||!t&&l!=="post";let u;if(wn){if(l==="sync"){const v=ji();u=v.__watcherHandles||(v.__watcherHandles=[])}else if(!i){const v=()=>{};return v.stop=dt,v.resume=dt,v.pause=dt,v}}const c=Me;a.call=(v,E,A)=>et(v,c,E,A);let f=!1;l==="post"?a.scheduler=v=>{Ge(v,c&&c.suspense)}:l!=="sync"&&(f=!0,a.scheduler=(v,E)=>{E?v():ps(v)}),a.augmentJob=v=>{t&&(v.flags|=4),f&&(v.flags|=2,c&&(v.id=c.uid,v.i=c))};const d=Li(e,t,a);return wn&&(u?u.push(d):i&&d()),d}function Ui(e,t,n){const r=this.proxy,s=ge(e)?e.includes(".")?no(r,e):()=>r[e]:e.bind(r,r);let l;W(t)?l=t:(l=t.handler,n=t);const o=Tn(this),a=to(s,l.bind(r),n);return o(),a}function no(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const zi=Symbol("_vte"),fr=e=>e.__isTeleport,Sr=Symbol("_leaveCb");function Wi(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Et){t=n;break}}return t}function ro(e){if(!ms(e))return fr(e.type)&&e.children?Wi(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&W(n.default))return n.default()}}function gs(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;gs(fr(n.type)&&ro(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function so(e,t){return W(e)?xe({name:e.name},t,{setup:e}):e}function lo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Ds(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Wn=new WeakMap;function gn(e,t,n,r,s=!1){if(F(e)){e.forEach((A,_)=>gn(A,t&&(F(t)?t[_]:t),n,r,s));return}if(mn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&gn(e,t,n,r.component.subTree);return}const l=r.shapeFlag&4?mr(r.component):r.el,o=s?null:l,{i:a,r:i}=e,u=t&&t.r,c=a.refs===ce?a.refs={}:a.refs,f=a.setupState,d=se(f),v=f===ce?_l:A=>Ds(c,A)?!1:le(d,A),E=(A,_)=>!(_&&Ds(c,_));if(u!=null&&u!==i){if(Hs(t),ge(u))c[u]=null,v(u)&&(f[u]=null);else if(Te(u)){const A=t;E(u,A.k)&&(u.value=null),A.k&&(c[A.k]=null)}}if(W(i))Rn(i,a,12,[o,c]);else{const A=ge(i),_=Te(i);if(A||_){const R=()=>{if(e.f){const k=A?v(i)?f[i]:c[i]:E()||!e.k?i.value:c[e.k];if(s)F(k)&&ss(k,l);else if(F(k))k.includes(l)||k.push(l);else if(A)c[i]=[l],v(i)&&(f[i]=c[i]);else{const B=[l];E(i,e.k)&&(i.value=B),e.k&&(c[e.k]=B)}}else A?(c[i]=o,v(i)&&(f[i]=o)):_&&(E(i,e.k)&&(i.value=o),e.k&&(c[e.k]=o))};if(o){const k=()=>{R(),Wn.delete(e)};k.id=-1,Wn.set(e,k),Ge(k,n)}else Hs(e),R()}}}function Hs(e){const t=Wn.get(e);t&&(t.flags|=8,Wn.delete(e))}ir().requestIdleCallback;ir().cancelIdleCallback;const mn=e=>!!e.type.__asyncLoader,ms=e=>e.type.__isKeepAlive;function qi(e,t){oo(e,"a",t)}function Ki(e,t){oo(e,"da",t)}function oo(e,t,n=Me){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(dr(t,r,n),n){let s=n.parent;for(;s&&s.parent;)ms(s.parent.vnode)&&Ji(r,t,n,s),s=s.parent}}function Ji(e,t,n,r){const s=dr(t,e,r,!0);io(()=>{ss(r[t],s)},n)}function dr(e,t,n=Me,r=!1){if(n){const s=n[e]||(n[e]=[]),l=t.__weh||(t.__weh=(...o)=>{wt();const a=Tn(n),i=et(t,n,e,o);return a(),_t(),i});return r?s.unshift(l):s.push(l),l}}const kt=e=>(t,n=Me)=>{(!wn||e==="sp")&&dr(e,(...r)=>t(...r),n)},Yi=kt("bm"),Mn=kt("m"),Qi=kt("bu"),Xi=kt("u"),vs=kt("bum"),io=kt("um"),Zi=kt("sp"),ea=kt("rtg"),ta=kt("rtc");function na(e,t=Me){dr("ec",e,t)}const ao="components";function jr(e,t){return co(ao,e,!0,t)||e}const uo=Symbol.for("v-ndc");function qn(e){return ge(e)?co(ao,e,!1)||e:e||uo}function co(e,t,n=!0,r=!1){const s=je||Me;if(s){const l=s.type;{const a=$a(l,!1);if(a&&(a===t||a===He(t)||a===lr(He(t))))return l}const o=Is(s[e]||l[e],t)||Is(s.appContext[e],t);return!o&&r?l:o}}function Is(e,t){return e&&(e[t]||e[He(t)]||e[lr(He(t))])}function qt(e,t,n,r){let s;const l=n,o=F(e);if(o||ge(e)){const a=o&&Gt(e);let i=!1,u=!1;a&&(i=!qe(e),u=xt(e),e=ar(e)),s=new Array(e.length);for(let c=0,f=e.length;c<f;c++)s[c]=t(i?u?Zt(Ze(e[c])):Ze(e[c]):e[c],c,void 0,l)}else if(typeof e=="number"){s=new Array(e);for(let a=0;a<e;a++)s[a]=t(a+1,a,void 0,l)}else if(oe(e))if(e[Symbol.iterator])s=Array.from(e,(a,i)=>t(a,i,void 0,l));else{const a=Object.keys(e);s=new Array(a.length);for(let i=0,u=a.length;i<u;i++){const c=a[i];s[i]=t(e[c],c,i,l)}}else s=[];return s}const Ur=e=>e?Bo(e)?mr(e):Ur(e.parent):null,vn=xe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ur(e.parent),$root:e=>Ur(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ho(e),$forceUpdate:e=>e.f||(e.f=()=>{ps(e.update)}),$nextTick:e=>e.n||(e.n=at.bind(e.proxy)),$watch:e=>Ui.bind(e)}),wr=(e,t)=>e!==ce&&!e.__isScriptSetup&&le(e,t),ra={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:l,accessCache:o,type:a,appContext:i}=e;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return l[t]}else{if(wr(r,t))return o[t]=1,r[t];if(s!==ce&&le(s,t))return o[t]=2,s[t];if(le(l,t))return o[t]=3,l[t];if(n!==ce&&le(n,t))return o[t]=4,n[t];zr&&(o[t]=0)}}const u=vn[t];let c,f;if(u)return t==="$attrs"&&Re(e.attrs,"get",""),u(e);if((c=a.__cssModules)&&(c=c[t]))return c;if(n!==ce&&le(n,t))return o[t]=4,n[t];if(f=i.config.globalProperties,le(f,t))return f[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:l}=e;return wr(s,t)?(s[t]=n,!0):r!==ce&&le(r,t)?(r[t]=n,!0):le(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,props:l,type:o}},a){let i;return!!(n[a]||e!==ce&&a[0]!=="$"&&le(e,a)||wr(t,a)||le(l,a)||le(r,a)||le(vn,a)||le(s.config.globalProperties,a)||(i=o.__cssModules)&&i[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:le(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ls(e){return F(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let zr=!0;function sa(e){const t=ho(e),n=e.proxy,r=e.ctx;zr=!1,t.beforeCreate&&Gs(t.beforeCreate,e,"bc");const{data:s,computed:l,methods:o,watch:a,provide:i,inject:u,created:c,beforeMount:f,mounted:d,beforeUpdate:v,updated:E,activated:A,deactivated:_,beforeDestroy:R,beforeUnmount:k,destroyed:B,unmounted:x,render:O,renderTracked:z,renderTriggered:Q,errorCaptured:ne,serverPrefetch:be,expose:fe,inheritAttrs:Fe,components:$e,directives:Ee,filters:Ie}=t;if(u&&la(u,r,null),o)for(const te in o){const X=o[te];W(X)&&(r[te]=X.bind(n))}if(s){const te=s.call(n,n);oe(te)&&(e.data=Xt(te))}if(zr=!0,l)for(const te in l){const X=l[te],Je=W(X)?X.bind(n,n):W(X.get)?X.get.bind(n,n):dt,Ye=!W(X)&&W(X.set)?X.set.bind(n):dt,Le=he({get:Je,set:Ye});Object.defineProperty(r,te,{enumerable:!0,configurable:!0,get:()=>Le.value,set:ke=>Le.value=ke})}if(a)for(const te in a)fo(a[te],r,n,te);if(i){const te=W(i)?i.call(n):i;Reflect.ownKeys(te).forEach(X=>{Fn(X,te[X])})}c&&Gs(c,e,"c");function pe(te,X){F(X)?X.forEach(Je=>te(Je.bind(n))):X&&te(X.bind(n))}if(pe(Yi,f),pe(Mn,d),pe(Qi,v),pe(Xi,E),pe(qi,A),pe(Ki,_),pe(na,ne),pe(ta,z),pe(ea,Q),pe(vs,k),pe(io,x),pe(Zi,be),F(fe))if(fe.length){const te=e.exposed||(e.exposed={});fe.forEach(X=>{Object.defineProperty(te,X,{get:()=>n[X],set:Je=>n[X]=Je,enumerable:!0})})}else e.exposed||(e.exposed={});O&&e.render===dt&&(e.render=O),Fe!=null&&(e.inheritAttrs=Fe),$e&&(e.components=$e),Ee&&(e.directives=Ee),be&&lo(e)}function la(e,t,n=dt){F(e)&&(e=Wr(e));for(const r in e){const s=e[r];let l;oe(s)?"default"in s?l=Xe(s.from||r,s.default,!0):l=Xe(s.from||r):l=Xe(s),Te(l)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>l.value,set:o=>l.value=o}):t[r]=l}}function Gs(e,t,n){et(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function fo(e,t,n,r){let s=r.includes(".")?no(n,r):()=>n[r];if(ge(e)){const l=t[e];W(l)&&Ft(s,l)}else if(W(e))Ft(s,e.bind(n));else if(oe(e))if(F(e))e.forEach(l=>fo(l,t,n,r));else{const l=W(e.handler)?e.handler.bind(n):t[e.handler];W(l)&&Ft(s,l,e)}}function ho(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:l,config:{optionMergeStrategies:o}}=e.appContext,a=l.get(t);let i;return a?i=a:!s.length&&!n&&!r?i=t:(i={},s.length&&s.forEach(u=>Kn(i,u,o,!0)),Kn(i,t,o)),oe(t)&&l.set(t,i),i}function Kn(e,t,n,r=!1){const{mixins:s,extends:l}=t;l&&Kn(e,l,n,!0),s&&s.forEach(o=>Kn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=oa[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const oa={data:Fs,props:$s,emits:$s,methods:cn,computed:cn,beforeCreate:Oe,created:Oe,beforeMount:Oe,mounted:Oe,beforeUpdate:Oe,updated:Oe,beforeDestroy:Oe,beforeUnmount:Oe,destroyed:Oe,unmounted:Oe,activated:Oe,deactivated:Oe,errorCaptured:Oe,serverPrefetch:Oe,components:cn,directives:cn,watch:aa,provide:Fs,inject:ia};function Fs(e,t){return t?e?function(){return xe(W(e)?e.call(this,this):e,W(t)?t.call(this,this):t)}:t:e}function ia(e,t){return cn(Wr(e),Wr(t))}function Wr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Oe(e,t){return e?[...new Set([].concat(e,t))]:t}function cn(e,t){return e?xe(Object.create(null),e,t):t}function $s(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:xe(Object.create(null),Ls(e),Ls(t??{})):t}function aa(e,t){if(!e)return t;if(!t)return e;const n=xe(Object.create(null),e);for(const r in t)n[r]=Oe(e[r],t[r]);return n}function po(){return{app:null,config:{isNativeTag:_l,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ua=0;function ca(e,t){return function(r,s=null){W(r)||(r=xe({},r)),s!=null&&!oe(s)&&(s=null);const l=po(),o=new WeakSet,a=[];let i=!1;const u=l.app={_uid:ua++,_component:r,_props:s,_container:null,_context:l,_instance:null,version:ja,get config(){return l.config},set config(c){},use(c,...f){return o.has(c)||(c&&W(c.install)?(o.add(c),c.install(u,...f)):W(c)&&(o.add(c),c(u,...f))),u},mixin(c){return l.mixins.includes(c)||l.mixins.push(c),u},component(c,f){return f?(l.components[c]=f,u):l.components[c]},directive(c,f){return f?(l.directives[c]=f,u):l.directives[c]},mount(c,f,d){if(!i){const v=u._ceVNode||V(r,s);return v.appContext=l,d===!0?d="svg":d===!1&&(d=void 0),e(v,c,d),i=!0,u._container=c,c.__vue_app__=u,mr(v.component)}},onUnmount(c){a.push(c)},unmount(){i&&(et(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,f){return l.provides[c]=f,u},runWithContext(c){const f=Qt;Qt=u;try{return c()}finally{Qt=f}}};return u}}let Qt=null;const fa=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${He(t)}Modifiers`]||e[`${Vt(t)}Modifiers`];function da(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ce;let s=n;const l=t.startsWith("update:"),o=l&&fa(r,t.slice(7));o&&(o.trim&&(s=n.map(c=>ge(c)?c.trim():c)),o.number&&(s=s.map(or)));let a,i=r[a=yr(t)]||r[a=yr(He(t))];!i&&l&&(i=r[a=yr(Vt(t))]),i&&et(i,e,6,s);const u=r[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,et(u,e,6,s)}}const ha=new WeakMap;function go(e,t,n=!1){const r=n?ha:t.emitsCache,s=r.get(e);if(s!==void 0)return s;const l=e.emits;let o={},a=!1;if(!W(e)){const i=u=>{const c=go(u,t,!0);c&&(a=!0,xe(o,c))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return!l&&!a?(oe(e)&&r.set(e,null),null):(F(l)?l.forEach(i=>o[i]=null):xe(o,l),oe(e)&&r.set(e,o),o)}function hr(e,t){return!e||!nr(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),le(e,t[0].toLowerCase()+t.slice(1))||le(e,Vt(t))||le(e,t))}function Vs(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[l],slots:o,attrs:a,emit:i,render:u,renderCache:c,props:f,data:d,setupState:v,ctx:E,inheritAttrs:A}=e,_=zn(e);let R,k;try{if(n.shapeFlag&4){const x=s||r,O=x;R=ut(u.call(O,x,c,f,v,d,E)),k=a}else{const x=t;R=ut(x.length>1?x(f,{attrs:a,slots:o,emit:i}):x(f,null)),k=t.props?a:pa(a)}}catch(x){$t.length=0,ur(x,e,1),R=V(Et)}let B=R;if(k&&A!==!1){const x=Object.keys(k),{shapeFlag:O}=B;x.length&&O&7&&(l&&x.some(rr)&&(k=ga(k,l)),B=en(B,k,!1,!0))}if(n.dirs&&(B=en(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition){const x=fr(B.type)&&ro(B)||B;gs(x,n.transition)}return R=B,zn(_),R}const pa=e=>{let t;for(const n in e)(n==="class"||n==="style"||nr(n))&&((t||(t={}))[n]=e[n]);return t},ga=(e,t)=>{const n={};for(const r in e)(!rr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function ma(e,t,n){const{props:r,children:s,component:l}=e,{props:o,children:a,patchFlag:i}=t,u=l.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&i>=0){if(i&1024)return!0;if(i&16)return r?js(r,o,u):!!o;if(i&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const d=c[f];if(mo(o,r,d)&&!hr(u,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?js(r,o,u):!0:!!o;return!1}function js(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const l=r[s];if(mo(t,e,l)&&!hr(n,l))return!0}return!1}function mo(e,t,n){const r=e[n],s=t[n];return n==="style"&&oe(r)&&oe(s)?!St(r,s):r!==s}function va({vnode:e,parent:t,suspense:n},r){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=r,e=s),s===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}const vo={},yo=()=>Object.create(vo),bo=e=>Object.getPrototypeOf(e)===vo;function ya(e,t,n,r=!1){const s={},l=yo();e.propsDefaults=Object.create(null),Po(e,t,s,l);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:ql(s):e.type.props?e.props=s:e.props=l,e.attrs=l}function ba(e,t,n,r){const{props:s,attrs:l,vnode:{patchFlag:o}}=e,a=se(s),[i]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let f=0;f<c.length;f++){let d=c[f];if(hr(e.emitsOptions,d))continue;const v=t[d];if(i)if(le(l,d))v!==l[d]&&(l[d]=v,u=!0);else{const E=He(d);s[E]=qr(i,a,E,v,e,!1)}else v!==l[d]&&(l[d]=v,u=!0)}}}else{Po(e,t,s,l)&&(u=!0);let c;for(const f in a)(!t||!le(t,f)&&((c=Vt(f))===f||!le(t,c)))&&(i?n&&(n[f]!==void 0||n[c]!==void 0)&&(s[f]=qr(i,a,f,void 0,e,!0)):delete s[f]);if(l!==a)for(const f in l)(!t||!le(t,f))&&(delete l[f],u=!0)}u&&Pt(e.attrs,"set","")}function Po(e,t,n,r){const[s,l]=e.propsOptions;let o=!1,a;if(t)for(let i in t){if(dn(i))continue;const u=t[i];let c;s&&le(s,c=He(i))?!l||!l.includes(c)?n[c]=u:(a||(a={}))[c]=u:hr(e.emitsOptions,i)||(!(i in r)||u!==r[i])&&(r[i]=u,o=!0)}if(l){const i=se(n),u=a||ce;for(let c=0;c<l.length;c++){const f=l[c];n[f]=qr(s,i,f,u[f],e,!le(u,f))}}return o}function qr(e,t,n,r,s,l){const o=e[n];if(o!=null){const a=le(o,"default");if(a&&r===void 0){const i=o.default;if(o.type!==Function&&!o.skipFactory&&W(i)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const c=Tn(s);r=u[n]=i.call(null,t),c()}}else r=i;s.ce&&s.ce._setProp(n,r)}o[0]&&(l&&!a?r=!1:o[1]&&(r===""||r===Vt(n))&&(r=!0))}return r}const Pa=new WeakMap;function Ao(e,t,n=!1){const r=n?Pa:t.propsCache,s=r.get(e);if(s)return s;const l=e.props,o={},a=[];let i=!1;if(!W(e)){const c=f=>{i=!0;const[d,v]=Ao(f,t,!0);xe(o,d),v&&a.push(...v)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!l&&!i)return oe(e)&&r.set(e,Kt),Kt;if(F(l))for(let c=0;c<l.length;c++){const f=He(l[c]);Us(f)&&(o[f]=ce)}else if(l)for(const c in l){const f=He(c);if(Us(f)){const d=l[c],v=o[f]=F(d)||W(d)?{type:d}:xe({},d),E=v.type;let A=!1,_=!0;if(F(E))for(let R=0;R<E.length;++R){const k=E[R],B=W(k)&&k.name;if(B==="Boolean"){A=!0;break}else B==="String"&&(_=!1)}else A=W(E)&&E.name==="Boolean";v[0]=A,v[1]=_,(A||le(v,"default"))&&a.push(f)}}const u=[o,a];return oe(e)&&r.set(e,u),u}function Us(e){return e[0]!=="$"&&!dn(e)}const ys=e=>e==="_"||e==="_ctx"||e==="$stable",bs=e=>F(e)?e.map(ut):[ut(e)],Aa=(e,t,n)=>{if(t._n)return t;const r=cr((...s)=>bs(t(...s)),n);return r._c=!1,r},Co=(e,t,n)=>{const r=e._ctx;for(const s in e){if(ys(s))continue;const l=e[s];if(W(l))t[s]=Aa(s,l,r);else if(l!=null){const o=bs(l);t[s]=()=>o}}},So=(e,t)=>{const n=bs(t);e.slots.default=()=>n},wo=(e,t,n)=>{for(const r in t)(n||!ys(r))&&(e[r]=t[r])},Ca=(e,t,n)=>{const r=e.slots=yo();if(e.vnode.shapeFlag&32){const s=t._;s?(wo(r,t,n),n&&Rl(r,"_",s,!0)):Co(t,r)}else t&&So(e,t)},Sa=(e,t,n)=>{const{vnode:r,slots:s}=e;let l=!0,o=ce;if(r.shapeFlag&32){const a=t._;a?n&&a===1?l=!1:wo(s,t,n):(l=!t.$stable,Co(t,s)),o=t}else t&&(So(e,t),o={default:1});if(l)for(const a in s)!ys(a)&&o[a]==null&&delete s[a]},Ge=ka;function wa(e){return _a(e)}function _a(e,t){const n=ir();n.__VUE__=!0;const{insert:r,remove:s,patchProp:l,createElement:o,createText:a,createComment:i,setText:u,setElementText:c,parentNode:f,nextSibling:d,setScopeId:v=dt,insertStaticContent:E}=e,A=(p,g,y,C=null,b=null,h=null,M=void 0,T=null,P=!!g.dynamicChildren)=>{if(p===g)return;p&&!on(p,g)&&(C=w(p),ke(p,b,h,!0),p=null),g.patchFlag===-2&&(P=!1,g.dynamicChildren=null);const{type:S,ref:G,shapeFlag:D}=g;switch(S){case pr:_(p,g,y,C);break;case Et:R(p,g,y,C);break;case $n:p==null&&k(g,y,C,M);break;case _e:$e(p,g,y,C,b,h,M,T,P);break;default:D&1?O(p,g,y,C,b,h,M,T,P):D&6?Ee(p,g,y,C,b,h,M,T,P):(D&64||D&128)&&S.process(p,g,y,C,b,h,M,T,P,I)}G!=null&&b?gn(G,p&&p.ref,h,g||p,!g):G==null&&p&&p.ref!=null&&gn(p.ref,null,h,p,!0)},_=(p,g,y,C)=>{if(p==null)r(g.el=a(g.children),y,C);else{const b=g.el=p.el;g.children!==p.children&&u(b,g.children)}},R=(p,g,y,C)=>{p==null?r(g.el=i(g.children||""),y,C):g.el=p.el},k=(p,g,y,C)=>{[p.el,p.anchor]=E(p.children,g,y,C,p.el,p.anchor)},B=({el:p,anchor:g},y,C)=>{let b;for(;p&&p!==g;)b=d(p),r(p,y,C),p=b;r(g,y,C)},x=({el:p,anchor:g})=>{let y;for(;p&&p!==g;)y=d(p),s(p),p=y;s(g)},O=(p,g,y,C,b,h,M,T,P)=>{if(g.type==="svg"?M="svg":g.type==="math"&&(M="mathml"),p==null)z(g,y,C,b,h,M,T,P);else{const S=p.el&&p.el._isVueCE?p.el:null;try{S&&S._beginPatch(),be(p,g,b,h,M,T,P)}finally{S&&S._endPatch()}}},z=(p,g,y,C,b,h,M,T)=>{let P,S;const{props:G,shapeFlag:D,transition:L,dirs:j}=p;if(P=p.el=o(p.type,h,G&&G.is,G),D&8?c(P,p.children):D&16&&ne(p.children,P,null,C,b,_r(p,h),M,T),j&&Nt(p,null,C,"created"),Q(P,p,p.scopeId,M,C),G){for(const ae in G)ae!=="value"&&!dn(ae)&&l(P,ae,null,G[ae],h,C);"value"in G&&l(P,"value",null,G.value,h),(S=G.onVnodeBeforeMount)&&lt(S,C,p)}j&&Nt(p,null,C,"beforeMount");const Z=xa(b,L);Z&&L.beforeEnter(P),r(P,g,y),((S=G&&G.onVnodeMounted)||Z||j)&&Ge(()=>{try{S&&lt(S,C,p),Z&&L.enter(P),j&&Nt(p,null,C,"mounted")}finally{}},b)},Q=(p,g,y,C,b)=>{if(y&&v(p,y),C)for(let h=0;h<C.length;h++)v(p,C[h]);if(b){let h=b.subTree;if(g===h||ko(h.type)&&(h.ssContent===g||h.ssFallback===g)){const M=b.vnode;Q(p,M,M.scopeId,M.slotScopeIds,b.parent)}}},ne=(p,g,y,C,b,h,M,T,P=0)=>{for(let S=P;S<p.length;S++){const G=p[S]=T?bt(p[S]):ut(p[S]);A(null,G,g,y,C,b,h,M,T)}},be=(p,g,y,C,b,h,M)=>{const T=g.el=p.el;let{patchFlag:P,dynamicChildren:S,dirs:G}=g;P|=p.patchFlag&16;const D=p.props||ce,L=g.props||ce;let j;if(y&&Dt(y,!1),(j=L.onVnodeBeforeUpdate)&&lt(j,y,g,p),G&&Nt(g,p,y,"beforeUpdate"),y&&Dt(y,!0),S&&(!p.dynamicChildren||p.dynamicChildren.length!==S.length)&&(P=0,M=!1,S=null),(D.innerHTML&&L.innerHTML==null||D.textContent&&L.textContent==null)&&c(T,""),S?fe(p.dynamicChildren,S,T,y,C,_r(g,b),h):M||X(p,g,T,null,y,C,_r(g,b),h,!1),P>0){if(P&16)Fe(T,D,L,y,b);else if(P&2&&D.class!==L.class&&l(T,"class",null,L.class,b),P&4&&l(T,"style",D.style,L.style,b),P&8){const Z=g.dynamicProps;for(let ae=0;ae<Z.length;ae++){const ie=Z[ae],Pe=D[ie],Ce=L[ie];(Ce!==Pe||ie==="value")&&l(T,ie,Pe,Ce,b,y)}}P&1&&p.children!==g.children&&c(T,g.children)}else!M&&S==null&&Fe(T,D,L,y,b);((j=L.onVnodeUpdated)||G)&&Ge(()=>{j&&lt(j,y,g,p),G&&Nt(g,p,y,"updated")},C)},fe=(p,g,y,C,b,h,M)=>{for(let T=0;T<g.length;T++){const P=p[T],S=g[T],G=P.el&&(P.type===_e||!on(P,S)||P.shapeFlag&198)?f(P.el):y;A(P,S,G,null,C,b,h,M,!0)}},Fe=(p,g,y,C,b)=>{if(g!==y){if(g!==ce)for(const h in g)!dn(h)&&!(h in y)&&l(p,h,g[h],null,b,C);for(const h in y){if(dn(h))continue;const M=y[h],T=g[h];M!==T&&h!=="value"&&l(p,h,T,M,b,C)}"value"in y&&l(p,"value",g.value,y.value,b)}},$e=(p,g,y,C,b,h,M,T,P)=>{const S=g.el=p?p.el:a(""),G=g.anchor=p?p.anchor:a("");let{patchFlag:D,dynamicChildren:L,slotScopeIds:j}=g;j&&(T=T?T.concat(j):j),p==null?(r(S,y,C),r(G,y,C),ne(g.children||[],y,G,b,h,M,T,P)):D>0&&D&64&&L&&p.dynamicChildren&&p.dynamicChildren.length===L.length?(fe(p.dynamicChildren,L,y,b,h,M,T),(g.key!=null||b&&g===b.subTree)&&_o(p,g,!0)):X(p,g,y,G,b,h,M,T,P)},Ee=(p,g,y,C,b,h,M,T,P)=>{g.slotScopeIds=T,p==null?g.shapeFlag&512?b.ctx.activate(g,y,C,M,P):Ie(g,y,C,b,h,M,P):Ke(p,g,P)},Ie=(p,g,y,C,b,h,M)=>{const T=p.component=Da(p,C,b);if(ms(p)&&(T.ctx.renderer=I),Ia(T,!1,M),T.asyncDep){if(b&&b.registerDep(T,pe,M),!p.el){const P=T.subTree=V(Et);R(null,P,g,y),p.placeholder=P.el}}else pe(T,p,g,y,b,h,M)},Ke=(p,g,y)=>{const C=g.component=p.component;if(ma(p,g,y))if(C.asyncDep&&!C.asyncResolved){te(C,g,y);return}else C.next=g,C.update();else g.el=p.el,C.vnode=g},pe=(p,g,y,C,b,h,M)=>{const T=()=>{if(p.isMounted){let{next:D,bu:L,u:j,parent:Z,vnode:ae}=p;{const rt=xo(p);if(rt){D&&(D.el=ae.el,te(p,D,M)),rt.asyncDep.then(()=>{Ge(()=>{p.isUnmounted||S()},b)});return}}let ie=D,Pe;Dt(p,!1),D?(D.el=ae.el,te(p,D,M)):D=ae,L&&Gn(L),(Pe=D.props&&D.props.onVnodeBeforeUpdate)&&lt(Pe,Z,D,ae),Dt(p,!0);const Ce=Vs(p),nt=p.subTree;p.subTree=Ce,A(nt,Ce,f(nt.el),w(nt),p,b,h),D.el=Ce.el,ie===null&&va(p,Ce.el),j&&Ge(j,b),(Pe=D.props&&D.props.onVnodeUpdated)&&Ge(()=>lt(Pe,Z,D,ae),b)}else{let D;const{el:L,props:j}=g,{bm:Z,m:ae,parent:ie,root:Pe,type:Ce}=p,nt=mn(g);Dt(p,!1),Z&&Gn(Z),!nt&&(D=j&&j.onVnodeBeforeMount)&&lt(D,ie,g),Dt(p,!0);{Pe.ce&&Pe.ce._hasShadowRoot()&&Pe.ce._injectChildStyle(Ce,p.parent?p.parent.type:void 0);const rt=p.subTree=Vs(p);A(null,rt,y,C,p,b,h),g.el=rt.el}if(ae&&Ge(ae,b),!nt&&(D=j&&j.onVnodeMounted)){const rt=g;Ge(()=>lt(D,ie,rt),b)}(g.shapeFlag&256||ie&&mn(ie.vnode)&&ie.vnode.shapeFlag&256)&&p.a&&Ge(p.a,b),p.isMounted=!0,g=y=C=null}};p.scope.on();const P=p.effect=new Ol(T);p.scope.off();const S=p.update=P.run.bind(P),G=p.job=P.runIfDirty.bind(P);G.i=p,G.id=p.uid,P.scheduler=()=>ps(G),Dt(p,!0),S()},te=(p,g,y)=>{g.component=p;const C=p.vnode.props;p.vnode=g,p.next=null,ba(p,g.props,C,y),Sa(p,g.children,y),wt(),Ns(p),_t()},X=(p,g,y,C,b,h,M,T,P=!1)=>{const S=p&&p.children,G=p?p.shapeFlag:0,D=g.children,{patchFlag:L,shapeFlag:j}=g;if(L>0){if(L&128){Ye(S,D,y,C,b,h,M,T,P);return}else if(L&256){Je(S,D,y,C,b,h,M,T,P);return}}j&8?(G&16&&Be(S,b,h),D!==S&&c(y,D)):G&16?j&16?Ye(S,D,y,C,b,h,M,T,P):Be(S,b,h,!0):(G&8&&c(y,""),j&16&&ne(D,y,C,b,h,M,T,P))},Je=(p,g,y,C,b,h,M,T,P)=>{p=p||Kt,g=g||Kt;const S=p.length,G=g.length,D=Math.min(S,G);let L;for(L=0;L<D;L++){const j=g[L]=P?bt(g[L]):ut(g[L]);A(p[L],j,y,null,b,h,M,T,P)}S>G?Be(p,b,h,!0,!1,D):ne(g,y,C,b,h,M,T,P,D)},Ye=(p,g,y,C,b,h,M,T,P)=>{let S=0;const G=g.length;let D=p.length-1,L=G-1;for(;S<=D&&S<=L;){const j=p[S],Z=g[S]=P?bt(g[S]):ut(g[S]);if(on(j,Z))A(j,Z,y,null,b,h,M,T,P);else break;S++}for(;S<=D&&S<=L;){const j=p[D],Z=g[L]=P?bt(g[L]):ut(g[L]);if(on(j,Z))A(j,Z,y,null,b,h,M,T,P);else break;D--,L--}if(S>D){if(S<=L){const j=L+1,Z=j<G?g[j].el:C;for(;S<=L;)A(null,g[S]=P?bt(g[S]):ut(g[S]),y,Z,b,h,M,T,P),S++}}else if(S>L)for(;S<=D;)ke(p[S],b,h,!0),S++;else{const j=S,Z=S,ae=new Map;for(S=Z;S<=L;S++){const Ve=g[S]=P?bt(g[S]):ut(g[S]);Ve.key!=null&&ae.set(Ve.key,S)}let ie,Pe=0;const Ce=L-Z+1;let nt=!1,rt=0;const sn=new Array(Ce);for(S=0;S<Ce;S++)sn[S]=0;for(S=j;S<=D;S++){const Ve=p[S];if(Pe>=Ce){ke(Ve,b,h,!0);continue}let st;if(Ve.key!=null)st=ae.get(Ve.key);else for(ie=Z;ie<=L;ie++)if(sn[ie-Z]===0&&on(Ve,g[ie])){st=ie;break}st===void 0?ke(Ve,b,h,!0):(sn[st-Z]=S+1,st>=rt?rt=st:nt=!0,A(Ve,g[st],y,null,b,h,M,T,P),Pe++)}const xs=nt?Ea(sn):Kt;for(ie=xs.length-1,S=Ce-1;S>=0;S--){const Ve=Z+S,st=g[Ve],Es=g[Ve+1],ks=Ve+1<G?Es.el||Eo(Es):C;sn[S]===0?A(null,st,y,ks,b,h,M,T,P):nt&&(ie<0||S!==xs[ie]?Le(st,y,ks,2):ie--)}}},Le=(p,g,y,C,b=null)=>{const{el:h,type:M,transition:T,children:P,shapeFlag:S}=p;if(S&6){Le(p.component.subTree,g,y,C);return}if(S&128){p.suspense.move(g,y,C);return}if(S&64){M.move(p,g,y,I);return}if(M===_e){r(h,g,y);for(let D=0;D<P.length;D++)Le(P[D],g,y,C);r(p.anchor,g,y);return}if(M===$n){B(p,g,y);return}if(C!==2&&S&1&&T)if(C===0)T.persisted&&!h[Sr]?r(h,g,y):(T.beforeEnter(h),r(h,g,y),Ge(()=>T.enter(h),b));else{const{leave:D,delayLeave:L,afterLeave:j}=T,Z=()=>{p.ctx.isUnmounted?s(h):r(h,g,y)},ae=()=>{const ie=h._isLeaving||!!h[Sr];h._isLeaving&&h[Sr](!0),T.persisted&&!ie?Z():D(h,()=>{Z(),j&&j()})};L?L(h,Z,ae):ae()}else r(h,g,y)},ke=(p,g,y,C=!1,b=!1)=>{const{type:h,props:M,ref:T,children:P,dynamicChildren:S,shapeFlag:G,patchFlag:D,dirs:L,cacheIndex:j,memo:Z}=p;if(D===-2&&(b=!1),T!=null&&(wt(),gn(T,null,y,p,!0),_t()),j!=null&&(g.renderCache[j]=void 0),G&256){g.ctx.deactivate(p);return}const ae=G&1&&L,ie=!mn(p);let Pe;if(ie&&(Pe=M&&M.onVnodeBeforeUnmount)&&lt(Pe,g,p),G&6)gt(p.component,y,C);else{if(G&128){p.suspense.unmount(y,C);return}ae&&Nt(p,null,g,"beforeUnmount"),G&64?p.type.remove(p,g,y,I,C):S&&!S.hasOnce&&(h!==_e||D>0&&D&64)?Be(S,g,y,!1,!0):(h===_e&&D&384||!b&&G&16)&&Be(P,g,y),C&&We(p)}const Ce=Z!=null&&j==null;(ie&&(Pe=M&&M.onVnodeUnmounted)||ae||Ce)&&Ge(()=>{Pe&&lt(Pe,g,p),ae&&Nt(p,null,g,"unmounted"),Ce&&(p.el=null)},y)},We=p=>{const{type:g,el:y,anchor:C,transition:b}=p;if(g===_e){pt(y,C);return}if(g===$n){x(p);return}const h=()=>{s(y),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(p.shapeFlag&1&&b&&!b.persisted){const{leave:M,delayLeave:T}=b,P=()=>M(y,h);T?T(p.el,h,P):P()}else h()},pt=(p,g)=>{let y;for(;p!==g;)y=d(p),s(p),p=y;s(g)},gt=(p,g,y)=>{const{bum:C,scope:b,job:h,subTree:M,um:T,m:P,a:S}=p;zs(P),zs(S),C&&Gn(C),b.stop(),h&&(h.flags|=8,ke(M,p,g,y)),T&&Ge(T,g),Ge(()=>{p.isUnmounted=!0},g)},Be=(p,g,y,C=!1,b=!1,h=0)=>{for(let M=h;M<p.length;M++)ke(p[M],g,y,C,b)},w=p=>{if(p.shapeFlag&6)return w(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const g=d(p.anchor||p.el),y=g&&g[zi];return y?d(y):g};let H=!1;const N=(p,g,y)=>{let C;p==null?g._vnode&&(ke(g._vnode,null,null,!0),C=g._vnode.component):A(g._vnode||null,p,g,null,null,null,y),g._vnode=p,H||(H=!0,Ns(C),Xl(),H=!1)},I={p:A,um:ke,m:Le,r:We,mt:Ie,mc:ne,pc:X,pbc:fe,n:w,o:e};return{render:N,hydrate:void 0,createApp:ca(N)}}function _r({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Dt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function xa(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function _o(e,t,n=!1){const r=e.children,s=t.children;if(F(r)&&F(s))for(let l=0;l<r.length;l++){const o=r[l];let a=s[l];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[l]=bt(s[l]),a.el=o.el),!n&&a.patchFlag!==-2&&_o(o,a)),a.type===pr&&(a.patchFlag===-1&&(a=s[l]=bt(a)),a.el=o.el),a.type===Et&&!a.el&&(a.el=o.el)}}function Ea(e){const t=e.slice(),n=[0];let r,s,l,o,a;const i=e.length;for(r=0;r<i;r++){const u=e[r];if(u!==0){if(s=n[n.length-1],e[s]<u){t[r]=s,n.push(r);continue}for(l=0,o=n.length-1;l<o;)a=l+o>>1,e[n[a]]<u?l=a+1:o=a;u<e[n[l]]&&(l>0&&(t[r]=n[l-1]),n[l]=r)}}for(l=n.length,o=n[l-1];l-- >0;)n[l]=o,o=t[o];return n}function xo(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:xo(t)}function zs(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Eo(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Eo(t.subTree):null}const ko=e=>e.__isSuspense;function ka(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):$i(e)}const _e=Symbol.for("v-fgt"),pr=Symbol.for("v-txt"),Et=Symbol.for("v-cmt"),$n=Symbol.for("v-stc"),$t=[];let Ue=null;function K(e=!1){$t.push(Ue=e?null:[])}function Ro(){$t.pop(),Ue=$t[$t.length-1]||null}let Cn=1;function Jn(e,t=!1){Cn+=e,e<0&&Ue&&t&&(Ue.hasOnce=!0)}function Mo(e){return e.dynamicChildren=Cn>0?Ue||Kt:null,Ro(),Cn>0&&Ue&&Ue.push(e),e}function ue(e,t,n,r,s,l){return Mo(m(e,t,n,r,s,l,!0))}function ze(e,t,n,r,s){return Mo(V(e,t,n,r,s,!0))}function Yn(e){return e?e.__v_isVNode===!0:!1}function on(e,t){return e.type===t.type&&e.key===t.key}const To=({key:e})=>e??null,Vn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ge(e)||Te(e)||W(e)?{i:je,r:e,k:t,f:!!n}:e:null);function m(e,t=null,n=null,r=0,s=null,l=e===_e?0:1,o=!1,a=!1){const i={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&To(t),ref:t&&Vn(t),scopeId:eo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:je};return a?(Qn(i,n),l&128&&e.normalize(i)):n&&(i.shapeFlag|=ge(n)?8:16),Cn>0&&!o&&Ue&&(i.patchFlag>0||l&6)&&i.patchFlag!==32&&Ue.push(i),i}const V=Ra;function Ra(e,t=null,n=null,r=0,s=null,l=!1){if((!e||e===uo)&&(e=Et),Yn(e)){const a=en(e,t,!0);return n&&Qn(a,n),Cn>0&&!l&&Ue&&(a.shapeFlag&6?Ue[Ue.indexOf(e)]=a:Ue.push(a)),a.patchFlag=-2,a}if(Va(e)&&(e=e.__vccOpts),t){t=Ma(t);let{class:a,style:i}=t;a&&!ge(a)&&(t.class=me(a)),oe(i)&&(hs(i)&&!F(i)&&(i=xe({},i)),t.style=Jt(i))}const o=ge(e)?1:ko(e)?128:fr(e)?64:oe(e)?4:W(e)?2:0;return m(e,t,n,r,s,o,l,!0)}function Ma(e){return e?hs(e)||bo(e)?xe({},e):e:null}function en(e,t,n=!1,r=!1){const{props:s,ref:l,patchFlag:o,children:a,transition:i}=e,u=t?Ba(s||{},t):s,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&To(u),ref:t&&t.ref?n&&l?F(l)?l.concat(Vn(t)):[l,Vn(t)]:Vn(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==_e?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:i,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&en(e.ssContent),ssFallback:e.ssFallback&&en(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return i&&r&&gs(c,i.clone(c)),c}function q(e=" ",t=0){return V(pr,null,e,t)}function Ta(e,t){const n=V($n,null,e);return n.staticCount=t,n}function gr(e="",t=!1){return t?(K(),ze(Et,null,e)):V(Et,null,e)}function ut(e){return e==null||typeof e=="boolean"?V(Et):F(e)?V(_e,null,e.slice()):Yn(e)?bt(e):V(pr,null,String(e))}function bt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:en(e)}function Qn(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Qn(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!bo(t)?t._ctx=je:s===3&&je&&(je.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(W(t)){if(r&65){Qn(e,{default:t});return}t={default:t,_ctx:je},n=32}else t=String(t),r&64?(n=16,t=[q(t)]):n=8;e.children=t,e.shapeFlag|=n}function Ba(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=me([t.class,r.class]));else if(s==="style")t.style=Jt([t.style,r.style]);else if(nr(s)){const l=t[s],o=r[s];o&&l!==o&&!(F(l)&&l.includes(o))?t[s]=l?[].concat(l,o):o:o==null&&l==null&&!rr(s)&&(t[s]=o)}else s!==""&&(t[s]=r[s])}return t}function lt(e,t,n,r=null){et(e,t,7,[n,r])}const Oa=po();let Na=0;function Da(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Oa,l={uid:Na++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new hi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ao(r,s),emitsOptions:go(r,s),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:r.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=da.bind(null,l),e.ce&&e.ce(l),l}let Me=null;const Ha=()=>Me||je;let Xn,Sn;{const e=ir(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),l=>{s.length>1?s.forEach(o=>o(l)):s[0](l)}};Xn=t("__VUE_INSTANCE_SETTERS__",n=>Me=n),Sn=t("__VUE_SSR_SETTERS__",n=>wn=n)}const Tn=e=>{const t=Me;return Xn(e),e.scope.on(),()=>{e.scope.off(),Xn(t)}},Ws=()=>{Me&&Me.scope.off(),Xn(null)};function Bo(e){return e.vnode.shapeFlag&4}let wn=!1;function Ia(e,t=!1,n=!1){t&&Sn(t);const{props:r,children:s}=e.vnode,l=Bo(e);ya(e,r,l,t),Ca(e,s,n||t);const o=l?La(e,t):void 0;return t&&Sn(!1),o}function La(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ra);const{setup:r}=n;if(r){wt();const s=e.setupContext=r.length>1?Fa(e):null,l=Tn(e),o=Rn(r,e,0,[e.props,s]),a=xl(o);if(_t(),l(),(a||e.sp)&&!mn(e)&&lo(e),a){if(o.then(Ws,Ws),t)return o.then(i=>{Sn(!0);try{qs(e,i,t)}finally{Sn(!1)}}).catch(i=>{ur(i,e,0)});e.asyncDep=o}else qs(e,o)}else Oo(e)}function qs(e,t,n){W(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:oe(t)&&(e.setupState=Jl(t)),Oo(e)}function Oo(e,t,n){const r=e.type;e.render||(e.render=r.render||dt);{const s=Tn(e);wt();try{sa(e)}finally{_t(),s()}}}const Ga={get(e,t){return Re(e,"get",""),e[t]}};function Fa(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Ga),slots:e.slots,emit:e.emit,expose:t}}function mr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Jl(Bi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in vn)return vn[n](e)},has(t,n){return n in t||n in vn}})):e.proxy}function $a(e,t=!0){return W(e)?e.displayName||e.name:e.name||t&&e.__name}function Va(e){return W(e)&&"__vccOpts"in e}const he=(e,t)=>Hi(e,t,wn);function _n(e,t,n){try{Jn(-1);const r=arguments.length;return r===2?oe(t)&&!F(t)?Yn(t)?V(e,null,[t]):V(e,t):V(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Yn(n)&&(n=[n]),V(e,t,n))}finally{Jn(1)}}const ja="3.5.42";/**
* @vue/runtime-dom v3.5.42
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Kr;const Ks=typeof window<"u"&&window.trustedTypes;if(Ks)try{Kr=Ks.createPolicy("vue",{createHTML:e=>e})}catch{}const No=Kr?e=>Kr.createHTML(e):e=>e,Ua="http://www.w3.org/2000/svg",za="http://www.w3.org/1998/Math/MathML",yt=typeof document<"u"?document:null,Js=yt&&yt.createElement("template"),Wa={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?yt.createElementNS(Ua,e):t==="mathml"?yt.createElementNS(za,e):n?yt.createElement(e,{is:n}):yt.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>yt.createTextNode(e),createComment:e=>yt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>yt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,l){const o=n?n.previousSibling:t.lastChild;if(s&&(s===l||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===l||!(s=s.nextSibling)););else{Js.innerHTML=No(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=Js.content;if(r==="svg"||r==="mathml"){const i=a.firstChild;for(;i.firstChild;)a.appendChild(i.firstChild);a.removeChild(i)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},qa=Symbol("_vtc");function Ka(e,t,n){const r=e[qa];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Ys=Symbol("_vod"),Ja=Symbol("_vsh"),Ya=Symbol(""),Qa=/(?:^|;)\s*display\s*:/;function Xa(e,t,n){const r=e.style,s=ge(n);let l=!1;if(n&&!s){if(t)if(ge(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&fn(r,a,"")}else for(const o in t)n[o]==null&&fn(r,o,"");for(const o in n){o==="display"&&(l=!0);const a=n[o];a!=null?eu(e,o,!ge(t)&&t?t[o]:void 0,a)||fn(r,o,a):fn(r,o,"")}}else if(s){if(t!==n){const o=r[Ya];o&&(n+=";"+o),r.cssText=n,l=Qa.test(n)}}else t&&e.removeAttribute("style");Ys in e&&(e[Ys]=l?r.display:"",e[Ja]&&(r.display="none"))}const Dn=/\s*!important$/;function fn(e,t,n){if(F(n))n.forEach(r=>fn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))Dn.test(n)?e.setProperty(t,n.replace(Dn,""),"important"):e.setProperty(t,n);else{const r=Za(e,t);Dn.test(n)?e.setProperty(Vt(r),n.replace(Dn,""),"important"):e[r]=n}}const Qs=["Webkit","Moz","ms"],xr={};function Za(e,t){const n=xr[t];if(n)return n;let r=He(t);if(r!=="filter"&&r in e)return xr[t]=r;r=lr(r);for(let s=0;s<Qs.length;s++){const l=Qs[s]+r;if(l in e)return xr[t]=l}return t}function eu(e,t,n,r){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&ge(r)&&n===r}const Xs="http://www.w3.org/1999/xlink";function Zs(e,t,n,r,s,l=fi(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Xs,t.slice(6,t.length)):e.setAttributeNS(Xs,t,n):n==null||l&&!Ml(n)?e.removeAttribute(t):e.setAttribute(t,l?"":ht(n)?String(n):n)}function el(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?No(n):n);return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){const a=l==="OPTION"?e.getAttribute("value")||"":e.value,i=n==null?e.type==="checkbox"?"on":"":String(n);(a!==i||!("_value"in e))&&(e.value=i),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Ml(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function Bt(e,t,n,r){e.addEventListener(t,n,r)}function tu(e,t,n,r){e.removeEventListener(t,n,r)}const tl=Symbol("_vei");function nu(e,t,n,r,s=null){const l=e[tl]||(e[tl]={}),o=l[t];if(r&&o)o.value=r;else{const[a,i]=lu(t);if(r){const u=l[t]=au(r,s);Bt(e,a,u,i)}else o&&(tu(e,a,o,i),l[t]=void 0)}}const ru=/(Once|Passive|Capture)$/,su=/^on:?(?:Once|Passive|Capture)$/;function lu(e){let t,n;for(;(n=e.match(ru))&&!su.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):Vt(e.slice(2)),t]}let Er=0;const ou=Promise.resolve(),iu=()=>Er||(ou.then(()=>Er=0),Er=Date.now());function au(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(F(s)){const l=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{l.call(r),r._stopped=!0};const o=s.slice(),a=[r];for(let i=0;i<o.length&&!r._stopped;i++){const u=o[i];u&&et(u,t,5,a)}}else et(s,t,5,[r])};return n.value=e,n.attached=iu(),n}const nl=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,uu=(e,t,n,r,s,l)=>{const o=s==="svg";t==="class"?Ka(e,r,o):t==="style"?Xa(e,n,r):nr(t)?rr(t)||nu(e,t,n,r,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):cu(e,t,r,o))?(el(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Zs(e,t,r,o,l,t!=="value")):e._isVueCE&&(fu(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!ge(r)))?el(e,He(t),r,l,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Zs(e,t,r,o))};function cu(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&nl(t)&&W(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return nl(t)&&ge(n)?!1:t in e}function fu(e,t){const n=e._def.props;if(!n)return!1;const r=He(t);return Array.isArray(n)?n.some(s=>He(s)===r):Object.keys(n).some(s=>He(s)===r)}const tn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return F(t)?n=>Gn(t,n):t};function du(e){e.target.composing=!0}function rl(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ft=Symbol("_assign"),Hn=Symbol("_initialValue");function kr(e,t,n){return t&&(e=e.trim()),n&&(e=or(e)),e}const we={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e.parentNode&&(e.type==="text"?e[Hn]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[Hn]=e.defaultValue.replace(/\r\n?/g,`
`))),e[ft]=tn(s);const l=r||s.props&&s.props.type==="number";Bt(e,t?"change":"input",o=>{o.target.composing||e[ft](kr(e.value,n,l))}),(n||l)&&Bt(e,"change",()=>{e.value=kr(e.value,n,l)}),t||(Bt(e,"compositionstart",du),Bt(e,"compositionend",rl),Bt(e,"change",rl))},mounted(e,{value:t,modifiers:{trim:n,number:r}}){const s=t??"",l=e[Hn];delete e[Hn],l!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==l?e[ft](kr(e.value,n,r)):e.value=s},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:s,number:l}},o){if(e[ft]=tn(o),e.composing)return;const a=(l||e.type==="number")&&!/^0\d/.test(e.value)?or(e.value):e.value,i=t??"";if(a===i)return;const u=e.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===e&&e.type!=="range"&&(r&&t===n||s&&e.value.trim()===i)||(e.value=i)}},In={deep:!0,created(e,t,n){e[ft]=tn(n),Bt(e,"change",()=>{const r=e._modelValue,s=xn(e),l=e.checked,o=e[ft];if(F(r)){const a=os(r,s),i=a!==-1;if(l&&!i)o(r.concat(s));else if(!l&&i){const u=[...r];u.splice(a,1),o(u)}}else if(Ct(r)){const a=new Set(r);l?a.add(s):a.delete(s),o(a)}else o(Do(e,l))})},mounted:sl,beforeUpdate(e,t,n){e[ft]=tn(n),sl(e,t,n)}};function sl(e,{value:t,oldValue:n},r){e._modelValue=t;let s;if(F(t))s=os(t,r.props.value)>-1;else if(Ct(t))s=t.has(r.props.value);else{if(t===n)return;s=St(t,Do(e,!0))}e.checked!==s&&(e.checked=s)}const hu={deep:!0,created(e,{value:t,modifiers:{number:n}},r){e._modelValue=t,Bt(e,"change",()=>{const s=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>n?or(xn(i)):xn(i)),l=e.multiple,o=l?Ct(e._modelValue)?new Set(s):s:s[0],a=e._pendingValue=[l,l?F(o)?s.slice():s:o];try{e[ft](o)}finally{at(()=>{e._pendingValue===a&&(e._pendingValue=void 0)})}}),e[ft]=tn(r)},mounted(e,{value:t}){ll(e,t)},beforeUpdate(e,{value:t},n){e._modelValue=t,e[ft]=tn(n)},updated(e,{value:t}){const n=e._pendingValue;e._pendingValue=void 0,(!n||n[0]!==e.multiple||!pu(t,n[1],n[0]))&&ll(e,t)}};function pu(e,t,n){if(!n||F(e))return St(e,t);if(Ct(e)){if(e.size!==t.length)return!1;for(const r of t)if(!e.has(r))return!1;return!0}return!1}function ll(e,t){const n=e.multiple,r=F(t);if(!(n&&!r&&!Ct(t))){for(let s=0,l=e.options.length;s<l;s++){const o=e.options[s],a=xn(o);if(n)if(r){const i=typeof a;i==="string"||i==="number"?o.selected=t.some(u=>String(u)===String(a)):o.selected=os(t,a)>-1}else o.selected=t.has(a);else if(St(xn(o),t)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function xn(e){return"_value"in e?e._value:e.value}function Do(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const gu=["ctrl","shift","alt","meta"],mu={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>gu.some(n=>e[`${n}Key`]&&!t.includes(n))},Ln=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=((s,...l)=>{for(let o=0;o<t.length;o++){const a=mu[t[o]];if(a&&a(s,t))return}return e(s,...l)}))},vu=xe({patchProp:uu},Wa);let ol;function yu(){return ol||(ol=wa(vu))}const bu=((...e)=>{const t=yu().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Au(r);if(!s)return;const l=t._component;!W(l)&&!l.render&&!l.template&&(l.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Pu(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function Pu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Au(e){return ge(e)?document.querySelector(e):e}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Wt=typeof document<"u";function Ho(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Cu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Ho(e.default)}const re=Object.assign;function Rr(e,t){const n={};for(const r in t){const s=t[r];n[r]=tt(s)?s.map(e):e(s)}return n}const yn=()=>{},tt=Array.isArray;function il(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const Io=/#/g,Su=/&/g,wu=/\//g,_u=/=/g,xu=/\?/g,Lo=/\+/g,Eu=/%5B/g,ku=/%5D/g,Go=/%5E/g,Ru=/%60/g,Fo=/%7B/g,Mu=/%7C/g,$o=/%7D/g,Tu=/%20/g;function Ps(e){return e==null?"":encodeURI(""+e).replace(Mu,"|").replace(Eu,"[").replace(ku,"]")}function Bu(e){return Ps(e).replace(Fo,"{").replace($o,"}").replace(Go,"^")}function Jr(e){return Ps(e).replace(Lo,"%2B").replace(Tu,"+").replace(Io,"%23").replace(Su,"%26").replace(Ru,"`").replace(Fo,"{").replace($o,"}").replace(Go,"^")}function Ou(e){return Jr(e).replace(_u,"%3D")}function Nu(e){return Ps(e).replace(Io,"%23").replace(xu,"%3F")}function Du(e){return Nu(e).replace(wu,"%2F")}function En(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Hu=/\/$/,Iu=e=>e.replace(Hu,"");function Mr(e,t,n="/"){let r,s={},l="",o="";const a=t.indexOf("#");let i=t.indexOf("?");return i=a>=0&&i>a?-1:i,i>=0&&(r=t.slice(0,i),l=t.slice(i,a>0?a:t.length),s=e(l.slice(1))),a>=0&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=$u(r??t,n),{fullPath:r+l+o,path:r,query:s,hash:En(o)}}function Lu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function al(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Gu(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&nn(t.matched[r],n.matched[s])&&Vo(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function nn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Vo(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Fu(e[n],t[n]))return!1;return!0}function Fu(e,t){return tt(e)?ul(e,t):tt(t)?ul(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function ul(e,t){return tt(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function $u(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let l=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")l>1&&l--;else break;return n.slice(0,l).join("/")+"/"+r.slice(o).join("/")}const Rt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Yr=(function(e){return e.pop="pop",e.push="push",e})({}),Tr=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Vu(e){if(!e)if(Wt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Iu(e)}const ju=/^[^#]+#/;function Uu(e,t){return e.replace(ju,"#")+t}function zu(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const vr=()=>({left:window.scrollX,top:window.scrollY});function Wu(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=zu(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function cl(e,t){return(history.state?history.state.position-t:-1)+e}const Qr=new Map;function qu(e,t){Qr.set(e,t)}function Ku(e){const t=Qr.get(e);return Qr.delete(e),t}function Ju(e){return typeof e=="string"||e&&typeof e=="object"}function jo(e){return typeof e=="string"||typeof e=="symbol"}let ve=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Uo=Symbol("");ve.MATCHER_NOT_FOUND+"",ve.NAVIGATION_GUARD_REDIRECT+"",ve.NAVIGATION_ABORTED+"",ve.NAVIGATION_CANCELLED+"",ve.NAVIGATION_DUPLICATED+"";function rn(e,t){return re(new Error,{type:e,[Uo]:!0},t)}function vt(e,t){return e instanceof Error&&Uo in e&&(t==null||!!(e.type&t))}const Yu=["params","query","hash"];function Qu(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of Yu)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function Xu(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Lo," "),l=s.indexOf("="),o=En(l<0?s:s.slice(0,l)),a=l<0?null:En(s.slice(l+1));if(o in t){let i=t[o];tt(i)||(i=t[o]=[i]),i.push(a)}else t[o]=a}return t}function fl(e){let t="";for(let n in e){const r=e[n];if(n=Ou(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(tt(r)?r.map(s=>s&&Jr(s)):[r&&Jr(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Zu(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=tt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const ec=Symbol(""),dl=Symbol(""),As=Symbol(""),Cs=Symbol(""),Xr=Symbol("");function an(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Tt(e,t,n,r,s,l=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,i)=>{const u=d=>{d===!1?i(rn(ve.NAVIGATION_ABORTED,{from:n,to:t})):d instanceof Error?i(d):Ju(d)?i(rn(ve.NAVIGATION_GUARD_REDIRECT,{from:t,to:d})):(o&&r.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},c=l(()=>e.call(r&&r.instances[s],t,n,u));let f=Promise.resolve(c);e.length<3&&(f=f.then(u)),f.catch(d=>i(d))})}function Br(e,t,n,r,s=l=>l()){const l=[];for(const o of e)for(const a in o.components){let i=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Ho(i)){const u=(i.__vccOpts||i)[t];u&&l.push(Tt(u,n,r,o,a,s))}else{let u=i();l.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Cu(c)?c.default:c;o.mods[a]=c,o.components[a]=f;const d=(f.__vccOpts||f)[t];return d&&Tt(d,n,r,o,a,s)()}))}}return l}function tc(e,t){const n=[],r=[],s=[],l=Math.max(t.matched.length,e.matched.length);for(let o=0;o<l;o++){const a=t.matched[o];a&&(e.matched.find(u=>nn(u,a))?r.push(a):n.push(a));const i=e.matched[o];i&&(t.matched.find(u=>nn(u,i))||s.push(i))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let nc=()=>location.protocol+"//"+location.host;function zo(e,t){const{pathname:n,search:r,hash:s}=t,l=e.indexOf("#");if(l>-1){let o=s.includes(e.slice(l))?e.slice(l).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),al(a,"")}return al(n,e)+r+s}function rc(e,t,n,r){let s=[],l=[],o=null;const a=({state:d})=>{const v=zo(e,location),E=n.value,A=t.value;let _=0;if(d){if(n.value=v,t.value=d,o&&o===E){o=null;return}_=A?d.position-A.position:0}else r(v);s.forEach(R=>{R(n.value,E,{delta:_,type:Yr.pop,direction:_?_>0?Tr.forward:Tr.back:Tr.unknown})})};function i(){o=n.value}function u(d){s.push(d);const v=()=>{const E=s.indexOf(d);E>-1&&s.splice(E,1)};return l.push(v),v}function c(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(re({},d.state,{scroll:vr()}),"")}}function f(){for(const d of l)d();l=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:i,listen:u,destroy:f}}function hl(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?vr():null}}function sc(e){const{history:t,location:n}=window,r={value:zo(e,n)},s={value:t.state};s.value||l(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(i,u,c){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+i:nc()+e+i;try{t[c?"replaceState":"pushState"](u,"",d),s.value=u}catch(v){console.error(v),n[c?"replace":"assign"](d)}}function o(i,u){l(i,re({},t.state,hl(s.value.back,i,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=i}function a(i,u){const c=re({},s.value,t.state,{forward:i,scroll:vr()});l(c.current,c,!0),l(i,re({},hl(r.value,i,null),{position:c.position+1},u),!1),r.value=i}return{location:r,state:s,push:a,replace:o}}function lc(e){e=Vu(e);const t=sc(e),n=rc(e,t.state,t.location,t.replace);function r(l,o=!0){o||n.pauseListeners(),history.go(l)}const s=re({location:"",base:e,go:r,createHref:Uu.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}let It=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Ae=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Ae||{});const oc={type:It.Static,value:""},ic=/[a-zA-Z0-9_]/;function ac(e){if(!e)return[[]];if(e==="/")return[[oc]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=Ae.Static,r=n;const s=[];let l;function o(){l&&s.push(l),l=[]}let a=0,i,u="",c="";function f(){u&&(n===Ae.Static?l.push({type:It.Static,value:u}):n===Ae.Param||n===Ae.ParamRegExp||n===Ae.ParamRegExpEnd?(l.length>1&&(i==="*"||i==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),l.push({type:It.Param,value:u,regexp:c,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):t("Invalid state to consume buffer"),u="")}function d(){u+=i}for(;a<e.length;){if(i=e[a++],i==="\\"&&n!==Ae.ParamRegExp){r=n,n=Ae.EscapeNext;continue}switch(n){case Ae.Static:i==="/"?(u&&f(),o()):i===":"?(f(),n=Ae.Param):d();break;case Ae.EscapeNext:d(),n=r;break;case Ae.Param:i==="("?n=Ae.ParamRegExp:ic.test(i)?d():(f(),n=Ae.Static,i!=="*"&&i!=="?"&&i!=="+"&&a--);break;case Ae.ParamRegExp:i===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+i:n=Ae.ParamRegExpEnd:c+=i;break;case Ae.ParamRegExpEnd:f(),n=Ae.Static,i!=="*"&&i!=="?"&&i!=="+"&&a--,c="";break;default:t("Unknown state");break}}return n===Ae.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}const pl="[^/]+?",uc={sensitive:!1,strict:!1,start:!0,end:!0};var Ne=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Ne||{});const cc=/[.+*?^${}()[\]/\\]/g;function fc(e,t){const n=re({},uc,t),r=[];let s=n.start?"^":"";const l=[];for(const u of e){const c=u.length?[]:[Ne.Root];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const d=u[f];let v=Ne.Segment+(n.sensitive?Ne.BonusCaseSensitive:0);if(d.type===It.Static)f||(s+="/"),s+=d.value.replace(cc,"\\$&"),v+=Ne.Static;else if(d.type===It.Param){const{value:E,repeatable:A,optional:_,regexp:R}=d;l.push({name:E,repeatable:A,optional:_});const k=R||pl;if(k!==pl){v+=Ne.BonusCustomRegExp;try{`${k}`}catch(x){throw new Error(`Invalid custom RegExp for param "${E}" (${k}): `+x.message)}}let B=A?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;f||(B=_&&u.length<2?`(?:/${B})`:"/"+B),_&&(B+="?"),s+=B,v+=Ne.Dynamic,_&&(v+=Ne.BonusOptional),A&&(v+=Ne.BonusRepeatable),k===".*"&&(v+=Ne.BonusWildcard)}c.push(v)}r.push(c)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=Ne.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const c=u.match(o),f={};if(!c)return null;for(let d=1;d<c.length;d++){const v=c[d]||"",E=l[d-1];f[E.name]=v&&E.repeatable?v.split("/"):v}return f}function i(u){let c="",f=!1;for(const d of e){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const v of d)if(v.type===It.Static)c+=v.value;else if(v.type===It.Param){const{value:E,repeatable:A,optional:_}=v,R=E in u?u[E]:"";if(tt(R)&&!A)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const k=tt(R)?R.join("/"):R;if(!k)if(_)d.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${E}"`);c+=k}}return c||"/"}return{re:o,score:r,keys:l,parse:a,stringify:i}}function dc(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===Ne.Static+Ne.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ne.Static+Ne.Segment?1:-1:0}function Wo(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const l=dc(r[n],s[n]);if(l)return l;n++}if(Math.abs(s.length-r.length)===1){if(gl(r))return 1;if(gl(s))return-1}return s.length-r.length}function gl(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const hc={strict:!1,end:!0,sensitive:!1};function pc(e,t,n){const r=fc(ac(e.path),n),s=re(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function gc(e,t){const n=[],r=new Map;t=il(hc,t);function s(f){return r.get(f)}function l(f,d,v){const E=!v,A=vl(f);A.aliasOf=v&&v.record;const _=il(t,f),R=[A];if("alias"in f){const x=typeof f.alias=="string"?[f.alias]:f.alias;for(const O of x)R.push(vl(re({},A,{components:v?v.record.components:A.components,path:O,aliasOf:v?v.record:A})))}let k,B;for(const x of R){const{path:O}=x;if(d&&O[0]!=="/"){const z=d.record.path,Q=z[z.length-1]==="/"?"":"/";x.path=d.record.path+(O&&Q+O)}if(k=pc(x,d,_),v?v.alias.push(k):(B=B||k,B!==k&&B.alias.push(k),E&&f.name&&!yl(k)&&o(f.name)),qo(k)&&i(k),A.children){const z=A.children;for(let Q=0;Q<z.length;Q++)l(z[Q],k,v&&v.children[Q])}v=v||k}return B?()=>{o(B)}:yn}function o(f){if(jo(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function i(f){const d=yc(f,n);n.splice(d,0,f),f.record.name&&!yl(f)&&r.set(f.record.name,f)}function u(f,d){let v,E={},A,_;if("name"in f&&f.name){if(v=r.get(f.name),!v)throw rn(ve.MATCHER_NOT_FOUND,{location:f});_=v.record.name,E=re(ml(d.params,v.keys.filter(B=>!B.optional).concat(v.parent?v.parent.keys.filter(B=>B.optional):[]).map(B=>B.name)),f.params&&ml(f.params,v.keys.map(B=>B.name))),A=v.stringify(E)}else if(f.path!=null)A=f.path,v=n.find(B=>B.re.test(A)),v&&(E=v.parse(A),_=v.record.name);else{if(v=d.name?r.get(d.name):n.find(B=>B.re.test(d.path)),!v)throw rn(ve.MATCHER_NOT_FOUND,{location:f,currentLocation:d});_=v.record.name,E=re({},d.params,f.params),A=v.stringify(E)}const R=[];let k=v;for(;k;)R.unshift(k.record),k=k.parent;return{name:_,path:A,params:E,matched:R,meta:vc(R)}}e.forEach(f=>l(f));function c(){n.length=0,r.clear()}return{addRoute:l,resolve:u,removeRoute:o,clearRoutes:c,getRoutes:a,getRecordMatcher:s}}function ml(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function vl(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:mc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function mc(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function yl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function vc(e){return e.reduce((t,n)=>re(t,n.meta),{})}function yc(e,t){let n=0,r=t.length;for(;n!==r;){const l=n+r>>1;Wo(e,t[l])<0?r=l:n=l+1}const s=bc(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function bc(e){let t=e;for(;t=t.parent;)if(qo(t)&&Wo(e,t)===0)return t}function qo({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function bl(e){const t=Xe(As),n=Xe(Cs),r=he(()=>{const i=$(e.to);return t.resolve(i)}),s=he(()=>{const{matched:i}=r.value,{length:u}=i,c=i[u-1],f=n.matched;if(!c||!f.length)return-1;const d=f.findIndex(nn.bind(null,c));if(d>-1)return d;const v=Pl(i[u-2]);return u>1&&Pl(c)===v&&f[f.length-1].path!==v?f.findIndex(nn.bind(null,i[u-2])):d}),l=he(()=>s.value>-1&&wc(n.params,r.value.params)),o=he(()=>s.value>-1&&s.value===n.matched.length-1&&Vo(n.params,r.value.params));function a(i={}){if(Sc(i)){const u=t[$(e.replace)?"replace":"push"]($(e.to)).catch(yn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:he(()=>r.value.href),isActive:l,isExactActive:o,navigate:a}}function Pc(e){return e.length===1?e[0]:e}const Ac=so({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:bl,setup(e,{slots:t}){const n=Xt(bl(e)),{options:r}=Xe(As),s=he(()=>({[Al(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Al(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&Pc(t.default(n));return e.custom?l:_n("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},l)}}}),Cc=Ac;function Sc(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function wc(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!tt(s)||s.length!==r.length||r.some((l,o)=>l.valueOf()!==s[o].valueOf()))return!1}return!0}function Pl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Al=(e,t,n)=>e??t??n,_c=so({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Xe(Xr),s=he(()=>e.route||r.value),l=Xe(dl,0),o=he(()=>{let u=$(l);const{matched:c}=s.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),a=he(()=>s.value.matched[o.value]);Fn(dl,he(()=>o.value+1)),Fn(ec,a),Fn(Xr,s);const i=ee();return Ft(()=>[i.value,a.value,e.name],([u,c,f],[d,v,E])=>{c&&(c.instances[f]=u,v&&v!==c&&u&&u===d&&(c.leaveGuards.size||(c.leaveGuards=v.leaveGuards),c.updateGuards.size||(c.updateGuards=v.updateGuards))),u&&c&&(!v||!nn(c,v)||!d)&&(c.enterCallbacks[f]||[]).forEach(A=>A(u))},{flush:"post"}),()=>{const u=s.value,c=e.name,f=a.value,d=f&&f.components[c];if(!d)return Cl(n.default,{Component:d,route:u});const v=f.props[c],E=v?v===!0?u.params:typeof v=="function"?v(u):v:null,_=_n(d,re({},E,t,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(f.instances[c]=null)},ref:i}));return Cl(n.default,{Component:_,route:u})||_}}});function Cl(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const xc=_c;function Ec(e){const t=gc(e.routes,e),n=e.parseQuery||Xu,r=e.stringifyQuery||fl,s=e.history,l=an(),o=an(),a=an(),i=Vr(Rt);let u=Rt;Wt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Rr.bind(null,w=>""+w),f=Rr.bind(null,Du),d=Rr.bind(null,En);function v(w,H){let N,I;return jo(w)?(N=t.getRecordMatcher(w),I=H):I=w,t.addRoute(I,N)}function E(w){const H=t.getRecordMatcher(w);H&&t.removeRoute(H)}function A(){return t.getRoutes().map(w=>w.record)}function _(w){return!!t.getRecordMatcher(w)}function R(w,H){if(H=re({},H||i.value),typeof w=="string"){const y=Mr(n,w,H.path),C=t.resolve({path:y.path},H),b=s.createHref(y.fullPath);return re(y,C,{params:d(C.params),hash:En(y.hash),redirectedFrom:void 0,href:b})}let N;if(w.path!=null)N=re({},w,{path:Mr(n,w.path,H.path).path});else{const y=re({},w.params);for(const C in y)y[C]==null&&delete y[C];N=re({},w,{params:f(y)}),H.params=f(H.params)}const I=t.resolve(N,H),J=w.hash||"";I.params=c(d(I.params));const p=Lu(r,re({},w,{hash:Bu(J),path:I.path})),g=s.createHref(p);return re({fullPath:p,hash:J,query:r===fl?Zu(w.query):w.query||{}},I,{redirectedFrom:void 0,href:g})}function k(w){return typeof w=="string"?Mr(n,w,i.value.path):re({},w)}function B(w,H){if(u!==w)return rn(ve.NAVIGATION_CANCELLED,{from:H,to:w})}function x(w){return Q(w)}function O(w){return x(re(k(w),{replace:!0}))}function z(w,H){const N=w.matched[w.matched.length-1];if(N&&N.redirect){const{redirect:I}=N;let J=typeof I=="function"?I(w,H):I;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=k(J):{path:J},J.params={}),re({query:w.query,hash:w.hash,params:J.path!=null?{}:w.params},J)}}function Q(w,H){const N=u=R(w),I=i.value,J=w.state,p=w.force,g=w.replace===!0,y=z(N,I);if(y)return Q(re(k(y),{state:typeof y=="object"?re({},J,y.state):J,force:p,replace:g}),H||N);const C=N;C.redirectedFrom=H;let b;return!p&&Gu(r,I,N)&&(b=rn(ve.NAVIGATION_DUPLICATED,{to:C,from:I}),Le(I,I,!0,!1)),(b?Promise.resolve(b):fe(C,I)).catch(h=>vt(h)?vt(h,ve.NAVIGATION_GUARD_REDIRECT)?h:Ye(h):X(h,C,I)).then(h=>{if(h){if(vt(h,ve.NAVIGATION_GUARD_REDIRECT))return Q(re({replace:g},k(h.to),{state:typeof h.to=="object"?re({},J,h.to.state):J,force:p}),H||C)}else h=$e(C,I,!0,g,J);return Fe(C,I,h),h})}function ne(w,H){const N=B(w,H);return N?Promise.reject(N):Promise.resolve()}function be(w){const H=pt.values().next().value;return H&&typeof H.runWithContext=="function"?H.runWithContext(w):w()}function fe(w,H){let N;const[I,J,p]=tc(w,H);N=Br(I.reverse(),"beforeRouteLeave",w,H);for(const y of I)y.leaveGuards.forEach(C=>{N.push(Tt(C,w,H))});const g=ne.bind(null,w,H);return N.push(g),Be(N).then(()=>{N=[];for(const y of l.list())N.push(Tt(y,w,H));return N.push(g),Be(N)}).then(()=>{N=Br(J,"beforeRouteUpdate",w,H);for(const y of J)y.updateGuards.forEach(C=>{N.push(Tt(C,w,H))});return N.push(g),Be(N)}).then(()=>{N=[];for(const y of p)if(y.beforeEnter)if(tt(y.beforeEnter))for(const C of y.beforeEnter)N.push(Tt(C,w,H));else N.push(Tt(y.beforeEnter,w,H));return N.push(g),Be(N)}).then(()=>(w.matched.forEach(y=>y.enterCallbacks={}),N=Br(p,"beforeRouteEnter",w,H,be),N.push(g),Be(N))).then(()=>{N=[];for(const y of o.list())N.push(Tt(y,w,H));return N.push(g),Be(N)}).catch(y=>vt(y,ve.NAVIGATION_CANCELLED)?y:Promise.reject(y))}function Fe(w,H,N){a.list().forEach(I=>be(()=>I(w,H,N)))}function $e(w,H,N,I,J){const p=B(w,H);if(p)return p;const g=H===Rt,y=Wt?history.state:{};N&&(I||g?s.replace(w.fullPath,re({scroll:g&&y&&y.scroll},J)):s.push(w.fullPath,J)),i.value=w,Le(w,H,N,g),Ye()}let Ee;function Ie(){Ee||(Ee=s.listen((w,H,N)=>{if(!gt.listening)return;const I=R(w),J=z(I,gt.currentRoute.value);if(J){Q(re(J,{replace:!0,force:!0}),I).catch(yn);return}u=I;const p=i.value;Wt&&qu(cl(p.fullPath,N.delta),vr()),fe(I,p).catch(g=>vt(g,ve.NAVIGATION_ABORTED|ve.NAVIGATION_CANCELLED)?g:vt(g,ve.NAVIGATION_GUARD_REDIRECT)?(Q(re(k(g.to),{force:!0}),I).then(y=>{vt(y,ve.NAVIGATION_ABORTED|ve.NAVIGATION_DUPLICATED)&&!N.delta&&N.type===Yr.pop&&s.go(-1,!1)}).catch(yn),Promise.reject()):(N.delta&&s.go(-N.delta,!1),X(g,I,p))).then(g=>{g=g||$e(I,p,!1),g&&(N.delta&&!vt(g,ve.NAVIGATION_CANCELLED)?s.go(-N.delta,!1):N.type===Yr.pop&&vt(g,ve.NAVIGATION_ABORTED|ve.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),Fe(I,p,g)}).catch(yn)}))}let Ke=an(),pe=an(),te;function X(w,H,N){Ye(w);const I=pe.list();return I.length?I.forEach(J=>J(w,H,N)):console.error(w),Promise.reject(w)}function Je(){return te&&i.value!==Rt?Promise.resolve():new Promise((w,H)=>{Ke.add([w,H])})}function Ye(w){return te||(te=!w,Ie(),Ke.list().forEach(([H,N])=>w?N(w):H()),Ke.reset()),w}function Le(w,H,N,I){const{scrollBehavior:J}=e;if(!Wt||!J)return Promise.resolve();const p=!N&&Ku(cl(w.fullPath,0))||(I||!N)&&history.state&&history.state.scroll||null;return at().then(()=>J(w,H,p)).then(g=>g&&Wu(g)).catch(g=>X(g,w,H))}const ke=w=>s.go(w);let We;const pt=new Set,gt={currentRoute:i,listening:!0,addRoute:v,removeRoute:E,clearRoutes:t.clearRoutes,hasRoute:_,getRoutes:A,resolve:R,options:e,push:x,replace:O,go:ke,back:()=>ke(-1),forward:()=>ke(1),beforeEach:l.add,beforeResolve:o.add,afterEach:a.add,onError:pe.add,isReady:Je,install(w){w.component("RouterLink",Cc),w.component("RouterView",xc),w.config.globalProperties.$router=gt,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>$(i)}),Wt&&!We&&i.value===Rt&&(We=!0,x(s.location).catch(I=>{}));const H={};for(const I in Rt)Object.defineProperty(H,I,{get:()=>i.value[I],enumerable:!0});w.provide(As,gt),w.provide(Cs,ql(H)),w.provide(Xr,i);const N=w.unmount;pt.add(w),w.unmount=function(){pt.delete(w),pt.size<1&&(u=Rt,Ee&&Ee(),Ee=null,i.value=Rt,We=!1,te=!1),N()}}};function Be(w){return w.reduce((H,N)=>H.then(()=>be(N)),Promise.resolve())}return gt}function Ko(e){return Xe(Cs)}/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=e=>e==="";/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=e=>{const t=Rc(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ut={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=Symbol("lucide-icons");function Bc(){return Xe(Tc,{})}/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=({name:e,iconNode:t,"icon-node":n,absoluteStrokeWidth:r,"absolute-stroke-width":s,strokeWidth:l,"stroke-width":o,size:a,color:i,...u},{slots:c})=>{const{size:f,color:d,strokeWidth:v=2,absoluteStrokeWidth:E=!1,class:A=""}=Bc(),_=he(()=>{const R=Sl(r)||Sl(s)||r===!0||s===!0||E===!0,k=l||o||v||Ut["stroke-width"];return R?Number(k)*24/Number(a??f??Ut.width):k});return _n("svg",{...Ut,...u,width:a??f??Ut.width,height:a??f??Ut.height,stroke:i??d??Ut.stroke,"stroke-width":_.value,class:kc("lucide",A,...e?[`lucide-${wl(Mc(e))}-icon`,`lucide-${wl(e)}`]:["lucide-icon"])},[...(t??n??[]).map(R=>_n(...R)),...c.default?[c.default()]:[]])};/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=(e,t)=>(n,{slots:r,attrs:s})=>_n(Oc,{...s,...n,iconNode:t,name:e},r.default?{default:r.default}:void 0);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"m21 8-4-4-4 4",key:"1c9v7m"}],["path",{d:"M17 4v16",key:"7dpous"}]],Dc=Y("arrow-down-up",Nc);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Ic=Y("arrow-left",Hc);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Gc=Y("arrow-up-right",Lc);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]],$c=Y("binary",Fc);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],jc=Y("braces",Vc);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Zr=Y("check",Uc);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]],Zn=Y("clipboard",zc);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6h4",key:"135r8i"}]],qc=Y("clock-3",Wc);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],Jc=Y("clock",Kc);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],Qc=Y("cloud-upload",Yc);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14",key:"ron5a4"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2",key:"7s9ehn"}]],Zc=Y("crop",Xc);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],t1=Y("eraser",e1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]],r1=Y("file-image",n1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Jo=Y("file-text",s1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=[["path",{d:"M12 22h6a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6",key:"15usau"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M3 16v-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V16",key:"s1gz5"}],["path",{d:"M6 22h2",key:"194x9m"}],["path",{d:"M7 14v8",key:"11ixej"}]],o1=Y("file-type-corner",l1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]],a1=Y("git-fork",i1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],es=Y("grid-3x3",u1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],f1=Y("heart",c1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]],h1=Y("image-plus",d1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],g1=Y("image",p1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],v1=Y("key-round",m1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],b1=Y("languages",y1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]],A1=Y("lock-keyhole",P1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],S1=Y("maximize-2",C1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],_1=Y("minimize-2",w1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],E1=Y("moon",x1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=[["path",{d:"m14.622 17.897-10.68-2.913",key:"vj2p1u"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",key:"18tc5c"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",key:"ytzfxy"}]],R1=Y("paintbrush",k1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=[["path",{d:"m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12",key:"1y3wsu"}],["path",{d:"m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z",key:"110lr1"}],["path",{d:"m2 22 .414-.414",key:"jhxm08"}]],ts=Y("pipette",M1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],B1=Y("redo-2",T1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Ss=Y("refresh-cw",O1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],D1=Y("search",N1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],I1=Y("shield-check",H1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],G1=Y("sparkles",L1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],$1=Y("sun",F1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],j1=Y("undo-2",V1);/**
 * @license @lucide/vue v1.34.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],z1=Y("wand-sparkles",U1),W1="/assets/fufu-3FWaQxCW.png",q1={class:"site-header"},K1={class:"brand-mark","aria-hidden":"true"},J1=["src"],Y1={class:"header-actions","aria-label":"页面操作"},Q1={class:"icon-button",href:"https://github.com/",target:"_blank",rel:"noreferrer","aria-label":"GitHub 仓库"},X1=["aria-label"],Z1={class:"site-footer"},ef={__name:"App",setup(e){const t=Ko(),n=ee(!1),r=he(()=>t.params.slug==="pixel-beads");Mn(()=>{const l=localStorage.getItem("sakura-theme");n.value=l?l==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches,document.documentElement.classList.toggle("dark",n.value)});function s(){n.value=!n.value,document.documentElement.classList.toggle("dark",n.value),localStorage.setItem("sakura-theme",n.value?"dark":"light")}return(l,o)=>{const a=jr("router-link"),i=jr("router-view");return K(),ue("div",{class:me(["site-shell",{"site-shell-wide":r.value}])},[m("header",q1,[V(a,{class:"brand",to:"/","aria-label":"Sakura Tools 首页"},{default:cr(()=>[m("span",K1,[m("img",{src:$(W1),alt:""},null,8,J1)]),o[1]||(o[1]=m("span",null,[m("strong",null,"Sakura"),m("small",null,"TOOLS / 工具箱")],-1))]),_:1}),m("nav",Y1,[m("a",Q1,[V($(a1),{size:18})]),m("button",{class:"icon-button",type:"button","aria-label":n.value?"切换到浅色模式":"切换到深色模式",onClick:o[0]||(o[0]=u=>s())},[n.value?(K(),ze($($1),{key:0,size:18})):(K(),ze($(E1),{key:1,size:18}))],8,X1)])]),m("main",null,[V(i)]),m("footer",Z1,[o[4]||(o[4]=m("p",null,[m("span",{class:"status-dot"}),q(" 所有基础工具均在浏览器本地运行")],-1)),m("p",null,[o[2]||(o[2]=q("用 ",-1)),V($(f1),{size:13,fill:"currentColor"}),o[3]||(o[3]=q(" 和 Go 构建",-1))])])],2)}}},tf=["全部","开发","文本","图像","文档","生活"],ns=[{slug:"json",index:"01",name:"JSON 格式化",summary:"格式化、压缩并验证 JSON 数据",category:"开发",icon:jc,color:"red",ready:!0},{slug:"base64",index:"02",name:"Base64 编解码",summary:"文本与 Base64 安全互转，支持 Unicode",category:"开发",icon:$c,color:"blue",ready:!0},{slug:"timestamp",index:"03",name:"时间戳转换",summary:"时间戳与本地日期双向转换",category:"开发",icon:qc,color:"ochre",ready:!0},{slug:"password",index:"04",name:"随机密码",summary:"在本地生成高强度随机密码",category:"生活",icon:v1,color:"green",ready:!0},{slug:"translate",index:"05",name:"在线翻译",summary:"快速翻译文本并保留原始格式",category:"文本",icon:b1,color:"blue"},{slug:"markdown",index:"06",name:"Markdown 编辑器",summary:"实时预览与导出 Markdown 文档",category:"文本",icon:Jo,color:"ochre"},{slug:"image",index:"07",name:"图片处理",summary:"压缩、裁剪与格式转换",category:"图像",icon:g1,color:"green"},{slug:"pdf",index:"08",name:"PDF 工具",summary:"合并、拆分与页面整理",category:"文档",icon:o1,color:"red"},{slug:"pixel-beads",index:"09",name:"像素拼豆图纸",summary:"照片转网格图纸，精准匹配拼豆色号",category:"图像",icon:es,color:"special",ready:!0},{slug:"color",index:"10",name:"颜色工具",summary:"取色、转换与调色板生成",category:"开发",icon:ts,color:"blue"}],nf=e=>ns.find(t=>t.slug===e),rf={class:"tool-index","aria-labelledby":"tool-index-heading"},sf={class:"section-heading"},lf={class:"tool-count"},of={class:"tool-controls"},af={class:"search-box"},uf={class:"category-tabs","aria-label":"工具分类"},cf=["onClick"],ff={key:0,class:"tool-grid"},df={class:"card-topline"},hf={class:"tool-number"},pf={key:0,class:"soon-label"},gf={class:"tool-symbol"},mf={class:"category-label"},vf={key:1,class:"empty-state"},yf={__name:"HomeView",setup(e){const t=ee(""),n=ee("全部"),r=ee(null),s=he(()=>{const o=t.value.trim().toLowerCase();return ns.filter(a=>{const i=n.value==="全部"||a.category===n.value,u=!o||`${a.name} ${a.summary} ${a.category}`.toLowerCase().includes(o);return i&&u})});function l(o){var a,i;o.key==="/"&&((a=document.activeElement)==null?void 0:a.tagName)!=="INPUT"&&((i=document.activeElement)==null?void 0:i.tagName)!=="TEXTAREA"&&(o.preventDefault(),at(()=>{var u;return(u=r.value)==null?void 0:u.focus()}))}return Mn(()=>window.addEventListener("keydown",l)),vs(()=>window.removeEventListener("keydown",l)),(o,a)=>(K(),ue(_e,null,[a[4]||(a[4]=Ta('<section class="home-intro"><div class="eyebrow"><span></span> SAKURA WORKBENCH · 2026</div><div class="intro-grid"><div><h1>需要什么，<br><em>拿来即用。</em></h1></div><div class="intro-copy"><p>一组简洁、快速、尊重隐私的在线工具。常用处理尽可能留在你的浏览器里完成。</p><div class="privacy-note"><span class="status-dot"></span> 无需登录 · 本地优先</div></div></div></section>',1)),m("section",rf,[m("div",sf,[a[2]||(a[2]=m("div",null,[m("p",{class:"section-kicker"},"TOOL INDEX"),m("h2",{id:"tool-index-heading"},"工具索引")],-1)),m("p",lf,U(String(s.value.length).padStart(2,"0"))+" / "+U($(ns).length),1)]),m("div",of,[m("label",af,[V($(D1),{size:19}),ye(m("input",{ref_key:"searchInput",ref:r,"onUpdate:modelValue":a[0]||(a[0]=i=>t.value=i),type:"search",placeholder:"搜索工具，例如 JSON、图片…"},null,512),[[we,t.value]]),a[3]||(a[3]=m("kbd",null,"/",-1))]),m("div",uf,[(K(!0),ue(_e,null,qt($(tf),i=>(K(),ue("button",{key:i,type:"button",class:me({active:n.value===i}),onClick:u=>n.value=i},U(i),11,cf))),128))])]),s.value.length?(K(),ue("div",ff,[(K(!0),ue(_e,null,qt(s.value,i=>(K(),ze(qn(i.ready?"router-link":"article"),{key:i.slug,to:i.ready?`/tools/${i.slug}`:void 0,class:me(["tool-card",[`tone-${i.color}`,{upcoming:!i.ready,featured:i.color==="special"}]])},{default:cr(()=>[m("div",df,[m("span",hf,U(i.index),1),i.ready?(K(),ze($(Gc),{key:1,size:18})):(K(),ue("span",pf,"筹备中"))]),m("div",gf,[(K(),ze(qn(i.icon),{size:25,"stroke-width":1.8}))]),m("h3",null,U(i.name),1),m("p",null,U(i.summary),1),m("span",mf,U(i.category),1),i.color==="special"?(K(),ze($(G1),{key:0,class:"special-mark",size:17})):gr("",!0)]),_:2},1032,["to","class"]))),128))])):(K(),ue("div",vf,[m("p",null,"没有找到“"+U(t.value)+"”",1),m("button",{type:"button",onClick:a[1]||(a[1]=i=>{t.value="",n.value="全部"})},"清除筛选")]))])],64))}},bf={class:"tool-panel"},Pf={class:"tool-bar"},Af={class:"action-group"},Cf={key:0,class:"error-message"},Sf={key:1,class:"success-message"},wf={__name:"JsonTool",setup(e){const t=ee(`{
  "project": "sakura-tools",
  "status": "growing",
  "private": true
}`),n=ee(""),r=ee(!1);function s(a=!1){try{t.value=JSON.stringify(JSON.parse(t.value),null,a?0:2),n.value=""}catch(i){n.value=`第 ${l(i.message)} 行附近：${i.message}`}}function l(a){var u;const i=Number(((u=a.match(/position (\d+)/))==null?void 0:u[1])||0);return t.value.slice(0,i).split(`
`).length}async function o(){await navigator.clipboard.writeText(t.value),r.value=!0,setTimeout(()=>r.value=!1,1400)}return(a,i)=>(K(),ue("div",bf,[m("div",Pf,[m("div",Af,[m("button",{class:"primary-button",type:"button",onClick:i[0]||(i[0]=u=>s(!1))},[V($(z1),{size:16}),i[4]||(i[4]=q(" 格式化",-1))]),m("button",{class:"secondary-button",type:"button",onClick:i[1]||(i[1]=u=>s(!0))},[V($(_1),{size:16}),i[5]||(i[5]=q(" 压缩",-1))])]),m("button",{class:"secondary-button",type:"button",onClick:o},[r.value?(K(),ze($(Zr),{key:0,size:16})):(K(),ze($(Zn),{key:1,size:16})),q(" "+U(r.value?"已复制":"复制"),1)])]),i[7]||(i[7]=m("label",{class:"editor-label",for:"json-input"},"JSON INPUT",-1)),ye(m("textarea",{id:"json-input","onUpdate:modelValue":i[2]||(i[2]=u=>t.value=u),class:"code-editor",spellcheck:"false",onInput:i[3]||(i[3]=u=>n.value="")},null,544),[[we,t.value]]),n.value?(K(),ue("p",Cf,U(n.value),1)):(K(),ue("p",Sf,[V($(Zr),{size:14}),i[6]||(i[6]=q(" 输入内容仅在当前浏览器中处理",-1))]))]))}},_f={class:"tool-panel split-editor"},xf={class:"editor-heading"},Ef={class:"swap-mark"},kf={class:"editor-heading"},Rf={key:0,class:"error-message wide-message"},Mf={__name:"Base64Tool",setup(e){const t=ee("你好，Sakura Tools!"),n=ee(""),r=ee("");function s(){n.value=btoa(String.fromCharCode(...new TextEncoder().encode(t.value))),r.value=""}function l(){try{t.value=new TextDecoder().decode(Uint8Array.from(atob(n.value.trim()),a=>a.charCodeAt(0))),r.value=""}catch{r.value="这不是有效的 Base64 内容，请检查后重试。"}}async function o(a){await navigator.clipboard.writeText(a)}return s(),(a,i)=>(K(),ue("div",_f,[m("section",null,[m("div",xf,[i[5]||(i[5]=m("label",{for:"plain-text"},"原始文本",-1)),m("button",{type:"button",onClick:i[0]||(i[0]=u=>o(t.value))},[V($(Zn),{size:15}),i[4]||(i[4]=q("复制",-1))])]),ye(m("textarea",{id:"plain-text","onUpdate:modelValue":i[1]||(i[1]=u=>t.value=u),spellcheck:"false"},null,512),[[we,t.value]]),m("button",{class:"primary-button full-button",type:"button",onClick:s},"编码为 Base64")]),m("div",Ef,[V($(Dc),{size:18})]),m("section",null,[m("div",kf,[i[7]||(i[7]=m("label",{for:"encoded-text"},"Base64",-1)),m("button",{type:"button",onClick:i[2]||(i[2]=u=>o(n.value))},[V($(Zn),{size:15}),i[6]||(i[6]=q("复制",-1))])]),ye(m("textarea",{id:"encoded-text","onUpdate:modelValue":i[3]||(i[3]=u=>n.value=u),spellcheck:"false"},null,512),[[we,n.value]]),m("button",{class:"secondary-button full-button",type:"button",onClick:l},"解码为文本")]),r.value?(K(),ue("p",Rf,U(r.value),1)):gr("",!0)]))}},Tf={class:"tool-panel timestamp-panel"},Bf={class:"timestamp-grid"},Of={class:"unit-toggle"},Nf={class:"timezone-note"},Df={__name:"TimestampTool",setup(e){const t=Date.now(),n=ee(Math.floor(t/1e3)),r=ee(l(t)),s=ee("seconds");function l(c){const f=new Date(c);if(Number.isNaN(f.getTime()))return"";const d=f.getTimezoneOffset()*6e4;return new Date(f.getTime()-d).toISOString().slice(0,19)}function o(){const c=s.value==="seconds"?Number(n.value)*1e3:Number(n.value),f=l(c);f&&(r.value=f)}function a(){const c=new Date(r.value).getTime();Number.isNaN(c)||(n.value=s.value==="seconds"?Math.floor(c/1e3):c)}function i(){const c=Date.now();n.value=s.value==="seconds"?Math.floor(c/1e3):c,r.value=l(c)}const u=he(()=>{const c=new Date(r.value);return Number.isNaN(c.getTime())?"请输入完整日期时间":c.toLocaleString("zh-CN",{dateStyle:"full",timeStyle:"medium"})});return(c,f)=>(K(),ue("div",Tf,[m("div",Bf,[m("section",null,[f[4]||(f[4]=m("label",{for:"timestamp"},"时间戳",-1)),ye(m("input",{id:"timestamp","onUpdate:modelValue":f[0]||(f[0]=d=>n.value=d),type:"number",onInput:o},null,544),[[we,n.value]]),m("div",Of,[m("button",{type:"button",class:me({active:s.value==="seconds"}),onClick:f[1]||(f[1]=d=>{s.value="seconds",a()})},"秒",2),m("button",{type:"button",class:me({active:s.value==="milliseconds"}),onClick:f[2]||(f[2]=d=>{s.value="milliseconds",a()})},"毫秒",2)])]),m("section",null,[f[5]||(f[5]=m("label",{for:"date-input"},"本地日期时间",-1)),ye(m("input",{id:"date-input","onUpdate:modelValue":f[3]||(f[3]=d=>r.value=d),type:"datetime-local",step:"1",onInput:a},null,544),[[we,r.value]]),m("p",null,U(u.value),1)])]),m("button",{class:"secondary-button",type:"button",onClick:i},[V($(Ss),{size:16}),f[6]||(f[6]=q(" 使用当前时间",-1))]),m("div",Nf,[V($(Jc),{size:15}),q(" 当前浏览器时区："+U(Intl.DateTimeFormat().resolvedOptions().timeZone),1)])]))}},Hf={class:"tool-panel password-panel"},If={class:"password-output"},Lf={class:"password-options"},Gf={class:"length-control"},Ff={class:"check-grid"},$f={class:"password-footer"},Vf={__name:"PasswordTool",setup(e){const t=ee(20),n=ee({upper:!0,lower:!0,numbers:!0,symbols:!0}),r=ee(""),s=ee(!1),l=he(()=>{const i=Object.values(n.value).filter(Boolean).length,u=t.value*Math.log2(Math.max(i*18,2));return u>110?"很强":u>75?"强":u>45?"一般":"较弱"});function o(){const i=[];n.value.upper&&i.push("ABCDEFGHJKLMNPQRSTUVWXYZ"),n.value.lower&&i.push("abcdefghijkmnopqrstuvwxyz"),n.value.numbers&&i.push("23456789"),n.value.symbols&&i.push("!@#$%&*+-=?");const u=i.join("")||"abcdefghijkmnopqrstuvwxyz",c=crypto.getRandomValues(new Uint32Array(t.value));r.value=Array.from(c,f=>u[f%u.length]).join("")}async function a(){await navigator.clipboard.writeText(r.value),s.value=!0,setTimeout(()=>s.value=!1,1400)}return o(),(i,u)=>(K(),ue("div",Hf,[m("div",If,[m("code",null,U(r.value),1),m("button",{type:"button",onClick:a},[s.value?(K(),ze($(Zr),{key:0,size:18})):(K(),ze($(Zn),{key:1,size:18})),m("span",null,U(s.value?"已复制":"复制"),1)])]),m("div",Lf,[m("label",Gf,[u[5]||(u[5]=q("密码长度 ",-1)),m("strong",null,U(t.value),1),ye(m("input",{"onUpdate:modelValue":u[0]||(u[0]=c=>t.value=c),type:"range",min:"8",max:"64",onInput:o},null,544),[[we,t.value,void 0,{number:!0}]])]),m("div",Ff,[m("label",null,[ye(m("input",{"onUpdate:modelValue":u[1]||(u[1]=c=>n.value.upper=c),type:"checkbox",onChange:o},null,544),[[In,n.value.upper]]),u[6]||(u[6]=q(" 大写字母",-1))]),m("label",null,[ye(m("input",{"onUpdate:modelValue":u[2]||(u[2]=c=>n.value.lower=c),type:"checkbox",onChange:o},null,544),[[In,n.value.lower]]),u[7]||(u[7]=q(" 小写字母",-1))]),m("label",null,[ye(m("input",{"onUpdate:modelValue":u[3]||(u[3]=c=>n.value.numbers=c),type:"checkbox",onChange:o},null,544),[[In,n.value.numbers]]),u[8]||(u[8]=q(" 数字",-1))]),m("label",null,[ye(m("input",{"onUpdate:modelValue":u[4]||(u[4]=c=>n.value.symbols=c),type:"checkbox",onChange:o},null,544),[[In,n.value.symbols]]),u[9]||(u[9]=q(" 特殊符号",-1))])])]),m("div",$f,[m("span",null,[u[10]||(u[10]=q("强度：",-1)),m("strong",null,U(l.value),1)]),m("button",{class:"primary-button",type:"button",onClick:o},[V($(Ss),{size:16}),u[11]||(u[11]=q(" 重新生成",-1))])])]))}},jf=`
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
`.trim();function Or(e){return Number(e).toString(16).padStart(2,"0").toUpperCase()}function Uf(e,t){const n=a=>{var i;return((i=a.match(/^([A-Z]+)(\d+)$/))==null?void 0:i.slice(1))||[a,"0"]},[r,s]=n(e.code),[l,o]=n(t.code);return r.localeCompare(l)||Number(s)-Number(o)}const zf={id:"mard-291-community",brand:"MARD",name:"MARD 291 色（社区校准）",source:"https://github.com/maxcleme/beadcolors",colors:jf.split(`
`).map(e=>{const[t,n,r,s,l,o]=e.split(",");return{id:`mard-${t.toLowerCase()}`,code:t,name:n,hex:`#${Or(r)}${Or(s)}${Or(l)}`,contributor:o}}).sort(Uf)};function ws({id:e,brand:t,name:n,source:r,csv:s}){return{id:e,brand:t,name:n,source:r,colors:s.trim().split(/\r?\n/).map(l=>{const[o,a,i,u,c]=l.split(","),f=`#${[i,u,c].map(d=>Number(d).toString(16).padStart(2,"0")).join("")}`.toUpperCase();return{id:`${e}-${o.toLowerCase()}`,code:o,name:a,hex:f}})}}const Wf=`
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
`,qf=`
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
`,Kf=`
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
`,Jf=ws({id:"hama-midi-community",brand:"Hama",name:"Hama Midi（92 色）",source:"https://github.com/maxcleme/beadcolors/blob/master/raw/hama.csv",csv:Wf}),Yf=ws({id:"artkal-c-community",brand:"Artkal",name:"Artkal C 2.6 mm（174 色）",source:"https://github.com/maxcleme/beadcolors/blob/master/raw/artkal_c.csv",csv:qf}),Qf=ws({id:"artkal-s-community",brand:"Artkal",name:"Artkal S 5 mm（199 色）",source:"https://github.com/maxcleme/beadcolors/blob/master/raw/artkal_s.csv",csv:Kf}),Xf={id:"perler-standard-2025",brand:"Perler",name:"Perler 标准色（屏幕参考）",source:"https://perler.com/content/uploaded_images/Perler_Bead-Color-Reference_2025.pdf",colors:[["white","White","白色","#F4F4EF"],["cream","Creme","奶油色","#F1E4C2"],["toasted-marshmallow","Toasted Marshmallow","烤棉花糖","#D8C5B4"],["sand","Sand","沙色","#D8B58A"],["tan","Tan","棕褐色","#B8875E"],["light-brown","Light Brown","浅棕色","#9A6547"],["brown","Brown","棕色","#613E2C"],["dark-brown","Dark Brown","深棕色","#3D2924"],["apricot","Apricot","杏色","#F3C3A5"],["peach","Peach","蜜桃色","#F3B38F"],["blush","Blush","腮红色","#ED927E"],["light-pink","Light Pink","浅粉色","#F3B7CD"],["bubblegum","Bubblegum","泡泡糖粉","#EE78A8"],["pink","Pink","粉色","#DA4E91"],["raspberry","Raspberry","覆盆子色","#A93064"],["plum","Plum","李子色","#73355E"],["red","Red","红色","#D83B3E"],["cranapple","Cranapple","蔓越莓红","#9D2735"],["hot-coral","Hot Coral","珊瑚红","#F06055"],["rust","Rust","铁锈红","#A9472D"],["brick","Brick","砖红色","#994D3A"],["orange","Orange","橙色","#F37932"],["cheddar","Cheddar","切达橙","#F5A623"],["butterscotch","Butterscotch","奶糖色","#D88B2C"],["rich-butter","Rich Butter","浓黄油色","#EBC65E"],["yellow","Yellow","黄色","#F5D547"],["pastel-yellow","Pastel Yellow","粉彩黄","#F5E88A"],["prickly-pear","Prickly Pear","仙人掌黄绿","#C8D746"],["kiwi-lime","Kiwi Lime","奇异果绿","#8BC34A"],["pastel-green","Pastel Green","粉彩绿","#A8D69B"],["light-green","Light Green","浅绿色","#70C486"],["green","Green","绿色","#3C9B61"],["shamrock","Shamrock","三叶草绿","#16845B"],["dark-green","Dark Green","深绿色","#236044"],["evergreen","Evergreen","常青绿","#194638"],["sage","Sage","鼠尾草绿","#94A58C"],["parrot-green","Parrot Green","鹦鹉绿","#31A88A"],["toothpaste","Toothpaste","薄荷色","#7DCEBE"],["turquoise","Turquoise","青绿色","#27A8B5"],["lagoon","Lagoon","潟湖蓝","#268F91"],["pastel-blue","Pastel Blue","粉彩蓝","#A7D7E8"],["light-blue","Light Blue","浅蓝色","#5CB9DD"],["periwinkle-blue","Periwinkle Blue","长春花蓝","#7587C9"],["blueberry-cream","Blueberry Cream","蓝莓奶油","#8EA7D4"],["cobalt","Cobalt","钴蓝色","#2866A3"],["dark-blue","Dark Blue","深蓝色","#264B84"],["midnight","Midnight","午夜蓝","#252C57"],["pastel-lavender","Pastel Lavender","粉彩薰衣草","#C1A7D7"],["purple","Purple","紫色","#76519B"],["magenta","Magenta","品红色","#B63F8D"],["light-grey","Light Grey","浅灰色","#C8C8C2"],["mist","Mist","雾灰色","#AEB8B5"],["grey","Grey","灰色","#858681"],["stone","Stone","石色","#77756F"],["dark-grey","Dark Grey","深灰色","#50524F"],["black","Black","黑色","#242424"]].map(([e,t,n,r])=>({id:e,code:t,name:n,hex:r}))},er=[zf,Jf,Yf,Qf,Xf];function Zf(e){return er.find(t=>t.id===e)||er[0]}function tr(e){const t=Number.parseInt(e.replace("#",""),16);return{r:t>>16&255,g:t>>8&255,b:t&255}}function Nr(e){const t=e/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4}function Yo({r:e,g:t,b:n}){const r=Nr(e),s=Nr(t),l=Nr(n),o=(r*.4124+s*.3576+l*.1805)/.95047,a=r*.2126+s*.7152+l*.0722,i=(r*.0193+s*.1192+l*.9505)/1.08883,u=v=>v>.008856?Math.cbrt(v):7.787*v+16/116,c=u(o),f=u(a),d=u(i);return{l:116*f-16,a:500*(c-f),b:200*(f-d)}}function ed(e){return e.map((t,n)=>({...t,index:n,rgb:tr(t.hex),lab:Yo(tr(t.hex))}))}function td(e,t){const n=Ie=>Ie*Math.PI/180,r=Ie=>Ie*180/Math.PI,s=Math.hypot(e.a,e.b),l=Math.hypot(t.a,t.b),o=(s+l)/2,a=.5*(1-Math.sqrt(o**7/(o**7+25**7))),i=(1+a)*e.a,u=(1+a)*t.a,c=Math.hypot(i,e.b),f=Math.hypot(u,t.b),d=(Ie,Ke)=>{const pe=r(Math.atan2(Ke,Ie));return pe>=0?pe:pe+360},v=d(i,e.b),E=d(u,t.b),A=t.l-e.l,_=f-c;let R=E-v;c*f===0?R=0:R>180?R-=360:R<-180&&(R+=360);const k=2*Math.sqrt(c*f)*Math.sin(n(R/2)),B=(e.l+t.l)/2,x=(c+f)/2;let O=v+E;c*f===0?O=v+E:Math.abs(v-E)<=180?O/=2:O<360?O=(O+360)/2:O=(O-360)/2;const z=1-.17*Math.cos(n(O-30))+.24*Math.cos(n(2*O))+.32*Math.cos(n(3*O+6))-.2*Math.cos(n(4*O-63)),Q=1+.015*(B-50)**2/Math.sqrt(20+(B-50)**2),ne=1+.045*x,be=1+.015*x*z,fe=-2*Math.sqrt(x**7/(x**7+25**7))*Math.sin(n(60*Math.exp(-(((O-275)/25)**2)))),Fe=A/Q,$e=_/ne,Ee=k/be;return Math.sqrt(Fe**2+$e**2+Ee**2+fe*$e*Ee)}function nd(e,t){const n=Yo(e),r=Math.hypot(n.a,n.b);let s=0,l=Number.POSITIVE_INFINITY;for(const o of t){const a=Math.hypot(o.lab.a,o.lab.b),i=r>7&&a<r*.32?(r-a)*.18:0,u=td(n,o.lab)+i;u<l&&(l=u,s=o.index)}return s}async function rd(e){return"createImageBitmap"in window?createImageBitmap(e,{imageOrientation:"from-image"}):new Promise((t,n)=>{const r=URL.createObjectURL(e),s=new Image;s.onload=()=>{URL.revokeObjectURL(r),t(s)},s.onerror=()=>{URL.revokeObjectURL(r),n(new Error("无法读取这张图片"))},s.src=r})}function Qo(e,t,n,r=1,s=50,l=50){const o=e/t;let a=e,i=t;o>n?a=t*n:i=e/n,a/=r,i/=r;const u=a/2+(e-a)*(s/100),c=i/2+(t-i)*(l/100);return{x:Math.max(0,Math.min(e-a,u-a/2)),y:Math.max(0,Math.min(t-i,c-i/2)),width:a,height:i}}function sd(e,t,n){if(!e||!t)return;const{columns:r,rows:s,zoom:l,focusX:o,focusY:a}=n,i=r/s;e.width=520,e.height=260;const u=Qo(t.width,t.height,i,l,o,a),c=e.getContext("2d");c.fillStyle="#23211e",c.fillRect(0,0,e.width,e.height);const f=Math.min(e.width,e.height*i),d=f/i,v=(e.width-f)/2,E=(e.height-d)/2;c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high",c.drawImage(t,u.x,u.y,u.width,u.height,v,E,f,d),c.strokeStyle="rgba(255,255,255,.55)",c.strokeRect(v+.5,E+.5,f-1,d-1)}function ld(e,t,n){const{columns:r,rows:s,zoom:l,focusX:o,focusY:a}=t,i=4,u=document.createElement("canvas");u.width=r*i,u.height=s*i;const c=u.getContext("2d"),f=Qo(e.width,e.height,r/s,l,o,a);c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high",c.drawImage(e,f.x,f.y,f.width,f.height,0,0,u.width,u.height);const d=document.createElement("canvas");d.width=r,d.height=s;const v=d.getContext("2d",{willReadFrequently:!0});v.imageSmoothingEnabled=!0,v.imageSmoothingQuality="high",v.clearRect(0,0,r,s),v.drawImage(u,0,0,r,s);const E=v.getImageData(0,0,r,s).data,A=od(E,r,s,t),_=ed(n),R=new Int16Array(r*s);for(let k=0;k<R.length;k+=1){const B=k*4;R[k]=E[B+3]<48?-1:nd({r:A[B],g:A[B+1],b:A[B+2]},_)}return R}function od(e,t,n,r){const s=(r.brightness??100)/100,l=(r.contrast??100)/100,o=(r.saturation??100)/100,a=(r.detail??0)/100,i=new Float32Array(e.length),u=d=>Math.max(0,Math.min(255,d));for(let d=0;d<e.length;d+=4){const v=e[d],E=e[d+1],A=e[d+2],_=v*.2126+E*.7152+A*.0722;i[d]=u(((_+(v-_)*o-128)*l+128)*s),i[d+1]=u(((_+(E-_)*o-128)*l+128)*s),i[d+2]=u(((_+(A-_)*o-128)*l+128)*s),i[d+3]=e[d+3]}if(a<=0)return i;const c=new Float32Array(i),f=[[-1,0],[1,0],[0,-1],[0,1]];for(let d=0;d<n;d+=1)for(let v=0;v<t;v+=1){const E=(d*t+v)*4;if(i[E+3]<48)continue;const A=[0,0,0];let _=0;for(const[R,k]of f){const B=v+R,x=d+k;if(B<0||x<0||B>=t||x>=n)continue;const O=(x*t+B)*4;i[O+3]<48||(A[0]+=i[O],A[1]+=i[O+1],A[2]+=i[O+2],_+=1)}if(_)for(let R=0;R<3;R+=1){const k=A[R]/_;c[E+R]=u(i[E+R]+(i[E+R]-k)*a)}}return c}function id(e,t,n,r,s,l={}){if(!e||!(t!=null&&t.length))return;const o=l.cellSize||18,a=l.showGrid!==!1,i=l.mode||"pixel";e.width=n*o,e.height=r*o;const u=e.getContext("2d");u.clearRect(0,0,e.width,e.height),u.fillStyle=l.background||"#f4f1eb",u.fillRect(0,0,e.width,e.height);for(let c=0;c<r;c+=1)for(let f=0;f<n;f+=1){const d=t[c*n+f];if(d<0||!s[d])continue;const{hex:v}=s[d],E=f*o+o/2,A=c*o+o/2;if(i==="pixel"||o<9)u.fillStyle=v,u.fillRect(f*o,c*o,o,o);else{u.beginPath(),u.arc(E,A,o*.42,0,Math.PI*2),u.fillStyle=v,u.fill();const _=tr(v),R=(_.r*299+_.g*587+_.b*114)/1e3;u.beginPath(),u.arc(E,A,Math.max(1,o*.105),0,Math.PI*2),u.fillStyle=R>170?"rgba(40,36,32,.24)":"rgba(255,255,255,.45)",u.fill()}}if(a){u.lineWidth=1;for(let c=0;c<=n;c+=1)u.beginPath(),u.moveTo(c*o+.5,0),u.lineTo(c*o+.5,e.height),u.strokeStyle=c%10===0?"rgba(35,33,30,.42)":c%5===0?"rgba(35,33,30,.23)":"rgba(35,33,30,.09)",u.stroke();for(let c=0;c<=r;c+=1)u.beginPath(),u.moveTo(0,c*o+.5),u.lineTo(e.width,c*o+.5),u.strokeStyle=c%10===0?"rgba(35,33,30,.42)":c%5===0?"rgba(35,33,30,.23)":"rgba(35,33,30,.09)",u.stroke()}}function _s(e,t){const n=new Map;for(const r of e||[])r>=0&&n.set(r,(n.get(r)||0)+1);return[...n.entries()].map(([r,s])=>({...t[r],index:r,count:s})).sort((r,s)=>s.count-r.count)}const Dr=595.28,Hr=841.89;function Xo(e,t){const n=URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=t,r.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)}function Zo(e){const{r:t,g:n,b:r}=tr(e);return(t*299+n*587+r*114)/1e3>158?"#26231f":"#ffffff"}function un(e,t,n,r,s,l="#27241f"){e.font=s,e.fillStyle=l,e.textAlign="center",e.textBaseline="middle",e.fillText(t,n,r)}function ei(e,t,n,r,s={}){const l=s.startColumn||0,o=s.startRow||0,a=Math.min(t,s.endColumn??t),i=Math.min(n,s.endRow??n),u=a-l,c=i-o,f=s.cellSize||28,d=Math.max(30,Math.round(f*1.2)),v=s.titleHeight??58,E=s.footerHeight??26,A=document.createElement("canvas");A.width=d*2+u*f,A.height=v+d*2+c*f+E;const _=A.getContext("2d");_.fillStyle="#fbfaf7",_.fillRect(0,0,A.width,A.height),_.textAlign="left",_.textBaseline="middle",_.fillStyle="#24211d",_.font="700 20px system-ui, sans-serif",_.fillText(s.title||`${t} × ${n} 拼豆图纸`,d,v/2-4),s.subtitle&&(_.textAlign="right",_.font="12px system-ui, sans-serif",_.fillStyle="#6f6961",_.fillText(s.subtitle,A.width-d,v/2-4));const R=d,k=v+d,B=Math.max(7,Math.min(12,Math.floor(f*.36)));for(let x=o;x<i;x+=1)for(let O=l;O<a;O+=1){const z=O-l,Q=x-o,ne=R+z*f,be=k+Q*f,fe=r[e[x*t+O]];_.fillStyle=(fe==null?void 0:fe.hex)||"#ffffff",_.fillRect(ne,be,f,f),fe&&un(_,fe.code,ne+f/2,be+f/2+.5,`700 ${B}px system-ui, sans-serif`,Zo(fe.hex))}for(let x=0;x<=u;x+=1){const O=l+x,z=R+x*f+.5;_.beginPath(),_.moveTo(z,k),_.lineTo(z,k+c*f),_.strokeStyle=O%10===0?"#4d4943":O%5===0?"#77716a":"#c8c4bd",_.lineWidth=O%10===0?1.5:1,_.stroke()}for(let x=0;x<=c;x+=1){const O=o+x,z=k+x*f+.5;_.beginPath(),_.moveTo(R,z),_.lineTo(R+u*f,z),_.strokeStyle=O%10===0?"#4d4943":O%5===0?"#77716a":"#c8c4bd",_.lineWidth=O%10===0?1.5:1,_.stroke()}for(let x=0;x<u;x+=1){const O=String(l+x+1),z=R+x*f+f/2;un(_,O,z,k-d/2,"600 11px system-ui, sans-serif","#56514b"),un(_,O,z,k+c*f+d/2,"600 11px system-ui, sans-serif","#56514b")}for(let x=0;x<c;x+=1){const O=String(o+x+1),z=k+x*f+f/2;un(_,O,R-d/2,z,"600 11px system-ui, sans-serif","#56514b"),un(_,O,R+u*f+d/2,z,"600 11px system-ui, sans-serif","#56514b")}return A}function ti(e,t,n){const{x:r,y:s,width:l,columns:o=5,rowHeight:a=42}=n,i=10,u=(l-i*(o-1))/o;return t.forEach((c,f)=>{const d=f%o,v=Math.floor(f/o),E=r+d*(u+i),A=s+v*a;e.fillStyle="#ffffff",e.strokeStyle="#d4d0c9",e.lineWidth=1,e.fillRect(E,A,u,a-8),e.strokeRect(E+.5,A+.5,u-1,a-9);const _=Math.min(58,Math.max(42,u*.28));e.fillStyle=c.hex,e.fillRect(E,A,_,a-8),e.textBaseline="middle",e.font="700 12px system-ui, sans-serif",e.fillStyle=Zo(c.hex),e.textAlign="center",e.fillText(c.code,E+_/2,A+(a-8)/2),e.textAlign="right",e.fillStyle="#37332e",e.font="600 12px system-ui, sans-serif",e.fillText(String(c.count),E+u-10,A+(a-8)/2)}),Math.ceil(t.length/o)*a}function ad(e,t,n,r,s={}){const l=_s(e,r),o=Math.max(22,Math.min(30,Math.floor(3600/Math.max(t,n)))),a=ei(e,t,n,r,{cellSize:o,title:`${t} × ${n} 拼豆图纸`,subtitle:s.paletteName||"",footerHeight:0}),i=Math.max(4,Math.min(16,Math.floor((a.width-54)/200))),u=Math.ceil(l.length/i),c=82,f=Math.max(90,u*42),d=document.createElement("canvas");d.width=a.width,d.height=a.height+c+f+26;const v=d.getContext("2d");v.fillStyle="#fbfaf7",v.fillRect(0,0,d.width,d.height),v.drawImage(a,0,0);const E=a.height+34;v.textAlign="left",v.textBaseline="middle",v.fillStyle="#24211d",v.font="700 22px system-ui, sans-serif";const A=l.reduce((_,R)=>_+R.count,0);return v.fillText(`拼豆数量统计（${A} 颗）`,32,E),v.font="12px system-ui, sans-serif",v.fillStyle="#6f6961",v.textAlign="right",v.fillText(`${l.length} 种颜色`,d.width-32,E),ti(v,l,{x:32,y:a.height+c,width:d.width-64,columns:i}),d}function ud(e,t,n=""){const r=_s(e,t),s=96,l=[];for(let o=0;o<r.length;o+=s){const a=r.slice(o,o+s),i=document.createElement("canvas");i.width=900,i.height=1273;const u=i.getContext("2d");u.fillStyle="#fbfaf7",u.fillRect(0,0,i.width,i.height),u.fillStyle="#24211d",u.textAlign="left",u.textBaseline="middle",u.font="700 30px system-ui, sans-serif";const c=r.reduce((f,d)=>f+d.count,0);u.fillText(`拼豆数量统计（${c} 颗）`,52,62),u.font="15px system-ui, sans-serif",u.fillStyle="#6f6961",u.fillText(`${n} · ${r.length} 种颜色`,52,101),ti(u,a,{x:52,y:142,width:796,columns:4,rowHeight:43}),u.textAlign="right",u.font="14px system-ui, sans-serif",u.fillText(`统计表 ${Math.floor(o/s)+1} / ${Math.ceil(r.length/s)}`,848,1230),l.push(i)}return l}function cd(e){const t=atob(e.split(",")[1]),n=new Uint8Array(t.length);for(let r=0;r<t.length;r+=1)n[r]=t.charCodeAt(r);return n}function fd(e){const t=new TextEncoder,n=new Map,r=e.map((u,c)=>`${3+c*3} 0 R`).join(" ");n.set(1,t.encode("<< /Type /Catalog /Pages 2 0 R >>")),n.set(2,t.encode(`<< /Type /Pages /Kids [${r}] /Count ${e.length} >>`)),e.forEach((u,c)=>{const f=3+c*3,d=f+1,v=f+2,E=cd(u.toDataURL("image/jpeg",.92)),A=Math.min((Dr-30)/u.width,(Hr-30)/u.height),_=u.width*A,R=u.height*A,k=(Dr-_)/2,B=(Hr-R)/2,x=t.encode(`q
${_.toFixed(2)} 0 0 ${R.toFixed(2)} ${k.toFixed(2)} ${B.toFixed(2)} cm
/Im${c} Do
Q`);n.set(f,t.encode(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${Dr} ${Hr}] /Resources << /XObject << /Im${c} ${d} 0 R >> >> /Contents ${v} 0 R >>`));const O=t.encode(`<< /Type /XObject /Subtype /Image /Width ${u.width} /Height ${u.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${E.length} >>
stream
`),z=t.encode(`
endstream`),Q=new Uint8Array(O.length+E.length+z.length);Q.set(O),Q.set(E,O.length),Q.set(z,O.length+E.length),n.set(d,Q);const ne=t.encode(`<< /Length ${x.length} >>
stream
`),be=t.encode(`
endstream`),fe=new Uint8Array(ne.length+x.length+be.length);fe.set(ne),fe.set(x,ne.length),fe.set(be,ne.length+x.length),n.set(v,fe)});const s=[t.encode(`%PDF-1.4
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
%%EOF`),s.push(t.encode(i.join(""))),new Blob(s,{type:"application/pdf"})}function dd(e,t,n,r,s,l={}){if(!(e!=null&&e.length))return;ad(e,t,n,r,l).toBlob(a=>{a&&Xo(a,s)},"image/png")}function hd(e,t,n,r,s,l={}){if(!(e!=null&&e.length))return;const o=[],a=24,i=32,u=Math.ceil(t/a),c=Math.ceil(n/i);for(let f=0;f<c;f+=1)for(let d=0;d<u;d+=1)o.push(ei(e,t,n,r,{startColumn:d*a,endColumn:(d+1)*a,startRow:f*i,endRow:(f+1)*i,cellSize:32,title:`${t} × ${n} 拼豆图纸`,subtitle:`区域 ${d+1}/${u} · ${f+1}/${c}`}));o.push(...ud(e,r,l.paletteName||"")),Xo(fd(o),s)}const pd={class:"bead-studio"},gd={class:"upload-symbol"},md=["disabled"],vd={key:0,class:"error-message"},yd={class:"bead-flow","aria-label":"工作流程"},bd={class:"bead-workbench"},Pd={class:"bead-sidebar bead-source-panel"},Ad={class:"bead-panel-heading"},Cd=["title"],Sd={class:"bead-field-row"},wd={class:"bead-size-presets","aria-label":"常用方形网格预设"},_d=["onClick"],xd={class:"bead-range"},Ed={class:"bead-range"},kd={class:"bead-range"},Rd={class:"bead-range compact-range"},Md={class:"bead-range compact-range"},Td={class:"bead-range compact-range"},Bd={class:"bead-range compact-range"},Od={class:"bead-segmented"},Nd={class:"bead-select"},Dd=["value"],Hd=["disabled"],Id={class:"bead-editor-panel"},Ld={class:"bead-toolbar"},Gd={class:"bead-tool-group","aria-label":"绘制工具"},Fd={class:"bead-tool-group compact"},$d=["disabled"],Vd=["disabled"],jd={class:"canvas-zoom"},Ud={class:"preview-toggle","aria-label":"预览样式"},zd={class:"bead-canvas-status"},Wd={class:"bead-sidebar bead-color-panel"},qd={class:"bead-panel-heading"},Kd={class:"bead-palette","aria-label":"拼豆色板"},Jd=["title","onClick"],Yd={class:"bead-usage"},Qd=["onClick"],Xd={class:"bead-export"},Zd={class:"local-processing"},eh={__name:"PixelBeadsTool",setup(e){const t=ee(null),n=ee(null),r=ee(null),s=ee(null),l=Vr(null),o=ee(""),a=ee(""),i=ee(!1),u=ee(!1),c=Vr(new Int16Array),f=Xt({columns:0,rows:0}),d=Xt({columns:48,rows:48,zoom:1,focusX:50,focusY:50,detail:32,saturation:106,contrast:104,brightness:100,beadSize:5,paletteId:er[0].id}),v=ee("brush"),E=ee(0),A=ee(16),_=ee(!0),R=ee("pixel"),k=ee([]),B=ee([]);let x=null,O=-1,z=0;const Q=[29,48,52,80,100],ne=he(()=>Zf(d.paletteId)),be=he(()=>_s(c.value,ne.value.colors)),fe=he(()=>be.value.reduce((b,h)=>b+h.count,0)),Fe=he(()=>({width:(f.columns*d.beadSize/10).toFixed(1),height:(f.rows*d.beadSize/10).toFixed(1)})),$e=he(()=>k.value.length>0),Ee=he(()=>B.value.length>0),Ie=he(()=>ne.value.colors[E.value]);function Ke(){d.columns=Math.max(8,Math.min(150,Number(d.columns)||48)),d.rows=Math.max(8,Math.min(150,Number(d.rows)||48))}function pe(b){d.columns=b,d.rows=b}async function te(b){var h,M;if(a.value="",!b||!["image/jpeg","image/png","image/webp"].includes(b.type)){a.value="请选择 JPG、PNG 或 WebP 图片";return}if(b.size>12*1024*1024){a.value="图片不能超过 12 MB";return}i.value=!0;try{(M=(h=l.value)==null?void 0:h.close)==null||M.call(h),l.value=await rd(b),o.value=b.name,d.zoom=1,d.focusX=50,d.focusY=50,await at(),Ye(),Le()}catch(T){a.value=T.message||"图片读取失败"}finally{i.value=!1}}function X(b){var h;te((h=b.target.files)==null?void 0:h[0]),b.target.value=""}function Je(b){var h,M;u.value=!1,te((M=(h=b.dataTransfer)==null?void 0:h.files)==null?void 0:M[0])}function Ye(){l.value&&(Ke(),sd(n.value,l.value,d))}function Le(){if(l.value){Ke(),i.value=!0;try{const b=ld(l.value,d,ne.value.colors);f.columns=d.columns,f.rows=d.rows,c.value=b,E.value=b.find(h=>h>=0)??0,k.value=[],B.value=[],at(()=>{pt(),We()})}finally{i.value=!1}}}function ke(){id(r.value,c.value,f.columns,f.rows,ne.value.colors,{cellSize:A.value,showGrid:_.value,mode:R.value})}function We(){z||(z=requestAnimationFrame(()=>{z=0,ke()}))}function pt(){if(!s.value||!f.columns||!f.rows)return;const b=Math.max(240,s.value.clientWidth-56),h=Math.max(240,s.value.clientHeight-56);A.value=Math.max(4,Math.min(25,Math.floor(Math.min(b/f.columns,h/f.rows))))}function gt(){k.value=[...k.value.slice(-39),new Int16Array(c.value)],B.value=[]}function Be(){$e.value&&(B.value=[new Int16Array(c.value),...B.value.slice(0,39)],c.value=k.value[k.value.length-1],k.value=k.value.slice(0,-1),at(We))}function w(){Ee.value&&(k.value=[...k.value.slice(-39),new Int16Array(c.value)],c.value=B.value[0],B.value=B.value.slice(1),at(We))}function H(b){const h=r.value.getBoundingClientRect(),M=(b.clientX-h.left)*(r.value.width/h.width),T=(b.clientY-h.top)*(r.value.height/h.height),P=Math.floor(M/A.value),S=Math.floor(T/A.value);return P<0||S<0||P>=f.columns||S>=f.rows?-1:S*f.columns+P}function N(b){if(b<0||b===O)return;if(O=b,v.value==="picker"){const M=c.value[b];M>=0&&(E.value=M,v.value="brush"),x=null;return}const h=v.value==="eraser"?-1:E.value;x[b]!==h&&(x[b]=h,c.value=new Int16Array(x),We())}function I(b){var h,M;c.value.length&&(b.preventDefault(),(M=(h=r.value).setPointerCapture)==null||M.call(h,b.pointerId),O=-1,v.value!=="picker"&&gt(),x=new Int16Array(c.value),N(H(b)))}function J(b){!x||!(b.buttons&1)||N(H(b))}function p(){x=null,O=-1}function g(b){E.value=b,v.value="brush"}function y(){return`${o.value.replace(/\.[^.]+$/,"").replace(/[^a-zA-Z0-9\u4e00-\u9fa5_-]+/g,"-")||"pattern"}-${f.columns}x${f.rows}`}Ft(()=>[d.columns,d.rows,d.zoom,d.focusX,d.focusY],()=>at(Ye)),Ft(()=>d.paletteId,()=>{l.value&&Le()}),Ft([A,_,R],()=>at(We));function C(b){var h;!(b.ctrlKey||b.metaKey)||b.key.toLowerCase()!=="z"||["INPUT","SELECT","TEXTAREA"].includes((h=b.target)==null?void 0:h.tagName)||(b.preventDefault(),b.shiftKey?w():Be())}return Mn(()=>window.addEventListener("keydown",C)),vs(()=>{var b,h;window.removeEventListener("keydown",C),z&&cancelAnimationFrame(z),(h=(b=l.value)==null?void 0:b.close)==null||h.call(b)}),(b,h)=>{var M,T;return K(),ue("div",pd,[l.value?(K(),ue(_e,{key:1},[m("div",yd,[h[30]||(h[30]=m("span",{class:"done"},"01 图片",-1)),h[31]||(h[31]=m("i",null,null,-1)),h[32]||(h[32]=m("span",{class:"done"},"02 裁剪",-1)),h[33]||(h[33]=m("i",null,null,-1)),m("span",{class:me({done:c.value.length})},"03 配色",2),h[34]||(h[34]=m("i",null,null,-1)),m("span",{class:me({done:c.value.length})},"04 编辑导出",2)]),m("div",bd,[m("aside",Pd,[m("div",Ad,[m("span",null,[V($(Zc),{size:15}),h[35]||(h[35]=q(" 图片与网格",-1))]),m("button",{type:"button",onClick:h[4]||(h[4]=P=>{var S;return(S=t.value)==null?void 0:S.click()})},[V($(Ss),{size:13}),h[36]||(h[36]=q(" 换图",-1))]),m("input",{ref_key:"fileInput",ref:t,type:"file",accept:"image/jpeg,image/png,image/webp",hidden:"",onChange:X},null,544)]),m("canvas",{ref_key:"cropCanvas",ref:n,class:"crop-preview","aria-label":"裁剪预览"},null,512),m("p",{class:"source-name",title:o.value},U(o.value),9,Cd),m("div",Sd,[m("label",null,[h[37]||(h[37]=q("宽度 ",-1)),ye(m("input",{"onUpdate:modelValue":h[5]||(h[5]=P=>d.columns=P),type:"number",min:"8",max:"150"},null,512),[[we,d.columns,void 0,{number:!0}]])]),h[39]||(h[39]=m("span",null,"×",-1)),m("label",null,[h[38]||(h[38]=q("高度 ",-1)),ye(m("input",{"onUpdate:modelValue":h[6]||(h[6]=P=>d.rows=P),type:"number",min:"8",max:"150"},null,512),[[we,d.rows,void 0,{number:!0}]])])]),m("div",wd,[(K(),ue(_e,null,qt(Q,P=>m("button",{key:P,type:"button",class:me({active:d.columns===P&&d.rows===P}),onClick:S=>pe(P)},U(P),11,_d)),64))]),m("label",xd,[m("span",null,[h[40]||(h[40]=q("裁剪缩放 ",-1)),m("b",null,U(d.zoom.toFixed(1))+"×",1)]),ye(m("input",{"onUpdate:modelValue":h[7]||(h[7]=P=>d.zoom=P),type:"range",min:"1",max:"3",step:"0.1"},null,512),[[we,d.zoom,void 0,{number:!0}]])]),m("label",Ed,[m("span",null,[h[41]||(h[41]=q("水平取景 ",-1)),m("b",null,U(d.focusX)+"%",1)]),ye(m("input",{"onUpdate:modelValue":h[8]||(h[8]=P=>d.focusX=P),type:"range",min:"0",max:"100"},null,512),[[we,d.focusX,void 0,{number:!0}]])]),m("label",kd,[m("span",null,[h[42]||(h[42]=q("垂直取景 ",-1)),m("b",null,U(d.focusY)+"%",1)]),ye(m("input",{"onUpdate:modelValue":h[9]||(h[9]=P=>d.focusY=P),type:"range",min:"0",max:"100"},null,512),[[we,d.focusY,void 0,{number:!0}]])]),h[48]||(h[48]=m("span",{class:"bead-label"},"成像调整",-1)),m("label",Rd,[m("span",null,[h[43]||(h[43]=q("细节增强 ",-1)),m("b",null,U(d.detail),1)]),ye(m("input",{"onUpdate:modelValue":h[10]||(h[10]=P=>d.detail=P),type:"range",min:"0",max:"80"},null,512),[[we,d.detail,void 0,{number:!0}]])]),m("label",Md,[m("span",null,[h[44]||(h[44]=q("饱和度 ",-1)),m("b",null,U(d.saturation)+"%",1)]),ye(m("input",{"onUpdate:modelValue":h[11]||(h[11]=P=>d.saturation=P),type:"range",min:"70",max:"140"},null,512),[[we,d.saturation,void 0,{number:!0}]])]),m("label",Td,[m("span",null,[h[45]||(h[45]=q("对比度 ",-1)),m("b",null,U(d.contrast)+"%",1)]),ye(m("input",{"onUpdate:modelValue":h[12]||(h[12]=P=>d.contrast=P),type:"range",min:"80",max:"130"},null,512),[[we,d.contrast,void 0,{number:!0}]])]),m("label",Bd,[m("span",null,[h[46]||(h[46]=q("亮度 ",-1)),m("b",null,U(d.brightness)+"%",1)]),ye(m("input",{"onUpdate:modelValue":h[13]||(h[13]=P=>d.brightness=P),type:"range",min:"80",max:"120"},null,512),[[we,d.brightness,void 0,{number:!0}]])]),h[49]||(h[49]=m("span",{class:"bead-label"},"拼豆规格",-1)),m("div",Od,[m("button",{type:"button",class:me({active:d.beadSize===5}),onClick:h[14]||(h[14]=P=>d.beadSize=5)},"5 mm",2),m("button",{type:"button",class:me({active:d.beadSize===2.6}),onClick:h[15]||(h[15]=P=>d.beadSize=2.6)},"2.6 mm",2)]),m("label",Nd,[h[47]||(h[47]=m("span",null,"品牌色板",-1)),ye(m("select",{"onUpdate:modelValue":h[16]||(h[16]=P=>d.paletteId=P)},[(K(!0),ue(_e,null,qt($(er),P=>(K(),ue("option",{key:P.id,value:P.id},U(P.name),9,Dd))),128))],512),[[hu,d.paletteId]])]),m("button",{class:"primary-button bead-generate",type:"button",disabled:i.value,onClick:Le},[V($(es),{size:16}),q(" "+U(i.value?"生成中…":"应用并重新生成"),1)],8,Hd),h[50]||(h[50]=m("p",{class:"palette-note"},"品牌色号来自社区校准数据；屏幕颜色与实物、批次可能存在差异。",-1))]),m("section",Id,[m("div",Ld,[m("div",Gd,[m("button",{type:"button",class:me({active:v.value==="brush"}),title:"画笔",onClick:h[17]||(h[17]=P=>v.value="brush")},[V($(R1),{size:17}),h[51]||(h[51]=m("span",null,"画笔",-1))],2),m("button",{type:"button",class:me({active:v.value==="eraser"}),title:"橡皮擦",onClick:h[18]||(h[18]=P=>v.value="eraser")},[V($(t1),{size:17}),h[52]||(h[52]=m("span",null,"擦除",-1))],2),m("button",{type:"button",class:me({active:v.value==="picker"}),title:"吸色",onClick:h[19]||(h[19]=P=>v.value="picker")},[V($(ts),{size:17}),h[53]||(h[53]=m("span",null,"吸色",-1))],2)]),m("div",Fd,[m("button",{type:"button",disabled:!$e.value,title:"撤销",onClick:Be},[V($(j1),{size:17})],8,$d),m("button",{type:"button",disabled:!Ee.value,title:"重做",onClick:w},[V($(B1),{size:17})],8,Vd)]),m("label",jd,[h[54]||(h[54]=q("缩放 ",-1)),ye(m("input",{"onUpdate:modelValue":h[20]||(h[20]=P=>A.value=P),type:"range",min:"4",max:"25"},null,512),[[we,A.value,void 0,{number:!0}]])]),m("button",{class:"fit-button",type:"button",title:"适应画布",onClick:pt},[V($(S1),{size:15}),h[55]||(h[55]=q(" 适应",-1))]),m("div",Ud,[m("button",{type:"button",class:me({active:R.value==="pixel"}),onClick:h[21]||(h[21]=P=>R.value="pixel")},"色块",2),m("button",{type:"button",class:me({active:R.value==="bead"}),onClick:h[22]||(h[22]=P=>R.value="bead")},"拼豆",2)]),m("button",{class:me(["grid-toggle",{active:_.value}]),type:"button",onClick:h[23]||(h[23]=P=>_.value=!_.value)},[V($(es),{size:16}),h[56]||(h[56]=q(" 网格",-1))],2)]),m("div",{ref_key:"canvasViewport",ref:s,class:"bead-canvas-viewport"},[m("canvas",{ref_key:"beadCanvas",ref:r,class:"bead-canvas","aria-label":"拼豆编辑画布",onPointerdown:I,onPointermove:J,onPointerup:p,onPointercancel:p,onPointerleave:p},null,544)],512),m("div",zd,[m("span",null,U(f.columns)+" × "+U(f.rows)+" 颗",1),m("span",null,U(Fe.value.width)+" × "+U(Fe.value.height)+" cm",1),m("span",null,U(fe.value)+" 颗豆",1),m("span",null,[m("i",{class:"selected-swatch",style:Jt({background:(M=Ie.value)==null?void 0:M.hex})},null,4),q(U((T=Ie.value)==null?void 0:T.name),1)])])]),m("aside",Wd,[m("div",qd,[m("span",null,[V($(ts),{size:15}),h[57]||(h[57]=q(" 颜色与用量",-1))]),m("b",null,U(be.value.length)+" 色",1)]),m("div",Kd,[(K(!0),ue(_e,null,qt(ne.value.colors,(P,S)=>(K(),ue("button",{key:P.id,type:"button",class:me({active:E.value===S}),style:Jt({"--swatch":P.hex}),title:`${P.name} / ${P.code}`,onClick:G=>g(S)},[...h[58]||(h[58]=[m("span",null,null,-1)])],14,Jd))),128))]),m("div",Yd,[(K(!0),ue(_e,null,qt(be.value,P=>(K(),ue("button",{key:P.id,type:"button",onClick:S=>g(P.index)},[m("i",{style:Jt({background:P.hex})},null,4),m("span",null,[m("b",null,U(P.name),1),m("small",null,U(P.code),1)]),m("strong",null,U(P.count),1)],8,Qd))),128))]),m("div",Xd,[h[61]||(h[61]=m("span",{class:"bead-label"},"导出图纸",-1)),m("button",{type:"button",onClick:h[24]||(h[24]=P=>$(dd)(c.value,f.columns,f.rows,ne.value.colors,`${y()}.png`,{paletteName:ne.value.name}))},[V($(r1),{size:16}),h[59]||(h[59]=q(" PNG 图片",-1))]),m("button",{type:"button",onClick:h[25]||(h[25]=P=>$(hd)(c.value,f.columns,f.rows,ne.value.colors,`${y()}.pdf`,{paletteName:ne.value.name}))},[V($(Jo),{size:16}),h[60]||(h[60]=q(" PDF 图纸",-1))])]),m("p",Zd,[V($(I1),{size:14}),h[62]||(h[62]=q(" 图片与编辑数据仅保留在当前页面",-1))])])])],64)):(K(),ue("div",{key:0,class:me(["bead-upload",{dragging:u.value}]),onDragenter:h[1]||(h[1]=Ln(P=>u.value=!0,["prevent"])),onDragover:h[2]||(h[2]=Ln(()=>{},["prevent"])),onDragleave:h[3]||(h[3]=Ln(P=>u.value=!1,["prevent"])),onDrop:Ln(Je,["prevent"])},[m("input",{ref_key:"fileInput",ref:t,type:"file",accept:"image/jpeg,image/png,image/webp",hidden:"",onChange:X},null,544),m("span",gd,[V($(Qc),{size:34,"stroke-width":1.5})]),h[26]||(h[26]=m("p",{class:"bead-kicker"},"LOCAL IMAGE WORKFLOW",-1)),h[27]||(h[27]=m("h2",null,"从一张图片开始",-1)),h[28]||(h[28]=m("p",null,"拖入 JPG、PNG 或 WebP，图片只在当前浏览器中解码与处理。",-1)),m("button",{class:"primary-button",type:"button",disabled:i.value,onClick:h[0]||(h[0]=P=>{var S;return(S=t.value)==null?void 0:S.click()})},[V($(h1),{size:17}),q(" "+U(i.value?"正在读取…":"选择图片"),1)],8,md),h[29]||(h[29]=m("small",null,"最大 12 MB · 不上传服务器",-1)),a.value?(K(),ue("p",vd,U(a.value),1)):gr("",!0)],34))])}}},th={key:0,class:"workspace"},nh={class:"workspace-header"},rh={class:"local-badge"},sh={__name:"ToolView",setup(e){const t=Ko(),n=he(()=>nf(t.params.slug)),r={json:wf,base64:Mf,timestamp:Df,password:Vf,"pixel-beads":eh},s=he(()=>r[t.params.slug]);return Mn(()=>{fetch("/api/v1/events/tool-opened",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:t.params.slug})}).catch(()=>{})}),(l,o)=>{const a=jr("router-link");return n.value&&s.value?(K(),ue("section",th,[V(a,{class:"back-link",to:"/"},{default:cr(()=>[V($(Ic),{size:16}),o[0]||(o[0]=q(" 返回工具索引",-1))]),_:1}),m("header",nh,[m("div",{class:me(["workspace-icon",`tone-${n.value.color}`])},[(K(),ze(qn(n.value.icon),{size:28}))],2),m("div",null,[m("p",null,U(n.value.index)+" / "+U(n.value.category),1),m("h1",null,U(n.value.name),1),m("span",null,U(n.value.summary),1)]),m("div",rh,[V($(A1),{size:14}),o[1]||(o[1]=q(" 本地处理",-1))])]),(K(),ze(qn(s.value)))])):gr("",!0)}}},lh=Ec({history:lc(),routes:[{path:"/",component:yf},{path:"/tools/:slug",component:sh},{path:"/:pathMatch(.*)*",redirect:"/"}],scrollBehavior:()=>({top:0})});bu(ef).use(lh).mount("#app");
