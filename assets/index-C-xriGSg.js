function $T(e,t){for(var r=0;r<t.length;r++){const i=t[r];if(typeof i!="string"&&!Array.isArray(i)){for(const s in i)if(s!=="default"&&!(s in e)){const l=Object.getOwnPropertyDescriptor(i,s);l&&Object.defineProperty(e,s,l.get?l:{enumerable:!0,get:()=>i[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function r(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=r(s);fetch(s.href,l)}})();function gm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yh={exports:{}},Es={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hb;function HT(){if(hb)return Es;hb=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(i,s,l){var u=null;if(l!==void 0&&(u=""+l),s.key!==void 0&&(u=""+s.key),"key"in s){l={};for(var d in s)d!=="key"&&(l[d]=s[d])}else l=s;return s=l.ref,{$$typeof:e,type:i,key:u,ref:s!==void 0?s:null,props:l}}return Es.Fragment=t,Es.jsx=r,Es.jsxs=r,Es}var pb;function IT(){return pb||(pb=1,yh.exports=HT()),yh.exports}var R=IT();/**
 * @license bippy
 *
 * Copyright (c) Aiden Bai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const qT="0.3.18",vm=`bippy-${qT}`,mb=Object.defineProperty,BT=Object.prototype.hasOwnProperty,js=()=>{},Cx=e=>{try{Function.prototype.toString.call(e).indexOf("^_^")>-1&&setTimeout(()=>{throw new Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")})}catch{}},Mx=(e=ei())=>"getFiberRoots"in e;let Nx=!1,$c;const mp=(e=ei())=>Nx?!0:(typeof e.inject=="function"&&($c=e.inject.toString()),!!($c!=null&&$c.includes("(injected)"))),au=new Set,gp=new Set,YT=e=>{const t=new Map;let r=0,i={checkDCE:Cx,supportsFiber:!0,supportsFlight:!0,hasUnsupportedRendererAttached:!1,renderers:t,onCommitFiberRoot:js,onCommitFiberUnmount:js,onPostCommitFiberRoot:js,on:js,inject(s){const l=++r;return t.set(l,s),gp.add(s),i._instrumentationIsActive||(i._instrumentationIsActive=!0,au.forEach(u=>u())),l},_instrumentationSource:vm,_instrumentationIsActive:!1};try{mb(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__",{get(){return i},set(u){if(u&&typeof u=="object"){const d=i.renderers;i=u,d.size>0&&(d.forEach((h,p)=>{gp.add(h),u.renderers.set(p,h)}),vp(e))}},configurable:!0,enumerable:!0});const s=window.hasOwnProperty;let l=!1;mb(window,"hasOwnProperty",{value:function(){try{if(!l&&arguments[0]==="__REACT_DEVTOOLS_GLOBAL_HOOK__")return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,l=!0,-0}catch{}return s.apply(this,arguments)},configurable:!0,writable:!0})}catch{vp(e)}return i},vp=e=>{e&&au.add(e);try{const t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t)return;if(!t._instrumentationSource){if(t.checkDCE=Cx,t.supportsFiber=!0,t.supportsFlight=!0,t.hasUnsupportedRendererAttached=!1,t._instrumentationSource=vm,t._instrumentationIsActive=!1,t.on=js,t.renderers.size){t._instrumentationIsActive=!0,au.forEach(i=>i());return}const r=t.inject;mp(t)&&!Mx()&&(Nx=!0,t.inject({scheduleRefresh(){}})&&(t._instrumentationIsActive=!0)),t.inject=i=>{const s=r(i);return gp.add(i),t._instrumentationIsActive=!0,au.forEach(l=>l()),s}}(t.renderers.size||t._instrumentationIsActive||mp())&&(e==null||e())}catch{}},PT=()=>BT.call(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__"),ei=e=>PT()?(vp(e),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):YT(e),XT=()=>{var e,t;return!!(typeof window<"u"&&((e=window.document)!=null&&e.createElement||((t=window.navigator)==null?void 0:t.product)==="ReactNative"))},FT=()=>{try{XT()&&ei()}catch{}};/**
 * @license bippy
 *
 * Copyright (c) Aiden Bai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Hu=0,ii=1,Ox=3,GT=5,VT=6,QT=7,WT=9,Iu=11,qu=13,ul=14,dl=15,ZT=18,KT=22,JT=23,ek=26,tk=27,nk=60111,rk="Symbol(react.concurrent_mode)",ak="Symbol(react.async_mode)",gb=1,ik=2,ok=4096,sk=4,vb=8,lk=16,ck=32,uk=1024,dk=8192,yb=ik|sk|lk|ck|ok|dk|uk,Qs=e=>{switch(e.tag){case GT:case ek:case tk:return!0;default:return typeof e.type=="string"}},Bu=e=>{switch(e.tag){case Hu:case ii:case dl:case ul:case Iu:return!0;default:return!1}},fk=(e,t)=>{var r;try{const i=e.dependencies,s=(r=e.alternate)==null?void 0:r.dependencies;if(!i||!s||typeof i!="object"||!("firstContext"in i)||typeof s!="object"||!("firstContext"in s))return!1;let l=i.firstContext,u=s.firstContext;for(;l&&typeof l=="object"&&"memoizedValue"in l||u&&typeof u=="object"&&"memoizedValue"in u;){if(t(l,u)===!0)return!0;l=l==null?void 0:l.next,u=u==null?void 0:u.next}}catch{}return!1},ym=e=>{var s;const t=e.memoizedProps,r=((s=e.alternate)==null?void 0:s.memoizedProps)||{},i=e.flags??e.effectTag??0;switch(e.tag){case ii:case Hu:case WT:case Iu:case ul:case dl:return(i&gb)===gb;default:return e.alternate?r!==t||e.alternate.memoizedState!==e.memoizedState||e.alternate.ref!==e.ref:!0}},bm=e=>(e.flags&(yb|vb))!==0||(e.subtreeFlags&(yb|vb))!==0,hk=e=>{const t=[],r=[e];for(;r.length;){const i=r.pop();i&&(Qs(i)&&bm(i)&&ym(i)&&t.push(i),i.child&&r.push(i.child),i.sibling&&r.push(i.sibling))}return t},wm=e=>{switch(e.tag){case ZT:return!0;case VT:case QT:case JT:case KT:return!0;case Ox:return!1;default:{const t=typeof e.type=="object"&&e.type!==null?e.type.$$typeof:e.type;switch(typeof t=="symbol"?t.toString():t){case nk:case rk:case ak:return!0;default:return!1}}}},pk=e=>{const t=[],r=[];for(Qs(e)?t.push(e):e.child&&r.push(e.child);r.length;){const i=r.pop();if(!i)break;Qs(i)?t.push(i):i.child&&r.push(i.child),i.sibling&&r.push(i.sibling)}return t},xm=(e,t,r=!1)=>{if(!e)return null;if(t(e)===!0)return e;let i=r?e.return:e.child;for(;i;){const s=xm(i,t,r);if(s)return s;i=r?null:i.sibling}return null},Ga=e=>{const t=(e==null?void 0:e.actualDuration)??0;let r=t,i=(e==null?void 0:e.child)??null;for(;t>0&&i!=null;)r-=i.actualDuration??0,i=i.sibling;return{selfTime:r,totalTime:t}},Ws=e=>{var t;return!!((t=e.updateQueue)!=null&&t.memoCache)},oi=e=>{const t=e;return typeof t=="function"?t:typeof t=="object"&&t?oi(t.type||t.render):null},Ot=e=>{const t=e;if(typeof t=="string")return t;if(typeof t!="function"&&!(typeof t=="object"&&t))return null;const r=t.displayName||t.name||null;if(r)return r;const i=oi(t);return i&&(i.displayName||i.name)||null},mk=e=>{try{if(typeof e.version=="string"&&e.bundleType>0)return"development"}catch{}return"production"},gk=()=>!!ei()._instrumentationIsActive||Mx()||mp();let Ax=0;const po=new WeakMap,vk=(e,t=Ax++)=>{po.set(e,t)},wa=e=>{let t=po.get(e);return!t&&e.alternate&&(t=po.get(e.alternate)),t||(t=Ax++,vk(e,t)),t},ya=(e,t,r)=>{let i=t;for(;i!=null;){if(po.has(i)||wa(i),!wm(i)&&ym(i)&&e(i,"mount"),i.tag===qu)if(i.memoizedState!==null){const u=i.child,d=u?u.sibling:null;if(d){const h=d.child;h!==null&&ya(e,h,!1)}}else{let u=null;i.child!==null&&(u=i.child.child),u!==null&&ya(e,u,!1)}else i.child!=null&&ya(e,i.child,!0);i=r?i.sibling:null}},yp=(e,t,r,i)=>{var h,p,y;if(po.has(t)||wa(t),!r)return;po.has(r)||wa(r);const s=t.tag===qu;!wm(t)&&ym(t)&&e(t,"update");const u=s&&r.memoizedState!==null,d=s&&t.memoizedState!==null;if(u&&d){const g=((h=t.child)==null?void 0:h.sibling)??null,b=((p=r.child)==null?void 0:p.sibling)??null;g!==null&&b!==null&&yp(e,g,b)}else if(u&&!d){const g=t.child;g!==null&&ya(e,g,!0)}else if(!u&&d){Rx(e,r);const g=((y=t.child)==null?void 0:y.sibling)??null;g!==null&&ya(e,g,!0)}else if(t.child!==r.child){let g=t.child;for(;g;){if(g.alternate){const b=g.alternate;yp(e,g,b)}else ya(e,g,!1);g=g.sibling}}},bp=(e,t)=>{(t.tag===Ox||!wm(t))&&e(t,"unmount")},Rx=(e,t)=>{const r=t.tag===qu&&t.memoizedState!==null;let i=t.child;if(r){const s=t.child,l=(s==null?void 0:s.sibling)??null;i=(l==null?void 0:l.child)??null}for(;i!==null;)i.return!==null&&(bp(e,i),Rx(e,i)),i=i.sibling};let yk=0;const bb=new WeakMap,bk=(e,t)=>{const r="current"in e?e.current:e;let i=bb.get(e);i||(i={prevFiber:null,id:yk++},bb.set(e,i));const{prevFiber:s}=i;if(!r)bp(t,r);else if(s!==null){const l=s&&s.memoizedState!=null&&s.memoizedState.element!=null&&s.memoizedState.isDehydrated!==!0,u=r.memoizedState!=null&&r.memoizedState.element!=null&&r.memoizedState.isDehydrated!==!0;!l&&u?ya(t,r,!1):l&&u?yp(t,r,r.alternate):l&&!u&&bp(t,r)}else ya(t,r,!0);i.prevFiber=r},wk=e=>ei(()=>{var l;const t=ei();(l=e.onActive)==null||l.call(e),t._instrumentationSource=e.name??vm;const r=t.onCommitFiberRoot;e.onCommitFiberRoot&&(t.onCommitFiberRoot=(u,d,h)=>{var p;r&&r(u,d,h),(p=e.onCommitFiberRoot)==null||p.call(e,u,d,h)});const i=t.onCommitFiberUnmount;e.onCommitFiberUnmount&&(t.onCommitFiberUnmount=(u,d)=>{var h;i&&i(u,d),(h=e.onCommitFiberUnmount)==null||h.call(e,u,d)});const s=t.onPostCommitFiberRoot;e.onPostCommitFiberRoot&&(t.onPostCommitFiberRoot=(u,d)=>{var h;s&&s(u,d),(h=e.onPostCommitFiberRoot)==null||h.call(e,u,d)})});/**
 * @license bippy
 *
 * Copyright (c) Aiden Bai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */FT();var Yu,xe,zx,Dx,Fa,wb,jx,Ux,Lx,_m,wp,xp,$x,Zs={},Hx=[],xk=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,fl=Array.isArray;function Nr(e,t){for(var r in t)e[r]=t[r];return e}function Sm(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function ti(e,t,r){var i,s,l,u={};for(l in t)l=="key"?i=t[l]:l=="ref"?s=t[l]:u[l]=t[l];if(arguments.length>2&&(u.children=arguments.length>3?Yu.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(l in e.defaultProps)u[l]===void 0&&(u[l]=e.defaultProps[l]);return iu(e,u,i,s,null)}function iu(e,t,r,i,s){var l={type:e,props:t,key:r,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++zx,__i:-1,__u:0};return s==null&&xe.vnode!=null&&xe.vnode(l),l}function De(e){return e.children}function Dn(e,t){this.props=e,this.context=t}function mo(e,t){if(t==null)return e.__?mo(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?mo(e):null}function Ix(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return Ix(e)}}function _p(e){(!e.__d&&(e.__d=!0)&&Fa.push(e)&&!bu.__r++||wb!=xe.debounceRendering)&&((wb=xe.debounceRendering)||jx)(bu)}function bu(){for(var e,t,r,i,s,l,u,d=1;Fa.length;)Fa.length>d&&Fa.sort(Ux),e=Fa.shift(),d=Fa.length,e.__d&&(r=void 0,s=(i=(t=e).__v).__e,l=[],u=[],t.__P&&((r=Nr({},i)).__v=i.__v+1,xe.vnode&&xe.vnode(r),Tm(t.__P,r,i,t.__n,t.__P.namespaceURI,32&i.__u?[s]:null,l,s??mo(i),!!(32&i.__u),u),r.__v=i.__v,r.__.__k[r.__i]=r,Yx(l,r,u),r.__e!=s&&Ix(r)));bu.__r=0}function qx(e,t,r,i,s,l,u,d,h,p,y){var g,b,w,S,T,k,_,M=i&&i.__k||Hx,O=t.length;for(h=_k(r,t,M,h,O),g=0;g<O;g++)(w=r.__k[g])!=null&&(b=w.__i==-1?Zs:M[w.__i]||Zs,w.__i=g,k=Tm(e,w,b,s,l,u,d,h,p,y),S=w.__e,w.ref&&b.ref!=w.ref&&(b.ref&&km(b.ref,null,w),y.push(w.ref,w.__c||S,w)),T==null&&S!=null&&(T=S),(_=!!(4&w.__u))||b.__k===w.__k?h=Bx(w,h,e,_):typeof w.type=="function"&&k!==void 0?h=k:S&&(h=S.nextSibling),w.__u&=-7);return r.__e=T,h}function _k(e,t,r,i,s){var l,u,d,h,p,y=r.length,g=y,b=0;for(e.__k=new Array(s),l=0;l<s;l++)(u=t[l])!=null&&typeof u!="boolean"&&typeof u!="function"?(h=l+b,(u=e.__k[l]=typeof u=="string"||typeof u=="number"||typeof u=="bigint"||u.constructor==String?iu(null,u,null,null,null):fl(u)?iu(De,{children:u},null,null,null):u.constructor==null&&u.__b>0?iu(u.type,u.props,u.key,u.ref?u.ref:null,u.__v):u).__=e,u.__b=e.__b+1,d=null,(p=u.__i=Sk(u,r,h,g))!=-1&&(g--,(d=r[p])&&(d.__u|=2)),d==null||d.__v==null?(p==-1&&(s>y?b--:s<y&&b++),typeof u.type!="function"&&(u.__u|=4)):p!=h&&(p==h-1?b--:p==h+1?b++:(p>h?b--:b++,u.__u|=4))):e.__k[l]=null;if(g)for(l=0;l<y;l++)(d=r[l])!=null&&(2&d.__u)==0&&(d.__e==i&&(i=mo(d)),Xx(d,d));return i}function Bx(e,t,r,i){var s,l;if(typeof e.type=="function"){for(s=e.__k,l=0;s&&l<s.length;l++)s[l]&&(s[l].__=e,t=Bx(s[l],t,r,i));return t}e.__e!=t&&(i&&(t&&e.type&&!t.parentNode&&(t=mo(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function wu(e,t){return t=t||[],e==null||typeof e=="boolean"||(fl(e)?e.some(function(r){wu(r,t)}):t.push(e)),t}function Sk(e,t,r,i){var s,l,u,d=e.key,h=e.type,p=t[r],y=p!=null&&(2&p.__u)==0;if(p===null&&e.key==null||y&&d==p.key&&h==p.type)return r;if(i>(y?1:0)){for(s=r-1,l=r+1;s>=0||l<t.length;)if((p=t[u=s>=0?s--:l++])!=null&&(2&p.__u)==0&&d==p.key&&h==p.type)return u}return-1}function xb(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||xk.test(t)?r:r+"px"}function Hc(e,t,r,i,s){var l,u;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)r&&t in r||xb(e.style,t,"");if(r)for(t in r)i&&r[t]==i[t]||xb(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")l=t!=(t=t.replace(Lx,"$1")),u=t.toLowerCase(),t=u in e||t=="onFocusOut"||t=="onFocusIn"?u.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+l]=r,r?i?r.u=i.u:(r.u=_m,e.addEventListener(t,l?xp:wp,l)):e.removeEventListener(t,l?xp:wp,l);else{if(s=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function _b(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=_m++;else if(t.t<r.u)return;return r(xe.event?xe.event(t):t)}}}function Tm(e,t,r,i,s,l,u,d,h,p){var y,g,b,w,S,T,k,_,M,O,L,j,X,G,ee,ne,me,de=t.type;if(t.constructor!=null)return null;128&r.__u&&(h=!!(32&r.__u),l=[d=t.__e=r.__e]),(y=xe.__b)&&y(t);e:if(typeof de=="function")try{if(_=t.props,M="prototype"in de&&de.prototype.render,O=(y=de.contextType)&&i[y.__c],L=y?O?O.props.value:y.__:i,r.__c?k=(g=t.__c=r.__c).__=g.__E:(M?t.__c=g=new de(_,L):(t.__c=g=new Dn(_,L),g.constructor=de,g.render=kk),O&&O.sub(g),g.props=_,g.state||(g.state={}),g.context=L,g.__n=i,b=g.__d=!0,g.__h=[],g._sb=[]),M&&g.__s==null&&(g.__s=g.state),M&&de.getDerivedStateFromProps!=null&&(g.__s==g.state&&(g.__s=Nr({},g.__s)),Nr(g.__s,de.getDerivedStateFromProps(_,g.__s))),w=g.props,S=g.state,g.__v=t,b)M&&de.getDerivedStateFromProps==null&&g.componentWillMount!=null&&g.componentWillMount(),M&&g.componentDidMount!=null&&g.__h.push(g.componentDidMount);else{if(M&&de.getDerivedStateFromProps==null&&_!==w&&g.componentWillReceiveProps!=null&&g.componentWillReceiveProps(_,L),!g.__e&&g.shouldComponentUpdate!=null&&g.shouldComponentUpdate(_,g.__s,L)===!1||t.__v==r.__v){for(t.__v!=r.__v&&(g.props=_,g.state=g.__s,g.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(ie){ie&&(ie.__=t)}),j=0;j<g._sb.length;j++)g.__h.push(g._sb[j]);g._sb=[],g.__h.length&&u.push(g);break e}g.componentWillUpdate!=null&&g.componentWillUpdate(_,g.__s,L),M&&g.componentDidUpdate!=null&&g.__h.push(function(){g.componentDidUpdate(w,S,T)})}if(g.context=L,g.props=_,g.__P=e,g.__e=!1,X=xe.__r,G=0,M){for(g.state=g.__s,g.__d=!1,X&&X(t),y=g.render(g.props,g.state,g.context),ee=0;ee<g._sb.length;ee++)g.__h.push(g._sb[ee]);g._sb=[]}else do g.__d=!1,X&&X(t),y=g.render(g.props,g.state,g.context),g.state=g.__s;while(g.__d&&++G<25);g.state=g.__s,g.getChildContext!=null&&(i=Nr(Nr({},i),g.getChildContext())),M&&!b&&g.getSnapshotBeforeUpdate!=null&&(T=g.getSnapshotBeforeUpdate(w,S)),ne=y,y!=null&&y.type===De&&y.key==null&&(ne=Px(y.props.children)),d=qx(e,fl(ne)?ne:[ne],t,r,i,s,l,u,d,h,p),g.base=t.__e,t.__u&=-161,g.__h.length&&u.push(g),k&&(g.__E=g.__=null)}catch(ie){if(t.__v=null,h||l!=null)if(ie.then){for(t.__u|=h?160:128;d&&d.nodeType==8&&d.nextSibling;)d=d.nextSibling;l[l.indexOf(d)]=null,t.__e=d}else{for(me=l.length;me--;)Sm(l[me]);Sp(t)}else t.__e=r.__e,t.__k=r.__k,ie.then||Sp(t);xe.__e(ie,t,r)}else l==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):d=t.__e=Tk(r.__e,t,r,i,s,l,u,h,p);return(y=xe.diffed)&&y(t),128&t.__u?void 0:d}function Sp(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(Sp)}function Yx(e,t,r){for(var i=0;i<r.length;i++)km(r[i],r[++i],r[++i]);xe.__c&&xe.__c(t,e),e.some(function(s){try{e=s.__h,s.__h=[],e.some(function(l){l.call(s)})}catch(l){xe.__e(l,s.__v)}})}function Px(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:fl(e)?e.map(Px):Nr({},e)}function Tk(e,t,r,i,s,l,u,d,h){var p,y,g,b,w,S,T,k=r.props,_=t.props,M=t.type;if(M=="svg"?s="http://www.w3.org/2000/svg":M=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),l!=null){for(p=0;p<l.length;p++)if((w=l[p])&&"setAttribute"in w==!!M&&(M?w.localName==M:w.nodeType==3)){e=w,l[p]=null;break}}if(e==null){if(M==null)return document.createTextNode(_);e=document.createElementNS(s,M,_.is&&_),d&&(xe.__m&&xe.__m(t,l),d=!1),l=null}if(M==null)k===_||d&&e.data==_||(e.data=_);else{if(l=l&&Yu.call(e.childNodes),k=r.props||Zs,!d&&l!=null)for(k={},p=0;p<e.attributes.length;p++)k[(w=e.attributes[p]).name]=w.value;for(p in k)if(w=k[p],p!="children"){if(p=="dangerouslySetInnerHTML")g=w;else if(!(p in _)){if(p=="value"&&"defaultValue"in _||p=="checked"&&"defaultChecked"in _)continue;Hc(e,p,null,w,s)}}for(p in _)w=_[p],p=="children"?b=w:p=="dangerouslySetInnerHTML"?y=w:p=="value"?S=w:p=="checked"?T=w:d&&typeof w!="function"||k[p]===w||Hc(e,p,w,k[p],s);if(y)d||g&&(y.__html==g.__html||y.__html==e.innerHTML)||(e.innerHTML=y.__html),t.__k=[];else if(g&&(e.innerHTML=""),qx(t.type=="template"?e.content:e,fl(b)?b:[b],t,r,i,M=="foreignObject"?"http://www.w3.org/1999/xhtml":s,l,u,l?l[0]:r.__k&&mo(r,0),d,h),l!=null)for(p=l.length;p--;)Sm(l[p]);d||(p="value",M=="progress"&&S==null?e.removeAttribute("value"):S!=null&&(S!==e[p]||M=="progress"&&!S||M=="option"&&S!=k[p])&&Hc(e,p,S,k[p],s),p="checked",T!=null&&T!=e[p]&&Hc(e,p,T,k[p],s))}return e}function km(e,t,r){try{if(typeof e=="function"){var i=typeof e.__u=="function";i&&e.__u(),i&&t==null||(e.__u=e(t))}else e.current=t}catch(s){xe.__e(s,r)}}function Xx(e,t,r){var i,s;if(xe.unmount&&xe.unmount(e),(i=e.ref)&&(i.current&&i.current!=e.__e||km(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(l){xe.__e(l,t)}i.base=i.__P=null}if(i=e.__k)for(s=0;s<i.length;s++)i[s]&&Xx(i[s],t,r||typeof e.type!="function");r||Sm(e.__e),e.__c=e.__=e.__e=void 0}function kk(e,t,r){return this.constructor(e,r)}function Bs(e,t,r){var i,s,l,u;t==document&&(t=document.documentElement),xe.__&&xe.__(e,t),s=(i=!1)?null:t.__k,l=[],u=[],Tm(t,e=t.__k=ti(De,null,[e]),s||Zs,Zs,t.namespaceURI,s?null:t.firstChild?Yu.call(t.childNodes):null,l,s?s.__e:t.firstChild,i,u),Yx(l,e,u)}function Fx(e){function t(r){var i,s;return this.getChildContext||(i=new Set,(s={})[t.__c]=this,this.getChildContext=function(){return s},this.componentWillUnmount=function(){i=null},this.shouldComponentUpdate=function(l){this.props.value!=l.value&&i.forEach(function(u){u.__e=!0,_p(u)})},this.sub=function(l){i.add(l);var u=l.componentWillUnmount;l.componentWillUnmount=function(){i&&i.delete(l),u&&u.call(l)}}),r.children}return t.__c="__cC"+$x++,t.__=e,t.Provider=t.__l=(t.Consumer=function(r,i){return r.children(i)}).contextType=t,t}Yu=Hx.slice,xe={__e:function(e,t,r,i){for(var s,l,u;t=t.__;)if((s=t.__c)&&!s.__)try{if((l=s.constructor)&&l.getDerivedStateFromError!=null&&(s.setState(l.getDerivedStateFromError(e)),u=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,i||{}),u=s.__d),u)return s.__E=s}catch(d){e=d}throw e}},zx=0,Dx=function(e){return e!=null&&e.constructor==null},Dn.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Nr({},this.state),typeof e=="function"&&(e=e(Nr({},r),this.props)),e&&Nr(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),_p(this))},Dn.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),_p(this))},Dn.prototype.render=De,Fa=[],jx=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ux=function(e,t){return e.__v.__b-t.__v.__b},bu.__r=0,Lx=/(PointerCapture)$|Capture$/i,_m=0,wp=_b(!1),xp=_b(!0),$x=0;var ni,nt,bh,Sb,Ks=0,Gx=[],pt=xe,Tb=pt.__b,kb=pt.__r,Eb=pt.diffed,Cb=pt.__c,Mb=pt.unmount,Nb=pt.__;function hl(e,t){pt.__h&&pt.__h(nt,e,Ks||t),Ks=0;var r=nt.__H||(nt.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function Ee(e){return Ks=1,Ek(Vx,e)}function Ek(e,t,r){var i=hl(ni++,2);if(i.t=e,!i.__c&&(i.__=[r?r(t):Vx(void 0,t),function(d){var h=i.__N?i.__N[0]:i.__[0],p=i.t(h,d);h!==p&&(i.__N=[p,i.__[1]],i.__c.setState({}))}],i.__c=nt,!nt.__f)){var s=function(d,h,p){if(!i.__c.__H)return!0;var y=i.__c.__H.__.filter(function(b){return!!b.__c});if(y.every(function(b){return!b.__N}))return!l||l.call(this,d,h,p);var g=i.__c.props!==d;return y.forEach(function(b){if(b.__N){var w=b.__[0];b.__=b.__N,b.__N=void 0,w!==b.__[0]&&(g=!0)}}),l&&l.call(this,d,h,p)||g};nt.__f=!0;var l=nt.shouldComponentUpdate,u=nt.componentWillUpdate;nt.componentWillUpdate=function(d,h,p){if(this.__e){var y=l;l=void 0,s(d,h,p),l=y}u&&u.call(this,d,h,p)},nt.shouldComponentUpdate=s}return i.__N||i.__}function Te(e,t){var r=hl(ni++,3);!pt.__s&&Mm(r.__H,t)&&(r.__=e,r.u=t,nt.__H.__h.push(r))}function Em(e,t){var r=hl(ni++,4);!pt.__s&&Mm(r.__H,t)&&(r.__=e,r.u=t,nt.__h.push(r))}function pe(e){return Ks=5,Vn(function(){return{current:e}},[])}function Vn(e,t){var r=hl(ni++,7);return Mm(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function ht(e,t){return Ks=8,Vn(function(){return e},t)}function Cm(e){var t=nt.context[e.__c],r=hl(ni++,9);return r.c=e,t?(r.__==null&&(r.__=!0,t.sub(nt)),t.props.value):e.__}function Ck(){for(var e;e=Gx.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ou),e.__H.__h.forEach(Tp),e.__H.__h=[]}catch(t){e.__H.__h=[],pt.__e(t,e.__v)}}pt.__b=function(e){nt=null,Tb&&Tb(e)},pt.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Nb&&Nb(e,t)},pt.__r=function(e){kb&&kb(e),ni=0;var t=(nt=e.__c).__H;t&&(bh===nt?(t.__h=[],nt.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(ou),t.__h.forEach(Tp),t.__h=[],ni=0)),bh=nt},pt.diffed=function(e){Eb&&Eb(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Gx.push(t)!==1&&Sb===pt.requestAnimationFrame||((Sb=pt.requestAnimationFrame)||Mk)(Ck)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),bh=nt=null},pt.__c=function(e,t){t.some(function(r){try{r.__h.forEach(ou),r.__h=r.__h.filter(function(i){return!i.__||Tp(i)})}catch(i){t.some(function(s){s.__h&&(s.__h=[])}),t=[],pt.__e(i,r.__v)}}),Cb&&Cb(e,t)},pt.unmount=function(e){Mb&&Mb(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(i){try{ou(i)}catch(s){t=s}}),r.__H=void 0,t&&pt.__e(t,r.__v))};var Ob=typeof requestAnimationFrame=="function";function Mk(e){var t,r=function(){clearTimeout(i),Ob&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(r,35);Ob&&(t=requestAnimationFrame(r))}function ou(e){var t=nt,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),nt=t}function Tp(e){var t=nt;e.__c=e.__(),nt=t}function Mm(e,t){return!e||e.length!==t.length||t.some(function(r,i){return r!==e[i]})}function Vx(e,t){return typeof t=="function"?t(e):t}var Nk=Symbol.for("preact-signals");function Nm(){if(so>1)so--;else{for(var e,t=!1;Ys!==void 0;){var r=Ys;for(Ys=void 0,kp++;r!==void 0;){var i=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&Wx(r))try{r.c()}catch(s){t||(e=s,t=!0)}r=i}}if(kp=0,so--,t)throw e}}var qe=void 0;function Js(e){var t=qe;qe=void 0;try{return e()}finally{qe=t}}var Ys=void 0,so=0,kp=0,xu=0;function Qx(e){if(qe!==void 0){var t=e.n;if(t===void 0||t.t!==qe)return t={i:0,S:e,p:qe.s,n:void 0,t:qe,e:void 0,x:void 0,r:t},qe.s!==void 0&&(qe.s.n=t),qe.s=t,e.n=t,32&qe.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=qe.s,t.n=void 0,qe.s.n=t,qe.s=t),t}}function Ut(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched}Ut.prototype.brand=Nk;Ut.prototype.h=function(){return!0};Ut.prototype.S=function(e){var t=this,r=this.t;r!==e&&e.e===void 0&&(e.x=r,this.t=e,r!==void 0?r.e=e:Js(function(){var i;(i=t.W)==null||i.call(t)}))};Ut.prototype.U=function(e){var t=this;if(this.t!==void 0){var r=e.e,i=e.x;r!==void 0&&(r.x=i,e.e=void 0),i!==void 0&&(i.e=r,e.x=void 0),e===this.t&&(this.t=i,i===void 0&&Js(function(){var s;(s=t.Z)==null||s.call(t)}))}};Ut.prototype.subscribe=function(e){var t=this;return Pu(function(){var r=t.value,i=qe;qe=void 0;try{e(r)}finally{qe=i}})};Ut.prototype.valueOf=function(){return this.value};Ut.prototype.toString=function(){return this.value+""};Ut.prototype.toJSON=function(){return this.value};Ut.prototype.peek=function(){var e=qe;qe=void 0;try{return this.value}finally{qe=e}};Object.defineProperty(Ut.prototype,"value",{get:function(){var e=Qx(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(kp>100)throw new Error("Cycle detected");this.v=e,this.i++,xu++,so++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Nm()}}}});function wt(e,t){return new Ut(e,t)}function Wx(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function Zx(e){for(var t=e.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function Kx(e){for(var t=e.s,r=void 0;t!==void 0;){var i=t.p;t.i===-1?(t.S.U(t),i!==void 0&&(i.n=t.n),t.n!==void 0&&(t.n.p=i)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=i}e.s=r}function si(e,t){Ut.call(this,void 0),this.x=e,this.s=void 0,this.g=xu-1,this.f=4,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched}si.prototype=new Ut;si.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===xu))return!0;if(this.g=xu,this.f|=1,this.i>0&&!Wx(this))return this.f&=-2,!0;var e=qe;try{Zx(this),qe=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return qe=e,Kx(this),this.f&=-2,!0};si.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}Ut.prototype.S.call(this,e)};si.prototype.U=function(e){if(this.t!==void 0&&(Ut.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};si.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(si.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=Qx(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function li(e,t){return new si(e,t)}function Jx(e){var t=e.u;if(e.u=void 0,typeof t=="function"){so++;var r=qe;qe=void 0;try{t()}catch(i){throw e.f&=-2,e.f|=8,Om(e),i}finally{qe=r,Nm()}}}function Om(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,Jx(e)}function Ok(e){if(qe!==this)throw new Error("Out-of-order effect");Kx(this),qe=e,this.f&=-2,8&this.f&&Om(this),Nm()}function To(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}To.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};To.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Jx(this),Zx(this),so++;var e=qe;return qe=this,Ok.bind(this,e)};To.prototype.N=function(){2&this.f||(this.f|=2,this.o=Ys,Ys=this)};To.prototype.d=function(){this.f|=8,1&this.f||Om(this)};To.prototype.dispose=function(){this.d()};function Pu(e){var t=new To(e);try{t.c()}catch(i){throw t.d(),i}var r=t.d.bind(t);return r[Symbol.dispose]=r,r}var wh;function ko(e,t){xe[e]=t.bind(null,xe[e]||function(){})}function _u(e){wh&&wh(),wh=e&&e.S()}function e1(e){var t=this,r=e.data,i=Rk(r);i.value=r;var s=Vn(function(){for(var l=t.__v;l=l.__;)if(l.__c){l.__c.__$f|=4;break}return t.__$u.c=function(){var u,d=t.__$u.S(),h=s.value;d(),Dx(h)||((u=t.base)==null?void 0:u.nodeType)!==3?(t.__$f|=1,t.setState({})):t.base.data=h},li(function(){var u=i.value.value;return u===0?0:u===!0?"":u||""})},[]);return s.value}e1.displayName="_st";Object.defineProperties(Ut.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:e1},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});ko("__b",function(e,t){if(typeof t.type=="string"){var r,i=t.props;for(var s in i)if(s!=="children"){var l=i[s];l instanceof Ut&&(r||(t.__np=r={}),r[s]=l,i[s]=l.peek())}}e(t)});ko("__r",function(e,t){_u();var r,i=t.__c;i&&(i.__$f&=-2,(r=i.__$u)===void 0&&(i.__$u=r=function(s){var l;return Pu(function(){l=this}),l.c=function(){i.__$f|=1,i.setState({})},l}())),_u(r),e(t)});ko("__e",function(e,t,r,i){_u(),e(t,r,i)});ko("diffed",function(e,t){_u();var r;if(typeof t.type=="string"&&(r=t.__e)){var i=t.__np,s=t.props;if(i){var l=r.U;if(l)for(var u in l){var d=l[u];d!==void 0&&!(u in i)&&(d.d(),l[u]=void 0)}else r.U=l={};for(var h in i){var p=l[h],y=i[h];p===void 0?(p=Ak(r,h,y,s),l[h]=p):p.o(y,s)}}}e(t)});function Ak(e,t,r,i){var s=t in e&&e.ownerSVGElement===void 0,l=wt(r);return{o:function(u,d){l.value=u,i=d},d:Pu(function(){var u=l.value.value;i[t]!==u&&(i[t]=u,s?e[t]=u:u?e.setAttribute(t,u):e.removeAttribute(t))})}}ko("unmount",function(e,t){if(typeof t.type=="string"){var r=t.__e;if(r){var i=r.U;if(i){r.U=void 0;for(var s in i){var l=i[s];l&&l.d()}}}}else{var u=t.__c;if(u){var d=u.__$u;d&&(u.__$u=void 0,d.d())}}e(t)});ko("__h",function(e,t,r,i){(i<3||i===9)&&(t.__$f|=2),e(t,r,i)});Dn.prototype.shouldComponentUpdate=function(e,t){var r=this.__$u,i=r&&r.s!==void 0;for(var s in t)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(i||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(i||4&this.__$f)||3&this.__$f)return!0;for(var l in e)if(l!=="__source"&&e[l]!==this.props[l])return!0;for(var u in this.props)if(!(u in e))return!0;return!1};function Rk(e){return Vn(function(){return wt(e)},[])}function el(e){var t=pe(e);t.current=e,Te(function(){return Pu(function(){return t.current()})},[])}function t1(e,t){for(var r in t)e[r]=t[r];return e}function Ep(e,t){for(var r in e)if(r!=="__source"&&!(r in t))return!0;for(var i in t)if(i!=="__source"&&e[i]!==t[i])return!0;return!1}function zk(e,t){var r=t(),i=Ee({t:{__:r,u:t}}),s=i[0].t,l=i[1];return Em(function(){s.__=r,s.u=t,xh(s)&&l({t:s})},[e,r,t]),Te(function(){return xh(s)&&l({t:s}),e(function(){xh(s)&&l({t:s})})},[e]),r}function xh(e){var t,r,i=e.u,s=e.__;try{var l=i();return!((t=s)===(r=l)&&(t!==0||1/t==1/r)||t!=t&&r!=r)}catch{return!0}}function Ab(e,t){this.props=e,this.context=t}function Xu(e,t){function r(s){var l=this.props.ref,u=l==s.ref;return!u&&l&&(l.call?l(null):l.current=null),t?!t(this.props,s)||!u:Ep(this.props,s)}function i(s){return this.shouldComponentUpdate=r,ti(e,s)}return i.displayName="Memo("+(e.displayName||e.name)+")",i.prototype.isReactComponent=!0,i.__f=!0,i.type=e,i}(Ab.prototype=new Dn).isPureReactComponent=!0,Ab.prototype.shouldComponentUpdate=function(e,t){return Ep(this.props,e)||Ep(this.state,t)};var Rb=xe.__b;xe.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Rb&&Rb(e)};var Dk=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Am(e){function t(r){var i=t1({},r);return delete i.ref,e(i,r.ref||null)}return t.$$typeof=Dk,t.render=e,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var jk=xe.__e;xe.__e=function(e,t,r,i){if(e.then){for(var s,l=t;l=l.__;)if((s=l.__c)&&s.__c)return t.__e==null&&(t.__e=r.__e,t.__k=r.__k),s.__c(e,t)}jk(e,t,r,i)};var zb=xe.unmount;function n1(e,t,r){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(i){typeof i.__c=="function"&&i.__c()}),e.__c.__H=null),(e=t1({},e)).__c!=null&&(e.__c.__P===r&&(e.__c.__P=t),e.__c.__e=!0,e.__c=null),e.__k=e.__k&&e.__k.map(function(i){return n1(i,t,r)})),e}function r1(e,t,r){return e&&r&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(i){return r1(i,t,r)}),e.__c&&e.__c.__P===t&&(e.__e&&r.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=r)),e}function _h(){this.__u=0,this.o=null,this.__b=null}function a1(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function Ic(){this.i=null,this.l=null}xe.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),zb&&zb(e)},(_h.prototype=new Dn).__c=function(e,t){var r=t.__c,i=this;i.o==null&&(i.o=[]),i.o.push(r);var s=a1(i.__v),l=!1,u=function(){l||(l=!0,r.__R=null,s?s(d):d())};r.__R=u;var d=function(){if(!--i.__u){if(i.state.__a){var h=i.state.__a;i.__v.__k[0]=r1(h,h.__c.__P,h.__c.__O)}var p;for(i.setState({__a:i.__b=null});p=i.o.pop();)p.forceUpdate()}};i.__u++||32&t.__u||i.setState({__a:i.__b=i.__v.__k[0]}),e.then(u,u)},_h.prototype.componentWillUnmount=function(){this.o=[]},_h.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=n1(this.__b,r,i.__O=i.__P)}this.__b=null}var s=t.__a&&ti(De,null,e.fallback);return s&&(s.__u&=-33),[ti(De,null,t.__a?null:e.children),s]};var Db=function(e,t,r){if(++r[1]===r[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(r=e.i;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.i=r=r[2]}};function Uk(e){return this.getChildContext=function(){return e.context},e.children}function Lk(e){var t=this,r=e.h;if(t.componentWillUnmount=function(){Bs(null,t.v),t.v=null,t.h=null},t.h&&t.h!==r&&t.componentWillUnmount(),!t.v){for(var i=t.__v;i!==null&&!i.__m&&i.__!==null;)i=i.__;t.h=r,t.v={nodeType:1,parentNode:r,childNodes:[],__k:{__m:i.__m},contains:function(){return!0},insertBefore:function(s,l){this.childNodes.push(s),t.h.insertBefore(s,l)},removeChild:function(s){this.childNodes.splice(this.childNodes.indexOf(s)>>>1,1),t.h.removeChild(s)}}}Bs(ti(Uk,{context:t.context},e.__v),t.v)}function $k(e,t){var r=ti(Lk,{__v:e,h:t});return r.containerInfo=t,r}(Ic.prototype=new Dn).__a=function(e){var t=this,r=a1(t.__v),i=t.l.get(e);return i[0]++,function(s){var l=function(){t.props.revealOrder?(i.push(s),Db(t,e,i)):s()};r?r(l):l()}},Ic.prototype.render=function(e){this.i=null,this.l=new Map;var t=wu(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var r=t.length;r--;)this.l.set(t[r],this.i=[1,0,this.i]);return e.children},Ic.prototype.componentDidUpdate=Ic.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,r){Db(e,r,t)})};var Hk=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Ik=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,qk=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Bk=/[A-Z0-9]/g,Yk=typeof document<"u",Pk=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};Dn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(Dn.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var jb=xe.event;function Xk(){}function Fk(){return this.cancelBubble}function Gk(){return this.defaultPrevented}xe.event=function(e){return jb&&(e=jb(e)),e.persist=Xk,e.isPropagationStopped=Fk,e.isDefaultPrevented=Gk,e.nativeEvent=e};var Vk={enumerable:!1,configurable:!0,get:function(){return this.class}},Ub=xe.vnode;xe.vnode=function(e){typeof e.type=="string"&&function(t){var r=t.props,i=t.type,s={},l=i.indexOf("-")===-1;for(var u in r){var d=r[u];if(!(u==="value"&&"defaultValue"in r&&d==null||Yk&&u==="children"&&i==="noscript"||u==="class"||u==="className")){var h=u.toLowerCase();u==="defaultValue"&&"value"in r&&r.value==null?u="value":u==="download"&&d===!0?d="":h==="translate"&&d==="no"?d=!1:h[0]==="o"&&h[1]==="n"?h==="ondoubleclick"?u="ondblclick":h!=="onchange"||i!=="input"&&i!=="textarea"||Pk(r.type)?h==="onfocus"?u="onfocusin":h==="onblur"?u="onfocusout":qk.test(u)&&(u=h):h=u="oninput":l&&Ik.test(u)?u=u.replace(Bk,"-$&").toLowerCase():d===null&&(d=void 0),h==="oninput"&&s[u=h]&&(u="oninputCapture"),s[u]=d}}i=="select"&&s.multiple&&Array.isArray(s.value)&&(s.value=wu(r.children).forEach(function(p){p.props.selected=s.value.indexOf(p.props.value)!=-1})),i=="select"&&s.defaultValue!=null&&(s.value=wu(r.children).forEach(function(p){p.props.selected=s.multiple?s.defaultValue.indexOf(p.props.value)!=-1:s.defaultValue==p.props.value})),r.class&&!r.className?(s.class=r.class,Object.defineProperty(s,"className",Vk)):(r.className&&!r.class||r.class&&r.className)&&(s.class=s.className=r.className),t.props=s}(e),e.$$typeof=Hk,Ub&&Ub(e)};var Lb=xe.__r;xe.__r=function(e){Lb&&Lb(e),e.__c};var $b=xe.diffed;xe.diffed=function(e){$b&&$b(e);var t=e.props,r=e.__e;r!=null&&e.type==="textarea"&&"value"in t&&t.value!==r.value&&(r.value=t.value==null?"":t.value)};var Qk=0;function v(e,t,r,i,s,l){t||(t={});var u,d,h=t;if("ref"in h)for(d in h={},t)d=="ref"?u=t[d]:h[d]=t[d];var p={type:e,props:h,key:r,ref:u,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Qk,__i:-1,__u:0,__source:s,__self:l};if(typeof e=="function"&&(u=e.defaultProps))for(d in u)h[d]===void 0&&(h[d]=u[d]);return xe.vnode&&xe.vnode(p),p}var Sh={exports:{}},_e={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hb;function Wk(){if(Hb)return _e;Hb=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),g=Symbol.iterator;function b(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,T={};function k(N,q,Z){this.props=N,this.context=q,this.refs=T,this.updater=Z||w}k.prototype.isReactComponent={},k.prototype.setState=function(N,q){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,q,"setState")},k.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function _(){}_.prototype=k.prototype;function M(N,q,Z){this.props=N,this.context=q,this.refs=T,this.updater=Z||w}var O=M.prototype=new _;O.constructor=M,S(O,k.prototype),O.isPureReactComponent=!0;var L=Array.isArray,j={H:null,A:null,T:null,S:null,V:null},X=Object.prototype.hasOwnProperty;function G(N,q,Z,J,te,oe){return Z=oe.ref,{$$typeof:e,type:N,key:q,ref:Z!==void 0?Z:null,props:oe}}function ee(N,q){return G(N.type,q,void 0,void 0,void 0,N.props)}function ne(N){return typeof N=="object"&&N!==null&&N.$$typeof===e}function me(N){var q={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Z){return q[Z]})}var de=/\/+/g;function ie(N,q){return typeof N=="object"&&N!==null&&N.key!=null?me(""+N.key):q.toString(36)}function ze(){}function je(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(ze,ze):(N.status="pending",N.then(function(q){N.status==="pending"&&(N.status="fulfilled",N.value=q)},function(q){N.status==="pending"&&(N.status="rejected",N.reason=q)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function Ce(N,q,Z,J,te){var oe=typeof N;(oe==="undefined"||oe==="boolean")&&(N=null);var re=!1;if(N===null)re=!0;else switch(oe){case"bigint":case"string":case"number":re=!0;break;case"object":switch(N.$$typeof){case e:case t:re=!0;break;case y:return re=N._init,Ce(re(N._payload),q,Z,J,te)}}if(re)return te=te(N),re=J===""?"."+ie(N,0):J,L(te)?(Z="",re!=null&&(Z=re.replace(de,"$&/")+"/"),Ce(te,q,Z,"",function(Me){return Me})):te!=null&&(ne(te)&&(te=ee(te,Z+(te.key==null||N&&N.key===te.key?"":(""+te.key).replace(de,"$&/")+"/")+re)),q.push(te)),1;re=0;var be=J===""?".":J+":";if(L(N))for(var fe=0;fe<N.length;fe++)J=N[fe],oe=be+ie(J,fe),re+=Ce(J,q,Z,oe,te);else if(fe=b(N),typeof fe=="function")for(N=fe.call(N),fe=0;!(J=N.next()).done;)J=J.value,oe=be+ie(J,fe++),re+=Ce(J,q,Z,oe,te);else if(oe==="object"){if(typeof N.then=="function")return Ce(je(N),q,Z,J,te);throw q=String(N),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return re}function C(N,q,Z){if(N==null)return N;var J=[],te=0;return Ce(N,J,"","",function(oe){return q.call(Z,oe,te++)}),J}function z(N){if(N._status===-1){var q=N._result;q=q(),q.then(function(Z){(N._status===0||N._status===-1)&&(N._status=1,N._result=Z)},function(Z){(N._status===0||N._status===-1)&&(N._status=2,N._result=Z)}),N._status===-1&&(N._status=0,N._result=q)}if(N._status===1)return N._result.default;throw N._result}var D=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function F(){}return _e.Children={map:C,forEach:function(N,q,Z){C(N,function(){q.apply(this,arguments)},Z)},count:function(N){var q=0;return C(N,function(){q++}),q},toArray:function(N){return C(N,function(q){return q})||[]},only:function(N){if(!ne(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},_e.Component=k,_e.Fragment=r,_e.Profiler=s,_e.PureComponent=M,_e.StrictMode=i,_e.Suspense=h,_e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=j,_e.__COMPILER_RUNTIME={__proto__:null,c:function(N){return j.H.useMemoCache(N)}},_e.cache=function(N){return function(){return N.apply(null,arguments)}},_e.cloneElement=function(N,q,Z){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var J=S({},N.props),te=N.key,oe=void 0;if(q!=null)for(re in q.ref!==void 0&&(oe=void 0),q.key!==void 0&&(te=""+q.key),q)!X.call(q,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&q.ref===void 0||(J[re]=q[re]);var re=arguments.length-2;if(re===1)J.children=Z;else if(1<re){for(var be=Array(re),fe=0;fe<re;fe++)be[fe]=arguments[fe+2];J.children=be}return G(N.type,te,void 0,void 0,oe,J)},_e.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:l,_context:N},N},_e.createElement=function(N,q,Z){var J,te={},oe=null;if(q!=null)for(J in q.key!==void 0&&(oe=""+q.key),q)X.call(q,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(te[J]=q[J]);var re=arguments.length-2;if(re===1)te.children=Z;else if(1<re){for(var be=Array(re),fe=0;fe<re;fe++)be[fe]=arguments[fe+2];te.children=be}if(N&&N.defaultProps)for(J in re=N.defaultProps,re)te[J]===void 0&&(te[J]=re[J]);return G(N,oe,void 0,void 0,null,te)},_e.createRef=function(){return{current:null}},_e.forwardRef=function(N){return{$$typeof:d,render:N}},_e.isValidElement=ne,_e.lazy=function(N){return{$$typeof:y,_payload:{_status:-1,_result:N},_init:z}},_e.memo=function(N,q){return{$$typeof:p,type:N,compare:q===void 0?null:q}},_e.startTransition=function(N){var q=j.T,Z={};j.T=Z;try{var J=N(),te=j.S;te!==null&&te(Z,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(F,D)}catch(oe){D(oe)}finally{j.T=q}},_e.unstable_useCacheRefresh=function(){return j.H.useCacheRefresh()},_e.use=function(N){return j.H.use(N)},_e.useActionState=function(N,q,Z){return j.H.useActionState(N,q,Z)},_e.useCallback=function(N,q){return j.H.useCallback(N,q)},_e.useContext=function(N){return j.H.useContext(N)},_e.useDebugValue=function(){},_e.useDeferredValue=function(N,q){return j.H.useDeferredValue(N,q)},_e.useEffect=function(N,q,Z){var J=j.H;if(typeof Z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(N,q)},_e.useId=function(){return j.H.useId()},_e.useImperativeHandle=function(N,q,Z){return j.H.useImperativeHandle(N,q,Z)},_e.useInsertionEffect=function(N,q){return j.H.useInsertionEffect(N,q)},_e.useLayoutEffect=function(N,q){return j.H.useLayoutEffect(N,q)},_e.useMemo=function(N,q){return j.H.useMemo(N,q)},_e.useOptimistic=function(N,q){return j.H.useOptimistic(N,q)},_e.useReducer=function(N,q,Z){return j.H.useReducer(N,q,Z)},_e.useRef=function(N){return j.H.useRef(N)},_e.useState=function(N){return j.H.useState(N)},_e.useSyncExternalStore=function(N,q,Z){return j.H.useSyncExternalStore(N,q,Z)},_e.useTransition=function(){return j.H.useTransition()},_e.version="19.1.0",_e}var Ib;function pl(){return Ib||(Ib=1,Sh.exports=Wk()),Sh.exports}var ce=pl();const Ft=gm(ce),Zk=$T({__proto__:null,default:Ft},[ce]);Array.prototype.toSorted||Object.defineProperty(Array.prototype,"toSorted",{value:function(e){return[...this].sort(e)},writable:!0,configurable:!0});function Kk(e,t){return t-e}function Jk(e){let t=e[0].name;const r=e.length,i=Math.min(4,r);for(let s=1;s<i;s++)t+=`, ${e[s].name}`;return t}function e4(e){let t=e[0].time;for(let r=1,i=e.length;r<i;r++)t+=e[r].time;return t}function t4(e){for(let t=0,r=e.length;t<r;t++)if(e[t].forget)return!0;return!1}var n4=e=>{let t="";const r=new Map;for(const u of e){const{forget:d,time:h,aggregatedCount:p,name:y}=u;r.has(p)||r.set(p,[]);const g=r.get(p);g&&g.push({name:y,forget:d,time:h??0})}const i=Array.from(r.keys()).sort(Kk),s=[];let l=0;for(const u of i){const d=r.get(u);if(!d)continue;let h=Jk(d);const p=e4(d),y=t4(d);l+=p,d.length>4&&(h+="…"),u>1&&(h+=` × ${u}`),y&&(h=`✨${h}`),s.push(h)}return t=s.join(", "),t.length?(t.length>40&&(t=`${t.slice(0,40)}…`),l>=.01&&(t+=` (${Number(l.toFixed(2))}ms)`),t):null};function xa(e,t){return e===t||e!==e&&t!==t}var Rm=e=>{const t=e.createOscillator(),r=e.createGain();t.connect(r),r.connect(e.destination);const i={type:"sine",freq:[392,600],duration:.3,gain:.12},s=i.freq,l=i.duration/s.length;s.forEach((u,d)=>{t.frequency.setValueAtTime(u,e.currentTime+d*l)}),t.type=i.type,r.gain.setValueAtTime(i.gain,e.currentTime),r.gain.setTargetAtTime(0,e.currentTime+i.duration*.7,.05),t.start(),t.stop(e.currentTime+i.duration)},r4=e=>new Promise(t=>{const r=new Map,i=new IntersectionObserver(s=>{for(const l of s){const u=l.target,d=l.boundingClientRect;r.set(u,d)}i.disconnect(),t(r)});for(const s of e)i.observe(s)}),a4={mount:1,update:2,unmount:4},ct=Am(({size:e=15,name:t,fill:r="currentColor",stroke:i="currentColor",className:s,externalURL:l="",style:u},d)=>{const h=Array.isArray(e)?e[0]:e,p=Array.isArray(e)?e[1]||e[0]:e,y=`${l}#${t}`;return v("svg",{ref:d,width:`${h}px`,height:`${p}px`,fill:r,stroke:i,className:s,style:{...u,minWidth:`${h}px`,maxWidth:`${h}px`,minHeight:`${p}px`,maxHeight:`${p}px`},children:[v("title",{children:t}),v("use",{href:y})]})}),we=24,bt={width:550,height:350,initialHeight:400},Yn=240,Or="react-scan-widget-settings-v2",su="react-scan-widget-collapsed-v1",Zi="react-scan-widget-last-view-v1",lr=typeof window<"u";function i1(e){var t,r,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=i1(e[t]))&&(i&&(i+=" "),i+=r)}else for(r in e)e[r]&&(i&&(i+=" "),i+=r);return i}function i4(){for(var e,t,r=0,i="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=i1(e))&&(i&&(i+=" "),i+=t);return i}var zm="-",o4=e=>{const t=l4(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:i}=e;return{getClassGroupId:u=>{const d=u.split(zm);return d[0]===""&&d.length!==1&&d.shift(),o1(d,t)||s4(u)},getConflictingClassGroupIds:(u,d)=>{const h=r[u]||[];return d&&i[u]?[...h,...i[u]]:h}}},o1=(e,t)=>{var u;if(e.length===0)return t.classGroupId;const r=e[0],i=t.nextPart.get(r),s=i?o1(e.slice(1),i):void 0;if(s)return s;if(t.validators.length===0)return;const l=e.join(zm);return(u=t.validators.find(({validator:d})=>d(l)))==null?void 0:u.classGroupId},qb=/^\[(.+)\]$/,s4=e=>{if(qb.test(e)){const t=qb.exec(e)[1],r=t==null?void 0:t.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},l4=e=>{const{theme:t,prefix:r}=e,i={nextPart:new Map,validators:[]};return u4(Object.entries(e.classGroups),r).forEach(([l,u])=>{Cp(u,i,l,t)}),i},Cp=(e,t,r,i)=>{e.forEach(s=>{if(typeof s=="string"){const l=s===""?t:Bb(t,s);l.classGroupId=r;return}if(typeof s=="function"){if(c4(s)){Cp(s(i),t,r,i);return}t.validators.push({validator:s,classGroupId:r});return}Object.entries(s).forEach(([l,u])=>{Cp(u,Bb(t,l),r,i)})})},Bb=(e,t)=>{let r=e;return t.split(zm).forEach(i=>{r.nextPart.has(i)||r.nextPart.set(i,{nextPart:new Map,validators:[]}),r=r.nextPart.get(i)}),r},c4=e=>e.isThemeGetter,u4=(e,t)=>t?e.map(([r,i])=>{const s=i.map(l=>typeof l=="string"?t+l:typeof l=="object"?Object.fromEntries(Object.entries(l).map(([u,d])=>[t+u,d])):l);return[r,s]}):e,d4=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,i=new Map;const s=(l,u)=>{r.set(l,u),t++,t>e&&(t=0,i=r,r=new Map)};return{get(l){let u=r.get(l);if(u!==void 0)return u;if((u=i.get(l))!==void 0)return s(l,u),u},set(l,u){r.has(l)?r.set(l,u):s(l,u)}}},s1="!",f4=e=>{const{separator:t,experimentalParseClassName:r}=e,i=t.length===1,s=t[0],l=t.length,u=d=>{const h=[];let p=0,y=0,g;for(let k=0;k<d.length;k++){let _=d[k];if(p===0){if(_===s&&(i||d.slice(k,k+l)===t)){h.push(d.slice(y,k)),y=k+l;continue}if(_==="/"){g=k;continue}}_==="["?p++:_==="]"&&p--}const b=h.length===0?d:d.substring(y),w=b.startsWith(s1),S=w?b.substring(1):b,T=g&&g>y?g-y:void 0;return{modifiers:h,hasImportantModifier:w,baseClassName:S,maybePostfixModifierPosition:T}};return r?d=>r({className:d,parseClassName:u}):u},h4=e=>{if(e.length<=1)return e;const t=[];let r=[];return e.forEach(i=>{i[0]==="["?(t.push(...r.sort(),i),r=[]):r.push(i)}),t.push(...r.sort()),t},p4=e=>({cache:d4(e.cacheSize),parseClassName:f4(e),...o4(e)}),m4=/\s+/,g4=(e,t)=>{const{parseClassName:r,getClassGroupId:i,getConflictingClassGroupIds:s}=t,l=[],u=e.trim().split(m4);let d="";for(let h=u.length-1;h>=0;h-=1){const p=u[h],{modifiers:y,hasImportantModifier:g,baseClassName:b,maybePostfixModifierPosition:w}=r(p);let S=!!w,T=i(S?b.substring(0,w):b);if(!T){if(!S){d=p+(d.length>0?" "+d:d);continue}if(T=i(b),!T){d=p+(d.length>0?" "+d:d);continue}S=!1}const k=h4(y).join(":"),_=g?k+s1:k,M=_+T;if(l.includes(M))continue;l.push(M);const O=s(T,S);for(let L=0;L<O.length;++L){const j=O[L];l.push(_+j)}d=p+(d.length>0?" "+d:d)}return d};function v4(){let e=0,t,r,i="";for(;e<arguments.length;)(t=arguments[e++])&&(r=l1(t))&&(i&&(i+=" "),i+=r);return i}var l1=e=>{if(typeof e=="string")return e;let t,r="";for(let i=0;i<e.length;i++)e[i]&&(t=l1(e[i]))&&(r&&(r+=" "),r+=t);return r};function y4(e,...t){let r,i,s,l=u;function u(h){const p=t.reduce((y,g)=>g(y),e());return r=p4(p),i=r.cache.get,s=r.cache.set,l=d,d(h)}function d(h){const p=i(h);if(p)return p;const y=g4(h,r);return s(h,y),y}return function(){return l(v4.apply(null,arguments))}}var Je=e=>{const t=r=>r[e]||[];return t.isThemeGetter=!0,t},c1=/^\[(?:([a-z-]+):)?(.+)\]$/i,b4=/^\d+\/\d+$/,w4=new Set(["px","full","screen"]),x4=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,_4=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,S4=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,T4=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,k4=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Er=e=>lo(e)||w4.has(e)||b4.test(e),da=e=>Eo(e,"length",z4),lo=e=>!!e&&!Number.isNaN(Number(e)),Th=e=>Eo(e,"number",lo),Cs=e=>!!e&&Number.isInteger(Number(e)),E4=e=>e.endsWith("%")&&lo(e.slice(0,-1)),Se=e=>c1.test(e),fa=e=>x4.test(e),C4=new Set(["length","size","percentage"]),M4=e=>Eo(e,C4,u1),N4=e=>Eo(e,"position",u1),O4=new Set(["image","url"]),A4=e=>Eo(e,O4,j4),R4=e=>Eo(e,"",D4),Ms=()=>!0,Eo=(e,t,r)=>{const i=c1.exec(e);return i?i[1]?typeof t=="string"?i[1]===t:t.has(i[1]):r(i[2]):!1},z4=e=>_4.test(e)&&!S4.test(e),u1=()=>!1,D4=e=>T4.test(e),j4=e=>k4.test(e),U4=()=>{const e=Je("colors"),t=Je("spacing"),r=Je("blur"),i=Je("brightness"),s=Je("borderColor"),l=Je("borderRadius"),u=Je("borderSpacing"),d=Je("borderWidth"),h=Je("contrast"),p=Je("grayscale"),y=Je("hueRotate"),g=Je("invert"),b=Je("gap"),w=Je("gradientColorStops"),S=Je("gradientColorStopPositions"),T=Je("inset"),k=Je("margin"),_=Je("opacity"),M=Je("padding"),O=Je("saturate"),L=Je("scale"),j=Je("sepia"),X=Je("skew"),G=Je("space"),ee=Je("translate"),ne=()=>["auto","contain","none"],me=()=>["auto","hidden","clip","visible","scroll"],de=()=>["auto",Se,t],ie=()=>[Se,t],ze=()=>["",Er,da],je=()=>["auto",lo,Se],Ce=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],C=()=>["solid","dashed","dotted","double","none"],z=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],D=()=>["start","end","center","between","around","evenly","stretch"],F=()=>["","0",Se],N=()=>["auto","avoid","all","avoid-page","page","left","right","column"],q=()=>[lo,Se];return{cacheSize:500,separator:":",theme:{colors:[Ms],spacing:[Er,da],blur:["none","",fa,Se],brightness:q(),borderColor:[e],borderRadius:["none","","full",fa,Se],borderSpacing:ie(),borderWidth:ze(),contrast:q(),grayscale:F(),hueRotate:q(),invert:F(),gap:ie(),gradientColorStops:[e],gradientColorStopPositions:[E4,da],inset:de(),margin:de(),opacity:q(),padding:ie(),saturate:q(),scale:q(),sepia:F(),skew:q(),space:ie(),translate:ie()},classGroups:{aspect:[{aspect:["auto","square","video",Se]}],container:["container"],columns:[{columns:[fa]}],"break-after":[{"break-after":N()}],"break-before":[{"break-before":N()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Ce(),Se]}],overflow:[{overflow:me()}],"overflow-x":[{"overflow-x":me()}],"overflow-y":[{"overflow-y":me()}],overscroll:[{overscroll:ne()}],"overscroll-x":[{"overscroll-x":ne()}],"overscroll-y":[{"overscroll-y":ne()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[T]}],"inset-x":[{"inset-x":[T]}],"inset-y":[{"inset-y":[T]}],start:[{start:[T]}],end:[{end:[T]}],top:[{top:[T]}],right:[{right:[T]}],bottom:[{bottom:[T]}],left:[{left:[T]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Cs,Se]}],basis:[{basis:de()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Se]}],grow:[{grow:F()}],shrink:[{shrink:F()}],order:[{order:["first","last","none",Cs,Se]}],"grid-cols":[{"grid-cols":[Ms]}],"col-start-end":[{col:["auto",{span:["full",Cs,Se]},Se]}],"col-start":[{"col-start":je()}],"col-end":[{"col-end":je()}],"grid-rows":[{"grid-rows":[Ms]}],"row-start-end":[{row:["auto",{span:[Cs,Se]},Se]}],"row-start":[{"row-start":je()}],"row-end":[{"row-end":je()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Se]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Se]}],gap:[{gap:[b]}],"gap-x":[{"gap-x":[b]}],"gap-y":[{"gap-y":[b]}],"justify-content":[{justify:["normal",...D()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...D(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...D(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[M]}],px:[{px:[M]}],py:[{py:[M]}],ps:[{ps:[M]}],pe:[{pe:[M]}],pt:[{pt:[M]}],pr:[{pr:[M]}],pb:[{pb:[M]}],pl:[{pl:[M]}],m:[{m:[k]}],mx:[{mx:[k]}],my:[{my:[k]}],ms:[{ms:[k]}],me:[{me:[k]}],mt:[{mt:[k]}],mr:[{mr:[k]}],mb:[{mb:[k]}],ml:[{ml:[k]}],"space-x":[{"space-x":[G]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[G]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Se,t]}],"min-w":[{"min-w":[Se,t,"min","max","fit"]}],"max-w":[{"max-w":[Se,t,"none","full","min","max","fit","prose",{screen:[fa]},fa]}],h:[{h:[Se,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Se,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Se,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Se,t,"auto","min","max","fit"]}],"font-size":[{text:["base",fa,da]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Th]}],"font-family":[{font:[Ms]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Se]}],"line-clamp":[{"line-clamp":["none",lo,Th]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Er,Se]}],"list-image":[{"list-image":["none",Se]}],"list-style-type":[{list:["none","disc","decimal",Se]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[_]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[_]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...C(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Er,da]}],"underline-offset":[{"underline-offset":["auto",Er,Se]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:ie()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Se]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Se]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[_]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Ce(),N4]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",M4]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},A4]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[S]}],"gradient-via-pos":[{via:[S]}],"gradient-to-pos":[{to:[S]}],"gradient-from":[{from:[w]}],"gradient-via":[{via:[w]}],"gradient-to":[{to:[w]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[d]}],"border-w-x":[{"border-x":[d]}],"border-w-y":[{"border-y":[d]}],"border-w-s":[{"border-s":[d]}],"border-w-e":[{"border-e":[d]}],"border-w-t":[{"border-t":[d]}],"border-w-r":[{"border-r":[d]}],"border-w-b":[{"border-b":[d]}],"border-w-l":[{"border-l":[d]}],"border-opacity":[{"border-opacity":[_]}],"border-style":[{border:[...C(),"hidden"]}],"divide-x":[{"divide-x":[d]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[d]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[_]}],"divide-style":[{divide:C()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...C()]}],"outline-offset":[{"outline-offset":[Er,Se]}],"outline-w":[{outline:[Er,da]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:ze()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[_]}],"ring-offset-w":[{"ring-offset":[Er,da]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",fa,R4]}],"shadow-color":[{shadow:[Ms]}],opacity:[{opacity:[_]}],"mix-blend":[{"mix-blend":[...z(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":z()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[i]}],contrast:[{contrast:[h]}],"drop-shadow":[{"drop-shadow":["","none",fa,Se]}],grayscale:[{grayscale:[p]}],"hue-rotate":[{"hue-rotate":[y]}],invert:[{invert:[g]}],saturate:[{saturate:[O]}],sepia:[{sepia:[j]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[h]}],"backdrop-grayscale":[{"backdrop-grayscale":[p]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[y]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[_]}],"backdrop-saturate":[{"backdrop-saturate":[O]}],"backdrop-sepia":[{"backdrop-sepia":[j]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[u]}],"border-spacing-x":[{"border-spacing-x":[u]}],"border-spacing-y":[{"border-spacing-y":[u]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Se]}],duration:[{duration:q()}],ease:[{ease:["linear","in","out","in-out",Se]}],delay:[{delay:q()}],animate:[{animate:["none","spin","ping","pulse","bounce",Se]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[L]}],"scale-x":[{"scale-x":[L]}],"scale-y":[{"scale-y":[L]}],rotate:[{rotate:[Cs,Se]}],"translate-x":[{"translate-x":[ee]}],"translate-y":[{"translate-y":[ee]}],"skew-x":[{"skew-x":[X]}],"skew-y":[{"skew-y":[X]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Se]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Se]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":ie()}],"scroll-mx":[{"scroll-mx":ie()}],"scroll-my":[{"scroll-my":ie()}],"scroll-ms":[{"scroll-ms":ie()}],"scroll-me":[{"scroll-me":ie()}],"scroll-mt":[{"scroll-mt":ie()}],"scroll-mr":[{"scroll-mr":ie()}],"scroll-mb":[{"scroll-mb":ie()}],"scroll-ml":[{"scroll-ml":ie()}],"scroll-p":[{"scroll-p":ie()}],"scroll-px":[{"scroll-px":ie()}],"scroll-py":[{"scroll-py":ie()}],"scroll-ps":[{"scroll-ps":ie()}],"scroll-pe":[{"scroll-pe":ie()}],"scroll-pt":[{"scroll-pt":ie()}],"scroll-pr":[{"scroll-pr":ie()}],"scroll-pb":[{"scroll-pb":ie()}],"scroll-pl":[{"scroll-pl":ie()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Se]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Er,da,Th]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},L4=y4(U4),$=(...e)=>L4(i4(e));typeof navigator<"u"&&navigator.userAgent.includes("Firefox");var d1=(e,t)=>{let r=0;return i=>{const s=Date.now();if(s-r>=t)return r=s,e(i)}},Dr=e=>{if(!lr)return null;try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}},Kt=(e,t)=>{if(lr)try{window.localStorage.setItem(e,JSON.stringify(t))}catch{}},Yb=e=>{if(lr)try{window.localStorage.removeItem(e)}catch{}},$4=24,H4=12,tl=e=>{if(!e)return{name:"Unknown",wrappers:[],wrapperTypes:[]};const{tag:t,type:r,elementType:i}=e;let s=Ot(r);const l=[],u=[];if(Ws(e)||t===dl||t===ul||(r==null?void 0:r.$$typeof)===Symbol.for("react.memo")||(i==null?void 0:i.$$typeof)===Symbol.for("react.memo")){const d=Ws(e);u.push({type:"memo",title:d?"This component has been auto-memoized by the React Compiler.":"Memoized component that skips re-renders if props are the same",compiler:d})}if(t===$4&&u.push({type:"lazy",title:"Lazily loaded component that supports code splitting"}),t===qu&&u.push({type:"suspense",title:"Component that can suspend while content is loading"}),t===H4&&u.push({type:"profiler",title:"Component that measures rendering performance"}),typeof s=="string"){const d=/^(\w+)\((.*)\)$/;let h=s;for(;d.test(h);){const p=h.match(d);if(p!=null&&p[1]&&(p!=null&&p[2]))l.unshift(p[1]),h=p[2];else break}s=h}return{name:s||"Unknown",wrappers:l,wrapperTypes:u}},Fu=wt(!1),Mp=wt(null),ar={corner:"bottom-right",dimensions:{isFullWidth:!1,isFullHeight:!1,width:bt.width,height:bt.height,position:{x:we,y:we}},lastDimensions:{isFullWidth:!1,isFullHeight:!1,width:bt.width,height:bt.height,position:{x:we,y:we}},componentsTree:{width:Yn}},I4=()=>{const e=Dr(Or);return e?{corner:e.corner??ar.corner,dimensions:e.dimensions??ar.dimensions,lastDimensions:e.lastDimensions??e.dimensions??ar.lastDimensions,componentsTree:e.componentsTree??ar.componentsTree}:(Kt(Or,{corner:ar.corner,dimensions:ar.dimensions,lastDimensions:ar.lastDimensions,componentsTree:ar.componentsTree}),ar)},se=wt(I4()),kh=()=>{if(!lr)return;const{dimensions:e}=se.value,{width:t,height:r,position:i}=e;se.value={...se.value,dimensions:{isFullWidth:t>=window.innerWidth-we*2,isFullHeight:r>=window.innerHeight-we*2,width:t,height:r,position:i}}},Ze=wt({view:"none"}),q4=Dr(su),fn=wt(q4??null);function B4(){return!1}function Dm(e){function t(r){return this.shouldComponentUpdate=B4,ti(e,r)}return t.displayName=`Memo(${e.displayName||e.name})`,t.prototype.isReactComponent=!0,t._forwarded=!0,t}var Y4=e=>{const{count:t,getScrollElement:r,estimateSize:i,overscan:s=5}=e,[l,u]=Ee(0),[d,h]=Ee(0),p=pe(),y=pe(null),g=pe(null),b=i(),w=ht(_=>{var O;if(!y.current)return;const M=((O=_==null?void 0:_[0])==null?void 0:O.contentRect.height)??y.current.getBoundingClientRect().height;h(M)},[]),S=ht(()=>{g.current!==null&&cancelAnimationFrame(g.current),g.current=requestAnimationFrame(()=>{w(),g.current=null})},[w]);Te(()=>{const _=r();if(!_)return;y.current=_;const M=()=>{y.current&&u(y.current.scrollTop)};w(),p.current||(p.current=new ResizeObserver(()=>{S()})),p.current.observe(_),_.addEventListener("scroll",M,{passive:!0});const O=new MutationObserver(S);return O.observe(_,{attributes:!0,childList:!0,subtree:!0}),()=>{_.removeEventListener("scroll",M),p.current&&p.current.disconnect(),O.disconnect(),g.current!==null&&cancelAnimationFrame(g.current)}},[r,w,S]);const T=Vn(()=>{const _=Math.floor(l/b),M=Math.ceil(d/b);return{start:Math.max(0,_-s),end:Math.min(t,_+M+s)}},[l,b,d,t,s]);return{virtualItems:Vn(()=>{const _=[];for(let M=T.start;M<T.end;M++)_.push({key:M,index:M,start:M*b});return _},[T,b]),totalSize:t*b,scrollTop:l,containerHeight:d}};Dr("react-scann-pinned");var P4=e=>{const t=[];let r=e;for(;r;){const i=r.elementType,s=typeof i=="function"?i.displayName||i.name:typeof i=="string"?i:"Unknown",l=r.index!==void 0?`[${r.index}]`:"";t.unshift(`${s}${l}`),r=r.return??null}return t.join("::")},qa=new WeakMap,X4=(e,t)=>{const r=t.bind(null,e);return document.addEventListener("scroll",r,{passive:!0,capture:!0}),()=>{document.removeEventListener("scroll",r,{capture:!0})}},F4={activeFlashes:new Map,create(e){const t=e.querySelector(".react-scan-flash-overlay"),r=t instanceof HTMLElement?t:(()=>{const s=document.createElement("div");s.className="react-scan-flash-overlay",e.appendChild(s);const l=X4(e,()=>{e.querySelector(".react-scan-flash-overlay")&&this.create(e)});return this.activeFlashes.set(e,{element:e,overlay:s,scrollCleanup:l}),s})(),i=qa.get(r);i&&(clearTimeout(i),qa.delete(r)),requestAnimationFrame(()=>{r.style.transition="none",r.style.opacity="0.9";const s=setTimeout(()=>{r.style.transition="opacity 150ms ease-out",r.style.opacity="0";const l=setTimeout(()=>{r.parentNode&&r.parentNode.removeChild(r);const u=this.activeFlashes.get(e);u!=null&&u.scrollCleanup&&u.scrollCleanup(),this.activeFlashes.delete(e),qa.delete(r)},150);qa.set(r,l)},300);qa.set(r,s)})},cleanup(e){const t=this.activeFlashes.get(e);if(t){const r=qa.get(t.overlay);r&&(clearTimeout(r),qa.delete(t.overlay)),t.overlay.parentNode&&t.overlay.parentNode.removeChild(t.overlay),t.scrollCleanup&&t.scrollCleanup(),this.activeFlashes.delete(e)}},cleanupAll(){for(const[,e]of this.activeFlashes)this.cleanup(e.element)}},Pb=1e3,f1={updates:[],currentFiber:null,totalUpdates:0,windowOffset:0,currentIndex:0,isViewingHistory:!1,latestFiber:null,isVisible:!1,playbackSpeed:1},Pt=wt(f1),jm=wt(0),Va=[],Ba=null,G4=()=>{if(Va.length===0)return;const e=[...Va],{updates:t,totalUpdates:r,currentIndex:i,isViewingHistory:s}=Pt.value,l=[...t];let u=r;for(const{update:y}of e)l.length>=Pb&&l.shift(),l.push(y),u++;const d=Math.max(0,u-Pb);let h;s?i===r-1?h=l.length-1:i===0?h=0:d===0?h=i:h=i-1:h=l.length-1;const p=e[e.length-1];Pt.value={...Pt.value,latestFiber:p.fiber,updates:l,totalUpdates:u,windowOffset:d,currentIndex:h,isViewingHistory:s},Va=Va.slice(e.length)},h1={showTimeline:()=>{Pt.value={...Pt.value,isVisible:!0}},hideTimeline:()=>{Pt.value={...Pt.value,isVisible:!1,currentIndex:Pt.value.updates.length-1}},updateFrame:(e,t)=>{Pt.value={...Pt.value,currentIndex:e,isViewingHistory:t}},updatePlaybackSpeed:e=>{Pt.value={...Pt.value,playbackSpeed:e}},addUpdate:(e,t)=>{if(Va.push({update:e,fiber:t}),!Ba){const r=()=>{G4(),Ba=null,Va.length>0&&(Ba=setTimeout(r,96))};Ba=setTimeout(r,96)}},reset:()=>{Ba&&(clearTimeout(Ba),Ba=null),Va=[],Pt.value=f1}},Ht=wt({query:"",matches:[],currentMatchIndex:-1}),Eh=wt(!1),p1=(e,t=0,r=null)=>e.reduce((i,s,l)=>{var p,y;const u=s.element?P4(s.fiber):`${r}-${l}`,d=(p=s.fiber)!=null&&p.type?E1(s.fiber):void 0,h={...s,depth:t,nodeId:u,parentId:r,fiber:s.fiber,renderData:d};return i.push(h),(y=s.children)!=null&&y.length&&i.push(...p1(s.children,t+1,u)),i},[]),V4=e=>e.reduce((t,r)=>Math.max(t,r.depth),0),Q4=(e,t)=>{if(t<=0)return 24;const l=Math.max(0,e-Yn);if(l<24)return 0;const d=Math.min(l*.3,t*24)/t;return Math.max(0,Math.min(24,d))},W4=["memo","forwardRef","lazy","suspense"],m1=e=>{const t=e.match(/\[(.*?)\]/);if(!t)return null;const r=[],i=t[1].split(",");for(const s of i){const l=s.trim().toLowerCase();l&&r.push(l)}return r},Z4=e=>{if(e.length===0)return!1;for(const t of e){let r=!1;for(const i of W4)if(i.toLowerCase().includes(t)){r=!0;break}if(!r)return!1}return!0},g1=(e,t)=>{if(e.length===0)return!0;if(!t.length)return!1;for(const r of e){let i=!1;for(const s of t)if(s.type.toLowerCase().includes(r)){i=!0;break}if(!i)return!1}return!0},K4=(e,t)=>Vn(()=>{const{query:r,matches:i}=t,s=i.some(p=>p.nodeId===e.nodeId),l=m1(r)||[],u=r?r.replace(/\[.*?\]/,"").trim():"";if(!r||!s)return{highlightedText:v("span",{className:"truncate",children:e.label}),typeHighlight:!1};let d=!0;if(l.length>0)if(!e.fiber)d=!1;else{const{wrapperTypes:p}=tl(e.fiber);d=g1(l,p)}let h=v("span",{className:"truncate",children:e.label});if(u)try{if(u.startsWith("/")&&u.endsWith("/")){const p=u.slice(1,-1),y=new RegExp(`(${p})`,"i"),g=e.label.split(y);h=v("span",{className:"tree-node-search-highlight",children:g.map((b,w)=>y.test(b)?v("span",{className:$("regex",{start:y.test(b)&&w===0,middle:y.test(b)&&w%2===1,end:y.test(b)&&w===g.length-1,"!ml-0":w===1}),children:b},`${e.nodeId}-${b}`):b)})}else{const p=e.label.toLowerCase(),y=u.toLowerCase(),g=p.indexOf(y);g>=0&&(h=v("span",{className:"tree-node-search-highlight",children:[e.label.slice(0,g),v("span",{className:"single",children:e.label.slice(g,g+u.length)}),e.label.slice(g+u.length)]}))}}catch{}return{highlightedText:h,typeHighlight:d&&l.length>0}},[e.label,e.nodeId,e.fiber,t]),Xb=e=>e>0?e<.1-Number.EPSILON?"< 0.1":e<1e3?Number(e.toFixed(1)).toString():`${(e/1e3).toFixed(1)}k`:"0",J4=({node:e,nodeIndex:t,hasChildren:r,isCollapsed:i,handleTreeNodeClick:s,handleTreeNodeToggle:l,searchValue:u})=>{var w,S;const d=pe(null),h=pe(((w=e.renderData)==null?void 0:w.renderCount)??0),{highlightedText:p,typeHighlight:y}=K4(e,u);Te(()=>{var _;const T=(_=e.renderData)==null?void 0:_.renderCount,k=d.current;!k||!h.current||!T||h.current===T||(k.classList.remove("count-flash"),k.offsetWidth,k.classList.add("count-flash"),h.current=T)},[(S=e.renderData)==null?void 0:S.renderCount]);const g=Vn(()=>{if(!e.renderData)return null;const{selfTime:T,totalTime:k,renderCount:_}=e.renderData;return _?v("span",{className:$("flex items-center gap-x-0.5 ml-1.5","text-[10px] text-neutral-400"),children:v("span",{ref:d,title:`Self time: ${Xb(T)}ms
Total time: ${Xb(k)}ms`,className:"count-badge",children:["×",_]})}):null},[e.renderData]),b=Vn(()=>{if(!e.fiber)return null;const{wrapperTypes:T}=tl(e.fiber),k=T[0];return v("span",{className:$("flex items-center gap-x-1","text-[10px] text-neutral-400 tracking-wide","overflow-hidden"),children:[k&&v(De,{children:[v("span",{title:k==null?void 0:k.title,className:$("rounded py-[1px] px-1","bg-neutral-700 text-neutral-300","truncate",k.type==="memo"&&"bg-[#8e61e3] text-white",y&&"bg-yellow-300 text-black"),children:k.type},k.type),k.compiler&&v("span",{className:"text-yellow-300 ml-1",children:"✨"})]}),T.length>1&&`×${T.length}`,g]})},[e.fiber,y,g]);return v("button",{type:"button",title:e.title,"data-index":t,className:$("flex items-center gap-x-1","pl-1 pr-2","w-full h-7","text-left","rounded","cursor-pointer select-none"),onClick:s,children:[v("button",{type:"button","data-index":t,onClick:l,className:$("w-6 h-6 flex items-center justify-center","text-left"),children:r&&v(ct,{name:"icon-chevron-right",size:12,className:$("transition-transform",!i&&"rotate-90")})}),p,b]})},eE=()=>{const e=pe(null),t=pe(null),r=pe(null),i=pe(null),s=pe(null),l=pe(0),u=pe(!1),d=pe(!1),h=pe(null),[p,y]=Ee([]),[g,b]=Ee(new Set),[w,S]=Ee(void 0),[T,k]=Ee(Ht.value),_=Vn(()=>{const C=[],z=p,D=new Map(z.map(F=>[F.nodeId,F]));for(const F of z){let N=!0,q=F;for(;q.parentId;){const Z=D.get(q.parentId);if(!Z)break;if(g.has(Z.nodeId)){N=!1;break}q=Z}N&&C.push(F)}return C},[g,p]),M=28,{virtualItems:O,totalSize:L}=Y4({count:_.length,getScrollElement:()=>e.current,estimateSize:()=>M,overscan:5}),j=ht(C=>{var F;u.current=!0,(F=i.current)==null||F.blur(),Eh.value=!0;const{parentCompositeFiber:z}=Qa(C);if(!z)return;ae.inspectState.value={kind:"focused",focusedDomElement:C,fiber:z};const D=_.findIndex(N=>N.element===C);if(D!==-1){S(D);const N=D*M,q=e.current;if(q){const Z=q.clientHeight,J=q.scrollTop;(N<J||N+M>J+Z)&&q.scrollTo({top:Math.max(0,N-Z/2),behavior:"instant"})}}},[_]),X=ht(C=>{const z=C.currentTarget,D=Number(z.dataset.index);if(Number.isNaN(D))return;const F=_[D].element;F&&j(F)},[_,j]),G=ht(C=>{b(z=>{const D=new Set(z);return D.has(C)?D.delete(C):D.add(C),D})},[]),ee=ht(C=>{C.stopPropagation();const z=C.target,D=Number(z.dataset.index);if(Number.isNaN(D))return;const F=_[D].nodeId;G(F)},[_,G]),ne=ht(C=>{var Z,J,te,oe,re;(Z=r.current)==null||Z.classList.remove("!border-red-500");const z=[];if(!C){Ht.value={query:C,matches:z,currentMatchIndex:-1};return}if(C.includes("[")&&!C.includes("]")&&C.length>C.indexOf("[")+1){(J=r.current)==null||J.classList.add("!border-red-500");return}const D=m1(C)||[];if(C.includes("[")&&!Z4(D)){(te=r.current)==null||te.classList.add("!border-red-500");return}const F=C.replace(/\[.*?\]/,"").trim(),N=/^\/.*\/$/.test(F);let q=be=>!1;if(F.startsWith("/")&&!N&&F.length>1){(oe=r.current)==null||oe.classList.add("!border-red-500");return}if(N)try{const be=F.slice(1,-1),fe=new RegExp(be,"i");q=Me=>fe.test(Me)}catch{(re=r.current)==null||re.classList.add("!border-red-500");return}else if(F){const be=F.toLowerCase();q=fe=>fe.toLowerCase().includes(be)}for(const be of p){let fe=!0;if(F&&(fe=q(be.label)),fe&&D.length>0)if(!be.fiber)fe=!1;else{const{wrapperTypes:Me}=tl(be.fiber);fe=g1(D,Me)}fe&&z.push(be)}if(Ht.value={query:C,matches:z,currentMatchIndex:z.length>0?0:-1},z.length>0){const be=z[0],fe=_.findIndex(Me=>Me.nodeId===be.nodeId);if(fe!==-1){const Me=fe*M,rt=e.current;if(rt){const Un=rt.clientHeight;rt.scrollTo({top:Math.max(0,Me-Un/2),behavior:"instant"})}}}},[p,_]),me=ht(C=>{const z=C.currentTarget;z&&ne(z.value)},[ne]),de=ht(C=>{const{matches:z,currentMatchIndex:D}=Ht.value;if(z.length===0)return;const F=C==="next"?(D+1)%z.length:(D-1+z.length)%z.length;Ht.value={...Ht.value,currentMatchIndex:F};const N=z[F],q=_.findIndex(Z=>Z.nodeId===N.nodeId);if(q!==-1){S(q);const Z=q*M,J=e.current;if(J){const te=J.clientHeight;J.scrollTo({top:Math.max(0,Z-te/2),behavior:"instant"})}}},[_]),ie=ht(C=>{if(t.current&&(t.current.style.width=`${C}px`),e.current){e.current.style.width=`${C}px`;const z=Q4(C,l.current);e.current.style.setProperty("--indentation-size",`${z}px`)}},[]),ze=ht(C=>{if(!h.current)return;const z=se.value.dimensions.width,D=Math.floor(z-Yn/2);h.current.classList.remove("cursor-ew-resize","cursor-w-resize","cursor-e-resize"),C<=Yn?h.current.classList.add("cursor-w-resize"):C>=D?h.current.classList.add("cursor-e-resize"):h.current.classList.add("cursor-ew-resize")},[]),je=ht(C=>{if(C.preventDefault(),C.stopPropagation(),!e.current)return;e.current.style.setProperty("pointer-events","none"),d.current=!0;const z=C.clientX,D=e.current.offsetWidth,F=se.value.dimensions.width,N=Math.floor(F-Yn/2);ze(D);const q=J=>{const te=z-J.clientX,oe=D+te;ze(oe);const re=Math.min(N,Math.max(Yn,oe));ie(re)},Z=()=>{e.current&&(e.current.style.removeProperty("pointer-events"),document.removeEventListener("pointermove",q),document.removeEventListener("pointerup",Z),se.value={...se.value,componentsTree:{...se.value.componentsTree,width:e.current.offsetWidth}},Kt(Or,se.value),d.current=!1)};document.addEventListener("pointermove",q),document.addEventListener("pointerup",Z)},[ie,ze]);Te(()=>{if(!e.current)return;const C=e.current.offsetWidth;return ze(C),se.subscribe(()=>{e.current&&ze(e.current.offsetWidth)})},[ze]);const Ce=ht(()=>{u.current=!1},[]);return Te(()=>{let C=!0;const z=Z=>{const J=new Map,te=[];for(const{element:oe,name:re,fiber:be}of Z){if(!oe)continue;let fe=re;const{name:Me,wrappers:rt}=tl(be);Me&&(rt.length>0?fe=`${rt.join("(")}(${Me})${")".repeat(rt.length)}`:fe=Me),J.set(oe,{label:Me||re,title:fe,children:[],element:oe,fiber:be})}for(const{element:oe,depth:re}of Z){if(!oe)continue;const be=J.get(oe);if(be)if(re===0)te.push(be);else{let fe=oe.parentElement;for(;fe;){const Me=J.get(fe);if(Me){Me.children=Me.children||[],Me.children.push(be);break}fe=fe.parentElement}}}return te},D=()=>{const Z=s.current;if(!Z)return;const J=wE(),te=z(J);if(te.length>0){const oe=p1(te),re=V4(oe);if(l.current=re,ie(se.value.componentsTree.width),y(oe),C){C=!1;const be=oe.findIndex(fe=>fe.element===Z);if(be!==-1){const fe=be*M,Me=e.current;Me&&setTimeout(()=>{Me.scrollTo({top:fe,behavior:"instant"})},96)}}}},F=ae.inspectState.subscribe(Z=>{if(Z.kind==="focused"){if(Eh.value)return;ne(""),s.current=Z.focusedDomElement,D()}});let N=0;const q=jm.subscribe(()=>{if(ae.inspectState.value.kind==="focused"){if(cancelAnimationFrame(N),d.current)return;N=requestAnimationFrame(()=>{Eh.value=!1,D()})}});return()=>{F(),q(),Ht.value={query:"",matches:[],currentMatchIndex:-1}}},[]),Te(()=>{const C=z=>{if(u.current&&w)switch(z.key){case"ArrowUp":{if(z.preventDefault(),z.stopPropagation(),w>0){const D=_[w-1];D!=null&&D.element&&j(D.element)}return}case"ArrowDown":{if(z.preventDefault(),z.stopPropagation(),w<_.length-1){const D=_[w+1];D!=null&&D.element&&j(D.element)}return}case"ArrowLeft":{z.preventDefault(),z.stopPropagation();const D=_[w];D!=null&&D.nodeId&&G(D.nodeId);return}case"ArrowRight":{z.preventDefault(),z.stopPropagation();const D=_[w];D!=null&&D.nodeId&&G(D.nodeId);return}}};return document.addEventListener("keydown",C),()=>{document.removeEventListener("keydown",C)}},[w,_,j,G]),Te(()=>Ht.subscribe(k),[]),Te(()=>se.subscribe(z=>{var D;(D=t.current)==null||D.style.setProperty("transition","width 0.1s"),ie(z.componentsTree.width),setTimeout(()=>{var F;(F=t.current)==null||F.style.removeProperty("transition")},500)}),[]),v("div",{className:"react-scan-components-tree flex",children:[v("div",{ref:h,onPointerDown:je,className:"relative resize-v-line",children:v("span",{children:v(ct,{name:"icon-ellipsis",size:18})})}),v("div",{ref:t,className:"flex flex-col h-full",children:[v("div",{className:"p-2 border-b border-[#1e1e1e]",children:v("div",{ref:r,title:`Search components by:

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
`,className:$("relative","flex items-center gap-x-1 px-2","rounded","border border-transparent","focus-within:border-[#454545]","bg-[#1e1e1e] text-neutral-300","transition-colors","whitespace-nowrap","overflow-hidden"),children:[v(ct,{name:"icon-search",size:12,className:" text-neutral-500"}),v("div",{className:"relative flex-1 h-7 overflow-hidden",children:v("input",{ref:i,type:"text",value:Ht.value.query,onClick:C=>{C.stopPropagation(),C.currentTarget.focus()},onPointerDown:C=>{C.stopPropagation()},onKeyDown:C=>{C.key==="Escape"&&C.currentTarget.blur(),Ht.value.matches.length&&(C.key==="Enter"&&C.shiftKey?de("prev"):C.key==="Enter"&&(C.metaKey||C.ctrlKey?(C.preventDefault(),C.stopPropagation(),j(Ht.value.matches[Ht.value.currentMatchIndex].element),C.currentTarget.focus()):de("next")))},onChange:me,className:"absolute inset-y-0 inset-x-1",placeholder:"Component name, /regex/, or [type]"})}),Ht.value.query?v(De,{children:[v("span",{className:"flex items-center gap-x-0.5 text-xs text-neutral-500",children:[Ht.value.currentMatchIndex+1,"|",Ht.value.matches.length]}),!!Ht.value.matches.length&&v(De,{children:[v("button",{type:"button",onClick:C=>{C.stopPropagation(),de("prev")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:v(ct,{name:"icon-chevron-right",className:"-rotate-90",size:12})}),v("button",{type:"button",onClick:C=>{C.stopPropagation(),de("next")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:v(ct,{name:"icon-chevron-right",className:"rotate-90",size:12})})]}),v("button",{type:"button",onClick:C=>{C.stopPropagation(),ne("")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:v(ct,{name:"icon-close",size:12})})]}):!!p.length&&v("span",{className:"text-xs text-neutral-500",children:p.length})]})}),v("div",{className:"flex-1 overflow-hidden",children:v("div",{ref:e,onPointerLeave:Ce,className:"tree h-full overflow-auto will-change-transform",children:v("div",{className:"relative w-full",style:{height:L},children:O.map(C=>{var N;const z=_[C.index];if(!z)return null;const D=ae.inspectState.value.kind==="focused"&&z.element===ae.inspectState.value.focusedDomElement,F=C.index===w;return v("div",{className:$("absolute left-0 w-full overflow-hidden","text-neutral-400 hover:text-neutral-300","bg-transparent hover:bg-[#5f3f9a]/20",(D||F)&&"text-neutral-300 bg-[#5f3f9a]/40 hover:bg-[#5f3f9a]/40"),style:{top:C.start,height:M},children:v("div",{className:"w-full h-full",style:{paddingLeft:`calc(${z.depth} * var(--indentation-size))`},children:v(J4,{node:z,nodeIndex:C.index,hasChildren:!!((N=z.children)!=null&&N.length),isCollapsed:g.has(z.nodeId),handleTreeNodeClick:X,handleTreeNodeToggle:ee,searchValue:T})})},z.nodeId)})})})})]})]})},Su=Xu(({text:e,children:t,onCopy:r,className:i,iconSize:s=14})=>{const[l,u]=Ee(!1);Te(()=>{if(l){const p=setTimeout(()=>u(!1),600);return()=>{clearTimeout(p)}}},[l]);const d=ht(p=>{p.preventDefault(),p.stopPropagation(),navigator.clipboard.writeText(e).then(()=>{u(!0),r==null||r(!0,e)},()=>{r==null||r(!1,e)})},[e,r]),h=v("button",{onClick:d,type:"button",className:$("z-10","flex items-center justify-center","hover:text-dev-pink-400","transition-colors duration-200 ease-in-out","cursor-pointer",`size-[${s}px]`,i),children:v(ct,{name:`icon-${l?"check":"copy"}`,size:[s],className:$(l&&"text-green-500")})});return t?t({ClipboardIcon:h,onClick:d}):h}),tE=({length:e,expanded:t,onToggle:r,isNegative:i})=>v("div",{className:"flex items-center gap-1",children:[v("button",{type:"button",onClick:r,className:"flex items-center p-0 opacity-50",children:v(ct,{name:"icon-chevron-right",size:12,className:$("transition-[color,transform]",i?"text-[#f87171]":"text-[#4ade80]",t&&"rotate-90")})}),v("span",{children:["Array(",e,")"]})]}),Np=({value:e,path:t,isNegative:r})=>{const[i,s]=Ee(!1);if(!(e!==null&&typeof e=="object"&&!(e instanceof Date)))return v("div",{className:"flex items-center gap-1",children:[v("span",{className:"text-gray-500",children:[t,":"]}),v("span",{className:"truncate",children:Cu(e)})]});const u=Object.entries(e);return v("div",{className:"flex flex-col",children:[v("div",{className:"flex items-center gap-1",children:[v("button",{type:"button",onClick:()=>s(!i),className:"flex items-center p-0 opacity-50",children:v(ct,{name:"icon-chevron-right",size:12,className:$("transition-[color,transform]",r?"text-[#f87171]":"text-[#4ade80]",i&&"rotate-90")})}),v("span",{className:"text-gray-500",children:[t,":"]}),!i&&v("span",{className:"truncate",children:e instanceof Date?Cu(e):`{${Object.keys(e).join(", ")}}`})]}),i&&v("div",{className:"pl-5 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:u.map(([d,h])=>v(Np,{value:h,path:d,isNegative:r},d))})]})},Tu=({value:e,expanded:t,onToggle:r,isNegative:i})=>{const{value:s,error:l}=SE(e);return l?v("span",{className:"text-gray-500 font-italic",children:l}):s!==null&&typeof s=="object"&&!(s instanceof Promise)?Array.isArray(s)?v("div",{className:"flex flex-col gap-1 relative",children:[v(tE,{length:s.length,expanded:t,onToggle:r,isNegative:i}),t&&v("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:s.map((d,h)=>v(Np,{value:d,path:h.toString(),isNegative:i},h.toString()))}),v(Su,{text:Wb(s),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:d})=>v(De,{children:d})})]}):v("div",{className:"flex items-start gap-1 relative",children:[v("button",{type:"button",onClick:r,className:$("flex items-center","p-0 mt-0.5 mr-1","opacity-50"),children:v(ct,{name:"icon-chevron-right",size:12,className:$("transition-[color,transform]",i?"text-[#f87171]":"text-[#4ade80]",t&&"rotate-90")})}),v("div",{className:"flex-1",children:t?v("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:Object.entries(s).map(([d,h])=>v(Np,{value:h,path:d,isNegative:i},d))}):v("span",{children:Cu(s)})}),v(Su,{text:Wb(s),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:d})=>v(De,{children:d})})]}):v("span",{children:Cu(s)})},nE=50;wt({fiber:null,fiberProps:{current:[],changes:new Set},fiberState:{current:[],changes:new Set},fiberContext:{current:[],changes:new Set}});var Op=e=>{switch(e.kind){case"initialized":return e.changes.currentValue;case"partially-initialized":return e.value}},Fb=(e,t)=>{for(const r of e){const i=t.get(r.name);if(i){t.set(i.name,{count:i.count+1,currentValue:r.value,id:i.name,lastUpdated:Date.now(),name:i.name,previousValue:r.prevValue});continue}t.set(r.name,{count:1,currentValue:r.value,id:r.name,lastUpdated:Date.now(),name:r.name,previousValue:r.prevValue})}},rE=(e,t)=>{for(const r of e){const i=t.contextChanges.get(r.contextType);if(i){if(xa(Op(i),r.value))continue;if(i.kind==="partially-initialized"){t.contextChanges.set(r.contextType,{kind:"initialized",changes:{count:1,currentValue:r.value,id:r.contextType.toString(),lastUpdated:Date.now(),name:r.name,previousValue:i.value}});continue}t.contextChanges.set(r.contextType,{kind:"initialized",changes:{count:i.changes.count+1,currentValue:r.value,id:r.contextType.toString(),lastUpdated:Date.now(),name:r.name,previousValue:i.changes.currentValue}});continue}t.contextChanges.set(r.contextType,{kind:"partially-initialized",id:r.contextType.toString(),lastUpdated:Date.now(),name:r.name,value:r.value})}},aE=e=>{const t={contextChanges:new Map,propsChanges:new Map,stateChanges:new Map};return e.forEach(r=>{rE(r.contextChanges,t),Fb(r.stateChanges,t.stateChanges),Fb(r.propsChanges,t.propsChanges)}),t},Gb=(e,t)=>{const r=new Map;return e.forEach((i,s)=>{r.set(s,i)}),t.forEach((i,s)=>{const l=r.get(s);if(!l){r.set(s,i);return}r.set(s,{count:l.count+i.count,currentValue:i.currentValue,id:i.id,lastUpdated:i.lastUpdated,name:i.name,previousValue:i.previousValue})}),r},iE=(e,t)=>{const r=new Map;return e.contextChanges.forEach((i,s)=>{r.set(s,i)}),t.contextChanges.forEach((i,s)=>{const l=r.get(s);if(!l){r.set(s,i);return}if(Op(i)!==Op(l))switch(l.kind){case"initialized":switch(i.kind){case"initialized":{r.set(s,{kind:"initialized",changes:{...i.changes,count:i.changes.count+l.changes.count+1,currentValue:i.changes.currentValue,previousValue:i.changes.previousValue}});return}case"partially-initialized":{r.set(s,{kind:"initialized",changes:{count:l.changes.count+1,currentValue:i.value,id:i.id,lastUpdated:i.lastUpdated,name:i.name,previousValue:l.changes.currentValue}});return}}case"partially-initialized":switch(i.kind){case"initialized":{r.set(s,{kind:"initialized",changes:{count:i.changes.count+1,currentValue:i.changes.currentValue,id:i.changes.id,lastUpdated:i.changes.lastUpdated,name:i.changes.name,previousValue:l.value}});return}case"partially-initialized":{r.set(s,{kind:"initialized",changes:{count:1,currentValue:i.value,id:i.id,lastUpdated:i.lastUpdated,name:i.name,previousValue:l.value}});return}}}}),r},oE=(e,t)=>{const r=iE(e,t),i=Gb(e.propsChanges,t.propsChanges),s=Gb(e.stateChanges,t.stateChanges);return{contextChanges:r,propsChanges:i,stateChanges:s}},Ap=e=>Array.from(e.propsChanges.values()).reduce((t,r)=>t+r.count,0)+Array.from(e.stateChanges.values()).reduce((t,r)=>t+r.count,0)+Array.from(e.contextChanges.values()).filter(t=>t.kind==="initialized").reduce((t,r)=>t+r.changes.count,0),sE=e=>{const t=pe({queue:[]}),[r,i]=Ee({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),s=ae.inspectState.value.kind==="focused"?ae.inspectState.value.fiber:null,l=s?wa(s):null;return Te(()=>{const u=setInterval(()=>{t.current.queue.length!==0&&(i(d=>{const h=aE(t.current.queue),p=oE(d,h);return Ap(d),Ap(p),p}),t.current.queue=[])},nE);return()=>{clearInterval(u)}},[s]),Te(()=>{if(!l)return;const u=h=>{var p;(p=t.current)==null||p.queue.push(h)};let d=ae.changesListeners.get(l);return d||(d=[],ae.changesListeners.set(l,d)),d.push(u),()=>{var h;i({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),t.current.queue=[],ae.changesListeners.set(l,((h=ae.changesListeners.get(l))==null?void 0:h.filter(p=>p!==u))??[])}},[l]),Te(()=>()=>{i({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),t.current.queue=[]},[l]),r},ku=e=>{var t;if(e==null)return{value:e};if(typeof e=="function")return{value:e};if(typeof e!="object")return{value:e};if(uo(e))return{value:"Promise"};try{const r=Object.getPrototypeOf(e);return r===Promise.prototype||((t=r==null?void 0:r.constructor)==null?void 0:t.name)==="Promise"?{value:"Promise"}:{value:e}}catch{return{value:null,error:"Error accessing value"}}},lE=Xu(()=>{const[e,t]=Ee(!0),r=sE(),[i,s]=Ee(!1),l=Ap(r)>0;Te(()=>{if(!i&&l){const h=setTimeout(()=>{s(!0),requestAnimationFrame(()=>{t(!0)})},0);return()=>clearTimeout(h)}},[i,l]);const u=new Map(Array.from(r.contextChanges.entries()).filter(([,h])=>h.kind==="initialized").map(([h,p])=>[h,p.kind==="partially-initialized"?null:p.changes])),d=ae.inspectState.value.kind==="focused"?ae.inspectState.value.fiber:null;if(d)return v(De,{children:[v(uE,{}),v("div",{className:"overflow-hidden h-full flex flex-col gap-y-2",children:[v("div",{className:"flex flex-col gap-2 px-3 pt-2",children:[v("span",{className:"text-sm font-medium text-[#888]",children:["Why did"," ",v("span",{className:"text-[#A855F7]",children:Ot(d)})," ","render?"]}),!l&&v("div",{className:"text-sm text-[#737373] bg-[#1E1E1E] rounded-md p-4 flex flex-col gap-4",children:[v("div",{children:"No changes detected since selecting"}),v("div",{children:"The props, state, and context changes within your component will be reported here"})]})]}),v("div",{className:$("flex flex-col gap-y-2 pl-3 relative overflow-y-auto h-full"),children:[v(Ch,{changes:r.propsChanges,title:"Changed Props",isExpanded:e}),v(Ch,{renderName:h=>cE(h,Ot(oi(d))??"Unknown Component"),changes:r.stateChanges,title:"Changed State",isExpanded:e}),v(Ch,{changes:u,title:"Changed Context",isExpanded:e})]})]})]})}),cE=(e,t)=>{if(Number.isNaN(Number(e)))return e;const r=Number.parseInt(e);return v("span",{className:"truncate",children:[v("span",{className:"text-white",children:[r,(s=>{const l=s%10,u=s%100;if(u>=11&&u<=13)return"th";switch(l){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}})(r)," hook"," "]}),v("span",{style:{color:"#666"},children:["called in ",v("i",{className:"text-[#A855F7] truncate",children:t})]})]})},uE=Xu(()=>{const e=pe(null),t=pe(null),r=pe(null),i=pe({isPropsChanged:!1,isStateChanged:!1,isContextChanged:!1});return Te(()=>{const s=d1(()=>{var d,h,p;const u=[];((d=e.current)==null?void 0:d.dataset.flash)==="true"&&u.push(e.current),((h=t.current)==null?void 0:h.dataset.flash)==="true"&&u.push(t.current),((p=r.current)==null?void 0:p.dataset.flash)==="true"&&u.push(r.current);for(const y of u)y.classList.remove("count-flash-white"),y.offsetWidth,y.classList.add("count-flash-white")},400);return Pt.subscribe(u=>{var y,g,b,w,S,T;if(!e.current||!t.current||!r.current)return;const{currentIndex:d,updates:h}=u,p=h[d];!p||d===0||(s(),i.current={isPropsChanged:(((g=(y=p.props)==null?void 0:y.changes)==null?void 0:g.size)??0)>0,isStateChanged:(((w=(b=p.state)==null?void 0:b.changes)==null?void 0:w.size)??0)>0,isContextChanged:(((T=(S=p.context)==null?void 0:S.changes)==null?void 0:T.size)??0)>0},e.current.dataset.flash!=="true"&&(e.current.dataset.flash=i.current.isPropsChanged.toString()),t.current.dataset.flash!=="true"&&(t.current.dataset.flash=i.current.isStateChanged.toString()),r.current.dataset.flash!=="true"&&(r.current.dataset.flash=i.current.isContextChanged.toString()))})},[]),v("button",{type:"button",className:$("react-section-header","overflow-hidden","max-h-0","transition-[max-height]"),children:v("div",{className:$("flex-1 react-scan-expandable"),children:v("div",{className:"overflow-hidden",children:v("div",{className:"flex items-center whitespace-nowrap",children:[v("div",{className:"flex items-center gap-x-2",children:"What changed?"}),v("div",{className:$("ml-auto","change-scope","transition-opacity duration-300 delay-150"),children:[v("div",{ref:e,children:"props"}),v("div",{ref:t,children:"state"}),v("div",{ref:r,children:"context"})]})]})})})})}),dE=e=>e,Ch=Xu(({title:e,changes:t,renderName:r=dE})=>{const[i,s]=Ee(new Set),[l,u]=Ee(new Set),d=Array.from(t.entries());return t.size===0?null:v("div",{children:[v("div",{className:"text-xs text-[#888] mb-1.5",children:e}),v("div",{className:"flex flex-col gap-2",children:d.map(([h,p])=>{const y=l.has(String(h)),{value:g,error:b}=ku(p.previousValue),{value:w,error:S}=ku(p.currentValue),T=w1(g,w);return v("div",{children:[v("button",{onClick:()=>{u(k=>{const _=new Set(k);return _.has(String(h))?_.delete(String(h)):_.add(String(h)),_})},className:"flex items-center gap-2 w-full bg-transparent border-none p-0 cursor-pointer text-white text-xs",children:v("div",{className:"flex items-center gap-1.5 flex-1",children:[v(ct,{name:"icon-chevron-right",size:12,className:$("text-[#666] transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",{"rotate-90":y})}),v("div",{className:"whitespace-pre-wrap break-words text-left font-medium flex items-center gap-x-1.5",children:[r(p.name),v(mE,{count:p.count,isFunction:typeof p.currentValue=="function",showWarning:T.changes.length===0,forceFlash:!0})]})]})}),v("div",{className:$("react-scan-expandable",{"react-scan-expanded":y}),children:v("div",{className:"pl-3 text-xs font-mono border-l-1 border-[#333]",children:v("div",{className:"flex flex-col gap-0.5",children:b||S?v(fE,{currError:S,prevError:b}):T.changes.length>0?v(hE,{change:p,diff:T,expandedFns:i,renderName:r,setExpandedFns:s,title:e}):v(pE,{currValue:w,entryKey:h,expandedFns:i,prevValue:g,setExpandedFns:s})})})})]},h)})})]})}),fE=({prevError:e,currError:t})=>v(De,{children:[e&&v("div",{className:"text-[#f87171] bg-[#2a1515] pr-1.5 py-[3px] rounded italic",children:e}),t&&v("div",{className:"text-[#4ade80] bg-[#1a2a1a] pr-1.5 py-[3px] rounded italic mt-0.5",children:t})]}),hE=({diff:e,title:t,renderName:r,change:i,expandedFns:s,setExpandedFns:l})=>e.changes.map((u,d)=>{const{value:h,error:p}=ku(u.prevValue),{value:y,error:g}=ku(u.currentValue),b=typeof h=="function"||typeof y=="function";let w;return t==="Props"&&(w=u.path.length>0?`${r(String(i.name))}.${In(u.path)}`:void 0),t==="State"&&u.path.length>0&&(w=`state.${In(u.path)}`),w||(w=In(u.path)),v("div",{className:$("flex flex-col gap-y-1",d<e.changes.length-1&&"mb-4"),children:[w&&v("div",{className:"text-[#666] text-[10px]",children:w}),v("button",{type:"button",className:$("group","flex items-start","py-[3px] px-1.5","text-left text-[#f87171] bg-[#2a1515]","rounded","overflow-hidden break-all",b&&"cursor-pointer"),onClick:b?()=>{const S=`${In(u.path)}-prev`;l(T=>{const k=new Set(T);return k.has(S)?k.delete(S):k.add(S),k})}:void 0,children:[v("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),v("span",{className:"flex-1 whitespace-nowrap font-mono",children:p?v("span",{className:"italic text-[#f87171]",children:p}):b?v("div",{className:"flex gap-1 items-start flex-col",children:[v("div",{className:"flex gap-1 items-start w-full",children:[v("span",{className:"flex-1 max-h-40",children:zp(h,s.has(`${In(u.path)}-prev`))}),typeof h=="function"&&v(Su,{text:h.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:S})=>v(De,{children:S})})]}),(h==null?void 0:h.toString())===(y==null?void 0:y.toString())&&v("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):v(Tu,{value:h,expanded:s.has(`${In(u.path)}-prev`),onToggle:()=>{const S=`${In(u.path)}-prev`;l(T=>{const k=new Set(T);return k.has(S)?k.delete(S):k.add(S),k})},isNegative:!0})})]}),v("button",{type:"button",className:$("group","flex items-start","py-[3px] px-1.5","text-left text-[#4ade80] bg-[#1a2a1a]","rounded","overflow-hidden break-all",b&&"cursor-pointer"),onClick:b?()=>{const S=`${In(u.path)}-current`;l(T=>{const k=new Set(T);return k.has(S)?k.delete(S):k.add(S),k})}:void 0,children:[v("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),v("span",{className:"flex-1 whitespace-pre-wrap font-mono",children:g?v("span",{className:"italic text-[#4ade80]",children:g}):b?v("div",{className:"flex gap-1 items-start flex-col",children:[v("div",{className:"flex gap-1 items-start w-full",children:[v("span",{className:"flex-1",children:zp(y,s.has(`${In(u.path)}-current`))}),typeof y=="function"&&v(Su,{text:y.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:S})=>v(De,{children:S})})]}),(h==null?void 0:h.toString())===(y==null?void 0:y.toString())&&v("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):v(Tu,{value:y,expanded:s.has(`${In(u.path)}-current`),onToggle:()=>{const S=`${In(u.path)}-current`;l(T=>{const k=new Set(T);return k.has(S)?k.delete(S):k.add(S),k})},isNegative:!1})})]})]},`${w}-${i.name}-${d}`)}),pE=({prevValue:e,currValue:t,entryKey:r,expandedFns:i,setExpandedFns:s})=>v(De,{children:[v("div",{className:"group flex gap-0.5 items-start text-[#f87171] bg-[#2a1515] py-[3px] px-1.5 rounded",children:[v("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),v("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:v(Tu,{value:e,expanded:i.has(`${String(r)}-prev`),onToggle:()=>{const l=`${String(r)}-prev`;s(u=>{const d=new Set(u);return d.has(l)?d.delete(l):d.add(l),d})},isNegative:!0})})]}),v("div",{className:"group flex gap-0.5 items-start text-[#4ade80] bg-[#1a2a1a] py-[3px] px-1.5 rounded mt-0.5",children:[v("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),v("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:v(Tu,{value:t,expanded:i.has(`${String(r)}-current`),onToggle:()=>{const l=`${String(r)}-current`;s(u=>{const d=new Set(u);return d.has(l)?d.delete(l):d.add(l),d})},isNegative:!1})})]}),typeof t=="object"&&t!==null&&v("div",{className:"text-[#666] text-[10px] italic mt-1 flex items-center gap-x-1",children:[v(ct,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),v("span",{children:"Reference changed but objects are structurally the same"})]})]}),mE=({count:e,forceFlash:t,isFunction:r,showWarning:i})=>{const s=pe(!0),l=pe(null),u=pe(e);return Te(()=>{const d=l.current;!d||u.current===e||(d.classList.remove("count-flash"),d.offsetWidth,d.classList.add("count-flash"),u.current=e)},[e]),Te(()=>{if(s.current){s.current=!1;return}if(t){let d=setTimeout(()=>{var h;(h=l.current)==null||h.classList.add("count-flash-white"),d=setTimeout(()=>{var p;(p=l.current)==null||p.classList.remove("count-flash-white")},300)},500);return()=>{clearTimeout(d)}}},[t]),v("div",{ref:l,className:"count-badge",children:[i&&v(ct,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),r&&v(ct,{name:"icon-function",className:"text-[#A855F7] mb-px",size:14}),"x",e]})},pa={lastRendered:new Map,expandedPaths:new Set,cleanup:()=>{pa.lastRendered.clear(),pa.expandedPaths.clear(),F4.cleanupAll(),CE(),h1.reset()}},v1=class extends Dn{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null}),pa.cleanup()}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){var e;return this.state.hasError?v("div",{className:"p-4 bg-red-950/50 h-screen backdrop-blur-sm",children:[v("div",{className:"flex items-center gap-2 mb-3 text-red-400 font-medium",children:[v(ct,{name:"icon-flame",className:"text-red-500",size:16}),"Something went wrong in the inspector"]}),v("div",{className:"p-3 bg-black/40 rounded font-mono text-xs text-red-300 mb-4 break-words",children:((e=this.state.error)==null?void 0:e.message)||JSON.stringify(this.state.error)}),v("button",{type:"button",onClick:this.handleReset,className:"px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2",children:"Reset Inspector"})]}):this.props.children}},gE=li(()=>$("react-scan-inspector","flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",!Fu.value&&"opacity-100 delay-300 pointer-events-auto")),vE=Dm(()=>{const e=pe(null),t=r=>{if(!r)return;e.current=r;const{data:i,shouldUpdate:s}=NE(r);if(s){const l={timestamp:Date.now(),fiberInfo:TE(r),props:i.fiberProps,state:i.fiberState,context:i.fiberContext,stateNames:EE(r)};h1.addUpdate(l,r)}};return el(()=>{const r=ae.inspectState.value;Js(()=>{var l;if(r.kind!=="focused"||!r.focusedDomElement){e.current=null,pa.cleanup();return}r.kind==="focused"&&(Fu.value=!1);const{parentCompositeFiber:i}=Qb(r.focusedDomElement,r.fiber);if(!i){ae.inspectState.value={kind:"inspect-off"},Ze.value={view:"none"};return}((l=e.current)==null?void 0:l.type)!==i.type&&(e.current=i,pa.cleanup(),t(i))})}),el(()=>{jm.value,Js(()=>{const r=ae.inspectState.value;if(r.kind!=="focused"||!r.focusedDomElement){e.current=null,pa.cleanup();return}const{parentCompositeFiber:i}=Qb(r.focusedDomElement,r.fiber);if(!i){ae.inspectState.value={kind:"inspect-off"},Ze.value={view:"none"};return}t(i),r.focusedDomElement.isConnected||(e.current=null,pa.cleanup(),ae.inspectState.value={kind:"inspecting",hoveredDomElement:null})})}),Te(()=>()=>{pa.cleanup()},[]),v(v1,{children:v("div",{className:gE,children:v("div",{className:"w-full h-full",children:v(lE,{})})})})}),yE=Dm(()=>ae.inspectState.value.kind!=="focused"?null:v(v1,{children:[v(vE,{}),v(eE,{})]})),y1=e=>{var t,r,i;if("__REACT_DEVTOOLS_GLOBAL_HOOK__"in window){const s=window.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!(s!=null&&s.renderers))return null;for(const[,l]of Array.from(s.renderers))try{const u=(t=l.findFiberByHostInstance)==null?void 0:t.call(l,e);if(u)return u}catch{}}if("_reactRootContainer"in e){const l=e._reactRootContainer;return((i=(r=l==null?void 0:l._internalRoot)==null?void 0:r.current)==null?void 0:i.child)??null}for(const s in e)if(s.startsWith("__reactInternalInstance$")||s.startsWith("__reactFiber"))return e[s];return null},Um=e=>{let t=e;for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.child)break;t=t.child}for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.return)break;t=t.return}return null},Lm=e=>{if(!e)return null;try{const t=y1(e);if(!t)return null;const r=co(t);return r?r[0]:null}catch{return null}},co=e=>{let t=e,r=null;for(;t;){if(Bu(t))return[t,r];Qs(t)&&!r&&(r=t),t=t.return}return null},Vb=(e,t)=>!!xm(t,i=>i===e),bE=async e=>{const t=Lm(e);if(!t)return null;const r=Um(t);if(!r)return null;const i=(await r4([r])).get(r);return i||null},Qa=e=>{const t=Lm(e);if(!t)return{};if(!Um(t))return{};const i=co(t);if(!i)return{};const[s]=i;return{parentCompositeFiber:s}},Qb=(e,t)=>{var d,h;if(!e.isConnected)return{};let r=t??Lm(e);if(!r)return{};let i=r,s=null,l=null;for(;i;){if(!i.stateNode){i=i.return;continue}if((d=Le.instrumentation)!=null&&d.fiberRoots.has(i.stateNode)){s=i,l=i.stateNode.current;break}i=i.return}if(!s||!l)return{};if(r=Vb(r,l)?r:r.alternate??r,!r)return{};if(!Um(r))return{};const u=(h=co(r))==null?void 0:h[0];return u?{parentCompositeFiber:Vb(u,l)?u:u.alternate??u}:{}},b1=e=>{var s;const t=e.memoizedProps??{},r=((s=e.alternate)==null?void 0:s.memoizedProps)??{},i=[];for(const l in t){if(l==="children")continue;const u=t[l],d=r[l];xa(u,d)||i.push({name:l,value:u,prevValue:d,type:1})}return i},Rp=new Set(["HTML","HEAD","META","TITLE","BASE","SCRIPT","SCRIPT","STYLE","LINK","NOSCRIPT","SOURCE","TRACK","EMBED","OBJECT","PARAM","TEMPLATE","PORTAL","SLOT","AREA","XML","DOCTYPE","COMMENT"]),Eu=(e,t=!0)=>{if(e.stateNode&&"nodeType"in e.stateNode){const i=e.stateNode;return t&&i.tagName&&Rp.has(i.tagName.toLowerCase())?null:i}let r=e.child;for(;r;){const i=Eu(r,t);if(i)return i;r=r.sibling}return null},wE=(e=document.body)=>{const t=[],r=s=>{if(!s)return null;const{parentCompositeFiber:l}=Qa(s);return l&&Eu(l)===s?s:null},i=(s,l=0)=>{const u=r(s);if(u){const{parentCompositeFiber:d}=Qa(u);if(!d)return;t.push({element:u,depth:l,name:Ot(d.type)??"Unknown",fiber:d})}for(const d of Array.from(s.children))i(d,u?l+1:l)};return i(e),t},Wb=e=>{try{if(e===null)return"null";if(e===void 0)return"undefined";if(uo(e))return"Promise";if(typeof e=="function"){const t=e.toString();try{return t.replace(/\s+/g," ").replace(/{\s+/g,`{
  `).replace(/;\s+/g,`;
  `).replace(/}\s*$/g,`
}`).replace(/\(\s+/g,"(").replace(/\s+\)/g,")").replace(/,\s+/g,", ")}catch{return t}}switch(!0){case e instanceof Date:return e.toISOString();case e instanceof RegExp:return e.toString();case e instanceof Error:return`${e.name}: ${e.message}`;case e instanceof Map:return JSON.stringify(Array.from(e.entries()),null,2);case e instanceof Set:return JSON.stringify(Array.from(e),null,2);case e instanceof DataView:return JSON.stringify(Array.from(new Uint8Array(e.buffer)),null,2);case e instanceof ArrayBuffer:return JSON.stringify(Array.from(new Uint8Array(e)),null,2);case(ArrayBuffer.isView(e)&&"length"in e):return JSON.stringify(Array.from(e),null,2);case Array.isArray(e):return JSON.stringify(e,null,2);case typeof e=="object":return JSON.stringify(e,null,2);default:return String(e)}}catch{return String(e)}},xE=(e,t)=>{try{return typeof e!="function"||typeof t!="function"?!1:e.toString()===t.toString()}catch{return!1}},w1=(e,t,r=[],i=new WeakSet)=>{if(e===t)return{type:"primitive",changes:[],hasDeepChanges:!1};if(typeof e=="function"&&typeof t=="function"){const p=xE(e,t);return{type:"primitive",changes:[{path:r,prevValue:e,currentValue:t,sameFunction:p}],hasDeepChanges:!p}}if(e===null||t===null||e===void 0||t===void 0||typeof e!="object"||typeof t!="object")return{type:"primitive",changes:[{path:r,prevValue:e,currentValue:t}],hasDeepChanges:!0};if(i.has(e)||i.has(t))return{type:"object",changes:[{path:r,prevValue:"[Circular]",currentValue:"[Circular]"}],hasDeepChanges:!1};i.add(e),i.add(t);const s=e,l=t,u=new Set([...Object.keys(s),...Object.keys(l)]),d=[];let h=!1;for(const p of u){const y=s[p],g=l[p];if(y!==g)if(typeof y=="object"&&typeof g=="object"&&y!==null&&g!==null){const b=w1(y,g,[...r,p],i);d.push(...b.changes),b.hasDeepChanges&&(h=!0)}else d.push({path:[...r,p],prevValue:y,currentValue:g}),h=!0}return{type:"object",changes:d,hasDeepChanges:h}},In=e=>e.length===0?"":e.reduce((t,r,i)=>/^\d+$/.test(r)?`${t}[${r}]`:i===0?r:`${t}.${r}`,"");function _E(e){const t=e.replace(/\s+/g," ").trim(),r=[];let i="";for(let _=0;_<t.length;_++){const M=t[_];if(M==="="&&t[_+1]===">"){i.trim()&&r.push(i.trim()),r.push("=>"),i="",_++;continue}/[(){}[\];,<>:\?!]/.test(M)?(i.trim()&&r.push(i.trim()),r.push(M),i=""):/\s/.test(M)?(i.trim()&&r.push(i.trim()),i=""):i+=M}i.trim()&&r.push(i.trim());const s=[];for(let _=0;_<r.length;_++){const M=r[_],O=r[_+1];M==="("&&O===")"||M==="["&&O==="]"||M==="{"&&O==="}"||M==="<"&&O===">"?(s.push(M+O),_++):s.push(M)}const l=new Set,u=new Set;function d(_,M,O){let L=0;for(let j=O;j<s.length;j++){const X=s[j];if(X===_)L++;else if(X===M&&(L--,L===0))return j}return-1}for(let _=0;_<s.length;_++)if(s[_]==="("){const O=d("(",")",_);if(O!==-1&&s[O+1]==="=>")for(let L=_;L<=O;L++)l.add(L)}for(let _=1;_<s.length;_++){const M=s[_-1],O=s[_];if(/^[a-zA-Z0-9_$]+$/.test(M)&&O==="<"){const L=d("<",">",_);if(L!==-1)for(let j=_;j<=L;j++)u.add(j)}}let h=0;const p="  ",y=[];let g="";function b(){g.trim()&&y.push(g.replace(/\s+$/,"")),g=""}function w(){b(),g=p.repeat(h)}const S=[];function T(){return S.length?S[S.length-1]:null}function k(_,M=!1){g.trim()?M||/^[),;:\].}>]$/.test(_)?g+=_:g+=` ${_}`:g+=_}for(let _=0;_<s.length;_++){const M=s[_],O=s[_+1]||"";if(["(","{","[","<"].includes(M)){if(k(M),S.push(M),M==="{")h++,w();else if((M==="("||M==="["||M==="<")&&!(l.has(_)&&M==="("||u.has(_)&&M==="<")){const L={"(":")","[":"]","<":">"}[M];O!==L&&O!=="()"&&O!=="[]"&&O!=="<>"&&(h++,w())}}else if([")","}","]",">"].includes(M)){const L=T();M===")"&&L==="("||M==="]"&&L==="["||M===">"&&L==="<"?!(l.has(_)&&M===")")&&!(u.has(_)&&M===">")&&(h=Math.max(h-1,0),w()):M==="}"&&L==="{"&&(h=Math.max(h-1,0),w()),S.pop(),k(M),M==="}"&&w()}else if(/^\(\)|\[\]|\{\}|\<\>$/.test(M))k(M);else if(M==="=>")k(M);else if(M===";")k(M,!0),w();else if(M===","){k(M,!0);const L=T();!(l.has(_)&&L==="(")&&!(u.has(_)&&L==="<")&&L&&["{","[","(","<"].includes(L)&&w()}else k(M)}return b(),y.join(`
`).replace(/\n\s*\n+/g,`
`).trim()}var zp=(e,t=!1)=>{try{const r=e.toString(),i=r.match(/(?:function\s*)?(?:\(([^)]*)\)|([^=>\s]+))\s*=>?/);if(!i)return"ƒ";const l=(i[1]||i[2]||"").replace(/\s+/g,"");return t?_E(r):`ƒ (${l}) => ...`}catch{return"ƒ"}},Cu=e=>{if(e===null)return"null";if(e===void 0)return"undefined";if(typeof e=="string")return`"${e.length>150?`${e.slice(0,20)}...`:e}"`;if(typeof e=="number"||typeof e=="boolean")return String(e);if(typeof e=="function")return zp(e);if(Array.isArray(e))return`Array(${e.length})`;if(e instanceof Map)return`Map(${e.size})`;if(e instanceof Set)return`Set(${e.size})`;if(e instanceof Date)return e.toISOString();if(e instanceof RegExp)return e.toString();if(e instanceof Error)return`${e.name}: ${e.message}`;if(typeof e=="object"){const t=Object.keys(e);return`{${t.length>2?`${t.slice(0,2).join(", ")}, ...`:t.join(", ")}}`}return String(e)},SE=e=>{var t;if(e==null)return{value:e};if(typeof e=="function")return{value:e};if(typeof e!="object")return{value:e};if(e instanceof Promise)return{value:"Promise"};try{const r=Object.getPrototypeOf(e);return r===Promise.prototype||((t=r==null?void 0:r.constructor)==null?void 0:t.name)==="Promise"?{value:"Promise"}:{value:e}}catch{return{value:null,error:"Error accessing value"}}},uo=e=>!!e&&(e instanceof Promise||typeof e=="object"&&"then"in e),TE=e=>{const t=Ga(e);return{displayName:Ot(e)||"Unknown",type:e.type,key:e.key,id:e.index,selfTime:(t==null?void 0:t.selfTime)??null,totalTime:(t==null?void 0:t.totalTime)??null}},$m=new Map,x1=new Map,Hm=new Map,Dp=null,kE=/\[(?<name>\w+),\s*set\w+\]/g,EE=e=>{var r,i;const t=((i=(r=e.type)==null?void 0:r.toString)==null?void 0:i.call(r))||"";return t?Array.from(t.matchAll(kE),s=>{var l;return((l=s.groups)==null?void 0:l.name)??""}):[]},CE=()=>{$m.clear(),x1.clear(),Hm.clear(),Dp=null},ME=e=>{const t=e.type!==Dp;return Dp=e.type,t},Mh=(e,t,r,i)=>{const s=e.get(t),l=e===$m||e===Hm,u=!xa(r,i);if(!s)return e.set(t,{count:u&&l?1:0,currentValue:r,previousValue:i,lastUpdated:Date.now()}),{hasChanged:u,count:u&&l?1:l?0:1};if(!xa(s.currentValue,r)){const d=s.count+1;return e.set(t,{count:d,currentValue:r,previousValue:s.currentValue,lastUpdated:Date.now()}),{hasChanged:!0,count:d}}return{hasChanged:!1,count:s.count}},Zb=e=>{if(!e)return{};if(e.tag===Hu||e.tag===Iu||e.tag===dl||e.tag===ul){let t=e.memoizedState;const r={};let i=0;for(;t;)t.queue&&t.memoizedState!==void 0&&(r[i]=t.memoizedState),t=t.next,i++;return r}return e.tag===ii?e.memoizedState||{}:{}},Im=e=>{var d;const t=e.memoizedProps||{},r=((d=e.alternate)==null?void 0:d.memoizedProps)||{},i={},s={},l=Object.keys(t);for(const h of l)h in t&&(i[h]=t[h],s[h]=r[h]);const u=b1(e).map(h=>({name:h.name,value:h.value,prevValue:h.prevValue}));return{current:i,prev:s,changes:u}},qm=e=>{const t=Zb(e),r=e.alternate?Zb(e.alternate):{},i=[];for(const[s,l]of Object.entries(t)){const u=e.tag===ii?s:Number(s);e.alternate&&!xa(r[s],l)&&i.push({name:u,value:l,prevValue:r[s]})}return{current:t,prev:r,changes:i}},Bm=e=>{const t=Jb(e),r=e.alternate?Jb(e.alternate):new Map,i={},s={},l=[],u=new Set;for(const[d,h]of t){const p=h.displayName,y=d;if(u.has(y))continue;u.add(y),i[p]=h.value;const g=r.get(d);g&&(s[p]=g.value,xa(g.value,h.value)||l.push({name:p,value:h.value,prevValue:g.value,contextType:d}))}return{current:i,prev:s,changes:l}},NE=e=>{const t=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{data:{fiberProps:t(),fiberState:t(),fiberContext:t()},shouldUpdate:!1};let r=!1;const i=ME(e),s=t();if(e.memoizedProps){const{current:g,changes:b}=Im(e);for(const[w,S]of Object.entries(g))s.current.push({name:w,value:uo(S)?{type:"promise",displayValue:"Promise"}:S});for(const w of b){const{hasChanged:S,count:T}=Mh($m,w.name,w.value,w.prevValue);S&&(r=!0,s.changes.add(w.name),s.changesCounts.set(w.name,T))}}const l=t(),{current:u,changes:d}=qm(e);for(const[g,b]of Object.entries(u)){const w=e.tag===ii?g:Number(g);l.current.push({name:w,value:b})}for(const g of d){const{hasChanged:b,count:w}=Mh(x1,g.name,g.value,g.prevValue);b&&(r=!0,l.changes.add(g.name),l.changesCounts.set(g.name,w))}const h=t(),{current:p,changes:y}=Bm(e);for(const[g,b]of Object.entries(p))h.current.push({name:g,value:b});if(!i)for(const g of y){const{hasChanged:b,count:w}=Mh(Hm,g.name,g.value,g.prevValue);b&&(r=!0,h.changes.add(g.name),h.changesCounts.set(g.name,w))}return!r&&!i&&(s.changes.clear(),l.changes.clear(),h.changes.clear()),{data:{fiberProps:s,fiberState:l,fiberContext:h},shouldUpdate:r||i}},Kb=new WeakMap,Jb=e=>{var s;if(!e)return new Map;const t=Kb.get(e);if(t)return t;const r=new Map;let i=e;for(;i;){const l=i.dependencies;if(l!=null&&l.firstContext){let u=l.firstContext;for(;u;){const d=u.memoizedValue,h=(s=u.context)==null?void 0:s.displayName;if(r.has(d)||r.set(u.context,{value:d,displayName:h??"UnnamedContext",contextType:null}),u===u.next)break;u=u.next}}i=i.return}return Kb.set(e,r),r},ew=e=>{const t=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{fiberProps:t(),fiberState:t(),fiberContext:t()};const r=t();if(e.memoizedProps){const{current:d,changes:h}=Im(e);for(const[p,y]of Object.entries(d))r.current.push({name:p,value:uo(y)?{type:"promise",displayValue:"Promise"}:y});for(const p of h)r.changes.add(p.name),r.changesCounts.set(p.name,1)}const i=t();if(e.memoizedState){const{current:d,changes:h}=qm(e);for(const[p,y]of Object.entries(d))i.current.push({name:p,value:uo(y)?{type:"promise",displayValue:"Promise"}:y});for(const p of h)i.changes.add(p.name),i.changesCounts.set(p.name,1)}const s=t(),{current:l,changes:u}=Bm(e);for(const[d,h]of Object.entries(l))s.current.push({name:d,value:uo(h)?{type:"promise",displayValue:"Promise"}:h});for(const d of u)s.changes.add(d.name),s.changesCounts.set(d.name,1);return{fiberProps:r,fiberState:i,fiberContext:s}},jp=0,tw=performance.now(),Nh=0,nw=!1,_1=()=>{Nh++;const e=performance.now();e-tw>=1e3&&(jp=Nh,Nh=0,tw=e),requestAnimationFrame(_1)},S1=()=>(nw||(nw=!0,_1(),jp=60),jp),OE=e=>{var r,i;if(!e)return[];const t=[];if(e.tag===Hu||e.tag===Iu||e.tag===dl||e.tag===ul){let s=e.memoizedState,l=(r=e.alternate)==null?void 0:r.memoizedState,u=0;for(;s;){if(s.queue&&s.memoizedState!==void 0){const d={type:2,name:u.toString(),value:s.memoizedState,prevValue:l==null?void 0:l.memoizedState};xa(d.prevValue,d.value)||t.push(d)}s=s.next,l=l==null?void 0:l.next,u++}return t}if(e.tag===ii){const s={type:3,name:"state",value:e.memoizedState,prevValue:(i=e.alternate)==null?void 0:i.memoizedState};return xa(s.prevValue,s.value)||t.push(s),t}return t},Oh=0,rw=new WeakMap,AE=e=>{const t=rw.get(e);return t||(Oh++,rw.set(e,Oh),Oh)};function RE(e,t){if(!e||!t)return;const r=e.memoizedValue,i={type:4,name:e.context.displayName??"Context.Provider",value:r,contextType:AE(e.context)};this.push(i)}var zE=e=>{const t=[];return fk(e,RE.bind(t)),t},T1=new Map,aw=!1,Ah=()=>Array.from(T1.values()),DE=16,Up=new WeakMap;function k1(e){return String(wa(e))}function E1(e){const t=k1(e),r=Up.get(oi(e));if(r)return r.get(t)}function jE(e,t){const r=oi(e.type),i=k1(e);let s=Up.get(r);s||(s=new Map,Up.set(r,s)),s.set(i,t)}var UE=(e,t,r,i,s)=>{const l=Date.now(),u=E1(e);if((i||s)&&(!u||l-(u.lastRenderTimestamp||0)>DE)){const d=u||{selfTime:0,totalTime:0,renderCount:0,lastRenderTimestamp:l};d.renderCount=(d.renderCount||0)+1,d.selfTime=t||0,d.totalTime=r||0,d.lastRenderTimestamp=l,jE(e,{...d})}},LE=(e,t)=>{const r={isPaused:wt(!Le.options.value.enabled),fiberRoots:new WeakSet};return T1.set(e,{key:e,config:t,instrumentation:r}),aw||(aw=!0,wk({name:"react-scan",onActive:t.onActive,onCommitFiberRoot(i,s){r.fiberRoots.add(s);const l=Ah();for(const u of l)u.config.onCommitStart();bk(s.current,(u,d)=>{const h=oi(u.type);if(!h)return null;const p=Ah(),y=[];for(let M=0,O=p.length;M<O;M++)p[M].config.isValidFiber(u)&&y.push(M);if(!y.length)return null;const g=[];if(p.some(M=>M.config.trackChanges)){const M=Im(u).changes,O=qm(u).changes,L=Bm(u).changes;g.push.apply(null,M.map(j=>({type:1,name:j.name,value:j.value})));for(const j of O)u.tag===ii?g.push({type:3,name:j.name.toString(),value:j.value}):g.push({type:2,name:j.name.toString(),value:j.value});g.push.apply(null,L.map(j=>({type:4,name:j.name,value:j.value,contextType:Number(j.contextType)})))}const{selfTime:b,totalTime:w}=Ga(u),S=S1(),T={phase:a4[d],componentName:Ot(h),count:1,changes:g,time:b,forget:Ws(u),unnecessary:null,didCommit:bm(u),fps:S},k=g.length>0,_=hk(u).length>0;d==="update"&&UE(u,b,w,k,_);for(let M=0,O=y.length;M<O;M++){const L=y[M];p[L].config.onRender(u,[T])}});for(const u of l)u.config.onCommitFinish()},onPostCommitFiberRoot(){const i=Ah();for(const s of i)s.config.onPostCommitFiberRoot()}})),r},$E=e=>{const t=new Map;for(let r=0,i=e.length;r<i;r++){const s=e[r];if(!s.componentName)continue;const l=t.get(s.componentName)??[],u=n4([{aggregatedCount:1,computedKey:null,name:s.componentName,frame:null,...s,changes:{type:s.changes.reduce((p,y)=>p|y.type,0),unstable:s.changes.some(p=>p.unstable)},phase:s.phase,computedCurrent:null}]);if(!u)continue;let d=null,h=null;if(s.changes)for(let p=0,y=s.changes.length;p<y;p++){const{name:g,prevValue:b,nextValue:w,unstable:S,type:T}=s.changes[p];T===1?(d??(d={}),h??(h={}),d[`${S?"⚠️":""}${g} (prev)`]=b,h[`${S?"⚠️":""}${g} (next)`]=w):l.push({prev:b,next:w,type:T===4?"context":"state",unstable:S??!1})}d&&h&&l.push({prev:d,next:h,type:"props",unstable:!1}),t.set(u,l)}for(const[r,i]of Array.from(t.entries())){console.group(`%c${r}`,"background: hsla(0,0%,70%,.3); border-radius:3px; padding: 0 2px;");for(const{type:s,prev:l,next:u,unstable:d}of i)console.log(`${s}:`,d?"⚠️":"",l,"!==",u);console.groupEnd()}},HE=()=>{if(window.hideIntro){window.hideIntro=void 0;return}console.log("%c[·] %cReact Scan","font-weight:bold;color:#7a68e8;font-size:20px;","font-weight:bold;font-size:14px;"),console.log("Try React Scan Monitoring to target performance issues in production: https://react-scan.com/monitoring")},iw=7,IE="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace",qE=.1,qc=(e,t)=>Math.floor(e+(t-e)*qE),BE=4,Mu=40,Rh=45,zh="115,97,230";function YE(e,t){return t[0]-e[0]}function PE(e){return[...e.entries()].sort(YE)}function ow([e,t]){let r=`${t.slice(0,BE).join(", ")} ×${e}`;return r.length>Mu&&(r=`${r.slice(0,Mu)}…`),r}var sw=e=>{const t=new Map;for(const{name:l,count:u}of e)t.set(l,(t.get(l)||0)+u);const r=new Map;for(const[l,u]of t){const d=r.get(u);d?d.push(l):r.set(u,[l])}const i=PE(r);let s=ow(i[0]);for(let l=1,u=i.length;l<u;l++)s+=", "+ow(i[l]);return s.length>Mu?`${s.slice(0,Mu)}…`:s},lw=e=>{let t=0;for(const r of e)t+=r.width*r.height;return t},XE=(e,t)=>{for(const{id:r,name:i,count:s,x:l,y:u,width:d,height:h,didCommit:p}of t){const y={id:r,name:i,count:s,x:l,y:u,width:d,height:h,frame:0,targetX:l,targetY:u,targetWidth:d,targetHeight:h,didCommit:p},g=String(y.id),b=e.get(g);b?(b.count++,b.frame=0,b.targetX=l,b.targetY=u,b.targetWidth=d,b.targetHeight=h,b.didCommit=p):e.set(g,y)}},FE=(e,t,r)=>{for(const i of e.values()){const s=i.x-t,l=i.y-r;i.targetX=s,i.targetY=l}},GE=(e,t)=>{const r=e.getContext("2d",{alpha:!0});return r&&r.scale(t,t),r},VE=(e,t,r,i)=>{e.clearRect(0,0,t.width/r,t.height/r);const s=new Map,l=new Map;for(const h of i.values()){const{x:p,y,width:g,height:b,targetX:w,targetY:S,targetWidth:T,targetHeight:k,frame:_}=h;w!==p&&(h.x=qc(p,w)),S!==y&&(h.y=qc(y,S)),T!==g&&(h.width=qc(g,T)),k!==b&&(h.height=qc(b,k));const M=`${w??p},${S??y}`,O=`${M},${T??g},${k??b}`,L=s.get(M);L?L.push(h):s.set(M,[h]);const j=1-_/Rh;h.frame++;const X=l.get(O)||{x:p,y,width:g,height:b,alpha:j};j>X.alpha&&(X.alpha=j),l.set(O,X)}for(const{x:h,y:p,width:y,height:g,alpha:b}of l.values())e.strokeStyle=`rgba(${zh},${b})`,e.lineWidth=1,e.beginPath(),e.rect(h,p,y,g),e.stroke(),e.fillStyle=`rgba(${zh},${b*.1})`,e.fill();e.font=`11px ${IE}`;const u=new Map;e.textRendering="optimizeSpeed";for(const h of s.values()){const p=h[0],{x:y,y:g,frame:b}=p,w=1-b/Rh,S=sw(h),{width:T}=e.measureText(S);if(u.set(`${y},${g},${T},${S}`,{text:S,width:T,height:11,alpha:w,x:y,y:g,outlines:h}),b>Rh)for(const _ of h)i.delete(String(_.id))}const d=Array.from(u.entries()).sort(([h,p],[y,g])=>lw(g.outlines)-lw(p.outlines));for(const[h,p]of d)if(u.has(h))for(const[y,g]of u.entries()){if(h===y)continue;const{x:b,y:w,width:S,height:T}=p,{x:k,y:_,width:M,height:O}=g;b+S>k&&k+M>b&&w+T>_&&_+O>w&&(p.text=sw(p.outlines.concat(g.outlines)),p.width=e.measureText(p.text).width,u.delete(y))}for(const h of u.values()){const{x:p,y,alpha:g,width:b,height:w,text:S}=h;let T=y-w-4;T<0&&(T=0),e.fillStyle=`rgba(${zh},${g})`,e.fillRect(p,T,b+4,w+4),e.fillStyle=`rgba(255,255,255,${g})`,e.fillText(S,p+2,T+w)}return i.size>0},QE='"use strict";(()=>{var D="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";var M=(t,i)=>Math.floor(t+(i-t)*.1);var _="115,97,230";function F(t,i){return i[0]-t[0]}function I(t){return[...t.entries()].sort(F)}function $([t,i]){let o=`${i.slice(0,4).join(", ")} \\xD7${t}`;return o.length>40&&(o=`${o.slice(0,40)}\\u2026`),o}var S=t=>{let i=new Map;for(let{name:e,count:u}of t)i.set(e,(i.get(e)||0)+u);let o=new Map;for(let[e,u]of i){let A=o.get(u);A?A.push(e):o.set(u,[e])}let h=I(o),s=$(h[0]);for(let e=1,u=h.length;e<u;e++)s+=", "+$(h[e]);return s.length>40?`${s.slice(0,40)}\\u2026`:s},X=t=>{let i=0;for(let o of t)i+=o.width*o.height;return i};var N=(t,i)=>{let o=t.getContext("2d",{alpha:!0});return o&&o.scale(i,i),o},Y=(t,i,o,h)=>{t.clearRect(0,0,i.width/o,i.height/o);let s=new Map,e=new Map;for(let n of h.values()){let{x:r,y:c,width:a,height:g,targetX:l,targetY:d,targetWidth:f,targetHeight:p,frame:O}=n;l!==r&&(n.x=M(r,l)),d!==c&&(n.y=M(c,d)),f!==a&&(n.width=M(a,f)),p!==g&&(n.height=M(g,p));let w=`${l??r},${d??c}`,y=`${w},${f??a},${p??g}`,v=s.get(w);v?v.push(n):s.set(w,[n]);let E=1-O/45;n.frame++;let x=e.get(y)||{x:r,y:c,width:a,height:g,alpha:E};E>x.alpha&&(x.alpha=E),e.set(y,x)}for(let{x:n,y:r,width:c,height:a,alpha:g}of e.values())t.strokeStyle=`rgba(${_},${g})`,t.lineWidth=1,t.beginPath(),t.rect(n,r,c,a),t.stroke(),t.fillStyle=`rgba(${_},${g*.1})`,t.fill();t.font=`11px ${D}`;let u=new Map;t.textRendering="optimizeSpeed";for(let n of s.values()){let r=n[0],{x:c,y:a,frame:g}=r,l=1-g/45,d=S(n),{width:f}=t.measureText(d),p=11;u.set(`${c},${a},${f},${d}`,{text:d,width:f,height:p,alpha:l,x:c,y:a,outlines:n});let O=a-p-4;if(O<0&&(O=0),g>45)for(let w of n)h.delete(String(w.id))}let A=Array.from(u.entries()).sort(([n,r],[c,a])=>X(a.outlines)-X(r.outlines));for(let[n,r]of A)if(u.has(n))for(let[c,a]of u.entries()){if(n===c)continue;let{x:g,y:l,width:d,height:f}=r,{x:p,y:O,width:w,height:y}=a;g+d>p&&p+w>g&&l+f>O&&O+y>l&&(r.text=S(r.outlines.concat(a.outlines)),r.width=t.measureText(r.text).width,u.delete(c))}for(let n of u.values()){let{x:r,y:c,alpha:a,width:g,height:l,text:d}=n,f=c-l-4;f<0&&(f=0),t.fillStyle=`rgba(${_},${a})`,t.fillRect(r,f,g+4,l+4),t.fillStyle=`rgba(255,255,255,${a})`,t.fillText(d,r+2,f+l)}return h.size>0};var m=null,L=null,b=1,T=new Map,C=null,R=()=>{if(!L||!m)return;Y(L,m,b,T)?C=requestAnimationFrame(R):C=null};self.onmessage=t=>{let{type:i}=t.data;if(i==="init"&&(m=t.data.canvas,b=t.data.dpr,m&&(m.width=t.data.width,m.height=t.data.height,L=N(m,b))),!(!m||!L)){if(i==="resize"){b=t.data.dpr,m.width=t.data.width*b,m.height=t.data.height*b,L.resetTransform(),L.scale(b,b),R();return}if(i==="draw-outlines"){let{data:o,names:h}=t.data,s=new Float32Array(o);for(let e=0;e<s.length;e+=7){let u=s[e+2],A=s[e+3],n=s[e+4],r=s[e+5],c=s[e+6],a={id:s[e],name:h[e/7],count:s[e+1],x:u,y:A,width:n,height:r,frame:0,targetX:u,targetY:A,targetWidth:n,targetHeight:r,didCommit:c},g=String(a.id),l=T.get(g);l?(l.count++,l.frame=0,l.targetX=u,l.targetY=A,l.targetWidth=n,l.targetHeight=r,l.didCommit=c):T.set(g,a)}C||(C=requestAnimationFrame(R));return}if(i==="scroll"){let{deltaX:o,deltaY:h}=t.data;for(let s of T.values()){let e=s.x-o,u=s.y-h;s.targetX=e,s.targetY=u}}}};})();\n',On=null,Nu=null,Wa=null,Nn=1,Ou=null,Ym=new Map,Ps=new Map,ao=new Set,WE=e=>{if(!Bu(e))return;const t=typeof e.type=="string"?e.type:Ot(e);if(!t)return;const r=Ps.get(e),i=pk(e),s=bm(e);r?r.count++:(Ps.set(e,{name:t,count:1,elements:i.map(l=>l.stateNode),didCommit:s?1:0}),ao.add(e))},ZE=e=>{const t=e[0];if(e.length===1)return t;let r,i,s,l;for(let u=0,d=e.length;u<d;u++){const h=e[u];r=r==null?h.x:Math.min(r,h.x),i=i==null?h.y:Math.min(i,h.y),s=s==null?h.x+h.width:Math.max(s,h.x+h.width),l=l==null?h.y+h.height:Math.max(l,h.y+h.height)}return r==null||i==null||s==null||l==null?e[0]:new DOMRect(r,i,s-r,l-i)};function KE(e,t){const r=[];for(const i of e){const s=i.target;this.seenElements.has(s)||(this.seenElements.add(s),r.push(i))}r.length>0&&this.resolveNext&&(this.resolveNext(r),this.resolveNext=null),this.seenElements.size===this.uniqueElements.size&&(t.disconnect(),this.done=!0,this.resolveNext&&this.resolveNext([]))}var C1=async function*(e){const t={uniqueElements:new Set(e),seenElements:new Set,resolveNext:null,done:!1},r=new IntersectionObserver(KE.bind(t));for(const i of t.uniqueElements)r.observe(i);for(;!t.done;){const i=await new Promise(s=>{t.resolveNext=s});i.length>0&&(yield i)}},JE=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:ArrayBuffer,e3=async()=>{const e=[];for(const r of ao){const i=Ps.get(r);if(i)for(let s=0;s<i.elements.length;s++)i.elements[s]instanceof Element&&e.push(i.elements[s])}const t=new Map;for await(const r of C1(e)){for(const u of r){const d=u.target,h=u.intersectionRect;u.isIntersecting&&h.width&&h.height&&t.set(d,h)}const i=[],s=[],l=[];for(const u of ao){const d=Ps.get(u);if(!d)continue;const h=[];for(let p=0;p<d.elements.length;p++){const y=d.elements[p],g=t.get(y);g&&h.push(g)}h.length&&(i.push(d),s.push(ZE(h)),l.push(wa(u)))}if(i.length>0){const u=new JE(i.length*iw*4),d=new Float32Array(u),h=new Array(i.length);let p;for(let y=0,g=i.length;y<g;y++){const b=i[y],w=l[y],{x:S,y:T,width:k,height:_}=s[y],{count:M,name:O,didCommit:L}=b;if(On){const j=y*iw;d[j]=w,d[j+1]=M,d[j+2]=S,d[j+3]=T,d[j+4]=k,d[j+5]=_,d[j+6]=L,h[y]=O}else p||(p=new Array(i.length)),p[y]={id:w,name:O,count:M,x:S,y:T,width:k,height:_,didCommit:L}}On?On.postMessage({type:"draw-outlines",data:u,names:h}):Nu&&Wa&&p&&(XE(Ym,p),Ou||(Ou=requestAnimationFrame(Pm)))}}for(const r of ao)Ps.delete(r),ao.delete(r)},Pm=()=>{if(!Wa||!Nu)return;VE(Wa,Nu,Nn,Ym)?Ou=requestAnimationFrame(Pm):Ou=null},t3=typeof OffscreenCanvas<"u"&&typeof Worker<"u",cw=()=>Math.min(window.devicePixelRatio||1,2),n3=()=>{r3();const e=document.createElement("div");e.setAttribute("data-react-scan","true");const t=e.attachShadow({mode:"open"}),r=document.createElement("canvas");if(r.style.position="fixed",r.style.top="0",r.style.left="0",r.style.pointerEvents="none",r.style.zIndex="2147483646",r.setAttribute("aria-hidden","true"),t.appendChild(r),!r)return null;Nn=cw(),Nu=r;const{innerWidth:i,innerHeight:s}=window;r.style.width=`${i}px`,r.style.height=`${s}px`;const l=i*Nn,u=s*Nn;if(r.width=l,r.height=u,t3&&!window.__REACT_SCAN_EXTENSION__)try{On=new Worker(URL.createObjectURL(new Blob([QE],{type:"application/javascript"})));const g=r.transferControlToOffscreen();On==null||On.postMessage({type:"init",canvas:g,width:r.width,height:r.height,dpr:Nn},[g])}catch(g){console.warn("Failed to initialize OffscreenCanvas worker:",g)}On||(Wa=GE(r,Nn));let d=!1;window.addEventListener("resize",()=>{d||(d=!0,setTimeout(()=>{const g=window.innerWidth,b=window.innerHeight;Nn=cw(),r.style.width=`${g}px`,r.style.height=`${b}px`,On?On.postMessage({type:"resize",width:g,height:b,dpr:Nn}):(r.width=g*Nn,r.height=b*Nn,Wa&&(Wa.resetTransform(),Wa.scale(Nn,Nn)),Pm()),d=!1}))});let h=window.scrollX,p=window.scrollY,y=!1;return window.addEventListener("scroll",()=>{y||(y=!0,setTimeout(()=>{const{scrollX:g,scrollY:b}=window,w=g-h,S=b-p;h=g,p=b,On?On.postMessage({type:"scroll",deltaX:w,deltaY:S}):requestAnimationFrame(FE.bind(null,Ym,w,S)),y=!1},16*2))}),setInterval(()=>{ao.size&&requestAnimationFrame(e3)},16*2),t.appendChild(r),e},uw=()=>globalThis.__REACT_SCAN_STOP__,r3=()=>{const e=document.querySelector("[data-react-scan]");e&&e.remove()},a3=e=>{if(Bu(e)&&Le.options.value.showToolbar!==!1&&ae.inspectState.value.kind==="focused"){const t=e,{selfTime:r}=Ga(e),i=Ot(e.type),s=wa(t),l=ae.reportData.get(s),u=(l==null?void 0:l.count)??0,d=(l==null?void 0:l.time)??0,h=[],p=ae.changesListeners.get(wa(e));if(p!=null&&p.length){const g=b1(e).map(T=>({type:1,name:T.name,value:T.value,prevValue:T.prevValue,unstable:!1})),b=OE(e),S=zE(e).map(T=>({name:T.name,type:4,value:T.value,contextType:T.contextType}));p.forEach(T=>{T({propsChanges:g,stateChanges:b,contextChanges:S})})}const y={count:u+1,time:d+r||0,renders:[],displayName:i,type:oi(e.type)||null,changes:h};ae.reportData.set(s,y),Lp=!0}},Lp=!1,dw,i3=()=>{clearInterval(dw),dw=setInterval(()=>{Lp&&(ae.lastReportTime.value=Date.now(),Lp=!1)},50)},o3=e=>!KC.has(e.memoizedProps),s3=e=>{if(uw())return;let t,r=!1;const i=()=>{r||(t&&cancelAnimationFrame(t),t=requestAnimationFrame(()=>{r=!0;const l=n3();l&&document.documentElement.appendChild(l),e()}))},s=LE("react-scan-devtools-0.1.0",{onCommitStart:()=>{var l,u;(u=(l=Le.options.value).onCommitStart)==null||u.call(l)},onActive:()=>{uw()||(i(),window.__REACT_SCAN_EXTENSION__||(globalThis.__REACT_SCAN__={ReactScanInternals:Le}),i3(),HE())},onError:()=>{},isValidFiber:o3,onRender:(l,u)=>{var y,g,b,w;Bu(l)&&((y=ae.interactionListeningForRenders)==null||y.call(ae,l,u));const d=(g=Le.instrumentation)==null?void 0:g.isPaused.value,h=ae.inspectState.value.kind==="inspect-off"||ae.inspectState.value.kind==="uninitialized";d&&h||(d||WE(l),Le.options.value.log&&$E(u),ae.inspectState.value.kind==="focused"&&(jm.value=Date.now()),h||a3(l),(w=(b=Le.options.value).onRender)==null||w.call(b,l,u))},onCommitFinish:()=>{var l,u;i(),(u=(l=Le.options.value).onCommitFinish)==null||u.call(l)},onPostCommitFiberRoot(){i()},trackChanges:!1});Le.instrumentation=s},l3=`*, ::before, ::after {
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
`,c3=(e,t,r=t)=>{const[i,s]=Ee(e);return Te(()=>{if(e===i)return;const u=setTimeout(()=>s(e),e?t:r);return()=>clearTimeout(u)},[e,t,r]),i},u3=li(()=>$("absolute inset-0 flex items-center gap-x-2","translate-y-0","transition-transform duration-300",Fu.value&&"-translate-y-[200%]")),d3=()=>{const e=pe(null),t=pe(null),[r,i]=Ee(null);el(()=>{const l=ae.inspectState.value;l.kind==="focused"&&i(l.fiber)}),el(()=>{const l=Pt.value;Js(()=>{var S,T;if(ae.inspectState.value.kind!=="focused"||!e.current||!t.current)return;const{totalUpdates:u,currentIndex:d,updates:h,isVisible:p,windowOffset:y}=l,g=Math.max(0,u-1),b=p?`#${y+d} Re-render`:g>0?`×${g}`:"";let w;if(g>0&&d>=0&&d<h.length){const k=(T=(S=h[d])==null?void 0:S.fiberInfo)==null?void 0:T.selfTime;w=k>0?k<.1-Number.EPSILON?"< 0.1ms":`${Number(k.toFixed(1))}ms`:void 0}e.current.dataset.text=b?` • ${b}`:"",t.current.dataset.text=w?` • ${w}`:""})});const s=Vn(()=>{if(!r)return null;const{name:l,wrappers:u,wrapperTypes:d}=tl(r),h=u.length?`${u.join("(")}(${l})${")".repeat(u.length)}`:l??"",p=d[0];return v("span",{title:h,className:"flex items-center gap-x-1",children:[l??"Unknown",v("span",{title:p==null?void 0:p.title,className:"flex items-center gap-x-1 text-[10px] text-purple-400",children:!!p&&v(De,{children:[v("span",{className:$("rounded py-[1px] px-1","truncate",p.compiler&&"bg-purple-800 text-neutral-400",!p.compiler&&"bg-neutral-700 text-neutral-300",p.type==="memo"&&"bg-[#5f3f9a] text-white"),children:p.type},p.type),p.compiler&&v("span",{className:"text-yellow-300",children:"✨"})]})}),d.length>1&&v("span",{className:"text-[10px] text-neutral-400",children:["×",d.length-1]})]})},[r]);return v("div",{className:u3,children:[s,v("div",{className:"flex items-center gap-x-2 mr-auto text-xs text-[#888]",children:[v("span",{ref:e,className:"with-data-text cursor-pointer !overflow-visible",title:"Click to toggle between rerenders and total renders"}),v("span",{ref:t,className:"with-data-text !overflow-visible"})]})]})},f3=()=>{const e=c3(ae.inspectState.value.kind==="focused",150,0),t=()=>{Ze.value={view:"none"},ae.inspectState.value={kind:"inspect-off"}};if(Ze.value.view!=="notifications")return v("div",{className:"react-scan-header",children:[v("div",{className:"relative flex-1 h-full",children:v("div",{className:$("react-scan-header-item is-visible",!e&&"!duration-0"),children:v(d3,{})})}),v("button",{type:"button",title:"Close",className:"react-scan-close-button",onClick:t,children:v(ct,{name:"icon-close"})})]})},h3=({className:e,...t})=>v("div",{className:$("react-scan-toggle",e),children:[v("input",{type:"checkbox",...t}),v("div",{})]}),p3=({fps:e})=>{const t=r=>r<30?"#EF4444":r<50?"#F59E0B":"rgb(214,132,245)";return v("div",{className:$("flex items-center gap-x-1 px-2 w-full","h-6","rounded-md","font-mono leading-none","bg-[#141414]","ring-1 ring-white/[0.08]"),children:[v("div",{style:{color:t(e)},className:"text-sm font-semibold tracking-wide transition-colors ease-in-out w-full flex justify-center items-center",children:e}),v("span",{className:"text-white/30 text-[11px] font-medium tracking-wide ml-auto min-w-fit",children:"FPS"})]})},m3=()=>{const[e,t]=Ee(null);return Te(()=>{const r=setInterval(()=>{t(S1())},200);return()=>clearInterval(r)},[]),v("div",{className:$("flex items-center justify-end gap-x-2 px-1 ml-1 w-[72px]","whitespace-nowrap text-sm text-white"),children:e===null?v(De,{children:"️"}):v(p3,{fps:e})})},qn=()=>lr?(window.reactScanIdCounter===void 0&&(window.reactScanIdCounter=0),`${++window.reactScanIdCounter}`):"0",Xn=e=>e(),St=class M1 extends Array{constructor(t=25){super(),this.capacity=t}push(...t){const r=super.push(...t);for(;this.length>this.capacity;)this.shift();return r}static fromArray(t,r){const i=new M1(r);return i.push(...t),i}},g3=class{constructor(e){this.subscribers=new Set,this.currentValue=e}subscribe(e){return this.subscribers.add(e),e(this.currentValue),()=>{this.subscribers.delete(e)}}setState(e){this.currentValue=e,this.subscribers.forEach(t=>t(e))}getCurrentState(){return this.currentValue}},N1=150,fw=new g3(new St(N1)),ir=50,v3=class{constructor(){this.channels={}}publish(e,t,r=!0){const i=this.channels[t];if(!i){if(!r)return;this.channels[t]={callbacks:new St(ir),state:new St(ir)},this.channels[t].state.push(e);return}i.state.push(e),i.callbacks.forEach(s=>s(e))}getAvailableChannels(){return St.fromArray(Object.keys(this.channels),ir)}subscribe(e,t,r=!1){const i=()=>(r||this.channels[e].state.forEach(l=>{t(l)}),()=>{const l=this.channels[e].callbacks.filter(u=>u!==t);this.channels[e].callbacks=St.fromArray(l,ir)}),s=this.channels[e];return s?(s.callbacks.push(t),i()):(this.channels[e]={callbacks:new St(ir),state:new St(ir)},this.channels[e].callbacks.push(t),i())}updateChannelState(e,t,r=!0){const i=this.channels[e];if(!i){if(!r)return;const s=new St(ir),l={callbacks:new St(ir),state:s};this.channels[e]=l,l.state=t(s);return}i.state=t(i.state)}getChannelState(e){return this.channels[e].state??new St(ir)}},Au=new v3,O1={skipProviders:!0,skipHocs:!0,skipContainers:!0,skipMinified:!0,skipUtilities:!0,skipBoundaries:!0},Ns={providers:[/Provider$/,/^Provider$/,/^Context$/],hocs:[/^with[A-Z]/,/^forward(?:Ref)?$/i,/^Forward(?:Ref)?\(/],containers:[/^(?:App)?Container$/,/^Root$/,/^ReactDev/],utilities:[/^Fragment$/,/^Suspense$/,/^ErrorBoundary$/,/^Portal$/,/^Consumer$/,/^Layout$/,/^Router/,/^Hydration/],boundaries:[/^Boundary$/,/Boundary$/,/^Provider$/,/Provider$/]},y3=(e,t=O1)=>{const r=[];return t.skipProviders&&r.push(...Ns.providers),t.skipHocs&&r.push(...Ns.hocs),t.skipContainers&&r.push(...Ns.containers),t.skipUtilities&&r.push(...Ns.utilities),t.skipBoundaries&&r.push(...Ns.boundaries),!r.some(i=>i.test(e))},hw=[/^[a-z]$/,/^[a-z][0-9]$/,/^_+$/,/^[A-Za-z][_$]$/,/^[a-z]{1,2}$/],b3=e=>{var l;for(let u=0;u<hw.length;u++)if(hw[u].test(e))return!0;const t=!/[aeiou]/i.test(e),r=(((l=e.match(/\d/g))==null?void 0:l.length)??0)>e.length/2,i=/^[a-z]+$/.test(e),s=/[$_]{2,}/.test(e);return Number(t)+Number(r)+Number(i)+Number(s)>=2},w3=(e,t=O1)=>{if(!e)return[];if(!Ot(e.type))return[];const i=new Array;let s=e;for(;s.return;){const u=x3(s.type);u&&!b3(u)&&y3(u,t)&&u.toLowerCase()!==u&&i.push(u),s=s.return}const l=new Array(i.length);for(let u=0;u<i.length;u++)l[u]=i[i.length-u-1];return l},x3=e=>{const t=Ot(e);return t?t.replace(/^(?:Memo|Forward(?:Ref)?|With.*?)\((?<inner>.*?)\)$/,"$<inner>"):""},_3=(e,t=()=>!0)=>{let r=e;for(;r;){const i=Ot(r.type);if(i&&t(i))return i;r=r.return}return null},Bc,$p="never-hidden",S3=()=>{Bc==null||Bc();const e=()=>{document.hidden&&($p=Date.now())};document.addEventListener("visibilitychange",e),Bc=()=>{document.removeEventListener("visibilitychange",e)}},T3=e=>["pointerup","click"].includes(e)?"pointer":(e.includes("key"),["keydown","keyup"].includes(e)?"keyboard":null),Dh=null,k3=e=>{S3();const t=new Map,r=new Map,i=l=>{if(!l.interactionId)return;if(l.interactionId&&l.target&&!r.has(l.interactionId)&&r.set(l.interactionId,l.target),l.target){let d=l.target;for(;d;){if(d.id==="react-scan-toolbar-root"||d.id==="react-scan-root")return;d=d.parentElement}}const u=t.get(l.interactionId);if(u)l.duration>u.latency?(u.entries=[l],u.latency=l.duration):l.duration===u.latency&&l.startTime===u.entries[0].startTime&&u.entries.push(l);else{const d=T3(l.name);if(!d)return;const h={id:l.interactionId,latency:l.duration,entries:[l],target:l.target,type:d,startTime:l.startTime,endTime:Date.now(),processingStart:l.processingStart,processingEnd:l.processingEnd,duration:l.duration,inputDelay:l.processingStart-l.startTime,processingDuration:l.processingEnd-l.processingStart,presentationDelay:l.duration-(l.processingEnd-l.startTime),timestamp:Date.now(),timeSinceTabInactive:$p==="never-hidden"?"never-hidden":Date.now()-$p,visibilityState:document.visibilityState,timeOrigin:performance.timeOrigin,referrer:document.referrer};t.set(h.id,h),Dh||(Dh=requestAnimationFrame(()=>{requestAnimationFrame(()=>{e(t.get(h.id)),Dh=null})}))}},s=new PerformanceObserver(l=>{const u=l.getEntries();for(let d=0,h=u.length;d<h;d++){const p=u[d];i(p)}});try{s.observe({type:"event",buffered:!0,durationThreshold:16}),s.observe({type:"first-input",buffered:!0})}catch{}return()=>s.disconnect()},E3=()=>k3(e=>{Au.publish({kind:"entry-received",entry:e},"recording")}),lu=25,Mr=new St(lu),C3=(e,t)=>{let r=null;for(const i of t){if(i.type!==e.type)continue;if(r===null){r=i;continue}const s=(l,u)=>Math.abs(l.startDateTime)-(u.startTime+u.timeOrigin);s(i,e)<s(r,e)&&(r=i)}return r},M3=e=>Au.subscribe("recording",r=>{const i=r.kind==="auto-complete-race"?Mr.find(l=>l.interactionUUID===r.interactionUUID):C3(r.entry,Mr);if(!i)return;const s=i.completeInteraction(r);e(s)}),N3=({onMicroTask:e,onRAF:t,onTimeout:r,abort:i})=>{queueMicrotask(()=>{(i==null?void 0:i())!==!0&&e()&&requestAnimationFrame(()=>{(i==null?void 0:i())!==!0&&t()&&setTimeout(()=>{(i==null?void 0:i())!==!0&&r()},0)})})},O3=e=>{const t=y1(e);if(!t)return;let r=t?Ot(t==null?void 0:t.type):"N/A";return r||(r=_3(t,s=>s.length>2)??"N/A"),r?{componentPath:w3(t),childrenTree:{},componentName:r,elementFiber:t}:void 0},pw=(e,t)=>{let r=null;const i=h=>{switch(e){case"pointer":return h.phase==="start"?"pointerup":h.target instanceof HTMLInputElement||h.target instanceof HTMLSelectElement?"change":"click";case"keyboard":return h.phase==="start"?"keydown":"change"}},s={current:{kind:"uninitialized-stage",interactionUUID:qn(),stageStart:Date.now(),interactionType:e}},l=h=>{var T,k;if(h.composedPath().some(_=>_ instanceof Element&&_.id==="react-scan-toolbar-root")||(Date.now()-s.current.stageStart>2e3&&(s.current={kind:"uninitialized-stage",interactionUUID:qn(),stageStart:Date.now(),interactionType:e}),s.current.kind!=="uninitialized-stage"))return;const y=performance.now();(T=t==null?void 0:t.onStart)==null||T.call(t,s.current.interactionUUID);const g=O3(h.target);if(!g){(k=t==null?void 0:t.onError)==null||k.call(t,s.current.interactionUUID);return}const b={},w=A1(b);s.current={...s.current,interactionType:e,blockingTimeStart:Date.now(),childrenTree:g.childrenTree,componentName:g.componentName,componentPath:g.componentPath,fiberRenders:b,kind:"interaction-start",interactionStartDetail:y,stopListeningForRenders:w};const S=i({phase:"end",target:h.target});document.addEventListener(S,u,{once:!0}),requestAnimationFrame(()=>{document.removeEventListener(S,u)})};document.addEventListener(i({phase:"start"}),l,{capture:!0});const u=(h,p,y)=>{var g;if(s.current.kind!=="interaction-start"&&p===r){if(e==="pointer"&&h.target instanceof HTMLSelectElement){s.current={kind:"uninitialized-stage",interactionUUID:qn(),stageStart:Date.now(),interactionType:e};return}(g=t==null?void 0:t.onError)==null||g.call(t,s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:qn(),stageStart:Date.now(),interactionType:e};return}r=p,N3({abort:y,onMicroTask:()=>s.current.kind==="uninitialized-stage"?!1:(s.current={...s.current,kind:"js-end-stage",jsEndDetail:performance.now()},!0),onRAF:()=>{var b;return s.current.kind!=="js-end-stage"&&s.current.kind!=="raf-stage"?((b=t==null?void 0:t.onError)==null||b.call(t,s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:qn(),stageStart:Date.now(),interactionType:e},!1):(s.current={...s.current,kind:"raf-stage",rafStart:performance.now()},!0)},onTimeout:()=>{var _;if(s.current.kind!=="raf-stage"){(_=t==null?void 0:t.onError)==null||_.call(t,s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:qn(),stageStart:Date.now(),interactionType:e};return}const b=Date.now(),w=Object.freeze({...s.current,kind:"timeout-stage",blockingTimeEnd:b,commitEnd:performance.now()});s.current={kind:"uninitialized-stage",interactionUUID:qn(),stageStart:b,interactionType:e};let S=!1;const T=M=>{var X;S=!0;const O=M.kind==="auto-complete-race"?M.detailedTiming.commitEnd-M.detailedTiming.interactionStartDetail:M.entry.latency,L={detailedTiming:w,latency:O,completedAt:Date.now(),flushNeeded:!0};(X=t==null?void 0:t.onComplete)==null||X.call(t,w.interactionUUID,L,M);const j=Mr.filter(G=>G.interactionUUID!==w.interactionUUID);return Mr=St.fromArray(j,lu),L},k={completeInteraction:T,endDateTime:Date.now(),startDateTime:w.blockingTimeStart,type:e,interactionUUID:w.interactionUUID};if(Mr.push(k),A3())setTimeout(()=>{if(S)return;T({kind:"auto-complete-race",detailedTiming:w,interactionUUID:w.interactionUUID});const M=Mr.filter(O=>O.interactionUUID!==w.interactionUUID);Mr=St.fromArray(M,lu)},1e3);else{const M=Mr.filter(O=>O.interactionUUID!==w.interactionUUID);Mr=St.fromArray(M,lu),T({kind:"auto-complete-race",detailedTiming:w,interactionUUID:w.interactionUUID})}}})},d=h=>{const p=qn();u(h,p,()=>p!==r)};return e==="keyboard"&&document.addEventListener("keypress",d),()=>{document.removeEventListener(i({phase:"start"}),l,{capture:!0}),document.removeEventListener("keypress",d)}},mw=e=>{var t;return(t=xm(e,r=>{if(Qs(r))return!0}))==null?void 0:t.stateNode},A3=()=>"PerformanceEventTiming"in globalThis,A1=e=>{const t=r=>{var y,g,b,w,S;const i=Ot(r.type);if(!i)return;const s=e[i];if(!s){const T=new Set,k=r.return&&co(r.return),_=k&&Ot(k[0]);_&&T.add(_);const{selfTime:M,totalTime:O}=Ga(r),L=ew(r),j={current:[],changes:new Set,changesCounts:new Map},X={fiberProps:L.fiberProps||j,fiberState:L.fiberState||j,fiberContext:L.fiberContext||j};e[i]={renderCount:1,hasMemoCache:Ws(r),wasFiberRenderMount:gw(r),parents:T,selfTime:M,totalTime:O,nodeInfo:[{element:mw(r),name:Ot(r.type)??"Unknown",selfTime:Ga(r).selfTime}],changes:X};return}if((g=(y=co(r))==null?void 0:y[0])==null?void 0:g.type){const T=r.return&&co(r.return),k=T&&Ot(T[0]);k&&s.parents.add(k)}const{selfTime:u,totalTime:d}=Ga(r),h=ew(r);if(!h)return;const p={current:[],changes:new Set,changesCounts:new Map};s.wasFiberRenderMount=s.wasFiberRenderMount||gw(r),s.hasMemoCache=s.hasMemoCache||Ws(r),s.changes={fiberProps:jh(((b=s.changes)==null?void 0:b.fiberProps)||p,h.fiberProps||p),fiberState:jh(((w=s.changes)==null?void 0:w.fiberState)||p,h.fiberState||p),fiberContext:jh(((S=s.changes)==null?void 0:S.fiberContext)||p,h.fiberContext||p)},s.renderCount+=1,s.selfTime+=u,s.totalTime+=d,s.nodeInfo.push({element:mw(r),name:Ot(r.type)??"Unknown",selfTime:Ga(r).selfTime})};return ae.interactionListeningForRenders=t,()=>{ae.interactionListeningForRenders===t&&(ae.interactionListeningForRenders=null)}},jh=(e,t)=>{const r={current:[...e.current],changes:new Set,changesCounts:new Map};for(const i of t.current)r.current.some(s=>s.name===i.name)||r.current.push(i);for(const i of t.changes)if(typeof i=="string"||typeof i=="number"){r.changes.add(i);const s=e.changesCounts.get(i)||0,l=t.changesCounts.get(i)||0;r.changesCounts.set(i,s+l)}return r},gw=e=>{if(!e.alternate)return!0;const t=e.alternate,r=t&&t.memoizedState!=null&&t.memoizedState.element!=null&&t.memoizedState.isDehydrated!==!0,i=e.memoizedState!=null&&e.memoizedState.element!=null&&e.memoizedState.isDehydrated!==!0;return!r&&i},R3=e=>{let t;const r=new Set,i=(p,y)=>{const g=typeof p=="function"?p(t):p;if(!Object.is(g,t)){const b=t;t=y??(typeof g!="object"||g===null)?g:Object.assign({},t,g),r.forEach(w=>w(t,b))}},s=()=>t,d={setState:i,getState:s,getInitialState:()=>h,subscribe:(p,y)=>{let g,b;y?(g=p,b=y):b=p;let w=g?g(t):void 0;const S=(T,k)=>{if(g){const _=g(T),M=g(k);Object.is(w,_)||(w=_,b(_,M))}else b(T,k)};return r.add(S),()=>r.delete(S)}},h=t=e(i,s,d);return d},R1=e=>R3,Yc=null;R1()(e=>({state:{events:[]},actions:{addEvent:t=>{e(r=>({state:{events:[...r.state.events,t]}}))},clear:()=>{e({state:{events:[]}})}}}));var Uh=200,nl=R1()((e,t)=>{const r=new Set;return{state:{events:new St(Uh)},actions:{addEvent:i=>{r.forEach(h=>h(i));const s=[...t().state.events,i],l=(h,p)=>{const y=s.find(g=>{if(g.kind!=="long-render"&&g.id!==h.id&&(h.data.startAt<=g.data.startAt&&h.data.endAt<=g.data.endAt&&h.data.endAt>=g.data.startAt||g.data.startAt<=h.data.startAt&&g.data.endAt>=h.data.startAt||h.data.startAt<=g.data.startAt&&h.data.endAt>=g.data.endAt))return!0});y&&p(y)},u=new Set;s.forEach(h=>{h.kind!=="interaction"&&l(h,()=>{u.add(h.id)})});const d=s.filter(h=>!u.has(h.id));e(()=>({state:{events:St.fromArray(d,Uh)}}))},addListener:i=>(r.add(i),()=>{r.delete(i)}),clear:()=>{e({state:{events:new St(Uh)}})}}}}),z3=()=>zk(nl.subscribe,nl.getState),cu=null,uu=null,Lh=null,Hp,D3=()=>{const e=t=>{Hp=t.composedPath().map(r=>r.id).filter(Boolean).includes("react-scan-toolbar")};return document.addEventListener("mouseover",e),Lh=e,()=>{Lh&&document.removeEventListener("mouseover",Lh)}},j3=()=>{const e=()=>{cu=performance.now(),uu=performance.timeOrigin};return document.addEventListener("visibilitychange",e),()=>{document.removeEventListener("visibilitychange",e)}},z1=150,$h=[];function U3(){let e,t;function r(){let s=null;Yc=null,Yc={},s=A1(Yc);const l=performance.timeOrigin,u=performance.now();return e=requestAnimationFrame(()=>{t=setTimeout(()=>{const d=performance.now(),h=d-u,p=performance.timeOrigin;$h.push(d+p);const y=$h.filter(S=>d+p-S<=1e3),g=y.length;$h=y;const b=cu!==null&&uu!==null?d+p-(uu+cu)<100:null,w=Hp!==null&&Hp;if(h>z1&&!b&&document.visibilityState==="visible"&&!w){const S=p+d,T=u+l;nl.getState().actions.addEvent({kind:"long-render",id:qn(),data:{endAt:S,startAt:T,meta:{fiberRenders:Yc,latency:h,fps:g}}})}cu=null,uu=null,s==null||s(),r()},0)}),s}const i=r();return()=>{i(),cancelAnimationFrame(e),clearTimeout(t)}}var L3=()=>{const e=E3(),t=D3(),r=j3(),i=U3(),s=async(h,p,y)=>{nl.getState().actions.addEvent({kind:"interaction",id:qn(),data:{startAt:p.detailedTiming.blockingTimeStart,endAt:performance.now()+performance.timeOrigin,meta:{...p,kind:y.kind}}});const g=Au.getChannelState("recording");p.detailedTiming.stopListeningForRenders(),g.length&&Au.updateChannelState("recording",()=>new St(ir))},l=pw("pointer",{onComplete:s}),u=pw("keyboard",{onComplete:s}),d=M3(h=>{fw.setState(St.fromArray(fw.getCurrentState().concat(h),N1))});return()=>{t(),r(),i(),e(),l(),d(),u()}},rl=e=>{const t=e.filter(r=>r.length>2);return t.length===0?e.at(-1)??"Unknown":t.at(-1)},At=e=>{switch(e.kind){case"interaction":{const{renderTime:t,otherJSTime:r,framePreparation:i,frameConstruction:s,frameDraw:l}=e;return t+r+i+s+(l??0)}case"dropped-frames":return e.otherTime+e.renderTime}},$3=e=>e.wasFiberRenderMount||e.hasMemoCache?!1:e.changes.context.length===0&&e.changes.props.length===0&&e.changes.state.length===0,ml=e=>{const t=At(e.timing);switch(e.kind){case"interaction":return t<200?"low":t<500?"needs-improvement":"high";case"dropped-frames":return t<50?"low":t<z1?"needs-improvement":"high"}},bn=()=>Cm(D1),D1=Fx(null),j1=({size:e=24,className:t})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:$(["lucide lucide-chevron-right",t]),children:v("path",{d:"m9 18 6-6-6-6"})}),H3=({className:e="",size:t=24,events:r=[]})=>{const i=r.includes(!0),s=r.filter(d=>d).length,l=s>99?">99":s,u=i?Math.max(t*.6,14):Math.max(t*.4,6);return v("div",{className:"relative",children:[v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:`lucide lucide-bell ${e}`,children:[v("path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}),v("path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"})]}),r.length>0&&s>0&&Le.options.value.showNotificationCount&&v("div",{className:$(["absolute",i?"-top-2.5 -right-2.5":"-top-1 -right-1","rounded-full","flex items-center justify-center","text-[8px] font-medium text-white","aspect-square",i?"bg-red-500/90":"bg-purple-500/90"]),style:{width:`${u}px`,height:`${u}px`,padding:i?"0.5px":"0"},children:i&&l})]})},Ru=({className:e="",size:t=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[v("path",{d:"M18 6 6 18"}),v("path",{d:"m6 6 12 12"})]}),I3=({className:e="",size:t=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[v("path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}),v("path",{d:"M16 9a5 5 0 0 1 0 6"}),v("path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"})]}),q3=({className:e="",size:t=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[v("path",{d:"M16 9a5 5 0 0 1 .95 2.293"}),v("path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96"}),v("path",{d:"m2 2 20 20"}),v("path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"}),v("path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686"})]}),B3=({size:e=24,className:t})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:$(["lucide lucide-arrow-left",t]),children:[v("path",{d:"m12 19-7-7 7-7"}),v("path",{d:"M19 12H5"})]}),Y3=({className:e="",size:t=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[v("path",{d:"M14 4.1 12 6"}),v("path",{d:"m5.1 8-2.9-.8"}),v("path",{d:"m6 12-1.9 2"}),v("path",{d:"M7.2 2.2 8 5.1"}),v("path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"})]}),P3=({className:e="",size:t=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[v("path",{d:"M10 8h.01"}),v("path",{d:"M12 12h.01"}),v("path",{d:"M14 8h.01"}),v("path",{d:"M16 12h.01"}),v("path",{d:"M18 8h.01"}),v("path",{d:"M6 8h.01"}),v("path",{d:"M7 16h10"}),v("path",{d:"M8 12h.01"}),v("rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"})]}),X3=({className:e="",size:t=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,style:{transform:"rotate(180deg)"},children:[v("circle",{cx:"12",cy:"12",r:"10"}),v("path",{d:"m4.9 4.9 14.2 14.2"})]}),F3=({className:e="",size:t=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[v("polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}),v("polyline",{points:"16 17 22 17 22 11"})]}),U1=({children:e,triggerContent:t,wrapperProps:r})=>{const[i,s]=Ee("closed"),[l,u]=Ee(null),[d,h]=Ee({width:window.innerWidth,height:window.innerHeight}),p=pe(null),y=pe(null),g=Cm(Xm),b=pe(!1);Te(()=>{const _=()=>{h({width:window.innerWidth,height:window.innerHeight}),w()};return window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)},[]);const w=()=>{if(p.current&&g){const _=p.current.getBoundingClientRect(),M=g.getBoundingClientRect(),O=_.left+_.width/2,L=_.top,j=new DOMRect(O-M.left,L-M.top,_.width,_.height);u(j)}};Te(()=>{w()},[p.current]),Te(()=>{if(i==="opening"){const _=setTimeout(()=>s("open"),120);return()=>clearTimeout(_)}else if(i==="closing"){const _=setTimeout(()=>s("closed"),120);return()=>clearTimeout(_)}},[i]),Te(()=>{const _=setInterval(()=>{!b.current&&i!=="closed"&&s("closing")},1e3);return()=>clearInterval(_)},[i]);const S=()=>{b.current=!0,w(),s("opening")},T=()=>{b.current=!1,w(),s("closing")},k=()=>{var ne;if(!l||!g)return{top:0,left:0};const _=g.getBoundingClientRect(),M=175,O=((ne=y.current)==null?void 0:ne.offsetHeight)||40,L=5,j=l.x+_.left,X=l.y+_.top;let G=j,ee=X-4;return G-M/2<L?G=L+M/2:G+M/2>d.width-L&&(G=d.width-L-M/2),ee-O<L&&(ee=X+l.height+4),{top:ee-_.top,left:G-_.left}};return v(De,{children:[g&&l&&i!=="closed"&&$k(v("div",{ref:y,className:$(["absolute z-100 bg-white text-black rounded-lg px-3 py-2 shadow-lg","transform transition-all duration-120 ease-[cubic-bezier(0.23,1,0.32,1)]",'after:content-[""] after:absolute after:top-[100%]',"after:left-1/2 after:-translate-x-1/2","after:w-[10px] after:h-[6px]","after:border-l-[5px] after:border-l-transparent","after:border-r-[5px] after:border-r-transparent","after:border-t-[6px] after:border-t-white","pointer-events-none",i==="opening"||i==="closing"?"opacity-0 translate-y-1":"opacity-100 translate-y-0"]),style:{top:k().top+"px",left:k().left+"px",transform:"translate(-50%, -100%)",minWidth:"175px"},children:e}),g),v("div",{ref:p,onMouseEnter:S,onMouseLeave:T,...r,children:t})]})},G3=({selectedEvent:e})=>{const{notificationState:t,setNotificationState:r,setRoute:i}=bn();return v("div",{className:$(["flex w-full justify-between items-center px-3 py-2 text-xs"]),children:[v("div",{className:$(["bg-[#18181B] flex items-center gap-x-1 p-1 rounded-sm"]),children:[v("button",{onClick:()=>{i({route:"render-visualization",routeMessage:null})},className:$(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",t.route==="render-visualization"||t.route==="render-explanation"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Ranked"}),v("button",{onClick:()=>{i({route:"other-visualization",routeMessage:null})},className:$(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",t.route==="other-visualization"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Overview"}),v("button",{onClick:()=>{i({route:"optimize",routeMessage:null})},className:$(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",t.route==="optimize"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:v("span",{children:"Prompts"})})]}),v(U1,{triggerContent:v("button",{onClick:()=>{r(s=>{s.audioNotificationsOptions.enabled&&s.audioNotificationsOptions.audioContext.state!=="closed"&&s.audioNotificationsOptions.audioContext.close();const l=s.audioNotificationsOptions.enabled;localStorage.setItem("react-scan-notifications-audio",String(!l));const u=new AudioContext;return s.audioNotificationsOptions.enabled||Rm(u),l&&u.close(),{...s,audioNotificationsOptions:l?{audioContext:null,enabled:!1}:{audioContext:u,enabled:!0}}})},className:"ml-auto",children:v("div",{className:$(["flex gap-x-2 justify-center items-center text-[#6E6E77]"]),children:[v("span",{children:"Alerts"}),t.audioNotificationsOptions.enabled?v(I3,{size:16,className:"text-[#6E6E77]"}):v(q3,{size:16,className:"text-[#6E6E77]"})]})}),children:v(De,{children:"Play a chime when a slowdown is recorded"})})]})},Ki=e=>{let t="";return e.toSorted((i,s)=>s.totalTime-i.totalTime).slice(0,30).filter(i=>i.totalTime>5).forEach(i=>{let s="";s+="Component Name:",s+=i.name,s+=`
`,s+=`Rendered: ${i.count} times
`,s+=`Sum of self times for ${i.name} is ${i.totalTime.toFixed(0)}ms
`,i.changes.props.length>0&&(s+=`Changed props for all ${i.name} instances ("name:count" pairs)
`,i.changes.props.forEach(l=>{s+=`${l.name}:${l.count}x
`})),i.changes.state.length>0&&(s+=`Changed state for all ${i.name} instances ("hook index:count" pairs)
`,i.changes.state.forEach(l=>{s+=`${l.index}:${l.count}x
`})),i.changes.context.length>0&&(s+=`Changed context for all ${i.name} instances ("context display name (if exists):count" pairs)
`,i.changes.context.forEach(l=>{s+=`${l.name}:${l.count}x
`})),t+=s,t+=`
`}),t},V3=({renderTime:e,eHandlerTimeExcludingRenders:t,toRafTime:r,commitTime:i,framePresentTime:s,formattedReactData:l})=>`I will provide you with a set of high level, and low level performance data about an interaction in a React App:
### High level
- react component render time: ${e.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${t.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${r.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${i.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${s===null?"":`- how long it took from dom commit for the frame to be presented: ${s.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${l}`,Q3=({interactionType:e,name:t,componentPath:r,time:i,renderTime:s,eHandlerTimeExcludingRenders:l,toRafTime:u,commitTime:d,framePresentTime:h,formattedReactData:p})=>`You will attempt to implement a performance improvement to a user interaction in a React app. You will be provided with data about the interaction, and the slow down.

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

The click took ${i.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${s.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${l.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${u.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${d.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${h===null?"":`- how long it took from dom commit for the frame to be presented: ${h.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${p}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

`,W3=({renderTime:e,otherTime:t,formattedReactData:r})=>`You will attempt to implement a performance improvement to a large slowdown in a react app

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
`,Z3=({renderTime:e,otherTime:t,formattedReactData:r})=>`Your goal will be to help me find the source of a performance problem in a React App. I collected a large dataset about this specific performance problem.

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
`,K3=({renderTime:e,otherTime:t,formattedReactData:r})=>`I will provide you with a set of high level, and low level performance data about a large frame drop in a React App:
### High level
- react component render time: ${e.toFixed(0)}ms
- how long it took to run everything else (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${t}ms

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${r}`,J3=({interactionType:e,name:t,time:r,renderTime:i,eHandlerTimeExcludingRenders:s,toRafTime:l,commitTime:u,framePresentTime:d,formattedReactData:h})=>`Your goal will be to help me find the source of a performance problem. I collected a large dataset about this specific performance problem.

There was a ${e} on a component named ${t}. This means, roughly, the component that handled the ${e} event was named ${t}.

We have a set of high level, and low level data about the performance issue.

The click took ${r.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${i.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${s.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${l.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${u.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${d===null?"":`- how long it took from dom commit for the frame to be presented: ${d.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${h}


You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`,Ip=(e,t)=>Xn(()=>{switch(e){case"data":switch(t.kind){case"dropped-frames":return K3({formattedReactData:Ki(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return V3({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:Ki(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,renderTime:t.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),toRafTime:t.timing.framePreparation})}case"explanation":switch(t.kind){case"dropped-frames":return Z3({formattedReactData:Ki(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return J3({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:Ki(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:rl(t.componentPath),renderTime:t.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),time:At(t.timing),toRafTime:t.timing.framePreparation})}case"fix":switch(t.kind){case"dropped-frames":return W3({formattedReactData:Ki(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return Q3({commitTime:t.timing.frameConstruction,componentPath:t.componentPath.join(">"),eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:Ki(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:rl(t.componentPath),renderTime:t.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),time:At(t.timing),toRafTime:t.timing.framePreparation})}}}),eC=({selectedEvent:e})=>{const[t,r]=Ee("fix"),[i,s]=Ee(!1);return v("div",{className:$(["w-full h-full"]),children:[v("div",{className:$(["border border-[#27272A] rounded-sm h-4/5 text-xs overflow-hidden"]),children:[v("div",{className:$(["bg-[#18181B] p-1 rounded-t-sm"]),children:v("div",{className:$(["flex items-center gap-x-1"]),children:[v("button",{onClick:()=>r("fix"),className:$(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",t==="fix"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Fix"}),v("button",{onClick:()=>r("explanation"),className:$(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",t==="explanation"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Explanation"}),v("button",{onClick:()=>r("data"),className:$(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",t==="data"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Data"})]})}),v("div",{className:$(["overflow-y-auto h-full"]),children:v("pre",{className:$(["p-2 h-full","whitespace-pre-wrap break-words","text-gray-300 font-mono "]),children:Ip(t,e)})})]}),v("button",{onClick:async()=>{const l=Ip(t,e);await navigator.clipboard.writeText(l),s(!0),setTimeout(()=>s(!1),1e3)},className:$(["mt-4 px-4 py-2 bg-[#18181B] text-[#6E6E77] rounded-sm","hover:text-white transition-colors duration-200","flex items-center justify-center gap-x-2 text-xs"]),children:[v("span",{children:i?"Copied!":"Copy Prompt"}),v("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:$(["transition-transform duration-200",i&&"scale-110"]),children:i?v("path",{d:"M20 6L9 17l-5-5"}):v(De,{children:[v("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),v("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})]})},tC=(e,t)=>{switch(e.kind){case"dropped-frames":return[...t?[{name:"Total Processing Time",time:At(e.timing),color:"bg-red-500",kind:"total-processing-time"}]:[{name:"Renders",time:e.timing.renderTime,color:"bg-purple-500",kind:"render"},{name:"JavaScript, DOM updates, Draw Frame",time:e.timing.otherTime,color:"bg-[#4b4b4b]",kind:"other-frame-drop"}]];case"interaction":return[...t?[]:[{name:"Renders",time:e.timing.renderTime,color:"bg-purple-500",kind:"render"}],{name:t?"React Renders, Hooks, Other JavaScript":"JavaScript/React Hooks ",time:e.timing.otherJSTime,color:"bg-[#EFD81A]",kind:"other-javascript"},{name:"Update DOM and Draw New Frame",time:At(e.timing)-e.timing.renderTime-e.timing.otherJSTime,color:"bg-[#1D3A66]",kind:"other-not-javascript"}]}},nC=({selectedEvent:e})=>{var h;const[t]=Ee(Gu()??!1),{notificationState:r}=bn(),[i,s]=Ee((h=r.routeMessage)!=null&&h.name?[r.routeMessage.name]:[]),l=tC(e,t),u=Cm(Xm);Te(()=>{var p;if((p=r.routeMessage)!=null&&p.name){const y=u==null?void 0:u.querySelector("#overview-scroll-container"),g=u==null?void 0:u.querySelector(`#react-scan-overview-bar-${r.routeMessage.name}`);if(y&&g){const b=g.getBoundingClientRect().top,w=y.getBoundingClientRect().top,S=b-w;y.scrollTop=y.scrollTop+S}}},[r.route]),Te(()=>{r.route==="other-visualization"&&s(p=>{var y;return(y=r.routeMessage)!=null&&y.name?[r.routeMessage.name]:p})},[r.route]);const d=l.reduce((p,y)=>p+y.time,0);return v("div",{className:"rounded-sm border border-zinc-800 text-xs",children:[v("div",{className:"p-2 border-b border-zinc-800 bg-zinc-900/50",children:v("div",{className:"flex items-center justify-between",children:[v("h3",{className:"text-xs font-medium",children:"What was time spent on?"}),v("span",{className:"text-xs text-zinc-400",children:["Total: ",d.toFixed(0),"ms"]})]})}),v("div",{className:"divide-y divide-zinc-800",children:l.map(p=>{const y=i.includes(p.kind);return v("div",{id:`react-scan-overview-bar-${p.kind}`,children:[v("button",{onClick:()=>s(g=>g.includes(p.kind)?g.filter(b=>b!==p.kind):[...g,p.kind]),className:"w-full px-3 py-2 flex items-center gap-4 hover:bg-zinc-800/50 transition-colors",children:v("div",{className:"flex-1",children:[v("div",{className:"flex items-center justify-between mb-2",children:[v("div",{className:"flex items-center gap-0.5",children:[v("svg",{className:`h-4 w-4 text-zinc-400 transition-transform ${y?"rotate-90":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:v("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),v("span",{className:"font-medium flex items-center text-left",children:p.name})]}),v("span",{className:" text-zinc-400",children:[p.time.toFixed(0),"ms"]})]}),v("div",{className:"h-1 bg-zinc-800 rounded-full overflow-hidden",children:v("div",{className:`h-full ${p.color} transition-all`,style:{width:`${p.time/d*100}%`}})})]})}),y&&v("div",{className:"bg-zinc-900/30 border-t border-zinc-800 px-2.5 py-3",children:v("p",{className:" text-zinc-400 mb-4 text-xs",children:Xn(()=>{switch(e.kind){case"interaction":switch(p.kind){case"render":return v(Ji,{input:aC(e)});case"other-javascript":return v(Ji,{input:iC(e)});case"other-not-javascript":return v(Ji,{input:rC(e)})}case"dropped-frames":switch(p.kind){case"total-processing-time":return v(Ji,{input:{kind:"total-processing",data:{time:At(e.timing)}}});case"render":return v(De,{children:v(Ji,{input:{kind:"render",data:{topByTime:e.groupedFiberRenders.toSorted((g,b)=>b.totalTime-g.totalTime).slice(0,3).map(g=>({name:g.name,percentage:g.totalTime/At(e.timing)}))}}})});case"other-frame-drop":return v(Ji,{input:{kind:"other"}})}}})})})]},p.kind)})})]})},rC=e=>{const t=e.groupedFiberRenders.reduce((l,u)=>l+u.count,0),r=e.timing.renderTime,i=At(e.timing),s=r/i*100;return t>100?{kind:"high-render-count-update-dom-draw-frame",data:{count:t,percentageOfTotal:s,copyButton:v(vw,{})}}:{kind:"update-dom-draw-frame",data:{copyButton:v(vw,{})}}},vw=()=>{const[e,t]=Ee(!1),{notificationState:r}=bn();return v("button",{onClick:async()=>{r.selectedEvent&&(await navigator.clipboard.writeText(Ip("explanation",r.selectedEvent)),t(!0),setTimeout(()=>t(!1),1e3))},className:"bg-zinc-800 flex hover:bg-zinc-700 text-zinc-200 px-2 py-1 rounded gap-x-3",children:[v("span",{children:e?"Copied!":"Copy Prompt"}),v("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:$(["transition-transform duration-200",e&&"scale-110"]),children:e?v("path",{d:"M20 6L9 17l-5-5"}):v(De,{children:[v("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),v("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})},aC=e=>e.timing.renderTime/At(e.timing)>.3?{kind:"render",data:{topByTime:e.groupedFiberRenders.toSorted((t,r)=>r.totalTime-t.totalTime).slice(0,3).map(t=>({percentage:t.totalTime/At(e.timing),name:t.name}))}}:{kind:"other"},iC=e=>{const t=e.groupedFiberRenders.reduce((r,i)=>r+i.count,0);return e.timing.otherJSTime/At(e.timing)<.2?{kind:"js-explanation-base"}:e.groupedFiberRenders.find(r=>r.count>200)||e.groupedFiberRenders.reduce((r,i)=>r+i.count,0)>500?{kind:"high-render-count-high-js",data:{renderCount:t,topByCount:e.groupedFiberRenders.filter(r=>r.count>100).toSorted((r,i)=>i.count-r.count).slice(0,3)}}:e.timing.otherJSTime/At(e.timing)>.3?e.timing.renderTime>.2?{kind:"js-explanation-base"}:{kind:"low-render-count-high-js",data:{renderCount:t}}:{kind:"js-explanation-base"}},Ji=({input:e})=>{switch(e.kind){case"total-processing":return v("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:["This is the time it took to draw the entire frame that was presented to the user. To be at 60FPS, this number needs to be ","<=16ms"]}),v("p",{children:'To debug the issue, check the "Ranked" tab to see if there are significant component renders'}),v("p",{children:"On a production React build, React Scan can't access the time it took for component to render. To get that information, run React Scan on a development build"}),v("p",{children:["To understand precisely what caused the slowdown while in production, use the ",v("strong",{children:"Chrome profiler"})," and analyze the function call times."]}),v("p",{})]});case"render":return v("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:"This is the time it took React to run components, and internal logic to handle the output of your component."}),v("div",{className:$(["flex flex-col"]),children:[v("p",{children:"The slowest components for this time period were:"}),e.data.topByTime.map(t=>v("div",{children:[v("strong",{children:t.name}),":"," ",(t.percentage*100).toFixed(0),"% of total"]},t.name))]}),v("p",{children:'To view the render times of all your components, and what caused them to render, go to the "Ranked" tab'}),v("p",{children:'The "Ranked" tab shows the render times of every component.'}),v("p",{children:"The render times of the same components are grouped together into one bar."}),v("p",{children:"Clicking the component will show you what props, state, or context caused the component to re-render."})]});case"js-explanation-base":return v("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),v("p",{children:["The most common culprit for high JS time is expensive hooks, like expensive callbacks inside of ",v("code",{children:"useEffect"}),"'s or a large number of useEffect's called, but this can also be JavaScript event handlers (",v("code",{children:"'onclick'"}),", ",v("code",{children:"'onchange'"}),") that performed expensive computation."]}),v("p",{children:"If you have lots of components rendering that call hooks, like useEffect, it can add significant overhead even if the callbacks are not expensive. If this is the case, you can try optimizing the renders of those components to avoid the hook from having to run."}),v("p",{children:["You should profile your app using the"," ",v("strong",{children:"Chrome DevTools profiler"})," to learn exactly which functions took the longest to execute."]})]});case"high-render-count-high-js":return v("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),e.data.renderCount===0?v(De,{children:[v("p",{children:"There were no renders, which means nothing related to React caused this slowdown. The most likely cause of the slowdown is a slow JavaScript event handler, or code related to a Web API"}),v("p",{children:["You should try to reproduce the slowdown while profiling your website with the",v("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]}):v(De,{children:[" ",v("p",{children:["There were ",v("strong",{children:e.data.renderCount})," renders, which could have contributed to the high JavaScript/Hook time if they ran lots of hooks, like ",v("code",{children:"useEffects"}),"."]}),v("div",{className:$(["flex flex-col"]),children:[v("p",{children:"You should try optimizing the renders of:"}),e.data.topByCount.map(t=>v("div",{children:["- ",v("strong",{children:t.name})," (rendered ",t.count,"x)"]},t.name))]}),"and then checking if the problem still exists.",v("p",{children:["You can also try profiling your app using the"," ",v("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]})]});case"low-render-count-high-js":return v("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),v("p",{children:["There were only ",v("strong",{children:e.data.renderCount})," renders detected, which means either you had very expensive hooks like"," ",v("code",{children:"useEffect"}),"/",v("code",{children:"useLayoutEffect"}),", or there is other JavaScript running during this interaction that took up the majority of the time."]}),v("p",{children:["To understand precisely what caused the slowdown, use the"," ",v("strong",{children:"Chrome profiler"})," and analyze the function call times."]})]});case"high-render-count-update-dom-draw-frame":return v("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),v("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),v("p",{children:["During this interaction, there were"," ",v("strong",{children:e.data.count})," renders, which was"," ",v("strong",{children:[e.data.percentageOfTotal.toFixed(0),"%"]})," of the time spent processing"]}),v("p",{children:"The work performed as a result of the renders may have forced the browser to spend a lot of time to draw the next frame."}),v("p",{children:'You can try optimizing the renders to see if the performance problem still exists using the "Ranked" tab.'}),v("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),v("p",{children:e.data.copyButton}),v("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),v("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"update-dom-draw-frame":return v("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),v("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),v("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),v("p",{children:e.data.copyButton}),v("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),v("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"other":return v("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:["This is the time it took to run everything other than React renders. This can be hooks like ",v("code",{children:"useEffect"}),", other JavaScript not part of React, or work the browser has to do to update the DOM and draw the next frame."]}),v("p",{children:["To get a better picture of what happened, profile your app using the"," ",v("strong",{children:"Chrome profiler"})," when the performance problem arises."]})]})}},We=null,ft=null,Ve=wt({kind:"idle",current:null}),Hh=null,fo=()=>{Hh&&cancelAnimationFrame(Hh),Hh=requestAnimationFrame(()=>{if(!We||!ft)return;ft.clearRect(0,0,We.width,We.height);const e="hsl(271, 76%, 53%)",t=Ve.value,{alpha:r,current:i}=Xn(()=>{var s,l;switch(t.kind){case"transition":{const u=(s=t.current)!=null&&s.alpha&&t.current.alpha>0?t.current:t.transitionTo;return{alpha:u?u.alpha:0,current:u}}case"move-out":return{alpha:((l=t.current)==null?void 0:l.alpha)??0,current:t.current};case"idle":return{alpha:1,current:t.current}}});switch(i==null||i.rects.forEach(s=>{ft&&(ft.shadowColor=e,ft.shadowBlur=6,ft.strokeStyle=e,ft.lineWidth=2,ft.globalAlpha=r,ft.beginPath(),ft.rect(s.left,s.top,s.width,s.height),ft.stroke(),ft.shadowBlur=0,ft.beginPath(),ft.rect(s.left,s.top,s.width,s.height),ft.stroke())}),t.kind){case"move-out":{if(t.current.alpha===0){Ve.value={kind:"idle",current:null};return}t.current.alpha<=.01&&(t.current.alpha=0),t.current.alpha=Math.max(0,t.current.alpha-.03),fo();return}case"transition":{if(t.current&&t.current.alpha>0){t.current.alpha=Math.max(0,t.current.alpha-.03),fo();return}if(t.transitionTo.alpha===1){Ve.value={kind:"idle",current:t.transitionTo};return}t.transitionTo.alpha=Math.min(t.transitionTo.alpha+.03,1),fo()}case"idle":return}})},Ih=null,oC=e=>{if(We=document.createElement("canvas"),ft=We.getContext("2d",{alpha:!0}),!ft)return null;const t=window.devicePixelRatio||1,{innerWidth:r,innerHeight:i}=window;We.style.width=`${r}px`,We.style.height=`${i}px`,We.width=r*t,We.height=i*t,We.style.position="fixed",We.style.left="0",We.style.top="0",We.style.pointerEvents="none",We.style.zIndex="2147483600",ft.scale(t,t),e.appendChild(We),Ih&&window.removeEventListener("resize",Ih);const s=()=>{if(!We||!ft)return;const l=window.devicePixelRatio||1,{innerWidth:u,innerHeight:d}=window;We.style.width=`${u}px`,We.style.height=`${d}px`,We.width=u*l,We.height=d*l,ft.scale(l,l),fo()};return Ih=s,window.addEventListener("resize",s),Ve.subscribe(()=>{requestAnimationFrame(()=>{fo()})}),sC};function sC(){We!=null&&We.parentNode&&We.parentNode.removeChild(We),We=null,ft=null}var Us=()=>{var t;const e=Ve.value.current?Ve.value.current:Ve.value.kind==="transition"?Ve.value.transitionTo:null;if(e){if(Ve.value.kind==="transition"){Ve.value={kind:"move-out",current:((t=Ve.value.current)==null?void 0:t.alpha)===0?Ve.value.transitionTo:Ve.value.current??Ve.value.transitionTo};return}Ve.value={kind:"move-out",current:{alpha:0,...e}}}},lC=({selectedEvent:e})=>{const t=At(e.timing),r=t-e.timing.renderTime,[i]=Ee(Gu()),l=e.groupedFiberRenders.map(p=>({event:p,kind:"render",totalTime:i?p.count:p.totalTime})),u=Xn(()=>{switch(e.kind){case"dropped-frames":return e.timing.renderTime/t<.1;case"interaction":return(e.timing.otherJSTime+e.timing.renderTime)/t<.2}});e.kind==="interaction"&&!i&&l.push({kind:"other-javascript",totalTime:e.timing.otherJSTime}),u&&!i&&(e.kind==="interaction"?l.push({kind:"other-not-javascript",totalTime:At(e.timing)-e.timing.renderTime-e.timing.otherJSTime}):l.push({kind:"other-frame-drop",totalTime:r}));const d=pe({lastCallAt:null,timer:null}),h=l.reduce((p,y)=>p+y.totalTime,0);return v("div",{className:$(["flex flex-col h-full w-full gap-y-1"]),children:[Xn(()=>{if(i&&l.length===0)return v("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[v("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No data available"}),v("p",{className:"text-x w-full text-lefts",children:"No data was collected during this period"})]});if(l.length===0)return v("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[v("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No renders collected"}),v("p",{className:"text-x w-full text-lefts",children:"There were no renders during this period"})]})}),l.toSorted((p,y)=>y.totalTime-p.totalTime).map(p=>v(L1,{bars:l,bar:p,debouncedMouseEnter:d,totalBarTime:h,isProduction:i},p.kind==="render"?p.event.id:p.kind))]})},cC=e=>e.current&&e.current.alpha>0?"fading-out":"fading-in",L1=({bar:e,debouncedMouseEnter:t,totalBarTime:r,isProduction:i,bars:s,depth:l=0})=>{const{setNotificationState:u,setRoute:d}=bn(),[h,p]=Ee(!1),y=e.kind==="render"?e.event.parents.size===0:!0,g=s.filter(S=>S.kind==="render"&&e.kind==="render"?e.event.parents.has(S.event.name)&&S.event.name!==e.event.name:!1),b=e.kind==="render"?Array.from(e.event.parents).filter(S=>!s.some(T=>T.kind==="render"&&T.event.name===S)):[],w=()=>{e.kind==="render"?(u(S=>({...S,selectedFiber:e.event})),d({route:"render-explanation",routeMessage:null})):d({route:"other-visualization",routeMessage:{kind:"auto-open-overview-accordion",name:e.kind}})};return v("div",{className:"w-full",children:[v("div",{className:$(["w-full flex items-center relative text-xs min-w-0"]),children:[v("button",{onMouseLeave:()=>{t.current.timer&&clearTimeout(t.current.timer),Us()},onMouseEnter:async()=>{const S=async()=>{if(t.current.lastCallAt=Date.now(),e.kind!=="render"){const O=Ve.value.current?Ve.value.current:Ve.value.kind==="transition"?Ve.value.transitionTo:null;if(!O){Ve.value={kind:"idle",current:null};return}Ve.value={kind:"move-out",current:{alpha:0,...O}};return}const T=Ve.value,k=Xn(()=>{switch(T.kind){case"transition":return T.transitionTo;case"idle":case"move-out":return T.current}}),_=[];if(T.kind==="transition"){const O=cC(T);Xn(()=>{switch(O){case"fading-in":{Ve.value={kind:"transition",current:T.transitionTo,transitionTo:{rects:_,alpha:0,name:e.event.name}};return}case"fading-out":{Ve.value={kind:"transition",current:Ve.value.current?{alpha:0,...Ve.value.current}:null,transitionTo:{rects:_,alpha:0,name:e.event.name}};return}}})}else Ve.value={kind:"transition",transitionTo:{rects:_,alpha:0,name:e.event.name},current:k?{alpha:0,...k}:null};const M=e.event.elements.filter(O=>O instanceof Element);for await(const O of C1(M))O.forEach(({boundingClientRect:L})=>{_.push(L)}),fo()};if(t.current.lastCallAt&&Date.now()-t.current.lastCallAt<200){t.current.timer&&clearTimeout(t.current.timer),t.current.timer=setTimeout(()=>{S()},200);return}S()},onClick:w,className:$(["h-full w-[90%] flex items-center hover:bg-[#0f0f0f] rounded-l-md min-w-0 relative"]),children:[v("div",{style:{minWidth:"fit-content",width:`${e.totalTime/r*100}%`},className:$(["flex items-center rounded-sm text-white text-xs h-[28px] shrink-0",e.kind==="render"&&"bg-[#412162] group-hover:bg-[#5b2d89]",e.kind==="other-frame-drop"&&"bg-[#44444a] group-hover:bg-[#6a6a6a]",e.kind==="other-javascript"&&"bg-[#efd81a6b] group-hover:bg-[#efda1a2f]",e.kind==="other-not-javascript"&&"bg-[#214379d4] group-hover:bg-[#21437982]"])}),v("div",{className:$(["absolute inset-0 flex items-center px-2","min-w-0"]),children:v("div",{className:"flex items-center gap-x-2 min-w-0 w-full",children:[v("span",{className:$(["truncate"]),children:Xn(()=>{switch(e.kind){case"other-frame-drop":return"JavaScript, DOM updates, Draw Frame";case"other-javascript":return"JavaScript/React Hooks";case"other-not-javascript":return"Update DOM and Draw New Frame";case"render":return e.event.name}})}),e.kind==="render"&&$3(e.event)&&v("div",{style:{lineHeight:"10px"},className:$(["px-1 py-0.5 bg-[#6a369e] flex items-center rounded-sm font-semibold text-[8px] shrink-0"]),children:"Memoizable"})]})})]}),v("button",{onClick:()=>e.kind==="render"&&!y&&p(!h),className:$(["flex items-center min-w-fit shrink-0 rounded-r-md h-[28px]",!y&&"hover:bg-[#0f0f0f]",e.kind==="render"&&!y?"cursor-pointer":"cursor-default"]),children:[v("div",{className:"w-[20px] flex items-center justify-center",children:e.kind==="render"&&!y&&v(j1,{className:$("transition-transform",h&&"rotate-90"),size:16})}),v("div",{style:{minWidth:y?"fit-content":i?"30px":"60px"},className:"flex items-center justify-end gap-x-1",children:[e.kind==="render"&&v("span",{className:$(["text-[10px]"]),children:["x",e.event.count]}),(e.kind!=="render"||!i)&&v("span",{className:"text-[10px] text-[#7346a0] pr-1",children:[e.totalTime<1?"<1":e.totalTime.toFixed(0),"ms"]})]})]}),l===0&&v("div",{className:$(["absolute right-0 top-1/2 transition-none -translate-y-1/2 bg-white text-black px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity mr-16","pointer-events-none"]),children:"Click to learn more"})]}),h&&(g.length>0||b.length>0)&&v("div",{className:"pl-3 flex flex-col gap-y-1 mt-1",children:[g.toSorted((S,T)=>T.totalTime-S.totalTime).map((S,T)=>v(L1,{depth:l+1,bar:S,debouncedMouseEnter:t,totalBarTime:r,isProduction:i,bars:s},T)),b.map(S=>v("div",{className:"w-full",children:v("div",{className:"w-full flex items-center relative text-xs",children:v("div",{className:"h-full w-full flex items-center relative",children:[v("div",{className:"flex items-center rounded-sm text-white text-xs h-[28px] w-full"}),v("div",{className:"absolute inset-0 flex items-center px-2",children:v("span",{className:"truncate whitespace-nowrap text-white/70 w-full",children:S})})]})})},S))]})]})},uC=({selectedEvent:e,selectedFiber:t})=>{const{setRoute:r}=bn(),[i,s]=Ee(!0),[l]=Ee(Gu());Em(()=>{const d=localStorage.getItem("react-scan-tip-shown"),h=d==="true"?!0:d==="false"?!1:null;if(h===null){s(!0),localStorage.setItem("react-scan-tip-is-shown","true");return}h||s(!1)},[]);const u=t.changes.context.length===0&&t.changes.props.length===0&&t.changes.state.length===0;return v("div",{className:$(["w-full min-h-fit h-full flex flex-col py-4 pt-0 rounded-sm"]),children:[v("div",{className:$(["flex items-start gap-x-4 "]),children:[v("button",{onClick:()=>{r({route:"render-visualization",routeMessage:null})},className:$(["text-white hover:bg-[#34343b] flex gap-x-1 justify-center items-center mb-4 w-fit px-2.5 py-1.5 text-xs rounded-sm bg-[#18181B]"]),children:[v(B3,{size:14})," ",v("span",{children:"Overview"})]}),v("div",{className:$(["flex flex-col gap-y-1"]),children:[v("div",{className:$(["text-sm font-bold text-white overflow-x-hidden"]),children:v("div",{className:"flex items-center gap-x-2 truncate",children:t.name})}),v("div",{className:$(["flex gap-x-2"]),children:[!l&&v(De,{children:v("div",{className:$(["text-xs text-gray-400"]),children:["• Render time: ",t.totalTime.toFixed(0),"ms"]})}),v("div",{className:$(["text-xs text-gray-400 mb-4"]),children:["• Renders: ",t.count,"x"]})]})]})]}),i&&!u&&v("div",{className:$(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex relative"]),children:[v("button",{onClick:()=>{s(!1),localStorage.setItem("react-scan-tip-shown","false")},className:$(["absolute right-2 top-2 rounded-sm p-1 hover:bg-[#18181B]"]),children:v(Ru,{size:12})}),v("div",{className:$(["w-1 bg-[#d36cff]"])}),v("div",{className:$(["flex-1"]),children:[v("div",{className:$(["px-3 py-2 text-gray-100 text-xs font-semibold"]),children:"How to stop renders"}),v("div",{className:$(["px-3 pb-2 text-gray-400 text-[10px]"]),children:"Stop the following props, state and context from changing between renders, and wrap the component in React.memo if not already"})]})]}),u&&v("div",{className:$(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex"]),children:[v("div",{className:$(["w-1 bg-[#d36cff]"])}),v("div",{className:$(["flex-1"]),children:[v("div",{className:$(["px-3 py-2 text-gray-100 text-sm font-semibold"]),children:"No changes detected"}),v("div",{className:$(["px-3 pb-2 text-gray-400 text-xs"]),children:"This component would not of rendered if it was memoized"})]})]}),v("div",{className:$(["flex w-full"]),children:[v("div",{className:$(["flex flex-col border border-[#27272A] rounded-l-sm overflow-hidden w-1/3"]),children:[v("div",{className:$(["text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Props"}),t.changes.props.length>0?t.changes.props.toSorted((d,h)=>h.count-d.count).map(d=>v("div",{className:$(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[v("span",{className:$(["text-white "]),children:d.name}),v("div",{className:$([" text-[8px]  text-[#d36cff] pl-1 py-1 "]),children:[d.count,"/",t.count,"x"]})]},d.name)):v("div",{className:$(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),v("div",{className:$(["flex flex-col border border-[#27272A] border-l-0 overflow-hidden w-1/3"]),children:[v("div",{className:$([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed State"}),t.changes.state.length>0?t.changes.state.toSorted((d,h)=>h.count-d.count).map(d=>v("div",{className:$(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[v("span",{className:$(["text-white "]),children:["index ",d.index]}),v("div",{className:$(["rounded-full  text-[#d36cff] pl-1 py-1 text-[8px]"]),children:[d.count,"/",t.count,"x"]})]},d.index)):v("div",{className:$(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),v("div",{className:$(["flex flex-col border border-[#27272A] border-l-0 rounded-r-sm overflow-hidden w-1/3"]),children:[v("div",{className:$([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Context"}),t.changes.context.length>0?t.changes.context.toSorted((d,h)=>h.count-d.count).map(d=>v("div",{className:$(["flex flex-col justify-between items-center border-t  border-[#27272A] px-1 py-1 bg-[#0A0A0A] text-[10px] overflow-x-auto"]),children:[v("span",{className:$(["text-white "]),children:d.name}),v("div",{className:$(["rounded-full text-[#d36cff] pl-1 py-1 text-[8px] text-wrap"]),children:[d.count,"/",t.count,"x"]})]},d.name)):v("div",{className:$(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A] py-2"]),children:"No changes"})]})]})]})},dC=()=>{const{notificationState:e,setNotificationState:t}=bn(),[r,i]=Ee("..."),s=pe(null);if(Te(()=>{const l=setInterval(()=>{i(u=>u==="..."?"":u+".")},500);return()=>clearInterval(l)},[]),!e.selectedEvent)return v("div",{ref:s,className:$(["h-full w-full flex flex-col items-center justify-center relative py-2 px-4"]),children:[v("div",{className:$(["p-2 flex justify-center items-center border-[#27272A] absolute top-0 right-0"]),children:v("button",{onClick:()=>{Ze.value={view:"none"}},children:v(Ru,{size:18,className:"text-[#6F6F78]"})})}),v("div",{className:$(["flex flex-col items-start pt-5 bg-[#0A0A0A] p-5 rounded-sm max-w-md"," shadow-lg"]),children:v("div",{className:$(["flex flex-col items-start gap-y-4"]),children:[v("div",{className:$(["flex items-center"]),children:v("span",{className:$(["text-zinc-400 font-medium text-[17px]"]),children:["Scanning for slowdowns",r]})}),e.events.length!==0&&v("p",{className:$(["text-xs"]),children:["Click on an item in the"," ",v("span",{className:$(["text-purple-400"]),children:"History"})," list to get started"]}),v("p",{className:$(["text-zinc-600 text-xs"]),children:"You don't need to keep this panel open for React Scan to record slowdowns"}),v("p",{className:$(["text-zinc-600 text-xs"]),children:"Enable audio alerts to hear a delightful ding every time a large slowdown is recorded"}),v("button",{onClick:()=>{if(e.audioNotificationsOptions.enabled){t(u=>{var d,h;return((d=u.audioNotificationsOptions.audioContext)==null?void 0:d.state)!=="closed"&&((h=u.audioNotificationsOptions.audioContext)==null||h.close()),localStorage.setItem("react-scan-notifications-audio","false"),{...u,audioNotificationsOptions:{audioContext:null,enabled:!1}}});return}localStorage.setItem("react-scan-notifications-audio","true");const l=new AudioContext;Rm(l),t(u=>({...u,audioNotificationsOptions:{enabled:!0,audioContext:l}}))},className:$(["px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-sm w-full"," text-sm flex items-center gap-x-2 justify-center"]),children:e.audioNotificationsOptions.enabled?v(De,{children:v("span",{className:"flex items-center gap-x-1",children:"Disable audio alerts"})}):v(De,{children:v("span",{className:"flex items-center gap-x-1",children:"Enable audio alerts"})})})]})})]});switch(e.route){case"render-visualization":return v(Pc,{children:v(lC,{selectedEvent:e.selectedEvent})});case"render-explanation":{if(!e.selectedFiber)throw new Error("Invariant: must have selected fiber when viewing render explanation");return v(Pc,{children:v(uC,{selectedFiber:e.selectedFiber,selectedEvent:e.selectedEvent})})}case"other-visualization":return v(Pc,{children:v("div",{className:$(["flex w-full h-full flex-col overflow-y-auto"]),id:"overview-scroll-container",children:v(nC,{selectedEvent:e.selectedEvent})})});case"optimize":return v(Pc,{children:v(eC,{selectedEvent:e.selectedEvent})})}e.route},Pc=({children:e})=>{const{notificationState:t}=bn();if(!t.selectedEvent)throw new Error("Invariant: d must have selected event when viewing render explanation");return v("div",{className:$(["w-full h-full flex flex-col gap-y-2"]),children:[v("div",{className:$(["h-[50px] w-full"]),children:v(G3,{selectedEvent:t.selectedEvent})}),v("div",{className:$(["h-calc(100%-50px) flex flex-col overflow-y-auto px-3"]),children:e})]})},fC=({selectedEvent:e})=>{const t=ml(e);switch(e.kind){case"interaction":return v("div",{className:$(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:v("div",{className:$(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[v("div",{className:$(["flex items-center gap-x-2 "]),children:[v("span",{className:$(["text-[#5a5a5a] mr-0.5"]),children:e.type==="click"?"Clicked ":"Typed in "}),v("span",{children:rl(e.componentPath)}),v("div",{className:$(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",t==="low"&&"bg-green-500/50",t==="needs-improvement"&&"bg-[#b77116]",t==="high"&&"bg-[#b94040]"]),children:[At(e.timing).toFixed(0),"ms processing time"]})]}),v("div",{className:$(["flex items-center gap-x-2  justify-end ml-auto"]),children:v("div",{className:$(["p-2 flex justify-center items-center border-[#27272A]"]),children:v("button",{onClick:()=>{Ze.value={view:"none"}},title:"Close",children:v(Ru,{size:18,className:"text-[#6F6F78]"})})})})]})});case"dropped-frames":return v("div",{className:$(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:v("div",{className:$(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[v("div",{className:$(["flex items-center gap-x-2 "]),children:["FPS Drop",v("div",{className:$(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",t==="low"&&"bg-green-500/50",t==="needs-improvement"&&"bg-[#b77116]",t==="high"&&"bg-[#b94040]"]),children:["dropped to ",e.fps," FPS"]})]}),v("div",{className:$(["flex items-center gap-x-2 w-2/4 justify-end ml-auto"]),children:v("div",{className:$(["p-2 flex justify-center items-center border-[#27272A]"]),children:v("button",{onClick:()=>{Ze.value={view:"none"}},children:v(Ru,{size:18,className:"text-[#6F6F78]"})})})})]})})}},hC=({flashingItemsCount:e,totalEvents:t})=>{const[r,i]=Ee(!1),s=pe(0),l=pe(0);return Te(()=>{if(s.current>=t)return;const u=Date.now(),d=250,h=u-l.current;if(h>=d){i(!1);const p=setTimeout(()=>{s.current=t,l.current=Date.now(),i(!0),setTimeout(()=>{i(!1)},2e3)},50);return()=>clearTimeout(p)}else{const p=d-h,y=setTimeout(()=>{i(!1),setTimeout(()=>{s.current=t,l.current=Date.now(),i(!0),setTimeout(()=>{i(!1)},2e3)},50)},p);return()=>clearTimeout(y)}},[e]),r},yw=({item:e,shouldFlash:t})=>{var d;const[r,i]=Ee(!1),s=e.events.map(ml).reduce((h,p)=>{switch(p){case"high":return"high";case"needs-improvement":return h==="high"?"high":"needs-improvement";case"low":return h}},"low"),l=e.events.reduce((h,p)=>t(p.id)?h+1:h,0),u=hC({flashingItemsCount:l,totalEvents:e.events.length});return v("div",{className:$(["flex flex-col gap-y-0.5"]),children:[v("button",{onClick:()=>i(h=>!h),className:$(["pl-2 py-1.5  text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",u&&!r&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[v("div",{className:$(["w-4/5 flex items-center justify-start h-full text-xs truncate gap-x-1.5"]),children:[v("span",{className:$(["min-w-fit"]),children:v(j1,{className:$(["text-[#A1A1AA] transition-transform",r?"rotate-90":""]),size:14},`chevron-${e.timestamp}`)}),v("span",{className:$(["text-xs"]),children:e.kind==="collapsed-frame-drops"?"FPS Drops":rl(((d=e.events.at(0))==null?void 0:d.componentPath)??[])})]}),v("div",{className:$(["ml-auto min-w-fit flex justify-end items-center"]),children:v("div",{style:{lineHeight:"10px"},className:$(["w-fit flex items-center text-[10px] justify-center h-full text-white px-1 py-1 rounded-sm font-semibold",s==="low"&&"bg-green-500/60",s==="needs-improvement"&&"bg-[#b77116] text-[10px]",s==="high"&&"bg-[#b94040]"]),children:["x",e.events.length]})})]}),r&&v(pC,{children:e.events.toSorted((h,p)=>p.timestamp-h.timestamp).map(h=>v($1,{event:h,shouldFlash:t(h.id)}))})]})},pC=({children:e})=>v("div",{className:"relative pl-6 flex flex-col gap-y-1",children:[v("div",{className:"absolute left-3 top-0 bottom-0 w-px bg-[#27272A]"}),e]}),mC=e=>{const t=pe([]),[r,i]=Ee(new Set),s=pe(!0);return Te(()=>{if(s.current){s.current=!1,t.current=e;return}const l=new Set(e.map(h=>h.id)),u=new Set(t.current.map(h=>h.id)),d=new Set;l.forEach(h=>{u.has(h)||d.add(h)}),d.size>0&&(i(d),setTimeout(()=>{i(new Set)},2e3)),t.current=e},[e]),l=>r.has(l)},gC=({shouldFlash:e})=>{const[t,r]=Ee(e);return Te(()=>{if(e){r(!0);const i=setTimeout(()=>{r(!1)},1e3);return()=>clearTimeout(i)}},[e]),t},$1=({event:e,shouldFlash:t})=>{var u,d;const{notificationState:r,setNotificationState:i}=bn(),s=ml(e),l=gC({shouldFlash:t});switch(e.kind){case"interaction":return v("button",{onClick:()=>{i(h=>({...h,selectedEvent:e,route:"render-visualization",selectedFiber:null}))},className:$(["pl-2 py-1.5  text-sm flex w-full items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",e.id===((u=r.selectedEvent)==null?void 0:u.id)&&"bg-[#18181B]",l&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[v("div",{className:$(["w-4/5 flex items-center justify-start h-full gap-x-1.5"]),children:[v("span",{className:$(["min-w-fit text-xs"]),children:Xn(()=>{switch(e.type){case"click":return v(Y3,{size:14});case"keyboard":return v(P3,{size:14})}})}),v("span",{className:$(["text-xs pr-1 truncate"]),children:rl(e.componentPath)})]}),v("div",{className:$([" min-w-fit flex justify-end items-center ml-auto"]),children:v("div",{style:{lineHeight:"10px"},className:$(["gap-x-0.5 w-fit flex items-end justify-center h-full text-white px-1 py-1 rounded-sm font-semibold text-[10px]",s==="low"&&"bg-green-500/50",s==="needs-improvement"&&"bg-[#b77116] text-[10px]",s==="high"&&"bg-[#b94040]"]),children:v("div",{style:{lineHeight:"10px"},className:$(["text-[10px] text-white flex items-end"]),children:[At(e.timing).toFixed(0),"ms"]})})})]});case"dropped-frames":return v("button",{onClick:()=>{i(h=>({...h,selectedEvent:e,route:"render-visualization",selectedFiber:null}))},className:$(["pl-2 py-1.5  w-full text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",e.id===((d=r.selectedEvent)==null?void 0:d.id)&&"bg-[#18181B]",l&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[v("div",{className:$(["w-4/5 flex items-center justify-start h-full text-xs truncate"]),children:[v(F3,{size:14,className:"mr-1.5"})," FPS Drop"]}),v("div",{className:$([" min-w-fit flex justify-end items-center ml-auto"]),children:v("div",{style:{lineHeight:"10px"},className:$(["w-fit flex items-center justify-center h-full text-white px-1 py-1 rounded-sm text-[10px] font-bold",s==="low"&&"bg-green-500/60",s==="needs-improvement"&&"bg-[#b77116] text-[10px]",s==="high"&&"bg-[#b94040]"]),children:[e.fps," FPS"]})})]})}},vC=e=>e.reduce((r,i)=>{const s=r.at(-1);if(!s)return[{kind:"single",event:i,timestamp:i.timestamp}];switch(s.kind){case"collapsed-keyboard":return i.kind==="interaction"&&i.type==="keyboard"&&i.componentPath.join("-")===s.events[0].componentPath.join("-")?[...r.filter(u=>u!==s),{kind:"collapsed-keyboard",events:[...s.events,i],timestamp:Math.max(...[...s.events,i].map(u=>u.timestamp))}]:[...r,{kind:"single",event:i,timestamp:i.timestamp}];case"single":return s.event.kind==="interaction"&&s.event.type==="keyboard"&&i.kind==="interaction"&&i.type==="keyboard"&&s.event.componentPath.join("-")===i.componentPath.join("-")?[...r.filter(u=>u!==s),{kind:"collapsed-keyboard",events:[s.event,i],timestamp:Math.max(s.event.timestamp,i.timestamp)}]:s.event.kind==="dropped-frames"&&i.kind==="dropped-frames"?[...r.filter(u=>u!==s),{kind:"collapsed-frame-drops",events:[s.event,i],timestamp:Math.max(s.event.timestamp,i.timestamp)}]:[...r,{kind:"single",event:i,timestamp:i.timestamp}];case"collapsed-frame-drops":return i.kind==="dropped-frames"?[...r.filter(u=>u!==s),{kind:"collapsed-frame-drops",events:[...s.events,i],timestamp:Math.max(...[...s.events,i].map(u=>u.timestamp))}]:[...r,{kind:"single",event:i,timestamp:i.timestamp}]}},[]),H1=(e=150)=>{const{notificationState:t}=bn(),[r,i]=Ee(t.events);return Te(()=>{setTimeout(()=>{i(t.events)},e)},[t.events]),[r,i]},yC=()=>{const{notificationState:e,setNotificationState:t}=bn(),r=mC(e.events),[i,s]=H1(),l=vC(i).toSorted((u,d)=>d.timestamp-u.timestamp);return v("div",{className:$(["w-full h-full gap-y-2 flex flex-col border-r border-[#27272A] overflow-y-auto"]),children:[v("div",{className:$(["text-sm text-[#65656D] pl-3 pr-1 w-full flex items-center justify-between"]),children:[v("span",{children:"History"}),v(U1,{wrapperProps:{className:"h-full flex items-center justify-center ml-auto"},triggerContent:v("button",{className:$(["hover:bg-[#18181B] rounded-full p-2"]),title:"Clear all events",onClick:()=>{nl.getState().actions.clear(),t(u=>({...u,selectedEvent:null,selectedFiber:null,route:u.route==="other-visualization"?"other-visualization":"render-visualization"})),s([])},children:v(X3,{className:$([""]),size:16})}),children:v("div",{className:$(["w-full flex justify-center"]),children:"Clear all events"})})]}),v("div",{className:$(["flex flex-col px-1 gap-y-1"]),children:[l.length===0&&v("div",{className:$(["flex items-center justify-center text-zinc-500 text-sm py-4"]),children:"No Events"}),l.map(u=>Xn(()=>{switch(u.kind){case"collapsed-keyboard":return v(yw,{shouldFlash:r,item:u});case"single":return v($1,{event:u.event,shouldFlash:r(u.event.id)},u.event.id);case"collapsed-frame-drops":return v(yw,{shouldFlash:r,item:u})}}))]})]})},bC=e=>Object.values(e).map(r=>({id:qn(),totalTime:r.nodeInfo.reduce((i,s)=>i+s.selfTime,0),count:r.nodeInfo.length,name:r.nodeInfo[0].name,deletedAll:!1,parents:r.parents,hasMemoCache:r.hasMemoCache,wasFiberRenderMount:r.wasFiberRenderMount,elements:r.nodeInfo.map(i=>i.element),changes:{context:r.changes.fiberContext.current.filter(i=>r.changes.fiberContext.changesCounts.get(i.name)).map(i=>({name:String(i.name),count:r.changes.fiberContext.changesCounts.get(i.name)??0})),props:r.changes.fiberProps.current.filter(i=>r.changes.fiberProps.changesCounts.get(i.name)).map(i=>({name:String(i.name),count:r.changes.fiberProps.changesCounts.get(i.name)??0})),state:r.changes.fiberState.current.filter(i=>r.changes.fiberState.changesCounts.get(Number(i.name))).map(i=>({index:i.name,count:r.changes.fiberState.changesCounts.get(Number(i.name))??0}))}})),wC=e=>{Te(()=>{const r=setInterval(()=>{e.forEach(i=>{i.groupedFiberRenders&&i.groupedFiberRenders.forEach(s=>{if(s.deletedAll)return;if(!s.elements||s.elements.length===0){s.deletedAll=!0;return}const l=s.elements.length;s.elements=s.elements.filter(u=>u&&u.isConnected),s.elements.length===0&&l>0&&(s.deletedAll=!0)})})},5e3);return()=>{clearInterval(r)}},[e])},I1=()=>{const e=z3(),t=[];return wC(t),e.state.events.forEach(r=>{const i=r.kind==="interaction"?r.data.meta.detailedTiming.fiberRenders:r.data.meta.fiberRenders,s=bC(i),l=s.reduce((u,d)=>u+d.totalTime,0);switch(r.kind){case"interaction":{const{commitEnd:u,jsEndDetail:d,interactionStartDetail:h,rafStart:p}=r.data.meta.detailedTiming,y=Math.max(0,d-h-l),g=Math.max(r.data.meta.latency-(u-h),0);t.push({componentPath:r.data.meta.detailedTiming.componentPath,groupedFiberRenders:s,id:r.id,kind:"interaction",memory:null,timestamp:r.data.startAt,type:r.data.meta.detailedTiming.interactionType==="keyboard"?"keyboard":"click",timing:{renderTime:l,kind:"interaction",otherJSTime:y,framePreparation:p-d,frameConstruction:u-p,frameDraw:g}});return}case"long-render":{t.push({kind:"dropped-frames",id:r.id,memory:null,timing:{kind:"dropped-frames",renderTime:l,otherTime:r.data.meta.latency},groupedFiberRenders:s,timestamp:r.data.startAt,fps:r.data.meta.fps});return}}}),t},xC=1e3,_C=()=>{const{notificationState:e,setNotificationState:t}=bn(),r=pe(null),i=pe(null),s=pe(0),[l]=H1(),u=l.filter(d=>ml(d)==="high").length;return Te(()=>{const d=localStorage.getItem("react-scan-notifications-audio");if(d!=="false"&&d!=="true"){localStorage.setItem("react-scan-notifications-audio","false");return}if(d!=="false"){t(p=>p.audioNotificationsOptions.enabled?p:{...p,audioNotificationsOptions:{enabled:!0,audioContext:new AudioContext}});return}},[]),Te(()=>{const{audioNotificationsOptions:d}=e;if(!d.enabled||u===0||r.current&&r.current>=u)return;i.current&&clearTimeout(i.current);const p=Date.now()-s.current,y=Math.max(0,xC-p);i.current=setTimeout(()=>{Rm(d.audioContext),r.current=u,s.current=Date.now(),i.current=null},y)},[u]),Te(()=>{u===0&&(r.current=null)},[u]),Te(()=>()=>{i.current&&clearTimeout(i.current)},[]),null},SC=Am((e,t)=>{const r=I1(),[i,s]=Ee({detailsExpanded:!1,events:r,filterBy:"latest",moreInfoExpanded:!1,route:"render-visualization",selectedEvent:r.toSorted((l,u)=>l.timestamp-u.timestamp).at(-1)??null,selectedFiber:null,routeMessage:null,audioNotificationsOptions:{enabled:!1,audioContext:null}});return i.events=r,v(D1.Provider,{value:{notificationState:i,setNotificationState:s,setRoute:({route:l,routeMessage:u})=>{s(d=>{const h={...d,route:l,routeMessage:u};switch(l){case"render-visualization":return Us(),{...h,selectedFiber:null};case"optimize":return Us(),{...h,selectedFiber:null};case"other-visualization":return Us(),{...h,selectedFiber:null};case"render-explanation":return Us(),h}})}},children:[v(_C,{}),v(TC,{ref:t})]})}),TC=Am((e,t)=>{var i;const{notificationState:r}=bn();return v("div",{ref:t,className:$(["h-full w-full flex flex-col"]),children:[r.selectedEvent&&v("div",{className:$(["w-full h-[48px] flex flex-col",r.moreInfoExpanded&&"h-[235px]",r.moreInfoExpanded&&r.selectedEvent.kind==="dropped-frames"&&"h-[150px]"]),children:[v(fC,{selectedEvent:r.selectedEvent}),r.moreInfoExpanded&&v(kC,{})]}),v("div",{className:$(["flex ",r.selectedEvent?"h-[calc(100%-48px)]":"h-full",r.moreInfoExpanded&&"h-[calc(100%-200px)]",r.moreInfoExpanded&&((i=r.selectedEvent)==null?void 0:i.kind)==="dropped-frames"&&"h-[calc(100%-150px)]"]),children:[v("div",{className:$(["h-full min-w-[200px]"]),children:v(yC,{})}),v("div",{className:$(["w-[calc(100%-200px)] h-full overflow-y-auto"]),children:v(dC,{})})]})]})}),kC=()=>{const{notificationState:e}=bn();if(!e.selectedEvent)throw new Error("Invariant must have selected event for more info");const t=e.selectedEvent;return v("div",{className:$(["px-4 py-2 border-b border-[#27272A] bg-[#18181B]/50 h-[calc(100%-40px)]",t.kind==="dropped-frames"&&"h-[calc(100%-25px)]"]),children:v("div",{className:$(["flex flex-col gap-y-4 h-full"]),children:Xn(()=>{switch(t.kind){case"interaction":return v(De,{children:[v("div",{className:$(["flex items-center gap-x-3"]),children:[v("span",{className:"text-[#6F6F78] text-xs font-medium",children:t.type==="click"?"Clicked component location":"Typed in component location"}),v("div",{className:"font-mono text-[#E4E4E7] flex items-center bg-[#27272A] pl-2 py-1 rounded-sm overflow-x-auto",children:t.componentPath.toReversed().map((r,i)=>v(De,{children:[v("span",{style:{lineHeight:"14px"},className:"text-[10px] whitespace-nowrap",children:r},r),i<t.componentPath.length-1&&v("span",{className:"text-[#6F6F78] mx-0.5",children:"‹"})]}))})]}),v("div",{className:$(["flex items-center gap-x-3"]),children:[v("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),v("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[At(t.timing).toFixed(0),"ms"]})]}),v("div",{className:$(["flex items-center gap-x-3"]),children:[v("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),v("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]});case"dropped-frames":return v(De,{children:[v("div",{className:$(["flex items-center gap-x-3"]),children:[v("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),v("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[At(t.timing).toFixed(0),"ms"]})]}),v("div",{className:$(["flex items-center gap-x-3"]),children:[v("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),v("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]})}})})})},EC=Dm(()=>{var b;const e=I1(),[t,r]=Ee(e);Te(()=>{const w=setTimeout(()=>{r(e)},600);return()=>{clearTimeout(w)}},[e]);const i=ae.inspectState,s=i.value.kind==="inspecting",l=i.value.kind==="focused",[u,d]=Ee([]),h=ht(()=>{switch(ae.inspectState.value.kind){case"inspecting":{Ze.value={view:"none"},ae.inspectState.value={kind:"inspect-off"};return}case"focused":{Ze.value={view:"inspector"},ae.inspectState.value={kind:"inspecting",hoveredDomElement:null};return}case"inspect-off":{Ze.value={view:"none"},ae.inspectState.value={kind:"inspecting",hoveredDomElement:null};return}case"uninitialized":return}},[]),p=ht(w=>{if(w.preventDefault(),w.stopPropagation(),!Le.instrumentation)return;const S=!Le.instrumentation.isPaused.value;Le.instrumentation.isPaused.value=S;const T=Dr("react-scan-options");Kt("react-scan-options",{...T,enabled:!S})},[]);el(()=>{ae.inspectState.value.kind==="uninitialized"&&(ae.inspectState.value={kind:"inspect-off"})});let y=null,g="#999";return s?(y=v(ct,{name:"icon-inspect"}),g="#8e61e3"):l?(y=v(ct,{name:"icon-focus"}),g="#8e61e3"):(y=v(ct,{name:"icon-inspect"}),g="#999"),Em(()=>{if(Ze.value.view!=="notifications")return;const w=new Set(e.map(S=>S.id));d([...w.values()])},[e.length,Ze.value.view]),v("div",{className:"flex max-h-9 min-h-9 flex-1 items-stretch overflow-hidden",children:[v("div",{className:"h-full flex items-center min-w-fit",children:v("button",{type:"button",id:"react-scan-inspect-element",title:"Inspect element",onClick:h,className:"button flex items-center justify-center h-full w-full pl-3 pr-2.5",style:{color:g},children:y})}),v("div",{className:"h-full flex items-center justify-center",children:v("button",{type:"button",id:"react-scan-notifications",title:"Notifications",onClick:()=>{switch(ae.inspectState.value.kind!=="inspect-off"&&(ae.inspectState.value={kind:"inspect-off"}),Ze.value.view){case"inspector":{ae.inspectState.value={kind:"inspect-off"};const w=new Set(e.map(S=>S.id));d([...w.values()]),Ze.value={view:"notifications"};return}case"notifications":{Ze.value={view:"none"};return}case"none":{const w=new Set(e.map(S=>S.id));d([...w.values()]),Ze.value={view:"notifications"};return}}},className:"button flex items-center justify-center h-full pl-2.5 pr-2.5",style:{color:g},children:v(H3,{events:t.filter(w=>!u.includes(w.id)).map(w=>ml(w)==="high"),size:16,className:$(["text-[#999]",Ze.value.view==="notifications"&&"text-[#8E61E3]"])})})}),v(h3,{checked:!((b=Le.instrumentation)!=null&&b.isPaused.value),onChange:p,className:"place-self-center",title:"Outline Re-renders"}),Le.options.value.showFPS&&v(m3,{})]})}),CC=li(()=>ae.inspectState.value.kind==="inspecting"),MC=li(()=>$("relative","flex-1","flex flex-col","rounded-t-lg","overflow-hidden","opacity-100","transition-[opacity]",CC.value&&"opacity-0 duration-0 delay-0")),NC=li(()=>Ze.value.view==="inspector"),OC=li(()=>Ze.value.view==="notifications"),AC=()=>v("div",{className:$("flex flex-1 flex-col","overflow-hidden z-10","rounded-lg","bg-black","opacity-100","transition-[border-radius]","peer-hover/left:rounded-l-none","peer-hover/right:rounded-r-none","peer-hover/top:rounded-t-none","peer-hover/bottom:rounded-b-none"),children:[v("div",{className:MC,children:[v(f3,{}),v("div",{className:$("relative","flex-1 flex","text-white","bg-[#0A0A0A]","transition-opacity delay-150","overflow-hidden","border-b border-[#222]"),children:[v(bw,{isOpen:NC,children:v(yE,{})}),v(bw,{isOpen:OC,children:v(SC,{})})]})]}),v(EC,{})]}),bw=({isOpen:e,children:t})=>v("div",{className:$("flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",e.value&&"opacity-100 delay-150 pointer-events-auto"),children:v("div",{className:"absolute inset-0 flex",children:t})}),Xc=(e,t,r)=>e+(t-e)*r,qh={frameInterval:1e3/60,speeds:{fast:.51,slow:.1,off:0}},eo=lr&&window.devicePixelRatio||1,RC=()=>{const e=pe(null),t=pe(null),r=pe(null),i=pe(null),s=pe(null),l=pe(0),u=pe(),d=pe(new Map),h=pe(!1),p=pe(0),y=(C,z,D,F)=>{C.save(),C.strokeStyle="white",C.fillStyle="white",C.lineWidth=1.5;const N=F*.6,q=F*.5,Z=z+(F-N)/2,J=D;C.beginPath(),C.arc(Z+N/2,J+q/2,N/2,Math.PI,0,!1),C.stroke();const te=F*.8,oe=F*.5,re=z+(F-te)/2,be=D+q/2;C.fillRect(re,be,te,oe),C.restore()},g=(C,z,D,F)=>{if(!F)return;const N=24,q=8,J=((F==null?void 0:F.type)&&Ot(F.type))??"Unknown";C.save(),C.font="12px system-ui, -apple-system, sans-serif";const oe=C.measureText(J).width,re=D==="locked"?14:0,be=D==="locked"?6:0,fe=oe+q*2+re+be,Me=z.left,rt=z.top-N-4;if(C.fillStyle="rgb(37, 37, 38, .75)",C.beginPath(),C.roundRect(Me,rt,fe,N,3),C.fill(),D==="locked"){const Hr=Me+q,Ir=rt+(N-re)/2+2;y(C,Hr,Ir,re),i.current={x:Hr,y:Ir,width:re,height:re}}else i.current=null;C.fillStyle="white",C.textBaseline="middle";const Un=Me+q+(D==="locked"?re+be:0);C.fillText(J,Un,rt+N/2),C.restore()},b=(C,z,D,F)=>{if(!r.current)return;const N=r.current;z.clearRect(0,0,C.width,C.height),z.strokeStyle="rgba(142, 97, 227, 0.5)",z.fillStyle="rgba(173, 97, 230, 0.10)",D==="locked"?z.setLineDash([]):z.setLineDash([4]),z.lineWidth=1,z.fillRect(N.left,N.top,N.width,N.height),z.strokeRect(N.left,N.top,N.width,N.height),g(z,N,D,F)},w=(C,z,D,F,N,q)=>{const Z=Le.options.value.animationSpeed,J=qh.speeds[Z]??qh.speeds.off,te=oe=>{if(oe-p.current<qh.frameInterval){l.current=requestAnimationFrame(te);return}if(p.current=oe,!r.current){cancelAnimationFrame(l.current);return}r.current={left:Xc(r.current.left,D.left,J),top:Xc(r.current.top,D.top,J),width:Xc(r.current.width,D.width,J),height:Xc(r.current.height,D.height,J)},b(C,z,F,N),Math.abs(r.current.left-D.left)>.1||Math.abs(r.current.top-D.top)>.1||Math.abs(r.current.width-D.width)>.1||Math.abs(r.current.height-D.height)>.1?l.current=requestAnimationFrame(te):(r.current=D,b(C,z,F,N),cancelAnimationFrame(l.current),z.restore())};cancelAnimationFrame(l.current),clearTimeout(u.current),l.current=requestAnimationFrame(te),u.current=setTimeout(()=>{cancelAnimationFrame(l.current),r.current=D,b(C,z,F,N),z.restore()},1e3)},S=(C,z,D,F,N)=>{if(z.save(),!r.current){r.current=D,b(C,z,F,N),z.restore();return}w(C,z,D,F,N)},T=async(C,z,D,F)=>{if(!C||!z||!D)return;const{parentCompositeFiber:N}=Qa(C),q=await bE(C);!N||!q||S(z,D,q,F,N)},k=()=>{for(const C of d.current.values())C==null||C()},_=C=>{const z=C.getContext("2d");z&&z.clearRect(0,0,C.width,C.height),r.current=null,i.current=null,s.current=null,C.classList.remove("fade-in"),h.current=!1},M=C=>{if(!e.current||h.current)return;const z=F=>{!e.current||F.propertyName!=="opacity"||!h.current||(e.current.removeEventListener("transitionend",z),_(e.current),C==null||C())},D=d.current.get("fade-out");D&&(D(),d.current.delete("fade-out")),e.current.addEventListener("transitionend",z),d.current.set("fade-out",()=>{var F;(F=e.current)==null||F.removeEventListener("transitionend",z)}),h.current=!0,e.current.classList.remove("fade-in"),requestAnimationFrame(()=>{var F;(F=e.current)==null||F.classList.add("fade-out")})},O=()=>{e.current&&(h.current=!1,e.current.classList.remove("fade-out"),requestAnimationFrame(()=>{var C;(C=e.current)==null||C.classList.add("fade-in")}))},L=C=>{C!==s.current&&(s.current=C,Rp.has(C.tagName)?M():O(),ae.inspectState.value={kind:"inspecting",hoveredDomElement:C})},j=()=>{!r.current||!e.current||h.current||M()},X=d1(C=>{if(ae.inspectState.peek().kind!=="inspecting"||!t.current)return;t.current.style.pointerEvents="none";const D=document.elementFromPoint((C==null?void 0:C.clientX)??0,(C==null?void 0:C.clientY)??0);if(t.current.style.removeProperty("pointer-events"),clearTimeout(u.current),D&&D!==e.current){const{parentCompositeFiber:F}=Qa(D);if(F){const N=Eu(F);if(N){L(N);return}}}j()},32),G=(C,z)=>{const D=i.current;if(!D)return!1;const F=z.getBoundingClientRect(),N=z.width/F.width,q=z.height/F.height,Z=(C.clientX-F.left)*N,J=(C.clientY-F.top)*q,te=Z/eo,oe=J/eo;return te>=D.x&&te<=D.x+D.width&&oe>=D.y&&oe<=D.y+D.height},ee=C=>{C.kind==="focused"&&(ae.inspectState.value={kind:"inspecting",hoveredDomElement:C.focusedDomElement})},ne=C=>{var J;const z=["react-scan-inspect-element","react-scan-power"];if(C.target instanceof HTMLElement&&z.includes(C.target.id))return;const D=(J=s.current)==null?void 0:J.tagName;if(D&&Rp.has(D))return;C.preventDefault(),C.stopPropagation();const F=s.current??document.elementFromPoint(C.clientX,C.clientY);if(!F)return;const N=C.composedPath().at(0);if(N instanceof HTMLElement&&z.includes(N.id)){const te=new MouseEvent(C.type,C);te.__reactScanSyntheticEvent=!0,N.dispatchEvent(te);return}const{parentCompositeFiber:q}=Qa(F);if(!q)return;const Z=Eu(q);if(!Z){s.current=null,ae.inspectState.value={kind:"inspect-off"};return}ae.inspectState.value={kind:"focused",focusedDomElement:Z,fiber:q}},me=C=>{if(C.__reactScanSyntheticEvent)return;const z=ae.inspectState.peek(),D=e.current;if(!(!D||!t.current)){if(G(C,D)){C.preventDefault(),C.stopPropagation(),ee(z);return}z.kind==="inspecting"&&ne(C)}},de=C=>{var F;if(C.key!=="Escape")return;const z=ae.inspectState.peek();if(e.current&&((F=document.activeElement)==null?void 0:F.id)!=="react-scan-root"&&(Ze.value={view:"none"},z.kind==="focused"||z.kind==="inspecting"))switch(C.preventDefault(),C.stopPropagation(),z.kind){case"focused":{O(),r.current=null,s.current=z.focusedDomElement,ae.inspectState.value={kind:"inspecting",hoveredDomElement:z.focusedDomElement};break}case"inspecting":{M(()=>{Fu.value=!1,ae.inspectState.value={kind:"inspect-off"}});break}}},ie=(C,z,D)=>{var N;(N=d.current.get(C.kind))==null||N(),t.current&&C.kind!=="inspecting"&&(t.current.style.pointerEvents="none"),l.current&&cancelAnimationFrame(l.current);let F;switch(C.kind){case"inspect-off":M();return;case"inspecting":T(C.hoveredDomElement,z,D,"inspecting");break;case"focused":if(!C.focusedDomElement)return;s.current!==C.focusedDomElement&&(s.current=C.focusedDomElement),Ze.value={view:"inspector"},T(C.focusedDomElement,z,D,"locked"),F=ae.lastReportTime.subscribe(()=>{if(l.current&&r.current){const{parentCompositeFiber:q}=Qa(C.focusedDomElement);q&&T(C.focusedDomElement,z,D,"locked")}}),F&&d.current.set(C.kind,F);break}},ze=(C,z)=>{const D=C.getBoundingClientRect();C.width=D.width*eo,C.height=D.height*eo,z.scale(eo,eo),z.save()},je=()=>{const C=ae.inspectState.peek(),z=e.current;if(!z)return;const D=z==null?void 0:z.getContext("2d");D&&(cancelAnimationFrame(l.current),clearTimeout(u.current),ze(z,D),r.current=null,C.kind==="focused"&&C.focusedDomElement?T(C.focusedDomElement,z,D,"locked"):C.kind==="inspecting"&&C.hoveredDomElement&&T(C.hoveredDomElement,z,D,"inspecting"))},Ce=C=>{const z=ae.inspectState.peek(),D=e.current;D&&(z.kind==="inspecting"||G(C,D))&&(C.preventDefault(),C.stopPropagation(),C.stopImmediatePropagation())};return Te(()=>{const C=e.current;if(!C)return;const z=C==null?void 0:C.getContext("2d");if(!z)return;ze(C,z);const D=ae.inspectState.subscribe(F=>{ie(F,C,z)});return window.addEventListener("scroll",je,{passive:!0}),window.addEventListener("resize",je,{passive:!0}),document.addEventListener("pointermove",X,{passive:!0,capture:!0}),document.addEventListener("pointerdown",Ce,{capture:!0}),document.addEventListener("click",me,{capture:!0}),document.addEventListener("keydown",de,{capture:!0}),()=>{k(),D(),window.removeEventListener("scroll",je),window.removeEventListener("resize",je),document.removeEventListener("pointermove",X,{capture:!0}),document.removeEventListener("click",me,{capture:!0}),document.removeEventListener("pointerdown",Ce,{capture:!0}),document.removeEventListener("keydown",de,{capture:!0}),l.current&&cancelAnimationFrame(l.current),clearTimeout(u.current)}},[]),v(De,{children:[v("div",{ref:t,className:$("fixed top-0 left-0 w-screen h-screen","z-[214748365]"),style:{pointerEvents:"none"}}),v("canvas",{ref:e,dir:"ltr",className:$("react-scan-inspector-overlay","fixed top-0 left-0 w-screen h-screen","pointer-events-none","z-[214748367]")})]})},zC=class{constructor(e,t){this.width=e,this.height=t,this.maxWidth=e-we*2,this.maxHeight=t-we*2}rightEdge(e){return this.width-e-we}bottomEdge(e){return this.height-e-we}isFullWidth(e){return e>=this.maxWidth}isFullHeight(e){return e>=this.maxHeight}},to,al=()=>{const e=window.innerWidth,t=window.innerHeight;return to&&to.width===e&&to.height===t||(to=new zC(e,t)),to},DC=(e,t,r,i,s)=>{if(r){if(e==="top-left")return"bottom-right";if(e==="top-right")return"bottom-left";if(e==="bottom-left")return"top-right";if(e==="bottom-right")return"top-left";const[l,u]=t.split("-");if(e==="left")return`${l}-right`;if(e==="right")return`${l}-left`;if(e==="top")return`bottom-${u}`;if(e==="bottom")return`top-${u}`}if(i){if(e==="left")return`${t.split("-")[0]}-right`;if(e==="right")return`${t.split("-")[0]}-left`}if(s){if(e==="top")return`bottom-${t.split("-")[1]}`;if(e==="bottom")return`top-${t.split("-")[1]}`}return t},Xs=(e,t,r)=>{const i=getComputedStyle(document.body).direction==="rtl",s=window.innerWidth,l=window.innerHeight,u=t===bt.width,d=u?t:Math.min(t,s-we*2),h=u?r:Math.min(r,l-we*2);let p,y,g=we,b=s-d-we,w=we,S=l-h-we;switch(e){case"top-right":p=i?-g:b,y=w;break;case"bottom-right":p=i?-g:b,y=S;break;case"bottom-left":p=i?-b:g,y=S;break;case"top-left":p=i?-b:g,y=w;break;default:p=g,y=w;break}return u&&(i?p=Math.min(-g,Math.max(p,-b)):p=Math.max(g,Math.min(p,b)),y=Math.max(w,Math.min(y,S))),{x:p,y}},jC=(e,t)=>{const[r,i]=t.split("-");return e!==r&&e!==i},UC=(e,t,r,i)=>r&&i?!0:!r&&!i?jC(e,t):r?e!==t.split("-")[0]:i?e!==t.split("-")[1]:!1,Fc=(e,t,r)=>{const i=r?bt.width:bt.initialHeight,s=r?al().maxWidth:al().maxHeight,l=e+t;return Math.min(Math.max(i,l),s)},LC=(e,t,r,i,s)=>{const l=getComputedStyle(document.body).direction==="rtl",u=window.innerWidth-we*2,d=window.innerHeight-we*2;let h=t.width,p=t.height,y=r.x,g=r.y;if(l&&e.includes("right")){const k=-r.x+t.width-we,_=Math.min(t.width+i,k);h=Math.min(u,Math.max(bt.width,_)),y=r.x+(h-t.width)}if(l&&e.includes("left")){const k=window.innerWidth-r.x-we,_=Math.min(t.width-i,k);h=Math.min(u,Math.max(bt.width,_))}if(!l&&e.includes("right")){const k=window.innerWidth-r.x-we,_=Math.min(t.width+i,k);h=Math.min(u,Math.max(bt.width,_))}if(!l&&e.includes("left")){const k=r.x+t.width-we,_=Math.min(t.width-i,k);h=Math.min(u,Math.max(bt.width,_)),y=r.x-(h-t.width)}if(e.includes("bottom")){const k=window.innerHeight-r.y-we,_=Math.min(t.height+s,k);p=Math.min(d,Math.max(bt.initialHeight,_))}if(e.includes("top")){const k=r.y+t.height-we,_=Math.min(t.height-s,k);p=Math.min(d,Math.max(bt.initialHeight,_)),g=r.y-(p-t.height)}let b=we,w=window.innerWidth-we-h,S=we,T=window.innerHeight-we-p;return l?y=Math.min(-b,Math.max(y,-w)):y=Math.max(b,Math.min(y,w)),g=Math.max(S,Math.min(g,T)),{newSize:{width:h,height:p},newPosition:{x:y,y:g}}},$C=e=>{const t=al(),r={"top-left":Math.hypot(e.x,e.y),"top-right":Math.hypot(t.maxWidth-e.x,e.y),"bottom-left":Math.hypot(e.x,t.maxHeight-e.y),"bottom-right":Math.hypot(t.maxWidth-e.x,t.maxHeight-e.y)};let i="top-left";for(const s in r)r[s]<r[i]&&(i=s);return i},HC=(e,t,r,i,s=100)=>{const l=r!==void 0?e-r:0,u=i!==void 0?t-i:0,d=window.innerWidth/2,h=window.innerHeight/2,p=l>s,y=l<-s,g=u>s,b=u<-s;if(p||y){const w=t>h;return p?w?"bottom-right":"top-right":w?"bottom-left":"top-left"}if(g||b){const w=e>d;return g?w?"bottom-right":"bottom-left":w?"top-right":"top-left"}return e>d?t>h?"bottom-right":"top-right":t>h?"bottom-left":"top-left"},Gc=({position:e})=>{const t=pe(null),r=pe(null),i=pe(null),s=pe(null);Te(()=>{const d=t.current;if(!d)return;const h=()=>{d.classList.remove("pointer-events-none");const g=ae.inspectState.value.kind==="focused",b=Ze.value.view!=="none";(g||b)&&UC(e,se.value.corner,se.value.dimensions.isFullWidth,se.value.dimensions.isFullHeight)?d.classList.remove("hidden","pointer-events-none","opacity-0"):d.classList.add("hidden","pointer-events-none","opacity-0")},p=se.subscribe(g=>{r.current!==null&&i.current!==null&&s.current!==null&&g.dimensions.width===r.current&&g.dimensions.height===i.current&&g.corner===s.current||(h(),r.current=g.dimensions.width,i.current=g.dimensions.height,s.current=g.corner)}),y=ae.inspectState.subscribe(()=>{h()});return()=>{p(),y(),r.current=null,i.current=null,s.current=null}},[]);const l=ht(d=>{d.preventDefault(),d.stopPropagation();const h=Mp.value;if(!h)return;const p=h.style,{dimensions:y}=se.value,g=d.clientX,b=d.clientY,w=y.width,S=y.height,T=y.position;se.value={...se.value,dimensions:{...y,isFullWidth:!1,isFullHeight:!1,width:w,height:S,position:T}};let k=null;const _=O=>{k||(p.transition="none",k=requestAnimationFrame(()=>{const{newSize:L,newPosition:j}=LC(e,{width:w,height:S},T,O.clientX-g,O.clientY-b);p.transform=`translate3d(${j.x}px, ${j.y}px, 0)`,p.width=`${L.width}px`,p.height=`${L.height}px`;const X=Math.floor(L.width-Yn/2),G=se.value.componentsTree.width,ee=Math.min(X,Math.max(Yn,G));se.value={...se.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:L.width,height:L.height,position:j},componentsTree:{...se.value.componentsTree,width:ee}},k=null}))},M=()=>{k&&(cancelAnimationFrame(k),k=null),document.removeEventListener("pointermove",_),document.removeEventListener("pointerup",M);const{dimensions:O,corner:L}=se.value,j=al(),X=j.isFullWidth(O.width),G=j.isFullHeight(O.height),ee=X&&G;let ne=L;(ee||X||G)&&(ne=$C(O.position));const me=Xs(ne,O.width,O.height),de=()=>{h.removeEventListener("transitionend",de)};h.addEventListener("transitionend",de),p.transform=`translate3d(${me.x}px, ${me.y}px, 0)`,se.value={...se.value,corner:ne,dimensions:{isFullWidth:X,isFullHeight:G,width:O.width,height:O.height,position:me},lastDimensions:{isFullWidth:X,isFullHeight:G,width:O.width,height:O.height,position:me}},Kt(Or,{corner:ne,dimensions:se.value.dimensions,lastDimensions:se.value.lastDimensions,componentsTree:se.value.componentsTree})};document.addEventListener("pointermove",_,{passive:!0}),document.addEventListener("pointerup",M)},[]),u=ht(d=>{d.preventDefault(),d.stopPropagation();const h=Mp.value;if(!h)return;const p=h.style,{dimensions:y,corner:g}=se.value,b=al(),w=b.isFullWidth(y.width),S=b.isFullHeight(y.height),T=w&&S,k=(w||S)&&!T;let _=y.width,M=y.height;const O=DC(e,g,T,w,S);e==="left"||e==="right"?(_=w?y.width:b.maxWidth,k&&(_=w?bt.width:b.maxWidth)):(M=S?y.height:b.maxHeight,k&&(M=S?bt.initialHeight:b.maxHeight)),T&&(e==="left"||e==="right"?_=bt.width:M=bt.initialHeight);const L=Xs(O,_,M),j={isFullWidth:b.isFullWidth(_),isFullHeight:b.isFullHeight(M),width:_,height:M,position:L},X=Math.floor(_-bt.width/2),G=se.value.componentsTree.width,ee=Math.floor(_*.3),ne=w?Yn:(e==="left"||e==="right")&&!w?Math.min(X,Math.max(Yn,ee)):Math.min(X,Math.max(Yn,G));requestAnimationFrame(()=>{se.value={corner:O,dimensions:j,lastDimensions:y,componentsTree:{...se.value.componentsTree,width:ne}},p.transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",p.width=`${_}px`,p.height=`${M}px`,p.transform=`translate3d(${L.x}px, ${L.y}px, 0)`}),Kt(Or,{corner:O,dimensions:j,lastDimensions:y,componentsTree:{...se.value.componentsTree,width:ne}})},[]);return v("div",{ref:t,onPointerDown:l,onDblClick:u,className:$("absolute z-50","flex items-center justify-center","group","transition-colors select-none","peer",{"resize-left peer/left":e==="left","resize-right peer/right z-10":e==="right","resize-top peer/top":e==="top","resize-bottom peer/bottom":e==="bottom"}),children:v("span",{className:"resize-line-wrapper",children:v("span",{className:"resize-line",children:v(ct,{name:"icon-ellipsis",size:18,className:$("text-neutral-400",(e==="left"||e==="right")&&"rotate-90")})})})})},ww={horizontal:{width:20,height:48},vertical:{width:48,height:20}},IC=()=>{const e=pe(null),t=pe(!1),r=pe(0),i=pe(0),s=pe(!1),l=ht((b=!0)=>{if(!e.current)return;const{corner:w}=se.value;let S,T;if(fn.value){const ne=fn.value.orientation||"horizontal",me=ww[ne];S=me.width,T=me.height}else if(t.current){const ne=se.value.lastDimensions;S=Fc(ne.width,0,!0),T=Fc(ne.height,0,!1),s.current&&(s.current=!1)}else S=r.current,T=i.current;let _=Xs(w,S,T);if(fn.value){const{corner:ne,orientation:me="horizontal"}=fn.value,de=ww[me];switch(ne){case"top-left":_=me==="horizontal"?{x:-1,y:we}:{x:we,y:-1};break;case"bottom-left":_=me==="horizontal"?{x:-1,y:window.innerHeight-de.height-we}:{x:we,y:window.innerHeight-de.height+1};break;case"top-right":_=me==="horizontal"?{x:window.innerWidth-de.width+1,y:we}:{x:window.innerWidth-de.width-we,y:-1};break;case"bottom-right":default:_=me==="horizontal"?{x:window.innerWidth-de.width+1,y:window.innerHeight-de.height-we}:{x:window.innerWidth-de.width-we,y:window.innerHeight-de.height+1};break}}const M=S<bt.width||T<bt.initialHeight,O=b&&!M,L=e.current,j=L.style;let X=null;const G=()=>{kh(),L.removeEventListener("transitionend",G),X&&(cancelAnimationFrame(X),X=null)};L.addEventListener("transitionend",G),j.transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",X=requestAnimationFrame(()=>{j.width=`${S}px`,j.height=`${T}px`,j.transform=`translate3d(${_.x}px, ${_.y}px, 0)`,X=null});const ee={isFullWidth:S>=window.innerWidth-we*2,isFullHeight:T>=window.innerHeight-we*2,width:S,height:T,position:_};se.value={corner:w,dimensions:ee,lastDimensions:t?se.value.lastDimensions:S>r.current?ee:se.value.lastDimensions,componentsTree:se.value.componentsTree},O&&Kt(Or,{corner:se.value.corner,dimensions:se.value.dimensions,lastDimensions:se.value.lastDimensions,componentsTree:se.value.componentsTree}),kh()},[]),u=ht(b=>{if(b.preventDefault(),!e.current||b.target.closest("button"))return;const w=e.current,S=w.style,{dimensions:T}=se.value,k=b.clientX,_=b.clientY,M=T.position.x,O=T.position.y;let L=M,j=O,X=null,G=!1,ee=k,ne=_;const me=ie=>{X||(G=!0,ee=ie.clientX,ne=ie.clientY,X=requestAnimationFrame(()=>{const ze=ee-k,je=ne-_;L=Number(M)+ze,j=Number(O)+je,S.transition="none",S.transform=`translate3d(${L}px, ${j}px, 0)`;const Ce=L+T.width,C=j+T.height,z=Math.max(0,-L),D=Math.max(0,Ce-window.innerWidth),F=Math.max(0,-j),N=Math.max(0,C-window.innerHeight),q=Math.min(T.width,z+D),Z=Math.min(T.height,F+N),J=q*T.height+Z*T.width-q*Z,te=T.width*T.height;let oe=J>te*.35;if(!oe&&Le.options.value.showFPS){const re=L+T.width,be=re-100;oe=re<=0||be>=window.innerWidth||j+T.height<=0||j>=window.innerHeight}if(oe){const re=L+T.width/2,be=j+T.height/2,fe=window.innerWidth/2,Me=window.innerHeight/2;let rt;re<fe?rt=be<Me?"top-left":"bottom-left":rt=be<Me?"top-right":"bottom-right";let Un;const Hr=Math.max(z,D),Ir=Math.max(F,N);Un=Hr>Ir?"horizontal":"vertical",se.value={...se.value,corner:rt,lastDimensions:{...T,position:Xs(rt,T.width,T.height)}};const di={corner:rt,orientation:Un};fn.value=di,Kt(su,di),Kt(Or,se.value),l(!1),document.removeEventListener("pointermove",me),document.removeEventListener("pointerup",de),X&&(cancelAnimationFrame(X),X=null)}X=null}))},de=()=>{if(!w)return;X&&(cancelAnimationFrame(X),X=null),document.removeEventListener("pointermove",me),document.removeEventListener("pointerup",de);const ie=Math.abs(ee-k),ze=Math.abs(ne-_),je=Math.sqrt(ie*ie+ze*ze);if(!G||je<60)return;const Ce=HC(ee,ne,k,_,ae.inspectState.value.kind==="focused"?80:40);if(Ce===se.value.corner){S.transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)";const D=se.value.dimensions.position;requestAnimationFrame(()=>{S.transform=`translate3d(${D.x}px, ${D.y}px, 0)`});return}const C=Xs(Ce,T.width,T.height);if(L===M&&j===O)return;const z=()=>{S.transition="none",kh(),w.removeEventListener("transitionend",z),X&&(cancelAnimationFrame(X),X=null)};w.addEventListener("transitionend",z),S.transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",requestAnimationFrame(()=>{S.transform=`translate3d(${C.x}px, ${C.y}px, 0)`}),se.value={corner:Ce,dimensions:{isFullWidth:T.isFullWidth,isFullHeight:T.isFullHeight,width:T.width,height:T.height,position:C},lastDimensions:se.value.lastDimensions,componentsTree:se.value.componentsTree},Kt(Or,{corner:Ce,dimensions:se.value.dimensions,lastDimensions:se.value.lastDimensions,componentsTree:se.value.componentsTree})};document.addEventListener("pointermove",me),document.addEventListener("pointerup",de)},[]),d=ht(b=>{if(b.preventDefault(),!e.current||!fn.value)return;const{corner:w,orientation:S="horizontal"}=fn.value,T=b.clientX,k=b.clientY;let _=null,M=!1;const O=50,L=X=>{if(M||_)return;const G=X.clientX-T,ee=X.clientY-k;let ne=!1;if(S==="horizontal"?(w.endsWith("left")&&G>O||w.endsWith("right")&&G<-O)&&(ne=!0):(w.startsWith("top")&&ee>O||w.startsWith("bottom")&&ee<-O)&&(ne=!0),ne){if(M=!0,fn.value=null,Kt(su,null),r.current===0&&e.current)requestAnimationFrame(()=>{if(e.current){e.current.style.width="min-content";const me=e.current.offsetWidth;r.current=me||300;const de=se.value.lastDimensions,ie=Fc(de.width,0,!0),ze=Fc(de.height,0,!1);let je=X.clientX-ie/2,Ce=X.clientY-ze/2;je=Math.max(we,Math.min(je,window.innerWidth-ie-we)),Ce=Math.max(we,Math.min(Ce,window.innerHeight-ze-we)),se.value={...se.value,dimensions:{...se.value.dimensions,position:{x:je,y:Ce}}},l(!0);const C=Dr(Zi);Ze.value=C||{view:"none"},setTimeout(()=>{if(e.current){const z=new PointerEvent("pointerdown",{clientX:X.clientX,clientY:X.clientY,pointerId:X.pointerId,bubbles:!0});e.current.dispatchEvent(z)}},100)}});else{l(!0);const me=Dr(Zi);Ze.value=me||{view:"none"}}document.removeEventListener("pointermove",L),document.removeEventListener("pointerup",j)}},j=()=>{document.removeEventListener("pointermove",L),document.removeEventListener("pointerup",j)};document.addEventListener("pointermove",L),document.addEventListener("pointerup",j)},[]);Te(()=>{if(!e.current)return;Yb(Zi),fn.value?(i.current=36,r.current=0):(e.current.style.width="min-content",i.current=36,r.current=e.current.offsetWidth),e.current.style.maxWidth=`calc(100vw - ${we*2}px)`,e.current.style.maxHeight=`calc(100vh - ${we*2}px)`,l(),ae.inspectState.value.kind!=="focused"&&!fn.value&&!s.current&&(se.value={...se.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:r.current,height:i.current,position:se.value.dimensions.position}}),Mp.value=e.current;const b=se.subscribe(k=>{if(!e.current)return;const{x:_,y:M}=k.dimensions.position,{width:O,height:L}=k.dimensions,j=e.current;requestAnimationFrame(()=>{j.style.transform=`translate3d(${_}px, ${M}px, 0)`,j.style.width=`${O}px`,j.style.height=`${L}px`})}),w=Ze.subscribe(k=>{t.current=k.view!=="none",l(),fn.value||(k.view!=="none"?Kt(Zi,k):Yb(Zi))}),S=ae.inspectState.subscribe(k=>{t.current=k.kind==="focused",l()}),T=()=>{l(!0)};return window.addEventListener("resize",T,{passive:!0}),()=>{window.removeEventListener("resize",T),w(),S(),b(),Kt(Or,{...ar,corner:se.value.corner})}},[]);const[h,p]=Ee(!1);Te(()=>{p(!0)},[]);const y=fn.value;let g="";if(y){const{orientation:b="horizontal",corner:w}=y;b==="horizontal"?g=w!=null&&w.endsWith("right")?"rotate-180":"":g=w!=null&&w.startsWith("bottom")?"-rotate-90":"rotate-90"}return v(De,{children:[v(RC,{}),v(Xm.Provider,{value:e.current,children:v("div",{id:"react-scan-toolbar",dir:"ltr",ref:e,onPointerDown:y?d:u,className:$("fixed inset-0",y?(()=>{const{orientation:b="horizontal",corner:w}=y;return b==="horizontal"?w!=null&&w.endsWith("right")?"rounded-tl-lg rounded-bl-lg shadow-lg":"rounded-tr-lg rounded-br-lg shadow-lg":w!=null&&w.startsWith("bottom")?"rounded-tl-lg rounded-tr-lg shadow-lg":"rounded-bl-lg rounded-br-lg shadow-lg"})():"rounded-lg shadow-lg","flex flex-col","font-mono text-[13px]","user-select-none","opacity-0",y?"cursor-pointer":"cursor-move","z-[124124124124]","animate-fade-in animation-duration-300 animation-delay-300","will-change-transform","[touch-action:none]"),children:y?v("button",{type:"button",onClick:()=>{fn.value=null,Kt(su,null),r.current===0&&e.current&&requestAnimationFrame(()=>{if(e.current){e.current.style.width="min-content";const w=e.current.offsetWidth;r.current=w||300,l(!0)}});const b=Dr(Zi);Ze.value=b||{view:"none"}},className:"flex items-center justify-center w-full h-full text-white",title:"Expand toolbar",children:v(ct,{name:"icon-chevron-right",size:16,className:$("transition-transform",g)})}):v(De,{children:[v(Gc,{position:"top"}),v(Gc,{position:"bottom"}),v(Gc,{position:"left"}),v(Gc,{position:"right"}),v(AC,{})]})})})]})},Xm=Fx(null),qC=()=>v("svg",{xmlns:"http://www.w3.org/2000/svg",style:"display: none;",children:[v("title",{children:"React Scan Icons"}),v("symbol",{id:"icon-inspect",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),v("path",{d:"M5 3a2 2 0 0 0-2 2"}),v("path",{d:"M19 3a2 2 0 0 1 2 2"}),v("path",{d:"M5 21a2 2 0 0 1-2-2"}),v("path",{d:"M9 3h1"}),v("path",{d:"M9 21h2"}),v("path",{d:"M14 3h1"}),v("path",{d:"M3 9v1"}),v("path",{d:"M21 9v2"}),v("path",{d:"M3 14v1"})]}),v("symbol",{id:"icon-focus",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),v("path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"})]}),v("symbol",{id:"icon-next",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:v("path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z"})}),v("symbol",{id:"icon-previous",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:v("path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"})}),v("symbol",{id:"icon-close",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),v("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),v("symbol",{id:"icon-replay",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}),v("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),v("path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}),v("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),v("circle",{cx:"12",cy:"12",r:"1"}),v("path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"})]}),v("symbol",{id:"icon-ellipsis",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("circle",{cx:"12",cy:"12",r:"1"}),v("circle",{cx:"19",cy:"12",r:"1"}),v("circle",{cx:"5",cy:"12",r:"1"})]}),v("symbol",{id:"icon-copy",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),v("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]}),v("symbol",{id:"icon-check",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:v("path",{d:"M20 6 9 17l-5-5"})}),v("symbol",{id:"icon-chevron-right",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:v("path",{d:"m9 18 6-6-6-6"})}),v("symbol",{id:"icon-settings",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),v("circle",{cx:"12",cy:"12",r:"3"})]}),v("symbol",{id:"icon-flame",viewBox:"0 0 24 24",children:v("path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"})}),v("symbol",{id:"icon-function",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}),v("path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}),v("path",{d:"M9 11.2h5.7"})]}),v("symbol",{id:"icon-triangle-alert",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}),v("path",{d:"M12 9v4"}),v("path",{d:"M12 17h.01"})]}),v("symbol",{id:"icon-gallery-horizontal-end",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"M2 7v10"}),v("path",{d:"M6 5v14"}),v("rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"})]}),v("symbol",{id:"icon-search",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("circle",{cx:"11",cy:"11",r:"8"}),v("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),v("symbol",{id:"icon-lock",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),v("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),v("symbol",{id:"icon-lock-open",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),v("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"})]}),v("symbol",{id:"icon-sanil",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}),v("circle",{cx:"10",cy:"13",r:"8"}),v("path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}),v("path",{d:"M18 3 19.1 5.2"})]})]}),BC=class extends Dn{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null})}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){var e;return this.state.hasError?v("div",{className:"fixed bottom-4 right-4 z-[124124124124]",children:v("div",{className:"p-3 bg-black rounded-lg shadow-lg w-80",children:[v("div",{className:"flex items-center gap-2 mb-2 text-red-400 text-sm font-medium",children:[v(ct,{name:"icon-flame",className:"text-red-500",size:14}),"React Scan ran into a problem"]}),v("div",{className:"p-2 bg-black rounded font-mono text-xs text-red-300 mb-3 break-words",children:((e=this.state.error)==null?void 0:e.message)||JSON.stringify(this.state.error)}),v("button",{type:"button",onClick:this.handleReset,className:"px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-medium transition-colors flex items-center justify-center gap-1.5",children:"Restart"})]})}):this.props.children}},YC=e=>{const t=document.createElement("div");t.id="react-scan-toolbar-root",window.__REACT_SCAN_TOOLBAR_CONTAINER__=t,e.appendChild(t),Bs(v(BC,{children:v(De,{children:[v(qC,{}),v(IC,{})]})}),t);const r=t.remove.bind(t);return t.remove=()=>{window.__REACT_SCAN_TOOLBAR_CONTAINER__=void 0,t.hasChildNodes()&&(Bs(null,t),Bs(null,t)),r()},t},PC={version:"0.4.3"},Ya=null,Os=null,XC=()=>{if(Ya&&Os)return{rootContainer:Ya,shadowRoot:Os};Ya=document.createElement("div"),Ya.id="react-scan-root",Os=Ya.attachShadow({mode:"open"});const e=document.createElement("style");return e.textContent=l3,Os.appendChild(e),document.documentElement.appendChild(Ya),{rootContainer:Ya,shadowRoot:Os}},ae={wasDetailsOpen:wt(!0),isInIframe:wt(lr&&window.self!==window.top),inspectState:wt({kind:"uninitialized"}),monitor:wt(null),fiberRoots:new Set,reportData:new Map,legacyReportData:new Map,lastReportTime:wt(0),interactionListeningForRenders:null,changesListeners:new Map},Le={instrumentation:null,componentAllowList:null,options:wt({enabled:!0,log:!1,showToolbar:!0,animationSpeed:"fast",dangerouslyForceRunInProduction:!1,showFPS:!0,showNotificationCount:!0,allowInIframe:!1}),runInAllEnvironments:!1,onRender:null,scheduledOutlines:new Map,activeOutlines:new Map,Store:ae,version:PC.version};lr&&window.__REACT_SCAN_EXTENSION__&&(window.__REACT_SCAN_VERSION__=Le.version);function FC(e){return e in Le.options.value}var q1=e=>{const t=[],r={};for(const i in e){if(!FC(i))continue;const s=e[i];switch(i){case"enabled":case"log":case"showToolbar":case"showNotificationCount":case"dangerouslyForceRunInProduction":case"showFPS":case"allowInIframe":typeof s!="boolean"?t.push(`- ${i} must be a boolean. Got "${s}"`):r[i]=s;break;case"animationSpeed":["slow","fast","off"].includes(s)?r[i]=s:t.push(`- Invalid animation speed "${s}". Using default "fast"`);break;case"onCommitStart":typeof s!="function"?t.push(`- ${i} must be a function. Got "${s}"`):r.onCommitStart=s;break;case"onCommitFinish":typeof s!="function"?t.push(`- ${i} must be a function. Got "${s}"`):r.onCommitFinish=s;break;case"onRender":typeof s!="function"?t.push(`- ${i} must be a function. Got "${s}"`):r.onRender=s;break;case"onPaintStart":case"onPaintFinish":typeof s!="function"?t.push(`- ${i} must be a function. Got "${s}"`):r[i]=s;break;default:t.push(`- Unknown option "${i}"`)}}return t.length>0&&console.warn(`[React Scan] Invalid options:
${t.join(`
`)}`),r},GC=e=>{var t;try{const r=q1(e);if(Object.keys(r).length===0)return;const i="showToolbar"in r&&r.showToolbar!==void 0,s={...Le.options.value,...r},{instrumentation:l}=Le;l&&"enabled"in r&&(l.isPaused.value=r.enabled===!1),Le.options.value=s;try{const u=(t=Dr("react-scan-options"))==null?void 0:t.enabled;typeof u=="boolean"&&(s.enabled=u)}catch(u){Le.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",u)}return Kt("react-scan-options",s),i&&B1(!!s.showToolbar),s}catch(r){Le.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",r)}},VC=()=>Le.options,Vc=null,xw,Gu=()=>{if(Vc!==null)return Vc;xw??(xw=ei());for(const e of xw.renderers.values())mk(e)==="production"&&(Vc=!0);return Vc},QC=()=>{try{if(!lr||!Le.runInAllEnvironments&&Gu()&&!Le.options.value.dangerouslyForceRunInProduction)return;const e=Dr("react-scan-options");if(e){const r=q1(e);Object.keys(r).length>0&&(Le.options.value={...Le.options.value,...r})}const t=VC();s3(()=>{B1(!!t.value.showToolbar)}),!ae.monitor.value&&lr&&setTimeout(()=>{gk()||console.error("[React Scan] Failed to load. Must import React Scan before React runs.")},5e3)}catch(e){Le.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}},B1=e=>{var l;(l=window.reactScanCleanupListeners)==null||l.call(window);const t=L3(),r=WC();window.reactScanCleanupListeners=()=>{t(),r==null||r()};const i=window.__REACT_SCAN_TOOLBAR_CONTAINER__;if(!e){i==null||i.remove();return}i==null||i.remove();const{shadowRoot:s}=XC();YC(s)},WC=()=>{try{const e=document.documentElement;return oC(e)}catch(e){Le.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}},ZC=(e={})=>{GC(e),!(ae.isInIframe.value&&!Le.options.value.allowInIframe&&!Le.runInAllEnvironments)&&(e.enabled===!1&&e.showToolbar!==!0||QC())},KC=new WeakSet,Bh={exports:{}},As={},Yh={exports:{}},Ph={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _w;function JC(){return _w||(_w=1,function(e){function t(C,z){var D=C.length;C.push(z);e:for(;0<D;){var F=D-1>>>1,N=C[F];if(0<s(N,z))C[F]=z,C[D]=N,D=F;else break e}}function r(C){return C.length===0?null:C[0]}function i(C){if(C.length===0)return null;var z=C[0],D=C.pop();if(D!==z){C[0]=D;e:for(var F=0,N=C.length,q=N>>>1;F<q;){var Z=2*(F+1)-1,J=C[Z],te=Z+1,oe=C[te];if(0>s(J,D))te<N&&0>s(oe,J)?(C[F]=oe,C[te]=D,F=te):(C[F]=J,C[Z]=D,F=Z);else if(te<N&&0>s(oe,D))C[F]=oe,C[te]=D,F=te;else break e}}return z}function s(C,z){var D=C.sortIndex-z.sortIndex;return D!==0?D:C.id-z.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();e.unstable_now=function(){return u.now()-d}}var h=[],p=[],y=1,g=null,b=3,w=!1,S=!1,T=!1,k=!1,_=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function L(C){for(var z=r(p);z!==null;){if(z.callback===null)i(p);else if(z.startTime<=C)i(p),z.sortIndex=z.expirationTime,t(h,z);else break;z=r(p)}}function j(C){if(T=!1,L(C),!S)if(r(h)!==null)S=!0,X||(X=!0,ie());else{var z=r(p);z!==null&&Ce(j,z.startTime-C)}}var X=!1,G=-1,ee=5,ne=-1;function me(){return k?!0:!(e.unstable_now()-ne<ee)}function de(){if(k=!1,X){var C=e.unstable_now();ne=C;var z=!0;try{e:{S=!1,T&&(T=!1,M(G),G=-1),w=!0;var D=b;try{t:{for(L(C),g=r(h);g!==null&&!(g.expirationTime>C&&me());){var F=g.callback;if(typeof F=="function"){g.callback=null,b=g.priorityLevel;var N=F(g.expirationTime<=C);if(C=e.unstable_now(),typeof N=="function"){g.callback=N,L(C),z=!0;break t}g===r(h)&&i(h),L(C)}else i(h);g=r(h)}if(g!==null)z=!0;else{var q=r(p);q!==null&&Ce(j,q.startTime-C),z=!1}}break e}finally{g=null,b=D,w=!1}z=void 0}}finally{z?ie():X=!1}}}var ie;if(typeof O=="function")ie=function(){O(de)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,je=ze.port2;ze.port1.onmessage=de,ie=function(){je.postMessage(null)}}else ie=function(){_(de,0)};function Ce(C,z){G=_(function(){C(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return b},e.unstable_next=function(C){switch(b){case 1:case 2:case 3:var z=3;break;default:z=b}var D=b;b=z;try{return C()}finally{b=D}},e.unstable_requestPaint=function(){k=!0},e.unstable_runWithPriority=function(C,z){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var D=b;b=C;try{return z()}finally{b=D}},e.unstable_scheduleCallback=function(C,z,D){var F=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?F+D:F):D=F,C){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=D+N,C={id:y++,callback:z,priorityLevel:C,startTime:D,expirationTime:N,sortIndex:-1},D>F?(C.sortIndex=D,t(p,C),r(h)===null&&C===r(p)&&(T?(M(G),G=-1):T=!0,Ce(j,D-F))):(C.sortIndex=N,t(h,C),S||w||(S=!0,X||(X=!0,ie()))),C},e.unstable_shouldYield=me,e.unstable_wrapCallback=function(C){var z=b;return function(){var D=b;b=z;try{return C.apply(this,arguments)}finally{b=D}}}}(Ph)),Ph}var Sw;function e5(){return Sw||(Sw=1,Yh.exports=JC()),Yh.exports}var Xh={exports:{}},It={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tw;function t5(){if(Tw)return It;Tw=1;var e=pl();function t(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var i={d:{f:r,r:function(){throw Error(t(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(h,p,y){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:g==null?null:""+g,children:h,containerInfo:p,implementation:y}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return It.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,It.createPortal=function(h,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return l(h,p,null,y)},It.flushSync=function(h){var p=u.T,y=i.p;try{if(u.T=null,i.p=2,h)return h()}finally{u.T=p,i.p=y,i.d.f()}},It.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,i.d.C(h,p))},It.prefetchDNS=function(h){typeof h=="string"&&i.d.D(h)},It.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var y=p.as,g=d(y,p.crossOrigin),b=typeof p.integrity=="string"?p.integrity:void 0,w=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?i.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:b,fetchPriority:w}):y==="script"&&i.d.X(h,{crossOrigin:g,integrity:b,fetchPriority:w,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},It.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=d(p.as,p.crossOrigin);i.d.M(h,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&i.d.M(h)},It.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,g=d(y,p.crossOrigin);i.d.L(h,y,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},It.preloadModule=function(h,p){if(typeof h=="string")if(p){var y=d(p.as,p.crossOrigin);i.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else i.d.m(h)},It.requestFormReset=function(h){i.d.r(h)},It.unstable_batchedUpdates=function(h,p){return h(p)},It.useFormState=function(h,p,y){return u.H.useFormState(h,p,y)},It.useFormStatus=function(){return u.H.useHostTransitionStatus()},It.version="19.1.0",It}var kw;function n5(){if(kw)return Xh.exports;kw=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Xh.exports=t5(),Xh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ew;function r5(){if(Ew)return As;Ew=1;var e=e5(),t=pl(),r=n5();function i(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)a+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var a=n,o=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(o=a.return),n=a.return;while(n)}return a.tag===3?o:null}function u(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function d(n){if(l(n)!==n)throw Error(i(188))}function h(n){var a=n.alternate;if(!a){if(a=l(n),a===null)throw Error(i(188));return a!==n?null:n}for(var o=n,c=a;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),n;if(m===c)return d(f),a;m=m.sibling}throw Error(i(188))}if(o.return!==c.return)o=f,c=m;else{for(var x=!1,E=f.child;E;){if(E===o){x=!0,o=f,c=m;break}if(E===c){x=!0,c=f,o=m;break}E=E.sibling}if(!x){for(E=m.child;E;){if(E===o){x=!0,o=m,c=f;break}if(E===c){x=!0,c=m,o=f;break}E=E.sibling}if(!x)throw Error(i(189))}}if(o.alternate!==c)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?n:a}function p(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=p(n),a!==null)return a;n=n.sibling}return null}var y=Object.assign,g=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),M=Symbol.for("react.consumer"),O=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),ne=Symbol.for("react.activity"),me=Symbol.for("react.memo_cache_sentinel"),de=Symbol.iterator;function ie(n){return n===null||typeof n!="object"?null:(n=de&&n[de]||n["@@iterator"],typeof n=="function"?n:null)}var ze=Symbol.for("react.client.reference");function je(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===ze?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case S:return"Fragment";case k:return"Profiler";case T:return"StrictMode";case j:return"Suspense";case X:return"SuspenseList";case ne:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case w:return"Portal";case O:return(n.displayName||"Context")+".Provider";case M:return(n._context.displayName||"Context")+".Consumer";case L:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case G:return a=n.displayName||null,a!==null?a:je(n.type)||"Memo";case ee:a=n._payload,n=n._init;try{return je(n(a))}catch{}}return null}var Ce=Array.isArray,C=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D={pending:!1,data:null,method:null,action:null},F=[],N=-1;function q(n){return{current:n}}function Z(n){0>N||(n.current=F[N],F[N]=null,N--)}function J(n,a){N++,F[N]=n.current,n.current=a}var te=q(null),oe=q(null),re=q(null),be=q(null);function fe(n,a){switch(J(re,a),J(oe,n),J(te,null),a.nodeType){case 9:case 11:n=(n=a.documentElement)&&(n=n.namespaceURI)?qy(n):0;break;default:if(n=a.tagName,a=a.namespaceURI)a=qy(a),n=By(a,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Z(te),J(te,n)}function Me(){Z(te),Z(oe),Z(re)}function rt(n){n.memoizedState!==null&&J(be,n);var a=te.current,o=By(a,n.type);a!==o&&(J(oe,n),J(te,o))}function Un(n){oe.current===n&&(Z(te),Z(oe)),be.current===n&&(Z(be),xs._currentValue=D)}var Hr=Object.prototype.hasOwnProperty,Ir=e.unstable_scheduleCallback,di=e.unstable_cancelCallback,g_=e.unstable_shouldYield,v_=e.unstable_requestPaint,Kn=e.unstable_now,y_=e.unstable_getCurrentPriorityLevel,xg=e.unstable_ImmediatePriority,_g=e.unstable_UserBlockingPriority,Tl=e.unstable_NormalPriority,b_=e.unstable_LowPriority,Sg=e.unstable_IdlePriority,w_=e.log,x_=e.unstable_setDisableYieldValue,No=null,nn=null;function qr(n){if(typeof w_=="function"&&x_(n),nn&&typeof nn.setStrictMode=="function")try{nn.setStrictMode(No,n)}catch{}}var rn=Math.clz32?Math.clz32:T_,__=Math.log,S_=Math.LN2;function T_(n){return n>>>=0,n===0?32:31-(__(n)/S_|0)|0}var kl=256,El=4194304;function Sa(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Cl(n,a,o){var c=n.pendingLanes;if(c===0)return 0;var f=0,m=n.suspendedLanes,x=n.pingedLanes;n=n.warmLanes;var E=c&134217727;return E!==0?(c=E&~m,c!==0?f=Sa(c):(x&=E,x!==0?f=Sa(x):o||(o=E&~n,o!==0&&(f=Sa(o))))):(E=c&~m,E!==0?f=Sa(E):x!==0?f=Sa(x):o||(o=c&~n,o!==0&&(f=Sa(o)))),f===0?0:a!==0&&a!==f&&(a&m)===0&&(m=f&-f,o=a&-a,m>=o||m===32&&(o&4194048)!==0)?a:f}function Oo(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function k_(n,a){switch(n){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tg(){var n=kl;return kl<<=1,(kl&4194048)===0&&(kl=256),n}function kg(){var n=El;return El<<=1,(El&62914560)===0&&(El=4194304),n}function od(n){for(var a=[],o=0;31>o;o++)a.push(n);return a}function Ao(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function E_(n,a,o,c,f,m){var x=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var E=n.entanglements,A=n.expirationTimes,B=n.hiddenUpdates;for(o=x&~o;0<o;){var Q=31-rn(o),K=1<<Q;E[Q]=0,A[Q]=-1;var Y=B[Q];if(Y!==null)for(B[Q]=null,Q=0;Q<Y.length;Q++){var P=Y[Q];P!==null&&(P.lane&=-536870913)}o&=~K}c!==0&&Eg(n,c,0),m!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=m&~(x&~a))}function Eg(n,a,o){n.pendingLanes|=a,n.suspendedLanes&=~a;var c=31-rn(a);n.entangledLanes|=a,n.entanglements[c]=n.entanglements[c]|1073741824|o&4194090}function Cg(n,a){var o=n.entangledLanes|=a;for(n=n.entanglements;o;){var c=31-rn(o),f=1<<c;f&a|n[c]&a&&(n[c]|=a),o&=~f}}function sd(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function ld(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Mg(){var n=z.p;return n!==0?n:(n=window.event,n===void 0?32:sb(n.type))}function C_(n,a){var o=z.p;try{return z.p=n,a()}finally{z.p=o}}var Br=Math.random().toString(36).slice(2),Lt="__reactFiber$"+Br,Gt="__reactProps$"+Br,fi="__reactContainer$"+Br,cd="__reactEvents$"+Br,M_="__reactListeners$"+Br,N_="__reactHandles$"+Br,Ng="__reactResources$"+Br,Ro="__reactMarker$"+Br;function ud(n){delete n[Lt],delete n[Gt],delete n[cd],delete n[M_],delete n[N_]}function hi(n){var a=n[Lt];if(a)return a;for(var o=n.parentNode;o;){if(a=o[fi]||o[Lt]){if(o=a.alternate,a.child!==null||o!==null&&o.child!==null)for(n=Fy(n);n!==null;){if(o=n[Lt])return o;n=Fy(n)}return a}n=o,o=n.parentNode}return null}function pi(n){if(n=n[Lt]||n[fi]){var a=n.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return n}return null}function zo(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(i(33))}function mi(n){var a=n[Ng];return a||(a=n[Ng]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function kt(n){n[Ro]=!0}var Og=new Set,Ag={};function Ta(n,a){gi(n,a),gi(n+"Capture",a)}function gi(n,a){for(Ag[n]=a,n=0;n<a.length;n++)Og.add(a[n])}var O_=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rg={},zg={};function A_(n){return Hr.call(zg,n)?!0:Hr.call(Rg,n)?!1:O_.test(n)?zg[n]=!0:(Rg[n]=!0,!1)}function Ml(n,a,o){if(A_(a))if(o===null)n.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var c=a.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+o)}}function Nl(n,a,o){if(o===null)n.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+o)}}function dr(n,a,o,c){if(c===null)n.removeAttribute(o);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(a,o,""+c)}}var dd,Dg;function vi(n){if(dd===void 0)try{throw Error()}catch(o){var a=o.stack.trim().match(/\n( *(at )?)/);dd=a&&a[1]||"",Dg=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+dd+n+Dg}var fd=!1;function hd(n,a){if(!n||fd)return"";fd=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(a){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(P){var Y=P}Reflect.construct(n,[],K)}else{try{K.call()}catch(P){Y=P}n.call(K.prototype)}}else{try{throw Error()}catch(P){Y=P}(K=n())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(P){if(P&&Y&&typeof P.stack=="string")return[P.stack,Y.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),x=m[0],E=m[1];if(x&&E){var A=x.split(`
`),B=E.split(`
`);for(f=c=0;c<A.length&&!A[c].includes("DetermineComponentFrameRoot");)c++;for(;f<B.length&&!B[f].includes("DetermineComponentFrameRoot");)f++;if(c===A.length||f===B.length)for(c=A.length-1,f=B.length-1;1<=c&&0<=f&&A[c]!==B[f];)f--;for(;1<=c&&0<=f;c--,f--)if(A[c]!==B[f]){if(c!==1||f!==1)do if(c--,f--,0>f||A[c]!==B[f]){var Q=`
`+A[c].replace(" at new "," at ");return n.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",n.displayName)),Q}while(1<=c&&0<=f);break}}}finally{fd=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?vi(o):""}function R_(n){switch(n.tag){case 26:case 27:case 5:return vi(n.type);case 16:return vi("Lazy");case 13:return vi("Suspense");case 19:return vi("SuspenseList");case 0:case 15:return hd(n.type,!1);case 11:return hd(n.type.render,!1);case 1:return hd(n.type,!0);case 31:return vi("Activity");default:return""}}function jg(n){try{var a="";do a+=R_(n),n=n.return;while(n);return a}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function wn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ug(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function z_(n){var a=Ug(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,a),c=""+n[a];if(!n.hasOwnProperty(a)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return f.call(this)},set:function(x){c=""+x,m.call(this,x)}}),Object.defineProperty(n,a,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(x){c=""+x},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function Ol(n){n._valueTracker||(n._valueTracker=z_(n))}function Lg(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var o=a.getValue(),c="";return n&&(c=Ug(n)?n.checked?"true":"false":n.value),n=c,n!==o?(a.setValue(n),!0):!1}function Al(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var D_=/[\n"\\]/g;function xn(n){return n.replace(D_,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function pd(n,a,o,c,f,m,x,E){n.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?n.type=x:n.removeAttribute("type"),a!=null?x==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+wn(a)):n.value!==""+wn(a)&&(n.value=""+wn(a)):x!=="submit"&&x!=="reset"||n.removeAttribute("value"),a!=null?md(n,x,wn(a)):o!=null?md(n,x,wn(o)):c!=null&&n.removeAttribute("value"),f==null&&m!=null&&(n.defaultChecked=!!m),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.name=""+wn(E):n.removeAttribute("name")}function $g(n,a,o,c,f,m,x,E){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),a!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||a!=null))return;o=o!=null?""+wn(o):"",a=a!=null?""+wn(a):o,E||a===n.value||(n.value=a),n.defaultValue=a}c=c??f,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=E?n.checked:!!c,n.defaultChecked=!!c,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(n.name=x)}function md(n,a,o){a==="number"&&Al(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function yi(n,a,o,c){if(n=n.options,a){a={};for(var f=0;f<o.length;f++)a["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=a.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&c&&(n[o].defaultSelected=!0)}else{for(o=""+wn(o),a=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}a!==null||n[f].disabled||(a=n[f])}a!==null&&(a.selected=!0)}}function Hg(n,a,o){if(a!=null&&(a=""+wn(a),a!==n.value&&(n.value=a),o==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=o!=null?""+wn(o):""}function Ig(n,a,o,c){if(a==null){if(c!=null){if(o!=null)throw Error(i(92));if(Ce(c)){if(1<c.length)throw Error(i(93));c=c[0]}o=c}o==null&&(o=""),a=o}o=wn(a),n.defaultValue=o,c=n.textContent,c===o&&c!==""&&c!==null&&(n.value=c)}function bi(n,a){if(a){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=a;return}}n.textContent=a}var j_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qg(n,a,o){var c=a.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?c?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":c?n.setProperty(a,o):typeof o!="number"||o===0||j_.has(a)?a==="float"?n.cssFloat=o:n[a]=(""+o).trim():n[a]=o+"px"}function Bg(n,a,o){if(a!=null&&typeof a!="object")throw Error(i(62));if(n=n.style,o!=null){for(var c in o)!o.hasOwnProperty(c)||a!=null&&a.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var f in a)c=a[f],a.hasOwnProperty(f)&&o[f]!==c&&qg(n,f,c)}else for(var m in a)a.hasOwnProperty(m)&&qg(n,m,a[m])}function gd(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var U_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),L_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rl(n){return L_.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var vd=null;function yd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var wi=null,xi=null;function Yg(n){var a=pi(n);if(a&&(n=a.stateNode)){var o=n[Gt]||null;e:switch(n=a.stateNode,a.type){case"input":if(pd(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),a=o.name,o.type==="radio"&&a!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+xn(""+a)+'"][type="radio"]'),a=0;a<o.length;a++){var c=o[a];if(c!==n&&c.form===n.form){var f=c[Gt]||null;if(!f)throw Error(i(90));pd(c,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(a=0;a<o.length;a++)c=o[a],c.form===n.form&&Lg(c)}break e;case"textarea":Hg(n,o.value,o.defaultValue);break e;case"select":a=o.value,a!=null&&yi(n,!!o.multiple,a,!1)}}}var bd=!1;function Pg(n,a,o){if(bd)return n(a,o);bd=!0;try{var c=n(a);return c}finally{if(bd=!1,(wi!==null||xi!==null)&&(vc(),wi&&(a=wi,n=xi,xi=wi=null,Yg(a),n)))for(a=0;a<n.length;a++)Yg(n[a])}}function Do(n,a){var o=n.stateNode;if(o===null)return null;var c=o[Gt]||null;if(c===null)return null;o=c[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(i(231,a,typeof o));return o}var fr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wd=!1;if(fr)try{var jo={};Object.defineProperty(jo,"passive",{get:function(){wd=!0}}),window.addEventListener("test",jo,jo),window.removeEventListener("test",jo,jo)}catch{wd=!1}var Yr=null,xd=null,zl=null;function Xg(){if(zl)return zl;var n,a=xd,o=a.length,c,f="value"in Yr?Yr.value:Yr.textContent,m=f.length;for(n=0;n<o&&a[n]===f[n];n++);var x=o-n;for(c=1;c<=x&&a[o-c]===f[m-c];c++);return zl=f.slice(n,1<c?1-c:void 0)}function Dl(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function jl(){return!0}function Fg(){return!1}function Vt(n){function a(o,c,f,m,x){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=x,this.currentTarget=null;for(var E in n)n.hasOwnProperty(E)&&(o=n[E],this[E]=o?o(m):m[E]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?jl:Fg,this.isPropagationStopped=Fg,this}return y(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=jl)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=jl)},persist:function(){},isPersistent:jl}),a}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ul=Vt(ka),Uo=y({},ka,{view:0,detail:0}),$_=Vt(Uo),_d,Sd,Lo,Ll=y({},Uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kd,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Lo&&(Lo&&n.type==="mousemove"?(_d=n.screenX-Lo.screenX,Sd=n.screenY-Lo.screenY):Sd=_d=0,Lo=n),_d)},movementY:function(n){return"movementY"in n?n.movementY:Sd}}),Gg=Vt(Ll),H_=y({},Ll,{dataTransfer:0}),I_=Vt(H_),q_=y({},Uo,{relatedTarget:0}),Td=Vt(q_),B_=y({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),Y_=Vt(B_),P_=y({},ka,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),X_=Vt(P_),F_=y({},ka,{data:0}),Vg=Vt(F_),G_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},V_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W_(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=Q_[n])?!!a[n]:!1}function kd(){return W_}var Z_=y({},Uo,{key:function(n){if(n.key){var a=G_[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=Dl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?V_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kd,charCode:function(n){return n.type==="keypress"?Dl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Dl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),K_=Vt(Z_),J_=y({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qg=Vt(J_),eS=y({},Uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kd}),tS=Vt(eS),nS=y({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),rS=Vt(nS),aS=y({},Ll,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),iS=Vt(aS),oS=y({},ka,{newState:0,oldState:0}),sS=Vt(oS),lS=[9,13,27,32],Ed=fr&&"CompositionEvent"in window,$o=null;fr&&"documentMode"in document&&($o=document.documentMode);var cS=fr&&"TextEvent"in window&&!$o,Wg=fr&&(!Ed||$o&&8<$o&&11>=$o),Zg=" ",Kg=!1;function Jg(n,a){switch(n){case"keyup":return lS.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ev(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var _i=!1;function uS(n,a){switch(n){case"compositionend":return ev(a);case"keypress":return a.which!==32?null:(Kg=!0,Zg);case"textInput":return n=a.data,n===Zg&&Kg?null:n;default:return null}}function dS(n,a){if(_i)return n==="compositionend"||!Ed&&Jg(n,a)?(n=Xg(),zl=xd=Yr=null,_i=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Wg&&a.locale!=="ko"?null:a.data;default:return null}}var fS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tv(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!fS[n.type]:a==="textarea"}function nv(n,a,o,c){wi?xi?xi.push(c):xi=[c]:wi=c,a=Sc(a,"onChange"),0<a.length&&(o=new Ul("onChange","change",null,o,c),n.push({event:o,listeners:a}))}var Ho=null,Io=null;function hS(n){Uy(n,0)}function $l(n){var a=zo(n);if(Lg(a))return n}function rv(n,a){if(n==="change")return a}var av=!1;if(fr){var Cd;if(fr){var Md="oninput"in document;if(!Md){var iv=document.createElement("div");iv.setAttribute("oninput","return;"),Md=typeof iv.oninput=="function"}Cd=Md}else Cd=!1;av=Cd&&(!document.documentMode||9<document.documentMode)}function ov(){Ho&&(Ho.detachEvent("onpropertychange",sv),Io=Ho=null)}function sv(n){if(n.propertyName==="value"&&$l(Io)){var a=[];nv(a,Io,n,yd(n)),Pg(hS,a)}}function pS(n,a,o){n==="focusin"?(ov(),Ho=a,Io=o,Ho.attachEvent("onpropertychange",sv)):n==="focusout"&&ov()}function mS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return $l(Io)}function gS(n,a){if(n==="click")return $l(a)}function vS(n,a){if(n==="input"||n==="change")return $l(a)}function yS(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var an=typeof Object.is=="function"?Object.is:yS;function qo(n,a){if(an(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var o=Object.keys(n),c=Object.keys(a);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!Hr.call(a,f)||!an(n[f],a[f]))return!1}return!0}function lv(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function cv(n,a){var o=lv(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=a&&c>=a)return{node:o,offset:a-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=lv(o)}}function uv(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?uv(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function dv(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=Al(n.document);a instanceof n.HTMLIFrameElement;){try{var o=typeof a.contentWindow.location.href=="string"}catch{o=!1}if(o)n=a.contentWindow;else break;a=Al(n.document)}return a}function Nd(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}var bS=fr&&"documentMode"in document&&11>=document.documentMode,Si=null,Od=null,Bo=null,Ad=!1;function fv(n,a,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ad||Si==null||Si!==Al(c)||(c=Si,"selectionStart"in c&&Nd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Bo&&qo(Bo,c)||(Bo=c,c=Sc(Od,"onSelect"),0<c.length&&(a=new Ul("onSelect","select",null,a,o),n.push({event:a,listeners:c}),a.target=Si)))}function Ea(n,a){var o={};return o[n.toLowerCase()]=a.toLowerCase(),o["Webkit"+n]="webkit"+a,o["Moz"+n]="moz"+a,o}var Ti={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionrun:Ea("Transition","TransitionRun"),transitionstart:Ea("Transition","TransitionStart"),transitioncancel:Ea("Transition","TransitionCancel"),transitionend:Ea("Transition","TransitionEnd")},Rd={},hv={};fr&&(hv=document.createElement("div").style,"AnimationEvent"in window||(delete Ti.animationend.animation,delete Ti.animationiteration.animation,delete Ti.animationstart.animation),"TransitionEvent"in window||delete Ti.transitionend.transition);function Ca(n){if(Rd[n])return Rd[n];if(!Ti[n])return n;var a=Ti[n],o;for(o in a)if(a.hasOwnProperty(o)&&o in hv)return Rd[n]=a[o];return n}var pv=Ca("animationend"),mv=Ca("animationiteration"),gv=Ca("animationstart"),wS=Ca("transitionrun"),xS=Ca("transitionstart"),_S=Ca("transitioncancel"),vv=Ca("transitionend"),yv=new Map,zd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zd.push("scrollEnd");function Ln(n,a){yv.set(n,a),Ta(a,[n])}var bv=new WeakMap;function _n(n,a){if(typeof n=="object"&&n!==null){var o=bv.get(n);return o!==void 0?o:(a={value:n,source:a,stack:jg(a)},bv.set(n,a),a)}return{value:n,source:a,stack:jg(a)}}var Sn=[],ki=0,Dd=0;function Hl(){for(var n=ki,a=Dd=ki=0;a<n;){var o=Sn[a];Sn[a++]=null;var c=Sn[a];Sn[a++]=null;var f=Sn[a];Sn[a++]=null;var m=Sn[a];if(Sn[a++]=null,c!==null&&f!==null){var x=c.pending;x===null?f.next=f:(f.next=x.next,x.next=f),c.pending=f}m!==0&&wv(o,f,m)}}function Il(n,a,o,c){Sn[ki++]=n,Sn[ki++]=a,Sn[ki++]=o,Sn[ki++]=c,Dd|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function jd(n,a,o,c){return Il(n,a,o,c),ql(n)}function Ei(n,a){return Il(n,null,null,a),ql(n)}function wv(n,a,o){n.lanes|=o;var c=n.alternate;c!==null&&(c.lanes|=o);for(var f=!1,m=n.return;m!==null;)m.childLanes|=o,c=m.alternate,c!==null&&(c.childLanes|=o),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(f=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,f&&a!==null&&(f=31-rn(o),n=m.hiddenUpdates,c=n[f],c===null?n[f]=[a]:c.push(a),a.lane=o|536870912),m):null}function ql(n){if(50<hs)throw hs=0,Bf=null,Error(i(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var Ci={};function SS(n,a,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(n,a,o,c){return new SS(n,a,o,c)}function Ud(n){return n=n.prototype,!(!n||!n.isReactComponent)}function hr(n,a){var o=n.alternate;return o===null?(o=on(n.tag,a,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=a,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,a=n.dependencies,o.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function xv(n,a){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,a=o.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function Bl(n,a,o,c,f,m){var x=0;if(c=n,typeof n=="function")Ud(n)&&(x=1);else if(typeof n=="string")x=kT(n,o,te.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case ne:return n=on(31,o,a,f),n.elementType=ne,n.lanes=m,n;case S:return Ma(o.children,f,m,a);case T:x=8,f|=24;break;case k:return n=on(12,o,a,f|2),n.elementType=k,n.lanes=m,n;case j:return n=on(13,o,a,f),n.elementType=j,n.lanes=m,n;case X:return n=on(19,o,a,f),n.elementType=X,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case _:case O:x=10;break e;case M:x=9;break e;case L:x=11;break e;case G:x=14;break e;case ee:x=16,c=null;break e}x=29,o=Error(i(130,n===null?"null":typeof n,"")),c=null}return a=on(x,o,a,f),a.elementType=n,a.type=c,a.lanes=m,a}function Ma(n,a,o,c){return n=on(7,n,c,a),n.lanes=o,n}function Ld(n,a,o){return n=on(6,n,null,a),n.lanes=o,n}function $d(n,a,o){return a=on(4,n.children!==null?n.children:[],n.key,a),a.lanes=o,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}var Mi=[],Ni=0,Yl=null,Pl=0,Tn=[],kn=0,Na=null,pr=1,mr="";function Oa(n,a){Mi[Ni++]=Pl,Mi[Ni++]=Yl,Yl=n,Pl=a}function _v(n,a,o){Tn[kn++]=pr,Tn[kn++]=mr,Tn[kn++]=Na,Na=n;var c=pr;n=mr;var f=32-rn(c)-1;c&=~(1<<f),o+=1;var m=32-rn(a)+f;if(30<m){var x=f-f%5;m=(c&(1<<x)-1).toString(32),c>>=x,f-=x,pr=1<<32-rn(a)+f|o<<f|c,mr=m+n}else pr=1<<m|o<<f|c,mr=n}function Hd(n){n.return!==null&&(Oa(n,1),_v(n,1,0))}function Id(n){for(;n===Yl;)Yl=Mi[--Ni],Mi[Ni]=null,Pl=Mi[--Ni],Mi[Ni]=null;for(;n===Na;)Na=Tn[--kn],Tn[kn]=null,mr=Tn[--kn],Tn[kn]=null,pr=Tn[--kn],Tn[kn]=null}var Yt=null,ot=null,He=!1,Aa=null,Jn=!1,qd=Error(i(519));function Ra(n){var a=Error(i(418,""));throw Xo(_n(a,n)),qd}function Sv(n){var a=n.stateNode,o=n.type,c=n.memoizedProps;switch(a[Lt]=n,a[Gt]=c,o){case"dialog":Ae("cancel",a),Ae("close",a);break;case"iframe":case"object":case"embed":Ae("load",a);break;case"video":case"audio":for(o=0;o<ms.length;o++)Ae(ms[o],a);break;case"source":Ae("error",a);break;case"img":case"image":case"link":Ae("error",a),Ae("load",a);break;case"details":Ae("toggle",a);break;case"input":Ae("invalid",a),$g(a,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Ol(a);break;case"select":Ae("invalid",a);break;case"textarea":Ae("invalid",a),Ig(a,c.value,c.defaultValue,c.children),Ol(a)}o=c.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||a.textContent===""+o||c.suppressHydrationWarning===!0||Iy(a.textContent,o)?(c.popover!=null&&(Ae("beforetoggle",a),Ae("toggle",a)),c.onScroll!=null&&Ae("scroll",a),c.onScrollEnd!=null&&Ae("scrollend",a),c.onClick!=null&&(a.onclick=Tc),a=!0):a=!1,a||Ra(n)}function Tv(n){for(Yt=n.return;Yt;)switch(Yt.tag){case 5:case 13:Jn=!1;return;case 27:case 3:Jn=!0;return;default:Yt=Yt.return}}function Yo(n){if(n!==Yt)return!1;if(!He)return Tv(n),He=!0,!1;var a=n.tag,o;if((o=a!==3&&a!==27)&&((o=a===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||ah(n.type,n.memoizedProps)),o=!o),o&&ot&&Ra(n),Tv(n),a===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));e:{for(n=n.nextSibling,a=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(a===0){ot=Hn(n.nextSibling);break e}a--}else o!=="$"&&o!=="$!"&&o!=="$?"||a++;n=n.nextSibling}ot=null}}else a===27?(a=ot,ia(n.type)?(n=lh,lh=null,ot=n):ot=a):ot=Yt?Hn(n.stateNode.nextSibling):null;return!0}function Po(){ot=Yt=null,He=!1}function kv(){var n=Aa;return n!==null&&(Zt===null?Zt=n:Zt.push.apply(Zt,n),Aa=null),n}function Xo(n){Aa===null?Aa=[n]:Aa.push(n)}var Bd=q(null),za=null,gr=null;function Pr(n,a,o){J(Bd,a._currentValue),a._currentValue=o}function vr(n){n._currentValue=Bd.current,Z(Bd)}function Yd(n,a,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,c!==null&&(c.childLanes|=a)):c!==null&&(c.childLanes&a)!==a&&(c.childLanes|=a),n===o)break;n=n.return}}function Pd(n,a,o,c){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var m=f.dependencies;if(m!==null){var x=f.child;m=m.firstContext;e:for(;m!==null;){var E=m;m=f;for(var A=0;A<a.length;A++)if(E.context===a[A]){m.lanes|=o,E=m.alternate,E!==null&&(E.lanes|=o),Yd(m.return,o,n),c||(x=null);break e}m=E.next}}else if(f.tag===18){if(x=f.return,x===null)throw Error(i(341));x.lanes|=o,m=x.alternate,m!==null&&(m.lanes|=o),Yd(x,o,n),x=null}else x=f.child;if(x!==null)x.return=f;else for(x=f;x!==null;){if(x===n){x=null;break}if(f=x.sibling,f!==null){f.return=x.return,x=f;break}x=x.return}f=x}}function Fo(n,a,o,c){n=null;for(var f=a,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var x=f.alternate;if(x===null)throw Error(i(387));if(x=x.memoizedProps,x!==null){var E=f.type;an(f.pendingProps.value,x.value)||(n!==null?n.push(E):n=[E])}}else if(f===be.current){if(x=f.alternate,x===null)throw Error(i(387));x.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(xs):n=[xs])}f=f.return}n!==null&&Pd(a,n,o,c),a.flags|=262144}function Xl(n){for(n=n.firstContext;n!==null;){if(!an(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Da(n){za=n,gr=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function $t(n){return Ev(za,n)}function Fl(n,a){return za===null&&Da(n),Ev(n,a)}function Ev(n,a){var o=a._currentValue;if(a={context:a,memoizedValue:o,next:null},gr===null){if(n===null)throw Error(i(308));gr=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else gr=gr.next=a;return o}var TS=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(o,c){n.push(c)}};this.abort=function(){a.aborted=!0,n.forEach(function(o){return o()})}},kS=e.unstable_scheduleCallback,ES=e.unstable_NormalPriority,xt={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xd(){return{controller:new TS,data:new Map,refCount:0}}function Go(n){n.refCount--,n.refCount===0&&kS(ES,function(){n.controller.abort()})}var Vo=null,Fd=0,Oi=0,Ai=null;function CS(n,a){if(Vo===null){var o=Vo=[];Fd=0,Oi=Qf(),Ai={status:"pending",value:void 0,then:function(c){o.push(c)}}}return Fd++,a.then(Cv,Cv),a}function Cv(){if(--Fd===0&&Vo!==null){Ai!==null&&(Ai.status="fulfilled");var n=Vo;Vo=null,Oi=0,Ai=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function MS(n,a){var o=[],c={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return n.then(function(){c.status="fulfilled",c.value=a;for(var f=0;f<o.length;f++)(0,o[f])(a)},function(f){for(c.status="rejected",c.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),c}var Mv=C.S;C.S=function(n,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&CS(n,a),Mv!==null&&Mv(n,a)};var ja=q(null);function Gd(){var n=ja.current;return n!==null?n:Qe.pooledCache}function Gl(n,a){a===null?J(ja,ja.current):J(ja,a.pool)}function Nv(){var n=Gd();return n===null?null:{parent:xt._currentValue,pool:n}}var Qo=Error(i(460)),Ov=Error(i(474)),Vl=Error(i(542)),Vd={then:function(){}};function Av(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Ql(){}function Rv(n,a,o){switch(o=n[o],o===void 0?n.push(a):o!==a&&(a.then(Ql,Ql),a=o),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,Dv(n),n;default:if(typeof a.status=="string")a.then(Ql,Ql);else{if(n=Qe,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=a,n.status="pending",n.then(function(c){if(a.status==="pending"){var f=a;f.status="fulfilled",f.value=c}},function(c){if(a.status==="pending"){var f=a;f.status="rejected",f.reason=c}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,Dv(n),n}throw Wo=a,Qo}}var Wo=null;function zv(){if(Wo===null)throw Error(i(459));var n=Wo;return Wo=null,n}function Dv(n){if(n===Qo||n===Vl)throw Error(i(483))}var Xr=!1;function Qd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wd(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Fr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Gr(n,a,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Be&2)!==0){var f=c.pending;return f===null?a.next=a:(a.next=f.next,f.next=a),c.pending=a,a=ql(n),wv(n,null,o),a}return Il(n,c,a,o),ql(n)}function Zo(n,a,o){if(a=a.updateQueue,a!==null&&(a=a.shared,(o&4194048)!==0)){var c=a.lanes;c&=n.pendingLanes,o|=c,a.lanes=o,Cg(n,o)}}function Zd(n,a){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var x={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=x:m=m.next=x,o=o.next}while(o!==null);m===null?f=m=a:m=m.next=a}else f=m=a;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=a:n.next=a,o.lastBaseUpdate=a}var Kd=!1;function Ko(){if(Kd){var n=Ai;if(n!==null)throw n}}function Jo(n,a,o,c){Kd=!1;var f=n.updateQueue;Xr=!1;var m=f.firstBaseUpdate,x=f.lastBaseUpdate,E=f.shared.pending;if(E!==null){f.shared.pending=null;var A=E,B=A.next;A.next=null,x===null?m=B:x.next=B,x=A;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,E=Q.lastBaseUpdate,E!==x&&(E===null?Q.firstBaseUpdate=B:E.next=B,Q.lastBaseUpdate=A))}if(m!==null){var K=f.baseState;x=0,Q=B=A=null,E=m;do{var Y=E.lane&-536870913,P=Y!==E.lane;if(P?(Ue&Y)===Y:(c&Y)===Y){Y!==0&&Y===Oi&&(Kd=!0),Q!==null&&(Q=Q.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var ye=n,ge=E;Y=a;var Fe=o;switch(ge.tag){case 1:if(ye=ge.payload,typeof ye=="function"){K=ye.call(Fe,K,Y);break e}K=ye;break e;case 3:ye.flags=ye.flags&-65537|128;case 0:if(ye=ge.payload,Y=typeof ye=="function"?ye.call(Fe,K,Y):ye,Y==null)break e;K=y({},K,Y);break e;case 2:Xr=!0}}Y=E.callback,Y!==null&&(n.flags|=64,P&&(n.flags|=8192),P=f.callbacks,P===null?f.callbacks=[Y]:P.push(Y))}else P={lane:Y,tag:E.tag,payload:E.payload,callback:E.callback,next:null},Q===null?(B=Q=P,A=K):Q=Q.next=P,x|=Y;if(E=E.next,E===null){if(E=f.shared.pending,E===null)break;P=E,E=P.next,P.next=null,f.lastBaseUpdate=P,f.shared.pending=null}}while(!0);Q===null&&(A=K),f.baseState=A,f.firstBaseUpdate=B,f.lastBaseUpdate=Q,m===null&&(f.shared.lanes=0),ta|=x,n.lanes=x,n.memoizedState=K}}function jv(n,a){if(typeof n!="function")throw Error(i(191,n));n.call(a)}function Uv(n,a){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)jv(o[n],a)}var Ri=q(null),Wl=q(0);function Lv(n,a){n=Tr,J(Wl,n),J(Ri,a),Tr=n|a.baseLanes}function Jd(){J(Wl,Tr),J(Ri,Ri.current)}function ef(){Tr=Wl.current,Z(Ri),Z(Wl)}var Vr=0,ke=null,Pe=null,gt=null,Zl=!1,zi=!1,Ua=!1,Kl=0,es=0,Di=null,NS=0;function ut(){throw Error(i(321))}function tf(n,a){if(a===null)return!1;for(var o=0;o<a.length&&o<n.length;o++)if(!an(n[o],a[o]))return!1;return!0}function nf(n,a,o,c,f,m){return Vr=m,ke=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,C.H=n===null||n.memoizedState===null?w0:x0,Ua=!1,m=o(c,f),Ua=!1,zi&&(m=Hv(a,o,c,f)),$v(n),m}function $v(n){C.H=ac;var a=Pe!==null&&Pe.next!==null;if(Vr=0,gt=Pe=ke=null,Zl=!1,es=0,Di=null,a)throw Error(i(300));n===null||Et||(n=n.dependencies,n!==null&&Xl(n)&&(Et=!0))}function Hv(n,a,o,c){ke=n;var f=0;do{if(zi&&(Di=null),es=0,zi=!1,25<=f)throw Error(i(301));if(f+=1,gt=Pe=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}C.H=US,m=a(o,c)}while(zi);return m}function OS(){var n=C.H,a=n.useState()[0];return a=typeof a.then=="function"?ts(a):a,n=n.useState()[0],(Pe!==null?Pe.memoizedState:null)!==n&&(ke.flags|=1024),a}function rf(){var n=Kl!==0;return Kl=0,n}function af(n,a,o){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~o}function of(n){if(Zl){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}Zl=!1}Vr=0,gt=Pe=ke=null,zi=!1,es=Kl=0,Di=null}function Qt(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?ke.memoizedState=gt=n:gt=gt.next=n,gt}function vt(){if(Pe===null){var n=ke.alternate;n=n!==null?n.memoizedState:null}else n=Pe.next;var a=gt===null?ke.memoizedState:gt.next;if(a!==null)gt=a,Pe=n;else{if(n===null)throw ke.alternate===null?Error(i(467)):Error(i(310));Pe=n,n={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},gt===null?ke.memoizedState=gt=n:gt=gt.next=n}return gt}function sf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ts(n){var a=es;return es+=1,Di===null&&(Di=[]),n=Rv(Di,n,a),a=ke,(gt===null?a.memoizedState:gt.next)===null&&(a=a.alternate,C.H=a===null||a.memoizedState===null?w0:x0),n}function Jl(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return ts(n);if(n.$$typeof===O)return $t(n)}throw Error(i(438,String(n)))}function lf(n){var a=null,o=ke.updateQueue;if(o!==null&&(a=o.memoCache),a==null){var c=ke.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(a={data:c.data.map(function(f){return f.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),o===null&&(o=sf(),ke.updateQueue=o),o.memoCache=a,o=a.data[a.index],o===void 0)for(o=a.data[a.index]=Array(n),c=0;c<n;c++)o[c]=me;return a.index++,o}function yr(n,a){return typeof a=="function"?a(n):a}function ec(n){var a=vt();return cf(a,Pe,n)}function cf(n,a,o){var c=n.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=o;var f=n.baseQueue,m=c.pending;if(m!==null){if(f!==null){var x=f.next;f.next=m.next,m.next=x}a.baseQueue=f=m,c.pending=null}if(m=n.baseState,f===null)n.memoizedState=m;else{a=f.next;var E=x=null,A=null,B=a,Q=!1;do{var K=B.lane&-536870913;if(K!==B.lane?(Ue&K)===K:(Vr&K)===K){var Y=B.revertLane;if(Y===0)A!==null&&(A=A.next={lane:0,revertLane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),K===Oi&&(Q=!0);else if((Vr&Y)===Y){B=B.next,Y===Oi&&(Q=!0);continue}else K={lane:0,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},A===null?(E=A=K,x=m):A=A.next=K,ke.lanes|=Y,ta|=Y;K=B.action,Ua&&o(m,K),m=B.hasEagerState?B.eagerState:o(m,K)}else Y={lane:K,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},A===null?(E=A=Y,x=m):A=A.next=Y,ke.lanes|=K,ta|=K;B=B.next}while(B!==null&&B!==a);if(A===null?x=m:A.next=E,!an(m,n.memoizedState)&&(Et=!0,Q&&(o=Ai,o!==null)))throw o;n.memoizedState=m,n.baseState=x,n.baseQueue=A,c.lastRenderedState=m}return f===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function uf(n){var a=vt(),o=a.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=n;var c=o.dispatch,f=o.pending,m=a.memoizedState;if(f!==null){o.pending=null;var x=f=f.next;do m=n(m,x.action),x=x.next;while(x!==f);an(m,a.memoizedState)||(Et=!0),a.memoizedState=m,a.baseQueue===null&&(a.baseState=m),o.lastRenderedState=m}return[m,c]}function Iv(n,a,o){var c=ke,f=vt(),m=He;if(m){if(o===void 0)throw Error(i(407));o=o()}else o=a();var x=!an((Pe||f).memoizedState,o);x&&(f.memoizedState=o,Et=!0),f=f.queue;var E=Yv.bind(null,c,f,n);if(ns(2048,8,E,[n]),f.getSnapshot!==a||x||gt!==null&&gt.memoizedState.tag&1){if(c.flags|=2048,ji(9,tc(),Bv.bind(null,c,f,o,a),null),Qe===null)throw Error(i(349));m||(Vr&124)!==0||qv(c,a,o)}return o}function qv(n,a,o){n.flags|=16384,n={getSnapshot:a,value:o},a=ke.updateQueue,a===null?(a=sf(),ke.updateQueue=a,a.stores=[n]):(o=a.stores,o===null?a.stores=[n]:o.push(n))}function Bv(n,a,o,c){a.value=o,a.getSnapshot=c,Pv(a)&&Xv(n)}function Yv(n,a,o){return o(function(){Pv(a)&&Xv(n)})}function Pv(n){var a=n.getSnapshot;n=n.value;try{var o=a();return!an(n,o)}catch{return!0}}function Xv(n){var a=Ei(n,2);a!==null&&dn(a,n,2)}function df(n){var a=Qt();if(typeof n=="function"){var o=n;if(n=o(),Ua){qr(!0);try{o()}finally{qr(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yr,lastRenderedState:n},a}function Fv(n,a,o,c){return n.baseState=o,cf(n,Pe,typeof c=="function"?c:yr)}function AS(n,a,o,c,f){if(rc(n))throw Error(i(485));if(n=a.action,n!==null){var m={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){m.listeners.push(x)}};C.T!==null?o(!0):m.isTransition=!1,c(m),o=a.pending,o===null?(m.next=a.pending=m,Gv(a,m)):(m.next=o.next,a.pending=o.next=m)}}function Gv(n,a){var o=a.action,c=a.payload,f=n.state;if(a.isTransition){var m=C.T,x={};C.T=x;try{var E=o(f,c),A=C.S;A!==null&&A(x,E),Vv(n,a,E)}catch(B){ff(n,a,B)}finally{C.T=m}}else try{m=o(f,c),Vv(n,a,m)}catch(B){ff(n,a,B)}}function Vv(n,a,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(c){Qv(n,a,c)},function(c){return ff(n,a,c)}):Qv(n,a,o)}function Qv(n,a,o){a.status="fulfilled",a.value=o,Wv(a),n.state=o,a=n.pending,a!==null&&(o=a.next,o===a?n.pending=null:(o=o.next,a.next=o,Gv(n,o)))}function ff(n,a,o){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do a.status="rejected",a.reason=o,Wv(a),a=a.next;while(a!==c)}n.action=null}function Wv(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function Zv(n,a){return a}function Kv(n,a){if(He){var o=Qe.formState;if(o!==null){e:{var c=ke;if(He){if(ot){t:{for(var f=ot,m=Jn;f.nodeType!==8;){if(!m){f=null;break t}if(f=Hn(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){ot=Hn(f.nextSibling),c=f.data==="F!";break e}}Ra(c)}c=!1}c&&(a=o[0])}}return o=Qt(),o.memoizedState=o.baseState=a,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zv,lastRenderedState:a},o.queue=c,o=v0.bind(null,ke,c),c.dispatch=o,c=df(!1),m=vf.bind(null,ke,!1,c.queue),c=Qt(),f={state:a,dispatch:null,action:n,pending:null},c.queue=f,o=AS.bind(null,ke,f,m,o),f.dispatch=o,c.memoizedState=n,[a,o,!1]}function Jv(n){var a=vt();return e0(a,Pe,n)}function e0(n,a,o){if(a=cf(n,a,Zv)[0],n=ec(yr)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var c=ts(a)}catch(x){throw x===Qo?Vl:x}else c=a;a=vt();var f=a.queue,m=f.dispatch;return o!==a.memoizedState&&(ke.flags|=2048,ji(9,tc(),RS.bind(null,f,o),null)),[c,m,n]}function RS(n,a){n.action=a}function t0(n){var a=vt(),o=Pe;if(o!==null)return e0(a,o,n);vt(),a=a.memoizedState,o=vt();var c=o.queue.dispatch;return o.memoizedState=n,[a,c,!1]}function ji(n,a,o,c){return n={tag:n,create:o,deps:c,inst:a,next:null},a=ke.updateQueue,a===null&&(a=sf(),ke.updateQueue=a),o=a.lastEffect,o===null?a.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,a.lastEffect=n),n}function tc(){return{destroy:void 0,resource:void 0}}function n0(){return vt().memoizedState}function nc(n,a,o,c){var f=Qt();c=c===void 0?null:c,ke.flags|=n,f.memoizedState=ji(1|a,tc(),o,c)}function ns(n,a,o,c){var f=vt();c=c===void 0?null:c;var m=f.memoizedState.inst;Pe!==null&&c!==null&&tf(c,Pe.memoizedState.deps)?f.memoizedState=ji(a,m,o,c):(ke.flags|=n,f.memoizedState=ji(1|a,m,o,c))}function r0(n,a){nc(8390656,8,n,a)}function a0(n,a){ns(2048,8,n,a)}function i0(n,a){return ns(4,2,n,a)}function o0(n,a){return ns(4,4,n,a)}function s0(n,a){if(typeof a=="function"){n=n();var o=a(n);return function(){typeof o=="function"?o():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function l0(n,a,o){o=o!=null?o.concat([n]):null,ns(4,4,s0.bind(null,a,n),o)}function hf(){}function c0(n,a){var o=vt();a=a===void 0?null:a;var c=o.memoizedState;return a!==null&&tf(a,c[1])?c[0]:(o.memoizedState=[n,a],n)}function u0(n,a){var o=vt();a=a===void 0?null:a;var c=o.memoizedState;if(a!==null&&tf(a,c[1]))return c[0];if(c=n(),Ua){qr(!0);try{n()}finally{qr(!1)}}return o.memoizedState=[c,a],c}function pf(n,a,o){return o===void 0||(Vr&1073741824)!==0?n.memoizedState=a:(n.memoizedState=o,n=hy(),ke.lanes|=n,ta|=n,o)}function d0(n,a,o,c){return an(o,a)?o:Ri.current!==null?(n=pf(n,o,c),an(n,a)||(Et=!0),n):(Vr&42)===0?(Et=!0,n.memoizedState=o):(n=hy(),ke.lanes|=n,ta|=n,a)}function f0(n,a,o,c,f){var m=z.p;z.p=m!==0&&8>m?m:8;var x=C.T,E={};C.T=E,vf(n,!1,a,o);try{var A=f(),B=C.S;if(B!==null&&B(E,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var Q=MS(A,c);rs(n,a,Q,un(n))}else rs(n,a,c,un(n))}catch(K){rs(n,a,{then:function(){},status:"rejected",reason:K},un())}finally{z.p=m,C.T=x}}function zS(){}function mf(n,a,o,c){if(n.tag!==5)throw Error(i(476));var f=h0(n).queue;f0(n,f,a,D,o===null?zS:function(){return p0(n),o(c)})}function h0(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:D,baseState:D,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yr,lastRenderedState:D},next:null};var o={};return a.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yr,lastRenderedState:o},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function p0(n){var a=h0(n).next.queue;rs(n,a,{},un())}function gf(){return $t(xs)}function m0(){return vt().memoizedState}function g0(){return vt().memoizedState}function DS(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var o=un();n=Fr(o);var c=Gr(a,n,o);c!==null&&(dn(c,a,o),Zo(c,a,o)),a={cache:Xd()},n.payload=a;return}a=a.return}}function jS(n,a,o){var c=un();o={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},rc(n)?y0(a,o):(o=jd(n,a,o,c),o!==null&&(dn(o,n,c),b0(o,a,c)))}function v0(n,a,o){var c=un();rs(n,a,o,c)}function rs(n,a,o,c){var f={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(rc(n))y0(a,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=a.lastRenderedReducer,m!==null))try{var x=a.lastRenderedState,E=m(x,o);if(f.hasEagerState=!0,f.eagerState=E,an(E,x))return Il(n,a,f,0),Qe===null&&Hl(),!1}catch{}finally{}if(o=jd(n,a,f,c),o!==null)return dn(o,n,c),b0(o,a,c),!0}return!1}function vf(n,a,o,c){if(c={lane:2,revertLane:Qf(),action:c,hasEagerState:!1,eagerState:null,next:null},rc(n)){if(a)throw Error(i(479))}else a=jd(n,o,c,2),a!==null&&dn(a,n,2)}function rc(n){var a=n.alternate;return n===ke||a!==null&&a===ke}function y0(n,a){zi=Zl=!0;var o=n.pending;o===null?a.next=a:(a.next=o.next,o.next=a),n.pending=a}function b0(n,a,o){if((o&4194048)!==0){var c=a.lanes;c&=n.pendingLanes,o|=c,a.lanes=o,Cg(n,o)}}var ac={readContext:$t,use:Jl,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useLayoutEffect:ut,useInsertionEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useSyncExternalStore:ut,useId:ut,useHostTransitionStatus:ut,useFormState:ut,useActionState:ut,useOptimistic:ut,useMemoCache:ut,useCacheRefresh:ut},w0={readContext:$t,use:Jl,useCallback:function(n,a){return Qt().memoizedState=[n,a===void 0?null:a],n},useContext:$t,useEffect:r0,useImperativeHandle:function(n,a,o){o=o!=null?o.concat([n]):null,nc(4194308,4,s0.bind(null,a,n),o)},useLayoutEffect:function(n,a){return nc(4194308,4,n,a)},useInsertionEffect:function(n,a){nc(4,2,n,a)},useMemo:function(n,a){var o=Qt();a=a===void 0?null:a;var c=n();if(Ua){qr(!0);try{n()}finally{qr(!1)}}return o.memoizedState=[c,a],c},useReducer:function(n,a,o){var c=Qt();if(o!==void 0){var f=o(a);if(Ua){qr(!0);try{o(a)}finally{qr(!1)}}}else f=a;return c.memoizedState=c.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},c.queue=n,n=n.dispatch=jS.bind(null,ke,n),[c.memoizedState,n]},useRef:function(n){var a=Qt();return n={current:n},a.memoizedState=n},useState:function(n){n=df(n);var a=n.queue,o=v0.bind(null,ke,a);return a.dispatch=o,[n.memoizedState,o]},useDebugValue:hf,useDeferredValue:function(n,a){var o=Qt();return pf(o,n,a)},useTransition:function(){var n=df(!1);return n=f0.bind(null,ke,n.queue,!0,!1),Qt().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,o){var c=ke,f=Qt();if(He){if(o===void 0)throw Error(i(407));o=o()}else{if(o=a(),Qe===null)throw Error(i(349));(Ue&124)!==0||qv(c,a,o)}f.memoizedState=o;var m={value:o,getSnapshot:a};return f.queue=m,r0(Yv.bind(null,c,m,n),[n]),c.flags|=2048,ji(9,tc(),Bv.bind(null,c,m,o,a),null),o},useId:function(){var n=Qt(),a=Qe.identifierPrefix;if(He){var o=mr,c=pr;o=(c&~(1<<32-rn(c)-1)).toString(32)+o,a="«"+a+"R"+o,o=Kl++,0<o&&(a+="H"+o.toString(32)),a+="»"}else o=NS++,a="«"+a+"r"+o.toString(32)+"»";return n.memoizedState=a},useHostTransitionStatus:gf,useFormState:Kv,useActionState:Kv,useOptimistic:function(n){var a=Qt();a.memoizedState=a.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=o,a=vf.bind(null,ke,!0,o),o.dispatch=a,[n,a]},useMemoCache:lf,useCacheRefresh:function(){return Qt().memoizedState=DS.bind(null,ke)}},x0={readContext:$t,use:Jl,useCallback:c0,useContext:$t,useEffect:a0,useImperativeHandle:l0,useInsertionEffect:i0,useLayoutEffect:o0,useMemo:u0,useReducer:ec,useRef:n0,useState:function(){return ec(yr)},useDebugValue:hf,useDeferredValue:function(n,a){var o=vt();return d0(o,Pe.memoizedState,n,a)},useTransition:function(){var n=ec(yr)[0],a=vt().memoizedState;return[typeof n=="boolean"?n:ts(n),a]},useSyncExternalStore:Iv,useId:m0,useHostTransitionStatus:gf,useFormState:Jv,useActionState:Jv,useOptimistic:function(n,a){var o=vt();return Fv(o,Pe,n,a)},useMemoCache:lf,useCacheRefresh:g0},US={readContext:$t,use:Jl,useCallback:c0,useContext:$t,useEffect:a0,useImperativeHandle:l0,useInsertionEffect:i0,useLayoutEffect:o0,useMemo:u0,useReducer:uf,useRef:n0,useState:function(){return uf(yr)},useDebugValue:hf,useDeferredValue:function(n,a){var o=vt();return Pe===null?pf(o,n,a):d0(o,Pe.memoizedState,n,a)},useTransition:function(){var n=uf(yr)[0],a=vt().memoizedState;return[typeof n=="boolean"?n:ts(n),a]},useSyncExternalStore:Iv,useId:m0,useHostTransitionStatus:gf,useFormState:t0,useActionState:t0,useOptimistic:function(n,a){var o=vt();return Pe!==null?Fv(o,Pe,n,a):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:lf,useCacheRefresh:g0},Ui=null,as=0;function ic(n){var a=as;return as+=1,Ui===null&&(Ui=[]),Rv(Ui,n,a)}function is(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function oc(n,a){throw a.$$typeof===g?Error(i(525)):(n=Object.prototype.toString.call(a),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function _0(n){var a=n._init;return a(n._payload)}function S0(n){function a(H,U){if(n){var I=H.deletions;I===null?(H.deletions=[U],H.flags|=16):I.push(U)}}function o(H,U){if(!n)return null;for(;U!==null;)a(H,U),U=U.sibling;return null}function c(H){for(var U=new Map;H!==null;)H.key!==null?U.set(H.key,H):U.set(H.index,H),H=H.sibling;return U}function f(H,U){return H=hr(H,U),H.index=0,H.sibling=null,H}function m(H,U,I){return H.index=I,n?(I=H.alternate,I!==null?(I=I.index,I<U?(H.flags|=67108866,U):I):(H.flags|=67108866,U)):(H.flags|=1048576,U)}function x(H){return n&&H.alternate===null&&(H.flags|=67108866),H}function E(H,U,I,W){return U===null||U.tag!==6?(U=Ld(I,H.mode,W),U.return=H,U):(U=f(U,I),U.return=H,U)}function A(H,U,I,W){var le=I.type;return le===S?Q(H,U,I.props.children,W,I.key):U!==null&&(U.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ee&&_0(le)===U.type)?(U=f(U,I.props),is(U,I),U.return=H,U):(U=Bl(I.type,I.key,I.props,null,H.mode,W),is(U,I),U.return=H,U)}function B(H,U,I,W){return U===null||U.tag!==4||U.stateNode.containerInfo!==I.containerInfo||U.stateNode.implementation!==I.implementation?(U=$d(I,H.mode,W),U.return=H,U):(U=f(U,I.children||[]),U.return=H,U)}function Q(H,U,I,W,le){return U===null||U.tag!==7?(U=Ma(I,H.mode,W,le),U.return=H,U):(U=f(U,I),U.return=H,U)}function K(H,U,I){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return U=Ld(""+U,H.mode,I),U.return=H,U;if(typeof U=="object"&&U!==null){switch(U.$$typeof){case b:return I=Bl(U.type,U.key,U.props,null,H.mode,I),is(I,U),I.return=H,I;case w:return U=$d(U,H.mode,I),U.return=H,U;case ee:var W=U._init;return U=W(U._payload),K(H,U,I)}if(Ce(U)||ie(U))return U=Ma(U,H.mode,I,null),U.return=H,U;if(typeof U.then=="function")return K(H,ic(U),I);if(U.$$typeof===O)return K(H,Fl(H,U),I);oc(H,U)}return null}function Y(H,U,I,W){var le=U!==null?U.key:null;if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return le!==null?null:E(H,U,""+I,W);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case b:return I.key===le?A(H,U,I,W):null;case w:return I.key===le?B(H,U,I,W):null;case ee:return le=I._init,I=le(I._payload),Y(H,U,I,W)}if(Ce(I)||ie(I))return le!==null?null:Q(H,U,I,W,null);if(typeof I.then=="function")return Y(H,U,ic(I),W);if(I.$$typeof===O)return Y(H,U,Fl(H,I),W);oc(H,I)}return null}function P(H,U,I,W,le){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return H=H.get(I)||null,E(U,H,""+W,le);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case b:return H=H.get(W.key===null?I:W.key)||null,A(U,H,W,le);case w:return H=H.get(W.key===null?I:W.key)||null,B(U,H,W,le);case ee:var Ne=W._init;return W=Ne(W._payload),P(H,U,I,W,le)}if(Ce(W)||ie(W))return H=H.get(I)||null,Q(U,H,W,le,null);if(typeof W.then=="function")return P(H,U,I,ic(W),le);if(W.$$typeof===O)return P(H,U,I,Fl(U,W),le);oc(U,W)}return null}function ye(H,U,I,W){for(var le=null,Ne=null,he=U,ve=U=0,Mt=null;he!==null&&ve<I.length;ve++){he.index>ve?(Mt=he,he=null):Mt=he.sibling;var $e=Y(H,he,I[ve],W);if($e===null){he===null&&(he=Mt);break}n&&he&&$e.alternate===null&&a(H,he),U=m($e,U,ve),Ne===null?le=$e:Ne.sibling=$e,Ne=$e,he=Mt}if(ve===I.length)return o(H,he),He&&Oa(H,ve),le;if(he===null){for(;ve<I.length;ve++)he=K(H,I[ve],W),he!==null&&(U=m(he,U,ve),Ne===null?le=he:Ne.sibling=he,Ne=he);return He&&Oa(H,ve),le}for(he=c(he);ve<I.length;ve++)Mt=P(he,H,ve,I[ve],W),Mt!==null&&(n&&Mt.alternate!==null&&he.delete(Mt.key===null?ve:Mt.key),U=m(Mt,U,ve),Ne===null?le=Mt:Ne.sibling=Mt,Ne=Mt);return n&&he.forEach(function(ua){return a(H,ua)}),He&&Oa(H,ve),le}function ge(H,U,I,W){if(I==null)throw Error(i(151));for(var le=null,Ne=null,he=U,ve=U=0,Mt=null,$e=I.next();he!==null&&!$e.done;ve++,$e=I.next()){he.index>ve?(Mt=he,he=null):Mt=he.sibling;var ua=Y(H,he,$e.value,W);if(ua===null){he===null&&(he=Mt);break}n&&he&&ua.alternate===null&&a(H,he),U=m(ua,U,ve),Ne===null?le=ua:Ne.sibling=ua,Ne=ua,he=Mt}if($e.done)return o(H,he),He&&Oa(H,ve),le;if(he===null){for(;!$e.done;ve++,$e=I.next())$e=K(H,$e.value,W),$e!==null&&(U=m($e,U,ve),Ne===null?le=$e:Ne.sibling=$e,Ne=$e);return He&&Oa(H,ve),le}for(he=c(he);!$e.done;ve++,$e=I.next())$e=P(he,H,ve,$e.value,W),$e!==null&&(n&&$e.alternate!==null&&he.delete($e.key===null?ve:$e.key),U=m($e,U,ve),Ne===null?le=$e:Ne.sibling=$e,Ne=$e);return n&&he.forEach(function(LT){return a(H,LT)}),He&&Oa(H,ve),le}function Fe(H,U,I,W){if(typeof I=="object"&&I!==null&&I.type===S&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case b:e:{for(var le=I.key;U!==null;){if(U.key===le){if(le=I.type,le===S){if(U.tag===7){o(H,U.sibling),W=f(U,I.props.children),W.return=H,H=W;break e}}else if(U.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ee&&_0(le)===U.type){o(H,U.sibling),W=f(U,I.props),is(W,I),W.return=H,H=W;break e}o(H,U);break}else a(H,U);U=U.sibling}I.type===S?(W=Ma(I.props.children,H.mode,W,I.key),W.return=H,H=W):(W=Bl(I.type,I.key,I.props,null,H.mode,W),is(W,I),W.return=H,H=W)}return x(H);case w:e:{for(le=I.key;U!==null;){if(U.key===le)if(U.tag===4&&U.stateNode.containerInfo===I.containerInfo&&U.stateNode.implementation===I.implementation){o(H,U.sibling),W=f(U,I.children||[]),W.return=H,H=W;break e}else{o(H,U);break}else a(H,U);U=U.sibling}W=$d(I,H.mode,W),W.return=H,H=W}return x(H);case ee:return le=I._init,I=le(I._payload),Fe(H,U,I,W)}if(Ce(I))return ye(H,U,I,W);if(ie(I)){if(le=ie(I),typeof le!="function")throw Error(i(150));return I=le.call(I),ge(H,U,I,W)}if(typeof I.then=="function")return Fe(H,U,ic(I),W);if(I.$$typeof===O)return Fe(H,U,Fl(H,I),W);oc(H,I)}return typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint"?(I=""+I,U!==null&&U.tag===6?(o(H,U.sibling),W=f(U,I),W.return=H,H=W):(o(H,U),W=Ld(I,H.mode,W),W.return=H,H=W),x(H)):o(H,U)}return function(H,U,I,W){try{as=0;var le=Fe(H,U,I,W);return Ui=null,le}catch(he){if(he===Qo||he===Vl)throw he;var Ne=on(29,he,null,H.mode);return Ne.lanes=W,Ne.return=H,Ne}finally{}}}var Li=S0(!0),T0=S0(!1),En=q(null),er=null;function Qr(n){var a=n.alternate;J(_t,_t.current&1),J(En,n),er===null&&(a===null||Ri.current!==null||a.memoizedState!==null)&&(er=n)}function k0(n){if(n.tag===22){if(J(_t,_t.current),J(En,n),er===null){var a=n.alternate;a!==null&&a.memoizedState!==null&&(er=n)}}else Wr()}function Wr(){J(_t,_t.current),J(En,En.current)}function br(n){Z(En),er===n&&(er=null),Z(_t)}var _t=q(0);function sc(n){for(var a=n;a!==null;){if(a.tag===13){var o=a.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||sh(o)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function yf(n,a,o,c){a=n.memoizedState,o=o(c,a),o=o==null?a:y({},a,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var bf={enqueueSetState:function(n,a,o){n=n._reactInternals;var c=un(),f=Fr(c);f.payload=a,o!=null&&(f.callback=o),a=Gr(n,f,c),a!==null&&(dn(a,n,c),Zo(a,n,c))},enqueueReplaceState:function(n,a,o){n=n._reactInternals;var c=un(),f=Fr(c);f.tag=1,f.payload=a,o!=null&&(f.callback=o),a=Gr(n,f,c),a!==null&&(dn(a,n,c),Zo(a,n,c))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var o=un(),c=Fr(o);c.tag=2,a!=null&&(c.callback=a),a=Gr(n,c,o),a!==null&&(dn(a,n,o),Zo(a,n,o))}};function E0(n,a,o,c,f,m,x){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,x):a.prototype&&a.prototype.isPureReactComponent?!qo(o,c)||!qo(f,m):!0}function C0(n,a,o,c){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(o,c),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(o,c),a.state!==n&&bf.enqueueReplaceState(a,a.state,null)}function La(n,a){var o=a;if("ref"in a){o={};for(var c in a)c!=="ref"&&(o[c]=a[c])}if(n=n.defaultProps){o===a&&(o=y({},o));for(var f in n)o[f]===void 0&&(o[f]=n[f])}return o}var lc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function M0(n){lc(n)}function N0(n){console.error(n)}function O0(n){lc(n)}function cc(n,a){try{var o=n.onUncaughtError;o(a.value,{componentStack:a.stack})}catch(c){setTimeout(function(){throw c})}}function A0(n,a,o){try{var c=n.onCaughtError;c(o.value,{componentStack:o.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function wf(n,a,o){return o=Fr(o),o.tag=3,o.payload={element:null},o.callback=function(){cc(n,a)},o}function R0(n){return n=Fr(n),n.tag=3,n}function z0(n,a,o,c){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=c.value;n.payload=function(){return f(m)},n.callback=function(){A0(a,o,c)}}var x=o.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(n.callback=function(){A0(a,o,c),typeof f!="function"&&(na===null?na=new Set([this]):na.add(this));var E=c.stack;this.componentDidCatch(c.value,{componentStack:E!==null?E:""})})}function LS(n,a,o,c,f){if(o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(a=o.alternate,a!==null&&Fo(a,o,f,!0),o=En.current,o!==null){switch(o.tag){case 13:return er===null?Pf():o.alternate===null&&st===0&&(st=3),o.flags&=-257,o.flags|=65536,o.lanes=f,c===Vd?o.flags|=16384:(a=o.updateQueue,a===null?o.updateQueue=new Set([c]):a.add(c),Ff(n,c,f)),!1;case 22:return o.flags|=65536,c===Vd?o.flags|=16384:(a=o.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([c])},o.updateQueue=a):(o=a.retryQueue,o===null?a.retryQueue=new Set([c]):o.add(c)),Ff(n,c,f)),!1}throw Error(i(435,o.tag))}return Ff(n,c,f),Pf(),!1}if(He)return a=En.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=f,c!==qd&&(n=Error(i(422),{cause:c}),Xo(_n(n,o)))):(c!==qd&&(a=Error(i(423),{cause:c}),Xo(_n(a,o))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,c=_n(c,o),f=wf(n.stateNode,c,f),Zd(n,f),st!==4&&(st=2)),!1;var m=Error(i(520),{cause:c});if(m=_n(m,o),fs===null?fs=[m]:fs.push(m),st!==4&&(st=2),a===null)return!0;c=_n(c,o),o=a;do{switch(o.tag){case 3:return o.flags|=65536,n=f&-f,o.lanes|=n,n=wf(o.stateNode,c,n),Zd(o,n),!1;case 1:if(a=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(na===null||!na.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=R0(f),z0(f,n,o,c),Zd(o,f),!1}o=o.return}while(o!==null);return!1}var D0=Error(i(461)),Et=!1;function Rt(n,a,o,c){a.child=n===null?T0(a,null,o,c):Li(a,n.child,o,c)}function j0(n,a,o,c,f){o=o.render;var m=a.ref;if("ref"in c){var x={};for(var E in c)E!=="ref"&&(x[E]=c[E])}else x=c;return Da(a),c=nf(n,a,o,x,m,f),E=rf(),n!==null&&!Et?(af(n,a,f),wr(n,a,f)):(He&&E&&Hd(a),a.flags|=1,Rt(n,a,c,f),a.child)}function U0(n,a,o,c,f){if(n===null){var m=o.type;return typeof m=="function"&&!Ud(m)&&m.defaultProps===void 0&&o.compare===null?(a.tag=15,a.type=m,L0(n,a,m,c,f)):(n=Bl(o.type,null,c,a,a.mode,f),n.ref=a.ref,n.return=a,a.child=n)}if(m=n.child,!Mf(n,f)){var x=m.memoizedProps;if(o=o.compare,o=o!==null?o:qo,o(x,c)&&n.ref===a.ref)return wr(n,a,f)}return a.flags|=1,n=hr(m,c),n.ref=a.ref,n.return=a,a.child=n}function L0(n,a,o,c,f){if(n!==null){var m=n.memoizedProps;if(qo(m,c)&&n.ref===a.ref)if(Et=!1,a.pendingProps=c=m,Mf(n,f))(n.flags&131072)!==0&&(Et=!0);else return a.lanes=n.lanes,wr(n,a,f)}return xf(n,a,o,c,f)}function $0(n,a,o){var c=a.pendingProps,f=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden"){if((a.flags&128)!==0){if(c=m!==null?m.baseLanes|o:o,n!==null){for(f=a.child=n.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;a.childLanes=m&~c}else a.childLanes=0,a.child=null;return H0(n,a,c,o)}if((o&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&Gl(a,m!==null?m.cachePool:null),m!==null?Lv(a,m):Jd(),k0(a);else return a.lanes=a.childLanes=536870912,H0(n,a,m!==null?m.baseLanes|o:o,o)}else m!==null?(Gl(a,m.cachePool),Lv(a,m),Wr(),a.memoizedState=null):(n!==null&&Gl(a,null),Jd(),Wr());return Rt(n,a,f,o),a.child}function H0(n,a,o,c){var f=Gd();return f=f===null?null:{parent:xt._currentValue,pool:f},a.memoizedState={baseLanes:o,cachePool:f},n!==null&&Gl(a,null),Jd(),k0(a),n!==null&&Fo(n,a,c,!0),null}function uc(n,a){var o=a.ref;if(o===null)n!==null&&n.ref!==null&&(a.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(n===null||n.ref!==o)&&(a.flags|=4194816)}}function xf(n,a,o,c,f){return Da(a),o=nf(n,a,o,c,void 0,f),c=rf(),n!==null&&!Et?(af(n,a,f),wr(n,a,f)):(He&&c&&Hd(a),a.flags|=1,Rt(n,a,o,f),a.child)}function I0(n,a,o,c,f,m){return Da(a),a.updateQueue=null,o=Hv(a,c,o,f),$v(n),c=rf(),n!==null&&!Et?(af(n,a,m),wr(n,a,m)):(He&&c&&Hd(a),a.flags|=1,Rt(n,a,o,m),a.child)}function q0(n,a,o,c,f){if(Da(a),a.stateNode===null){var m=Ci,x=o.contextType;typeof x=="object"&&x!==null&&(m=$t(x)),m=new o(c,m),a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=bf,a.stateNode=m,m._reactInternals=a,m=a.stateNode,m.props=c,m.state=a.memoizedState,m.refs={},Qd(a),x=o.contextType,m.context=typeof x=="object"&&x!==null?$t(x):Ci,m.state=a.memoizedState,x=o.getDerivedStateFromProps,typeof x=="function"&&(yf(a,o,x,c),m.state=a.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(x=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),x!==m.state&&bf.enqueueReplaceState(m,m.state,null),Jo(a,c,m,f),Ko(),m.state=a.memoizedState),typeof m.componentDidMount=="function"&&(a.flags|=4194308),c=!0}else if(n===null){m=a.stateNode;var E=a.memoizedProps,A=La(o,E);m.props=A;var B=m.context,Q=o.contextType;x=Ci,typeof Q=="object"&&Q!==null&&(x=$t(Q));var K=o.getDerivedStateFromProps;Q=typeof K=="function"||typeof m.getSnapshotBeforeUpdate=="function",E=a.pendingProps!==E,Q||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E||B!==x)&&C0(a,m,c,x),Xr=!1;var Y=a.memoizedState;m.state=Y,Jo(a,c,m,f),Ko(),B=a.memoizedState,E||Y!==B||Xr?(typeof K=="function"&&(yf(a,o,K,c),B=a.memoizedState),(A=Xr||E0(a,o,A,c,Y,B,x))?(Q||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(a.flags|=4194308)):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=c,a.memoizedState=B),m.props=c,m.state=B,m.context=x,c=A):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),c=!1)}else{m=a.stateNode,Wd(n,a),x=a.memoizedProps,Q=La(o,x),m.props=Q,K=a.pendingProps,Y=m.context,B=o.contextType,A=Ci,typeof B=="object"&&B!==null&&(A=$t(B)),E=o.getDerivedStateFromProps,(B=typeof E=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(x!==K||Y!==A)&&C0(a,m,c,A),Xr=!1,Y=a.memoizedState,m.state=Y,Jo(a,c,m,f),Ko();var P=a.memoizedState;x!==K||Y!==P||Xr||n!==null&&n.dependencies!==null&&Xl(n.dependencies)?(typeof E=="function"&&(yf(a,o,E,c),P=a.memoizedState),(Q=Xr||E0(a,o,Q,c,Y,P,A)||n!==null&&n.dependencies!==null&&Xl(n.dependencies))?(B||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,P,A),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,P,A)),typeof m.componentDidUpdate=="function"&&(a.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof m.componentDidUpdate!="function"||x===n.memoizedProps&&Y===n.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||x===n.memoizedProps&&Y===n.memoizedState||(a.flags|=1024),a.memoizedProps=c,a.memoizedState=P),m.props=c,m.state=P,m.context=A,c=Q):(typeof m.componentDidUpdate!="function"||x===n.memoizedProps&&Y===n.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||x===n.memoizedProps&&Y===n.memoizedState||(a.flags|=1024),c=!1)}return m=c,uc(n,a),c=(a.flags&128)!==0,m||c?(m=a.stateNode,o=c&&typeof o.getDerivedStateFromError!="function"?null:m.render(),a.flags|=1,n!==null&&c?(a.child=Li(a,n.child,null,f),a.child=Li(a,null,o,f)):Rt(n,a,o,f),a.memoizedState=m.state,n=a.child):n=wr(n,a,f),n}function B0(n,a,o,c){return Po(),a.flags|=256,Rt(n,a,o,c),a.child}var _f={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sf(n){return{baseLanes:n,cachePool:Nv()}}function Tf(n,a,o){return n=n!==null?n.childLanes&~o:0,a&&(n|=Cn),n}function Y0(n,a,o){var c=a.pendingProps,f=!1,m=(a.flags&128)!==0,x;if((x=m)||(x=n!==null&&n.memoizedState===null?!1:(_t.current&2)!==0),x&&(f=!0,a.flags&=-129),x=(a.flags&32)!==0,a.flags&=-33,n===null){if(He){if(f?Qr(a):Wr(),He){var E=ot,A;if(A=E){e:{for(A=E,E=Jn;A.nodeType!==8;){if(!E){E=null;break e}if(A=Hn(A.nextSibling),A===null){E=null;break e}}E=A}E!==null?(a.memoizedState={dehydrated:E,treeContext:Na!==null?{id:pr,overflow:mr}:null,retryLane:536870912,hydrationErrors:null},A=on(18,null,null,0),A.stateNode=E,A.return=a,a.child=A,Yt=a,ot=null,A=!0):A=!1}A||Ra(a)}if(E=a.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return sh(E)?a.lanes=32:a.lanes=536870912,null;br(a)}return E=c.children,c=c.fallback,f?(Wr(),f=a.mode,E=dc({mode:"hidden",children:E},f),c=Ma(c,f,o,null),E.return=a,c.return=a,E.sibling=c,a.child=E,f=a.child,f.memoizedState=Sf(o),f.childLanes=Tf(n,x,o),a.memoizedState=_f,c):(Qr(a),kf(a,E))}if(A=n.memoizedState,A!==null&&(E=A.dehydrated,E!==null)){if(m)a.flags&256?(Qr(a),a.flags&=-257,a=Ef(n,a,o)):a.memoizedState!==null?(Wr(),a.child=n.child,a.flags|=128,a=null):(Wr(),f=c.fallback,E=a.mode,c=dc({mode:"visible",children:c.children},E),f=Ma(f,E,o,null),f.flags|=2,c.return=a,f.return=a,c.sibling=f,a.child=c,Li(a,n.child,null,o),c=a.child,c.memoizedState=Sf(o),c.childLanes=Tf(n,x,o),a.memoizedState=_f,a=f);else if(Qr(a),sh(E)){if(x=E.nextSibling&&E.nextSibling.dataset,x)var B=x.dgst;x=B,c=Error(i(419)),c.stack="",c.digest=x,Xo({value:c,source:null,stack:null}),a=Ef(n,a,o)}else if(Et||Fo(n,a,o,!1),x=(o&n.childLanes)!==0,Et||x){if(x=Qe,x!==null&&(c=o&-o,c=(c&42)!==0?1:sd(c),c=(c&(x.suspendedLanes|o))!==0?0:c,c!==0&&c!==A.retryLane))throw A.retryLane=c,Ei(n,c),dn(x,n,c),D0;E.data==="$?"||Pf(),a=Ef(n,a,o)}else E.data==="$?"?(a.flags|=192,a.child=n.child,a=null):(n=A.treeContext,ot=Hn(E.nextSibling),Yt=a,He=!0,Aa=null,Jn=!1,n!==null&&(Tn[kn++]=pr,Tn[kn++]=mr,Tn[kn++]=Na,pr=n.id,mr=n.overflow,Na=a),a=kf(a,c.children),a.flags|=4096);return a}return f?(Wr(),f=c.fallback,E=a.mode,A=n.child,B=A.sibling,c=hr(A,{mode:"hidden",children:c.children}),c.subtreeFlags=A.subtreeFlags&65011712,B!==null?f=hr(B,f):(f=Ma(f,E,o,null),f.flags|=2),f.return=a,c.return=a,c.sibling=f,a.child=c,c=f,f=a.child,E=n.child.memoizedState,E===null?E=Sf(o):(A=E.cachePool,A!==null?(B=xt._currentValue,A=A.parent!==B?{parent:B,pool:B}:A):A=Nv(),E={baseLanes:E.baseLanes|o,cachePool:A}),f.memoizedState=E,f.childLanes=Tf(n,x,o),a.memoizedState=_f,c):(Qr(a),o=n.child,n=o.sibling,o=hr(o,{mode:"visible",children:c.children}),o.return=a,o.sibling=null,n!==null&&(x=a.deletions,x===null?(a.deletions=[n],a.flags|=16):x.push(n)),a.child=o,a.memoizedState=null,o)}function kf(n,a){return a=dc({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function dc(n,a){return n=on(22,n,null,a),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Ef(n,a,o){return Li(a,n.child,null,o),n=kf(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function P0(n,a,o){n.lanes|=a;var c=n.alternate;c!==null&&(c.lanes|=a),Yd(n.return,a,o)}function Cf(n,a,o,c,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(m.isBackwards=a,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=o,m.tailMode=f)}function X0(n,a,o){var c=a.pendingProps,f=c.revealOrder,m=c.tail;if(Rt(n,a,c.children,o),c=_t.current,(c&2)!==0)c=c&1|2,a.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&P0(n,o,a);else if(n.tag===19)P0(n,o,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break e;for(;n.sibling===null;){if(n.return===null||n.return===a)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}switch(J(_t,c),f){case"forwards":for(o=a.child,f=null;o!==null;)n=o.alternate,n!==null&&sc(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=a.child,a.child=null):(f=o.sibling,o.sibling=null),Cf(a,!1,f,o,m);break;case"backwards":for(o=null,f=a.child,a.child=null;f!==null;){if(n=f.alternate,n!==null&&sc(n)===null){a.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}Cf(a,!0,o,null,m);break;case"together":Cf(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function wr(n,a,o){if(n!==null&&(a.dependencies=n.dependencies),ta|=a.lanes,(o&a.childLanes)===0)if(n!==null){if(Fo(n,a,o,!1),(o&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(i(153));if(a.child!==null){for(n=a.child,o=hr(n,n.pendingProps),a.child=o,o.return=a;n.sibling!==null;)n=n.sibling,o=o.sibling=hr(n,n.pendingProps),o.return=a;o.sibling=null}return a.child}function Mf(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&Xl(n)))}function $S(n,a,o){switch(a.tag){case 3:fe(a,a.stateNode.containerInfo),Pr(a,xt,n.memoizedState.cache),Po();break;case 27:case 5:rt(a);break;case 4:fe(a,a.stateNode.containerInfo);break;case 10:Pr(a,a.type,a.memoizedProps.value);break;case 13:var c=a.memoizedState;if(c!==null)return c.dehydrated!==null?(Qr(a),a.flags|=128,null):(o&a.child.childLanes)!==0?Y0(n,a,o):(Qr(a),n=wr(n,a,o),n!==null?n.sibling:null);Qr(a);break;case 19:var f=(n.flags&128)!==0;if(c=(o&a.childLanes)!==0,c||(Fo(n,a,o,!1),c=(o&a.childLanes)!==0),f){if(c)return X0(n,a,o);a.flags|=128}if(f=a.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),J(_t,_t.current),c)break;return null;case 22:case 23:return a.lanes=0,$0(n,a,o);case 24:Pr(a,xt,n.memoizedState.cache)}return wr(n,a,o)}function F0(n,a,o){if(n!==null)if(n.memoizedProps!==a.pendingProps)Et=!0;else{if(!Mf(n,o)&&(a.flags&128)===0)return Et=!1,$S(n,a,o);Et=(n.flags&131072)!==0}else Et=!1,He&&(a.flags&1048576)!==0&&_v(a,Pl,a.index);switch(a.lanes=0,a.tag){case 16:e:{n=a.pendingProps;var c=a.elementType,f=c._init;if(c=f(c._payload),a.type=c,typeof c=="function")Ud(c)?(n=La(c,n),a.tag=1,a=q0(null,a,c,n,o)):(a.tag=0,a=xf(null,a,c,n,o));else{if(c!=null){if(f=c.$$typeof,f===L){a.tag=11,a=j0(null,a,c,n,o);break e}else if(f===G){a.tag=14,a=U0(null,a,c,n,o);break e}}throw a=je(c)||c,Error(i(306,a,""))}}return a;case 0:return xf(n,a,a.type,a.pendingProps,o);case 1:return c=a.type,f=La(c,a.pendingProps),q0(n,a,c,f,o);case 3:e:{if(fe(a,a.stateNode.containerInfo),n===null)throw Error(i(387));c=a.pendingProps;var m=a.memoizedState;f=m.element,Wd(n,a),Jo(a,c,null,o);var x=a.memoizedState;if(c=x.cache,Pr(a,xt,c),c!==m.cache&&Pd(a,[xt],o,!0),Ko(),c=x.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:x.cache},a.updateQueue.baseState=m,a.memoizedState=m,a.flags&256){a=B0(n,a,c,o);break e}else if(c!==f){f=_n(Error(i(424)),a),Xo(f),a=B0(n,a,c,o);break e}else{switch(n=a.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(ot=Hn(n.firstChild),Yt=a,He=!0,Aa=null,Jn=!0,o=T0(a,null,c,o),a.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Po(),c===f){a=wr(n,a,o);break e}Rt(n,a,c,o)}a=a.child}return a;case 26:return uc(n,a),n===null?(o=Wy(a.type,null,a.pendingProps,null))?a.memoizedState=o:He||(o=a.type,n=a.pendingProps,c=kc(re.current).createElement(o),c[Lt]=a,c[Gt]=n,Dt(c,o,n),kt(c),a.stateNode=c):a.memoizedState=Wy(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return rt(a),n===null&&He&&(c=a.stateNode=Gy(a.type,a.pendingProps,re.current),Yt=a,Jn=!0,f=ot,ia(a.type)?(lh=f,ot=Hn(c.firstChild)):ot=f),Rt(n,a,a.pendingProps.children,o),uc(n,a),n===null&&(a.flags|=4194304),a.child;case 5:return n===null&&He&&((f=c=ot)&&(c=fT(c,a.type,a.pendingProps,Jn),c!==null?(a.stateNode=c,Yt=a,ot=Hn(c.firstChild),Jn=!1,f=!0):f=!1),f||Ra(a)),rt(a),f=a.type,m=a.pendingProps,x=n!==null?n.memoizedProps:null,c=m.children,ah(f,m)?c=null:x!==null&&ah(f,x)&&(a.flags|=32),a.memoizedState!==null&&(f=nf(n,a,OS,null,null,o),xs._currentValue=f),uc(n,a),Rt(n,a,c,o),a.child;case 6:return n===null&&He&&((n=o=ot)&&(o=hT(o,a.pendingProps,Jn),o!==null?(a.stateNode=o,Yt=a,ot=null,n=!0):n=!1),n||Ra(a)),null;case 13:return Y0(n,a,o);case 4:return fe(a,a.stateNode.containerInfo),c=a.pendingProps,n===null?a.child=Li(a,null,c,o):Rt(n,a,c,o),a.child;case 11:return j0(n,a,a.type,a.pendingProps,o);case 7:return Rt(n,a,a.pendingProps,o),a.child;case 8:return Rt(n,a,a.pendingProps.children,o),a.child;case 12:return Rt(n,a,a.pendingProps.children,o),a.child;case 10:return c=a.pendingProps,Pr(a,a.type,c.value),Rt(n,a,c.children,o),a.child;case 9:return f=a.type._context,c=a.pendingProps.children,Da(a),f=$t(f),c=c(f),a.flags|=1,Rt(n,a,c,o),a.child;case 14:return U0(n,a,a.type,a.pendingProps,o);case 15:return L0(n,a,a.type,a.pendingProps,o);case 19:return X0(n,a,o);case 31:return c=a.pendingProps,o=a.mode,c={mode:c.mode,children:c.children},n===null?(o=dc(c,o),o.ref=a.ref,a.child=o,o.return=a,a=o):(o=hr(n.child,c),o.ref=a.ref,a.child=o,o.return=a,a=o),a;case 22:return $0(n,a,o);case 24:return Da(a),c=$t(xt),n===null?(f=Gd(),f===null&&(f=Qe,m=Xd(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),a.memoizedState={parent:c,cache:f},Qd(a),Pr(a,xt,f)):((n.lanes&o)!==0&&(Wd(n,a),Jo(a,null,null,o),Ko()),f=n.memoizedState,m=a.memoizedState,f.parent!==c?(f={parent:c,cache:c},a.memoizedState=f,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=f),Pr(a,xt,c)):(c=m.cache,Pr(a,xt,c),c!==f.cache&&Pd(a,[xt],o,!0))),Rt(n,a,a.pendingProps.children,o),a.child;case 29:throw a.pendingProps}throw Error(i(156,a.tag))}function xr(n){n.flags|=4}function G0(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!tb(a)){if(a=En.current,a!==null&&((Ue&4194048)===Ue?er!==null:(Ue&62914560)!==Ue&&(Ue&536870912)===0||a!==er))throw Wo=Vd,Ov;n.flags|=8192}}function fc(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?kg():536870912,n.lanes|=a,qi|=a)}function os(n,a){if(!He)switch(n.tailMode){case"hidden":a=n.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function at(n){var a=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(a)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&65011712,c|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=o,a}function HS(n,a,o){var c=a.pendingProps;switch(Id(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(a),null;case 1:return at(a),null;case 3:return o=a.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),a.memoizedState.cache!==c&&(a.flags|=2048),vr(xt),Me(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(Yo(a)?xr(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,kv())),at(a),null;case 26:return o=a.memoizedState,n===null?(xr(a),o!==null?(at(a),G0(a,o)):(at(a),a.flags&=-16777217)):o?o!==n.memoizedState?(xr(a),at(a),G0(a,o)):(at(a),a.flags&=-16777217):(n.memoizedProps!==c&&xr(a),at(a),a.flags&=-16777217),null;case 27:Un(a),o=re.current;var f=a.type;if(n!==null&&a.stateNode!=null)n.memoizedProps!==c&&xr(a);else{if(!c){if(a.stateNode===null)throw Error(i(166));return at(a),null}n=te.current,Yo(a)?Sv(a):(n=Gy(f,c,o),a.stateNode=n,xr(a))}return at(a),null;case 5:if(Un(a),o=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==c&&xr(a);else{if(!c){if(a.stateNode===null)throw Error(i(166));return at(a),null}if(n=te.current,Yo(a))Sv(a);else{switch(f=kc(re.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof c.is=="string"?f.createElement("select",{is:c.is}):f.createElement("select"),c.multiple?n.multiple=!0:c.size&&(n.size=c.size);break;default:n=typeof c.is=="string"?f.createElement(o,{is:c.is}):f.createElement(o)}}n[Lt]=a,n[Gt]=c;e:for(f=a.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===a)break e;for(;f.sibling===null;){if(f.return===null||f.return===a)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}a.stateNode=n;e:switch(Dt(n,o,c),o){case"button":case"input":case"select":case"textarea":n=!!c.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&xr(a)}}return at(a),a.flags&=-16777217,null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==c&&xr(a);else{if(typeof c!="string"&&a.stateNode===null)throw Error(i(166));if(n=re.current,Yo(a)){if(n=a.stateNode,o=a.memoizedProps,c=null,f=Yt,f!==null)switch(f.tag){case 27:case 5:c=f.memoizedProps}n[Lt]=a,n=!!(n.nodeValue===o||c!==null&&c.suppressHydrationWarning===!0||Iy(n.nodeValue,o)),n||Ra(a)}else n=kc(n).createTextNode(c),n[Lt]=a,a.stateNode=n}return at(a),null;case 13:if(c=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=Yo(a),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(i(318));if(f=a.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[Lt]=a}else Po(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;at(a),f=!1}else f=kv(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return a.flags&256?(br(a),a):(br(a),null)}if(br(a),(a.flags&128)!==0)return a.lanes=o,a;if(o=c!==null,n=n!==null&&n.memoizedState!==null,o){c=a.child,f=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(f=c.alternate.memoizedState.cachePool.pool);var m=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==f&&(c.flags|=2048)}return o!==n&&o&&(a.child.flags|=8192),fc(a,a.updateQueue),at(a),null;case 4:return Me(),n===null&&Jf(a.stateNode.containerInfo),at(a),null;case 10:return vr(a.type),at(a),null;case 19:if(Z(_t),f=a.memoizedState,f===null)return at(a),null;if(c=(a.flags&128)!==0,m=f.rendering,m===null)if(c)os(f,!1);else{if(st!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(m=sc(n),m!==null){for(a.flags|=128,os(f,!1),n=m.updateQueue,a.updateQueue=n,fc(a,n),a.subtreeFlags=0,n=o,o=a.child;o!==null;)xv(o,n),o=o.sibling;return J(_t,_t.current&1|2),a.child}n=n.sibling}f.tail!==null&&Kn()>mc&&(a.flags|=128,c=!0,os(f,!1),a.lanes=4194304)}else{if(!c)if(n=sc(m),n!==null){if(a.flags|=128,c=!0,n=n.updateQueue,a.updateQueue=n,fc(a,n),os(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!He)return at(a),null}else 2*Kn()-f.renderingStartTime>mc&&o!==536870912&&(a.flags|=128,c=!0,os(f,!1),a.lanes=4194304);f.isBackwards?(m.sibling=a.child,a.child=m):(n=f.last,n!==null?n.sibling=m:a.child=m,f.last=m)}return f.tail!==null?(a=f.tail,f.rendering=a,f.tail=a.sibling,f.renderingStartTime=Kn(),a.sibling=null,n=_t.current,J(_t,c?n&1|2:n&1),a):(at(a),null);case 22:case 23:return br(a),ef(),c=a.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(a.flags|=8192):c&&(a.flags|=8192),c?(o&536870912)!==0&&(a.flags&128)===0&&(at(a),a.subtreeFlags&6&&(a.flags|=8192)):at(a),o=a.updateQueue,o!==null&&fc(a,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==o&&(a.flags|=2048),n!==null&&Z(ja),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),a.memoizedState.cache!==o&&(a.flags|=2048),vr(xt),at(a),null;case 25:return null;case 30:return null}throw Error(i(156,a.tag))}function IS(n,a){switch(Id(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return vr(xt),Me(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return Un(a),null;case 13:if(br(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(i(340));Po()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return Z(_t),null;case 4:return Me(),null;case 10:return vr(a.type),null;case 22:case 23:return br(a),ef(),n!==null&&Z(ja),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return vr(xt),null;case 25:return null;default:return null}}function V0(n,a){switch(Id(a),a.tag){case 3:vr(xt),Me();break;case 26:case 27:case 5:Un(a);break;case 4:Me();break;case 13:br(a);break;case 19:Z(_t);break;case 10:vr(a.type);break;case 22:case 23:br(a),ef(),n!==null&&Z(ja);break;case 24:vr(xt)}}function ss(n,a){try{var o=a.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&n)===n){c=void 0;var m=o.create,x=o.inst;c=m(),x.destroy=c}o=o.next}while(o!==f)}}catch(E){Ge(a,a.return,E)}}function Zr(n,a,o){try{var c=a.updateQueue,f=c!==null?c.lastEffect:null;if(f!==null){var m=f.next;c=m;do{if((c.tag&n)===n){var x=c.inst,E=x.destroy;if(E!==void 0){x.destroy=void 0,f=a;var A=o,B=E;try{B()}catch(Q){Ge(f,A,Q)}}}c=c.next}while(c!==m)}}catch(Q){Ge(a,a.return,Q)}}function Q0(n){var a=n.updateQueue;if(a!==null){var o=n.stateNode;try{Uv(a,o)}catch(c){Ge(n,n.return,c)}}}function W0(n,a,o){o.props=La(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(c){Ge(n,a,c)}}function ls(n,a){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof o=="function"?n.refCleanup=o(c):o.current=c}}catch(f){Ge(n,a,f)}}function tr(n,a){var o=n.ref,c=n.refCleanup;if(o!==null)if(typeof c=="function")try{c()}catch(f){Ge(n,a,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Ge(n,a,f)}else o.current=null}function Z0(n){var a=n.type,o=n.memoizedProps,c=n.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":o.autoFocus&&c.focus();break e;case"img":o.src?c.src=o.src:o.srcSet&&(c.srcset=o.srcSet)}}catch(f){Ge(n,n.return,f)}}function Nf(n,a,o){try{var c=n.stateNode;sT(c,n.type,o,a),c[Gt]=a}catch(f){Ge(n,n.return,f)}}function K0(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&ia(n.type)||n.tag===4}function Of(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||K0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&ia(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Af(n,a,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,a):(a=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,a.appendChild(n),o=o._reactRootContainer,o!=null||a.onclick!==null||(a.onclick=Tc));else if(c!==4&&(c===27&&ia(n.type)&&(o=n.stateNode,a=null),n=n.child,n!==null))for(Af(n,a,o),n=n.sibling;n!==null;)Af(n,a,o),n=n.sibling}function hc(n,a,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?o.insertBefore(n,a):o.appendChild(n);else if(c!==4&&(c===27&&ia(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(hc(n,a,o),n=n.sibling;n!==null;)hc(n,a,o),n=n.sibling}function J0(n){var a=n.stateNode,o=n.memoizedProps;try{for(var c=n.type,f=a.attributes;f.length;)a.removeAttributeNode(f[0]);Dt(a,c,o),a[Lt]=n,a[Gt]=o}catch(m){Ge(n,n.return,m)}}var _r=!1,dt=!1,Rf=!1,ey=typeof WeakSet=="function"?WeakSet:Set,Ct=null;function qS(n,a){if(n=n.containerInfo,nh=Ac,n=dv(n),Nd(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var x=0,E=-1,A=-1,B=0,Q=0,K=n,Y=null;t:for(;;){for(var P;K!==o||f!==0&&K.nodeType!==3||(E=x+f),K!==m||c!==0&&K.nodeType!==3||(A=x+c),K.nodeType===3&&(x+=K.nodeValue.length),(P=K.firstChild)!==null;)Y=K,K=P;for(;;){if(K===n)break t;if(Y===o&&++B===f&&(E=x),Y===m&&++Q===c&&(A=x),(P=K.nextSibling)!==null)break;K=Y,Y=K.parentNode}K=P}o=E===-1||A===-1?null:{start:E,end:A}}else o=null}o=o||{start:0,end:0}}else o=null;for(rh={focusedElem:n,selectionRange:o},Ac=!1,Ct=a;Ct!==null;)if(a=Ct,n=a.child,(a.subtreeFlags&1024)!==0&&n!==null)n.return=a,Ct=n;else for(;Ct!==null;){switch(a=Ct,m=a.alternate,n=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,o=a,f=m.memoizedProps,m=m.memoizedState,c=o.stateNode;try{var ye=La(o.type,f,o.elementType===o.type);n=c.getSnapshotBeforeUpdate(ye,m),c.__reactInternalSnapshotBeforeUpdate=n}catch(ge){Ge(o,o.return,ge)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,o=n.nodeType,o===9)oh(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":oh(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=a.sibling,n!==null){n.return=a.return,Ct=n;break}Ct=a.return}}function ty(n,a,o){var c=o.flags;switch(o.tag){case 0:case 11:case 15:Kr(n,o),c&4&&ss(5,o);break;case 1:if(Kr(n,o),c&4)if(n=o.stateNode,a===null)try{n.componentDidMount()}catch(x){Ge(o,o.return,x)}else{var f=La(o.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(f,a,n.__reactInternalSnapshotBeforeUpdate)}catch(x){Ge(o,o.return,x)}}c&64&&Q0(o),c&512&&ls(o,o.return);break;case 3:if(Kr(n,o),c&64&&(n=o.updateQueue,n!==null)){if(a=null,o.child!==null)switch(o.child.tag){case 27:case 5:a=o.child.stateNode;break;case 1:a=o.child.stateNode}try{Uv(n,a)}catch(x){Ge(o,o.return,x)}}break;case 27:a===null&&c&4&&J0(o);case 26:case 5:Kr(n,o),a===null&&c&4&&Z0(o),c&512&&ls(o,o.return);break;case 12:Kr(n,o);break;case 13:Kr(n,o),c&4&&ay(n,o),c&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=WS.bind(null,o),pT(n,o))));break;case 22:if(c=o.memoizedState!==null||_r,!c){a=a!==null&&a.memoizedState!==null||dt,f=_r;var m=dt;_r=c,(dt=a)&&!m?Jr(n,o,(o.subtreeFlags&8772)!==0):Kr(n,o),_r=f,dt=m}break;case 30:break;default:Kr(n,o)}}function ny(n){var a=n.alternate;a!==null&&(n.alternate=null,ny(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&ud(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var et=null,Wt=!1;function Sr(n,a,o){for(o=o.child;o!==null;)ry(n,a,o),o=o.sibling}function ry(n,a,o){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(No,o)}catch{}switch(o.tag){case 26:dt||tr(o,a),Sr(n,a,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:dt||tr(o,a);var c=et,f=Wt;ia(o.type)&&(et=o.stateNode,Wt=!1),Sr(n,a,o),vs(o.stateNode),et=c,Wt=f;break;case 5:dt||tr(o,a);case 6:if(c=et,f=Wt,et=null,Sr(n,a,o),et=c,Wt=f,et!==null)if(Wt)try{(et.nodeType===9?et.body:et.nodeName==="HTML"?et.ownerDocument.body:et).removeChild(o.stateNode)}catch(m){Ge(o,a,m)}else try{et.removeChild(o.stateNode)}catch(m){Ge(o,a,m)}break;case 18:et!==null&&(Wt?(n=et,Xy(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),ks(n)):Xy(et,o.stateNode));break;case 4:c=et,f=Wt,et=o.stateNode.containerInfo,Wt=!0,Sr(n,a,o),et=c,Wt=f;break;case 0:case 11:case 14:case 15:dt||Zr(2,o,a),dt||Zr(4,o,a),Sr(n,a,o);break;case 1:dt||(tr(o,a),c=o.stateNode,typeof c.componentWillUnmount=="function"&&W0(o,a,c)),Sr(n,a,o);break;case 21:Sr(n,a,o);break;case 22:dt=(c=dt)||o.memoizedState!==null,Sr(n,a,o),dt=c;break;default:Sr(n,a,o)}}function ay(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{ks(n)}catch(o){Ge(a,a.return,o)}}function BS(n){switch(n.tag){case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new ey),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new ey),a;default:throw Error(i(435,n.tag))}}function zf(n,a){var o=BS(n);a.forEach(function(c){var f=ZS.bind(null,n,c);o.has(c)||(o.add(c),c.then(f,f))})}function sn(n,a){var o=a.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c],m=n,x=a,E=x;e:for(;E!==null;){switch(E.tag){case 27:if(ia(E.type)){et=E.stateNode,Wt=!1;break e}break;case 5:et=E.stateNode,Wt=!1;break e;case 3:case 4:et=E.stateNode.containerInfo,Wt=!0;break e}E=E.return}if(et===null)throw Error(i(160));ry(m,x,f),et=null,Wt=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)iy(a,n),a=a.sibling}var $n=null;function iy(n,a){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:sn(a,n),ln(n),c&4&&(Zr(3,n,n.return),ss(3,n),Zr(5,n,n.return));break;case 1:sn(a,n),ln(n),c&512&&(dt||o===null||tr(o,o.return)),c&64&&_r&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?c:o.concat(c))));break;case 26:var f=$n;if(sn(a,n),ln(n),c&512&&(dt||o===null||tr(o,o.return)),c&4){var m=o!==null?o.memoizedState:null;if(c=n.memoizedState,o===null)if(c===null)if(n.stateNode===null){e:{c=n.type,o=n.memoizedProps,f=f.ownerDocument||f;t:switch(c){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Ro]||m[Lt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(c),f.head.insertBefore(m,f.querySelector("head > title"))),Dt(m,c,o),m[Lt]=n,kt(m),c=m;break e;case"link":var x=Jy("link","href",f).get(c+(o.href||""));if(x){for(var E=0;E<x.length;E++)if(m=x[E],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){x.splice(E,1);break t}}m=f.createElement(c),Dt(m,c,o),f.head.appendChild(m);break;case"meta":if(x=Jy("meta","content",f).get(c+(o.content||""))){for(E=0;E<x.length;E++)if(m=x[E],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){x.splice(E,1);break t}}m=f.createElement(c),Dt(m,c,o),f.head.appendChild(m);break;default:throw Error(i(468,c))}m[Lt]=n,kt(m),c=m}n.stateNode=c}else eb(f,n.type,n.stateNode);else n.stateNode=Ky(f,c,n.memoizedProps);else m!==c?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,c===null?eb(f,n.type,n.stateNode):Ky(f,c,n.memoizedProps)):c===null&&n.stateNode!==null&&Nf(n,n.memoizedProps,o.memoizedProps)}break;case 27:sn(a,n),ln(n),c&512&&(dt||o===null||tr(o,o.return)),o!==null&&c&4&&Nf(n,n.memoizedProps,o.memoizedProps);break;case 5:if(sn(a,n),ln(n),c&512&&(dt||o===null||tr(o,o.return)),n.flags&32){f=n.stateNode;try{bi(f,"")}catch(P){Ge(n,n.return,P)}}c&4&&n.stateNode!=null&&(f=n.memoizedProps,Nf(n,f,o!==null?o.memoizedProps:f)),c&1024&&(Rf=!0);break;case 6:if(sn(a,n),ln(n),c&4){if(n.stateNode===null)throw Error(i(162));c=n.memoizedProps,o=n.stateNode;try{o.nodeValue=c}catch(P){Ge(n,n.return,P)}}break;case 3:if(Mc=null,f=$n,$n=Ec(a.containerInfo),sn(a,n),$n=f,ln(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{ks(a.containerInfo)}catch(P){Ge(n,n.return,P)}Rf&&(Rf=!1,oy(n));break;case 4:c=$n,$n=Ec(n.stateNode.containerInfo),sn(a,n),ln(n),$n=c;break;case 12:sn(a,n),ln(n);break;case 13:sn(a,n),ln(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Hf=Kn()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,zf(n,c)));break;case 22:f=n.memoizedState!==null;var A=o!==null&&o.memoizedState!==null,B=_r,Q=dt;if(_r=B||f,dt=Q||A,sn(a,n),dt=Q,_r=B,ln(n),c&8192)e:for(a=n.stateNode,a._visibility=f?a._visibility&-2:a._visibility|1,f&&(o===null||A||_r||dt||$a(n)),o=null,a=n;;){if(a.tag===5||a.tag===26){if(o===null){A=o=a;try{if(m=A.stateNode,f)x=m.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{E=A.stateNode;var K=A.memoizedProps.style,Y=K!=null&&K.hasOwnProperty("display")?K.display:null;E.style.display=Y==null||typeof Y=="boolean"?"":(""+Y).trim()}}catch(P){Ge(A,A.return,P)}}}else if(a.tag===6){if(o===null){A=a;try{A.stateNode.nodeValue=f?"":A.memoizedProps}catch(P){Ge(A,A.return,P)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break e;for(;a.sibling===null;){if(a.return===null||a.return===n)break e;o===a&&(o=null),a=a.return}o===a&&(o=null),a.sibling.return=a.return,a=a.sibling}c&4&&(c=n.updateQueue,c!==null&&(o=c.retryQueue,o!==null&&(c.retryQueue=null,zf(n,o))));break;case 19:sn(a,n),ln(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,zf(n,c)));break;case 30:break;case 21:break;default:sn(a,n),ln(n)}}function ln(n){var a=n.flags;if(a&2){try{for(var o,c=n.return;c!==null;){if(K0(c)){o=c;break}c=c.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var f=o.stateNode,m=Of(n);hc(n,m,f);break;case 5:var x=o.stateNode;o.flags&32&&(bi(x,""),o.flags&=-33);var E=Of(n);hc(n,E,x);break;case 3:case 4:var A=o.stateNode.containerInfo,B=Of(n);Af(n,B,A);break;default:throw Error(i(161))}}catch(Q){Ge(n,n.return,Q)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function oy(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;oy(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function Kr(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)ty(n,a.alternate,a),a=a.sibling}function $a(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:Zr(4,a,a.return),$a(a);break;case 1:tr(a,a.return);var o=a.stateNode;typeof o.componentWillUnmount=="function"&&W0(a,a.return,o),$a(a);break;case 27:vs(a.stateNode);case 26:case 5:tr(a,a.return),$a(a);break;case 22:a.memoizedState===null&&$a(a);break;case 30:$a(a);break;default:$a(a)}n=n.sibling}}function Jr(n,a,o){for(o=o&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var c=a.alternate,f=n,m=a,x=m.flags;switch(m.tag){case 0:case 11:case 15:Jr(f,m,o),ss(4,m);break;case 1:if(Jr(f,m,o),c=m,f=c.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(B){Ge(c,c.return,B)}if(c=m,f=c.updateQueue,f!==null){var E=c.stateNode;try{var A=f.shared.hiddenCallbacks;if(A!==null)for(f.shared.hiddenCallbacks=null,f=0;f<A.length;f++)jv(A[f],E)}catch(B){Ge(c,c.return,B)}}o&&x&64&&Q0(m),ls(m,m.return);break;case 27:J0(m);case 26:case 5:Jr(f,m,o),o&&c===null&&x&4&&Z0(m),ls(m,m.return);break;case 12:Jr(f,m,o);break;case 13:Jr(f,m,o),o&&x&4&&ay(f,m);break;case 22:m.memoizedState===null&&Jr(f,m,o),ls(m,m.return);break;case 30:break;default:Jr(f,m,o)}a=a.sibling}}function Df(n,a){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&Go(o))}function jf(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&Go(n))}function nr(n,a,o,c){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)sy(n,a,o,c),a=a.sibling}function sy(n,a,o,c){var f=a.flags;switch(a.tag){case 0:case 11:case 15:nr(n,a,o,c),f&2048&&ss(9,a);break;case 1:nr(n,a,o,c);break;case 3:nr(n,a,o,c),f&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&Go(n)));break;case 12:if(f&2048){nr(n,a,o,c),n=a.stateNode;try{var m=a.memoizedProps,x=m.id,E=m.onPostCommit;typeof E=="function"&&E(x,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(A){Ge(a,a.return,A)}}else nr(n,a,o,c);break;case 13:nr(n,a,o,c);break;case 23:break;case 22:m=a.stateNode,x=a.alternate,a.memoizedState!==null?m._visibility&2?nr(n,a,o,c):cs(n,a):m._visibility&2?nr(n,a,o,c):(m._visibility|=2,$i(n,a,o,c,(a.subtreeFlags&10256)!==0)),f&2048&&Df(x,a);break;case 24:nr(n,a,o,c),f&2048&&jf(a.alternate,a);break;default:nr(n,a,o,c)}}function $i(n,a,o,c,f){for(f=f&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var m=n,x=a,E=o,A=c,B=x.flags;switch(x.tag){case 0:case 11:case 15:$i(m,x,E,A,f),ss(8,x);break;case 23:break;case 22:var Q=x.stateNode;x.memoizedState!==null?Q._visibility&2?$i(m,x,E,A,f):cs(m,x):(Q._visibility|=2,$i(m,x,E,A,f)),f&&B&2048&&Df(x.alternate,x);break;case 24:$i(m,x,E,A,f),f&&B&2048&&jf(x.alternate,x);break;default:$i(m,x,E,A,f)}a=a.sibling}}function cs(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var o=n,c=a,f=c.flags;switch(c.tag){case 22:cs(o,c),f&2048&&Df(c.alternate,c);break;case 24:cs(o,c),f&2048&&jf(c.alternate,c);break;default:cs(o,c)}a=a.sibling}}var us=8192;function Hi(n){if(n.subtreeFlags&us)for(n=n.child;n!==null;)ly(n),n=n.sibling}function ly(n){switch(n.tag){case 26:Hi(n),n.flags&us&&n.memoizedState!==null&&CT($n,n.memoizedState,n.memoizedProps);break;case 5:Hi(n);break;case 3:case 4:var a=$n;$n=Ec(n.stateNode.containerInfo),Hi(n),$n=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=us,us=16777216,Hi(n),us=a):Hi(n));break;default:Hi(n)}}function cy(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function ds(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var c=a[o];Ct=c,dy(c,n)}cy(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)uy(n),n=n.sibling}function uy(n){switch(n.tag){case 0:case 11:case 15:ds(n),n.flags&2048&&Zr(9,n,n.return);break;case 3:ds(n);break;case 12:ds(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&2&&(n.return===null||n.return.tag!==13)?(a._visibility&=-3,pc(n)):ds(n);break;default:ds(n)}}function pc(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var c=a[o];Ct=c,dy(c,n)}cy(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:Zr(8,a,a.return),pc(a);break;case 22:o=a.stateNode,o._visibility&2&&(o._visibility&=-3,pc(a));break;default:pc(a)}n=n.sibling}}function dy(n,a){for(;Ct!==null;){var o=Ct;switch(o.tag){case 0:case 11:case 15:Zr(8,o,a);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var c=o.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Go(o.memoizedState.cache)}if(c=o.child,c!==null)c.return=o,Ct=c;else e:for(o=n;Ct!==null;){c=Ct;var f=c.sibling,m=c.return;if(ny(c),c===o){Ct=null;break e}if(f!==null){f.return=m,Ct=f;break e}Ct=m}}}var YS={getCacheForType:function(n){var a=$t(xt),o=a.data.get(n);return o===void 0&&(o=n(),a.data.set(n,o)),o}},PS=typeof WeakMap=="function"?WeakMap:Map,Be=0,Qe=null,Oe=null,Ue=0,Ye=0,cn=null,ea=!1,Ii=!1,Uf=!1,Tr=0,st=0,ta=0,Ha=0,Lf=0,Cn=0,qi=0,fs=null,Zt=null,$f=!1,Hf=0,mc=1/0,gc=null,na=null,zt=0,ra=null,Bi=null,Yi=0,If=0,qf=null,fy=null,hs=0,Bf=null;function un(){if((Be&2)!==0&&Ue!==0)return Ue&-Ue;if(C.T!==null){var n=Oi;return n!==0?n:Qf()}return Mg()}function hy(){Cn===0&&(Cn=(Ue&536870912)===0||He?Tg():536870912);var n=En.current;return n!==null&&(n.flags|=32),Cn}function dn(n,a,o){(n===Qe&&(Ye===2||Ye===9)||n.cancelPendingCommit!==null)&&(Pi(n,0),aa(n,Ue,Cn,!1)),Ao(n,o),((Be&2)===0||n!==Qe)&&(n===Qe&&((Be&2)===0&&(Ha|=o),st===4&&aa(n,Ue,Cn,!1)),rr(n))}function py(n,a,o){if((Be&6)!==0)throw Error(i(327));var c=!o&&(a&124)===0&&(a&n.expiredLanes)===0||Oo(n,a),f=c?GS(n,a):Xf(n,a,!0),m=c;do{if(f===0){Ii&&!c&&aa(n,a,0,!1);break}else{if(o=n.current.alternate,m&&!XS(o)){f=Xf(n,a,!1),m=!1;continue}if(f===2){if(m=a,n.errorRecoveryDisabledLanes&m)var x=0;else x=n.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){a=x;e:{var E=n;f=fs;var A=E.current.memoizedState.isDehydrated;if(A&&(Pi(E,x).flags|=256),x=Xf(E,x,!1),x!==2){if(Uf&&!A){E.errorRecoveryDisabledLanes|=m,Ha|=m,f=4;break e}m=Zt,Zt=f,m!==null&&(Zt===null?Zt=m:Zt.push.apply(Zt,m))}f=x}if(m=!1,f!==2)continue}}if(f===1){Pi(n,0),aa(n,a,0,!0);break}e:{switch(c=n,m=f,m){case 0:case 1:throw Error(i(345));case 4:if((a&4194048)!==a)break;case 6:aa(c,a,Cn,!ea);break e;case 2:Zt=null;break;case 3:case 5:break;default:throw Error(i(329))}if((a&62914560)===a&&(f=Hf+300-Kn(),10<f)){if(aa(c,a,Cn,!ea),Cl(c,0,!0)!==0)break e;c.timeoutHandle=Yy(my.bind(null,c,o,Zt,gc,$f,a,Cn,Ha,qi,ea,m,2,-0,0),f);break e}my(c,o,Zt,gc,$f,a,Cn,Ha,qi,ea,m,0,-0,0)}}break}while(!0);rr(n)}function my(n,a,o,c,f,m,x,E,A,B,Q,K,Y,P){if(n.timeoutHandle=-1,K=a.subtreeFlags,(K&8192||(K&16785408)===16785408)&&(ws={stylesheets:null,count:0,unsuspend:ET},ly(a),K=MT(),K!==null)){n.cancelPendingCommit=K(_y.bind(null,n,a,m,o,c,f,x,E,A,Q,1,Y,P)),aa(n,m,x,!B);return}_y(n,a,m,o,c,f,x,E,A)}function XS(n){for(var a=n;;){var o=a.tag;if((o===0||o===11||o===15)&&a.flags&16384&&(o=a.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var c=0;c<o.length;c++){var f=o[c],m=f.getSnapshot;f=f.value;try{if(!an(m(),f))return!1}catch{return!1}}if(o=a.child,a.subtreeFlags&16384&&o!==null)o.return=a,a=o;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function aa(n,a,o,c){a&=~Lf,a&=~Ha,n.suspendedLanes|=a,n.pingedLanes&=~a,c&&(n.warmLanes|=a),c=n.expirationTimes;for(var f=a;0<f;){var m=31-rn(f),x=1<<m;c[m]=-1,f&=~x}o!==0&&Eg(n,o,a)}function vc(){return(Be&6)===0?(ps(0),!1):!0}function Yf(){if(Oe!==null){if(Ye===0)var n=Oe.return;else n=Oe,gr=za=null,of(n),Ui=null,as=0,n=Oe;for(;n!==null;)V0(n.alternate,n),n=n.return;Oe=null}}function Pi(n,a){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,cT(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),Yf(),Qe=n,Oe=o=hr(n.current,null),Ue=a,Ye=0,cn=null,ea=!1,Ii=Oo(n,a),Uf=!1,qi=Cn=Lf=Ha=ta=st=0,Zt=fs=null,$f=!1,(a&8)!==0&&(a|=a&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=a;0<c;){var f=31-rn(c),m=1<<f;a|=n[f],c&=~m}return Tr=a,Hl(),o}function gy(n,a){ke=null,C.H=ac,a===Qo||a===Vl?(a=zv(),Ye=3):a===Ov?(a=zv(),Ye=4):Ye=a===D0?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,cn=a,Oe===null&&(st=1,cc(n,_n(a,n.current)))}function vy(){var n=C.H;return C.H=ac,n===null?ac:n}function yy(){var n=C.A;return C.A=YS,n}function Pf(){st=4,ea||(Ue&4194048)!==Ue&&En.current!==null||(Ii=!0),(ta&134217727)===0&&(Ha&134217727)===0||Qe===null||aa(Qe,Ue,Cn,!1)}function Xf(n,a,o){var c=Be;Be|=2;var f=vy(),m=yy();(Qe!==n||Ue!==a)&&(gc=null,Pi(n,a)),a=!1;var x=st;e:do try{if(Ye!==0&&Oe!==null){var E=Oe,A=cn;switch(Ye){case 8:Yf(),x=6;break e;case 3:case 2:case 9:case 6:En.current===null&&(a=!0);var B=Ye;if(Ye=0,cn=null,Xi(n,E,A,B),o&&Ii){x=0;break e}break;default:B=Ye,Ye=0,cn=null,Xi(n,E,A,B)}}FS(),x=st;break}catch(Q){gy(n,Q)}while(!0);return a&&n.shellSuspendCounter++,gr=za=null,Be=c,C.H=f,C.A=m,Oe===null&&(Qe=null,Ue=0,Hl()),x}function FS(){for(;Oe!==null;)by(Oe)}function GS(n,a){var o=Be;Be|=2;var c=vy(),f=yy();Qe!==n||Ue!==a?(gc=null,mc=Kn()+500,Pi(n,a)):Ii=Oo(n,a);e:do try{if(Ye!==0&&Oe!==null){a=Oe;var m=cn;t:switch(Ye){case 1:Ye=0,cn=null,Xi(n,a,m,1);break;case 2:case 9:if(Av(m)){Ye=0,cn=null,wy(a);break}a=function(){Ye!==2&&Ye!==9||Qe!==n||(Ye=7),rr(n)},m.then(a,a);break e;case 3:Ye=7;break e;case 4:Ye=5;break e;case 7:Av(m)?(Ye=0,cn=null,wy(a)):(Ye=0,cn=null,Xi(n,a,m,7));break;case 5:var x=null;switch(Oe.tag){case 26:x=Oe.memoizedState;case 5:case 27:var E=Oe;if(!x||tb(x)){Ye=0,cn=null;var A=E.sibling;if(A!==null)Oe=A;else{var B=E.return;B!==null?(Oe=B,yc(B)):Oe=null}break t}}Ye=0,cn=null,Xi(n,a,m,5);break;case 6:Ye=0,cn=null,Xi(n,a,m,6);break;case 8:Yf(),st=6;break e;default:throw Error(i(462))}}VS();break}catch(Q){gy(n,Q)}while(!0);return gr=za=null,C.H=c,C.A=f,Be=o,Oe!==null?0:(Qe=null,Ue=0,Hl(),st)}function VS(){for(;Oe!==null&&!g_();)by(Oe)}function by(n){var a=F0(n.alternate,n,Tr);n.memoizedProps=n.pendingProps,a===null?yc(n):Oe=a}function wy(n){var a=n,o=a.alternate;switch(a.tag){case 15:case 0:a=I0(o,a,a.pendingProps,a.type,void 0,Ue);break;case 11:a=I0(o,a,a.pendingProps,a.type.render,a.ref,Ue);break;case 5:of(a);default:V0(o,a),a=Oe=xv(a,Tr),a=F0(o,a,Tr)}n.memoizedProps=n.pendingProps,a===null?yc(n):Oe=a}function Xi(n,a,o,c){gr=za=null,of(a),Ui=null,as=0;var f=a.return;try{if(LS(n,f,a,o,Ue)){st=1,cc(n,_n(o,n.current)),Oe=null;return}}catch(m){if(f!==null)throw Oe=f,m;st=1,cc(n,_n(o,n.current)),Oe=null;return}a.flags&32768?(He||c===1?n=!0:Ii||(Ue&536870912)!==0?n=!1:(ea=n=!0,(c===2||c===9||c===3||c===6)&&(c=En.current,c!==null&&c.tag===13&&(c.flags|=16384))),xy(a,n)):yc(a)}function yc(n){var a=n;do{if((a.flags&32768)!==0){xy(a,ea);return}n=a.return;var o=HS(a.alternate,a,Tr);if(o!==null){Oe=o;return}if(a=a.sibling,a!==null){Oe=a;return}Oe=a=n}while(a!==null);st===0&&(st=5)}function xy(n,a){do{var o=IS(n.alternate,n);if(o!==null){o.flags&=32767,Oe=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!a&&(n=n.sibling,n!==null)){Oe=n;return}Oe=n=o}while(n!==null);st=6,Oe=null}function _y(n,a,o,c,f,m,x,E,A){n.cancelPendingCommit=null;do bc();while(zt!==0);if((Be&6)!==0)throw Error(i(327));if(a!==null){if(a===n.current)throw Error(i(177));if(m=a.lanes|a.childLanes,m|=Dd,E_(n,o,m,x,E,A),n===Qe&&(Oe=Qe=null,Ue=0),Bi=a,ra=n,Yi=o,If=m,qf=f,fy=c,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,KS(Tl,function(){return Cy(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||c){c=C.T,C.T=null,f=z.p,z.p=2,x=Be,Be|=4;try{qS(n,a,o)}finally{Be=x,z.p=f,C.T=c}}zt=1,Sy(),Ty(),ky()}}function Sy(){if(zt===1){zt=0;var n=ra,a=Bi,o=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||o){o=C.T,C.T=null;var c=z.p;z.p=2;var f=Be;Be|=4;try{iy(a,n);var m=rh,x=dv(n.containerInfo),E=m.focusedElem,A=m.selectionRange;if(x!==E&&E&&E.ownerDocument&&uv(E.ownerDocument.documentElement,E)){if(A!==null&&Nd(E)){var B=A.start,Q=A.end;if(Q===void 0&&(Q=B),"selectionStart"in E)E.selectionStart=B,E.selectionEnd=Math.min(Q,E.value.length);else{var K=E.ownerDocument||document,Y=K&&K.defaultView||window;if(Y.getSelection){var P=Y.getSelection(),ye=E.textContent.length,ge=Math.min(A.start,ye),Fe=A.end===void 0?ge:Math.min(A.end,ye);!P.extend&&ge>Fe&&(x=Fe,Fe=ge,ge=x);var H=cv(E,ge),U=cv(E,Fe);if(H&&U&&(P.rangeCount!==1||P.anchorNode!==H.node||P.anchorOffset!==H.offset||P.focusNode!==U.node||P.focusOffset!==U.offset)){var I=K.createRange();I.setStart(H.node,H.offset),P.removeAllRanges(),ge>Fe?(P.addRange(I),P.extend(U.node,U.offset)):(I.setEnd(U.node,U.offset),P.addRange(I))}}}}for(K=[],P=E;P=P.parentNode;)P.nodeType===1&&K.push({element:P,left:P.scrollLeft,top:P.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<K.length;E++){var W=K[E];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}Ac=!!nh,rh=nh=null}finally{Be=f,z.p=c,C.T=o}}n.current=a,zt=2}}function Ty(){if(zt===2){zt=0;var n=ra,a=Bi,o=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||o){o=C.T,C.T=null;var c=z.p;z.p=2;var f=Be;Be|=4;try{ty(n,a.alternate,a)}finally{Be=f,z.p=c,C.T=o}}zt=3}}function ky(){if(zt===4||zt===3){zt=0,v_();var n=ra,a=Bi,o=Yi,c=fy;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?zt=5:(zt=0,Bi=ra=null,Ey(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(na=null),ld(o),a=a.stateNode,nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(No,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=C.T,f=z.p,z.p=2,C.T=null;try{for(var m=n.onRecoverableError,x=0;x<c.length;x++){var E=c[x];m(E.value,{componentStack:E.stack})}}finally{C.T=a,z.p=f}}(Yi&3)!==0&&bc(),rr(n),f=n.pendingLanes,(o&4194090)!==0&&(f&42)!==0?n===Bf?hs++:(hs=0,Bf=n):hs=0,ps(0)}}function Ey(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,Go(a)))}function bc(n){return Sy(),Ty(),ky(),Cy()}function Cy(){if(zt!==5)return!1;var n=ra,a=If;If=0;var o=ld(Yi),c=C.T,f=z.p;try{z.p=32>o?32:o,C.T=null,o=qf,qf=null;var m=ra,x=Yi;if(zt=0,Bi=ra=null,Yi=0,(Be&6)!==0)throw Error(i(331));var E=Be;if(Be|=4,uy(m.current),sy(m,m.current,x,o),Be=E,ps(0,!1),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(No,m)}catch{}return!0}finally{z.p=f,C.T=c,Ey(n,a)}}function My(n,a,o){a=_n(o,a),a=wf(n.stateNode,a,2),n=Gr(n,a,2),n!==null&&(Ao(n,2),rr(n))}function Ge(n,a,o){if(n.tag===3)My(n,n,o);else for(;a!==null;){if(a.tag===3){My(a,n,o);break}else if(a.tag===1){var c=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(na===null||!na.has(c))){n=_n(o,n),o=R0(2),c=Gr(a,o,2),c!==null&&(z0(o,c,a,n),Ao(c,2),rr(c));break}}a=a.return}}function Ff(n,a,o){var c=n.pingCache;if(c===null){c=n.pingCache=new PS;var f=new Set;c.set(a,f)}else f=c.get(a),f===void 0&&(f=new Set,c.set(a,f));f.has(o)||(Uf=!0,f.add(o),n=QS.bind(null,n,a,o),a.then(n,n))}function QS(n,a,o){var c=n.pingCache;c!==null&&c.delete(a),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,Qe===n&&(Ue&o)===o&&(st===4||st===3&&(Ue&62914560)===Ue&&300>Kn()-Hf?(Be&2)===0&&Pi(n,0):Lf|=o,qi===Ue&&(qi=0)),rr(n)}function Ny(n,a){a===0&&(a=kg()),n=Ei(n,a),n!==null&&(Ao(n,a),rr(n))}function WS(n){var a=n.memoizedState,o=0;a!==null&&(o=a.retryLane),Ny(n,o)}function ZS(n,a){var o=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(a),Ny(n,o)}function KS(n,a){return Ir(n,a)}var wc=null,Fi=null,Gf=!1,xc=!1,Vf=!1,Ia=0;function rr(n){n!==Fi&&n.next===null&&(Fi===null?wc=Fi=n:Fi=Fi.next=n),xc=!0,Gf||(Gf=!0,eT())}function ps(n,a){if(!Vf&&xc){Vf=!0;do for(var o=!1,c=wc;c!==null;){if(n!==0){var f=c.pendingLanes;if(f===0)var m=0;else{var x=c.suspendedLanes,E=c.pingedLanes;m=(1<<31-rn(42|n)+1)-1,m&=f&~(x&~E),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,zy(c,m))}else m=Ue,m=Cl(c,c===Qe?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||Oo(c,m)||(o=!0,zy(c,m));c=c.next}while(o);Vf=!1}}function JS(){Oy()}function Oy(){xc=Gf=!1;var n=0;Ia!==0&&(lT()&&(n=Ia),Ia=0);for(var a=Kn(),o=null,c=wc;c!==null;){var f=c.next,m=Ay(c,a);m===0?(c.next=null,o===null?wc=f:o.next=f,f===null&&(Fi=o)):(o=c,(n!==0||(m&3)!==0)&&(xc=!0)),c=f}ps(n)}function Ay(n,a){for(var o=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var x=31-rn(m),E=1<<x,A=f[x];A===-1?((E&o)===0||(E&c)!==0)&&(f[x]=k_(E,a)):A<=a&&(n.expiredLanes|=E),m&=~E}if(a=Qe,o=Ue,o=Cl(n,n===a?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,o===0||n===a&&(Ye===2||Ye===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&di(c),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||Oo(n,o)){if(a=o&-o,a===n.callbackPriority)return a;switch(c!==null&&di(c),ld(o)){case 2:case 8:o=_g;break;case 32:o=Tl;break;case 268435456:o=Sg;break;default:o=Tl}return c=Ry.bind(null,n),o=Ir(o,c),n.callbackPriority=a,n.callbackNode=o,a}return c!==null&&c!==null&&di(c),n.callbackPriority=2,n.callbackNode=null,2}function Ry(n,a){if(zt!==0&&zt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(bc()&&n.callbackNode!==o)return null;var c=Ue;return c=Cl(n,n===Qe?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:(py(n,c,a),Ay(n,Kn()),n.callbackNode!=null&&n.callbackNode===o?Ry.bind(null,n):null)}function zy(n,a){if(bc())return null;py(n,a,!0)}function eT(){uT(function(){(Be&6)!==0?Ir(xg,JS):Oy()})}function Qf(){return Ia===0&&(Ia=Tg()),Ia}function Dy(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Rl(""+n)}function jy(n,a){var o=a.ownerDocument.createElement("input");return o.name=a.name,o.value=a.value,n.id&&o.setAttribute("form",n.id),a.parentNode.insertBefore(o,a),n=new FormData(n),o.parentNode.removeChild(o),n}function tT(n,a,o,c,f){if(a==="submit"&&o&&o.stateNode===f){var m=Dy((f[Gt]||null).action),x=c.submitter;x&&(a=(a=x[Gt]||null)?Dy(a.formAction):x.getAttribute("formAction"),a!==null&&(m=a,x=null));var E=new Ul("action","action",null,c,f);n.push({event:E,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Ia!==0){var A=x?jy(f,x):new FormData(f);mf(o,{pending:!0,data:A,method:f.method,action:m},null,A)}}else typeof m=="function"&&(E.preventDefault(),A=x?jy(f,x):new FormData(f),mf(o,{pending:!0,data:A,method:f.method,action:m},m,A))},currentTarget:f}]})}}for(var Wf=0;Wf<zd.length;Wf++){var Zf=zd[Wf],nT=Zf.toLowerCase(),rT=Zf[0].toUpperCase()+Zf.slice(1);Ln(nT,"on"+rT)}Ln(pv,"onAnimationEnd"),Ln(mv,"onAnimationIteration"),Ln(gv,"onAnimationStart"),Ln("dblclick","onDoubleClick"),Ln("focusin","onFocus"),Ln("focusout","onBlur"),Ln(wS,"onTransitionRun"),Ln(xS,"onTransitionStart"),Ln(_S,"onTransitionCancel"),Ln(vv,"onTransitionEnd"),gi("onMouseEnter",["mouseout","mouseover"]),gi("onMouseLeave",["mouseout","mouseover"]),gi("onPointerEnter",["pointerout","pointerover"]),gi("onPointerLeave",["pointerout","pointerover"]),Ta("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ta("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ta("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ta("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ta("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ta("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ms));function Uy(n,a){a=(a&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],f=c.event;c=c.listeners;e:{var m=void 0;if(a)for(var x=c.length-1;0<=x;x--){var E=c[x],A=E.instance,B=E.currentTarget;if(E=E.listener,A!==m&&f.isPropagationStopped())break e;m=E,f.currentTarget=B;try{m(f)}catch(Q){lc(Q)}f.currentTarget=null,m=A}else for(x=0;x<c.length;x++){if(E=c[x],A=E.instance,B=E.currentTarget,E=E.listener,A!==m&&f.isPropagationStopped())break e;m=E,f.currentTarget=B;try{m(f)}catch(Q){lc(Q)}f.currentTarget=null,m=A}}}}function Ae(n,a){var o=a[cd];o===void 0&&(o=a[cd]=new Set);var c=n+"__bubble";o.has(c)||(Ly(a,n,2,!1),o.add(c))}function Kf(n,a,o){var c=0;a&&(c|=4),Ly(o,n,c,a)}var _c="_reactListening"+Math.random().toString(36).slice(2);function Jf(n){if(!n[_c]){n[_c]=!0,Og.forEach(function(o){o!=="selectionchange"&&(aT.has(o)||Kf(o,!1,n),Kf(o,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[_c]||(a[_c]=!0,Kf("selectionchange",!1,a))}}function Ly(n,a,o,c){switch(sb(a)){case 2:var f=AT;break;case 8:f=RT;break;default:f=hh}o=f.bind(null,a,o,n),f=void 0,!wd||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(a,o,{capture:!0,passive:f}):n.addEventListener(a,o,!0):f!==void 0?n.addEventListener(a,o,{passive:f}):n.addEventListener(a,o,!1)}function eh(n,a,o,c,f){var m=c;if((a&1)===0&&(a&2)===0&&c!==null)e:for(;;){if(c===null)return;var x=c.tag;if(x===3||x===4){var E=c.stateNode.containerInfo;if(E===f)break;if(x===4)for(x=c.return;x!==null;){var A=x.tag;if((A===3||A===4)&&x.stateNode.containerInfo===f)return;x=x.return}for(;E!==null;){if(x=hi(E),x===null)return;if(A=x.tag,A===5||A===6||A===26||A===27){c=m=x;continue e}E=E.parentNode}}c=c.return}Pg(function(){var B=m,Q=yd(o),K=[];e:{var Y=yv.get(n);if(Y!==void 0){var P=Ul,ye=n;switch(n){case"keypress":if(Dl(o)===0)break e;case"keydown":case"keyup":P=K_;break;case"focusin":ye="focus",P=Td;break;case"focusout":ye="blur",P=Td;break;case"beforeblur":case"afterblur":P=Td;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=Gg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=I_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=tS;break;case pv:case mv:case gv:P=Y_;break;case vv:P=rS;break;case"scroll":case"scrollend":P=$_;break;case"wheel":P=iS;break;case"copy":case"cut":case"paste":P=X_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=Qg;break;case"toggle":case"beforetoggle":P=sS}var ge=(a&4)!==0,Fe=!ge&&(n==="scroll"||n==="scrollend"),H=ge?Y!==null?Y+"Capture":null:Y;ge=[];for(var U=B,I;U!==null;){var W=U;if(I=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||I===null||H===null||(W=Do(U,H),W!=null&&ge.push(gs(U,W,I))),Fe)break;U=U.return}0<ge.length&&(Y=new P(Y,ye,null,o,Q),K.push({event:Y,listeners:ge}))}}if((a&7)===0){e:{if(Y=n==="mouseover"||n==="pointerover",P=n==="mouseout"||n==="pointerout",Y&&o!==vd&&(ye=o.relatedTarget||o.fromElement)&&(hi(ye)||ye[fi]))break e;if((P||Y)&&(Y=Q.window===Q?Q:(Y=Q.ownerDocument)?Y.defaultView||Y.parentWindow:window,P?(ye=o.relatedTarget||o.toElement,P=B,ye=ye?hi(ye):null,ye!==null&&(Fe=l(ye),ge=ye.tag,ye!==Fe||ge!==5&&ge!==27&&ge!==6)&&(ye=null)):(P=null,ye=B),P!==ye)){if(ge=Gg,W="onMouseLeave",H="onMouseEnter",U="mouse",(n==="pointerout"||n==="pointerover")&&(ge=Qg,W="onPointerLeave",H="onPointerEnter",U="pointer"),Fe=P==null?Y:zo(P),I=ye==null?Y:zo(ye),Y=new ge(W,U+"leave",P,o,Q),Y.target=Fe,Y.relatedTarget=I,W=null,hi(Q)===B&&(ge=new ge(H,U+"enter",ye,o,Q),ge.target=I,ge.relatedTarget=Fe,W=ge),Fe=W,P&&ye)t:{for(ge=P,H=ye,U=0,I=ge;I;I=Gi(I))U++;for(I=0,W=H;W;W=Gi(W))I++;for(;0<U-I;)ge=Gi(ge),U--;for(;0<I-U;)H=Gi(H),I--;for(;U--;){if(ge===H||H!==null&&ge===H.alternate)break t;ge=Gi(ge),H=Gi(H)}ge=null}else ge=null;P!==null&&$y(K,Y,P,ge,!1),ye!==null&&Fe!==null&&$y(K,Fe,ye,ge,!0)}}e:{if(Y=B?zo(B):window,P=Y.nodeName&&Y.nodeName.toLowerCase(),P==="select"||P==="input"&&Y.type==="file")var le=rv;else if(tv(Y))if(av)le=vS;else{le=mS;var Ne=pS}else P=Y.nodeName,!P||P.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?B&&gd(B.elementType)&&(le=rv):le=gS;if(le&&(le=le(n,B))){nv(K,le,o,Q);break e}Ne&&Ne(n,Y,B),n==="focusout"&&B&&Y.type==="number"&&B.memoizedProps.value!=null&&md(Y,"number",Y.value)}switch(Ne=B?zo(B):window,n){case"focusin":(tv(Ne)||Ne.contentEditable==="true")&&(Si=Ne,Od=B,Bo=null);break;case"focusout":Bo=Od=Si=null;break;case"mousedown":Ad=!0;break;case"contextmenu":case"mouseup":case"dragend":Ad=!1,fv(K,o,Q);break;case"selectionchange":if(bS)break;case"keydown":case"keyup":fv(K,o,Q)}var he;if(Ed)e:{switch(n){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else _i?Jg(n,o)&&(ve="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ve="onCompositionStart");ve&&(Wg&&o.locale!=="ko"&&(_i||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&_i&&(he=Xg()):(Yr=Q,xd="value"in Yr?Yr.value:Yr.textContent,_i=!0)),Ne=Sc(B,ve),0<Ne.length&&(ve=new Vg(ve,n,null,o,Q),K.push({event:ve,listeners:Ne}),he?ve.data=he:(he=ev(o),he!==null&&(ve.data=he)))),(he=cS?uS(n,o):dS(n,o))&&(ve=Sc(B,"onBeforeInput"),0<ve.length&&(Ne=new Vg("onBeforeInput","beforeinput",null,o,Q),K.push({event:Ne,listeners:ve}),Ne.data=he)),tT(K,n,B,o,Q)}Uy(K,a)})}function gs(n,a,o){return{instance:n,listener:a,currentTarget:o}}function Sc(n,a){for(var o=a+"Capture",c=[];n!==null;){var f=n,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Do(n,o),f!=null&&c.unshift(gs(n,f,m)),f=Do(n,a),f!=null&&c.push(gs(n,f,m))),n.tag===3)return c;n=n.return}return[]}function Gi(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function $y(n,a,o,c,f){for(var m=a._reactName,x=[];o!==null&&o!==c;){var E=o,A=E.alternate,B=E.stateNode;if(E=E.tag,A!==null&&A===c)break;E!==5&&E!==26&&E!==27||B===null||(A=B,f?(B=Do(o,m),B!=null&&x.unshift(gs(o,B,A))):f||(B=Do(o,m),B!=null&&x.push(gs(o,B,A)))),o=o.return}x.length!==0&&n.push({event:a,listeners:x})}var iT=/\r\n?/g,oT=/\u0000|\uFFFD/g;function Hy(n){return(typeof n=="string"?n:""+n).replace(iT,`
`).replace(oT,"")}function Iy(n,a){return a=Hy(a),Hy(n)===a}function Tc(){}function Xe(n,a,o,c,f,m){switch(o){case"children":typeof c=="string"?a==="body"||a==="textarea"&&c===""||bi(n,c):(typeof c=="number"||typeof c=="bigint")&&a!=="body"&&bi(n,""+c);break;case"className":Nl(n,"class",c);break;case"tabIndex":Nl(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Nl(n,o,c);break;case"style":Bg(n,c,m);break;case"data":if(a!=="object"){Nl(n,"data",c);break}case"src":case"href":if(c===""&&(a!=="a"||o!=="href")){n.removeAttribute(o);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(o);break}c=Rl(""+c),n.setAttribute(o,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(a!=="input"&&Xe(n,a,"name",f.name,f,null),Xe(n,a,"formEncType",f.formEncType,f,null),Xe(n,a,"formMethod",f.formMethod,f,null),Xe(n,a,"formTarget",f.formTarget,f,null)):(Xe(n,a,"encType",f.encType,f,null),Xe(n,a,"method",f.method,f,null),Xe(n,a,"target",f.target,f,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(o);break}c=Rl(""+c),n.setAttribute(o,c);break;case"onClick":c!=null&&(n.onclick=Tc);break;case"onScroll":c!=null&&Ae("scroll",n);break;case"onScrollEnd":c!=null&&Ae("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(o=c.__html,o!=null){if(f.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}o=Rl(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(o,""+c):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":c===!0?n.setAttribute(o,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(o,c):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(o,c):n.removeAttribute(o);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(o):n.setAttribute(o,c);break;case"popover":Ae("beforetoggle",n),Ae("toggle",n),Ml(n,"popover",c);break;case"xlinkActuate":dr(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":dr(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":dr(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":dr(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":dr(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":dr(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":dr(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":dr(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":dr(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Ml(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=U_.get(o)||o,Ml(n,o,c))}}function th(n,a,o,c,f,m){switch(o){case"style":Bg(n,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(o=c.__html,o!=null){if(f.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"children":typeof c=="string"?bi(n,c):(typeof c=="number"||typeof c=="bigint")&&bi(n,""+c);break;case"onScroll":c!=null&&Ae("scroll",n);break;case"onScrollEnd":c!=null&&Ae("scrollend",n);break;case"onClick":c!=null&&(n.onclick=Tc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ag.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),a=o.slice(2,f?o.length-7:void 0),m=n[Gt]||null,m=m!=null?m[o]:null,typeof m=="function"&&n.removeEventListener(a,m,f),typeof c=="function")){typeof m!="function"&&m!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(a,c,f);break e}o in n?n[o]=c:c===!0?n.setAttribute(o,""):Ml(n,o,c)}}}function Dt(n,a,o){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ae("error",n),Ae("load",n);var c=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var x=o[m];if(x!=null)switch(m){case"src":c=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Xe(n,a,m,x,o,null)}}f&&Xe(n,a,"srcSet",o.srcSet,o,null),c&&Xe(n,a,"src",o.src,o,null);return;case"input":Ae("invalid",n);var E=m=x=f=null,A=null,B=null;for(c in o)if(o.hasOwnProperty(c)){var Q=o[c];if(Q!=null)switch(c){case"name":f=Q;break;case"type":x=Q;break;case"checked":A=Q;break;case"defaultChecked":B=Q;break;case"value":m=Q;break;case"defaultValue":E=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(i(137,a));break;default:Xe(n,a,c,Q,o,null)}}$g(n,m,E,A,B,x,f,!1),Ol(n);return;case"select":Ae("invalid",n),c=x=m=null;for(f in o)if(o.hasOwnProperty(f)&&(E=o[f],E!=null))switch(f){case"value":m=E;break;case"defaultValue":x=E;break;case"multiple":c=E;default:Xe(n,a,f,E,o,null)}a=m,o=x,n.multiple=!!c,a!=null?yi(n,!!c,a,!1):o!=null&&yi(n,!!c,o,!0);return;case"textarea":Ae("invalid",n),m=f=c=null;for(x in o)if(o.hasOwnProperty(x)&&(E=o[x],E!=null))switch(x){case"value":c=E;break;case"defaultValue":f=E;break;case"children":m=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(i(91));break;default:Xe(n,a,x,E,o,null)}Ig(n,c,f,m),Ol(n);return;case"option":for(A in o)if(o.hasOwnProperty(A)&&(c=o[A],c!=null))switch(A){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:Xe(n,a,A,c,o,null)}return;case"dialog":Ae("beforetoggle",n),Ae("toggle",n),Ae("cancel",n),Ae("close",n);break;case"iframe":case"object":Ae("load",n);break;case"video":case"audio":for(c=0;c<ms.length;c++)Ae(ms[c],n);break;case"image":Ae("error",n),Ae("load",n);break;case"details":Ae("toggle",n);break;case"embed":case"source":case"link":Ae("error",n),Ae("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in o)if(o.hasOwnProperty(B)&&(c=o[B],c!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Xe(n,a,B,c,o,null)}return;default:if(gd(a)){for(Q in o)o.hasOwnProperty(Q)&&(c=o[Q],c!==void 0&&th(n,a,Q,c,o,void 0));return}}for(E in o)o.hasOwnProperty(E)&&(c=o[E],c!=null&&Xe(n,a,E,c,o,null))}function sT(n,a,o,c){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,x=null,E=null,A=null,B=null,Q=null;for(P in o){var K=o[P];if(o.hasOwnProperty(P)&&K!=null)switch(P){case"checked":break;case"value":break;case"defaultValue":A=K;default:c.hasOwnProperty(P)||Xe(n,a,P,null,c,K)}}for(var Y in c){var P=c[Y];if(K=o[Y],c.hasOwnProperty(Y)&&(P!=null||K!=null))switch(Y){case"type":m=P;break;case"name":f=P;break;case"checked":B=P;break;case"defaultChecked":Q=P;break;case"value":x=P;break;case"defaultValue":E=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(i(137,a));break;default:P!==K&&Xe(n,a,Y,P,c,K)}}pd(n,x,E,A,B,Q,m,f);return;case"select":P=x=E=Y=null;for(m in o)if(A=o[m],o.hasOwnProperty(m)&&A!=null)switch(m){case"value":break;case"multiple":P=A;default:c.hasOwnProperty(m)||Xe(n,a,m,null,c,A)}for(f in c)if(m=c[f],A=o[f],c.hasOwnProperty(f)&&(m!=null||A!=null))switch(f){case"value":Y=m;break;case"defaultValue":E=m;break;case"multiple":x=m;default:m!==A&&Xe(n,a,f,m,c,A)}a=E,o=x,c=P,Y!=null?yi(n,!!o,Y,!1):!!c!=!!o&&(a!=null?yi(n,!!o,a,!0):yi(n,!!o,o?[]:"",!1));return;case"textarea":P=Y=null;for(E in o)if(f=o[E],o.hasOwnProperty(E)&&f!=null&&!c.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Xe(n,a,E,null,c,f)}for(x in c)if(f=c[x],m=o[x],c.hasOwnProperty(x)&&(f!=null||m!=null))switch(x){case"value":Y=f;break;case"defaultValue":P=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(i(91));break;default:f!==m&&Xe(n,a,x,f,c,m)}Hg(n,Y,P);return;case"option":for(var ye in o)if(Y=o[ye],o.hasOwnProperty(ye)&&Y!=null&&!c.hasOwnProperty(ye))switch(ye){case"selected":n.selected=!1;break;default:Xe(n,a,ye,null,c,Y)}for(A in c)if(Y=c[A],P=o[A],c.hasOwnProperty(A)&&Y!==P&&(Y!=null||P!=null))switch(A){case"selected":n.selected=Y&&typeof Y!="function"&&typeof Y!="symbol";break;default:Xe(n,a,A,Y,c,P)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in o)Y=o[ge],o.hasOwnProperty(ge)&&Y!=null&&!c.hasOwnProperty(ge)&&Xe(n,a,ge,null,c,Y);for(B in c)if(Y=c[B],P=o[B],c.hasOwnProperty(B)&&Y!==P&&(Y!=null||P!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(i(137,a));break;default:Xe(n,a,B,Y,c,P)}return;default:if(gd(a)){for(var Fe in o)Y=o[Fe],o.hasOwnProperty(Fe)&&Y!==void 0&&!c.hasOwnProperty(Fe)&&th(n,a,Fe,void 0,c,Y);for(Q in c)Y=c[Q],P=o[Q],!c.hasOwnProperty(Q)||Y===P||Y===void 0&&P===void 0||th(n,a,Q,Y,c,P);return}}for(var H in o)Y=o[H],o.hasOwnProperty(H)&&Y!=null&&!c.hasOwnProperty(H)&&Xe(n,a,H,null,c,Y);for(K in c)Y=c[K],P=o[K],!c.hasOwnProperty(K)||Y===P||Y==null&&P==null||Xe(n,a,K,Y,c,P)}var nh=null,rh=null;function kc(n){return n.nodeType===9?n:n.ownerDocument}function qy(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function By(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function ah(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var ih=null;function lT(){var n=window.event;return n&&n.type==="popstate"?n===ih?!1:(ih=n,!0):(ih=null,!1)}var Yy=typeof setTimeout=="function"?setTimeout:void 0,cT=typeof clearTimeout=="function"?clearTimeout:void 0,Py=typeof Promise=="function"?Promise:void 0,uT=typeof queueMicrotask=="function"?queueMicrotask:typeof Py<"u"?function(n){return Py.resolve(null).then(n).catch(dT)}:Yy;function dT(n){setTimeout(function(){throw n})}function ia(n){return n==="head"}function Xy(n,a){var o=a,c=0,f=0;do{var m=o.nextSibling;if(n.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<c&&8>c){o=c;var x=n.ownerDocument;if(o&1&&vs(x.documentElement),o&2&&vs(x.body),o&4)for(o=x.head,vs(o),x=o.firstChild;x;){var E=x.nextSibling,A=x.nodeName;x[Ro]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&x.rel.toLowerCase()==="stylesheet"||o.removeChild(x),x=E}}if(f===0){n.removeChild(m),ks(a);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:c=o.charCodeAt(0)-48;else c=0;o=m}while(o);ks(a)}function oh(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var o=a;switch(a=a.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":oh(o),ud(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function fT(n,a,o,c){for(;n.nodeType===1;){var f=o;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[Ro])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=Hn(n.nextSibling),n===null)break}return null}function hT(n,a,o){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=Hn(n.nextSibling),n===null))return null;return n}function sh(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function pT(n,a){var o=n.ownerDocument;if(n.data!=="$?"||o.readyState==="complete")a();else{var c=function(){a(),o.removeEventListener("DOMContentLoaded",c)};o.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function Hn(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return n}var lh=null;function Fy(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(a===0)return n;a--}else o==="/$"&&a++}n=n.previousSibling}return null}function Gy(n,a,o){switch(a=kc(o),n){case"html":if(n=a.documentElement,!n)throw Error(i(452));return n;case"head":if(n=a.head,!n)throw Error(i(453));return n;case"body":if(n=a.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}function vs(n){for(var a=n.attributes;a.length;)n.removeAttributeNode(a[0]);ud(n)}var Mn=new Map,Vy=new Set;function Ec(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var kr=z.d;z.d={f:mT,r:gT,D:vT,C:yT,L:bT,m:wT,X:_T,S:xT,M:ST};function mT(){var n=kr.f(),a=vc();return n||a}function gT(n){var a=pi(n);a!==null&&a.tag===5&&a.type==="form"?p0(a):kr.r(n)}var Vi=typeof document>"u"?null:document;function Qy(n,a,o){var c=Vi;if(c&&typeof a=="string"&&a){var f=xn(a);f='link[rel="'+n+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),Vy.has(f)||(Vy.add(f),n={rel:n,crossOrigin:o,href:a},c.querySelector(f)===null&&(a=c.createElement("link"),Dt(a,"link",n),kt(a),c.head.appendChild(a)))}}function vT(n){kr.D(n),Qy("dns-prefetch",n,null)}function yT(n,a){kr.C(n,a),Qy("preconnect",n,a)}function bT(n,a,o){kr.L(n,a,o);var c=Vi;if(c&&n&&a){var f='link[rel="preload"][as="'+xn(a)+'"]';a==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+xn(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+xn(o.imageSizes)+'"]')):f+='[href="'+xn(n)+'"]';var m=f;switch(a){case"style":m=Qi(n);break;case"script":m=Wi(n)}Mn.has(m)||(n=y({rel:"preload",href:a==="image"&&o&&o.imageSrcSet?void 0:n,as:a},o),Mn.set(m,n),c.querySelector(f)!==null||a==="style"&&c.querySelector(ys(m))||a==="script"&&c.querySelector(bs(m))||(a=c.createElement("link"),Dt(a,"link",n),kt(a),c.head.appendChild(a)))}}function wT(n,a){kr.m(n,a);var o=Vi;if(o&&n){var c=a&&typeof a.as=="string"?a.as:"script",f='link[rel="modulepreload"][as="'+xn(c)+'"][href="'+xn(n)+'"]',m=f;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Wi(n)}if(!Mn.has(m)&&(n=y({rel:"modulepreload",href:n},a),Mn.set(m,n),o.querySelector(f)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(bs(m)))return}c=o.createElement("link"),Dt(c,"link",n),kt(c),o.head.appendChild(c)}}}function xT(n,a,o){kr.S(n,a,o);var c=Vi;if(c&&n){var f=mi(c).hoistableStyles,m=Qi(n);a=a||"default";var x=f.get(m);if(!x){var E={loading:0,preload:null};if(x=c.querySelector(ys(m)))E.loading=5;else{n=y({rel:"stylesheet",href:n,"data-precedence":a},o),(o=Mn.get(m))&&ch(n,o);var A=x=c.createElement("link");kt(A),Dt(A,"link",n),A._p=new Promise(function(B,Q){A.onload=B,A.onerror=Q}),A.addEventListener("load",function(){E.loading|=1}),A.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Cc(x,a,c)}x={type:"stylesheet",instance:x,count:1,state:E},f.set(m,x)}}}function _T(n,a){kr.X(n,a);var o=Vi;if(o&&n){var c=mi(o).hoistableScripts,f=Wi(n),m=c.get(f);m||(m=o.querySelector(bs(f)),m||(n=y({src:n,async:!0},a),(a=Mn.get(f))&&uh(n,a),m=o.createElement("script"),kt(m),Dt(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(f,m))}}function ST(n,a){kr.M(n,a);var o=Vi;if(o&&n){var c=mi(o).hoistableScripts,f=Wi(n),m=c.get(f);m||(m=o.querySelector(bs(f)),m||(n=y({src:n,async:!0,type:"module"},a),(a=Mn.get(f))&&uh(n,a),m=o.createElement("script"),kt(m),Dt(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(f,m))}}function Wy(n,a,o,c){var f=(f=re.current)?Ec(f):null;if(!f)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(a=Qi(o.href),o=mi(f).hoistableStyles,c=o.get(a),c||(c={type:"style",instance:null,count:0,state:null},o.set(a,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=Qi(o.href);var m=mi(f).hoistableStyles,x=m.get(n);if(x||(f=f.ownerDocument||f,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,x),(m=f.querySelector(ys(n)))&&!m._p&&(x.instance=m,x.state.loading=5),Mn.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Mn.set(n,o),m||TT(f,n,o,x.state))),a&&c===null)throw Error(i(528,""));return x}if(a&&c!==null)throw Error(i(529,""));return null;case"script":return a=o.async,o=o.src,typeof o=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Wi(o),o=mi(f).hoistableScripts,c=o.get(a),c||(c={type:"script",instance:null,count:0,state:null},o.set(a,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function Qi(n){return'href="'+xn(n)+'"'}function ys(n){return'link[rel="stylesheet"]['+n+"]"}function Zy(n){return y({},n,{"data-precedence":n.precedence,precedence:null})}function TT(n,a,o,c){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?c.loading=1:(a=n.createElement("link"),c.preload=a,a.addEventListener("load",function(){return c.loading|=1}),a.addEventListener("error",function(){return c.loading|=2}),Dt(a,"link",o),kt(a),n.head.appendChild(a))}function Wi(n){return'[src="'+xn(n)+'"]'}function bs(n){return"script[async]"+n}function Ky(n,a,o){if(a.count++,a.instance===null)switch(a.type){case"style":var c=n.querySelector('style[data-href~="'+xn(o.href)+'"]');if(c)return a.instance=c,kt(c),c;var f=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),kt(c),Dt(c,"style",f),Cc(c,o.precedence,n),a.instance=c;case"stylesheet":f=Qi(o.href);var m=n.querySelector(ys(f));if(m)return a.state.loading|=4,a.instance=m,kt(m),m;c=Zy(o),(f=Mn.get(f))&&ch(c,f),m=(n.ownerDocument||n).createElement("link"),kt(m);var x=m;return x._p=new Promise(function(E,A){x.onload=E,x.onerror=A}),Dt(m,"link",c),a.state.loading|=4,Cc(m,o.precedence,n),a.instance=m;case"script":return m=Wi(o.src),(f=n.querySelector(bs(m)))?(a.instance=f,kt(f),f):(c=o,(f=Mn.get(m))&&(c=y({},o),uh(c,f)),n=n.ownerDocument||n,f=n.createElement("script"),kt(f),Dt(f,"link",c),n.head.appendChild(f),a.instance=f);case"void":return null;default:throw Error(i(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(c=a.instance,a.state.loading|=4,Cc(c,o.precedence,n));return a.instance}function Cc(n,a,o){for(var c=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=c.length?c[c.length-1]:null,m=f,x=0;x<c.length;x++){var E=c[x];if(E.dataset.precedence===a)m=E;else if(m!==f)break}m?m.parentNode.insertBefore(n,m.nextSibling):(a=o.nodeType===9?o.head:o,a.insertBefore(n,a.firstChild))}function ch(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function uh(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var Mc=null;function Jy(n,a,o){if(Mc===null){var c=new Map,f=Mc=new Map;f.set(o,c)}else f=Mc,c=f.get(o),c||(c=new Map,f.set(o,c));if(c.has(n))return c;for(c.set(n,null),o=o.getElementsByTagName(n),f=0;f<o.length;f++){var m=o[f];if(!(m[Ro]||m[Lt]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var x=m.getAttribute(a)||"";x=n+x;var E=c.get(x);E?E.push(m):c.set(x,[m])}}return c}function eb(n,a,o){n=n.ownerDocument||n,n.head.insertBefore(o,a==="title"?n.querySelector("head > title"):null)}function kT(n,a,o){if(o===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return n=a.disabled,typeof a.precedence=="string"&&n==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function tb(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var ws=null;function ET(){}function CT(n,a,o){if(ws===null)throw Error(i(475));var c=ws;if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var f=Qi(o.href),m=n.querySelector(ys(f));if(m){n=m._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(c.count++,c=Nc.bind(c),n.then(c,c)),a.state.loading|=4,a.instance=m,kt(m);return}m=n.ownerDocument||n,o=Zy(o),(f=Mn.get(f))&&ch(o,f),m=m.createElement("link"),kt(m);var x=m;x._p=new Promise(function(E,A){x.onload=E,x.onerror=A}),Dt(m,"link",o),a.instance=m}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(c.count++,a=Nc.bind(c),n.addEventListener("load",a),n.addEventListener("error",a))}}function MT(){if(ws===null)throw Error(i(475));var n=ws;return n.stylesheets&&n.count===0&&dh(n,n.stylesheets),0<n.count?function(a){var o=setTimeout(function(){if(n.stylesheets&&dh(n,n.stylesheets),n.unsuspend){var c=n.unsuspend;n.unsuspend=null,c()}},6e4);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(o)}}:null}function Nc(){if(this.count--,this.count===0){if(this.stylesheets)dh(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Oc=null;function dh(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Oc=new Map,a.forEach(NT,n),Oc=null,Nc.call(n))}function NT(n,a){if(!(a.state.loading&4)){var o=Oc.get(n);if(o)var c=o.get(null);else{o=new Map,Oc.set(n,o);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var x=f[m];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(o.set(x.dataset.precedence,x),c=x)}c&&o.set(null,c)}f=a.instance,x=f.getAttribute("data-precedence"),m=o.get(x)||c,m===c&&o.set(null,f),o.set(x,f),this.count++,c=Nc.bind(this),f.addEventListener("load",c),f.addEventListener("error",c),m?m.parentNode.insertBefore(f,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),a.state.loading|=4}}var xs={$$typeof:O,Provider:null,Consumer:null,_currentValue:D,_currentValue2:D,_threadCount:0};function OT(n,a,o,c,f,m,x,E){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=od(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=od(0),this.hiddenUpdates=od(null),this.identifierPrefix=c,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function nb(n,a,o,c,f,m,x,E,A,B,Q,K){return n=new OT(n,a,o,x,E,A,B,K),a=1,m===!0&&(a|=24),m=on(3,null,null,a),n.current=m,m.stateNode=n,a=Xd(),a.refCount++,n.pooledCache=a,a.refCount++,m.memoizedState={element:c,isDehydrated:o,cache:a},Qd(m),n}function rb(n){return n?(n=Ci,n):Ci}function ab(n,a,o,c,f,m){f=rb(f),c.context===null?c.context=f:c.pendingContext=f,c=Fr(a),c.payload={element:o},m=m===void 0?null:m,m!==null&&(c.callback=m),o=Gr(n,c,a),o!==null&&(dn(o,n,a),Zo(o,n,a))}function ib(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<a?o:a}}function fh(n,a){ib(n,a),(n=n.alternate)&&ib(n,a)}function ob(n){if(n.tag===13){var a=Ei(n,67108864);a!==null&&dn(a,n,67108864),fh(n,67108864)}}var Ac=!0;function AT(n,a,o,c){var f=C.T;C.T=null;var m=z.p;try{z.p=2,hh(n,a,o,c)}finally{z.p=m,C.T=f}}function RT(n,a,o,c){var f=C.T;C.T=null;var m=z.p;try{z.p=8,hh(n,a,o,c)}finally{z.p=m,C.T=f}}function hh(n,a,o,c){if(Ac){var f=ph(c);if(f===null)eh(n,a,c,Rc,o),lb(n,c);else if(DT(f,n,a,o,c))c.stopPropagation();else if(lb(n,c),a&4&&-1<zT.indexOf(n)){for(;f!==null;){var m=pi(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var x=Sa(m.pendingLanes);if(x!==0){var E=m;for(E.pendingLanes|=2,E.entangledLanes|=2;x;){var A=1<<31-rn(x);E.entanglements[1]|=A,x&=~A}rr(m),(Be&6)===0&&(mc=Kn()+500,ps(0))}}break;case 13:E=Ei(m,2),E!==null&&dn(E,m,2),vc(),fh(m,2)}if(m=ph(c),m===null&&eh(n,a,c,Rc,o),m===f)break;f=m}f!==null&&c.stopPropagation()}else eh(n,a,c,null,o)}}function ph(n){return n=yd(n),mh(n)}var Rc=null;function mh(n){if(Rc=null,n=hi(n),n!==null){var a=l(n);if(a===null)n=null;else{var o=a.tag;if(o===13){if(n=u(a),n!==null)return n;n=null}else if(o===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return Rc=n,null}function sb(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(y_()){case xg:return 2;case _g:return 8;case Tl:case b_:return 32;case Sg:return 268435456;default:return 32}default:return 32}}var gh=!1,oa=null,sa=null,la=null,_s=new Map,Ss=new Map,ca=[],zT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function lb(n,a){switch(n){case"focusin":case"focusout":oa=null;break;case"dragenter":case"dragleave":sa=null;break;case"mouseover":case"mouseout":la=null;break;case"pointerover":case"pointerout":_s.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ss.delete(a.pointerId)}}function Ts(n,a,o,c,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:a,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},a!==null&&(a=pi(a),a!==null&&ob(a)),n):(n.eventSystemFlags|=c,a=n.targetContainers,f!==null&&a.indexOf(f)===-1&&a.push(f),n)}function DT(n,a,o,c,f){switch(a){case"focusin":return oa=Ts(oa,n,a,o,c,f),!0;case"dragenter":return sa=Ts(sa,n,a,o,c,f),!0;case"mouseover":return la=Ts(la,n,a,o,c,f),!0;case"pointerover":var m=f.pointerId;return _s.set(m,Ts(_s.get(m)||null,n,a,o,c,f)),!0;case"gotpointercapture":return m=f.pointerId,Ss.set(m,Ts(Ss.get(m)||null,n,a,o,c,f)),!0}return!1}function cb(n){var a=hi(n.target);if(a!==null){var o=l(a);if(o!==null){if(a=o.tag,a===13){if(a=u(o),a!==null){n.blockedOn=a,C_(n.priority,function(){if(o.tag===13){var c=un();c=sd(c);var f=Ei(o,c);f!==null&&dn(f,o,c),fh(o,c)}});return}}else if(a===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function zc(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var o=ph(n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);vd=c,o.target.dispatchEvent(c),vd=null}else return a=pi(o),a!==null&&ob(a),n.blockedOn=o,!1;a.shift()}return!0}function ub(n,a,o){zc(n)&&o.delete(a)}function jT(){gh=!1,oa!==null&&zc(oa)&&(oa=null),sa!==null&&zc(sa)&&(sa=null),la!==null&&zc(la)&&(la=null),_s.forEach(ub),Ss.forEach(ub)}function Dc(n,a){n.blockedOn===a&&(n.blockedOn=null,gh||(gh=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,jT)))}var jc=null;function db(n){jc!==n&&(jc=n,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){jc===n&&(jc=null);for(var a=0;a<n.length;a+=3){var o=n[a],c=n[a+1],f=n[a+2];if(typeof c!="function"){if(mh(c||o)===null)continue;break}var m=pi(o);m!==null&&(n.splice(a,3),a-=3,mf(m,{pending:!0,data:f,method:o.method,action:c},c,f))}}))}function ks(n){function a(A){return Dc(A,n)}oa!==null&&Dc(oa,n),sa!==null&&Dc(sa,n),la!==null&&Dc(la,n),_s.forEach(a),Ss.forEach(a);for(var o=0;o<ca.length;o++){var c=ca[o];c.blockedOn===n&&(c.blockedOn=null)}for(;0<ca.length&&(o=ca[0],o.blockedOn===null);)cb(o),o.blockedOn===null&&ca.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(c=0;c<o.length;c+=3){var f=o[c],m=o[c+1],x=f[Gt]||null;if(typeof m=="function")x||db(o);else if(x){var E=null;if(m&&m.hasAttribute("formAction")){if(f=m,x=m[Gt]||null)E=x.formAction;else if(mh(f)!==null)continue}else E=x.action;typeof E=="function"?o[c+1]=E:(o.splice(c,3),c-=3),db(o)}}}function vh(n){this._internalRoot=n}Uc.prototype.render=vh.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(i(409));var o=a.current,c=un();ab(o,c,n,a,null,null)},Uc.prototype.unmount=vh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;ab(n.current,2,null,n,null,null),vc(),a[fi]=null}};function Uc(n){this._internalRoot=n}Uc.prototype.unstable_scheduleHydration=function(n){if(n){var a=Mg();n={blockedOn:null,target:n,priority:a};for(var o=0;o<ca.length&&a!==0&&a<ca[o].priority;o++);ca.splice(o,0,n),o===0&&cb(n)}};var fb=t.version;if(fb!=="19.1.0")throw Error(i(527,fb,"19.1.0"));z.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=h(a),n=n!==null?p(n):null,n=n===null?null:n.stateNode,n};var UT={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lc.isDisabled&&Lc.supportsFiber)try{No=Lc.inject(UT),nn=Lc}catch{}}return As.createRoot=function(n,a){if(!s(n))throw Error(i(299));var o=!1,c="",f=M0,m=N0,x=O0,E=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(x=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(E=a.unstable_transitionCallbacks)),a=nb(n,1,!1,null,null,o,c,f,m,x,E,null),n[fi]=a.current,Jf(n),new vh(a)},As.hydrateRoot=function(n,a,o){if(!s(n))throw Error(i(299));var c=!1,f="",m=M0,x=N0,E=O0,A=null,B=null;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(x=o.onCaughtError),o.onRecoverableError!==void 0&&(E=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(A=o.unstable_transitionCallbacks),o.formState!==void 0&&(B=o.formState)),a=nb(n,1,!0,a,o??null,c,f,m,x,E,A,B),a.context=rb(null),o=a.current,c=un(),c=sd(c),f=Fr(c),f.callback=null,Gr(o,f,c),o=c,a.current.lanes=o,Ao(a,o),rr(a),n[fi]=a.current,Jf(n),new Uc(a)},As.version="19.1.0",As}var Cw;function a5(){if(Cw)return Bh.exports;Cw=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Bh.exports=r5(),Bh.exports}var i5=a5();function o5(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var r,i,s,l,u=[],d="",h=e.split("/");for(h[0]||h.shift();s=h.shift();)r=s[0],r==="*"?(u.push(r),d+=s[1]==="?"?"(?:/(.*))?":"/(.*)"):r===":"?(i=s.indexOf("?",1),l=s.indexOf(".",1),u.push(s.substring(1,~i?i:~l?l:s.length)),d+=~i&&!~l?"(?:/([^/]+?))?":"/([^/]+?)",~l&&(d+=(~i?"?":"")+"\\"+s.substring(l))):d+="/"+s;return{keys:u,pattern:new RegExp("^"+d+(t?"(?=$|/)":"/?$"),"i")}}var Fh={exports:{}},Gh={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mw;function s5(){if(Mw)return Gh;Mw=1;var e=pl();function t(g,b){return g===b&&(g!==0||1/g===1/b)||g!==g&&b!==b}var r=typeof Object.is=="function"?Object.is:t,i=e.useState,s=e.useEffect,l=e.useLayoutEffect,u=e.useDebugValue;function d(g,b){var w=b(),S=i({inst:{value:w,getSnapshot:b}}),T=S[0].inst,k=S[1];return l(function(){T.value=w,T.getSnapshot=b,h(T)&&k({inst:T})},[g,w,b]),s(function(){return h(T)&&k({inst:T}),g(function(){h(T)&&k({inst:T})})},[g]),u(w),w}function h(g){var b=g.getSnapshot;g=g.value;try{var w=b();return!r(g,w)}catch{return!0}}function p(g,b){return b()}var y=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?p:d;return Gh.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:y,Gh}var Nw;function Y1(){return Nw||(Nw=1,Fh.exports=s5()),Fh.exports}var P1=Y1();const l5=gm(P1),c5=Zk.useInsertionEffect,u5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",d5=u5?ce.useLayoutEffect:ce.useEffect,f5=c5||d5,X1=e=>{const t=ce.useRef([e,(...r)=>t[0](...r)]).current;return f5(()=>{t[0]=e}),t[1]},h5="popstate",Fm="pushState",Gm="replaceState",p5="hashchange",Ow=[h5,Fm,Gm,p5],m5=e=>{for(const t of Ow)addEventListener(t,e);return()=>{for(const t of Ow)removeEventListener(t,e)}},F1=(e,t)=>P1.useSyncExternalStore(m5,e,t),g5=()=>location.search,v5=({ssrSearch:e=""}={})=>F1(g5,()=>e),Aw=()=>location.pathname,y5=({ssrPath:e}={})=>F1(Aw,e?()=>e:Aw),b5=(e,{replace:t=!1,state:r=null}={})=>history[t?Gm:Fm](r,"",e),w5=(e={})=>[y5(e),b5],Rw=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[Rw]>"u"){for(const e of[Fm,Gm]){const t=history[e];history[e]=function(){const r=t.apply(this,arguments),i=new Event(e);return i.arguments=arguments,dispatchEvent(i),r}}Object.defineProperty(window,Rw,{value:!0})}const x5=(e,t)=>t.toLowerCase().indexOf(e.toLowerCase())?"~"+t:t.slice(e.length)||"/",G1=(e="")=>e==="/"?"":e,_5=(e,t)=>e[0]==="~"?e.slice(1):G1(t)+e,S5=(e="",t)=>x5(zw(G1(e)),zw(t)),zw=e=>{try{return decodeURI(e)}catch{return e}},V1={hook:w5,searchHook:v5,parser:o5,base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:e=>e},Q1=ce.createContext(V1),gl=()=>ce.useContext(Q1),W1={},Z1=ce.createContext(W1),K1=()=>ce.useContext(Z1),Vu=e=>{const[t,r]=e.hook(e);return[S5(e.base,t),X1((i,s)=>r(_5(i,e.base),s))]},Vm=()=>Vu(gl()),J1=(e,t,r,i)=>{const{pattern:s,keys:l}=t instanceof RegExp?{keys:!1,pattern:t}:e(t||"*",i),u=s.exec(r)||[],[d,...h]=u;return d!==void 0?[!0,(()=>{const p=l!==!1?Object.fromEntries(l.map((g,b)=>[g,h[b]])):u.groups;let y={...h};return p&&Object.assign(y,p),y})(),...i?[d]:[]]:[!1,null]},T5=({children:e,...t})=>{var y,g;const r=gl(),i=t.hook?V1:r;let s=i;const[l,u]=((y=t.ssrPath)==null?void 0:y.split("?"))??[];u&&(t.ssrSearch=u,t.ssrPath=l),t.hrefs=t.hrefs??((g=t.hook)==null?void 0:g.hrefs);let d=ce.useRef({}),h=d.current,p=h;for(let b in i){const w=b==="base"?i[b]+(t[b]||""):t[b]||i[b];h===p&&w!==p[b]&&(d.current=p={...p}),p[b]=w,(w!==i[b]||w!==s[b])&&(s=p)}return ce.createElement(Q1.Provider,{value:s,children:e})},Dw=({children:e,component:t},r)=>t?ce.createElement(t,{params:r}):typeof e=="function"?e(r):e,k5=e=>{let t=ce.useRef(W1);const r=t.current;return t.current=Object.keys(e).length!==Object.keys(r).length||Object.entries(e).some(([i,s])=>s!==r[i])?e:r},Pa=({path:e,nest:t,match:r,...i})=>{const s=gl(),[l]=Vu(s),[u,d,h]=r??J1(s.parser,e,l,t),p=k5({...K1(),...d});if(!u)return null;const y=h?ce.createElement(T5,{base:h},Dw(i,p)):Dw(i,p);return ce.createElement(Z1.Provider,{value:p,children:y})},io=ce.forwardRef((e,t)=>{const r=gl(),[i,s]=Vu(r),{to:l="",href:u=l,onClick:d,asChild:h,children:p,className:y,replace:g,state:b,...w}=e,S=X1(k=>{k.ctrlKey||k.metaKey||k.altKey||k.shiftKey||k.button!==0||(d==null||d(k),k.defaultPrevented||(k.preventDefault(),s(u,e)))}),T=r.hrefs(u[0]==="~"?u.slice(1):r.base+u,r);return h&&ce.isValidElement(p)?ce.cloneElement(p,{onClick:S,href:T}):ce.createElement("a",{...w,onClick:S,href:T,className:y!=null&&y.call?y(i===u):y,children:p,ref:t})}),e2=e=>Array.isArray(e)?e.flatMap(t=>e2(t&&t.type===ce.Fragment?t.props.children:t)):[e],E5=({children:e,location:t})=>{const r=gl(),[i]=Vu(r);for(const s of e2(e)){let l=0;if(ce.isValidElement(s)&&(l=J1(r.parser,s.props.path,t||i,s.props.nest))[0])return ce.cloneElement(s,{match:l})}return null};function Qu(e,t){for(const r in e)t(e[r],r)}function gn(e,t){e.forEach(t)}function Tt(e,t,r){if(!e)throw Error(`${r?r+": ":""}${t}`)}function Ur({node:e=[],from:t,source:r,parent:i=t||r,to:s,target:l,child:u=s||l,scope:d={},meta:h={},family:p={type:"regular"},regional:y}={}){const g=$s(i),b=$s(p.links),w=$s(p.owners),S=[];gn(e,k=>k&&Rn(S,k));const T={id:L5(),seq:S,next:$s(u),meta:h,scope:d,family:{triggers:g.length,type:p.type||"crosslink",links:b,owners:w}};return gn(b,k=>Rn(Wu(k),T)),gn(w,k=>Rn(Zu(k),T)),gn(g,k=>Rn(k.next,T)),T}function t2(e,t,r){let i,s=zr,l=null,u=it;if(e.target&&(t=e.params,r=e.defer,i=e.meta,s="page"in e?e.page:s,e.stack&&(l=e.stack),u=Qc(e)||u,e=e.target),u&&it&&u!==it&&(it=null),Array.isArray(e))for(let S=0;S<e.length;S++)Xa("pure",s,yn(e[S]),l,t[S],u,i);else Xa("pure",s,yn(e),l,t,u,i);if(r&&!Wc)return;const d={isRoot:Wc,currentPage:zr,scope:it,isWatch:Zh,isPure:hu};let h,p,y,g,b,w;Wc=0;e:for(;g=P5();){const{idx:S,stack:T,type:k}=g;y=T.node,zr=b=T.page,it=Qc(T),b?w=b.reg:it&&(w=it.reg);const _=!!b,M=!!it,O={fail:0,scope:y.scope};h=p=0;for(let L=S;L<y.seq.length&&!h;L++){const j=y.seq[L];if(j.order){const{priority:X,barrierID:G}=j.order,ee=G?b?`${b.fullID}_${G}`:G:0;if(L!==S||k!==X){G?Wh.has(ee)||(Wh.add(ee),Pp(L,T,X,G)):Pp(L,T,X,0);continue e}G&&Wh.delete(ee)}switch(j.type){case"mov":{const G=j.data;let ee;switch(G.from){case"stack":ee=du(T);break;case"a":case"b":ee=T[G.from];break;case"value":ee=G.store;break;case"store":if(w&&!w[G.store.id])if(_){const ne=d2(b,G.store.id);T.page=b=ne,ne?w=ne.reg:M?(bo(it,G.store,0,1,G.softRead),w=it.reg):w=void 0}else M&&bo(it,G.store,0,1,G.softRead);ee=Fs(w&&w[G.store.id]||G.store)}switch(G.to){case"stack":T.value=ee;break;case"a":case"b":T[G.to]=ee;break;case"store":X5(b,it,G.target,0).current=ee}break}case"compute":const X=j.data;if(X.fn){Zh=y.meta.op==="watch",hu=X.pure;const G=X.safe?(0,X.fn)(du(T),O.scope,T):G5(O,X.fn,T);X.filter?p=!G:T.value=G,Zh=d.isWatch,hu=d.isPure}}h=O.fail||p}if(!h){const L=du(T),j=Qc(T);if(gn(y.next,X=>{Xa("child",b,X,T,L,j)}),j){y.meta.needFxCounter&&Xa("child",b,j.fxCount,T,L,j),y.meta.storeChange&&Xa("child",b,j.storeChange,T,L,j),y.meta.warnSerialize&&Xa("child",b,j.warnSerializeNode,T,L,j);const X=j.additionalLinks[y.id];X&&gn(X,G=>{Xa("child",b,G,T,L,j)})}}}Wc=d.isRoot,zr=d.currentPage,it=Qc(d)}function C5(e,t="combine"){let r=t+"(",i="",s=0;return Qu(e,l=>{s<25&&(l!=null&&(r+=i,r+=_a(l)?r2(l).fullName:l.toString()),s+=1,i=", ")}),r+")"}function M5(e,t){let r,i;const s=e;if(t){const l=r2(t);e.length===0?(r=l.path,i=l.fullName):(r=l.path.concat([e]),i=l.fullName.length===0?e:l.fullName+"/"+e)}else r=e.length===0?[]:[e],i=e;return{shortName:s,fullName:i,path:r}}function ci(e,t){if(!t||!t.name&&!t.named&&!t.loc)return e;let r=`[${e}]`;const i=t.named||t.name;i&&(r+=` unit '${i}'`);const s=t.loc;return!i&&s&&(r+=` (${s.file}:${s.line}:${s.column})`),r}function Qm(e,t){const r=e[0];l2(r);let i=r.or;const s=r.and;if(s){const l=s[0];if(cr(l)&&"and"in l){const u=Qm(s);e=u[0],i={...i,...u[1]}}else e=s}return[e,i]}function qp(e){const t=()=>e();return t.unsubscribe=()=>e(),t}function Fn(e,...t){}function Ie(e,t){const r=ll({or:t,and:typeof e=="string"?{name:e}:e}),i=ci("event",r),s=(d,...h)=>(Tt(!ma(s,"derived"),"call of derived event is not supported, use createEvent instead",i),Tt(!hu,"unit call from pure function is not supported, use operators like sample instead",i),zr?((p,y,g,b)=>{const w=zr;Hw(null);const T=p.create(g,b);return Hw(w),T})(s,l,d,h):s.create(d,h)),l=H5(),u=Object.assign(s,{graphite:Ur({meta:p2(r.actualOp||"event",s,r,Ju(Ie)),regional:1}),create:d=>(t2({target:s,params:d,scope:it}),d),watch:d=>f2(s,d),map:d=>Kh(s,go,d,[Rr()]),filter:d=>Kh(s,"filter",d.fn?d:d.fn,[Rr(Ku,1)]),filterMap:d=>Kh(s,"filterMap",d,[Rr(),vo(h=>!zn(h),1)]),prepend(d){Tt(s.targetable,".prepend of derived event is not supported, call source event instead",i);const h=Ie("* → "+s.shortName,{parent:il(s)});return Fn("eventPrepend",yn(h)),ri(h,s,[Rr()],"prepend",d),Q5(s,h),h}});return r!=null&&r.domain&&r.domain.hooks.event(u),Ar(u,"id",u.graphite.id),s2(u.graphite),u}function jw(e,t,r,i,s){return Bp(r,`${s} ${t}`,"first argument"),Tt($r(i),"second argument should be a function",s),ol(!ma(e,"derived"),`${t} in derived store`,`${t} in store created via createStore`,s),gn(Array.isArray(r)?r:[r],l=>{e.off(l),m2(l,e,"on",B5,i)}),e}function Bt(e,t){const r=ll(t),i=yo(e),s=ci("store",r),l=Ie({named:"updates",derived:1});Fn("storeBase",i);const u=i.id,d="skipVoid"in r,h=d&&!r.skipVoid;ol(!(d&&r.skipVoid),"{skipVoid: true}","updateFilter",s);const p={updates:l,defaultState:e,stateRef:i,getState(){let _,M=i;if(zr){let O=zr;for(;O&&!O.reg[u];)O=il(O);O&&(_=O)}return!_&&it&&(bo(it,i,1),_=it),_&&(M=_.reg[u]),Fs(M)},setState:_=>t2({target:p,params:_,defer:1,scope:it}),reset:(..._)=>(Tt(p.targetable,".reset of derived store is not supported",s),gn(_,M=>jw(p,".reset",M,()=>p.defaultState,s)),p),on:(_,M)=>(Tt(p.targetable,".on of derived store is not supported",s),jw(p,".on",_,M,s)),off(_){const M=yn(_).id,O=yn(p).family.links.find(L=>L.meta.onTrigger===M);return O&&ju(O),p},map(_,M){let O,L;cr(_)&&(O=_,_=_.fn);const j=p.getState(),X=zn(j);(!X||X&&h)&&(L=_(j));const G=Bt(L,{name:`${p.shortName} → *`,derived:1,...M,and:O}),ee=m2(p,G,go,Ku,_);return Yp(or(G),{type:go,fn:_,from:i}),or(G).noInit=1,Fn("storeMap",i,ee),G},watch(_,M){if(ol(!M,"watch second argument","sample",s),!M||!_a(_)){const O=f2(p,_);return Fn("storeWatch",i,_)||_(p.getState()),O}return Tt($r(M),"second argument should be a function",s),_.watch(O=>M(p.getState(),O))}},y=p2("store",p,r,Ju(Bt)),g=p.defaultConfig.updateFilter;p.graphite=Ur({scope:{state:i,fn:g},node:[vo((_,M,O)=>(O.scope&&!O.scope.reg[i.id]&&(O.b=1),_)),Ka(i),vo((_,M,{a:O,b:L})=>{const j=zn(_);return j&&!d&&j5(`${s}: ${mu}`,ma(p,"unitTrace")),(j&&h||!j)&&(_!==O||L)},1),g&&Rr(c2,1),An({from:"stack",target:i})],child:l,meta:{...y,defaultState:e,stateRef:i},regional:1}),Ar(p,"id",p.graphite.id),Ar(p,"rootStateRefId",u);const b=ma(p,"serialize"),w=ma(p,"derived"),S=b==="ignore",T=ma(p,"sid");T&&(Ar(p,"storeChange",1),i.sid=T),T||S||w||Ar(p,"warnSerialize",1);const k=zn(e);return Tt(w||!k||k&&h,mu,s),w&&k&&!d&&console.error(`${s}: ${mu}`),Du(p,[l]),r!=null&&r.domain&&r.domain.hooks.store(p),w||(p.reinit=Ie({named:"reinit"}),p.reset(p.reinit)),i.meta=p.graphite.meta,s2(p.graphite),p}function Gn(...e){let t,r,i;[e,i]=Qm(e);const s=ci("combine",i),l=e[e.length-1],u=e.length>1&&!jn(l)&&cr(l),d=u&&l,h=u?e[e.length-2]:l;let p,y,g;if($r(h)?(r=e.slice(0,u?-2:-1),t=h):r=e,r.length===1){const b=r[0];jn(b)||(p=b,y=1)}if(!y&&(p=r,t)){g=1;const b=t;t=w=>b(...w)}return Tt(cr(p),`${s}: shape should be an object`),W5(Array.isArray(p),!g,p,Ju(Gn),i,t,d)}function N5(e,t){let r=0;return gn(Z5,i=>{i in e&&(Tt(e[i]!=null,g2(t,i)),r=1)}),r}function vl(...e){let t,r,i,s,[[l,u,d],h]=Qm(e),p=1;const y=ci("sample",h);return zn(u)&&cr(l)&&N5(l,y)&&(u=l.clock,d=l.fn,"batch"in l?p=l.batch:(ol(!("greedy"in l),"greedy in sample","batch",y),p=!l.greedy),s=l.filter,t=l.target,r=l.name,i=l.sid,l=l.source),K5("sample",u,l,s,t,d,r,h,p,1,0,i)}function Co(e,t,r){const i=ci("restore",r);if(Tt(!jn(e),"restore($store) is not supported",i),a2(e)||zu(e)){const l=il(e),u=Bt(t,{parent:l,name:e.shortName,and:r});return ri(zu(e)?e.doneData:e,u),l&&l.hooks.store(u),u}const s=Array.isArray(e)?[]:{};return Qu(e,(l,u)=>s[u]=jn(l)?l:Bt(l,{name:u})),s}function O5(e,{scope:t,safe:r}={}){Tt(t||it||r,"scopeBind: scope not found");const i=t||it;return(...s)=>{function l(){$w(h)}let u,d=0;const h=it;$w(i);try{u=e(...s)}catch(p){u=p,d=1}if(l(),d)throw u;return u instanceof Promise&&u.then(l,l),u}}function n2({unit:e,fn:t,scope:r,batch:i}){const s=[fu.run({fn:u=>t(u)})];i&&s.unshift(fu.compute({priority:"sampler",batch:1})),jn(e)&&s.unshift(fu.mov({store:e.stateRef,to:"stack"}));const l=Array.isArray(e)?e:[e];if(r){const u=[],d=r.additionalLinks;return l.forEach(h=>{const p=d[h.graphite.id]||[];d[h.graphite.id]=p;const y=Ur({node:A5(s,h),meta:{watchOp:h.kind}});p.push(y),u.push(()=>{const g=p.indexOf(y);g!==-1&&p.splice(g,1),ju(y)})}),qp(()=>{u.forEach(h=>h())})}{const u=Ur({node:s,parent:l,family:{owners:l}});return qp(()=>{ju(u)})}}function A5(e,t){return jn(t)?[fu.mov({store:t.stateRef,to:"stack"}),...e]:e}const R5=typeof Symbol<"u"&&Symbol.observable||"@@observable",go="map",yn=e=>e.graphite||e,Wu=e=>e.family.owners,Zu=e=>e.family.links,or=e=>e.stateRef,du=e=>e.value,il=e=>e.parent,Qc=e=>e.scope,ma=(e,t)=>yn(e).meta[t],Ar=(e,t,r)=>yn(e).meta[t]=r,r2=e=>e.compositeName,_a=e=>($r(e)||cr(e))&&"kind"in e,yl=e=>t=>_a(t)&&t.kind===e,jn=yl("store"),a2=yl("event"),zu=yl("effect"),z5=e=>_a(e)&&!!e.targetable,i2=yl("domain"),D5=yl("scope");var Ls={__proto__:null,unit:_a,store:jn,event:a2,effect:zu,targetable:z5,domain:i2,scope:D5,attached:e=>zu(e)&&ma(e,"attached")==1};const Vh=(e,t)=>e.includes(t),Qh=(e,t)=>{const r=e.indexOf(t);r!==-1&&e.splice(r,1)},Rn=(e,t)=>e.push(t),ol=(e,t,r,i)=>!e&&console.error(`${i?i+": ":""}${t} is deprecated${r?`, use ${r} instead`:""}`),j5=(e,t)=>{const r=Error(e);r.stack=t,console.error(r)},Wm=()=>{let e=0;return()=>""+ ++e},U5=Wm(),o2=Wm(),L5=Wm();let $5=null;const s2=e=>{},H5=()=>$5,I5=e=>e,Du=(e,t)=>{const r=yn(e);gn(t,i=>{const s=yn(i);r.family.type!=="domain"&&(s.family.type="crosslink"),Rn(Wu(s),r),Rn(Zu(r),s)})},$s=(e=[])=>(Array.isArray(e)?e:[e]).flat().map(yn),cr=e=>typeof e=="object"&&e!==null,$r=e=>typeof e=="function",zn=e=>e===void 0,l2=e=>Tt(cr(e)||$r(e),"expect first argument be an object"),Uw=(e,t,r,i)=>Tt(!(!cr(e)&&!$r(e)||!("family"in e)&&!("graphite"in e)),`${t}: expect ${r} to be a unit (store, event or effect)${i}`),Bp=(e,t,r)=>{Array.isArray(e)?gn(e,(i,s)=>Uw(i,t,`${s} item of ${r}`,"")):Uw(e,t,r," or array of units")},q5=(e,t,r="target")=>gn($s(t),i=>Tt(!ma(i,"derived"),`${e}: derived unit in "${r}" is not supported, use createStore/createEvent instead"`)),c2=(e,{fn:t},{a:r})=>t(e,r),B5=(e,{fn:t},{a:r})=>t(r,e),Ku=(e,{fn:t})=>t(e),u2=(e,t,r,i)=>{const s={id:o2(),type:e,data:t};return r&&(s.order={priority:r},i&&(s.order.barrierID=++Y5)),s};let Y5=0;const An=({from:e="store",store:t,target:r,to:i=r?"store":"stack",batch:s,priority:l})=>u2("mov",{from:e,store:t,to:i,target:r},l,s),sl=({fn:e,batch:t,priority:r,safe:i=0,filter:s=0,pure:l=0})=>u2("compute",{fn:e,safe:i,filter:s,pure:l},r,t),Zm=({fn:e})=>sl({fn:e,priority:"effect"}),vo=(e,t,r)=>sl({fn:e,safe:1,filter:t,priority:r}),Ka=(e,t,r)=>An({store:e,to:t?"stack":"a",priority:r&&"sampler",batch:1}),Rr=(e=Ku,t)=>sl({fn:e,pure:1,filter:t}),fu={mov:An,compute:sl,filter:({fn:e,pure:t})=>sl({fn:e,filter:1,pure:t}),run:Zm},yo=e=>({id:o2(),current:e,initial:e}),Fs=({current:e})=>e,Yp=(e,t)=>{e.before||(e.before=[]),Rn(e.before,t)};let oo=null;const Km=(e,t)=>{if(!e)return t;if(!t)return e;let r;return(e.v.type===t.v.type&&e.v.id>t.v.id||Xp(e.v.type)>Xp(t.v.type))&&(r=e,e=t,t=r),r=Km(e.r,t),e.r=e.l,e.l=r,e},Jm=[];let Lw=0;for(;Lw<6;)Rn(Jm,{first:null,last:null,size:0}),Lw+=1;const P5=()=>{for(let e=0;e<6;e++){const t=Jm[e];if(t.size>0){if(e===3||e===4){t.size-=1;const i=oo.v;return oo=Km(oo.l,oo.r),i}t.size===1&&(t.last=null);const r=t.first;return t.first=r.r,t.size-=1,r.v}}},Xa=(e,t,r,i,s,l,u)=>Pp(0,{a:null,b:null,node:r,parent:i,value:s,page:t,scope:l,meta:u},e,0),Pp=(e,t,r,i)=>{const s=Xp(r),l=Jm[s],u={v:{idx:e,stack:t,type:r,id:i},l:null,r:null};s===3||s===4?oo=Km(oo,u):(l.size===0?l.first=u:l.last.r=u,l.last=u),l.size+=1},Xp=e=>{switch(e){case"child":return 0;case"pure":return 1;case"read":return 2;case"barrier":return 3;case"sampler":return 4;case"effect":return 5;default:return-1}},Wh=new Set;let it,Wc=1,Zh=0,hu=0,zr=null;const $w=e=>{it=e},Hw=e=>{zr=e},d2=(e,t)=>{if(e){for(;e&&!e.reg[t];)e=e.parent;if(e)return e}return null},X5=(e,t,r,i)=>{const s=d2(e,r.id);return s?s.reg[r.id]:t?(bo(t,r,i),t.reg[r.id]):r},F5=e=>e,bo=(e,t,r,i,s)=>{const l=e.reg;if(l[t.id])return;const u=t.sid,d={id:t.id,current:t.initial,meta:t.meta};if(d.id in e.values.idMap)d.current=e.values.idMap[d.id];else if(u&&u in e.values.sidMap&&!(u in e.sidIdMap)){var h;const p=t==null||(h=t.meta)===null||h===void 0?void 0:h.serialize;d.current=(e.fromSerialize&&p!=="ignore"&&(p==null?void 0:p.read)||F5)(e.values.sidMap[u])}else if(t.before&&!s){let p=0;const y=r||!t.noInit||i;gn(t.before,g=>{switch(g.type){case"map":{const b=g.from;if((b||g.fn)&&(b&&bo(e,b,r,i),y)){const w=b&&l[b.id].current;d.current=g.fn?g.fn(w):w}break}case"field":bo(e,g.from,r,i),p||(p=1,d.current=Array.isArray(d.current)?[...d.current]:{...d.current}),y&&(d.current[g.field]=l[l[g.from.id].id].current)}})}u&&(e.sidIdMap[u]=t.id),l[t.id]=d},G5=(e,t,r)=>{try{return t(du(r),e.scope,r)}catch(i){console.error(i),e.fail=1,e.failReason=i}},ll=(e,t={})=>(cr(e)&&(ll(e.or,t),Qu(e,(r,i)=>{zn(r)||i==="or"||i==="and"||(t[i]=r)}),ll(e.and,t)),t),Iw=(e,t)=>{Qh(e.next,t),Qh(Wu(e),t),Qh(Zu(e),t)},qw=["on","reset","sample","split","merge","guard","forward"],pu=(e,t,r,i,s)=>{let l;e.next.length=0,e.seq.length=0,e.scope=null;let u=Zu(e);const{stateRef:d,defaultShape:h,isRegion:p,op:y}=e.meta;if(d&&(d.before=[],e.meta.stateRef=null),h)for(const b in h)h[b]=null;const g=p?e:i;if(u.length>0){const b=Vh(qw,y),w=!p&&!s,S=w&&r&&!b;for(;l=u.pop();){const T=Vh(l.next,e);Iw(l,e),p&&pu(l,0,0,e,1),T||(l.family.triggers-=1),(t||S||w&&l.family.type==="crosslink"&&!b||s&&Vh(qw,l.meta.op)&&(T&&l.next.length===0||!T&&l.family.triggers<=0))&&pu(l,t,r&&l.meta.op!=="on",g,s)}}for(u=Wu(e);l=u.pop();)Iw(l,e),r&&l.family.type==="crosslink"&&pu(l,t,l.meta.op!=="on",g,s)},Zc=e=>e.clear(),ju=(e,{deep:t}={})=>{let r=0;if(e.ownerSet&&e.ownerSet.delete(e),i2(e)){r=1;const i=e.history;Zc(i.events),Zc(i.effects),Zc(i.stores),Zc(i.domains)}pu(yn(e),!!t,r,null,0)},V5=e=>qp(()=>ju(e)),ri=(e,t,r,i,s)=>Ur({node:r,parent:e,child:t,scope:{fn:s},meta:{op:i},family:{owners:[e,t],links:t},regional:1}),f2=(e,t)=>(Tt($r(t),".watch argument should be a function"),V5(Ur({scope:{fn:t},node:[Zm({fn:Ku})],parent:e,meta:{op:"watch"},family:{owners:e},regional:1}))),Q5=(e,t,r="event")=>{il(e)&&il(e).hooks[r](t)},h2=(e,t)=>Ar(e,"unitTrace",t),Ju=e=>{const t=Error("unit trace");return Error.captureStackTrace&&Error.captureStackTrace(t,e),t.stack},p2=(e,t,r,i)=>{const s=ll(r),l=e==="domain",u=U5(),{sid:d=null,named:h=null,domain:p=null,parent:y=p}=s,g=h||s.name||(l?"":u),b=M5(g,y),w={op:t.kind=e,name:t.shortName=g,sid:t.sid=I5(d),named:h,unitId:t.id=u,serialize:s.serialize,derived:s.derived,config:s,unitTrace:i};return t.targetable=!s.derived,t.parent=y,t.compositeName=b,t.defaultConfig=s,t.getType=()=>(ol(0,"getType","compositeName.fullName"),b.fullName),!l&&(t.subscribe=S=>(l2(S),t.watch($r(S)?S:T=>S.next&&S.next(T))),t[R5]=()=>t),w},Kh=(e,t,r,i)=>{let s;cr(r)&&(s=r,r=r.fn);const l=Ie({name:`${e.shortName} → *`,derived:1,and:s});return ri(e,l,i,t,r),l},mu="undefined is used to skip updates. To allow undefined as a value provide explicit { skipVoid: false } option",m2=(e,t,r,i,s)=>{const l=or(t),u=An({store:l,to:"a",priority:"read"});r===go&&(u.data.softRead=1);const d=[u,Rr(i)];Fn("storeOnMap",l,d,jn(e)&&or(e));const h=ri(e,t,d,r,s);return r!==go&&Ar(h,"onTrigger",yn(e).id),h},W5=(e,t,r,i,s,l,u)=>{const d=ci("combine",s),h=e?M=>[...M]:M=>({...M}),p=e?[]:{},y=h(p),g=yo(y),b=yo(1);g.type=e?"list":"shape",g.noInit=1,Fn("combineBase",g,b);const w=Bt(y,{name:C5(r),derived:1,...u,and:s});h2(w,i);const S=or(w);S.noInit=1,Ar(w,"isCombine",1),Du(w,[Ur({meta:{stateRef:g}})]);const T=Ka(g);T.order={priority:"barrier"};const k=An({store:S,to:"b",priority:"read"});k.data.softRead=1;const _=[vo((M,O,L)=>(L.scope&&!L.scope.reg[g.id]&&(L.c=1),M)),T,An({store:b,to:"b"}),vo((M,{key:O},L)=>{if(L.c||M!==L.a[O])return t&&L.b&&(L.a=h(L.a)),L.a[O]=M,1},1),An({from:"a",target:g}),An({from:"value",store:0,target:b}),An({from:"value",store:1,target:b,priority:"barrier",batch:1}),Ka(g,1,1),l&&Rr(),k];if(Qu(r,(M,O)=>{if(!jn(M))return Tt(!_a(M)&&!zn(M),`combine expects a store in a field ${O}`,d),void(y[O]=p[O]=M);p[O]=M.defaultState,y[O]=M.getState();const L=ri(M,w,_,"combine",l);L.scope.key=O;const j=or(M);Yp(g,{type:"field",field:O,from:j}),Fn("combineField",j,L)}),w.defaultShape=r,Ar(w,"defaultShape",r),Yp(S,{type:go,from:g,fn:l}),l){const M=l(y);!zn(M)||u&&"skipVoid"in u||console.error(`${d}: ${mu}`),S.current=M,S.initial=M,w.defaultState=M}else w.defaultState=p;return w};Ur({node:[Zm({fn:({fn:e,value:t})=>e(t)})],meta:{op:"fx",fx:"sidechain"}});const Z5=["source","clock","target"],g2=(e,t)=>e+`: ${t} should be defined`,K5=(e,t,r,i,s,l,u,d,h,p,y,g)=>{const b=ci(e,d),w=!!s;Tt(!zn(r)||!zn(t),g2(b,"either source or clock"));let S=0;zn(r)?S=1:_a(r)||(r=Gn(r)),zn(t)?t=r:(Bp(t,b,"clock"),Array.isArray(t)&&(t=ri(t,[],[],e))),S&&(r=t),d||u?d&&u?d.name=u:!d&&u&&(d={name:u}):u=r.shortName;let T="none";i&&(_a(i)?T="unit":(Tt($r(i),"`filter` should be function or unit"),T="fn")),s?(Bp(s,b,"target"),q5(b,s)):T==="none"&&p&&jn(r)&&jn(t)?s=Bt(l?l(Fs(or(r)),Fs(or(t))):Fs(or(r)),{name:u,sid:g,or:d}):(s=Ie({name:u,derived:1,or:d}),Fn("sampleTarget",yn(s)));const k=yo();let _=[];const M=[];if(T==="unit"){const[j,X,G,ee]=Bw(i,s,t,k,e);ee&&Rn(M,ee),G||_.push(...Jh(X)),_.push(...Jh(j))}const O=[];if(S)h&&Rn(O,Ka(k,1,1));else{const[j,X,G,ee]=Bw(r,s,t,k,e);ee&&Rn(M,ee),G||O.push(...Jh(X)),Rn(O,Ka(j,1,h))}const L=ri(t,s,[Fn(),An({from:"stack",target:k}),...O,..._,Ka(k),T==="fn"&&Rr((j,X,{a:G})=>i(j,G),1),l&&Rr(c2),Fn("sampleSourceUpward",w)],e,l);return Du(r,[L]),Du(L,M),Object.assign(L.meta,d,{joint:1,stateRef:k}),h2(L,Ju(vl)),s},Jh=e=>[Ka(e),vo((t,r,{a:i})=>i,1)],Bw=(e,t,r,i,s)=>{const l=jn(e),u=l?or(e):yo(),d=yo(l);let h;return l||(h=Ur({parent:e,node:[An({from:"stack",target:u}),An({from:"value",store:1,target:d})],family:{owners:[...new Set([e,t,r].flat())],links:t},meta:{op:s},regional:1})),Fn("sampleSource",d,u,i),[u,d,l,h]};var ep={exports:{}},tp={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yw;function J5(){if(Yw)return tp;Yw=1;var e=pl(),t=Y1();function r(p,y){return p===y&&(p!==0||1/p===1/y)||p!==p&&y!==y}var i=typeof Object.is=="function"?Object.is:r,s=t.useSyncExternalStore,l=e.useRef,u=e.useEffect,d=e.useMemo,h=e.useDebugValue;return tp.useSyncExternalStoreWithSelector=function(p,y,g,b,w){var S=l(null);if(S.current===null){var T={hasValue:!1,value:null};S.current=T}else T=S.current;S=d(function(){function _(X){if(!M){if(M=!0,O=X,X=b(X),w!==void 0&&T.hasValue){var G=T.value;if(w(G,X))return L=G}return L=X}if(G=L,i(O,X))return G;var ee=b(X);return w!==void 0&&w(G,ee)?(O=X,G):(O=X,L=ee)}var M=!1,O,L,j=g===void 0?null:g;return[function(){return _(y())},j===null?void 0:function(){return _(j())}]},[y,g,b,w]);var k=s(p,S[0],S[1]);return u(function(){T.hasValue=!0,T.value=k},[k]),h(k),k},tp}var Pw;function eM(){return Pw||(Pw=1,ep.exports=J5()),ep.exports}var tM=eM();const nM=gm(tM);function rM(e,t){const r=Ls.unit(e);let i={};r?i={unit:e}:"@@unitShape"in e?typeof e["@@unitShape"]=="function"?i=e["@@unitShape"]():ho("expect @@unitShape to be a function"):i=e;const s=Array.isArray(i),l=Ft.useRef({stale:1,justSubscribed:0,scope:t}),[u,d,h,p,y]=Ft.useMemo(()=>{l.current.stale=1;const S=Array.isArray(i)?[]:{},T=[],k=[],_=[],M=[];for(const O in i){if(!{}.hasOwnProperty.call(i,O))continue;const L=i[O];Ls.unit(L)||ho(`expect useUnit ${r?"argument":`value in key "${O}"`} to be a unit`),Ls.event(L)||Ls.effect(L)?(S[O]=t?O5(L,{scope:t}):L,_.push(O),M.push(L)):(S[O]=null,T.push(O),k.push(L))}return[S,T,k,_,M]},[l,t,...Object.keys(i),...Object.values(i)]),g=Ft.useRef({value:u,storeKeys:d,eventKeys:p,eventValues:y}),b=Ft.useCallback(S=>{const T=l.current;return T.justSubscribed=1,n2({unit:h,fn:()=>{T.stale||(T.stale=1,S())},scope:t,batch:1})},[h,t,g,l]),w=Ft.useCallback(()=>{const S=g.current,T=l.current;let k,_=0;const M=S.value,O=S.storeKeys,L=S.eventKeys,j=S.eventValues,X=t!==T.scope;if(T.stale||T.justSubscribed||X){_=!T.justSubscribed||X,k=s?[...u]:{...u},O.length===d.length&&L.length===p.length||(_=1);for(let G=0;G<d.length;G++){const ee=y2(h[G],t),ne=d[G];_||(_=O.includes(ne)?M[ne]!==ee:1),k[ne]=ee}for(let G=0;G<p.length;G++){const ee=y[G],ne=p[G];_||(_=L.includes(ne)?j[L.indexOf(ne)]!==ee:1)}}return _&&(S.value=k),S.storeKeys=d,S.eventKeys=p,S.eventValues=y,T.stale=0,T.justSubscribed=!_,T.scope=t,r?S.value.unit:S.value},[b,h,y,t,g,l]);return iM(b,w,w)}function aM([e,t],r){let i,s,l,u,d=Fw;t?(i=t,l=e,u=[]):{fn:i,store:l,keys:u,defaultValue:s,updateFilter:d=Fw}=e,Ls.store(l)||ho("useStoreMap expects a store"),Array.isArray(u)||ho("useStoreMap expects an array as keys"),typeof i!="function"&&ho("useStoreMap expects a function");const h=Ft.useCallback(w=>n2({unit:l,fn:w,scope:r}),[l,r]),p=Ft.useCallback(()=>y2(l,r),[l,r]),y=Ft.useRef(),g=Ft.useRef(),b=Ft.useRef(u);return oM(h,p,p,w=>{if(y.current!==w||!((S,T)=>{if(!S||!T||S.length!==T.length)return 0;let k=1;for(let _=0;_<S.length;_++)if(S[_]!==T[_]){k=0;break}return k})(b.current,u)){let S=i(w,u);S===void 0&&s!==void 0&&(S=s),y.current=w,b.current=u,S!==void 0&&(g.current=S)}return g.current},(w,S)=>!d(S,w))}function v2(e){const t=Ft.useContext(b2);return e&&!t&&ho("No scope found, consider adding <Provider> to app root"),t}function Ke(e,t){return rM(e,v2(void 0))}function Xw(e,t){return aM([e,t],v2(e==null?void 0:e.forceScope))}const ho=e=>{throw Error(e)};typeof window<"u"?Ft.useLayoutEffect:Ft.useEffect;const{useSyncExternalStore:iM}=l5,{useSyncExternalStoreWithSelector:oM}=nM,y2=(e,t)=>t?t.getState(e):e.getState(),Fw=(e,t)=>e!==t,b2=Ft.createContext(null),{Provider:oz}=b2,w2=["кот","собака","птица","рыба","корова","лошадь","свинья","утка","курица","петух","тигр","лев","слон","жираф","медведь","волк","лиса","еж","кролик","коала","панда","кенгуру","обезьяна","змея","лягушка","крокодил","черепаха","дельфин","акула","кит","осьминог","краб","пингвин","страус","фламинго","орел","сова","воробей","голубь","аист","сурикат","бегемот","носорог","антилопа","яблоко","груша","банан","апельсин","лимон","арбуз","дыня","виноград","вишня","клубника","малина","ежевика","морковь","картошка","лук","чеснок","капуста","огурец","помидор","перец","тыква","баклажан","гриб","хлеб","пицца","бургер","суп","торт","мороженое","шоколад","печенье","конфета","чай","кофе","сок","вода","молоко","стол","стул","кровать","шкаф","диван","лампа","телевизор","компьютер","телефон","часы","зеркало","окно","дверь","книга","тетрадь","ручка","карандаш","кисть","краска","бутылка","стакан","тарелка","вилка","ложка","нож","чайник","сумка","рюкзак","шапка","куртка","пальто","ботинки","носки","перчатки","зонт","очки","дерево","куст","трава","цветок","роза","подсолнух","ромашка","тюльпан","лес","гора","река","озеро","море","пляж","остров","пещера","облако","солнце","луна","звезда","дождь","снег","молния","радуга","ветер","волна","машина","поезд","самолет","корабль","лодка","велосипед","мотоцикл","автобус","троллейбус","трамвай","метро","такси","ракета","вертолет","танк","трактор","грузовик","катер","учитель","врач","повар","пожарный","полицейский","солдат","строитель","фермер","летчик","моряк","шофер","художник","музыкант","писатель","рыбак","спортсмен","танцор","актёр","дом","замок","школа","магазин","церковь","мост","дорога","парк","площадь","фонтан","статуя","флаг","карта","шар","кукла","мяч","пирамидка","машинка","самокат","скейт","качели","горка","песочница","робот","ракета","кот","собака","птица","рыба","корова","лошадь","свинья","утка","курица","петух","тигр","лев","слон","жираф","медведь","волк","лиса","еж","кролик","коала","панда","кенгуру","обезьяна","змея","лягушка","крокодил","черепаха","дельфин","акула","кит","осьминог","краб","пингвин","страус","фламинго","орел","сова","воробей","голубь","аист","сурикат","бегемот","носорог","антилопа","яблоко","груша","банан","апельсин","лимон","арбуз","дыня","виноград","вишня","клубника","малина","ежевика","морковь","картошка","лук","чеснок","капуста","огурец","помидор","перец","тыква","баклажан","гриб","хлеб","пицца","бургер","суп","торт","мороженое","шоколад","печенье","конфета","чай","кофе","сок","вода","молоко","стол","стул","кровать","шкаф","диван","лампа","телевизор","компьютер","телефон","часы","зеркало","окно","дверь","книга","тетрадь"],Qn=600;function eg(e,t){let r,i=()=>{};e.watch(s=>{s!==r&&(i(),i=t(s),r=s)})}const sM=(()=>{const e=window.location.pathname,t=e.match(/\/scribble\/room\/([^\/]+)/);if(t)return t[1];if(e.endsWith("/words"))return"words";if(e.endsWith("/paintings"))return"paintings";const r=window.location.search.slice(1);if(r)return r;const i="/scribble/";if(e.startsWith(i)){const s=e.slice(i.length);if(s&&!s.includes("/"))return s}return""})();function lM(e){return e[Math.floor(Math.random()*e.length)]}function cM(){const e=[];for(;e.length<3;){const t=lM(w2);e.includes(t)||e.push(t)}return e.join("-")}function uM(e,t,r){return Math.max(t,Math.min(e,r))}function ga(e){return Math.round(e*1e4)/1e4}function Kc(e){return Math.round(e*100)/100}function np(e,t){if(!e)throw new Error(t||"Assertion failed")}function Rs(e){return`${ga(e.x)},${ga(e.y)} `}function Gw(e,t){return`${ga((e.x+t.x)/2)},${ga((e.y+t.y)/2)} `}function dM(){return window.location.pathname.includes("/scribble")?"/scribble/":"/"}function va(e){const t=dM();return e?`${t}${e}`:t.endsWith("/")?t.slice(0,-1):t}function fM(e,t,r,i){if(t.length===0)throw new Event("Can't play without players");let s={playerIds:t,params:r,messages:[],paintings:[],state:{state:"choosing-word",playerId:t[0],words:i}};const l=[],u={};return e.forEach(d=>{var h;if(d.type==="line"||d.type==="undo"){(h=l.at(-1))==null||h.events.push(d);return}(d.type==="guess"||d.type==="choosing-word"||d.type==="new-word")&&(d.type==="guess"&&s.state.state==="drawing"&&(hM(s.state.word,d.text),d.isRevealed==="revealed"&&s.state.revealed.push({playerId:d.player})),s.messages.push(d)),d.type==="choosing-word"?s={...s,state:{state:"choosing-word",playerId:d.playerId,words:d.words}}:d.type==="new-word"&&(u[d.playerId]||(u[d.playerId]=[]),l.push({events:[],playerId:d.playerId,word:d.word}),u[d.playerId].push(d.playerId),s={...s,state:{state:"drawing",playerId:d.playerId,word:d.word,revealed:[]}})}),[s,l]}function hM(e,t){return e=e.replace(/\S/g,"").toLowerCase(),t=e.replace(/\S/g,"").toLowerCase(),e===t?"revealed":"none"}function hn(e){if(typeof e=="number")return(Math.abs(e*2654435761)>>>0).toString(16);if(typeof e=="boolean")return e?"1":"0";if(e===null)return"null";if(e===void 0)return"undefined";if(typeof e=="string"){let t=2166136261;for(let r=0;r<e.length;r++)t^=e.charCodeAt(r),t+=(t<<1)+(t<<4)+(t<<7)+(t<<8)+(t<<24),t=t>>>0;return t.toString(16)}if(Array.isArray(e)){let t=2166136261;for(let r=0;r<e.length;r++){t^=(r+1)*2654435761;const i=hn(e[r]);for(let s=0;s<i.length;s++)t^=i.charCodeAt(s),t*=16777619,t=t>>>0}return t.toString(16)}if(typeof e=="object"){let t=2166136261;const r=Object.keys(e).sort();for(let i=0;i<r.length;i++){const s=r[i],l=hn(s);t^=parseInt(l,16),t*=16777619,t=t>>>0;const u=hn(e[s]);t^=parseInt(u,16),t*=16777619,t=t>>>0}return t.toString(16)}return hn(String(e))}const mt={Remove:"remove",Replace:"replace",Add:"add"},x2=Symbol.for("__MUTATIVE_PROXY_DRAFT__"),pM=Symbol("__MUTATIVE_RAW_RETURN_SYMBOL__"),gu=Symbol.iterator,vn={mutable:"mutable",immutable:"immutable"},tg={};function Gs(e,t){return e instanceof Map?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Vw(e,t){if(t in e){let r=Reflect.getPrototypeOf(e);for(;r;){const i=Reflect.getOwnPropertyDescriptor(r,t);if(i)return i;r=Reflect.getPrototypeOf(r)}}}function ng(e){return Object.getPrototypeOf(e)===Set.prototype}function rg(e){return Object.getPrototypeOf(e)===Map.prototype}function mn(e){var t;return(t=e.copy)!==null&&t!==void 0?t:e.original}function ai(e){return!!Re(e)}function Re(e){return typeof e!="object"?null:e==null?void 0:e[x2]}function ag(e){var t;const r=Re(e);return r?(t=r.copy)!==null&&t!==void 0?t:r.original:e}function Wn(e,t){if(!e||typeof e!="object")return!1;let r;return Object.getPrototypeOf(e)===Object.prototype||Array.isArray(e)||e instanceof Map||e instanceof Set||!!(t!=null&&t.mark)&&((r=t.mark(e,vn))===vn.immutable||typeof r=="function")}function _2(e,t=[]){if(Object.hasOwnProperty.call(e,"key")){const r=e.parent.copy,i=Re(Lr(r,e.key));if(i!==null&&(i==null?void 0:i.original)!==e.original)return null;const s=e.parent.type===3,l=s?Array.from(e.parent.setMap.keys()).indexOf(e.key):e.key;if(!(s&&r.size>l||Gs(r,l)))return null;t.push(l)}if(e.parent)return _2(e.parent,t);t.reverse();try{mM(e.copy,t)}catch{return null}return t}function ui(e){return Array.isArray(e)?1:e instanceof Map?2:e instanceof Set?3:0}function Lr(e,t){return ui(e)===2?e.get(t):e[t]}function bl(e,t,r){ui(e)===2?e.set(t,r):e[t]=r}function rp(e,t){const r=Re(e);return(r?mn(r):e)[t]}function jr(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Fp(e){if(e)for(;e.finalities.revoke.length>0;)e.finalities.revoke.pop()()}function Za(e,t){return t?e:[""].concat(e).map(r=>{const i=`${r}`;return i.indexOf("/")===-1&&i.indexOf("~")===-1?i:i.replace(/~/g,"~0").replace(/\//g,"~1")}).join("/")}function mM(e,t){for(let r=0;r<t.length-1;r+=1){const i=t[r];if(e=Lr(ui(e)===3?Array.from(e):e,i),typeof e!="object")throw new Error(`Cannot resolve patch at '${t.join("/")}'.`)}return e}function gM(e){const t=Object.create(Object.getPrototypeOf(e));return Reflect.ownKeys(e).forEach(r=>{let i=Reflect.getOwnPropertyDescriptor(e,r);if(i.enumerable&&i.configurable&&i.writable){t[r]=e[r];return}i.writable||(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(i={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[r]}),Reflect.defineProperty(t,r,i)}),t}const vM=Object.prototype.propertyIsEnumerable;function S2(e,t){let r;if(Array.isArray(e))return Array.prototype.concat.call(e);if(e instanceof Set){if(!ng(e)){const i=Object.getPrototypeOf(e).constructor;return new i(e.values())}return Set.prototype.difference?Set.prototype.difference.call(e,new Set):new Set(e.values())}else if(e instanceof Map){if(!rg(e)){const i=Object.getPrototypeOf(e).constructor;return new i(e)}return new Map(e)}else if(t!=null&&t.mark&&(r=t.mark(e,vn),r!==void 0)&&r!==vn.mutable){if(r===vn.immutable)return gM(e);if(typeof r=="function"){if(t.enablePatches||t.enableAutoFreeze)throw new Error("You can't use mark and patches or auto freeze together.");return r()}throw new Error(`Unsupported mark result: ${r}`)}else if(typeof e=="object"&&Object.getPrototypeOf(e)===Object.prototype){const i={};return Object.keys(e).forEach(s=>{i[s]=e[s]}),Object.getOwnPropertySymbols(e).forEach(s=>{vM.call(e,s)&&(i[s]=e[s])}),i}else throw new Error("Please check mark() to ensure that it is a stable marker draftable function.")}function Xt(e){e.copy||(e.copy=S2(e.original,e.options))}function Hs(e){if(!Wn(e))return ag(e);if(Array.isArray(e))return e.map(Hs);if(e instanceof Map){const r=Array.from(e.entries()).map(([i,s])=>[i,Hs(s)]);if(!rg(e)){const i=Object.getPrototypeOf(e).constructor;return new i(r)}return new Map(r)}if(e instanceof Set){const r=Array.from(e).map(Hs);if(!ng(e)){const i=Object.getPrototypeOf(e).constructor;return new i(r)}return new Set(r)}const t=Object.create(Object.getPrototypeOf(e));for(const r in e)t[r]=Hs(e[r]);return t}function vu(e){return ai(e)?Hs(e):e}function sr(e){var t;e.assignedMap=(t=e.assignedMap)!==null&&t!==void 0?t:new Map,e.operated||(e.operated=!0,e.parent&&sr(e.parent))}function Qw(){throw new Error("Cannot modify frozen object")}function ro(e,t,r,i,s){{r=r??new WeakMap,i=i??[],s=s??[];const u=r.has(e)?r.get(e):e;if(i.length>0){const d=i.indexOf(u);if(u&&typeof u=="object"&&d!==-1)throw i[0]===u?new Error("Forbids circular reference"):new Error(`Forbids circular reference: ~/${s.slice(0,d).map((h,p)=>{if(typeof h=="symbol")return`[${h.toString()}]`;const y=i[p];return typeof h=="object"&&(y instanceof Map||y instanceof Set)?Array.from(y.keys()).indexOf(h):h}).join("/")}`);i.push(u),s.push(t)}else i.push(u)}if(Object.isFrozen(e)||ai(e)){i.pop(),s.pop();return}switch(ui(e)){case 2:for(const[d,h]of e)ro(d,d,r,i,s),ro(h,d,r,i,s);e.set=e.clear=e.delete=Qw;break;case 3:for(const d of e)ro(d,d,r,i,s);e.add=e.clear=e.delete=Qw;break;case 1:Object.freeze(e);let u=0;for(const d of e)ro(d,u,r,i,s),u+=1;break;default:Object.freeze(e),Object.keys(e).forEach(d=>{const h=e[d];ro(h,d,r,i,s)})}i.pop(),s.pop()}function ig(e,t){const r=ui(e);if(r===0)Reflect.ownKeys(e).forEach(i=>{t(i,e[i],e)});else if(r===1){let i=0;for(const s of e)t(i,s,e),i+=1}else e.forEach((i,s)=>t(s,i,e))}function T2(e,t,r){if(ai(e)||!Wn(e,r)||t.has(e)||Object.isFrozen(e))return;const i=e instanceof Set,s=i?new Map:void 0;if(t.add(e),ig(e,(l,u)=>{var d;if(ai(u)){const h=Re(u);Xt(h);const p=!((d=h.assignedMap)===null||d===void 0)&&d.size||h.operated?h.copy:h.original;bl(i?s:e,l,p)}else T2(u,t,r)}),s){const l=e,u=Array.from(l);l.clear(),u.forEach(d=>{l.add(s.has(d)?s.get(d):d)})}}function yM(e,t){const r=e.type===3?e.setMap:e.copy;e.finalities.revoke.length>1&&e.assignedMap.get(t)&&r&&T2(Lr(r,t),e.finalities.handledSet,e.options)}function Gp(e){e.type===3&&e.copy&&(e.copy.clear(),e.setMap.forEach(t=>{e.copy.add(ag(t))}))}function Vp(e,t,r,i){if(e.operated&&e.assignedMap&&e.assignedMap.size>0&&!e.finalized){if(r&&i){const l=_2(e);l&&t(e,l,r,i)}e.finalized=!0}}function og(e,t,r,i){const s=Re(r);s&&(s.callbacks||(s.callbacks=[]),s.callbacks.push((l,u)=>{var d;const h=e.type===3?e.setMap:e.copy;if(jr(Lr(h,t),r)){let p=s.original;s.copy&&(p=s.copy),Gp(e),Vp(e,i,l,u),e.options.enableAutoFreeze&&(e.options.updatedValues=(d=e.options.updatedValues)!==null&&d!==void 0?d:new WeakMap,e.options.updatedValues.set(p,s.original)),bl(h,t,p)}}),e.options.enableAutoFreeze&&s.finalities!==e.finalities&&(e.options.enableAutoFreeze=!1)),Wn(r,e.options)&&e.finalities.draft.push(()=>{const l=e.type===3?e.setMap:e.copy;jr(Lr(l,t),r)&&yM(e,t)})}function bM(e,t,r,i,s){let{original:l,assignedMap:u,options:d}=e,h=e.copy;h.length<l.length&&([l,h]=[h,l],[r,i]=[i,r]);for(let p=0;p<l.length;p+=1)if(u.get(p.toString())&&h[p]!==l[p]){const y=t.concat([p]),g=Za(y,s);r.push({op:mt.Replace,path:g,value:vu(h[p])}),i.push({op:mt.Replace,path:g,value:vu(l[p])})}for(let p=l.length;p<h.length;p+=1){const y=t.concat([p]),g=Za(y,s);r.push({op:mt.Add,path:g,value:vu(h[p])})}if(l.length<h.length){const{arrayLengthAssignment:p=!0}=d.enablePatches;if(p){const y=t.concat(["length"]),g=Za(y,s);i.push({op:mt.Replace,path:g,value:l.length})}else for(let y=h.length;l.length<y;y-=1){const g=t.concat([y-1]),b=Za(g,s);i.push({op:mt.Remove,path:b})}}}function wM({original:e,copy:t,assignedMap:r},i,s,l,u){r.forEach((d,h)=>{const p=Lr(e,h),y=vu(Lr(t,h)),g=d?Gs(e,h)?mt.Replace:mt.Add:mt.Remove;if(jr(p,y)&&g===mt.Replace)return;const b=i.concat(h),w=Za(b,u);s.push(g===mt.Remove?{op:g,path:w}:{op:g,path:w,value:y}),l.push(g===mt.Add?{op:mt.Remove,path:w}:g===mt.Remove?{op:mt.Add,path:w,value:p}:{op:mt.Replace,path:w,value:p})})}function xM({original:e,copy:t},r,i,s,l){let u=0;e.forEach(d=>{if(!t.has(d)){const h=r.concat([u]),p=Za(h,l);i.push({op:mt.Remove,path:p,value:d}),s.unshift({op:mt.Add,path:p,value:d})}u+=1}),u=0,t.forEach(d=>{if(!e.has(d)){const h=r.concat([u]),p=Za(h,l);i.push({op:mt.Add,path:p,value:d}),s.unshift({op:mt.Remove,path:p,value:d})}u+=1})}function cl(e,t,r,i){const{pathAsArray:s=!0}=e.options.enablePatches;switch(e.type){case 0:case 2:return wM(e,t,r,i,s);case 1:return bM(e,t,r,i,s);case 3:return xM(e,t,r,i,s)}}const Uu=(e,t,r=!1)=>{if(typeof e=="object"&&e!==null&&(!Wn(e,t)||r))throw new Error("Strict mode: Mutable data cannot be accessed directly, please use 'unsafe(callback)' wrap.")},Qp={get size(){return mn(Re(this)).size},has(e){return mn(Re(this)).has(e)},set(e,t){const r=Re(this),i=mn(r);return(!i.has(e)||!jr(i.get(e),t))&&(Xt(r),sr(r),r.assignedMap.set(e,!0),r.copy.set(e,t),og(r,e,t,cl)),this},delete(e){if(!this.has(e))return!1;const t=Re(this);return Xt(t),sr(t),t.original.has(e)?t.assignedMap.set(e,!1):t.assignedMap.delete(e),t.copy.delete(e),!0},clear(){const e=Re(this);if(this.size){Xt(e),sr(e),e.assignedMap=new Map;for(const[t]of e.original)e.assignedMap.set(t,!1);e.copy.clear()}},forEach(e,t){const r=Re(this);mn(r).forEach((i,s)=>{e.call(t,this.get(s),s,this)})},get(e){var t,r;const i=Re(this),s=mn(i).get(e),l=((r=(t=i.options).mark)===null||r===void 0?void 0:r.call(t,s,vn))===vn.mutable;if(i.options.strict&&Uu(s,i.options,l),l||i.finalized||!Wn(s,i.options)||s!==i.original.get(e))return s;const u=tg.createDraft({original:s,parentDraft:i,key:e,finalities:i.finalities,options:i.options});return Xt(i),i.copy.set(e,u),u},keys(){return mn(Re(this)).keys()},values(){const e=this.keys();return{[gu]:()=>this.values(),next:()=>{const t=e.next();return t.done?t:{done:!1,value:this.get(t.value)}}}},entries(){const e=this.keys();return{[gu]:()=>this.entries(),next:()=>{const t=e.next();if(t.done)return t;const r=this.get(t.value);return{done:!1,value:[t.value,r]}}}},[gu](){return this.entries()}},_M=Reflect.ownKeys(Qp),Ww=(e,t,{isValuesIterator:r})=>()=>{var i,s;const l=t.next();if(l.done)return l;const u=l.value;let d=e.setMap.get(u);const h=Re(d),p=((s=(i=e.options).mark)===null||s===void 0?void 0:s.call(i,d,vn))===vn.mutable;if(e.options.strict&&Uu(u,e.options,p),!p&&!h&&Wn(u,e.options)&&!e.finalized&&e.original.has(u)){const y=tg.createDraft({original:u,parentDraft:e,key:u,finalities:e.finalities,options:e.options});e.setMap.set(u,y),d=y}else h&&(d=h.proxy);return{done:!1,value:r?d:[d,d]}},Lu={get size(){return Re(this).setMap.size},has(e){const t=Re(this);if(t.setMap.has(e))return!0;Xt(t);const r=Re(e);return!!(r&&t.setMap.has(r.original))},add(e){const t=Re(this);return this.has(e)||(Xt(t),sr(t),t.assignedMap.set(e,!0),t.setMap.set(e,e),og(t,e,e,cl)),this},delete(e){if(!this.has(e))return!1;const t=Re(this);Xt(t),sr(t);const r=Re(e);return r&&t.setMap.has(r.original)?(t.assignedMap.set(r.original,!1),t.setMap.delete(r.original)):(!r&&t.setMap.has(e)?t.assignedMap.set(e,!1):t.assignedMap.delete(e),t.setMap.delete(e))},clear(){if(!this.size)return;const e=Re(this);Xt(e),sr(e);for(const t of e.original)e.assignedMap.set(t,!1);e.setMap.clear()},values(){const e=Re(this);Xt(e);const t=e.setMap.keys();return{[Symbol.iterator]:()=>this.values(),next:Ww(e,t,{isValuesIterator:!0})}},entries(){const e=Re(this);Xt(e);const t=e.setMap.keys();return{[Symbol.iterator]:()=>this.entries(),next:Ww(e,t,{isValuesIterator:!1})}},keys(){return this.values()},[gu](){return this.values()},forEach(e,t){const r=this.values();let i=r.next();for(;!i.done;)e.call(t,i.value,i.value,this),i=r.next()}};Set.prototype.difference&&Object.assign(Lu,{intersection(e){return Set.prototype.intersection.call(new Set(this.values()),e)},union(e){return Set.prototype.union.call(new Set(this.values()),e)},difference(e){return Set.prototype.difference.call(new Set(this.values()),e)},symmetricDifference(e){return Set.prototype.symmetricDifference.call(new Set(this.values()),e)},isSubsetOf(e){return Set.prototype.isSubsetOf.call(new Set(this.values()),e)},isSupersetOf(e){return Set.prototype.isSupersetOf.call(new Set(this.values()),e)},isDisjointFrom(e){return Set.prototype.isDisjointFrom.call(new Set(this.values()),e)}});const SM=Reflect.ownKeys(Lu),k2=new WeakSet,E2={get(e,t,r){var i,s;const l=(i=e.copy)===null||i===void 0?void 0:i[t];if(l&&k2.has(l))return l;if(t===x2)return e;let u;if(e.options.mark){const p=t==="size"&&(e.original instanceof Map||e.original instanceof Set)?Reflect.get(e.original,t):Reflect.get(e.original,t,r);if(u=e.options.mark(p,vn),u===vn.mutable)return e.options.strict&&Uu(p,e.options,!0),p}const d=mn(e);if(d instanceof Map&&_M.includes(t)){if(t==="size")return Object.getOwnPropertyDescriptor(Qp,"size").get.call(e.proxy);const p=Qp[t];if(p)return p.bind(e.proxy)}if(d instanceof Set&&SM.includes(t)){if(t==="size")return Object.getOwnPropertyDescriptor(Lu,"size").get.call(e.proxy);const p=Lu[t];if(p)return p.bind(e.proxy)}if(!Gs(d,t)){const p=Vw(d,t);return p?"value"in p?p.value:(s=p.get)===null||s===void 0?void 0:s.call(e.proxy):void 0}const h=d[t];if(e.options.strict&&Uu(h,e.options),e.finalized||!Wn(h,e.options))return h;if(h===rp(e.original,t)){if(Xt(e),e.copy[t]=sg({original:e.original[t],parentDraft:e,key:e.type===1?Number(t):t,finalities:e.finalities,options:e.options}),typeof u=="function"){const p=Re(e.copy[t]);return Xt(p),sr(p),p.copy}return e.copy[t]}return h},set(e,t,r){var i;if(e.type===3||e.type===2)throw new Error("Map/Set draft does not support any property assignment.");let s;if(e.type===1&&t!=="length"&&!(Number.isInteger(s=Number(t))&&s>=0&&(t===0||s===0||String(s)===String(t))))throw new Error("Only supports setting array indices and the 'length' property.");const l=Vw(mn(e),t);if(l!=null&&l.set)return l.set.call(e.proxy,r),!0;const u=rp(mn(e),t),d=Re(u);return d&&jr(d.original,r)?(e.copy[t]=r,e.assignedMap=(i=e.assignedMap)!==null&&i!==void 0?i:new Map,e.assignedMap.set(t,!1),!0):(jr(r,u)&&(r!==void 0||Gs(e.original,t))||(Xt(e),sr(e),Gs(e.original,t)&&jr(r,e.original[t])?e.assignedMap.delete(t):e.assignedMap.set(t,!0),e.copy[t]=r,og(e,t,r,cl)),!0)},has(e,t){return t in mn(e)},ownKeys(e){return Reflect.ownKeys(mn(e))},getOwnPropertyDescriptor(e,t){const r=mn(e),i=Reflect.getOwnPropertyDescriptor(r,t);return i&&{writable:!0,configurable:e.type!==1||t!=="length",enumerable:i.enumerable,value:r[t]}},getPrototypeOf(e){return Reflect.getPrototypeOf(e.original)},setPrototypeOf(){throw new Error("Cannot call 'setPrototypeOf()' on drafts")},defineProperty(){throw new Error("Cannot call 'defineProperty()' on drafts")},deleteProperty(e,t){var r;return e.type===1?E2.set.call(this,e,t,void 0,e.proxy):(rp(e.original,t)!==void 0||t in e.original?(Xt(e),sr(e),e.assignedMap.set(t,!1)):(e.assignedMap=(r=e.assignedMap)!==null&&r!==void 0?r:new Map,e.assignedMap.delete(t)),e.copy&&delete e.copy[t],!0)}};function sg(e){const{original:t,parentDraft:r,key:i,finalities:s,options:l}=e,u=ui(t),d={type:u,finalized:!1,parent:r,original:t,copy:null,proxy:null,finalities:s,options:l,setMap:u===3?new Map(t.entries()):void 0};(i||"key"in e)&&(d.key=i);const{proxy:h,revoke:p}=Proxy.revocable(u===1?Object.assign([],d):d,E2);if(s.revoke.push(p),k2.add(h),d.proxy=h,r){const y=r;y.finalities.draft.push((g,b)=>{var w,S;const T=Re(h);let k=y.type===3?y.setMap:y.copy;const _=Lr(k,i),M=Re(_);if(M){let O=M.original;M.operated&&(O=ag(_)),Gp(M),Vp(M,cl,g,b),y.options.enableAutoFreeze&&(y.options.updatedValues=(w=y.options.updatedValues)!==null&&w!==void 0?w:new WeakMap,y.options.updatedValues.set(O,M.original)),bl(k,i,O)}(S=T.callbacks)===null||S===void 0||S.forEach(O=>{O(g,b)})})}else{const y=Re(h);y.finalities.draft.push((g,b)=>{Gp(y),Vp(y,cl,g,b)})}return h}tg.createDraft=sg;function TM(e,t,r,i,s){var l;const u=Re(e),d=(l=u==null?void 0:u.original)!==null&&l!==void 0?l:e,h=!!t.length;if(u!=null&&u.operated)for(;u.finalities.draft.length>0;)u.finalities.draft.pop()(r,i);const p=h?t[0]:u?u.operated?u.copy:u.original:e;return u&&Fp(u),s&&ro(p,p,u==null?void 0:u.options.updatedValues),[p,r&&h?[{op:mt.Replace,path:[],value:t[0]}]:r,i&&h?[{op:mt.Replace,path:[],value:d}]:i]}function kM(e,t){var r;const i={draft:[],revoke:[],handledSet:new WeakSet};let s,l;t.enablePatches&&(s=[],l=[]);const d=((r=t.mark)===null||r===void 0?void 0:r.call(t,e,vn))===vn.mutable||!Wn(e,t)?e:sg({original:e,parentDraft:null,finalities:i,options:t});return[d,(h=[])=>{const[p,y,g]=TM(d,h,s,l,t.enableAutoFreeze);return t.enablePatches?[p,y,g]:p}]}function Wp(e){const{rootDraft:t,value:r,useRawReturn:i=!1,isRoot:s=!0}=e;ig(r,(l,u,d)=>{const h=Re(u);if(h&&t&&h.finalities===t.finalities){e.isContainDraft=!0;const p=h.original;if(d instanceof Set){const y=Array.from(d);d.clear(),y.forEach(g=>d.add(l===g?p:g))}else bl(d,l,p)}else typeof u=="object"&&u!==null&&(e.value=u,e.isRoot=!1,Wp(e))}),s&&(e.isContainDraft||console.warn("The return value does not contain any draft, please use 'rawReturn()' to wrap the return value to improve performance."),i&&console.warn("The return value contains drafts, please don't use 'rawReturn()' to wrap the return value."))}function C2(e){var t;const r=Re(e);if(!Wn(e,r==null?void 0:r.options))return e;const i=ui(e);if(r&&!r.operated)return r.original;let s;function l(){s=i===2?rg(e)?new Map(e):new(Object.getPrototypeOf(e)).constructor(e):i===3?Array.from(r.setMap.values()):S2(e,r==null?void 0:r.options)}if(r){r.finalized=!0;try{l()}finally{r.finalized=!1}}else s=e;if(ig(s,(u,d)=>{if(r&&jr(Lr(r.original,u),d))return;const h=C2(d);h!==d&&(s===e&&l(),bl(s,u,h))}),i===3){const u=(t=r==null?void 0:r.original)!==null&&t!==void 0?t:s;return ng(u)?new Set(s):new(Object.getPrototypeOf(u)).constructor(s)}return s}function Zw(e){if(!ai(e))throw new Error(`current() is only used for Draft, parameter: ${e}`);return C2(e)}const EM=e=>function t(r,i,s){var l,u,d;if(typeof r=="function"&&typeof i!="function")return function(j,...X){return t(j,G=>r.call(this,G,...X),i)};const h=r,p=i;let y=s;if(typeof i!="function"&&(y=i),y!==void 0&&Object.prototype.toString.call(y)!=="[object Object]")throw new Error(`Invalid options: ${y}, 'options' should be an object.`);y=Object.assign(Object.assign({},e),y);const g=ai(h)?Zw(h):h,b=Array.isArray(y.mark)?(j,X)=>{for(const G of y.mark){if(typeof G!="function")throw new Error(`Invalid mark: ${G}, 'mark' should be a function.`);const ee=G(j,X);if(ee)return ee}}:y.mark,w=(l=y.enablePatches)!==null&&l!==void 0?l:!1,S=(u=y.strict)!==null&&u!==void 0?u:!1,k={enableAutoFreeze:(d=y.enableAutoFreeze)!==null&&d!==void 0?d:!1,mark:b,strict:S,enablePatches:w};if(!Wn(g,k)&&typeof g=="object"&&g!==null)throw new Error("Invalid base state: create() only supports plain objects, arrays, Set, Map or using mark() to mark the state as immutable.");const[_,M]=kM(g,k);if(typeof i!="function"){if(!Wn(g,k))throw new Error("Invalid base state: create() only supports plain objects, arrays, Set, Map or using mark() to mark the state as immutable.");return[_,M]}let O;try{O=p(_)}catch(j){throw Fp(Re(_)),j}const L=j=>{const X=Re(_);if(!ai(j)){if(j!==void 0&&!jr(j,_)&&(X!=null&&X.operated))throw new Error("Either the value is returned as a new non-draft value, or only the draft is modified without returning any value.");const ee=j==null?void 0:j[pM];if(ee){const ne=ee[0];return k.strict&&typeof j=="object"&&j!==null&&Wp({rootDraft:X,value:j,useRawReturn:!0}),M([ne])}if(j!==void 0)return typeof j=="object"&&j!==null&&Wp({rootDraft:X,value:j}),M([j])}if(j===_||j===void 0)return M([]);const G=Re(j);if(k===G.options){if(G.operated)throw new Error("Cannot return a modified child draft.");return M([Zw(j)])}return M([j])};return O instanceof Promise?O.then(L,j=>{throw Fp(Re(_)),j}):L(O)},Zp=EM();Object.prototype.constructor.toString();function M2(e,t){const r=Object.keys(e),i=Object.keys(t);return r.length===i.length&&Object.keys(e).every(s=>t.hasOwnProperty(s))}function Kw(e,t){return Object.keys(e).length===Object.keys(t).length&&Object.keys(e).every(r=>t.hasOwnProperty(r)&&e[r]===t[r])}function yu(e,t){return typeof e!="object"||typeof t!="object"||e===null||t===null?e===t:M2(e,t)?Object.keys(e).every(r=>yu(e[r],t[r])):!1}function lg(e){if(!Is(e))return e;const t={};for(const[r,i]of Object.entries(e))i!==void 0&&(t[r]=i);return t}function N2(e,t){if(!Is(e)||!Is(t))return t;const r=Object.assign({},e);for(const i of Object.keys(t)){if(t[i]===void 0)continue;if(t[i]===null){delete r[i];continue}const s=Is(e[i])&&Is(t[i]);r[i]=s?N2(e[i],t[i]):t[i]}return r}function Is(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function CM(e,t,r){if(!e||t.length===0)return;let i=e||{};for(let l=0;l<t.length-1;l++){const u=t[l];(!(u in i)||typeof i[u]!="object")&&(i[u]=typeof t[l+1]=="number"?[]:{}),i=i[u]}const s=t[t.length-1];Array.isArray(i)&&typeof s=="number"?i.splice(s,0,r):i[s]=r}function Jw(e,t,r){if(!e||t.length===0)return;let i=e||{};for(let s=0;s<t.length-1;s++){const l=t[s];(!(l in i)||typeof i[l]!="object")&&(i[l]=typeof t[s+1]=="number"?[]:{}),i=i[l]}i[t[t.length-1]]=r}function O2(e,t){if(!e||t.length===0)return;const[r,...i]=t;if(r in e){if(i.length===0){Array.isArray(e)?e.splice(r,1):delete e[r];return}O2(e[r],i),MM(e[r])&&delete e[r]}}function MM(e){return e&&Object.keys(e).length===0}function NM(e){return new Date(e)}function OM(e){return new Date(e+"Z")}function AM(e){return new Date(e+"T00:00:00Z")}function RM(e){const[t,r]=e.split(" ");return new Date(t+"T"+r+"Z")}function zM(e){const[t,r]=e.split(" ");return new Date(t+"T"+r+"Z")}function DM(e){return new Date(e)}function jM(e){const t=/^(\w{3}) (\w{3}) (\d{2}) (\d{4})$/;if(!e.match(t))throw new Error(`Unable to parse \`${e}\` as a date.`);const i=new Date(e+" UTC");return new Date(Date.UTC(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate(),0,0,0,0))}function UM(e){const t=/^(.+T.+)([+-])(\d{2})$/,r=e.match(t);if(r){const[,i,s,l]=r,u=`${i}${s}${l}:00`;return new Date(u)}return null}const LM=[zM,jM,DM,AM,OM,NM,UM,RM];function $M(e,t){try{const r=e(t);return r instanceof Date&&!isNaN(r.getTime())?r:null}catch{return null}}function A2(e){for(const t of LM){const r=$M(t,e);if(r)return r}return null}function HM(e){try{const t=JSON.parse(e);return typeof t=="string"?A2(t):null}catch{return null}}function ed(e){if(e instanceof Date)return e;if(typeof e=="string"){const t=A2(e)||HM(e);if(!t)throw new Error(`Unable to parse \`${e}\` as a date.`);return t}else if(typeof e=="number")return new Date(e);throw new Error(`Invalid date value \`${e}\`. Expected a date, number, or string, got type ${typeof e}.`)}function IM(e){return e.cardinality==="one"}function cg(e){return e["value-type"]==="ref"}function ug(e){return e["value-type"]==="blob"}function wl(e,t){return e[t]}function td(e,t){return t.reduce((r,i)=>r&&r.get(i),e)}function Bn(e,t){if(t.length===0)throw new Error("path must have at least one element");if(t.length===1){e.delete(t[0]);return}const[r,...i]=t;e.has(r)&&Bn(e.get(r),i)}function Jt(e,t,r){if(t.length===0)throw new Error("path must have at least one element");if(t.length===1){e.set(t[0],r);return}const[i,...s]=t;let l=e.get(i);l||(l=new Map,e.set(i,l)),Jt(l,s,r)}function R2(e,t,r){const i=new Map,s=new Map,l=new Map;for(const u of t){let[d,h,p,y]=u;const g=wl(e,h);if(!g){console.warn("no such attr",d,e);continue}g["checked-data-type"]==="date"&&r&&(p=ed(p),u[2]=p),cg(g)&&Jt(l,[p,h,d],u),Jt(i,[d,h,p],u),Jt(s,[h,d,p],u)}return{eav:i,aev:s,vae:l}}function z2(e){const t=new Map,r=new Map,i=new Map,s=new Map;for(const l of Object.values(e)){const u=l["forward-identity"],[d,h,p]=u,y=l["reverse-identity"];if(Jt(i,[h,p],l),ug(l)&&Jt(t,[h,p],l),l["primary?"]&&Jt(r,[h],l),y){const[g,b,w]=y;Jt(s,[b,w],l)}}return{blobAttrs:t,primaryKeys:r,forwardIdents:i,revIdents:s}}function qM(e){return{__type:e.__type,attrs:e.attrs,triples:en(e.eav,3),cardinalityInference:e.cardinalityInference,linkIndex:e.linkIndex,useDateObjects:e.useDateObjects}}function BM(e){return Kp(e.attrs,e.triples,e.cardinalityInference,e.linkIndex,e.useDateObjects)}function dg(e){e.attrIndexes=z2(e.attrs)}function Kp(e,t,r,i,s){const l=R2(e,t,s);return l.useDateObjects=s,l.attrs=e,l.attrIndexes=z2(e),l.cardinalityInference=r,l.linkIndex=i,l.__type="store",l}function xl(e,t){var r,i;let s;if(Array.isArray(t[0])){const[u,d]=t[0],h=e.aev.get(u);if(!h)return null;s=(r=en(h,2).find(y=>y[2]===d))===null||r===void 0?void 0:r[0]}else s=t[0];if(!s)return null;const l=t[2];if(Array.isArray(l)&&l.length===2&&e.aev.get(l[0])){const[u,d]=l,h=e.aev.get(u);if(!h)return null;const y=(i=en(h,2).find(T=>T[2]===d))===null||i===void 0?void 0:i[0];if(!y)return null;const[g,b,w,...S]=t;return[s,b,y,...S]}else{const[u,...d]=t;return[s,...d]}}function YM(e,t){const r=xl(e,t);if(!r)return;const[i,s,l]=r,u=wl(e.attrs,s);u&&(Bn(e.eav,[i,s,l]),Bn(e.aev,[s,i,l]),cg(u)&&Bn(e.vae,[l,s,i]))}let PM=0;function D2(e,t,r){const[i,s,l]=r;let u;const d=td(e.ea,[i,s,l]);return d&&(u=d[3]),u||Date.now()*10+PM++}function XM(e,t){var r;const i=xl(e,t);if(!i)return;let[s,l,u]=i;const d=wl(e.attrs,l);if(!d)return;d["checked-data-type"]==="date"&&e.useDateObjects&&(u=ed(u));const h=td(e.eav,[s,l,u]),p=(r=h==null?void 0:h[3])!==null&&r!==void 0?r:D2(e,d,i),y=[s,l,u,p];IM(d)?(Jt(e.eav,[s,l],new Map([[u,y]])),Jt(e.aev,[l,s],new Map([[u,y]]))):(Jt(e.eav,[s,l,u],y),Jt(e.aev,[l,s,u],y)),cg(d)&&Jt(e.vae,[u,l,s],y)}function FM(e,t){var r;const i=xl(e,t);if(!i)return;const[s,l,u]=i,d=wl(e.attrs,l);if(!d)return;if(!ug(d))throw new Error("merge operation is not supported for links");const h=td(e.eav,[s,l]);if(!h)return;const p=(r=h.values().next())===null||r===void 0?void 0:r.value;if(!p)return;const y=p[2],g=N2(y,u),b=[s,l,g,D2(e,d,p)];Jt(e.eav,[s,l],new Map([[g,b]]))}function Jp(e,t){var r,i;const[s,l]=t,u=xl(e,[s]);if(!u)return;const[d]=u,h=e.eav.get(d);if(h){for(const y of h.keys()){const g=e.attrs[y];g&&g["on-delete-reverse"]==="cascade"&&en(h.get(y),1).forEach(([b,w,S])=>{var T;return Jp(e,[S,(T=g["reverse-identity"])===null||T===void 0?void 0:T[1]])}),(!l||!g||((r=g["forward-identity"])===null||r===void 0?void 0:r[1])===l)&&(Bn(e.aev,[y,d]),Bn(e.eav,[d,y]))}h.size===0&&Bn(e.eav,[d])}const p=e.vae.get(d)&&en(e.vae.get(d),2);p&&p.forEach(y=>{var g,b,w;const[S,T,k]=y,_=e.attrs[T];(!l||!_||((g=_["reverse-identity"])===null||g===void 0?void 0:g[1])===l)&&(Bn(e.eav,[S,T,k]),Bn(e.aev,[T,S,k]),Bn(e.vae,[k,T,S])),_&&_["on-delete"]==="cascade"&&((b=_["reverse-identity"])===null||b===void 0?void 0:b[1])===l&&Jp(e,[S,(w=_["forward-identity"])===null||w===void 0?void 0:w[1]])}),((i=e.vae.get(d))===null||i===void 0?void 0:i.size)===0&&Bn(e.vae,[d])}function j2(e,t){const r=R2(e.attrs,t,e.useDateObjects);Object.keys(r).forEach(i=>{e[i]=r[i]})}function GM(e,[t]){e.attrs[t.id]=t,dg(e)}function U2(e){return en(e.eav,3)}function VM(e,[t]){if(!e.attrs[t])return;const r=U2(e).filter(([i,s])=>s!==t);delete e.attrs[t],dg(e),j2(e,r)}function QM(e,[t]){const r=e.attrs[t.id];r&&(e.attrs[t.id]=Object.assign(Object.assign({},r),t),dg(e),j2(e,U2(e)))}function WM(e,t){const[r,...i]=t;switch(r){case"add-triple":XM(e,i);break;case"deep-merge-triple":FM(e,i);break;case"retract-triple":YM(e,i);break;case"delete-entity":Jp(e,i);break;case"add-attr":GM(e,i);break;case"delete-attr":VM(e,i);break;case"update-attr":QM(e,i);break;case"rule-params":break;default:throw new Error(`unhandled transaction action: ${r}`)}}function en(e,t,r=[]){if(!e||t===0)return r;if(t===1){for(const i of e.values())r.push(i);return r}for(const i of e.values())en(i,t-1,r);return r}function Jc(e,t,r){var i,s;const l=[];if(r!=null&&r.hasOwnProperty("$not")){for(const d of t.keys())r.$not!==d&&l.push(t.get(d));return l}if(r!=null&&r.hasOwnProperty("$isNull")){const{attrId:d,isNull:h,reverse:p}=r.$isNull;if(p)for(const y of t.keys()){const g=e.vae.get(y),b=!g||((i=g.get(d))===null||i===void 0?void 0:i.get(null))||!g.get(d);(h?b:!b)&&l.push(t.get(y))}else{const y=e.aev.get(d);for(const g of t.keys()){const b=!y||((s=y.get(g))===null||s===void 0?void 0:s.get(null))||!y.get(g);(h?b:!b)&&l.push(t.get(g))}}return l}if(r!=null&&r.$comparator)return en(t,1).filter(r.$op);const u=r.in||r.$in||[r];for(const d of u){const h=t.get(d);h&&l.push(h)}return l}function ZM(e,t,r){let i="";return e!==void 0&&(i+="e"),t!==void 0&&(i+="a"),r!==void 0&&(i+="v"),i}function KM(e,[t,r,i]){var s,l;switch(ZM(t,r,i)){case"e":{const d=e.eav.get(t);return en(d,2)}case"ea":{const d=(s=e.eav.get(t))===null||s===void 0?void 0:s.get(r);return en(d,1)}case"eav":{const d=(l=e.eav.get(t))===null||l===void 0?void 0:l.get(r);return d?Jc(e,d,i):[]}case"ev":{const d=e.eav.get(t);if(!d)return[];const h=[];for(const p of d.values())h.push(...Jc(e,p,i));return h}case"a":{const d=e.aev.get(r);return en(d,2)}case"av":{const d=e.aev.get(r);if(!d)return[];const h=[];for(const p of d.values())h.push(...Jc(e,p,i));return h}case"v":{const d=[];for(const h of e.eav.values())for(const p of h.values())d.push(...Jc(e,p,i));return d}default:return en(e.eav,3)}}function JM(e,t,r){var i;const s={};for(const[l,u]of t.entries()){const d=(i=e.eav.get(r))===null||i===void 0?void 0:i.get(u.id),h=en(d,1);for(const p of h)s[l]=p[2]}return s}function wo(e,t,r){var i;return(i=e.attrIndexes.forwardIdents.get(t))===null||i===void 0?void 0:i.get(r)}function L2(e,t,r){var i;return(i=e.attrIndexes.revIdents.get(t))===null||i===void 0?void 0:i.get(r)}function eN(e,t){return e.attrIndexes.blobAttrs.get(t)}function tN(e,t){var r;const i=e.attrIndexes.primaryKeys.get(t);return i||((r=e.attrIndexes.forwardIdents.get(t))===null||r===void 0?void 0:r.get("id"))}function nN(e,t){const r=xl(e,t);if(!r)return;const[i,s,l]=r;if(wl(e.attrs,s))return td(e.eav,[i,s])}function rN(e,t){const r=t.filter(([i,...s])=>{var l;if(i!=="add-triple"&&i!=="deep-merge-triple")return!0;const u=(l=s[3])===null||l===void 0?void 0:l.mode;if(u!=="create"&&u!=="update")return!0;const d=nN(e,s);return!(u==="create"&&d||u==="update"&&!d)});return Zp(e,i=>{r.forEach(s=>{WM(i,s)})})}function aN(e){return typeof e=="string"&&e.startsWith("?")}function iN(e,t,r){if(r.hasOwnProperty(e)){const i=r[e];return $2(i,t,r)}return Object.assign(Object.assign({},r),{[e]:t})}function ex(e,t,r){return e===t?r:null}function oN(e){switch(typeof e){case"string":return e.startsWith("?")?iN:ex;default:return ex}}const sN=["in","$in","$not","$isNull","$comparator"];function lN(e){for(const t of sN)if(e.hasOwnProperty(t))return!0;return!1}function $2(e,t,r){return r?typeof e=="object"?lN(e)?r:null:oN(e)(e,t,r):null}function cN(e,t,r){return e.reduce((i,s,l)=>{const u=t[l];return $2(s,u,i)},r)}function uN(e,t,r){return hN(e,t,r).map(i=>cN(t,i,r)).filter(i=>i)}function dN(e,t,r){return t.or?t.or.patterns.flatMap(i=>em(e,i,r)):t.and?t.and.patterns.reduce((i,s)=>em(e,s,i),r):r.flatMap(i=>uN(e,t,i))}function em(e,t,r=[{}]){return t.reduce((i,s)=>dN(e,s,i),r)}function fg(e,t){return Array.isArray(t)?t.map(r=>fg(e,r)):aN(t)?e[t]:t}function fN(e,{find:t,where:r}){return em(e,r).map(s=>fg(s,t))}function hN(e,t,r){return KM(e,fg(r,t))}const jt=[];for(let e=0;e<256;++e)jt.push((e+256).toString(16).slice(1));function pN(e,t=0){return(jt[e[t+0]]+jt[e[t+1]]+jt[e[t+2]]+jt[e[t+3]]+"-"+jt[e[t+4]]+jt[e[t+5]]+"-"+jt[e[t+6]]+jt[e[t+7]]+"-"+jt[e[t+8]]+jt[e[t+9]]+"-"+jt[e[t+10]]+jt[e[t+11]]+jt[e[t+12]]+jt[e[t+13]]+jt[e[t+14]]+jt[e[t+15]]).toLowerCase()}let ap;const mN=new Uint8Array(16);function gN(){if(!ap){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");ap=crypto.getRandomValues.bind(crypto)}return ap(mN)}const vN=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),tx={randomUUID:vN};function yN(e,t,r){var s;if(tx.randomUUID&&!e)return tx.randomUUID();e=e||{};const i=e.random??((s=e.rng)==null?void 0:s.call(e))??gN();if(i.length<16)throw new Error("Random bytes length must be >= 16");return i[6]=i[6]&15|64,i[8]=i[8]&63|128,pN(i)}function nx(e){const t=e.replace(/-/g,""),r=[];for(let i=0;i<t.length;i+=2)r.push(parseInt(t.substring(i,i+2),16));return r}function bN(e,t){for(let r=0;r<e.length;r++){if(e[r]<t[r])return-1;if(e[r]>t[r])return 1}return 0}function wN(e,t){return bN(nx(e),nx(t))}function lt(){return yN()}let xN=0;function Vs(e){return nd(`_${e}`,xN++)}function nd(e,t){return`?${e}-${t}`}class xo extends Error{constructor(t){super(t),this.name="AttrNotFoundError"}}function _N(e,t){const r=tN(e,t);if(!r)throw new xo(`Could not find id attr for ${t}`);return r}function rx(e,t,r,i){return[SN(e,t,r,i)]}function SN(e,t,r,i){return[e(r,i),_N(t,r).id,e(r,i),e("time",i)]}function TN(e,t,r){return e.map(i=>i===t?r:i)}function H2(e,t,r,i,s){const l=wo(t,r,s),u=L2(t,r,s),d=l||u;if(!d)throw new xo(`Could not find attr for ${[r,s]}`);if(d["value-type"]!=="ref")throw new Error(`Attr ${d.id} is not a ref`);const[h,p]=d["forward-identity"],[y,g]=d["reverse-identity"],b=i+1,w=l?[e(p,i),d.id,e(g,b),Vs("time")]:[e(p,b),d.id,e(g,i),Vs("time")];return[l?g:p,b,w,d,!!l]}function ax(e,t){if(typeof t!="string")return function(u){return!1};const i=t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/%/g,".*").replace(/_/g,"."),s=new RegExp(`^${i}$`,e?void 0:"i");return function(u){return typeof u!="string"?!1:s.test(u)}}function kN(e,t){if(typeof t!="object"||t.hasOwnProperty("$in")||t.hasOwnProperty("in"))return t;const r=e["checked-data-type"]==="date";if(t.hasOwnProperty("$gt"))return{$comparator:!0,$op:r?function(s){return new Date(s[2])>new Date(t.$gt)}:function(s){return s[2]>t.$gt}};if(t.hasOwnProperty("$gte"))return{$comparator:!0,$op:r?function(s){return new Date(s[2])>=new Date(t.$gte)}:function(s){return s[2]>=t.$gte}};if(t.hasOwnProperty("$lt"))return{$comparator:!0,$op:r?function(s){return new Date(s[2])<new Date(t.$lt)}:function(s){return s[2]<t.$lt}};if(t.hasOwnProperty("$lte"))return{$comparator:!0,$op:r?function(s){return new Date(s[2])<=new Date(t.$lte)}:function(s){return s[2]<=t.$lte}};if(t.hasOwnProperty("$like")){const i=ax(!0,t.$like);return{$comparator:!0,$op:function(l){return i(l[2])}}}if(t.hasOwnProperty("$ilike")){const i=ax(!1,t.$ilike);return{$comparator:!0,$op:function(l){return i(l[2])}}}return t}function EN(e,t,r,i,s,l){const u=wo(t,r,s),d=L2(t,r,s),h=u||d;if(!h)throw new xo(`No attr for etype = ${r} label = ${s}`);if(l!=null&&l.hasOwnProperty("$isNull")){const p=wo(t,r,"id");if(!p)throw new xo(`No attr for etype = ${r} label = id`);return[e(r,i),p.id,{$isNull:{attrId:h.id,isNull:l.$isNull,reverse:!u}},Vs("time")]}return u?[e(r,i),h.id,kN(h,l),Vs("time")]:[l,h.id,e(r,i),Vs("time")]}function CN(e,t,r,i,s){const[l,u,d]=s.reduce((h,p)=>{const[y,g,b]=h,[w,S,T]=H2(e,t,y,g,p);return[w,S,[...b,T]]},[r,i,[]]);return[l,u,d]}function tm(e,t,r,i,s,l){const u=s.slice(0,s.length-1),d=s[s.length-1],[h,p,y]=CN(e,t,r,i,u),g=EN(e,t,h,p,d,l);return y.concat([g])}function MN(e,t){return t?[t].concat(e):e}function NN([e,t]){return e==="or"&&Array.isArray(t)}function ON([e,t]){return e==="and"&&Array.isArray(t)}function AN(e,t,r){return(i,s)=>{const l=e(i,s);return t==l?l:`${l}-${r}`}}function ix(e,t,r,i,s,l){const u=e(i,s),d=l.map((h,p)=>{const y=AN(e,u,p);return I2(y,r,i,s,h)});return{[t]:{patterns:d,joinSym:u}}}function RN(e){const t=[];for(let r=1;r<=e.length;r++)t.push(e.slice(0,r));return t}function ox(e,t,r,i,s){return RN(s).map(l=>tm(e,t,r,i,l,{$isNull:!0}))}function I2(e,t,r,i,s){return Object.entries(s).flatMap(([l,u])=>{if(NN([l,u]))return ix(e,"or",t,r,i,u);if(ON([l,u]))return ix(e,"and",t,r,i,u);if(l==="$entityIdStartsWith")return[];const d=l.split(".");if(u!=null&&u.hasOwnProperty("$not")){const h=tm(e,t,r,i,d,u),p=ox(e,t,r,i,d);return[{or:{patterns:[h,...p],joinSym:e(r,i)}}]}return u!=null&&u.hasOwnProperty("$isNull")&&u.$isNull===!0&&d.length>1?[{or:{patterns:ox(e,t,r,i,d),joinSym:e(r,i)}}]:tm(e,t,r,i,d,u)})}function zN(e,t,r,i){const s=nd;return i?I2(s,e,t,r,i).concat(rx(s,e,t,r)):rx(s,e,t,r)}function DN(e,t,r){return[e(t,r),e("time",r)]}function jN(e,t,r,i,s,l){const[u,d,h,p,y]=H2(e,t,r,i,s),g=TN(h,e(r,i),l);return[u,d,g,p,y]}function UN(e,t,{etype:r,level:i,form:s},l){const u=Object.keys(s).filter(d=>d!=="$");return u.length?Object.entries(l).map(function([h,p]){return u.map(function(b){var w,S,T;const k=!!(t.cardinalityInference&&(!((T=(S=(w=t.linkIndex)===null||w===void 0?void 0:w[r])===null||S===void 0?void 0:S[b])===null||T===void 0)&&T.isSingular));try{const[_,M,O]=jN(e,t,r,i,b,h),L=q2(t,{etype:_,level:M,form:s[b],join:O}),j=k?L[0]:L;return{[b]:j}}catch(_){if(_ instanceof xo)return{[b]:k?void 0:[]};throw _}}).reduce(function(b,w){return Object.assign(Object.assign({},b),w)},p)}):Object.values(l)}function $u([e,t],[r,i]){return t===i||t==null&&i==null?wN(e,r):i==null?1:t==null?-1:t>i?1:-1}function nm(e){return e==null?e:new Date(e).getTime()}function LN(e,t,r,i){var s;const[l,u,d,h]=e,p=r==="desc"?1:-1;if(((s=t["forward-identity"])===null||s===void 0?void 0:s[2])==="id")return $u(i,[l,h])===p;const[y,g]=i,b=t["checked-data-type"]==="date"?nm(g):g,w=t["checked-data-type"]==="date"?nm(d):d;return $u([y,b],[l,w])===p}function $N(e,t){const r=t[1];return e.attrs[r]}function HN(e,t,r){const i=Object.keys(r)[0];return wo(e,t,i)}function IN(e,t,r,i){if(r)return $N(e,r);if(i)return HN(e,t,i)}function qN(e,t,r){var i,s;if(!Array.isArray(r.fields))return eN(e,t);const l=new Map;for(const u of r.fields){const d=wo(e,t,u),h=(i=d==null?void 0:d["forward-identity"])===null||i===void 0?void 0:i[2];h&&ug(d)&&l.set(h,d)}if(!l.has("id")){const u=wo(e,t,"id"),d=(s=u==null?void 0:u["forward-identity"])===null||s===void 0?void 0:s[2];d&&l.set(d,u)}return l}function BN(e,t,r,i,s,l){var u;let d=fN(e,l);const h=i==null?void 0:i["start-cursor"],p=IN(e,t,h,s);if(p&&((u=p==null?void 0:p["forward-identity"])===null||u===void 0?void 0:u[2])!=="id"){const b=p["checked-data-type"]==="date",w=p.id;d=d.map(([S])=>{var T,k,_,M,O;let L=(O=(M=(_=(k=(T=e.eav.get(S))===null||T===void 0?void 0:T.get(w))===null||k===void 0?void 0:k.values())===null||_===void 0?void 0:_.next())===null||M===void 0?void 0:M.value)===null||O===void 0?void 0:O[2];return b&&(L=nm(L)),[S,L]})}d.sort(r==="asc"?function(w,S){return $u(w,S)}:function(w,S){return $u(S,w)});let y={};const g=qN(e,t,l);for(const b of d){const[w]=b;if(y[w]||h&&p&&LN(h,p,r,b))continue;const S=JM(e,g,w);S&&(y[w]=S)}return y}function YN(e){var t;const r=(t=e.$)===null||t===void 0?void 0:t.order;return r&&r[Object.keys(r)[0]]||"asc"}function PN(e,{etype:t,level:r,form:i,join:s,pageInfo:l}){var u,d,h,p,y,g,b,w,S;const T=((u=i.$)===null||u===void 0?void 0:u.limit)||((d=i.$)===null||d===void 0?void 0:d.first)||((h=i.$)===null||h===void 0?void 0:h.last),k=(p=i.$)===null||p===void 0?void 0:p.offset,_=(y=i.$)===null||y===void 0?void 0:y.before,M=(g=i.$)===null||g===void 0?void 0:g.after,O=(b=i.$)===null||b===void 0?void 0:b.order,L=(w=i.$)===null||w===void 0?void 0:w.fields;if((k||_||M)&&(!l||!l["start-cursor"]))return[];const j=MN(zN(e,t,r,(S=i.$)===null||S===void 0?void 0:S.where),s),X=DN(nd,t,r),G=BN(e,t,YN(i),l,O,{where:j,find:X,fields:L});if(T!=null){const ee=Object.entries(G);return ee.length<=T?G:Object.fromEntries(ee.slice(0,T))}return G}function XN(e,t){try{return PN(e,t)}catch(r){if(r instanceof xo)return{};throw r}}function q2(e,t){const r=XN(e,t);return UN(nd,e,t,r)}function FN(e){const t={};for(const[r,i]of Object.entries(e))t[r]={startCursor:i["start-cursor"],endCursor:i["end-cursor"],hasNextPage:i["has-next-page?"],hasPreviousPage:i["has-previous-page?"]};return t}function GN({store:e,pageInfo:t,aggregate:r},i){const l={data:Object.keys(i).reduce(function(d,h){return r!=null&&r[h]||h==="$$ruleParams"||(d[h]=q2(e,{etype:h,form:i[h],level:0,pageInfo:t==null?void 0:t[h]})),d},{})};return t&&(l.pageInfo=FN(t)),r&&(l.aggregate=r),l}function VN(){const t={__etype:1,__ops:1,create:1,update:1,link:1,unlink:1,delete:1,merge:1,ruleParams:1};return new Set(Object.keys(t))}const QN=VN();function rm(e,t,r){const i={__etype:e,__ops:r};return new Proxy(i,{get:(s,l)=>{if(l==="__ops")return r;if(l==="__etype")return e;if(QN.has(l))return(u,d)=>rm(e,t,[...r,d?[l,e,t,u,d]:[l,e,t,u]])}})}function am(e){return e.startsWith("lookup__")}function B2(e){const[t,r,...i]=e.split("__");return[r,JSON.parse(i.join("__"))]}function WN(e){return new Proxy({__etype:e},{get(t,r){if(r==="__etype")return e;const i=r;return am(i)?rm(e,B2(i),[]):rm(e,i,[])}})}function Y2(){return new Proxy({},{get(e,t){return WN(t)}})}Y2();function ZN(e){return e.__ops}function KN(e,t){const{attrIdMap:r,refSwapAttrIds:i}=e,s=[];for(const u of t){const d=r[u];if(d)s.push(d);else if(Array.isArray(u)&&u.length==2&&r[u[0]]){const[h,p]=u;s.push([r[h],p])}else s.push(u)}const[l]=t;if((l==="add-triple"||l==="retract-triple")&&i.has(t[2])){const u=s[1];s[1]=s[3],s[3]=u}return s}function qt(e,t,r){return Object.values(e).find(i=>{const[s,l,u]=i["forward-identity"];return l===t&&u===r})}function Ja(e,t,r){return Object.values(e).find(i=>{const s=i["reverse-identity"];if(!s)return!1;const[l,u,d]=s;return u===t&&d===r})}function JN(e){if(Array.isArray(e))return e;const t=Object.entries(e);if(t.length!==1)throw new Error("lookup must be an object with a single unique attr and value.");return t[0]}function im(e,t,r){return r.indexOf(".")!==-1&&!qt(e,t,r)}function om(e){const[t,r,...i]=e.split(".");if(i.length>0||r!=="id")throw new Error(`${e} is not a valid lookup attribute.`);return t}function eO(e,t,r){if(!im(e,t,r))return qt(e,t,r);const i=om(r),s=qt(e,t,i)||Ja(e,t,i);if(s&&s["value-type"]!=="ref")throw new Error(`${r} does not reference a valid link attribute.`);return s}function sm(e){return typeof e=="string"&&!am(e)?null:typeof e=="string"&&am(e)?B2(e):JN(e)}function tn(e,t,r){const i=sm(r);if(i===null)return r;const[s,l]=i,u=eO(e,t,s);if(!u||!u["unique?"])throw new Error(`${s} is not a unique attribute.`);return[u.id,l]}function P2(e,t,r,i){const s=tn(e,t,r);return Array.isArray(s)?[["add-triple",s,qt(e,t,"id").id,s]].concat(i):i}function tO({attrs:e},[t,r,i]){const s=Object.entries(i).flatMap(([l,u])=>{const d=Array.isArray(u)?u:[u],h=qt(e,t,l),p=Ja(e,t,l);return d.map(y=>h?["add-triple",tn(e,t,r),h.id,tn(e,h["reverse-identity"][1],y)]:["add-triple",tn(e,p["forward-identity"][1],y),p.id,tn(e,t,r)])});return P2(e,t,r,s)}function nO({attrs:e},[t,r,i]){const s=Object.entries(i).flatMap(([l,u])=>{const d=Array.isArray(u)?u:[u],h=qt(e,t,l),p=Ja(e,t,l);return d.map(y=>h?["retract-triple",tn(e,t,r),h.id,tn(e,h["reverse-identity"][1],y)]:["retract-triple",tn(e,p["forward-identity"][1],y),p.id,tn(e,t,r)])});return P2(e,t,r,s)}function rO(e,t,r){if(Array.isArray(r)){const[i,s]=r;for(const l of e||[]){const u=l==null?void 0:l.aev.get(i);if(u){for(const[d,h,p]of en(u,2))if(p===s)return!0}}}else for(const i of e||[]){const s=i==null?void 0:i.eav.get(r);if(s){for(const l of s.keys())if(i.attrs[l]["forward-identity"][1]==t)return!0}}return!1}function X2({stores:e,attrs:t},[r,i,s,l]){return(l==null?void 0:l.upsert)===!1?{mode:"update"}:(l==null?void 0:l.upsert)===!0?null:rO(e,r,i)?{mode:"update"}:null}function aO(e,t){const{stores:r,attrs:i}=e,[s,l,u,d]=t,h=lg(u),p=tn(i,s,l);return[["id",p]].concat(Object.entries(h)).map(([g,b])=>{const w=qt(i,s,g);return w["checked-data-type"]==="date"&&e.useDateObjects&&(b=ed(b)),["add-triple",p,w.id,b,{mode:"create"}]})}function iO(e,t){const{stores:r,attrs:i}=e,[s,l,u,d]=t,h=lg(u),p=tn(i,s,l),y=X2(e,[s,p,u,d]);return[["id",p]].concat(Object.entries(h)).map(([b,w])=>{const S=qt(i,s,b);return S["checked-data-type"]==="date"&&e.useDateObjects&&(w=ed(w)),["add-triple",p,S.id,w,...y?[y]:[]]})}function oO({attrs:e},[t,r]){return[["delete-entity",tn(e,t,r),t]]}function sO(e,t){const{stores:r,attrs:i}=e,[s,l,u,d]=t,h=lg(u),p=tn(i,s,l),y=X2(e,[s,p,u,d]),g=Object.entries(h).map(([w,S])=>{const T=qt(i,s,w);return["deep-merge-triple",p,T.id,S,...y?[y]:[]]});return[["add-triple",p,qt(i,s,"id").id,p,...y?[y]:[]]].concat(g)}function lO({attrs:e},[t,r,i]){return[["rule-params",tn(e,t,r),t,i]]}function cO(e){const[t,r,i,s,l]=e;if(!s)return e;const u=Object.assign({},s);return delete u.id,[t,r,i,u,...l?[l]:[]]}function uO(e,t){const[r,...i]=cO(t);switch(r){case"merge":return sO(e,i);case"create":return aO(e,i);case"update":return iO(e,i);case"link":return tO(e,i);case"unlink":return nO(e,i);case"delete":return oO(e,i);case"ruleParams":return lO(e,i);default:throw new Error(`unsupported action ${r}`)}}function dO(e){switch(e){case"string":case"date":case"boolean":case"number":return e;default:return}}function fO(e,t,r){var i,s;const l=(s=(i=e.entities[t])===null||i===void 0?void 0:i.attrs)===null||s===void 0?void 0:s[r];if(r==="id")return null;if(!l)throw new Error(`${t}.${r} does not exist in your schema`);const{unique:u,indexed:d}=l==null?void 0:l.config,h=dO(l==null?void 0:l.valueType);return{"index?":d,"unique?":u,"checked-data-type":h}}function ip(e,t,r,i){const s=e?fO(e,t,r):null,l=lt(),d=[lt(),t,r];return Object.assign(Object.assign({id:l,"forward-identity":d,"value-type":"blob",cardinality:"one","unique?":!1,"index?":!1,isUnsynced:!0},s||{}),i||{})}function hO(e,t,r){return Object.values(e.links).find(s=>s.forward.on===t&&s.forward.label===r||s.reverse.on===t&&s.reverse.label===r)}function pO(e,t,r){const i=hO(e,t,r);if(!i)throw new Error(`Couldn't find the link ${t}.${r} in your schema`);const{forward:s,reverse:l}=i;return{"forward-identity":[lt(),s.on,s.label],"reverse-identity":[lt(),l.on,l.label],cardinality:s.has==="one"?"one":"many","unique?":l.has==="one","on-delete":s.onDelete,"on-delete-reverse":l.onDelete}}function sx(e,t,r,i){const s=e?pO(e,t,r):null,l=lt(),u=[lt(),t,r],d=[lt(),r,t];return Object.assign(Object.assign({id:l,"forward-identity":u,"reverse-identity":d,"value-type":"ref",cardinality:"many","unique?":!1,"index?":!1,isUnsynced:!0},s||{}),i||{})}const mO=new Set(["create","update","merge","link","unlink"]),gO=new Set(["link","unlink"]),vO=new Set(["create","update","merge"]),yO=new Set(["link","unlink","create","update","merge","delete","ruleParams"]),lm={"unique?":!0,"index?":!0},bO=Object.assign(Object.assign({},lm),{cardinality:"one"});function wO(e){const t=[],[r,i,s,l]=e;if(!yO.has(r))return t;const u=sm(s);if(u&&t.push({etype:i,lookupPair:u}),r==="link")for(const[d,h]of Object.entries(l)){const p=Array.isArray(h)?h:[h];for(const y of p){const g=sm(y);g&&t.push({etype:i,lookupPair:g,linkLabel:d})}}return t}function xO({attrs:e,schema:t},r){var i,s;const[l,u,d]=[new Set,Object.assign({},e),[]];function h(g){u[g.id]=g,d.push(["add-attr",g]),l.add(g.id)}function p(g){g!=null&&g.isUnsynced&&!l.has(g.id)&&(d.push(["add-attr",g]),l.add(g.id))}function y(g,b){const w=qt(u,g,b),S=Ja(u,g,b);p(w),p(S),!w&&!S&&h(sx(t,g,b,bO))}for(const g of r)for(const{etype:b,lookupPair:w,linkLabel:S}of wO(g)){const T=w[0];if(S){y(b,S);const k=qt(u,b,S),_=Ja(u,b,S);p(k),p(_);const M=((i=k==null?void 0:k["reverse-identity"])===null||i===void 0?void 0:i[1])||((s=_==null?void 0:_["forward-identity"])===null||s===void 0?void 0:s[1])||S;if(im(u,M,T))y(M,om(T));else{const O=qt(u,M,T);O||h(ip(t,M,T,lm)),p(O)}}else if(im(u,b,T))y(b,om(T));else{const k=qt(u,b,T);k||h(ip(t,b,T,lm)),p(k)}}for(const g of r){const[b,w,S,T]=g;if(mO.has(b)){const k=Object.keys(T);k.push("id");for(const _ of k){const M=qt(u,w,_);if(p(M),vO.has(b)&&(M||h(ip(t,w,_,_==="id"?{"unique?":!0}:null))),gO.has(b)){const O=Ja(u,w,_);!M&&!O&&h(sx(t,w,_)),p(O)}}}}return[u,d]}function _O(e,t){const i=(Array.isArray(t)?t:[t]).flatMap(h=>ZN(h)),[s,l]=xO(e,i),u=Object.assign(Object.assign({},e),{attrs:s}),d=i.flatMap(h=>uO(u,h));return[...l,...d]}var lx=function(e,t,r,i){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(y){try{p(i.next(y))}catch(g){u(g)}}function h(y){try{p(i.throw(y))}catch(g){u(g)}}function p(y){y.done?l(y.value):s(y.value).then(d,h)}p((i=i.apply(e,t||[])).next())})};class F2{constructor(t){this.dbName=t,this._storeName="kv",this._dbPromise=this._init()}_init(){return new Promise((t,r)=>{const i=indexedDB.open(this.dbName,1);i.onerror=s=>{r(s)},i.onsuccess=s=>{t(s.target.result)},i.onupgradeneeded=s=>{s.target.result.createObjectStore(this._storeName)}})}getItem(t){return lx(this,void 0,void 0,function*(){const r=yield this._dbPromise;return new Promise((i,s)=>{const d=r.transaction([this._storeName],"readonly").objectStore(this._storeName).get(t);d.onerror=h=>{s(h)},d.onsuccess=h=>{d.result?i(d.result):i(null)}})})}setItem(t,r){return lx(this,void 0,void 0,function*(){const i=yield this._dbPromise;return new Promise((s,l)=>{const h=i.transaction([this._storeName],"readwrite").objectStore(this._storeName).put(r,t);h.onerror=p=>{l(p)},h.onsuccess=p=>{s()}})})}}var SO=function(e,t,r,i){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(y){try{p(i.next(y))}catch(g){u(g)}}function h(y){try{p(i.throw(y))}catch(g){u(g)}}function p(y){y.done?l(y.value):s(y.value).then(d,h)}p((i=i.apply(e,t||[])).next())})};class G2{static getIsOnline(){return SO(this,void 0,void 0,function*(){return navigator.onLine})}static listen(t){const r=()=>{t(!0)},i=()=>{t(!1)};return addEventListener("online",r),addEventListener("offline",i),()=>{removeEventListener("online",r),removeEventListener("offline",i)}}}var TO=function(e,t,r,i){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(y){try{p(i.next(y))}catch(g){u(g)}}function h(y){try{p(i.throw(y))}catch(g){u(g)}}function p(y){y.done?l(y.value):s(y.value).then(d,h)}p((i=i.apply(e,t||[])).next())})};class hg extends Error{constructor(t){var r;const i=((r=t.body)===null||r===void 0?void 0:r.message)||`API Error (${t.status})`;super(i);const s=new.target.prototype;Object.setPrototypeOf&&Object.setPrototypeOf(this,s),Error.captureStackTrace&&Error.captureStackTrace(this,hg),this.name="InstantAPIError",this.status=t.status,this.body=t.body}get[Symbol.toStringTag](){return"InstantAPIError"}}function ur(e,t){return TO(this,void 0,void 0,function*(){const r=yield fetch(e,t),i=yield r.json();return r.status===200?Promise.resolve(i):Promise.reject(new hg({status:r.status,body:i}))})}var _l=function(e,t,r,i){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(y){try{p(i.next(y))}catch(g){u(g)}}function h(y){try{p(i.throw(y))}catch(g){u(g)}}function p(y){y.done?l(y.value):s(y.value).then(d,h)}p((i=i.apply(e,t||[])).next())})};function kO({apiURI:e,appId:t,email:r}){return ur(`${e}/runtime/auth/send_magic_code`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({"app-id":t,email:r})})}function EO(e){return _l(this,arguments,void 0,function*({apiURI:t,appId:r,email:i,code:s}){return yield ur(`${t}/runtime/auth/verify_magic_code`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({"app-id":r,email:i,code:s})})})}function CO(e){return _l(this,arguments,void 0,function*({apiURI:t,appId:r,refreshToken:i}){return yield ur(`${t}/runtime/auth/verify_refresh_token`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({"app-id":r,"refresh-token":i})})})}function cx(e){return _l(this,arguments,void 0,function*({apiURI:t,appId:r,code:i,codeVerifier:s}){return yield ur(`${t}/runtime/oauth/token`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({app_id:r,code:i,code_verifier:s})})})}function MO(e){return _l(this,arguments,void 0,function*({apiURI:t,appId:r,nonce:i,idToken:s,clientName:l,refreshToken:u}){return yield ur(`${t}/runtime/oauth/id_token`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({app_id:r,nonce:i,id_token:s,client_name:l,refresh_token:u})})})}function NO(e){return _l(this,arguments,void 0,function*({apiURI:t,appId:r,refreshToken:i}){return yield ur(`${t}/runtime/signout`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({app_id:r,refresh_token:i})})})}var Sl=function(e,t,r,i){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(y){try{p(i.next(y))}catch(g){u(g)}}function h(y){try{p(i.throw(y))}catch(g){u(g)}}function p(y){y.done?l(y.value):s(y.value).then(d,h)}p((i=i.apply(e,t||[])).next())})};function OO(e){return Sl(this,arguments,void 0,function*({apiURI:t,appId:r,path:i,file:s,refreshToken:l,contentType:u,contentDisposition:d}){const h={app_id:r,path:i,authorization:`Bearer ${l}`,"content-type":u||s.type};return d&&(h["content-disposition"]=d),yield ur(`${t}/storage/upload`,{method:"PUT",headers:h,body:s})})}function AO(e){return Sl(this,arguments,void 0,function*({apiURI:t,appId:r,path:i,refreshToken:s}){const{data:l}=yield ur(`${t}/storage/files?app_id=${r}&filename=${encodeURIComponent(i)}`,{method:"DELETE",headers:{"content-type":"application/json",authorization:`Bearer ${s}`}});return l})}function RO(e){return Sl(this,arguments,void 0,function*({apiURI:t,appId:r,fileName:i,refreshToken:s,metadata:l={}}){const{data:u}=yield ur(`${t}/storage/signed-upload-url`,{method:"POST",headers:{"content-type":"application/json",authorization:`Bearer ${s}`},body:JSON.stringify({app_id:r,filename:i})});return u})}function zO(e,t){return Sl(this,void 0,void 0,function*(){return(yield fetch(e,{method:"PUT",body:t,headers:{"Content-Type":t.type}})).ok})}function DO(e){return Sl(this,arguments,void 0,function*({apiURI:t,appId:r,path:i,refreshToken:s}){const{data:l}=yield ur(`${t}/storage/signed-download-url?app_id=${r}&filename=${encodeURIComponent(i)}`,{method:"GET",headers:{"content-type":"application/json",authorization:`Bearer ${s}`}});return l})}let pg=!1,V2=!1,Q2=!1;typeof window<"u"&&typeof window.localStorage<"u"&&(pg=!!window.localStorage.getItem("devBackend"),V2=!!window.localStorage.getItem("__instantLogging"),Q2=!!window.localStorage.getItem("__devtoolLocalDash"));function ux(e,t){if(!t)return e;const r={};return t.forEach(i=>{r[i]=e[i]}),r}function jO(e,t,r){var i,s;const l={peers:{}};if(t&&"user"in t?t.user:!0){const d=ux((i=e.user)!==null&&i!==void 0?i:{},t==null?void 0:t.keys);l.user=Object.assign(Object.assign({},d),{peerId:r})}for(const d of Object.keys((s=e.peers)!==null&&s!==void 0?s:{})){const h=(t==null?void 0:t.peers)===void 0,p=Array.isArray(t==null?void 0:t.peers)&&(t==null?void 0:t.peers.includes(d));if(h||p){const y=ux(e.peers[d],t==null?void 0:t.keys);l.peers[d]=Object.assign(Object.assign({},y),{peerId:d})}}return l}function UO(e,t){if(e.isLoading!==t.isLoading||e.error!==t.error||(e.user||t.user)&&(!e.user||!t.user||!Kw(e.user,t.user))||!M2(e.peers,t.peers))return!0;for(const i of Object.keys(e.peers))if(!Kw(e.peers[i],t.peers[i]))return!0;return!1}class dx{constructor(){this.promise=new Promise((t,r)=>{this._resolve=t,this._reject=r})}resolve(t){this._resolve(t)}reject(t){this._reject(t)}}var eu=function(e,t,r,i){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(y){try{p(i.next(y))}catch(g){u(g)}}function h(y){try{p(i.throw(y))}catch(g){u(g)}}function p(y){y.done?l(y.value):s(y.value).then(d,h)}p((i=i.apply(e,t||[])).next())})};class fx{constructor(t,r,i,s,l=h=>JSON.stringify(h),u=h=>JSON.parse(h),d=100){this._subs=[],this._persister=t,this._key=r,this._onMerge=s,this._loadedCbs=[],this._isLoading=!0,this.currentValue=i,this.toJSON=l,this.fromJSON=u,this._saveThrottleMs=d,this._pendingSaveCbs=[],this._version=0,this._load()}_load(){return eu(this,void 0,void 0,function*(){const t=this.fromJSON(yield this._persister.getItem(this._key));this._isLoading=!1,this._onMerge(t,this.currentValue);for(const r of this._loadedCbs)r()})}waitForLoaded(){return eu(this,void 0,void 0,function*(){if(!this._isLoading)return;yield new Promise(r=>{this._loadedCbs.push(r)})})}isLoading(){return this._isLoading}version(){return this._version}waitForSync(){return eu(this,void 0,void 0,function*(){if(!this._nextSave)return;yield new Promise(r=>{this._pendingSaveCbs.push(r)})})}_writeToStorage(){this._persister.setItem(this._key,this.toJSON(this.currentValue));for(const t of this._pendingSaveCbs)t();this._pendingSaveCbs.length=0}flush(){return eu(this,void 0,void 0,function*(){this._nextSave&&(clearTimeout(this._nextSave),this._writeToStorage())})}_enqueuePersist(t){if(this._nextSave){t&&this._pendingSaveCbs.push(t);return}this._nextSave=setTimeout(()=>{this._nextSave=null,this._writeToStorage()},this._saveThrottleMs)}set(t,r){this._version++,this.currentValue=t(this.currentValue),this._isLoading?this._loadedCbs.push(()=>this._enqueuePersist(r)):this._enqueuePersist(r);for(const i of this._subs)i(this.currentValue)}subscribe(t){return this._subs.push(t),t(this.currentValue),()=>{this._subs=this._subs.filter(r=>r!==t)}}}function W2(e,t=[]){e.forEach(r=>{const{data:i}=r,{"datalog-result":s}=i,{"join-rows":l}=s;for(const u of l)for(const d of u)t.push(d);W2(r["child-nodes"],t)})}function hx(e){const t=[];return W2(e,t),t}function px(e){return Object.values(e.links).reduce((t,r)=>{var i,s,l,u;return(i=t[l=r.forward.on])!==null&&i!==void 0||(t[l]={}),t[r.forward.on][r.forward.label]={isForward:!0,isSingular:r.forward.has==="one",link:r},(s=t[u=r.reverse.on])!==null&&s!==void 0||(t[u]={}),t[r.reverse.on][r.reverse.label]={isForward:!1,isSingular:r.reverse.has==="one",link:r},t},{})}const Z2="v0.20.12";function LO(e){return{info:e?console.info.bind(console):()=>{},debug:e?console.debug.bind(console):()=>{},error:e?console.error.bind(console):()=>{}}}var Nt=function(e,t,r,i){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(y){try{p(i.next(y))}catch(g){u(g)}}function h(y){try{p(i.throw(y))}catch(g){u(g)}}function p(y){y.done?l(y.value):s(y.value).then(d,h)}p((i=i.apply(e,t||[])).next())})};const Cr={CONNECTING:"connecting",OPENED:"opened",AUTHENTICATED:"authenticated",CLOSED:"closed",ERRORED:"errored"},$O=3e4,HO=3e4,IO=0,mx=1,qO={apiURI:"https://api.instantdb.com",websocketURI:"wss://api.instantdb.com/runtime/session"},op="_instant_oauth_redirect",sp="currentUser";let BO=0;function YO(e){const t=new WebSocket(e);return t._id=BO++,t}function PO(){return typeof window<"u"||typeof chrome<"u"}const gx={"set-presence":!0,"set-presence-ok":!0,"refresh-presence":!0,"patch-presence":!0};function XO(e,t){var r;const i=JSON.parse(e);for(const s in i){const l=i[s];if(!((r=l==null?void 0:l.result)===null||r===void 0)&&r.store){const u=l.result.store;l.result.store=BM(Object.assign(Object.assign({},u),{useDateObjects:t}))}}return i}function FO(e){var t;const r={};for(const i in e){const s=e[i],l=Object.assign({},s);!((t=s.result)===null||t===void 0)&&t.store&&(l.result=Object.assign(Object.assign({},s.result),{store:qM(s.result.store)})),r[i]=l}return JSON.stringify(r)}function vx(e){return[...e].sort((t,r)=>{const[i,s]=t,[l,u]=r,d=s.order||0,h=u.order||0;return d==h?i<l?-1:i>l?1:0:d-h})}class GO{constructor(t,r=F2,i=G2,s){var l;this._isOnline=!0,this._isShutdown=!1,this.status=Cr.CONNECTING,this.queryCbs={},this.queryOnceDfds={},this.authCbs=[],this.attrsCbs=[],this.mutationErrorCbs=[],this.connectionStatusCbs=[],this.mutationDeferredStore=new Map,this._reconnectTimeoutId=null,this._reconnectTimeoutMs=0,this._localIdPromises={},this._errorMessage=null,this._oauthCallbackResponse=null,this._linkIndex=null,this._rooms={},this._roomsPendingLeave={},this._presence={},this._broadcastQueue=[],this._broadcastSubs={},this._currentUserCached={isLoading:!0,error:void 0,user:void 0},this._beforeUnloadCbs=[],this._dataForQueryCache={},this._onMergeQuerySubs=(u,d)=>{const h=u||{},p=Object.assign({},d);Object.entries(d).forEach(([g,b])=>{var w;const S=(w=h==null?void 0:h[g])===null||w===void 0?void 0:w.result,T=b.result;S&&!T&&(p[g].result=S)}),Object.keys(h).filter(g=>!d[g]).sort((g,b)=>{var w,S;const T=((w=h[g])===null||w===void 0?void 0:w.lastAccessed)||0;return(((S=h[b])===null||S===void 0?void 0:S.lastAccessed)||0)-T}).slice(0,this.queryCacheLimit).forEach(g=>{p[g]=h[g]}),this.querySubs.set(g=>p),this.loadedNotifyAll()},this._onMergePendingMutations=(u,d)=>{const h=new Map([...u.entries(),...d.entries()]);this.pendingMutations.set(y=>h),this.loadedNotifyAll(),this._rewriteMutationsSorted(this.attrs,u).forEach(([y,g])=>{!d.has(y)&&!g["tx-id"]&&this._sendMutation(y,g)})},this.getPreviousResult=u=>{const d=hn(u);return this.dataForQuery(d)},this.notifyOne=u=>{var d,h;const p=(d=this.queryCbs[u])!==null&&d!==void 0?d:[],y=(h=this._dataForQueryCache[u])===null||h===void 0?void 0:h.data,g=this.dataForQuery(u);g&&(yu(g,y)||p.forEach(b=>b.cb(g)))},this.notifyOneQueryOnce=u=>{var d;const h=(d=this.queryOnceDfds[u])!==null&&d!==void 0?d:[],p=this.dataForQuery(u);h.forEach(y=>{this._completeQueryOnce(y.q,u,y.dfd),y.dfd.resolve(p)})},this.notifyQueryError=(u,d)=>{(this.queryCbs[u]||[]).forEach(p=>p.cb({error:d}))},this.pushTx=u=>{try{const d=_O({attrs:this.optimisticAttrs(),schema:this.config.schema,stores:Object.values(this.querySubs.currentValue).map(h=>{var p;return(p=h==null?void 0:h.result)===null||p===void 0?void 0:p.store}),useDateObjects:this.config.useDateObjects},u);return this.pushOps(d)}catch(d){return this.pushOps([],d)}},this.pushOps=(u,d)=>{const h=lt(),p=[...this.pendingMutations.currentValue.values()],y=Math.max(0,...p.map(w=>w.order||0))+1,g={op:"transact","tx-steps":u,created:Date.now(),error:d,order:y};this.pendingMutations.set(w=>(w.set(h,g),w));const b=new dx;return this.mutationDeferredStore.set(h,b),this._sendMutation(h,g),this.notifyAll(),b.promise},this._wsOnOpen=u=>{const d=u.target;if(this._ws!==d){this._log.info("[socket][open]",d._id,"skip; this is no longer the current ws");return}this._log.info("[socket][open]",this._ws._id),this._setStatus(Cr.OPENED),this.getCurrentUser().then(h=>{var p;this._trySend(lt(),{op:"init","app-id":this.config.appId,"refresh-token":(p=h.user)===null||p===void 0?void 0:p.refresh_token,versions:this.versions,"__admin-token":this.config.__adminToken})}).catch(h=>{this._log.error("[socket][error]",d._id,h)})},this._wsOnMessage=u=>{const d=u.target,h=JSON.parse(u.data.toString());if(this._ws!==d){this._log.info("[socket][message]",d._id,h,"skip; this is no longer the current ws");return}this._handleReceive(d._id,JSON.parse(u.data.toString()))},this._wsOnError=u=>{const d=u.target;if(this._ws!==d){this._log.info("[socket][error]",d._id,"skip; this is no longer the current ws");return}this._log.error("[socket][error]",d._id,u)},this._wsOnClose=u=>{const d=u.target;if(this._ws!==d){this._log.info("[socket][close]",d._id,"skip; this is no longer the current ws");return}this._setStatus(Cr.CLOSED);for(const h of Object.values(this._rooms))h.isConnected=!1;if(this._isShutdown){this._log.info("[socket][close]",d._id,"Reactor has been shut down and will not reconnect");return}this._log.info("[socket][close]",d._id,"schedule reconnect, ms =",this._reconnectTimeoutMs),setTimeout(()=>{if(this._reconnectTimeoutMs=Math.min(this._reconnectTimeoutMs+1e3,1e4),!this._isOnline){this._log.info("[socket][close]",d._id,"we are offline, no need to start socket");return}this._startSocket()},this._reconnectTimeoutMs)},this.config=Object.assign(Object.assign({},qO),t),this.queryCacheLimit=(l=this.config.queryCacheLimit)!==null&&l!==void 0?l:10,this._log=LO(t.verbose||pg||V2),this.versions=Object.assign(Object.assign({},s||{}),{"@instantdb/core":Z2}),this.config.schema&&(this._linkIndex=px(this.config.schema)),PO()&&(typeof BroadcastChannel=="function"&&(this._broadcastChannel=new BroadcastChannel("@instantdb"),this._broadcastChannel.addEventListener("message",u=>Nt(this,void 0,void 0,function*(){var d;try{if(((d=u.data)===null||d===void 0?void 0:d.type)==="auth"){const h=yield this.getCurrentUser();this.updateUser(h.user)}}catch(h){this._log.error("[error] handle broadcast channel",h)}}))),this._oauthCallbackResponse=this._oauthLoginInit(),this._initStorage(r),this.getCurrentUser(),i.getIsOnline().then(u=>{this._isOnline=u,this._startSocket(),i.listen(d=>{d!==this._isOnline&&(this._log.info("[network] online =",d),this._isOnline=d,this._isOnline?this._startSocket():(this._log.info("Changing status from",this.status,"to",Cr.CLOSED),this._setStatus(Cr.CLOSED)))})}),typeof addEventListener<"u"&&(this._beforeUnload=this._beforeUnload.bind(this),addEventListener("beforeunload",this._beforeUnload)))}updateSchema(t){this.config=Object.assign(Object.assign({},this.config),{schema:t,cardinalityInference:!!t}),this._linkIndex=t?px(this.config.schema):null}_initStorage(t){this._persister=new t(`instant_${this.config.appId}_5`),this.querySubs=new fx(this._persister,"querySubs",{},this._onMergeQuerySubs,FO,r=>XO(r,this.config.useDateObjects)),this.pendingMutations=new fx(this._persister,"pendingMutations",new Map,this._onMergePendingMutations,r=>JSON.stringify([...r.entries()]),r=>new Map(JSON.parse(r))),this._beforeUnloadCbs.push(()=>{this.pendingMutations.flush(),this.querySubs.flush()})}_beforeUnload(){for(const t of this._beforeUnloadCbs)t()}_finishTransaction(t,r,i){const s=this.mutationDeferredStore.get(r);this.mutationDeferredStore.delete(r);const l=t!=="error"&&t!=="timeout";!s&&!l&&console.error("Mutation failed",Object.assign({status:t,eventId:r},i)),s&&(l?s.resolve({status:t,eventId:r}):s.reject(Object.assign({status:t,eventId:r},i)))}_setStatus(t,r){this.status=t,this._errorMessage=r,this.notifyConnectionStatusSubs(t)}_flushEnqueuedRoomData(t){var r,i;const s=(i=(r=this._presence[t])===null||r===void 0?void 0:r.result)===null||i===void 0?void 0:i.user,l=this._broadcastQueue[t];if(this._broadcastQueue[t]=[],s&&this._trySetPresence(t,s),l)for(const u of l){const{topic:d,roomType:h,data:p}=u;this._tryBroadcast(t,h,d,p)}}_handleReceive(t,r){var i,s,l,u,d,h;const p=!!this.config.schema&&("cardinalityInference"in this.config?!!this.config.cardinalityInference:!0);switch(gx[r.op]||this._log.info("[receive]",t,r.op,r),r.op){case"init-ok":this._setStatus(Cr.AUTHENTICATED),this._reconnectTimeoutMs=0,this._setAttrs(r.attrs),this._flushPendingMessages(),this._sessionId=r["session-id"];for(const D of Object.keys(this._rooms)){const F=(s=(i=this._presence[D])===null||i===void 0?void 0:i.result)===null||s===void 0?void 0:s.user;this._tryJoinRoom(D,F)}break;case"add-query-exists":this.notifyOneQueryOnce(hn(r.q));break;case"add-query-ok":const{q:y,result:g}=r,b=hn(y),w=(u=(l=g==null?void 0:g[0])===null||l===void 0?void 0:l.data)===null||u===void 0?void 0:u["page-info"],S=(h=(d=g==null?void 0:g[0])===null||d===void 0?void 0:d.data)===null||h===void 0?void 0:h.aggregate,T=hx(g),k=Kp(this.attrs,T,p,this._linkIndex,this.config.useDateObjects);this.querySubs.set(D=>(D[b].result={store:k,pageInfo:w,aggregate:S,processedTxId:r["processed-tx-id"]},D)),this._cleanupPendingMutationsQueries(),this.notifyOne(b),this.notifyOneQueryOnce(b),this._cleanupPendingMutationsTimeout();break;case"refresh-ok":const{computations:_,attrs:M}=r,O=r["processed-tx-id"];M&&this._setAttrs(M),this._cleanupPendingMutationsTimeout();const L=this._rewriteMutations(this.attrs,this.pendingMutations.currentValue,O);L!==this.pendingMutations.currentValue&&this.pendingMutations.set(()=>L);const j=vx(L.entries()),X=_.map(D=>{var F,N,q,Z;const J=D["instaql-query"],te=D["instaql-result"],oe=hn(J),re=hx(te),be=Kp(this.attrs,re,p,this._linkIndex,this.config.useDateObjects),fe=this._applyOptimisticUpdates(be,j,O),Me=(N=(F=te==null?void 0:te[0])===null||F===void 0?void 0:F.data)===null||N===void 0?void 0:N["page-info"],rt=(Z=(q=te==null?void 0:te[0])===null||q===void 0?void 0:q.data)===null||Z===void 0?void 0:Z.aggregate;return{hash:oe,store:fe,pageInfo:Me,aggregate:rt}});X.forEach(({hash:D,store:F,pageInfo:N,aggregate:q})=>{this.querySubs.set(Z=>(Z[D].result={store:F,pageInfo:N,aggregate:q,processedTxId:O},Z))}),this._cleanupPendingMutationsQueries(),X.forEach(({hash:D})=>{this.notifyOne(D)});break;case"transact-ok":const{"client-event-id":G,"tx-id":ee}=r,me=this._rewriteMutations(this.attrs,this.pendingMutations.currentValue).get(G);if(!me)break;this.pendingMutations.set(D=>(D.set(G,Object.assign(Object.assign({},D.get(G)),{"tx-id":ee,confirmed:Date.now()})),D)),this._cleanupPendingMutationsTimeout();const de=me["tx-steps"].filter(([D,...F])=>D==="add-attr").map(([D,F])=>F).concat(Object.values(this.attrs));this._setAttrs(de),this._finishTransaction("synced",G);break;case"patch-presence":{const D=r["room-id"];this._patchPresencePeers(D,r.edits),this._notifyPresenceSubs(D);break}case"refresh-presence":{const D=r["room-id"];this._setPresencePeers(D,r.data),this._notifyPresenceSubs(D);break}case"server-broadcast":const ie=r["room-id"],ze=r.topic;this._notifyBroadcastSubs(ie,ze,r);break;case"join-room-ok":const je=r["room-id"],Ce=this._rooms[je];if(!Ce){this._roomsPendingLeave[je]&&(this._tryLeaveRoom(je),delete this._roomsPendingLeave[je]);break}Ce.isConnected=!0,this._notifyPresenceSubs(je),this._flushEnqueuedRoomData(je);break;case"join-room-error":const C=r["room-id"],z=this._rooms[C];z&&(z.error=r.error),this._notifyPresenceSubs(C);break;case"error":this._handleReceiveError(r);break}}_handleMutationError(t,r,i){const s=this.pendingMutations.currentValue.get(r);s&&(t!=="timeout"||!s["tx-id"])&&(this.pendingMutations.set(l=>(l.delete(r),l)),this.notifyAll(),this.notifyAttrsSubs(),this.notifyMutationErrorSubs(i),this._finishTransaction(t,r,i))}_handleReceiveError(t){var r,i,s,l,u;const d=t["client-event-id"],h=this.pendingMutations.currentValue.get(d),p={message:t.message||"Uh-oh, something went wrong. Ping Joe & Stopa."};if(t.hint&&(p.hint=t.hint),h){const b={message:t.message,hint:t.hint};this._handleMutationError("error",d,b);return}if(!((r=t["original-event"])===null||r===void 0)&&r.hasOwnProperty("q")&&((i=t["original-event"])===null||i===void 0?void 0:i.op)==="add-query"){const b=(s=t["original-event"])===null||s===void 0?void 0:s.q,w=hn(b);this.notifyQueryError(hn(b),p),this.notifyQueryOnceError(b,w,d,p);return}if(((l=t["original-event"])===null||l===void 0?void 0:l.op)==="init"){if(t.type==="record-not-found"&&((u=t.hint)===null||u===void 0?void 0:u["record-type"])==="app-user"){this.changeCurrentUser(null);return}this._setStatus(Cr.ERRORED,p),this.notifyAll();return}const g=Object.assign({},t);delete g.message,delete g.hint,console.error(t.message,g),t.hint&&console.error(`This error comes with some debugging information. Here it is: 
`,t.hint)}notifyQueryOnceError(t,r,i,s){var l;const u=(l=this.queryOnceDfds[r])===null||l===void 0?void 0:l.find(d=>d.eventId===i);u&&(u.dfd.reject(s),this._completeQueryOnce(t,r,u.dfd))}_setAttrs(t){this.attrs=t.reduce((r,i)=>(r[i.id]=i,r),{}),this.notifyAttrsSubs()}_startQuerySub(t,r){const i=lt();return this.querySubs.set(s=>(s[r]=s[r]||{q:t,result:null,eventId:i},s[r].lastAccessed=Date.now(),s)),this._trySendAuthed(i,{op:"add-query",q:t}),i}subscribeQuery(t,r,i){var s;i&&"ruleParams"in i&&(t=Object.assign({$$ruleParams:i.ruleParams},t));const l=hn(t),u=this.getPreviousResult(t);return u&&r(u),this.queryCbs[l]=(s=this.queryCbs[l])!==null&&s!==void 0?s:[],this.queryCbs[l].push({q:t,cb:r}),this._startQuerySub(t,l),()=>{this._unsubQuery(t,l,r)}}queryOnce(t,r){var i;r&&"ruleParams"in r&&(t=Object.assign({$$ruleParams:r.ruleParams},t));const s=new dx;if(!this._isOnline)return s.reject(new Error("We can't run `queryOnce`, because the device is offline.")),s.promise;if(!this.querySubs)return s.reject(new Error("We can't run `queryOnce` on the backend. Use adminAPI.query instead: https://www.instantdb.com/docs/backend#query")),s.promise;const l=hn(t),u=this._startQuerySub(t,l);return this.queryOnceDfds[l]=(i=this.queryOnceDfds[l])!==null&&i!==void 0?i:[],this.queryOnceDfds[l].push({q:t,dfd:s,eventId:u}),setTimeout(()=>s.reject(new Error("Query timed out")),$O),s.promise}_completeQueryOnce(t,r,i){this.queryOnceDfds[r]&&(this.queryOnceDfds[r]=this.queryOnceDfds[r].filter(s=>s.dfd!==i),this._cleanupQuery(t,r))}_unsubQuery(t,r,i){this.queryCbs[r]&&(this.queryCbs[r]=this.queryCbs[r].filter(s=>s.cb!==i),this._cleanupQuery(t,r))}_cleanupQuery(t,r){var i,s;!((i=this.queryCbs[r])===null||i===void 0)&&i.length||!((s=this.queryOnceDfds[r])===null||s===void 0)&&s.length||(delete this.queryCbs[r],delete this.queryOnceDfds[r],this._trySendAuthed(lt(),{op:"remove-query",q:t}))}_rewriteMutations(t,r,i){if(!t)return r;const s=y=>{const[g,b,w]=y["forward-identity"];return qt(t,b,w)},l=y=>{const[g,b,w]=y["forward-identity"];return Ja(t,b,w)},u={attrIdMap:{},refSwapAttrIds:new Set};let d=!1;const h=(y,g)=>{const b=[];for(const w of y){const[S]=w;if(S==="add-attr"){const[k,_]=w,M=s(_);if(M&&_.id!==M.id){u.attrIdMap[_.id]=M.id,d=!0;continue}if(_["value-type"]==="ref"){const O=l(_);if(O){u.attrIdMap[_.id]=O.id,u.refSwapAttrIds.add(_.id),d=!0;continue}}}if(i&&g&&i>=g&&S==="add-attr"||S==="update-attr"||S==="delete-attr"){d=!0;continue}const T=d?KN(u,w):w;b.push(T)}return d?b:y},p=new Map;for(const[y,g]of r.entries())p.set(y,Object.assign(Object.assign({},g),{"tx-steps":h(g["tx-steps"],g["tx-id"])}));return d?p:r}_rewriteMutationsSorted(t,r){return vx(this._rewriteMutations(t,r).entries())}optimisticAttrs(){var t;const r=[...this.pendingMutations.currentValue.values()].flatMap(d=>d["tx-steps"]),i=new Set(r.filter(([d,h])=>d==="delete-attr").map(([d,h])=>h)),s=[];for(const[d,h]of r)if(d==="add-attr")s.push(h);else if(d==="update-attr"&&h.id&&(!((t=this.attrs)===null||t===void 0)&&t[h.id])){const p=Object.assign(Object.assign({},this.attrs[h.id]),h);s.push(p)}const l=[...Object.values(this.attrs||{}),...s].filter(d=>!i.has(d.id));return Object.fromEntries(l.map(d=>[d.id,d]))}dataForQuery(t){const r=this._errorMessage;if(r)return{error:r};if(!this.querySubs||!this.pendingMutations)return;const i=this.querySubs.version(),s=this.querySubs.currentValue,l=this.pendingMutations.version(),u=this.pendingMutations.currentValue,{q:d,result:h}=s[t]||{};if(!h)return;const p=this._dataForQueryCache[t];if(p&&i===p.querySubVersion&&l===p.pendingMutationsVersion)return p.data;const{store:y,pageInfo:g,aggregate:b,processedTxId:w}=h,S=this._rewriteMutationsSorted(y.attrs,u),T=this._applyOptimisticUpdates(y,S,w),k=GN({store:T,pageInfo:g,aggregate:b},d);return this._dataForQueryCache[t]={querySubVersion:i,pendingMutationsVersion:l,data:k},k}_applyOptimisticUpdates(t,r,i){for(const[s,l]of r)(!l["tx-id"]||i&&l["tx-id"]>i)&&(t=rN(t,l["tx-steps"]));return t}notifyAll(){Object.keys(this.queryCbs).forEach(t=>{this.notifyOne(t)})}loadedNotifyAll(){this.pendingMutations.isLoading()||this.querySubs.isLoading()||this.notifyAll()}shutdown(){var t;this._log.info("[shutdown]",this.config.appId),this._isShutdown=!0,(t=this._ws)===null||t===void 0||t.close()}_sendMutation(t,r){if(r.error){this._handleMutationError("error",t,{error:r.error,message:r.error.message});return}if(this.status!==Cr.AUTHENTICATED){this._finishTransaction("enqueued",t);return}const i=Math.max(5e3,this.pendingMutations.currentValue.size*5e3);this._isOnline?(this._trySend(t,r),setTimeout(()=>{this._isOnline&&this._handleMutationError("timeout",t,{message:"transaction timed out"})},i)):this._finishTransaction("enqueued",t)}_flushPendingMessages(){Object.keys(this.queryCbs).map(s=>this.querySubs.currentValue[s]).filter(s=>s).forEach(({eventId:s,q:l})=>{this._trySendAuthed(s,{op:"add-query",q:l})}),Object.values(this.queryOnceDfds).flat().forEach(({eventId:s,q:l})=>{this._trySendAuthed(s,{op:"add-query",q:l})}),this._rewriteMutationsSorted(this.attrs,this.pendingMutations.currentValue).forEach(([s,l])=>{l["tx-id"]||this._sendMutation(s,l)})}_cleanupPendingMutationsQueries(){let t=Number.MAX_SAFE_INTEGER;for(const{result:r}of Object.values(this.querySubs.currentValue))r!=null&&r.processedTxId&&(t=Math.min(t,r==null?void 0:r.processedTxId));this.pendingMutations.set(r=>{for(const[i,s]of Array.from(r.entries()))s["tx-id"]&&s["tx-id"]<=t&&r.delete(i);return r})}_cleanupPendingMutationsTimeout(){const t=Date.now();this.pendingMutations.currentValue.size<200||this.pendingMutations.set(r=>{let i=!1,s=!1;for(const[l,u]of Array.from(r.entries()))u.confirmed||(s=!0),u.confirmed&&u.confirmed+HO<t&&(r.delete(l),i=!0);if(i&&s)for(const[l,u]of Array.from(r.entries()))u.confirmed||r.delete(l);return r})}_trySendAuthed(...t){this.status===Cr.AUTHENTICATED&&this._trySend(...t)}_trySend(t,r,i){this._ws.readyState===mx&&(gx[r.op]||this._log.info("[send]",this._ws._id,r.op,r),this._ws.send(JSON.stringify(Object.assign({"client-event-id":t},r))))}_startSocket(){if(this._isShutdown){this._log.info("[socket][start]",this.config.appId,"Reactor has been shut down and will not start a new socket");return}if(this._ws&&this._ws.readyState==IO){this._log.info("[socket][start]",this._ws._id,"maintained as current ws, we were still in a connecting state");return}const t=this._ws;this._ws=YO(`${this.config.websocketURI}?app_id=${this.config.appId}`),this._ws.onopen=this._wsOnOpen,this._ws.onmessage=this._wsOnMessage,this._ws.onclose=this._wsOnClose,this._ws.onerror=this._wsOnError,this._log.info("[socket][start]",this._ws._id),(t==null?void 0:t.readyState)===mx&&(this._log.info("[socket][start]",this._ws._id,"close previous ws id = ",t._id),t.close())}getLocalId(t){return Nt(this,void 0,void 0,function*(){const r=`localToken_${t}`,i=yield this._persister.getItem(r);if(i)return i;if(this._localIdPromises[r])return this._localIdPromises[r];const s=lt();return this._localIdPromises[r]=this._persister.setItem(r,s).then(()=>s),this._localIdPromises[r]})}_replaceUrlAfterOAuth(){if(typeof URL>"u")return;const t=new URL(window.location.href);if(t.searchParams.get(op)){const r=t.toString();t.searchParams.delete(op),t.searchParams.delete("code"),t.searchParams.delete("error");const i=t.pathname+(t.searchParams.size?"?"+t.searchParams:"")+t.hash;if(history.replaceState(history.state,"",i),typeof navigation=="object"&&typeof navigation.addEventListener=="function"&&typeof navigation.removeEventListener=="function"){let s=!1;const l=u=>{var d;s||(s=!0,navigation.removeEventListener("navigate",l),!u.userInitiated&&u.navigationType==="replace"&&((d=u.destination)===null||d===void 0?void 0:d.url)===r&&history.replaceState(history.state,"",i))};navigation.addEventListener("navigate",l)}}}_oauthLoginInit(){return Nt(this,void 0,void 0,function*(){var t,r,i,s;if(typeof window>"u"||typeof window.location>"u"||typeof URLSearchParams>"u")return null;const l=new URLSearchParams(window.location.search);if(!l.get(op))return null;const u=l.get("error");if(u)return this._replaceUrlAfterOAuth(),{error:{message:u}};const d=l.get("code");if(!d)return null;this._replaceUrlAfterOAuth();try{const{user:h}=yield cx({apiURI:this.config.apiURI,appId:this.config.appId,code:d});return this.setCurrentUser(h),null}catch(h){return((t=h==null?void 0:h.body)===null||t===void 0?void 0:t.type)==="record-not-found"&&((i=(r=h==null?void 0:h.body)===null||r===void 0?void 0:r.hint)===null||i===void 0?void 0:i["record-type"])==="app-oauth-code"&&(yield this._hasCurrentUser())?null:{error:{message:((s=h==null?void 0:h.body)===null||s===void 0?void 0:s.message)||"Error logging in."}}}})}_waitForOAuthCallbackResponse(){return Nt(this,void 0,void 0,function*(){return yield this._oauthCallbackResponse})}__subscribeMutationErrors(t){return this.mutationErrorCbs.push(t),()=>{this.mutationErrorCbs=this.mutationErrorCbs.filter(r=>r!==t)}}subscribeAuth(t){this.authCbs.push(t);const r=this._currentUserCached;r.isLoading||t(this._currentUserCached);let i=!1;return this.getCurrentUser().then(s=>{i||yu(s,r)||t(s)}),()=>{i=!0,this.authCbs=this.authCbs.filter(s=>s!==t)}}getAuth(){return Nt(this,void 0,void 0,function*(){const{user:t,error:r}=yield this.getCurrentUser();if(r)throw r;return t})}subscribeConnectionStatus(t){return this.connectionStatusCbs.push(t),()=>{this.connectionStatusCbs=this.connectionStatusCbs.filter(r=>r!==t)}}subscribeAttrs(t){return this.attrsCbs.push(t),this.attrs&&t(this.attrs),()=>{this.attrsCbs=this.attrsCbs.filter(r=>r!==t)}}notifyAuthSubs(t){this.authCbs.forEach(r=>r(t))}notifyMutationErrorSubs(t){this.mutationErrorCbs.forEach(r=>r(t))}notifyAttrsSubs(){if(!this.attrs)return;const t=this.optimisticAttrs();this.attrsCbs.forEach(r=>r(t))}notifyConnectionStatusSubs(t){this.connectionStatusCbs.forEach(r=>r(t))}setCurrentUser(t){return Nt(this,void 0,void 0,function*(){yield this._persister.setItem(sp,JSON.stringify(t))})}getCurrentUserCached(){return this._currentUserCached}getCurrentUser(){return Nt(this,void 0,void 0,function*(){const t=yield this._waitForOAuthCallbackResponse();if(t!=null&&t.error){const s={error:t.error,user:void 0};return this._currentUserCached=Object.assign({isLoading:!1},s),s}const r=yield this._persister.getItem(sp),i={user:JSON.parse(r),error:void 0};return this._currentUserCached=Object.assign({isLoading:!1},i),i})}_hasCurrentUser(){return Nt(this,void 0,void 0,function*(){const t=yield this._persister.getItem(sp);return JSON.parse(t)!=null})}changeCurrentUser(t){return Nt(this,void 0,void 0,function*(){var r;const{user:i}=yield this.getCurrentUser();if(!yu(i,t)){yield this.setCurrentUser(t),this.updateUser(t);try{(r=this._broadcastChannel)===null||r===void 0||r.postMessage({type:"auth"})}catch(s){console.error("Error posting message to broadcast channel",s)}}})}updateUser(t){const r={error:void 0,user:t};this._currentUserCached=Object.assign({isLoading:!1},r),this._dataForQueryCache={},this.querySubs.set(i=>(Object.keys(i).forEach(s=>{delete i[s].result}),i)),this._reconnectTimeoutMs=0,this._ws.close(),this._oauthCallbackResponse=null,this.notifyAuthSubs(r)}sendMagicCode({email:t}){return kO({apiURI:this.config.apiURI,appId:this.config.appId,email:t})}signInWithMagicCode(t){return Nt(this,arguments,void 0,function*({email:r,code:i}){const s=yield EO({apiURI:this.config.apiURI,appId:this.config.appId,email:r,code:i});return yield this.changeCurrentUser(s.user),s})}signInWithCustomToken(t){return Nt(this,void 0,void 0,function*(){const r=yield CO({apiURI:this.config.apiURI,appId:this.config.appId,refreshToken:t});return yield this.changeCurrentUser(r.user),r})}potentiallyInvalidateToken(t,r){var i;const s=(i=t==null?void 0:t.user)===null||i===void 0?void 0:i.refresh_token;if(!s)return;if(r.invalidateToken===!1){this._log.info("[auth-invalidate] skipped invalidateToken");return}NO({apiURI:this.config.apiURI,appId:this.config.appId,refreshToken:s}).then(()=>{this._log.info("[auth-invalidate] completed invalidateToken")}).catch(u=>{})}signOut(t){return Nt(this,void 0,void 0,function*(){const r=yield this.getCurrentUser();this.potentiallyInvalidateToken(r,t),yield this.changeCurrentUser(null)})}createAuthorizationURL({clientName:t,redirectURL:r}){const{apiURI:i,appId:s}=this.config;return`${i}/runtime/oauth/start?app_id=${s}&client_name=${t}&redirect_uri=${r}`}exchangeCodeForToken(t){return Nt(this,arguments,void 0,function*({code:r,codeVerifier:i}){const s=yield cx({apiURI:this.config.apiURI,appId:this.config.appId,code:r,codeVerifier:i});return yield this.changeCurrentUser(s.user),s})}issuerURI(){const{apiURI:t,appId:r}=this.config;return`${t}/runtime/${r}`}signInWithIdToken(t){return Nt(this,arguments,void 0,function*({idToken:r,clientName:i,nonce:s}){var l;const u=yield this.getCurrentUser(),d=(l=u==null?void 0:u.user)===null||l===void 0?void 0:l.refresh_token,h=yield MO({apiURI:this.config.apiURI,appId:this.config.appId,idToken:r,clientName:i,nonce:s,refreshToken:d});return yield this.changeCurrentUser(h.user),h})}joinRoom(t,r){return this._rooms[t]||(this._rooms[t]={isConnected:!1,error:void 0}),this._presence[t]=this._presence[t]||{},r&&(this._presence[t].result=this._presence[t].result||{},this._presence[t].result.user=r,this._notifyPresenceSubs(t)),this._tryJoinRoom(t,r),()=>{this._cleanupRoom(t)}}_cleanupRoom(t){var r,i,s,l;if(!(!((i=(r=this._presence[t])===null||r===void 0?void 0:r.handlers)===null||i===void 0)&&i.length)&&!Object.keys((s=this._broadcastSubs[t])!==null&&s!==void 0?s:{}).length){const u=(l=this._rooms[t])===null||l===void 0?void 0:l.isConnected;delete this._rooms[t],delete this._presence[t],delete this._broadcastSubs[t],u?this._tryLeaveRoom(t):this._roomsPendingLeave[t]=!0}}getPresence(t,r,i={}){const s=this._rooms[r],l=this._presence[r];return!s||!l||!l.result?null:Object.assign(Object.assign({},jO(l.result,i,this._sessionId)),{isLoading:!s.isConnected,error:s.error})}publishPresence(t,r,i){const s=this._rooms[r],l=this._presence[r];if(!s||!l)return;l.result=l.result||{};const u=Object.assign(Object.assign({},l.result.user),i);l.result.user=u,s.isConnected&&(this._trySetPresence(r,u),this._notifyPresenceSubs(r))}_trySetPresence(t,r){this._trySendAuthed(lt(),{op:"set-presence","room-id":t,data:r})}_tryJoinRoom(t,r){this._trySendAuthed(lt(),{op:"join-room","room-id":t,data:r}),delete this._roomsPendingLeave[t]}_tryLeaveRoom(t){this._trySendAuthed(lt(),{op:"leave-room","room-id":t})}subscribePresence(t,r,i,s){const l=this.joinRoom(r,i.data),u=Object.assign(Object.assign({},i),{roomId:r,cb:s,prev:null});return this._presence[r]=this._presence[r]||{},this._presence[r].handlers=this._presence[r].handlers||[],this._presence[r].handlers.push(u),this._notifyPresenceSub(r,u),()=>{var d,h,p;this._presence[r].handlers=(p=(h=(d=this._presence[r])===null||d===void 0?void 0:d.handlers)===null||h===void 0?void 0:h.filter(y=>y!==u))!==null&&p!==void 0?p:[],l()}}_notifyPresenceSubs(t){var r,i;(i=(r=this._presence[t])===null||r===void 0?void 0:r.handlers)===null||i===void 0||i.forEach(s=>{this._notifyPresenceSub(t,s)})}_notifyPresenceSub(t,r){const i=this.getPresence("",t,r);i&&(r.prev&&!UO(i,r.prev)||(r.prev=i,r.cb(i)))}_patchPresencePeers(t,r){var i,s,l;const u=((s=(i=this._presence[t])===null||i===void 0?void 0:i.result)===null||s===void 0?void 0:s.peers)||{};let d=Object.fromEntries(Object.entries(u).map(([p,y])=>[p,{data:y}]));(l=this._presence[t])===null||l===void 0||l.result;const h=Zp(d,p=>{for(let[y,g,b]of r)switch(g){case"+":CM(p,y,b);break;case"r":Jw(p,y,b);break;case"-":O2(p,y);break}delete p[this._sessionId]});this._setPresencePeers(t,h)}_setPresencePeers(t,r){const i=Object.assign({},r);delete i[this._sessionId];const s=Object.fromEntries(Object.entries(i).map(([l,u])=>[l,u.data]));this._presence=Zp(this._presence,l=>{Jw(l,[t,"result","peers"],s)})}publishTopic({roomType:t,roomId:r,topic:i,data:s}){var l;const u=this._rooms[r];if(u){if(!u.isConnected){this._broadcastQueue[r]=(l=this._broadcastQueue[r])!==null&&l!==void 0?l:[],this._broadcastQueue[r].push({topic:i,roomType:t,data:s});return}this._tryBroadcast(r,t,i,s)}}_tryBroadcast(t,r,i,s){this._trySendAuthed(lt(),{op:"client-broadcast","room-id":t,roomType:r,topic:i,data:s})}subscribeTopic(t,r,i){const s=this.joinRoom(t);return this._broadcastSubs[t]=this._broadcastSubs[t]||{},this._broadcastSubs[t][r]=this._broadcastSubs[t][r]||[],this._broadcastSubs[t][r].push(i),this._presence[t]=this._presence[t]||{},()=>{this._broadcastSubs[t][r]=this._broadcastSubs[t][r].filter(l=>l!==i),this._broadcastSubs[t][r].length||delete this._broadcastSubs[t][r],s()}}_notifyBroadcastSubs(t,r,i){var s,l,u;(u=(l=(s=this._broadcastSubs)===null||s===void 0?void 0:s[t])===null||l===void 0?void 0:l[r])===null||u===void 0||u.forEach(d=>{var h,p,y,g,b,w;const S=(h=i.data)===null||h===void 0?void 0:h.data,T=i.data["peer-id"]===this._sessionId?(y=(p=this._presence[t])===null||p===void 0?void 0:p.result)===null||y===void 0?void 0:y.user:(w=(b=(g=this._presence[t])===null||g===void 0?void 0:g.result)===null||b===void 0?void 0:b.peers)===null||w===void 0?void 0:w[i.data["peer-id"]];return d(S,T)})}uploadFile(t,r,i){return Nt(this,void 0,void 0,function*(){var s;const l=yield this.getCurrentUser(),u=(s=l==null?void 0:l.user)===null||s===void 0?void 0:s.refresh_token;return OO(Object.assign(Object.assign({},i),{apiURI:this.config.apiURI,appId:this.config.appId,path:t,file:r,refreshToken:u}))})}deleteFile(t){return Nt(this,void 0,void 0,function*(){var r;const i=yield this.getCurrentUser(),s=(r=i==null?void 0:i.user)===null||r===void 0?void 0:r.refresh_token;return yield AO({apiURI:this.config.apiURI,appId:this.config.appId,path:t,refreshToken:s})})}upload(t,r){return Nt(this,void 0,void 0,function*(){var i;const s=yield this.getCurrentUser(),l=(i=s==null?void 0:s.user)===null||i===void 0?void 0:i.refresh_token,u=t||r.name,d=yield RO({apiURI:this.config.apiURI,appId:this.config.appId,fileName:u,refreshToken:l});return yield zO(d,r)})}getDownloadUrl(t){return Nt(this,void 0,void 0,function*(){var r;const i=yield this.getCurrentUser(),s=(r=i==null?void 0:i.user)===null||r===void 0?void 0:r.refresh_token;return yield DO({apiURI:this.config.apiURI,appId:this.config.appId,path:t,refreshToken:s})})}}class Pn{constructor(t,r,i,s={indexed:!1,unique:!1}){this.valueType=t,this.required=r,this.isIndexed=i,this.config=s,this.metadata={}}clientRequired(){return new Pn(this.valueType,!1,this.isIndexed,this.config)}optional(){return new Pn(this.valueType,!1,this.isIndexed,this.config)}unique(){return new Pn(this.valueType,this.required,this.isIndexed,Object.assign(Object.assign({},this.config),{unique:!0}))}indexed(){return new Pn(this.valueType,this.required,!0,Object.assign(Object.assign({},this.config),{indexed:!0}))}}class rd{constructor(t,r){this.attrs=t,this.links=r}asType(){return new rd(this.attrs,this.links)}}class ad{constructor(t,r,i){this.entities=t,this.links=r,this.rooms=i}withRoomSchema(){return new ad(this.entities,this.links,{})}}function VO(e,t){return new ad(K2(e,t),t,void 0)}function QO(e){return new rd(e,{})}function WO(){return new Pn("string",!0,!1)}function ZO(){return new Pn("number",!0,!1)}function KO(){return new Pn("boolean",!0,!1)}function JO(){return new Pn("date",!0,!1)}function eA(){return new Pn("json",!0,!1)}function tA(){return new Pn("json",!0,!1)}function K2(e,t){var r,i,s,l;const u={fwd:{},rev:{}};for(const h of Object.values(t))(r=u.fwd)[i=h.forward.on]||(r[i]={}),(s=u.rev)[l=h.reverse.on]||(s[l]={}),u.fwd[h.forward.on][h.forward.label]={entityName:h.reverse.on,cardinality:h.forward.has},u.rev[h.reverse.on][h.reverse.label]={entityName:h.forward.on,cardinality:h.reverse.has};return Object.fromEntries(Object.entries(e).map(([h,p])=>[h,new rd(p.attrs,Object.assign(Object.assign({},u.fwd[h]),u.rev[h]))]))}function nA({entities:e,links:t,rooms:r}){const i=t??{},s=r??{};return new ad(K2(e,i),i,s)}const tt={graph:VO,schema:nA,entity:QO,string:WO,number:ZO,boolean:KO,date:JO,json:eA,any:tA};let tu;function rA(e,t){tu==null||tu.dispose();const r=cA(t),i=oA(t,d),s=iA(aA(e));function l(y){var g;y.source===s.element.contentWindow&&((g=y.data)===null||g===void 0?void 0:g.type)==="close"&&r.isVisible()&&d()}function u(y){const g=y.shiftKey&&y.ctrlKey&&y.key==="0",b=y.key==="Escape"||y.key==="Esc";(g||b&&r.isVisible())&&d()}function d(){r.isVisible()?r.element.style.display="none":(r.element.style.display="block",r.element.contains(s.element)||r.element.appendChild(s.element))}function h(){r.element.remove(),i.element.remove(),removeEventListener("keydown",u),removeEventListener("message",l)}function p(){document.body.appendChild(r.element),document.body.appendChild(i.element),addEventListener("keydown",u),addEventListener("message",l),tu={dispose:h}}return p()}function aA(e){return`${pg||Q2?"http://localhost:3000":"https://instantdb.com"}/_devtool?appId=${e}`}function iA(e){const t=document.createElement("iframe");return t.src=e,t.className="instant-devtool-iframe",Object.assign(t.style,{width:"100%",height:"100%",backgroundColor:"white",border:"none"}),{element:t}}function oA(e,t){const r=`
    <svg width="32" height="32" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" fill="black"/>
      <rect x="97.0973" y="91.3297" width="140" height="330" fill="white"/>
    </svg>
  `,i=document.createElement("button");return i.innerHTML=r,i.className="instant-devtool-toggler",Object.assign(i.style,Object.assign(Object.assign({position:"fixed"},sA(e.position)),{height:"32px",width:"32px",display:"flex",alignItems:"center",justifyContent:"center",zIndex:"9010",padding:"0",margin:"0",border:"none",cursor:"pointer"})),i.addEventListener("click",t),{element:i}}function sA(e){switch(e){case"bottom-left":return{bottom:"24px",left:"24px"};case"bottom-right":return{bottom:"24px",right:"24px"};case"top-right":return{top:"24px",right:"24px"};case"top-left":return{top:"24px",left:"24px"}}}function lA(e){switch(e){case"bottom-left":return{bottom:"24px",right:"24px",left:"60px",top:"72px"};case"bottom-right":return{bottom:"24px",left:"24px",right:"60px",top:"72px"};case"top-right":return{top:"24px",left:"24px",right:"60px",bottom:"72px"};case"top-left":return{top:"24px",right:"24px",left:"60px",bottom:"72px"}}}function cA(e){const t=document.createElement("div");Object.assign(t.style,Object.assign(Object.assign({position:"fixed"},lA(e.position)),{display:"block",borderRadius:"4px",border:"1px #ccc solid",boxShadow:"0px 0px 8px #00000044",backgroundColor:"#eee",zIndex:"999990"})),t.style.display="none",t.className="instant-devtool-container";function r(){return t.style.display!=="none"}return{element:t,isVisible:r}}const uA={apiURI:"https://api.instantdb.com",websocketURI:"wss://api.instantdb.com/runtime/session"};function dA(){var e;return globalThis.__instantDbSchemaHashStore=(e=globalThis.__instantDbSchemaHashStore)!==null&&e!==void 0?e:new WeakMap,globalThis.__instantDbSchemaHashStore}function fA(){var e;return globalThis.__instantDbStore=(e=globalThis.__instantDbStore)!==null&&e!==void 0?e:{},globalThis.__instantDbStore}function cm(e){const t=e.__adminToken;return e.appId+"_"+(e.websocketURI||"default_ws_uri")+"_"+(e.apiURI||"default_api_uri")+"_"+(t||"client_only")+"_"+e.useDateObjects}const um=fA(),lp=dA();class hA{constructor(t){this.db=t,this.sendMagicCode=r=>this.db.sendMagicCode(r),this.signInWithMagicCode=r=>this.db.signInWithMagicCode(r),this.signInWithToken=r=>this.db.signInWithCustomToken(r),this.createAuthorizationURL=r=>this.db.createAuthorizationURL(r),this.signInWithIdToken=r=>this.db.signInWithIdToken(r),this.exchangeOAuthCode=r=>this.db.exchangeCodeForToken(r),this.issuerURI=()=>this.db.issuerURI(),this.signOut=(r={invalidateToken:!0})=>this.db.signOut(r)}}class pA{constructor(t){this.db=t,this.uploadFile=(r,i,s={})=>this.db.uploadFile(r,i,s),this.delete=r=>this.db.deleteFile(r),this.upload=(r,i)=>this.db.upload(r,i),this.put=this.upload,this.getDownloadUrl=r=>this.db.getDownloadUrl(r)}}class mA{constructor(t){this.tx=Y2(),this._reactor=t,this.auth=new hA(this._reactor),this.storage=new pA(this._reactor)}transact(t){return this._reactor.pushTx(t)}getLocalId(t){return this._reactor.getLocalId(t)}subscribeQuery(t,r,i){return this._reactor.subscribeQuery(t,r,i)}subscribeAuth(t){return this._reactor.subscribeAuth(t)}getAuth(){return this._reactor.getAuth()}subscribeConnectionStatus(t){return this._reactor.subscribeConnectionStatus(t)}joinRoom(t="_defaultRoomType",r="_defaultRoomId",i){return{leaveRoom:this._reactor.joinRoom(r,i==null?void 0:i.initialPresence),subscribeTopic:(l,u)=>this._reactor.subscribeTopic(r,l,u),subscribePresence:(l,u)=>this._reactor.subscribePresence(t,r,l,u),publishTopic:(l,u)=>this._reactor.publishTopic({roomType:t,roomId:r,topic:l,data:u}),publishPresence:l=>this._reactor.publishPresence(t,r,l),getPresence:l=>this._reactor.getPresence(t,r,l)}}shutdown(){delete um[cm(this._reactor.config)],this._reactor.shutdown()}queryOnce(t,r){return this._reactor.queryOnce(t,r)}}function yx(e){if(!e)return"0";if(lp.get(e))return lp.get(e);const t=hn(e);return lp.set(e,t),t}function gA(e,t){return yx(e._reactor.config.schema)!==yx(t)}function vA(e,t,r,i){const s=um[cm(e)];if(s)return gA(s,e.schema)&&s._reactor.updateSchema(e.schema),s;const l=new GO(Object.assign(Object.assign(Object.assign({},uA),e),{cardinalityInference:!!e.schema}),t||F2,r||G2,Object.assign(Object.assign({},i||{}),{"@instantdb/core":Z2})),u=new mA(l);return um[cm(e)]=u,yA(e.appId,e.devtool),u}function yA(e,t){if(typeof window>"u"||typeof window.location>"u"||typeof document>"u"||typeof t=="boolean"&&!t)return;const r=Object.assign({position:"bottom-right",allowedHosts:["localhost"]},typeof t=="object"?t:{});r.allowedHosts.includes(window.location.hostname)&&rA(e,r)}const bA=tt.schema({entities:{party:tt.entity({name:tt.string().unique().indexed(),host:tt.string().optional(),gameState:tt.any().optional(),gameParams:tt.any().optional(),status:tt.string()}),players:tt.entity({localId:tt.string().unique().indexed(),name:tt.string(),avatar:tt.string()}),paintings:tt.entity({canvas:tt.any(),playerId:tt.string(),word:tt.string()}),words:tt.entity({word:tt.string().unique().indexed(),lang:tt.string(),category:tt.string().optional(),hidden:tt.boolean().optional()})},links:{partyPlayers:{forward:{on:"party",has:"many",label:"players"},reverse:{on:"players",has:"many",label:"parties"}}},rooms:{party:{presence:tt.entity({user:tt.any().optional()}),topics:{currentCanvas:tt.entity({currentLineTopic:tt.any().optional()})}}}}),wA=bA,xA="59599101-16e7-493b-8644-ccb75b6cb032",ue=vA({appId:xA,schema:wA});function bx(e){return e[Math.floor(Math.random()*e.length)]}function _A(){return bx(TA)+" "+bx(SA)}const SA=["cat","dog","sun","sky","tree","bird","fish","hand","foot","ball","star","book","car","bed","toy","hat","cup","box","map","pen"],TA=["big","hot","red","old","wet","new","sad","tall","cold","fat","dry","fun","shy","blue","cute","kind","dark","loud","warm","fast"],kA={linear:e=>e},EA={simulatePressure:!1,smoothing:1,thinning:.1,streamline:0,easing:kA.linear},qs=[3,8,15,20,25],J2=["#111111","#34495e","#f6eee2","#ffffff","#8b4513","#fa3224","#ffa729","#ffd129","#2ecc71","#3498db","#9b59b6","#ff69b4"],dm={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e*e:-1+(4-2*e)*e,easeInCubic:e=>e*e*e,easeOutCubic:e=>--e*e*e+1,easeInOutCubic:e=>e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1- --e*e*e*e,easeInOutQuart:e=>e<.5?8*e*e*e*e:1-8*--e*e*e*e,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1+--e*e*e*e*e,easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>e<=0?0:Math.pow(2,10*e-10),easeOutExpo:e=>e>=1?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>e<=0?0:e>=1?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2};class V{constructor(t=0,r=0,i=1){this.x=t,this.y=r,this.z=i}get pressure(){return this.z}set(t=this.x,r=this.y,i=this.z){return this.x=t,this.y=r,this.z=i,this}setTo({x:t=0,y:r=0,z:i=1}){return this.x=t,this.y=r,this.z=i,this}rot(t){if(t===0)return this;const{x:r,y:i}=this,s=Math.sin(t),l=Math.cos(t);return this.x=r*l-i*s,this.y=r*s+i*l,this}rotWith(t,r){if(r===0)return this;const i=this.x-t.x,s=this.y-t.y,l=Math.sin(r),u=Math.cos(r);return this.x=t.x+(i*u-s*l),this.y=t.y+(i*l+s*u),this}clone(){const{x:t,y:r,z:i}=this;return new V(t,r,i)}sub(t){return this.x-=t.x,this.y-=t.y,this}subXY(t,r){return this.x-=t,this.y-=r,this}subScalar(t){return this.x-=t,this.y-=t,this}add(t){return this.x+=t.x,this.y+=t.y,this}addXY(t,r){return this.x+=t,this.y+=r,this}addScalar(t){return this.x+=t,this.y+=t,this}clamp(t,r){return this.x=Math.max(this.x,t),this.y=Math.max(this.y,t),r!==void 0&&(this.x=Math.min(this.x,r),this.y=Math.min(this.y,r)),this}div(t){return this.x/=t,this.y/=t,this}divV(t){return this.x/=t.x,this.y/=t.y,this}mul(t){return this.x*=t,this.y*=t,this}mulV(t){return this.x*=t.x,this.y*=t.y,this}abs(){return this.x=Math.abs(this.x),this.y=Math.abs(this.y),this}nudge(t,r){const i=V.Tan(t,this);return this.add(i.mul(r))}neg(){return this.x*=-1,this.y*=-1,this}cross(t){return this.x=this.y*t.z-this.z*t.y,this.y=this.z*t.x-this.x*t.z,this}dpr(t){return V.Dpr(this,t)}cpr(t){return V.Cpr(this,t)}len2(){return V.Len2(this)}len(){return V.Len(this)}pry(t){return V.Pry(this,t)}per(){const{x:t,y:r}=this;return this.x=r,this.y=-t,this}uni(){const t=this.len();return t===0?this:(this.x/=t,this.y/=t,this)}tan(t){return this.sub(t).uni()}dist(t){return V.Dist(this,t)}distanceToLineSegment(t,r){return V.DistanceToLineSegment(t,r,this)}slope(t){return V.Slope(this,t)}snapToGrid(t){return this.x=Math.round(this.x/t)*t,this.y=Math.round(this.y/t)*t,this}angle(t){return V.Angle(this,t)}toAngle(){return V.ToAngle(this)}lrp(t,r){return this.x=this.x+(t.x-this.x)*r,this.y=this.y+(t.y-this.y)*r,this}equals(t){return V.Equals(this,t)}equalsXY(t,r){return V.EqualsXY(this,t,r)}norm(){return this.uni()}toFixed(){return this.x=Kc(this.x),this.y=Kc(this.y),this}toString(){return V.ToString(V.ToFixed(this))}toJson(){return V.ToJson(this)}toArray(){return V.ToArray(this)}static Add(t,r){return new V(t.x+r.x,t.y+r.y)}static AddXY(t,r,i){return new V(t.x+r,t.y+i)}static Sub(t,r){return new V(t.x-r.x,t.y-r.y)}static SubXY(t,r,i){return new V(t.x-r,t.y-i)}static AddScalar(t,r){return new V(t.x+r,t.y+r)}static SubScalar(t,r){return new V(t.x-r,t.y-r)}static Div(t,r){return new V(t.x/r,t.y/r)}static Mul(t,r){return new V(t.x*r,t.y*r)}static DivV(t,r){return new V(t.x/r.x,t.y/r.y)}static MulV(t,r){return new V(t.x*r.x,t.y*r.y)}static Neg(t){return new V(-t.x,-t.y)}static Per(t){return new V(t.y,-t.x)}static Abs(t){return new V(Math.abs(t.x),Math.abs(t.y))}static Dist(t,r){return((t.y-r.y)**2+(t.x-r.x)**2)**.5}static ManhattanDist(t,r){return Math.abs(t.x-r.x)+Math.abs(t.y-r.y)}static DistMin(t,r,i){return(t.x-r.x)*(t.x-r.x)+(t.y-r.y)*(t.y-r.y)<i**2}static Dist2(t,r){return(t.x-r.x)*(t.x-r.x)+(t.y-r.y)*(t.y-r.y)}static Dpr(t,r){return t.x*r.x+t.y*r.y}static Cross(t,r){return new V(t.y*r.z-t.z*r.y,t.z*r.x-t.x*r.z)}static Cpr(t,r){return t.x*r.y-r.x*t.y}static Len2(t){return t.x*t.x+t.y*t.y}static Len(t){return(t.x*t.x+t.y*t.y)**.5}static Pry(t,r){return V.Dpr(t,r)/V.Len(r)}static Uni(t){const r=V.Len(t);return new V(r===0?0:t.x/r,r===0?0:t.y/r)}static Tan(t,r){return V.Uni(V.Sub(t,r))}static Min(t,r){return new V(Math.min(t.x,r.x),Math.min(t.y,r.y))}static Max(t,r){return new V(Math.max(t.x,r.x),Math.max(t.y,r.y))}static From({x:t,y:r,z:i=1}){return new V(t,r,i)}static FromArray(t){return new V(t[0],t[1])}static Rot(t,r=0){const i=Math.sin(r),s=Math.cos(r);return new V(t.x*s-t.y*i,t.x*i+t.y*s)}static RotWith(t,r,i){const s=t.x-r.x,l=t.y-r.y,u=Math.sin(i),d=Math.cos(i);return new V(r.x+(s*d-l*u),r.y+(s*u+l*d))}static NearestPointOnLineThroughPoint(t,r,i){return V.Mul(r,V.Sub(i,t).pry(r)).add(t)}static NearestPointOnLineSegment(t,r,i,s=!0){if(V.Equals(t,i)||V.Equals(r,i))return V.From(i);const l=V.Tan(r,t),u=V.Add(t,V.Mul(l,V.Sub(i,t).pry(l)));if(s){if(u.x<Math.min(t.x,r.x))return V.Cast(t.x<r.x?t:r);if(u.x>Math.max(t.x,r.x))return V.Cast(t.x>r.x?t:r);if(u.y<Math.min(t.y,r.y))return V.Cast(t.y<r.y?t:r);if(u.y>Math.max(t.y,r.y))return V.Cast(t.y>r.y?t:r)}return u}static DistanceToLineThroughPoint(t,r,i){return V.Dist(i,V.NearestPointOnLineThroughPoint(t,r,i))}static DistanceToLineSegment(t,r,i,s=!0){return V.Dist(i,V.NearestPointOnLineSegment(t,r,i,s))}static Snap(t,r=1){return new V(Math.round(t.x/r)*r,Math.round(t.y/r)*r)}static Cast(t){return t instanceof V?t:V.From(t)}static Slope(t,r){return t.x===r.y?NaN:(t.y-r.y)/(t.x-r.x)}static IsNaN(t){return isNaN(t.x)||isNaN(t.y)}static Angle(t,r){return Math.atan2(r.y-t.y,r.x-t.x)}static AngleBetween(t,r){const i=t.x*r.x+t.y*r.y,s=Math.sqrt((Math.pow(t.x,2)+Math.pow(t.y,2))*(Math.pow(r.x,2)+Math.pow(r.y,2)));return(t.x*r.y-t.y*r.x<0?-1:1)*Math.acos(uM(i/s,-1,1))}static Lrp(t,r,i){return V.Sub(r,t).mul(i).add(t)}static Med(t,r){return new V((t.x+r.x)/2,(t.y+r.y)/2)}static Equals(t,r){return Math.abs(t.x-r.x)<1e-4&&Math.abs(t.y-r.y)<1e-4}static EqualsXY(t,r,i){return t.x===r&&t.y===i}static Clockwise(t,r,i){return(i.x-t.x)*(r.y-t.y)-(r.x-t.x)*(i.y-t.y)<0}static Rescale(t,r){const i=V.Len(t);return new V(r*t.x/i,r*t.y/i)}static ScaleWithOrigin(t,r,i){return V.Sub(t,i).mul(r).add(i)}static ToFixed(t){return new V(Kc(t.x),Kc(t.y))}static ToInt(t){return new V(parseInt(t.x.toFixed(0)),parseInt(t.y.toFixed(0)),parseInt((t.z??0).toFixed(0)))}static ToCss(t){return`${t.x},${t.y}`}static Nudge(t,r,i){return V.Add(t,V.Tan(r,t).mul(i))}static ToString(t){return`${t.x}, ${t.y}`}static ToAngle(t){let r=Math.atan2(t.y,t.x);return r<0&&(r+=Math.PI*2),r}static FromAngle(t,r=1){return new V(Math.cos(t)*r,Math.sin(t)*r)}static ToArray(t){return[t.x,t.y,t.z]}static ToJson(t){const{x:r,y:i,z:s}=t;return{x:r,y:i,z:s}}static Average(t){const r=t.length,i=new V(0,0);if(r===0)return i;for(let s=0;s<r;s++)i.add(t[s]);return i.div(r)}static Clamp(t,r,i){return i===void 0?new V(Math.min(Math.max(t.x,r)),Math.min(Math.max(t.y,r))):new V(Math.min(Math.max(t.x,r),i),Math.min(Math.max(t.y,r),i))}static PointsBetween(t,r,i=6){const s=[];for(let l=0;l<i;l++){const u=dm.easeInQuad(l/(i-1)),d=V.Lrp(t,r,u);d.z=Math.min(1,.5+Math.abs(.5-CA(u))*.65),s.push(d)}return s}static SnapToGrid(t,r=8){return new V(Math.round(t.x/r)*r,Math.round(t.y/r)*r)}}const CA=e=>e<.5?2*e*e:-1+(4-2*e)*e,{PI:MA}=Math,cp=MA+1e-4;function NA(e,t={}){const{size:r=16,smoothing:i=.5}=t;if(e.length===0||r<=0)return{left:[],right:[]};const s=e[0],l=e[e.length-1],u=l.runningLength,d=Math.pow(r*i,2),h=[],p=[];let y=e[0].vector,g=e[0].point,b=g,w=g,S=b,T=!1,k;for(let _=0;_<e.length;_++){k=e[_];const{point:M,vector:O}=e[_],L=k.vector.dpr(y),j=(_<e.length-1?e[_+1]:e[_]).vector,X=_<e.length-1?j.dpr(k.vector):1,G=L<0&&!T,ee=X!==null&&X<.2;if(G||ee){if(X>-.62&&u-k.runningLength>k.radius){const me=y.clone().mul(k.radius);y.clone().cpr(j)<0?(w=V.Add(M,me),S=V.Sub(M,me)):(w=V.Sub(M,me),S=V.Add(M,me)),h.push(w),p.push(S)}else{const me=y.clone().mul(k.radius).per(),de=V.Sub(k.input,me);for(let ie=1/13,ze=0;ze<1;ze+=ie)w=V.RotWith(de,k.input,cp*ze),h.push(w),S=V.RotWith(de,k.input,cp+cp*-ze),p.push(S)}g=w,b=S,ee&&(T=!0);continue}if(T=!1,k===s||k===l){const me=V.Per(O).mul(k.radius);h.push(V.Sub(M,me)),p.push(V.Add(M,me));continue}const ne=V.Lrp(j,O,X).per().mul(k.radius);w=V.Sub(M,ne),(_<=1||V.Dist2(g,w)>d)&&(h.push(w),g=w),S=V.Add(M,ne),(_<=1||V.Dist2(b,S)>d)&&(p.push(S),b=S),y=O}return{left:h,right:p}}const OA=.025,AA=.01;function RA(e,t={}){var k;const{streamline:r=.5,size:i=16,simulatePressure:s=!1}=t;if(e.length===0)return[];const l=.15+(1-r)*.85;let u=e.map(V.From),d=0;if(!s){let _=u[0];for(;_&&!(_.z>=OA);)u.shift(),_=u[0]}if(!s){let _=u[u.length-1];for(;_&&!(_.z>=AA);)u.pop(),_=u[u.length-1]}if(u.length===0)return[{point:V.From(e[0]),input:V.From(e[0]),pressure:s?.5:.15,vector:new V(1,1),distance:0,runningLength:0,radius:1}];let h=u[1];for(;h&&!(V.Dist2(h,u[0])>(i/3)**2);)u[0].z=Math.max(u[0].z,h.z),u.splice(1,1),h=u[1];const p=u.pop();for(h=u[u.length-1];h&&!(V.Dist2(h,p)>(i/3)**2);)u.pop(),h=u[u.length-1],d++;u.push(p);const y=t.last||!t.simulatePressure||u.length>1&&V.Dist2(u[u.length-1],u[u.length-2])<i**2||d>0;if(u.length===2&&t.simulatePressure){const _=u[1];u=u.slice(0,-1);for(let M=1;M<5;M++){const O=V.Lrp(u[0],_,M/4);O.z=(u[0].z+(_.z-u[0].z))*M/4,u.push(O)}}const g=[{point:u[0],input:u[0],pressure:s?.5:u[0].z,vector:new V(1,1),distance:0,runningLength:0,radius:1}];let b=0,w=g[0],S,T;y&&r>0&&u.push(u[u.length-1].clone());for(let _=1,M=u.length;_<M;_++)S=!l||t.last&&_===M-1?u[_].clone():u[_].clone().lrp(w.point,1-l),!w.point.equals(S)&&(T=V.Dist(S,w.point),b+=T,!(_<4&&b<i)&&(w={input:u[_],point:S,pressure:s?.5:u[_].z,vector:V.Sub(w.point,S).uni(),distance:T,runningLength:b,radius:1},g.push(w)));if((k=g[1])!=null&&k.vector&&(g[0].vector=g[1].vector.clone()),b<1){const _=Math.max(.5,...g.map(M=>M.pressure));g.forEach(M=>M.pressure=_)}return g}const{min:ha}=Math,up=.275;function zA(e,t){const{size:r=16,thinning:i=.5,simulatePressure:s=!0,easing:l=k=>k,start:u={},end:d={}}=t,{easing:h=dm.easeOutQuad}=u,{easing:p=dm.easeOutCubic}=d,y=e[e.length-1].runningLength;let g,b=e[0].pressure,w;if(!s&&y<r){const k=e.reduce((_,M)=>Math.max(_,M.pressure),.5);return e.forEach(_=>{_.pressure=k,_.radius=r*l(.5-i*(.5-_.pressure))}),e}else{let k;for(let _=0,M=e.length;_<M&&(w=e[_],!(w.runningLength>r*5));_++){const O=ha(1,w.distance/r);if(s){const L=ha(1,1-O);k=ha(1,b+(L-b)*(O*up))}else k=ha(1,b+(w.pressure-b)*.5);b=b+(k-b)*.5}for(let _=0;_<e.length;_++){if(w=e[_],i){let{pressure:M}=w;const O=ha(1,w.distance/r);if(s){const L=ha(1,1-O);M=ha(1,b+(L-b)*(O*up))}else M=ha(1,b+(M-b)*(O*up));w.radius=r*l(.5-i*(.5-M)),b=M}else w.radius=r/2;g===void 0&&(g=w.radius)}}const S=u.taper===!1?0:u.taper===!0?Math.max(r,y):u.taper,T=d.taper===!1?0:d.taper===!0?Math.max(r,y):d.taper;if(S||T)for(let k=0;k<e.length;k++){w=e[k];const{runningLength:_}=w,M=_<S?h(_/S):1,O=y-_<T?p((y-_)/T):1;w.radius=Math.max(.01,w.radius*Math.min(M,O))}return e}function wx(e,t={}){const{start:r={},end:i={}}=t,{cap:s=!0}=r,{cap:l=!0}=i;np(!r.taper&&!i.taper,"cap taper not supported here"),np(!r.easing&&!i.easing,"cap easing not supported here"),np(s&&l,"cap must be true");const u=RA(e,t);zA(u,t);const d=DA(u);let h="";for(const p of d)h+=UA(p,t);return h}function DA(e){if(e.length<=2)return[e];const t=[];let r=[e[0]],i=V.Sub(e[1].point,e[0].point).uni(),s,l,u,d,h;for(let p=1,y=e.length;p<y-1;p++){if(u=e[p-1],d=e[p],h=e[p+1],s=V.Sub(h.point,d.point).uni(),l=V.Dpr(i,s),i=s,l<-.8){const g={...d,point:d.input};r.push(g),t.push(dp(r)),r=[g];continue}if(r.push(d),!(l>.7)&&(V.Dist2(u.point,d.point)+V.Dist2(d.point,h.point))/((u.radius+d.radius+h.radius)/3)**2<1.5){r.push(d),t.push(dp(r)),r=[d];continue}}return r.push(e[e.length-1]),t.push(dp(r)),t}function dp(e){const t=e[0];let r;for(;e.length>2&&(r=e[1],V.Dist2(t.point,r.point)<((t.radius+r.radius)/2*.5)**2);)e.splice(1,1);const i=e[e.length-1];let s;for(;e.length>2&&(s=e[e.length-2],V.Dist2(i.point,s.point)<((i.radius+s.radius)/2*.5)**2);)e.splice(e.length-2,1);return e.length>1&&(e[0]={...e[0],vector:V.Sub(e[0].point,e[1].point).uni()},e[e.length-1]={...e[e.length-1],vector:V.Sub(e[e.length-2].point,e[e.length-1].point).uni()}),e}function jA(e,t,r){return"M "+e+" "+t+" m -"+r+", 0 a "+r+","+r+" 0 1,1 "+r*2+",0 a "+r+","+r+" 0 1,1 -"+r*2+",0"}function UA(e,t={}){if(e.length===0)return"";if(e.length===1)return jA(e[0].point.x,e[0].point.y,e[0].radius);const{left:r,right:i}=NA(e,t);i.reverse();let s=`M${Rs(r[0])}T`;for(let l=1;l<r.length;l++)s+=Gw(r[l-1],r[l]);{const l=e[e.length-1],u=l.radius,d=l.vector.clone().per().neg(),h=V.Add(l.point,V.Mul(d,u)),p=V.Add(l.point,V.Mul(d,-u));s+=`${Rs(h)}A${ga(u)},${ga(u)} 0 0 1 ${Rs(p)}T`}for(let l=1;l<i.length;l++)s+=Gw(i[l-1],i[l]);{const l=e[0],u=l.radius,d=l.vector.clone().per(),h=V.Add(l.point,V.Mul(d,u)),p=V.Add(l.point,V.Mul(d,-u));s+=`${Rs(h)}A${ga(u)},${ga(u)} 0 0 1 ${Rs(p)}Z`}return s}const _o={prepare:"prepare",finished:"finished"};function LA(e,t){for(let r=e.length-1;r>=0;r--)if(t(e[r]))return{i:r};return null}function e_(){return{gameState:{drawing:""},name:"",host:"",gameParams:{rounds:5,wordSuggestions:3},status:_o.prepare,players:[],id:""}}function $A(e,t){const r=t.filter(i=>i.type==="guess"||i.type==="new-word"||i.type==="choosing-word");return r.length!==e.length?r:e}function t_(e){const t=[];return e.forEach(r=>{r.type==="line"?t.push(r):r.type==="undo"&&t.pop()}),t}function HA({$renderMode:e,$allRoomEvents:t,$currentLine:r}){const i=Ie(),s=Co(i,EA),l=Ie(),u=t.map(g=>{const b=LA(g,S=>S.type==="new-word");if(!b)return[];const w=[];return g.slice(b.i).forEach(S=>{S.type==="line"?w.push(S):S.type==="undo"&&w.pop()}),w}),d=Gn(u,e,s,(g,b,w)=>{const S=[];return g.forEach(T=>{const k=wx(T.dots.map(_=>new V(_[0],_[1])),{size:T.width});S.push({d:k,color:T.color})}),S}),h=Gn(r,e,s,(g,b,w)=>{if(g.dots.length===0)return null;let S=performance.now();const T=wx(g.dots.map(_=>new V(_[0],_[1])),{size:g.width});let k=performance.now()-S;return{d:T,color:g.color,perf:{newTime:k}}}),p=u,y=Gn(u,g=>{const b=[];return g.forEach((w,S)=>{const k=w.dots.map(([_,M])=>`${_},${M}`).join(" ");b.push({points:k,color:w.color,strokeWidth:w.width})}),b});return l.watch(()=>{console.log("db.transact undoClicked"),ue.transact(ue.tx.roomEvent[lt()].create({it:{type:"undo"}}).link({party:gg.getState()}))}),{$svgCanvasPaths:d,$svgCurrentLine:h,$rawPath:p,$polylinePaths:y,undoClicked:l,$smoothConf:s,setSmoothConf:i}}function IA(e,t){const r=Bt(""),i=Bt({dots:[],color:J2[1],width:qs[1]}),s=Ie(),l=Ie(),u=Ie(),d=Ie(),h=Bt([]),p=h.map(T=>T.length),y=Ie(),g=Ie();r.on(y,(T,k)=>k),h.on(u,T=>{const k=Date.now(),_=k-1e3,M=T.filter(O=>O>_);return M.push(k),M}),i.on(s,(T,k)=>({...T,...k})).on(l,(T,k)=>({...T,dots:[k]})).on(u,(T,k)=>({...T,dots:[...T.dots,k]})).on(g,T=>({...T,dots:[]})),vl({source:i,clock:d,fn:(T,k)=>({dots:[...T.dots,k],color:T.color,width:T.width}),target:g}),Gn([i,t,r]).watch(([T,k,_])=>{});const b=Ie(),w=Ie(),S=Bt({});return S.on(w,(T,k)=>k),eg(e,T=>{if(!T)return()=>{};const k=ue.joinRoom("drawing",T),_=i.watch(O=>{t.getState()&&k.publishTopic("sendCurrentLine",{currentLineTopic:O})}),M=k.subscribeTopic("sendCurrentLine",O=>{t.getState()||(console.log("currentLineChanged",O.currentLineTopic),s(O.currentLineTopic))});return()=>{_(),M(),k.leaveRoom()}}),g.watch(T=>{console.log("db.transact addLine"),ue.transact(ue.tx.roomEvent[lt()].create({it:{type:"line",dots:T.dots,color:T.color,width:T.width}}).link({party:e.getState()}))}),{$currentLine:i,currentLineChanged:s,addLine:g,lineStarted:l,lineExtended:u,lineEnded:d,$lineExtendedCount:p,$topic:S,myTopic:b}}async function mg(e){const t=await ue.getLocalId("guest");return await ue.transact([ue.tx.players[t].update({name:e,localId:t,avatar:""})])}async function qA(e){const{data:{party:t}}=await ue.queryOnce({party:{$:{where:{status:_o.prepare,name:e}}}});return t&&t[0]||null}async function BA(e){const{data:{party:t}}=await ue.queryOnce({party:{$:{where:{id:e}}}});return t[0]||null}async function YA(e){const t=await ue.getLocalId("guest"),r=await BA(e);if(!r)throw new Error(`Party not found '${e}'`);if(r.status!==_o.prepare)throw new Error(`Can't join to party in '${r.status}' status`);return await ue.transact([ue.tx.party[e].link({players:t})])}async function PA(e,t){return await ue.transact([ue.tx.party[e].unlink({players:t})])}async function XA(e){const t=await ue.getLocalId("guest");return await ue.transact([ue.tx.party[e].unlink({players:t})])}async function FA(e){return await ue.transact([ue.tx.party[e].update({status:_o.finished})])}async function fp(e,t){return await ue.transact([ue.tx.party[e].update({gameParams:t})])}async function GA(e){var l;const t=lt(),r=await ue.getLocalId("guest"),{players:i}=await ue.queryOnce({players:{$:{where:{id:r}},parties:{$:{where:{status:_o.prepare}}}}}).then(u=>u.data);if((l=i[0])!=null&&l.parties&&i[0].parties.length>0)throw new Error("Player already has a party in prepare status. Please finish or leave that party first.");return await ue.transact([ue.tx.party[t].create({gameState:{drawing:""},name:e,host:r,gameParams:{rounds:5,wordSuggestions:3},status:_o.prepare}).link({players:r})])}const n_=Ie(),Zn=Co(n_,"");Zn.watch(e=>console.log("$localId",e));ue.getLocalId("guest").then(e=>n_(e));l_();const VA=Ie(),So=Co(VA,e_()),r_=Ie(),gg=Co(r_,sM),a_=Ie(),vg=Co(a_,{id:"",localId:"",name:"",avatar:""}),id=Bt([]),fm=Bt([]);vl({source:fm,clock:id,fn:(e,t)=>$A(e,t),target:fm});const Mo=Gn(id,e=>fM(e,["foo"],{lang:"RU",rounds:1e3,suggestions:3,canvasSize:600},"foo|bar|baz")),QA=Mo.map(e=>e[1]),yg=Gn(Mo,Zn,([{state:e}],t)=>e.state==="drawing"&&e.playerId===t?e.word:""),WA=Gn(Mo,Zn,([{state:e}],t)=>e.state==="drawing"&&e.revealed.find(r=>r.playerId===t)?e.word:""),ZA=Gn(Mo,Zn,([{state:e}],t)=>e.state==="drawing"?e.word.replace(/\S/g,"_"):null),KA=Gn(Mo,Zn,([{state:e}],t)=>e.state==="choosing-word"?e.words.split("|"):null),{currentLineChanged:xx,$currentLine:hm,addLine:sz,lineStarted:JA,lineExtended:e6,lineEnded:t6,$lineExtendedCount:n6,..._x}=IA(gg,yg),bg=Bt("tldraw"),{undoClicked:r6,$svgCanvasPaths:a6,$rawPath:i6,$polylinePaths:o6,$svgCurrentLine:i_}=HA({$allRoomEvents:id,$renderMode:bg,$currentLine:hm}),o_=Bt(!1),s6=Ie(),l6=Ie(),s_=Ie(),c6=Ie(),u6=Ie(),d6=Ie(),Sx=Ie(),f6=Ie();vl({source:[Zn,So],clock:s_,fn:([e,t])=>({...t,gameState:{...t.gameState,drawing:e}}),target:So});id.on(f6,(e,{history:t})=>t);bg.on(s6,(e,t)=>t);o_.on(l6,(e,t)=>t);vl({source:So,clock:s_}).watch(e=>{ue.transact(ue.tx.party[e.id].update({gameState:{...e.gameState,drawing:e.gameState.drawing}}))});async function h6(e){const t=await ue.getLocalId("guest");return await ue.transact([ue.tx.players[t].link({parties:e})])}async function p6(e){return await ue.transact([ue.tx.party[e].delete()])}async function m6(e){const t=await ue.getLocalId("guest");return await ue.transact([ue.tx.players[t].unlink({parties:e})])}async function l_(e=3){if(e<0)throw new Error("Can't get user");const t=await ue.getLocalId("guest"),r=await ue.queryOnce({players:{$:{where:{id:t}}}}).then(s=>s.data.players[0]);if(r)return r;const i=_A();return await mg(i),l_(e-1)}eg(Zn,e=>e?ue.subscribeQuery({players:{$:{where:{id:e}}}},t=>{if(t.error&&console.error(t.error),t.data){const r=t.data.players[0];a_(r)}}):()=>{});async function g6(){throw new Error("Not implemented")}async function v6(){return(await ue.queryOnce({players:{}})).data.players}const y6="_container_1v1t6_1",b6="_header_1v1t6_12",w6="_title_1v1t6_21",x6="_content_1v1t6_29",_6="_footer_1v1t6_34",zs={container:y6,header:b6,title:w6,content:x6,footer:_6};function ba({children:e}){return R.jsxs("div",{className:zs.container,children:[R.jsx("header",{className:zs.header,children:R.jsx(io,{href:va(""),children:R.jsx("h1",{className:zs.title,children:"Drawinchi"})})}),R.jsx("main",{className:zs.content,children:e}),R.jsxs("footer",{className:zs.footer,children:[R.jsx(io,{href:va("all-rooms"),children:"Все комнаты"}),R.jsx(io,{href:va("words"),children:"Слова"}),R.jsx(io,{href:va("paintings"),children:"Картины"})]})]})}const S6="root_r6f0ecm";function pm({label:e,value:t,onChange:r,maxLen:i,type:s="text",placeholder:l}){return R.jsxs("div",{className:S6,children:[e&&R.jsx("label",{children:e}),R.jsx("input",{maxLength:i,type:s,value:t,onChange:u=>r(u.target.value),placeholder:l})]})}const T6="_form_1h2bc_1",k6="_roomCodeRow_1h2bc_9",E6="_joinButton_1h2bc_14",C6="_divider_1h2bc_26",Ds={form:T6,roomCodeRow:k6,joinButton:E6,divider:C6};async function M6(){var r,i;const e=await ue.getLocalId("guest"),{players:t}=await ue.queryOnce({players:{$:{where:{id:e}},parties:{$:{where:{status:"prepare"}}}}}).then(s=>s.data);return((i=(r=t[0])==null?void 0:r.parties)==null?void 0:i[0])||null}const c_=Bt(e_()),u_=Ie();c_.on(u_,(e,t)=>t);eg(Zn,e=>e?ue.subscribeQuery({party:{$:{where:{and:[{status:"prepare"},{"players.id":e}]}},players:{}}},t=>{var r;if(t.data){const i=(r=t.data.party)==null?void 0:r[0];if(i){u_(i);return}}console.warn("Something went wrong"),console.log(t)}):()=>{});const N6="root_r1cb9caz";function d_({children:e,onClick:t,className:r,type:i}){return R.jsx("button",{type:i||"button",className:`${N6} ${r||""}`,onClick:t,children:e})}function Tx(){const e=Ke(vg),[t,r]=Vm();return ce.useEffect(()=>{M6().then(i=>{i&&r(va("current-party"))}).catch(i=>{console.error(i)})},[]),e.id?R.jsx(ba,{children:R.jsx(O6,{})}):null}function O6(){const e=Ke(vg),[t,r]=ce.useState(""),[i,s]=ce.useState(e.name),[l,u]=ce.useState(cM().trim()),[d,h]=Vm(),p=async()=>{try{await GA(l)}catch(y){console.error("Failed to create party:",y)}};return R.jsxs("div",{className:Ds.form,children:[R.jsx(pm,{label:"Имя",value:i,onChange:s}),R.jsx("div",{className:Ds.field,children:R.jsxs("form",{onSubmit:y=>{y.preventDefault(),mg(i.trim()),qA(t).then(g=>{if(g)return YA(g.id).then(()=>{h(va("current-party"))})})},className:Ds.roomCodeRow,children:[R.jsx(pm,{label:"Комната",value:t,onChange:r}),R.jsx("button",{type:"submit",className:Ds.joinButton,children:"Войти"})]})}),R.jsx("div",{className:Ds.divider,children:R.jsx("span",{children:"или"})}),R.jsx(d_,{onClick:p,children:"Создать новую игру"})]})}const nu=window.devicePixelRatio||1;function f_(e){const t=e.getContext("2d");return e.width=Qn*nu,e.height=Qn*nu,t.scale(nu,nu),t}function hp(e,t){const r=t.getBoundingClientRect(),i=Qn/r.width,s="touches"in e?(e.touches[0]||e.changedTouches[0]).clientX:e.clientX,l="touches"in e?(e.touches[0]||e.changedTouches[0]).clientY:e.clientY;return{x:(s-r.left)*i,y:(l-r.top)*i}}function A6(e,t){t.forEach(r=>{const i=r.points.split(" ").map(s=>{const[l,u]=s.split(",").map(Number);return[l,u]});if(i.length>=2){e.strokeStyle=r.color,e.lineWidth=r.strokeWidth,e.lineCap="round",e.lineJoin="round",e.beginPath(),e.moveTo(i[0][0],i[0][1]);for(let s=1;s<i.length;s++)e.lineTo(i[s][0],i[s][1]);e.stroke()}})}const R6={margin:"0 auto",maxWidth:"500px",maxHeight:"100%",height:"auto",aspectRatio:"1 / 1",position:"relative",background:"#f6eee2",borderRadius:"8px",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.1)"},h_={position:"absolute",top:0,left:0,width:"100%",height:"100%",touchAction:"none",borderRadius:"8px",cursor:"crosshair"};function z6(){const e=ce.useRef(null),t=Ke(bg),r=Ke(o_),i=Ke(o6),s=Ke(a6);return ce.useEffect(()=>{const l=e.current,u=f_(l);u.clearRect(0,0,Qn,Qn),t==="polyline"?A6(u,i):s.forEach(d=>{u.fillStyle=d.color,u.fill(new Path2D(d.d))})},[i,s,t]),R.jsxs("div",{style:R6,children:[R.jsx("canvas",{ref:e,style:h_}),R.jsx(D6,{}),r&&R.jsx(j6,{})]})}const D6=ce.memo(()=>{const e=ce.useRef(null),[t,r]=ce.useState(!1),i=Ke(yg),s=Ke(i_);ce.useEffect(()=>{const h=e.current,p=f_(h);p.clearRect(0,0,Qn,Qn),s&&(p.fillStyle=s.color,p.fill(new Path2D(s.d)))},[s]);const l=ce.useCallback(h=>{if(!i)return;h.preventDefault();const{x:p,y}=hp(h,e.current);JA([p,y]),r(!0)},[i]),u=ce.useCallback(h=>{if(!i||!t)return;h.preventDefault();const{x:p,y}=hp(h,e.current);e6([p,y])},[i,t]),d=ce.useCallback(h=>{if(!i||!t)return;h.preventDefault();const{x:p,y}=hp(h,e.current);t6([p,y]),r(!1)},[i,t]);return R.jsx("canvas",{ref:e,onMouseDown:l,onMouseMove:u,onMouseUp:d,onMouseLeave:d,onTouchStart:l,onTouchMove:u,onTouchEnd:d,onTouchCancel:d,style:h_})}),j6=ce.memo(()=>{const e=Ke(i6),t={position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none"};return R.jsx("svg",{style:t,viewBox:`0 0 ${Qn} ${Qn}`,children:e.map((r,i)=>R.jsxs("g",{children:[R.jsx("polyline",{points:r.dots.map(([s,l])=>`${s},${l}`).join(" "),stroke:"white",strokeWidth:2,strokeDasharray:"2,5",fill:"none"}),r.dots.map(([s,l],u)=>R.jsx("circle",{cx:s,cy:l,r:1,fill:`hsl(0, 70%, ${u%5*10+30}%)`},`${i}-${u}`))]},`debug-${i}`))})});async function U6(){return(await ue.queryOnce({paintings:{}})).data.paintings}function L6(e){return ue.transact([ue.tx.paintings[lt()].create(e)])}function $6(e){return ue.transact([ue.tx.paintings[e].delete()])}function H6(){const[e,t]=ce.useState(!0),r=Ke(Zn),i=Ke(So),s=Ke(QA),[l]=Ke([_x.$topic]);return R.jsxs("div",{children:[R.jsxs("button",{onClick:()=>t(!e),children:["Dev ",e?"▼":"▲"]}),R.jsx("div",{style:{display:"flex",gap:"8px"},children:R.jsx("button",{onClick:()=>_x.myTopic(),children:"myTopic"})}),!e&&R.jsxs("div",{style:{maxWidth:"90vw",overflow:"scroll"},children:[R.jsx("div",{children:R.jsx(io,{href:"https://joxter.github.io/scribble/",target:"_blank",children:"website"})}),R.jsxs("p",{children:["localId: ",r]}),R.jsxs("div",{children:[s.length>0&&R.jsxs("button",{onClick:async()=>{for(let u of s)await L6({canvas:u.events,word:u.word,playerId:u.playerId});console.log(`Created paintings: ${s.length}`),Sx()},children:["создать картины (",s.length,") и удалить сообщения"]}),R.jsx("button",{onClick:Sx,children:"Удалить все сообщения"}),R.jsx("br",{}),R.jsx("br",{}),R.jsx("button",{onClick:g6,children:"перезагрузить всю комнату"})]}),R.jsx("pre",{style:{maxWidth:"300px"},children:JSON.stringify(i,null,2)})]})]})}const kx=4;function I6({value:e,onChange:t}){const r=qs.indexOf(e),i=Math.max(...qs);let s=r*i+kx*r;return R.jsxs("div",{style:{display:"inline-flex",gap:"4px",position:"relative",height:"32px",backgroundColor:"#eee",borderRadius:"16px",cursor:"pointer",padding:"4px",boxShadow:"0 0px 4px rgba(0,0,0,0.1)",overflow:"hidden"},children:[R.jsx("div",{style:{position:"absolute",left:s+"px",display:"flex",top:"0px",width:r===qs.length-1?i+10+"px":i+4+"px",height:"100%",backgroundColor:"#007bff"}}),R.jsx("div",{style:{display:"flex",gap:kx+"px",position:"relative",width:"100%"},children:qs.map(l=>R.jsx("div",{onClick:()=>t(l),style:{display:"flex",width:i+"px",height:i+"px"},children:R.jsx("div",{style:{margin:"auto",width:`${l}px`,height:`${l}px`,backgroundColor:l===e?"#555":"#666",borderRadius:"50%"}})},l))})]})}const q6="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M29%2023C29%2023.2652%2028.8946%2023.5196%2028.7071%2023.7071C28.5196%2023.8946%2028.2652%2024%2028%2024C27.7348%2024%2027.4804%2023.8946%2027.2929%2023.7071C27.1054%2023.5196%2027%2023.2652%2027%2023C26.9997%2020.8246%2026.3545%2018.6981%2025.1457%2016.8894C23.937%2015.0807%2022.2192%2013.671%2020.2093%2012.8386C18.1995%2012.0061%2015.988%2011.7883%2013.8544%2012.2126C11.7208%2012.6369%209.76087%2013.6844%208.2225%2015.2225L5.425%2018H11C11.2652%2018%2011.5196%2018.1053%2011.7071%2018.2929C11.8946%2018.4804%2012%2018.7348%2012%2019C12%2019.2652%2011.8946%2019.5196%2011.7071%2019.7071C11.5196%2019.8946%2011.2652%2020%2011%2020H3C2.73478%2020%202.48043%2019.8946%202.29289%2019.7071C2.10536%2019.5196%202%2019.2652%202%2019V11C2%2010.7348%202.10536%2010.4804%202.29289%2010.2929C2.48043%2010.1053%202.73478%209.99999%203%209.99999C3.26522%209.99999%203.51957%2010.1053%203.70711%2010.2929C3.89464%2010.4804%204%2010.7348%204%2011V16.5962L6.81%2013.805C8.62837%2011.9876%2010.9448%2010.7501%2013.4664%2010.249C15.988%209.74799%2018.6015%2010.0059%2020.9765%2010.99C23.3516%2011.9742%2025.3815%2013.6405%2026.8097%2015.7782C28.2378%2017.9159%2029%2020.4291%2029%2023Z'%20fill='%23343330'/%3e%3c/svg%3e",Ex=28,B6=8;function Y6({value:e,onChange:t}){return R.jsx("div",{style:{flexWrap:"wrap",display:"flex",gap:B6+"px",justifyContent:"space-between"},children:J2.map((r,i)=>R.jsx("button",{onClick:()=>t(r),style:{width:Ex+"px",height:Ex+"px",border:r==="#ffffff"?"1px solid #333":"none",borderRadius:"100%",padding:"0",backgroundColor:r,cursor:"pointer",boxShadow:r===e?"0 0 0 2px #fff, 0 0 0 5px rgb(0, 123, 255)":"none"}},r))})}function P6(){const e=Xw(hm,r=>r.width),t=Xw(hm,r=>r.color);return R.jsxs("div",{style:{display:"grid",alignContent:"start",padding:"8px",gap:"12px"},children:[R.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between"},children:[R.jsx("button",{onClick:r6,children:R.jsx("img",{style:{width:"20px"},src:q6})}),R.jsx(I6,{value:e,onChange:r=>xx({width:r})})]}),R.jsx("div",{children:R.jsx(Y6,{value:t,onChange:r=>xx({color:r})})})]})}const X6="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M28.4138%209.17122L22.8288%203.58497C22.643%203.39921%2022.4225%203.25185%2022.1799%203.15131C21.9372%203.05077%2021.6771%202.99902%2021.4144%202.99902C21.1517%202.99902%2020.8916%203.05077%2020.6489%203.15131C20.4062%203.25185%2020.1857%203.39921%2020%203.58497L4.58626%2019C4.39973%2019.185%204.25185%2019.4053%204.15121%2019.648C4.05057%2019.8907%203.99917%2020.151%204.00001%2020.4137V26C4.00001%2026.5304%204.21072%2027.0391%204.5858%2027.4142C4.96087%2027.7893%205.46958%2028%206.00001%2028H11.5863C11.849%2028.0008%2012.1093%2027.9494%2012.352%2027.8488C12.5947%2027.7481%2012.815%2027.6002%2013%2027.4137L28.4138%2012C28.5995%2011.8142%2028.7469%2011.5937%2028.8474%2011.3511C28.948%2011.1084%2028.9997%2010.8483%2028.9997%2010.5856C28.9997%2010.3229%2028.948%2010.0628%2028.8474%209.82012C28.7469%209.57744%2028.5995%209.35695%2028.4138%209.17122ZM6.41376%2020L17%209.41372L19.0863%2011.5L8.50001%2022.085L6.41376%2020ZM6.00001%2022.4137L9.58626%2026H6.00001V22.4137ZM12%2025.5862L9.91376%2023.5L20.5%2012.9137L22.5863%2015L12%2025.5862ZM24%2013.5862L18.4138%207.99997L21.4138%204.99997L27%2010.585L24%2013.5862Z'%20fill='%23343330'/%3e%3c/svg%3e",{$allParties:p_}=F6();function F6(){const e=Ie(),t=Co(e,[]);return ue.subscribeQuery({party:{players:{}}},r=>{r.error&&console.error(r.error),r.data&&e(r.data.party)}),{$allParties:t}}function G6(){var h;const e=Ke(So),t=Ke(Zn),r=Ke(p_),i=Ke(gg),[s]=Ke(Mo),l=e.players2||[],u=!!l.find(p=>p.localId===t),d=s.state.state==="drawing"?s.state.playerId:"";return R.jsxs("div",{children:[R.jsxs("p",{children:['Комната "',(h=r.find(p=>p.id===i))==null?void 0:h.name,'" ',R.jsx("br",{}),u?R.jsx("button",{type:"button",onClick:()=>{m6(e.id)},children:"уйти"}):R.jsx("button",{type:"button",onClick:()=>{h6(e.id)},children:"зайти"})]}),R.jsx("button",{type:"button",onClick:()=>{p6(e.id)},children:"закрыть"}),R.jsxs("div",{style:{display:"grid",alignContent:"start",gap:"4px"},children:[l.length===0?R.jsx("p",{children:"никого нет"}):null,l==null?void 0:l.map(p=>{const y=p.id===d;return R.jsxs("div",{style:{padding:"8px 12px",borderRadius:"4px",backgroundColor:"#fff",color:"#333",border:"1px solid #ddd"},children:[p.name," ",y&&R.jsx("img",{src:X6,style:{width:"18px"}})]},p.id)})]})]})}const V6="_page_150yi_2",Q6="_header_150yi_31",W6="_headerContent_150yi_35",Z6="_canvasSection_150yi_42",K6="_footer_150yi_48",J6="_players_150yi_56",no={page:V6,header:Q6,headerContent:W6,canvasSection:Z6,footer:K6,players:J6};function eR({revealed:e,clue:t}){const[r,i]=ce.useState(""),s=u=>{u.preventDefault(),d6({guess:r.trim()}),i("")},l=u=>{i(u.target.value)};return t.split(" ").map(u=>u.length).join(" "),R.jsx("form",{onSubmit:s,children:R.jsxs("div",{style:{display:"grid",gridTemplateColumns:e?"1fr min-content":`calc(${t.length*10}px + ${(t.length-1)*3}px + 10px) min-content`,gap:"0px 8px",fontFamily:"monospace",letterSpacing:"2px"},children:[R.jsx("p",{style:{padding:"0 4px",color:e?"green":"initial",textAlign:e?"center":"initial"},children:e?e+"!":t}),R.jsx("div",{}),R.jsx("div",{children:R.jsx("input",{type:"text",value:r,onChange:l,style:{outline:"none",width:"100%",font:"inherit",fontFamily:"inherit",letterSpacing:"inherit"}})}),R.jsx("button",{type:"submit",children:"OK"})]})})}function tR(e){const t=ce.useRef(null);return ce.useEffect(()=>{t.current&&t.current.scrollTo({top:t.current.scrollHeight,behavior:"smooth"})},[e]),t}function nR(){const[e,{players2:t}]=Ke([fm,So]),r=tR(e),i=Object.fromEntries((t||[]).map(s=>[s.id,s.name]));return R.jsx("div",{ref:r,style:{display:"grid",alignContent:"start",gap:"4px",padding:"4px",paddingRight:"12px",borderRadius:"4px",backgroundColor:"#fff",color:"#333",border:"1px solid #ddd",overflow:"auto",lineHeight:"1",fontSize:"14px",wordBreak:"break-word"},children:e.slice(-50).map((s,l)=>{const u=s.type+l;if(s.type==="guess"){let{text:d,player:h,isRevealed:p}=s;return p==="revealed"?R.jsx("p",{style:{fontStyle:"italic",color:"green"},children:R.jsxs("b",{children:[i[h]," отгадал слово!"]})},u):R.jsxs("p",{style:{},children:[R.jsxs("b",{children:[i[h],":"]})," ",d]},u)}if(s.type==="new-word"){let{word:d}=s;return R.jsxs("p",{style:{fontStyle:"italic"},children:["Слово выбрано!"," ",R.jsxs("b",{style:{letterSpacing:"2px"},children:[d.replace(/\S/g,"_")," (",d.split(" ").map(h=>h.length).join(" "),")"]})]},u)}if(s.type==="choosing-word"){let{playerId:d}=s;return R.jsxs("p",{style:{fontStyle:"italic"},children:[i[d]," выбирает слово"]},u)}return R.jsxs("p",{style:{color:"#888"},children:["[",s.type,"]"]},u)})})}function rR(){const[e,t]=ce.useState(0),r=ce.useRef(0),i=ce.useRef(performance.now()),s=ce.useRef(0);return ce.useEffect(()=>{const l=()=>{const u=performance.now();if(r.current++,u-i.current>=1e3){const d=Math.round(r.current*1e3/(u-i.current));t(d),r.current=0,i.current=u}s.current=requestAnimationFrame(l)};return s.current=requestAnimationFrame(l),()=>{s.current&&cancelAnimationFrame(s.current)}},[]),R.jsxs("div",{style:{position:"fixed",top:"10px",right:"10px",backgroundColor:"#fff",color:"#333",border:"1px solid #333",padding:"2px 4px",borderRadius:"4px",fontSize:"14px",fontFamily:"monospace",zIndex:1e3,userSelect:"none"},children:[e," FPS"]})}const aR=1e3;function iR(){const[e,t]=Ke([i_,n6]),[r,i]=ce.useState([]);ce.useEffect(()=>{e!=null&&e.perf&&i(u=>{const d=Date.now(),h=d-aR,p=u.filter(y=>y.timestamp>h);return p.push({...e.perf,timestamp:d}),p})},[e==null?void 0:e.perf]);const s=r.length>0?Math.max(...r.map(u=>u.newTime)):0,l=r.reduce((u,d)=>u+d.newTime,0);return R.jsx("div",{children:R.jsxs("p",{style:{fontSize:"10px",padding:"0",margin:"0",lineHeight:"1"},children:["max tldraw calc: ",R.jsxs("b",{children:[s.toFixed(2),"ms"]})," (",t,")"," ",R.jsx("br",{}),"total in 1sec: ",R.jsx("b",{children:l.toFixed(2)}),"ms"]})})}function oR(){const t=K1().roomId,[r,i,s,l]=Ke([yg,KA,ZA,WA]);return ce.useEffect(()=>{t&&r_(t)},[t]),R.jsxs("div",{className:no.page,children:[R.jsx("div",{className:no.header,children:R.jsxs("div",{className:no.headerContent,children:[R.jsx(io,{href:va(),children:"Главная"}),r&&R.jsx("h2",{children:r}),R.jsx(iR,{}),R.jsx(rR,{})]})}),R.jsx("div",{className:no.canvasSection,children:i?R.jsx("div",{style:{width:"100%",aspectRatio:"1"},children:R.jsx(sR,{words:i})}):R.jsx(z6,{})}),R.jsxs("div",{className:no.footer,children:[r&&R.jsx(P6,{}),!r&&s&&R.jsx("div",{style:{padding:"4px 12px"},children:R.jsx("div",{style:{display:"flex",justifyContent:"center"},children:R.jsx(eR,{clue:s,revealed:l})})}),R.jsx(H6,{})]}),R.jsxs("div",{className:no.players,children:[R.jsx(G6,{}),R.jsx(lR,{}),R.jsx(nR,{})]})]})}function sR({words:e}){return R.jsx("div",{style:{backgroundColor:"#ddd",height:"100%",display:"flex",gap:"8px",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:e.map((t,r)=>R.jsx("button",{type:"button",onClick:()=>u6(t),children:t},r))})}function lR(){return R.jsx("div",{style:{},children:R.jsx("button",{onClick:c6,children:"выбрать слово"})})}const cR=["домино","стрэй кидс","феликс","бан чан","лино","лифт","концерт","скотч","дом","вода","лёд","квадрат","круг","карандаш","линейка","суши","рамён","дождь","играть","читать","учиться","дерево","растение","работать","сундук","майнкрафт","рисовать","кей-поп","акула","рыба","холод","свет","балкон","программист","пенал","мороженое","куб","лава","вулкан","кот","мяч","танцевать","урок","колонка","плавать","диплом","тюльпан","фото","чашка","кунг-фу","цирк","кролик","рокета","хранилище","семья","родители","ребёнок","мама","папа","счастье","космос","солнце","небо","корона","земля","флаг","королева","король","ворота","сердечко","пульт","маркер","ручка","рука","ножницы","кнопка","тетрадь","айпад","ниндзя","воздух","звук","единорог","телевизор","цветок","гусь","корея","Нидерланды"],uR=["кот","собака","дом","машина","дерево","солнце","луна","звезда","море","река","гора","лес","цветок","трава","небо","облако","дождь","снег","ветер","огонь","вода","земля","камень","песок","лед","пламя","дым","туман","радуга","молния","хлеб","молоко","мясо","рыба","яйцо","сыр","масло","сахар","соль","перец","яблоко","банан","апельсин","лимон","виноград","клубника","вишня","персик","груша","ананас","морковь","картофель","лук","чеснок","помидор","огурец","капуста","салат","редис","свекла","стол","стул","кровать","шкаф","диван","кресло","лампа","зеркало","часы","телевизор","компьютер","телефон","книга","ручка","карандаш","бумага","тетрадь","рюкзак","сумка","кошелек","рубашка","брюки","платье","юбка","куртка","пальто","шляпа","кепка","носки","туфли","сапоги","кроссовки","тапочки","перчатки","шарф","ремень","очки","часы","кольцо","серьги","автобус","поезд","самолет","корабль","велосипед","мотоцикл","грузовик","такси","метро","трамвай","врач","учитель","водитель","повар","продавец","строитель","художник","музыкант","актер","писатель","мама","папа","сын","дочь","брат","сестра","дедушка","бабушка","дядя","тетя","школа","университет","больница","магазин","ресторан","кафе","театр","кино","музей","парк","спорт","футбол","баскетбол","теннис","плавание","бег","йога","танцы","музыка","пение","гитара","пианино","скрипка","барабаны","флейта","труба","саксофон","микрофон","динамик","наушники","красный","синий","зеленый","желтый","черный","белый","серый","розовый","фиолетовый","оранжевый","большой","маленький","высокий","низкий","длинный","короткий","широкий","узкий","толстый","тонкий","быстрый","медленный","горячий","холодный","сухой","мокрый","чистый","грязный","новый","старый","один","два","три","четыре","пять","шесть","семь","восемь","девять","десять","понедельник","вторник","среда","четверг","пятница","суббота","воскресенье","день","ночь","утром","весна","лето","осень","зима","январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь","год","месяц","неделя","час","минута","секунда","время","часы","будильник","календарь","дата","праздник","день рождения","свадьба","любовь","дружба","семья","счастье","радость","грусть","злость","страх","удивление","смех","плач","улыбка","объятие","поцелуй","подарок","сюрприз","мечта","надежда","вера","удача","работа","отдых","игра","развлечение","хобби","путешествие","отпуск","выходные","каникулы","приключение","здоровье","болезнь","лекарство","витамины","спорт","диета","сон","усталость","энергия","сила","деньги","покупки","продажа","цена","скидка","банк","кредит","зарплата","бюджет","экономия","еда","завтрак","обед","ужин","кухня","рецепт","готовка","посуда","тарелка","чашка","нож","вилка","ложка","кастрюля","сковорода","духовка","холодильник","микроволновка","тостер","блендер","шоколад","конфеты","торт","печенье","мороженое","напиток","сок","чай","кофе","лимонад","пляж","отель","чемодан","билет","паспорт","фото","камера","видео","селфи","воспоминание","интернет","сайт","email","сообщение","чат","социальная сеть","блог","видеоблог","подписчик","лайк","фильм","сериал","актер","режиссер","сценарий","роль","премьера","билет","попкорн","3D","животное","птица","рыба","насекомое","млекопитающее","хищник","травоядное","дикое","домашнее","зоопарк","лев","тигр","слон","жираф","обезьяна","медведь","волк","лиса","заяц","белка","птица","орел","сова","попугай","воробей","голубь","ласточка","аист","пингвин","фламинго","акула","дельфин","кит","осьминог","краб","морская звезда","медуза","креветка","лосось","тунец","пчела","бабочка","муравей","паук","жук","комар","муха","стрекоза","кузнечик","божья коровка","роза","тюльпан","ромашка","подсолнух","лилия","орхидея","фиалка","гвоздика","пион","ирис","дуб","береза","сосна","ель","клен","липа","каштан","ива","тополь","рябина","футболист","теннисист","пловец","боксер","гимнаст","лыжник","хоккеист","баскетболист","велосипедист","бегун","стадион","спортзал","бассейн","корт","поле","каток","лыжня","беговая дорожка","тренажер","мяч","ракетка","клюшка","шайба","ворота","сетка","финиш","старт","медаль","кубок","чемпион","математика","физика","химия","биология","история","география","литература","русский язык","английский","информатика","урок","учебник","тетрадь","доска","мел","парта","класс","перемена","звонок","домашнее задание","оценка","экзамен","тест","контрольная","диктант","сочинение","презентация","проект","исследование","эксперимент","погода","прогноз","температура","градус","термометр","барометр","влажность","давление","ветер","буря","ясно","пасмурно","дождливо","снежно","туманно","солнечно","ветрено","прохладно","тепло","жарко","зонт","дождевик","солнцезащитные очки","крем от загара","шляпа от солнца","перчатки","варежки","шарф","шапка","сапоги","космос","планета","звезда","галактика","солнечная система","астронавт","ракета","спутник","телескоп","НЛО","Земля","Марс","Венера","Юпитер","Сатурн","Меркурий","Уран","Нептун","Плутон","комета","океан","континент","страна","город","деревня","столица","граница","карта","компас","GPS","Россия","Москва","Санкт-Петербург","Америка","Европа","Азия","Африка","Австралия","Антарктида","остров","церковь","храм","мечеть","синагога","монастырь","собор","колокол","крест","икона","свеча","праздник","Новый год","Рождество","Пасха","день рождения","свадьба","юбилей","выпускной","крестины","именины","подарок","торт","свечи","воздушные шары","фейерверк","конфетти","украшения","гирлянда","елка","Дед Мороз","больница","поликлиника","врач","медсестра","пациент","лечение","операция","таблетки","укол","рентген","стоматолог","окулист","кардиолог","хирург","терапевт","педиатр","психолог","ветеринар","фармацевт","скорая помощь","полиция","пожарные","спасатель","солдат","генерал","офицер","сержант","капитан","майор","полковник","суд","судья","адвокат","прокурор","свидетель","подозреваемый","обвиняемый","приговор","штраф","тюрьма","банк","банкир","кассир","счет","вклад","кредит","ипотека","процент","банкомат","карта","ресторан","кафе","бар","повар","официант","меню","заказ","счет","чаевые","кухня","отель","гостиница","номер","ключ","ресепшн","администратор","горничная","завтрак","обслуживание","бронирование","магазин","супермаркет","продавец","касса","чек","сдача","скидка","акция","распродажа","витрина","одежда","обувь","аксессуары","украшения","косметика","парфюм","сумка","кошелек","ремень","галстук","парикмахерская","салон красоты","стрижка","прическа","маникюр","педикюр","массаж","косметолог","визажист","стилист","театр","опера","балет","концерт","симфония","оркестр","дирижер","солист","хор","декорации","музей","галерея","выставка","экскурсия","гид","экспонат","картина","скульптура","археология","история","библиотека","книга","автор","писатель","поэт","роман","повесть","рассказ","стихи","сказка","газета","журнал","статья","интервью","репортаж","новости","журналист","редактор","типография","издательство","радио","телевидение","программа","ведущий","корреспондент","прямой эфир","запись","трансляция","канал","антенна","компьютер","ноутбук","планшет","смартфон","клавиатура","мышь","монитор","процессор","память","жесткий диск","программа","приложение","игра","файл","папка","документ","презентация","таблица","база данных","сайт","интернет","браузер","поиск","ссылка","домен","сервер","облако","загрузка","скачивание","обновление","email","сообщение","чат","видеозвонок","конференция","вебинар","стрим","подкаст","блог","влог","социальная сеть","профиль","друзья","подписчики","пост","фото","видео","лайк","комментарий","репост","игрушка","кукла","мишка","конструктор","пазл","настольная игра","карты","шахматы","шашки","домино","мяч","скакалка","велосипед","самокат","ролики","коньки","лыжи","сноуборд","кайт","воздушный змей","сад","огород","грядка","теплица","лейка","лопата","грабли","семена","рассада","урожай","дача","беседка","мангал","шашлык","пикник","костер","палатка","поход","рюкзак","спальный мешок","рыбалка","удочка","крючок","наживка","улов","лодка","сети","рыбак","озеро","пруд","охота","ружье","охотник","дичь","капкан","следы","лес","чаща","поляна","тропа","грибы","ягоды","корзина","нож","компас","карта","ориентирование","заблудиться","выход","тропинка","цирк","клоун","акробат","жонглер","фокусник","дрессировщик","арена","шапито","представление","номер","аттракцион","карусель","колесо обозрения","американские горки","батут","качели","горка","песочница","площадка","парк","зоопарк","вольер","клетка","кормление","экскурсия","смотритель","ветеринар","животное","хищник","травоядное","аквариум","рыбка","водоросли","ракушка","кораллы","фильтр","компрессор","корм","освещение","температура","террариум","змея","ящерица","черепаха","игуана","хамелеон","геккон","варан","питон","кобра","ферма","фермер","трактор","комбайн","плуг","борона","сеялка","жатка","силос","сено","коровник","свинарник","курятник","конюшня","овчарня","пастбище","загон","кормушка","поилка","доярка","корова","бык","теленок","свинья","поросенок","овца","баран","ягненок","коза","козленок","лошадь","жеребенок","пони","осел","мул","верблюд","олень","лось","кабан","бизон","курица","петух","цыпленок","утка","гусь","индейка","перепел","фазан","павлин","страус","мастерская","инструмент","молоток","гвоздь","винт","гайка","болт","отвертка","плоскогубцы","ключ","пила","дрель","шуруповерт","рубанок","стамеска","напильник","наждачка","уровень","рулетка","циркуль","строительство","фундамент","стены","крыша","окна","двери","лестница","балкон","терраса","веранда","кирпич","цемент","песок","щебень","арматура","бетон","раствор","штукатурка","краска","обои","электричество","проводка","розетка","выключатель","лампочка","светильник","люстра","торшер","настольная лампа","бра","водопровод","канализация","трубы","кран","смеситель","раковина","ванна","душ","унитаз","биде","отопление","батарея","радиатор","котел","трубы","термостат","камин","печь","дымоход","дрова","мебель","изготовление","дизайн","материал","дерево","металл","пластик","стекло","кожа","ткань","портной","швея","ателье","выкройка","ткань","нитки","иголка","булавка","ножницы","машинка","вышивка","вязание","спицы","крючок","пряжа","узор","петля","ряд","свитер","шарф","ювелир","золото","серебро","платина","драгоценный камень","алмаз","рубин","изумруд","сапфир","жемчуг","часовщик","механизм","циферблат","стрелки","пружина","маятник","будильник","секундомер","хронометр","таймер"],mm=[...cR,...w2,...uR];console.log("RU",mm.length,[...new Set(mm)].length);const m_=Ie(),wg=Bt([]);wg.map(e=>e.filter(t=>t.lang==="RU"));wg.on(m_,(e,t)=>t);ue.subscribeQuery({words:{}},e=>{e.error&&console.error(e.error),e.data&&m_(e.data.words||[])});function dR(e,t){return ue.transact(ue.tx.words[lt()].create({word:e.trim(),lang:t.toUpperCase(),category:""}))}function fR(e,t){return ue.transact(e.slice(0,100).map(r=>ue.tx.words[lt()].create({word:r.trim(),lang:"RU",category:"",hidden:!1})))}function hR(e){return ue.transact(ue.tx.words[e].update({hidden:!0}))}function pR(e){return ue.transact(ue.tx.words[e].update({hidden:!1}))}const mR="_container_alhqe_1",gR="_langSelector_alhqe_9",vR="_langButton_alhqe_15",yR="_langButtonActive_alhqe_22",bR="_langButtonInactive_alhqe_27",wR="_checkboxLabel_alhqe_32",xR="_addWordForm_alhqe_39",_R="_letterSelector_alhqe_46",SR="_letterButton_alhqe_52",TR="_letterButtonActive_alhqe_60",kR="_letterButtonInactive_alhqe_65",ER="_wordsList_alhqe_70",CR="_wordItem_alhqe_74",MR="_wordItemHidden_alhqe_78",NR="_wordToggleButton_alhqe_84",OR="_wordToggleButtonShow_alhqe_93",AR="_wordToggleButtonHide_alhqe_97",yt={container:mR,langSelector:gR,langButton:vR,langButtonActive:yR,langButtonInactive:bR,checkboxLabel:wR,addWordForm:xR,letterSelector:_R,letterButton:SR,letterButtonActive:TR,letterButtonInactive:kR,wordsList:ER,wordItem:CR,wordItemHidden:MR,wordToggleButton:NR,wordToggleButtonShow:OR,wordToggleButtonHide:AR},RR="АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".split(""),zR="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");function DR(){const e=Ke(wg),[t,r]=ce.useState("RU"),[i,s]=ce.useState("А"),[l,u]=ce.useState(""),[d,h]=ce.useState(!0),p=t==="RU"?RR:zR,y=e.filter(k=>{const _=k.lang===t,M=k.word[0].toUpperCase().startsWith(i),O=d?!0:!k.hidden;return _&&M&&O}),g=async(k,_)=>{try{_?await pR(k):await hR(k)}catch(M){console.error("Failed to toggle word visibility:",M)}},b=k=>{r(k),s(k==="RU"?"А":"A")},w=k=>{k.preventDefault(),dR(l,t).then(()=>{u("")}).catch(_=>{console.error(_),String(_.message).includes("is a unique attribute on")&&alert(`Слово "${l}" уже добавлено`)})},S=new Set(e.filter(k=>k.lang==="RU").map(k=>k.word)),T=[...new Set(mm)].filter(k=>!S.has(k)).slice(0,100);return R.jsx(ba,{children:R.jsxs("div",{className:yt.container,children:[T.length>0&&R.jsx("div",{children:R.jsxs("button",{onClick:()=>{fR(T).then(()=>{console.log(`Добавлено ${T.length} новых слов`)}).catch(k=>{console.error(k)})},children:["ADD ",R.jsx("b",{children:"RU"})," ",T.length]})}),R.jsx(jR,{selectedLang:t,onLangChange:b,totalWords:e.length}),R.jsxs("label",{className:yt.checkboxLabel,children:[R.jsx("input",{type:"checkbox",checked:d,onChange:k=>h(k.target.checked)}),"Показать скрытые слова"]}),R.jsx(UR,{selectedLang:t,newWord:l,onWordChange:u,onSubmit:w}),R.jsx(LR,{letters:p,selectedLetter:i,onLetterChange:s}),R.jsx($R,{filteredWords:y,selectedLetter:i,onWordClick:g})]})})}function jR({selectedLang:e,onLangChange:t,totalWords:r}){return R.jsxs("div",{className:yt.langSelector,children:[R.jsx("button",{onClick:()=>t("RU"),className:`${yt.langButton} ${e==="RU"?yt.langButtonActive:yt.langButtonInactive}`,children:"RU"}),R.jsx("button",{onClick:()=>t("EN"),className:`${yt.langButton} ${e==="EN"?yt.langButtonActive:yt.langButtonInactive}`,children:"EN"}),R.jsx("p",{children:r})]})}function UR({selectedLang:e,newWord:t,onWordChange:r,onSubmit:i}){return R.jsxs("form",{onSubmit:i,className:yt.addWordForm,children:[R.jsx("input",{type:"text",placeholder:"Слово",value:t,onChange:s=>r(s.target.value)}),R.jsxs("button",{type:"submit",disabled:!t.trim(),children:["Добавить ",e]})]})}function LR({letters:e,selectedLetter:t,onLetterChange:r}){return R.jsx("div",{className:yt.letterSelector,children:e.map(i=>R.jsx("button",{onClick:()=>r(i),className:`${yt.letterButton} ${t===i?yt.letterButtonActive:yt.letterButtonInactive}`,children:i},i))})}function $R({filteredWords:e,selectedLetter:t,onWordClick:r}){return R.jsxs("div",{children:[R.jsxs("h3",{children:["Слова на букву ",t," (",e.length,"):"]}),e.length===0?R.jsx("p",{children:"Нет слов"}):R.jsx("ol",{className:yt.wordsList,children:e.toSorted((i,s)=>i.word.localeCompare(s.word)).map(i=>{const s=i.hidden||!1;return R.jsxs("li",{className:`${yt.wordItem} ${s?yt.wordItemHidden:""}`,children:[i.word,R.jsx("button",{onClick:()=>r(i.id,s),className:`${yt.wordToggleButton} ${s?yt.wordToggleButtonShow:yt.wordToggleButtonHide}`,title:s?"Восстановить слово":"Скрыть слово",children:s?"↻":"✕"})]},i.id)})})]})}const ru=window.devicePixelRatio||1;function HR(e,t=Qn){const r=e.getContext("2d");return e.width=t*ru,e.height=t*ru,r.scale(ru,ru),r}function IR(e,t,r){const i=r/Qn;e.scale(i,i),t_(t).forEach(l=>{if(l.dots.length===1)e.fillStyle=l.color,e.beginPath(),e.arc(l.dots[0][0],l.dots[0][1],l.width/2,0,2*Math.PI),e.fill();else{e.strokeStyle=l.color,e.lineWidth=l.width,e.lineCap="round",e.lineJoin="round",e.beginPath(),e.moveTo(l.dots[0][0],l.dots[0][1]);for(let u=1;u<l.dots.length;u++)e.lineTo(l.dots[u][0],l.dots[u][1]);e.stroke()}})}function qR({canvas:e,size:t=200,className:r}){const i=ce.useRef(null);ce.useEffect(()=>{if(!i.current)return;const u=HR(i.current,t);u.clearRect(0,0,t,t),IR(u,e,t)},[e,t]);const s={width:`${t}px`,height:`${t}px`,position:"relative",background:"#f6eee2",borderRadius:"4px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.1)"},l={position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"4px"};return R.jsx("div",{style:s,className:r,children:R.jsx("canvas",{ref:i,style:l})})}const BR="_container_1xxrm_1",YR="_header_1xxrm_9",PR="_deleteButton_1xxrm_15",XR="_deleteButtonDisabled_1xxrm_25",FR="_paintingsGrid_1xxrm_31",GR="_paintingCard_1xxrm_37",VR="_paintingLabel_1xxrm_45",QR="_paintingCheckbox_1xxrm_51",WR="_paintingTitle_1xxrm_55",ZR="_paintingInfo_1xxrm_61",KR="_paintingMeta_1xxrm_67",pn={container:BR,header:YR,deleteButton:PR,deleteButtonDisabled:XR,paintingsGrid:FR,paintingCard:GR,paintingLabel:VR,paintingCheckbox:QR,paintingTitle:WR,paintingInfo:ZR,paintingMeta:KR};function JR(){const[e,t]=ce.useState([]),[r,i]=ce.useState([]),[s,l]=ce.useState(!0),[u,d]=ce.useState(new Set),[h,p]=ce.useState(!1),y=Object.fromEntries(r.map(S=>[S.id,S]));ce.useEffect(()=>{U6().then(t).then(()=>v6().then(i)).catch(console.error).finally(()=>l(!1))},[]);const g=(S,T)=>{const k=new Set(u);T?k.add(S):k.delete(S),d(k)},b=async()=>{if(u.size!==0){p(!0);try{await Promise.all(Array.from(u).map(S=>$6(S))),t(S=>S.filter(T=>!u.has(T.id))),d(new Set)}catch(S){console.error("Failed to delete paintings:",S),alert("Ошибка при удалении картин")}finally{p(!1)}}};if(s)return R.jsx(ba,{children:R.jsx("div",{className:pn.container,children:R.jsx("p",{children:"Загрузка..."})})});const w=h||u.size===0;return R.jsx(ba,{children:R.jsxs("div",{className:pn.container,children:[R.jsxs("div",{className:pn.header,children:[R.jsxs("h3",{children:["Картины (",e.length,"):"]}),R.jsx("button",{onClick:b,disabled:w,className:`${pn.deleteButton} ${w?pn.deleteButtonDisabled:""}`,children:h?"Удаление...":`Удалить ${u.size}`})]}),e.length===0?R.jsx("p",{children:"Нет картин"}):R.jsx("div",{className:pn.paintingsGrid,children:e.map(S=>R.jsx(ez,{painting:S,author:y[S.playerId],selected:u.has(S.id),onSelectionChange:T=>g(S.id,T)},S.id))})]})})}function ez({painting:e,author:t,selected:r,onSelectionChange:i}){const s=t_(e.canvas),l=e.canvas.length,u=s.length,d=s.map(h=>h.dots.length).reduce((h,p)=>h+p,0);return R.jsxs("div",{className:pn.paintingCard,onClick:()=>{const h=JSON.stringify(s.map(p=>(p.dots=p.dots.map(([y,g])=>[+y.toFixed(1),+g.toFixed(1)]),p)));console.log(h),console.log(h.length)},children:[R.jsxs("label",{className:pn.paintingLabel,children:[R.jsx("input",{type:"checkbox",checked:r,onChange:h=>i(h.target.checked),className:pn.paintingCheckbox}),R.jsx("h4",{className:pn.paintingTitle,children:e.word})]}),R.jsx(qR,{canvas:e.canvas,size:200}),R.jsxs("div",{className:pn.paintingInfo,children:[R.jsxs("p",{className:pn.paintingMeta,children:["Автор: ",t.name]}),R.jsxs("p",{className:pn.paintingMeta,children:["Линий ",u,l!==u?`(${l})`:"",", точек"," ",d]})]})]})}const tz="root_r1e037uf";function pp({label:e,value:t,onChange:r,options:i,disabled:s}){return R.jsxs("div",{className:tz,children:[e&&R.jsx("label",{children:e}),R.jsx("select",{value:String(t),onChange:l=>{const u=i.find(d=>String(d.value)===l.target.value);u&&r(u.value)},disabled:s,children:i.map(l=>R.jsx("option",{value:String(l.value),children:l.label},String(l.value)))})]})}function nz(){var p;const e=Ke(c_),t=Ke(vg),r=Ke(Zn),[i,s]=ce.useState(t.name),[l,u]=Vm();if(ce.useEffect(()=>{t.name&&s(t.name)},[t]),!e.id)return R.jsx(ba,{children:R.jsx("p",{children:"группа не найдена"})});if(e.status!=="prepare")return R.jsx(ba,{children:R.jsx("p",{children:"группа уже играет или закончила играть"})});const d=((p=e.players.find(y=>y.id===e.host))==null?void 0:p.name)||e.host,h=r===e.host;return R.jsx(ba,{children:R.jsxs("div",{children:[R.jsxs("h1",{children:['Комната "',e.name,'"']}),R.jsxs("p",{children:["хост: ",R.jsx("b",{children:d})]}),R.jsxs("p",{children:["Ждем всех игроков [поделиться] ",e.id]}),R.jsx("br",{}),R.jsxs("form",{style:{maxWidth:"200px",display:"grid",gap:"4px",gridTemplateColumns:"1fr min-content"},onSubmit:y=>{y.preventDefault();const g=i.trim();g!==t.name?mg(g):s(g)},children:[R.jsx(pm,{maxLen:30,label:"Имя",onChange:s,value:i}),R.jsx(d_,{type:"submit",children:"ОК"})]}),R.jsx("br",{}),R.jsxs("div",{style:{display:"grid",gap:"8px",padding:"8px",borderRadius:"4px",backgroundColor:"#bddcf3",maxWidth:"200px"},children:[R.jsx(pp,{label:"Количество раундов",value:e.gameParams.rounds,onChange:y=>{fp(e.id,{...e.gameParams,rounds:y})},options:[{value:3,label:"3 раунда"},{value:5,label:"5 раундов"},{value:7,label:"7 раундов"},{value:10,label:"10 раундов"}],disabled:!h}),R.jsx(pp,{label:"Слов на выбор",value:e.gameParams.wordSuggestions,onChange:y=>{fp(e.id,{...e.gameParams,wordSuggestions:y})},options:[{value:2,label:"2 слова"},{value:3,label:"3 слова"},{value:4,label:"4 слова"},{value:5,label:"5 слов"}],disabled:!h}),R.jsx(pp,{label:"Время",value:e.gameParams.drawTime||60,onChange:y=>{fp(e.id,{...e.gameParams,drawTime:y})},options:[{value:10,label:"10 секунд"},{value:30,label:"30 секунд"},{value:60,label:"60 секунд"},{value:90,label:"90 секунд"}],disabled:!h})]}),R.jsx("br",{}),R.jsx("p",{children:"Игроки: "}),R.jsx("br",{}),R.jsx("ul",{children:e.players.map(y=>R.jsxs("li",{children:[y.name," ",y.id===r&&R.jsx("button",{onClick:()=>{XA(e.id).then(()=>{u(va(""))})},children:"выйти"}),y.id!==r&&h&&R.jsx("button",{onClick:()=>{PA(e.id,y.id)},children:"кикнуть"})]},y.id))}),h&&R.jsxs("div",{children:[R.jsx("button",{onClick:()=>{console.log("ещё не готово")},children:"Начать игру!"}),R.jsx("br",{}),R.jsx("br",{}),R.jsx("button",{onClick:()=>{FA(e.id)},children:"закрыть игру"})]})]})})}function rz(){const e=Ke(p_);return R.jsxs(ba,{children:[R.jsx("h1",{children:"Все комнаты"}),e.length===0?R.jsx("h2",{children:"Комнат пока нет"}):R.jsx("ul",{children:e.map(t=>{var i;const r=((i=t.players)==null?void 0:i.length)||0;return R.jsxs("li",{children:['"',t.name,'" ',r," ",r===1?"игрок":"игроков"," ",R.jsx("b",{children:t.status})]},t.id)})})]})}function az(){return R.jsx("div",{style:{height:"100%"},children:R.jsxs(E5,{children:[R.jsx(Pa,{path:"/scribble/words",component:DR}),R.jsx(Pa,{path:"/scribble/paintings",component:JR}),R.jsx(Pa,{path:"/scribble/all-rooms",component:rz}),R.jsx(Pa,{path:"/scribble/room/:roomId",component:oR}),R.jsx(Pa,{path:"/scribble/current-party",component:nz}),R.jsx(Pa,{path:"/scribble",component:Tx}),R.jsx(Pa,{path:"/",component:Tx})]})})}ZC({enabled:!0});const iz=i5.createRoot(document.getElementById("app"));iz.render(R.jsx(az,{}));
