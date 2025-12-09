var Yk=Object.defineProperty;var Xk=(e,t,r)=>t in e?Yk(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Fb=(e,t,r)=>Xk(e,typeof t!="symbol"?t+"":t,r);function Gk(e,t){for(var r=0;r<t.length;r++){const a=t[r];if(typeof a!="string"&&!Array.isArray(a)){for(const s in a)if(s!=="default"&&!(s in e)){const l=Object.getOwnPropertyDescriptor(a,s);l&&Object.defineProperty(e,s,l.get?l:{enumerable:!0,get:()=>a[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function r(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=r(s);fetch(s.href,l)}})();function Pm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Kh={exports:{}},Ps={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bb;function Vk(){if(Bb)return Ps;Bb=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(a,s,l){var u=null;if(l!==void 0&&(u=""+l),s.key!==void 0&&(u=""+s.key),"key"in s){l={};for(var d in s)d!=="key"&&(l[d]=s[d])}else l=s;return s=l.ref,{$$typeof:e,type:a,key:u,ref:s!==void 0?s:null,props:l}}return Ps.Fragment=t,Ps.jsx=r,Ps.jsxs=r,Ps}var Pb;function Qk(){return Pb||(Pb=1,Kh.exports=Vk()),Kh.exports}var O=Qk();/**
 * @license bippy
 *
 * Copyright (c) Aiden Bai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Kk="0.3.34",Ym=`bippy-${Kk}`,Yb=Object.defineProperty,Wk=Object.prototype.hasOwnProperty,Zs=()=>{},_x=e=>{try{Function.prototype.toString.call(e).indexOf("^_^")>-1&&setTimeout(()=>{throw new Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")})}catch{}},Sx=(e=Bo())=>"getFiberRoots"in e;let Tx=!1,tu;const Pp=(e=Bo())=>Tx?!0:(typeof e.inject=="function"&&(tu=e.inject.toString()),!!(tu!=null&&tu.includes("(injected)"))),xu=new Set,Yp=new Set,Zk=e=>{const t=new Map;let r=0,a={_instrumentationIsActive:!1,_instrumentationSource:Ym,checkDCE:_x,hasUnsupportedRendererAttached:!1,inject(s){const l=++r;return t.set(l,s),Yp.add(s),a._instrumentationIsActive||(a._instrumentationIsActive=!0,xu.forEach(u=>u())),l},on:Zs,onCommitFiberRoot:Zs,onCommitFiberUnmount:Zs,onPostCommitFiberRoot:Zs,renderers:t,supportsFiber:!0,supportsFlight:!0};try{Yb(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__",{configurable:!0,enumerable:!0,get(){return a},set(u){if(u&&typeof u=="object"){const d=a.renderers;a=u,d.size>0&&(d.forEach((f,h)=>{Yp.add(f),u.renderers.set(h,f)}),Xp(e))}}});const s=window.hasOwnProperty;let l=!1;Yb(window,"hasOwnProperty",{configurable:!0,value:function(...u){try{if(!l&&u[0]==="__REACT_DEVTOOLS_GLOBAL_HOOK__")return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,l=!0,-0}catch{}return s.apply(this,u)},writable:!0})}catch{Xp(e)}return a},Xp=e=>{e&&xu.add(e);try{const t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t)return;if(!t._instrumentationSource){const r=Sx();if(t.checkDCE=_x,t.supportsFiber=!0,t.supportsFlight=!0,t.hasUnsupportedRendererAttached=!1,t._instrumentationSource=Ym,t._instrumentationIsActive=!1,r||(t.on=Zs),t.renderers.size){t._instrumentationIsActive=!0,xu.forEach(s=>s());return}const a=t.inject;Pp(t)&&!r&&(Tx=!0,t.inject({scheduleRefresh(){}})&&(t._instrumentationIsActive=!0)),t.inject=s=>{const l=a(s);return Yp.add(s),t._instrumentationIsActive=!0,xu.forEach(u=>u()),l}}(t.renderers.size||t._instrumentationIsActive||Pp())&&(e==null||e())}catch{}},Jk=()=>Wk.call(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__"),Bo=e=>Jk()?(Xp(e),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):Zk(e),eE=()=>{var e,t;return!!(typeof window<"u"&&((e=window.document)!=null&&e.createElement||((t=window.navigator)==null?void 0:t.product)==="ReactNative"))},tE=()=>{try{eE()&&Bo()}catch{}},sd=0,Ta=1,kx=3,nE=5,rE=6,iE=7,aE=9,ld=11,cd=13,Al=14,Ml=15,oE=18,sE=22,lE=23,cE=26,uE=27,dE=60111,fE="Symbol(react.concurrent_mode)",hE="Symbol(react.async_mode)",Xb=1,pE=2,mE=4096,gE=4,Gb=8,vE=16,yE=32,bE=1024,wE=8192,Vb=pE|gE|vE|yE|mE|wE|bE,pl=e=>{switch(e.tag){case nE:case cE:case uE:return!0;default:return typeof e.type=="string"}},ud=e=>{switch(e.tag){case Ta:case ld:case sd:case Al:case Ml:return!0;default:return!1}},xE=(e,t)=>{var r;try{const a=e.dependencies,s=(r=e.alternate)==null?void 0:r.dependencies;if(!a||!s||typeof a!="object"||!("firstContext"in a)||typeof s!="object"||!("firstContext"in s))return!1;let l=a.firstContext,u=s.firstContext;for(;l&&typeof l=="object"&&"memoizedValue"in l||u&&typeof u=="object"&&"memoizedValue"in u;){if(t(l,u)===!0)return!0;l=l==null?void 0:l.next,u=u==null?void 0:u.next}}catch{}return!1},Xm=e=>{var s;const t=e.memoizedProps,r=((s=e.alternate)==null?void 0:s.memoizedProps)||{},a=e.flags??e.effectTag??0;switch(e.tag){case Ta:case aE:case ld:case sd:case Al:case Ml:return(a&Xb)===Xb;default:return e.alternate?r!==t||e.alternate.memoizedState!==e.memoizedState||e.alternate.ref!==e.ref:!0}},Gm=e=>(e.flags&(Vb|Gb))!==0||(e.subtreeFlags&(Vb|Gb))!==0,_E=e=>{const t=[],r=[e];for(;r.length;){const a=r.pop();a&&(pl(a)&&Gm(a)&&Xm(a)&&t.push(a),a.child&&r.push(a.child),a.sibling&&r.push(a.sibling))}return t},Vm=e=>{switch(e.tag){case oE:return!0;case iE:case rE:case lE:case sE:return!0;case kx:return!1;default:{const t=typeof e.type=="object"&&e.type!==null?e.type.$$typeof:e.type;switch(typeof t=="symbol"?t.toString():t){case dE:case fE:case hE:return!0;default:return!1}}}},SE=e=>{const t=[],r=[];for(pl(e)?t.push(e):e.child&&r.push(e.child);r.length;){const a=r.pop();if(!a)break;pl(a)?t.push(a):a.child&&r.push(a.child),a.sibling&&r.push(a.sibling)}return t};function Ex(e,t,r=!1){return e&&t(e)instanceof Promise?Ax(e,t,r):Cx(e,t,r)}const Cx=(e,t,r=!1)=>{if(!e)return null;if(t(e)===!0)return e;let a=r?e.return:e.child;for(;a;){const s=Cx(a,t,r);if(s)return s;a=r?null:a.sibling}return null},Ax=async(e,t,r=!1)=>{if(!e)return null;if(await t(e)===!0)return e;let a=r?e.return:e.child;for(;a;){const s=await Ax(a,t,r);if(s)return s;a=r?null:a.sibling}return null},fa=e=>{const t=(e==null?void 0:e.actualDuration)??0;let r=t,a=(e==null?void 0:e.child)??null;for(;t>0&&a!=null;)r-=a.actualDuration??0,a=a.sibling;return{selfTime:r,totalTime:t}},ml=e=>{var t;return!!((t=e.updateQueue)!=null&&t.memoCache)},ka=e=>{const t=e;return typeof t=="function"?t:typeof t=="object"&&t?ka(t.type||t.render):null},zt=e=>{const t=e;if(typeof t=="string")return t;if(typeof t!="function"&&!(typeof t=="object"&&t))return null;const r=t.displayName||t.name||null;if(r)return r;const a=ka(t);return a&&(a.displayName||a.name)||null},TE=e=>{try{if(typeof e.version=="string"&&e.bundleType>0)return"development"}catch{}return"production"},kE=()=>!!Bo()._instrumentationIsActive||Sx()||Pp();let Mx=0;const zo=new WeakMap,EE=(e,t=Mx++)=>{zo.set(e,t)},Ri=e=>{let t=zo.get(e);return!t&&e.alternate&&(t=zo.get(e.alternate)),t||(t=Mx++,EE(e,t)),t},ji=(e,t,r)=>{let a=t;for(;a!=null;){if(zo.has(a)||Ri(a),!Vm(a)&&Xm(a)&&e(a,"mount"),a.tag===cd)if(a.memoizedState!==null){const u=a.child,d=u?u.sibling:null;if(d){const f=d.child;f!==null&&ji(e,f,!1)}}else{let u=null;a.child!==null&&(u=a.child.child),u!==null&&ji(e,u,!1)}else a.child!=null&&ji(e,a.child,!0);a=r?a.sibling:null}},Gp=(e,t,r,a)=>{var f,h,v;if(zo.has(t)||Ri(t),!r)return;zo.has(r)||Ri(r);const s=t.tag===cd;!Vm(t)&&Xm(t)&&e(t,"update");const u=s&&r.memoizedState!==null,d=s&&t.memoizedState!==null;if(u&&d){const g=((f=t.child)==null?void 0:f.sibling)??null,b=((h=r.child)==null?void 0:h.sibling)??null;g!==null&&b!==null&&Gp(e,g,b)}else if(u&&!d){const g=t.child;g!==null&&ji(e,g,!0)}else if(!u&&d){Ox(e,r);const g=((v=t.child)==null?void 0:v.sibling)??null;g!==null&&ji(e,g,!0)}else if(t.child!==r.child){let g=t.child;for(;g;){if(g.alternate){const b=g.alternate;Gp(e,g,b)}else ji(e,g,!1);g=g.sibling}}},Vp=(e,t)=>{(t.tag===kx||!Vm(t))&&e(t,"unmount")},Ox=(e,t)=>{const r=t.tag===cd&&t.memoizedState!==null;let a=t.child;if(r){const s=t.child,l=(s==null?void 0:s.sibling)??null;a=(l==null?void 0:l.child)??null}for(;a!==null;)a.return!==null&&(Vp(e,a),Ox(e,a)),a=a.sibling};let CE=0;const Qb=new WeakMap,AE=(e,t)=>{const r="current"in e?e.current:e;let a=Qb.get(e);a||(a={id:CE++,prevFiber:null},Qb.set(e,a));const{prevFiber:s}=a;if(!r)Vp(t,r);else if(s!==null){const l=s&&s.memoizedState!=null&&s.memoizedState.element!=null&&s.memoizedState.isDehydrated!==!0,u=r.memoizedState!=null&&r.memoizedState.element!=null&&r.memoizedState.isDehydrated!==!0;!l&&u?ji(t,r,!1):l&&u?Gp(t,r,r.alternate):l&&!u&&Vp(t,r)}else ji(t,r,!0);a.prevFiber=r},ME=e=>{const t=Bo(e.onActive);t._instrumentationSource=e.name??Ym;const r=t.onCommitFiberRoot;if(e.onCommitFiberRoot){const l=(u,d,f)=>{var h;t.onCommitFiberRoot===l&&(r==null||r(u,d,f),(h=e.onCommitFiberRoot)==null||h.call(e,u,d,f))};t.onCommitFiberRoot=l}const a=t.onCommitFiberUnmount;if(e.onCommitFiberUnmount){const l=(u,d)=>{var f;t.onCommitFiberUnmount===l&&(a==null||a(u,d),(f=e.onCommitFiberUnmount)==null||f.call(e,u,d))};t.onCommitFiberUnmount=l}const s=t.onPostCommitFiberRoot;if(e.onPostCommitFiberRoot){const l=(u,d)=>{var f;t.onPostCommitFiberRoot===l&&(s==null||s(u,d),(f=e.onPostCommitFiberRoot)==null||f.call(e,u,d))};t.onPostCommitFiberRoot=l}return t};tE();var dd,_e,Nx,zx,ca,Kb,jx,Dx,Rx,Qm,Qp,Kp,Ux,gl={},$x=[],OE=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ol=Array.isArray;function Vr(e,t){for(var r in t)e[r]=t[r];return e}function Km(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function ya(e,t,r){var a,s,l,u={};for(l in t)l=="key"?a=t[l]:l=="ref"?s=t[l]:u[l]=t[l];if(arguments.length>2&&(u.children=arguments.length>3?dd.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(l in e.defaultProps)u[l]===void 0&&(u[l]=e.defaultProps[l]);return _u(e,u,a,s,null)}function _u(e,t,r,a,s){var l={type:e,props:t,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++Nx,__i:-1,__u:0};return s==null&&_e.vnode!=null&&_e.vnode(l),l}function Re(e){return e.children}function Yn(e,t){this.props=e,this.context=t}function jo(e,t){if(t==null)return e.__?jo(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?jo(e):null}function Lx(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return Lx(e)}}function Wp(e){(!e.__d&&(e.__d=!0)&&ca.push(e)&&!Lu.__r++||Kb!=_e.debounceRendering)&&((Kb=_e.debounceRendering)||jx)(Lu)}function Lu(){for(var e,t,r,a,s,l,u,d=1;ca.length;)ca.length>d&&ca.sort(Dx),e=ca.shift(),d=ca.length,e.__d&&(r=void 0,a=void 0,s=(a=(t=e).__v).__e,l=[],u=[],t.__P&&((r=Vr({},a)).__v=a.__v+1,_e.vnode&&_e.vnode(r),Wm(t.__P,r,a,t.__n,t.__P.namespaceURI,32&a.__u?[s]:null,l,s??jo(a),!!(32&a.__u),u),r.__v=a.__v,r.__.__k[r.__i]=r,qx(l,r,u),a.__e=a.__=null,r.__e!=s&&Lx(r)));Lu.__r=0}function Hx(e,t,r,a,s,l,u,d,f,h,v){var g,b,w,_,T,k,S,E=a&&a.__k||$x,M=t.length;for(f=NE(r,t,E,f,M),g=0;g<M;g++)(w=r.__k[g])!=null&&(b=w.__i==-1?gl:E[w.__i]||gl,w.__i=g,k=Wm(e,w,b,s,l,u,d,f,h,v),_=w.__e,w.ref&&b.ref!=w.ref&&(b.ref&&Zm(b.ref,null,w),v.push(w.ref,w.__c||_,w)),T==null&&_!=null&&(T=_),(S=!!(4&w.__u))||b.__k===w.__k?f=Ix(w,f,e,S):typeof w.type=="function"&&k!==void 0?f=k:_&&(f=_.nextSibling),w.__u&=-7);return r.__e=T,f}function NE(e,t,r,a,s){var l,u,d,f,h,v=r.length,g=v,b=0;for(e.__k=new Array(s),l=0;l<s;l++)(u=t[l])!=null&&typeof u!="boolean"&&typeof u!="function"?(f=l+b,(u=e.__k[l]=typeof u=="string"||typeof u=="number"||typeof u=="bigint"||u.constructor==String?_u(null,u,null,null,null):Ol(u)?_u(Re,{children:u},null,null,null):u.constructor==null&&u.__b>0?_u(u.type,u.props,u.key,u.ref?u.ref:null,u.__v):u).__=e,u.__b=e.__b+1,d=null,(h=u.__i=zE(u,r,f,g))!=-1&&(g--,(d=r[h])&&(d.__u|=2)),d==null||d.__v==null?(h==-1&&(s>v?b--:s<v&&b++),typeof u.type!="function"&&(u.__u|=4)):h!=f&&(h==f-1?b--:h==f+1?b++:(h>f?b--:b++,u.__u|=4))):e.__k[l]=null;if(g)for(l=0;l<v;l++)(d=r[l])!=null&&(2&d.__u)==0&&(d.__e==a&&(a=jo(d)),Bx(d,d));return a}function Ix(e,t,r,a){var s,l;if(typeof e.type=="function"){for(s=e.__k,l=0;s&&l<s.length;l++)s[l]&&(s[l].__=e,t=Ix(s[l],t,r,a));return t}e.__e!=t&&(a&&(t&&e.type&&!t.parentNode&&(t=jo(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Hu(e,t){return t=t||[],e==null||typeof e=="boolean"||(Ol(e)?e.some(function(r){Hu(r,t)}):t.push(e)),t}function zE(e,t,r,a){var s,l,u,d=e.key,f=e.type,h=t[r],v=h!=null&&(2&h.__u)==0;if(h===null&&e.key==null||v&&d==h.key&&f==h.type)return r;if(a>(v?1:0)){for(s=r-1,l=r+1;s>=0||l<t.length;)if((h=t[u=s>=0?s--:l++])!=null&&(2&h.__u)==0&&d==h.key&&f==h.type)return u}return-1}function Wb(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||OE.test(t)?r:r+"px"}function nu(e,t,r,a,s){var l,u;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof a=="string"&&(e.style.cssText=a=""),a)for(t in a)r&&t in r||Wb(e.style,t,"");if(r)for(t in r)a&&r[t]==a[t]||Wb(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")l=t!=(t=t.replace(Rx,"$1")),u=t.toLowerCase(),t=u in e||t=="onFocusOut"||t=="onFocusIn"?u.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+l]=r,r?a?r.u=a.u:(r.u=Qm,e.addEventListener(t,l?Kp:Qp,l)):e.removeEventListener(t,l?Kp:Qp,l);else{if(s=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function Zb(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=Qm++;else if(t.t<r.u)return;return r(_e.event?_e.event(t):t)}}}function Wm(e,t,r,a,s,l,u,d,f,h){var v,g,b,w,_,T,k,S,E,M,z,R,F,I,J,ne,ge,fe=t.type;if(t.constructor!=null)return null;128&r.__u&&(f=!!(32&r.__u),l=[d=t.__e=r.__e]),(v=_e.__b)&&v(t);e:if(typeof fe=="function")try{if(S=t.props,E="prototype"in fe&&fe.prototype.render,M=(v=fe.contextType)&&a[v.__c],z=v?M?M.props.value:v.__:a,r.__c?k=(g=t.__c=r.__c).__=g.__E:(E?t.__c=g=new fe(S,z):(t.__c=g=new Yn(S,z),g.constructor=fe,g.render=DE),M&&M.sub(g),g.props=S,g.state||(g.state={}),g.context=z,g.__n=a,b=g.__d=!0,g.__h=[],g._sb=[]),E&&g.__s==null&&(g.__s=g.state),E&&fe.getDerivedStateFromProps!=null&&(g.__s==g.state&&(g.__s=Vr({},g.__s)),Vr(g.__s,fe.getDerivedStateFromProps(S,g.__s))),w=g.props,_=g.state,g.__v=t,b)E&&fe.getDerivedStateFromProps==null&&g.componentWillMount!=null&&g.componentWillMount(),E&&g.componentDidMount!=null&&g.__h.push(g.componentDidMount);else{if(E&&fe.getDerivedStateFromProps==null&&S!==w&&g.componentWillReceiveProps!=null&&g.componentWillReceiveProps(S,z),!g.__e&&g.shouldComponentUpdate!=null&&g.shouldComponentUpdate(S,g.__s,z)===!1||t.__v==r.__v){for(t.__v!=r.__v&&(g.props=S,g.state=g.__s,g.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(ae){ae&&(ae.__=t)}),R=0;R<g._sb.length;R++)g.__h.push(g._sb[R]);g._sb=[],g.__h.length&&u.push(g);break e}g.componentWillUpdate!=null&&g.componentWillUpdate(S,g.__s,z),E&&g.componentDidUpdate!=null&&g.__h.push(function(){g.componentDidUpdate(w,_,T)})}if(g.context=z,g.props=S,g.__P=e,g.__e=!1,F=_e.__r,I=0,E){for(g.state=g.__s,g.__d=!1,F&&F(t),v=g.render(g.props,g.state,g.context),J=0;J<g._sb.length;J++)g.__h.push(g._sb[J]);g._sb=[]}else do g.__d=!1,F&&F(t),v=g.render(g.props,g.state,g.context),g.state=g.__s;while(g.__d&&++I<25);g.state=g.__s,g.getChildContext!=null&&(a=Vr(Vr({},a),g.getChildContext())),E&&!b&&g.getSnapshotBeforeUpdate!=null&&(T=g.getSnapshotBeforeUpdate(w,_)),ne=v,v!=null&&v.type===Re&&v.key==null&&(ne=Fx(v.props.children)),d=Hx(e,Ol(ne)?ne:[ne],t,r,a,s,l,u,d,f,h),g.base=t.__e,t.__u&=-161,g.__h.length&&u.push(g),k&&(g.__E=g.__=null)}catch(ae){if(t.__v=null,f||l!=null)if(ae.then){for(t.__u|=f?160:128;d&&d.nodeType==8&&d.nextSibling;)d=d.nextSibling;l[l.indexOf(d)]=null,t.__e=d}else{for(ge=l.length;ge--;)Km(l[ge]);Zp(t)}else t.__e=r.__e,t.__k=r.__k,ae.then||Zp(t);_e.__e(ae,t,r)}else l==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):d=t.__e=jE(r.__e,t,r,a,s,l,u,f,h);return(v=_e.diffed)&&v(t),128&t.__u?void 0:d}function Zp(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(Zp)}function qx(e,t,r){for(var a=0;a<r.length;a++)Zm(r[a],r[++a],r[++a]);_e.__c&&_e.__c(t,e),e.some(function(s){try{e=s.__h,s.__h=[],e.some(function(l){l.call(s)})}catch(l){_e.__e(l,s.__v)}})}function Fx(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:Ol(e)?e.map(Fx):Vr({},e)}function jE(e,t,r,a,s,l,u,d,f){var h,v,g,b,w,_,T,k=r.props,S=t.props,E=t.type;if(E=="svg"?s="http://www.w3.org/2000/svg":E=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),l!=null){for(h=0;h<l.length;h++)if((w=l[h])&&"setAttribute"in w==!!E&&(E?w.localName==E:w.nodeType==3)){e=w,l[h]=null;break}}if(e==null){if(E==null)return document.createTextNode(S);e=document.createElementNS(s,E,S.is&&S),d&&(_e.__m&&_e.__m(t,l),d=!1),l=null}if(E==null)k===S||d&&e.data==S||(e.data=S);else{if(l=l&&dd.call(e.childNodes),k=r.props||gl,!d&&l!=null)for(k={},h=0;h<e.attributes.length;h++)k[(w=e.attributes[h]).name]=w.value;for(h in k)if(w=k[h],h!="children"){if(h=="dangerouslySetInnerHTML")g=w;else if(!(h in S)){if(h=="value"&&"defaultValue"in S||h=="checked"&&"defaultChecked"in S)continue;nu(e,h,null,w,s)}}for(h in S)w=S[h],h=="children"?b=w:h=="dangerouslySetInnerHTML"?v=w:h=="value"?_=w:h=="checked"?T=w:d&&typeof w!="function"||k[h]===w||nu(e,h,w,k[h],s);if(v)d||g&&(v.__html==g.__html||v.__html==e.innerHTML)||(e.innerHTML=v.__html),t.__k=[];else if(g&&(e.innerHTML=""),Hx(t.type=="template"?e.content:e,Ol(b)?b:[b],t,r,a,E=="foreignObject"?"http://www.w3.org/1999/xhtml":s,l,u,l?l[0]:r.__k&&jo(r,0),d,f),l!=null)for(h=l.length;h--;)Km(l[h]);d||(h="value",E=="progress"&&_==null?e.removeAttribute("value"):_!=null&&(_!==e[h]||E=="progress"&&!_||E=="option"&&_!=k[h])&&nu(e,h,_,k[h],s),h="checked",T!=null&&T!=e[h]&&nu(e,h,T,k[h],s))}return e}function Zm(e,t,r){try{if(typeof e=="function"){var a=typeof e.__u=="function";a&&e.__u(),a&&t==null||(e.__u=e(t))}else e.current=t}catch(s){_e.__e(s,r)}}function Bx(e,t,r){var a,s;if(_e.unmount&&_e.unmount(e),(a=e.ref)&&(a.current&&a.current!=e.__e||Zm(a,null,t)),(a=e.__c)!=null){if(a.componentWillUnmount)try{a.componentWillUnmount()}catch(l){_e.__e(l,t)}a.base=a.__P=null}if(a=e.__k)for(s=0;s<a.length;s++)a[s]&&Bx(a[s],t,r||typeof e.type!="function");r||Km(e.__e),e.__c=e.__=e.__e=void 0}function DE(e,t,r){return this.constructor(e,r)}function ol(e,t,r){var a,s,l,u;t==document&&(t=document.documentElement),_e.__&&_e.__(e,t),s=(a=!1)?null:t.__k,l=[],u=[],Wm(t,e=t.__k=ya(Re,null,[e]),s||gl,gl,t.namespaceURI,s?null:t.firstChild?dd.call(t.childNodes):null,l,s?s.__e:t.firstChild,a,u),qx(l,e,u)}function Px(e){function t(r){var a,s;return this.getChildContext||(a=new Set,(s={})[t.__c]=this,this.getChildContext=function(){return s},this.componentWillUnmount=function(){a=null},this.shouldComponentUpdate=function(l){this.props.value!=l.value&&a.forEach(function(u){u.__e=!0,Wp(u)})},this.sub=function(l){a.add(l);var u=l.componentWillUnmount;l.componentWillUnmount=function(){a&&a.delete(l),u&&u.call(l)}}),r.children}return t.__c="__cC"+Ux++,t.__=e,t.Provider=t.__l=(t.Consumer=function(r,a){return r.children(a)}).contextType=t,t}dd=$x.slice,_e={__e:function(e,t,r,a){for(var s,l,u;t=t.__;)if((s=t.__c)&&!s.__)try{if((l=s.constructor)&&l.getDerivedStateFromError!=null&&(s.setState(l.getDerivedStateFromError(e)),u=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,a||{}),u=s.__d),u)return s.__E=s}catch(d){e=d}throw e}},Nx=0,zx=function(e){return e!=null&&e.constructor==null},Yn.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Vr({},this.state),typeof e=="function"&&(e=e(Vr({},r),this.props)),e&&Vr(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),Wp(this))},Yn.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Wp(this))},Yn.prototype.render=Re,ca=[],jx=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Dx=function(e,t){return e.__v.__b-t.__v.__b},Lu.__r=0,Rx=/(PointerCapture)$|Capture$/i,Qm=0,Qp=Zb(!1),Kp=Zb(!0),Ux=0;var ba,lt,Wh,Jb,vl=0,Yx=[],yt=_e,ew=yt.__b,tw=yt.__r,nw=yt.diffed,rw=yt.__c,iw=yt.unmount,aw=yt.__;function Nl(e,t){yt.__h&&yt.__h(lt,e,vl||t),vl=0;var r=lt.__H||(lt.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function Ce(e){return vl=1,RE(Xx,e)}function RE(e,t,r){var a=Nl(ba++,2);if(a.t=e,!a.__c&&(a.__=[r?r(t):Xx(void 0,t),function(d){var f=a.__N?a.__N[0]:a.__[0],h=a.t(f,d);f!==h&&(a.__N=[h,a.__[1]],a.__c.setState({}))}],a.__c=lt,!lt.__f)){var s=function(d,f,h){if(!a.__c.__H)return!0;var v=a.__c.__H.__.filter(function(b){return!!b.__c});if(v.every(function(b){return!b.__N}))return!l||l.call(this,d,f,h);var g=a.__c.props!==d;return v.forEach(function(b){if(b.__N){var w=b.__[0];b.__=b.__N,b.__N=void 0,w!==b.__[0]&&(g=!0)}}),l&&l.call(this,d,f,h)||g};lt.__f=!0;var l=lt.shouldComponentUpdate,u=lt.componentWillUpdate;lt.componentWillUpdate=function(d,f,h){if(this.__e){var v=l;l=void 0,s(d,f,h),l=v}u&&u.call(this,d,f,h)},lt.shouldComponentUpdate=s}return a.__N||a.__}function Ee(e,t){var r=Nl(ba++,3);!yt.__s&&tg(r.__H,t)&&(r.__=e,r.u=t,lt.__H.__h.push(r))}function Jm(e,t){var r=Nl(ba++,4);!yt.__s&&tg(r.__H,t)&&(r.__=e,r.u=t,lt.__h.push(r))}function he(e){return vl=5,or(function(){return{current:e}},[])}function or(e,t){var r=Nl(ba++,7);return tg(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function vt(e,t){return vl=8,or(function(){return e},t)}function eg(e){var t=lt.context[e.__c],r=Nl(ba++,9);return r.c=e,t?(r.__==null&&(r.__=!0,t.sub(lt)),t.props.value):e.__}function UE(){for(var e;e=Yx.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Su),e.__H.__h.forEach(Jp),e.__H.__h=[]}catch(t){e.__H.__h=[],yt.__e(t,e.__v)}}yt.__b=function(e){lt=null,ew&&ew(e)},yt.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),aw&&aw(e,t)},yt.__r=function(e){tw&&tw(e),ba=0;var t=(lt=e.__c).__H;t&&(Wh===lt?(t.__h=[],lt.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(Su),t.__h.forEach(Jp),t.__h=[],ba=0)),Wh=lt},yt.diffed=function(e){nw&&nw(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Yx.push(t)!==1&&Jb===yt.requestAnimationFrame||((Jb=yt.requestAnimationFrame)||$E)(UE)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),Wh=lt=null},yt.__c=function(e,t){t.some(function(r){try{r.__h.forEach(Su),r.__h=r.__h.filter(function(a){return!a.__||Jp(a)})}catch(a){t.some(function(s){s.__h&&(s.__h=[])}),t=[],yt.__e(a,r.__v)}}),rw&&rw(e,t)},yt.unmount=function(e){iw&&iw(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(a){try{Su(a)}catch(s){t=s}}),r.__H=void 0,t&&yt.__e(t,r.__v))};var ow=typeof requestAnimationFrame=="function";function $E(e){var t,r=function(){clearTimeout(a),ow&&cancelAnimationFrame(t),setTimeout(e)},a=setTimeout(r,35);ow&&(t=requestAnimationFrame(r))}function Su(e){var t=lt,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),lt=t}function Jp(e){var t=lt;e.__c=e.__(),lt=t}function tg(e,t){return!e||e.length!==t.length||t.some(function(r,a){return r!==e[a]})}function Xx(e,t){return typeof t=="function"?t(e):t}var LE=Symbol.for("preact-signals");function ng(){if(Eo>1)Eo--;else{for(var e,t=!1;sl!==void 0;){var r=sl;for(sl=void 0,em++;r!==void 0;){var a=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&Vx(r))try{r.c()}catch(s){t||(e=s,t=!0)}r=a}}if(em=0,Eo--,t)throw e}}var Be=void 0;function yl(e){var t=Be;Be=void 0;try{return e()}finally{Be=t}}var sl=void 0,Eo=0,em=0,Iu=0;function Gx(e){if(Be!==void 0){var t=e.n;if(t===void 0||t.t!==Be)return t={i:0,S:e,p:Be.s,n:void 0,t:Be,e:void 0,x:void 0,r:t},Be.s!==void 0&&(Be.s.n=t),Be.s=t,e.n=t,32&Be.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=Be.s,t.n=void 0,Be.s.n=t,Be.s=t),t}}function qt(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}qt.prototype.brand=LE;qt.prototype.h=function(){return!0};qt.prototype.S=function(e){var t=this,r=this.t;r!==e&&e.e===void 0&&(e.x=r,this.t=e,r!==void 0?r.e=e:yl(function(){var a;(a=t.W)==null||a.call(t)}))};qt.prototype.U=function(e){var t=this;if(this.t!==void 0){var r=e.e,a=e.x;r!==void 0&&(r.x=a,e.e=void 0),a!==void 0&&(a.e=r,e.x=void 0),e===this.t&&(this.t=a,a===void 0&&yl(function(){var s;(s=t.Z)==null||s.call(t)}))}};qt.prototype.subscribe=function(e){var t=this;return fd(function(){var r=t.value,a=Be;Be=void 0;try{e(r)}finally{Be=a}},{name:"sub"})};qt.prototype.valueOf=function(){return this.value};qt.prototype.toString=function(){return this.value+""};qt.prototype.toJSON=function(){return this.value};qt.prototype.peek=function(){var e=Be;Be=void 0;try{return this.value}finally{Be=e}};Object.defineProperty(qt.prototype,"value",{get:function(){var e=Gx(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(em>100)throw new Error("Cycle detected");this.v=e,this.i++,Iu++,Eo++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{ng()}}}});function Et(e,t){return new qt(e,t)}function Vx(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function Qx(e){for(var t=e.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function Kx(e){for(var t=e.s,r=void 0;t!==void 0;){var a=t.p;t.i===-1?(t.S.U(t),a!==void 0&&(a.n=t.n),t.n!==void 0&&(t.n.p=a)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=a}e.s=r}function Ea(e,t){qt.call(this,void 0),this.x=e,this.s=void 0,this.g=Iu-1,this.f=4,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched,this.name=t==null?void 0:t.name}Ea.prototype=new qt;Ea.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Iu))return!0;if(this.g=Iu,this.f|=1,this.i>0&&!Vx(this))return this.f&=-2,!0;var e=Be;try{Qx(this),Be=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return Be=e,Kx(this),this.f&=-2,!0};Ea.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}qt.prototype.S.call(this,e)};Ea.prototype.U=function(e){if(this.t!==void 0&&(qt.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};Ea.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(Ea.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=Gx(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function Ca(e,t){return new Ea(e,t)}function Wx(e){var t=e.u;if(e.u=void 0,typeof t=="function"){Eo++;var r=Be;Be=void 0;try{t()}catch(a){throw e.f&=-2,e.f|=8,rg(e),a}finally{Be=r,ng()}}}function rg(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,Wx(e)}function HE(e){if(Be!==this)throw new Error("Out-of-order effect");Kx(this),Be=e,this.f&=-2,8&this.f&&rg(this),ng()}function Po(e,t){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=t==null?void 0:t.name}Po.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};Po.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Wx(this),Qx(this),Eo++;var e=Be;return Be=this,HE.bind(this,e)};Po.prototype.N=function(){2&this.f||(this.f|=2,this.o=sl,sl=this)};Po.prototype.d=function(){this.f|=8,1&this.f||rg(this)};Po.prototype.dispose=function(){this.d()};function fd(e,t){var r=new Po(e,t);try{r.c()}catch(s){throw r.d(),s}var a=r.d.bind(r);return a[Symbol.dispose]=a,a}var Zh;function Yo(e,t){_e[e]=t.bind(null,_e[e]||function(){})}function qu(e){Zh&&Zh(),Zh=e&&e.S()}function Zx(e){var t=this,r=e.data,a=qE(r);a.value=r;var s=or(function(){for(var l=t.__v;l=l.__;)if(l.__c){l.__c.__$f|=4;break}return t.__$u.c=function(){var u,d=t.__$u.S(),f=s.value;d(),zx(f)||((u=t.base)==null?void 0:u.nodeType)!==3?(t.__$f|=1,t.setState({})):t.base.data=f},Ca(function(){var u=a.value.value;return u===0?0:u===!0?"":u||""})},[]);return s.value}Zx.displayName="_st";Object.defineProperties(qt.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Zx},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});Yo("__b",function(e,t){if(typeof t.type=="string"){var r,a=t.props;for(var s in a)if(s!=="children"){var l=a[s];l instanceof qt&&(r||(t.__np=r={}),r[s]=l,a[s]=l.peek())}}e(t)});Yo("__r",function(e,t){qu();var r,a=t.__c;a&&(a.__$f&=-2,(r=a.__$u)===void 0&&(a.__$u=r=(function(s){var l;return fd(function(){l=this}),l.c=function(){a.__$f|=1,a.setState({})},l})())),qu(r),e(t)});Yo("__e",function(e,t,r,a){qu(),e(t,r,a)});Yo("diffed",function(e,t){qu();var r;if(typeof t.type=="string"&&(r=t.__e)){var a=t.__np,s=t.props;if(a){var l=r.U;if(l)for(var u in l){var d=l[u];d!==void 0&&!(u in a)&&(d.d(),l[u]=void 0)}else r.U=l={};for(var f in a){var h=l[f],v=a[f];h===void 0?(h=IE(r,f,v,s),l[f]=h):h.o(v,s)}}}e(t)});function IE(e,t,r,a){var s=t in e&&e.ownerSVGElement===void 0,l=Et(r);return{o:function(u,d){l.value=u,a=d},d:fd(function(){var u=l.value.value;a[t]!==u&&(a[t]=u,s?e[t]=u:u?e.setAttribute(t,u):e.removeAttribute(t))})}}Yo("unmount",function(e,t){if(typeof t.type=="string"){var r=t.__e;if(r){var a=r.U;if(a){r.U=void 0;for(var s in a){var l=a[s];l&&l.d()}}}}else{var u=t.__c;if(u){var d=u.__$u;d&&(u.__$u=void 0,d.d())}}e(t)});Yo("__h",function(e,t,r,a){(a<3||a===9)&&(t.__$f|=2),e(t,r,a)});Yn.prototype.shouldComponentUpdate=function(e,t){var r=this.__$u,a=r&&r.s!==void 0;for(var s in t)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(a||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(a||4&this.__$f)||3&this.__$f)return!0;for(var l in e)if(l!=="__source"&&e[l]!==this.props[l])return!0;for(var u in this.props)if(!(u in e))return!0;return!1};function qE(e){return or(function(){return Et(e)},[])}function bl(e){var t=he(e);t.current=e,Ee(function(){return fd(function(){return t.current()})},[])}function Jx(e,t){for(var r in t)e[r]=t[r];return e}function tm(e,t){for(var r in e)if(r!=="__source"&&!(r in t))return!0;for(var a in t)if(a!=="__source"&&e[a]!==t[a])return!0;return!1}function FE(e,t){var r=t(),a=Ce({t:{__:r,u:t}}),s=a[0].t,l=a[1];return Jm(function(){s.__=r,s.u=t,Jh(s)&&l({t:s})},[e,r,t]),Ee(function(){return Jh(s)&&l({t:s}),e(function(){Jh(s)&&l({t:s})})},[e]),r}function Jh(e){var t,r,a=e.u,s=e.__;try{var l=a();return!((t=s)===(r=l)&&(t!==0||1/t==1/r)||t!=t&&r!=r)}catch{return!0}}function sw(e,t){this.props=e,this.context=t}function hd(e,t){function r(s){var l=this.props.ref,u=l==s.ref;return!u&&l&&(l.call?l(null):l.current=null),t?!t(this.props,s)||!u:tm(this.props,s)}function a(s){return this.shouldComponentUpdate=r,ya(e,s)}return a.displayName="Memo("+(e.displayName||e.name)+")",a.prototype.isReactComponent=!0,a.__f=!0,a.type=e,a}(sw.prototype=new Yn).isPureReactComponent=!0,sw.prototype.shouldComponentUpdate=function(e,t){return tm(this.props,e)||tm(this.state,t)};var lw=_e.__b;_e.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),lw&&lw(e)};var BE=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function ig(e){function t(r){var a=Jx({},r);return delete a.ref,e(a,r.ref||null)}return t.$$typeof=BE,t.render=e,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var PE=_e.__e;_e.__e=function(e,t,r,a){if(e.then){for(var s,l=t;l=l.__;)if((s=l.__c)&&s.__c)return t.__e==null&&(t.__e=r.__e,t.__k=r.__k),s.__c(e,t)}PE(e,t,r,a)};var cw=_e.unmount;function e2(e,t,r){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(a){typeof a.__c=="function"&&a.__c()}),e.__c.__H=null),(e=Jx({},e)).__c!=null&&(e.__c.__P===r&&(e.__c.__P=t),e.__c.__e=!0,e.__c=null),e.__k=e.__k&&e.__k.map(function(a){return e2(a,t,r)})),e}function t2(e,t,r){return e&&r&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(a){return t2(a,t,r)}),e.__c&&e.__c.__P===t&&(e.__e&&r.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=r)),e}function ep(){this.__u=0,this.o=null,this.__b=null}function n2(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function ru(){this.i=null,this.l=null}_e.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),cw&&cw(e)},(ep.prototype=new Yn).__c=function(e,t){var r=t.__c,a=this;a.o==null&&(a.o=[]),a.o.push(r);var s=n2(a.__v),l=!1,u=function(){l||(l=!0,r.__R=null,s?s(d):d())};r.__R=u;var d=function(){if(!--a.__u){if(a.state.__a){var f=a.state.__a;a.__v.__k[0]=t2(f,f.__c.__P,f.__c.__O)}var h;for(a.setState({__a:a.__b=null});h=a.o.pop();)h.forceUpdate()}};a.__u++||32&t.__u||a.setState({__a:a.__b=a.__v.__k[0]}),e.then(u,u)},ep.prototype.componentWillUnmount=function(){this.o=[]},ep.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),a=this.__v.__k[0].__c;this.__v.__k[0]=e2(this.__b,r,a.__O=a.__P)}this.__b=null}var s=t.__a&&ya(Re,null,e.fallback);return s&&(s.__u&=-33),[ya(Re,null,t.__a?null:e.children),s]};var uw=function(e,t,r){if(++r[1]===r[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(r=e.i;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.i=r=r[2]}};function YE(e){return this.getChildContext=function(){return e.context},e.children}function XE(e){var t=this,r=e.h;if(t.componentWillUnmount=function(){ol(null,t.v),t.v=null,t.h=null},t.h&&t.h!==r&&t.componentWillUnmount(),!t.v){for(var a=t.__v;a!==null&&!a.__m&&a.__!==null;)a=a.__;t.h=r,t.v={nodeType:1,parentNode:r,childNodes:[],__k:{__m:a.__m},contains:function(){return!0},insertBefore:function(s,l){this.childNodes.push(s),t.h.insertBefore(s,l)},removeChild:function(s){this.childNodes.splice(this.childNodes.indexOf(s)>>>1,1),t.h.removeChild(s)}}}ol(ya(YE,{context:t.context},e.__v),t.v)}function GE(e,t){var r=ya(XE,{__v:e,h:t});return r.containerInfo=t,r}(ru.prototype=new Yn).__a=function(e){var t=this,r=n2(t.__v),a=t.l.get(e);return a[0]++,function(s){var l=function(){t.props.revealOrder?(a.push(s),uw(t,e,a)):s()};r?r(l):l()}},ru.prototype.render=function(e){this.i=null,this.l=new Map;var t=Hu(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var r=t.length;r--;)this.l.set(t[r],this.i=[1,0,this.i]);return e.children},ru.prototype.componentDidUpdate=ru.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,r){uw(e,r,t)})};var VE=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,QE=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,KE=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,WE=/[A-Z0-9]/g,ZE=typeof document<"u",JE=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};Yn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(Yn.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var dw=_e.event;function eC(){}function tC(){return this.cancelBubble}function nC(){return this.defaultPrevented}_e.event=function(e){return dw&&(e=dw(e)),e.persist=eC,e.isPropagationStopped=tC,e.isDefaultPrevented=nC,e.nativeEvent=e};var rC={enumerable:!1,configurable:!0,get:function(){return this.class}},fw=_e.vnode;_e.vnode=function(e){typeof e.type=="string"&&(function(t){var r=t.props,a=t.type,s={},l=a.indexOf("-")===-1;for(var u in r){var d=r[u];if(!(u==="value"&&"defaultValue"in r&&d==null||ZE&&u==="children"&&a==="noscript"||u==="class"||u==="className")){var f=u.toLowerCase();u==="defaultValue"&&"value"in r&&r.value==null?u="value":u==="download"&&d===!0?d="":f==="translate"&&d==="no"?d=!1:f[0]==="o"&&f[1]==="n"?f==="ondoubleclick"?u="ondblclick":f!=="onchange"||a!=="input"&&a!=="textarea"||JE(r.type)?f==="onfocus"?u="onfocusin":f==="onblur"?u="onfocusout":KE.test(u)&&(u=f):f=u="oninput":l&&QE.test(u)?u=u.replace(WE,"-$&").toLowerCase():d===null&&(d=void 0),f==="oninput"&&s[u=f]&&(u="oninputCapture"),s[u]=d}}a=="select"&&s.multiple&&Array.isArray(s.value)&&(s.value=Hu(r.children).forEach(function(h){h.props.selected=s.value.indexOf(h.props.value)!=-1})),a=="select"&&s.defaultValue!=null&&(s.value=Hu(r.children).forEach(function(h){h.props.selected=s.multiple?s.defaultValue.indexOf(h.props.value)!=-1:s.defaultValue==h.props.value})),r.class&&!r.className?(s.class=r.class,Object.defineProperty(s,"className",rC)):(r.className&&!r.class||r.class&&r.className)&&(s.class=s.className=r.className),t.props=s})(e),e.$$typeof=VE,fw&&fw(e)};var hw=_e.__r;_e.__r=function(e){hw&&hw(e),e.__c};var pw=_e.diffed;_e.diffed=function(e){pw&&pw(e);var t=e.props,r=e.__e;r!=null&&e.type==="textarea"&&"value"in t&&t.value!==r.value&&(r.value=t.value==null?"":t.value)};var iC=0;function y(e,t,r,a,s,l){t||(t={});var u,d,f=t;if("ref"in f)for(d in f={},t)d=="ref"?u=t[d]:f[d]=t[d];var h={type:e,props:f,key:r,ref:u,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--iC,__i:-1,__u:0,__source:s,__self:l};if(typeof e=="function"&&(u=e.defaultProps))for(d in u)f[d]===void 0&&(f[d]=u[d]);return _e.vnode&&_e.vnode(h),h}var tp={exports:{}},we={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mw;function aC(){if(mw)return we;mw=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),b=Symbol.iterator;function w(N){return N===null||typeof N!="object"?null:(N=b&&N[b]||N["@@iterator"],typeof N=="function"?N:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,k={};function S(N,Y,Z){this.props=N,this.context=Y,this.refs=k,this.updater=Z||_}S.prototype.isReactComponent={},S.prototype.setState=function(N,Y){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,Y,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function E(){}E.prototype=S.prototype;function M(N,Y,Z){this.props=N,this.context=Y,this.refs=k,this.updater=Z||_}var z=M.prototype=new E;z.constructor=M,T(z,S.prototype),z.isPureReactComponent=!0;var R=Array.isArray;function F(){}var I={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function ne(N,Y,Z){var te=Z.ref;return{$$typeof:e,type:N,key:Y,ref:te!==void 0?te:null,props:Z}}function ge(N,Y){return ne(N.type,Y,N.props)}function fe(N){return typeof N=="object"&&N!==null&&N.$$typeof===e}function ae(N){var Y={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Z){return Y[Z]})}var je=/\/+/g;function Ie(N,Y){return typeof N=="object"&&N!==null&&N.key!=null?ae(""+N.key):Y.toString(36)}function Fe(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(F,F):(N.status="pending",N.then(function(Y){N.status==="pending"&&(N.status="fulfilled",N.value=Y)},function(Y){N.status==="pending"&&(N.status="rejected",N.reason=Y)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function A(N,Y,Z,te,re){var le=typeof N;(le==="undefined"||le==="boolean")&&(N=null);var ce=!1;if(N===null)ce=!0;else switch(le){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(N.$$typeof){case e:case t:ce=!0;break;case v:return ce=N._init,A(ce(N._payload),Y,Z,te,re)}}if(ce)return re=re(N),ce=te===""?"."+Ie(N,0):te,R(re)?(Z="",ce!=null&&(Z=ce.replace(je,"$&/")+"/"),A(re,Y,Z,"",function(ct){return ct})):re!=null&&(fe(re)&&(re=ge(re,Z+(re.key==null||N&&N.key===re.key?"":(""+re.key).replace(je,"$&/")+"/")+ce)),Y.push(re)),1;ce=0;var be=te===""?".":te+":";if(R(N))for(var ye=0;ye<N.length;ye++)te=N[ye],le=be+Ie(te,ye),ce+=A(te,Y,Z,le,re);else if(ye=w(N),typeof ye=="function")for(N=ye.call(N),ye=0;!(te=N.next()).done;)te=te.value,le=be+Ie(te,ye++),ce+=A(te,Y,Z,le,re);else if(le==="object"){if(typeof N.then=="function")return A(Fe(N),Y,Z,te,re);throw Y=String(N),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return ce}function D(N,Y,Z){if(N==null)return N;var te=[],re=0;return A(N,te,"","",function(le){return Y.call(Z,le,re++)}),te}function L(N){if(N._status===-1){var Y=N._result;Y=Y(),Y.then(function(Z){(N._status===0||N._status===-1)&&(N._status=1,N._result=Z)},function(Z){(N._status===0||N._status===-1)&&(N._status=2,N._result=Z)}),N._status===-1&&(N._status=0,N._result=Y)}if(N._status===1)return N._result.default;throw N._result}var Q=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},ee={map:D,forEach:function(N,Y,Z){D(N,function(){Y.apply(this,arguments)},Z)},count:function(N){var Y=0;return D(N,function(){Y++}),Y},toArray:function(N){return D(N,function(Y){return Y})||[]},only:function(N){if(!fe(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return we.Activity=g,we.Children=ee,we.Component=S,we.Fragment=r,we.Profiler=s,we.PureComponent=M,we.StrictMode=a,we.Suspense=f,we.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,we.__COMPILER_RUNTIME={__proto__:null,c:function(N){return I.H.useMemoCache(N)}},we.cache=function(N){return function(){return N.apply(null,arguments)}},we.cacheSignal=function(){return null},we.cloneElement=function(N,Y,Z){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var te=T({},N.props),re=N.key;if(Y!=null)for(le in Y.key!==void 0&&(re=""+Y.key),Y)!J.call(Y,le)||le==="key"||le==="__self"||le==="__source"||le==="ref"&&Y.ref===void 0||(te[le]=Y[le]);var le=arguments.length-2;if(le===1)te.children=Z;else if(1<le){for(var ce=Array(le),be=0;be<le;be++)ce[be]=arguments[be+2];te.children=ce}return ne(N.type,re,te)},we.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:l,_context:N},N},we.createElement=function(N,Y,Z){var te,re={},le=null;if(Y!=null)for(te in Y.key!==void 0&&(le=""+Y.key),Y)J.call(Y,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(re[te]=Y[te]);var ce=arguments.length-2;if(ce===1)re.children=Z;else if(1<ce){for(var be=Array(ce),ye=0;ye<ce;ye++)be[ye]=arguments[ye+2];re.children=be}if(N&&N.defaultProps)for(te in ce=N.defaultProps,ce)re[te]===void 0&&(re[te]=ce[te]);return ne(N,le,re)},we.createRef=function(){return{current:null}},we.forwardRef=function(N){return{$$typeof:d,render:N}},we.isValidElement=fe,we.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:L}},we.memo=function(N,Y){return{$$typeof:h,type:N,compare:Y===void 0?null:Y}},we.startTransition=function(N){var Y=I.T,Z={};I.T=Z;try{var te=N(),re=I.S;re!==null&&re(Z,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(F,Q)}catch(le){Q(le)}finally{Y!==null&&Z.types!==null&&(Y.types=Z.types),I.T=Y}},we.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},we.use=function(N){return I.H.use(N)},we.useActionState=function(N,Y,Z){return I.H.useActionState(N,Y,Z)},we.useCallback=function(N,Y){return I.H.useCallback(N,Y)},we.useContext=function(N){return I.H.useContext(N)},we.useDebugValue=function(){},we.useDeferredValue=function(N,Y){return I.H.useDeferredValue(N,Y)},we.useEffect=function(N,Y){return I.H.useEffect(N,Y)},we.useEffectEvent=function(N){return I.H.useEffectEvent(N)},we.useId=function(){return I.H.useId()},we.useImperativeHandle=function(N,Y,Z){return I.H.useImperativeHandle(N,Y,Z)},we.useInsertionEffect=function(N,Y){return I.H.useInsertionEffect(N,Y)},we.useLayoutEffect=function(N,Y){return I.H.useLayoutEffect(N,Y)},we.useMemo=function(N,Y){return I.H.useMemo(N,Y)},we.useOptimistic=function(N,Y){return I.H.useOptimistic(N,Y)},we.useReducer=function(N,Y,Z){return I.H.useReducer(N,Y,Z)},we.useRef=function(N){return I.H.useRef(N)},we.useState=function(N){return I.H.useState(N)},we.useSyncExternalStore=function(N,Y,Z){return I.H.useSyncExternalStore(N,Y,Z)},we.useTransition=function(){return I.H.useTransition()},we.version="19.2.0",we}var gw;function zl(){return gw||(gw=1,tp.exports=aC()),tp.exports}var de=zl();const br=Pm(de),oC=Gk({__proto__:null,default:br},[de]);Array.prototype.toSorted||Object.defineProperty(Array.prototype,"toSorted",{value:function(e){return[...this].sort(e)},writable:!0,configurable:!0});function sC(e,t){return t-e}function lC(e){let t=e[0].name;const r=e.length,a=Math.min(4,r);for(let s=1;s<a;s++)t+=`, ${e[s].name}`;return t}function cC(e){let t=e[0].time;for(let r=1,a=e.length;r<a;r++)t+=e[r].time;return t}function uC(e){for(let t=0,r=e.length;t<r;t++)if(e[t].forget)return!0;return!1}var dC=e=>{let t="";const r=new Map;for(const u of e){const{forget:d,time:f,aggregatedCount:h,name:v}=u;r.has(h)||r.set(h,[]);const g=r.get(h);g&&g.push({name:v,forget:d,time:f??0})}const a=Array.from(r.keys()).sort(sC),s=[];let l=0;for(const u of a){const d=r.get(u);if(!d)continue;let f=lC(d);const h=cC(d),v=uC(d);l+=h,d.length>4&&(f+="…"),u>1&&(f+=` × ${u}`),v&&(f=`✨${f}`),s.push(f)}return t=s.join(", "),t.length?(t.length>40&&(t=`${t.slice(0,40)}…`),l>=.01&&(t+=` (${Number(l.toFixed(2))}ms)`),t):null};function Ui(e,t){return e===t||e!==e&&t!==t}var ag=e=>{const t=e.createOscillator(),r=e.createGain();t.connect(r),r.connect(e.destination);const a={type:"sine",freq:[392,600],duration:.3,gain:.12},s=a.freq,l=a.duration/s.length;s.forEach((u,d)=>{t.frequency.setValueAtTime(u,e.currentTime+d*l)}),t.type=a.type,r.gain.setValueAtTime(a.gain,e.currentTime),r.gain.setTargetAtTime(0,e.currentTime+a.duration*.7,.05),t.start(),t.stop(e.currentTime+a.duration)},fC=e=>new Promise(t=>{const r=new Map,a=new IntersectionObserver(s=>{for(const l of s){const u=l.target,d=l.boundingClientRect;r.set(u,d)}a.disconnect(),t(r)});for(const s of e)a.observe(s)}),hC={mount:1,update:2,unmount:4},ft=ig(({size:e=15,name:t,fill:r="currentColor",stroke:a="currentColor",className:s,externalURL:l="",style:u},d)=>{const f=Array.isArray(e)?e[0]:e,h=Array.isArray(e)?e[1]||e[0]:e,v=`${l}#${t}`;return y("svg",{ref:d,width:`${f}px`,height:`${h}px`,fill:r,stroke:a,className:s,style:{...u,minWidth:`${f}px`,maxWidth:`${f}px`,minHeight:`${h}px`,maxHeight:`${h}px`},children:[y("title",{children:t}),y("use",{href:v})]})}),xe=24,kt={width:550,height:350,initialHeight:400},Jn=240,Qr="react-scan-widget-settings-v2",Tu="react-scan-widget-collapsed-v1",mo="react-scan-widget-last-view-v1",Sr=typeof window<"u";function r2(e){var t,r,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=r2(e[t]))&&(a&&(a+=" "),a+=r)}else for(r in e)e[r]&&(a&&(a+=" "),a+=r);return a}function pC(){for(var e,t,r=0,a="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=r2(e))&&(a&&(a+=" "),a+=t);return a}var og="-",mC=e=>{const t=vC(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:a}=e;return{getClassGroupId:u=>{const d=u.split(og);return d[0]===""&&d.length!==1&&d.shift(),i2(d,t)||gC(u)},getConflictingClassGroupIds:(u,d)=>{const f=r[u]||[];return d&&a[u]?[...f,...a[u]]:f}}},i2=(e,t)=>{var u;if(e.length===0)return t.classGroupId;const r=e[0],a=t.nextPart.get(r),s=a?i2(e.slice(1),a):void 0;if(s)return s;if(t.validators.length===0)return;const l=e.join(og);return(u=t.validators.find(({validator:d})=>d(l)))==null?void 0:u.classGroupId},vw=/^\[(.+)\]$/,gC=e=>{if(vw.test(e)){const t=vw.exec(e)[1],r=t==null?void 0:t.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},vC=e=>{const{theme:t,prefix:r}=e,a={nextPart:new Map,validators:[]};return bC(Object.entries(e.classGroups),r).forEach(([l,u])=>{nm(u,a,l,t)}),a},nm=(e,t,r,a)=>{e.forEach(s=>{if(typeof s=="string"){const l=s===""?t:yw(t,s);l.classGroupId=r;return}if(typeof s=="function"){if(yC(s)){nm(s(a),t,r,a);return}t.validators.push({validator:s,classGroupId:r});return}Object.entries(s).forEach(([l,u])=>{nm(u,yw(t,l),r,a)})})},yw=(e,t)=>{let r=e;return t.split(og).forEach(a=>{r.nextPart.has(a)||r.nextPart.set(a,{nextPart:new Map,validators:[]}),r=r.nextPart.get(a)}),r},yC=e=>e.isThemeGetter,bC=(e,t)=>t?e.map(([r,a])=>{const s=a.map(l=>typeof l=="string"?t+l:typeof l=="object"?Object.fromEntries(Object.entries(l).map(([u,d])=>[t+u,d])):l);return[r,s]}):e,wC=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,a=new Map;const s=(l,u)=>{r.set(l,u),t++,t>e&&(t=0,a=r,r=new Map)};return{get(l){let u=r.get(l);if(u!==void 0)return u;if((u=a.get(l))!==void 0)return s(l,u),u},set(l,u){r.has(l)?r.set(l,u):s(l,u)}}},a2="!",xC=e=>{const{separator:t,experimentalParseClassName:r}=e,a=t.length===1,s=t[0],l=t.length,u=d=>{const f=[];let h=0,v=0,g;for(let k=0;k<d.length;k++){let S=d[k];if(h===0){if(S===s&&(a||d.slice(k,k+l)===t)){f.push(d.slice(v,k)),v=k+l;continue}if(S==="/"){g=k;continue}}S==="["?h++:S==="]"&&h--}const b=f.length===0?d:d.substring(v),w=b.startsWith(a2),_=w?b.substring(1):b,T=g&&g>v?g-v:void 0;return{modifiers:f,hasImportantModifier:w,baseClassName:_,maybePostfixModifierPosition:T}};return r?d=>r({className:d,parseClassName:u}):u},_C=e=>{if(e.length<=1)return e;const t=[];let r=[];return e.forEach(a=>{a[0]==="["?(t.push(...r.sort(),a),r=[]):r.push(a)}),t.push(...r.sort()),t},SC=e=>({cache:wC(e.cacheSize),parseClassName:xC(e),...mC(e)}),TC=/\s+/,kC=(e,t)=>{const{parseClassName:r,getClassGroupId:a,getConflictingClassGroupIds:s}=t,l=[],u=e.trim().split(TC);let d="";for(let f=u.length-1;f>=0;f-=1){const h=u[f],{modifiers:v,hasImportantModifier:g,baseClassName:b,maybePostfixModifierPosition:w}=r(h);let _=!!w,T=a(_?b.substring(0,w):b);if(!T){if(!_){d=h+(d.length>0?" "+d:d);continue}if(T=a(b),!T){d=h+(d.length>0?" "+d:d);continue}_=!1}const k=_C(v).join(":"),S=g?k+a2:k,E=S+T;if(l.includes(E))continue;l.push(E);const M=s(T,_);for(let z=0;z<M.length;++z){const R=M[z];l.push(S+R)}d=h+(d.length>0?" "+d:d)}return d};function EC(){let e=0,t,r,a="";for(;e<arguments.length;)(t=arguments[e++])&&(r=o2(t))&&(a&&(a+=" "),a+=r);return a}var o2=e=>{if(typeof e=="string")return e;let t,r="";for(let a=0;a<e.length;a++)e[a]&&(t=o2(e[a]))&&(r&&(r+=" "),r+=t);return r};function CC(e,...t){let r,a,s,l=u;function u(f){const h=t.reduce((v,g)=>g(v),e());return r=SC(h),a=r.cache.get,s=r.cache.set,l=d,d(f)}function d(f){const h=a(f);if(h)return h;const v=kC(f,r);return s(f,v),v}return function(){return l(EC.apply(null,arguments))}}var at=e=>{const t=r=>r[e]||[];return t.isThemeGetter=!0,t},s2=/^\[(?:([a-z-]+):)?(.+)\]$/i,AC=/^\d+\/\d+$/,MC=new Set(["px","full","screen"]),OC=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,NC=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,zC=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,jC=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,DC=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Pr=e=>Co(e)||MC.has(e)||AC.test(e),Ai=e=>Xo(e,"length",FC),Co=e=>!!e&&!Number.isNaN(Number(e)),np=e=>Xo(e,"number",Co),Ys=e=>!!e&&Number.isInteger(Number(e)),RC=e=>e.endsWith("%")&&Co(e.slice(0,-1)),ke=e=>s2.test(e),Mi=e=>OC.test(e),UC=new Set(["length","size","percentage"]),$C=e=>Xo(e,UC,l2),LC=e=>Xo(e,"position",l2),HC=new Set(["image","url"]),IC=e=>Xo(e,HC,PC),qC=e=>Xo(e,"",BC),Xs=()=>!0,Xo=(e,t,r)=>{const a=s2.exec(e);return a?a[1]?typeof t=="string"?a[1]===t:t.has(a[1]):r(a[2]):!1},FC=e=>NC.test(e)&&!zC.test(e),l2=()=>!1,BC=e=>jC.test(e),PC=e=>DC.test(e),YC=()=>{const e=at("colors"),t=at("spacing"),r=at("blur"),a=at("brightness"),s=at("borderColor"),l=at("borderRadius"),u=at("borderSpacing"),d=at("borderWidth"),f=at("contrast"),h=at("grayscale"),v=at("hueRotate"),g=at("invert"),b=at("gap"),w=at("gradientColorStops"),_=at("gradientColorStopPositions"),T=at("inset"),k=at("margin"),S=at("opacity"),E=at("padding"),M=at("saturate"),z=at("scale"),R=at("sepia"),F=at("skew"),I=at("space"),J=at("translate"),ne=()=>["auto","contain","none"],ge=()=>["auto","hidden","clip","visible","scroll"],fe=()=>["auto",ke,t],ae=()=>[ke,t],je=()=>["",Pr,Ai],Ie=()=>["auto",Co,ke],Fe=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],A=()=>["solid","dashed","dotted","double","none"],D=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],L=()=>["start","end","center","between","around","evenly","stretch"],Q=()=>["","0",ke],ee=()=>["auto","avoid","all","avoid-page","page","left","right","column"],N=()=>[Co,ke];return{cacheSize:500,separator:":",theme:{colors:[Xs],spacing:[Pr,Ai],blur:["none","",Mi,ke],brightness:N(),borderColor:[e],borderRadius:["none","","full",Mi,ke],borderSpacing:ae(),borderWidth:je(),contrast:N(),grayscale:Q(),hueRotate:N(),invert:Q(),gap:ae(),gradientColorStops:[e],gradientColorStopPositions:[RC,Ai],inset:fe(),margin:fe(),opacity:N(),padding:ae(),saturate:N(),scale:N(),sepia:Q(),skew:N(),space:ae(),translate:ae()},classGroups:{aspect:[{aspect:["auto","square","video",ke]}],container:["container"],columns:[{columns:[Mi]}],"break-after":[{"break-after":ee()}],"break-before":[{"break-before":ee()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Fe(),ke]}],overflow:[{overflow:ge()}],"overflow-x":[{"overflow-x":ge()}],"overflow-y":[{"overflow-y":ge()}],overscroll:[{overscroll:ne()}],"overscroll-x":[{"overscroll-x":ne()}],"overscroll-y":[{"overscroll-y":ne()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[T]}],"inset-x":[{"inset-x":[T]}],"inset-y":[{"inset-y":[T]}],start:[{start:[T]}],end:[{end:[T]}],top:[{top:[T]}],right:[{right:[T]}],bottom:[{bottom:[T]}],left:[{left:[T]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Ys,ke]}],basis:[{basis:fe()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",ke]}],grow:[{grow:Q()}],shrink:[{shrink:Q()}],order:[{order:["first","last","none",Ys,ke]}],"grid-cols":[{"grid-cols":[Xs]}],"col-start-end":[{col:["auto",{span:["full",Ys,ke]},ke]}],"col-start":[{"col-start":Ie()}],"col-end":[{"col-end":Ie()}],"grid-rows":[{"grid-rows":[Xs]}],"row-start-end":[{row:["auto",{span:[Ys,ke]},ke]}],"row-start":[{"row-start":Ie()}],"row-end":[{"row-end":Ie()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",ke]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",ke]}],gap:[{gap:[b]}],"gap-x":[{"gap-x":[b]}],"gap-y":[{"gap-y":[b]}],"justify-content":[{justify:["normal",...L()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...L(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...L(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[E]}],px:[{px:[E]}],py:[{py:[E]}],ps:[{ps:[E]}],pe:[{pe:[E]}],pt:[{pt:[E]}],pr:[{pr:[E]}],pb:[{pb:[E]}],pl:[{pl:[E]}],m:[{m:[k]}],mx:[{mx:[k]}],my:[{my:[k]}],ms:[{ms:[k]}],me:[{me:[k]}],mt:[{mt:[k]}],mr:[{mr:[k]}],mb:[{mb:[k]}],ml:[{ml:[k]}],"space-x":[{"space-x":[I]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[I]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",ke,t]}],"min-w":[{"min-w":[ke,t,"min","max","fit"]}],"max-w":[{"max-w":[ke,t,"none","full","min","max","fit","prose",{screen:[Mi]},Mi]}],h:[{h:[ke,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[ke,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[ke,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[ke,t,"auto","min","max","fit"]}],"font-size":[{text:["base",Mi,Ai]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",np]}],"font-family":[{font:[Xs]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",ke]}],"line-clamp":[{"line-clamp":["none",Co,np]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Pr,ke]}],"list-image":[{"list-image":["none",ke]}],"list-style-type":[{list:["none","disc","decimal",ke]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[S]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[S]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...A(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Pr,Ai]}],"underline-offset":[{"underline-offset":["auto",Pr,ke]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:ae()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ke]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ke]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[S]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Fe(),LC]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",$C]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},IC]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[_]}],"gradient-via-pos":[{via:[_]}],"gradient-to-pos":[{to:[_]}],"gradient-from":[{from:[w]}],"gradient-via":[{via:[w]}],"gradient-to":[{to:[w]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[d]}],"border-w-x":[{"border-x":[d]}],"border-w-y":[{"border-y":[d]}],"border-w-s":[{"border-s":[d]}],"border-w-e":[{"border-e":[d]}],"border-w-t":[{"border-t":[d]}],"border-w-r":[{"border-r":[d]}],"border-w-b":[{"border-b":[d]}],"border-w-l":[{"border-l":[d]}],"border-opacity":[{"border-opacity":[S]}],"border-style":[{border:[...A(),"hidden"]}],"divide-x":[{"divide-x":[d]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[d]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[S]}],"divide-style":[{divide:A()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...A()]}],"outline-offset":[{"outline-offset":[Pr,ke]}],"outline-w":[{outline:[Pr,Ai]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:je()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[S]}],"ring-offset-w":[{"ring-offset":[Pr,Ai]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Mi,qC]}],"shadow-color":[{shadow:[Xs]}],opacity:[{opacity:[S]}],"mix-blend":[{"mix-blend":[...D(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":D()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[a]}],contrast:[{contrast:[f]}],"drop-shadow":[{"drop-shadow":["","none",Mi,ke]}],grayscale:[{grayscale:[h]}],"hue-rotate":[{"hue-rotate":[v]}],invert:[{invert:[g]}],saturate:[{saturate:[M]}],sepia:[{sepia:[R]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[a]}],"backdrop-contrast":[{"backdrop-contrast":[f]}],"backdrop-grayscale":[{"backdrop-grayscale":[h]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[v]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[S]}],"backdrop-saturate":[{"backdrop-saturate":[M]}],"backdrop-sepia":[{"backdrop-sepia":[R]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[u]}],"border-spacing-x":[{"border-spacing-x":[u]}],"border-spacing-y":[{"border-spacing-y":[u]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",ke]}],duration:[{duration:N()}],ease:[{ease:["linear","in","out","in-out",ke]}],delay:[{delay:N()}],animate:[{animate:["none","spin","ping","pulse","bounce",ke]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[z]}],"scale-x":[{"scale-x":[z]}],"scale-y":[{"scale-y":[z]}],rotate:[{rotate:[Ys,ke]}],"translate-x":[{"translate-x":[J]}],"translate-y":[{"translate-y":[J]}],"skew-x":[{"skew-x":[F]}],"skew-y":[{"skew-y":[F]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",ke]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ke]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":ae()}],"scroll-mx":[{"scroll-mx":ae()}],"scroll-my":[{"scroll-my":ae()}],"scroll-ms":[{"scroll-ms":ae()}],"scroll-me":[{"scroll-me":ae()}],"scroll-mt":[{"scroll-mt":ae()}],"scroll-mr":[{"scroll-mr":ae()}],"scroll-mb":[{"scroll-mb":ae()}],"scroll-ml":[{"scroll-ml":ae()}],"scroll-p":[{"scroll-p":ae()}],"scroll-px":[{"scroll-px":ae()}],"scroll-py":[{"scroll-py":ae()}],"scroll-ps":[{"scroll-ps":ae()}],"scroll-pe":[{"scroll-pe":ae()}],"scroll-pt":[{"scroll-pt":ae()}],"scroll-pr":[{"scroll-pr":ae()}],"scroll-pb":[{"scroll-pb":ae()}],"scroll-pl":[{"scroll-pl":ae()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ke]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Pr,Ai,np]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},XC=CC(YC),$=(...e)=>XC(pC(e));typeof navigator<"u"&&navigator.userAgent.includes("Firefox");var c2=(e,t)=>{let r=0;return a=>{const s=Date.now();if(s-r>=t)return r=s,e(a)}},Zr=e=>{if(!Sr)return null;try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}},an=(e,t)=>{if(Sr)try{window.localStorage.setItem(e,JSON.stringify(t))}catch{}},bw=e=>{if(Sr)try{window.localStorage.removeItem(e)}catch{}},GC=24,VC=12,wl=e=>{if(!e)return{name:"Unknown",wrappers:[],wrapperTypes:[]};const{tag:t,type:r,elementType:a}=e;let s=zt(r);const l=[],u=[];if(ml(e)||t===Ml||t===Al||(r==null?void 0:r.$$typeof)===Symbol.for("react.memo")||(a==null?void 0:a.$$typeof)===Symbol.for("react.memo")){const d=ml(e);u.push({type:"memo",title:d?"This component has been auto-memoized by the React Compiler.":"Memoized component that skips re-renders if props are the same",compiler:d})}if(t===GC&&u.push({type:"lazy",title:"Lazily loaded component that supports code splitting"}),t===cd&&u.push({type:"suspense",title:"Component that can suspend while content is loading"}),t===VC&&u.push({type:"profiler",title:"Component that measures rendering performance"}),typeof s=="string"){const d=/^(\w+)\((.*)\)$/;let f=s;for(;d.test(f);){const h=f.match(d);if(h!=null&&h[1]&&(h!=null&&h[2]))l.unshift(h[1]),f=h[2];else break}s=f}return{name:s||"Unknown",wrappers:l,wrapperTypes:u}},pd=Et(!1),rm=Et(null),vr={corner:"bottom-right",dimensions:{isFullWidth:!1,isFullHeight:!1,width:kt.width,height:kt.height,position:{x:xe,y:xe}},lastDimensions:{isFullWidth:!1,isFullHeight:!1,width:kt.width,height:kt.height,position:{x:xe,y:xe}},componentsTree:{width:Jn}},QC=()=>{const e=Zr(Qr);return e?{corner:e.corner??vr.corner,dimensions:e.dimensions??vr.dimensions,lastDimensions:e.lastDimensions??e.dimensions??vr.lastDimensions,componentsTree:e.componentsTree??vr.componentsTree}:(an(Qr,{corner:vr.corner,dimensions:vr.dimensions,lastDimensions:vr.lastDimensions,componentsTree:vr.componentsTree}),vr)},se=Et(QC()),rp=()=>{if(!Sr)return;const{dimensions:e}=se.value,{width:t,height:r,position:a}=e;se.value={...se.value,dimensions:{isFullWidth:t>=window.innerWidth-xe*2,isFullHeight:r>=window.innerHeight-xe*2,width:t,height:r,position:a}}},nt=Et({view:"none"}),KC=Zr(Tu),wn=Et(KC??null);function WC(){return!1}function sg(e){function t(r){return this.shouldComponentUpdate=WC,ya(e,r)}return t.displayName=`Memo(${e.displayName||e.name})`,t.prototype.isReactComponent=!0,t._forwarded=!0,t}var ZC=e=>{const{count:t,getScrollElement:r,estimateSize:a,overscan:s=5}=e,[l,u]=Ce(0),[d,f]=Ce(0),h=he(),v=he(null),g=he(null),b=a(),w=vt(S=>{var M;if(!v.current)return;const E=((M=S==null?void 0:S[0])==null?void 0:M.contentRect.height)??v.current.getBoundingClientRect().height;f(E)},[]),_=vt(()=>{g.current!==null&&cancelAnimationFrame(g.current),g.current=requestAnimationFrame(()=>{w(),g.current=null})},[w]);Ee(()=>{const S=r();if(!S)return;v.current=S;const E=()=>{v.current&&u(v.current.scrollTop)};w(),h.current||(h.current=new ResizeObserver(()=>{_()})),h.current.observe(S),S.addEventListener("scroll",E,{passive:!0});const M=new MutationObserver(_);return M.observe(S,{attributes:!0,childList:!0,subtree:!0}),()=>{S.removeEventListener("scroll",E),h.current&&h.current.disconnect(),M.disconnect(),g.current!==null&&cancelAnimationFrame(g.current)}},[r,w,_]);const T=or(()=>{const S=Math.floor(l/b),E=Math.ceil(d/b);return{start:Math.max(0,S-s),end:Math.min(t,S+E+s)}},[l,b,d,t,s]);return{virtualItems:or(()=>{const S=[];for(let E=T.start;E<T.end;E++)S.push({key:E,index:E,start:E*b});return S},[T,b]),totalSize:t*b,scrollTop:l,containerHeight:d}};Zr("react-scann-pinned");var JC=e=>{const t=[];let r=e;for(;r;){const a=r.elementType,s=typeof a=="function"?a.displayName||a.name:typeof a=="string"?a:"Unknown",l=r.index!==void 0?`[${r.index}]`:"";t.unshift(`${s}${l}`),r=r.return??null}return t.join("::")},aa=new WeakMap,e3=(e,t)=>{const r=t.bind(null,e);return document.addEventListener("scroll",r,{passive:!0,capture:!0}),()=>{document.removeEventListener("scroll",r,{capture:!0})}},t3={activeFlashes:new Map,create(e){const t=e.querySelector(".react-scan-flash-overlay"),r=t instanceof HTMLElement?t:(()=>{const s=document.createElement("div");s.className="react-scan-flash-overlay",e.appendChild(s);const l=e3(e,()=>{e.querySelector(".react-scan-flash-overlay")&&this.create(e)});return this.activeFlashes.set(e,{element:e,overlay:s,scrollCleanup:l}),s})(),a=aa.get(r);a&&(clearTimeout(a),aa.delete(r)),requestAnimationFrame(()=>{r.style.transition="none",r.style.opacity="0.9";const s=setTimeout(()=>{r.style.transition="opacity 150ms ease-out",r.style.opacity="0";const l=setTimeout(()=>{r.parentNode&&r.parentNode.removeChild(r);const u=this.activeFlashes.get(e);u!=null&&u.scrollCleanup&&u.scrollCleanup(),this.activeFlashes.delete(e),aa.delete(r)},150);aa.set(r,l)},300);aa.set(r,s)})},cleanup(e){const t=this.activeFlashes.get(e);if(t){const r=aa.get(t.overlay);r&&(clearTimeout(r),aa.delete(t.overlay)),t.overlay.parentNode&&t.overlay.parentNode.removeChild(t.overlay),t.scrollCleanup&&t.scrollCleanup(),this.activeFlashes.delete(e)}},cleanupAll(){for(const[,e]of this.activeFlashes)this.cleanup(e.element)}},ww=1e3,u2={updates:[],currentFiber:null,totalUpdates:0,windowOffset:0,currentIndex:0,isViewingHistory:!1,latestFiber:null,isVisible:!1,playbackSpeed:1},Xt=Et(u2),lg=Et(0),ha=[],oa=null,n3=()=>{if(ha.length===0)return;const e=[...ha],{updates:t,totalUpdates:r,currentIndex:a,isViewingHistory:s}=Xt.value,l=[...t];let u=r;for(const{update:v}of e)l.length>=ww&&l.shift(),l.push(v),u++;const d=Math.max(0,u-ww);let f;s?a===r-1?f=l.length-1:a===0?f=0:d===0?f=a:f=a-1:f=l.length-1;const h=e[e.length-1];Xt.value={...Xt.value,latestFiber:h.fiber,updates:l,totalUpdates:u,windowOffset:d,currentIndex:f,isViewingHistory:s},ha=ha.slice(e.length)},d2={showTimeline:()=>{Xt.value={...Xt.value,isVisible:!0}},hideTimeline:()=>{Xt.value={...Xt.value,isVisible:!1,currentIndex:Xt.value.updates.length-1}},updateFrame:(e,t)=>{Xt.value={...Xt.value,currentIndex:e,isViewingHistory:t}},updatePlaybackSpeed:e=>{Xt.value={...Xt.value,playbackSpeed:e}},addUpdate:(e,t)=>{if(ha.push({update:e,fiber:t}),!oa){const r=()=>{n3(),oa=null,ha.length>0&&(oa=setTimeout(r,96))};oa=setTimeout(r,96)}},reset:()=>{oa&&(clearTimeout(oa),oa=null),ha=[],Xt.value=u2}},Ft=Et({query:"",matches:[],currentMatchIndex:-1}),ip=Et(!1),f2=(e,t=0,r=null)=>e.reduce((a,s,l)=>{var h,v;const u=s.element?JC(s.fiber):`${r}-${l}`,d=(h=s.fiber)!=null&&h.type?T2(s.fiber):void 0,f={...s,depth:t,nodeId:u,parentId:r,fiber:s.fiber,renderData:d};return a.push(f),(v=s.children)!=null&&v.length&&a.push(...f2(s.children,t+1,u)),a},[]),r3=e=>e.reduce((t,r)=>Math.max(t,r.depth),0),i3=(e,t)=>{if(t<=0)return 24;const l=Math.max(0,e-Jn);if(l<24)return 0;const d=Math.min(l*.3,t*24)/t;return Math.max(0,Math.min(24,d))},a3=["memo","forwardRef","lazy","suspense"],h2=e=>{const t=e.match(/\[(.*?)\]/);if(!t)return null;const r=[],a=t[1].split(",");for(const s of a){const l=s.trim().toLowerCase();l&&r.push(l)}return r},o3=e=>{if(e.length===0)return!1;for(const t of e){let r=!1;for(const a of a3)if(a.toLowerCase().includes(t)){r=!0;break}if(!r)return!1}return!0},p2=(e,t)=>{if(e.length===0)return!0;if(!t.length)return!1;for(const r of e){let a=!1;for(const s of t)if(s.type.toLowerCase().includes(r)){a=!0;break}if(!a)return!1}return!0},s3=(e,t)=>or(()=>{const{query:r,matches:a}=t,s=a.some(h=>h.nodeId===e.nodeId),l=h2(r)||[],u=r?r.replace(/\[.*?\]/,"").trim():"";if(!r||!s)return{highlightedText:y("span",{className:"truncate",children:e.label}),typeHighlight:!1};let d=!0;if(l.length>0)if(!e.fiber)d=!1;else{const{wrapperTypes:h}=wl(e.fiber);d=p2(l,h)}let f=y("span",{className:"truncate",children:e.label});if(u)try{if(u.startsWith("/")&&u.endsWith("/")){const h=u.slice(1,-1),v=new RegExp(`(${h})`,"i"),g=e.label.split(v);f=y("span",{className:"tree-node-search-highlight",children:g.map((b,w)=>v.test(b)?y("span",{className:$("regex",{start:v.test(b)&&w===0,middle:v.test(b)&&w%2===1,end:v.test(b)&&w===g.length-1,"!ml-0":w===1}),children:b},`${e.nodeId}-${b}`):b)})}else{const h=e.label.toLowerCase(),v=u.toLowerCase(),g=h.indexOf(v);g>=0&&(f=y("span",{className:"tree-node-search-highlight",children:[e.label.slice(0,g),y("span",{className:"single",children:e.label.slice(g,g+u.length)}),e.label.slice(g+u.length)]}))}}catch{}return{highlightedText:f,typeHighlight:d&&l.length>0}},[e.label,e.nodeId,e.fiber,t]),xw=e=>e>0?e<.1-Number.EPSILON?"< 0.1":e<1e3?Number(e.toFixed(1)).toString():`${(e/1e3).toFixed(1)}k`:"0",l3=({node:e,nodeIndex:t,hasChildren:r,isCollapsed:a,handleTreeNodeClick:s,handleTreeNodeToggle:l,searchValue:u})=>{var w,_;const d=he(null),f=he(((w=e.renderData)==null?void 0:w.renderCount)??0),{highlightedText:h,typeHighlight:v}=s3(e,u);Ee(()=>{var S;const T=(S=e.renderData)==null?void 0:S.renderCount,k=d.current;!k||!f.current||!T||f.current===T||(k.classList.remove("count-flash"),k.offsetWidth,k.classList.add("count-flash"),f.current=T)},[(_=e.renderData)==null?void 0:_.renderCount]);const g=or(()=>{if(!e.renderData)return null;const{selfTime:T,totalTime:k,renderCount:S}=e.renderData;return S?y("span",{className:$("flex items-center gap-x-0.5 ml-1.5","text-[10px] text-neutral-400"),children:y("span",{ref:d,title:`Self time: ${xw(T)}ms
Total time: ${xw(k)}ms`,className:"count-badge",children:["×",S]})}):null},[e.renderData]),b=or(()=>{if(!e.fiber)return null;const{wrapperTypes:T}=wl(e.fiber),k=T[0];return y("span",{className:$("flex items-center gap-x-1","text-[10px] text-neutral-400 tracking-wide","overflow-hidden"),children:[k&&y(Re,{children:[y("span",{title:k==null?void 0:k.title,className:$("rounded py-[1px] px-1","bg-neutral-700 text-neutral-300","truncate",k.type==="memo"&&"bg-[#8e61e3] text-white",v&&"bg-yellow-300 text-black"),children:k.type},k.type),k.compiler&&y("span",{className:"text-yellow-300 ml-1",children:"✨"})]}),T.length>1&&`×${T.length}`,g]})},[e.fiber,v,g]);return y("button",{type:"button",title:e.title,"data-index":t,className:$("flex items-center gap-x-1","pl-1 pr-2","w-full h-7","text-left","rounded","cursor-pointer select-none"),onClick:s,children:[y("button",{type:"button","data-index":t,onClick:l,className:$("w-6 h-6 flex items-center justify-center","text-left"),children:r&&y(ft,{name:"icon-chevron-right",size:12,className:$("transition-transform",!a&&"rotate-90")})}),h,b]})},c3=()=>{const e=he(null),t=he(null),r=he(null),a=he(null),s=he(null),l=he(0),u=he(!1),d=he(!1),f=he(null),[h,v]=Ce([]),[g,b]=Ce(new Set),[w,_]=Ce(void 0),[T,k]=Ce(Ft.value),S=or(()=>{const A=[],D=h,L=new Map(D.map(Q=>[Q.nodeId,Q]));for(const Q of D){let ee=!0,N=Q;for(;N.parentId;){const Y=L.get(N.parentId);if(!Y)break;if(g.has(Y.nodeId)){ee=!1;break}N=Y}ee&&A.push(Q)}return A},[g,h]),E=28,{virtualItems:M,totalSize:z}=ZC({count:S.length,getScrollElement:()=>e.current,estimateSize:()=>E,overscan:5}),R=vt(A=>{var Q;u.current=!0,(Q=a.current)==null||Q.blur(),ip.value=!0;const{parentCompositeFiber:D}=pa(A);if(!D)return;ie.inspectState.value={kind:"focused",focusedDomElement:A,fiber:D};const L=S.findIndex(ee=>ee.element===A);if(L!==-1){_(L);const ee=L*E,N=e.current;if(N){const Y=N.clientHeight,Z=N.scrollTop;(ee<Z||ee+E>Z+Y)&&N.scrollTo({top:Math.max(0,ee-Y/2),behavior:"instant"})}}},[S]),F=vt(A=>{const D=A.currentTarget,L=Number(D.dataset.index);if(Number.isNaN(L))return;const Q=S[L].element;Q&&R(Q)},[S,R]),I=vt(A=>{b(D=>{const L=new Set(D);return L.has(A)?L.delete(A):L.add(A),L})},[]),J=vt(A=>{A.stopPropagation();const D=A.target,L=Number(D.dataset.index);if(Number.isNaN(L))return;const Q=S[L].nodeId;I(Q)},[S,I]),ne=vt(A=>{var Y,Z,te,re,le;(Y=r.current)==null||Y.classList.remove("!border-red-500");const D=[];if(!A){Ft.value={query:A,matches:D,currentMatchIndex:-1};return}if(A.includes("[")&&!A.includes("]")&&A.length>A.indexOf("[")+1){(Z=r.current)==null||Z.classList.add("!border-red-500");return}const L=h2(A)||[];if(A.includes("[")&&!o3(L)){(te=r.current)==null||te.classList.add("!border-red-500");return}const Q=A.replace(/\[.*?\]/,"").trim(),ee=/^\/.*\/$/.test(Q);let N=ce=>!1;if(Q.startsWith("/")&&!ee&&Q.length>1){(re=r.current)==null||re.classList.add("!border-red-500");return}if(ee)try{const ce=Q.slice(1,-1),be=new RegExp(ce,"i");N=ye=>be.test(ye)}catch{(le=r.current)==null||le.classList.add("!border-red-500");return}else if(Q){const ce=Q.toLowerCase();N=be=>be.toLowerCase().includes(ce)}for(const ce of h){let be=!0;if(Q&&(be=N(ce.label)),be&&L.length>0)if(!ce.fiber)be=!1;else{const{wrapperTypes:ye}=wl(ce.fiber);be=p2(L,ye)}be&&D.push(ce)}if(Ft.value={query:A,matches:D,currentMatchIndex:D.length>0?0:-1},D.length>0){const ce=D[0],be=S.findIndex(ye=>ye.nodeId===ce.nodeId);if(be!==-1){const ye=be*E,ct=e.current;if(ct){const Xn=ct.clientHeight;ct.scrollTo({top:Math.max(0,ye-Xn/2),behavior:"instant"})}}}},[h,S]),ge=vt(A=>{const D=A.currentTarget;D&&ne(D.value)},[ne]),fe=vt(A=>{const{matches:D,currentMatchIndex:L}=Ft.value;if(D.length===0)return;const Q=A==="next"?(L+1)%D.length:(L-1+D.length)%D.length;Ft.value={...Ft.value,currentMatchIndex:Q};const ee=D[Q],N=S.findIndex(Y=>Y.nodeId===ee.nodeId);if(N!==-1){_(N);const Y=N*E,Z=e.current;if(Z){const te=Z.clientHeight;Z.scrollTo({top:Math.max(0,Y-te/2),behavior:"instant"})}}},[S]),ae=vt(A=>{if(t.current&&(t.current.style.width=`${A}px`),e.current){e.current.style.width=`${A}px`;const D=i3(A,l.current);e.current.style.setProperty("--indentation-size",`${D}px`)}},[]),je=vt(A=>{if(!f.current)return;const D=se.value.dimensions.width,L=Math.floor(D-Jn/2);f.current.classList.remove("cursor-ew-resize","cursor-w-resize","cursor-e-resize"),A<=Jn?f.current.classList.add("cursor-w-resize"):A>=L?f.current.classList.add("cursor-e-resize"):f.current.classList.add("cursor-ew-resize")},[]),Ie=vt(A=>{if(A.preventDefault(),A.stopPropagation(),!e.current)return;e.current.style.setProperty("pointer-events","none"),d.current=!0;const D=A.clientX,L=e.current.offsetWidth,Q=se.value.dimensions.width,ee=Math.floor(Q-Jn/2);je(L);const N=Z=>{const te=D-Z.clientX,re=L+te;je(re);const le=Math.min(ee,Math.max(Jn,re));ae(le)},Y=()=>{e.current&&(e.current.style.removeProperty("pointer-events"),document.removeEventListener("pointermove",N),document.removeEventListener("pointerup",Y),se.value={...se.value,componentsTree:{...se.value.componentsTree,width:e.current.offsetWidth}},an(Qr,se.value),d.current=!1)};document.addEventListener("pointermove",N),document.addEventListener("pointerup",Y)},[ae,je]);Ee(()=>{if(!e.current)return;const A=e.current.offsetWidth;return je(A),se.subscribe(()=>{e.current&&je(e.current.offsetWidth)})},[je]);const Fe=vt(()=>{u.current=!1},[]);return Ee(()=>{let A=!0;const D=Y=>{const Z=new Map,te=[];for(const{element:re,name:le,fiber:ce}of Y){if(!re)continue;let be=le;const{name:ye,wrappers:ct}=wl(ce);ye&&(ct.length>0?be=`${ct.join("(")}(${ye})${")".repeat(ct.length)}`:be=ye),Z.set(re,{label:ye||le,title:be,children:[],element:re,fiber:ce})}for(const{element:re,depth:le}of Y){if(!re)continue;const ce=Z.get(re);if(ce)if(le===0)te.push(ce);else{let be=re.parentElement;for(;be;){const ye=Z.get(be);if(ye){ye.children=ye.children||[],ye.children.push(ce);break}be=be.parentElement}}}return te},L=()=>{const Y=s.current;if(!Y)return;const Z=M3(),te=D(Z);if(te.length>0){const re=f2(te),le=r3(re);if(l.current=le,ae(se.value.componentsTree.width),v(re),A){A=!1;const ce=re.findIndex(be=>be.element===Y);if(ce!==-1){const be=ce*E,ye=e.current;ye&&setTimeout(()=>{ye.scrollTo({top:be,behavior:"instant"})},96)}}}},Q=ie.inspectState.subscribe(Y=>{if(Y.kind==="focused"){if(ip.value)return;ne(""),s.current=Y.focusedDomElement,L()}});let ee=0;const N=lg.subscribe(()=>{if(ie.inspectState.value.kind==="focused"){if(cancelAnimationFrame(ee),d.current)return;ee=requestAnimationFrame(()=>{ip.value=!1,L()})}});return()=>{Q(),N(),Ft.value={query:"",matches:[],currentMatchIndex:-1}}},[]),Ee(()=>{const A=D=>{if(u.current&&w)switch(D.key){case"ArrowUp":{if(D.preventDefault(),D.stopPropagation(),w>0){const L=S[w-1];L!=null&&L.element&&R(L.element)}return}case"ArrowDown":{if(D.preventDefault(),D.stopPropagation(),w<S.length-1){const L=S[w+1];L!=null&&L.element&&R(L.element)}return}case"ArrowLeft":{D.preventDefault(),D.stopPropagation();const L=S[w];L!=null&&L.nodeId&&I(L.nodeId);return}case"ArrowRight":{D.preventDefault(),D.stopPropagation();const L=S[w];L!=null&&L.nodeId&&I(L.nodeId);return}}};return document.addEventListener("keydown",A),()=>{document.removeEventListener("keydown",A)}},[w,S,R,I]),Ee(()=>Ft.subscribe(k),[]),Ee(()=>se.subscribe(D=>{var L;(L=t.current)==null||L.style.setProperty("transition","width 0.1s"),ae(D.componentsTree.width),setTimeout(()=>{var Q;(Q=t.current)==null||Q.style.removeProperty("transition")},500)}),[]),y("div",{className:"react-scan-components-tree flex",children:[y("div",{ref:f,onPointerDown:Ie,className:"relative resize-v-line",children:y("span",{children:y(ft,{name:"icon-ellipsis",size:18})})}),y("div",{ref:t,className:"flex flex-col h-full",children:[y("div",{className:"p-2 border-b border-[#1e1e1e]",children:y("div",{ref:r,title:`Search components by:

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
`,className:$("relative","flex items-center gap-x-1 px-2","rounded","border border-transparent","focus-within:border-[#454545]","bg-[#1e1e1e] text-neutral-300","transition-colors","whitespace-nowrap","overflow-hidden"),children:[y(ft,{name:"icon-search",size:12,className:" text-neutral-500"}),y("div",{className:"relative flex-1 h-7 overflow-hidden",children:y("input",{ref:a,type:"text",value:Ft.value.query,onClick:A=>{A.stopPropagation(),A.currentTarget.focus()},onPointerDown:A=>{A.stopPropagation()},onKeyDown:A=>{A.key==="Escape"&&A.currentTarget.blur(),Ft.value.matches.length&&(A.key==="Enter"&&A.shiftKey?fe("prev"):A.key==="Enter"&&(A.metaKey||A.ctrlKey?(A.preventDefault(),A.stopPropagation(),R(Ft.value.matches[Ft.value.currentMatchIndex].element),A.currentTarget.focus()):fe("next")))},onChange:ge,className:"absolute inset-y-0 inset-x-1",placeholder:"Component name, /regex/, or [type]"})}),Ft.value.query?y(Re,{children:[y("span",{className:"flex items-center gap-x-0.5 text-xs text-neutral-500",children:[Ft.value.currentMatchIndex+1,"|",Ft.value.matches.length]}),!!Ft.value.matches.length&&y(Re,{children:[y("button",{type:"button",onClick:A=>{A.stopPropagation(),fe("prev")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:y(ft,{name:"icon-chevron-right",className:"-rotate-90",size:12})}),y("button",{type:"button",onClick:A=>{A.stopPropagation(),fe("next")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:y(ft,{name:"icon-chevron-right",className:"rotate-90",size:12})})]}),y("button",{type:"button",onClick:A=>{A.stopPropagation(),ne("")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:y(ft,{name:"icon-close",size:12})})]}):!!h.length&&y("span",{className:"text-xs text-neutral-500",children:h.length})]})}),y("div",{className:"flex-1 overflow-hidden",children:y("div",{ref:e,onPointerLeave:Fe,className:"tree h-full overflow-auto will-change-transform",children:y("div",{className:"relative w-full",style:{height:z},children:M.map(A=>{var ee;const D=S[A.index];if(!D)return null;const L=ie.inspectState.value.kind==="focused"&&D.element===ie.inspectState.value.focusedDomElement,Q=A.index===w;return y("div",{className:$("absolute left-0 w-full overflow-hidden","text-neutral-400 hover:text-neutral-300","bg-transparent hover:bg-[#5f3f9a]/20",(L||Q)&&"text-neutral-300 bg-[#5f3f9a]/40 hover:bg-[#5f3f9a]/40"),style:{top:A.start,height:E},children:y("div",{className:"w-full h-full",style:{paddingLeft:`calc(${D.depth} * var(--indentation-size))`},children:y(l3,{node:D,nodeIndex:A.index,hasChildren:!!((ee=D.children)!=null&&ee.length),isCollapsed:g.has(D.nodeId),handleTreeNodeClick:F,handleTreeNodeToggle:J,searchValue:T})})},D.nodeId)})})})})]})]})},Fu=hd(({text:e,children:t,onCopy:r,className:a,iconSize:s=14})=>{const[l,u]=Ce(!1);Ee(()=>{if(l){const h=setTimeout(()=>u(!1),600);return()=>{clearTimeout(h)}}},[l]);const d=vt(h=>{h.preventDefault(),h.stopPropagation(),navigator.clipboard.writeText(e).then(()=>{u(!0),r==null||r(!0,e)},()=>{r==null||r(!1,e)})},[e,r]),f=y("button",{onClick:d,type:"button",className:$("z-10","flex items-center justify-center","hover:text-dev-pink-400","transition-colors duration-200 ease-in-out","cursor-pointer",`size-[${s}px]`,a),children:y(ft,{name:`icon-${l?"check":"copy"}`,size:[s],className:$(l&&"text-green-500")})});return t?t({ClipboardIcon:f,onClick:d}):f}),u3=({length:e,expanded:t,onToggle:r,isNegative:a})=>y("div",{className:"flex items-center gap-1",children:[y("button",{type:"button",onClick:r,className:"flex items-center p-0 opacity-50",children:y(ft,{name:"icon-chevron-right",size:12,className:$("transition-[color,transform]",a?"text-[#f87171]":"text-[#4ade80]",t&&"rotate-90")})}),y("span",{children:["Array(",e,")"]})]}),im=({value:e,path:t,isNegative:r})=>{const[a,s]=Ce(!1);if(!(e!==null&&typeof e=="object"&&!(e instanceof Date)))return y("div",{className:"flex items-center gap-1",children:[y("span",{className:"text-gray-500",children:[t,":"]}),y("span",{className:"truncate",children:Xu(e)})]});const u=Object.entries(e);return y("div",{className:"flex flex-col",children:[y("div",{className:"flex items-center gap-1",children:[y("button",{type:"button",onClick:()=>s(!a),className:"flex items-center p-0 opacity-50",children:y(ft,{name:"icon-chevron-right",size:12,className:$("transition-[color,transform]",r?"text-[#f87171]":"text-[#4ade80]",a&&"rotate-90")})}),y("span",{className:"text-gray-500",children:[t,":"]}),!a&&y("span",{className:"truncate",children:e instanceof Date?Xu(e):`{${Object.keys(e).join(", ")}}`})]}),a&&y("div",{className:"pl-5 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:u.map(([d,f])=>y(im,{value:f,path:d,isNegative:r},d))})]})},Bu=({value:e,expanded:t,onToggle:r,isNegative:a})=>{const{value:s,error:l}=z3(e);return l?y("span",{className:"text-gray-500 font-italic",children:l}):s!==null&&typeof s=="object"&&!(s instanceof Promise)?Array.isArray(s)?y("div",{className:"flex flex-col gap-1 relative",children:[y(u3,{length:s.length,expanded:t,onToggle:r,isNegative:a}),t&&y("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:s.map((d,f)=>y(im,{value:d,path:f.toString(),isNegative:a},f.toString()))}),y(Fu,{text:Ew(s),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:d})=>y(Re,{children:d})})]}):y("div",{className:"flex items-start gap-1 relative",children:[y("button",{type:"button",onClick:r,className:$("flex items-center","p-0 mt-0.5 mr-1","opacity-50"),children:y(ft,{name:"icon-chevron-right",size:12,className:$("transition-[color,transform]",a?"text-[#f87171]":"text-[#4ade80]",t&&"rotate-90")})}),y("div",{className:"flex-1",children:t?y("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:Object.entries(s).map(([d,f])=>y(im,{value:f,path:d,isNegative:a},d))}):y("span",{children:Xu(s)})}),y(Fu,{text:Ew(s),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:d})=>y(Re,{children:d})})]}):y("span",{children:Xu(s)})},d3=50;Et({fiber:null,fiberProps:{current:[],changes:new Set},fiberState:{current:[],changes:new Set},fiberContext:{current:[],changes:new Set}});var am=e=>{switch(e.kind){case"initialized":return e.changes.currentValue;case"partially-initialized":return e.value}},_w=(e,t)=>{for(const r of e){const a=t.get(r.name);if(a){t.set(a.name,{count:a.count+1,currentValue:r.value,id:a.name,lastUpdated:Date.now(),name:a.name,previousValue:r.prevValue});continue}t.set(r.name,{count:1,currentValue:r.value,id:r.name,lastUpdated:Date.now(),name:r.name,previousValue:r.prevValue})}},f3=(e,t)=>{for(const r of e){const a=t.contextChanges.get(r.contextType);if(a){if(Ui(am(a),r.value))continue;if(a.kind==="partially-initialized"){t.contextChanges.set(r.contextType,{kind:"initialized",changes:{count:1,currentValue:r.value,id:r.contextType.toString(),lastUpdated:Date.now(),name:r.name,previousValue:a.value}});continue}t.contextChanges.set(r.contextType,{kind:"initialized",changes:{count:a.changes.count+1,currentValue:r.value,id:r.contextType.toString(),lastUpdated:Date.now(),name:r.name,previousValue:a.changes.currentValue}});continue}t.contextChanges.set(r.contextType,{kind:"partially-initialized",id:r.contextType.toString(),lastUpdated:Date.now(),name:r.name,value:r.value})}},h3=e=>{const t={contextChanges:new Map,propsChanges:new Map,stateChanges:new Map};return e.forEach(r=>{f3(r.contextChanges,t),_w(r.stateChanges,t.stateChanges),_w(r.propsChanges,t.propsChanges)}),t},Sw=(e,t)=>{const r=new Map;return e.forEach((a,s)=>{r.set(s,a)}),t.forEach((a,s)=>{const l=r.get(s);if(!l){r.set(s,a);return}r.set(s,{count:l.count+a.count,currentValue:a.currentValue,id:a.id,lastUpdated:a.lastUpdated,name:a.name,previousValue:a.previousValue})}),r},p3=(e,t)=>{const r=new Map;return e.contextChanges.forEach((a,s)=>{r.set(s,a)}),t.contextChanges.forEach((a,s)=>{const l=r.get(s);if(!l){r.set(s,a);return}if(am(a)!==am(l))switch(l.kind){case"initialized":switch(a.kind){case"initialized":{r.set(s,{kind:"initialized",changes:{...a.changes,count:a.changes.count+l.changes.count+1,currentValue:a.changes.currentValue,previousValue:a.changes.previousValue}});return}case"partially-initialized":{r.set(s,{kind:"initialized",changes:{count:l.changes.count+1,currentValue:a.value,id:a.id,lastUpdated:a.lastUpdated,name:a.name,previousValue:l.changes.currentValue}});return}}case"partially-initialized":switch(a.kind){case"initialized":{r.set(s,{kind:"initialized",changes:{count:a.changes.count+1,currentValue:a.changes.currentValue,id:a.changes.id,lastUpdated:a.changes.lastUpdated,name:a.changes.name,previousValue:l.value}});return}case"partially-initialized":{r.set(s,{kind:"initialized",changes:{count:1,currentValue:a.value,id:a.id,lastUpdated:a.lastUpdated,name:a.name,previousValue:l.value}});return}}}}),r},m3=(e,t)=>{const r=p3(e,t),a=Sw(e.propsChanges,t.propsChanges),s=Sw(e.stateChanges,t.stateChanges);return{contextChanges:r,propsChanges:a,stateChanges:s}},om=e=>Array.from(e.propsChanges.values()).reduce((t,r)=>t+r.count,0)+Array.from(e.stateChanges.values()).reduce((t,r)=>t+r.count,0)+Array.from(e.contextChanges.values()).filter(t=>t.kind==="initialized").reduce((t,r)=>t+r.changes.count,0),g3=e=>{const t=he({queue:[]}),[r,a]=Ce({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),s=ie.inspectState.value.kind==="focused"?ie.inspectState.value.fiber:null,l=s?Ri(s):null;return Ee(()=>{const u=setInterval(()=>{t.current.queue.length!==0&&(a(d=>{const f=h3(t.current.queue),h=m3(d,f);return om(d),om(h),h}),t.current.queue=[])},d3);return()=>{clearInterval(u)}},[s]),Ee(()=>{if(!l)return;const u=f=>{var h;(h=t.current)==null||h.queue.push(f)};let d=ie.changesListeners.get(l);return d||(d=[],ie.changesListeners.set(l,d)),d.push(u),()=>{var f;a({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),t.current.queue=[],ie.changesListeners.set(l,((f=ie.changesListeners.get(l))==null?void 0:f.filter(h=>h!==u))??[])}},[l]),Ee(()=>()=>{a({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),t.current.queue=[]},[l]),r},Pu=e=>{var t;if(e==null)return{value:e};if(typeof e=="function")return{value:e};if(typeof e!="object")return{value:e};if(Mo(e))return{value:"Promise"};try{const r=Object.getPrototypeOf(e);return r===Promise.prototype||((t=r==null?void 0:r.constructor)==null?void 0:t.name)==="Promise"?{value:"Promise"}:{value:e}}catch{return{value:null,error:"Error accessing value"}}},v3=hd(()=>{const[e,t]=Ce(!0),r=g3(),[a,s]=Ce(!1),l=om(r)>0;Ee(()=>{if(!a&&l){const f=setTimeout(()=>{s(!0),requestAnimationFrame(()=>{t(!0)})},0);return()=>clearTimeout(f)}},[a,l]);const u=new Map(Array.from(r.contextChanges.entries()).filter(([,f])=>f.kind==="initialized").map(([f,h])=>[f,h.kind==="partially-initialized"?null:h.changes])),d=ie.inspectState.value.kind==="focused"?ie.inspectState.value.fiber:null;if(d)return y(Re,{children:[y(b3,{}),y("div",{className:"overflow-hidden h-full flex flex-col gap-y-2",children:[y("div",{className:"flex flex-col gap-2 px-3 pt-2",children:[y("span",{className:"text-sm font-medium text-[#888]",children:["Why did"," ",y("span",{className:"text-[#A855F7]",children:zt(d)})," ","render?"]}),!l&&y("div",{className:"text-sm text-[#737373] bg-[#1E1E1E] rounded-md p-4 flex flex-col gap-4",children:[y("div",{children:"No changes detected since selecting"}),y("div",{children:"The props, state, and context changes within your component will be reported here"})]})]}),y("div",{className:$("flex flex-col gap-y-2 pl-3 relative overflow-y-auto h-full"),children:[y(ap,{changes:r.propsChanges,title:"Changed Props",isExpanded:e}),y(ap,{renderName:f=>y3(f,zt(ka(d))??"Unknown Component"),changes:r.stateChanges,title:"Changed State",isExpanded:e}),y(ap,{changes:u,title:"Changed Context",isExpanded:e})]})]})]})}),y3=(e,t)=>{if(Number.isNaN(Number(e)))return e;const r=Number.parseInt(e);return y("span",{className:"truncate",children:[y("span",{className:"text-white",children:[r,(s=>{const l=s%10,u=s%100;if(u>=11&&u<=13)return"th";switch(l){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}})(r)," hook"," "]}),y("span",{style:{color:"#666"},children:["called in ",y("i",{className:"text-[#A855F7] truncate",children:t})]})]})},b3=hd(()=>{const e=he(null),t=he(null),r=he(null),a=he({isPropsChanged:!1,isStateChanged:!1,isContextChanged:!1});return Ee(()=>{const s=c2(()=>{var d,f,h;const u=[];((d=e.current)==null?void 0:d.dataset.flash)==="true"&&u.push(e.current),((f=t.current)==null?void 0:f.dataset.flash)==="true"&&u.push(t.current),((h=r.current)==null?void 0:h.dataset.flash)==="true"&&u.push(r.current);for(const v of u)v.classList.remove("count-flash-white"),v.offsetWidth,v.classList.add("count-flash-white")},400);return Xt.subscribe(u=>{var v,g,b,w,_,T;if(!e.current||!t.current||!r.current)return;const{currentIndex:d,updates:f}=u,h=f[d];!h||d===0||(s(),a.current={isPropsChanged:(((g=(v=h.props)==null?void 0:v.changes)==null?void 0:g.size)??0)>0,isStateChanged:(((w=(b=h.state)==null?void 0:b.changes)==null?void 0:w.size)??0)>0,isContextChanged:(((T=(_=h.context)==null?void 0:_.changes)==null?void 0:T.size)??0)>0},e.current.dataset.flash!=="true"&&(e.current.dataset.flash=a.current.isPropsChanged.toString()),t.current.dataset.flash!=="true"&&(t.current.dataset.flash=a.current.isStateChanged.toString()),r.current.dataset.flash!=="true"&&(r.current.dataset.flash=a.current.isContextChanged.toString()))})},[]),y("button",{type:"button",className:$("react-section-header","overflow-hidden","max-h-0","transition-[max-height]"),children:y("div",{className:$("flex-1 react-scan-expandable"),children:y("div",{className:"overflow-hidden",children:y("div",{className:"flex items-center whitespace-nowrap",children:[y("div",{className:"flex items-center gap-x-2",children:"What changed?"}),y("div",{className:$("ml-auto","change-scope","transition-opacity duration-300 delay-150"),children:[y("div",{ref:e,children:"props"}),y("div",{ref:t,children:"state"}),y("div",{ref:r,children:"context"})]})]})})})})}),w3=e=>e,ap=hd(({title:e,changes:t,renderName:r=w3})=>{const[a,s]=Ce(new Set),[l,u]=Ce(new Set),d=Array.from(t.entries());return t.size===0?null:y("div",{children:[y("div",{className:"text-xs text-[#888] mb-1.5",children:e}),y("div",{className:"flex flex-col gap-2",children:d.map(([f,h])=>{const v=l.has(String(f)),{value:g,error:b}=Pu(h.previousValue),{value:w,error:_}=Pu(h.currentValue),T=y2(g,w);return y("div",{children:[y("button",{onClick:()=>{u(k=>{const S=new Set(k);return S.has(String(f))?S.delete(String(f)):S.add(String(f)),S})},className:"flex items-center gap-2 w-full bg-transparent border-none p-0 cursor-pointer text-white text-xs",children:y("div",{className:"flex items-center gap-1.5 flex-1",children:[y(ft,{name:"icon-chevron-right",size:12,className:$("text-[#666] transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",{"rotate-90":v})}),y("div",{className:"whitespace-pre-wrap break-words text-left font-medium flex items-center gap-x-1.5",children:[r(h.name),y(T3,{count:h.count,isFunction:typeof h.currentValue=="function",showWarning:T.changes.length===0,forceFlash:!0})]})]})}),y("div",{className:$("react-scan-expandable",{"react-scan-expanded":v}),children:y("div",{className:"pl-3 text-xs font-mono border-l-1 border-[#333]",children:y("div",{className:"flex flex-col gap-0.5",children:b||_?y(x3,{currError:_,prevError:b}):T.changes.length>0?y(_3,{change:h,diff:T,expandedFns:a,renderName:r,setExpandedFns:s,title:e}):y(S3,{currValue:w,entryKey:f,expandedFns:a,prevValue:g,setExpandedFns:s})})})})]},f)})})]})}),x3=({prevError:e,currError:t})=>y(Re,{children:[e&&y("div",{className:"text-[#f87171] bg-[#2a1515] pr-1.5 py-[3px] rounded italic",children:e}),t&&y("div",{className:"text-[#4ade80] bg-[#1a2a1a] pr-1.5 py-[3px] rounded italic mt-0.5",children:t})]}),_3=({diff:e,title:t,renderName:r,change:a,expandedFns:s,setExpandedFns:l})=>e.changes.map((u,d)=>{const{value:f,error:h}=Pu(u.prevValue),{value:v,error:g}=Pu(u.currentValue),b=typeof f=="function"||typeof v=="function";let w;return t==="Props"&&(w=u.path.length>0?`${r(String(a.name))}.${Kn(u.path)}`:void 0),t==="State"&&u.path.length>0&&(w=`state.${Kn(u.path)}`),w||(w=Kn(u.path)),y("div",{className:$("flex flex-col gap-y-1",d<e.changes.length-1&&"mb-4"),children:[w&&y("div",{className:"text-[#666] text-[10px]",children:w}),y("button",{type:"button",className:$("group","flex items-start","py-[3px] px-1.5","text-left text-[#f87171] bg-[#2a1515]","rounded","overflow-hidden break-all",b&&"cursor-pointer"),onClick:b?()=>{const _=`${Kn(u.path)}-prev`;l(T=>{const k=new Set(T);return k.has(_)?k.delete(_):k.add(_),k})}:void 0,children:[y("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),y("span",{className:"flex-1 whitespace-nowrap font-mono",children:h?y("span",{className:"italic text-[#f87171]",children:h}):b?y("div",{className:"flex gap-1 items-start flex-col",children:[y("div",{className:"flex gap-1 items-start w-full",children:[y("span",{className:"flex-1 max-h-40",children:lm(f,s.has(`${Kn(u.path)}-prev`))}),typeof f=="function"&&y(Fu,{text:f.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:_})=>y(Re,{children:_})})]}),(f==null?void 0:f.toString())===(v==null?void 0:v.toString())&&y("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):y(Bu,{value:f,expanded:s.has(`${Kn(u.path)}-prev`),onToggle:()=>{const _=`${Kn(u.path)}-prev`;l(T=>{const k=new Set(T);return k.has(_)?k.delete(_):k.add(_),k})},isNegative:!0})})]}),y("button",{type:"button",className:$("group","flex items-start","py-[3px] px-1.5","text-left text-[#4ade80] bg-[#1a2a1a]","rounded","overflow-hidden break-all",b&&"cursor-pointer"),onClick:b?()=>{const _=`${Kn(u.path)}-current`;l(T=>{const k=new Set(T);return k.has(_)?k.delete(_):k.add(_),k})}:void 0,children:[y("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),y("span",{className:"flex-1 whitespace-pre-wrap font-mono",children:g?y("span",{className:"italic text-[#4ade80]",children:g}):b?y("div",{className:"flex gap-1 items-start flex-col",children:[y("div",{className:"flex gap-1 items-start w-full",children:[y("span",{className:"flex-1",children:lm(v,s.has(`${Kn(u.path)}-current`))}),typeof v=="function"&&y(Fu,{text:v.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:_})=>y(Re,{children:_})})]}),(f==null?void 0:f.toString())===(v==null?void 0:v.toString())&&y("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):y(Bu,{value:v,expanded:s.has(`${Kn(u.path)}-current`),onToggle:()=>{const _=`${Kn(u.path)}-current`;l(T=>{const k=new Set(T);return k.has(_)?k.delete(_):k.add(_),k})},isNegative:!1})})]})]},`${w}-${a.name}-${d}`)}),S3=({prevValue:e,currValue:t,entryKey:r,expandedFns:a,setExpandedFns:s})=>y(Re,{children:[y("div",{className:"group flex gap-0.5 items-start text-[#f87171] bg-[#2a1515] py-[3px] px-1.5 rounded",children:[y("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),y("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:y(Bu,{value:e,expanded:a.has(`${String(r)}-prev`),onToggle:()=>{const l=`${String(r)}-prev`;s(u=>{const d=new Set(u);return d.has(l)?d.delete(l):d.add(l),d})},isNegative:!0})})]}),y("div",{className:"group flex gap-0.5 items-start text-[#4ade80] bg-[#1a2a1a] py-[3px] px-1.5 rounded mt-0.5",children:[y("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),y("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:y(Bu,{value:t,expanded:a.has(`${String(r)}-current`),onToggle:()=>{const l=`${String(r)}-current`;s(u=>{const d=new Set(u);return d.has(l)?d.delete(l):d.add(l),d})},isNegative:!1})})]}),typeof t=="object"&&t!==null&&y("div",{className:"text-[#666] text-[10px] italic mt-1 flex items-center gap-x-1",children:[y(ft,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),y("span",{children:"Reference changed but objects are structurally the same"})]})]}),T3=({count:e,forceFlash:t,isFunction:r,showWarning:a})=>{const s=he(!0),l=he(null),u=he(e);return Ee(()=>{const d=l.current;!d||u.current===e||(d.classList.remove("count-flash"),d.offsetWidth,d.classList.add("count-flash"),u.current=e)},[e]),Ee(()=>{if(s.current){s.current=!1;return}if(t){let d=setTimeout(()=>{var f;(f=l.current)==null||f.classList.add("count-flash-white"),d=setTimeout(()=>{var h;(h=l.current)==null||h.classList.remove("count-flash-white")},300)},500);return()=>{clearTimeout(d)}}},[t]),y("div",{ref:l,className:"count-badge",children:[a&&y(ft,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),r&&y(ft,{name:"icon-function",className:"text-[#A855F7] mb-px",size:14}),"x",e]})},Ni={lastRendered:new Map,expandedPaths:new Set,cleanup:()=>{Ni.lastRendered.clear(),Ni.expandedPaths.clear(),t3.cleanupAll(),U3(),d2.reset()}},m2=class extends Yn{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null}),Ni.cleanup()}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){var e;return this.state.hasError?y("div",{className:"p-4 bg-red-950/50 h-screen backdrop-blur-sm",children:[y("div",{className:"flex items-center gap-2 mb-3 text-red-400 font-medium",children:[y(ft,{name:"icon-flame",className:"text-red-500",size:16}),"Something went wrong in the inspector"]}),y("div",{className:"p-3 bg-black/40 rounded font-mono text-xs text-red-300 mb-4 break-words",children:((e=this.state.error)==null?void 0:e.message)||JSON.stringify(this.state.error)}),y("button",{type:"button",onClick:this.handleReset,className:"px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2",children:"Reset Inspector"})]}):this.props.children}},k3=Ca(()=>$("react-scan-inspector","flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",!pd.value&&"opacity-100 delay-300 pointer-events-auto")),E3=sg(()=>{const e=he(null),t=r=>{if(!r)return;e.current=r;const{data:a,shouldUpdate:s}=L3(r);if(s){const l={timestamp:Date.now(),fiberInfo:j3(r),props:a.fiberProps,state:a.fiberState,context:a.fiberContext,stateNames:R3(r)};d2.addUpdate(l,r)}};return bl(()=>{const r=ie.inspectState.value;yl(()=>{var l;if(r.kind!=="focused"||!r.focusedDomElement){e.current=null,Ni.cleanup();return}r.kind==="focused"&&(pd.value=!1);const{parentCompositeFiber:a}=kw(r.focusedDomElement,r.fiber);if(!a){ie.inspectState.value={kind:"inspect-off"},nt.value={view:"none"};return}((l=e.current)==null?void 0:l.type)!==a.type&&(e.current=a,Ni.cleanup(),t(a))})}),bl(()=>{lg.value,yl(()=>{const r=ie.inspectState.value;if(r.kind!=="focused"||!r.focusedDomElement){e.current=null,Ni.cleanup();return}const{parentCompositeFiber:a}=kw(r.focusedDomElement,r.fiber);if(!a){ie.inspectState.value={kind:"inspect-off"},nt.value={view:"none"};return}t(a),r.focusedDomElement.isConnected||(e.current=null,Ni.cleanup(),ie.inspectState.value={kind:"inspecting",hoveredDomElement:null})})}),Ee(()=>()=>{Ni.cleanup()},[]),y(m2,{children:y("div",{className:k3,children:y("div",{className:"w-full h-full",children:y(v3,{})})})})}),C3=sg(()=>ie.inspectState.value.kind!=="focused"?null:y(m2,{children:[y(E3,{}),y(c3,{})]})),g2=e=>{var t,r,a;if("__REACT_DEVTOOLS_GLOBAL_HOOK__"in window){const s=window.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!(s!=null&&s.renderers))return null;for(const[,l]of Array.from(s.renderers))try{const u=(t=l.findFiberByHostInstance)==null?void 0:t.call(l,e);if(u)return u}catch{}}if("_reactRootContainer"in e){const l=e._reactRootContainer;return((a=(r=l==null?void 0:l._internalRoot)==null?void 0:r.current)==null?void 0:a.child)??null}for(const s in e)if(s.startsWith("__reactInternalInstance$")||s.startsWith("__reactFiber"))return e[s];return null},cg=e=>{let t=e;for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.child)break;t=t.child}for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.return)break;t=t.return}return null},ug=e=>{if(!e)return null;try{const t=g2(e);if(!t)return null;const r=Ao(t);return r?r[0]:null}catch{return null}},Ao=e=>{let t=e,r=null;for(;t;){if(ud(t))return[t,r];pl(t)&&!r&&(r=t),t=t.return}return null},Tw=(e,t)=>!!Ex(t,a=>a===e),A3=async e=>{const t=ug(e);if(!t)return null;const r=cg(t);if(!r)return null;const a=(await fC([r])).get(r);return a||null},pa=e=>{const t=ug(e);if(!t)return{};if(!cg(t))return{};const a=Ao(t);if(!a)return{};const[s]=a;return{parentCompositeFiber:s}},kw=(e,t)=>{var d,f;if(!e.isConnected)return{};let r=t??ug(e);if(!r)return{};let a=r,s=null,l=null;for(;a;){if(!a.stateNode){a=a.return;continue}if((d=Ue.instrumentation)!=null&&d.fiberRoots.has(a.stateNode)){s=a,l=a.stateNode.current;break}a=a.return}if(!s||!l)return{};if(r=Tw(r,l)?r:r.alternate??r,!r)return{};if(!cg(r))return{};const u=(f=Ao(r))==null?void 0:f[0];return u?{parentCompositeFiber:Tw(u,l)?u:u.alternate??u}:{}},v2=e=>{var s;const t=e.memoizedProps??{},r=((s=e.alternate)==null?void 0:s.memoizedProps)??{},a=[];for(const l in t){if(l==="children")continue;const u=t[l],d=r[l];Ui(u,d)||a.push({name:l,value:u,prevValue:d,type:1})}return a},sm=new Set(["HTML","HEAD","META","TITLE","BASE","SCRIPT","SCRIPT","STYLE","LINK","NOSCRIPT","SOURCE","TRACK","EMBED","OBJECT","PARAM","TEMPLATE","PORTAL","SLOT","AREA","XML","DOCTYPE","COMMENT"]),Yu=(e,t=!0)=>{if(e.stateNode&&"nodeType"in e.stateNode){const a=e.stateNode;return t&&a.tagName&&sm.has(a.tagName.toLowerCase())?null:a}let r=e.child;for(;r;){const a=Yu(r,t);if(a)return a;r=r.sibling}return null},M3=(e=document.body)=>{const t=[],r=s=>{if(!s)return null;const{parentCompositeFiber:l}=pa(s);return l&&Yu(l)===s?s:null},a=(s,l=0)=>{const u=r(s);if(u){const{parentCompositeFiber:d}=pa(u);if(!d)return;t.push({element:u,depth:l,name:zt(d.type)??"Unknown",fiber:d})}for(const d of Array.from(s.children))a(d,u?l+1:l)};return a(e),t},Ew=e=>{try{if(e===null)return"null";if(e===void 0)return"undefined";if(Mo(e))return"Promise";if(typeof e=="function"){const t=e.toString();try{return t.replace(/\s+/g," ").replace(/{\s+/g,`{
  `).replace(/;\s+/g,`;
  `).replace(/}\s*$/g,`
}`).replace(/\(\s+/g,"(").replace(/\s+\)/g,")").replace(/,\s+/g,", ")}catch{return t}}switch(!0){case e instanceof Date:return e.toISOString();case e instanceof RegExp:return e.toString();case e instanceof Error:return`${e.name}: ${e.message}`;case e instanceof Map:return JSON.stringify(Array.from(e.entries()),null,2);case e instanceof Set:return JSON.stringify(Array.from(e),null,2);case e instanceof DataView:return JSON.stringify(Array.from(new Uint8Array(e.buffer)),null,2);case e instanceof ArrayBuffer:return JSON.stringify(Array.from(new Uint8Array(e)),null,2);case(ArrayBuffer.isView(e)&&"length"in e):return JSON.stringify(Array.from(e),null,2);case Array.isArray(e):return JSON.stringify(e,null,2);case typeof e=="object":return JSON.stringify(e,null,2);default:return String(e)}}catch{return String(e)}},O3=(e,t)=>{try{return typeof e!="function"||typeof t!="function"?!1:e.toString()===t.toString()}catch{return!1}},y2=(e,t,r=[],a=new WeakSet)=>{if(e===t)return{type:"primitive",changes:[],hasDeepChanges:!1};if(typeof e=="function"&&typeof t=="function"){const h=O3(e,t);return{type:"primitive",changes:[{path:r,prevValue:e,currentValue:t,sameFunction:h}],hasDeepChanges:!h}}if(e===null||t===null||e===void 0||t===void 0||typeof e!="object"||typeof t!="object")return{type:"primitive",changes:[{path:r,prevValue:e,currentValue:t}],hasDeepChanges:!0};if(a.has(e)||a.has(t))return{type:"object",changes:[{path:r,prevValue:"[Circular]",currentValue:"[Circular]"}],hasDeepChanges:!1};a.add(e),a.add(t);const s=e,l=t,u=new Set([...Object.keys(s),...Object.keys(l)]),d=[];let f=!1;for(const h of u){const v=s[h],g=l[h];if(v!==g)if(typeof v=="object"&&typeof g=="object"&&v!==null&&g!==null){const b=y2(v,g,[...r,h],a);d.push(...b.changes),b.hasDeepChanges&&(f=!0)}else d.push({path:[...r,h],prevValue:v,currentValue:g}),f=!0}return{type:"object",changes:d,hasDeepChanges:f}},Kn=e=>e.length===0?"":e.reduce((t,r,a)=>/^\d+$/.test(r)?`${t}[${r}]`:a===0?r:`${t}.${r}`,"");function N3(e){const t=e.replace(/\s+/g," ").trim(),r=[];let a="";for(let S=0;S<t.length;S++){const E=t[S];if(E==="="&&t[S+1]===">"){a.trim()&&r.push(a.trim()),r.push("=>"),a="",S++;continue}/[(){}[\];,<>:\?!]/.test(E)?(a.trim()&&r.push(a.trim()),r.push(E),a=""):/\s/.test(E)?(a.trim()&&r.push(a.trim()),a=""):a+=E}a.trim()&&r.push(a.trim());const s=[];for(let S=0;S<r.length;S++){const E=r[S],M=r[S+1];E==="("&&M===")"||E==="["&&M==="]"||E==="{"&&M==="}"||E==="<"&&M===">"?(s.push(E+M),S++):s.push(E)}const l=new Set,u=new Set;function d(S,E,M){let z=0;for(let R=M;R<s.length;R++){const F=s[R];if(F===S)z++;else if(F===E&&(z--,z===0))return R}return-1}for(let S=0;S<s.length;S++)if(s[S]==="("){const M=d("(",")",S);if(M!==-1&&s[M+1]==="=>")for(let z=S;z<=M;z++)l.add(z)}for(let S=1;S<s.length;S++){const E=s[S-1],M=s[S];if(/^[a-zA-Z0-9_$]+$/.test(E)&&M==="<"){const z=d("<",">",S);if(z!==-1)for(let R=S;R<=z;R++)u.add(R)}}let f=0;const h="  ",v=[];let g="";function b(){g.trim()&&v.push(g.replace(/\s+$/,"")),g=""}function w(){b(),g=h.repeat(f)}const _=[];function T(){return _.length?_[_.length-1]:null}function k(S,E=!1){g.trim()?E||/^[),;:\].}>]$/.test(S)?g+=S:g+=` ${S}`:g+=S}for(let S=0;S<s.length;S++){const E=s[S],M=s[S+1]||"";if(["(","{","[","<"].includes(E)){if(k(E),_.push(E),E==="{")f++,w();else if((E==="("||E==="["||E==="<")&&!(l.has(S)&&E==="("||u.has(S)&&E==="<")){const z={"(":")","[":"]","<":">"}[E];M!==z&&M!=="()"&&M!=="[]"&&M!=="<>"&&(f++,w())}}else if([")","}","]",">"].includes(E)){const z=T();E===")"&&z==="("||E==="]"&&z==="["||E===">"&&z==="<"?!(l.has(S)&&E===")")&&!(u.has(S)&&E===">")&&(f=Math.max(f-1,0),w()):E==="}"&&z==="{"&&(f=Math.max(f-1,0),w()),_.pop(),k(E),E==="}"&&w()}else if(/^\(\)|\[\]|\{\}|\<\>$/.test(E))k(E);else if(E==="=>")k(E);else if(E===";")k(E,!0),w();else if(E===","){k(E,!0);const z=T();!(l.has(S)&&z==="(")&&!(u.has(S)&&z==="<")&&z&&["{","[","(","<"].includes(z)&&w()}else k(E)}return b(),v.join(`
`).replace(/\n\s*\n+/g,`
`).trim()}var lm=(e,t=!1)=>{try{const r=e.toString(),a=r.match(/(?:function\s*)?(?:\(([^)]*)\)|([^=>\s]+))\s*=>?/);if(!a)return"ƒ";const l=(a[1]||a[2]||"").replace(/\s+/g,"");return t?N3(r):`ƒ (${l}) => ...`}catch{return"ƒ"}},Xu=e=>{if(e===null)return"null";if(e===void 0)return"undefined";if(typeof e=="string")return`"${e.length>150?`${e.slice(0,20)}...`:e}"`;if(typeof e=="number"||typeof e=="boolean")return String(e);if(typeof e=="function")return lm(e);if(Array.isArray(e))return`Array(${e.length})`;if(e instanceof Map)return`Map(${e.size})`;if(e instanceof Set)return`Set(${e.size})`;if(e instanceof Date)return e.toISOString();if(e instanceof RegExp)return e.toString();if(e instanceof Error)return`${e.name}: ${e.message}`;if(typeof e=="object"){const t=Object.keys(e);return`{${t.length>2?`${t.slice(0,2).join(", ")}, ...`:t.join(", ")}}`}return String(e)},z3=e=>{var t;if(e==null)return{value:e};if(typeof e=="function")return{value:e};if(typeof e!="object")return{value:e};if(e instanceof Promise)return{value:"Promise"};try{const r=Object.getPrototypeOf(e);return r===Promise.prototype||((t=r==null?void 0:r.constructor)==null?void 0:t.name)==="Promise"?{value:"Promise"}:{value:e}}catch{return{value:null,error:"Error accessing value"}}},Mo=e=>!!e&&(e instanceof Promise||typeof e=="object"&&"then"in e),j3=e=>{const t=fa(e);return{displayName:zt(e)||"Unknown",type:e.type,key:e.key,id:e.index,selfTime:(t==null?void 0:t.selfTime)??null,totalTime:(t==null?void 0:t.totalTime)??null}},dg=new Map,b2=new Map,fg=new Map,cm=null,D3=/\[(?<name>\w+),\s*set\w+\]/g,R3=e=>{var r,a;const t=((a=(r=e.type)==null?void 0:r.toString)==null?void 0:a.call(r))||"";return t?Array.from(t.matchAll(D3),s=>{var l;return((l=s.groups)==null?void 0:l.name)??""}):[]},U3=()=>{dg.clear(),b2.clear(),fg.clear(),cm=null},$3=e=>{const t=e.type!==cm;return cm=e.type,t},op=(e,t,r,a)=>{const s=e.get(t),l=e===dg||e===fg,u=!Ui(r,a);if(!s)return e.set(t,{count:u&&l?1:0,currentValue:r,previousValue:a,lastUpdated:Date.now()}),{hasChanged:u,count:u&&l?1:l?0:1};if(!Ui(s.currentValue,r)){const d=s.count+1;return e.set(t,{count:d,currentValue:r,previousValue:s.currentValue,lastUpdated:Date.now()}),{hasChanged:!0,count:d}}return{hasChanged:!1,count:s.count}},Cw=e=>{if(!e)return{};if(e.tag===sd||e.tag===ld||e.tag===Ml||e.tag===Al){let t=e.memoizedState;const r={};let a=0;for(;t;)t.queue&&t.memoizedState!==void 0&&(r[a]=t.memoizedState),t=t.next,a++;return r}return e.tag===Ta?e.memoizedState||{}:{}},hg=e=>{var d;const t=e.memoizedProps||{},r=((d=e.alternate)==null?void 0:d.memoizedProps)||{},a={},s={},l=Object.keys(t);for(const f of l)f in t&&(a[f]=t[f],s[f]=r[f]);const u=v2(e).map(f=>({name:f.name,value:f.value,prevValue:f.prevValue}));return{current:a,prev:s,changes:u}},pg=e=>{const t=Cw(e),r=e.alternate?Cw(e.alternate):{},a=[];for(const[s,l]of Object.entries(t)){const u=e.tag===Ta?s:Number(s);e.alternate&&!Ui(r[s],l)&&a.push({name:u,value:l,prevValue:r[s]})}return{current:t,prev:r,changes:a}},mg=e=>{const t=Mw(e),r=e.alternate?Mw(e.alternate):new Map,a={},s={},l=[],u=new Set;for(const[d,f]of t){const h=f.displayName,v=d;if(u.has(v))continue;u.add(v),a[h]=f.value;const g=r.get(d);g&&(s[h]=g.value,Ui(g.value,f.value)||l.push({name:h,value:f.value,prevValue:g.value,contextType:d}))}return{current:a,prev:s,changes:l}},L3=e=>{const t=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{data:{fiberProps:t(),fiberState:t(),fiberContext:t()},shouldUpdate:!1};let r=!1;const a=$3(e),s=t();if(e.memoizedProps){const{current:g,changes:b}=hg(e);for(const[w,_]of Object.entries(g))s.current.push({name:w,value:Mo(_)?{type:"promise",displayValue:"Promise"}:_});for(const w of b){const{hasChanged:_,count:T}=op(dg,w.name,w.value,w.prevValue);_&&(r=!0,s.changes.add(w.name),s.changesCounts.set(w.name,T))}}const l=t(),{current:u,changes:d}=pg(e);for(const[g,b]of Object.entries(u)){const w=e.tag===Ta?g:Number(g);l.current.push({name:w,value:b})}for(const g of d){const{hasChanged:b,count:w}=op(b2,g.name,g.value,g.prevValue);b&&(r=!0,l.changes.add(g.name),l.changesCounts.set(g.name,w))}const f=t(),{current:h,changes:v}=mg(e);for(const[g,b]of Object.entries(h))f.current.push({name:g,value:b});if(!a)for(const g of v){const{hasChanged:b,count:w}=op(fg,g.name,g.value,g.prevValue);b&&(r=!0,f.changes.add(g.name),f.changesCounts.set(g.name,w))}return!r&&!a&&(s.changes.clear(),l.changes.clear(),f.changes.clear()),{data:{fiberProps:s,fiberState:l,fiberContext:f},shouldUpdate:r||a}},Aw=new WeakMap,Mw=e=>{var s;if(!e)return new Map;const t=Aw.get(e);if(t)return t;const r=new Map;let a=e;for(;a;){const l=a.dependencies;if(l!=null&&l.firstContext){let u=l.firstContext;for(;u;){const d=u.memoizedValue,f=(s=u.context)==null?void 0:s.displayName;if(r.has(d)||r.set(u.context,{value:d,displayName:f??"UnnamedContext",contextType:null}),u===u.next)break;u=u.next}}a=a.return}return Aw.set(e,r),r},Ow=e=>{const t=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{fiberProps:t(),fiberState:t(),fiberContext:t()};const r=t();if(e.memoizedProps){const{current:d,changes:f}=hg(e);for(const[h,v]of Object.entries(d))r.current.push({name:h,value:Mo(v)?{type:"promise",displayValue:"Promise"}:v});for(const h of f)r.changes.add(h.name),r.changesCounts.set(h.name,1)}const a=t();if(e.memoizedState){const{current:d,changes:f}=pg(e);for(const[h,v]of Object.entries(d))a.current.push({name:h,value:Mo(v)?{type:"promise",displayValue:"Promise"}:v});for(const h of f)a.changes.add(h.name),a.changesCounts.set(h.name,1)}const s=t(),{current:l,changes:u}=mg(e);for(const[d,f]of Object.entries(l))s.current.push({name:d,value:Mo(f)?{type:"promise",displayValue:"Promise"}:f});for(const d of u)s.changes.add(d.name),s.changesCounts.set(d.name,1);return{fiberProps:r,fiberState:a,fiberContext:s}},um=0,Nw=performance.now(),sp=0,zw=!1,w2=()=>{sp++;const e=performance.now();e-Nw>=1e3&&(um=sp,sp=0,Nw=e),requestAnimationFrame(w2)},x2=()=>(zw||(zw=!0,w2(),um=60),um),H3=e=>{var r,a;if(!e)return[];const t=[];if(e.tag===sd||e.tag===ld||e.tag===Ml||e.tag===Al){let s=e.memoizedState,l=(r=e.alternate)==null?void 0:r.memoizedState,u=0;for(;s;){if(s.queue&&s.memoizedState!==void 0){const d={type:2,name:u.toString(),value:s.memoizedState,prevValue:l==null?void 0:l.memoizedState};Ui(d.prevValue,d.value)||t.push(d)}s=s.next,l=l==null?void 0:l.next,u++}return t}if(e.tag===Ta){const s={type:3,name:"state",value:e.memoizedState,prevValue:(a=e.alternate)==null?void 0:a.memoizedState};return Ui(s.prevValue,s.value)||t.push(s),t}return t},lp=0,jw=new WeakMap,I3=e=>{const t=jw.get(e);return t||(lp++,jw.set(e,lp),lp)};function q3(e,t){if(!e||!t)return;const r=e.memoizedValue,a={type:4,name:e.context.displayName??"Context.Provider",value:r,contextType:I3(e.context)};this.push(a)}var F3=e=>{const t=[];return xE(e,q3.bind(t)),t},_2=new Map,Dw=!1,cp=()=>Array.from(_2.values()),B3=16,dm=new WeakMap;function S2(e){return String(Ri(e))}function T2(e){const t=S2(e),r=dm.get(ka(e));if(r)return r.get(t)}function P3(e,t){const r=ka(e.type),a=S2(e);let s=dm.get(r);s||(s=new Map,dm.set(r,s)),s.set(a,t)}var Y3=(e,t,r,a,s)=>{const l=Date.now(),u=T2(e);if((a||s)&&(!u||l-(u.lastRenderTimestamp||0)>B3)){const d=u||{selfTime:0,totalTime:0,renderCount:0,lastRenderTimestamp:l};d.renderCount=(d.renderCount||0)+1,d.selfTime=t||0,d.totalTime=r||0,d.lastRenderTimestamp=l,P3(e,{...d})}},X3=(e,t)=>{const r={isPaused:Et(!Ue.options.value.enabled),fiberRoots:new WeakSet};return _2.set(e,{key:e,config:t,instrumentation:r}),Dw||(Dw=!0,ME({name:"react-scan",onActive:t.onActive,onCommitFiberRoot(a,s){r.fiberRoots.add(s);const l=cp();for(const u of l)u.config.onCommitStart();AE(s.current,(u,d)=>{const f=ka(u.type);if(!f)return null;const h=cp(),v=[];for(let E=0,M=h.length;E<M;E++)h[E].config.isValidFiber(u)&&v.push(E);if(!v.length)return null;const g=[];if(h.some(E=>E.config.trackChanges)){const E=hg(u).changes,M=pg(u).changes,z=mg(u).changes;g.push.apply(null,E.map(R=>({type:1,name:R.name,value:R.value})));for(const R of M)u.tag===Ta?g.push({type:3,name:R.name.toString(),value:R.value}):g.push({type:2,name:R.name.toString(),value:R.value});g.push.apply(null,z.map(R=>({type:4,name:R.name,value:R.value,contextType:Number(R.contextType)})))}const{selfTime:b,totalTime:w}=fa(u),_=x2(),T={phase:hC[d],componentName:zt(f),count:1,changes:g,time:b,forget:ml(u),unnecessary:null,didCommit:Gm(u),fps:_},k=g.length>0,S=_E(u).length>0;d==="update"&&Y3(u,b,w,k,S);for(let E=0,M=v.length;E<M;E++){const z=v[E];h[z].config.onRender(u,[T])}});for(const u of l)u.config.onCommitFinish()},onPostCommitFiberRoot(){const a=cp();for(const s of a)s.config.onPostCommitFiberRoot()}})),r},G3=e=>{const t=new Map;for(let r=0,a=e.length;r<a;r++){const s=e[r];if(!s.componentName)continue;const l=t.get(s.componentName)??[],u=dC([{aggregatedCount:1,computedKey:null,name:s.componentName,frame:null,...s,changes:{type:s.changes.reduce((h,v)=>h|v.type,0),unstable:s.changes.some(h=>h.unstable)},phase:s.phase,computedCurrent:null}]);if(!u)continue;let d=null,f=null;if(s.changes)for(let h=0,v=s.changes.length;h<v;h++){const{name:g,prevValue:b,nextValue:w,unstable:_,type:T}=s.changes[h];T===1?(d??(d={}),f??(f={}),d[`${_?"⚠️":""}${g} (prev)`]=b,f[`${_?"⚠️":""}${g} (next)`]=w):l.push({prev:b,next:w,type:T===4?"context":"state",unstable:_??!1})}d&&f&&l.push({prev:d,next:f,type:"props",unstable:!1}),t.set(u,l)}for(const[r,a]of Array.from(t.entries())){console.group(`%c${r}`,"background: hsla(0,0%,70%,.3); border-radius:3px; padding: 0 2px;");for(const{type:s,prev:l,next:u,unstable:d}of a)console.log(`${s}:`,d?"⚠️":"",l,"!==",u);console.groupEnd()}},V3=()=>{if(window.hideIntro){window.hideIntro=void 0;return}console.log("%c[·] %cReact Scan","font-weight:bold;color:#7a68e8;font-size:20px;","font-weight:bold;font-size:14px;"),console.log("Try React Scan Monitoring to target performance issues in production: https://react-scan.com/monitoring")},Rw=7,Q3="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace",K3=.1,iu=(e,t)=>Math.floor(e+(t-e)*K3),W3=4,Gu=40,up=45,dp="115,97,230";function Z3(e,t){return t[0]-e[0]}function J3(e){return[...e.entries()].sort(Z3)}function Uw([e,t]){let r=`${t.slice(0,W3).join(", ")} ×${e}`;return r.length>Gu&&(r=`${r.slice(0,Gu)}…`),r}var $w=e=>{const t=new Map;for(const{name:l,count:u}of e)t.set(l,(t.get(l)||0)+u);const r=new Map;for(const[l,u]of t){const d=r.get(u);d?d.push(l):r.set(u,[l])}const a=J3(r);let s=Uw(a[0]);for(let l=1,u=a.length;l<u;l++)s+=", "+Uw(a[l]);return s.length>Gu?`${s.slice(0,Gu)}…`:s},Lw=e=>{let t=0;for(const r of e)t+=r.width*r.height;return t},e4=(e,t)=>{for(const{id:r,name:a,count:s,x:l,y:u,width:d,height:f,didCommit:h}of t){const v={id:r,name:a,count:s,x:l,y:u,width:d,height:f,frame:0,targetX:l,targetY:u,targetWidth:d,targetHeight:f,didCommit:h},g=String(v.id),b=e.get(g);b?(b.count++,b.frame=0,b.targetX=l,b.targetY=u,b.targetWidth=d,b.targetHeight=f,b.didCommit=h):e.set(g,v)}},t4=(e,t,r)=>{for(const a of e.values()){const s=a.x-t,l=a.y-r;a.targetX=s,a.targetY=l}},n4=(e,t)=>{const r=e.getContext("2d",{alpha:!0});return r&&r.scale(t,t),r},r4=(e,t,r,a)=>{e.clearRect(0,0,t.width/r,t.height/r);const s=new Map,l=new Map;for(const f of a.values()){const{x:h,y:v,width:g,height:b,targetX:w,targetY:_,targetWidth:T,targetHeight:k,frame:S}=f;w!==h&&(f.x=iu(h,w)),_!==v&&(f.y=iu(v,_)),T!==g&&(f.width=iu(g,T)),k!==b&&(f.height=iu(b,k));const E=`${w??h},${_??v}`,M=`${E},${T??g},${k??b}`,z=s.get(E);z?z.push(f):s.set(E,[f]);const R=1-S/up;f.frame++;const F=l.get(M)||{x:h,y:v,width:g,height:b,alpha:R};R>F.alpha&&(F.alpha=R),l.set(M,F)}for(const{x:f,y:h,width:v,height:g,alpha:b}of l.values())e.strokeStyle=`rgba(${dp},${b})`,e.lineWidth=1,e.beginPath(),e.rect(f,h,v,g),e.stroke(),e.fillStyle=`rgba(${dp},${b*.1})`,e.fill();e.font=`11px ${Q3}`;const u=new Map;e.textRendering="optimizeSpeed";for(const f of s.values()){const h=f[0],{x:v,y:g,frame:b}=h,w=1-b/up,_=$w(f),{width:T}=e.measureText(_);if(u.set(`${v},${g},${T},${_}`,{text:_,width:T,height:11,alpha:w,x:v,y:g,outlines:f}),b>up)for(const S of f)a.delete(String(S.id))}const d=Array.from(u.entries()).sort(([f,h],[v,g])=>Lw(g.outlines)-Lw(h.outlines));for(const[f,h]of d)if(u.has(f))for(const[v,g]of u.entries()){if(f===v)continue;const{x:b,y:w,width:_,height:T}=h,{x:k,y:S,width:E,height:M}=g;b+_>k&&k+E>b&&w+T>S&&S+M>w&&(h.text=$w(h.outlines.concat(g.outlines)),h.width=e.measureText(h.text).width,u.delete(v))}for(const f of u.values()){const{x:h,y:v,alpha:g,width:b,height:w,text:_}=f;let T=v-w-4;T<0&&(T=0),e.fillStyle=`rgba(${dp},${g})`,e.fillRect(h,T,b+4,w+4),e.fillStyle=`rgba(255,255,255,${g})`,e.fillText(_,h+2,T+w)}return a.size>0},i4='"use strict";(()=>{var D="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";var M=(t,i)=>Math.floor(t+(i-t)*.1);var _="115,97,230";function F(t,i){return i[0]-t[0]}function I(t){return[...t.entries()].sort(F)}function $([t,i]){let o=`${i.slice(0,4).join(", ")} \\xD7${t}`;return o.length>40&&(o=`${o.slice(0,40)}\\u2026`),o}var S=t=>{let i=new Map;for(let{name:e,count:u}of t)i.set(e,(i.get(e)||0)+u);let o=new Map;for(let[e,u]of i){let A=o.get(u);A?A.push(e):o.set(u,[e])}let h=I(o),s=$(h[0]);for(let e=1,u=h.length;e<u;e++)s+=", "+$(h[e]);return s.length>40?`${s.slice(0,40)}\\u2026`:s},X=t=>{let i=0;for(let o of t)i+=o.width*o.height;return i};var N=(t,i)=>{let o=t.getContext("2d",{alpha:!0});return o&&o.scale(i,i),o},Y=(t,i,o,h)=>{t.clearRect(0,0,i.width/o,i.height/o);let s=new Map,e=new Map;for(let n of h.values()){let{x:r,y:c,width:a,height:g,targetX:l,targetY:d,targetWidth:f,targetHeight:p,frame:O}=n;l!==r&&(n.x=M(r,l)),d!==c&&(n.y=M(c,d)),f!==a&&(n.width=M(a,f)),p!==g&&(n.height=M(g,p));let w=`${l??r},${d??c}`,y=`${w},${f??a},${p??g}`,v=s.get(w);v?v.push(n):s.set(w,[n]);let E=1-O/45;n.frame++;let x=e.get(y)||{x:r,y:c,width:a,height:g,alpha:E};E>x.alpha&&(x.alpha=E),e.set(y,x)}for(let{x:n,y:r,width:c,height:a,alpha:g}of e.values())t.strokeStyle=`rgba(${_},${g})`,t.lineWidth=1,t.beginPath(),t.rect(n,r,c,a),t.stroke(),t.fillStyle=`rgba(${_},${g*.1})`,t.fill();t.font=`11px ${D}`;let u=new Map;t.textRendering="optimizeSpeed";for(let n of s.values()){let r=n[0],{x:c,y:a,frame:g}=r,l=1-g/45,d=S(n),{width:f}=t.measureText(d),p=11;u.set(`${c},${a},${f},${d}`,{text:d,width:f,height:p,alpha:l,x:c,y:a,outlines:n});let O=a-p-4;if(O<0&&(O=0),g>45)for(let w of n)h.delete(String(w.id))}let A=Array.from(u.entries()).sort(([n,r],[c,a])=>X(a.outlines)-X(r.outlines));for(let[n,r]of A)if(u.has(n))for(let[c,a]of u.entries()){if(n===c)continue;let{x:g,y:l,width:d,height:f}=r,{x:p,y:O,width:w,height:y}=a;g+d>p&&p+w>g&&l+f>O&&O+y>l&&(r.text=S(r.outlines.concat(a.outlines)),r.width=t.measureText(r.text).width,u.delete(c))}for(let n of u.values()){let{x:r,y:c,alpha:a,width:g,height:l,text:d}=n,f=c-l-4;f<0&&(f=0),t.fillStyle=`rgba(${_},${a})`,t.fillRect(r,f,g+4,l+4),t.fillStyle=`rgba(255,255,255,${a})`,t.fillText(d,r+2,f+l)}return h.size>0};var m=null,L=null,b=1,T=new Map,C=null,R=()=>{if(!L||!m)return;Y(L,m,b,T)?C=requestAnimationFrame(R):C=null};self.onmessage=t=>{let{type:i}=t.data;if(i==="init"&&(m=t.data.canvas,b=t.data.dpr,m&&(m.width=t.data.width,m.height=t.data.height,L=N(m,b))),!(!m||!L)){if(i==="resize"){b=t.data.dpr,m.width=t.data.width*b,m.height=t.data.height*b,L.resetTransform(),L.scale(b,b),R();return}if(i==="draw-outlines"){let{data:o,names:h}=t.data,s=new Float32Array(o);for(let e=0;e<s.length;e+=7){let u=s[e+2],A=s[e+3],n=s[e+4],r=s[e+5],c=s[e+6],a={id:s[e],name:h[e/7],count:s[e+1],x:u,y:A,width:n,height:r,frame:0,targetX:u,targetY:A,targetWidth:n,targetHeight:r,didCommit:c},g=String(a.id),l=T.get(g);l?(l.count++,l.frame=0,l.targetX=u,l.targetY=A,l.targetWidth=n,l.targetHeight=r,l.didCommit=c):T.set(g,a)}C||(C=requestAnimationFrame(R));return}if(i==="scroll"){let{deltaX:o,deltaY:h}=t.data;for(let s of T.values()){let e=s.x-o,u=s.y-h;s.targetX=e,s.targetY=u}}}};})();\n',qn=null,Vu=null,ma=null,In=1,Qu=null,gg=new Map,ll=new Map,_o=new Set,a4=e=>{if(!ud(e))return;const t=typeof e.type=="string"?e.type:zt(e);if(!t)return;const r=ll.get(e),a=SE(e),s=Gm(e);r?r.count++:(ll.set(e,{name:t,count:1,elements:a.map(l=>l.stateNode),didCommit:s?1:0}),_o.add(e))},o4=e=>{const t=e[0];if(e.length===1)return t;let r,a,s,l;for(let u=0,d=e.length;u<d;u++){const f=e[u];r=r==null?f.x:Math.min(r,f.x),a=a==null?f.y:Math.min(a,f.y),s=s==null?f.x+f.width:Math.max(s,f.x+f.width),l=l==null?f.y+f.height:Math.max(l,f.y+f.height)}return r==null||a==null||s==null||l==null?e[0]:new DOMRect(r,a,s-r,l-a)};function s4(e,t){const r=[];for(const a of e){const s=a.target;this.seenElements.has(s)||(this.seenElements.add(s),r.push(a))}r.length>0&&this.resolveNext&&(this.resolveNext(r),this.resolveNext=null),this.seenElements.size===this.uniqueElements.size&&(t.disconnect(),this.done=!0,this.resolveNext&&this.resolveNext([]))}var k2=async function*(e){const t={uniqueElements:new Set(e),seenElements:new Set,resolveNext:null,done:!1},r=new IntersectionObserver(s4.bind(t));for(const a of t.uniqueElements)r.observe(a);for(;!t.done;){const a=await new Promise(s=>{t.resolveNext=s});a.length>0&&(yield a)}},l4=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:ArrayBuffer,c4=async()=>{const e=[];for(const r of _o){const a=ll.get(r);if(a)for(let s=0;s<a.elements.length;s++)a.elements[s]instanceof Element&&e.push(a.elements[s])}const t=new Map;for await(const r of k2(e)){for(const u of r){const d=u.target,f=u.intersectionRect;u.isIntersecting&&f.width&&f.height&&t.set(d,f)}const a=[],s=[],l=[];for(const u of _o){const d=ll.get(u);if(!d)continue;const f=[];for(let h=0;h<d.elements.length;h++){const v=d.elements[h],g=t.get(v);g&&f.push(g)}f.length&&(a.push(d),s.push(o4(f)),l.push(Ri(u)))}if(a.length>0){const u=new l4(a.length*Rw*4),d=new Float32Array(u),f=new Array(a.length);let h;for(let v=0,g=a.length;v<g;v++){const b=a[v],w=l[v],{x:_,y:T,width:k,height:S}=s[v],{count:E,name:M,didCommit:z}=b;if(qn){const R=v*Rw;d[R]=w,d[R+1]=E,d[R+2]=_,d[R+3]=T,d[R+4]=k,d[R+5]=S,d[R+6]=z,f[v]=M}else h||(h=new Array(a.length)),h[v]={id:w,name:M,count:E,x:_,y:T,width:k,height:S,didCommit:z}}qn?qn.postMessage({type:"draw-outlines",data:u,names:f}):Vu&&ma&&h&&(e4(gg,h),Qu||(Qu=requestAnimationFrame(vg)))}}for(const r of _o)ll.delete(r),_o.delete(r)},vg=()=>{if(!ma||!Vu)return;r4(ma,Vu,In,gg)?Qu=requestAnimationFrame(vg):Qu=null},u4=typeof OffscreenCanvas<"u"&&typeof Worker<"u",Hw=()=>Math.min(window.devicePixelRatio||1,2),d4=()=>{f4();const e=document.createElement("div");e.setAttribute("data-react-scan","true");const t=e.attachShadow({mode:"open"}),r=document.createElement("canvas");if(r.style.position="fixed",r.style.top="0",r.style.left="0",r.style.pointerEvents="none",r.style.zIndex="2147483646",r.setAttribute("aria-hidden","true"),t.appendChild(r),!r)return null;In=Hw(),Vu=r;const{innerWidth:a,innerHeight:s}=window;r.style.width=`${a}px`,r.style.height=`${s}px`;const l=a*In,u=s*In;if(r.width=l,r.height=u,u4&&!window.__REACT_SCAN_EXTENSION__)try{qn=new Worker(URL.createObjectURL(new Blob([i4],{type:"application/javascript"})));const g=r.transferControlToOffscreen();qn==null||qn.postMessage({type:"init",canvas:g,width:r.width,height:r.height,dpr:In},[g])}catch(g){console.warn("Failed to initialize OffscreenCanvas worker:",g)}qn||(ma=n4(r,In));let d=!1;window.addEventListener("resize",()=>{d||(d=!0,setTimeout(()=>{const g=window.innerWidth,b=window.innerHeight;In=Hw(),r.style.width=`${g}px`,r.style.height=`${b}px`,qn?qn.postMessage({type:"resize",width:g,height:b,dpr:In}):(r.width=g*In,r.height=b*In,ma&&(ma.resetTransform(),ma.scale(In,In)),vg()),d=!1}))});let f=window.scrollX,h=window.scrollY,v=!1;return window.addEventListener("scroll",()=>{v||(v=!0,setTimeout(()=>{const{scrollX:g,scrollY:b}=window,w=g-f,_=b-h;f=g,h=b,qn?qn.postMessage({type:"scroll",deltaX:w,deltaY:_}):requestAnimationFrame(t4.bind(null,gg,w,_)),v=!1},32))}),setInterval(()=>{_o.size&&requestAnimationFrame(c4)},32),t.appendChild(r),e},Iw=()=>globalThis.__REACT_SCAN_STOP__,f4=()=>{const e=document.querySelector("[data-react-scan]");e&&e.remove()},h4=e=>{if(ud(e)&&Ue.options.value.showToolbar!==!1&&ie.inspectState.value.kind==="focused"){const t=e,{selfTime:r}=fa(e),a=zt(e.type),s=Ri(t),l=ie.reportData.get(s),u=(l==null?void 0:l.count)??0,d=(l==null?void 0:l.time)??0,f=[],h=ie.changesListeners.get(Ri(e));if(h!=null&&h.length){const g=v2(e).map(T=>({type:1,name:T.name,value:T.value,prevValue:T.prevValue,unstable:!1})),b=H3(e),_=F3(e).map(T=>({name:T.name,type:4,value:T.value,contextType:T.contextType}));h.forEach(T=>{T({propsChanges:g,stateChanges:b,contextChanges:_})})}const v={count:u+1,time:d+r||0,renders:[],displayName:a,type:ka(e.type)||null,changes:f};ie.reportData.set(s,v),fm=!0}},fm=!1,qw,p4=()=>{clearInterval(qw),qw=setInterval(()=>{fm&&(ie.lastReportTime.value=Date.now(),fm=!1)},50)},m4=e=>!s5.has(e.memoizedProps),g4=e=>{if(Iw())return;let t,r=!1;const a=()=>{r||(t&&cancelAnimationFrame(t),t=requestAnimationFrame(()=>{r=!0;const l=d4();l&&document.documentElement.appendChild(l),e()}))},s=X3("react-scan-devtools-0.1.0",{onCommitStart:()=>{var l,u;(u=(l=Ue.options.value).onCommitStart)==null||u.call(l)},onActive:()=>{Iw()||(a(),window.__REACT_SCAN_EXTENSION__||(globalThis.__REACT_SCAN__={ReactScanInternals:Ue}),p4(),V3())},onError:()=>{},isValidFiber:m4,onRender:(l,u)=>{var v,g,b,w;ud(l)&&((v=ie.interactionListeningForRenders)==null||v.call(ie,l,u));const d=(g=Ue.instrumentation)==null?void 0:g.isPaused.value,f=ie.inspectState.value.kind==="inspect-off"||ie.inspectState.value.kind==="uninitialized";d&&f||(d||a4(l),Ue.options.value.log&&G3(u),ie.inspectState.value.kind==="focused"&&(lg.value=Date.now()),f||h4(l),(w=(b=Ue.options.value).onRender)==null||w.call(b,l,u))},onCommitFinish:()=>{var l,u;a(),(u=(l=Ue.options.value).onCommitFinish)==null||u.call(l)},onPostCommitFiberRoot(){a()},trackChanges:!1});Ue.instrumentation=s},v4=`*, ::before, ::after {
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
`,y4=(e,t,r=t)=>{const[a,s]=Ce(e);return Ee(()=>{if(e===a)return;const u=setTimeout(()=>s(e),e?t:r);return()=>clearTimeout(u)},[e,t,r]),a},b4=Ca(()=>$("absolute inset-0 flex items-center gap-x-2","translate-y-0","transition-transform duration-300",pd.value&&"-translate-y-[200%]")),w4=()=>{const e=he(null),t=he(null),[r,a]=Ce(null);bl(()=>{const l=ie.inspectState.value;l.kind==="focused"&&a(l.fiber)}),bl(()=>{const l=Xt.value;yl(()=>{var _,T;if(ie.inspectState.value.kind!=="focused"||!e.current||!t.current)return;const{totalUpdates:u,currentIndex:d,updates:f,isVisible:h,windowOffset:v}=l,g=Math.max(0,u-1),b=h?`#${v+d} Re-render`:g>0?`×${g}`:"";let w;if(g>0&&d>=0&&d<f.length){const k=(T=(_=f[d])==null?void 0:_.fiberInfo)==null?void 0:T.selfTime;w=k>0?k<.1-Number.EPSILON?"< 0.1ms":`${Number(k.toFixed(1))}ms`:void 0}e.current.dataset.text=b?` • ${b}`:"",t.current.dataset.text=w?` • ${w}`:""})});const s=or(()=>{if(!r)return null;const{name:l,wrappers:u,wrapperTypes:d}=wl(r),f=u.length?`${u.join("(")}(${l})${")".repeat(u.length)}`:l??"",h=d[0];return y("span",{title:f,className:"flex items-center gap-x-1",children:[l??"Unknown",y("span",{title:h==null?void 0:h.title,className:"flex items-center gap-x-1 text-[10px] text-purple-400",children:!!h&&y(Re,{children:[y("span",{className:$("rounded py-[1px] px-1","truncate",h.compiler&&"bg-purple-800 text-neutral-400",!h.compiler&&"bg-neutral-700 text-neutral-300",h.type==="memo"&&"bg-[#5f3f9a] text-white"),children:h.type},h.type),h.compiler&&y("span",{className:"text-yellow-300",children:"✨"})]})}),d.length>1&&y("span",{className:"text-[10px] text-neutral-400",children:["×",d.length-1]})]})},[r]);return y("div",{className:b4,children:[s,y("div",{className:"flex items-center gap-x-2 mr-auto text-xs text-[#888]",children:[y("span",{ref:e,className:"with-data-text cursor-pointer !overflow-visible",title:"Click to toggle between rerenders and total renders"}),y("span",{ref:t,className:"with-data-text !overflow-visible"})]})]})},x4=()=>{const e=y4(ie.inspectState.value.kind==="focused",150,0),t=()=>{nt.value={view:"none"},ie.inspectState.value={kind:"inspect-off"}};if(nt.value.view!=="notifications")return y("div",{className:"react-scan-header",children:[y("div",{className:"relative flex-1 h-full",children:y("div",{className:$("react-scan-header-item is-visible",!e&&"!duration-0"),children:y(w4,{})})}),y("button",{type:"button",title:"Close",className:"react-scan-close-button",onClick:t,children:y(ft,{name:"icon-close"})})]})},_4=({className:e,...t})=>y("div",{className:$("react-scan-toggle",e),children:[y("input",{type:"checkbox",...t}),y("div",{})]}),S4=({fps:e})=>{const t=r=>r<30?"#EF4444":r<50?"#F59E0B":"rgb(214,132,245)";return y("div",{className:$("flex items-center gap-x-1 px-2 w-full","h-6","rounded-md","font-mono leading-none","bg-[#141414]","ring-1 ring-white/[0.08]"),children:[y("div",{style:{color:t(e)},className:"text-sm font-semibold tracking-wide transition-colors ease-in-out w-full flex justify-center items-center",children:e}),y("span",{className:"text-white/30 text-[11px] font-medium tracking-wide ml-auto min-w-fit",children:"FPS"})]})},T4=()=>{const[e,t]=Ce(null);return Ee(()=>{const r=setInterval(()=>{t(x2())},200);return()=>clearInterval(r)},[]),y("div",{className:$("flex items-center justify-end gap-x-2 px-1 ml-1 w-[72px]","whitespace-nowrap text-sm text-white"),children:e===null?y(Re,{children:"️"}):y(S4,{fps:e})})},Wn=()=>Sr?(window.reactScanIdCounter===void 0&&(window.reactScanIdCounter=0),`${++window.reactScanIdCounter}`):"0",tr=e=>e(),Mt=class E2 extends Array{constructor(t=25){super(),this.capacity=t}push(...t){const r=super.push(...t);for(;this.length>this.capacity;)this.shift();return r}static fromArray(t,r){const a=new E2(r);return a.push(...t),a}},k4=class{constructor(e){this.subscribers=new Set,this.currentValue=e}subscribe(e){return this.subscribers.add(e),e(this.currentValue),()=>{this.subscribers.delete(e)}}setState(e){this.currentValue=e,this.subscribers.forEach(t=>t(e))}getCurrentState(){return this.currentValue}},C2=150,Fw=new k4(new Mt(C2)),yr=50,E4=class{constructor(){this.channels={}}publish(e,t,r=!0){const a=this.channels[t];if(!a){if(!r)return;this.channels[t]={callbacks:new Mt(yr),state:new Mt(yr)},this.channels[t].state.push(e);return}a.state.push(e),a.callbacks.forEach(s=>s(e))}getAvailableChannels(){return Mt.fromArray(Object.keys(this.channels),yr)}subscribe(e,t,r=!1){const a=()=>(r||this.channels[e].state.forEach(l=>{t(l)}),()=>{const l=this.channels[e].callbacks.filter(u=>u!==t);this.channels[e].callbacks=Mt.fromArray(l,yr)}),s=this.channels[e];return s?(s.callbacks.push(t),a()):(this.channels[e]={callbacks:new Mt(yr),state:new Mt(yr)},this.channels[e].callbacks.push(t),a())}updateChannelState(e,t,r=!0){const a=this.channels[e];if(!a){if(!r)return;const s=new Mt(yr),l={callbacks:new Mt(yr),state:s};this.channels[e]=l,l.state=t(s);return}a.state=t(a.state)}getChannelState(e){return this.channels[e].state??new Mt(yr)}},Ku=new E4,A2={skipProviders:!0,skipHocs:!0,skipContainers:!0,skipMinified:!0,skipUtilities:!0,skipBoundaries:!0},Gs={providers:[/Provider$/,/^Provider$/,/^Context$/],hocs:[/^with[A-Z]/,/^forward(?:Ref)?$/i,/^Forward(?:Ref)?\(/],containers:[/^(?:App)?Container$/,/^Root$/,/^ReactDev/],utilities:[/^Fragment$/,/^Suspense$/,/^ErrorBoundary$/,/^Portal$/,/^Consumer$/,/^Layout$/,/^Router/,/^Hydration/],boundaries:[/^Boundary$/,/Boundary$/,/^Provider$/,/Provider$/]},C4=(e,t=A2)=>{const r=[];return t.skipProviders&&r.push(...Gs.providers),t.skipHocs&&r.push(...Gs.hocs),t.skipContainers&&r.push(...Gs.containers),t.skipUtilities&&r.push(...Gs.utilities),t.skipBoundaries&&r.push(...Gs.boundaries),!r.some(a=>a.test(e))},Bw=[/^[a-z]$/,/^[a-z][0-9]$/,/^_+$/,/^[A-Za-z][_$]$/,/^[a-z]{1,2}$/],A4=e=>{var l;for(let u=0;u<Bw.length;u++)if(Bw[u].test(e))return!0;const t=!/[aeiou]/i.test(e),r=(((l=e.match(/\d/g))==null?void 0:l.length)??0)>e.length/2,a=/^[a-z]+$/.test(e),s=/[$_]{2,}/.test(e);return Number(t)+Number(r)+Number(a)+Number(s)>=2},M4=(e,t=A2)=>{if(!e)return[];if(!zt(e.type))return[];const a=new Array;let s=e;for(;s.return;){const u=O4(s.type);u&&!A4(u)&&C4(u,t)&&u.toLowerCase()!==u&&a.push(u),s=s.return}const l=new Array(a.length);for(let u=0;u<a.length;u++)l[u]=a[a.length-u-1];return l},O4=e=>{const t=zt(e);return t?t.replace(/^(?:Memo|Forward(?:Ref)?|With.*?)\((?<inner>.*?)\)$/,"$<inner>"):""},N4=(e,t=()=>!0)=>{let r=e;for(;r;){const a=zt(r.type);if(a&&t(a))return a;r=r.return}return null},au,hm="never-hidden",z4=()=>{au==null||au();const e=()=>{document.hidden&&(hm=Date.now())};document.addEventListener("visibilitychange",e),au=()=>{document.removeEventListener("visibilitychange",e)}},j4=e=>["pointerup","click"].includes(e)?"pointer":(e.includes("key"),["keydown","keyup"].includes(e)?"keyboard":null),fp=null,D4=e=>{z4();const t=new Map,r=new Map,a=l=>{if(!l.interactionId)return;if(l.interactionId&&l.target&&!r.has(l.interactionId)&&r.set(l.interactionId,l.target),l.target){let d=l.target;for(;d;){if(d.id==="react-scan-toolbar-root"||d.id==="react-scan-root")return;d=d.parentElement}}const u=t.get(l.interactionId);if(u)l.duration>u.latency?(u.entries=[l],u.latency=l.duration):l.duration===u.latency&&l.startTime===u.entries[0].startTime&&u.entries.push(l);else{const d=j4(l.name);if(!d)return;const f={id:l.interactionId,latency:l.duration,entries:[l],target:l.target,type:d,startTime:l.startTime,endTime:Date.now(),processingStart:l.processingStart,processingEnd:l.processingEnd,duration:l.duration,inputDelay:l.processingStart-l.startTime,processingDuration:l.processingEnd-l.processingStart,presentationDelay:l.duration-(l.processingEnd-l.startTime),timestamp:Date.now(),timeSinceTabInactive:hm==="never-hidden"?"never-hidden":Date.now()-hm,visibilityState:document.visibilityState,timeOrigin:performance.timeOrigin,referrer:document.referrer};t.set(f.id,f),fp||(fp=requestAnimationFrame(()=>{requestAnimationFrame(()=>{e(t.get(f.id)),fp=null})}))}},s=new PerformanceObserver(l=>{const u=l.getEntries();for(let d=0,f=u.length;d<f;d++){const h=u[d];a(h)}});try{s.observe({type:"event",buffered:!0,durationThreshold:16}),s.observe({type:"first-input",buffered:!0})}catch{}return()=>s.disconnect()},R4=()=>D4(e=>{Ku.publish({kind:"entry-received",entry:e},"recording")}),ku=25,Xr=new Mt(ku),U4=(e,t)=>{let r=null;for(const a of t){if(a.type!==e.type)continue;if(r===null){r=a;continue}const s=(l,u)=>Math.abs(l.startDateTime)-(u.startTime+u.timeOrigin);s(a,e)<s(r,e)&&(r=a)}return r},$4=e=>Ku.subscribe("recording",r=>{const a=r.kind==="auto-complete-race"?Xr.find(l=>l.interactionUUID===r.interactionUUID):U4(r.entry,Xr);if(!a)return;const s=a.completeInteraction(r);e(s)}),L4=({onMicroTask:e,onRAF:t,onTimeout:r,abort:a})=>{queueMicrotask(()=>{(a==null?void 0:a())!==!0&&e()&&requestAnimationFrame(()=>{(a==null?void 0:a())!==!0&&t()&&setTimeout(()=>{(a==null?void 0:a())!==!0&&r()},0)})})},H4=e=>{const t=g2(e);if(!t)return;let r=t?zt(t==null?void 0:t.type):"N/A";return r||(r=N4(t,s=>s.length>2)??"N/A"),r?{componentPath:M4(t),childrenTree:{},componentName:r,elementFiber:t}:void 0},Pw=(e,t)=>{let r=null;const a=f=>{switch(e){case"pointer":return f.phase==="start"?"pointerup":f.target instanceof HTMLInputElement||f.target instanceof HTMLSelectElement?"change":"click";case"keyboard":return f.phase==="start"?"keydown":"change"}},s={current:{kind:"uninitialized-stage",interactionUUID:Wn(),stageStart:Date.now(),interactionType:e}},l=f=>{var T,k;if(f.composedPath().some(S=>S instanceof Element&&S.id==="react-scan-toolbar-root")||(Date.now()-s.current.stageStart>2e3&&(s.current={kind:"uninitialized-stage",interactionUUID:Wn(),stageStart:Date.now(),interactionType:e}),s.current.kind!=="uninitialized-stage"))return;const v=performance.now();(T=t==null?void 0:t.onStart)==null||T.call(t,s.current.interactionUUID);const g=H4(f.target);if(!g){(k=t==null?void 0:t.onError)==null||k.call(t,s.current.interactionUUID);return}const b={},w=M2(b);s.current={...s.current,interactionType:e,blockingTimeStart:Date.now(),childrenTree:g.childrenTree,componentName:g.componentName,componentPath:g.componentPath,fiberRenders:b,kind:"interaction-start",interactionStartDetail:v,stopListeningForRenders:w};const _=a({phase:"end",target:f.target});document.addEventListener(_,u,{once:!0}),requestAnimationFrame(()=>{document.removeEventListener(_,u)})};document.addEventListener(a({phase:"start"}),l,{capture:!0});const u=(f,h,v)=>{var g;if(s.current.kind!=="interaction-start"&&h===r){if(e==="pointer"&&f.target instanceof HTMLSelectElement){s.current={kind:"uninitialized-stage",interactionUUID:Wn(),stageStart:Date.now(),interactionType:e};return}(g=t==null?void 0:t.onError)==null||g.call(t,s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:Wn(),stageStart:Date.now(),interactionType:e};return}r=h,L4({abort:v,onMicroTask:()=>s.current.kind==="uninitialized-stage"?!1:(s.current={...s.current,kind:"js-end-stage",jsEndDetail:performance.now()},!0),onRAF:()=>{var b;return s.current.kind!=="js-end-stage"&&s.current.kind!=="raf-stage"?((b=t==null?void 0:t.onError)==null||b.call(t,s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:Wn(),stageStart:Date.now(),interactionType:e},!1):(s.current={...s.current,kind:"raf-stage",rafStart:performance.now()},!0)},onTimeout:()=>{var S;if(s.current.kind!=="raf-stage"){(S=t==null?void 0:t.onError)==null||S.call(t,s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:Wn(),stageStart:Date.now(),interactionType:e};return}const b=Date.now(),w=Object.freeze({...s.current,kind:"timeout-stage",blockingTimeEnd:b,commitEnd:performance.now()});s.current={kind:"uninitialized-stage",interactionUUID:Wn(),stageStart:b,interactionType:e};let _=!1;const T=E=>{var F;_=!0;const M=E.kind==="auto-complete-race"?E.detailedTiming.commitEnd-E.detailedTiming.interactionStartDetail:E.entry.latency,z={detailedTiming:w,latency:M,completedAt:Date.now(),flushNeeded:!0};(F=t==null?void 0:t.onComplete)==null||F.call(t,w.interactionUUID,z,E);const R=Xr.filter(I=>I.interactionUUID!==w.interactionUUID);return Xr=Mt.fromArray(R,ku),z},k={completeInteraction:T,endDateTime:Date.now(),startDateTime:w.blockingTimeStart,type:e,interactionUUID:w.interactionUUID};if(Xr.push(k),I4())setTimeout(()=>{if(_)return;T({kind:"auto-complete-race",detailedTiming:w,interactionUUID:w.interactionUUID});const E=Xr.filter(M=>M.interactionUUID!==w.interactionUUID);Xr=Mt.fromArray(E,ku)},1e3);else{const E=Xr.filter(M=>M.interactionUUID!==w.interactionUUID);Xr=Mt.fromArray(E,ku),T({kind:"auto-complete-race",detailedTiming:w,interactionUUID:w.interactionUUID})}}})},d=f=>{const h=Wn();u(f,h,()=>h!==r)};return e==="keyboard"&&document.addEventListener("keypress",d),()=>{document.removeEventListener(a({phase:"start"}),l,{capture:!0}),document.removeEventListener("keypress",d)}},Yw=e=>{var t;return(t=Ex(e,r=>{if(pl(r))return!0}))==null?void 0:t.stateNode},I4=()=>"PerformanceEventTiming"in globalThis,M2=e=>{const t=r=>{var v,g,b,w,_;const a=zt(r.type);if(!a)return;const s=e[a];if(!s){const T=new Set,k=r.return&&Ao(r.return),S=k&&zt(k[0]);S&&T.add(S);const{selfTime:E,totalTime:M}=fa(r),z=Ow(r),R={current:[],changes:new Set,changesCounts:new Map},F={fiberProps:z.fiberProps||R,fiberState:z.fiberState||R,fiberContext:z.fiberContext||R};e[a]={renderCount:1,hasMemoCache:ml(r),wasFiberRenderMount:Xw(r),parents:T,selfTime:E,totalTime:M,nodeInfo:[{element:Yw(r),name:zt(r.type)??"Unknown",selfTime:fa(r).selfTime}],changes:F};return}if((g=(v=Ao(r))==null?void 0:v[0])==null?void 0:g.type){const T=r.return&&Ao(r.return),k=T&&zt(T[0]);k&&s.parents.add(k)}const{selfTime:u,totalTime:d}=fa(r),f=Ow(r);if(!f)return;const h={current:[],changes:new Set,changesCounts:new Map};s.wasFiberRenderMount=s.wasFiberRenderMount||Xw(r),s.hasMemoCache=s.hasMemoCache||ml(r),s.changes={fiberProps:hp(((b=s.changes)==null?void 0:b.fiberProps)||h,f.fiberProps||h),fiberState:hp(((w=s.changes)==null?void 0:w.fiberState)||h,f.fiberState||h),fiberContext:hp(((_=s.changes)==null?void 0:_.fiberContext)||h,f.fiberContext||h)},s.renderCount+=1,s.selfTime+=u,s.totalTime+=d,s.nodeInfo.push({element:Yw(r),name:zt(r.type)??"Unknown",selfTime:fa(r).selfTime})};return ie.interactionListeningForRenders=t,()=>{ie.interactionListeningForRenders===t&&(ie.interactionListeningForRenders=null)}},hp=(e,t)=>{const r={current:[...e.current],changes:new Set,changesCounts:new Map};for(const a of t.current)r.current.some(s=>s.name===a.name)||r.current.push(a);for(const a of t.changes)if(typeof a=="string"||typeof a=="number"){r.changes.add(a);const s=e.changesCounts.get(a)||0,l=t.changesCounts.get(a)||0;r.changesCounts.set(a,s+l)}return r},Xw=e=>{if(!e.alternate)return!0;const t=e.alternate,r=t&&t.memoizedState!=null&&t.memoizedState.element!=null&&t.memoizedState.isDehydrated!==!0,a=e.memoizedState!=null&&e.memoizedState.element!=null&&e.memoizedState.isDehydrated!==!0;return!r&&a},q4=e=>{let t;const r=new Set,a=(h,v)=>{const g=typeof h=="function"?h(t):h;if(!Object.is(g,t)){const b=t;t=v??(typeof g!="object"||g===null)?g:Object.assign({},t,g),r.forEach(w=>w(t,b))}},s=()=>t,d={setState:a,getState:s,getInitialState:()=>f,subscribe:(h,v)=>{let g,b;v?(g=h,b=v):b=h;let w=g?g(t):void 0;const _=(T,k)=>{if(g){const S=g(T),E=g(k);Object.is(w,S)||(w=S,b(S,E))}else b(T,k)};return r.add(_),()=>r.delete(_)}},f=t=e(a,s,d);return d},O2=e=>q4,ou=null;O2()(e=>({state:{events:[]},actions:{addEvent:t=>{e(r=>({state:{events:[...r.state.events,t]}}))},clear:()=>{e({state:{events:[]}})}}}));var pp=200,xl=O2()((e,t)=>{const r=new Set;return{state:{events:new Mt(pp)},actions:{addEvent:a=>{r.forEach(f=>f(a));const s=[...t().state.events,a],l=(f,h)=>{const v=s.find(g=>{if(g.kind!=="long-render"&&g.id!==f.id&&(f.data.startAt<=g.data.startAt&&f.data.endAt<=g.data.endAt&&f.data.endAt>=g.data.startAt||g.data.startAt<=f.data.startAt&&g.data.endAt>=f.data.startAt||f.data.startAt<=g.data.startAt&&f.data.endAt>=g.data.endAt))return!0});v&&h(v)},u=new Set;s.forEach(f=>{f.kind!=="interaction"&&l(f,()=>{u.add(f.id)})});const d=s.filter(f=>!u.has(f.id));e(()=>({state:{events:Mt.fromArray(d,pp)}}))},addListener:a=>(r.add(a),()=>{r.delete(a)}),clear:()=>{e({state:{events:new Mt(pp)}})}}}}),F4=()=>FE(xl.subscribe,xl.getState),Eu=null,Cu=null,mp=null,pm,B4=()=>{const e=t=>{pm=t.composedPath().map(r=>r.id).filter(Boolean).includes("react-scan-toolbar")};return document.addEventListener("mouseover",e),mp=e,()=>{mp&&document.removeEventListener("mouseover",mp)}},P4=()=>{const e=()=>{Eu=performance.now(),Cu=performance.timeOrigin};return document.addEventListener("visibilitychange",e),()=>{document.removeEventListener("visibilitychange",e)}},N2=150,gp=[];function Y4(){let e,t;function r(){let s=null;ou=null,ou={},s=M2(ou);const l=performance.timeOrigin,u=performance.now();return e=requestAnimationFrame(()=>{t=setTimeout(()=>{const d=performance.now(),f=d-u,h=performance.timeOrigin;gp.push(d+h);const v=gp.filter(_=>d+h-_<=1e3),g=v.length;gp=v;const b=Eu!==null&&Cu!==null?d+h-(Cu+Eu)<100:null,w=pm!==null&&pm;if(f>N2&&!b&&document.visibilityState==="visible"&&!w){const _=h+d,T=u+l;xl.getState().actions.addEvent({kind:"long-render",id:Wn(),data:{endAt:_,startAt:T,meta:{fiberRenders:ou,latency:f,fps:g}}})}Eu=null,Cu=null,s==null||s(),r()},0)}),s}const a=r();return()=>{a(),cancelAnimationFrame(e),clearTimeout(t)}}var X4=()=>{const e=R4(),t=B4(),r=P4(),a=Y4(),s=async(f,h,v)=>{xl.getState().actions.addEvent({kind:"interaction",id:Wn(),data:{startAt:h.detailedTiming.blockingTimeStart,endAt:performance.now()+performance.timeOrigin,meta:{...h,kind:v.kind}}});const g=Ku.getChannelState("recording");h.detailedTiming.stopListeningForRenders(),g.length&&Ku.updateChannelState("recording",()=>new Mt(yr))},l=Pw("pointer",{onComplete:s}),u=Pw("keyboard",{onComplete:s}),d=$4(f=>{Fw.setState(Mt.fromArray(Fw.getCurrentState().concat(f),C2))});return()=>{t(),r(),a(),e(),l(),d(),u()}},_l=e=>{const t=e.filter(r=>r.length>2);return t.length===0?e.at(-1)??"Unknown":t.at(-1)},jt=e=>{switch(e.kind){case"interaction":{const{renderTime:t,otherJSTime:r,framePreparation:a,frameConstruction:s,frameDraw:l}=e;return t+r+a+s+(l??0)}case"dropped-frames":return e.otherTime+e.renderTime}},G4=e=>e.wasFiberRenderMount||e.hasMemoCache?!1:e.changes.context.length===0&&e.changes.props.length===0&&e.changes.state.length===0,jl=e=>{const t=jt(e.timing);switch(e.kind){case"interaction":return t<200?"low":t<500?"needs-improvement":"high";case"dropped-frames":return t<50?"low":t<N2?"needs-improvement":"high"}},Mn=()=>eg(z2),z2=Px(null),j2=({size:e=24,className:t})=>y("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:$(["lucide lucide-chevron-right",t]),children:y("path",{d:"m9 18 6-6-6-6"})}),V4=({className:e="",size:t=24,events:r=[]})=>{const a=r.includes(!0),s=r.filter(d=>d).length,l=s>99?">99":s,u=a?Math.max(t*.6,14):Math.max(t*.4,6);return y("div",{className:"relative",children:[y("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:`lucide lucide-bell ${e}`,children:[y("path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}),y("path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"})]}),r.length>0&&s>0&&Ue.options.value.showNotificationCount&&y("div",{className:$(["absolute",a?"-top-2.5 -right-2.5":"-top-1 -right-1","rounded-full","flex items-center justify-center","text-[8px] font-medium text-white","aspect-square",a?"bg-red-500/90":"bg-purple-500/90"]),style:{width:`${u}px`,height:`${u}px`,padding:a?"0.5px":"0"},children:a&&l})]})},Wu=({className:e="",size:t=24})=>y("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[y("path",{d:"M18 6 6 18"}),y("path",{d:"m6 6 12 12"})]}),Q4=({className:e="",size:t=24})=>y("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[y("path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}),y("path",{d:"M16 9a5 5 0 0 1 0 6"}),y("path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"})]}),K4=({className:e="",size:t=24})=>y("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[y("path",{d:"M16 9a5 5 0 0 1 .95 2.293"}),y("path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96"}),y("path",{d:"m2 2 20 20"}),y("path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"}),y("path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686"})]}),W4=({size:e=24,className:t})=>y("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:$(["lucide lucide-arrow-left",t]),children:[y("path",{d:"m12 19-7-7 7-7"}),y("path",{d:"M19 12H5"})]}),Z4=({className:e="",size:t=24})=>y("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[y("path",{d:"M14 4.1 12 6"}),y("path",{d:"m5.1 8-2.9-.8"}),y("path",{d:"m6 12-1.9 2"}),y("path",{d:"M7.2 2.2 8 5.1"}),y("path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"})]}),J4=({className:e="",size:t=24})=>y("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[y("path",{d:"M10 8h.01"}),y("path",{d:"M12 12h.01"}),y("path",{d:"M14 8h.01"}),y("path",{d:"M16 12h.01"}),y("path",{d:"M18 8h.01"}),y("path",{d:"M6 8h.01"}),y("path",{d:"M7 16h10"}),y("path",{d:"M8 12h.01"}),y("rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"})]}),eA=({className:e="",size:t=24})=>y("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,style:{transform:"rotate(180deg)"},children:[y("circle",{cx:"12",cy:"12",r:"10"}),y("path",{d:"m4.9 4.9 14.2 14.2"})]}),tA=({className:e="",size:t=24})=>y("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[y("polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}),y("polyline",{points:"16 17 22 17 22 11"})]}),D2=({children:e,triggerContent:t,wrapperProps:r})=>{const[a,s]=Ce("closed"),[l,u]=Ce(null),[d,f]=Ce({width:window.innerWidth,height:window.innerHeight}),h=he(null),v=he(null),g=eg(yg),b=he(!1);Ee(()=>{const S=()=>{f({width:window.innerWidth,height:window.innerHeight}),w()};return window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[]);const w=()=>{if(h.current&&g){const S=h.current.getBoundingClientRect(),E=g.getBoundingClientRect(),M=S.left+S.width/2,z=S.top,R=new DOMRect(M-E.left,z-E.top,S.width,S.height);u(R)}};Ee(()=>{w()},[h.current]),Ee(()=>{if(a==="opening"){const S=setTimeout(()=>s("open"),120);return()=>clearTimeout(S)}else if(a==="closing"){const S=setTimeout(()=>s("closed"),120);return()=>clearTimeout(S)}},[a]),Ee(()=>{const S=setInterval(()=>{!b.current&&a!=="closed"&&s("closing")},1e3);return()=>clearInterval(S)},[a]);const _=()=>{b.current=!0,w(),s("opening")},T=()=>{b.current=!1,w(),s("closing")},k=()=>{var ne;if(!l||!g)return{top:0,left:0};const S=g.getBoundingClientRect(),E=175,M=((ne=v.current)==null?void 0:ne.offsetHeight)||40,z=5,R=l.x+S.left,F=l.y+S.top;let I=R,J=F-4;return I-E/2<z?I=z+E/2:I+E/2>d.width-z&&(I=d.width-z-E/2),J-M<z&&(J=F+l.height+4),{top:J-S.top,left:I-S.left}};return y(Re,{children:[g&&l&&a!=="closed"&&GE(y("div",{ref:v,className:$(["absolute z-100 bg-white text-black rounded-lg px-3 py-2 shadow-lg","transform transition-all duration-120 ease-[cubic-bezier(0.23,1,0.32,1)]",'after:content-[""] after:absolute after:top-[100%]',"after:left-1/2 after:-translate-x-1/2","after:w-[10px] after:h-[6px]","after:border-l-[5px] after:border-l-transparent","after:border-r-[5px] after:border-r-transparent","after:border-t-[6px] after:border-t-white","pointer-events-none",a==="opening"||a==="closing"?"opacity-0 translate-y-1":"opacity-100 translate-y-0"]),style:{top:k().top+"px",left:k().left+"px",transform:"translate(-50%, -100%)",minWidth:"175px"},children:e}),g),y("div",{ref:h,onMouseEnter:_,onMouseLeave:T,...r,children:t})]})},nA=({selectedEvent:e})=>{const{notificationState:t,setNotificationState:r,setRoute:a}=Mn();return y("div",{className:$(["flex w-full justify-between items-center px-3 py-2 text-xs"]),children:[y("div",{className:$(["bg-[#18181B] flex items-center gap-x-1 p-1 rounded-sm"]),children:[y("button",{onClick:()=>{a({route:"render-visualization",routeMessage:null})},className:$(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",t.route==="render-visualization"||t.route==="render-explanation"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Ranked"}),y("button",{onClick:()=>{a({route:"other-visualization",routeMessage:null})},className:$(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",t.route==="other-visualization"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Overview"}),y("button",{onClick:()=>{a({route:"optimize",routeMessage:null})},className:$(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",t.route==="optimize"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:y("span",{children:"Prompts"})})]}),y(D2,{triggerContent:y("button",{onClick:()=>{r(s=>{s.audioNotificationsOptions.enabled&&s.audioNotificationsOptions.audioContext.state!=="closed"&&s.audioNotificationsOptions.audioContext.close();const l=s.audioNotificationsOptions.enabled;localStorage.setItem("react-scan-notifications-audio",String(!l));const u=new AudioContext;return s.audioNotificationsOptions.enabled||ag(u),l&&u.close(),{...s,audioNotificationsOptions:l?{audioContext:null,enabled:!1}:{audioContext:u,enabled:!0}}})},className:"ml-auto",children:y("div",{className:$(["flex gap-x-2 justify-center items-center text-[#6E6E77]"]),children:[y("span",{children:"Alerts"}),t.audioNotificationsOptions.enabled?y(Q4,{size:16,className:"text-[#6E6E77]"}):y(K4,{size:16,className:"text-[#6E6E77]"})]})}),children:y(Re,{children:"Play a chime when a slowdown is recorded"})})]})},go=e=>{let t="";return e.toSorted((a,s)=>s.totalTime-a.totalTime).slice(0,30).filter(a=>a.totalTime>5).forEach(a=>{let s="";s+="Component Name:",s+=a.name,s+=`
`,s+=`Rendered: ${a.count} times
`,s+=`Sum of self times for ${a.name} is ${a.totalTime.toFixed(0)}ms
`,a.changes.props.length>0&&(s+=`Changed props for all ${a.name} instances ("name:count" pairs)
`,a.changes.props.forEach(l=>{s+=`${l.name}:${l.count}x
`})),a.changes.state.length>0&&(s+=`Changed state for all ${a.name} instances ("hook index:count" pairs)
`,a.changes.state.forEach(l=>{s+=`${l.index}:${l.count}x
`})),a.changes.context.length>0&&(s+=`Changed context for all ${a.name} instances ("context display name (if exists):count" pairs)
`,a.changes.context.forEach(l=>{s+=`${l.name}:${l.count}x
`})),t+=s,t+=`
`}),t},rA=({renderTime:e,eHandlerTimeExcludingRenders:t,toRafTime:r,commitTime:a,framePresentTime:s,formattedReactData:l})=>`I will provide you with a set of high level, and low level performance data about an interaction in a React App:
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
${l}`,iA=({interactionType:e,name:t,componentPath:r,time:a,renderTime:s,eHandlerTimeExcludingRenders:l,toRafTime:u,commitTime:d,framePresentTime:f,formattedReactData:h})=>`You will attempt to implement a performance improvement to a user interaction in a React app. You will be provided with data about the interaction, and the slow down.

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

`,aA=({renderTime:e,otherTime:t,formattedReactData:r})=>`You will attempt to implement a performance improvement to a large slowdown in a react app

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
`,oA=({renderTime:e,otherTime:t,formattedReactData:r})=>`Your goal will be to help me find the source of a performance problem in a React App. I collected a large dataset about this specific performance problem.

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
`,sA=({renderTime:e,otherTime:t,formattedReactData:r})=>`I will provide you with a set of high level, and low level performance data about a large frame drop in a React App:
### High level
- react component render time: ${e.toFixed(0)}ms
- how long it took to run everything else (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${t}ms

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${r}`,lA=({interactionType:e,name:t,time:r,renderTime:a,eHandlerTimeExcludingRenders:s,toRafTime:l,commitTime:u,framePresentTime:d,formattedReactData:f})=>`Your goal will be to help me find the source of a performance problem. I collected a large dataset about this specific performance problem.

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
`,mm=(e,t)=>tr(()=>{switch(e){case"data":switch(t.kind){case"dropped-frames":return sA({formattedReactData:go(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((r,a)=>r+a.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return rA({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:go(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,renderTime:t.groupedFiberRenders.reduce((r,a)=>r+a.totalTime,0),toRafTime:t.timing.framePreparation})}case"explanation":switch(t.kind){case"dropped-frames":return oA({formattedReactData:go(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((r,a)=>r+a.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return lA({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:go(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:_l(t.componentPath),renderTime:t.groupedFiberRenders.reduce((r,a)=>r+a.totalTime,0),time:jt(t.timing),toRafTime:t.timing.framePreparation})}case"fix":switch(t.kind){case"dropped-frames":return aA({formattedReactData:go(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((r,a)=>r+a.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return iA({commitTime:t.timing.frameConstruction,componentPath:t.componentPath.join(">"),eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:go(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:_l(t.componentPath),renderTime:t.groupedFiberRenders.reduce((r,a)=>r+a.totalTime,0),time:jt(t.timing),toRafTime:t.timing.framePreparation})}}}),cA=({selectedEvent:e})=>{const[t,r]=Ce("fix"),[a,s]=Ce(!1);return y("div",{className:$(["w-full h-full"]),children:[y("div",{className:$(["border border-[#27272A] rounded-sm h-4/5 text-xs overflow-hidden"]),children:[y("div",{className:$(["bg-[#18181B] p-1 rounded-t-sm"]),children:y("div",{className:$(["flex items-center gap-x-1"]),children:[y("button",{onClick:()=>r("fix"),className:$(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",t==="fix"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Fix"}),y("button",{onClick:()=>r("explanation"),className:$(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",t==="explanation"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Explanation"}),y("button",{onClick:()=>r("data"),className:$(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",t==="data"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Data"})]})}),y("div",{className:$(["overflow-y-auto h-full"]),children:y("pre",{className:$(["p-2 h-full","whitespace-pre-wrap break-words","text-gray-300 font-mono "]),children:mm(t,e)})})]}),y("button",{onClick:async()=>{const l=mm(t,e);await navigator.clipboard.writeText(l),s(!0),setTimeout(()=>s(!1),1e3)},className:$(["mt-4 px-4 py-2 bg-[#18181B] text-[#6E6E77] rounded-sm","hover:text-white transition-colors duration-200","flex items-center justify-center gap-x-2 text-xs"]),children:[y("span",{children:a?"Copied!":"Copy Prompt"}),y("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:$(["transition-transform duration-200",a&&"scale-110"]),children:a?y("path",{d:"M20 6L9 17l-5-5"}):y(Re,{children:[y("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),y("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})]})},uA=(e,t)=>{switch(e.kind){case"dropped-frames":return[...t?[{name:"Total Processing Time",time:jt(e.timing),color:"bg-red-500",kind:"total-processing-time"}]:[{name:"Renders",time:e.timing.renderTime,color:"bg-purple-500",kind:"render"},{name:"JavaScript, DOM updates, Draw Frame",time:e.timing.otherTime,color:"bg-[#4b4b4b]",kind:"other-frame-drop"}]];case"interaction":return[...t?[]:[{name:"Renders",time:e.timing.renderTime,color:"bg-purple-500",kind:"render"}],{name:t?"React Renders, Hooks, Other JavaScript":"JavaScript/React Hooks ",time:e.timing.otherJSTime,color:"bg-[#EFD81A]",kind:"other-javascript"},{name:"Update DOM and Draw New Frame",time:jt(e.timing)-e.timing.renderTime-e.timing.otherJSTime,color:"bg-[#1D3A66]",kind:"other-not-javascript"}]}},dA=({selectedEvent:e})=>{var f;const[t]=Ce(md()??!1),{notificationState:r}=Mn(),[a,s]=Ce((f=r.routeMessage)!=null&&f.name?[r.routeMessage.name]:[]),l=uA(e,t),u=eg(yg);Ee(()=>{var h;if((h=r.routeMessage)!=null&&h.name){const v=u==null?void 0:u.querySelector("#overview-scroll-container"),g=u==null?void 0:u.querySelector(`#react-scan-overview-bar-${r.routeMessage.name}`);if(v&&g){const b=g.getBoundingClientRect().top,w=v.getBoundingClientRect().top,_=b-w;v.scrollTop=v.scrollTop+_}}},[r.route]),Ee(()=>{r.route==="other-visualization"&&s(h=>{var v;return(v=r.routeMessage)!=null&&v.name?[r.routeMessage.name]:h})},[r.route]);const d=l.reduce((h,v)=>h+v.time,0);return y("div",{className:"rounded-sm border border-zinc-800 text-xs",children:[y("div",{className:"p-2 border-b border-zinc-800 bg-zinc-900/50",children:y("div",{className:"flex items-center justify-between",children:[y("h3",{className:"text-xs font-medium",children:"What was time spent on?"}),y("span",{className:"text-xs text-zinc-400",children:["Total: ",d.toFixed(0),"ms"]})]})}),y("div",{className:"divide-y divide-zinc-800",children:l.map(h=>{const v=a.includes(h.kind);return y("div",{id:`react-scan-overview-bar-${h.kind}`,children:[y("button",{onClick:()=>s(g=>g.includes(h.kind)?g.filter(b=>b!==h.kind):[...g,h.kind]),className:"w-full px-3 py-2 flex items-center gap-4 hover:bg-zinc-800/50 transition-colors",children:y("div",{className:"flex-1",children:[y("div",{className:"flex items-center justify-between mb-2",children:[y("div",{className:"flex items-center gap-0.5",children:[y("svg",{className:`h-4 w-4 text-zinc-400 transition-transform ${v?"rotate-90":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:y("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),y("span",{className:"font-medium flex items-center text-left",children:h.name})]}),y("span",{className:" text-zinc-400",children:[h.time.toFixed(0),"ms"]})]}),y("div",{className:"h-1 bg-zinc-800 rounded-full overflow-hidden",children:y("div",{className:`h-full ${h.color} transition-all`,style:{width:`${h.time/d*100}%`}})})]})}),v&&y("div",{className:"bg-zinc-900/30 border-t border-zinc-800 px-2.5 py-3",children:y("p",{className:" text-zinc-400 mb-4 text-xs",children:tr(()=>{switch(e.kind){case"interaction":switch(h.kind){case"render":return y(vo,{input:hA(e)});case"other-javascript":return y(vo,{input:pA(e)});case"other-not-javascript":return y(vo,{input:fA(e)})}case"dropped-frames":switch(h.kind){case"total-processing-time":return y(vo,{input:{kind:"total-processing",data:{time:jt(e.timing)}}});case"render":return y(Re,{children:y(vo,{input:{kind:"render",data:{topByTime:e.groupedFiberRenders.toSorted((g,b)=>b.totalTime-g.totalTime).slice(0,3).map(g=>({name:g.name,percentage:g.totalTime/jt(e.timing)}))}}})});case"other-frame-drop":return y(vo,{input:{kind:"other"}})}}})})})]},h.kind)})})]})},fA=e=>{const t=e.groupedFiberRenders.reduce((l,u)=>l+u.count,0),r=e.timing.renderTime,a=jt(e.timing),s=r/a*100;return t>100?{kind:"high-render-count-update-dom-draw-frame",data:{count:t,percentageOfTotal:s,copyButton:y(Gw,{})}}:{kind:"update-dom-draw-frame",data:{copyButton:y(Gw,{})}}},Gw=()=>{const[e,t]=Ce(!1),{notificationState:r}=Mn();return y("button",{onClick:async()=>{r.selectedEvent&&(await navigator.clipboard.writeText(mm("explanation",r.selectedEvent)),t(!0),setTimeout(()=>t(!1),1e3))},className:"bg-zinc-800 flex hover:bg-zinc-700 text-zinc-200 px-2 py-1 rounded gap-x-3",children:[y("span",{children:e?"Copied!":"Copy Prompt"}),y("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:$(["transition-transform duration-200",e&&"scale-110"]),children:e?y("path",{d:"M20 6L9 17l-5-5"}):y(Re,{children:[y("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),y("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})},hA=e=>e.timing.renderTime/jt(e.timing)>.3?{kind:"render",data:{topByTime:e.groupedFiberRenders.toSorted((t,r)=>r.totalTime-t.totalTime).slice(0,3).map(t=>({percentage:t.totalTime/jt(e.timing),name:t.name}))}}:{kind:"other"},pA=e=>{const t=e.groupedFiberRenders.reduce((r,a)=>r+a.count,0);return e.timing.otherJSTime/jt(e.timing)<.2?{kind:"js-explanation-base"}:e.groupedFiberRenders.find(r=>r.count>200)||e.groupedFiberRenders.reduce((r,a)=>r+a.count,0)>500?{kind:"high-render-count-high-js",data:{renderCount:t,topByCount:e.groupedFiberRenders.filter(r=>r.count>100).toSorted((r,a)=>a.count-r.count).slice(0,3)}}:e.timing.otherJSTime/jt(e.timing)>.3?e.timing.renderTime>.2?{kind:"js-explanation-base"}:{kind:"low-render-count-high-js",data:{renderCount:t}}:{kind:"js-explanation-base"}},vo=({input:e})=>{switch(e.kind){case"total-processing":return y("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[y("p",{children:["This is the time it took to draw the entire frame that was presented to the user. To be at 60FPS, this number needs to be ","<=16ms"]}),y("p",{children:'To debug the issue, check the "Ranked" tab to see if there are significant component renders'}),y("p",{children:"On a production React build, React Scan can't access the time it took for component to render. To get that information, run React Scan on a development build"}),y("p",{children:["To understand precisely what caused the slowdown while in production, use the ",y("strong",{children:"Chrome profiler"})," and analyze the function call times."]}),y("p",{})]});case"render":return y("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[y("p",{children:"This is the time it took React to run components, and internal logic to handle the output of your component."}),y("div",{className:$(["flex flex-col"]),children:[y("p",{children:"The slowest components for this time period were:"}),e.data.topByTime.map(t=>y("div",{children:[y("strong",{children:t.name}),":"," ",(t.percentage*100).toFixed(0),"% of total"]},t.name))]}),y("p",{children:'To view the render times of all your components, and what caused them to render, go to the "Ranked" tab'}),y("p",{children:'The "Ranked" tab shows the render times of every component.'}),y("p",{children:"The render times of the same components are grouped together into one bar."}),y("p",{children:"Clicking the component will show you what props, state, or context caused the component to re-render."})]});case"js-explanation-base":return y("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[y("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),y("p",{children:["The most common culprit for high JS time is expensive hooks, like expensive callbacks inside of ",y("code",{children:"useEffect"}),"'s or a large number of useEffect's called, but this can also be JavaScript event handlers (",y("code",{children:"'onclick'"}),", ",y("code",{children:"'onchange'"}),") that performed expensive computation."]}),y("p",{children:"If you have lots of components rendering that call hooks, like useEffect, it can add significant overhead even if the callbacks are not expensive. If this is the case, you can try optimizing the renders of those components to avoid the hook from having to run."}),y("p",{children:["You should profile your app using the"," ",y("strong",{children:"Chrome DevTools profiler"})," to learn exactly which functions took the longest to execute."]})]});case"high-render-count-high-js":return y("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[y("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),e.data.renderCount===0?y(Re,{children:[y("p",{children:"There were no renders, which means nothing related to React caused this slowdown. The most likely cause of the slowdown is a slow JavaScript event handler, or code related to a Web API"}),y("p",{children:["You should try to reproduce the slowdown while profiling your website with the",y("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]}):y(Re,{children:[" ",y("p",{children:["There were ",y("strong",{children:e.data.renderCount})," renders, which could have contributed to the high JavaScript/Hook time if they ran lots of hooks, like ",y("code",{children:"useEffects"}),"."]}),y("div",{className:$(["flex flex-col"]),children:[y("p",{children:"You should try optimizing the renders of:"}),e.data.topByCount.map(t=>y("div",{children:["- ",y("strong",{children:t.name})," (rendered ",t.count,"x)"]},t.name))]}),"and then checking if the problem still exists.",y("p",{children:["You can also try profiling your app using the"," ",y("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]})]});case"low-render-count-high-js":return y("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[y("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),y("p",{children:["There were only ",y("strong",{children:e.data.renderCount})," renders detected, which means either you had very expensive hooks like"," ",y("code",{children:"useEffect"}),"/",y("code",{children:"useLayoutEffect"}),", or there is other JavaScript running during this interaction that took up the majority of the time."]}),y("p",{children:["To understand precisely what caused the slowdown, use the"," ",y("strong",{children:"Chrome profiler"})," and analyze the function call times."]})]});case"high-render-count-update-dom-draw-frame":return y("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[y("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),y("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),y("p",{children:["During this interaction, there were"," ",y("strong",{children:e.data.count})," renders, which was"," ",y("strong",{children:[e.data.percentageOfTotal.toFixed(0),"%"]})," of the time spent processing"]}),y("p",{children:"The work performed as a result of the renders may have forced the browser to spend a lot of time to draw the next frame."}),y("p",{children:'You can try optimizing the renders to see if the performance problem still exists using the "Ranked" tab.'}),y("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),y("p",{children:e.data.copyButton}),y("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),y("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"update-dom-draw-frame":return y("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[y("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),y("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),y("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),y("p",{children:e.data.copyButton}),y("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),y("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"other":return y("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[y("p",{children:["This is the time it took to run everything other than React renders. This can be hooks like ",y("code",{children:"useEffect"}),", other JavaScript not part of React, or work the browser has to do to update the DOM and draw the next frame."]}),y("p",{children:["To get a better picture of what happened, profile your app using the"," ",y("strong",{children:"Chrome profiler"})," when the performance problem arises."]})]})}},et=null,gt=null,Ze=Et({kind:"idle",current:null}),vp=null,Oo=()=>{vp&&cancelAnimationFrame(vp),vp=requestAnimationFrame(()=>{if(!et||!gt)return;gt.clearRect(0,0,et.width,et.height);const e="hsl(271, 76%, 53%)",t=Ze.value,{alpha:r,current:a}=tr(()=>{var s,l;switch(t.kind){case"transition":{const u=(s=t.current)!=null&&s.alpha&&t.current.alpha>0?t.current:t.transitionTo;return{alpha:u?u.alpha:0,current:u}}case"move-out":return{alpha:((l=t.current)==null?void 0:l.alpha)??0,current:t.current};case"idle":return{alpha:1,current:t.current}}});switch(a==null||a.rects.forEach(s=>{gt&&(gt.shadowColor=e,gt.shadowBlur=6,gt.strokeStyle=e,gt.lineWidth=2,gt.globalAlpha=r,gt.beginPath(),gt.rect(s.left,s.top,s.width,s.height),gt.stroke(),gt.shadowBlur=0,gt.beginPath(),gt.rect(s.left,s.top,s.width,s.height),gt.stroke())}),t.kind){case"move-out":{if(t.current.alpha===0){Ze.value={kind:"idle",current:null};return}t.current.alpha<=.01&&(t.current.alpha=0),t.current.alpha=Math.max(0,t.current.alpha-.03),Oo();return}case"transition":{if(t.current&&t.current.alpha>0){t.current.alpha=Math.max(0,t.current.alpha-.03),Oo();return}if(t.transitionTo.alpha===1){Ze.value={kind:"idle",current:t.transitionTo};return}t.transitionTo.alpha=Math.min(t.transitionTo.alpha+.03,1),Oo()}case"idle":return}})},yp=null,mA=e=>{if(et=document.createElement("canvas"),gt=et.getContext("2d",{alpha:!0}),!gt)return null;const t=window.devicePixelRatio||1,{innerWidth:r,innerHeight:a}=window;et.style.width=`${r}px`,et.style.height=`${a}px`,et.width=r*t,et.height=a*t,et.style.position="fixed",et.style.left="0",et.style.top="0",et.style.pointerEvents="none",et.style.zIndex="2147483600",gt.scale(t,t),e.appendChild(et),yp&&window.removeEventListener("resize",yp);const s=()=>{if(!et||!gt)return;const l=window.devicePixelRatio||1,{innerWidth:u,innerHeight:d}=window;et.style.width=`${u}px`,et.style.height=`${d}px`,et.width=u*l,et.height=d*l,gt.scale(l,l),Oo()};return yp=s,window.addEventListener("resize",s),Ze.subscribe(()=>{requestAnimationFrame(()=>{Oo()})}),gA};function gA(){et!=null&&et.parentNode&&et.parentNode.removeChild(et),et=null,gt=null}var Js=()=>{var t;const e=Ze.value.current?Ze.value.current:Ze.value.kind==="transition"?Ze.value.transitionTo:null;if(e){if(Ze.value.kind==="transition"){Ze.value={kind:"move-out",current:((t=Ze.value.current)==null?void 0:t.alpha)===0?Ze.value.transitionTo:Ze.value.current??Ze.value.transitionTo};return}Ze.value={kind:"move-out",current:{alpha:0,...e}}}},vA=({selectedEvent:e})=>{const t=jt(e.timing),r=t-e.timing.renderTime,[a]=Ce(md()),l=e.groupedFiberRenders.map(h=>({event:h,kind:"render",totalTime:a?h.count:h.totalTime})),u=tr(()=>{switch(e.kind){case"dropped-frames":return e.timing.renderTime/t<.1;case"interaction":return(e.timing.otherJSTime+e.timing.renderTime)/t<.2}});e.kind==="interaction"&&!a&&l.push({kind:"other-javascript",totalTime:e.timing.otherJSTime}),u&&!a&&(e.kind==="interaction"?l.push({kind:"other-not-javascript",totalTime:jt(e.timing)-e.timing.renderTime-e.timing.otherJSTime}):l.push({kind:"other-frame-drop",totalTime:r}));const d=he({lastCallAt:null,timer:null}),f=l.reduce((h,v)=>h+v.totalTime,0);return y("div",{className:$(["flex flex-col h-full w-full gap-y-1"]),children:[tr(()=>{if(a&&l.length===0)return y("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[y("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No data available"}),y("p",{className:"text-x w-full text-lefts",children:"No data was collected during this period"})]});if(l.length===0)return y("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[y("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No renders collected"}),y("p",{className:"text-x w-full text-lefts",children:"There were no renders during this period"})]})}),l.toSorted((h,v)=>v.totalTime-h.totalTime).map(h=>y(R2,{bars:l,bar:h,debouncedMouseEnter:d,totalBarTime:f,isProduction:a},h.kind==="render"?h.event.id:h.kind))]})},yA=e=>e.current&&e.current.alpha>0?"fading-out":"fading-in",R2=({bar:e,debouncedMouseEnter:t,totalBarTime:r,isProduction:a,bars:s,depth:l=0})=>{const{setNotificationState:u,setRoute:d}=Mn(),[f,h]=Ce(!1),v=e.kind==="render"?e.event.parents.size===0:!0,g=s.filter(_=>_.kind==="render"&&e.kind==="render"?e.event.parents.has(_.event.name)&&_.event.name!==e.event.name:!1),b=e.kind==="render"?Array.from(e.event.parents).filter(_=>!s.some(T=>T.kind==="render"&&T.event.name===_)):[],w=()=>{e.kind==="render"?(u(_=>({..._,selectedFiber:e.event})),d({route:"render-explanation",routeMessage:null})):d({route:"other-visualization",routeMessage:{kind:"auto-open-overview-accordion",name:e.kind}})};return y("div",{className:"w-full",children:[y("div",{className:$(["w-full flex items-center relative text-xs min-w-0"]),children:[y("button",{onMouseLeave:()=>{t.current.timer&&clearTimeout(t.current.timer),Js()},onMouseEnter:async()=>{const _=async()=>{if(t.current.lastCallAt=Date.now(),e.kind!=="render"){const M=Ze.value.current?Ze.value.current:Ze.value.kind==="transition"?Ze.value.transitionTo:null;if(!M){Ze.value={kind:"idle",current:null};return}Ze.value={kind:"move-out",current:{alpha:0,...M}};return}const T=Ze.value,k=tr(()=>{switch(T.kind){case"transition":return T.transitionTo;case"idle":case"move-out":return T.current}}),S=[];if(T.kind==="transition"){const M=yA(T);tr(()=>{switch(M){case"fading-in":{Ze.value={kind:"transition",current:T.transitionTo,transitionTo:{rects:S,alpha:0,name:e.event.name}};return}case"fading-out":{Ze.value={kind:"transition",current:Ze.value.current?{alpha:0,...Ze.value.current}:null,transitionTo:{rects:S,alpha:0,name:e.event.name}};return}}})}else Ze.value={kind:"transition",transitionTo:{rects:S,alpha:0,name:e.event.name},current:k?{alpha:0,...k}:null};const E=e.event.elements.filter(M=>M instanceof Element);for await(const M of k2(E))M.forEach(({boundingClientRect:z})=>{S.push(z)}),Oo()};if(t.current.lastCallAt&&Date.now()-t.current.lastCallAt<200){t.current.timer&&clearTimeout(t.current.timer),t.current.timer=setTimeout(()=>{_()},200);return}_()},onClick:w,className:$(["h-full w-[90%] flex items-center hover:bg-[#0f0f0f] rounded-l-md min-w-0 relative"]),children:[y("div",{style:{minWidth:"fit-content",width:`${e.totalTime/r*100}%`},className:$(["flex items-center rounded-sm text-white text-xs h-[28px] shrink-0",e.kind==="render"&&"bg-[#412162] group-hover:bg-[#5b2d89]",e.kind==="other-frame-drop"&&"bg-[#44444a] group-hover:bg-[#6a6a6a]",e.kind==="other-javascript"&&"bg-[#efd81a6b] group-hover:bg-[#efda1a2f]",e.kind==="other-not-javascript"&&"bg-[#214379d4] group-hover:bg-[#21437982]"])}),y("div",{className:$(["absolute inset-0 flex items-center px-2","min-w-0"]),children:y("div",{className:"flex items-center gap-x-2 min-w-0 w-full",children:[y("span",{className:$(["truncate"]),children:tr(()=>{switch(e.kind){case"other-frame-drop":return"JavaScript, DOM updates, Draw Frame";case"other-javascript":return"JavaScript/React Hooks";case"other-not-javascript":return"Update DOM and Draw New Frame";case"render":return e.event.name}})}),e.kind==="render"&&G4(e.event)&&y("div",{style:{lineHeight:"10px"},className:$(["px-1 py-0.5 bg-[#6a369e] flex items-center rounded-sm font-semibold text-[8px] shrink-0"]),children:"Memoizable"})]})})]}),y("button",{onClick:()=>e.kind==="render"&&!v&&h(!f),className:$(["flex items-center min-w-fit shrink-0 rounded-r-md h-[28px]",!v&&"hover:bg-[#0f0f0f]",e.kind==="render"&&!v?"cursor-pointer":"cursor-default"]),children:[y("div",{className:"w-[20px] flex items-center justify-center",children:e.kind==="render"&&!v&&y(j2,{className:$("transition-transform",f&&"rotate-90"),size:16})}),y("div",{style:{minWidth:v?"fit-content":a?"30px":"60px"},className:"flex items-center justify-end gap-x-1",children:[e.kind==="render"&&y("span",{className:$(["text-[10px]"]),children:["x",e.event.count]}),(e.kind!=="render"||!a)&&y("span",{className:"text-[10px] text-[#7346a0] pr-1",children:[e.totalTime<1?"<1":e.totalTime.toFixed(0),"ms"]})]})]}),l===0&&y("div",{className:$(["absolute right-0 top-1/2 transition-none -translate-y-1/2 bg-white text-black px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity mr-16","pointer-events-none"]),children:"Click to learn more"})]}),f&&(g.length>0||b.length>0)&&y("div",{className:"pl-3 flex flex-col gap-y-1 mt-1",children:[g.toSorted((_,T)=>T.totalTime-_.totalTime).map((_,T)=>y(R2,{depth:l+1,bar:_,debouncedMouseEnter:t,totalBarTime:r,isProduction:a,bars:s},T)),b.map(_=>y("div",{className:"w-full",children:y("div",{className:"w-full flex items-center relative text-xs",children:y("div",{className:"h-full w-full flex items-center relative",children:[y("div",{className:"flex items-center rounded-sm text-white text-xs h-[28px] w-full"}),y("div",{className:"absolute inset-0 flex items-center px-2",children:y("span",{className:"truncate whitespace-nowrap text-white/70 w-full",children:_})})]})})},_))]})]})},bA=({selectedEvent:e,selectedFiber:t})=>{const{setRoute:r}=Mn(),[a,s]=Ce(!0),[l]=Ce(md());Jm(()=>{const d=localStorage.getItem("react-scan-tip-shown"),f=d==="true"?!0:d==="false"?!1:null;if(f===null){s(!0),localStorage.setItem("react-scan-tip-is-shown","true");return}f||s(!1)},[]);const u=t.changes.context.length===0&&t.changes.props.length===0&&t.changes.state.length===0;return y("div",{className:$(["w-full min-h-fit h-full flex flex-col py-4 pt-0 rounded-sm"]),children:[y("div",{className:$(["flex items-start gap-x-4 "]),children:[y("button",{onClick:()=>{r({route:"render-visualization",routeMessage:null})},className:$(["text-white hover:bg-[#34343b] flex gap-x-1 justify-center items-center mb-4 w-fit px-2.5 py-1.5 text-xs rounded-sm bg-[#18181B]"]),children:[y(W4,{size:14})," ",y("span",{children:"Overview"})]}),y("div",{className:$(["flex flex-col gap-y-1"]),children:[y("div",{className:$(["text-sm font-bold text-white overflow-x-hidden"]),children:y("div",{className:"flex items-center gap-x-2 truncate",children:t.name})}),y("div",{className:$(["flex gap-x-2"]),children:[!l&&y(Re,{children:y("div",{className:$(["text-xs text-gray-400"]),children:["• Render time: ",t.totalTime.toFixed(0),"ms"]})}),y("div",{className:$(["text-xs text-gray-400 mb-4"]),children:["• Renders: ",t.count,"x"]})]})]})]}),a&&!u&&y("div",{className:$(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex relative"]),children:[y("button",{onClick:()=>{s(!1),localStorage.setItem("react-scan-tip-shown","false")},className:$(["absolute right-2 top-2 rounded-sm p-1 hover:bg-[#18181B]"]),children:y(Wu,{size:12})}),y("div",{className:$(["w-1 bg-[#d36cff]"])}),y("div",{className:$(["flex-1"]),children:[y("div",{className:$(["px-3 py-2 text-gray-100 text-xs font-semibold"]),children:"How to stop renders"}),y("div",{className:$(["px-3 pb-2 text-gray-400 text-[10px]"]),children:"Stop the following props, state and context from changing between renders, and wrap the component in React.memo if not already"})]})]}),u&&y("div",{className:$(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex"]),children:[y("div",{className:$(["w-1 bg-[#d36cff]"])}),y("div",{className:$(["flex-1"]),children:[y("div",{className:$(["px-3 py-2 text-gray-100 text-sm font-semibold"]),children:"No changes detected"}),y("div",{className:$(["px-3 pb-2 text-gray-400 text-xs"]),children:"This component would not of rendered if it was memoized"})]})]}),y("div",{className:$(["flex w-full"]),children:[y("div",{className:$(["flex flex-col border border-[#27272A] rounded-l-sm overflow-hidden w-1/3"]),children:[y("div",{className:$(["text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Props"}),t.changes.props.length>0?t.changes.props.toSorted((d,f)=>f.count-d.count).map(d=>y("div",{className:$(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[y("span",{className:$(["text-white "]),children:d.name}),y("div",{className:$([" text-[8px]  text-[#d36cff] pl-1 py-1 "]),children:[d.count,"/",t.count,"x"]})]},d.name)):y("div",{className:$(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),y("div",{className:$(["flex flex-col border border-[#27272A] border-l-0 overflow-hidden w-1/3"]),children:[y("div",{className:$([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed State"}),t.changes.state.length>0?t.changes.state.toSorted((d,f)=>f.count-d.count).map(d=>y("div",{className:$(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[y("span",{className:$(["text-white "]),children:["index ",d.index]}),y("div",{className:$(["rounded-full  text-[#d36cff] pl-1 py-1 text-[8px]"]),children:[d.count,"/",t.count,"x"]})]},d.index)):y("div",{className:$(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),y("div",{className:$(["flex flex-col border border-[#27272A] border-l-0 rounded-r-sm overflow-hidden w-1/3"]),children:[y("div",{className:$([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Context"}),t.changes.context.length>0?t.changes.context.toSorted((d,f)=>f.count-d.count).map(d=>y("div",{className:$(["flex flex-col justify-between items-center border-t  border-[#27272A] px-1 py-1 bg-[#0A0A0A] text-[10px] overflow-x-auto"]),children:[y("span",{className:$(["text-white "]),children:d.name}),y("div",{className:$(["rounded-full text-[#d36cff] pl-1 py-1 text-[8px] text-wrap"]),children:[d.count,"/",t.count,"x"]})]},d.name)):y("div",{className:$(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A] py-2"]),children:"No changes"})]})]})]})},wA=()=>{const{notificationState:e,setNotificationState:t}=Mn(),[r,a]=Ce("..."),s=he(null);if(Ee(()=>{const l=setInterval(()=>{a(u=>u==="..."?"":u+".")},500);return()=>clearInterval(l)},[]),!e.selectedEvent)return y("div",{ref:s,className:$(["h-full w-full flex flex-col items-center justify-center relative py-2 px-4"]),children:[y("div",{className:$(["p-2 flex justify-center items-center border-[#27272A] absolute top-0 right-0"]),children:y("button",{onClick:()=>{nt.value={view:"none"}},children:y(Wu,{size:18,className:"text-[#6F6F78]"})})}),y("div",{className:$(["flex flex-col items-start pt-5 bg-[#0A0A0A] p-5 rounded-sm max-w-md"," shadow-lg"]),children:y("div",{className:$(["flex flex-col items-start gap-y-4"]),children:[y("div",{className:$(["flex items-center"]),children:y("span",{className:$(["text-zinc-400 font-medium text-[17px]"]),children:["Scanning for slowdowns",r]})}),e.events.length!==0&&y("p",{className:$(["text-xs"]),children:["Click on an item in the"," ",y("span",{className:$(["text-purple-400"]),children:"History"})," list to get started"]}),y("p",{className:$(["text-zinc-600 text-xs"]),children:"You don't need to keep this panel open for React Scan to record slowdowns"}),y("p",{className:$(["text-zinc-600 text-xs"]),children:"Enable audio alerts to hear a delightful ding every time a large slowdown is recorded"}),y("button",{onClick:()=>{if(e.audioNotificationsOptions.enabled){t(u=>{var d,f;return((d=u.audioNotificationsOptions.audioContext)==null?void 0:d.state)!=="closed"&&((f=u.audioNotificationsOptions.audioContext)==null||f.close()),localStorage.setItem("react-scan-notifications-audio","false"),{...u,audioNotificationsOptions:{audioContext:null,enabled:!1}}});return}localStorage.setItem("react-scan-notifications-audio","true");const l=new AudioContext;ag(l),t(u=>({...u,audioNotificationsOptions:{enabled:!0,audioContext:l}}))},className:$(["px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-sm w-full"," text-sm flex items-center gap-x-2 justify-center"]),children:e.audioNotificationsOptions.enabled?y(Re,{children:y("span",{className:"flex items-center gap-x-1",children:"Disable audio alerts"})}):y(Re,{children:y("span",{className:"flex items-center gap-x-1",children:"Enable audio alerts"})})})]})})]});switch(e.route){case"render-visualization":return y(su,{children:y(vA,{selectedEvent:e.selectedEvent})});case"render-explanation":{if(!e.selectedFiber)throw new Error("Invariant: must have selected fiber when viewing render explanation");return y(su,{children:y(bA,{selectedFiber:e.selectedFiber,selectedEvent:e.selectedEvent})})}case"other-visualization":return y(su,{children:y("div",{className:$(["flex w-full h-full flex-col overflow-y-auto"]),id:"overview-scroll-container",children:y(dA,{selectedEvent:e.selectedEvent})})});case"optimize":return y(su,{children:y(cA,{selectedEvent:e.selectedEvent})})}e.route},su=({children:e})=>{const{notificationState:t}=Mn();if(!t.selectedEvent)throw new Error("Invariant: d must have selected event when viewing render explanation");return y("div",{className:$(["w-full h-full flex flex-col gap-y-2"]),children:[y("div",{className:$(["h-[50px] w-full"]),children:y(nA,{selectedEvent:t.selectedEvent})}),y("div",{className:$(["h-calc(100%-50px) flex flex-col overflow-y-auto px-3"]),children:e})]})},xA=({selectedEvent:e})=>{const t=jl(e);switch(e.kind){case"interaction":return y("div",{className:$(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:y("div",{className:$(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[y("div",{className:$(["flex items-center gap-x-2 "]),children:[y("span",{className:$(["text-[#5a5a5a] mr-0.5"]),children:e.type==="click"?"Clicked ":"Typed in "}),y("span",{children:_l(e.componentPath)}),y("div",{className:$(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",t==="low"&&"bg-green-500/50",t==="needs-improvement"&&"bg-[#b77116]",t==="high"&&"bg-[#b94040]"]),children:[jt(e.timing).toFixed(0),"ms processing time"]})]}),y("div",{className:$(["flex items-center gap-x-2  justify-end ml-auto"]),children:y("div",{className:$(["p-2 flex justify-center items-center border-[#27272A]"]),children:y("button",{onClick:()=>{nt.value={view:"none"}},title:"Close",children:y(Wu,{size:18,className:"text-[#6F6F78]"})})})})]})});case"dropped-frames":return y("div",{className:$(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:y("div",{className:$(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[y("div",{className:$(["flex items-center gap-x-2 "]),children:["FPS Drop",y("div",{className:$(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",t==="low"&&"bg-green-500/50",t==="needs-improvement"&&"bg-[#b77116]",t==="high"&&"bg-[#b94040]"]),children:["dropped to ",e.fps," FPS"]})]}),y("div",{className:$(["flex items-center gap-x-2 w-2/4 justify-end ml-auto"]),children:y("div",{className:$(["p-2 flex justify-center items-center border-[#27272A]"]),children:y("button",{onClick:()=>{nt.value={view:"none"}},children:y(Wu,{size:18,className:"text-[#6F6F78]"})})})})]})})}},_A=({flashingItemsCount:e,totalEvents:t})=>{const[r,a]=Ce(!1),s=he(0),l=he(0);return Ee(()=>{if(s.current>=t)return;const u=Date.now(),d=250,f=u-l.current;if(f>=d){a(!1);const h=setTimeout(()=>{s.current=t,l.current=Date.now(),a(!0),setTimeout(()=>{a(!1)},2e3)},50);return()=>clearTimeout(h)}else{const h=d-f,v=setTimeout(()=>{a(!1),setTimeout(()=>{s.current=t,l.current=Date.now(),a(!0),setTimeout(()=>{a(!1)},2e3)},50)},h);return()=>clearTimeout(v)}},[e]),r},Vw=({item:e,shouldFlash:t})=>{var d;const[r,a]=Ce(!1),s=e.events.map(jl).reduce((f,h)=>{switch(h){case"high":return"high";case"needs-improvement":return f==="high"?"high":"needs-improvement";case"low":return f}},"low"),l=e.events.reduce((f,h)=>t(h.id)?f+1:f,0),u=_A({flashingItemsCount:l,totalEvents:e.events.length});return y("div",{className:$(["flex flex-col gap-y-0.5"]),children:[y("button",{onClick:()=>a(f=>!f),className:$(["pl-2 py-1.5  text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",u&&!r&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[y("div",{className:$(["w-4/5 flex items-center justify-start h-full text-xs truncate gap-x-1.5"]),children:[y("span",{className:$(["min-w-fit"]),children:y(j2,{className:$(["text-[#A1A1AA] transition-transform",r?"rotate-90":""]),size:14},`chevron-${e.timestamp}`)}),y("span",{className:$(["text-xs"]),children:e.kind==="collapsed-frame-drops"?"FPS Drops":_l(((d=e.events.at(0))==null?void 0:d.componentPath)??[])})]}),y("div",{className:$(["ml-auto min-w-fit flex justify-end items-center"]),children:y("div",{style:{lineHeight:"10px"},className:$(["w-fit flex items-center text-[10px] justify-center h-full text-white px-1 py-1 rounded-sm font-semibold",s==="low"&&"bg-green-500/60",s==="needs-improvement"&&"bg-[#b77116] text-[10px]",s==="high"&&"bg-[#b94040]"]),children:["x",e.events.length]})})]}),r&&y(SA,{children:e.events.toSorted((f,h)=>h.timestamp-f.timestamp).map(f=>y(U2,{event:f,shouldFlash:t(f.id)}))})]})},SA=({children:e})=>y("div",{className:"relative pl-6 flex flex-col gap-y-1",children:[y("div",{className:"absolute left-3 top-0 bottom-0 w-px bg-[#27272A]"}),e]}),TA=e=>{const t=he([]),[r,a]=Ce(new Set),s=he(!0);return Ee(()=>{if(s.current){s.current=!1,t.current=e;return}const l=new Set(e.map(f=>f.id)),u=new Set(t.current.map(f=>f.id)),d=new Set;l.forEach(f=>{u.has(f)||d.add(f)}),d.size>0&&(a(d),setTimeout(()=>{a(new Set)},2e3)),t.current=e},[e]),l=>r.has(l)},kA=({shouldFlash:e})=>{const[t,r]=Ce(e);return Ee(()=>{if(e){r(!0);const a=setTimeout(()=>{r(!1)},1e3);return()=>clearTimeout(a)}},[e]),t},U2=({event:e,shouldFlash:t})=>{var u,d;const{notificationState:r,setNotificationState:a}=Mn(),s=jl(e),l=kA({shouldFlash:t});switch(e.kind){case"interaction":return y("button",{onClick:()=>{a(f=>({...f,selectedEvent:e,route:"render-visualization",selectedFiber:null}))},className:$(["pl-2 py-1.5  text-sm flex w-full items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",e.id===((u=r.selectedEvent)==null?void 0:u.id)&&"bg-[#18181B]",l&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[y("div",{className:$(["w-4/5 flex items-center justify-start h-full gap-x-1.5"]),children:[y("span",{className:$(["min-w-fit text-xs"]),children:tr(()=>{switch(e.type){case"click":return y(Z4,{size:14});case"keyboard":return y(J4,{size:14})}})}),y("span",{className:$(["text-xs pr-1 truncate"]),children:_l(e.componentPath)})]}),y("div",{className:$([" min-w-fit flex justify-end items-center ml-auto"]),children:y("div",{style:{lineHeight:"10px"},className:$(["gap-x-0.5 w-fit flex items-end justify-center h-full text-white px-1 py-1 rounded-sm font-semibold text-[10px]",s==="low"&&"bg-green-500/50",s==="needs-improvement"&&"bg-[#b77116] text-[10px]",s==="high"&&"bg-[#b94040]"]),children:y("div",{style:{lineHeight:"10px"},className:$(["text-[10px] text-white flex items-end"]),children:[jt(e.timing).toFixed(0),"ms"]})})})]});case"dropped-frames":return y("button",{onClick:()=>{a(f=>({...f,selectedEvent:e,route:"render-visualization",selectedFiber:null}))},className:$(["pl-2 py-1.5  w-full text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",e.id===((d=r.selectedEvent)==null?void 0:d.id)&&"bg-[#18181B]",l&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[y("div",{className:$(["w-4/5 flex items-center justify-start h-full text-xs truncate"]),children:[y(tA,{size:14,className:"mr-1.5"})," FPS Drop"]}),y("div",{className:$([" min-w-fit flex justify-end items-center ml-auto"]),children:y("div",{style:{lineHeight:"10px"},className:$(["w-fit flex items-center justify-center h-full text-white px-1 py-1 rounded-sm text-[10px] font-bold",s==="low"&&"bg-green-500/60",s==="needs-improvement"&&"bg-[#b77116] text-[10px]",s==="high"&&"bg-[#b94040]"]),children:[e.fps," FPS"]})})]})}},EA=e=>e.reduce((r,a)=>{const s=r.at(-1);if(!s)return[{kind:"single",event:a,timestamp:a.timestamp}];switch(s.kind){case"collapsed-keyboard":return a.kind==="interaction"&&a.type==="keyboard"&&a.componentPath.join("-")===s.events[0].componentPath.join("-")?[...r.filter(u=>u!==s),{kind:"collapsed-keyboard",events:[...s.events,a],timestamp:Math.max(...[...s.events,a].map(u=>u.timestamp))}]:[...r,{kind:"single",event:a,timestamp:a.timestamp}];case"single":return s.event.kind==="interaction"&&s.event.type==="keyboard"&&a.kind==="interaction"&&a.type==="keyboard"&&s.event.componentPath.join("-")===a.componentPath.join("-")?[...r.filter(u=>u!==s),{kind:"collapsed-keyboard",events:[s.event,a],timestamp:Math.max(s.event.timestamp,a.timestamp)}]:s.event.kind==="dropped-frames"&&a.kind==="dropped-frames"?[...r.filter(u=>u!==s),{kind:"collapsed-frame-drops",events:[s.event,a],timestamp:Math.max(s.event.timestamp,a.timestamp)}]:[...r,{kind:"single",event:a,timestamp:a.timestamp}];case"collapsed-frame-drops":return a.kind==="dropped-frames"?[...r.filter(u=>u!==s),{kind:"collapsed-frame-drops",events:[...s.events,a],timestamp:Math.max(...[...s.events,a].map(u=>u.timestamp))}]:[...r,{kind:"single",event:a,timestamp:a.timestamp}]}},[]),$2=(e=150)=>{const{notificationState:t}=Mn(),[r,a]=Ce(t.events);return Ee(()=>{setTimeout(()=>{a(t.events)},e)},[t.events]),[r,a]},CA=()=>{const{notificationState:e,setNotificationState:t}=Mn(),r=TA(e.events),[a,s]=$2(),l=EA(a).toSorted((u,d)=>d.timestamp-u.timestamp);return y("div",{className:$(["w-full h-full gap-y-2 flex flex-col border-r border-[#27272A] overflow-y-auto"]),children:[y("div",{className:$(["text-sm text-[#65656D] pl-3 pr-1 w-full flex items-center justify-between"]),children:[y("span",{children:"History"}),y(D2,{wrapperProps:{className:"h-full flex items-center justify-center ml-auto"},triggerContent:y("button",{className:$(["hover:bg-[#18181B] rounded-full p-2"]),title:"Clear all events",onClick:()=>{xl.getState().actions.clear(),t(u=>({...u,selectedEvent:null,selectedFiber:null,route:u.route==="other-visualization"?"other-visualization":"render-visualization"})),s([])},children:y(eA,{className:$([""]),size:16})}),children:y("div",{className:$(["w-full flex justify-center"]),children:"Clear all events"})})]}),y("div",{className:$(["flex flex-col px-1 gap-y-1"]),children:[l.length===0&&y("div",{className:$(["flex items-center justify-center text-zinc-500 text-sm py-4"]),children:"No Events"}),l.map(u=>tr(()=>{switch(u.kind){case"collapsed-keyboard":return y(Vw,{shouldFlash:r,item:u});case"single":return y(U2,{event:u.event,shouldFlash:r(u.event.id)},u.event.id);case"collapsed-frame-drops":return y(Vw,{shouldFlash:r,item:u})}}))]})]})},AA=e=>Object.values(e).map(r=>({id:Wn(),totalTime:r.nodeInfo.reduce((a,s)=>a+s.selfTime,0),count:r.nodeInfo.length,name:r.nodeInfo[0].name,deletedAll:!1,parents:r.parents,hasMemoCache:r.hasMemoCache,wasFiberRenderMount:r.wasFiberRenderMount,elements:r.nodeInfo.map(a=>a.element),changes:{context:r.changes.fiberContext.current.filter(a=>r.changes.fiberContext.changesCounts.get(a.name)).map(a=>({name:String(a.name),count:r.changes.fiberContext.changesCounts.get(a.name)??0})),props:r.changes.fiberProps.current.filter(a=>r.changes.fiberProps.changesCounts.get(a.name)).map(a=>({name:String(a.name),count:r.changes.fiberProps.changesCounts.get(a.name)??0})),state:r.changes.fiberState.current.filter(a=>r.changes.fiberState.changesCounts.get(Number(a.name))).map(a=>({index:a.name,count:r.changes.fiberState.changesCounts.get(Number(a.name))??0}))}})),MA=e=>{Ee(()=>{const r=setInterval(()=>{e.forEach(a=>{a.groupedFiberRenders&&a.groupedFiberRenders.forEach(s=>{if(s.deletedAll)return;if(!s.elements||s.elements.length===0){s.deletedAll=!0;return}const l=s.elements.length;s.elements=s.elements.filter(u=>u&&u.isConnected),s.elements.length===0&&l>0&&(s.deletedAll=!0)})})},5e3);return()=>{clearInterval(r)}},[e])},L2=()=>{const e=F4(),t=[];return MA(t),e.state.events.forEach(r=>{const a=r.kind==="interaction"?r.data.meta.detailedTiming.fiberRenders:r.data.meta.fiberRenders,s=AA(a),l=s.reduce((u,d)=>u+d.totalTime,0);switch(r.kind){case"interaction":{const{commitEnd:u,jsEndDetail:d,interactionStartDetail:f,rafStart:h}=r.data.meta.detailedTiming,v=Math.max(0,d-f-l),g=Math.max(r.data.meta.latency-(u-f),0);t.push({componentPath:r.data.meta.detailedTiming.componentPath,groupedFiberRenders:s,id:r.id,kind:"interaction",memory:null,timestamp:r.data.startAt,type:r.data.meta.detailedTiming.interactionType==="keyboard"?"keyboard":"click",timing:{renderTime:l,kind:"interaction",otherJSTime:v,framePreparation:h-d,frameConstruction:u-h,frameDraw:g}});return}case"long-render":{t.push({kind:"dropped-frames",id:r.id,memory:null,timing:{kind:"dropped-frames",renderTime:l,otherTime:r.data.meta.latency},groupedFiberRenders:s,timestamp:r.data.startAt,fps:r.data.meta.fps});return}}}),t},OA=1e3,NA=()=>{const{notificationState:e,setNotificationState:t}=Mn(),r=he(null),a=he(null),s=he(0),[l]=$2(),u=l.filter(d=>jl(d)==="high").length;return Ee(()=>{const d=localStorage.getItem("react-scan-notifications-audio");if(d!=="false"&&d!=="true"){localStorage.setItem("react-scan-notifications-audio","false");return}if(d!=="false"){t(h=>h.audioNotificationsOptions.enabled?h:{...h,audioNotificationsOptions:{enabled:!0,audioContext:new AudioContext}});return}},[]),Ee(()=>{const{audioNotificationsOptions:d}=e;if(!d.enabled||u===0||r.current&&r.current>=u)return;a.current&&clearTimeout(a.current);const h=Date.now()-s.current,v=Math.max(0,OA-h);a.current=setTimeout(()=>{ag(d.audioContext),r.current=u,s.current=Date.now(),a.current=null},v)},[u]),Ee(()=>{u===0&&(r.current=null)},[u]),Ee(()=>()=>{a.current&&clearTimeout(a.current)},[]),null},zA=ig((e,t)=>{const r=L2(),[a,s]=Ce({detailsExpanded:!1,events:r,filterBy:"latest",moreInfoExpanded:!1,route:"render-visualization",selectedEvent:r.toSorted((l,u)=>l.timestamp-u.timestamp).at(-1)??null,selectedFiber:null,routeMessage:null,audioNotificationsOptions:{enabled:!1,audioContext:null}});return a.events=r,y(z2.Provider,{value:{notificationState:a,setNotificationState:s,setRoute:({route:l,routeMessage:u})=>{s(d=>{const f={...d,route:l,routeMessage:u};switch(l){case"render-visualization":return Js(),{...f,selectedFiber:null};case"optimize":return Js(),{...f,selectedFiber:null};case"other-visualization":return Js(),{...f,selectedFiber:null};case"render-explanation":return Js(),f}})}},children:[y(NA,{}),y(jA,{ref:t})]})}),jA=ig((e,t)=>{var a;const{notificationState:r}=Mn();return y("div",{ref:t,className:$(["h-full w-full flex flex-col"]),children:[r.selectedEvent&&y("div",{className:$(["w-full h-[48px] flex flex-col",r.moreInfoExpanded&&"h-[235px]",r.moreInfoExpanded&&r.selectedEvent.kind==="dropped-frames"&&"h-[150px]"]),children:[y(xA,{selectedEvent:r.selectedEvent}),r.moreInfoExpanded&&y(DA,{})]}),y("div",{className:$(["flex ",r.selectedEvent?"h-[calc(100%-48px)]":"h-full",r.moreInfoExpanded&&"h-[calc(100%-200px)]",r.moreInfoExpanded&&((a=r.selectedEvent)==null?void 0:a.kind)==="dropped-frames"&&"h-[calc(100%-150px)]"]),children:[y("div",{className:$(["h-full min-w-[200px]"]),children:y(CA,{})}),y("div",{className:$(["w-[calc(100%-200px)] h-full overflow-y-auto"]),children:y(wA,{})})]})]})}),DA=()=>{const{notificationState:e}=Mn();if(!e.selectedEvent)throw new Error("Invariant must have selected event for more info");const t=e.selectedEvent;return y("div",{className:$(["px-4 py-2 border-b border-[#27272A] bg-[#18181B]/50 h-[calc(100%-40px)]",t.kind==="dropped-frames"&&"h-[calc(100%-25px)]"]),children:y("div",{className:$(["flex flex-col gap-y-4 h-full"]),children:tr(()=>{switch(t.kind){case"interaction":return y(Re,{children:[y("div",{className:$(["flex items-center gap-x-3"]),children:[y("span",{className:"text-[#6F6F78] text-xs font-medium",children:t.type==="click"?"Clicked component location":"Typed in component location"}),y("div",{className:"font-mono text-[#E4E4E7] flex items-center bg-[#27272A] pl-2 py-1 rounded-sm overflow-x-auto",children:t.componentPath.toReversed().map((r,a)=>y(Re,{children:[y("span",{style:{lineHeight:"14px"},className:"text-[10px] whitespace-nowrap",children:r},r),a<t.componentPath.length-1&&y("span",{className:"text-[#6F6F78] mx-0.5",children:"‹"})]}))})]}),y("div",{className:$(["flex items-center gap-x-3"]),children:[y("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),y("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[jt(t.timing).toFixed(0),"ms"]})]}),y("div",{className:$(["flex items-center gap-x-3"]),children:[y("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),y("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]});case"dropped-frames":return y(Re,{children:[y("div",{className:$(["flex items-center gap-x-3"]),children:[y("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),y("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[jt(t.timing).toFixed(0),"ms"]})]}),y("div",{className:$(["flex items-center gap-x-3"]),children:[y("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),y("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]})}})})})},RA=sg(()=>{var b;const e=L2(),[t,r]=Ce(e);Ee(()=>{const w=setTimeout(()=>{r(e)},600);return()=>{clearTimeout(w)}},[e]);const a=ie.inspectState,s=a.value.kind==="inspecting",l=a.value.kind==="focused",[u,d]=Ce([]),f=vt(()=>{switch(ie.inspectState.value.kind){case"inspecting":{nt.value={view:"none"},ie.inspectState.value={kind:"inspect-off"};return}case"focused":{nt.value={view:"inspector"},ie.inspectState.value={kind:"inspecting",hoveredDomElement:null};return}case"inspect-off":{nt.value={view:"none"},ie.inspectState.value={kind:"inspecting",hoveredDomElement:null};return}case"uninitialized":return}},[]),h=vt(w=>{if(w.preventDefault(),w.stopPropagation(),!Ue.instrumentation)return;const _=!Ue.instrumentation.isPaused.value;Ue.instrumentation.isPaused.value=_;const T=Zr("react-scan-options");an("react-scan-options",{...T,enabled:!_})},[]);bl(()=>{ie.inspectState.value.kind==="uninitialized"&&(ie.inspectState.value={kind:"inspect-off"})});let v=null,g="#999";return s?(v=y(ft,{name:"icon-inspect"}),g="#8e61e3"):l?(v=y(ft,{name:"icon-focus"}),g="#8e61e3"):(v=y(ft,{name:"icon-inspect"}),g="#999"),Jm(()=>{if(nt.value.view!=="notifications")return;const w=new Set(e.map(_=>_.id));d([...w.values()])},[e.length,nt.value.view]),y("div",{className:"flex max-h-9 min-h-9 flex-1 items-stretch overflow-hidden",children:[y("div",{className:"h-full flex items-center min-w-fit",children:y("button",{type:"button",id:"react-scan-inspect-element",title:"Inspect element",onClick:f,className:"button flex items-center justify-center h-full w-full pl-3 pr-2.5",style:{color:g},children:v})}),y("div",{className:"h-full flex items-center justify-center",children:y("button",{type:"button",id:"react-scan-notifications",title:"Notifications",onClick:()=>{switch(ie.inspectState.value.kind!=="inspect-off"&&(ie.inspectState.value={kind:"inspect-off"}),nt.value.view){case"inspector":{ie.inspectState.value={kind:"inspect-off"};const w=new Set(e.map(_=>_.id));d([...w.values()]),nt.value={view:"notifications"};return}case"notifications":{nt.value={view:"none"};return}case"none":{const w=new Set(e.map(_=>_.id));d([...w.values()]),nt.value={view:"notifications"};return}}},className:"button flex items-center justify-center h-full pl-2.5 pr-2.5",style:{color:g},children:y(V4,{events:t.filter(w=>!u.includes(w.id)).map(w=>jl(w)==="high"),size:16,className:$(["text-[#999]",nt.value.view==="notifications"&&"text-[#8E61E3]"])})})}),y(_4,{checked:!((b=Ue.instrumentation)!=null&&b.isPaused.value),onChange:h,className:"place-self-center",title:"Outline Re-renders"}),Ue.options.value.showFPS&&y(T4,{})]})}),UA=Ca(()=>ie.inspectState.value.kind==="inspecting"),$A=Ca(()=>$("relative","flex-1","flex flex-col","rounded-t-lg","overflow-hidden","opacity-100","transition-[opacity]",UA.value&&"opacity-0 duration-0 delay-0")),LA=Ca(()=>nt.value.view==="inspector"),HA=Ca(()=>nt.value.view==="notifications"),IA=()=>y("div",{className:$("flex flex-1 flex-col","overflow-hidden z-10","rounded-lg","bg-black","opacity-100","transition-[border-radius]","peer-hover/left:rounded-l-none","peer-hover/right:rounded-r-none","peer-hover/top:rounded-t-none","peer-hover/bottom:rounded-b-none"),children:[y("div",{className:$A,children:[y(x4,{}),y("div",{className:$("relative","flex-1 flex","text-white","bg-[#0A0A0A]","transition-opacity delay-150","overflow-hidden","border-b border-[#222]"),children:[y(Qw,{isOpen:LA,children:y(C3,{})}),y(Qw,{isOpen:HA,children:y(zA,{})})]})]}),y(RA,{})]}),Qw=({isOpen:e,children:t})=>y("div",{className:$("flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",e.value&&"opacity-100 delay-150 pointer-events-auto"),children:y("div",{className:"absolute inset-0 flex",children:t})}),lu=(e,t,r)=>e+(t-e)*r,bp={frameInterval:1e3/60,speeds:{fast:.51,slow:.1,off:0}},yo=Sr&&window.devicePixelRatio||1,qA=()=>{const e=he(null),t=he(null),r=he(null),a=he(null),s=he(null),l=he(0),u=he(),d=he(new Map),f=he(!1),h=he(0),v=(A,D,L,Q)=>{A.save(),A.strokeStyle="white",A.fillStyle="white",A.lineWidth=1.5;const ee=Q*.6,N=Q*.5,Y=D+(Q-ee)/2,Z=L;A.beginPath(),A.arc(Y+ee/2,Z+N/2,ee/2,Math.PI,0,!1),A.stroke();const te=Q*.8,re=Q*.5,le=D+(Q-te)/2,ce=L+N/2;A.fillRect(le,ce,te,re),A.restore()},g=(A,D,L,Q)=>{if(!Q)return;const ee=24,N=8,Z=((Q==null?void 0:Q.type)&&zt(Q.type))??"Unknown";A.save(),A.font="12px system-ui, -apple-system, sans-serif";const re=A.measureText(Z).width,le=L==="locked"?14:0,ce=L==="locked"?6:0,be=re+N*2+le+ce,ye=D.left,ct=D.top-ee-4;if(A.fillStyle="rgb(37, 37, 38, .75)",A.beginPath(),A.roundRect(ye,ct,be,ee,3),A.fill(),L==="locked"){const ni=ye+N,Ii=ct+(ee-le)/2+2;v(A,ni,Ii,le),a.current={x:ni,y:Ii,width:le,height:le}}else a.current=null;A.fillStyle="white",A.textBaseline="middle";const Xn=ye+N+(L==="locked"?le+ce:0);A.fillText(Z,Xn,ct+ee/2),A.restore()},b=(A,D,L,Q)=>{if(!r.current)return;const ee=r.current;D.clearRect(0,0,A.width,A.height),D.strokeStyle="rgba(142, 97, 227, 0.5)",D.fillStyle="rgba(173, 97, 230, 0.10)",L==="locked"?D.setLineDash([]):D.setLineDash([4]),D.lineWidth=1,D.fillRect(ee.left,ee.top,ee.width,ee.height),D.strokeRect(ee.left,ee.top,ee.width,ee.height),g(D,ee,L,Q)},w=(A,D,L,Q,ee,N)=>{const Y=Ue.options.value.animationSpeed,Z=bp.speeds[Y]??bp.speeds.off,te=re=>{if(re-h.current<bp.frameInterval){l.current=requestAnimationFrame(te);return}if(h.current=re,!r.current){cancelAnimationFrame(l.current);return}r.current={left:lu(r.current.left,L.left,Z),top:lu(r.current.top,L.top,Z),width:lu(r.current.width,L.width,Z),height:lu(r.current.height,L.height,Z)},b(A,D,Q,ee),Math.abs(r.current.left-L.left)>.1||Math.abs(r.current.top-L.top)>.1||Math.abs(r.current.width-L.width)>.1||Math.abs(r.current.height-L.height)>.1?l.current=requestAnimationFrame(te):(r.current=L,b(A,D,Q,ee),cancelAnimationFrame(l.current),D.restore())};cancelAnimationFrame(l.current),clearTimeout(u.current),l.current=requestAnimationFrame(te),u.current=setTimeout(()=>{cancelAnimationFrame(l.current),r.current=L,b(A,D,Q,ee),D.restore()},1e3)},_=(A,D,L,Q,ee)=>{if(D.save(),!r.current){r.current=L,b(A,D,Q,ee),D.restore();return}w(A,D,L,Q,ee)},T=async(A,D,L,Q)=>{if(!A||!D||!L)return;const{parentCompositeFiber:ee}=pa(A),N=await A3(A);!ee||!N||_(D,L,N,Q,ee)},k=()=>{for(const A of d.current.values())A==null||A()},S=A=>{const D=A.getContext("2d");D&&D.clearRect(0,0,A.width,A.height),r.current=null,a.current=null,s.current=null,A.classList.remove("fade-in"),f.current=!1},E=A=>{if(!e.current||f.current)return;const D=Q=>{!e.current||Q.propertyName!=="opacity"||!f.current||(e.current.removeEventListener("transitionend",D),S(e.current),A==null||A())},L=d.current.get("fade-out");L&&(L(),d.current.delete("fade-out")),e.current.addEventListener("transitionend",D),d.current.set("fade-out",()=>{var Q;(Q=e.current)==null||Q.removeEventListener("transitionend",D)}),f.current=!0,e.current.classList.remove("fade-in"),requestAnimationFrame(()=>{var Q;(Q=e.current)==null||Q.classList.add("fade-out")})},M=()=>{e.current&&(f.current=!1,e.current.classList.remove("fade-out"),requestAnimationFrame(()=>{var A;(A=e.current)==null||A.classList.add("fade-in")}))},z=A=>{A!==s.current&&(s.current=A,sm.has(A.tagName)?E():M(),ie.inspectState.value={kind:"inspecting",hoveredDomElement:A})},R=()=>{!r.current||!e.current||f.current||E()},F=c2(A=>{if(ie.inspectState.peek().kind!=="inspecting"||!t.current)return;t.current.style.pointerEvents="none";const L=document.elementFromPoint((A==null?void 0:A.clientX)??0,(A==null?void 0:A.clientY)??0);if(t.current.style.removeProperty("pointer-events"),clearTimeout(u.current),L&&L!==e.current){const{parentCompositeFiber:Q}=pa(L);if(Q){const ee=Yu(Q);if(ee){z(ee);return}}}R()},32),I=(A,D)=>{const L=a.current;if(!L)return!1;const Q=D.getBoundingClientRect(),ee=D.width/Q.width,N=D.height/Q.height,Y=(A.clientX-Q.left)*ee,Z=(A.clientY-Q.top)*N,te=Y/yo,re=Z/yo;return te>=L.x&&te<=L.x+L.width&&re>=L.y&&re<=L.y+L.height},J=A=>{A.kind==="focused"&&(ie.inspectState.value={kind:"inspecting",hoveredDomElement:A.focusedDomElement})},ne=A=>{var Z;const D=["react-scan-inspect-element","react-scan-power"];if(A.target instanceof HTMLElement&&D.includes(A.target.id))return;const L=(Z=s.current)==null?void 0:Z.tagName;if(L&&sm.has(L))return;A.preventDefault(),A.stopPropagation();const Q=s.current??document.elementFromPoint(A.clientX,A.clientY);if(!Q)return;const ee=A.composedPath().at(0);if(ee instanceof HTMLElement&&D.includes(ee.id)){const te=new MouseEvent(A.type,A);te.__reactScanSyntheticEvent=!0,ee.dispatchEvent(te);return}const{parentCompositeFiber:N}=pa(Q);if(!N)return;const Y=Yu(N);if(!Y){s.current=null,ie.inspectState.value={kind:"inspect-off"};return}ie.inspectState.value={kind:"focused",focusedDomElement:Y,fiber:N}},ge=A=>{if(A.__reactScanSyntheticEvent)return;const D=ie.inspectState.peek(),L=e.current;if(!(!L||!t.current)){if(I(A,L)){A.preventDefault(),A.stopPropagation(),J(D);return}D.kind==="inspecting"&&ne(A)}},fe=A=>{var Q;if(A.key!=="Escape")return;const D=ie.inspectState.peek();if(e.current&&((Q=document.activeElement)==null?void 0:Q.id)!=="react-scan-root"&&(nt.value={view:"none"},D.kind==="focused"||D.kind==="inspecting"))switch(A.preventDefault(),A.stopPropagation(),D.kind){case"focused":{M(),r.current=null,s.current=D.focusedDomElement,ie.inspectState.value={kind:"inspecting",hoveredDomElement:D.focusedDomElement};break}case"inspecting":{E(()=>{pd.value=!1,ie.inspectState.value={kind:"inspect-off"}});break}}},ae=(A,D,L)=>{var ee;(ee=d.current.get(A.kind))==null||ee(),t.current&&A.kind!=="inspecting"&&(t.current.style.pointerEvents="none"),l.current&&cancelAnimationFrame(l.current);let Q;switch(A.kind){case"inspect-off":E();return;case"inspecting":T(A.hoveredDomElement,D,L,"inspecting");break;case"focused":if(!A.focusedDomElement)return;s.current!==A.focusedDomElement&&(s.current=A.focusedDomElement),nt.value={view:"inspector"},T(A.focusedDomElement,D,L,"locked"),Q=ie.lastReportTime.subscribe(()=>{if(l.current&&r.current){const{parentCompositeFiber:N}=pa(A.focusedDomElement);N&&T(A.focusedDomElement,D,L,"locked")}}),Q&&d.current.set(A.kind,Q);break}},je=(A,D)=>{const L=A.getBoundingClientRect();A.width=L.width*yo,A.height=L.height*yo,D.scale(yo,yo),D.save()},Ie=()=>{const A=ie.inspectState.peek(),D=e.current;if(!D)return;const L=D==null?void 0:D.getContext("2d");L&&(cancelAnimationFrame(l.current),clearTimeout(u.current),je(D,L),r.current=null,A.kind==="focused"&&A.focusedDomElement?T(A.focusedDomElement,D,L,"locked"):A.kind==="inspecting"&&A.hoveredDomElement&&T(A.hoveredDomElement,D,L,"inspecting"))},Fe=A=>{const D=ie.inspectState.peek(),L=e.current;L&&(D.kind==="inspecting"||I(A,L))&&(A.preventDefault(),A.stopPropagation(),A.stopImmediatePropagation())};return Ee(()=>{const A=e.current;if(!A)return;const D=A==null?void 0:A.getContext("2d");if(!D)return;je(A,D);const L=ie.inspectState.subscribe(Q=>{ae(Q,A,D)});return window.addEventListener("scroll",Ie,{passive:!0}),window.addEventListener("resize",Ie,{passive:!0}),document.addEventListener("pointermove",F,{passive:!0,capture:!0}),document.addEventListener("pointerdown",Fe,{capture:!0}),document.addEventListener("click",ge,{capture:!0}),document.addEventListener("keydown",fe,{capture:!0}),()=>{k(),L(),window.removeEventListener("scroll",Ie),window.removeEventListener("resize",Ie),document.removeEventListener("pointermove",F,{capture:!0}),document.removeEventListener("click",ge,{capture:!0}),document.removeEventListener("pointerdown",Fe,{capture:!0}),document.removeEventListener("keydown",fe,{capture:!0}),l.current&&cancelAnimationFrame(l.current),clearTimeout(u.current)}},[]),y(Re,{children:[y("div",{ref:t,className:$("fixed top-0 left-0 w-screen h-screen","z-[214748365]"),style:{pointerEvents:"none"}}),y("canvas",{ref:e,dir:"ltr",className:$("react-scan-inspector-overlay","fixed top-0 left-0 w-screen h-screen","pointer-events-none","z-[214748367]")})]})},FA=class{constructor(e,t){this.width=e,this.height=t,this.maxWidth=e-xe*2,this.maxHeight=t-xe*2}rightEdge(e){return this.width-e-xe}bottomEdge(e){return this.height-e-xe}isFullWidth(e){return e>=this.maxWidth}isFullHeight(e){return e>=this.maxHeight}},bo,Sl=()=>{const e=window.innerWidth,t=window.innerHeight;return bo&&bo.width===e&&bo.height===t||(bo=new FA(e,t)),bo},BA=(e,t,r,a,s)=>{if(r){if(e==="top-left")return"bottom-right";if(e==="top-right")return"bottom-left";if(e==="bottom-left")return"top-right";if(e==="bottom-right")return"top-left";const[l,u]=t.split("-");if(e==="left")return`${l}-right`;if(e==="right")return`${l}-left`;if(e==="top")return`bottom-${u}`;if(e==="bottom")return`top-${u}`}if(a){if(e==="left")return`${t.split("-")[0]}-right`;if(e==="right")return`${t.split("-")[0]}-left`}if(s){if(e==="top")return`bottom-${t.split("-")[1]}`;if(e==="bottom")return`top-${t.split("-")[1]}`}return t},cl=(e,t,r)=>{const a=getComputedStyle(document.body).direction==="rtl",s=window.innerWidth,l=window.innerHeight,u=t===kt.width,d=u?t:Math.min(t,s-xe*2),f=u?r:Math.min(r,l-xe*2);let h,v,g=xe,b=s-d-xe,w=xe,_=l-f-xe;switch(e){case"top-right":h=a?-g:b,v=w;break;case"bottom-right":h=a?-g:b,v=_;break;case"bottom-left":h=a?-b:g,v=_;break;case"top-left":h=a?-b:g,v=w;break;default:h=g,v=w;break}return u&&(a?h=Math.min(-g,Math.max(h,-b)):h=Math.max(g,Math.min(h,b)),v=Math.max(w,Math.min(v,_))),{x:h,y:v}},PA=(e,t)=>{const[r,a]=t.split("-");return e!==r&&e!==a},YA=(e,t,r,a)=>r&&a?!0:!r&&!a?PA(e,t):r?e!==t.split("-")[0]:a?e!==t.split("-")[1]:!1,cu=(e,t,r)=>{const a=r?kt.width:kt.initialHeight,s=r?Sl().maxWidth:Sl().maxHeight,l=e+t;return Math.min(Math.max(a,l),s)},XA=(e,t,r,a,s)=>{const l=getComputedStyle(document.body).direction==="rtl",u=window.innerWidth-xe*2,d=window.innerHeight-xe*2;let f=t.width,h=t.height,v=r.x,g=r.y;if(l&&e.includes("right")){const k=-r.x+t.width-xe,S=Math.min(t.width+a,k);f=Math.min(u,Math.max(kt.width,S)),v=r.x+(f-t.width)}if(l&&e.includes("left")){const k=window.innerWidth-r.x-xe,S=Math.min(t.width-a,k);f=Math.min(u,Math.max(kt.width,S))}if(!l&&e.includes("right")){const k=window.innerWidth-r.x-xe,S=Math.min(t.width+a,k);f=Math.min(u,Math.max(kt.width,S))}if(!l&&e.includes("left")){const k=r.x+t.width-xe,S=Math.min(t.width-a,k);f=Math.min(u,Math.max(kt.width,S)),v=r.x-(f-t.width)}if(e.includes("bottom")){const k=window.innerHeight-r.y-xe,S=Math.min(t.height+s,k);h=Math.min(d,Math.max(kt.initialHeight,S))}if(e.includes("top")){const k=r.y+t.height-xe,S=Math.min(t.height-s,k);h=Math.min(d,Math.max(kt.initialHeight,S)),g=r.y-(h-t.height)}let b=xe,w=window.innerWidth-xe-f,_=xe,T=window.innerHeight-xe-h;return l?v=Math.min(-b,Math.max(v,-w)):v=Math.max(b,Math.min(v,w)),g=Math.max(_,Math.min(g,T)),{newSize:{width:f,height:h},newPosition:{x:v,y:g}}},GA=e=>{const t=Sl(),r={"top-left":Math.hypot(e.x,e.y),"top-right":Math.hypot(t.maxWidth-e.x,e.y),"bottom-left":Math.hypot(e.x,t.maxHeight-e.y),"bottom-right":Math.hypot(t.maxWidth-e.x,t.maxHeight-e.y)};let a="top-left";for(const s in r)r[s]<r[a]&&(a=s);return a},VA=(e,t,r,a,s=100)=>{const l=r!==void 0?e-r:0,u=a!==void 0?t-a:0,d=window.innerWidth/2,f=window.innerHeight/2,h=l>s,v=l<-s,g=u>s,b=u<-s;if(h||v){const w=t>f;return h?w?"bottom-right":"top-right":w?"bottom-left":"top-left"}if(g||b){const w=e>d;return g?w?"bottom-right":"bottom-left":w?"top-right":"top-left"}return e>d?t>f?"bottom-right":"top-right":t>f?"bottom-left":"top-left"},uu=({position:e})=>{const t=he(null),r=he(null),a=he(null),s=he(null);Ee(()=>{const d=t.current;if(!d)return;const f=()=>{d.classList.remove("pointer-events-none");const g=ie.inspectState.value.kind==="focused",b=nt.value.view!=="none";(g||b)&&YA(e,se.value.corner,se.value.dimensions.isFullWidth,se.value.dimensions.isFullHeight)?d.classList.remove("hidden","pointer-events-none","opacity-0"):d.classList.add("hidden","pointer-events-none","opacity-0")},h=se.subscribe(g=>{r.current!==null&&a.current!==null&&s.current!==null&&g.dimensions.width===r.current&&g.dimensions.height===a.current&&g.corner===s.current||(f(),r.current=g.dimensions.width,a.current=g.dimensions.height,s.current=g.corner)}),v=ie.inspectState.subscribe(()=>{f()});return()=>{h(),v(),r.current=null,a.current=null,s.current=null}},[]);const l=vt(d=>{d.preventDefault(),d.stopPropagation();const f=rm.value;if(!f)return;const h=f.style,{dimensions:v}=se.value,g=d.clientX,b=d.clientY,w=v.width,_=v.height,T=v.position;se.value={...se.value,dimensions:{...v,isFullWidth:!1,isFullHeight:!1,width:w,height:_,position:T}};let k=null;const S=M=>{k||(h.transition="none",k=requestAnimationFrame(()=>{const{newSize:z,newPosition:R}=XA(e,{width:w,height:_},T,M.clientX-g,M.clientY-b);h.transform=`translate3d(${R.x}px, ${R.y}px, 0)`,h.width=`${z.width}px`,h.height=`${z.height}px`;const F=Math.floor(z.width-Jn/2),I=se.value.componentsTree.width,J=Math.min(F,Math.max(Jn,I));se.value={...se.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:z.width,height:z.height,position:R},componentsTree:{...se.value.componentsTree,width:J}},k=null}))},E=()=>{k&&(cancelAnimationFrame(k),k=null),document.removeEventListener("pointermove",S),document.removeEventListener("pointerup",E);const{dimensions:M,corner:z}=se.value,R=Sl(),F=R.isFullWidth(M.width),I=R.isFullHeight(M.height),J=F&&I;let ne=z;(J||F||I)&&(ne=GA(M.position));const ge=cl(ne,M.width,M.height),fe=()=>{f.removeEventListener("transitionend",fe)};f.addEventListener("transitionend",fe),h.transform=`translate3d(${ge.x}px, ${ge.y}px, 0)`,se.value={...se.value,corner:ne,dimensions:{isFullWidth:F,isFullHeight:I,width:M.width,height:M.height,position:ge},lastDimensions:{isFullWidth:F,isFullHeight:I,width:M.width,height:M.height,position:ge}},an(Qr,{corner:ne,dimensions:se.value.dimensions,lastDimensions:se.value.lastDimensions,componentsTree:se.value.componentsTree})};document.addEventListener("pointermove",S,{passive:!0}),document.addEventListener("pointerup",E)},[]),u=vt(d=>{d.preventDefault(),d.stopPropagation();const f=rm.value;if(!f)return;const h=f.style,{dimensions:v,corner:g}=se.value,b=Sl(),w=b.isFullWidth(v.width),_=b.isFullHeight(v.height),T=w&&_,k=(w||_)&&!T;let S=v.width,E=v.height;const M=BA(e,g,T,w,_);e==="left"||e==="right"?(S=w?v.width:b.maxWidth,k&&(S=w?kt.width:b.maxWidth)):(E=_?v.height:b.maxHeight,k&&(E=_?kt.initialHeight:b.maxHeight)),T&&(e==="left"||e==="right"?S=kt.width:E=kt.initialHeight);const z=cl(M,S,E),R={isFullWidth:b.isFullWidth(S),isFullHeight:b.isFullHeight(E),width:S,height:E,position:z},F=Math.floor(S-kt.width/2),I=se.value.componentsTree.width,J=Math.floor(S*.3),ne=w?Jn:(e==="left"||e==="right")&&!w?Math.min(F,Math.max(Jn,J)):Math.min(F,Math.max(Jn,I));requestAnimationFrame(()=>{se.value={corner:M,dimensions:R,lastDimensions:v,componentsTree:{...se.value.componentsTree,width:ne}},h.transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",h.width=`${S}px`,h.height=`${E}px`,h.transform=`translate3d(${z.x}px, ${z.y}px, 0)`}),an(Qr,{corner:M,dimensions:R,lastDimensions:v,componentsTree:{...se.value.componentsTree,width:ne}})},[]);return y("div",{ref:t,onPointerDown:l,onDblClick:u,className:$("absolute z-50","flex items-center justify-center","group","transition-colors select-none","peer",{"resize-left peer/left":e==="left","resize-right peer/right z-10":e==="right","resize-top peer/top":e==="top","resize-bottom peer/bottom":e==="bottom"}),children:y("span",{className:"resize-line-wrapper",children:y("span",{className:"resize-line",children:y(ft,{name:"icon-ellipsis",size:18,className:$("text-neutral-400",(e==="left"||e==="right")&&"rotate-90")})})})})},Kw={horizontal:{width:20,height:48},vertical:{width:48,height:20}},QA=()=>{const e=he(null),t=he(!1),r=he(0),a=he(0),s=he(!1),l=vt((b=!0)=>{if(!e.current)return;const{corner:w}=se.value;let _,T;if(wn.value){const ne=wn.value.orientation||"horizontal",ge=Kw[ne];_=ge.width,T=ge.height}else if(t.current){const ne=se.value.lastDimensions;_=cu(ne.width,0,!0),T=cu(ne.height,0,!1),s.current&&(s.current=!1)}else _=r.current,T=a.current;let S=cl(w,_,T);if(wn.value){const{corner:ne,orientation:ge="horizontal"}=wn.value,fe=Kw[ge];switch(ne){case"top-left":S=ge==="horizontal"?{x:-1,y:xe}:{x:xe,y:-1};break;case"bottom-left":S=ge==="horizontal"?{x:-1,y:window.innerHeight-fe.height-xe}:{x:xe,y:window.innerHeight-fe.height+1};break;case"top-right":S=ge==="horizontal"?{x:window.innerWidth-fe.width+1,y:xe}:{x:window.innerWidth-fe.width-xe,y:-1};break;case"bottom-right":default:S=ge==="horizontal"?{x:window.innerWidth-fe.width+1,y:window.innerHeight-fe.height-xe}:{x:window.innerWidth-fe.width-xe,y:window.innerHeight-fe.height+1};break}}const E=_<kt.width||T<kt.initialHeight,M=b&&!E,z=e.current,R=z.style;let F=null;const I=()=>{rp(),z.removeEventListener("transitionend",I),F&&(cancelAnimationFrame(F),F=null)};z.addEventListener("transitionend",I),R.transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",F=requestAnimationFrame(()=>{R.width=`${_}px`,R.height=`${T}px`,R.transform=`translate3d(${S.x}px, ${S.y}px, 0)`,F=null});const J={isFullWidth:_>=window.innerWidth-xe*2,isFullHeight:T>=window.innerHeight-xe*2,width:_,height:T,position:S};se.value={corner:w,dimensions:J,lastDimensions:t?se.value.lastDimensions:_>r.current?J:se.value.lastDimensions,componentsTree:se.value.componentsTree},M&&an(Qr,{corner:se.value.corner,dimensions:se.value.dimensions,lastDimensions:se.value.lastDimensions,componentsTree:se.value.componentsTree}),rp()},[]),u=vt(b=>{if(b.preventDefault(),!e.current||b.target.closest("button"))return;const w=e.current,_=w.style,{dimensions:T}=se.value,k=b.clientX,S=b.clientY,E=T.position.x,M=T.position.y;let z=E,R=M,F=null,I=!1,J=k,ne=S;const ge=ae=>{F||(I=!0,J=ae.clientX,ne=ae.clientY,F=requestAnimationFrame(()=>{const je=J-k,Ie=ne-S;z=Number(E)+je,R=Number(M)+Ie,_.transition="none",_.transform=`translate3d(${z}px, ${R}px, 0)`;const Fe=z+T.width,A=R+T.height,D=Math.max(0,-z),L=Math.max(0,Fe-window.innerWidth),Q=Math.max(0,-R),ee=Math.max(0,A-window.innerHeight),N=Math.min(T.width,D+L),Y=Math.min(T.height,Q+ee),Z=N*T.height+Y*T.width-N*Y,te=T.width*T.height;let re=Z>te*.35;if(!re&&Ue.options.value.showFPS){const le=z+T.width,ce=le-100;re=le<=0||ce>=window.innerWidth||R+T.height<=0||R>=window.innerHeight}if(re){const le=z+T.width/2,ce=R+T.height/2,be=window.innerWidth/2,ye=window.innerHeight/2;let ct;le<be?ct=ce<ye?"top-left":"bottom-left":ct=ce<ye?"top-right":"bottom-right";let Xn;const ni=Math.max(D,L),Ii=Math.max(Q,ee);Xn=ni>Ii?"horizontal":"vertical",se.value={...se.value,corner:ct,lastDimensions:{...T,position:cl(ct,T.width,T.height)}};const dr={corner:ct,orientation:Xn};wn.value=dr,an(Tu,dr),an(Qr,se.value),l(!1),document.removeEventListener("pointermove",ge),document.removeEventListener("pointerup",fe),F&&(cancelAnimationFrame(F),F=null)}F=null}))},fe=()=>{if(!w)return;F&&(cancelAnimationFrame(F),F=null),document.removeEventListener("pointermove",ge),document.removeEventListener("pointerup",fe);const ae=Math.abs(J-k),je=Math.abs(ne-S),Ie=Math.sqrt(ae*ae+je*je);if(!I||Ie<60)return;const Fe=VA(J,ne,k,S,ie.inspectState.value.kind==="focused"?80:40);if(Fe===se.value.corner){_.transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)";const L=se.value.dimensions.position;requestAnimationFrame(()=>{_.transform=`translate3d(${L.x}px, ${L.y}px, 0)`});return}const A=cl(Fe,T.width,T.height);if(z===E&&R===M)return;const D=()=>{_.transition="none",rp(),w.removeEventListener("transitionend",D),F&&(cancelAnimationFrame(F),F=null)};w.addEventListener("transitionend",D),_.transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",requestAnimationFrame(()=>{_.transform=`translate3d(${A.x}px, ${A.y}px, 0)`}),se.value={corner:Fe,dimensions:{isFullWidth:T.isFullWidth,isFullHeight:T.isFullHeight,width:T.width,height:T.height,position:A},lastDimensions:se.value.lastDimensions,componentsTree:se.value.componentsTree},an(Qr,{corner:Fe,dimensions:se.value.dimensions,lastDimensions:se.value.lastDimensions,componentsTree:se.value.componentsTree})};document.addEventListener("pointermove",ge),document.addEventListener("pointerup",fe)},[]),d=vt(b=>{if(b.preventDefault(),!e.current||!wn.value)return;const{corner:w,orientation:_="horizontal"}=wn.value,T=b.clientX,k=b.clientY;let S=null,E=!1;const M=50,z=F=>{if(E||S)return;const I=F.clientX-T,J=F.clientY-k;let ne=!1;if(_==="horizontal"?(w.endsWith("left")&&I>M||w.endsWith("right")&&I<-M)&&(ne=!0):(w.startsWith("top")&&J>M||w.startsWith("bottom")&&J<-M)&&(ne=!0),ne){if(E=!0,wn.value=null,an(Tu,null),r.current===0&&e.current)requestAnimationFrame(()=>{if(e.current){e.current.style.width="min-content";const ge=e.current.offsetWidth;r.current=ge||300;const fe=se.value.lastDimensions,ae=cu(fe.width,0,!0),je=cu(fe.height,0,!1);let Ie=F.clientX-ae/2,Fe=F.clientY-je/2;Ie=Math.max(xe,Math.min(Ie,window.innerWidth-ae-xe)),Fe=Math.max(xe,Math.min(Fe,window.innerHeight-je-xe)),se.value={...se.value,dimensions:{...se.value.dimensions,position:{x:Ie,y:Fe}}},l(!0);const A=Zr(mo);nt.value=A||{view:"none"},setTimeout(()=>{if(e.current){const D=new PointerEvent("pointerdown",{clientX:F.clientX,clientY:F.clientY,pointerId:F.pointerId,bubbles:!0});e.current.dispatchEvent(D)}},100)}});else{l(!0);const ge=Zr(mo);nt.value=ge||{view:"none"}}document.removeEventListener("pointermove",z),document.removeEventListener("pointerup",R)}},R=()=>{document.removeEventListener("pointermove",z),document.removeEventListener("pointerup",R)};document.addEventListener("pointermove",z),document.addEventListener("pointerup",R)},[]);Ee(()=>{if(!e.current)return;bw(mo),wn.value?(a.current=36,r.current=0):(e.current.style.width="min-content",a.current=36,r.current=e.current.offsetWidth),e.current.style.maxWidth=`calc(100vw - ${xe*2}px)`,e.current.style.maxHeight=`calc(100vh - ${xe*2}px)`,l(),ie.inspectState.value.kind!=="focused"&&!wn.value&&!s.current&&(se.value={...se.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:r.current,height:a.current,position:se.value.dimensions.position}}),rm.value=e.current;const b=se.subscribe(k=>{if(!e.current)return;const{x:S,y:E}=k.dimensions.position,{width:M,height:z}=k.dimensions,R=e.current;requestAnimationFrame(()=>{R.style.transform=`translate3d(${S}px, ${E}px, 0)`,R.style.width=`${M}px`,R.style.height=`${z}px`})}),w=nt.subscribe(k=>{t.current=k.view!=="none",l(),wn.value||(k.view!=="none"?an(mo,k):bw(mo))}),_=ie.inspectState.subscribe(k=>{t.current=k.kind==="focused",l()}),T=()=>{l(!0)};return window.addEventListener("resize",T,{passive:!0}),()=>{window.removeEventListener("resize",T),w(),_(),b(),an(Qr,{...vr,corner:se.value.corner})}},[]);const[f,h]=Ce(!1);Ee(()=>{h(!0)},[]);const v=wn.value;let g="";if(v){const{orientation:b="horizontal",corner:w}=v;b==="horizontal"?g=w!=null&&w.endsWith("right")?"rotate-180":"":g=w!=null&&w.startsWith("bottom")?"-rotate-90":"rotate-90"}return y(Re,{children:[y(qA,{}),y(yg.Provider,{value:e.current,children:y("div",{id:"react-scan-toolbar",dir:"ltr",ref:e,onPointerDown:v?d:u,className:$("fixed inset-0",v?(()=>{const{orientation:b="horizontal",corner:w}=v;return b==="horizontal"?w!=null&&w.endsWith("right")?"rounded-tl-lg rounded-bl-lg shadow-lg":"rounded-tr-lg rounded-br-lg shadow-lg":w!=null&&w.startsWith("bottom")?"rounded-tl-lg rounded-tr-lg shadow-lg":"rounded-bl-lg rounded-br-lg shadow-lg"})():"rounded-lg shadow-lg","flex flex-col","font-mono text-[13px]","user-select-none","opacity-0",v?"cursor-pointer":"cursor-move","z-[124124124124]","animate-fade-in animation-duration-300 animation-delay-300","will-change-transform","[touch-action:none]"),children:v?y("button",{type:"button",onClick:()=>{wn.value=null,an(Tu,null),r.current===0&&e.current&&requestAnimationFrame(()=>{if(e.current){e.current.style.width="min-content";const w=e.current.offsetWidth;r.current=w||300,l(!0)}});const b=Zr(mo);nt.value=b||{view:"none"}},className:"flex items-center justify-center w-full h-full text-white",title:"Expand toolbar",children:y(ft,{name:"icon-chevron-right",size:16,className:$("transition-transform",g)})}):y(Re,{children:[y(uu,{position:"top"}),y(uu,{position:"bottom"}),y(uu,{position:"left"}),y(uu,{position:"right"}),y(IA,{})]})})})]})},yg=Px(null),KA=()=>y("svg",{xmlns:"http://www.w3.org/2000/svg",style:"display: none;",children:[y("title",{children:"React Scan Icons"}),y("symbol",{id:"icon-inspect",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[y("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),y("path",{d:"M5 3a2 2 0 0 0-2 2"}),y("path",{d:"M19 3a2 2 0 0 1 2 2"}),y("path",{d:"M5 21a2 2 0 0 1-2-2"}),y("path",{d:"M9 3h1"}),y("path",{d:"M9 21h2"}),y("path",{d:"M14 3h1"}),y("path",{d:"M3 9v1"}),y("path",{d:"M21 9v2"}),y("path",{d:"M3 14v1"})]}),y("symbol",{id:"icon-focus",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[y("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),y("path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"})]}),y("symbol",{id:"icon-next",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:y("path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z"})}),y("symbol",{id:"icon-previous",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:y("path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"})}),y("symbol",{id:"icon-close",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[y("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),y("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),y("symbol",{id:"icon-replay",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[y("path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}),y("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),y("path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}),y("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),y("circle",{cx:"12",cy:"12",r:"1"}),y("path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"})]}),y("symbol",{id:"icon-ellipsis",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[y("circle",{cx:"12",cy:"12",r:"1"}),y("circle",{cx:"19",cy:"12",r:"1"}),y("circle",{cx:"5",cy:"12",r:"1"})]}),y("symbol",{id:"icon-copy",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[y("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),y("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]}),y("symbol",{id:"icon-check",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:y("path",{d:"M20 6 9 17l-5-5"})}),y("symbol",{id:"icon-chevron-right",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:y("path",{d:"m9 18 6-6-6-6"})}),y("symbol",{id:"icon-settings",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[y("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),y("circle",{cx:"12",cy:"12",r:"3"})]}),y("symbol",{id:"icon-flame",viewBox:"0 0 24 24",children:y("path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"})}),y("symbol",{id:"icon-function",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[y("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}),y("path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}),y("path",{d:"M9 11.2h5.7"})]}),y("symbol",{id:"icon-triangle-alert",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[y("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}),y("path",{d:"M12 9v4"}),y("path",{d:"M12 17h.01"})]}),y("symbol",{id:"icon-gallery-horizontal-end",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[y("path",{d:"M2 7v10"}),y("path",{d:"M6 5v14"}),y("rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"})]}),y("symbol",{id:"icon-search",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[y("circle",{cx:"11",cy:"11",r:"8"}),y("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),y("symbol",{id:"icon-lock",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[y("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),y("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),y("symbol",{id:"icon-lock-open",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[y("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),y("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"})]}),y("symbol",{id:"icon-sanil",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[y("path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}),y("circle",{cx:"10",cy:"13",r:"8"}),y("path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}),y("path",{d:"M18 3 19.1 5.2"})]})]}),WA=class extends Yn{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null})}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){var e;return this.state.hasError?y("div",{className:"fixed bottom-4 right-4 z-[124124124124]",children:y("div",{className:"p-3 bg-black rounded-lg shadow-lg w-80",children:[y("div",{className:"flex items-center gap-2 mb-2 text-red-400 text-sm font-medium",children:[y(ft,{name:"icon-flame",className:"text-red-500",size:14}),"React Scan ran into a problem"]}),y("div",{className:"p-2 bg-black rounded font-mono text-xs text-red-300 mb-3 break-words",children:((e=this.state.error)==null?void 0:e.message)||JSON.stringify(this.state.error)}),y("button",{type:"button",onClick:this.handleReset,className:"px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-medium transition-colors flex items-center justify-center gap-1.5",children:"Restart"})]})}):this.props.children}},ZA=e=>{const t=document.createElement("div");t.id="react-scan-toolbar-root",window.__REACT_SCAN_TOOLBAR_CONTAINER__=t,e.appendChild(t),ol(y(WA,{children:y(Re,{children:[y(KA,{}),y(QA,{})]})}),t);const r=t.remove.bind(t);return t.remove=()=>{window.__REACT_SCAN_TOOLBAR_CONTAINER__=void 0,t.hasChildNodes()&&(ol(null,t),ol(null,t)),r()},t},JA={version:"0.4.3"},sa=null,Vs=null,e5=()=>{if(sa&&Vs)return{rootContainer:sa,shadowRoot:Vs};sa=document.createElement("div"),sa.id="react-scan-root",Vs=sa.attachShadow({mode:"open"});const e=document.createElement("style");return e.textContent=v4,Vs.appendChild(e),document.documentElement.appendChild(sa),{rootContainer:sa,shadowRoot:Vs}},ie={wasDetailsOpen:Et(!0),isInIframe:Et(Sr&&window.self!==window.top),inspectState:Et({kind:"uninitialized"}),monitor:Et(null),fiberRoots:new Set,reportData:new Map,legacyReportData:new Map,lastReportTime:Et(0),interactionListeningForRenders:null,changesListeners:new Map},Ue={instrumentation:null,componentAllowList:null,options:Et({enabled:!0,log:!1,showToolbar:!0,animationSpeed:"fast",dangerouslyForceRunInProduction:!1,showFPS:!0,showNotificationCount:!0,allowInIframe:!1}),runInAllEnvironments:!1,onRender:null,scheduledOutlines:new Map,activeOutlines:new Map,Store:ie,version:JA.version};Sr&&window.__REACT_SCAN_EXTENSION__&&(window.__REACT_SCAN_VERSION__=Ue.version);function t5(e){return e in Ue.options.value}var H2=e=>{const t=[],r={};for(const a in e){if(!t5(a))continue;const s=e[a];switch(a){case"enabled":case"log":case"showToolbar":case"showNotificationCount":case"dangerouslyForceRunInProduction":case"showFPS":case"allowInIframe":typeof s!="boolean"?t.push(`- ${a} must be a boolean. Got "${s}"`):r[a]=s;break;case"animationSpeed":["slow","fast","off"].includes(s)?r[a]=s:t.push(`- Invalid animation speed "${s}". Using default "fast"`);break;case"onCommitStart":typeof s!="function"?t.push(`- ${a} must be a function. Got "${s}"`):r.onCommitStart=s;break;case"onCommitFinish":typeof s!="function"?t.push(`- ${a} must be a function. Got "${s}"`):r.onCommitFinish=s;break;case"onRender":typeof s!="function"?t.push(`- ${a} must be a function. Got "${s}"`):r.onRender=s;break;case"onPaintStart":case"onPaintFinish":typeof s!="function"?t.push(`- ${a} must be a function. Got "${s}"`):r[a]=s;break;default:t.push(`- Unknown option "${a}"`)}}return t.length>0&&console.warn(`[React Scan] Invalid options:
${t.join(`
`)}`),r},n5=e=>{var t;try{const r=H2(e);if(Object.keys(r).length===0)return;const a="showToolbar"in r&&r.showToolbar!==void 0,s={...Ue.options.value,...r},{instrumentation:l}=Ue;l&&"enabled"in r&&(l.isPaused.value=r.enabled===!1),Ue.options.value=s;try{const u=(t=Zr("react-scan-options"))==null?void 0:t.enabled;typeof u=="boolean"&&(s.enabled=u)}catch(u){Ue.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",u)}return an("react-scan-options",s),a&&I2(!!s.showToolbar),s}catch(r){Ue.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",r)}},r5=()=>Ue.options,du=null,Ww,md=()=>{if(du!==null)return du;Ww??(Ww=Bo());for(const e of Ww.renderers.values())TE(e)==="production"&&(du=!0);return du},i5=()=>{try{if(!Sr||!Ue.runInAllEnvironments&&md()&&!Ue.options.value.dangerouslyForceRunInProduction)return;const e=Zr("react-scan-options");if(e){const r=H2(e);Object.keys(r).length>0&&(Ue.options.value={...Ue.options.value,...r})}const t=r5();g4(()=>{I2(!!t.value.showToolbar)}),!ie.monitor.value&&Sr&&setTimeout(()=>{kE()||console.error("[React Scan] Failed to load. Must import React Scan before React runs.")},5e3)}catch(e){Ue.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}},I2=e=>{var l;(l=window.reactScanCleanupListeners)==null||l.call(window);const t=X4(),r=a5();window.reactScanCleanupListeners=()=>{t(),r==null||r()};const a=window.__REACT_SCAN_TOOLBAR_CONTAINER__;if(!e){a==null||a.remove();return}a==null||a.remove();const{shadowRoot:s}=e5();ZA(s)},a5=()=>{try{const e=document.documentElement;return mA(e)}catch(e){Ue.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}},o5=(e={})=>{n5(e),!(ie.isInIframe.value&&!Ue.options.value.allowInIframe&&!Ue.runInAllEnvironments)&&(e.enabled===!1&&e.showToolbar!==!0||i5())},s5=new WeakSet,wp={exports:{}},Qs={},xp={exports:{}},_p={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zw;function l5(){return Zw||(Zw=1,(function(e){function t(A,D){var L=A.length;A.push(D);e:for(;0<L;){var Q=L-1>>>1,ee=A[Q];if(0<s(ee,D))A[Q]=D,A[L]=ee,L=Q;else break e}}function r(A){return A.length===0?null:A[0]}function a(A){if(A.length===0)return null;var D=A[0],L=A.pop();if(L!==D){A[0]=L;e:for(var Q=0,ee=A.length,N=ee>>>1;Q<N;){var Y=2*(Q+1)-1,Z=A[Y],te=Y+1,re=A[te];if(0>s(Z,L))te<ee&&0>s(re,Z)?(A[Q]=re,A[te]=L,Q=te):(A[Q]=Z,A[Y]=L,Q=Y);else if(te<ee&&0>s(re,L))A[Q]=re,A[te]=L,Q=te;else break e}}return D}function s(A,D){var L=A.sortIndex-D.sortIndex;return L!==0?L:A.id-D.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();e.unstable_now=function(){return u.now()-d}}var f=[],h=[],v=1,g=null,b=3,w=!1,_=!1,T=!1,k=!1,S=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;function z(A){for(var D=r(h);D!==null;){if(D.callback===null)a(h);else if(D.startTime<=A)a(h),D.sortIndex=D.expirationTime,t(f,D);else break;D=r(h)}}function R(A){if(T=!1,z(A),!_)if(r(f)!==null)_=!0,F||(F=!0,ae());else{var D=r(h);D!==null&&Fe(R,D.startTime-A)}}var F=!1,I=-1,J=5,ne=-1;function ge(){return k?!0:!(e.unstable_now()-ne<J)}function fe(){if(k=!1,F){var A=e.unstable_now();ne=A;var D=!0;try{e:{_=!1,T&&(T=!1,E(I),I=-1),w=!0;var L=b;try{t:{for(z(A),g=r(f);g!==null&&!(g.expirationTime>A&&ge());){var Q=g.callback;if(typeof Q=="function"){g.callback=null,b=g.priorityLevel;var ee=Q(g.expirationTime<=A);if(A=e.unstable_now(),typeof ee=="function"){g.callback=ee,z(A),D=!0;break t}g===r(f)&&a(f),z(A)}else a(f);g=r(f)}if(g!==null)D=!0;else{var N=r(h);N!==null&&Fe(R,N.startTime-A),D=!1}}break e}finally{g=null,b=L,w=!1}D=void 0}}finally{D?ae():F=!1}}}var ae;if(typeof M=="function")ae=function(){M(fe)};else if(typeof MessageChannel<"u"){var je=new MessageChannel,Ie=je.port2;je.port1.onmessage=fe,ae=function(){Ie.postMessage(null)}}else ae=function(){S(fe,0)};function Fe(A,D){I=S(function(){A(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return b},e.unstable_next=function(A){switch(b){case 1:case 2:case 3:var D=3;break;default:D=b}var L=b;b=D;try{return A()}finally{b=L}},e.unstable_requestPaint=function(){k=!0},e.unstable_runWithPriority=function(A,D){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var L=b;b=A;try{return D()}finally{b=L}},e.unstable_scheduleCallback=function(A,D,L){var Q=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?Q+L:Q):L=Q,A){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=L+ee,A={id:v++,callback:D,priorityLevel:A,startTime:L,expirationTime:ee,sortIndex:-1},L>Q?(A.sortIndex=L,t(h,A),r(f)===null&&A===r(h)&&(T?(E(I),I=-1):T=!0,Fe(R,L-Q))):(A.sortIndex=ee,t(f,A),_||w||(_=!0,F||(F=!0,ae()))),A},e.unstable_shouldYield=ge,e.unstable_wrapCallback=function(A){var D=b;return function(){var L=b;b=D;try{return A.apply(this,arguments)}finally{b=L}}}})(_p)),_p}var Jw;function c5(){return Jw||(Jw=1,xp.exports=l5()),xp.exports}var Sp={exports:{}},Bt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e1;function u5(){if(e1)return Bt;e1=1;var e=zl();function t(f){var h="https://react.dev/errors/"+f;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+f+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var a={d:{f:r,r:function(){throw Error(t(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(f,h,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:g==null?null:""+g,children:f,containerInfo:h,implementation:v}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(f,h){if(f==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Bt.createPortal=function(f,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return l(f,h,null,v)},Bt.flushSync=function(f){var h=u.T,v=a.p;try{if(u.T=null,a.p=2,f)return f()}finally{u.T=h,a.p=v,a.d.f()}},Bt.preconnect=function(f,h){typeof f=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,a.d.C(f,h))},Bt.prefetchDNS=function(f){typeof f=="string"&&a.d.D(f)},Bt.preinit=function(f,h){if(typeof f=="string"&&h&&typeof h.as=="string"){var v=h.as,g=d(v,h.crossOrigin),b=typeof h.integrity=="string"?h.integrity:void 0,w=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?a.d.S(f,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:g,integrity:b,fetchPriority:w}):v==="script"&&a.d.X(f,{crossOrigin:g,integrity:b,fetchPriority:w,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Bt.preinitModule=function(f,h){if(typeof f=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=d(h.as,h.crossOrigin);a.d.M(f,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&a.d.M(f)},Bt.preload=function(f,h){if(typeof f=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,g=d(v,h.crossOrigin);a.d.L(f,v,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Bt.preloadModule=function(f,h){if(typeof f=="string")if(h){var v=d(h.as,h.crossOrigin);a.d.m(f,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else a.d.m(f)},Bt.requestFormReset=function(f){a.d.r(f)},Bt.unstable_batchedUpdates=function(f,h){return f(h)},Bt.useFormState=function(f,h,v){return u.H.useFormState(f,h,v)},Bt.useFormStatus=function(){return u.H.useHostTransitionStatus()},Bt.version="19.2.0",Bt}var t1;function d5(){if(t1)return Sp.exports;t1=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Sp.exports=u5(),Sp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n1;function f5(){if(n1)return Qs;n1=1;var e=c5(),t=zl(),r=d5();function a(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function u(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function d(n){if(n.tag===31){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function f(n){if(l(n)!==n)throw Error(a(188))}function h(n){var i=n.alternate;if(!i){if(i=l(n),i===null)throw Error(a(188));return i!==n?null:n}for(var o=n,c=i;;){var p=o.return;if(p===null)break;var m=p.alternate;if(m===null){if(c=p.return,c!==null){o=c;continue}break}if(p.child===m.child){for(m=p.child;m;){if(m===o)return f(p),n;if(m===c)return f(p),i;m=m.sibling}throw Error(a(188))}if(o.return!==c.return)o=p,c=m;else{for(var x=!1,C=p.child;C;){if(C===o){x=!0,o=p,c=m;break}if(C===c){x=!0,c=p,o=m;break}C=C.sibling}if(!x){for(C=m.child;C;){if(C===o){x=!0,o=m,c=p;break}if(C===c){x=!0,c=m,o=p;break}C=C.sibling}if(!x)throw Error(a(189))}}if(o.alternate!==c)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?n:i}function v(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=v(n),i!==null)return i;n=n.sibling}return null}var g=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),_=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),E=Symbol.for("react.consumer"),M=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),ne=Symbol.for("react.activity"),ge=Symbol.for("react.memo_cache_sentinel"),fe=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=fe&&n[fe]||n["@@iterator"],typeof n=="function"?n:null)}var je=Symbol.for("react.client.reference");function Ie(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===je?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case T:return"Fragment";case S:return"Profiler";case k:return"StrictMode";case R:return"Suspense";case F:return"SuspenseList";case ne:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case _:return"Portal";case M:return n.displayName||"Context";case E:return(n._context.displayName||"Context")+".Consumer";case z:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case I:return i=n.displayName||null,i!==null?i:Ie(n.type)||"Memo";case J:i=n._payload,n=n._init;try{return Ie(n(i))}catch{}}return null}var Fe=Array.isArray,A=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L={pending:!1,data:null,method:null,action:null},Q=[],ee=-1;function N(n){return{current:n}}function Y(n){0>ee||(n.current=Q[ee],Q[ee]=null,ee--)}function Z(n,i){ee++,Q[ee]=n.current,n.current=i}var te=N(null),re=N(null),le=N(null),ce=N(null);function be(n,i){switch(Z(le,i),Z(re,n),Z(te,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?db(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=db(i),n=fb(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Y(te),Z(te,n)}function ye(){Y(te),Y(re),Y(le)}function ct(n){n.memoizedState!==null&&Z(ce,n);var i=te.current,o=fb(i,n.type);i!==o&&(Z(re,n),Z(te,o))}function Xn(n){re.current===n&&(Y(te),Y(re)),ce.current===n&&(Y(ce),Is._currentValue=L)}var ni,Ii;function dr(n){if(ni===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);ni=i&&i[1]||"",Ii=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ni+n+Ii}var zd=!1;function jd(n,i){if(!n||zd)return"";zd=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(i){var W=function(){throw Error()};if(Object.defineProperty(W.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(W,[])}catch(X){var P=X}Reflect.construct(n,[],W)}else{try{W.call()}catch(X){P=X}n.call(W.prototype)}}else{try{throw Error()}catch(X){P=X}(W=n())&&typeof W.catch=="function"&&W.catch(function(){})}}catch(X){if(X&&P&&typeof X.stack=="string")return[X.stack,P.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),x=m[0],C=m[1];if(x&&C){var j=x.split(`
`),B=C.split(`
`);for(p=c=0;c<j.length&&!j[c].includes("DetermineComponentFrameRoot");)c++;for(;p<B.length&&!B[p].includes("DetermineComponentFrameRoot");)p++;if(c===j.length||p===B.length)for(c=j.length-1,p=B.length-1;1<=c&&0<=p&&j[c]!==B[p];)p--;for(;1<=c&&0<=p;c--,p--)if(j[c]!==B[p]){if(c!==1||p!==1)do if(c--,p--,0>p||j[c]!==B[p]){var G=`
`+j[c].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=c&&0<=p);break}}}finally{zd=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?dr(o):""}function _S(n,i){switch(n.tag){case 26:case 27:case 5:return dr(n.type);case 16:return dr("Lazy");case 13:return n.child!==i&&i!==null?dr("Suspense Fallback"):dr("Suspense");case 19:return dr("SuspenseList");case 0:case 15:return jd(n.type,!1);case 11:return jd(n.type.render,!1);case 1:return jd(n.type,!0);case 31:return dr("Activity");default:return""}}function Fg(n){try{var i="",o=null;do i+=_S(n,o),o=n,n=n.return;while(n);return i}catch(c){return`
Error generating stack: `+c.message+`
`+c.stack}}var Dd=Object.prototype.hasOwnProperty,Rd=e.unstable_scheduleCallback,Ud=e.unstable_cancelCallback,SS=e.unstable_shouldYield,TS=e.unstable_requestPaint,un=e.unstable_now,kS=e.unstable_getCurrentPriorityLevel,Bg=e.unstable_ImmediatePriority,Pg=e.unstable_UserBlockingPriority,Ll=e.unstable_NormalPriority,ES=e.unstable_LowPriority,Yg=e.unstable_IdlePriority,CS=e.log,AS=e.unstable_setDisableYieldValue,Zo=null,dn=null;function ri(n){if(typeof CS=="function"&&AS(n),dn&&typeof dn.setStrictMode=="function")try{dn.setStrictMode(Zo,n)}catch{}}var fn=Math.clz32?Math.clz32:NS,MS=Math.log,OS=Math.LN2;function NS(n){return n>>>=0,n===0?32:31-(MS(n)/OS|0)|0}var Hl=256,Il=262144,ql=4194304;function qi(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Fl(n,i,o){var c=n.pendingLanes;if(c===0)return 0;var p=0,m=n.suspendedLanes,x=n.pingedLanes;n=n.warmLanes;var C=c&134217727;return C!==0?(c=C&~m,c!==0?p=qi(c):(x&=C,x!==0?p=qi(x):o||(o=C&~n,o!==0&&(p=qi(o))))):(C=c&~m,C!==0?p=qi(C):x!==0?p=qi(x):o||(o=c&~n,o!==0&&(p=qi(o)))),p===0?0:i!==0&&i!==p&&(i&m)===0&&(m=p&-p,o=i&-i,m>=o||m===32&&(o&4194048)!==0)?i:p}function Jo(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function zS(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xg(){var n=ql;return ql<<=1,(ql&62914560)===0&&(ql=4194304),n}function $d(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function es(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function jS(n,i,o,c,p,m){var x=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var C=n.entanglements,j=n.expirationTimes,B=n.hiddenUpdates;for(o=x&~o;0<o;){var G=31-fn(o),W=1<<G;C[G]=0,j[G]=-1;var P=B[G];if(P!==null)for(B[G]=null,G=0;G<P.length;G++){var X=P[G];X!==null&&(X.lane&=-536870913)}o&=~W}c!==0&&Gg(n,c,0),m!==0&&p===0&&n.tag!==0&&(n.suspendedLanes|=m&~(x&~i))}function Gg(n,i,o){n.pendingLanes|=i,n.suspendedLanes&=~i;var c=31-fn(i);n.entangledLanes|=i,n.entanglements[c]=n.entanglements[c]|1073741824|o&261930}function Vg(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-fn(o),p=1<<c;p&i|n[c]&i&&(n[c]|=i),o&=~p}}function Qg(n,i){var o=i&-i;return o=(o&42)!==0?1:Ld(o),(o&(n.suspendedLanes|i))!==0?0:o}function Ld(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Hd(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Kg(){var n=D.p;return n!==0?n:(n=window.event,n===void 0?32:Rb(n.type))}function Wg(n,i){var o=D.p;try{return D.p=n,i()}finally{D.p=o}}var ii=Math.random().toString(36).slice(2),Dt="__reactFiber$"+ii,Wt="__reactProps$"+ii,Oa="__reactContainer$"+ii,Id="__reactEvents$"+ii,DS="__reactListeners$"+ii,RS="__reactHandles$"+ii,Zg="__reactResources$"+ii,ts="__reactMarker$"+ii;function qd(n){delete n[Dt],delete n[Wt],delete n[Id],delete n[DS],delete n[RS]}function Na(n){var i=n[Dt];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Oa]||o[Dt]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=bb(n);n!==null;){if(o=n[Dt])return o;n=bb(n)}return i}n=o,o=n.parentNode}return null}function za(n){if(n=n[Dt]||n[Oa]){var i=n.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return n}return null}function ns(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(a(33))}function ja(n){var i=n[Zg];return i||(i=n[Zg]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Ot(n){n[ts]=!0}var Jg=new Set,e0={};function Fi(n,i){Da(n,i),Da(n+"Capture",i)}function Da(n,i){for(e0[n]=i,n=0;n<i.length;n++)Jg.add(i[n])}var US=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),t0={},n0={};function $S(n){return Dd.call(n0,n)?!0:Dd.call(t0,n)?!1:US.test(n)?n0[n]=!0:(t0[n]=!0,!1)}function Bl(n,i,o){if($S(i))if(o===null)n.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var c=i.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+o)}}function Pl(n,i,o){if(o===null)n.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+o)}}function Er(n,i,o,c){if(c===null)n.removeAttribute(o);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(i,o,""+c)}}function On(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function r0(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function LS(n,i,o){var c=Object.getOwnPropertyDescriptor(n.constructor.prototype,i);if(!n.hasOwnProperty(i)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var p=c.get,m=c.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return p.call(this)},set:function(x){o=""+x,m.call(this,x)}}),Object.defineProperty(n,i,{enumerable:c.enumerable}),{getValue:function(){return o},setValue:function(x){o=""+x},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Fd(n){if(!n._valueTracker){var i=r0(n)?"checked":"value";n._valueTracker=LS(n,i,""+n[i])}}function i0(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=r0(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function Yl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var HS=/[\n"\\]/g;function Nn(n){return n.replace(HS,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Bd(n,i,o,c,p,m,x,C){n.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?n.type=x:n.removeAttribute("type"),i!=null?x==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+On(i)):n.value!==""+On(i)&&(n.value=""+On(i)):x!=="submit"&&x!=="reset"||n.removeAttribute("value"),i!=null?Pd(n,x,On(i)):o!=null?Pd(n,x,On(o)):c!=null&&n.removeAttribute("value"),p==null&&m!=null&&(n.defaultChecked=!!m),p!=null&&(n.checked=p&&typeof p!="function"&&typeof p!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?n.name=""+On(C):n.removeAttribute("name")}function a0(n,i,o,c,p,m,x,C){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),i!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Fd(n);return}o=o!=null?""+On(o):"",i=i!=null?""+On(i):o,C||i===n.value||(n.value=i),n.defaultValue=i}c=c??p,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=C?n.checked:!!c,n.defaultChecked=!!c,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(n.name=x),Fd(n)}function Pd(n,i,o){i==="number"&&Yl(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function Ra(n,i,o,c){if(n=n.options,i){i={};for(var p=0;p<o.length;p++)i["$"+o[p]]=!0;for(o=0;o<n.length;o++)p=i.hasOwnProperty("$"+n[o].value),n[o].selected!==p&&(n[o].selected=p),p&&c&&(n[o].defaultSelected=!0)}else{for(o=""+On(o),i=null,p=0;p<n.length;p++){if(n[p].value===o){n[p].selected=!0,c&&(n[p].defaultSelected=!0);return}i!==null||n[p].disabled||(i=n[p])}i!==null&&(i.selected=!0)}}function o0(n,i,o){if(i!=null&&(i=""+On(i),i!==n.value&&(n.value=i),o==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=o!=null?""+On(o):""}function s0(n,i,o,c){if(i==null){if(c!=null){if(o!=null)throw Error(a(92));if(Fe(c)){if(1<c.length)throw Error(a(93));c=c[0]}o=c}o==null&&(o=""),i=o}o=On(i),n.defaultValue=o,c=n.textContent,c===o&&c!==""&&c!==null&&(n.value=c),Fd(n)}function Ua(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var IS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function l0(n,i,o){var c=i.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?c?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":c?n.setProperty(i,o):typeof o!="number"||o===0||IS.has(i)?i==="float"?n.cssFloat=o:n[i]=(""+o).trim():n[i]=o+"px"}function c0(n,i,o){if(i!=null&&typeof i!="object")throw Error(a(62));if(n=n.style,o!=null){for(var c in o)!o.hasOwnProperty(c)||i!=null&&i.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var p in i)c=i[p],i.hasOwnProperty(p)&&o[p]!==c&&l0(n,p,c)}else for(var m in i)i.hasOwnProperty(m)&&l0(n,m,i[m])}function Yd(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),FS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xl(n){return FS.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Cr(){}var Xd=null;function Gd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var $a=null,La=null;function u0(n){var i=za(n);if(i&&(n=i.stateNode)){var o=n[Wt]||null;e:switch(n=i.stateNode,i.type){case"input":if(Bd(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Nn(""+i)+'"][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var p=c[Wt]||null;if(!p)throw Error(a(90));Bd(c,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(i=0;i<o.length;i++)c=o[i],c.form===n.form&&i0(c)}break e;case"textarea":o0(n,o.value,o.defaultValue);break e;case"select":i=o.value,i!=null&&Ra(n,!!o.multiple,i,!1)}}}var Vd=!1;function d0(n,i,o){if(Vd)return n(i,o);Vd=!0;try{var c=n(i);return c}finally{if(Vd=!1,($a!==null||La!==null)&&(jc(),$a&&(i=$a,n=La,La=$a=null,u0(i),n)))for(i=0;i<n.length;i++)u0(n[i])}}function rs(n,i){var o=n.stateNode;if(o===null)return null;var c=o[Wt]||null;if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(a(231,i,typeof o));return o}var Ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qd=!1;if(Ar)try{var is={};Object.defineProperty(is,"passive",{get:function(){Qd=!0}}),window.addEventListener("test",is,is),window.removeEventListener("test",is,is)}catch{Qd=!1}var ai=null,Kd=null,Gl=null;function f0(){if(Gl)return Gl;var n,i=Kd,o=i.length,c,p="value"in ai?ai.value:ai.textContent,m=p.length;for(n=0;n<o&&i[n]===p[n];n++);var x=o-n;for(c=1;c<=x&&i[o-c]===p[m-c];c++);return Gl=p.slice(n,1<c?1-c:void 0)}function Vl(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ql(){return!0}function h0(){return!1}function Zt(n){function i(o,c,p,m,x){this._reactName=o,this._targetInst=p,this.type=c,this.nativeEvent=m,this.target=x,this.currentTarget=null;for(var C in n)n.hasOwnProperty(C)&&(o=n[C],this[C]=o?o(m):m[C]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ql:h0,this.isPropagationStopped=h0,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ql)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ql)},persist:function(){},isPersistent:Ql}),i}var Bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=Zt(Bi),as=g({},Bi,{view:0,detail:0}),BS=Zt(as),Wd,Zd,os,Wl=g({},as,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ef,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==os&&(os&&n.type==="mousemove"?(Wd=n.screenX-os.screenX,Zd=n.screenY-os.screenY):Zd=Wd=0,os=n),Wd)},movementY:function(n){return"movementY"in n?n.movementY:Zd}}),p0=Zt(Wl),PS=g({},Wl,{dataTransfer:0}),YS=Zt(PS),XS=g({},as,{relatedTarget:0}),Jd=Zt(XS),GS=g({},Bi,{animationName:0,elapsedTime:0,pseudoElement:0}),VS=Zt(GS),QS=g({},Bi,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),KS=Zt(QS),WS=g({},Bi,{data:0}),m0=Zt(WS),ZS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},JS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tT(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=eT[n])?!!i[n]:!1}function ef(){return tT}var nT=g({},as,{key:function(n){if(n.key){var i=ZS[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Vl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?JS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ef,charCode:function(n){return n.type==="keypress"?Vl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Vl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),rT=Zt(nT),iT=g({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),g0=Zt(iT),aT=g({},as,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ef}),oT=Zt(aT),sT=g({},Bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),lT=Zt(sT),cT=g({},Wl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),uT=Zt(cT),dT=g({},Bi,{newState:0,oldState:0}),fT=Zt(dT),hT=[9,13,27,32],tf=Ar&&"CompositionEvent"in window,ss=null;Ar&&"documentMode"in document&&(ss=document.documentMode);var pT=Ar&&"TextEvent"in window&&!ss,v0=Ar&&(!tf||ss&&8<ss&&11>=ss),y0=" ",b0=!1;function w0(n,i){switch(n){case"keyup":return hT.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function x0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ha=!1;function mT(n,i){switch(n){case"compositionend":return x0(i);case"keypress":return i.which!==32?null:(b0=!0,y0);case"textInput":return n=i.data,n===y0&&b0?null:n;default:return null}}function gT(n,i){if(Ha)return n==="compositionend"||!tf&&w0(n,i)?(n=f0(),Gl=Kd=ai=null,Ha=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return v0&&i.locale!=="ko"?null:i.data;default:return null}}var vT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _0(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!vT[n.type]:i==="textarea"}function S0(n,i,o,c){$a?La?La.push(c):La=[c]:$a=c,i=Ic(i,"onChange"),0<i.length&&(o=new Kl("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var ls=null,cs=null;function yT(n){ab(n,0)}function Zl(n){var i=ns(n);if(i0(i))return n}function T0(n,i){if(n==="change")return i}var k0=!1;if(Ar){var nf;if(Ar){var rf="oninput"in document;if(!rf){var E0=document.createElement("div");E0.setAttribute("oninput","return;"),rf=typeof E0.oninput=="function"}nf=rf}else nf=!1;k0=nf&&(!document.documentMode||9<document.documentMode)}function C0(){ls&&(ls.detachEvent("onpropertychange",A0),cs=ls=null)}function A0(n){if(n.propertyName==="value"&&Zl(cs)){var i=[];S0(i,cs,n,Gd(n)),d0(yT,i)}}function bT(n,i,o){n==="focusin"?(C0(),ls=i,cs=o,ls.attachEvent("onpropertychange",A0)):n==="focusout"&&C0()}function wT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Zl(cs)}function xT(n,i){if(n==="click")return Zl(i)}function _T(n,i){if(n==="input"||n==="change")return Zl(i)}function ST(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var hn=typeof Object.is=="function"?Object.is:ST;function us(n,i){if(hn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var p=o[c];if(!Dd.call(i,p)||!hn(n[p],i[p]))return!1}return!0}function M0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function O0(n,i){var o=M0(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=M0(o)}}function N0(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?N0(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function z0(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=Yl(n.document);i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Yl(n.document)}return i}function af(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var TT=Ar&&"documentMode"in document&&11>=document.documentMode,Ia=null,of=null,ds=null,sf=!1;function j0(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;sf||Ia==null||Ia!==Yl(c)||(c=Ia,"selectionStart"in c&&af(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ds&&us(ds,c)||(ds=c,c=Ic(of,"onSelect"),0<c.length&&(i=new Kl("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=Ia)))}function Pi(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var qa={animationend:Pi("Animation","AnimationEnd"),animationiteration:Pi("Animation","AnimationIteration"),animationstart:Pi("Animation","AnimationStart"),transitionrun:Pi("Transition","TransitionRun"),transitionstart:Pi("Transition","TransitionStart"),transitioncancel:Pi("Transition","TransitionCancel"),transitionend:Pi("Transition","TransitionEnd")},lf={},D0={};Ar&&(D0=document.createElement("div").style,"AnimationEvent"in window||(delete qa.animationend.animation,delete qa.animationiteration.animation,delete qa.animationstart.animation),"TransitionEvent"in window||delete qa.transitionend.transition);function Yi(n){if(lf[n])return lf[n];if(!qa[n])return n;var i=qa[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in D0)return lf[n]=i[o];return n}var R0=Yi("animationend"),U0=Yi("animationiteration"),$0=Yi("animationstart"),kT=Yi("transitionrun"),ET=Yi("transitionstart"),CT=Yi("transitioncancel"),L0=Yi("transitionend"),H0=new Map,cf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cf.push("scrollEnd");function Gn(n,i){H0.set(n,i),Fi(i,[n])}var Jl=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},zn=[],Fa=0,uf=0;function ec(){for(var n=Fa,i=uf=Fa=0;i<n;){var o=zn[i];zn[i++]=null;var c=zn[i];zn[i++]=null;var p=zn[i];zn[i++]=null;var m=zn[i];if(zn[i++]=null,c!==null&&p!==null){var x=c.pending;x===null?p.next=p:(p.next=x.next,x.next=p),c.pending=p}m!==0&&I0(o,p,m)}}function tc(n,i,o,c){zn[Fa++]=n,zn[Fa++]=i,zn[Fa++]=o,zn[Fa++]=c,uf|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function df(n,i,o,c){return tc(n,i,o,c),nc(n)}function Xi(n,i){return tc(n,null,null,i),nc(n)}function I0(n,i,o){n.lanes|=o;var c=n.alternate;c!==null&&(c.lanes|=o);for(var p=!1,m=n.return;m!==null;)m.childLanes|=o,c=m.alternate,c!==null&&(c.childLanes|=o),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(p=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,p&&i!==null&&(p=31-fn(o),n=m.hiddenUpdates,c=n[p],c===null?n[p]=[i]:c.push(i),i.lane=o|536870912),m):null}function nc(n){if(50<js)throw js=0,wh=null,Error(a(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var Ba={};function AT(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(n,i,o,c){return new AT(n,i,o,c)}function ff(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Mr(n,i){var o=n.alternate;return o===null?(o=pn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function q0(n,i){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,i=o.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function rc(n,i,o,c,p,m){var x=0;if(c=n,typeof n=="function")ff(n)&&(x=1);else if(typeof n=="string")x=jk(n,o,te.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case ne:return n=pn(31,o,i,p),n.elementType=ne,n.lanes=m,n;case T:return Gi(o.children,p,m,i);case k:x=8,p|=24;break;case S:return n=pn(12,o,i,p|2),n.elementType=S,n.lanes=m,n;case R:return n=pn(13,o,i,p),n.elementType=R,n.lanes=m,n;case F:return n=pn(19,o,i,p),n.elementType=F,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case M:x=10;break e;case E:x=9;break e;case z:x=11;break e;case I:x=14;break e;case J:x=16,c=null;break e}x=29,o=Error(a(130,n===null?"null":typeof n,"")),c=null}return i=pn(x,o,i,p),i.elementType=n,i.type=c,i.lanes=m,i}function Gi(n,i,o,c){return n=pn(7,n,c,i),n.lanes=o,n}function hf(n,i,o){return n=pn(6,n,null,i),n.lanes=o,n}function F0(n){var i=pn(18,null,null,0);return i.stateNode=n,i}function pf(n,i,o){return i=pn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var B0=new WeakMap;function jn(n,i){if(typeof n=="object"&&n!==null){var o=B0.get(n);return o!==void 0?o:(i={value:n,source:i,stack:Fg(i)},B0.set(n,i),i)}return{value:n,source:i,stack:Fg(i)}}var Pa=[],Ya=0,ic=null,fs=0,Dn=[],Rn=0,oi=null,fr=1,hr="";function Or(n,i){Pa[Ya++]=fs,Pa[Ya++]=ic,ic=n,fs=i}function P0(n,i,o){Dn[Rn++]=fr,Dn[Rn++]=hr,Dn[Rn++]=oi,oi=n;var c=fr;n=hr;var p=32-fn(c)-1;c&=~(1<<p),o+=1;var m=32-fn(i)+p;if(30<m){var x=p-p%5;m=(c&(1<<x)-1).toString(32),c>>=x,p-=x,fr=1<<32-fn(i)+p|o<<p|c,hr=m+n}else fr=1<<m|o<<p|c,hr=n}function mf(n){n.return!==null&&(Or(n,1),P0(n,1,0))}function gf(n){for(;n===ic;)ic=Pa[--Ya],Pa[Ya]=null,fs=Pa[--Ya],Pa[Ya]=null;for(;n===oi;)oi=Dn[--Rn],Dn[Rn]=null,hr=Dn[--Rn],Dn[Rn]=null,fr=Dn[--Rn],Dn[Rn]=null}function Y0(n,i){Dn[Rn++]=fr,Dn[Rn++]=hr,Dn[Rn++]=oi,fr=i.id,hr=i.overflow,oi=n}var Rt=null,rt=null,De=!1,si=null,Un=!1,vf=Error(a(519));function li(n){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw hs(jn(i,n)),vf}function X0(n){var i=n.stateNode,o=n.type,c=n.memoizedProps;switch(i[Dt]=n,i[Wt]=c,o){case"dialog":Me("cancel",i),Me("close",i);break;case"iframe":case"object":case"embed":Me("load",i);break;case"video":case"audio":for(o=0;o<Rs.length;o++)Me(Rs[o],i);break;case"source":Me("error",i);break;case"img":case"image":case"link":Me("error",i),Me("load",i);break;case"details":Me("toggle",i);break;case"input":Me("invalid",i),a0(i,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0);break;case"select":Me("invalid",i);break;case"textarea":Me("invalid",i),s0(i,c.value,c.defaultValue,c.children)}o=c.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||i.textContent===""+o||c.suppressHydrationWarning===!0||cb(i.textContent,o)?(c.popover!=null&&(Me("beforetoggle",i),Me("toggle",i)),c.onScroll!=null&&Me("scroll",i),c.onScrollEnd!=null&&Me("scrollend",i),c.onClick!=null&&(i.onclick=Cr),i=!0):i=!1,i||li(n,!0)}function G0(n){for(Rt=n.return;Rt;)switch(Rt.tag){case 5:case 31:case 13:Un=!1;return;case 27:case 3:Un=!0;return;default:Rt=Rt.return}}function Xa(n){if(n!==Rt)return!1;if(!De)return G0(n),De=!0,!1;var i=n.tag,o;if((o=i!==3&&i!==27)&&((o=i===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||Rh(n.type,n.memoizedProps)),o=!o),o&&rt&&li(n),G0(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));rt=yb(n)}else if(i===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));rt=yb(n)}else i===27?(i=rt,_i(n.type)?(n=Ih,Ih=null,rt=n):rt=i):rt=Rt?Ln(n.stateNode.nextSibling):null;return!0}function Vi(){rt=Rt=null,De=!1}function yf(){var n=si;return n!==null&&(nn===null?nn=n:nn.push.apply(nn,n),si=null),n}function hs(n){si===null?si=[n]:si.push(n)}var bf=N(null),Qi=null,Nr=null;function ci(n,i,o){Z(bf,i._currentValue),i._currentValue=o}function zr(n){n._currentValue=bf.current,Y(bf)}function wf(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function xf(n,i,o,c){var p=n.child;for(p!==null&&(p.return=n);p!==null;){var m=p.dependencies;if(m!==null){var x=p.child;m=m.firstContext;e:for(;m!==null;){var C=m;m=p;for(var j=0;j<i.length;j++)if(C.context===i[j]){m.lanes|=o,C=m.alternate,C!==null&&(C.lanes|=o),wf(m.return,o,n),c||(x=null);break e}m=C.next}}else if(p.tag===18){if(x=p.return,x===null)throw Error(a(341));x.lanes|=o,m=x.alternate,m!==null&&(m.lanes|=o),wf(x,o,n),x=null}else x=p.child;if(x!==null)x.return=p;else for(x=p;x!==null;){if(x===n){x=null;break}if(p=x.sibling,p!==null){p.return=x.return,x=p;break}x=x.return}p=x}}function Ga(n,i,o,c){n=null;for(var p=i,m=!1;p!==null;){if(!m){if((p.flags&524288)!==0)m=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var x=p.alternate;if(x===null)throw Error(a(387));if(x=x.memoizedProps,x!==null){var C=p.type;hn(p.pendingProps.value,x.value)||(n!==null?n.push(C):n=[C])}}else if(p===ce.current){if(x=p.alternate,x===null)throw Error(a(387));x.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(n!==null?n.push(Is):n=[Is])}p=p.return}n!==null&&xf(i,n,o,c),i.flags|=262144}function ac(n){for(n=n.firstContext;n!==null;){if(!hn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ki(n){Qi=n,Nr=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Ut(n){return V0(Qi,n)}function oc(n,i){return Qi===null&&Ki(n),V0(n,i)}function V0(n,i){var o=i._currentValue;if(i={context:i,memoizedValue:o,next:null},Nr===null){if(n===null)throw Error(a(308));Nr=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else Nr=Nr.next=i;return o}var MT=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(o,c){n.push(c)}};this.abort=function(){i.aborted=!0,n.forEach(function(o){return o()})}},OT=e.unstable_scheduleCallback,NT=e.unstable_NormalPriority,wt={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _f(){return{controller:new MT,data:new Map,refCount:0}}function ps(n){n.refCount--,n.refCount===0&&OT(NT,function(){n.controller.abort()})}var ms=null,Sf=0,Va=0,Qa=null;function zT(n,i){if(ms===null){var o=ms=[];Sf=0,Va=Eh(),Qa={status:"pending",value:void 0,then:function(c){o.push(c)}}}return Sf++,i.then(Q0,Q0),i}function Q0(){if(--Sf===0&&ms!==null){Qa!==null&&(Qa.status="fulfilled");var n=ms;ms=null,Va=0,Qa=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function jT(n,i){var o=[],c={status:"pending",value:null,reason:null,then:function(p){o.push(p)}};return n.then(function(){c.status="fulfilled",c.value=i;for(var p=0;p<o.length;p++)(0,o[p])(i)},function(p){for(c.status="rejected",c.reason=p,p=0;p<o.length;p++)(0,o[p])(void 0)}),c}var K0=A.S;A.S=function(n,i){jy=un(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&zT(n,i),K0!==null&&K0(n,i)};var Wi=N(null);function Tf(){var n=Wi.current;return n!==null?n:We.pooledCache}function sc(n,i){i===null?Z(Wi,Wi.current):Z(Wi,i.pool)}function W0(){var n=Tf();return n===null?null:{parent:wt._currentValue,pool:n}}var Ka=Error(a(460)),kf=Error(a(474)),lc=Error(a(542)),cc={then:function(){}};function Z0(n){return n=n.status,n==="fulfilled"||n==="rejected"}function J0(n,i,o){switch(o=n[o],o===void 0?n.push(i):o!==i&&(i.then(Cr,Cr),i=o),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,tv(n),n;default:if(typeof i.status=="string")i.then(Cr,Cr);else{if(n=We,n!==null&&100<n.shellSuspendCounter)throw Error(a(482));n=i,n.status="pending",n.then(function(c){if(i.status==="pending"){var p=i;p.status="fulfilled",p.value=c}},function(c){if(i.status==="pending"){var p=i;p.status="rejected",p.reason=c}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,tv(n),n}throw Ji=i,Ka}}function Zi(n){try{var i=n._init;return i(n._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(Ji=o,Ka):o}}var Ji=null;function ev(){if(Ji===null)throw Error(a(459));var n=Ji;return Ji=null,n}function tv(n){if(n===Ka||n===lc)throw Error(a(483))}var Wa=null,gs=0;function uc(n){var i=gs;return gs+=1,Wa===null&&(Wa=[]),J0(Wa,n,i)}function vs(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function dc(n,i){throw i.$$typeof===b?Error(a(525)):(n=Object.prototype.toString.call(i),Error(a(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function nv(n){function i(H,U){if(n){var q=H.deletions;q===null?(H.deletions=[U],H.flags|=16):q.push(U)}}function o(H,U){if(!n)return null;for(;U!==null;)i(H,U),U=U.sibling;return null}function c(H){for(var U=new Map;H!==null;)H.key!==null?U.set(H.key,H):U.set(H.index,H),H=H.sibling;return U}function p(H,U){return H=Mr(H,U),H.index=0,H.sibling=null,H}function m(H,U,q){return H.index=q,n?(q=H.alternate,q!==null?(q=q.index,q<U?(H.flags|=67108866,U):q):(H.flags|=67108866,U)):(H.flags|=1048576,U)}function x(H){return n&&H.alternate===null&&(H.flags|=67108866),H}function C(H,U,q,K){return U===null||U.tag!==6?(U=hf(q,H.mode,K),U.return=H,U):(U=p(U,q),U.return=H,U)}function j(H,U,q,K){var me=q.type;return me===T?G(H,U,q.props.children,K,q.key):U!==null&&(U.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===J&&Zi(me)===U.type)?(U=p(U,q.props),vs(U,q),U.return=H,U):(U=rc(q.type,q.key,q.props,null,H.mode,K),vs(U,q),U.return=H,U)}function B(H,U,q,K){return U===null||U.tag!==4||U.stateNode.containerInfo!==q.containerInfo||U.stateNode.implementation!==q.implementation?(U=pf(q,H.mode,K),U.return=H,U):(U=p(U,q.children||[]),U.return=H,U)}function G(H,U,q,K,me){return U===null||U.tag!==7?(U=Gi(q,H.mode,K,me),U.return=H,U):(U=p(U,q),U.return=H,U)}function W(H,U,q){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return U=hf(""+U,H.mode,q),U.return=H,U;if(typeof U=="object"&&U!==null){switch(U.$$typeof){case w:return q=rc(U.type,U.key,U.props,null,H.mode,q),vs(q,U),q.return=H,q;case _:return U=pf(U,H.mode,q),U.return=H,U;case J:return U=Zi(U),W(H,U,q)}if(Fe(U)||ae(U))return U=Gi(U,H.mode,q,null),U.return=H,U;if(typeof U.then=="function")return W(H,uc(U),q);if(U.$$typeof===M)return W(H,oc(H,U),q);dc(H,U)}return null}function P(H,U,q,K){var me=U!==null?U.key:null;if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return me!==null?null:C(H,U,""+q,K);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case w:return q.key===me?j(H,U,q,K):null;case _:return q.key===me?B(H,U,q,K):null;case J:return q=Zi(q),P(H,U,q,K)}if(Fe(q)||ae(q))return me!==null?null:G(H,U,q,K,null);if(typeof q.then=="function")return P(H,U,uc(q),K);if(q.$$typeof===M)return P(H,U,oc(H,q),K);dc(H,q)}return null}function X(H,U,q,K,me){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return H=H.get(q)||null,C(U,H,""+K,me);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case w:return H=H.get(K.key===null?q:K.key)||null,j(U,H,K,me);case _:return H=H.get(K.key===null?q:K.key)||null,B(U,H,K,me);case J:return K=Zi(K),X(H,U,q,K,me)}if(Fe(K)||ae(K))return H=H.get(q)||null,G(U,H,K,me,null);if(typeof K.then=="function")return X(H,U,q,uc(K),me);if(K.$$typeof===M)return X(H,U,q,oc(U,K),me);dc(U,K)}return null}function oe(H,U,q,K){for(var me=null,$e=null,ue=U,Te=U=0,Ne=null;ue!==null&&Te<q.length;Te++){ue.index>Te?(Ne=ue,ue=null):Ne=ue.sibling;var Le=P(H,ue,q[Te],K);if(Le===null){ue===null&&(ue=Ne);break}n&&ue&&Le.alternate===null&&i(H,ue),U=m(Le,U,Te),$e===null?me=Le:$e.sibling=Le,$e=Le,ue=Ne}if(Te===q.length)return o(H,ue),De&&Or(H,Te),me;if(ue===null){for(;Te<q.length;Te++)ue=W(H,q[Te],K),ue!==null&&(U=m(ue,U,Te),$e===null?me=ue:$e.sibling=ue,$e=ue);return De&&Or(H,Te),me}for(ue=c(ue);Te<q.length;Te++)Ne=X(ue,H,Te,q[Te],K),Ne!==null&&(n&&Ne.alternate!==null&&ue.delete(Ne.key===null?Te:Ne.key),U=m(Ne,U,Te),$e===null?me=Ne:$e.sibling=Ne,$e=Ne);return n&&ue.forEach(function(Ci){return i(H,Ci)}),De&&Or(H,Te),me}function ve(H,U,q,K){if(q==null)throw Error(a(151));for(var me=null,$e=null,ue=U,Te=U=0,Ne=null,Le=q.next();ue!==null&&!Le.done;Te++,Le=q.next()){ue.index>Te?(Ne=ue,ue=null):Ne=ue.sibling;var Ci=P(H,ue,Le.value,K);if(Ci===null){ue===null&&(ue=Ne);break}n&&ue&&Ci.alternate===null&&i(H,ue),U=m(Ci,U,Te),$e===null?me=Ci:$e.sibling=Ci,$e=Ci,ue=Ne}if(Le.done)return o(H,ue),De&&Or(H,Te),me;if(ue===null){for(;!Le.done;Te++,Le=q.next())Le=W(H,Le.value,K),Le!==null&&(U=m(Le,U,Te),$e===null?me=Le:$e.sibling=Le,$e=Le);return De&&Or(H,Te),me}for(ue=c(ue);!Le.done;Te++,Le=q.next())Le=X(ue,H,Te,Le.value,K),Le!==null&&(n&&Le.alternate!==null&&ue.delete(Le.key===null?Te:Le.key),U=m(Le,U,Te),$e===null?me=Le:$e.sibling=Le,$e=Le);return n&&ue.forEach(function(Pk){return i(H,Pk)}),De&&Or(H,Te),me}function Qe(H,U,q,K){if(typeof q=="object"&&q!==null&&q.type===T&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case w:e:{for(var me=q.key;U!==null;){if(U.key===me){if(me=q.type,me===T){if(U.tag===7){o(H,U.sibling),K=p(U,q.props.children),K.return=H,H=K;break e}}else if(U.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===J&&Zi(me)===U.type){o(H,U.sibling),K=p(U,q.props),vs(K,q),K.return=H,H=K;break e}o(H,U);break}else i(H,U);U=U.sibling}q.type===T?(K=Gi(q.props.children,H.mode,K,q.key),K.return=H,H=K):(K=rc(q.type,q.key,q.props,null,H.mode,K),vs(K,q),K.return=H,H=K)}return x(H);case _:e:{for(me=q.key;U!==null;){if(U.key===me)if(U.tag===4&&U.stateNode.containerInfo===q.containerInfo&&U.stateNode.implementation===q.implementation){o(H,U.sibling),K=p(U,q.children||[]),K.return=H,H=K;break e}else{o(H,U);break}else i(H,U);U=U.sibling}K=pf(q,H.mode,K),K.return=H,H=K}return x(H);case J:return q=Zi(q),Qe(H,U,q,K)}if(Fe(q))return oe(H,U,q,K);if(ae(q)){if(me=ae(q),typeof me!="function")throw Error(a(150));return q=me.call(q),ve(H,U,q,K)}if(typeof q.then=="function")return Qe(H,U,uc(q),K);if(q.$$typeof===M)return Qe(H,U,oc(H,q),K);dc(H,q)}return typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint"?(q=""+q,U!==null&&U.tag===6?(o(H,U.sibling),K=p(U,q),K.return=H,H=K):(o(H,U),K=hf(q,H.mode,K),K.return=H,H=K),x(H)):o(H,U)}return function(H,U,q,K){try{gs=0;var me=Qe(H,U,q,K);return Wa=null,me}catch(ue){if(ue===Ka||ue===lc)throw ue;var $e=pn(29,ue,null,H.mode);return $e.lanes=K,$e.return=H,$e}finally{}}}var ea=nv(!0),rv=nv(!1),ui=!1;function Ef(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cf(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function di(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function fi(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(qe&2)!==0){var p=c.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),c.pending=i,i=nc(n),I0(n,null,o),i}return tc(n,c,i,o),nc(n)}function ys(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194048)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Vg(n,o)}}function Af(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var p=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var x={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?p=m=x:m=m.next=x,o=o.next}while(o!==null);m===null?p=m=i:m=m.next=i}else p=m=i;o={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}var Mf=!1;function bs(){if(Mf){var n=Qa;if(n!==null)throw n}}function ws(n,i,o,c){Mf=!1;var p=n.updateQueue;ui=!1;var m=p.firstBaseUpdate,x=p.lastBaseUpdate,C=p.shared.pending;if(C!==null){p.shared.pending=null;var j=C,B=j.next;j.next=null,x===null?m=B:x.next=B,x=j;var G=n.alternate;G!==null&&(G=G.updateQueue,C=G.lastBaseUpdate,C!==x&&(C===null?G.firstBaseUpdate=B:C.next=B,G.lastBaseUpdate=j))}if(m!==null){var W=p.baseState;x=0,G=B=j=null,C=m;do{var P=C.lane&-536870913,X=P!==C.lane;if(X?(Oe&P)===P:(c&P)===P){P!==0&&P===Va&&(Mf=!0),G!==null&&(G=G.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var oe=n,ve=C;P=i;var Qe=o;switch(ve.tag){case 1:if(oe=ve.payload,typeof oe=="function"){W=oe.call(Qe,W,P);break e}W=oe;break e;case 3:oe.flags=oe.flags&-65537|128;case 0:if(oe=ve.payload,P=typeof oe=="function"?oe.call(Qe,W,P):oe,P==null)break e;W=g({},W,P);break e;case 2:ui=!0}}P=C.callback,P!==null&&(n.flags|=64,X&&(n.flags|=8192),X=p.callbacks,X===null?p.callbacks=[P]:X.push(P))}else X={lane:P,tag:C.tag,payload:C.payload,callback:C.callback,next:null},G===null?(B=G=X,j=W):G=G.next=X,x|=P;if(C=C.next,C===null){if(C=p.shared.pending,C===null)break;X=C,C=X.next,X.next=null,p.lastBaseUpdate=X,p.shared.pending=null}}while(!0);G===null&&(j=W),p.baseState=j,p.firstBaseUpdate=B,p.lastBaseUpdate=G,m===null&&(p.shared.lanes=0),vi|=x,n.lanes=x,n.memoizedState=W}}function iv(n,i){if(typeof n!="function")throw Error(a(191,n));n.call(i)}function av(n,i){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)iv(o[n],i)}var Za=N(null),fc=N(0);function ov(n,i){n=qr,Z(fc,n),Z(Za,i),qr=n|i.baseLanes}function Of(){Z(fc,qr),Z(Za,Za.current)}function Nf(){qr=fc.current,Y(Za),Y(fc)}var mn=N(null),$n=null;function hi(n){var i=n.alternate;Z(pt,pt.current&1),Z(mn,n),$n===null&&(i===null||Za.current!==null||i.memoizedState!==null)&&($n=n)}function zf(n){Z(pt,pt.current),Z(mn,n),$n===null&&($n=n)}function sv(n){n.tag===22?(Z(pt,pt.current),Z(mn,n),$n===null&&($n=n)):pi()}function pi(){Z(pt,pt.current),Z(mn,mn.current)}function gn(n){Y(mn),$n===n&&($n=null),Y(pt)}var pt=N(0);function hc(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Lh(o)||Hh(o)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var jr=0,Se=null,Ge=null,xt=null,pc=!1,Ja=!1,ta=!1,mc=0,xs=0,eo=null,DT=0;function ut(){throw Error(a(321))}function jf(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!hn(n[o],i[o]))return!1;return!0}function Df(n,i,o,c,p,m){return jr=m,Se=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,A.H=n===null||n.memoizedState===null?Pv:Qf,ta=!1,m=o(c,p),ta=!1,Ja&&(m=cv(i,o,c,p)),lv(n),m}function lv(n){A.H=Ts;var i=Ge!==null&&Ge.next!==null;if(jr=0,xt=Ge=Se=null,pc=!1,xs=0,eo=null,i)throw Error(a(300));n===null||_t||(n=n.dependencies,n!==null&&ac(n)&&(_t=!0))}function cv(n,i,o,c){Se=n;var p=0;do{if(Ja&&(eo=null),xs=0,Ja=!1,25<=p)throw Error(a(301));if(p+=1,xt=Ge=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}A.H=Yv,m=i(o,c)}while(Ja);return m}function RT(){var n=A.H,i=n.useState()[0];return i=typeof i.then=="function"?_s(i):i,n=n.useState()[0],(Ge!==null?Ge.memoizedState:null)!==n&&(Se.flags|=1024),i}function Rf(){var n=mc!==0;return mc=0,n}function Uf(n,i,o){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~o}function $f(n){if(pc){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}pc=!1}jr=0,xt=Ge=Se=null,Ja=!1,xs=mc=0,eo=null}function Yt(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xt===null?Se.memoizedState=xt=n:xt=xt.next=n,xt}function mt(){if(Ge===null){var n=Se.alternate;n=n!==null?n.memoizedState:null}else n=Ge.next;var i=xt===null?Se.memoizedState:xt.next;if(i!==null)xt=i,Ge=n;else{if(n===null)throw Se.alternate===null?Error(a(467)):Error(a(310));Ge=n,n={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},xt===null?Se.memoizedState=xt=n:xt=xt.next=n}return xt}function gc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _s(n){var i=xs;return xs+=1,eo===null&&(eo=[]),n=J0(eo,n,i),i=Se,(xt===null?i.memoizedState:xt.next)===null&&(i=i.alternate,A.H=i===null||i.memoizedState===null?Pv:Qf),n}function vc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return _s(n);if(n.$$typeof===M)return Ut(n)}throw Error(a(438,String(n)))}function Lf(n){var i=null,o=Se.updateQueue;if(o!==null&&(i=o.memoCache),i==null){var c=Se.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(i={data:c.data.map(function(p){return p.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),o===null&&(o=gc(),Se.updateQueue=o),o.memoCache=i,o=i.data[i.index],o===void 0)for(o=i.data[i.index]=Array(n),c=0;c<n;c++)o[c]=ge;return i.index++,o}function Dr(n,i){return typeof i=="function"?i(n):i}function yc(n){var i=mt();return Hf(i,Ge,n)}function Hf(n,i,o){var c=n.queue;if(c===null)throw Error(a(311));c.lastRenderedReducer=o;var p=n.baseQueue,m=c.pending;if(m!==null){if(p!==null){var x=p.next;p.next=m.next,m.next=x}i.baseQueue=p=m,c.pending=null}if(m=n.baseState,p===null)n.memoizedState=m;else{i=p.next;var C=x=null,j=null,B=i,G=!1;do{var W=B.lane&-536870913;if(W!==B.lane?(Oe&W)===W:(jr&W)===W){var P=B.revertLane;if(P===0)j!==null&&(j=j.next={lane:0,revertLane:0,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),W===Va&&(G=!0);else if((jr&P)===P){B=B.next,P===Va&&(G=!0);continue}else W={lane:0,revertLane:B.revertLane,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},j===null?(C=j=W,x=m):j=j.next=W,Se.lanes|=P,vi|=P;W=B.action,ta&&o(m,W),m=B.hasEagerState?B.eagerState:o(m,W)}else P={lane:W,revertLane:B.revertLane,gesture:B.gesture,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},j===null?(C=j=P,x=m):j=j.next=P,Se.lanes|=W,vi|=W;B=B.next}while(B!==null&&B!==i);if(j===null?x=m:j.next=C,!hn(m,n.memoizedState)&&(_t=!0,G&&(o=Qa,o!==null)))throw o;n.memoizedState=m,n.baseState=x,n.baseQueue=j,c.lastRenderedState=m}return p===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function If(n){var i=mt(),o=i.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=n;var c=o.dispatch,p=o.pending,m=i.memoizedState;if(p!==null){o.pending=null;var x=p=p.next;do m=n(m,x.action),x=x.next;while(x!==p);hn(m,i.memoizedState)||(_t=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,c]}function uv(n,i,o){var c=Se,p=mt(),m=De;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=i();var x=!hn((Ge||p).memoizedState,o);if(x&&(p.memoizedState=o,_t=!0),p=p.queue,Bf(hv.bind(null,c,p,n),[n]),p.getSnapshot!==i||x||xt!==null&&xt.memoizedState.tag&1){if(c.flags|=2048,to(9,{destroy:void 0},fv.bind(null,c,p,o,i),null),We===null)throw Error(a(349));m||(jr&127)!==0||dv(c,i,o)}return o}function dv(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Se.updateQueue,i===null?(i=gc(),Se.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function fv(n,i,o,c){i.value=o,i.getSnapshot=c,pv(i)&&mv(n)}function hv(n,i,o){return o(function(){pv(i)&&mv(n)})}function pv(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!hn(n,o)}catch{return!0}}function mv(n){var i=Xi(n,2);i!==null&&rn(i,n,2)}function qf(n){var i=Yt();if(typeof n=="function"){var o=n;if(n=o(),ta){ri(!0);try{o()}finally{ri(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dr,lastRenderedState:n},i}function gv(n,i,o,c){return n.baseState=o,Hf(n,Ge,typeof c=="function"?c:Dr)}function UT(n,i,o,c,p){if(xc(n))throw Error(a(485));if(n=i.action,n!==null){var m={payload:p,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){m.listeners.push(x)}};A.T!==null?o(!0):m.isTransition=!1,c(m),o=i.pending,o===null?(m.next=i.pending=m,vv(i,m)):(m.next=o.next,i.pending=o.next=m)}}function vv(n,i){var o=i.action,c=i.payload,p=n.state;if(i.isTransition){var m=A.T,x={};A.T=x;try{var C=o(p,c),j=A.S;j!==null&&j(x,C),yv(n,i,C)}catch(B){Ff(n,i,B)}finally{m!==null&&x.types!==null&&(m.types=x.types),A.T=m}}else try{m=o(p,c),yv(n,i,m)}catch(B){Ff(n,i,B)}}function yv(n,i,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(c){bv(n,i,c)},function(c){return Ff(n,i,c)}):bv(n,i,o)}function bv(n,i,o){i.status="fulfilled",i.value=o,wv(i),n.state=o,i=n.pending,i!==null&&(o=i.next,o===i?n.pending=null:(o=o.next,i.next=o,vv(n,o)))}function Ff(n,i,o){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do i.status="rejected",i.reason=o,wv(i),i=i.next;while(i!==c)}n.action=null}function wv(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function xv(n,i){return i}function _v(n,i){if(De){var o=We.formState;if(o!==null){e:{var c=Se;if(De){if(rt){t:{for(var p=rt,m=Un;p.nodeType!==8;){if(!m){p=null;break t}if(p=Ln(p.nextSibling),p===null){p=null;break t}}m=p.data,p=m==="F!"||m==="F"?p:null}if(p){rt=Ln(p.nextSibling),c=p.data==="F!";break e}}li(c)}c=!1}c&&(i=o[0])}}return o=Yt(),o.memoizedState=o.baseState=i,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xv,lastRenderedState:i},o.queue=c,o=qv.bind(null,Se,c),c.dispatch=o,c=qf(!1),m=Vf.bind(null,Se,!1,c.queue),c=Yt(),p={state:i,dispatch:null,action:n,pending:null},c.queue=p,o=UT.bind(null,Se,p,m,o),p.dispatch=o,c.memoizedState=n,[i,o,!1]}function Sv(n){var i=mt();return Tv(i,Ge,n)}function Tv(n,i,o){if(i=Hf(n,i,xv)[0],n=yc(Dr)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var c=_s(i)}catch(x){throw x===Ka?lc:x}else c=i;i=mt();var p=i.queue,m=p.dispatch;return o!==i.memoizedState&&(Se.flags|=2048,to(9,{destroy:void 0},$T.bind(null,p,o),null)),[c,m,n]}function $T(n,i){n.action=i}function kv(n){var i=mt(),o=Ge;if(o!==null)return Tv(i,o,n);mt(),i=i.memoizedState,o=mt();var c=o.queue.dispatch;return o.memoizedState=n,[i,c,!1]}function to(n,i,o,c){return n={tag:n,create:o,deps:c,inst:i,next:null},i=Se.updateQueue,i===null&&(i=gc(),Se.updateQueue=i),o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n),n}function Ev(){return mt().memoizedState}function bc(n,i,o,c){var p=Yt();Se.flags|=n,p.memoizedState=to(1|i,{destroy:void 0},o,c===void 0?null:c)}function wc(n,i,o,c){var p=mt();c=c===void 0?null:c;var m=p.memoizedState.inst;Ge!==null&&c!==null&&jf(c,Ge.memoizedState.deps)?p.memoizedState=to(i,m,o,c):(Se.flags|=n,p.memoizedState=to(1|i,m,o,c))}function Cv(n,i){bc(8390656,8,n,i)}function Bf(n,i){wc(2048,8,n,i)}function LT(n){Se.flags|=4;var i=Se.updateQueue;if(i===null)i=gc(),Se.updateQueue=i,i.events=[n];else{var o=i.events;o===null?i.events=[n]:o.push(n)}}function Av(n){var i=mt().memoizedState;return LT({ref:i,nextImpl:n}),function(){if((qe&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Mv(n,i){return wc(4,2,n,i)}function Ov(n,i){return wc(4,4,n,i)}function Nv(n,i){if(typeof i=="function"){n=n();var o=i(n);return function(){typeof o=="function"?o():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function zv(n,i,o){o=o!=null?o.concat([n]):null,wc(4,4,Nv.bind(null,i,n),o)}function Pf(){}function jv(n,i){var o=mt();i=i===void 0?null:i;var c=o.memoizedState;return i!==null&&jf(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function Dv(n,i){var o=mt();i=i===void 0?null:i;var c=o.memoizedState;if(i!==null&&jf(i,c[1]))return c[0];if(c=n(),ta){ri(!0);try{n()}finally{ri(!1)}}return o.memoizedState=[c,i],c}function Yf(n,i,o){return o===void 0||(jr&1073741824)!==0&&(Oe&261930)===0?n.memoizedState=i:(n.memoizedState=o,n=Ry(),Se.lanes|=n,vi|=n,o)}function Rv(n,i,o,c){return hn(o,i)?o:Za.current!==null?(n=Yf(n,o,c),hn(n,i)||(_t=!0),n):(jr&42)===0||(jr&1073741824)!==0&&(Oe&261930)===0?(_t=!0,n.memoizedState=o):(n=Ry(),Se.lanes|=n,vi|=n,i)}function Uv(n,i,o,c,p){var m=D.p;D.p=m!==0&&8>m?m:8;var x=A.T,C={};A.T=C,Vf(n,!1,i,o);try{var j=p(),B=A.S;if(B!==null&&B(C,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var G=jT(j,c);Ss(n,i,G,bn(n))}else Ss(n,i,c,bn(n))}catch(W){Ss(n,i,{then:function(){},status:"rejected",reason:W},bn())}finally{D.p=m,x!==null&&C.types!==null&&(x.types=C.types),A.T=x}}function HT(){}function Xf(n,i,o,c){if(n.tag!==5)throw Error(a(476));var p=$v(n).queue;Uv(n,p,i,L,o===null?HT:function(){return Lv(n),o(c)})}function $v(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:L,baseState:L,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dr,lastRenderedState:L},next:null};var o={};return i.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dr,lastRenderedState:o},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function Lv(n){var i=$v(n);i.next===null&&(i=n.alternate.memoizedState),Ss(n,i.next.queue,{},bn())}function Gf(){return Ut(Is)}function Hv(){return mt().memoizedState}function Iv(){return mt().memoizedState}function IT(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var o=bn();n=di(o);var c=fi(i,n,o);c!==null&&(rn(c,i,o),ys(c,i,o)),i={cache:_f()},n.payload=i;return}i=i.return}}function qT(n,i,o){var c=bn();o={lane:c,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},xc(n)?Fv(i,o):(o=df(n,i,o,c),o!==null&&(rn(o,n,c),Bv(o,i,c)))}function qv(n,i,o){var c=bn();Ss(n,i,o,c)}function Ss(n,i,o,c){var p={lane:c,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(xc(n))Fv(i,p);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var x=i.lastRenderedState,C=m(x,o);if(p.hasEagerState=!0,p.eagerState=C,hn(C,x))return tc(n,i,p,0),We===null&&ec(),!1}catch{}finally{}if(o=df(n,i,p,c),o!==null)return rn(o,n,c),Bv(o,i,c),!0}return!1}function Vf(n,i,o,c){if(c={lane:2,revertLane:Eh(),gesture:null,action:c,hasEagerState:!1,eagerState:null,next:null},xc(n)){if(i)throw Error(a(479))}else i=df(n,o,c,2),i!==null&&rn(i,n,2)}function xc(n){var i=n.alternate;return n===Se||i!==null&&i===Se}function Fv(n,i){Ja=pc=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Bv(n,i,o){if((o&4194048)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Vg(n,o)}}var Ts={readContext:Ut,use:vc,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useLayoutEffect:ut,useInsertionEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useSyncExternalStore:ut,useId:ut,useHostTransitionStatus:ut,useFormState:ut,useActionState:ut,useOptimistic:ut,useMemoCache:ut,useCacheRefresh:ut};Ts.useEffectEvent=ut;var Pv={readContext:Ut,use:vc,useCallback:function(n,i){return Yt().memoizedState=[n,i===void 0?null:i],n},useContext:Ut,useEffect:Cv,useImperativeHandle:function(n,i,o){o=o!=null?o.concat([n]):null,bc(4194308,4,Nv.bind(null,i,n),o)},useLayoutEffect:function(n,i){return bc(4194308,4,n,i)},useInsertionEffect:function(n,i){bc(4,2,n,i)},useMemo:function(n,i){var o=Yt();i=i===void 0?null:i;var c=n();if(ta){ri(!0);try{n()}finally{ri(!1)}}return o.memoizedState=[c,i],c},useReducer:function(n,i,o){var c=Yt();if(o!==void 0){var p=o(i);if(ta){ri(!0);try{o(i)}finally{ri(!1)}}}else p=i;return c.memoizedState=c.baseState=p,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:p},c.queue=n,n=n.dispatch=qT.bind(null,Se,n),[c.memoizedState,n]},useRef:function(n){var i=Yt();return n={current:n},i.memoizedState=n},useState:function(n){n=qf(n);var i=n.queue,o=qv.bind(null,Se,i);return i.dispatch=o,[n.memoizedState,o]},useDebugValue:Pf,useDeferredValue:function(n,i){var o=Yt();return Yf(o,n,i)},useTransition:function(){var n=qf(!1);return n=Uv.bind(null,Se,n.queue,!0,!1),Yt().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,o){var c=Se,p=Yt();if(De){if(o===void 0)throw Error(a(407));o=o()}else{if(o=i(),We===null)throw Error(a(349));(Oe&127)!==0||dv(c,i,o)}p.memoizedState=o;var m={value:o,getSnapshot:i};return p.queue=m,Cv(hv.bind(null,c,m,n),[n]),c.flags|=2048,to(9,{destroy:void 0},fv.bind(null,c,m,o,i),null),o},useId:function(){var n=Yt(),i=We.identifierPrefix;if(De){var o=hr,c=fr;o=(c&~(1<<32-fn(c)-1)).toString(32)+o,i="_"+i+"R_"+o,o=mc++,0<o&&(i+="H"+o.toString(32)),i+="_"}else o=DT++,i="_"+i+"r_"+o.toString(32)+"_";return n.memoizedState=i},useHostTransitionStatus:Gf,useFormState:_v,useActionState:_v,useOptimistic:function(n){var i=Yt();i.memoizedState=i.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=o,i=Vf.bind(null,Se,!0,o),o.dispatch=i,[n,i]},useMemoCache:Lf,useCacheRefresh:function(){return Yt().memoizedState=IT.bind(null,Se)},useEffectEvent:function(n){var i=Yt(),o={impl:n};return i.memoizedState=o,function(){if((qe&2)!==0)throw Error(a(440));return o.impl.apply(void 0,arguments)}}},Qf={readContext:Ut,use:vc,useCallback:jv,useContext:Ut,useEffect:Bf,useImperativeHandle:zv,useInsertionEffect:Mv,useLayoutEffect:Ov,useMemo:Dv,useReducer:yc,useRef:Ev,useState:function(){return yc(Dr)},useDebugValue:Pf,useDeferredValue:function(n,i){var o=mt();return Rv(o,Ge.memoizedState,n,i)},useTransition:function(){var n=yc(Dr)[0],i=mt().memoizedState;return[typeof n=="boolean"?n:_s(n),i]},useSyncExternalStore:uv,useId:Hv,useHostTransitionStatus:Gf,useFormState:Sv,useActionState:Sv,useOptimistic:function(n,i){var o=mt();return gv(o,Ge,n,i)},useMemoCache:Lf,useCacheRefresh:Iv};Qf.useEffectEvent=Av;var Yv={readContext:Ut,use:vc,useCallback:jv,useContext:Ut,useEffect:Bf,useImperativeHandle:zv,useInsertionEffect:Mv,useLayoutEffect:Ov,useMemo:Dv,useReducer:If,useRef:Ev,useState:function(){return If(Dr)},useDebugValue:Pf,useDeferredValue:function(n,i){var o=mt();return Ge===null?Yf(o,n,i):Rv(o,Ge.memoizedState,n,i)},useTransition:function(){var n=If(Dr)[0],i=mt().memoizedState;return[typeof n=="boolean"?n:_s(n),i]},useSyncExternalStore:uv,useId:Hv,useHostTransitionStatus:Gf,useFormState:kv,useActionState:kv,useOptimistic:function(n,i){var o=mt();return Ge!==null?gv(o,Ge,n,i):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:Lf,useCacheRefresh:Iv};Yv.useEffectEvent=Av;function Kf(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:g({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Wf={enqueueSetState:function(n,i,o){n=n._reactInternals;var c=bn(),p=di(c);p.payload=i,o!=null&&(p.callback=o),i=fi(n,p,c),i!==null&&(rn(i,n,c),ys(i,n,c))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=bn(),p=di(c);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=fi(n,p,c),i!==null&&(rn(i,n,c),ys(i,n,c))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=bn(),c=di(o);c.tag=2,i!=null&&(c.callback=i),i=fi(n,c,o),i!==null&&(rn(i,n,o),ys(i,n,o))}};function Xv(n,i,o,c,p,m,x){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,x):i.prototype&&i.prototype.isPureReactComponent?!us(o,c)||!us(p,m):!0}function Gv(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&Wf.enqueueReplaceState(i,i.state,null)}function na(n,i){var o=i;if("ref"in i){o={};for(var c in i)c!=="ref"&&(o[c]=i[c])}if(n=n.defaultProps){o===i&&(o=g({},o));for(var p in n)o[p]===void 0&&(o[p]=n[p])}return o}function Vv(n){Jl(n)}function Qv(n){console.error(n)}function Kv(n){Jl(n)}function _c(n,i){try{var o=n.onUncaughtError;o(i.value,{componentStack:i.stack})}catch(c){setTimeout(function(){throw c})}}function Wv(n,i,o){try{var c=n.onCaughtError;c(o.value,{componentStack:o.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function Zf(n,i,o){return o=di(o),o.tag=3,o.payload={element:null},o.callback=function(){_c(n,i)},o}function Zv(n){return n=di(n),n.tag=3,n}function Jv(n,i,o,c){var p=o.type.getDerivedStateFromError;if(typeof p=="function"){var m=c.value;n.payload=function(){return p(m)},n.callback=function(){Wv(i,o,c)}}var x=o.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(n.callback=function(){Wv(i,o,c),typeof p!="function"&&(yi===null?yi=new Set([this]):yi.add(this));var C=c.stack;this.componentDidCatch(c.value,{componentStack:C!==null?C:""})})}function FT(n,i,o,c,p){if(o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(i=o.alternate,i!==null&&Ga(i,o,p,!0),o=mn.current,o!==null){switch(o.tag){case 31:case 13:return $n===null?Dc():o.alternate===null&&dt===0&&(dt=3),o.flags&=-257,o.flags|=65536,o.lanes=p,c===cc?o.flags|=16384:(i=o.updateQueue,i===null?o.updateQueue=new Set([c]):i.add(c),Sh(n,c,p)),!1;case 22:return o.flags|=65536,c===cc?o.flags|=16384:(i=o.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([c])},o.updateQueue=i):(o=i.retryQueue,o===null?i.retryQueue=new Set([c]):o.add(c)),Sh(n,c,p)),!1}throw Error(a(435,o.tag))}return Sh(n,c,p),Dc(),!1}if(De)return i=mn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=p,c!==vf&&(n=Error(a(422),{cause:c}),hs(jn(n,o)))):(c!==vf&&(i=Error(a(423),{cause:c}),hs(jn(i,o))),n=n.current.alternate,n.flags|=65536,p&=-p,n.lanes|=p,c=jn(c,o),p=Zf(n.stateNode,c,p),Af(n,p),dt!==4&&(dt=2)),!1;var m=Error(a(520),{cause:c});if(m=jn(m,o),zs===null?zs=[m]:zs.push(m),dt!==4&&(dt=2),i===null)return!0;c=jn(c,o),o=i;do{switch(o.tag){case 3:return o.flags|=65536,n=p&-p,o.lanes|=n,n=Zf(o.stateNode,c,n),Af(o,n),!1;case 1:if(i=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(yi===null||!yi.has(m))))return o.flags|=65536,p&=-p,o.lanes|=p,p=Zv(p),Jv(p,n,o,c),Af(o,p),!1}o=o.return}while(o!==null);return!1}var Jf=Error(a(461)),_t=!1;function $t(n,i,o,c){i.child=n===null?rv(i,null,o,c):ea(i,n.child,o,c)}function ey(n,i,o,c,p){o=o.render;var m=i.ref;if("ref"in c){var x={};for(var C in c)C!=="ref"&&(x[C]=c[C])}else x=c;return Ki(i),c=Df(n,i,o,x,m,p),C=Rf(),n!==null&&!_t?(Uf(n,i,p),Rr(n,i,p)):(De&&C&&mf(i),i.flags|=1,$t(n,i,c,p),i.child)}function ty(n,i,o,c,p){if(n===null){var m=o.type;return typeof m=="function"&&!ff(m)&&m.defaultProps===void 0&&o.compare===null?(i.tag=15,i.type=m,ny(n,i,m,c,p)):(n=rc(o.type,null,c,i,i.mode,p),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,!sh(n,p)){var x=m.memoizedProps;if(o=o.compare,o=o!==null?o:us,o(x,c)&&n.ref===i.ref)return Rr(n,i,p)}return i.flags|=1,n=Mr(m,c),n.ref=i.ref,n.return=i,i.child=n}function ny(n,i,o,c,p){if(n!==null){var m=n.memoizedProps;if(us(m,c)&&n.ref===i.ref)if(_t=!1,i.pendingProps=c=m,sh(n,p))(n.flags&131072)!==0&&(_t=!0);else return i.lanes=n.lanes,Rr(n,i,p)}return eh(n,i,o,c,p)}function ry(n,i,o,c){var p=c.children,m=n!==null?n.memoizedState:null;if(n===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),c.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,n!==null){for(c=i.child=n.child,p=0;c!==null;)p=p|c.lanes|c.childLanes,c=c.sibling;c=p&~m}else c=0,i.child=null;return iy(n,i,m,o,c)}if((o&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&sc(i,m!==null?m.cachePool:null),m!==null?ov(i,m):Of(),sv(i);else return c=i.lanes=536870912,iy(n,i,m!==null?m.baseLanes|o:o,o,c)}else m!==null?(sc(i,m.cachePool),ov(i,m),pi(),i.memoizedState=null):(n!==null&&sc(i,null),Of(),pi());return $t(n,i,p,o),i.child}function ks(n,i){return n!==null&&n.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function iy(n,i,o,c,p){var m=Tf();return m=m===null?null:{parent:wt._currentValue,pool:m},i.memoizedState={baseLanes:o,cachePool:m},n!==null&&sc(i,null),Of(),sv(i),n!==null&&Ga(n,i,c,!0),i.childLanes=p,null}function Sc(n,i){return i=kc({mode:i.mode,children:i.children},n.mode),i.ref=n.ref,n.child=i,i.return=n,i}function ay(n,i,o){return ea(i,n.child,null,o),n=Sc(i,i.pendingProps),n.flags|=2,gn(i),i.memoizedState=null,n}function BT(n,i,o){var c=i.pendingProps,p=(i.flags&128)!==0;if(i.flags&=-129,n===null){if(De){if(c.mode==="hidden")return n=Sc(i,c),i.lanes=536870912,ks(null,n);if(zf(i),(n=rt)?(n=vb(n,Un),n=n!==null&&n.data==="&"?n:null,n!==null&&(i.memoizedState={dehydrated:n,treeContext:oi!==null?{id:fr,overflow:hr}:null,retryLane:536870912,hydrationErrors:null},o=F0(n),o.return=i,i.child=o,Rt=i,rt=null)):n=null,n===null)throw li(i);return i.lanes=536870912,null}return Sc(i,c)}var m=n.memoizedState;if(m!==null){var x=m.dehydrated;if(zf(i),p)if(i.flags&256)i.flags&=-257,i=ay(n,i,o);else if(i.memoizedState!==null)i.child=n.child,i.flags|=128,i=null;else throw Error(a(558));else if(_t||Ga(n,i,o,!1),p=(o&n.childLanes)!==0,_t||p){if(c=We,c!==null&&(x=Qg(c,o),x!==0&&x!==m.retryLane))throw m.retryLane=x,Xi(n,x),rn(c,n,x),Jf;Dc(),i=ay(n,i,o)}else n=m.treeContext,rt=Ln(x.nextSibling),Rt=i,De=!0,si=null,Un=!1,n!==null&&Y0(i,n),i=Sc(i,c),i.flags|=4096;return i}return n=Mr(n.child,{mode:c.mode,children:c.children}),n.ref=i.ref,i.child=n,n.return=i,n}function Tc(n,i){var o=i.ref;if(o===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(n===null||n.ref!==o)&&(i.flags|=4194816)}}function eh(n,i,o,c,p){return Ki(i),o=Df(n,i,o,c,void 0,p),c=Rf(),n!==null&&!_t?(Uf(n,i,p),Rr(n,i,p)):(De&&c&&mf(i),i.flags|=1,$t(n,i,o,p),i.child)}function oy(n,i,o,c,p,m){return Ki(i),i.updateQueue=null,o=cv(i,c,o,p),lv(n),c=Rf(),n!==null&&!_t?(Uf(n,i,m),Rr(n,i,m)):(De&&c&&mf(i),i.flags|=1,$t(n,i,o,m),i.child)}function sy(n,i,o,c,p){if(Ki(i),i.stateNode===null){var m=Ba,x=o.contextType;typeof x=="object"&&x!==null&&(m=Ut(x)),m=new o(c,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Wf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=c,m.state=i.memoizedState,m.refs={},Ef(i),x=o.contextType,m.context=typeof x=="object"&&x!==null?Ut(x):Ba,m.state=i.memoizedState,x=o.getDerivedStateFromProps,typeof x=="function"&&(Kf(i,o,x,c),m.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(x=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),x!==m.state&&Wf.enqueueReplaceState(m,m.state,null),ws(i,c,m,p),bs(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),c=!0}else if(n===null){m=i.stateNode;var C=i.memoizedProps,j=na(o,C);m.props=j;var B=m.context,G=o.contextType;x=Ba,typeof G=="object"&&G!==null&&(x=Ut(G));var W=o.getDerivedStateFromProps;G=typeof W=="function"||typeof m.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,G||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(C||B!==x)&&Gv(i,m,c,x),ui=!1;var P=i.memoizedState;m.state=P,ws(i,c,m,p),bs(),B=i.memoizedState,C||P!==B||ui?(typeof W=="function"&&(Kf(i,o,W,c),B=i.memoizedState),(j=ui||Xv(i,o,j,c,P,B,x))?(G||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=B),m.props=c,m.state=B,m.context=x,c=j):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{m=i.stateNode,Cf(n,i),x=i.memoizedProps,G=na(o,x),m.props=G,W=i.pendingProps,P=m.context,B=o.contextType,j=Ba,typeof B=="object"&&B!==null&&(j=Ut(B)),C=o.getDerivedStateFromProps,(B=typeof C=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(x!==W||P!==j)&&Gv(i,m,c,j),ui=!1,P=i.memoizedState,m.state=P,ws(i,c,m,p),bs();var X=i.memoizedState;x!==W||P!==X||ui||n!==null&&n.dependencies!==null&&ac(n.dependencies)?(typeof C=="function"&&(Kf(i,o,C,c),X=i.memoizedState),(G=ui||Xv(i,o,G,c,P,X,j)||n!==null&&n.dependencies!==null&&ac(n.dependencies))?(B||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,X,j),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,X,j)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||x===n.memoizedProps&&P===n.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||x===n.memoizedProps&&P===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=X),m.props=c,m.state=X,m.context=j,c=G):(typeof m.componentDidUpdate!="function"||x===n.memoizedProps&&P===n.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||x===n.memoizedProps&&P===n.memoizedState||(i.flags|=1024),c=!1)}return m=c,Tc(n,i),c=(i.flags&128)!==0,m||c?(m=i.stateNode,o=c&&typeof o.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,n!==null&&c?(i.child=ea(i,n.child,null,p),i.child=ea(i,null,o,p)):$t(n,i,o,p),i.memoizedState=m.state,n=i.child):n=Rr(n,i,p),n}function ly(n,i,o,c){return Vi(),i.flags|=256,$t(n,i,o,c),i.child}var th={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nh(n){return{baseLanes:n,cachePool:W0()}}function rh(n,i,o){return n=n!==null?n.childLanes&~o:0,i&&(n|=yn),n}function cy(n,i,o){var c=i.pendingProps,p=!1,m=(i.flags&128)!==0,x;if((x=m)||(x=n!==null&&n.memoizedState===null?!1:(pt.current&2)!==0),x&&(p=!0,i.flags&=-129),x=(i.flags&32)!==0,i.flags&=-33,n===null){if(De){if(p?hi(i):pi(),(n=rt)?(n=vb(n,Un),n=n!==null&&n.data!=="&"?n:null,n!==null&&(i.memoizedState={dehydrated:n,treeContext:oi!==null?{id:fr,overflow:hr}:null,retryLane:536870912,hydrationErrors:null},o=F0(n),o.return=i,i.child=o,Rt=i,rt=null)):n=null,n===null)throw li(i);return Hh(n)?i.lanes=32:i.lanes=536870912,null}var C=c.children;return c=c.fallback,p?(pi(),p=i.mode,C=kc({mode:"hidden",children:C},p),c=Gi(c,p,o,null),C.return=i,c.return=i,C.sibling=c,i.child=C,c=i.child,c.memoizedState=nh(o),c.childLanes=rh(n,x,o),i.memoizedState=th,ks(null,c)):(hi(i),ih(i,C))}var j=n.memoizedState;if(j!==null&&(C=j.dehydrated,C!==null)){if(m)i.flags&256?(hi(i),i.flags&=-257,i=ah(n,i,o)):i.memoizedState!==null?(pi(),i.child=n.child,i.flags|=128,i=null):(pi(),C=c.fallback,p=i.mode,c=kc({mode:"visible",children:c.children},p),C=Gi(C,p,o,null),C.flags|=2,c.return=i,C.return=i,c.sibling=C,i.child=c,ea(i,n.child,null,o),c=i.child,c.memoizedState=nh(o),c.childLanes=rh(n,x,o),i.memoizedState=th,i=ks(null,c));else if(hi(i),Hh(C)){if(x=C.nextSibling&&C.nextSibling.dataset,x)var B=x.dgst;x=B,c=Error(a(419)),c.stack="",c.digest=x,hs({value:c,source:null,stack:null}),i=ah(n,i,o)}else if(_t||Ga(n,i,o,!1),x=(o&n.childLanes)!==0,_t||x){if(x=We,x!==null&&(c=Qg(x,o),c!==0&&c!==j.retryLane))throw j.retryLane=c,Xi(n,c),rn(x,n,c),Jf;Lh(C)||Dc(),i=ah(n,i,o)}else Lh(C)?(i.flags|=192,i.child=n.child,i=null):(n=j.treeContext,rt=Ln(C.nextSibling),Rt=i,De=!0,si=null,Un=!1,n!==null&&Y0(i,n),i=ih(i,c.children),i.flags|=4096);return i}return p?(pi(),C=c.fallback,p=i.mode,j=n.child,B=j.sibling,c=Mr(j,{mode:"hidden",children:c.children}),c.subtreeFlags=j.subtreeFlags&65011712,B!==null?C=Mr(B,C):(C=Gi(C,p,o,null),C.flags|=2),C.return=i,c.return=i,c.sibling=C,i.child=c,ks(null,c),c=i.child,C=n.child.memoizedState,C===null?C=nh(o):(p=C.cachePool,p!==null?(j=wt._currentValue,p=p.parent!==j?{parent:j,pool:j}:p):p=W0(),C={baseLanes:C.baseLanes|o,cachePool:p}),c.memoizedState=C,c.childLanes=rh(n,x,o),i.memoizedState=th,ks(n.child,c)):(hi(i),o=n.child,n=o.sibling,o=Mr(o,{mode:"visible",children:c.children}),o.return=i,o.sibling=null,n!==null&&(x=i.deletions,x===null?(i.deletions=[n],i.flags|=16):x.push(n)),i.child=o,i.memoizedState=null,o)}function ih(n,i){return i=kc({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function kc(n,i){return n=pn(22,n,null,i),n.lanes=0,n}function ah(n,i,o){return ea(i,n.child,null,o),n=ih(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function uy(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),wf(n.return,i,o)}function oh(n,i,o,c,p,m){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:p,treeForkCount:m}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=c,x.tail=o,x.tailMode=p,x.treeForkCount=m)}function dy(n,i,o){var c=i.pendingProps,p=c.revealOrder,m=c.tail;c=c.children;var x=pt.current,C=(x&2)!==0;if(C?(x=x&1|2,i.flags|=128):x&=1,Z(pt,x),$t(n,i,c,o),c=De?fs:0,!C&&n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&uy(n,o,i);else if(n.tag===19)uy(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(p){case"forwards":for(o=i.child,p=null;o!==null;)n=o.alternate,n!==null&&hc(n)===null&&(p=o),o=o.sibling;o=p,o===null?(p=i.child,i.child=null):(p=o.sibling,o.sibling=null),oh(i,!1,p,o,m,c);break;case"backwards":case"unstable_legacy-backwards":for(o=null,p=i.child,i.child=null;p!==null;){if(n=p.alternate,n!==null&&hc(n)===null){i.child=p;break}n=p.sibling,p.sibling=o,o=p,p=n}oh(i,!0,o,null,m,c);break;case"together":oh(i,!1,null,null,void 0,c);break;default:i.memoizedState=null}return i.child}function Rr(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),vi|=i.lanes,(o&i.childLanes)===0)if(n!==null){if(Ga(n,i,o,!1),(o&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(a(153));if(i.child!==null){for(n=i.child,o=Mr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=Mr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function sh(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&ac(n)))}function PT(n,i,o){switch(i.tag){case 3:be(i,i.stateNode.containerInfo),ci(i,wt,n.memoizedState.cache),Vi();break;case 27:case 5:ct(i);break;case 4:be(i,i.stateNode.containerInfo);break;case 10:ci(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,zf(i),null;break;case 13:var c=i.memoizedState;if(c!==null)return c.dehydrated!==null?(hi(i),i.flags|=128,null):(o&i.child.childLanes)!==0?cy(n,i,o):(hi(i),n=Rr(n,i,o),n!==null?n.sibling:null);hi(i);break;case 19:var p=(n.flags&128)!==0;if(c=(o&i.childLanes)!==0,c||(Ga(n,i,o,!1),c=(o&i.childLanes)!==0),p){if(c)return dy(n,i,o);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Z(pt,pt.current),c)break;return null;case 22:return i.lanes=0,ry(n,i,o,i.pendingProps);case 24:ci(i,wt,n.memoizedState.cache)}return Rr(n,i,o)}function fy(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps)_t=!0;else{if(!sh(n,o)&&(i.flags&128)===0)return _t=!1,PT(n,i,o);_t=(n.flags&131072)!==0}else _t=!1,De&&(i.flags&1048576)!==0&&P0(i,fs,i.index);switch(i.lanes=0,i.tag){case 16:e:{var c=i.pendingProps;if(n=Zi(i.elementType),i.type=n,typeof n=="function")ff(n)?(c=na(n,c),i.tag=1,i=sy(null,i,n,c,o)):(i.tag=0,i=eh(null,i,n,c,o));else{if(n!=null){var p=n.$$typeof;if(p===z){i.tag=11,i=ey(null,i,n,c,o);break e}else if(p===I){i.tag=14,i=ty(null,i,n,c,o);break e}}throw i=Ie(n)||n,Error(a(306,i,""))}}return i;case 0:return eh(n,i,i.type,i.pendingProps,o);case 1:return c=i.type,p=na(c,i.pendingProps),sy(n,i,c,p,o);case 3:e:{if(be(i,i.stateNode.containerInfo),n===null)throw Error(a(387));c=i.pendingProps;var m=i.memoizedState;p=m.element,Cf(n,i),ws(i,c,null,o);var x=i.memoizedState;if(c=x.cache,ci(i,wt,c),c!==m.cache&&xf(i,[wt],o,!0),bs(),c=x.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:x.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=ly(n,i,c,o);break e}else if(c!==p){p=jn(Error(a(424)),i),hs(p),i=ly(n,i,c,o);break e}else{switch(n=i.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(rt=Ln(n.firstChild),Rt=i,De=!0,si=null,Un=!0,o=rv(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Vi(),c===p){i=Rr(n,i,o);break e}$t(n,i,c,o)}i=i.child}return i;case 26:return Tc(n,i),n===null?(o=Sb(i.type,null,i.pendingProps,null))?i.memoizedState=o:De||(o=i.type,n=i.pendingProps,c=qc(le.current).createElement(o),c[Dt]=i,c[Wt]=n,Lt(c,o,n),Ot(c),i.stateNode=c):i.memoizedState=Sb(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return ct(i),n===null&&De&&(c=i.stateNode=wb(i.type,i.pendingProps,le.current),Rt=i,Un=!0,p=rt,_i(i.type)?(Ih=p,rt=Ln(c.firstChild)):rt=p),$t(n,i,i.pendingProps.children,o),Tc(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&De&&((p=c=rt)&&(c=wk(c,i.type,i.pendingProps,Un),c!==null?(i.stateNode=c,Rt=i,rt=Ln(c.firstChild),Un=!1,p=!0):p=!1),p||li(i)),ct(i),p=i.type,m=i.pendingProps,x=n!==null?n.memoizedProps:null,c=m.children,Rh(p,m)?c=null:x!==null&&Rh(p,x)&&(i.flags|=32),i.memoizedState!==null&&(p=Df(n,i,RT,null,null,o),Is._currentValue=p),Tc(n,i),$t(n,i,c,o),i.child;case 6:return n===null&&De&&((n=o=rt)&&(o=xk(o,i.pendingProps,Un),o!==null?(i.stateNode=o,Rt=i,rt=null,n=!0):n=!1),n||li(i)),null;case 13:return cy(n,i,o);case 4:return be(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=ea(i,null,c,o):$t(n,i,c,o),i.child;case 11:return ey(n,i,i.type,i.pendingProps,o);case 7:return $t(n,i,i.pendingProps,o),i.child;case 8:return $t(n,i,i.pendingProps.children,o),i.child;case 12:return $t(n,i,i.pendingProps.children,o),i.child;case 10:return c=i.pendingProps,ci(i,i.type,c.value),$t(n,i,c.children,o),i.child;case 9:return p=i.type._context,c=i.pendingProps.children,Ki(i),p=Ut(p),c=c(p),i.flags|=1,$t(n,i,c,o),i.child;case 14:return ty(n,i,i.type,i.pendingProps,o);case 15:return ny(n,i,i.type,i.pendingProps,o);case 19:return dy(n,i,o);case 31:return BT(n,i,o);case 22:return ry(n,i,o,i.pendingProps);case 24:return Ki(i),c=Ut(wt),n===null?(p=Tf(),p===null&&(p=We,m=_f(),p.pooledCache=m,m.refCount++,m!==null&&(p.pooledCacheLanes|=o),p=m),i.memoizedState={parent:c,cache:p},Ef(i),ci(i,wt,p)):((n.lanes&o)!==0&&(Cf(n,i),ws(i,null,null,o),bs()),p=n.memoizedState,m=i.memoizedState,p.parent!==c?(p={parent:c,cache:c},i.memoizedState=p,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=p),ci(i,wt,c)):(c=m.cache,ci(i,wt,c),c!==p.cache&&xf(i,[wt],o,!0))),$t(n,i,i.pendingProps.children,o),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Ur(n){n.flags|=4}function lh(n,i,o,c,p){if((i=(n.mode&32)!==0)&&(i=!1),i){if(n.flags|=16777216,(p&335544128)===p)if(n.stateNode.complete)n.flags|=8192;else if(Hy())n.flags|=8192;else throw Ji=cc,kf}else n.flags&=-16777217}function hy(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Ab(i))if(Hy())n.flags|=8192;else throw Ji=cc,kf}function Ec(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?Xg():536870912,n.lanes|=i,ao|=i)}function Es(n,i){if(!De)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function it(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var p=n.child;p!==null;)o|=p.lanes|p.childLanes,c|=p.subtreeFlags&65011712,c|=p.flags&65011712,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)o|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function YT(n,i,o){var c=i.pendingProps;switch(gf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(i),null;case 1:return it(i),null;case 3:return o=i.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),i.memoizedState.cache!==c&&(i.flags|=2048),zr(wt),ye(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(Xa(i)?Ur(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,yf())),it(i),null;case 26:var p=i.type,m=i.memoizedState;return n===null?(Ur(i),m!==null?(it(i),hy(i,m)):(it(i),lh(i,p,null,c,o))):m?m!==n.memoizedState?(Ur(i),it(i),hy(i,m)):(it(i),i.flags&=-16777217):(n=n.memoizedProps,n!==c&&Ur(i),it(i),lh(i,p,n,c,o)),null;case 27:if(Xn(i),o=le.current,p=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==c&&Ur(i);else{if(!c){if(i.stateNode===null)throw Error(a(166));return it(i),null}n=te.current,Xa(i)?X0(i):(n=wb(p,c,o),i.stateNode=n,Ur(i))}return it(i),null;case 5:if(Xn(i),p=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==c&&Ur(i);else{if(!c){if(i.stateNode===null)throw Error(a(166));return it(i),null}if(m=te.current,Xa(i))X0(i);else{var x=qc(le.current);switch(m){case 1:m=x.createElementNS("http://www.w3.org/2000/svg",p);break;case 2:m=x.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;default:switch(p){case"svg":m=x.createElementNS("http://www.w3.org/2000/svg",p);break;case"math":m=x.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;case"script":m=x.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof c.is=="string"?x.createElement("select",{is:c.is}):x.createElement("select"),c.multiple?m.multiple=!0:c.size&&(m.size=c.size);break;default:m=typeof c.is=="string"?x.createElement(p,{is:c.is}):x.createElement(p)}}m[Dt]=i,m[Wt]=c;e:for(x=i.child;x!==null;){if(x.tag===5||x.tag===6)m.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===i)break e;for(;x.sibling===null;){if(x.return===null||x.return===i)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}i.stateNode=m;e:switch(Lt(m,p,c),p){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}c&&Ur(i)}}return it(i),lh(i,i.type,n===null?null:n.memoizedProps,i.pendingProps,o),null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==c&&Ur(i);else{if(typeof c!="string"&&i.stateNode===null)throw Error(a(166));if(n=le.current,Xa(i)){if(n=i.stateNode,o=i.memoizedProps,c=null,p=Rt,p!==null)switch(p.tag){case 27:case 5:c=p.memoizedProps}n[Dt]=i,n=!!(n.nodeValue===o||c!==null&&c.suppressHydrationWarning===!0||cb(n.nodeValue,o)),n||li(i,!0)}else n=qc(n).createTextNode(c),n[Dt]=i,i.stateNode=n}return it(i),null;case 31:if(o=i.memoizedState,n===null||n.memoizedState!==null){if(c=Xa(i),o!==null){if(n===null){if(!c)throw Error(a(318));if(n=i.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(557));n[Dt]=i}else Vi(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;it(i),n=!1}else o=yf(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=o),n=!0;if(!n)return i.flags&256?(gn(i),i):(gn(i),null);if((i.flags&128)!==0)throw Error(a(558))}return it(i),null;case 13:if(c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(p=Xa(i),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(a(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(a(317));p[Dt]=i}else Vi(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;it(i),p=!1}else p=yf(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=p),p=!0;if(!p)return i.flags&256?(gn(i),i):(gn(i),null)}return gn(i),(i.flags&128)!==0?(i.lanes=o,i):(o=c!==null,n=n!==null&&n.memoizedState!==null,o&&(c=i.child,p=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(p=c.alternate.memoizedState.cachePool.pool),m=null,c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==p&&(c.flags|=2048)),o!==n&&o&&(i.child.flags|=8192),Ec(i,i.updateQueue),it(i),null);case 4:return ye(),n===null&&Oh(i.stateNode.containerInfo),it(i),null;case 10:return zr(i.type),it(i),null;case 19:if(Y(pt),c=i.memoizedState,c===null)return it(i),null;if(p=(i.flags&128)!==0,m=c.rendering,m===null)if(p)Es(c,!1);else{if(dt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(m=hc(n),m!==null){for(i.flags|=128,Es(c,!1),n=m.updateQueue,i.updateQueue=n,Ec(i,n),i.subtreeFlags=0,n=o,o=i.child;o!==null;)q0(o,n),o=o.sibling;return Z(pt,pt.current&1|2),De&&Or(i,c.treeForkCount),i.child}n=n.sibling}c.tail!==null&&un()>Nc&&(i.flags|=128,p=!0,Es(c,!1),i.lanes=4194304)}else{if(!p)if(n=hc(m),n!==null){if(i.flags|=128,p=!0,n=n.updateQueue,i.updateQueue=n,Ec(i,n),Es(c,!0),c.tail===null&&c.tailMode==="hidden"&&!m.alternate&&!De)return it(i),null}else 2*un()-c.renderingStartTime>Nc&&o!==536870912&&(i.flags|=128,p=!0,Es(c,!1),i.lanes=4194304);c.isBackwards?(m.sibling=i.child,i.child=m):(n=c.last,n!==null?n.sibling=m:i.child=m,c.last=m)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=un(),n.sibling=null,o=pt.current,Z(pt,p?o&1|2:o&1),De&&Or(i,c.treeForkCount),n):(it(i),null);case 22:case 23:return gn(i),Nf(),c=i.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(i.flags|=8192):c&&(i.flags|=8192),c?(o&536870912)!==0&&(i.flags&128)===0&&(it(i),i.subtreeFlags&6&&(i.flags|=8192)):it(i),o=i.updateQueue,o!==null&&Ec(i,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==o&&(i.flags|=2048),n!==null&&Y(Wi),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),zr(wt),it(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function XT(n,i){switch(gf(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return zr(wt),ye(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return Xn(i),null;case 31:if(i.memoizedState!==null){if(gn(i),i.alternate===null)throw Error(a(340));Vi()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 13:if(gn(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Vi()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Y(pt),null;case 4:return ye(),null;case 10:return zr(i.type),null;case 22:case 23:return gn(i),Nf(),n!==null&&Y(Wi),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return zr(wt),null;case 25:return null;default:return null}}function py(n,i){switch(gf(i),i.tag){case 3:zr(wt),ye();break;case 26:case 27:case 5:Xn(i);break;case 4:ye();break;case 31:i.memoizedState!==null&&gn(i);break;case 13:gn(i);break;case 19:Y(pt);break;case 10:zr(i.type);break;case 22:case 23:gn(i),Nf(),n!==null&&Y(Wi);break;case 24:zr(wt)}}function Cs(n,i){try{var o=i.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var p=c.next;o=p;do{if((o.tag&n)===n){c=void 0;var m=o.create,x=o.inst;c=m(),x.destroy=c}o=o.next}while(o!==p)}}catch(C){Xe(i,i.return,C)}}function mi(n,i,o){try{var c=i.updateQueue,p=c!==null?c.lastEffect:null;if(p!==null){var m=p.next;c=m;do{if((c.tag&n)===n){var x=c.inst,C=x.destroy;if(C!==void 0){x.destroy=void 0,p=i;var j=o,B=C;try{B()}catch(G){Xe(p,j,G)}}}c=c.next}while(c!==m)}}catch(G){Xe(i,i.return,G)}}function my(n){var i=n.updateQueue;if(i!==null){var o=n.stateNode;try{av(i,o)}catch(c){Xe(n,n.return,c)}}}function gy(n,i,o){o.props=na(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(c){Xe(n,i,c)}}function As(n,i){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof o=="function"?n.refCleanup=o(c):o.current=c}}catch(p){Xe(n,i,p)}}function pr(n,i){var o=n.ref,c=n.refCleanup;if(o!==null)if(typeof c=="function")try{c()}catch(p){Xe(n,i,p)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(p){Xe(n,i,p)}else o.current=null}function vy(n){var i=n.type,o=n.memoizedProps,c=n.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":o.autoFocus&&c.focus();break e;case"img":o.src?c.src=o.src:o.srcSet&&(c.srcset=o.srcSet)}}catch(p){Xe(n,n.return,p)}}function ch(n,i,o){try{var c=n.stateNode;pk(c,n.type,o,i),c[Wt]=i}catch(p){Xe(n,n.return,p)}}function yy(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&_i(n.type)||n.tag===4}function uh(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||yy(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&_i(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function dh(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,i):(i=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,i.appendChild(n),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Cr));else if(c!==4&&(c===27&&_i(n.type)&&(o=n.stateNode,i=null),n=n.child,n!==null))for(dh(n,i,o),n=n.sibling;n!==null;)dh(n,i,o),n=n.sibling}function Cc(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(c===27&&_i(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(Cc(n,i,o),n=n.sibling;n!==null;)Cc(n,i,o),n=n.sibling}function by(n){var i=n.stateNode,o=n.memoizedProps;try{for(var c=n.type,p=i.attributes;p.length;)i.removeAttributeNode(p[0]);Lt(i,c,o),i[Dt]=n,i[Wt]=o}catch(m){Xe(n,n.return,m)}}var $r=!1,St=!1,fh=!1,wy=typeof WeakSet=="function"?WeakSet:Set,Nt=null;function GT(n,i){if(n=n.containerInfo,jh=Vc,n=z0(n),af(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var p=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var x=0,C=-1,j=-1,B=0,G=0,W=n,P=null;t:for(;;){for(var X;W!==o||p!==0&&W.nodeType!==3||(C=x+p),W!==m||c!==0&&W.nodeType!==3||(j=x+c),W.nodeType===3&&(x+=W.nodeValue.length),(X=W.firstChild)!==null;)P=W,W=X;for(;;){if(W===n)break t;if(P===o&&++B===p&&(C=x),P===m&&++G===c&&(j=x),(X=W.nextSibling)!==null)break;W=P,P=W.parentNode}W=X}o=C===-1||j===-1?null:{start:C,end:j}}else o=null}o=o||{start:0,end:0}}else o=null;for(Dh={focusedElem:n,selectionRange:o},Vc=!1,Nt=i;Nt!==null;)if(i=Nt,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Nt=n;else for(;Nt!==null;){switch(i=Nt,m=i.alternate,n=i.flags,i.tag){case 0:if((n&4)!==0&&(n=i.updateQueue,n=n!==null?n.events:null,n!==null))for(o=0;o<n.length;o++)p=n[o],p.ref.impl=p.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,o=i,p=m.memoizedProps,m=m.memoizedState,c=o.stateNode;try{var oe=na(o.type,p);n=c.getSnapshotBeforeUpdate(oe,m),c.__reactInternalSnapshotBeforeUpdate=n}catch(ve){Xe(o,o.return,ve)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,o=n.nodeType,o===9)$h(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":$h(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(a(163))}if(n=i.sibling,n!==null){n.return=i.return,Nt=n;break}Nt=i.return}}function xy(n,i,o){var c=o.flags;switch(o.tag){case 0:case 11:case 15:Hr(n,o),c&4&&Cs(5,o);break;case 1:if(Hr(n,o),c&4)if(n=o.stateNode,i===null)try{n.componentDidMount()}catch(x){Xe(o,o.return,x)}else{var p=na(o.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(p,i,n.__reactInternalSnapshotBeforeUpdate)}catch(x){Xe(o,o.return,x)}}c&64&&my(o),c&512&&As(o,o.return);break;case 3:if(Hr(n,o),c&64&&(n=o.updateQueue,n!==null)){if(i=null,o.child!==null)switch(o.child.tag){case 27:case 5:i=o.child.stateNode;break;case 1:i=o.child.stateNode}try{av(n,i)}catch(x){Xe(o,o.return,x)}}break;case 27:i===null&&c&4&&by(o);case 26:case 5:Hr(n,o),i===null&&c&4&&vy(o),c&512&&As(o,o.return);break;case 12:Hr(n,o);break;case 31:Hr(n,o),c&4&&Ty(n,o);break;case 13:Hr(n,o),c&4&&ky(n,o),c&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=nk.bind(null,o),_k(n,o))));break;case 22:if(c=o.memoizedState!==null||$r,!c){i=i!==null&&i.memoizedState!==null||St,p=$r;var m=St;$r=c,(St=i)&&!m?Ir(n,o,(o.subtreeFlags&8772)!==0):Hr(n,o),$r=p,St=m}break;case 30:break;default:Hr(n,o)}}function _y(n){var i=n.alternate;i!==null&&(n.alternate=null,_y(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&qd(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var st=null,Jt=!1;function Lr(n,i,o){for(o=o.child;o!==null;)Sy(n,i,o),o=o.sibling}function Sy(n,i,o){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(Zo,o)}catch{}switch(o.tag){case 26:St||pr(o,i),Lr(n,i,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:St||pr(o,i);var c=st,p=Jt;_i(o.type)&&(st=o.stateNode,Jt=!1),Lr(n,i,o),$s(o.stateNode),st=c,Jt=p;break;case 5:St||pr(o,i);case 6:if(c=st,p=Jt,st=null,Lr(n,i,o),st=c,Jt=p,st!==null)if(Jt)try{(st.nodeType===9?st.body:st.nodeName==="HTML"?st.ownerDocument.body:st).removeChild(o.stateNode)}catch(m){Xe(o,i,m)}else try{st.removeChild(o.stateNode)}catch(m){Xe(o,i,m)}break;case 18:st!==null&&(Jt?(n=st,mb(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),po(n)):mb(st,o.stateNode));break;case 4:c=st,p=Jt,st=o.stateNode.containerInfo,Jt=!0,Lr(n,i,o),st=c,Jt=p;break;case 0:case 11:case 14:case 15:mi(2,o,i),St||mi(4,o,i),Lr(n,i,o);break;case 1:St||(pr(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"&&gy(o,i,c)),Lr(n,i,o);break;case 21:Lr(n,i,o);break;case 22:St=(c=St)||o.memoizedState!==null,Lr(n,i,o),St=c;break;default:Lr(n,i,o)}}function Ty(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{po(n)}catch(o){Xe(i,i.return,o)}}}function ky(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{po(n)}catch(o){Xe(i,i.return,o)}}function VT(n){switch(n.tag){case 31:case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new wy),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new wy),i;default:throw Error(a(435,n.tag))}}function Ac(n,i){var o=VT(n);i.forEach(function(c){if(!o.has(c)){o.add(c);var p=rk.bind(null,n,c);c.then(p,p)}})}function en(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var p=o[c],m=n,x=i,C=x;e:for(;C!==null;){switch(C.tag){case 27:if(_i(C.type)){st=C.stateNode,Jt=!1;break e}break;case 5:st=C.stateNode,Jt=!1;break e;case 3:case 4:st=C.stateNode.containerInfo,Jt=!0;break e}C=C.return}if(st===null)throw Error(a(160));Sy(m,x,p),st=null,Jt=!1,m=p.alternate,m!==null&&(m.return=null),p.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Ey(i,n),i=i.sibling}var Vn=null;function Ey(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:en(i,n),tn(n),c&4&&(mi(3,n,n.return),Cs(3,n),mi(5,n,n.return));break;case 1:en(i,n),tn(n),c&512&&(St||o===null||pr(o,o.return)),c&64&&$r&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?c:o.concat(c))));break;case 26:var p=Vn;if(en(i,n),tn(n),c&512&&(St||o===null||pr(o,o.return)),c&4){var m=o!==null?o.memoizedState:null;if(c=n.memoizedState,o===null)if(c===null)if(n.stateNode===null){e:{c=n.type,o=n.memoizedProps,p=p.ownerDocument||p;t:switch(c){case"title":m=p.getElementsByTagName("title")[0],(!m||m[ts]||m[Dt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=p.createElement(c),p.head.insertBefore(m,p.querySelector("head > title"))),Lt(m,c,o),m[Dt]=n,Ot(m),c=m;break e;case"link":var x=Eb("link","href",p).get(c+(o.href||""));if(x){for(var C=0;C<x.length;C++)if(m=x[C],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){x.splice(C,1);break t}}m=p.createElement(c),Lt(m,c,o),p.head.appendChild(m);break;case"meta":if(x=Eb("meta","content",p).get(c+(o.content||""))){for(C=0;C<x.length;C++)if(m=x[C],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){x.splice(C,1);break t}}m=p.createElement(c),Lt(m,c,o),p.head.appendChild(m);break;default:throw Error(a(468,c))}m[Dt]=n,Ot(m),c=m}n.stateNode=c}else Cb(p,n.type,n.stateNode);else n.stateNode=kb(p,c,n.memoizedProps);else m!==c?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,c===null?Cb(p,n.type,n.stateNode):kb(p,c,n.memoizedProps)):c===null&&n.stateNode!==null&&ch(n,n.memoizedProps,o.memoizedProps)}break;case 27:en(i,n),tn(n),c&512&&(St||o===null||pr(o,o.return)),o!==null&&c&4&&ch(n,n.memoizedProps,o.memoizedProps);break;case 5:if(en(i,n),tn(n),c&512&&(St||o===null||pr(o,o.return)),n.flags&32){p=n.stateNode;try{Ua(p,"")}catch(oe){Xe(n,n.return,oe)}}c&4&&n.stateNode!=null&&(p=n.memoizedProps,ch(n,p,o!==null?o.memoizedProps:p)),c&1024&&(fh=!0);break;case 6:if(en(i,n),tn(n),c&4){if(n.stateNode===null)throw Error(a(162));c=n.memoizedProps,o=n.stateNode;try{o.nodeValue=c}catch(oe){Xe(n,n.return,oe)}}break;case 3:if(Pc=null,p=Vn,Vn=Fc(i.containerInfo),en(i,n),Vn=p,tn(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{po(i.containerInfo)}catch(oe){Xe(n,n.return,oe)}fh&&(fh=!1,Cy(n));break;case 4:c=Vn,Vn=Fc(n.stateNode.containerInfo),en(i,n),tn(n),Vn=c;break;case 12:en(i,n),tn(n);break;case 31:en(i,n),tn(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Ac(n,c)));break;case 13:en(i,n),tn(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Oc=un()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Ac(n,c)));break;case 22:p=n.memoizedState!==null;var j=o!==null&&o.memoizedState!==null,B=$r,G=St;if($r=B||p,St=G||j,en(i,n),St=G,$r=B,tn(n),c&8192)e:for(i=n.stateNode,i._visibility=p?i._visibility&-2:i._visibility|1,p&&(o===null||j||$r||St||ra(n)),o=null,i=n;;){if(i.tag===5||i.tag===26){if(o===null){j=o=i;try{if(m=j.stateNode,p)x=m.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{C=j.stateNode;var W=j.memoizedProps.style,P=W!=null&&W.hasOwnProperty("display")?W.display:null;C.style.display=P==null||typeof P=="boolean"?"":(""+P).trim()}}catch(oe){Xe(j,j.return,oe)}}}else if(i.tag===6){if(o===null){j=i;try{j.stateNode.nodeValue=p?"":j.memoizedProps}catch(oe){Xe(j,j.return,oe)}}}else if(i.tag===18){if(o===null){j=i;try{var X=j.stateNode;p?gb(X,!0):gb(j.stateNode,!1)}catch(oe){Xe(j,j.return,oe)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;o===i&&(o=null),i=i.return}o===i&&(o=null),i.sibling.return=i.return,i=i.sibling}c&4&&(c=n.updateQueue,c!==null&&(o=c.retryQueue,o!==null&&(c.retryQueue=null,Ac(n,o))));break;case 19:en(i,n),tn(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Ac(n,c)));break;case 30:break;case 21:break;default:en(i,n),tn(n)}}function tn(n){var i=n.flags;if(i&2){try{for(var o,c=n.return;c!==null;){if(yy(c)){o=c;break}c=c.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var p=o.stateNode,m=uh(n);Cc(n,m,p);break;case 5:var x=o.stateNode;o.flags&32&&(Ua(x,""),o.flags&=-33);var C=uh(n);Cc(n,C,x);break;case 3:case 4:var j=o.stateNode.containerInfo,B=uh(n);dh(n,B,j);break;default:throw Error(a(161))}}catch(G){Xe(n,n.return,G)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Cy(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;Cy(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function Hr(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)xy(n,i.alternate,i),i=i.sibling}function ra(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:mi(4,i,i.return),ra(i);break;case 1:pr(i,i.return);var o=i.stateNode;typeof o.componentWillUnmount=="function"&&gy(i,i.return,o),ra(i);break;case 27:$s(i.stateNode);case 26:case 5:pr(i,i.return),ra(i);break;case 22:i.memoizedState===null&&ra(i);break;case 30:ra(i);break;default:ra(i)}n=n.sibling}}function Ir(n,i,o){for(o=o&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var c=i.alternate,p=n,m=i,x=m.flags;switch(m.tag){case 0:case 11:case 15:Ir(p,m,o),Cs(4,m);break;case 1:if(Ir(p,m,o),c=m,p=c.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(B){Xe(c,c.return,B)}if(c=m,p=c.updateQueue,p!==null){var C=c.stateNode;try{var j=p.shared.hiddenCallbacks;if(j!==null)for(p.shared.hiddenCallbacks=null,p=0;p<j.length;p++)iv(j[p],C)}catch(B){Xe(c,c.return,B)}}o&&x&64&&my(m),As(m,m.return);break;case 27:by(m);case 26:case 5:Ir(p,m,o),o&&c===null&&x&4&&vy(m),As(m,m.return);break;case 12:Ir(p,m,o);break;case 31:Ir(p,m,o),o&&x&4&&Ty(p,m);break;case 13:Ir(p,m,o),o&&x&4&&ky(p,m);break;case 22:m.memoizedState===null&&Ir(p,m,o),As(m,m.return);break;case 30:break;default:Ir(p,m,o)}i=i.sibling}}function hh(n,i){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&ps(o))}function ph(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&ps(n))}function Qn(n,i,o,c){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Ay(n,i,o,c),i=i.sibling}function Ay(n,i,o,c){var p=i.flags;switch(i.tag){case 0:case 11:case 15:Qn(n,i,o,c),p&2048&&Cs(9,i);break;case 1:Qn(n,i,o,c);break;case 3:Qn(n,i,o,c),p&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&ps(n)));break;case 12:if(p&2048){Qn(n,i,o,c),n=i.stateNode;try{var m=i.memoizedProps,x=m.id,C=m.onPostCommit;typeof C=="function"&&C(x,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(j){Xe(i,i.return,j)}}else Qn(n,i,o,c);break;case 31:Qn(n,i,o,c);break;case 13:Qn(n,i,o,c);break;case 23:break;case 22:m=i.stateNode,x=i.alternate,i.memoizedState!==null?m._visibility&2?Qn(n,i,o,c):Ms(n,i):m._visibility&2?Qn(n,i,o,c):(m._visibility|=2,no(n,i,o,c,(i.subtreeFlags&10256)!==0||!1)),p&2048&&hh(x,i);break;case 24:Qn(n,i,o,c),p&2048&&ph(i.alternate,i);break;default:Qn(n,i,o,c)}}function no(n,i,o,c,p){for(p=p&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=n,x=i,C=o,j=c,B=x.flags;switch(x.tag){case 0:case 11:case 15:no(m,x,C,j,p),Cs(8,x);break;case 23:break;case 22:var G=x.stateNode;x.memoizedState!==null?G._visibility&2?no(m,x,C,j,p):Ms(m,x):(G._visibility|=2,no(m,x,C,j,p)),p&&B&2048&&hh(x.alternate,x);break;case 24:no(m,x,C,j,p),p&&B&2048&&ph(x.alternate,x);break;default:no(m,x,C,j,p)}i=i.sibling}}function Ms(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var o=n,c=i,p=c.flags;switch(c.tag){case 22:Ms(o,c),p&2048&&hh(c.alternate,c);break;case 24:Ms(o,c),p&2048&&ph(c.alternate,c);break;default:Ms(o,c)}i=i.sibling}}var Os=8192;function ro(n,i,o){if(n.subtreeFlags&Os)for(n=n.child;n!==null;)My(n,i,o),n=n.sibling}function My(n,i,o){switch(n.tag){case 26:ro(n,i,o),n.flags&Os&&n.memoizedState!==null&&Dk(o,Vn,n.memoizedState,n.memoizedProps);break;case 5:ro(n,i,o);break;case 3:case 4:var c=Vn;Vn=Fc(n.stateNode.containerInfo),ro(n,i,o),Vn=c;break;case 22:n.memoizedState===null&&(c=n.alternate,c!==null&&c.memoizedState!==null?(c=Os,Os=16777216,ro(n,i,o),Os=c):ro(n,i,o));break;default:ro(n,i,o)}}function Oy(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function Ns(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var o=0;o<i.length;o++){var c=i[o];Nt=c,zy(c,n)}Oy(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Ny(n),n=n.sibling}function Ny(n){switch(n.tag){case 0:case 11:case 15:Ns(n),n.flags&2048&&mi(9,n,n.return);break;case 3:Ns(n);break;case 12:Ns(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,Mc(n)):Ns(n);break;default:Ns(n)}}function Mc(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var o=0;o<i.length;o++){var c=i[o];Nt=c,zy(c,n)}Oy(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:mi(8,i,i.return),Mc(i);break;case 22:o=i.stateNode,o._visibility&2&&(o._visibility&=-3,Mc(i));break;default:Mc(i)}n=n.sibling}}function zy(n,i){for(;Nt!==null;){var o=Nt;switch(o.tag){case 0:case 11:case 15:mi(8,o,i);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var c=o.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:ps(o.memoizedState.cache)}if(c=o.child,c!==null)c.return=o,Nt=c;else e:for(o=n;Nt!==null;){c=Nt;var p=c.sibling,m=c.return;if(_y(c),c===o){Nt=null;break e}if(p!==null){p.return=m,Nt=p;break e}Nt=m}}}var QT={getCacheForType:function(n){var i=Ut(wt),o=i.data.get(n);return o===void 0&&(o=n(),i.data.set(n,o)),o},cacheSignal:function(){return Ut(wt).controller.signal}},KT=typeof WeakMap=="function"?WeakMap:Map,qe=0,We=null,Ae=null,Oe=0,Ye=0,vn=null,gi=!1,io=!1,mh=!1,qr=0,dt=0,vi=0,ia=0,gh=0,yn=0,ao=0,zs=null,nn=null,vh=!1,Oc=0,jy=0,Nc=1/0,zc=null,yi=null,At=0,bi=null,oo=null,Fr=0,yh=0,bh=null,Dy=null,js=0,wh=null;function bn(){return(qe&2)!==0&&Oe!==0?Oe&-Oe:A.T!==null?Eh():Kg()}function Ry(){if(yn===0)if((Oe&536870912)===0||De){var n=Il;Il<<=1,(Il&3932160)===0&&(Il=262144),yn=n}else yn=536870912;return n=mn.current,n!==null&&(n.flags|=32),yn}function rn(n,i,o){(n===We&&(Ye===2||Ye===9)||n.cancelPendingCommit!==null)&&(so(n,0),wi(n,Oe,yn,!1)),es(n,o),((qe&2)===0||n!==We)&&(n===We&&((qe&2)===0&&(ia|=o),dt===4&&wi(n,Oe,yn,!1)),mr(n))}function Uy(n,i,o){if((qe&6)!==0)throw Error(a(327));var c=!o&&(i&127)===0&&(i&n.expiredLanes)===0||Jo(n,i),p=c?JT(n,i):_h(n,i,!0),m=c;do{if(p===0){io&&!c&&wi(n,i,0,!1);break}else{if(o=n.current.alternate,m&&!WT(o)){p=_h(n,i,!1),m=!1;continue}if(p===2){if(m=i,n.errorRecoveryDisabledLanes&m)var x=0;else x=n.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){i=x;e:{var C=n;p=zs;var j=C.current.memoizedState.isDehydrated;if(j&&(so(C,x).flags|=256),x=_h(C,x,!1),x!==2){if(mh&&!j){C.errorRecoveryDisabledLanes|=m,ia|=m,p=4;break e}m=nn,nn=p,m!==null&&(nn===null?nn=m:nn.push.apply(nn,m))}p=x}if(m=!1,p!==2)continue}}if(p===1){so(n,0),wi(n,i,0,!0);break}e:{switch(c=n,m=p,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:wi(c,i,yn,!gi);break e;case 2:nn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(p=Oc+300-un(),10<p)){if(wi(c,i,yn,!gi),Fl(c,0,!0)!==0)break e;Fr=i,c.timeoutHandle=hb($y.bind(null,c,o,nn,zc,vh,i,yn,ia,ao,gi,m,"Throttled",-0,0),p);break e}$y(c,o,nn,zc,vh,i,yn,ia,ao,gi,m,null,-0,0)}}break}while(!0);mr(n)}function $y(n,i,o,c,p,m,x,C,j,B,G,W,P,X){if(n.timeoutHandle=-1,W=i.subtreeFlags,W&8192||(W&16785408)===16785408){W={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Cr},My(i,m,W);var oe=(m&62914560)===m?Oc-un():(m&4194048)===m?jy-un():0;if(oe=Rk(W,oe),oe!==null){Fr=m,n.cancelPendingCommit=oe(Yy.bind(null,n,i,m,o,c,p,x,C,j,G,W,null,P,X)),wi(n,m,x,!B);return}}Yy(n,i,m,o,c,p,x,C,j)}function WT(n){for(var i=n;;){var o=i.tag;if((o===0||o===11||o===15)&&i.flags&16384&&(o=i.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var c=0;c<o.length;c++){var p=o[c],m=p.getSnapshot;p=p.value;try{if(!hn(m(),p))return!1}catch{return!1}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function wi(n,i,o,c){i&=~gh,i&=~ia,n.suspendedLanes|=i,n.pingedLanes&=~i,c&&(n.warmLanes|=i),c=n.expirationTimes;for(var p=i;0<p;){var m=31-fn(p),x=1<<m;c[m]=-1,p&=~x}o!==0&&Gg(n,o,i)}function jc(){return(qe&6)===0?(Ds(0),!1):!0}function xh(){if(Ae!==null){if(Ye===0)var n=Ae.return;else n=Ae,Nr=Qi=null,$f(n),Wa=null,gs=0,n=Ae;for(;n!==null;)py(n.alternate,n),n=n.return;Ae=null}}function so(n,i){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,vk(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),Fr=0,xh(),We=n,Ae=o=Mr(n.current,null),Oe=i,Ye=0,vn=null,gi=!1,io=Jo(n,i),mh=!1,ao=yn=gh=ia=vi=dt=0,nn=zs=null,vh=!1,(i&8)!==0&&(i|=i&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=i;0<c;){var p=31-fn(c),m=1<<p;i|=n[p],c&=~m}return qr=i,ec(),o}function Ly(n,i){Se=null,A.H=Ts,i===Ka||i===lc?(i=ev(),Ye=3):i===kf?(i=ev(),Ye=4):Ye=i===Jf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,vn=i,Ae===null&&(dt=1,_c(n,jn(i,n.current)))}function Hy(){var n=mn.current;return n===null?!0:(Oe&4194048)===Oe?$n===null:(Oe&62914560)===Oe||(Oe&536870912)!==0?n===$n:!1}function Iy(){var n=A.H;return A.H=Ts,n===null?Ts:n}function qy(){var n=A.A;return A.A=QT,n}function Dc(){dt=4,gi||(Oe&4194048)!==Oe&&mn.current!==null||(io=!0),(vi&134217727)===0&&(ia&134217727)===0||We===null||wi(We,Oe,yn,!1)}function _h(n,i,o){var c=qe;qe|=2;var p=Iy(),m=qy();(We!==n||Oe!==i)&&(zc=null,so(n,i)),i=!1;var x=dt;e:do try{if(Ye!==0&&Ae!==null){var C=Ae,j=vn;switch(Ye){case 8:xh(),x=6;break e;case 3:case 2:case 9:case 6:mn.current===null&&(i=!0);var B=Ye;if(Ye=0,vn=null,lo(n,C,j,B),o&&io){x=0;break e}break;default:B=Ye,Ye=0,vn=null,lo(n,C,j,B)}}ZT(),x=dt;break}catch(G){Ly(n,G)}while(!0);return i&&n.shellSuspendCounter++,Nr=Qi=null,qe=c,A.H=p,A.A=m,Ae===null&&(We=null,Oe=0,ec()),x}function ZT(){for(;Ae!==null;)Fy(Ae)}function JT(n,i){var o=qe;qe|=2;var c=Iy(),p=qy();We!==n||Oe!==i?(zc=null,Nc=un()+500,so(n,i)):io=Jo(n,i);e:do try{if(Ye!==0&&Ae!==null){i=Ae;var m=vn;t:switch(Ye){case 1:Ye=0,vn=null,lo(n,i,m,1);break;case 2:case 9:if(Z0(m)){Ye=0,vn=null,By(i);break}i=function(){Ye!==2&&Ye!==9||We!==n||(Ye=7),mr(n)},m.then(i,i);break e;case 3:Ye=7;break e;case 4:Ye=5;break e;case 7:Z0(m)?(Ye=0,vn=null,By(i)):(Ye=0,vn=null,lo(n,i,m,7));break;case 5:var x=null;switch(Ae.tag){case 26:x=Ae.memoizedState;case 5:case 27:var C=Ae;if(x?Ab(x):C.stateNode.complete){Ye=0,vn=null;var j=C.sibling;if(j!==null)Ae=j;else{var B=C.return;B!==null?(Ae=B,Rc(B)):Ae=null}break t}}Ye=0,vn=null,lo(n,i,m,5);break;case 6:Ye=0,vn=null,lo(n,i,m,6);break;case 8:xh(),dt=6;break e;default:throw Error(a(462))}}ek();break}catch(G){Ly(n,G)}while(!0);return Nr=Qi=null,A.H=c,A.A=p,qe=o,Ae!==null?0:(We=null,Oe=0,ec(),dt)}function ek(){for(;Ae!==null&&!SS();)Fy(Ae)}function Fy(n){var i=fy(n.alternate,n,qr);n.memoizedProps=n.pendingProps,i===null?Rc(n):Ae=i}function By(n){var i=n,o=i.alternate;switch(i.tag){case 15:case 0:i=oy(o,i,i.pendingProps,i.type,void 0,Oe);break;case 11:i=oy(o,i,i.pendingProps,i.type.render,i.ref,Oe);break;case 5:$f(i);default:py(o,i),i=Ae=q0(i,qr),i=fy(o,i,qr)}n.memoizedProps=n.pendingProps,i===null?Rc(n):Ae=i}function lo(n,i,o,c){Nr=Qi=null,$f(i),Wa=null,gs=0;var p=i.return;try{if(FT(n,p,i,o,Oe)){dt=1,_c(n,jn(o,n.current)),Ae=null;return}}catch(m){if(p!==null)throw Ae=p,m;dt=1,_c(n,jn(o,n.current)),Ae=null;return}i.flags&32768?(De||c===1?n=!0:io||(Oe&536870912)!==0?n=!1:(gi=n=!0,(c===2||c===9||c===3||c===6)&&(c=mn.current,c!==null&&c.tag===13&&(c.flags|=16384))),Py(i,n)):Rc(i)}function Rc(n){var i=n;do{if((i.flags&32768)!==0){Py(i,gi);return}n=i.return;var o=YT(i.alternate,i,qr);if(o!==null){Ae=o;return}if(i=i.sibling,i!==null){Ae=i;return}Ae=i=n}while(i!==null);dt===0&&(dt=5)}function Py(n,i){do{var o=XT(n.alternate,n);if(o!==null){o.flags&=32767,Ae=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!i&&(n=n.sibling,n!==null)){Ae=n;return}Ae=n=o}while(n!==null);dt=6,Ae=null}function Yy(n,i,o,c,p,m,x,C,j){n.cancelPendingCommit=null;do Uc();while(At!==0);if((qe&6)!==0)throw Error(a(327));if(i!==null){if(i===n.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=uf,jS(n,o,m,x,C,j),n===We&&(Ae=We=null,Oe=0),oo=i,bi=n,Fr=o,yh=m,bh=p,Dy=c,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,ik(Ll,function(){return Ky(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||c){c=A.T,A.T=null,p=D.p,D.p=2,x=qe,qe|=4;try{GT(n,i,o)}finally{qe=x,D.p=p,A.T=c}}At=1,Xy(),Gy(),Vy()}}function Xy(){if(At===1){At=0;var n=bi,i=oo,o=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||o){o=A.T,A.T=null;var c=D.p;D.p=2;var p=qe;qe|=4;try{Ey(i,n);var m=Dh,x=z0(n.containerInfo),C=m.focusedElem,j=m.selectionRange;if(x!==C&&C&&C.ownerDocument&&N0(C.ownerDocument.documentElement,C)){if(j!==null&&af(C)){var B=j.start,G=j.end;if(G===void 0&&(G=B),"selectionStart"in C)C.selectionStart=B,C.selectionEnd=Math.min(G,C.value.length);else{var W=C.ownerDocument||document,P=W&&W.defaultView||window;if(P.getSelection){var X=P.getSelection(),oe=C.textContent.length,ve=Math.min(j.start,oe),Qe=j.end===void 0?ve:Math.min(j.end,oe);!X.extend&&ve>Qe&&(x=Qe,Qe=ve,ve=x);var H=O0(C,ve),U=O0(C,Qe);if(H&&U&&(X.rangeCount!==1||X.anchorNode!==H.node||X.anchorOffset!==H.offset||X.focusNode!==U.node||X.focusOffset!==U.offset)){var q=W.createRange();q.setStart(H.node,H.offset),X.removeAllRanges(),ve>Qe?(X.addRange(q),X.extend(U.node,U.offset)):(q.setEnd(U.node,U.offset),X.addRange(q))}}}}for(W=[],X=C;X=X.parentNode;)X.nodeType===1&&W.push({element:X,left:X.scrollLeft,top:X.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<W.length;C++){var K=W[C];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}Vc=!!jh,Dh=jh=null}finally{qe=p,D.p=c,A.T=o}}n.current=i,At=2}}function Gy(){if(At===2){At=0;var n=bi,i=oo,o=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||o){o=A.T,A.T=null;var c=D.p;D.p=2;var p=qe;qe|=4;try{xy(n,i.alternate,i)}finally{qe=p,D.p=c,A.T=o}}At=3}}function Vy(){if(At===4||At===3){At=0,TS();var n=bi,i=oo,o=Fr,c=Dy;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?At=5:(At=0,oo=bi=null,Qy(n,n.pendingLanes));var p=n.pendingLanes;if(p===0&&(yi=null),Hd(o),i=i.stateNode,dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(Zo,i,void 0,(i.current.flags&128)===128)}catch{}if(c!==null){i=A.T,p=D.p,D.p=2,A.T=null;try{for(var m=n.onRecoverableError,x=0;x<c.length;x++){var C=c[x];m(C.value,{componentStack:C.stack})}}finally{A.T=i,D.p=p}}(Fr&3)!==0&&Uc(),mr(n),p=n.pendingLanes,(o&261930)!==0&&(p&42)!==0?n===wh?js++:(js=0,wh=n):js=0,Ds(0)}}function Qy(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,ps(i)))}function Uc(){return Xy(),Gy(),Vy(),Ky()}function Ky(){if(At!==5)return!1;var n=bi,i=yh;yh=0;var o=Hd(Fr),c=A.T,p=D.p;try{D.p=32>o?32:o,A.T=null,o=bh,bh=null;var m=bi,x=Fr;if(At=0,oo=bi=null,Fr=0,(qe&6)!==0)throw Error(a(331));var C=qe;if(qe|=4,Ny(m.current),Ay(m,m.current,x,o),qe=C,Ds(0,!1),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(Zo,m)}catch{}return!0}finally{D.p=p,A.T=c,Qy(n,i)}}function Wy(n,i,o){i=jn(o,i),i=Zf(n.stateNode,i,2),n=fi(n,i,2),n!==null&&(es(n,2),mr(n))}function Xe(n,i,o){if(n.tag===3)Wy(n,n,o);else for(;i!==null;){if(i.tag===3){Wy(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(yi===null||!yi.has(c))){n=jn(o,n),o=Zv(2),c=fi(i,o,2),c!==null&&(Jv(o,c,i,n),es(c,2),mr(c));break}}i=i.return}}function Sh(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new KT;var p=new Set;c.set(i,p)}else p=c.get(i),p===void 0&&(p=new Set,c.set(i,p));p.has(o)||(mh=!0,p.add(o),n=tk.bind(null,n,i,o),i.then(n,n))}function tk(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,We===n&&(Oe&o)===o&&(dt===4||dt===3&&(Oe&62914560)===Oe&&300>un()-Oc?(qe&2)===0&&so(n,0):gh|=o,ao===Oe&&(ao=0)),mr(n)}function Zy(n,i){i===0&&(i=Xg()),n=Xi(n,i),n!==null&&(es(n,i),mr(n))}function nk(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Zy(n,o)}function rk(n,i){var o=0;switch(n.tag){case 31:case 13:var c=n.stateNode,p=n.memoizedState;p!==null&&(o=p.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(a(314))}c!==null&&c.delete(i),Zy(n,o)}function ik(n,i){return Rd(n,i)}var $c=null,co=null,Th=!1,Lc=!1,kh=!1,xi=0;function mr(n){n!==co&&n.next===null&&(co===null?$c=co=n:co=co.next=n),Lc=!0,Th||(Th=!0,ok())}function Ds(n,i){if(!kh&&Lc){kh=!0;do for(var o=!1,c=$c;c!==null;){if(n!==0){var p=c.pendingLanes;if(p===0)var m=0;else{var x=c.suspendedLanes,C=c.pingedLanes;m=(1<<31-fn(42|n)+1)-1,m&=p&~(x&~C),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,nb(c,m))}else m=Oe,m=Fl(c,c===We?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||Jo(c,m)||(o=!0,nb(c,m));c=c.next}while(o);kh=!1}}function ak(){Jy()}function Jy(){Lc=Th=!1;var n=0;xi!==0&&gk()&&(n=xi);for(var i=un(),o=null,c=$c;c!==null;){var p=c.next,m=eb(c,i);m===0?(c.next=null,o===null?$c=p:o.next=p,p===null&&(co=o)):(o=c,(n!==0||(m&3)!==0)&&(Lc=!0)),c=p}At!==0&&At!==5||Ds(n),xi!==0&&(xi=0)}function eb(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,p=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var x=31-fn(m),C=1<<x,j=p[x];j===-1?((C&o)===0||(C&c)!==0)&&(p[x]=zS(C,i)):j<=i&&(n.expiredLanes|=C),m&=~C}if(i=We,o=Oe,o=Fl(n,n===i?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,o===0||n===i&&(Ye===2||Ye===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&Ud(c),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||Jo(n,o)){if(i=o&-o,i===n.callbackPriority)return i;switch(c!==null&&Ud(c),Hd(o)){case 2:case 8:o=Pg;break;case 32:o=Ll;break;case 268435456:o=Yg;break;default:o=Ll}return c=tb.bind(null,n),o=Rd(o,c),n.callbackPriority=i,n.callbackNode=o,i}return c!==null&&c!==null&&Ud(c),n.callbackPriority=2,n.callbackNode=null,2}function tb(n,i){if(At!==0&&At!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(Uc()&&n.callbackNode!==o)return null;var c=Oe;return c=Fl(n,n===We?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:(Uy(n,c,i),eb(n,un()),n.callbackNode!=null&&n.callbackNode===o?tb.bind(null,n):null)}function nb(n,i){if(Uc())return null;Uy(n,i,!0)}function ok(){yk(function(){(qe&6)!==0?Rd(Bg,ak):Jy()})}function Eh(){if(xi===0){var n=Va;n===0&&(n=Hl,Hl<<=1,(Hl&261888)===0&&(Hl=256)),xi=n}return xi}function rb(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Xl(""+n)}function ib(n,i){var o=i.ownerDocument.createElement("input");return o.name=i.name,o.value=i.value,n.id&&o.setAttribute("form",n.id),i.parentNode.insertBefore(o,i),n=new FormData(n),o.parentNode.removeChild(o),n}function sk(n,i,o,c,p){if(i==="submit"&&o&&o.stateNode===p){var m=rb((p[Wt]||null).action),x=c.submitter;x&&(i=(i=x[Wt]||null)?rb(i.formAction):x.getAttribute("formAction"),i!==null&&(m=i,x=null));var C=new Kl("action","action",null,c,p);n.push({event:C,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(xi!==0){var j=x?ib(p,x):new FormData(p);Xf(o,{pending:!0,data:j,method:p.method,action:m},null,j)}}else typeof m=="function"&&(C.preventDefault(),j=x?ib(p,x):new FormData(p),Xf(o,{pending:!0,data:j,method:p.method,action:m},m,j))},currentTarget:p}]})}}for(var Ch=0;Ch<cf.length;Ch++){var Ah=cf[Ch],lk=Ah.toLowerCase(),ck=Ah[0].toUpperCase()+Ah.slice(1);Gn(lk,"on"+ck)}Gn(R0,"onAnimationEnd"),Gn(U0,"onAnimationIteration"),Gn($0,"onAnimationStart"),Gn("dblclick","onDoubleClick"),Gn("focusin","onFocus"),Gn("focusout","onBlur"),Gn(kT,"onTransitionRun"),Gn(ET,"onTransitionStart"),Gn(CT,"onTransitionCancel"),Gn(L0,"onTransitionEnd"),Da("onMouseEnter",["mouseout","mouseover"]),Da("onMouseLeave",["mouseout","mouseover"]),Da("onPointerEnter",["pointerout","pointerover"]),Da("onPointerLeave",["pointerout","pointerover"]),Fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uk=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rs));function ab(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],p=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var x=c.length-1;0<=x;x--){var C=c[x],j=C.instance,B=C.currentTarget;if(C=C.listener,j!==m&&p.isPropagationStopped())break e;m=C,p.currentTarget=B;try{m(p)}catch(G){Jl(G)}p.currentTarget=null,m=j}else for(x=0;x<c.length;x++){if(C=c[x],j=C.instance,B=C.currentTarget,C=C.listener,j!==m&&p.isPropagationStopped())break e;m=C,p.currentTarget=B;try{m(p)}catch(G){Jl(G)}p.currentTarget=null,m=j}}}}function Me(n,i){var o=i[Id];o===void 0&&(o=i[Id]=new Set);var c=n+"__bubble";o.has(c)||(ob(i,n,2,!1),o.add(c))}function Mh(n,i,o){var c=0;i&&(c|=4),ob(o,n,c,i)}var Hc="_reactListening"+Math.random().toString(36).slice(2);function Oh(n){if(!n[Hc]){n[Hc]=!0,Jg.forEach(function(o){o!=="selectionchange"&&(uk.has(o)||Mh(o,!1,n),Mh(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Hc]||(i[Hc]=!0,Mh("selectionchange",!1,i))}}function ob(n,i,o,c){switch(Rb(i)){case 2:var p=Lk;break;case 8:p=Hk;break;default:p=Yh}o=p.bind(null,i,o,n),p=void 0,!Qd||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),c?p!==void 0?n.addEventListener(i,o,{capture:!0,passive:p}):n.addEventListener(i,o,!0):p!==void 0?n.addEventListener(i,o,{passive:p}):n.addEventListener(i,o,!1)}function Nh(n,i,o,c,p){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var x=c.tag;if(x===3||x===4){var C=c.stateNode.containerInfo;if(C===p)break;if(x===4)for(x=c.return;x!==null;){var j=x.tag;if((j===3||j===4)&&x.stateNode.containerInfo===p)return;x=x.return}for(;C!==null;){if(x=Na(C),x===null)return;if(j=x.tag,j===5||j===6||j===26||j===27){c=m=x;continue e}C=C.parentNode}}c=c.return}d0(function(){var B=m,G=Gd(o),W=[];e:{var P=H0.get(n);if(P!==void 0){var X=Kl,oe=n;switch(n){case"keypress":if(Vl(o)===0)break e;case"keydown":case"keyup":X=rT;break;case"focusin":oe="focus",X=Jd;break;case"focusout":oe="blur",X=Jd;break;case"beforeblur":case"afterblur":X=Jd;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=p0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=YS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=oT;break;case R0:case U0:case $0:X=VS;break;case L0:X=lT;break;case"scroll":case"scrollend":X=BS;break;case"wheel":X=uT;break;case"copy":case"cut":case"paste":X=KS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=g0;break;case"toggle":case"beforetoggle":X=fT}var ve=(i&4)!==0,Qe=!ve&&(n==="scroll"||n==="scrollend"),H=ve?P!==null?P+"Capture":null:P;ve=[];for(var U=B,q;U!==null;){var K=U;if(q=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||q===null||H===null||(K=rs(U,H),K!=null&&ve.push(Us(U,K,q))),Qe)break;U=U.return}0<ve.length&&(P=new X(P,oe,null,o,G),W.push({event:P,listeners:ve}))}}if((i&7)===0){e:{if(P=n==="mouseover"||n==="pointerover",X=n==="mouseout"||n==="pointerout",P&&o!==Xd&&(oe=o.relatedTarget||o.fromElement)&&(Na(oe)||oe[Oa]))break e;if((X||P)&&(P=G.window===G?G:(P=G.ownerDocument)?P.defaultView||P.parentWindow:window,X?(oe=o.relatedTarget||o.toElement,X=B,oe=oe?Na(oe):null,oe!==null&&(Qe=l(oe),ve=oe.tag,oe!==Qe||ve!==5&&ve!==27&&ve!==6)&&(oe=null)):(X=null,oe=B),X!==oe)){if(ve=p0,K="onMouseLeave",H="onMouseEnter",U="mouse",(n==="pointerout"||n==="pointerover")&&(ve=g0,K="onPointerLeave",H="onPointerEnter",U="pointer"),Qe=X==null?P:ns(X),q=oe==null?P:ns(oe),P=new ve(K,U+"leave",X,o,G),P.target=Qe,P.relatedTarget=q,K=null,Na(G)===B&&(ve=new ve(H,U+"enter",oe,o,G),ve.target=q,ve.relatedTarget=Qe,K=ve),Qe=K,X&&oe)t:{for(ve=dk,H=X,U=oe,q=0,K=H;K;K=ve(K))q++;K=0;for(var me=U;me;me=ve(me))K++;for(;0<q-K;)H=ve(H),q--;for(;0<K-q;)U=ve(U),K--;for(;q--;){if(H===U||U!==null&&H===U.alternate){ve=H;break t}H=ve(H),U=ve(U)}ve=null}else ve=null;X!==null&&sb(W,P,X,ve,!1),oe!==null&&Qe!==null&&sb(W,Qe,oe,ve,!0)}}e:{if(P=B?ns(B):window,X=P.nodeName&&P.nodeName.toLowerCase(),X==="select"||X==="input"&&P.type==="file")var $e=T0;else if(_0(P))if(k0)$e=_T;else{$e=wT;var ue=bT}else X=P.nodeName,!X||X.toLowerCase()!=="input"||P.type!=="checkbox"&&P.type!=="radio"?B&&Yd(B.elementType)&&($e=T0):$e=xT;if($e&&($e=$e(n,B))){S0(W,$e,o,G);break e}ue&&ue(n,P,B),n==="focusout"&&B&&P.type==="number"&&B.memoizedProps.value!=null&&Pd(P,"number",P.value)}switch(ue=B?ns(B):window,n){case"focusin":(_0(ue)||ue.contentEditable==="true")&&(Ia=ue,of=B,ds=null);break;case"focusout":ds=of=Ia=null;break;case"mousedown":sf=!0;break;case"contextmenu":case"mouseup":case"dragend":sf=!1,j0(W,o,G);break;case"selectionchange":if(TT)break;case"keydown":case"keyup":j0(W,o,G)}var Te;if(tf)e:{switch(n){case"compositionstart":var Ne="onCompositionStart";break e;case"compositionend":Ne="onCompositionEnd";break e;case"compositionupdate":Ne="onCompositionUpdate";break e}Ne=void 0}else Ha?w0(n,o)&&(Ne="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(Ne="onCompositionStart");Ne&&(v0&&o.locale!=="ko"&&(Ha||Ne!=="onCompositionStart"?Ne==="onCompositionEnd"&&Ha&&(Te=f0()):(ai=G,Kd="value"in ai?ai.value:ai.textContent,Ha=!0)),ue=Ic(B,Ne),0<ue.length&&(Ne=new m0(Ne,n,null,o,G),W.push({event:Ne,listeners:ue}),Te?Ne.data=Te:(Te=x0(o),Te!==null&&(Ne.data=Te)))),(Te=pT?mT(n,o):gT(n,o))&&(Ne=Ic(B,"onBeforeInput"),0<Ne.length&&(ue=new m0("onBeforeInput","beforeinput",null,o,G),W.push({event:ue,listeners:Ne}),ue.data=Te)),sk(W,n,B,o,G)}ab(W,i)})}function Us(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Ic(n,i){for(var o=i+"Capture",c=[];n!==null;){var p=n,m=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||m===null||(p=rs(n,o),p!=null&&c.unshift(Us(n,p,m)),p=rs(n,i),p!=null&&c.push(Us(n,p,m))),n.tag===3)return c;n=n.return}return[]}function dk(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function sb(n,i,o,c,p){for(var m=i._reactName,x=[];o!==null&&o!==c;){var C=o,j=C.alternate,B=C.stateNode;if(C=C.tag,j!==null&&j===c)break;C!==5&&C!==26&&C!==27||B===null||(j=B,p?(B=rs(o,m),B!=null&&x.unshift(Us(o,B,j))):p||(B=rs(o,m),B!=null&&x.push(Us(o,B,j)))),o=o.return}x.length!==0&&n.push({event:i,listeners:x})}var fk=/\r\n?/g,hk=/\u0000|\uFFFD/g;function lb(n){return(typeof n=="string"?n:""+n).replace(fk,`
`).replace(hk,"")}function cb(n,i){return i=lb(i),lb(n)===i}function Ve(n,i,o,c,p,m){switch(o){case"children":typeof c=="string"?i==="body"||i==="textarea"&&c===""||Ua(n,c):(typeof c=="number"||typeof c=="bigint")&&i!=="body"&&Ua(n,""+c);break;case"className":Pl(n,"class",c);break;case"tabIndex":Pl(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Pl(n,o,c);break;case"style":c0(n,c,m);break;case"data":if(i!=="object"){Pl(n,"data",c);break}case"src":case"href":if(c===""&&(i!=="a"||o!=="href")){n.removeAttribute(o);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(o);break}c=Xl(""+c),n.setAttribute(o,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(i!=="input"&&Ve(n,i,"name",p.name,p,null),Ve(n,i,"formEncType",p.formEncType,p,null),Ve(n,i,"formMethod",p.formMethod,p,null),Ve(n,i,"formTarget",p.formTarget,p,null)):(Ve(n,i,"encType",p.encType,p,null),Ve(n,i,"method",p.method,p,null),Ve(n,i,"target",p.target,p,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(o);break}c=Xl(""+c),n.setAttribute(o,c);break;case"onClick":c!=null&&(n.onclick=Cr);break;case"onScroll":c!=null&&Me("scroll",n);break;case"onScrollEnd":c!=null&&Me("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(o=c.__html,o!=null){if(p.children!=null)throw Error(a(60));n.innerHTML=o}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}o=Xl(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(o,""+c):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":c===!0?n.setAttribute(o,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(o,c):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(o,c):n.removeAttribute(o);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(o):n.setAttribute(o,c);break;case"popover":Me("beforetoggle",n),Me("toggle",n),Bl(n,"popover",c);break;case"xlinkActuate":Er(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Er(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Er(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Er(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Er(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Er(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Er(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Er(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Er(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Bl(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=qS.get(o)||o,Bl(n,o,c))}}function zh(n,i,o,c,p,m){switch(o){case"style":c0(n,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(o=c.__html,o!=null){if(p.children!=null)throw Error(a(60));n.innerHTML=o}}break;case"children":typeof c=="string"?Ua(n,c):(typeof c=="number"||typeof c=="bigint")&&Ua(n,""+c);break;case"onScroll":c!=null&&Me("scroll",n);break;case"onScrollEnd":c!=null&&Me("scrollend",n);break;case"onClick":c!=null&&(n.onclick=Cr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!e0.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(p=o.endsWith("Capture"),i=o.slice(2,p?o.length-7:void 0),m=n[Wt]||null,m=m!=null?m[o]:null,typeof m=="function"&&n.removeEventListener(i,m,p),typeof c=="function")){typeof m!="function"&&m!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(i,c,p);break e}o in n?n[o]=c:c===!0?n.setAttribute(o,""):Bl(n,o,c)}}}function Lt(n,i,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",n),Me("load",n);var c=!1,p=!1,m;for(m in o)if(o.hasOwnProperty(m)){var x=o[m];if(x!=null)switch(m){case"src":c=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ve(n,i,m,x,o,null)}}p&&Ve(n,i,"srcSet",o.srcSet,o,null),c&&Ve(n,i,"src",o.src,o,null);return;case"input":Me("invalid",n);var C=m=x=p=null,j=null,B=null;for(c in o)if(o.hasOwnProperty(c)){var G=o[c];if(G!=null)switch(c){case"name":p=G;break;case"type":x=G;break;case"checked":j=G;break;case"defaultChecked":B=G;break;case"value":m=G;break;case"defaultValue":C=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(a(137,i));break;default:Ve(n,i,c,G,o,null)}}a0(n,m,C,j,B,x,p,!1);return;case"select":Me("invalid",n),c=x=m=null;for(p in o)if(o.hasOwnProperty(p)&&(C=o[p],C!=null))switch(p){case"value":m=C;break;case"defaultValue":x=C;break;case"multiple":c=C;default:Ve(n,i,p,C,o,null)}i=m,o=x,n.multiple=!!c,i!=null?Ra(n,!!c,i,!1):o!=null&&Ra(n,!!c,o,!0);return;case"textarea":Me("invalid",n),m=p=c=null;for(x in o)if(o.hasOwnProperty(x)&&(C=o[x],C!=null))switch(x){case"value":c=C;break;case"defaultValue":p=C;break;case"children":m=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:Ve(n,i,x,C,o,null)}s0(n,c,p,m);return;case"option":for(j in o)if(o.hasOwnProperty(j)&&(c=o[j],c!=null))switch(j){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:Ve(n,i,j,c,o,null)}return;case"dialog":Me("beforetoggle",n),Me("toggle",n),Me("cancel",n),Me("close",n);break;case"iframe":case"object":Me("load",n);break;case"video":case"audio":for(c=0;c<Rs.length;c++)Me(Rs[c],n);break;case"image":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"embed":case"source":case"link":Me("error",n),Me("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in o)if(o.hasOwnProperty(B)&&(c=o[B],c!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ve(n,i,B,c,o,null)}return;default:if(Yd(i)){for(G in o)o.hasOwnProperty(G)&&(c=o[G],c!==void 0&&zh(n,i,G,c,o,void 0));return}}for(C in o)o.hasOwnProperty(C)&&(c=o[C],c!=null&&Ve(n,i,C,c,o,null))}function pk(n,i,o,c){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,m=null,x=null,C=null,j=null,B=null,G=null;for(X in o){var W=o[X];if(o.hasOwnProperty(X)&&W!=null)switch(X){case"checked":break;case"value":break;case"defaultValue":j=W;default:c.hasOwnProperty(X)||Ve(n,i,X,null,c,W)}}for(var P in c){var X=c[P];if(W=o[P],c.hasOwnProperty(P)&&(X!=null||W!=null))switch(P){case"type":m=X;break;case"name":p=X;break;case"checked":B=X;break;case"defaultChecked":G=X;break;case"value":x=X;break;case"defaultValue":C=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(a(137,i));break;default:X!==W&&Ve(n,i,P,X,c,W)}}Bd(n,x,C,j,B,G,m,p);return;case"select":X=x=C=P=null;for(m in o)if(j=o[m],o.hasOwnProperty(m)&&j!=null)switch(m){case"value":break;case"multiple":X=j;default:c.hasOwnProperty(m)||Ve(n,i,m,null,c,j)}for(p in c)if(m=c[p],j=o[p],c.hasOwnProperty(p)&&(m!=null||j!=null))switch(p){case"value":P=m;break;case"defaultValue":C=m;break;case"multiple":x=m;default:m!==j&&Ve(n,i,p,m,c,j)}i=C,o=x,c=X,P!=null?Ra(n,!!o,P,!1):!!c!=!!o&&(i!=null?Ra(n,!!o,i,!0):Ra(n,!!o,o?[]:"",!1));return;case"textarea":X=P=null;for(C in o)if(p=o[C],o.hasOwnProperty(C)&&p!=null&&!c.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Ve(n,i,C,null,c,p)}for(x in c)if(p=c[x],m=o[x],c.hasOwnProperty(x)&&(p!=null||m!=null))switch(x){case"value":P=p;break;case"defaultValue":X=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(a(91));break;default:p!==m&&Ve(n,i,x,p,c,m)}o0(n,P,X);return;case"option":for(var oe in o)if(P=o[oe],o.hasOwnProperty(oe)&&P!=null&&!c.hasOwnProperty(oe))switch(oe){case"selected":n.selected=!1;break;default:Ve(n,i,oe,null,c,P)}for(j in c)if(P=c[j],X=o[j],c.hasOwnProperty(j)&&P!==X&&(P!=null||X!=null))switch(j){case"selected":n.selected=P&&typeof P!="function"&&typeof P!="symbol";break;default:Ve(n,i,j,P,c,X)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ve in o)P=o[ve],o.hasOwnProperty(ve)&&P!=null&&!c.hasOwnProperty(ve)&&Ve(n,i,ve,null,c,P);for(B in c)if(P=c[B],X=o[B],c.hasOwnProperty(B)&&P!==X&&(P!=null||X!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(a(137,i));break;default:Ve(n,i,B,P,c,X)}return;default:if(Yd(i)){for(var Qe in o)P=o[Qe],o.hasOwnProperty(Qe)&&P!==void 0&&!c.hasOwnProperty(Qe)&&zh(n,i,Qe,void 0,c,P);for(G in c)P=c[G],X=o[G],!c.hasOwnProperty(G)||P===X||P===void 0&&X===void 0||zh(n,i,G,P,c,X);return}}for(var H in o)P=o[H],o.hasOwnProperty(H)&&P!=null&&!c.hasOwnProperty(H)&&Ve(n,i,H,null,c,P);for(W in c)P=c[W],X=o[W],!c.hasOwnProperty(W)||P===X||P==null&&X==null||Ve(n,i,W,P,c,X)}function ub(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mk(){if(typeof performance.getEntriesByType=="function"){for(var n=0,i=0,o=performance.getEntriesByType("resource"),c=0;c<o.length;c++){var p=o[c],m=p.transferSize,x=p.initiatorType,C=p.duration;if(m&&C&&ub(x)){for(x=0,C=p.responseEnd,c+=1;c<o.length;c++){var j=o[c],B=j.startTime;if(B>C)break;var G=j.transferSize,W=j.initiatorType;G&&ub(W)&&(j=j.responseEnd,x+=G*(j<C?1:(C-B)/(j-B)))}if(--c,i+=8*(m+x)/(p.duration/1e3),n++,10<n)break}}if(0<n)return i/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var jh=null,Dh=null;function qc(n){return n.nodeType===9?n:n.ownerDocument}function db(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fb(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function Rh(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Uh=null;function gk(){var n=window.event;return n&&n.type==="popstate"?n===Uh?!1:(Uh=n,!0):(Uh=null,!1)}var hb=typeof setTimeout=="function"?setTimeout:void 0,vk=typeof clearTimeout=="function"?clearTimeout:void 0,pb=typeof Promise=="function"?Promise:void 0,yk=typeof queueMicrotask=="function"?queueMicrotask:typeof pb<"u"?function(n){return pb.resolve(null).then(n).catch(bk)}:hb;function bk(n){setTimeout(function(){throw n})}function _i(n){return n==="head"}function mb(n,i){var o=i,c=0;do{var p=o.nextSibling;if(n.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"||o==="/&"){if(c===0){n.removeChild(p),po(i);return}c--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")c++;else if(o==="html")$s(n.ownerDocument.documentElement);else if(o==="head"){o=n.ownerDocument.head,$s(o);for(var m=o.firstChild;m;){var x=m.nextSibling,C=m.nodeName;m[ts]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=x}}else o==="body"&&$s(n.ownerDocument.body);o=p}while(o);po(i)}function gb(n,i){var o=n;n=0;do{var c=o.nextSibling;if(o.nodeType===1?i?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(i?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(n===0)break;n--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||n++;o=c}while(o)}function $h(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var o=i;switch(i=i.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":$h(o),qd(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function wk(n,i,o,c){for(;n.nodeType===1;){var p=o;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[ts])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==p.rel||n.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||n.getAttribute("title")!==(p.title==null?null:p.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(p.src==null?null:p.src)||n.getAttribute("type")!==(p.type==null?null:p.type)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var m=p.name==null?null:""+p.name;if(p.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=Ln(n.nextSibling),n===null)break}return null}function xk(n,i,o){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=Ln(n.nextSibling),n===null))return null;return n}function vb(n,i){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!i||(n=Ln(n.nextSibling),n===null))return null;return n}function Lh(n){return n.data==="$?"||n.data==="$~"}function Hh(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function _k(n,i){var o=n.ownerDocument;if(n.data==="$~")n._reactRetry=i;else if(n.data!=="$?"||o.readyState!=="loading")i();else{var c=function(){i(),o.removeEventListener("DOMContentLoaded",c)};o.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function Ln(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return n}var Ih=null;function yb(n){n=n.nextSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"||o==="/&"){if(i===0)return Ln(n.nextSibling);i--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||i++}n=n.nextSibling}return null}function bb(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(i===0)return n;i--}else o!=="/$"&&o!=="/&"||i++}n=n.previousSibling}return null}function wb(n,i,o){switch(i=qc(o),n){case"html":if(n=i.documentElement,!n)throw Error(a(452));return n;case"head":if(n=i.head,!n)throw Error(a(453));return n;case"body":if(n=i.body,!n)throw Error(a(454));return n;default:throw Error(a(451))}}function $s(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);qd(n)}var Hn=new Map,xb=new Set;function Fc(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Br=D.d;D.d={f:Sk,r:Tk,D:kk,C:Ek,L:Ck,m:Ak,X:Ok,S:Mk,M:Nk};function Sk(){var n=Br.f(),i=jc();return n||i}function Tk(n){var i=za(n);i!==null&&i.tag===5&&i.type==="form"?Lv(i):Br.r(n)}var uo=typeof document>"u"?null:document;function _b(n,i,o){var c=uo;if(c&&typeof i=="string"&&i){var p=Nn(i);p='link[rel="'+n+'"][href="'+p+'"]',typeof o=="string"&&(p+='[crossorigin="'+o+'"]'),xb.has(p)||(xb.add(p),n={rel:n,crossOrigin:o,href:i},c.querySelector(p)===null&&(i=c.createElement("link"),Lt(i,"link",n),Ot(i),c.head.appendChild(i)))}}function kk(n){Br.D(n),_b("dns-prefetch",n,null)}function Ek(n,i){Br.C(n,i),_b("preconnect",n,i)}function Ck(n,i,o){Br.L(n,i,o);var c=uo;if(c&&n&&i){var p='link[rel="preload"][as="'+Nn(i)+'"]';i==="image"&&o&&o.imageSrcSet?(p+='[imagesrcset="'+Nn(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(p+='[imagesizes="'+Nn(o.imageSizes)+'"]')):p+='[href="'+Nn(n)+'"]';var m=p;switch(i){case"style":m=fo(n);break;case"script":m=ho(n)}Hn.has(m)||(n=g({rel:"preload",href:i==="image"&&o&&o.imageSrcSet?void 0:n,as:i},o),Hn.set(m,n),c.querySelector(p)!==null||i==="style"&&c.querySelector(Ls(m))||i==="script"&&c.querySelector(Hs(m))||(i=c.createElement("link"),Lt(i,"link",n),Ot(i),c.head.appendChild(i)))}}function Ak(n,i){Br.m(n,i);var o=uo;if(o&&n){var c=i&&typeof i.as=="string"?i.as:"script",p='link[rel="modulepreload"][as="'+Nn(c)+'"][href="'+Nn(n)+'"]',m=p;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=ho(n)}if(!Hn.has(m)&&(n=g({rel:"modulepreload",href:n},i),Hn.set(m,n),o.querySelector(p)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Hs(m)))return}c=o.createElement("link"),Lt(c,"link",n),Ot(c),o.head.appendChild(c)}}}function Mk(n,i,o){Br.S(n,i,o);var c=uo;if(c&&n){var p=ja(c).hoistableStyles,m=fo(n);i=i||"default";var x=p.get(m);if(!x){var C={loading:0,preload:null};if(x=c.querySelector(Ls(m)))C.loading=5;else{n=g({rel:"stylesheet",href:n,"data-precedence":i},o),(o=Hn.get(m))&&qh(n,o);var j=x=c.createElement("link");Ot(j),Lt(j,"link",n),j._p=new Promise(function(B,G){j.onload=B,j.onerror=G}),j.addEventListener("load",function(){C.loading|=1}),j.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Bc(x,i,c)}x={type:"stylesheet",instance:x,count:1,state:C},p.set(m,x)}}}function Ok(n,i){Br.X(n,i);var o=uo;if(o&&n){var c=ja(o).hoistableScripts,p=ho(n),m=c.get(p);m||(m=o.querySelector(Hs(p)),m||(n=g({src:n,async:!0},i),(i=Hn.get(p))&&Fh(n,i),m=o.createElement("script"),Ot(m),Lt(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(p,m))}}function Nk(n,i){Br.M(n,i);var o=uo;if(o&&n){var c=ja(o).hoistableScripts,p=ho(n),m=c.get(p);m||(m=o.querySelector(Hs(p)),m||(n=g({src:n,async:!0,type:"module"},i),(i=Hn.get(p))&&Fh(n,i),m=o.createElement("script"),Ot(m),Lt(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(p,m))}}function Sb(n,i,o,c){var p=(p=le.current)?Fc(p):null;if(!p)throw Error(a(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(i=fo(o.href),o=ja(p).hoistableStyles,c=o.get(i),c||(c={type:"style",instance:null,count:0,state:null},o.set(i,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=fo(o.href);var m=ja(p).hoistableStyles,x=m.get(n);if(x||(p=p.ownerDocument||p,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,x),(m=p.querySelector(Ls(n)))&&!m._p&&(x.instance=m,x.state.loading=5),Hn.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Hn.set(n,o),m||zk(p,n,o,x.state))),i&&c===null)throw Error(a(528,""));return x}if(i&&c!==null)throw Error(a(529,""));return null;case"script":return i=o.async,o=o.src,typeof o=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=ho(o),o=ja(p).hoistableScripts,c=o.get(i),c||(c={type:"script",instance:null,count:0,state:null},o.set(i,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,n))}}function fo(n){return'href="'+Nn(n)+'"'}function Ls(n){return'link[rel="stylesheet"]['+n+"]"}function Tb(n){return g({},n,{"data-precedence":n.precedence,precedence:null})}function zk(n,i,o,c){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?c.loading=1:(i=n.createElement("link"),c.preload=i,i.addEventListener("load",function(){return c.loading|=1}),i.addEventListener("error",function(){return c.loading|=2}),Lt(i,"link",o),Ot(i),n.head.appendChild(i))}function ho(n){return'[src="'+Nn(n)+'"]'}function Hs(n){return"script[async]"+n}function kb(n,i,o){if(i.count++,i.instance===null)switch(i.type){case"style":var c=n.querySelector('style[data-href~="'+Nn(o.href)+'"]');if(c)return i.instance=c,Ot(c),c;var p=g({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),Ot(c),Lt(c,"style",p),Bc(c,o.precedence,n),i.instance=c;case"stylesheet":p=fo(o.href);var m=n.querySelector(Ls(p));if(m)return i.state.loading|=4,i.instance=m,Ot(m),m;c=Tb(o),(p=Hn.get(p))&&qh(c,p),m=(n.ownerDocument||n).createElement("link"),Ot(m);var x=m;return x._p=new Promise(function(C,j){x.onload=C,x.onerror=j}),Lt(m,"link",c),i.state.loading|=4,Bc(m,o.precedence,n),i.instance=m;case"script":return m=ho(o.src),(p=n.querySelector(Hs(m)))?(i.instance=p,Ot(p),p):(c=o,(p=Hn.get(m))&&(c=g({},o),Fh(c,p)),n=n.ownerDocument||n,p=n.createElement("script"),Ot(p),Lt(p,"link",c),n.head.appendChild(p),i.instance=p);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(c=i.instance,i.state.loading|=4,Bc(c,o.precedence,n));return i.instance}function Bc(n,i,o){for(var c=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=c.length?c[c.length-1]:null,m=p,x=0;x<c.length;x++){var C=c[x];if(C.dataset.precedence===i)m=C;else if(m!==p)break}m?m.parentNode.insertBefore(n,m.nextSibling):(i=o.nodeType===9?o.head:o,i.insertBefore(n,i.firstChild))}function qh(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function Fh(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var Pc=null;function Eb(n,i,o){if(Pc===null){var c=new Map,p=Pc=new Map;p.set(o,c)}else p=Pc,c=p.get(o),c||(c=new Map,p.set(o,c));if(c.has(n))return c;for(c.set(n,null),o=o.getElementsByTagName(n),p=0;p<o.length;p++){var m=o[p];if(!(m[ts]||m[Dt]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var x=m.getAttribute(i)||"";x=n+x;var C=c.get(x);C?C.push(m):c.set(x,[m])}}return c}function Cb(n,i,o){n=n.ownerDocument||n,n.head.insertBefore(o,i==="title"?n.querySelector("head > title"):null)}function jk(n,i,o){if(o===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Ab(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function Dk(n,i,o,c){if(o.type==="stylesheet"&&(typeof c.media!="string"||matchMedia(c.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var p=fo(c.href),m=i.querySelector(Ls(p));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(n.count++,n=Yc.bind(n),i.then(n,n)),o.state.loading|=4,o.instance=m,Ot(m);return}m=i.ownerDocument||i,c=Tb(c),(p=Hn.get(p))&&qh(c,p),m=m.createElement("link"),Ot(m);var x=m;x._p=new Promise(function(C,j){x.onload=C,x.onerror=j}),Lt(m,"link",c),o.instance=m}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(o,i),(i=o.state.preload)&&(o.state.loading&3)===0&&(n.count++,o=Yc.bind(n),i.addEventListener("load",o),i.addEventListener("error",o))}}var Bh=0;function Rk(n,i){return n.stylesheets&&n.count===0&&Gc(n,n.stylesheets),0<n.count||0<n.imgCount?function(o){var c=setTimeout(function(){if(n.stylesheets&&Gc(n,n.stylesheets),n.unsuspend){var m=n.unsuspend;n.unsuspend=null,m()}},6e4+i);0<n.imgBytes&&Bh===0&&(Bh=62500*mk());var p=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&Gc(n,n.stylesheets),n.unsuspend)){var m=n.unsuspend;n.unsuspend=null,m()}},(n.imgBytes>Bh?50:800)+i);return n.unsuspend=o,function(){n.unsuspend=null,clearTimeout(c),clearTimeout(p)}}:null}function Yc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Gc(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Xc=null;function Gc(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Xc=new Map,i.forEach(Uk,n),Xc=null,Yc.call(n))}function Uk(n,i){if(!(i.state.loading&4)){var o=Xc.get(n);if(o)var c=o.get(null);else{o=new Map,Xc.set(n,o);for(var p=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<p.length;m++){var x=p[m];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(o.set(x.dataset.precedence,x),c=x)}c&&o.set(null,c)}p=i.instance,x=p.getAttribute("data-precedence"),m=o.get(x)||c,m===c&&o.set(null,p),o.set(x,p),this.count++,c=Yc.bind(this),p.addEventListener("load",c),p.addEventListener("error",c),m?m.parentNode.insertBefore(p,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(p,n.firstChild)),i.state.loading|=4}}var Is={$$typeof:M,Provider:null,Consumer:null,_currentValue:L,_currentValue2:L,_threadCount:0};function $k(n,i,o,c,p,m,x,C,j){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$d(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$d(0),this.hiddenUpdates=$d(null),this.identifierPrefix=c,this.onUncaughtError=p,this.onCaughtError=m,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=j,this.incompleteTransitions=new Map}function Mb(n,i,o,c,p,m,x,C,j,B,G,W){return n=new $k(n,i,o,x,j,B,G,W,C),i=1,m===!0&&(i|=24),m=pn(3,null,null,i),n.current=m,m.stateNode=n,i=_f(),i.refCount++,n.pooledCache=i,i.refCount++,m.memoizedState={element:c,isDehydrated:o,cache:i},Ef(m),n}function Ob(n){return n?(n=Ba,n):Ba}function Nb(n,i,o,c,p,m){p=Ob(p),c.context===null?c.context=p:c.pendingContext=p,c=di(i),c.payload={element:o},m=m===void 0?null:m,m!==null&&(c.callback=m),o=fi(n,c,i),o!==null&&(rn(o,n,i),ys(o,n,i))}function zb(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Ph(n,i){zb(n,i),(n=n.alternate)&&zb(n,i)}function jb(n){if(n.tag===13||n.tag===31){var i=Xi(n,67108864);i!==null&&rn(i,n,67108864),Ph(n,67108864)}}function Db(n){if(n.tag===13||n.tag===31){var i=bn();i=Ld(i);var o=Xi(n,i);o!==null&&rn(o,n,i),Ph(n,i)}}var Vc=!0;function Lk(n,i,o,c){var p=A.T;A.T=null;var m=D.p;try{D.p=2,Yh(n,i,o,c)}finally{D.p=m,A.T=p}}function Hk(n,i,o,c){var p=A.T;A.T=null;var m=D.p;try{D.p=8,Yh(n,i,o,c)}finally{D.p=m,A.T=p}}function Yh(n,i,o,c){if(Vc){var p=Xh(c);if(p===null)Nh(n,i,c,Qc,o),Ub(n,c);else if(qk(p,n,i,o,c))c.stopPropagation();else if(Ub(n,c),i&4&&-1<Ik.indexOf(n)){for(;p!==null;){var m=za(p);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var x=qi(m.pendingLanes);if(x!==0){var C=m;for(C.pendingLanes|=2,C.entangledLanes|=2;x;){var j=1<<31-fn(x);C.entanglements[1]|=j,x&=~j}mr(m),(qe&6)===0&&(Nc=un()+500,Ds(0))}}break;case 31:case 13:C=Xi(m,2),C!==null&&rn(C,m,2),jc(),Ph(m,2)}if(m=Xh(c),m===null&&Nh(n,i,c,Qc,o),m===p)break;p=m}p!==null&&c.stopPropagation()}else Nh(n,i,c,null,o)}}function Xh(n){return n=Gd(n),Gh(n)}var Qc=null;function Gh(n){if(Qc=null,n=Na(n),n!==null){var i=l(n);if(i===null)n=null;else{var o=i.tag;if(o===13){if(n=u(i),n!==null)return n;n=null}else if(o===31){if(n=d(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return Qc=n,null}function Rb(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(kS()){case Bg:return 2;case Pg:return 8;case Ll:case ES:return 32;case Yg:return 268435456;default:return 32}default:return 32}}var Vh=!1,Si=null,Ti=null,ki=null,qs=new Map,Fs=new Map,Ei=[],Ik="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ub(n,i){switch(n){case"focusin":case"focusout":Si=null;break;case"dragenter":case"dragleave":Ti=null;break;case"mouseover":case"mouseout":ki=null;break;case"pointerover":case"pointerout":qs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fs.delete(i.pointerId)}}function Bs(n,i,o,c,p,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[p]},i!==null&&(i=za(i),i!==null&&jb(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),n)}function qk(n,i,o,c,p){switch(i){case"focusin":return Si=Bs(Si,n,i,o,c,p),!0;case"dragenter":return Ti=Bs(Ti,n,i,o,c,p),!0;case"mouseover":return ki=Bs(ki,n,i,o,c,p),!0;case"pointerover":var m=p.pointerId;return qs.set(m,Bs(qs.get(m)||null,n,i,o,c,p)),!0;case"gotpointercapture":return m=p.pointerId,Fs.set(m,Bs(Fs.get(m)||null,n,i,o,c,p)),!0}return!1}function $b(n){var i=Na(n.target);if(i!==null){var o=l(i);if(o!==null){if(i=o.tag,i===13){if(i=u(o),i!==null){n.blockedOn=i,Wg(n.priority,function(){Db(o)});return}}else if(i===31){if(i=d(o),i!==null){n.blockedOn=i,Wg(n.priority,function(){Db(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Kc(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=Xh(n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);Xd=c,o.target.dispatchEvent(c),Xd=null}else return i=za(o),i!==null&&jb(i),n.blockedOn=o,!1;i.shift()}return!0}function Lb(n,i,o){Kc(n)&&o.delete(i)}function Fk(){Vh=!1,Si!==null&&Kc(Si)&&(Si=null),Ti!==null&&Kc(Ti)&&(Ti=null),ki!==null&&Kc(ki)&&(ki=null),qs.forEach(Lb),Fs.forEach(Lb)}function Wc(n,i){n.blockedOn===i&&(n.blockedOn=null,Vh||(Vh=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Fk)))}var Zc=null;function Hb(n){Zc!==n&&(Zc=n,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Zc===n&&(Zc=null);for(var i=0;i<n.length;i+=3){var o=n[i],c=n[i+1],p=n[i+2];if(typeof c!="function"){if(Gh(c||o)===null)continue;break}var m=za(o);m!==null&&(n.splice(i,3),i-=3,Xf(m,{pending:!0,data:p,method:o.method,action:c},c,p))}}))}function po(n){function i(j){return Wc(j,n)}Si!==null&&Wc(Si,n),Ti!==null&&Wc(Ti,n),ki!==null&&Wc(ki,n),qs.forEach(i),Fs.forEach(i);for(var o=0;o<Ei.length;o++){var c=Ei[o];c.blockedOn===n&&(c.blockedOn=null)}for(;0<Ei.length&&(o=Ei[0],o.blockedOn===null);)$b(o),o.blockedOn===null&&Ei.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(c=0;c<o.length;c+=3){var p=o[c],m=o[c+1],x=p[Wt]||null;if(typeof m=="function")x||Hb(o);else if(x){var C=null;if(m&&m.hasAttribute("formAction")){if(p=m,x=m[Wt]||null)C=x.formAction;else if(Gh(p)!==null)continue}else C=x.action;typeof C=="function"?o[c+1]=C:(o.splice(c,3),c-=3),Hb(o)}}}function Ib(){function n(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(x){return p=x})},focusReset:"manual",scroll:"manual"})}function i(){p!==null&&(p(),p=null),c||setTimeout(o,20)}function o(){if(!c&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var c=!1,p=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(o,100),function(){c=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),p!==null&&(p(),p=null)}}}function Qh(n){this._internalRoot=n}Jc.prototype.render=Qh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(a(409));var o=i.current,c=bn();Nb(o,c,n,i,null,null)},Jc.prototype.unmount=Qh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Nb(n.current,2,null,n,null,null),jc(),i[Oa]=null}};function Jc(n){this._internalRoot=n}Jc.prototype.unstable_scheduleHydration=function(n){if(n){var i=Kg();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Ei.length&&i!==0&&i<Ei[o].priority;o++);Ei.splice(o,0,n),o===0&&$b(n)}};var qb=t.version;if(qb!=="19.2.0")throw Error(a(527,qb,"19.2.0"));D.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(a(188)):(n=Object.keys(n).join(","),Error(a(268,n)));return n=h(i),n=n!==null?v(n):null,n=n===null?null:n.stateNode,n};var Bk={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eu.isDisabled&&eu.supportsFiber)try{Zo=eu.inject(Bk),dn=eu}catch{}}return Qs.createRoot=function(n,i){if(!s(n))throw Error(a(299));var o=!1,c="",p=Vv,m=Qv,x=Kv;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onUncaughtError!==void 0&&(p=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(x=i.onRecoverableError)),i=Mb(n,1,!1,null,null,o,c,null,p,m,x,Ib),n[Oa]=i.current,Oh(n),new Qh(i)},Qs.hydrateRoot=function(n,i,o){if(!s(n))throw Error(a(299));var c=!1,p="",m=Vv,x=Qv,C=Kv,j=null;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(x=o.onCaughtError),o.onRecoverableError!==void 0&&(C=o.onRecoverableError),o.formState!==void 0&&(j=o.formState)),i=Mb(n,1,!0,i,o??null,c,p,j,m,x,C,Ib),i.context=Ob(null),o=i.current,c=bn(),c=Ld(c),p=di(c),p.callback=null,fi(o,p,c),o=c,i.current.lanes=o,es(i,o),mr(i),n[Oa]=i.current,Oh(n),new Jc(i)},Qs.version="19.2.0",Qs}var r1;function h5(){if(r1)return wp.exports;r1=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),wp.exports=f5(),wp.exports}var p5=h5();function m5(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var r,a,s,l,u=[],d="",f=e.split("/");for(f[0]||f.shift();s=f.shift();)r=s[0],r==="*"?(u.push(r),d+=s[1]==="?"?"(?:/(.*))?":"/(.*)"):r===":"?(a=s.indexOf("?",1),l=s.indexOf(".",1),u.push(s.substring(1,~a?a:~l?l:s.length)),d+=~a&&!~l?"(?:/([^/]+?))?":"/([^/]+?)",~l&&(d+=(~a?"?":"")+"\\"+s.substring(l))):d+="/"+s;return{keys:u,pattern:new RegExp("^"+d+(t?"(?=$|/)":"/?$"),"i")}}var Tp={exports:{}},kp={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i1;function g5(){if(i1)return kp;i1=1;var e=zl();function t(g,b){return g===b&&(g!==0||1/g===1/b)||g!==g&&b!==b}var r=typeof Object.is=="function"?Object.is:t,a=e.useState,s=e.useEffect,l=e.useLayoutEffect,u=e.useDebugValue;function d(g,b){var w=b(),_=a({inst:{value:w,getSnapshot:b}}),T=_[0].inst,k=_[1];return l(function(){T.value=w,T.getSnapshot=b,f(T)&&k({inst:T})},[g,w,b]),s(function(){return f(T)&&k({inst:T}),g(function(){f(T)&&k({inst:T})})},[g]),u(w),w}function f(g){var b=g.getSnapshot;g=g.value;try{var w=b();return!r(g,w)}catch{return!0}}function h(g,b){return b()}var v=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?h:d;return kp.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:v,kp}var a1;function q2(){return a1||(a1=1,Tp.exports=g5()),Tp.exports}var F2=q2();const v5=Pm(F2),y5=oC.useInsertionEffect,b5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",w5=b5?de.useLayoutEffect:de.useEffect,x5=y5||w5,B2=e=>{const t=de.useRef([e,(...r)=>t[0](...r)]).current;return x5(()=>{t[0]=e}),t[1]},_5="popstate",bg="pushState",wg="replaceState",S5="hashchange",o1=[_5,bg,wg,S5],T5=e=>{for(const t of o1)addEventListener(t,e);return()=>{for(const t of o1)removeEventListener(t,e)}},P2=(e,t)=>F2.useSyncExternalStore(T5,e,t),s1=()=>location.search,k5=({ssrSearch:e}={})=>P2(s1,e!=null?()=>e:s1),l1=()=>location.pathname,E5=({ssrPath:e}={})=>P2(l1,e!=null?()=>e:l1),C5=(e,{replace:t=!1,state:r=null}={})=>history[t?wg:bg](r,"",e),A5=(e={})=>[E5(e),C5],c1=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[c1]>"u"){for(const e of[bg,wg]){const t=history[e];history[e]=function(){const r=t.apply(this,arguments),a=new Event(e);return a.arguments=arguments,dispatchEvent(a),r}}Object.defineProperty(window,c1,{value:!0})}const M5=(e,t)=>t.toLowerCase().indexOf(e.toLowerCase())?"~"+t:t.slice(e.length)||"/",Y2=(e="")=>e==="/"?"":e,O5=(e,t)=>e[0]==="~"?e.slice(1):Y2(t)+e,N5=(e="",t)=>M5(u1(Y2(e)),u1(t)),u1=e=>{try{return decodeURI(e)}catch{return e}},X2={hook:A5,searchHook:k5,parser:m5,base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:e=>e},G2=de.createContext(X2),Go=()=>de.useContext(G2),V2={},Q2=de.createContext(V2),z5=()=>de.useContext(Q2),gd=e=>{const[t,r]=e.hook(e);return[N5(e.base,t),B2((a,s)=>r(O5(a,e.base),s))]},vd=()=>gd(Go()),xg=(e,t,r,a)=>{const{pattern:s,keys:l}=t instanceof RegExp?{keys:!1,pattern:t}:e(t||"*",a),u=s.exec(r)||[],[d,...f]=u;return d!==void 0?[!0,(()=>{const h=l!==!1?Object.fromEntries(l.map((g,b)=>[g,f[b]])):u.groups;let v={...f};return h&&Object.assign(v,h),v})(),...a?[d]:[]]:[!1,null]},j5=e=>xg(Go().parser,e,vd()[0]),D5=({children:e,...t})=>{var v,g,b;const r=Go(),a=t.hook?X2:r;let s=a;const[l,u]=((v=t.ssrPath)==null?void 0:v.split("?"))??[];u&&(t.ssrSearch=u,t.ssrPath=l),t.hrefs=t.hrefs??((g=t.hook)==null?void 0:g.hrefs),t.searchHook=t.searchHook??((b=t.hook)==null?void 0:b.searchHook);let d=de.useRef({}),f=d.current,h=f;for(let w in a){const _=w==="base"?a[w]+(t[w]||""):t[w]||a[w];f===h&&_!==h[w]&&(d.current=h={...h}),h[w]=_,(_!==a[w]||_!==s[w])&&(s=h)}return de.createElement(G2.Provider,{value:s,children:e})},d1=({children:e,component:t},r)=>t?de.createElement(t,{params:r}):typeof e=="function"?e(r):e,R5=e=>{let t=de.useRef(V2);const r=t.current;return t.current=Object.keys(e).length!==Object.keys(r).length||Object.entries(e).some(([a,s])=>s!==r[a])?e:r},wo=({path:e,nest:t,match:r,...a})=>{const s=Go(),[l]=gd(s),[u,d,f]=r??xg(s.parser,e,l,t),h=R5({...z5(),...d});if(!u)return null;const v=f?de.createElement(D5,{base:f},d1(a,h)):d1(a,h);return de.createElement(Q2.Provider,{value:h,children:v})},ua=de.forwardRef((e,t)=>{const r=Go(),[a,s]=gd(r),{to:l="",href:u=l,onClick:d,asChild:f,children:h,className:v,replace:g,state:b,...w}=e,_=B2(k=>{k.ctrlKey||k.metaKey||k.altKey||k.shiftKey||k.button!==0||(d==null||d(k),k.defaultPrevented||(k.preventDefault(),s(u,e)))}),T=r.hrefs(u[0]==="~"?u.slice(1):r.base+u,r);return f&&de.isValidElement(h)?de.cloneElement(h,{onClick:_,href:T}):de.createElement("a",{...w,onClick:_,href:T,className:v!=null&&v.call?v(a===u):v,children:h,ref:t})}),K2=e=>Array.isArray(e)?e.flatMap(t=>K2(t&&t.type===de.Fragment?t.props.children:t)):[e],U5=({children:e,location:t})=>{const r=Go(),[a]=gd(r);for(const s of K2(e)){let l=0;if(de.isValidElement(s)&&(l=xg(r.parser,s.props.path,t||a,s.props.nest))[0])return de.cloneElement(s,{match:l})}return null};function yd(e,t){for(const r in e)t(e[r],r)}function _n(e,t){e.forEach(t)}function ht(e,t,r){if(!e)throw Error(`${r?r+": ":""}${t}`)}function Tr({node:e=[],from:t,source:r,parent:a=t||r,to:s,target:l,child:u=s||l,scope:d={},meta:f={},family:h={type:"regular"},regional:v}={}){const g=tl(a),b=tl(h.links),w=tl(h.owners),_=[];_n(e,(k=>k&&Tn(_,k)));const T={id:Q5(),seq:_,next:tl(u),meta:f,scope:d,family:{triggers:g.length,type:h.type||"crosslink",links:b,owners:w}};return _n(b,(k=>Tn(wd(k),T))),_n(w,(k=>Tn(xd(k),T))),_n(g,(k=>Tn(k.next,T))),T}function Do(e,t,r){let a,s=Wr,l=null,u=tt;if(e.target&&(t=e.params,r=e.defer,a=e.meta,s="page"in e?e.page:s,e.stack&&(l=e.stack),u=So(e)||u,e=e.target),u&&tt&&u!==tt&&(tt=null),Array.isArray(e))for(let _=0;_<e.length;_++)la("pure",s,Kt(e[_]),l,t[_],u,a);else la("pure",s,Kt(e),l,t,u,a);if(r&&!fu)return;const d={isRoot:fu,currentPage:Wr,scope:tt,isWatch:Ou,isPure:Nu};let f,h,v,g,b,w;fu=0;e:for(;g=rM();){const{idx:_,stack:T,type:k}=g;v=T.node,Wr=b=T.page,tt=So(T),b?w=b.reg:tt&&(w=tt.reg);const S=!!b,E=!!tt,M={fail:0,scope:v.scope};f=h=0;for(let z=_;z<v.seq.length&&!f;z++){const R=v.seq[z];if(R.order){const{priority:F,barrierID:I}=R.order,J=I?b?`${b.fullID}_${I}`:I:0;if(z!==_||k!==F){I?Ap.has(J)||(Ap.add(J),bm(z,T,F,I)):bm(z,T,F,0);continue e}I&&Ap.delete(J)}switch(R.type){case"mov":{const I=R.data;let J;switch(I.from){case"stack":J=Au(T);break;case"a":case"b":J=T[I.from];break;case"value":J=I.store;break;case"store":if(w&&!w[I.store.id])if(S){const ne=o_(b,I.store.id);T.page=b=ne,ne?w=ne.reg:E?(Lo(tt,I.store,0,1,I.softRead),w=tt.reg):w=void 0}else E&&Lo(tt,I.store,0,1,I.softRead);J=ul(w&&w[I.store.id]||I.store)}switch(I.to){case"stack":T.value=J;break;case"a":case"b":T[I.to]=J;break;case"store":iM(b,tt,I.target,0).current=J}break}case"compute":const F=R.data;if(F.fn){Ou=v.meta.op==="watch",Nu=F.pure;const I=F.safe?(0,F.fn)(Au(T),M.scope,T):oM(M,F.fn,T);F.filter?h=!I:T.value=I,Ou=d.isWatch,Nu=d.isPure}}f=M.fail||h}if(!f){const z=Au(T),R=So(T);if(_n(v.next,(F=>{la("child",b,F,T,z,R)})),R){v.meta.needFxCounter&&la("child",b,R.fxCount,T,z,R),v.meta.storeChange&&la("child",b,R.storeChange,T,z,R),v.meta.warnSerialize&&la("child",b,R.warnSerializeNode,T,z,R);const F=R.additionalLinks[v.id];F&&_n(F,(I=>{la("child",b,I,T,z,R)}))}}}fu=d.isRoot,Wr=d.currentPage,tt=So(d)}function $5(e,t="combine"){let r=t+"(",a="",s=0;return yd(e,(l=>{s<25&&(l!=null&&(r+=a,r+=$i(l)?_g(l).fullName:l.toString()),s+=1,a=", ")})),r+")"}function W2(e,t){let r,a;const s=e;if(t){const l=_g(t);e.length===0?(r=l.path,a=l.fullName):(r=l.path.concat([e]),a=l.fullName.length===0?e:l.fullName+"/"+e)}else r=e.length===0?[]:[e],a=e;return{shortName:s,fullName:a,path:r}}function ti(e,t){if(!t||!t.name&&!t.named&&!t.loc)return e;let r=`[${e}]`;const a=t.named||t.name;a&&(r+=` unit '${a}'`);const s=t.loc;return!a&&s&&(r+=` (${s.file}:${s.line}:${s.column})`),r}function bd(e,t){const r=t?e:e[0];r_(r);let a=r.or;const s=r.and;if(s){const l=t?s:s[0];if(sr(l)&&"and"in l){const u=bd(s,t);e=u[0],a={...a,...u[1]}}else e=s}return[e,a]}function gm(e){const t=()=>e();return t.unsubscribe=()=>e(),t}function nr(e,...t){}function Pe(e,t){const r=Ho({or:t,and:typeof e=="string"?{name:e}:e}),a=ti("event",r),s=(d,...f)=>(ht(!xr(s,"derived"),"call of derived event is not supported, use createEvent instead",a),ht(!Nu,"unit call from pure function is not supported, use operators like sample instead",a),Wr?((h,v,g,b)=>{const w=Wr;g1(null);const T=h.create(g,b);return g1(w),T})(s,l,d,f):s.create(d,f)),l=Z5(),u=Object.assign(s,{graphite:Tr({meta:c_(r.actualOp||"event",s,r,Vo()),regional:1}),create:d=>(Do({target:s,params:d,scope:tt}),d),watch:d=>s_(s,d),map:d=>Mp(s,Ro,d,[Kr()]),filter:d=>Mp(s,"filter",d.fn?d:d.fn,[Kr(Sd,1)]),filterMap:d=>Mp(s,"filterMap",d,[Kr(),ir((f=>!En(f)),1)]),prepend(d){ht(s.targetable,".prepend of derived event is not supported, call source event instead",a);const f=Pe("* → "+s.shortName,{parent:wa(s)});return nr("eventPrepend",Kt(f)),_a(f,s,[Kr()],"prepend",d),l_(s,f),f}});return r!=null&&r.domain&&r.domain.hooks.event(u),Sn(u,"id",u.graphite.id),n_(u.graphite),u}function f1(e,t,r,a,s){return vm(r,`${s} ${t}`,"first argument"),ht(kn(a),"second argument should be a function",s),Tl(!xr(e,"derived"),`${t} in derived store`,`${t} in store created via createStore`,s),_n(Array.isArray(r)?r:[r],(l=>{e.off(l),u_(l,e,"on",tM,a)})),e}function Ct(e,t){const r=Ho(t),a=$o(e),s=ti("store",r),l=Pe({named:"updates",derived:1});nr("storeBase",a);const u=a.id,d="skipVoid"in r,f=d&&!r.skipVoid;Tl(!(d&&r.skipVoid),"{skipVoid: true}","updateFilter",s);const h={updates:l,defaultState:e,stateRef:a,getState(){let S,E=a;if(Wr){let M=Wr;for(;M&&!M.reg[u];)M=wa(M);M&&(S=M)}return!S&&tt&&(Lo(tt,a,1),S=tt),S&&(E=S.reg[u]),ul(E)},setState:S=>Do({target:h,params:S,defer:1,scope:tt}),reset:(...S)=>(ht(h.targetable,".reset of derived store is not supported",s),_n(S,(E=>f1(h,".reset",E,(()=>h.defaultState),s))),h),on:(S,E)=>(ht(h.targetable,".on of derived store is not supported",s),f1(h,".on",S,E,s)),off(S){const E=Kt(S).id,M=Kt(h).family.links.find((z=>z.meta.onTrigger===E));return M&&Zu(M),h},map(S,E){let M,z;sr(S)&&(M=S,S=S.fn);const R=h.getState(),F=En(R);(!F||F&&f)&&(z=S(R));const I=Ct(z,{name:`${h.shortName} → *`,derived:1,...E,and:M}),J=u_(h,I,Ro,Sd,S);return ym(rr(I),{type:Ro,fn:S,from:a}),rr(I).noInit=1,nr("storeMap",a,J),I},watch(S,E){if(Tl(!E,"watch second argument","sample",s),!E||!$i(S)){const M=s_(h,S);return nr("storeWatch",a,S)||S(h.getState()),M}return ht(kn(E),"second argument should be a function",s),S.watch((M=>E(h.getState(),M)))}},v=c_("store",h,r,Vo()),g=h.defaultConfig.updateFilter;h.graphite=Tr({scope:{state:a,fn:g},node:[ir(((S,E,M)=>(M.scope&&!M.scope.reg[a.id]&&(M.b=1),S))),Di(a),ir(((S,E,{a:M,b:z})=>{const R=En(S);return R&&!d&&G5(`${ju}`,h.graphite),(R&&f||!R)&&(S!==M||z)}),1),g&&Kr(i_,1),Fn({from:"stack",target:a})],child:l,meta:{...v,defaultState:e,stateRef:a},regional:1}),Sn(h,"id",h.graphite.id),Sn(h,"rootStateRefId",u);const b=xr(h,"serialize"),w=xr(h,"derived"),_=b==="ignore",T=xr(h,"sid");T&&(Sn(h,"storeChange",1),a.sid=T),T||_||w||Sn(h,"warnSerialize",1);const k=En(e);return ht(w||!k||k&&f,ju,s),w&&k&&!d&&console.error(`${s}: ${ju}`),xa(h,[l]),r!=null&&r.domain&&r.domain.hooks.store(h),w||(h.reinit=Pe({named:"reinit"}),h.reset(h.reinit)),a.meta=h.graphite.meta,n_(h.graphite),h}function wr(...e){let t,r,a;[e,a]=bd(e);const s=ti("combine",a),l=e[e.length-1],u=e.length>1&&!An(l)&&sr(l),d=u&&l,f=u?e[e.length-2]:l;let h,v,g;if(kn(f)?(r=e.slice(0,u?-2:-1),t=f):r=e,r.length===1){const b=r[0];An(b)||(h=b,v=1)}if(!v&&(h=r,t)){g=1;const b=t;t=w=>b(...w)}return ht(sr(h),`${s}: shape should be an object`),lM(Array.isArray(h),!g,h,Vo(),a,t,d)}function L5(){const e={};return e.req=new Promise(((t,r)=>{e.rs=t,e.rj=r})),e.req.catch((()=>{})),e}function H5(e,t={}){const r=Ho(kn(e)?{handler:e}:e,t),a=ti("effect",r),s=Pe(kn(e)?{handler:e}:e,{...t,actualOp:"effect"});Td(s,Vo());const l=Kt(s);Sn(l,"op",s.kind="effect"),s.use=_=>(ht(kn(_),".use argument should be a function",a),g.scope.handler=_,s),s.use.getCurrent=()=>g.scope.handler;const u=s.finally=Pe({named:"finally",derived:1}),d=s.done=u.filterMap({named:"done",fn({status:_,params:T,result:k}){if(_==="done")return{params:T,result:k}}}),f=s.fail=u.filterMap({named:"fail",fn({status:_,params:T,error:k}){if(_==="fail")return{params:T,error:k}}}),h=s.doneData=d.map({named:"doneData",fn:({result:_})=>_}),v=s.failData=f.map({named:"failData",fn:({error:_})=>_}),g=Tr({scope:{handler:s.defaultConfig.handler||(()=>ht(0,`no handler used in ${s.compositeName.fullName}`))},node:[ir(((_,T,k)=>{let S=T.handler;const E=So(k);if(E){const M=E.handlers.unitMap.get(s)||E.handlers.sidMap[s.sid];M&&(S=M)}return _.handler=S,_}),0,1),ir(((_,T,k)=>{if(T.runnerFn&&!T.runnerFn(_,null,k))return;const{params:S,req:E,handler:M,args:z=[S]}=_,R=Ju(S,E,1,u,k),F=Ju(S,E,0,u,k),[I,J]=d_(M,F,z);I&&(sr(J)&&kn(J.then)?J.then(R,F):R(J))}),0,1)],meta:{op:"fx",fx:"runner"},regional:1});l.scope.runner=g,Tn(l.seq,ir(((_,{runner:T},k)=>{const S=wa(k)?{params:_,req:{rs(E){},rj(E){}}}:_;return k.meta||(k.meta={fxID:K5()}),Do({target:T,params:S,defer:1,scope:So(k),meta:k.meta}),S.params}))),s.create=_=>{const T=L5(),k={params:_,req:T};if(tt&&!Ou){const S=tt;T.req.finally((()=>{xm(S)})).catch((()=>{}))}return Do({target:s,params:k,scope:tt}),T.req};const b=s.inFlight=Ct(0,{serialize:"ignore",named:(xr(s,"name")||s.graphite.id)+".inFlight"}).on(s,(_=>_+1)).on(u,(_=>_-1)).map({fn:_=>_,named:"inFlight"});Sn(u,"needFxCounter","dec"),Sn(s,"needFxCounter",1);const w=s.pending=b.map({fn:_=>_>0,named:"pending"});return xa(s,[u,d,f,h,v,w,b]),r!=null&&r.domain&&r.domain.hooks.effect(s),s}function h1(e){let t;[e,t]=bd(e,1);const r=ti("attach",t);let{source:a,effect:s,mapParams:l,domain:u}=e;Uo(s)&&ht(En(u),"`domain` can only be used with a plain function",r);const d=H5(e,t);Sn(d,"attached",1),Td(d,Vo());const{runner:f}=Kt(d).scope;let h;const v=(b,w,_)=>{const{params:T,req:k,handler:S}=b,E=d.finally,M=Ju(T,k,0,E,_),z=_.a,R=Uo(S);let F,I=1;if(l?[I,F]=d_(l,M,[T,z]):F=a&&R?z:T,I){if(!R)return b.args=[z,F],1;Do({target:S,params:{params:F,req:{rs:Ju(T,k,1,E,_),rj:M}},page:_.page,defer:1,meta:_.meta})}};if(a){let b;f.scope.runnerFn=v,An(a)?(b=a,xa(b,[d])):(b=wr(a),xa(d,[b])),h=[ir((w=>w),0,1),Di(rr(b))],delete f.seq[1].order}else h=[ir(v,1,1)];f.seq.splice(1,0,...h),d.use(s);const g=wa(s);return g&&(Object.assign(_g(d),W2(d.shortName,g)),d.defaultConfig.parent=g),l_(s,d,"effect"),d}function I5(e,t){let r=0;return _n(uM,(a=>{a in e&&(ht(e[a]!=null,f_(t,a)),r=1)})),r}function Gt(...e){let t,r,a,s,[[l,u,d],f]=bd(e),h=1;const v=ti("sample",f);return En(u)&&sr(l)&&I5(l,v)&&(u=l.clock,d=l.fn,"batch"in l?h=l.batch:(Tl(!("greedy"in l),"greedy in sample","batch",v),h=!l.greedy),s=l.filter,t=l.target,r=l.name,a=l.sid,l=l.source),dM("sample",u,l,s,t,d,r,f,h,1,0,a)}function Z2(e,t,r){const a=ti("restore",r);if(ht(!An(e),"restore($store) is not supported",a),J2(e)||Uo(e)){const l=wa(e),u=Ct(t,{parent:l,name:e.shortName,and:r});return _a(Uo(e)?e.doneData:e,u),l&&l.hooks.store(u),u}const s=Array.isArray(e)?[]:{};return yd(e,((l,u)=>s[u]=An(l)?l:Ct(l,{name:u}))),s}function q5(e,{scope:t,safe:r}={}){ht(t||tt||r,"scopeBind: scope not found");const a=t||tt;return(...s)=>{function l(){xm(f)}let u,d=0;const f=tt;xm(a);try{u=e(...s)}catch(h){u=h,d=1}if(l(),d)throw u;return u instanceof Promise&&u.then(l,l),u}}function F5({unit:e,fn:t,scope:r,batch:a}){const s=[Mu.run({fn:u=>t(u)})];s.unshift(Mu.compute({priority:"sampler",batch:1})),An(e)&&s.unshift(Mu.mov({store:e.stateRef,to:"stack"}));const l=Array.isArray(e)?e:[e];if(r){const u=[],d=r.additionalLinks;return l.forEach((f=>{const h=d[f.graphite.id]||[];d[f.graphite.id]=h;const v=Tr({node:B5(s,f),meta:{watchOp:f.kind}});h.push(v),u.push((()=>{const g=h.indexOf(v);g!==-1&&h.splice(g,1),Zu(v)}))})),gm((()=>{u.forEach((f=>f()))}))}{const u=Tr({node:s,parent:l,family:{owners:l}});return gm((()=>{Zu(u)}))}}function B5(e,t){return An(t)?[Mu.mov({store:t.stateRef,to:"stack"}),...e]:e}const P5=typeof Symbol<"u"&&Symbol.observable||"@@observable",Ro="map",Kt=e=>e.graphite||e,wd=e=>e.family.owners,xd=e=>e.family.links,rr=e=>e.stateRef,Au=e=>e.value,wa=e=>e.parent,So=e=>e.scope,xr=(e,t)=>Kt(e).meta[t],Sn=(e,t,r)=>Kt(e).meta[t]=r,_g=e=>e.compositeName,$i=e=>(kn(e)||sr(e))&&"kind"in e,Dl=e=>t=>$i(t)&&t.kind===e,An=Dl("store"),J2=Dl("event"),Uo=Dl("effect"),Y5=e=>$i(e)&&!!e.targetable,e_=Dl("domain"),X5=Dl("scope");var el={__proto__:null,unit:$i,store:An,event:J2,effect:Uo,targetable:Y5,domain:e_,scope:X5,attached:e=>Uo(e)&&xr(e,"attached")==1};const Ep=(e,t)=>e.includes(t),Cp=(e,t)=>{const r=e.indexOf(t);r!==-1&&e.splice(r,1)},Tn=(e,t)=>e.push(t),Tl=(e,t,r,a)=>!e&&console.error(`${a?a+": ":""}${t} is deprecated${r?`, use ${r} instead`:""}`),G5=(e,t)=>{const r=xr(t,"unitTrace"),a=xr(t,"config"),s=a!=null&&a.loc?` at ${a.loc.file}`:null,l=a==null?void 0:a.name;let u=e;l&&(u=`${l}: ${e}`),s&&(u=`${l}${s}: ${e}`);const d=Error(u);r&&(d.stack=r),r||l||s||console.log(`Add effector's Babel or SWC plugin to your config for more detailed debug information or "import "effector/enable_debug_traces" to your code entry module to see full stack traces`),console.error(d)},_d=()=>{let e=0;return()=>""+ ++e},V5=_d(),t_=_d(),Q5=_d(),K5=_d();let W5=null;const n_=e=>{},Z5=()=>W5,J5=e=>e,xa=(e,t)=>{const r=Kt(e);_n(t,(a=>{const s=Kt(a);r.family.type!=="domain"&&(s.family.type="crosslink"),Tn(wd(s),r),Tn(xd(r),s)}))},tl=(e=[])=>(Array.isArray(e)?e:[e]).flat().map(Kt),sr=e=>typeof e=="object"&&e!==null,kn=e=>typeof e=="function",En=e=>e===void 0,r_=e=>ht(sr(e)||kn(e),"expect first argument be an object"),p1=(e,t,r,a)=>ht(!(!sr(e)&&!kn(e)||!("family"in e)&&!("graphite"in e)),`${t}: expect ${r} to be a unit (store, event or effect)${a}`),vm=(e,t,r)=>{Array.isArray(e)?_n(e,((a,s)=>p1(a,t,`${s} item of ${r}`,""))):p1(e,t,r," or array of units")},eM=(e,t,r="target")=>_n(tl(t),(a=>ht(!xr(a,"derived"),`${e}: derived unit in "${r}" is not supported, use createStore/createEvent instead"`))),i_=(e,{fn:t},{a:r})=>t(e,r),tM=(e,{fn:t},{a:r})=>t(r,e),Sd=(e,{fn:t})=>t(e),a_=(e,t,r,a)=>{const s={id:t_(),type:e,data:t};return r&&(s.order={priority:r},a&&(s.order.barrierID=++nM)),s};let nM=0;const Fn=({from:e="store",store:t,target:r,to:a=r?"store":"stack",batch:s,priority:l})=>a_("mov",{from:e,store:t,to:a,target:r},l,s),kl=({fn:e,batch:t,priority:r,safe:a=0,filter:s=0,pure:l=0})=>a_("compute",{fn:e,safe:a,filter:s,pure:l},r,t),Sg=({fn:e})=>kl({fn:e,priority:"effect"}),ir=(e,t,r)=>kl({fn:e,safe:1,filter:t,priority:r&&"effect"}),Di=(e,t,r)=>Fn({store:e,to:t?"stack":"a",priority:r&&"sampler",batch:1}),Kr=(e=Sd,t)=>kl({fn:e,pure:1,filter:t}),Mu={mov:Fn,compute:kl,filter:({fn:e,pure:t})=>kl({fn:e,filter:1,pure:t}),run:Sg},$o=e=>({id:t_(),current:e,initial:e}),ul=({current:e})=>e,ym=(e,t)=>{e.before||(e.before=[]),Tn(e.before,t)};let To=null;const Tg=(e,t)=>{if(!e)return t;if(!t)return e;let r;return(e.v.type===t.v.type&&e.v.id>t.v.id||wm(e.v.type)>wm(t.v.type))&&(r=e,e=t,t=r),r=Tg(e.r,t),e.r=e.l,e.l=r,e},kg=[];let m1=0;for(;m1<6;)Tn(kg,{first:null,last:null,size:0}),m1+=1;const rM=()=>{for(let e=0;e<6;e++){const t=kg[e];if(t.size>0){if(e===3||e===4){t.size-=1;const a=To.v;return To=Tg(To.l,To.r),a}t.size===1&&(t.last=null);const r=t.first;return t.first=r.r,t.size-=1,r.v}}},la=(e,t,r,a,s,l,u)=>bm(0,{a:null,b:null,node:r,parent:a,value:s,page:t,scope:l,meta:u},e,0),bm=(e,t,r,a)=>{const s=wm(r),l=kg[s],u={v:{idx:e,stack:t,type:r,id:a},l:null,r:null};s===3||s===4?To=Tg(To,u):(l.size===0?l.first=u:l.last.r=u,l.last=u),l.size+=1},wm=e=>{switch(e){case"child":return 0;case"pure":return 1;case"read":return 2;case"barrier":return 3;case"sampler":return 4;case"effect":return 5;default:return-1}},Ap=new Set;let tt,fu=1,Ou=0,Nu=0,Wr=null;const xm=e=>{tt=e},g1=e=>{Wr=e},o_=(e,t)=>{if(e){for(;e&&!e.reg[t];)e=e.parent;if(e)return e}return null},iM=(e,t,r,a)=>{const s=o_(e,r.id);return s?s.reg[r.id]:t?(Lo(t,r,a),t.reg[r.id]):r},aM=e=>e,Lo=(e,t,r,a,s)=>{const l=e.reg;if(l[t.id])return;const u=t.sid,d={id:t.id,current:t.initial,meta:t.meta};if(d.id in e.values.idMap)d.current=e.values.idMap[d.id];else if(u&&u in e.values.sidMap&&!(u in e.sidIdMap)){var f;const h=t==null||(f=t.meta)===null||f===void 0?void 0:f.serialize;d.current=(e.fromSerialize&&h!=="ignore"&&(h==null?void 0:h.read)||aM)(e.values.sidMap[u])}else if(t.before&&!s){let h=0;const v=r||!t.noInit||a;_n(t.before,(g=>{switch(g.type){case"map":{const b=g.from;if((b||g.fn)&&(b&&Lo(e,b,r,a),v)){const w=b&&l[b.id].current;d.current=g.fn?g.fn(w):w}break}case"field":Lo(e,g.from,r,a),h||(h=1,d.current=Array.isArray(d.current)?[...d.current]:{...d.current}),v&&(d.current[g.field]=l[l[g.from.id].id].current)}}))}u&&(e.sidIdMap[u]=t.id),l[t.id]=d},oM=(e,t,r)=>{try{return t(Au(r),e.scope,r)}catch(a){console.error(a),e.fail=1,e.failReason=a}},Ho=(e,t={})=>(sr(e)&&(Ho(e.or,t),yd(e,((r,a)=>{En(r)||a==="or"||a==="and"||(t[a]=r)})),Ho(e.and,t)),t),v1=(e,t)=>{Cp(e.next,t),Cp(wd(e),t),Cp(xd(e),t)},y1=["on","reset","sample","split","merge","guard","forward"],zu=(e,t,r,a,s)=>{let l;e.next.length=0,e.seq.length=0,e.scope=null;let u=xd(e);const{stateRef:d,defaultShape:f,isRegion:h,op:v}=e.meta;if(d&&(d.before=[],e.meta.stateRef=null),f)for(const b in f)f[b]=null;const g=h?e:a;if(u.length>0){const b=Ep(y1,v),w=!h&&!s,_=w&&r&&!b;for(;l=u.pop();){const T=Ep(l.next,e);v1(l,e),h&&zu(l,0,0,e,1),T||(l.family.triggers-=1),(t||_||w&&l.family.type==="crosslink"&&!b||s&&Ep(y1,l.meta.op)&&(T&&l.next.length===0||!T&&l.family.triggers<=0))&&zu(l,t,r&&l.meta.op!=="on",g,s)}}for(u=wd(e);l=u.pop();)v1(l,e),r&&l.family.type==="crosslink"&&zu(l,t,l.meta.op!=="on",g,s)},hu=e=>e.clear(),Zu=(e,{deep:t}={})=>{let r=0;if(e.ownerSet&&e.ownerSet.delete(e),e_(e)){r=1;const a=e.history;hu(a.events),hu(a.effects),hu(a.stores),hu(a.domains)}zu(Kt(e),!!t,r,null,0)},sM=e=>gm((()=>Zu(e))),_a=(e,t,r,a,s)=>Tr({node:r,parent:e,child:t,scope:{fn:s},meta:{op:a},family:{owners:[e,t],links:t},regional:1}),s_=(e,t)=>(ht(kn(t),".watch argument should be a function"),sM(Tr({scope:{fn:t},node:[Sg({fn:Sd})],parent:e,meta:{op:"watch"},family:{owners:e},regional:1}))),l_=(e,t,r="event")=>{wa(e)&&wa(e).hooks[r](t)},Td=(e,t)=>Sn(e,"unitTrace",t),Vo=e=>"",c_=(e,t,r,a)=>{const s=Ho(r),l=e==="domain",u=V5(),{sid:d=null,named:f=null,domain:h=null,parent:v=h}=s,g=f||s.name||(l?"":u),b=W2(g,v),w={op:t.kind=e,name:t.shortName=g,sid:t.sid=J5(d),named:f,unitId:t.id=u,serialize:s.serialize,derived:s.derived,config:s,unitTrace:a};return t.targetable=!s.derived,t.parent=v,t.compositeName=b,t.defaultConfig=s,t.getType=()=>(Tl(0,"getType","compositeName.fullName"),b.fullName),!l&&(t.subscribe=_=>(r_(_),t.watch(kn(_)?_:T=>_.next&&_.next(T))),t[P5]=()=>t),w},Mp=(e,t,r,a)=>{let s;sr(r)&&(s=r,r=r.fn);const l=Pe({name:`${e.shortName} → *`,derived:1,and:s});return _a(e,l,a,t,r),l},ju="undefined is used to skip updates. To allow undefined as a value provide explicit { skipVoid: false } option",u_=(e,t,r,a,s)=>{const l=rr(t),u=Fn({store:l,to:"a",priority:"read"});r===Ro&&(u.data.softRead=1);const d=[u,Kr(a)];nr("storeOnMap",l,d,An(e)&&rr(e));const f=_a(e,t,d,r,s);return r!==Ro&&Sn(f,"onTrigger",Kt(e).id),f},lM=(e,t,r,a,s,l,u)=>{const d=ti("combine",s),f=e?E=>[...E]:E=>({...E}),h=e?[]:{},v=f(h),g=$o(v),b=$o(1);g.type=e?"list":"shape",g.noInit=1,nr("combineBase",g,b);const w=Ct(v,{name:$5(r),derived:1,...u,and:s});Td(w,a);const _=rr(w);_.noInit=1,Sn(w,"isCombine",1),xa(w,[Tr({meta:{stateRef:g}})]);const T=Di(g);T.order={priority:"barrier"};const k=Fn({store:_,to:"b",priority:"read"});k.data.softRead=1;const S=[ir(((E,M,z)=>(z.scope&&!z.scope.reg[g.id]&&(z.c=1),E))),T,Fn({store:b,to:"b"}),ir(((E,{key:M},z)=>{if(z.c||E!==z.a[M])return t&&z.b&&(z.a=f(z.a)),z.a[M]=E,1}),1),Fn({from:"a",target:g}),Fn({from:"value",store:0,target:b}),Fn({from:"value",store:1,target:b,priority:"barrier",batch:1}),Di(g,1,1),l&&Kr(),k];if(yd(r,((E,M)=>{if(!An(E))return ht(!$i(E)&&!En(E),`combine expects a store in a field ${M}`,d),void(v[M]=h[M]=E);h[M]=E.defaultState,v[M]=E.getState();const z=_a(E,w,S,"combine",l);z.scope.key=M;const R=rr(E);ym(g,{type:"field",field:M,from:R}),nr("combineField",R,z)})),w.defaultShape=r,Sn(w,"defaultShape",r),ym(_,{type:Ro,from:g,fn:l}),l){const E=l(v);!En(E)||u&&"skipVoid"in u||console.error(`${d}: ${ju}`),_.current=E,_.initial=E,w.defaultState=E}else w.defaultState=h;return w},d_=(e,t,r)=>{try{return[1,e(...r)]}catch(a){return t(a),[0,null]}},Ju=(e,t,r,a,s)=>l=>{Do({target:[a,cM],params:[r?{status:"done",params:e,result:l}:{status:"fail",params:e,error:l},{value:l,fn:r?t.rs:t.rj}],defer:1,page:s.page,scope:s.scope,meta:s.meta})},cM=Tr({node:[Sg({fn:({fn:e,value:t})=>e(t)})],meta:{op:"fx",fx:"sidechain"}}),uM=["source","clock","target"],f_=(e,t)=>e+`: ${t} should be defined`,dM=(e,t,r,a,s,l,u,d,f,h,v,g)=>{const b=ti(e,d),w=!!s;ht(!En(r)||!En(t),f_(b,"either source or clock"));let _=0;En(r)?_=1:$i(r)||(r=wr(r)),En(t)?t=r:(vm(t,b,"clock"),Array.isArray(t)&&(t=_a(t,[],[],e))),_&&(r=t),d||u?d&&u?d.name=u:!d&&u&&(d={name:u}):u=r.shortName;let T="none";a&&($i(a)?T="unit":(ht(kn(a),"`filter` should be function or unit"),T="fn")),s?(vm(s,b,"target"),eM(b,s)):T==="none"&&h&&An(r)&&An(t)?s=Ct(l?l(ul(rr(r)),ul(rr(t))):ul(rr(r)),{name:u,sid:g,or:d}):(s=Pe({name:u,derived:1,or:d}),nr("sampleTarget",Kt(s)));const k=$o();let S=[];const E=[];if(T==="unit"){const[R,F,I,J]=b1(a,s,t,k,e);J&&Tn(E,J),I||S.push(...Op(F)),S.push(...Op(R))}const M=[];if(_)f&&Tn(M,Di(k,1,1));else{const[R,F,I,J]=b1(r,s,t,k,e);J&&Tn(E,J),I||M.push(...Op(F)),Tn(M,Di(R,1,f))}const z=_a(t,s,[nr(),Fn({from:"stack",target:k}),...M,...S,Di(k),T==="fn"&&Kr(((R,F,{a:I})=>a(R,I)),1),l&&Kr(i_),nr("sampleSourceUpward",w)],e,l);return xa(r,[z]),xa(z,E),Object.assign(z.meta,d,{joint:1,stateRef:k}),Td(z,Vo()),s},Op=e=>[Di(e),ir(((t,r,{a})=>a),1)],b1=(e,t,r,a,s)=>{const l=An(e),u=l?rr(e):$o(),d=$o(l);let f;return l||(f=Tr({parent:e,node:[Fn({from:"stack",target:u}),Fn({from:"value",store:1,target:d})],family:{owners:[...new Set([e,t,r].flat())],links:t},meta:{op:s},regional:1})),nr("sampleSource",d,u,a),[u,d,l,f]};var Np={exports:{}},zp={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w1;function fM(){if(w1)return zp;w1=1;var e=zl(),t=q2();function r(h,v){return h===v&&(h!==0||1/h===1/v)||h!==h&&v!==v}var a=typeof Object.is=="function"?Object.is:r,s=t.useSyncExternalStore,l=e.useRef,u=e.useEffect,d=e.useMemo,f=e.useDebugValue;return zp.useSyncExternalStoreWithSelector=function(h,v,g,b,w){var _=l(null);if(_.current===null){var T={hasValue:!1,value:null};_.current=T}else T=_.current;_=d(function(){function S(F){if(!E){if(E=!0,M=F,F=b(F),w!==void 0&&T.hasValue){var I=T.value;if(w(I,F))return z=I}return z=F}if(I=z,a(M,F))return I;var J=b(F);return w!==void 0&&w(I,J)?(M=F,I):(M=F,z=J)}var E=!1,M,z,R=g===void 0?null:g;return[function(){return S(v())},R===null?void 0:function(){return S(R())}]},[v,g,b,w]);var k=s(h,_[0],_[1]);return u(function(){T.hasValue=!0,T.value=k},[k]),f(k),k},zp}var x1;function hM(){return x1||(x1=1,Np.exports=fM()),Np.exports}var pM=hM();const mM=Pm(pM);function gM(e,t){const r=el.unit(e);let a={};r?a={unit:e}:"@@unitShape"in e?typeof e["@@unitShape"]=="function"?a=e["@@unitShape"]():_1("expect @@unitShape to be a function"):a=e;const s=Array.isArray(a),l=br.useRef({stale:1,justSubscribed:0,scope:t}),[u,d,f,h,v]=br.useMemo((()=>{l.current.stale=1;const _=Array.isArray(a)?[]:{},T=[],k=[],S=[],E=[];for(const M in a){if(!{}.hasOwnProperty.call(a,M))continue;const z=a[M];el.unit(z)||_1(`expect useUnit ${r?"argument":`value in key "${M}"`} to be a unit`),el.event(z)||el.effect(z)?(_[M]=t?q5(z,{scope:t}):z,S.push(M),E.push(z)):(_[M]=null,T.push(M),k.push(z))}return[_,T,k,S,E]}),[l,t,...Object.keys(a),...Object.values(a)]),g=br.useRef({value:u,storeKeys:d,eventKeys:h,eventValues:v}),b=br.useCallback((_=>{const T=l.current;return T.justSubscribed=1,F5({unit:f,fn:()=>{T.stale||(T.stale=1,_())},scope:t,batch:1})}),[f,t,g,l]),w=br.useCallback((()=>{const _=g.current,T=l.current;let k,S=0;const E=_.value,M=_.storeKeys,z=_.eventKeys,R=_.eventValues,F=t!==T.scope;if(T.stale||T.justSubscribed||F){S=!T.justSubscribed||F,k=s?[...u]:{...u},M.length===d.length&&z.length===h.length||(S=1);for(let I=0;I<d.length;I++){const J=bM(f[I],t),ne=d[I];S||(S=M.includes(ne)?E[ne]!==J:1),k[ne]=J}for(let I=0;I<h.length;I++){const J=v[I],ne=h[I];S||(S=z.includes(ne)?R[z.indexOf(ne)]!==J:1)}}return S&&(_.value=k),_.storeKeys=d,_.eventKeys=h,_.eventValues=v,T.stale=0,T.justSubscribed=!S,T.scope=t,r?_.value.unit:_.value}),[b,f,v,t,g,l]);return yM(b,w,w)}function vM(e){return br.useContext(h_)}function Ke(e,t){return gM(e,vM())}const _1=e=>{throw Error(e)};typeof window<"u"?br.useLayoutEffect:br.useEffect;const{useSyncExternalStore:yM}=v5,{useSyncExternalStoreWithSelector:rD}=mM,bM=(e,t)=>t?t.getState(e):e.getState(),h_=br.createContext(null),{Provider:iD}=h_,p_=["кот","собака","птица","рыба","корова","лошадь","свинья","утка","курица","петух","тигр","лев","слон","жираф","медведь","волк","лиса","еж","кролик","коала","панда","кенгуру","обезьяна","змея","лягушка","крокодил","черепаха","дельфин","акула","кит","осьминог","краб","пингвин","страус","фламинго","орел","сова","воробей","голубь","аист","сурикат","бегемот","носорог","антилопа","яблоко","груша","банан","апельсин","лимон","арбуз","дыня","виноград","вишня","клубника","малина","ежевика","морковь","картошка","лук","чеснок","капуста","огурец","помидор","перец","тыква","баклажан","гриб","хлеб","пицца","бургер","суп","торт","мороженое","шоколад","печенье","конфета","чай","кофе","сок","вода","молоко","стол","стул","кровать","шкаф","диван","лампа","телевизор","компьютер","телефон","часы","зеркало","окно","дверь","книга","тетрадь","ручка","карандаш","кисть","краска","бутылка","стакан","тарелка","вилка","ложка","нож","чайник","сумка","рюкзак","шапка","куртка","пальто","ботинки","носки","перчатки","зонт","очки","дерево","куст","трава","цветок","роза","подсолнух","ромашка","тюльпан","лес","гора","река","озеро","море","пляж","остров","пещера","облако","солнце","луна","звезда","дождь","снег","молния","радуга","ветер","волна","машина","поезд","самолет","корабль","лодка","велосипед","мотоцикл","автобус","троллейбус","трамвай","метро","такси","ракета","вертолет","танк","трактор","грузовик","катер","учитель","врач","повар","пожарный","полицейский","солдат","строитель","фермер","летчик","моряк","шофер","художник","музыкант","писатель","рыбак","спортсмен","танцор","актёр","дом","замок","школа","магазин","церковь","мост","дорога","парк","площадь","фонтан","статуя","флаг","карта","шар","кукла","мяч","пирамидка","машинка","самокат","скейт","качели","горка","песочница","робот","ракета","кот","собака","птица","рыба","корова","лошадь","свинья","утка","курица","петух","тигр","лев","слон","жираф","медведь","волк","лиса","еж","кролик","коала","панда","кенгуру","обезьяна","змея","лягушка","крокодил","черепаха","дельфин","акула","кит","осьминог","краб","пингвин","страус","фламинго","орел","сова","воробей","голубь","аист","сурикат","бегемот","носорог","антилопа","яблоко","груша","банан","апельсин","лимон","арбуз","дыня","виноград","вишня","клубника","малина","ежевика","морковь","картошка","лук","чеснок","капуста","огурец","помидор","перец","тыква","баклажан","гриб","хлеб","пицца","бургер","суп","торт","мороженое","шоколад","печенье","конфета","чай","кофе","сок","вода","молоко","стол","стул","кровать","шкаф","диван","лампа","телевизор","компьютер","телефон","часы","зеркало","окно","дверь","книга","тетрадь"],lr=600;function _m(e,t){let r,a=()=>{};e.watch(s=>{s!==r&&(a(),a=t(s),r=s)})}(()=>{const e=window.location.pathname,t=e.match(/\/scribble\/room\/([^\/]+)/);if(t)return t[1];if(e.endsWith("/words"))return"words";if(e.endsWith("/paintings"))return"paintings";const r=window.location.search.slice(1);if(r)return r;const a="/scribble/";if(e.startsWith(a)){const s=e.slice(a.length);if(s&&!s.includes("/"))return s}return""})();function wM(e){return e[Math.floor(Math.random()*e.length)]}function Eg(e){const t=[];for(;t.length<e;){const r=wM(p_);t.includes(r)||t.push(r)}return t}function xM(e,t,r){return Math.max(t,Math.min(e,r))}function zi(e){return Math.round(e*1e4)/1e4}function ko(e){return Math.round(e*100)/100}function jp(e,t){if(!e)throw new Error(t||"Assertion failed")}function Ks(e){return`${zi(e.x)},${zi(e.y)} `}function S1(e,t){return`${zi((e.x+t.x)/2)},${zi((e.y+t.y)/2)} `}function _M(){return window.location.pathname.includes("/scribble")?"/scribble/":"/"}function er(e){const t=_M();return e?`${t}${e}`:t.endsWith("/")?t.slice(0,-1):t}function m_(e,t){const r=SM(e.toLowerCase().trim(),t.toLowerCase().trim());return r===0?"revealed":r<=Math.ceil(e.length/4)?"almost":"none"}function SM(e,t){const r=e.length,a=t.length,s=Array(r+1).fill(null).map(()=>Array(a+1).fill(0));for(let l=0;l<=r;l++)s[l][0]=l;for(let l=0;l<=a;l++)s[0][l]=l;for(let l=1;l<=r;l++)for(let u=1;u<=a;u++){const d=e[l-1]===t[u-1]?0:1;s[l][u]=Math.min(s[l-1][u]+1,s[l][u-1]+1,s[l-1][u-1]+d)}return s[r][a]}const TM={buildTimestamp:parseInt(1765314980587)},kM={linear:e=>e},EM={simulatePressure:!1,smoothing:1,thinning:.1,streamline:0,easing:kM.linear},nl=[3,8,15,20,25],g_=["#111111","#34495e","#f6eee2","#ffffff","#8b4513","#fa3224","#ffa729","#ffd129","#2ecc71","#3498db","#9b59b6","#ff69b4"],CM="ccgudew",AM="hf1ec1k",MM="t1chi7ru",OM="c1xprte0",NM="f13fsgpf";function ar({children:e}){const t=Date.now()-TM.buildTimestamp;return O.jsxs("div",{className:CM,children:[O.jsx("header",{className:AM,children:O.jsx(ua,{href:er(""),children:O.jsx("h1",{className:MM,children:"Scribble"})})}),O.jsx("main",{className:OM,children:e}),O.jsxs("footer",{className:NM,children:[O.jsx(ua,{href:er(""),children:"Главная"}),O.jsx(ua,{href:er("all-rooms"),children:"Все комнаты"}),O.jsx(ua,{href:er("words"),children:"Слова"}),O.jsx(ua,{href:er("paintings"),children:"Картины"}),O.jsxs("p",{children:["build ",(t/(1e3*60)).toFixed(1)," min ago"]})]})]})}const zM="r6f0ecm";function Sm({label:e,value:t,onChange:r,maxLen:a,type:s="text",placeholder:l}){return O.jsxs("div",{className:zM,children:[e&&O.jsx("label",{children:e}),O.jsx("input",{maxLength:a,type:s,value:t,onChange:u=>r(u.target.value),placeholder:l})]})}const jM="r1cb9caz";function v_({children:e,onClick:t,className:r,type:a}){return O.jsx("button",{type:a||"button",className:`${jM} ${r||""}`,onClick:t,children:e})}function Pt(e){if(typeof e=="number")return(Math.abs(e*2654435761)>>>0).toString(16);if(typeof e=="boolean")return e?"1":"0";if(e===null)return"null";if(e===void 0)return"undefined";if(typeof e=="string"){let t=2166136261;for(let r=0;r<e.length;r++)t^=e.charCodeAt(r),t+=(t<<1)+(t<<4)+(t<<7)+(t<<8)+(t<<24),t=t>>>0;return t.toString(16)}if(Array.isArray(e)){let t=2166136261;for(let r=0;r<e.length;r++){t^=(r+1)*2654435761;const a=Pt(e[r]);for(let s=0;s<a.length;s++)t^=a.charCodeAt(s),t*=16777619,t=t>>>0}return t.toString(16)}if(typeof e=="object"){let t=2166136261;const r=Object.keys(e).sort();for(let a=0;a<r.length;a++){const s=r[a],l=Pt(s);t^=parseInt(l,16),t*=16777619,t=t>>>0;const u=Pt(e[s]);t^=parseInt(u,16),t*=16777619,t=t>>>0}return t.toString(16)}return Pt(String(e))}const bt={Remove:"remove",Replace:"replace",Add:"add"},y_=Symbol.for("__MUTATIVE_PROXY_DRAFT__"),DM=Symbol("__MUTATIVE_RAW_RETURN_SYMBOL__"),Du=Symbol.iterator,Cn={mutable:"mutable",immutable:"immutable"},Cg={};function dl(e,t){return e instanceof Map?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function T1(e,t){if(t in e){let r=Reflect.getPrototypeOf(e);for(;r;){const a=Reflect.getOwnPropertyDescriptor(r,t);if(a)return a;r=Reflect.getPrototypeOf(r)}}}function Ag(e){return Object.getPrototypeOf(e)===Set.prototype}function Mg(e){return Object.getPrototypeOf(e)===Map.prototype}function xn(e){var t;return(t=e.copy)!==null&&t!==void 0?t:e.original}function Li(e){return!!ze(e)}function ze(e){return typeof e!="object"?null:e==null?void 0:e[y_]}function Og(e){var t;const r=ze(e);return r?(t=r.copy)!==null&&t!==void 0?t:r.original:e}function cr(e,t){if(!e||typeof e!="object")return!1;let r;return Object.getPrototypeOf(e)===Object.prototype||Array.isArray(e)||e instanceof Map||e instanceof Set||!!(t!=null&&t.mark)&&((r=t.mark(e,Cn))===Cn.immutable||typeof r=="function")}function b_(e,t=[]){if(Object.hasOwnProperty.call(e,"key")){const r=e.parent.copy,a=ze(ei(r,e.key));if(a!==null&&(a==null?void 0:a.original)!==e.original)return null;const s=e.parent.type===3,l=s?Array.from(e.parent.setMap.keys()).indexOf(e.key):e.key;if(!(s&&r.size>l||dl(r,l)))return null;t.push(l)}if(e.parent)return b_(e.parent,t);t.reverse();try{RM(e.copy,t)}catch{return null}return t}function Aa(e){return Array.isArray(e)?1:e instanceof Map?2:e instanceof Set?3:0}function ei(e,t){return Aa(e)===2?e.get(t):e[t]}function Rl(e,t,r){Aa(e)===2?e.set(t,r):e[t]=r}function Dp(e,t){const r=ze(e);return(r?xn(r):e)[t]}function Jr(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Tm(e){if(e)for(;e.finalities.revoke.length>0;)e.finalities.revoke.pop()()}function ga(e,t){return t?e:[""].concat(e).map(r=>{const a=`${r}`;return a.indexOf("/")===-1&&a.indexOf("~")===-1?a:a.replace(/~/g,"~0").replace(/\//g,"~1")}).join("/")}function RM(e,t){for(let r=0;r<t.length-1;r+=1){const a=t[r];if(e=ei(Aa(e)===3?Array.from(e):e,a),typeof e!="object")throw new Error(`Cannot resolve patch at '${t.join("/")}'.`)}return e}function UM(e){const t=Object.create(Object.getPrototypeOf(e));return Reflect.ownKeys(e).forEach(r=>{let a=Reflect.getOwnPropertyDescriptor(e,r);if(a.enumerable&&a.configurable&&a.writable){t[r]=e[r];return}a.writable||(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(a={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[r]}),Reflect.defineProperty(t,r,a)}),t}const $M=Object.prototype.propertyIsEnumerable;function w_(e,t){let r;if(Array.isArray(e))return Array.prototype.concat.call(e);if(e instanceof Set){if(!Ag(e)){const a=Object.getPrototypeOf(e).constructor;return new a(e.values())}return Set.prototype.difference?Set.prototype.difference.call(e,new Set):new Set(e.values())}else if(e instanceof Map){if(!Mg(e)){const a=Object.getPrototypeOf(e).constructor;return new a(e)}return new Map(e)}else if(t!=null&&t.mark&&(r=t.mark(e,Cn),r!==void 0)&&r!==Cn.mutable){if(r===Cn.immutable)return UM(e);if(typeof r=="function"){if(t.enablePatches||t.enableAutoFreeze)throw new Error("You can't use mark and patches or auto freeze together.");return r()}throw new Error(`Unsupported mark result: ${r}`)}else if(typeof e=="object"&&Object.getPrototypeOf(e)===Object.prototype){const a={};return Object.keys(e).forEach(s=>{a[s]=e[s]}),Object.getOwnPropertySymbols(e).forEach(s=>{$M.call(e,s)&&(a[s]=e[s])}),a}else throw new Error("Please check mark() to ensure that it is a stable marker draftable function.")}function Vt(e){e.copy||(e.copy=w_(e.original,e.options))}function rl(e){if(!cr(e))return Og(e);if(Array.isArray(e))return e.map(rl);if(e instanceof Map){const r=Array.from(e.entries()).map(([a,s])=>[a,rl(s)]);if(!Mg(e)){const a=Object.getPrototypeOf(e).constructor;return new a(r)}return new Map(r)}if(e instanceof Set){const r=Array.from(e).map(rl);if(!Ag(e)){const a=Object.getPrototypeOf(e).constructor;return new a(r)}return new Set(r)}const t=Object.create(Object.getPrototypeOf(e));for(const r in e)t[r]=rl(e[r]);return t}function Ru(e){return Li(e)?rl(e):e}function _r(e){var t;e.assignedMap=(t=e.assignedMap)!==null&&t!==void 0?t:new Map,e.operated||(e.operated=!0,e.parent&&_r(e.parent))}function k1(){throw new Error("Cannot modify frozen object")}function xo(e,t,r,a,s){{r=r??new WeakMap,a=a??[],s=s??[];const u=r.has(e)?r.get(e):e;if(a.length>0){const d=a.indexOf(u);if(u&&typeof u=="object"&&d!==-1)throw a[0]===u?new Error("Forbids circular reference"):new Error(`Forbids circular reference: ~/${s.slice(0,d).map((f,h)=>{if(typeof f=="symbol")return`[${f.toString()}]`;const v=a[h];return typeof f=="object"&&(v instanceof Map||v instanceof Set)?Array.from(v.keys()).indexOf(f):f}).join("/")}`);a.push(u),s.push(t)}else a.push(u)}if(Object.isFrozen(e)||Li(e)){a.pop(),s.pop();return}switch(Aa(e)){case 2:for(const[d,f]of e)xo(d,d,r,a,s),xo(f,d,r,a,s);e.set=e.clear=e.delete=k1;break;case 3:for(const d of e)xo(d,d,r,a,s);e.add=e.clear=e.delete=k1;break;case 1:Object.freeze(e);let u=0;for(const d of e)xo(d,u,r,a,s),u+=1;break;default:Object.freeze(e),Object.keys(e).forEach(d=>{const f=e[d];xo(f,d,r,a,s)})}a.pop(),s.pop()}function Ng(e,t){const r=Aa(e);if(r===0)Reflect.ownKeys(e).forEach(a=>{t(a,e[a],e)});else if(r===1){let a=0;for(const s of e)t(a,s,e),a+=1}else e.forEach((a,s)=>t(s,a,e))}function x_(e,t,r){if(Li(e)||!cr(e,r)||t.has(e)||Object.isFrozen(e))return;const a=e instanceof Set,s=a?new Map:void 0;if(t.add(e),Ng(e,(l,u)=>{var d;if(Li(u)){const f=ze(u);Vt(f);const h=!((d=f.assignedMap)===null||d===void 0)&&d.size||f.operated?f.copy:f.original;Rl(a?s:e,l,h)}else x_(u,t,r)}),s){const l=e,u=Array.from(l);l.clear(),u.forEach(d=>{l.add(s.has(d)?s.get(d):d)})}}function LM(e,t){const r=e.type===3?e.setMap:e.copy;e.finalities.revoke.length>1&&e.assignedMap.get(t)&&r&&x_(ei(r,t),e.finalities.handledSet,e.options)}function km(e){e.type===3&&e.copy&&(e.copy.clear(),e.setMap.forEach(t=>{e.copy.add(Og(t))}))}function Em(e,t,r,a){if(e.operated&&e.assignedMap&&e.assignedMap.size>0&&!e.finalized){if(r&&a){const l=b_(e);l&&t(e,l,r,a)}e.finalized=!0}}function zg(e,t,r,a){const s=ze(r);s&&(s.callbacks||(s.callbacks=[]),s.callbacks.push((l,u)=>{var d;const f=e.type===3?e.setMap:e.copy;if(Jr(ei(f,t),r)){let h=s.original;s.copy&&(h=s.copy),km(e),Em(e,a,l,u),e.options.enableAutoFreeze&&(e.options.updatedValues=(d=e.options.updatedValues)!==null&&d!==void 0?d:new WeakMap,e.options.updatedValues.set(h,s.original)),Rl(f,t,h)}}),e.options.enableAutoFreeze&&s.finalities!==e.finalities&&(e.options.enableAutoFreeze=!1)),cr(r,e.options)&&e.finalities.draft.push(()=>{const l=e.type===3?e.setMap:e.copy;Jr(ei(l,t),r)&&LM(e,t)})}function HM(e,t,r,a,s){let{original:l,assignedMap:u,options:d}=e,f=e.copy;f.length<l.length&&([l,f]=[f,l],[r,a]=[a,r]);for(let h=0;h<l.length;h+=1)if(u.get(h.toString())&&f[h]!==l[h]){const v=t.concat([h]),g=ga(v,s);r.push({op:bt.Replace,path:g,value:Ru(f[h])}),a.push({op:bt.Replace,path:g,value:Ru(l[h])})}for(let h=l.length;h<f.length;h+=1){const v=t.concat([h]),g=ga(v,s);r.push({op:bt.Add,path:g,value:Ru(f[h])})}if(l.length<f.length){const{arrayLengthAssignment:h=!0}=d.enablePatches;if(h){const v=t.concat(["length"]),g=ga(v,s);a.push({op:bt.Replace,path:g,value:l.length})}else for(let v=f.length;l.length<v;v-=1){const g=t.concat([v-1]),b=ga(g,s);a.push({op:bt.Remove,path:b})}}}function IM({original:e,copy:t,assignedMap:r},a,s,l,u){r.forEach((d,f)=>{const h=ei(e,f),v=Ru(ei(t,f)),g=d?dl(e,f)?bt.Replace:bt.Add:bt.Remove;if(Jr(h,v)&&g===bt.Replace)return;const b=a.concat(f),w=ga(b,u);s.push(g===bt.Remove?{op:g,path:w}:{op:g,path:w,value:v}),l.push(g===bt.Add?{op:bt.Remove,path:w}:g===bt.Remove?{op:bt.Add,path:w,value:h}:{op:bt.Replace,path:w,value:h})})}function qM({original:e,copy:t},r,a,s,l){let u=0;e.forEach(d=>{if(!t.has(d)){const f=r.concat([u]),h=ga(f,l);a.push({op:bt.Remove,path:h,value:d}),s.unshift({op:bt.Add,path:h,value:d})}u+=1}),u=0,t.forEach(d=>{if(!e.has(d)){const f=r.concat([u]),h=ga(f,l);a.push({op:bt.Add,path:h,value:d}),s.unshift({op:bt.Remove,path:h,value:d})}u+=1})}function El(e,t,r,a){const{pathAsArray:s=!0}=e.options.enablePatches;switch(e.type){case 0:case 2:return IM(e,t,r,a,s);case 1:return HM(e,t,r,a,s);case 3:return qM(e,t,r,a,s)}}const ed=(e,t,r=!1)=>{if(typeof e=="object"&&e!==null&&(!cr(e,t)||r))throw new Error("Strict mode: Mutable data cannot be accessed directly, please use 'unsafe(callback)' wrap.")},Cm={get size(){return xn(ze(this)).size},has(e){return xn(ze(this)).has(e)},set(e,t){const r=ze(this),a=xn(r);return(!a.has(e)||!Jr(a.get(e),t))&&(Vt(r),_r(r),r.assignedMap.set(e,!0),r.copy.set(e,t),zg(r,e,t,El)),this},delete(e){if(!this.has(e))return!1;const t=ze(this);return Vt(t),_r(t),t.original.has(e)?t.assignedMap.set(e,!1):t.assignedMap.delete(e),t.copy.delete(e),!0},clear(){const e=ze(this);if(this.size){Vt(e),_r(e),e.assignedMap=new Map;for(const[t]of e.original)e.assignedMap.set(t,!1);e.copy.clear()}},forEach(e,t){const r=ze(this);xn(r).forEach((a,s)=>{e.call(t,this.get(s),s,this)})},get(e){var t,r;const a=ze(this),s=xn(a).get(e),l=((r=(t=a.options).mark)===null||r===void 0?void 0:r.call(t,s,Cn))===Cn.mutable;if(a.options.strict&&ed(s,a.options,l),l||a.finalized||!cr(s,a.options)||s!==a.original.get(e))return s;const u=Cg.createDraft({original:s,parentDraft:a,key:e,finalities:a.finalities,options:a.options});return Vt(a),a.copy.set(e,u),u},keys(){return xn(ze(this)).keys()},values(){const e=this.keys();return{[Du]:()=>this.values(),next:()=>{const t=e.next();return t.done?t:{done:!1,value:this.get(t.value)}}}},entries(){const e=this.keys();return{[Du]:()=>this.entries(),next:()=>{const t=e.next();if(t.done)return t;const r=this.get(t.value);return{done:!1,value:[t.value,r]}}}},[Du](){return this.entries()}},FM=Reflect.ownKeys(Cm),E1=(e,t,{isValuesIterator:r})=>()=>{var a,s;const l=t.next();if(l.done)return l;const u=l.value;let d=e.setMap.get(u);const f=ze(d),h=((s=(a=e.options).mark)===null||s===void 0?void 0:s.call(a,d,Cn))===Cn.mutable;if(e.options.strict&&ed(u,e.options,h),!h&&!f&&cr(u,e.options)&&!e.finalized&&e.original.has(u)){const v=Cg.createDraft({original:u,parentDraft:e,key:u,finalities:e.finalities,options:e.options});e.setMap.set(u,v),d=v}else f&&(d=f.proxy);return{done:!1,value:r?d:[d,d]}},td={get size(){return ze(this).setMap.size},has(e){const t=ze(this);if(t.setMap.has(e))return!0;Vt(t);const r=ze(e);return!!(r&&t.setMap.has(r.original))},add(e){const t=ze(this);return this.has(e)||(Vt(t),_r(t),t.assignedMap.set(e,!0),t.setMap.set(e,e),zg(t,e,e,El)),this},delete(e){if(!this.has(e))return!1;const t=ze(this);Vt(t),_r(t);const r=ze(e);return r&&t.setMap.has(r.original)?(t.assignedMap.set(r.original,!1),t.setMap.delete(r.original)):(!r&&t.setMap.has(e)?t.assignedMap.set(e,!1):t.assignedMap.delete(e),t.setMap.delete(e))},clear(){if(!this.size)return;const e=ze(this);Vt(e),_r(e);for(const t of e.original)e.assignedMap.set(t,!1);e.setMap.clear()},values(){const e=ze(this);Vt(e);const t=e.setMap.keys();return{[Symbol.iterator]:()=>this.values(),next:E1(e,t,{isValuesIterator:!0})}},entries(){const e=ze(this);Vt(e);const t=e.setMap.keys();return{[Symbol.iterator]:()=>this.entries(),next:E1(e,t,{isValuesIterator:!1})}},keys(){return this.values()},[Du](){return this.values()},forEach(e,t){const r=this.values();let a=r.next();for(;!a.done;)e.call(t,a.value,a.value,this),a=r.next()}};Set.prototype.difference&&Object.assign(td,{intersection(e){return Set.prototype.intersection.call(new Set(this.values()),e)},union(e){return Set.prototype.union.call(new Set(this.values()),e)},difference(e){return Set.prototype.difference.call(new Set(this.values()),e)},symmetricDifference(e){return Set.prototype.symmetricDifference.call(new Set(this.values()),e)},isSubsetOf(e){return Set.prototype.isSubsetOf.call(new Set(this.values()),e)},isSupersetOf(e){return Set.prototype.isSupersetOf.call(new Set(this.values()),e)},isDisjointFrom(e){return Set.prototype.isDisjointFrom.call(new Set(this.values()),e)}});const BM=Reflect.ownKeys(td),__={get(e,t,r){var a,s;const l=(a=e.copy)===null||a===void 0?void 0:a[t];if(l&&e.finalities.draftsCache.has(l))return l;if(t===y_)return e;let u;if(e.options.mark){const h=t==="size"&&(e.original instanceof Map||e.original instanceof Set)?Reflect.get(e.original,t):Reflect.get(e.original,t,r);if(u=e.options.mark(h,Cn),u===Cn.mutable)return e.options.strict&&ed(h,e.options,!0),h}const d=xn(e);if(d instanceof Map&&FM.includes(t))return t==="size"?Object.getOwnPropertyDescriptor(Cm,"size").get.call(e.proxy):Cm[t].bind(e.proxy);if(d instanceof Set&&BM.includes(t))return t==="size"?Object.getOwnPropertyDescriptor(td,"size").get.call(e.proxy):td[t].bind(e.proxy);if(!dl(d,t)){const h=T1(d,t);return h?"value"in h?h.value:(s=h.get)===null||s===void 0?void 0:s.call(e.proxy):void 0}const f=d[t];if(e.options.strict&&ed(f,e.options),e.finalized||!cr(f,e.options))return f;if(f===Dp(e.original,t)){if(Vt(e),e.copy[t]=jg({original:e.original[t],parentDraft:e,key:e.type===1?Number(t):t,finalities:e.finalities,options:e.options}),typeof u=="function"){const h=ze(e.copy[t]);return Vt(h),_r(h),h.copy}return e.copy[t]}return Li(f)&&e.finalities.draftsCache.add(f),f},set(e,t,r){var a;if(e.type===3||e.type===2)throw new Error("Map/Set draft does not support any property assignment.");let s;if(e.type===1&&t!=="length"&&!(Number.isInteger(s=Number(t))&&s>=0&&(t===0||s===0||String(s)===String(t))))throw new Error("Only supports setting array indices and the 'length' property.");const l=T1(xn(e),t);if(l!=null&&l.set)return l.set.call(e.proxy,r),!0;const u=Dp(xn(e),t),d=ze(u);return d&&Jr(d.original,r)?(e.copy[t]=r,e.assignedMap=(a=e.assignedMap)!==null&&a!==void 0?a:new Map,e.assignedMap.set(t,!1),!0):(Jr(r,u)&&(r!==void 0||dl(e.original,t))||(Vt(e),_r(e),dl(e.original,t)&&Jr(r,e.original[t])?e.assignedMap.delete(t):e.assignedMap.set(t,!0),e.copy[t]=r,zg(e,t,r,El)),!0)},has(e,t){return t in xn(e)},ownKeys(e){return Reflect.ownKeys(xn(e))},getOwnPropertyDescriptor(e,t){const r=xn(e),a=Reflect.getOwnPropertyDescriptor(r,t);return a&&{writable:!0,configurable:e.type!==1||t!=="length",enumerable:a.enumerable,value:r[t]}},getPrototypeOf(e){return Reflect.getPrototypeOf(e.original)},setPrototypeOf(){throw new Error("Cannot call 'setPrototypeOf()' on drafts")},defineProperty(){throw new Error("Cannot call 'defineProperty()' on drafts")},deleteProperty(e,t){var r;return e.type===1?__.set.call(this,e,t,void 0,e.proxy):(Dp(e.original,t)!==void 0||t in e.original?(Vt(e),_r(e),e.assignedMap.set(t,!1)):(e.assignedMap=(r=e.assignedMap)!==null&&r!==void 0?r:new Map,e.assignedMap.delete(t)),e.copy&&delete e.copy[t],!0)}};function jg(e){const{original:t,parentDraft:r,key:a,finalities:s,options:l}=e,u=Aa(t),d={type:u,finalized:!1,parent:r,original:t,copy:null,proxy:null,finalities:s,options:l,setMap:u===3?new Map(t.entries()):void 0};(a||"key"in e)&&(d.key=a);const{proxy:f,revoke:h}=Proxy.revocable(u===1?Object.assign([],d):d,__);if(s.revoke.push(h),d.proxy=f,r){const v=r;v.finalities.draft.push((g,b)=>{var w,_;const T=ze(f);let k=v.type===3?v.setMap:v.copy;const S=ei(k,a),E=ze(S);if(E){let M=E.original;E.operated&&(M=Og(S)),km(E),Em(E,El,g,b),v.options.enableAutoFreeze&&(v.options.updatedValues=(w=v.options.updatedValues)!==null&&w!==void 0?w:new WeakMap,v.options.updatedValues.set(M,E.original)),Rl(k,a,M)}(_=T.callbacks)===null||_===void 0||_.forEach(M=>{M(g,b)})})}else{const v=ze(f);v.finalities.draft.push((g,b)=>{km(v),Em(v,El,g,b)})}return f}Cg.createDraft=jg;function PM(e,t,r,a,s){var l;const u=ze(e),d=(l=u==null?void 0:u.original)!==null&&l!==void 0?l:e,f=!!t.length;if(u!=null&&u.operated)for(;u.finalities.draft.length>0;)u.finalities.draft.pop()(r,a);const h=f?t[0]:u?u.operated?u.copy:u.original:e;return u&&Tm(u),s&&xo(h,h,u==null?void 0:u.options.updatedValues),[h,r&&f?[{op:bt.Replace,path:[],value:t[0]}]:r,a&&f?[{op:bt.Replace,path:[],value:d}]:a]}function YM(e,t){var r;const a={draft:[],revoke:[],handledSet:new WeakSet,draftsCache:new WeakSet};let s,l;t.enablePatches&&(s=[],l=[]);const d=((r=t.mark)===null||r===void 0?void 0:r.call(t,e,Cn))===Cn.mutable||!cr(e,t)?e:jg({original:e,parentDraft:null,finalities:a,options:t});return[d,(f=[])=>{const[h,v,g]=PM(d,f,s,l,t.enableAutoFreeze);return t.enablePatches?[h,v,g]:h}]}function Am(e){const{rootDraft:t,value:r,useRawReturn:a=!1,isRoot:s=!0}=e;Ng(r,(l,u,d)=>{const f=ze(u);if(f&&t&&f.finalities===t.finalities){e.isContainDraft=!0;const h=f.original;if(d instanceof Set){const v=Array.from(d);d.clear(),v.forEach(g=>d.add(l===g?h:g))}else Rl(d,l,h)}else typeof u=="object"&&u!==null&&(e.value=u,e.isRoot=!1,Am(e))}),s&&(e.isContainDraft||console.warn("The return value does not contain any draft, please use 'rawReturn()' to wrap the return value to improve performance."),a&&console.warn("The return value contains drafts, please don't use 'rawReturn()' to wrap the return value."))}function S_(e){var t;const r=ze(e);if(!cr(e,r==null?void 0:r.options))return e;const a=Aa(e);if(r&&!r.operated)return r.original;let s;function l(){s=a===2?Mg(e)?new Map(e):new(Object.getPrototypeOf(e)).constructor(e):a===3?Array.from(r.setMap.values()):w_(e,r==null?void 0:r.options)}if(r){r.finalized=!0;try{l()}finally{r.finalized=!1}}else s=e;if(Ng(s,(u,d)=>{if(r&&Jr(ei(r.original,u),d))return;const f=S_(d);f!==d&&(s===e&&l(),Rl(s,u,f))}),a===3){const u=(t=r==null?void 0:r.original)!==null&&t!==void 0?t:s;return Ag(u)?new Set(s):new(Object.getPrototypeOf(u)).constructor(s)}return s}function C1(e){if(!Li(e))throw new Error(`current() is only used for Draft, parameter: ${e}`);return S_(e)}const XM=e=>function t(r,a,s){var l,u,d;if(typeof r=="function"&&typeof a!="function")return function(R,...F){return t(R,I=>r.call(this,I,...F),a)};const f=r,h=a;let v=s;if(typeof a!="function"&&(v=a),v!==void 0&&Object.prototype.toString.call(v)!=="[object Object]")throw new Error(`Invalid options: ${v}, 'options' should be an object.`);v=Object.assign(Object.assign({},e),v);const g=Li(f)?C1(f):f,b=Array.isArray(v.mark)?((R,F)=>{for(const I of v.mark){if(typeof I!="function")throw new Error(`Invalid mark: ${I}, 'mark' should be a function.`);const J=I(R,F);if(J)return J}}):v.mark,w=(l=v.enablePatches)!==null&&l!==void 0?l:!1,_=(u=v.strict)!==null&&u!==void 0?u:!1,k={enableAutoFreeze:(d=v.enableAutoFreeze)!==null&&d!==void 0?d:!1,mark:b,strict:_,enablePatches:w};if(!cr(g,k)&&typeof g=="object"&&g!==null)throw new Error("Invalid base state: create() only supports plain objects, arrays, Set, Map or using mark() to mark the state as immutable.");const[S,E]=YM(g,k);if(typeof a!="function"){if(!cr(g,k))throw new Error("Invalid base state: create() only supports plain objects, arrays, Set, Map or using mark() to mark the state as immutable.");return[S,E]}let M;try{M=h(S)}catch(R){throw Tm(ze(S)),R}const z=R=>{const F=ze(S);if(!Li(R)){if(R!==void 0&&!Jr(R,S)&&(F!=null&&F.operated))throw new Error("Either the value is returned as a new non-draft value, or only the draft is modified without returning any value.");const J=R==null?void 0:R[DM];if(J){const ne=J[0];return k.strict&&typeof R=="object"&&R!==null&&Am({rootDraft:F,value:R,useRawReturn:!0}),E([ne])}if(R!==void 0)return typeof R=="object"&&R!==null&&Am({rootDraft:F,value:R}),E([R])}if(R===S||R===void 0)return E([]);const I=ze(R);if(k===I.options){if(I.operated)throw new Error("Cannot return a modified child draft.");return E([C1(R)])}return E([R])};return M instanceof Promise?M.then(z,R=>{throw Tm(ze(S)),R}):z(M)},nd=XM();Object.prototype.constructor.toString();function T_(e,t){const r=Object.keys(e),a=Object.keys(t);return r.length===a.length&&Object.keys(e).every(s=>t.hasOwnProperty(s))}function A1(e,t){return Object.keys(e).length===Object.keys(t).length&&Object.keys(e).every(r=>t.hasOwnProperty(r)&&e[r]===t[r])}function Uu(e,t){return typeof e!="object"||typeof t!="object"||e===null||t===null?e===t:T_(e,t)?Object.keys(e).every(r=>Uu(e[r],t[r])):!1}function Dg(e){if(!il(e))return e;const t={};for(const[r,a]of Object.entries(e))a!==void 0&&(t[r]=a);return t}function k_(e,t){if(!il(e)||!il(t))return t;const r=Object.assign({},e);for(const a of Object.keys(t)){if(t[a]===void 0)continue;if(t[a]===null){delete r[a];continue}const s=il(e[a])&&il(t[a]);r[a]=s?k_(e[a],t[a]):t[a]}return r}function il(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function GM(e,t,r){if(!e||t.length===0)return;let a=e||{};for(let l=0;l<t.length-1;l++){const u=t[l];(!(u in a)||typeof a[u]!="object")&&(a[u]=typeof t[l+1]=="number"?[]:{}),a=a[u]}const s=t[t.length-1];Array.isArray(a)&&typeof s=="number"?a.splice(s,0,r):a[s]=r}function M1(e,t,r){if(!e||t.length===0)return;let a=e||{};for(let s=0;s<t.length-1;s++){const l=t[s];(!(l in a)||typeof a[l]!="object")&&(a[l]=typeof t[s+1]=="number"?[]:{}),a=a[l]}a[t[t.length-1]]=r}function E_(e,t){if(!e||t.length===0)return;const[r,...a]=t;if(r in e){if(a.length===0){Array.isArray(e)?e.splice(r,1):delete e[r];return}E_(e[r],a),VM(e[r])&&delete e[r]}}function VM(e){return e&&Object.keys(e).length===0}const O1=/ZULU|YEKT|YEKST|YAPT|YAKT|YAKST|XJT|WGT|WGST|WFT|WETDST|WET|WDT|WAT|WAST|WAKT|WADT|VUT|VOLT|VLAT|VLAST|VET|UZT|UZST|UYT|UYST|UTC|UT|ULAT|ULAST|UCT|TVT|TRUT|TOT|TMT|TKT|TJT|TFT|TAHT|SGT|SCT|SAST|SADT|RET|PYT|PYST|PWT|PST|PONT|PMST|PMDT|PKT|PKST|PHT|PGT|PETT|PETST|PET|PDT|OMST|OMSST|NZT|NZST|NZDT|NUT|NST|NPT|NOVT|NOVST|NFT|NDT|MYT|MVT|MUT|MUST|MST|MSK|MSD|MPT|MMT|MHT|MEZ|METDST|MET|MESZ|MEST|MDT|MAWT|MART|MAGT|MAGST|LKT|LINT|LIGT|LHST|LHDT|KST|KRAT|KRAST|KOST|KGT|KGST|KDT|JST|JAYT|IST|IRT|IRKT|IRKST|IOT|IDT|ICT|HST|HKT|GYT|GMT|GILT|GFT|GET|GEST|GAMT|GALT|FNT|FNST|FKT|FKST|FJT|FJST|FET|EST|EGT|EGST|EETDST|EET|EEST|EDT|EAT|EAST|EASST|DDUT|DAVT|CXT|CST|COT|CLT|CLST|CKT|CHUT|CHAST|CHADT|CETDST|CET|CEST|CDT|CCT|CAST|CADT|BTT|BST|BRT|BRST|BRA|BOT|BORT|BNT|BDT|BDST|AZT|AZST|AZOT|AZOST|AWST|AWSST|AST|ART|ARST|ANAT|ANAST|AMT|AMST|ALMT|ALMST|AKST|AKDT|AFT|AEST|AESST|AEDT|ADT|ACWST|ACT|ACST|ACSST|ACDT$/,QM={ZULU:0,YEKT:18e3,YEKST:21600,YAPT:36e3,YAKT:32400,YAKST:32400,XJT:21600,WGT:-10800,WGST:-7200,WFT:43200,WETDST:3600,WET:0,WDT:32400,WAT:3600,WAST:25200,WAKT:43200,WADT:28800,VUT:39600,VOLT:10800,VLAT:36e3,VLAST:36e3,VET:-14400,UZT:18e3,UZST:21600,UYT:-10800,UYST:-7200,UTC:0,UT:0,ULAT:28800,ULAST:32400,UCT:0,TVT:43200,TRUT:36e3,TOT:46800,TMT:18e3,TKT:46800,TJT:18e3,TFT:18e3,TAHT:-36e3,SGT:28800,SCT:14400,SAST:7200,SADT:37800,RET:14400,PYT:-14400,PYST:-10800,PWT:32400,PST:-28800,PONT:39600,PMST:-10800,PMDT:-7200,PKT:18e3,PKST:21600,PHT:28800,PGT:36e3,PETT:43200,PETST:43200,PET:-18e3,PDT:-25200,OMST:21600,OMSST:21600,NZT:43200,NZST:43200,NZDT:46800,NUT:-39600,NST:-12600,NPT:20700,NOVT:25200,NOVST:25200,NFT:-12600,NDT:-9e3,MYT:28800,MVT:18e3,MUT:14400,MUST:18e3,MST:-25200,MSK:10800,MSD:14400,MPT:36e3,MMT:23400,MHT:43200,MEZ:3600,METDST:7200,MET:3600,MESZ:7200,MEST:7200,MDT:-21600,MAWT:18e3,MART:-34200,MAGT:39600,MAGST:39600,LKT:19800,LINT:50400,LIGT:36e3,LHST:37800,LHDT:37800,KST:32400,KRAT:25200,KRAST:25200,KOST:39600,KGT:21600,KGST:21600,KDT:36e3,JST:32400,JAYT:32400,IST:7200,IRT:12600,IRKT:28800,IRKST:28800,IOT:21600,IDT:10800,ICT:25200,HST:-36e3,HKT:28800,GYT:-14400,GMT:0,GILT:43200,GFT:-10800,GET:14400,GEST:14400,GAMT:-32400,GALT:-21600,FNT:-7200,FNST:-3600,FKT:-10800,FKST:-10800,FJT:43200,FJST:46800,FET:10800,EST:-18e3,EGT:-3600,EGST:0,EETDST:10800,EET:7200,EEST:10800,EDT:-14400,EAT:10800,EAST:-21600,EASST:-21600,DDUT:36e3,DAVT:25200,CXT:25200,CST:-21600,COT:-18e3,CLT:-14400,CLST:-10800,CKT:-36e3,CHUT:36e3,CHAST:45900,CHADT:49500,CETDST:7200,CET:3600,CEST:7200,CDT:-18e3,CCT:28800,CAST:34200,CADT:37800,BTT:21600,BST:3600,BRT:-10800,BRST:-7200,BRA:-10800,BOT:-14400,BORT:28800,BNT:28800,BDT:21600,BDST:7200,AZT:14400,AZST:14400,AZOT:-3600,AZOST:0,AWST:28800,AWSST:32400,AST:-14400,ART:-10800,ARST:-10800,ANAT:43200,ANAST:43200,AMT:-14400,AMST:14400,ALMT:21600,ALMST:25200,AKST:-32400,AKDT:-28800,AFT:16200,AEST:36e3,AESST:39600,AEDT:39600,ADT:-10800,ACWST:31500,ACT:-18e3,ACST:34200,ACSST:37800,ACDT:37800};function KM(e){return new Date(e)}function WM(e){return new Date(e+"Z")}const ZM=/^(\d+)[\./-](\d+)[\./-](\d+)$/;function JM(e){const t=e.match(ZM);if(!t)return null;const[r,a,s,l]=t;return a<=0||s<=0||l<=0?null:a>999?new Date(Date.UTC(a,s-1,l,0,0,0,0)):new Date(Date.UTC(l,a-1,s,0,0,0,0))}function eO(e){const[t,r]=e.split(" ");return new Date(t+"T"+r+"Z")}function tO(e){const[t,r]=e.split(" ");return new Date(t+"T"+r+"Z")}function nO(e){return new Date(e)}function rO(e){const t=/^(\w{3}) (\w{3}) (\d{2}) (\d{4})$/;if(!e.match(t))throw new Error(`Unable to parse \`${e}\` as a date.`);const a=new Date(e+" UTC");return new Date(Date.UTC(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate(),0,0,0,0))}function iO(e){const t=/^(.+T.+)([+-])(\d{2})$/,r=e.match(t);if(r){const[,a,s,l]=r,u=`${a}${s}${l}:00`;return new Date(u)}return null}function aO(e){const[t,r]=e.split(", "),[a,s,l]=t.split("/").map(Number),u=r.match(/(\d{1,2}):(\d{2}):(\d{2}) (AM|PM)/);if(!u)throw new Error(`Unable to parse time from: ${e}`);let[,d,f,h,v]=u;return d=Number(d),f=Number(f),h=Number(h),v==="PM"&&d!==12?d+=12:v==="AM"&&d===12&&(d=0),new Date(Date.UTC(l,a-1,s,d,f,h))}function oO(e){switch(e){case"epoch":return new Date(0);case"infinity":case"-infinity":case"today":case"tomorrow":case"yesterday":return null}}function sO(e){const t=e.match(O1);if(!t)return null;const[r]=t,a=QM[r],s=new Date(e.replace(O1,"Z"));return new Date(s.getTime()-a*1e3)}const lO=[JM,tO,rO,aO,nO,WM,iO,eO,KM,oO,sO];function cO(e,t){try{const r=e(t);return r instanceof Date&&!isNaN(r.getTime())?r:null}catch{return null}}function Mm(e){for(const t of lO){const r=cO(t,e);if(r)return r}return null}function uO(e){try{const t=JSON.parse(e);return typeof t=="string"?Mm(t):null}catch{return null}}function kd(e){if(e!==void 0){if(e===null)return null;if(e instanceof Date)return e;if(typeof e=="string"){const t=Mm(e)||uO(e)||Mm(e.trim());if(!t)throw new Error(`Unable to parse \`${e}\` as a date.`);return t}else if(typeof e=="number")return new Date(e);throw new Error(`Invalid date value \`${e}\`. Expected a date, number, or string, got type ${typeof e}.`)}}function dO(e){return e.cardinality==="one"}function Rg(e){return e["value-type"]==="ref"}function Ug(e){return e["value-type"]==="blob"}function Qo(e,t){return e[t]}function Ko(e,t){return t.reduce((r,a)=>r&&r.get(a),e)}function Zn(e,t){if(t.length===0)throw new Error("path must have at least one element");if(t.length===1){e.delete(t[0]);return}const[r,...a]=t;e.has(r)&&Zn(e.get(r),a)}function on(e,t,r){if(t.length===0)throw new Error("path must have at least one element");if(t.length===1){e.set(t[0],r);return}const[a,...s]=t;let l=e.get(a);l||(l=new Map,e.set(a,l)),on(l,s,r)}function C_(e,t,r){const a=new Map,s=new Map,l=new Map;for(const u of t){let[d,f,h,v]=u;const g=Qo(e,f);if(!g){console.warn("no such attr",d,e);continue}g["checked-data-type"]==="date"&&r&&(h=kd(h),u[2]=h),Rg(g)&&on(l,[h,f,d],u),on(a,[d,f,h],u),on(s,[f,d,h],u)}return{eav:a,aev:s,vae:l}}function A_(e){const t=new Map,r=new Map,a=new Map,s=new Map;for(const l of Object.values(e)){const u=l["forward-identity"],[d,f,h]=u,v=l["reverse-identity"];if(on(a,[f,h],l),Ug(l)&&on(t,[f,h],l),l["primary?"]&&on(r,[f],l),v){const[g,b,w]=v;on(s,[b,w],l)}}return{blobAttrs:t,primaryKeys:r,forwardIdents:a,revIdents:s}}function M_(e){return{__type:e.__type,attrs:e.attrs,triples:sn(e.eav,3),cardinalityInference:e.cardinalityInference,linkIndex:e.linkIndex,useDateObjects:e.useDateObjects}}function O_(e){return $u(e.attrs,e.triples,e.cardinalityInference,e.linkIndex,e.useDateObjects)}function fO(e,t){return Ko(e.eav,[t])!==void 0}function $g(e){e.attrIndexes=A_(e.attrs)}function $u(e,t,r,a,s){const l=C_(e,t,s);return l.useDateObjects=s,l.attrs=e,l.attrIndexes=A_(e),l.cardinalityInference=r,l.linkIndex=a,l.__type="store",l}function Ul(e,t){var r,a;let s;if(Array.isArray(t[0])){const[u,d]=t[0],f=e.aev.get(u);if(!f)return null;s=(r=sn(f,2).find(v=>v[2]===d))===null||r===void 0?void 0:r[0]}else s=t[0];if(!s)return null;const l=t[2];if(Array.isArray(l)&&l.length===2&&e.aev.get(l[0])){const[u,d]=l,f=e.aev.get(u);if(!f)return null;const v=(a=sn(f,2).find(T=>T[2]===d))===null||a===void 0?void 0:a[0];if(!v)return null;const[g,b,w,..._]=t;return[s,b,v,..._]}else{const[u,...d]=t;return[s,...d]}}function N_(e,t){const r=Ul(e,t);if(!r)return;const[a,s,l]=r,u=Qo(e.attrs,s);u&&(Zn(e.eav,[a,s,l]),Zn(e.aev,[s,a,l]),Rg(u)&&Zn(e.vae,[l,s,a]))}let hO=0;function z_(e,t,r){const[a,s,l]=r;let u;const d=Ko(e.ea,[a,s,l]);return d&&(u=d[3]),u||Date.now()*10+hO++}function j_(e,t){var r;const a=Ul(e,t);if(!a)return;let[s,l,u]=a;const d=Qo(e.attrs,l);if(!d)return;d["checked-data-type"]==="date"&&e.useDateObjects&&(u=kd(u));const f=Ko(e.eav,[s,l,u]),h=(r=f==null?void 0:f[3])!==null&&r!==void 0?r:z_(e,d,a),v=[s,l,u,h];dO(d)?(on(e.eav,[s,l],new Map([[u,v]])),on(e.aev,[l,s],new Map([[u,v]]))):(on(e.eav,[s,l,u],v),on(e.aev,[l,s,u],v)),Rg(d)&&on(e.vae,[u,l,s],v)}function pO(e,t){var r;const a=Ul(e,t);if(!a)return;const[s,l,u]=a,d=Qo(e.attrs,l);if(!d)return;if(!Ug(d))throw new Error("merge operation is not supported for links");const f=Ko(e.eav,[s,l]);if(!f)return;const h=(r=f.values().next())===null||r===void 0?void 0:r.value;if(!h)return;const v=h[2],g=k_(v,u),b=[s,l,g,z_(e,d,h)];on(e.eav,[s,l],new Map([[g,b]]))}function Om(e,t){var r,a;const[s,l]=t,u=Ul(e,[s]);if(!u)return;const[d]=u,f=e.eav.get(d);if(f){for(const v of f.keys()){const g=e.attrs[v];g&&g["on-delete-reverse"]==="cascade"&&sn(f.get(v),1).forEach(([b,w,_])=>{var T;return Om(e,[_,(T=g["reverse-identity"])===null||T===void 0?void 0:T[1]])}),(!l||!g||((r=g["forward-identity"])===null||r===void 0?void 0:r[1])===l)&&(Zn(e.aev,[v,d]),Zn(e.eav,[d,v]))}f.size===0&&Zn(e.eav,[d])}const h=e.vae.get(d)&&sn(e.vae.get(d),2);h&&h.forEach(v=>{var g,b,w;const[_,T,k]=v,S=e.attrs[T];(!l||!S||((g=S["reverse-identity"])===null||g===void 0?void 0:g[1])===l)&&(Zn(e.eav,[_,T,k]),Zn(e.aev,[T,_,k]),Zn(e.vae,[k,T,_])),S&&S["on-delete"]==="cascade"&&((b=S["reverse-identity"])===null||b===void 0?void 0:b[1])===l&&Om(e,[_,(w=S["forward-identity"])===null||w===void 0?void 0:w[1]])}),((a=e.vae.get(d))===null||a===void 0?void 0:a.size)===0&&Zn(e.vae,[d])}function D_(e,t){const r=C_(e.attrs,t,e.useDateObjects);Object.keys(r).forEach(a=>{e[a]=r[a]})}function mO(e,[t]){e.attrs[t.id]=t,$g(e)}function R_(e){return sn(e.eav,3)}function gO(e,[t]){if(!e.attrs[t])return;const r=R_(e).filter(([a,s])=>s!==t);delete e.attrs[t],$g(e),D_(e,r)}function vO(e,[t]){const r=e.attrs[t.id];r&&(e.attrs[t.id]=Object.assign(Object.assign({},r),t),$g(e),D_(e,R_(e)))}function yO(e,t){const[r,...a]=t;switch(r){case"add-triple":j_(e,a);break;case"deep-merge-triple":pO(e,a);break;case"retract-triple":N_(e,a);break;case"delete-entity":Om(e,a);break;case"add-attr":mO(e,a);break;case"delete-attr":gO(e,a);break;case"update-attr":vO(e,a);break;case"restore-attr":break;case"rule-params":break;default:throw new Error(`unhandled transaction action: ${r}`)}}function sn(e,t,r=[]){if(!e||t===0)return r;if(t===1){for(const a of e.values())r.push(a);return r}for(const a of e.values())sn(a,t-1,r);return r}function pu(e,t,r){var a,s;const l=[];if(r!=null&&r.hasOwnProperty("$not")){for(const d of t.keys())r.$not!==d&&l.push(t.get(d));return l}if(r!=null&&r.hasOwnProperty("$isNull")){const{attrId:d,isNull:f,reverse:h}=r.$isNull;if(h)for(const v of t.keys()){const g=e.vae.get(v),b=!g||((a=g.get(d))===null||a===void 0?void 0:a.get(null))||!g.get(d);(f?b:!b)&&l.push(t.get(v))}else{const v=e.aev.get(d);for(const g of t.keys()){const b=!v||((s=v.get(g))===null||s===void 0?void 0:s.get(null))||!v.get(g);(f?b:!b)&&l.push(t.get(g))}}return l}if(r!=null&&r.$comparator)return sn(t,1).filter(r.$op);const u=r.in||r.$in||[r];for(const d of u){const f=t.get(d);f&&l.push(f)}return l}function bO(e,t,r){let a="";return e!==void 0&&(a+="e"),t!==void 0&&(a+="a"),r!==void 0&&(a+="v"),a}function wO(e,[t,r,a]){var s,l;switch(bO(t,r,a)){case"e":{const d=e.eav.get(t);return sn(d,2)}case"ea":{const d=(s=e.eav.get(t))===null||s===void 0?void 0:s.get(r);return sn(d,1)}case"eav":{const d=(l=e.eav.get(t))===null||l===void 0?void 0:l.get(r);return d?pu(e,d,a):[]}case"ev":{const d=e.eav.get(t);if(!d)return[];const f=[];for(const h of d.values())f.push(...pu(e,h,a));return f}case"a":{const d=e.aev.get(r);return sn(d,2)}case"av":{const d=e.aev.get(r);if(!d)return[];const f=[];for(const h of d.values())f.push(...pu(e,h,a));return f}case"v":{const d=[];for(const f of e.eav.values())for(const h of f.values())d.push(...pu(e,h,a));return d}default:return sn(e.eav,3)}}function xO(e,t,r){var a;const s={};for(const[l,u]of t.entries()){const d=(a=e.eav.get(r))===null||a===void 0?void 0:a.get(u.id),f=sn(d,1);for(const h of f)s[l]=h[2]}return s}function Hi(e,t,r){var a;return(a=e.attrIndexes.forwardIdents.get(t))===null||a===void 0?void 0:a.get(r)}function U_(e,t,r){var a;return(a=e.attrIndexes.revIdents.get(t))===null||a===void 0?void 0:a.get(r)}function _O(e,t){return e.attrIndexes.blobAttrs.get(t)}function $_(e,t){var r;const a=e.attrIndexes.primaryKeys.get(t);return a||((r=e.attrIndexes.forwardIdents.get(t))===null||r===void 0?void 0:r.get("id"))}function SO(e,t){const r=Ul(e,t);if(!r)return;const[a,s,l]=r;if(Qo(e.attrs,s))return Ko(e.eav,[a,s])}function TO(e,t){const r=t.filter(([a,s,l,u,d])=>{if(a!=="add-triple"&&a!=="deep-merge-triple")return!0;const f=d==null?void 0:d.mode;if(f!=="create"&&f!=="update")return!0;let h=!1;const v=Qo(e.attrs,l);if(v){const g=$_(e,v["forward-identity"][1]);h=!!SO(e,[s,g.id,s])}return!(f==="create"&&h||f==="update"&&!h)});return nd(e,a=>{r.forEach(s=>{yO(a,s)})})}function kO(e){return typeof e=="string"&&e.startsWith("?")}function EO(e,t,r){if(r.hasOwnProperty(e)){const a=r[e];return L_(a,t,r)}return Object.assign(Object.assign({},r),{[e]:t})}function N1(e,t,r){return e===t?r:null}function CO(e){switch(typeof e){case"string":return e.startsWith("?")?EO:N1;default:return N1}}const AO=["in","$in","$not","$isNull","$comparator"];function MO(e){for(const t of AO)if(e.hasOwnProperty(t))return!0;return!1}function L_(e,t,r){return r?typeof e=="object"?MO(e)?r:null:CO(e)(e,t,r):null}function OO(e,t,r){return e.reduce((a,s,l)=>{const u=t[l];return L_(s,u,a)},r)}function NO(e,t,r){return DO(e,t,r).map(a=>OO(t,a,r)).filter(a=>a)}function zO(e,t,r){return t.or?t.or.patterns.flatMap(a=>Nm(e,a,r)):t.and?t.and.patterns.reduce((a,s)=>Nm(e,s,a),r):r.flatMap(a=>NO(e,t,a))}function Nm(e,t,r=[{}]){return t.reduce((a,s)=>zO(e,s,a),r)}function Lg(e,t){return Array.isArray(t)?t.map(r=>Lg(e,r)):kO(t)?e[t]:t}function jO(e,{find:t,where:r}){return Nm(e,r).map(s=>Lg(s,t))}function DO(e,t,r){return wO(e,Lg(r,t))}const RO=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;function Io(e){return typeof e=="string"&&RO.test(e)}const Ht=[];for(let e=0;e<256;++e)Ht.push((e+256).toString(16).slice(1));function UO(e,t=0){return(Ht[e[t+0]]+Ht[e[t+1]]+Ht[e[t+2]]+Ht[e[t+3]]+"-"+Ht[e[t+4]]+Ht[e[t+5]]+"-"+Ht[e[t+6]]+Ht[e[t+7]]+"-"+Ht[e[t+8]]+Ht[e[t+9]]+"-"+Ht[e[t+10]]+Ht[e[t+11]]+Ht[e[t+12]]+Ht[e[t+13]]+Ht[e[t+14]]+Ht[e[t+15]]).toLowerCase()}let Rp;const $O=new Uint8Array(16);function LO(){if(!Rp){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Rp=crypto.getRandomValues.bind(crypto)}return Rp($O)}const HO=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),z1={randomUUID:HO};function IO(e,t,r){var s;if(z1.randomUUID&&!e)return z1.randomUUID();e=e||{};const a=e.random??((s=e.rng)==null?void 0:s.call(e))??LO();if(a.length<16)throw new Error("Random bytes length must be >= 16");return a[6]=a[6]&15|64,a[8]=a[8]&63|128,UO(a)}function j1(e){const t=e.replace(/-/g,""),r=[];for(let a=0;a<t.length;a+=2)r.push(parseInt(t.substring(a,a+2),16));return r}function qO(e,t){for(let r=0;r<e.length;r++){if(e[r]<t[r])return-1;if(e[r]>t[r])return 1}return 0}function FO(e,t){return qO(j1(e),j1(t))}function Je(){return IO()}function BO(e,t){return e.localeCompare(t)}function PO(){let e=BO;if(typeof Intl=="object"&&Intl.hasOwnProperty("Collator"))try{e=Intl.Collator("en-US").compare}catch{}return e}const YO=PO();let XO=0;function fl(e){return Ed(`_${e}`,XO++)}function Ed(e,t){return`?${e}-${t}`}class qo extends Error{constructor(t){super(t),this.name="AttrNotFoundError"}}function GO(e,t){const r=$_(e,t);if(!r)throw new qo(`Could not find id attr for ${t}`);return r}function D1(e,t,r,a){return[VO(e,t,r,a)]}function VO(e,t,r,a){return[e(r,a),GO(t,r).id,e(r,a),e("time",a)]}function QO(e,t,r){return e.map(a=>a===t?r:a)}function H_(e,t,r,a,s){const l=Hi(t,r,s),u=U_(t,r,s),d=l||u;if(!d)throw new qo(`Could not find attr for ${[r,s]}`);if(d["value-type"]!=="ref")throw new Error(`Attr ${d.id} is not a ref`);const[f,h]=d["forward-identity"],[v,g]=d["reverse-identity"],b=a+1,w=l?[e(h,a),d.id,e(g,b),fl("time")]:[e(h,b),d.id,e(g,a),fl("time")];return[l?g:h,b,w,d,!!l]}function R1(e,t){if(typeof t!="string")return function(u){return!1};const a=t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/%/g,".*").replace(/_/g,"."),s=new RegExp(`^${a}$`,e?void 0:"i");return function(u){return typeof u!="string"?!1:s.test(u)}}function KO(e,t){if(typeof t!="object"||t.hasOwnProperty("$in")||t.hasOwnProperty("in"))return t;const r=e["checked-data-type"]==="date";if(t.hasOwnProperty("$gt"))return{$comparator:!0,$op:r?function(s){return new Date(s[2])>new Date(t.$gt)}:function(s){return s[2]>t.$gt}};if(t.hasOwnProperty("$gte"))return{$comparator:!0,$op:r?function(s){return new Date(s[2])>=new Date(t.$gte)}:function(s){return s[2]>=t.$gte}};if(t.hasOwnProperty("$lt"))return{$comparator:!0,$op:r?function(s){return new Date(s[2])<new Date(t.$lt)}:function(s){return s[2]<t.$lt}};if(t.hasOwnProperty("$lte"))return{$comparator:!0,$op:r?function(s){return new Date(s[2])<=new Date(t.$lte)}:function(s){return s[2]<=t.$lte}};if(t.hasOwnProperty("$like")){const a=R1(!0,t.$like);return{$comparator:!0,$op:function(l){return a(l[2])}}}if(t.hasOwnProperty("$ilike")){const a=R1(!1,t.$ilike);return{$comparator:!0,$op:function(l){return a(l[2])}}}return t}function WO(e,t,r,a,s,l){const u=Hi(t,r,s),d=U_(t,r,s),f=u||d;if(!f)throw new qo(`No attr for etype = ${r} label = ${s}`);if(l!=null&&l.hasOwnProperty("$isNull")){const h=Hi(t,r,"id");if(!h)throw new qo(`No attr for etype = ${r} label = id`);return[e(r,a),h.id,{$isNull:{attrId:f.id,isNull:l.$isNull,reverse:!u}},fl("time")]}return u?[e(r,a),f.id,KO(f,l),fl("time")]:[l,f.id,e(r,a),fl("time")]}function ZO(e,t,r,a,s){const[l,u,d]=s.reduce((f,h)=>{const[v,g,b]=f,[w,_,T]=H_(e,t,v,g,h);return[w,_,[...b,T]]},[r,a,[]]);return[l,u,d]}function zm(e,t,r,a,s,l){const u=s.slice(0,s.length-1),d=s[s.length-1],[f,h,v]=ZO(e,t,r,a,u),g=WO(e,t,f,h,d,l);return v.concat([g])}function JO(e,t){return t?[t].concat(e):e}function eN([e,t]){return e==="or"&&Array.isArray(t)}function tN([e,t]){return e==="and"&&Array.isArray(t)}function nN(e,t,r){return(a,s)=>{const l=e(a,s);return t==l?l:`${l}-${r}`}}function U1(e,t,r,a,s,l){const u=e(a,s),d=l.map((f,h)=>{const v=nN(e,u,h);return I_(v,r,a,s,f)});return{[t]:{patterns:d,joinSym:u}}}function rN(e){const t=[];for(let r=1;r<=e.length;r++)t.push(e.slice(0,r));return t}function $1(e,t,r,a,s){return rN(s).map(l=>zm(e,t,r,a,l,{$isNull:!0}))}function I_(e,t,r,a,s){return Object.entries(s).flatMap(([l,u])=>{if(eN([l,u]))return U1(e,"or",t,r,a,u);if(tN([l,u]))return U1(e,"and",t,r,a,u);if(l==="$entityIdStartsWith")return[];const d=l.split(".");if(u!=null&&u.hasOwnProperty("$ne")&&(u=Object.assign(Object.assign({},u),{$not:u.$ne}),delete u.$ne),u!=null&&u.hasOwnProperty("$not")){const f=zm(e,t,r,a,d,u),h=$1(e,t,r,a,d);return[{or:{patterns:[f,...h],joinSym:e(r,a)}}]}return u!=null&&u.hasOwnProperty("$isNull")&&u.$isNull===!0&&d.length>1?[{or:{patterns:$1(e,t,r,a,d),joinSym:e(r,a)}}]:zm(e,t,r,a,d,u)})}function iN(e,t,r,a){const s=Ed;return a?I_(s,e,t,r,a).concat(D1(s,e,t,r)):D1(s,e,t,r)}function aN(e,t,r){return[e(t,r),e("time",r)]}function oN(e,t,r,a,s,l){const[u,d,f,h,v]=H_(e,t,r,a,s),g=QO(f,e(r,a),l);return[u,d,g,h,v]}function sN(e,t,{etype:r,level:a,form:s},l){const u=Object.keys(s).filter(d=>d!=="$");return u.length?Object.entries(l).map(function([f,h]){return u.map(function(b){var w,_,T;const k=!!(t.cardinalityInference&&(!((T=(_=(w=t.linkIndex)===null||w===void 0?void 0:w[r])===null||_===void 0?void 0:_[b])===null||T===void 0)&&T.isSingular));try{const[S,E,M]=oN(e,t,r,a,b,f),z=F_(t,{etype:S,level:E,form:s[b],join:M}),R=k?z[0]:z;return{[b]:R}}catch(S){if(S instanceof qo)return{[b]:k?void 0:[]};throw S}}).reduce(function(b,w){return Object.assign(Object.assign({},b),w)},h)}):Object.values(l)}function lN(e,t,r){return r==="string"?YO(e,t):e>t?1:-1}function al(e,t,r,a,s){return t===a||t==null&&a==null?FO(e,r):a==null?1:t==null?-1:lN(t,a,s)}function rd([e,t],[r,a],s){return al(e,t,r,a,s)}function jm(e){return e==null?e:new Date(e).getTime()}function cN(e,t,r,a){var s;const[l,u,d,f]=e,h=r==="desc"?1:-1;if(((s=t["forward-identity"])===null||s===void 0?void 0:s[2])==="id")return rd(a,[l,f],null)===h;const[v,g]=a,b=t["checked-data-type"],w=b==="date"?jm(g):g,_=b==="date"?jm(d):d;return rd([v,w],[l,_],b)===h}function uN(e,t){const r=t[1];return e.attrs[r]}function dN(e,t,r){const a=Object.keys(r)[0];return Hi(e,t,a)}function fN(e,t,r,a){if(r)return uN(e,r);if(a)return dN(e,t,a)}function hN(e,t,r){var a,s;if(!Array.isArray(r.fields))return _O(e,t);const l=new Map;for(const u of r.fields){const d=Hi(e,t,u),f=(a=d==null?void 0:d["forward-identity"])===null||a===void 0?void 0:a[2];f&&Ug(d)&&l.set(f,d)}if(!l.has("id")){const u=Hi(e,t,"id"),d=(s=u==null?void 0:u["forward-identity"])===null||s===void 0?void 0:s[2];d&&l.set(d,u)}return l}function pN(e,{etype:t,pageInfo:r,dq:a,form:s}){var l,u;const d=(l=s==null?void 0:s.$)===null||l===void 0?void 0:l.order,f=q_(s),h=mN(s);let v=jO(e,a);const g=r==null?void 0:r["start-cursor"],b=fN(e,t,g,d);if(b&&((u=b==null?void 0:b["forward-identity"])===null||u===void 0?void 0:u[2])!=="id"){const T=b["checked-data-type"]==="date",k=b.id;v=v.map(([S])=>{var E,M,z,R,F;let I=(F=(R=(z=(M=(E=e.eav.get(S))===null||E===void 0?void 0:E.get(k))===null||M===void 0?void 0:M.values())===null||z===void 0?void 0:z.next())===null||R===void 0?void 0:R.value)===null||F===void 0?void 0:F[2];return T&&(I=jm(I)),[S,I]})}v.sort(h==="asc"?function(k,S){return rd(k,S,b==null?void 0:b["checked-data-type"])}:function(k,S){return rd(S,k,b==null?void 0:b["checked-data-type"])});let w={};const _=hN(e,t,a);for(const T of v){const[k]=T;if(w[k]||!f&&g&&b&&cN(g,b,h,T))continue;const S=xO(e,_,k);S&&(w[k]=S)}return w}function mN(e){var t;const r=(t=e.$)===null||t===void 0?void 0:t.order;return r&&r[Object.keys(r)[0]]||"asc"}function q_(e){var t,r,a;const s=(t=e.$)===null||t===void 0?void 0:t.offset,l=(r=e.$)===null||r===void 0?void 0:r.before,u=(a=e.$)===null||a===void 0?void 0:a.after;return!s&&!l&&!u}function gN(e,{etype:t,level:r,form:a,join:s,pageInfo:l}){var u,d,f,h,v;if(!q_(a)&&(!l||!l["start-cursor"]))return[];const g=JO(iN(e,t,r,(u=a.$)===null||u===void 0?void 0:u.where),s),b=aN(Ed,t,r),w=(d=a.$)===null||d===void 0?void 0:d.fields,_=pN(e,{etype:t,pageInfo:l,form:a,dq:{where:g,find:b,fields:w}}),T=((f=a.$)===null||f===void 0?void 0:f.limit)||((h=a.$)===null||h===void 0?void 0:h.first)||((v=a.$)===null||v===void 0?void 0:v.last);if(T!=null){r>0&&console.warn("WARNING: Limits in child queries are only run client-side. Data returned from the server will not have a limit.");const k=Object.entries(_);return k.length<=T?_:Object.fromEntries(k.slice(0,T))}return _}function vN(e,t){try{return gN(e,t)}catch(r){if(r instanceof qo)return{};throw r}}function F_(e,t){const r=vN(e,t);return sN(Ed,e,t,r)}function yN(e){const t={};for(const[r,a]of Object.entries(e))t[r]={startCursor:a["start-cursor"],endCursor:a["end-cursor"],hasNextPage:a["has-next-page?"],hasPreviousPage:a["has-previous-page?"]};return t}function B_({store:e,pageInfo:t,aggregate:r},a){const l={data:Object.keys(a).reduce(function(d,f){return r!=null&&r[f]||f==="$$ruleParams"||(d[f]=F_(e,{etype:f,form:a[f],level:0,pageInfo:t==null?void 0:t[f]})),d},{})};return t&&(l.pageInfo=yN(t)),r&&(l.aggregate=r),l}function bN(){const t={__etype:1,__ops:1,create:1,update:1,link:1,unlink:1,delete:1,merge:1,ruleParams:1};return new Set(Object.keys(t))}const wN=bN();function Dm(e,t,r){const a={__etype:e,__ops:r};return new Proxy(a,{get:(s,l)=>{if(l==="__ops")return r;if(l==="__etype")return e;if(wN.has(l))return(u,d)=>Dm(e,t,[...r,d?[l,e,t,u,d]:[l,e,t,u]])}})}function id(e){return e.startsWith("lookup__")}function P_(e){const[t,r,...a]=e.split("__");return[r,JSON.parse(a.join("__"))]}function xN(e){return new Proxy({__etype:e},{get(t,r){if(r==="__etype")return e;const a=r;return id(a)?Dm(e,P_(a),[]):Dm(e,a,[])}})}function Y_(){return new Proxy({},{get(e,t){return xN(t)}})}Y_();function _N(e){return e.__ops}function SN(e,t){const{attrIdMap:r,refSwapAttrIds:a}=e,s=[];for(const u of t){const d=r[u];if(d)s.push(d);else if(Array.isArray(u)&&u.length==2&&r[u[0]]){const[f,h]=u;s.push([r[f],h])}else s.push(u)}const[l]=t;if((l==="add-triple"||l==="retract-triple")&&a.has(t[2])){const u=s[1];s[1]=s[3],s[3]=u}return s}function It(e,t,r){return Object.values(e).find(a=>{const[s,l,u]=a["forward-identity"];return l===t&&u===r})}function va(e,t,r){return Object.values(e).find(a=>{const s=a["reverse-identity"];if(!s)return!1;const[l,u,d]=s;return u===t&&d===r})}function TN(e){if(Array.isArray(e))return e;const t=Object.entries(e);if(t.length!==1)throw new Error("lookup must be an object with a single unique attr and value.");return t[0]}function Rm(e,t,r){return r.indexOf(".")!==-1&&!It(e,t,r)}function Um(e){const[t,r,...a]=e.split(".");if(a.length>0||r!=="id")throw new Error(`${e} is not a valid lookup attribute.`);return t}function kN(e,t,r){if(!Rm(e,t,r))return It(e,t,r);const a=Um(r),s=It(e,t,a)||va(e,t,a);if(s&&s["value-type"]!=="ref")throw new Error(`${r} does not reference a valid link attribute.`);return s}function $m(e){return typeof e=="string"&&!id(e)?null:typeof e=="string"&&id(e)?P_(e):TN(e)}function ln(e,t,r){const a=$m(r);if(a===null)return r;const[s,l]=a,u=kN(e,t,s);if(!u||!u["unique?"])throw new Error(`${s} is not a unique attribute.`);return[u.id,l]}function X_(e,t,r,a){const s=ln(e,t,r);return Array.isArray(s)?[["add-triple",s,It(e,t,"id").id,s]].concat(a):a}function EN({attrs:e},[t,r,a]){const s=Object.entries(a).flatMap(([l,u])=>{const d=Array.isArray(u)?u:[u],f=It(e,t,l),h=va(e,t,l);return d.map(v=>f?["add-triple",ln(e,t,r),f.id,ln(e,f["reverse-identity"][1],v)]:["add-triple",ln(e,h["forward-identity"][1],v),h.id,ln(e,t,r)])});return X_(e,t,r,s)}function CN({attrs:e},[t,r,a]){const s=Object.entries(a).flatMap(([l,u])=>{const d=Array.isArray(u)?u:[u],f=It(e,t,l),h=va(e,t,l);return d.map(v=>f?["retract-triple",ln(e,t,r),f.id,ln(e,f["reverse-identity"][1],v)]:["retract-triple",ln(e,h["forward-identity"][1],v),h.id,ln(e,t,r)])});return X_(e,t,r,s)}function AN(e,t,r){if(Array.isArray(r)){const[a,s]=r;for(const l of e||[]){const u=l==null?void 0:l.aev.get(a);if(u){for(const[d,f,h]of sn(u,2))if(h===s)return!0}}}else for(const a of e||[]){const s=a==null?void 0:a.eav.get(r);if(s){for(const l of s.keys())if(a.attrs[l]["forward-identity"][1]==t)return!0}}return!1}function G_({stores:e,attrs:t},[r,a,s,l]){return(l==null?void 0:l.upsert)===!1?{mode:"update"}:(l==null?void 0:l.upsert)===!0?null:AN(e,r,a)?{mode:"update"}:null}function MN(e,t){const{stores:r,attrs:a}=e,[s,l,u,d]=t,f=Dg(u),h=ln(a,s,l);return[["id",h]].concat(Object.entries(f)).map(([g,b])=>{const w=It(a,s,g);return w["checked-data-type"]==="date"&&e.useDateObjects&&(b=kd(b)),["add-triple",h,w.id,b,{mode:"create"}]})}function ON(e,t){const{stores:r,attrs:a}=e,[s,l,u,d]=t,f=Dg(u),h=ln(a,s,l),v=G_(e,[s,h,u,d]);return[["id",h]].concat(Object.entries(f)).map(([b,w])=>{const _=It(a,s,b);return _["checked-data-type"]==="date"&&e.useDateObjects&&(w=kd(w)),["add-triple",h,_.id,w,...v?[v]:[]]})}function NN({attrs:e},[t,r]){return[["delete-entity",ln(e,t,r),t]]}function zN(e,t){const{stores:r,attrs:a}=e,[s,l,u,d]=t,f=Dg(u),h=ln(a,s,l),v=G_(e,[s,h,u,d]),g=Object.entries(f).map(([w,_])=>{const T=It(a,s,w);return["deep-merge-triple",h,T.id,_,...v?[v]:[]]});return[["add-triple",h,It(a,s,"id").id,h,...v?[v]:[]]].concat(g)}function jN({attrs:e},[t,r,a]){return[["rule-params",ln(e,t,r),t,a]]}function DN(e){const[t,r,a,s,l]=e;if(!s)return e;const u=Object.assign({},s);return delete u.id,[t,r,a,u,...l?[l]:[]]}function RN(e,t){const[r,...a]=DN(t);switch(r){case"merge":return zN(e,a);case"create":return MN(e,a);case"update":return ON(e,a);case"link":return EN(e,a);case"unlink":return CN(e,a);case"delete":return NN(e,a);case"ruleParams":return jN(e,a);default:throw new Error(`unsupported action ${r}`)}}function UN(e){switch(e){case"string":case"date":case"boolean":case"number":return e;default:return}}function $N(e,t,r){var a,s;const l=(s=(a=e.entities[t])===null||a===void 0?void 0:a.attrs)===null||s===void 0?void 0:s[r];if(r==="id")return null;if(!l)throw new Error(`${t}.${r} does not exist in your schema`);const{unique:u,indexed:d}=l==null?void 0:l.config,f=UN(l==null?void 0:l.valueType);return{"index?":d,"unique?":u,"checked-data-type":f}}function mu(e,t,r,a){const s=e?$N(e,t,r):null,l=Je(),d=[Je(),t,r];return Object.assign(Object.assign({id:l,"forward-identity":d,"value-type":"blob",cardinality:"one","unique?":!1,"index?":!1,isUnsynced:!0},s||{}),a||{})}function LN(e,t,r){return Object.values(e.links).find(s=>s.forward.on===t&&s.forward.label===r||s.reverse.on===t&&s.reverse.label===r)}function HN(e,t,r){const a=LN(e,t,r);if(!a)throw new Error(`Couldn't find the link ${t}.${r} in your schema`);const{forward:s,reverse:l}=a;return{"forward-identity":[Je(),s.on,s.label],"reverse-identity":[Je(),l.on,l.label],cardinality:s.has==="one"?"one":"many","unique?":l.has==="one","on-delete":s.onDelete,"on-delete-reverse":l.onDelete}}function L1(e,t,r,a){const s=e?HN(e,t,r):null,l=Je(),u=[Je(),t,r],d=[Je(),r,t];return Object.assign(Object.assign({id:l,"forward-identity":u,"reverse-identity":d,"value-type":"ref",cardinality:"many","unique?":!1,"index?":!1,isUnsynced:!0},s||{}),a||{})}const IN=new Set(["create","update","merge","link","unlink"]),qN=new Set(["link","unlink"]),FN=new Set(["create","update","merge"]),BN=new Set(["link","unlink","create","update","merge","delete","ruleParams"]),Lm={"unique?":!0,"index?":!0},PN=Object.assign(Object.assign({},Lm),{cardinality:"one"});function YN(e){const t=[],[r,a,s,l]=e;if(!BN.has(r))return t;const u=$m(s);if(u&&t.push({etype:a,lookupPair:u}),r==="link")for(const[d,f]of Object.entries(l)){const h=Array.isArray(f)?f:[f];for(const v of h){const g=$m(v);g&&t.push({etype:a,lookupPair:g,linkLabel:d})}}return t}function XN({attrs:e,schema:t},r){var a,s;const[l,u,d]=[new Set,Object.assign({},e),[]];function f(g){u[g.id]=g,d.push(["add-attr",g]),l.add(g.id)}function h(g){g!=null&&g.isUnsynced&&!l.has(g.id)&&(d.push(["add-attr",g]),l.add(g.id))}function v(g,b){const w=It(u,g,b),_=va(u,g,b);h(w),h(_),!w&&!_&&f(L1(t,g,b,PN))}for(const g of r)for(const{etype:b,lookupPair:w,linkLabel:_}of YN(g)){const T=w[0];if(_){v(b,_);const k=It(u,b,_),S=va(u,b,_);h(k),h(S);const E=((a=k==null?void 0:k["reverse-identity"])===null||a===void 0?void 0:a[1])||((s=S==null?void 0:S["forward-identity"])===null||s===void 0?void 0:s[1])||_;if(Rm(u,E,T))v(E,Um(T));else{const M=It(u,E,T);M||f(mu(t,E,T,Lm)),h(M)}}else if(Rm(u,b,T))v(b,Um(T));else{const k=It(u,b,T);k||f(mu(t,b,T,Lm)),h(k)}}for(const g of r){const[b,w,_,T]=g;if(IN.has(b)){const k=It(u,w,"id");h(k),k||f(mu(t,w,"id",{"unique?":!0}));for(const S of Object.keys(T)){const E=It(u,w,S);if(h(E),FN.has(b)&&(E||f(mu(t,w,S,S==="id"?{"unique?":!0}:null))),qN.has(b)){const M=va(u,w,S);!E&&!M&&f(L1(t,w,S)),h(M)}}}}return[u,d]}function GN(e,t){const a=(Array.isArray(t)?t:[t]).flatMap(f=>_N(f)),[s,l]=XN(e,a),u=Object.assign(Object.assign({},e),{attrs:s}),d=a.flatMap(f=>RN(u,f));return[...l,...d]}var gr=function(e,t,r,a){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(v){try{h(a.next(v))}catch(g){u(g)}}function f(v){try{h(a.throw(v))}catch(g){u(g)}}function h(v){v.done?l(v.value):s(v.value).then(d,f)}h((a=a.apply(e,t||[])).next())})};function H1(e,t){typeof requestIdleCallback>"u"?e():requestIdleCallback(e,{timeout:t})}const hl="__meta";class VN{constructor(t,r){}}class Hm{constructor(t){var r,a;this._subs=[],this._nextSave=null,this._nextGc=null,this._pendingSaveKeys=new Set,this._loadedKeys=new Set,this._version=0,this._meta={isLoading:!0,onLoadCbs:[],value:null,error:null,attempts:0},this._persister=t.persister,this._merge=t.merge,this.serialize=t.serialize,this.parse=t.parse,this._objectSize=t.objectSize,this._log=t.logger,this._saveThrottleMs=(r=t.saveThrottleMs)!==null&&r!==void 0?r:100,this._idleCallbackMaxWaitMs=(a=t.idleCallbackMaxWaitMs)!==null&&a!==void 0?a:1e3,this._gcOpts=t.gc,this.currentValue={},this._loadedKeys=new Set,this._loadingKeys={},this._initMeta(),t.preloadEntryCount&&this._preloadEntries(t.preloadEntryCount)}_initMeta(){return gr(this,void 0,void 0,function*(){var t,r,a;this._meta.loadingPromise&&(yield this._meta.loadingPromise);try{const s=this._persister.getItem(hl);this._meta.loadingPromise=s;const l=yield s;this._meta.isLoading=!1,this._meta.error=null,this._meta.loadingPromise=null,this._meta.attempts=0;const u=(r=(t=this._meta.value)===null||t===void 0?void 0:t.objects)!==null&&r!==void 0?r:{},d=l??{},f=(a=d.objects)!==null&&a!==void 0?a:{};this._meta.value=Object.assign(Object.assign({},d),{objects:Object.assign(Object.assign({},u),f)})}catch(s){this._meta.error=s,this._meta.attempts++,this._meta.loadingPromise=null}})}_getMeta(){return gr(this,void 0,void 0,function*(){return this._meta.value?this._meta.value:this._meta.loadingPromise?(yield this._meta.loadingPromise,this._meta.value):(this._initMeta(),yield this._meta.loadingPromise,this._meta.value)})}_refreshMeta(){return gr(this,void 0,void 0,function*(){return yield this._initMeta(),this._meta.value})}_preloadEntries(t){return gr(this,void 0,void 0,function*(){const r=yield this.waitForMetaToLoad();if(!r)return;const a=Object.entries(r.objects);a.sort(([s,l],[u,d])=>d.updatedAt-l.updatedAt);for(const[s]of a.slice(0,t))this._loadKey(s)})}_getFromStorage(t){return gr(this,void 0,void 0,function*(){try{const r=yield this._persister.getItem(t);return r&&this.parse(t,r)}catch(r){return console.error(`Unable to read from storage for key=${t}`,r),null}})}waitForKeyToLoad(t){return gr(this,void 0,void 0,function*(){return this._loadedKeys.has(t)?this.currentValue[t]:(yield this._loadingKeys[t]||this._loadKey(t),this.currentValue[t])})}waitForMetaToLoad(){return gr(this,void 0,void 0,function*(){return this._getMeta()})}unloadKey(t){this._loadedKeys.delete(t),delete this._loadingKeys[t],delete this.currentValue[t]}_loadKey(t){return gr(this,void 0,void 0,function*(){if(this._loadedKeys.has(t)||t in this._loadingKeys)return;const r=this._getFromStorage(t);this._loadingKeys[t]=r;const a=yield r;if(delete this._loadingKeys[t],this._loadedKeys.add(t),a){const s=this._merge(t,a,this.currentValue[t]);s&&(this.currentValue[t]=s)}this.onKeyLoaded&&this.onKeyLoaded(t)})}_writeToStorage(t){var r,a;const s=[],l=t==null?void 0:t.skipGc;if(this._meta.isLoading){const w=new Promise((_,T)=>{var k;setTimeout(()=>this._enqueuePersist(t?Object.assign(Object.assign({},t),{attempts:(t.attempts||0)+1}):{attempts:1}).then(_).catch(T),10+((k=t==null?void 0:t.attempts)!==null&&k!==void 0?k:0)*1e3)});return s.push(w),Promise.all(s).then(_=>_.reduce((T,k)=>T+k,0))}const u=this._meta.value;if(!u)return Promise.resolve(0);const d=[],f=[];for(const w of this._pendingSaveKeys)w in this.currentValue?f.push(w):(d.push(w),delete u.objects[w]);for(const w of d){const _=this._persister.removeItem(w);s.push(_.then(()=>1)),this._loadedKeys.delete(w),this._pendingSaveKeys.delete(w)}const h=[],v=[[hl,u]],g=(r=u.objects)!==null&&r!==void 0?r:{};u.objects=g;for(const w of f)if(this._loadedKeys.has(w)){const _=this.serialize(w,this.currentValue[w]);v.push([w,_]);const T=this._objectSize(_),k=(a=g[w])!==null&&a!==void 0?a:{createdAt:Date.now(),updatedAt:Date.now(),size:T};k.updatedAt=Date.now(),k.size=T,g[w]=k,this._pendingSaveKeys.delete(w)}else h.push(w);const b=this._persister.multiSet(v);s.push(b.then(()=>1));for(const w of h){const _=this._loadKey(w).then(()=>this._enqueuePersist(t));s.push(_)}return l||this.gc(),Promise.all(s).then(w=>w.reduce((_,T)=>_+T,0))}flush(){return gr(this,void 0,void 0,function*(){return this._nextSave?(clearTimeout(this._nextSave),this._nextSave=null,this._writeToStorage()):void 0})}_gc(){return gr(this,void 0,void 0,function*(){if(!this._gcOpts)return;const t=new Set(yield this._persister.getAllKeys());t.delete(hl);const r=new Set(Object.keys(this.currentValue));for(const b of Object.keys(this._loadingKeys))r.add(b);for(const b of this._loadedKeys)r.add(b);const a=yield this._refreshMeta();if(!a){this._log.info("Could not gc because we were not able to load meta");return}const s=[],l={gcOpts:this._gcOpts,keys:t,sacredKeys:r,removed:[],metaRemoved:[],removedMissingCount:0,removedOldCount:0,removedThresholdCount:0,removedSizeCount:0};for(const b of t)r.has(b)||b in a.objects||(this._log.info("Lost track of key in meta",b),s.push(this._persister.removeItem(b)),l.removed.push(b),l.removedMissingCount++);const u=Date.now();for(const[b,w]of Object.entries(a.objects))!r.has(b)&&w.updatedAt<u-this._gcOpts.maxAgeMs&&(s.push(this._persister.removeItem(b)),delete a.objects[b],l.removed.push(b),l.removedOldCount++);const d=Object.entries(a.objects);d.sort(([b,w],[_,T])=>w.updatedAt-T.updatedAt);const f=d.filter(([b])=>!r.has(b));if(d.length>this._gcOpts.maxEntries)for(const[b]of f.slice(0,d.length-this._gcOpts.maxEntries))s.push(this._persister.removeItem(b)),delete a.objects[b],l.removed.push(b),l.removedThresholdCount++;const h=Object.entries(a.objects);h.sort(([b,w],[_,T])=>w.updatedAt-T.updatedAt);const v=h.filter(([b])=>!r.has(b));let g=h.reduce((b,[w,_])=>b+_.size,0);for(;g>0&&g>this._gcOpts.maxSize&&v.length;){const[[b,w]]=v.splice(0,1);g-=w.size,s.push(this._persister.removeItem(b)),delete a.objects[b],l.removed.push(b),l.removedSizeCount++}for(const b of Object.keys(a.objects))!t.has(b)&&!r.has(b)&&delete a.objects[b];return(l.removed.length||l.metaRemoved.length)&&s.push(this._enqueuePersist({skipGc:!0})),this._log.info("Completed GC",l),yield Promise.all(s),l})}gc(){this._nextGc||(this._nextGc=setTimeout(()=>{H1(()=>{this._nextGc=null,this._gc()},30*1e3)},1e3*60+Math.random()*500))}_enqueuePersist(t){return new Promise((r,a)=>{if(this._nextSave){r(0);return}this._nextSave=setTimeout(()=>{H1(()=>{this._nextSave=null,this._writeToStorage(t).then(r).catch(a)},this._idleCallbackMaxWaitMs)},this._saveThrottleMs)})}version(){return this._version}updateInPlace(t){this._version++;const[r,a]=nd(this.currentValue,t,{enablePatches:!0});for(const s of a){const l=s.path[0];l&&typeof l=="string"&&(this._pendingSaveKeys.add(l),this._loadedKeys.has(l)||this._loadKey(l))}for(const s of Object.keys(r))if(!r[s])debugger;this.currentValue=r,this._enqueuePersist();for(const s of this._subs)s(this.currentValue);return r}subscribe(t){return this._subs.push(t),t(this.currentValue),()=>{this._subs=this._subs.filter(r=>r!==t)}}}var Gr=function(e,t,r,a){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(v){try{h(a.next(v))}catch(g){u(g)}}function f(v){try{h(a.throw(v))}catch(g){u(g)}}function h(v){v.done?l(v.value):s(v.value).then(d,f)}h((a=a.apply(e,t||[])).next())})};const QN=6,KN=["kv","querySubs","syncSubs"];function WN(e){return function(r){console.error("Error in IndexedDB event",{source:e,event:r})}}function ZN(e){return Gr(this,void 0,void 0,function*(){return new Promise(t=>{const r=indexedDB.open(e);r.onerror=a=>{t(null)},r.onsuccess=a=>{const l=a.target.result;t(l)},r.onupgradeneeded=a=>{var s;(s=a.target.transaction)===null||s===void 0||s.abort(),t(null)}})})}function JN(e,t,r){return Gr(this,void 0,void 0,function*(){const a=typeof t=="string"?JSON.parse(t):t;if(!a)return;const s=new Set;return new Promise((l,u)=>{var d,f,h,v;const g={};for(const[_,T]of Object.entries(a)){const k=typeof T=="string"?JSON.parse(T):T;if(k.lastAccessed){const E={createdAt:k.lastAccessed,updatedAt:k.lastAccessed,size:(v=(h=(f=(d=k.result)===null||d===void 0?void 0:d.store)===null||f===void 0?void 0:f.triples)===null||h===void 0?void 0:h.length)!==null&&v!==void 0?v:0};g[_]=E}const S=r.put(k,_);s.add(S)}const b={objects:g},w=r.put(b,hl);s.add(w);for(const _ of s)_.onsuccess=()=>{s.delete(_),s.size===0&&l()},_.onerror=T=>{u(T)}})})}function I1(e,t,r){return Gr(this,void 0,void 0,function*(){const a=r.put(t,e);return new Promise((s,l)=>{a.onsuccess=()=>s(),a.onerror=u=>l(u)})})}function ez(e,t){return Gr(this,void 0,void 0,function*(){const r=yield ZN(`instant_${e}_5`);if(!r)return;const a=yield new Promise((v,g)=>{const _=r.transaction(["kv"],"readonly").objectStore("kv").openCursor();_.onerror=k=>{g(k)};const T=[];_.onsuccess=()=>{const k=_.result;if(k){const S=k.key,E=k.value;T.push([S,E]),k.continue()}else v(T)},_.onerror=k=>{g(k)}}),s=t.transaction(["kv","querySubs"],"readwrite"),l=s.objectStore("kv"),u=s.objectStore("querySubs"),d=[],f={objects:{}};for(const[v,g]of a)switch(v){case"querySubs":{const b=JN(v,g,u);d.push(b);break}default:{const b=I1(v,g,l);d.push(b);const w={createdAt:Date.now(),updatedAt:Date.now(),size:0};f.objects[v]=w;break}}const h=I1(hl,f,l);d.push(h),yield Promise.all(d),yield new Promise((v,g)=>{s.oncomplete=b=>v(b),s.onerror=b=>g(b),s.onabort=b=>g(b)})})}const q1=new Map;class V_ extends VN{constructor(t,r){super(t,r),this.dbName=`instant_${t}_${QN}`,this._storeName=r,this._appId=t,this._dbPromise=this._init()}_init(){return new Promise((t,r)=>{let a=!1;const s=indexedDB.open(this.dbName,1);s.onerror=l=>{r(l)},s.onsuccess=l=>{const d=l.target.result;if(a){const f=ez(this._appId,d).catch(h=>{WN("Error upgrading store from version 5 to 6.")(h)});q1.set(this.dbName,f),f.then(()=>t(d)).catch(()=>t(d))}else{const f=q1.get(this.dbName);f?f.then(()=>t(d)).catch(()=>t(d)):t(d)}},s.onupgradeneeded=l=>{a=!0,this._upgradeStore(l)}})}_upgradeStore(t){const a=t.target.result;for(const s of KN)a.objectStoreNames.contains(s)||a.createObjectStore(s)}getItem(t){return Gr(this,void 0,void 0,function*(){const r=yield this._dbPromise;return new Promise((a,s)=>{const d=r.transaction([this._storeName],"readonly").objectStore(this._storeName).get(t);d.onerror=f=>{s(f)},d.onsuccess=f=>{d.result?a(d.result):a(null)}})})}setItem(t,r){return Gr(this,void 0,void 0,function*(){const a=yield this._dbPromise;return new Promise((s,l)=>{const f=a.transaction([this._storeName],"readwrite").objectStore(this._storeName).put(r,t);f.onerror=h=>{l(h)},f.onsuccess=h=>{s()}})})}multiSet(t){return Gr(this,void 0,void 0,function*(){const r=yield this._dbPromise;return new Promise((a,s)=>{const l=r.transaction([this._storeName],"readwrite"),u=l.objectStore(this._storeName),d=new Set;for(const[f,h]of t){const v=u.put(h,f);d.add(v)}for(const f of d)f.onerror=h=>{l.abort(),s(h)},f.onsuccess=h=>{d.delete(f),d.size===0&&a()}})})}removeItem(t){return Gr(this,void 0,void 0,function*(){const r=yield this._dbPromise;return new Promise((a,s)=>{const d=r.transaction([this._storeName],"readwrite").objectStore(this._storeName).delete(t);d.onerror=f=>{s(f)},d.onsuccess=f=>{a()}})})}getAllKeys(){return Gr(this,void 0,void 0,function*(){const t=yield this._dbPromise;return new Promise((r,a)=>{const u=t.transaction([this._storeName],"readonly").objectStore(this._storeName).getAllKeys();u.onerror=d=>{a(d)},u.onsuccess=d=>{r(u.result.filter(f=>typeof f=="string"))}})})}}var tz=function(e,t,r,a){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(v){try{h(a.next(v))}catch(g){u(g)}}function f(v){try{h(a.throw(v))}catch(g){u(g)}}function h(v){v.done?l(v.value):s(v.value).then(d,f)}h((a=a.apply(e,t||[])).next())})};class Q_{static getIsOnline(){return tz(this,void 0,void 0,function*(){return navigator.onLine})}static listen(t){const r=()=>{t(!0)},a=()=>{t(!1)};return addEventListener("online",r),addEventListener("offline",a),()=>{removeEventListener("online",r),removeEventListener("offline",a)}}}class Cl extends Error{constructor(t,r){super(t),this.hint=r;const a=new.target.prototype;Object.setPrototypeOf&&Object.setPrototypeOf(this,a),Error.captureStackTrace&&Error.captureStackTrace(this,Cl),this.name="InstantError"}get[Symbol.toStringTag](){return"InstantError"}}var nz=function(e,t,r,a){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(v){try{h(a.next(v))}catch(g){u(g)}}function f(v){try{h(a.throw(v))}catch(g){u(g)}}function h(v){v.done?l(v.value):s(v.value).then(d,f)}h((a=a.apply(e,t||[])).next())})};class Cd extends Cl{constructor(t){var r;const a=((r=t.body)===null||r===void 0?void 0:r.message)||`API Error (${t.status})`;super(a,t.body.hint);const s=new.target.prototype;Object.setPrototypeOf&&Object.setPrototypeOf(this,s),Error.captureStackTrace&&Error.captureStackTrace(this,Cd),this.name="InstantAPIError",this.status=t.status,this.body=t.body}get[Symbol.toStringTag](){return"InstantAPIError"}}function ur(e,t){return nz(this,void 0,void 0,function*(){const r=yield fetch(e,t),a=yield r.json();return r.status===200?Promise.resolve(a):Promise.reject(new Cd({status:r.status,body:a}))})}var Wo=function(e,t,r,a){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(v){try{h(a.next(v))}catch(g){u(g)}}function f(v){try{h(a.throw(v))}catch(g){u(g)}}function h(v){v.done?l(v.value):s(v.value).then(d,f)}h((a=a.apply(e,t||[])).next())})};function rz({apiURI:e,appId:t,email:r}){return ur(`${e}/runtime/auth/send_magic_code`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({"app-id":t,email:r})})}function iz(e){return Wo(this,arguments,void 0,function*({apiURI:t,appId:r,email:a,code:s,refreshToken:l}){return yield ur(`${t}/runtime/auth/verify_magic_code`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(Object.assign({"app-id":r,email:a,code:s},l?{"refresh-token":l}:{}))})})}function az(e){return Wo(this,arguments,void 0,function*({apiURI:t,appId:r,refreshToken:a}){return yield ur(`${t}/runtime/auth/verify_refresh_token`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({"app-id":r,"refresh-token":a})})})}function oz(e){return Wo(this,arguments,void 0,function*({apiURI:t,appId:r}){return yield ur(`${t}/runtime/auth/sign_in_guest`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({"app-id":r})})})}function F1(e){return Wo(this,arguments,void 0,function*({apiURI:t,appId:r,code:a,codeVerifier:s,refreshToken:l}){return yield ur(`${t}/runtime/oauth/token`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({app_id:r,code:a,code_verifier:s,refresh_token:l})})})}function sz(e){return Wo(this,arguments,void 0,function*({apiURI:t,appId:r,nonce:a,idToken:s,clientName:l,refreshToken:u}){return yield ur(`${t}/runtime/oauth/id_token`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({app_id:r,nonce:a,id_token:s,client_name:l,refresh_token:u})})})}function lz(e){return Wo(this,arguments,void 0,function*({apiURI:t,appId:r,refreshToken:a}){return yield ur(`${t}/runtime/signout`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({app_id:r,refresh_token:a})})})}var $l=function(e,t,r,a){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(v){try{h(a.next(v))}catch(g){u(g)}}function f(v){try{h(a.throw(v))}catch(g){u(g)}}function h(v){v.done?l(v.value):s(v.value).then(d,f)}h((a=a.apply(e,t||[])).next())})};function cz(e){return $l(this,arguments,void 0,function*({apiURI:t,appId:r,path:a,file:s,refreshToken:l,contentType:u,contentDisposition:d}){const f={app_id:r,path:a,authorization:`Bearer ${l}`,"content-type":u||s.type};return d&&(f["content-disposition"]=d),yield ur(`${t}/storage/upload`,{method:"PUT",headers:f,body:s})})}function uz(e){return $l(this,arguments,void 0,function*({apiURI:t,appId:r,path:a,refreshToken:s}){const{data:l}=yield ur(`${t}/storage/files?app_id=${r}&filename=${encodeURIComponent(a)}`,{method:"DELETE",headers:{"content-type":"application/json",authorization:`Bearer ${s}`}});return l})}function dz(e){return $l(this,arguments,void 0,function*({apiURI:t,appId:r,fileName:a,refreshToken:s,metadata:l={}}){const{data:u}=yield ur(`${t}/storage/signed-upload-url`,{method:"POST",headers:{"content-type":"application/json",authorization:`Bearer ${s}`},body:JSON.stringify({app_id:r,filename:a})});return u})}function fz(e,t){return $l(this,void 0,void 0,function*(){return(yield fetch(e,{method:"PUT",body:t,headers:{"Content-Type":t.type}})).ok})}function hz(e){return $l(this,arguments,void 0,function*({apiURI:t,appId:r,path:a,refreshToken:s}){const{data:l}=yield ur(`${t}/storage/signed-download-url?app_id=${r}&filename=${encodeURIComponent(a)}`,{method:"GET",headers:{"content-type":"application/json",authorization:`Bearer ${s}`}});return l})}let Hg=!1,K_=!1,W_=!1;typeof window<"u"&&typeof window.localStorage<"u"&&(Hg=!!window.localStorage.getItem("devBackend"),K_=!!window.localStorage.getItem("__instantLogging"),W_=!!window.localStorage.getItem("__devtoolLocalDash"));function B1(e,t){if(!t)return e;const r={};return t.forEach(a=>{r[a]=e[a]}),r}function pz(e,t,r){var a,s;const l={peers:{}};if(t&&"user"in t?t.user:!0){const d=B1((a=e.user)!==null&&a!==void 0?a:{},t==null?void 0:t.keys);l.user=Object.assign(Object.assign({},d),{peerId:r})}for(const d of Object.keys((s=e.peers)!==null&&s!==void 0?s:{})){const f=(t==null?void 0:t.peers)===void 0,h=Array.isArray(t==null?void 0:t.peers)&&(t==null?void 0:t.peers.includes(d));if(f||h){const v=B1(e.peers[d],t==null?void 0:t.keys);l.peers[d]=Object.assign(Object.assign({},v),{peerId:d})}}return l}function mz(e,t){if(e.isLoading!==t.isLoading||e.error!==t.error||(e.user||t.user)&&(!e.user||!t.user||!A1(e.user,t.user))||!T_(e.peers,t.peers))return!0;for(const a of Object.keys(e.peers))if(!A1(e.peers[a],t.peers[a]))return!0;return!1}class P1{constructor(){this.promise=new Promise((t,r)=>{this._resolve=t,this._reject=r})}resolve(t){this._resolve(t)}reject(t){this._reject(t)}}function Z_(e,t=[]){e.forEach(r=>{const{data:a}=r,{"datalog-result":s}=a,{"join-rows":l}=s;for(const u of l)for(const d of u)t.push(d);Z_(r["child-nodes"],t)})}function Y1(e){const t=[];return Z_(e,t),t}function X1(e){return Object.values(e.links).reduce((t,r)=>{var a,s,l,u;return(a=t[l=r.forward.on])!==null&&a!==void 0||(t[l]={}),t[r.forward.on][r.forward.label]={isForward:!0,isSingular:r.forward.has==="one",link:r},(s=t[u=r.reverse.on])!==null&&s!==void 0||(t[u]={}),t[r.reverse.on][r.reverse.label]={isForward:!1,isSingular:r.reverse.has==="one",link:r},t},{})}const J_="v0.22.73";function gz(e,t){return{info:e?(...r)=>console.info(...r,t()):()=>{},debug:e?(...r)=>console.debug(...r,t()):()=>{},error:e?(...r)=>console.error(...r,t()):()=>{}}}class Qt{constructor(t,r,a,s={indexed:!1,unique:!1}){this.valueType=t,this.required=r,this.isIndexed=a,this.config=s,this.metadata={}}clientRequired(){return new Qt(this.valueType,!1,this.isIndexed,this.config)}optional(){return new Qt(this.valueType,!1,this.isIndexed,this.config)}unique(){return new Qt(this.valueType,this.required,this.isIndexed,Object.assign(Object.assign({},this.config),{unique:!0}))}indexed(){return new Qt(this.valueType,this.required,!0,Object.assign(Object.assign({},this.config),{indexed:!0}))}}class Ad{constructor(t,r){this.attrs=t,this.links=r}asType(){return new Ad(this.attrs,this.links)}}class Md{constructor(t,r,a){this.entities=t,this.links=r,this.rooms=a}withRoomSchema(){return new Md(this.entities,this.links,{})}}class ot extends Error{constructor(t,r){const a=r?`At path '${r}': ${t}`:t;super(a),this.name="QueryValidationError"}}const G1=["where","order","limit","last","first","offset","after","before","fields","aggregate"],vz=e=>e.valueType||"unknown",eS=(e,t,r=!1)=>{if(r||e==null)return!0;switch(t){case"string":return typeof e=="string";case"number":return typeof e=="number"&&!isNaN(e);case"boolean":return typeof e=="boolean";case"date":return e instanceof Date||typeof e=="string"||typeof e=="number";default:return!0}},yz=(e,t,r,a,s,l,u)=>{const d=l.valueType==="json",f=(h,v,g)=>{if(!eS(g,v,d))throw new ot(`Invalid value for operator '${h}' on attribute '${a}' in entity '${s}'. Expected ${v}, but received: ${typeof g}`,u)};switch(e){case"in":case"$in":if(!Array.isArray(t))throw new ot(`Operator '${e}' for attribute '${a}' in entity '${s}' must be an array, but received: ${typeof t}`,u);for(const h of t)f(e,r,h);break;case"$not":case"$ne":case"$gt":case"$lt":case"$gte":case"$lte":f(e,r,t);break;case"$like":case"$ilike":if(f(e,"string",t),e==="$ilike"&&!l.isIndexed)throw new ot(`Operator '${e}' can only be used with indexed attributes, but '${a}' in entity '${s}' is not indexed`,u);break;case"$isNull":f(e,"boolean",t);break;default:throw new ot(`Unknown operator '${e}' for attribute '${a}' in entity '${s}'`,u)}},No=(e,t,r,a,s)=>{const l=vz(r),u=r.valueType==="json";if(typeof e=="object"&&e!==null&&!Array.isArray(e)){if(u)return;const f=e;for(const[h,v]of Object.entries(f))yz(h,v,l,t,a,r,`${s}.${h}`)}else if(!eS(e,l,u))throw new ot(`Invalid value for attribute '${t}' in entity '${a}'. Expected ${l}, but received: ${typeof e}`,s)},bz=(e,t,r,a,s)=>{const l=e.split(".");if(l.length<2)throw new ot(`Invalid dot notation path '${e}'. Must contain at least one dot.`,s);let u=r;for(let v=0;v<l.length-1;v++){const g=l[v],b=a.entities[u];if(!b)throw new ot(`Entity '${u}' does not exist in schema while traversing dot notation path '${e}'.`,s);const w=b.links[g];if(!w){const _=Object.keys(b.links);throw new ot(`Link '${g}' does not exist on entity '${u}' in dot notation path '${e}'. Available links: ${_.length>0?_.join(", "):"none"}`,s)}u=w.entityName}const d=l[l.length-1],f=a.entities[u];if(!f)throw new ot(`Target entity '${u}' does not exist in schema for dot notation path '${e}'.`,s);if(d==="id"){if(typeof t=="string"&&!Io(t))throw new ot(`Invalid value for id field in entity '${u}'. Expected a UUID, but received: ${t}`,s);No(t,e,new Qt("string",!1,!0),r,s);return}const h=f.attrs[d];if(Object.keys(f.links).includes(d)){if(typeof t=="string"&&!Io(t))throw new ot(`Invalid value for link '${d}' in entity '${u}'. Expected a UUID, but received: ${t}`,s);No(t,e,new Qt("string",!1,!0),r,s);return}if(!h){const v=Object.keys(f.attrs);throw new ot(`Attribute '${d}' does not exist on entity '${u}' in dot notation path '${e}'. Available attributes: ${v.length>0?v.join(", ")+", id":"id"}`,s)}No(t,e,h,r,s)},tS=(e,t,r,a)=>{for(const[s,l]of Object.entries(e)){if(s==="or"||s==="and"){if(Array.isArray(l))for(const h of l)typeof h=="object"&&h!==null&&tS(h,t,r,`${a}.${s}[${h}]`);continue}if(s==="id"){No(l,"id",new Qt("string",!1,!0),t,`${a}.id`);continue}if(s.includes(".")){bz(s,l,t,r,`${a}.${s}`);continue}const u=r.entities[t];if(!u)continue;const d=u.attrs[s],f=u.links[s];if(!d&&!f){const h=Object.keys(u.attrs),v=Object.keys(u.links);throw new ot(`Attribute or link '${s}' does not exist on entity '${t}'. Available attributes: ${h.length>0?h.join(", "):"none"}. Available links: ${v.length>0?v.join(", "):"none"}`,`${a}.${s}`)}if(d)No(l,s,d,t,`${a}.${s}`);else if(f){if(typeof l=="string"&&!Io(l))throw new ot(`Invalid value for link '${s}' in entity '${t}'. Expected a UUID, but received: ${l}`,`${a}.${s}`);const h=new Qt("string",!1,!0);No(l,s,h,t,`${a}.${s}`)}}},wz=(e,t,r,a,s=0)=>{for(const u of Object.keys(e))if(!G1.includes(u))throw new ot(`Invalid query parameter '${u}' in $ object. Valid parameters are: ${G1.join(", ")}. Found: ${u}`,a);const l=["offset","before","after","first","last"];for(const u of l)if(e[u]!==void 0&&s>0)throw new ot(`'${u}' can only be used on top-level namespaces. It cannot be used in nested queries.`,a);if(e.where&&r){if(typeof e.where!="object"||e.where===null)throw new ot(`'where' clause must be an object in entity '${t}', but received: ${typeof e.where}`,a?`${a}.where`:void 0);tS(e.where,t,r,a?`${a}.where`:"where")}},nS=(e,t,r,a,s=0)=>{var l;if(!e||typeof e!="object")throw new ot(`Query part for entity '${t}' must be an object, but received: ${typeof e}`,a);for(const u of Object.keys(e))if(u!=="$"){if(r&&!(u in r.entities[t].links)){const f=Object.keys(r.entities[t].links);throw new ot(`Link '${u}' does not exist on entity '${t}'. Available links: ${f.length>0?f.join(", "):"none"}`,`${a}.${u}`)}const d=e[u];if(typeof d=="object"&&d!==null){const f=(l=r==null?void 0:r.entities[t].links[u])===null||l===void 0?void 0:l.entityName;f&&nS(d,f,r,`${a}.${u}`,s+1)}}else{const d=e[u];if(typeof d!="object"||d===null)throw new ot(`Query parameter '$' must be an object in entity '${t}', but received: ${typeof d}`,`${a}.$`);wz(d,t,r,`${a}.$`,s)}},V1=(e,t)=>{if(typeof e!="object"||e===null)throw new ot(`Query must be an object, but received: ${typeof e}${e===null?" (null)":""}`);if(Array.isArray(e))throw new ot(`Query must be an object, but received: ${typeof e}`);const r=e;for(const a of Object.keys(r)){if(Array.isArray(e[a]))throw new ot(`Query keys must be strings, but found key of type: ${typeof a}`,a);if(typeof a!="string")throw new ot(`Query keys must be strings, but found key of type: ${typeof a}`,a);if(a!=="$$ruleParams"){if(t&&!t.entities[a]){const s=Object.keys(t.entities);throw new ot(`Entity '${a}' does not exist in schema. Available entities: ${s.length>0?s.join(", "):"none"}`,a)}nS(r[a],a,t,a,0)}}},Q1=e=>typeof e!="string"?!1:id(e)?!0:Io(e);class Bn extends Error{constructor(t){super(t),this.name="TransactionValidationError"}}const rS=e=>e.length>0?e.join(", "):"none",xz=(e,t)=>new Bn(`Entity '${e}' does not exist in schema. Available entities: ${rS(t)}`),K1={string:e=>typeof e=="string",number:e=>typeof e=="number"&&!isNaN(e),boolean:e=>typeof e=="boolean",date:e=>e instanceof Date||typeof e=="string"||typeof e=="number",json:()=>!0},_z=(e,t)=>{var r,a;return e==null?!0:(a=(r=K1[t.valueType])===null||r===void 0?void 0:r.call(K1,e))!==null&&a!==void 0?a:!1},iS=(e,t)=>{const r=t.entities[e];if(!r)throw xz(e,Object.keys(t.entities));return r},Up=(e,t,r)=>{const a=iS(e,r);if(typeof t!="object"||t===null)throw new Bn(`Arguments for data operation on entity '${e}' must be an object, but received: ${typeof t}`);for(const[s,l]of Object.entries(t)){if(s==="id")continue;const u=a.attrs[s];if(u&&!_z(l,u))throw new Bn(`Invalid value for attribute '${s}' in entity '${e}'. Expected ${u.valueType}, but received: ${typeof l}`)}},W1=(e,t,r)=>{const a=iS(e,r);if(typeof t!="object"||t===null)throw new Bn(`Arguments for link operation on entity '${e}' must be an object, but received: ${typeof t}`);for(const[s,l]of Object.entries(t)){if(!a.links[s]){const d=Object.keys(a.links);throw new Bn(`Link '${s}' does not exist on entity '${e}'. Available links: ${rS(d)}`)}if(l!=null){if(Array.isArray(l)){for(const d of l)if(!Q1(d))throw new Bn(`Invalid entity ID in link '${s}' for entity '${e}'. Expected a UUID or a lookup, but received: ${d}`)}else if(!Q1(l))throw new Bn(`Invalid UUID in link '${s}' for entity '${e}'. Expected a UUID, but received: ${l}`)}}},Sz={create:Up,update:Up,merge:Up,link:W1,unlink:W1,delete:()=>{}},Tz=(e,t)=>{if(!t)return;const[r,a,s,l]=e;if(!Array.isArray(s)&&!Io(s))throw new Bn(`Invalid id for entity '${a}'. Expected a UUID, but received: ${s}`);if(typeof a!="string")throw new Bn(`Entity name must be a string, but received: ${typeof a}`);const u=Sz[r];u&&l!==void 0&&u(a,l,t)},kz=(e,t)=>{const r=Array.isArray(e)?e:[e];for(const a of r){if(!a||typeof a!="object")throw new Bn(`Transaction chunk must be an object, but received: ${typeof a}`);if(!Array.isArray(a.__ops))throw new Bn(`Transaction chunk must have __ops array, but received: ${typeof a.__ops}`);for(const s of a.__ops){if(!Array.isArray(s))throw new Bn(`Transaction operation must be an array, but received: ${typeof s}`);Tz(s,t)}}};var Z1=function(e,t,r,a){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(v){try{h(a.next(v))}catch(g){u(g)}}function f(v){try{h(a.throw(v))}catch(g){u(g)}}function h(v){v.done?l(v.value):s(v.value).then(d,f)}h((a=a.apply(e,t||[])).next())})};let aS=0;class J1{constructor(t){this.type="ws",this.id=`${this.type}_${aS++}`,this.conn=new WebSocket(t),this.conn.onopen=r=>{this.onopen&&this.onopen({target:this})},this.conn.onmessage=r=>{this.onmessage&&this.onmessage({target:this,message:JSON.parse(r.data.toString())})},this.conn.onclose=r=>{this.onclose&&this.onclose({target:this})},this.conn.onerror=r=>{this.onerror&&this.onerror({target:this})}}close(){this.conn.close()}isOpen(){var t;return this.conn.readyState===((t=WebSocket.OPEN)!==null&&t!==void 0?t:1)}isConnecting(){var t;return this.conn.readyState===((t=WebSocket.CONNECTING)!==null&&t!==void 0?t:0)}send(t){return this.conn.send(JSON.stringify(t))}}class Ez{constructor(t,r){this.type="sse",this.initParams=null,this.sendQueue=[],this.closeFired=!1,this.sseInitTimeout=void 0,this.id=`${this.type}_${aS++}`,this.url=r,this.ES=t,this.conn=new t(r),this.sseInitTimeout=setTimeout(()=>{this.initParams||this.handleError()},1e4),this.conn.onmessage=a=>{const s=JSON.parse(a.data);if(s.op==="sse-init"){this.initParams={machineId:s["machine-id"],sessionId:s["session-id"],sseToken:s["sse-token"]},this.onopen&&this.onopen({target:this}),clearTimeout(this.sseInitTimeout);return}this.onmessage&&this.onmessage({target:this,message:s})},this.conn.onerror=a=>{this.handleError()}}handleError(){try{this.onerror&&this.onerror({target:this})}finally{this.handleClose()}}handleClose(){this.conn.close(),this.onclose&&!this.closeFired&&(this.closeFired=!0,this.onclose({target:this}))}postMessages(t){return Z1(this,void 0,void 0,function*(){var r,a,s;try{(yield fetch(this.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({machine_id:(r=this.initParams)===null||r===void 0?void 0:r.machineId,session_id:(a=this.initParams)===null||a===void 0?void 0:a.sessionId,sse_token:(s=this.initParams)===null||s===void 0?void 0:s.sseToken,messages:t})})).ok||this.handleError()}catch{this.handleError()}})}flushQueue(){return Z1(this,void 0,void 0,function*(){if(this.sendPromise||!this.sendQueue.length)return;const t=this.sendQueue;this.sendQueue=[];const r=this.postMessages(t);this.sendPromise=r,r.then(()=>{this.sendPromise=null,this.flushQueue()})})}send(t){if(!this.isOpen()||!this.initParams)throw this.isConnecting()?new Error("Failed to execute 'send' on 'EventSource': Still in CONNECTING state."):this.conn.readyState===this.ES.CLOSED?new Error("EventSource is already in CLOSING or CLOSED state."):new Error("EventSource is in invalid state.");this.sendQueue.push(t),this.flushQueue()}isOpen(){return this.conn.readyState===this.ES.OPEN&&this.initParams!==null}isConnecting(){return this.conn.readyState===this.ES.CONNECTING||this.conn.readyState===this.ES.OPEN&&this.initParams===null}close(){this.handleClose()}}var ex=function(e,t,r,a){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(v){try{h(a.next(v))}catch(g){u(g)}}function f(v){try{h(a.throw(v))}catch(g){u(g)}}function h(v){v.done?l(v.value):s(v.value).then(d,f)}h((a=a.apply(e,t||[])).next())})};function Cz(e,t){const r=e.values;if(r)for(const a of r.entities||[])a.store.useDateObjects=t,a.store.attrs=r.attrs,a.store=O_(a.store);return e}function Az(e,t){var r,a;if(!((r=t.values)===null||r===void 0)&&r.entities){const s=[];for(const l of(a=t.values)===null||a===void 0?void 0:a.entities){const u=M_(l.store);delete u.attrs,s.push(Object.assign(Object.assign({},l),{store:u}))}return Object.assign(Object.assign({},t),{values:Object.assign(Object.assign({},t.values),{entities:s})})}else return t}function Mz(e,t,r){var a,s;const l=(a=t==null?void 0:t.state)===null||a===void 0?void 0:a.txId,u=(s=r==null?void 0:r.state)===null||s===void 0?void 0:s.txId;return l&&(!u||l>u)?t:u&&(!l||u>l)?r:t||r}function $p(e,t){return B_({store:t,pageInfo:null,aggregate:null},e.query).data[e.table][0]}function tx(e,t,r){var a;const s=(a=Hi(t,e.table,"id"))===null||a===void 0?void 0:a.id;if(!s)return-1;const l=Ko(t.eav,[r,s,r]);return l?l[3]:-1}function nx(e,t){for(const{action:r,triple:a}of t)switch(r){case"added":j_(e,a);break;case"removed":N_(e,a);break}}function Oz(e,t){var r,a,s,l;const u={};for(const{action:d,triple:f}of t){const[h,v,g]=f,b=(a=(r=e.attrs[v])===null||r===void 0?void 0:r["forward-identity"])===null||a===void 0?void 0:a[2];if(!b)continue;const w=(s=u[h])!==null&&s!==void 0?s:{};u[h]=w;const _=(l=w[b])!==null&&l!==void 0?l:{};switch(w[b]=_,d){case"added":_.newValue=g;break;case"removed":_.oldValue===void 0&&(_.oldValue=g);break}}for(const d of Object.keys(u)){const{oldValue:f,newValue:h}=u[d];f===h&&delete u[d]}return u}function gu(e,t){return{[e.table]:t.map(r=>r.entity)}}function Nz(e,t){var r;if(e.orderFieldType)return e.orderFieldType;const a=e.orderField==="serverCreatedAt"?"number":(r=Hi(t([]),e.table,e.orderField))===null||r===void 0?void 0:r["checked-data-type"];return e.orderFieldType=a,a}function zz(e,t,r){const a=t;if(e.orderField==="serverCreatedAt"){r.sort(e.orderDirection==="asc"?function(u,d){return al(u.entity.id,u.serverCreatedAt,d.entity.id,d.serverCreatedAt,a)}:function(u,d){return al(d.entity.id,d.serverCreatedAt,u.entity.id,u.serverCreatedAt,a)});return}const s=e.orderField;r.sort(e.orderDirection==="asc"?function(u,d){return al(u.entity.id,u.entity[s],d.entity.id,d.entity[s],a)}:function(u,d){return al(d.entity.id,d.entity[s],u.entity.id,u.entity[s],a)})}var da;(function(e){e.InitialSyncBatch="InitialSyncBatch",e.InitialSyncComplete="InitialSyncComplete",e.LoadFromStorage="LoadFromStorage",e.SyncTransaction="SyncTransaction",e.Error="Error"})(da||(da={}));class jz{constructor(t,r,a,s,l){this.callbacks={},this.idToHash={},this.trySend=t,this.config=a,this.log=s,this.createStore=l,this.subs=new Hm({persister:r,merge:Mz,serialize:Az,parse:(u,d)=>Cz(d,this.config.useDateObjects),objectSize:u=>{var d;return((d=u.values)===null||d===void 0?void 0:d.entities.length)||0},logger:s,gc:{maxAgeMs:1e3*60*60*24*7*52,maxEntries:1e3,maxSize:1e6}})}beforeUnload(){this.subs.flush()}subscribe(t,r){const a=Pt(t);return this.callbacks[a]=this.callbacks[a]||[],this.callbacks[a].push(r),this.initSubscription(t,a,r),s=>{this.unsubscribe(a,r,s==null?void 0:s.keepSubscription)}}unsubscribe(t,r,a){const s=(this.callbacks[t]||[]).filter(l=>l!==r);if(this.callbacks[t]=s,!s.length){delete this.callbacks[t];const l=this.subs.currentValue[t];l!=null&&l.state&&this.clearSubscriptionData(l.state.subscriptionId,!!a),a||this.subs.updateInPlace(u=>{delete u[t]})}}sendStart(t){this.trySend(Je(),{op:"start-sync",q:t})}sendResync(t,r,a){this.idToHash[r.subscriptionId]=t.hash,this.trySend(r.subscriptionId,{op:"resync-table","subscription-id":r.subscriptionId,"tx-id":a,token:r.token})}sendRemove(t,r){this.trySend(Je(),{op:"remove-sync","subscription-id":t.subscriptionId,"keep-subscription":r})}initSubscription(t,r,a){return ex(this,void 0,void 0,function*(){var s,l,u,d;yield this.subs.waitForKeyToLoad(r);const f=this.subs.currentValue[r];if(f&&f.state&&f.state.txId){this.sendResync(f,f.state,f.state.txId),!((s=f.values)===null||s===void 0)&&s.entities&&a&&a({type:da.LoadFromStorage,data:gu(f,(l=f.values)===null||l===void 0?void 0:l.entities)});return}const h=Object.keys(t)[0],v=((d=(u=t[h])===null||u===void 0?void 0:u.$)===null||d===void 0?void 0:d.order)||{serverCreatedAt:"asc"},[g,b]=Object.entries(v)[0];this.subs.updateInPlace(w=>{w[r]={query:t,hash:r,table:h,orderDirection:b,orderField:g,createdAt:Date.now(),updatedAt:Date.now()}}),this.sendStart(t)})}flushPending(){return ex(this,void 0,void 0,function*(){for(const t of Object.keys(this.callbacks)){yield this.subs.waitForKeyToLoad(t);const r=this.subs.currentValue[t];r?yield this.initSubscription(r.query,r.hash):this.log.error("Missing sub for hash in flushPending",t)}})}onStartSyncOk(t){const r=t["subscription-id"],a=t.q,s=Pt(a);this.idToHash[r]=s,this.subs.updateInPlace(l=>{const u=l[s];if(!u)return this.log.error("Missing sub for hash",s,"subscription-id",r,"query",a),l;u.state={subscriptionId:r,token:t.token}})}notifyCbs(t,r){for(const a of this.callbacks[t]||[])a(r)}onSyncLoadBatch(t){var r;const a=t["subscription-id"],s=t["join-rows"],l=this.idToHash[a];if(!l){this.log.error("Missing hash for subscription",t);return}const u=[],d=this.subs.currentValue[l];if(!d){this.log.error("Missing sub for hash",l,t);return}const f=(r=d.values)!==null&&r!==void 0?r:{entities:[],attrs:this.createStore([]).attrs};d.values=f;const h=f.entities;for(const v of s){const g=this.createStore(v);f.attrs=g.attrs;const b=$p(d,g);h.push({store:g,entity:b,serverCreatedAt:tx(d,g,b.id)}),u.push(b)}this.subs.updateInPlace(v=>{v[l]=d,v[l].updatedAt=Date.now()}),d.values&&this.notifyCbs(l,{type:da.InitialSyncBatch,data:gu(d,d.values.entities),batch:u})}onSyncInitFinish(t){var r;const a=t["subscription-id"],s=this.idToHash[a];if(!s){this.log.error("Missing hash for subscription",t);return}this.subs.updateInPlace(u=>{const d=u[s];if(!d){this.log.error("Missing sub for hash",s,t);return}const f=d.state;if(!f)return this.log.error("Sub never set init, missing result",d,t),u;f.txId=t["tx-id"],d.updatedAt=Date.now()});const l=this.subs.currentValue[s];l&&this.notifyCbs(s,{type:da.InitialSyncComplete,data:gu(l,((r=l.values)===null||r===void 0?void 0:r.entities)||[])})}onSyncUpdateTriples(t){var r,a,s;const l=t["subscription-id"],u=this.idToHash[l];if(!u){this.log.error("Missing hash for subscription",t);return}const d=this.subs.currentValue[u];if(!d){this.log.error("Missing sub for hash",u,t);return}const f=d.state;if(!f){this.log.error("Missing state for sub",d,t);return}for(const h of t.txes){if(f.txId&&f.txId>=h["tx-id"])continue;f.txId=h["tx-id"];const v=[],g={};for(const E of h.changes){const M=(r=g[E.triple[0]])!==null&&r!==void 0?r:[];g[E.triple[0]]=M,M.push(E)}const b=(a=d.values)!==null&&a!==void 0?a:{entities:[],attrs:this.createStore([]).attrs},w=b.entities;d.values=b;const _=[];e:for(const[E,M]of Object.entries(g))for(let z=0;z<w.length;z++){const R=w[z];if(fO(R.store,E)){nx(R.store,M);const F=$p(d,R.store),I=Oz(R.store,M)[E];F?(_.push({oldEntity:R.entity,newEntity:F,changedFields:I||{}}),R.entity=F):v.push(z),delete g[E];continue e}}const T=[];for(const[E,M]of Object.entries(g)){const z=this.createStore([]);b.attrs=z.attrs,nx(z,M);const R=$p(d,z);if(!R){this.log.error("No entity found after applying change",{sub:d,changes:M,store:z});continue}w.push({store:z,entity:R,serverCreatedAt:tx(d,z,R.id)}),T.push(R)}const k=[];for(const E of v.sort().reverse())k.push(w[E].entity),w.splice(E,1);const S=Nz(d,this.createStore);zz(d,S,w),this.notifyCbs(u,{type:da.SyncTransaction,data:gu(d,(s=d.values)===null||s===void 0?void 0:s.entities),added:T,removed:k,updated:_})}this.subs.updateInPlace(h=>{h[u]=d,h[u].updatedAt=Date.now()})}clearSubscriptionData(t,r){const a=this.idToHash[t];if(a){delete this.idToHash[t];const s=this.subs.currentValue[a];if(s.state&&this.sendRemove(s.state,r),r?this.subs.unloadKey(a):this.subs.updateInPlace(l=>{delete l[a]}),s)return s}}onStartSyncError(t){const r=Pt(t["original-event"].q),a={message:t.message||"Uh-oh, something went wrong. Ping Joe & Stopa.",status:t.status,type:t.type,hint:t.hint},s=Object.keys(t["original-event"].q)[0];this.notifyCbs(r,{type:da.Error,data:{[s]:[]},error:a})}onResyncError(t){const r=t["original-event"]["subscription-id"],a=this.clearSubscriptionData(r,!1);a&&this.initSubscription(a.query,a.hash)}}var Tt=function(e,t,r,a){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(v){try{h(a.next(v))}catch(g){u(g)}}function f(v){try{h(a.throw(v))}catch(g){u(g)}}function h(v){v.done?l(v.value):s(v.value).then(d,f)}h((a=a.apply(e,t||[])).next())})},Dz=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)t.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(r[a[s]]=e[a[s]]);return r};const Yr={CONNECTING:"connecting",OPENED:"opened",AUTHENTICATED:"authenticated",CLOSED:"closed",ERRORED:"errored"},Rz=3e4,Uz=3e4,$z=200,Lz={apiURI:"https://api.instantdb.com",websocketURI:"wss://api.instantdb.com/runtime/session"},Lp="_instant_oauth_redirect",Ws="currentUser";function Hz({transportType:e,appId:t,apiURI:r,wsURI:a,EventSourceImpl:s}){if(!s)return new J1(`${a}?app_id=${t}`);switch(e){case"ws":return new J1(`${a}?app_id=${t}`);case"sse":return new Ez(s,`${r}/runtime/sse?app_id=${t}`);default:throw new Error("Unknown transport type "+e)}}function Iz(){return typeof window<"u"||typeof chrome<"u"}const rx={"set-presence":!0,"set-presence-ok":!0,"refresh-presence":!0,"patch-presence":!0};function qz(e,t){var r;const a=typeof e=="string"?JSON.parse(e):e;if(!((r=a==null?void 0:a.result)===null||r===void 0)&&r.store){const s=a.result.store;a.result.store=O_(Object.assign(Object.assign({},s),{useDateObjects:t}))}return a}function Fz(e,t){var r;const a=Object.assign({},t);return!((r=t.result)===null||r===void 0)&&r.store&&(a.result=Object.assign(Object.assign({},t.result),{store:M_(t.result.store)})),a}function Bz(e,t){switch(e){case"pendingMutations":return new Map(typeof t=="string"?JSON.parse(t):t);default:return t}}function Pz(e,t){switch(e){case"pendingMutations":return[...t.entries()];default:return t}}function Yz(e,t,r){const a=t==null?void 0:t.result,s=r==null?void 0:r.result;return a&&!s&&r&&(r.result=a),r||t}function ix(e){return[...e].sort((t,r)=>{const[a,s]=t,[l,u]=r,d=s.order||0,f=u.order||0;return d==f?a<l?-1:a>l?1:0:d-f})}class Xz{constructor(t,r=V_,a=Q_,s,l){var u,d,f;if(this._isOnline=!0,this._isShutdown=!1,this.status=Yr.CONNECTING,this.queryCbs={},this.queryOnceDfds={},this.authCbs=[],this.attrsCbs=[],this.mutationErrorCbs=[],this.connectionStatusCbs=[],this.mutationDeferredStore=new Map,this._reconnectTimeoutId=null,this._reconnectTimeoutMs=0,this._transportType="ws",this._wsOk=null,this._localIdPromises={},this._errorMessage=null,this._oauthCallbackResponse=null,this._linkIndex=null,this._rooms={},this._roomsPendingLeave={},this._presence={},this._broadcastQueue=[],this._broadcastSubs={},this._currentUserCached={isLoading:!0,error:void 0,user:void 0},this._beforeUnloadCbs=[],this._dataForQueryCache={},this._inFlightMutationEventIds=new Set,this._onMergeKv=(h,v,g)=>{var b,w;switch(h){case"pendingMutations":{const _=(b=v==null?void 0:v.entries())!==null&&b!==void 0?b:[],T=(w=g==null?void 0:g.entries())!==null&&w!==void 0?w:[],k=new Map([..._,...T]);return(v?this._rewriteMutationsSorted(this.attrs,v):[]).forEach(([E,M])=>{var z;!(!((z=g==null?void 0:g.pendingMutations)===null||z===void 0)&&z.has(E))&&!M["tx-id"]&&this._sendMutation(E,M)}),k}default:return g||v}},this.getPreviousResult=h=>{const v=Pt(h);return this.dataForQuery(v)},this.notifyOne=h=>{var v,g;const b=(v=this.queryCbs[h])!==null&&v!==void 0?v:[],w=(g=this._dataForQueryCache[h])===null||g===void 0?void 0:g.data,_=this.dataForQuery(h);_&&(Uu(_,w)||b.forEach(T=>T.cb(_)))},this.notifyOneQueryOnce=h=>{var v;const g=(v=this.queryOnceDfds[h])!==null&&v!==void 0?v:[],b=this.dataForQuery(h);g.forEach(w=>{this._completeQueryOnce(w.q,h,w.dfd),w.dfd.resolve(b)})},this.notifyQueryError=(h,v)=>{(this.queryCbs[h]||[]).forEach(b=>b.cb({error:v}))},this.pushTx=h=>{this.config.disableValidation||kz(h,this.config.schema);try{const v=GN({attrs:this.optimisticAttrs(),schema:this.config.schema,stores:Object.values(this.querySubs.currentValue).map(g=>{var b;return(b=g==null?void 0:g.result)===null||b===void 0?void 0:b.store}),useDateObjects:this.config.useDateObjects},h);return this.pushOps(v)}catch(v){return this.pushOps([],v)}},this.pushOps=(h,v)=>{const g=Je(),b=[...this._pendingMutations().values()],w=Math.max(0,...b.map(k=>k.order||0))+1,_={op:"transact","tx-steps":h,created:Date.now(),error:v,order:w};this._updatePendingMutations(k=>{k.set(g,_)});const T=new P1;return this.mutationDeferredStore.set(g,T),this._sendMutation(g,_),this.notifyAll(),T.promise},this._transportOnOpen=h=>{const v=h.target;if(this._transport!==v){this._log.info("[socket][open]",v.id,"skip; this is no longer the current transport");return}this._log.info("[socket][open]",this._transport.id),this._setStatus(Yr.OPENED),this.getCurrentUser().then(g=>{var b;this._trySend(Je(),{op:"init","app-id":this.config.appId,"refresh-token":(b=g.user)===null||b===void 0?void 0:b.refresh_token,versions:this.versions,"__admin-token":this.config.__adminToken})}).catch(g=>{this._log.error("[socket][error]",v.id,g)})},this._transportOnMessage=h=>{const v=h.target,g=h.message;if(this._transport!==v){this._log.info("[socket][message]",v.id,g,"skip; this is no longer the current transport");return}!this._wsOk&&v.type==="ws"&&(this._wsOk=!0),this._transportType="ws",this._handleReceive(v.id,h.message)},this._transportOnError=h=>{const v=h.target;if(this._transport!==v){this._log.info("[socket][error]",v.id,"skip; this is no longer the current transport");return}this._log.error("[socket][error]",v.id,h)},this._scheduleReconnect=()=>{!this._wsOk&&this._transportType!=="sse"&&(this._transportType="sse",this._reconnectTimeoutMs=0),setTimeout(()=>{if(this._reconnectTimeoutMs=Math.min(this._reconnectTimeoutMs+1e3,1e4),!this._isOnline){this._log.info("[socket][close]",this._transport.id,"we are offline, no need to start socket");return}this._startSocket()},this._reconnectTimeoutMs)},this._transportOnClose=h=>{const v=h.target;if(this._transport!==v){this._log.info("[socket][close]",v.id,"skip; this is no longer the current transport");return}this._setStatus(Yr.CLOSED);for(const g of Object.values(this._rooms))g.isConnected=!1;if(this._isShutdown){this._log.info("[socket][close]",v.id,"Reactor has been shut down and will not reconnect");return}this._log.info("[socket][close]",v.id,"schedule reconnect, ms =",this._reconnectTimeoutMs),this._scheduleReconnect()},this._EventSource=l,this.config=Object.assign(Object.assign({},Lz),t),this.queryCacheLimit=(u=this.config.queryCacheLimit)!==null&&u!==void 0?u:10,this._pendingTxCleanupTimeout=(d=this.config.pendingTxCleanupTimeout)!==null&&d!==void 0?d:Uz,this._pendingMutationCleanupThreshold=(f=this.config.pendingMutationCleanupThreshold)!==null&&f!==void 0?f:$z,this._log=gz(t.verbose||Hg||K_,()=>this._reactorStats()),this.versions=Object.assign(Object.assign({},s||{}),{"@instantdb/core":J_}),this.config.schema&&(this._linkIndex=X1(this.config.schema)),!!Iz()){if(!t.appId)throw new Error("Instant must be initialized with an appId.");if(!Io(t.appId))throw new Error(`Instant must be initialized with a valid appId. \`${t.appId}\` is not a valid uuid.`);typeof BroadcastChannel=="function"&&(this._broadcastChannel=new BroadcastChannel("@instantdb"),this._broadcastChannel.addEventListener("message",h=>Tt(this,void 0,void 0,function*(){var v;try{if(((v=h.data)===null||v===void 0?void 0:v.type)==="auth"){const g=yield this.getCurrentUser();this.updateUser(g.user)}}catch(g){this._log.error("[error] handle broadcast channel",g)}}))),this._initStorage(r),this._syncTable=new jz(this._trySendAuthed.bind(this),new r(this.config.appId,"syncSubs"),{useDateObjects:this.config.useDateObjects},this._log,h=>$u(this.attrs,h,this.config.enableCardinalityInference,this._linkIndex,this.config.useDateObjects)),this._oauthCallbackResponse=this._oauthLoginInit(),this.getCurrentUser(),a.getIsOnline().then(h=>{this._isOnline=h,this._startSocket(),a.listen(v=>{v!==this._isOnline&&(this._log.info("[network] online =",v),this._isOnline=v,this._isOnline?this._startSocket():(this._log.info("Changing status from",this.status,"to",Yr.CLOSED),this._setStatus(Yr.CLOSED)))})}),typeof addEventListener<"u"&&(this._beforeUnload=this._beforeUnload.bind(this),addEventListener("beforeunload",this._beforeUnload))}}updateSchema(t){this.config=Object.assign(Object.assign({},this.config),{schema:t,cardinalityInference:!!t}),this._linkIndex=t?X1(this.config.schema):null}_reactorStats(){return{inFlightMutationCount:this._inFlightMutationEventIds.size,pendingMutationCount:this._pendingMutations().size,transportType:this._transportType}}_onQuerySubLoaded(t){this.kv.waitForKeyToLoad("pendingMutations").then(()=>this.notifyOne(t))}_initStorage(t){this.querySubs=new Hm({persister:new t(this.config.appId,"querySubs"),merge:Yz,serialize:Fz,parse:(r,a)=>qz(a,this.config.useDateObjects),objectSize:r=>{var a,s,l,u;return(u=(l=(s=(a=r.result)===null||a===void 0?void 0:a.store)===null||s===void 0?void 0:s.triples)===null||l===void 0?void 0:l.length)!==null&&u!==void 0?u:0},logger:this._log,preloadEntryCount:10,gc:{maxAgeMs:1e3*60*60*24*7*52,maxEntries:1e3,maxSize:1e6}}),this.querySubs.onKeyLoaded=r=>this._onQuerySubLoaded(r),this.kv=new Hm({persister:new t(this.config.appId,"kv"),merge:this._onMergeKv,serialize:Pz,parse:Bz,objectSize:()=>0,logger:this._log,saveThrottleMs:100,idleCallbackMaxWaitMs:100,gc:null}),this.kv.onKeyLoaded=r=>{r==="pendingMutations"&&this.notifyAll()},this.kv.waitForKeyToLoad("pendingMutations"),this.kv.waitForKeyToLoad(Ws),this._beforeUnloadCbs.push(()=>{this.kv.flush(),this.querySubs.flush()})}_beforeUnload(){for(const t of this._beforeUnloadCbs)t();this._syncTable.beforeUnload()}_finishTransaction(t,r,a){const s=this.mutationDeferredStore.get(r);this.mutationDeferredStore.delete(r);const l=t!=="error"&&t!=="timeout";if(!s&&!l&&console.error("Mutation failed",Object.assign({status:t,eventId:r},a)),!!s)if(l)s.resolve({status:t,eventId:r});else if(a!=null&&a.type){const{status:u}=a,d=Dz(a,["status"]);s.reject(new Cd({body:d,status:u??0}))}else s.reject(new Cl((a==null?void 0:a.message)||"Unknown error",a==null?void 0:a.hint))}_setStatus(t,r){this.status=t,this._errorMessage=r,this.notifyConnectionStatusSubs(t)}_flushEnqueuedRoomData(t){var r,a;const s=(a=(r=this._presence[t])===null||r===void 0?void 0:r.result)===null||a===void 0?void 0:a.user,l=this._broadcastQueue[t];if(this._broadcastQueue[t]=[],s&&this._trySetPresence(t,s),l)for(const u of l){const{topic:d,roomType:f,data:h}=u;this._tryBroadcast(t,f,d,h)}}_handleReceive(t,r){var a,s,l,u,d,f;const h=!!this.config.schema&&("cardinalityInference"in this.config?!!this.config.cardinalityInference:!0);switch(rx[r.op]||this._log.info("[receive]",t,r.op,r),r.op){case"init-ok":{this._setStatus(Yr.AUTHENTICATED),this._reconnectTimeoutMs=0,this._setAttrs(r.attrs),this._flushPendingMessages(),this._sessionId=r["session-id"];for(const b of Object.keys(this._rooms)){const w=(s=(a=this._presence[b])===null||a===void 0?void 0:a.result)===null||s===void 0?void 0:s.user;this._tryJoinRoom(b,w)}break}case"add-query-exists":{this.notifyOneQueryOnce(Pt(r.q));break}case"add-query-ok":{const{q:b,result:w}=r,_=Pt(b);if(!this._hasQueryListeners()&&!this.querySubs.currentValue[_])break;const T=(u=(l=w==null?void 0:w[0])===null||l===void 0?void 0:l.data)===null||u===void 0?void 0:u["page-info"],k=(f=(d=w==null?void 0:w[0])===null||d===void 0?void 0:d.data)===null||f===void 0?void 0:f.aggregate,S=Y1(w),E=$u(this.attrs,S,h,this._linkIndex,this.config.useDateObjects);this.querySubs.updateInPlace(M=>{if(!M[_]){this._log.info("Missing value in querySubs",{hash:_,q:b});return}M[_].result={store:E,pageInfo:T,aggregate:k,processedTxId:r["processed-tx-id"]}}),this._cleanupPendingMutationsQueries(),this.notifyOne(_),this.notifyOneQueryOnce(_),this._cleanupPendingMutationsTimeout();break}case"start-sync-ok":{this._syncTable.onStartSyncOk(r);break}case"sync-load-batch":{this._syncTable.onSyncLoadBatch(r);break}case"sync-init-finish":{this._syncTable.onSyncInitFinish(r);break}case"sync-update-triples":{this._syncTable.onSyncUpdateTriples(r);break}case"refresh-ok":{const{computations:b,attrs:w}=r,_=r["processed-tx-id"];w&&this._setAttrs(w),this._cleanupPendingMutationsTimeout();const T=this._rewriteMutations(this.attrs,this._pendingMutations(),_);T!==this._pendingMutations()&&this.kv.updateInPlace(E=>{E.pendingMutations=T});const k=ix(T.entries()),S=b.map(E=>{var M,z,R,F;const I=E["instaql-query"],J=E["instaql-result"],ne=Pt(I),ge=Y1(J),fe=$u(this.attrs,ge,h,this._linkIndex,this.config.useDateObjects),ae=this._applyOptimisticUpdates(fe,k,_),je=(z=(M=J==null?void 0:J[0])===null||M===void 0?void 0:M.data)===null||z===void 0?void 0:z["page-info"],Ie=(F=(R=J==null?void 0:J[0])===null||R===void 0?void 0:R.data)===null||F===void 0?void 0:F.aggregate;return{q:I,hash:ne,store:ae,pageInfo:je,aggregate:Ie}});S.forEach(({hash:E,q:M,store:z,pageInfo:R,aggregate:F})=>{this.querySubs.updateInPlace(I=>{if(!I[E]){this._log.error("Missing value in querySubs",{hash:E,q:M});return}I[E].result={store:z,pageInfo:R,aggregate:F,processedTxId:_}})}),this._cleanupPendingMutationsQueries(),S.forEach(({hash:E})=>{this.notifyOne(E)});break}case"transact-ok":{const{"client-event-id":b,"tx-id":w}=r;this._inFlightMutationEventIds.delete(b);const T=this._rewriteMutations(this.attrs,this._pendingMutations()).get(b);if(!T)break;this._updatePendingMutations(S=>{S.set(b,Object.assign(Object.assign({},S.get(b)),{"tx-id":w,confirmed:Date.now()}))});const k=T["tx-steps"].filter(([S,...E])=>S==="add-attr").map(([S,E])=>E).concat(Object.values(this.attrs));this._setAttrs(k),this._finishTransaction("synced",b),this._cleanupPendingMutationsTimeout();break}case"patch-presence":{const b=r["room-id"];this._trySetRoomConnected(b,!0),this._patchPresencePeers(b,r.edits),this._notifyPresenceSubs(b);break}case"refresh-presence":{const b=r["room-id"];this._trySetRoomConnected(b,!0),this._setPresencePeers(b,r.data),this._notifyPresenceSubs(b);break}case"server-broadcast":{const b=r["room-id"],w=r.topic;this._trySetRoomConnected(b,!0),this._notifyBroadcastSubs(b,w,r);break}case"join-room-ok":{const b=r["room-id"];if(!this._rooms[b]){this._roomsPendingLeave[b]&&(this._tryLeaveRoom(b),delete this._roomsPendingLeave[b]);break}this._trySetRoomConnected(b,!0),this._flushEnqueuedRoomData(b);break}case"leave-room-ok":{const b=r["room-id"];this._trySetRoomConnected(b,!1);break}case"join-room-error":const v=r["room-id"],g=this._rooms[v];g&&(g.error=r.error),this._notifyPresenceSubs(v);break;case"error":this._handleReceiveError(r);break;default:this._log.info("Uknown op",r.op,r);break}}_pendingMutations(){var t;return(t=this.kv.currentValue.pendingMutations)!==null&&t!==void 0?t:new Map}_updatePendingMutations(t){this.kv.updateInPlace(r=>{var a;const s=(a=r.pendingMutations)!==null&&a!==void 0?a:new Map;r.pendingMutations=s,t(s)})}_handleMutationError(t,r,a){const s=this._pendingMutations().get(r);if(s&&(t!=="timeout"||!s["tx-id"])){this._updatePendingMutations(u=>(u.delete(r),u)),this._inFlightMutationEventIds.delete(r);const l={message:a.message,hint:a.hint};this.notifyAll(),this.notifyAttrsSubs(),this.notifyMutationErrorSubs(l),this._finishTransaction(t,r,a)}}_handleReceiveError(t){var r,a,s,l,u,d,f;console.log("error",t);const h=t["client-event-id"];this._inFlightMutationEventIds.delete(h);const v=this._pendingMutations().get(h),g={message:t.message||"Uh-oh, something went wrong. Ping Joe & Stopa."};if(t.hint&&(g.hint=t.hint),v){this._handleMutationError("error",h,t);return}if(!((r=t["original-event"])===null||r===void 0)&&r.hasOwnProperty("q")&&((a=t["original-event"])===null||a===void 0?void 0:a.op)==="add-query"){const _=(s=t["original-event"])===null||s===void 0?void 0:s.q,T=Pt(_);this.notifyQueryError(Pt(_),g),this.notifyQueryOnceError(_,T,h,g);return}if(((l=t["original-event"])===null||l===void 0?void 0:l.op)==="init"){if(t.type==="record-not-found"&&((u=t.hint)===null||u===void 0?void 0:u["record-type"])==="app-user"){this.changeCurrentUser(null);return}this._setStatus(Yr.ERRORED,g),this.notifyAll();return}if(((d=t["original-event"])===null||d===void 0?void 0:d.op)==="resync-table"){this._syncTable.onResyncError(t);return}if(((f=t["original-event"])===null||f===void 0?void 0:f.op)==="start-sync"){this._syncTable.onStartSyncError(t);return}const w=Object.assign({},t);delete w.message,delete w.hint,console.error(t.message,w),t.hint&&console.error(`This error comes with some debugging information. Here it is: 
`,t.hint)}notifyQueryOnceError(t,r,a,s){var l;const u=(l=this.queryOnceDfds[r])===null||l===void 0?void 0:l.find(d=>d.eventId===a);u&&(u.dfd.reject(s),this._completeQueryOnce(t,r,u.dfd))}_setAttrs(t){this.attrs=t.reduce((r,a)=>(r[a.id]=a,r),{}),this.notifyAttrsSubs()}_startQuerySub(t,r){const a=Je();return this.querySubs.updateInPlace(s=>{s[r]=s[r]||{q:t,result:null,eventId:a},s[r].lastAccessed=Date.now()}),this._trySendAuthed(a,{op:"add-query",q:t}),a}subscribeTable(t,r){return this._syncTable.subscribe(t,r)}subscribeQuery(t,r,a){var s;this.config.disableValidation||V1(t,this.config.schema),a&&"ruleParams"in a&&(t=Object.assign({$$ruleParams:a.ruleParams},t));const l=Pt(t),u=this.getPreviousResult(t);return u&&r(u),this.queryCbs[l]=(s=this.queryCbs[l])!==null&&s!==void 0?s:[],this.queryCbs[l].push({q:t,cb:r}),this._startQuerySub(t,l),()=>{this._unsubQuery(t,l,r)}}queryOnce(t,r){var a;this.config.disableValidation||V1(t,this.config.schema),r&&"ruleParams"in r&&(t=Object.assign({$$ruleParams:r.ruleParams},t));const s=new P1;if(!this._isOnline)return s.reject(new Error("We can't run `queryOnce`, because the device is offline.")),s.promise;if(!this.querySubs)return s.reject(new Error("We can't run `queryOnce` on the backend. Use adminAPI.query instead: https://www.instantdb.com/docs/backend#query")),s.promise;const l=Pt(t),u=this._startQuerySub(t,l);return this.queryOnceDfds[l]=(a=this.queryOnceDfds[l])!==null&&a!==void 0?a:[],this.queryOnceDfds[l].push({q:t,dfd:s,eventId:u}),setTimeout(()=>s.reject(new Error("Query timed out")),Rz),s.promise}_completeQueryOnce(t,r,a){this.queryOnceDfds[r]&&(this.queryOnceDfds[r]=this.queryOnceDfds[r].filter(s=>s.dfd!==a),this._cleanupQuery(t,r))}_unsubQuery(t,r,a){this.queryCbs[r]&&(this.queryCbs[r]=this.queryCbs[r].filter(s=>s.cb!==a),this._cleanupQuery(t,r))}_hasQueryListeners(t){var r,a;return!!(!((r=this.queryCbs[t])===null||r===void 0)&&r.length||!((a=this.queryOnceDfds[t])===null||a===void 0)&&a.length)}_cleanupQuery(t,r){this._hasQueryListeners(r)||(delete this.queryCbs[r],delete this.queryOnceDfds[r],delete this._dataForQueryCache[r],this.querySubs.unloadKey(r),this._trySendAuthed(Je(),{op:"remove-query",q:t}))}_rewriteMutations(t,r,a){if(!t)return r;if(!r)return new Map;const s=v=>{const[g,b,w]=v["forward-identity"];return It(t,b,w)},l=v=>{const[g,b,w]=v["forward-identity"];return va(t,b,w)},u={attrIdMap:{},refSwapAttrIds:new Set};let d=!1;const f=(v,g)=>{const b=[];for(const w of v){const[_]=w;if(_==="add-attr"){const[k,S]=w,E=s(S);if(E&&S.id!==E.id){u.attrIdMap[S.id]=E.id,d=!0;continue}if(S["value-type"]==="ref"){const M=l(S);if(M){u.attrIdMap[S.id]=M.id,u.refSwapAttrIds.add(S.id),d=!0;continue}}}if(a&&g&&a>=g&&_==="add-attr"||_==="update-attr"||_==="delete-attr"){d=!0;continue}const T=d?SN(u,w):w;b.push(T)}return d?b:v},h=new Map;for(const[v,g]of r.entries())h.set(v,Object.assign(Object.assign({},g),{"tx-steps":f(g["tx-steps"],g["tx-id"])}));return d?h:r}_rewriteMutationsSorted(t,r){return ix(this._rewriteMutations(t,r).entries())}optimisticAttrs(){var t;const r=[...this._pendingMutations().values()].flatMap(d=>d["tx-steps"]),a=new Set(r.filter(([d,f])=>d==="delete-attr").map(([d,f])=>f)),s=[];for(const[d,f]of r)if(d==="add-attr")s.push(f);else if(d==="update-attr"&&f.id&&(!((t=this.attrs)===null||t===void 0)&&t[f.id])){const h=Object.assign(Object.assign({},this.attrs[f.id]),f);s.push(h)}const l=[...Object.values(this.attrs||{}),...s].filter(d=>!a.has(d.id));return Object.fromEntries(l.map(d=>[d.id,d]))}dataForQuery(t){const r=this._errorMessage;if(r)return{error:r};if(!this.querySubs||!this.kv.currentValue.pendingMutations)return;const a=this.querySubs.version(),s=this.querySubs.currentValue,l=this.kv.version(),u=this._pendingMutations(),{q:d,result:f}=s[t]||{};if(!f)return;const h=this._dataForQueryCache[t];if(h&&a===h.querySubVersion&&l===h.pendingMutationsVersion)return h.data;const{store:v,pageInfo:g,aggregate:b,processedTxId:w}=f,_=this._rewriteMutationsSorted(v.attrs,u),T=this._applyOptimisticUpdates(v,_,w),k=B_({store:T,pageInfo:g,aggregate:b},d);return this._dataForQueryCache[t]={querySubVersion:a,pendingMutationsVersion:l,data:k},k}_applyOptimisticUpdates(t,r,a){for(const[s,l]of r)(!l["tx-id"]||a&&l["tx-id"]>a)&&(t=TO(t,l["tx-steps"]));return t}notifyAll(){Object.keys(this.queryCbs).forEach(t=>{this.querySubs.waitForKeyToLoad(t).then(()=>this.notifyOne(t)).catch(()=>this.notifyOne(t))})}loadedNotifyAll(){this.kv.waitForKeyToLoad("pendingMutations").then(()=>this.notifyAll()).catch(()=>this.notifyAll())}shutdown(){var t;this._log.info("[shutdown]",this.config.appId),this._isShutdown=!0,(t=this._transport)===null||t===void 0||t.close()}_sendMutation(t,r){if(r.error){this._handleMutationError("error",t,{message:r.error.message});return}if(this.status!==Yr.AUTHENTICATED){this._finishTransaction("enqueued",t);return}const a=Math.max(6e3,Math.min(this._inFlightMutationEventIds.size+1,this._pendingMutations().size+1)*6e3);this._isOnline?(this._trySend(t,r),setTimeout(()=>{this._isOnline&&this._handleMutationError("timeout",t,{message:"transaction timed out"})},a)):this._finishTransaction("enqueued",t)}_flushPendingMessages(){Object.keys(this.queryCbs).map(s=>this.querySubs.currentValue[s]).filter(s=>s).forEach(({eventId:s,q:l})=>{this._trySendAuthed(s,{op:"add-query",q:l})}),Object.values(this.queryOnceDfds).flat().forEach(({eventId:s,q:l})=>{this._trySendAuthed(s,{op:"add-query",q:l})}),this._rewriteMutationsSorted(this.attrs,this._pendingMutations()).forEach(([s,l])=>{l["tx-id"]||this._sendMutation(s,l)}),this._syncTable.flushPending()}_cleanupPendingMutationsQueries(){let t=Number.MAX_SAFE_INTEGER;for(const{result:r}of Object.values(this.querySubs.currentValue))r!=null&&r.processedTxId&&(t=Math.min(t,r==null?void 0:r.processedTxId));this._updatePendingMutations(r=>{for(const[a,s]of Array.from(r.entries()))s["tx-id"]&&s["tx-id"]<=t&&r.delete(a)})}_cleanupPendingMutationsTimeout(){if(this._pendingMutations().size<this._pendingMutationCleanupThreshold)return;const t=Date.now();this._updatePendingMutations(r=>{for(const[a,s]of Array.from(r.entries()))s.confirmed&&s.confirmed+this._pendingTxCleanupTimeout<t&&r.delete(a)})}_trySendAuthed(...t){this.status===Yr.AUTHENTICATED&&this._trySend(...t)}_trySend(t,r,a){if(this._transport.isOpen()){switch(rx[r.op]||this._log.info("[send]",this._transport.id,r.op,r),r.op){case"transact":{this._inFlightMutationEventIds.add(t);break}case"init":this._inFlightMutationEventIds.clear()}this._transport.send(Object.assign({"client-event-id":t},r))}}_startSocket(){if(this._wsOk=null,this._isShutdown){this._log.info("[socket][start]",this.config.appId,"Reactor has been shut down and will not start a new socket");return}if(this._transport&&this._transport.isConnecting()){this._log.info("[socket][start]",this._transport.id,"maintained as current transport, we were still in a connecting state");return}const t=this._transport;this._transport=Hz({transportType:this._transportType,appId:this.config.appId,apiURI:this.config.apiURI,wsURI:this.config.websocketURI,EventSourceImpl:this._EventSource}),this._transport.onopen=this._transportOnOpen,this._transport.onmessage=this._transportOnMessage,this._transport.onclose=this._transportOnClose,this._transport.onerror=this._transportOnError,this._log.info("[socket][start]",this._transport.id),t!=null&&t.isOpen()&&(this._log.info("[socket][start]",this._transport.id,"close previous transport id = ",t.id),t.close())}getLocalId(t){return Tt(this,void 0,void 0,function*(){const r=`localToken_${t}`;if(this.kv.currentValue[r])return this.kv.currentValue[r];const a=yield this.kv.waitForKeyToLoad(r);if(a)return a;const s=Je();return this.kv.updateInPlace(l=>{l[r]||(l[r]=s)}),yield this.kv.waitForKeyToLoad(r)})}_replaceUrlAfterOAuth(){if(typeof URL>"u")return;const t=new URL(window.location.href);if(t.searchParams.get(Lp)){const r=t.toString();t.searchParams.delete(Lp),t.searchParams.delete("code"),t.searchParams.delete("error");const a=t.pathname+(t.searchParams.size?"?"+t.searchParams:"")+t.hash;if(history.replaceState(history.state,"",a),typeof navigation=="object"&&typeof navigation.addEventListener=="function"&&typeof navigation.removeEventListener=="function"){let s=!1;const l=u=>{var d;s||(s=!0,navigation.removeEventListener("navigate",l),!u.userInitiated&&u.navigationType==="replace"&&((d=u.destination)===null||d===void 0?void 0:d.url)===r&&history.replaceState(history.state,"",a))};navigation.addEventListener("navigate",l)}}}_oauthLoginInit(){return Tt(this,void 0,void 0,function*(){var t,r,a,s;if(typeof window>"u"||typeof window.location>"u"||typeof URLSearchParams>"u")return null;const l=new URLSearchParams(window.location.search);if(!l.get(Lp))return null;const u=l.get("error");if(u)return this._replaceUrlAfterOAuth(),{error:{message:u}};const d=l.get("code");if(!d)return null;this._replaceUrlAfterOAuth();try{const f=yield this._getCurrentUser(),h=(f==null?void 0:f.type)==="guest",{user:v}=yield F1({apiURI:this.config.apiURI,appId:this.config.appId,code:d,refreshToken:h?f.refresh_token:void 0});return this.setCurrentUser(v),null}catch(f){return((t=f==null?void 0:f.body)===null||t===void 0?void 0:t.type)==="record-not-found"&&((a=(r=f==null?void 0:f.body)===null||r===void 0?void 0:r.hint)===null||a===void 0?void 0:a["record-type"])==="app-oauth-code"&&(yield this._hasCurrentUser())?null:{error:{message:((s=f==null?void 0:f.body)===null||s===void 0?void 0:s.message)||"Error logging in."}}}})}_waitForOAuthCallbackResponse(){return Tt(this,void 0,void 0,function*(){return yield this._oauthCallbackResponse})}__subscribeMutationErrors(t){return this.mutationErrorCbs.push(t),()=>{this.mutationErrorCbs=this.mutationErrorCbs.filter(r=>r!==t)}}subscribeAuth(t){this.authCbs.push(t);const r=this._currentUserCached;r.isLoading||t(this._currentUserCached);let a=!1;return this.getCurrentUser().then(s=>{a||Uu(s,r)||t(s)}),()=>{a=!0,this.authCbs=this.authCbs.filter(s=>s!==t)}}getAuth(){return Tt(this,void 0,void 0,function*(){const{user:t,error:r}=yield this.getCurrentUser();if(r)throw new Cl("Could not get current user: "+r.message);return t})}subscribeConnectionStatus(t){return this.connectionStatusCbs.push(t),()=>{this.connectionStatusCbs=this.connectionStatusCbs.filter(r=>r!==t)}}subscribeAttrs(t){return this.attrsCbs.push(t),this.attrs&&t(this.attrs),()=>{this.attrsCbs=this.attrsCbs.filter(r=>r!==t)}}notifyAuthSubs(t){this.authCbs.forEach(r=>r(t))}notifyMutationErrorSubs(t){this.mutationErrorCbs.forEach(r=>r(t))}notifyAttrsSubs(){if(!this.attrs)return;const t=this.optimisticAttrs();this.attrsCbs.forEach(r=>r(t))}notifyConnectionStatusSubs(t){this.connectionStatusCbs.forEach(r=>r(t))}setCurrentUser(t){return Tt(this,void 0,void 0,function*(){this.kv.updateInPlace(r=>{r[Ws]=t}),yield this.kv.waitForKeyToLoad(Ws)})}getCurrentUserCached(){return this._currentUserCached}_getCurrentUser(){return Tt(this,void 0,void 0,function*(){const t=yield this.kv.waitForKeyToLoad(Ws);return typeof t=="string"?JSON.parse(t):t})}getCurrentUser(){return Tt(this,void 0,void 0,function*(){const t=yield this._waitForOAuthCallbackResponse();if(t!=null&&t.error){const r={error:t.error,user:void 0};return this._currentUserCached=Object.assign({isLoading:!1},r),r}try{const a={user:yield this._getCurrentUser(),error:void 0};return this._currentUserCached=Object.assign({isLoading:!1},a),a}catch(r){return{user:void 0,isLoading:!1,error:{message:(r==null?void 0:r.message)||"Error loading user"}}}})}_hasCurrentUser(){return Tt(this,void 0,void 0,function*(){const t=yield this.kv.waitForKeyToLoad(Ws);return typeof t=="string"?JSON.parse(t)!=null:t!=null})}changeCurrentUser(t){return Tt(this,void 0,void 0,function*(){var r;const{user:a}=yield this.getCurrentUser();if(!Uu(a,t)){yield this.setCurrentUser(t),this.updateUser(t);try{(r=this._broadcastChannel)===null||r===void 0||r.postMessage({type:"auth"})}catch(s){console.error("Error posting message to broadcast channel",s)}}})}updateUser(t){const r={error:void 0,user:t};this._currentUserCached=Object.assign({isLoading:!1},r),this._dataForQueryCache={},this.querySubs.updateInPlace(a=>{Object.keys(a).forEach(s=>{delete a[s].result})}),this._reconnectTimeoutMs=0,this._transport.close(),this._oauthCallbackResponse=null,this.notifyAuthSubs(r)}sendMagicCode({email:t}){return rz({apiURI:this.config.apiURI,appId:this.config.appId,email:t})}signInWithMagicCode(t){return Tt(this,arguments,void 0,function*({email:r,code:a}){var s;const l=yield this.getCurrentUser(),u=((s=l==null?void 0:l.user)===null||s===void 0?void 0:s.type)==="guest",d=yield iz({apiURI:this.config.apiURI,appId:this.config.appId,email:r,code:a,refreshToken:u?l.user.refresh_token:void 0});return yield this.changeCurrentUser(d.user),d})}signInWithCustomToken(t){return Tt(this,void 0,void 0,function*(){const r=yield az({apiURI:this.config.apiURI,appId:this.config.appId,refreshToken:t});return yield this.changeCurrentUser(r.user),r})}signInAsGuest(){return Tt(this,void 0,void 0,function*(){const t=yield oz({apiURI:this.config.apiURI,appId:this.config.appId});return yield this.changeCurrentUser(t.user),t})}potentiallyInvalidateToken(t,r){var a;const s=(a=t==null?void 0:t.user)===null||a===void 0?void 0:a.refresh_token;if(!s)return;if(r.invalidateToken===!1){this._log.info("[auth-invalidate] skipped invalidateToken");return}lz({apiURI:this.config.apiURI,appId:this.config.appId,refreshToken:s}).then(()=>{this._log.info("[auth-invalidate] completed invalidateToken")}).catch(u=>{})}signOut(t){return Tt(this,void 0,void 0,function*(){const r=yield this.getCurrentUser();this.potentiallyInvalidateToken(r,t),yield this.changeCurrentUser(null)})}createAuthorizationURL({clientName:t,redirectURL:r}){const{apiURI:a,appId:s}=this.config;return`${a}/runtime/oauth/start?app_id=${s}&client_name=${t}&redirect_uri=${r}`}exchangeCodeForToken(t){return Tt(this,arguments,void 0,function*({code:r,codeVerifier:a}){var s;const l=yield this.getCurrentUser(),u=((s=l==null?void 0:l.user)===null||s===void 0?void 0:s.type)==="guest",d=yield F1({apiURI:this.config.apiURI,appId:this.config.appId,code:r,codeVerifier:a,refreshToken:u?l.user.refresh_token:void 0});return yield this.changeCurrentUser(d.user),d})}issuerURI(){const{apiURI:t,appId:r}=this.config;return`${t}/runtime/${r}`}signInWithIdToken(t){return Tt(this,arguments,void 0,function*({idToken:r,clientName:a,nonce:s}){var l;const u=yield this.getCurrentUser(),d=(l=u==null?void 0:u.user)===null||l===void 0?void 0:l.refresh_token,f=yield sz({apiURI:this.config.apiURI,appId:this.config.appId,idToken:r,clientName:a,nonce:s,refreshToken:d});return yield this.changeCurrentUser(f.user),f})}joinRoom(t,r){let a=!1;this._rooms[t]||(a=!0,this._rooms[t]={isConnected:!1,error:void 0}),this._presence[t]=this._presence[t]||{};const s=this._presence[t].result;return r&&!s&&(this._presence[t].result=this._presence[t].result||{},this._presence[t].result.user=r,this._notifyPresenceSubs(t)),a&&this._tryJoinRoom(t,r),()=>{this._cleanupRoom(t)}}_cleanupRoom(t){var r,a,s,l;if(!(!((a=(r=this._presence[t])===null||r===void 0?void 0:r.handlers)===null||a===void 0)&&a.length)&&!Object.keys((s=this._broadcastSubs[t])!==null&&s!==void 0?s:{}).length){const u=(l=this._rooms[t])===null||l===void 0?void 0:l.isConnected;delete this._rooms[t],delete this._presence[t],delete this._broadcastSubs[t],u?this._tryLeaveRoom(t):this._roomsPendingLeave[t]=!0}}getPresence(t,r,a={}){const s=this._rooms[r],l=this._presence[r];return!s||!l||!l.result?null:Object.assign(Object.assign({},pz(l.result,a,this._sessionId)),{isLoading:!s.isConnected,error:s.error})}publishPresence(t,r,a){const s=this._rooms[r],l=this._presence[r];if(!s||!l)return;l.result=l.result||{};const u=Object.assign(Object.assign({},l.result.user),a);l.result.user=u,s.isConnected&&(this._trySetPresence(r,u),this._notifyPresenceSubs(r))}_trySetPresence(t,r){this._trySendAuthed(Je(),{op:"set-presence","room-id":t,data:r})}_tryJoinRoom(t,r){this._trySendAuthed(Je(),{op:"join-room","room-id":t,data:r}),delete this._roomsPendingLeave[t]}_tryLeaveRoom(t){this._trySendAuthed(Je(),{op:"leave-room","room-id":t})}_trySetRoomConnected(t,r){const a=this._rooms[t];a&&(a.isConnected=r)}subscribePresence(t,r,a,s){const l=this.joinRoom(r,a.initialPresence||a.initialData),u=Object.assign(Object.assign({},a),{roomId:r,cb:s,prev:null});return this._presence[r]=this._presence[r]||{},this._presence[r].handlers=this._presence[r].handlers||[],this._presence[r].handlers.push(u),this._notifyPresenceSub(r,u),()=>{var d,f,h;this._presence[r].handlers=(h=(f=(d=this._presence[r])===null||d===void 0?void 0:d.handlers)===null||f===void 0?void 0:f.filter(v=>v!==u))!==null&&h!==void 0?h:[],l()}}_notifyPresenceSubs(t){var r,a;(a=(r=this._presence[t])===null||r===void 0?void 0:r.handlers)===null||a===void 0||a.forEach(s=>{this._notifyPresenceSub(t,s)})}_notifyPresenceSub(t,r){const a=this.getPresence("",t,r);a&&(r.prev&&!mz(a,r.prev)||(r.prev=a,r.cb(a)))}_patchPresencePeers(t,r){var a,s,l;const u=((s=(a=this._presence[t])===null||a===void 0?void 0:a.result)===null||s===void 0?void 0:s.peers)||{};let d=Object.fromEntries(Object.entries(u).map(([h,v])=>[h,{data:v}]));(l=this._presence[t])===null||l===void 0||l.result;const f=nd(d,h=>{for(let[v,g,b]of r)switch(g){case"+":GM(h,v,b);break;case"r":M1(h,v,b);break;case"-":E_(h,v);break}delete h[this._sessionId]});this._setPresencePeers(t,f)}_setPresencePeers(t,r){const a=Object.assign({},r);delete a[this._sessionId];const s=Object.fromEntries(Object.entries(a).map(([l,u])=>[l,u.data]));this._presence=nd(this._presence,l=>{M1(l,[t,"result","peers"],s)})}publishTopic({roomType:t,roomId:r,topic:a,data:s}){var l;const u=this._rooms[r];if(u){if(!u.isConnected){this._broadcastQueue[r]=(l=this._broadcastQueue[r])!==null&&l!==void 0?l:[],this._broadcastQueue[r].push({topic:a,roomType:t,data:s});return}this._tryBroadcast(r,t,a,s)}}_tryBroadcast(t,r,a,s){this._trySendAuthed(Je(),{op:"client-broadcast","room-id":t,roomType:r,topic:a,data:s})}subscribeTopic(t,r,a){const s=this.joinRoom(t);return this._broadcastSubs[t]=this._broadcastSubs[t]||{},this._broadcastSubs[t][r]=this._broadcastSubs[t][r]||[],this._broadcastSubs[t][r].push(a),this._presence[t]=this._presence[t]||{},()=>{this._broadcastSubs[t][r]=this._broadcastSubs[t][r].filter(l=>l!==a),this._broadcastSubs[t][r].length||delete this._broadcastSubs[t][r],s()}}_notifyBroadcastSubs(t,r,a){var s,l,u;(u=(l=(s=this._broadcastSubs)===null||s===void 0?void 0:s[t])===null||l===void 0?void 0:l[r])===null||u===void 0||u.forEach(d=>{var f,h,v,g,b,w;const _=(f=a.data)===null||f===void 0?void 0:f.data,T=a.data["peer-id"]===this._sessionId?(v=(h=this._presence[t])===null||h===void 0?void 0:h.result)===null||v===void 0?void 0:v.user:(w=(b=(g=this._presence[t])===null||g===void 0?void 0:g.result)===null||b===void 0?void 0:b.peers)===null||w===void 0?void 0:w[a.data["peer-id"]];return d(_,T)})}uploadFile(t,r,a){return Tt(this,void 0,void 0,function*(){var s;const l=yield this.getCurrentUser(),u=(s=l==null?void 0:l.user)===null||s===void 0?void 0:s.refresh_token;return cz(Object.assign(Object.assign({},a),{apiURI:this.config.apiURI,appId:this.config.appId,path:t,file:r,refreshToken:u}))})}deleteFile(t){return Tt(this,void 0,void 0,function*(){var r;const a=yield this.getCurrentUser(),s=(r=a==null?void 0:a.user)===null||r===void 0?void 0:r.refresh_token;return yield uz({apiURI:this.config.apiURI,appId:this.config.appId,path:t,refreshToken:s})})}upload(t,r){return Tt(this,void 0,void 0,function*(){var a;const s=yield this.getCurrentUser(),l=(a=s==null?void 0:s.user)===null||a===void 0?void 0:a.refresh_token,u=t||r.name,d=yield dz({apiURI:this.config.apiURI,appId:this.config.appId,fileName:u,refreshToken:l});return yield fz(d,r)})}getDownloadUrl(t){return Tt(this,void 0,void 0,function*(){var r;const a=yield this.getCurrentUser(),s=(r=a==null?void 0:a.user)===null||r===void 0?void 0:r.refresh_token;return yield hz({apiURI:this.config.apiURI,appId:this.config.appId,path:t,refreshToken:s})})}}function Gz(e,t){return new Md(oS(e,t),t,void 0)}function Vz(e){return new Ad(e,{})}function Qz(){return new Qt("string",!0,!1)}function Kz(){return new Qt("number",!0,!1)}function Wz(){return new Qt("boolean",!0,!1)}function Zz(){return new Qt("date",!0,!1)}function Jz(){return new Qt("json",!0,!1)}function e6(){return new Qt("json",!0,!1)}function oS(e,t){var r,a,s,l;const u={fwd:{},rev:{}};for(const f of Object.values(t))(r=u.fwd)[a=f.forward.on]||(r[a]={}),(s=u.rev)[l=f.reverse.on]||(s[l]={}),u.fwd[f.forward.on][f.forward.label]={entityName:f.reverse.on,cardinality:f.forward.has},u.rev[f.reverse.on][f.reverse.label]={entityName:f.forward.on,cardinality:f.reverse.has};return Object.fromEntries(Object.entries(e).map(([f,h])=>[f,new Ad(h.attrs,Object.assign(Object.assign({},u.fwd[f]),u.rev[f]))]))}function t6({entities:e,links:t,rooms:r}){const a=t??{},s=r??{};return new Md(oS(e,a),a,s)}const He={graph:Gz,schema:t6,entity:Vz,string:Qz,number:Kz,boolean:Wz,date:Zz,json:Jz,any:e6};let vu;function n6(e,t){vu==null||vu.dispose();const r=l6(t),a=a6(t,d),s=i6(r6(e));function l(v){var g;v.source===s.element.contentWindow&&((g=v.data)===null||g===void 0?void 0:g.type)==="close"&&r.isVisible()&&d()}function u(v){const g=v.shiftKey&&v.ctrlKey&&v.key==="0",b=v.key==="Escape"||v.key==="Esc";(g||b&&r.isVisible())&&d()}function d(){r.isVisible()?r.element.style.display="none":(r.element.style.display="block",r.element.contains(s.element)||r.element.appendChild(s.element))}function f(){r.element.remove(),a.element.remove(),removeEventListener("keydown",u),removeEventListener("message",l)}function h(){document.body.appendChild(r.element),document.body.appendChild(a.element),addEventListener("keydown",u),addEventListener("message",l),vu={dispose:f}}return h()}function r6(e){return`${Hg||W_?"http://localhost:3000":"https://instantdb.com"}/_devtool?appId=${e}`}function i6(e){const t=document.createElement("iframe");return t.src=e,t.className="instant-devtool-iframe",Object.assign(t.style,{width:"100%",height:"100%",backgroundColor:"white",border:"none"}),{element:t}}function a6(e,t){const r=`
    <svg width="32" height="32" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" fill="black"/>
      <rect x="97.0973" y="91.3297" width="140" height="330" fill="white"/>
    </svg>
  `,a=document.createElement("button");return a.innerHTML=r,a.className="instant-devtool-toggler",Object.assign(a.style,Object.assign(Object.assign({position:"fixed"},o6(e.position)),{height:"32px",width:"32px",display:"flex",alignItems:"center",justifyContent:"center",zIndex:"9010",padding:"0",margin:"0",border:"none",cursor:"pointer"})),a.addEventListener("click",t),{element:a}}function o6(e){switch(e){case"bottom-left":return{bottom:"24px",left:"24px"};case"bottom-right":return{bottom:"24px",right:"24px"};case"top-right":return{top:"24px",right:"24px"};case"top-left":return{top:"24px",left:"24px"}}}function s6(e){switch(e){case"bottom-left":return{bottom:"24px",right:"24px",left:"60px",top:"72px"};case"bottom-right":return{bottom:"24px",left:"24px",right:"60px",top:"72px"};case"top-right":return{top:"24px",left:"24px",right:"60px",bottom:"72px"};case"top-left":return{top:"24px",right:"24px",left:"60px",bottom:"72px"}}}function l6(e){const t=document.createElement("div");Object.assign(t.style,Object.assign(Object.assign({position:"fixed"},s6(e.position)),{display:"block",borderRadius:"4px",border:"1px #ccc solid",boxShadow:"0px 0px 8px #00000044",backgroundColor:"#eee",zIndex:"999990"})),t.style.display="none",t.className="instant-devtool-container";function r(){return t.style.display!=="none"}return{element:t,isVisible:r}}const c6={apiURI:"https://api.instantdb.com",websocketURI:"wss://api.instantdb.com/runtime/session"};function u6(){var e;return globalThis.__instantDbSchemaHashStore=(e=globalThis.__instantDbSchemaHashStore)!==null&&e!==void 0?e:new WeakMap,globalThis.__instantDbSchemaHashStore}function d6(){var e;return globalThis.__instantDbStore=(e=globalThis.__instantDbStore)!==null&&e!==void 0?e:{},globalThis.__instantDbStore}function Im(e){const t=e.__adminToken;return e.appId+"_"+(e.websocketURI||"default_ws_uri")+"_"+(e.apiURI||"default_api_uri")+"_"+(t||"client_only")+"_"+e.useDateObjects}const qm=d6(),ax=u6();class f6{constructor(t){this.db=t,this.sendMagicCode=r=>this.db.sendMagicCode(r),this.signInWithMagicCode=r=>this.db.signInWithMagicCode(r),this.signInWithToken=r=>this.db.signInWithCustomToken(r),this.signInAsGuest=()=>this.db.signInAsGuest(),this.createAuthorizationURL=r=>this.db.createAuthorizationURL(r),this.signInWithIdToken=r=>this.db.signInWithIdToken(r),this.exchangeOAuthCode=r=>this.db.exchangeCodeForToken(r),this.issuerURI=()=>this.db.issuerURI(),this.signOut=(r={invalidateToken:!0})=>this.db.signOut(r)}}class h6{constructor(t){this.db=t,this.uploadFile=(r,a,s={})=>this.db.uploadFile(r,a,s),this.delete=r=>this.db.deleteFile(r),this.upload=(r,a)=>this.db.upload(r,a),this.put=this.upload,this.getDownloadUrl=r=>this.db.getDownloadUrl(r)}}class p6{constructor(t){this.tx=Y_(),this._reactor=t,this.auth=new f6(this._reactor),this.storage=new h6(this._reactor)}transact(t){return this._reactor.pushTx(t)}getLocalId(t){return this._reactor.getLocalId(t)}subscribeQuery(t,r,a){return this._reactor.subscribeQuery(t,r,a)}subscribeAuth(t){return this._reactor.subscribeAuth(t)}getAuth(){return this._reactor.getAuth()}subscribeConnectionStatus(t){return this._reactor.subscribeConnectionStatus(t)}joinRoom(t="_defaultRoomType",r="_defaultRoomId",a){return{leaveRoom:this._reactor.joinRoom(r,a==null?void 0:a.initialPresence),subscribeTopic:(l,u)=>this._reactor.subscribeTopic(r,l,u),subscribePresence:(l,u)=>this._reactor.subscribePresence(t,r,l,u),publishTopic:(l,u)=>this._reactor.publishTopic({roomType:t,roomId:r,topic:l,data:u}),publishPresence:l=>this._reactor.publishPresence(t,r,l),getPresence:l=>this._reactor.getPresence(t,r,l)}}shutdown(){delete qm[Im(this._reactor.config)],this._reactor.shutdown()}queryOnce(t,r){return this._reactor.queryOnce(t,r)}_syncTableExperimental(t,r){return this._reactor.subscribeTable(t,r)}}function ox(e){if(!e)return"0";const t=ax.get(e);if(t)return t;const r=Pt(e);return ax.set(e,r),r}function m6(e,t){return ox(e._reactor.config.schema)!==ox(t)}function g6(e,t,r,a,s){const l=qm[Im(e)];if(l)return m6(l,e.schema)&&l._reactor.updateSchema(e.schema),l;const u=new Xz(Object.assign(Object.assign(Object.assign({},c6),e),{cardinalityInference:!!e.schema}),t||V_,r||Q_,Object.assign(Object.assign({},a||{}),{"@instantdb/core":J_}),s),d=new p6(u);return qm[Im(e)]=d,v6(e.appId,e.devtool),d}function v6(e,t){if(typeof window>"u"||typeof window.location>"u"||typeof document>"u"||typeof t=="boolean"&&!t)return;const r=Object.assign({position:"bottom-right",allowedHosts:["localhost"]},typeof t=="object"?t:{});r.allowedHosts.includes(window.location.hostname)&&n6(e,r)}const y6=He.schema({entities:{$users:He.entity({name:He.string().optional(),type:He.string().optional()}),party:He.entity({name:He.string().unique().indexed(),host:He.string().optional(),gameState:He.json(),gameProgress:He.json(),gameParams:He.json(),staticPlayerIds:He.json(),status:He.string()}),roomEvent:He.entity({type:He.string(),payload:He.any()}),players:He.entity({localId:He.string().unique().indexed(),name:He.string(),avatar:He.string()}),paintings:He.entity({canvas:He.json(),playerId:He.string(),word:He.string()}),words:He.entity({word:He.string().unique().indexed(),lang:He.string(),category:He.string().optional(),hidden:He.boolean().optional()})},links:{partyRoomEvents:{forward:{on:"party",has:"many",label:"roomEvents"},reverse:{on:"roomEvent",has:"one",label:"party"}},partyNewPlayers:{forward:{on:"party",has:"many",label:"newPlayers"},reverse:{on:"$users",has:"many",label:"parties"}}},rooms:{party:{presence:He.entity({user:He.any().optional()}),topics:{currentCanvas:He.entity({currentDrawing:He.any().optional()})}}}}),b6=y6,w6="59599101-16e7-493b-8644-ccb75b6cb032",pe=g6({appId:w6,schema:b6}),cn={prepare:"prepare",inProgress:"in-progress",finished:"finished"};function sx(e){const t=[];return e.forEach(r=>{!r.type||r.type==="line"?t.push(r):r.type==="undo"&&t.pop()}),t}function x6(e){if(e.length===0)return[];const t=[];let r=null,a=0;for(const s of e)typeof s=="string"&&s===r?a++:(r!==null&&t.push(a>1?`${r} ${a}`:r),r=s,a=1);return r!==null&&t.push(a>1?`${r} ${a}`:r),t}const Fm={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e*e:-1+(4-2*e)*e,easeInCubic:e=>e*e*e,easeOutCubic:e=>--e*e*e+1,easeInOutCubic:e=>e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1- --e*e*e*e,easeInOutQuart:e=>e<.5?8*e*e*e*e:1-8*--e*e*e*e,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1+--e*e*e*e*e,easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>e<=0?0:Math.pow(2,10*e-10),easeOutExpo:e=>e>=1?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>e<=0?0:e>=1?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2};class V{constructor(t=0,r=0,a=1){this.x=t,this.y=r,this.z=a}get pressure(){return this.z}set(t=this.x,r=this.y,a=this.z){return this.x=t,this.y=r,this.z=a,this}setTo({x:t=0,y:r=0,z:a=1}){return this.x=t,this.y=r,this.z=a,this}rot(t){if(t===0)return this;const{x:r,y:a}=this,s=Math.sin(t),l=Math.cos(t);return this.x=r*l-a*s,this.y=r*s+a*l,this}rotWith(t,r){if(r===0)return this;const a=this.x-t.x,s=this.y-t.y,l=Math.sin(r),u=Math.cos(r);return this.x=t.x+(a*u-s*l),this.y=t.y+(a*l+s*u),this}clone(){const{x:t,y:r,z:a}=this;return new V(t,r,a)}sub(t){return this.x-=t.x,this.y-=t.y,this}subXY(t,r){return this.x-=t,this.y-=r,this}subScalar(t){return this.x-=t,this.y-=t,this}add(t){return this.x+=t.x,this.y+=t.y,this}addXY(t,r){return this.x+=t,this.y+=r,this}addScalar(t){return this.x+=t,this.y+=t,this}clamp(t,r){return this.x=Math.max(this.x,t),this.y=Math.max(this.y,t),r!==void 0&&(this.x=Math.min(this.x,r),this.y=Math.min(this.y,r)),this}div(t){return this.x/=t,this.y/=t,this}divV(t){return this.x/=t.x,this.y/=t.y,this}mul(t){return this.x*=t,this.y*=t,this}mulV(t){return this.x*=t.x,this.y*=t.y,this}abs(){return this.x=Math.abs(this.x),this.y=Math.abs(this.y),this}nudge(t,r){const a=V.Tan(t,this);return this.add(a.mul(r))}neg(){return this.x*=-1,this.y*=-1,this}cross(t){return this.x=this.y*t.z-this.z*t.y,this.y=this.z*t.x-this.x*t.z,this}dpr(t){return V.Dpr(this,t)}cpr(t){return V.Cpr(this,t)}len2(){return V.Len2(this)}len(){return V.Len(this)}pry(t){return V.Pry(this,t)}per(){const{x:t,y:r}=this;return this.x=r,this.y=-t,this}uni(){const t=this.len();return t===0?this:(this.x/=t,this.y/=t,this)}tan(t){return this.sub(t).uni()}dist(t){return V.Dist(this,t)}distanceToLineSegment(t,r){return V.DistanceToLineSegment(t,r,this)}slope(t){return V.Slope(this,t)}snapToGrid(t){return this.x=Math.round(this.x/t)*t,this.y=Math.round(this.y/t)*t,this}angle(t){return V.Angle(this,t)}toAngle(){return V.ToAngle(this)}lrp(t,r){return this.x=this.x+(t.x-this.x)*r,this.y=this.y+(t.y-this.y)*r,this}equals(t){return V.Equals(this,t)}equalsXY(t,r){return V.EqualsXY(this,t,r)}norm(){return this.uni()}toFixed(){return this.x=ko(this.x),this.y=ko(this.y),this}toString(){return V.ToString(V.ToFixed(this))}toJson(){return V.ToJson(this)}toArray(){return V.ToArray(this)}static Add(t,r){return new V(t.x+r.x,t.y+r.y)}static AddXY(t,r,a){return new V(t.x+r,t.y+a)}static Sub(t,r){return new V(t.x-r.x,t.y-r.y)}static SubXY(t,r,a){return new V(t.x-r,t.y-a)}static AddScalar(t,r){return new V(t.x+r,t.y+r)}static SubScalar(t,r){return new V(t.x-r,t.y-r)}static Div(t,r){return new V(t.x/r,t.y/r)}static Mul(t,r){return new V(t.x*r,t.y*r)}static DivV(t,r){return new V(t.x/r.x,t.y/r.y)}static MulV(t,r){return new V(t.x*r.x,t.y*r.y)}static Neg(t){return new V(-t.x,-t.y)}static Per(t){return new V(t.y,-t.x)}static Abs(t){return new V(Math.abs(t.x),Math.abs(t.y))}static Dist(t,r){return((t.y-r.y)**2+(t.x-r.x)**2)**.5}static ManhattanDist(t,r){return Math.abs(t.x-r.x)+Math.abs(t.y-r.y)}static DistMin(t,r,a){return(t.x-r.x)*(t.x-r.x)+(t.y-r.y)*(t.y-r.y)<a**2}static Dist2(t,r){return(t.x-r.x)*(t.x-r.x)+(t.y-r.y)*(t.y-r.y)}static Dpr(t,r){return t.x*r.x+t.y*r.y}static Cross(t,r){return new V(t.y*r.z-t.z*r.y,t.z*r.x-t.x*r.z)}static Cpr(t,r){return t.x*r.y-r.x*t.y}static Len2(t){return t.x*t.x+t.y*t.y}static Len(t){return(t.x*t.x+t.y*t.y)**.5}static Pry(t,r){return V.Dpr(t,r)/V.Len(r)}static Uni(t){const r=V.Len(t);return new V(r===0?0:t.x/r,r===0?0:t.y/r)}static Tan(t,r){return V.Uni(V.Sub(t,r))}static Min(t,r){return new V(Math.min(t.x,r.x),Math.min(t.y,r.y))}static Max(t,r){return new V(Math.max(t.x,r.x),Math.max(t.y,r.y))}static From({x:t,y:r,z:a=1}){return new V(t,r,a)}static FromArray(t){return new V(t[0],t[1])}static Rot(t,r=0){const a=Math.sin(r),s=Math.cos(r);return new V(t.x*s-t.y*a,t.x*a+t.y*s)}static RotWith(t,r,a){const s=t.x-r.x,l=t.y-r.y,u=Math.sin(a),d=Math.cos(a);return new V(r.x+(s*d-l*u),r.y+(s*u+l*d))}static NearestPointOnLineThroughPoint(t,r,a){return V.Mul(r,V.Sub(a,t).pry(r)).add(t)}static NearestPointOnLineSegment(t,r,a,s=!0){if(V.Equals(t,a)||V.Equals(r,a))return V.From(a);const l=V.Tan(r,t),u=V.Add(t,V.Mul(l,V.Sub(a,t).pry(l)));if(s){if(u.x<Math.min(t.x,r.x))return V.Cast(t.x<r.x?t:r);if(u.x>Math.max(t.x,r.x))return V.Cast(t.x>r.x?t:r);if(u.y<Math.min(t.y,r.y))return V.Cast(t.y<r.y?t:r);if(u.y>Math.max(t.y,r.y))return V.Cast(t.y>r.y?t:r)}return u}static DistanceToLineThroughPoint(t,r,a){return V.Dist(a,V.NearestPointOnLineThroughPoint(t,r,a))}static DistanceToLineSegment(t,r,a,s=!0){return V.Dist(a,V.NearestPointOnLineSegment(t,r,a,s))}static Snap(t,r=1){return new V(Math.round(t.x/r)*r,Math.round(t.y/r)*r)}static Cast(t){return t instanceof V?t:V.From(t)}static Slope(t,r){return t.x===r.y?NaN:(t.y-r.y)/(t.x-r.x)}static IsNaN(t){return isNaN(t.x)||isNaN(t.y)}static Angle(t,r){return Math.atan2(r.y-t.y,r.x-t.x)}static AngleBetween(t,r){const a=t.x*r.x+t.y*r.y,s=Math.sqrt((Math.pow(t.x,2)+Math.pow(t.y,2))*(Math.pow(r.x,2)+Math.pow(r.y,2)));return(t.x*r.y-t.y*r.x<0?-1:1)*Math.acos(xM(a/s,-1,1))}static Lrp(t,r,a){return V.Sub(r,t).mul(a).add(t)}static Med(t,r){return new V((t.x+r.x)/2,(t.y+r.y)/2)}static Equals(t,r){return Math.abs(t.x-r.x)<1e-4&&Math.abs(t.y-r.y)<1e-4}static EqualsXY(t,r,a){return t.x===r&&t.y===a}static Clockwise(t,r,a){return(a.x-t.x)*(r.y-t.y)-(r.x-t.x)*(a.y-t.y)<0}static Rescale(t,r){const a=V.Len(t);return new V(r*t.x/a,r*t.y/a)}static ScaleWithOrigin(t,r,a){return V.Sub(t,a).mul(r).add(a)}static ToFixed(t){return new V(ko(t.x),ko(t.y))}static ToInt(t){return new V(parseInt(t.x.toFixed(0)),parseInt(t.y.toFixed(0)),parseInt((t.z??0).toFixed(0)))}static ToCss(t){return`${t.x},${t.y}`}static Nudge(t,r,a){return V.Add(t,V.Tan(r,t).mul(a))}static ToString(t){return`${t.x}, ${t.y}`}static ToAngle(t){let r=Math.atan2(t.y,t.x);return r<0&&(r+=Math.PI*2),r}static FromAngle(t,r=1){return new V(Math.cos(t)*r,Math.sin(t)*r)}static ToArray(t){return[t.x,t.y,t.z]}static ToJson(t){const{x:r,y:a,z:s}=t;return{x:r,y:a,z:s}}static Average(t){const r=t.length,a=new V(0,0);if(r===0)return a;for(let s=0;s<r;s++)a.add(t[s]);return a.div(r)}static Clamp(t,r,a){return a===void 0?new V(Math.min(Math.max(t.x,r)),Math.min(Math.max(t.y,r))):new V(Math.min(Math.max(t.x,r),a),Math.min(Math.max(t.y,r),a))}static PointsBetween(t,r,a=6){const s=[];for(let l=0;l<a;l++){const u=Fm.easeInQuad(l/(a-1)),d=V.Lrp(t,r,u);d.z=Math.min(1,.5+Math.abs(.5-_6(u))*.65),s.push(d)}return s}static SnapToGrid(t,r=8){return new V(Math.round(t.x/r)*r,Math.round(t.y/r)*r)}}const _6=e=>e<.5?2*e*e:-1+(4-2*e)*e,{PI:S6}=Math,Hp=S6+1e-4;function T6(e,t={}){const{size:r=16,smoothing:a=.5}=t;if(e.length===0||r<=0)return{left:[],right:[]};const s=e[0],l=e[e.length-1],u=l.runningLength,d=Math.pow(r*a,2),f=[],h=[];let v=e[0].vector,g=e[0].point,b=g,w=g,_=b,T=!1,k;for(let S=0;S<e.length;S++){k=e[S];const{point:E,vector:M}=e[S],z=k.vector.dpr(v),R=(S<e.length-1?e[S+1]:e[S]).vector,F=S<e.length-1?R.dpr(k.vector):1,I=z<0&&!T,J=F!==null&&F<.2;if(I||J){if(F>-.62&&u-k.runningLength>k.radius){const ge=v.clone().mul(k.radius);v.clone().cpr(R)<0?(w=V.Add(E,ge),_=V.Sub(E,ge)):(w=V.Sub(E,ge),_=V.Add(E,ge)),f.push(w),h.push(_)}else{const ge=v.clone().mul(k.radius).per(),fe=V.Sub(k.input,ge);for(let ae=1/13,je=0;je<1;je+=ae)w=V.RotWith(fe,k.input,Hp*je),f.push(w),_=V.RotWith(fe,k.input,Hp+Hp*-je),h.push(_)}g=w,b=_,J&&(T=!0);continue}if(T=!1,k===s||k===l){const ge=V.Per(M).mul(k.radius);f.push(V.Sub(E,ge)),h.push(V.Add(E,ge));continue}const ne=V.Lrp(R,M,F).per().mul(k.radius);w=V.Sub(E,ne),(S<=1||V.Dist2(g,w)>d)&&(f.push(w),g=w),_=V.Add(E,ne),(S<=1||V.Dist2(b,_)>d)&&(h.push(_),b=_),v=M}return{left:f,right:h}}const k6=.025,E6=.01;function C6(e,t={}){var k;const{streamline:r=.5,size:a=16,simulatePressure:s=!1}=t;if(e.length===0)return[];const l=.15+(1-r)*.85;let u=e.map(V.From),d=0;if(!s){let S=u[0];for(;S&&!(S.z>=k6);)u.shift(),S=u[0]}if(!s){let S=u[u.length-1];for(;S&&!(S.z>=E6);)u.pop(),S=u[u.length-1]}if(u.length===0)return[{point:V.From(e[0]),input:V.From(e[0]),pressure:s?.5:.15,vector:new V(1,1),distance:0,runningLength:0,radius:1}];let f=u[1];for(;f&&!(V.Dist2(f,u[0])>(a/3)**2);)u[0].z=Math.max(u[0].z,f.z),u.splice(1,1),f=u[1];const h=u.pop();for(f=u[u.length-1];f&&!(V.Dist2(f,h)>(a/3)**2);)u.pop(),f=u[u.length-1],d++;u.push(h);const v=t.last||!t.simulatePressure||u.length>1&&V.Dist2(u[u.length-1],u[u.length-2])<a**2||d>0;if(u.length===2&&t.simulatePressure){const S=u[1];u=u.slice(0,-1);for(let E=1;E<5;E++){const M=V.Lrp(u[0],S,E/4);M.z=(u[0].z+(S.z-u[0].z))*E/4,u.push(M)}}const g=[{point:u[0],input:u[0],pressure:s?.5:u[0].z,vector:new V(1,1),distance:0,runningLength:0,radius:1}];let b=0,w=g[0],_,T;v&&r>0&&u.push(u[u.length-1].clone());for(let S=1,E=u.length;S<E;S++)_=!l||t.last&&S===E-1?u[S].clone():u[S].clone().lrp(w.point,1-l),!w.point.equals(_)&&(T=V.Dist(_,w.point),b+=T,!(S<4&&b<a)&&(w={input:u[S],point:_,pressure:s?.5:u[S].z,vector:V.Sub(w.point,_).uni(),distance:T,runningLength:b,radius:1},g.push(w)));if((k=g[1])!=null&&k.vector&&(g[0].vector=g[1].vector.clone()),b<1){const S=Math.max(.5,...g.map(E=>E.pressure));g.forEach(E=>E.pressure=S)}return g}const{min:Oi}=Math,Ip=.275;function A6(e,t){const{size:r=16,thinning:a=.5,simulatePressure:s=!0,easing:l=k=>k,start:u={},end:d={}}=t,{easing:f=Fm.easeOutQuad}=u,{easing:h=Fm.easeOutCubic}=d,v=e[e.length-1].runningLength;let g,b=e[0].pressure,w;if(!s&&v<r){const k=e.reduce((S,E)=>Math.max(S,E.pressure),.5);return e.forEach(S=>{S.pressure=k,S.radius=r*l(.5-a*(.5-S.pressure))}),e}else{let k;for(let S=0,E=e.length;S<E&&(w=e[S],!(w.runningLength>r*5));S++){const M=Oi(1,w.distance/r);if(s){const z=Oi(1,1-M);k=Oi(1,b+(z-b)*(M*Ip))}else k=Oi(1,b+(w.pressure-b)*.5);b=b+(k-b)*.5}for(let S=0;S<e.length;S++){if(w=e[S],a){let{pressure:E}=w;const M=Oi(1,w.distance/r);if(s){const z=Oi(1,1-M);E=Oi(1,b+(z-b)*(M*Ip))}else E=Oi(1,b+(E-b)*(M*Ip));w.radius=r*l(.5-a*(.5-E)),b=E}else w.radius=r/2;g===void 0&&(g=w.radius)}}const _=u.taper===!1?0:u.taper===!0?Math.max(r,v):u.taper,T=d.taper===!1?0:d.taper===!0?Math.max(r,v):d.taper;if(_||T)for(let k=0;k<e.length;k++){w=e[k];const{runningLength:S}=w,E=S<_?f(S/_):1,M=v-S<T?h((v-S)/T):1;w.radius=Math.max(.01,w.radius*Math.min(E,M))}return e}function M6(e,t={}){const{start:r={},end:a={}}=t,{cap:s=!0}=r,{cap:l=!0}=a;jp(!r.taper&&!a.taper,"cap taper not supported here"),jp(!r.easing&&!a.easing,"cap easing not supported here"),jp(s&&l,"cap must be true");const u=C6(e,t);A6(u,t);const d=O6(u);let f="";for(const h of d)f+=z6(h,t);return f}function O6(e){if(e.length<=2)return[e];const t=[];let r=[e[0]],a=V.Sub(e[1].point,e[0].point).uni(),s,l,u,d,f;for(let h=1,v=e.length;h<v-1;h++){if(u=e[h-1],d=e[h],f=e[h+1],s=V.Sub(f.point,d.point).uni(),l=V.Dpr(a,s),a=s,l<-.8){const g={...d,point:d.input};r.push(g),t.push(qp(r)),r=[g];continue}if(r.push(d),!(l>.7)&&(V.Dist2(u.point,d.point)+V.Dist2(d.point,f.point))/((u.radius+d.radius+f.radius)/3)**2<1.5){r.push(d),t.push(qp(r)),r=[d];continue}}return r.push(e[e.length-1]),t.push(qp(r)),t}function qp(e){const t=e[0];let r;for(;e.length>2&&(r=e[1],V.Dist2(t.point,r.point)<((t.radius+r.radius)/2*.5)**2);)e.splice(1,1);const a=e[e.length-1];let s;for(;e.length>2&&(s=e[e.length-2],V.Dist2(a.point,s.point)<((a.radius+s.radius)/2*.5)**2);)e.splice(e.length-2,1);return e.length>1&&(e[0]={...e[0],vector:V.Sub(e[0].point,e[1].point).uni()},e[e.length-1]={...e[e.length-1],vector:V.Sub(e[e.length-2].point,e[e.length-1].point).uni()}),e}function N6(e,t,r){return"M "+e+" "+t+" m -"+r+", 0 a "+r+","+r+" 0 1,1 "+r*2+",0 a "+r+","+r+" 0 1,1 -"+r*2+",0"}function z6(e,t={}){if(e.length===0)return"";if(e.length===1)return N6(e[0].point.x,e[0].point.y,e[0].radius);const{left:r,right:a}=T6(e,t);a.reverse();let s=`M${Ks(r[0])}T`;for(let l=1;l<r.length;l++)s+=S1(r[l-1],r[l]);{const l=e[e.length-1],u=l.radius,d=l.vector.clone().per().neg(),f=V.Add(l.point,V.Mul(d,u)),h=V.Add(l.point,V.Mul(d,-u));s+=`${Ks(f)}A${zi(u)},${zi(u)} 0 0 1 ${Ks(h)}T`}for(let l=1;l<a.length;l++)s+=S1(a[l-1],a[l]);{const l=e[0],u=l.radius,d=l.vector.clone().per(),f=V.Add(l.point,V.Mul(d,u)),h=V.Add(l.point,V.Mul(d,-u));s+=`${Ks(f)}A${zi(u)},${zi(u)} 0 0 1 ${Ks(h)}Z`}return s}function j6(){const e=Pe(),t=Z2(e,EM),r=Ct({color:g_[1],width:nl[1]}),a=Ct([]),s=Pe(),l=Pe(),u=Pe(),d=Pe(),f=Pe(),h=Ct([]),v=h.map(k=>k.length),g=Pe(),b=Pe(),w=Pe();h.on(u,k=>{const S=Date.now(),E=S-1e3,M=k.filter(z=>z>E);return M.push(S),M}),r.on(s,(k,S)=>({...k,...S})),a.on(w,()=>[]).on(g,(k,S)=>S).on(b,(k,S)=>S).on(u,(k,S)=>{const E=[...k],M=E.at(-1);return M.dots=[...M.dots,S],E}).on(f,(k,S)=>{const E=[...k];return E.pop(),E}),Gt({source:[a,r],clock:l,fn:([k,{color:S,width:E}],M)=>[...k,{dots:[M],color:S,width:E}],target:a});const _=wr(a,k=>{const S=[];return k.forEach(E=>{const M=M6(E.dots.map(z=>new V(z[0],z[1])),{size:E.width});S.push({d:M,color:E.color})}),S}),T=wr(a,k=>{const S=[];return k.forEach((E,M)=>{const R=E.dots.map(([F,I])=>`${F},${I}`).join(" ");S.push({points:R,color:E.color,strokeWidth:E.width})}),S});return{$currentDrawing:a,$currentLineParams:r,lineParamsChanged:s,undoClicked:f,initLoad:b,newRound:w,lineStarted:l,lineExtended:u,somebodyDrawing:g,$svgCanvasPaths:_,$polylinePaths:T,$lineExtendedCount:v,$smoothConf:t,setSmoothConf:e,saveCanvasToPaining:d}}function D6(e){const{$localId:t,$newParty:r,log:a}=e,s=wr(t,r,(v,g)=>{if(!g)return{drawing:!1};if(g.status===cn.inProgress&&g.gameState.state==="drawing"){const b=g.gameState;return{gameState:g.gameState,drawing:!0,iam:v===b.playerId,who:b.playerId,word:b.word}}return{drawing:!1}}),l=s.map(v=>v.drawing&&v.iam),u=l,d=j6(),f=r.map(v=>v&&v.gameState.state==="drawing"?v.gameState.drawingId:null);return Gt({clock:f,target:d.newRound}),_m(r,v=>{if(!v)return()=>[];a(`joinRoom ${v.id}`);const g=pe.joinRoom("party",v.id);a("joined");const b=d.$currentDrawing.watch(_=>{l.getState()&&(a("publishTopic"),g.publishTopic("currentCanvas",{currentDrawing:_}))}),w=g.subscribeTopic("currentCanvas",_=>{a("currentCanvas"),l.getState()||d.somebodyDrawing(_.currentDrawing)});return()=>{a("unsubscribe"),b(),w(),g.leaveRoom()}}),Gt({source:[d.$currentDrawing,r],clock:d.saveCanvasToPaining}).watch(([v,g])=>{(g==null?void 0:g.gameState.state)==="drawing"&&aj(g.gameState.drawingId,v)}),{$drawing:s,$isServer:u,currentLine:d,$currentDrawingId:f}}function R6(e){var{timeout:t,start:r,stop:a,leading:s=!1,trailing:l=!1}=e,u=Pe({name:"setup",sid:"-ajee8b"});r&&Gt({and:[{clock:r,target:u}],or:{sid:"-wq30tc"}});var d=Pe({name:"teardown",sid:"-on6wf8"});a&&Gt({and:[{clock:a,target:d}],or:{sid:"-wloo2g"}});var f=Pe({name:"tick",sid:"37avek"}),h=Ct(!1,{name:"$isRunning",sid:"amqfro"}),v=U6(t),g=h.map(E=>!E,{skipVoid:!1}),b=Pe({name:"saveTimeout",sid:"-goth3o"}),w=Ct(null,{name:"$timeoutId",sid:"xi134t"}).on(b,(E,M)=>{var{timeoutId:z}=M;return z}),_=Ct(()=>{},{name:"$rejecter",sid:"-2am6sk"}).on(b,(E,M)=>{var{reject:z}=M;return z}),T=h1({and:{source:{timeout:v,running:h},effect:E=>{var{timeout:M,running:z}=E;return z?new Promise((R,F)=>{var I=setTimeout(R,M);b({timeoutId:I,reject:F})}):Promise.reject()}},or:{name:"timeoutFx",sid:"-hiem3q"}}),k=h1({and:{source:{timeoutId:w,rejecter:_},effect:E=>{var{timeoutId:M,rejecter:z}=E;z(),M&&clearTimeout(M)}},or:{name:"cleanupFx",sid:"d148gq"}});if(Gt({and:[{clock:u,source:v,filter:g,target:T}],or:{sid:"-u9k5bx"}}),s){var S=Gt({and:[{clock:u,filter:g}],or:{name:"onReady",sid:"5o8c6v"}});Gt({and:[{clock:S,target:f}],or:{sid:"6njtce"}})}return Gt({and:[{clock:u,fn:()=>!0,target:h}],or:{sid:"6p772r"}}),Gt({and:[{clock:T.done,source:v,filter:h,target:T}],or:{sid:"741n3i"}}),Gt({and:[{clock:T.done,filter:h,target:f.prepend(()=>{})}],or:{sid:"7jfvpm"}}),l&&Gt({and:[{clock:d,target:f}],or:{sid:"7zxpk6"}}),h.on(d,()=>!1),Gt({and:[{clock:d,target:k}],or:{sid:"84c29c"}}),{tick:f,isRunning:h,"@@trigger":()=>({setup:u,teardown:d,fired:f})}}function U6(e){if(el.store(e,{sid:"90rxd3"}))return e;if(typeof e=="number")return Ct(e,{and:{name:"$timeout"},sid:"-3ibdj9"});throw new TypeError('timeout parameter in interval method should be number or Store. "'.concat(typeof e,'" was passed'))}function $6(){let e=Pe();const t=R6({timeout:1e3,start:e});e();let r=Ct(0);return r.on(t.tick,a=>a+1),r}function L6(e){const t=Ct(""),r=Pe();t.on(r,(T,k)=>k);const a=Ct(null),s=Pe();a.on(s,(T,k)=>k);const l=Pe(),u=Ct([]);u.on(l,(T,k)=>k),u.watch(T=>{console.log("$allMyParties",T)});const d=a.map(T=>(T==null?void 0:T.roomEvents)||[]),f=a.map(T=>Object.fromEntries((T==null?void 0:T.newPlayers.map(k=>[k.id,k]))||[])),h=a.map(T=>T?T.gameProgress.flatMap(k=>k.flatMap(S=>S.paintingId)):[]),v=a.map(T=>T?T.gameState.state==="drawing"?T.gameState.guessed:{}:{}),g=wr(e,a,(T,k)=>k?k.status!==cn.inProgress?{choose:!1}:k.gameState.state==="choosing-word"?T===k.gameState.playerId?{choose:!0,iam:!0,who:k.gameState.playerId,words:k.gameState.words}:{choose:!0,iam:!1,who:k.gameState.playerId,words:[]}:{choose:!1}:{choose:!1});let b=$6();const w=wr(e,a,(T,k)=>!k||k.status!==cn.inProgress||k.gameState.state!=="drawing"?null:k.gameState),_=wr(w,a,b,(T,k)=>{if(!k||!T)return null;let S=k.gameParams.drawTime-(Date.now()-T.startedAt)/1e3;return Math.max(Math.floor(S),0)});return _m(e,T=>T?pe.subscribeQuery({party:{$:{where:{"newPlayers.id":T},order:{serverCreatedAt:"desc"}}}},k=>{if(k.data&&k.data.party){l(k.data.party.map(S=>({id:S.id,name:S.name,status:S.status})));return}console.warn("Something went wrong"),console.log(k)}):()=>{}),_m(t,T=>T?pe.subscribeQuery({party:{$:{where:{name:T},limit:1},newPlayers:{},roomEvents:{}}},k=>{if(k.data&&k.data.party){s(k.data.party[0]);return}console.warn("Something went wrong"),console.log(k)}):()=>{}),{newPartyLoaded:s,$newParty:a,$allMyParties:u,$allChatEvents:d,$currentPlayers:f,$partyPaintingIds:h,$guessed:v,$choosingWord:g,$drawingState:w,$timeout:_,$pagePartyName:t,pageOpened:r}}const H6=Y6(),Od=H6.$user,Ma=Od.map(e=>(e==null?void 0:e.id)||""),sS=Pe(),lS=Pe(),Fo=Pe(),cS=Ct([]);cS.on(Fo,(e,t)=>[...e,t]);const I6=cS.map(x6),Sa=L6(Ma),{$newParty:kr,$allChatEvents:q6,$currentPlayers:Nd,$partyPaintingIds:F6,$guessed:B6,$choosingWord:uS}=Sa,P6=D6({$localId:Ma,$newParty:kr,log:Fo}),{$drawing:Ig,$isServer:dS,currentLine:Pn}=P6;Gt({source:[Ma,kr],clock:lS,fn:(e,t)=>[e,t]}).watch(([[e,t],r])=>{t&&nj(e,t.id,r)});wr(B6,kr,dS).watch(([e,t,r])=>{if(!t)return;const{newPlayers:a,staticPlayerIds:s,gameState:l,gameProgress:u,gameParams:d}=t;if(r&&l.state==="drawing"&&Object.keys(e).length===s.length-1){const f=l.playerId,h=a.findIndex(v=>v.id===f)+1;u.length===0&&u.push([]),u.at(-1).push({paintingId:l.drawingId,whoDrawId:l.playerId,scores:l.guessed}),a[h]?od(a[h].id,l,t.id,u):(u.push([]),u.length<d.rounds?(Fo(`nextPlayerChoosingWord: ${a[0].id}`),od(a[0].id,l,t.id,u)):(Fo("game finished!"),pS(t.id,u)))}});wr(kr,dS,Sa.$timeout).watch(([e,t,r])=>{if(!e||!t)return;const{newPlayers:a,gameState:s,gameProgress:l,gameParams:u}=e;if(s.state!=="drawing"||r===null||r>0)return;const d=s.playerId,f=a.findIndex(h=>h.id===d)+1;l.length===0&&l.push([]),l.at(-1).push({paintingId:s.drawingId,whoDrawId:s.playerId,scores:s.guessed}),a[f]?od(a[f].id,s,e.id,l,!0):(l.push([]),l.length<u.rounds?(Fo(`nextPlayerChoosingWord: ${a[0].id}`),od(a[0].id,s,e.id,l,!0)):(Fo("game finished!"),pS(e.id,l)))});Gt({source:[Ma,kr],clock:sS,fn:(e,t)=>[e,t]}).watch(([[e,t],{guess:r}])=>{if(!t)return;const a=t.gameState,s=a.state==="drawing"?a.word:null,l=s?m_(s,r):"none";ij(e,t.id,r,l)});function Y6(){const e=Ct(null),t=Pe();return e.on(t,(r,a)=>a),rj(r=>t(r)),{$user:e}}function lx(e){return e[Math.floor(Math.random()*e.length)]}function X6(){return lx(V6)+" "+lx(G6)}const G6=["cat","dog","sun","sky","tree","bird","fish","hand","foot","ball","star","book","car","bed","toy","hat","cup","box","map","pen"],V6=["big","hot","red","old","wet","new","sad","tall","cold","fat","dry","fun","shy","blue","cute","kind","dark","loud","warm","fast"];async function ad(e,t){return pe.transact([pe.tx.$users[e].update({name:t})])}async function Q6(e){const{data:{party:t}}=await pe.queryOnce({party:{$:{where:{status:cn.prepare,name:e}}}});return t&&t[0]||null}async function fS(e){const{data:{party:t}}=await pe.queryOnce({party:{$:{where:{id:e}}}});return t[0]||null}async function K6(e,t){const r=await fS(t);if(!r)throw new Error(`Party not found '${t}'`);if(r.status!==cn.prepare)throw new Error(`Can't join to party in '${r.status}' status`);return await pe.transact([pe.tx.party[t].link({newPlayers:e})])}async function W6(e){const t=e.id,r=await fS(t);if(!r)throw new Error(`Party not found '${t}'`);if(r.status!==cn.prepare)throw new Error(`Can't start to party in '${r.status}' status`);const a=e.newPlayers.map(s=>s.id);await pe.transact([pe.tx.party[t].update({status:cn.inProgress,staticPlayerIds:a,gameProgress:[[]],gameState:{state:"choosing-word",playerId:a[0],words:Eg(3)}}),pe.tx.roomEvent[Je()].create({type:"game-started",payload:{playerId:a[0]}}).link({party:t})])}async function Z6(){return(await pe.queryOnce({players:{}})).data.players}async function J6(e,t){return await pe.transact([pe.tx.party[e].unlink({newPlayers:t})])}async function ej(e,t){return await pe.transact([pe.tx.party[t].unlink({newPlayers:e})])}async function hS(e){return await pe.transact([pe.tx.party[e].update({status:cn.finished})])}async function Fp(e,t){return await pe.transact([pe.tx.party[e].merge({gameParams:t})])}async function tj(e,t){var s;const r=Je(),{$users:a}=await pe.queryOnce({$users:{$:{where:{id:e}},parties:{$:{where:{status:cn.prepare}}}}}).then(l=>l.data);if((s=a[0])!=null&&s.parties&&a[0].parties.length>0)throw new Error("User already has a party in prepare status. Please finish or leave that party first.");return await pe.transact([pe.tx.party[r].create({name:t,host:e,gameState:{state:"game-prepare"},gameProgress:[[]],gameParams:{rounds:5,wordSuggestions:3,drawTime:60},staticPlayerIds:[],status:cn.prepare}).link({newPlayers:e})]),pe.queryOnce({party:{$:{where:{id:r}}}}).then(l=>l.data.party[0])}function nj(e,t,r){const a=Je();return pe.transact([pe.tx.roomEvent[Je()].create({type:"new-selected-word",payload:{playerId:e,word:r}}).link({party:t}),pe.tx.paintings[a].create({canvas:[],playerId:e,word:r}),pe.tx.party[t].update({gameState:{state:"drawing",playerId:e,word:r,clue:r.replace(/[^\s-! ,.]/g,"_"),drawingId:a,guessed:{},startedAt:Date.now()}})])}function od(e,t,r,a,s){const l={type:"drawing-ended",payload:{reason:s?"timeout":"all-revealed",revealed:t.guessed,nextPlayerId:e}};return pe.transact([pe.tx.party[r].update({gameState:{state:"choosing-word",playerId:e,words:Eg(3)},gameProgress:a}),pe.tx.roomEvent[Je()].create(l).link({party:r})])}function pS(e,t){const r={type:"game-finished",payload:{reason:"no-more-rounds"}};return pe.transact([pe.tx.party[e].update({gameState:{state:"game-finished"},status:cn.finished,gameProgress:t}),pe.tx.roomEvent[Je()].create(r).link({party:e})])}function rj(e){pe.getAuth().then(t=>t||pe.auth.signInAsGuest().then(({user:r})=>ad(r.id,X6()).then(()=>r))).then(t=>{pe.subscribeQuery({$users:{$:{where:{id:t.id}}}},({data:r})=>{r!=null&&r.$users[0]?e({id:t.id,name:r.$users[0].name||""}):e({id:t.id,name:"error"})})})}function ij(e,t,r,a){const s={type:"user-message",payload:{text:r,playerId:e,isRevealed:a}};return pe.transact([pe.tx.roomEvent[Je()].create(s).link({party:t}),...a==="revealed"?[pe.tx.party[t].merge({gameState:{guessed:{[e]:Date.now()}}})]:[]])}function aj(e,t){return pe.transact(pe.tx.paintings[e].update({canvas:t}))}const oj="f1s19u7s",cx="r1tfqkdw",ux="j3oqpbh",sj="d1kn1quj",lj="a1e99y0k";function dx(){return O.jsx(ar,{children:O.jsx(cj,{})})}function cj(){const e=Ke(Od),t=Ke(Sa.$allMyParties),[r,a]=de.useState(""),[s,l]=de.useState((e==null?void 0:e.name)||""),[u,d]=de.useState(Eg(3).join("-")),[f,h]=vd(),v=async()=>{try{const w=await tj(e.id,u);h(er(w.name))}catch(w){console.error("Failed to create party:",w)}},g=()=>{e&&s.trim()&&ad(e.id,s.trim())},b=s.trim()===((e==null?void 0:e.name)||"");return O.jsxs("div",{className:oj,children:[O.jsxs("div",{className:cx,children:[O.jsx(Sm,{label:"Имя",value:s,onChange:l}),O.jsx("button",{onClick:g,className:ux,disabled:b,children:"Сохранить"})]}),O.jsx("div",{children:O.jsxs("form",{onSubmit:w=>{w.preventDefault(),ad(e.id,s.trim()),Q6(r).then(_=>{if(_)return K6(e.id,_.id).then(()=>{h(er(_.name))})})},className:cx,children:[O.jsx(Sm,{label:"Комната",value:r,onChange:a}),O.jsx("button",{type:"submit",className:ux,children:"Войти"})]})}),O.jsx("div",{className:sj,children:O.jsx("span",{children:"или"})}),O.jsx(v_,{onClick:v,children:"Создать новую игру"}),O.jsx("ul",{className:lj,children:t.map(w=>O.jsx("li",{children:O.jsxs(ua,{href:er(`room/${w.name}`),children:[w.name," ",O.jsx("b",{children:w.status})]})},w.id))})]})}const uj=["домино","стрэй кидс","феликс","бан чан","лино","лифт","концерт","скотч","дом","вода","лёд","квадрат","круг","карандаш","линейка","суши","рамён","дождь","играть","читать","учиться","дерево","растение","работать","сундук","майнкрафт","рисовать","кей-поп","акула","рыба","холод","свет","балкон","программист","пенал","мороженое","куб","лава","вулкан","кот","мяч","танцевать","урок","колонка","плавать","диплом","тюльпан","фото","чашка","кунг-фу","цирк","кролик","рокета","хранилище","семья","родители","ребёнок","мама","папа","счастье","космос","солнце","небо","корона","земля","флаг","королева","король","ворота","сердечко","пульт","маркер","ручка","рука","ножницы","кнопка","тетрадь","айпад","ниндзя","воздух","звук","единорог","телевизор","цветок","гусь","корея","Нидерланды"],dj=["кот","собака","дом","машина","дерево","солнце","луна","звезда","море","река","гора","лес","цветок","трава","небо","облако","дождь","снег","ветер","огонь","вода","земля","камень","песок","лед","пламя","дым","туман","радуга","молния","хлеб","молоко","мясо","рыба","яйцо","сыр","масло","сахар","соль","перец","яблоко","банан","апельсин","лимон","виноград","клубника","вишня","персик","груша","ананас","морковь","картофель","лук","чеснок","помидор","огурец","капуста","салат","редис","свекла","стол","стул","кровать","шкаф","диван","кресло","лампа","зеркало","часы","телевизор","компьютер","телефон","книга","ручка","карандаш","бумага","тетрадь","рюкзак","сумка","кошелек","рубашка","брюки","платье","юбка","куртка","пальто","шляпа","кепка","носки","туфли","сапоги","кроссовки","тапочки","перчатки","шарф","ремень","очки","часы","кольцо","серьги","автобус","поезд","самолет","корабль","велосипед","мотоцикл","грузовик","такси","метро","трамвай","врач","учитель","водитель","повар","продавец","строитель","художник","музыкант","актер","писатель","мама","папа","сын","дочь","брат","сестра","дедушка","бабушка","дядя","тетя","школа","университет","больница","магазин","ресторан","кафе","театр","кино","музей","парк","спорт","футбол","баскетбол","теннис","плавание","бег","йога","танцы","музыка","пение","гитара","пианино","скрипка","барабаны","флейта","труба","саксофон","микрофон","динамик","наушники","красный","синий","зеленый","желтый","черный","белый","серый","розовый","фиолетовый","оранжевый","большой","маленький","высокий","низкий","длинный","короткий","широкий","узкий","толстый","тонкий","быстрый","медленный","горячий","холодный","сухой","мокрый","чистый","грязный","новый","старый","один","два","три","четыре","пять","шесть","семь","восемь","девять","десять","понедельник","вторник","среда","четверг","пятница","суббота","воскресенье","день","ночь","утром","весна","лето","осень","зима","январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь","год","месяц","неделя","час","минута","секунда","время","часы","будильник","календарь","дата","праздник","день рождения","свадьба","любовь","дружба","семья","счастье","радость","грусть","злость","страх","удивление","смех","плач","улыбка","объятие","поцелуй","подарок","сюрприз","мечта","надежда","вера","удача","работа","отдых","игра","развлечение","хобби","путешествие","отпуск","выходные","каникулы","приключение","здоровье","болезнь","лекарство","витамины","спорт","диета","сон","усталость","энергия","сила","деньги","покупки","продажа","цена","скидка","банк","кредит","зарплата","бюджет","экономия","еда","завтрак","обед","ужин","кухня","рецепт","готовка","посуда","тарелка","чашка","нож","вилка","ложка","кастрюля","сковорода","духовка","холодильник","микроволновка","тостер","блендер","шоколад","конфеты","торт","печенье","мороженое","напиток","сок","чай","кофе","лимонад","пляж","отель","чемодан","билет","паспорт","фото","камера","видео","селфи","воспоминание","интернет","сайт","email","сообщение","чат","социальная сеть","блог","видеоблог","подписчик","лайк","фильм","сериал","актер","режиссер","сценарий","роль","премьера","билет","попкорн","3D","животное","птица","рыба","насекомое","млекопитающее","хищник","травоядное","дикое","домашнее","зоопарк","лев","тигр","слон","жираф","обезьяна","медведь","волк","лиса","заяц","белка","птица","орел","сова","попугай","воробей","голубь","ласточка","аист","пингвин","фламинго","акула","дельфин","кит","осьминог","краб","морская звезда","медуза","креветка","лосось","тунец","пчела","бабочка","муравей","паук","жук","комар","муха","стрекоза","кузнечик","божья коровка","роза","тюльпан","ромашка","подсолнух","лилия","орхидея","фиалка","гвоздика","пион","ирис","дуб","береза","сосна","ель","клен","липа","каштан","ива","тополь","рябина","футболист","теннисист","пловец","боксер","гимнаст","лыжник","хоккеист","баскетболист","велосипедист","бегун","стадион","спортзал","бассейн","корт","поле","каток","лыжня","беговая дорожка","тренажер","мяч","ракетка","клюшка","шайба","ворота","сетка","финиш","старт","медаль","кубок","чемпион","математика","физика","химия","биология","история","география","литература","русский язык","английский","информатика","урок","учебник","тетрадь","доска","мел","парта","класс","перемена","звонок","домашнее задание","оценка","экзамен","тест","контрольная","диктант","сочинение","презентация","проект","исследование","эксперимент","погода","прогноз","температура","градус","термометр","барометр","влажность","давление","ветер","буря","ясно","пасмурно","дождливо","снежно","туманно","солнечно","ветрено","прохладно","тепло","жарко","зонт","дождевик","солнцезащитные очки","крем от загара","шляпа от солнца","перчатки","варежки","шарф","шапка","сапоги","космос","планета","звезда","галактика","солнечная система","астронавт","ракета","спутник","телескоп","НЛО","Земля","Марс","Венера","Юпитер","Сатурн","Меркурий","Уран","Нептун","Плутон","комета","океан","континент","страна","город","деревня","столица","граница","карта","компас","GPS","Россия","Москва","Санкт-Петербург","Америка","Европа","Азия","Африка","Австралия","Антарктида","остров","церковь","храм","мечеть","синагога","монастырь","собор","колокол","крест","икона","свеча","праздник","Новый год","Рождество","Пасха","день рождения","свадьба","юбилей","выпускной","крестины","именины","подарок","торт","свечи","воздушные шары","фейерверк","конфетти","украшения","гирлянда","елка","Дед Мороз","больница","поликлиника","врач","медсестра","пациент","лечение","операция","таблетки","укол","рентген","стоматолог","окулист","кардиолог","хирург","терапевт","педиатр","психолог","ветеринар","фармацевт","скорая помощь","полиция","пожарные","спасатель","солдат","генерал","офицер","сержант","капитан","майор","полковник","суд","судья","адвокат","прокурор","свидетель","подозреваемый","обвиняемый","приговор","штраф","тюрьма","банк","банкир","кассир","счет","вклад","кредит","ипотека","процент","банкомат","карта","ресторан","кафе","бар","повар","официант","меню","заказ","счет","чаевые","кухня","отель","гостиница","номер","ключ","ресепшн","администратор","горничная","завтрак","обслуживание","бронирование","магазин","супермаркет","продавец","касса","чек","сдача","скидка","акция","распродажа","витрина","одежда","обувь","аксессуары","украшения","косметика","парфюм","сумка","кошелек","ремень","галстук","парикмахерская","салон красоты","стрижка","прическа","маникюр","педикюр","массаж","косметолог","визажист","стилист","театр","опера","балет","концерт","симфония","оркестр","дирижер","солист","хор","декорации","музей","галерея","выставка","экскурсия","гид","экспонат","картина","скульптура","археология","история","библиотека","книга","автор","писатель","поэт","роман","повесть","рассказ","стихи","сказка","газета","журнал","статья","интервью","репортаж","новости","журналист","редактор","типография","издательство","радио","телевидение","программа","ведущий","корреспондент","прямой эфир","запись","трансляция","канал","антенна","компьютер","ноутбук","планшет","смартфон","клавиатура","мышь","монитор","процессор","память","жесткий диск","программа","приложение","игра","файл","папка","документ","презентация","таблица","база данных","сайт","интернет","браузер","поиск","ссылка","домен","сервер","облако","загрузка","скачивание","обновление","email","сообщение","чат","видеозвонок","конференция","вебинар","стрим","подкаст","блог","влог","социальная сеть","профиль","друзья","подписчики","пост","фото","видео","лайк","комментарий","репост","игрушка","кукла","мишка","конструктор","пазл","настольная игра","карты","шахматы","шашки","домино","мяч","скакалка","велосипед","самокат","ролики","коньки","лыжи","сноуборд","кайт","воздушный змей","сад","огород","грядка","теплица","лейка","лопата","грабли","семена","рассада","урожай","дача","беседка","мангал","шашлык","пикник","костер","палатка","поход","рюкзак","спальный мешок","рыбалка","удочка","крючок","наживка","улов","лодка","сети","рыбак","озеро","пруд","охота","ружье","охотник","дичь","капкан","следы","лес","чаща","поляна","тропа","грибы","ягоды","корзина","нож","компас","карта","ориентирование","заблудиться","выход","тропинка","цирк","клоун","акробат","жонглер","фокусник","дрессировщик","арена","шапито","представление","номер","аттракцион","карусель","колесо обозрения","американские горки","батут","качели","горка","песочница","площадка","парк","зоопарк","вольер","клетка","кормление","экскурсия","смотритель","ветеринар","животное","хищник","травоядное","аквариум","рыбка","водоросли","ракушка","кораллы","фильтр","компрессор","корм","освещение","температура","террариум","змея","ящерица","черепаха","игуана","хамелеон","геккон","варан","питон","кобра","ферма","фермер","трактор","комбайн","плуг","борона","сеялка","жатка","силос","сено","коровник","свинарник","курятник","конюшня","овчарня","пастбище","загон","кормушка","поилка","доярка","корова","бык","теленок","свинья","поросенок","овца","баран","ягненок","коза","козленок","лошадь","жеребенок","пони","осел","мул","верблюд","олень","лось","кабан","бизон","курица","петух","цыпленок","утка","гусь","индейка","перепел","фазан","павлин","страус","мастерская","инструмент","молоток","гвоздь","винт","гайка","болт","отвертка","плоскогубцы","ключ","пила","дрель","шуруповерт","рубанок","стамеска","напильник","наждачка","уровень","рулетка","циркуль","строительство","фундамент","стены","крыша","окна","двери","лестница","балкон","терраса","веранда","кирпич","цемент","песок","щебень","арматура","бетон","раствор","штукатурка","краска","обои","электричество","проводка","розетка","выключатель","лампочка","светильник","люстра","торшер","настольная лампа","бра","водопровод","канализация","трубы","кран","смеситель","раковина","ванна","душ","унитаз","биде","отопление","батарея","радиатор","котел","трубы","термостат","камин","печь","дымоход","дрова","мебель","изготовление","дизайн","материал","дерево","металл","пластик","стекло","кожа","ткань","портной","швея","ателье","выкройка","ткань","нитки","иголка","булавка","ножницы","машинка","вышивка","вязание","спицы","крючок","пряжа","узор","петля","ряд","свитер","шарф","ювелир","золото","серебро","платина","драгоценный камень","алмаз","рубин","изумруд","сапфир","жемчуг","часовщик","механизм","циферблат","стрелки","пружина","маятник","будильник","секундомер","хронометр","таймер"],Bm=[...uj,...p_,...dj];console.log("RU",Bm.length,[...new Set(Bm)].length);const mS=Pe(),qg=Ct([]);qg.map(e=>e.filter(t=>t.lang==="RU"));qg.on(mS,(e,t)=>t);pe.subscribeQuery({words:{}},e=>{e.error&&console.error(e.error),e.data&&mS(e.data.words||[])});function fj(e,t){return pe.transact(pe.tx.words[Je()].create({word:e.trim(),lang:t.toUpperCase(),category:""}))}function hj(e,t){return pe.transact(e.slice(0,100).map(r=>pe.tx.words[Je()].create({word:r.trim(),lang:"RU",category:"",hidden:!1})))}function pj(e){return pe.transact(pe.tx.words[e].update({hidden:!0}))}function mj(e){return pe.transact(pe.tx.words[e].update({hidden:!1}))}const gj="c1oz2d7e",vj="l1jarr2t",fx="lep540s",hx="l1du7ewa",px="lrme1yy",yj="c1ecwk6i",bj="a1ffjqcv",wj="l14db0l3",xj="l1h0ddyq",_j="l196z03m",Sj="l22o07g",Tj="wff1w9h",kj="w1k6qoel",Ej="wr3pl96",Cj="w6cbh48",Aj="w8pruis",Mj="w3327kj",Oj="АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".split(""),Nj="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");function zj(){const e=Ke(qg),[t,r]=de.useState("RU"),[a,s]=de.useState("А"),[l,u]=de.useState(""),[d,f]=de.useState(!0),h=t==="RU"?Oj:Nj,v=e.filter(k=>{const S=k.lang===t,E=k.word[0].toUpperCase().startsWith(a),M=d?!0:!k.hidden;return S&&E&&M}),g=async(k,S)=>{try{S?await mj(k):await pj(k)}catch(E){console.error("Failed to toggle word visibility:",E)}},b=k=>{r(k),s(k==="RU"?"А":"A")},w=k=>{k.preventDefault(),fj(l,t).then(()=>{u("")}).catch(S=>{console.error(S),String(S.message).includes("is a unique attribute on")&&alert(`Слово "${l}" уже добавлено`)})},_=new Set(e.filter(k=>k.lang==="RU").map(k=>k.word)),T=[...new Set(Bm)].filter(k=>!_.has(k)).slice(0,100);return O.jsx(ar,{children:O.jsxs("div",{className:gj,children:[T.length>0&&O.jsx("div",{children:O.jsxs("button",{onClick:()=>{hj(T).then(()=>{console.log(`Добавлено ${T.length} новых слов`)}).catch(k=>{console.error(k)})},children:["ADD ",O.jsx("b",{children:"RU"})," ",T.length]})}),O.jsx(jj,{selectedLang:t,onLangChange:b,totalWords:e.length}),O.jsxs("label",{className:yj,children:[O.jsx("input",{type:"checkbox",checked:d,onChange:k=>f(k.target.checked)}),"Показать скрытые слова"]}),O.jsx(Dj,{selectedLang:t,newWord:l,onWordChange:u,onSubmit:w}),O.jsx(Rj,{letters:h,selectedLetter:a,onLetterChange:s}),O.jsx(Uj,{filteredWords:v,selectedLetter:a,onWordClick:g})]})})}function jj({selectedLang:e,onLangChange:t,totalWords:r}){return O.jsxs("div",{className:vj,children:[O.jsx("button",{onClick:()=>t("RU"),className:`${fx} ${e==="RU"?hx:px}`,children:"RU"}),O.jsx("button",{onClick:()=>t("EN"),className:`${fx} ${e==="EN"?hx:px}`,children:"EN"}),O.jsx("p",{children:r})]})}function Dj({selectedLang:e,newWord:t,onWordChange:r,onSubmit:a}){return O.jsxs("form",{onSubmit:a,className:bj,children:[O.jsx("input",{type:"text",placeholder:"Слово",value:t,onChange:s=>r(s.target.value)}),O.jsxs("button",{type:"submit",disabled:!t.trim(),children:["Добавить ",e]})]})}function Rj({letters:e,selectedLetter:t,onLetterChange:r}){return O.jsx("div",{className:wj,children:e.map(a=>O.jsx("button",{onClick:()=>r(a),className:`${xj} ${t===a?_j:Sj}`,children:a},a))})}function Uj({filteredWords:e,selectedLetter:t,onWordClick:r}){return O.jsxs("div",{children:[O.jsxs("h3",{children:["Слова на букву ",t," (",e.length,"):"]}),e.length===0?O.jsx("p",{children:"Нет слов"}):O.jsx("ol",{className:Tj,children:e.toSorted((a,s)=>a.word.localeCompare(s.word)).map(a=>{const s=a.hidden||!1;return O.jsxs("li",{className:`${kj} ${s?Ej:""}`,children:[a.word,O.jsx("button",{onClick:()=>r(a.id,s),className:`${Cj} ${s?Aj:Mj}`,title:s?"Восстановить слово":"Скрыть слово",children:s?"↻":"✕"})]},a.id)})})]})}const yu=window.devicePixelRatio||1;function $j(e,t=lr){const r=e.getContext("2d");return e.width=t*yu,e.height=t*yu,r.scale(yu,yu),r}function Lj(e,t,r){const a=r/lr;e.scale(a,a),t.forEach(s=>{if(s.dots.length===1)e.fillStyle=s.color,e.beginPath(),e.arc(s.dots[0][0],s.dots[0][1],s.width/2,0,2*Math.PI),e.fill();else{e.strokeStyle=s.color,e.lineWidth=s.width,e.lineCap="round",e.lineJoin="round",e.beginPath(),e.moveTo(s.dots[0][0],s.dots[0][1]);for(let l=1;l<s.dots.length;l++)e.lineTo(s.dots[l][0],s.dots[l][1]);e.stroke()}})}function Hj({canvas:e,size:t=200,className:r}){const a=de.useRef(null);de.useEffect(()=>{if(!a.current)return;const u=$j(a.current,t);u.clearRect(0,0,t,t),Lj(u,e,t)},[e,t]);const s={width:`${t}px`,height:`${t}px`,position:"relative",background:"#f6eee2",borderRadius:"4px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.1)"},l={position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"4px"};return O.jsx("div",{style:s,className:r,children:O.jsx("canvas",{ref:a,style:l})})}async function Ij(){return(await pe.queryOnce({paintings:{}})).data.paintings}function qj(e){return pe.transact([pe.tx.paintings[e].delete()])}const mx="cpawrwe",Fj="h1kuabh7",Bj="d1mkouuf",Pj="d141g8lw",Yj="pvsucp9",Xj="pnbakaq",Gj="pi5mg1z",Vj="padbzo2",Qj="p4wcxsc",Kj="pwupdd4",gx="pg9ppeu";function Wj(){const[e,t]=de.useState([]),[r,a]=de.useState([]),[s,l]=de.useState(!0),[u,d]=de.useState(new Set),[f,h]=de.useState(!1),v=Object.fromEntries(r.map(_=>[_.id,_]));de.useEffect(()=>{Ij().then(t).then(()=>Z6().then(a)).catch(console.error).finally(()=>l(!1))},[]);const g=(_,T)=>{const k=new Set(u);T?k.add(_):k.delete(_),d(k)},b=async()=>{if(u.size!==0){h(!0);try{await Promise.all(Array.from(u).map(_=>qj(_))),t(_=>_.filter(T=>!u.has(T.id))),d(new Set)}catch(_){console.error("Failed to delete paintings:",_),alert("Ошибка при удалении картин")}finally{h(!1)}}};if(s)return O.jsx(ar,{children:O.jsx("div",{className:mx,children:O.jsx("p",{children:"Загрузка..."})})});const w=f||u.size===0;return O.jsx(ar,{children:O.jsxs("div",{className:mx,children:[O.jsxs("div",{className:Fj,children:[O.jsxs("h3",{children:["Картины (",e.length,"):"]}),O.jsx("button",{onClick:b,disabled:w,className:`${Bj} ${w?Pj:""}`,children:f?"Удаление...":`Удалить ${u.size}`})]}),e.length===0?O.jsx("p",{children:"Нет картин"}):O.jsx("div",{className:Yj,children:e.toReversed().map(_=>O.jsx(Zj,{painting:_,author:v[_.playerId],selected:u.has(_.id),onSelectionChange:T=>g(_.id,T)},_.id))})]})})}function Zj({painting:e,author:t,selected:r,onSelectionChange:a}){const s=sx(e.canvas),l=e.canvas.length,u=s.length,d=s.map(f=>f.dots.length).reduce((f,h)=>f+h,0);return O.jsxs("div",{className:Xj,children:[O.jsxs("label",{className:Gj,children:[O.jsx("input",{type:"checkbox",checked:r,onChange:f=>a(f.target.checked),className:Vj}),O.jsx("h4",{className:Qj,children:e.word})]}),O.jsx(Hj,{canvas:sx(e.canvas),size:200}),O.jsxs("div",{className:Kj,children:[O.jsxs("p",{className:gx,children:["Автор: ",(t==null?void 0:t.name)||"???"]}),O.jsxs("p",{className:gx,children:["Линий ",u,l!==u?`(${l})`:"",", точек"," ",d]})]})]})}const Jj="r1e037uf";function Bp({label:e,value:t,onChange:r,options:a,disabled:s}){return O.jsxs("div",{className:Jj,children:[e&&O.jsx("label",{children:e}),O.jsx("select",{value:String(t),onChange:l=>{const u=a.find(d=>String(d.value)===l.target.value);u&&r(u.value)},disabled:s,children:a.map(l=>O.jsx("option",{value:String(l.value),children:l.label},String(l.value)))})]})}const bu=window.devicePixelRatio||1;function gS(e){const t=e.getContext("2d");return e.width=lr*bu,e.height=lr*bu,t.scale(bu,bu),t}function vx(e,t){const r=t.getBoundingClientRect(),a=lr/r.width,s="touches"in e?(e.touches[0]||e.changedTouches[0]).clientX:e.clientX,l="touches"in e?(e.touches[0]||e.changedTouches[0]).clientY:e.clientY;return{x:ko((s-r.left)*a),y:ko((l-r.top)*a)}}const e8={margin:"0 auto",maxWidth:"500px",maxHeight:"100%",height:"auto",aspectRatio:"1 / 1",position:"relative",background:"#f6eee2",borderRadius:"8px",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.1)"},vS={position:"absolute",top:0,left:0,width:"100%",height:"100%",touchAction:"none",borderRadius:"8px",cursor:"crosshair"};function t8(){const e=de.useRef(null),t=!1,r=Ke(Pn.$polylinePaths),a=Ke(Pn.$svgCanvasPaths);return de.useEffect(()=>{const s=e.current,l=gS(s);l.clearRect(0,0,lr,lr),a.forEach(u=>{l.fillStyle=u.color,l.fill(new Path2D(u.d))})},[r,a]),O.jsxs("div",{style:e8,children:[O.jsx("canvas",{ref:e,style:vS}),O.jsx(n8,{}),t]})}const n8=de.memo(()=>{const e=de.useRef(null),[t,r]=de.useState(!1),s=Ke(Ig).iam||!1,l=Ke(Pn.$svgCanvasPaths).at(-1);de.useEffect(()=>{const h=e.current,v=gS(h);v.clearRect(0,0,lr,lr),l&&(v.fillStyle=l.color,v.fill(new Path2D(l.d)))},[l]);const u=de.useCallback(h=>{if(!s)return;h.preventDefault();const{x:v,y:g}=vx(h,e.current);Pn.lineStarted([v,g]),r(!0)},[s]),d=de.useCallback(h=>{if(!s||!t)return;h.preventDefault();const{x:v,y:g}=vx(h,e.current);Pn.lineExtended([v,g])},[s,t]),f=de.useCallback(h=>{!s||!t||(h.preventDefault(),r(!1),Pn.saveCanvasToPaining())},[s,t]);return O.jsx("canvas",{ref:e,onMouseDown:u,onMouseMove:d,onMouseUp:f,onMouseLeave:f,onTouchStart:u,onTouchMove:d,onTouchEnd:f,onTouchCancel:f,style:vS})});de.memo(()=>{const e=Ke(Pn.$currentDrawing),t={position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none"};return O.jsx("svg",{style:t,viewBox:`0 0 ${lr} ${lr}`,children:e.map((r,a)=>O.jsxs("g",{children:[O.jsx("polyline",{points:r.dots.map(([s,l])=>`${s},${l}`).join(" "),stroke:"white",strokeWidth:2,strokeDasharray:"2,5",fill:"none"}),r.dots.map(([s,l],u)=>O.jsx("circle",{cx:s,cy:l,r:1,fill:`hsl(0, 70%, ${u%5*10+30}%)`},`${a}-${u}`))]},`debug-${a}`))})});function yS(){var u,d,f;const[e,t]=de.useState(!0),r=Ke(Ma),a=Ke(kr),s=Ke(Pn.$currentDrawing),l=Ke(I6);return O.jsxs("div",{children:[O.jsxs("button",{onClick:()=>t(!e),children:["Dev ",e?"▼":"▲"]}),!e&&O.jsxs("div",{style:{maxWidth:"90vw",overflow:"scroll"},children:[O.jsx("div",{style:{display:"grid",border:"1px solid red"},children:l.map((h,v)=>O.jsx("p",{children:JSON.stringify(h)},v))}),O.jsxs("p",{children:["dots.len: ",(u=s.at(-1))==null?void 0:u.dots.length]}),O.jsxs("p",{children:["color: ",(d=s.at(-1))==null?void 0:d.color]}),O.jsxs("p",{children:["width: ",(f=s.at(-1))==null?void 0:f.width]}),O.jsx("pre",{children:JSON.stringify(a.gameState,null,2)}),O.jsx("div",{children:O.jsx(ua,{href:"https://joxter.github.io/scribble/",target:"_blank",children:"website"})}),O.jsxs("p",{children:["localId: ",r]}),O.jsx("pre",{style:{maxWidth:"300px"},children:JSON.stringify(a,null,2)})]})]})}const yx=4;function r8({value:e,onChange:t}){const r=nl.indexOf(e),a=Math.max(...nl);let s=r*a+yx*r;return O.jsxs("div",{style:{display:"inline-flex",gap:"4px",position:"relative",height:"32px",backgroundColor:"#eee",borderRadius:"16px",cursor:"pointer",padding:"4px",boxShadow:"0 0px 4px rgba(0,0,0,0.1)",overflow:"hidden"},children:[O.jsx("div",{style:{position:"absolute",left:s+"px",display:"flex",top:"0px",width:r===nl.length-1?a+10+"px":a+4+"px",height:"100%",backgroundColor:"#007bff"}}),O.jsx("div",{style:{display:"flex",gap:yx+"px",position:"relative",width:"100%"},children:nl.map(l=>O.jsx("div",{onClick:()=>t(l),style:{display:"flex",width:a+"px",height:a+"px"},children:O.jsx("div",{style:{margin:"auto",width:`${l}px`,height:`${l}px`,backgroundColor:l===e?"#555":"#666",borderRadius:"50%"}})},l))})]})}const i8="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M29%2023C29%2023.2652%2028.8946%2023.5196%2028.7071%2023.7071C28.5196%2023.8946%2028.2652%2024%2028%2024C27.7348%2024%2027.4804%2023.8946%2027.2929%2023.7071C27.1054%2023.5196%2027%2023.2652%2027%2023C26.9997%2020.8246%2026.3545%2018.6981%2025.1457%2016.8894C23.937%2015.0807%2022.2192%2013.671%2020.2093%2012.8386C18.1995%2012.0061%2015.988%2011.7883%2013.8544%2012.2126C11.7208%2012.6369%209.76087%2013.6844%208.2225%2015.2225L5.425%2018H11C11.2652%2018%2011.5196%2018.1053%2011.7071%2018.2929C11.8946%2018.4804%2012%2018.7348%2012%2019C12%2019.2652%2011.8946%2019.5196%2011.7071%2019.7071C11.5196%2019.8946%2011.2652%2020%2011%2020H3C2.73478%2020%202.48043%2019.8946%202.29289%2019.7071C2.10536%2019.5196%202%2019.2652%202%2019V11C2%2010.7348%202.10536%2010.4804%202.29289%2010.2929C2.48043%2010.1053%202.73478%209.99999%203%209.99999C3.26522%209.99999%203.51957%2010.1053%203.70711%2010.2929C3.89464%2010.4804%204%2010.7348%204%2011V16.5962L6.81%2013.805C8.62837%2011.9876%2010.9448%2010.7501%2013.4664%2010.249C15.988%209.74799%2018.6015%2010.0059%2020.9765%2010.99C23.3516%2011.9742%2025.3815%2013.6405%2026.8097%2015.7782C28.2378%2017.9159%2029%2020.4291%2029%2023Z'%20fill='%23343330'/%3e%3c/svg%3e",bx=28,a8=8;function o8({value:e,onChange:t}){return O.jsx("div",{style:{flexWrap:"wrap",display:"flex",gap:a8+"px",justifyContent:"space-between"},children:g_.map((r,a)=>O.jsx("button",{onClick:()=>t(r),style:{width:bx+"px",height:bx+"px",border:r==="#ffffff"?"1px solid #333":"none",borderRadius:"100%",padding:"0",backgroundColor:r,cursor:"pointer",boxShadow:r===e?"0 0 0 2px #fff, 0 0 0 5px rgb(0, 123, 255)":"none"}},r))})}function s8(){const{width:e,color:t}=Ke(Pn.$currentLineParams);return O.jsxs("div",{style:{display:"grid",alignContent:"start",padding:"8px",gap:"12px"},children:[O.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between"},children:[O.jsx("button",{onClick:Pn.undoClicked,children:O.jsx("img",{style:{width:"20px"},src:i8})}),O.jsx(r8,{value:e,onChange:r=>Pn.lineParamsChanged({width:r})})]}),O.jsx("div",{children:O.jsx(o8,{value:t,onChange:r=>Pn.lineParamsChanged({color:r})})})]})}const l8="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M28.4138%209.17122L22.8288%203.58497C22.643%203.39921%2022.4225%203.25185%2022.1799%203.15131C21.9372%203.05077%2021.6771%202.99902%2021.4144%202.99902C21.1517%202.99902%2020.8916%203.05077%2020.6489%203.15131C20.4062%203.25185%2020.1857%203.39921%2020%203.58497L4.58626%2019C4.39973%2019.185%204.25185%2019.4053%204.15121%2019.648C4.05057%2019.8907%203.99917%2020.151%204.00001%2020.4137V26C4.00001%2026.5304%204.21072%2027.0391%204.5858%2027.4142C4.96087%2027.7893%205.46958%2028%206.00001%2028H11.5863C11.849%2028.0008%2012.1093%2027.9494%2012.352%2027.8488C12.5947%2027.7481%2012.815%2027.6002%2013%2027.4137L28.4138%2012C28.5995%2011.8142%2028.7469%2011.5937%2028.8474%2011.3511C28.948%2011.1084%2028.9997%2010.8483%2028.9997%2010.5856C28.9997%2010.3229%2028.948%2010.0628%2028.8474%209.82012C28.7469%209.57744%2028.5995%209.35695%2028.4138%209.17122ZM6.41376%2020L17%209.41372L19.0863%2011.5L8.50001%2022.085L6.41376%2020ZM6.00001%2022.4137L9.58626%2026H6.00001V22.4137ZM12%2025.5862L9.91376%2023.5L20.5%2012.9137L22.5863%2015L12%2025.5862ZM24%2013.5862L18.4138%207.99997L21.4138%204.99997L27%2010.585L24%2013.5862Z'%20fill='%23343330'/%3e%3c/svg%3e";function bS(){const[e,t]=Ke([kr,Ig]),r=e.newPlayers,a=e.gameState,s=t.drawing?t.who:null,l=a.state==="choosing-word"?a.playerId:null;return O.jsxs("div",{children:[O.jsxs("p",{children:['Комната "',e.name,'"',e.status===cn.inProgress&&O.jsxs("b",{children:["круг: ",(e.gameProgress||[]).length,"/",e.gameParams.rounds," "]}),O.jsx("button",{onClick:()=>{hS(e.id)},children:"close"})]}),O.jsx("br",{}),O.jsx("p",{children:"Игроки:"}),O.jsx("div",{style:{display:"grid",alignContent:"start",gap:"4px"},children:r==null?void 0:r.map(u=>{const d=u.id===s,f=u.id===l;return O.jsxs("div",{style:{padding:"8px 12px",borderRadius:"4px",backgroundColor:"#fff",color:"#333",border:"1px solid #ddd"},children:[u.name," ",(f||d)&&O.jsx("img",{src:l8,style:{width:"18px"}})]},u.id)})})]})}const c8="cdnva5p",u8="t7fasng",d8="t16fx934",f8="idgbxb7";function h8({revealed:e,secret:t,clue:r}){const[a,s]=de.useState(""),l=f=>{f.preventDefault(),sS({guess:a.trim()}),m_(t,a)==="almost"||s("")},u=f=>{s(f.target.value)},d=e||!r?"1fr min-content":`calc(${r.length*10}px + ${(r.length-1)*3}px + 10px) min-content`;return O.jsx("form",{onSubmit:l,children:O.jsxs("div",{className:c8,style:{gridTemplateColumns:d},children:[O.jsx("p",{className:`${u8} ${e==="revealed"?d8:""}`,children:e==="revealed"?e+"!":r}),O.jsx("div",{}),O.jsx("div",{children:O.jsx("input",{type:"text",value:a,onChange:u,className:f8})}),O.jsx("button",{type:"submit",children:"OK"})]})})}function p8(e){const t=de.useRef(null);return de.useEffect(()=>{t.current&&t.current.scrollTo({top:t.current.scrollHeight,behavior:"smooth"})},[e]),t}const m8="c1biiu5i",wx="msvrwbd",wu="mmygojb",g8="wut5y33",v8="m5u7gw5";function wS(){const[e,t]=Ke([q6,Nd]),r=p8(e);return O.jsx("div",{ref:r,className:m8,children:e.slice(-50).map((a,s)=>{const l=a.type+s;if(a.type==="user-message"){let{text:d,playerId:f,isRevealed:h}=a.payload;return h==="revealed"?O.jsx("p",{className:wx,children:O.jsxs("b",{children:[t[f].name," отгадал(а) слово!"]})},l):h==="almost"?O.jsx("p",{className:wx,children:O.jsxs("b",{children:[t[f].name," почти отгадал(а)!"]})},l):O.jsxs("p",{children:[O.jsxs("b",{children:[t[f].name,":"]})," ",d]},l)}if(a.type==="new-selected-word"){let{word:d}=a.payload;return O.jsxs("p",{className:wu,children:["Слово выбрано!"," ",O.jsxs("b",{className:g8,children:[d.replace(/\S/g,"_")," (",d.split(" ").map(f=>f.length).join(" "),")"]})]},l)}if(a.type==="drawing-ended")return O.jsxs("div",{children:[O.jsxs("p",{className:wu,children:[a.payload.reason==="all-revealed"&&"Все отгадали!"," ",a.payload.reason==="timeout"&&"Время вышло!"," ",t[a.payload.nextPlayerId].name," выбирает новое слово!"]}),O.jsx("ul",{style:{margin:0},children:Object.entries(a.payload.revealed).map(([d,f])=>{var h;return O.jsxs("li",{children:[((h=t[d])==null?void 0:h.name)||"no name"," ",new Date(f).toISOString().slice(11,-5)]},d)})})]},l);if(a.type==="game-started")return O.jsx("div",{children:O.jsxs("p",{className:wu,children:["Игра началась! ",t[a.payload.playerId].name," выбирает первое слово!"]})},l);if(a.type==="game-finished")return O.jsx("div",{children:O.jsx("p",{className:wu,children:"Конец игры!"})},l);const u=a.type;return O.jsxs("p",{className:v8,children:["[",u,"]"]},l)})})}function xS(){const[e,t]=de.useState(0),r=de.useRef(0),a=de.useRef(performance.now()),s=de.useRef(0);return de.useEffect(()=>{const l=()=>{const u=performance.now();if(r.current++,u-a.current>=1e3){const d=Math.round(r.current*1e3/(u-a.current));t(d),r.current=0,a.current=u}s.current=requestAnimationFrame(l)};return s.current=requestAnimationFrame(l),()=>{s.current&&cancelAnimationFrame(s.current)}},[]),O.jsxs("div",{style:{position:"fixed",top:"10px",right:"10px",backgroundColor:"#fff",color:"#333",border:"1px solid #333",padding:"2px 4px",borderRadius:"4px",fontSize:"14px",fontFamily:"monospace",zIndex:1e3,userSelect:"none"},children:[e," FPS"]})}const y8="r99gtz9";function b8({words:e}){return O.jsx("div",{className:y8,children:e.map((t,r)=>O.jsx("button",{type:"button",onClick:()=>lS(t),children:t},t))})}const xx="c1ys7q72",w8="cgx91n2";function x8({}){var l,u;const{gameProgress:e}=Ke(kr),t=Ke(Nd),r=Ke(uS),a=Ke(Ma),s=((l=e.at(-1))==null?void 0:l.at(-1))||((u=e.at(-2))==null?void 0:u.at(-1));if(r.choose&&r.who)return O.jsxs("div",{className:xx,children:[r.iam?O.jsx(b8,{words:r.words}):O.jsxs("p",{children:[t[r.who].name," выбирает слово"]}),O.jsx("br",{}),s&&O.jsxs(O.Fragment,{children:[O.jsx("h3",{children:'Очки за "рисунок-нейм":'}),O.jsx("ul",{children:Object.entries(s.scores).map(([d,f])=>{const h=new Date(f).toTimeString().split(" ")[0];return O.jsxs("li",{className:d===a?w8:"",children:[t[d].name,": ",h]},d)})}),O.jsx("p",{children:"тут будет рисунок и реакции"})]})]});if(!s)return O.jsx("div",{className:xx,children:"something went wrong"})}const _8="p1w7nfxm",S8="hed9oh8",T8="c1h9blyk",k8="f17rd9oq",E8="p1xkesbb",C8="f8ot6sm",A8="d10bwol0",M8="c1spjchp",O8="tpkxkfh";function N8(){const[e,t]=Ke([Ig,uS]);return O.jsxs(ar,{children:[O.jsx(xS,{}),O.jsxs("div",{className:_8,children:[O.jsxs("div",{className:S8,children:[O.jsx(z8,{}),e.iam&&O.jsx("p",{className:O8,children:O.jsx("b",{children:e.word})})]}),O.jsx("div",{className:T8,children:t.choose?O.jsx("div",{className:C8,children:O.jsx(x8,{})}):O.jsx(t8,{})}),O.jsxs("div",{className:k8,children:[e.iam?O.jsx(s8,{}):e.drawing?O.jsx("div",{className:A8,children:O.jsx("div",{className:M8,children:O.jsx(h8,{clue:e.gameState.clue,secret:e.word||"",revealed:"none"})})}):null,O.jsx(yS,{})]}),O.jsxs("div",{className:E8,children:[O.jsx(bS,{}),O.jsx(wS,{})]})]})]})}function z8(){const e=Ke(Sa.$timeout);return e===null?null:O.jsxs("p",{children:["time: ",e," sec"]})}const j8="pc0cn8w",D8="h285xhk",R8="cp0zgdj",U8="f10kzanm",$8="p1wz1uhg";function L8(e,t){const r={};return Object.keys(t).forEach(a=>{r[a]=0}),e.forEach(a=>{a.forEach(s=>{const{scores:l,whoDrawId:u}=s,d=Object.entries(l).sort(([,f],[,h])=>f-h);d.forEach(([f],h)=>{const v=Math.max(100-h*10,10);r[f]=(r[f]||0)+v}),d.length>0&&(r[u]=(r[u]||0)+50)})}),r}function H8(){const[{gameProgress:e},t]=Ke([kr,Nd,F6]),r=L8(e,t),a=Object.entries(r).map(([s,l])=>({player:t[s],score:l})).sort((s,l)=>l.score-s.score);return O.jsxs(ar,{children:[O.jsx(xS,{}),O.jsxs("div",{className:j8,children:[O.jsx("div",{className:D8}),O.jsxs("div",{className:R8,children:[O.jsx("p",{children:"Игра закончена!"}),O.jsxs("div",{children:[O.jsx("h2",{children:"Топ игроков:"}),O.jsx("ol",{children:a.map(({player:s,score:l})=>O.jsxs("li",{children:[s.name," - ",l," очков"]},s.id))})]}),O.jsx("p",{children:"todo: рисунки"}),O.jsx("p",{children:"todo: ещё раз"})]}),O.jsx("div",{className:U8,children:O.jsx(yS,{})}),O.jsxs("div",{className:$8,children:[O.jsx(bS,{}),O.jsx(wS,{})]})]})]})}const I8="n1w9u7gq",q8="ghjdtg3";function F8(){var v;const[e,t]=Ke([kr,Nd]),r=Ke(Od),a=Ke(Ma),[s,l]=de.useState((r==null?void 0:r.name)||""),[u,d]=vd();if(de.useEffect(()=>{r!=null&&r.name&&l(r.name)},[r]),!e)return O.jsx(ar,{children:O.jsx("p",{children:"группа не найдена"})});if(e.status===cn.inProgress)return O.jsx(N8,{});if(e.status===cn.finished)return O.jsx(H8,{});if(e.status!=="prepare")return O.jsx(ar,{children:O.jsx("p",{children:"группа уже играет или закончила играть"})});const f=((v=t[e.host])==null?void 0:v.name)||e.host,h=a===e.host;return O.jsx(ar,{children:O.jsxs("div",{children:[O.jsxs("h1",{children:['Комната "',e.name,'"']}),O.jsxs("p",{children:["хост: ",O.jsx("b",{children:f})]}),O.jsxs("p",{children:["Ждем всех игроков [поделиться] ",e.id]}),O.jsx("br",{}),O.jsxs("form",{className:I8,onSubmit:g=>{g.preventDefault();const b=s.trim();b!==(r==null?void 0:r.name)?ad(a,b):l(b)},children:[O.jsx(Sm,{maxLen:30,label:"Имя",onChange:l,value:s}),O.jsx(v_,{type:"submit",children:"ОК"})]}),O.jsx("br",{}),O.jsxs("div",{className:q8,children:[O.jsx(Bp,{label:"Количество раундов",value:e.gameParams.rounds,onChange:g=>{Fp(e.id,{...e.gameParams,rounds:g})},options:[{value:3,label:"3 раунда"},{value:5,label:"5 раундов"},{value:7,label:"7 раундов"},{value:10,label:"10 раундов"}],disabled:!h}),O.jsx(Bp,{label:"Слов на выбор",value:e.gameParams.wordSuggestions,onChange:g=>{Fp(e.id,{...e.gameParams,wordSuggestions:g})},options:[{value:2,label:"2 слова"},{value:3,label:"3 слова"},{value:4,label:"4 слова"},{value:5,label:"5 слов"}],disabled:!h}),O.jsx(Bp,{label:"Время",value:e.gameParams.drawTime||60,onChange:g=>{Fp(e.id,{...e.gameParams,drawTime:g})},options:[{value:10,label:"10 секунд"},{value:30,label:"30 секунд"},{value:60,label:"60 секунд"},{value:90,label:"90 секунд"}],disabled:!h})]}),O.jsx("br",{}),O.jsx("p",{children:"Игроки: "}),O.jsx("ul",{children:e.newPlayers.map(g=>O.jsxs("li",{children:[g.name," ",g.id===a&&O.jsx("button",{onClick:()=>{ej(a,e.id).then(()=>{d(er(""))})},children:"выйти"}),g.id!==a&&h&&O.jsx("button",{onClick:()=>{J6(e.id,g.id)},children:"кикнуть"})]},g.id))}),h&&O.jsxs("div",{children:[O.jsx("button",{onClick:()=>{W6(e)},children:"Начать игру!"}),O.jsx("br",{}),O.jsx("br",{}),O.jsx("button",{onClick:()=>{hS(e.id)},children:"закрыть игру"})]})]})})}const{$allParties:B8}=P8();function P8(){const e=Pe(),t=Z2(e,[]);return pe.subscribeQuery({party:{newPlayers:{}}},r=>{r.error&&console.error(r.error),r.data&&e(r.data.party)}),{$allParties:t}}function Y8(){const e=Ke(B8);return O.jsxs(ar,{children:[O.jsx("h1",{children:"Все комнаты"}),e.length===0?O.jsx("h2",{children:"Комнат пока нет"}):O.jsx("ul",{children:e.map(t=>{var a,s;const r=((a=t.newPlayers)==null?void 0:a.length)||0;return(s=t.newPlayers)!=null&&s.map(l=>`"${l.name}"`).join(", "),O.jsxs("li",{children:['"',t.name,'" newPlayers: ',r," ",O.jsx("b",{children:t.status})]},t.id)})})]})}function X8(){const[e,t]=Ke([Sa.$allMyParties,Sa.$pagePartyName]),r=e.find(u=>u.name===t),[a,s]=vd(),l=Ke(Od);return de.useEffect(()=>{l&&s(er(r?"room/"+r.name:""))},[r,l]),l?O.jsx("div",{style:{height:"100%"},children:O.jsxs(U5,{children:[O.jsx(wo,{path:"/scribble/words",component:zj}),O.jsx(wo,{path:"/scribble/paintings",component:Wj}),O.jsx(wo,{path:"/scribble/all-rooms",component:Y8}),O.jsx(wo,{path:"/scribble/room/:roomName",component:G8}),O.jsx(wo,{path:"/scribble",component:dx}),O.jsx(wo,{path:"/",component:dx})]})}):null}function G8(){const[e,t]=j5("/scribble/room/:roomName");return de.useEffect(()=>{t!=null&&t.roomName&&Sa.pageOpened(t.roomName)},[t==null?void 0:t.roomName]),t!=null&&t.roomName?O.jsx(F8,{}):O.jsx(ar,{children:O.jsx("h3",{children:"not found"})})}const V8="env4u6q",Q8="ex217ed",K8="e16s4j3i",W8="e1xfw049",Z8="e1m2g3gr",J8="r1vcax27";class eD extends de.Component{constructor(r){super(r);Fb(this,"handleReload",()=>{window.location.reload()});this.state={hasError:!1,error:null}}static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r,a){console.error("Error caught by ErrorBoundary:",r,a)}render(){return this.state.hasError?O.jsx("div",{className:V8,children:O.jsxs("div",{className:Q8,children:[O.jsx("h1",{className:K8,children:"Something went wrong"}),O.jsx("p",{className:W8,children:"The application encountered an unexpected error. Please try reloading the page."}),this.state.error&&O.jsx("pre",{className:Z8,children:this.state.error.toString()}),O.jsx("button",{className:J8,onClick:this.handleReload,children:"Reload Page"})]})}):this.props.children}}o5({enabled:!0});const tD=p5.createRoot(document.getElementById("app"));tD.render(O.jsx(eD,{children:O.jsx(X8,{})}));
