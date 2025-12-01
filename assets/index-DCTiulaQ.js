var sk=Object.defineProperty;var lk=(e,t,r)=>t in e?sk(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var kb=(e,t,r)=>lk(e,typeof t!="symbol"?t+"":t,r);function ck(e,t){for(var r=0;r<t.length;r++){const a=t[r];if(typeof a!="string"&&!Array.isArray(a)){for(const s in a)if(s!=="default"&&!(s in e)){const l=Object.getOwnPropertyDescriptor(a,s);l&&Object.defineProperty(e,s,l.get?l:{enumerable:!0,get:()=>a[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function r(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=r(s);fetch(s.href,l)}})();function Em(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Uh={exports:{}},zs={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eb;function uk(){if(Eb)return zs;Eb=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(a,s,l){var u=null;if(l!==void 0&&(u=""+l),s.key!==void 0&&(u=""+s.key),"key"in s){l={};for(var d in s)d!=="key"&&(l[d]=s[d])}else l=s;return s=l.ref,{$$typeof:e,type:a,key:u,ref:s!==void 0?s:null,props:l}}return zs.Fragment=t,zs.jsx=r,zs.jsxs=r,zs}var Cb;function dk(){return Cb||(Cb=1,Uh.exports=uk()),Uh.exports}var Z=dk();/**
 * @license bippy
 *
 * Copyright (c) Aiden Bai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const fk="0.3.34",Cm=`bippy-${fk}`,Ab=Object.defineProperty,hk=Object.prototype.hasOwnProperty,Is=()=>{},Q1=e=>{try{Function.prototype.toString.call(e).indexOf("^_^")>-1&&setTimeout(()=>{throw new Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")})}catch{}},K1=(e=zo())=>"getFiberRoots"in e;let W1=!1,Pc;const Mp=(e=zo())=>W1?!0:(typeof e.inject=="function"&&(Pc=e.inject.toString()),!!(Pc!=null&&Pc.includes("(injected)"))),fu=new Set,Op=new Set,pk=e=>{const t=new Map;let r=0,a={_instrumentationIsActive:!1,_instrumentationSource:Cm,checkDCE:Q1,hasUnsupportedRendererAttached:!1,inject(s){const l=++r;return t.set(l,s),Op.add(s),a._instrumentationIsActive||(a._instrumentationIsActive=!0,fu.forEach(u=>u())),l},on:Is,onCommitFiberRoot:Is,onCommitFiberUnmount:Is,onPostCommitFiberRoot:Is,renderers:t,supportsFiber:!0,supportsFlight:!0};try{Ab(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__",{configurable:!0,enumerable:!0,get(){return a},set(u){if(u&&typeof u=="object"){const d=a.renderers;a=u,d.size>0&&(d.forEach((f,h)=>{Op.add(f),u.renderers.set(h,f)}),Np(e))}}});const s=window.hasOwnProperty;let l=!1;Ab(window,"hasOwnProperty",{configurable:!0,value:function(...u){try{if(!l&&u[0]==="__REACT_DEVTOOLS_GLOBAL_HOOK__")return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,l=!0,-0}catch{}return s.apply(this,u)},writable:!0})}catch{Np(e)}return a},Np=e=>{e&&fu.add(e);try{const t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t)return;if(!t._instrumentationSource){const r=K1();if(t.checkDCE=Q1,t.supportsFiber=!0,t.supportsFlight=!0,t.hasUnsupportedRendererAttached=!1,t._instrumentationSource=Cm,t._instrumentationIsActive=!1,r||(t.on=Is),t.renderers.size){t._instrumentationIsActive=!0,fu.forEach(s=>s());return}const a=t.inject;Mp(t)&&!r&&(W1=!0,t.inject({scheduleRefresh(){}})&&(t._instrumentationIsActive=!0)),t.inject=s=>{const l=a(s);return Op.add(s),t._instrumentationIsActive=!0,fu.forEach(u=>u()),l}}(t.renderers.size||t._instrumentationIsActive||Mp())&&(e==null||e())}catch{}},mk=()=>hk.call(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__"),zo=e=>mk()?(Np(e),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):pk(e),gk=()=>{var e,t;return!!(typeof window<"u"&&((e=window.document)!=null&&e.createElement||((t=window.navigator)==null?void 0:t.product)==="ReactNative"))},vk=()=>{try{gk()&&zo()}catch{}},Wu=0,ha=1,Z1=3,yk=5,bk=6,wk=7,xk=9,Zu=11,Ju=13,vl=14,yl=15,_k=18,Sk=22,Tk=23,kk=26,Ek=27,Ck=60111,Ak="Symbol(react.concurrent_mode)",Mk="Symbol(react.async_mode)",Mb=1,Ok=2,Nk=4096,zk=4,Ob=8,Dk=16,Rk=32,jk=1024,Uk=8192,Nb=Ok|zk|Dk|Rk|Nk|Uk|jk,el=e=>{switch(e.tag){case yk:case kk:case Ek:return!0;default:return typeof e.type=="string"}},ed=e=>{switch(e.tag){case ha:case Zu:case Wu:case vl:case yl:return!0;default:return!1}},$k=(e,t)=>{var r;try{const a=e.dependencies,s=(r=e.alternate)==null?void 0:r.dependencies;if(!a||!s||typeof a!="object"||!("firstContext"in a)||typeof s!="object"||!("firstContext"in s))return!1;let l=a.firstContext,u=s.firstContext;for(;l&&typeof l=="object"&&"memoizedValue"in l||u&&typeof u=="object"&&"memoizedValue"in u;){if(t(l,u)===!0)return!0;l=l==null?void 0:l.next,u=u==null?void 0:u.next}}catch{}return!1},Am=e=>{var s;const t=e.memoizedProps,r=((s=e.alternate)==null?void 0:s.memoizedProps)||{},a=e.flags??e.effectTag??0;switch(e.tag){case ha:case xk:case Zu:case Wu:case vl:case yl:return(a&Mb)===Mb;default:return e.alternate?r!==t||e.alternate.memoizedState!==e.memoizedState||e.alternate.ref!==e.ref:!0}},Mm=e=>(e.flags&(Nb|Ob))!==0||(e.subtreeFlags&(Nb|Ob))!==0,Lk=e=>{const t=[],r=[e];for(;r.length;){const a=r.pop();a&&(el(a)&&Mm(a)&&Am(a)&&t.push(a),a.child&&r.push(a.child),a.sibling&&r.push(a.sibling))}return t},Om=e=>{switch(e.tag){case _k:return!0;case wk:case bk:case Tk:case Sk:return!0;case Z1:return!1;default:{const t=typeof e.type=="object"&&e.type!==null?e.type.$$typeof:e.type;switch(typeof t=="symbol"?t.toString():t){case Ck:case Ak:case Mk:return!0;default:return!1}}}},Hk=e=>{const t=[],r=[];for(el(e)?t.push(e):e.child&&r.push(e.child);r.length;){const a=r.pop();if(!a)break;el(a)?t.push(a):a.child&&r.push(a.child),a.sibling&&r.push(a.sibling)}return t};function J1(e,t,r=!1){return e&&t(e)instanceof Promise?tx(e,t,r):ex(e,t,r)}const ex=(e,t,r=!1)=>{if(!e)return null;if(t(e)===!0)return e;let a=r?e.return:e.child;for(;a;){const s=ex(a,t,r);if(s)return s;a=r?null:a.sibling}return null},tx=async(e,t,r=!1)=>{if(!e)return null;if(await t(e)===!0)return e;let a=r?e.return:e.child;for(;a;){const s=await tx(a,t,r);if(s)return s;a=r?null:a.sibling}return null},ra=e=>{const t=(e==null?void 0:e.actualDuration)??0;let r=t,a=(e==null?void 0:e.child)??null;for(;t>0&&a!=null;)r-=a.actualDuration??0,a=a.sibling;return{selfTime:r,totalTime:t}},tl=e=>{var t;return!!((t=e.updateQueue)!=null&&t.memoCache)},pa=e=>{const t=e;return typeof t=="function"?t:typeof t=="object"&&t?pa(t.type||t.render):null},Nt=e=>{const t=e;if(typeof t=="string")return t;if(typeof t!="function"&&!(typeof t=="object"&&t))return null;const r=t.displayName||t.name||null;if(r)return r;const a=pa(t);return a&&(a.displayName||a.name)||null},Ik=e=>{try{if(typeof e.version=="string"&&e.bundleType>0)return"development"}catch{}return"production"},Bk=()=>!!zo()._instrumentationIsActive||K1()||Mp();let nx=0;const xo=new WeakMap,qk=(e,t=nx++)=>{xo.set(e,t)},Ei=e=>{let t=xo.get(e);return!t&&e.alternate&&(t=xo.get(e.alternate)),t||(t=nx++,qk(e,t)),t},ki=(e,t,r)=>{let a=t;for(;a!=null;){if(xo.has(a)||Ei(a),!Om(a)&&Am(a)&&e(a,"mount"),a.tag===Ju)if(a.memoizedState!==null){const u=a.child,d=u?u.sibling:null;if(d){const f=d.child;f!==null&&ki(e,f,!1)}}else{let u=null;a.child!==null&&(u=a.child.child),u!==null&&ki(e,u,!1)}else a.child!=null&&ki(e,a.child,!0);a=r?a.sibling:null}},zp=(e,t,r,a)=>{var f,h,v;if(xo.has(t)||Ei(t),!r)return;xo.has(r)||Ei(r);const s=t.tag===Ju;!Om(t)&&Am(t)&&e(t,"update");const u=s&&r.memoizedState!==null,d=s&&t.memoizedState!==null;if(u&&d){const g=((f=t.child)==null?void 0:f.sibling)??null,b=((h=r.child)==null?void 0:h.sibling)??null;g!==null&&b!==null&&zp(e,g,b)}else if(u&&!d){const g=t.child;g!==null&&ki(e,g,!0)}else if(!u&&d){rx(e,r);const g=((v=t.child)==null?void 0:v.sibling)??null;g!==null&&ki(e,g,!0)}else if(t.child!==r.child){let g=t.child;for(;g;){if(g.alternate){const b=g.alternate;zp(e,g,b)}else ki(e,g,!1);g=g.sibling}}},Dp=(e,t)=>{(t.tag===Z1||!Om(t))&&e(t,"unmount")},rx=(e,t)=>{const r=t.tag===Ju&&t.memoizedState!==null;let a=t.child;if(r){const s=t.child,l=(s==null?void 0:s.sibling)??null;a=(l==null?void 0:l.child)??null}for(;a!==null;)a.return!==null&&(Dp(e,a),rx(e,a)),a=a.sibling};let Fk=0;const zb=new WeakMap,Yk=(e,t)=>{const r="current"in e?e.current:e;let a=zb.get(e);a||(a={id:Fk++,prevFiber:null},zb.set(e,a));const{prevFiber:s}=a;if(!r)Dp(t,r);else if(s!==null){const l=s&&s.memoizedState!=null&&s.memoizedState.element!=null&&s.memoizedState.isDehydrated!==!0,u=r.memoizedState!=null&&r.memoizedState.element!=null&&r.memoizedState.isDehydrated!==!0;!l&&u?ki(t,r,!1):l&&u?zp(t,r,r.alternate):l&&!u&&Dp(t,r)}else ki(t,r,!0);a.prevFiber=r},Pk=e=>{const t=zo(e.onActive);t._instrumentationSource=e.name??Cm;const r=t.onCommitFiberRoot;if(e.onCommitFiberRoot){const l=(u,d,f)=>{var h;t.onCommitFiberRoot===l&&(r==null||r(u,d,f),(h=e.onCommitFiberRoot)==null||h.call(e,u,d,f))};t.onCommitFiberRoot=l}const a=t.onCommitFiberUnmount;if(e.onCommitFiberUnmount){const l=(u,d)=>{var f;t.onCommitFiberUnmount===l&&(a==null||a(u,d),(f=e.onCommitFiberUnmount)==null||f.call(e,u,d))};t.onCommitFiberUnmount=l}const s=t.onPostCommitFiberRoot;if(e.onPostCommitFiberRoot){const l=(u,d)=>{var f;t.onPostCommitFiberRoot===l&&(s==null||s(u,d),(f=e.onPostCommitFiberRoot)==null||f.call(e,u,d))};t.onPostCommitFiberRoot=l}return t};vk();var td,xe,ix,ax,ta,Db,ox,sx,lx,Nm,Rp,jp,cx,nl={},ux=[],Xk=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,bl=Array.isArray;function $r(e,t){for(var r in t)e[r]=t[r];return e}function zm(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function ua(e,t,r){var a,s,l,u={};for(l in t)l=="key"?a=t[l]:l=="ref"?s=t[l]:u[l]=t[l];if(arguments.length>2&&(u.children=arguments.length>3?td.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(l in e.defaultProps)u[l]===void 0&&(u[l]=e.defaultProps[l]);return hu(e,u,a,s,null)}function hu(e,t,r,a,s){var l={type:e,props:t,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++ix,__i:-1,__u:0};return s==null&&xe.vnode!=null&&xe.vnode(l),l}function je(e){return e.children}function In(e,t){this.props=e,this.context=t}function _o(e,t){if(t==null)return e.__?_o(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?_o(e):null}function dx(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return dx(e)}}function Up(e){(!e.__d&&(e.__d=!0)&&ta.push(e)&&!Au.__r++||Db!=xe.debounceRendering)&&((Db=xe.debounceRendering)||ox)(Au)}function Au(){for(var e,t,r,a,s,l,u,d=1;ta.length;)ta.length>d&&ta.sort(sx),e=ta.shift(),d=ta.length,e.__d&&(r=void 0,a=void 0,s=(a=(t=e).__v).__e,l=[],u=[],t.__P&&((r=$r({},a)).__v=a.__v+1,xe.vnode&&xe.vnode(r),Dm(t.__P,r,a,t.__n,t.__P.namespaceURI,32&a.__u?[s]:null,l,s??_o(a),!!(32&a.__u),u),r.__v=a.__v,r.__.__k[r.__i]=r,px(l,r,u),a.__e=a.__=null,r.__e!=s&&dx(r)));Au.__r=0}function fx(e,t,r,a,s,l,u,d,f,h,v){var g,b,w,S,T,k,_,E=a&&a.__k||ux,M=t.length;for(f=Gk(r,t,E,f,M),g=0;g<M;g++)(w=r.__k[g])!=null&&(b=w.__i==-1?nl:E[w.__i]||nl,w.__i=g,k=Dm(e,w,b,s,l,u,d,f,h,v),S=w.__e,w.ref&&b.ref!=w.ref&&(b.ref&&Rm(b.ref,null,w),v.push(w.ref,w.__c||S,w)),T==null&&S!=null&&(T=S),(_=!!(4&w.__u))||b.__k===w.__k?f=hx(w,f,e,_):typeof w.type=="function"&&k!==void 0?f=k:S&&(f=S.nextSibling),w.__u&=-7);return r.__e=T,f}function Gk(e,t,r,a,s){var l,u,d,f,h,v=r.length,g=v,b=0;for(e.__k=new Array(s),l=0;l<s;l++)(u=t[l])!=null&&typeof u!="boolean"&&typeof u!="function"?(f=l+b,(u=e.__k[l]=typeof u=="string"||typeof u=="number"||typeof u=="bigint"||u.constructor==String?hu(null,u,null,null,null):bl(u)?hu(je,{children:u},null,null,null):u.constructor==null&&u.__b>0?hu(u.type,u.props,u.key,u.ref?u.ref:null,u.__v):u).__=e,u.__b=e.__b+1,d=null,(h=u.__i=Vk(u,r,f,g))!=-1&&(g--,(d=r[h])&&(d.__u|=2)),d==null||d.__v==null?(h==-1&&(s>v?b--:s<v&&b++),typeof u.type!="function"&&(u.__u|=4)):h!=f&&(h==f-1?b--:h==f+1?b++:(h>f?b--:b++,u.__u|=4))):e.__k[l]=null;if(g)for(l=0;l<v;l++)(d=r[l])!=null&&(2&d.__u)==0&&(d.__e==a&&(a=_o(d)),gx(d,d));return a}function hx(e,t,r,a){var s,l;if(typeof e.type=="function"){for(s=e.__k,l=0;s&&l<s.length;l++)s[l]&&(s[l].__=e,t=hx(s[l],t,r,a));return t}e.__e!=t&&(a&&(t&&e.type&&!t.parentNode&&(t=_o(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Mu(e,t){return t=t||[],e==null||typeof e=="boolean"||(bl(e)?e.some(function(r){Mu(r,t)}):t.push(e)),t}function Vk(e,t,r,a){var s,l,u,d=e.key,f=e.type,h=t[r],v=h!=null&&(2&h.__u)==0;if(h===null&&e.key==null||v&&d==h.key&&f==h.type)return r;if(a>(v?1:0)){for(s=r-1,l=r+1;s>=0||l<t.length;)if((h=t[u=s>=0?s--:l++])!=null&&(2&h.__u)==0&&d==h.key&&f==h.type)return u}return-1}function Rb(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||Xk.test(t)?r:r+"px"}function Xc(e,t,r,a,s){var l,u;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof a=="string"&&(e.style.cssText=a=""),a)for(t in a)r&&t in r||Rb(e.style,t,"");if(r)for(t in r)a&&r[t]==a[t]||Rb(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")l=t!=(t=t.replace(lx,"$1")),u=t.toLowerCase(),t=u in e||t=="onFocusOut"||t=="onFocusIn"?u.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+l]=r,r?a?r.u=a.u:(r.u=Nm,e.addEventListener(t,l?jp:Rp,l)):e.removeEventListener(t,l?jp:Rp,l);else{if(s=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function jb(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=Nm++;else if(t.t<r.u)return;return r(xe.event?xe.event(t):t)}}}function Dm(e,t,r,a,s,l,u,d,f,h){var v,g,b,w,S,T,k,_,E,M,D,j,Y,B,ee,ne,pe,de=t.type;if(t.constructor!=null)return null;128&r.__u&&(f=!!(32&r.__u),l=[d=t.__e=r.__e]),(v=xe.__b)&&v(t);e:if(typeof de=="function")try{if(_=t.props,E="prototype"in de&&de.prototype.render,M=(v=de.contextType)&&a[v.__c],D=v?M?M.props.value:v.__:a,r.__c?k=(g=t.__c=r.__c).__=g.__E:(E?t.__c=g=new de(_,D):(t.__c=g=new In(_,D),g.constructor=de,g.render=Kk),M&&M.sub(g),g.props=_,g.state||(g.state={}),g.context=D,g.__n=a,b=g.__d=!0,g.__h=[],g._sb=[]),E&&g.__s==null&&(g.__s=g.state),E&&de.getDerivedStateFromProps!=null&&(g.__s==g.state&&(g.__s=$r({},g.__s)),$r(g.__s,de.getDerivedStateFromProps(_,g.__s))),w=g.props,S=g.state,g.__v=t,b)E&&de.getDerivedStateFromProps==null&&g.componentWillMount!=null&&g.componentWillMount(),E&&g.componentDidMount!=null&&g.__h.push(g.componentDidMount);else{if(E&&de.getDerivedStateFromProps==null&&_!==w&&g.componentWillReceiveProps!=null&&g.componentWillReceiveProps(_,D),!g.__e&&g.shouldComponentUpdate!=null&&g.shouldComponentUpdate(_,g.__s,D)===!1||t.__v==r.__v){for(t.__v!=r.__v&&(g.props=_,g.state=g.__s,g.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(ae){ae&&(ae.__=t)}),j=0;j<g._sb.length;j++)g.__h.push(g._sb[j]);g._sb=[],g.__h.length&&u.push(g);break e}g.componentWillUpdate!=null&&g.componentWillUpdate(_,g.__s,D),E&&g.componentDidUpdate!=null&&g.__h.push(function(){g.componentDidUpdate(w,S,T)})}if(g.context=D,g.props=_,g.__P=e,g.__e=!1,Y=xe.__r,B=0,E){for(g.state=g.__s,g.__d=!1,Y&&Y(t),v=g.render(g.props,g.state,g.context),ee=0;ee<g._sb.length;ee++)g.__h.push(g._sb[ee]);g._sb=[]}else do g.__d=!1,Y&&Y(t),v=g.render(g.props,g.state,g.context),g.state=g.__s;while(g.__d&&++B<25);g.state=g.__s,g.getChildContext!=null&&(a=$r($r({},a),g.getChildContext())),E&&!b&&g.getSnapshotBeforeUpdate!=null&&(T=g.getSnapshotBeforeUpdate(w,S)),ne=v,v!=null&&v.type===je&&v.key==null&&(ne=mx(v.props.children)),d=fx(e,bl(ne)?ne:[ne],t,r,a,s,l,u,d,f,h),g.base=t.__e,t.__u&=-161,g.__h.length&&u.push(g),k&&(g.__E=g.__=null)}catch(ae){if(t.__v=null,f||l!=null)if(ae.then){for(t.__u|=f?160:128;d&&d.nodeType==8&&d.nextSibling;)d=d.nextSibling;l[l.indexOf(d)]=null,t.__e=d}else{for(pe=l.length;pe--;)zm(l[pe]);$p(t)}else t.__e=r.__e,t.__k=r.__k,ae.then||$p(t);xe.__e(ae,t,r)}else l==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):d=t.__e=Qk(r.__e,t,r,a,s,l,u,f,h);return(v=xe.diffed)&&v(t),128&t.__u?void 0:d}function $p(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach($p)}function px(e,t,r){for(var a=0;a<r.length;a++)Rm(r[a],r[++a],r[++a]);xe.__c&&xe.__c(t,e),e.some(function(s){try{e=s.__h,s.__h=[],e.some(function(l){l.call(s)})}catch(l){xe.__e(l,s.__v)}})}function mx(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:bl(e)?e.map(mx):$r({},e)}function Qk(e,t,r,a,s,l,u,d,f){var h,v,g,b,w,S,T,k=r.props,_=t.props,E=t.type;if(E=="svg"?s="http://www.w3.org/2000/svg":E=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),l!=null){for(h=0;h<l.length;h++)if((w=l[h])&&"setAttribute"in w==!!E&&(E?w.localName==E:w.nodeType==3)){e=w,l[h]=null;break}}if(e==null){if(E==null)return document.createTextNode(_);e=document.createElementNS(s,E,_.is&&_),d&&(xe.__m&&xe.__m(t,l),d=!1),l=null}if(E==null)k===_||d&&e.data==_||(e.data=_);else{if(l=l&&td.call(e.childNodes),k=r.props||nl,!d&&l!=null)for(k={},h=0;h<e.attributes.length;h++)k[(w=e.attributes[h]).name]=w.value;for(h in k)if(w=k[h],h!="children"){if(h=="dangerouslySetInnerHTML")g=w;else if(!(h in _)){if(h=="value"&&"defaultValue"in _||h=="checked"&&"defaultChecked"in _)continue;Xc(e,h,null,w,s)}}for(h in _)w=_[h],h=="children"?b=w:h=="dangerouslySetInnerHTML"?v=w:h=="value"?S=w:h=="checked"?T=w:d&&typeof w!="function"||k[h]===w||Xc(e,h,w,k[h],s);if(v)d||g&&(v.__html==g.__html||v.__html==e.innerHTML)||(e.innerHTML=v.__html),t.__k=[];else if(g&&(e.innerHTML=""),fx(t.type=="template"?e.content:e,bl(b)?b:[b],t,r,a,E=="foreignObject"?"http://www.w3.org/1999/xhtml":s,l,u,l?l[0]:r.__k&&_o(r,0),d,f),l!=null)for(h=l.length;h--;)zm(l[h]);d||(h="value",E=="progress"&&S==null?e.removeAttribute("value"):S!=null&&(S!==e[h]||E=="progress"&&!S||E=="option"&&S!=k[h])&&Xc(e,h,S,k[h],s),h="checked",T!=null&&T!=e[h]&&Xc(e,h,T,k[h],s))}return e}function Rm(e,t,r){try{if(typeof e=="function"){var a=typeof e.__u=="function";a&&e.__u(),a&&t==null||(e.__u=e(t))}else e.current=t}catch(s){xe.__e(s,r)}}function gx(e,t,r){var a,s;if(xe.unmount&&xe.unmount(e),(a=e.ref)&&(a.current&&a.current!=e.__e||Rm(a,null,t)),(a=e.__c)!=null){if(a.componentWillUnmount)try{a.componentWillUnmount()}catch(l){xe.__e(l,t)}a.base=a.__P=null}if(a=e.__k)for(s=0;s<a.length;s++)a[s]&&gx(a[s],t,r||typeof e.type!="function");r||zm(e.__e),e.__c=e.__=e.__e=void 0}function Kk(e,t,r){return this.constructor(e,r)}function Xs(e,t,r){var a,s,l,u;t==document&&(t=document.documentElement),xe.__&&xe.__(e,t),s=(a=!1)?null:t.__k,l=[],u=[],Dm(t,e=t.__k=ua(je,null,[e]),s||nl,nl,t.namespaceURI,s?null:t.firstChild?td.call(t.childNodes):null,l,s?s.__e:t.firstChild,a,u),px(l,e,u)}function vx(e){function t(r){var a,s;return this.getChildContext||(a=new Set,(s={})[t.__c]=this,this.getChildContext=function(){return s},this.componentWillUnmount=function(){a=null},this.shouldComponentUpdate=function(l){this.props.value!=l.value&&a.forEach(function(u){u.__e=!0,Up(u)})},this.sub=function(l){a.add(l);var u=l.componentWillUnmount;l.componentWillUnmount=function(){a&&a.delete(l),u&&u.call(l)}}),r.children}return t.__c="__cC"+cx++,t.__=e,t.Provider=t.__l=(t.Consumer=function(r,a){return r.children(a)}).contextType=t,t}td=ux.slice,xe={__e:function(e,t,r,a){for(var s,l,u;t=t.__;)if((s=t.__c)&&!s.__)try{if((l=s.constructor)&&l.getDerivedStateFromError!=null&&(s.setState(l.getDerivedStateFromError(e)),u=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,a||{}),u=s.__d),u)return s.__E=s}catch(d){e=d}throw e}},ix=0,ax=function(e){return e!=null&&e.constructor==null},In.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=$r({},this.state),typeof e=="function"&&(e=e($r({},r),this.props)),e&&$r(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),Up(this))},In.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Up(this))},In.prototype.render=je,ta=[],ox=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,sx=function(e,t){return e.__v.__b-t.__v.__b},Au.__r=0,lx=/(PointerCapture)$|Capture$/i,Nm=0,Rp=jb(!1),jp=jb(!0),cx=0;var da,at,$h,Ub,rl=0,yx=[],gt=xe,$b=gt.__b,Lb=gt.__r,Hb=gt.diffed,Ib=gt.__c,Bb=gt.unmount,qb=gt.__;function wl(e,t){gt.__h&&gt.__h(at,e,rl||t),rl=0;var r=at.__H||(at.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function Ce(e){return rl=1,Wk(bx,e)}function Wk(e,t,r){var a=wl(da++,2);if(a.t=e,!a.__c&&(a.__=[r?r(t):bx(void 0,t),function(d){var f=a.__N?a.__N[0]:a.__[0],h=a.t(f,d);f!==h&&(a.__N=[h,a.__[1]],a.__c.setState({}))}],a.__c=at,!at.__f)){var s=function(d,f,h){if(!a.__c.__H)return!0;var v=a.__c.__H.__.filter(function(b){return!!b.__c});if(v.every(function(b){return!b.__N}))return!l||l.call(this,d,f,h);var g=a.__c.props!==d;return v.forEach(function(b){if(b.__N){var w=b.__[0];b.__=b.__N,b.__N=void 0,w!==b.__[0]&&(g=!0)}}),l&&l.call(this,d,f,h)||g};at.__f=!0;var l=at.shouldComponentUpdate,u=at.componentWillUpdate;at.componentWillUpdate=function(d,f,h){if(this.__e){var v=l;l=void 0,s(d,f,h),l=v}u&&u.call(this,d,f,h)},at.shouldComponentUpdate=s}return a.__N||a.__}function ke(e,t){var r=wl(da++,3);!gt.__s&&$m(r.__H,t)&&(r.__=e,r.u=t,at.__H.__h.push(r))}function jm(e,t){var r=wl(da++,4);!gt.__s&&$m(r.__H,t)&&(r.__=e,r.u=t,at.__h.push(r))}function fe(e){return rl=5,Zn(function(){return{current:e}},[])}function Zn(e,t){var r=wl(da++,7);return $m(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function mt(e,t){return rl=8,Zn(function(){return e},t)}function Um(e){var t=at.context[e.__c],r=wl(da++,9);return r.c=e,t?(r.__==null&&(r.__=!0,t.sub(at)),t.props.value):e.__}function Zk(){for(var e;e=yx.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(pu),e.__H.__h.forEach(Lp),e.__H.__h=[]}catch(t){e.__H.__h=[],gt.__e(t,e.__v)}}gt.__b=function(e){at=null,$b&&$b(e)},gt.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),qb&&qb(e,t)},gt.__r=function(e){Lb&&Lb(e),da=0;var t=(at=e.__c).__H;t&&($h===at?(t.__h=[],at.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(pu),t.__h.forEach(Lp),t.__h=[],da=0)),$h=at},gt.diffed=function(e){Hb&&Hb(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(yx.push(t)!==1&&Ub===gt.requestAnimationFrame||((Ub=gt.requestAnimationFrame)||Jk)(Zk)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),$h=at=null},gt.__c=function(e,t){t.some(function(r){try{r.__h.forEach(pu),r.__h=r.__h.filter(function(a){return!a.__||Lp(a)})}catch(a){t.some(function(s){s.__h&&(s.__h=[])}),t=[],gt.__e(a,r.__v)}}),Ib&&Ib(e,t)},gt.unmount=function(e){Bb&&Bb(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(a){try{pu(a)}catch(s){t=s}}),r.__H=void 0,t&&gt.__e(t,r.__v))};var Fb=typeof requestAnimationFrame=="function";function Jk(e){var t,r=function(){clearTimeout(a),Fb&&cancelAnimationFrame(t),setTimeout(e)},a=setTimeout(r,35);Fb&&(t=requestAnimationFrame(r))}function pu(e){var t=at,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),at=t}function Lp(e){var t=at;e.__c=e.__(),at=t}function $m(e,t){return!e||e.length!==t.length||t.some(function(r,a){return r!==e[a]})}function bx(e,t){return typeof t=="function"?t(e):t}var eE=Symbol.for("preact-signals");function Lm(){if(mo>1)mo--;else{for(var e,t=!1;Gs!==void 0;){var r=Gs;for(Gs=void 0,Hp++;r!==void 0;){var a=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&xx(r))try{r.c()}catch(s){t||(e=s,t=!0)}r=a}}if(Hp=0,mo--,t)throw e}}var Fe=void 0;function il(e){var t=Fe;Fe=void 0;try{return e()}finally{Fe=t}}var Gs=void 0,mo=0,Hp=0,Ou=0;function wx(e){if(Fe!==void 0){var t=e.n;if(t===void 0||t.t!==Fe)return t={i:0,S:e,p:Fe.s,n:void 0,t:Fe,e:void 0,x:void 0,r:t},Fe.s!==void 0&&(Fe.s.n=t),Fe.s=t,e.n=t,32&Fe.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=Fe.s,t.n=void 0,Fe.s.n=t,Fe.s=t),t}}function It(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}It.prototype.brand=eE;It.prototype.h=function(){return!0};It.prototype.S=function(e){var t=this,r=this.t;r!==e&&e.e===void 0&&(e.x=r,this.t=e,r!==void 0?r.e=e:il(function(){var a;(a=t.W)==null||a.call(t)}))};It.prototype.U=function(e){var t=this;if(this.t!==void 0){var r=e.e,a=e.x;r!==void 0&&(r.x=a,e.e=void 0),a!==void 0&&(a.e=r,e.x=void 0),e===this.t&&(this.t=a,a===void 0&&il(function(){var s;(s=t.Z)==null||s.call(t)}))}};It.prototype.subscribe=function(e){var t=this;return nd(function(){var r=t.value,a=Fe;Fe=void 0;try{e(r)}finally{Fe=a}},{name:"sub"})};It.prototype.valueOf=function(){return this.value};It.prototype.toString=function(){return this.value+""};It.prototype.toJSON=function(){return this.value};It.prototype.peek=function(){var e=Fe;Fe=void 0;try{return this.value}finally{Fe=e}};Object.defineProperty(It.prototype,"value",{get:function(){var e=wx(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(Hp>100)throw new Error("Cycle detected");this.v=e,this.i++,Ou++,mo++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Lm()}}}});function kt(e,t){return new It(e,t)}function xx(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function _x(e){for(var t=e.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function Sx(e){for(var t=e.s,r=void 0;t!==void 0;){var a=t.p;t.i===-1?(t.S.U(t),a!==void 0&&(a.n=t.n),t.n!==void 0&&(t.n.p=a)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=a}e.s=r}function ma(e,t){It.call(this,void 0),this.x=e,this.s=void 0,this.g=Ou-1,this.f=4,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}ma.prototype=new It;ma.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Ou))return!0;if(this.g=Ou,this.f|=1,this.i>0&&!xx(this))return this.f&=-2,!0;var e=Fe;try{_x(this),Fe=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return Fe=e,Sx(this),this.f&=-2,!0};ma.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}It.prototype.S.call(this,e)};ma.prototype.U=function(e){if(this.t!==void 0&&(It.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};ma.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(ma.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=wx(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function ga(e,t){return new ma(e,t)}function Tx(e){var t=e.u;if(e.u=void 0,typeof t=="function"){mo++;var r=Fe;Fe=void 0;try{t()}catch(a){throw e.f&=-2,e.f|=8,Hm(e),a}finally{Fe=r,Lm()}}}function Hm(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,Tx(e)}function tE(e){if(Fe!==this)throw new Error("Out-of-order effect");Sx(this),Fe=e,this.f&=-2,8&this.f&&Hm(this),Lm()}function Do(e,t){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=t==null?void 0:t.name}Do.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};Do.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Tx(this),_x(this),mo++;var e=Fe;return Fe=this,tE.bind(this,e)};Do.prototype.N=function(){2&this.f||(this.f|=2,this.o=Gs,Gs=this)};Do.prototype.d=function(){this.f|=8,1&this.f||Hm(this)};Do.prototype.dispose=function(){this.d()};function nd(e,t){var r=new Do(e,t);try{r.c()}catch(s){throw r.d(),s}var a=r.d.bind(r);return a[Symbol.dispose]=a,a}var Lh;function Ro(e,t){xe[e]=t.bind(null,xe[e]||function(){})}function Nu(e){Lh&&Lh(),Lh=e&&e.S()}function kx(e){var t=this,r=e.data,a=rE(r);a.value=r;var s=Zn(function(){for(var l=t.__v;l=l.__;)if(l.__c){l.__c.__$f|=4;break}return t.__$u.c=function(){var u,d=t.__$u.S(),f=s.value;d(),ax(f)||((u=t.base)==null?void 0:u.nodeType)!==3?(t.__$f|=1,t.setState({})):t.base.data=f},ga(function(){var u=a.value.value;return u===0?0:u===!0?"":u||""})},[]);return s.value}kx.displayName="_st";Object.defineProperties(It.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:kx},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});Ro("__b",function(e,t){if(typeof t.type=="string"){var r,a=t.props;for(var s in a)if(s!=="children"){var l=a[s];l instanceof It&&(r||(t.__np=r={}),r[s]=l,a[s]=l.peek())}}e(t)});Ro("__r",function(e,t){Nu();var r,a=t.__c;a&&(a.__$f&=-2,(r=a.__$u)===void 0&&(a.__$u=r=(function(s){var l;return nd(function(){l=this}),l.c=function(){a.__$f|=1,a.setState({})},l})())),Nu(r),e(t)});Ro("__e",function(e,t,r,a){Nu(),e(t,r,a)});Ro("diffed",function(e,t){Nu();var r;if(typeof t.type=="string"&&(r=t.__e)){var a=t.__np,s=t.props;if(a){var l=r.U;if(l)for(var u in l){var d=l[u];d!==void 0&&!(u in a)&&(d.d(),l[u]=void 0)}else r.U=l={};for(var f in a){var h=l[f],v=a[f];h===void 0?(h=nE(r,f,v,s),l[f]=h):h.o(v,s)}}}e(t)});function nE(e,t,r,a){var s=t in e&&e.ownerSVGElement===void 0,l=kt(r);return{o:function(u,d){l.value=u,a=d},d:nd(function(){var u=l.value.value;a[t]!==u&&(a[t]=u,s?e[t]=u:u?e.setAttribute(t,u):e.removeAttribute(t))})}}Ro("unmount",function(e,t){if(typeof t.type=="string"){var r=t.__e;if(r){var a=r.U;if(a){r.U=void 0;for(var s in a){var l=a[s];l&&l.d()}}}}else{var u=t.__c;if(u){var d=u.__$u;d&&(u.__$u=void 0,d.d())}}e(t)});Ro("__h",function(e,t,r,a){(a<3||a===9)&&(t.__$f|=2),e(t,r,a)});In.prototype.shouldComponentUpdate=function(e,t){var r=this.__$u,a=r&&r.s!==void 0;for(var s in t)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(a||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(a||4&this.__$f)||3&this.__$f)return!0;for(var l in e)if(l!=="__source"&&e[l]!==this.props[l])return!0;for(var u in this.props)if(!(u in e))return!0;return!1};function rE(e){return Zn(function(){return kt(e)},[])}function al(e){var t=fe(e);t.current=e,ke(function(){return nd(function(){return t.current()})},[])}function Ex(e,t){for(var r in t)e[r]=t[r];return e}function Ip(e,t){for(var r in e)if(r!=="__source"&&!(r in t))return!0;for(var a in t)if(a!=="__source"&&e[a]!==t[a])return!0;return!1}function iE(e,t){var r=t(),a=Ce({t:{__:r,u:t}}),s=a[0].t,l=a[1];return jm(function(){s.__=r,s.u=t,Hh(s)&&l({t:s})},[e,r,t]),ke(function(){return Hh(s)&&l({t:s}),e(function(){Hh(s)&&l({t:s})})},[e]),r}function Hh(e){var t,r,a=e.u,s=e.__;try{var l=a();return!((t=s)===(r=l)&&(t!==0||1/t==1/r)||t!=t&&r!=r)}catch{return!0}}function Yb(e,t){this.props=e,this.context=t}function rd(e,t){function r(s){var l=this.props.ref,u=l==s.ref;return!u&&l&&(l.call?l(null):l.current=null),t?!t(this.props,s)||!u:Ip(this.props,s)}function a(s){return this.shouldComponentUpdate=r,ua(e,s)}return a.displayName="Memo("+(e.displayName||e.name)+")",a.prototype.isReactComponent=!0,a.__f=!0,a.type=e,a}(Yb.prototype=new In).isPureReactComponent=!0,Yb.prototype.shouldComponentUpdate=function(e,t){return Ip(this.props,e)||Ip(this.state,t)};var Pb=xe.__b;xe.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Pb&&Pb(e)};var aE=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Im(e){function t(r){var a=Ex({},r);return delete a.ref,e(a,r.ref||null)}return t.$$typeof=aE,t.render=e,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var oE=xe.__e;xe.__e=function(e,t,r,a){if(e.then){for(var s,l=t;l=l.__;)if((s=l.__c)&&s.__c)return t.__e==null&&(t.__e=r.__e,t.__k=r.__k),s.__c(e,t)}oE(e,t,r,a)};var Xb=xe.unmount;function Cx(e,t,r){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(a){typeof a.__c=="function"&&a.__c()}),e.__c.__H=null),(e=Ex({},e)).__c!=null&&(e.__c.__P===r&&(e.__c.__P=t),e.__c.__e=!0,e.__c=null),e.__k=e.__k&&e.__k.map(function(a){return Cx(a,t,r)})),e}function Ax(e,t,r){return e&&r&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(a){return Ax(a,t,r)}),e.__c&&e.__c.__P===t&&(e.__e&&r.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=r)),e}function Ih(){this.__u=0,this.o=null,this.__b=null}function Mx(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function Gc(){this.i=null,this.l=null}xe.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Xb&&Xb(e)},(Ih.prototype=new In).__c=function(e,t){var r=t.__c,a=this;a.o==null&&(a.o=[]),a.o.push(r);var s=Mx(a.__v),l=!1,u=function(){l||(l=!0,r.__R=null,s?s(d):d())};r.__R=u;var d=function(){if(!--a.__u){if(a.state.__a){var f=a.state.__a;a.__v.__k[0]=Ax(f,f.__c.__P,f.__c.__O)}var h;for(a.setState({__a:a.__b=null});h=a.o.pop();)h.forceUpdate()}};a.__u++||32&t.__u||a.setState({__a:a.__b=a.__v.__k[0]}),e.then(u,u)},Ih.prototype.componentWillUnmount=function(){this.o=[]},Ih.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),a=this.__v.__k[0].__c;this.__v.__k[0]=Cx(this.__b,r,a.__O=a.__P)}this.__b=null}var s=t.__a&&ua(je,null,e.fallback);return s&&(s.__u&=-33),[ua(je,null,t.__a?null:e.children),s]};var Gb=function(e,t,r){if(++r[1]===r[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(r=e.i;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.i=r=r[2]}};function sE(e){return this.getChildContext=function(){return e.context},e.children}function lE(e){var t=this,r=e.h;if(t.componentWillUnmount=function(){Xs(null,t.v),t.v=null,t.h=null},t.h&&t.h!==r&&t.componentWillUnmount(),!t.v){for(var a=t.__v;a!==null&&!a.__m&&a.__!==null;)a=a.__;t.h=r,t.v={nodeType:1,parentNode:r,childNodes:[],__k:{__m:a.__m},contains:function(){return!0},insertBefore:function(s,l){this.childNodes.push(s),t.h.insertBefore(s,l)},removeChild:function(s){this.childNodes.splice(this.childNodes.indexOf(s)>>>1,1),t.h.removeChild(s)}}}Xs(ua(sE,{context:t.context},e.__v),t.v)}function cE(e,t){var r=ua(lE,{__v:e,h:t});return r.containerInfo=t,r}(Gc.prototype=new In).__a=function(e){var t=this,r=Mx(t.__v),a=t.l.get(e);return a[0]++,function(s){var l=function(){t.props.revealOrder?(a.push(s),Gb(t,e,a)):s()};r?r(l):l()}},Gc.prototype.render=function(e){this.i=null,this.l=new Map;var t=Mu(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var r=t.length;r--;)this.l.set(t[r],this.i=[1,0,this.i]);return e.children},Gc.prototype.componentDidUpdate=Gc.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,r){Gb(e,r,t)})};var uE=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,dE=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,fE=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,hE=/[A-Z0-9]/g,pE=typeof document<"u",mE=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};In.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(In.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Vb=xe.event;function gE(){}function vE(){return this.cancelBubble}function yE(){return this.defaultPrevented}xe.event=function(e){return Vb&&(e=Vb(e)),e.persist=gE,e.isPropagationStopped=vE,e.isDefaultPrevented=yE,e.nativeEvent=e};var bE={enumerable:!1,configurable:!0,get:function(){return this.class}},Qb=xe.vnode;xe.vnode=function(e){typeof e.type=="string"&&(function(t){var r=t.props,a=t.type,s={},l=a.indexOf("-")===-1;for(var u in r){var d=r[u];if(!(u==="value"&&"defaultValue"in r&&d==null||pE&&u==="children"&&a==="noscript"||u==="class"||u==="className")){var f=u.toLowerCase();u==="defaultValue"&&"value"in r&&r.value==null?u="value":u==="download"&&d===!0?d="":f==="translate"&&d==="no"?d=!1:f[0]==="o"&&f[1]==="n"?f==="ondoubleclick"?u="ondblclick":f!=="onchange"||a!=="input"&&a!=="textarea"||mE(r.type)?f==="onfocus"?u="onfocusin":f==="onblur"?u="onfocusout":fE.test(u)&&(u=f):f=u="oninput":l&&dE.test(u)?u=u.replace(hE,"-$&").toLowerCase():d===null&&(d=void 0),f==="oninput"&&s[u=f]&&(u="oninputCapture"),s[u]=d}}a=="select"&&s.multiple&&Array.isArray(s.value)&&(s.value=Mu(r.children).forEach(function(h){h.props.selected=s.value.indexOf(h.props.value)!=-1})),a=="select"&&s.defaultValue!=null&&(s.value=Mu(r.children).forEach(function(h){h.props.selected=s.multiple?s.defaultValue.indexOf(h.props.value)!=-1:s.defaultValue==h.props.value})),r.class&&!r.className?(s.class=r.class,Object.defineProperty(s,"className",bE)):(r.className&&!r.class||r.class&&r.className)&&(s.class=s.className=r.className),t.props=s})(e),e.$$typeof=uE,Qb&&Qb(e)};var Kb=xe.__r;xe.__r=function(e){Kb&&Kb(e),e.__c};var Wb=xe.diffed;xe.diffed=function(e){Wb&&Wb(e);var t=e.props,r=e.__e;r!=null&&e.type==="textarea"&&"value"in t&&t.value!==r.value&&(r.value=t.value==null?"":t.value)};var wE=0;function y(e,t,r,a,s,l){t||(t={});var u,d,f=t;if("ref"in f)for(d in f={},t)d=="ref"?u=t[d]:f[d]=t[d];var h={type:e,props:f,key:r,ref:u,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--wE,__i:-1,__u:0,__source:s,__self:l};if(typeof e=="function"&&(u=e.defaultProps))for(d in u)f[d]===void 0&&(f[d]=u[d]);return xe.vnode&&xe.vnode(h),h}var Bh={exports:{}},be={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zb;function xE(){if(Zb)return be;Zb=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),b=Symbol.iterator;function w(O){return O===null||typeof O!="object"?null:(O=b&&O[b]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,k={};function _(O,F,W){this.props=O,this.context=F,this.refs=k,this.updater=W||S}_.prototype.isReactComponent={},_.prototype.setState=function(O,F){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,F,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function E(){}E.prototype=_.prototype;function M(O,F,W){this.props=O,this.context=F,this.refs=k,this.updater=W||S}var D=M.prototype=new E;D.constructor=M,T(D,_.prototype),D.isPureReactComponent=!0;var j=Array.isArray;function Y(){}var B={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function ne(O,F,W){var te=W.ref;return{$$typeof:e,type:O,key:F,ref:te!==void 0?te:null,props:W}}function pe(O,F){return ne(O.type,F,O.props)}function de(O){return typeof O=="object"&&O!==null&&O.$$typeof===e}function ae(O){var F={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(W){return F[W]})}var De=/\/+/g;function Ie(O,F){return typeof O=="object"&&O!==null&&O.key!=null?ae(""+O.key):F.toString(36)}function qe(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(Y,Y):(O.status="pending",O.then(function(F){O.status==="pending"&&(O.status="fulfilled",O.value=F)},function(F){O.status==="pending"&&(O.status="rejected",O.reason=F)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function A(O,F,W,te,re){var le=typeof O;(le==="undefined"||le==="boolean")&&(O=null);var ce=!1;if(O===null)ce=!0;else switch(le){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(O.$$typeof){case e:case t:ce=!0;break;case v:return ce=O._init,A(ce(O._payload),F,W,te,re)}}if(ce)return re=re(O),ce=te===""?"."+Ie(O,0):te,j(re)?(W="",ce!=null&&(W=ce.replace(De,"$&/")+"/"),A(re,F,W,"",function(ot){return ot})):re!=null&&(de(re)&&(re=pe(re,W+(re.key==null||O&&O.key===re.key?"":(""+re.key).replace(De,"$&/")+"/")+ce)),F.push(re)),1;ce=0;var ve=te===""?".":te+":";if(j(O))for(var ge=0;ge<O.length;ge++)te=O[ge],le=ve+Ie(te,ge),ce+=A(te,F,W,le,re);else if(ge=w(O),typeof ge=="function")for(O=ge.call(O),ge=0;!(te=O.next()).done;)te=te.value,le=ve+Ie(te,ge++),ce+=A(te,F,W,le,re);else if(le==="object"){if(typeof O.then=="function")return A(qe(O),F,W,te,re);throw F=String(O),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.")}return ce}function z(O,F,W){if(O==null)return O;var te=[],re=0;return A(O,te,"","",function(le){return F.call(W,le,re++)}),te}function $(O){if(O._status===-1){var F=O._result;F=F(),F.then(function(W){(O._status===0||O._status===-1)&&(O._status=1,O._result=W)},function(W){(O._status===0||O._status===-1)&&(O._status=2,O._result=W)}),O._status===-1&&(O._status=0,O._result=F)}if(O._status===1)return O._result.default;throw O._result}var V=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var F=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(F))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},J={map:z,forEach:function(O,F,W){z(O,function(){F.apply(this,arguments)},W)},count:function(O){var F=0;return z(O,function(){F++}),F},toArray:function(O){return z(O,function(F){return F})||[]},only:function(O){if(!de(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return be.Activity=g,be.Children=J,be.Component=_,be.Fragment=r,be.Profiler=s,be.PureComponent=M,be.StrictMode=a,be.Suspense=f,be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,be.__COMPILER_RUNTIME={__proto__:null,c:function(O){return B.H.useMemoCache(O)}},be.cache=function(O){return function(){return O.apply(null,arguments)}},be.cacheSignal=function(){return null},be.cloneElement=function(O,F,W){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var te=T({},O.props),re=O.key;if(F!=null)for(le in F.key!==void 0&&(re=""+F.key),F)!ee.call(F,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&F.ref===void 0||(te[le]=F[le]);var le=arguments.length-2;if(le===1)te.children=W;else if(1<le){for(var ce=Array(le),ve=0;ve<le;ve++)ce[ve]=arguments[ve+2];te.children=ce}return ne(O.type,re,te)},be.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:l,_context:O},O},be.createElement=function(O,F,W){var te,re={},le=null;if(F!=null)for(te in F.key!==void 0&&(le=""+F.key),F)ee.call(F,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(re[te]=F[te]);var ce=arguments.length-2;if(ce===1)re.children=W;else if(1<ce){for(var ve=Array(ce),ge=0;ge<ce;ge++)ve[ge]=arguments[ge+2];re.children=ve}if(O&&O.defaultProps)for(te in ce=O.defaultProps,ce)re[te]===void 0&&(re[te]=ce[te]);return ne(O,le,re)},be.createRef=function(){return{current:null}},be.forwardRef=function(O){return{$$typeof:d,render:O}},be.isValidElement=de,be.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:$}},be.memo=function(O,F){return{$$typeof:h,type:O,compare:F===void 0?null:F}},be.startTransition=function(O){var F=B.T,W={};B.T=W;try{var te=O(),re=B.S;re!==null&&re(W,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(Y,V)}catch(le){V(le)}finally{F!==null&&W.types!==null&&(F.types=W.types),B.T=F}},be.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},be.use=function(O){return B.H.use(O)},be.useActionState=function(O,F,W){return B.H.useActionState(O,F,W)},be.useCallback=function(O,F){return B.H.useCallback(O,F)},be.useContext=function(O){return B.H.useContext(O)},be.useDebugValue=function(){},be.useDeferredValue=function(O,F){return B.H.useDeferredValue(O,F)},be.useEffect=function(O,F){return B.H.useEffect(O,F)},be.useEffectEvent=function(O){return B.H.useEffectEvent(O)},be.useId=function(){return B.H.useId()},be.useImperativeHandle=function(O,F,W){return B.H.useImperativeHandle(O,F,W)},be.useInsertionEffect=function(O,F){return B.H.useInsertionEffect(O,F)},be.useLayoutEffect=function(O,F){return B.H.useLayoutEffect(O,F)},be.useMemo=function(O,F){return B.H.useMemo(O,F)},be.useOptimistic=function(O,F){return B.H.useOptimistic(O,F)},be.useReducer=function(O,F,W){return B.H.useReducer(O,F,W)},be.useRef=function(O){return B.H.useRef(O)},be.useState=function(O){return B.H.useState(O)},be.useSyncExternalStore=function(O,F,W){return B.H.useSyncExternalStore(O,F,W)},be.useTransition=function(){return B.H.useTransition()},be.version="19.2.0",be}var Jb;function xl(){return Jb||(Jb=1,Bh.exports=xE()),Bh.exports}var Ee=xl();const cr=Em(Ee),_E=ck({__proto__:null,default:cr},[Ee]);Array.prototype.toSorted||Object.defineProperty(Array.prototype,"toSorted",{value:function(e){return[...this].sort(e)},writable:!0,configurable:!0});function SE(e,t){return t-e}function TE(e){let t=e[0].name;const r=e.length,a=Math.min(4,r);for(let s=1;s<a;s++)t+=`, ${e[s].name}`;return t}function kE(e){let t=e[0].time;for(let r=1,a=e.length;r<a;r++)t+=e[r].time;return t}function EE(e){for(let t=0,r=e.length;t<r;t++)if(e[t].forget)return!0;return!1}var CE=e=>{let t="";const r=new Map;for(const u of e){const{forget:d,time:f,aggregatedCount:h,name:v}=u;r.has(h)||r.set(h,[]);const g=r.get(h);g&&g.push({name:v,forget:d,time:f??0})}const a=Array.from(r.keys()).sort(SE),s=[];let l=0;for(const u of a){const d=r.get(u);if(!d)continue;let f=TE(d);const h=kE(d),v=EE(d);l+=h,d.length>4&&(f+="…"),u>1&&(f+=` × ${u}`),v&&(f=`✨${f}`),s.push(f)}return t=s.join(", "),t.length?(t.length>40&&(t=`${t.slice(0,40)}…`),l>=.01&&(t+=` (${Number(l.toFixed(2))}ms)`),t):null};function Ci(e,t){return e===t||e!==e&&t!==t}var Bm=e=>{const t=e.createOscillator(),r=e.createGain();t.connect(r),r.connect(e.destination);const a={type:"sine",freq:[392,600],duration:.3,gain:.12},s=a.freq,l=a.duration/s.length;s.forEach((u,d)=>{t.frequency.setValueAtTime(u,e.currentTime+d*l)}),t.type=a.type,r.gain.setValueAtTime(a.gain,e.currentTime),r.gain.setTargetAtTime(0,e.currentTime+a.duration*.7,.05),t.start(),t.stop(e.currentTime+a.duration)},AE=e=>new Promise(t=>{const r=new Map,a=new IntersectionObserver(s=>{for(const l of s){const u=l.target,d=l.boundingClientRect;r.set(u,d)}a.disconnect(),t(r)});for(const s of e)a.observe(s)}),ME={mount:1,update:2,unmount:4},dt=Im(({size:e=15,name:t,fill:r="currentColor",stroke:a="currentColor",className:s,externalURL:l="",style:u},d)=>{const f=Array.isArray(e)?e[0]:e,h=Array.isArray(e)?e[1]||e[0]:e,v=`${l}#${t}`;return y("svg",{ref:d,width:`${f}px`,height:`${h}px`,fill:r,stroke:a,className:s,style:{...u,minWidth:`${f}px`,maxWidth:`${f}px`,minHeight:`${h}px`,maxHeight:`${h}px`},children:[y("title",{children:t}),y("use",{href:v})]})}),we=24,Tt={width:550,height:350,initialHeight:400},Qn=240,Lr="react-scan-widget-settings-v2",mu="react-scan-widget-collapsed-v1",ro="react-scan-widget-last-view-v1",fr=typeof window<"u";function Ox(e){var t,r,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=Ox(e[t]))&&(a&&(a+=" "),a+=r)}else for(r in e)e[r]&&(a&&(a+=" "),a+=r);return a}function OE(){for(var e,t,r=0,a="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=Ox(e))&&(a&&(a+=" "),a+=t);return a}var qm="-",NE=e=>{const t=DE(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:a}=e;return{getClassGroupId:u=>{const d=u.split(qm);return d[0]===""&&d.length!==1&&d.shift(),Nx(d,t)||zE(u)},getConflictingClassGroupIds:(u,d)=>{const f=r[u]||[];return d&&a[u]?[...f,...a[u]]:f}}},Nx=(e,t)=>{var u;if(e.length===0)return t.classGroupId;const r=e[0],a=t.nextPart.get(r),s=a?Nx(e.slice(1),a):void 0;if(s)return s;if(t.validators.length===0)return;const l=e.join(qm);return(u=t.validators.find(({validator:d})=>d(l)))==null?void 0:u.classGroupId},ew=/^\[(.+)\]$/,zE=e=>{if(ew.test(e)){const t=ew.exec(e)[1],r=t==null?void 0:t.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},DE=e=>{const{theme:t,prefix:r}=e,a={nextPart:new Map,validators:[]};return jE(Object.entries(e.classGroups),r).forEach(([l,u])=>{Bp(u,a,l,t)}),a},Bp=(e,t,r,a)=>{e.forEach(s=>{if(typeof s=="string"){const l=s===""?t:tw(t,s);l.classGroupId=r;return}if(typeof s=="function"){if(RE(s)){Bp(s(a),t,r,a);return}t.validators.push({validator:s,classGroupId:r});return}Object.entries(s).forEach(([l,u])=>{Bp(u,tw(t,l),r,a)})})},tw=(e,t)=>{let r=e;return t.split(qm).forEach(a=>{r.nextPart.has(a)||r.nextPart.set(a,{nextPart:new Map,validators:[]}),r=r.nextPart.get(a)}),r},RE=e=>e.isThemeGetter,jE=(e,t)=>t?e.map(([r,a])=>{const s=a.map(l=>typeof l=="string"?t+l:typeof l=="object"?Object.fromEntries(Object.entries(l).map(([u,d])=>[t+u,d])):l);return[r,s]}):e,UE=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,a=new Map;const s=(l,u)=>{r.set(l,u),t++,t>e&&(t=0,a=r,r=new Map)};return{get(l){let u=r.get(l);if(u!==void 0)return u;if((u=a.get(l))!==void 0)return s(l,u),u},set(l,u){r.has(l)?r.set(l,u):s(l,u)}}},zx="!",$E=e=>{const{separator:t,experimentalParseClassName:r}=e,a=t.length===1,s=t[0],l=t.length,u=d=>{const f=[];let h=0,v=0,g;for(let k=0;k<d.length;k++){let _=d[k];if(h===0){if(_===s&&(a||d.slice(k,k+l)===t)){f.push(d.slice(v,k)),v=k+l;continue}if(_==="/"){g=k;continue}}_==="["?h++:_==="]"&&h--}const b=f.length===0?d:d.substring(v),w=b.startsWith(zx),S=w?b.substring(1):b,T=g&&g>v?g-v:void 0;return{modifiers:f,hasImportantModifier:w,baseClassName:S,maybePostfixModifierPosition:T}};return r?d=>r({className:d,parseClassName:u}):u},LE=e=>{if(e.length<=1)return e;const t=[];let r=[];return e.forEach(a=>{a[0]==="["?(t.push(...r.sort(),a),r=[]):r.push(a)}),t.push(...r.sort()),t},HE=e=>({cache:UE(e.cacheSize),parseClassName:$E(e),...NE(e)}),IE=/\s+/,BE=(e,t)=>{const{parseClassName:r,getClassGroupId:a,getConflictingClassGroupIds:s}=t,l=[],u=e.trim().split(IE);let d="";for(let f=u.length-1;f>=0;f-=1){const h=u[f],{modifiers:v,hasImportantModifier:g,baseClassName:b,maybePostfixModifierPosition:w}=r(h);let S=!!w,T=a(S?b.substring(0,w):b);if(!T){if(!S){d=h+(d.length>0?" "+d:d);continue}if(T=a(b),!T){d=h+(d.length>0?" "+d:d);continue}S=!1}const k=LE(v).join(":"),_=g?k+zx:k,E=_+T;if(l.includes(E))continue;l.push(E);const M=s(T,S);for(let D=0;D<M.length;++D){const j=M[D];l.push(_+j)}d=h+(d.length>0?" "+d:d)}return d};function qE(){let e=0,t,r,a="";for(;e<arguments.length;)(t=arguments[e++])&&(r=Dx(t))&&(a&&(a+=" "),a+=r);return a}var Dx=e=>{if(typeof e=="string")return e;let t,r="";for(let a=0;a<e.length;a++)e[a]&&(t=Dx(e[a]))&&(r&&(r+=" "),r+=t);return r};function FE(e,...t){let r,a,s,l=u;function u(f){const h=t.reduce((v,g)=>g(v),e());return r=HE(h),a=r.cache.get,s=r.cache.set,l=d,d(f)}function d(f){const h=a(f);if(h)return h;const v=BE(f,r);return s(f,v),v}return function(){return l(qE.apply(null,arguments))}}var nt=e=>{const t=r=>r[e]||[];return t.isThemeGetter=!0,t},Rx=/^\[(?:([a-z-]+):)?(.+)\]$/i,YE=/^\d+\/\d+$/,PE=new Set(["px","full","screen"]),XE=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,GE=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,VE=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,QE=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,KE=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,zr=e=>go(e)||PE.has(e)||YE.test(e),wi=e=>jo(e,"length",iC),go=e=>!!e&&!Number.isNaN(Number(e)),qh=e=>jo(e,"number",go),Ds=e=>!!e&&Number.isInteger(Number(e)),WE=e=>e.endsWith("%")&&go(e.slice(0,-1)),Te=e=>Rx.test(e),xi=e=>XE.test(e),ZE=new Set(["length","size","percentage"]),JE=e=>jo(e,ZE,jx),eC=e=>jo(e,"position",jx),tC=new Set(["image","url"]),nC=e=>jo(e,tC,oC),rC=e=>jo(e,"",aC),Rs=()=>!0,jo=(e,t,r)=>{const a=Rx.exec(e);return a?a[1]?typeof t=="string"?a[1]===t:t.has(a[1]):r(a[2]):!1},iC=e=>GE.test(e)&&!VE.test(e),jx=()=>!1,aC=e=>QE.test(e),oC=e=>KE.test(e),sC=()=>{const e=nt("colors"),t=nt("spacing"),r=nt("blur"),a=nt("brightness"),s=nt("borderColor"),l=nt("borderRadius"),u=nt("borderSpacing"),d=nt("borderWidth"),f=nt("contrast"),h=nt("grayscale"),v=nt("hueRotate"),g=nt("invert"),b=nt("gap"),w=nt("gradientColorStops"),S=nt("gradientColorStopPositions"),T=nt("inset"),k=nt("margin"),_=nt("opacity"),E=nt("padding"),M=nt("saturate"),D=nt("scale"),j=nt("sepia"),Y=nt("skew"),B=nt("space"),ee=nt("translate"),ne=()=>["auto","contain","none"],pe=()=>["auto","hidden","clip","visible","scroll"],de=()=>["auto",Te,t],ae=()=>[Te,t],De=()=>["",zr,wi],Ie=()=>["auto",go,Te],qe=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],A=()=>["solid","dashed","dotted","double","none"],z=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],$=()=>["start","end","center","between","around","evenly","stretch"],V=()=>["","0",Te],J=()=>["auto","avoid","all","avoid-page","page","left","right","column"],O=()=>[go,Te];return{cacheSize:500,separator:":",theme:{colors:[Rs],spacing:[zr,wi],blur:["none","",xi,Te],brightness:O(),borderColor:[e],borderRadius:["none","","full",xi,Te],borderSpacing:ae(),borderWidth:De(),contrast:O(),grayscale:V(),hueRotate:O(),invert:V(),gap:ae(),gradientColorStops:[e],gradientColorStopPositions:[WE,wi],inset:de(),margin:de(),opacity:O(),padding:ae(),saturate:O(),scale:O(),sepia:V(),skew:O(),space:ae(),translate:ae()},classGroups:{aspect:[{aspect:["auto","square","video",Te]}],container:["container"],columns:[{columns:[xi]}],"break-after":[{"break-after":J()}],"break-before":[{"break-before":J()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...qe(),Te]}],overflow:[{overflow:pe()}],"overflow-x":[{"overflow-x":pe()}],"overflow-y":[{"overflow-y":pe()}],overscroll:[{overscroll:ne()}],"overscroll-x":[{"overscroll-x":ne()}],"overscroll-y":[{"overscroll-y":ne()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[T]}],"inset-x":[{"inset-x":[T]}],"inset-y":[{"inset-y":[T]}],start:[{start:[T]}],end:[{end:[T]}],top:[{top:[T]}],right:[{right:[T]}],bottom:[{bottom:[T]}],left:[{left:[T]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Ds,Te]}],basis:[{basis:de()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Te]}],grow:[{grow:V()}],shrink:[{shrink:V()}],order:[{order:["first","last","none",Ds,Te]}],"grid-cols":[{"grid-cols":[Rs]}],"col-start-end":[{col:["auto",{span:["full",Ds,Te]},Te]}],"col-start":[{"col-start":Ie()}],"col-end":[{"col-end":Ie()}],"grid-rows":[{"grid-rows":[Rs]}],"row-start-end":[{row:["auto",{span:[Ds,Te]},Te]}],"row-start":[{"row-start":Ie()}],"row-end":[{"row-end":Ie()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Te]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Te]}],gap:[{gap:[b]}],"gap-x":[{"gap-x":[b]}],"gap-y":[{"gap-y":[b]}],"justify-content":[{justify:["normal",...$()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...$(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...$(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[E]}],px:[{px:[E]}],py:[{py:[E]}],ps:[{ps:[E]}],pe:[{pe:[E]}],pt:[{pt:[E]}],pr:[{pr:[E]}],pb:[{pb:[E]}],pl:[{pl:[E]}],m:[{m:[k]}],mx:[{mx:[k]}],my:[{my:[k]}],ms:[{ms:[k]}],me:[{me:[k]}],mt:[{mt:[k]}],mr:[{mr:[k]}],mb:[{mb:[k]}],ml:[{ml:[k]}],"space-x":[{"space-x":[B]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[B]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Te,t]}],"min-w":[{"min-w":[Te,t,"min","max","fit"]}],"max-w":[{"max-w":[Te,t,"none","full","min","max","fit","prose",{screen:[xi]},xi]}],h:[{h:[Te,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Te,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Te,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Te,t,"auto","min","max","fit"]}],"font-size":[{text:["base",xi,wi]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",qh]}],"font-family":[{font:[Rs]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Te]}],"line-clamp":[{"line-clamp":["none",go,qh]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",zr,Te]}],"list-image":[{"list-image":["none",Te]}],"list-style-type":[{list:["none","disc","decimal",Te]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[_]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[_]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...A(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",zr,wi]}],"underline-offset":[{"underline-offset":["auto",zr,Te]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:ae()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Te]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Te]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[_]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...qe(),eC]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",JE]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},nC]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[S]}],"gradient-via-pos":[{via:[S]}],"gradient-to-pos":[{to:[S]}],"gradient-from":[{from:[w]}],"gradient-via":[{via:[w]}],"gradient-to":[{to:[w]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[d]}],"border-w-x":[{"border-x":[d]}],"border-w-y":[{"border-y":[d]}],"border-w-s":[{"border-s":[d]}],"border-w-e":[{"border-e":[d]}],"border-w-t":[{"border-t":[d]}],"border-w-r":[{"border-r":[d]}],"border-w-b":[{"border-b":[d]}],"border-w-l":[{"border-l":[d]}],"border-opacity":[{"border-opacity":[_]}],"border-style":[{border:[...A(),"hidden"]}],"divide-x":[{"divide-x":[d]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[d]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[_]}],"divide-style":[{divide:A()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...A()]}],"outline-offset":[{"outline-offset":[zr,Te]}],"outline-w":[{outline:[zr,wi]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:De()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[_]}],"ring-offset-w":[{"ring-offset":[zr,wi]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",xi,rC]}],"shadow-color":[{shadow:[Rs]}],opacity:[{opacity:[_]}],"mix-blend":[{"mix-blend":[...z(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":z()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[a]}],contrast:[{contrast:[f]}],"drop-shadow":[{"drop-shadow":["","none",xi,Te]}],grayscale:[{grayscale:[h]}],"hue-rotate":[{"hue-rotate":[v]}],invert:[{invert:[g]}],saturate:[{saturate:[M]}],sepia:[{sepia:[j]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[a]}],"backdrop-contrast":[{"backdrop-contrast":[f]}],"backdrop-grayscale":[{"backdrop-grayscale":[h]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[v]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[_]}],"backdrop-saturate":[{"backdrop-saturate":[M]}],"backdrop-sepia":[{"backdrop-sepia":[j]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[u]}],"border-spacing-x":[{"border-spacing-x":[u]}],"border-spacing-y":[{"border-spacing-y":[u]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Te]}],duration:[{duration:O()}],ease:[{ease:["linear","in","out","in-out",Te]}],delay:[{delay:O()}],animate:[{animate:["none","spin","ping","pulse","bounce",Te]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[D]}],"scale-x":[{"scale-x":[D]}],"scale-y":[{"scale-y":[D]}],rotate:[{rotate:[Ds,Te]}],"translate-x":[{"translate-x":[ee]}],"translate-y":[{"translate-y":[ee]}],"skew-x":[{"skew-x":[Y]}],"skew-y":[{"skew-y":[Y]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Te]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Te]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":ae()}],"scroll-mx":[{"scroll-mx":ae()}],"scroll-my":[{"scroll-my":ae()}],"scroll-ms":[{"scroll-ms":ae()}],"scroll-me":[{"scroll-me":ae()}],"scroll-mt":[{"scroll-mt":ae()}],"scroll-mr":[{"scroll-mr":ae()}],"scroll-mb":[{"scroll-mb":ae()}],"scroll-ml":[{"scroll-ml":ae()}],"scroll-p":[{"scroll-p":ae()}],"scroll-px":[{"scroll-px":ae()}],"scroll-py":[{"scroll-py":ae()}],"scroll-ps":[{"scroll-ps":ae()}],"scroll-pe":[{"scroll-pe":ae()}],"scroll-pt":[{"scroll-pt":ae()}],"scroll-pr":[{"scroll-pr":ae()}],"scroll-pb":[{"scroll-pb":ae()}],"scroll-pl":[{"scroll-pl":ae()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Te]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[zr,wi,qh]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},lC=FE(sC),U=(...e)=>lC(OE(e));typeof navigator<"u"&&navigator.userAgent.includes("Firefox");var Ux=(e,t)=>{let r=0;return a=>{const s=Date.now();if(s-r>=t)return r=s,e(a)}},qr=e=>{if(!fr)return null;try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}},tn=(e,t)=>{if(fr)try{window.localStorage.setItem(e,JSON.stringify(t))}catch{}},nw=e=>{if(fr)try{window.localStorage.removeItem(e)}catch{}},cC=24,uC=12,ol=e=>{if(!e)return{name:"Unknown",wrappers:[],wrapperTypes:[]};const{tag:t,type:r,elementType:a}=e;let s=Nt(r);const l=[],u=[];if(tl(e)||t===yl||t===vl||(r==null?void 0:r.$$typeof)===Symbol.for("react.memo")||(a==null?void 0:a.$$typeof)===Symbol.for("react.memo")){const d=tl(e);u.push({type:"memo",title:d?"This component has been auto-memoized by the React Compiler.":"Memoized component that skips re-renders if props are the same",compiler:d})}if(t===cC&&u.push({type:"lazy",title:"Lazily loaded component that supports code splitting"}),t===Ju&&u.push({type:"suspense",title:"Component that can suspend while content is loading"}),t===uC&&u.push({type:"profiler",title:"Component that measures rendering performance"}),typeof s=="string"){const d=/^(\w+)\((.*)\)$/;let f=s;for(;d.test(f);){const h=f.match(d);if(h!=null&&h[1]&&(h!=null&&h[2]))l.unshift(h[1]),f=h[2];else break}s=f}return{name:s||"Unknown",wrappers:l,wrapperTypes:u}},id=kt(!1),qp=kt(null),sr={corner:"bottom-right",dimensions:{isFullWidth:!1,isFullHeight:!1,width:Tt.width,height:Tt.height,position:{x:we,y:we}},lastDimensions:{isFullWidth:!1,isFullHeight:!1,width:Tt.width,height:Tt.height,position:{x:we,y:we}},componentsTree:{width:Qn}},dC=()=>{const e=qr(Lr);return e?{corner:e.corner??sr.corner,dimensions:e.dimensions??sr.dimensions,lastDimensions:e.lastDimensions??e.dimensions??sr.lastDimensions,componentsTree:e.componentsTree??sr.componentsTree}:(tn(Lr,{corner:sr.corner,dimensions:sr.dimensions,lastDimensions:sr.lastDimensions,componentsTree:sr.componentsTree}),sr)},se=kt(dC()),Fh=()=>{if(!fr)return;const{dimensions:e}=se.value,{width:t,height:r,position:a}=e;se.value={...se.value,dimensions:{isFullWidth:t>=window.innerWidth-we*2,isFullHeight:r>=window.innerHeight-we*2,width:t,height:r,position:a}}},Ze=kt({view:"none"}),fC=qr(mu),gn=kt(fC??null);function hC(){return!1}function Fm(e){function t(r){return this.shouldComponentUpdate=hC,ua(e,r)}return t.displayName=`Memo(${e.displayName||e.name})`,t.prototype.isReactComponent=!0,t._forwarded=!0,t}var pC=e=>{const{count:t,getScrollElement:r,estimateSize:a,overscan:s=5}=e,[l,u]=Ce(0),[d,f]=Ce(0),h=fe(),v=fe(null),g=fe(null),b=a(),w=mt(_=>{var M;if(!v.current)return;const E=((M=_==null?void 0:_[0])==null?void 0:M.contentRect.height)??v.current.getBoundingClientRect().height;f(E)},[]),S=mt(()=>{g.current!==null&&cancelAnimationFrame(g.current),g.current=requestAnimationFrame(()=>{w(),g.current=null})},[w]);ke(()=>{const _=r();if(!_)return;v.current=_;const E=()=>{v.current&&u(v.current.scrollTop)};w(),h.current||(h.current=new ResizeObserver(()=>{S()})),h.current.observe(_),_.addEventListener("scroll",E,{passive:!0});const M=new MutationObserver(S);return M.observe(_,{attributes:!0,childList:!0,subtree:!0}),()=>{_.removeEventListener("scroll",E),h.current&&h.current.disconnect(),M.disconnect(),g.current!==null&&cancelAnimationFrame(g.current)}},[r,w,S]);const T=Zn(()=>{const _=Math.floor(l/b),E=Math.ceil(d/b);return{start:Math.max(0,_-s),end:Math.min(t,_+E+s)}},[l,b,d,t,s]);return{virtualItems:Zn(()=>{const _=[];for(let E=T.start;E<T.end;E++)_.push({key:E,index:E,start:E*b});return _},[T,b]),totalSize:t*b,scrollTop:l,containerHeight:d}};qr("react-scann-pinned");var mC=e=>{const t=[];let r=e;for(;r;){const a=r.elementType,s=typeof a=="function"?a.displayName||a.name:typeof a=="string"?a:"Unknown",l=r.index!==void 0?`[${r.index}]`:"";t.unshift(`${s}${l}`),r=r.return??null}return t.join("::")},Wi=new WeakMap,gC=(e,t)=>{const r=t.bind(null,e);return document.addEventListener("scroll",r,{passive:!0,capture:!0}),()=>{document.removeEventListener("scroll",r,{capture:!0})}},vC={activeFlashes:new Map,create(e){const t=e.querySelector(".react-scan-flash-overlay"),r=t instanceof HTMLElement?t:(()=>{const s=document.createElement("div");s.className="react-scan-flash-overlay",e.appendChild(s);const l=gC(e,()=>{e.querySelector(".react-scan-flash-overlay")&&this.create(e)});return this.activeFlashes.set(e,{element:e,overlay:s,scrollCleanup:l}),s})(),a=Wi.get(r);a&&(clearTimeout(a),Wi.delete(r)),requestAnimationFrame(()=>{r.style.transition="none",r.style.opacity="0.9";const s=setTimeout(()=>{r.style.transition="opacity 150ms ease-out",r.style.opacity="0";const l=setTimeout(()=>{r.parentNode&&r.parentNode.removeChild(r);const u=this.activeFlashes.get(e);u!=null&&u.scrollCleanup&&u.scrollCleanup(),this.activeFlashes.delete(e),Wi.delete(r)},150);Wi.set(r,l)},300);Wi.set(r,s)})},cleanup(e){const t=this.activeFlashes.get(e);if(t){const r=Wi.get(t.overlay);r&&(clearTimeout(r),Wi.delete(t.overlay)),t.overlay.parentNode&&t.overlay.parentNode.removeChild(t.overlay),t.scrollCleanup&&t.scrollCleanup(),this.activeFlashes.delete(e)}},cleanupAll(){for(const[,e]of this.activeFlashes)this.cleanup(e.element)}},rw=1e3,$x={updates:[],currentFiber:null,totalUpdates:0,windowOffset:0,currentIndex:0,isViewingHistory:!1,latestFiber:null,isVisible:!1,playbackSpeed:1},Pt=kt($x),Ym=kt(0),ia=[],Zi=null,yC=()=>{if(ia.length===0)return;const e=[...ia],{updates:t,totalUpdates:r,currentIndex:a,isViewingHistory:s}=Pt.value,l=[...t];let u=r;for(const{update:v}of e)l.length>=rw&&l.shift(),l.push(v),u++;const d=Math.max(0,u-rw);let f;s?a===r-1?f=l.length-1:a===0?f=0:d===0?f=a:f=a-1:f=l.length-1;const h=e[e.length-1];Pt.value={...Pt.value,latestFiber:h.fiber,updates:l,totalUpdates:u,windowOffset:d,currentIndex:f,isViewingHistory:s},ia=ia.slice(e.length)},Lx={showTimeline:()=>{Pt.value={...Pt.value,isVisible:!0}},hideTimeline:()=>{Pt.value={...Pt.value,isVisible:!1,currentIndex:Pt.value.updates.length-1}},updateFrame:(e,t)=>{Pt.value={...Pt.value,currentIndex:e,isViewingHistory:t}},updatePlaybackSpeed:e=>{Pt.value={...Pt.value,playbackSpeed:e}},addUpdate:(e,t)=>{if(ia.push({update:e,fiber:t}),!Zi){const r=()=>{yC(),Zi=null,ia.length>0&&(Zi=setTimeout(r,96))};Zi=setTimeout(r,96)}},reset:()=>{Zi&&(clearTimeout(Zi),Zi=null),ia=[],Pt.value=$x}},Bt=kt({query:"",matches:[],currentMatchIndex:-1}),Yh=kt(!1),Hx=(e,t=0,r=null)=>e.reduce((a,s,l)=>{var h,v;const u=s.element?mC(s.fiber):`${r}-${l}`,d=(h=s.fiber)!=null&&h.type?Wx(s.fiber):void 0,f={...s,depth:t,nodeId:u,parentId:r,fiber:s.fiber,renderData:d};return a.push(f),(v=s.children)!=null&&v.length&&a.push(...Hx(s.children,t+1,u)),a},[]),bC=e=>e.reduce((t,r)=>Math.max(t,r.depth),0),wC=(e,t)=>{if(t<=0)return 24;const l=Math.max(0,e-Qn);if(l<24)return 0;const d=Math.min(l*.3,t*24)/t;return Math.max(0,Math.min(24,d))},xC=["memo","forwardRef","lazy","suspense"],Ix=e=>{const t=e.match(/\[(.*?)\]/);if(!t)return null;const r=[],a=t[1].split(",");for(const s of a){const l=s.trim().toLowerCase();l&&r.push(l)}return r},_C=e=>{if(e.length===0)return!1;for(const t of e){let r=!1;for(const a of xC)if(a.toLowerCase().includes(t)){r=!0;break}if(!r)return!1}return!0},Bx=(e,t)=>{if(e.length===0)return!0;if(!t.length)return!1;for(const r of e){let a=!1;for(const s of t)if(s.type.toLowerCase().includes(r)){a=!0;break}if(!a)return!1}return!0},SC=(e,t)=>Zn(()=>{const{query:r,matches:a}=t,s=a.some(h=>h.nodeId===e.nodeId),l=Ix(r)||[],u=r?r.replace(/\[.*?\]/,"").trim():"";if(!r||!s)return{highlightedText:y("span",{className:"truncate",children:e.label}),typeHighlight:!1};let d=!0;if(l.length>0)if(!e.fiber)d=!1;else{const{wrapperTypes:h}=ol(e.fiber);d=Bx(l,h)}let f=y("span",{className:"truncate",children:e.label});if(u)try{if(u.startsWith("/")&&u.endsWith("/")){const h=u.slice(1,-1),v=new RegExp(`(${h})`,"i"),g=e.label.split(v);f=y("span",{className:"tree-node-search-highlight",children:g.map((b,w)=>v.test(b)?y("span",{className:U("regex",{start:v.test(b)&&w===0,middle:v.test(b)&&w%2===1,end:v.test(b)&&w===g.length-1,"!ml-0":w===1}),children:b},`${e.nodeId}-${b}`):b)})}else{const h=e.label.toLowerCase(),v=u.toLowerCase(),g=h.indexOf(v);g>=0&&(f=y("span",{className:"tree-node-search-highlight",children:[e.label.slice(0,g),y("span",{className:"single",children:e.label.slice(g,g+u.length)}),e.label.slice(g+u.length)]}))}}catch{}return{highlightedText:f,typeHighlight:d&&l.length>0}},[e.label,e.nodeId,e.fiber,t]),iw=e=>e>0?e<.1-Number.EPSILON?"< 0.1":e<1e3?Number(e.toFixed(1)).toString():`${(e/1e3).toFixed(1)}k`:"0",TC=({node:e,nodeIndex:t,hasChildren:r,isCollapsed:a,handleTreeNodeClick:s,handleTreeNodeToggle:l,searchValue:u})=>{var w,S;const d=fe(null),f=fe(((w=e.renderData)==null?void 0:w.renderCount)??0),{highlightedText:h,typeHighlight:v}=SC(e,u);ke(()=>{var _;const T=(_=e.renderData)==null?void 0:_.renderCount,k=d.current;!k||!f.current||!T||f.current===T||(k.classList.remove("count-flash"),k.offsetWidth,k.classList.add("count-flash"),f.current=T)},[(S=e.renderData)==null?void 0:S.renderCount]);const g=Zn(()=>{if(!e.renderData)return null;const{selfTime:T,totalTime:k,renderCount:_}=e.renderData;return _?y("span",{className:U("flex items-center gap-x-0.5 ml-1.5","text-[10px] text-neutral-400"),children:y("span",{ref:d,title:`Self time: ${iw(T)}ms
Total time: ${iw(k)}ms`,className:"count-badge",children:["×",_]})}):null},[e.renderData]),b=Zn(()=>{if(!e.fiber)return null;const{wrapperTypes:T}=ol(e.fiber),k=T[0];return y("span",{className:U("flex items-center gap-x-1","text-[10px] text-neutral-400 tracking-wide","overflow-hidden"),children:[k&&y(je,{children:[y("span",{title:k==null?void 0:k.title,className:U("rounded py-[1px] px-1","bg-neutral-700 text-neutral-300","truncate",k.type==="memo"&&"bg-[#8e61e3] text-white",v&&"bg-yellow-300 text-black"),children:k.type},k.type),k.compiler&&y("span",{className:"text-yellow-300 ml-1",children:"✨"})]}),T.length>1&&`×${T.length}`,g]})},[e.fiber,v,g]);return y("button",{type:"button",title:e.title,"data-index":t,className:U("flex items-center gap-x-1","pl-1 pr-2","w-full h-7","text-left","rounded","cursor-pointer select-none"),onClick:s,children:[y("button",{type:"button","data-index":t,onClick:l,className:U("w-6 h-6 flex items-center justify-center","text-left"),children:r&&y(dt,{name:"icon-chevron-right",size:12,className:U("transition-transform",!a&&"rotate-90")})}),h,b]})},kC=()=>{const e=fe(null),t=fe(null),r=fe(null),a=fe(null),s=fe(null),l=fe(0),u=fe(!1),d=fe(!1),f=fe(null),[h,v]=Ce([]),[g,b]=Ce(new Set),[w,S]=Ce(void 0),[T,k]=Ce(Bt.value),_=Zn(()=>{const A=[],z=h,$=new Map(z.map(V=>[V.nodeId,V]));for(const V of z){let J=!0,O=V;for(;O.parentId;){const F=$.get(O.parentId);if(!F)break;if(g.has(F.nodeId)){J=!1;break}O=F}J&&A.push(V)}return A},[g,h]),E=28,{virtualItems:M,totalSize:D}=pC({count:_.length,getScrollElement:()=>e.current,estimateSize:()=>E,overscan:5}),j=mt(A=>{var V;u.current=!0,(V=a.current)==null||V.blur(),Yh.value=!0;const{parentCompositeFiber:z}=aa(A);if(!z)return;ie.inspectState.value={kind:"focused",focusedDomElement:A,fiber:z};const $=_.findIndex(J=>J.element===A);if($!==-1){S($);const J=$*E,O=e.current;if(O){const F=O.clientHeight,W=O.scrollTop;(J<W||J+E>W+F)&&O.scrollTo({top:Math.max(0,J-F/2),behavior:"instant"})}}},[_]),Y=mt(A=>{const z=A.currentTarget,$=Number(z.dataset.index);if(Number.isNaN($))return;const V=_[$].element;V&&j(V)},[_,j]),B=mt(A=>{b(z=>{const $=new Set(z);return $.has(A)?$.delete(A):$.add(A),$})},[]),ee=mt(A=>{A.stopPropagation();const z=A.target,$=Number(z.dataset.index);if(Number.isNaN($))return;const V=_[$].nodeId;B(V)},[_,B]),ne=mt(A=>{var F,W,te,re,le;(F=r.current)==null||F.classList.remove("!border-red-500");const z=[];if(!A){Bt.value={query:A,matches:z,currentMatchIndex:-1};return}if(A.includes("[")&&!A.includes("]")&&A.length>A.indexOf("[")+1){(W=r.current)==null||W.classList.add("!border-red-500");return}const $=Ix(A)||[];if(A.includes("[")&&!_C($)){(te=r.current)==null||te.classList.add("!border-red-500");return}const V=A.replace(/\[.*?\]/,"").trim(),J=/^\/.*\/$/.test(V);let O=ce=>!1;if(V.startsWith("/")&&!J&&V.length>1){(re=r.current)==null||re.classList.add("!border-red-500");return}if(J)try{const ce=V.slice(1,-1),ve=new RegExp(ce,"i");O=ge=>ve.test(ge)}catch{(le=r.current)==null||le.classList.add("!border-red-500");return}else if(V){const ce=V.toLowerCase();O=ve=>ve.toLowerCase().includes(ce)}for(const ce of h){let ve=!0;if(V&&(ve=O(ce.label)),ve&&$.length>0)if(!ce.fiber)ve=!1;else{const{wrapperTypes:ge}=ol(ce.fiber);ve=Bx($,ge)}ve&&z.push(ce)}if(Bt.value={query:A,matches:z,currentMatchIndex:z.length>0?0:-1},z.length>0){const ce=z[0],ve=_.findIndex(ge=>ge.nodeId===ce.nodeId);if(ve!==-1){const ge=ve*E,ot=e.current;if(ot){const qn=ot.clientHeight;ot.scrollTo({top:Math.max(0,ge-qn/2),behavior:"instant"})}}}},[h,_]),pe=mt(A=>{const z=A.currentTarget;z&&ne(z.value)},[ne]),de=mt(A=>{const{matches:z,currentMatchIndex:$}=Bt.value;if(z.length===0)return;const V=A==="next"?($+1)%z.length:($-1+z.length)%z.length;Bt.value={...Bt.value,currentMatchIndex:V};const J=z[V],O=_.findIndex(F=>F.nodeId===J.nodeId);if(O!==-1){S(O);const F=O*E,W=e.current;if(W){const te=W.clientHeight;W.scrollTo({top:Math.max(0,F-te/2),behavior:"instant"})}}},[_]),ae=mt(A=>{if(t.current&&(t.current.style.width=`${A}px`),e.current){e.current.style.width=`${A}px`;const z=wC(A,l.current);e.current.style.setProperty("--indentation-size",`${z}px`)}},[]),De=mt(A=>{if(!f.current)return;const z=se.value.dimensions.width,$=Math.floor(z-Qn/2);f.current.classList.remove("cursor-ew-resize","cursor-w-resize","cursor-e-resize"),A<=Qn?f.current.classList.add("cursor-w-resize"):A>=$?f.current.classList.add("cursor-e-resize"):f.current.classList.add("cursor-ew-resize")},[]),Ie=mt(A=>{if(A.preventDefault(),A.stopPropagation(),!e.current)return;e.current.style.setProperty("pointer-events","none"),d.current=!0;const z=A.clientX,$=e.current.offsetWidth,V=se.value.dimensions.width,J=Math.floor(V-Qn/2);De($);const O=W=>{const te=z-W.clientX,re=$+te;De(re);const le=Math.min(J,Math.max(Qn,re));ae(le)},F=()=>{e.current&&(e.current.style.removeProperty("pointer-events"),document.removeEventListener("pointermove",O),document.removeEventListener("pointerup",F),se.value={...se.value,componentsTree:{...se.value.componentsTree,width:e.current.offsetWidth}},tn(Lr,se.value),d.current=!1)};document.addEventListener("pointermove",O),document.addEventListener("pointerup",F)},[ae,De]);ke(()=>{if(!e.current)return;const A=e.current.offsetWidth;return De(A),se.subscribe(()=>{e.current&&De(e.current.offsetWidth)})},[De]);const qe=mt(()=>{u.current=!1},[]);return ke(()=>{let A=!0;const z=F=>{const W=new Map,te=[];for(const{element:re,name:le,fiber:ce}of F){if(!re)continue;let ve=le;const{name:ge,wrappers:ot}=ol(ce);ge&&(ot.length>0?ve=`${ot.join("(")}(${ge})${")".repeat(ot.length)}`:ve=ge),W.set(re,{label:ge||le,title:ve,children:[],element:re,fiber:ce})}for(const{element:re,depth:le}of F){if(!re)continue;const ce=W.get(re);if(ce)if(le===0)te.push(ce);else{let ve=re.parentElement;for(;ve;){const ge=W.get(ve);if(ge){ge.children=ge.children||[],ge.children.push(ce);break}ve=ve.parentElement}}}return te},$=()=>{const F=s.current;if(!F)return;const W=PC(),te=z(W);if(te.length>0){const re=Hx(te),le=bC(re);if(l.current=le,ae(se.value.componentsTree.width),v(re),A){A=!1;const ce=re.findIndex(ve=>ve.element===F);if(ce!==-1){const ve=ce*E,ge=e.current;ge&&setTimeout(()=>{ge.scrollTo({top:ve,behavior:"instant"})},96)}}}},V=ie.inspectState.subscribe(F=>{if(F.kind==="focused"){if(Yh.value)return;ne(""),s.current=F.focusedDomElement,$()}});let J=0;const O=Ym.subscribe(()=>{if(ie.inspectState.value.kind==="focused"){if(cancelAnimationFrame(J),d.current)return;J=requestAnimationFrame(()=>{Yh.value=!1,$()})}});return()=>{V(),O(),Bt.value={query:"",matches:[],currentMatchIndex:-1}}},[]),ke(()=>{const A=z=>{if(u.current&&w)switch(z.key){case"ArrowUp":{if(z.preventDefault(),z.stopPropagation(),w>0){const $=_[w-1];$!=null&&$.element&&j($.element)}return}case"ArrowDown":{if(z.preventDefault(),z.stopPropagation(),w<_.length-1){const $=_[w+1];$!=null&&$.element&&j($.element)}return}case"ArrowLeft":{z.preventDefault(),z.stopPropagation();const $=_[w];$!=null&&$.nodeId&&B($.nodeId);return}case"ArrowRight":{z.preventDefault(),z.stopPropagation();const $=_[w];$!=null&&$.nodeId&&B($.nodeId);return}}};return document.addEventListener("keydown",A),()=>{document.removeEventListener("keydown",A)}},[w,_,j,B]),ke(()=>Bt.subscribe(k),[]),ke(()=>se.subscribe(z=>{var $;($=t.current)==null||$.style.setProperty("transition","width 0.1s"),ae(z.componentsTree.width),setTimeout(()=>{var V;(V=t.current)==null||V.style.removeProperty("transition")},500)}),[]),y("div",{className:"react-scan-components-tree flex",children:[y("div",{ref:f,onPointerDown:Ie,className:"relative resize-v-line",children:y("span",{children:y(dt,{name:"icon-ellipsis",size:18})})}),y("div",{ref:t,className:"flex flex-col h-full",children:[y("div",{className:"p-2 border-b border-[#1e1e1e]",children:y("div",{ref:r,title:`Search components by:

• Name (e.g., "Button") — Case insensitive, matches any part

• Regular Expression (e.g., "/^Button/") — Use forward slashes

• Wrapper Type (e.g., "[memo,forwardRef]"):
   - Available types: memo, forwardRef, lazy, suspense
   - Matches any part of type name (e.g., "mo" matches "memo")
   - Use commas for multiple types

• Combined Search:
   - Mix name/regex with type: "button [for]"
   - Will match components satisfying both conditions

• Navigation:
   - Enter → Next match
   - Shift + Enter → Previous match
   - Cmd/Ctrl + Enter → Select and focus match
`,className:U("relative","flex items-center gap-x-1 px-2","rounded","border border-transparent","focus-within:border-[#454545]","bg-[#1e1e1e] text-neutral-300","transition-colors","whitespace-nowrap","overflow-hidden"),children:[y(dt,{name:"icon-search",size:12,className:" text-neutral-500"}),y("div",{className:"relative flex-1 h-7 overflow-hidden",children:y("input",{ref:a,type:"text",value:Bt.value.query,onClick:A=>{A.stopPropagation(),A.currentTarget.focus()},onPointerDown:A=>{A.stopPropagation()},onKeyDown:A=>{A.key==="Escape"&&A.currentTarget.blur(),Bt.value.matches.length&&(A.key==="Enter"&&A.shiftKey?de("prev"):A.key==="Enter"&&(A.metaKey||A.ctrlKey?(A.preventDefault(),A.stopPropagation(),j(Bt.value.matches[Bt.value.currentMatchIndex].element),A.currentTarget.focus()):de("next")))},onChange:pe,className:"absolute inset-y-0 inset-x-1",placeholder:"Component name, /regex/, or [type]"})}),Bt.value.query?y(je,{children:[y("span",{className:"flex items-center gap-x-0.5 text-xs text-neutral-500",children:[Bt.value.currentMatchIndex+1,"|",Bt.value.matches.length]}),!!Bt.value.matches.length&&y(je,{children:[y("button",{type:"button",onClick:A=>{A.stopPropagation(),de("prev")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:y(dt,{name:"icon-chevron-right",className:"-rotate-90",size:12})}),y("button",{type:"button",onClick:A=>{A.stopPropagation(),de("next")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:y(dt,{name:"icon-chevron-right",className:"rotate-90",size:12})})]}),y("button",{type:"button",onClick:A=>{A.stopPropagation(),ne("")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:y(dt,{name:"icon-close",size:12})})]}):!!h.length&&y("span",{className:"text-xs text-neutral-500",children:h.length})]})}),y("div",{className:"flex-1 overflow-hidden",children:y("div",{ref:e,onPointerLeave:qe,className:"tree h-full overflow-auto will-change-transform",children:y("div",{className:"relative w-full",style:{height:D},children:M.map(A=>{var J;const z=_[A.index];if(!z)return null;const $=ie.inspectState.value.kind==="focused"&&z.element===ie.inspectState.value.focusedDomElement,V=A.index===w;return y("div",{className:U("absolute left-0 w-full overflow-hidden","text-neutral-400 hover:text-neutral-300","bg-transparent hover:bg-[#5f3f9a]/20",($||V)&&"text-neutral-300 bg-[#5f3f9a]/40 hover:bg-[#5f3f9a]/40"),style:{top:A.start,height:E},children:y("div",{className:"w-full h-full",style:{paddingLeft:`calc(${z.depth} * var(--indentation-size))`},children:y(TC,{node:z,nodeIndex:A.index,hasChildren:!!((J=z.children)!=null&&J.length),isCollapsed:g.has(z.nodeId),handleTreeNodeClick:Y,handleTreeNodeToggle:ee,searchValue:T})})},z.nodeId)})})})})]})]})},zu=rd(({text:e,children:t,onCopy:r,className:a,iconSize:s=14})=>{const[l,u]=Ce(!1);ke(()=>{if(l){const h=setTimeout(()=>u(!1),600);return()=>{clearTimeout(h)}}},[l]);const d=mt(h=>{h.preventDefault(),h.stopPropagation(),navigator.clipboard.writeText(e).then(()=>{u(!0),r==null||r(!0,e)},()=>{r==null||r(!1,e)})},[e,r]),f=y("button",{onClick:d,type:"button",className:U("z-10","flex items-center justify-center","hover:text-dev-pink-400","transition-colors duration-200 ease-in-out","cursor-pointer",`size-[${s}px]`,a),children:y(dt,{name:`icon-${l?"check":"copy"}`,size:[s],className:U(l&&"text-green-500")})});return t?t({ClipboardIcon:f,onClick:d}):f}),EC=({length:e,expanded:t,onToggle:r,isNegative:a})=>y("div",{className:"flex items-center gap-1",children:[y("button",{type:"button",onClick:r,className:"flex items-center p-0 opacity-50",children:y(dt,{name:"icon-chevron-right",size:12,className:U("transition-[color,transform]",a?"text-[#f87171]":"text-[#4ade80]",t&&"rotate-90")})}),y("span",{children:["Array(",e,")"]})]}),Fp=({value:e,path:t,isNegative:r})=>{const[a,s]=Ce(!1);if(!(e!==null&&typeof e=="object"&&!(e instanceof Date)))return y("div",{className:"flex items-center gap-1",children:[y("span",{className:"text-gray-500",children:[t,":"]}),y("span",{className:"truncate",children:Uu(e)})]});const u=Object.entries(e);return y("div",{className:"flex flex-col",children:[y("div",{className:"flex items-center gap-1",children:[y("button",{type:"button",onClick:()=>s(!a),className:"flex items-center p-0 opacity-50",children:y(dt,{name:"icon-chevron-right",size:12,className:U("transition-[color,transform]",r?"text-[#f87171]":"text-[#4ade80]",a&&"rotate-90")})}),y("span",{className:"text-gray-500",children:[t,":"]}),!a&&y("span",{className:"truncate",children:e instanceof Date?Uu(e):`{${Object.keys(e).join(", ")}}`})]}),a&&y("div",{className:"pl-5 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:u.map(([d,f])=>y(Fp,{value:f,path:d,isNegative:r},d))})]})},Du=({value:e,expanded:t,onToggle:r,isNegative:a})=>{const{value:s,error:l}=VC(e);return l?y("span",{className:"text-gray-500 font-italic",children:l}):s!==null&&typeof s=="object"&&!(s instanceof Promise)?Array.isArray(s)?y("div",{className:"flex flex-col gap-1 relative",children:[y(EC,{length:s.length,expanded:t,onToggle:r,isNegative:a}),t&&y("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:s.map((d,f)=>y(Fp,{value:d,path:f.toString(),isNegative:a},f.toString()))}),y(zu,{text:cw(s),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:d})=>y(je,{children:d})})]}):y("div",{className:"flex items-start gap-1 relative",children:[y("button",{type:"button",onClick:r,className:U("flex items-center","p-0 mt-0.5 mr-1","opacity-50"),children:y(dt,{name:"icon-chevron-right",size:12,className:U("transition-[color,transform]",a?"text-[#f87171]":"text-[#4ade80]",t&&"rotate-90")})}),y("div",{className:"flex-1",children:t?y("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:Object.entries(s).map(([d,f])=>y(Fp,{value:f,path:d,isNegative:a},d))}):y("span",{children:Uu(s)})}),y(zu,{text:cw(s),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:d})=>y(je,{children:d})})]}):y("span",{children:Uu(s)})},CC=50;kt({fiber:null,fiberProps:{current:[],changes:new Set},fiberState:{current:[],changes:new Set},fiberContext:{current:[],changes:new Set}});var Yp=e=>{switch(e.kind){case"initialized":return e.changes.currentValue;case"partially-initialized":return e.value}},aw=(e,t)=>{for(const r of e){const a=t.get(r.name);if(a){t.set(a.name,{count:a.count+1,currentValue:r.value,id:a.name,lastUpdated:Date.now(),name:a.name,previousValue:r.prevValue});continue}t.set(r.name,{count:1,currentValue:r.value,id:r.name,lastUpdated:Date.now(),name:r.name,previousValue:r.prevValue})}},AC=(e,t)=>{for(const r of e){const a=t.contextChanges.get(r.contextType);if(a){if(Ci(Yp(a),r.value))continue;if(a.kind==="partially-initialized"){t.contextChanges.set(r.contextType,{kind:"initialized",changes:{count:1,currentValue:r.value,id:r.contextType.toString(),lastUpdated:Date.now(),name:r.name,previousValue:a.value}});continue}t.contextChanges.set(r.contextType,{kind:"initialized",changes:{count:a.changes.count+1,currentValue:r.value,id:r.contextType.toString(),lastUpdated:Date.now(),name:r.name,previousValue:a.changes.currentValue}});continue}t.contextChanges.set(r.contextType,{kind:"partially-initialized",id:r.contextType.toString(),lastUpdated:Date.now(),name:r.name,value:r.value})}},MC=e=>{const t={contextChanges:new Map,propsChanges:new Map,stateChanges:new Map};return e.forEach(r=>{AC(r.contextChanges,t),aw(r.stateChanges,t.stateChanges),aw(r.propsChanges,t.propsChanges)}),t},ow=(e,t)=>{const r=new Map;return e.forEach((a,s)=>{r.set(s,a)}),t.forEach((a,s)=>{const l=r.get(s);if(!l){r.set(s,a);return}r.set(s,{count:l.count+a.count,currentValue:a.currentValue,id:a.id,lastUpdated:a.lastUpdated,name:a.name,previousValue:a.previousValue})}),r},OC=(e,t)=>{const r=new Map;return e.contextChanges.forEach((a,s)=>{r.set(s,a)}),t.contextChanges.forEach((a,s)=>{const l=r.get(s);if(!l){r.set(s,a);return}if(Yp(a)!==Yp(l))switch(l.kind){case"initialized":switch(a.kind){case"initialized":{r.set(s,{kind:"initialized",changes:{...a.changes,count:a.changes.count+l.changes.count+1,currentValue:a.changes.currentValue,previousValue:a.changes.previousValue}});return}case"partially-initialized":{r.set(s,{kind:"initialized",changes:{count:l.changes.count+1,currentValue:a.value,id:a.id,lastUpdated:a.lastUpdated,name:a.name,previousValue:l.changes.currentValue}});return}}case"partially-initialized":switch(a.kind){case"initialized":{r.set(s,{kind:"initialized",changes:{count:a.changes.count+1,currentValue:a.changes.currentValue,id:a.changes.id,lastUpdated:a.changes.lastUpdated,name:a.changes.name,previousValue:l.value}});return}case"partially-initialized":{r.set(s,{kind:"initialized",changes:{count:1,currentValue:a.value,id:a.id,lastUpdated:a.lastUpdated,name:a.name,previousValue:l.value}});return}}}}),r},NC=(e,t)=>{const r=OC(e,t),a=ow(e.propsChanges,t.propsChanges),s=ow(e.stateChanges,t.stateChanges);return{contextChanges:r,propsChanges:a,stateChanges:s}},Pp=e=>Array.from(e.propsChanges.values()).reduce((t,r)=>t+r.count,0)+Array.from(e.stateChanges.values()).reduce((t,r)=>t+r.count,0)+Array.from(e.contextChanges.values()).filter(t=>t.kind==="initialized").reduce((t,r)=>t+r.changes.count,0),zC=e=>{const t=fe({queue:[]}),[r,a]=Ce({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),s=ie.inspectState.value.kind==="focused"?ie.inspectState.value.fiber:null,l=s?Ei(s):null;return ke(()=>{const u=setInterval(()=>{t.current.queue.length!==0&&(a(d=>{const f=MC(t.current.queue),h=NC(d,f);return Pp(d),Pp(h),h}),t.current.queue=[])},CC);return()=>{clearInterval(u)}},[s]),ke(()=>{if(!l)return;const u=f=>{var h;(h=t.current)==null||h.queue.push(f)};let d=ie.changesListeners.get(l);return d||(d=[],ie.changesListeners.set(l,d)),d.push(u),()=>{var f;a({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),t.current.queue=[],ie.changesListeners.set(l,((f=ie.changesListeners.get(l))==null?void 0:f.filter(h=>h!==u))??[])}},[l]),ke(()=>()=>{a({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),t.current.queue=[]},[l]),r},Ru=e=>{var t;if(e==null)return{value:e};if(typeof e=="function")return{value:e};if(typeof e!="object")return{value:e};if(yo(e))return{value:"Promise"};try{const r=Object.getPrototypeOf(e);return r===Promise.prototype||((t=r==null?void 0:r.constructor)==null?void 0:t.name)==="Promise"?{value:"Promise"}:{value:e}}catch{return{value:null,error:"Error accessing value"}}},DC=rd(()=>{const[e,t]=Ce(!0),r=zC(),[a,s]=Ce(!1),l=Pp(r)>0;ke(()=>{if(!a&&l){const f=setTimeout(()=>{s(!0),requestAnimationFrame(()=>{t(!0)})},0);return()=>clearTimeout(f)}},[a,l]);const u=new Map(Array.from(r.contextChanges.entries()).filter(([,f])=>f.kind==="initialized").map(([f,h])=>[f,h.kind==="partially-initialized"?null:h.changes])),d=ie.inspectState.value.kind==="focused"?ie.inspectState.value.fiber:null;if(d)return y(je,{children:[y(jC,{}),y("div",{className:"overflow-hidden h-full flex flex-col gap-y-2",children:[y("div",{className:"flex flex-col gap-2 px-3 pt-2",children:[y("span",{className:"text-sm font-medium text-[#888]",children:["Why did"," ",y("span",{className:"text-[#A855F7]",children:Nt(d)})," ","render?"]}),!l&&y("div",{className:"text-sm text-[#737373] bg-[#1E1E1E] rounded-md p-4 flex flex-col gap-4",children:[y("div",{children:"No changes detected since selecting"}),y("div",{children:"The props, state, and context changes within your component will be reported here"})]})]}),y("div",{className:U("flex flex-col gap-y-2 pl-3 relative overflow-y-auto h-full"),children:[y(Ph,{changes:r.propsChanges,title:"Changed Props",isExpanded:e}),y(Ph,{renderName:f=>RC(f,Nt(pa(d))??"Unknown Component"),changes:r.stateChanges,title:"Changed State",isExpanded:e}),y(Ph,{changes:u,title:"Changed Context",isExpanded:e})]})]})]})}),RC=(e,t)=>{if(Number.isNaN(Number(e)))return e;const r=Number.parseInt(e);return y("span",{className:"truncate",children:[y("span",{className:"text-white",children:[r,(s=>{const l=s%10,u=s%100;if(u>=11&&u<=13)return"th";switch(l){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}})(r)," hook"," "]}),y("span",{style:{color:"#666"},children:["called in ",y("i",{className:"text-[#A855F7] truncate",children:t})]})]})},jC=rd(()=>{const e=fe(null),t=fe(null),r=fe(null),a=fe({isPropsChanged:!1,isStateChanged:!1,isContextChanged:!1});return ke(()=>{const s=Ux(()=>{var d,f,h;const u=[];((d=e.current)==null?void 0:d.dataset.flash)==="true"&&u.push(e.current),((f=t.current)==null?void 0:f.dataset.flash)==="true"&&u.push(t.current),((h=r.current)==null?void 0:h.dataset.flash)==="true"&&u.push(r.current);for(const v of u)v.classList.remove("count-flash-white"),v.offsetWidth,v.classList.add("count-flash-white")},400);return Pt.subscribe(u=>{var v,g,b,w,S,T;if(!e.current||!t.current||!r.current)return;const{currentIndex:d,updates:f}=u,h=f[d];!h||d===0||(s(),a.current={isPropsChanged:(((g=(v=h.props)==null?void 0:v.changes)==null?void 0:g.size)??0)>0,isStateChanged:(((w=(b=h.state)==null?void 0:b.changes)==null?void 0:w.size)??0)>0,isContextChanged:(((T=(S=h.context)==null?void 0:S.changes)==null?void 0:T.size)??0)>0},e.current.dataset.flash!=="true"&&(e.current.dataset.flash=a.current.isPropsChanged.toString()),t.current.dataset.flash!=="true"&&(t.current.dataset.flash=a.current.isStateChanged.toString()),r.current.dataset.flash!=="true"&&(r.current.dataset.flash=a.current.isContextChanged.toString()))})},[]),y("button",{type:"button",className:U("react-section-header","overflow-hidden","max-h-0","transition-[max-height]"),children:y("div",{className:U("flex-1 react-scan-expandable"),children:y("div",{className:"overflow-hidden",children:y("div",{className:"flex items-center whitespace-nowrap",children:[y("div",{className:"flex items-center gap-x-2",children:"What changed?"}),y("div",{className:U("ml-auto","change-scope","transition-opacity duration-300 delay-150"),children:[y("div",{ref:e,children:"props"}),y("div",{ref:t,children:"state"}),y("div",{ref:r,children:"context"})]})]})})})})}),UC=e=>e,Ph=rd(({title:e,changes:t,renderName:r=UC})=>{const[a,s]=Ce(new Set),[l,u]=Ce(new Set),d=Array.from(t.entries());return t.size===0?null:y("div",{children:[y("div",{className:"text-xs text-[#888] mb-1.5",children:e}),y("div",{className:"flex flex-col gap-2",children:d.map(([f,h])=>{const v=l.has(String(f)),{value:g,error:b}=Ru(h.previousValue),{value:w,error:S}=Ru(h.currentValue),T=Px(g,w);return y("div",{children:[y("button",{onClick:()=>{u(k=>{const _=new Set(k);return _.has(String(f))?_.delete(String(f)):_.add(String(f)),_})},className:"flex items-center gap-2 w-full bg-transparent border-none p-0 cursor-pointer text-white text-xs",children:y("div",{className:"flex items-center gap-1.5 flex-1",children:[y(dt,{name:"icon-chevron-right",size:12,className:U("text-[#666] transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",{"rotate-90":v})}),y("div",{className:"whitespace-pre-wrap break-words text-left font-medium flex items-center gap-x-1.5",children:[r(h.name),y(IC,{count:h.count,isFunction:typeof h.currentValue=="function",showWarning:T.changes.length===0,forceFlash:!0})]})]})}),y("div",{className:U("react-scan-expandable",{"react-scan-expanded":v}),children:y("div",{className:"pl-3 text-xs font-mono border-l-1 border-[#333]",children:y("div",{className:"flex flex-col gap-0.5",children:b||S?y($C,{currError:S,prevError:b}):T.changes.length>0?y(LC,{change:h,diff:T,expandedFns:a,renderName:r,setExpandedFns:s,title:e}):y(HC,{currValue:w,entryKey:f,expandedFns:a,prevValue:g,setExpandedFns:s})})})})]},f)})})]})}),$C=({prevError:e,currError:t})=>y(je,{children:[e&&y("div",{className:"text-[#f87171] bg-[#2a1515] pr-1.5 py-[3px] rounded italic",children:e}),t&&y("div",{className:"text-[#4ade80] bg-[#1a2a1a] pr-1.5 py-[3px] rounded italic mt-0.5",children:t})]}),LC=({diff:e,title:t,renderName:r,change:a,expandedFns:s,setExpandedFns:l})=>e.changes.map((u,d)=>{const{value:f,error:h}=Ru(u.prevValue),{value:v,error:g}=Ru(u.currentValue),b=typeof f=="function"||typeof v=="function";let w;return t==="Props"&&(w=u.path.length>0?`${r(String(a.name))}.${Xn(u.path)}`:void 0),t==="State"&&u.path.length>0&&(w=`state.${Xn(u.path)}`),w||(w=Xn(u.path)),y("div",{className:U("flex flex-col gap-y-1",d<e.changes.length-1&&"mb-4"),children:[w&&y("div",{className:"text-[#666] text-[10px]",children:w}),y("button",{type:"button",className:U("group","flex items-start","py-[3px] px-1.5","text-left text-[#f87171] bg-[#2a1515]","rounded","overflow-hidden break-all",b&&"cursor-pointer"),onClick:b?()=>{const S=`${Xn(u.path)}-prev`;l(T=>{const k=new Set(T);return k.has(S)?k.delete(S):k.add(S),k})}:void 0,children:[y("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),y("span",{className:"flex-1 whitespace-nowrap font-mono",children:h?y("span",{className:"italic text-[#f87171]",children:h}):b?y("div",{className:"flex gap-1 items-start flex-col",children:[y("div",{className:"flex gap-1 items-start w-full",children:[y("span",{className:"flex-1 max-h-40",children:Gp(f,s.has(`${Xn(u.path)}-prev`))}),typeof f=="function"&&y(zu,{text:f.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:S})=>y(je,{children:S})})]}),(f==null?void 0:f.toString())===(v==null?void 0:v.toString())&&y("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):y(Du,{value:f,expanded:s.has(`${Xn(u.path)}-prev`),onToggle:()=>{const S=`${Xn(u.path)}-prev`;l(T=>{const k=new Set(T);return k.has(S)?k.delete(S):k.add(S),k})},isNegative:!0})})]}),y("button",{type:"button",className:U("group","flex items-start","py-[3px] px-1.5","text-left text-[#4ade80] bg-[#1a2a1a]","rounded","overflow-hidden break-all",b&&"cursor-pointer"),onClick:b?()=>{const S=`${Xn(u.path)}-current`;l(T=>{const k=new Set(T);return k.has(S)?k.delete(S):k.add(S),k})}:void 0,children:[y("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),y("span",{className:"flex-1 whitespace-pre-wrap font-mono",children:g?y("span",{className:"italic text-[#4ade80]",children:g}):b?y("div",{className:"flex gap-1 items-start flex-col",children:[y("div",{className:"flex gap-1 items-start w-full",children:[y("span",{className:"flex-1",children:Gp(v,s.has(`${Xn(u.path)}-current`))}),typeof v=="function"&&y(zu,{text:v.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:S})=>y(je,{children:S})})]}),(f==null?void 0:f.toString())===(v==null?void 0:v.toString())&&y("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):y(Du,{value:v,expanded:s.has(`${Xn(u.path)}-current`),onToggle:()=>{const S=`${Xn(u.path)}-current`;l(T=>{const k=new Set(T);return k.has(S)?k.delete(S):k.add(S),k})},isNegative:!1})})]})]},`${w}-${a.name}-${d}`)}),HC=({prevValue:e,currValue:t,entryKey:r,expandedFns:a,setExpandedFns:s})=>y(je,{children:[y("div",{className:"group flex gap-0.5 items-start text-[#f87171] bg-[#2a1515] py-[3px] px-1.5 rounded",children:[y("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),y("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:y(Du,{value:e,expanded:a.has(`${String(r)}-prev`),onToggle:()=>{const l=`${String(r)}-prev`;s(u=>{const d=new Set(u);return d.has(l)?d.delete(l):d.add(l),d})},isNegative:!0})})]}),y("div",{className:"group flex gap-0.5 items-start text-[#4ade80] bg-[#1a2a1a] py-[3px] px-1.5 rounded mt-0.5",children:[y("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),y("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:y(Du,{value:t,expanded:a.has(`${String(r)}-current`),onToggle:()=>{const l=`${String(r)}-current`;s(u=>{const d=new Set(u);return d.has(l)?d.delete(l):d.add(l),d})},isNegative:!1})})]}),typeof t=="object"&&t!==null&&y("div",{className:"text-[#666] text-[10px] italic mt-1 flex items-center gap-x-1",children:[y(dt,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),y("span",{children:"Reference changed but objects are structurally the same"})]})]}),IC=({count:e,forceFlash:t,isFunction:r,showWarning:a})=>{const s=fe(!0),l=fe(null),u=fe(e);return ke(()=>{const d=l.current;!d||u.current===e||(d.classList.remove("count-flash"),d.offsetWidth,d.classList.add("count-flash"),u.current=e)},[e]),ke(()=>{if(s.current){s.current=!1;return}if(t){let d=setTimeout(()=>{var f;(f=l.current)==null||f.classList.add("count-flash-white"),d=setTimeout(()=>{var h;(h=l.current)==null||h.classList.remove("count-flash-white")},300)},500);return()=>{clearTimeout(d)}}},[t]),y("div",{ref:l,className:"count-badge",children:[a&&y(dt,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),r&&y(dt,{name:"icon-function",className:"text-[#A855F7] mb-px",size:14}),"x",e]})},Si={lastRendered:new Map,expandedPaths:new Set,cleanup:()=>{Si.lastRendered.clear(),Si.expandedPaths.clear(),vC.cleanupAll(),ZC(),Lx.reset()}},qx=class extends In{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null}),Si.cleanup()}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){var e;return this.state.hasError?y("div",{className:"p-4 bg-red-950/50 h-screen backdrop-blur-sm",children:[y("div",{className:"flex items-center gap-2 mb-3 text-red-400 font-medium",children:[y(dt,{name:"icon-flame",className:"text-red-500",size:16}),"Something went wrong in the inspector"]}),y("div",{className:"p-3 bg-black/40 rounded font-mono text-xs text-red-300 mb-4 break-words",children:((e=this.state.error)==null?void 0:e.message)||JSON.stringify(this.state.error)}),y("button",{type:"button",onClick:this.handleReset,className:"px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2",children:"Reset Inspector"})]}):this.props.children}},BC=ga(()=>U("react-scan-inspector","flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",!id.value&&"opacity-100 delay-300 pointer-events-auto")),qC=Fm(()=>{const e=fe(null),t=r=>{if(!r)return;e.current=r;const{data:a,shouldUpdate:s}=eA(r);if(s){const l={timestamp:Date.now(),fiberInfo:QC(r),props:a.fiberProps,state:a.fiberState,context:a.fiberContext,stateNames:WC(r)};Lx.addUpdate(l,r)}};return al(()=>{const r=ie.inspectState.value;il(()=>{var l;if(r.kind!=="focused"||!r.focusedDomElement){e.current=null,Si.cleanup();return}r.kind==="focused"&&(id.value=!1);const{parentCompositeFiber:a}=lw(r.focusedDomElement,r.fiber);if(!a){ie.inspectState.value={kind:"inspect-off"},Ze.value={view:"none"};return}((l=e.current)==null?void 0:l.type)!==a.type&&(e.current=a,Si.cleanup(),t(a))})}),al(()=>{Ym.value,il(()=>{const r=ie.inspectState.value;if(r.kind!=="focused"||!r.focusedDomElement){e.current=null,Si.cleanup();return}const{parentCompositeFiber:a}=lw(r.focusedDomElement,r.fiber);if(!a){ie.inspectState.value={kind:"inspect-off"},Ze.value={view:"none"};return}t(a),r.focusedDomElement.isConnected||(e.current=null,Si.cleanup(),ie.inspectState.value={kind:"inspecting",hoveredDomElement:null})})}),ke(()=>()=>{Si.cleanup()},[]),y(qx,{children:y("div",{className:BC,children:y("div",{className:"w-full h-full",children:y(DC,{})})})})}),FC=Fm(()=>ie.inspectState.value.kind!=="focused"?null:y(qx,{children:[y(qC,{}),y(kC,{})]})),Fx=e=>{var t,r,a;if("__REACT_DEVTOOLS_GLOBAL_HOOK__"in window){const s=window.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!(s!=null&&s.renderers))return null;for(const[,l]of Array.from(s.renderers))try{const u=(t=l.findFiberByHostInstance)==null?void 0:t.call(l,e);if(u)return u}catch{}}if("_reactRootContainer"in e){const l=e._reactRootContainer;return((a=(r=l==null?void 0:l._internalRoot)==null?void 0:r.current)==null?void 0:a.child)??null}for(const s in e)if(s.startsWith("__reactInternalInstance$")||s.startsWith("__reactFiber"))return e[s];return null},Pm=e=>{let t=e;for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.child)break;t=t.child}for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.return)break;t=t.return}return null},Xm=e=>{if(!e)return null;try{const t=Fx(e);if(!t)return null;const r=vo(t);return r?r[0]:null}catch{return null}},vo=e=>{let t=e,r=null;for(;t;){if(ed(t))return[t,r];el(t)&&!r&&(r=t),t=t.return}return null},sw=(e,t)=>!!J1(t,a=>a===e),YC=async e=>{const t=Xm(e);if(!t)return null;const r=Pm(t);if(!r)return null;const a=(await AE([r])).get(r);return a||null},aa=e=>{const t=Xm(e);if(!t)return{};if(!Pm(t))return{};const a=vo(t);if(!a)return{};const[s]=a;return{parentCompositeFiber:s}},lw=(e,t)=>{var d,f;if(!e.isConnected)return{};let r=t??Xm(e);if(!r)return{};let a=r,s=null,l=null;for(;a;){if(!a.stateNode){a=a.return;continue}if((d=Ue.instrumentation)!=null&&d.fiberRoots.has(a.stateNode)){s=a,l=a.stateNode.current;break}a=a.return}if(!s||!l)return{};if(r=sw(r,l)?r:r.alternate??r,!r)return{};if(!Pm(r))return{};const u=(f=vo(r))==null?void 0:f[0];return u?{parentCompositeFiber:sw(u,l)?u:u.alternate??u}:{}},Yx=e=>{var s;const t=e.memoizedProps??{},r=((s=e.alternate)==null?void 0:s.memoizedProps)??{},a=[];for(const l in t){if(l==="children")continue;const u=t[l],d=r[l];Ci(u,d)||a.push({name:l,value:u,prevValue:d,type:1})}return a},Xp=new Set(["HTML","HEAD","META","TITLE","BASE","SCRIPT","SCRIPT","STYLE","LINK","NOSCRIPT","SOURCE","TRACK","EMBED","OBJECT","PARAM","TEMPLATE","PORTAL","SLOT","AREA","XML","DOCTYPE","COMMENT"]),ju=(e,t=!0)=>{if(e.stateNode&&"nodeType"in e.stateNode){const a=e.stateNode;return t&&a.tagName&&Xp.has(a.tagName.toLowerCase())?null:a}let r=e.child;for(;r;){const a=ju(r,t);if(a)return a;r=r.sibling}return null},PC=(e=document.body)=>{const t=[],r=s=>{if(!s)return null;const{parentCompositeFiber:l}=aa(s);return l&&ju(l)===s?s:null},a=(s,l=0)=>{const u=r(s);if(u){const{parentCompositeFiber:d}=aa(u);if(!d)return;t.push({element:u,depth:l,name:Nt(d.type)??"Unknown",fiber:d})}for(const d of Array.from(s.children))a(d,u?l+1:l)};return a(e),t},cw=e=>{try{if(e===null)return"null";if(e===void 0)return"undefined";if(yo(e))return"Promise";if(typeof e=="function"){const t=e.toString();try{return t.replace(/\s+/g," ").replace(/{\s+/g,`{
  `).replace(/;\s+/g,`;
  `).replace(/}\s*$/g,`
}`).replace(/\(\s+/g,"(").replace(/\s+\)/g,")").replace(/,\s+/g,", ")}catch{return t}}switch(!0){case e instanceof Date:return e.toISOString();case e instanceof RegExp:return e.toString();case e instanceof Error:return`${e.name}: ${e.message}`;case e instanceof Map:return JSON.stringify(Array.from(e.entries()),null,2);case e instanceof Set:return JSON.stringify(Array.from(e),null,2);case e instanceof DataView:return JSON.stringify(Array.from(new Uint8Array(e.buffer)),null,2);case e instanceof ArrayBuffer:return JSON.stringify(Array.from(new Uint8Array(e)),null,2);case(ArrayBuffer.isView(e)&&"length"in e):return JSON.stringify(Array.from(e),null,2);case Array.isArray(e):return JSON.stringify(e,null,2);case typeof e=="object":return JSON.stringify(e,null,2);default:return String(e)}}catch{return String(e)}},XC=(e,t)=>{try{return typeof e!="function"||typeof t!="function"?!1:e.toString()===t.toString()}catch{return!1}},Px=(e,t,r=[],a=new WeakSet)=>{if(e===t)return{type:"primitive",changes:[],hasDeepChanges:!1};if(typeof e=="function"&&typeof t=="function"){const h=XC(e,t);return{type:"primitive",changes:[{path:r,prevValue:e,currentValue:t,sameFunction:h}],hasDeepChanges:!h}}if(e===null||t===null||e===void 0||t===void 0||typeof e!="object"||typeof t!="object")return{type:"primitive",changes:[{path:r,prevValue:e,currentValue:t}],hasDeepChanges:!0};if(a.has(e)||a.has(t))return{type:"object",changes:[{path:r,prevValue:"[Circular]",currentValue:"[Circular]"}],hasDeepChanges:!1};a.add(e),a.add(t);const s=e,l=t,u=new Set([...Object.keys(s),...Object.keys(l)]),d=[];let f=!1;for(const h of u){const v=s[h],g=l[h];if(v!==g)if(typeof v=="object"&&typeof g=="object"&&v!==null&&g!==null){const b=Px(v,g,[...r,h],a);d.push(...b.changes),b.hasDeepChanges&&(f=!0)}else d.push({path:[...r,h],prevValue:v,currentValue:g}),f=!0}return{type:"object",changes:d,hasDeepChanges:f}},Xn=e=>e.length===0?"":e.reduce((t,r,a)=>/^\d+$/.test(r)?`${t}[${r}]`:a===0?r:`${t}.${r}`,"");function GC(e){const t=e.replace(/\s+/g," ").trim(),r=[];let a="";for(let _=0;_<t.length;_++){const E=t[_];if(E==="="&&t[_+1]===">"){a.trim()&&r.push(a.trim()),r.push("=>"),a="",_++;continue}/[(){}[\];,<>:\?!]/.test(E)?(a.trim()&&r.push(a.trim()),r.push(E),a=""):/\s/.test(E)?(a.trim()&&r.push(a.trim()),a=""):a+=E}a.trim()&&r.push(a.trim());const s=[];for(let _=0;_<r.length;_++){const E=r[_],M=r[_+1];E==="("&&M===")"||E==="["&&M==="]"||E==="{"&&M==="}"||E==="<"&&M===">"?(s.push(E+M),_++):s.push(E)}const l=new Set,u=new Set;function d(_,E,M){let D=0;for(let j=M;j<s.length;j++){const Y=s[j];if(Y===_)D++;else if(Y===E&&(D--,D===0))return j}return-1}for(let _=0;_<s.length;_++)if(s[_]==="("){const M=d("(",")",_);if(M!==-1&&s[M+1]==="=>")for(let D=_;D<=M;D++)l.add(D)}for(let _=1;_<s.length;_++){const E=s[_-1],M=s[_];if(/^[a-zA-Z0-9_$]+$/.test(E)&&M==="<"){const D=d("<",">",_);if(D!==-1)for(let j=_;j<=D;j++)u.add(j)}}let f=0;const h="  ",v=[];let g="";function b(){g.trim()&&v.push(g.replace(/\s+$/,"")),g=""}function w(){b(),g=h.repeat(f)}const S=[];function T(){return S.length?S[S.length-1]:null}function k(_,E=!1){g.trim()?E||/^[),;:\].}>]$/.test(_)?g+=_:g+=` ${_}`:g+=_}for(let _=0;_<s.length;_++){const E=s[_],M=s[_+1]||"";if(["(","{","[","<"].includes(E)){if(k(E),S.push(E),E==="{")f++,w();else if((E==="("||E==="["||E==="<")&&!(l.has(_)&&E==="("||u.has(_)&&E==="<")){const D={"(":")","[":"]","<":">"}[E];M!==D&&M!=="()"&&M!=="[]"&&M!=="<>"&&(f++,w())}}else if([")","}","]",">"].includes(E)){const D=T();E===")"&&D==="("||E==="]"&&D==="["||E===">"&&D==="<"?!(l.has(_)&&E===")")&&!(u.has(_)&&E===">")&&(f=Math.max(f-1,0),w()):E==="}"&&D==="{"&&(f=Math.max(f-1,0),w()),S.pop(),k(E),E==="}"&&w()}else if(/^\(\)|\[\]|\{\}|\<\>$/.test(E))k(E);else if(E==="=>")k(E);else if(E===";")k(E,!0),w();else if(E===","){k(E,!0);const D=T();!(l.has(_)&&D==="(")&&!(u.has(_)&&D==="<")&&D&&["{","[","(","<"].includes(D)&&w()}else k(E)}return b(),v.join(`
`).replace(/\n\s*\n+/g,`
`).trim()}var Gp=(e,t=!1)=>{try{const r=e.toString(),a=r.match(/(?:function\s*)?(?:\(([^)]*)\)|([^=>\s]+))\s*=>?/);if(!a)return"ƒ";const l=(a[1]||a[2]||"").replace(/\s+/g,"");return t?GC(r):`ƒ (${l}) => ...`}catch{return"ƒ"}},Uu=e=>{if(e===null)return"null";if(e===void 0)return"undefined";if(typeof e=="string")return`"${e.length>150?`${e.slice(0,20)}...`:e}"`;if(typeof e=="number"||typeof e=="boolean")return String(e);if(typeof e=="function")return Gp(e);if(Array.isArray(e))return`Array(${e.length})`;if(e instanceof Map)return`Map(${e.size})`;if(e instanceof Set)return`Set(${e.size})`;if(e instanceof Date)return e.toISOString();if(e instanceof RegExp)return e.toString();if(e instanceof Error)return`${e.name}: ${e.message}`;if(typeof e=="object"){const t=Object.keys(e);return`{${t.length>2?`${t.slice(0,2).join(", ")}, ...`:t.join(", ")}}`}return String(e)},VC=e=>{var t;if(e==null)return{value:e};if(typeof e=="function")return{value:e};if(typeof e!="object")return{value:e};if(e instanceof Promise)return{value:"Promise"};try{const r=Object.getPrototypeOf(e);return r===Promise.prototype||((t=r==null?void 0:r.constructor)==null?void 0:t.name)==="Promise"?{value:"Promise"}:{value:e}}catch{return{value:null,error:"Error accessing value"}}},yo=e=>!!e&&(e instanceof Promise||typeof e=="object"&&"then"in e),QC=e=>{const t=ra(e);return{displayName:Nt(e)||"Unknown",type:e.type,key:e.key,id:e.index,selfTime:(t==null?void 0:t.selfTime)??null,totalTime:(t==null?void 0:t.totalTime)??null}},Gm=new Map,Xx=new Map,Vm=new Map,Vp=null,KC=/\[(?<name>\w+),\s*set\w+\]/g,WC=e=>{var r,a;const t=((a=(r=e.type)==null?void 0:r.toString)==null?void 0:a.call(r))||"";return t?Array.from(t.matchAll(KC),s=>{var l;return((l=s.groups)==null?void 0:l.name)??""}):[]},ZC=()=>{Gm.clear(),Xx.clear(),Vm.clear(),Vp=null},JC=e=>{const t=e.type!==Vp;return Vp=e.type,t},Xh=(e,t,r,a)=>{const s=e.get(t),l=e===Gm||e===Vm,u=!Ci(r,a);if(!s)return e.set(t,{count:u&&l?1:0,currentValue:r,previousValue:a,lastUpdated:Date.now()}),{hasChanged:u,count:u&&l?1:l?0:1};if(!Ci(s.currentValue,r)){const d=s.count+1;return e.set(t,{count:d,currentValue:r,previousValue:s.currentValue,lastUpdated:Date.now()}),{hasChanged:!0,count:d}}return{hasChanged:!1,count:s.count}},uw=e=>{if(!e)return{};if(e.tag===Wu||e.tag===Zu||e.tag===yl||e.tag===vl){let t=e.memoizedState;const r={};let a=0;for(;t;)t.queue&&t.memoizedState!==void 0&&(r[a]=t.memoizedState),t=t.next,a++;return r}return e.tag===ha?e.memoizedState||{}:{}},Qm=e=>{var d;const t=e.memoizedProps||{},r=((d=e.alternate)==null?void 0:d.memoizedProps)||{},a={},s={},l=Object.keys(t);for(const f of l)f in t&&(a[f]=t[f],s[f]=r[f]);const u=Yx(e).map(f=>({name:f.name,value:f.value,prevValue:f.prevValue}));return{current:a,prev:s,changes:u}},Km=e=>{const t=uw(e),r=e.alternate?uw(e.alternate):{},a=[];for(const[s,l]of Object.entries(t)){const u=e.tag===ha?s:Number(s);e.alternate&&!Ci(r[s],l)&&a.push({name:u,value:l,prevValue:r[s]})}return{current:t,prev:r,changes:a}},Wm=e=>{const t=fw(e),r=e.alternate?fw(e.alternate):new Map,a={},s={},l=[],u=new Set;for(const[d,f]of t){const h=f.displayName,v=d;if(u.has(v))continue;u.add(v),a[h]=f.value;const g=r.get(d);g&&(s[h]=g.value,Ci(g.value,f.value)||l.push({name:h,value:f.value,prevValue:g.value,contextType:d}))}return{current:a,prev:s,changes:l}},eA=e=>{const t=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{data:{fiberProps:t(),fiberState:t(),fiberContext:t()},shouldUpdate:!1};let r=!1;const a=JC(e),s=t();if(e.memoizedProps){const{current:g,changes:b}=Qm(e);for(const[w,S]of Object.entries(g))s.current.push({name:w,value:yo(S)?{type:"promise",displayValue:"Promise"}:S});for(const w of b){const{hasChanged:S,count:T}=Xh(Gm,w.name,w.value,w.prevValue);S&&(r=!0,s.changes.add(w.name),s.changesCounts.set(w.name,T))}}const l=t(),{current:u,changes:d}=Km(e);for(const[g,b]of Object.entries(u)){const w=e.tag===ha?g:Number(g);l.current.push({name:w,value:b})}for(const g of d){const{hasChanged:b,count:w}=Xh(Xx,g.name,g.value,g.prevValue);b&&(r=!0,l.changes.add(g.name),l.changesCounts.set(g.name,w))}const f=t(),{current:h,changes:v}=Wm(e);for(const[g,b]of Object.entries(h))f.current.push({name:g,value:b});if(!a)for(const g of v){const{hasChanged:b,count:w}=Xh(Vm,g.name,g.value,g.prevValue);b&&(r=!0,f.changes.add(g.name),f.changesCounts.set(g.name,w))}return!r&&!a&&(s.changes.clear(),l.changes.clear(),f.changes.clear()),{data:{fiberProps:s,fiberState:l,fiberContext:f},shouldUpdate:r||a}},dw=new WeakMap,fw=e=>{var s;if(!e)return new Map;const t=dw.get(e);if(t)return t;const r=new Map;let a=e;for(;a;){const l=a.dependencies;if(l!=null&&l.firstContext){let u=l.firstContext;for(;u;){const d=u.memoizedValue,f=(s=u.context)==null?void 0:s.displayName;if(r.has(d)||r.set(u.context,{value:d,displayName:f??"UnnamedContext",contextType:null}),u===u.next)break;u=u.next}}a=a.return}return dw.set(e,r),r},hw=e=>{const t=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{fiberProps:t(),fiberState:t(),fiberContext:t()};const r=t();if(e.memoizedProps){const{current:d,changes:f}=Qm(e);for(const[h,v]of Object.entries(d))r.current.push({name:h,value:yo(v)?{type:"promise",displayValue:"Promise"}:v});for(const h of f)r.changes.add(h.name),r.changesCounts.set(h.name,1)}const a=t();if(e.memoizedState){const{current:d,changes:f}=Km(e);for(const[h,v]of Object.entries(d))a.current.push({name:h,value:yo(v)?{type:"promise",displayValue:"Promise"}:v});for(const h of f)a.changes.add(h.name),a.changesCounts.set(h.name,1)}const s=t(),{current:l,changes:u}=Wm(e);for(const[d,f]of Object.entries(l))s.current.push({name:d,value:yo(f)?{type:"promise",displayValue:"Promise"}:f});for(const d of u)s.changes.add(d.name),s.changesCounts.set(d.name,1);return{fiberProps:r,fiberState:a,fiberContext:s}},Qp=0,pw=performance.now(),Gh=0,mw=!1,Gx=()=>{Gh++;const e=performance.now();e-pw>=1e3&&(Qp=Gh,Gh=0,pw=e),requestAnimationFrame(Gx)},Vx=()=>(mw||(mw=!0,Gx(),Qp=60),Qp),tA=e=>{var r,a;if(!e)return[];const t=[];if(e.tag===Wu||e.tag===Zu||e.tag===yl||e.tag===vl){let s=e.memoizedState,l=(r=e.alternate)==null?void 0:r.memoizedState,u=0;for(;s;){if(s.queue&&s.memoizedState!==void 0){const d={type:2,name:u.toString(),value:s.memoizedState,prevValue:l==null?void 0:l.memoizedState};Ci(d.prevValue,d.value)||t.push(d)}s=s.next,l=l==null?void 0:l.next,u++}return t}if(e.tag===ha){const s={type:3,name:"state",value:e.memoizedState,prevValue:(a=e.alternate)==null?void 0:a.memoizedState};return Ci(s.prevValue,s.value)||t.push(s),t}return t},Vh=0,gw=new WeakMap,nA=e=>{const t=gw.get(e);return t||(Vh++,gw.set(e,Vh),Vh)};function rA(e,t){if(!e||!t)return;const r=e.memoizedValue,a={type:4,name:e.context.displayName??"Context.Provider",value:r,contextType:nA(e.context)};this.push(a)}var iA=e=>{const t=[];return $k(e,rA.bind(t)),t},Qx=new Map,vw=!1,Qh=()=>Array.from(Qx.values()),aA=16,Kp=new WeakMap;function Kx(e){return String(Ei(e))}function Wx(e){const t=Kx(e),r=Kp.get(pa(e));if(r)return r.get(t)}function oA(e,t){const r=pa(e.type),a=Kx(e);let s=Kp.get(r);s||(s=new Map,Kp.set(r,s)),s.set(a,t)}var sA=(e,t,r,a,s)=>{const l=Date.now(),u=Wx(e);if((a||s)&&(!u||l-(u.lastRenderTimestamp||0)>aA)){const d=u||{selfTime:0,totalTime:0,renderCount:0,lastRenderTimestamp:l};d.renderCount=(d.renderCount||0)+1,d.selfTime=t||0,d.totalTime=r||0,d.lastRenderTimestamp=l,oA(e,{...d})}},lA=(e,t)=>{const r={isPaused:kt(!Ue.options.value.enabled),fiberRoots:new WeakSet};return Qx.set(e,{key:e,config:t,instrumentation:r}),vw||(vw=!0,Pk({name:"react-scan",onActive:t.onActive,onCommitFiberRoot(a,s){r.fiberRoots.add(s);const l=Qh();for(const u of l)u.config.onCommitStart();Yk(s.current,(u,d)=>{const f=pa(u.type);if(!f)return null;const h=Qh(),v=[];for(let E=0,M=h.length;E<M;E++)h[E].config.isValidFiber(u)&&v.push(E);if(!v.length)return null;const g=[];if(h.some(E=>E.config.trackChanges)){const E=Qm(u).changes,M=Km(u).changes,D=Wm(u).changes;g.push.apply(null,E.map(j=>({type:1,name:j.name,value:j.value})));for(const j of M)u.tag===ha?g.push({type:3,name:j.name.toString(),value:j.value}):g.push({type:2,name:j.name.toString(),value:j.value});g.push.apply(null,D.map(j=>({type:4,name:j.name,value:j.value,contextType:Number(j.contextType)})))}const{selfTime:b,totalTime:w}=ra(u),S=Vx(),T={phase:ME[d],componentName:Nt(f),count:1,changes:g,time:b,forget:tl(u),unnecessary:null,didCommit:Mm(u),fps:S},k=g.length>0,_=Lk(u).length>0;d==="update"&&sA(u,b,w,k,_);for(let E=0,M=v.length;E<M;E++){const D=v[E];h[D].config.onRender(u,[T])}});for(const u of l)u.config.onCommitFinish()},onPostCommitFiberRoot(){const a=Qh();for(const s of a)s.config.onPostCommitFiberRoot()}})),r},cA=e=>{const t=new Map;for(let r=0,a=e.length;r<a;r++){const s=e[r];if(!s.componentName)continue;const l=t.get(s.componentName)??[],u=CE([{aggregatedCount:1,computedKey:null,name:s.componentName,frame:null,...s,changes:{type:s.changes.reduce((h,v)=>h|v.type,0),unstable:s.changes.some(h=>h.unstable)},phase:s.phase,computedCurrent:null}]);if(!u)continue;let d=null,f=null;if(s.changes)for(let h=0,v=s.changes.length;h<v;h++){const{name:g,prevValue:b,nextValue:w,unstable:S,type:T}=s.changes[h];T===1?(d??(d={}),f??(f={}),d[`${S?"⚠️":""}${g} (prev)`]=b,f[`${S?"⚠️":""}${g} (next)`]=w):l.push({prev:b,next:w,type:T===4?"context":"state",unstable:S??!1})}d&&f&&l.push({prev:d,next:f,type:"props",unstable:!1}),t.set(u,l)}for(const[r,a]of Array.from(t.entries())){console.group(`%c${r}`,"background: hsla(0,0%,70%,.3); border-radius:3px; padding: 0 2px;");for(const{type:s,prev:l,next:u,unstable:d}of a)console.log(`${s}:`,d?"⚠️":"",l,"!==",u);console.groupEnd()}},uA=()=>{if(window.hideIntro){window.hideIntro=void 0;return}console.log("%c[·] %cReact Scan","font-weight:bold;color:#7a68e8;font-size:20px;","font-weight:bold;font-size:14px;"),console.log("Try React Scan Monitoring to target performance issues in production: https://react-scan.com/monitoring")},yw=7,dA="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace",fA=.1,Vc=(e,t)=>Math.floor(e+(t-e)*fA),hA=4,$u=40,Kh=45,Wh="115,97,230";function pA(e,t){return t[0]-e[0]}function mA(e){return[...e.entries()].sort(pA)}function bw([e,t]){let r=`${t.slice(0,hA).join(", ")} ×${e}`;return r.length>$u&&(r=`${r.slice(0,$u)}…`),r}var ww=e=>{const t=new Map;for(const{name:l,count:u}of e)t.set(l,(t.get(l)||0)+u);const r=new Map;for(const[l,u]of t){const d=r.get(u);d?d.push(l):r.set(u,[l])}const a=mA(r);let s=bw(a[0]);for(let l=1,u=a.length;l<u;l++)s+=", "+bw(a[l]);return s.length>$u?`${s.slice(0,$u)}…`:s},xw=e=>{let t=0;for(const r of e)t+=r.width*r.height;return t},gA=(e,t)=>{for(const{id:r,name:a,count:s,x:l,y:u,width:d,height:f,didCommit:h}of t){const v={id:r,name:a,count:s,x:l,y:u,width:d,height:f,frame:0,targetX:l,targetY:u,targetWidth:d,targetHeight:f,didCommit:h},g=String(v.id),b=e.get(g);b?(b.count++,b.frame=0,b.targetX=l,b.targetY=u,b.targetWidth=d,b.targetHeight=f,b.didCommit=h):e.set(g,v)}},vA=(e,t,r)=>{for(const a of e.values()){const s=a.x-t,l=a.y-r;a.targetX=s,a.targetY=l}},yA=(e,t)=>{const r=e.getContext("2d",{alpha:!0});return r&&r.scale(t,t),r},bA=(e,t,r,a)=>{e.clearRect(0,0,t.width/r,t.height/r);const s=new Map,l=new Map;for(const f of a.values()){const{x:h,y:v,width:g,height:b,targetX:w,targetY:S,targetWidth:T,targetHeight:k,frame:_}=f;w!==h&&(f.x=Vc(h,w)),S!==v&&(f.y=Vc(v,S)),T!==g&&(f.width=Vc(g,T)),k!==b&&(f.height=Vc(b,k));const E=`${w??h},${S??v}`,M=`${E},${T??g},${k??b}`,D=s.get(E);D?D.push(f):s.set(E,[f]);const j=1-_/Kh;f.frame++;const Y=l.get(M)||{x:h,y:v,width:g,height:b,alpha:j};j>Y.alpha&&(Y.alpha=j),l.set(M,Y)}for(const{x:f,y:h,width:v,height:g,alpha:b}of l.values())e.strokeStyle=`rgba(${Wh},${b})`,e.lineWidth=1,e.beginPath(),e.rect(f,h,v,g),e.stroke(),e.fillStyle=`rgba(${Wh},${b*.1})`,e.fill();e.font=`11px ${dA}`;const u=new Map;e.textRendering="optimizeSpeed";for(const f of s.values()){const h=f[0],{x:v,y:g,frame:b}=h,w=1-b/Kh,S=ww(f),{width:T}=e.measureText(S);if(u.set(`${v},${g},${T},${S}`,{text:S,width:T,height:11,alpha:w,x:v,y:g,outlines:f}),b>Kh)for(const _ of f)a.delete(String(_.id))}const d=Array.from(u.entries()).sort(([f,h],[v,g])=>xw(g.outlines)-xw(h.outlines));for(const[f,h]of d)if(u.has(f))for(const[v,g]of u.entries()){if(f===v)continue;const{x:b,y:w,width:S,height:T}=h,{x:k,y:_,width:E,height:M}=g;b+S>k&&k+E>b&&w+T>_&&_+M>w&&(h.text=ww(h.outlines.concat(g.outlines)),h.width=e.measureText(h.text).width,u.delete(v))}for(const f of u.values()){const{x:h,y:v,alpha:g,width:b,height:w,text:S}=f;let T=v-w-4;T<0&&(T=0),e.fillStyle=`rgba(${Wh},${g})`,e.fillRect(h,T,b+4,w+4),e.fillStyle=`rgba(255,255,255,${g})`,e.fillText(S,h+2,T+w)}return a.size>0},wA='"use strict";(()=>{var D="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";var M=(t,i)=>Math.floor(t+(i-t)*.1);var _="115,97,230";function F(t,i){return i[0]-t[0]}function I(t){return[...t.entries()].sort(F)}function $([t,i]){let o=`${i.slice(0,4).join(", ")} \\xD7${t}`;return o.length>40&&(o=`${o.slice(0,40)}\\u2026`),o}var S=t=>{let i=new Map;for(let{name:e,count:u}of t)i.set(e,(i.get(e)||0)+u);let o=new Map;for(let[e,u]of i){let A=o.get(u);A?A.push(e):o.set(u,[e])}let h=I(o),s=$(h[0]);for(let e=1,u=h.length;e<u;e++)s+=", "+$(h[e]);return s.length>40?`${s.slice(0,40)}\\u2026`:s},X=t=>{let i=0;for(let o of t)i+=o.width*o.height;return i};var N=(t,i)=>{let o=t.getContext("2d",{alpha:!0});return o&&o.scale(i,i),o},Y=(t,i,o,h)=>{t.clearRect(0,0,i.width/o,i.height/o);let s=new Map,e=new Map;for(let n of h.values()){let{x:r,y:c,width:a,height:g,targetX:l,targetY:d,targetWidth:f,targetHeight:p,frame:O}=n;l!==r&&(n.x=M(r,l)),d!==c&&(n.y=M(c,d)),f!==a&&(n.width=M(a,f)),p!==g&&(n.height=M(g,p));let w=`${l??r},${d??c}`,y=`${w},${f??a},${p??g}`,v=s.get(w);v?v.push(n):s.set(w,[n]);let E=1-O/45;n.frame++;let x=e.get(y)||{x:r,y:c,width:a,height:g,alpha:E};E>x.alpha&&(x.alpha=E),e.set(y,x)}for(let{x:n,y:r,width:c,height:a,alpha:g}of e.values())t.strokeStyle=`rgba(${_},${g})`,t.lineWidth=1,t.beginPath(),t.rect(n,r,c,a),t.stroke(),t.fillStyle=`rgba(${_},${g*.1})`,t.fill();t.font=`11px ${D}`;let u=new Map;t.textRendering="optimizeSpeed";for(let n of s.values()){let r=n[0],{x:c,y:a,frame:g}=r,l=1-g/45,d=S(n),{width:f}=t.measureText(d),p=11;u.set(`${c},${a},${f},${d}`,{text:d,width:f,height:p,alpha:l,x:c,y:a,outlines:n});let O=a-p-4;if(O<0&&(O=0),g>45)for(let w of n)h.delete(String(w.id))}let A=Array.from(u.entries()).sort(([n,r],[c,a])=>X(a.outlines)-X(r.outlines));for(let[n,r]of A)if(u.has(n))for(let[c,a]of u.entries()){if(n===c)continue;let{x:g,y:l,width:d,height:f}=r,{x:p,y:O,width:w,height:y}=a;g+d>p&&p+w>g&&l+f>O&&O+y>l&&(r.text=S(r.outlines.concat(a.outlines)),r.width=t.measureText(r.text).width,u.delete(c))}for(let n of u.values()){let{x:r,y:c,alpha:a,width:g,height:l,text:d}=n,f=c-l-4;f<0&&(f=0),t.fillStyle=`rgba(${_},${a})`,t.fillRect(r,f,g+4,l+4),t.fillStyle=`rgba(255,255,255,${a})`,t.fillText(d,r+2,f+l)}return h.size>0};var m=null,L=null,b=1,T=new Map,C=null,R=()=>{if(!L||!m)return;Y(L,m,b,T)?C=requestAnimationFrame(R):C=null};self.onmessage=t=>{let{type:i}=t.data;if(i==="init"&&(m=t.data.canvas,b=t.data.dpr,m&&(m.width=t.data.width,m.height=t.data.height,L=N(m,b))),!(!m||!L)){if(i==="resize"){b=t.data.dpr,m.width=t.data.width*b,m.height=t.data.height*b,L.resetTransform(),L.scale(b,b),R();return}if(i==="draw-outlines"){let{data:o,names:h}=t.data,s=new Float32Array(o);for(let e=0;e<s.length;e+=7){let u=s[e+2],A=s[e+3],n=s[e+4],r=s[e+5],c=s[e+6],a={id:s[e],name:h[e/7],count:s[e+1],x:u,y:A,width:n,height:r,frame:0,targetX:u,targetY:A,targetWidth:n,targetHeight:r,didCommit:c},g=String(a.id),l=T.get(g);l?(l.count++,l.frame=0,l.targetX=u,l.targetY=A,l.targetWidth=n,l.targetHeight=r,l.didCommit=c):T.set(g,a)}C||(C=requestAnimationFrame(R));return}if(i==="scroll"){let{deltaX:o,deltaY:h}=t.data;for(let s of T.values()){let e=s.x-o,u=s.y-h;s.targetX=e,s.targetY=u}}}};})();\n',jn=null,Lu=null,oa=null,Rn=1,Hu=null,Zm=new Map,Vs=new Map,ho=new Set,xA=e=>{if(!ed(e))return;const t=typeof e.type=="string"?e.type:Nt(e);if(!t)return;const r=Vs.get(e),a=Hk(e),s=Mm(e);r?r.count++:(Vs.set(e,{name:t,count:1,elements:a.map(l=>l.stateNode),didCommit:s?1:0}),ho.add(e))},_A=e=>{const t=e[0];if(e.length===1)return t;let r,a,s,l;for(let u=0,d=e.length;u<d;u++){const f=e[u];r=r==null?f.x:Math.min(r,f.x),a=a==null?f.y:Math.min(a,f.y),s=s==null?f.x+f.width:Math.max(s,f.x+f.width),l=l==null?f.y+f.height:Math.max(l,f.y+f.height)}return r==null||a==null||s==null||l==null?e[0]:new DOMRect(r,a,s-r,l-a)};function SA(e,t){const r=[];for(const a of e){const s=a.target;this.seenElements.has(s)||(this.seenElements.add(s),r.push(a))}r.length>0&&this.resolveNext&&(this.resolveNext(r),this.resolveNext=null),this.seenElements.size===this.uniqueElements.size&&(t.disconnect(),this.done=!0,this.resolveNext&&this.resolveNext([]))}var Zx=async function*(e){const t={uniqueElements:new Set(e),seenElements:new Set,resolveNext:null,done:!1},r=new IntersectionObserver(SA.bind(t));for(const a of t.uniqueElements)r.observe(a);for(;!t.done;){const a=await new Promise(s=>{t.resolveNext=s});a.length>0&&(yield a)}},TA=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:ArrayBuffer,kA=async()=>{const e=[];for(const r of ho){const a=Vs.get(r);if(a)for(let s=0;s<a.elements.length;s++)a.elements[s]instanceof Element&&e.push(a.elements[s])}const t=new Map;for await(const r of Zx(e)){for(const u of r){const d=u.target,f=u.intersectionRect;u.isIntersecting&&f.width&&f.height&&t.set(d,f)}const a=[],s=[],l=[];for(const u of ho){const d=Vs.get(u);if(!d)continue;const f=[];for(let h=0;h<d.elements.length;h++){const v=d.elements[h],g=t.get(v);g&&f.push(g)}f.length&&(a.push(d),s.push(_A(f)),l.push(Ei(u)))}if(a.length>0){const u=new TA(a.length*yw*4),d=new Float32Array(u),f=new Array(a.length);let h;for(let v=0,g=a.length;v<g;v++){const b=a[v],w=l[v],{x:S,y:T,width:k,height:_}=s[v],{count:E,name:M,didCommit:D}=b;if(jn){const j=v*yw;d[j]=w,d[j+1]=E,d[j+2]=S,d[j+3]=T,d[j+4]=k,d[j+5]=_,d[j+6]=D,f[v]=M}else h||(h=new Array(a.length)),h[v]={id:w,name:M,count:E,x:S,y:T,width:k,height:_,didCommit:D}}jn?jn.postMessage({type:"draw-outlines",data:u,names:f}):Lu&&oa&&h&&(gA(Zm,h),Hu||(Hu=requestAnimationFrame(Jm)))}}for(const r of ho)Vs.delete(r),ho.delete(r)},Jm=()=>{if(!oa||!Lu)return;bA(oa,Lu,Rn,Zm)?Hu=requestAnimationFrame(Jm):Hu=null},EA=typeof OffscreenCanvas<"u"&&typeof Worker<"u",_w=()=>Math.min(window.devicePixelRatio||1,2),CA=()=>{AA();const e=document.createElement("div");e.setAttribute("data-react-scan","true");const t=e.attachShadow({mode:"open"}),r=document.createElement("canvas");if(r.style.position="fixed",r.style.top="0",r.style.left="0",r.style.pointerEvents="none",r.style.zIndex="2147483646",r.setAttribute("aria-hidden","true"),t.appendChild(r),!r)return null;Rn=_w(),Lu=r;const{innerWidth:a,innerHeight:s}=window;r.style.width=`${a}px`,r.style.height=`${s}px`;const l=a*Rn,u=s*Rn;if(r.width=l,r.height=u,EA&&!window.__REACT_SCAN_EXTENSION__)try{jn=new Worker(URL.createObjectURL(new Blob([wA],{type:"application/javascript"})));const g=r.transferControlToOffscreen();jn==null||jn.postMessage({type:"init",canvas:g,width:r.width,height:r.height,dpr:Rn},[g])}catch(g){console.warn("Failed to initialize OffscreenCanvas worker:",g)}jn||(oa=yA(r,Rn));let d=!1;window.addEventListener("resize",()=>{d||(d=!0,setTimeout(()=>{const g=window.innerWidth,b=window.innerHeight;Rn=_w(),r.style.width=`${g}px`,r.style.height=`${b}px`,jn?jn.postMessage({type:"resize",width:g,height:b,dpr:Rn}):(r.width=g*Rn,r.height=b*Rn,oa&&(oa.resetTransform(),oa.scale(Rn,Rn)),Jm()),d=!1}))});let f=window.scrollX,h=window.scrollY,v=!1;return window.addEventListener("scroll",()=>{v||(v=!0,setTimeout(()=>{const{scrollX:g,scrollY:b}=window,w=g-f,S=b-h;f=g,h=b,jn?jn.postMessage({type:"scroll",deltaX:w,deltaY:S}):requestAnimationFrame(vA.bind(null,Zm,w,S)),v=!1},32))}),setInterval(()=>{ho.size&&requestAnimationFrame(kA)},32),t.appendChild(r),e},Sw=()=>globalThis.__REACT_SCAN_STOP__,AA=()=>{const e=document.querySelector("[data-react-scan]");e&&e.remove()},MA=e=>{if(ed(e)&&Ue.options.value.showToolbar!==!1&&ie.inspectState.value.kind==="focused"){const t=e,{selfTime:r}=ra(e),a=Nt(e.type),s=Ei(t),l=ie.reportData.get(s),u=(l==null?void 0:l.count)??0,d=(l==null?void 0:l.time)??0,f=[],h=ie.changesListeners.get(Ei(e));if(h!=null&&h.length){const g=Yx(e).map(T=>({type:1,name:T.name,value:T.value,prevValue:T.prevValue,unstable:!1})),b=tA(e),S=iA(e).map(T=>({name:T.name,type:4,value:T.value,contextType:T.contextType}));h.forEach(T=>{T({propsChanges:g,stateChanges:b,contextChanges:S})})}const v={count:u+1,time:d+r||0,renders:[],displayName:a,type:pa(e.type)||null,changes:f};ie.reportData.set(s,v),Wp=!0}},Wp=!1,Tw,OA=()=>{clearInterval(Tw),Tw=setInterval(()=>{Wp&&(ie.lastReportTime.value=Date.now(),Wp=!1)},50)},NA=e=>!SM.has(e.memoizedProps),zA=e=>{if(Sw())return;let t,r=!1;const a=()=>{r||(t&&cancelAnimationFrame(t),t=requestAnimationFrame(()=>{r=!0;const l=CA();l&&document.documentElement.appendChild(l),e()}))},s=lA("react-scan-devtools-0.1.0",{onCommitStart:()=>{var l,u;(u=(l=Ue.options.value).onCommitStart)==null||u.call(l)},onActive:()=>{Sw()||(a(),window.__REACT_SCAN_EXTENSION__||(globalThis.__REACT_SCAN__={ReactScanInternals:Ue}),OA(),uA())},onError:()=>{},isValidFiber:NA,onRender:(l,u)=>{var v,g,b,w;ed(l)&&((v=ie.interactionListeningForRenders)==null||v.call(ie,l,u));const d=(g=Ue.instrumentation)==null?void 0:g.isPaused.value,f=ie.inspectState.value.kind==="inspect-off"||ie.inspectState.value.kind==="uninitialized";d&&f||(d||xA(l),Ue.options.value.log&&cA(u),ie.inspectState.value.kind==="focused"&&(Ym.value=Date.now()),f||MA(l),(w=(b=Ue.options.value).onRender)==null||w.call(b,l,u))},onCommitFinish:()=>{var l,u;a(),(u=(l=Ue.options.value).onCommitFinish)==null||u.call(l)},onPostCommitFiberRoot(){a()},trackChanges:!1});Ue.instrumentation=s},DA=`*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}/*
! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}
.\\!container {
  width: 100% !important;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {

  .\\!container {
    max-width: 640px !important;
  }

  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {

  .\\!container {
    max-width: 768px !important;
  }

  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {

  .\\!container {
    max-width: 1024px !important;
  }

  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {

  .\\!container {
    max-width: 1280px !important;
  }

  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {

  .\\!container {
    max-width: 1536px !important;
  }

  .container {
    max-width: 1536px;
  }
}
.pointer-events-none {
  pointer-events: none;
}
.pointer-events-auto {
  pointer-events: auto;
}
.visible {
  visibility: visible;
}
.static {
  position: static;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.sticky {
  position: sticky;
}
.inset-0 {
  inset: 0px;
}
.inset-x-1 {
  left: 4px;
  right: 4px;
}
.inset-y-0 {
  top: 0px;
  bottom: 0px;
}
.-right-1 {
  right: -4px;
}
.-right-2\\.5 {
  right: -10px;
}
.-top-1 {
  top: -4px;
}
.-top-2\\.5 {
  top: -10px;
}
.bottom-0 {
  bottom: 0px;
}
.bottom-4 {
  bottom: 16px;
}
.left-0 {
  left: 0px;
}
.left-3 {
  left: 12px;
}
.right-0 {
  right: 0px;
}
.right-0\\.5 {
  right: 2px;
}
.right-2 {
  right: 8px;
}
.right-4 {
  right: 16px;
}
.top-0 {
  top: 0px;
}
.top-0\\.5 {
  top: 2px;
}
.top-1\\/2 {
  top: 50%;
}
.top-2 {
  top: 8px;
}
.z-10 {
  z-index: 10;
}
.z-100 {
  z-index: 100;
}
.z-50 {
  z-index: 50;
}
.z-\\[124124124124\\] {
  z-index: 124124124124;
}
.z-\\[214748365\\] {
  z-index: 214748365;
}
.z-\\[214748367\\] {
  z-index: 214748367;
}
.m-\\[2px\\] {
  margin: 2px;
}
.mx-0\\.5 {
  margin-left: 2px;
  margin-right: 2px;
}
.\\!ml-0 {
  margin-left: 0px !important;
}
.mb-1\\.5 {
  margin-bottom: 6px;
}
.mb-2 {
  margin-bottom: 8px;
}
.mb-3 {
  margin-bottom: 12px;
}
.mb-4 {
  margin-bottom: 16px;
}
.mb-px {
  margin-bottom: 1px;
}
.ml-1 {
  margin-left: 4px;
}
.ml-1\\.5 {
  margin-left: 6px;
}
.ml-auto {
  margin-left: auto;
}
.mr-0\\.5 {
  margin-right: 2px;
}
.mr-1 {
  margin-right: 4px;
}
.mr-1\\.5 {
  margin-right: 6px;
}
.mr-16 {
  margin-right: 64px;
}
.mr-auto {
  margin-right: auto;
}
.mt-0\\.5 {
  margin-top: 2px;
}
.mt-1 {
  margin-top: 4px;
}
.mt-4 {
  margin-top: 16px;
}
.block {
  display: block;
}
.inline {
  display: inline;
}
.flex {
  display: flex;
}
.table {
  display: table;
}
.hidden {
  display: none;
}
.aspect-square {
  aspect-ratio: 1 / 1;
}
.h-1 {
  height: 4px;
}
.h-1\\.5 {
  height: 6px;
}
.h-10 {
  height: 40px;
}
.h-12 {
  height: 48px;
}
.h-4 {
  height: 16px;
}
.h-4\\/5 {
  height: 80%;
}
.h-6 {
  height: 24px;
}
.h-7 {
  height: 28px;
}
.h-8 {
  height: 32px;
}
.h-\\[150px\\] {
  height: 150px;
}
.h-\\[235px\\] {
  height: 235px;
}
.h-\\[28px\\] {
  height: 28px;
}
.h-\\[48px\\] {
  height: 48px;
}
.h-\\[50px\\] {
  height: 50px;
}
.h-\\[calc\\(100\\%-150px\\)\\] {
  height: calc(100% - 150px);
}
.h-\\[calc\\(100\\%-200px\\)\\] {
  height: calc(100% - 200px);
}
.h-\\[calc\\(100\\%-25px\\)\\] {
  height: calc(100% - 25px);
}
.h-\\[calc\\(100\\%-40px\\)\\] {
  height: calc(100% - 40px);
}
.h-\\[calc\\(100\\%-48px\\)\\] {
  height: calc(100% - 48px);
}
.h-fit {
  height: -moz-fit-content;
  height: fit-content;
}
.h-full {
  height: 100%;
}
.h-screen {
  height: 100vh;
}
.max-h-0 {
  max-height: 0px;
}
.max-h-40 {
  max-height: 160px;
}
.max-h-9 {
  max-height: 36px;
}
.min-h-9 {
  min-height: 36px;
}
.min-h-\\[48px\\] {
  min-height: 48px;
}
.min-h-fit {
  min-height: -moz-fit-content;
  min-height: fit-content;
}
.w-1 {
  width: 4px;
}
.w-1\\/2 {
  width: 50%;
}
.w-1\\/3 {
  width: 33.333333%;
}
.w-2\\/4 {
  width: 50%;
}
.w-3 {
  width: 12px;
}
.w-4 {
  width: 16px;
}
.w-4\\/5 {
  width: 80%;
}
.w-6 {
  width: 24px;
}
.w-80 {
  width: 320px;
}
.w-\\[20px\\] {
  width: 20px;
}
.w-\\[72px\\] {
  width: 72px;
}
.w-\\[90\\%\\] {
  width: 90%;
}
.w-\\[calc\\(100\\%-200px\\)\\] {
  width: calc(100% - 200px);
}
.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}
.w-full {
  width: 100%;
}
.w-px {
  width: 1px;
}
.w-screen {
  width: 100vw;
}
.min-w-0 {
  min-width: 0px;
}
.min-w-\\[200px\\] {
  min-width: 200px;
}
.min-w-fit {
  min-width: -moz-fit-content;
  min-width: fit-content;
}
.max-w-md {
  max-width: 448px;
}
.flex-1 {
  flex: 1 1 0%;
}
.shrink-0 {
  flex-shrink: 0;
}
.grow {
  flex-grow: 1;
}
.-translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-\\[200\\%\\] {
  --tw-translate-y: -200%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-1 {
  --tw-translate-y: 4px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-rotate-90 {
  --tw-rotate: -90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-0 {
  --tw-rotate: 0deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-90 {
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-110 {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes fadeIn {

  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.animate-fade-in {
  animation: fadeIn ease-in forwards;
}
.cursor-default {
  cursor: default;
}
.cursor-e-resize {
  cursor: e-resize;
}
.cursor-ew-resize {
  cursor: ew-resize;
}
.cursor-move {
  cursor: move;
}
.cursor-nesw-resize {
  cursor: nesw-resize;
}
.cursor-ns-resize {
  cursor: ns-resize;
}
.cursor-nwse-resize {
  cursor: nwse-resize;
}
.cursor-pointer {
  cursor: pointer;
}
.cursor-w-resize {
  cursor: w-resize;
}
.select-none {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.resize {
  resize: both;
}
.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.flex-col {
  flex-direction: column;
}
.items-start {
  align-items: flex-start;
}
.items-end {
  align-items: flex-end;
}
.items-center {
  align-items: center;
}
.items-stretch {
  align-items: stretch;
}
.justify-start {
  justify-content: flex-start;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-0\\.5 {
  gap: 2px;
}
.gap-1 {
  gap: 4px;
}
.gap-1\\.5 {
  gap: 6px;
}
.gap-2 {
  gap: 8px;
}
.gap-4 {
  gap: 16px;
}
.gap-x-0\\.5 {
  -moz-column-gap: 2px;
       column-gap: 2px;
}
.gap-x-1 {
  -moz-column-gap: 4px;
       column-gap: 4px;
}
.gap-x-1\\.5 {
  -moz-column-gap: 6px;
       column-gap: 6px;
}
.gap-x-2 {
  -moz-column-gap: 8px;
       column-gap: 8px;
}
.gap-x-3 {
  -moz-column-gap: 12px;
       column-gap: 12px;
}
.gap-x-4 {
  -moz-column-gap: 16px;
       column-gap: 16px;
}
.gap-y-0\\.5 {
  row-gap: 2px;
}
.gap-y-1 {
  row-gap: 4px;
}
.gap-y-2 {
  row-gap: 8px;
}
.gap-y-4 {
  row-gap: 16px;
}
.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(6px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(6px * var(--tw-space-y-reverse));
}
.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}
.divide-zinc-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-divide-opacity, 1));
}
.place-self-center {
  place-self: center;
}
.self-end {
  align-self: flex-end;
}
.overflow-auto {
  overflow: auto;
}
.overflow-hidden {
  overflow: hidden;
}
.\\!overflow-visible {
  overflow: visible !important;
}
.overflow-x-auto {
  overflow-x: auto;
}
.overflow-y-auto {
  overflow-y: auto;
}
.overflow-x-hidden {
  overflow-x: hidden;
}
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.whitespace-nowrap {
  white-space: nowrap;
}
.whitespace-pre-wrap {
  white-space: pre-wrap;
}
.text-wrap {
  text-wrap: wrap;
}
.break-words {
  overflow-wrap: break-word;
}
.break-all {
  word-break: break-all;
}
.rounded {
  border-radius: 4px;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-lg {
  border-radius: 8px;
}
.rounded-md {
  border-radius: 6px;
}
.rounded-sm {
  border-radius: 2px;
}
.rounded-l-md {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.rounded-l-sm {
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.rounded-r-md {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
.rounded-r-sm {
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
.rounded-t-lg {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.rounded-t-sm {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}
.rounded-bl-lg {
  border-bottom-left-radius: 8px;
}
.rounded-br-lg {
  border-bottom-right-radius: 8px;
}
.rounded-tl-lg {
  border-top-left-radius: 8px;
}
.rounded-tr-lg {
  border-top-right-radius: 8px;
}
.border {
  border-width: 1px;
}
.border-4 {
  border-width: 4px;
}
.border-b {
  border-bottom-width: 1px;
}
.border-l {
  border-left-width: 1px;
}
.border-l-0 {
  border-left-width: 0px;
}
.border-l-1 {
  border-left-width: 1px;
}
.border-r {
  border-right-width: 1px;
}
.border-t {
  border-top-width: 1px;
}
.border-none {
  border-style: none;
}
.\\!border-red-500 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(239 68 68 / var(--tw-border-opacity, 1)) !important;
}
.border-\\[\\#1e1e1e\\] {
  --tw-border-opacity: 1;
  border-color: rgb(30 30 30 / var(--tw-border-opacity, 1));
}
.border-\\[\\#222\\] {
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
}
.border-\\[\\#27272A\\] {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-border-opacity, 1));
}
.border-\\[\\#333\\] {
  --tw-border-opacity: 1;
  border-color: rgb(51 51 51 / var(--tw-border-opacity, 1));
}
.border-transparent {
  border-color: transparent;
}
.border-zinc-800 {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-border-opacity, 1));
}
.bg-\\[\\#0A0A0A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(10 10 10 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#141414\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(20 20 20 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#18181B\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(24 24 27 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#18181B\\]\\/50 {
  background-color: rgb(24 24 27 / 0.5);
}
.bg-\\[\\#1D3A66\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(29 58 102 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1E1E1E\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(30 30 30 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1a2a1a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(26 42 26 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1e1e1e\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(30 30 30 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#214379d4\\] {
  background-color: #214379d4;
}
.bg-\\[\\#27272A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#2a1515\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(42 21 21 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#412162\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(65 33 98 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#44444a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(68 68 74 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#4b4b4b\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(75 75 75 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#5f3f9a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(95 63 154 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#5f3f9a\\]\\/40 {
  background-color: rgb(95 63 154 / 0.4);
}
.bg-\\[\\#6a369e\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(106 54 158 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#7521c8\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(117 33 200 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#8e61e3\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(142 97 227 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#EFD81A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(239 216 26 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#b77116\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(183 113 22 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#b94040\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(185 64 64 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#d36cff\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(211 108 255 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#efd81a6b\\] {
  background-color: #efd81a6b;
}
.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
}
.bg-black\\/40 {
  background-color: rgb(0 0 0 / 0.4);
}
.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));
}
.bg-green-500\\/50 {
  background-color: rgb(34 197 94 / 0.5);
}
.bg-green-500\\/60 {
  background-color: rgb(34 197 94 / 0.6);
}
.bg-neutral-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(64 64 64 / var(--tw-bg-opacity, 1));
}
.bg-purple-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(168 85 247 / var(--tw-bg-opacity, 1));
}
.bg-purple-500\\/90 {
  background-color: rgb(168 85 247 / 0.9);
}
.bg-purple-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(107 33 168 / var(--tw-bg-opacity, 1));
}
.bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity, 1));
}
.bg-red-500\\/90 {
  background-color: rgb(239 68 68 / 0.9);
}
.bg-red-950\\/50 {
  background-color: rgb(69 10 10 / 0.5);
}
.bg-transparent {
  background-color: transparent;
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
}
.bg-yellow-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 224 71 / var(--tw-bg-opacity, 1));
}
.bg-zinc-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1));
}
.bg-zinc-900\\/30 {
  background-color: rgb(24 24 27 / 0.3);
}
.bg-zinc-900\\/50 {
  background-color: rgb(24 24 27 / 0.5);
}
.p-0 {
  padding: 0px;
}
.p-1 {
  padding: 4px;
}
.p-2 {
  padding: 8px;
}
.p-3 {
  padding: 12px;
}
.p-4 {
  padding: 16px;
}
.p-5 {
  padding: 20px;
}
.p-6 {
  padding: 24px;
}
.px-1 {
  padding-left: 4px;
  padding-right: 4px;
}
.px-1\\.5 {
  padding-left: 6px;
  padding-right: 6px;
}
.px-2 {
  padding-left: 8px;
  padding-right: 8px;
}
.px-2\\.5 {
  padding-left: 10px;
  padding-right: 10px;
}
.px-3 {
  padding-left: 12px;
  padding-right: 12px;
}
.px-4 {
  padding-left: 16px;
  padding-right: 16px;
}
.py-0\\.5 {
  padding-top: 2px;
  padding-bottom: 2px;
}
.py-1 {
  padding-top: 4px;
  padding-bottom: 4px;
}
.py-1\\.5 {
  padding-top: 6px;
  padding-bottom: 6px;
}
.py-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}
.py-3 {
  padding-top: 12px;
  padding-bottom: 12px;
}
.py-4 {
  padding-top: 16px;
  padding-bottom: 16px;
}
.py-\\[1px\\] {
  padding-top: 1px;
  padding-bottom: 1px;
}
.py-\\[3px\\] {
  padding-top: 3px;
  padding-bottom: 3px;
}
.py-\\[5px\\] {
  padding-top: 5px;
  padding-bottom: 5px;
}
.pb-2 {
  padding-bottom: 8px;
}
.pl-1 {
  padding-left: 4px;
}
.pl-2 {
  padding-left: 8px;
}
.pl-2\\.5 {
  padding-left: 10px;
}
.pl-3 {
  padding-left: 12px;
}
.pl-5 {
  padding-left: 20px;
}
.pl-6 {
  padding-left: 24px;
}
.pr-1 {
  padding-right: 4px;
}
.pr-1\\.5 {
  padding-right: 6px;
}
.pr-2 {
  padding-right: 8px;
}
.pr-2\\.5 {
  padding-right: 10px;
}
.pt-0 {
  padding-top: 0px;
}
.pt-2 {
  padding-top: 8px;
}
.pt-5 {
  padding-top: 20px;
}
.text-left {
  text-align: left;
}
.font-mono {
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
}
.text-\\[10px\\] {
  font-size: 10px;
}
.text-\\[11px\\] {
  font-size: 11px;
}
.text-\\[13px\\] {
  font-size: 13px;
}
.text-\\[14px\\] {
  font-size: 14px;
}
.text-\\[17px\\] {
  font-size: 17px;
}
.text-\\[8px\\] {
  font-size: 8px;
}
.text-sm {
  font-size: 14px;
  line-height: 20px;
}
.text-xs {
  font-size: 12px;
  line-height: 16px;
}
.font-bold {
  font-weight: 700;
}
.font-medium {
  font-weight: 500;
}
.font-semibold {
  font-weight: 600;
}
.uppercase {
  text-transform: uppercase;
}
.lowercase {
  text-transform: lowercase;
}
.capitalize {
  text-transform: capitalize;
}
.italic {
  font-style: italic;
}
.leading-6 {
  line-height: 24px;
}
.leading-none {
  line-height: 1;
}
.tracking-wide {
  letter-spacing: 0.025em;
}
.text-\\[\\#4ade80\\] {
  --tw-text-opacity: 1;
  color: rgb(74 222 128 / var(--tw-text-opacity, 1));
}
.text-\\[\\#5a5a5a\\] {
  --tw-text-opacity: 1;
  color: rgb(90 90 90 / var(--tw-text-opacity, 1));
}
.text-\\[\\#65656D\\] {
  --tw-text-opacity: 1;
  color: rgb(101 101 109 / var(--tw-text-opacity, 1));
}
.text-\\[\\#666\\] {
  --tw-text-opacity: 1;
  color: rgb(102 102 102 / var(--tw-text-opacity, 1));
}
.text-\\[\\#6E6E77\\] {
  --tw-text-opacity: 1;
  color: rgb(110 110 119 / var(--tw-text-opacity, 1));
}
.text-\\[\\#6F6F78\\] {
  --tw-text-opacity: 1;
  color: rgb(111 111 120 / var(--tw-text-opacity, 1));
}
.text-\\[\\#7346a0\\] {
  --tw-text-opacity: 1;
  color: rgb(115 70 160 / var(--tw-text-opacity, 1));
}
.text-\\[\\#737373\\] {
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}
.text-\\[\\#888\\] {
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
}
.text-\\[\\#8E61E3\\] {
  --tw-text-opacity: 1;
  color: rgb(142 97 227 / var(--tw-text-opacity, 1));
}
.text-\\[\\#999\\] {
  --tw-text-opacity: 1;
  color: rgb(153 153 153 / var(--tw-text-opacity, 1));
}
.text-\\[\\#A1A1AA\\] {
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity, 1));
}
.text-\\[\\#A855F7\\] {
  --tw-text-opacity: 1;
  color: rgb(168 85 247 / var(--tw-text-opacity, 1));
}
.text-\\[\\#E4E4E7\\] {
  --tw-text-opacity: 1;
  color: rgb(228 228 231 / var(--tw-text-opacity, 1));
}
.text-\\[\\#d36cff\\] {
  --tw-text-opacity: 1;
  color: rgb(211 108 255 / var(--tw-text-opacity, 1));
}
.text-\\[\\#f87171\\] {
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity, 1));
}
.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity, 1));
}
.text-gray-100 {
  --tw-text-opacity: 1;
  color: rgb(243 244 246 / var(--tw-text-opacity, 1));
}
.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity, 1));
}
.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity, 1));
}
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
}
.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(34 197 94 / var(--tw-text-opacity, 1));
}
.text-neutral-300 {
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
}
.text-neutral-400 {
  --tw-text-opacity: 1;
  color: rgb(163 163 163 / var(--tw-text-opacity, 1));
}
.text-neutral-500 {
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}
.text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(192 132 252 / var(--tw-text-opacity, 1));
}
.text-red-300 {
  --tw-text-opacity: 1;
  color: rgb(252 165 165 / var(--tw-text-opacity, 1));
}
.text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity, 1));
}
.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity, 1));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}
.text-white\\/30 {
  color: rgb(255 255 255 / 0.3);
}
.text-white\\/70 {
  color: rgb(255 255 255 / 0.7);
}
.text-yellow-300 {
  --tw-text-opacity: 1;
  color: rgb(253 224 71 / var(--tw-text-opacity, 1));
}
.text-yellow-500 {
  --tw-text-opacity: 1;
  color: rgb(234 179 8 / var(--tw-text-opacity, 1));
}
.text-zinc-200 {
  --tw-text-opacity: 1;
  color: rgb(228 228 231 / var(--tw-text-opacity, 1));
}
.text-zinc-400 {
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity, 1));
}
.text-zinc-500 {
  --tw-text-opacity: 1;
  color: rgb(113 113 122 / var(--tw-text-opacity, 1));
}
.text-zinc-600 {
  --tw-text-opacity: 1;
  color: rgb(82 82 91 / var(--tw-text-opacity, 1));
}
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
.opacity-50 {
  opacity: 0.5;
}
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.outline {
  outline-style: solid;
}
.ring-1 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-white\\/\\[0\\.08\\] {
  --tw-ring-color: rgb(255 255 255 / 0.08);
}
.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.\\!filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.backdrop-blur-sm {
  --tw-backdrop-blur: blur(4px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[border-radius\\] {
  transition-property: border-radius;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[color\\2c transform\\] {
  transition-property: color,transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[max-height\\] {
  transition-property: max-height;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[opacity\\] {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-none {
  transition-property: none;
}
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.delay-0 {
  transition-delay: 0s;
}
.delay-150 {
  transition-delay: 150ms;
}
.delay-300 {
  transition-delay: 300ms;
}
.\\!duration-0 {
  transition-duration: 0s !important;
}
.duration-0 {
  transition-duration: 0s;
}
.duration-200 {
  transition-duration: 200ms;
}
.duration-300 {
  transition-duration: 300ms;
}
.ease-\\[cubic-bezier\\(0\\.23\\2c 1\\2c 0\\.32\\2c 1\\)\\] {
  transition-timing-function: cubic-bezier(0.23,1,0.32,1);
}
.ease-\\[cubic-bezier\\(0\\.25\\2c 0\\.1\\2c 0\\.25\\2c 1\\)\\] {
  transition-timing-function: cubic-bezier(0.25,0.1,0.25,1);
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.will-change-transform {
  will-change: transform;
}
.animation-duration-300 {
  animation-duration: .3s;
}
.animation-delay-300 {
  animation-delay: .3s;
}
.\\[touch-action\\:none\\] {
  touch-action: none;
}

* {
  outline: none !important;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;

  /* WebKit (Chrome, Safari, Edge) specific scrollbar styles */
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.3);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }
}

@-moz-document url-prefix() {
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
    scrollbar-width: 6px;
  }
}

button:hover {
  background-image: none;
}

button {
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-style: none;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-timing-function: linear;
  cursor: pointer;
}

input {
  border-style: none;
  background-color: transparent;
  background-image: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

input::-moz-placeholder {
  font-size: 12px;
  line-height: 16px;
  font-style: italic;
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}

input::placeholder {
  font-size: 12px;
  line-height: 16px;
  font-style: italic;
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}

input:-moz-placeholder-shown {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

input:placeholder-shown {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

svg {
  height: auto;
  width: auto;
  pointer-events: none;
}

/*
  Using CSS content with data attributes is more performant than:
  1. React re-renders with JSX text content
  2. Direct DOM manipulation methods:
     - element.textContent (creates/updates text nodes, triggers repaint)
     - element.innerText (triggers reflow by computing styles & layout)
     - element.innerHTML (heavy parsing, triggers reflow, security risks)
  3. Multiple data attributes with complex CSS concatenation

  This approach:
  - Avoids React reconciliation
  - Uses browser's native CSS engine (optimized content updates)
  - Minimizes main thread work
  - Reduces DOM operations
  - Avoids forced reflows (layout recalculation)
  - Only triggers necessary repaints
  - Keeps pseudo-element updates in render layer
*/
.with-data-text {
  overflow: hidden;
  &::before {
    content: attr(data-text);
  }
  &::before {
    display: block;
  }
  &::before {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

#react-scan-toolbar {
  position: fixed;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  font-size: 13px;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: move;
  opacity: 0;
  z-index: 2147483678;
}

@keyframes fadeIn {

  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

#react-scan-toolbar {
  animation: fadeIn ease-in forwards;
  animation-duration: .3s;
  animation-delay: .3s;
  --tw-shadow: 0 4px 12px rgba(0,0,0,0.2);
  --tw-shadow-colored: 0 4px 12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  place-self: start;

  /* [CURSOR GENERATED] Anti-blur fixes:
   * We removed will-change-transform and replaced it with these properties
   * because will-change was causing stacking context issues and inconsistent
   * text rendering. The new properties work together to force proper
   * GPU acceleration without z-index side effects:
   */
  transform: translate3d(
    0,
    0,
    0
  ); /* Forces GPU acceleration without causing stacking issues */
  backface-visibility: hidden; /* Prevents blurry text during transforms */
  perspective: 1000; /* Creates proper 3D context for crisp text */ /* Ensures consistent text rendering across browsers */
  transform-style: preserve-3d;
}

.button {
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background: rgba(255, 255, 255, 0.15);
  }
}

.resize-line-wrapper {
  position: absolute;
  overflow: hidden;
}

.resize-line {
  position: absolute;
  inset: 0px;
  overflow: hidden;
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  svg {
    position: absolute;
  }

  svg {
    top: 50%;
  }

  svg {
    left: 50%;
  }

  svg {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-right,
.resize-left {
  top: 0px;
  bottom: 0px;
  width: 24px;
  cursor: ew-resize;

  .resize-line-wrapper {
    top: 0px;
    bottom: 0px;
  }

  .resize-line-wrapper {
    width: 50%;
  }

  &:hover {
    .resize-line {
      --tw-translate-x: 0px;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }
}
.resize-right {
  right: 0px;
  --tw-translate-x: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    right: 0px;
  }
  .resize-line {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .resize-line {
    --tw-translate-x: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-left {
  left: 0px;
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    left: 0px;
  }
  .resize-line {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .resize-line {
    --tw-translate-x: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-top,
.resize-bottom {
  left: 0px;
  right: 0px;
  height: 24px;
  cursor: ns-resize;

  .resize-line-wrapper {
    left: 0px;
    right: 0px;
  }

  .resize-line-wrapper {
    height: 50%;
  }

  &:hover {
    .resize-line {
      --tw-translate-y: 0px;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }
}
.resize-top {
  top: 0px;
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    top: 0px;
  }
  .resize-line {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .resize-line {
    --tw-translate-y: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-bottom {
  bottom: 0px;
  --tw-translate-y: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    bottom: 0px;
  }
  .resize-line {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .resize-line {
    --tw-translate-y: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-header {
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 12px;
  padding-right: 8px;
  min-height: 36px;
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
  overflow: hidden;
  white-space: nowrap;
}

.react-scan-replay-button,
.react-scan-close-button {
  display: flex;
  align-items: center;
  padding: 4px;
  min-width: -moz-fit-content;
  min-width: fit-content;
  border-radius: 4px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.react-scan-replay-button {
  position: relative;
  overflow: hidden;
  background-color: rgb(168 85 247 / 0.5) !important;

  &:hover {
    background-color: rgb(168 85 247 / 0.25);
  }

  &.disabled {
    opacity: 0.5;
  }

  &.disabled {
    pointer-events: none;
  }

  &:before {
    content: "";
  }

  &:before {
    position: absolute;
  }

  &:before {
    inset: 0px;
  }

  &:before {
    --tw-translate-x: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &:before {
    animation: shimmer 2s infinite;
    background: linear-gradient(
      to right,
      transparent,
      rgba(142, 97, 227, 0.3),
      transparent
    );
  }
}

.react-scan-close-button {
  background-color: rgb(255 255 255 / 0.1);

  &:hover {
    background-color: rgb(255 255 255 / 0.15);
  }
}

@keyframes shimmer {
  100% {
    --tw-translate-x: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-section-header {
  position: sticky;
  z-index: 100;
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 12px;
  padding-right: 12px;
  height: 28px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(10 10 10 / var(--tw-bg-opacity, 1));
}

.react-scan-section {
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  padding-right: 8px;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
}

.react-scan-section::before {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
  --tw-content: attr(data-section);
  content: var(--tw-content);
}

.react-scan-section {
  font-size: 12px;
  line-height: 16px;

  > .react-scan-property {
    margin-left: -14px;
  }
}

.react-scan-property {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  border-left-width: 1px;
  border-color: transparent;
  overflow: hidden;
}

.react-scan-property-content {
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  min-height: 28px;
  max-width: 100%;
  overflow: hidden;
}

.react-scan-string {
  color: #9ecbff;
}

.react-scan-number {
  color: #79c7ff;
}

.react-scan-boolean {
  color: #56b6c2;
}

.react-scan-key {
  width: -moz-fit-content;
  width: fit-content;
  max-width: 240px;
  white-space: nowrap;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}

.react-scan-input {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
}

@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.react-scan-arrow {
  position: absolute;
  top: 0px;
  left: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 28px;
  width: 24px;
  --tw-translate-x: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  z-index: 10;

  > svg {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
}

.react-scan-expandable {
  display: grid;
  grid-template-rows: 0fr;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 75ms;

  &.react-scan-expanded {
    grid-template-rows: 1fr;
  }

  &.react-scan-expanded {
    transition-duration: 100ms;
  }
}

.react-scan-nested {
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
  }

  &:before {
    position: absolute;
  }

  &:before {
    top: 0px;
  }

  &:before {
    left: 0px;
  }

  &:before {
    height: 100%;
  }

  &:before {
    width: 1px;
  }

  &:before {
    background-color: rgb(107 114 128 / 0.3);
  }
}

.react-scan-settings {
  position: absolute;
  inset: 0px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));

  > div {
    display: flex;
  }

  > div {
    align-items: center;
  }

  > div {
    justify-content: space-between;
  }

  > div {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > div {
    transition-duration: 300ms;
  }
}

.react-scan-preview-line {
  position: relative;
  display: flex;
  min-height: 28px;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
}

.react-scan-flash-overlay {
  position: absolute;
  inset: 0px;
  opacity: 0;
  z-index: 50;
  pointer-events: none;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  mix-blend-mode: multiply;
  background-color: rgb(168 85 247 / 0.9);
}

.react-scan-toggle {
  position: relative;
  display: inline-flex;
  height: 24px;
  width: 40px;

  input {
    position: absolute;
  }

  input {
    inset: 0px;
  }

  input {
    z-index: 20;
  }

  input {
    opacity: 0;
  }

  input {
    cursor: pointer;
  }

  input {
    height: 100%;
  }

  input {
    width: 100%;
  }

  input:checked {
    + div {
      --tw-bg-opacity: 1;
      background-color: rgb(95 63 154 / var(--tw-bg-opacity, 1));
    }
    + div {

      &::before {
        --tw-translate-x: 100%;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }

      &::before {
        left: auto;
      }

      &::before {
        --tw-border-opacity: 1;
        border-color: rgb(95 63 154 / var(--tw-border-opacity, 1));
      }
    }
  }

  > div {
    position: absolute;
  }

  > div {
    inset: 4px;
  }

  > div {
    --tw-bg-opacity: 1;
    background-color: rgb(64 64 64 / var(--tw-bg-opacity, 1));
  }

  > div {
    border-radius: 9999px;
  }

  > div {
    pointer-events: none;
  }

  > div {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > div {
    transition-duration: 300ms;
  }

  > div {

    &:before {
      --tw-content: '';
      content: var(--tw-content);
    }

    &:before {
      position: absolute;
    }

    &:before {
      top: 50%;
    }

    &:before {
      left: 0px;
    }

    &:before {
      --tw-translate-y: -50%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }

    &:before {
      height: 16px;
    }

    &:before {
      width: 16px;
    }

    &:before {
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
    }

    &:before {
      border-width: 2px;
    }

    &:before {
      --tw-border-opacity: 1;
      border-color: rgb(64 64 64 / var(--tw-border-opacity, 1));
    }

    &:before {
      border-radius: 9999px;
    }

    &:before {
      --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }

    &:before {
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }

    &:before {
      transition-duration: 300ms;
    }
  }
}

.react-scan-flash-active {
  opacity: 0.4;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.react-scan-inspector-overlay {
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  &.fade-out {
    opacity: 0;
  }

  &.fade-in {
    opacity: 1;
  }
}

.react-scan-what-changed {
  ul {
    list-style-type: disc;
  }
  ul {
    padding-left: 16px;
  }

  li {
    white-space: nowrap;
  }

  li {
    > div {
      display: flex;
    }
    > div {
      align-items: center;
    }
    > div {
      justify-content: space-between;
    }
    > div {
      -moz-column-gap: 8px;
           column-gap: 8px;
    }
  }
}

.count-badge {
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  --tw-numeric-spacing: tabular-nums;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
  --tw-text-opacity: 1;
  color: rgb(168 85 247 / var(--tw-text-opacity, 1));
  background-color: rgb(168 85 247 / 0.1);
  transform-origin: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 150ms;
  transition-duration: 300ms;
}

@keyframes countFlash {

  0% {
    background-color: rgba(168, 85, 247, 0.3);
    transform: scale(1.05);
  }

  100% {
    background-color: rgba(168, 85, 247, 0.1);
    transform: scale(1);
  }
}

.count-flash {
  animation: countFlash .3s ease-out forwards;
}

@keyframes countFlashShake {

  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-5px);
  }

  50% {
    transform: translateX(5px) scale(1.1);
  }

  75% {
    transform: translateX(-5px);
  }

  100% {
    transform: translateX(0);
  }
}

.count-flash-white {
  animation: countFlashShake .3s ease-out forwards;
  transition-delay: 500ms !important;
}

.change-scope {
  display: flex;
  align-items: center;
  -moz-column-gap: 4px;
       column-gap: 4px;
  --tw-text-opacity: 1;
  color: rgb(102 102 102 / var(--tw-text-opacity, 1));
  font-size: 12px;
  line-height: 16px;
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;

  > div {
    padding-left: 6px;
    padding-right: 6px;
  }

  > div {
    padding-top: 2px;
    padding-bottom: 2px;
  }

  > div {
    transform-origin: center;
  }

  > div {
    border-radius: 4px;
  }

  > div {
    font-size: 12px;
    line-height: 16px;
  }

  > div {
    font-weight: 500;
  }

  > div {
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
  }

  > div {
    transform-origin: center;
  }

  > div {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > div {
    transition-delay: 150ms;
  }

  > div {
    transition-duration: 300ms;
  }

  > div {

    &[data-flash="true"] {
      background-color: rgb(168 85 247 / 0.1);
    }

    &[data-flash="true"] {
      --tw-text-opacity: 1;
      color: rgb(168 85 247 / var(--tw-text-opacity, 1));
    }
  }
}

.react-scan-slider {
  position: relative;
  min-height: 24px;

  > input {
    position: absolute;
  }

  > input {
    inset: 0px;
  }

  > input {
    opacity: 0;
  }

  &:before {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:before {
    position: absolute;
  }

  &:before {
    left: 0px;
    right: 0px;
  }

  &:before {
    top: 50%;
  }

  &:before {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &:before {
    height: 6px;
  }

  &:before {
    background-color: rgb(142 97 227 / 0.4);
  }

  &:before {
    border-radius: 8px;
  }

  &:before {
    pointer-events: none;
  }

  &:after {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:after {
    position: absolute;
  }

  &:after {
    left: 0px;
    right: 0px;
  }

  &:after {
    top: -8px;
    bottom: -8px;
  }

  &:after {
    z-index: -10;
  }

  span {
    position: absolute;
  }

  span {
    left: 0px;
  }

  span {
    top: 50%;
  }

  span {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  span {
    height: 10px;
  }

  span {
    width: 10px;
  }

  span {
    border-radius: 8px;
  }

  span {
    --tw-bg-opacity: 1;
    background-color: rgb(142 97 227 / var(--tw-bg-opacity, 1));
  }

  span {
    pointer-events: none;
  }

  span {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  span {
    transition-duration: 75ms;
  }
}

.resize-v-line {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 4px;
  max-width: 4px;
  height: 100%;
  width: 100%;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover,
  &:active {
    > span {
      --tw-bg-opacity: 1;
      background-color: rgb(34 34 34 / var(--tw-bg-opacity, 1));
    }

    svg {
      opacity: 1;
    }
  }

  &::before {
    --tw-content: "";
    content: var(--tw-content);
  }

  &::before {
    position: absolute;
  }

  &::before {
    inset: 0px;
  }

  &::before {
    left: 50%;
  }

  &::before {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &::before {
    width: 1px;
  }

  &::before {
    --tw-bg-opacity: 1;
    background-color: rgb(34 34 34 / var(--tw-bg-opacity, 1));
  }

  &::before {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > span {
    position: absolute;
  }

  > span {
    left: 50%;
  }

  > span {
    top: 50%;
  }

  > span {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  > span {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  > span {
    height: 18px;
  }

  > span {
    width: 6px;
  }

  > span {
    border-radius: 4px;
  }

  > span {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  svg {
    position: absolute;
  }

  svg {
    left: 50%;
  }

  svg {
    top: 50%;
  }

  svg {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-rotate: 90deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-text-opacity: 1;
    color: rgb(163 163 163 / var(--tw-text-opacity, 1));
  }

  svg {
    opacity: 0;
  }

  svg {
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  svg {
    z-index: 50;
  }
}

.tree-node-search-highlight {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  span {
    padding-top: 1px;
    padding-bottom: 1px;
  }

  span {
    border-radius: 2px;
  }

  span {
    --tw-bg-opacity: 1;
    background-color: rgb(253 224 71 / var(--tw-bg-opacity, 1));
  }

  span {
    font-weight: 500;
  }

  span {
    --tw-text-opacity: 1;
    color: rgb(0 0 0 / var(--tw-text-opacity, 1));
  }

  .single {
    margin-right: 1px;
  }

  .single {
    padding-left: 2px;
    padding-right: 2px;
  }

  .regex {
    padding-left: 2px;
    padding-right: 2px;
  }

  .start {
    margin-left: 1px;
  }

  .start {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }

  .end {
    margin-right: 1px;
  }

  .end {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }

  .middle {
    margin-left: 1px;
    margin-right: 1px;
  }

  .middle {
    border-radius: 2px;
  }
}

.react-scan-toolbar-notification {
  position: absolute;
  left: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding: 4px;
  padding-left: 8px;
  font-size: 10px;
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
  background-color: rgb(0 0 0 / 0.9);
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:before {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:before {
    position: absolute;
  }

  &:before {
    left: 0px;
    right: 0px;
  }

  &:before {
    --tw-bg-opacity: 1;
    background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  }

  &:before {
    height: 8px;
  }

  &.position-top {
    top: 100%;
  }

  &.position-top {
    --tw-translate-y: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &.position-top {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &.position-top {

    &::before {
      top: 0px;
    }

    &::before {
      --tw-translate-y: -100%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }

  &.position-bottom {
    bottom: 100%;
  }

  &.position-bottom {
    --tw-translate-y: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &.position-bottom {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &.position-bottom {

    &::before {
      bottom: 0px;
    }

    &::before {
      --tw-translate-y: 100%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }

  &.is-open {
    --tw-translate-y: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-header-item {
  position: absolute;
  inset: 0px;
  --tw-translate-y: -200%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  &.is-visible {
    --tw-translate-y: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-components-tree:has(.resize-v-line:hover, .resize-v-line:active)
  .tree {
  overflow: hidden;
}

.react-scan-expandable {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 75ms;
  transition-timing-function: ease-out;

  > * {
    min-height: 0;
  }

  &.react-scan-expanded {
    grid-template-rows: 1fr;
    transition-duration: 100ms;
  }
}

.after\\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}

.after\\:inset-0::after {
  content: var(--tw-content);
  inset: 0px;
}

.after\\:left-1\\/2::after {
  content: var(--tw-content);
  left: 50%;
}

.after\\:top-\\[100\\%\\]::after {
  content: var(--tw-content);
  top: 100%;
}

.after\\:h-\\[6px\\]::after {
  content: var(--tw-content);
  height: 6px;
}

.after\\:w-\\[10px\\]::after {
  content: var(--tw-content);
  width: 10px;
}

.after\\:-translate-x-1\\/2::after {
  content: var(--tw-content);
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

@keyframes fadeOut {

  0% {
    content: var(--tw-content);
    opacity: 1;
  }

  100% {
    content: var(--tw-content);
    opacity: 0;
  }
}

.after\\:animate-\\[fadeOut_1s_ease-out_forwards\\]::after {
  content: var(--tw-content);
  animation: fadeOut 1s ease-out forwards;
}

.after\\:border-l-\\[5px\\]::after {
  content: var(--tw-content);
  border-left-width: 5px;
}

.after\\:border-r-\\[5px\\]::after {
  content: var(--tw-content);
  border-right-width: 5px;
}

.after\\:border-t-\\[6px\\]::after {
  content: var(--tw-content);
  border-top-width: 6px;
}

.after\\:border-l-transparent::after {
  content: var(--tw-content);
  border-left-color: transparent;
}

.after\\:border-r-transparent::after {
  content: var(--tw-content);
  border-right-color: transparent;
}

.after\\:border-t-white::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-top-color: rgb(255 255 255 / var(--tw-border-opacity, 1));
}

.after\\:bg-purple-500\\/30::after {
  content: var(--tw-content);
  background-color: rgb(168 85 247 / 0.3);
}

.after\\:content-\\[\\"\\"\\]::after {
  --tw-content: "";
  content: var(--tw-content);
}

.focus-within\\:border-\\[\\#454545\\]:focus-within {
  --tw-border-opacity: 1;
  border-color: rgb(69 69 69 / var(--tw-border-opacity, 1));
}

.hover\\:bg-\\[\\#0f0f0f\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(15 15 15 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-\\[\\#18181B\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(24 24 27 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-\\[\\#34343b\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(52 52 59 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-\\[\\#5f3f9a\\]\\/20:hover {
  background-color: rgb(95 63 154 / 0.2);
}

.hover\\:bg-\\[\\#5f3f9a\\]\\/40:hover {
  background-color: rgb(95 63 154 / 0.4);
}

.hover\\:bg-red-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-zinc-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(63 63 70 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-zinc-800\\/50:hover {
  background-color: rgb(39 39 42 / 0.5);
}

.hover\\:text-neutral-300:hover {
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
}

.hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}

.group:hover .group-hover\\:bg-\\[\\#21437982\\] {
  background-color: #21437982;
}

.group:hover .group-hover\\:bg-\\[\\#5b2d89\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(91 45 137 / var(--tw-bg-opacity, 1));
}

.group:hover .group-hover\\:bg-\\[\\#6a6a6a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(106 106 106 / var(--tw-bg-opacity, 1));
}

.group:hover .group-hover\\:bg-\\[\\#efda1a2f\\] {
  background-color: #efda1a2f;
}

.group:hover .group-hover\\:opacity-100 {
  opacity: 1;
}

.peer\\/bottom:hover ~ .peer-hover\\/bottom\\:rounded-b-none {
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
}

.peer\\/left:hover ~ .peer-hover\\/left\\:rounded-l-none {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

.peer\\/right:hover ~ .peer-hover\\/right\\:rounded-r-none {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

.peer\\/top:hover ~ .peer-hover\\/top\\:rounded-t-none {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
`,RA=(e,t,r=t)=>{const[a,s]=Ce(e);return ke(()=>{if(e===a)return;const u=setTimeout(()=>s(e),e?t:r);return()=>clearTimeout(u)},[e,t,r]),a},jA=ga(()=>U("absolute inset-0 flex items-center gap-x-2","translate-y-0","transition-transform duration-300",id.value&&"-translate-y-[200%]")),UA=()=>{const e=fe(null),t=fe(null),[r,a]=Ce(null);al(()=>{const l=ie.inspectState.value;l.kind==="focused"&&a(l.fiber)}),al(()=>{const l=Pt.value;il(()=>{var S,T;if(ie.inspectState.value.kind!=="focused"||!e.current||!t.current)return;const{totalUpdates:u,currentIndex:d,updates:f,isVisible:h,windowOffset:v}=l,g=Math.max(0,u-1),b=h?`#${v+d} Re-render`:g>0?`×${g}`:"";let w;if(g>0&&d>=0&&d<f.length){const k=(T=(S=f[d])==null?void 0:S.fiberInfo)==null?void 0:T.selfTime;w=k>0?k<.1-Number.EPSILON?"< 0.1ms":`${Number(k.toFixed(1))}ms`:void 0}e.current.dataset.text=b?` • ${b}`:"",t.current.dataset.text=w?` • ${w}`:""})});const s=Zn(()=>{if(!r)return null;const{name:l,wrappers:u,wrapperTypes:d}=ol(r),f=u.length?`${u.join("(")}(${l})${")".repeat(u.length)}`:l??"",h=d[0];return y("span",{title:f,className:"flex items-center gap-x-1",children:[l??"Unknown",y("span",{title:h==null?void 0:h.title,className:"flex items-center gap-x-1 text-[10px] text-purple-400",children:!!h&&y(je,{children:[y("span",{className:U("rounded py-[1px] px-1","truncate",h.compiler&&"bg-purple-800 text-neutral-400",!h.compiler&&"bg-neutral-700 text-neutral-300",h.type==="memo"&&"bg-[#5f3f9a] text-white"),children:h.type},h.type),h.compiler&&y("span",{className:"text-yellow-300",children:"✨"})]})}),d.length>1&&y("span",{className:"text-[10px] text-neutral-400",children:["×",d.length-1]})]})},[r]);return y("div",{className:jA,children:[s,y("div",{className:"flex items-center gap-x-2 mr-auto text-xs text-[#888]",children:[y("span",{ref:e,className:"with-data-text cursor-pointer !overflow-visible",title:"Click to toggle between rerenders and total renders"}),y("span",{ref:t,className:"with-data-text !overflow-visible"})]})]})},$A=()=>{const e=RA(ie.inspectState.value.kind==="focused",150,0),t=()=>{Ze.value={view:"none"},ie.inspectState.value={kind:"inspect-off"}};if(Ze.value.view!=="notifications")return y("div",{className:"react-scan-header",children:[y("div",{className:"relative flex-1 h-full",children:y("div",{className:U("react-scan-header-item is-visible",!e&&"!duration-0"),children:y(UA,{})})}),y("button",{type:"button",title:"Close",className:"react-scan-close-button",onClick:t,children:y(dt,{name:"icon-close"})})]})},LA=({className:e,...t})=>y("div",{className:U("react-scan-toggle",e),children:[y("input",{type:"checkbox",...t}),y("div",{})]}),HA=({fps:e})=>{const t=r=>r<30?"#EF4444":r<50?"#F59E0B":"rgb(214,132,245)";return y("div",{className:U("flex items-center gap-x-1 px-2 w-full","h-6","rounded-md","font-mono leading-none","bg-[#141414]","ring-1 ring-white/[0.08]"),children:[y("div",{style:{color:t(e)},className:"text-sm font-semibold tracking-wide transition-colors ease-in-out w-full flex justify-center items-center",children:e}),y("span",{className:"text-white/30 text-[11px] font-medium tracking-wide ml-auto min-w-fit",children:"FPS"})]})},IA=()=>{const[e,t]=Ce(null);return ke(()=>{const r=setInterval(()=>{t(Vx())},200);return()=>clearInterval(r)},[]),y("div",{className:U("flex items-center justify-end gap-x-2 px-1 ml-1 w-[72px]","whitespace-nowrap text-sm text-white"),children:e===null?y(je,{children:"️"}):y(HA,{fps:e})})},Gn=()=>fr?(window.reactScanIdCounter===void 0&&(window.reactScanIdCounter=0),`${++window.reactScanIdCounter}`):"0",Kn=e=>e(),Ct=class Jx extends Array{constructor(t=25){super(),this.capacity=t}push(...t){const r=super.push(...t);for(;this.length>this.capacity;)this.shift();return r}static fromArray(t,r){const a=new Jx(r);return a.push(...t),a}},BA=class{constructor(e){this.subscribers=new Set,this.currentValue=e}subscribe(e){return this.subscribers.add(e),e(this.currentValue),()=>{this.subscribers.delete(e)}}setState(e){this.currentValue=e,this.subscribers.forEach(t=>t(e))}getCurrentState(){return this.currentValue}},e_=150,kw=new BA(new Ct(e_)),lr=50,qA=class{constructor(){this.channels={}}publish(e,t,r=!0){const a=this.channels[t];if(!a){if(!r)return;this.channels[t]={callbacks:new Ct(lr),state:new Ct(lr)},this.channels[t].state.push(e);return}a.state.push(e),a.callbacks.forEach(s=>s(e))}getAvailableChannels(){return Ct.fromArray(Object.keys(this.channels),lr)}subscribe(e,t,r=!1){const a=()=>(r||this.channels[e].state.forEach(l=>{t(l)}),()=>{const l=this.channels[e].callbacks.filter(u=>u!==t);this.channels[e].callbacks=Ct.fromArray(l,lr)}),s=this.channels[e];return s?(s.callbacks.push(t),a()):(this.channels[e]={callbacks:new Ct(lr),state:new Ct(lr)},this.channels[e].callbacks.push(t),a())}updateChannelState(e,t,r=!0){const a=this.channels[e];if(!a){if(!r)return;const s=new Ct(lr),l={callbacks:new Ct(lr),state:s};this.channels[e]=l,l.state=t(s);return}a.state=t(a.state)}getChannelState(e){return this.channels[e].state??new Ct(lr)}},Iu=new qA,t_={skipProviders:!0,skipHocs:!0,skipContainers:!0,skipMinified:!0,skipUtilities:!0,skipBoundaries:!0},js={providers:[/Provider$/,/^Provider$/,/^Context$/],hocs:[/^with[A-Z]/,/^forward(?:Ref)?$/i,/^Forward(?:Ref)?\(/],containers:[/^(?:App)?Container$/,/^Root$/,/^ReactDev/],utilities:[/^Fragment$/,/^Suspense$/,/^ErrorBoundary$/,/^Portal$/,/^Consumer$/,/^Layout$/,/^Router/,/^Hydration/],boundaries:[/^Boundary$/,/Boundary$/,/^Provider$/,/Provider$/]},FA=(e,t=t_)=>{const r=[];return t.skipProviders&&r.push(...js.providers),t.skipHocs&&r.push(...js.hocs),t.skipContainers&&r.push(...js.containers),t.skipUtilities&&r.push(...js.utilities),t.skipBoundaries&&r.push(...js.boundaries),!r.some(a=>a.test(e))},Ew=[/^[a-z]$/,/^[a-z][0-9]$/,/^_+$/,/^[A-Za-z][_$]$/,/^[a-z]{1,2}$/],YA=e=>{var l;for(let u=0;u<Ew.length;u++)if(Ew[u].test(e))return!0;const t=!/[aeiou]/i.test(e),r=(((l=e.match(/\d/g))==null?void 0:l.length)??0)>e.length/2,a=/^[a-z]+$/.test(e),s=/[$_]{2,}/.test(e);return Number(t)+Number(r)+Number(a)+Number(s)>=2},PA=(e,t=t_)=>{if(!e)return[];if(!Nt(e.type))return[];const a=new Array;let s=e;for(;s.return;){const u=XA(s.type);u&&!YA(u)&&FA(u,t)&&u.toLowerCase()!==u&&a.push(u),s=s.return}const l=new Array(a.length);for(let u=0;u<a.length;u++)l[u]=a[a.length-u-1];return l},XA=e=>{const t=Nt(e);return t?t.replace(/^(?:Memo|Forward(?:Ref)?|With.*?)\((?<inner>.*?)\)$/,"$<inner>"):""},GA=(e,t=()=>!0)=>{let r=e;for(;r;){const a=Nt(r.type);if(a&&t(a))return a;r=r.return}return null},Qc,Zp="never-hidden",VA=()=>{Qc==null||Qc();const e=()=>{document.hidden&&(Zp=Date.now())};document.addEventListener("visibilitychange",e),Qc=()=>{document.removeEventListener("visibilitychange",e)}},QA=e=>["pointerup","click"].includes(e)?"pointer":(e.includes("key"),["keydown","keyup"].includes(e)?"keyboard":null),Zh=null,KA=e=>{VA();const t=new Map,r=new Map,a=l=>{if(!l.interactionId)return;if(l.interactionId&&l.target&&!r.has(l.interactionId)&&r.set(l.interactionId,l.target),l.target){let d=l.target;for(;d;){if(d.id==="react-scan-toolbar-root"||d.id==="react-scan-root")return;d=d.parentElement}}const u=t.get(l.interactionId);if(u)l.duration>u.latency?(u.entries=[l],u.latency=l.duration):l.duration===u.latency&&l.startTime===u.entries[0].startTime&&u.entries.push(l);else{const d=QA(l.name);if(!d)return;const f={id:l.interactionId,latency:l.duration,entries:[l],target:l.target,type:d,startTime:l.startTime,endTime:Date.now(),processingStart:l.processingStart,processingEnd:l.processingEnd,duration:l.duration,inputDelay:l.processingStart-l.startTime,processingDuration:l.processingEnd-l.processingStart,presentationDelay:l.duration-(l.processingEnd-l.startTime),timestamp:Date.now(),timeSinceTabInactive:Zp==="never-hidden"?"never-hidden":Date.now()-Zp,visibilityState:document.visibilityState,timeOrigin:performance.timeOrigin,referrer:document.referrer};t.set(f.id,f),Zh||(Zh=requestAnimationFrame(()=>{requestAnimationFrame(()=>{e(t.get(f.id)),Zh=null})}))}},s=new PerformanceObserver(l=>{const u=l.getEntries();for(let d=0,f=u.length;d<f;d++){const h=u[d];a(h)}});try{s.observe({type:"event",buffered:!0,durationThreshold:16}),s.observe({type:"first-input",buffered:!0})}catch{}return()=>s.disconnect()},WA=()=>KA(e=>{Iu.publish({kind:"entry-received",entry:e},"recording")}),gu=25,Rr=new Ct(gu),ZA=(e,t)=>{let r=null;for(const a of t){if(a.type!==e.type)continue;if(r===null){r=a;continue}const s=(l,u)=>Math.abs(l.startDateTime)-(u.startTime+u.timeOrigin);s(a,e)<s(r,e)&&(r=a)}return r},JA=e=>Iu.subscribe("recording",r=>{const a=r.kind==="auto-complete-race"?Rr.find(l=>l.interactionUUID===r.interactionUUID):ZA(r.entry,Rr);if(!a)return;const s=a.completeInteraction(r);e(s)}),e4=({onMicroTask:e,onRAF:t,onTimeout:r,abort:a})=>{queueMicrotask(()=>{(a==null?void 0:a())!==!0&&e()&&requestAnimationFrame(()=>{(a==null?void 0:a())!==!0&&t()&&setTimeout(()=>{(a==null?void 0:a())!==!0&&r()},0)})})},t4=e=>{const t=Fx(e);if(!t)return;let r=t?Nt(t==null?void 0:t.type):"N/A";return r||(r=GA(t,s=>s.length>2)??"N/A"),r?{componentPath:PA(t),childrenTree:{},componentName:r,elementFiber:t}:void 0},Cw=(e,t)=>{let r=null;const a=f=>{switch(e){case"pointer":return f.phase==="start"?"pointerup":f.target instanceof HTMLInputElement||f.target instanceof HTMLSelectElement?"change":"click";case"keyboard":return f.phase==="start"?"keydown":"change"}},s={current:{kind:"uninitialized-stage",interactionUUID:Gn(),stageStart:Date.now(),interactionType:e}},l=f=>{var T,k;if(f.composedPath().some(_=>_ instanceof Element&&_.id==="react-scan-toolbar-root")||(Date.now()-s.current.stageStart>2e3&&(s.current={kind:"uninitialized-stage",interactionUUID:Gn(),stageStart:Date.now(),interactionType:e}),s.current.kind!=="uninitialized-stage"))return;const v=performance.now();(T=t==null?void 0:t.onStart)==null||T.call(t,s.current.interactionUUID);const g=t4(f.target);if(!g){(k=t==null?void 0:t.onError)==null||k.call(t,s.current.interactionUUID);return}const b={},w=n_(b);s.current={...s.current,interactionType:e,blockingTimeStart:Date.now(),childrenTree:g.childrenTree,componentName:g.componentName,componentPath:g.componentPath,fiberRenders:b,kind:"interaction-start",interactionStartDetail:v,stopListeningForRenders:w};const S=a({phase:"end",target:f.target});document.addEventListener(S,u,{once:!0}),requestAnimationFrame(()=>{document.removeEventListener(S,u)})};document.addEventListener(a({phase:"start"}),l,{capture:!0});const u=(f,h,v)=>{var g;if(s.current.kind!=="interaction-start"&&h===r){if(e==="pointer"&&f.target instanceof HTMLSelectElement){s.current={kind:"uninitialized-stage",interactionUUID:Gn(),stageStart:Date.now(),interactionType:e};return}(g=t==null?void 0:t.onError)==null||g.call(t,s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:Gn(),stageStart:Date.now(),interactionType:e};return}r=h,e4({abort:v,onMicroTask:()=>s.current.kind==="uninitialized-stage"?!1:(s.current={...s.current,kind:"js-end-stage",jsEndDetail:performance.now()},!0),onRAF:()=>{var b;return s.current.kind!=="js-end-stage"&&s.current.kind!=="raf-stage"?((b=t==null?void 0:t.onError)==null||b.call(t,s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:Gn(),stageStart:Date.now(),interactionType:e},!1):(s.current={...s.current,kind:"raf-stage",rafStart:performance.now()},!0)},onTimeout:()=>{var _;if(s.current.kind!=="raf-stage"){(_=t==null?void 0:t.onError)==null||_.call(t,s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:Gn(),stageStart:Date.now(),interactionType:e};return}const b=Date.now(),w=Object.freeze({...s.current,kind:"timeout-stage",blockingTimeEnd:b,commitEnd:performance.now()});s.current={kind:"uninitialized-stage",interactionUUID:Gn(),stageStart:b,interactionType:e};let S=!1;const T=E=>{var Y;S=!0;const M=E.kind==="auto-complete-race"?E.detailedTiming.commitEnd-E.detailedTiming.interactionStartDetail:E.entry.latency,D={detailedTiming:w,latency:M,completedAt:Date.now(),flushNeeded:!0};(Y=t==null?void 0:t.onComplete)==null||Y.call(t,w.interactionUUID,D,E);const j=Rr.filter(B=>B.interactionUUID!==w.interactionUUID);return Rr=Ct.fromArray(j,gu),D},k={completeInteraction:T,endDateTime:Date.now(),startDateTime:w.blockingTimeStart,type:e,interactionUUID:w.interactionUUID};if(Rr.push(k),n4())setTimeout(()=>{if(S)return;T({kind:"auto-complete-race",detailedTiming:w,interactionUUID:w.interactionUUID});const E=Rr.filter(M=>M.interactionUUID!==w.interactionUUID);Rr=Ct.fromArray(E,gu)},1e3);else{const E=Rr.filter(M=>M.interactionUUID!==w.interactionUUID);Rr=Ct.fromArray(E,gu),T({kind:"auto-complete-race",detailedTiming:w,interactionUUID:w.interactionUUID})}}})},d=f=>{const h=Gn();u(f,h,()=>h!==r)};return e==="keyboard"&&document.addEventListener("keypress",d),()=>{document.removeEventListener(a({phase:"start"}),l,{capture:!0}),document.removeEventListener("keypress",d)}},Aw=e=>{var t;return(t=J1(e,r=>{if(el(r))return!0}))==null?void 0:t.stateNode},n4=()=>"PerformanceEventTiming"in globalThis,n_=e=>{const t=r=>{var v,g,b,w,S;const a=Nt(r.type);if(!a)return;const s=e[a];if(!s){const T=new Set,k=r.return&&vo(r.return),_=k&&Nt(k[0]);_&&T.add(_);const{selfTime:E,totalTime:M}=ra(r),D=hw(r),j={current:[],changes:new Set,changesCounts:new Map},Y={fiberProps:D.fiberProps||j,fiberState:D.fiberState||j,fiberContext:D.fiberContext||j};e[a]={renderCount:1,hasMemoCache:tl(r),wasFiberRenderMount:Mw(r),parents:T,selfTime:E,totalTime:M,nodeInfo:[{element:Aw(r),name:Nt(r.type)??"Unknown",selfTime:ra(r).selfTime}],changes:Y};return}if((g=(v=vo(r))==null?void 0:v[0])==null?void 0:g.type){const T=r.return&&vo(r.return),k=T&&Nt(T[0]);k&&s.parents.add(k)}const{selfTime:u,totalTime:d}=ra(r),f=hw(r);if(!f)return;const h={current:[],changes:new Set,changesCounts:new Map};s.wasFiberRenderMount=s.wasFiberRenderMount||Mw(r),s.hasMemoCache=s.hasMemoCache||tl(r),s.changes={fiberProps:Jh(((b=s.changes)==null?void 0:b.fiberProps)||h,f.fiberProps||h),fiberState:Jh(((w=s.changes)==null?void 0:w.fiberState)||h,f.fiberState||h),fiberContext:Jh(((S=s.changes)==null?void 0:S.fiberContext)||h,f.fiberContext||h)},s.renderCount+=1,s.selfTime+=u,s.totalTime+=d,s.nodeInfo.push({element:Aw(r),name:Nt(r.type)??"Unknown",selfTime:ra(r).selfTime})};return ie.interactionListeningForRenders=t,()=>{ie.interactionListeningForRenders===t&&(ie.interactionListeningForRenders=null)}},Jh=(e,t)=>{const r={current:[...e.current],changes:new Set,changesCounts:new Map};for(const a of t.current)r.current.some(s=>s.name===a.name)||r.current.push(a);for(const a of t.changes)if(typeof a=="string"||typeof a=="number"){r.changes.add(a);const s=e.changesCounts.get(a)||0,l=t.changesCounts.get(a)||0;r.changesCounts.set(a,s+l)}return r},Mw=e=>{if(!e.alternate)return!0;const t=e.alternate,r=t&&t.memoizedState!=null&&t.memoizedState.element!=null&&t.memoizedState.isDehydrated!==!0,a=e.memoizedState!=null&&e.memoizedState.element!=null&&e.memoizedState.isDehydrated!==!0;return!r&&a},r4=e=>{let t;const r=new Set,a=(h,v)=>{const g=typeof h=="function"?h(t):h;if(!Object.is(g,t)){const b=t;t=v??(typeof g!="object"||g===null)?g:Object.assign({},t,g),r.forEach(w=>w(t,b))}},s=()=>t,d={setState:a,getState:s,getInitialState:()=>f,subscribe:(h,v)=>{let g,b;v?(g=h,b=v):b=h;let w=g?g(t):void 0;const S=(T,k)=>{if(g){const _=g(T),E=g(k);Object.is(w,_)||(w=_,b(_,E))}else b(T,k)};return r.add(S),()=>r.delete(S)}},f=t=e(a,s,d);return d},r_=e=>r4,Kc=null;r_()(e=>({state:{events:[]},actions:{addEvent:t=>{e(r=>({state:{events:[...r.state.events,t]}}))},clear:()=>{e({state:{events:[]}})}}}));var ep=200,sl=r_()((e,t)=>{const r=new Set;return{state:{events:new Ct(ep)},actions:{addEvent:a=>{r.forEach(f=>f(a));const s=[...t().state.events,a],l=(f,h)=>{const v=s.find(g=>{if(g.kind!=="long-render"&&g.id!==f.id&&(f.data.startAt<=g.data.startAt&&f.data.endAt<=g.data.endAt&&f.data.endAt>=g.data.startAt||g.data.startAt<=f.data.startAt&&g.data.endAt>=f.data.startAt||f.data.startAt<=g.data.startAt&&f.data.endAt>=g.data.endAt))return!0});v&&h(v)},u=new Set;s.forEach(f=>{f.kind!=="interaction"&&l(f,()=>{u.add(f.id)})});const d=s.filter(f=>!u.has(f.id));e(()=>({state:{events:Ct.fromArray(d,ep)}}))},addListener:a=>(r.add(a),()=>{r.delete(a)}),clear:()=>{e({state:{events:new Ct(ep)}})}}}}),i4=()=>iE(sl.subscribe,sl.getState),vu=null,yu=null,tp=null,Jp,a4=()=>{const e=t=>{Jp=t.composedPath().map(r=>r.id).filter(Boolean).includes("react-scan-toolbar")};return document.addEventListener("mouseover",e),tp=e,()=>{tp&&document.removeEventListener("mouseover",tp)}},o4=()=>{const e=()=>{vu=performance.now(),yu=performance.timeOrigin};return document.addEventListener("visibilitychange",e),()=>{document.removeEventListener("visibilitychange",e)}},i_=150,np=[];function s4(){let e,t;function r(){let s=null;Kc=null,Kc={},s=n_(Kc);const l=performance.timeOrigin,u=performance.now();return e=requestAnimationFrame(()=>{t=setTimeout(()=>{const d=performance.now(),f=d-u,h=performance.timeOrigin;np.push(d+h);const v=np.filter(S=>d+h-S<=1e3),g=v.length;np=v;const b=vu!==null&&yu!==null?d+h-(yu+vu)<100:null,w=Jp!==null&&Jp;if(f>i_&&!b&&document.visibilityState==="visible"&&!w){const S=h+d,T=u+l;sl.getState().actions.addEvent({kind:"long-render",id:Gn(),data:{endAt:S,startAt:T,meta:{fiberRenders:Kc,latency:f,fps:g}}})}vu=null,yu=null,s==null||s(),r()},0)}),s}const a=r();return()=>{a(),cancelAnimationFrame(e),clearTimeout(t)}}var l4=()=>{const e=WA(),t=a4(),r=o4(),a=s4(),s=async(f,h,v)=>{sl.getState().actions.addEvent({kind:"interaction",id:Gn(),data:{startAt:h.detailedTiming.blockingTimeStart,endAt:performance.now()+performance.timeOrigin,meta:{...h,kind:v.kind}}});const g=Iu.getChannelState("recording");h.detailedTiming.stopListeningForRenders(),g.length&&Iu.updateChannelState("recording",()=>new Ct(lr))},l=Cw("pointer",{onComplete:s}),u=Cw("keyboard",{onComplete:s}),d=JA(f=>{kw.setState(Ct.fromArray(kw.getCurrentState().concat(f),e_))});return()=>{t(),r(),a(),e(),l(),d(),u()}},ll=e=>{const t=e.filter(r=>r.length>2);return t.length===0?e.at(-1)??"Unknown":t.at(-1)},zt=e=>{switch(e.kind){case"interaction":{const{renderTime:t,otherJSTime:r,framePreparation:a,frameConstruction:s,frameDraw:l}=e;return t+r+a+s+(l??0)}case"dropped-frames":return e.otherTime+e.renderTime}},c4=e=>e.wasFiberRenderMount||e.hasMemoCache?!1:e.changes.context.length===0&&e.changes.props.length===0&&e.changes.state.length===0,_l=e=>{const t=zt(e.timing);switch(e.kind){case"interaction":return t<200?"low":t<500?"needs-improvement":"high";case"dropped-frames":return t<50?"low":t<i_?"needs-improvement":"high"}},Sn=()=>Um(a_),a_=vx(null),o_=({size:e=24,className:t})=>y("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:U(["lucide lucide-chevron-right",t]),children:y("path",{d:"m9 18 6-6-6-6"})}),u4=({className:e="",size:t=24,events:r=[]})=>{const a=r.includes(!0),s=r.filter(d=>d).length,l=s>99?">99":s,u=a?Math.max(t*.6,14):Math.max(t*.4,6);return y("div",{className:"relative",children:[y("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:`lucide lucide-bell ${e}`,children:[y("path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}),y("path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"})]}),r.length>0&&s>0&&Ue.options.value.showNotificationCount&&y("div",{className:U(["absolute",a?"-top-2.5 -right-2.5":"-top-1 -right-1","rounded-full","flex items-center justify-center","text-[8px] font-medium text-white","aspect-square",a?"bg-red-500/90":"bg-purple-500/90"]),style:{width:`${u}px`,height:`${u}px`,padding:a?"0.5px":"0"},children:a&&l})]})},Bu=({className:e="",size:t=24})=>y("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[y("path",{d:"M18 6 6 18"}),y("path",{d:"m6 6 12 12"})]}),d4=({className:e="",size:t=24})=>y("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[y("path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}),y("path",{d:"M16 9a5 5 0 0 1 0 6"}),y("path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"})]}),f4=({className:e="",size:t=24})=>y("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[y("path",{d:"M16 9a5 5 0 0 1 .95 2.293"}),y("path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96"}),y("path",{d:"m2 2 20 20"}),y("path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"}),y("path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686"})]}),h4=({size:e=24,className:t})=>y("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:U(["lucide lucide-arrow-left",t]),children:[y("path",{d:"m12 19-7-7 7-7"}),y("path",{d:"M19 12H5"})]}),p4=({className:e="",size:t=24})=>y("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[y("path",{d:"M14 4.1 12 6"}),y("path",{d:"m5.1 8-2.9-.8"}),y("path",{d:"m6 12-1.9 2"}),y("path",{d:"M7.2 2.2 8 5.1"}),y("path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"})]}),m4=({className:e="",size:t=24})=>y("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[y("path",{d:"M10 8h.01"}),y("path",{d:"M12 12h.01"}),y("path",{d:"M14 8h.01"}),y("path",{d:"M16 12h.01"}),y("path",{d:"M18 8h.01"}),y("path",{d:"M6 8h.01"}),y("path",{d:"M7 16h10"}),y("path",{d:"M8 12h.01"}),y("rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"})]}),g4=({className:e="",size:t=24})=>y("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,style:{transform:"rotate(180deg)"},children:[y("circle",{cx:"12",cy:"12",r:"10"}),y("path",{d:"m4.9 4.9 14.2 14.2"})]}),v4=({className:e="",size:t=24})=>y("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[y("polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}),y("polyline",{points:"16 17 22 17 22 11"})]}),s_=({children:e,triggerContent:t,wrapperProps:r})=>{const[a,s]=Ce("closed"),[l,u]=Ce(null),[d,f]=Ce({width:window.innerWidth,height:window.innerHeight}),h=fe(null),v=fe(null),g=Um(eg),b=fe(!1);ke(()=>{const _=()=>{f({width:window.innerWidth,height:window.innerHeight}),w()};return window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)},[]);const w=()=>{if(h.current&&g){const _=h.current.getBoundingClientRect(),E=g.getBoundingClientRect(),M=_.left+_.width/2,D=_.top,j=new DOMRect(M-E.left,D-E.top,_.width,_.height);u(j)}};ke(()=>{w()},[h.current]),ke(()=>{if(a==="opening"){const _=setTimeout(()=>s("open"),120);return()=>clearTimeout(_)}else if(a==="closing"){const _=setTimeout(()=>s("closed"),120);return()=>clearTimeout(_)}},[a]),ke(()=>{const _=setInterval(()=>{!b.current&&a!=="closed"&&s("closing")},1e3);return()=>clearInterval(_)},[a]);const S=()=>{b.current=!0,w(),s("opening")},T=()=>{b.current=!1,w(),s("closing")},k=()=>{var ne;if(!l||!g)return{top:0,left:0};const _=g.getBoundingClientRect(),E=175,M=((ne=v.current)==null?void 0:ne.offsetHeight)||40,D=5,j=l.x+_.left,Y=l.y+_.top;let B=j,ee=Y-4;return B-E/2<D?B=D+E/2:B+E/2>d.width-D&&(B=d.width-D-E/2),ee-M<D&&(ee=Y+l.height+4),{top:ee-_.top,left:B-_.left}};return y(je,{children:[g&&l&&a!=="closed"&&cE(y("div",{ref:v,className:U(["absolute z-100 bg-white text-black rounded-lg px-3 py-2 shadow-lg","transform transition-all duration-120 ease-[cubic-bezier(0.23,1,0.32,1)]",'after:content-[""] after:absolute after:top-[100%]',"after:left-1/2 after:-translate-x-1/2","after:w-[10px] after:h-[6px]","after:border-l-[5px] after:border-l-transparent","after:border-r-[5px] after:border-r-transparent","after:border-t-[6px] after:border-t-white","pointer-events-none",a==="opening"||a==="closing"?"opacity-0 translate-y-1":"opacity-100 translate-y-0"]),style:{top:k().top+"px",left:k().left+"px",transform:"translate(-50%, -100%)",minWidth:"175px"},children:e}),g),y("div",{ref:h,onMouseEnter:S,onMouseLeave:T,...r,children:t})]})},y4=({selectedEvent:e})=>{const{notificationState:t,setNotificationState:r,setRoute:a}=Sn();return y("div",{className:U(["flex w-full justify-between items-center px-3 py-2 text-xs"]),children:[y("div",{className:U(["bg-[#18181B] flex items-center gap-x-1 p-1 rounded-sm"]),children:[y("button",{onClick:()=>{a({route:"render-visualization",routeMessage:null})},className:U(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",t.route==="render-visualization"||t.route==="render-explanation"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Ranked"}),y("button",{onClick:()=>{a({route:"other-visualization",routeMessage:null})},className:U(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",t.route==="other-visualization"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Overview"}),y("button",{onClick:()=>{a({route:"optimize",routeMessage:null})},className:U(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",t.route==="optimize"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:y("span",{children:"Prompts"})})]}),y(s_,{triggerContent:y("button",{onClick:()=>{r(s=>{s.audioNotificationsOptions.enabled&&s.audioNotificationsOptions.audioContext.state!=="closed"&&s.audioNotificationsOptions.audioContext.close();const l=s.audioNotificationsOptions.enabled;localStorage.setItem("react-scan-notifications-audio",String(!l));const u=new AudioContext;return s.audioNotificationsOptions.enabled||Bm(u),l&&u.close(),{...s,audioNotificationsOptions:l?{audioContext:null,enabled:!1}:{audioContext:u,enabled:!0}}})},className:"ml-auto",children:y("div",{className:U(["flex gap-x-2 justify-center items-center text-[#6E6E77]"]),children:[y("span",{children:"Alerts"}),t.audioNotificationsOptions.enabled?y(d4,{size:16,className:"text-[#6E6E77]"}):y(f4,{size:16,className:"text-[#6E6E77]"})]})}),children:y(je,{children:"Play a chime when a slowdown is recorded"})})]})},io=e=>{let t="";return e.toSorted((a,s)=>s.totalTime-a.totalTime).slice(0,30).filter(a=>a.totalTime>5).forEach(a=>{let s="";s+="Component Name:",s+=a.name,s+=`
`,s+=`Rendered: ${a.count} times
`,s+=`Sum of self times for ${a.name} is ${a.totalTime.toFixed(0)}ms
`,a.changes.props.length>0&&(s+=`Changed props for all ${a.name} instances ("name:count" pairs)
`,a.changes.props.forEach(l=>{s+=`${l.name}:${l.count}x
`})),a.changes.state.length>0&&(s+=`Changed state for all ${a.name} instances ("hook index:count" pairs)
`,a.changes.state.forEach(l=>{s+=`${l.index}:${l.count}x
`})),a.changes.context.length>0&&(s+=`Changed context for all ${a.name} instances ("context display name (if exists):count" pairs)
`,a.changes.context.forEach(l=>{s+=`${l.name}:${l.count}x
`})),t+=s,t+=`
`}),t},b4=({renderTime:e,eHandlerTimeExcludingRenders:t,toRafTime:r,commitTime:a,framePresentTime:s,formattedReactData:l})=>`I will provide you with a set of high level, and low level performance data about an interaction in a React App:
### High level
- react component render time: ${e.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${t.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${r.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${a.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${s===null?"":`- how long it took from dom commit for the frame to be presented: ${s.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${l}`,w4=({interactionType:e,name:t,componentPath:r,time:a,renderTime:s,eHandlerTimeExcludingRenders:l,toRafTime:u,commitTime:d,framePresentTime:f,formattedReactData:h})=>`You will attempt to implement a performance improvement to a user interaction in a React app. You will be provided with data about the interaction, and the slow down.

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.


Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)

The interaction was a ${e} on the component named ${t}. This component has the following ancestors ${r}. This is the path from the component, to the root. This should be enough information to figure out where this component is in the user's code base

This path is the component that was clicked, so it should tell you roughly where component had an event handler that triggered a state change.

Please note that the leaf node of this path might not be user code (if they use a UI library), and they may contain many wrapper components that just pass through children that aren't relevant to the actual click. So make you sure analyze the path and understand what the user code is doing

We have a set of high level, and low level data about the performance issue.

The click took ${a.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${s.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${l.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${u.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${d.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${f===null?"":`- how long it took from dom commit for the frame to be presented: ${f.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${h}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

`,x4=({renderTime:e,otherTime:t,formattedReactData:r})=>`You will attempt to implement a performance improvement to a large slowdown in a react app

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.

Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)


We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${e.toFixed(0)}ms
- other time: ${t}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${r}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

If renders don't seem to be the problem, see if there are any expensive CSS properties being added/mutated, or any expensive DOM Element mutations/new elements being created that could cause this slowdown. 
`,_4=({renderTime:e,otherTime:t,formattedReactData:r})=>`Your goal will be to help me find the source of a performance problem in a React App. I collected a large dataset about this specific performance problem.

We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${e.toFixed(0)}ms
- other time (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${t}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${r}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one, and this can add significant overhead when thousands of effects ran.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`,S4=({renderTime:e,otherTime:t,formattedReactData:r})=>`I will provide you with a set of high level, and low level performance data about a large frame drop in a React App:
### High level
- react component render time: ${e.toFixed(0)}ms
- how long it took to run everything else (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${t}ms

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${r}`,T4=({interactionType:e,name:t,time:r,renderTime:a,eHandlerTimeExcludingRenders:s,toRafTime:l,commitTime:u,framePresentTime:d,formattedReactData:f})=>`Your goal will be to help me find the source of a performance problem. I collected a large dataset about this specific performance problem.

There was a ${e} on a component named ${t}. This means, roughly, the component that handled the ${e} event was named ${t}.

We have a set of high level, and low level data about the performance issue.

The click took ${r.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${a.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${s.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${l.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${u.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${d===null?"":`- how long it took from dom commit for the frame to be presented: ${d.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${f}


You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`,em=(e,t)=>Kn(()=>{switch(e){case"data":switch(t.kind){case"dropped-frames":return S4({formattedReactData:io(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((r,a)=>r+a.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return b4({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:io(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,renderTime:t.groupedFiberRenders.reduce((r,a)=>r+a.totalTime,0),toRafTime:t.timing.framePreparation})}case"explanation":switch(t.kind){case"dropped-frames":return _4({formattedReactData:io(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((r,a)=>r+a.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return T4({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:io(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:ll(t.componentPath),renderTime:t.groupedFiberRenders.reduce((r,a)=>r+a.totalTime,0),time:zt(t.timing),toRafTime:t.timing.framePreparation})}case"fix":switch(t.kind){case"dropped-frames":return x4({formattedReactData:io(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((r,a)=>r+a.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return w4({commitTime:t.timing.frameConstruction,componentPath:t.componentPath.join(">"),eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:io(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:ll(t.componentPath),renderTime:t.groupedFiberRenders.reduce((r,a)=>r+a.totalTime,0),time:zt(t.timing),toRafTime:t.timing.framePreparation})}}}),k4=({selectedEvent:e})=>{const[t,r]=Ce("fix"),[a,s]=Ce(!1);return y("div",{className:U(["w-full h-full"]),children:[y("div",{className:U(["border border-[#27272A] rounded-sm h-4/5 text-xs overflow-hidden"]),children:[y("div",{className:U(["bg-[#18181B] p-1 rounded-t-sm"]),children:y("div",{className:U(["flex items-center gap-x-1"]),children:[y("button",{onClick:()=>r("fix"),className:U(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",t==="fix"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Fix"}),y("button",{onClick:()=>r("explanation"),className:U(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",t==="explanation"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Explanation"}),y("button",{onClick:()=>r("data"),className:U(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",t==="data"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Data"})]})}),y("div",{className:U(["overflow-y-auto h-full"]),children:y("pre",{className:U(["p-2 h-full","whitespace-pre-wrap break-words","text-gray-300 font-mono "]),children:em(t,e)})})]}),y("button",{onClick:async()=>{const l=em(t,e);await navigator.clipboard.writeText(l),s(!0),setTimeout(()=>s(!1),1e3)},className:U(["mt-4 px-4 py-2 bg-[#18181B] text-[#6E6E77] rounded-sm","hover:text-white transition-colors duration-200","flex items-center justify-center gap-x-2 text-xs"]),children:[y("span",{children:a?"Copied!":"Copy Prompt"}),y("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:U(["transition-transform duration-200",a&&"scale-110"]),children:a?y("path",{d:"M20 6L9 17l-5-5"}):y(je,{children:[y("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),y("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})]})},E4=(e,t)=>{switch(e.kind){case"dropped-frames":return[...t?[{name:"Total Processing Time",time:zt(e.timing),color:"bg-red-500",kind:"total-processing-time"}]:[{name:"Renders",time:e.timing.renderTime,color:"bg-purple-500",kind:"render"},{name:"JavaScript, DOM updates, Draw Frame",time:e.timing.otherTime,color:"bg-[#4b4b4b]",kind:"other-frame-drop"}]];case"interaction":return[...t?[]:[{name:"Renders",time:e.timing.renderTime,color:"bg-purple-500",kind:"render"}],{name:t?"React Renders, Hooks, Other JavaScript":"JavaScript/React Hooks ",time:e.timing.otherJSTime,color:"bg-[#EFD81A]",kind:"other-javascript"},{name:"Update DOM and Draw New Frame",time:zt(e.timing)-e.timing.renderTime-e.timing.otherJSTime,color:"bg-[#1D3A66]",kind:"other-not-javascript"}]}},C4=({selectedEvent:e})=>{var f;const[t]=Ce(ad()??!1),{notificationState:r}=Sn(),[a,s]=Ce((f=r.routeMessage)!=null&&f.name?[r.routeMessage.name]:[]),l=E4(e,t),u=Um(eg);ke(()=>{var h;if((h=r.routeMessage)!=null&&h.name){const v=u==null?void 0:u.querySelector("#overview-scroll-container"),g=u==null?void 0:u.querySelector(`#react-scan-overview-bar-${r.routeMessage.name}`);if(v&&g){const b=g.getBoundingClientRect().top,w=v.getBoundingClientRect().top,S=b-w;v.scrollTop=v.scrollTop+S}}},[r.route]),ke(()=>{r.route==="other-visualization"&&s(h=>{var v;return(v=r.routeMessage)!=null&&v.name?[r.routeMessage.name]:h})},[r.route]);const d=l.reduce((h,v)=>h+v.time,0);return y("div",{className:"rounded-sm border border-zinc-800 text-xs",children:[y("div",{className:"p-2 border-b border-zinc-800 bg-zinc-900/50",children:y("div",{className:"flex items-center justify-between",children:[y("h3",{className:"text-xs font-medium",children:"What was time spent on?"}),y("span",{className:"text-xs text-zinc-400",children:["Total: ",d.toFixed(0),"ms"]})]})}),y("div",{className:"divide-y divide-zinc-800",children:l.map(h=>{const v=a.includes(h.kind);return y("div",{id:`react-scan-overview-bar-${h.kind}`,children:[y("button",{onClick:()=>s(g=>g.includes(h.kind)?g.filter(b=>b!==h.kind):[...g,h.kind]),className:"w-full px-3 py-2 flex items-center gap-4 hover:bg-zinc-800/50 transition-colors",children:y("div",{className:"flex-1",children:[y("div",{className:"flex items-center justify-between mb-2",children:[y("div",{className:"flex items-center gap-0.5",children:[y("svg",{className:`h-4 w-4 text-zinc-400 transition-transform ${v?"rotate-90":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),y("span",{className:"font-medium flex items-center text-left",children:h.name})]}),y("span",{className:" text-zinc-400",children:[h.time.toFixed(0),"ms"]})]}),y("div",{className:"h-1 bg-zinc-800 rounded-full overflow-hidden",children:y("div",{className:`h-full ${h.color} transition-all`,style:{width:`${h.time/d*100}%`}})})]})}),v&&y("div",{className:"bg-zinc-900/30 border-t border-zinc-800 px-2.5 py-3",children:y("p",{className:" text-zinc-400 mb-4 text-xs",children:Kn(()=>{switch(e.kind){case"interaction":switch(h.kind){case"render":return y(ao,{input:M4(e)});case"other-javascript":return y(ao,{input:O4(e)});case"other-not-javascript":return y(ao,{input:A4(e)})}case"dropped-frames":switch(h.kind){case"total-processing-time":return y(ao,{input:{kind:"total-processing",data:{time:zt(e.timing)}}});case"render":return y(je,{children:y(ao,{input:{kind:"render",data:{topByTime:e.groupedFiberRenders.toSorted((g,b)=>b.totalTime-g.totalTime).slice(0,3).map(g=>({name:g.name,percentage:g.totalTime/zt(e.timing)}))}}})});case"other-frame-drop":return y(ao,{input:{kind:"other"}})}}})})})]},h.kind)})})]})},A4=e=>{const t=e.groupedFiberRenders.reduce((l,u)=>l+u.count,0),r=e.timing.renderTime,a=zt(e.timing),s=r/a*100;return t>100?{kind:"high-render-count-update-dom-draw-frame",data:{count:t,percentageOfTotal:s,copyButton:y(Ow,{})}}:{kind:"update-dom-draw-frame",data:{copyButton:y(Ow,{})}}},Ow=()=>{const[e,t]=Ce(!1),{notificationState:r}=Sn();return y("button",{onClick:async()=>{r.selectedEvent&&(await navigator.clipboard.writeText(em("explanation",r.selectedEvent)),t(!0),setTimeout(()=>t(!1),1e3))},className:"bg-zinc-800 flex hover:bg-zinc-700 text-zinc-200 px-2 py-1 rounded gap-x-3",children:[y("span",{children:e?"Copied!":"Copy Prompt"}),y("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:U(["transition-transform duration-200",e&&"scale-110"]),children:e?y("path",{d:"M20 6L9 17l-5-5"}):y(je,{children:[y("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),y("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})},M4=e=>e.timing.renderTime/zt(e.timing)>.3?{kind:"render",data:{topByTime:e.groupedFiberRenders.toSorted((t,r)=>r.totalTime-t.totalTime).slice(0,3).map(t=>({percentage:t.totalTime/zt(e.timing),name:t.name}))}}:{kind:"other"},O4=e=>{const t=e.groupedFiberRenders.reduce((r,a)=>r+a.count,0);return e.timing.otherJSTime/zt(e.timing)<.2?{kind:"js-explanation-base"}:e.groupedFiberRenders.find(r=>r.count>200)||e.groupedFiberRenders.reduce((r,a)=>r+a.count,0)>500?{kind:"high-render-count-high-js",data:{renderCount:t,topByCount:e.groupedFiberRenders.filter(r=>r.count>100).toSorted((r,a)=>a.count-r.count).slice(0,3)}}:e.timing.otherJSTime/zt(e.timing)>.3?e.timing.renderTime>.2?{kind:"js-explanation-base"}:{kind:"low-render-count-high-js",data:{renderCount:t}}:{kind:"js-explanation-base"}},ao=({input:e})=>{switch(e.kind){case"total-processing":return y("div",{className:U(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[y("p",{children:["This is the time it took to draw the entire frame that was presented to the user. To be at 60FPS, this number needs to be ","<=16ms"]}),y("p",{children:'To debug the issue, check the "Ranked" tab to see if there are significant component renders'}),y("p",{children:"On a production React build, React Scan can't access the time it took for component to render. To get that information, run React Scan on a development build"}),y("p",{children:["To understand precisely what caused the slowdown while in production, use the ",y("strong",{children:"Chrome profiler"})," and analyze the function call times."]}),y("p",{})]});case"render":return y("div",{className:U(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[y("p",{children:"This is the time it took React to run components, and internal logic to handle the output of your component."}),y("div",{className:U(["flex flex-col"]),children:[y("p",{children:"The slowest components for this time period were:"}),e.data.topByTime.map(t=>y("div",{children:[y("strong",{children:t.name}),":"," ",(t.percentage*100).toFixed(0),"% of total"]},t.name))]}),y("p",{children:'To view the render times of all your components, and what caused them to render, go to the "Ranked" tab'}),y("p",{children:'The "Ranked" tab shows the render times of every component.'}),y("p",{children:"The render times of the same components are grouped together into one bar."}),y("p",{children:"Clicking the component will show you what props, state, or context caused the component to re-render."})]});case"js-explanation-base":return y("div",{className:U(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[y("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),y("p",{children:["The most common culprit for high JS time is expensive hooks, like expensive callbacks inside of ",y("code",{children:"useEffect"}),"'s or a large number of useEffect's called, but this can also be JavaScript event handlers (",y("code",{children:"'onclick'"}),", ",y("code",{children:"'onchange'"}),") that performed expensive computation."]}),y("p",{children:"If you have lots of components rendering that call hooks, like useEffect, it can add significant overhead even if the callbacks are not expensive. If this is the case, you can try optimizing the renders of those components to avoid the hook from having to run."}),y("p",{children:["You should profile your app using the"," ",y("strong",{children:"Chrome DevTools profiler"})," to learn exactly which functions took the longest to execute."]})]});case"high-render-count-high-js":return y("div",{className:U(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[y("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),e.data.renderCount===0?y(je,{children:[y("p",{children:"There were no renders, which means nothing related to React caused this slowdown. The most likely cause of the slowdown is a slow JavaScript event handler, or code related to a Web API"}),y("p",{children:["You should try to reproduce the slowdown while profiling your website with the",y("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]}):y(je,{children:[" ",y("p",{children:["There were ",y("strong",{children:e.data.renderCount})," renders, which could have contributed to the high JavaScript/Hook time if they ran lots of hooks, like ",y("code",{children:"useEffects"}),"."]}),y("div",{className:U(["flex flex-col"]),children:[y("p",{children:"You should try optimizing the renders of:"}),e.data.topByCount.map(t=>y("div",{children:["- ",y("strong",{children:t.name})," (rendered ",t.count,"x)"]},t.name))]}),"and then checking if the problem still exists.",y("p",{children:["You can also try profiling your app using the"," ",y("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]})]});case"low-render-count-high-js":return y("div",{className:U(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[y("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),y("p",{children:["There were only ",y("strong",{children:e.data.renderCount})," renders detected, which means either you had very expensive hooks like"," ",y("code",{children:"useEffect"}),"/",y("code",{children:"useLayoutEffect"}),", or there is other JavaScript running during this interaction that took up the majority of the time."]}),y("p",{children:["To understand precisely what caused the slowdown, use the"," ",y("strong",{children:"Chrome profiler"})," and analyze the function call times."]})]});case"high-render-count-update-dom-draw-frame":return y("div",{className:U(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[y("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),y("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),y("p",{children:["During this interaction, there were"," ",y("strong",{children:e.data.count})," renders, which was"," ",y("strong",{children:[e.data.percentageOfTotal.toFixed(0),"%"]})," of the time spent processing"]}),y("p",{children:"The work performed as a result of the renders may have forced the browser to spend a lot of time to draw the next frame."}),y("p",{children:'You can try optimizing the renders to see if the performance problem still exists using the "Ranked" tab.'}),y("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),y("p",{children:e.data.copyButton}),y("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),y("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"update-dom-draw-frame":return y("div",{className:U(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[y("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),y("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),y("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),y("p",{children:e.data.copyButton}),y("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),y("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"other":return y("div",{className:U(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[y("p",{children:["This is the time it took to run everything other than React renders. This can be hooks like ",y("code",{children:"useEffect"}),", other JavaScript not part of React, or work the browser has to do to update the DOM and draw the next frame."]}),y("p",{children:["To get a better picture of what happened, profile your app using the"," ",y("strong",{children:"Chrome profiler"})," when the performance problem arises."]})]})}},We=null,pt=null,Ke=kt({kind:"idle",current:null}),rp=null,bo=()=>{rp&&cancelAnimationFrame(rp),rp=requestAnimationFrame(()=>{if(!We||!pt)return;pt.clearRect(0,0,We.width,We.height);const e="hsl(271, 76%, 53%)",t=Ke.value,{alpha:r,current:a}=Kn(()=>{var s,l;switch(t.kind){case"transition":{const u=(s=t.current)!=null&&s.alpha&&t.current.alpha>0?t.current:t.transitionTo;return{alpha:u?u.alpha:0,current:u}}case"move-out":return{alpha:((l=t.current)==null?void 0:l.alpha)??0,current:t.current};case"idle":return{alpha:1,current:t.current}}});switch(a==null||a.rects.forEach(s=>{pt&&(pt.shadowColor=e,pt.shadowBlur=6,pt.strokeStyle=e,pt.lineWidth=2,pt.globalAlpha=r,pt.beginPath(),pt.rect(s.left,s.top,s.width,s.height),pt.stroke(),pt.shadowBlur=0,pt.beginPath(),pt.rect(s.left,s.top,s.width,s.height),pt.stroke())}),t.kind){case"move-out":{if(t.current.alpha===0){Ke.value={kind:"idle",current:null};return}t.current.alpha<=.01&&(t.current.alpha=0),t.current.alpha=Math.max(0,t.current.alpha-.03),bo();return}case"transition":{if(t.current&&t.current.alpha>0){t.current.alpha=Math.max(0,t.current.alpha-.03),bo();return}if(t.transitionTo.alpha===1){Ke.value={kind:"idle",current:t.transitionTo};return}t.transitionTo.alpha=Math.min(t.transitionTo.alpha+.03,1),bo()}case"idle":return}})},ip=null,N4=e=>{if(We=document.createElement("canvas"),pt=We.getContext("2d",{alpha:!0}),!pt)return null;const t=window.devicePixelRatio||1,{innerWidth:r,innerHeight:a}=window;We.style.width=`${r}px`,We.style.height=`${a}px`,We.width=r*t,We.height=a*t,We.style.position="fixed",We.style.left="0",We.style.top="0",We.style.pointerEvents="none",We.style.zIndex="2147483600",pt.scale(t,t),e.appendChild(We),ip&&window.removeEventListener("resize",ip);const s=()=>{if(!We||!pt)return;const l=window.devicePixelRatio||1,{innerWidth:u,innerHeight:d}=window;We.style.width=`${u}px`,We.style.height=`${d}px`,We.width=u*l,We.height=d*l,pt.scale(l,l),bo()};return ip=s,window.addEventListener("resize",s),Ke.subscribe(()=>{requestAnimationFrame(()=>{bo()})}),z4};function z4(){We!=null&&We.parentNode&&We.parentNode.removeChild(We),We=null,pt=null}var Bs=()=>{var t;const e=Ke.value.current?Ke.value.current:Ke.value.kind==="transition"?Ke.value.transitionTo:null;if(e){if(Ke.value.kind==="transition"){Ke.value={kind:"move-out",current:((t=Ke.value.current)==null?void 0:t.alpha)===0?Ke.value.transitionTo:Ke.value.current??Ke.value.transitionTo};return}Ke.value={kind:"move-out",current:{alpha:0,...e}}}},D4=({selectedEvent:e})=>{const t=zt(e.timing),r=t-e.timing.renderTime,[a]=Ce(ad()),l=e.groupedFiberRenders.map(h=>({event:h,kind:"render",totalTime:a?h.count:h.totalTime})),u=Kn(()=>{switch(e.kind){case"dropped-frames":return e.timing.renderTime/t<.1;case"interaction":return(e.timing.otherJSTime+e.timing.renderTime)/t<.2}});e.kind==="interaction"&&!a&&l.push({kind:"other-javascript",totalTime:e.timing.otherJSTime}),u&&!a&&(e.kind==="interaction"?l.push({kind:"other-not-javascript",totalTime:zt(e.timing)-e.timing.renderTime-e.timing.otherJSTime}):l.push({kind:"other-frame-drop",totalTime:r}));const d=fe({lastCallAt:null,timer:null}),f=l.reduce((h,v)=>h+v.totalTime,0);return y("div",{className:U(["flex flex-col h-full w-full gap-y-1"]),children:[Kn(()=>{if(a&&l.length===0)return y("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[y("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No data available"}),y("p",{className:"text-x w-full text-lefts",children:"No data was collected during this period"})]});if(l.length===0)return y("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[y("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No renders collected"}),y("p",{className:"text-x w-full text-lefts",children:"There were no renders during this period"})]})}),l.toSorted((h,v)=>v.totalTime-h.totalTime).map(h=>y(l_,{bars:l,bar:h,debouncedMouseEnter:d,totalBarTime:f,isProduction:a},h.kind==="render"?h.event.id:h.kind))]})},R4=e=>e.current&&e.current.alpha>0?"fading-out":"fading-in",l_=({bar:e,debouncedMouseEnter:t,totalBarTime:r,isProduction:a,bars:s,depth:l=0})=>{const{setNotificationState:u,setRoute:d}=Sn(),[f,h]=Ce(!1),v=e.kind==="render"?e.event.parents.size===0:!0,g=s.filter(S=>S.kind==="render"&&e.kind==="render"?e.event.parents.has(S.event.name)&&S.event.name!==e.event.name:!1),b=e.kind==="render"?Array.from(e.event.parents).filter(S=>!s.some(T=>T.kind==="render"&&T.event.name===S)):[],w=()=>{e.kind==="render"?(u(S=>({...S,selectedFiber:e.event})),d({route:"render-explanation",routeMessage:null})):d({route:"other-visualization",routeMessage:{kind:"auto-open-overview-accordion",name:e.kind}})};return y("div",{className:"w-full",children:[y("div",{className:U(["w-full flex items-center relative text-xs min-w-0"]),children:[y("button",{onMouseLeave:()=>{t.current.timer&&clearTimeout(t.current.timer),Bs()},onMouseEnter:async()=>{const S=async()=>{if(t.current.lastCallAt=Date.now(),e.kind!=="render"){const M=Ke.value.current?Ke.value.current:Ke.value.kind==="transition"?Ke.value.transitionTo:null;if(!M){Ke.value={kind:"idle",current:null};return}Ke.value={kind:"move-out",current:{alpha:0,...M}};return}const T=Ke.value,k=Kn(()=>{switch(T.kind){case"transition":return T.transitionTo;case"idle":case"move-out":return T.current}}),_=[];if(T.kind==="transition"){const M=R4(T);Kn(()=>{switch(M){case"fading-in":{Ke.value={kind:"transition",current:T.transitionTo,transitionTo:{rects:_,alpha:0,name:e.event.name}};return}case"fading-out":{Ke.value={kind:"transition",current:Ke.value.current?{alpha:0,...Ke.value.current}:null,transitionTo:{rects:_,alpha:0,name:e.event.name}};return}}})}else Ke.value={kind:"transition",transitionTo:{rects:_,alpha:0,name:e.event.name},current:k?{alpha:0,...k}:null};const E=e.event.elements.filter(M=>M instanceof Element);for await(const M of Zx(E))M.forEach(({boundingClientRect:D})=>{_.push(D)}),bo()};if(t.current.lastCallAt&&Date.now()-t.current.lastCallAt<200){t.current.timer&&clearTimeout(t.current.timer),t.current.timer=setTimeout(()=>{S()},200);return}S()},onClick:w,className:U(["h-full w-[90%] flex items-center hover:bg-[#0f0f0f] rounded-l-md min-w-0 relative"]),children:[y("div",{style:{minWidth:"fit-content",width:`${e.totalTime/r*100}%`},className:U(["flex items-center rounded-sm text-white text-xs h-[28px] shrink-0",e.kind==="render"&&"bg-[#412162] group-hover:bg-[#5b2d89]",e.kind==="other-frame-drop"&&"bg-[#44444a] group-hover:bg-[#6a6a6a]",e.kind==="other-javascript"&&"bg-[#efd81a6b] group-hover:bg-[#efda1a2f]",e.kind==="other-not-javascript"&&"bg-[#214379d4] group-hover:bg-[#21437982]"])}),y("div",{className:U(["absolute inset-0 flex items-center px-2","min-w-0"]),children:y("div",{className:"flex items-center gap-x-2 min-w-0 w-full",children:[y("span",{className:U(["truncate"]),children:Kn(()=>{switch(e.kind){case"other-frame-drop":return"JavaScript, DOM updates, Draw Frame";case"other-javascript":return"JavaScript/React Hooks";case"other-not-javascript":return"Update DOM and Draw New Frame";case"render":return e.event.name}})}),e.kind==="render"&&c4(e.event)&&y("div",{style:{lineHeight:"10px"},className:U(["px-1 py-0.5 bg-[#6a369e] flex items-center rounded-sm font-semibold text-[8px] shrink-0"]),children:"Memoizable"})]})})]}),y("button",{onClick:()=>e.kind==="render"&&!v&&h(!f),className:U(["flex items-center min-w-fit shrink-0 rounded-r-md h-[28px]",!v&&"hover:bg-[#0f0f0f]",e.kind==="render"&&!v?"cursor-pointer":"cursor-default"]),children:[y("div",{className:"w-[20px] flex items-center justify-center",children:e.kind==="render"&&!v&&y(o_,{className:U("transition-transform",f&&"rotate-90"),size:16})}),y("div",{style:{minWidth:v?"fit-content":a?"30px":"60px"},className:"flex items-center justify-end gap-x-1",children:[e.kind==="render"&&y("span",{className:U(["text-[10px]"]),children:["x",e.event.count]}),(e.kind!=="render"||!a)&&y("span",{className:"text-[10px] text-[#7346a0] pr-1",children:[e.totalTime<1?"<1":e.totalTime.toFixed(0),"ms"]})]})]}),l===0&&y("div",{className:U(["absolute right-0 top-1/2 transition-none -translate-y-1/2 bg-white text-black px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity mr-16","pointer-events-none"]),children:"Click to learn more"})]}),f&&(g.length>0||b.length>0)&&y("div",{className:"pl-3 flex flex-col gap-y-1 mt-1",children:[g.toSorted((S,T)=>T.totalTime-S.totalTime).map((S,T)=>y(l_,{depth:l+1,bar:S,debouncedMouseEnter:t,totalBarTime:r,isProduction:a,bars:s},T)),b.map(S=>y("div",{className:"w-full",children:y("div",{className:"w-full flex items-center relative text-xs",children:y("div",{className:"h-full w-full flex items-center relative",children:[y("div",{className:"flex items-center rounded-sm text-white text-xs h-[28px] w-full"}),y("div",{className:"absolute inset-0 flex items-center px-2",children:y("span",{className:"truncate whitespace-nowrap text-white/70 w-full",children:S})})]})})},S))]})]})},j4=({selectedEvent:e,selectedFiber:t})=>{const{setRoute:r}=Sn(),[a,s]=Ce(!0),[l]=Ce(ad());jm(()=>{const d=localStorage.getItem("react-scan-tip-shown"),f=d==="true"?!0:d==="false"?!1:null;if(f===null){s(!0),localStorage.setItem("react-scan-tip-is-shown","true");return}f||s(!1)},[]);const u=t.changes.context.length===0&&t.changes.props.length===0&&t.changes.state.length===0;return y("div",{className:U(["w-full min-h-fit h-full flex flex-col py-4 pt-0 rounded-sm"]),children:[y("div",{className:U(["flex items-start gap-x-4 "]),children:[y("button",{onClick:()=>{r({route:"render-visualization",routeMessage:null})},className:U(["text-white hover:bg-[#34343b] flex gap-x-1 justify-center items-center mb-4 w-fit px-2.5 py-1.5 text-xs rounded-sm bg-[#18181B]"]),children:[y(h4,{size:14})," ",y("span",{children:"Overview"})]}),y("div",{className:U(["flex flex-col gap-y-1"]),children:[y("div",{className:U(["text-sm font-bold text-white overflow-x-hidden"]),children:y("div",{className:"flex items-center gap-x-2 truncate",children:t.name})}),y("div",{className:U(["flex gap-x-2"]),children:[!l&&y(je,{children:y("div",{className:U(["text-xs text-gray-400"]),children:["• Render time: ",t.totalTime.toFixed(0),"ms"]})}),y("div",{className:U(["text-xs text-gray-400 mb-4"]),children:["• Renders: ",t.count,"x"]})]})]})]}),a&&!u&&y("div",{className:U(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex relative"]),children:[y("button",{onClick:()=>{s(!1),localStorage.setItem("react-scan-tip-shown","false")},className:U(["absolute right-2 top-2 rounded-sm p-1 hover:bg-[#18181B]"]),children:y(Bu,{size:12})}),y("div",{className:U(["w-1 bg-[#d36cff]"])}),y("div",{className:U(["flex-1"]),children:[y("div",{className:U(["px-3 py-2 text-gray-100 text-xs font-semibold"]),children:"How to stop renders"}),y("div",{className:U(["px-3 pb-2 text-gray-400 text-[10px]"]),children:"Stop the following props, state and context from changing between renders, and wrap the component in React.memo if not already"})]})]}),u&&y("div",{className:U(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex"]),children:[y("div",{className:U(["w-1 bg-[#d36cff]"])}),y("div",{className:U(["flex-1"]),children:[y("div",{className:U(["px-3 py-2 text-gray-100 text-sm font-semibold"]),children:"No changes detected"}),y("div",{className:U(["px-3 pb-2 text-gray-400 text-xs"]),children:"This component would not of rendered if it was memoized"})]})]}),y("div",{className:U(["flex w-full"]),children:[y("div",{className:U(["flex flex-col border border-[#27272A] rounded-l-sm overflow-hidden w-1/3"]),children:[y("div",{className:U(["text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Props"}),t.changes.props.length>0?t.changes.props.toSorted((d,f)=>f.count-d.count).map(d=>y("div",{className:U(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[y("span",{className:U(["text-white "]),children:d.name}),y("div",{className:U([" text-[8px]  text-[#d36cff] pl-1 py-1 "]),children:[d.count,"/",t.count,"x"]})]},d.name)):y("div",{className:U(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),y("div",{className:U(["flex flex-col border border-[#27272A] border-l-0 overflow-hidden w-1/3"]),children:[y("div",{className:U([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed State"}),t.changes.state.length>0?t.changes.state.toSorted((d,f)=>f.count-d.count).map(d=>y("div",{className:U(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[y("span",{className:U(["text-white "]),children:["index ",d.index]}),y("div",{className:U(["rounded-full  text-[#d36cff] pl-1 py-1 text-[8px]"]),children:[d.count,"/",t.count,"x"]})]},d.index)):y("div",{className:U(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),y("div",{className:U(["flex flex-col border border-[#27272A] border-l-0 rounded-r-sm overflow-hidden w-1/3"]),children:[y("div",{className:U([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Context"}),t.changes.context.length>0?t.changes.context.toSorted((d,f)=>f.count-d.count).map(d=>y("div",{className:U(["flex flex-col justify-between items-center border-t  border-[#27272A] px-1 py-1 bg-[#0A0A0A] text-[10px] overflow-x-auto"]),children:[y("span",{className:U(["text-white "]),children:d.name}),y("div",{className:U(["rounded-full text-[#d36cff] pl-1 py-1 text-[8px] text-wrap"]),children:[d.count,"/",t.count,"x"]})]},d.name)):y("div",{className:U(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A] py-2"]),children:"No changes"})]})]})]})},U4=()=>{const{notificationState:e,setNotificationState:t}=Sn(),[r,a]=Ce("..."),s=fe(null);if(ke(()=>{const l=setInterval(()=>{a(u=>u==="..."?"":u+".")},500);return()=>clearInterval(l)},[]),!e.selectedEvent)return y("div",{ref:s,className:U(["h-full w-full flex flex-col items-center justify-center relative py-2 px-4"]),children:[y("div",{className:U(["p-2 flex justify-center items-center border-[#27272A] absolute top-0 right-0"]),children:y("button",{onClick:()=>{Ze.value={view:"none"}},children:y(Bu,{size:18,className:"text-[#6F6F78]"})})}),y("div",{className:U(["flex flex-col items-start pt-5 bg-[#0A0A0A] p-5 rounded-sm max-w-md"," shadow-lg"]),children:y("div",{className:U(["flex flex-col items-start gap-y-4"]),children:[y("div",{className:U(["flex items-center"]),children:y("span",{className:U(["text-zinc-400 font-medium text-[17px]"]),children:["Scanning for slowdowns",r]})}),e.events.length!==0&&y("p",{className:U(["text-xs"]),children:["Click on an item in the"," ",y("span",{className:U(["text-purple-400"]),children:"History"})," list to get started"]}),y("p",{className:U(["text-zinc-600 text-xs"]),children:"You don't need to keep this panel open for React Scan to record slowdowns"}),y("p",{className:U(["text-zinc-600 text-xs"]),children:"Enable audio alerts to hear a delightful ding every time a large slowdown is recorded"}),y("button",{onClick:()=>{if(e.audioNotificationsOptions.enabled){t(u=>{var d,f;return((d=u.audioNotificationsOptions.audioContext)==null?void 0:d.state)!=="closed"&&((f=u.audioNotificationsOptions.audioContext)==null||f.close()),localStorage.setItem("react-scan-notifications-audio","false"),{...u,audioNotificationsOptions:{audioContext:null,enabled:!1}}});return}localStorage.setItem("react-scan-notifications-audio","true");const l=new AudioContext;Bm(l),t(u=>({...u,audioNotificationsOptions:{enabled:!0,audioContext:l}}))},className:U(["px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-sm w-full"," text-sm flex items-center gap-x-2 justify-center"]),children:e.audioNotificationsOptions.enabled?y(je,{children:y("span",{className:"flex items-center gap-x-1",children:"Disable audio alerts"})}):y(je,{children:y("span",{className:"flex items-center gap-x-1",children:"Enable audio alerts"})})})]})})]});switch(e.route){case"render-visualization":return y(Wc,{children:y(D4,{selectedEvent:e.selectedEvent})});case"render-explanation":{if(!e.selectedFiber)throw new Error("Invariant: must have selected fiber when viewing render explanation");return y(Wc,{children:y(j4,{selectedFiber:e.selectedFiber,selectedEvent:e.selectedEvent})})}case"other-visualization":return y(Wc,{children:y("div",{className:U(["flex w-full h-full flex-col overflow-y-auto"]),id:"overview-scroll-container",children:y(C4,{selectedEvent:e.selectedEvent})})});case"optimize":return y(Wc,{children:y(k4,{selectedEvent:e.selectedEvent})})}e.route},Wc=({children:e})=>{const{notificationState:t}=Sn();if(!t.selectedEvent)throw new Error("Invariant: d must have selected event when viewing render explanation");return y("div",{className:U(["w-full h-full flex flex-col gap-y-2"]),children:[y("div",{className:U(["h-[50px] w-full"]),children:y(y4,{selectedEvent:t.selectedEvent})}),y("div",{className:U(["h-calc(100%-50px) flex flex-col overflow-y-auto px-3"]),children:e})]})},$4=({selectedEvent:e})=>{const t=_l(e);switch(e.kind){case"interaction":return y("div",{className:U(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:y("div",{className:U(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[y("div",{className:U(["flex items-center gap-x-2 "]),children:[y("span",{className:U(["text-[#5a5a5a] mr-0.5"]),children:e.type==="click"?"Clicked ":"Typed in "}),y("span",{children:ll(e.componentPath)}),y("div",{className:U(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",t==="low"&&"bg-green-500/50",t==="needs-improvement"&&"bg-[#b77116]",t==="high"&&"bg-[#b94040]"]),children:[zt(e.timing).toFixed(0),"ms processing time"]})]}),y("div",{className:U(["flex items-center gap-x-2  justify-end ml-auto"]),children:y("div",{className:U(["p-2 flex justify-center items-center border-[#27272A]"]),children:y("button",{onClick:()=>{Ze.value={view:"none"}},title:"Close",children:y(Bu,{size:18,className:"text-[#6F6F78]"})})})})]})});case"dropped-frames":return y("div",{className:U(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:y("div",{className:U(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[y("div",{className:U(["flex items-center gap-x-2 "]),children:["FPS Drop",y("div",{className:U(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",t==="low"&&"bg-green-500/50",t==="needs-improvement"&&"bg-[#b77116]",t==="high"&&"bg-[#b94040]"]),children:["dropped to ",e.fps," FPS"]})]}),y("div",{className:U(["flex items-center gap-x-2 w-2/4 justify-end ml-auto"]),children:y("div",{className:U(["p-2 flex justify-center items-center border-[#27272A]"]),children:y("button",{onClick:()=>{Ze.value={view:"none"}},children:y(Bu,{size:18,className:"text-[#6F6F78]"})})})})]})})}},L4=({flashingItemsCount:e,totalEvents:t})=>{const[r,a]=Ce(!1),s=fe(0),l=fe(0);return ke(()=>{if(s.current>=t)return;const u=Date.now(),d=250,f=u-l.current;if(f>=d){a(!1);const h=setTimeout(()=>{s.current=t,l.current=Date.now(),a(!0),setTimeout(()=>{a(!1)},2e3)},50);return()=>clearTimeout(h)}else{const h=d-f,v=setTimeout(()=>{a(!1),setTimeout(()=>{s.current=t,l.current=Date.now(),a(!0),setTimeout(()=>{a(!1)},2e3)},50)},h);return()=>clearTimeout(v)}},[e]),r},Nw=({item:e,shouldFlash:t})=>{var d;const[r,a]=Ce(!1),s=e.events.map(_l).reduce((f,h)=>{switch(h){case"high":return"high";case"needs-improvement":return f==="high"?"high":"needs-improvement";case"low":return f}},"low"),l=e.events.reduce((f,h)=>t(h.id)?f+1:f,0),u=L4({flashingItemsCount:l,totalEvents:e.events.length});return y("div",{className:U(["flex flex-col gap-y-0.5"]),children:[y("button",{onClick:()=>a(f=>!f),className:U(["pl-2 py-1.5  text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",u&&!r&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[y("div",{className:U(["w-4/5 flex items-center justify-start h-full text-xs truncate gap-x-1.5"]),children:[y("span",{className:U(["min-w-fit"]),children:y(o_,{className:U(["text-[#A1A1AA] transition-transform",r?"rotate-90":""]),size:14},`chevron-${e.timestamp}`)}),y("span",{className:U(["text-xs"]),children:e.kind==="collapsed-frame-drops"?"FPS Drops":ll(((d=e.events.at(0))==null?void 0:d.componentPath)??[])})]}),y("div",{className:U(["ml-auto min-w-fit flex justify-end items-center"]),children:y("div",{style:{lineHeight:"10px"},className:U(["w-fit flex items-center text-[10px] justify-center h-full text-white px-1 py-1 rounded-sm font-semibold",s==="low"&&"bg-green-500/60",s==="needs-improvement"&&"bg-[#b77116] text-[10px]",s==="high"&&"bg-[#b94040]"]),children:["x",e.events.length]})})]}),r&&y(H4,{children:e.events.toSorted((f,h)=>h.timestamp-f.timestamp).map(f=>y(c_,{event:f,shouldFlash:t(f.id)}))})]})},H4=({children:e})=>y("div",{className:"relative pl-6 flex flex-col gap-y-1",children:[y("div",{className:"absolute left-3 top-0 bottom-0 w-px bg-[#27272A]"}),e]}),I4=e=>{const t=fe([]),[r,a]=Ce(new Set),s=fe(!0);return ke(()=>{if(s.current){s.current=!1,t.current=e;return}const l=new Set(e.map(f=>f.id)),u=new Set(t.current.map(f=>f.id)),d=new Set;l.forEach(f=>{u.has(f)||d.add(f)}),d.size>0&&(a(d),setTimeout(()=>{a(new Set)},2e3)),t.current=e},[e]),l=>r.has(l)},B4=({shouldFlash:e})=>{const[t,r]=Ce(e);return ke(()=>{if(e){r(!0);const a=setTimeout(()=>{r(!1)},1e3);return()=>clearTimeout(a)}},[e]),t},c_=({event:e,shouldFlash:t})=>{var u,d;const{notificationState:r,setNotificationState:a}=Sn(),s=_l(e),l=B4({shouldFlash:t});switch(e.kind){case"interaction":return y("button",{onClick:()=>{a(f=>({...f,selectedEvent:e,route:"render-visualization",selectedFiber:null}))},className:U(["pl-2 py-1.5  text-sm flex w-full items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",e.id===((u=r.selectedEvent)==null?void 0:u.id)&&"bg-[#18181B]",l&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[y("div",{className:U(["w-4/5 flex items-center justify-start h-full gap-x-1.5"]),children:[y("span",{className:U(["min-w-fit text-xs"]),children:Kn(()=>{switch(e.type){case"click":return y(p4,{size:14});case"keyboard":return y(m4,{size:14})}})}),y("span",{className:U(["text-xs pr-1 truncate"]),children:ll(e.componentPath)})]}),y("div",{className:U([" min-w-fit flex justify-end items-center ml-auto"]),children:y("div",{style:{lineHeight:"10px"},className:U(["gap-x-0.5 w-fit flex items-end justify-center h-full text-white px-1 py-1 rounded-sm font-semibold text-[10px]",s==="low"&&"bg-green-500/50",s==="needs-improvement"&&"bg-[#b77116] text-[10px]",s==="high"&&"bg-[#b94040]"]),children:y("div",{style:{lineHeight:"10px"},className:U(["text-[10px] text-white flex items-end"]),children:[zt(e.timing).toFixed(0),"ms"]})})})]});case"dropped-frames":return y("button",{onClick:()=>{a(f=>({...f,selectedEvent:e,route:"render-visualization",selectedFiber:null}))},className:U(["pl-2 py-1.5  w-full text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",e.id===((d=r.selectedEvent)==null?void 0:d.id)&&"bg-[#18181B]",l&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[y("div",{className:U(["w-4/5 flex items-center justify-start h-full text-xs truncate"]),children:[y(v4,{size:14,className:"mr-1.5"})," FPS Drop"]}),y("div",{className:U([" min-w-fit flex justify-end items-center ml-auto"]),children:y("div",{style:{lineHeight:"10px"},className:U(["w-fit flex items-center justify-center h-full text-white px-1 py-1 rounded-sm text-[10px] font-bold",s==="low"&&"bg-green-500/60",s==="needs-improvement"&&"bg-[#b77116] text-[10px]",s==="high"&&"bg-[#b94040]"]),children:[e.fps," FPS"]})})]})}},q4=e=>e.reduce((r,a)=>{const s=r.at(-1);if(!s)return[{kind:"single",event:a,timestamp:a.timestamp}];switch(s.kind){case"collapsed-keyboard":return a.kind==="interaction"&&a.type==="keyboard"&&a.componentPath.join("-")===s.events[0].componentPath.join("-")?[...r.filter(u=>u!==s),{kind:"collapsed-keyboard",events:[...s.events,a],timestamp:Math.max(...[...s.events,a].map(u=>u.timestamp))}]:[...r,{kind:"single",event:a,timestamp:a.timestamp}];case"single":return s.event.kind==="interaction"&&s.event.type==="keyboard"&&a.kind==="interaction"&&a.type==="keyboard"&&s.event.componentPath.join("-")===a.componentPath.join("-")?[...r.filter(u=>u!==s),{kind:"collapsed-keyboard",events:[s.event,a],timestamp:Math.max(s.event.timestamp,a.timestamp)}]:s.event.kind==="dropped-frames"&&a.kind==="dropped-frames"?[...r.filter(u=>u!==s),{kind:"collapsed-frame-drops",events:[s.event,a],timestamp:Math.max(s.event.timestamp,a.timestamp)}]:[...r,{kind:"single",event:a,timestamp:a.timestamp}];case"collapsed-frame-drops":return a.kind==="dropped-frames"?[...r.filter(u=>u!==s),{kind:"collapsed-frame-drops",events:[...s.events,a],timestamp:Math.max(...[...s.events,a].map(u=>u.timestamp))}]:[...r,{kind:"single",event:a,timestamp:a.timestamp}]}},[]),u_=(e=150)=>{const{notificationState:t}=Sn(),[r,a]=Ce(t.events);return ke(()=>{setTimeout(()=>{a(t.events)},e)},[t.events]),[r,a]},F4=()=>{const{notificationState:e,setNotificationState:t}=Sn(),r=I4(e.events),[a,s]=u_(),l=q4(a).toSorted((u,d)=>d.timestamp-u.timestamp);return y("div",{className:U(["w-full h-full gap-y-2 flex flex-col border-r border-[#27272A] overflow-y-auto"]),children:[y("div",{className:U(["text-sm text-[#65656D] pl-3 pr-1 w-full flex items-center justify-between"]),children:[y("span",{children:"History"}),y(s_,{wrapperProps:{className:"h-full flex items-center justify-center ml-auto"},triggerContent:y("button",{className:U(["hover:bg-[#18181B] rounded-full p-2"]),title:"Clear all events",onClick:()=>{sl.getState().actions.clear(),t(u=>({...u,selectedEvent:null,selectedFiber:null,route:u.route==="other-visualization"?"other-visualization":"render-visualization"})),s([])},children:y(g4,{className:U([""]),size:16})}),children:y("div",{className:U(["w-full flex justify-center"]),children:"Clear all events"})})]}),y("div",{className:U(["flex flex-col px-1 gap-y-1"]),children:[l.length===0&&y("div",{className:U(["flex items-center justify-center text-zinc-500 text-sm py-4"]),children:"No Events"}),l.map(u=>Kn(()=>{switch(u.kind){case"collapsed-keyboard":return y(Nw,{shouldFlash:r,item:u});case"single":return y(c_,{event:u.event,shouldFlash:r(u.event.id)},u.event.id);case"collapsed-frame-drops":return y(Nw,{shouldFlash:r,item:u})}}))]})]})},Y4=e=>Object.values(e).map(r=>({id:Gn(),totalTime:r.nodeInfo.reduce((a,s)=>a+s.selfTime,0),count:r.nodeInfo.length,name:r.nodeInfo[0].name,deletedAll:!1,parents:r.parents,hasMemoCache:r.hasMemoCache,wasFiberRenderMount:r.wasFiberRenderMount,elements:r.nodeInfo.map(a=>a.element),changes:{context:r.changes.fiberContext.current.filter(a=>r.changes.fiberContext.changesCounts.get(a.name)).map(a=>({name:String(a.name),count:r.changes.fiberContext.changesCounts.get(a.name)??0})),props:r.changes.fiberProps.current.filter(a=>r.changes.fiberProps.changesCounts.get(a.name)).map(a=>({name:String(a.name),count:r.changes.fiberProps.changesCounts.get(a.name)??0})),state:r.changes.fiberState.current.filter(a=>r.changes.fiberState.changesCounts.get(Number(a.name))).map(a=>({index:a.name,count:r.changes.fiberState.changesCounts.get(Number(a.name))??0}))}})),P4=e=>{ke(()=>{const r=setInterval(()=>{e.forEach(a=>{a.groupedFiberRenders&&a.groupedFiberRenders.forEach(s=>{if(s.deletedAll)return;if(!s.elements||s.elements.length===0){s.deletedAll=!0;return}const l=s.elements.length;s.elements=s.elements.filter(u=>u&&u.isConnected),s.elements.length===0&&l>0&&(s.deletedAll=!0)})})},5e3);return()=>{clearInterval(r)}},[e])},d_=()=>{const e=i4(),t=[];return P4(t),e.state.events.forEach(r=>{const a=r.kind==="interaction"?r.data.meta.detailedTiming.fiberRenders:r.data.meta.fiberRenders,s=Y4(a),l=s.reduce((u,d)=>u+d.totalTime,0);switch(r.kind){case"interaction":{const{commitEnd:u,jsEndDetail:d,interactionStartDetail:f,rafStart:h}=r.data.meta.detailedTiming,v=Math.max(0,d-f-l),g=Math.max(r.data.meta.latency-(u-f),0);t.push({componentPath:r.data.meta.detailedTiming.componentPath,groupedFiberRenders:s,id:r.id,kind:"interaction",memory:null,timestamp:r.data.startAt,type:r.data.meta.detailedTiming.interactionType==="keyboard"?"keyboard":"click",timing:{renderTime:l,kind:"interaction",otherJSTime:v,framePreparation:h-d,frameConstruction:u-h,frameDraw:g}});return}case"long-render":{t.push({kind:"dropped-frames",id:r.id,memory:null,timing:{kind:"dropped-frames",renderTime:l,otherTime:r.data.meta.latency},groupedFiberRenders:s,timestamp:r.data.startAt,fps:r.data.meta.fps});return}}}),t},X4=1e3,G4=()=>{const{notificationState:e,setNotificationState:t}=Sn(),r=fe(null),a=fe(null),s=fe(0),[l]=u_(),u=l.filter(d=>_l(d)==="high").length;return ke(()=>{const d=localStorage.getItem("react-scan-notifications-audio");if(d!=="false"&&d!=="true"){localStorage.setItem("react-scan-notifications-audio","false");return}if(d!=="false"){t(h=>h.audioNotificationsOptions.enabled?h:{...h,audioNotificationsOptions:{enabled:!0,audioContext:new AudioContext}});return}},[]),ke(()=>{const{audioNotificationsOptions:d}=e;if(!d.enabled||u===0||r.current&&r.current>=u)return;a.current&&clearTimeout(a.current);const h=Date.now()-s.current,v=Math.max(0,X4-h);a.current=setTimeout(()=>{Bm(d.audioContext),r.current=u,s.current=Date.now(),a.current=null},v)},[u]),ke(()=>{u===0&&(r.current=null)},[u]),ke(()=>()=>{a.current&&clearTimeout(a.current)},[]),null},V4=Im((e,t)=>{const r=d_(),[a,s]=Ce({detailsExpanded:!1,events:r,filterBy:"latest",moreInfoExpanded:!1,route:"render-visualization",selectedEvent:r.toSorted((l,u)=>l.timestamp-u.timestamp).at(-1)??null,selectedFiber:null,routeMessage:null,audioNotificationsOptions:{enabled:!1,audioContext:null}});return a.events=r,y(a_.Provider,{value:{notificationState:a,setNotificationState:s,setRoute:({route:l,routeMessage:u})=>{s(d=>{const f={...d,route:l,routeMessage:u};switch(l){case"render-visualization":return Bs(),{...f,selectedFiber:null};case"optimize":return Bs(),{...f,selectedFiber:null};case"other-visualization":return Bs(),{...f,selectedFiber:null};case"render-explanation":return Bs(),f}})}},children:[y(G4,{}),y(Q4,{ref:t})]})}),Q4=Im((e,t)=>{var a;const{notificationState:r}=Sn();return y("div",{ref:t,className:U(["h-full w-full flex flex-col"]),children:[r.selectedEvent&&y("div",{className:U(["w-full h-[48px] flex flex-col",r.moreInfoExpanded&&"h-[235px]",r.moreInfoExpanded&&r.selectedEvent.kind==="dropped-frames"&&"h-[150px]"]),children:[y($4,{selectedEvent:r.selectedEvent}),r.moreInfoExpanded&&y(K4,{})]}),y("div",{className:U(["flex ",r.selectedEvent?"h-[calc(100%-48px)]":"h-full",r.moreInfoExpanded&&"h-[calc(100%-200px)]",r.moreInfoExpanded&&((a=r.selectedEvent)==null?void 0:a.kind)==="dropped-frames"&&"h-[calc(100%-150px)]"]),children:[y("div",{className:U(["h-full min-w-[200px]"]),children:y(F4,{})}),y("div",{className:U(["w-[calc(100%-200px)] h-full overflow-y-auto"]),children:y(U4,{})})]})]})}),K4=()=>{const{notificationState:e}=Sn();if(!e.selectedEvent)throw new Error("Invariant must have selected event for more info");const t=e.selectedEvent;return y("div",{className:U(["px-4 py-2 border-b border-[#27272A] bg-[#18181B]/50 h-[calc(100%-40px)]",t.kind==="dropped-frames"&&"h-[calc(100%-25px)]"]),children:y("div",{className:U(["flex flex-col gap-y-4 h-full"]),children:Kn(()=>{switch(t.kind){case"interaction":return y(je,{children:[y("div",{className:U(["flex items-center gap-x-3"]),children:[y("span",{className:"text-[#6F6F78] text-xs font-medium",children:t.type==="click"?"Clicked component location":"Typed in component location"}),y("div",{className:"font-mono text-[#E4E4E7] flex items-center bg-[#27272A] pl-2 py-1 rounded-sm overflow-x-auto",children:t.componentPath.toReversed().map((r,a)=>y(je,{children:[y("span",{style:{lineHeight:"14px"},className:"text-[10px] whitespace-nowrap",children:r},r),a<t.componentPath.length-1&&y("span",{className:"text-[#6F6F78] mx-0.5",children:"‹"})]}))})]}),y("div",{className:U(["flex items-center gap-x-3"]),children:[y("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),y("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[zt(t.timing).toFixed(0),"ms"]})]}),y("div",{className:U(["flex items-center gap-x-3"]),children:[y("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),y("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]});case"dropped-frames":return y(je,{children:[y("div",{className:U(["flex items-center gap-x-3"]),children:[y("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),y("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[zt(t.timing).toFixed(0),"ms"]})]}),y("div",{className:U(["flex items-center gap-x-3"]),children:[y("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),y("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]})}})})})},W4=Fm(()=>{var b;const e=d_(),[t,r]=Ce(e);ke(()=>{const w=setTimeout(()=>{r(e)},600);return()=>{clearTimeout(w)}},[e]);const a=ie.inspectState,s=a.value.kind==="inspecting",l=a.value.kind==="focused",[u,d]=Ce([]),f=mt(()=>{switch(ie.inspectState.value.kind){case"inspecting":{Ze.value={view:"none"},ie.inspectState.value={kind:"inspect-off"};return}case"focused":{Ze.value={view:"inspector"},ie.inspectState.value={kind:"inspecting",hoveredDomElement:null};return}case"inspect-off":{Ze.value={view:"none"},ie.inspectState.value={kind:"inspecting",hoveredDomElement:null};return}case"uninitialized":return}},[]),h=mt(w=>{if(w.preventDefault(),w.stopPropagation(),!Ue.instrumentation)return;const S=!Ue.instrumentation.isPaused.value;Ue.instrumentation.isPaused.value=S;const T=qr("react-scan-options");tn("react-scan-options",{...T,enabled:!S})},[]);al(()=>{ie.inspectState.value.kind==="uninitialized"&&(ie.inspectState.value={kind:"inspect-off"})});let v=null,g="#999";return s?(v=y(dt,{name:"icon-inspect"}),g="#8e61e3"):l?(v=y(dt,{name:"icon-focus"}),g="#8e61e3"):(v=y(dt,{name:"icon-inspect"}),g="#999"),jm(()=>{if(Ze.value.view!=="notifications")return;const w=new Set(e.map(S=>S.id));d([...w.values()])},[e.length,Ze.value.view]),y("div",{className:"flex max-h-9 min-h-9 flex-1 items-stretch overflow-hidden",children:[y("div",{className:"h-full flex items-center min-w-fit",children:y("button",{type:"button",id:"react-scan-inspect-element",title:"Inspect element",onClick:f,className:"button flex items-center justify-center h-full w-full pl-3 pr-2.5",style:{color:g},children:v})}),y("div",{className:"h-full flex items-center justify-center",children:y("button",{type:"button",id:"react-scan-notifications",title:"Notifications",onClick:()=>{switch(ie.inspectState.value.kind!=="inspect-off"&&(ie.inspectState.value={kind:"inspect-off"}),Ze.value.view){case"inspector":{ie.inspectState.value={kind:"inspect-off"};const w=new Set(e.map(S=>S.id));d([...w.values()]),Ze.value={view:"notifications"};return}case"notifications":{Ze.value={view:"none"};return}case"none":{const w=new Set(e.map(S=>S.id));d([...w.values()]),Ze.value={view:"notifications"};return}}},className:"button flex items-center justify-center h-full pl-2.5 pr-2.5",style:{color:g},children:y(u4,{events:t.filter(w=>!u.includes(w.id)).map(w=>_l(w)==="high"),size:16,className:U(["text-[#999]",Ze.value.view==="notifications"&&"text-[#8E61E3]"])})})}),y(LA,{checked:!((b=Ue.instrumentation)!=null&&b.isPaused.value),onChange:h,className:"place-self-center",title:"Outline Re-renders"}),Ue.options.value.showFPS&&y(IA,{})]})}),Z4=ga(()=>ie.inspectState.value.kind==="inspecting"),J4=ga(()=>U("relative","flex-1","flex flex-col","rounded-t-lg","overflow-hidden","opacity-100","transition-[opacity]",Z4.value&&"opacity-0 duration-0 delay-0")),eM=ga(()=>Ze.value.view==="inspector"),tM=ga(()=>Ze.value.view==="notifications"),nM=()=>y("div",{className:U("flex flex-1 flex-col","overflow-hidden z-10","rounded-lg","bg-black","opacity-100","transition-[border-radius]","peer-hover/left:rounded-l-none","peer-hover/right:rounded-r-none","peer-hover/top:rounded-t-none","peer-hover/bottom:rounded-b-none"),children:[y("div",{className:J4,children:[y($A,{}),y("div",{className:U("relative","flex-1 flex","text-white","bg-[#0A0A0A]","transition-opacity delay-150","overflow-hidden","border-b border-[#222]"),children:[y(zw,{isOpen:eM,children:y(FC,{})}),y(zw,{isOpen:tM,children:y(V4,{})})]})]}),y(W4,{})]}),zw=({isOpen:e,children:t})=>y("div",{className:U("flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",e.value&&"opacity-100 delay-150 pointer-events-auto"),children:y("div",{className:"absolute inset-0 flex",children:t})}),Zc=(e,t,r)=>e+(t-e)*r,ap={frameInterval:1e3/60,speeds:{fast:.51,slow:.1,off:0}},oo=fr&&window.devicePixelRatio||1,rM=()=>{const e=fe(null),t=fe(null),r=fe(null),a=fe(null),s=fe(null),l=fe(0),u=fe(),d=fe(new Map),f=fe(!1),h=fe(0),v=(A,z,$,V)=>{A.save(),A.strokeStyle="white",A.fillStyle="white",A.lineWidth=1.5;const J=V*.6,O=V*.5,F=z+(V-J)/2,W=$;A.beginPath(),A.arc(F+J/2,W+O/2,J/2,Math.PI,0,!1),A.stroke();const te=V*.8,re=V*.5,le=z+(V-te)/2,ce=$+O/2;A.fillRect(le,ce,te,re),A.restore()},g=(A,z,$,V)=>{if(!V)return;const J=24,O=8,W=((V==null?void 0:V.type)&&Nt(V.type))??"Unknown";A.save(),A.font="12px system-ui, -apple-system, sans-serif";const re=A.measureText(W).width,le=$==="locked"?14:0,ce=$==="locked"?6:0,ve=re+O*2+le+ce,ge=z.left,ot=z.top-J-4;if(A.fillStyle="rgb(37, 37, 38, .75)",A.beginPath(),A.roundRect(ge,ot,ve,J,3),A.fill(),$==="locked"){const Vr=ge+O,zi=ot+(J-le)/2+2;v(A,Vr,zi,le),a.current={x:Vr,y:zi,width:le,height:le}}else a.current=null;A.fillStyle="white",A.textBaseline="middle";const qn=ge+O+($==="locked"?le+ce:0);A.fillText(W,qn,ot+J/2),A.restore()},b=(A,z,$,V)=>{if(!r.current)return;const J=r.current;z.clearRect(0,0,A.width,A.height),z.strokeStyle="rgba(142, 97, 227, 0.5)",z.fillStyle="rgba(173, 97, 230, 0.10)",$==="locked"?z.setLineDash([]):z.setLineDash([4]),z.lineWidth=1,z.fillRect(J.left,J.top,J.width,J.height),z.strokeRect(J.left,J.top,J.width,J.height),g(z,J,$,V)},w=(A,z,$,V,J,O)=>{const F=Ue.options.value.animationSpeed,W=ap.speeds[F]??ap.speeds.off,te=re=>{if(re-h.current<ap.frameInterval){l.current=requestAnimationFrame(te);return}if(h.current=re,!r.current){cancelAnimationFrame(l.current);return}r.current={left:Zc(r.current.left,$.left,W),top:Zc(r.current.top,$.top,W),width:Zc(r.current.width,$.width,W),height:Zc(r.current.height,$.height,W)},b(A,z,V,J),Math.abs(r.current.left-$.left)>.1||Math.abs(r.current.top-$.top)>.1||Math.abs(r.current.width-$.width)>.1||Math.abs(r.current.height-$.height)>.1?l.current=requestAnimationFrame(te):(r.current=$,b(A,z,V,J),cancelAnimationFrame(l.current),z.restore())};cancelAnimationFrame(l.current),clearTimeout(u.current),l.current=requestAnimationFrame(te),u.current=setTimeout(()=>{cancelAnimationFrame(l.current),r.current=$,b(A,z,V,J),z.restore()},1e3)},S=(A,z,$,V,J)=>{if(z.save(),!r.current){r.current=$,b(A,z,V,J),z.restore();return}w(A,z,$,V,J)},T=async(A,z,$,V)=>{if(!A||!z||!$)return;const{parentCompositeFiber:J}=aa(A),O=await YC(A);!J||!O||S(z,$,O,V,J)},k=()=>{for(const A of d.current.values())A==null||A()},_=A=>{const z=A.getContext("2d");z&&z.clearRect(0,0,A.width,A.height),r.current=null,a.current=null,s.current=null,A.classList.remove("fade-in"),f.current=!1},E=A=>{if(!e.current||f.current)return;const z=V=>{!e.current||V.propertyName!=="opacity"||!f.current||(e.current.removeEventListener("transitionend",z),_(e.current),A==null||A())},$=d.current.get("fade-out");$&&($(),d.current.delete("fade-out")),e.current.addEventListener("transitionend",z),d.current.set("fade-out",()=>{var V;(V=e.current)==null||V.removeEventListener("transitionend",z)}),f.current=!0,e.current.classList.remove("fade-in"),requestAnimationFrame(()=>{var V;(V=e.current)==null||V.classList.add("fade-out")})},M=()=>{e.current&&(f.current=!1,e.current.classList.remove("fade-out"),requestAnimationFrame(()=>{var A;(A=e.current)==null||A.classList.add("fade-in")}))},D=A=>{A!==s.current&&(s.current=A,Xp.has(A.tagName)?E():M(),ie.inspectState.value={kind:"inspecting",hoveredDomElement:A})},j=()=>{!r.current||!e.current||f.current||E()},Y=Ux(A=>{if(ie.inspectState.peek().kind!=="inspecting"||!t.current)return;t.current.style.pointerEvents="none";const $=document.elementFromPoint((A==null?void 0:A.clientX)??0,(A==null?void 0:A.clientY)??0);if(t.current.style.removeProperty("pointer-events"),clearTimeout(u.current),$&&$!==e.current){const{parentCompositeFiber:V}=aa($);if(V){const J=ju(V);if(J){D(J);return}}}j()},32),B=(A,z)=>{const $=a.current;if(!$)return!1;const V=z.getBoundingClientRect(),J=z.width/V.width,O=z.height/V.height,F=(A.clientX-V.left)*J,W=(A.clientY-V.top)*O,te=F/oo,re=W/oo;return te>=$.x&&te<=$.x+$.width&&re>=$.y&&re<=$.y+$.height},ee=A=>{A.kind==="focused"&&(ie.inspectState.value={kind:"inspecting",hoveredDomElement:A.focusedDomElement})},ne=A=>{var W;const z=["react-scan-inspect-element","react-scan-power"];if(A.target instanceof HTMLElement&&z.includes(A.target.id))return;const $=(W=s.current)==null?void 0:W.tagName;if($&&Xp.has($))return;A.preventDefault(),A.stopPropagation();const V=s.current??document.elementFromPoint(A.clientX,A.clientY);if(!V)return;const J=A.composedPath().at(0);if(J instanceof HTMLElement&&z.includes(J.id)){const te=new MouseEvent(A.type,A);te.__reactScanSyntheticEvent=!0,J.dispatchEvent(te);return}const{parentCompositeFiber:O}=aa(V);if(!O)return;const F=ju(O);if(!F){s.current=null,ie.inspectState.value={kind:"inspect-off"};return}ie.inspectState.value={kind:"focused",focusedDomElement:F,fiber:O}},pe=A=>{if(A.__reactScanSyntheticEvent)return;const z=ie.inspectState.peek(),$=e.current;if(!(!$||!t.current)){if(B(A,$)){A.preventDefault(),A.stopPropagation(),ee(z);return}z.kind==="inspecting"&&ne(A)}},de=A=>{var V;if(A.key!=="Escape")return;const z=ie.inspectState.peek();if(e.current&&((V=document.activeElement)==null?void 0:V.id)!=="react-scan-root"&&(Ze.value={view:"none"},z.kind==="focused"||z.kind==="inspecting"))switch(A.preventDefault(),A.stopPropagation(),z.kind){case"focused":{M(),r.current=null,s.current=z.focusedDomElement,ie.inspectState.value={kind:"inspecting",hoveredDomElement:z.focusedDomElement};break}case"inspecting":{E(()=>{id.value=!1,ie.inspectState.value={kind:"inspect-off"}});break}}},ae=(A,z,$)=>{var J;(J=d.current.get(A.kind))==null||J(),t.current&&A.kind!=="inspecting"&&(t.current.style.pointerEvents="none"),l.current&&cancelAnimationFrame(l.current);let V;switch(A.kind){case"inspect-off":E();return;case"inspecting":T(A.hoveredDomElement,z,$,"inspecting");break;case"focused":if(!A.focusedDomElement)return;s.current!==A.focusedDomElement&&(s.current=A.focusedDomElement),Ze.value={view:"inspector"},T(A.focusedDomElement,z,$,"locked"),V=ie.lastReportTime.subscribe(()=>{if(l.current&&r.current){const{parentCompositeFiber:O}=aa(A.focusedDomElement);O&&T(A.focusedDomElement,z,$,"locked")}}),V&&d.current.set(A.kind,V);break}},De=(A,z)=>{const $=A.getBoundingClientRect();A.width=$.width*oo,A.height=$.height*oo,z.scale(oo,oo),z.save()},Ie=()=>{const A=ie.inspectState.peek(),z=e.current;if(!z)return;const $=z==null?void 0:z.getContext("2d");$&&(cancelAnimationFrame(l.current),clearTimeout(u.current),De(z,$),r.current=null,A.kind==="focused"&&A.focusedDomElement?T(A.focusedDomElement,z,$,"locked"):A.kind==="inspecting"&&A.hoveredDomElement&&T(A.hoveredDomElement,z,$,"inspecting"))},qe=A=>{const z=ie.inspectState.peek(),$=e.current;$&&(z.kind==="inspecting"||B(A,$))&&(A.preventDefault(),A.stopPropagation(),A.stopImmediatePropagation())};return ke(()=>{const A=e.current;if(!A)return;const z=A==null?void 0:A.getContext("2d");if(!z)return;De(A,z);const $=ie.inspectState.subscribe(V=>{ae(V,A,z)});return window.addEventListener("scroll",Ie,{passive:!0}),window.addEventListener("resize",Ie,{passive:!0}),document.addEventListener("pointermove",Y,{passive:!0,capture:!0}),document.addEventListener("pointerdown",qe,{capture:!0}),document.addEventListener("click",pe,{capture:!0}),document.addEventListener("keydown",de,{capture:!0}),()=>{k(),$(),window.removeEventListener("scroll",Ie),window.removeEventListener("resize",Ie),document.removeEventListener("pointermove",Y,{capture:!0}),document.removeEventListener("click",pe,{capture:!0}),document.removeEventListener("pointerdown",qe,{capture:!0}),document.removeEventListener("keydown",de,{capture:!0}),l.current&&cancelAnimationFrame(l.current),clearTimeout(u.current)}},[]),y(je,{children:[y("div",{ref:t,className:U("fixed top-0 left-0 w-screen h-screen","z-[214748365]"),style:{pointerEvents:"none"}}),y("canvas",{ref:e,dir:"ltr",className:U("react-scan-inspector-overlay","fixed top-0 left-0 w-screen h-screen","pointer-events-none","z-[214748367]")})]})},iM=class{constructor(e,t){this.width=e,this.height=t,this.maxWidth=e-we*2,this.maxHeight=t-we*2}rightEdge(e){return this.width-e-we}bottomEdge(e){return this.height-e-we}isFullWidth(e){return e>=this.maxWidth}isFullHeight(e){return e>=this.maxHeight}},so,cl=()=>{const e=window.innerWidth,t=window.innerHeight;return so&&so.width===e&&so.height===t||(so=new iM(e,t)),so},aM=(e,t,r,a,s)=>{if(r){if(e==="top-left")return"bottom-right";if(e==="top-right")return"bottom-left";if(e==="bottom-left")return"top-right";if(e==="bottom-right")return"top-left";const[l,u]=t.split("-");if(e==="left")return`${l}-right`;if(e==="right")return`${l}-left`;if(e==="top")return`bottom-${u}`;if(e==="bottom")return`top-${u}`}if(a){if(e==="left")return`${t.split("-")[0]}-right`;if(e==="right")return`${t.split("-")[0]}-left`}if(s){if(e==="top")return`bottom-${t.split("-")[1]}`;if(e==="bottom")return`top-${t.split("-")[1]}`}return t},Qs=(e,t,r)=>{const a=getComputedStyle(document.body).direction==="rtl",s=window.innerWidth,l=window.innerHeight,u=t===Tt.width,d=u?t:Math.min(t,s-we*2),f=u?r:Math.min(r,l-we*2);let h,v,g=we,b=s-d-we,w=we,S=l-f-we;switch(e){case"top-right":h=a?-g:b,v=w;break;case"bottom-right":h=a?-g:b,v=S;break;case"bottom-left":h=a?-b:g,v=S;break;case"top-left":h=a?-b:g,v=w;break;default:h=g,v=w;break}return u&&(a?h=Math.min(-g,Math.max(h,-b)):h=Math.max(g,Math.min(h,b)),v=Math.max(w,Math.min(v,S))),{x:h,y:v}},oM=(e,t)=>{const[r,a]=t.split("-");return e!==r&&e!==a},sM=(e,t,r,a)=>r&&a?!0:!r&&!a?oM(e,t):r?e!==t.split("-")[0]:a?e!==t.split("-")[1]:!1,Jc=(e,t,r)=>{const a=r?Tt.width:Tt.initialHeight,s=r?cl().maxWidth:cl().maxHeight,l=e+t;return Math.min(Math.max(a,l),s)},lM=(e,t,r,a,s)=>{const l=getComputedStyle(document.body).direction==="rtl",u=window.innerWidth-we*2,d=window.innerHeight-we*2;let f=t.width,h=t.height,v=r.x,g=r.y;if(l&&e.includes("right")){const k=-r.x+t.width-we,_=Math.min(t.width+a,k);f=Math.min(u,Math.max(Tt.width,_)),v=r.x+(f-t.width)}if(l&&e.includes("left")){const k=window.innerWidth-r.x-we,_=Math.min(t.width-a,k);f=Math.min(u,Math.max(Tt.width,_))}if(!l&&e.includes("right")){const k=window.innerWidth-r.x-we,_=Math.min(t.width+a,k);f=Math.min(u,Math.max(Tt.width,_))}if(!l&&e.includes("left")){const k=r.x+t.width-we,_=Math.min(t.width-a,k);f=Math.min(u,Math.max(Tt.width,_)),v=r.x-(f-t.width)}if(e.includes("bottom")){const k=window.innerHeight-r.y-we,_=Math.min(t.height+s,k);h=Math.min(d,Math.max(Tt.initialHeight,_))}if(e.includes("top")){const k=r.y+t.height-we,_=Math.min(t.height-s,k);h=Math.min(d,Math.max(Tt.initialHeight,_)),g=r.y-(h-t.height)}let b=we,w=window.innerWidth-we-f,S=we,T=window.innerHeight-we-h;return l?v=Math.min(-b,Math.max(v,-w)):v=Math.max(b,Math.min(v,w)),g=Math.max(S,Math.min(g,T)),{newSize:{width:f,height:h},newPosition:{x:v,y:g}}},cM=e=>{const t=cl(),r={"top-left":Math.hypot(e.x,e.y),"top-right":Math.hypot(t.maxWidth-e.x,e.y),"bottom-left":Math.hypot(e.x,t.maxHeight-e.y),"bottom-right":Math.hypot(t.maxWidth-e.x,t.maxHeight-e.y)};let a="top-left";for(const s in r)r[s]<r[a]&&(a=s);return a},uM=(e,t,r,a,s=100)=>{const l=r!==void 0?e-r:0,u=a!==void 0?t-a:0,d=window.innerWidth/2,f=window.innerHeight/2,h=l>s,v=l<-s,g=u>s,b=u<-s;if(h||v){const w=t>f;return h?w?"bottom-right":"top-right":w?"bottom-left":"top-left"}if(g||b){const w=e>d;return g?w?"bottom-right":"bottom-left":w?"top-right":"top-left"}return e>d?t>f?"bottom-right":"top-right":t>f?"bottom-left":"top-left"},eu=({position:e})=>{const t=fe(null),r=fe(null),a=fe(null),s=fe(null);ke(()=>{const d=t.current;if(!d)return;const f=()=>{d.classList.remove("pointer-events-none");const g=ie.inspectState.value.kind==="focused",b=Ze.value.view!=="none";(g||b)&&sM(e,se.value.corner,se.value.dimensions.isFullWidth,se.value.dimensions.isFullHeight)?d.classList.remove("hidden","pointer-events-none","opacity-0"):d.classList.add("hidden","pointer-events-none","opacity-0")},h=se.subscribe(g=>{r.current!==null&&a.current!==null&&s.current!==null&&g.dimensions.width===r.current&&g.dimensions.height===a.current&&g.corner===s.current||(f(),r.current=g.dimensions.width,a.current=g.dimensions.height,s.current=g.corner)}),v=ie.inspectState.subscribe(()=>{f()});return()=>{h(),v(),r.current=null,a.current=null,s.current=null}},[]);const l=mt(d=>{d.preventDefault(),d.stopPropagation();const f=qp.value;if(!f)return;const h=f.style,{dimensions:v}=se.value,g=d.clientX,b=d.clientY,w=v.width,S=v.height,T=v.position;se.value={...se.value,dimensions:{...v,isFullWidth:!1,isFullHeight:!1,width:w,height:S,position:T}};let k=null;const _=M=>{k||(h.transition="none",k=requestAnimationFrame(()=>{const{newSize:D,newPosition:j}=lM(e,{width:w,height:S},T,M.clientX-g,M.clientY-b);h.transform=`translate3d(${j.x}px, ${j.y}px, 0)`,h.width=`${D.width}px`,h.height=`${D.height}px`;const Y=Math.floor(D.width-Qn/2),B=se.value.componentsTree.width,ee=Math.min(Y,Math.max(Qn,B));se.value={...se.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:D.width,height:D.height,position:j},componentsTree:{...se.value.componentsTree,width:ee}},k=null}))},E=()=>{k&&(cancelAnimationFrame(k),k=null),document.removeEventListener("pointermove",_),document.removeEventListener("pointerup",E);const{dimensions:M,corner:D}=se.value,j=cl(),Y=j.isFullWidth(M.width),B=j.isFullHeight(M.height),ee=Y&&B;let ne=D;(ee||Y||B)&&(ne=cM(M.position));const pe=Qs(ne,M.width,M.height),de=()=>{f.removeEventListener("transitionend",de)};f.addEventListener("transitionend",de),h.transform=`translate3d(${pe.x}px, ${pe.y}px, 0)`,se.value={...se.value,corner:ne,dimensions:{isFullWidth:Y,isFullHeight:B,width:M.width,height:M.height,position:pe},lastDimensions:{isFullWidth:Y,isFullHeight:B,width:M.width,height:M.height,position:pe}},tn(Lr,{corner:ne,dimensions:se.value.dimensions,lastDimensions:se.value.lastDimensions,componentsTree:se.value.componentsTree})};document.addEventListener("pointermove",_,{passive:!0}),document.addEventListener("pointerup",E)},[]),u=mt(d=>{d.preventDefault(),d.stopPropagation();const f=qp.value;if(!f)return;const h=f.style,{dimensions:v,corner:g}=se.value,b=cl(),w=b.isFullWidth(v.width),S=b.isFullHeight(v.height),T=w&&S,k=(w||S)&&!T;let _=v.width,E=v.height;const M=aM(e,g,T,w,S);e==="left"||e==="right"?(_=w?v.width:b.maxWidth,k&&(_=w?Tt.width:b.maxWidth)):(E=S?v.height:b.maxHeight,k&&(E=S?Tt.initialHeight:b.maxHeight)),T&&(e==="left"||e==="right"?_=Tt.width:E=Tt.initialHeight);const D=Qs(M,_,E),j={isFullWidth:b.isFullWidth(_),isFullHeight:b.isFullHeight(E),width:_,height:E,position:D},Y=Math.floor(_-Tt.width/2),B=se.value.componentsTree.width,ee=Math.floor(_*.3),ne=w?Qn:(e==="left"||e==="right")&&!w?Math.min(Y,Math.max(Qn,ee)):Math.min(Y,Math.max(Qn,B));requestAnimationFrame(()=>{se.value={corner:M,dimensions:j,lastDimensions:v,componentsTree:{...se.value.componentsTree,width:ne}},h.transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",h.width=`${_}px`,h.height=`${E}px`,h.transform=`translate3d(${D.x}px, ${D.y}px, 0)`}),tn(Lr,{corner:M,dimensions:j,lastDimensions:v,componentsTree:{...se.value.componentsTree,width:ne}})},[]);return y("div",{ref:t,onPointerDown:l,onDblClick:u,className:U("absolute z-50","flex items-center justify-center","group","transition-colors select-none","peer",{"resize-left peer/left":e==="left","resize-right peer/right z-10":e==="right","resize-top peer/top":e==="top","resize-bottom peer/bottom":e==="bottom"}),children:y("span",{className:"resize-line-wrapper",children:y("span",{className:"resize-line",children:y(dt,{name:"icon-ellipsis",size:18,className:U("text-neutral-400",(e==="left"||e==="right")&&"rotate-90")})})})})},Dw={horizontal:{width:20,height:48},vertical:{width:48,height:20}},dM=()=>{const e=fe(null),t=fe(!1),r=fe(0),a=fe(0),s=fe(!1),l=mt((b=!0)=>{if(!e.current)return;const{corner:w}=se.value;let S,T;if(gn.value){const ne=gn.value.orientation||"horizontal",pe=Dw[ne];S=pe.width,T=pe.height}else if(t.current){const ne=se.value.lastDimensions;S=Jc(ne.width,0,!0),T=Jc(ne.height,0,!1),s.current&&(s.current=!1)}else S=r.current,T=a.current;let _=Qs(w,S,T);if(gn.value){const{corner:ne,orientation:pe="horizontal"}=gn.value,de=Dw[pe];switch(ne){case"top-left":_=pe==="horizontal"?{x:-1,y:we}:{x:we,y:-1};break;case"bottom-left":_=pe==="horizontal"?{x:-1,y:window.innerHeight-de.height-we}:{x:we,y:window.innerHeight-de.height+1};break;case"top-right":_=pe==="horizontal"?{x:window.innerWidth-de.width+1,y:we}:{x:window.innerWidth-de.width-we,y:-1};break;case"bottom-right":default:_=pe==="horizontal"?{x:window.innerWidth-de.width+1,y:window.innerHeight-de.height-we}:{x:window.innerWidth-de.width-we,y:window.innerHeight-de.height+1};break}}const E=S<Tt.width||T<Tt.initialHeight,M=b&&!E,D=e.current,j=D.style;let Y=null;const B=()=>{Fh(),D.removeEventListener("transitionend",B),Y&&(cancelAnimationFrame(Y),Y=null)};D.addEventListener("transitionend",B),j.transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",Y=requestAnimationFrame(()=>{j.width=`${S}px`,j.height=`${T}px`,j.transform=`translate3d(${_.x}px, ${_.y}px, 0)`,Y=null});const ee={isFullWidth:S>=window.innerWidth-we*2,isFullHeight:T>=window.innerHeight-we*2,width:S,height:T,position:_};se.value={corner:w,dimensions:ee,lastDimensions:t?se.value.lastDimensions:S>r.current?ee:se.value.lastDimensions,componentsTree:se.value.componentsTree},M&&tn(Lr,{corner:se.value.corner,dimensions:se.value.dimensions,lastDimensions:se.value.lastDimensions,componentsTree:se.value.componentsTree}),Fh()},[]),u=mt(b=>{if(b.preventDefault(),!e.current||b.target.closest("button"))return;const w=e.current,S=w.style,{dimensions:T}=se.value,k=b.clientX,_=b.clientY,E=T.position.x,M=T.position.y;let D=E,j=M,Y=null,B=!1,ee=k,ne=_;const pe=ae=>{Y||(B=!0,ee=ae.clientX,ne=ae.clientY,Y=requestAnimationFrame(()=>{const De=ee-k,Ie=ne-_;D=Number(E)+De,j=Number(M)+Ie,S.transition="none",S.transform=`translate3d(${D}px, ${j}px, 0)`;const qe=D+T.width,A=j+T.height,z=Math.max(0,-D),$=Math.max(0,qe-window.innerWidth),V=Math.max(0,-j),J=Math.max(0,A-window.innerHeight),O=Math.min(T.width,z+$),F=Math.min(T.height,V+J),W=O*T.height+F*T.width-O*F,te=T.width*T.height;let re=W>te*.35;if(!re&&Ue.options.value.showFPS){const le=D+T.width,ce=le-100;re=le<=0||ce>=window.innerWidth||j+T.height<=0||j>=window.innerHeight}if(re){const le=D+T.width/2,ce=j+T.height/2,ve=window.innerWidth/2,ge=window.innerHeight/2;let ot;le<ve?ot=ce<ge?"top-left":"bottom-left":ot=ce<ge?"top-right":"bottom-right";let qn;const Vr=Math.max(z,$),zi=Math.max(V,J);qn=Vr>zi?"horizontal":"vertical",se.value={...se.value,corner:ot,lastDimensions:{...T,position:Qs(ot,T.width,T.height)}};const tr={corner:ot,orientation:qn};gn.value=tr,tn(mu,tr),tn(Lr,se.value),l(!1),document.removeEventListener("pointermove",pe),document.removeEventListener("pointerup",de),Y&&(cancelAnimationFrame(Y),Y=null)}Y=null}))},de=()=>{if(!w)return;Y&&(cancelAnimationFrame(Y),Y=null),document.removeEventListener("pointermove",pe),document.removeEventListener("pointerup",de);const ae=Math.abs(ee-k),De=Math.abs(ne-_),Ie=Math.sqrt(ae*ae+De*De);if(!B||Ie<60)return;const qe=uM(ee,ne,k,_,ie.inspectState.value.kind==="focused"?80:40);if(qe===se.value.corner){S.transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)";const $=se.value.dimensions.position;requestAnimationFrame(()=>{S.transform=`translate3d(${$.x}px, ${$.y}px, 0)`});return}const A=Qs(qe,T.width,T.height);if(D===E&&j===M)return;const z=()=>{S.transition="none",Fh(),w.removeEventListener("transitionend",z),Y&&(cancelAnimationFrame(Y),Y=null)};w.addEventListener("transitionend",z),S.transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",requestAnimationFrame(()=>{S.transform=`translate3d(${A.x}px, ${A.y}px, 0)`}),se.value={corner:qe,dimensions:{isFullWidth:T.isFullWidth,isFullHeight:T.isFullHeight,width:T.width,height:T.height,position:A},lastDimensions:se.value.lastDimensions,componentsTree:se.value.componentsTree},tn(Lr,{corner:qe,dimensions:se.value.dimensions,lastDimensions:se.value.lastDimensions,componentsTree:se.value.componentsTree})};document.addEventListener("pointermove",pe),document.addEventListener("pointerup",de)},[]),d=mt(b=>{if(b.preventDefault(),!e.current||!gn.value)return;const{corner:w,orientation:S="horizontal"}=gn.value,T=b.clientX,k=b.clientY;let _=null,E=!1;const M=50,D=Y=>{if(E||_)return;const B=Y.clientX-T,ee=Y.clientY-k;let ne=!1;if(S==="horizontal"?(w.endsWith("left")&&B>M||w.endsWith("right")&&B<-M)&&(ne=!0):(w.startsWith("top")&&ee>M||w.startsWith("bottom")&&ee<-M)&&(ne=!0),ne){if(E=!0,gn.value=null,tn(mu,null),r.current===0&&e.current)requestAnimationFrame(()=>{if(e.current){e.current.style.width="min-content";const pe=e.current.offsetWidth;r.current=pe||300;const de=se.value.lastDimensions,ae=Jc(de.width,0,!0),De=Jc(de.height,0,!1);let Ie=Y.clientX-ae/2,qe=Y.clientY-De/2;Ie=Math.max(we,Math.min(Ie,window.innerWidth-ae-we)),qe=Math.max(we,Math.min(qe,window.innerHeight-De-we)),se.value={...se.value,dimensions:{...se.value.dimensions,position:{x:Ie,y:qe}}},l(!0);const A=qr(ro);Ze.value=A||{view:"none"},setTimeout(()=>{if(e.current){const z=new PointerEvent("pointerdown",{clientX:Y.clientX,clientY:Y.clientY,pointerId:Y.pointerId,bubbles:!0});e.current.dispatchEvent(z)}},100)}});else{l(!0);const pe=qr(ro);Ze.value=pe||{view:"none"}}document.removeEventListener("pointermove",D),document.removeEventListener("pointerup",j)}},j=()=>{document.removeEventListener("pointermove",D),document.removeEventListener("pointerup",j)};document.addEventListener("pointermove",D),document.addEventListener("pointerup",j)},[]);ke(()=>{if(!e.current)return;nw(ro),gn.value?(a.current=36,r.current=0):(e.current.style.width="min-content",a.current=36,r.current=e.current.offsetWidth),e.current.style.maxWidth=`calc(100vw - ${we*2}px)`,e.current.style.maxHeight=`calc(100vh - ${we*2}px)`,l(),ie.inspectState.value.kind!=="focused"&&!gn.value&&!s.current&&(se.value={...se.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:r.current,height:a.current,position:se.value.dimensions.position}}),qp.value=e.current;const b=se.subscribe(k=>{if(!e.current)return;const{x:_,y:E}=k.dimensions.position,{width:M,height:D}=k.dimensions,j=e.current;requestAnimationFrame(()=>{j.style.transform=`translate3d(${_}px, ${E}px, 0)`,j.style.width=`${M}px`,j.style.height=`${D}px`})}),w=Ze.subscribe(k=>{t.current=k.view!=="none",l(),gn.value||(k.view!=="none"?tn(ro,k):nw(ro))}),S=ie.inspectState.subscribe(k=>{t.current=k.kind==="focused",l()}),T=()=>{l(!0)};return window.addEventListener("resize",T,{passive:!0}),()=>{window.removeEventListener("resize",T),w(),S(),b(),tn(Lr,{...sr,corner:se.value.corner})}},[]);const[f,h]=Ce(!1);ke(()=>{h(!0)},[]);const v=gn.value;let g="";if(v){const{orientation:b="horizontal",corner:w}=v;b==="horizontal"?g=w!=null&&w.endsWith("right")?"rotate-180":"":g=w!=null&&w.startsWith("bottom")?"-rotate-90":"rotate-90"}return y(je,{children:[y(rM,{}),y(eg.Provider,{value:e.current,children:y("div",{id:"react-scan-toolbar",dir:"ltr",ref:e,onPointerDown:v?d:u,className:U("fixed inset-0",v?(()=>{const{orientation:b="horizontal",corner:w}=v;return b==="horizontal"?w!=null&&w.endsWith("right")?"rounded-tl-lg rounded-bl-lg shadow-lg":"rounded-tr-lg rounded-br-lg shadow-lg":w!=null&&w.startsWith("bottom")?"rounded-tl-lg rounded-tr-lg shadow-lg":"rounded-bl-lg rounded-br-lg shadow-lg"})():"rounded-lg shadow-lg","flex flex-col","font-mono text-[13px]","user-select-none","opacity-0",v?"cursor-pointer":"cursor-move","z-[124124124124]","animate-fade-in animation-duration-300 animation-delay-300","will-change-transform","[touch-action:none]"),children:v?y("button",{type:"button",onClick:()=>{gn.value=null,tn(mu,null),r.current===0&&e.current&&requestAnimationFrame(()=>{if(e.current){e.current.style.width="min-content";const w=e.current.offsetWidth;r.current=w||300,l(!0)}});const b=qr(ro);Ze.value=b||{view:"none"}},className:"flex items-center justify-center w-full h-full text-white",title:"Expand toolbar",children:y(dt,{name:"icon-chevron-right",size:16,className:U("transition-transform",g)})}):y(je,{children:[y(eu,{position:"top"}),y(eu,{position:"bottom"}),y(eu,{position:"left"}),y(eu,{position:"right"}),y(nM,{})]})})})]})},eg=vx(null),fM=()=>y("svg",{xmlns:"http://www.w3.org/2000/svg",style:"display: none;",children:[y("title",{children:"React Scan Icons"}),y("symbol",{id:"icon-inspect",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[y("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),y("path",{d:"M5 3a2 2 0 0 0-2 2"}),y("path",{d:"M19 3a2 2 0 0 1 2 2"}),y("path",{d:"M5 21a2 2 0 0 1-2-2"}),y("path",{d:"M9 3h1"}),y("path",{d:"M9 21h2"}),y("path",{d:"M14 3h1"}),y("path",{d:"M3 9v1"}),y("path",{d:"M21 9v2"}),y("path",{d:"M3 14v1"})]}),y("symbol",{id:"icon-focus",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[y("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),y("path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"})]}),y("symbol",{id:"icon-next",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:y("path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z"})}),y("symbol",{id:"icon-previous",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:y("path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"})}),y("symbol",{id:"icon-close",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[y("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),y("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),y("symbol",{id:"icon-replay",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[y("path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}),y("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),y("path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}),y("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),y("circle",{cx:"12",cy:"12",r:"1"}),y("path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"})]}),y("symbol",{id:"icon-ellipsis",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[y("circle",{cx:"12",cy:"12",r:"1"}),y("circle",{cx:"19",cy:"12",r:"1"}),y("circle",{cx:"5",cy:"12",r:"1"})]}),y("symbol",{id:"icon-copy",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[y("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),y("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]}),y("symbol",{id:"icon-check",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:y("path",{d:"M20 6 9 17l-5-5"})}),y("symbol",{id:"icon-chevron-right",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:y("path",{d:"m9 18 6-6-6-6"})}),y("symbol",{id:"icon-settings",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[y("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),y("circle",{cx:"12",cy:"12",r:"3"})]}),y("symbol",{id:"icon-flame",viewBox:"0 0 24 24",children:y("path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"})}),y("symbol",{id:"icon-function",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[y("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}),y("path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}),y("path",{d:"M9 11.2h5.7"})]}),y("symbol",{id:"icon-triangle-alert",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[y("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}),y("path",{d:"M12 9v4"}),y("path",{d:"M12 17h.01"})]}),y("symbol",{id:"icon-gallery-horizontal-end",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[y("path",{d:"M2 7v10"}),y("path",{d:"M6 5v14"}),y("rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"})]}),y("symbol",{id:"icon-search",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[y("circle",{cx:"11",cy:"11",r:"8"}),y("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),y("symbol",{id:"icon-lock",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[y("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),y("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),y("symbol",{id:"icon-lock-open",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[y("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),y("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"})]}),y("symbol",{id:"icon-sanil",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[y("path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}),y("circle",{cx:"10",cy:"13",r:"8"}),y("path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}),y("path",{d:"M18 3 19.1 5.2"})]})]}),hM=class extends In{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null})}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){var e;return this.state.hasError?y("div",{className:"fixed bottom-4 right-4 z-[124124124124]",children:y("div",{className:"p-3 bg-black rounded-lg shadow-lg w-80",children:[y("div",{className:"flex items-center gap-2 mb-2 text-red-400 text-sm font-medium",children:[y(dt,{name:"icon-flame",className:"text-red-500",size:14}),"React Scan ran into a problem"]}),y("div",{className:"p-2 bg-black rounded font-mono text-xs text-red-300 mb-3 break-words",children:((e=this.state.error)==null?void 0:e.message)||JSON.stringify(this.state.error)}),y("button",{type:"button",onClick:this.handleReset,className:"px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-medium transition-colors flex items-center justify-center gap-1.5",children:"Restart"})]})}):this.props.children}},pM=e=>{const t=document.createElement("div");t.id="react-scan-toolbar-root",window.__REACT_SCAN_TOOLBAR_CONTAINER__=t,e.appendChild(t),Xs(y(hM,{children:y(je,{children:[y(fM,{}),y(dM,{})]})}),t);const r=t.remove.bind(t);return t.remove=()=>{window.__REACT_SCAN_TOOLBAR_CONTAINER__=void 0,t.hasChildNodes()&&(Xs(null,t),Xs(null,t)),r()},t},mM={version:"0.4.3"},Ji=null,Us=null,gM=()=>{if(Ji&&Us)return{rootContainer:Ji,shadowRoot:Us};Ji=document.createElement("div"),Ji.id="react-scan-root",Us=Ji.attachShadow({mode:"open"});const e=document.createElement("style");return e.textContent=DA,Us.appendChild(e),document.documentElement.appendChild(Ji),{rootContainer:Ji,shadowRoot:Us}},ie={wasDetailsOpen:kt(!0),isInIframe:kt(fr&&window.self!==window.top),inspectState:kt({kind:"uninitialized"}),monitor:kt(null),fiberRoots:new Set,reportData:new Map,legacyReportData:new Map,lastReportTime:kt(0),interactionListeningForRenders:null,changesListeners:new Map},Ue={instrumentation:null,componentAllowList:null,options:kt({enabled:!0,log:!1,showToolbar:!0,animationSpeed:"fast",dangerouslyForceRunInProduction:!1,showFPS:!0,showNotificationCount:!0,allowInIframe:!1}),runInAllEnvironments:!1,onRender:null,scheduledOutlines:new Map,activeOutlines:new Map,Store:ie,version:mM.version};fr&&window.__REACT_SCAN_EXTENSION__&&(window.__REACT_SCAN_VERSION__=Ue.version);function vM(e){return e in Ue.options.value}var f_=e=>{const t=[],r={};for(const a in e){if(!vM(a))continue;const s=e[a];switch(a){case"enabled":case"log":case"showToolbar":case"showNotificationCount":case"dangerouslyForceRunInProduction":case"showFPS":case"allowInIframe":typeof s!="boolean"?t.push(`- ${a} must be a boolean. Got "${s}"`):r[a]=s;break;case"animationSpeed":["slow","fast","off"].includes(s)?r[a]=s:t.push(`- Invalid animation speed "${s}". Using default "fast"`);break;case"onCommitStart":typeof s!="function"?t.push(`- ${a} must be a function. Got "${s}"`):r.onCommitStart=s;break;case"onCommitFinish":typeof s!="function"?t.push(`- ${a} must be a function. Got "${s}"`):r.onCommitFinish=s;break;case"onRender":typeof s!="function"?t.push(`- ${a} must be a function. Got "${s}"`):r.onRender=s;break;case"onPaintStart":case"onPaintFinish":typeof s!="function"?t.push(`- ${a} must be a function. Got "${s}"`):r[a]=s;break;default:t.push(`- Unknown option "${a}"`)}}return t.length>0&&console.warn(`[React Scan] Invalid options:
${t.join(`
`)}`),r},yM=e=>{var t;try{const r=f_(e);if(Object.keys(r).length===0)return;const a="showToolbar"in r&&r.showToolbar!==void 0,s={...Ue.options.value,...r},{instrumentation:l}=Ue;l&&"enabled"in r&&(l.isPaused.value=r.enabled===!1),Ue.options.value=s;try{const u=(t=qr("react-scan-options"))==null?void 0:t.enabled;typeof u=="boolean"&&(s.enabled=u)}catch(u){Ue.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",u)}return tn("react-scan-options",s),a&&h_(!!s.showToolbar),s}catch(r){Ue.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",r)}},bM=()=>Ue.options,tu=null,Rw,ad=()=>{if(tu!==null)return tu;Rw??(Rw=zo());for(const e of Rw.renderers.values())Ik(e)==="production"&&(tu=!0);return tu},wM=()=>{try{if(!fr||!Ue.runInAllEnvironments&&ad()&&!Ue.options.value.dangerouslyForceRunInProduction)return;const e=qr("react-scan-options");if(e){const r=f_(e);Object.keys(r).length>0&&(Ue.options.value={...Ue.options.value,...r})}const t=bM();zA(()=>{h_(!!t.value.showToolbar)}),!ie.monitor.value&&fr&&setTimeout(()=>{Bk()||console.error("[React Scan] Failed to load. Must import React Scan before React runs.")},5e3)}catch(e){Ue.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}},h_=e=>{var l;(l=window.reactScanCleanupListeners)==null||l.call(window);const t=l4(),r=xM();window.reactScanCleanupListeners=()=>{t(),r==null||r()};const a=window.__REACT_SCAN_TOOLBAR_CONTAINER__;if(!e){a==null||a.remove();return}a==null||a.remove();const{shadowRoot:s}=gM();pM(s)},xM=()=>{try{const e=document.documentElement;return N4(e)}catch(e){Ue.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}},_M=(e={})=>{yM(e),!(ie.isInIframe.value&&!Ue.options.value.allowInIframe&&!Ue.runInAllEnvironments)&&(e.enabled===!1&&e.showToolbar!==!0||wM())},SM=new WeakSet,op={exports:{}},$s={},sp={exports:{}},lp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jw;function TM(){return jw||(jw=1,(function(e){function t(A,z){var $=A.length;A.push(z);e:for(;0<$;){var V=$-1>>>1,J=A[V];if(0<s(J,z))A[V]=z,A[$]=J,$=V;else break e}}function r(A){return A.length===0?null:A[0]}function a(A){if(A.length===0)return null;var z=A[0],$=A.pop();if($!==z){A[0]=$;e:for(var V=0,J=A.length,O=J>>>1;V<O;){var F=2*(V+1)-1,W=A[F],te=F+1,re=A[te];if(0>s(W,$))te<J&&0>s(re,W)?(A[V]=re,A[te]=$,V=te):(A[V]=W,A[F]=$,V=F);else if(te<J&&0>s(re,$))A[V]=re,A[te]=$,V=te;else break e}}return z}function s(A,z){var $=A.sortIndex-z.sortIndex;return $!==0?$:A.id-z.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();e.unstable_now=function(){return u.now()-d}}var f=[],h=[],v=1,g=null,b=3,w=!1,S=!1,T=!1,k=!1,_=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;function D(A){for(var z=r(h);z!==null;){if(z.callback===null)a(h);else if(z.startTime<=A)a(h),z.sortIndex=z.expirationTime,t(f,z);else break;z=r(h)}}function j(A){if(T=!1,D(A),!S)if(r(f)!==null)S=!0,Y||(Y=!0,ae());else{var z=r(h);z!==null&&qe(j,z.startTime-A)}}var Y=!1,B=-1,ee=5,ne=-1;function pe(){return k?!0:!(e.unstable_now()-ne<ee)}function de(){if(k=!1,Y){var A=e.unstable_now();ne=A;var z=!0;try{e:{S=!1,T&&(T=!1,E(B),B=-1),w=!0;var $=b;try{t:{for(D(A),g=r(f);g!==null&&!(g.expirationTime>A&&pe());){var V=g.callback;if(typeof V=="function"){g.callback=null,b=g.priorityLevel;var J=V(g.expirationTime<=A);if(A=e.unstable_now(),typeof J=="function"){g.callback=J,D(A),z=!0;break t}g===r(f)&&a(f),D(A)}else a(f);g=r(f)}if(g!==null)z=!0;else{var O=r(h);O!==null&&qe(j,O.startTime-A),z=!1}}break e}finally{g=null,b=$,w=!1}z=void 0}}finally{z?ae():Y=!1}}}var ae;if(typeof M=="function")ae=function(){M(de)};else if(typeof MessageChannel<"u"){var De=new MessageChannel,Ie=De.port2;De.port1.onmessage=de,ae=function(){Ie.postMessage(null)}}else ae=function(){_(de,0)};function qe(A,z){B=_(function(){A(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return b},e.unstable_next=function(A){switch(b){case 1:case 2:case 3:var z=3;break;default:z=b}var $=b;b=z;try{return A()}finally{b=$}},e.unstable_requestPaint=function(){k=!0},e.unstable_runWithPriority=function(A,z){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var $=b;b=A;try{return z()}finally{b=$}},e.unstable_scheduleCallback=function(A,z,$){var V=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?V+$:V):$=V,A){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=$+J,A={id:v++,callback:z,priorityLevel:A,startTime:$,expirationTime:J,sortIndex:-1},$>V?(A.sortIndex=$,t(h,A),r(f)===null&&A===r(h)&&(T?(E(B),B=-1):T=!0,qe(j,$-V))):(A.sortIndex=J,t(f,A),S||w||(S=!0,Y||(Y=!0,ae()))),A},e.unstable_shouldYield=pe,e.unstable_wrapCallback=function(A){var z=b;return function(){var $=b;b=z;try{return A.apply(this,arguments)}finally{b=$}}}})(lp)),lp}var Uw;function kM(){return Uw||(Uw=1,sp.exports=TM()),sp.exports}var cp={exports:{}},qt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $w;function EM(){if($w)return qt;$w=1;var e=xl();function t(f){var h="https://react.dev/errors/"+f;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+f+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var a={d:{f:r,r:function(){throw Error(t(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(f,h,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:g==null?null:""+g,children:f,containerInfo:h,implementation:v}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(f,h){if(f==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return qt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,qt.createPortal=function(f,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return l(f,h,null,v)},qt.flushSync=function(f){var h=u.T,v=a.p;try{if(u.T=null,a.p=2,f)return f()}finally{u.T=h,a.p=v,a.d.f()}},qt.preconnect=function(f,h){typeof f=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,a.d.C(f,h))},qt.prefetchDNS=function(f){typeof f=="string"&&a.d.D(f)},qt.preinit=function(f,h){if(typeof f=="string"&&h&&typeof h.as=="string"){var v=h.as,g=d(v,h.crossOrigin),b=typeof h.integrity=="string"?h.integrity:void 0,w=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?a.d.S(f,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:g,integrity:b,fetchPriority:w}):v==="script"&&a.d.X(f,{crossOrigin:g,integrity:b,fetchPriority:w,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},qt.preinitModule=function(f,h){if(typeof f=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=d(h.as,h.crossOrigin);a.d.M(f,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&a.d.M(f)},qt.preload=function(f,h){if(typeof f=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,g=d(v,h.crossOrigin);a.d.L(f,v,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},qt.preloadModule=function(f,h){if(typeof f=="string")if(h){var v=d(h.as,h.crossOrigin);a.d.m(f,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else a.d.m(f)},qt.requestFormReset=function(f){a.d.r(f)},qt.unstable_batchedUpdates=function(f,h){return f(h)},qt.useFormState=function(f,h,v){return u.H.useFormState(f,h,v)},qt.useFormStatus=function(){return u.H.useHostTransitionStatus()},qt.version="19.2.0",qt}var Lw;function CM(){if(Lw)return cp.exports;Lw=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),cp.exports=EM(),cp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hw;function AM(){if(Hw)return $s;Hw=1;var e=kM(),t=xl(),r=CM();function a(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function u(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function d(n){if(n.tag===31){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function f(n){if(l(n)!==n)throw Error(a(188))}function h(n){var i=n.alternate;if(!i){if(i=l(n),i===null)throw Error(a(188));return i!==n?null:n}for(var o=n,c=i;;){var p=o.return;if(p===null)break;var m=p.alternate;if(m===null){if(c=p.return,c!==null){o=c;continue}break}if(p.child===m.child){for(m=p.child;m;){if(m===o)return f(p),n;if(m===c)return f(p),i;m=m.sibling}throw Error(a(188))}if(o.return!==c.return)o=p,c=m;else{for(var x=!1,C=p.child;C;){if(C===o){x=!0,o=p,c=m;break}if(C===c){x=!0,c=p,o=m;break}C=C.sibling}if(!x){for(C=m.child;C;){if(C===o){x=!0,o=m,c=p;break}if(C===c){x=!0,c=m,o=p;break}C=C.sibling}if(!x)throw Error(a(189))}}if(o.alternate!==c)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?n:i}function v(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=v(n),i!==null)return i;n=n.sibling}return null}var g=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),E=Symbol.for("react.consumer"),M=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),ne=Symbol.for("react.activity"),pe=Symbol.for("react.memo_cache_sentinel"),de=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=de&&n[de]||n["@@iterator"],typeof n=="function"?n:null)}var De=Symbol.for("react.client.reference");function Ie(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===De?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case T:return"Fragment";case _:return"Profiler";case k:return"StrictMode";case j:return"Suspense";case Y:return"SuspenseList";case ne:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case S:return"Portal";case M:return n.displayName||"Context";case E:return(n._context.displayName||"Context")+".Consumer";case D:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case B:return i=n.displayName||null,i!==null?i:Ie(n.type)||"Memo";case ee:i=n._payload,n=n._init;try{return Ie(n(i))}catch{}}return null}var qe=Array.isArray,A=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},V=[],J=-1;function O(n){return{current:n}}function F(n){0>J||(n.current=V[J],V[J]=null,J--)}function W(n,i){J++,V[J]=n.current,n.current=i}var te=O(null),re=O(null),le=O(null),ce=O(null);function ve(n,i){switch(W(le,i),W(re,n),W(te,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?Vy(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=Vy(i),n=Qy(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}F(te),W(te,n)}function ge(){F(te),F(re),F(le)}function ot(n){n.memoizedState!==null&&W(ce,n);var i=te.current,o=Qy(i,n.type);i!==o&&(W(re,n),W(te,o))}function qn(n){re.current===n&&(F(te),F(re)),ce.current===n&&(F(ce),As._currentValue=$)}var Vr,zi;function tr(n){if(Vr===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);Vr=i&&i[1]||"",zi=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vr+n+zi}var yd=!1;function bd(n,i){if(!n||yd)return"";yd=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(i){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(P){var q=P}Reflect.construct(n,[],K)}else{try{K.call()}catch(P){q=P}n.call(K.prototype)}}else{try{throw Error()}catch(P){q=P}(K=n())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(P){if(P&&q&&typeof P.stack=="string")return[P.stack,q.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),x=m[0],C=m[1];if(x&&C){var N=x.split(`
`),I=C.split(`
`);for(p=c=0;c<N.length&&!N[c].includes("DetermineComponentFrameRoot");)c++;for(;p<I.length&&!I[p].includes("DetermineComponentFrameRoot");)p++;if(c===N.length||p===I.length)for(c=N.length-1,p=I.length-1;1<=c&&0<=p&&N[c]!==I[p];)p--;for(;1<=c&&0<=p;c--,p--)if(N[c]!==I[p]){if(c!==1||p!==1)do if(c--,p--,0>p||N[c]!==I[p]){var X=`
`+N[c].replace(" at new "," at ");return n.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",n.displayName)),X}while(1<=c&&0<=p);break}}}finally{yd=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?tr(o):""}function LS(n,i){switch(n.tag){case 26:case 27:case 5:return tr(n.type);case 16:return tr("Lazy");case 13:return n.child!==i&&i!==null?tr("Suspense Fallback"):tr("Suspense");case 19:return tr("SuspenseList");case 0:case 15:return bd(n.type,!1);case 11:return bd(n.type.render,!1);case 1:return bd(n.type,!0);case 31:return tr("Activity");default:return""}}function kg(n){try{var i="",o=null;do i+=LS(n,o),o=n,n=n.return;while(n);return i}catch(c){return`
Error generating stack: `+c.message+`
`+c.stack}}var wd=Object.prototype.hasOwnProperty,xd=e.unstable_scheduleCallback,_d=e.unstable_cancelCallback,HS=e.unstable_shouldYield,IS=e.unstable_requestPaint,on=e.unstable_now,BS=e.unstable_getCurrentPriorityLevel,Eg=e.unstable_ImmediatePriority,Cg=e.unstable_UserBlockingPriority,Al=e.unstable_NormalPriority,qS=e.unstable_LowPriority,Ag=e.unstable_IdlePriority,FS=e.log,YS=e.unstable_setDisableYieldValue,Io=null,sn=null;function Qr(n){if(typeof FS=="function"&&YS(n),sn&&typeof sn.setStrictMode=="function")try{sn.setStrictMode(Io,n)}catch{}}var ln=Math.clz32?Math.clz32:GS,PS=Math.log,XS=Math.LN2;function GS(n){return n>>>=0,n===0?32:31-(PS(n)/XS|0)|0}var Ml=256,Ol=262144,Nl=4194304;function Di(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function zl(n,i,o){var c=n.pendingLanes;if(c===0)return 0;var p=0,m=n.suspendedLanes,x=n.pingedLanes;n=n.warmLanes;var C=c&134217727;return C!==0?(c=C&~m,c!==0?p=Di(c):(x&=C,x!==0?p=Di(x):o||(o=C&~n,o!==0&&(p=Di(o))))):(C=c&~m,C!==0?p=Di(C):x!==0?p=Di(x):o||(o=c&~n,o!==0&&(p=Di(o)))),p===0?0:i!==0&&i!==p&&(i&m)===0&&(m=p&-p,o=i&-i,m>=o||m===32&&(o&4194048)!==0)?i:p}function Bo(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function VS(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mg(){var n=Nl;return Nl<<=1,(Nl&62914560)===0&&(Nl=4194304),n}function Sd(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function qo(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function QS(n,i,o,c,p,m){var x=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var C=n.entanglements,N=n.expirationTimes,I=n.hiddenUpdates;for(o=x&~o;0<o;){var X=31-ln(o),K=1<<X;C[X]=0,N[X]=-1;var q=I[X];if(q!==null)for(I[X]=null,X=0;X<q.length;X++){var P=q[X];P!==null&&(P.lane&=-536870913)}o&=~K}c!==0&&Og(n,c,0),m!==0&&p===0&&n.tag!==0&&(n.suspendedLanes|=m&~(x&~i))}function Og(n,i,o){n.pendingLanes|=i,n.suspendedLanes&=~i;var c=31-ln(i);n.entangledLanes|=i,n.entanglements[c]=n.entanglements[c]|1073741824|o&261930}function Ng(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-ln(o),p=1<<c;p&i|n[c]&i&&(n[c]|=i),o&=~p}}function zg(n,i){var o=i&-i;return o=(o&42)!==0?1:Td(o),(o&(n.suspendedLanes|i))!==0?0:o}function Td(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function kd(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Dg(){var n=z.p;return n!==0?n:(n=window.event,n===void 0?32:yb(n.type))}function Rg(n,i){var o=z.p;try{return z.p=n,i()}finally{z.p=o}}var Kr=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Kr,Vt="__reactProps$"+Kr,ba="__reactContainer$"+Kr,Ed="__reactEvents$"+Kr,KS="__reactListeners$"+Kr,WS="__reactHandles$"+Kr,jg="__reactResources$"+Kr,Fo="__reactMarker$"+Kr;function Cd(n){delete n[Dt],delete n[Vt],delete n[Ed],delete n[KS],delete n[WS]}function wa(n){var i=n[Dt];if(i)return i;for(var o=n.parentNode;o;){if(i=o[ba]||o[Dt]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=nb(n);n!==null;){if(o=n[Dt])return o;n=nb(n)}return i}n=o,o=n.parentNode}return null}function xa(n){if(n=n[Dt]||n[ba]){var i=n.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return n}return null}function Yo(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(a(33))}function _a(n){var i=n[jg];return i||(i=n[jg]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Mt(n){n[Fo]=!0}var Ug=new Set,$g={};function Ri(n,i){Sa(n,i),Sa(n+"Capture",i)}function Sa(n,i){for($g[n]=i,n=0;n<i.length;n++)Ug.add(i[n])}var ZS=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Lg={},Hg={};function JS(n){return wd.call(Hg,n)?!0:wd.call(Lg,n)?!1:ZS.test(n)?Hg[n]=!0:(Lg[n]=!0,!1)}function Dl(n,i,o){if(JS(i))if(o===null)n.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var c=i.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+o)}}function Rl(n,i,o){if(o===null)n.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+o)}}function pr(n,i,o,c){if(c===null)n.removeAttribute(o);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(i,o,""+c)}}function Tn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ig(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function e2(n,i,o){var c=Object.getOwnPropertyDescriptor(n.constructor.prototype,i);if(!n.hasOwnProperty(i)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var p=c.get,m=c.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return p.call(this)},set:function(x){o=""+x,m.call(this,x)}}),Object.defineProperty(n,i,{enumerable:c.enumerable}),{getValue:function(){return o},setValue:function(x){o=""+x},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Ad(n){if(!n._valueTracker){var i=Ig(n)?"checked":"value";n._valueTracker=e2(n,i,""+n[i])}}function Bg(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=Ig(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function jl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var t2=/[\n"\\]/g;function kn(n){return n.replace(t2,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Md(n,i,o,c,p,m,x,C){n.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?n.type=x:n.removeAttribute("type"),i!=null?x==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+Tn(i)):n.value!==""+Tn(i)&&(n.value=""+Tn(i)):x!=="submit"&&x!=="reset"||n.removeAttribute("value"),i!=null?Od(n,x,Tn(i)):o!=null?Od(n,x,Tn(o)):c!=null&&n.removeAttribute("value"),p==null&&m!=null&&(n.defaultChecked=!!m),p!=null&&(n.checked=p&&typeof p!="function"&&typeof p!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?n.name=""+Tn(C):n.removeAttribute("name")}function qg(n,i,o,c,p,m,x,C){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),i!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Ad(n);return}o=o!=null?""+Tn(o):"",i=i!=null?""+Tn(i):o,C||i===n.value||(n.value=i),n.defaultValue=i}c=c??p,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=C?n.checked:!!c,n.defaultChecked=!!c,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(n.name=x),Ad(n)}function Od(n,i,o){i==="number"&&jl(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function Ta(n,i,o,c){if(n=n.options,i){i={};for(var p=0;p<o.length;p++)i["$"+o[p]]=!0;for(o=0;o<n.length;o++)p=i.hasOwnProperty("$"+n[o].value),n[o].selected!==p&&(n[o].selected=p),p&&c&&(n[o].defaultSelected=!0)}else{for(o=""+Tn(o),i=null,p=0;p<n.length;p++){if(n[p].value===o){n[p].selected=!0,c&&(n[p].defaultSelected=!0);return}i!==null||n[p].disabled||(i=n[p])}i!==null&&(i.selected=!0)}}function Fg(n,i,o){if(i!=null&&(i=""+Tn(i),i!==n.value&&(n.value=i),o==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=o!=null?""+Tn(o):""}function Yg(n,i,o,c){if(i==null){if(c!=null){if(o!=null)throw Error(a(92));if(qe(c)){if(1<c.length)throw Error(a(93));c=c[0]}o=c}o==null&&(o=""),i=o}o=Tn(i),n.defaultValue=o,c=n.textContent,c===o&&c!==""&&c!==null&&(n.value=c),Ad(n)}function ka(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var n2=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pg(n,i,o){var c=i.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?c?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":c?n.setProperty(i,o):typeof o!="number"||o===0||n2.has(i)?i==="float"?n.cssFloat=o:n[i]=(""+o).trim():n[i]=o+"px"}function Xg(n,i,o){if(i!=null&&typeof i!="object")throw Error(a(62));if(n=n.style,o!=null){for(var c in o)!o.hasOwnProperty(c)||i!=null&&i.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var p in i)c=i[p],i.hasOwnProperty(p)&&o[p]!==c&&Pg(n,p,c)}else for(var m in i)i.hasOwnProperty(m)&&Pg(n,m,i[m])}function Nd(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var r2=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),i2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ul(n){return i2.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function mr(){}var zd=null;function Dd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ea=null,Ca=null;function Gg(n){var i=xa(n);if(i&&(n=i.stateNode)){var o=n[Vt]||null;e:switch(n=i.stateNode,i.type){case"input":if(Md(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+kn(""+i)+'"][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var p=c[Vt]||null;if(!p)throw Error(a(90));Md(c,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(i=0;i<o.length;i++)c=o[i],c.form===n.form&&Bg(c)}break e;case"textarea":Fg(n,o.value,o.defaultValue);break e;case"select":i=o.value,i!=null&&Ta(n,!!o.multiple,i,!1)}}}var Rd=!1;function Vg(n,i,o){if(Rd)return n(i,o);Rd=!0;try{var c=n(i);return c}finally{if(Rd=!1,(Ea!==null||Ca!==null)&&(Sc(),Ea&&(i=Ea,n=Ca,Ca=Ea=null,Gg(i),n)))for(i=0;i<n.length;i++)Gg(n[i])}}function Po(n,i){var o=n.stateNode;if(o===null)return null;var c=o[Vt]||null;if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(a(231,i,typeof o));return o}var gr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jd=!1;if(gr)try{var Xo={};Object.defineProperty(Xo,"passive",{get:function(){jd=!0}}),window.addEventListener("test",Xo,Xo),window.removeEventListener("test",Xo,Xo)}catch{jd=!1}var Wr=null,Ud=null,$l=null;function Qg(){if($l)return $l;var n,i=Ud,o=i.length,c,p="value"in Wr?Wr.value:Wr.textContent,m=p.length;for(n=0;n<o&&i[n]===p[n];n++);var x=o-n;for(c=1;c<=x&&i[o-c]===p[m-c];c++);return $l=p.slice(n,1<c?1-c:void 0)}function Ll(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Hl(){return!0}function Kg(){return!1}function Qt(n){function i(o,c,p,m,x){this._reactName=o,this._targetInst=p,this.type=c,this.nativeEvent=m,this.target=x,this.currentTarget=null;for(var C in n)n.hasOwnProperty(C)&&(o=n[C],this[C]=o?o(m):m[C]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Hl:Kg,this.isPropagationStopped=Kg,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Hl)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Hl)},persist:function(){},isPersistent:Hl}),i}var ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Il=Qt(ji),Go=g({},ji,{view:0,detail:0}),a2=Qt(Go),$d,Ld,Vo,Bl=g({},Go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Id,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Vo&&(Vo&&n.type==="mousemove"?($d=n.screenX-Vo.screenX,Ld=n.screenY-Vo.screenY):Ld=$d=0,Vo=n),$d)},movementY:function(n){return"movementY"in n?n.movementY:Ld}}),Wg=Qt(Bl),o2=g({},Bl,{dataTransfer:0}),s2=Qt(o2),l2=g({},Go,{relatedTarget:0}),Hd=Qt(l2),c2=g({},ji,{animationName:0,elapsedTime:0,pseudoElement:0}),u2=Qt(c2),d2=g({},ji,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),f2=Qt(d2),h2=g({},ji,{data:0}),Zg=Qt(h2),p2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function v2(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=g2[n])?!!i[n]:!1}function Id(){return v2}var y2=g({},Go,{key:function(n){if(n.key){var i=p2[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ll(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?m2[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Id,charCode:function(n){return n.type==="keypress"?Ll(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ll(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),b2=Qt(y2),w2=g({},Bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jg=Qt(w2),x2=g({},Go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Id}),_2=Qt(x2),S2=g({},ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),T2=Qt(S2),k2=g({},Bl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),E2=Qt(k2),C2=g({},ji,{newState:0,oldState:0}),A2=Qt(C2),M2=[9,13,27,32],Bd=gr&&"CompositionEvent"in window,Qo=null;gr&&"documentMode"in document&&(Qo=document.documentMode);var O2=gr&&"TextEvent"in window&&!Qo,ev=gr&&(!Bd||Qo&&8<Qo&&11>=Qo),tv=" ",nv=!1;function rv(n,i){switch(n){case"keyup":return M2.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function iv(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Aa=!1;function N2(n,i){switch(n){case"compositionend":return iv(i);case"keypress":return i.which!==32?null:(nv=!0,tv);case"textInput":return n=i.data,n===tv&&nv?null:n;default:return null}}function z2(n,i){if(Aa)return n==="compositionend"||!Bd&&rv(n,i)?(n=Qg(),$l=Ud=Wr=null,Aa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ev&&i.locale!=="ko"?null:i.data;default:return null}}var D2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function av(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!D2[n.type]:i==="textarea"}function ov(n,i,o,c){Ea?Ca?Ca.push(c):Ca=[c]:Ea=c,i=Oc(i,"onChange"),0<i.length&&(o=new Il("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var Ko=null,Wo=null;function R2(n){qy(n,0)}function ql(n){var i=Yo(n);if(Bg(i))return n}function sv(n,i){if(n==="change")return i}var lv=!1;if(gr){var qd;if(gr){var Fd="oninput"in document;if(!Fd){var cv=document.createElement("div");cv.setAttribute("oninput","return;"),Fd=typeof cv.oninput=="function"}qd=Fd}else qd=!1;lv=qd&&(!document.documentMode||9<document.documentMode)}function uv(){Ko&&(Ko.detachEvent("onpropertychange",dv),Wo=Ko=null)}function dv(n){if(n.propertyName==="value"&&ql(Wo)){var i=[];ov(i,Wo,n,Dd(n)),Vg(R2,i)}}function j2(n,i,o){n==="focusin"?(uv(),Ko=i,Wo=o,Ko.attachEvent("onpropertychange",dv)):n==="focusout"&&uv()}function U2(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ql(Wo)}function $2(n,i){if(n==="click")return ql(i)}function L2(n,i){if(n==="input"||n==="change")return ql(i)}function H2(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var cn=typeof Object.is=="function"?Object.is:H2;function Zo(n,i){if(cn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var p=o[c];if(!wd.call(i,p)||!cn(n[p],i[p]))return!1}return!0}function fv(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function hv(n,i){var o=fv(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=fv(o)}}function pv(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?pv(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function mv(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=jl(n.document);i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=jl(n.document)}return i}function Yd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var I2=gr&&"documentMode"in document&&11>=document.documentMode,Ma=null,Pd=null,Jo=null,Xd=!1;function gv(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Xd||Ma==null||Ma!==jl(c)||(c=Ma,"selectionStart"in c&&Yd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Jo&&Zo(Jo,c)||(Jo=c,c=Oc(Pd,"onSelect"),0<c.length&&(i=new Il("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=Ma)))}function Ui(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var Oa={animationend:Ui("Animation","AnimationEnd"),animationiteration:Ui("Animation","AnimationIteration"),animationstart:Ui("Animation","AnimationStart"),transitionrun:Ui("Transition","TransitionRun"),transitionstart:Ui("Transition","TransitionStart"),transitioncancel:Ui("Transition","TransitionCancel"),transitionend:Ui("Transition","TransitionEnd")},Gd={},vv={};gr&&(vv=document.createElement("div").style,"AnimationEvent"in window||(delete Oa.animationend.animation,delete Oa.animationiteration.animation,delete Oa.animationstart.animation),"TransitionEvent"in window||delete Oa.transitionend.transition);function $i(n){if(Gd[n])return Gd[n];if(!Oa[n])return n;var i=Oa[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in vv)return Gd[n]=i[o];return n}var yv=$i("animationend"),bv=$i("animationiteration"),wv=$i("animationstart"),B2=$i("transitionrun"),q2=$i("transitionstart"),F2=$i("transitioncancel"),xv=$i("transitionend"),_v=new Map,Vd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vd.push("scrollEnd");function Fn(n,i){_v.set(n,i),Ri(i,[n])}var Fl=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},En=[],Na=0,Qd=0;function Yl(){for(var n=Na,i=Qd=Na=0;i<n;){var o=En[i];En[i++]=null;var c=En[i];En[i++]=null;var p=En[i];En[i++]=null;var m=En[i];if(En[i++]=null,c!==null&&p!==null){var x=c.pending;x===null?p.next=p:(p.next=x.next,x.next=p),c.pending=p}m!==0&&Sv(o,p,m)}}function Pl(n,i,o,c){En[Na++]=n,En[Na++]=i,En[Na++]=o,En[Na++]=c,Qd|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function Kd(n,i,o,c){return Pl(n,i,o,c),Xl(n)}function Li(n,i){return Pl(n,null,null,i),Xl(n)}function Sv(n,i,o){n.lanes|=o;var c=n.alternate;c!==null&&(c.lanes|=o);for(var p=!1,m=n.return;m!==null;)m.childLanes|=o,c=m.alternate,c!==null&&(c.childLanes|=o),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(p=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,p&&i!==null&&(p=31-ln(o),n=m.hiddenUpdates,c=n[p],c===null?n[p]=[i]:c.push(i),i.lane=o|536870912),m):null}function Xl(n){if(50<xs)throw xs=0,oh=null,Error(a(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var za={};function Y2(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function un(n,i,o,c){return new Y2(n,i,o,c)}function Wd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function vr(n,i){var o=n.alternate;return o===null?(o=un(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function Tv(n,i){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,i=o.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function Gl(n,i,o,c,p,m){var x=0;if(c=n,typeof n=="function")Wd(n)&&(x=1);else if(typeof n=="string")x=QT(n,o,te.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case ne:return n=un(31,o,i,p),n.elementType=ne,n.lanes=m,n;case T:return Hi(o.children,p,m,i);case k:x=8,p|=24;break;case _:return n=un(12,o,i,p|2),n.elementType=_,n.lanes=m,n;case j:return n=un(13,o,i,p),n.elementType=j,n.lanes=m,n;case Y:return n=un(19,o,i,p),n.elementType=Y,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case M:x=10;break e;case E:x=9;break e;case D:x=11;break e;case B:x=14;break e;case ee:x=16,c=null;break e}x=29,o=Error(a(130,n===null?"null":typeof n,"")),c=null}return i=un(x,o,i,p),i.elementType=n,i.type=c,i.lanes=m,i}function Hi(n,i,o,c){return n=un(7,n,c,i),n.lanes=o,n}function Zd(n,i,o){return n=un(6,n,null,i),n.lanes=o,n}function kv(n){var i=un(18,null,null,0);return i.stateNode=n,i}function Jd(n,i,o){return i=un(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var Ev=new WeakMap;function Cn(n,i){if(typeof n=="object"&&n!==null){var o=Ev.get(n);return o!==void 0?o:(i={value:n,source:i,stack:kg(i)},Ev.set(n,i),i)}return{value:n,source:i,stack:kg(i)}}var Da=[],Ra=0,Vl=null,es=0,An=[],Mn=0,Zr=null,nr=1,rr="";function yr(n,i){Da[Ra++]=es,Da[Ra++]=Vl,Vl=n,es=i}function Cv(n,i,o){An[Mn++]=nr,An[Mn++]=rr,An[Mn++]=Zr,Zr=n;var c=nr;n=rr;var p=32-ln(c)-1;c&=~(1<<p),o+=1;var m=32-ln(i)+p;if(30<m){var x=p-p%5;m=(c&(1<<x)-1).toString(32),c>>=x,p-=x,nr=1<<32-ln(i)+p|o<<p|c,rr=m+n}else nr=1<<m|o<<p|c,rr=n}function ef(n){n.return!==null&&(yr(n,1),Cv(n,1,0))}function tf(n){for(;n===Vl;)Vl=Da[--Ra],Da[Ra]=null,es=Da[--Ra],Da[Ra]=null;for(;n===Zr;)Zr=An[--Mn],An[Mn]=null,rr=An[--Mn],An[Mn]=null,nr=An[--Mn],An[Mn]=null}function Av(n,i){An[Mn++]=nr,An[Mn++]=rr,An[Mn++]=Zr,nr=i.id,rr=i.overflow,Zr=n}var Rt=null,et=null,Re=!1,Jr=null,On=!1,nf=Error(a(519));function ei(n){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ts(Cn(i,n)),nf}function Mv(n){var i=n.stateNode,o=n.type,c=n.memoizedProps;switch(i[Dt]=n,i[Vt]=c,o){case"dialog":Me("cancel",i),Me("close",i);break;case"iframe":case"object":case"embed":Me("load",i);break;case"video":case"audio":for(o=0;o<Ss.length;o++)Me(Ss[o],i);break;case"source":Me("error",i);break;case"img":case"image":case"link":Me("error",i),Me("load",i);break;case"details":Me("toggle",i);break;case"input":Me("invalid",i),qg(i,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0);break;case"select":Me("invalid",i);break;case"textarea":Me("invalid",i),Yg(i,c.value,c.defaultValue,c.children)}o=c.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||i.textContent===""+o||c.suppressHydrationWarning===!0||Xy(i.textContent,o)?(c.popover!=null&&(Me("beforetoggle",i),Me("toggle",i)),c.onScroll!=null&&Me("scroll",i),c.onScrollEnd!=null&&Me("scrollend",i),c.onClick!=null&&(i.onclick=mr),i=!0):i=!1,i||ei(n,!0)}function Ov(n){for(Rt=n.return;Rt;)switch(Rt.tag){case 5:case 31:case 13:On=!1;return;case 27:case 3:On=!0;return;default:Rt=Rt.return}}function ja(n){if(n!==Rt)return!1;if(!Re)return Ov(n),Re=!0,!1;var i=n.tag,o;if((o=i!==3&&i!==27)&&((o=i===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||xh(n.type,n.memoizedProps)),o=!o),o&&et&&ei(n),Ov(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));et=tb(n)}else if(i===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));et=tb(n)}else i===27?(i=et,pi(n.type)?(n=Eh,Eh=null,et=n):et=i):et=Rt?zn(n.stateNode.nextSibling):null;return!0}function Ii(){et=Rt=null,Re=!1}function rf(){var n=Jr;return n!==null&&(Jt===null?Jt=n:Jt.push.apply(Jt,n),Jr=null),n}function ts(n){Jr===null?Jr=[n]:Jr.push(n)}var af=O(null),Bi=null,br=null;function ti(n,i,o){W(af,i._currentValue),i._currentValue=o}function wr(n){n._currentValue=af.current,F(af)}function of(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function sf(n,i,o,c){var p=n.child;for(p!==null&&(p.return=n);p!==null;){var m=p.dependencies;if(m!==null){var x=p.child;m=m.firstContext;e:for(;m!==null;){var C=m;m=p;for(var N=0;N<i.length;N++)if(C.context===i[N]){m.lanes|=o,C=m.alternate,C!==null&&(C.lanes|=o),of(m.return,o,n),c||(x=null);break e}m=C.next}}else if(p.tag===18){if(x=p.return,x===null)throw Error(a(341));x.lanes|=o,m=x.alternate,m!==null&&(m.lanes|=o),of(x,o,n),x=null}else x=p.child;if(x!==null)x.return=p;else for(x=p;x!==null;){if(x===n){x=null;break}if(p=x.sibling,p!==null){p.return=x.return,x=p;break}x=x.return}p=x}}function Ua(n,i,o,c){n=null;for(var p=i,m=!1;p!==null;){if(!m){if((p.flags&524288)!==0)m=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var x=p.alternate;if(x===null)throw Error(a(387));if(x=x.memoizedProps,x!==null){var C=p.type;cn(p.pendingProps.value,x.value)||(n!==null?n.push(C):n=[C])}}else if(p===ce.current){if(x=p.alternate,x===null)throw Error(a(387));x.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(n!==null?n.push(As):n=[As])}p=p.return}n!==null&&sf(i,n,o,c),i.flags|=262144}function Ql(n){for(n=n.firstContext;n!==null;){if(!cn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function qi(n){Bi=n,br=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function jt(n){return Nv(Bi,n)}function Kl(n,i){return Bi===null&&qi(n),Nv(n,i)}function Nv(n,i){var o=i._currentValue;if(i={context:i,memoizedValue:o,next:null},br===null){if(n===null)throw Error(a(308));br=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else br=br.next=i;return o}var P2=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(o,c){n.push(c)}};this.abort=function(){i.aborted=!0,n.forEach(function(o){return o()})}},X2=e.unstable_scheduleCallback,G2=e.unstable_NormalPriority,yt={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lf(){return{controller:new P2,data:new Map,refCount:0}}function ns(n){n.refCount--,n.refCount===0&&X2(G2,function(){n.controller.abort()})}var rs=null,cf=0,$a=0,La=null;function V2(n,i){if(rs===null){var o=rs=[];cf=0,$a=fh(),La={status:"pending",value:void 0,then:function(c){o.push(c)}}}return cf++,i.then(zv,zv),i}function zv(){if(--cf===0&&rs!==null){La!==null&&(La.status="fulfilled");var n=rs;rs=null,$a=0,La=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function Q2(n,i){var o=[],c={status:"pending",value:null,reason:null,then:function(p){o.push(p)}};return n.then(function(){c.status="fulfilled",c.value=i;for(var p=0;p<o.length;p++)(0,o[p])(i)},function(p){for(c.status="rejected",c.reason=p,p=0;p<o.length;p++)(0,o[p])(void 0)}),c}var Dv=A.S;A.S=function(n,i){gy=on(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&V2(n,i),Dv!==null&&Dv(n,i)};var Fi=O(null);function uf(){var n=Fi.current;return n!==null?n:Qe.pooledCache}function Wl(n,i){i===null?W(Fi,Fi.current):W(Fi,i.pool)}function Rv(){var n=uf();return n===null?null:{parent:yt._currentValue,pool:n}}var Ha=Error(a(460)),df=Error(a(474)),Zl=Error(a(542)),Jl={then:function(){}};function jv(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Uv(n,i,o){switch(o=n[o],o===void 0?n.push(i):o!==i&&(i.then(mr,mr),i=o),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,Lv(n),n;default:if(typeof i.status=="string")i.then(mr,mr);else{if(n=Qe,n!==null&&100<n.shellSuspendCounter)throw Error(a(482));n=i,n.status="pending",n.then(function(c){if(i.status==="pending"){var p=i;p.status="fulfilled",p.value=c}},function(c){if(i.status==="pending"){var p=i;p.status="rejected",p.reason=c}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,Lv(n),n}throw Pi=i,Ha}}function Yi(n){try{var i=n._init;return i(n._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(Pi=o,Ha):o}}var Pi=null;function $v(){if(Pi===null)throw Error(a(459));var n=Pi;return Pi=null,n}function Lv(n){if(n===Ha||n===Zl)throw Error(a(483))}var Ia=null,is=0;function ec(n){var i=is;return is+=1,Ia===null&&(Ia=[]),Uv(Ia,n,i)}function as(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function tc(n,i){throw i.$$typeof===b?Error(a(525)):(n=Object.prototype.toString.call(i),Error(a(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function Hv(n){function i(L,R){if(n){var H=L.deletions;H===null?(L.deletions=[R],L.flags|=16):H.push(R)}}function o(L,R){if(!n)return null;for(;R!==null;)i(L,R),R=R.sibling;return null}function c(L){for(var R=new Map;L!==null;)L.key!==null?R.set(L.key,L):R.set(L.index,L),L=L.sibling;return R}function p(L,R){return L=vr(L,R),L.index=0,L.sibling=null,L}function m(L,R,H){return L.index=H,n?(H=L.alternate,H!==null?(H=H.index,H<R?(L.flags|=67108866,R):H):(L.flags|=67108866,R)):(L.flags|=1048576,R)}function x(L){return n&&L.alternate===null&&(L.flags|=67108866),L}function C(L,R,H,Q){return R===null||R.tag!==6?(R=Zd(H,L.mode,Q),R.return=L,R):(R=p(R,H),R.return=L,R)}function N(L,R,H,Q){var he=H.type;return he===T?X(L,R,H.props.children,Q,H.key):R!==null&&(R.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===ee&&Yi(he)===R.type)?(R=p(R,H.props),as(R,H),R.return=L,R):(R=Gl(H.type,H.key,H.props,null,L.mode,Q),as(R,H),R.return=L,R)}function I(L,R,H,Q){return R===null||R.tag!==4||R.stateNode.containerInfo!==H.containerInfo||R.stateNode.implementation!==H.implementation?(R=Jd(H,L.mode,Q),R.return=L,R):(R=p(R,H.children||[]),R.return=L,R)}function X(L,R,H,Q,he){return R===null||R.tag!==7?(R=Hi(H,L.mode,Q,he),R.return=L,R):(R=p(R,H),R.return=L,R)}function K(L,R,H){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=Zd(""+R,L.mode,H),R.return=L,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case w:return H=Gl(R.type,R.key,R.props,null,L.mode,H),as(H,R),H.return=L,H;case S:return R=Jd(R,L.mode,H),R.return=L,R;case ee:return R=Yi(R),K(L,R,H)}if(qe(R)||ae(R))return R=Hi(R,L.mode,H,null),R.return=L,R;if(typeof R.then=="function")return K(L,ec(R),H);if(R.$$typeof===M)return K(L,Kl(L,R),H);tc(L,R)}return null}function q(L,R,H,Q){var he=R!==null?R.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return he!==null?null:C(L,R,""+H,Q);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case w:return H.key===he?N(L,R,H,Q):null;case S:return H.key===he?I(L,R,H,Q):null;case ee:return H=Yi(H),q(L,R,H,Q)}if(qe(H)||ae(H))return he!==null?null:X(L,R,H,Q,null);if(typeof H.then=="function")return q(L,R,ec(H),Q);if(H.$$typeof===M)return q(L,R,Kl(L,H),Q);tc(L,H)}return null}function P(L,R,H,Q,he){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return L=L.get(H)||null,C(R,L,""+Q,he);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case w:return L=L.get(Q.key===null?H:Q.key)||null,N(R,L,Q,he);case S:return L=L.get(Q.key===null?H:Q.key)||null,I(R,L,Q,he);case ee:return Q=Yi(Q),P(L,R,H,Q,he)}if(qe(Q)||ae(Q))return L=L.get(H)||null,X(R,L,Q,he,null);if(typeof Q.then=="function")return P(L,R,H,ec(Q),he);if(Q.$$typeof===M)return P(L,R,H,Kl(R,Q),he);tc(R,Q)}return null}function oe(L,R,H,Q){for(var he=null,$e=null,ue=R,Se=R=0,Ne=null;ue!==null&&Se<H.length;Se++){ue.index>Se?(Ne=ue,ue=null):Ne=ue.sibling;var Le=q(L,ue,H[Se],Q);if(Le===null){ue===null&&(ue=Ne);break}n&&ue&&Le.alternate===null&&i(L,ue),R=m(Le,R,Se),$e===null?he=Le:$e.sibling=Le,$e=Le,ue=Ne}if(Se===H.length)return o(L,ue),Re&&yr(L,Se),he;if(ue===null){for(;Se<H.length;Se++)ue=K(L,H[Se],Q),ue!==null&&(R=m(ue,R,Se),$e===null?he=ue:$e.sibling=ue,$e=ue);return Re&&yr(L,Se),he}for(ue=c(ue);Se<H.length;Se++)Ne=P(ue,L,Se,H[Se],Q),Ne!==null&&(n&&Ne.alternate!==null&&ue.delete(Ne.key===null?Se:Ne.key),R=m(Ne,R,Se),$e===null?he=Ne:$e.sibling=Ne,$e=Ne);return n&&ue.forEach(function(bi){return i(L,bi)}),Re&&yr(L,Se),he}function me(L,R,H,Q){if(H==null)throw Error(a(151));for(var he=null,$e=null,ue=R,Se=R=0,Ne=null,Le=H.next();ue!==null&&!Le.done;Se++,Le=H.next()){ue.index>Se?(Ne=ue,ue=null):Ne=ue.sibling;var bi=q(L,ue,Le.value,Q);if(bi===null){ue===null&&(ue=Ne);break}n&&ue&&bi.alternate===null&&i(L,ue),R=m(bi,R,Se),$e===null?he=bi:$e.sibling=bi,$e=bi,ue=Ne}if(Le.done)return o(L,ue),Re&&yr(L,Se),he;if(ue===null){for(;!Le.done;Se++,Le=H.next())Le=K(L,Le.value,Q),Le!==null&&(R=m(Le,R,Se),$e===null?he=Le:$e.sibling=Le,$e=Le);return Re&&yr(L,Se),he}for(ue=c(ue);!Le.done;Se++,Le=H.next())Le=P(ue,L,Se,Le.value,Q),Le!==null&&(n&&Le.alternate!==null&&ue.delete(Le.key===null?Se:Le.key),R=m(Le,R,Se),$e===null?he=Le:$e.sibling=Le,$e=Le);return n&&ue.forEach(function(ok){return i(L,ok)}),Re&&yr(L,Se),he}function Ve(L,R,H,Q){if(typeof H=="object"&&H!==null&&H.type===T&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case w:e:{for(var he=H.key;R!==null;){if(R.key===he){if(he=H.type,he===T){if(R.tag===7){o(L,R.sibling),Q=p(R,H.props.children),Q.return=L,L=Q;break e}}else if(R.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===ee&&Yi(he)===R.type){o(L,R.sibling),Q=p(R,H.props),as(Q,H),Q.return=L,L=Q;break e}o(L,R);break}else i(L,R);R=R.sibling}H.type===T?(Q=Hi(H.props.children,L.mode,Q,H.key),Q.return=L,L=Q):(Q=Gl(H.type,H.key,H.props,null,L.mode,Q),as(Q,H),Q.return=L,L=Q)}return x(L);case S:e:{for(he=H.key;R!==null;){if(R.key===he)if(R.tag===4&&R.stateNode.containerInfo===H.containerInfo&&R.stateNode.implementation===H.implementation){o(L,R.sibling),Q=p(R,H.children||[]),Q.return=L,L=Q;break e}else{o(L,R);break}else i(L,R);R=R.sibling}Q=Jd(H,L.mode,Q),Q.return=L,L=Q}return x(L);case ee:return H=Yi(H),Ve(L,R,H,Q)}if(qe(H))return oe(L,R,H,Q);if(ae(H)){if(he=ae(H),typeof he!="function")throw Error(a(150));return H=he.call(H),me(L,R,H,Q)}if(typeof H.then=="function")return Ve(L,R,ec(H),Q);if(H.$$typeof===M)return Ve(L,R,Kl(L,H),Q);tc(L,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,R!==null&&R.tag===6?(o(L,R.sibling),Q=p(R,H),Q.return=L,L=Q):(o(L,R),Q=Zd(H,L.mode,Q),Q.return=L,L=Q),x(L)):o(L,R)}return function(L,R,H,Q){try{is=0;var he=Ve(L,R,H,Q);return Ia=null,he}catch(ue){if(ue===Ha||ue===Zl)throw ue;var $e=un(29,ue,null,L.mode);return $e.lanes=Q,$e.return=L,$e}finally{}}}var Xi=Hv(!0),Iv=Hv(!1),ni=!1;function ff(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hf(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function ri(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ii(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Be&2)!==0){var p=c.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),c.pending=i,i=Xl(n),Sv(n,null,o),i}return Pl(n,c,i,o),Xl(n)}function os(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194048)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Ng(n,o)}}function pf(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var p=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var x={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?p=m=x:m=m.next=x,o=o.next}while(o!==null);m===null?p=m=i:m=m.next=i}else p=m=i;o={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}var mf=!1;function ss(){if(mf){var n=La;if(n!==null)throw n}}function ls(n,i,o,c){mf=!1;var p=n.updateQueue;ni=!1;var m=p.firstBaseUpdate,x=p.lastBaseUpdate,C=p.shared.pending;if(C!==null){p.shared.pending=null;var N=C,I=N.next;N.next=null,x===null?m=I:x.next=I,x=N;var X=n.alternate;X!==null&&(X=X.updateQueue,C=X.lastBaseUpdate,C!==x&&(C===null?X.firstBaseUpdate=I:C.next=I,X.lastBaseUpdate=N))}if(m!==null){var K=p.baseState;x=0,X=I=N=null,C=m;do{var q=C.lane&-536870913,P=q!==C.lane;if(P?(Oe&q)===q:(c&q)===q){q!==0&&q===$a&&(mf=!0),X!==null&&(X=X.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var oe=n,me=C;q=i;var Ve=o;switch(me.tag){case 1:if(oe=me.payload,typeof oe=="function"){K=oe.call(Ve,K,q);break e}K=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=me.payload,q=typeof oe=="function"?oe.call(Ve,K,q):oe,q==null)break e;K=g({},K,q);break e;case 2:ni=!0}}q=C.callback,q!==null&&(n.flags|=64,P&&(n.flags|=8192),P=p.callbacks,P===null?p.callbacks=[q]:P.push(q))}else P={lane:q,tag:C.tag,payload:C.payload,callback:C.callback,next:null},X===null?(I=X=P,N=K):X=X.next=P,x|=q;if(C=C.next,C===null){if(C=p.shared.pending,C===null)break;P=C,C=P.next,P.next=null,p.lastBaseUpdate=P,p.shared.pending=null}}while(!0);X===null&&(N=K),p.baseState=N,p.firstBaseUpdate=I,p.lastBaseUpdate=X,m===null&&(p.shared.lanes=0),ci|=x,n.lanes=x,n.memoizedState=K}}function Bv(n,i){if(typeof n!="function")throw Error(a(191,n));n.call(i)}function qv(n,i){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)Bv(o[n],i)}var Ba=O(null),nc=O(0);function Fv(n,i){n=Mr,W(nc,n),W(Ba,i),Mr=n|i.baseLanes}function gf(){W(nc,Mr),W(Ba,Ba.current)}function vf(){Mr=nc.current,F(Ba),F(nc)}var dn=O(null),Nn=null;function ai(n){var i=n.alternate;W(ft,ft.current&1),W(dn,n),Nn===null&&(i===null||Ba.current!==null||i.memoizedState!==null)&&(Nn=n)}function yf(n){W(ft,ft.current),W(dn,n),Nn===null&&(Nn=n)}function Yv(n){n.tag===22?(W(ft,ft.current),W(dn,n),Nn===null&&(Nn=n)):oi()}function oi(){W(ft,ft.current),W(dn,dn.current)}function fn(n){F(dn),Nn===n&&(Nn=null),F(ft)}var ft=O(0);function rc(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Th(o)||kh(o)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var xr=0,_e=null,Xe=null,bt=null,ic=!1,qa=!1,Gi=!1,ac=0,cs=0,Fa=null,K2=0;function lt(){throw Error(a(321))}function bf(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!cn(n[o],i[o]))return!1;return!0}function wf(n,i,o,c,p,m){return xr=m,_e=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,A.H=n===null||n.memoizedState===null?C0:jf,Gi=!1,m=o(c,p),Gi=!1,qa&&(m=Xv(i,o,c,p)),Pv(n),m}function Pv(n){A.H=fs;var i=Xe!==null&&Xe.next!==null;if(xr=0,bt=Xe=_e=null,ic=!1,cs=0,Fa=null,i)throw Error(a(300));n===null||wt||(n=n.dependencies,n!==null&&Ql(n)&&(wt=!0))}function Xv(n,i,o,c){_e=n;var p=0;do{if(qa&&(Fa=null),cs=0,qa=!1,25<=p)throw Error(a(301));if(p+=1,bt=Xe=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}A.H=A0,m=i(o,c)}while(qa);return m}function W2(){var n=A.H,i=n.useState()[0];return i=typeof i.then=="function"?us(i):i,n=n.useState()[0],(Xe!==null?Xe.memoizedState:null)!==n&&(_e.flags|=1024),i}function xf(){var n=ac!==0;return ac=0,n}function _f(n,i,o){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~o}function Sf(n){if(ic){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}ic=!1}xr=0,bt=Xe=_e=null,qa=!1,cs=ac=0,Fa=null}function Yt(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?_e.memoizedState=bt=n:bt=bt.next=n,bt}function ht(){if(Xe===null){var n=_e.alternate;n=n!==null?n.memoizedState:null}else n=Xe.next;var i=bt===null?_e.memoizedState:bt.next;if(i!==null)bt=i,Xe=n;else{if(n===null)throw _e.alternate===null?Error(a(467)):Error(a(310));Xe=n,n={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},bt===null?_e.memoizedState=bt=n:bt=bt.next=n}return bt}function oc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function us(n){var i=cs;return cs+=1,Fa===null&&(Fa=[]),n=Uv(Fa,n,i),i=_e,(bt===null?i.memoizedState:bt.next)===null&&(i=i.alternate,A.H=i===null||i.memoizedState===null?C0:jf),n}function sc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return us(n);if(n.$$typeof===M)return jt(n)}throw Error(a(438,String(n)))}function Tf(n){var i=null,o=_e.updateQueue;if(o!==null&&(i=o.memoCache),i==null){var c=_e.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(i={data:c.data.map(function(p){return p.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),o===null&&(o=oc(),_e.updateQueue=o),o.memoCache=i,o=i.data[i.index],o===void 0)for(o=i.data[i.index]=Array(n),c=0;c<n;c++)o[c]=pe;return i.index++,o}function _r(n,i){return typeof i=="function"?i(n):i}function lc(n){var i=ht();return kf(i,Xe,n)}function kf(n,i,o){var c=n.queue;if(c===null)throw Error(a(311));c.lastRenderedReducer=o;var p=n.baseQueue,m=c.pending;if(m!==null){if(p!==null){var x=p.next;p.next=m.next,m.next=x}i.baseQueue=p=m,c.pending=null}if(m=n.baseState,p===null)n.memoizedState=m;else{i=p.next;var C=x=null,N=null,I=i,X=!1;do{var K=I.lane&-536870913;if(K!==I.lane?(Oe&K)===K:(xr&K)===K){var q=I.revertLane;if(q===0)N!==null&&(N=N.next={lane:0,revertLane:0,gesture:null,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null}),K===$a&&(X=!0);else if((xr&q)===q){I=I.next,q===$a&&(X=!0);continue}else K={lane:0,revertLane:I.revertLane,gesture:null,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null},N===null?(C=N=K,x=m):N=N.next=K,_e.lanes|=q,ci|=q;K=I.action,Gi&&o(m,K),m=I.hasEagerState?I.eagerState:o(m,K)}else q={lane:K,revertLane:I.revertLane,gesture:I.gesture,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null},N===null?(C=N=q,x=m):N=N.next=q,_e.lanes|=K,ci|=K;I=I.next}while(I!==null&&I!==i);if(N===null?x=m:N.next=C,!cn(m,n.memoizedState)&&(wt=!0,X&&(o=La,o!==null)))throw o;n.memoizedState=m,n.baseState=x,n.baseQueue=N,c.lastRenderedState=m}return p===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function Ef(n){var i=ht(),o=i.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=n;var c=o.dispatch,p=o.pending,m=i.memoizedState;if(p!==null){o.pending=null;var x=p=p.next;do m=n(m,x.action),x=x.next;while(x!==p);cn(m,i.memoizedState)||(wt=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,c]}function Gv(n,i,o){var c=_e,p=ht(),m=Re;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=i();var x=!cn((Xe||p).memoizedState,o);if(x&&(p.memoizedState=o,wt=!0),p=p.queue,Mf(Kv.bind(null,c,p,n),[n]),p.getSnapshot!==i||x||bt!==null&&bt.memoizedState.tag&1){if(c.flags|=2048,Ya(9,{destroy:void 0},Qv.bind(null,c,p,o,i),null),Qe===null)throw Error(a(349));m||(xr&127)!==0||Vv(c,i,o)}return o}function Vv(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=_e.updateQueue,i===null?(i=oc(),_e.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Qv(n,i,o,c){i.value=o,i.getSnapshot=c,Wv(i)&&Zv(n)}function Kv(n,i,o){return o(function(){Wv(i)&&Zv(n)})}function Wv(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!cn(n,o)}catch{return!0}}function Zv(n){var i=Li(n,2);i!==null&&en(i,n,2)}function Cf(n){var i=Yt();if(typeof n=="function"){var o=n;if(n=o(),Gi){Qr(!0);try{o()}finally{Qr(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_r,lastRenderedState:n},i}function Jv(n,i,o,c){return n.baseState=o,kf(n,Xe,typeof c=="function"?c:_r)}function Z2(n,i,o,c,p){if(dc(n))throw Error(a(485));if(n=i.action,n!==null){var m={payload:p,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){m.listeners.push(x)}};A.T!==null?o(!0):m.isTransition=!1,c(m),o=i.pending,o===null?(m.next=i.pending=m,e0(i,m)):(m.next=o.next,i.pending=o.next=m)}}function e0(n,i){var o=i.action,c=i.payload,p=n.state;if(i.isTransition){var m=A.T,x={};A.T=x;try{var C=o(p,c),N=A.S;N!==null&&N(x,C),t0(n,i,C)}catch(I){Af(n,i,I)}finally{m!==null&&x.types!==null&&(m.types=x.types),A.T=m}}else try{m=o(p,c),t0(n,i,m)}catch(I){Af(n,i,I)}}function t0(n,i,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(c){n0(n,i,c)},function(c){return Af(n,i,c)}):n0(n,i,o)}function n0(n,i,o){i.status="fulfilled",i.value=o,r0(i),n.state=o,i=n.pending,i!==null&&(o=i.next,o===i?n.pending=null:(o=o.next,i.next=o,e0(n,o)))}function Af(n,i,o){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do i.status="rejected",i.reason=o,r0(i),i=i.next;while(i!==c)}n.action=null}function r0(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function i0(n,i){return i}function a0(n,i){if(Re){var o=Qe.formState;if(o!==null){e:{var c=_e;if(Re){if(et){t:{for(var p=et,m=On;p.nodeType!==8;){if(!m){p=null;break t}if(p=zn(p.nextSibling),p===null){p=null;break t}}m=p.data,p=m==="F!"||m==="F"?p:null}if(p){et=zn(p.nextSibling),c=p.data==="F!";break e}}ei(c)}c=!1}c&&(i=o[0])}}return o=Yt(),o.memoizedState=o.baseState=i,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i0,lastRenderedState:i},o.queue=c,o=T0.bind(null,_e,c),c.dispatch=o,c=Cf(!1),m=Rf.bind(null,_e,!1,c.queue),c=Yt(),p={state:i,dispatch:null,action:n,pending:null},c.queue=p,o=Z2.bind(null,_e,p,m,o),p.dispatch=o,c.memoizedState=n,[i,o,!1]}function o0(n){var i=ht();return s0(i,Xe,n)}function s0(n,i,o){if(i=kf(n,i,i0)[0],n=lc(_r)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var c=us(i)}catch(x){throw x===Ha?Zl:x}else c=i;i=ht();var p=i.queue,m=p.dispatch;return o!==i.memoizedState&&(_e.flags|=2048,Ya(9,{destroy:void 0},J2.bind(null,p,o),null)),[c,m,n]}function J2(n,i){n.action=i}function l0(n){var i=ht(),o=Xe;if(o!==null)return s0(i,o,n);ht(),i=i.memoizedState,o=ht();var c=o.queue.dispatch;return o.memoizedState=n,[i,c,!1]}function Ya(n,i,o,c){return n={tag:n,create:o,deps:c,inst:i,next:null},i=_e.updateQueue,i===null&&(i=oc(),_e.updateQueue=i),o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n),n}function c0(){return ht().memoizedState}function cc(n,i,o,c){var p=Yt();_e.flags|=n,p.memoizedState=Ya(1|i,{destroy:void 0},o,c===void 0?null:c)}function uc(n,i,o,c){var p=ht();c=c===void 0?null:c;var m=p.memoizedState.inst;Xe!==null&&c!==null&&bf(c,Xe.memoizedState.deps)?p.memoizedState=Ya(i,m,o,c):(_e.flags|=n,p.memoizedState=Ya(1|i,m,o,c))}function u0(n,i){cc(8390656,8,n,i)}function Mf(n,i){uc(2048,8,n,i)}function eT(n){_e.flags|=4;var i=_e.updateQueue;if(i===null)i=oc(),_e.updateQueue=i,i.events=[n];else{var o=i.events;o===null?i.events=[n]:o.push(n)}}function d0(n){var i=ht().memoizedState;return eT({ref:i,nextImpl:n}),function(){if((Be&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function f0(n,i){return uc(4,2,n,i)}function h0(n,i){return uc(4,4,n,i)}function p0(n,i){if(typeof i=="function"){n=n();var o=i(n);return function(){typeof o=="function"?o():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function m0(n,i,o){o=o!=null?o.concat([n]):null,uc(4,4,p0.bind(null,i,n),o)}function Of(){}function g0(n,i){var o=ht();i=i===void 0?null:i;var c=o.memoizedState;return i!==null&&bf(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function v0(n,i){var o=ht();i=i===void 0?null:i;var c=o.memoizedState;if(i!==null&&bf(i,c[1]))return c[0];if(c=n(),Gi){Qr(!0);try{n()}finally{Qr(!1)}}return o.memoizedState=[c,i],c}function Nf(n,i,o){return o===void 0||(xr&1073741824)!==0&&(Oe&261930)===0?n.memoizedState=i:(n.memoizedState=o,n=yy(),_e.lanes|=n,ci|=n,o)}function y0(n,i,o,c){return cn(o,i)?o:Ba.current!==null?(n=Nf(n,o,c),cn(n,i)||(wt=!0),n):(xr&42)===0||(xr&1073741824)!==0&&(Oe&261930)===0?(wt=!0,n.memoizedState=o):(n=yy(),_e.lanes|=n,ci|=n,i)}function b0(n,i,o,c,p){var m=z.p;z.p=m!==0&&8>m?m:8;var x=A.T,C={};A.T=C,Rf(n,!1,i,o);try{var N=p(),I=A.S;if(I!==null&&I(C,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var X=Q2(N,c);ds(n,i,X,mn(n))}else ds(n,i,c,mn(n))}catch(K){ds(n,i,{then:function(){},status:"rejected",reason:K},mn())}finally{z.p=m,x!==null&&C.types!==null&&(x.types=C.types),A.T=x}}function tT(){}function zf(n,i,o,c){if(n.tag!==5)throw Error(a(476));var p=w0(n).queue;b0(n,p,i,$,o===null?tT:function(){return x0(n),o(c)})}function w0(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_r,lastRenderedState:$},next:null};var o={};return i.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_r,lastRenderedState:o},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function x0(n){var i=w0(n);i.next===null&&(i=n.alternate.memoizedState),ds(n,i.next.queue,{},mn())}function Df(){return jt(As)}function _0(){return ht().memoizedState}function S0(){return ht().memoizedState}function nT(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var o=mn();n=ri(o);var c=ii(i,n,o);c!==null&&(en(c,i,o),os(c,i,o)),i={cache:lf()},n.payload=i;return}i=i.return}}function rT(n,i,o){var c=mn();o={lane:c,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},dc(n)?k0(i,o):(o=Kd(n,i,o,c),o!==null&&(en(o,n,c),E0(o,i,c)))}function T0(n,i,o){var c=mn();ds(n,i,o,c)}function ds(n,i,o,c){var p={lane:c,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(dc(n))k0(i,p);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var x=i.lastRenderedState,C=m(x,o);if(p.hasEagerState=!0,p.eagerState=C,cn(C,x))return Pl(n,i,p,0),Qe===null&&Yl(),!1}catch{}finally{}if(o=Kd(n,i,p,c),o!==null)return en(o,n,c),E0(o,i,c),!0}return!1}function Rf(n,i,o,c){if(c={lane:2,revertLane:fh(),gesture:null,action:c,hasEagerState:!1,eagerState:null,next:null},dc(n)){if(i)throw Error(a(479))}else i=Kd(n,o,c,2),i!==null&&en(i,n,2)}function dc(n){var i=n.alternate;return n===_e||i!==null&&i===_e}function k0(n,i){qa=ic=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function E0(n,i,o){if((o&4194048)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Ng(n,o)}}var fs={readContext:jt,use:sc,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useLayoutEffect:lt,useInsertionEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useSyncExternalStore:lt,useId:lt,useHostTransitionStatus:lt,useFormState:lt,useActionState:lt,useOptimistic:lt,useMemoCache:lt,useCacheRefresh:lt};fs.useEffectEvent=lt;var C0={readContext:jt,use:sc,useCallback:function(n,i){return Yt().memoizedState=[n,i===void 0?null:i],n},useContext:jt,useEffect:u0,useImperativeHandle:function(n,i,o){o=o!=null?o.concat([n]):null,cc(4194308,4,p0.bind(null,i,n),o)},useLayoutEffect:function(n,i){return cc(4194308,4,n,i)},useInsertionEffect:function(n,i){cc(4,2,n,i)},useMemo:function(n,i){var o=Yt();i=i===void 0?null:i;var c=n();if(Gi){Qr(!0);try{n()}finally{Qr(!1)}}return o.memoizedState=[c,i],c},useReducer:function(n,i,o){var c=Yt();if(o!==void 0){var p=o(i);if(Gi){Qr(!0);try{o(i)}finally{Qr(!1)}}}else p=i;return c.memoizedState=c.baseState=p,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:p},c.queue=n,n=n.dispatch=rT.bind(null,_e,n),[c.memoizedState,n]},useRef:function(n){var i=Yt();return n={current:n},i.memoizedState=n},useState:function(n){n=Cf(n);var i=n.queue,o=T0.bind(null,_e,i);return i.dispatch=o,[n.memoizedState,o]},useDebugValue:Of,useDeferredValue:function(n,i){var o=Yt();return Nf(o,n,i)},useTransition:function(){var n=Cf(!1);return n=b0.bind(null,_e,n.queue,!0,!1),Yt().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,o){var c=_e,p=Yt();if(Re){if(o===void 0)throw Error(a(407));o=o()}else{if(o=i(),Qe===null)throw Error(a(349));(Oe&127)!==0||Vv(c,i,o)}p.memoizedState=o;var m={value:o,getSnapshot:i};return p.queue=m,u0(Kv.bind(null,c,m,n),[n]),c.flags|=2048,Ya(9,{destroy:void 0},Qv.bind(null,c,m,o,i),null),o},useId:function(){var n=Yt(),i=Qe.identifierPrefix;if(Re){var o=rr,c=nr;o=(c&~(1<<32-ln(c)-1)).toString(32)+o,i="_"+i+"R_"+o,o=ac++,0<o&&(i+="H"+o.toString(32)),i+="_"}else o=K2++,i="_"+i+"r_"+o.toString(32)+"_";return n.memoizedState=i},useHostTransitionStatus:Df,useFormState:a0,useActionState:a0,useOptimistic:function(n){var i=Yt();i.memoizedState=i.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=o,i=Rf.bind(null,_e,!0,o),o.dispatch=i,[n,i]},useMemoCache:Tf,useCacheRefresh:function(){return Yt().memoizedState=nT.bind(null,_e)},useEffectEvent:function(n){var i=Yt(),o={impl:n};return i.memoizedState=o,function(){if((Be&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},jf={readContext:jt,use:sc,useCallback:g0,useContext:jt,useEffect:Mf,useImperativeHandle:m0,useInsertionEffect:f0,useLayoutEffect:h0,useMemo:v0,useReducer:lc,useRef:c0,useState:function(){return lc(_r)},useDebugValue:Of,useDeferredValue:function(n,i){var o=ht();return y0(o,Xe.memoizedState,n,i)},useTransition:function(){var n=lc(_r)[0],i=ht().memoizedState;return[typeof n=="boolean"?n:us(n),i]},useSyncExternalStore:Gv,useId:_0,useHostTransitionStatus:Df,useFormState:o0,useActionState:o0,useOptimistic:function(n,i){var o=ht();return Jv(o,Xe,n,i)},useMemoCache:Tf,useCacheRefresh:S0};jf.useEffectEvent=d0;var A0={readContext:jt,use:sc,useCallback:g0,useContext:jt,useEffect:Mf,useImperativeHandle:m0,useInsertionEffect:f0,useLayoutEffect:h0,useMemo:v0,useReducer:Ef,useRef:c0,useState:function(){return Ef(_r)},useDebugValue:Of,useDeferredValue:function(n,i){var o=ht();return Xe===null?Nf(o,n,i):y0(o,Xe.memoizedState,n,i)},useTransition:function(){var n=Ef(_r)[0],i=ht().memoizedState;return[typeof n=="boolean"?n:us(n),i]},useSyncExternalStore:Gv,useId:_0,useHostTransitionStatus:Df,useFormState:l0,useActionState:l0,useOptimistic:function(n,i){var o=ht();return Xe!==null?Jv(o,Xe,n,i):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:Tf,useCacheRefresh:S0};A0.useEffectEvent=d0;function Uf(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:g({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var $f={enqueueSetState:function(n,i,o){n=n._reactInternals;var c=mn(),p=ri(c);p.payload=i,o!=null&&(p.callback=o),i=ii(n,p,c),i!==null&&(en(i,n,c),os(i,n,c))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=mn(),p=ri(c);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=ii(n,p,c),i!==null&&(en(i,n,c),os(i,n,c))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=mn(),c=ri(o);c.tag=2,i!=null&&(c.callback=i),i=ii(n,c,o),i!==null&&(en(i,n,o),os(i,n,o))}};function M0(n,i,o,c,p,m,x){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,x):i.prototype&&i.prototype.isPureReactComponent?!Zo(o,c)||!Zo(p,m):!0}function O0(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&$f.enqueueReplaceState(i,i.state,null)}function Vi(n,i){var o=i;if("ref"in i){o={};for(var c in i)c!=="ref"&&(o[c]=i[c])}if(n=n.defaultProps){o===i&&(o=g({},o));for(var p in n)o[p]===void 0&&(o[p]=n[p])}return o}function N0(n){Fl(n)}function z0(n){console.error(n)}function D0(n){Fl(n)}function fc(n,i){try{var o=n.onUncaughtError;o(i.value,{componentStack:i.stack})}catch(c){setTimeout(function(){throw c})}}function R0(n,i,o){try{var c=n.onCaughtError;c(o.value,{componentStack:o.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function Lf(n,i,o){return o=ri(o),o.tag=3,o.payload={element:null},o.callback=function(){fc(n,i)},o}function j0(n){return n=ri(n),n.tag=3,n}function U0(n,i,o,c){var p=o.type.getDerivedStateFromError;if(typeof p=="function"){var m=c.value;n.payload=function(){return p(m)},n.callback=function(){R0(i,o,c)}}var x=o.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(n.callback=function(){R0(i,o,c),typeof p!="function"&&(ui===null?ui=new Set([this]):ui.add(this));var C=c.stack;this.componentDidCatch(c.value,{componentStack:C!==null?C:""})})}function iT(n,i,o,c,p){if(o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(i=o.alternate,i!==null&&Ua(i,o,p,!0),o=dn.current,o!==null){switch(o.tag){case 31:case 13:return Nn===null?Tc():o.alternate===null&&ct===0&&(ct=3),o.flags&=-257,o.flags|=65536,o.lanes=p,c===Jl?o.flags|=16384:(i=o.updateQueue,i===null?o.updateQueue=new Set([c]):i.add(c),ch(n,c,p)),!1;case 22:return o.flags|=65536,c===Jl?o.flags|=16384:(i=o.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([c])},o.updateQueue=i):(o=i.retryQueue,o===null?i.retryQueue=new Set([c]):o.add(c)),ch(n,c,p)),!1}throw Error(a(435,o.tag))}return ch(n,c,p),Tc(),!1}if(Re)return i=dn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=p,c!==nf&&(n=Error(a(422),{cause:c}),ts(Cn(n,o)))):(c!==nf&&(i=Error(a(423),{cause:c}),ts(Cn(i,o))),n=n.current.alternate,n.flags|=65536,p&=-p,n.lanes|=p,c=Cn(c,o),p=Lf(n.stateNode,c,p),pf(n,p),ct!==4&&(ct=2)),!1;var m=Error(a(520),{cause:c});if(m=Cn(m,o),ws===null?ws=[m]:ws.push(m),ct!==4&&(ct=2),i===null)return!0;c=Cn(c,o),o=i;do{switch(o.tag){case 3:return o.flags|=65536,n=p&-p,o.lanes|=n,n=Lf(o.stateNode,c,n),pf(o,n),!1;case 1:if(i=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ui===null||!ui.has(m))))return o.flags|=65536,p&=-p,o.lanes|=p,p=j0(p),U0(p,n,o,c),pf(o,p),!1}o=o.return}while(o!==null);return!1}var Hf=Error(a(461)),wt=!1;function Ut(n,i,o,c){i.child=n===null?Iv(i,null,o,c):Xi(i,n.child,o,c)}function $0(n,i,o,c,p){o=o.render;var m=i.ref;if("ref"in c){var x={};for(var C in c)C!=="ref"&&(x[C]=c[C])}else x=c;return qi(i),c=wf(n,i,o,x,m,p),C=xf(),n!==null&&!wt?(_f(n,i,p),Sr(n,i,p)):(Re&&C&&ef(i),i.flags|=1,Ut(n,i,c,p),i.child)}function L0(n,i,o,c,p){if(n===null){var m=o.type;return typeof m=="function"&&!Wd(m)&&m.defaultProps===void 0&&o.compare===null?(i.tag=15,i.type=m,H0(n,i,m,c,p)):(n=Gl(o.type,null,c,i,i.mode,p),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,!Gf(n,p)){var x=m.memoizedProps;if(o=o.compare,o=o!==null?o:Zo,o(x,c)&&n.ref===i.ref)return Sr(n,i,p)}return i.flags|=1,n=vr(m,c),n.ref=i.ref,n.return=i,i.child=n}function H0(n,i,o,c,p){if(n!==null){var m=n.memoizedProps;if(Zo(m,c)&&n.ref===i.ref)if(wt=!1,i.pendingProps=c=m,Gf(n,p))(n.flags&131072)!==0&&(wt=!0);else return i.lanes=n.lanes,Sr(n,i,p)}return If(n,i,o,c,p)}function I0(n,i,o,c){var p=c.children,m=n!==null?n.memoizedState:null;if(n===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),c.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,n!==null){for(c=i.child=n.child,p=0;c!==null;)p=p|c.lanes|c.childLanes,c=c.sibling;c=p&~m}else c=0,i.child=null;return B0(n,i,m,o,c)}if((o&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&Wl(i,m!==null?m.cachePool:null),m!==null?Fv(i,m):gf(),Yv(i);else return c=i.lanes=536870912,B0(n,i,m!==null?m.baseLanes|o:o,o,c)}else m!==null?(Wl(i,m.cachePool),Fv(i,m),oi(),i.memoizedState=null):(n!==null&&Wl(i,null),gf(),oi());return Ut(n,i,p,o),i.child}function hs(n,i){return n!==null&&n.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function B0(n,i,o,c,p){var m=uf();return m=m===null?null:{parent:yt._currentValue,pool:m},i.memoizedState={baseLanes:o,cachePool:m},n!==null&&Wl(i,null),gf(),Yv(i),n!==null&&Ua(n,i,c,!0),i.childLanes=p,null}function hc(n,i){return i=mc({mode:i.mode,children:i.children},n.mode),i.ref=n.ref,n.child=i,i.return=n,i}function q0(n,i,o){return Xi(i,n.child,null,o),n=hc(i,i.pendingProps),n.flags|=2,fn(i),i.memoizedState=null,n}function aT(n,i,o){var c=i.pendingProps,p=(i.flags&128)!==0;if(i.flags&=-129,n===null){if(Re){if(c.mode==="hidden")return n=hc(i,c),i.lanes=536870912,hs(null,n);if(yf(i),(n=et)?(n=eb(n,On),n=n!==null&&n.data==="&"?n:null,n!==null&&(i.memoizedState={dehydrated:n,treeContext:Zr!==null?{id:nr,overflow:rr}:null,retryLane:536870912,hydrationErrors:null},o=kv(n),o.return=i,i.child=o,Rt=i,et=null)):n=null,n===null)throw ei(i);return i.lanes=536870912,null}return hc(i,c)}var m=n.memoizedState;if(m!==null){var x=m.dehydrated;if(yf(i),p)if(i.flags&256)i.flags&=-257,i=q0(n,i,o);else if(i.memoizedState!==null)i.child=n.child,i.flags|=128,i=null;else throw Error(a(558));else if(wt||Ua(n,i,o,!1),p=(o&n.childLanes)!==0,wt||p){if(c=Qe,c!==null&&(x=zg(c,o),x!==0&&x!==m.retryLane))throw m.retryLane=x,Li(n,x),en(c,n,x),Hf;Tc(),i=q0(n,i,o)}else n=m.treeContext,et=zn(x.nextSibling),Rt=i,Re=!0,Jr=null,On=!1,n!==null&&Av(i,n),i=hc(i,c),i.flags|=4096;return i}return n=vr(n.child,{mode:c.mode,children:c.children}),n.ref=i.ref,i.child=n,n.return=i,n}function pc(n,i){var o=i.ref;if(o===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(n===null||n.ref!==o)&&(i.flags|=4194816)}}function If(n,i,o,c,p){return qi(i),o=wf(n,i,o,c,void 0,p),c=xf(),n!==null&&!wt?(_f(n,i,p),Sr(n,i,p)):(Re&&c&&ef(i),i.flags|=1,Ut(n,i,o,p),i.child)}function F0(n,i,o,c,p,m){return qi(i),i.updateQueue=null,o=Xv(i,c,o,p),Pv(n),c=xf(),n!==null&&!wt?(_f(n,i,m),Sr(n,i,m)):(Re&&c&&ef(i),i.flags|=1,Ut(n,i,o,m),i.child)}function Y0(n,i,o,c,p){if(qi(i),i.stateNode===null){var m=za,x=o.contextType;typeof x=="object"&&x!==null&&(m=jt(x)),m=new o(c,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=$f,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=c,m.state=i.memoizedState,m.refs={},ff(i),x=o.contextType,m.context=typeof x=="object"&&x!==null?jt(x):za,m.state=i.memoizedState,x=o.getDerivedStateFromProps,typeof x=="function"&&(Uf(i,o,x,c),m.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(x=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),x!==m.state&&$f.enqueueReplaceState(m,m.state,null),ls(i,c,m,p),ss(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),c=!0}else if(n===null){m=i.stateNode;var C=i.memoizedProps,N=Vi(o,C);m.props=N;var I=m.context,X=o.contextType;x=za,typeof X=="object"&&X!==null&&(x=jt(X));var K=o.getDerivedStateFromProps;X=typeof K=="function"||typeof m.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,X||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(C||I!==x)&&O0(i,m,c,x),ni=!1;var q=i.memoizedState;m.state=q,ls(i,c,m,p),ss(),I=i.memoizedState,C||q!==I||ni?(typeof K=="function"&&(Uf(i,o,K,c),I=i.memoizedState),(N=ni||M0(i,o,N,c,q,I,x))?(X||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=I),m.props=c,m.state=I,m.context=x,c=N):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{m=i.stateNode,hf(n,i),x=i.memoizedProps,X=Vi(o,x),m.props=X,K=i.pendingProps,q=m.context,I=o.contextType,N=za,typeof I=="object"&&I!==null&&(N=jt(I)),C=o.getDerivedStateFromProps,(I=typeof C=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(x!==K||q!==N)&&O0(i,m,c,N),ni=!1,q=i.memoizedState,m.state=q,ls(i,c,m,p),ss();var P=i.memoizedState;x!==K||q!==P||ni||n!==null&&n.dependencies!==null&&Ql(n.dependencies)?(typeof C=="function"&&(Uf(i,o,C,c),P=i.memoizedState),(X=ni||M0(i,o,X,c,q,P,N)||n!==null&&n.dependencies!==null&&Ql(n.dependencies))?(I||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,P,N),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,P,N)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||x===n.memoizedProps&&q===n.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||x===n.memoizedProps&&q===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=P),m.props=c,m.state=P,m.context=N,c=X):(typeof m.componentDidUpdate!="function"||x===n.memoizedProps&&q===n.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||x===n.memoizedProps&&q===n.memoizedState||(i.flags|=1024),c=!1)}return m=c,pc(n,i),c=(i.flags&128)!==0,m||c?(m=i.stateNode,o=c&&typeof o.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,n!==null&&c?(i.child=Xi(i,n.child,null,p),i.child=Xi(i,null,o,p)):Ut(n,i,o,p),i.memoizedState=m.state,n=i.child):n=Sr(n,i,p),n}function P0(n,i,o,c){return Ii(),i.flags|=256,Ut(n,i,o,c),i.child}var Bf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qf(n){return{baseLanes:n,cachePool:Rv()}}function Ff(n,i,o){return n=n!==null?n.childLanes&~o:0,i&&(n|=pn),n}function X0(n,i,o){var c=i.pendingProps,p=!1,m=(i.flags&128)!==0,x;if((x=m)||(x=n!==null&&n.memoizedState===null?!1:(ft.current&2)!==0),x&&(p=!0,i.flags&=-129),x=(i.flags&32)!==0,i.flags&=-33,n===null){if(Re){if(p?ai(i):oi(),(n=et)?(n=eb(n,On),n=n!==null&&n.data!=="&"?n:null,n!==null&&(i.memoizedState={dehydrated:n,treeContext:Zr!==null?{id:nr,overflow:rr}:null,retryLane:536870912,hydrationErrors:null},o=kv(n),o.return=i,i.child=o,Rt=i,et=null)):n=null,n===null)throw ei(i);return kh(n)?i.lanes=32:i.lanes=536870912,null}var C=c.children;return c=c.fallback,p?(oi(),p=i.mode,C=mc({mode:"hidden",children:C},p),c=Hi(c,p,o,null),C.return=i,c.return=i,C.sibling=c,i.child=C,c=i.child,c.memoizedState=qf(o),c.childLanes=Ff(n,x,o),i.memoizedState=Bf,hs(null,c)):(ai(i),Yf(i,C))}var N=n.memoizedState;if(N!==null&&(C=N.dehydrated,C!==null)){if(m)i.flags&256?(ai(i),i.flags&=-257,i=Pf(n,i,o)):i.memoizedState!==null?(oi(),i.child=n.child,i.flags|=128,i=null):(oi(),C=c.fallback,p=i.mode,c=mc({mode:"visible",children:c.children},p),C=Hi(C,p,o,null),C.flags|=2,c.return=i,C.return=i,c.sibling=C,i.child=c,Xi(i,n.child,null,o),c=i.child,c.memoizedState=qf(o),c.childLanes=Ff(n,x,o),i.memoizedState=Bf,i=hs(null,c));else if(ai(i),kh(C)){if(x=C.nextSibling&&C.nextSibling.dataset,x)var I=x.dgst;x=I,c=Error(a(419)),c.stack="",c.digest=x,ts({value:c,source:null,stack:null}),i=Pf(n,i,o)}else if(wt||Ua(n,i,o,!1),x=(o&n.childLanes)!==0,wt||x){if(x=Qe,x!==null&&(c=zg(x,o),c!==0&&c!==N.retryLane))throw N.retryLane=c,Li(n,c),en(x,n,c),Hf;Th(C)||Tc(),i=Pf(n,i,o)}else Th(C)?(i.flags|=192,i.child=n.child,i=null):(n=N.treeContext,et=zn(C.nextSibling),Rt=i,Re=!0,Jr=null,On=!1,n!==null&&Av(i,n),i=Yf(i,c.children),i.flags|=4096);return i}return p?(oi(),C=c.fallback,p=i.mode,N=n.child,I=N.sibling,c=vr(N,{mode:"hidden",children:c.children}),c.subtreeFlags=N.subtreeFlags&65011712,I!==null?C=vr(I,C):(C=Hi(C,p,o,null),C.flags|=2),C.return=i,c.return=i,c.sibling=C,i.child=c,hs(null,c),c=i.child,C=n.child.memoizedState,C===null?C=qf(o):(p=C.cachePool,p!==null?(N=yt._currentValue,p=p.parent!==N?{parent:N,pool:N}:p):p=Rv(),C={baseLanes:C.baseLanes|o,cachePool:p}),c.memoizedState=C,c.childLanes=Ff(n,x,o),i.memoizedState=Bf,hs(n.child,c)):(ai(i),o=n.child,n=o.sibling,o=vr(o,{mode:"visible",children:c.children}),o.return=i,o.sibling=null,n!==null&&(x=i.deletions,x===null?(i.deletions=[n],i.flags|=16):x.push(n)),i.child=o,i.memoizedState=null,o)}function Yf(n,i){return i=mc({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function mc(n,i){return n=un(22,n,null,i),n.lanes=0,n}function Pf(n,i,o){return Xi(i,n.child,null,o),n=Yf(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function G0(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),of(n.return,i,o)}function Xf(n,i,o,c,p,m){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:p,treeForkCount:m}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=c,x.tail=o,x.tailMode=p,x.treeForkCount=m)}function V0(n,i,o){var c=i.pendingProps,p=c.revealOrder,m=c.tail;c=c.children;var x=ft.current,C=(x&2)!==0;if(C?(x=x&1|2,i.flags|=128):x&=1,W(ft,x),Ut(n,i,c,o),c=Re?es:0,!C&&n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&G0(n,o,i);else if(n.tag===19)G0(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(p){case"forwards":for(o=i.child,p=null;o!==null;)n=o.alternate,n!==null&&rc(n)===null&&(p=o),o=o.sibling;o=p,o===null?(p=i.child,i.child=null):(p=o.sibling,o.sibling=null),Xf(i,!1,p,o,m,c);break;case"backwards":case"unstable_legacy-backwards":for(o=null,p=i.child,i.child=null;p!==null;){if(n=p.alternate,n!==null&&rc(n)===null){i.child=p;break}n=p.sibling,p.sibling=o,o=p,p=n}Xf(i,!0,o,null,m,c);break;case"together":Xf(i,!1,null,null,void 0,c);break;default:i.memoizedState=null}return i.child}function Sr(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),ci|=i.lanes,(o&i.childLanes)===0)if(n!==null){if(Ua(n,i,o,!1),(o&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(a(153));if(i.child!==null){for(n=i.child,o=vr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=vr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function Gf(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&Ql(n)))}function oT(n,i,o){switch(i.tag){case 3:ve(i,i.stateNode.containerInfo),ti(i,yt,n.memoizedState.cache),Ii();break;case 27:case 5:ot(i);break;case 4:ve(i,i.stateNode.containerInfo);break;case 10:ti(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,yf(i),null;break;case 13:var c=i.memoizedState;if(c!==null)return c.dehydrated!==null?(ai(i),i.flags|=128,null):(o&i.child.childLanes)!==0?X0(n,i,o):(ai(i),n=Sr(n,i,o),n!==null?n.sibling:null);ai(i);break;case 19:var p=(n.flags&128)!==0;if(c=(o&i.childLanes)!==0,c||(Ua(n,i,o,!1),c=(o&i.childLanes)!==0),p){if(c)return V0(n,i,o);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),W(ft,ft.current),c)break;return null;case 22:return i.lanes=0,I0(n,i,o,i.pendingProps);case 24:ti(i,yt,n.memoizedState.cache)}return Sr(n,i,o)}function Q0(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps)wt=!0;else{if(!Gf(n,o)&&(i.flags&128)===0)return wt=!1,oT(n,i,o);wt=(n.flags&131072)!==0}else wt=!1,Re&&(i.flags&1048576)!==0&&Cv(i,es,i.index);switch(i.lanes=0,i.tag){case 16:e:{var c=i.pendingProps;if(n=Yi(i.elementType),i.type=n,typeof n=="function")Wd(n)?(c=Vi(n,c),i.tag=1,i=Y0(null,i,n,c,o)):(i.tag=0,i=If(null,i,n,c,o));else{if(n!=null){var p=n.$$typeof;if(p===D){i.tag=11,i=$0(null,i,n,c,o);break e}else if(p===B){i.tag=14,i=L0(null,i,n,c,o);break e}}throw i=Ie(n)||n,Error(a(306,i,""))}}return i;case 0:return If(n,i,i.type,i.pendingProps,o);case 1:return c=i.type,p=Vi(c,i.pendingProps),Y0(n,i,c,p,o);case 3:e:{if(ve(i,i.stateNode.containerInfo),n===null)throw Error(a(387));c=i.pendingProps;var m=i.memoizedState;p=m.element,hf(n,i),ls(i,c,null,o);var x=i.memoizedState;if(c=x.cache,ti(i,yt,c),c!==m.cache&&sf(i,[yt],o,!0),ss(),c=x.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:x.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=P0(n,i,c,o);break e}else if(c!==p){p=Cn(Error(a(424)),i),ts(p),i=P0(n,i,c,o);break e}else{switch(n=i.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(et=zn(n.firstChild),Rt=i,Re=!0,Jr=null,On=!0,o=Iv(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Ii(),c===p){i=Sr(n,i,o);break e}Ut(n,i,c,o)}i=i.child}return i;case 26:return pc(n,i),n===null?(o=ob(i.type,null,i.pendingProps,null))?i.memoizedState=o:Re||(o=i.type,n=i.pendingProps,c=Nc(le.current).createElement(o),c[Dt]=i,c[Vt]=n,$t(c,o,n),Mt(c),i.stateNode=c):i.memoizedState=ob(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return ot(i),n===null&&Re&&(c=i.stateNode=rb(i.type,i.pendingProps,le.current),Rt=i,On=!0,p=et,pi(i.type)?(Eh=p,et=zn(c.firstChild)):et=p),Ut(n,i,i.pendingProps.children,o),pc(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&Re&&((p=c=et)&&(c=UT(c,i.type,i.pendingProps,On),c!==null?(i.stateNode=c,Rt=i,et=zn(c.firstChild),On=!1,p=!0):p=!1),p||ei(i)),ot(i),p=i.type,m=i.pendingProps,x=n!==null?n.memoizedProps:null,c=m.children,xh(p,m)?c=null:x!==null&&xh(p,x)&&(i.flags|=32),i.memoizedState!==null&&(p=wf(n,i,W2,null,null,o),As._currentValue=p),pc(n,i),Ut(n,i,c,o),i.child;case 6:return n===null&&Re&&((n=o=et)&&(o=$T(o,i.pendingProps,On),o!==null?(i.stateNode=o,Rt=i,et=null,n=!0):n=!1),n||ei(i)),null;case 13:return X0(n,i,o);case 4:return ve(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Xi(i,null,c,o):Ut(n,i,c,o),i.child;case 11:return $0(n,i,i.type,i.pendingProps,o);case 7:return Ut(n,i,i.pendingProps,o),i.child;case 8:return Ut(n,i,i.pendingProps.children,o),i.child;case 12:return Ut(n,i,i.pendingProps.children,o),i.child;case 10:return c=i.pendingProps,ti(i,i.type,c.value),Ut(n,i,c.children,o),i.child;case 9:return p=i.type._context,c=i.pendingProps.children,qi(i),p=jt(p),c=c(p),i.flags|=1,Ut(n,i,c,o),i.child;case 14:return L0(n,i,i.type,i.pendingProps,o);case 15:return H0(n,i,i.type,i.pendingProps,o);case 19:return V0(n,i,o);case 31:return aT(n,i,o);case 22:return I0(n,i,o,i.pendingProps);case 24:return qi(i),c=jt(yt),n===null?(p=uf(),p===null&&(p=Qe,m=lf(),p.pooledCache=m,m.refCount++,m!==null&&(p.pooledCacheLanes|=o),p=m),i.memoizedState={parent:c,cache:p},ff(i),ti(i,yt,p)):((n.lanes&o)!==0&&(hf(n,i),ls(i,null,null,o),ss()),p=n.memoizedState,m=i.memoizedState,p.parent!==c?(p={parent:c,cache:c},i.memoizedState=p,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=p),ti(i,yt,c)):(c=m.cache,ti(i,yt,c),c!==p.cache&&sf(i,[yt],o,!0))),Ut(n,i,i.pendingProps.children,o),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Tr(n){n.flags|=4}function Vf(n,i,o,c,p){if((i=(n.mode&32)!==0)&&(i=!1),i){if(n.flags|=16777216,(p&335544128)===p)if(n.stateNode.complete)n.flags|=8192;else if(_y())n.flags|=8192;else throw Pi=Jl,df}else n.flags&=-16777217}function K0(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!db(i))if(_y())n.flags|=8192;else throw Pi=Jl,df}function gc(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?Mg():536870912,n.lanes|=i,Va|=i)}function ps(n,i){if(!Re)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function tt(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var p=n.child;p!==null;)o|=p.lanes|p.childLanes,c|=p.subtreeFlags&65011712,c|=p.flags&65011712,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)o|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function sT(n,i,o){var c=i.pendingProps;switch(tf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(i),null;case 1:return tt(i),null;case 3:return o=i.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),i.memoizedState.cache!==c&&(i.flags|=2048),wr(yt),ge(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(ja(i)?Tr(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,rf())),tt(i),null;case 26:var p=i.type,m=i.memoizedState;return n===null?(Tr(i),m!==null?(tt(i),K0(i,m)):(tt(i),Vf(i,p,null,c,o))):m?m!==n.memoizedState?(Tr(i),tt(i),K0(i,m)):(tt(i),i.flags&=-16777217):(n=n.memoizedProps,n!==c&&Tr(i),tt(i),Vf(i,p,n,c,o)),null;case 27:if(qn(i),o=le.current,p=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==c&&Tr(i);else{if(!c){if(i.stateNode===null)throw Error(a(166));return tt(i),null}n=te.current,ja(i)?Mv(i):(n=rb(p,c,o),i.stateNode=n,Tr(i))}return tt(i),null;case 5:if(qn(i),p=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==c&&Tr(i);else{if(!c){if(i.stateNode===null)throw Error(a(166));return tt(i),null}if(m=te.current,ja(i))Mv(i);else{var x=Nc(le.current);switch(m){case 1:m=x.createElementNS("http://www.w3.org/2000/svg",p);break;case 2:m=x.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;default:switch(p){case"svg":m=x.createElementNS("http://www.w3.org/2000/svg",p);break;case"math":m=x.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;case"script":m=x.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof c.is=="string"?x.createElement("select",{is:c.is}):x.createElement("select"),c.multiple?m.multiple=!0:c.size&&(m.size=c.size);break;default:m=typeof c.is=="string"?x.createElement(p,{is:c.is}):x.createElement(p)}}m[Dt]=i,m[Vt]=c;e:for(x=i.child;x!==null;){if(x.tag===5||x.tag===6)m.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===i)break e;for(;x.sibling===null;){if(x.return===null||x.return===i)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}i.stateNode=m;e:switch($t(m,p,c),p){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}c&&Tr(i)}}return tt(i),Vf(i,i.type,n===null?null:n.memoizedProps,i.pendingProps,o),null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==c&&Tr(i);else{if(typeof c!="string"&&i.stateNode===null)throw Error(a(166));if(n=le.current,ja(i)){if(n=i.stateNode,o=i.memoizedProps,c=null,p=Rt,p!==null)switch(p.tag){case 27:case 5:c=p.memoizedProps}n[Dt]=i,n=!!(n.nodeValue===o||c!==null&&c.suppressHydrationWarning===!0||Xy(n.nodeValue,o)),n||ei(i,!0)}else n=Nc(n).createTextNode(c),n[Dt]=i,i.stateNode=n}return tt(i),null;case 31:if(o=i.memoizedState,n===null||n.memoizedState!==null){if(c=ja(i),o!==null){if(n===null){if(!c)throw Error(a(318));if(n=i.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(557));n[Dt]=i}else Ii(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;tt(i),n=!1}else o=rf(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=o),n=!0;if(!n)return i.flags&256?(fn(i),i):(fn(i),null);if((i.flags&128)!==0)throw Error(a(558))}return tt(i),null;case 13:if(c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(p=ja(i),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(a(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(a(317));p[Dt]=i}else Ii(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;tt(i),p=!1}else p=rf(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=p),p=!0;if(!p)return i.flags&256?(fn(i),i):(fn(i),null)}return fn(i),(i.flags&128)!==0?(i.lanes=o,i):(o=c!==null,n=n!==null&&n.memoizedState!==null,o&&(c=i.child,p=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(p=c.alternate.memoizedState.cachePool.pool),m=null,c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==p&&(c.flags|=2048)),o!==n&&o&&(i.child.flags|=8192),gc(i,i.updateQueue),tt(i),null);case 4:return ge(),n===null&&gh(i.stateNode.containerInfo),tt(i),null;case 10:return wr(i.type),tt(i),null;case 19:if(F(ft),c=i.memoizedState,c===null)return tt(i),null;if(p=(i.flags&128)!==0,m=c.rendering,m===null)if(p)ps(c,!1);else{if(ct!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(m=rc(n),m!==null){for(i.flags|=128,ps(c,!1),n=m.updateQueue,i.updateQueue=n,gc(i,n),i.subtreeFlags=0,n=o,o=i.child;o!==null;)Tv(o,n),o=o.sibling;return W(ft,ft.current&1|2),Re&&yr(i,c.treeForkCount),i.child}n=n.sibling}c.tail!==null&&on()>xc&&(i.flags|=128,p=!0,ps(c,!1),i.lanes=4194304)}else{if(!p)if(n=rc(m),n!==null){if(i.flags|=128,p=!0,n=n.updateQueue,i.updateQueue=n,gc(i,n),ps(c,!0),c.tail===null&&c.tailMode==="hidden"&&!m.alternate&&!Re)return tt(i),null}else 2*on()-c.renderingStartTime>xc&&o!==536870912&&(i.flags|=128,p=!0,ps(c,!1),i.lanes=4194304);c.isBackwards?(m.sibling=i.child,i.child=m):(n=c.last,n!==null?n.sibling=m:i.child=m,c.last=m)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=on(),n.sibling=null,o=ft.current,W(ft,p?o&1|2:o&1),Re&&yr(i,c.treeForkCount),n):(tt(i),null);case 22:case 23:return fn(i),vf(),c=i.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(i.flags|=8192):c&&(i.flags|=8192),c?(o&536870912)!==0&&(i.flags&128)===0&&(tt(i),i.subtreeFlags&6&&(i.flags|=8192)):tt(i),o=i.updateQueue,o!==null&&gc(i,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==o&&(i.flags|=2048),n!==null&&F(Fi),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),wr(yt),tt(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function lT(n,i){switch(tf(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return wr(yt),ge(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return qn(i),null;case 31:if(i.memoizedState!==null){if(fn(i),i.alternate===null)throw Error(a(340));Ii()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 13:if(fn(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Ii()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return F(ft),null;case 4:return ge(),null;case 10:return wr(i.type),null;case 22:case 23:return fn(i),vf(),n!==null&&F(Fi),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return wr(yt),null;case 25:return null;default:return null}}function W0(n,i){switch(tf(i),i.tag){case 3:wr(yt),ge();break;case 26:case 27:case 5:qn(i);break;case 4:ge();break;case 31:i.memoizedState!==null&&fn(i);break;case 13:fn(i);break;case 19:F(ft);break;case 10:wr(i.type);break;case 22:case 23:fn(i),vf(),n!==null&&F(Fi);break;case 24:wr(yt)}}function ms(n,i){try{var o=i.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var p=c.next;o=p;do{if((o.tag&n)===n){c=void 0;var m=o.create,x=o.inst;c=m(),x.destroy=c}o=o.next}while(o!==p)}}catch(C){Pe(i,i.return,C)}}function si(n,i,o){try{var c=i.updateQueue,p=c!==null?c.lastEffect:null;if(p!==null){var m=p.next;c=m;do{if((c.tag&n)===n){var x=c.inst,C=x.destroy;if(C!==void 0){x.destroy=void 0,p=i;var N=o,I=C;try{I()}catch(X){Pe(p,N,X)}}}c=c.next}while(c!==m)}}catch(X){Pe(i,i.return,X)}}function Z0(n){var i=n.updateQueue;if(i!==null){var o=n.stateNode;try{qv(i,o)}catch(c){Pe(n,n.return,c)}}}function J0(n,i,o){o.props=Vi(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(c){Pe(n,i,c)}}function gs(n,i){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof o=="function"?n.refCleanup=o(c):o.current=c}}catch(p){Pe(n,i,p)}}function ir(n,i){var o=n.ref,c=n.refCleanup;if(o!==null)if(typeof c=="function")try{c()}catch(p){Pe(n,i,p)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(p){Pe(n,i,p)}else o.current=null}function ey(n){var i=n.type,o=n.memoizedProps,c=n.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":o.autoFocus&&c.focus();break e;case"img":o.src?c.src=o.src:o.srcSet&&(c.srcset=o.srcSet)}}catch(p){Pe(n,n.return,p)}}function Qf(n,i,o){try{var c=n.stateNode;OT(c,n.type,o,i),c[Vt]=i}catch(p){Pe(n,n.return,p)}}function ty(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&pi(n.type)||n.tag===4}function Kf(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||ty(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&pi(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Wf(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,i):(i=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,i.appendChild(n),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=mr));else if(c!==4&&(c===27&&pi(n.type)&&(o=n.stateNode,i=null),n=n.child,n!==null))for(Wf(n,i,o),n=n.sibling;n!==null;)Wf(n,i,o),n=n.sibling}function vc(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(c===27&&pi(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(vc(n,i,o),n=n.sibling;n!==null;)vc(n,i,o),n=n.sibling}function ny(n){var i=n.stateNode,o=n.memoizedProps;try{for(var c=n.type,p=i.attributes;p.length;)i.removeAttributeNode(p[0]);$t(i,c,o),i[Dt]=n,i[Vt]=o}catch(m){Pe(n,n.return,m)}}var kr=!1,xt=!1,Zf=!1,ry=typeof WeakSet=="function"?WeakSet:Set,Ot=null;function cT(n,i){if(n=n.containerInfo,bh=Lc,n=mv(n),Yd(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var p=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var x=0,C=-1,N=-1,I=0,X=0,K=n,q=null;t:for(;;){for(var P;K!==o||p!==0&&K.nodeType!==3||(C=x+p),K!==m||c!==0&&K.nodeType!==3||(N=x+c),K.nodeType===3&&(x+=K.nodeValue.length),(P=K.firstChild)!==null;)q=K,K=P;for(;;){if(K===n)break t;if(q===o&&++I===p&&(C=x),q===m&&++X===c&&(N=x),(P=K.nextSibling)!==null)break;K=q,q=K.parentNode}K=P}o=C===-1||N===-1?null:{start:C,end:N}}else o=null}o=o||{start:0,end:0}}else o=null;for(wh={focusedElem:n,selectionRange:o},Lc=!1,Ot=i;Ot!==null;)if(i=Ot,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ot=n;else for(;Ot!==null;){switch(i=Ot,m=i.alternate,n=i.flags,i.tag){case 0:if((n&4)!==0&&(n=i.updateQueue,n=n!==null?n.events:null,n!==null))for(o=0;o<n.length;o++)p=n[o],p.ref.impl=p.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,o=i,p=m.memoizedProps,m=m.memoizedState,c=o.stateNode;try{var oe=Vi(o.type,p);n=c.getSnapshotBeforeUpdate(oe,m),c.__reactInternalSnapshotBeforeUpdate=n}catch(me){Pe(o,o.return,me)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,o=n.nodeType,o===9)Sh(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Sh(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(a(163))}if(n=i.sibling,n!==null){n.return=i.return,Ot=n;break}Ot=i.return}}function iy(n,i,o){var c=o.flags;switch(o.tag){case 0:case 11:case 15:Cr(n,o),c&4&&ms(5,o);break;case 1:if(Cr(n,o),c&4)if(n=o.stateNode,i===null)try{n.componentDidMount()}catch(x){Pe(o,o.return,x)}else{var p=Vi(o.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(p,i,n.__reactInternalSnapshotBeforeUpdate)}catch(x){Pe(o,o.return,x)}}c&64&&Z0(o),c&512&&gs(o,o.return);break;case 3:if(Cr(n,o),c&64&&(n=o.updateQueue,n!==null)){if(i=null,o.child!==null)switch(o.child.tag){case 27:case 5:i=o.child.stateNode;break;case 1:i=o.child.stateNode}try{qv(n,i)}catch(x){Pe(o,o.return,x)}}break;case 27:i===null&&c&4&&ny(o);case 26:case 5:Cr(n,o),i===null&&c&4&&ey(o),c&512&&gs(o,o.return);break;case 12:Cr(n,o);break;case 31:Cr(n,o),c&4&&sy(n,o);break;case 13:Cr(n,o),c&4&&ly(n,o),c&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=yT.bind(null,o),LT(n,o))));break;case 22:if(c=o.memoizedState!==null||kr,!c){i=i!==null&&i.memoizedState!==null||xt,p=kr;var m=xt;kr=c,(xt=i)&&!m?Ar(n,o,(o.subtreeFlags&8772)!==0):Cr(n,o),kr=p,xt=m}break;case 30:break;default:Cr(n,o)}}function ay(n){var i=n.alternate;i!==null&&(n.alternate=null,ay(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&Cd(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var it=null,Kt=!1;function Er(n,i,o){for(o=o.child;o!==null;)oy(n,i,o),o=o.sibling}function oy(n,i,o){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(Io,o)}catch{}switch(o.tag){case 26:xt||ir(o,i),Er(n,i,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:xt||ir(o,i);var c=it,p=Kt;pi(o.type)&&(it=o.stateNode,Kt=!1),Er(n,i,o),ks(o.stateNode),it=c,Kt=p;break;case 5:xt||ir(o,i);case 6:if(c=it,p=Kt,it=null,Er(n,i,o),it=c,Kt=p,it!==null)if(Kt)try{(it.nodeType===9?it.body:it.nodeName==="HTML"?it.ownerDocument.body:it).removeChild(o.stateNode)}catch(m){Pe(o,i,m)}else try{it.removeChild(o.stateNode)}catch(m){Pe(o,i,m)}break;case 18:it!==null&&(Kt?(n=it,Zy(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),no(n)):Zy(it,o.stateNode));break;case 4:c=it,p=Kt,it=o.stateNode.containerInfo,Kt=!0,Er(n,i,o),it=c,Kt=p;break;case 0:case 11:case 14:case 15:si(2,o,i),xt||si(4,o,i),Er(n,i,o);break;case 1:xt||(ir(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"&&J0(o,i,c)),Er(n,i,o);break;case 21:Er(n,i,o);break;case 22:xt=(c=xt)||o.memoizedState!==null,Er(n,i,o),xt=c;break;default:Er(n,i,o)}}function sy(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{no(n)}catch(o){Pe(i,i.return,o)}}}function ly(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{no(n)}catch(o){Pe(i,i.return,o)}}function uT(n){switch(n.tag){case 31:case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new ry),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new ry),i;default:throw Error(a(435,n.tag))}}function yc(n,i){var o=uT(n);i.forEach(function(c){if(!o.has(c)){o.add(c);var p=bT.bind(null,n,c);c.then(p,p)}})}function Wt(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var p=o[c],m=n,x=i,C=x;e:for(;C!==null;){switch(C.tag){case 27:if(pi(C.type)){it=C.stateNode,Kt=!1;break e}break;case 5:it=C.stateNode,Kt=!1;break e;case 3:case 4:it=C.stateNode.containerInfo,Kt=!0;break e}C=C.return}if(it===null)throw Error(a(160));oy(m,x,p),it=null,Kt=!1,m=p.alternate,m!==null&&(m.return=null),p.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)cy(i,n),i=i.sibling}var Yn=null;function cy(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Wt(i,n),Zt(n),c&4&&(si(3,n,n.return),ms(3,n),si(5,n,n.return));break;case 1:Wt(i,n),Zt(n),c&512&&(xt||o===null||ir(o,o.return)),c&64&&kr&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?c:o.concat(c))));break;case 26:var p=Yn;if(Wt(i,n),Zt(n),c&512&&(xt||o===null||ir(o,o.return)),c&4){var m=o!==null?o.memoizedState:null;if(c=n.memoizedState,o===null)if(c===null)if(n.stateNode===null){e:{c=n.type,o=n.memoizedProps,p=p.ownerDocument||p;t:switch(c){case"title":m=p.getElementsByTagName("title")[0],(!m||m[Fo]||m[Dt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=p.createElement(c),p.head.insertBefore(m,p.querySelector("head > title"))),$t(m,c,o),m[Dt]=n,Mt(m),c=m;break e;case"link":var x=cb("link","href",p).get(c+(o.href||""));if(x){for(var C=0;C<x.length;C++)if(m=x[C],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){x.splice(C,1);break t}}m=p.createElement(c),$t(m,c,o),p.head.appendChild(m);break;case"meta":if(x=cb("meta","content",p).get(c+(o.content||""))){for(C=0;C<x.length;C++)if(m=x[C],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){x.splice(C,1);break t}}m=p.createElement(c),$t(m,c,o),p.head.appendChild(m);break;default:throw Error(a(468,c))}m[Dt]=n,Mt(m),c=m}n.stateNode=c}else ub(p,n.type,n.stateNode);else n.stateNode=lb(p,c,n.memoizedProps);else m!==c?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,c===null?ub(p,n.type,n.stateNode):lb(p,c,n.memoizedProps)):c===null&&n.stateNode!==null&&Qf(n,n.memoizedProps,o.memoizedProps)}break;case 27:Wt(i,n),Zt(n),c&512&&(xt||o===null||ir(o,o.return)),o!==null&&c&4&&Qf(n,n.memoizedProps,o.memoizedProps);break;case 5:if(Wt(i,n),Zt(n),c&512&&(xt||o===null||ir(o,o.return)),n.flags&32){p=n.stateNode;try{ka(p,"")}catch(oe){Pe(n,n.return,oe)}}c&4&&n.stateNode!=null&&(p=n.memoizedProps,Qf(n,p,o!==null?o.memoizedProps:p)),c&1024&&(Zf=!0);break;case 6:if(Wt(i,n),Zt(n),c&4){if(n.stateNode===null)throw Error(a(162));c=n.memoizedProps,o=n.stateNode;try{o.nodeValue=c}catch(oe){Pe(n,n.return,oe)}}break;case 3:if(Rc=null,p=Yn,Yn=zc(i.containerInfo),Wt(i,n),Yn=p,Zt(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{no(i.containerInfo)}catch(oe){Pe(n,n.return,oe)}Zf&&(Zf=!1,uy(n));break;case 4:c=Yn,Yn=zc(n.stateNode.containerInfo),Wt(i,n),Zt(n),Yn=c;break;case 12:Wt(i,n),Zt(n);break;case 31:Wt(i,n),Zt(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,yc(n,c)));break;case 13:Wt(i,n),Zt(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(wc=on()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,yc(n,c)));break;case 22:p=n.memoizedState!==null;var N=o!==null&&o.memoizedState!==null,I=kr,X=xt;if(kr=I||p,xt=X||N,Wt(i,n),xt=X,kr=I,Zt(n),c&8192)e:for(i=n.stateNode,i._visibility=p?i._visibility&-2:i._visibility|1,p&&(o===null||N||kr||xt||Qi(n)),o=null,i=n;;){if(i.tag===5||i.tag===26){if(o===null){N=o=i;try{if(m=N.stateNode,p)x=m.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{C=N.stateNode;var K=N.memoizedProps.style,q=K!=null&&K.hasOwnProperty("display")?K.display:null;C.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(oe){Pe(N,N.return,oe)}}}else if(i.tag===6){if(o===null){N=i;try{N.stateNode.nodeValue=p?"":N.memoizedProps}catch(oe){Pe(N,N.return,oe)}}}else if(i.tag===18){if(o===null){N=i;try{var P=N.stateNode;p?Jy(P,!0):Jy(N.stateNode,!1)}catch(oe){Pe(N,N.return,oe)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;o===i&&(o=null),i=i.return}o===i&&(o=null),i.sibling.return=i.return,i=i.sibling}c&4&&(c=n.updateQueue,c!==null&&(o=c.retryQueue,o!==null&&(c.retryQueue=null,yc(n,o))));break;case 19:Wt(i,n),Zt(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,yc(n,c)));break;case 30:break;case 21:break;default:Wt(i,n),Zt(n)}}function Zt(n){var i=n.flags;if(i&2){try{for(var o,c=n.return;c!==null;){if(ty(c)){o=c;break}c=c.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var p=o.stateNode,m=Kf(n);vc(n,m,p);break;case 5:var x=o.stateNode;o.flags&32&&(ka(x,""),o.flags&=-33);var C=Kf(n);vc(n,C,x);break;case 3:case 4:var N=o.stateNode.containerInfo,I=Kf(n);Wf(n,I,N);break;default:throw Error(a(161))}}catch(X){Pe(n,n.return,X)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function uy(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;uy(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function Cr(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)iy(n,i.alternate,i),i=i.sibling}function Qi(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:si(4,i,i.return),Qi(i);break;case 1:ir(i,i.return);var o=i.stateNode;typeof o.componentWillUnmount=="function"&&J0(i,i.return,o),Qi(i);break;case 27:ks(i.stateNode);case 26:case 5:ir(i,i.return),Qi(i);break;case 22:i.memoizedState===null&&Qi(i);break;case 30:Qi(i);break;default:Qi(i)}n=n.sibling}}function Ar(n,i,o){for(o=o&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var c=i.alternate,p=n,m=i,x=m.flags;switch(m.tag){case 0:case 11:case 15:Ar(p,m,o),ms(4,m);break;case 1:if(Ar(p,m,o),c=m,p=c.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(I){Pe(c,c.return,I)}if(c=m,p=c.updateQueue,p!==null){var C=c.stateNode;try{var N=p.shared.hiddenCallbacks;if(N!==null)for(p.shared.hiddenCallbacks=null,p=0;p<N.length;p++)Bv(N[p],C)}catch(I){Pe(c,c.return,I)}}o&&x&64&&Z0(m),gs(m,m.return);break;case 27:ny(m);case 26:case 5:Ar(p,m,o),o&&c===null&&x&4&&ey(m),gs(m,m.return);break;case 12:Ar(p,m,o);break;case 31:Ar(p,m,o),o&&x&4&&sy(p,m);break;case 13:Ar(p,m,o),o&&x&4&&ly(p,m);break;case 22:m.memoizedState===null&&Ar(p,m,o),gs(m,m.return);break;case 30:break;default:Ar(p,m,o)}i=i.sibling}}function Jf(n,i){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&ns(o))}function eh(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&ns(n))}function Pn(n,i,o,c){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)dy(n,i,o,c),i=i.sibling}function dy(n,i,o,c){var p=i.flags;switch(i.tag){case 0:case 11:case 15:Pn(n,i,o,c),p&2048&&ms(9,i);break;case 1:Pn(n,i,o,c);break;case 3:Pn(n,i,o,c),p&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&ns(n)));break;case 12:if(p&2048){Pn(n,i,o,c),n=i.stateNode;try{var m=i.memoizedProps,x=m.id,C=m.onPostCommit;typeof C=="function"&&C(x,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(N){Pe(i,i.return,N)}}else Pn(n,i,o,c);break;case 31:Pn(n,i,o,c);break;case 13:Pn(n,i,o,c);break;case 23:break;case 22:m=i.stateNode,x=i.alternate,i.memoizedState!==null?m._visibility&2?Pn(n,i,o,c):vs(n,i):m._visibility&2?Pn(n,i,o,c):(m._visibility|=2,Pa(n,i,o,c,(i.subtreeFlags&10256)!==0||!1)),p&2048&&Jf(x,i);break;case 24:Pn(n,i,o,c),p&2048&&eh(i.alternate,i);break;default:Pn(n,i,o,c)}}function Pa(n,i,o,c,p){for(p=p&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=n,x=i,C=o,N=c,I=x.flags;switch(x.tag){case 0:case 11:case 15:Pa(m,x,C,N,p),ms(8,x);break;case 23:break;case 22:var X=x.stateNode;x.memoizedState!==null?X._visibility&2?Pa(m,x,C,N,p):vs(m,x):(X._visibility|=2,Pa(m,x,C,N,p)),p&&I&2048&&Jf(x.alternate,x);break;case 24:Pa(m,x,C,N,p),p&&I&2048&&eh(x.alternate,x);break;default:Pa(m,x,C,N,p)}i=i.sibling}}function vs(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var o=n,c=i,p=c.flags;switch(c.tag){case 22:vs(o,c),p&2048&&Jf(c.alternate,c);break;case 24:vs(o,c),p&2048&&eh(c.alternate,c);break;default:vs(o,c)}i=i.sibling}}var ys=8192;function Xa(n,i,o){if(n.subtreeFlags&ys)for(n=n.child;n!==null;)fy(n,i,o),n=n.sibling}function fy(n,i,o){switch(n.tag){case 26:Xa(n,i,o),n.flags&ys&&n.memoizedState!==null&&KT(o,Yn,n.memoizedState,n.memoizedProps);break;case 5:Xa(n,i,o);break;case 3:case 4:var c=Yn;Yn=zc(n.stateNode.containerInfo),Xa(n,i,o),Yn=c;break;case 22:n.memoizedState===null&&(c=n.alternate,c!==null&&c.memoizedState!==null?(c=ys,ys=16777216,Xa(n,i,o),ys=c):Xa(n,i,o));break;default:Xa(n,i,o)}}function hy(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function bs(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var o=0;o<i.length;o++){var c=i[o];Ot=c,my(c,n)}hy(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)py(n),n=n.sibling}function py(n){switch(n.tag){case 0:case 11:case 15:bs(n),n.flags&2048&&si(9,n,n.return);break;case 3:bs(n);break;case 12:bs(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,bc(n)):bs(n);break;default:bs(n)}}function bc(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var o=0;o<i.length;o++){var c=i[o];Ot=c,my(c,n)}hy(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:si(8,i,i.return),bc(i);break;case 22:o=i.stateNode,o._visibility&2&&(o._visibility&=-3,bc(i));break;default:bc(i)}n=n.sibling}}function my(n,i){for(;Ot!==null;){var o=Ot;switch(o.tag){case 0:case 11:case 15:si(8,o,i);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var c=o.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:ns(o.memoizedState.cache)}if(c=o.child,c!==null)c.return=o,Ot=c;else e:for(o=n;Ot!==null;){c=Ot;var p=c.sibling,m=c.return;if(ay(c),c===o){Ot=null;break e}if(p!==null){p.return=m,Ot=p;break e}Ot=m}}}var dT={getCacheForType:function(n){var i=jt(yt),o=i.data.get(n);return o===void 0&&(o=n(),i.data.set(n,o)),o},cacheSignal:function(){return jt(yt).controller.signal}},fT=typeof WeakMap=="function"?WeakMap:Map,Be=0,Qe=null,Ae=null,Oe=0,Ye=0,hn=null,li=!1,Ga=!1,th=!1,Mr=0,ct=0,ci=0,Ki=0,nh=0,pn=0,Va=0,ws=null,Jt=null,rh=!1,wc=0,gy=0,xc=1/0,_c=null,ui=null,Et=0,di=null,Qa=null,Or=0,ih=0,ah=null,vy=null,xs=0,oh=null;function mn(){return(Be&2)!==0&&Oe!==0?Oe&-Oe:A.T!==null?fh():Dg()}function yy(){if(pn===0)if((Oe&536870912)===0||Re){var n=Ol;Ol<<=1,(Ol&3932160)===0&&(Ol=262144),pn=n}else pn=536870912;return n=dn.current,n!==null&&(n.flags|=32),pn}function en(n,i,o){(n===Qe&&(Ye===2||Ye===9)||n.cancelPendingCommit!==null)&&(Ka(n,0),fi(n,Oe,pn,!1)),qo(n,o),((Be&2)===0||n!==Qe)&&(n===Qe&&((Be&2)===0&&(Ki|=o),ct===4&&fi(n,Oe,pn,!1)),ar(n))}function by(n,i,o){if((Be&6)!==0)throw Error(a(327));var c=!o&&(i&127)===0&&(i&n.expiredLanes)===0||Bo(n,i),p=c?mT(n,i):lh(n,i,!0),m=c;do{if(p===0){Ga&&!c&&fi(n,i,0,!1);break}else{if(o=n.current.alternate,m&&!hT(o)){p=lh(n,i,!1),m=!1;continue}if(p===2){if(m=i,n.errorRecoveryDisabledLanes&m)var x=0;else x=n.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){i=x;e:{var C=n;p=ws;var N=C.current.memoizedState.isDehydrated;if(N&&(Ka(C,x).flags|=256),x=lh(C,x,!1),x!==2){if(th&&!N){C.errorRecoveryDisabledLanes|=m,Ki|=m,p=4;break e}m=Jt,Jt=p,m!==null&&(Jt===null?Jt=m:Jt.push.apply(Jt,m))}p=x}if(m=!1,p!==2)continue}}if(p===1){Ka(n,0),fi(n,i,0,!0);break}e:{switch(c=n,m=p,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:fi(c,i,pn,!li);break e;case 2:Jt=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(p=wc+300-on(),10<p)){if(fi(c,i,pn,!li),zl(c,0,!0)!==0)break e;Or=i,c.timeoutHandle=Ky(wy.bind(null,c,o,Jt,_c,rh,i,pn,Ki,Va,li,m,"Throttled",-0,0),p);break e}wy(c,o,Jt,_c,rh,i,pn,Ki,Va,li,m,null,-0,0)}}break}while(!0);ar(n)}function wy(n,i,o,c,p,m,x,C,N,I,X,K,q,P){if(n.timeoutHandle=-1,K=i.subtreeFlags,K&8192||(K&16785408)===16785408){K={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:mr},fy(i,m,K);var oe=(m&62914560)===m?wc-on():(m&4194048)===m?gy-on():0;if(oe=WT(K,oe),oe!==null){Or=m,n.cancelPendingCommit=oe(Ay.bind(null,n,i,m,o,c,p,x,C,N,X,K,null,q,P)),fi(n,m,x,!I);return}}Ay(n,i,m,o,c,p,x,C,N)}function hT(n){for(var i=n;;){var o=i.tag;if((o===0||o===11||o===15)&&i.flags&16384&&(o=i.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var c=0;c<o.length;c++){var p=o[c],m=p.getSnapshot;p=p.value;try{if(!cn(m(),p))return!1}catch{return!1}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function fi(n,i,o,c){i&=~nh,i&=~Ki,n.suspendedLanes|=i,n.pingedLanes&=~i,c&&(n.warmLanes|=i),c=n.expirationTimes;for(var p=i;0<p;){var m=31-ln(p),x=1<<m;c[m]=-1,p&=~x}o!==0&&Og(n,o,i)}function Sc(){return(Be&6)===0?(_s(0),!1):!0}function sh(){if(Ae!==null){if(Ye===0)var n=Ae.return;else n=Ae,br=Bi=null,Sf(n),Ia=null,is=0,n=Ae;for(;n!==null;)W0(n.alternate,n),n=n.return;Ae=null}}function Ka(n,i){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,DT(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),Or=0,sh(),Qe=n,Ae=o=vr(n.current,null),Oe=i,Ye=0,hn=null,li=!1,Ga=Bo(n,i),th=!1,Va=pn=nh=Ki=ci=ct=0,Jt=ws=null,rh=!1,(i&8)!==0&&(i|=i&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=i;0<c;){var p=31-ln(c),m=1<<p;i|=n[p],c&=~m}return Mr=i,Yl(),o}function xy(n,i){_e=null,A.H=fs,i===Ha||i===Zl?(i=$v(),Ye=3):i===df?(i=$v(),Ye=4):Ye=i===Hf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,hn=i,Ae===null&&(ct=1,fc(n,Cn(i,n.current)))}function _y(){var n=dn.current;return n===null?!0:(Oe&4194048)===Oe?Nn===null:(Oe&62914560)===Oe||(Oe&536870912)!==0?n===Nn:!1}function Sy(){var n=A.H;return A.H=fs,n===null?fs:n}function Ty(){var n=A.A;return A.A=dT,n}function Tc(){ct=4,li||(Oe&4194048)!==Oe&&dn.current!==null||(Ga=!0),(ci&134217727)===0&&(Ki&134217727)===0||Qe===null||fi(Qe,Oe,pn,!1)}function lh(n,i,o){var c=Be;Be|=2;var p=Sy(),m=Ty();(Qe!==n||Oe!==i)&&(_c=null,Ka(n,i)),i=!1;var x=ct;e:do try{if(Ye!==0&&Ae!==null){var C=Ae,N=hn;switch(Ye){case 8:sh(),x=6;break e;case 3:case 2:case 9:case 6:dn.current===null&&(i=!0);var I=Ye;if(Ye=0,hn=null,Wa(n,C,N,I),o&&Ga){x=0;break e}break;default:I=Ye,Ye=0,hn=null,Wa(n,C,N,I)}}pT(),x=ct;break}catch(X){xy(n,X)}while(!0);return i&&n.shellSuspendCounter++,br=Bi=null,Be=c,A.H=p,A.A=m,Ae===null&&(Qe=null,Oe=0,Yl()),x}function pT(){for(;Ae!==null;)ky(Ae)}function mT(n,i){var o=Be;Be|=2;var c=Sy(),p=Ty();Qe!==n||Oe!==i?(_c=null,xc=on()+500,Ka(n,i)):Ga=Bo(n,i);e:do try{if(Ye!==0&&Ae!==null){i=Ae;var m=hn;t:switch(Ye){case 1:Ye=0,hn=null,Wa(n,i,m,1);break;case 2:case 9:if(jv(m)){Ye=0,hn=null,Ey(i);break}i=function(){Ye!==2&&Ye!==9||Qe!==n||(Ye=7),ar(n)},m.then(i,i);break e;case 3:Ye=7;break e;case 4:Ye=5;break e;case 7:jv(m)?(Ye=0,hn=null,Ey(i)):(Ye=0,hn=null,Wa(n,i,m,7));break;case 5:var x=null;switch(Ae.tag){case 26:x=Ae.memoizedState;case 5:case 27:var C=Ae;if(x?db(x):C.stateNode.complete){Ye=0,hn=null;var N=C.sibling;if(N!==null)Ae=N;else{var I=C.return;I!==null?(Ae=I,kc(I)):Ae=null}break t}}Ye=0,hn=null,Wa(n,i,m,5);break;case 6:Ye=0,hn=null,Wa(n,i,m,6);break;case 8:sh(),ct=6;break e;default:throw Error(a(462))}}gT();break}catch(X){xy(n,X)}while(!0);return br=Bi=null,A.H=c,A.A=p,Be=o,Ae!==null?0:(Qe=null,Oe=0,Yl(),ct)}function gT(){for(;Ae!==null&&!HS();)ky(Ae)}function ky(n){var i=Q0(n.alternate,n,Mr);n.memoizedProps=n.pendingProps,i===null?kc(n):Ae=i}function Ey(n){var i=n,o=i.alternate;switch(i.tag){case 15:case 0:i=F0(o,i,i.pendingProps,i.type,void 0,Oe);break;case 11:i=F0(o,i,i.pendingProps,i.type.render,i.ref,Oe);break;case 5:Sf(i);default:W0(o,i),i=Ae=Tv(i,Mr),i=Q0(o,i,Mr)}n.memoizedProps=n.pendingProps,i===null?kc(n):Ae=i}function Wa(n,i,o,c){br=Bi=null,Sf(i),Ia=null,is=0;var p=i.return;try{if(iT(n,p,i,o,Oe)){ct=1,fc(n,Cn(o,n.current)),Ae=null;return}}catch(m){if(p!==null)throw Ae=p,m;ct=1,fc(n,Cn(o,n.current)),Ae=null;return}i.flags&32768?(Re||c===1?n=!0:Ga||(Oe&536870912)!==0?n=!1:(li=n=!0,(c===2||c===9||c===3||c===6)&&(c=dn.current,c!==null&&c.tag===13&&(c.flags|=16384))),Cy(i,n)):kc(i)}function kc(n){var i=n;do{if((i.flags&32768)!==0){Cy(i,li);return}n=i.return;var o=sT(i.alternate,i,Mr);if(o!==null){Ae=o;return}if(i=i.sibling,i!==null){Ae=i;return}Ae=i=n}while(i!==null);ct===0&&(ct=5)}function Cy(n,i){do{var o=lT(n.alternate,n);if(o!==null){o.flags&=32767,Ae=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!i&&(n=n.sibling,n!==null)){Ae=n;return}Ae=n=o}while(n!==null);ct=6,Ae=null}function Ay(n,i,o,c,p,m,x,C,N){n.cancelPendingCommit=null;do Ec();while(Et!==0);if((Be&6)!==0)throw Error(a(327));if(i!==null){if(i===n.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Qd,QS(n,o,m,x,C,N),n===Qe&&(Ae=Qe=null,Oe=0),Qa=i,di=n,Or=o,ih=m,ah=p,vy=c,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,wT(Al,function(){return Dy(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||c){c=A.T,A.T=null,p=z.p,z.p=2,x=Be,Be|=4;try{cT(n,i,o)}finally{Be=x,z.p=p,A.T=c}}Et=1,My(),Oy(),Ny()}}function My(){if(Et===1){Et=0;var n=di,i=Qa,o=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||o){o=A.T,A.T=null;var c=z.p;z.p=2;var p=Be;Be|=4;try{cy(i,n);var m=wh,x=mv(n.containerInfo),C=m.focusedElem,N=m.selectionRange;if(x!==C&&C&&C.ownerDocument&&pv(C.ownerDocument.documentElement,C)){if(N!==null&&Yd(C)){var I=N.start,X=N.end;if(X===void 0&&(X=I),"selectionStart"in C)C.selectionStart=I,C.selectionEnd=Math.min(X,C.value.length);else{var K=C.ownerDocument||document,q=K&&K.defaultView||window;if(q.getSelection){var P=q.getSelection(),oe=C.textContent.length,me=Math.min(N.start,oe),Ve=N.end===void 0?me:Math.min(N.end,oe);!P.extend&&me>Ve&&(x=Ve,Ve=me,me=x);var L=hv(C,me),R=hv(C,Ve);if(L&&R&&(P.rangeCount!==1||P.anchorNode!==L.node||P.anchorOffset!==L.offset||P.focusNode!==R.node||P.focusOffset!==R.offset)){var H=K.createRange();H.setStart(L.node,L.offset),P.removeAllRanges(),me>Ve?(P.addRange(H),P.extend(R.node,R.offset)):(H.setEnd(R.node,R.offset),P.addRange(H))}}}}for(K=[],P=C;P=P.parentNode;)P.nodeType===1&&K.push({element:P,left:P.scrollLeft,top:P.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<K.length;C++){var Q=K[C];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}Lc=!!bh,wh=bh=null}finally{Be=p,z.p=c,A.T=o}}n.current=i,Et=2}}function Oy(){if(Et===2){Et=0;var n=di,i=Qa,o=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||o){o=A.T,A.T=null;var c=z.p;z.p=2;var p=Be;Be|=4;try{iy(n,i.alternate,i)}finally{Be=p,z.p=c,A.T=o}}Et=3}}function Ny(){if(Et===4||Et===3){Et=0,IS();var n=di,i=Qa,o=Or,c=vy;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Et=5:(Et=0,Qa=di=null,zy(n,n.pendingLanes));var p=n.pendingLanes;if(p===0&&(ui=null),kd(o),i=i.stateNode,sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(Io,i,void 0,(i.current.flags&128)===128)}catch{}if(c!==null){i=A.T,p=z.p,z.p=2,A.T=null;try{for(var m=n.onRecoverableError,x=0;x<c.length;x++){var C=c[x];m(C.value,{componentStack:C.stack})}}finally{A.T=i,z.p=p}}(Or&3)!==0&&Ec(),ar(n),p=n.pendingLanes,(o&261930)!==0&&(p&42)!==0?n===oh?xs++:(xs=0,oh=n):xs=0,_s(0)}}function zy(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,ns(i)))}function Ec(){return My(),Oy(),Ny(),Dy()}function Dy(){if(Et!==5)return!1;var n=di,i=ih;ih=0;var o=kd(Or),c=A.T,p=z.p;try{z.p=32>o?32:o,A.T=null,o=ah,ah=null;var m=di,x=Or;if(Et=0,Qa=di=null,Or=0,(Be&6)!==0)throw Error(a(331));var C=Be;if(Be|=4,py(m.current),dy(m,m.current,x,o),Be=C,_s(0,!1),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(Io,m)}catch{}return!0}finally{z.p=p,A.T=c,zy(n,i)}}function Ry(n,i,o){i=Cn(o,i),i=Lf(n.stateNode,i,2),n=ii(n,i,2),n!==null&&(qo(n,2),ar(n))}function Pe(n,i,o){if(n.tag===3)Ry(n,n,o);else for(;i!==null;){if(i.tag===3){Ry(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ui===null||!ui.has(c))){n=Cn(o,n),o=j0(2),c=ii(i,o,2),c!==null&&(U0(o,c,i,n),qo(c,2),ar(c));break}}i=i.return}}function ch(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new fT;var p=new Set;c.set(i,p)}else p=c.get(i),p===void 0&&(p=new Set,c.set(i,p));p.has(o)||(th=!0,p.add(o),n=vT.bind(null,n,i,o),i.then(n,n))}function vT(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,Qe===n&&(Oe&o)===o&&(ct===4||ct===3&&(Oe&62914560)===Oe&&300>on()-wc?(Be&2)===0&&Ka(n,0):nh|=o,Va===Oe&&(Va=0)),ar(n)}function jy(n,i){i===0&&(i=Mg()),n=Li(n,i),n!==null&&(qo(n,i),ar(n))}function yT(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),jy(n,o)}function bT(n,i){var o=0;switch(n.tag){case 31:case 13:var c=n.stateNode,p=n.memoizedState;p!==null&&(o=p.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(a(314))}c!==null&&c.delete(i),jy(n,o)}function wT(n,i){return xd(n,i)}var Cc=null,Za=null,uh=!1,Ac=!1,dh=!1,hi=0;function ar(n){n!==Za&&n.next===null&&(Za===null?Cc=Za=n:Za=Za.next=n),Ac=!0,uh||(uh=!0,_T())}function _s(n,i){if(!dh&&Ac){dh=!0;do for(var o=!1,c=Cc;c!==null;){if(n!==0){var p=c.pendingLanes;if(p===0)var m=0;else{var x=c.suspendedLanes,C=c.pingedLanes;m=(1<<31-ln(42|n)+1)-1,m&=p&~(x&~C),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,Hy(c,m))}else m=Oe,m=zl(c,c===Qe?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||Bo(c,m)||(o=!0,Hy(c,m));c=c.next}while(o);dh=!1}}function xT(){Uy()}function Uy(){Ac=uh=!1;var n=0;hi!==0&&zT()&&(n=hi);for(var i=on(),o=null,c=Cc;c!==null;){var p=c.next,m=$y(c,i);m===0?(c.next=null,o===null?Cc=p:o.next=p,p===null&&(Za=o)):(o=c,(n!==0||(m&3)!==0)&&(Ac=!0)),c=p}Et!==0&&Et!==5||_s(n),hi!==0&&(hi=0)}function $y(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,p=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var x=31-ln(m),C=1<<x,N=p[x];N===-1?((C&o)===0||(C&c)!==0)&&(p[x]=VS(C,i)):N<=i&&(n.expiredLanes|=C),m&=~C}if(i=Qe,o=Oe,o=zl(n,n===i?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,o===0||n===i&&(Ye===2||Ye===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&_d(c),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||Bo(n,o)){if(i=o&-o,i===n.callbackPriority)return i;switch(c!==null&&_d(c),kd(o)){case 2:case 8:o=Cg;break;case 32:o=Al;break;case 268435456:o=Ag;break;default:o=Al}return c=Ly.bind(null,n),o=xd(o,c),n.callbackPriority=i,n.callbackNode=o,i}return c!==null&&c!==null&&_d(c),n.callbackPriority=2,n.callbackNode=null,2}function Ly(n,i){if(Et!==0&&Et!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(Ec()&&n.callbackNode!==o)return null;var c=Oe;return c=zl(n,n===Qe?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:(by(n,c,i),$y(n,on()),n.callbackNode!=null&&n.callbackNode===o?Ly.bind(null,n):null)}function Hy(n,i){if(Ec())return null;by(n,i,!0)}function _T(){RT(function(){(Be&6)!==0?xd(Eg,xT):Uy()})}function fh(){if(hi===0){var n=$a;n===0&&(n=Ml,Ml<<=1,(Ml&261888)===0&&(Ml=256)),hi=n}return hi}function Iy(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ul(""+n)}function By(n,i){var o=i.ownerDocument.createElement("input");return o.name=i.name,o.value=i.value,n.id&&o.setAttribute("form",n.id),i.parentNode.insertBefore(o,i),n=new FormData(n),o.parentNode.removeChild(o),n}function ST(n,i,o,c,p){if(i==="submit"&&o&&o.stateNode===p){var m=Iy((p[Vt]||null).action),x=c.submitter;x&&(i=(i=x[Vt]||null)?Iy(i.formAction):x.getAttribute("formAction"),i!==null&&(m=i,x=null));var C=new Il("action","action",null,c,p);n.push({event:C,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(hi!==0){var N=x?By(p,x):new FormData(p);zf(o,{pending:!0,data:N,method:p.method,action:m},null,N)}}else typeof m=="function"&&(C.preventDefault(),N=x?By(p,x):new FormData(p),zf(o,{pending:!0,data:N,method:p.method,action:m},m,N))},currentTarget:p}]})}}for(var hh=0;hh<Vd.length;hh++){var ph=Vd[hh],TT=ph.toLowerCase(),kT=ph[0].toUpperCase()+ph.slice(1);Fn(TT,"on"+kT)}Fn(yv,"onAnimationEnd"),Fn(bv,"onAnimationIteration"),Fn(wv,"onAnimationStart"),Fn("dblclick","onDoubleClick"),Fn("focusin","onFocus"),Fn("focusout","onBlur"),Fn(B2,"onTransitionRun"),Fn(q2,"onTransitionStart"),Fn(F2,"onTransitionCancel"),Fn(xv,"onTransitionEnd"),Sa("onMouseEnter",["mouseout","mouseover"]),Sa("onMouseLeave",["mouseout","mouseover"]),Sa("onPointerEnter",["pointerout","pointerover"]),Sa("onPointerLeave",["pointerout","pointerover"]),Ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ri("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ss="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ET=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ss));function qy(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],p=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var x=c.length-1;0<=x;x--){var C=c[x],N=C.instance,I=C.currentTarget;if(C=C.listener,N!==m&&p.isPropagationStopped())break e;m=C,p.currentTarget=I;try{m(p)}catch(X){Fl(X)}p.currentTarget=null,m=N}else for(x=0;x<c.length;x++){if(C=c[x],N=C.instance,I=C.currentTarget,C=C.listener,N!==m&&p.isPropagationStopped())break e;m=C,p.currentTarget=I;try{m(p)}catch(X){Fl(X)}p.currentTarget=null,m=N}}}}function Me(n,i){var o=i[Ed];o===void 0&&(o=i[Ed]=new Set);var c=n+"__bubble";o.has(c)||(Fy(i,n,2,!1),o.add(c))}function mh(n,i,o){var c=0;i&&(c|=4),Fy(o,n,c,i)}var Mc="_reactListening"+Math.random().toString(36).slice(2);function gh(n){if(!n[Mc]){n[Mc]=!0,Ug.forEach(function(o){o!=="selectionchange"&&(ET.has(o)||mh(o,!1,n),mh(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Mc]||(i[Mc]=!0,mh("selectionchange",!1,i))}}function Fy(n,i,o,c){switch(yb(i)){case 2:var p=ek;break;case 8:p=tk;break;default:p=Nh}o=p.bind(null,i,o,n),p=void 0,!jd||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),c?p!==void 0?n.addEventListener(i,o,{capture:!0,passive:p}):n.addEventListener(i,o,!0):p!==void 0?n.addEventListener(i,o,{passive:p}):n.addEventListener(i,o,!1)}function vh(n,i,o,c,p){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var x=c.tag;if(x===3||x===4){var C=c.stateNode.containerInfo;if(C===p)break;if(x===4)for(x=c.return;x!==null;){var N=x.tag;if((N===3||N===4)&&x.stateNode.containerInfo===p)return;x=x.return}for(;C!==null;){if(x=wa(C),x===null)return;if(N=x.tag,N===5||N===6||N===26||N===27){c=m=x;continue e}C=C.parentNode}}c=c.return}Vg(function(){var I=m,X=Dd(o),K=[];e:{var q=_v.get(n);if(q!==void 0){var P=Il,oe=n;switch(n){case"keypress":if(Ll(o)===0)break e;case"keydown":case"keyup":P=b2;break;case"focusin":oe="focus",P=Hd;break;case"focusout":oe="blur",P=Hd;break;case"beforeblur":case"afterblur":P=Hd;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=Wg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=s2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=_2;break;case yv:case bv:case wv:P=u2;break;case xv:P=T2;break;case"scroll":case"scrollend":P=a2;break;case"wheel":P=E2;break;case"copy":case"cut":case"paste":P=f2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=Jg;break;case"toggle":case"beforetoggle":P=A2}var me=(i&4)!==0,Ve=!me&&(n==="scroll"||n==="scrollend"),L=me?q!==null?q+"Capture":null:q;me=[];for(var R=I,H;R!==null;){var Q=R;if(H=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||H===null||L===null||(Q=Po(R,L),Q!=null&&me.push(Ts(R,Q,H))),Ve)break;R=R.return}0<me.length&&(q=new P(q,oe,null,o,X),K.push({event:q,listeners:me}))}}if((i&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",P=n==="mouseout"||n==="pointerout",q&&o!==zd&&(oe=o.relatedTarget||o.fromElement)&&(wa(oe)||oe[ba]))break e;if((P||q)&&(q=X.window===X?X:(q=X.ownerDocument)?q.defaultView||q.parentWindow:window,P?(oe=o.relatedTarget||o.toElement,P=I,oe=oe?wa(oe):null,oe!==null&&(Ve=l(oe),me=oe.tag,oe!==Ve||me!==5&&me!==27&&me!==6)&&(oe=null)):(P=null,oe=I),P!==oe)){if(me=Wg,Q="onMouseLeave",L="onMouseEnter",R="mouse",(n==="pointerout"||n==="pointerover")&&(me=Jg,Q="onPointerLeave",L="onPointerEnter",R="pointer"),Ve=P==null?q:Yo(P),H=oe==null?q:Yo(oe),q=new me(Q,R+"leave",P,o,X),q.target=Ve,q.relatedTarget=H,Q=null,wa(X)===I&&(me=new me(L,R+"enter",oe,o,X),me.target=H,me.relatedTarget=Ve,Q=me),Ve=Q,P&&oe)t:{for(me=CT,L=P,R=oe,H=0,Q=L;Q;Q=me(Q))H++;Q=0;for(var he=R;he;he=me(he))Q++;for(;0<H-Q;)L=me(L),H--;for(;0<Q-H;)R=me(R),Q--;for(;H--;){if(L===R||R!==null&&L===R.alternate){me=L;break t}L=me(L),R=me(R)}me=null}else me=null;P!==null&&Yy(K,q,P,me,!1),oe!==null&&Ve!==null&&Yy(K,Ve,oe,me,!0)}}e:{if(q=I?Yo(I):window,P=q.nodeName&&q.nodeName.toLowerCase(),P==="select"||P==="input"&&q.type==="file")var $e=sv;else if(av(q))if(lv)$e=L2;else{$e=U2;var ue=j2}else P=q.nodeName,!P||P.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?I&&Nd(I.elementType)&&($e=sv):$e=$2;if($e&&($e=$e(n,I))){ov(K,$e,o,X);break e}ue&&ue(n,q,I),n==="focusout"&&I&&q.type==="number"&&I.memoizedProps.value!=null&&Od(q,"number",q.value)}switch(ue=I?Yo(I):window,n){case"focusin":(av(ue)||ue.contentEditable==="true")&&(Ma=ue,Pd=I,Jo=null);break;case"focusout":Jo=Pd=Ma=null;break;case"mousedown":Xd=!0;break;case"contextmenu":case"mouseup":case"dragend":Xd=!1,gv(K,o,X);break;case"selectionchange":if(I2)break;case"keydown":case"keyup":gv(K,o,X)}var Se;if(Bd)e:{switch(n){case"compositionstart":var Ne="onCompositionStart";break e;case"compositionend":Ne="onCompositionEnd";break e;case"compositionupdate":Ne="onCompositionUpdate";break e}Ne=void 0}else Aa?rv(n,o)&&(Ne="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(Ne="onCompositionStart");Ne&&(ev&&o.locale!=="ko"&&(Aa||Ne!=="onCompositionStart"?Ne==="onCompositionEnd"&&Aa&&(Se=Qg()):(Wr=X,Ud="value"in Wr?Wr.value:Wr.textContent,Aa=!0)),ue=Oc(I,Ne),0<ue.length&&(Ne=new Zg(Ne,n,null,o,X),K.push({event:Ne,listeners:ue}),Se?Ne.data=Se:(Se=iv(o),Se!==null&&(Ne.data=Se)))),(Se=O2?N2(n,o):z2(n,o))&&(Ne=Oc(I,"onBeforeInput"),0<Ne.length&&(ue=new Zg("onBeforeInput","beforeinput",null,o,X),K.push({event:ue,listeners:Ne}),ue.data=Se)),ST(K,n,I,o,X)}qy(K,i)})}function Ts(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Oc(n,i){for(var o=i+"Capture",c=[];n!==null;){var p=n,m=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||m===null||(p=Po(n,o),p!=null&&c.unshift(Ts(n,p,m)),p=Po(n,i),p!=null&&c.push(Ts(n,p,m))),n.tag===3)return c;n=n.return}return[]}function CT(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Yy(n,i,o,c,p){for(var m=i._reactName,x=[];o!==null&&o!==c;){var C=o,N=C.alternate,I=C.stateNode;if(C=C.tag,N!==null&&N===c)break;C!==5&&C!==26&&C!==27||I===null||(N=I,p?(I=Po(o,m),I!=null&&x.unshift(Ts(o,I,N))):p||(I=Po(o,m),I!=null&&x.push(Ts(o,I,N)))),o=o.return}x.length!==0&&n.push({event:i,listeners:x})}var AT=/\r\n?/g,MT=/\u0000|\uFFFD/g;function Py(n){return(typeof n=="string"?n:""+n).replace(AT,`
`).replace(MT,"")}function Xy(n,i){return i=Py(i),Py(n)===i}function Ge(n,i,o,c,p,m){switch(o){case"children":typeof c=="string"?i==="body"||i==="textarea"&&c===""||ka(n,c):(typeof c=="number"||typeof c=="bigint")&&i!=="body"&&ka(n,""+c);break;case"className":Rl(n,"class",c);break;case"tabIndex":Rl(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Rl(n,o,c);break;case"style":Xg(n,c,m);break;case"data":if(i!=="object"){Rl(n,"data",c);break}case"src":case"href":if(c===""&&(i!=="a"||o!=="href")){n.removeAttribute(o);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(o);break}c=Ul(""+c),n.setAttribute(o,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(i!=="input"&&Ge(n,i,"name",p.name,p,null),Ge(n,i,"formEncType",p.formEncType,p,null),Ge(n,i,"formMethod",p.formMethod,p,null),Ge(n,i,"formTarget",p.formTarget,p,null)):(Ge(n,i,"encType",p.encType,p,null),Ge(n,i,"method",p.method,p,null),Ge(n,i,"target",p.target,p,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(o);break}c=Ul(""+c),n.setAttribute(o,c);break;case"onClick":c!=null&&(n.onclick=mr);break;case"onScroll":c!=null&&Me("scroll",n);break;case"onScrollEnd":c!=null&&Me("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(o=c.__html,o!=null){if(p.children!=null)throw Error(a(60));n.innerHTML=o}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}o=Ul(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(o,""+c):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":c===!0?n.setAttribute(o,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(o,c):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(o,c):n.removeAttribute(o);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(o):n.setAttribute(o,c);break;case"popover":Me("beforetoggle",n),Me("toggle",n),Dl(n,"popover",c);break;case"xlinkActuate":pr(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":pr(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":pr(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":pr(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":pr(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":pr(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":pr(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":pr(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":pr(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Dl(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=r2.get(o)||o,Dl(n,o,c))}}function yh(n,i,o,c,p,m){switch(o){case"style":Xg(n,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(o=c.__html,o!=null){if(p.children!=null)throw Error(a(60));n.innerHTML=o}}break;case"children":typeof c=="string"?ka(n,c):(typeof c=="number"||typeof c=="bigint")&&ka(n,""+c);break;case"onScroll":c!=null&&Me("scroll",n);break;case"onScrollEnd":c!=null&&Me("scrollend",n);break;case"onClick":c!=null&&(n.onclick=mr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!$g.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(p=o.endsWith("Capture"),i=o.slice(2,p?o.length-7:void 0),m=n[Vt]||null,m=m!=null?m[o]:null,typeof m=="function"&&n.removeEventListener(i,m,p),typeof c=="function")){typeof m!="function"&&m!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(i,c,p);break e}o in n?n[o]=c:c===!0?n.setAttribute(o,""):Dl(n,o,c)}}}function $t(n,i,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",n),Me("load",n);var c=!1,p=!1,m;for(m in o)if(o.hasOwnProperty(m)){var x=o[m];if(x!=null)switch(m){case"src":c=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ge(n,i,m,x,o,null)}}p&&Ge(n,i,"srcSet",o.srcSet,o,null),c&&Ge(n,i,"src",o.src,o,null);return;case"input":Me("invalid",n);var C=m=x=p=null,N=null,I=null;for(c in o)if(o.hasOwnProperty(c)){var X=o[c];if(X!=null)switch(c){case"name":p=X;break;case"type":x=X;break;case"checked":N=X;break;case"defaultChecked":I=X;break;case"value":m=X;break;case"defaultValue":C=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(a(137,i));break;default:Ge(n,i,c,X,o,null)}}qg(n,m,C,N,I,x,p,!1);return;case"select":Me("invalid",n),c=x=m=null;for(p in o)if(o.hasOwnProperty(p)&&(C=o[p],C!=null))switch(p){case"value":m=C;break;case"defaultValue":x=C;break;case"multiple":c=C;default:Ge(n,i,p,C,o,null)}i=m,o=x,n.multiple=!!c,i!=null?Ta(n,!!c,i,!1):o!=null&&Ta(n,!!c,o,!0);return;case"textarea":Me("invalid",n),m=p=c=null;for(x in o)if(o.hasOwnProperty(x)&&(C=o[x],C!=null))switch(x){case"value":c=C;break;case"defaultValue":p=C;break;case"children":m=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:Ge(n,i,x,C,o,null)}Yg(n,c,p,m);return;case"option":for(N in o)if(o.hasOwnProperty(N)&&(c=o[N],c!=null))switch(N){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:Ge(n,i,N,c,o,null)}return;case"dialog":Me("beforetoggle",n),Me("toggle",n),Me("cancel",n),Me("close",n);break;case"iframe":case"object":Me("load",n);break;case"video":case"audio":for(c=0;c<Ss.length;c++)Me(Ss[c],n);break;case"image":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"embed":case"source":case"link":Me("error",n),Me("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(I in o)if(o.hasOwnProperty(I)&&(c=o[I],c!=null))switch(I){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ge(n,i,I,c,o,null)}return;default:if(Nd(i)){for(X in o)o.hasOwnProperty(X)&&(c=o[X],c!==void 0&&yh(n,i,X,c,o,void 0));return}}for(C in o)o.hasOwnProperty(C)&&(c=o[C],c!=null&&Ge(n,i,C,c,o,null))}function OT(n,i,o,c){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,m=null,x=null,C=null,N=null,I=null,X=null;for(P in o){var K=o[P];if(o.hasOwnProperty(P)&&K!=null)switch(P){case"checked":break;case"value":break;case"defaultValue":N=K;default:c.hasOwnProperty(P)||Ge(n,i,P,null,c,K)}}for(var q in c){var P=c[q];if(K=o[q],c.hasOwnProperty(q)&&(P!=null||K!=null))switch(q){case"type":m=P;break;case"name":p=P;break;case"checked":I=P;break;case"defaultChecked":X=P;break;case"value":x=P;break;case"defaultValue":C=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(a(137,i));break;default:P!==K&&Ge(n,i,q,P,c,K)}}Md(n,x,C,N,I,X,m,p);return;case"select":P=x=C=q=null;for(m in o)if(N=o[m],o.hasOwnProperty(m)&&N!=null)switch(m){case"value":break;case"multiple":P=N;default:c.hasOwnProperty(m)||Ge(n,i,m,null,c,N)}for(p in c)if(m=c[p],N=o[p],c.hasOwnProperty(p)&&(m!=null||N!=null))switch(p){case"value":q=m;break;case"defaultValue":C=m;break;case"multiple":x=m;default:m!==N&&Ge(n,i,p,m,c,N)}i=C,o=x,c=P,q!=null?Ta(n,!!o,q,!1):!!c!=!!o&&(i!=null?Ta(n,!!o,i,!0):Ta(n,!!o,o?[]:"",!1));return;case"textarea":P=q=null;for(C in o)if(p=o[C],o.hasOwnProperty(C)&&p!=null&&!c.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Ge(n,i,C,null,c,p)}for(x in c)if(p=c[x],m=o[x],c.hasOwnProperty(x)&&(p!=null||m!=null))switch(x){case"value":q=p;break;case"defaultValue":P=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(a(91));break;default:p!==m&&Ge(n,i,x,p,c,m)}Fg(n,q,P);return;case"option":for(var oe in o)if(q=o[oe],o.hasOwnProperty(oe)&&q!=null&&!c.hasOwnProperty(oe))switch(oe){case"selected":n.selected=!1;break;default:Ge(n,i,oe,null,c,q)}for(N in c)if(q=c[N],P=o[N],c.hasOwnProperty(N)&&q!==P&&(q!=null||P!=null))switch(N){case"selected":n.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:Ge(n,i,N,q,c,P)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var me in o)q=o[me],o.hasOwnProperty(me)&&q!=null&&!c.hasOwnProperty(me)&&Ge(n,i,me,null,c,q);for(I in c)if(q=c[I],P=o[I],c.hasOwnProperty(I)&&q!==P&&(q!=null||P!=null))switch(I){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(a(137,i));break;default:Ge(n,i,I,q,c,P)}return;default:if(Nd(i)){for(var Ve in o)q=o[Ve],o.hasOwnProperty(Ve)&&q!==void 0&&!c.hasOwnProperty(Ve)&&yh(n,i,Ve,void 0,c,q);for(X in c)q=c[X],P=o[X],!c.hasOwnProperty(X)||q===P||q===void 0&&P===void 0||yh(n,i,X,q,c,P);return}}for(var L in o)q=o[L],o.hasOwnProperty(L)&&q!=null&&!c.hasOwnProperty(L)&&Ge(n,i,L,null,c,q);for(K in c)q=c[K],P=o[K],!c.hasOwnProperty(K)||q===P||q==null&&P==null||Ge(n,i,K,q,c,P)}function Gy(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function NT(){if(typeof performance.getEntriesByType=="function"){for(var n=0,i=0,o=performance.getEntriesByType("resource"),c=0;c<o.length;c++){var p=o[c],m=p.transferSize,x=p.initiatorType,C=p.duration;if(m&&C&&Gy(x)){for(x=0,C=p.responseEnd,c+=1;c<o.length;c++){var N=o[c],I=N.startTime;if(I>C)break;var X=N.transferSize,K=N.initiatorType;X&&Gy(K)&&(N=N.responseEnd,x+=X*(N<C?1:(C-I)/(N-I)))}if(--c,i+=8*(m+x)/(p.duration/1e3),n++,10<n)break}}if(0<n)return i/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var bh=null,wh=null;function Nc(n){return n.nodeType===9?n:n.ownerDocument}function Vy(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qy(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function xh(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var _h=null;function zT(){var n=window.event;return n&&n.type==="popstate"?n===_h?!1:(_h=n,!0):(_h=null,!1)}var Ky=typeof setTimeout=="function"?setTimeout:void 0,DT=typeof clearTimeout=="function"?clearTimeout:void 0,Wy=typeof Promise=="function"?Promise:void 0,RT=typeof queueMicrotask=="function"?queueMicrotask:typeof Wy<"u"?function(n){return Wy.resolve(null).then(n).catch(jT)}:Ky;function jT(n){setTimeout(function(){throw n})}function pi(n){return n==="head"}function Zy(n,i){var o=i,c=0;do{var p=o.nextSibling;if(n.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"||o==="/&"){if(c===0){n.removeChild(p),no(i);return}c--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")c++;else if(o==="html")ks(n.ownerDocument.documentElement);else if(o==="head"){o=n.ownerDocument.head,ks(o);for(var m=o.firstChild;m;){var x=m.nextSibling,C=m.nodeName;m[Fo]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=x}}else o==="body"&&ks(n.ownerDocument.body);o=p}while(o);no(i)}function Jy(n,i){var o=n;n=0;do{var c=o.nextSibling;if(o.nodeType===1?i?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(i?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(n===0)break;n--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||n++;o=c}while(o)}function Sh(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var o=i;switch(i=i.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Sh(o),Cd(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function UT(n,i,o,c){for(;n.nodeType===1;){var p=o;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[Fo])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==p.rel||n.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||n.getAttribute("title")!==(p.title==null?null:p.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(p.src==null?null:p.src)||n.getAttribute("type")!==(p.type==null?null:p.type)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var m=p.name==null?null:""+p.name;if(p.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=zn(n.nextSibling),n===null)break}return null}function $T(n,i,o){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=zn(n.nextSibling),n===null))return null;return n}function eb(n,i){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!i||(n=zn(n.nextSibling),n===null))return null;return n}function Th(n){return n.data==="$?"||n.data==="$~"}function kh(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function LT(n,i){var o=n.ownerDocument;if(n.data==="$~")n._reactRetry=i;else if(n.data!=="$?"||o.readyState!=="loading")i();else{var c=function(){i(),o.removeEventListener("DOMContentLoaded",c)};o.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function zn(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return n}var Eh=null;function tb(n){n=n.nextSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"||o==="/&"){if(i===0)return zn(n.nextSibling);i--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||i++}n=n.nextSibling}return null}function nb(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(i===0)return n;i--}else o!=="/$"&&o!=="/&"||i++}n=n.previousSibling}return null}function rb(n,i,o){switch(i=Nc(o),n){case"html":if(n=i.documentElement,!n)throw Error(a(452));return n;case"head":if(n=i.head,!n)throw Error(a(453));return n;case"body":if(n=i.body,!n)throw Error(a(454));return n;default:throw Error(a(451))}}function ks(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Cd(n)}var Dn=new Map,ib=new Set;function zc(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Nr=z.d;z.d={f:HT,r:IT,D:BT,C:qT,L:FT,m:YT,X:XT,S:PT,M:GT};function HT(){var n=Nr.f(),i=Sc();return n||i}function IT(n){var i=xa(n);i!==null&&i.tag===5&&i.type==="form"?x0(i):Nr.r(n)}var Ja=typeof document>"u"?null:document;function ab(n,i,o){var c=Ja;if(c&&typeof i=="string"&&i){var p=kn(i);p='link[rel="'+n+'"][href="'+p+'"]',typeof o=="string"&&(p+='[crossorigin="'+o+'"]'),ib.has(p)||(ib.add(p),n={rel:n,crossOrigin:o,href:i},c.querySelector(p)===null&&(i=c.createElement("link"),$t(i,"link",n),Mt(i),c.head.appendChild(i)))}}function BT(n){Nr.D(n),ab("dns-prefetch",n,null)}function qT(n,i){Nr.C(n,i),ab("preconnect",n,i)}function FT(n,i,o){Nr.L(n,i,o);var c=Ja;if(c&&n&&i){var p='link[rel="preload"][as="'+kn(i)+'"]';i==="image"&&o&&o.imageSrcSet?(p+='[imagesrcset="'+kn(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(p+='[imagesizes="'+kn(o.imageSizes)+'"]')):p+='[href="'+kn(n)+'"]';var m=p;switch(i){case"style":m=eo(n);break;case"script":m=to(n)}Dn.has(m)||(n=g({rel:"preload",href:i==="image"&&o&&o.imageSrcSet?void 0:n,as:i},o),Dn.set(m,n),c.querySelector(p)!==null||i==="style"&&c.querySelector(Es(m))||i==="script"&&c.querySelector(Cs(m))||(i=c.createElement("link"),$t(i,"link",n),Mt(i),c.head.appendChild(i)))}}function YT(n,i){Nr.m(n,i);var o=Ja;if(o&&n){var c=i&&typeof i.as=="string"?i.as:"script",p='link[rel="modulepreload"][as="'+kn(c)+'"][href="'+kn(n)+'"]',m=p;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=to(n)}if(!Dn.has(m)&&(n=g({rel:"modulepreload",href:n},i),Dn.set(m,n),o.querySelector(p)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Cs(m)))return}c=o.createElement("link"),$t(c,"link",n),Mt(c),o.head.appendChild(c)}}}function PT(n,i,o){Nr.S(n,i,o);var c=Ja;if(c&&n){var p=_a(c).hoistableStyles,m=eo(n);i=i||"default";var x=p.get(m);if(!x){var C={loading:0,preload:null};if(x=c.querySelector(Es(m)))C.loading=5;else{n=g({rel:"stylesheet",href:n,"data-precedence":i},o),(o=Dn.get(m))&&Ch(n,o);var N=x=c.createElement("link");Mt(N),$t(N,"link",n),N._p=new Promise(function(I,X){N.onload=I,N.onerror=X}),N.addEventListener("load",function(){C.loading|=1}),N.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Dc(x,i,c)}x={type:"stylesheet",instance:x,count:1,state:C},p.set(m,x)}}}function XT(n,i){Nr.X(n,i);var o=Ja;if(o&&n){var c=_a(o).hoistableScripts,p=to(n),m=c.get(p);m||(m=o.querySelector(Cs(p)),m||(n=g({src:n,async:!0},i),(i=Dn.get(p))&&Ah(n,i),m=o.createElement("script"),Mt(m),$t(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(p,m))}}function GT(n,i){Nr.M(n,i);var o=Ja;if(o&&n){var c=_a(o).hoistableScripts,p=to(n),m=c.get(p);m||(m=o.querySelector(Cs(p)),m||(n=g({src:n,async:!0,type:"module"},i),(i=Dn.get(p))&&Ah(n,i),m=o.createElement("script"),Mt(m),$t(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(p,m))}}function ob(n,i,o,c){var p=(p=le.current)?zc(p):null;if(!p)throw Error(a(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(i=eo(o.href),o=_a(p).hoistableStyles,c=o.get(i),c||(c={type:"style",instance:null,count:0,state:null},o.set(i,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=eo(o.href);var m=_a(p).hoistableStyles,x=m.get(n);if(x||(p=p.ownerDocument||p,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,x),(m=p.querySelector(Es(n)))&&!m._p&&(x.instance=m,x.state.loading=5),Dn.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Dn.set(n,o),m||VT(p,n,o,x.state))),i&&c===null)throw Error(a(528,""));return x}if(i&&c!==null)throw Error(a(529,""));return null;case"script":return i=o.async,o=o.src,typeof o=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=to(o),o=_a(p).hoistableScripts,c=o.get(i),c||(c={type:"script",instance:null,count:0,state:null},o.set(i,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,n))}}function eo(n){return'href="'+kn(n)+'"'}function Es(n){return'link[rel="stylesheet"]['+n+"]"}function sb(n){return g({},n,{"data-precedence":n.precedence,precedence:null})}function VT(n,i,o,c){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?c.loading=1:(i=n.createElement("link"),c.preload=i,i.addEventListener("load",function(){return c.loading|=1}),i.addEventListener("error",function(){return c.loading|=2}),$t(i,"link",o),Mt(i),n.head.appendChild(i))}function to(n){return'[src="'+kn(n)+'"]'}function Cs(n){return"script[async]"+n}function lb(n,i,o){if(i.count++,i.instance===null)switch(i.type){case"style":var c=n.querySelector('style[data-href~="'+kn(o.href)+'"]');if(c)return i.instance=c,Mt(c),c;var p=g({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),Mt(c),$t(c,"style",p),Dc(c,o.precedence,n),i.instance=c;case"stylesheet":p=eo(o.href);var m=n.querySelector(Es(p));if(m)return i.state.loading|=4,i.instance=m,Mt(m),m;c=sb(o),(p=Dn.get(p))&&Ch(c,p),m=(n.ownerDocument||n).createElement("link"),Mt(m);var x=m;return x._p=new Promise(function(C,N){x.onload=C,x.onerror=N}),$t(m,"link",c),i.state.loading|=4,Dc(m,o.precedence,n),i.instance=m;case"script":return m=to(o.src),(p=n.querySelector(Cs(m)))?(i.instance=p,Mt(p),p):(c=o,(p=Dn.get(m))&&(c=g({},o),Ah(c,p)),n=n.ownerDocument||n,p=n.createElement("script"),Mt(p),$t(p,"link",c),n.head.appendChild(p),i.instance=p);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(c=i.instance,i.state.loading|=4,Dc(c,o.precedence,n));return i.instance}function Dc(n,i,o){for(var c=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=c.length?c[c.length-1]:null,m=p,x=0;x<c.length;x++){var C=c[x];if(C.dataset.precedence===i)m=C;else if(m!==p)break}m?m.parentNode.insertBefore(n,m.nextSibling):(i=o.nodeType===9?o.head:o,i.insertBefore(n,i.firstChild))}function Ch(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function Ah(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var Rc=null;function cb(n,i,o){if(Rc===null){var c=new Map,p=Rc=new Map;p.set(o,c)}else p=Rc,c=p.get(o),c||(c=new Map,p.set(o,c));if(c.has(n))return c;for(c.set(n,null),o=o.getElementsByTagName(n),p=0;p<o.length;p++){var m=o[p];if(!(m[Fo]||m[Dt]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var x=m.getAttribute(i)||"";x=n+x;var C=c.get(x);C?C.push(m):c.set(x,[m])}}return c}function ub(n,i,o){n=n.ownerDocument||n,n.head.insertBefore(o,i==="title"?n.querySelector("head > title"):null)}function QT(n,i,o){if(o===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function db(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function KT(n,i,o,c){if(o.type==="stylesheet"&&(typeof c.media!="string"||matchMedia(c.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var p=eo(c.href),m=i.querySelector(Es(p));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(n.count++,n=jc.bind(n),i.then(n,n)),o.state.loading|=4,o.instance=m,Mt(m);return}m=i.ownerDocument||i,c=sb(c),(p=Dn.get(p))&&Ch(c,p),m=m.createElement("link"),Mt(m);var x=m;x._p=new Promise(function(C,N){x.onload=C,x.onerror=N}),$t(m,"link",c),o.instance=m}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(o,i),(i=o.state.preload)&&(o.state.loading&3)===0&&(n.count++,o=jc.bind(n),i.addEventListener("load",o),i.addEventListener("error",o))}}var Mh=0;function WT(n,i){return n.stylesheets&&n.count===0&&$c(n,n.stylesheets),0<n.count||0<n.imgCount?function(o){var c=setTimeout(function(){if(n.stylesheets&&$c(n,n.stylesheets),n.unsuspend){var m=n.unsuspend;n.unsuspend=null,m()}},6e4+i);0<n.imgBytes&&Mh===0&&(Mh=62500*NT());var p=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&$c(n,n.stylesheets),n.unsuspend)){var m=n.unsuspend;n.unsuspend=null,m()}},(n.imgBytes>Mh?50:800)+i);return n.unsuspend=o,function(){n.unsuspend=null,clearTimeout(c),clearTimeout(p)}}:null}function jc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$c(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Uc=null;function $c(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Uc=new Map,i.forEach(ZT,n),Uc=null,jc.call(n))}function ZT(n,i){if(!(i.state.loading&4)){var o=Uc.get(n);if(o)var c=o.get(null);else{o=new Map,Uc.set(n,o);for(var p=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<p.length;m++){var x=p[m];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(o.set(x.dataset.precedence,x),c=x)}c&&o.set(null,c)}p=i.instance,x=p.getAttribute("data-precedence"),m=o.get(x)||c,m===c&&o.set(null,p),o.set(x,p),this.count++,c=jc.bind(this),p.addEventListener("load",c),p.addEventListener("error",c),m?m.parentNode.insertBefore(p,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(p,n.firstChild)),i.state.loading|=4}}var As={$$typeof:M,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function JT(n,i,o,c,p,m,x,C,N){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Sd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sd(0),this.hiddenUpdates=Sd(null),this.identifierPrefix=c,this.onUncaughtError=p,this.onCaughtError=m,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=N,this.incompleteTransitions=new Map}function fb(n,i,o,c,p,m,x,C,N,I,X,K){return n=new JT(n,i,o,x,N,I,X,K,C),i=1,m===!0&&(i|=24),m=un(3,null,null,i),n.current=m,m.stateNode=n,i=lf(),i.refCount++,n.pooledCache=i,i.refCount++,m.memoizedState={element:c,isDehydrated:o,cache:i},ff(m),n}function hb(n){return n?(n=za,n):za}function pb(n,i,o,c,p,m){p=hb(p),c.context===null?c.context=p:c.pendingContext=p,c=ri(i),c.payload={element:o},m=m===void 0?null:m,m!==null&&(c.callback=m),o=ii(n,c,i),o!==null&&(en(o,n,i),os(o,n,i))}function mb(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Oh(n,i){mb(n,i),(n=n.alternate)&&mb(n,i)}function gb(n){if(n.tag===13||n.tag===31){var i=Li(n,67108864);i!==null&&en(i,n,67108864),Oh(n,67108864)}}function vb(n){if(n.tag===13||n.tag===31){var i=mn();i=Td(i);var o=Li(n,i);o!==null&&en(o,n,i),Oh(n,i)}}var Lc=!0;function ek(n,i,o,c){var p=A.T;A.T=null;var m=z.p;try{z.p=2,Nh(n,i,o,c)}finally{z.p=m,A.T=p}}function tk(n,i,o,c){var p=A.T;A.T=null;var m=z.p;try{z.p=8,Nh(n,i,o,c)}finally{z.p=m,A.T=p}}function Nh(n,i,o,c){if(Lc){var p=zh(c);if(p===null)vh(n,i,c,Hc,o),bb(n,c);else if(rk(p,n,i,o,c))c.stopPropagation();else if(bb(n,c),i&4&&-1<nk.indexOf(n)){for(;p!==null;){var m=xa(p);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var x=Di(m.pendingLanes);if(x!==0){var C=m;for(C.pendingLanes|=2,C.entangledLanes|=2;x;){var N=1<<31-ln(x);C.entanglements[1]|=N,x&=~N}ar(m),(Be&6)===0&&(xc=on()+500,_s(0))}}break;case 31:case 13:C=Li(m,2),C!==null&&en(C,m,2),Sc(),Oh(m,2)}if(m=zh(c),m===null&&vh(n,i,c,Hc,o),m===p)break;p=m}p!==null&&c.stopPropagation()}else vh(n,i,c,null,o)}}function zh(n){return n=Dd(n),Dh(n)}var Hc=null;function Dh(n){if(Hc=null,n=wa(n),n!==null){var i=l(n);if(i===null)n=null;else{var o=i.tag;if(o===13){if(n=u(i),n!==null)return n;n=null}else if(o===31){if(n=d(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return Hc=n,null}function yb(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(BS()){case Eg:return 2;case Cg:return 8;case Al:case qS:return 32;case Ag:return 268435456;default:return 32}default:return 32}}var Rh=!1,mi=null,gi=null,vi=null,Ms=new Map,Os=new Map,yi=[],nk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bb(n,i){switch(n){case"focusin":case"focusout":mi=null;break;case"dragenter":case"dragleave":gi=null;break;case"mouseover":case"mouseout":vi=null;break;case"pointerover":case"pointerout":Ms.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Os.delete(i.pointerId)}}function Ns(n,i,o,c,p,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[p]},i!==null&&(i=xa(i),i!==null&&gb(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),n)}function rk(n,i,o,c,p){switch(i){case"focusin":return mi=Ns(mi,n,i,o,c,p),!0;case"dragenter":return gi=Ns(gi,n,i,o,c,p),!0;case"mouseover":return vi=Ns(vi,n,i,o,c,p),!0;case"pointerover":var m=p.pointerId;return Ms.set(m,Ns(Ms.get(m)||null,n,i,o,c,p)),!0;case"gotpointercapture":return m=p.pointerId,Os.set(m,Ns(Os.get(m)||null,n,i,o,c,p)),!0}return!1}function wb(n){var i=wa(n.target);if(i!==null){var o=l(i);if(o!==null){if(i=o.tag,i===13){if(i=u(o),i!==null){n.blockedOn=i,Rg(n.priority,function(){vb(o)});return}}else if(i===31){if(i=d(o),i!==null){n.blockedOn=i,Rg(n.priority,function(){vb(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ic(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=zh(n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);zd=c,o.target.dispatchEvent(c),zd=null}else return i=xa(o),i!==null&&gb(i),n.blockedOn=o,!1;i.shift()}return!0}function xb(n,i,o){Ic(n)&&o.delete(i)}function ik(){Rh=!1,mi!==null&&Ic(mi)&&(mi=null),gi!==null&&Ic(gi)&&(gi=null),vi!==null&&Ic(vi)&&(vi=null),Ms.forEach(xb),Os.forEach(xb)}function Bc(n,i){n.blockedOn===i&&(n.blockedOn=null,Rh||(Rh=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ik)))}var qc=null;function _b(n){qc!==n&&(qc=n,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){qc===n&&(qc=null);for(var i=0;i<n.length;i+=3){var o=n[i],c=n[i+1],p=n[i+2];if(typeof c!="function"){if(Dh(c||o)===null)continue;break}var m=xa(o);m!==null&&(n.splice(i,3),i-=3,zf(m,{pending:!0,data:p,method:o.method,action:c},c,p))}}))}function no(n){function i(N){return Bc(N,n)}mi!==null&&Bc(mi,n),gi!==null&&Bc(gi,n),vi!==null&&Bc(vi,n),Ms.forEach(i),Os.forEach(i);for(var o=0;o<yi.length;o++){var c=yi[o];c.blockedOn===n&&(c.blockedOn=null)}for(;0<yi.length&&(o=yi[0],o.blockedOn===null);)wb(o),o.blockedOn===null&&yi.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(c=0;c<o.length;c+=3){var p=o[c],m=o[c+1],x=p[Vt]||null;if(typeof m=="function")x||_b(o);else if(x){var C=null;if(m&&m.hasAttribute("formAction")){if(p=m,x=m[Vt]||null)C=x.formAction;else if(Dh(p)!==null)continue}else C=x.action;typeof C=="function"?o[c+1]=C:(o.splice(c,3),c-=3),_b(o)}}}function Sb(){function n(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(x){return p=x})},focusReset:"manual",scroll:"manual"})}function i(){p!==null&&(p(),p=null),c||setTimeout(o,20)}function o(){if(!c&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var c=!1,p=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(o,100),function(){c=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),p!==null&&(p(),p=null)}}}function jh(n){this._internalRoot=n}Fc.prototype.render=jh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(a(409));var o=i.current,c=mn();pb(o,c,n,i,null,null)},Fc.prototype.unmount=jh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;pb(n.current,2,null,n,null,null),Sc(),i[ba]=null}};function Fc(n){this._internalRoot=n}Fc.prototype.unstable_scheduleHydration=function(n){if(n){var i=Dg();n={blockedOn:null,target:n,priority:i};for(var o=0;o<yi.length&&i!==0&&i<yi[o].priority;o++);yi.splice(o,0,n),o===0&&wb(n)}};var Tb=t.version;if(Tb!=="19.2.0")throw Error(a(527,Tb,"19.2.0"));z.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(a(188)):(n=Object.keys(n).join(","),Error(a(268,n)));return n=h(i),n=n!==null?v(n):null,n=n===null?null:n.stateNode,n};var ak={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yc.isDisabled&&Yc.supportsFiber)try{Io=Yc.inject(ak),sn=Yc}catch{}}return $s.createRoot=function(n,i){if(!s(n))throw Error(a(299));var o=!1,c="",p=N0,m=z0,x=D0;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onUncaughtError!==void 0&&(p=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(x=i.onRecoverableError)),i=fb(n,1,!1,null,null,o,c,null,p,m,x,Sb),n[ba]=i.current,gh(n),new jh(i)},$s.hydrateRoot=function(n,i,o){if(!s(n))throw Error(a(299));var c=!1,p="",m=N0,x=z0,C=D0,N=null;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(x=o.onCaughtError),o.onRecoverableError!==void 0&&(C=o.onRecoverableError),o.formState!==void 0&&(N=o.formState)),i=fb(n,1,!0,i,o??null,c,p,N,m,x,C,Sb),i.context=hb(null),o=i.current,c=mn(),c=Td(c),p=ri(c),p.callback=null,ii(o,p,c),o=c,i.current.lanes=o,qo(i,o),ar(i),n[ba]=i.current,gh(n),new Fc(i)},$s.version="19.2.0",$s}var Iw;function MM(){if(Iw)return op.exports;Iw=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),op.exports=AM(),op.exports}var OM=MM();function NM(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var r,a,s,l,u=[],d="",f=e.split("/");for(f[0]||f.shift();s=f.shift();)r=s[0],r==="*"?(u.push(r),d+=s[1]==="?"?"(?:/(.*))?":"/(.*)"):r===":"?(a=s.indexOf("?",1),l=s.indexOf(".",1),u.push(s.substring(1,~a?a:~l?l:s.length)),d+=~a&&!~l?"(?:/([^/]+?))?":"/([^/]+?)",~l&&(d+=(~a?"?":"")+"\\"+s.substring(l))):d+="/"+s;return{keys:u,pattern:new RegExp("^"+d+(t?"(?=$|/)":"/?$"),"i")}}var up={exports:{}},dp={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bw;function zM(){if(Bw)return dp;Bw=1;var e=xl();function t(g,b){return g===b&&(g!==0||1/g===1/b)||g!==g&&b!==b}var r=typeof Object.is=="function"?Object.is:t,a=e.useState,s=e.useEffect,l=e.useLayoutEffect,u=e.useDebugValue;function d(g,b){var w=b(),S=a({inst:{value:w,getSnapshot:b}}),T=S[0].inst,k=S[1];return l(function(){T.value=w,T.getSnapshot=b,f(T)&&k({inst:T})},[g,w,b]),s(function(){return f(T)&&k({inst:T}),g(function(){f(T)&&k({inst:T})})},[g]),u(w),w}function f(g){var b=g.getSnapshot;g=g.value;try{var w=b();return!r(g,w)}catch{return!0}}function h(g,b){return b()}var v=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?h:d;return dp.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:v,dp}var qw;function p_(){return qw||(qw=1,up.exports=zM()),up.exports}var m_=p_();const DM=Em(m_),RM=_E.useInsertionEffect,jM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",UM=jM?Ee.useLayoutEffect:Ee.useEffect,$M=RM||UM,g_=e=>{const t=Ee.useRef([e,(...r)=>t[0](...r)]).current;return $M(()=>{t[0]=e}),t[1]},LM="popstate",tg="pushState",ng="replaceState",HM="hashchange",Fw=[LM,tg,ng,HM],IM=e=>{for(const t of Fw)addEventListener(t,e);return()=>{for(const t of Fw)removeEventListener(t,e)}},v_=(e,t)=>m_.useSyncExternalStore(IM,e,t),Yw=()=>location.search,BM=({ssrSearch:e}={})=>v_(Yw,e!=null?()=>e:Yw),Pw=()=>location.pathname,qM=({ssrPath:e}={})=>v_(Pw,e!=null?()=>e:Pw),FM=(e,{replace:t=!1,state:r=null}={})=>history[t?ng:tg](r,"",e),YM=(e={})=>[qM(e),FM],Xw=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[Xw]>"u"){for(const e of[tg,ng]){const t=history[e];history[e]=function(){const r=t.apply(this,arguments),a=new Event(e);return a.arguments=arguments,dispatchEvent(a),r}}Object.defineProperty(window,Xw,{value:!0})}const PM=(e,t)=>t.toLowerCase().indexOf(e.toLowerCase())?"~"+t:t.slice(e.length)||"/",y_=(e="")=>e==="/"?"":e,XM=(e,t)=>e[0]==="~"?e.slice(1):y_(t)+e,GM=(e="",t)=>PM(Gw(y_(e)),Gw(t)),Gw=e=>{try{return decodeURI(e)}catch{return e}},b_={hook:YM,searchHook:BM,parser:NM,base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:e=>e},w_=Ee.createContext(b_),Uo=()=>Ee.useContext(w_),x_={},__=Ee.createContext(x_),VM=()=>Ee.useContext(__),od=e=>{const[t,r]=e.hook(e);return[GM(e.base,t),g_((a,s)=>r(XM(a,e.base),s))]},rg=()=>od(Uo()),ig=(e,t,r,a)=>{const{pattern:s,keys:l}=t instanceof RegExp?{keys:!1,pattern:t}:e(t||"*",a),u=s.exec(r)||[],[d,...f]=u;return d!==void 0?[!0,(()=>{const h=l!==!1?Object.fromEntries(l.map((g,b)=>[g,f[b]])):u.groups;let v={...f};return h&&Object.assign(v,h),v})(),...a?[d]:[]]:[!1,null]},QM=e=>ig(Uo().parser,e,rg()[0]),KM=({children:e,...t})=>{var v,g,b;const r=Uo(),a=t.hook?b_:r;let s=a;const[l,u]=((v=t.ssrPath)==null?void 0:v.split("?"))??[];u&&(t.ssrSearch=u,t.ssrPath=l),t.hrefs=t.hrefs??((g=t.hook)==null?void 0:g.hrefs),t.searchHook=t.searchHook??((b=t.hook)==null?void 0:b.searchHook);let d=Ee.useRef({}),f=d.current,h=f;for(let w in a){const S=w==="base"?a[w]+(t[w]||""):t[w]||a[w];f===h&&S!==h[w]&&(d.current=h={...h}),h[w]=S,(S!==a[w]||S!==s[w])&&(s=h)}return Ee.createElement(w_.Provider,{value:s,children:e})},Vw=({children:e,component:t},r)=>t?Ee.createElement(t,{params:r}):typeof e=="function"?e(r):e,WM=e=>{let t=Ee.useRef(x_);const r=t.current;return t.current=Object.keys(e).length!==Object.keys(r).length||Object.entries(e).some(([a,s])=>s!==r[a])?e:r},lo=({path:e,nest:t,match:r,...a})=>{const s=Uo(),[l]=od(s),[u,d,f]=r??ig(s.parser,e,l,t),h=WM({...VM(),...d});if(!u)return null;const v=f?Ee.createElement(KM,{base:f},Vw(a,h)):Vw(a,h);return Ee.createElement(__.Provider,{value:h,children:v})},uo=Ee.forwardRef((e,t)=>{const r=Uo(),[a,s]=od(r),{to:l="",href:u=l,onClick:d,asChild:f,children:h,className:v,replace:g,state:b,...w}=e,S=g_(k=>{k.ctrlKey||k.metaKey||k.altKey||k.shiftKey||k.button!==0||(d==null||d(k),k.defaultPrevented||(k.preventDefault(),s(u,e)))}),T=r.hrefs(u[0]==="~"?u.slice(1):r.base+u,r);return f&&Ee.isValidElement(h)?Ee.cloneElement(h,{onClick:S,href:T}):Ee.createElement("a",{...w,onClick:S,href:T,className:v!=null&&v.call?v(a===u):v,children:h,ref:t})}),S_=e=>Array.isArray(e)?e.flatMap(t=>S_(t&&t.type===Ee.Fragment?t.props.children:t)):[e],ZM=({children:e,location:t})=>{const r=Uo(),[a]=od(r);for(const s of S_(e)){let l=0;if(Ee.isValidElement(s)&&(l=ig(r.parser,s.props.path,t||a,s.props.nest))[0])return Ee.cloneElement(s,{match:l})}return null};function sd(e,t){for(const r in e)t(e[r],r)}function bn(e,t){e.forEach(t)}function At(e,t,r){if(!e)throw Error(`${r?r+": ":""}${t}`)}function Pr({node:e=[],from:t,source:r,parent:a=t||r,to:s,target:l,child:u=s||l,scope:d={},meta:f={},family:h={type:"regular"},regional:v}={}){const g=qs(a),b=qs(h.links),w=qs(h.owners),S=[];bn(e,(k=>k&&$n(S,k)));const T={id:u3(),seq:S,next:qs(u),meta:f,scope:d,family:{triggers:g.length,type:h.type||"crosslink",links:b,owners:w}};return bn(b,(k=>$n(ld(k),T))),bn(w,(k=>$n(cd(k),T))),bn(g,(k=>$n(k.next,T))),T}function T_(e,t,r){let a,s=Br,l=null,u=st;if(e.target&&(t=e.params,r=e.defer,a=e.meta,s="page"in e?e.page:s,e.stack&&(l=e.stack),u=nu(e)||u,e=e.target),u&&st&&u!==st&&(st=null),Array.isArray(e))for(let S=0;S<e.length;S++)ea("pure",s,_n(e[S]),l,t[S],u,a);else ea("pure",s,_n(e),l,t,u,a);if(r&&!iu)return;const d={isRoot:iu,currentPage:Br,scope:st,isWatch:mp,isPure:xu};let f,h,v,g,b,w;iu=0;e:for(;g=v3();){const{idx:S,stack:T,type:k}=g;v=T.node,Br=b=T.page,st=nu(T),b?w=b.reg:st&&(w=st.reg);const _=!!b,E=!!st,M={fail:0,scope:v.scope};f=h=0;for(let D=S;D<v.seq.length&&!f;D++){const j=v.seq[D];if(j.order){const{priority:Y,barrierID:B}=j.order,ee=B?b?`${b.fullID}_${B}`:B:0;if(D!==S||k!==Y){B?pp.has(ee)||(pp.add(ee),im(D,T,Y,B)):im(D,T,Y,0);continue e}B&&pp.delete(ee)}switch(j.type){case"mov":{const B=j.data;let ee;switch(B.from){case"stack":ee=bu(T);break;case"a":case"b":ee=T[B.from];break;case"value":ee=B.store;break;case"store":if(w&&!w[B.store.id])if(_){const ne=R_(b,B.store.id);T.page=b=ne,ne?w=ne.reg:E?(Co(st,B.store,0,1,B.softRead),w=st.reg):w=void 0}else E&&Co(st,B.store,0,1,B.softRead);ee=Ks(w&&w[B.store.id]||B.store)}switch(B.to){case"stack":T.value=ee;break;case"a":case"b":T[B.to]=ee;break;case"store":y3(b,st,B.target,0).current=ee}break}case"compute":const Y=j.data;if(Y.fn){mp=v.meta.op==="watch",xu=Y.pure;const B=Y.safe?(0,Y.fn)(bu(T),M.scope,T):w3(M,Y.fn,T);Y.filter?h=!B:T.value=B,mp=d.isWatch,xu=d.isPure}}f=M.fail||h}if(!f){const D=bu(T),j=nu(T);if(bn(v.next,(Y=>{ea("child",b,Y,T,D,j)})),j){v.meta.needFxCounter&&ea("child",b,j.fxCount,T,D,j),v.meta.storeChange&&ea("child",b,j.storeChange,T,D,j),v.meta.warnSerialize&&ea("child",b,j.warnSerializeNode,T,D,j);const Y=j.additionalLinks[v.id];Y&&bn(Y,(B=>{ea("child",b,B,T,D,j)}))}}}iu=d.isRoot,Br=d.currentPage,st=nu(d)}function JM(e,t="combine"){let r=t+"(",a="",s=0;return sd(e,(l=>{s<25&&(l!=null&&(r+=a,r+=Ai(l)?E_(l).fullName:l.toString()),s+=1,a=", ")})),r+")"}function e3(e,t){let r,a;const s=e;if(t){const l=E_(t);e.length===0?(r=l.path,a=l.fullName):(r=l.path.concat([e]),a=l.fullName.length===0?e:l.fullName+"/"+e)}else r=e.length===0?[]:[e],a=e;return{shortName:s,fullName:a,path:r}}function va(e,t){if(!t||!t.name&&!t.named&&!t.loc)return e;let r=`[${e}]`;const a=t.named||t.name;a&&(r+=` unit '${a}'`);const s=t.loc;return!a&&s&&(r+=` (${s.file}:${s.line}:${s.column})`),r}function ag(e,t){const r=e[0];N_(r);let a=r.or;const s=r.and;if(s){const l=s[0];if(hr(l)&&"and"in l){const u=ag(s);e=u[0],a={...a,...u[1]}}else e=s}return[e,a]}function tm(e){const t=()=>e();return t.unsubscribe=()=>e(),t}function Wn(e,...t){}function ut(e,t){const r=pl({or:t,and:typeof e=="string"?{name:e}:e}),a=va("event",r),s=(d,...f)=>(At(!Fr(s,"derived"),"call of derived event is not supported, use createEvent instead",a),At(!xu,"unit call from pure function is not supported, use operators like sample instead",a),Br?((h,v,g,b)=>{const w=Br;Jw(null);const T=h.create(g,b);return Jw(w),T})(s,l,d,f):s.create(d,f)),l=f3(),u=Object.assign(s,{graphite:Pr({meta:$_(r.actualOp||"event",s,r,dd()),regional:1}),create:d=>(T_({target:s,params:d,scope:st}),d),watch:d=>j_(s,d),map:d=>gp(s,To,d,[Ir()]),filter:d=>gp(s,"filter",d.fn?d:d.fn,[Ir(ud,1)]),filterMap:d=>gp(s,"filterMap",d,[Ir(),ko((f=>!Ln(f)),1)]),prepend(d){At(s.targetable,".prepend of derived event is not supported, call source event instead",a);const f=ut("* → "+s.shortName,{parent:dl(s)});return Wn("eventPrepend",_n(f)),fa(f,s,[Ir()],"prepend",d),_3(s,f),f}});return r!=null&&r.domain&&r.domain.hooks.event(u),Hr(u,"id",u.graphite.id),O_(u.graphite),u}function Qw(e,t,r,a,s){return nm(r,`${s} ${t}`,"first argument"),At(Gr(a),"second argument should be a function",s),fl(!Fr(e,"derived"),`${t} in derived store`,`${t} in store created via createStore`,s),bn(Array.isArray(r)?r:[r],(l=>{e.off(l),L_(l,e,"on",m3,a)})),e}function wn(e,t){const r=pl(t),a=Eo(e),s=va("store",r),l=ut({named:"updates",derived:1});Wn("storeBase",a);const u=a.id,d="skipVoid"in r,f=d&&!r.skipVoid;fl(!(d&&r.skipVoid),"{skipVoid: true}","updateFilter",s);const h={updates:l,defaultState:e,stateRef:a,getState(){let _,E=a;if(Br){let M=Br;for(;M&&!M.reg[u];)M=dl(M);M&&(_=M)}return!_&&st&&(Co(st,a,1),_=st),_&&(E=_.reg[u]),Ks(E)},setState:_=>T_({target:h,params:_,defer:1,scope:st}),reset:(..._)=>(At(h.targetable,".reset of derived store is not supported",s),bn(_,(E=>Qw(h,".reset",E,(()=>h.defaultState),s))),h),on:(_,E)=>(At(h.targetable,".on of derived store is not supported",s),Qw(h,".on",_,E,s)),off(_){const E=_n(_).id,M=_n(h).family.links.find((D=>D.meta.onTrigger===E));return M&&Yu(M),h},map(_,E){let M,D;hr(_)&&(M=_,_=_.fn);const j=h.getState(),Y=Ln(j);(!Y||Y&&f)&&(D=_(j));const B=wn(D,{name:`${h.shortName} → *`,derived:1,...E,and:M}),ee=L_(h,B,To,ud,_);return rm(ur(B),{type:To,fn:_,from:a}),ur(B).noInit=1,Wn("storeMap",a,ee),B},watch(_,E){if(fl(!E,"watch second argument","sample",s),!E||!Ai(_)){const M=j_(h,_);return Wn("storeWatch",a,_)||_(h.getState()),M}return At(Gr(E),"second argument should be a function",s),_.watch((M=>E(h.getState(),M)))}},v=$_("store",h,r,dd()),g=h.defaultConfig.updateFilter;h.graphite=Pr({scope:{state:a,fn:g},node:[ko(((_,E,M)=>(M.scope&&!M.scope.reg[a.id]&&(M.b=1),_))),la(a),ko(((_,E,{a:M,b:D})=>{const j=Ln(_);return j&&!d&&l3(`${Su}`,h.graphite),(j&&f||!j)&&(_!==M||D)}),1),g&&Ir(z_,1),Un({from:"stack",target:a})],child:l,meta:{...v,defaultState:e,stateRef:a},regional:1}),Hr(h,"id",h.graphite.id),Hr(h,"rootStateRefId",u);const b=Fr(h,"serialize"),w=Fr(h,"derived"),S=b==="ignore",T=Fr(h,"sid");T&&(Hr(h,"storeChange",1),a.sid=T),T||S||w||Hr(h,"warnSerialize",1);const k=Ln(e);return At(w||!k||k&&f,Su,s),w&&k&&!d&&console.error(`${s}: ${Su}`),Fu(h,[l]),r!=null&&r.domain&&r.domain.hooks.store(h),w||(h.reinit=ut({named:"reinit"}),h.reset(h.reinit)),a.meta=h.graphite.meta,O_(h.graphite),h}function So(...e){let t,r,a;[e,a]=ag(e);const s=va("combine",a),l=e[e.length-1],u=e.length>1&&!Bn(l)&&hr(l),d=u&&l,f=u?e[e.length-2]:l;let h,v,g;if(Gr(f)?(r=e.slice(0,u?-2:-1),t=f):r=e,r.length===1){const b=r[0];Bn(b)||(h=b,v=1)}if(!v&&(h=r,t)){g=1;const b=t;t=w=>b(...w)}return At(hr(h),`${s}: shape should be an object`),S3(Array.isArray(h),!g,h,dd(),a,t,d)}function t3(e,t){let r=0;return bn(T3,(a=>{a in e&&(At(e[a]!=null,H_(t,a)),r=1)})),r}function ul(...e){let t,r,a,s,[[l,u,d],f]=ag(e),h=1;const v=va("sample",f);return Ln(u)&&hr(l)&&t3(l,v)&&(u=l.clock,d=l.fn,"batch"in l?h=l.batch:(fl(!("greedy"in l),"greedy in sample","batch",v),h=!l.greedy),s=l.filter,t=l.target,r=l.name,a=l.sid,l=l.source),k3("sample",u,l,s,t,d,r,f,h,1,0,a)}function k_(e,t,r){const a=va("restore",r);if(At(!Bn(e),"restore($store) is not supported",a),C_(e)||qu(e)){const l=dl(e),u=wn(t,{parent:l,name:e.shortName,and:r});return fa(qu(e)?e.doneData:e,u),l&&l.hooks.store(u),u}const s=Array.isArray(e)?[]:{};return sd(e,((l,u)=>s[u]=Bn(l)?l:wn(l,{name:u}))),s}function n3(e,{scope:t,safe:r}={}){At(t||st||r,"scopeBind: scope not found");const a=t||st;return(...s)=>{function l(){Zw(f)}let u,d=0;const f=st;Zw(a);try{u=e(...s)}catch(h){u=h,d=1}if(l(),d)throw u;return u instanceof Promise&&u.then(l,l),u}}function r3({unit:e,fn:t,scope:r,batch:a}){const s=[wu.run({fn:u=>t(u)})];s.unshift(wu.compute({priority:"sampler",batch:1})),Bn(e)&&s.unshift(wu.mov({store:e.stateRef,to:"stack"}));const l=Array.isArray(e)?e:[e];if(r){const u=[],d=r.additionalLinks;return l.forEach((f=>{const h=d[f.graphite.id]||[];d[f.graphite.id]=h;const v=Pr({node:i3(s,f),meta:{watchOp:f.kind}});h.push(v),u.push((()=>{const g=h.indexOf(v);g!==-1&&h.splice(g,1),Yu(v)}))})),tm((()=>{u.forEach((f=>f()))}))}{const u=Pr({node:s,parent:l,family:{owners:l}});return tm((()=>{Yu(u)}))}}function i3(e,t){return Bn(t)?[wu.mov({store:t.stateRef,to:"stack"}),...e]:e}const a3=typeof Symbol<"u"&&Symbol.observable||"@@observable",To="map",_n=e=>e.graphite||e,ld=e=>e.family.owners,cd=e=>e.family.links,ur=e=>e.stateRef,bu=e=>e.value,dl=e=>e.parent,nu=e=>e.scope,Fr=(e,t)=>_n(e).meta[t],Hr=(e,t,r)=>_n(e).meta[t]=r,E_=e=>e.compositeName,Ai=e=>(Gr(e)||hr(e))&&"kind"in e,Sl=e=>t=>Ai(t)&&t.kind===e,Bn=Sl("store"),C_=Sl("event"),qu=Sl("effect"),o3=e=>Ai(e)&&!!e.targetable,A_=Sl("domain"),s3=Sl("scope");var ru={__proto__:null,unit:Ai,store:Bn,event:C_,effect:qu,targetable:o3,domain:A_,scope:s3,attached:e=>qu(e)&&Fr(e,"attached")==1};const fp=(e,t)=>e.includes(t),hp=(e,t)=>{const r=e.indexOf(t);r!==-1&&e.splice(r,1)},$n=(e,t)=>e.push(t),fl=(e,t,r,a)=>!e&&console.error(`${a?a+": ":""}${t} is deprecated${r?`, use ${r} instead`:""}`),l3=(e,t)=>{const r=Fr(t,"unitTrace"),a=Fr(t,"config"),s=a!=null&&a.loc?` at ${a.loc.file}`:null,l=a==null?void 0:a.name;let u=e;l&&(u=`${l}: ${e}`),s&&(u=`${l}${s}: ${e}`);const d=Error(u);r&&(d.stack=r),r||l||s||console.log(`Add effector's Babel or SWC plugin to your config for more detailed debug information or "import "effector/enable_debug_traces" to your code entry module to see full stack traces`),console.error(d)},og=()=>{let e=0;return()=>""+ ++e},c3=og(),M_=og(),u3=og();let d3=null;const O_=e=>{},f3=()=>d3,h3=e=>e,Fu=(e,t)=>{const r=_n(e);bn(t,(a=>{const s=_n(a);r.family.type!=="domain"&&(s.family.type="crosslink"),$n(ld(s),r),$n(cd(r),s)}))},qs=(e=[])=>(Array.isArray(e)?e:[e]).flat().map(_n),hr=e=>typeof e=="object"&&e!==null,Gr=e=>typeof e=="function",Ln=e=>e===void 0,N_=e=>At(hr(e)||Gr(e),"expect first argument be an object"),Kw=(e,t,r,a)=>At(!(!hr(e)&&!Gr(e)||!("family"in e)&&!("graphite"in e)),`${t}: expect ${r} to be a unit (store, event or effect)${a}`),nm=(e,t,r)=>{Array.isArray(e)?bn(e,((a,s)=>Kw(a,t,`${s} item of ${r}`,""))):Kw(e,t,r," or array of units")},p3=(e,t,r="target")=>bn(qs(t),(a=>At(!Fr(a,"derived"),`${e}: derived unit in "${r}" is not supported, use createStore/createEvent instead"`))),z_=(e,{fn:t},{a:r})=>t(e,r),m3=(e,{fn:t},{a:r})=>t(r,e),ud=(e,{fn:t})=>t(e),D_=(e,t,r,a)=>{const s={id:M_(),type:e,data:t};return r&&(s.order={priority:r},a&&(s.order.barrierID=++g3)),s};let g3=0;const Un=({from:e="store",store:t,target:r,to:a=r?"store":"stack",batch:s,priority:l})=>D_("mov",{from:e,store:t,to:a,target:r},l,s),hl=({fn:e,batch:t,priority:r,safe:a=0,filter:s=0,pure:l=0})=>D_("compute",{fn:e,safe:a,filter:s,pure:l},r,t),sg=({fn:e})=>hl({fn:e,priority:"effect"}),ko=(e,t,r)=>hl({fn:e,safe:1,filter:t,priority:r}),la=(e,t,r)=>Un({store:e,to:t?"stack":"a",priority:r&&"sampler",batch:1}),Ir=(e=ud,t)=>hl({fn:e,pure:1,filter:t}),wu={mov:Un,compute:hl,filter:({fn:e,pure:t})=>hl({fn:e,filter:1,pure:t}),run:sg},Eo=e=>({id:M_(),current:e,initial:e}),Ks=({current:e})=>e,rm=(e,t)=>{e.before||(e.before=[]),$n(e.before,t)};let po=null;const lg=(e,t)=>{if(!e)return t;if(!t)return e;let r;return(e.v.type===t.v.type&&e.v.id>t.v.id||am(e.v.type)>am(t.v.type))&&(r=e,e=t,t=r),r=lg(e.r,t),e.r=e.l,e.l=r,e},cg=[];let Ww=0;for(;Ww<6;)$n(cg,{first:null,last:null,size:0}),Ww+=1;const v3=()=>{for(let e=0;e<6;e++){const t=cg[e];if(t.size>0){if(e===3||e===4){t.size-=1;const a=po.v;return po=lg(po.l,po.r),a}t.size===1&&(t.last=null);const r=t.first;return t.first=r.r,t.size-=1,r.v}}},ea=(e,t,r,a,s,l,u)=>im(0,{a:null,b:null,node:r,parent:a,value:s,page:t,scope:l,meta:u},e,0),im=(e,t,r,a)=>{const s=am(r),l=cg[s],u={v:{idx:e,stack:t,type:r,id:a},l:null,r:null};s===3||s===4?po=lg(po,u):(l.size===0?l.first=u:l.last.r=u,l.last=u),l.size+=1},am=e=>{switch(e){case"child":return 0;case"pure":return 1;case"read":return 2;case"barrier":return 3;case"sampler":return 4;case"effect":return 5;default:return-1}},pp=new Set;let st,iu=1,mp=0,xu=0,Br=null;const Zw=e=>{st=e},Jw=e=>{Br=e},R_=(e,t)=>{if(e){for(;e&&!e.reg[t];)e=e.parent;if(e)return e}return null},y3=(e,t,r,a)=>{const s=R_(e,r.id);return s?s.reg[r.id]:t?(Co(t,r,a),t.reg[r.id]):r},b3=e=>e,Co=(e,t,r,a,s)=>{const l=e.reg;if(l[t.id])return;const u=t.sid,d={id:t.id,current:t.initial,meta:t.meta};if(d.id in e.values.idMap)d.current=e.values.idMap[d.id];else if(u&&u in e.values.sidMap&&!(u in e.sidIdMap)){var f;const h=t==null||(f=t.meta)===null||f===void 0?void 0:f.serialize;d.current=(e.fromSerialize&&h!=="ignore"&&(h==null?void 0:h.read)||b3)(e.values.sidMap[u])}else if(t.before&&!s){let h=0;const v=r||!t.noInit||a;bn(t.before,(g=>{switch(g.type){case"map":{const b=g.from;if((b||g.fn)&&(b&&Co(e,b,r,a),v)){const w=b&&l[b.id].current;d.current=g.fn?g.fn(w):w}break}case"field":Co(e,g.from,r,a),h||(h=1,d.current=Array.isArray(d.current)?[...d.current]:{...d.current}),v&&(d.current[g.field]=l[l[g.from.id].id].current)}}))}u&&(e.sidIdMap[u]=t.id),l[t.id]=d},w3=(e,t,r)=>{try{return t(bu(r),e.scope,r)}catch(a){console.error(a),e.fail=1,e.failReason=a}},pl=(e,t={})=>(hr(e)&&(pl(e.or,t),sd(e,((r,a)=>{Ln(r)||a==="or"||a==="and"||(t[a]=r)})),pl(e.and,t)),t),e1=(e,t)=>{hp(e.next,t),hp(ld(e),t),hp(cd(e),t)},t1=["on","reset","sample","split","merge","guard","forward"],_u=(e,t,r,a,s)=>{let l;e.next.length=0,e.seq.length=0,e.scope=null;let u=cd(e);const{stateRef:d,defaultShape:f,isRegion:h,op:v}=e.meta;if(d&&(d.before=[],e.meta.stateRef=null),f)for(const b in f)f[b]=null;const g=h?e:a;if(u.length>0){const b=fp(t1,v),w=!h&&!s,S=w&&r&&!b;for(;l=u.pop();){const T=fp(l.next,e);e1(l,e),h&&_u(l,0,0,e,1),T||(l.family.triggers-=1),(t||S||w&&l.family.type==="crosslink"&&!b||s&&fp(t1,l.meta.op)&&(T&&l.next.length===0||!T&&l.family.triggers<=0))&&_u(l,t,r&&l.meta.op!=="on",g,s)}}for(u=ld(e);l=u.pop();)e1(l,e),r&&l.family.type==="crosslink"&&_u(l,t,l.meta.op!=="on",g,s)},au=e=>e.clear(),Yu=(e,{deep:t}={})=>{let r=0;if(e.ownerSet&&e.ownerSet.delete(e),A_(e)){r=1;const a=e.history;au(a.events),au(a.effects),au(a.stores),au(a.domains)}_u(_n(e),!!t,r,null,0)},x3=e=>tm((()=>Yu(e))),fa=(e,t,r,a,s)=>Pr({node:r,parent:e,child:t,scope:{fn:s},meta:{op:a},family:{owners:[e,t],links:t},regional:1}),j_=(e,t)=>(At(Gr(t),".watch argument should be a function"),x3(Pr({scope:{fn:t},node:[sg({fn:ud})],parent:e,meta:{op:"watch"},family:{owners:e},regional:1}))),_3=(e,t,r="event")=>{dl(e)&&dl(e).hooks[r](t)},U_=(e,t)=>Hr(e,"unitTrace",t),dd=e=>"",$_=(e,t,r,a)=>{const s=pl(r),l=e==="domain",u=c3(),{sid:d=null,named:f=null,domain:h=null,parent:v=h}=s,g=f||s.name||(l?"":u),b=e3(g,v),w={op:t.kind=e,name:t.shortName=g,sid:t.sid=h3(d),named:f,unitId:t.id=u,serialize:s.serialize,derived:s.derived,config:s,unitTrace:a};return t.targetable=!s.derived,t.parent=v,t.compositeName=b,t.defaultConfig=s,t.getType=()=>(fl(0,"getType","compositeName.fullName"),b.fullName),!l&&(t.subscribe=S=>(N_(S),t.watch(Gr(S)?S:T=>S.next&&S.next(T))),t[a3]=()=>t),w},gp=(e,t,r,a)=>{let s;hr(r)&&(s=r,r=r.fn);const l=ut({name:`${e.shortName} → *`,derived:1,and:s});return fa(e,l,a,t,r),l},Su="undefined is used to skip updates. To allow undefined as a value provide explicit { skipVoid: false } option",L_=(e,t,r,a,s)=>{const l=ur(t),u=Un({store:l,to:"a",priority:"read"});r===To&&(u.data.softRead=1);const d=[u,Ir(a)];Wn("storeOnMap",l,d,Bn(e)&&ur(e));const f=fa(e,t,d,r,s);return r!==To&&Hr(f,"onTrigger",_n(e).id),f},S3=(e,t,r,a,s,l,u)=>{const d=va("combine",s),f=e?E=>[...E]:E=>({...E}),h=e?[]:{},v=f(h),g=Eo(v),b=Eo(1);g.type=e?"list":"shape",g.noInit=1,Wn("combineBase",g,b);const w=wn(v,{name:JM(r),derived:1,...u,and:s});U_(w,a);const S=ur(w);S.noInit=1,Hr(w,"isCombine",1),Fu(w,[Pr({meta:{stateRef:g}})]);const T=la(g);T.order={priority:"barrier"};const k=Un({store:S,to:"b",priority:"read"});k.data.softRead=1;const _=[ko(((E,M,D)=>(D.scope&&!D.scope.reg[g.id]&&(D.c=1),E))),T,Un({store:b,to:"b"}),ko(((E,{key:M},D)=>{if(D.c||E!==D.a[M])return t&&D.b&&(D.a=f(D.a)),D.a[M]=E,1}),1),Un({from:"a",target:g}),Un({from:"value",store:0,target:b}),Un({from:"value",store:1,target:b,priority:"barrier",batch:1}),la(g,1,1),l&&Ir(),k];if(sd(r,((E,M)=>{if(!Bn(E))return At(!Ai(E)&&!Ln(E),`combine expects a store in a field ${M}`,d),void(v[M]=h[M]=E);h[M]=E.defaultState,v[M]=E.getState();const D=fa(E,w,_,"combine",l);D.scope.key=M;const j=ur(E);rm(g,{type:"field",field:M,from:j}),Wn("combineField",j,D)})),w.defaultShape=r,Hr(w,"defaultShape",r),rm(S,{type:To,from:g,fn:l}),l){const E=l(v);!Ln(E)||u&&"skipVoid"in u||console.error(`${d}: ${Su}`),S.current=E,S.initial=E,w.defaultState=E}else w.defaultState=h;return w};Pr({node:[sg({fn:({fn:e,value:t})=>e(t)})],meta:{op:"fx",fx:"sidechain"}});const T3=["source","clock","target"],H_=(e,t)=>e+`: ${t} should be defined`,k3=(e,t,r,a,s,l,u,d,f,h,v,g)=>{const b=va(e,d),w=!!s;At(!Ln(r)||!Ln(t),H_(b,"either source or clock"));let S=0;Ln(r)?S=1:Ai(r)||(r=So(r)),Ln(t)?t=r:(nm(t,b,"clock"),Array.isArray(t)&&(t=fa(t,[],[],e))),S&&(r=t),d||u?d&&u?d.name=u:!d&&u&&(d={name:u}):u=r.shortName;let T="none";a&&(Ai(a)?T="unit":(At(Gr(a),"`filter` should be function or unit"),T="fn")),s?(nm(s,b,"target"),p3(b,s)):T==="none"&&h&&Bn(r)&&Bn(t)?s=wn(l?l(Ks(ur(r)),Ks(ur(t))):Ks(ur(r)),{name:u,sid:g,or:d}):(s=ut({name:u,derived:1,or:d}),Wn("sampleTarget",_n(s)));const k=Eo();let _=[];const E=[];if(T==="unit"){const[j,Y,B,ee]=n1(a,s,t,k,e);ee&&$n(E,ee),B||_.push(...vp(Y)),_.push(...vp(j))}const M=[];if(S)f&&$n(M,la(k,1,1));else{const[j,Y,B,ee]=n1(r,s,t,k,e);ee&&$n(E,ee),B||M.push(...vp(Y)),$n(M,la(j,1,f))}const D=fa(t,s,[Wn(),Un({from:"stack",target:k}),...M,..._,la(k),T==="fn"&&Ir(((j,Y,{a:B})=>a(j,B)),1),l&&Ir(z_),Wn("sampleSourceUpward",w)],e,l);return Fu(r,[D]),Fu(D,E),Object.assign(D.meta,d,{joint:1,stateRef:k}),U_(D,dd()),s},vp=e=>[la(e),ko(((t,r,{a})=>a),1)],n1=(e,t,r,a,s)=>{const l=Bn(e),u=l?ur(e):Eo(),d=Eo(l);let f;return l||(f=Pr({parent:e,node:[Un({from:"stack",target:u}),Un({from:"value",store:1,target:d})],family:{owners:[...new Set([e,t,r].flat())],links:t},meta:{op:s},regional:1})),Wn("sampleSource",d,u,a),[u,d,l,f]};var yp={exports:{}},bp={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r1;function E3(){if(r1)return bp;r1=1;var e=xl(),t=p_();function r(h,v){return h===v&&(h!==0||1/h===1/v)||h!==h&&v!==v}var a=typeof Object.is=="function"?Object.is:r,s=t.useSyncExternalStore,l=e.useRef,u=e.useEffect,d=e.useMemo,f=e.useDebugValue;return bp.useSyncExternalStoreWithSelector=function(h,v,g,b,w){var S=l(null);if(S.current===null){var T={hasValue:!1,value:null};S.current=T}else T=S.current;S=d(function(){function _(Y){if(!E){if(E=!0,M=Y,Y=b(Y),w!==void 0&&T.hasValue){var B=T.value;if(w(B,Y))return D=B}return D=Y}if(B=D,a(M,Y))return B;var ee=b(Y);return w!==void 0&&w(B,ee)?(M=Y,B):(M=Y,D=ee)}var E=!1,M,D,j=g===void 0?null:g;return[function(){return _(v())},j===null?void 0:function(){return _(j())}]},[v,g,b,w]);var k=s(h,S[0],S[1]);return u(function(){T.hasValue=!0,T.value=k},[k]),f(k),k},bp}var i1;function C3(){return i1||(i1=1,yp.exports=E3()),yp.exports}var A3=C3();const M3=Em(A3);function O3(e,t){const r=ru.unit(e);let a={};r?a={unit:e}:"@@unitShape"in e?typeof e["@@unitShape"]=="function"?a=e["@@unitShape"]():a1("expect @@unitShape to be a function"):a=e;const s=Array.isArray(a),l=cr.useRef({stale:1,justSubscribed:0,scope:t}),[u,d,f,h,v]=cr.useMemo((()=>{l.current.stale=1;const S=Array.isArray(a)?[]:{},T=[],k=[],_=[],E=[];for(const M in a){if(!{}.hasOwnProperty.call(a,M))continue;const D=a[M];ru.unit(D)||a1(`expect useUnit ${r?"argument":`value in key "${M}"`} to be a unit`),ru.event(D)||ru.effect(D)?(S[M]=t?n3(D,{scope:t}):D,_.push(M),E.push(D)):(S[M]=null,T.push(M),k.push(D))}return[S,T,k,_,E]}),[l,t,...Object.keys(a),...Object.values(a)]),g=cr.useRef({value:u,storeKeys:d,eventKeys:h,eventValues:v}),b=cr.useCallback((S=>{const T=l.current;return T.justSubscribed=1,r3({unit:f,fn:()=>{T.stale||(T.stale=1,S())},scope:t,batch:1})}),[f,t,g,l]),w=cr.useCallback((()=>{const S=g.current,T=l.current;let k,_=0;const E=S.value,M=S.storeKeys,D=S.eventKeys,j=S.eventValues,Y=t!==T.scope;if(T.stale||T.justSubscribed||Y){_=!T.justSubscribed||Y,k=s?[...u]:{...u},M.length===d.length&&D.length===h.length||(_=1);for(let B=0;B<d.length;B++){const ee=D3(f[B],t),ne=d[B];_||(_=M.includes(ne)?E[ne]!==ee:1),k[ne]=ee}for(let B=0;B<h.length;B++){const ee=v[B],ne=h[B];_||(_=D.includes(ne)?j[D.indexOf(ne)]!==ee:1)}}return _&&(S.value=k),S.storeKeys=d,S.eventKeys=h,S.eventValues=v,T.stale=0,T.justSubscribed=!_,T.scope=t,r?S.value.unit:S.value}),[b,f,v,t,g,l]);return z3(b,w,w)}function N3(e){return cr.useContext(I_)}function Ao(e,t){return O3(e,N3())}const a1=e=>{throw Error(e)};typeof window<"u"?cr.useLayoutEffect:cr.useEffect;const{useSyncExternalStore:z3}=DM,{useSyncExternalStoreWithSelector:UD}=M3,D3=(e,t)=>t?t.getState(e):e.getState(),I_=cr.createContext(null),{Provider:$D}=I_,B_=["кот","собака","птица","рыба","корова","лошадь","свинья","утка","курица","петух","тигр","лев","слон","жираф","медведь","волк","лиса","еж","кролик","коала","панда","кенгуру","обезьяна","змея","лягушка","крокодил","черепаха","дельфин","акула","кит","осьминог","краб","пингвин","страус","фламинго","орел","сова","воробей","голубь","аист","сурикат","бегемот","носорог","антилопа","яблоко","груша","банан","апельсин","лимон","арбуз","дыня","виноград","вишня","клубника","малина","ежевика","морковь","картошка","лук","чеснок","капуста","огурец","помидор","перец","тыква","баклажан","гриб","хлеб","пицца","бургер","суп","торт","мороженое","шоколад","печенье","конфета","чай","кофе","сок","вода","молоко","стол","стул","кровать","шкаф","диван","лампа","телевизор","компьютер","телефон","часы","зеркало","окно","дверь","книга","тетрадь","ручка","карандаш","кисть","краска","бутылка","стакан","тарелка","вилка","ложка","нож","чайник","сумка","рюкзак","шапка","куртка","пальто","ботинки","носки","перчатки","зонт","очки","дерево","куст","трава","цветок","роза","подсолнух","ромашка","тюльпан","лес","гора","река","озеро","море","пляж","остров","пещера","облако","солнце","луна","звезда","дождь","снег","молния","радуга","ветер","волна","машина","поезд","самолет","корабль","лодка","велосипед","мотоцикл","автобус","троллейбус","трамвай","метро","такси","ракета","вертолет","танк","трактор","грузовик","катер","учитель","врач","повар","пожарный","полицейский","солдат","строитель","фермер","летчик","моряк","шофер","художник","музыкант","писатель","рыбак","спортсмен","танцор","актёр","дом","замок","школа","магазин","церковь","мост","дорога","парк","площадь","фонтан","статуя","флаг","карта","шар","кукла","мяч","пирамидка","машинка","самокат","скейт","качели","горка","песочница","робот","ракета","кот","собака","птица","рыба","корова","лошадь","свинья","утка","курица","петух","тигр","лев","слон","жираф","медведь","волк","лиса","еж","кролик","коала","панда","кенгуру","обезьяна","змея","лягушка","крокодил","черепаха","дельфин","акула","кит","осьминог","краб","пингвин","страус","фламинго","орел","сова","воробей","голубь","аист","сурикат","бегемот","носорог","антилопа","яблоко","груша","банан","апельсин","лимон","арбуз","дыня","виноград","вишня","клубника","малина","ежевика","морковь","картошка","лук","чеснок","капуста","огурец","помидор","перец","тыква","баклажан","гриб","хлеб","пицца","бургер","суп","торт","мороженое","шоколад","печенье","конфета","чай","кофе","сок","вода","молоко","стол","стул","кровать","шкаф","диван","лампа","телевизор","компьютер","телефон","часы","зеркало","окно","дверь","книга","тетрадь"],q_=600;function F_(e,t){let r,a=()=>{};e.watch(s=>{s!==r&&(a(),a=t(s),r=s)})}(()=>{const e=window.location.pathname,t=e.match(/\/scribble\/room\/([^\/]+)/);if(t)return t[1];if(e.endsWith("/words"))return"words";if(e.endsWith("/paintings"))return"paintings";const r=window.location.search.slice(1);if(r)return r;const a="/scribble/";if(e.startsWith(a)){const s=e.slice(a.length);if(s&&!s.includes("/"))return s}return""})();function R3(e){return e[Math.floor(Math.random()*e.length)]}function Y_(e){const t=[];for(;t.length<e;){const r=R3(B_);t.includes(r)||t.push(r)}return t}function j3(e,t,r){return Math.max(t,Math.min(e,r))}function Ti(e){return Math.round(e*1e4)/1e4}function ou(e){return Math.round(e*100)/100}function wp(e,t){if(!e)throw new Error(t||"Assertion failed")}function Ls(e){return`${Ti(e.x)},${Ti(e.y)} `}function o1(e,t){return`${Ti((e.x+t.x)/2)},${Ti((e.y+t.y)/2)} `}function U3(){return window.location.pathname.includes("/scribble")?"/scribble/":"/"}function jr(e){const t=U3();return e?`${t}${e}`:t.endsWith("/")?t.slice(0,-1):t}function $3(e,t){const r=L3(e.toLowerCase().trim(),t.toLowerCase().trim());return r===0?"revealed":r<=Math.ceil(e.length/4)?"almost":"none"}function L3(e,t){const r=e.length,a=t.length,s=Array(r+1).fill(null).map(()=>Array(a+1).fill(0));for(let l=0;l<=r;l++)s[l][0]=l;for(let l=0;l<=a;l++)s[0][l]=l;for(let l=1;l<=r;l++)for(let u=1;u<=a;u++){const d=e[l-1]===t[u-1]?0:1;s[l][u]=Math.min(s[l-1][u]+1,s[l][u-1]+1,s[l-1][u-1]+d)}return s[r][a]}const H3={buildTimestamp:parseInt(1764623325312)},I3={linear:e=>e},B3={simulatePressure:!1,smoothing:1,thinning:.1,streamline:0,easing:I3.linear},q3=[3,8,15,20,25],F3=["#111111","#34495e","#f6eee2","#ffffff","#8b4513","#fa3224","#ffa729","#ffd129","#2ecc71","#3498db","#9b59b6","#ff69b4"],Y3="ccgudew",P3="hf1ec1k",X3="t1chi7ru",G3="c1xprte0",V3="f13fsgpf";function Mo({children:e}){const t=Date.now()-H3.buildTimestamp;return Z.jsxs("div",{className:Y3,children:[Z.jsx("header",{className:P3,children:Z.jsx(uo,{href:jr(""),children:Z.jsx("h1",{className:X3,children:"Drawinchi"})})}),Z.jsx("main",{className:G3,children:e}),Z.jsxs("footer",{className:V3,children:[Z.jsx(uo,{href:jr(""),children:"Главная"}),Z.jsx(uo,{href:jr("all-rooms"),children:"Все комнаты"}),Z.jsx(uo,{href:jr("words"),children:"Слова"}),Z.jsx(uo,{href:jr("paintings"),children:"Картины"}),Z.jsxs("p",{children:["build ",(t/(1e3*60)).toFixed(1)," min ago"]})]})]})}const Q3="r6f0ecm";function s1({label:e,value:t,onChange:r,maxLen:a,type:s="text",placeholder:l}){return Z.jsxs("div",{className:Q3,children:[e&&Z.jsx("label",{children:e}),Z.jsx("input",{maxLength:a,type:s,value:t,onChange:u=>r(u.target.value),placeholder:l})]})}const K3="_form_10imy_1",W3="_roomCodeRow_10imy_9",Z3="_joinButton_10imy_14",J3="_divider_10imy_26",eO="_allParties_10imy_49",co={form:K3,roomCodeRow:W3,joinButton:Z3,divider:J3,allParties:eO},tO="r1cb9caz";function nO({children:e,onClick:t,className:r,type:a}){return Z.jsx("button",{type:a||"button",className:`${tO} ${r||""}`,onClick:t,children:e})}function Ft(e){if(typeof e=="number")return(Math.abs(e*2654435761)>>>0).toString(16);if(typeof e=="boolean")return e?"1":"0";if(e===null)return"null";if(e===void 0)return"undefined";if(typeof e=="string"){let t=2166136261;for(let r=0;r<e.length;r++)t^=e.charCodeAt(r),t+=(t<<1)+(t<<4)+(t<<7)+(t<<8)+(t<<24),t=t>>>0;return t.toString(16)}if(Array.isArray(e)){let t=2166136261;for(let r=0;r<e.length;r++){t^=(r+1)*2654435761;const a=Ft(e[r]);for(let s=0;s<a.length;s++)t^=a.charCodeAt(s),t*=16777619,t=t>>>0}return t.toString(16)}if(typeof e=="object"){let t=2166136261;const r=Object.keys(e).sort();for(let a=0;a<r.length;a++){const s=r[a],l=Ft(s);t^=parseInt(l,16),t*=16777619,t=t>>>0;const u=Ft(e[s]);t^=parseInt(u,16),t*=16777619,t=t>>>0}return t.toString(16)}return Ft(String(e))}const vt={Remove:"remove",Replace:"replace",Add:"add"},P_=Symbol.for("__MUTATIVE_PROXY_DRAFT__"),rO=Symbol("__MUTATIVE_RAW_RETURN_SYMBOL__"),Tu=Symbol.iterator,xn={mutable:"mutable",immutable:"immutable"},ug={};function Ws(e,t){return e instanceof Map?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function l1(e,t){if(t in e){let r=Reflect.getPrototypeOf(e);for(;r;){const a=Reflect.getOwnPropertyDescriptor(r,t);if(a)return a;r=Reflect.getPrototypeOf(r)}}}function dg(e){return Object.getPrototypeOf(e)===Set.prototype}function fg(e){return Object.getPrototypeOf(e)===Map.prototype}function yn(e){var t;return(t=e.copy)!==null&&t!==void 0?t:e.original}function Mi(e){return!!ze(e)}function ze(e){return typeof e!="object"?null:e==null?void 0:e[P_]}function hg(e){var t;const r=ze(e);return r?(t=r.copy)!==null&&t!==void 0?t:r.original:e}function Jn(e,t){if(!e||typeof e!="object")return!1;let r;return Object.getPrototypeOf(e)===Object.prototype||Array.isArray(e)||e instanceof Map||e instanceof Set||!!(t!=null&&t.mark)&&((r=t.mark(e,xn))===xn.immutable||typeof r=="function")}function X_(e,t=[]){if(Object.hasOwnProperty.call(e,"key")){const r=e.parent.copy,a=ze(Xr(r,e.key));if(a!==null&&(a==null?void 0:a.original)!==e.original)return null;const s=e.parent.type===3,l=s?Array.from(e.parent.setMap.keys()).indexOf(e.key):e.key;if(!(s&&r.size>l||Ws(r,l)))return null;t.push(l)}if(e.parent)return X_(e.parent,t);t.reverse();try{iO(e.copy,t)}catch{return null}return t}function ya(e){return Array.isArray(e)?1:e instanceof Map?2:e instanceof Set?3:0}function Xr(e,t){return ya(e)===2?e.get(t):e[t]}function Tl(e,t,r){ya(e)===2?e.set(t,r):e[t]=r}function xp(e,t){const r=ze(e);return(r?yn(r):e)[t]}function Yr(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function om(e){if(e)for(;e.finalities.revoke.length>0;)e.finalities.revoke.pop()()}function sa(e,t){return t?e:[""].concat(e).map(r=>{const a=`${r}`;return a.indexOf("/")===-1&&a.indexOf("~")===-1?a:a.replace(/~/g,"~0").replace(/\//g,"~1")}).join("/")}function iO(e,t){for(let r=0;r<t.length-1;r+=1){const a=t[r];if(e=Xr(ya(e)===3?Array.from(e):e,a),typeof e!="object")throw new Error(`Cannot resolve patch at '${t.join("/")}'.`)}return e}function aO(e){const t=Object.create(Object.getPrototypeOf(e));return Reflect.ownKeys(e).forEach(r=>{let a=Reflect.getOwnPropertyDescriptor(e,r);if(a.enumerable&&a.configurable&&a.writable){t[r]=e[r];return}a.writable||(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(a={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[r]}),Reflect.defineProperty(t,r,a)}),t}const oO=Object.prototype.propertyIsEnumerable;function G_(e,t){let r;if(Array.isArray(e))return Array.prototype.concat.call(e);if(e instanceof Set){if(!dg(e)){const a=Object.getPrototypeOf(e).constructor;return new a(e.values())}return Set.prototype.difference?Set.prototype.difference.call(e,new Set):new Set(e.values())}else if(e instanceof Map){if(!fg(e)){const a=Object.getPrototypeOf(e).constructor;return new a(e)}return new Map(e)}else if(t!=null&&t.mark&&(r=t.mark(e,xn),r!==void 0)&&r!==xn.mutable){if(r===xn.immutable)return aO(e);if(typeof r=="function"){if(t.enablePatches||t.enableAutoFreeze)throw new Error("You can't use mark and patches or auto freeze together.");return r()}throw new Error(`Unsupported mark result: ${r}`)}else if(typeof e=="object"&&Object.getPrototypeOf(e)===Object.prototype){const a={};return Object.keys(e).forEach(s=>{a[s]=e[s]}),Object.getOwnPropertySymbols(e).forEach(s=>{oO.call(e,s)&&(a[s]=e[s])}),a}else throw new Error("Please check mark() to ensure that it is a stable marker draftable function.")}function Xt(e){e.copy||(e.copy=G_(e.original,e.options))}function Fs(e){if(!Jn(e))return hg(e);if(Array.isArray(e))return e.map(Fs);if(e instanceof Map){const r=Array.from(e.entries()).map(([a,s])=>[a,Fs(s)]);if(!fg(e)){const a=Object.getPrototypeOf(e).constructor;return new a(r)}return new Map(r)}if(e instanceof Set){const r=Array.from(e).map(Fs);if(!dg(e)){const a=Object.getPrototypeOf(e).constructor;return new a(r)}return new Set(r)}const t=Object.create(Object.getPrototypeOf(e));for(const r in e)t[r]=Fs(e[r]);return t}function ku(e){return Mi(e)?Fs(e):e}function dr(e){var t;e.assignedMap=(t=e.assignedMap)!==null&&t!==void 0?t:new Map,e.operated||(e.operated=!0,e.parent&&dr(e.parent))}function c1(){throw new Error("Cannot modify frozen object")}function fo(e,t,r,a,s){{r=r??new WeakMap,a=a??[],s=s??[];const u=r.has(e)?r.get(e):e;if(a.length>0){const d=a.indexOf(u);if(u&&typeof u=="object"&&d!==-1)throw a[0]===u?new Error("Forbids circular reference"):new Error(`Forbids circular reference: ~/${s.slice(0,d).map((f,h)=>{if(typeof f=="symbol")return`[${f.toString()}]`;const v=a[h];return typeof f=="object"&&(v instanceof Map||v instanceof Set)?Array.from(v.keys()).indexOf(f):f}).join("/")}`);a.push(u),s.push(t)}else a.push(u)}if(Object.isFrozen(e)||Mi(e)){a.pop(),s.pop();return}switch(ya(e)){case 2:for(const[d,f]of e)fo(d,d,r,a,s),fo(f,d,r,a,s);e.set=e.clear=e.delete=c1;break;case 3:for(const d of e)fo(d,d,r,a,s);e.add=e.clear=e.delete=c1;break;case 1:Object.freeze(e);let u=0;for(const d of e)fo(d,u,r,a,s),u+=1;break;default:Object.freeze(e),Object.keys(e).forEach(d=>{const f=e[d];fo(f,d,r,a,s)})}a.pop(),s.pop()}function pg(e,t){const r=ya(e);if(r===0)Reflect.ownKeys(e).forEach(a=>{t(a,e[a],e)});else if(r===1){let a=0;for(const s of e)t(a,s,e),a+=1}else e.forEach((a,s)=>t(s,a,e))}function V_(e,t,r){if(Mi(e)||!Jn(e,r)||t.has(e)||Object.isFrozen(e))return;const a=e instanceof Set,s=a?new Map:void 0;if(t.add(e),pg(e,(l,u)=>{var d;if(Mi(u)){const f=ze(u);Xt(f);const h=!((d=f.assignedMap)===null||d===void 0)&&d.size||f.operated?f.copy:f.original;Tl(a?s:e,l,h)}else V_(u,t,r)}),s){const l=e,u=Array.from(l);l.clear(),u.forEach(d=>{l.add(s.has(d)?s.get(d):d)})}}function sO(e,t){const r=e.type===3?e.setMap:e.copy;e.finalities.revoke.length>1&&e.assignedMap.get(t)&&r&&V_(Xr(r,t),e.finalities.handledSet,e.options)}function sm(e){e.type===3&&e.copy&&(e.copy.clear(),e.setMap.forEach(t=>{e.copy.add(hg(t))}))}function lm(e,t,r,a){if(e.operated&&e.assignedMap&&e.assignedMap.size>0&&!e.finalized){if(r&&a){const l=X_(e);l&&t(e,l,r,a)}e.finalized=!0}}function mg(e,t,r,a){const s=ze(r);s&&(s.callbacks||(s.callbacks=[]),s.callbacks.push((l,u)=>{var d;const f=e.type===3?e.setMap:e.copy;if(Yr(Xr(f,t),r)){let h=s.original;s.copy&&(h=s.copy),sm(e),lm(e,a,l,u),e.options.enableAutoFreeze&&(e.options.updatedValues=(d=e.options.updatedValues)!==null&&d!==void 0?d:new WeakMap,e.options.updatedValues.set(h,s.original)),Tl(f,t,h)}}),e.options.enableAutoFreeze&&s.finalities!==e.finalities&&(e.options.enableAutoFreeze=!1)),Jn(r,e.options)&&e.finalities.draft.push(()=>{const l=e.type===3?e.setMap:e.copy;Yr(Xr(l,t),r)&&sO(e,t)})}function lO(e,t,r,a,s){let{original:l,assignedMap:u,options:d}=e,f=e.copy;f.length<l.length&&([l,f]=[f,l],[r,a]=[a,r]);for(let h=0;h<l.length;h+=1)if(u.get(h.toString())&&f[h]!==l[h]){const v=t.concat([h]),g=sa(v,s);r.push({op:vt.Replace,path:g,value:ku(f[h])}),a.push({op:vt.Replace,path:g,value:ku(l[h])})}for(let h=l.length;h<f.length;h+=1){const v=t.concat([h]),g=sa(v,s);r.push({op:vt.Add,path:g,value:ku(f[h])})}if(l.length<f.length){const{arrayLengthAssignment:h=!0}=d.enablePatches;if(h){const v=t.concat(["length"]),g=sa(v,s);a.push({op:vt.Replace,path:g,value:l.length})}else for(let v=f.length;l.length<v;v-=1){const g=t.concat([v-1]),b=sa(g,s);a.push({op:vt.Remove,path:b})}}}function cO({original:e,copy:t,assignedMap:r},a,s,l,u){r.forEach((d,f)=>{const h=Xr(e,f),v=ku(Xr(t,f)),g=d?Ws(e,f)?vt.Replace:vt.Add:vt.Remove;if(Yr(h,v)&&g===vt.Replace)return;const b=a.concat(f),w=sa(b,u);s.push(g===vt.Remove?{op:g,path:w}:{op:g,path:w,value:v}),l.push(g===vt.Add?{op:vt.Remove,path:w}:g===vt.Remove?{op:vt.Add,path:w,value:h}:{op:vt.Replace,path:w,value:h})})}function uO({original:e,copy:t},r,a,s,l){let u=0;e.forEach(d=>{if(!t.has(d)){const f=r.concat([u]),h=sa(f,l);a.push({op:vt.Remove,path:h,value:d}),s.unshift({op:vt.Add,path:h,value:d})}u+=1}),u=0,t.forEach(d=>{if(!e.has(d)){const f=r.concat([u]),h=sa(f,l);a.push({op:vt.Add,path:h,value:d}),s.unshift({op:vt.Remove,path:h,value:d})}u+=1})}function ml(e,t,r,a){const{pathAsArray:s=!0}=e.options.enablePatches;switch(e.type){case 0:case 2:return cO(e,t,r,a,s);case 1:return lO(e,t,r,a,s);case 3:return uO(e,t,r,a,s)}}const Pu=(e,t,r=!1)=>{if(typeof e=="object"&&e!==null&&(!Jn(e,t)||r))throw new Error("Strict mode: Mutable data cannot be accessed directly, please use 'unsafe(callback)' wrap.")},cm={get size(){return yn(ze(this)).size},has(e){return yn(ze(this)).has(e)},set(e,t){const r=ze(this),a=yn(r);return(!a.has(e)||!Yr(a.get(e),t))&&(Xt(r),dr(r),r.assignedMap.set(e,!0),r.copy.set(e,t),mg(r,e,t,ml)),this},delete(e){if(!this.has(e))return!1;const t=ze(this);return Xt(t),dr(t),t.original.has(e)?t.assignedMap.set(e,!1):t.assignedMap.delete(e),t.copy.delete(e),!0},clear(){const e=ze(this);if(this.size){Xt(e),dr(e),e.assignedMap=new Map;for(const[t]of e.original)e.assignedMap.set(t,!1);e.copy.clear()}},forEach(e,t){const r=ze(this);yn(r).forEach((a,s)=>{e.call(t,this.get(s),s,this)})},get(e){var t,r;const a=ze(this),s=yn(a).get(e),l=((r=(t=a.options).mark)===null||r===void 0?void 0:r.call(t,s,xn))===xn.mutable;if(a.options.strict&&Pu(s,a.options,l),l||a.finalized||!Jn(s,a.options)||s!==a.original.get(e))return s;const u=ug.createDraft({original:s,parentDraft:a,key:e,finalities:a.finalities,options:a.options});return Xt(a),a.copy.set(e,u),u},keys(){return yn(ze(this)).keys()},values(){const e=this.keys();return{[Tu]:()=>this.values(),next:()=>{const t=e.next();return t.done?t:{done:!1,value:this.get(t.value)}}}},entries(){const e=this.keys();return{[Tu]:()=>this.entries(),next:()=>{const t=e.next();if(t.done)return t;const r=this.get(t.value);return{done:!1,value:[t.value,r]}}}},[Tu](){return this.entries()}},dO=Reflect.ownKeys(cm),u1=(e,t,{isValuesIterator:r})=>()=>{var a,s;const l=t.next();if(l.done)return l;const u=l.value;let d=e.setMap.get(u);const f=ze(d),h=((s=(a=e.options).mark)===null||s===void 0?void 0:s.call(a,d,xn))===xn.mutable;if(e.options.strict&&Pu(u,e.options,h),!h&&!f&&Jn(u,e.options)&&!e.finalized&&e.original.has(u)){const v=ug.createDraft({original:u,parentDraft:e,key:u,finalities:e.finalities,options:e.options});e.setMap.set(u,v),d=v}else f&&(d=f.proxy);return{done:!1,value:r?d:[d,d]}},Xu={get size(){return ze(this).setMap.size},has(e){const t=ze(this);if(t.setMap.has(e))return!0;Xt(t);const r=ze(e);return!!(r&&t.setMap.has(r.original))},add(e){const t=ze(this);return this.has(e)||(Xt(t),dr(t),t.assignedMap.set(e,!0),t.setMap.set(e,e),mg(t,e,e,ml)),this},delete(e){if(!this.has(e))return!1;const t=ze(this);Xt(t),dr(t);const r=ze(e);return r&&t.setMap.has(r.original)?(t.assignedMap.set(r.original,!1),t.setMap.delete(r.original)):(!r&&t.setMap.has(e)?t.assignedMap.set(e,!1):t.assignedMap.delete(e),t.setMap.delete(e))},clear(){if(!this.size)return;const e=ze(this);Xt(e),dr(e);for(const t of e.original)e.assignedMap.set(t,!1);e.setMap.clear()},values(){const e=ze(this);Xt(e);const t=e.setMap.keys();return{[Symbol.iterator]:()=>this.values(),next:u1(e,t,{isValuesIterator:!0})}},entries(){const e=ze(this);Xt(e);const t=e.setMap.keys();return{[Symbol.iterator]:()=>this.entries(),next:u1(e,t,{isValuesIterator:!1})}},keys(){return this.values()},[Tu](){return this.values()},forEach(e,t){const r=this.values();let a=r.next();for(;!a.done;)e.call(t,a.value,a.value,this),a=r.next()}};Set.prototype.difference&&Object.assign(Xu,{intersection(e){return Set.prototype.intersection.call(new Set(this.values()),e)},union(e){return Set.prototype.union.call(new Set(this.values()),e)},difference(e){return Set.prototype.difference.call(new Set(this.values()),e)},symmetricDifference(e){return Set.prototype.symmetricDifference.call(new Set(this.values()),e)},isSubsetOf(e){return Set.prototype.isSubsetOf.call(new Set(this.values()),e)},isSupersetOf(e){return Set.prototype.isSupersetOf.call(new Set(this.values()),e)},isDisjointFrom(e){return Set.prototype.isDisjointFrom.call(new Set(this.values()),e)}});const fO=Reflect.ownKeys(Xu),Q_={get(e,t,r){var a,s;const l=(a=e.copy)===null||a===void 0?void 0:a[t];if(l&&e.finalities.draftsCache.has(l))return l;if(t===P_)return e;let u;if(e.options.mark){const h=t==="size"&&(e.original instanceof Map||e.original instanceof Set)?Reflect.get(e.original,t):Reflect.get(e.original,t,r);if(u=e.options.mark(h,xn),u===xn.mutable)return e.options.strict&&Pu(h,e.options,!0),h}const d=yn(e);if(d instanceof Map&&dO.includes(t))return t==="size"?Object.getOwnPropertyDescriptor(cm,"size").get.call(e.proxy):cm[t].bind(e.proxy);if(d instanceof Set&&fO.includes(t))return t==="size"?Object.getOwnPropertyDescriptor(Xu,"size").get.call(e.proxy):Xu[t].bind(e.proxy);if(!Ws(d,t)){const h=l1(d,t);return h?"value"in h?h.value:(s=h.get)===null||s===void 0?void 0:s.call(e.proxy):void 0}const f=d[t];if(e.options.strict&&Pu(f,e.options),e.finalized||!Jn(f,e.options))return f;if(f===xp(e.original,t)){if(Xt(e),e.copy[t]=gg({original:e.original[t],parentDraft:e,key:e.type===1?Number(t):t,finalities:e.finalities,options:e.options}),typeof u=="function"){const h=ze(e.copy[t]);return Xt(h),dr(h),h.copy}return e.copy[t]}return Mi(f)&&e.finalities.draftsCache.add(f),f},set(e,t,r){var a;if(e.type===3||e.type===2)throw new Error("Map/Set draft does not support any property assignment.");let s;if(e.type===1&&t!=="length"&&!(Number.isInteger(s=Number(t))&&s>=0&&(t===0||s===0||String(s)===String(t))))throw new Error("Only supports setting array indices and the 'length' property.");const l=l1(yn(e),t);if(l!=null&&l.set)return l.set.call(e.proxy,r),!0;const u=xp(yn(e),t),d=ze(u);return d&&Yr(d.original,r)?(e.copy[t]=r,e.assignedMap=(a=e.assignedMap)!==null&&a!==void 0?a:new Map,e.assignedMap.set(t,!1),!0):(Yr(r,u)&&(r!==void 0||Ws(e.original,t))||(Xt(e),dr(e),Ws(e.original,t)&&Yr(r,e.original[t])?e.assignedMap.delete(t):e.assignedMap.set(t,!0),e.copy[t]=r,mg(e,t,r,ml)),!0)},has(e,t){return t in yn(e)},ownKeys(e){return Reflect.ownKeys(yn(e))},getOwnPropertyDescriptor(e,t){const r=yn(e),a=Reflect.getOwnPropertyDescriptor(r,t);return a&&{writable:!0,configurable:e.type!==1||t!=="length",enumerable:a.enumerable,value:r[t]}},getPrototypeOf(e){return Reflect.getPrototypeOf(e.original)},setPrototypeOf(){throw new Error("Cannot call 'setPrototypeOf()' on drafts")},defineProperty(){throw new Error("Cannot call 'defineProperty()' on drafts")},deleteProperty(e,t){var r;return e.type===1?Q_.set.call(this,e,t,void 0,e.proxy):(xp(e.original,t)!==void 0||t in e.original?(Xt(e),dr(e),e.assignedMap.set(t,!1)):(e.assignedMap=(r=e.assignedMap)!==null&&r!==void 0?r:new Map,e.assignedMap.delete(t)),e.copy&&delete e.copy[t],!0)}};function gg(e){const{original:t,parentDraft:r,key:a,finalities:s,options:l}=e,u=ya(t),d={type:u,finalized:!1,parent:r,original:t,copy:null,proxy:null,finalities:s,options:l,setMap:u===3?new Map(t.entries()):void 0};(a||"key"in e)&&(d.key=a);const{proxy:f,revoke:h}=Proxy.revocable(u===1?Object.assign([],d):d,Q_);if(s.revoke.push(h),d.proxy=f,r){const v=r;v.finalities.draft.push((g,b)=>{var w,S;const T=ze(f);let k=v.type===3?v.setMap:v.copy;const _=Xr(k,a),E=ze(_);if(E){let M=E.original;E.operated&&(M=hg(_)),sm(E),lm(E,ml,g,b),v.options.enableAutoFreeze&&(v.options.updatedValues=(w=v.options.updatedValues)!==null&&w!==void 0?w:new WeakMap,v.options.updatedValues.set(M,E.original)),Tl(k,a,M)}(S=T.callbacks)===null||S===void 0||S.forEach(M=>{M(g,b)})})}else{const v=ze(f);v.finalities.draft.push((g,b)=>{sm(v),lm(v,ml,g,b)})}return f}ug.createDraft=gg;function hO(e,t,r,a,s){var l;const u=ze(e),d=(l=u==null?void 0:u.original)!==null&&l!==void 0?l:e,f=!!t.length;if(u!=null&&u.operated)for(;u.finalities.draft.length>0;)u.finalities.draft.pop()(r,a);const h=f?t[0]:u?u.operated?u.copy:u.original:e;return u&&om(u),s&&fo(h,h,u==null?void 0:u.options.updatedValues),[h,r&&f?[{op:vt.Replace,path:[],value:t[0]}]:r,a&&f?[{op:vt.Replace,path:[],value:d}]:a]}function pO(e,t){var r;const a={draft:[],revoke:[],handledSet:new WeakSet,draftsCache:new WeakSet};let s,l;t.enablePatches&&(s=[],l=[]);const d=((r=t.mark)===null||r===void 0?void 0:r.call(t,e,xn))===xn.mutable||!Jn(e,t)?e:gg({original:e,parentDraft:null,finalities:a,options:t});return[d,(f=[])=>{const[h,v,g]=hO(d,f,s,l,t.enableAutoFreeze);return t.enablePatches?[h,v,g]:h}]}function um(e){const{rootDraft:t,value:r,useRawReturn:a=!1,isRoot:s=!0}=e;pg(r,(l,u,d)=>{const f=ze(u);if(f&&t&&f.finalities===t.finalities){e.isContainDraft=!0;const h=f.original;if(d instanceof Set){const v=Array.from(d);d.clear(),v.forEach(g=>d.add(l===g?h:g))}else Tl(d,l,h)}else typeof u=="object"&&u!==null&&(e.value=u,e.isRoot=!1,um(e))}),s&&(e.isContainDraft||console.warn("The return value does not contain any draft, please use 'rawReturn()' to wrap the return value to improve performance."),a&&console.warn("The return value contains drafts, please don't use 'rawReturn()' to wrap the return value."))}function K_(e){var t;const r=ze(e);if(!Jn(e,r==null?void 0:r.options))return e;const a=ya(e);if(r&&!r.operated)return r.original;let s;function l(){s=a===2?fg(e)?new Map(e):new(Object.getPrototypeOf(e)).constructor(e):a===3?Array.from(r.setMap.values()):G_(e,r==null?void 0:r.options)}if(r){r.finalized=!0;try{l()}finally{r.finalized=!1}}else s=e;if(pg(s,(u,d)=>{if(r&&Yr(Xr(r.original,u),d))return;const f=K_(d);f!==d&&(s===e&&l(),Tl(s,u,f))}),a===3){const u=(t=r==null?void 0:r.original)!==null&&t!==void 0?t:s;return dg(u)?new Set(s):new(Object.getPrototypeOf(u)).constructor(s)}return s}function d1(e){if(!Mi(e))throw new Error(`current() is only used for Draft, parameter: ${e}`);return K_(e)}const mO=e=>function t(r,a,s){var l,u,d;if(typeof r=="function"&&typeof a!="function")return function(j,...Y){return t(j,B=>r.call(this,B,...Y),a)};const f=r,h=a;let v=s;if(typeof a!="function"&&(v=a),v!==void 0&&Object.prototype.toString.call(v)!=="[object Object]")throw new Error(`Invalid options: ${v}, 'options' should be an object.`);v=Object.assign(Object.assign({},e),v);const g=Mi(f)?d1(f):f,b=Array.isArray(v.mark)?((j,Y)=>{for(const B of v.mark){if(typeof B!="function")throw new Error(`Invalid mark: ${B}, 'mark' should be a function.`);const ee=B(j,Y);if(ee)return ee}}):v.mark,w=(l=v.enablePatches)!==null&&l!==void 0?l:!1,S=(u=v.strict)!==null&&u!==void 0?u:!1,k={enableAutoFreeze:(d=v.enableAutoFreeze)!==null&&d!==void 0?d:!1,mark:b,strict:S,enablePatches:w};if(!Jn(g,k)&&typeof g=="object"&&g!==null)throw new Error("Invalid base state: create() only supports plain objects, arrays, Set, Map or using mark() to mark the state as immutable.");const[_,E]=pO(g,k);if(typeof a!="function"){if(!Jn(g,k))throw new Error("Invalid base state: create() only supports plain objects, arrays, Set, Map or using mark() to mark the state as immutable.");return[_,E]}let M;try{M=h(_)}catch(j){throw om(ze(_)),j}const D=j=>{const Y=ze(_);if(!Mi(j)){if(j!==void 0&&!Yr(j,_)&&(Y!=null&&Y.operated))throw new Error("Either the value is returned as a new non-draft value, or only the draft is modified without returning any value.");const ee=j==null?void 0:j[rO];if(ee){const ne=ee[0];return k.strict&&typeof j=="object"&&j!==null&&um({rootDraft:Y,value:j,useRawReturn:!0}),E([ne])}if(j!==void 0)return typeof j=="object"&&j!==null&&um({rootDraft:Y,value:j}),E([j])}if(j===_||j===void 0)return E([]);const B=ze(j);if(k===B.options){if(B.operated)throw new Error("Cannot return a modified child draft.");return E([d1(j)])}return E([j])};return M instanceof Promise?M.then(D,j=>{throw om(ze(_)),j}):D(M)},Gu=mO();Object.prototype.constructor.toString();function W_(e,t){const r=Object.keys(e),a=Object.keys(t);return r.length===a.length&&Object.keys(e).every(s=>t.hasOwnProperty(s))}function f1(e,t){return Object.keys(e).length===Object.keys(t).length&&Object.keys(e).every(r=>t.hasOwnProperty(r)&&e[r]===t[r])}function Eu(e,t){return typeof e!="object"||typeof t!="object"||e===null||t===null?e===t:W_(e,t)?Object.keys(e).every(r=>Eu(e[r],t[r])):!1}function vg(e){if(!Ys(e))return e;const t={};for(const[r,a]of Object.entries(e))a!==void 0&&(t[r]=a);return t}function Z_(e,t){if(!Ys(e)||!Ys(t))return t;const r=Object.assign({},e);for(const a of Object.keys(t)){if(t[a]===void 0)continue;if(t[a]===null){delete r[a];continue}const s=Ys(e[a])&&Ys(t[a]);r[a]=s?Z_(e[a],t[a]):t[a]}return r}function Ys(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function gO(e,t,r){if(!e||t.length===0)return;let a=e||{};for(let l=0;l<t.length-1;l++){const u=t[l];(!(u in a)||typeof a[u]!="object")&&(a[u]=typeof t[l+1]=="number"?[]:{}),a=a[u]}const s=t[t.length-1];Array.isArray(a)&&typeof s=="number"?a.splice(s,0,r):a[s]=r}function h1(e,t,r){if(!e||t.length===0)return;let a=e||{};for(let s=0;s<t.length-1;s++){const l=t[s];(!(l in a)||typeof a[l]!="object")&&(a[l]=typeof t[s+1]=="number"?[]:{}),a=a[l]}a[t[t.length-1]]=r}function J_(e,t){if(!e||t.length===0)return;const[r,...a]=t;if(r in e){if(a.length===0){Array.isArray(e)?e.splice(r,1):delete e[r];return}J_(e[r],a),vO(e[r])&&delete e[r]}}function vO(e){return e&&Object.keys(e).length===0}const p1=/ZULU|YEKT|YEKST|YAPT|YAKT|YAKST|XJT|WGT|WGST|WFT|WETDST|WET|WDT|WAT|WAST|WAKT|WADT|VUT|VOLT|VLAT|VLAST|VET|UZT|UZST|UYT|UYST|UTC|UT|ULAT|ULAST|UCT|TVT|TRUT|TOT|TMT|TKT|TJT|TFT|TAHT|SGT|SCT|SAST|SADT|RET|PYT|PYST|PWT|PST|PONT|PMST|PMDT|PKT|PKST|PHT|PGT|PETT|PETST|PET|PDT|OMST|OMSST|NZT|NZST|NZDT|NUT|NST|NPT|NOVT|NOVST|NFT|NDT|MYT|MVT|MUT|MUST|MST|MSK|MSD|MPT|MMT|MHT|MEZ|METDST|MET|MESZ|MEST|MDT|MAWT|MART|MAGT|MAGST|LKT|LINT|LIGT|LHST|LHDT|KST|KRAT|KRAST|KOST|KGT|KGST|KDT|JST|JAYT|IST|IRT|IRKT|IRKST|IOT|IDT|ICT|HST|HKT|GYT|GMT|GILT|GFT|GET|GEST|GAMT|GALT|FNT|FNST|FKT|FKST|FJT|FJST|FET|EST|EGT|EGST|EETDST|EET|EEST|EDT|EAT|EAST|EASST|DDUT|DAVT|CXT|CST|COT|CLT|CLST|CKT|CHUT|CHAST|CHADT|CETDST|CET|CEST|CDT|CCT|CAST|CADT|BTT|BST|BRT|BRST|BRA|BOT|BORT|BNT|BDT|BDST|AZT|AZST|AZOT|AZOST|AWST|AWSST|AST|ART|ARST|ANAT|ANAST|AMT|AMST|ALMT|ALMST|AKST|AKDT|AFT|AEST|AESST|AEDT|ADT|ACWST|ACT|ACST|ACSST|ACDT$/,yO={ZULU:0,YEKT:18e3,YEKST:21600,YAPT:36e3,YAKT:32400,YAKST:32400,XJT:21600,WGT:-10800,WGST:-7200,WFT:43200,WETDST:3600,WET:0,WDT:32400,WAT:3600,WAST:25200,WAKT:43200,WADT:28800,VUT:39600,VOLT:10800,VLAT:36e3,VLAST:36e3,VET:-14400,UZT:18e3,UZST:21600,UYT:-10800,UYST:-7200,UTC:0,UT:0,ULAT:28800,ULAST:32400,UCT:0,TVT:43200,TRUT:36e3,TOT:46800,TMT:18e3,TKT:46800,TJT:18e3,TFT:18e3,TAHT:-36e3,SGT:28800,SCT:14400,SAST:7200,SADT:37800,RET:14400,PYT:-14400,PYST:-10800,PWT:32400,PST:-28800,PONT:39600,PMST:-10800,PMDT:-7200,PKT:18e3,PKST:21600,PHT:28800,PGT:36e3,PETT:43200,PETST:43200,PET:-18e3,PDT:-25200,OMST:21600,OMSST:21600,NZT:43200,NZST:43200,NZDT:46800,NUT:-39600,NST:-12600,NPT:20700,NOVT:25200,NOVST:25200,NFT:-12600,NDT:-9e3,MYT:28800,MVT:18e3,MUT:14400,MUST:18e3,MST:-25200,MSK:10800,MSD:14400,MPT:36e3,MMT:23400,MHT:43200,MEZ:3600,METDST:7200,MET:3600,MESZ:7200,MEST:7200,MDT:-21600,MAWT:18e3,MART:-34200,MAGT:39600,MAGST:39600,LKT:19800,LINT:50400,LIGT:36e3,LHST:37800,LHDT:37800,KST:32400,KRAT:25200,KRAST:25200,KOST:39600,KGT:21600,KGST:21600,KDT:36e3,JST:32400,JAYT:32400,IST:7200,IRT:12600,IRKT:28800,IRKST:28800,IOT:21600,IDT:10800,ICT:25200,HST:-36e3,HKT:28800,GYT:-14400,GMT:0,GILT:43200,GFT:-10800,GET:14400,GEST:14400,GAMT:-32400,GALT:-21600,FNT:-7200,FNST:-3600,FKT:-10800,FKST:-10800,FJT:43200,FJST:46800,FET:10800,EST:-18e3,EGT:-3600,EGST:0,EETDST:10800,EET:7200,EEST:10800,EDT:-14400,EAT:10800,EAST:-21600,EASST:-21600,DDUT:36e3,DAVT:25200,CXT:25200,CST:-21600,COT:-18e3,CLT:-14400,CLST:-10800,CKT:-36e3,CHUT:36e3,CHAST:45900,CHADT:49500,CETDST:7200,CET:3600,CEST:7200,CDT:-18e3,CCT:28800,CAST:34200,CADT:37800,BTT:21600,BST:3600,BRT:-10800,BRST:-7200,BRA:-10800,BOT:-14400,BORT:28800,BNT:28800,BDT:21600,BDST:7200,AZT:14400,AZST:14400,AZOT:-3600,AZOST:0,AWST:28800,AWSST:32400,AST:-14400,ART:-10800,ARST:-10800,ANAT:43200,ANAST:43200,AMT:-14400,AMST:14400,ALMT:21600,ALMST:25200,AKST:-32400,AKDT:-28800,AFT:16200,AEST:36e3,AESST:39600,AEDT:39600,ADT:-10800,ACWST:31500,ACT:-18e3,ACST:34200,ACSST:37800,ACDT:37800};function bO(e){return new Date(e)}function wO(e){return new Date(e+"Z")}const xO=/^(\d+)[\./-](\d+)[\./-](\d+)$/;function _O(e){const t=e.match(xO);if(!t)return null;const[r,a,s,l]=t;return a<=0||s<=0||l<=0?null:a>999?new Date(Date.UTC(a,s-1,l,0,0,0,0)):new Date(Date.UTC(l,a-1,s,0,0,0,0))}function SO(e){const[t,r]=e.split(" ");return new Date(t+"T"+r+"Z")}function TO(e){const[t,r]=e.split(" ");return new Date(t+"T"+r+"Z")}function kO(e){return new Date(e)}function EO(e){const t=/^(\w{3}) (\w{3}) (\d{2}) (\d{4})$/;if(!e.match(t))throw new Error(`Unable to parse \`${e}\` as a date.`);const a=new Date(e+" UTC");return new Date(Date.UTC(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate(),0,0,0,0))}function CO(e){const t=/^(.+T.+)([+-])(\d{2})$/,r=e.match(t);if(r){const[,a,s,l]=r,u=`${a}${s}${l}:00`;return new Date(u)}return null}function AO(e){const[t,r]=e.split(", "),[a,s,l]=t.split("/").map(Number),u=r.match(/(\d{1,2}):(\d{2}):(\d{2}) (AM|PM)/);if(!u)throw new Error(`Unable to parse time from: ${e}`);let[,d,f,h,v]=u;return d=Number(d),f=Number(f),h=Number(h),v==="PM"&&d!==12?d+=12:v==="AM"&&d===12&&(d=0),new Date(Date.UTC(l,a-1,s,d,f,h))}function MO(e){switch(e){case"epoch":return new Date(0);case"infinity":case"-infinity":case"today":case"tomorrow":case"yesterday":return null}}function OO(e){const t=e.match(p1);if(!t)return null;const[r]=t,a=yO[r],s=new Date(e.replace(p1,"Z"));return new Date(s.getTime()-a*1e3)}const NO=[_O,TO,EO,AO,kO,wO,CO,SO,bO,MO,OO];function zO(e,t){try{const r=e(t);return r instanceof Date&&!isNaN(r.getTime())?r:null}catch{return null}}function dm(e){for(const t of NO){const r=zO(t,e);if(r)return r}return null}function DO(e){try{const t=JSON.parse(e);return typeof t=="string"?dm(t):null}catch{return null}}function fd(e){if(e!==void 0){if(e===null)return null;if(e instanceof Date)return e;if(typeof e=="string"){const t=dm(e)||DO(e)||dm(e.trim());if(!t)throw new Error(`Unable to parse \`${e}\` as a date.`);return t}else if(typeof e=="number")return new Date(e);throw new Error(`Invalid date value \`${e}\`. Expected a date, number, or string, got type ${typeof e}.`)}}function RO(e){return e.cardinality==="one"}function yg(e){return e["value-type"]==="ref"}function bg(e){return e["value-type"]==="blob"}function $o(e,t){return e[t]}function Lo(e,t){return t.reduce((r,a)=>r&&r.get(a),e)}function Vn(e,t){if(t.length===0)throw new Error("path must have at least one element");if(t.length===1){e.delete(t[0]);return}const[r,...a]=t;e.has(r)&&Vn(e.get(r),a)}function nn(e,t,r){if(t.length===0)throw new Error("path must have at least one element");if(t.length===1){e.set(t[0],r);return}const[a,...s]=t;let l=e.get(a);l||(l=new Map,e.set(a,l)),nn(l,s,r)}function eS(e,t,r){const a=new Map,s=new Map,l=new Map;for(const u of t){let[d,f,h,v]=u;const g=$o(e,f);if(!g){console.warn("no such attr",d,e);continue}g["checked-data-type"]==="date"&&r&&(h=fd(h),u[2]=h),yg(g)&&nn(l,[h,f,d],u),nn(a,[d,f,h],u),nn(s,[f,d,h],u)}return{eav:a,aev:s,vae:l}}function tS(e){const t=new Map,r=new Map,a=new Map,s=new Map;for(const l of Object.values(e)){const u=l["forward-identity"],[d,f,h]=u,v=l["reverse-identity"];if(nn(a,[f,h],l),bg(l)&&nn(t,[f,h],l),l["primary?"]&&nn(r,[f],l),v){const[g,b,w]=v;nn(s,[b,w],l)}}return{blobAttrs:t,primaryKeys:r,forwardIdents:a,revIdents:s}}function nS(e){return{__type:e.__type,attrs:e.attrs,triples:rn(e.eav,3),cardinalityInference:e.cardinalityInference,linkIndex:e.linkIndex,useDateObjects:e.useDateObjects}}function rS(e){return Cu(e.attrs,e.triples,e.cardinalityInference,e.linkIndex,e.useDateObjects)}function jO(e,t){return Lo(e.eav,[t])!==void 0}function wg(e){e.attrIndexes=tS(e.attrs)}function Cu(e,t,r,a,s){const l=eS(e,t,s);return l.useDateObjects=s,l.attrs=e,l.attrIndexes=tS(e),l.cardinalityInference=r,l.linkIndex=a,l.__type="store",l}function kl(e,t){var r,a;let s;if(Array.isArray(t[0])){const[u,d]=t[0],f=e.aev.get(u);if(!f)return null;s=(r=rn(f,2).find(v=>v[2]===d))===null||r===void 0?void 0:r[0]}else s=t[0];if(!s)return null;const l=t[2];if(Array.isArray(l)&&l.length===2&&e.aev.get(l[0])){const[u,d]=l,f=e.aev.get(u);if(!f)return null;const v=(a=rn(f,2).find(T=>T[2]===d))===null||a===void 0?void 0:a[0];if(!v)return null;const[g,b,w,...S]=t;return[s,b,v,...S]}else{const[u,...d]=t;return[s,...d]}}function iS(e,t){const r=kl(e,t);if(!r)return;const[a,s,l]=r,u=$o(e.attrs,s);u&&(Vn(e.eav,[a,s,l]),Vn(e.aev,[s,a,l]),yg(u)&&Vn(e.vae,[l,s,a]))}let UO=0;function aS(e,t,r){const[a,s,l]=r;let u;const d=Lo(e.ea,[a,s,l]);return d&&(u=d[3]),u||Date.now()*10+UO++}function oS(e,t){var r;const a=kl(e,t);if(!a)return;let[s,l,u]=a;const d=$o(e.attrs,l);if(!d)return;d["checked-data-type"]==="date"&&e.useDateObjects&&(u=fd(u));const f=Lo(e.eav,[s,l,u]),h=(r=f==null?void 0:f[3])!==null&&r!==void 0?r:aS(e,d,a),v=[s,l,u,h];RO(d)?(nn(e.eav,[s,l],new Map([[u,v]])),nn(e.aev,[l,s],new Map([[u,v]]))):(nn(e.eav,[s,l,u],v),nn(e.aev,[l,s,u],v)),yg(d)&&nn(e.vae,[u,l,s],v)}function $O(e,t){var r;const a=kl(e,t);if(!a)return;const[s,l,u]=a,d=$o(e.attrs,l);if(!d)return;if(!bg(d))throw new Error("merge operation is not supported for links");const f=Lo(e.eav,[s,l]);if(!f)return;const h=(r=f.values().next())===null||r===void 0?void 0:r.value;if(!h)return;const v=h[2],g=Z_(v,u),b=[s,l,g,aS(e,d,h)];nn(e.eav,[s,l],new Map([[g,b]]))}function fm(e,t){var r,a;const[s,l]=t,u=kl(e,[s]);if(!u)return;const[d]=u,f=e.eav.get(d);if(f){for(const v of f.keys()){const g=e.attrs[v];g&&g["on-delete-reverse"]==="cascade"&&rn(f.get(v),1).forEach(([b,w,S])=>{var T;return fm(e,[S,(T=g["reverse-identity"])===null||T===void 0?void 0:T[1]])}),(!l||!g||((r=g["forward-identity"])===null||r===void 0?void 0:r[1])===l)&&(Vn(e.aev,[v,d]),Vn(e.eav,[d,v]))}f.size===0&&Vn(e.eav,[d])}const h=e.vae.get(d)&&rn(e.vae.get(d),2);h&&h.forEach(v=>{var g,b,w;const[S,T,k]=v,_=e.attrs[T];(!l||!_||((g=_["reverse-identity"])===null||g===void 0?void 0:g[1])===l)&&(Vn(e.eav,[S,T,k]),Vn(e.aev,[T,S,k]),Vn(e.vae,[k,T,S])),_&&_["on-delete"]==="cascade"&&((b=_["reverse-identity"])===null||b===void 0?void 0:b[1])===l&&fm(e,[S,(w=_["forward-identity"])===null||w===void 0?void 0:w[1]])}),((a=e.vae.get(d))===null||a===void 0?void 0:a.size)===0&&Vn(e.vae,[d])}function sS(e,t){const r=eS(e.attrs,t,e.useDateObjects);Object.keys(r).forEach(a=>{e[a]=r[a]})}function LO(e,[t]){e.attrs[t.id]=t,wg(e)}function lS(e){return rn(e.eav,3)}function HO(e,[t]){if(!e.attrs[t])return;const r=lS(e).filter(([a,s])=>s!==t);delete e.attrs[t],wg(e),sS(e,r)}function IO(e,[t]){const r=e.attrs[t.id];r&&(e.attrs[t.id]=Object.assign(Object.assign({},r),t),wg(e),sS(e,lS(e)))}function BO(e,t){const[r,...a]=t;switch(r){case"add-triple":oS(e,a);break;case"deep-merge-triple":$O(e,a);break;case"retract-triple":iS(e,a);break;case"delete-entity":fm(e,a);break;case"add-attr":LO(e,a);break;case"delete-attr":HO(e,a);break;case"update-attr":IO(e,a);break;case"restore-attr":break;case"rule-params":break;default:throw new Error(`unhandled transaction action: ${r}`)}}function rn(e,t,r=[]){if(!e||t===0)return r;if(t===1){for(const a of e.values())r.push(a);return r}for(const a of e.values())rn(a,t-1,r);return r}function su(e,t,r){var a,s;const l=[];if(r!=null&&r.hasOwnProperty("$not")){for(const d of t.keys())r.$not!==d&&l.push(t.get(d));return l}if(r!=null&&r.hasOwnProperty("$isNull")){const{attrId:d,isNull:f,reverse:h}=r.$isNull;if(h)for(const v of t.keys()){const g=e.vae.get(v),b=!g||((a=g.get(d))===null||a===void 0?void 0:a.get(null))||!g.get(d);(f?b:!b)&&l.push(t.get(v))}else{const v=e.aev.get(d);for(const g of t.keys()){const b=!v||((s=v.get(g))===null||s===void 0?void 0:s.get(null))||!v.get(g);(f?b:!b)&&l.push(t.get(g))}}return l}if(r!=null&&r.$comparator)return rn(t,1).filter(r.$op);const u=r.in||r.$in||[r];for(const d of u){const f=t.get(d);f&&l.push(f)}return l}function qO(e,t,r){let a="";return e!==void 0&&(a+="e"),t!==void 0&&(a+="a"),r!==void 0&&(a+="v"),a}function FO(e,[t,r,a]){var s,l;switch(qO(t,r,a)){case"e":{const d=e.eav.get(t);return rn(d,2)}case"ea":{const d=(s=e.eav.get(t))===null||s===void 0?void 0:s.get(r);return rn(d,1)}case"eav":{const d=(l=e.eav.get(t))===null||l===void 0?void 0:l.get(r);return d?su(e,d,a):[]}case"ev":{const d=e.eav.get(t);if(!d)return[];const f=[];for(const h of d.values())f.push(...su(e,h,a));return f}case"a":{const d=e.aev.get(r);return rn(d,2)}case"av":{const d=e.aev.get(r);if(!d)return[];const f=[];for(const h of d.values())f.push(...su(e,h,a));return f}case"v":{const d=[];for(const f of e.eav.values())for(const h of f.values())d.push(...su(e,h,a));return d}default:return rn(e.eav,3)}}function YO(e,t,r){var a;const s={};for(const[l,u]of t.entries()){const d=(a=e.eav.get(r))===null||a===void 0?void 0:a.get(u.id),f=rn(d,1);for(const h of f)s[l]=h[2]}return s}function Oi(e,t,r){var a;return(a=e.attrIndexes.forwardIdents.get(t))===null||a===void 0?void 0:a.get(r)}function cS(e,t,r){var a;return(a=e.attrIndexes.revIdents.get(t))===null||a===void 0?void 0:a.get(r)}function PO(e,t){return e.attrIndexes.blobAttrs.get(t)}function uS(e,t){var r;const a=e.attrIndexes.primaryKeys.get(t);return a||((r=e.attrIndexes.forwardIdents.get(t))===null||r===void 0?void 0:r.get("id"))}function XO(e,t){const r=kl(e,t);if(!r)return;const[a,s,l]=r;if($o(e.attrs,s))return Lo(e.eav,[a,s])}function GO(e,t){const r=t.filter(([a,s,l,u,d])=>{if(a!=="add-triple"&&a!=="deep-merge-triple")return!0;const f=d==null?void 0:d.mode;if(f!=="create"&&f!=="update")return!0;let h=!1;const v=$o(e.attrs,l);if(v){const g=uS(e,v["forward-identity"][1]);h=!!XO(e,[s,g.id,s])}return!(f==="create"&&h||f==="update"&&!h)});return Gu(e,a=>{r.forEach(s=>{BO(a,s)})})}function VO(e){return typeof e=="string"&&e.startsWith("?")}function QO(e,t,r){if(r.hasOwnProperty(e)){const a=r[e];return dS(a,t,r)}return Object.assign(Object.assign({},r),{[e]:t})}function m1(e,t,r){return e===t?r:null}function KO(e){switch(typeof e){case"string":return e.startsWith("?")?QO:m1;default:return m1}}const WO=["in","$in","$not","$isNull","$comparator"];function ZO(e){for(const t of WO)if(e.hasOwnProperty(t))return!0;return!1}function dS(e,t,r){return r?typeof e=="object"?ZO(e)?r:null:KO(e)(e,t,r):null}function JO(e,t,r){return e.reduce((a,s,l)=>{const u=t[l];return dS(s,u,a)},r)}function e5(e,t,r){return r5(e,t,r).map(a=>JO(t,a,r)).filter(a=>a)}function t5(e,t,r){return t.or?t.or.patterns.flatMap(a=>hm(e,a,r)):t.and?t.and.patterns.reduce((a,s)=>hm(e,s,a),r):r.flatMap(a=>e5(e,t,a))}function hm(e,t,r=[{}]){return t.reduce((a,s)=>t5(e,s,a),r)}function xg(e,t){return Array.isArray(t)?t.map(r=>xg(e,r)):VO(t)?e[t]:t}function n5(e,{find:t,where:r}){return hm(e,r).map(s=>xg(s,t))}function r5(e,t,r){return FO(e,xg(r,t))}const i5=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;function Oo(e){return typeof e=="string"&&i5.test(e)}const Lt=[];for(let e=0;e<256;++e)Lt.push((e+256).toString(16).slice(1));function a5(e,t=0){return(Lt[e[t+0]]+Lt[e[t+1]]+Lt[e[t+2]]+Lt[e[t+3]]+"-"+Lt[e[t+4]]+Lt[e[t+5]]+"-"+Lt[e[t+6]]+Lt[e[t+7]]+"-"+Lt[e[t+8]]+Lt[e[t+9]]+"-"+Lt[e[t+10]]+Lt[e[t+11]]+Lt[e[t+12]]+Lt[e[t+13]]+Lt[e[t+14]]+Lt[e[t+15]]).toLowerCase()}let _p;const o5=new Uint8Array(16);function s5(){if(!_p){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");_p=crypto.getRandomValues.bind(crypto)}return _p(o5)}const l5=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),g1={randomUUID:l5};function c5(e,t,r){var s;if(g1.randomUUID&&!e)return g1.randomUUID();e=e||{};const a=e.random??((s=e.rng)==null?void 0:s.call(e))??s5();if(a.length<16)throw new Error("Random bytes length must be >= 16");return a[6]=a[6]&15|64,a[8]=a[8]&63|128,a5(a)}function v1(e){const t=e.replace(/-/g,""),r=[];for(let a=0;a<t.length;a+=2)r.push(parseInt(t.substring(a,a+2),16));return r}function u5(e,t){for(let r=0;r<e.length;r++){if(e[r]<t[r])return-1;if(e[r]>t[r])return 1}return 0}function d5(e,t){return u5(v1(e),v1(t))}function Je(){return c5()}function f5(e,t){return e.localeCompare(t)}function h5(){let e=f5;if(typeof Intl=="object"&&Intl.hasOwnProperty("Collator"))try{e=Intl.Collator("en-US").compare}catch{}return e}const p5=h5();let m5=0;function Zs(e){return hd(`_${e}`,m5++)}function hd(e,t){return`?${e}-${t}`}class No extends Error{constructor(t){super(t),this.name="AttrNotFoundError"}}function g5(e,t){const r=uS(e,t);if(!r)throw new No(`Could not find id attr for ${t}`);return r}function y1(e,t,r,a){return[v5(e,t,r,a)]}function v5(e,t,r,a){return[e(r,a),g5(t,r).id,e(r,a),e("time",a)]}function y5(e,t,r){return e.map(a=>a===t?r:a)}function fS(e,t,r,a,s){const l=Oi(t,r,s),u=cS(t,r,s),d=l||u;if(!d)throw new No(`Could not find attr for ${[r,s]}`);if(d["value-type"]!=="ref")throw new Error(`Attr ${d.id} is not a ref`);const[f,h]=d["forward-identity"],[v,g]=d["reverse-identity"],b=a+1,w=l?[e(h,a),d.id,e(g,b),Zs("time")]:[e(h,b),d.id,e(g,a),Zs("time")];return[l?g:h,b,w,d,!!l]}function b1(e,t){if(typeof t!="string")return function(u){return!1};const a=t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/%/g,".*").replace(/_/g,"."),s=new RegExp(`^${a}$`,e?void 0:"i");return function(u){return typeof u!="string"?!1:s.test(u)}}function b5(e,t){if(typeof t!="object"||t.hasOwnProperty("$in")||t.hasOwnProperty("in"))return t;const r=e["checked-data-type"]==="date";if(t.hasOwnProperty("$gt"))return{$comparator:!0,$op:r?function(s){return new Date(s[2])>new Date(t.$gt)}:function(s){return s[2]>t.$gt}};if(t.hasOwnProperty("$gte"))return{$comparator:!0,$op:r?function(s){return new Date(s[2])>=new Date(t.$gte)}:function(s){return s[2]>=t.$gte}};if(t.hasOwnProperty("$lt"))return{$comparator:!0,$op:r?function(s){return new Date(s[2])<new Date(t.$lt)}:function(s){return s[2]<t.$lt}};if(t.hasOwnProperty("$lte"))return{$comparator:!0,$op:r?function(s){return new Date(s[2])<=new Date(t.$lte)}:function(s){return s[2]<=t.$lte}};if(t.hasOwnProperty("$like")){const a=b1(!0,t.$like);return{$comparator:!0,$op:function(l){return a(l[2])}}}if(t.hasOwnProperty("$ilike")){const a=b1(!1,t.$ilike);return{$comparator:!0,$op:function(l){return a(l[2])}}}return t}function w5(e,t,r,a,s,l){const u=Oi(t,r,s),d=cS(t,r,s),f=u||d;if(!f)throw new No(`No attr for etype = ${r} label = ${s}`);if(l!=null&&l.hasOwnProperty("$isNull")){const h=Oi(t,r,"id");if(!h)throw new No(`No attr for etype = ${r} label = id`);return[e(r,a),h.id,{$isNull:{attrId:f.id,isNull:l.$isNull,reverse:!u}},Zs("time")]}return u?[e(r,a),f.id,b5(f,l),Zs("time")]:[l,f.id,e(r,a),Zs("time")]}function x5(e,t,r,a,s){const[l,u,d]=s.reduce((f,h)=>{const[v,g,b]=f,[w,S,T]=fS(e,t,v,g,h);return[w,S,[...b,T]]},[r,a,[]]);return[l,u,d]}function pm(e,t,r,a,s,l){const u=s.slice(0,s.length-1),d=s[s.length-1],[f,h,v]=x5(e,t,r,a,u),g=w5(e,t,f,h,d,l);return v.concat([g])}function _5(e,t){return t?[t].concat(e):e}function S5([e,t]){return e==="or"&&Array.isArray(t)}function T5([e,t]){return e==="and"&&Array.isArray(t)}function k5(e,t,r){return(a,s)=>{const l=e(a,s);return t==l?l:`${l}-${r}`}}function w1(e,t,r,a,s,l){const u=e(a,s),d=l.map((f,h)=>{const v=k5(e,u,h);return hS(v,r,a,s,f)});return{[t]:{patterns:d,joinSym:u}}}function E5(e){const t=[];for(let r=1;r<=e.length;r++)t.push(e.slice(0,r));return t}function x1(e,t,r,a,s){return E5(s).map(l=>pm(e,t,r,a,l,{$isNull:!0}))}function hS(e,t,r,a,s){return Object.entries(s).flatMap(([l,u])=>{if(S5([l,u]))return w1(e,"or",t,r,a,u);if(T5([l,u]))return w1(e,"and",t,r,a,u);if(l==="$entityIdStartsWith")return[];const d=l.split(".");if(u!=null&&u.hasOwnProperty("$ne")&&(u=Object.assign(Object.assign({},u),{$not:u.$ne}),delete u.$ne),u!=null&&u.hasOwnProperty("$not")){const f=pm(e,t,r,a,d,u),h=x1(e,t,r,a,d);return[{or:{patterns:[f,...h],joinSym:e(r,a)}}]}return u!=null&&u.hasOwnProperty("$isNull")&&u.$isNull===!0&&d.length>1?[{or:{patterns:x1(e,t,r,a,d),joinSym:e(r,a)}}]:pm(e,t,r,a,d,u)})}function C5(e,t,r,a){const s=hd;return a?hS(s,e,t,r,a).concat(y1(s,e,t,r)):y1(s,e,t,r)}function A5(e,t,r){return[e(t,r),e("time",r)]}function M5(e,t,r,a,s,l){const[u,d,f,h,v]=fS(e,t,r,a,s),g=y5(f,e(r,a),l);return[u,d,g,h,v]}function O5(e,t,{etype:r,level:a,form:s},l){const u=Object.keys(s).filter(d=>d!=="$");return u.length?Object.entries(l).map(function([f,h]){return u.map(function(b){var w,S,T;const k=!!(t.cardinalityInference&&(!((T=(S=(w=t.linkIndex)===null||w===void 0?void 0:w[r])===null||S===void 0?void 0:S[b])===null||T===void 0)&&T.isSingular));try{const[_,E,M]=M5(e,t,r,a,b,f),D=mS(t,{etype:_,level:E,form:s[b],join:M}),j=k?D[0]:D;return{[b]:j}}catch(_){if(_ instanceof No)return{[b]:k?void 0:[]};throw _}}).reduce(function(b,w){return Object.assign(Object.assign({},b),w)},h)}):Object.values(l)}function N5(e,t,r){return r==="string"?p5(e,t):e>t?1:-1}function Ps(e,t,r,a,s){return t===a||t==null&&a==null?d5(e,r):a==null?1:t==null?-1:N5(t,a,s)}function Vu([e,t],[r,a],s){return Ps(e,t,r,a,s)}function mm(e){return e==null?e:new Date(e).getTime()}function z5(e,t,r,a){var s;const[l,u,d,f]=e,h=r==="desc"?1:-1;if(((s=t["forward-identity"])===null||s===void 0?void 0:s[2])==="id")return Vu(a,[l,f],null)===h;const[v,g]=a,b=t["checked-data-type"],w=b==="date"?mm(g):g,S=b==="date"?mm(d):d;return Vu([v,w],[l,S],b)===h}function D5(e,t){const r=t[1];return e.attrs[r]}function R5(e,t,r){const a=Object.keys(r)[0];return Oi(e,t,a)}function j5(e,t,r,a){if(r)return D5(e,r);if(a)return R5(e,t,a)}function U5(e,t,r){var a,s;if(!Array.isArray(r.fields))return PO(e,t);const l=new Map;for(const u of r.fields){const d=Oi(e,t,u),f=(a=d==null?void 0:d["forward-identity"])===null||a===void 0?void 0:a[2];f&&bg(d)&&l.set(f,d)}if(!l.has("id")){const u=Oi(e,t,"id"),d=(s=u==null?void 0:u["forward-identity"])===null||s===void 0?void 0:s[2];d&&l.set(d,u)}return l}function $5(e,{etype:t,pageInfo:r,dq:a,form:s}){var l,u;const d=(l=s==null?void 0:s.$)===null||l===void 0?void 0:l.order,f=pS(s),h=L5(s);let v=n5(e,a);const g=r==null?void 0:r["start-cursor"],b=j5(e,t,g,d);if(b&&((u=b==null?void 0:b["forward-identity"])===null||u===void 0?void 0:u[2])!=="id"){const T=b["checked-data-type"]==="date",k=b.id;v=v.map(([_])=>{var E,M,D,j,Y;let B=(Y=(j=(D=(M=(E=e.eav.get(_))===null||E===void 0?void 0:E.get(k))===null||M===void 0?void 0:M.values())===null||D===void 0?void 0:D.next())===null||j===void 0?void 0:j.value)===null||Y===void 0?void 0:Y[2];return T&&(B=mm(B)),[_,B]})}v.sort(h==="asc"?function(k,_){return Vu(k,_,b==null?void 0:b["checked-data-type"])}:function(k,_){return Vu(_,k,b==null?void 0:b["checked-data-type"])});let w={};const S=U5(e,t,a);for(const T of v){const[k]=T;if(w[k]||!f&&g&&b&&z5(g,b,h,T))continue;const _=YO(e,S,k);_&&(w[k]=_)}return w}function L5(e){var t;const r=(t=e.$)===null||t===void 0?void 0:t.order;return r&&r[Object.keys(r)[0]]||"asc"}function pS(e){var t,r,a;const s=(t=e.$)===null||t===void 0?void 0:t.offset,l=(r=e.$)===null||r===void 0?void 0:r.before,u=(a=e.$)===null||a===void 0?void 0:a.after;return!s&&!l&&!u}function H5(e,{etype:t,level:r,form:a,join:s,pageInfo:l}){var u,d,f,h,v;if(!pS(a)&&(!l||!l["start-cursor"]))return[];const g=_5(C5(e,t,r,(u=a.$)===null||u===void 0?void 0:u.where),s),b=A5(hd,t,r),w=(d=a.$)===null||d===void 0?void 0:d.fields,S=$5(e,{etype:t,pageInfo:l,form:a,dq:{where:g,find:b,fields:w}}),T=((f=a.$)===null||f===void 0?void 0:f.limit)||((h=a.$)===null||h===void 0?void 0:h.first)||((v=a.$)===null||v===void 0?void 0:v.last);if(T!=null){r>0&&console.warn("WARNING: Limits in child queries are only run client-side. Data returned from the server will not have a limit.");const k=Object.entries(S);return k.length<=T?S:Object.fromEntries(k.slice(0,T))}return S}function I5(e,t){try{return H5(e,t)}catch(r){if(r instanceof No)return{};throw r}}function mS(e,t){const r=I5(e,t);return O5(hd,e,t,r)}function B5(e){const t={};for(const[r,a]of Object.entries(e))t[r]={startCursor:a["start-cursor"],endCursor:a["end-cursor"],hasNextPage:a["has-next-page?"],hasPreviousPage:a["has-previous-page?"]};return t}function gS({store:e,pageInfo:t,aggregate:r},a){const l={data:Object.keys(a).reduce(function(d,f){return r!=null&&r[f]||f==="$$ruleParams"||(d[f]=mS(e,{etype:f,form:a[f],level:0,pageInfo:t==null?void 0:t[f]})),d},{})};return t&&(l.pageInfo=B5(t)),r&&(l.aggregate=r),l}function q5(){const t={__etype:1,__ops:1,create:1,update:1,link:1,unlink:1,delete:1,merge:1,ruleParams:1};return new Set(Object.keys(t))}const F5=q5();function gm(e,t,r){const a={__etype:e,__ops:r};return new Proxy(a,{get:(s,l)=>{if(l==="__ops")return r;if(l==="__etype")return e;if(F5.has(l))return(u,d)=>gm(e,t,[...r,d?[l,e,t,u,d]:[l,e,t,u]])}})}function Qu(e){return e.startsWith("lookup__")}function vS(e){const[t,r,...a]=e.split("__");return[r,JSON.parse(a.join("__"))]}function Y5(e){return new Proxy({__etype:e},{get(t,r){if(r==="__etype")return e;const a=r;return Qu(a)?gm(e,vS(a),[]):gm(e,a,[])}})}function yS(){return new Proxy({},{get(e,t){return Y5(t)}})}yS();function P5(e){return e.__ops}function X5(e,t){const{attrIdMap:r,refSwapAttrIds:a}=e,s=[];for(const u of t){const d=r[u];if(d)s.push(d);else if(Array.isArray(u)&&u.length==2&&r[u[0]]){const[f,h]=u;s.push([r[f],h])}else s.push(u)}const[l]=t;if((l==="add-triple"||l==="retract-triple")&&a.has(t[2])){const u=s[1];s[1]=s[3],s[3]=u}return s}function Ht(e,t,r){return Object.values(e).find(a=>{const[s,l,u]=a["forward-identity"];return l===t&&u===r})}function ca(e,t,r){return Object.values(e).find(a=>{const s=a["reverse-identity"];if(!s)return!1;const[l,u,d]=s;return u===t&&d===r})}function G5(e){if(Array.isArray(e))return e;const t=Object.entries(e);if(t.length!==1)throw new Error("lookup must be an object with a single unique attr and value.");return t[0]}function vm(e,t,r){return r.indexOf(".")!==-1&&!Ht(e,t,r)}function ym(e){const[t,r,...a]=e.split(".");if(a.length>0||r!=="id")throw new Error(`${e} is not a valid lookup attribute.`);return t}function V5(e,t,r){if(!vm(e,t,r))return Ht(e,t,r);const a=ym(r),s=Ht(e,t,a)||ca(e,t,a);if(s&&s["value-type"]!=="ref")throw new Error(`${r} does not reference a valid link attribute.`);return s}function bm(e){return typeof e=="string"&&!Qu(e)?null:typeof e=="string"&&Qu(e)?vS(e):G5(e)}function an(e,t,r){const a=bm(r);if(a===null)return r;const[s,l]=a,u=V5(e,t,s);if(!u||!u["unique?"])throw new Error(`${s} is not a unique attribute.`);return[u.id,l]}function bS(e,t,r,a){const s=an(e,t,r);return Array.isArray(s)?[["add-triple",s,Ht(e,t,"id").id,s]].concat(a):a}function Q5({attrs:e},[t,r,a]){const s=Object.entries(a).flatMap(([l,u])=>{const d=Array.isArray(u)?u:[u],f=Ht(e,t,l),h=ca(e,t,l);return d.map(v=>f?["add-triple",an(e,t,r),f.id,an(e,f["reverse-identity"][1],v)]:["add-triple",an(e,h["forward-identity"][1],v),h.id,an(e,t,r)])});return bS(e,t,r,s)}function K5({attrs:e},[t,r,a]){const s=Object.entries(a).flatMap(([l,u])=>{const d=Array.isArray(u)?u:[u],f=Ht(e,t,l),h=ca(e,t,l);return d.map(v=>f?["retract-triple",an(e,t,r),f.id,an(e,f["reverse-identity"][1],v)]:["retract-triple",an(e,h["forward-identity"][1],v),h.id,an(e,t,r)])});return bS(e,t,r,s)}function W5(e,t,r){if(Array.isArray(r)){const[a,s]=r;for(const l of e||[]){const u=l==null?void 0:l.aev.get(a);if(u){for(const[d,f,h]of rn(u,2))if(h===s)return!0}}}else for(const a of e||[]){const s=a==null?void 0:a.eav.get(r);if(s){for(const l of s.keys())if(a.attrs[l]["forward-identity"][1]==t)return!0}}return!1}function wS({stores:e,attrs:t},[r,a,s,l]){return(l==null?void 0:l.upsert)===!1?{mode:"update"}:(l==null?void 0:l.upsert)===!0?null:W5(e,r,a)?{mode:"update"}:null}function Z5(e,t){const{stores:r,attrs:a}=e,[s,l,u,d]=t,f=vg(u),h=an(a,s,l);return[["id",h]].concat(Object.entries(f)).map(([g,b])=>{const w=Ht(a,s,g);return w["checked-data-type"]==="date"&&e.useDateObjects&&(b=fd(b)),["add-triple",h,w.id,b,{mode:"create"}]})}function J5(e,t){const{stores:r,attrs:a}=e,[s,l,u,d]=t,f=vg(u),h=an(a,s,l),v=wS(e,[s,h,u,d]);return[["id",h]].concat(Object.entries(f)).map(([b,w])=>{const S=Ht(a,s,b);return S["checked-data-type"]==="date"&&e.useDateObjects&&(w=fd(w)),["add-triple",h,S.id,w,...v?[v]:[]]})}function eN({attrs:e},[t,r]){return[["delete-entity",an(e,t,r),t]]}function tN(e,t){const{stores:r,attrs:a}=e,[s,l,u,d]=t,f=vg(u),h=an(a,s,l),v=wS(e,[s,h,u,d]),g=Object.entries(f).map(([w,S])=>{const T=Ht(a,s,w);return["deep-merge-triple",h,T.id,S,...v?[v]:[]]});return[["add-triple",h,Ht(a,s,"id").id,h,...v?[v]:[]]].concat(g)}function nN({attrs:e},[t,r,a]){return[["rule-params",an(e,t,r),t,a]]}function rN(e){const[t,r,a,s,l]=e;if(!s)return e;const u=Object.assign({},s);return delete u.id,[t,r,a,u,...l?[l]:[]]}function iN(e,t){const[r,...a]=rN(t);switch(r){case"merge":return tN(e,a);case"create":return Z5(e,a);case"update":return J5(e,a);case"link":return Q5(e,a);case"unlink":return K5(e,a);case"delete":return eN(e,a);case"ruleParams":return nN(e,a);default:throw new Error(`unsupported action ${r}`)}}function aN(e){switch(e){case"string":case"date":case"boolean":case"number":return e;default:return}}function oN(e,t,r){var a,s;const l=(s=(a=e.entities[t])===null||a===void 0?void 0:a.attrs)===null||s===void 0?void 0:s[r];if(r==="id")return null;if(!l)throw new Error(`${t}.${r} does not exist in your schema`);const{unique:u,indexed:d}=l==null?void 0:l.config,f=aN(l==null?void 0:l.valueType);return{"index?":d,"unique?":u,"checked-data-type":f}}function lu(e,t,r,a){const s=e?oN(e,t,r):null,l=Je(),d=[Je(),t,r];return Object.assign(Object.assign({id:l,"forward-identity":d,"value-type":"blob",cardinality:"one","unique?":!1,"index?":!1,isUnsynced:!0},s||{}),a||{})}function sN(e,t,r){return Object.values(e.links).find(s=>s.forward.on===t&&s.forward.label===r||s.reverse.on===t&&s.reverse.label===r)}function lN(e,t,r){const a=sN(e,t,r);if(!a)throw new Error(`Couldn't find the link ${t}.${r} in your schema`);const{forward:s,reverse:l}=a;return{"forward-identity":[Je(),s.on,s.label],"reverse-identity":[Je(),l.on,l.label],cardinality:s.has==="one"?"one":"many","unique?":l.has==="one","on-delete":s.onDelete,"on-delete-reverse":l.onDelete}}function _1(e,t,r,a){const s=e?lN(e,t,r):null,l=Je(),u=[Je(),t,r],d=[Je(),r,t];return Object.assign(Object.assign({id:l,"forward-identity":u,"reverse-identity":d,"value-type":"ref",cardinality:"many","unique?":!1,"index?":!1,isUnsynced:!0},s||{}),a||{})}const cN=new Set(["create","update","merge","link","unlink"]),uN=new Set(["link","unlink"]),dN=new Set(["create","update","merge"]),fN=new Set(["link","unlink","create","update","merge","delete","ruleParams"]),wm={"unique?":!0,"index?":!0},hN=Object.assign(Object.assign({},wm),{cardinality:"one"});function pN(e){const t=[],[r,a,s,l]=e;if(!fN.has(r))return t;const u=bm(s);if(u&&t.push({etype:a,lookupPair:u}),r==="link")for(const[d,f]of Object.entries(l)){const h=Array.isArray(f)?f:[f];for(const v of h){const g=bm(v);g&&t.push({etype:a,lookupPair:g,linkLabel:d})}}return t}function mN({attrs:e,schema:t},r){var a,s;const[l,u,d]=[new Set,Object.assign({},e),[]];function f(g){u[g.id]=g,d.push(["add-attr",g]),l.add(g.id)}function h(g){g!=null&&g.isUnsynced&&!l.has(g.id)&&(d.push(["add-attr",g]),l.add(g.id))}function v(g,b){const w=Ht(u,g,b),S=ca(u,g,b);h(w),h(S),!w&&!S&&f(_1(t,g,b,hN))}for(const g of r)for(const{etype:b,lookupPair:w,linkLabel:S}of pN(g)){const T=w[0];if(S){v(b,S);const k=Ht(u,b,S),_=ca(u,b,S);h(k),h(_);const E=((a=k==null?void 0:k["reverse-identity"])===null||a===void 0?void 0:a[1])||((s=_==null?void 0:_["forward-identity"])===null||s===void 0?void 0:s[1])||S;if(vm(u,E,T))v(E,ym(T));else{const M=Ht(u,E,T);M||f(lu(t,E,T,wm)),h(M)}}else if(vm(u,b,T))v(b,ym(T));else{const k=Ht(u,b,T);k||f(lu(t,b,T,wm)),h(k)}}for(const g of r){const[b,w,S,T]=g;if(cN.has(b)){const k=Ht(u,w,"id");h(k),k||f(lu(t,w,"id",{"unique?":!0}));for(const _ of Object.keys(T)){const E=Ht(u,w,_);if(h(E),dN.has(b)&&(E||f(lu(t,w,_,_==="id"?{"unique?":!0}:null))),uN.has(b)){const M=ca(u,w,_);!E&&!M&&f(_1(t,w,_)),h(M)}}}}return[u,d]}function gN(e,t){const a=(Array.isArray(t)?t:[t]).flatMap(f=>P5(f)),[s,l]=mN(e,a),u=Object.assign(Object.assign({},e),{attrs:s}),d=a.flatMap(f=>iN(u,f));return[...l,...d]}var or=function(e,t,r,a){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(v){try{h(a.next(v))}catch(g){u(g)}}function f(v){try{h(a.throw(v))}catch(g){u(g)}}function h(v){v.done?l(v.value):s(v.value).then(d,f)}h((a=a.apply(e,t||[])).next())})};function S1(e,t){typeof requestIdleCallback>"u"?e():requestIdleCallback(e,{timeout:t})}const Js="__meta";class vN{constructor(t,r){}}class xm{constructor(t){var r,a;this._subs=[],this._nextSave=null,this._nextGc=null,this._pendingSaveKeys=new Set,this._loadedKeys=new Set,this._version=0,this._meta={isLoading:!0,onLoadCbs:[],value:null,error:null,attempts:0},this._persister=t.persister,this._merge=t.merge,this.serialize=t.serialize,this.parse=t.parse,this._objectSize=t.objectSize,this._log=t.logger,this._saveThrottleMs=(r=t.saveThrottleMs)!==null&&r!==void 0?r:100,this._idleCallbackMaxWaitMs=(a=t.idleCallbackMaxWaitMs)!==null&&a!==void 0?a:1e3,this._gcOpts=t.gc,this.currentValue={},this._loadedKeys=new Set,this._loadingKeys={},this._initMeta(),t.preloadEntryCount&&this._preloadEntries(t.preloadEntryCount)}_initMeta(){return or(this,void 0,void 0,function*(){var t,r,a;this._meta.loadingPromise&&(yield this._meta.loadingPromise);try{const s=this._persister.getItem(Js);this._meta.loadingPromise=s;const l=yield s;this._meta.isLoading=!1,this._meta.error=null,this._meta.loadingPromise=null,this._meta.attempts=0;const u=(r=(t=this._meta.value)===null||t===void 0?void 0:t.objects)!==null&&r!==void 0?r:{},d=l??{},f=(a=d.objects)!==null&&a!==void 0?a:{};this._meta.value=Object.assign(Object.assign({},d),{objects:Object.assign(Object.assign({},u),f)})}catch(s){this._meta.error=s,this._meta.attempts++,this._meta.loadingPromise=null}})}_getMeta(){return or(this,void 0,void 0,function*(){return this._meta.value?this._meta.value:this._meta.loadingPromise?(yield this._meta.loadingPromise,this._meta.value):(this._initMeta(),yield this._meta.loadingPromise,this._meta.value)})}_refreshMeta(){return or(this,void 0,void 0,function*(){return yield this._initMeta(),this._meta.value})}_preloadEntries(t){return or(this,void 0,void 0,function*(){const r=yield this.waitForMetaToLoad();if(!r)return;const a=Object.entries(r.objects);a.sort(([s,l],[u,d])=>d.updatedAt-l.updatedAt);for(const[s]of a.slice(0,t))this._loadKey(s)})}_getFromStorage(t){return or(this,void 0,void 0,function*(){try{const r=yield this._persister.getItem(t);return r&&this.parse(t,r)}catch(r){return console.error(`Unable to read from storage for key=${t}`,r),null}})}waitForKeyToLoad(t){return or(this,void 0,void 0,function*(){return this._loadedKeys.has(t)?this.currentValue[t]:(yield this._loadingKeys[t]||this._loadKey(t),this.currentValue[t])})}waitForMetaToLoad(){return or(this,void 0,void 0,function*(){return this._getMeta()})}unloadKey(t){this._loadedKeys.delete(t),delete this._loadingKeys[t],delete this.currentValue[t]}_loadKey(t){return or(this,void 0,void 0,function*(){if(this._loadedKeys.has(t)||t in this._loadingKeys)return;const r=this._getFromStorage(t);this._loadingKeys[t]=r;const a=yield r;if(delete this._loadingKeys[t],this._loadedKeys.add(t),a){const s=this._merge(t,a,this.currentValue[t]);s&&(this.currentValue[t]=s)}this.onKeyLoaded&&this.onKeyLoaded(t)})}_writeToStorage(t){var r,a;const s=[],l=t==null?void 0:t.skipGc;if(this._meta.isLoading){const w=new Promise((S,T)=>{var k;setTimeout(()=>this._enqueuePersist(t?Object.assign(Object.assign({},t),{attempts:(t.attempts||0)+1}):{attempts:1}).then(S).catch(T),10+((k=t==null?void 0:t.attempts)!==null&&k!==void 0?k:0)*1e3)});return s.push(w),Promise.all(s).then(S=>S.reduce((T,k)=>T+k,0))}const u=this._meta.value;if(!u)return Promise.resolve(0);const d=[],f=[];for(const w of this._pendingSaveKeys)w in this.currentValue?f.push(w):(d.push(w),delete u.objects[w]);for(const w of d){const S=this._persister.removeItem(w);s.push(S.then(()=>1)),this._loadedKeys.delete(w),this._pendingSaveKeys.delete(w)}const h=[],v=[[Js,u]],g=(r=u.objects)!==null&&r!==void 0?r:{};u.objects=g;for(const w of f)if(this._loadedKeys.has(w)){const S=this.serialize(w,this.currentValue[w]);v.push([w,S]);const T=this._objectSize(S),k=(a=g[w])!==null&&a!==void 0?a:{createdAt:Date.now(),updatedAt:Date.now(),size:T};k.updatedAt=Date.now(),k.size=T,g[w]=k,this._pendingSaveKeys.delete(w)}else h.push(w);const b=this._persister.multiSet(v);s.push(b.then(()=>1));for(const w of h){const S=this._loadKey(w).then(()=>this._enqueuePersist(t));s.push(S)}return l||this.gc(),Promise.all(s).then(w=>w.reduce((S,T)=>S+T,0))}flush(){return or(this,void 0,void 0,function*(){return this._nextSave?(clearTimeout(this._nextSave),this._nextSave=null,this._writeToStorage()):void 0})}_gc(){return or(this,void 0,void 0,function*(){if(!this._gcOpts)return;const t=new Set(yield this._persister.getAllKeys());t.delete(Js);const r=new Set(Object.keys(this.currentValue));for(const b of Object.keys(this._loadingKeys))r.add(b);for(const b of this._loadedKeys)r.add(b);const a=yield this._refreshMeta();if(!a){this._log.info("Could not gc because we were not able to load meta");return}const s=[],l={gcOpts:this._gcOpts,keys:t,sacredKeys:r,removed:[],metaRemoved:[],removedMissingCount:0,removedOldCount:0,removedThresholdCount:0,removedSizeCount:0};for(const b of t)r.has(b)||b in a.objects||(this._log.info("Lost track of key in meta",b),s.push(this._persister.removeItem(b)),l.removed.push(b),l.removedMissingCount++);const u=Date.now();for(const[b,w]of Object.entries(a.objects))!r.has(b)&&w.updatedAt<u-this._gcOpts.maxAgeMs&&(s.push(this._persister.removeItem(b)),delete a.objects[b],l.removed.push(b),l.removedOldCount++);const d=Object.entries(a.objects);d.sort(([b,w],[S,T])=>w.updatedAt-T.updatedAt);const f=d.filter(([b])=>!r.has(b));if(d.length>this._gcOpts.maxEntries)for(const[b]of f.slice(0,d.length-this._gcOpts.maxEntries))s.push(this._persister.removeItem(b)),delete a.objects[b],l.removed.push(b),l.removedThresholdCount++;const h=Object.entries(a.objects);h.sort(([b,w],[S,T])=>w.updatedAt-T.updatedAt);const v=h.filter(([b])=>!r.has(b));let g=h.reduce((b,[w,S])=>b+S.size,0);for(;g>0&&g>this._gcOpts.maxSize&&v.length;){const[[b,w]]=v.splice(0,1);g-=w.size,s.push(this._persister.removeItem(b)),delete a.objects[b],l.removed.push(b),l.removedSizeCount++}for(const b of Object.keys(a.objects))!t.has(b)&&!r.has(b)&&delete a.objects[b];return(l.removed.length||l.metaRemoved.length)&&s.push(this._enqueuePersist({skipGc:!0})),this._log.info("Completed GC",l),yield Promise.all(s),l})}gc(){this._nextGc||(this._nextGc=setTimeout(()=>{S1(()=>{this._nextGc=null,this._gc()},30*1e3)},1e3*60+Math.random()*500))}_enqueuePersist(t){return new Promise((r,a)=>{if(this._nextSave){r(0);return}this._nextSave=setTimeout(()=>{S1(()=>{this._nextSave=null,this._writeToStorage(t).then(r).catch(a)},this._idleCallbackMaxWaitMs)},this._saveThrottleMs)})}version(){return this._version}updateInPlace(t){this._version++;const[r,a]=Gu(this.currentValue,t,{enablePatches:!0});for(const s of a){const l=s.path[0];l&&typeof l=="string"&&(this._pendingSaveKeys.add(l),this._loadedKeys.has(l)||this._loadKey(l))}for(const s of Object.keys(r))if(!r[s])debugger;this.currentValue=r,this._enqueuePersist();for(const s of this._subs)s(this.currentValue);return r}subscribe(t){return this._subs.push(t),t(this.currentValue),()=>{this._subs=this._subs.filter(r=>r!==t)}}}var Ur=function(e,t,r,a){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(v){try{h(a.next(v))}catch(g){u(g)}}function f(v){try{h(a.throw(v))}catch(g){u(g)}}function h(v){v.done?l(v.value):s(v.value).then(d,f)}h((a=a.apply(e,t||[])).next())})};const yN=6,bN=["kv","querySubs","syncSubs"];function wN(e){return function(r){console.error("Error in IndexedDB event",{source:e,event:r})}}function xN(e){return Ur(this,void 0,void 0,function*(){return new Promise(t=>{const r=indexedDB.open(e);r.onerror=a=>{t(null)},r.onsuccess=a=>{const l=a.target.result;t(l)},r.onupgradeneeded=a=>{var s;(s=a.target.transaction)===null||s===void 0||s.abort(),t(null)}})})}function _N(e,t,r){return Ur(this,void 0,void 0,function*(){const a=typeof t=="string"?JSON.parse(t):t;if(!a)return;const s=new Set;return new Promise((l,u)=>{var d,f,h,v;const g={};for(const[S,T]of Object.entries(a)){const k=typeof T=="string"?JSON.parse(T):T;if(k.lastAccessed){const E={createdAt:k.lastAccessed,updatedAt:k.lastAccessed,size:(v=(h=(f=(d=k.result)===null||d===void 0?void 0:d.store)===null||f===void 0?void 0:f.triples)===null||h===void 0?void 0:h.length)!==null&&v!==void 0?v:0};g[S]=E}const _=r.put(k,S);s.add(_)}const b={objects:g},w=r.put(b,Js);s.add(w);for(const S of s)S.onsuccess=()=>{s.delete(S),s.size===0&&l()},S.onerror=T=>{u(T)}})})}function T1(e,t,r){return Ur(this,void 0,void 0,function*(){const a=r.put(t,e);return new Promise((s,l)=>{a.onsuccess=()=>s(),a.onerror=u=>l(u)})})}function SN(e,t){return Ur(this,void 0,void 0,function*(){const r=yield xN(`instant_${e}_5`);if(!r)return;const a=yield new Promise((v,g)=>{const S=r.transaction(["kv"],"readonly").objectStore("kv").openCursor();S.onerror=k=>{g(k)};const T=[];S.onsuccess=()=>{const k=S.result;if(k){const _=k.key,E=k.value;T.push([_,E]),k.continue()}else v(T)},S.onerror=k=>{g(k)}}),s=t.transaction(["kv","querySubs"],"readwrite"),l=s.objectStore("kv"),u=s.objectStore("querySubs"),d=[],f={objects:{}};for(const[v,g]of a)switch(v){case"querySubs":{const b=_N(v,g,u);d.push(b);break}default:{const b=T1(v,g,l);d.push(b);const w={createdAt:Date.now(),updatedAt:Date.now(),size:0};f.objects[v]=w;break}}const h=T1(Js,f,l);d.push(h),yield Promise.all(d),yield new Promise((v,g)=>{s.oncomplete=b=>v(b),s.onerror=b=>g(b),s.onabort=b=>g(b)})})}const k1=new Map;class xS extends vN{constructor(t,r){super(t,r),this.dbName=`instant_${t}_${yN}`,this._storeName=r,this._appId=t,this._dbPromise=this._init()}_init(){return new Promise((t,r)=>{let a=!1;const s=indexedDB.open(this.dbName,1);s.onerror=l=>{r(l)},s.onsuccess=l=>{const d=l.target.result;if(a){const f=SN(this._appId,d).catch(h=>{wN("Error upgrading store from version 5 to 6.")(h)});k1.set(this.dbName,f),f.then(()=>t(d)).catch(()=>t(d))}else{const f=k1.get(this.dbName);f?f.then(()=>t(d)).catch(()=>t(d)):t(d)}},s.onupgradeneeded=l=>{a=!0,this._upgradeStore(l)}})}_upgradeStore(t){const a=t.target.result;for(const s of bN)a.objectStoreNames.contains(s)||a.createObjectStore(s)}getItem(t){return Ur(this,void 0,void 0,function*(){const r=yield this._dbPromise;return new Promise((a,s)=>{const d=r.transaction([this._storeName],"readonly").objectStore(this._storeName).get(t);d.onerror=f=>{s(f)},d.onsuccess=f=>{d.result?a(d.result):a(null)}})})}setItem(t,r){return Ur(this,void 0,void 0,function*(){const a=yield this._dbPromise;return new Promise((s,l)=>{const f=a.transaction([this._storeName],"readwrite").objectStore(this._storeName).put(r,t);f.onerror=h=>{l(h)},f.onsuccess=h=>{s()}})})}multiSet(t){return Ur(this,void 0,void 0,function*(){const r=yield this._dbPromise;return new Promise((a,s)=>{const l=r.transaction([this._storeName],"readwrite"),u=l.objectStore(this._storeName),d=new Set;for(const[f,h]of t){const v=u.put(h,f);d.add(v)}for(const f of d)f.onerror=h=>{l.abort(),s(h)},f.onsuccess=h=>{d.delete(f),d.size===0&&a()}})})}removeItem(t){return Ur(this,void 0,void 0,function*(){const r=yield this._dbPromise;return new Promise((a,s)=>{const d=r.transaction([this._storeName],"readwrite").objectStore(this._storeName).delete(t);d.onerror=f=>{s(f)},d.onsuccess=f=>{a()}})})}getAllKeys(){return Ur(this,void 0,void 0,function*(){const t=yield this._dbPromise;return new Promise((r,a)=>{const u=t.transaction([this._storeName],"readonly").objectStore(this._storeName).getAllKeys();u.onerror=d=>{a(d)},u.onsuccess=d=>{r(u.result.filter(f=>typeof f=="string"))}})})}}var TN=function(e,t,r,a){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(v){try{h(a.next(v))}catch(g){u(g)}}function f(v){try{h(a.throw(v))}catch(g){u(g)}}function h(v){v.done?l(v.value):s(v.value).then(d,f)}h((a=a.apply(e,t||[])).next())})};class _S{static getIsOnline(){return TN(this,void 0,void 0,function*(){return navigator.onLine})}static listen(t){const r=()=>{t(!0)},a=()=>{t(!1)};return addEventListener("online",r),addEventListener("offline",a),()=>{removeEventListener("online",r),removeEventListener("offline",a)}}}class gl extends Error{constructor(t,r){super(t),this.hint=r;const a=new.target.prototype;Object.setPrototypeOf&&Object.setPrototypeOf(this,a),Error.captureStackTrace&&Error.captureStackTrace(this,gl),this.name="InstantError"}get[Symbol.toStringTag](){return"InstantError"}}var kN=function(e,t,r,a){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(v){try{h(a.next(v))}catch(g){u(g)}}function f(v){try{h(a.throw(v))}catch(g){u(g)}}function h(v){v.done?l(v.value):s(v.value).then(d,f)}h((a=a.apply(e,t||[])).next())})};class pd extends gl{constructor(t){var r;const a=((r=t.body)===null||r===void 0?void 0:r.message)||`API Error (${t.status})`;super(a,t.body.hint);const s=new.target.prototype;Object.setPrototypeOf&&Object.setPrototypeOf(this,s),Error.captureStackTrace&&Error.captureStackTrace(this,pd),this.name="InstantAPIError",this.status=t.status,this.body=t.body}get[Symbol.toStringTag](){return"InstantAPIError"}}function er(e,t){return kN(this,void 0,void 0,function*(){const r=yield fetch(e,t),a=yield r.json();return r.status===200?Promise.resolve(a):Promise.reject(new pd({status:r.status,body:a}))})}var Ho=function(e,t,r,a){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(v){try{h(a.next(v))}catch(g){u(g)}}function f(v){try{h(a.throw(v))}catch(g){u(g)}}function h(v){v.done?l(v.value):s(v.value).then(d,f)}h((a=a.apply(e,t||[])).next())})};function EN({apiURI:e,appId:t,email:r}){return er(`${e}/runtime/auth/send_magic_code`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({"app-id":t,email:r})})}function CN(e){return Ho(this,arguments,void 0,function*({apiURI:t,appId:r,email:a,code:s,refreshToken:l}){return yield er(`${t}/runtime/auth/verify_magic_code`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(Object.assign({"app-id":r,email:a,code:s},l?{"refresh-token":l}:{}))})})}function AN(e){return Ho(this,arguments,void 0,function*({apiURI:t,appId:r,refreshToken:a}){return yield er(`${t}/runtime/auth/verify_refresh_token`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({"app-id":r,"refresh-token":a})})})}function MN(e){return Ho(this,arguments,void 0,function*({apiURI:t,appId:r}){return yield er(`${t}/runtime/auth/sign_in_guest`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({"app-id":r})})})}function E1(e){return Ho(this,arguments,void 0,function*({apiURI:t,appId:r,code:a,codeVerifier:s,refreshToken:l}){return yield er(`${t}/runtime/oauth/token`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({app_id:r,code:a,code_verifier:s,refresh_token:l})})})}function ON(e){return Ho(this,arguments,void 0,function*({apiURI:t,appId:r,nonce:a,idToken:s,clientName:l,refreshToken:u}){return yield er(`${t}/runtime/oauth/id_token`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({app_id:r,nonce:a,id_token:s,client_name:l,refresh_token:u})})})}function NN(e){return Ho(this,arguments,void 0,function*({apiURI:t,appId:r,refreshToken:a}){return yield er(`${t}/runtime/signout`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({app_id:r,refresh_token:a})})})}var El=function(e,t,r,a){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(v){try{h(a.next(v))}catch(g){u(g)}}function f(v){try{h(a.throw(v))}catch(g){u(g)}}function h(v){v.done?l(v.value):s(v.value).then(d,f)}h((a=a.apply(e,t||[])).next())})};function zN(e){return El(this,arguments,void 0,function*({apiURI:t,appId:r,path:a,file:s,refreshToken:l,contentType:u,contentDisposition:d}){const f={app_id:r,path:a,authorization:`Bearer ${l}`,"content-type":u||s.type};return d&&(f["content-disposition"]=d),yield er(`${t}/storage/upload`,{method:"PUT",headers:f,body:s})})}function DN(e){return El(this,arguments,void 0,function*({apiURI:t,appId:r,path:a,refreshToken:s}){const{data:l}=yield er(`${t}/storage/files?app_id=${r}&filename=${encodeURIComponent(a)}`,{method:"DELETE",headers:{"content-type":"application/json",authorization:`Bearer ${s}`}});return l})}function RN(e){return El(this,arguments,void 0,function*({apiURI:t,appId:r,fileName:a,refreshToken:s,metadata:l={}}){const{data:u}=yield er(`${t}/storage/signed-upload-url`,{method:"POST",headers:{"content-type":"application/json",authorization:`Bearer ${s}`},body:JSON.stringify({app_id:r,filename:a})});return u})}function jN(e,t){return El(this,void 0,void 0,function*(){return(yield fetch(e,{method:"PUT",body:t,headers:{"Content-Type":t.type}})).ok})}function UN(e){return El(this,arguments,void 0,function*({apiURI:t,appId:r,path:a,refreshToken:s}){const{data:l}=yield er(`${t}/storage/signed-download-url?app_id=${r}&filename=${encodeURIComponent(a)}`,{method:"GET",headers:{"content-type":"application/json",authorization:`Bearer ${s}`}});return l})}let _g=!1,SS=!1,TS=!1;typeof window<"u"&&typeof window.localStorage<"u"&&(_g=!!window.localStorage.getItem("devBackend"),SS=!!window.localStorage.getItem("__instantLogging"),TS=!!window.localStorage.getItem("__devtoolLocalDash"));function C1(e,t){if(!t)return e;const r={};return t.forEach(a=>{r[a]=e[a]}),r}function $N(e,t,r){var a,s;const l={peers:{}};if(t&&"user"in t?t.user:!0){const d=C1((a=e.user)!==null&&a!==void 0?a:{},t==null?void 0:t.keys);l.user=Object.assign(Object.assign({},d),{peerId:r})}for(const d of Object.keys((s=e.peers)!==null&&s!==void 0?s:{})){const f=(t==null?void 0:t.peers)===void 0,h=Array.isArray(t==null?void 0:t.peers)&&(t==null?void 0:t.peers.includes(d));if(f||h){const v=C1(e.peers[d],t==null?void 0:t.keys);l.peers[d]=Object.assign(Object.assign({},v),{peerId:d})}}return l}function LN(e,t){if(e.isLoading!==t.isLoading||e.error!==t.error||(e.user||t.user)&&(!e.user||!t.user||!f1(e.user,t.user))||!W_(e.peers,t.peers))return!0;for(const a of Object.keys(e.peers))if(!f1(e.peers[a],t.peers[a]))return!0;return!1}class A1{constructor(){this.promise=new Promise((t,r)=>{this._resolve=t,this._reject=r})}resolve(t){this._resolve(t)}reject(t){this._reject(t)}}function kS(e,t=[]){e.forEach(r=>{const{data:a}=r,{"datalog-result":s}=a,{"join-rows":l}=s;for(const u of l)for(const d of u)t.push(d);kS(r["child-nodes"],t)})}function M1(e){const t=[];return kS(e,t),t}function O1(e){return Object.values(e.links).reduce((t,r)=>{var a,s,l,u;return(a=t[l=r.forward.on])!==null&&a!==void 0||(t[l]={}),t[r.forward.on][r.forward.label]={isForward:!0,isSingular:r.forward.has==="one",link:r},(s=t[u=r.reverse.on])!==null&&s!==void 0||(t[u]={}),t[r.reverse.on][r.reverse.label]={isForward:!1,isSingular:r.reverse.has==="one",link:r},t},{})}const ES="v0.22.73";function HN(e,t){return{info:e?(...r)=>console.info(...r,t()):()=>{},debug:e?(...r)=>console.debug(...r,t()):()=>{},error:e?(...r)=>console.error(...r,t()):()=>{}}}class Gt{constructor(t,r,a,s={indexed:!1,unique:!1}){this.valueType=t,this.required=r,this.isIndexed=a,this.config=s,this.metadata={}}clientRequired(){return new Gt(this.valueType,!1,this.isIndexed,this.config)}optional(){return new Gt(this.valueType,!1,this.isIndexed,this.config)}unique(){return new Gt(this.valueType,this.required,this.isIndexed,Object.assign(Object.assign({},this.config),{unique:!0}))}indexed(){return new Gt(this.valueType,this.required,!0,Object.assign(Object.assign({},this.config),{indexed:!0}))}}class md{constructor(t,r){this.attrs=t,this.links=r}asType(){return new md(this.attrs,this.links)}}class gd{constructor(t,r,a){this.entities=t,this.links=r,this.rooms=a}withRoomSchema(){return new gd(this.entities,this.links,{})}}class rt extends Error{constructor(t,r){const a=r?`At path '${r}': ${t}`:t;super(a),this.name="QueryValidationError"}}const N1=["where","order","limit","last","first","offset","after","before","fields","aggregate"],IN=e=>e.valueType||"unknown",CS=(e,t,r=!1)=>{if(r||e==null)return!0;switch(t){case"string":return typeof e=="string";case"number":return typeof e=="number"&&!isNaN(e);case"boolean":return typeof e=="boolean";case"date":return e instanceof Date||typeof e=="string"||typeof e=="number";default:return!0}},BN=(e,t,r,a,s,l,u)=>{const d=l.valueType==="json",f=(h,v,g)=>{if(!CS(g,v,d))throw new rt(`Invalid value for operator '${h}' on attribute '${a}' in entity '${s}'. Expected ${v}, but received: ${typeof g}`,u)};switch(e){case"in":case"$in":if(!Array.isArray(t))throw new rt(`Operator '${e}' for attribute '${a}' in entity '${s}' must be an array, but received: ${typeof t}`,u);for(const h of t)f(e,r,h);break;case"$not":case"$ne":case"$gt":case"$lt":case"$gte":case"$lte":f(e,r,t);break;case"$like":case"$ilike":if(f(e,"string",t),e==="$ilike"&&!l.isIndexed)throw new rt(`Operator '${e}' can only be used with indexed attributes, but '${a}' in entity '${s}' is not indexed`,u);break;case"$isNull":f(e,"boolean",t);break;default:throw new rt(`Unknown operator '${e}' for attribute '${a}' in entity '${s}'`,u)}},wo=(e,t,r,a,s)=>{const l=IN(r),u=r.valueType==="json";if(typeof e=="object"&&e!==null&&!Array.isArray(e)){if(u)return;const f=e;for(const[h,v]of Object.entries(f))BN(h,v,l,t,a,r,`${s}.${h}`)}else if(!CS(e,l,u))throw new rt(`Invalid value for attribute '${t}' in entity '${a}'. Expected ${l}, but received: ${typeof e}`,s)},qN=(e,t,r,a,s)=>{const l=e.split(".");if(l.length<2)throw new rt(`Invalid dot notation path '${e}'. Must contain at least one dot.`,s);let u=r;for(let v=0;v<l.length-1;v++){const g=l[v],b=a.entities[u];if(!b)throw new rt(`Entity '${u}' does not exist in schema while traversing dot notation path '${e}'.`,s);const w=b.links[g];if(!w){const S=Object.keys(b.links);throw new rt(`Link '${g}' does not exist on entity '${u}' in dot notation path '${e}'. Available links: ${S.length>0?S.join(", "):"none"}`,s)}u=w.entityName}const d=l[l.length-1],f=a.entities[u];if(!f)throw new rt(`Target entity '${u}' does not exist in schema for dot notation path '${e}'.`,s);if(d==="id"){if(typeof t=="string"&&!Oo(t))throw new rt(`Invalid value for id field in entity '${u}'. Expected a UUID, but received: ${t}`,s);wo(t,e,new Gt("string",!1,!0),r,s);return}const h=f.attrs[d];if(Object.keys(f.links).includes(d)){if(typeof t=="string"&&!Oo(t))throw new rt(`Invalid value for link '${d}' in entity '${u}'. Expected a UUID, but received: ${t}`,s);wo(t,e,new Gt("string",!1,!0),r,s);return}if(!h){const v=Object.keys(f.attrs);throw new rt(`Attribute '${d}' does not exist on entity '${u}' in dot notation path '${e}'. Available attributes: ${v.length>0?v.join(", ")+", id":"id"}`,s)}wo(t,e,h,r,s)},AS=(e,t,r,a)=>{for(const[s,l]of Object.entries(e)){if(s==="or"||s==="and"){if(Array.isArray(l))for(const h of l)typeof h=="object"&&h!==null&&AS(h,t,r,`${a}.${s}[${h}]`);continue}if(s==="id"){wo(l,"id",new Gt("string",!1,!0),t,`${a}.id`);continue}if(s.includes(".")){qN(s,l,t,r,`${a}.${s}`);continue}const u=r.entities[t];if(!u)continue;const d=u.attrs[s],f=u.links[s];if(!d&&!f){const h=Object.keys(u.attrs),v=Object.keys(u.links);throw new rt(`Attribute or link '${s}' does not exist on entity '${t}'. Available attributes: ${h.length>0?h.join(", "):"none"}. Available links: ${v.length>0?v.join(", "):"none"}`,`${a}.${s}`)}if(d)wo(l,s,d,t,`${a}.${s}`);else if(f){if(typeof l=="string"&&!Oo(l))throw new rt(`Invalid value for link '${s}' in entity '${t}'. Expected a UUID, but received: ${l}`,`${a}.${s}`);const h=new Gt("string",!1,!0);wo(l,s,h,t,`${a}.${s}`)}}},FN=(e,t,r,a,s=0)=>{for(const u of Object.keys(e))if(!N1.includes(u))throw new rt(`Invalid query parameter '${u}' in $ object. Valid parameters are: ${N1.join(", ")}. Found: ${u}`,a);const l=["offset","before","after","first","last"];for(const u of l)if(e[u]!==void 0&&s>0)throw new rt(`'${u}' can only be used on top-level namespaces. It cannot be used in nested queries.`,a);if(e.where&&r){if(typeof e.where!="object"||e.where===null)throw new rt(`'where' clause must be an object in entity '${t}', but received: ${typeof e.where}`,a?`${a}.where`:void 0);AS(e.where,t,r,a?`${a}.where`:"where")}},MS=(e,t,r,a,s=0)=>{var l;if(!e||typeof e!="object")throw new rt(`Query part for entity '${t}' must be an object, but received: ${typeof e}`,a);for(const u of Object.keys(e))if(u!=="$"){if(r&&!(u in r.entities[t].links)){const f=Object.keys(r.entities[t].links);throw new rt(`Link '${u}' does not exist on entity '${t}'. Available links: ${f.length>0?f.join(", "):"none"}`,`${a}.${u}`)}const d=e[u];if(typeof d=="object"&&d!==null){const f=(l=r==null?void 0:r.entities[t].links[u])===null||l===void 0?void 0:l.entityName;f&&MS(d,f,r,`${a}.${u}`,s+1)}}else{const d=e[u];if(typeof d!="object"||d===null)throw new rt(`Query parameter '$' must be an object in entity '${t}', but received: ${typeof d}`,`${a}.$`);FN(d,t,r,`${a}.$`,s)}},z1=(e,t)=>{if(typeof e!="object"||e===null)throw new rt(`Query must be an object, but received: ${typeof e}${e===null?" (null)":""}`);if(Array.isArray(e))throw new rt(`Query must be an object, but received: ${typeof e}`);const r=e;for(const a of Object.keys(r)){if(Array.isArray(e[a]))throw new rt(`Query keys must be strings, but found key of type: ${typeof a}`,a);if(typeof a!="string")throw new rt(`Query keys must be strings, but found key of type: ${typeof a}`,a);if(a!=="$$ruleParams"){if(t&&!t.entities[a]){const s=Object.keys(t.entities);throw new rt(`Entity '${a}' does not exist in schema. Available entities: ${s.length>0?s.join(", "):"none"}`,a)}MS(r[a],a,t,a,0)}}},D1=e=>typeof e!="string"?!1:Qu(e)?!0:Oo(e);class Hn extends Error{constructor(t){super(t),this.name="TransactionValidationError"}}const OS=e=>e.length>0?e.join(", "):"none",YN=(e,t)=>new Hn(`Entity '${e}' does not exist in schema. Available entities: ${OS(t)}`),R1={string:e=>typeof e=="string",number:e=>typeof e=="number"&&!isNaN(e),boolean:e=>typeof e=="boolean",date:e=>e instanceof Date||typeof e=="string"||typeof e=="number",json:()=>!0},PN=(e,t)=>{var r,a;return e==null?!0:(a=(r=R1[t.valueType])===null||r===void 0?void 0:r.call(R1,e))!==null&&a!==void 0?a:!1},NS=(e,t)=>{const r=t.entities[e];if(!r)throw YN(e,Object.keys(t.entities));return r},Sp=(e,t,r)=>{const a=NS(e,r);if(typeof t!="object"||t===null)throw new Hn(`Arguments for data operation on entity '${e}' must be an object, but received: ${typeof t}`);for(const[s,l]of Object.entries(t)){if(s==="id")continue;const u=a.attrs[s];if(u&&!PN(l,u))throw new Hn(`Invalid value for attribute '${s}' in entity '${e}'. Expected ${u.valueType}, but received: ${typeof l}`)}},j1=(e,t,r)=>{const a=NS(e,r);if(typeof t!="object"||t===null)throw new Hn(`Arguments for link operation on entity '${e}' must be an object, but received: ${typeof t}`);for(const[s,l]of Object.entries(t)){if(!a.links[s]){const d=Object.keys(a.links);throw new Hn(`Link '${s}' does not exist on entity '${e}'. Available links: ${OS(d)}`)}if(l!=null){if(Array.isArray(l)){for(const d of l)if(!D1(d))throw new Hn(`Invalid entity ID in link '${s}' for entity '${e}'. Expected a UUID or a lookup, but received: ${d}`)}else if(!D1(l))throw new Hn(`Invalid UUID in link '${s}' for entity '${e}'. Expected a UUID, but received: ${l}`)}}},XN={create:Sp,update:Sp,merge:Sp,link:j1,unlink:j1,delete:()=>{}},GN=(e,t)=>{if(!t)return;const[r,a,s,l]=e;if(!Array.isArray(s)&&!Oo(s))throw new Hn(`Invalid id for entity '${a}'. Expected a UUID, but received: ${s}`);if(typeof a!="string")throw new Hn(`Entity name must be a string, but received: ${typeof a}`);const u=XN[r];u&&l!==void 0&&u(a,l,t)},VN=(e,t)=>{const r=Array.isArray(e)?e:[e];for(const a of r){if(!a||typeof a!="object")throw new Hn(`Transaction chunk must be an object, but received: ${typeof a}`);if(!Array.isArray(a.__ops))throw new Hn(`Transaction chunk must have __ops array, but received: ${typeof a.__ops}`);for(const s of a.__ops){if(!Array.isArray(s))throw new Hn(`Transaction operation must be an array, but received: ${typeof s}`);GN(s,t)}}};var U1=function(e,t,r,a){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(v){try{h(a.next(v))}catch(g){u(g)}}function f(v){try{h(a.throw(v))}catch(g){u(g)}}function h(v){v.done?l(v.value):s(v.value).then(d,f)}h((a=a.apply(e,t||[])).next())})};let zS=0;class $1{constructor(t){this.type="ws",this.id=`${this.type}_${zS++}`,this.conn=new WebSocket(t),this.conn.onopen=r=>{this.onopen&&this.onopen({target:this})},this.conn.onmessage=r=>{this.onmessage&&this.onmessage({target:this,message:JSON.parse(r.data.toString())})},this.conn.onclose=r=>{this.onclose&&this.onclose({target:this})},this.conn.onerror=r=>{this.onerror&&this.onerror({target:this})}}close(){this.conn.close()}isOpen(){var t;return this.conn.readyState===((t=WebSocket.OPEN)!==null&&t!==void 0?t:1)}isConnecting(){var t;return this.conn.readyState===((t=WebSocket.CONNECTING)!==null&&t!==void 0?t:0)}send(t){return this.conn.send(JSON.stringify(t))}}class QN{constructor(t,r){this.type="sse",this.initParams=null,this.sendQueue=[],this.closeFired=!1,this.sseInitTimeout=void 0,this.id=`${this.type}_${zS++}`,this.url=r,this.ES=t,this.conn=new t(r),this.sseInitTimeout=setTimeout(()=>{this.initParams||this.handleError()},1e4),this.conn.onmessage=a=>{const s=JSON.parse(a.data);if(s.op==="sse-init"){this.initParams={machineId:s["machine-id"],sessionId:s["session-id"],sseToken:s["sse-token"]},this.onopen&&this.onopen({target:this}),clearTimeout(this.sseInitTimeout);return}this.onmessage&&this.onmessage({target:this,message:s})},this.conn.onerror=a=>{this.handleError()}}handleError(){try{this.onerror&&this.onerror({target:this})}finally{this.handleClose()}}handleClose(){this.conn.close(),this.onclose&&!this.closeFired&&(this.closeFired=!0,this.onclose({target:this}))}postMessages(t){return U1(this,void 0,void 0,function*(){var r,a,s;try{(yield fetch(this.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({machine_id:(r=this.initParams)===null||r===void 0?void 0:r.machineId,session_id:(a=this.initParams)===null||a===void 0?void 0:a.sessionId,sse_token:(s=this.initParams)===null||s===void 0?void 0:s.sseToken,messages:t})})).ok||this.handleError()}catch{this.handleError()}})}flushQueue(){return U1(this,void 0,void 0,function*(){if(this.sendPromise||!this.sendQueue.length)return;const t=this.sendQueue;this.sendQueue=[];const r=this.postMessages(t);this.sendPromise=r,r.then(()=>{this.sendPromise=null,this.flushQueue()})})}send(t){if(!this.isOpen()||!this.initParams)throw this.isConnecting()?new Error("Failed to execute 'send' on 'EventSource': Still in CONNECTING state."):this.conn.readyState===this.ES.CLOSED?new Error("EventSource is already in CLOSING or CLOSED state."):new Error("EventSource is in invalid state.");this.sendQueue.push(t),this.flushQueue()}isOpen(){return this.conn.readyState===this.ES.OPEN&&this.initParams!==null}isConnecting(){return this.conn.readyState===this.ES.CONNECTING||this.conn.readyState===this.ES.OPEN&&this.initParams===null}close(){this.handleClose()}}var L1=function(e,t,r,a){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(v){try{h(a.next(v))}catch(g){u(g)}}function f(v){try{h(a.throw(v))}catch(g){u(g)}}function h(v){v.done?l(v.value):s(v.value).then(d,f)}h((a=a.apply(e,t||[])).next())})};function KN(e,t){const r=e.values;if(r)for(const a of r.entities||[])a.store.useDateObjects=t,a.store.attrs=r.attrs,a.store=rS(a.store);return e}function WN(e,t){var r,a;if(!((r=t.values)===null||r===void 0)&&r.entities){const s=[];for(const l of(a=t.values)===null||a===void 0?void 0:a.entities){const u=nS(l.store);delete u.attrs,s.push(Object.assign(Object.assign({},l),{store:u}))}return Object.assign(Object.assign({},t),{values:Object.assign(Object.assign({},t.values),{entities:s})})}else return t}function ZN(e,t,r){var a,s;const l=(a=t==null?void 0:t.state)===null||a===void 0?void 0:a.txId,u=(s=r==null?void 0:r.state)===null||s===void 0?void 0:s.txId;return l&&(!u||l>u)?t:u&&(!l||u>l)?r:t||r}function Tp(e,t){return gS({store:t,pageInfo:null,aggregate:null},e.query).data[e.table][0]}function H1(e,t,r){var a;const s=(a=Oi(t,e.table,"id"))===null||a===void 0?void 0:a.id;if(!s)return-1;const l=Lo(t.eav,[r,s,r]);return l?l[3]:-1}function I1(e,t){for(const{action:r,triple:a}of t)switch(r){case"added":oS(e,a);break;case"removed":iS(e,a);break}}function JN(e,t){var r,a,s,l;const u={};for(const{action:d,triple:f}of t){const[h,v,g]=f,b=(a=(r=e.attrs[v])===null||r===void 0?void 0:r["forward-identity"])===null||a===void 0?void 0:a[2];if(!b)continue;const w=(s=u[h])!==null&&s!==void 0?s:{};u[h]=w;const S=(l=w[b])!==null&&l!==void 0?l:{};switch(w[b]=S,d){case"added":S.newValue=g;break;case"removed":S.oldValue===void 0&&(S.oldValue=g);break}}for(const d of Object.keys(u)){const{oldValue:f,newValue:h}=u[d];f===h&&delete u[d]}return u}function cu(e,t){return{[e.table]:t.map(r=>r.entity)}}function ez(e,t){var r;if(e.orderFieldType)return e.orderFieldType;const a=e.orderField==="serverCreatedAt"?"number":(r=Oi(t([]),e.table,e.orderField))===null||r===void 0?void 0:r["checked-data-type"];return e.orderFieldType=a,a}function tz(e,t,r){const a=t;if(e.orderField==="serverCreatedAt"){r.sort(e.orderDirection==="asc"?function(u,d){return Ps(u.entity.id,u.serverCreatedAt,d.entity.id,d.serverCreatedAt,a)}:function(u,d){return Ps(d.entity.id,d.serverCreatedAt,u.entity.id,u.serverCreatedAt,a)});return}const s=e.orderField;r.sort(e.orderDirection==="asc"?function(u,d){return Ps(u.entity.id,u.entity[s],d.entity.id,d.entity[s],a)}:function(u,d){return Ps(d.entity.id,d.entity[s],u.entity.id,u.entity[s],a)})}var na;(function(e){e.InitialSyncBatch="InitialSyncBatch",e.InitialSyncComplete="InitialSyncComplete",e.LoadFromStorage="LoadFromStorage",e.SyncTransaction="SyncTransaction",e.Error="Error"})(na||(na={}));class nz{constructor(t,r,a,s,l){this.callbacks={},this.idToHash={},this.trySend=t,this.config=a,this.log=s,this.createStore=l,this.subs=new xm({persister:r,merge:ZN,serialize:WN,parse:(u,d)=>KN(d,this.config.useDateObjects),objectSize:u=>{var d;return((d=u.values)===null||d===void 0?void 0:d.entities.length)||0},logger:s,gc:{maxAgeMs:1e3*60*60*24*7*52,maxEntries:1e3,maxSize:1e6}})}beforeUnload(){this.subs.flush()}subscribe(t,r){const a=Ft(t);return this.callbacks[a]=this.callbacks[a]||[],this.callbacks[a].push(r),this.initSubscription(t,a,r),s=>{this.unsubscribe(a,r,s==null?void 0:s.keepSubscription)}}unsubscribe(t,r,a){const s=(this.callbacks[t]||[]).filter(l=>l!==r);if(this.callbacks[t]=s,!s.length){delete this.callbacks[t];const l=this.subs.currentValue[t];l!=null&&l.state&&this.clearSubscriptionData(l.state.subscriptionId,!!a),a||this.subs.updateInPlace(u=>{delete u[t]})}}sendStart(t){this.trySend(Je(),{op:"start-sync",q:t})}sendResync(t,r,a){this.idToHash[r.subscriptionId]=t.hash,this.trySend(r.subscriptionId,{op:"resync-table","subscription-id":r.subscriptionId,"tx-id":a,token:r.token})}sendRemove(t,r){this.trySend(Je(),{op:"remove-sync","subscription-id":t.subscriptionId,"keep-subscription":r})}initSubscription(t,r,a){return L1(this,void 0,void 0,function*(){var s,l,u,d;yield this.subs.waitForKeyToLoad(r);const f=this.subs.currentValue[r];if(f&&f.state&&f.state.txId){this.sendResync(f,f.state,f.state.txId),!((s=f.values)===null||s===void 0)&&s.entities&&a&&a({type:na.LoadFromStorage,data:cu(f,(l=f.values)===null||l===void 0?void 0:l.entities)});return}const h=Object.keys(t)[0],v=((d=(u=t[h])===null||u===void 0?void 0:u.$)===null||d===void 0?void 0:d.order)||{serverCreatedAt:"asc"},[g,b]=Object.entries(v)[0];this.subs.updateInPlace(w=>{w[r]={query:t,hash:r,table:h,orderDirection:b,orderField:g,createdAt:Date.now(),updatedAt:Date.now()}}),this.sendStart(t)})}flushPending(){return L1(this,void 0,void 0,function*(){for(const t of Object.keys(this.callbacks)){yield this.subs.waitForKeyToLoad(t);const r=this.subs.currentValue[t];r?yield this.initSubscription(r.query,r.hash):this.log.error("Missing sub for hash in flushPending",t)}})}onStartSyncOk(t){const r=t["subscription-id"],a=t.q,s=Ft(a);this.idToHash[r]=s,this.subs.updateInPlace(l=>{const u=l[s];if(!u)return this.log.error("Missing sub for hash",s,"subscription-id",r,"query",a),l;u.state={subscriptionId:r,token:t.token}})}notifyCbs(t,r){for(const a of this.callbacks[t]||[])a(r)}onSyncLoadBatch(t){var r;const a=t["subscription-id"],s=t["join-rows"],l=this.idToHash[a];if(!l){this.log.error("Missing hash for subscription",t);return}const u=[],d=this.subs.currentValue[l];if(!d){this.log.error("Missing sub for hash",l,t);return}const f=(r=d.values)!==null&&r!==void 0?r:{entities:[],attrs:this.createStore([]).attrs};d.values=f;const h=f.entities;for(const v of s){const g=this.createStore(v);f.attrs=g.attrs;const b=Tp(d,g);h.push({store:g,entity:b,serverCreatedAt:H1(d,g,b.id)}),u.push(b)}this.subs.updateInPlace(v=>{v[l]=d,v[l].updatedAt=Date.now()}),d.values&&this.notifyCbs(l,{type:na.InitialSyncBatch,data:cu(d,d.values.entities),batch:u})}onSyncInitFinish(t){var r;const a=t["subscription-id"],s=this.idToHash[a];if(!s){this.log.error("Missing hash for subscription",t);return}this.subs.updateInPlace(u=>{const d=u[s];if(!d){this.log.error("Missing sub for hash",s,t);return}const f=d.state;if(!f)return this.log.error("Sub never set init, missing result",d,t),u;f.txId=t["tx-id"],d.updatedAt=Date.now()});const l=this.subs.currentValue[s];l&&this.notifyCbs(s,{type:na.InitialSyncComplete,data:cu(l,((r=l.values)===null||r===void 0?void 0:r.entities)||[])})}onSyncUpdateTriples(t){var r,a,s;const l=t["subscription-id"],u=this.idToHash[l];if(!u){this.log.error("Missing hash for subscription",t);return}const d=this.subs.currentValue[u];if(!d){this.log.error("Missing sub for hash",u,t);return}const f=d.state;if(!f){this.log.error("Missing state for sub",d,t);return}for(const h of t.txes){if(f.txId&&f.txId>=h["tx-id"])continue;f.txId=h["tx-id"];const v=[],g={};for(const E of h.changes){const M=(r=g[E.triple[0]])!==null&&r!==void 0?r:[];g[E.triple[0]]=M,M.push(E)}const b=(a=d.values)!==null&&a!==void 0?a:{entities:[],attrs:this.createStore([]).attrs},w=b.entities;d.values=b;const S=[];e:for(const[E,M]of Object.entries(g))for(let D=0;D<w.length;D++){const j=w[D];if(jO(j.store,E)){I1(j.store,M);const Y=Tp(d,j.store),B=JN(j.store,M)[E];Y?(S.push({oldEntity:j.entity,newEntity:Y,changedFields:B||{}}),j.entity=Y):v.push(D),delete g[E];continue e}}const T=[];for(const[E,M]of Object.entries(g)){const D=this.createStore([]);b.attrs=D.attrs,I1(D,M);const j=Tp(d,D);if(!j){this.log.error("No entity found after applying change",{sub:d,changes:M,store:D});continue}w.push({store:D,entity:j,serverCreatedAt:H1(d,D,j.id)}),T.push(j)}const k=[];for(const E of v.sort().reverse())k.push(w[E].entity),w.splice(E,1);const _=ez(d,this.createStore);tz(d,_,w),this.notifyCbs(u,{type:na.SyncTransaction,data:cu(d,(s=d.values)===null||s===void 0?void 0:s.entities),added:T,removed:k,updated:S})}this.subs.updateInPlace(h=>{h[u]=d,h[u].updatedAt=Date.now()})}clearSubscriptionData(t,r){const a=this.idToHash[t];if(a){delete this.idToHash[t];const s=this.subs.currentValue[a];if(s.state&&this.sendRemove(s.state,r),r?this.subs.unloadKey(a):this.subs.updateInPlace(l=>{delete l[a]}),s)return s}}onStartSyncError(t){const r=Ft(t["original-event"].q),a={message:t.message||"Uh-oh, something went wrong. Ping Joe & Stopa.",status:t.status,type:t.type,hint:t.hint},s=Object.keys(t["original-event"].q)[0];this.notifyCbs(r,{type:na.Error,data:{[s]:[]},error:a})}onResyncError(t){const r=t["original-event"]["subscription-id"],a=this.clearSubscriptionData(r,!1);a&&this.initSubscription(a.query,a.hash)}}var _t=function(e,t,r,a){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(v){try{h(a.next(v))}catch(g){u(g)}}function f(v){try{h(a.throw(v))}catch(g){u(g)}}function h(v){v.done?l(v.value):s(v.value).then(d,f)}h((a=a.apply(e,t||[])).next())})},rz=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Dr={CONNECTING:"connecting",OPENED:"opened",AUTHENTICATED:"authenticated",CLOSED:"closed",ERRORED:"errored"},iz=3e4,az=3e4,oz=200,sz={apiURI:"https://api.instantdb.com",websocketURI:"wss://api.instantdb.com/runtime/session"},kp="_instant_oauth_redirect",Hs="currentUser";function lz({transportType:e,appId:t,apiURI:r,wsURI:a,EventSourceImpl:s}){if(!s)return new $1(`${a}?app_id=${t}`);switch(e){case"ws":return new $1(`${a}?app_id=${t}`);case"sse":return new QN(s,`${r}/runtime/sse?app_id=${t}`);default:throw new Error("Unknown transport type "+e)}}function cz(){return typeof window<"u"||typeof chrome<"u"}const B1={"set-presence":!0,"set-presence-ok":!0,"refresh-presence":!0,"patch-presence":!0};function uz(e,t){var r;const a=typeof e=="string"?JSON.parse(e):e;if(!((r=a==null?void 0:a.result)===null||r===void 0)&&r.store){const s=a.result.store;a.result.store=rS(Object.assign(Object.assign({},s),{useDateObjects:t}))}return a}function dz(e,t){var r;const a=Object.assign({},t);return!((r=t.result)===null||r===void 0)&&r.store&&(a.result=Object.assign(Object.assign({},t.result),{store:nS(t.result.store)})),a}function fz(e,t){switch(e){case"pendingMutations":return new Map(typeof t=="string"?JSON.parse(t):t);default:return t}}function hz(e,t){switch(e){case"pendingMutations":return[...t.entries()];default:return t}}function pz(e,t,r){const a=t==null?void 0:t.result,s=r==null?void 0:r.result;return a&&!s&&r&&(r.result=a),r||t}function q1(e){return[...e].sort((t,r)=>{const[a,s]=t,[l,u]=r,d=s.order||0,f=u.order||0;return d==f?a<l?-1:a>l?1:0:d-f})}class mz{constructor(t,r=xS,a=_S,s,l){var u,d,f;if(this._isOnline=!0,this._isShutdown=!1,this.status=Dr.CONNECTING,this.queryCbs={},this.queryOnceDfds={},this.authCbs=[],this.attrsCbs=[],this.mutationErrorCbs=[],this.connectionStatusCbs=[],this.mutationDeferredStore=new Map,this._reconnectTimeoutId=null,this._reconnectTimeoutMs=0,this._transportType="ws",this._wsOk=null,this._localIdPromises={},this._errorMessage=null,this._oauthCallbackResponse=null,this._linkIndex=null,this._rooms={},this._roomsPendingLeave={},this._presence={},this._broadcastQueue=[],this._broadcastSubs={},this._currentUserCached={isLoading:!0,error:void 0,user:void 0},this._beforeUnloadCbs=[],this._dataForQueryCache={},this._inFlightMutationEventIds=new Set,this._onMergeKv=(h,v,g)=>{var b,w;switch(h){case"pendingMutations":{const S=(b=v==null?void 0:v.entries())!==null&&b!==void 0?b:[],T=(w=g==null?void 0:g.entries())!==null&&w!==void 0?w:[],k=new Map([...S,...T]);return(v?this._rewriteMutationsSorted(this.attrs,v):[]).forEach(([E,M])=>{var D;!(!((D=g==null?void 0:g.pendingMutations)===null||D===void 0)&&D.has(E))&&!M["tx-id"]&&this._sendMutation(E,M)}),k}default:return g||v}},this.getPreviousResult=h=>{const v=Ft(h);return this.dataForQuery(v)},this.notifyOne=h=>{var v,g;const b=(v=this.queryCbs[h])!==null&&v!==void 0?v:[],w=(g=this._dataForQueryCache[h])===null||g===void 0?void 0:g.data,S=this.dataForQuery(h);S&&(Eu(S,w)||b.forEach(T=>T.cb(S)))},this.notifyOneQueryOnce=h=>{var v;const g=(v=this.queryOnceDfds[h])!==null&&v!==void 0?v:[],b=this.dataForQuery(h);g.forEach(w=>{this._completeQueryOnce(w.q,h,w.dfd),w.dfd.resolve(b)})},this.notifyQueryError=(h,v)=>{(this.queryCbs[h]||[]).forEach(b=>b.cb({error:v}))},this.pushTx=h=>{this.config.disableValidation||VN(h,this.config.schema);try{const v=gN({attrs:this.optimisticAttrs(),schema:this.config.schema,stores:Object.values(this.querySubs.currentValue).map(g=>{var b;return(b=g==null?void 0:g.result)===null||b===void 0?void 0:b.store}),useDateObjects:this.config.useDateObjects},h);return this.pushOps(v)}catch(v){return this.pushOps([],v)}},this.pushOps=(h,v)=>{const g=Je(),b=[...this._pendingMutations().values()],w=Math.max(0,...b.map(k=>k.order||0))+1,S={op:"transact","tx-steps":h,created:Date.now(),error:v,order:w};this._updatePendingMutations(k=>{k.set(g,S)});const T=new A1;return this.mutationDeferredStore.set(g,T),this._sendMutation(g,S),this.notifyAll(),T.promise},this._transportOnOpen=h=>{const v=h.target;if(this._transport!==v){this._log.info("[socket][open]",v.id,"skip; this is no longer the current transport");return}this._log.info("[socket][open]",this._transport.id),this._setStatus(Dr.OPENED),this.getCurrentUser().then(g=>{var b;this._trySend(Je(),{op:"init","app-id":this.config.appId,"refresh-token":(b=g.user)===null||b===void 0?void 0:b.refresh_token,versions:this.versions,"__admin-token":this.config.__adminToken})}).catch(g=>{this._log.error("[socket][error]",v.id,g)})},this._transportOnMessage=h=>{const v=h.target,g=h.message;if(this._transport!==v){this._log.info("[socket][message]",v.id,g,"skip; this is no longer the current transport");return}!this._wsOk&&v.type==="ws"&&(this._wsOk=!0),this._transportType="ws",this._handleReceive(v.id,h.message)},this._transportOnError=h=>{const v=h.target;if(this._transport!==v){this._log.info("[socket][error]",v.id,"skip; this is no longer the current transport");return}this._log.error("[socket][error]",v.id,h)},this._scheduleReconnect=()=>{!this._wsOk&&this._transportType!=="sse"&&(this._transportType="sse",this._reconnectTimeoutMs=0),setTimeout(()=>{if(this._reconnectTimeoutMs=Math.min(this._reconnectTimeoutMs+1e3,1e4),!this._isOnline){this._log.info("[socket][close]",this._transport.id,"we are offline, no need to start socket");return}this._startSocket()},this._reconnectTimeoutMs)},this._transportOnClose=h=>{const v=h.target;if(this._transport!==v){this._log.info("[socket][close]",v.id,"skip; this is no longer the current transport");return}this._setStatus(Dr.CLOSED);for(const g of Object.values(this._rooms))g.isConnected=!1;if(this._isShutdown){this._log.info("[socket][close]",v.id,"Reactor has been shut down and will not reconnect");return}this._log.info("[socket][close]",v.id,"schedule reconnect, ms =",this._reconnectTimeoutMs),this._scheduleReconnect()},this._EventSource=l,this.config=Object.assign(Object.assign({},sz),t),this.queryCacheLimit=(u=this.config.queryCacheLimit)!==null&&u!==void 0?u:10,this._pendingTxCleanupTimeout=(d=this.config.pendingTxCleanupTimeout)!==null&&d!==void 0?d:az,this._pendingMutationCleanupThreshold=(f=this.config.pendingMutationCleanupThreshold)!==null&&f!==void 0?f:oz,this._log=HN(t.verbose||_g||SS,()=>this._reactorStats()),this.versions=Object.assign(Object.assign({},s||{}),{"@instantdb/core":ES}),this.config.schema&&(this._linkIndex=O1(this.config.schema)),!!cz()){if(!t.appId)throw new Error("Instant must be initialized with an appId.");if(!Oo(t.appId))throw new Error(`Instant must be initialized with a valid appId. \`${t.appId}\` is not a valid uuid.`);typeof BroadcastChannel=="function"&&(this._broadcastChannel=new BroadcastChannel("@instantdb"),this._broadcastChannel.addEventListener("message",h=>_t(this,void 0,void 0,function*(){var v;try{if(((v=h.data)===null||v===void 0?void 0:v.type)==="auth"){const g=yield this.getCurrentUser();this.updateUser(g.user)}}catch(g){this._log.error("[error] handle broadcast channel",g)}}))),this._initStorage(r),this._syncTable=new nz(this._trySendAuthed.bind(this),new r(this.config.appId,"syncSubs"),{useDateObjects:this.config.useDateObjects},this._log,h=>Cu(this.attrs,h,this.config.enableCardinalityInference,this._linkIndex,this.config.useDateObjects)),this._oauthCallbackResponse=this._oauthLoginInit(),this.getCurrentUser(),a.getIsOnline().then(h=>{this._isOnline=h,this._startSocket(),a.listen(v=>{v!==this._isOnline&&(this._log.info("[network] online =",v),this._isOnline=v,this._isOnline?this._startSocket():(this._log.info("Changing status from",this.status,"to",Dr.CLOSED),this._setStatus(Dr.CLOSED)))})}),typeof addEventListener<"u"&&(this._beforeUnload=this._beforeUnload.bind(this),addEventListener("beforeunload",this._beforeUnload))}}updateSchema(t){this.config=Object.assign(Object.assign({},this.config),{schema:t,cardinalityInference:!!t}),this._linkIndex=t?O1(this.config.schema):null}_reactorStats(){return{inFlightMutationCount:this._inFlightMutationEventIds.size,pendingMutationCount:this._pendingMutations().size,transportType:this._transportType}}_onQuerySubLoaded(t){this.kv.waitForKeyToLoad("pendingMutations").then(()=>this.notifyOne(t))}_initStorage(t){this.querySubs=new xm({persister:new t(this.config.appId,"querySubs"),merge:pz,serialize:dz,parse:(r,a)=>uz(a,this.config.useDateObjects),objectSize:r=>{var a,s,l,u;return(u=(l=(s=(a=r.result)===null||a===void 0?void 0:a.store)===null||s===void 0?void 0:s.triples)===null||l===void 0?void 0:l.length)!==null&&u!==void 0?u:0},logger:this._log,preloadEntryCount:10,gc:{maxAgeMs:1e3*60*60*24*7*52,maxEntries:1e3,maxSize:1e6}}),this.querySubs.onKeyLoaded=r=>this._onQuerySubLoaded(r),this.kv=new xm({persister:new t(this.config.appId,"kv"),merge:this._onMergeKv,serialize:hz,parse:fz,objectSize:()=>0,logger:this._log,saveThrottleMs:100,idleCallbackMaxWaitMs:100,gc:null}),this.kv.onKeyLoaded=r=>{r==="pendingMutations"&&this.notifyAll()},this.kv.waitForKeyToLoad("pendingMutations"),this.kv.waitForKeyToLoad(Hs),this._beforeUnloadCbs.push(()=>{this.kv.flush(),this.querySubs.flush()})}_beforeUnload(){for(const t of this._beforeUnloadCbs)t();this._syncTable.beforeUnload()}_finishTransaction(t,r,a){const s=this.mutationDeferredStore.get(r);this.mutationDeferredStore.delete(r);const l=t!=="error"&&t!=="timeout";if(!s&&!l&&console.error("Mutation failed",Object.assign({status:t,eventId:r},a)),!!s)if(l)s.resolve({status:t,eventId:r});else if(a!=null&&a.type){const{status:u}=a,d=rz(a,["status"]);s.reject(new pd({body:d,status:u??0}))}else s.reject(new gl((a==null?void 0:a.message)||"Unknown error",a==null?void 0:a.hint))}_setStatus(t,r){this.status=t,this._errorMessage=r,this.notifyConnectionStatusSubs(t)}_flushEnqueuedRoomData(t){var r,a;const s=(a=(r=this._presence[t])===null||r===void 0?void 0:r.result)===null||a===void 0?void 0:a.user,l=this._broadcastQueue[t];if(this._broadcastQueue[t]=[],s&&this._trySetPresence(t,s),l)for(const u of l){const{topic:d,roomType:f,data:h}=u;this._tryBroadcast(t,f,d,h)}}_handleReceive(t,r){var a,s,l,u,d,f;const h=!!this.config.schema&&("cardinalityInference"in this.config?!!this.config.cardinalityInference:!0);switch(B1[r.op]||this._log.info("[receive]",t,r.op,r),r.op){case"init-ok":{this._setStatus(Dr.AUTHENTICATED),this._reconnectTimeoutMs=0,this._setAttrs(r.attrs),this._flushPendingMessages(),this._sessionId=r["session-id"];for(const b of Object.keys(this._rooms)){const w=(s=(a=this._presence[b])===null||a===void 0?void 0:a.result)===null||s===void 0?void 0:s.user;this._tryJoinRoom(b,w)}break}case"add-query-exists":{this.notifyOneQueryOnce(Ft(r.q));break}case"add-query-ok":{const{q:b,result:w}=r,S=Ft(b);if(!this._hasQueryListeners()&&!this.querySubs.currentValue[S])break;const T=(u=(l=w==null?void 0:w[0])===null||l===void 0?void 0:l.data)===null||u===void 0?void 0:u["page-info"],k=(f=(d=w==null?void 0:w[0])===null||d===void 0?void 0:d.data)===null||f===void 0?void 0:f.aggregate,_=M1(w),E=Cu(this.attrs,_,h,this._linkIndex,this.config.useDateObjects);this.querySubs.updateInPlace(M=>{if(!M[S]){this._log.info("Missing value in querySubs",{hash:S,q:b});return}M[S].result={store:E,pageInfo:T,aggregate:k,processedTxId:r["processed-tx-id"]}}),this._cleanupPendingMutationsQueries(),this.notifyOne(S),this.notifyOneQueryOnce(S),this._cleanupPendingMutationsTimeout();break}case"start-sync-ok":{this._syncTable.onStartSyncOk(r);break}case"sync-load-batch":{this._syncTable.onSyncLoadBatch(r);break}case"sync-init-finish":{this._syncTable.onSyncInitFinish(r);break}case"sync-update-triples":{this._syncTable.onSyncUpdateTriples(r);break}case"refresh-ok":{const{computations:b,attrs:w}=r,S=r["processed-tx-id"];w&&this._setAttrs(w),this._cleanupPendingMutationsTimeout();const T=this._rewriteMutations(this.attrs,this._pendingMutations(),S);T!==this._pendingMutations()&&this.kv.updateInPlace(E=>{E.pendingMutations=T});const k=q1(T.entries()),_=b.map(E=>{var M,D,j,Y;const B=E["instaql-query"],ee=E["instaql-result"],ne=Ft(B),pe=M1(ee),de=Cu(this.attrs,pe,h,this._linkIndex,this.config.useDateObjects),ae=this._applyOptimisticUpdates(de,k,S),De=(D=(M=ee==null?void 0:ee[0])===null||M===void 0?void 0:M.data)===null||D===void 0?void 0:D["page-info"],Ie=(Y=(j=ee==null?void 0:ee[0])===null||j===void 0?void 0:j.data)===null||Y===void 0?void 0:Y.aggregate;return{q:B,hash:ne,store:ae,pageInfo:De,aggregate:Ie}});_.forEach(({hash:E,q:M,store:D,pageInfo:j,aggregate:Y})=>{this.querySubs.updateInPlace(B=>{if(!B[E]){this._log.error("Missing value in querySubs",{hash:E,q:M});return}B[E].result={store:D,pageInfo:j,aggregate:Y,processedTxId:S}})}),this._cleanupPendingMutationsQueries(),_.forEach(({hash:E})=>{this.notifyOne(E)});break}case"transact-ok":{const{"client-event-id":b,"tx-id":w}=r;this._inFlightMutationEventIds.delete(b);const T=this._rewriteMutations(this.attrs,this._pendingMutations()).get(b);if(!T)break;this._updatePendingMutations(_=>{_.set(b,Object.assign(Object.assign({},_.get(b)),{"tx-id":w,confirmed:Date.now()}))});const k=T["tx-steps"].filter(([_,...E])=>_==="add-attr").map(([_,E])=>E).concat(Object.values(this.attrs));this._setAttrs(k),this._finishTransaction("synced",b),this._cleanupPendingMutationsTimeout();break}case"patch-presence":{const b=r["room-id"];this._trySetRoomConnected(b,!0),this._patchPresencePeers(b,r.edits),this._notifyPresenceSubs(b);break}case"refresh-presence":{const b=r["room-id"];this._trySetRoomConnected(b,!0),this._setPresencePeers(b,r.data),this._notifyPresenceSubs(b);break}case"server-broadcast":{const b=r["room-id"],w=r.topic;this._trySetRoomConnected(b,!0),this._notifyBroadcastSubs(b,w,r);break}case"join-room-ok":{const b=r["room-id"];if(!this._rooms[b]){this._roomsPendingLeave[b]&&(this._tryLeaveRoom(b),delete this._roomsPendingLeave[b]);break}this._trySetRoomConnected(b,!0),this._flushEnqueuedRoomData(b);break}case"leave-room-ok":{const b=r["room-id"];this._trySetRoomConnected(b,!1);break}case"join-room-error":const v=r["room-id"],g=this._rooms[v];g&&(g.error=r.error),this._notifyPresenceSubs(v);break;case"error":this._handleReceiveError(r);break;default:this._log.info("Uknown op",r.op,r);break}}_pendingMutations(){var t;return(t=this.kv.currentValue.pendingMutations)!==null&&t!==void 0?t:new Map}_updatePendingMutations(t){this.kv.updateInPlace(r=>{var a;const s=(a=r.pendingMutations)!==null&&a!==void 0?a:new Map;r.pendingMutations=s,t(s)})}_handleMutationError(t,r,a){const s=this._pendingMutations().get(r);if(s&&(t!=="timeout"||!s["tx-id"])){this._updatePendingMutations(u=>(u.delete(r),u)),this._inFlightMutationEventIds.delete(r);const l={message:a.message,hint:a.hint};this.notifyAll(),this.notifyAttrsSubs(),this.notifyMutationErrorSubs(l),this._finishTransaction(t,r,a)}}_handleReceiveError(t){var r,a,s,l,u,d,f;console.log("error",t);const h=t["client-event-id"];this._inFlightMutationEventIds.delete(h);const v=this._pendingMutations().get(h),g={message:t.message||"Uh-oh, something went wrong. Ping Joe & Stopa."};if(t.hint&&(g.hint=t.hint),v){this._handleMutationError("error",h,t);return}if(!((r=t["original-event"])===null||r===void 0)&&r.hasOwnProperty("q")&&((a=t["original-event"])===null||a===void 0?void 0:a.op)==="add-query"){const S=(s=t["original-event"])===null||s===void 0?void 0:s.q,T=Ft(S);this.notifyQueryError(Ft(S),g),this.notifyQueryOnceError(S,T,h,g);return}if(((l=t["original-event"])===null||l===void 0?void 0:l.op)==="init"){if(t.type==="record-not-found"&&((u=t.hint)===null||u===void 0?void 0:u["record-type"])==="app-user"){this.changeCurrentUser(null);return}this._setStatus(Dr.ERRORED,g),this.notifyAll();return}if(((d=t["original-event"])===null||d===void 0?void 0:d.op)==="resync-table"){this._syncTable.onResyncError(t);return}if(((f=t["original-event"])===null||f===void 0?void 0:f.op)==="start-sync"){this._syncTable.onStartSyncError(t);return}const w=Object.assign({},t);delete w.message,delete w.hint,console.error(t.message,w),t.hint&&console.error(`This error comes with some debugging information. Here it is: 
`,t.hint)}notifyQueryOnceError(t,r,a,s){var l;const u=(l=this.queryOnceDfds[r])===null||l===void 0?void 0:l.find(d=>d.eventId===a);u&&(u.dfd.reject(s),this._completeQueryOnce(t,r,u.dfd))}_setAttrs(t){this.attrs=t.reduce((r,a)=>(r[a.id]=a,r),{}),this.notifyAttrsSubs()}_startQuerySub(t,r){const a=Je();return this.querySubs.updateInPlace(s=>{s[r]=s[r]||{q:t,result:null,eventId:a},s[r].lastAccessed=Date.now()}),this._trySendAuthed(a,{op:"add-query",q:t}),a}subscribeTable(t,r){return this._syncTable.subscribe(t,r)}subscribeQuery(t,r,a){var s;this.config.disableValidation||z1(t,this.config.schema),a&&"ruleParams"in a&&(t=Object.assign({$$ruleParams:a.ruleParams},t));const l=Ft(t),u=this.getPreviousResult(t);return u&&r(u),this.queryCbs[l]=(s=this.queryCbs[l])!==null&&s!==void 0?s:[],this.queryCbs[l].push({q:t,cb:r}),this._startQuerySub(t,l),()=>{this._unsubQuery(t,l,r)}}queryOnce(t,r){var a;this.config.disableValidation||z1(t,this.config.schema),r&&"ruleParams"in r&&(t=Object.assign({$$ruleParams:r.ruleParams},t));const s=new A1;if(!this._isOnline)return s.reject(new Error("We can't run `queryOnce`, because the device is offline.")),s.promise;if(!this.querySubs)return s.reject(new Error("We can't run `queryOnce` on the backend. Use adminAPI.query instead: https://www.instantdb.com/docs/backend#query")),s.promise;const l=Ft(t),u=this._startQuerySub(t,l);return this.queryOnceDfds[l]=(a=this.queryOnceDfds[l])!==null&&a!==void 0?a:[],this.queryOnceDfds[l].push({q:t,dfd:s,eventId:u}),setTimeout(()=>s.reject(new Error("Query timed out")),iz),s.promise}_completeQueryOnce(t,r,a){this.queryOnceDfds[r]&&(this.queryOnceDfds[r]=this.queryOnceDfds[r].filter(s=>s.dfd!==a),this._cleanupQuery(t,r))}_unsubQuery(t,r,a){this.queryCbs[r]&&(this.queryCbs[r]=this.queryCbs[r].filter(s=>s.cb!==a),this._cleanupQuery(t,r))}_hasQueryListeners(t){var r,a;return!!(!((r=this.queryCbs[t])===null||r===void 0)&&r.length||!((a=this.queryOnceDfds[t])===null||a===void 0)&&a.length)}_cleanupQuery(t,r){this._hasQueryListeners(r)||(delete this.queryCbs[r],delete this.queryOnceDfds[r],delete this._dataForQueryCache[r],this.querySubs.unloadKey(r),this._trySendAuthed(Je(),{op:"remove-query",q:t}))}_rewriteMutations(t,r,a){if(!t)return r;if(!r)return new Map;const s=v=>{const[g,b,w]=v["forward-identity"];return Ht(t,b,w)},l=v=>{const[g,b,w]=v["forward-identity"];return ca(t,b,w)},u={attrIdMap:{},refSwapAttrIds:new Set};let d=!1;const f=(v,g)=>{const b=[];for(const w of v){const[S]=w;if(S==="add-attr"){const[k,_]=w,E=s(_);if(E&&_.id!==E.id){u.attrIdMap[_.id]=E.id,d=!0;continue}if(_["value-type"]==="ref"){const M=l(_);if(M){u.attrIdMap[_.id]=M.id,u.refSwapAttrIds.add(_.id),d=!0;continue}}}if(a&&g&&a>=g&&S==="add-attr"||S==="update-attr"||S==="delete-attr"){d=!0;continue}const T=d?X5(u,w):w;b.push(T)}return d?b:v},h=new Map;for(const[v,g]of r.entries())h.set(v,Object.assign(Object.assign({},g),{"tx-steps":f(g["tx-steps"],g["tx-id"])}));return d?h:r}_rewriteMutationsSorted(t,r){return q1(this._rewriteMutations(t,r).entries())}optimisticAttrs(){var t;const r=[...this._pendingMutations().values()].flatMap(d=>d["tx-steps"]),a=new Set(r.filter(([d,f])=>d==="delete-attr").map(([d,f])=>f)),s=[];for(const[d,f]of r)if(d==="add-attr")s.push(f);else if(d==="update-attr"&&f.id&&(!((t=this.attrs)===null||t===void 0)&&t[f.id])){const h=Object.assign(Object.assign({},this.attrs[f.id]),f);s.push(h)}const l=[...Object.values(this.attrs||{}),...s].filter(d=>!a.has(d.id));return Object.fromEntries(l.map(d=>[d.id,d]))}dataForQuery(t){const r=this._errorMessage;if(r)return{error:r};if(!this.querySubs||!this.kv.currentValue.pendingMutations)return;const a=this.querySubs.version(),s=this.querySubs.currentValue,l=this.kv.version(),u=this._pendingMutations(),{q:d,result:f}=s[t]||{};if(!f)return;const h=this._dataForQueryCache[t];if(h&&a===h.querySubVersion&&l===h.pendingMutationsVersion)return h.data;const{store:v,pageInfo:g,aggregate:b,processedTxId:w}=f,S=this._rewriteMutationsSorted(v.attrs,u),T=this._applyOptimisticUpdates(v,S,w),k=gS({store:T,pageInfo:g,aggregate:b},d);return this._dataForQueryCache[t]={querySubVersion:a,pendingMutationsVersion:l,data:k},k}_applyOptimisticUpdates(t,r,a){for(const[s,l]of r)(!l["tx-id"]||a&&l["tx-id"]>a)&&(t=GO(t,l["tx-steps"]));return t}notifyAll(){Object.keys(this.queryCbs).forEach(t=>{this.querySubs.waitForKeyToLoad(t).then(()=>this.notifyOne(t)).catch(()=>this.notifyOne(t))})}loadedNotifyAll(){this.kv.waitForKeyToLoad("pendingMutations").then(()=>this.notifyAll()).catch(()=>this.notifyAll())}shutdown(){var t;this._log.info("[shutdown]",this.config.appId),this._isShutdown=!0,(t=this._transport)===null||t===void 0||t.close()}_sendMutation(t,r){if(r.error){this._handleMutationError("error",t,{message:r.error.message});return}if(this.status!==Dr.AUTHENTICATED){this._finishTransaction("enqueued",t);return}const a=Math.max(6e3,Math.min(this._inFlightMutationEventIds.size+1,this._pendingMutations().size+1)*6e3);this._isOnline?(this._trySend(t,r),setTimeout(()=>{this._isOnline&&this._handleMutationError("timeout",t,{message:"transaction timed out"})},a)):this._finishTransaction("enqueued",t)}_flushPendingMessages(){Object.keys(this.queryCbs).map(s=>this.querySubs.currentValue[s]).filter(s=>s).forEach(({eventId:s,q:l})=>{this._trySendAuthed(s,{op:"add-query",q:l})}),Object.values(this.queryOnceDfds).flat().forEach(({eventId:s,q:l})=>{this._trySendAuthed(s,{op:"add-query",q:l})}),this._rewriteMutationsSorted(this.attrs,this._pendingMutations()).forEach(([s,l])=>{l["tx-id"]||this._sendMutation(s,l)}),this._syncTable.flushPending()}_cleanupPendingMutationsQueries(){let t=Number.MAX_SAFE_INTEGER;for(const{result:r}of Object.values(this.querySubs.currentValue))r!=null&&r.processedTxId&&(t=Math.min(t,r==null?void 0:r.processedTxId));this._updatePendingMutations(r=>{for(const[a,s]of Array.from(r.entries()))s["tx-id"]&&s["tx-id"]<=t&&r.delete(a)})}_cleanupPendingMutationsTimeout(){if(this._pendingMutations().size<this._pendingMutationCleanupThreshold)return;const t=Date.now();this._updatePendingMutations(r=>{for(const[a,s]of Array.from(r.entries()))s.confirmed&&s.confirmed+this._pendingTxCleanupTimeout<t&&r.delete(a)})}_trySendAuthed(...t){this.status===Dr.AUTHENTICATED&&this._trySend(...t)}_trySend(t,r,a){if(this._transport.isOpen()){switch(B1[r.op]||this._log.info("[send]",this._transport.id,r.op,r),r.op){case"transact":{this._inFlightMutationEventIds.add(t);break}case"init":this._inFlightMutationEventIds.clear()}this._transport.send(Object.assign({"client-event-id":t},r))}}_startSocket(){if(this._wsOk=null,this._isShutdown){this._log.info("[socket][start]",this.config.appId,"Reactor has been shut down and will not start a new socket");return}if(this._transport&&this._transport.isConnecting()){this._log.info("[socket][start]",this._transport.id,"maintained as current transport, we were still in a connecting state");return}const t=this._transport;this._transport=lz({transportType:this._transportType,appId:this.config.appId,apiURI:this.config.apiURI,wsURI:this.config.websocketURI,EventSourceImpl:this._EventSource}),this._transport.onopen=this._transportOnOpen,this._transport.onmessage=this._transportOnMessage,this._transport.onclose=this._transportOnClose,this._transport.onerror=this._transportOnError,this._log.info("[socket][start]",this._transport.id),t!=null&&t.isOpen()&&(this._log.info("[socket][start]",this._transport.id,"close previous transport id = ",t.id),t.close())}getLocalId(t){return _t(this,void 0,void 0,function*(){const r=`localToken_${t}`;if(this.kv.currentValue[r])return this.kv.currentValue[r];const a=yield this.kv.waitForKeyToLoad(r);if(a)return a;const s=Je();return this.kv.updateInPlace(l=>{l[r]||(l[r]=s)}),yield this.kv.waitForKeyToLoad(r)})}_replaceUrlAfterOAuth(){if(typeof URL>"u")return;const t=new URL(window.location.href);if(t.searchParams.get(kp)){const r=t.toString();t.searchParams.delete(kp),t.searchParams.delete("code"),t.searchParams.delete("error");const a=t.pathname+(t.searchParams.size?"?"+t.searchParams:"")+t.hash;if(history.replaceState(history.state,"",a),typeof navigation=="object"&&typeof navigation.addEventListener=="function"&&typeof navigation.removeEventListener=="function"){let s=!1;const l=u=>{var d;s||(s=!0,navigation.removeEventListener("navigate",l),!u.userInitiated&&u.navigationType==="replace"&&((d=u.destination)===null||d===void 0?void 0:d.url)===r&&history.replaceState(history.state,"",a))};navigation.addEventListener("navigate",l)}}}_oauthLoginInit(){return _t(this,void 0,void 0,function*(){var t,r,a,s;if(typeof window>"u"||typeof window.location>"u"||typeof URLSearchParams>"u")return null;const l=new URLSearchParams(window.location.search);if(!l.get(kp))return null;const u=l.get("error");if(u)return this._replaceUrlAfterOAuth(),{error:{message:u}};const d=l.get("code");if(!d)return null;this._replaceUrlAfterOAuth();try{const f=yield this._getCurrentUser(),h=(f==null?void 0:f.type)==="guest",{user:v}=yield E1({apiURI:this.config.apiURI,appId:this.config.appId,code:d,refreshToken:h?f.refresh_token:void 0});return this.setCurrentUser(v),null}catch(f){return((t=f==null?void 0:f.body)===null||t===void 0?void 0:t.type)==="record-not-found"&&((a=(r=f==null?void 0:f.body)===null||r===void 0?void 0:r.hint)===null||a===void 0?void 0:a["record-type"])==="app-oauth-code"&&(yield this._hasCurrentUser())?null:{error:{message:((s=f==null?void 0:f.body)===null||s===void 0?void 0:s.message)||"Error logging in."}}}})}_waitForOAuthCallbackResponse(){return _t(this,void 0,void 0,function*(){return yield this._oauthCallbackResponse})}__subscribeMutationErrors(t){return this.mutationErrorCbs.push(t),()=>{this.mutationErrorCbs=this.mutationErrorCbs.filter(r=>r!==t)}}subscribeAuth(t){this.authCbs.push(t);const r=this._currentUserCached;r.isLoading||t(this._currentUserCached);let a=!1;return this.getCurrentUser().then(s=>{a||Eu(s,r)||t(s)}),()=>{a=!0,this.authCbs=this.authCbs.filter(s=>s!==t)}}getAuth(){return _t(this,void 0,void 0,function*(){const{user:t,error:r}=yield this.getCurrentUser();if(r)throw new gl("Could not get current user: "+r.message);return t})}subscribeConnectionStatus(t){return this.connectionStatusCbs.push(t),()=>{this.connectionStatusCbs=this.connectionStatusCbs.filter(r=>r!==t)}}subscribeAttrs(t){return this.attrsCbs.push(t),this.attrs&&t(this.attrs),()=>{this.attrsCbs=this.attrsCbs.filter(r=>r!==t)}}notifyAuthSubs(t){this.authCbs.forEach(r=>r(t))}notifyMutationErrorSubs(t){this.mutationErrorCbs.forEach(r=>r(t))}notifyAttrsSubs(){if(!this.attrs)return;const t=this.optimisticAttrs();this.attrsCbs.forEach(r=>r(t))}notifyConnectionStatusSubs(t){this.connectionStatusCbs.forEach(r=>r(t))}setCurrentUser(t){return _t(this,void 0,void 0,function*(){this.kv.updateInPlace(r=>{r[Hs]=t}),yield this.kv.waitForKeyToLoad(Hs)})}getCurrentUserCached(){return this._currentUserCached}_getCurrentUser(){return _t(this,void 0,void 0,function*(){const t=yield this.kv.waitForKeyToLoad(Hs);return typeof t=="string"?JSON.parse(t):t})}getCurrentUser(){return _t(this,void 0,void 0,function*(){const t=yield this._waitForOAuthCallbackResponse();if(t!=null&&t.error){const r={error:t.error,user:void 0};return this._currentUserCached=Object.assign({isLoading:!1},r),r}try{const a={user:yield this._getCurrentUser(),error:void 0};return this._currentUserCached=Object.assign({isLoading:!1},a),a}catch(r){return{user:void 0,isLoading:!1,error:{message:(r==null?void 0:r.message)||"Error loading user"}}}})}_hasCurrentUser(){return _t(this,void 0,void 0,function*(){const t=yield this.kv.waitForKeyToLoad(Hs);return typeof t=="string"?JSON.parse(t)!=null:t!=null})}changeCurrentUser(t){return _t(this,void 0,void 0,function*(){var r;const{user:a}=yield this.getCurrentUser();if(!Eu(a,t)){yield this.setCurrentUser(t),this.updateUser(t);try{(r=this._broadcastChannel)===null||r===void 0||r.postMessage({type:"auth"})}catch(s){console.error("Error posting message to broadcast channel",s)}}})}updateUser(t){const r={error:void 0,user:t};this._currentUserCached=Object.assign({isLoading:!1},r),this._dataForQueryCache={},this.querySubs.updateInPlace(a=>{Object.keys(a).forEach(s=>{delete a[s].result})}),this._reconnectTimeoutMs=0,this._transport.close(),this._oauthCallbackResponse=null,this.notifyAuthSubs(r)}sendMagicCode({email:t}){return EN({apiURI:this.config.apiURI,appId:this.config.appId,email:t})}signInWithMagicCode(t){return _t(this,arguments,void 0,function*({email:r,code:a}){var s;const l=yield this.getCurrentUser(),u=((s=l==null?void 0:l.user)===null||s===void 0?void 0:s.type)==="guest",d=yield CN({apiURI:this.config.apiURI,appId:this.config.appId,email:r,code:a,refreshToken:u?l.user.refresh_token:void 0});return yield this.changeCurrentUser(d.user),d})}signInWithCustomToken(t){return _t(this,void 0,void 0,function*(){const r=yield AN({apiURI:this.config.apiURI,appId:this.config.appId,refreshToken:t});return yield this.changeCurrentUser(r.user),r})}signInAsGuest(){return _t(this,void 0,void 0,function*(){const t=yield MN({apiURI:this.config.apiURI,appId:this.config.appId});return yield this.changeCurrentUser(t.user),t})}potentiallyInvalidateToken(t,r){var a;const s=(a=t==null?void 0:t.user)===null||a===void 0?void 0:a.refresh_token;if(!s)return;if(r.invalidateToken===!1){this._log.info("[auth-invalidate] skipped invalidateToken");return}NN({apiURI:this.config.apiURI,appId:this.config.appId,refreshToken:s}).then(()=>{this._log.info("[auth-invalidate] completed invalidateToken")}).catch(u=>{})}signOut(t){return _t(this,void 0,void 0,function*(){const r=yield this.getCurrentUser();this.potentiallyInvalidateToken(r,t),yield this.changeCurrentUser(null)})}createAuthorizationURL({clientName:t,redirectURL:r}){const{apiURI:a,appId:s}=this.config;return`${a}/runtime/oauth/start?app_id=${s}&client_name=${t}&redirect_uri=${r}`}exchangeCodeForToken(t){return _t(this,arguments,void 0,function*({code:r,codeVerifier:a}){var s;const l=yield this.getCurrentUser(),u=((s=l==null?void 0:l.user)===null||s===void 0?void 0:s.type)==="guest",d=yield E1({apiURI:this.config.apiURI,appId:this.config.appId,code:r,codeVerifier:a,refreshToken:u?l.user.refresh_token:void 0});return yield this.changeCurrentUser(d.user),d})}issuerURI(){const{apiURI:t,appId:r}=this.config;return`${t}/runtime/${r}`}signInWithIdToken(t){return _t(this,arguments,void 0,function*({idToken:r,clientName:a,nonce:s}){var l;const u=yield this.getCurrentUser(),d=(l=u==null?void 0:u.user)===null||l===void 0?void 0:l.refresh_token,f=yield ON({apiURI:this.config.apiURI,appId:this.config.appId,idToken:r,clientName:a,nonce:s,refreshToken:d});return yield this.changeCurrentUser(f.user),f})}joinRoom(t,r){let a=!1;this._rooms[t]||(a=!0,this._rooms[t]={isConnected:!1,error:void 0}),this._presence[t]=this._presence[t]||{};const s=this._presence[t].result;return r&&!s&&(this._presence[t].result=this._presence[t].result||{},this._presence[t].result.user=r,this._notifyPresenceSubs(t)),a&&this._tryJoinRoom(t,r),()=>{this._cleanupRoom(t)}}_cleanupRoom(t){var r,a,s,l;if(!(!((a=(r=this._presence[t])===null||r===void 0?void 0:r.handlers)===null||a===void 0)&&a.length)&&!Object.keys((s=this._broadcastSubs[t])!==null&&s!==void 0?s:{}).length){const u=(l=this._rooms[t])===null||l===void 0?void 0:l.isConnected;delete this._rooms[t],delete this._presence[t],delete this._broadcastSubs[t],u?this._tryLeaveRoom(t):this._roomsPendingLeave[t]=!0}}getPresence(t,r,a={}){const s=this._rooms[r],l=this._presence[r];return!s||!l||!l.result?null:Object.assign(Object.assign({},$N(l.result,a,this._sessionId)),{isLoading:!s.isConnected,error:s.error})}publishPresence(t,r,a){const s=this._rooms[r],l=this._presence[r];if(!s||!l)return;l.result=l.result||{};const u=Object.assign(Object.assign({},l.result.user),a);l.result.user=u,s.isConnected&&(this._trySetPresence(r,u),this._notifyPresenceSubs(r))}_trySetPresence(t,r){this._trySendAuthed(Je(),{op:"set-presence","room-id":t,data:r})}_tryJoinRoom(t,r){this._trySendAuthed(Je(),{op:"join-room","room-id":t,data:r}),delete this._roomsPendingLeave[t]}_tryLeaveRoom(t){this._trySendAuthed(Je(),{op:"leave-room","room-id":t})}_trySetRoomConnected(t,r){const a=this._rooms[t];a&&(a.isConnected=r)}subscribePresence(t,r,a,s){const l=this.joinRoom(r,a.initialPresence||a.initialData),u=Object.assign(Object.assign({},a),{roomId:r,cb:s,prev:null});return this._presence[r]=this._presence[r]||{},this._presence[r].handlers=this._presence[r].handlers||[],this._presence[r].handlers.push(u),this._notifyPresenceSub(r,u),()=>{var d,f,h;this._presence[r].handlers=(h=(f=(d=this._presence[r])===null||d===void 0?void 0:d.handlers)===null||f===void 0?void 0:f.filter(v=>v!==u))!==null&&h!==void 0?h:[],l()}}_notifyPresenceSubs(t){var r,a;(a=(r=this._presence[t])===null||r===void 0?void 0:r.handlers)===null||a===void 0||a.forEach(s=>{this._notifyPresenceSub(t,s)})}_notifyPresenceSub(t,r){const a=this.getPresence("",t,r);a&&(r.prev&&!LN(a,r.prev)||(r.prev=a,r.cb(a)))}_patchPresencePeers(t,r){var a,s,l;const u=((s=(a=this._presence[t])===null||a===void 0?void 0:a.result)===null||s===void 0?void 0:s.peers)||{};let d=Object.fromEntries(Object.entries(u).map(([h,v])=>[h,{data:v}]));(l=this._presence[t])===null||l===void 0||l.result;const f=Gu(d,h=>{for(let[v,g,b]of r)switch(g){case"+":gO(h,v,b);break;case"r":h1(h,v,b);break;case"-":J_(h,v);break}delete h[this._sessionId]});this._setPresencePeers(t,f)}_setPresencePeers(t,r){const a=Object.assign({},r);delete a[this._sessionId];const s=Object.fromEntries(Object.entries(a).map(([l,u])=>[l,u.data]));this._presence=Gu(this._presence,l=>{h1(l,[t,"result","peers"],s)})}publishTopic({roomType:t,roomId:r,topic:a,data:s}){var l;const u=this._rooms[r];if(u){if(!u.isConnected){this._broadcastQueue[r]=(l=this._broadcastQueue[r])!==null&&l!==void 0?l:[],this._broadcastQueue[r].push({topic:a,roomType:t,data:s});return}this._tryBroadcast(r,t,a,s)}}_tryBroadcast(t,r,a,s){this._trySendAuthed(Je(),{op:"client-broadcast","room-id":t,roomType:r,topic:a,data:s})}subscribeTopic(t,r,a){const s=this.joinRoom(t);return this._broadcastSubs[t]=this._broadcastSubs[t]||{},this._broadcastSubs[t][r]=this._broadcastSubs[t][r]||[],this._broadcastSubs[t][r].push(a),this._presence[t]=this._presence[t]||{},()=>{this._broadcastSubs[t][r]=this._broadcastSubs[t][r].filter(l=>l!==a),this._broadcastSubs[t][r].length||delete this._broadcastSubs[t][r],s()}}_notifyBroadcastSubs(t,r,a){var s,l,u;(u=(l=(s=this._broadcastSubs)===null||s===void 0?void 0:s[t])===null||l===void 0?void 0:l[r])===null||u===void 0||u.forEach(d=>{var f,h,v,g,b,w;const S=(f=a.data)===null||f===void 0?void 0:f.data,T=a.data["peer-id"]===this._sessionId?(v=(h=this._presence[t])===null||h===void 0?void 0:h.result)===null||v===void 0?void 0:v.user:(w=(b=(g=this._presence[t])===null||g===void 0?void 0:g.result)===null||b===void 0?void 0:b.peers)===null||w===void 0?void 0:w[a.data["peer-id"]];return d(S,T)})}uploadFile(t,r,a){return _t(this,void 0,void 0,function*(){var s;const l=yield this.getCurrentUser(),u=(s=l==null?void 0:l.user)===null||s===void 0?void 0:s.refresh_token;return zN(Object.assign(Object.assign({},a),{apiURI:this.config.apiURI,appId:this.config.appId,path:t,file:r,refreshToken:u}))})}deleteFile(t){return _t(this,void 0,void 0,function*(){var r;const a=yield this.getCurrentUser(),s=(r=a==null?void 0:a.user)===null||r===void 0?void 0:r.refresh_token;return yield DN({apiURI:this.config.apiURI,appId:this.config.appId,path:t,refreshToken:s})})}upload(t,r){return _t(this,void 0,void 0,function*(){var a;const s=yield this.getCurrentUser(),l=(a=s==null?void 0:s.user)===null||a===void 0?void 0:a.refresh_token,u=t||r.name,d=yield RN({apiURI:this.config.apiURI,appId:this.config.appId,fileName:u,refreshToken:l});return yield jN(d,r)})}getDownloadUrl(t){return _t(this,void 0,void 0,function*(){var r;const a=yield this.getCurrentUser(),s=(r=a==null?void 0:a.user)===null||r===void 0?void 0:r.refresh_token;return yield UN({apiURI:this.config.apiURI,appId:this.config.appId,path:t,refreshToken:s})})}}function gz(e,t){return new gd(DS(e,t),t,void 0)}function vz(e){return new md(e,{})}function yz(){return new Gt("string",!0,!1)}function bz(){return new Gt("number",!0,!1)}function wz(){return new Gt("boolean",!0,!1)}function xz(){return new Gt("date",!0,!1)}function _z(){return new Gt("json",!0,!1)}function Sz(){return new Gt("json",!0,!1)}function DS(e,t){var r,a,s,l;const u={fwd:{},rev:{}};for(const f of Object.values(t))(r=u.fwd)[a=f.forward.on]||(r[a]={}),(s=u.rev)[l=f.reverse.on]||(s[l]={}),u.fwd[f.forward.on][f.forward.label]={entityName:f.reverse.on,cardinality:f.forward.has},u.rev[f.reverse.on][f.reverse.label]={entityName:f.forward.on,cardinality:f.reverse.has};return Object.fromEntries(Object.entries(e).map(([f,h])=>[f,new md(h.attrs,Object.assign(Object.assign({},u.fwd[f]),u.rev[f]))]))}function Tz({entities:e,links:t,rooms:r}){const a=t??{},s=r??{};return new gd(DS(e,a),a,s)}const He={graph:gz,schema:Tz,entity:vz,string:yz,number:bz,boolean:wz,date:xz,json:_z,any:Sz};let uu;function kz(e,t){uu==null||uu.dispose();const r=Nz(t),a=Az(t,d),s=Cz(Ez(e));function l(v){var g;v.source===s.element.contentWindow&&((g=v.data)===null||g===void 0?void 0:g.type)==="close"&&r.isVisible()&&d()}function u(v){const g=v.shiftKey&&v.ctrlKey&&v.key==="0",b=v.key==="Escape"||v.key==="Esc";(g||b&&r.isVisible())&&d()}function d(){r.isVisible()?r.element.style.display="none":(r.element.style.display="block",r.element.contains(s.element)||r.element.appendChild(s.element))}function f(){r.element.remove(),a.element.remove(),removeEventListener("keydown",u),removeEventListener("message",l)}function h(){document.body.appendChild(r.element),document.body.appendChild(a.element),addEventListener("keydown",u),addEventListener("message",l),uu={dispose:f}}return h()}function Ez(e){return`${_g||TS?"http://localhost:3000":"https://instantdb.com"}/_devtool?appId=${e}`}function Cz(e){const t=document.createElement("iframe");return t.src=e,t.className="instant-devtool-iframe",Object.assign(t.style,{width:"100%",height:"100%",backgroundColor:"white",border:"none"}),{element:t}}function Az(e,t){const r=`
    <svg width="32" height="32" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" fill="black"/>
      <rect x="97.0973" y="91.3297" width="140" height="330" fill="white"/>
    </svg>
  `,a=document.createElement("button");return a.innerHTML=r,a.className="instant-devtool-toggler",Object.assign(a.style,Object.assign(Object.assign({position:"fixed"},Mz(e.position)),{height:"32px",width:"32px",display:"flex",alignItems:"center",justifyContent:"center",zIndex:"9010",padding:"0",margin:"0",border:"none",cursor:"pointer"})),a.addEventListener("click",t),{element:a}}function Mz(e){switch(e){case"bottom-left":return{bottom:"24px",left:"24px"};case"bottom-right":return{bottom:"24px",right:"24px"};case"top-right":return{top:"24px",right:"24px"};case"top-left":return{top:"24px",left:"24px"}}}function Oz(e){switch(e){case"bottom-left":return{bottom:"24px",right:"24px",left:"60px",top:"72px"};case"bottom-right":return{bottom:"24px",left:"24px",right:"60px",top:"72px"};case"top-right":return{top:"24px",left:"24px",right:"60px",bottom:"72px"};case"top-left":return{top:"24px",right:"24px",left:"60px",bottom:"72px"}}}function Nz(e){const t=document.createElement("div");Object.assign(t.style,Object.assign(Object.assign({position:"fixed"},Oz(e.position)),{display:"block",borderRadius:"4px",border:"1px #ccc solid",boxShadow:"0px 0px 8px #00000044",backgroundColor:"#eee",zIndex:"999990"})),t.style.display="none",t.className="instant-devtool-container";function r(){return t.style.display!=="none"}return{element:t,isVisible:r}}const zz={apiURI:"https://api.instantdb.com",websocketURI:"wss://api.instantdb.com/runtime/session"};function Dz(){var e;return globalThis.__instantDbSchemaHashStore=(e=globalThis.__instantDbSchemaHashStore)!==null&&e!==void 0?e:new WeakMap,globalThis.__instantDbSchemaHashStore}function Rz(){var e;return globalThis.__instantDbStore=(e=globalThis.__instantDbStore)!==null&&e!==void 0?e:{},globalThis.__instantDbStore}function _m(e){const t=e.__adminToken;return e.appId+"_"+(e.websocketURI||"default_ws_uri")+"_"+(e.apiURI||"default_api_uri")+"_"+(t||"client_only")+"_"+e.useDateObjects}const Sm=Rz(),F1=Dz();class jz{constructor(t){this.db=t,this.sendMagicCode=r=>this.db.sendMagicCode(r),this.signInWithMagicCode=r=>this.db.signInWithMagicCode(r),this.signInWithToken=r=>this.db.signInWithCustomToken(r),this.signInAsGuest=()=>this.db.signInAsGuest(),this.createAuthorizationURL=r=>this.db.createAuthorizationURL(r),this.signInWithIdToken=r=>this.db.signInWithIdToken(r),this.exchangeOAuthCode=r=>this.db.exchangeCodeForToken(r),this.issuerURI=()=>this.db.issuerURI(),this.signOut=(r={invalidateToken:!0})=>this.db.signOut(r)}}class Uz{constructor(t){this.db=t,this.uploadFile=(r,a,s={})=>this.db.uploadFile(r,a,s),this.delete=r=>this.db.deleteFile(r),this.upload=(r,a)=>this.db.upload(r,a),this.put=this.upload,this.getDownloadUrl=r=>this.db.getDownloadUrl(r)}}class $z{constructor(t){this.tx=yS(),this._reactor=t,this.auth=new jz(this._reactor),this.storage=new Uz(this._reactor)}transact(t){return this._reactor.pushTx(t)}getLocalId(t){return this._reactor.getLocalId(t)}subscribeQuery(t,r,a){return this._reactor.subscribeQuery(t,r,a)}subscribeAuth(t){return this._reactor.subscribeAuth(t)}getAuth(){return this._reactor.getAuth()}subscribeConnectionStatus(t){return this._reactor.subscribeConnectionStatus(t)}joinRoom(t="_defaultRoomType",r="_defaultRoomId",a){return{leaveRoom:this._reactor.joinRoom(r,a==null?void 0:a.initialPresence),subscribeTopic:(l,u)=>this._reactor.subscribeTopic(r,l,u),subscribePresence:(l,u)=>this._reactor.subscribePresence(t,r,l,u),publishTopic:(l,u)=>this._reactor.publishTopic({roomType:t,roomId:r,topic:l,data:u}),publishPresence:l=>this._reactor.publishPresence(t,r,l),getPresence:l=>this._reactor.getPresence(t,r,l)}}shutdown(){delete Sm[_m(this._reactor.config)],this._reactor.shutdown()}queryOnce(t,r){return this._reactor.queryOnce(t,r)}_syncTableExperimental(t,r){return this._reactor.subscribeTable(t,r)}}function Y1(e){if(!e)return"0";const t=F1.get(e);if(t)return t;const r=Ft(e);return F1.set(e,r),r}function Lz(e,t){return Y1(e._reactor.config.schema)!==Y1(t)}function Hz(e,t,r,a,s){const l=Sm[_m(e)];if(l)return Lz(l,e.schema)&&l._reactor.updateSchema(e.schema),l;const u=new mz(Object.assign(Object.assign(Object.assign({},zz),e),{cardinalityInference:!!e.schema}),t||xS,r||_S,Object.assign(Object.assign({},a||{}),{"@instantdb/core":ES}),s),d=new $z(u);return Sm[_m(e)]=d,Iz(e.appId,e.devtool),d}function Iz(e,t){if(typeof window>"u"||typeof window.location>"u"||typeof document>"u"||typeof t=="boolean"&&!t)return;const r=Object.assign({position:"bottom-right",allowedHosts:["localhost"]},typeof t=="object"?t:{});r.allowedHosts.includes(window.location.hostname)&&kz(e,r)}const Bz=He.schema({entities:{$users:He.entity({name:He.string().optional(),type:He.string().optional()}),party:He.entity({name:He.string().unique().indexed(),host:He.string().optional(),gameState:He.json().optional(),gameProgress:He.json().optional(),gameParams:He.json().optional(),staticPlayerIds:He.json().optional(),status:He.string()}),roomEvent:He.entity({type:He.string(),payload:He.any()}),players:He.entity({localId:He.string().unique().indexed(),name:He.string(),avatar:He.string()}),paintings:He.entity({canvas:He.json(),playerId:He.string(),word:He.string()}),words:He.entity({word:He.string().unique().indexed(),lang:He.string(),category:He.string().optional(),hidden:He.boolean().optional()})},links:{partyRoomEvents:{forward:{on:"party",has:"many",label:"roomEvents"},reverse:{on:"roomEvent",has:"one",label:"party"}},partyPlayers:{forward:{on:"party",has:"many",label:"players"},reverse:{on:"players",has:"many",label:"parties"}},partyNewPlayers:{forward:{on:"party",has:"many",label:"newPlayers"},reverse:{on:"$users",has:"many",label:"parties"}}},rooms:{party:{presence:He.entity({user:He.any().optional()}),topics:{currentCanvas:He.entity({currentDrawing:He.any().optional()})}}}}),qz=Bz,Fz="59599101-16e7-493b-8644-ccb75b6cb032",ye=Hz({appId:Fz,schema:qz}),Ni={prepare:"prepare",inProgress:"in-progress",finished:"finished"};function P1(e){const t=[];return e.forEach(r=>{!r.type||r.type==="line"?t.push(r):r.type==="undo"&&t.pop()}),t}function Yz(e){if(e.length===0)return[];const t=[];let r=null,a=0;for(const s of e)typeof s=="string"&&s===r?a++:(r!==null&&t.push(a>1?`${r} ${a}`:r),r=s,a=1);return r!==null&&t.push(a>1?`${r} ${a}`:r),t}const Tm={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e*e:-1+(4-2*e)*e,easeInCubic:e=>e*e*e,easeOutCubic:e=>--e*e*e+1,easeInOutCubic:e=>e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1- --e*e*e*e,easeInOutQuart:e=>e<.5?8*e*e*e*e:1-8*--e*e*e*e,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1+--e*e*e*e*e,easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>e<=0?0:Math.pow(2,10*e-10),easeOutExpo:e=>e>=1?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>e<=0?0:e>=1?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2};class G{constructor(t=0,r=0,a=1){this.x=t,this.y=r,this.z=a}get pressure(){return this.z}set(t=this.x,r=this.y,a=this.z){return this.x=t,this.y=r,this.z=a,this}setTo({x:t=0,y:r=0,z:a=1}){return this.x=t,this.y=r,this.z=a,this}rot(t){if(t===0)return this;const{x:r,y:a}=this,s=Math.sin(t),l=Math.cos(t);return this.x=r*l-a*s,this.y=r*s+a*l,this}rotWith(t,r){if(r===0)return this;const a=this.x-t.x,s=this.y-t.y,l=Math.sin(r),u=Math.cos(r);return this.x=t.x+(a*u-s*l),this.y=t.y+(a*l+s*u),this}clone(){const{x:t,y:r,z:a}=this;return new G(t,r,a)}sub(t){return this.x-=t.x,this.y-=t.y,this}subXY(t,r){return this.x-=t,this.y-=r,this}subScalar(t){return this.x-=t,this.y-=t,this}add(t){return this.x+=t.x,this.y+=t.y,this}addXY(t,r){return this.x+=t,this.y+=r,this}addScalar(t){return this.x+=t,this.y+=t,this}clamp(t,r){return this.x=Math.max(this.x,t),this.y=Math.max(this.y,t),r!==void 0&&(this.x=Math.min(this.x,r),this.y=Math.min(this.y,r)),this}div(t){return this.x/=t,this.y/=t,this}divV(t){return this.x/=t.x,this.y/=t.y,this}mul(t){return this.x*=t,this.y*=t,this}mulV(t){return this.x*=t.x,this.y*=t.y,this}abs(){return this.x=Math.abs(this.x),this.y=Math.abs(this.y),this}nudge(t,r){const a=G.Tan(t,this);return this.add(a.mul(r))}neg(){return this.x*=-1,this.y*=-1,this}cross(t){return this.x=this.y*t.z-this.z*t.y,this.y=this.z*t.x-this.x*t.z,this}dpr(t){return G.Dpr(this,t)}cpr(t){return G.Cpr(this,t)}len2(){return G.Len2(this)}len(){return G.Len(this)}pry(t){return G.Pry(this,t)}per(){const{x:t,y:r}=this;return this.x=r,this.y=-t,this}uni(){const t=this.len();return t===0?this:(this.x/=t,this.y/=t,this)}tan(t){return this.sub(t).uni()}dist(t){return G.Dist(this,t)}distanceToLineSegment(t,r){return G.DistanceToLineSegment(t,r,this)}slope(t){return G.Slope(this,t)}snapToGrid(t){return this.x=Math.round(this.x/t)*t,this.y=Math.round(this.y/t)*t,this}angle(t){return G.Angle(this,t)}toAngle(){return G.ToAngle(this)}lrp(t,r){return this.x=this.x+(t.x-this.x)*r,this.y=this.y+(t.y-this.y)*r,this}equals(t){return G.Equals(this,t)}equalsXY(t,r){return G.EqualsXY(this,t,r)}norm(){return this.uni()}toFixed(){return this.x=ou(this.x),this.y=ou(this.y),this}toString(){return G.ToString(G.ToFixed(this))}toJson(){return G.ToJson(this)}toArray(){return G.ToArray(this)}static Add(t,r){return new G(t.x+r.x,t.y+r.y)}static AddXY(t,r,a){return new G(t.x+r,t.y+a)}static Sub(t,r){return new G(t.x-r.x,t.y-r.y)}static SubXY(t,r,a){return new G(t.x-r,t.y-a)}static AddScalar(t,r){return new G(t.x+r,t.y+r)}static SubScalar(t,r){return new G(t.x-r,t.y-r)}static Div(t,r){return new G(t.x/r,t.y/r)}static Mul(t,r){return new G(t.x*r,t.y*r)}static DivV(t,r){return new G(t.x/r.x,t.y/r.y)}static MulV(t,r){return new G(t.x*r.x,t.y*r.y)}static Neg(t){return new G(-t.x,-t.y)}static Per(t){return new G(t.y,-t.x)}static Abs(t){return new G(Math.abs(t.x),Math.abs(t.y))}static Dist(t,r){return((t.y-r.y)**2+(t.x-r.x)**2)**.5}static ManhattanDist(t,r){return Math.abs(t.x-r.x)+Math.abs(t.y-r.y)}static DistMin(t,r,a){return(t.x-r.x)*(t.x-r.x)+(t.y-r.y)*(t.y-r.y)<a**2}static Dist2(t,r){return(t.x-r.x)*(t.x-r.x)+(t.y-r.y)*(t.y-r.y)}static Dpr(t,r){return t.x*r.x+t.y*r.y}static Cross(t,r){return new G(t.y*r.z-t.z*r.y,t.z*r.x-t.x*r.z)}static Cpr(t,r){return t.x*r.y-r.x*t.y}static Len2(t){return t.x*t.x+t.y*t.y}static Len(t){return(t.x*t.x+t.y*t.y)**.5}static Pry(t,r){return G.Dpr(t,r)/G.Len(r)}static Uni(t){const r=G.Len(t);return new G(r===0?0:t.x/r,r===0?0:t.y/r)}static Tan(t,r){return G.Uni(G.Sub(t,r))}static Min(t,r){return new G(Math.min(t.x,r.x),Math.min(t.y,r.y))}static Max(t,r){return new G(Math.max(t.x,r.x),Math.max(t.y,r.y))}static From({x:t,y:r,z:a=1}){return new G(t,r,a)}static FromArray(t){return new G(t[0],t[1])}static Rot(t,r=0){const a=Math.sin(r),s=Math.cos(r);return new G(t.x*s-t.y*a,t.x*a+t.y*s)}static RotWith(t,r,a){const s=t.x-r.x,l=t.y-r.y,u=Math.sin(a),d=Math.cos(a);return new G(r.x+(s*d-l*u),r.y+(s*u+l*d))}static NearestPointOnLineThroughPoint(t,r,a){return G.Mul(r,G.Sub(a,t).pry(r)).add(t)}static NearestPointOnLineSegment(t,r,a,s=!0){if(G.Equals(t,a)||G.Equals(r,a))return G.From(a);const l=G.Tan(r,t),u=G.Add(t,G.Mul(l,G.Sub(a,t).pry(l)));if(s){if(u.x<Math.min(t.x,r.x))return G.Cast(t.x<r.x?t:r);if(u.x>Math.max(t.x,r.x))return G.Cast(t.x>r.x?t:r);if(u.y<Math.min(t.y,r.y))return G.Cast(t.y<r.y?t:r);if(u.y>Math.max(t.y,r.y))return G.Cast(t.y>r.y?t:r)}return u}static DistanceToLineThroughPoint(t,r,a){return G.Dist(a,G.NearestPointOnLineThroughPoint(t,r,a))}static DistanceToLineSegment(t,r,a,s=!0){return G.Dist(a,G.NearestPointOnLineSegment(t,r,a,s))}static Snap(t,r=1){return new G(Math.round(t.x/r)*r,Math.round(t.y/r)*r)}static Cast(t){return t instanceof G?t:G.From(t)}static Slope(t,r){return t.x===r.y?NaN:(t.y-r.y)/(t.x-r.x)}static IsNaN(t){return isNaN(t.x)||isNaN(t.y)}static Angle(t,r){return Math.atan2(r.y-t.y,r.x-t.x)}static AngleBetween(t,r){const a=t.x*r.x+t.y*r.y,s=Math.sqrt((Math.pow(t.x,2)+Math.pow(t.y,2))*(Math.pow(r.x,2)+Math.pow(r.y,2)));return(t.x*r.y-t.y*r.x<0?-1:1)*Math.acos(j3(a/s,-1,1))}static Lrp(t,r,a){return G.Sub(r,t).mul(a).add(t)}static Med(t,r){return new G((t.x+r.x)/2,(t.y+r.y)/2)}static Equals(t,r){return Math.abs(t.x-r.x)<1e-4&&Math.abs(t.y-r.y)<1e-4}static EqualsXY(t,r,a){return t.x===r&&t.y===a}static Clockwise(t,r,a){return(a.x-t.x)*(r.y-t.y)-(r.x-t.x)*(a.y-t.y)<0}static Rescale(t,r){const a=G.Len(t);return new G(r*t.x/a,r*t.y/a)}static ScaleWithOrigin(t,r,a){return G.Sub(t,a).mul(r).add(a)}static ToFixed(t){return new G(ou(t.x),ou(t.y))}static ToInt(t){return new G(parseInt(t.x.toFixed(0)),parseInt(t.y.toFixed(0)),parseInt((t.z??0).toFixed(0)))}static ToCss(t){return`${t.x},${t.y}`}static Nudge(t,r,a){return G.Add(t,G.Tan(r,t).mul(a))}static ToString(t){return`${t.x}, ${t.y}`}static ToAngle(t){let r=Math.atan2(t.y,t.x);return r<0&&(r+=Math.PI*2),r}static FromAngle(t,r=1){return new G(Math.cos(t)*r,Math.sin(t)*r)}static ToArray(t){return[t.x,t.y,t.z]}static ToJson(t){const{x:r,y:a,z:s}=t;return{x:r,y:a,z:s}}static Average(t){const r=t.length,a=new G(0,0);if(r===0)return a;for(let s=0;s<r;s++)a.add(t[s]);return a.div(r)}static Clamp(t,r,a){return a===void 0?new G(Math.min(Math.max(t.x,r)),Math.min(Math.max(t.y,r))):new G(Math.min(Math.max(t.x,r),a),Math.min(Math.max(t.y,r),a))}static PointsBetween(t,r,a=6){const s=[];for(let l=0;l<a;l++){const u=Tm.easeInQuad(l/(a-1)),d=G.Lrp(t,r,u);d.z=Math.min(1,.5+Math.abs(.5-Pz(u))*.65),s.push(d)}return s}static SnapToGrid(t,r=8){return new G(Math.round(t.x/r)*r,Math.round(t.y/r)*r)}}const Pz=e=>e<.5?2*e*e:-1+(4-2*e)*e,{PI:Xz}=Math,Ep=Xz+1e-4;function Gz(e,t={}){const{size:r=16,smoothing:a=.5}=t;if(e.length===0||r<=0)return{left:[],right:[]};const s=e[0],l=e[e.length-1],u=l.runningLength,d=Math.pow(r*a,2),f=[],h=[];let v=e[0].vector,g=e[0].point,b=g,w=g,S=b,T=!1,k;for(let _=0;_<e.length;_++){k=e[_];const{point:E,vector:M}=e[_],D=k.vector.dpr(v),j=(_<e.length-1?e[_+1]:e[_]).vector,Y=_<e.length-1?j.dpr(k.vector):1,B=D<0&&!T,ee=Y!==null&&Y<.2;if(B||ee){if(Y>-.62&&u-k.runningLength>k.radius){const pe=v.clone().mul(k.radius);v.clone().cpr(j)<0?(w=G.Add(E,pe),S=G.Sub(E,pe)):(w=G.Sub(E,pe),S=G.Add(E,pe)),f.push(w),h.push(S)}else{const pe=v.clone().mul(k.radius).per(),de=G.Sub(k.input,pe);for(let ae=1/13,De=0;De<1;De+=ae)w=G.RotWith(de,k.input,Ep*De),f.push(w),S=G.RotWith(de,k.input,Ep+Ep*-De),h.push(S)}g=w,b=S,ee&&(T=!0);continue}if(T=!1,k===s||k===l){const pe=G.Per(M).mul(k.radius);f.push(G.Sub(E,pe)),h.push(G.Add(E,pe));continue}const ne=G.Lrp(j,M,Y).per().mul(k.radius);w=G.Sub(E,ne),(_<=1||G.Dist2(g,w)>d)&&(f.push(w),g=w),S=G.Add(E,ne),(_<=1||G.Dist2(b,S)>d)&&(h.push(S),b=S),v=M}return{left:f,right:h}}const Vz=.025,Qz=.01;function Kz(e,t={}){var k;const{streamline:r=.5,size:a=16,simulatePressure:s=!1}=t;if(e.length===0)return[];const l=.15+(1-r)*.85;let u=e.map(G.From),d=0;if(!s){let _=u[0];for(;_&&!(_.z>=Vz);)u.shift(),_=u[0]}if(!s){let _=u[u.length-1];for(;_&&!(_.z>=Qz);)u.pop(),_=u[u.length-1]}if(u.length===0)return[{point:G.From(e[0]),input:G.From(e[0]),pressure:s?.5:.15,vector:new G(1,1),distance:0,runningLength:0,radius:1}];let f=u[1];for(;f&&!(G.Dist2(f,u[0])>(a/3)**2);)u[0].z=Math.max(u[0].z,f.z),u.splice(1,1),f=u[1];const h=u.pop();for(f=u[u.length-1];f&&!(G.Dist2(f,h)>(a/3)**2);)u.pop(),f=u[u.length-1],d++;u.push(h);const v=t.last||!t.simulatePressure||u.length>1&&G.Dist2(u[u.length-1],u[u.length-2])<a**2||d>0;if(u.length===2&&t.simulatePressure){const _=u[1];u=u.slice(0,-1);for(let E=1;E<5;E++){const M=G.Lrp(u[0],_,E/4);M.z=(u[0].z+(_.z-u[0].z))*E/4,u.push(M)}}const g=[{point:u[0],input:u[0],pressure:s?.5:u[0].z,vector:new G(1,1),distance:0,runningLength:0,radius:1}];let b=0,w=g[0],S,T;v&&r>0&&u.push(u[u.length-1].clone());for(let _=1,E=u.length;_<E;_++)S=!l||t.last&&_===E-1?u[_].clone():u[_].clone().lrp(w.point,1-l),!w.point.equals(S)&&(T=G.Dist(S,w.point),b+=T,!(_<4&&b<a)&&(w={input:u[_],point:S,pressure:s?.5:u[_].z,vector:G.Sub(w.point,S).uni(),distance:T,runningLength:b,radius:1},g.push(w)));if((k=g[1])!=null&&k.vector&&(g[0].vector=g[1].vector.clone()),b<1){const _=Math.max(.5,...g.map(E=>E.pressure));g.forEach(E=>E.pressure=_)}return g}const{min:_i}=Math,Cp=.275;function Wz(e,t){const{size:r=16,thinning:a=.5,simulatePressure:s=!0,easing:l=k=>k,start:u={},end:d={}}=t,{easing:f=Tm.easeOutQuad}=u,{easing:h=Tm.easeOutCubic}=d,v=e[e.length-1].runningLength;let g,b=e[0].pressure,w;if(!s&&v<r){const k=e.reduce((_,E)=>Math.max(_,E.pressure),.5);return e.forEach(_=>{_.pressure=k,_.radius=r*l(.5-a*(.5-_.pressure))}),e}else{let k;for(let _=0,E=e.length;_<E&&(w=e[_],!(w.runningLength>r*5));_++){const M=_i(1,w.distance/r);if(s){const D=_i(1,1-M);k=_i(1,b+(D-b)*(M*Cp))}else k=_i(1,b+(w.pressure-b)*.5);b=b+(k-b)*.5}for(let _=0;_<e.length;_++){if(w=e[_],a){let{pressure:E}=w;const M=_i(1,w.distance/r);if(s){const D=_i(1,1-M);E=_i(1,b+(D-b)*(M*Cp))}else E=_i(1,b+(E-b)*(M*Cp));w.radius=r*l(.5-a*(.5-E)),b=E}else w.radius=r/2;g===void 0&&(g=w.radius)}}const S=u.taper===!1?0:u.taper===!0?Math.max(r,v):u.taper,T=d.taper===!1?0:d.taper===!0?Math.max(r,v):d.taper;if(S||T)for(let k=0;k<e.length;k++){w=e[k];const{runningLength:_}=w,E=_<S?f(_/S):1,M=v-_<T?h((v-_)/T):1;w.radius=Math.max(.01,w.radius*Math.min(E,M))}return e}function Zz(e,t={}){const{start:r={},end:a={}}=t,{cap:s=!0}=r,{cap:l=!0}=a;wp(!r.taper&&!a.taper,"cap taper not supported here"),wp(!r.easing&&!a.easing,"cap easing not supported here"),wp(s&&l,"cap must be true");const u=Kz(e,t);Wz(u,t);const d=Jz(u);let f="";for(const h of d)f+=t6(h,t);return f}function Jz(e){if(e.length<=2)return[e];const t=[];let r=[e[0]],a=G.Sub(e[1].point,e[0].point).uni(),s,l,u,d,f;for(let h=1,v=e.length;h<v-1;h++){if(u=e[h-1],d=e[h],f=e[h+1],s=G.Sub(f.point,d.point).uni(),l=G.Dpr(a,s),a=s,l<-.8){const g={...d,point:d.input};r.push(g),t.push(Ap(r)),r=[g];continue}if(r.push(d),!(l>.7)&&(G.Dist2(u.point,d.point)+G.Dist2(d.point,f.point))/((u.radius+d.radius+f.radius)/3)**2<1.5){r.push(d),t.push(Ap(r)),r=[d];continue}}return r.push(e[e.length-1]),t.push(Ap(r)),t}function Ap(e){const t=e[0];let r;for(;e.length>2&&(r=e[1],G.Dist2(t.point,r.point)<((t.radius+r.radius)/2*.5)**2);)e.splice(1,1);const a=e[e.length-1];let s;for(;e.length>2&&(s=e[e.length-2],G.Dist2(a.point,s.point)<((a.radius+s.radius)/2*.5)**2);)e.splice(e.length-2,1);return e.length>1&&(e[0]={...e[0],vector:G.Sub(e[0].point,e[1].point).uni()},e[e.length-1]={...e[e.length-1],vector:G.Sub(e[e.length-2].point,e[e.length-1].point).uni()}),e}function e6(e,t,r){return"M "+e+" "+t+" m -"+r+", 0 a "+r+","+r+" 0 1,1 "+r*2+",0 a "+r+","+r+" 0 1,1 -"+r*2+",0"}function t6(e,t={}){if(e.length===0)return"";if(e.length===1)return e6(e[0].point.x,e[0].point.y,e[0].radius);const{left:r,right:a}=Gz(e,t);a.reverse();let s=`M${Ls(r[0])}T`;for(let l=1;l<r.length;l++)s+=o1(r[l-1],r[l]);{const l=e[e.length-1],u=l.radius,d=l.vector.clone().per().neg(),f=G.Add(l.point,G.Mul(d,u)),h=G.Add(l.point,G.Mul(d,-u));s+=`${Ls(f)}A${Ti(u)},${Ti(u)} 0 0 1 ${Ls(h)}T`}for(let l=1;l<a.length;l++)s+=o1(a[l-1],a[l]);{const l=e[0],u=l.radius,d=l.vector.clone().per(),f=G.Add(l.point,G.Mul(d,u)),h=G.Add(l.point,G.Mul(d,-u));s+=`${Ls(f)}A${Ti(u)},${Ti(u)} 0 0 1 ${Ls(h)}Z`}return s}function n6(){const e=ut(),t=k_(e,B3),r=wn({color:F3[1],width:q3[1]}),a=wn([]),s=ut(),l=ut(),u=ut(),d=ut(),f=ut(),h=wn([]),v=h.map(k=>k.length),g=ut(),b=ut(),w=ut();h.on(u,k=>{const _=Date.now(),E=_-1e3,M=k.filter(D=>D>E);return M.push(_),M}),r.on(s,(k,_)=>({...k,..._})),a.on(w,()=>[]).on(g,(k,_)=>_).on(b,(k,_)=>_).on(u,(k,_)=>{const E=[...k],M=E.at(-1);return M.dots=[...M.dots,_],E}).on(f,(k,_)=>{const E=[...k];return E.pop(),E}),ul({source:[a,r],clock:l,fn:([k,{color:_,width:E}],M)=>[...k,{dots:[M],color:_,width:E}],target:a});const S=So(a,k=>{const _=[];return k.forEach(E=>{const M=Zz(E.dots.map(D=>new G(D[0],D[1])),{size:E.width});_.push({d:M,color:E.color})}),_}),T=So(a,k=>{const _=[];return k.forEach((E,M)=>{const j=E.dots.map(([Y,B])=>`${Y},${B}`).join(" ");_.push({points:j,color:E.color,strokeWidth:E.width})}),_});return{$currentDrawing:a,$currentLineParams:r,lineParamsChanged:s,undoClicked:f,initLoad:b,newRound:w,lineStarted:l,lineExtended:u,somebodyDrawing:g,$svgCanvasPaths:S,$polylinePaths:T,$lineExtendedCount:v,$smoothConf:t,setSmoothConf:e,saveCanvasToPaining:d}}function r6(e){const{$localId:t,$newParty:r,log:a}=e,s=So(t,r,(v,g)=>{if(!g)return{drawing:!1};if(g.status===Ni.inProgress&&g.gameState.state==="drawing"){const b=g.gameState;return{drawing:!0,iam:v===b.playerId,who:b.playerId,word:b.word}}return{drawing:!1}}),l=s.map(v=>v.drawing&&v.iam),u=l,d=n6(),f=r.map(v=>v&&v.gameState.state==="drawing"?v.gameState.drawingId:null);return ul({clock:f,target:d.newRound}),F_(r,v=>{if(!v)return()=>[];a(`joinRoom ${v.id}`);const g=ye.joinRoom("party",v.id);a("joined");const b=d.$currentDrawing.watch(S=>{l.getState()&&(a("publishTopic"),g.publishTopic("currentCanvas",{currentDrawing:S}))}),w=g.subscribeTopic("currentCanvas",S=>{a("currentCanvas"),l.getState()||d.somebodyDrawing(S.currentDrawing)});return()=>{a("unsubscribe"),b(),w(),g.leaveRoom()}}),ul({source:[d.$currentDrawing,r],clock:d.saveCanvasToPaining}).watch(([v,g])=>{(g==null?void 0:g.gameState.state)==="drawing"&&k6(g.gameState.drawingId,v)}),{$drawing:s,$isServer:u,currentLine:d,$currentDrawingId:f}}function i6(e){const t=wn(null),r=ut();t.on(r,(v,g)=>g);const a=ut(),s=wn([]);s.on(a,(v,g)=>g),s.watch(v=>{console.log("$allMyParties",v)});const l=t.map(v=>(v==null?void 0:v.roomEvents)||[]),u=t.map(v=>Object.fromEntries((v==null?void 0:v.newPlayers.map(g=>[g.id,g]))||[])),d=t.map(v=>v?v.gameProgress.flatMap(g=>g.flatMap(b=>b.paintingId)):[]),f=t.map(v=>v?v.gameState.state==="drawing"?v.gameState.guessed:{}:{}),h=So(e,t,(v,g)=>g?g.status!==Ni.inProgress?{choose:!1}:g.gameState.state==="choosing-word"?v===g.gameState.playerId?{choose:!0,iam:!0,who:g.gameState.playerId,words:g.gameState.words}:{choose:!0,iam:!1,who:g.gameState.playerId,words:[]}:{choose:!1}:{choose:!1});return F_(e,v=>v?(E6(v),ye.subscribeQuery({party:{$:{where:{"newPlayers.id":v},order:{serverCreatedAt:"desc"}}}},g=>{if(g.data&&g.data.party){a(g.data.party.map(b=>({id:b.id,name:b.name,status:b.status})));return}console.warn("Something went wrong"),console.log(g)})):()=>{}),{newPartyLoaded:r,$newParty:t,$allMyParties:s,$allChatEvents:l,$currentPlayers:u,$partyPaintingIds:d,$guessed:f,$choosingWord:h}}const a6=f6(),Sg=a6.$user,vd=Sg.map(e=>(e==null?void 0:e.id)||""),o6=ut(),s6=ut(),Ku=ut(),RS=wn([]);RS.on(Ku,(e,t)=>[...e,t]);RS.map(Yz);const jS=i6(vd),{$newParty:Cl,$guessed:l6}=jS,c6=r6({$localId:vd,$newParty:Cl,log:Ku}),{$isServer:u6,currentLine:d6}=c6;ul({source:[vd,Cl],clock:s6,fn:(e,t)=>[e,t]}).watch(([[e,t],r])=>{t&&x6(e,t.id,r)});So(l6,Cl,u6).watch(([e,t,r])=>{if(!t)return;const{newPlayers:a,staticPlayerIds:s,gameState:l,gameProgress:u,gameParams:d}=t;if(r&&l.state==="drawing"&&Object.keys(e).length===s.length-1){const f=l.playerId,h=a.findIndex(v=>v.id===f)+1;u.length===0&&u.push([]),u.at(-1).push({paintingId:l.drawingId,whoDrawId:l.playerId,scores:l.guessed}),a[h]?G1(a[h].id,l,t.id,u):(u.push([]),u.length<d.rounds?(Ku(`nextPlayerChoosingWord: ${a[0].id}`),G1(a[0].id,l,t.id,u)):(Ku("game finished!"),_6(t.id,u)))}});ul({source:[vd,Cl],clock:o6,fn:(e,t)=>[e,t]}).watch(([[e,t],{guess:r}])=>{if(!t)return;const a=t.gameState,s=a.state==="drawing"?a.word:null,l=s?$3(s,r):"none";T6(e,t.id,r,l)});function f6(){const e=wn(null),t=ut();return e.on(t,(r,a)=>a),S6(r=>t(r)),{$user:e}}function X1(e){return e[Math.floor(Math.random()*e.length)]}function h6(){return X1(m6)+" "+X1(p6)}const p6=["cat","dog","sun","sky","tree","bird","fish","hand","foot","ball","star","book","car","bed","toy","hat","cup","box","map","pen"],m6=["big","hot","red","old","wet","new","sad","tall","cold","fat","dry","fun","shy","blue","cute","kind","dark","loud","warm","fast"];async function US(e,t){return ye.transact([ye.tx.$users[e].update({name:t})])}async function g6(e){const{data:{party:t}}=await ye.queryOnce({party:{$:{where:{status:Ni.prepare,name:e}}}});return t&&t[0]||null}async function v6(e){const{data:{party:t}}=await ye.queryOnce({party:{$:{where:{id:e}}}});return t[0]||null}async function y6(e,t){const r=await v6(t);if(!r)throw new Error(`Party not found '${t}'`);if(r.status!==Ni.prepare)throw new Error(`Can't join to party in '${r.status}' status`);return await ye.transact([ye.tx.party[t].link({newPlayers:e})])}async function b6(){return(await ye.queryOnce({players:{}})).data.players}async function w6(e,t){var l;const r=Je(),{$users:a}=await ye.queryOnce({$users:{$:{where:{id:e}},parties:{$:{where:{status:Ni.prepare}}}}}).then(u=>u.data);if((l=a[0])!=null&&l.parties&&a[0].parties.length>0)throw new Error("User already has a party in prepare status. Please finish or leave that party first.");return await ye.transact([ye.tx.party[r].create({name:t,host:e,gameState:{state:"game-prepare"},gameProgress:[[]],gameParams:{rounds:5,wordSuggestions:3,drawTime:60},staticPlayerIds:[],status:Ni.prepare}).link({newPlayers:e})])}function x6(e,t,r){const a=Je();return ye.transact([ye.tx.roomEvent[Je()].create({type:"new-selected-word",payload:{playerId:e,word:r}}).link({party:t}),ye.tx.paintings[a].create({canvas:[],playerId:e,word:r}),ye.tx.party[t].update({gameState:{state:"drawing",playerId:e,word:r,drawingId:a,guessed:{}}})])}function G1(e,t,r,a){const s={type:"drawing-ended",payload:{reason:"all-revealed",revealed:t.guessed,nextPlayerId:e}};return ye.transact([ye.tx.party[r].update({gameState:{state:"choosing-word",playerId:e,words:Y_(3)},gameProgress:a}),ye.tx.roomEvent[Je()].create(s).link({party:r})])}function _6(e,t){const r={type:"game-finished",payload:{reason:"no-more-rounds"}};return ye.transact([ye.tx.party[e].update({gameState:{state:"game-finished"},status:Ni.finished,gameProgress:t}),ye.tx.roomEvent[Je()].create(r).link({party:e})])}function S6(e){ye.getAuth().then(t=>t||ye.auth.signInAsGuest().then(({user:r})=>US(r.id,h6()).then(()=>r))).then(t=>{ye.subscribeQuery({$users:{$:{where:{id:t.id}}}},({data:r})=>{r!=null&&r.$users[0]?e({id:t.id,name:r.$users[0].name||""}):e({id:t.id,name:"error"})})})}function T6(e,t,r,a){const s={type:"user-message",payload:{text:r,playerId:e,isRevealed:a}};return ye.transact([ye.tx.roomEvent[Je()].create(s).link({party:t}),...a==="revealed"?[ye.tx.party[t].merge({gameState:{guessed:{[e]:Date.now()}}})]:[]])}function k6(e,t){return ye.transact(ye.tx.paintings[e].update({canvas:t}))}function E6(e){ye.queryOnce({party:{$:{where:{and:[{status:Ni.inProgress},{"newPlayers.id":e}]}}}}).then(({data:t})=>{var a,s;const r=(s=(a=t.party)==null?void 0:a[0])==null?void 0:s.gameState;(r==null?void 0:r.state)==="drawing"&&(r.drawingId,ye.queryOnce({paintings:{$:{where:{id:r.drawingId}}}}).then(({data:l})=>{l.paintings[0]&&d6.initLoad(l.paintings[0].canvas)}))})}function V1(){return Z.jsx(Mo,{children:Z.jsx(C6,{})})}function C6(){const e=Ao(Sg),t=Ao(jS.$allMyParties),[r,a]=Ee.useState(""),[s,l]=Ee.useState((e==null?void 0:e.name)||""),[u,d]=Ee.useState(Y_(3).join("-")),[f,h]=rg(),v=async()=>{try{await w6(e.id,u)}catch(g){console.error("Failed to create party:",g)}};return Z.jsxs("div",{className:co.form,children:[Z.jsx(s1,{label:"Имя",value:s,onChange:l}),Z.jsx("div",{className:co.field,children:Z.jsxs("form",{onSubmit:g=>{g.preventDefault(),US(e.id,s.trim()),g6(r).then(b=>{if(b)return y6(e.id,b.id).then(()=>{h(jr("current-party"))})})},className:co.roomCodeRow,children:[Z.jsx(s1,{label:"Комната",value:r,onChange:a}),Z.jsx("button",{type:"submit",className:co.joinButton,children:"Войти"})]})}),Z.jsx("div",{className:co.divider,children:Z.jsx("span",{children:"или"})}),Z.jsx(nO,{onClick:v,children:"Создать новую игру"}),Z.jsx("ul",{className:co.allParties,children:t.map(g=>Z.jsx("li",{children:Z.jsxs(uo,{href:jr(`room/${g.name}`),children:[g.name," ",Z.jsx("b",{children:g.status})]})}))})]})}const A6=["домино","стрэй кидс","феликс","бан чан","лино","лифт","концерт","скотч","дом","вода","лёд","квадрат","круг","карандаш","линейка","суши","рамён","дождь","играть","читать","учиться","дерево","растение","работать","сундук","майнкрафт","рисовать","кей-поп","акула","рыба","холод","свет","балкон","программист","пенал","мороженое","куб","лава","вулкан","кот","мяч","танцевать","урок","колонка","плавать","диплом","тюльпан","фото","чашка","кунг-фу","цирк","кролик","рокета","хранилище","семья","родители","ребёнок","мама","папа","счастье","космос","солнце","небо","корона","земля","флаг","королева","король","ворота","сердечко","пульт","маркер","ручка","рука","ножницы","кнопка","тетрадь","айпад","ниндзя","воздух","звук","единорог","телевизор","цветок","гусь","корея","Нидерланды"],M6=["кот","собака","дом","машина","дерево","солнце","луна","звезда","море","река","гора","лес","цветок","трава","небо","облако","дождь","снег","ветер","огонь","вода","земля","камень","песок","лед","пламя","дым","туман","радуга","молния","хлеб","молоко","мясо","рыба","яйцо","сыр","масло","сахар","соль","перец","яблоко","банан","апельсин","лимон","виноград","клубника","вишня","персик","груша","ананас","морковь","картофель","лук","чеснок","помидор","огурец","капуста","салат","редис","свекла","стол","стул","кровать","шкаф","диван","кресло","лампа","зеркало","часы","телевизор","компьютер","телефон","книга","ручка","карандаш","бумага","тетрадь","рюкзак","сумка","кошелек","рубашка","брюки","платье","юбка","куртка","пальто","шляпа","кепка","носки","туфли","сапоги","кроссовки","тапочки","перчатки","шарф","ремень","очки","часы","кольцо","серьги","автобус","поезд","самолет","корабль","велосипед","мотоцикл","грузовик","такси","метро","трамвай","врач","учитель","водитель","повар","продавец","строитель","художник","музыкант","актер","писатель","мама","папа","сын","дочь","брат","сестра","дедушка","бабушка","дядя","тетя","школа","университет","больница","магазин","ресторан","кафе","театр","кино","музей","парк","спорт","футбол","баскетбол","теннис","плавание","бег","йога","танцы","музыка","пение","гитара","пианино","скрипка","барабаны","флейта","труба","саксофон","микрофон","динамик","наушники","красный","синий","зеленый","желтый","черный","белый","серый","розовый","фиолетовый","оранжевый","большой","маленький","высокий","низкий","длинный","короткий","широкий","узкий","толстый","тонкий","быстрый","медленный","горячий","холодный","сухой","мокрый","чистый","грязный","новый","старый","один","два","три","четыре","пять","шесть","семь","восемь","девять","десять","понедельник","вторник","среда","четверг","пятница","суббота","воскресенье","день","ночь","утром","весна","лето","осень","зима","январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь","год","месяц","неделя","час","минута","секунда","время","часы","будильник","календарь","дата","праздник","день рождения","свадьба","любовь","дружба","семья","счастье","радость","грусть","злость","страх","удивление","смех","плач","улыбка","объятие","поцелуй","подарок","сюрприз","мечта","надежда","вера","удача","работа","отдых","игра","развлечение","хобби","путешествие","отпуск","выходные","каникулы","приключение","здоровье","болезнь","лекарство","витамины","спорт","диета","сон","усталость","энергия","сила","деньги","покупки","продажа","цена","скидка","банк","кредит","зарплата","бюджет","экономия","еда","завтрак","обед","ужин","кухня","рецепт","готовка","посуда","тарелка","чашка","нож","вилка","ложка","кастрюля","сковорода","духовка","холодильник","микроволновка","тостер","блендер","шоколад","конфеты","торт","печенье","мороженое","напиток","сок","чай","кофе","лимонад","пляж","отель","чемодан","билет","паспорт","фото","камера","видео","селфи","воспоминание","интернет","сайт","email","сообщение","чат","социальная сеть","блог","видеоблог","подписчик","лайк","фильм","сериал","актер","режиссер","сценарий","роль","премьера","билет","попкорн","3D","животное","птица","рыба","насекомое","млекопитающее","хищник","травоядное","дикое","домашнее","зоопарк","лев","тигр","слон","жираф","обезьяна","медведь","волк","лиса","заяц","белка","птица","орел","сова","попугай","воробей","голубь","ласточка","аист","пингвин","фламинго","акула","дельфин","кит","осьминог","краб","морская звезда","медуза","креветка","лосось","тунец","пчела","бабочка","муравей","паук","жук","комар","муха","стрекоза","кузнечик","божья коровка","роза","тюльпан","ромашка","подсолнух","лилия","орхидея","фиалка","гвоздика","пион","ирис","дуб","береза","сосна","ель","клен","липа","каштан","ива","тополь","рябина","футболист","теннисист","пловец","боксер","гимнаст","лыжник","хоккеист","баскетболист","велосипедист","бегун","стадион","спортзал","бассейн","корт","поле","каток","лыжня","беговая дорожка","тренажер","мяч","ракетка","клюшка","шайба","ворота","сетка","финиш","старт","медаль","кубок","чемпион","математика","физика","химия","биология","история","география","литература","русский язык","английский","информатика","урок","учебник","тетрадь","доска","мел","парта","класс","перемена","звонок","домашнее задание","оценка","экзамен","тест","контрольная","диктант","сочинение","презентация","проект","исследование","эксперимент","погода","прогноз","температура","градус","термометр","барометр","влажность","давление","ветер","буря","ясно","пасмурно","дождливо","снежно","туманно","солнечно","ветрено","прохладно","тепло","жарко","зонт","дождевик","солнцезащитные очки","крем от загара","шляпа от солнца","перчатки","варежки","шарф","шапка","сапоги","космос","планета","звезда","галактика","солнечная система","астронавт","ракета","спутник","телескоп","НЛО","Земля","Марс","Венера","Юпитер","Сатурн","Меркурий","Уран","Нептун","Плутон","комета","океан","континент","страна","город","деревня","столица","граница","карта","компас","GPS","Россия","Москва","Санкт-Петербург","Америка","Европа","Азия","Африка","Австралия","Антарктида","остров","церковь","храм","мечеть","синагога","монастырь","собор","колокол","крест","икона","свеча","праздник","Новый год","Рождество","Пасха","день рождения","свадьба","юбилей","выпускной","крестины","именины","подарок","торт","свечи","воздушные шары","фейерверк","конфетти","украшения","гирлянда","елка","Дед Мороз","больница","поликлиника","врач","медсестра","пациент","лечение","операция","таблетки","укол","рентген","стоматолог","окулист","кардиолог","хирург","терапевт","педиатр","психолог","ветеринар","фармацевт","скорая помощь","полиция","пожарные","спасатель","солдат","генерал","офицер","сержант","капитан","майор","полковник","суд","судья","адвокат","прокурор","свидетель","подозреваемый","обвиняемый","приговор","штраф","тюрьма","банк","банкир","кассир","счет","вклад","кредит","ипотека","процент","банкомат","карта","ресторан","кафе","бар","повар","официант","меню","заказ","счет","чаевые","кухня","отель","гостиница","номер","ключ","ресепшн","администратор","горничная","завтрак","обслуживание","бронирование","магазин","супермаркет","продавец","касса","чек","сдача","скидка","акция","распродажа","витрина","одежда","обувь","аксессуары","украшения","косметика","парфюм","сумка","кошелек","ремень","галстук","парикмахерская","салон красоты","стрижка","прическа","маникюр","педикюр","массаж","косметолог","визажист","стилист","театр","опера","балет","концерт","симфония","оркестр","дирижер","солист","хор","декорации","музей","галерея","выставка","экскурсия","гид","экспонат","картина","скульптура","археология","история","библиотека","книга","автор","писатель","поэт","роман","повесть","рассказ","стихи","сказка","газета","журнал","статья","интервью","репортаж","новости","журналист","редактор","типография","издательство","радио","телевидение","программа","ведущий","корреспондент","прямой эфир","запись","трансляция","канал","антенна","компьютер","ноутбук","планшет","смартфон","клавиатура","мышь","монитор","процессор","память","жесткий диск","программа","приложение","игра","файл","папка","документ","презентация","таблица","база данных","сайт","интернет","браузер","поиск","ссылка","домен","сервер","облако","загрузка","скачивание","обновление","email","сообщение","чат","видеозвонок","конференция","вебинар","стрим","подкаст","блог","влог","социальная сеть","профиль","друзья","подписчики","пост","фото","видео","лайк","комментарий","репост","игрушка","кукла","мишка","конструктор","пазл","настольная игра","карты","шахматы","шашки","домино","мяч","скакалка","велосипед","самокат","ролики","коньки","лыжи","сноуборд","кайт","воздушный змей","сад","огород","грядка","теплица","лейка","лопата","грабли","семена","рассада","урожай","дача","беседка","мангал","шашлык","пикник","костер","палатка","поход","рюкзак","спальный мешок","рыбалка","удочка","крючок","наживка","улов","лодка","сети","рыбак","озеро","пруд","охота","ружье","охотник","дичь","капкан","следы","лес","чаща","поляна","тропа","грибы","ягоды","корзина","нож","компас","карта","ориентирование","заблудиться","выход","тропинка","цирк","клоун","акробат","жонглер","фокусник","дрессировщик","арена","шапито","представление","номер","аттракцион","карусель","колесо обозрения","американские горки","батут","качели","горка","песочница","площадка","парк","зоопарк","вольер","клетка","кормление","экскурсия","смотритель","ветеринар","животное","хищник","травоядное","аквариум","рыбка","водоросли","ракушка","кораллы","фильтр","компрессор","корм","освещение","температура","террариум","змея","ящерица","черепаха","игуана","хамелеон","геккон","варан","питон","кобра","ферма","фермер","трактор","комбайн","плуг","борона","сеялка","жатка","силос","сено","коровник","свинарник","курятник","конюшня","овчарня","пастбище","загон","кормушка","поилка","доярка","корова","бык","теленок","свинья","поросенок","овца","баран","ягненок","коза","козленок","лошадь","жеребенок","пони","осел","мул","верблюд","олень","лось","кабан","бизон","курица","петух","цыпленок","утка","гусь","индейка","перепел","фазан","павлин","страус","мастерская","инструмент","молоток","гвоздь","винт","гайка","болт","отвертка","плоскогубцы","ключ","пила","дрель","шуруповерт","рубанок","стамеска","напильник","наждачка","уровень","рулетка","циркуль","строительство","фундамент","стены","крыша","окна","двери","лестница","балкон","терраса","веранда","кирпич","цемент","песок","щебень","арматура","бетон","раствор","штукатурка","краска","обои","электричество","проводка","розетка","выключатель","лампочка","светильник","люстра","торшер","настольная лампа","бра","водопровод","канализация","трубы","кран","смеситель","раковина","ванна","душ","унитаз","биде","отопление","батарея","радиатор","котел","трубы","термостат","камин","печь","дымоход","дрова","мебель","изготовление","дизайн","материал","дерево","металл","пластик","стекло","кожа","ткань","портной","швея","ателье","выкройка","ткань","нитки","иголка","булавка","ножницы","машинка","вышивка","вязание","спицы","крючок","пряжа","узор","петля","ряд","свитер","шарф","ювелир","золото","серебро","платина","драгоценный камень","алмаз","рубин","изумруд","сапфир","жемчуг","часовщик","механизм","циферблат","стрелки","пружина","маятник","будильник","секундомер","хронометр","таймер"],km=[...A6,...B_,...M6];console.log("RU",km.length,[...new Set(km)].length);const $S=ut(),Tg=wn([]);Tg.map(e=>e.filter(t=>t.lang==="RU"));Tg.on($S,(e,t)=>t);ye.subscribeQuery({words:{}},e=>{e.error&&console.error(e.error),e.data&&$S(e.data.words||[])});function O6(e,t){return ye.transact(ye.tx.words[Je()].create({word:e.trim(),lang:t.toUpperCase(),category:""}))}function N6(e,t){return ye.transact(e.slice(0,100).map(r=>ye.tx.words[Je()].create({word:r.trim(),lang:"RU",category:"",hidden:!1})))}function z6(e){return ye.transact(ye.tx.words[e].update({hidden:!0}))}function D6(e){return ye.transact(ye.tx.words[e].update({hidden:!1}))}const R6="_container_alhqe_1",j6="_langSelector_alhqe_9",U6="_langButton_alhqe_15",$6="_langButtonActive_alhqe_22",L6="_langButtonInactive_alhqe_27",H6="_checkboxLabel_alhqe_32",I6="_addWordForm_alhqe_39",B6="_letterSelector_alhqe_46",q6="_letterButton_alhqe_52",F6="_letterButtonActive_alhqe_60",Y6="_letterButtonInactive_alhqe_65",P6="_wordsList_alhqe_70",X6="_wordItem_alhqe_74",G6="_wordItemHidden_alhqe_78",V6="_wordToggleButton_alhqe_84",Q6="_wordToggleButtonShow_alhqe_93",K6="_wordToggleButtonHide_alhqe_97",St={container:R6,langSelector:j6,langButton:U6,langButtonActive:$6,langButtonInactive:L6,checkboxLabel:H6,addWordForm:I6,letterSelector:B6,letterButton:q6,letterButtonActive:F6,letterButtonInactive:Y6,wordsList:P6,wordItem:X6,wordItemHidden:G6,wordToggleButton:V6,wordToggleButtonShow:Q6,wordToggleButtonHide:K6},W6="АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".split(""),Z6="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");function J6(){const e=Ao(Tg),[t,r]=Ee.useState("RU"),[a,s]=Ee.useState("А"),[l,u]=Ee.useState(""),[d,f]=Ee.useState(!0),h=t==="RU"?W6:Z6,v=e.filter(k=>{const _=k.lang===t,E=k.word[0].toUpperCase().startsWith(a),M=d?!0:!k.hidden;return _&&E&&M}),g=async(k,_)=>{try{_?await D6(k):await z6(k)}catch(E){console.error("Failed to toggle word visibility:",E)}},b=k=>{r(k),s(k==="RU"?"А":"A")},w=k=>{k.preventDefault(),O6(l,t).then(()=>{u("")}).catch(_=>{console.error(_),String(_.message).includes("is a unique attribute on")&&alert(`Слово "${l}" уже добавлено`)})},S=new Set(e.filter(k=>k.lang==="RU").map(k=>k.word)),T=[...new Set(km)].filter(k=>!S.has(k)).slice(0,100);return Z.jsx(Mo,{children:Z.jsxs("div",{className:St.container,children:[T.length>0&&Z.jsx("div",{children:Z.jsxs("button",{onClick:()=>{N6(T).then(()=>{console.log(`Добавлено ${T.length} новых слов`)}).catch(k=>{console.error(k)})},children:["ADD ",Z.jsx("b",{children:"RU"})," ",T.length]})}),Z.jsx(eD,{selectedLang:t,onLangChange:b,totalWords:e.length}),Z.jsxs("label",{className:St.checkboxLabel,children:[Z.jsx("input",{type:"checkbox",checked:d,onChange:k=>f(k.target.checked)}),"Показать скрытые слова"]}),Z.jsx(tD,{selectedLang:t,newWord:l,onWordChange:u,onSubmit:w}),Z.jsx(nD,{letters:h,selectedLetter:a,onLetterChange:s}),Z.jsx(rD,{filteredWords:v,selectedLetter:a,onWordClick:g})]})})}function eD({selectedLang:e,onLangChange:t,totalWords:r}){return Z.jsxs("div",{className:St.langSelector,children:[Z.jsx("button",{onClick:()=>t("RU"),className:`${St.langButton} ${e==="RU"?St.langButtonActive:St.langButtonInactive}`,children:"RU"}),Z.jsx("button",{onClick:()=>t("EN"),className:`${St.langButton} ${e==="EN"?St.langButtonActive:St.langButtonInactive}`,children:"EN"}),Z.jsx("p",{children:r})]})}function tD({selectedLang:e,newWord:t,onWordChange:r,onSubmit:a}){return Z.jsxs("form",{onSubmit:a,className:St.addWordForm,children:[Z.jsx("input",{type:"text",placeholder:"Слово",value:t,onChange:s=>r(s.target.value)}),Z.jsxs("button",{type:"submit",disabled:!t.trim(),children:["Добавить ",e]})]})}function nD({letters:e,selectedLetter:t,onLetterChange:r}){return Z.jsx("div",{className:St.letterSelector,children:e.map(a=>Z.jsx("button",{onClick:()=>r(a),className:`${St.letterButton} ${t===a?St.letterButtonActive:St.letterButtonInactive}`,children:a},a))})}function rD({filteredWords:e,selectedLetter:t,onWordClick:r}){return Z.jsxs("div",{children:[Z.jsxs("h3",{children:["Слова на букву ",t," (",e.length,"):"]}),e.length===0?Z.jsx("p",{children:"Нет слов"}):Z.jsx("ol",{className:St.wordsList,children:e.toSorted((a,s)=>a.word.localeCompare(s.word)).map(a=>{const s=a.hidden||!1;return Z.jsxs("li",{className:`${St.wordItem} ${s?St.wordItemHidden:""}`,children:[a.word,Z.jsx("button",{onClick:()=>r(a.id,s),className:`${St.wordToggleButton} ${s?St.wordToggleButtonShow:St.wordToggleButtonHide}`,title:s?"Восстановить слово":"Скрыть слово",children:s?"↻":"✕"})]},a.id)})})]})}const du=window.devicePixelRatio||1;function iD(e,t=q_){const r=e.getContext("2d");return e.width=t*du,e.height=t*du,r.scale(du,du),r}function aD(e,t,r){const a=r/q_;e.scale(a,a),t.forEach(s=>{if(s.dots.length===1)e.fillStyle=s.color,e.beginPath(),e.arc(s.dots[0][0],s.dots[0][1],s.width/2,0,2*Math.PI),e.fill();else{e.strokeStyle=s.color,e.lineWidth=s.width,e.lineCap="round",e.lineJoin="round",e.beginPath(),e.moveTo(s.dots[0][0],s.dots[0][1]);for(let l=1;l<s.dots.length;l++)e.lineTo(s.dots[l][0],s.dots[l][1]);e.stroke()}})}function oD({canvas:e,size:t=200,className:r}){const a=Ee.useRef(null);Ee.useEffect(()=>{if(!a.current)return;const u=iD(a.current,t);u.clearRect(0,0,t,t),aD(u,e,t)},[e,t]);const s={width:`${t}px`,height:`${t}px`,position:"relative",background:"#f6eee2",borderRadius:"4px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.1)"},l={position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"4px"};return Z.jsx("div",{style:s,className:r,children:Z.jsx("canvas",{ref:a,style:l})})}async function sD(){return(await ye.queryOnce({paintings:{}})).data.paintings}function lD(e){return ye.transact([ye.tx.paintings[e].delete()])}const cD="_container_1xxrm_1",uD="_header_1xxrm_9",dD="_deleteButton_1xxrm_15",fD="_deleteButtonDisabled_1xxrm_25",hD="_paintingsGrid_1xxrm_31",pD="_paintingCard_1xxrm_37",mD="_paintingLabel_1xxrm_45",gD="_paintingCheckbox_1xxrm_51",vD="_paintingTitle_1xxrm_55",yD="_paintingInfo_1xxrm_61",bD="_paintingMeta_1xxrm_67",vn={container:cD,header:uD,deleteButton:dD,deleteButtonDisabled:fD,paintingsGrid:hD,paintingCard:pD,paintingLabel:mD,paintingCheckbox:gD,paintingTitle:vD,paintingInfo:yD,paintingMeta:bD};function wD(){const[e,t]=Ee.useState([]),[r,a]=Ee.useState([]),[s,l]=Ee.useState(!0),[u,d]=Ee.useState(new Set),[f,h]=Ee.useState(!1),v=Object.fromEntries(r.map(S=>[S.id,S]));Ee.useEffect(()=>{sD().then(t).then(()=>b6().then(a)).catch(console.error).finally(()=>l(!1))},[]);const g=(S,T)=>{const k=new Set(u);T?k.add(S):k.delete(S),d(k)},b=async()=>{if(u.size!==0){h(!0);try{await Promise.all(Array.from(u).map(S=>lD(S))),t(S=>S.filter(T=>!u.has(T.id))),d(new Set)}catch(S){console.error("Failed to delete paintings:",S),alert("Ошибка при удалении картин")}finally{h(!1)}}};if(s)return Z.jsx(Mo,{children:Z.jsx("div",{className:vn.container,children:Z.jsx("p",{children:"Загрузка..."})})});const w=f||u.size===0;return Z.jsx(Mo,{children:Z.jsxs("div",{className:vn.container,children:[Z.jsxs("div",{className:vn.header,children:[Z.jsxs("h3",{children:["Картины (",e.length,"):"]}),Z.jsx("button",{onClick:b,disabled:w,className:`${vn.deleteButton} ${w?vn.deleteButtonDisabled:""}`,children:f?"Удаление...":`Удалить ${u.size}`})]}),e.length===0?Z.jsx("p",{children:"Нет картин"}):Z.jsx("div",{className:vn.paintingsGrid,children:e.toReversed().map(S=>Z.jsx(xD,{painting:S,author:v[S.playerId],selected:u.has(S.id),onSelectionChange:T=>g(S.id,T)},S.id))})]})})}function xD({painting:e,author:t,selected:r,onSelectionChange:a}){const s=P1(e.canvas),l=e.canvas.length,u=s.length,d=s.map(f=>f.dots.length).reduce((f,h)=>f+h,0);return Z.jsxs("div",{className:vn.paintingCard,children:[Z.jsxs("label",{className:vn.paintingLabel,children:[Z.jsx("input",{type:"checkbox",checked:r,onChange:f=>a(f.target.checked),className:vn.paintingCheckbox}),Z.jsx("h4",{className:vn.paintingTitle,children:e.word})]}),Z.jsx(oD,{canvas:P1(e.canvas),size:200}),Z.jsxs("div",{className:vn.paintingInfo,children:[Z.jsxs("p",{className:vn.paintingMeta,children:["Автор: ",t.name]}),Z.jsxs("p",{className:vn.paintingMeta,children:["Линий ",u,l!==u?`(${l})`:"",", точек"," ",d]})]})]})}const{$allParties:_D}=SD();function SD(){const e=ut(),t=k_(e,[]);return ye.subscribeQuery({party:{newPlayers:{}}},r=>{r.error&&console.error(r.error),r.data&&e(r.data.party)}),{$allParties:t}}function TD(){const e=Ao(_D);return Z.jsxs(Mo,{children:[Z.jsx("h1",{children:"Все комнаты"}),e.length===0?Z.jsx("h2",{children:"Комнат пока нет"}):Z.jsx("ul",{children:e.map(t=>{var a;const r=((a=t.newPlayers)==null?void 0:a.length)||0;return Z.jsxs("li",{children:['"',t.name,'" ',r," ",r===1?"игрок":"игроков"," ",Z.jsx("b",{children:t.status})]},t.id)})})]})}function kD(){const e=Ao(Cl),[t,r]=rg(),a=Ao(Sg);return Ee.useEffect(()=>{a&&(console.log("-------"),console.log(e),e||console.log("1111"),r(jr("")))},[e,a]),a?Z.jsx("div",{style:{height:"100%"},children:Z.jsxs(ZM,{children:[Z.jsx(lo,{path:"/scribble/words",component:J6}),Z.jsx(lo,{path:"/scribble/paintings",component:wD}),Z.jsx(lo,{path:"/scribble/all-rooms",component:TD}),Z.jsx(lo,{path:"/scribble/room/:roomName",component:ED}),Z.jsx(lo,{path:"/scribble",component:V1}),Z.jsx(lo,{path:"/",component:V1})]})}):null}function ED(){const[e,t]=QM("/scribble/room/:roomName");return Z.jsxs(Mo,{children:[Z.jsx("h3",{children:"RoomPage"}),Z.jsxs("p",{children:["name: ",(t==null?void 0:t.roomName)||"not found"]})]})}const CD="env4u6q",AD="ex217ed",MD="e16s4j3i",OD="e1xfw049",ND="e1m2g3gr",zD="r1vcax27";class DD extends Ee.Component{constructor(r){super(r);kb(this,"handleReload",()=>{window.location.reload()});this.state={hasError:!1,error:null}}static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r,a){console.error("Error caught by ErrorBoundary:",r,a)}render(){return this.state.hasError?Z.jsx("div",{className:CD,children:Z.jsxs("div",{className:AD,children:[Z.jsx("h1",{className:MD,children:"Something went wrong"}),Z.jsx("p",{className:OD,children:"The application encountered an unexpected error. Please try reloading the page."}),this.state.error&&Z.jsx("pre",{className:ND,children:this.state.error.toString()}),Z.jsx("button",{className:zD,onClick:this.handleReload,children:"Reload Page"})]})}):this.props.children}}_M({enabled:!0});const RD=OM.createRoot(document.getElementById("app"));RD.render(Z.jsx(DD,{children:Z.jsx(kD,{})}));
