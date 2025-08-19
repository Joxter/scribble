(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function r(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=r(s);fetch(s.href,l)}})();function km(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kh={exports:{}},As={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pb;function UT(){if(pb)return As;pb=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(i,s,l){var u=null;if(l!==void 0&&(u=""+l),s.key!==void 0&&(u=""+s.key),"key"in s){l={};for(var d in s)d!=="key"&&(l[d]=s[d])}else l=s;return s=l.ref,{$$typeof:e,type:i,key:u,ref:s!==void 0?s:null,props:l}}return As.Fragment=t,As.jsx=r,As.jsxs=r,As}var mb;function LT(){return mb||(mb=1,kh.exports=UT()),kh.exports}var $=LT();/**
 * @license bippy
 *
 * Copyright (c) Aiden Bai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const $T="0.3.18",Em=`bippy-${$T}`,gb=Object.defineProperty,HT=Object.prototype.hasOwnProperty,Ys=()=>{},D1=e=>{try{Function.prototype.toString.call(e).indexOf("^_^")>-1&&setTimeout(()=>{throw new Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")})}catch{}},j1=(e=ai())=>"getFiberRoots"in e;let U1=!1,Bc;const Sp=(e=ai())=>U1?!0:(typeof e.inject=="function"&&(Bc=e.inject.toString()),!!(Bc!=null&&Bc.includes("(injected)"))),lu=new Set,Tp=new Set,IT=e=>{const t=new Map;let r=0,i={checkDCE:D1,supportsFiber:!0,supportsFlight:!0,hasUnsupportedRendererAttached:!1,renderers:t,onCommitFiberRoot:Ys,onCommitFiberUnmount:Ys,onPostCommitFiberRoot:Ys,on:Ys,inject(s){const l=++r;return t.set(l,s),Tp.add(s),i._instrumentationIsActive||(i._instrumentationIsActive=!0,lu.forEach(u=>u())),l},_instrumentationSource:Em,_instrumentationIsActive:!1};try{gb(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__",{get(){return i},set(u){if(u&&typeof u=="object"){const d=i.renderers;i=u,d.size>0&&(d.forEach((h,p)=>{Tp.add(h),u.renderers.set(p,h)}),kp(e))}},configurable:!0,enumerable:!0});const s=window.hasOwnProperty;let l=!1;gb(window,"hasOwnProperty",{value:function(){try{if(!l&&arguments[0]==="__REACT_DEVTOOLS_GLOBAL_HOOK__")return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,l=!0,-0}catch{}return s.apply(this,arguments)},configurable:!0,writable:!0})}catch{kp(e)}return i},kp=e=>{e&&lu.add(e);try{const t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t)return;if(!t._instrumentationSource){if(t.checkDCE=D1,t.supportsFiber=!0,t.supportsFlight=!0,t.hasUnsupportedRendererAttached=!1,t._instrumentationSource=Em,t._instrumentationIsActive=!1,t.on=Ys,t.renderers.size){t._instrumentationIsActive=!0,lu.forEach(i=>i());return}const r=t.inject;Sp(t)&&!j1()&&(U1=!0,t.inject({scheduleRefresh(){}})&&(t._instrumentationIsActive=!0)),t.inject=i=>{const s=r(i);return Tp.add(i),t._instrumentationIsActive=!0,lu.forEach(l=>l()),s}}(t.renderers.size||t._instrumentationIsActive||Sp())&&(e==null||e())}catch{}},qT=()=>HT.call(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__"),ai=e=>qT()?(kp(e),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):IT(e),YT=()=>{var e,t;return!!(typeof window<"u"&&((e=window.document)!=null&&e.createElement||((t=window.navigator)==null?void 0:t.product)==="ReactNative"))},BT=()=>{try{YT()&&ai()}catch{}};/**
 * @license bippy
 *
 * Copyright (c) Aiden Bai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Xu=0,ci=1,L1=3,XT=5,FT=6,PT=7,VT=9,Fu=11,Pu=13,vl=14,yl=15,GT=18,QT=22,WT=23,ZT=26,KT=27,JT=60111,ek="Symbol(react.concurrent_mode)",tk="Symbol(react.async_mode)",vb=1,nk=2,rk=4096,ak=4,yb=8,ik=16,ok=32,sk=1024,lk=8192,bb=nk|ak|ik|ok|rk|lk|sk,nl=e=>{switch(e.tag){case XT:case ZT:case KT:return!0;default:return typeof e.type=="string"}},Vu=e=>{switch(e.tag){case Xu:case ci:case yl:case vl:case Fu:return!0;default:return!1}},ck=(e,t)=>{var r;try{const i=e.dependencies,s=(r=e.alternate)==null?void 0:r.dependencies;if(!i||!s||typeof i!="object"||!("firstContext"in i)||typeof s!="object"||!("firstContext"in s))return!1;let l=i.firstContext,u=s.firstContext;for(;l&&typeof l=="object"&&"memoizedValue"in l||u&&typeof u=="object"&&"memoizedValue"in u;){if(t(l,u)===!0)return!0;l=l==null?void 0:l.next,u=u==null?void 0:u.next}}catch{}return!1},Cm=e=>{var s;const t=e.memoizedProps,r=((s=e.alternate)==null?void 0:s.memoizedProps)||{},i=e.flags??e.effectTag??0;switch(e.tag){case ci:case Xu:case VT:case Fu:case vl:case yl:return(i&vb)===vb;default:return e.alternate?r!==t||e.alternate.memoizedState!==e.memoizedState||e.alternate.ref!==e.ref:!0}},Mm=e=>(e.flags&(bb|yb))!==0||(e.subtreeFlags&(bb|yb))!==0,uk=e=>{const t=[],r=[e];for(;r.length;){const i=r.pop();i&&(nl(i)&&Mm(i)&&Cm(i)&&t.push(i),i.child&&r.push(i.child),i.sibling&&r.push(i.sibling))}return t},Om=e=>{switch(e.tag){case GT:return!0;case FT:case PT:case WT:case QT:return!0;case L1:return!1;default:{const t=typeof e.type=="object"&&e.type!==null?e.type.$$typeof:e.type;switch(typeof t=="symbol"?t.toString():t){case JT:case ek:case tk:return!0;default:return!1}}}},dk=e=>{const t=[],r=[];for(nl(e)?t.push(e):e.child&&r.push(e.child);r.length;){const i=r.pop();if(!i)break;nl(i)?t.push(i):i.child&&r.push(i.child),i.sibling&&r.push(i.sibling)}return t},Nm=(e,t,r=!1)=>{if(!e)return null;if(t(e)===!0)return e;let i=r?e.return:e.child;for(;i;){const s=Nm(i,t,r);if(s)return s;i=r?null:i.sibling}return null},Wa=e=>{const t=(e==null?void 0:e.actualDuration)??0;let r=t,i=(e==null?void 0:e.child)??null;for(;t>0&&i!=null;)r-=i.actualDuration??0,i=i.sibling;return{selfTime:r,totalTime:t}},rl=e=>{var t;return!!((t=e.updateQueue)!=null&&t.memoCache)},ui=e=>{const t=e;return typeof t=="function"?t:typeof t=="object"&&t?ui(t.type||t.render):null},Ot=e=>{const t=e;if(typeof t=="string")return t;if(typeof t!="function"&&!(typeof t=="object"&&t))return null;const r=t.displayName||t.name||null;if(r)return r;const i=ui(t);return i&&(i.displayName||i.name)||null},fk=e=>{try{if(typeof e.version=="string"&&e.bundleType>0)return"development"}catch{}return"production"},hk=()=>!!ai()._instrumentationIsActive||j1()||Sp();let $1=0;const bo=new WeakMap,pk=(e,t=$1++)=>{bo.set(e,t)},_a=e=>{let t=bo.get(e);return!t&&e.alternate&&(t=bo.get(e.alternate)),t||(t=$1++,pk(e,t)),t},xa=(e,t,r)=>{let i=t;for(;i!=null;){if(bo.has(i)||_a(i),!Om(i)&&Cm(i)&&e(i,"mount"),i.tag===Pu)if(i.memoizedState!==null){const u=i.child,d=u?u.sibling:null;if(d){const h=d.child;h!==null&&xa(e,h,!1)}}else{let u=null;i.child!==null&&(u=i.child.child),u!==null&&xa(e,u,!1)}else i.child!=null&&xa(e,i.child,!0);i=r?i.sibling:null}},Ep=(e,t,r,i)=>{var h,p,y;if(bo.has(t)||_a(t),!r)return;bo.has(r)||_a(r);const s=t.tag===Pu;!Om(t)&&Cm(t)&&e(t,"update");const u=s&&r.memoizedState!==null,d=s&&t.memoizedState!==null;if(u&&d){const g=((h=t.child)==null?void 0:h.sibling)??null,w=((p=r.child)==null?void 0:p.sibling)??null;g!==null&&w!==null&&Ep(e,g,w)}else if(u&&!d){const g=t.child;g!==null&&xa(e,g,!0)}else if(!u&&d){H1(e,r);const g=((y=t.child)==null?void 0:y.sibling)??null;g!==null&&xa(e,g,!0)}else if(t.child!==r.child){let g=t.child;for(;g;){if(g.alternate){const w=g.alternate;Ep(e,g,w)}else xa(e,g,!1);g=g.sibling}}},Cp=(e,t)=>{(t.tag===L1||!Om(t))&&e(t,"unmount")},H1=(e,t)=>{const r=t.tag===Pu&&t.memoizedState!==null;let i=t.child;if(r){const s=t.child,l=(s==null?void 0:s.sibling)??null;i=(l==null?void 0:l.child)??null}for(;i!==null;)i.return!==null&&(Cp(e,i),H1(e,i)),i=i.sibling};let mk=0;const wb=new WeakMap,gk=(e,t)=>{const r="current"in e?e.current:e;let i=wb.get(e);i||(i={prevFiber:null,id:mk++},wb.set(e,i));const{prevFiber:s}=i;if(!r)Cp(t,r);else if(s!==null){const l=s&&s.memoizedState!=null&&s.memoizedState.element!=null&&s.memoizedState.isDehydrated!==!0,u=r.memoizedState!=null&&r.memoizedState.element!=null&&r.memoizedState.isDehydrated!==!0;!l&&u?xa(t,r,!1):l&&u?Ep(t,r,r.alternate):l&&!u&&Cp(t,r)}else xa(t,r,!0);i.prevFiber=r},vk=e=>ai(()=>{var l;const t=ai();(l=e.onActive)==null||l.call(e),t._instrumentationSource=e.name??Em;const r=t.onCommitFiberRoot;e.onCommitFiberRoot&&(t.onCommitFiberRoot=(u,d,h)=>{var p;r&&r(u,d,h),(p=e.onCommitFiberRoot)==null||p.call(e,u,d,h)});const i=t.onCommitFiberUnmount;e.onCommitFiberUnmount&&(t.onCommitFiberUnmount=(u,d)=>{var h;i&&i(u,d),(h=e.onCommitFiberUnmount)==null||h.call(e,u,d)});const s=t.onPostCommitFiberRoot;e.onPostCommitFiberRoot&&(t.onPostCommitFiberRoot=(u,d)=>{var h;s&&s(u,d),(h=e.onPostCommitFiberRoot)==null||h.call(e,u,d)})});/**
 * @license bippy
 *
 * Copyright (c) Aiden Bai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */BT();var Gu,_e,I1,q1,Qa,xb,Y1,B1,X1,Am,Mp,Op,F1,al={},P1=[],yk=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,bl=Array.isArray;function Ar(e,t){for(var r in t)e[r]=t[r];return e}function zm(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function ii(e,t,r){var i,s,l,u={};for(l in t)l=="key"?i=t[l]:l=="ref"?s=t[l]:u[l]=t[l];if(arguments.length>2&&(u.children=arguments.length>3?Gu.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(l in e.defaultProps)u[l]===void 0&&(u[l]=e.defaultProps[l]);return cu(e,u,i,s,null)}function cu(e,t,r,i,s){var l={type:e,props:t,key:r,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++I1,__i:-1,__u:0};return s==null&&_e.vnode!=null&&_e.vnode(l),l}function je(e){return e.children}function jn(e,t){this.props=e,this.context=t}function wo(e,t){if(t==null)return e.__?wo(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?wo(e):null}function V1(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return V1(e)}}function Np(e){(!e.__d&&(e.__d=!0)&&Qa.push(e)&&!Su.__r++||xb!=_e.debounceRendering)&&((xb=_e.debounceRendering)||Y1)(Su)}function Su(){for(var e,t,r,i,s,l,u,d=1;Qa.length;)Qa.length>d&&Qa.sort(B1),e=Qa.shift(),d=Qa.length,e.__d&&(r=void 0,s=(i=(t=e).__v).__e,l=[],u=[],t.__P&&((r=Ar({},i)).__v=i.__v+1,_e.vnode&&_e.vnode(r),Rm(t.__P,r,i,t.__n,t.__P.namespaceURI,32&i.__u?[s]:null,l,s??wo(i),!!(32&i.__u),u),r.__v=i.__v,r.__.__k[r.__i]=r,W1(l,r,u),r.__e!=s&&V1(r)));Su.__r=0}function G1(e,t,r,i,s,l,u,d,h,p,y){var g,w,b,_,T,M,S,C=i&&i.__k||P1,A=t.length;for(h=bk(r,t,C,h,A),g=0;g<A;g++)(b=r.__k[g])!=null&&(w=b.__i==-1?al:C[b.__i]||al,b.__i=g,M=Rm(e,b,w,s,l,u,d,h,p,y),_=b.__e,b.ref&&w.ref!=b.ref&&(w.ref&&Dm(w.ref,null,b),y.push(b.ref,b.__c||_,b)),T==null&&_!=null&&(T=_),(S=!!(4&b.__u))||w.__k===b.__k?h=Q1(b,h,e,S):typeof b.type=="function"&&M!==void 0?h=M:_&&(h=_.nextSibling),b.__u&=-7);return r.__e=T,h}function bk(e,t,r,i,s){var l,u,d,h,p,y=r.length,g=y,w=0;for(e.__k=new Array(s),l=0;l<s;l++)(u=t[l])!=null&&typeof u!="boolean"&&typeof u!="function"?(h=l+w,(u=e.__k[l]=typeof u=="string"||typeof u=="number"||typeof u=="bigint"||u.constructor==String?cu(null,u,null,null,null):bl(u)?cu(je,{children:u},null,null,null):u.constructor==null&&u.__b>0?cu(u.type,u.props,u.key,u.ref?u.ref:null,u.__v):u).__=e,u.__b=e.__b+1,d=null,(p=u.__i=wk(u,r,h,g))!=-1&&(g--,(d=r[p])&&(d.__u|=2)),d==null||d.__v==null?(p==-1&&(s>y?w--:s<y&&w++),typeof u.type!="function"&&(u.__u|=4)):p!=h&&(p==h-1?w--:p==h+1?w++:(p>h?w--:w++,u.__u|=4))):e.__k[l]=null;if(g)for(l=0;l<y;l++)(d=r[l])!=null&&(2&d.__u)==0&&(d.__e==i&&(i=wo(d)),K1(d,d));return i}function Q1(e,t,r,i){var s,l;if(typeof e.type=="function"){for(s=e.__k,l=0;s&&l<s.length;l++)s[l]&&(s[l].__=e,t=Q1(s[l],t,r,i));return t}e.__e!=t&&(i&&(t&&e.type&&!t.parentNode&&(t=wo(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Tu(e,t){return t=t||[],e==null||typeof e=="boolean"||(bl(e)?e.some(function(r){Tu(r,t)}):t.push(e)),t}function wk(e,t,r,i){var s,l,u,d=e.key,h=e.type,p=t[r],y=p!=null&&(2&p.__u)==0;if(p===null&&e.key==null||y&&d==p.key&&h==p.type)return r;if(i>(y?1:0)){for(s=r-1,l=r+1;s>=0||l<t.length;)if((p=t[u=s>=0?s--:l++])!=null&&(2&p.__u)==0&&d==p.key&&h==p.type)return u}return-1}function _b(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||yk.test(t)?r:r+"px"}function Xc(e,t,r,i,s){var l,u;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)r&&t in r||_b(e.style,t,"");if(r)for(t in r)i&&r[t]==i[t]||_b(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")l=t!=(t=t.replace(X1,"$1")),u=t.toLowerCase(),t=u in e||t=="onFocusOut"||t=="onFocusIn"?u.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+l]=r,r?i?r.u=i.u:(r.u=Am,e.addEventListener(t,l?Op:Mp,l)):e.removeEventListener(t,l?Op:Mp,l);else{if(s=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function Sb(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=Am++;else if(t.t<r.u)return;return r(_e.event?_e.event(t):t)}}}function Rm(e,t,r,i,s,l,u,d,h,p){var y,g,w,b,_,T,M,S,C,A,U,D,P,V,ee,ne,ue,se=t.type;if(t.constructor!=null)return null;128&r.__u&&(h=!!(32&r.__u),l=[d=t.__e=r.__e]),(y=_e.__b)&&y(t);e:if(typeof se=="function")try{if(S=t.props,C="prototype"in se&&se.prototype.render,A=(y=se.contextType)&&i[y.__c],U=y?A?A.props.value:y.__:i,r.__c?M=(g=t.__c=r.__c).__=g.__E:(C?t.__c=g=new se(S,U):(t.__c=g=new jn(S,U),g.constructor=se,g.render=_k),A&&A.sub(g),g.props=S,g.state||(g.state={}),g.context=U,g.__n=i,w=g.__d=!0,g.__h=[],g._sb=[]),C&&g.__s==null&&(g.__s=g.state),C&&se.getDerivedStateFromProps!=null&&(g.__s==g.state&&(g.__s=Ar({},g.__s)),Ar(g.__s,se.getDerivedStateFromProps(S,g.__s))),b=g.props,_=g.state,g.__v=t,w)C&&se.getDerivedStateFromProps==null&&g.componentWillMount!=null&&g.componentWillMount(),C&&g.componentDidMount!=null&&g.__h.push(g.componentDidMount);else{if(C&&se.getDerivedStateFromProps==null&&S!==b&&g.componentWillReceiveProps!=null&&g.componentWillReceiveProps(S,U),!g.__e&&g.shouldComponentUpdate!=null&&g.shouldComponentUpdate(S,g.__s,U)===!1||t.__v==r.__v){for(t.__v!=r.__v&&(g.props=S,g.state=g.__s,g.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(ae){ae&&(ae.__=t)}),D=0;D<g._sb.length;D++)g.__h.push(g._sb[D]);g._sb=[],g.__h.length&&u.push(g);break e}g.componentWillUpdate!=null&&g.componentWillUpdate(S,g.__s,U),C&&g.componentDidUpdate!=null&&g.__h.push(function(){g.componentDidUpdate(b,_,T)})}if(g.context=U,g.props=S,g.__P=e,g.__e=!1,P=_e.__r,V=0,C){for(g.state=g.__s,g.__d=!1,P&&P(t),y=g.render(g.props,g.state,g.context),ee=0;ee<g._sb.length;ee++)g.__h.push(g._sb[ee]);g._sb=[]}else do g.__d=!1,P&&P(t),y=g.render(g.props,g.state,g.context),g.state=g.__s;while(g.__d&&++V<25);g.state=g.__s,g.getChildContext!=null&&(i=Ar(Ar({},i),g.getChildContext())),C&&!w&&g.getSnapshotBeforeUpdate!=null&&(T=g.getSnapshotBeforeUpdate(b,_)),ne=y,y!=null&&y.type===je&&y.key==null&&(ne=Z1(y.props.children)),d=G1(e,bl(ne)?ne:[ne],t,r,i,s,l,u,d,h,p),g.base=t.__e,t.__u&=-161,g.__h.length&&u.push(g),M&&(g.__E=g.__=null)}catch(ae){if(t.__v=null,h||l!=null)if(ae.then){for(t.__u|=h?160:128;d&&d.nodeType==8&&d.nextSibling;)d=d.nextSibling;l[l.indexOf(d)]=null,t.__e=d}else{for(ue=l.length;ue--;)zm(l[ue]);Ap(t)}else t.__e=r.__e,t.__k=r.__k,ae.then||Ap(t);_e.__e(ae,t,r)}else l==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):d=t.__e=xk(r.__e,t,r,i,s,l,u,h,p);return(y=_e.diffed)&&y(t),128&t.__u?void 0:d}function Ap(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(Ap)}function W1(e,t,r){for(var i=0;i<r.length;i++)Dm(r[i],r[++i],r[++i]);_e.__c&&_e.__c(t,e),e.some(function(s){try{e=s.__h,s.__h=[],e.some(function(l){l.call(s)})}catch(l){_e.__e(l,s.__v)}})}function Z1(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:bl(e)?e.map(Z1):Ar({},e)}function xk(e,t,r,i,s,l,u,d,h){var p,y,g,w,b,_,T,M=r.props,S=t.props,C=t.type;if(C=="svg"?s="http://www.w3.org/2000/svg":C=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),l!=null){for(p=0;p<l.length;p++)if((b=l[p])&&"setAttribute"in b==!!C&&(C?b.localName==C:b.nodeType==3)){e=b,l[p]=null;break}}if(e==null){if(C==null)return document.createTextNode(S);e=document.createElementNS(s,C,S.is&&S),d&&(_e.__m&&_e.__m(t,l),d=!1),l=null}if(C==null)M===S||d&&e.data==S||(e.data=S);else{if(l=l&&Gu.call(e.childNodes),M=r.props||al,!d&&l!=null)for(M={},p=0;p<e.attributes.length;p++)M[(b=e.attributes[p]).name]=b.value;for(p in M)if(b=M[p],p!="children"){if(p=="dangerouslySetInnerHTML")g=b;else if(!(p in S)){if(p=="value"&&"defaultValue"in S||p=="checked"&&"defaultChecked"in S)continue;Xc(e,p,null,b,s)}}for(p in S)b=S[p],p=="children"?w=b:p=="dangerouslySetInnerHTML"?y=b:p=="value"?_=b:p=="checked"?T=b:d&&typeof b!="function"||M[p]===b||Xc(e,p,b,M[p],s);if(y)d||g&&(y.__html==g.__html||y.__html==e.innerHTML)||(e.innerHTML=y.__html),t.__k=[];else if(g&&(e.innerHTML=""),G1(t.type=="template"?e.content:e,bl(w)?w:[w],t,r,i,C=="foreignObject"?"http://www.w3.org/1999/xhtml":s,l,u,l?l[0]:r.__k&&wo(r,0),d,h),l!=null)for(p=l.length;p--;)zm(l[p]);d||(p="value",C=="progress"&&_==null?e.removeAttribute("value"):_!=null&&(_!==e[p]||C=="progress"&&!_||C=="option"&&_!=M[p])&&Xc(e,p,_,M[p],s),p="checked",T!=null&&T!=e[p]&&Xc(e,p,T,M[p],s))}return e}function Dm(e,t,r){try{if(typeof e=="function"){var i=typeof e.__u=="function";i&&e.__u(),i&&t==null||(e.__u=e(t))}else e.current=t}catch(s){_e.__e(s,r)}}function K1(e,t,r){var i,s;if(_e.unmount&&_e.unmount(e),(i=e.ref)&&(i.current&&i.current!=e.__e||Dm(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(l){_e.__e(l,t)}i.base=i.__P=null}if(i=e.__k)for(s=0;s<i.length;s++)i[s]&&K1(i[s],t,r||typeof e.type!="function");r||zm(e.__e),e.__c=e.__=e.__e=void 0}function _k(e,t,r){return this.constructor(e,r)}function Qs(e,t,r){var i,s,l,u;t==document&&(t=document.documentElement),_e.__&&_e.__(e,t),s=(i=!1)?null:t.__k,l=[],u=[],Rm(t,e=t.__k=ii(je,null,[e]),s||al,al,t.namespaceURI,s?null:t.firstChild?Gu.call(t.childNodes):null,l,s?s.__e:t.firstChild,i,u),W1(l,e,u)}function J1(e){function t(r){var i,s;return this.getChildContext||(i=new Set,(s={})[t.__c]=this,this.getChildContext=function(){return s},this.componentWillUnmount=function(){i=null},this.shouldComponentUpdate=function(l){this.props.value!=l.value&&i.forEach(function(u){u.__e=!0,Np(u)})},this.sub=function(l){i.add(l);var u=l.componentWillUnmount;l.componentWillUnmount=function(){i&&i.delete(l),u&&u.call(l)}}),r.children}return t.__c="__cC"+F1++,t.__=e,t.Provider=t.__l=(t.Consumer=function(r,i){return r.children(i)}).contextType=t,t}Gu=P1.slice,_e={__e:function(e,t,r,i){for(var s,l,u;t=t.__;)if((s=t.__c)&&!s.__)try{if((l=s.constructor)&&l.getDerivedStateFromError!=null&&(s.setState(l.getDerivedStateFromError(e)),u=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,i||{}),u=s.__d),u)return s.__E=s}catch(d){e=d}throw e}},I1=0,q1=function(e){return e!=null&&e.constructor==null},jn.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Ar({},this.state),typeof e=="function"&&(e=e(Ar({},r),this.props)),e&&Ar(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),Np(this))},jn.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Np(this))},jn.prototype.render=je,Qa=[],Y1=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,B1=function(e,t){return e.__v.__b-t.__v.__b},Su.__r=0,X1=/(PointerCapture)$|Capture$/i,Am=0,Mp=Sb(!1),Op=Sb(!0),F1=0;var oi,nt,Eh,Tb,il=0,ex=[],ht=_e,kb=ht.__b,Eb=ht.__r,Cb=ht.diffed,Mb=ht.__c,Ob=ht.unmount,Nb=ht.__;function wl(e,t){ht.__h&&ht.__h(nt,e,il||t),il=0;var r=nt.__H||(nt.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function Ne(e){return il=1,Sk(tx,e)}function Sk(e,t,r){var i=wl(oi++,2);if(i.t=e,!i.__c&&(i.__=[r?r(t):tx(void 0,t),function(d){var h=i.__N?i.__N[0]:i.__[0],p=i.t(h,d);h!==p&&(i.__N=[p,i.__[1]],i.__c.setState({}))}],i.__c=nt,!nt.__f)){var s=function(d,h,p){if(!i.__c.__H)return!0;var y=i.__c.__H.__.filter(function(w){return!!w.__c});if(y.every(function(w){return!w.__N}))return!l||l.call(this,d,h,p);var g=i.__c.props!==d;return y.forEach(function(w){if(w.__N){var b=w.__[0];w.__=w.__N,w.__N=void 0,b!==w.__[0]&&(g=!0)}}),l&&l.call(this,d,h,p)||g};nt.__f=!0;var l=nt.shouldComponentUpdate,u=nt.componentWillUpdate;nt.componentWillUpdate=function(d,h,p){if(this.__e){var y=l;l=void 0,s(d,h,p),l=y}u&&u.call(this,d,h,p)},nt.shouldComponentUpdate=s}return i.__N||i.__}function Me(e,t){var r=wl(oi++,3);!ht.__s&&Lm(r.__H,t)&&(r.__=e,r.u=t,nt.__H.__h.push(r))}function jm(e,t){var r=wl(oi++,4);!ht.__s&&Lm(r.__H,t)&&(r.__=e,r.u=t,nt.__h.push(r))}function he(e){return il=5,Wn(function(){return{current:e}},[])}function Wn(e,t){var r=wl(oi++,7);return Lm(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function ft(e,t){return il=8,Wn(function(){return e},t)}function Um(e){var t=nt.context[e.__c],r=wl(oi++,9);return r.c=e,t?(r.__==null&&(r.__=!0,t.sub(nt)),t.props.value):e.__}function Tk(){for(var e;e=ex.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(uu),e.__H.__h.forEach(zp),e.__H.__h=[]}catch(t){e.__H.__h=[],ht.__e(t,e.__v)}}ht.__b=function(e){nt=null,kb&&kb(e)},ht.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Nb&&Nb(e,t)},ht.__r=function(e){Eb&&Eb(e),oi=0;var t=(nt=e.__c).__H;t&&(Eh===nt?(t.__h=[],nt.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(uu),t.__h.forEach(zp),t.__h=[],oi=0)),Eh=nt},ht.diffed=function(e){Cb&&Cb(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(ex.push(t)!==1&&Tb===ht.requestAnimationFrame||((Tb=ht.requestAnimationFrame)||kk)(Tk)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),Eh=nt=null},ht.__c=function(e,t){t.some(function(r){try{r.__h.forEach(uu),r.__h=r.__h.filter(function(i){return!i.__||zp(i)})}catch(i){t.some(function(s){s.__h&&(s.__h=[])}),t=[],ht.__e(i,r.__v)}}),Mb&&Mb(e,t)},ht.unmount=function(e){Ob&&Ob(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(i){try{uu(i)}catch(s){t=s}}),r.__H=void 0,t&&ht.__e(t,r.__v))};var Ab=typeof requestAnimationFrame=="function";function kk(e){var t,r=function(){clearTimeout(i),Ab&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(r,35);Ab&&(t=requestAnimationFrame(r))}function uu(e){var t=nt,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),nt=t}function zp(e){var t=nt;e.__c=e.__(),nt=t}function Lm(e,t){return!e||e.length!==t.length||t.some(function(r,i){return r!==e[i]})}function tx(e,t){return typeof t=="function"?t(e):t}var Ek=Symbol.for("preact-signals");function $m(){if(ho>1)ho--;else{for(var e,t=!1;Ws!==void 0;){var r=Ws;for(Ws=void 0,Rp++;r!==void 0;){var i=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&rx(r))try{r.c()}catch(s){t||(e=s,t=!0)}r=i}}if(Rp=0,ho--,t)throw e}}var qe=void 0;function ol(e){var t=qe;qe=void 0;try{return e()}finally{qe=t}}var Ws=void 0,ho=0,Rp=0,ku=0;function nx(e){if(qe!==void 0){var t=e.n;if(t===void 0||t.t!==qe)return t={i:0,S:e,p:qe.s,n:void 0,t:qe,e:void 0,x:void 0,r:t},qe.s!==void 0&&(qe.s.n=t),qe.s=t,e.n=t,32&qe.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=qe.s,t.n=void 0,qe.s.n=t,qe.s=t),t}}function jt(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched}jt.prototype.brand=Ek;jt.prototype.h=function(){return!0};jt.prototype.S=function(e){var t=this,r=this.t;r!==e&&e.e===void 0&&(e.x=r,this.t=e,r!==void 0?r.e=e:ol(function(){var i;(i=t.W)==null||i.call(t)}))};jt.prototype.U=function(e){var t=this;if(this.t!==void 0){var r=e.e,i=e.x;r!==void 0&&(r.x=i,e.e=void 0),i!==void 0&&(i.e=r,e.x=void 0),e===this.t&&(this.t=i,i===void 0&&ol(function(){var s;(s=t.Z)==null||s.call(t)}))}};jt.prototype.subscribe=function(e){var t=this;return Qu(function(){var r=t.value,i=qe;qe=void 0;try{e(r)}finally{qe=i}})};jt.prototype.valueOf=function(){return this.value};jt.prototype.toString=function(){return this.value+""};jt.prototype.toJSON=function(){return this.value};jt.prototype.peek=function(){var e=qe;qe=void 0;try{return this.value}finally{qe=e}};Object.defineProperty(jt.prototype,"value",{get:function(){var e=nx(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(Rp>100)throw new Error("Cycle detected");this.v=e,this.i++,ku++,ho++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{$m()}}}});function yt(e,t){return new jt(e,t)}function rx(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function ax(e){for(var t=e.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function ix(e){for(var t=e.s,r=void 0;t!==void 0;){var i=t.p;t.i===-1?(t.S.U(t),i!==void 0&&(i.n=t.n),t.n!==void 0&&(t.n.p=i)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=i}e.s=r}function di(e,t){jt.call(this,void 0),this.x=e,this.s=void 0,this.g=ku-1,this.f=4,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched}di.prototype=new jt;di.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===ku))return!0;if(this.g=ku,this.f|=1,this.i>0&&!rx(this))return this.f&=-2,!0;var e=qe;try{ax(this),qe=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return qe=e,ix(this),this.f&=-2,!0};di.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}jt.prototype.S.call(this,e)};di.prototype.U=function(e){if(this.t!==void 0&&(jt.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};di.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(di.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=nx(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function fi(e,t){return new di(e,t)}function ox(e){var t=e.u;if(e.u=void 0,typeof t=="function"){ho++;var r=qe;qe=void 0;try{t()}catch(i){throw e.f&=-2,e.f|=8,Hm(e),i}finally{qe=r,$m()}}}function Hm(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,ox(e)}function Ck(e){if(qe!==this)throw new Error("Out-of-order effect");ix(this),qe=e,this.f&=-2,8&this.f&&Hm(this),$m()}function Oo(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}Oo.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};Oo.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,ox(this),ax(this),ho++;var e=qe;return qe=this,Ck.bind(this,e)};Oo.prototype.N=function(){2&this.f||(this.f|=2,this.o=Ws,Ws=this)};Oo.prototype.d=function(){this.f|=8,1&this.f||Hm(this)};Oo.prototype.dispose=function(){this.d()};function Qu(e){var t=new Oo(e);try{t.c()}catch(i){throw t.d(),i}var r=t.d.bind(t);return r[Symbol.dispose]=r,r}var Ch;function No(e,t){_e[e]=t.bind(null,_e[e]||function(){})}function Eu(e){Ch&&Ch(),Ch=e&&e.S()}function sx(e){var t=this,r=e.data,i=Ok(r);i.value=r;var s=Wn(function(){for(var l=t.__v;l=l.__;)if(l.__c){l.__c.__$f|=4;break}return t.__$u.c=function(){var u,d=t.__$u.S(),h=s.value;d(),q1(h)||((u=t.base)==null?void 0:u.nodeType)!==3?(t.__$f|=1,t.setState({})):t.base.data=h},fi(function(){var u=i.value.value;return u===0?0:u===!0?"":u||""})},[]);return s.value}sx.displayName="_st";Object.defineProperties(jt.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:sx},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});No("__b",function(e,t){if(typeof t.type=="string"){var r,i=t.props;for(var s in i)if(s!=="children"){var l=i[s];l instanceof jt&&(r||(t.__np=r={}),r[s]=l,i[s]=l.peek())}}e(t)});No("__r",function(e,t){Eu();var r,i=t.__c;i&&(i.__$f&=-2,(r=i.__$u)===void 0&&(i.__$u=r=function(s){var l;return Qu(function(){l=this}),l.c=function(){i.__$f|=1,i.setState({})},l}())),Eu(r),e(t)});No("__e",function(e,t,r,i){Eu(),e(t,r,i)});No("diffed",function(e,t){Eu();var r;if(typeof t.type=="string"&&(r=t.__e)){var i=t.__np,s=t.props;if(i){var l=r.U;if(l)for(var u in l){var d=l[u];d!==void 0&&!(u in i)&&(d.d(),l[u]=void 0)}else r.U=l={};for(var h in i){var p=l[h],y=i[h];p===void 0?(p=Mk(r,h,y,s),l[h]=p):p.o(y,s)}}}e(t)});function Mk(e,t,r,i){var s=t in e&&e.ownerSVGElement===void 0,l=yt(r);return{o:function(u,d){l.value=u,i=d},d:Qu(function(){var u=l.value.value;i[t]!==u&&(i[t]=u,s?e[t]=u:u?e.setAttribute(t,u):e.removeAttribute(t))})}}No("unmount",function(e,t){if(typeof t.type=="string"){var r=t.__e;if(r){var i=r.U;if(i){r.U=void 0;for(var s in i){var l=i[s];l&&l.d()}}}}else{var u=t.__c;if(u){var d=u.__$u;d&&(u.__$u=void 0,d.d())}}e(t)});No("__h",function(e,t,r,i){(i<3||i===9)&&(t.__$f|=2),e(t,r,i)});jn.prototype.shouldComponentUpdate=function(e,t){var r=this.__$u,i=r&&r.s!==void 0;for(var s in t)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(i||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(i||4&this.__$f)||3&this.__$f)return!0;for(var l in e)if(l!=="__source"&&e[l]!==this.props[l])return!0;for(var u in this.props)if(!(u in e))return!0;return!1};function Ok(e){return Wn(function(){return yt(e)},[])}function sl(e){var t=he(e);t.current=e,Me(function(){return Qu(function(){return t.current()})},[])}function lx(e,t){for(var r in t)e[r]=t[r];return e}function Dp(e,t){for(var r in e)if(r!=="__source"&&!(r in t))return!0;for(var i in t)if(i!=="__source"&&e[i]!==t[i])return!0;return!1}function Nk(e,t){var r=t(),i=Ne({t:{__:r,u:t}}),s=i[0].t,l=i[1];return jm(function(){s.__=r,s.u=t,Mh(s)&&l({t:s})},[e,r,t]),Me(function(){return Mh(s)&&l({t:s}),e(function(){Mh(s)&&l({t:s})})},[e]),r}function Mh(e){var t,r,i=e.u,s=e.__;try{var l=i();return!((t=s)===(r=l)&&(t!==0||1/t==1/r)||t!=t&&r!=r)}catch{return!0}}function zb(e,t){this.props=e,this.context=t}function Wu(e,t){function r(s){var l=this.props.ref,u=l==s.ref;return!u&&l&&(l.call?l(null):l.current=null),t?!t(this.props,s)||!u:Dp(this.props,s)}function i(s){return this.shouldComponentUpdate=r,ii(e,s)}return i.displayName="Memo("+(e.displayName||e.name)+")",i.prototype.isReactComponent=!0,i.__f=!0,i.type=e,i}(zb.prototype=new jn).isPureReactComponent=!0,zb.prototype.shouldComponentUpdate=function(e,t){return Dp(this.props,e)||Dp(this.state,t)};var Rb=_e.__b;_e.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Rb&&Rb(e)};var Ak=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Im(e){function t(r){var i=lx({},r);return delete i.ref,e(i,r.ref||null)}return t.$$typeof=Ak,t.render=e,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var zk=_e.__e;_e.__e=function(e,t,r,i){if(e.then){for(var s,l=t;l=l.__;)if((s=l.__c)&&s.__c)return t.__e==null&&(t.__e=r.__e,t.__k=r.__k),s.__c(e,t)}zk(e,t,r,i)};var Db=_e.unmount;function cx(e,t,r){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(i){typeof i.__c=="function"&&i.__c()}),e.__c.__H=null),(e=lx({},e)).__c!=null&&(e.__c.__P===r&&(e.__c.__P=t),e.__c.__e=!0,e.__c=null),e.__k=e.__k&&e.__k.map(function(i){return cx(i,t,r)})),e}function ux(e,t,r){return e&&r&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(i){return ux(i,t,r)}),e.__c&&e.__c.__P===t&&(e.__e&&r.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=r)),e}function Oh(){this.__u=0,this.o=null,this.__b=null}function dx(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function Fc(){this.i=null,this.l=null}_e.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Db&&Db(e)},(Oh.prototype=new jn).__c=function(e,t){var r=t.__c,i=this;i.o==null&&(i.o=[]),i.o.push(r);var s=dx(i.__v),l=!1,u=function(){l||(l=!0,r.__R=null,s?s(d):d())};r.__R=u;var d=function(){if(!--i.__u){if(i.state.__a){var h=i.state.__a;i.__v.__k[0]=ux(h,h.__c.__P,h.__c.__O)}var p;for(i.setState({__a:i.__b=null});p=i.o.pop();)p.forceUpdate()}};i.__u++||32&t.__u||i.setState({__a:i.__b=i.__v.__k[0]}),e.then(u,u)},Oh.prototype.componentWillUnmount=function(){this.o=[]},Oh.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=cx(this.__b,r,i.__O=i.__P)}this.__b=null}var s=t.__a&&ii(je,null,e.fallback);return s&&(s.__u&=-33),[ii(je,null,t.__a?null:e.children),s]};var jb=function(e,t,r){if(++r[1]===r[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(r=e.i;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.i=r=r[2]}};function Rk(e){return this.getChildContext=function(){return e.context},e.children}function Dk(e){var t=this,r=e.h;if(t.componentWillUnmount=function(){Qs(null,t.v),t.v=null,t.h=null},t.h&&t.h!==r&&t.componentWillUnmount(),!t.v){for(var i=t.__v;i!==null&&!i.__m&&i.__!==null;)i=i.__;t.h=r,t.v={nodeType:1,parentNode:r,childNodes:[],__k:{__m:i.__m},contains:function(){return!0},insertBefore:function(s,l){this.childNodes.push(s),t.h.insertBefore(s,l)},removeChild:function(s){this.childNodes.splice(this.childNodes.indexOf(s)>>>1,1),t.h.removeChild(s)}}}Qs(ii(Rk,{context:t.context},e.__v),t.v)}function jk(e,t){var r=ii(Dk,{__v:e,h:t});return r.containerInfo=t,r}(Fc.prototype=new jn).__a=function(e){var t=this,r=dx(t.__v),i=t.l.get(e);return i[0]++,function(s){var l=function(){t.props.revealOrder?(i.push(s),jb(t,e,i)):s()};r?r(l):l()}},Fc.prototype.render=function(e){this.i=null,this.l=new Map;var t=Tu(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var r=t.length;r--;)this.l.set(t[r],this.i=[1,0,this.i]);return e.children},Fc.prototype.componentDidUpdate=Fc.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,r){jb(e,r,t)})};var Uk=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Lk=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,$k=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Hk=/[A-Z0-9]/g,Ik=typeof document<"u",qk=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};jn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(jn.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Ub=_e.event;function Yk(){}function Bk(){return this.cancelBubble}function Xk(){return this.defaultPrevented}_e.event=function(e){return Ub&&(e=Ub(e)),e.persist=Yk,e.isPropagationStopped=Bk,e.isDefaultPrevented=Xk,e.nativeEvent=e};var Fk={enumerable:!1,configurable:!0,get:function(){return this.class}},Lb=_e.vnode;_e.vnode=function(e){typeof e.type=="string"&&function(t){var r=t.props,i=t.type,s={},l=i.indexOf("-")===-1;for(var u in r){var d=r[u];if(!(u==="value"&&"defaultValue"in r&&d==null||Ik&&u==="children"&&i==="noscript"||u==="class"||u==="className")){var h=u.toLowerCase();u==="defaultValue"&&"value"in r&&r.value==null?u="value":u==="download"&&d===!0?d="":h==="translate"&&d==="no"?d=!1:h[0]==="o"&&h[1]==="n"?h==="ondoubleclick"?u="ondblclick":h!=="onchange"||i!=="input"&&i!=="textarea"||qk(r.type)?h==="onfocus"?u="onfocusin":h==="onblur"?u="onfocusout":$k.test(u)&&(u=h):h=u="oninput":l&&Lk.test(u)?u=u.replace(Hk,"-$&").toLowerCase():d===null&&(d=void 0),h==="oninput"&&s[u=h]&&(u="oninputCapture"),s[u]=d}}i=="select"&&s.multiple&&Array.isArray(s.value)&&(s.value=Tu(r.children).forEach(function(p){p.props.selected=s.value.indexOf(p.props.value)!=-1})),i=="select"&&s.defaultValue!=null&&(s.value=Tu(r.children).forEach(function(p){p.props.selected=s.multiple?s.defaultValue.indexOf(p.props.value)!=-1:s.defaultValue==p.props.value})),r.class&&!r.className?(s.class=r.class,Object.defineProperty(s,"className",Fk)):(r.className&&!r.class||r.class&&r.className)&&(s.class=s.className=r.className),t.props=s}(e),e.$$typeof=Uk,Lb&&Lb(e)};var $b=_e.__r;_e.__r=function(e){$b&&$b(e),e.__c};var Hb=_e.diffed;_e.diffed=function(e){Hb&&Hb(e);var t=e.props,r=e.__e;r!=null&&e.type==="textarea"&&"value"in t&&t.value!==r.value&&(r.value=t.value==null?"":t.value)};var Pk=0;function v(e,t,r,i,s,l){t||(t={});var u,d,h=t;if("ref"in h)for(d in h={},t)d=="ref"?u=t[d]:h[d]=t[d];var p={type:e,props:h,key:r,ref:u,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Pk,__i:-1,__u:0,__source:s,__self:l};if(typeof e=="function"&&(u=e.defaultProps))for(d in u)h[d]===void 0&&(h[d]=u[d]);return _e.vnode&&_e.vnode(p),p}var Nh={exports:{}},Ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ib;function Vk(){if(Ib)return Ee;Ib=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),g=Symbol.iterator;function w(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,T={};function M(O,I,W){this.props=O,this.context=I,this.refs=T,this.updater=W||b}M.prototype.isReactComponent={},M.prototype.setState=function(O,I){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,I,"setState")},M.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function S(){}S.prototype=M.prototype;function C(O,I,W){this.props=O,this.context=I,this.refs=T,this.updater=W||b}var A=C.prototype=new S;A.constructor=C,_(A,M.prototype),A.isPureReactComponent=!0;var U=Array.isArray,D={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function V(O,I,W,J,te,ie){return W=ie.ref,{$$typeof:e,type:O,key:I,ref:W!==void 0?W:null,props:ie}}function ee(O,I){return V(O.type,I,void 0,void 0,void 0,O.props)}function ne(O){return typeof O=="object"&&O!==null&&O.$$typeof===e}function ue(O){var I={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(W){return I[W]})}var se=/\/+/g;function ae(O,I){return typeof O=="object"&&O!==null&&O.key!=null?ue(""+O.key):I.toString(36)}function be(){}function xe(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(be,be):(O.status="pending",O.then(function(I){O.status==="pending"&&(O.status="fulfilled",O.value=I)},function(I){O.status==="pending"&&(O.status="rejected",O.reason=I)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function Se(O,I,W,J,te){var ie=typeof O;(ie==="undefined"||ie==="boolean")&&(O=null);var re=!1;if(O===null)re=!0;else switch(ie){case"bigint":case"string":case"number":re=!0;break;case"object":switch(O.$$typeof){case e:case t:re=!0;break;case y:return re=O._init,Se(re(O._payload),I,W,J,te)}}if(re)return te=te(O),re=J===""?"."+ae(O,0):J,U(te)?(W="",re!=null&&(W=re.replace(se,"$&/")+"/"),Se(te,I,W,"",function(ke){return ke})):te!=null&&(ne(te)&&(te=ee(te,W+(te.key==null||O&&O.key===te.key?"":(""+te.key).replace(se,"$&/")+"/")+re)),I.push(te)),1;re=0;var ve=J===""?".":J+":";if(U(O))for(var de=0;de<O.length;de++)J=O[de],ie=ve+ae(J,de),re+=Se(J,I,W,ie,te);else if(de=w(O),typeof de=="function")for(O=de.call(O),de=0;!(J=O.next()).done;)J=J.value,ie=ve+ae(J,de++),re+=Se(J,I,W,ie,te);else if(ie==="object"){if(typeof O.then=="function")return Se(xe(O),I,W,J,te);throw I=String(O),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.")}return re}function E(O,I,W){if(O==null)return O;var J=[],te=0;return Se(O,J,"","",function(ie){return I.call(W,ie,te++)}),J}function N(O){if(O._status===-1){var I=O._result;I=I(),I.then(function(W){(O._status===0||O._status===-1)&&(O._status=1,O._result=W)},function(W){(O._status===0||O._status===-1)&&(O._status=2,O._result=W)}),O._status===-1&&(O._status=0,O._result=I)}if(O._status===1)return O._result.default;throw O._result}var R=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var I=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(I))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function B(){}return Ee.Children={map:E,forEach:function(O,I,W){E(O,function(){I.apply(this,arguments)},W)},count:function(O){var I=0;return E(O,function(){I++}),I},toArray:function(O){return E(O,function(I){return I})||[]},only:function(O){if(!ne(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ee.Component=M,Ee.Fragment=r,Ee.Profiler=s,Ee.PureComponent=C,Ee.StrictMode=i,Ee.Suspense=h,Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,Ee.__COMPILER_RUNTIME={__proto__:null,c:function(O){return D.H.useMemoCache(O)}},Ee.cache=function(O){return function(){return O.apply(null,arguments)}},Ee.cloneElement=function(O,I,W){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var J=_({},O.props),te=O.key,ie=void 0;if(I!=null)for(re in I.ref!==void 0&&(ie=void 0),I.key!==void 0&&(te=""+I.key),I)!P.call(I,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&I.ref===void 0||(J[re]=I[re]);var re=arguments.length-2;if(re===1)J.children=W;else if(1<re){for(var ve=Array(re),de=0;de<re;de++)ve[de]=arguments[de+2];J.children=ve}return V(O.type,te,void 0,void 0,ie,J)},Ee.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:l,_context:O},O},Ee.createElement=function(O,I,W){var J,te={},ie=null;if(I!=null)for(J in I.key!==void 0&&(ie=""+I.key),I)P.call(I,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(te[J]=I[J]);var re=arguments.length-2;if(re===1)te.children=W;else if(1<re){for(var ve=Array(re),de=0;de<re;de++)ve[de]=arguments[de+2];te.children=ve}if(O&&O.defaultProps)for(J in re=O.defaultProps,re)te[J]===void 0&&(te[J]=re[J]);return V(O,ie,void 0,void 0,null,te)},Ee.createRef=function(){return{current:null}},Ee.forwardRef=function(O){return{$$typeof:d,render:O}},Ee.isValidElement=ne,Ee.lazy=function(O){return{$$typeof:y,_payload:{_status:-1,_result:O},_init:N}},Ee.memo=function(O,I){return{$$typeof:p,type:O,compare:I===void 0?null:I}},Ee.startTransition=function(O){var I=D.T,W={};D.T=W;try{var J=O(),te=D.S;te!==null&&te(W,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(B,R)}catch(ie){R(ie)}finally{D.T=I}},Ee.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},Ee.use=function(O){return D.H.use(O)},Ee.useActionState=function(O,I,W){return D.H.useActionState(O,I,W)},Ee.useCallback=function(O,I){return D.H.useCallback(O,I)},Ee.useContext=function(O){return D.H.useContext(O)},Ee.useDebugValue=function(){},Ee.useDeferredValue=function(O,I){return D.H.useDeferredValue(O,I)},Ee.useEffect=function(O,I,W){var J=D.H;if(typeof W=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(O,I)},Ee.useId=function(){return D.H.useId()},Ee.useImperativeHandle=function(O,I,W){return D.H.useImperativeHandle(O,I,W)},Ee.useInsertionEffect=function(O,I){return D.H.useInsertionEffect(O,I)},Ee.useLayoutEffect=function(O,I){return D.H.useLayoutEffect(O,I)},Ee.useMemo=function(O,I){return D.H.useMemo(O,I)},Ee.useOptimistic=function(O,I){return D.H.useOptimistic(O,I)},Ee.useReducer=function(O,I,W){return D.H.useReducer(O,I,W)},Ee.useRef=function(O){return D.H.useRef(O)},Ee.useState=function(O){return D.H.useState(O)},Ee.useSyncExternalStore=function(O,I,W){return D.H.useSyncExternalStore(O,I,W)},Ee.useTransition=function(){return D.H.useTransition()},Ee.version="19.1.0",Ee}var qb;function xl(){return qb||(qb=1,Nh.exports=Vk()),Nh.exports}var pe=xl();const Ft=km(pe);Array.prototype.toSorted||Object.defineProperty(Array.prototype,"toSorted",{value:function(e){return[...this].sort(e)},writable:!0,configurable:!0});function Gk(e,t){return t-e}function Qk(e){let t=e[0].name;const r=e.length,i=Math.min(4,r);for(let s=1;s<i;s++)t+=`, ${e[s].name}`;return t}function Wk(e){let t=e[0].time;for(let r=1,i=e.length;r<i;r++)t+=e[r].time;return t}function Zk(e){for(let t=0,r=e.length;t<r;t++)if(e[t].forget)return!0;return!1}var Kk=e=>{let t="";const r=new Map;for(const u of e){const{forget:d,time:h,aggregatedCount:p,name:y}=u;r.has(p)||r.set(p,[]);const g=r.get(p);g&&g.push({name:y,forget:d,time:h??0})}const i=Array.from(r.keys()).sort(Gk),s=[];let l=0;for(const u of i){const d=r.get(u);if(!d)continue;let h=Qk(d);const p=Wk(d),y=Zk(d);l+=p,d.length>4&&(h+="…"),u>1&&(h+=` × ${u}`),y&&(h=`✨${h}`),s.push(h)}return t=s.join(", "),t.length?(t.length>40&&(t=`${t.slice(0,40)}…`),l>=.01&&(t+=` (${Number(l.toFixed(2))}ms)`),t):null};function Sa(e,t){return e===t||e!==e&&t!==t}var qm=e=>{const t=e.createOscillator(),r=e.createGain();t.connect(r),r.connect(e.destination);const i={type:"sine",freq:[392,600],duration:.3,gain:.12},s=i.freq,l=i.duration/s.length;s.forEach((u,d)=>{t.frequency.setValueAtTime(u,e.currentTime+d*l)}),t.type=i.type,r.gain.setValueAtTime(i.gain,e.currentTime),r.gain.setTargetAtTime(0,e.currentTime+i.duration*.7,.05),t.start(),t.stop(e.currentTime+i.duration)},Jk=e=>new Promise(t=>{const r=new Map,i=new IntersectionObserver(s=>{for(const l of s){const u=l.target,d=l.boundingClientRect;r.set(u,d)}i.disconnect(),t(r)});for(const s of e)i.observe(s)}),e4={mount:1,update:2,unmount:4},st=Im(({size:e=15,name:t,fill:r="currentColor",stroke:i="currentColor",className:s,externalURL:l="",style:u},d)=>{const h=Array.isArray(e)?e[0]:e,p=Array.isArray(e)?e[1]||e[0]:e,y=`${l}#${t}`;return v("svg",{ref:d,width:`${h}px`,height:`${p}px`,fill:r,stroke:i,className:s,style:{...u,minWidth:`${h}px`,maxWidth:`${h}px`,minHeight:`${p}px`,maxHeight:`${p}px`},children:[v("title",{children:t}),v("use",{href:y})]})}),we=24,vt={width:550,height:350,initialHeight:400},Fn=240,zr="react-scan-widget-settings-v2",du="react-scan-widget-collapsed-v1",no="react-scan-widget-last-view-v1",cr=typeof window<"u";function fx(e){var t,r,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=fx(e[t]))&&(i&&(i+=" "),i+=r)}else for(r in e)e[r]&&(i&&(i+=" "),i+=r);return i}function t4(){for(var e,t,r=0,i="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=fx(e))&&(i&&(i+=" "),i+=t);return i}var Ym="-",n4=e=>{const t=a4(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:i}=e;return{getClassGroupId:u=>{const d=u.split(Ym);return d[0]===""&&d.length!==1&&d.shift(),hx(d,t)||r4(u)},getConflictingClassGroupIds:(u,d)=>{const h=r[u]||[];return d&&i[u]?[...h,...i[u]]:h}}},hx=(e,t)=>{var u;if(e.length===0)return t.classGroupId;const r=e[0],i=t.nextPart.get(r),s=i?hx(e.slice(1),i):void 0;if(s)return s;if(t.validators.length===0)return;const l=e.join(Ym);return(u=t.validators.find(({validator:d})=>d(l)))==null?void 0:u.classGroupId},Yb=/^\[(.+)\]$/,r4=e=>{if(Yb.test(e)){const t=Yb.exec(e)[1],r=t==null?void 0:t.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},a4=e=>{const{theme:t,prefix:r}=e,i={nextPart:new Map,validators:[]};return o4(Object.entries(e.classGroups),r).forEach(([l,u])=>{jp(u,i,l,t)}),i},jp=(e,t,r,i)=>{e.forEach(s=>{if(typeof s=="string"){const l=s===""?t:Bb(t,s);l.classGroupId=r;return}if(typeof s=="function"){if(i4(s)){jp(s(i),t,r,i);return}t.validators.push({validator:s,classGroupId:r});return}Object.entries(s).forEach(([l,u])=>{jp(u,Bb(t,l),r,i)})})},Bb=(e,t)=>{let r=e;return t.split(Ym).forEach(i=>{r.nextPart.has(i)||r.nextPart.set(i,{nextPart:new Map,validators:[]}),r=r.nextPart.get(i)}),r},i4=e=>e.isThemeGetter,o4=(e,t)=>t?e.map(([r,i])=>{const s=i.map(l=>typeof l=="string"?t+l:typeof l=="object"?Object.fromEntries(Object.entries(l).map(([u,d])=>[t+u,d])):l);return[r,s]}):e,s4=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,i=new Map;const s=(l,u)=>{r.set(l,u),t++,t>e&&(t=0,i=r,r=new Map)};return{get(l){let u=r.get(l);if(u!==void 0)return u;if((u=i.get(l))!==void 0)return s(l,u),u},set(l,u){r.has(l)?r.set(l,u):s(l,u)}}},px="!",l4=e=>{const{separator:t,experimentalParseClassName:r}=e,i=t.length===1,s=t[0],l=t.length,u=d=>{const h=[];let p=0,y=0,g;for(let M=0;M<d.length;M++){let S=d[M];if(p===0){if(S===s&&(i||d.slice(M,M+l)===t)){h.push(d.slice(y,M)),y=M+l;continue}if(S==="/"){g=M;continue}}S==="["?p++:S==="]"&&p--}const w=h.length===0?d:d.substring(y),b=w.startsWith(px),_=b?w.substring(1):w,T=g&&g>y?g-y:void 0;return{modifiers:h,hasImportantModifier:b,baseClassName:_,maybePostfixModifierPosition:T}};return r?d=>r({className:d,parseClassName:u}):u},c4=e=>{if(e.length<=1)return e;const t=[];let r=[];return e.forEach(i=>{i[0]==="["?(t.push(...r.sort(),i),r=[]):r.push(i)}),t.push(...r.sort()),t},u4=e=>({cache:s4(e.cacheSize),parseClassName:l4(e),...n4(e)}),d4=/\s+/,f4=(e,t)=>{const{parseClassName:r,getClassGroupId:i,getConflictingClassGroupIds:s}=t,l=[],u=e.trim().split(d4);let d="";for(let h=u.length-1;h>=0;h-=1){const p=u[h],{modifiers:y,hasImportantModifier:g,baseClassName:w,maybePostfixModifierPosition:b}=r(p);let _=!!b,T=i(_?w.substring(0,b):w);if(!T){if(!_){d=p+(d.length>0?" "+d:d);continue}if(T=i(w),!T){d=p+(d.length>0?" "+d:d);continue}_=!1}const M=c4(y).join(":"),S=g?M+px:M,C=S+T;if(l.includes(C))continue;l.push(C);const A=s(T,_);for(let U=0;U<A.length;++U){const D=A[U];l.push(S+D)}d=p+(d.length>0?" "+d:d)}return d};function h4(){let e=0,t,r,i="";for(;e<arguments.length;)(t=arguments[e++])&&(r=mx(t))&&(i&&(i+=" "),i+=r);return i}var mx=e=>{if(typeof e=="string")return e;let t,r="";for(let i=0;i<e.length;i++)e[i]&&(t=mx(e[i]))&&(r&&(r+=" "),r+=t);return r};function p4(e,...t){let r,i,s,l=u;function u(h){const p=t.reduce((y,g)=>g(y),e());return r=u4(p),i=r.cache.get,s=r.cache.set,l=d,d(h)}function d(h){const p=i(h);if(p)return p;const y=f4(h,r);return s(h,y),y}return function(){return l(h4.apply(null,arguments))}}var Je=e=>{const t=r=>r[e]||[];return t.isThemeGetter=!0,t},gx=/^\[(?:([a-z-]+):)?(.+)\]$/i,m4=/^\d+\/\d+$/,g4=new Set(["px","full","screen"]),v4=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,y4=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,b4=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,w4=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,x4=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Mr=e=>po(e)||g4.has(e)||m4.test(e),fa=e=>Ao(e,"length",O4),po=e=>!!e&&!Number.isNaN(Number(e)),Ah=e=>Ao(e,"number",po),zs=e=>!!e&&Number.isInteger(Number(e)),_4=e=>e.endsWith("%")&&po(e.slice(0,-1)),Ce=e=>gx.test(e),ha=e=>v4.test(e),S4=new Set(["length","size","percentage"]),T4=e=>Ao(e,S4,vx),k4=e=>Ao(e,"position",vx),E4=new Set(["image","url"]),C4=e=>Ao(e,E4,A4),M4=e=>Ao(e,"",N4),Rs=()=>!0,Ao=(e,t,r)=>{const i=gx.exec(e);return i?i[1]?typeof t=="string"?i[1]===t:t.has(i[1]):r(i[2]):!1},O4=e=>y4.test(e)&&!b4.test(e),vx=()=>!1,N4=e=>w4.test(e),A4=e=>x4.test(e),z4=()=>{const e=Je("colors"),t=Je("spacing"),r=Je("blur"),i=Je("brightness"),s=Je("borderColor"),l=Je("borderRadius"),u=Je("borderSpacing"),d=Je("borderWidth"),h=Je("contrast"),p=Je("grayscale"),y=Je("hueRotate"),g=Je("invert"),w=Je("gap"),b=Je("gradientColorStops"),_=Je("gradientColorStopPositions"),T=Je("inset"),M=Je("margin"),S=Je("opacity"),C=Je("padding"),A=Je("saturate"),U=Je("scale"),D=Je("sepia"),P=Je("skew"),V=Je("space"),ee=Je("translate"),ne=()=>["auto","contain","none"],ue=()=>["auto","hidden","clip","visible","scroll"],se=()=>["auto",Ce,t],ae=()=>[Ce,t],be=()=>["",Mr,fa],xe=()=>["auto",po,Ce],Se=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],E=()=>["solid","dashed","dotted","double","none"],N=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],R=()=>["start","end","center","between","around","evenly","stretch"],B=()=>["","0",Ce],O=()=>["auto","avoid","all","avoid-page","page","left","right","column"],I=()=>[po,Ce];return{cacheSize:500,separator:":",theme:{colors:[Rs],spacing:[Mr,fa],blur:["none","",ha,Ce],brightness:I(),borderColor:[e],borderRadius:["none","","full",ha,Ce],borderSpacing:ae(),borderWidth:be(),contrast:I(),grayscale:B(),hueRotate:I(),invert:B(),gap:ae(),gradientColorStops:[e],gradientColorStopPositions:[_4,fa],inset:se(),margin:se(),opacity:I(),padding:ae(),saturate:I(),scale:I(),sepia:B(),skew:I(),space:ae(),translate:ae()},classGroups:{aspect:[{aspect:["auto","square","video",Ce]}],container:["container"],columns:[{columns:[ha]}],"break-after":[{"break-after":O()}],"break-before":[{"break-before":O()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Se(),Ce]}],overflow:[{overflow:ue()}],"overflow-x":[{"overflow-x":ue()}],"overflow-y":[{"overflow-y":ue()}],overscroll:[{overscroll:ne()}],"overscroll-x":[{"overscroll-x":ne()}],"overscroll-y":[{"overscroll-y":ne()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[T]}],"inset-x":[{"inset-x":[T]}],"inset-y":[{"inset-y":[T]}],start:[{start:[T]}],end:[{end:[T]}],top:[{top:[T]}],right:[{right:[T]}],bottom:[{bottom:[T]}],left:[{left:[T]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",zs,Ce]}],basis:[{basis:se()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Ce]}],grow:[{grow:B()}],shrink:[{shrink:B()}],order:[{order:["first","last","none",zs,Ce]}],"grid-cols":[{"grid-cols":[Rs]}],"col-start-end":[{col:["auto",{span:["full",zs,Ce]},Ce]}],"col-start":[{"col-start":xe()}],"col-end":[{"col-end":xe()}],"grid-rows":[{"grid-rows":[Rs]}],"row-start-end":[{row:["auto",{span:[zs,Ce]},Ce]}],"row-start":[{"row-start":xe()}],"row-end":[{"row-end":xe()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Ce]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Ce]}],gap:[{gap:[w]}],"gap-x":[{"gap-x":[w]}],"gap-y":[{"gap-y":[w]}],"justify-content":[{justify:["normal",...R()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...R(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...R(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[C]}],px:[{px:[C]}],py:[{py:[C]}],ps:[{ps:[C]}],pe:[{pe:[C]}],pt:[{pt:[C]}],pr:[{pr:[C]}],pb:[{pb:[C]}],pl:[{pl:[C]}],m:[{m:[M]}],mx:[{mx:[M]}],my:[{my:[M]}],ms:[{ms:[M]}],me:[{me:[M]}],mt:[{mt:[M]}],mr:[{mr:[M]}],mb:[{mb:[M]}],ml:[{ml:[M]}],"space-x":[{"space-x":[V]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[V]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Ce,t]}],"min-w":[{"min-w":[Ce,t,"min","max","fit"]}],"max-w":[{"max-w":[Ce,t,"none","full","min","max","fit","prose",{screen:[ha]},ha]}],h:[{h:[Ce,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Ce,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Ce,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Ce,t,"auto","min","max","fit"]}],"font-size":[{text:["base",ha,fa]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Ah]}],"font-family":[{font:[Rs]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Ce]}],"line-clamp":[{"line-clamp":["none",po,Ah]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Mr,Ce]}],"list-image":[{"list-image":["none",Ce]}],"list-style-type":[{list:["none","disc","decimal",Ce]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[S]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[S]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...E(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Mr,fa]}],"underline-offset":[{"underline-offset":["auto",Mr,Ce]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:ae()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Ce]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Ce]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[S]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Se(),k4]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",T4]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},C4]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[_]}],"gradient-via-pos":[{via:[_]}],"gradient-to-pos":[{to:[_]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[d]}],"border-w-x":[{"border-x":[d]}],"border-w-y":[{"border-y":[d]}],"border-w-s":[{"border-s":[d]}],"border-w-e":[{"border-e":[d]}],"border-w-t":[{"border-t":[d]}],"border-w-r":[{"border-r":[d]}],"border-w-b":[{"border-b":[d]}],"border-w-l":[{"border-l":[d]}],"border-opacity":[{"border-opacity":[S]}],"border-style":[{border:[...E(),"hidden"]}],"divide-x":[{"divide-x":[d]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[d]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[S]}],"divide-style":[{divide:E()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...E()]}],"outline-offset":[{"outline-offset":[Mr,Ce]}],"outline-w":[{outline:[Mr,fa]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:be()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[S]}],"ring-offset-w":[{"ring-offset":[Mr,fa]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",ha,M4]}],"shadow-color":[{shadow:[Rs]}],opacity:[{opacity:[S]}],"mix-blend":[{"mix-blend":[...N(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":N()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[i]}],contrast:[{contrast:[h]}],"drop-shadow":[{"drop-shadow":["","none",ha,Ce]}],grayscale:[{grayscale:[p]}],"hue-rotate":[{"hue-rotate":[y]}],invert:[{invert:[g]}],saturate:[{saturate:[A]}],sepia:[{sepia:[D]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[h]}],"backdrop-grayscale":[{"backdrop-grayscale":[p]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[y]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[S]}],"backdrop-saturate":[{"backdrop-saturate":[A]}],"backdrop-sepia":[{"backdrop-sepia":[D]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[u]}],"border-spacing-x":[{"border-spacing-x":[u]}],"border-spacing-y":[{"border-spacing-y":[u]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Ce]}],duration:[{duration:I()}],ease:[{ease:["linear","in","out","in-out",Ce]}],delay:[{delay:I()}],animate:[{animate:["none","spin","ping","pulse","bounce",Ce]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[U]}],"scale-x":[{"scale-x":[U]}],"scale-y":[{"scale-y":[U]}],rotate:[{rotate:[zs,Ce]}],"translate-x":[{"translate-x":[ee]}],"translate-y":[{"translate-y":[ee]}],"skew-x":[{"skew-x":[P]}],"skew-y":[{"skew-y":[P]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Ce]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Ce]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":ae()}],"scroll-mx":[{"scroll-mx":ae()}],"scroll-my":[{"scroll-my":ae()}],"scroll-ms":[{"scroll-ms":ae()}],"scroll-me":[{"scroll-me":ae()}],"scroll-mt":[{"scroll-mt":ae()}],"scroll-mr":[{"scroll-mr":ae()}],"scroll-mb":[{"scroll-mb":ae()}],"scroll-ml":[{"scroll-ml":ae()}],"scroll-p":[{"scroll-p":ae()}],"scroll-px":[{"scroll-px":ae()}],"scroll-py":[{"scroll-py":ae()}],"scroll-ps":[{"scroll-ps":ae()}],"scroll-pe":[{"scroll-pe":ae()}],"scroll-pt":[{"scroll-pt":ae()}],"scroll-pr":[{"scroll-pr":ae()}],"scroll-pb":[{"scroll-pb":ae()}],"scroll-pl":[{"scroll-pl":ae()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Ce]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Mr,fa,Ah]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},R4=p4(z4),L=(...e)=>R4(t4(e));typeof navigator<"u"&&navigator.userAgent.includes("Firefox");var yx=(e,t)=>{let r=0;return i=>{const s=Date.now();if(s-r>=t)return r=s,e(i)}},Ur=e=>{if(!cr)return null;try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}},Zt=(e,t)=>{if(cr)try{window.localStorage.setItem(e,JSON.stringify(t))}catch{}},Xb=e=>{if(cr)try{window.localStorage.removeItem(e)}catch{}},D4=24,j4=12,ll=e=>{if(!e)return{name:"Unknown",wrappers:[],wrapperTypes:[]};const{tag:t,type:r,elementType:i}=e;let s=Ot(r);const l=[],u=[];if(rl(e)||t===yl||t===vl||(r==null?void 0:r.$$typeof)===Symbol.for("react.memo")||(i==null?void 0:i.$$typeof)===Symbol.for("react.memo")){const d=rl(e);u.push({type:"memo",title:d?"This component has been auto-memoized by the React Compiler.":"Memoized component that skips re-renders if props are the same",compiler:d})}if(t===D4&&u.push({type:"lazy",title:"Lazily loaded component that supports code splitting"}),t===Pu&&u.push({type:"suspense",title:"Component that can suspend while content is loading"}),t===j4&&u.push({type:"profiler",title:"Component that measures rendering performance"}),typeof s=="string"){const d=/^(\w+)\((.*)\)$/;let h=s;for(;d.test(h);){const p=h.match(d);if(p!=null&&p[1]&&(p!=null&&p[2]))l.unshift(p[1]),h=p[2];else break}s=h}return{name:s||"Unknown",wrappers:l,wrapperTypes:u}},Zu=yt(!1),Up=yt(null),ir={corner:"bottom-right",dimensions:{isFullWidth:!1,isFullHeight:!1,width:vt.width,height:vt.height,position:{x:we,y:we}},lastDimensions:{isFullWidth:!1,isFullHeight:!1,width:vt.width,height:vt.height,position:{x:we,y:we}},componentsTree:{width:Fn}},U4=()=>{const e=Ur(zr);return e?{corner:e.corner??ir.corner,dimensions:e.dimensions??ir.dimensions,lastDimensions:e.lastDimensions??e.dimensions??ir.lastDimensions,componentsTree:e.componentsTree??ir.componentsTree}:(Zt(zr,{corner:ir.corner,dimensions:ir.dimensions,lastDimensions:ir.lastDimensions,componentsTree:ir.componentsTree}),ir)},le=yt(U4()),zh=()=>{if(!cr)return;const{dimensions:e}=le.value,{width:t,height:r,position:i}=e;le.value={...le.value,dimensions:{isFullWidth:t>=window.innerWidth-we*2,isFullHeight:r>=window.innerHeight-we*2,width:t,height:r,position:i}}},Ke=yt({view:"none"}),L4=Ur(du),fn=yt(L4??null);function $4(){return!1}function Bm(e){function t(r){return this.shouldComponentUpdate=$4,ii(e,r)}return t.displayName=`Memo(${e.displayName||e.name})`,t.prototype.isReactComponent=!0,t._forwarded=!0,t}var H4=e=>{const{count:t,getScrollElement:r,estimateSize:i,overscan:s=5}=e,[l,u]=Ne(0),[d,h]=Ne(0),p=he(),y=he(null),g=he(null),w=i(),b=ft(S=>{var A;if(!y.current)return;const C=((A=S==null?void 0:S[0])==null?void 0:A.contentRect.height)??y.current.getBoundingClientRect().height;h(C)},[]),_=ft(()=>{g.current!==null&&cancelAnimationFrame(g.current),g.current=requestAnimationFrame(()=>{b(),g.current=null})},[b]);Me(()=>{const S=r();if(!S)return;y.current=S;const C=()=>{y.current&&u(y.current.scrollTop)};b(),p.current||(p.current=new ResizeObserver(()=>{_()})),p.current.observe(S),S.addEventListener("scroll",C,{passive:!0});const A=new MutationObserver(_);return A.observe(S,{attributes:!0,childList:!0,subtree:!0}),()=>{S.removeEventListener("scroll",C),p.current&&p.current.disconnect(),A.disconnect(),g.current!==null&&cancelAnimationFrame(g.current)}},[r,b,_]);const T=Wn(()=>{const S=Math.floor(l/w),C=Math.ceil(d/w);return{start:Math.max(0,S-s),end:Math.min(t,S+C+s)}},[l,w,d,t,s]);return{virtualItems:Wn(()=>{const S=[];for(let C=T.start;C<T.end;C++)S.push({key:C,index:C,start:C*w});return S},[T,w]),totalSize:t*w,scrollTop:l,containerHeight:d}};Ur("react-scann-pinned");var I4=e=>{const t=[];let r=e;for(;r;){const i=r.elementType,s=typeof i=="function"?i.displayName||i.name:typeof i=="string"?i:"Unknown",l=r.index!==void 0?`[${r.index}]`:"";t.unshift(`${s}${l}`),r=r.return??null}return t.join("::")},Ba=new WeakMap,q4=(e,t)=>{const r=t.bind(null,e);return document.addEventListener("scroll",r,{passive:!0,capture:!0}),()=>{document.removeEventListener("scroll",r,{capture:!0})}},Y4={activeFlashes:new Map,create(e){const t=e.querySelector(".react-scan-flash-overlay"),r=t instanceof HTMLElement?t:(()=>{const s=document.createElement("div");s.className="react-scan-flash-overlay",e.appendChild(s);const l=q4(e,()=>{e.querySelector(".react-scan-flash-overlay")&&this.create(e)});return this.activeFlashes.set(e,{element:e,overlay:s,scrollCleanup:l}),s})(),i=Ba.get(r);i&&(clearTimeout(i),Ba.delete(r)),requestAnimationFrame(()=>{r.style.transition="none",r.style.opacity="0.9";const s=setTimeout(()=>{r.style.transition="opacity 150ms ease-out",r.style.opacity="0";const l=setTimeout(()=>{r.parentNode&&r.parentNode.removeChild(r);const u=this.activeFlashes.get(e);u!=null&&u.scrollCleanup&&u.scrollCleanup(),this.activeFlashes.delete(e),Ba.delete(r)},150);Ba.set(r,l)},300);Ba.set(r,s)})},cleanup(e){const t=this.activeFlashes.get(e);if(t){const r=Ba.get(t.overlay);r&&(clearTimeout(r),Ba.delete(t.overlay)),t.overlay.parentNode&&t.overlay.parentNode.removeChild(t.overlay),t.scrollCleanup&&t.scrollCleanup(),this.activeFlashes.delete(e)}},cleanupAll(){for(const[,e]of this.activeFlashes)this.cleanup(e.element)}},Fb=1e3,bx={updates:[],currentFiber:null,totalUpdates:0,windowOffset:0,currentIndex:0,isViewingHistory:!1,latestFiber:null,isVisible:!1,playbackSpeed:1},Bt=yt(bx),Xm=yt(0),Za=[],Xa=null,B4=()=>{if(Za.length===0)return;const e=[...Za],{updates:t,totalUpdates:r,currentIndex:i,isViewingHistory:s}=Bt.value,l=[...t];let u=r;for(const{update:y}of e)l.length>=Fb&&l.shift(),l.push(y),u++;const d=Math.max(0,u-Fb);let h;s?i===r-1?h=l.length-1:i===0?h=0:d===0?h=i:h=i-1:h=l.length-1;const p=e[e.length-1];Bt.value={...Bt.value,latestFiber:p.fiber,updates:l,totalUpdates:u,windowOffset:d,currentIndex:h,isViewingHistory:s},Za=Za.slice(e.length)},wx={showTimeline:()=>{Bt.value={...Bt.value,isVisible:!0}},hideTimeline:()=>{Bt.value={...Bt.value,isVisible:!1,currentIndex:Bt.value.updates.length-1}},updateFrame:(e,t)=>{Bt.value={...Bt.value,currentIndex:e,isViewingHistory:t}},updatePlaybackSpeed:e=>{Bt.value={...Bt.value,playbackSpeed:e}},addUpdate:(e,t)=>{if(Za.push({update:e,fiber:t}),!Xa){const r=()=>{B4(),Xa=null,Za.length>0&&(Xa=setTimeout(r,96))};Xa=setTimeout(r,96)}},reset:()=>{Xa&&(clearTimeout(Xa),Xa=null),Za=[],Bt.value=bx}},$t=yt({query:"",matches:[],currentMatchIndex:-1}),Rh=yt(!1),xx=(e,t=0,r=null)=>e.reduce((i,s,l)=>{var p,y;const u=s.element?I4(s.fiber):`${r}-${l}`,d=(p=s.fiber)!=null&&p.type?Rx(s.fiber):void 0,h={...s,depth:t,nodeId:u,parentId:r,fiber:s.fiber,renderData:d};return i.push(h),(y=s.children)!=null&&y.length&&i.push(...xx(s.children,t+1,u)),i},[]),X4=e=>e.reduce((t,r)=>Math.max(t,r.depth),0),F4=(e,t)=>{if(t<=0)return 24;const l=Math.max(0,e-Fn);if(l<24)return 0;const d=Math.min(l*.3,t*24)/t;return Math.max(0,Math.min(24,d))},P4=["memo","forwardRef","lazy","suspense"],_x=e=>{const t=e.match(/\[(.*?)\]/);if(!t)return null;const r=[],i=t[1].split(",");for(const s of i){const l=s.trim().toLowerCase();l&&r.push(l)}return r},V4=e=>{if(e.length===0)return!1;for(const t of e){let r=!1;for(const i of P4)if(i.toLowerCase().includes(t)){r=!0;break}if(!r)return!1}return!0},Sx=(e,t)=>{if(e.length===0)return!0;if(!t.length)return!1;for(const r of e){let i=!1;for(const s of t)if(s.type.toLowerCase().includes(r)){i=!0;break}if(!i)return!1}return!0},G4=(e,t)=>Wn(()=>{const{query:r,matches:i}=t,s=i.some(p=>p.nodeId===e.nodeId),l=_x(r)||[],u=r?r.replace(/\[.*?\]/,"").trim():"";if(!r||!s)return{highlightedText:v("span",{className:"truncate",children:e.label}),typeHighlight:!1};let d=!0;if(l.length>0)if(!e.fiber)d=!1;else{const{wrapperTypes:p}=ll(e.fiber);d=Sx(l,p)}let h=v("span",{className:"truncate",children:e.label});if(u)try{if(u.startsWith("/")&&u.endsWith("/")){const p=u.slice(1,-1),y=new RegExp(`(${p})`,"i"),g=e.label.split(y);h=v("span",{className:"tree-node-search-highlight",children:g.map((w,b)=>y.test(w)?v("span",{className:L("regex",{start:y.test(w)&&b===0,middle:y.test(w)&&b%2===1,end:y.test(w)&&b===g.length-1,"!ml-0":b===1}),children:w},`${e.nodeId}-${w}`):w)})}else{const p=e.label.toLowerCase(),y=u.toLowerCase(),g=p.indexOf(y);g>=0&&(h=v("span",{className:"tree-node-search-highlight",children:[e.label.slice(0,g),v("span",{className:"single",children:e.label.slice(g,g+u.length)}),e.label.slice(g+u.length)]}))}}catch{}return{highlightedText:h,typeHighlight:d&&l.length>0}},[e.label,e.nodeId,e.fiber,t]),Pb=e=>e>0?e<.1-Number.EPSILON?"< 0.1":e<1e3?Number(e.toFixed(1)).toString():`${(e/1e3).toFixed(1)}k`:"0",Q4=({node:e,nodeIndex:t,hasChildren:r,isCollapsed:i,handleTreeNodeClick:s,handleTreeNodeToggle:l,searchValue:u})=>{var b,_;const d=he(null),h=he(((b=e.renderData)==null?void 0:b.renderCount)??0),{highlightedText:p,typeHighlight:y}=G4(e,u);Me(()=>{var S;const T=(S=e.renderData)==null?void 0:S.renderCount,M=d.current;!M||!h.current||!T||h.current===T||(M.classList.remove("count-flash"),M.offsetWidth,M.classList.add("count-flash"),h.current=T)},[(_=e.renderData)==null?void 0:_.renderCount]);const g=Wn(()=>{if(!e.renderData)return null;const{selfTime:T,totalTime:M,renderCount:S}=e.renderData;return S?v("span",{className:L("flex items-center gap-x-0.5 ml-1.5","text-[10px] text-neutral-400"),children:v("span",{ref:d,title:`Self time: ${Pb(T)}ms
Total time: ${Pb(M)}ms`,className:"count-badge",children:["×",S]})}):null},[e.renderData]),w=Wn(()=>{if(!e.fiber)return null;const{wrapperTypes:T}=ll(e.fiber),M=T[0];return v("span",{className:L("flex items-center gap-x-1","text-[10px] text-neutral-400 tracking-wide","overflow-hidden"),children:[M&&v(je,{children:[v("span",{title:M==null?void 0:M.title,className:L("rounded py-[1px] px-1","bg-neutral-700 text-neutral-300","truncate",M.type==="memo"&&"bg-[#8e61e3] text-white",y&&"bg-yellow-300 text-black"),children:M.type},M.type),M.compiler&&v("span",{className:"text-yellow-300 ml-1",children:"✨"})]}),T.length>1&&`×${T.length}`,g]})},[e.fiber,y,g]);return v("button",{type:"button",title:e.title,"data-index":t,className:L("flex items-center gap-x-1","pl-1 pr-2","w-full h-7","text-left","rounded","cursor-pointer select-none"),onClick:s,children:[v("button",{type:"button","data-index":t,onClick:l,className:L("w-6 h-6 flex items-center justify-center","text-left"),children:r&&v(st,{name:"icon-chevron-right",size:12,className:L("transition-transform",!i&&"rotate-90")})}),p,w]})},W4=()=>{const e=he(null),t=he(null),r=he(null),i=he(null),s=he(null),l=he(0),u=he(!1),d=he(!1),h=he(null),[p,y]=Ne([]),[g,w]=Ne(new Set),[b,_]=Ne(void 0),[T,M]=Ne($t.value),S=Wn(()=>{const E=[],N=p,R=new Map(N.map(B=>[B.nodeId,B]));for(const B of N){let O=!0,I=B;for(;I.parentId;){const W=R.get(I.parentId);if(!W)break;if(g.has(W.nodeId)){O=!1;break}I=W}O&&E.push(B)}return E},[g,p]),C=28,{virtualItems:A,totalSize:U}=H4({count:S.length,getScrollElement:()=>e.current,estimateSize:()=>C,overscan:5}),D=ft(E=>{var B;u.current=!0,(B=i.current)==null||B.blur(),Rh.value=!0;const{parentCompositeFiber:N}=Ka(E);if(!N)return;oe.inspectState.value={kind:"focused",focusedDomElement:E,fiber:N};const R=S.findIndex(O=>O.element===E);if(R!==-1){_(R);const O=R*C,I=e.current;if(I){const W=I.clientHeight,J=I.scrollTop;(O<J||O+C>J+W)&&I.scrollTo({top:Math.max(0,O-W/2),behavior:"instant"})}}},[S]),P=ft(E=>{const N=E.currentTarget,R=Number(N.dataset.index);if(Number.isNaN(R))return;const B=S[R].element;B&&D(B)},[S,D]),V=ft(E=>{w(N=>{const R=new Set(N);return R.has(E)?R.delete(E):R.add(E),R})},[]),ee=ft(E=>{E.stopPropagation();const N=E.target,R=Number(N.dataset.index);if(Number.isNaN(R))return;const B=S[R].nodeId;V(B)},[S,V]),ne=ft(E=>{var W,J,te,ie,re;(W=r.current)==null||W.classList.remove("!border-red-500");const N=[];if(!E){$t.value={query:E,matches:N,currentMatchIndex:-1};return}if(E.includes("[")&&!E.includes("]")&&E.length>E.indexOf("[")+1){(J=r.current)==null||J.classList.add("!border-red-500");return}const R=_x(E)||[];if(E.includes("[")&&!V4(R)){(te=r.current)==null||te.classList.add("!border-red-500");return}const B=E.replace(/\[.*?\]/,"").trim(),O=/^\/.*\/$/.test(B);let I=ve=>!1;if(B.startsWith("/")&&!O&&B.length>1){(ie=r.current)==null||ie.classList.add("!border-red-500");return}if(O)try{const ve=B.slice(1,-1),de=new RegExp(ve,"i");I=ke=>de.test(ke)}catch{(re=r.current)==null||re.classList.add("!border-red-500");return}else if(B){const ve=B.toLowerCase();I=de=>de.toLowerCase().includes(ve)}for(const ve of p){let de=!0;if(B&&(de=I(ve.label)),de&&R.length>0)if(!ve.fiber)de=!1;else{const{wrapperTypes:ke}=ll(ve.fiber);de=Sx(R,ke)}de&&N.push(ve)}if($t.value={query:E,matches:N,currentMatchIndex:N.length>0?0:-1},N.length>0){const ve=N[0],de=S.findIndex(ke=>ke.nodeId===ve.nodeId);if(de!==-1){const ke=de*C,$e=e.current;if($e){const qt=$e.clientHeight;$e.scrollTo({top:Math.max(0,ke-qt/2),behavior:"instant"})}}}},[p,S]),ue=ft(E=>{const N=E.currentTarget;N&&ne(N.value)},[ne]),se=ft(E=>{const{matches:N,currentMatchIndex:R}=$t.value;if(N.length===0)return;const B=E==="next"?(R+1)%N.length:(R-1+N.length)%N.length;$t.value={...$t.value,currentMatchIndex:B};const O=N[B],I=S.findIndex(W=>W.nodeId===O.nodeId);if(I!==-1){_(I);const W=I*C,J=e.current;if(J){const te=J.clientHeight;J.scrollTo({top:Math.max(0,W-te/2),behavior:"instant"})}}},[S]),ae=ft(E=>{if(t.current&&(t.current.style.width=`${E}px`),e.current){e.current.style.width=`${E}px`;const N=F4(E,l.current);e.current.style.setProperty("--indentation-size",`${N}px`)}},[]),be=ft(E=>{if(!h.current)return;const N=le.value.dimensions.width,R=Math.floor(N-Fn/2);h.current.classList.remove("cursor-ew-resize","cursor-w-resize","cursor-e-resize"),E<=Fn?h.current.classList.add("cursor-w-resize"):E>=R?h.current.classList.add("cursor-e-resize"):h.current.classList.add("cursor-ew-resize")},[]),xe=ft(E=>{if(E.preventDefault(),E.stopPropagation(),!e.current)return;e.current.style.setProperty("pointer-events","none"),d.current=!0;const N=E.clientX,R=e.current.offsetWidth,B=le.value.dimensions.width,O=Math.floor(B-Fn/2);be(R);const I=J=>{const te=N-J.clientX,ie=R+te;be(ie);const re=Math.min(O,Math.max(Fn,ie));ae(re)},W=()=>{e.current&&(e.current.style.removeProperty("pointer-events"),document.removeEventListener("pointermove",I),document.removeEventListener("pointerup",W),le.value={...le.value,componentsTree:{...le.value.componentsTree,width:e.current.offsetWidth}},Zt(zr,le.value),d.current=!1)};document.addEventListener("pointermove",I),document.addEventListener("pointerup",W)},[ae,be]);Me(()=>{if(!e.current)return;const E=e.current.offsetWidth;return be(E),le.subscribe(()=>{e.current&&be(e.current.offsetWidth)})},[be]);const Se=ft(()=>{u.current=!1},[]);return Me(()=>{let E=!0;const N=W=>{const J=new Map,te=[];for(const{element:ie,name:re,fiber:ve}of W){if(!ie)continue;let de=re;const{name:ke,wrappers:$e}=ll(ve);ke&&($e.length>0?de=`${$e.join("(")}(${ke})${")".repeat($e.length)}`:de=ke),J.set(ie,{label:ke||re,title:de,children:[],element:ie,fiber:ve})}for(const{element:ie,depth:re}of W){if(!ie)continue;const ve=J.get(ie);if(ve)if(re===0)te.push(ve);else{let de=ie.parentElement;for(;de;){const ke=J.get(de);if(ke){ke.children=ke.children||[],ke.children.push(ve);break}de=de.parentElement}}}return te},R=()=>{const W=s.current;if(!W)return;const J=gE(),te=N(J);if(te.length>0){const ie=xx(te),re=X4(ie);if(l.current=re,ae(le.value.componentsTree.width),y(ie),E){E=!1;const ve=ie.findIndex(de=>de.element===W);if(ve!==-1){const de=ve*C,ke=e.current;ke&&setTimeout(()=>{ke.scrollTo({top:de,behavior:"instant"})},96)}}}},B=oe.inspectState.subscribe(W=>{if(W.kind==="focused"){if(Rh.value)return;ne(""),s.current=W.focusedDomElement,R()}});let O=0;const I=Xm.subscribe(()=>{if(oe.inspectState.value.kind==="focused"){if(cancelAnimationFrame(O),d.current)return;O=requestAnimationFrame(()=>{Rh.value=!1,R()})}});return()=>{B(),I(),$t.value={query:"",matches:[],currentMatchIndex:-1}}},[]),Me(()=>{const E=N=>{if(u.current&&b)switch(N.key){case"ArrowUp":{if(N.preventDefault(),N.stopPropagation(),b>0){const R=S[b-1];R!=null&&R.element&&D(R.element)}return}case"ArrowDown":{if(N.preventDefault(),N.stopPropagation(),b<S.length-1){const R=S[b+1];R!=null&&R.element&&D(R.element)}return}case"ArrowLeft":{N.preventDefault(),N.stopPropagation();const R=S[b];R!=null&&R.nodeId&&V(R.nodeId);return}case"ArrowRight":{N.preventDefault(),N.stopPropagation();const R=S[b];R!=null&&R.nodeId&&V(R.nodeId);return}}};return document.addEventListener("keydown",E),()=>{document.removeEventListener("keydown",E)}},[b,S,D,V]),Me(()=>$t.subscribe(M),[]),Me(()=>le.subscribe(N=>{var R;(R=t.current)==null||R.style.setProperty("transition","width 0.1s"),ae(N.componentsTree.width),setTimeout(()=>{var B;(B=t.current)==null||B.style.removeProperty("transition")},500)}),[]),v("div",{className:"react-scan-components-tree flex",children:[v("div",{ref:h,onPointerDown:xe,className:"relative resize-v-line",children:v("span",{children:v(st,{name:"icon-ellipsis",size:18})})}),v("div",{ref:t,className:"flex flex-col h-full",children:[v("div",{className:"p-2 border-b border-[#1e1e1e]",children:v("div",{ref:r,title:`Search components by:

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
`,className:L("relative","flex items-center gap-x-1 px-2","rounded","border border-transparent","focus-within:border-[#454545]","bg-[#1e1e1e] text-neutral-300","transition-colors","whitespace-nowrap","overflow-hidden"),children:[v(st,{name:"icon-search",size:12,className:" text-neutral-500"}),v("div",{className:"relative flex-1 h-7 overflow-hidden",children:v("input",{ref:i,type:"text",value:$t.value.query,onClick:E=>{E.stopPropagation(),E.currentTarget.focus()},onPointerDown:E=>{E.stopPropagation()},onKeyDown:E=>{E.key==="Escape"&&E.currentTarget.blur(),$t.value.matches.length&&(E.key==="Enter"&&E.shiftKey?se("prev"):E.key==="Enter"&&(E.metaKey||E.ctrlKey?(E.preventDefault(),E.stopPropagation(),D($t.value.matches[$t.value.currentMatchIndex].element),E.currentTarget.focus()):se("next")))},onChange:ue,className:"absolute inset-y-0 inset-x-1",placeholder:"Component name, /regex/, or [type]"})}),$t.value.query?v(je,{children:[v("span",{className:"flex items-center gap-x-0.5 text-xs text-neutral-500",children:[$t.value.currentMatchIndex+1,"|",$t.value.matches.length]}),!!$t.value.matches.length&&v(je,{children:[v("button",{type:"button",onClick:E=>{E.stopPropagation(),se("prev")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:v(st,{name:"icon-chevron-right",className:"-rotate-90",size:12})}),v("button",{type:"button",onClick:E=>{E.stopPropagation(),se("next")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:v(st,{name:"icon-chevron-right",className:"rotate-90",size:12})})]}),v("button",{type:"button",onClick:E=>{E.stopPropagation(),ne("")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:v(st,{name:"icon-close",size:12})})]}):!!p.length&&v("span",{className:"text-xs text-neutral-500",children:p.length})]})}),v("div",{className:"flex-1 overflow-hidden",children:v("div",{ref:e,onPointerLeave:Se,className:"tree h-full overflow-auto will-change-transform",children:v("div",{className:"relative w-full",style:{height:U},children:A.map(E=>{var O;const N=S[E.index];if(!N)return null;const R=oe.inspectState.value.kind==="focused"&&N.element===oe.inspectState.value.focusedDomElement,B=E.index===b;return v("div",{className:L("absolute left-0 w-full overflow-hidden","text-neutral-400 hover:text-neutral-300","bg-transparent hover:bg-[#5f3f9a]/20",(R||B)&&"text-neutral-300 bg-[#5f3f9a]/40 hover:bg-[#5f3f9a]/40"),style:{top:E.start,height:C},children:v("div",{className:"w-full h-full",style:{paddingLeft:`calc(${N.depth} * var(--indentation-size))`},children:v(Q4,{node:N,nodeIndex:E.index,hasChildren:!!((O=N.children)!=null&&O.length),isCollapsed:g.has(N.nodeId),handleTreeNodeClick:P,handleTreeNodeToggle:ee,searchValue:T})})},N.nodeId)})})})})]})]})},Cu=Wu(({text:e,children:t,onCopy:r,className:i,iconSize:s=14})=>{const[l,u]=Ne(!1);Me(()=>{if(l){const p=setTimeout(()=>u(!1),600);return()=>{clearTimeout(p)}}},[l]);const d=ft(p=>{p.preventDefault(),p.stopPropagation(),navigator.clipboard.writeText(e).then(()=>{u(!0),r==null||r(!0,e)},()=>{r==null||r(!1,e)})},[e,r]),h=v("button",{onClick:d,type:"button",className:L("z-10","flex items-center justify-center","hover:text-dev-pink-400","transition-colors duration-200 ease-in-out","cursor-pointer",`size-[${s}px]`,i),children:v(st,{name:`icon-${l?"check":"copy"}`,size:[s],className:L(l&&"text-green-500")})});return t?t({ClipboardIcon:h,onClick:d}):h}),Z4=({length:e,expanded:t,onToggle:r,isNegative:i})=>v("div",{className:"flex items-center gap-1",children:[v("button",{type:"button",onClick:r,className:"flex items-center p-0 opacity-50",children:v(st,{name:"icon-chevron-right",size:12,className:L("transition-[color,transform]",i?"text-[#f87171]":"text-[#4ade80]",t&&"rotate-90")})}),v("span",{children:["Array(",e,")"]})]}),Lp=({value:e,path:t,isNegative:r})=>{const[i,s]=Ne(!1);if(!(e!==null&&typeof e=="object"&&!(e instanceof Date)))return v("div",{className:"flex items-center gap-1",children:[v("span",{className:"text-gray-500",children:[t,":"]}),v("span",{className:"truncate",children:Au(e)})]});const u=Object.entries(e);return v("div",{className:"flex flex-col",children:[v("div",{className:"flex items-center gap-1",children:[v("button",{type:"button",onClick:()=>s(!i),className:"flex items-center p-0 opacity-50",children:v(st,{name:"icon-chevron-right",size:12,className:L("transition-[color,transform]",r?"text-[#f87171]":"text-[#4ade80]",i&&"rotate-90")})}),v("span",{className:"text-gray-500",children:[t,":"]}),!i&&v("span",{className:"truncate",children:e instanceof Date?Au(e):`{${Object.keys(e).join(", ")}}`})]}),i&&v("div",{className:"pl-5 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:u.map(([d,h])=>v(Lp,{value:h,path:d,isNegative:r},d))})]})},Mu=({value:e,expanded:t,onToggle:r,isNegative:i})=>{const{value:s,error:l}=bE(e);return l?v("span",{className:"text-gray-500 font-italic",children:l}):s!==null&&typeof s=="object"&&!(s instanceof Promise)?Array.isArray(s)?v("div",{className:"flex flex-col gap-1 relative",children:[v(Z4,{length:s.length,expanded:t,onToggle:r,isNegative:i}),t&&v("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:s.map((d,h)=>v(Lp,{value:d,path:h.toString(),isNegative:i},h.toString()))}),v(Cu,{text:Zb(s),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:d})=>v(je,{children:d})})]}):v("div",{className:"flex items-start gap-1 relative",children:[v("button",{type:"button",onClick:r,className:L("flex items-center","p-0 mt-0.5 mr-1","opacity-50"),children:v(st,{name:"icon-chevron-right",size:12,className:L("transition-[color,transform]",i?"text-[#f87171]":"text-[#4ade80]",t&&"rotate-90")})}),v("div",{className:"flex-1",children:t?v("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:Object.entries(s).map(([d,h])=>v(Lp,{value:h,path:d,isNegative:i},d))}):v("span",{children:Au(s)})}),v(Cu,{text:Zb(s),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:d})=>v(je,{children:d})})]}):v("span",{children:Au(s)})},K4=50;yt({fiber:null,fiberProps:{current:[],changes:new Set},fiberState:{current:[],changes:new Set},fiberContext:{current:[],changes:new Set}});var $p=e=>{switch(e.kind){case"initialized":return e.changes.currentValue;case"partially-initialized":return e.value}},Vb=(e,t)=>{for(const r of e){const i=t.get(r.name);if(i){t.set(i.name,{count:i.count+1,currentValue:r.value,id:i.name,lastUpdated:Date.now(),name:i.name,previousValue:r.prevValue});continue}t.set(r.name,{count:1,currentValue:r.value,id:r.name,lastUpdated:Date.now(),name:r.name,previousValue:r.prevValue})}},J4=(e,t)=>{for(const r of e){const i=t.contextChanges.get(r.contextType);if(i){if(Sa($p(i),r.value))continue;if(i.kind==="partially-initialized"){t.contextChanges.set(r.contextType,{kind:"initialized",changes:{count:1,currentValue:r.value,id:r.contextType.toString(),lastUpdated:Date.now(),name:r.name,previousValue:i.value}});continue}t.contextChanges.set(r.contextType,{kind:"initialized",changes:{count:i.changes.count+1,currentValue:r.value,id:r.contextType.toString(),lastUpdated:Date.now(),name:r.name,previousValue:i.changes.currentValue}});continue}t.contextChanges.set(r.contextType,{kind:"partially-initialized",id:r.contextType.toString(),lastUpdated:Date.now(),name:r.name,value:r.value})}},eE=e=>{const t={contextChanges:new Map,propsChanges:new Map,stateChanges:new Map};return e.forEach(r=>{J4(r.contextChanges,t),Vb(r.stateChanges,t.stateChanges),Vb(r.propsChanges,t.propsChanges)}),t},Gb=(e,t)=>{const r=new Map;return e.forEach((i,s)=>{r.set(s,i)}),t.forEach((i,s)=>{const l=r.get(s);if(!l){r.set(s,i);return}r.set(s,{count:l.count+i.count,currentValue:i.currentValue,id:i.id,lastUpdated:i.lastUpdated,name:i.name,previousValue:i.previousValue})}),r},tE=(e,t)=>{const r=new Map;return e.contextChanges.forEach((i,s)=>{r.set(s,i)}),t.contextChanges.forEach((i,s)=>{const l=r.get(s);if(!l){r.set(s,i);return}if($p(i)!==$p(l))switch(l.kind){case"initialized":switch(i.kind){case"initialized":{r.set(s,{kind:"initialized",changes:{...i.changes,count:i.changes.count+l.changes.count+1,currentValue:i.changes.currentValue,previousValue:i.changes.previousValue}});return}case"partially-initialized":{r.set(s,{kind:"initialized",changes:{count:l.changes.count+1,currentValue:i.value,id:i.id,lastUpdated:i.lastUpdated,name:i.name,previousValue:l.changes.currentValue}});return}}case"partially-initialized":switch(i.kind){case"initialized":{r.set(s,{kind:"initialized",changes:{count:i.changes.count+1,currentValue:i.changes.currentValue,id:i.changes.id,lastUpdated:i.changes.lastUpdated,name:i.changes.name,previousValue:l.value}});return}case"partially-initialized":{r.set(s,{kind:"initialized",changes:{count:1,currentValue:i.value,id:i.id,lastUpdated:i.lastUpdated,name:i.name,previousValue:l.value}});return}}}}),r},nE=(e,t)=>{const r=tE(e,t),i=Gb(e.propsChanges,t.propsChanges),s=Gb(e.stateChanges,t.stateChanges);return{contextChanges:r,propsChanges:i,stateChanges:s}},Hp=e=>Array.from(e.propsChanges.values()).reduce((t,r)=>t+r.count,0)+Array.from(e.stateChanges.values()).reduce((t,r)=>t+r.count,0)+Array.from(e.contextChanges.values()).filter(t=>t.kind==="initialized").reduce((t,r)=>t+r.changes.count,0),rE=e=>{const t=he({queue:[]}),[r,i]=Ne({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),s=oe.inspectState.value.kind==="focused"?oe.inspectState.value.fiber:null,l=s?_a(s):null;return Me(()=>{const u=setInterval(()=>{t.current.queue.length!==0&&(i(d=>{const h=eE(t.current.queue),p=nE(d,h);return Hp(d),Hp(p),p}),t.current.queue=[])},K4);return()=>{clearInterval(u)}},[s]),Me(()=>{if(!l)return;const u=h=>{var p;(p=t.current)==null||p.queue.push(h)};let d=oe.changesListeners.get(l);return d||(d=[],oe.changesListeners.set(l,d)),d.push(u),()=>{var h;i({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),t.current.queue=[],oe.changesListeners.set(l,((h=oe.changesListeners.get(l))==null?void 0:h.filter(p=>p!==u))??[])}},[l]),Me(()=>()=>{i({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),t.current.queue=[]},[l]),r},Ou=e=>{var t;if(e==null)return{value:e};if(typeof e=="function")return{value:e};if(typeof e!="object")return{value:e};if(go(e))return{value:"Promise"};try{const r=Object.getPrototypeOf(e);return r===Promise.prototype||((t=r==null?void 0:r.constructor)==null?void 0:t.name)==="Promise"?{value:"Promise"}:{value:e}}catch{return{value:null,error:"Error accessing value"}}},aE=Wu(()=>{const[e,t]=Ne(!0),r=rE(),[i,s]=Ne(!1),l=Hp(r)>0;Me(()=>{if(!i&&l){const h=setTimeout(()=>{s(!0),requestAnimationFrame(()=>{t(!0)})},0);return()=>clearTimeout(h)}},[i,l]);const u=new Map(Array.from(r.contextChanges.entries()).filter(([,h])=>h.kind==="initialized").map(([h,p])=>[h,p.kind==="partially-initialized"?null:p.changes])),d=oe.inspectState.value.kind==="focused"?oe.inspectState.value.fiber:null;if(d)return v(je,{children:[v(oE,{}),v("div",{className:"overflow-hidden h-full flex flex-col gap-y-2",children:[v("div",{className:"flex flex-col gap-2 px-3 pt-2",children:[v("span",{className:"text-sm font-medium text-[#888]",children:["Why did"," ",v("span",{className:"text-[#A855F7]",children:Ot(d)})," ","render?"]}),!l&&v("div",{className:"text-sm text-[#737373] bg-[#1E1E1E] rounded-md p-4 flex flex-col gap-4",children:[v("div",{children:"No changes detected since selecting"}),v("div",{children:"The props, state, and context changes within your component will be reported here"})]})]}),v("div",{className:L("flex flex-col gap-y-2 pl-3 relative overflow-y-auto h-full"),children:[v(Dh,{changes:r.propsChanges,title:"Changed Props",isExpanded:e}),v(Dh,{renderName:h=>iE(h,Ot(ui(d))??"Unknown Component"),changes:r.stateChanges,title:"Changed State",isExpanded:e}),v(Dh,{changes:u,title:"Changed Context",isExpanded:e})]})]})]})}),iE=(e,t)=>{if(Number.isNaN(Number(e)))return e;const r=Number.parseInt(e);return v("span",{className:"truncate",children:[v("span",{className:"text-white",children:[r,(s=>{const l=s%10,u=s%100;if(u>=11&&u<=13)return"th";switch(l){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}})(r)," hook"," "]}),v("span",{style:{color:"#666"},children:["called in ",v("i",{className:"text-[#A855F7] truncate",children:t})]})]})},oE=Wu(()=>{const e=he(null),t=he(null),r=he(null),i=he({isPropsChanged:!1,isStateChanged:!1,isContextChanged:!1});return Me(()=>{const s=yx(()=>{var d,h,p;const u=[];((d=e.current)==null?void 0:d.dataset.flash)==="true"&&u.push(e.current),((h=t.current)==null?void 0:h.dataset.flash)==="true"&&u.push(t.current),((p=r.current)==null?void 0:p.dataset.flash)==="true"&&u.push(r.current);for(const y of u)y.classList.remove("count-flash-white"),y.offsetWidth,y.classList.add("count-flash-white")},400);return Bt.subscribe(u=>{var y,g,w,b,_,T;if(!e.current||!t.current||!r.current)return;const{currentIndex:d,updates:h}=u,p=h[d];!p||d===0||(s(),i.current={isPropsChanged:(((g=(y=p.props)==null?void 0:y.changes)==null?void 0:g.size)??0)>0,isStateChanged:(((b=(w=p.state)==null?void 0:w.changes)==null?void 0:b.size)??0)>0,isContextChanged:(((T=(_=p.context)==null?void 0:_.changes)==null?void 0:T.size)??0)>0},e.current.dataset.flash!=="true"&&(e.current.dataset.flash=i.current.isPropsChanged.toString()),t.current.dataset.flash!=="true"&&(t.current.dataset.flash=i.current.isStateChanged.toString()),r.current.dataset.flash!=="true"&&(r.current.dataset.flash=i.current.isContextChanged.toString()))})},[]),v("button",{type:"button",className:L("react-section-header","overflow-hidden","max-h-0","transition-[max-height]"),children:v("div",{className:L("flex-1 react-scan-expandable"),children:v("div",{className:"overflow-hidden",children:v("div",{className:"flex items-center whitespace-nowrap",children:[v("div",{className:"flex items-center gap-x-2",children:"What changed?"}),v("div",{className:L("ml-auto","change-scope","transition-opacity duration-300 delay-150"),children:[v("div",{ref:e,children:"props"}),v("div",{ref:t,children:"state"}),v("div",{ref:r,children:"context"})]})]})})})})}),sE=e=>e,Dh=Wu(({title:e,changes:t,renderName:r=sE})=>{const[i,s]=Ne(new Set),[l,u]=Ne(new Set),d=Array.from(t.entries());return t.size===0?null:v("div",{children:[v("div",{className:"text-xs text-[#888] mb-1.5",children:e}),v("div",{className:"flex flex-col gap-2",children:d.map(([h,p])=>{const y=l.has(String(h)),{value:g,error:w}=Ou(p.previousValue),{value:b,error:_}=Ou(p.currentValue),T=Cx(g,b);return v("div",{children:[v("button",{onClick:()=>{u(M=>{const S=new Set(M);return S.has(String(h))?S.delete(String(h)):S.add(String(h)),S})},className:"flex items-center gap-2 w-full bg-transparent border-none p-0 cursor-pointer text-white text-xs",children:v("div",{className:"flex items-center gap-1.5 flex-1",children:[v(st,{name:"icon-chevron-right",size:12,className:L("text-[#666] transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",{"rotate-90":y})}),v("div",{className:"whitespace-pre-wrap break-words text-left font-medium flex items-center gap-x-1.5",children:[r(p.name),v(dE,{count:p.count,isFunction:typeof p.currentValue=="function",showWarning:T.changes.length===0,forceFlash:!0})]})]})}),v("div",{className:L("react-scan-expandable",{"react-scan-expanded":y}),children:v("div",{className:"pl-3 text-xs font-mono border-l-1 border-[#333]",children:v("div",{className:"flex flex-col gap-0.5",children:w||_?v(lE,{currError:_,prevError:w}):T.changes.length>0?v(cE,{change:p,diff:T,expandedFns:i,renderName:r,setExpandedFns:s,title:e}):v(uE,{currValue:b,entryKey:h,expandedFns:i,prevValue:g,setExpandedFns:s})})})})]},h)})})]})}),lE=({prevError:e,currError:t})=>v(je,{children:[e&&v("div",{className:"text-[#f87171] bg-[#2a1515] pr-1.5 py-[3px] rounded italic",children:e}),t&&v("div",{className:"text-[#4ade80] bg-[#1a2a1a] pr-1.5 py-[3px] rounded italic mt-0.5",children:t})]}),cE=({diff:e,title:t,renderName:r,change:i,expandedFns:s,setExpandedFns:l})=>e.changes.map((u,d)=>{const{value:h,error:p}=Ou(u.prevValue),{value:y,error:g}=Ou(u.currentValue),w=typeof h=="function"||typeof y=="function";let b;return t==="Props"&&(b=u.path.length>0?`${r(String(i.name))}.${In(u.path)}`:void 0),t==="State"&&u.path.length>0&&(b=`state.${In(u.path)}`),b||(b=In(u.path)),v("div",{className:L("flex flex-col gap-y-1",d<e.changes.length-1&&"mb-4"),children:[b&&v("div",{className:"text-[#666] text-[10px]",children:b}),v("button",{type:"button",className:L("group","flex items-start","py-[3px] px-1.5","text-left text-[#f87171] bg-[#2a1515]","rounded","overflow-hidden break-all",w&&"cursor-pointer"),onClick:w?()=>{const _=`${In(u.path)}-prev`;l(T=>{const M=new Set(T);return M.has(_)?M.delete(_):M.add(_),M})}:void 0,children:[v("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),v("span",{className:"flex-1 whitespace-nowrap font-mono",children:p?v("span",{className:"italic text-[#f87171]",children:p}):w?v("div",{className:"flex gap-1 items-start flex-col",children:[v("div",{className:"flex gap-1 items-start w-full",children:[v("span",{className:"flex-1 max-h-40",children:qp(h,s.has(`${In(u.path)}-prev`))}),typeof h=="function"&&v(Cu,{text:h.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:_})=>v(je,{children:_})})]}),(h==null?void 0:h.toString())===(y==null?void 0:y.toString())&&v("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):v(Mu,{value:h,expanded:s.has(`${In(u.path)}-prev`),onToggle:()=>{const _=`${In(u.path)}-prev`;l(T=>{const M=new Set(T);return M.has(_)?M.delete(_):M.add(_),M})},isNegative:!0})})]}),v("button",{type:"button",className:L("group","flex items-start","py-[3px] px-1.5","text-left text-[#4ade80] bg-[#1a2a1a]","rounded","overflow-hidden break-all",w&&"cursor-pointer"),onClick:w?()=>{const _=`${In(u.path)}-current`;l(T=>{const M=new Set(T);return M.has(_)?M.delete(_):M.add(_),M})}:void 0,children:[v("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),v("span",{className:"flex-1 whitespace-pre-wrap font-mono",children:g?v("span",{className:"italic text-[#4ade80]",children:g}):w?v("div",{className:"flex gap-1 items-start flex-col",children:[v("div",{className:"flex gap-1 items-start w-full",children:[v("span",{className:"flex-1",children:qp(y,s.has(`${In(u.path)}-current`))}),typeof y=="function"&&v(Cu,{text:y.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:_})=>v(je,{children:_})})]}),(h==null?void 0:h.toString())===(y==null?void 0:y.toString())&&v("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):v(Mu,{value:y,expanded:s.has(`${In(u.path)}-current`),onToggle:()=>{const _=`${In(u.path)}-current`;l(T=>{const M=new Set(T);return M.has(_)?M.delete(_):M.add(_),M})},isNegative:!1})})]})]},`${b}-${i.name}-${d}`)}),uE=({prevValue:e,currValue:t,entryKey:r,expandedFns:i,setExpandedFns:s})=>v(je,{children:[v("div",{className:"group flex gap-0.5 items-start text-[#f87171] bg-[#2a1515] py-[3px] px-1.5 rounded",children:[v("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),v("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:v(Mu,{value:e,expanded:i.has(`${String(r)}-prev`),onToggle:()=>{const l=`${String(r)}-prev`;s(u=>{const d=new Set(u);return d.has(l)?d.delete(l):d.add(l),d})},isNegative:!0})})]}),v("div",{className:"group flex gap-0.5 items-start text-[#4ade80] bg-[#1a2a1a] py-[3px] px-1.5 rounded mt-0.5",children:[v("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),v("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:v(Mu,{value:t,expanded:i.has(`${String(r)}-current`),onToggle:()=>{const l=`${String(r)}-current`;s(u=>{const d=new Set(u);return d.has(l)?d.delete(l):d.add(l),d})},isNegative:!1})})]}),typeof t=="object"&&t!==null&&v("div",{className:"text-[#666] text-[10px] italic mt-1 flex items-center gap-x-1",children:[v(st,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),v("span",{children:"Reference changed but objects are structurally the same"})]})]}),dE=({count:e,forceFlash:t,isFunction:r,showWarning:i})=>{const s=he(!0),l=he(null),u=he(e);return Me(()=>{const d=l.current;!d||u.current===e||(d.classList.remove("count-flash"),d.offsetWidth,d.classList.add("count-flash"),u.current=e)},[e]),Me(()=>{if(s.current){s.current=!1;return}if(t){let d=setTimeout(()=>{var h;(h=l.current)==null||h.classList.add("count-flash-white"),d=setTimeout(()=>{var p;(p=l.current)==null||p.classList.remove("count-flash-white")},300)},500);return()=>{clearTimeout(d)}}},[t]),v("div",{ref:l,className:"count-badge",children:[i&&v(st,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),r&&v(st,{name:"icon-function",className:"text-[#A855F7] mb-px",size:14}),"x",e]})},ya={lastRendered:new Map,expandedPaths:new Set,cleanup:()=>{ya.lastRendered.clear(),ya.expandedPaths.clear(),Y4.cleanupAll(),SE(),wx.reset()}},Tx=class extends jn{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null}),ya.cleanup()}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){var e;return this.state.hasError?v("div",{className:"p-4 bg-red-950/50 h-screen backdrop-blur-sm",children:[v("div",{className:"flex items-center gap-2 mb-3 text-red-400 font-medium",children:[v(st,{name:"icon-flame",className:"text-red-500",size:16}),"Something went wrong in the inspector"]}),v("div",{className:"p-3 bg-black/40 rounded font-mono text-xs text-red-300 mb-4 break-words",children:((e=this.state.error)==null?void 0:e.message)||JSON.stringify(this.state.error)}),v("button",{type:"button",onClick:this.handleReset,className:"px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2",children:"Reset Inspector"})]}):this.props.children}},fE=fi(()=>L("react-scan-inspector","flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",!Zu.value&&"opacity-100 delay-300 pointer-events-auto")),hE=Bm(()=>{const e=he(null),t=r=>{if(!r)return;e.current=r;const{data:i,shouldUpdate:s}=kE(r);if(s){const l={timestamp:Date.now(),fiberInfo:wE(r),props:i.fiberProps,state:i.fiberState,context:i.fiberContext,stateNames:_E(r)};wx.addUpdate(l,r)}};return sl(()=>{const r=oe.inspectState.value;ol(()=>{var l;if(r.kind!=="focused"||!r.focusedDomElement){e.current=null,ya.cleanup();return}r.kind==="focused"&&(Zu.value=!1);const{parentCompositeFiber:i}=Wb(r.focusedDomElement,r.fiber);if(!i){oe.inspectState.value={kind:"inspect-off"},Ke.value={view:"none"};return}((l=e.current)==null?void 0:l.type)!==i.type&&(e.current=i,ya.cleanup(),t(i))})}),sl(()=>{Xm.value,ol(()=>{const r=oe.inspectState.value;if(r.kind!=="focused"||!r.focusedDomElement){e.current=null,ya.cleanup();return}const{parentCompositeFiber:i}=Wb(r.focusedDomElement,r.fiber);if(!i){oe.inspectState.value={kind:"inspect-off"},Ke.value={view:"none"};return}t(i),r.focusedDomElement.isConnected||(e.current=null,ya.cleanup(),oe.inspectState.value={kind:"inspecting",hoveredDomElement:null})})}),Me(()=>()=>{ya.cleanup()},[]),v(Tx,{children:v("div",{className:fE,children:v("div",{className:"w-full h-full",children:v(aE,{})})})})}),pE=Bm(()=>oe.inspectState.value.kind!=="focused"?null:v(Tx,{children:[v(hE,{}),v(W4,{})]})),kx=e=>{var t,r,i;if("__REACT_DEVTOOLS_GLOBAL_HOOK__"in window){const s=window.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!(s!=null&&s.renderers))return null;for(const[,l]of Array.from(s.renderers))try{const u=(t=l.findFiberByHostInstance)==null?void 0:t.call(l,e);if(u)return u}catch{}}if("_reactRootContainer"in e){const l=e._reactRootContainer;return((i=(r=l==null?void 0:l._internalRoot)==null?void 0:r.current)==null?void 0:i.child)??null}for(const s in e)if(s.startsWith("__reactInternalInstance$")||s.startsWith("__reactFiber"))return e[s];return null},Fm=e=>{let t=e;for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.child)break;t=t.child}for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.return)break;t=t.return}return null},Pm=e=>{if(!e)return null;try{const t=kx(e);if(!t)return null;const r=mo(t);return r?r[0]:null}catch{return null}},mo=e=>{let t=e,r=null;for(;t;){if(Vu(t))return[t,r];nl(t)&&!r&&(r=t),t=t.return}return null},Qb=(e,t)=>!!Nm(t,i=>i===e),mE=async e=>{const t=Pm(e);if(!t)return null;const r=Fm(t);if(!r)return null;const i=(await Jk([r])).get(r);return i||null},Ka=e=>{const t=Pm(e);if(!t)return{};if(!Fm(t))return{};const i=mo(t);if(!i)return{};const[s]=i;return{parentCompositeFiber:s}},Wb=(e,t)=>{var d,h;if(!e.isConnected)return{};let r=t??Pm(e);if(!r)return{};let i=r,s=null,l=null;for(;i;){if(!i.stateNode){i=i.return;continue}if((d=Le.instrumentation)!=null&&d.fiberRoots.has(i.stateNode)){s=i,l=i.stateNode.current;break}i=i.return}if(!s||!l)return{};if(r=Qb(r,l)?r:r.alternate??r,!r)return{};if(!Fm(r))return{};const u=(h=mo(r))==null?void 0:h[0];return u?{parentCompositeFiber:Qb(u,l)?u:u.alternate??u}:{}},Ex=e=>{var s;const t=e.memoizedProps??{},r=((s=e.alternate)==null?void 0:s.memoizedProps)??{},i=[];for(const l in t){if(l==="children")continue;const u=t[l],d=r[l];Sa(u,d)||i.push({name:l,value:u,prevValue:d,type:1})}return i},Ip=new Set(["HTML","HEAD","META","TITLE","BASE","SCRIPT","SCRIPT","STYLE","LINK","NOSCRIPT","SOURCE","TRACK","EMBED","OBJECT","PARAM","TEMPLATE","PORTAL","SLOT","AREA","XML","DOCTYPE","COMMENT"]),Nu=(e,t=!0)=>{if(e.stateNode&&"nodeType"in e.stateNode){const i=e.stateNode;return t&&i.tagName&&Ip.has(i.tagName.toLowerCase())?null:i}let r=e.child;for(;r;){const i=Nu(r,t);if(i)return i;r=r.sibling}return null},gE=(e=document.body)=>{const t=[],r=s=>{if(!s)return null;const{parentCompositeFiber:l}=Ka(s);return l&&Nu(l)===s?s:null},i=(s,l=0)=>{const u=r(s);if(u){const{parentCompositeFiber:d}=Ka(u);if(!d)return;t.push({element:u,depth:l,name:Ot(d.type)??"Unknown",fiber:d})}for(const d of Array.from(s.children))i(d,u?l+1:l)};return i(e),t},Zb=e=>{try{if(e===null)return"null";if(e===void 0)return"undefined";if(go(e))return"Promise";if(typeof e=="function"){const t=e.toString();try{return t.replace(/\s+/g," ").replace(/{\s+/g,`{
  `).replace(/;\s+/g,`;
  `).replace(/}\s*$/g,`
}`).replace(/\(\s+/g,"(").replace(/\s+\)/g,")").replace(/,\s+/g,", ")}catch{return t}}switch(!0){case e instanceof Date:return e.toISOString();case e instanceof RegExp:return e.toString();case e instanceof Error:return`${e.name}: ${e.message}`;case e instanceof Map:return JSON.stringify(Array.from(e.entries()),null,2);case e instanceof Set:return JSON.stringify(Array.from(e),null,2);case e instanceof DataView:return JSON.stringify(Array.from(new Uint8Array(e.buffer)),null,2);case e instanceof ArrayBuffer:return JSON.stringify(Array.from(new Uint8Array(e)),null,2);case(ArrayBuffer.isView(e)&&"length"in e):return JSON.stringify(Array.from(e),null,2);case Array.isArray(e):return JSON.stringify(e,null,2);case typeof e=="object":return JSON.stringify(e,null,2);default:return String(e)}}catch{return String(e)}},vE=(e,t)=>{try{return typeof e!="function"||typeof t!="function"?!1:e.toString()===t.toString()}catch{return!1}},Cx=(e,t,r=[],i=new WeakSet)=>{if(e===t)return{type:"primitive",changes:[],hasDeepChanges:!1};if(typeof e=="function"&&typeof t=="function"){const p=vE(e,t);return{type:"primitive",changes:[{path:r,prevValue:e,currentValue:t,sameFunction:p}],hasDeepChanges:!p}}if(e===null||t===null||e===void 0||t===void 0||typeof e!="object"||typeof t!="object")return{type:"primitive",changes:[{path:r,prevValue:e,currentValue:t}],hasDeepChanges:!0};if(i.has(e)||i.has(t))return{type:"object",changes:[{path:r,prevValue:"[Circular]",currentValue:"[Circular]"}],hasDeepChanges:!1};i.add(e),i.add(t);const s=e,l=t,u=new Set([...Object.keys(s),...Object.keys(l)]),d=[];let h=!1;for(const p of u){const y=s[p],g=l[p];if(y!==g)if(typeof y=="object"&&typeof g=="object"&&y!==null&&g!==null){const w=Cx(y,g,[...r,p],i);d.push(...w.changes),w.hasDeepChanges&&(h=!0)}else d.push({path:[...r,p],prevValue:y,currentValue:g}),h=!0}return{type:"object",changes:d,hasDeepChanges:h}},In=e=>e.length===0?"":e.reduce((t,r,i)=>/^\d+$/.test(r)?`${t}[${r}]`:i===0?r:`${t}.${r}`,"");function yE(e){const t=e.replace(/\s+/g," ").trim(),r=[];let i="";for(let S=0;S<t.length;S++){const C=t[S];if(C==="="&&t[S+1]===">"){i.trim()&&r.push(i.trim()),r.push("=>"),i="",S++;continue}/[(){}[\];,<>:\?!]/.test(C)?(i.trim()&&r.push(i.trim()),r.push(C),i=""):/\s/.test(C)?(i.trim()&&r.push(i.trim()),i=""):i+=C}i.trim()&&r.push(i.trim());const s=[];for(let S=0;S<r.length;S++){const C=r[S],A=r[S+1];C==="("&&A===")"||C==="["&&A==="]"||C==="{"&&A==="}"||C==="<"&&A===">"?(s.push(C+A),S++):s.push(C)}const l=new Set,u=new Set;function d(S,C,A){let U=0;for(let D=A;D<s.length;D++){const P=s[D];if(P===S)U++;else if(P===C&&(U--,U===0))return D}return-1}for(let S=0;S<s.length;S++)if(s[S]==="("){const A=d("(",")",S);if(A!==-1&&s[A+1]==="=>")for(let U=S;U<=A;U++)l.add(U)}for(let S=1;S<s.length;S++){const C=s[S-1],A=s[S];if(/^[a-zA-Z0-9_$]+$/.test(C)&&A==="<"){const U=d("<",">",S);if(U!==-1)for(let D=S;D<=U;D++)u.add(D)}}let h=0;const p="  ",y=[];let g="";function w(){g.trim()&&y.push(g.replace(/\s+$/,"")),g=""}function b(){w(),g=p.repeat(h)}const _=[];function T(){return _.length?_[_.length-1]:null}function M(S,C=!1){g.trim()?C||/^[),;:\].}>]$/.test(S)?g+=S:g+=` ${S}`:g+=S}for(let S=0;S<s.length;S++){const C=s[S],A=s[S+1]||"";if(["(","{","[","<"].includes(C)){if(M(C),_.push(C),C==="{")h++,b();else if((C==="("||C==="["||C==="<")&&!(l.has(S)&&C==="("||u.has(S)&&C==="<")){const U={"(":")","[":"]","<":">"}[C];A!==U&&A!=="()"&&A!=="[]"&&A!=="<>"&&(h++,b())}}else if([")","}","]",">"].includes(C)){const U=T();C===")"&&U==="("||C==="]"&&U==="["||C===">"&&U==="<"?!(l.has(S)&&C===")")&&!(u.has(S)&&C===">")&&(h=Math.max(h-1,0),b()):C==="}"&&U==="{"&&(h=Math.max(h-1,0),b()),_.pop(),M(C),C==="}"&&b()}else if(/^\(\)|\[\]|\{\}|\<\>$/.test(C))M(C);else if(C==="=>")M(C);else if(C===";")M(C,!0),b();else if(C===","){M(C,!0);const U=T();!(l.has(S)&&U==="(")&&!(u.has(S)&&U==="<")&&U&&["{","[","(","<"].includes(U)&&b()}else M(C)}return w(),y.join(`
`).replace(/\n\s*\n+/g,`
`).trim()}var qp=(e,t=!1)=>{try{const r=e.toString(),i=r.match(/(?:function\s*)?(?:\(([^)]*)\)|([^=>\s]+))\s*=>?/);if(!i)return"ƒ";const l=(i[1]||i[2]||"").replace(/\s+/g,"");return t?yE(r):`ƒ (${l}) => ...`}catch{return"ƒ"}},Au=e=>{if(e===null)return"null";if(e===void 0)return"undefined";if(typeof e=="string")return`"${e.length>150?`${e.slice(0,20)}...`:e}"`;if(typeof e=="number"||typeof e=="boolean")return String(e);if(typeof e=="function")return qp(e);if(Array.isArray(e))return`Array(${e.length})`;if(e instanceof Map)return`Map(${e.size})`;if(e instanceof Set)return`Set(${e.size})`;if(e instanceof Date)return e.toISOString();if(e instanceof RegExp)return e.toString();if(e instanceof Error)return`${e.name}: ${e.message}`;if(typeof e=="object"){const t=Object.keys(e);return`{${t.length>2?`${t.slice(0,2).join(", ")}, ...`:t.join(", ")}}`}return String(e)},bE=e=>{var t;if(e==null)return{value:e};if(typeof e=="function")return{value:e};if(typeof e!="object")return{value:e};if(e instanceof Promise)return{value:"Promise"};try{const r=Object.getPrototypeOf(e);return r===Promise.prototype||((t=r==null?void 0:r.constructor)==null?void 0:t.name)==="Promise"?{value:"Promise"}:{value:e}}catch{return{value:null,error:"Error accessing value"}}},go=e=>!!e&&(e instanceof Promise||typeof e=="object"&&"then"in e),wE=e=>{const t=Wa(e);return{displayName:Ot(e)||"Unknown",type:e.type,key:e.key,id:e.index,selfTime:(t==null?void 0:t.selfTime)??null,totalTime:(t==null?void 0:t.totalTime)??null}},Vm=new Map,Mx=new Map,Gm=new Map,Yp=null,xE=/\[(?<name>\w+),\s*set\w+\]/g,_E=e=>{var r,i;const t=((i=(r=e.type)==null?void 0:r.toString)==null?void 0:i.call(r))||"";return t?Array.from(t.matchAll(xE),s=>{var l;return((l=s.groups)==null?void 0:l.name)??""}):[]},SE=()=>{Vm.clear(),Mx.clear(),Gm.clear(),Yp=null},TE=e=>{const t=e.type!==Yp;return Yp=e.type,t},jh=(e,t,r,i)=>{const s=e.get(t),l=e===Vm||e===Gm,u=!Sa(r,i);if(!s)return e.set(t,{count:u&&l?1:0,currentValue:r,previousValue:i,lastUpdated:Date.now()}),{hasChanged:u,count:u&&l?1:l?0:1};if(!Sa(s.currentValue,r)){const d=s.count+1;return e.set(t,{count:d,currentValue:r,previousValue:s.currentValue,lastUpdated:Date.now()}),{hasChanged:!0,count:d}}return{hasChanged:!1,count:s.count}},Kb=e=>{if(!e)return{};if(e.tag===Xu||e.tag===Fu||e.tag===yl||e.tag===vl){let t=e.memoizedState;const r={};let i=0;for(;t;)t.queue&&t.memoizedState!==void 0&&(r[i]=t.memoizedState),t=t.next,i++;return r}return e.tag===ci?e.memoizedState||{}:{}},Qm=e=>{var d;const t=e.memoizedProps||{},r=((d=e.alternate)==null?void 0:d.memoizedProps)||{},i={},s={},l=Object.keys(t);for(const h of l)h in t&&(i[h]=t[h],s[h]=r[h]);const u=Ex(e).map(h=>({name:h.name,value:h.value,prevValue:h.prevValue}));return{current:i,prev:s,changes:u}},Wm=e=>{const t=Kb(e),r=e.alternate?Kb(e.alternate):{},i=[];for(const[s,l]of Object.entries(t)){const u=e.tag===ci?s:Number(s);e.alternate&&!Sa(r[s],l)&&i.push({name:u,value:l,prevValue:r[s]})}return{current:t,prev:r,changes:i}},Zm=e=>{const t=ew(e),r=e.alternate?ew(e.alternate):new Map,i={},s={},l=[],u=new Set;for(const[d,h]of t){const p=h.displayName,y=d;if(u.has(y))continue;u.add(y),i[p]=h.value;const g=r.get(d);g&&(s[p]=g.value,Sa(g.value,h.value)||l.push({name:p,value:h.value,prevValue:g.value,contextType:d}))}return{current:i,prev:s,changes:l}},kE=e=>{const t=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{data:{fiberProps:t(),fiberState:t(),fiberContext:t()},shouldUpdate:!1};let r=!1;const i=TE(e),s=t();if(e.memoizedProps){const{current:g,changes:w}=Qm(e);for(const[b,_]of Object.entries(g))s.current.push({name:b,value:go(_)?{type:"promise",displayValue:"Promise"}:_});for(const b of w){const{hasChanged:_,count:T}=jh(Vm,b.name,b.value,b.prevValue);_&&(r=!0,s.changes.add(b.name),s.changesCounts.set(b.name,T))}}const l=t(),{current:u,changes:d}=Wm(e);for(const[g,w]of Object.entries(u)){const b=e.tag===ci?g:Number(g);l.current.push({name:b,value:w})}for(const g of d){const{hasChanged:w,count:b}=jh(Mx,g.name,g.value,g.prevValue);w&&(r=!0,l.changes.add(g.name),l.changesCounts.set(g.name,b))}const h=t(),{current:p,changes:y}=Zm(e);for(const[g,w]of Object.entries(p))h.current.push({name:g,value:w});if(!i)for(const g of y){const{hasChanged:w,count:b}=jh(Gm,g.name,g.value,g.prevValue);w&&(r=!0,h.changes.add(g.name),h.changesCounts.set(g.name,b))}return!r&&!i&&(s.changes.clear(),l.changes.clear(),h.changes.clear()),{data:{fiberProps:s,fiberState:l,fiberContext:h},shouldUpdate:r||i}},Jb=new WeakMap,ew=e=>{var s;if(!e)return new Map;const t=Jb.get(e);if(t)return t;const r=new Map;let i=e;for(;i;){const l=i.dependencies;if(l!=null&&l.firstContext){let u=l.firstContext;for(;u;){const d=u.memoizedValue,h=(s=u.context)==null?void 0:s.displayName;if(r.has(d)||r.set(u.context,{value:d,displayName:h??"UnnamedContext",contextType:null}),u===u.next)break;u=u.next}}i=i.return}return Jb.set(e,r),r},tw=e=>{const t=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{fiberProps:t(),fiberState:t(),fiberContext:t()};const r=t();if(e.memoizedProps){const{current:d,changes:h}=Qm(e);for(const[p,y]of Object.entries(d))r.current.push({name:p,value:go(y)?{type:"promise",displayValue:"Promise"}:y});for(const p of h)r.changes.add(p.name),r.changesCounts.set(p.name,1)}const i=t();if(e.memoizedState){const{current:d,changes:h}=Wm(e);for(const[p,y]of Object.entries(d))i.current.push({name:p,value:go(y)?{type:"promise",displayValue:"Promise"}:y});for(const p of h)i.changes.add(p.name),i.changesCounts.set(p.name,1)}const s=t(),{current:l,changes:u}=Zm(e);for(const[d,h]of Object.entries(l))s.current.push({name:d,value:go(h)?{type:"promise",displayValue:"Promise"}:h});for(const d of u)s.changes.add(d.name),s.changesCounts.set(d.name,1);return{fiberProps:r,fiberState:i,fiberContext:s}},Bp=0,nw=performance.now(),Uh=0,rw=!1,Ox=()=>{Uh++;const e=performance.now();e-nw>=1e3&&(Bp=Uh,Uh=0,nw=e),requestAnimationFrame(Ox)},Nx=()=>(rw||(rw=!0,Ox(),Bp=60),Bp),EE=e=>{var r,i;if(!e)return[];const t=[];if(e.tag===Xu||e.tag===Fu||e.tag===yl||e.tag===vl){let s=e.memoizedState,l=(r=e.alternate)==null?void 0:r.memoizedState,u=0;for(;s;){if(s.queue&&s.memoizedState!==void 0){const d={type:2,name:u.toString(),value:s.memoizedState,prevValue:l==null?void 0:l.memoizedState};Sa(d.prevValue,d.value)||t.push(d)}s=s.next,l=l==null?void 0:l.next,u++}return t}if(e.tag===ci){const s={type:3,name:"state",value:e.memoizedState,prevValue:(i=e.alternate)==null?void 0:i.memoizedState};return Sa(s.prevValue,s.value)||t.push(s),t}return t},Lh=0,aw=new WeakMap,CE=e=>{const t=aw.get(e);return t||(Lh++,aw.set(e,Lh),Lh)};function ME(e,t){if(!e||!t)return;const r=e.memoizedValue,i={type:4,name:e.context.displayName??"Context.Provider",value:r,contextType:CE(e.context)};this.push(i)}var OE=e=>{const t=[];return ck(e,ME.bind(t)),t},Ax=new Map,iw=!1,$h=()=>Array.from(Ax.values()),NE=16,Xp=new WeakMap;function zx(e){return String(_a(e))}function Rx(e){const t=zx(e),r=Xp.get(ui(e));if(r)return r.get(t)}function AE(e,t){const r=ui(e.type),i=zx(e);let s=Xp.get(r);s||(s=new Map,Xp.set(r,s)),s.set(i,t)}var zE=(e,t,r,i,s)=>{const l=Date.now(),u=Rx(e);if((i||s)&&(!u||l-(u.lastRenderTimestamp||0)>NE)){const d=u||{selfTime:0,totalTime:0,renderCount:0,lastRenderTimestamp:l};d.renderCount=(d.renderCount||0)+1,d.selfTime=t||0,d.totalTime=r||0,d.lastRenderTimestamp=l,AE(e,{...d})}},RE=(e,t)=>{const r={isPaused:yt(!Le.options.value.enabled),fiberRoots:new WeakSet};return Ax.set(e,{key:e,config:t,instrumentation:r}),iw||(iw=!0,vk({name:"react-scan",onActive:t.onActive,onCommitFiberRoot(i,s){r.fiberRoots.add(s);const l=$h();for(const u of l)u.config.onCommitStart();gk(s.current,(u,d)=>{const h=ui(u.type);if(!h)return null;const p=$h(),y=[];for(let C=0,A=p.length;C<A;C++)p[C].config.isValidFiber(u)&&y.push(C);if(!y.length)return null;const g=[];if(p.some(C=>C.config.trackChanges)){const C=Qm(u).changes,A=Wm(u).changes,U=Zm(u).changes;g.push.apply(null,C.map(D=>({type:1,name:D.name,value:D.value})));for(const D of A)u.tag===ci?g.push({type:3,name:D.name.toString(),value:D.value}):g.push({type:2,name:D.name.toString(),value:D.value});g.push.apply(null,U.map(D=>({type:4,name:D.name,value:D.value,contextType:Number(D.contextType)})))}const{selfTime:w,totalTime:b}=Wa(u),_=Nx(),T={phase:e4[d],componentName:Ot(h),count:1,changes:g,time:w,forget:rl(u),unnecessary:null,didCommit:Mm(u),fps:_},M=g.length>0,S=uk(u).length>0;d==="update"&&zE(u,w,b,M,S);for(let C=0,A=y.length;C<A;C++){const U=y[C];p[U].config.onRender(u,[T])}});for(const u of l)u.config.onCommitFinish()},onPostCommitFiberRoot(){const i=$h();for(const s of i)s.config.onPostCommitFiberRoot()}})),r},DE=e=>{const t=new Map;for(let r=0,i=e.length;r<i;r++){const s=e[r];if(!s.componentName)continue;const l=t.get(s.componentName)??[],u=Kk([{aggregatedCount:1,computedKey:null,name:s.componentName,frame:null,...s,changes:{type:s.changes.reduce((p,y)=>p|y.type,0),unstable:s.changes.some(p=>p.unstable)},phase:s.phase,computedCurrent:null}]);if(!u)continue;let d=null,h=null;if(s.changes)for(let p=0,y=s.changes.length;p<y;p++){const{name:g,prevValue:w,nextValue:b,unstable:_,type:T}=s.changes[p];T===1?(d??(d={}),h??(h={}),d[`${_?"⚠️":""}${g} (prev)`]=w,h[`${_?"⚠️":""}${g} (next)`]=b):l.push({prev:w,next:b,type:T===4?"context":"state",unstable:_??!1})}d&&h&&l.push({prev:d,next:h,type:"props",unstable:!1}),t.set(u,l)}for(const[r,i]of Array.from(t.entries())){console.group(`%c${r}`,"background: hsla(0,0%,70%,.3); border-radius:3px; padding: 0 2px;");for(const{type:s,prev:l,next:u,unstable:d}of i)console.log(`${s}:`,d?"⚠️":"",l,"!==",u);console.groupEnd()}},jE=()=>{if(window.hideIntro){window.hideIntro=void 0;return}console.log("%c[·] %cReact Scan","font-weight:bold;color:#7a68e8;font-size:20px;","font-weight:bold;font-size:14px;"),console.log("Try React Scan Monitoring to target performance issues in production: https://react-scan.com/monitoring")},ow=7,UE="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace",LE=.1,Pc=(e,t)=>Math.floor(e+(t-e)*LE),$E=4,zu=40,Hh=45,Ih="115,97,230";function HE(e,t){return t[0]-e[0]}function IE(e){return[...e.entries()].sort(HE)}function sw([e,t]){let r=`${t.slice(0,$E).join(", ")} ×${e}`;return r.length>zu&&(r=`${r.slice(0,zu)}…`),r}var lw=e=>{const t=new Map;for(const{name:l,count:u}of e)t.set(l,(t.get(l)||0)+u);const r=new Map;for(const[l,u]of t){const d=r.get(u);d?d.push(l):r.set(u,[l])}const i=IE(r);let s=sw(i[0]);for(let l=1,u=i.length;l<u;l++)s+=", "+sw(i[l]);return s.length>zu?`${s.slice(0,zu)}…`:s},cw=e=>{let t=0;for(const r of e)t+=r.width*r.height;return t},qE=(e,t)=>{for(const{id:r,name:i,count:s,x:l,y:u,width:d,height:h,didCommit:p}of t){const y={id:r,name:i,count:s,x:l,y:u,width:d,height:h,frame:0,targetX:l,targetY:u,targetWidth:d,targetHeight:h,didCommit:p},g=String(y.id),w=e.get(g);w?(w.count++,w.frame=0,w.targetX=l,w.targetY=u,w.targetWidth=d,w.targetHeight=h,w.didCommit=p):e.set(g,y)}},YE=(e,t,r)=>{for(const i of e.values()){const s=i.x-t,l=i.y-r;i.targetX=s,i.targetY=l}},BE=(e,t)=>{const r=e.getContext("2d",{alpha:!0});return r&&r.scale(t,t),r},XE=(e,t,r,i)=>{e.clearRect(0,0,t.width/r,t.height/r);const s=new Map,l=new Map;for(const h of i.values()){const{x:p,y,width:g,height:w,targetX:b,targetY:_,targetWidth:T,targetHeight:M,frame:S}=h;b!==p&&(h.x=Pc(p,b)),_!==y&&(h.y=Pc(y,_)),T!==g&&(h.width=Pc(g,T)),M!==w&&(h.height=Pc(w,M));const C=`${b??p},${_??y}`,A=`${C},${T??g},${M??w}`,U=s.get(C);U?U.push(h):s.set(C,[h]);const D=1-S/Hh;h.frame++;const P=l.get(A)||{x:p,y,width:g,height:w,alpha:D};D>P.alpha&&(P.alpha=D),l.set(A,P)}for(const{x:h,y:p,width:y,height:g,alpha:w}of l.values())e.strokeStyle=`rgba(${Ih},${w})`,e.lineWidth=1,e.beginPath(),e.rect(h,p,y,g),e.stroke(),e.fillStyle=`rgba(${Ih},${w*.1})`,e.fill();e.font=`11px ${UE}`;const u=new Map;e.textRendering="optimizeSpeed";for(const h of s.values()){const p=h[0],{x:y,y:g,frame:w}=p,b=1-w/Hh,_=lw(h),{width:T}=e.measureText(_);if(u.set(`${y},${g},${T},${_}`,{text:_,width:T,height:11,alpha:b,x:y,y:g,outlines:h}),w>Hh)for(const S of h)i.delete(String(S.id))}const d=Array.from(u.entries()).sort(([h,p],[y,g])=>cw(g.outlines)-cw(p.outlines));for(const[h,p]of d)if(u.has(h))for(const[y,g]of u.entries()){if(h===y)continue;const{x:w,y:b,width:_,height:T}=p,{x:M,y:S,width:C,height:A}=g;w+_>M&&M+C>w&&b+T>S&&S+A>b&&(p.text=lw(p.outlines.concat(g.outlines)),p.width=e.measureText(p.text).width,u.delete(y))}for(const h of u.values()){const{x:p,y,alpha:g,width:w,height:b,text:_}=h;let T=y-b-4;T<0&&(T=0),e.fillStyle=`rgba(${Ih},${g})`,e.fillRect(p,T,w+4,b+4),e.fillStyle=`rgba(255,255,255,${g})`,e.fillText(_,p+2,T+b)}return i.size>0},FE='"use strict";(()=>{var D="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";var M=(t,i)=>Math.floor(t+(i-t)*.1);var _="115,97,230";function F(t,i){return i[0]-t[0]}function I(t){return[...t.entries()].sort(F)}function $([t,i]){let o=`${i.slice(0,4).join(", ")} \\xD7${t}`;return o.length>40&&(o=`${o.slice(0,40)}\\u2026`),o}var S=t=>{let i=new Map;for(let{name:e,count:u}of t)i.set(e,(i.get(e)||0)+u);let o=new Map;for(let[e,u]of i){let A=o.get(u);A?A.push(e):o.set(u,[e])}let h=I(o),s=$(h[0]);for(let e=1,u=h.length;e<u;e++)s+=", "+$(h[e]);return s.length>40?`${s.slice(0,40)}\\u2026`:s},X=t=>{let i=0;for(let o of t)i+=o.width*o.height;return i};var N=(t,i)=>{let o=t.getContext("2d",{alpha:!0});return o&&o.scale(i,i),o},Y=(t,i,o,h)=>{t.clearRect(0,0,i.width/o,i.height/o);let s=new Map,e=new Map;for(let n of h.values()){let{x:r,y:c,width:a,height:g,targetX:l,targetY:d,targetWidth:f,targetHeight:p,frame:O}=n;l!==r&&(n.x=M(r,l)),d!==c&&(n.y=M(c,d)),f!==a&&(n.width=M(a,f)),p!==g&&(n.height=M(g,p));let w=`${l??r},${d??c}`,y=`${w},${f??a},${p??g}`,v=s.get(w);v?v.push(n):s.set(w,[n]);let E=1-O/45;n.frame++;let x=e.get(y)||{x:r,y:c,width:a,height:g,alpha:E};E>x.alpha&&(x.alpha=E),e.set(y,x)}for(let{x:n,y:r,width:c,height:a,alpha:g}of e.values())t.strokeStyle=`rgba(${_},${g})`,t.lineWidth=1,t.beginPath(),t.rect(n,r,c,a),t.stroke(),t.fillStyle=`rgba(${_},${g*.1})`,t.fill();t.font=`11px ${D}`;let u=new Map;t.textRendering="optimizeSpeed";for(let n of s.values()){let r=n[0],{x:c,y:a,frame:g}=r,l=1-g/45,d=S(n),{width:f}=t.measureText(d),p=11;u.set(`${c},${a},${f},${d}`,{text:d,width:f,height:p,alpha:l,x:c,y:a,outlines:n});let O=a-p-4;if(O<0&&(O=0),g>45)for(let w of n)h.delete(String(w.id))}let A=Array.from(u.entries()).sort(([n,r],[c,a])=>X(a.outlines)-X(r.outlines));for(let[n,r]of A)if(u.has(n))for(let[c,a]of u.entries()){if(n===c)continue;let{x:g,y:l,width:d,height:f}=r,{x:p,y:O,width:w,height:y}=a;g+d>p&&p+w>g&&l+f>O&&O+y>l&&(r.text=S(r.outlines.concat(a.outlines)),r.width=t.measureText(r.text).width,u.delete(c))}for(let n of u.values()){let{x:r,y:c,alpha:a,width:g,height:l,text:d}=n,f=c-l-4;f<0&&(f=0),t.fillStyle=`rgba(${_},${a})`,t.fillRect(r,f,g+4,l+4),t.fillStyle=`rgba(255,255,255,${a})`,t.fillText(d,r+2,f+l)}return h.size>0};var m=null,L=null,b=1,T=new Map,C=null,R=()=>{if(!L||!m)return;Y(L,m,b,T)?C=requestAnimationFrame(R):C=null};self.onmessage=t=>{let{type:i}=t.data;if(i==="init"&&(m=t.data.canvas,b=t.data.dpr,m&&(m.width=t.data.width,m.height=t.data.height,L=N(m,b))),!(!m||!L)){if(i==="resize"){b=t.data.dpr,m.width=t.data.width*b,m.height=t.data.height*b,L.resetTransform(),L.scale(b,b),R();return}if(i==="draw-outlines"){let{data:o,names:h}=t.data,s=new Float32Array(o);for(let e=0;e<s.length;e+=7){let u=s[e+2],A=s[e+3],n=s[e+4],r=s[e+5],c=s[e+6],a={id:s[e],name:h[e/7],count:s[e+1],x:u,y:A,width:n,height:r,frame:0,targetX:u,targetY:A,targetWidth:n,targetHeight:r,didCommit:c},g=String(a.id),l=T.get(g);l?(l.count++,l.frame=0,l.targetX=u,l.targetY=A,l.targetWidth=n,l.targetHeight=r,l.didCommit=c):T.set(g,a)}C||(C=requestAnimationFrame(R));return}if(i==="scroll"){let{deltaX:o,deltaY:h}=t.data;for(let s of T.values()){let e=s.x-o,u=s.y-h;s.targetX=e,s.targetY=u}}}};})();\n',Nn=null,Ru=null,Ja=null,On=1,Du=null,Km=new Map,Zs=new Map,uo=new Set,PE=e=>{if(!Vu(e))return;const t=typeof e.type=="string"?e.type:Ot(e);if(!t)return;const r=Zs.get(e),i=dk(e),s=Mm(e);r?r.count++:(Zs.set(e,{name:t,count:1,elements:i.map(l=>l.stateNode),didCommit:s?1:0}),uo.add(e))},VE=e=>{const t=e[0];if(e.length===1)return t;let r,i,s,l;for(let u=0,d=e.length;u<d;u++){const h=e[u];r=r==null?h.x:Math.min(r,h.x),i=i==null?h.y:Math.min(i,h.y),s=s==null?h.x+h.width:Math.max(s,h.x+h.width),l=l==null?h.y+h.height:Math.max(l,h.y+h.height)}return r==null||i==null||s==null||l==null?e[0]:new DOMRect(r,i,s-r,l-i)};function GE(e,t){const r=[];for(const i of e){const s=i.target;this.seenElements.has(s)||(this.seenElements.add(s),r.push(i))}r.length>0&&this.resolveNext&&(this.resolveNext(r),this.resolveNext=null),this.seenElements.size===this.uniqueElements.size&&(t.disconnect(),this.done=!0,this.resolveNext&&this.resolveNext([]))}var Dx=async function*(e){const t={uniqueElements:new Set(e),seenElements:new Set,resolveNext:null,done:!1},r=new IntersectionObserver(GE.bind(t));for(const i of t.uniqueElements)r.observe(i);for(;!t.done;){const i=await new Promise(s=>{t.resolveNext=s});i.length>0&&(yield i)}},QE=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:ArrayBuffer,WE=async()=>{const e=[];for(const r of uo){const i=Zs.get(r);if(i)for(let s=0;s<i.elements.length;s++)i.elements[s]instanceof Element&&e.push(i.elements[s])}const t=new Map;for await(const r of Dx(e)){for(const u of r){const d=u.target,h=u.intersectionRect;u.isIntersecting&&h.width&&h.height&&t.set(d,h)}const i=[],s=[],l=[];for(const u of uo){const d=Zs.get(u);if(!d)continue;const h=[];for(let p=0;p<d.elements.length;p++){const y=d.elements[p],g=t.get(y);g&&h.push(g)}h.length&&(i.push(d),s.push(VE(h)),l.push(_a(u)))}if(i.length>0){const u=new QE(i.length*ow*4),d=new Float32Array(u),h=new Array(i.length);let p;for(let y=0,g=i.length;y<g;y++){const w=i[y],b=l[y],{x:_,y:T,width:M,height:S}=s[y],{count:C,name:A,didCommit:U}=w;if(Nn){const D=y*ow;d[D]=b,d[D+1]=C,d[D+2]=_,d[D+3]=T,d[D+4]=M,d[D+5]=S,d[D+6]=U,h[y]=A}else p||(p=new Array(i.length)),p[y]={id:b,name:A,count:C,x:_,y:T,width:M,height:S,didCommit:U}}Nn?Nn.postMessage({type:"draw-outlines",data:u,names:h}):Ru&&Ja&&p&&(qE(Km,p),Du||(Du=requestAnimationFrame(Jm)))}}for(const r of uo)Zs.delete(r),uo.delete(r)},Jm=()=>{if(!Ja||!Ru)return;XE(Ja,Ru,On,Km)?Du=requestAnimationFrame(Jm):Du=null},ZE=typeof OffscreenCanvas<"u"&&typeof Worker<"u",uw=()=>Math.min(window.devicePixelRatio||1,2),KE=()=>{JE();const e=document.createElement("div");e.setAttribute("data-react-scan","true");const t=e.attachShadow({mode:"open"}),r=document.createElement("canvas");if(r.style.position="fixed",r.style.top="0",r.style.left="0",r.style.pointerEvents="none",r.style.zIndex="2147483646",r.setAttribute("aria-hidden","true"),t.appendChild(r),!r)return null;On=uw(),Ru=r;const{innerWidth:i,innerHeight:s}=window;r.style.width=`${i}px`,r.style.height=`${s}px`;const l=i*On,u=s*On;if(r.width=l,r.height=u,ZE&&!window.__REACT_SCAN_EXTENSION__)try{Nn=new Worker(URL.createObjectURL(new Blob([FE],{type:"application/javascript"})));const g=r.transferControlToOffscreen();Nn==null||Nn.postMessage({type:"init",canvas:g,width:r.width,height:r.height,dpr:On},[g])}catch(g){console.warn("Failed to initialize OffscreenCanvas worker:",g)}Nn||(Ja=BE(r,On));let d=!1;window.addEventListener("resize",()=>{d||(d=!0,setTimeout(()=>{const g=window.innerWidth,w=window.innerHeight;On=uw(),r.style.width=`${g}px`,r.style.height=`${w}px`,Nn?Nn.postMessage({type:"resize",width:g,height:w,dpr:On}):(r.width=g*On,r.height=w*On,Ja&&(Ja.resetTransform(),Ja.scale(On,On)),Jm()),d=!1}))});let h=window.scrollX,p=window.scrollY,y=!1;return window.addEventListener("scroll",()=>{y||(y=!0,setTimeout(()=>{const{scrollX:g,scrollY:w}=window,b=g-h,_=w-p;h=g,p=w,Nn?Nn.postMessage({type:"scroll",deltaX:b,deltaY:_}):requestAnimationFrame(YE.bind(null,Km,b,_)),y=!1},16*2))}),setInterval(()=>{uo.size&&requestAnimationFrame(WE)},16*2),t.appendChild(r),e},dw=()=>globalThis.__REACT_SCAN_STOP__,JE=()=>{const e=document.querySelector("[data-react-scan]");e&&e.remove()},eC=e=>{if(Vu(e)&&Le.options.value.showToolbar!==!1&&oe.inspectState.value.kind==="focused"){const t=e,{selfTime:r}=Wa(e),i=Ot(e.type),s=_a(t),l=oe.reportData.get(s),u=(l==null?void 0:l.count)??0,d=(l==null?void 0:l.time)??0,h=[],p=oe.changesListeners.get(_a(e));if(p!=null&&p.length){const g=Ex(e).map(T=>({type:1,name:T.name,value:T.value,prevValue:T.prevValue,unstable:!1})),w=EE(e),_=OE(e).map(T=>({name:T.name,type:4,value:T.value,contextType:T.contextType}));p.forEach(T=>{T({propsChanges:g,stateChanges:w,contextChanges:_})})}const y={count:u+1,time:d+r||0,renders:[],displayName:i,type:ui(e.type)||null,changes:h};oe.reportData.set(s,y),Fp=!0}},Fp=!1,fw,tC=()=>{clearInterval(fw),fw=setInterval(()=>{Fp&&(oe.lastReportTime.value=Date.now(),Fp=!1)},50)},nC=e=>!G3.has(e.memoizedProps),rC=e=>{if(dw())return;let t,r=!1;const i=()=>{r||(t&&cancelAnimationFrame(t),t=requestAnimationFrame(()=>{r=!0;const l=KE();l&&document.documentElement.appendChild(l),e()}))},s=RE("react-scan-devtools-0.1.0",{onCommitStart:()=>{var l,u;(u=(l=Le.options.value).onCommitStart)==null||u.call(l)},onActive:()=>{dw()||(i(),window.__REACT_SCAN_EXTENSION__||(globalThis.__REACT_SCAN__={ReactScanInternals:Le}),tC(),jE())},onError:()=>{},isValidFiber:nC,onRender:(l,u)=>{var y,g,w,b;Vu(l)&&((y=oe.interactionListeningForRenders)==null||y.call(oe,l,u));const d=(g=Le.instrumentation)==null?void 0:g.isPaused.value,h=oe.inspectState.value.kind==="inspect-off"||oe.inspectState.value.kind==="uninitialized";d&&h||(d||PE(l),Le.options.value.log&&DE(u),oe.inspectState.value.kind==="focused"&&(Xm.value=Date.now()),h||eC(l),(b=(w=Le.options.value).onRender)==null||b.call(w,l,u))},onCommitFinish:()=>{var l,u;i(),(u=(l=Le.options.value).onCommitFinish)==null||u.call(l)},onPostCommitFiberRoot(){i()},trackChanges:!1});Le.instrumentation=s},aC=`*, ::before, ::after {
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
`,iC=(e,t,r=t)=>{const[i,s]=Ne(e);return Me(()=>{if(e===i)return;const u=setTimeout(()=>s(e),e?t:r);return()=>clearTimeout(u)},[e,t,r]),i},oC=fi(()=>L("absolute inset-0 flex items-center gap-x-2","translate-y-0","transition-transform duration-300",Zu.value&&"-translate-y-[200%]")),sC=()=>{const e=he(null),t=he(null),[r,i]=Ne(null);sl(()=>{const l=oe.inspectState.value;l.kind==="focused"&&i(l.fiber)}),sl(()=>{const l=Bt.value;ol(()=>{var _,T;if(oe.inspectState.value.kind!=="focused"||!e.current||!t.current)return;const{totalUpdates:u,currentIndex:d,updates:h,isVisible:p,windowOffset:y}=l,g=Math.max(0,u-1),w=p?`#${y+d} Re-render`:g>0?`×${g}`:"";let b;if(g>0&&d>=0&&d<h.length){const M=(T=(_=h[d])==null?void 0:_.fiberInfo)==null?void 0:T.selfTime;b=M>0?M<.1-Number.EPSILON?"< 0.1ms":`${Number(M.toFixed(1))}ms`:void 0}e.current.dataset.text=w?` • ${w}`:"",t.current.dataset.text=b?` • ${b}`:""})});const s=Wn(()=>{if(!r)return null;const{name:l,wrappers:u,wrapperTypes:d}=ll(r),h=u.length?`${u.join("(")}(${l})${")".repeat(u.length)}`:l??"",p=d[0];return v("span",{title:h,className:"flex items-center gap-x-1",children:[l??"Unknown",v("span",{title:p==null?void 0:p.title,className:"flex items-center gap-x-1 text-[10px] text-purple-400",children:!!p&&v(je,{children:[v("span",{className:L("rounded py-[1px] px-1","truncate",p.compiler&&"bg-purple-800 text-neutral-400",!p.compiler&&"bg-neutral-700 text-neutral-300",p.type==="memo"&&"bg-[#5f3f9a] text-white"),children:p.type},p.type),p.compiler&&v("span",{className:"text-yellow-300",children:"✨"})]})}),d.length>1&&v("span",{className:"text-[10px] text-neutral-400",children:["×",d.length-1]})]})},[r]);return v("div",{className:oC,children:[s,v("div",{className:"flex items-center gap-x-2 mr-auto text-xs text-[#888]",children:[v("span",{ref:e,className:"with-data-text cursor-pointer !overflow-visible",title:"Click to toggle between rerenders and total renders"}),v("span",{ref:t,className:"with-data-text !overflow-visible"})]})]})},lC=()=>{const e=iC(oe.inspectState.value.kind==="focused",150,0),t=()=>{Ke.value={view:"none"},oe.inspectState.value={kind:"inspect-off"}};if(Ke.value.view!=="notifications")return v("div",{className:"react-scan-header",children:[v("div",{className:"relative flex-1 h-full",children:v("div",{className:L("react-scan-header-item is-visible",!e&&"!duration-0"),children:v(sC,{})})}),v("button",{type:"button",title:"Close",className:"react-scan-close-button",onClick:t,children:v(st,{name:"icon-close"})})]})},cC=({className:e,...t})=>v("div",{className:L("react-scan-toggle",e),children:[v("input",{type:"checkbox",...t}),v("div",{})]}),uC=({fps:e})=>{const t=r=>r<30?"#EF4444":r<50?"#F59E0B":"rgb(214,132,245)";return v("div",{className:L("flex items-center gap-x-1 px-2 w-full","h-6","rounded-md","font-mono leading-none","bg-[#141414]","ring-1 ring-white/[0.08]"),children:[v("div",{style:{color:t(e)},className:"text-sm font-semibold tracking-wide transition-colors ease-in-out w-full flex justify-center items-center",children:e}),v("span",{className:"text-white/30 text-[11px] font-medium tracking-wide ml-auto min-w-fit",children:"FPS"})]})},dC=()=>{const[e,t]=Ne(null);return Me(()=>{const r=setInterval(()=>{t(Nx())},200);return()=>clearInterval(r)},[]),v("div",{className:L("flex items-center justify-end gap-x-2 px-1 ml-1 w-[72px]","whitespace-nowrap text-sm text-white"),children:e===null?v(je,{children:"️"}):v(uC,{fps:e})})},Yn=()=>cr?(window.reactScanIdCounter===void 0&&(window.reactScanIdCounter=0),`${++window.reactScanIdCounter}`):"0",Vn=e=>e(),_t=class jx extends Array{constructor(t=25){super(),this.capacity=t}push(...t){const r=super.push(...t);for(;this.length>this.capacity;)this.shift();return r}static fromArray(t,r){const i=new jx(r);return i.push(...t),i}},fC=class{constructor(e){this.subscribers=new Set,this.currentValue=e}subscribe(e){return this.subscribers.add(e),e(this.currentValue),()=>{this.subscribers.delete(e)}}setState(e){this.currentValue=e,this.subscribers.forEach(t=>t(e))}getCurrentState(){return this.currentValue}},Ux=150,hw=new fC(new _t(Ux)),or=50,hC=class{constructor(){this.channels={}}publish(e,t,r=!0){const i=this.channels[t];if(!i){if(!r)return;this.channels[t]={callbacks:new _t(or),state:new _t(or)},this.channels[t].state.push(e);return}i.state.push(e),i.callbacks.forEach(s=>s(e))}getAvailableChannels(){return _t.fromArray(Object.keys(this.channels),or)}subscribe(e,t,r=!1){const i=()=>(r||this.channels[e].state.forEach(l=>{t(l)}),()=>{const l=this.channels[e].callbacks.filter(u=>u!==t);this.channels[e].callbacks=_t.fromArray(l,or)}),s=this.channels[e];return s?(s.callbacks.push(t),i()):(this.channels[e]={callbacks:new _t(or),state:new _t(or)},this.channels[e].callbacks.push(t),i())}updateChannelState(e,t,r=!0){const i=this.channels[e];if(!i){if(!r)return;const s=new _t(or),l={callbacks:new _t(or),state:s};this.channels[e]=l,l.state=t(s);return}i.state=t(i.state)}getChannelState(e){return this.channels[e].state??new _t(or)}},ju=new hC,Lx={skipProviders:!0,skipHocs:!0,skipContainers:!0,skipMinified:!0,skipUtilities:!0,skipBoundaries:!0},Ds={providers:[/Provider$/,/^Provider$/,/^Context$/],hocs:[/^with[A-Z]/,/^forward(?:Ref)?$/i,/^Forward(?:Ref)?\(/],containers:[/^(?:App)?Container$/,/^Root$/,/^ReactDev/],utilities:[/^Fragment$/,/^Suspense$/,/^ErrorBoundary$/,/^Portal$/,/^Consumer$/,/^Layout$/,/^Router/,/^Hydration/],boundaries:[/^Boundary$/,/Boundary$/,/^Provider$/,/Provider$/]},pC=(e,t=Lx)=>{const r=[];return t.skipProviders&&r.push(...Ds.providers),t.skipHocs&&r.push(...Ds.hocs),t.skipContainers&&r.push(...Ds.containers),t.skipUtilities&&r.push(...Ds.utilities),t.skipBoundaries&&r.push(...Ds.boundaries),!r.some(i=>i.test(e))},pw=[/^[a-z]$/,/^[a-z][0-9]$/,/^_+$/,/^[A-Za-z][_$]$/,/^[a-z]{1,2}$/],mC=e=>{var l;for(let u=0;u<pw.length;u++)if(pw[u].test(e))return!0;const t=!/[aeiou]/i.test(e),r=(((l=e.match(/\d/g))==null?void 0:l.length)??0)>e.length/2,i=/^[a-z]+$/.test(e),s=/[$_]{2,}/.test(e);return Number(t)+Number(r)+Number(i)+Number(s)>=2},gC=(e,t=Lx)=>{if(!e)return[];if(!Ot(e.type))return[];const i=new Array;let s=e;for(;s.return;){const u=vC(s.type);u&&!mC(u)&&pC(u,t)&&u.toLowerCase()!==u&&i.push(u),s=s.return}const l=new Array(i.length);for(let u=0;u<i.length;u++)l[u]=i[i.length-u-1];return l},vC=e=>{const t=Ot(e);return t?t.replace(/^(?:Memo|Forward(?:Ref)?|With.*?)\((?<inner>.*?)\)$/,"$<inner>"):""},yC=(e,t=()=>!0)=>{let r=e;for(;r;){const i=Ot(r.type);if(i&&t(i))return i;r=r.return}return null},Vc,Pp="never-hidden",bC=()=>{Vc==null||Vc();const e=()=>{document.hidden&&(Pp=Date.now())};document.addEventListener("visibilitychange",e),Vc=()=>{document.removeEventListener("visibilitychange",e)}},wC=e=>["pointerup","click"].includes(e)?"pointer":(e.includes("key"),["keydown","keyup"].includes(e)?"keyboard":null),qh=null,xC=e=>{bC();const t=new Map,r=new Map,i=l=>{if(!l.interactionId)return;if(l.interactionId&&l.target&&!r.has(l.interactionId)&&r.set(l.interactionId,l.target),l.target){let d=l.target;for(;d;){if(d.id==="react-scan-toolbar-root"||d.id==="react-scan-root")return;d=d.parentElement}}const u=t.get(l.interactionId);if(u)l.duration>u.latency?(u.entries=[l],u.latency=l.duration):l.duration===u.latency&&l.startTime===u.entries[0].startTime&&u.entries.push(l);else{const d=wC(l.name);if(!d)return;const h={id:l.interactionId,latency:l.duration,entries:[l],target:l.target,type:d,startTime:l.startTime,endTime:Date.now(),processingStart:l.processingStart,processingEnd:l.processingEnd,duration:l.duration,inputDelay:l.processingStart-l.startTime,processingDuration:l.processingEnd-l.processingStart,presentationDelay:l.duration-(l.processingEnd-l.startTime),timestamp:Date.now(),timeSinceTabInactive:Pp==="never-hidden"?"never-hidden":Date.now()-Pp,visibilityState:document.visibilityState,timeOrigin:performance.timeOrigin,referrer:document.referrer};t.set(h.id,h),qh||(qh=requestAnimationFrame(()=>{requestAnimationFrame(()=>{e(t.get(h.id)),qh=null})}))}},s=new PerformanceObserver(l=>{const u=l.getEntries();for(let d=0,h=u.length;d<h;d++){const p=u[d];i(p)}});try{s.observe({type:"event",buffered:!0,durationThreshold:16}),s.observe({type:"first-input",buffered:!0})}catch{}return()=>s.disconnect()},_C=()=>xC(e=>{ju.publish({kind:"entry-received",entry:e},"recording")}),fu=25,Nr=new _t(fu),SC=(e,t)=>{let r=null;for(const i of t){if(i.type!==e.type)continue;if(r===null){r=i;continue}const s=(l,u)=>Math.abs(l.startDateTime)-(u.startTime+u.timeOrigin);s(i,e)<s(r,e)&&(r=i)}return r},TC=e=>ju.subscribe("recording",r=>{const i=r.kind==="auto-complete-race"?Nr.find(l=>l.interactionUUID===r.interactionUUID):SC(r.entry,Nr);if(!i)return;const s=i.completeInteraction(r);e(s)}),kC=({onMicroTask:e,onRAF:t,onTimeout:r,abort:i})=>{queueMicrotask(()=>{(i==null?void 0:i())!==!0&&e()&&requestAnimationFrame(()=>{(i==null?void 0:i())!==!0&&t()&&setTimeout(()=>{(i==null?void 0:i())!==!0&&r()},0)})})},EC=e=>{const t=kx(e);if(!t)return;let r=t?Ot(t==null?void 0:t.type):"N/A";return r||(r=yC(t,s=>s.length>2)??"N/A"),r?{componentPath:gC(t),childrenTree:{},componentName:r,elementFiber:t}:void 0},mw=(e,t)=>{let r=null;const i=h=>{switch(e){case"pointer":return h.phase==="start"?"pointerup":h.target instanceof HTMLInputElement||h.target instanceof HTMLSelectElement?"change":"click";case"keyboard":return h.phase==="start"?"keydown":"change"}},s={current:{kind:"uninitialized-stage",interactionUUID:Yn(),stageStart:Date.now(),interactionType:e}},l=h=>{var T,M;if(h.composedPath().some(S=>S instanceof Element&&S.id==="react-scan-toolbar-root")||(Date.now()-s.current.stageStart>2e3&&(s.current={kind:"uninitialized-stage",interactionUUID:Yn(),stageStart:Date.now(),interactionType:e}),s.current.kind!=="uninitialized-stage"))return;const y=performance.now();(T=t==null?void 0:t.onStart)==null||T.call(t,s.current.interactionUUID);const g=EC(h.target);if(!g){(M=t==null?void 0:t.onError)==null||M.call(t,s.current.interactionUUID);return}const w={},b=$x(w);s.current={...s.current,interactionType:e,blockingTimeStart:Date.now(),childrenTree:g.childrenTree,componentName:g.componentName,componentPath:g.componentPath,fiberRenders:w,kind:"interaction-start",interactionStartDetail:y,stopListeningForRenders:b};const _=i({phase:"end",target:h.target});document.addEventListener(_,u,{once:!0}),requestAnimationFrame(()=>{document.removeEventListener(_,u)})};document.addEventListener(i({phase:"start"}),l,{capture:!0});const u=(h,p,y)=>{var g;if(s.current.kind!=="interaction-start"&&p===r){if(e==="pointer"&&h.target instanceof HTMLSelectElement){s.current={kind:"uninitialized-stage",interactionUUID:Yn(),stageStart:Date.now(),interactionType:e};return}(g=t==null?void 0:t.onError)==null||g.call(t,s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:Yn(),stageStart:Date.now(),interactionType:e};return}r=p,kC({abort:y,onMicroTask:()=>s.current.kind==="uninitialized-stage"?!1:(s.current={...s.current,kind:"js-end-stage",jsEndDetail:performance.now()},!0),onRAF:()=>{var w;return s.current.kind!=="js-end-stage"&&s.current.kind!=="raf-stage"?((w=t==null?void 0:t.onError)==null||w.call(t,s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:Yn(),stageStart:Date.now(),interactionType:e},!1):(s.current={...s.current,kind:"raf-stage",rafStart:performance.now()},!0)},onTimeout:()=>{var S;if(s.current.kind!=="raf-stage"){(S=t==null?void 0:t.onError)==null||S.call(t,s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:Yn(),stageStart:Date.now(),interactionType:e};return}const w=Date.now(),b=Object.freeze({...s.current,kind:"timeout-stage",blockingTimeEnd:w,commitEnd:performance.now()});s.current={kind:"uninitialized-stage",interactionUUID:Yn(),stageStart:w,interactionType:e};let _=!1;const T=C=>{var P;_=!0;const A=C.kind==="auto-complete-race"?C.detailedTiming.commitEnd-C.detailedTiming.interactionStartDetail:C.entry.latency,U={detailedTiming:b,latency:A,completedAt:Date.now(),flushNeeded:!0};(P=t==null?void 0:t.onComplete)==null||P.call(t,b.interactionUUID,U,C);const D=Nr.filter(V=>V.interactionUUID!==b.interactionUUID);return Nr=_t.fromArray(D,fu),U},M={completeInteraction:T,endDateTime:Date.now(),startDateTime:b.blockingTimeStart,type:e,interactionUUID:b.interactionUUID};if(Nr.push(M),CC())setTimeout(()=>{if(_)return;T({kind:"auto-complete-race",detailedTiming:b,interactionUUID:b.interactionUUID});const C=Nr.filter(A=>A.interactionUUID!==b.interactionUUID);Nr=_t.fromArray(C,fu)},1e3);else{const C=Nr.filter(A=>A.interactionUUID!==b.interactionUUID);Nr=_t.fromArray(C,fu),T({kind:"auto-complete-race",detailedTiming:b,interactionUUID:b.interactionUUID})}}})},d=h=>{const p=Yn();u(h,p,()=>p!==r)};return e==="keyboard"&&document.addEventListener("keypress",d),()=>{document.removeEventListener(i({phase:"start"}),l,{capture:!0}),document.removeEventListener("keypress",d)}},gw=e=>{var t;return(t=Nm(e,r=>{if(nl(r))return!0}))==null?void 0:t.stateNode},CC=()=>"PerformanceEventTiming"in globalThis,$x=e=>{const t=r=>{var y,g,w,b,_;const i=Ot(r.type);if(!i)return;const s=e[i];if(!s){const T=new Set,M=r.return&&mo(r.return),S=M&&Ot(M[0]);S&&T.add(S);const{selfTime:C,totalTime:A}=Wa(r),U=tw(r),D={current:[],changes:new Set,changesCounts:new Map},P={fiberProps:U.fiberProps||D,fiberState:U.fiberState||D,fiberContext:U.fiberContext||D};e[i]={renderCount:1,hasMemoCache:rl(r),wasFiberRenderMount:vw(r),parents:T,selfTime:C,totalTime:A,nodeInfo:[{element:gw(r),name:Ot(r.type)??"Unknown",selfTime:Wa(r).selfTime}],changes:P};return}if((g=(y=mo(r))==null?void 0:y[0])==null?void 0:g.type){const T=r.return&&mo(r.return),M=T&&Ot(T[0]);M&&s.parents.add(M)}const{selfTime:u,totalTime:d}=Wa(r),h=tw(r);if(!h)return;const p={current:[],changes:new Set,changesCounts:new Map};s.wasFiberRenderMount=s.wasFiberRenderMount||vw(r),s.hasMemoCache=s.hasMemoCache||rl(r),s.changes={fiberProps:Yh(((w=s.changes)==null?void 0:w.fiberProps)||p,h.fiberProps||p),fiberState:Yh(((b=s.changes)==null?void 0:b.fiberState)||p,h.fiberState||p),fiberContext:Yh(((_=s.changes)==null?void 0:_.fiberContext)||p,h.fiberContext||p)},s.renderCount+=1,s.selfTime+=u,s.totalTime+=d,s.nodeInfo.push({element:gw(r),name:Ot(r.type)??"Unknown",selfTime:Wa(r).selfTime})};return oe.interactionListeningForRenders=t,()=>{oe.interactionListeningForRenders===t&&(oe.interactionListeningForRenders=null)}},Yh=(e,t)=>{const r={current:[...e.current],changes:new Set,changesCounts:new Map};for(const i of t.current)r.current.some(s=>s.name===i.name)||r.current.push(i);for(const i of t.changes)if(typeof i=="string"||typeof i=="number"){r.changes.add(i);const s=e.changesCounts.get(i)||0,l=t.changesCounts.get(i)||0;r.changesCounts.set(i,s+l)}return r},vw=e=>{if(!e.alternate)return!0;const t=e.alternate,r=t&&t.memoizedState!=null&&t.memoizedState.element!=null&&t.memoizedState.isDehydrated!==!0,i=e.memoizedState!=null&&e.memoizedState.element!=null&&e.memoizedState.isDehydrated!==!0;return!r&&i},MC=e=>{let t;const r=new Set,i=(p,y)=>{const g=typeof p=="function"?p(t):p;if(!Object.is(g,t)){const w=t;t=y??(typeof g!="object"||g===null)?g:Object.assign({},t,g),r.forEach(b=>b(t,w))}},s=()=>t,d={setState:i,getState:s,getInitialState:()=>h,subscribe:(p,y)=>{let g,w;y?(g=p,w=y):w=p;let b=g?g(t):void 0;const _=(T,M)=>{if(g){const S=g(T),C=g(M);Object.is(b,S)||(b=S,w(S,C))}else w(T,M)};return r.add(_),()=>r.delete(_)}},h=t=e(i,s,d);return d},Hx=e=>MC,Gc=null;Hx()(e=>({state:{events:[]},actions:{addEvent:t=>{e(r=>({state:{events:[...r.state.events,t]}}))},clear:()=>{e({state:{events:[]}})}}}));var Bh=200,cl=Hx()((e,t)=>{const r=new Set;return{state:{events:new _t(Bh)},actions:{addEvent:i=>{r.forEach(h=>h(i));const s=[...t().state.events,i],l=(h,p)=>{const y=s.find(g=>{if(g.kind!=="long-render"&&g.id!==h.id&&(h.data.startAt<=g.data.startAt&&h.data.endAt<=g.data.endAt&&h.data.endAt>=g.data.startAt||g.data.startAt<=h.data.startAt&&g.data.endAt>=h.data.startAt||h.data.startAt<=g.data.startAt&&h.data.endAt>=g.data.endAt))return!0});y&&p(y)},u=new Set;s.forEach(h=>{h.kind!=="interaction"&&l(h,()=>{u.add(h.id)})});const d=s.filter(h=>!u.has(h.id));e(()=>({state:{events:_t.fromArray(d,Bh)}}))},addListener:i=>(r.add(i),()=>{r.delete(i)}),clear:()=>{e({state:{events:new _t(Bh)}})}}}}),OC=()=>Nk(cl.subscribe,cl.getState),hu=null,pu=null,Xh=null,Vp,NC=()=>{const e=t=>{Vp=t.composedPath().map(r=>r.id).filter(Boolean).includes("react-scan-toolbar")};return document.addEventListener("mouseover",e),Xh=e,()=>{Xh&&document.removeEventListener("mouseover",Xh)}},AC=()=>{const e=()=>{hu=performance.now(),pu=performance.timeOrigin};return document.addEventListener("visibilitychange",e),()=>{document.removeEventListener("visibilitychange",e)}},Ix=150,Fh=[];function zC(){let e,t;function r(){let s=null;Gc=null,Gc={},s=$x(Gc);const l=performance.timeOrigin,u=performance.now();return e=requestAnimationFrame(()=>{t=setTimeout(()=>{const d=performance.now(),h=d-u,p=performance.timeOrigin;Fh.push(d+p);const y=Fh.filter(_=>d+p-_<=1e3),g=y.length;Fh=y;const w=hu!==null&&pu!==null?d+p-(pu+hu)<100:null,b=Vp!==null&&Vp;if(h>Ix&&!w&&document.visibilityState==="visible"&&!b){const _=p+d,T=u+l;cl.getState().actions.addEvent({kind:"long-render",id:Yn(),data:{endAt:_,startAt:T,meta:{fiberRenders:Gc,latency:h,fps:g}}})}hu=null,pu=null,s==null||s(),r()},0)}),s}const i=r();return()=>{i(),cancelAnimationFrame(e),clearTimeout(t)}}var RC=()=>{const e=_C(),t=NC(),r=AC(),i=zC(),s=async(h,p,y)=>{cl.getState().actions.addEvent({kind:"interaction",id:Yn(),data:{startAt:p.detailedTiming.blockingTimeStart,endAt:performance.now()+performance.timeOrigin,meta:{...p,kind:y.kind}}});const g=ju.getChannelState("recording");p.detailedTiming.stopListeningForRenders(),g.length&&ju.updateChannelState("recording",()=>new _t(or))},l=mw("pointer",{onComplete:s}),u=mw("keyboard",{onComplete:s}),d=TC(h=>{hw.setState(_t.fromArray(hw.getCurrentState().concat(h),Ux))});return()=>{t(),r(),i(),e(),l(),d(),u()}},ul=e=>{const t=e.filter(r=>r.length>2);return t.length===0?e.at(-1)??"Unknown":t.at(-1)},Nt=e=>{switch(e.kind){case"interaction":{const{renderTime:t,otherJSTime:r,framePreparation:i,frameConstruction:s,frameDraw:l}=e;return t+r+i+s+(l??0)}case"dropped-frames":return e.otherTime+e.renderTime}},DC=e=>e.wasFiberRenderMount||e.hasMemoCache?!1:e.changes.context.length===0&&e.changes.props.length===0&&e.changes.state.length===0,_l=e=>{const t=Nt(e.timing);switch(e.kind){case"interaction":return t<200?"low":t<500?"needs-improvement":"high";case"dropped-frames":return t<50?"low":t<Ix?"needs-improvement":"high"}},bn=()=>Um(qx),qx=J1(null),Yx=({size:e=24,className:t})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:L(["lucide lucide-chevron-right",t]),children:v("path",{d:"m9 18 6-6-6-6"})}),jC=({className:e="",size:t=24,events:r=[]})=>{const i=r.includes(!0),s=r.filter(d=>d).length,l=s>99?">99":s,u=i?Math.max(t*.6,14):Math.max(t*.4,6);return v("div",{className:"relative",children:[v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:`lucide lucide-bell ${e}`,children:[v("path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}),v("path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"})]}),r.length>0&&s>0&&Le.options.value.showNotificationCount&&v("div",{className:L(["absolute",i?"-top-2.5 -right-2.5":"-top-1 -right-1","rounded-full","flex items-center justify-center","text-[8px] font-medium text-white","aspect-square",i?"bg-red-500/90":"bg-purple-500/90"]),style:{width:`${u}px`,height:`${u}px`,padding:i?"0.5px":"0"},children:i&&l})]})},Uu=({className:e="",size:t=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[v("path",{d:"M18 6 6 18"}),v("path",{d:"m6 6 12 12"})]}),UC=({className:e="",size:t=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[v("path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}),v("path",{d:"M16 9a5 5 0 0 1 0 6"}),v("path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"})]}),LC=({className:e="",size:t=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[v("path",{d:"M16 9a5 5 0 0 1 .95 2.293"}),v("path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96"}),v("path",{d:"m2 2 20 20"}),v("path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"}),v("path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686"})]}),$C=({size:e=24,className:t})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:L(["lucide lucide-arrow-left",t]),children:[v("path",{d:"m12 19-7-7 7-7"}),v("path",{d:"M19 12H5"})]}),HC=({className:e="",size:t=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[v("path",{d:"M14 4.1 12 6"}),v("path",{d:"m5.1 8-2.9-.8"}),v("path",{d:"m6 12-1.9 2"}),v("path",{d:"M7.2 2.2 8 5.1"}),v("path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"})]}),IC=({className:e="",size:t=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[v("path",{d:"M10 8h.01"}),v("path",{d:"M12 12h.01"}),v("path",{d:"M14 8h.01"}),v("path",{d:"M16 12h.01"}),v("path",{d:"M18 8h.01"}),v("path",{d:"M6 8h.01"}),v("path",{d:"M7 16h10"}),v("path",{d:"M8 12h.01"}),v("rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"})]}),qC=({className:e="",size:t=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,style:{transform:"rotate(180deg)"},children:[v("circle",{cx:"12",cy:"12",r:"10"}),v("path",{d:"m4.9 4.9 14.2 14.2"})]}),YC=({className:e="",size:t=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[v("polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}),v("polyline",{points:"16 17 22 17 22 11"})]}),Bx=({children:e,triggerContent:t,wrapperProps:r})=>{const[i,s]=Ne("closed"),[l,u]=Ne(null),[d,h]=Ne({width:window.innerWidth,height:window.innerHeight}),p=he(null),y=he(null),g=Um(eg),w=he(!1);Me(()=>{const S=()=>{h({width:window.innerWidth,height:window.innerHeight}),b()};return window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[]);const b=()=>{if(p.current&&g){const S=p.current.getBoundingClientRect(),C=g.getBoundingClientRect(),A=S.left+S.width/2,U=S.top,D=new DOMRect(A-C.left,U-C.top,S.width,S.height);u(D)}};Me(()=>{b()},[p.current]),Me(()=>{if(i==="opening"){const S=setTimeout(()=>s("open"),120);return()=>clearTimeout(S)}else if(i==="closing"){const S=setTimeout(()=>s("closed"),120);return()=>clearTimeout(S)}},[i]),Me(()=>{const S=setInterval(()=>{!w.current&&i!=="closed"&&s("closing")},1e3);return()=>clearInterval(S)},[i]);const _=()=>{w.current=!0,b(),s("opening")},T=()=>{w.current=!1,b(),s("closing")},M=()=>{var ne;if(!l||!g)return{top:0,left:0};const S=g.getBoundingClientRect(),C=175,A=((ne=y.current)==null?void 0:ne.offsetHeight)||40,U=5,D=l.x+S.left,P=l.y+S.top;let V=D,ee=P-4;return V-C/2<U?V=U+C/2:V+C/2>d.width-U&&(V=d.width-U-C/2),ee-A<U&&(ee=P+l.height+4),{top:ee-S.top,left:V-S.left}};return v(je,{children:[g&&l&&i!=="closed"&&jk(v("div",{ref:y,className:L(["absolute z-100 bg-white text-black rounded-lg px-3 py-2 shadow-lg","transform transition-all duration-120 ease-[cubic-bezier(0.23,1,0.32,1)]",'after:content-[""] after:absolute after:top-[100%]',"after:left-1/2 after:-translate-x-1/2","after:w-[10px] after:h-[6px]","after:border-l-[5px] after:border-l-transparent","after:border-r-[5px] after:border-r-transparent","after:border-t-[6px] after:border-t-white","pointer-events-none",i==="opening"||i==="closing"?"opacity-0 translate-y-1":"opacity-100 translate-y-0"]),style:{top:M().top+"px",left:M().left+"px",transform:"translate(-50%, -100%)",minWidth:"175px"},children:e}),g),v("div",{ref:p,onMouseEnter:_,onMouseLeave:T,...r,children:t})]})},BC=({selectedEvent:e})=>{const{notificationState:t,setNotificationState:r,setRoute:i}=bn();return v("div",{className:L(["flex w-full justify-between items-center px-3 py-2 text-xs"]),children:[v("div",{className:L(["bg-[#18181B] flex items-center gap-x-1 p-1 rounded-sm"]),children:[v("button",{onClick:()=>{i({route:"render-visualization",routeMessage:null})},className:L(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",t.route==="render-visualization"||t.route==="render-explanation"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Ranked"}),v("button",{onClick:()=>{i({route:"other-visualization",routeMessage:null})},className:L(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",t.route==="other-visualization"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Overview"}),v("button",{onClick:()=>{i({route:"optimize",routeMessage:null})},className:L(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",t.route==="optimize"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:v("span",{children:"Prompts"})})]}),v(Bx,{triggerContent:v("button",{onClick:()=>{r(s=>{s.audioNotificationsOptions.enabled&&s.audioNotificationsOptions.audioContext.state!=="closed"&&s.audioNotificationsOptions.audioContext.close();const l=s.audioNotificationsOptions.enabled;localStorage.setItem("react-scan-notifications-audio",String(!l));const u=new AudioContext;return s.audioNotificationsOptions.enabled||qm(u),l&&u.close(),{...s,audioNotificationsOptions:l?{audioContext:null,enabled:!1}:{audioContext:u,enabled:!0}}})},className:"ml-auto",children:v("div",{className:L(["flex gap-x-2 justify-center items-center text-[#6E6E77]"]),children:[v("span",{children:"Alerts"}),t.audioNotificationsOptions.enabled?v(UC,{size:16,className:"text-[#6E6E77]"}):v(LC,{size:16,className:"text-[#6E6E77]"})]})}),children:v(je,{children:"Play a chime when a slowdown is recorded"})})]})},ro=e=>{let t="";return e.toSorted((i,s)=>s.totalTime-i.totalTime).slice(0,30).filter(i=>i.totalTime>5).forEach(i=>{let s="";s+="Component Name:",s+=i.name,s+=`
`,s+=`Rendered: ${i.count} times
`,s+=`Sum of self times for ${i.name} is ${i.totalTime.toFixed(0)}ms
`,i.changes.props.length>0&&(s+=`Changed props for all ${i.name} instances ("name:count" pairs)
`,i.changes.props.forEach(l=>{s+=`${l.name}:${l.count}x
`})),i.changes.state.length>0&&(s+=`Changed state for all ${i.name} instances ("hook index:count" pairs)
`,i.changes.state.forEach(l=>{s+=`${l.index}:${l.count}x
`})),i.changes.context.length>0&&(s+=`Changed context for all ${i.name} instances ("context display name (if exists):count" pairs)
`,i.changes.context.forEach(l=>{s+=`${l.name}:${l.count}x
`})),t+=s,t+=`
`}),t},XC=({renderTime:e,eHandlerTimeExcludingRenders:t,toRafTime:r,commitTime:i,framePresentTime:s,formattedReactData:l})=>`I will provide you with a set of high level, and low level performance data about an interaction in a React App:
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
${l}`,FC=({interactionType:e,name:t,componentPath:r,time:i,renderTime:s,eHandlerTimeExcludingRenders:l,toRafTime:u,commitTime:d,framePresentTime:h,formattedReactData:p})=>`You will attempt to implement a performance improvement to a user interaction in a React app. You will be provided with data about the interaction, and the slow down.

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

`,PC=({renderTime:e,otherTime:t,formattedReactData:r})=>`You will attempt to implement a performance improvement to a large slowdown in a react app

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
`,VC=({renderTime:e,otherTime:t,formattedReactData:r})=>`Your goal will be to help me find the source of a performance problem in a React App. I collected a large dataset about this specific performance problem.

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
`,GC=({renderTime:e,otherTime:t,formattedReactData:r})=>`I will provide you with a set of high level, and low level performance data about a large frame drop in a React App:
### High level
- react component render time: ${e.toFixed(0)}ms
- how long it took to run everything else (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${t}ms

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${r}`,QC=({interactionType:e,name:t,time:r,renderTime:i,eHandlerTimeExcludingRenders:s,toRafTime:l,commitTime:u,framePresentTime:d,formattedReactData:h})=>`Your goal will be to help me find the source of a performance problem. I collected a large dataset about this specific performance problem.

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
`,Gp=(e,t)=>Vn(()=>{switch(e){case"data":switch(t.kind){case"dropped-frames":return GC({formattedReactData:ro(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return XC({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:ro(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,renderTime:t.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),toRafTime:t.timing.framePreparation})}case"explanation":switch(t.kind){case"dropped-frames":return VC({formattedReactData:ro(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return QC({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:ro(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:ul(t.componentPath),renderTime:t.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),time:Nt(t.timing),toRafTime:t.timing.framePreparation})}case"fix":switch(t.kind){case"dropped-frames":return PC({formattedReactData:ro(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return FC({commitTime:t.timing.frameConstruction,componentPath:t.componentPath.join(">"),eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:ro(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:ul(t.componentPath),renderTime:t.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),time:Nt(t.timing),toRafTime:t.timing.framePreparation})}}}),WC=({selectedEvent:e})=>{const[t,r]=Ne("fix"),[i,s]=Ne(!1);return v("div",{className:L(["w-full h-full"]),children:[v("div",{className:L(["border border-[#27272A] rounded-sm h-4/5 text-xs overflow-hidden"]),children:[v("div",{className:L(["bg-[#18181B] p-1 rounded-t-sm"]),children:v("div",{className:L(["flex items-center gap-x-1"]),children:[v("button",{onClick:()=>r("fix"),className:L(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",t==="fix"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Fix"}),v("button",{onClick:()=>r("explanation"),className:L(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",t==="explanation"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Explanation"}),v("button",{onClick:()=>r("data"),className:L(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",t==="data"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Data"})]})}),v("div",{className:L(["overflow-y-auto h-full"]),children:v("pre",{className:L(["p-2 h-full","whitespace-pre-wrap break-words","text-gray-300 font-mono "]),children:Gp(t,e)})})]}),v("button",{onClick:async()=>{const l=Gp(t,e);await navigator.clipboard.writeText(l),s(!0),setTimeout(()=>s(!1),1e3)},className:L(["mt-4 px-4 py-2 bg-[#18181B] text-[#6E6E77] rounded-sm","hover:text-white transition-colors duration-200","flex items-center justify-center gap-x-2 text-xs"]),children:[v("span",{children:i?"Copied!":"Copy Prompt"}),v("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:L(["transition-transform duration-200",i&&"scale-110"]),children:i?v("path",{d:"M20 6L9 17l-5-5"}):v(je,{children:[v("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),v("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})]})},ZC=(e,t)=>{switch(e.kind){case"dropped-frames":return[...t?[{name:"Total Processing Time",time:Nt(e.timing),color:"bg-red-500",kind:"total-processing-time"}]:[{name:"Renders",time:e.timing.renderTime,color:"bg-purple-500",kind:"render"},{name:"JavaScript, DOM updates, Draw Frame",time:e.timing.otherTime,color:"bg-[#4b4b4b]",kind:"other-frame-drop"}]];case"interaction":return[...t?[]:[{name:"Renders",time:e.timing.renderTime,color:"bg-purple-500",kind:"render"}],{name:t?"React Renders, Hooks, Other JavaScript":"JavaScript/React Hooks ",time:e.timing.otherJSTime,color:"bg-[#EFD81A]",kind:"other-javascript"},{name:"Update DOM and Draw New Frame",time:Nt(e.timing)-e.timing.renderTime-e.timing.otherJSTime,color:"bg-[#1D3A66]",kind:"other-not-javascript"}]}},KC=({selectedEvent:e})=>{var h;const[t]=Ne(Ku()??!1),{notificationState:r}=bn(),[i,s]=Ne((h=r.routeMessage)!=null&&h.name?[r.routeMessage.name]:[]),l=ZC(e,t),u=Um(eg);Me(()=>{var p;if((p=r.routeMessage)!=null&&p.name){const y=u==null?void 0:u.querySelector("#overview-scroll-container"),g=u==null?void 0:u.querySelector(`#react-scan-overview-bar-${r.routeMessage.name}`);if(y&&g){const w=g.getBoundingClientRect().top,b=y.getBoundingClientRect().top,_=w-b;y.scrollTop=y.scrollTop+_}}},[r.route]),Me(()=>{r.route==="other-visualization"&&s(p=>{var y;return(y=r.routeMessage)!=null&&y.name?[r.routeMessage.name]:p})},[r.route]);const d=l.reduce((p,y)=>p+y.time,0);return v("div",{className:"rounded-sm border border-zinc-800 text-xs",children:[v("div",{className:"p-2 border-b border-zinc-800 bg-zinc-900/50",children:v("div",{className:"flex items-center justify-between",children:[v("h3",{className:"text-xs font-medium",children:"What was time spent on?"}),v("span",{className:"text-xs text-zinc-400",children:["Total: ",d.toFixed(0),"ms"]})]})}),v("div",{className:"divide-y divide-zinc-800",children:l.map(p=>{const y=i.includes(p.kind);return v("div",{id:`react-scan-overview-bar-${p.kind}`,children:[v("button",{onClick:()=>s(g=>g.includes(p.kind)?g.filter(w=>w!==p.kind):[...g,p.kind]),className:"w-full px-3 py-2 flex items-center gap-4 hover:bg-zinc-800/50 transition-colors",children:v("div",{className:"flex-1",children:[v("div",{className:"flex items-center justify-between mb-2",children:[v("div",{className:"flex items-center gap-0.5",children:[v("svg",{className:`h-4 w-4 text-zinc-400 transition-transform ${y?"rotate-90":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:v("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),v("span",{className:"font-medium flex items-center text-left",children:p.name})]}),v("span",{className:" text-zinc-400",children:[p.time.toFixed(0),"ms"]})]}),v("div",{className:"h-1 bg-zinc-800 rounded-full overflow-hidden",children:v("div",{className:`h-full ${p.color} transition-all`,style:{width:`${p.time/d*100}%`}})})]})}),y&&v("div",{className:"bg-zinc-900/30 border-t border-zinc-800 px-2.5 py-3",children:v("p",{className:" text-zinc-400 mb-4 text-xs",children:Vn(()=>{switch(e.kind){case"interaction":switch(p.kind){case"render":return v(ao,{input:e3(e)});case"other-javascript":return v(ao,{input:t3(e)});case"other-not-javascript":return v(ao,{input:JC(e)})}case"dropped-frames":switch(p.kind){case"total-processing-time":return v(ao,{input:{kind:"total-processing",data:{time:Nt(e.timing)}}});case"render":return v(je,{children:v(ao,{input:{kind:"render",data:{topByTime:e.groupedFiberRenders.toSorted((g,w)=>w.totalTime-g.totalTime).slice(0,3).map(g=>({name:g.name,percentage:g.totalTime/Nt(e.timing)}))}}})});case"other-frame-drop":return v(ao,{input:{kind:"other"}})}}})})})]},p.kind)})})]})},JC=e=>{const t=e.groupedFiberRenders.reduce((l,u)=>l+u.count,0),r=e.timing.renderTime,i=Nt(e.timing),s=r/i*100;return t>100?{kind:"high-render-count-update-dom-draw-frame",data:{count:t,percentageOfTotal:s,copyButton:v(yw,{})}}:{kind:"update-dom-draw-frame",data:{copyButton:v(yw,{})}}},yw=()=>{const[e,t]=Ne(!1),{notificationState:r}=bn();return v("button",{onClick:async()=>{r.selectedEvent&&(await navigator.clipboard.writeText(Gp("explanation",r.selectedEvent)),t(!0),setTimeout(()=>t(!1),1e3))},className:"bg-zinc-800 flex hover:bg-zinc-700 text-zinc-200 px-2 py-1 rounded gap-x-3",children:[v("span",{children:e?"Copied!":"Copy Prompt"}),v("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:L(["transition-transform duration-200",e&&"scale-110"]),children:e?v("path",{d:"M20 6L9 17l-5-5"}):v(je,{children:[v("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),v("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})},e3=e=>e.timing.renderTime/Nt(e.timing)>.3?{kind:"render",data:{topByTime:e.groupedFiberRenders.toSorted((t,r)=>r.totalTime-t.totalTime).slice(0,3).map(t=>({percentage:t.totalTime/Nt(e.timing),name:t.name}))}}:{kind:"other"},t3=e=>{const t=e.groupedFiberRenders.reduce((r,i)=>r+i.count,0);return e.timing.otherJSTime/Nt(e.timing)<.2?{kind:"js-explanation-base"}:e.groupedFiberRenders.find(r=>r.count>200)||e.groupedFiberRenders.reduce((r,i)=>r+i.count,0)>500?{kind:"high-render-count-high-js",data:{renderCount:t,topByCount:e.groupedFiberRenders.filter(r=>r.count>100).toSorted((r,i)=>i.count-r.count).slice(0,3)}}:e.timing.otherJSTime/Nt(e.timing)>.3?e.timing.renderTime>.2?{kind:"js-explanation-base"}:{kind:"low-render-count-high-js",data:{renderCount:t}}:{kind:"js-explanation-base"}},ao=({input:e})=>{switch(e.kind){case"total-processing":return v("div",{className:L(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:["This is the time it took to draw the entire frame that was presented to the user. To be at 60FPS, this number needs to be ","<=16ms"]}),v("p",{children:'To debug the issue, check the "Ranked" tab to see if there are significant component renders'}),v("p",{children:"On a production React build, React Scan can't access the time it took for component to render. To get that information, run React Scan on a development build"}),v("p",{children:["To understand precisely what caused the slowdown while in production, use the ",v("strong",{children:"Chrome profiler"})," and analyze the function call times."]}),v("p",{})]});case"render":return v("div",{className:L(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:"This is the time it took React to run components, and internal logic to handle the output of your component."}),v("div",{className:L(["flex flex-col"]),children:[v("p",{children:"The slowest components for this time period were:"}),e.data.topByTime.map(t=>v("div",{children:[v("strong",{children:t.name}),":"," ",(t.percentage*100).toFixed(0),"% of total"]},t.name))]}),v("p",{children:'To view the render times of all your components, and what caused them to render, go to the "Ranked" tab'}),v("p",{children:'The "Ranked" tab shows the render times of every component.'}),v("p",{children:"The render times of the same components are grouped together into one bar."}),v("p",{children:"Clicking the component will show you what props, state, or context caused the component to re-render."})]});case"js-explanation-base":return v("div",{className:L(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),v("p",{children:["The most common culprit for high JS time is expensive hooks, like expensive callbacks inside of ",v("code",{children:"useEffect"}),"'s or a large number of useEffect's called, but this can also be JavaScript event handlers (",v("code",{children:"'onclick'"}),", ",v("code",{children:"'onchange'"}),") that performed expensive computation."]}),v("p",{children:"If you have lots of components rendering that call hooks, like useEffect, it can add significant overhead even if the callbacks are not expensive. If this is the case, you can try optimizing the renders of those components to avoid the hook from having to run."}),v("p",{children:["You should profile your app using the"," ",v("strong",{children:"Chrome DevTools profiler"})," to learn exactly which functions took the longest to execute."]})]});case"high-render-count-high-js":return v("div",{className:L(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),e.data.renderCount===0?v(je,{children:[v("p",{children:"There were no renders, which means nothing related to React caused this slowdown. The most likely cause of the slowdown is a slow JavaScript event handler, or code related to a Web API"}),v("p",{children:["You should try to reproduce the slowdown while profiling your website with the",v("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]}):v(je,{children:[" ",v("p",{children:["There were ",v("strong",{children:e.data.renderCount})," renders, which could have contributed to the high JavaScript/Hook time if they ran lots of hooks, like ",v("code",{children:"useEffects"}),"."]}),v("div",{className:L(["flex flex-col"]),children:[v("p",{children:"You should try optimizing the renders of:"}),e.data.topByCount.map(t=>v("div",{children:["- ",v("strong",{children:t.name})," (rendered ",t.count,"x)"]},t.name))]}),"and then checking if the problem still exists.",v("p",{children:["You can also try profiling your app using the"," ",v("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]})]});case"low-render-count-high-js":return v("div",{className:L(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),v("p",{children:["There were only ",v("strong",{children:e.data.renderCount})," renders detected, which means either you had very expensive hooks like"," ",v("code",{children:"useEffect"}),"/",v("code",{children:"useLayoutEffect"}),", or there is other JavaScript running during this interaction that took up the majority of the time."]}),v("p",{children:["To understand precisely what caused the slowdown, use the"," ",v("strong",{children:"Chrome profiler"})," and analyze the function call times."]})]});case"high-render-count-update-dom-draw-frame":return v("div",{className:L(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),v("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),v("p",{children:["During this interaction, there were"," ",v("strong",{children:e.data.count})," renders, which was"," ",v("strong",{children:[e.data.percentageOfTotal.toFixed(0),"%"]})," of the time spent processing"]}),v("p",{children:"The work performed as a result of the renders may have forced the browser to spend a lot of time to draw the next frame."}),v("p",{children:'You can try optimizing the renders to see if the performance problem still exists using the "Ranked" tab.'}),v("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),v("p",{children:e.data.copyButton}),v("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),v("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"update-dom-draw-frame":return v("div",{className:L(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),v("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),v("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),v("p",{children:e.data.copyButton}),v("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),v("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"other":return v("div",{className:L(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:["This is the time it took to run everything other than React renders. This can be hooks like ",v("code",{children:"useEffect"}),", other JavaScript not part of React, or work the browser has to do to update the DOM and draw the next frame."]}),v("p",{children:["To get a better picture of what happened, profile your app using the"," ",v("strong",{children:"Chrome profiler"})," when the performance problem arises."]})]})}},Ze=null,dt=null,Ge=yt({kind:"idle",current:null}),Ph=null,vo=()=>{Ph&&cancelAnimationFrame(Ph),Ph=requestAnimationFrame(()=>{if(!Ze||!dt)return;dt.clearRect(0,0,Ze.width,Ze.height);const e="hsl(271, 76%, 53%)",t=Ge.value,{alpha:r,current:i}=Vn(()=>{var s,l;switch(t.kind){case"transition":{const u=(s=t.current)!=null&&s.alpha&&t.current.alpha>0?t.current:t.transitionTo;return{alpha:u?u.alpha:0,current:u}}case"move-out":return{alpha:((l=t.current)==null?void 0:l.alpha)??0,current:t.current};case"idle":return{alpha:1,current:t.current}}});switch(i==null||i.rects.forEach(s=>{dt&&(dt.shadowColor=e,dt.shadowBlur=6,dt.strokeStyle=e,dt.lineWidth=2,dt.globalAlpha=r,dt.beginPath(),dt.rect(s.left,s.top,s.width,s.height),dt.stroke(),dt.shadowBlur=0,dt.beginPath(),dt.rect(s.left,s.top,s.width,s.height),dt.stroke())}),t.kind){case"move-out":{if(t.current.alpha===0){Ge.value={kind:"idle",current:null};return}t.current.alpha<=.01&&(t.current.alpha=0),t.current.alpha=Math.max(0,t.current.alpha-.03),vo();return}case"transition":{if(t.current&&t.current.alpha>0){t.current.alpha=Math.max(0,t.current.alpha-.03),vo();return}if(t.transitionTo.alpha===1){Ge.value={kind:"idle",current:t.transitionTo};return}t.transitionTo.alpha=Math.min(t.transitionTo.alpha+.03,1),vo()}case"idle":return}})},Vh=null,n3=e=>{if(Ze=document.createElement("canvas"),dt=Ze.getContext("2d",{alpha:!0}),!dt)return null;const t=window.devicePixelRatio||1,{innerWidth:r,innerHeight:i}=window;Ze.style.width=`${r}px`,Ze.style.height=`${i}px`,Ze.width=r*t,Ze.height=i*t,Ze.style.position="fixed",Ze.style.left="0",Ze.style.top="0",Ze.style.pointerEvents="none",Ze.style.zIndex="2147483600",dt.scale(t,t),e.appendChild(Ze),Vh&&window.removeEventListener("resize",Vh);const s=()=>{if(!Ze||!dt)return;const l=window.devicePixelRatio||1,{innerWidth:u,innerHeight:d}=window;Ze.style.width=`${u}px`,Ze.style.height=`${d}px`,Ze.width=u*l,Ze.height=d*l,dt.scale(l,l),vo()};return Vh=s,window.addEventListener("resize",s),Ge.subscribe(()=>{requestAnimationFrame(()=>{vo()})}),r3};function r3(){Ze!=null&&Ze.parentNode&&Ze.parentNode.removeChild(Ze),Ze=null,dt=null}var Bs=()=>{var t;const e=Ge.value.current?Ge.value.current:Ge.value.kind==="transition"?Ge.value.transitionTo:null;if(e){if(Ge.value.kind==="transition"){Ge.value={kind:"move-out",current:((t=Ge.value.current)==null?void 0:t.alpha)===0?Ge.value.transitionTo:Ge.value.current??Ge.value.transitionTo};return}Ge.value={kind:"move-out",current:{alpha:0,...e}}}},a3=({selectedEvent:e})=>{const t=Nt(e.timing),r=t-e.timing.renderTime,[i]=Ne(Ku()),l=e.groupedFiberRenders.map(p=>({event:p,kind:"render",totalTime:i?p.count:p.totalTime})),u=Vn(()=>{switch(e.kind){case"dropped-frames":return e.timing.renderTime/t<.1;case"interaction":return(e.timing.otherJSTime+e.timing.renderTime)/t<.2}});e.kind==="interaction"&&!i&&l.push({kind:"other-javascript",totalTime:e.timing.otherJSTime}),u&&!i&&(e.kind==="interaction"?l.push({kind:"other-not-javascript",totalTime:Nt(e.timing)-e.timing.renderTime-e.timing.otherJSTime}):l.push({kind:"other-frame-drop",totalTime:r}));const d=he({lastCallAt:null,timer:null}),h=l.reduce((p,y)=>p+y.totalTime,0);return v("div",{className:L(["flex flex-col h-full w-full gap-y-1"]),children:[Vn(()=>{if(i&&l.length===0)return v("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[v("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No data available"}),v("p",{className:"text-x w-full text-lefts",children:"No data was collected during this period"})]});if(l.length===0)return v("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[v("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No renders collected"}),v("p",{className:"text-x w-full text-lefts",children:"There were no renders during this period"})]})}),l.toSorted((p,y)=>y.totalTime-p.totalTime).map(p=>v(Xx,{bars:l,bar:p,debouncedMouseEnter:d,totalBarTime:h,isProduction:i},p.kind==="render"?p.event.id:p.kind))]})},i3=e=>e.current&&e.current.alpha>0?"fading-out":"fading-in",Xx=({bar:e,debouncedMouseEnter:t,totalBarTime:r,isProduction:i,bars:s,depth:l=0})=>{const{setNotificationState:u,setRoute:d}=bn(),[h,p]=Ne(!1),y=e.kind==="render"?e.event.parents.size===0:!0,g=s.filter(_=>_.kind==="render"&&e.kind==="render"?e.event.parents.has(_.event.name)&&_.event.name!==e.event.name:!1),w=e.kind==="render"?Array.from(e.event.parents).filter(_=>!s.some(T=>T.kind==="render"&&T.event.name===_)):[],b=()=>{e.kind==="render"?(u(_=>({..._,selectedFiber:e.event})),d({route:"render-explanation",routeMessage:null})):d({route:"other-visualization",routeMessage:{kind:"auto-open-overview-accordion",name:e.kind}})};return v("div",{className:"w-full",children:[v("div",{className:L(["w-full flex items-center relative text-xs min-w-0"]),children:[v("button",{onMouseLeave:()=>{t.current.timer&&clearTimeout(t.current.timer),Bs()},onMouseEnter:async()=>{const _=async()=>{if(t.current.lastCallAt=Date.now(),e.kind!=="render"){const A=Ge.value.current?Ge.value.current:Ge.value.kind==="transition"?Ge.value.transitionTo:null;if(!A){Ge.value={kind:"idle",current:null};return}Ge.value={kind:"move-out",current:{alpha:0,...A}};return}const T=Ge.value,M=Vn(()=>{switch(T.kind){case"transition":return T.transitionTo;case"idle":case"move-out":return T.current}}),S=[];if(T.kind==="transition"){const A=i3(T);Vn(()=>{switch(A){case"fading-in":{Ge.value={kind:"transition",current:T.transitionTo,transitionTo:{rects:S,alpha:0,name:e.event.name}};return}case"fading-out":{Ge.value={kind:"transition",current:Ge.value.current?{alpha:0,...Ge.value.current}:null,transitionTo:{rects:S,alpha:0,name:e.event.name}};return}}})}else Ge.value={kind:"transition",transitionTo:{rects:S,alpha:0,name:e.event.name},current:M?{alpha:0,...M}:null};const C=e.event.elements.filter(A=>A instanceof Element);for await(const A of Dx(C))A.forEach(({boundingClientRect:U})=>{S.push(U)}),vo()};if(t.current.lastCallAt&&Date.now()-t.current.lastCallAt<200){t.current.timer&&clearTimeout(t.current.timer),t.current.timer=setTimeout(()=>{_()},200);return}_()},onClick:b,className:L(["h-full w-[90%] flex items-center hover:bg-[#0f0f0f] rounded-l-md min-w-0 relative"]),children:[v("div",{style:{minWidth:"fit-content",width:`${e.totalTime/r*100}%`},className:L(["flex items-center rounded-sm text-white text-xs h-[28px] shrink-0",e.kind==="render"&&"bg-[#412162] group-hover:bg-[#5b2d89]",e.kind==="other-frame-drop"&&"bg-[#44444a] group-hover:bg-[#6a6a6a]",e.kind==="other-javascript"&&"bg-[#efd81a6b] group-hover:bg-[#efda1a2f]",e.kind==="other-not-javascript"&&"bg-[#214379d4] group-hover:bg-[#21437982]"])}),v("div",{className:L(["absolute inset-0 flex items-center px-2","min-w-0"]),children:v("div",{className:"flex items-center gap-x-2 min-w-0 w-full",children:[v("span",{className:L(["truncate"]),children:Vn(()=>{switch(e.kind){case"other-frame-drop":return"JavaScript, DOM updates, Draw Frame";case"other-javascript":return"JavaScript/React Hooks";case"other-not-javascript":return"Update DOM and Draw New Frame";case"render":return e.event.name}})}),e.kind==="render"&&DC(e.event)&&v("div",{style:{lineHeight:"10px"},className:L(["px-1 py-0.5 bg-[#6a369e] flex items-center rounded-sm font-semibold text-[8px] shrink-0"]),children:"Memoizable"})]})})]}),v("button",{onClick:()=>e.kind==="render"&&!y&&p(!h),className:L(["flex items-center min-w-fit shrink-0 rounded-r-md h-[28px]",!y&&"hover:bg-[#0f0f0f]",e.kind==="render"&&!y?"cursor-pointer":"cursor-default"]),children:[v("div",{className:"w-[20px] flex items-center justify-center",children:e.kind==="render"&&!y&&v(Yx,{className:L("transition-transform",h&&"rotate-90"),size:16})}),v("div",{style:{minWidth:y?"fit-content":i?"30px":"60px"},className:"flex items-center justify-end gap-x-1",children:[e.kind==="render"&&v("span",{className:L(["text-[10px]"]),children:["x",e.event.count]}),(e.kind!=="render"||!i)&&v("span",{className:"text-[10px] text-[#7346a0] pr-1",children:[e.totalTime<1?"<1":e.totalTime.toFixed(0),"ms"]})]})]}),l===0&&v("div",{className:L(["absolute right-0 top-1/2 transition-none -translate-y-1/2 bg-white text-black px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity mr-16","pointer-events-none"]),children:"Click to learn more"})]}),h&&(g.length>0||w.length>0)&&v("div",{className:"pl-3 flex flex-col gap-y-1 mt-1",children:[g.toSorted((_,T)=>T.totalTime-_.totalTime).map((_,T)=>v(Xx,{depth:l+1,bar:_,debouncedMouseEnter:t,totalBarTime:r,isProduction:i,bars:s},T)),w.map(_=>v("div",{className:"w-full",children:v("div",{className:"w-full flex items-center relative text-xs",children:v("div",{className:"h-full w-full flex items-center relative",children:[v("div",{className:"flex items-center rounded-sm text-white text-xs h-[28px] w-full"}),v("div",{className:"absolute inset-0 flex items-center px-2",children:v("span",{className:"truncate whitespace-nowrap text-white/70 w-full",children:_})})]})})},_))]})]})},o3=({selectedEvent:e,selectedFiber:t})=>{const{setRoute:r}=bn(),[i,s]=Ne(!0),[l]=Ne(Ku());jm(()=>{const d=localStorage.getItem("react-scan-tip-shown"),h=d==="true"?!0:d==="false"?!1:null;if(h===null){s(!0),localStorage.setItem("react-scan-tip-is-shown","true");return}h||s(!1)},[]);const u=t.changes.context.length===0&&t.changes.props.length===0&&t.changes.state.length===0;return v("div",{className:L(["w-full min-h-fit h-full flex flex-col py-4 pt-0 rounded-sm"]),children:[v("div",{className:L(["flex items-start gap-x-4 "]),children:[v("button",{onClick:()=>{r({route:"render-visualization",routeMessage:null})},className:L(["text-white hover:bg-[#34343b] flex gap-x-1 justify-center items-center mb-4 w-fit px-2.5 py-1.5 text-xs rounded-sm bg-[#18181B]"]),children:[v($C,{size:14})," ",v("span",{children:"Overview"})]}),v("div",{className:L(["flex flex-col gap-y-1"]),children:[v("div",{className:L(["text-sm font-bold text-white overflow-x-hidden"]),children:v("div",{className:"flex items-center gap-x-2 truncate",children:t.name})}),v("div",{className:L(["flex gap-x-2"]),children:[!l&&v(je,{children:v("div",{className:L(["text-xs text-gray-400"]),children:["• Render time: ",t.totalTime.toFixed(0),"ms"]})}),v("div",{className:L(["text-xs text-gray-400 mb-4"]),children:["• Renders: ",t.count,"x"]})]})]})]}),i&&!u&&v("div",{className:L(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex relative"]),children:[v("button",{onClick:()=>{s(!1),localStorage.setItem("react-scan-tip-shown","false")},className:L(["absolute right-2 top-2 rounded-sm p-1 hover:bg-[#18181B]"]),children:v(Uu,{size:12})}),v("div",{className:L(["w-1 bg-[#d36cff]"])}),v("div",{className:L(["flex-1"]),children:[v("div",{className:L(["px-3 py-2 text-gray-100 text-xs font-semibold"]),children:"How to stop renders"}),v("div",{className:L(["px-3 pb-2 text-gray-400 text-[10px]"]),children:"Stop the following props, state and context from changing between renders, and wrap the component in React.memo if not already"})]})]}),u&&v("div",{className:L(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex"]),children:[v("div",{className:L(["w-1 bg-[#d36cff]"])}),v("div",{className:L(["flex-1"]),children:[v("div",{className:L(["px-3 py-2 text-gray-100 text-sm font-semibold"]),children:"No changes detected"}),v("div",{className:L(["px-3 pb-2 text-gray-400 text-xs"]),children:"This component would not of rendered if it was memoized"})]})]}),v("div",{className:L(["flex w-full"]),children:[v("div",{className:L(["flex flex-col border border-[#27272A] rounded-l-sm overflow-hidden w-1/3"]),children:[v("div",{className:L(["text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Props"}),t.changes.props.length>0?t.changes.props.toSorted((d,h)=>h.count-d.count).map(d=>v("div",{className:L(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[v("span",{className:L(["text-white "]),children:d.name}),v("div",{className:L([" text-[8px]  text-[#d36cff] pl-1 py-1 "]),children:[d.count,"/",t.count,"x"]})]},d.name)):v("div",{className:L(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),v("div",{className:L(["flex flex-col border border-[#27272A] border-l-0 overflow-hidden w-1/3"]),children:[v("div",{className:L([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed State"}),t.changes.state.length>0?t.changes.state.toSorted((d,h)=>h.count-d.count).map(d=>v("div",{className:L(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[v("span",{className:L(["text-white "]),children:["index ",d.index]}),v("div",{className:L(["rounded-full  text-[#d36cff] pl-1 py-1 text-[8px]"]),children:[d.count,"/",t.count,"x"]})]},d.index)):v("div",{className:L(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),v("div",{className:L(["flex flex-col border border-[#27272A] border-l-0 rounded-r-sm overflow-hidden w-1/3"]),children:[v("div",{className:L([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Context"}),t.changes.context.length>0?t.changes.context.toSorted((d,h)=>h.count-d.count).map(d=>v("div",{className:L(["flex flex-col justify-between items-center border-t  border-[#27272A] px-1 py-1 bg-[#0A0A0A] text-[10px] overflow-x-auto"]),children:[v("span",{className:L(["text-white "]),children:d.name}),v("div",{className:L(["rounded-full text-[#d36cff] pl-1 py-1 text-[8px] text-wrap"]),children:[d.count,"/",t.count,"x"]})]},d.name)):v("div",{className:L(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A] py-2"]),children:"No changes"})]})]})]})},s3=()=>{const{notificationState:e,setNotificationState:t}=bn(),[r,i]=Ne("..."),s=he(null);if(Me(()=>{const l=setInterval(()=>{i(u=>u==="..."?"":u+".")},500);return()=>clearInterval(l)},[]),!e.selectedEvent)return v("div",{ref:s,className:L(["h-full w-full flex flex-col items-center justify-center relative py-2 px-4"]),children:[v("div",{className:L(["p-2 flex justify-center items-center border-[#27272A] absolute top-0 right-0"]),children:v("button",{onClick:()=>{Ke.value={view:"none"}},children:v(Uu,{size:18,className:"text-[#6F6F78]"})})}),v("div",{className:L(["flex flex-col items-start pt-5 bg-[#0A0A0A] p-5 rounded-sm max-w-md"," shadow-lg"]),children:v("div",{className:L(["flex flex-col items-start gap-y-4"]),children:[v("div",{className:L(["flex items-center"]),children:v("span",{className:L(["text-zinc-400 font-medium text-[17px]"]),children:["Scanning for slowdowns",r]})}),e.events.length!==0&&v("p",{className:L(["text-xs"]),children:["Click on an item in the"," ",v("span",{className:L(["text-purple-400"]),children:"History"})," list to get started"]}),v("p",{className:L(["text-zinc-600 text-xs"]),children:"You don't need to keep this panel open for React Scan to record slowdowns"}),v("p",{className:L(["text-zinc-600 text-xs"]),children:"Enable audio alerts to hear a delightful ding every time a large slowdown is recorded"}),v("button",{onClick:()=>{if(e.audioNotificationsOptions.enabled){t(u=>{var d,h;return((d=u.audioNotificationsOptions.audioContext)==null?void 0:d.state)!=="closed"&&((h=u.audioNotificationsOptions.audioContext)==null||h.close()),localStorage.setItem("react-scan-notifications-audio","false"),{...u,audioNotificationsOptions:{audioContext:null,enabled:!1}}});return}localStorage.setItem("react-scan-notifications-audio","true");const l=new AudioContext;qm(l),t(u=>({...u,audioNotificationsOptions:{enabled:!0,audioContext:l}}))},className:L(["px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-sm w-full"," text-sm flex items-center gap-x-2 justify-center"]),children:e.audioNotificationsOptions.enabled?v(je,{children:v("span",{className:"flex items-center gap-x-1",children:"Disable audio alerts"})}):v(je,{children:v("span",{className:"flex items-center gap-x-1",children:"Enable audio alerts"})})})]})})]});switch(e.route){case"render-visualization":return v(Qc,{children:v(a3,{selectedEvent:e.selectedEvent})});case"render-explanation":{if(!e.selectedFiber)throw new Error("Invariant: must have selected fiber when viewing render explanation");return v(Qc,{children:v(o3,{selectedFiber:e.selectedFiber,selectedEvent:e.selectedEvent})})}case"other-visualization":return v(Qc,{children:v("div",{className:L(["flex w-full h-full flex-col overflow-y-auto"]),id:"overview-scroll-container",children:v(KC,{selectedEvent:e.selectedEvent})})});case"optimize":return v(Qc,{children:v(WC,{selectedEvent:e.selectedEvent})})}e.route},Qc=({children:e})=>{const{notificationState:t}=bn();if(!t.selectedEvent)throw new Error("Invariant: d must have selected event when viewing render explanation");return v("div",{className:L(["w-full h-full flex flex-col gap-y-2"]),children:[v("div",{className:L(["h-[50px] w-full"]),children:v(BC,{selectedEvent:t.selectedEvent})}),v("div",{className:L(["h-calc(100%-50px) flex flex-col overflow-y-auto px-3"]),children:e})]})},l3=({selectedEvent:e})=>{const t=_l(e);switch(e.kind){case"interaction":return v("div",{className:L(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:v("div",{className:L(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[v("div",{className:L(["flex items-center gap-x-2 "]),children:[v("span",{className:L(["text-[#5a5a5a] mr-0.5"]),children:e.type==="click"?"Clicked ":"Typed in "}),v("span",{children:ul(e.componentPath)}),v("div",{className:L(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",t==="low"&&"bg-green-500/50",t==="needs-improvement"&&"bg-[#b77116]",t==="high"&&"bg-[#b94040]"]),children:[Nt(e.timing).toFixed(0),"ms processing time"]})]}),v("div",{className:L(["flex items-center gap-x-2  justify-end ml-auto"]),children:v("div",{className:L(["p-2 flex justify-center items-center border-[#27272A]"]),children:v("button",{onClick:()=>{Ke.value={view:"none"}},title:"Close",children:v(Uu,{size:18,className:"text-[#6F6F78]"})})})})]})});case"dropped-frames":return v("div",{className:L(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:v("div",{className:L(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[v("div",{className:L(["flex items-center gap-x-2 "]),children:["FPS Drop",v("div",{className:L(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",t==="low"&&"bg-green-500/50",t==="needs-improvement"&&"bg-[#b77116]",t==="high"&&"bg-[#b94040]"]),children:["dropped to ",e.fps," FPS"]})]}),v("div",{className:L(["flex items-center gap-x-2 w-2/4 justify-end ml-auto"]),children:v("div",{className:L(["p-2 flex justify-center items-center border-[#27272A]"]),children:v("button",{onClick:()=>{Ke.value={view:"none"}},children:v(Uu,{size:18,className:"text-[#6F6F78]"})})})})]})})}},c3=({flashingItemsCount:e,totalEvents:t})=>{const[r,i]=Ne(!1),s=he(0),l=he(0);return Me(()=>{if(s.current>=t)return;const u=Date.now(),d=250,h=u-l.current;if(h>=d){i(!1);const p=setTimeout(()=>{s.current=t,l.current=Date.now(),i(!0),setTimeout(()=>{i(!1)},2e3)},50);return()=>clearTimeout(p)}else{const p=d-h,y=setTimeout(()=>{i(!1),setTimeout(()=>{s.current=t,l.current=Date.now(),i(!0),setTimeout(()=>{i(!1)},2e3)},50)},p);return()=>clearTimeout(y)}},[e]),r},bw=({item:e,shouldFlash:t})=>{var d;const[r,i]=Ne(!1),s=e.events.map(_l).reduce((h,p)=>{switch(p){case"high":return"high";case"needs-improvement":return h==="high"?"high":"needs-improvement";case"low":return h}},"low"),l=e.events.reduce((h,p)=>t(p.id)?h+1:h,0),u=c3({flashingItemsCount:l,totalEvents:e.events.length});return v("div",{className:L(["flex flex-col gap-y-0.5"]),children:[v("button",{onClick:()=>i(h=>!h),className:L(["pl-2 py-1.5  text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",u&&!r&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[v("div",{className:L(["w-4/5 flex items-center justify-start h-full text-xs truncate gap-x-1.5"]),children:[v("span",{className:L(["min-w-fit"]),children:v(Yx,{className:L(["text-[#A1A1AA] transition-transform",r?"rotate-90":""]),size:14},`chevron-${e.timestamp}`)}),v("span",{className:L(["text-xs"]),children:e.kind==="collapsed-frame-drops"?"FPS Drops":ul(((d=e.events.at(0))==null?void 0:d.componentPath)??[])})]}),v("div",{className:L(["ml-auto min-w-fit flex justify-end items-center"]),children:v("div",{style:{lineHeight:"10px"},className:L(["w-fit flex items-center text-[10px] justify-center h-full text-white px-1 py-1 rounded-sm font-semibold",s==="low"&&"bg-green-500/60",s==="needs-improvement"&&"bg-[#b77116] text-[10px]",s==="high"&&"bg-[#b94040]"]),children:["x",e.events.length]})})]}),r&&v(u3,{children:e.events.toSorted((h,p)=>p.timestamp-h.timestamp).map(h=>v(Fx,{event:h,shouldFlash:t(h.id)}))})]})},u3=({children:e})=>v("div",{className:"relative pl-6 flex flex-col gap-y-1",children:[v("div",{className:"absolute left-3 top-0 bottom-0 w-px bg-[#27272A]"}),e]}),d3=e=>{const t=he([]),[r,i]=Ne(new Set),s=he(!0);return Me(()=>{if(s.current){s.current=!1,t.current=e;return}const l=new Set(e.map(h=>h.id)),u=new Set(t.current.map(h=>h.id)),d=new Set;l.forEach(h=>{u.has(h)||d.add(h)}),d.size>0&&(i(d),setTimeout(()=>{i(new Set)},2e3)),t.current=e},[e]),l=>r.has(l)},f3=({shouldFlash:e})=>{const[t,r]=Ne(e);return Me(()=>{if(e){r(!0);const i=setTimeout(()=>{r(!1)},1e3);return()=>clearTimeout(i)}},[e]),t},Fx=({event:e,shouldFlash:t})=>{var u,d;const{notificationState:r,setNotificationState:i}=bn(),s=_l(e),l=f3({shouldFlash:t});switch(e.kind){case"interaction":return v("button",{onClick:()=>{i(h=>({...h,selectedEvent:e,route:"render-visualization",selectedFiber:null}))},className:L(["pl-2 py-1.5  text-sm flex w-full items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",e.id===((u=r.selectedEvent)==null?void 0:u.id)&&"bg-[#18181B]",l&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[v("div",{className:L(["w-4/5 flex items-center justify-start h-full gap-x-1.5"]),children:[v("span",{className:L(["min-w-fit text-xs"]),children:Vn(()=>{switch(e.type){case"click":return v(HC,{size:14});case"keyboard":return v(IC,{size:14})}})}),v("span",{className:L(["text-xs pr-1 truncate"]),children:ul(e.componentPath)})]}),v("div",{className:L([" min-w-fit flex justify-end items-center ml-auto"]),children:v("div",{style:{lineHeight:"10px"},className:L(["gap-x-0.5 w-fit flex items-end justify-center h-full text-white px-1 py-1 rounded-sm font-semibold text-[10px]",s==="low"&&"bg-green-500/50",s==="needs-improvement"&&"bg-[#b77116] text-[10px]",s==="high"&&"bg-[#b94040]"]),children:v("div",{style:{lineHeight:"10px"},className:L(["text-[10px] text-white flex items-end"]),children:[Nt(e.timing).toFixed(0),"ms"]})})})]});case"dropped-frames":return v("button",{onClick:()=>{i(h=>({...h,selectedEvent:e,route:"render-visualization",selectedFiber:null}))},className:L(["pl-2 py-1.5  w-full text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",e.id===((d=r.selectedEvent)==null?void 0:d.id)&&"bg-[#18181B]",l&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[v("div",{className:L(["w-4/5 flex items-center justify-start h-full text-xs truncate"]),children:[v(YC,{size:14,className:"mr-1.5"})," FPS Drop"]}),v("div",{className:L([" min-w-fit flex justify-end items-center ml-auto"]),children:v("div",{style:{lineHeight:"10px"},className:L(["w-fit flex items-center justify-center h-full text-white px-1 py-1 rounded-sm text-[10px] font-bold",s==="low"&&"bg-green-500/60",s==="needs-improvement"&&"bg-[#b77116] text-[10px]",s==="high"&&"bg-[#b94040]"]),children:[e.fps," FPS"]})})]})}},h3=e=>e.reduce((r,i)=>{const s=r.at(-1);if(!s)return[{kind:"single",event:i,timestamp:i.timestamp}];switch(s.kind){case"collapsed-keyboard":return i.kind==="interaction"&&i.type==="keyboard"&&i.componentPath.join("-")===s.events[0].componentPath.join("-")?[...r.filter(u=>u!==s),{kind:"collapsed-keyboard",events:[...s.events,i],timestamp:Math.max(...[...s.events,i].map(u=>u.timestamp))}]:[...r,{kind:"single",event:i,timestamp:i.timestamp}];case"single":return s.event.kind==="interaction"&&s.event.type==="keyboard"&&i.kind==="interaction"&&i.type==="keyboard"&&s.event.componentPath.join("-")===i.componentPath.join("-")?[...r.filter(u=>u!==s),{kind:"collapsed-keyboard",events:[s.event,i],timestamp:Math.max(s.event.timestamp,i.timestamp)}]:s.event.kind==="dropped-frames"&&i.kind==="dropped-frames"?[...r.filter(u=>u!==s),{kind:"collapsed-frame-drops",events:[s.event,i],timestamp:Math.max(s.event.timestamp,i.timestamp)}]:[...r,{kind:"single",event:i,timestamp:i.timestamp}];case"collapsed-frame-drops":return i.kind==="dropped-frames"?[...r.filter(u=>u!==s),{kind:"collapsed-frame-drops",events:[...s.events,i],timestamp:Math.max(...[...s.events,i].map(u=>u.timestamp))}]:[...r,{kind:"single",event:i,timestamp:i.timestamp}]}},[]),Px=(e=150)=>{const{notificationState:t}=bn(),[r,i]=Ne(t.events);return Me(()=>{setTimeout(()=>{i(t.events)},e)},[t.events]),[r,i]},p3=()=>{const{notificationState:e,setNotificationState:t}=bn(),r=d3(e.events),[i,s]=Px(),l=h3(i).toSorted((u,d)=>d.timestamp-u.timestamp);return v("div",{className:L(["w-full h-full gap-y-2 flex flex-col border-r border-[#27272A] overflow-y-auto"]),children:[v("div",{className:L(["text-sm text-[#65656D] pl-3 pr-1 w-full flex items-center justify-between"]),children:[v("span",{children:"History"}),v(Bx,{wrapperProps:{className:"h-full flex items-center justify-center ml-auto"},triggerContent:v("button",{className:L(["hover:bg-[#18181B] rounded-full p-2"]),title:"Clear all events",onClick:()=>{cl.getState().actions.clear(),t(u=>({...u,selectedEvent:null,selectedFiber:null,route:u.route==="other-visualization"?"other-visualization":"render-visualization"})),s([])},children:v(qC,{className:L([""]),size:16})}),children:v("div",{className:L(["w-full flex justify-center"]),children:"Clear all events"})})]}),v("div",{className:L(["flex flex-col px-1 gap-y-1"]),children:[l.length===0&&v("div",{className:L(["flex items-center justify-center text-zinc-500 text-sm py-4"]),children:"No Events"}),l.map(u=>Vn(()=>{switch(u.kind){case"collapsed-keyboard":return v(bw,{shouldFlash:r,item:u});case"single":return v(Fx,{event:u.event,shouldFlash:r(u.event.id)},u.event.id);case"collapsed-frame-drops":return v(bw,{shouldFlash:r,item:u})}}))]})]})},m3=e=>Object.values(e).map(r=>({id:Yn(),totalTime:r.nodeInfo.reduce((i,s)=>i+s.selfTime,0),count:r.nodeInfo.length,name:r.nodeInfo[0].name,deletedAll:!1,parents:r.parents,hasMemoCache:r.hasMemoCache,wasFiberRenderMount:r.wasFiberRenderMount,elements:r.nodeInfo.map(i=>i.element),changes:{context:r.changes.fiberContext.current.filter(i=>r.changes.fiberContext.changesCounts.get(i.name)).map(i=>({name:String(i.name),count:r.changes.fiberContext.changesCounts.get(i.name)??0})),props:r.changes.fiberProps.current.filter(i=>r.changes.fiberProps.changesCounts.get(i.name)).map(i=>({name:String(i.name),count:r.changes.fiberProps.changesCounts.get(i.name)??0})),state:r.changes.fiberState.current.filter(i=>r.changes.fiberState.changesCounts.get(Number(i.name))).map(i=>({index:i.name,count:r.changes.fiberState.changesCounts.get(Number(i.name))??0}))}})),g3=e=>{Me(()=>{const r=setInterval(()=>{e.forEach(i=>{i.groupedFiberRenders&&i.groupedFiberRenders.forEach(s=>{if(s.deletedAll)return;if(!s.elements||s.elements.length===0){s.deletedAll=!0;return}const l=s.elements.length;s.elements=s.elements.filter(u=>u&&u.isConnected),s.elements.length===0&&l>0&&(s.deletedAll=!0)})})},5e3);return()=>{clearInterval(r)}},[e])},Vx=()=>{const e=OC(),t=[];return g3(t),e.state.events.forEach(r=>{const i=r.kind==="interaction"?r.data.meta.detailedTiming.fiberRenders:r.data.meta.fiberRenders,s=m3(i),l=s.reduce((u,d)=>u+d.totalTime,0);switch(r.kind){case"interaction":{const{commitEnd:u,jsEndDetail:d,interactionStartDetail:h,rafStart:p}=r.data.meta.detailedTiming,y=Math.max(0,d-h-l),g=Math.max(r.data.meta.latency-(u-h),0);t.push({componentPath:r.data.meta.detailedTiming.componentPath,groupedFiberRenders:s,id:r.id,kind:"interaction",memory:null,timestamp:r.data.startAt,type:r.data.meta.detailedTiming.interactionType==="keyboard"?"keyboard":"click",timing:{renderTime:l,kind:"interaction",otherJSTime:y,framePreparation:p-d,frameConstruction:u-p,frameDraw:g}});return}case"long-render":{t.push({kind:"dropped-frames",id:r.id,memory:null,timing:{kind:"dropped-frames",renderTime:l,otherTime:r.data.meta.latency},groupedFiberRenders:s,timestamp:r.data.startAt,fps:r.data.meta.fps});return}}}),t},v3=1e3,y3=()=>{const{notificationState:e,setNotificationState:t}=bn(),r=he(null),i=he(null),s=he(0),[l]=Px(),u=l.filter(d=>_l(d)==="high").length;return Me(()=>{const d=localStorage.getItem("react-scan-notifications-audio");if(d!=="false"&&d!=="true"){localStorage.setItem("react-scan-notifications-audio","false");return}if(d!=="false"){t(p=>p.audioNotificationsOptions.enabled?p:{...p,audioNotificationsOptions:{enabled:!0,audioContext:new AudioContext}});return}},[]),Me(()=>{const{audioNotificationsOptions:d}=e;if(!d.enabled||u===0||r.current&&r.current>=u)return;i.current&&clearTimeout(i.current);const p=Date.now()-s.current,y=Math.max(0,v3-p);i.current=setTimeout(()=>{qm(d.audioContext),r.current=u,s.current=Date.now(),i.current=null},y)},[u]),Me(()=>{u===0&&(r.current=null)},[u]),Me(()=>()=>{i.current&&clearTimeout(i.current)},[]),null},b3=Im((e,t)=>{const r=Vx(),[i,s]=Ne({detailsExpanded:!1,events:r,filterBy:"latest",moreInfoExpanded:!1,route:"render-visualization",selectedEvent:r.toSorted((l,u)=>l.timestamp-u.timestamp).at(-1)??null,selectedFiber:null,routeMessage:null,audioNotificationsOptions:{enabled:!1,audioContext:null}});return i.events=r,v(qx.Provider,{value:{notificationState:i,setNotificationState:s,setRoute:({route:l,routeMessage:u})=>{s(d=>{const h={...d,route:l,routeMessage:u};switch(l){case"render-visualization":return Bs(),{...h,selectedFiber:null};case"optimize":return Bs(),{...h,selectedFiber:null};case"other-visualization":return Bs(),{...h,selectedFiber:null};case"render-explanation":return Bs(),h}})}},children:[v(y3,{}),v(w3,{ref:t})]})}),w3=Im((e,t)=>{var i;const{notificationState:r}=bn();return v("div",{ref:t,className:L(["h-full w-full flex flex-col"]),children:[r.selectedEvent&&v("div",{className:L(["w-full h-[48px] flex flex-col",r.moreInfoExpanded&&"h-[235px]",r.moreInfoExpanded&&r.selectedEvent.kind==="dropped-frames"&&"h-[150px]"]),children:[v(l3,{selectedEvent:r.selectedEvent}),r.moreInfoExpanded&&v(x3,{})]}),v("div",{className:L(["flex ",r.selectedEvent?"h-[calc(100%-48px)]":"h-full",r.moreInfoExpanded&&"h-[calc(100%-200px)]",r.moreInfoExpanded&&((i=r.selectedEvent)==null?void 0:i.kind)==="dropped-frames"&&"h-[calc(100%-150px)]"]),children:[v("div",{className:L(["h-full min-w-[200px]"]),children:v(p3,{})}),v("div",{className:L(["w-[calc(100%-200px)] h-full overflow-y-auto"]),children:v(s3,{})})]})]})}),x3=()=>{const{notificationState:e}=bn();if(!e.selectedEvent)throw new Error("Invariant must have selected event for more info");const t=e.selectedEvent;return v("div",{className:L(["px-4 py-2 border-b border-[#27272A] bg-[#18181B]/50 h-[calc(100%-40px)]",t.kind==="dropped-frames"&&"h-[calc(100%-25px)]"]),children:v("div",{className:L(["flex flex-col gap-y-4 h-full"]),children:Vn(()=>{switch(t.kind){case"interaction":return v(je,{children:[v("div",{className:L(["flex items-center gap-x-3"]),children:[v("span",{className:"text-[#6F6F78] text-xs font-medium",children:t.type==="click"?"Clicked component location":"Typed in component location"}),v("div",{className:"font-mono text-[#E4E4E7] flex items-center bg-[#27272A] pl-2 py-1 rounded-sm overflow-x-auto",children:t.componentPath.toReversed().map((r,i)=>v(je,{children:[v("span",{style:{lineHeight:"14px"},className:"text-[10px] whitespace-nowrap",children:r},r),i<t.componentPath.length-1&&v("span",{className:"text-[#6F6F78] mx-0.5",children:"‹"})]}))})]}),v("div",{className:L(["flex items-center gap-x-3"]),children:[v("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),v("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[Nt(t.timing).toFixed(0),"ms"]})]}),v("div",{className:L(["flex items-center gap-x-3"]),children:[v("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),v("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]});case"dropped-frames":return v(je,{children:[v("div",{className:L(["flex items-center gap-x-3"]),children:[v("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),v("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[Nt(t.timing).toFixed(0),"ms"]})]}),v("div",{className:L(["flex items-center gap-x-3"]),children:[v("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),v("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]})}})})})},_3=Bm(()=>{var w;const e=Vx(),[t,r]=Ne(e);Me(()=>{const b=setTimeout(()=>{r(e)},600);return()=>{clearTimeout(b)}},[e]);const i=oe.inspectState,s=i.value.kind==="inspecting",l=i.value.kind==="focused",[u,d]=Ne([]),h=ft(()=>{switch(oe.inspectState.value.kind){case"inspecting":{Ke.value={view:"none"},oe.inspectState.value={kind:"inspect-off"};return}case"focused":{Ke.value={view:"inspector"},oe.inspectState.value={kind:"inspecting",hoveredDomElement:null};return}case"inspect-off":{Ke.value={view:"none"},oe.inspectState.value={kind:"inspecting",hoveredDomElement:null};return}case"uninitialized":return}},[]),p=ft(b=>{if(b.preventDefault(),b.stopPropagation(),!Le.instrumentation)return;const _=!Le.instrumentation.isPaused.value;Le.instrumentation.isPaused.value=_;const T=Ur("react-scan-options");Zt("react-scan-options",{...T,enabled:!_})},[]);sl(()=>{oe.inspectState.value.kind==="uninitialized"&&(oe.inspectState.value={kind:"inspect-off"})});let y=null,g="#999";return s?(y=v(st,{name:"icon-inspect"}),g="#8e61e3"):l?(y=v(st,{name:"icon-focus"}),g="#8e61e3"):(y=v(st,{name:"icon-inspect"}),g="#999"),jm(()=>{if(Ke.value.view!=="notifications")return;const b=new Set(e.map(_=>_.id));d([...b.values()])},[e.length,Ke.value.view]),v("div",{className:"flex max-h-9 min-h-9 flex-1 items-stretch overflow-hidden",children:[v("div",{className:"h-full flex items-center min-w-fit",children:v("button",{type:"button",id:"react-scan-inspect-element",title:"Inspect element",onClick:h,className:"button flex items-center justify-center h-full w-full pl-3 pr-2.5",style:{color:g},children:y})}),v("div",{className:"h-full flex items-center justify-center",children:v("button",{type:"button",id:"react-scan-notifications",title:"Notifications",onClick:()=>{switch(oe.inspectState.value.kind!=="inspect-off"&&(oe.inspectState.value={kind:"inspect-off"}),Ke.value.view){case"inspector":{oe.inspectState.value={kind:"inspect-off"};const b=new Set(e.map(_=>_.id));d([...b.values()]),Ke.value={view:"notifications"};return}case"notifications":{Ke.value={view:"none"};return}case"none":{const b=new Set(e.map(_=>_.id));d([...b.values()]),Ke.value={view:"notifications"};return}}},className:"button flex items-center justify-center h-full pl-2.5 pr-2.5",style:{color:g},children:v(jC,{events:t.filter(b=>!u.includes(b.id)).map(b=>_l(b)==="high"),size:16,className:L(["text-[#999]",Ke.value.view==="notifications"&&"text-[#8E61E3]"])})})}),v(cC,{checked:!((w=Le.instrumentation)!=null&&w.isPaused.value),onChange:p,className:"place-self-center",title:"Outline Re-renders"}),Le.options.value.showFPS&&v(dC,{})]})}),S3=fi(()=>oe.inspectState.value.kind==="inspecting"),T3=fi(()=>L("relative","flex-1","flex flex-col","rounded-t-lg","overflow-hidden","opacity-100","transition-[opacity]",S3.value&&"opacity-0 duration-0 delay-0")),k3=fi(()=>Ke.value.view==="inspector"),E3=fi(()=>Ke.value.view==="notifications"),C3=()=>v("div",{className:L("flex flex-1 flex-col","overflow-hidden z-10","rounded-lg","bg-black","opacity-100","transition-[border-radius]","peer-hover/left:rounded-l-none","peer-hover/right:rounded-r-none","peer-hover/top:rounded-t-none","peer-hover/bottom:rounded-b-none"),children:[v("div",{className:T3,children:[v(lC,{}),v("div",{className:L("relative","flex-1 flex","text-white","bg-[#0A0A0A]","transition-opacity delay-150","overflow-hidden","border-b border-[#222]"),children:[v(ww,{isOpen:k3,children:v(pE,{})}),v(ww,{isOpen:E3,children:v(b3,{})})]})]}),v(_3,{})]}),ww=({isOpen:e,children:t})=>v("div",{className:L("flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",e.value&&"opacity-100 delay-150 pointer-events-auto"),children:v("div",{className:"absolute inset-0 flex",children:t})}),Wc=(e,t,r)=>e+(t-e)*r,Gh={frameInterval:1e3/60,speeds:{fast:.51,slow:.1,off:0}},io=cr&&window.devicePixelRatio||1,M3=()=>{const e=he(null),t=he(null),r=he(null),i=he(null),s=he(null),l=he(0),u=he(),d=he(new Map),h=he(!1),p=he(0),y=(E,N,R,B)=>{E.save(),E.strokeStyle="white",E.fillStyle="white",E.lineWidth=1.5;const O=B*.6,I=B*.5,W=N+(B-O)/2,J=R;E.beginPath(),E.arc(W+O/2,J+I/2,O/2,Math.PI,0,!1),E.stroke();const te=B*.8,ie=B*.5,re=N+(B-te)/2,ve=R+I/2;E.fillRect(re,ve,te,ie),E.restore()},g=(E,N,R,B)=>{if(!B)return;const O=24,I=8,J=((B==null?void 0:B.type)&&Ot(B.type))??"Unknown";E.save(),E.font="12px system-ui, -apple-system, sans-serif";const ie=E.measureText(J).width,re=R==="locked"?14:0,ve=R==="locked"?6:0,de=ie+I*2+re+ve,ke=N.left,$e=N.top-O-4;if(E.fillStyle="rgb(37, 37, 38, .75)",E.beginPath(),E.roundRect(ke,$e,de,O,3),E.fill(),R==="locked"){const tn=ke+I,qr=$e+(O-re)/2+2;y(E,tn,qr,re),i.current={x:tn,y:qr,width:re,height:re}}else i.current=null;E.fillStyle="white",E.textBaseline="middle";const qt=ke+I+(R==="locked"?re+ve:0);E.fillText(J,qt,$e+O/2),E.restore()},w=(E,N,R,B)=>{if(!r.current)return;const O=r.current;N.clearRect(0,0,E.width,E.height),N.strokeStyle="rgba(142, 97, 227, 0.5)",N.fillStyle="rgba(173, 97, 230, 0.10)",R==="locked"?N.setLineDash([]):N.setLineDash([4]),N.lineWidth=1,N.fillRect(O.left,O.top,O.width,O.height),N.strokeRect(O.left,O.top,O.width,O.height),g(N,O,R,B)},b=(E,N,R,B,O,I)=>{const W=Le.options.value.animationSpeed,J=Gh.speeds[W]??Gh.speeds.off,te=ie=>{if(ie-p.current<Gh.frameInterval){l.current=requestAnimationFrame(te);return}if(p.current=ie,!r.current){cancelAnimationFrame(l.current);return}r.current={left:Wc(r.current.left,R.left,J),top:Wc(r.current.top,R.top,J),width:Wc(r.current.width,R.width,J),height:Wc(r.current.height,R.height,J)},w(E,N,B,O),Math.abs(r.current.left-R.left)>.1||Math.abs(r.current.top-R.top)>.1||Math.abs(r.current.width-R.width)>.1||Math.abs(r.current.height-R.height)>.1?l.current=requestAnimationFrame(te):(r.current=R,w(E,N,B,O),cancelAnimationFrame(l.current),N.restore())};cancelAnimationFrame(l.current),clearTimeout(u.current),l.current=requestAnimationFrame(te),u.current=setTimeout(()=>{cancelAnimationFrame(l.current),r.current=R,w(E,N,B,O),N.restore()},1e3)},_=(E,N,R,B,O)=>{if(N.save(),!r.current){r.current=R,w(E,N,B,O),N.restore();return}b(E,N,R,B,O)},T=async(E,N,R,B)=>{if(!E||!N||!R)return;const{parentCompositeFiber:O}=Ka(E),I=await mE(E);!O||!I||_(N,R,I,B,O)},M=()=>{for(const E of d.current.values())E==null||E()},S=E=>{const N=E.getContext("2d");N&&N.clearRect(0,0,E.width,E.height),r.current=null,i.current=null,s.current=null,E.classList.remove("fade-in"),h.current=!1},C=E=>{if(!e.current||h.current)return;const N=B=>{!e.current||B.propertyName!=="opacity"||!h.current||(e.current.removeEventListener("transitionend",N),S(e.current),E==null||E())},R=d.current.get("fade-out");R&&(R(),d.current.delete("fade-out")),e.current.addEventListener("transitionend",N),d.current.set("fade-out",()=>{var B;(B=e.current)==null||B.removeEventListener("transitionend",N)}),h.current=!0,e.current.classList.remove("fade-in"),requestAnimationFrame(()=>{var B;(B=e.current)==null||B.classList.add("fade-out")})},A=()=>{e.current&&(h.current=!1,e.current.classList.remove("fade-out"),requestAnimationFrame(()=>{var E;(E=e.current)==null||E.classList.add("fade-in")}))},U=E=>{E!==s.current&&(s.current=E,Ip.has(E.tagName)?C():A(),oe.inspectState.value={kind:"inspecting",hoveredDomElement:E})},D=()=>{!r.current||!e.current||h.current||C()},P=yx(E=>{if(oe.inspectState.peek().kind!=="inspecting"||!t.current)return;t.current.style.pointerEvents="none";const R=document.elementFromPoint((E==null?void 0:E.clientX)??0,(E==null?void 0:E.clientY)??0);if(t.current.style.removeProperty("pointer-events"),clearTimeout(u.current),R&&R!==e.current){const{parentCompositeFiber:B}=Ka(R);if(B){const O=Nu(B);if(O){U(O);return}}}D()},32),V=(E,N)=>{const R=i.current;if(!R)return!1;const B=N.getBoundingClientRect(),O=N.width/B.width,I=N.height/B.height,W=(E.clientX-B.left)*O,J=(E.clientY-B.top)*I,te=W/io,ie=J/io;return te>=R.x&&te<=R.x+R.width&&ie>=R.y&&ie<=R.y+R.height},ee=E=>{E.kind==="focused"&&(oe.inspectState.value={kind:"inspecting",hoveredDomElement:E.focusedDomElement})},ne=E=>{var J;const N=["react-scan-inspect-element","react-scan-power"];if(E.target instanceof HTMLElement&&N.includes(E.target.id))return;const R=(J=s.current)==null?void 0:J.tagName;if(R&&Ip.has(R))return;E.preventDefault(),E.stopPropagation();const B=s.current??document.elementFromPoint(E.clientX,E.clientY);if(!B)return;const O=E.composedPath().at(0);if(O instanceof HTMLElement&&N.includes(O.id)){const te=new MouseEvent(E.type,E);te.__reactScanSyntheticEvent=!0,O.dispatchEvent(te);return}const{parentCompositeFiber:I}=Ka(B);if(!I)return;const W=Nu(I);if(!W){s.current=null,oe.inspectState.value={kind:"inspect-off"};return}oe.inspectState.value={kind:"focused",focusedDomElement:W,fiber:I}},ue=E=>{if(E.__reactScanSyntheticEvent)return;const N=oe.inspectState.peek(),R=e.current;if(!(!R||!t.current)){if(V(E,R)){E.preventDefault(),E.stopPropagation(),ee(N);return}N.kind==="inspecting"&&ne(E)}},se=E=>{var B;if(E.key!=="Escape")return;const N=oe.inspectState.peek();if(e.current&&((B=document.activeElement)==null?void 0:B.id)!=="react-scan-root"&&(Ke.value={view:"none"},N.kind==="focused"||N.kind==="inspecting"))switch(E.preventDefault(),E.stopPropagation(),N.kind){case"focused":{A(),r.current=null,s.current=N.focusedDomElement,oe.inspectState.value={kind:"inspecting",hoveredDomElement:N.focusedDomElement};break}case"inspecting":{C(()=>{Zu.value=!1,oe.inspectState.value={kind:"inspect-off"}});break}}},ae=(E,N,R)=>{var O;(O=d.current.get(E.kind))==null||O(),t.current&&E.kind!=="inspecting"&&(t.current.style.pointerEvents="none"),l.current&&cancelAnimationFrame(l.current);let B;switch(E.kind){case"inspect-off":C();return;case"inspecting":T(E.hoveredDomElement,N,R,"inspecting");break;case"focused":if(!E.focusedDomElement)return;s.current!==E.focusedDomElement&&(s.current=E.focusedDomElement),Ke.value={view:"inspector"},T(E.focusedDomElement,N,R,"locked"),B=oe.lastReportTime.subscribe(()=>{if(l.current&&r.current){const{parentCompositeFiber:I}=Ka(E.focusedDomElement);I&&T(E.focusedDomElement,N,R,"locked")}}),B&&d.current.set(E.kind,B);break}},be=(E,N)=>{const R=E.getBoundingClientRect();E.width=R.width*io,E.height=R.height*io,N.scale(io,io),N.save()},xe=()=>{const E=oe.inspectState.peek(),N=e.current;if(!N)return;const R=N==null?void 0:N.getContext("2d");R&&(cancelAnimationFrame(l.current),clearTimeout(u.current),be(N,R),r.current=null,E.kind==="focused"&&E.focusedDomElement?T(E.focusedDomElement,N,R,"locked"):E.kind==="inspecting"&&E.hoveredDomElement&&T(E.hoveredDomElement,N,R,"inspecting"))},Se=E=>{const N=oe.inspectState.peek(),R=e.current;R&&(N.kind==="inspecting"||V(E,R))&&(E.preventDefault(),E.stopPropagation(),E.stopImmediatePropagation())};return Me(()=>{const E=e.current;if(!E)return;const N=E==null?void 0:E.getContext("2d");if(!N)return;be(E,N);const R=oe.inspectState.subscribe(B=>{ae(B,E,N)});return window.addEventListener("scroll",xe,{passive:!0}),window.addEventListener("resize",xe,{passive:!0}),document.addEventListener("pointermove",P,{passive:!0,capture:!0}),document.addEventListener("pointerdown",Se,{capture:!0}),document.addEventListener("click",ue,{capture:!0}),document.addEventListener("keydown",se,{capture:!0}),()=>{M(),R(),window.removeEventListener("scroll",xe),window.removeEventListener("resize",xe),document.removeEventListener("pointermove",P,{capture:!0}),document.removeEventListener("click",ue,{capture:!0}),document.removeEventListener("pointerdown",Se,{capture:!0}),document.removeEventListener("keydown",se,{capture:!0}),l.current&&cancelAnimationFrame(l.current),clearTimeout(u.current)}},[]),v(je,{children:[v("div",{ref:t,className:L("fixed top-0 left-0 w-screen h-screen","z-[214748365]"),style:{pointerEvents:"none"}}),v("canvas",{ref:e,dir:"ltr",className:L("react-scan-inspector-overlay","fixed top-0 left-0 w-screen h-screen","pointer-events-none","z-[214748367]")})]})},O3=class{constructor(e,t){this.width=e,this.height=t,this.maxWidth=e-we*2,this.maxHeight=t-we*2}rightEdge(e){return this.width-e-we}bottomEdge(e){return this.height-e-we}isFullWidth(e){return e>=this.maxWidth}isFullHeight(e){return e>=this.maxHeight}},oo,dl=()=>{const e=window.innerWidth,t=window.innerHeight;return oo&&oo.width===e&&oo.height===t||(oo=new O3(e,t)),oo},N3=(e,t,r,i,s)=>{if(r){if(e==="top-left")return"bottom-right";if(e==="top-right")return"bottom-left";if(e==="bottom-left")return"top-right";if(e==="bottom-right")return"top-left";const[l,u]=t.split("-");if(e==="left")return`${l}-right`;if(e==="right")return`${l}-left`;if(e==="top")return`bottom-${u}`;if(e==="bottom")return`top-${u}`}if(i){if(e==="left")return`${t.split("-")[0]}-right`;if(e==="right")return`${t.split("-")[0]}-left`}if(s){if(e==="top")return`bottom-${t.split("-")[1]}`;if(e==="bottom")return`top-${t.split("-")[1]}`}return t},Ks=(e,t,r)=>{const i=getComputedStyle(document.body).direction==="rtl",s=window.innerWidth,l=window.innerHeight,u=t===vt.width,d=u?t:Math.min(t,s-we*2),h=u?r:Math.min(r,l-we*2);let p,y,g=we,w=s-d-we,b=we,_=l-h-we;switch(e){case"top-right":p=i?-g:w,y=b;break;case"bottom-right":p=i?-g:w,y=_;break;case"bottom-left":p=i?-w:g,y=_;break;case"top-left":p=i?-w:g,y=b;break;default:p=g,y=b;break}return u&&(i?p=Math.min(-g,Math.max(p,-w)):p=Math.max(g,Math.min(p,w)),y=Math.max(b,Math.min(y,_))),{x:p,y}},A3=(e,t)=>{const[r,i]=t.split("-");return e!==r&&e!==i},z3=(e,t,r,i)=>r&&i?!0:!r&&!i?A3(e,t):r?e!==t.split("-")[0]:i?e!==t.split("-")[1]:!1,Zc=(e,t,r)=>{const i=r?vt.width:vt.initialHeight,s=r?dl().maxWidth:dl().maxHeight,l=e+t;return Math.min(Math.max(i,l),s)},R3=(e,t,r,i,s)=>{const l=getComputedStyle(document.body).direction==="rtl",u=window.innerWidth-we*2,d=window.innerHeight-we*2;let h=t.width,p=t.height,y=r.x,g=r.y;if(l&&e.includes("right")){const M=-r.x+t.width-we,S=Math.min(t.width+i,M);h=Math.min(u,Math.max(vt.width,S)),y=r.x+(h-t.width)}if(l&&e.includes("left")){const M=window.innerWidth-r.x-we,S=Math.min(t.width-i,M);h=Math.min(u,Math.max(vt.width,S))}if(!l&&e.includes("right")){const M=window.innerWidth-r.x-we,S=Math.min(t.width+i,M);h=Math.min(u,Math.max(vt.width,S))}if(!l&&e.includes("left")){const M=r.x+t.width-we,S=Math.min(t.width-i,M);h=Math.min(u,Math.max(vt.width,S)),y=r.x-(h-t.width)}if(e.includes("bottom")){const M=window.innerHeight-r.y-we,S=Math.min(t.height+s,M);p=Math.min(d,Math.max(vt.initialHeight,S))}if(e.includes("top")){const M=r.y+t.height-we,S=Math.min(t.height-s,M);p=Math.min(d,Math.max(vt.initialHeight,S)),g=r.y-(p-t.height)}let w=we,b=window.innerWidth-we-h,_=we,T=window.innerHeight-we-p;return l?y=Math.min(-w,Math.max(y,-b)):y=Math.max(w,Math.min(y,b)),g=Math.max(_,Math.min(g,T)),{newSize:{width:h,height:p},newPosition:{x:y,y:g}}},D3=e=>{const t=dl(),r={"top-left":Math.hypot(e.x,e.y),"top-right":Math.hypot(t.maxWidth-e.x,e.y),"bottom-left":Math.hypot(e.x,t.maxHeight-e.y),"bottom-right":Math.hypot(t.maxWidth-e.x,t.maxHeight-e.y)};let i="top-left";for(const s in r)r[s]<r[i]&&(i=s);return i},j3=(e,t,r,i,s=100)=>{const l=r!==void 0?e-r:0,u=i!==void 0?t-i:0,d=window.innerWidth/2,h=window.innerHeight/2,p=l>s,y=l<-s,g=u>s,w=u<-s;if(p||y){const b=t>h;return p?b?"bottom-right":"top-right":b?"bottom-left":"top-left"}if(g||w){const b=e>d;return g?b?"bottom-right":"bottom-left":b?"top-right":"top-left"}return e>d?t>h?"bottom-right":"top-right":t>h?"bottom-left":"top-left"},Kc=({position:e})=>{const t=he(null),r=he(null),i=he(null),s=he(null);Me(()=>{const d=t.current;if(!d)return;const h=()=>{d.classList.remove("pointer-events-none");const g=oe.inspectState.value.kind==="focused",w=Ke.value.view!=="none";(g||w)&&z3(e,le.value.corner,le.value.dimensions.isFullWidth,le.value.dimensions.isFullHeight)?d.classList.remove("hidden","pointer-events-none","opacity-0"):d.classList.add("hidden","pointer-events-none","opacity-0")},p=le.subscribe(g=>{r.current!==null&&i.current!==null&&s.current!==null&&g.dimensions.width===r.current&&g.dimensions.height===i.current&&g.corner===s.current||(h(),r.current=g.dimensions.width,i.current=g.dimensions.height,s.current=g.corner)}),y=oe.inspectState.subscribe(()=>{h()});return()=>{p(),y(),r.current=null,i.current=null,s.current=null}},[]);const l=ft(d=>{d.preventDefault(),d.stopPropagation();const h=Up.value;if(!h)return;const p=h.style,{dimensions:y}=le.value,g=d.clientX,w=d.clientY,b=y.width,_=y.height,T=y.position;le.value={...le.value,dimensions:{...y,isFullWidth:!1,isFullHeight:!1,width:b,height:_,position:T}};let M=null;const S=A=>{M||(p.transition="none",M=requestAnimationFrame(()=>{const{newSize:U,newPosition:D}=R3(e,{width:b,height:_},T,A.clientX-g,A.clientY-w);p.transform=`translate3d(${D.x}px, ${D.y}px, 0)`,p.width=`${U.width}px`,p.height=`${U.height}px`;const P=Math.floor(U.width-Fn/2),V=le.value.componentsTree.width,ee=Math.min(P,Math.max(Fn,V));le.value={...le.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:U.width,height:U.height,position:D},componentsTree:{...le.value.componentsTree,width:ee}},M=null}))},C=()=>{M&&(cancelAnimationFrame(M),M=null),document.removeEventListener("pointermove",S),document.removeEventListener("pointerup",C);const{dimensions:A,corner:U}=le.value,D=dl(),P=D.isFullWidth(A.width),V=D.isFullHeight(A.height),ee=P&&V;let ne=U;(ee||P||V)&&(ne=D3(A.position));const ue=Ks(ne,A.width,A.height),se=()=>{h.removeEventListener("transitionend",se)};h.addEventListener("transitionend",se),p.transform=`translate3d(${ue.x}px, ${ue.y}px, 0)`,le.value={...le.value,corner:ne,dimensions:{isFullWidth:P,isFullHeight:V,width:A.width,height:A.height,position:ue},lastDimensions:{isFullWidth:P,isFullHeight:V,width:A.width,height:A.height,position:ue}},Zt(zr,{corner:ne,dimensions:le.value.dimensions,lastDimensions:le.value.lastDimensions,componentsTree:le.value.componentsTree})};document.addEventListener("pointermove",S,{passive:!0}),document.addEventListener("pointerup",C)},[]),u=ft(d=>{d.preventDefault(),d.stopPropagation();const h=Up.value;if(!h)return;const p=h.style,{dimensions:y,corner:g}=le.value,w=dl(),b=w.isFullWidth(y.width),_=w.isFullHeight(y.height),T=b&&_,M=(b||_)&&!T;let S=y.width,C=y.height;const A=N3(e,g,T,b,_);e==="left"||e==="right"?(S=b?y.width:w.maxWidth,M&&(S=b?vt.width:w.maxWidth)):(C=_?y.height:w.maxHeight,M&&(C=_?vt.initialHeight:w.maxHeight)),T&&(e==="left"||e==="right"?S=vt.width:C=vt.initialHeight);const U=Ks(A,S,C),D={isFullWidth:w.isFullWidth(S),isFullHeight:w.isFullHeight(C),width:S,height:C,position:U},P=Math.floor(S-vt.width/2),V=le.value.componentsTree.width,ee=Math.floor(S*.3),ne=b?Fn:(e==="left"||e==="right")&&!b?Math.min(P,Math.max(Fn,ee)):Math.min(P,Math.max(Fn,V));requestAnimationFrame(()=>{le.value={corner:A,dimensions:D,lastDimensions:y,componentsTree:{...le.value.componentsTree,width:ne}},p.transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",p.width=`${S}px`,p.height=`${C}px`,p.transform=`translate3d(${U.x}px, ${U.y}px, 0)`}),Zt(zr,{corner:A,dimensions:D,lastDimensions:y,componentsTree:{...le.value.componentsTree,width:ne}})},[]);return v("div",{ref:t,onPointerDown:l,onDblClick:u,className:L("absolute z-50","flex items-center justify-center","group","transition-colors select-none","peer",{"resize-left peer/left":e==="left","resize-right peer/right z-10":e==="right","resize-top peer/top":e==="top","resize-bottom peer/bottom":e==="bottom"}),children:v("span",{className:"resize-line-wrapper",children:v("span",{className:"resize-line",children:v(st,{name:"icon-ellipsis",size:18,className:L("text-neutral-400",(e==="left"||e==="right")&&"rotate-90")})})})})},xw={horizontal:{width:20,height:48},vertical:{width:48,height:20}},U3=()=>{const e=he(null),t=he(!1),r=he(0),i=he(0),s=he(!1),l=ft((w=!0)=>{if(!e.current)return;const{corner:b}=le.value;let _,T;if(fn.value){const ne=fn.value.orientation||"horizontal",ue=xw[ne];_=ue.width,T=ue.height}else if(t.current){const ne=le.value.lastDimensions;_=Zc(ne.width,0,!0),T=Zc(ne.height,0,!1),s.current&&(s.current=!1)}else _=r.current,T=i.current;let S=Ks(b,_,T);if(fn.value){const{corner:ne,orientation:ue="horizontal"}=fn.value,se=xw[ue];switch(ne){case"top-left":S=ue==="horizontal"?{x:-1,y:we}:{x:we,y:-1};break;case"bottom-left":S=ue==="horizontal"?{x:-1,y:window.innerHeight-se.height-we}:{x:we,y:window.innerHeight-se.height+1};break;case"top-right":S=ue==="horizontal"?{x:window.innerWidth-se.width+1,y:we}:{x:window.innerWidth-se.width-we,y:-1};break;case"bottom-right":default:S=ue==="horizontal"?{x:window.innerWidth-se.width+1,y:window.innerHeight-se.height-we}:{x:window.innerWidth-se.width-we,y:window.innerHeight-se.height+1};break}}const C=_<vt.width||T<vt.initialHeight,A=w&&!C,U=e.current,D=U.style;let P=null;const V=()=>{zh(),U.removeEventListener("transitionend",V),P&&(cancelAnimationFrame(P),P=null)};U.addEventListener("transitionend",V),D.transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",P=requestAnimationFrame(()=>{D.width=`${_}px`,D.height=`${T}px`,D.transform=`translate3d(${S.x}px, ${S.y}px, 0)`,P=null});const ee={isFullWidth:_>=window.innerWidth-we*2,isFullHeight:T>=window.innerHeight-we*2,width:_,height:T,position:S};le.value={corner:b,dimensions:ee,lastDimensions:t?le.value.lastDimensions:_>r.current?ee:le.value.lastDimensions,componentsTree:le.value.componentsTree},A&&Zt(zr,{corner:le.value.corner,dimensions:le.value.dimensions,lastDimensions:le.value.lastDimensions,componentsTree:le.value.componentsTree}),zh()},[]),u=ft(w=>{if(w.preventDefault(),!e.current||w.target.closest("button"))return;const b=e.current,_=b.style,{dimensions:T}=le.value,M=w.clientX,S=w.clientY,C=T.position.x,A=T.position.y;let U=C,D=A,P=null,V=!1,ee=M,ne=S;const ue=ae=>{P||(V=!0,ee=ae.clientX,ne=ae.clientY,P=requestAnimationFrame(()=>{const be=ee-M,xe=ne-S;U=Number(C)+be,D=Number(A)+xe,_.transition="none",_.transform=`translate3d(${U}px, ${D}px, 0)`;const Se=U+T.width,E=D+T.height,N=Math.max(0,-U),R=Math.max(0,Se-window.innerWidth),B=Math.max(0,-D),O=Math.max(0,E-window.innerHeight),I=Math.min(T.width,N+R),W=Math.min(T.height,B+O),J=I*T.height+W*T.width-I*W,te=T.width*T.height;let ie=J>te*.35;if(!ie&&Le.options.value.showFPS){const re=U+T.width,ve=re-100;ie=re<=0||ve>=window.innerWidth||D+T.height<=0||D>=window.innerHeight}if(ie){const re=U+T.width/2,ve=D+T.height/2,de=window.innerWidth/2,ke=window.innerHeight/2;let $e;re<de?$e=ve<ke?"top-left":"bottom-left":$e=ve<ke?"top-right":"bottom-right";let qt;const tn=Math.max(N,R),qr=Math.max(B,O);qt=tn>qr?"horizontal":"vertical",le.value={...le.value,corner:$e,lastDimensions:{...T,position:Ks($e,T.width,T.height)}};const gi={corner:$e,orientation:qt};fn.value=gi,Zt(du,gi),Zt(zr,le.value),l(!1),document.removeEventListener("pointermove",ue),document.removeEventListener("pointerup",se),P&&(cancelAnimationFrame(P),P=null)}P=null}))},se=()=>{if(!b)return;P&&(cancelAnimationFrame(P),P=null),document.removeEventListener("pointermove",ue),document.removeEventListener("pointerup",se);const ae=Math.abs(ee-M),be=Math.abs(ne-S),xe=Math.sqrt(ae*ae+be*be);if(!V||xe<60)return;const Se=j3(ee,ne,M,S,oe.inspectState.value.kind==="focused"?80:40);if(Se===le.value.corner){_.transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)";const R=le.value.dimensions.position;requestAnimationFrame(()=>{_.transform=`translate3d(${R.x}px, ${R.y}px, 0)`});return}const E=Ks(Se,T.width,T.height);if(U===C&&D===A)return;const N=()=>{_.transition="none",zh(),b.removeEventListener("transitionend",N),P&&(cancelAnimationFrame(P),P=null)};b.addEventListener("transitionend",N),_.transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",requestAnimationFrame(()=>{_.transform=`translate3d(${E.x}px, ${E.y}px, 0)`}),le.value={corner:Se,dimensions:{isFullWidth:T.isFullWidth,isFullHeight:T.isFullHeight,width:T.width,height:T.height,position:E},lastDimensions:le.value.lastDimensions,componentsTree:le.value.componentsTree},Zt(zr,{corner:Se,dimensions:le.value.dimensions,lastDimensions:le.value.lastDimensions,componentsTree:le.value.componentsTree})};document.addEventListener("pointermove",ue),document.addEventListener("pointerup",se)},[]),d=ft(w=>{if(w.preventDefault(),!e.current||!fn.value)return;const{corner:b,orientation:_="horizontal"}=fn.value,T=w.clientX,M=w.clientY;let S=null,C=!1;const A=50,U=P=>{if(C||S)return;const V=P.clientX-T,ee=P.clientY-M;let ne=!1;if(_==="horizontal"?(b.endsWith("left")&&V>A||b.endsWith("right")&&V<-A)&&(ne=!0):(b.startsWith("top")&&ee>A||b.startsWith("bottom")&&ee<-A)&&(ne=!0),ne){if(C=!0,fn.value=null,Zt(du,null),r.current===0&&e.current)requestAnimationFrame(()=>{if(e.current){e.current.style.width="min-content";const ue=e.current.offsetWidth;r.current=ue||300;const se=le.value.lastDimensions,ae=Zc(se.width,0,!0),be=Zc(se.height,0,!1);let xe=P.clientX-ae/2,Se=P.clientY-be/2;xe=Math.max(we,Math.min(xe,window.innerWidth-ae-we)),Se=Math.max(we,Math.min(Se,window.innerHeight-be-we)),le.value={...le.value,dimensions:{...le.value.dimensions,position:{x:xe,y:Se}}},l(!0);const E=Ur(no);Ke.value=E||{view:"none"},setTimeout(()=>{if(e.current){const N=new PointerEvent("pointerdown",{clientX:P.clientX,clientY:P.clientY,pointerId:P.pointerId,bubbles:!0});e.current.dispatchEvent(N)}},100)}});else{l(!0);const ue=Ur(no);Ke.value=ue||{view:"none"}}document.removeEventListener("pointermove",U),document.removeEventListener("pointerup",D)}},D=()=>{document.removeEventListener("pointermove",U),document.removeEventListener("pointerup",D)};document.addEventListener("pointermove",U),document.addEventListener("pointerup",D)},[]);Me(()=>{if(!e.current)return;Xb(no),fn.value?(i.current=36,r.current=0):(e.current.style.width="min-content",i.current=36,r.current=e.current.offsetWidth),e.current.style.maxWidth=`calc(100vw - ${we*2}px)`,e.current.style.maxHeight=`calc(100vh - ${we*2}px)`,l(),oe.inspectState.value.kind!=="focused"&&!fn.value&&!s.current&&(le.value={...le.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:r.current,height:i.current,position:le.value.dimensions.position}}),Up.value=e.current;const w=le.subscribe(M=>{if(!e.current)return;const{x:S,y:C}=M.dimensions.position,{width:A,height:U}=M.dimensions,D=e.current;requestAnimationFrame(()=>{D.style.transform=`translate3d(${S}px, ${C}px, 0)`,D.style.width=`${A}px`,D.style.height=`${U}px`})}),b=Ke.subscribe(M=>{t.current=M.view!=="none",l(),fn.value||(M.view!=="none"?Zt(no,M):Xb(no))}),_=oe.inspectState.subscribe(M=>{t.current=M.kind==="focused",l()}),T=()=>{l(!0)};return window.addEventListener("resize",T,{passive:!0}),()=>{window.removeEventListener("resize",T),b(),_(),w(),Zt(zr,{...ir,corner:le.value.corner})}},[]);const[h,p]=Ne(!1);Me(()=>{p(!0)},[]);const y=fn.value;let g="";if(y){const{orientation:w="horizontal",corner:b}=y;w==="horizontal"?g=b!=null&&b.endsWith("right")?"rotate-180":"":g=b!=null&&b.startsWith("bottom")?"-rotate-90":"rotate-90"}return v(je,{children:[v(M3,{}),v(eg.Provider,{value:e.current,children:v("div",{id:"react-scan-toolbar",dir:"ltr",ref:e,onPointerDown:y?d:u,className:L("fixed inset-0",y?(()=>{const{orientation:w="horizontal",corner:b}=y;return w==="horizontal"?b!=null&&b.endsWith("right")?"rounded-tl-lg rounded-bl-lg shadow-lg":"rounded-tr-lg rounded-br-lg shadow-lg":b!=null&&b.startsWith("bottom")?"rounded-tl-lg rounded-tr-lg shadow-lg":"rounded-bl-lg rounded-br-lg shadow-lg"})():"rounded-lg shadow-lg","flex flex-col","font-mono text-[13px]","user-select-none","opacity-0",y?"cursor-pointer":"cursor-move","z-[124124124124]","animate-fade-in animation-duration-300 animation-delay-300","will-change-transform","[touch-action:none]"),children:y?v("button",{type:"button",onClick:()=>{fn.value=null,Zt(du,null),r.current===0&&e.current&&requestAnimationFrame(()=>{if(e.current){e.current.style.width="min-content";const b=e.current.offsetWidth;r.current=b||300,l(!0)}});const w=Ur(no);Ke.value=w||{view:"none"}},className:"flex items-center justify-center w-full h-full text-white",title:"Expand toolbar",children:v(st,{name:"icon-chevron-right",size:16,className:L("transition-transform",g)})}):v(je,{children:[v(Kc,{position:"top"}),v(Kc,{position:"bottom"}),v(Kc,{position:"left"}),v(Kc,{position:"right"}),v(C3,{})]})})})]})},eg=J1(null),L3=()=>v("svg",{xmlns:"http://www.w3.org/2000/svg",style:"display: none;",children:[v("title",{children:"React Scan Icons"}),v("symbol",{id:"icon-inspect",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),v("path",{d:"M5 3a2 2 0 0 0-2 2"}),v("path",{d:"M19 3a2 2 0 0 1 2 2"}),v("path",{d:"M5 21a2 2 0 0 1-2-2"}),v("path",{d:"M9 3h1"}),v("path",{d:"M9 21h2"}),v("path",{d:"M14 3h1"}),v("path",{d:"M3 9v1"}),v("path",{d:"M21 9v2"}),v("path",{d:"M3 14v1"})]}),v("symbol",{id:"icon-focus",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),v("path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"})]}),v("symbol",{id:"icon-next",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:v("path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z"})}),v("symbol",{id:"icon-previous",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:v("path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"})}),v("symbol",{id:"icon-close",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),v("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),v("symbol",{id:"icon-replay",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}),v("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),v("path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}),v("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),v("circle",{cx:"12",cy:"12",r:"1"}),v("path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"})]}),v("symbol",{id:"icon-ellipsis",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("circle",{cx:"12",cy:"12",r:"1"}),v("circle",{cx:"19",cy:"12",r:"1"}),v("circle",{cx:"5",cy:"12",r:"1"})]}),v("symbol",{id:"icon-copy",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),v("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]}),v("symbol",{id:"icon-check",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:v("path",{d:"M20 6 9 17l-5-5"})}),v("symbol",{id:"icon-chevron-right",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:v("path",{d:"m9 18 6-6-6-6"})}),v("symbol",{id:"icon-settings",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),v("circle",{cx:"12",cy:"12",r:"3"})]}),v("symbol",{id:"icon-flame",viewBox:"0 0 24 24",children:v("path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"})}),v("symbol",{id:"icon-function",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}),v("path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}),v("path",{d:"M9 11.2h5.7"})]}),v("symbol",{id:"icon-triangle-alert",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}),v("path",{d:"M12 9v4"}),v("path",{d:"M12 17h.01"})]}),v("symbol",{id:"icon-gallery-horizontal-end",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"M2 7v10"}),v("path",{d:"M6 5v14"}),v("rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"})]}),v("symbol",{id:"icon-search",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("circle",{cx:"11",cy:"11",r:"8"}),v("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),v("symbol",{id:"icon-lock",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),v("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),v("symbol",{id:"icon-lock-open",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),v("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"})]}),v("symbol",{id:"icon-sanil",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}),v("circle",{cx:"10",cy:"13",r:"8"}),v("path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}),v("path",{d:"M18 3 19.1 5.2"})]})]}),$3=class extends jn{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null})}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){var e;return this.state.hasError?v("div",{className:"fixed bottom-4 right-4 z-[124124124124]",children:v("div",{className:"p-3 bg-black rounded-lg shadow-lg w-80",children:[v("div",{className:"flex items-center gap-2 mb-2 text-red-400 text-sm font-medium",children:[v(st,{name:"icon-flame",className:"text-red-500",size:14}),"React Scan ran into a problem"]}),v("div",{className:"p-2 bg-black rounded font-mono text-xs text-red-300 mb-3 break-words",children:((e=this.state.error)==null?void 0:e.message)||JSON.stringify(this.state.error)}),v("button",{type:"button",onClick:this.handleReset,className:"px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-medium transition-colors flex items-center justify-center gap-1.5",children:"Restart"})]})}):this.props.children}},H3=e=>{const t=document.createElement("div");t.id="react-scan-toolbar-root",window.__REACT_SCAN_TOOLBAR_CONTAINER__=t,e.appendChild(t),Qs(v($3,{children:v(je,{children:[v(L3,{}),v(U3,{})]})}),t);const r=t.remove.bind(t);return t.remove=()=>{window.__REACT_SCAN_TOOLBAR_CONTAINER__=void 0,t.hasChildNodes()&&(Qs(null,t),Qs(null,t)),r()},t},I3={version:"0.4.3"},Fa=null,js=null,q3=()=>{if(Fa&&js)return{rootContainer:Fa,shadowRoot:js};Fa=document.createElement("div"),Fa.id="react-scan-root",js=Fa.attachShadow({mode:"open"});const e=document.createElement("style");return e.textContent=aC,js.appendChild(e),document.documentElement.appendChild(Fa),{rootContainer:Fa,shadowRoot:js}},oe={wasDetailsOpen:yt(!0),isInIframe:yt(cr&&window.self!==window.top),inspectState:yt({kind:"uninitialized"}),monitor:yt(null),fiberRoots:new Set,reportData:new Map,legacyReportData:new Map,lastReportTime:yt(0),interactionListeningForRenders:null,changesListeners:new Map},Le={instrumentation:null,componentAllowList:null,options:yt({enabled:!0,log:!1,showToolbar:!0,animationSpeed:"fast",dangerouslyForceRunInProduction:!1,showFPS:!0,showNotificationCount:!0,allowInIframe:!1}),runInAllEnvironments:!1,onRender:null,scheduledOutlines:new Map,activeOutlines:new Map,Store:oe,version:I3.version};cr&&window.__REACT_SCAN_EXTENSION__&&(window.__REACT_SCAN_VERSION__=Le.version);function Y3(e){return e in Le.options.value}var Gx=e=>{const t=[],r={};for(const i in e){if(!Y3(i))continue;const s=e[i];switch(i){case"enabled":case"log":case"showToolbar":case"showNotificationCount":case"dangerouslyForceRunInProduction":case"showFPS":case"allowInIframe":typeof s!="boolean"?t.push(`- ${i} must be a boolean. Got "${s}"`):r[i]=s;break;case"animationSpeed":["slow","fast","off"].includes(s)?r[i]=s:t.push(`- Invalid animation speed "${s}". Using default "fast"`);break;case"onCommitStart":typeof s!="function"?t.push(`- ${i} must be a function. Got "${s}"`):r.onCommitStart=s;break;case"onCommitFinish":typeof s!="function"?t.push(`- ${i} must be a function. Got "${s}"`):r.onCommitFinish=s;break;case"onRender":typeof s!="function"?t.push(`- ${i} must be a function. Got "${s}"`):r.onRender=s;break;case"onPaintStart":case"onPaintFinish":typeof s!="function"?t.push(`- ${i} must be a function. Got "${s}"`):r[i]=s;break;default:t.push(`- Unknown option "${i}"`)}}return t.length>0&&console.warn(`[React Scan] Invalid options:
${t.join(`
`)}`),r},B3=e=>{var t;try{const r=Gx(e);if(Object.keys(r).length===0)return;const i="showToolbar"in r&&r.showToolbar!==void 0,s={...Le.options.value,...r},{instrumentation:l}=Le;l&&"enabled"in r&&(l.isPaused.value=r.enabled===!1),Le.options.value=s;try{const u=(t=Ur("react-scan-options"))==null?void 0:t.enabled;typeof u=="boolean"&&(s.enabled=u)}catch(u){Le.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",u)}return Zt("react-scan-options",s),i&&Qx(!!s.showToolbar),s}catch(r){Le.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",r)}},X3=()=>Le.options,Jc=null,_w,Ku=()=>{if(Jc!==null)return Jc;_w??(_w=ai());for(const e of _w.renderers.values())fk(e)==="production"&&(Jc=!0);return Jc},F3=()=>{try{if(!cr||!Le.runInAllEnvironments&&Ku()&&!Le.options.value.dangerouslyForceRunInProduction)return;const e=Ur("react-scan-options");if(e){const r=Gx(e);Object.keys(r).length>0&&(Le.options.value={...Le.options.value,...r})}const t=X3();rC(()=>{Qx(!!t.value.showToolbar)}),!oe.monitor.value&&cr&&setTimeout(()=>{hk()||console.error("[React Scan] Failed to load. Must import React Scan before React runs.")},5e3)}catch(e){Le.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}},Qx=e=>{var l;(l=window.reactScanCleanupListeners)==null||l.call(window);const t=RC(),r=P3();window.reactScanCleanupListeners=()=>{t(),r==null||r()};const i=window.__REACT_SCAN_TOOLBAR_CONTAINER__;if(!e){i==null||i.remove();return}i==null||i.remove();const{shadowRoot:s}=q3();H3(s)},P3=()=>{try{const e=document.documentElement;return n3(e)}catch(e){Le.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}},V3=(e={})=>{B3(e),!(oe.isInIframe.value&&!Le.options.value.allowInIframe&&!Le.runInAllEnvironments)&&(e.enabled===!1&&e.showToolbar!==!0||F3())},G3=new WeakSet,Qh={exports:{}},Us={},Wh={exports:{}},Zh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sw;function Q3(){return Sw||(Sw=1,function(e){function t(E,N){var R=E.length;E.push(N);e:for(;0<R;){var B=R-1>>>1,O=E[B];if(0<s(O,N))E[B]=N,E[R]=O,R=B;else break e}}function r(E){return E.length===0?null:E[0]}function i(E){if(E.length===0)return null;var N=E[0],R=E.pop();if(R!==N){E[0]=R;e:for(var B=0,O=E.length,I=O>>>1;B<I;){var W=2*(B+1)-1,J=E[W],te=W+1,ie=E[te];if(0>s(J,R))te<O&&0>s(ie,J)?(E[B]=ie,E[te]=R,B=te):(E[B]=J,E[W]=R,B=W);else if(te<O&&0>s(ie,R))E[B]=ie,E[te]=R,B=te;else break e}}return N}function s(E,N){var R=E.sortIndex-N.sortIndex;return R!==0?R:E.id-N.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();e.unstable_now=function(){return u.now()-d}}var h=[],p=[],y=1,g=null,w=3,b=!1,_=!1,T=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function U(E){for(var N=r(p);N!==null;){if(N.callback===null)i(p);else if(N.startTime<=E)i(p),N.sortIndex=N.expirationTime,t(h,N);else break;N=r(p)}}function D(E){if(T=!1,U(E),!_)if(r(h)!==null)_=!0,P||(P=!0,ae());else{var N=r(p);N!==null&&Se(D,N.startTime-E)}}var P=!1,V=-1,ee=5,ne=-1;function ue(){return M?!0:!(e.unstable_now()-ne<ee)}function se(){if(M=!1,P){var E=e.unstable_now();ne=E;var N=!0;try{e:{_=!1,T&&(T=!1,C(V),V=-1),b=!0;var R=w;try{t:{for(U(E),g=r(h);g!==null&&!(g.expirationTime>E&&ue());){var B=g.callback;if(typeof B=="function"){g.callback=null,w=g.priorityLevel;var O=B(g.expirationTime<=E);if(E=e.unstable_now(),typeof O=="function"){g.callback=O,U(E),N=!0;break t}g===r(h)&&i(h),U(E)}else i(h);g=r(h)}if(g!==null)N=!0;else{var I=r(p);I!==null&&Se(D,I.startTime-E),N=!1}}break e}finally{g=null,w=R,b=!1}N=void 0}}finally{N?ae():P=!1}}}var ae;if(typeof A=="function")ae=function(){A(se)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,xe=be.port2;be.port1.onmessage=se,ae=function(){xe.postMessage(null)}}else ae=function(){S(se,0)};function Se(E,N){V=S(function(){E(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return w},e.unstable_next=function(E){switch(w){case 1:case 2:case 3:var N=3;break;default:N=w}var R=w;w=N;try{return E()}finally{w=R}},e.unstable_requestPaint=function(){M=!0},e.unstable_runWithPriority=function(E,N){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var R=w;w=E;try{return N()}finally{w=R}},e.unstable_scheduleCallback=function(E,N,R){var B=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?B+R:B):R=B,E){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=R+O,E={id:y++,callback:N,priorityLevel:E,startTime:R,expirationTime:O,sortIndex:-1},R>B?(E.sortIndex=R,t(p,E),r(h)===null&&E===r(p)&&(T?(C(V),V=-1):T=!0,Se(D,R-B))):(E.sortIndex=O,t(h,E),_||b||(_=!0,P||(P=!0,ae()))),E},e.unstable_shouldYield=ue,e.unstable_wrapCallback=function(E){var N=w;return function(){var R=w;w=N;try{return E.apply(this,arguments)}finally{w=R}}}}(Zh)),Zh}var Tw;function W3(){return Tw||(Tw=1,Wh.exports=Q3()),Wh.exports}var Kh={exports:{}},Ht={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kw;function Z3(){if(kw)return Ht;kw=1;var e=xl();function t(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var i={d:{f:r,r:function(){throw Error(t(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(h,p,y){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:g==null?null:""+g,children:h,containerInfo:p,implementation:y}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Ht.createPortal=function(h,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return l(h,p,null,y)},Ht.flushSync=function(h){var p=u.T,y=i.p;try{if(u.T=null,i.p=2,h)return h()}finally{u.T=p,i.p=y,i.d.f()}},Ht.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,i.d.C(h,p))},Ht.prefetchDNS=function(h){typeof h=="string"&&i.d.D(h)},Ht.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var y=p.as,g=d(y,p.crossOrigin),w=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?i.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:w,fetchPriority:b}):y==="script"&&i.d.X(h,{crossOrigin:g,integrity:w,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ht.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=d(p.as,p.crossOrigin);i.d.M(h,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&i.d.M(h)},Ht.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,g=d(y,p.crossOrigin);i.d.L(h,y,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ht.preloadModule=function(h,p){if(typeof h=="string")if(p){var y=d(p.as,p.crossOrigin);i.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else i.d.m(h)},Ht.requestFormReset=function(h){i.d.r(h)},Ht.unstable_batchedUpdates=function(h,p){return h(p)},Ht.useFormState=function(h,p,y){return u.H.useFormState(h,p,y)},Ht.useFormStatus=function(){return u.H.useHostTransitionStatus()},Ht.version="19.1.0",Ht}var Ew;function K3(){if(Ew)return Kh.exports;Ew=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Kh.exports=Z3(),Kh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cw;function J3(){if(Cw)return Us;Cw=1;var e=W3(),t=xl(),r=K3();function i(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)a+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var a=n,o=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(o=a.return),n=a.return;while(n)}return a.tag===3?o:null}function u(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function d(n){if(l(n)!==n)throw Error(i(188))}function h(n){var a=n.alternate;if(!a){if(a=l(n),a===null)throw Error(i(188));return a!==n?null:n}for(var o=n,c=a;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),n;if(m===c)return d(f),a;m=m.sibling}throw Error(i(188))}if(o.return!==c.return)o=f,c=m;else{for(var x=!1,k=f.child;k;){if(k===o){x=!0,o=f,c=m;break}if(k===c){x=!0,c=f,o=m;break}k=k.sibling}if(!x){for(k=m.child;k;){if(k===o){x=!0,o=m,c=f;break}if(k===c){x=!0,c=m,o=f;break}k=k.sibling}if(!x)throw Error(i(189))}}if(o.alternate!==c)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?n:a}function p(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=p(n),a!==null)return a;n=n.sibling}return null}var y=Object.assign,g=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),C=Symbol.for("react.consumer"),A=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),ne=Symbol.for("react.activity"),ue=Symbol.for("react.memo_cache_sentinel"),se=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=se&&n[se]||n["@@iterator"],typeof n=="function"?n:null)}var be=Symbol.for("react.client.reference");function xe(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===be?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case _:return"Fragment";case M:return"Profiler";case T:return"StrictMode";case D:return"Suspense";case P:return"SuspenseList";case ne:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case b:return"Portal";case A:return(n.displayName||"Context")+".Provider";case C:return(n._context.displayName||"Context")+".Consumer";case U:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case V:return a=n.displayName||null,a!==null?a:xe(n.type)||"Memo";case ee:a=n._payload,n=n._init;try{return xe(n(a))}catch{}}return null}var Se=Array.isArray,E=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R={pending:!1,data:null,method:null,action:null},B=[],O=-1;function I(n){return{current:n}}function W(n){0>O||(n.current=B[O],B[O]=null,O--)}function J(n,a){O++,B[O]=n.current,n.current=a}var te=I(null),ie=I(null),re=I(null),ve=I(null);function de(n,a){switch(J(re,a),J(ie,n),J(te,null),a.nodeType){case 9:case 11:n=(n=a.documentElement)&&(n=n.namespaceURI)?Yy(n):0;break;default:if(n=a.tagName,a=a.namespaceURI)a=Yy(a),n=By(a,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}W(te),J(te,n)}function ke(){W(te),W(ie),W(re)}function $e(n){n.memoizedState!==null&&J(ve,n);var a=te.current,o=By(a,n.type);a!==o&&(J(ie,n),J(te,o))}function qt(n){ie.current===n&&(W(te),W(ie)),ve.current===n&&(W(ve),Es._currentValue=R)}var tn=Object.prototype.hasOwnProperty,qr=e.unstable_scheduleCallback,gi=e.unstable_cancelCallback,p_=e.unstable_shouldYield,m_=e.unstable_requestPaint,Jn=e.unstable_now,g_=e.unstable_getCurrentPriorityLevel,_g=e.unstable_ImmediatePriority,Sg=e.unstable_UserBlockingPriority,Ol=e.unstable_NormalPriority,v_=e.unstable_LowPriority,Tg=e.unstable_IdlePriority,y_=e.log,b_=e.unstable_setDisableYieldValue,Do=null,nn=null;function Yr(n){if(typeof y_=="function"&&b_(n),nn&&typeof nn.setStrictMode=="function")try{nn.setStrictMode(Do,n)}catch{}}var rn=Math.clz32?Math.clz32:__,w_=Math.log,x_=Math.LN2;function __(n){return n>>>=0,n===0?32:31-(w_(n)/x_|0)|0}var Nl=256,Al=4194304;function ka(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function zl(n,a,o){var c=n.pendingLanes;if(c===0)return 0;var f=0,m=n.suspendedLanes,x=n.pingedLanes;n=n.warmLanes;var k=c&134217727;return k!==0?(c=k&~m,c!==0?f=ka(c):(x&=k,x!==0?f=ka(x):o||(o=k&~n,o!==0&&(f=ka(o))))):(k=c&~m,k!==0?f=ka(k):x!==0?f=ka(x):o||(o=c&~n,o!==0&&(f=ka(o)))),f===0?0:a!==0&&a!==f&&(a&m)===0&&(m=f&-f,o=a&-a,m>=o||m===32&&(o&4194048)!==0)?a:f}function jo(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function S_(n,a){switch(n){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kg(){var n=Nl;return Nl<<=1,(Nl&4194048)===0&&(Nl=256),n}function Eg(){var n=Al;return Al<<=1,(Al&62914560)===0&&(Al=4194304),n}function hd(n){for(var a=[],o=0;31>o;o++)a.push(n);return a}function Uo(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function T_(n,a,o,c,f,m){var x=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var k=n.entanglements,z=n.expirationTimes,Y=n.hiddenUpdates;for(o=x&~o;0<o;){var Q=31-rn(o),K=1<<Q;k[Q]=0,z[Q]=-1;var X=Y[Q];if(X!==null)for(Y[Q]=null,Q=0;Q<X.length;Q++){var F=X[Q];F!==null&&(F.lane&=-536870913)}o&=~K}c!==0&&Cg(n,c,0),m!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=m&~(x&~a))}function Cg(n,a,o){n.pendingLanes|=a,n.suspendedLanes&=~a;var c=31-rn(a);n.entangledLanes|=a,n.entanglements[c]=n.entanglements[c]|1073741824|o&4194090}function Mg(n,a){var o=n.entangledLanes|=a;for(n=n.entanglements;o;){var c=31-rn(o),f=1<<c;f&a|n[c]&a&&(n[c]|=a),o&=~f}}function pd(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function md(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Og(){var n=N.p;return n!==0?n:(n=window.event,n===void 0?32:lb(n.type))}function k_(n,a){var o=N.p;try{return N.p=n,a()}finally{N.p=o}}var Br=Math.random().toString(36).slice(2),Ut="__reactFiber$"+Br,Pt="__reactProps$"+Br,vi="__reactContainer$"+Br,gd="__reactEvents$"+Br,E_="__reactListeners$"+Br,C_="__reactHandles$"+Br,Ng="__reactResources$"+Br,Lo="__reactMarker$"+Br;function vd(n){delete n[Ut],delete n[Pt],delete n[gd],delete n[E_],delete n[C_]}function yi(n){var a=n[Ut];if(a)return a;for(var o=n.parentNode;o;){if(a=o[vi]||o[Ut]){if(o=a.alternate,a.child!==null||o!==null&&o.child!==null)for(n=Vy(n);n!==null;){if(o=n[Ut])return o;n=Vy(n)}return a}n=o,o=n.parentNode}return null}function bi(n){if(n=n[Ut]||n[vi]){var a=n.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return n}return null}function $o(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(i(33))}function wi(n){var a=n[Ng];return a||(a=n[Ng]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Tt(n){n[Lo]=!0}var Ag=new Set,zg={};function Ea(n,a){xi(n,a),xi(n+"Capture",a)}function xi(n,a){for(zg[n]=a,n=0;n<a.length;n++)Ag.add(a[n])}var M_=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rg={},Dg={};function O_(n){return tn.call(Dg,n)?!0:tn.call(Rg,n)?!1:M_.test(n)?Dg[n]=!0:(Rg[n]=!0,!1)}function Rl(n,a,o){if(O_(a))if(o===null)n.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var c=a.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+o)}}function Dl(n,a,o){if(o===null)n.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+o)}}function hr(n,a,o,c){if(c===null)n.removeAttribute(o);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(a,o,""+c)}}var yd,jg;function _i(n){if(yd===void 0)try{throw Error()}catch(o){var a=o.stack.trim().match(/\n( *(at )?)/);yd=a&&a[1]||"",jg=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yd+n+jg}var bd=!1;function wd(n,a){if(!n||bd)return"";bd=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(a){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(F){var X=F}Reflect.construct(n,[],K)}else{try{K.call()}catch(F){X=F}n.call(K.prototype)}}else{try{throw Error()}catch(F){X=F}(K=n())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(F){if(F&&X&&typeof F.stack=="string")return[F.stack,X.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),x=m[0],k=m[1];if(x&&k){var z=x.split(`
`),Y=k.split(`
`);for(f=c=0;c<z.length&&!z[c].includes("DetermineComponentFrameRoot");)c++;for(;f<Y.length&&!Y[f].includes("DetermineComponentFrameRoot");)f++;if(c===z.length||f===Y.length)for(c=z.length-1,f=Y.length-1;1<=c&&0<=f&&z[c]!==Y[f];)f--;for(;1<=c&&0<=f;c--,f--)if(z[c]!==Y[f]){if(c!==1||f!==1)do if(c--,f--,0>f||z[c]!==Y[f]){var Q=`
`+z[c].replace(" at new "," at ");return n.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",n.displayName)),Q}while(1<=c&&0<=f);break}}}finally{bd=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?_i(o):""}function N_(n){switch(n.tag){case 26:case 27:case 5:return _i(n.type);case 16:return _i("Lazy");case 13:return _i("Suspense");case 19:return _i("SuspenseList");case 0:case 15:return wd(n.type,!1);case 11:return wd(n.type.render,!1);case 1:return wd(n.type,!0);case 31:return _i("Activity");default:return""}}function Ug(n){try{var a="";do a+=N_(n),n=n.return;while(n);return a}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function wn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Lg(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function A_(n){var a=Lg(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,a),c=""+n[a];if(!n.hasOwnProperty(a)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return f.call(this)},set:function(x){c=""+x,m.call(this,x)}}),Object.defineProperty(n,a,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(x){c=""+x},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function jl(n){n._valueTracker||(n._valueTracker=A_(n))}function $g(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var o=a.getValue(),c="";return n&&(c=Lg(n)?n.checked?"true":"false":n.value),n=c,n!==o?(a.setValue(n),!0):!1}function Ul(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var z_=/[\n"\\]/g;function xn(n){return n.replace(z_,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function xd(n,a,o,c,f,m,x,k){n.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?n.type=x:n.removeAttribute("type"),a!=null?x==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+wn(a)):n.value!==""+wn(a)&&(n.value=""+wn(a)):x!=="submit"&&x!=="reset"||n.removeAttribute("value"),a!=null?_d(n,x,wn(a)):o!=null?_d(n,x,wn(o)):c!=null&&n.removeAttribute("value"),f==null&&m!=null&&(n.defaultChecked=!!m),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),k!=null&&typeof k!="function"&&typeof k!="symbol"&&typeof k!="boolean"?n.name=""+wn(k):n.removeAttribute("name")}function Hg(n,a,o,c,f,m,x,k){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),a!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||a!=null))return;o=o!=null?""+wn(o):"",a=a!=null?""+wn(a):o,k||a===n.value||(n.value=a),n.defaultValue=a}c=c??f,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=k?n.checked:!!c,n.defaultChecked=!!c,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(n.name=x)}function _d(n,a,o){a==="number"&&Ul(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function Si(n,a,o,c){if(n=n.options,a){a={};for(var f=0;f<o.length;f++)a["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=a.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&c&&(n[o].defaultSelected=!0)}else{for(o=""+wn(o),a=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}a!==null||n[f].disabled||(a=n[f])}a!==null&&(a.selected=!0)}}function Ig(n,a,o){if(a!=null&&(a=""+wn(a),a!==n.value&&(n.value=a),o==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=o!=null?""+wn(o):""}function qg(n,a,o,c){if(a==null){if(c!=null){if(o!=null)throw Error(i(92));if(Se(c)){if(1<c.length)throw Error(i(93));c=c[0]}o=c}o==null&&(o=""),a=o}o=wn(a),n.defaultValue=o,c=n.textContent,c===o&&c!==""&&c!==null&&(n.value=c)}function Ti(n,a){if(a){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=a;return}}n.textContent=a}var R_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yg(n,a,o){var c=a.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?c?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":c?n.setProperty(a,o):typeof o!="number"||o===0||R_.has(a)?a==="float"?n.cssFloat=o:n[a]=(""+o).trim():n[a]=o+"px"}function Bg(n,a,o){if(a!=null&&typeof a!="object")throw Error(i(62));if(n=n.style,o!=null){for(var c in o)!o.hasOwnProperty(c)||a!=null&&a.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var f in a)c=a[f],a.hasOwnProperty(f)&&o[f]!==c&&Yg(n,f,c)}else for(var m in a)a.hasOwnProperty(m)&&Yg(n,m,a[m])}function Sd(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var D_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),j_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ll(n){return j_.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Td=null;function kd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ki=null,Ei=null;function Xg(n){var a=bi(n);if(a&&(n=a.stateNode)){var o=n[Pt]||null;e:switch(n=a.stateNode,a.type){case"input":if(xd(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),a=o.name,o.type==="radio"&&a!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+xn(""+a)+'"][type="radio"]'),a=0;a<o.length;a++){var c=o[a];if(c!==n&&c.form===n.form){var f=c[Pt]||null;if(!f)throw Error(i(90));xd(c,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(a=0;a<o.length;a++)c=o[a],c.form===n.form&&$g(c)}break e;case"textarea":Ig(n,o.value,o.defaultValue);break e;case"select":a=o.value,a!=null&&Si(n,!!o.multiple,a,!1)}}}var Ed=!1;function Fg(n,a,o){if(Ed)return n(a,o);Ed=!0;try{var c=n(a);return c}finally{if(Ed=!1,(ki!==null||Ei!==null)&&(_c(),ki&&(a=ki,n=Ei,Ei=ki=null,Xg(a),n)))for(a=0;a<n.length;a++)Xg(n[a])}}function Ho(n,a){var o=n.stateNode;if(o===null)return null;var c=o[Pt]||null;if(c===null)return null;o=c[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(i(231,a,typeof o));return o}var pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cd=!1;if(pr)try{var Io={};Object.defineProperty(Io,"passive",{get:function(){Cd=!0}}),window.addEventListener("test",Io,Io),window.removeEventListener("test",Io,Io)}catch{Cd=!1}var Xr=null,Md=null,$l=null;function Pg(){if($l)return $l;var n,a=Md,o=a.length,c,f="value"in Xr?Xr.value:Xr.textContent,m=f.length;for(n=0;n<o&&a[n]===f[n];n++);var x=o-n;for(c=1;c<=x&&a[o-c]===f[m-c];c++);return $l=f.slice(n,1<c?1-c:void 0)}function Hl(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function Il(){return!0}function Vg(){return!1}function Vt(n){function a(o,c,f,m,x){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=x,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(o=n[k],this[k]=o?o(m):m[k]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Il:Vg,this.isPropagationStopped=Vg,this}return y(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Il)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Il)},persist:function(){},isPersistent:Il}),a}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ql=Vt(Ca),qo=y({},Ca,{view:0,detail:0}),U_=Vt(qo),Od,Nd,Yo,Yl=y({},qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Yo&&(Yo&&n.type==="mousemove"?(Od=n.screenX-Yo.screenX,Nd=n.screenY-Yo.screenY):Nd=Od=0,Yo=n),Od)},movementY:function(n){return"movementY"in n?n.movementY:Nd}}),Gg=Vt(Yl),L_=y({},Yl,{dataTransfer:0}),$_=Vt(L_),H_=y({},qo,{relatedTarget:0}),Ad=Vt(H_),I_=y({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),q_=Vt(I_),Y_=y({},Ca,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),B_=Vt(Y_),X_=y({},Ca,{data:0}),Qg=Vt(X_),F_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},P_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G_(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=V_[n])?!!a[n]:!1}function zd(){return G_}var Q_=y({},qo,{key:function(n){if(n.key){var a=F_[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=Hl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?P_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(n){return n.type==="keypress"?Hl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Hl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),W_=Vt(Q_),Z_=y({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wg=Vt(Z_),K_=y({},qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),J_=Vt(K_),eS=y({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),tS=Vt(eS),nS=y({},Yl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),rS=Vt(nS),aS=y({},Ca,{newState:0,oldState:0}),iS=Vt(aS),oS=[9,13,27,32],Rd=pr&&"CompositionEvent"in window,Bo=null;pr&&"documentMode"in document&&(Bo=document.documentMode);var sS=pr&&"TextEvent"in window&&!Bo,Zg=pr&&(!Rd||Bo&&8<Bo&&11>=Bo),Kg=" ",Jg=!1;function ev(n,a){switch(n){case"keyup":return oS.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tv(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ci=!1;function lS(n,a){switch(n){case"compositionend":return tv(a);case"keypress":return a.which!==32?null:(Jg=!0,Kg);case"textInput":return n=a.data,n===Kg&&Jg?null:n;default:return null}}function cS(n,a){if(Ci)return n==="compositionend"||!Rd&&ev(n,a)?(n=Pg(),$l=Md=Xr=null,Ci=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Zg&&a.locale!=="ko"?null:a.data;default:return null}}var uS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nv(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!uS[n.type]:a==="textarea"}function rv(n,a,o,c){ki?Ei?Ei.push(c):Ei=[c]:ki=c,a=Mc(a,"onChange"),0<a.length&&(o=new ql("onChange","change",null,o,c),n.push({event:o,listeners:a}))}var Xo=null,Fo=null;function dS(n){Ly(n,0)}function Bl(n){var a=$o(n);if($g(a))return n}function av(n,a){if(n==="change")return a}var iv=!1;if(pr){var Dd;if(pr){var jd="oninput"in document;if(!jd){var ov=document.createElement("div");ov.setAttribute("oninput","return;"),jd=typeof ov.oninput=="function"}Dd=jd}else Dd=!1;iv=Dd&&(!document.documentMode||9<document.documentMode)}function sv(){Xo&&(Xo.detachEvent("onpropertychange",lv),Fo=Xo=null)}function lv(n){if(n.propertyName==="value"&&Bl(Fo)){var a=[];rv(a,Fo,n,kd(n)),Fg(dS,a)}}function fS(n,a,o){n==="focusin"?(sv(),Xo=a,Fo=o,Xo.attachEvent("onpropertychange",lv)):n==="focusout"&&sv()}function hS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Bl(Fo)}function pS(n,a){if(n==="click")return Bl(a)}function mS(n,a){if(n==="input"||n==="change")return Bl(a)}function gS(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var an=typeof Object.is=="function"?Object.is:gS;function Po(n,a){if(an(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var o=Object.keys(n),c=Object.keys(a);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!tn.call(a,f)||!an(n[f],a[f]))return!1}return!0}function cv(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function uv(n,a){var o=cv(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=a&&c>=a)return{node:o,offset:a-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=cv(o)}}function dv(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?dv(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function fv(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=Ul(n.document);a instanceof n.HTMLIFrameElement;){try{var o=typeof a.contentWindow.location.href=="string"}catch{o=!1}if(o)n=a.contentWindow;else break;a=Ul(n.document)}return a}function Ud(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}var vS=pr&&"documentMode"in document&&11>=document.documentMode,Mi=null,Ld=null,Vo=null,$d=!1;function hv(n,a,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;$d||Mi==null||Mi!==Ul(c)||(c=Mi,"selectionStart"in c&&Ud(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Vo&&Po(Vo,c)||(Vo=c,c=Mc(Ld,"onSelect"),0<c.length&&(a=new ql("onSelect","select",null,a,o),n.push({event:a,listeners:c}),a.target=Mi)))}function Ma(n,a){var o={};return o[n.toLowerCase()]=a.toLowerCase(),o["Webkit"+n]="webkit"+a,o["Moz"+n]="moz"+a,o}var Oi={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionrun:Ma("Transition","TransitionRun"),transitionstart:Ma("Transition","TransitionStart"),transitioncancel:Ma("Transition","TransitionCancel"),transitionend:Ma("Transition","TransitionEnd")},Hd={},pv={};pr&&(pv=document.createElement("div").style,"AnimationEvent"in window||(delete Oi.animationend.animation,delete Oi.animationiteration.animation,delete Oi.animationstart.animation),"TransitionEvent"in window||delete Oi.transitionend.transition);function Oa(n){if(Hd[n])return Hd[n];if(!Oi[n])return n;var a=Oi[n],o;for(o in a)if(a.hasOwnProperty(o)&&o in pv)return Hd[n]=a[o];return n}var mv=Oa("animationend"),gv=Oa("animationiteration"),vv=Oa("animationstart"),yS=Oa("transitionrun"),bS=Oa("transitionstart"),wS=Oa("transitioncancel"),yv=Oa("transitionend"),bv=new Map,Id="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Id.push("scrollEnd");function Ln(n,a){bv.set(n,a),Ea(a,[n])}var wv=new WeakMap;function _n(n,a){if(typeof n=="object"&&n!==null){var o=wv.get(n);return o!==void 0?o:(a={value:n,source:a,stack:Ug(a)},wv.set(n,a),a)}return{value:n,source:a,stack:Ug(a)}}var Sn=[],Ni=0,qd=0;function Xl(){for(var n=Ni,a=qd=Ni=0;a<n;){var o=Sn[a];Sn[a++]=null;var c=Sn[a];Sn[a++]=null;var f=Sn[a];Sn[a++]=null;var m=Sn[a];if(Sn[a++]=null,c!==null&&f!==null){var x=c.pending;x===null?f.next=f:(f.next=x.next,x.next=f),c.pending=f}m!==0&&xv(o,f,m)}}function Fl(n,a,o,c){Sn[Ni++]=n,Sn[Ni++]=a,Sn[Ni++]=o,Sn[Ni++]=c,qd|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function Yd(n,a,o,c){return Fl(n,a,o,c),Pl(n)}function Ai(n,a){return Fl(n,null,null,a),Pl(n)}function xv(n,a,o){n.lanes|=o;var c=n.alternate;c!==null&&(c.lanes|=o);for(var f=!1,m=n.return;m!==null;)m.childLanes|=o,c=m.alternate,c!==null&&(c.childLanes|=o),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(f=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,f&&a!==null&&(f=31-rn(o),n=m.hiddenUpdates,c=n[f],c===null?n[f]=[a]:c.push(a),a.lane=o|536870912),m):null}function Pl(n){if(50<ys)throw ys=0,Qf=null,Error(i(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var zi={};function xS(n,a,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(n,a,o,c){return new xS(n,a,o,c)}function Bd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function mr(n,a){var o=n.alternate;return o===null?(o=on(n.tag,a,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=a,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,a=n.dependencies,o.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function _v(n,a){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,a=o.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function Vl(n,a,o,c,f,m){var x=0;if(c=n,typeof n=="function")Bd(n)&&(x=1);else if(typeof n=="string")x=ST(n,o,te.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case ne:return n=on(31,o,a,f),n.elementType=ne,n.lanes=m,n;case _:return Na(o.children,f,m,a);case T:x=8,f|=24;break;case M:return n=on(12,o,a,f|2),n.elementType=M,n.lanes=m,n;case D:return n=on(13,o,a,f),n.elementType=D,n.lanes=m,n;case P:return n=on(19,o,a,f),n.elementType=P,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case S:case A:x=10;break e;case C:x=9;break e;case U:x=11;break e;case V:x=14;break e;case ee:x=16,c=null;break e}x=29,o=Error(i(130,n===null?"null":typeof n,"")),c=null}return a=on(x,o,a,f),a.elementType=n,a.type=c,a.lanes=m,a}function Na(n,a,o,c){return n=on(7,n,c,a),n.lanes=o,n}function Xd(n,a,o){return n=on(6,n,null,a),n.lanes=o,n}function Fd(n,a,o){return a=on(4,n.children!==null?n.children:[],n.key,a),a.lanes=o,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}var Ri=[],Di=0,Gl=null,Ql=0,Tn=[],kn=0,Aa=null,gr=1,vr="";function za(n,a){Ri[Di++]=Ql,Ri[Di++]=Gl,Gl=n,Ql=a}function Sv(n,a,o){Tn[kn++]=gr,Tn[kn++]=vr,Tn[kn++]=Aa,Aa=n;var c=gr;n=vr;var f=32-rn(c)-1;c&=~(1<<f),o+=1;var m=32-rn(a)+f;if(30<m){var x=f-f%5;m=(c&(1<<x)-1).toString(32),c>>=x,f-=x,gr=1<<32-rn(a)+f|o<<f|c,vr=m+n}else gr=1<<m|o<<f|c,vr=n}function Pd(n){n.return!==null&&(za(n,1),Sv(n,1,0))}function Vd(n){for(;n===Gl;)Gl=Ri[--Di],Ri[Di]=null,Ql=Ri[--Di],Ri[Di]=null;for(;n===Aa;)Aa=Tn[--kn],Tn[kn]=null,vr=Tn[--kn],Tn[kn]=null,gr=Tn[--kn],Tn[kn]=null}var Yt=null,it=null,Ie=!1,Ra=null,er=!1,Gd=Error(i(519));function Da(n){var a=Error(i(418,""));throw Wo(_n(a,n)),Gd}function Tv(n){var a=n.stateNode,o=n.type,c=n.memoizedProps;switch(a[Ut]=n,a[Pt]=c,o){case"dialog":Re("cancel",a),Re("close",a);break;case"iframe":case"object":case"embed":Re("load",a);break;case"video":case"audio":for(o=0;o<ws.length;o++)Re(ws[o],a);break;case"source":Re("error",a);break;case"img":case"image":case"link":Re("error",a),Re("load",a);break;case"details":Re("toggle",a);break;case"input":Re("invalid",a),Hg(a,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),jl(a);break;case"select":Re("invalid",a);break;case"textarea":Re("invalid",a),qg(a,c.value,c.defaultValue,c.children),jl(a)}o=c.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||a.textContent===""+o||c.suppressHydrationWarning===!0||qy(a.textContent,o)?(c.popover!=null&&(Re("beforetoggle",a),Re("toggle",a)),c.onScroll!=null&&Re("scroll",a),c.onScrollEnd!=null&&Re("scrollend",a),c.onClick!=null&&(a.onclick=Oc),a=!0):a=!1,a||Da(n)}function kv(n){for(Yt=n.return;Yt;)switch(Yt.tag){case 5:case 13:er=!1;return;case 27:case 3:er=!0;return;default:Yt=Yt.return}}function Go(n){if(n!==Yt)return!1;if(!Ie)return kv(n),Ie=!0,!1;var a=n.tag,o;if((o=a!==3&&a!==27)&&((o=a===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||dh(n.type,n.memoizedProps)),o=!o),o&&it&&Da(n),kv(n),a===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));e:{for(n=n.nextSibling,a=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(a===0){it=Hn(n.nextSibling);break e}a--}else o!=="$"&&o!=="$!"&&o!=="$?"||a++;n=n.nextSibling}it=null}}else a===27?(a=it,oa(n.type)?(n=mh,mh=null,it=n):it=a):it=Yt?Hn(n.stateNode.nextSibling):null;return!0}function Qo(){it=Yt=null,Ie=!1}function Ev(){var n=Ra;return n!==null&&(Wt===null?Wt=n:Wt.push.apply(Wt,n),Ra=null),n}function Wo(n){Ra===null?Ra=[n]:Ra.push(n)}var Qd=I(null),ja=null,yr=null;function Fr(n,a,o){J(Qd,a._currentValue),a._currentValue=o}function br(n){n._currentValue=Qd.current,W(Qd)}function Wd(n,a,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,c!==null&&(c.childLanes|=a)):c!==null&&(c.childLanes&a)!==a&&(c.childLanes|=a),n===o)break;n=n.return}}function Zd(n,a,o,c){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var m=f.dependencies;if(m!==null){var x=f.child;m=m.firstContext;e:for(;m!==null;){var k=m;m=f;for(var z=0;z<a.length;z++)if(k.context===a[z]){m.lanes|=o,k=m.alternate,k!==null&&(k.lanes|=o),Wd(m.return,o,n),c||(x=null);break e}m=k.next}}else if(f.tag===18){if(x=f.return,x===null)throw Error(i(341));x.lanes|=o,m=x.alternate,m!==null&&(m.lanes|=o),Wd(x,o,n),x=null}else x=f.child;if(x!==null)x.return=f;else for(x=f;x!==null;){if(x===n){x=null;break}if(f=x.sibling,f!==null){f.return=x.return,x=f;break}x=x.return}f=x}}function Zo(n,a,o,c){n=null;for(var f=a,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var x=f.alternate;if(x===null)throw Error(i(387));if(x=x.memoizedProps,x!==null){var k=f.type;an(f.pendingProps.value,x.value)||(n!==null?n.push(k):n=[k])}}else if(f===ve.current){if(x=f.alternate,x===null)throw Error(i(387));x.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(Es):n=[Es])}f=f.return}n!==null&&Zd(a,n,o,c),a.flags|=262144}function Wl(n){for(n=n.firstContext;n!==null;){if(!an(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ua(n){ja=n,yr=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Lt(n){return Cv(ja,n)}function Zl(n,a){return ja===null&&Ua(n),Cv(n,a)}function Cv(n,a){var o=a._currentValue;if(a={context:a,memoizedValue:o,next:null},yr===null){if(n===null)throw Error(i(308));yr=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else yr=yr.next=a;return o}var _S=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(o,c){n.push(c)}};this.abort=function(){a.aborted=!0,n.forEach(function(o){return o()})}},SS=e.unstable_scheduleCallback,TS=e.unstable_NormalPriority,bt={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Kd(){return{controller:new _S,data:new Map,refCount:0}}function Ko(n){n.refCount--,n.refCount===0&&SS(TS,function(){n.controller.abort()})}var Jo=null,Jd=0,ji=0,Ui=null;function kS(n,a){if(Jo===null){var o=Jo=[];Jd=0,ji=nh(),Ui={status:"pending",value:void 0,then:function(c){o.push(c)}}}return Jd++,a.then(Mv,Mv),a}function Mv(){if(--Jd===0&&Jo!==null){Ui!==null&&(Ui.status="fulfilled");var n=Jo;Jo=null,ji=0,Ui=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function ES(n,a){var o=[],c={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return n.then(function(){c.status="fulfilled",c.value=a;for(var f=0;f<o.length;f++)(0,o[f])(a)},function(f){for(c.status="rejected",c.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),c}var Ov=E.S;E.S=function(n,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&kS(n,a),Ov!==null&&Ov(n,a)};var La=I(null);function ef(){var n=La.current;return n!==null?n:We.pooledCache}function Kl(n,a){a===null?J(La,La.current):J(La,a.pool)}function Nv(){var n=ef();return n===null?null:{parent:bt._currentValue,pool:n}}var es=Error(i(460)),Av=Error(i(474)),Jl=Error(i(542)),tf={then:function(){}};function zv(n){return n=n.status,n==="fulfilled"||n==="rejected"}function ec(){}function Rv(n,a,o){switch(o=n[o],o===void 0?n.push(a):o!==a&&(a.then(ec,ec),a=o),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,jv(n),n;default:if(typeof a.status=="string")a.then(ec,ec);else{if(n=We,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=a,n.status="pending",n.then(function(c){if(a.status==="pending"){var f=a;f.status="fulfilled",f.value=c}},function(c){if(a.status==="pending"){var f=a;f.status="rejected",f.reason=c}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,jv(n),n}throw ts=a,es}}var ts=null;function Dv(){if(ts===null)throw Error(i(459));var n=ts;return ts=null,n}function jv(n){if(n===es||n===Jl)throw Error(i(483))}var Pr=!1;function nf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function rf(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Vr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Gr(n,a,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ye&2)!==0){var f=c.pending;return f===null?a.next=a:(a.next=f.next,f.next=a),c.pending=a,a=Pl(n),xv(n,null,o),a}return Fl(n,c,a,o),Pl(n)}function ns(n,a,o){if(a=a.updateQueue,a!==null&&(a=a.shared,(o&4194048)!==0)){var c=a.lanes;c&=n.pendingLanes,o|=c,a.lanes=o,Mg(n,o)}}function af(n,a){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var x={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=x:m=m.next=x,o=o.next}while(o!==null);m===null?f=m=a:m=m.next=a}else f=m=a;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=a:n.next=a,o.lastBaseUpdate=a}var of=!1;function rs(){if(of){var n=Ui;if(n!==null)throw n}}function as(n,a,o,c){of=!1;var f=n.updateQueue;Pr=!1;var m=f.firstBaseUpdate,x=f.lastBaseUpdate,k=f.shared.pending;if(k!==null){f.shared.pending=null;var z=k,Y=z.next;z.next=null,x===null?m=Y:x.next=Y,x=z;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,k=Q.lastBaseUpdate,k!==x&&(k===null?Q.firstBaseUpdate=Y:k.next=Y,Q.lastBaseUpdate=z))}if(m!==null){var K=f.baseState;x=0,Q=Y=z=null,k=m;do{var X=k.lane&-536870913,F=X!==k.lane;if(F?(Ue&X)===X:(c&X)===X){X!==0&&X===ji&&(of=!0),Q!==null&&(Q=Q.next={lane:0,tag:k.tag,payload:k.payload,callback:null,next:null});e:{var ye=n,me=k;X=a;var Pe=o;switch(me.tag){case 1:if(ye=me.payload,typeof ye=="function"){K=ye.call(Pe,K,X);break e}K=ye;break e;case 3:ye.flags=ye.flags&-65537|128;case 0:if(ye=me.payload,X=typeof ye=="function"?ye.call(Pe,K,X):ye,X==null)break e;K=y({},K,X);break e;case 2:Pr=!0}}X=k.callback,X!==null&&(n.flags|=64,F&&(n.flags|=8192),F=f.callbacks,F===null?f.callbacks=[X]:F.push(X))}else F={lane:X,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Q===null?(Y=Q=F,z=K):Q=Q.next=F,x|=X;if(k=k.next,k===null){if(k=f.shared.pending,k===null)break;F=k,k=F.next,F.next=null,f.lastBaseUpdate=F,f.shared.pending=null}}while(!0);Q===null&&(z=K),f.baseState=z,f.firstBaseUpdate=Y,f.lastBaseUpdate=Q,m===null&&(f.shared.lanes=0),na|=x,n.lanes=x,n.memoizedState=K}}function Uv(n,a){if(typeof n!="function")throw Error(i(191,n));n.call(a)}function Lv(n,a){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)Uv(o[n],a)}var Li=I(null),tc=I(0);function $v(n,a){n=Er,J(tc,n),J(Li,a),Er=n|a.baseLanes}function sf(){J(tc,Er),J(Li,Li.current)}function lf(){Er=tc.current,W(Li),W(tc)}var Qr=0,Oe=null,Xe=null,mt=null,nc=!1,$i=!1,$a=!1,rc=0,is=0,Hi=null,CS=0;function ct(){throw Error(i(321))}function cf(n,a){if(a===null)return!1;for(var o=0;o<a.length&&o<n.length;o++)if(!an(n[o],a[o]))return!1;return!0}function uf(n,a,o,c,f,m){return Qr=m,Oe=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,E.H=n===null||n.memoizedState===null?x0:_0,$a=!1,m=o(c,f),$a=!1,$i&&(m=Iv(a,o,c,f)),Hv(n),m}function Hv(n){E.H=cc;var a=Xe!==null&&Xe.next!==null;if(Qr=0,mt=Xe=Oe=null,nc=!1,is=0,Hi=null,a)throw Error(i(300));n===null||kt||(n=n.dependencies,n!==null&&Wl(n)&&(kt=!0))}function Iv(n,a,o,c){Oe=n;var f=0;do{if($i&&(Hi=null),is=0,$i=!1,25<=f)throw Error(i(301));if(f+=1,mt=Xe=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}E.H=DS,m=a(o,c)}while($i);return m}function MS(){var n=E.H,a=n.useState()[0];return a=typeof a.then=="function"?os(a):a,n=n.useState()[0],(Xe!==null?Xe.memoizedState:null)!==n&&(Oe.flags|=1024),a}function df(){var n=rc!==0;return rc=0,n}function ff(n,a,o){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~o}function hf(n){if(nc){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}nc=!1}Qr=0,mt=Xe=Oe=null,$i=!1,is=rc=0,Hi=null}function Gt(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?Oe.memoizedState=mt=n:mt=mt.next=n,mt}function gt(){if(Xe===null){var n=Oe.alternate;n=n!==null?n.memoizedState:null}else n=Xe.next;var a=mt===null?Oe.memoizedState:mt.next;if(a!==null)mt=a,Xe=n;else{if(n===null)throw Oe.alternate===null?Error(i(467)):Error(i(310));Xe=n,n={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},mt===null?Oe.memoizedState=mt=n:mt=mt.next=n}return mt}function pf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function os(n){var a=is;return is+=1,Hi===null&&(Hi=[]),n=Rv(Hi,n,a),a=Oe,(mt===null?a.memoizedState:mt.next)===null&&(a=a.alternate,E.H=a===null||a.memoizedState===null?x0:_0),n}function ac(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return os(n);if(n.$$typeof===A)return Lt(n)}throw Error(i(438,String(n)))}function mf(n){var a=null,o=Oe.updateQueue;if(o!==null&&(a=o.memoCache),a==null){var c=Oe.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(a={data:c.data.map(function(f){return f.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),o===null&&(o=pf(),Oe.updateQueue=o),o.memoCache=a,o=a.data[a.index],o===void 0)for(o=a.data[a.index]=Array(n),c=0;c<n;c++)o[c]=ue;return a.index++,o}function wr(n,a){return typeof a=="function"?a(n):a}function ic(n){var a=gt();return gf(a,Xe,n)}function gf(n,a,o){var c=n.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=o;var f=n.baseQueue,m=c.pending;if(m!==null){if(f!==null){var x=f.next;f.next=m.next,m.next=x}a.baseQueue=f=m,c.pending=null}if(m=n.baseState,f===null)n.memoizedState=m;else{a=f.next;var k=x=null,z=null,Y=a,Q=!1;do{var K=Y.lane&-536870913;if(K!==Y.lane?(Ue&K)===K:(Qr&K)===K){var X=Y.revertLane;if(X===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),K===ji&&(Q=!0);else if((Qr&X)===X){Y=Y.next,X===ji&&(Q=!0);continue}else K={lane:0,revertLane:Y.revertLane,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},z===null?(k=z=K,x=m):z=z.next=K,Oe.lanes|=X,na|=X;K=Y.action,$a&&o(m,K),m=Y.hasEagerState?Y.eagerState:o(m,K)}else X={lane:K,revertLane:Y.revertLane,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},z===null?(k=z=X,x=m):z=z.next=X,Oe.lanes|=K,na|=K;Y=Y.next}while(Y!==null&&Y!==a);if(z===null?x=m:z.next=k,!an(m,n.memoizedState)&&(kt=!0,Q&&(o=Ui,o!==null)))throw o;n.memoizedState=m,n.baseState=x,n.baseQueue=z,c.lastRenderedState=m}return f===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function vf(n){var a=gt(),o=a.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=n;var c=o.dispatch,f=o.pending,m=a.memoizedState;if(f!==null){o.pending=null;var x=f=f.next;do m=n(m,x.action),x=x.next;while(x!==f);an(m,a.memoizedState)||(kt=!0),a.memoizedState=m,a.baseQueue===null&&(a.baseState=m),o.lastRenderedState=m}return[m,c]}function qv(n,a,o){var c=Oe,f=gt(),m=Ie;if(m){if(o===void 0)throw Error(i(407));o=o()}else o=a();var x=!an((Xe||f).memoizedState,o);x&&(f.memoizedState=o,kt=!0),f=f.queue;var k=Xv.bind(null,c,f,n);if(ss(2048,8,k,[n]),f.getSnapshot!==a||x||mt!==null&&mt.memoizedState.tag&1){if(c.flags|=2048,Ii(9,oc(),Bv.bind(null,c,f,o,a),null),We===null)throw Error(i(349));m||(Qr&124)!==0||Yv(c,a,o)}return o}function Yv(n,a,o){n.flags|=16384,n={getSnapshot:a,value:o},a=Oe.updateQueue,a===null?(a=pf(),Oe.updateQueue=a,a.stores=[n]):(o=a.stores,o===null?a.stores=[n]:o.push(n))}function Bv(n,a,o,c){a.value=o,a.getSnapshot=c,Fv(a)&&Pv(n)}function Xv(n,a,o){return o(function(){Fv(a)&&Pv(n)})}function Fv(n){var a=n.getSnapshot;n=n.value;try{var o=a();return!an(n,o)}catch{return!0}}function Pv(n){var a=Ai(n,2);a!==null&&dn(a,n,2)}function yf(n){var a=Gt();if(typeof n=="function"){var o=n;if(n=o(),$a){Yr(!0);try{o()}finally{Yr(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wr,lastRenderedState:n},a}function Vv(n,a,o,c){return n.baseState=o,gf(n,Xe,typeof c=="function"?c:wr)}function OS(n,a,o,c,f){if(lc(n))throw Error(i(485));if(n=a.action,n!==null){var m={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){m.listeners.push(x)}};E.T!==null?o(!0):m.isTransition=!1,c(m),o=a.pending,o===null?(m.next=a.pending=m,Gv(a,m)):(m.next=o.next,a.pending=o.next=m)}}function Gv(n,a){var o=a.action,c=a.payload,f=n.state;if(a.isTransition){var m=E.T,x={};E.T=x;try{var k=o(f,c),z=E.S;z!==null&&z(x,k),Qv(n,a,k)}catch(Y){bf(n,a,Y)}finally{E.T=m}}else try{m=o(f,c),Qv(n,a,m)}catch(Y){bf(n,a,Y)}}function Qv(n,a,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(c){Wv(n,a,c)},function(c){return bf(n,a,c)}):Wv(n,a,o)}function Wv(n,a,o){a.status="fulfilled",a.value=o,Zv(a),n.state=o,a=n.pending,a!==null&&(o=a.next,o===a?n.pending=null:(o=o.next,a.next=o,Gv(n,o)))}function bf(n,a,o){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do a.status="rejected",a.reason=o,Zv(a),a=a.next;while(a!==c)}n.action=null}function Zv(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function Kv(n,a){return a}function Jv(n,a){if(Ie){var o=We.formState;if(o!==null){e:{var c=Oe;if(Ie){if(it){t:{for(var f=it,m=er;f.nodeType!==8;){if(!m){f=null;break t}if(f=Hn(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){it=Hn(f.nextSibling),c=f.data==="F!";break e}}Da(c)}c=!1}c&&(a=o[0])}}return o=Gt(),o.memoizedState=o.baseState=a,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kv,lastRenderedState:a},o.queue=c,o=y0.bind(null,Oe,c),c.dispatch=o,c=yf(!1),m=Tf.bind(null,Oe,!1,c.queue),c=Gt(),f={state:a,dispatch:null,action:n,pending:null},c.queue=f,o=OS.bind(null,Oe,f,m,o),f.dispatch=o,c.memoizedState=n,[a,o,!1]}function e0(n){var a=gt();return t0(a,Xe,n)}function t0(n,a,o){if(a=gf(n,a,Kv)[0],n=ic(wr)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var c=os(a)}catch(x){throw x===es?Jl:x}else c=a;a=gt();var f=a.queue,m=f.dispatch;return o!==a.memoizedState&&(Oe.flags|=2048,Ii(9,oc(),NS.bind(null,f,o),null)),[c,m,n]}function NS(n,a){n.action=a}function n0(n){var a=gt(),o=Xe;if(o!==null)return t0(a,o,n);gt(),a=a.memoizedState,o=gt();var c=o.queue.dispatch;return o.memoizedState=n,[a,c,!1]}function Ii(n,a,o,c){return n={tag:n,create:o,deps:c,inst:a,next:null},a=Oe.updateQueue,a===null&&(a=pf(),Oe.updateQueue=a),o=a.lastEffect,o===null?a.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,a.lastEffect=n),n}function oc(){return{destroy:void 0,resource:void 0}}function r0(){return gt().memoizedState}function sc(n,a,o,c){var f=Gt();c=c===void 0?null:c,Oe.flags|=n,f.memoizedState=Ii(1|a,oc(),o,c)}function ss(n,a,o,c){var f=gt();c=c===void 0?null:c;var m=f.memoizedState.inst;Xe!==null&&c!==null&&cf(c,Xe.memoizedState.deps)?f.memoizedState=Ii(a,m,o,c):(Oe.flags|=n,f.memoizedState=Ii(1|a,m,o,c))}function a0(n,a){sc(8390656,8,n,a)}function i0(n,a){ss(2048,8,n,a)}function o0(n,a){return ss(4,2,n,a)}function s0(n,a){return ss(4,4,n,a)}function l0(n,a){if(typeof a=="function"){n=n();var o=a(n);return function(){typeof o=="function"?o():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function c0(n,a,o){o=o!=null?o.concat([n]):null,ss(4,4,l0.bind(null,a,n),o)}function wf(){}function u0(n,a){var o=gt();a=a===void 0?null:a;var c=o.memoizedState;return a!==null&&cf(a,c[1])?c[0]:(o.memoizedState=[n,a],n)}function d0(n,a){var o=gt();a=a===void 0?null:a;var c=o.memoizedState;if(a!==null&&cf(a,c[1]))return c[0];if(c=n(),$a){Yr(!0);try{n()}finally{Yr(!1)}}return o.memoizedState=[c,a],c}function xf(n,a,o){return o===void 0||(Qr&1073741824)!==0?n.memoizedState=a:(n.memoizedState=o,n=py(),Oe.lanes|=n,na|=n,o)}function f0(n,a,o,c){return an(o,a)?o:Li.current!==null?(n=xf(n,o,c),an(n,a)||(kt=!0),n):(Qr&42)===0?(kt=!0,n.memoizedState=o):(n=py(),Oe.lanes|=n,na|=n,a)}function h0(n,a,o,c,f){var m=N.p;N.p=m!==0&&8>m?m:8;var x=E.T,k={};E.T=k,Tf(n,!1,a,o);try{var z=f(),Y=E.S;if(Y!==null&&Y(k,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var Q=ES(z,c);ls(n,a,Q,un(n))}else ls(n,a,c,un(n))}catch(K){ls(n,a,{then:function(){},status:"rejected",reason:K},un())}finally{N.p=m,E.T=x}}function AS(){}function _f(n,a,o,c){if(n.tag!==5)throw Error(i(476));var f=p0(n).queue;h0(n,f,a,R,o===null?AS:function(){return m0(n),o(c)})}function p0(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:R,baseState:R,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wr,lastRenderedState:R},next:null};var o={};return a.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wr,lastRenderedState:o},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function m0(n){var a=p0(n).next.queue;ls(n,a,{},un())}function Sf(){return Lt(Es)}function g0(){return gt().memoizedState}function v0(){return gt().memoizedState}function zS(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var o=un();n=Vr(o);var c=Gr(a,n,o);c!==null&&(dn(c,a,o),ns(c,a,o)),a={cache:Kd()},n.payload=a;return}a=a.return}}function RS(n,a,o){var c=un();o={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},lc(n)?b0(a,o):(o=Yd(n,a,o,c),o!==null&&(dn(o,n,c),w0(o,a,c)))}function y0(n,a,o){var c=un();ls(n,a,o,c)}function ls(n,a,o,c){var f={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(lc(n))b0(a,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=a.lastRenderedReducer,m!==null))try{var x=a.lastRenderedState,k=m(x,o);if(f.hasEagerState=!0,f.eagerState=k,an(k,x))return Fl(n,a,f,0),We===null&&Xl(),!1}catch{}finally{}if(o=Yd(n,a,f,c),o!==null)return dn(o,n,c),w0(o,a,c),!0}return!1}function Tf(n,a,o,c){if(c={lane:2,revertLane:nh(),action:c,hasEagerState:!1,eagerState:null,next:null},lc(n)){if(a)throw Error(i(479))}else a=Yd(n,o,c,2),a!==null&&dn(a,n,2)}function lc(n){var a=n.alternate;return n===Oe||a!==null&&a===Oe}function b0(n,a){$i=nc=!0;var o=n.pending;o===null?a.next=a:(a.next=o.next,o.next=a),n.pending=a}function w0(n,a,o){if((o&4194048)!==0){var c=a.lanes;c&=n.pendingLanes,o|=c,a.lanes=o,Mg(n,o)}}var cc={readContext:Lt,use:ac,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useLayoutEffect:ct,useInsertionEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useSyncExternalStore:ct,useId:ct,useHostTransitionStatus:ct,useFormState:ct,useActionState:ct,useOptimistic:ct,useMemoCache:ct,useCacheRefresh:ct},x0={readContext:Lt,use:ac,useCallback:function(n,a){return Gt().memoizedState=[n,a===void 0?null:a],n},useContext:Lt,useEffect:a0,useImperativeHandle:function(n,a,o){o=o!=null?o.concat([n]):null,sc(4194308,4,l0.bind(null,a,n),o)},useLayoutEffect:function(n,a){return sc(4194308,4,n,a)},useInsertionEffect:function(n,a){sc(4,2,n,a)},useMemo:function(n,a){var o=Gt();a=a===void 0?null:a;var c=n();if($a){Yr(!0);try{n()}finally{Yr(!1)}}return o.memoizedState=[c,a],c},useReducer:function(n,a,o){var c=Gt();if(o!==void 0){var f=o(a);if($a){Yr(!0);try{o(a)}finally{Yr(!1)}}}else f=a;return c.memoizedState=c.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},c.queue=n,n=n.dispatch=RS.bind(null,Oe,n),[c.memoizedState,n]},useRef:function(n){var a=Gt();return n={current:n},a.memoizedState=n},useState:function(n){n=yf(n);var a=n.queue,o=y0.bind(null,Oe,a);return a.dispatch=o,[n.memoizedState,o]},useDebugValue:wf,useDeferredValue:function(n,a){var o=Gt();return xf(o,n,a)},useTransition:function(){var n=yf(!1);return n=h0.bind(null,Oe,n.queue,!0,!1),Gt().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,o){var c=Oe,f=Gt();if(Ie){if(o===void 0)throw Error(i(407));o=o()}else{if(o=a(),We===null)throw Error(i(349));(Ue&124)!==0||Yv(c,a,o)}f.memoizedState=o;var m={value:o,getSnapshot:a};return f.queue=m,a0(Xv.bind(null,c,m,n),[n]),c.flags|=2048,Ii(9,oc(),Bv.bind(null,c,m,o,a),null),o},useId:function(){var n=Gt(),a=We.identifierPrefix;if(Ie){var o=vr,c=gr;o=(c&~(1<<32-rn(c)-1)).toString(32)+o,a="«"+a+"R"+o,o=rc++,0<o&&(a+="H"+o.toString(32)),a+="»"}else o=CS++,a="«"+a+"r"+o.toString(32)+"»";return n.memoizedState=a},useHostTransitionStatus:Sf,useFormState:Jv,useActionState:Jv,useOptimistic:function(n){var a=Gt();a.memoizedState=a.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=o,a=Tf.bind(null,Oe,!0,o),o.dispatch=a,[n,a]},useMemoCache:mf,useCacheRefresh:function(){return Gt().memoizedState=zS.bind(null,Oe)}},_0={readContext:Lt,use:ac,useCallback:u0,useContext:Lt,useEffect:i0,useImperativeHandle:c0,useInsertionEffect:o0,useLayoutEffect:s0,useMemo:d0,useReducer:ic,useRef:r0,useState:function(){return ic(wr)},useDebugValue:wf,useDeferredValue:function(n,a){var o=gt();return f0(o,Xe.memoizedState,n,a)},useTransition:function(){var n=ic(wr)[0],a=gt().memoizedState;return[typeof n=="boolean"?n:os(n),a]},useSyncExternalStore:qv,useId:g0,useHostTransitionStatus:Sf,useFormState:e0,useActionState:e0,useOptimistic:function(n,a){var o=gt();return Vv(o,Xe,n,a)},useMemoCache:mf,useCacheRefresh:v0},DS={readContext:Lt,use:ac,useCallback:u0,useContext:Lt,useEffect:i0,useImperativeHandle:c0,useInsertionEffect:o0,useLayoutEffect:s0,useMemo:d0,useReducer:vf,useRef:r0,useState:function(){return vf(wr)},useDebugValue:wf,useDeferredValue:function(n,a){var o=gt();return Xe===null?xf(o,n,a):f0(o,Xe.memoizedState,n,a)},useTransition:function(){var n=vf(wr)[0],a=gt().memoizedState;return[typeof n=="boolean"?n:os(n),a]},useSyncExternalStore:qv,useId:g0,useHostTransitionStatus:Sf,useFormState:n0,useActionState:n0,useOptimistic:function(n,a){var o=gt();return Xe!==null?Vv(o,Xe,n,a):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:mf,useCacheRefresh:v0},qi=null,cs=0;function uc(n){var a=cs;return cs+=1,qi===null&&(qi=[]),Rv(qi,n,a)}function us(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function dc(n,a){throw a.$$typeof===g?Error(i(525)):(n=Object.prototype.toString.call(a),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function S0(n){var a=n._init;return a(n._payload)}function T0(n){function a(H,j){if(n){var q=H.deletions;q===null?(H.deletions=[j],H.flags|=16):q.push(j)}}function o(H,j){if(!n)return null;for(;j!==null;)a(H,j),j=j.sibling;return null}function c(H){for(var j=new Map;H!==null;)H.key!==null?j.set(H.key,H):j.set(H.index,H),H=H.sibling;return j}function f(H,j){return H=mr(H,j),H.index=0,H.sibling=null,H}function m(H,j,q){return H.index=q,n?(q=H.alternate,q!==null?(q=q.index,q<j?(H.flags|=67108866,j):q):(H.flags|=67108866,j)):(H.flags|=1048576,j)}function x(H){return n&&H.alternate===null&&(H.flags|=67108866),H}function k(H,j,q,Z){return j===null||j.tag!==6?(j=Xd(q,H.mode,Z),j.return=H,j):(j=f(j,q),j.return=H,j)}function z(H,j,q,Z){var ce=q.type;return ce===_?Q(H,j,q.props.children,Z,q.key):j!==null&&(j.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===ee&&S0(ce)===j.type)?(j=f(j,q.props),us(j,q),j.return=H,j):(j=Vl(q.type,q.key,q.props,null,H.mode,Z),us(j,q),j.return=H,j)}function Y(H,j,q,Z){return j===null||j.tag!==4||j.stateNode.containerInfo!==q.containerInfo||j.stateNode.implementation!==q.implementation?(j=Fd(q,H.mode,Z),j.return=H,j):(j=f(j,q.children||[]),j.return=H,j)}function Q(H,j,q,Z,ce){return j===null||j.tag!==7?(j=Na(q,H.mode,Z,ce),j.return=H,j):(j=f(j,q),j.return=H,j)}function K(H,j,q){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Xd(""+j,H.mode,q),j.return=H,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case w:return q=Vl(j.type,j.key,j.props,null,H.mode,q),us(q,j),q.return=H,q;case b:return j=Fd(j,H.mode,q),j.return=H,j;case ee:var Z=j._init;return j=Z(j._payload),K(H,j,q)}if(Se(j)||ae(j))return j=Na(j,H.mode,q,null),j.return=H,j;if(typeof j.then=="function")return K(H,uc(j),q);if(j.$$typeof===A)return K(H,Zl(H,j),q);dc(H,j)}return null}function X(H,j,q,Z){var ce=j!==null?j.key:null;if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return ce!==null?null:k(H,j,""+q,Z);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case w:return q.key===ce?z(H,j,q,Z):null;case b:return q.key===ce?Y(H,j,q,Z):null;case ee:return ce=q._init,q=ce(q._payload),X(H,j,q,Z)}if(Se(q)||ae(q))return ce!==null?null:Q(H,j,q,Z,null);if(typeof q.then=="function")return X(H,j,uc(q),Z);if(q.$$typeof===A)return X(H,j,Zl(H,q),Z);dc(H,q)}return null}function F(H,j,q,Z,ce){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return H=H.get(q)||null,k(j,H,""+Z,ce);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case w:return H=H.get(Z.key===null?q:Z.key)||null,z(j,H,Z,ce);case b:return H=H.get(Z.key===null?q:Z.key)||null,Y(j,H,Z,ce);case ee:var Ae=Z._init;return Z=Ae(Z._payload),F(H,j,q,Z,ce)}if(Se(Z)||ae(Z))return H=H.get(q)||null,Q(j,H,Z,ce,null);if(typeof Z.then=="function")return F(H,j,q,uc(Z),ce);if(Z.$$typeof===A)return F(H,j,q,Zl(j,Z),ce);dc(j,Z)}return null}function ye(H,j,q,Z){for(var ce=null,Ae=null,fe=j,ge=j=0,Ct=null;fe!==null&&ge<q.length;ge++){fe.index>ge?(Ct=fe,fe=null):Ct=fe.sibling;var He=X(H,fe,q[ge],Z);if(He===null){fe===null&&(fe=Ct);break}n&&fe&&He.alternate===null&&a(H,fe),j=m(He,j,ge),Ae===null?ce=He:Ae.sibling=He,Ae=He,fe=Ct}if(ge===q.length)return o(H,fe),Ie&&za(H,ge),ce;if(fe===null){for(;ge<q.length;ge++)fe=K(H,q[ge],Z),fe!==null&&(j=m(fe,j,ge),Ae===null?ce=fe:Ae.sibling=fe,Ae=fe);return Ie&&za(H,ge),ce}for(fe=c(fe);ge<q.length;ge++)Ct=F(fe,H,ge,q[ge],Z),Ct!==null&&(n&&Ct.alternate!==null&&fe.delete(Ct.key===null?ge:Ct.key),j=m(Ct,j,ge),Ae===null?ce=Ct:Ae.sibling=Ct,Ae=Ct);return n&&fe.forEach(function(da){return a(H,da)}),Ie&&za(H,ge),ce}function me(H,j,q,Z){if(q==null)throw Error(i(151));for(var ce=null,Ae=null,fe=j,ge=j=0,Ct=null,He=q.next();fe!==null&&!He.done;ge++,He=q.next()){fe.index>ge?(Ct=fe,fe=null):Ct=fe.sibling;var da=X(H,fe,He.value,Z);if(da===null){fe===null&&(fe=Ct);break}n&&fe&&da.alternate===null&&a(H,fe),j=m(da,j,ge),Ae===null?ce=da:Ae.sibling=da,Ae=da,fe=Ct}if(He.done)return o(H,fe),Ie&&za(H,ge),ce;if(fe===null){for(;!He.done;ge++,He=q.next())He=K(H,He.value,Z),He!==null&&(j=m(He,j,ge),Ae===null?ce=He:Ae.sibling=He,Ae=He);return Ie&&za(H,ge),ce}for(fe=c(fe);!He.done;ge++,He=q.next())He=F(fe,H,ge,He.value,Z),He!==null&&(n&&He.alternate!==null&&fe.delete(He.key===null?ge:He.key),j=m(He,j,ge),Ae===null?ce=He:Ae.sibling=He,Ae=He);return n&&fe.forEach(function(jT){return a(H,jT)}),Ie&&za(H,ge),ce}function Pe(H,j,q,Z){if(typeof q=="object"&&q!==null&&q.type===_&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case w:e:{for(var ce=q.key;j!==null;){if(j.key===ce){if(ce=q.type,ce===_){if(j.tag===7){o(H,j.sibling),Z=f(j,q.props.children),Z.return=H,H=Z;break e}}else if(j.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===ee&&S0(ce)===j.type){o(H,j.sibling),Z=f(j,q.props),us(Z,q),Z.return=H,H=Z;break e}o(H,j);break}else a(H,j);j=j.sibling}q.type===_?(Z=Na(q.props.children,H.mode,Z,q.key),Z.return=H,H=Z):(Z=Vl(q.type,q.key,q.props,null,H.mode,Z),us(Z,q),Z.return=H,H=Z)}return x(H);case b:e:{for(ce=q.key;j!==null;){if(j.key===ce)if(j.tag===4&&j.stateNode.containerInfo===q.containerInfo&&j.stateNode.implementation===q.implementation){o(H,j.sibling),Z=f(j,q.children||[]),Z.return=H,H=Z;break e}else{o(H,j);break}else a(H,j);j=j.sibling}Z=Fd(q,H.mode,Z),Z.return=H,H=Z}return x(H);case ee:return ce=q._init,q=ce(q._payload),Pe(H,j,q,Z)}if(Se(q))return ye(H,j,q,Z);if(ae(q)){if(ce=ae(q),typeof ce!="function")throw Error(i(150));return q=ce.call(q),me(H,j,q,Z)}if(typeof q.then=="function")return Pe(H,j,uc(q),Z);if(q.$$typeof===A)return Pe(H,j,Zl(H,q),Z);dc(H,q)}return typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint"?(q=""+q,j!==null&&j.tag===6?(o(H,j.sibling),Z=f(j,q),Z.return=H,H=Z):(o(H,j),Z=Xd(q,H.mode,Z),Z.return=H,H=Z),x(H)):o(H,j)}return function(H,j,q,Z){try{cs=0;var ce=Pe(H,j,q,Z);return qi=null,ce}catch(fe){if(fe===es||fe===Jl)throw fe;var Ae=on(29,fe,null,H.mode);return Ae.lanes=Z,Ae.return=H,Ae}finally{}}}var Yi=T0(!0),k0=T0(!1),En=I(null),tr=null;function Wr(n){var a=n.alternate;J(wt,wt.current&1),J(En,n),tr===null&&(a===null||Li.current!==null||a.memoizedState!==null)&&(tr=n)}function E0(n){if(n.tag===22){if(J(wt,wt.current),J(En,n),tr===null){var a=n.alternate;a!==null&&a.memoizedState!==null&&(tr=n)}}else Zr()}function Zr(){J(wt,wt.current),J(En,En.current)}function xr(n){W(En),tr===n&&(tr=null),W(wt)}var wt=I(0);function fc(n){for(var a=n;a!==null;){if(a.tag===13){var o=a.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||ph(o)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function kf(n,a,o,c){a=n.memoizedState,o=o(c,a),o=o==null?a:y({},a,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Ef={enqueueSetState:function(n,a,o){n=n._reactInternals;var c=un(),f=Vr(c);f.payload=a,o!=null&&(f.callback=o),a=Gr(n,f,c),a!==null&&(dn(a,n,c),ns(a,n,c))},enqueueReplaceState:function(n,a,o){n=n._reactInternals;var c=un(),f=Vr(c);f.tag=1,f.payload=a,o!=null&&(f.callback=o),a=Gr(n,f,c),a!==null&&(dn(a,n,c),ns(a,n,c))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var o=un(),c=Vr(o);c.tag=2,a!=null&&(c.callback=a),a=Gr(n,c,o),a!==null&&(dn(a,n,o),ns(a,n,o))}};function C0(n,a,o,c,f,m,x){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,x):a.prototype&&a.prototype.isPureReactComponent?!Po(o,c)||!Po(f,m):!0}function M0(n,a,o,c){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(o,c),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(o,c),a.state!==n&&Ef.enqueueReplaceState(a,a.state,null)}function Ha(n,a){var o=a;if("ref"in a){o={};for(var c in a)c!=="ref"&&(o[c]=a[c])}if(n=n.defaultProps){o===a&&(o=y({},o));for(var f in n)o[f]===void 0&&(o[f]=n[f])}return o}var hc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function O0(n){hc(n)}function N0(n){console.error(n)}function A0(n){hc(n)}function pc(n,a){try{var o=n.onUncaughtError;o(a.value,{componentStack:a.stack})}catch(c){setTimeout(function(){throw c})}}function z0(n,a,o){try{var c=n.onCaughtError;c(o.value,{componentStack:o.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Cf(n,a,o){return o=Vr(o),o.tag=3,o.payload={element:null},o.callback=function(){pc(n,a)},o}function R0(n){return n=Vr(n),n.tag=3,n}function D0(n,a,o,c){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=c.value;n.payload=function(){return f(m)},n.callback=function(){z0(a,o,c)}}var x=o.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(n.callback=function(){z0(a,o,c),typeof f!="function"&&(ra===null?ra=new Set([this]):ra.add(this));var k=c.stack;this.componentDidCatch(c.value,{componentStack:k!==null?k:""})})}function jS(n,a,o,c,f){if(o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(a=o.alternate,a!==null&&Zo(a,o,f,!0),o=En.current,o!==null){switch(o.tag){case 13:return tr===null?Zf():o.alternate===null&&ot===0&&(ot=3),o.flags&=-257,o.flags|=65536,o.lanes=f,c===tf?o.flags|=16384:(a=o.updateQueue,a===null?o.updateQueue=new Set([c]):a.add(c),Jf(n,c,f)),!1;case 22:return o.flags|=65536,c===tf?o.flags|=16384:(a=o.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([c])},o.updateQueue=a):(o=a.retryQueue,o===null?a.retryQueue=new Set([c]):o.add(c)),Jf(n,c,f)),!1}throw Error(i(435,o.tag))}return Jf(n,c,f),Zf(),!1}if(Ie)return a=En.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=f,c!==Gd&&(n=Error(i(422),{cause:c}),Wo(_n(n,o)))):(c!==Gd&&(a=Error(i(423),{cause:c}),Wo(_n(a,o))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,c=_n(c,o),f=Cf(n.stateNode,c,f),af(n,f),ot!==4&&(ot=2)),!1;var m=Error(i(520),{cause:c});if(m=_n(m,o),vs===null?vs=[m]:vs.push(m),ot!==4&&(ot=2),a===null)return!0;c=_n(c,o),o=a;do{switch(o.tag){case 3:return o.flags|=65536,n=f&-f,o.lanes|=n,n=Cf(o.stateNode,c,n),af(o,n),!1;case 1:if(a=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ra===null||!ra.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=R0(f),D0(f,n,o,c),af(o,f),!1}o=o.return}while(o!==null);return!1}var j0=Error(i(461)),kt=!1;function At(n,a,o,c){a.child=n===null?k0(a,null,o,c):Yi(a,n.child,o,c)}function U0(n,a,o,c,f){o=o.render;var m=a.ref;if("ref"in c){var x={};for(var k in c)k!=="ref"&&(x[k]=c[k])}else x=c;return Ua(a),c=uf(n,a,o,x,m,f),k=df(),n!==null&&!kt?(ff(n,a,f),_r(n,a,f)):(Ie&&k&&Pd(a),a.flags|=1,At(n,a,c,f),a.child)}function L0(n,a,o,c,f){if(n===null){var m=o.type;return typeof m=="function"&&!Bd(m)&&m.defaultProps===void 0&&o.compare===null?(a.tag=15,a.type=m,$0(n,a,m,c,f)):(n=Vl(o.type,null,c,a,a.mode,f),n.ref=a.ref,n.return=a,a.child=n)}if(m=n.child,!jf(n,f)){var x=m.memoizedProps;if(o=o.compare,o=o!==null?o:Po,o(x,c)&&n.ref===a.ref)return _r(n,a,f)}return a.flags|=1,n=mr(m,c),n.ref=a.ref,n.return=a,a.child=n}function $0(n,a,o,c,f){if(n!==null){var m=n.memoizedProps;if(Po(m,c)&&n.ref===a.ref)if(kt=!1,a.pendingProps=c=m,jf(n,f))(n.flags&131072)!==0&&(kt=!0);else return a.lanes=n.lanes,_r(n,a,f)}return Mf(n,a,o,c,f)}function H0(n,a,o){var c=a.pendingProps,f=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden"){if((a.flags&128)!==0){if(c=m!==null?m.baseLanes|o:o,n!==null){for(f=a.child=n.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;a.childLanes=m&~c}else a.childLanes=0,a.child=null;return I0(n,a,c,o)}if((o&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&Kl(a,m!==null?m.cachePool:null),m!==null?$v(a,m):sf(),E0(a);else return a.lanes=a.childLanes=536870912,I0(n,a,m!==null?m.baseLanes|o:o,o)}else m!==null?(Kl(a,m.cachePool),$v(a,m),Zr(),a.memoizedState=null):(n!==null&&Kl(a,null),sf(),Zr());return At(n,a,f,o),a.child}function I0(n,a,o,c){var f=ef();return f=f===null?null:{parent:bt._currentValue,pool:f},a.memoizedState={baseLanes:o,cachePool:f},n!==null&&Kl(a,null),sf(),E0(a),n!==null&&Zo(n,a,c,!0),null}function mc(n,a){var o=a.ref;if(o===null)n!==null&&n.ref!==null&&(a.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(n===null||n.ref!==o)&&(a.flags|=4194816)}}function Mf(n,a,o,c,f){return Ua(a),o=uf(n,a,o,c,void 0,f),c=df(),n!==null&&!kt?(ff(n,a,f),_r(n,a,f)):(Ie&&c&&Pd(a),a.flags|=1,At(n,a,o,f),a.child)}function q0(n,a,o,c,f,m){return Ua(a),a.updateQueue=null,o=Iv(a,c,o,f),Hv(n),c=df(),n!==null&&!kt?(ff(n,a,m),_r(n,a,m)):(Ie&&c&&Pd(a),a.flags|=1,At(n,a,o,m),a.child)}function Y0(n,a,o,c,f){if(Ua(a),a.stateNode===null){var m=zi,x=o.contextType;typeof x=="object"&&x!==null&&(m=Lt(x)),m=new o(c,m),a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Ef,a.stateNode=m,m._reactInternals=a,m=a.stateNode,m.props=c,m.state=a.memoizedState,m.refs={},nf(a),x=o.contextType,m.context=typeof x=="object"&&x!==null?Lt(x):zi,m.state=a.memoizedState,x=o.getDerivedStateFromProps,typeof x=="function"&&(kf(a,o,x,c),m.state=a.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(x=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),x!==m.state&&Ef.enqueueReplaceState(m,m.state,null),as(a,c,m,f),rs(),m.state=a.memoizedState),typeof m.componentDidMount=="function"&&(a.flags|=4194308),c=!0}else if(n===null){m=a.stateNode;var k=a.memoizedProps,z=Ha(o,k);m.props=z;var Y=m.context,Q=o.contextType;x=zi,typeof Q=="object"&&Q!==null&&(x=Lt(Q));var K=o.getDerivedStateFromProps;Q=typeof K=="function"||typeof m.getSnapshotBeforeUpdate=="function",k=a.pendingProps!==k,Q||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(k||Y!==x)&&M0(a,m,c,x),Pr=!1;var X=a.memoizedState;m.state=X,as(a,c,m,f),rs(),Y=a.memoizedState,k||X!==Y||Pr?(typeof K=="function"&&(kf(a,o,K,c),Y=a.memoizedState),(z=Pr||C0(a,o,z,c,X,Y,x))?(Q||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(a.flags|=4194308)):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=c,a.memoizedState=Y),m.props=c,m.state=Y,m.context=x,c=z):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),c=!1)}else{m=a.stateNode,rf(n,a),x=a.memoizedProps,Q=Ha(o,x),m.props=Q,K=a.pendingProps,X=m.context,Y=o.contextType,z=zi,typeof Y=="object"&&Y!==null&&(z=Lt(Y)),k=o.getDerivedStateFromProps,(Y=typeof k=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(x!==K||X!==z)&&M0(a,m,c,z),Pr=!1,X=a.memoizedState,m.state=X,as(a,c,m,f),rs();var F=a.memoizedState;x!==K||X!==F||Pr||n!==null&&n.dependencies!==null&&Wl(n.dependencies)?(typeof k=="function"&&(kf(a,o,k,c),F=a.memoizedState),(Q=Pr||C0(a,o,Q,c,X,F,z)||n!==null&&n.dependencies!==null&&Wl(n.dependencies))?(Y||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,F,z),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,F,z)),typeof m.componentDidUpdate=="function"&&(a.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof m.componentDidUpdate!="function"||x===n.memoizedProps&&X===n.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||x===n.memoizedProps&&X===n.memoizedState||(a.flags|=1024),a.memoizedProps=c,a.memoizedState=F),m.props=c,m.state=F,m.context=z,c=Q):(typeof m.componentDidUpdate!="function"||x===n.memoizedProps&&X===n.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||x===n.memoizedProps&&X===n.memoizedState||(a.flags|=1024),c=!1)}return m=c,mc(n,a),c=(a.flags&128)!==0,m||c?(m=a.stateNode,o=c&&typeof o.getDerivedStateFromError!="function"?null:m.render(),a.flags|=1,n!==null&&c?(a.child=Yi(a,n.child,null,f),a.child=Yi(a,null,o,f)):At(n,a,o,f),a.memoizedState=m.state,n=a.child):n=_r(n,a,f),n}function B0(n,a,o,c){return Qo(),a.flags|=256,At(n,a,o,c),a.child}var Of={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nf(n){return{baseLanes:n,cachePool:Nv()}}function Af(n,a,o){return n=n!==null?n.childLanes&~o:0,a&&(n|=Cn),n}function X0(n,a,o){var c=a.pendingProps,f=!1,m=(a.flags&128)!==0,x;if((x=m)||(x=n!==null&&n.memoizedState===null?!1:(wt.current&2)!==0),x&&(f=!0,a.flags&=-129),x=(a.flags&32)!==0,a.flags&=-33,n===null){if(Ie){if(f?Wr(a):Zr(),Ie){var k=it,z;if(z=k){e:{for(z=k,k=er;z.nodeType!==8;){if(!k){k=null;break e}if(z=Hn(z.nextSibling),z===null){k=null;break e}}k=z}k!==null?(a.memoizedState={dehydrated:k,treeContext:Aa!==null?{id:gr,overflow:vr}:null,retryLane:536870912,hydrationErrors:null},z=on(18,null,null,0),z.stateNode=k,z.return=a,a.child=z,Yt=a,it=null,z=!0):z=!1}z||Da(a)}if(k=a.memoizedState,k!==null&&(k=k.dehydrated,k!==null))return ph(k)?a.lanes=32:a.lanes=536870912,null;xr(a)}return k=c.children,c=c.fallback,f?(Zr(),f=a.mode,k=gc({mode:"hidden",children:k},f),c=Na(c,f,o,null),k.return=a,c.return=a,k.sibling=c,a.child=k,f=a.child,f.memoizedState=Nf(o),f.childLanes=Af(n,x,o),a.memoizedState=Of,c):(Wr(a),zf(a,k))}if(z=n.memoizedState,z!==null&&(k=z.dehydrated,k!==null)){if(m)a.flags&256?(Wr(a),a.flags&=-257,a=Rf(n,a,o)):a.memoizedState!==null?(Zr(),a.child=n.child,a.flags|=128,a=null):(Zr(),f=c.fallback,k=a.mode,c=gc({mode:"visible",children:c.children},k),f=Na(f,k,o,null),f.flags|=2,c.return=a,f.return=a,c.sibling=f,a.child=c,Yi(a,n.child,null,o),c=a.child,c.memoizedState=Nf(o),c.childLanes=Af(n,x,o),a.memoizedState=Of,a=f);else if(Wr(a),ph(k)){if(x=k.nextSibling&&k.nextSibling.dataset,x)var Y=x.dgst;x=Y,c=Error(i(419)),c.stack="",c.digest=x,Wo({value:c,source:null,stack:null}),a=Rf(n,a,o)}else if(kt||Zo(n,a,o,!1),x=(o&n.childLanes)!==0,kt||x){if(x=We,x!==null&&(c=o&-o,c=(c&42)!==0?1:pd(c),c=(c&(x.suspendedLanes|o))!==0?0:c,c!==0&&c!==z.retryLane))throw z.retryLane=c,Ai(n,c),dn(x,n,c),j0;k.data==="$?"||Zf(),a=Rf(n,a,o)}else k.data==="$?"?(a.flags|=192,a.child=n.child,a=null):(n=z.treeContext,it=Hn(k.nextSibling),Yt=a,Ie=!0,Ra=null,er=!1,n!==null&&(Tn[kn++]=gr,Tn[kn++]=vr,Tn[kn++]=Aa,gr=n.id,vr=n.overflow,Aa=a),a=zf(a,c.children),a.flags|=4096);return a}return f?(Zr(),f=c.fallback,k=a.mode,z=n.child,Y=z.sibling,c=mr(z,{mode:"hidden",children:c.children}),c.subtreeFlags=z.subtreeFlags&65011712,Y!==null?f=mr(Y,f):(f=Na(f,k,o,null),f.flags|=2),f.return=a,c.return=a,c.sibling=f,a.child=c,c=f,f=a.child,k=n.child.memoizedState,k===null?k=Nf(o):(z=k.cachePool,z!==null?(Y=bt._currentValue,z=z.parent!==Y?{parent:Y,pool:Y}:z):z=Nv(),k={baseLanes:k.baseLanes|o,cachePool:z}),f.memoizedState=k,f.childLanes=Af(n,x,o),a.memoizedState=Of,c):(Wr(a),o=n.child,n=o.sibling,o=mr(o,{mode:"visible",children:c.children}),o.return=a,o.sibling=null,n!==null&&(x=a.deletions,x===null?(a.deletions=[n],a.flags|=16):x.push(n)),a.child=o,a.memoizedState=null,o)}function zf(n,a){return a=gc({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function gc(n,a){return n=on(22,n,null,a),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Rf(n,a,o){return Yi(a,n.child,null,o),n=zf(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function F0(n,a,o){n.lanes|=a;var c=n.alternate;c!==null&&(c.lanes|=a),Wd(n.return,a,o)}function Df(n,a,o,c,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(m.isBackwards=a,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=o,m.tailMode=f)}function P0(n,a,o){var c=a.pendingProps,f=c.revealOrder,m=c.tail;if(At(n,a,c.children,o),c=wt.current,(c&2)!==0)c=c&1|2,a.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&F0(n,o,a);else if(n.tag===19)F0(n,o,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break e;for(;n.sibling===null;){if(n.return===null||n.return===a)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}switch(J(wt,c),f){case"forwards":for(o=a.child,f=null;o!==null;)n=o.alternate,n!==null&&fc(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=a.child,a.child=null):(f=o.sibling,o.sibling=null),Df(a,!1,f,o,m);break;case"backwards":for(o=null,f=a.child,a.child=null;f!==null;){if(n=f.alternate,n!==null&&fc(n)===null){a.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}Df(a,!0,o,null,m);break;case"together":Df(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function _r(n,a,o){if(n!==null&&(a.dependencies=n.dependencies),na|=a.lanes,(o&a.childLanes)===0)if(n!==null){if(Zo(n,a,o,!1),(o&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(i(153));if(a.child!==null){for(n=a.child,o=mr(n,n.pendingProps),a.child=o,o.return=a;n.sibling!==null;)n=n.sibling,o=o.sibling=mr(n,n.pendingProps),o.return=a;o.sibling=null}return a.child}function jf(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&Wl(n)))}function US(n,a,o){switch(a.tag){case 3:de(a,a.stateNode.containerInfo),Fr(a,bt,n.memoizedState.cache),Qo();break;case 27:case 5:$e(a);break;case 4:de(a,a.stateNode.containerInfo);break;case 10:Fr(a,a.type,a.memoizedProps.value);break;case 13:var c=a.memoizedState;if(c!==null)return c.dehydrated!==null?(Wr(a),a.flags|=128,null):(o&a.child.childLanes)!==0?X0(n,a,o):(Wr(a),n=_r(n,a,o),n!==null?n.sibling:null);Wr(a);break;case 19:var f=(n.flags&128)!==0;if(c=(o&a.childLanes)!==0,c||(Zo(n,a,o,!1),c=(o&a.childLanes)!==0),f){if(c)return P0(n,a,o);a.flags|=128}if(f=a.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),J(wt,wt.current),c)break;return null;case 22:case 23:return a.lanes=0,H0(n,a,o);case 24:Fr(a,bt,n.memoizedState.cache)}return _r(n,a,o)}function V0(n,a,o){if(n!==null)if(n.memoizedProps!==a.pendingProps)kt=!0;else{if(!jf(n,o)&&(a.flags&128)===0)return kt=!1,US(n,a,o);kt=(n.flags&131072)!==0}else kt=!1,Ie&&(a.flags&1048576)!==0&&Sv(a,Ql,a.index);switch(a.lanes=0,a.tag){case 16:e:{n=a.pendingProps;var c=a.elementType,f=c._init;if(c=f(c._payload),a.type=c,typeof c=="function")Bd(c)?(n=Ha(c,n),a.tag=1,a=Y0(null,a,c,n,o)):(a.tag=0,a=Mf(null,a,c,n,o));else{if(c!=null){if(f=c.$$typeof,f===U){a.tag=11,a=U0(null,a,c,n,o);break e}else if(f===V){a.tag=14,a=L0(null,a,c,n,o);break e}}throw a=xe(c)||c,Error(i(306,a,""))}}return a;case 0:return Mf(n,a,a.type,a.pendingProps,o);case 1:return c=a.type,f=Ha(c,a.pendingProps),Y0(n,a,c,f,o);case 3:e:{if(de(a,a.stateNode.containerInfo),n===null)throw Error(i(387));c=a.pendingProps;var m=a.memoizedState;f=m.element,rf(n,a),as(a,c,null,o);var x=a.memoizedState;if(c=x.cache,Fr(a,bt,c),c!==m.cache&&Zd(a,[bt],o,!0),rs(),c=x.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:x.cache},a.updateQueue.baseState=m,a.memoizedState=m,a.flags&256){a=B0(n,a,c,o);break e}else if(c!==f){f=_n(Error(i(424)),a),Wo(f),a=B0(n,a,c,o);break e}else{switch(n=a.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(it=Hn(n.firstChild),Yt=a,Ie=!0,Ra=null,er=!0,o=k0(a,null,c,o),a.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Qo(),c===f){a=_r(n,a,o);break e}At(n,a,c,o)}a=a.child}return a;case 26:return mc(n,a),n===null?(o=Zy(a.type,null,a.pendingProps,null))?a.memoizedState=o:Ie||(o=a.type,n=a.pendingProps,c=Nc(re.current).createElement(o),c[Ut]=a,c[Pt]=n,Rt(c,o,n),Tt(c),a.stateNode=c):a.memoizedState=Zy(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return $e(a),n===null&&Ie&&(c=a.stateNode=Gy(a.type,a.pendingProps,re.current),Yt=a,er=!0,f=it,oa(a.type)?(mh=f,it=Hn(c.firstChild)):it=f),At(n,a,a.pendingProps.children,o),mc(n,a),n===null&&(a.flags|=4194304),a.child;case 5:return n===null&&Ie&&((f=c=it)&&(c=uT(c,a.type,a.pendingProps,er),c!==null?(a.stateNode=c,Yt=a,it=Hn(c.firstChild),er=!1,f=!0):f=!1),f||Da(a)),$e(a),f=a.type,m=a.pendingProps,x=n!==null?n.memoizedProps:null,c=m.children,dh(f,m)?c=null:x!==null&&dh(f,x)&&(a.flags|=32),a.memoizedState!==null&&(f=uf(n,a,MS,null,null,o),Es._currentValue=f),mc(n,a),At(n,a,c,o),a.child;case 6:return n===null&&Ie&&((n=o=it)&&(o=dT(o,a.pendingProps,er),o!==null?(a.stateNode=o,Yt=a,it=null,n=!0):n=!1),n||Da(a)),null;case 13:return X0(n,a,o);case 4:return de(a,a.stateNode.containerInfo),c=a.pendingProps,n===null?a.child=Yi(a,null,c,o):At(n,a,c,o),a.child;case 11:return U0(n,a,a.type,a.pendingProps,o);case 7:return At(n,a,a.pendingProps,o),a.child;case 8:return At(n,a,a.pendingProps.children,o),a.child;case 12:return At(n,a,a.pendingProps.children,o),a.child;case 10:return c=a.pendingProps,Fr(a,a.type,c.value),At(n,a,c.children,o),a.child;case 9:return f=a.type._context,c=a.pendingProps.children,Ua(a),f=Lt(f),c=c(f),a.flags|=1,At(n,a,c,o),a.child;case 14:return L0(n,a,a.type,a.pendingProps,o);case 15:return $0(n,a,a.type,a.pendingProps,o);case 19:return P0(n,a,o);case 31:return c=a.pendingProps,o=a.mode,c={mode:c.mode,children:c.children},n===null?(o=gc(c,o),o.ref=a.ref,a.child=o,o.return=a,a=o):(o=mr(n.child,c),o.ref=a.ref,a.child=o,o.return=a,a=o),a;case 22:return H0(n,a,o);case 24:return Ua(a),c=Lt(bt),n===null?(f=ef(),f===null&&(f=We,m=Kd(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),a.memoizedState={parent:c,cache:f},nf(a),Fr(a,bt,f)):((n.lanes&o)!==0&&(rf(n,a),as(a,null,null,o),rs()),f=n.memoizedState,m=a.memoizedState,f.parent!==c?(f={parent:c,cache:c},a.memoizedState=f,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=f),Fr(a,bt,c)):(c=m.cache,Fr(a,bt,c),c!==f.cache&&Zd(a,[bt],o,!0))),At(n,a,a.pendingProps.children,o),a.child;case 29:throw a.pendingProps}throw Error(i(156,a.tag))}function Sr(n){n.flags|=4}function G0(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!nb(a)){if(a=En.current,a!==null&&((Ue&4194048)===Ue?tr!==null:(Ue&62914560)!==Ue&&(Ue&536870912)===0||a!==tr))throw ts=tf,Av;n.flags|=8192}}function vc(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?Eg():536870912,n.lanes|=a,Pi|=a)}function ds(n,a){if(!Ie)switch(n.tailMode){case"hidden":a=n.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function rt(n){var a=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(a)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&65011712,c|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=o,a}function LS(n,a,o){var c=a.pendingProps;switch(Vd(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(a),null;case 1:return rt(a),null;case 3:return o=a.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),a.memoizedState.cache!==c&&(a.flags|=2048),br(bt),ke(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(Go(a)?Sr(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,Ev())),rt(a),null;case 26:return o=a.memoizedState,n===null?(Sr(a),o!==null?(rt(a),G0(a,o)):(rt(a),a.flags&=-16777217)):o?o!==n.memoizedState?(Sr(a),rt(a),G0(a,o)):(rt(a),a.flags&=-16777217):(n.memoizedProps!==c&&Sr(a),rt(a),a.flags&=-16777217),null;case 27:qt(a),o=re.current;var f=a.type;if(n!==null&&a.stateNode!=null)n.memoizedProps!==c&&Sr(a);else{if(!c){if(a.stateNode===null)throw Error(i(166));return rt(a),null}n=te.current,Go(a)?Tv(a):(n=Gy(f,c,o),a.stateNode=n,Sr(a))}return rt(a),null;case 5:if(qt(a),o=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==c&&Sr(a);else{if(!c){if(a.stateNode===null)throw Error(i(166));return rt(a),null}if(n=te.current,Go(a))Tv(a);else{switch(f=Nc(re.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof c.is=="string"?f.createElement("select",{is:c.is}):f.createElement("select"),c.multiple?n.multiple=!0:c.size&&(n.size=c.size);break;default:n=typeof c.is=="string"?f.createElement(o,{is:c.is}):f.createElement(o)}}n[Ut]=a,n[Pt]=c;e:for(f=a.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===a)break e;for(;f.sibling===null;){if(f.return===null||f.return===a)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}a.stateNode=n;e:switch(Rt(n,o,c),o){case"button":case"input":case"select":case"textarea":n=!!c.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Sr(a)}}return rt(a),a.flags&=-16777217,null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==c&&Sr(a);else{if(typeof c!="string"&&a.stateNode===null)throw Error(i(166));if(n=re.current,Go(a)){if(n=a.stateNode,o=a.memoizedProps,c=null,f=Yt,f!==null)switch(f.tag){case 27:case 5:c=f.memoizedProps}n[Ut]=a,n=!!(n.nodeValue===o||c!==null&&c.suppressHydrationWarning===!0||qy(n.nodeValue,o)),n||Da(a)}else n=Nc(n).createTextNode(c),n[Ut]=a,a.stateNode=n}return rt(a),null;case 13:if(c=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=Go(a),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(i(318));if(f=a.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[Ut]=a}else Qo(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;rt(a),f=!1}else f=Ev(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return a.flags&256?(xr(a),a):(xr(a),null)}if(xr(a),(a.flags&128)!==0)return a.lanes=o,a;if(o=c!==null,n=n!==null&&n.memoizedState!==null,o){c=a.child,f=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(f=c.alternate.memoizedState.cachePool.pool);var m=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==f&&(c.flags|=2048)}return o!==n&&o&&(a.child.flags|=8192),vc(a,a.updateQueue),rt(a),null;case 4:return ke(),n===null&&oh(a.stateNode.containerInfo),rt(a),null;case 10:return br(a.type),rt(a),null;case 19:if(W(wt),f=a.memoizedState,f===null)return rt(a),null;if(c=(a.flags&128)!==0,m=f.rendering,m===null)if(c)ds(f,!1);else{if(ot!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(m=fc(n),m!==null){for(a.flags|=128,ds(f,!1),n=m.updateQueue,a.updateQueue=n,vc(a,n),a.subtreeFlags=0,n=o,o=a.child;o!==null;)_v(o,n),o=o.sibling;return J(wt,wt.current&1|2),a.child}n=n.sibling}f.tail!==null&&Jn()>wc&&(a.flags|=128,c=!0,ds(f,!1),a.lanes=4194304)}else{if(!c)if(n=fc(m),n!==null){if(a.flags|=128,c=!0,n=n.updateQueue,a.updateQueue=n,vc(a,n),ds(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Ie)return rt(a),null}else 2*Jn()-f.renderingStartTime>wc&&o!==536870912&&(a.flags|=128,c=!0,ds(f,!1),a.lanes=4194304);f.isBackwards?(m.sibling=a.child,a.child=m):(n=f.last,n!==null?n.sibling=m:a.child=m,f.last=m)}return f.tail!==null?(a=f.tail,f.rendering=a,f.tail=a.sibling,f.renderingStartTime=Jn(),a.sibling=null,n=wt.current,J(wt,c?n&1|2:n&1),a):(rt(a),null);case 22:case 23:return xr(a),lf(),c=a.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(a.flags|=8192):c&&(a.flags|=8192),c?(o&536870912)!==0&&(a.flags&128)===0&&(rt(a),a.subtreeFlags&6&&(a.flags|=8192)):rt(a),o=a.updateQueue,o!==null&&vc(a,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==o&&(a.flags|=2048),n!==null&&W(La),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),a.memoizedState.cache!==o&&(a.flags|=2048),br(bt),rt(a),null;case 25:return null;case 30:return null}throw Error(i(156,a.tag))}function $S(n,a){switch(Vd(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return br(bt),ke(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return qt(a),null;case 13:if(xr(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(i(340));Qo()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return W(wt),null;case 4:return ke(),null;case 10:return br(a.type),null;case 22:case 23:return xr(a),lf(),n!==null&&W(La),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return br(bt),null;case 25:return null;default:return null}}function Q0(n,a){switch(Vd(a),a.tag){case 3:br(bt),ke();break;case 26:case 27:case 5:qt(a);break;case 4:ke();break;case 13:xr(a);break;case 19:W(wt);break;case 10:br(a.type);break;case 22:case 23:xr(a),lf(),n!==null&&W(La);break;case 24:br(bt)}}function fs(n,a){try{var o=a.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&n)===n){c=void 0;var m=o.create,x=o.inst;c=m(),x.destroy=c}o=o.next}while(o!==f)}}catch(k){Ve(a,a.return,k)}}function Kr(n,a,o){try{var c=a.updateQueue,f=c!==null?c.lastEffect:null;if(f!==null){var m=f.next;c=m;do{if((c.tag&n)===n){var x=c.inst,k=x.destroy;if(k!==void 0){x.destroy=void 0,f=a;var z=o,Y=k;try{Y()}catch(Q){Ve(f,z,Q)}}}c=c.next}while(c!==m)}}catch(Q){Ve(a,a.return,Q)}}function W0(n){var a=n.updateQueue;if(a!==null){var o=n.stateNode;try{Lv(a,o)}catch(c){Ve(n,n.return,c)}}}function Z0(n,a,o){o.props=Ha(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(c){Ve(n,a,c)}}function hs(n,a){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof o=="function"?n.refCleanup=o(c):o.current=c}}catch(f){Ve(n,a,f)}}function nr(n,a){var o=n.ref,c=n.refCleanup;if(o!==null)if(typeof c=="function")try{c()}catch(f){Ve(n,a,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Ve(n,a,f)}else o.current=null}function K0(n){var a=n.type,o=n.memoizedProps,c=n.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":o.autoFocus&&c.focus();break e;case"img":o.src?c.src=o.src:o.srcSet&&(c.srcset=o.srcSet)}}catch(f){Ve(n,n.return,f)}}function Uf(n,a,o){try{var c=n.stateNode;iT(c,n.type,o,a),c[Pt]=a}catch(f){Ve(n,n.return,f)}}function J0(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&oa(n.type)||n.tag===4}function Lf(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||J0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&oa(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function $f(n,a,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,a):(a=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,a.appendChild(n),o=o._reactRootContainer,o!=null||a.onclick!==null||(a.onclick=Oc));else if(c!==4&&(c===27&&oa(n.type)&&(o=n.stateNode,a=null),n=n.child,n!==null))for($f(n,a,o),n=n.sibling;n!==null;)$f(n,a,o),n=n.sibling}function yc(n,a,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?o.insertBefore(n,a):o.appendChild(n);else if(c!==4&&(c===27&&oa(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(yc(n,a,o),n=n.sibling;n!==null;)yc(n,a,o),n=n.sibling}function ey(n){var a=n.stateNode,o=n.memoizedProps;try{for(var c=n.type,f=a.attributes;f.length;)a.removeAttributeNode(f[0]);Rt(a,c,o),a[Ut]=n,a[Pt]=o}catch(m){Ve(n,n.return,m)}}var Tr=!1,ut=!1,Hf=!1,ty=typeof WeakSet=="function"?WeakSet:Set,Et=null;function HS(n,a){if(n=n.containerInfo,ch=Uc,n=fv(n),Ud(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var x=0,k=-1,z=-1,Y=0,Q=0,K=n,X=null;t:for(;;){for(var F;K!==o||f!==0&&K.nodeType!==3||(k=x+f),K!==m||c!==0&&K.nodeType!==3||(z=x+c),K.nodeType===3&&(x+=K.nodeValue.length),(F=K.firstChild)!==null;)X=K,K=F;for(;;){if(K===n)break t;if(X===o&&++Y===f&&(k=x),X===m&&++Q===c&&(z=x),(F=K.nextSibling)!==null)break;K=X,X=K.parentNode}K=F}o=k===-1||z===-1?null:{start:k,end:z}}else o=null}o=o||{start:0,end:0}}else o=null;for(uh={focusedElem:n,selectionRange:o},Uc=!1,Et=a;Et!==null;)if(a=Et,n=a.child,(a.subtreeFlags&1024)!==0&&n!==null)n.return=a,Et=n;else for(;Et!==null;){switch(a=Et,m=a.alternate,n=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,o=a,f=m.memoizedProps,m=m.memoizedState,c=o.stateNode;try{var ye=Ha(o.type,f,o.elementType===o.type);n=c.getSnapshotBeforeUpdate(ye,m),c.__reactInternalSnapshotBeforeUpdate=n}catch(me){Ve(o,o.return,me)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,o=n.nodeType,o===9)hh(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":hh(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=a.sibling,n!==null){n.return=a.return,Et=n;break}Et=a.return}}function ny(n,a,o){var c=o.flags;switch(o.tag){case 0:case 11:case 15:Jr(n,o),c&4&&fs(5,o);break;case 1:if(Jr(n,o),c&4)if(n=o.stateNode,a===null)try{n.componentDidMount()}catch(x){Ve(o,o.return,x)}else{var f=Ha(o.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(f,a,n.__reactInternalSnapshotBeforeUpdate)}catch(x){Ve(o,o.return,x)}}c&64&&W0(o),c&512&&hs(o,o.return);break;case 3:if(Jr(n,o),c&64&&(n=o.updateQueue,n!==null)){if(a=null,o.child!==null)switch(o.child.tag){case 27:case 5:a=o.child.stateNode;break;case 1:a=o.child.stateNode}try{Lv(n,a)}catch(x){Ve(o,o.return,x)}}break;case 27:a===null&&c&4&&ey(o);case 26:case 5:Jr(n,o),a===null&&c&4&&K0(o),c&512&&hs(o,o.return);break;case 12:Jr(n,o);break;case 13:Jr(n,o),c&4&&iy(n,o),c&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=GS.bind(null,o),fT(n,o))));break;case 22:if(c=o.memoizedState!==null||Tr,!c){a=a!==null&&a.memoizedState!==null||ut,f=Tr;var m=ut;Tr=c,(ut=a)&&!m?ea(n,o,(o.subtreeFlags&8772)!==0):Jr(n,o),Tr=f,ut=m}break;case 30:break;default:Jr(n,o)}}function ry(n){var a=n.alternate;a!==null&&(n.alternate=null,ry(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&vd(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var et=null,Qt=!1;function kr(n,a,o){for(o=o.child;o!==null;)ay(n,a,o),o=o.sibling}function ay(n,a,o){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Do,o)}catch{}switch(o.tag){case 26:ut||nr(o,a),kr(n,a,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:ut||nr(o,a);var c=et,f=Qt;oa(o.type)&&(et=o.stateNode,Qt=!1),kr(n,a,o),_s(o.stateNode),et=c,Qt=f;break;case 5:ut||nr(o,a);case 6:if(c=et,f=Qt,et=null,kr(n,a,o),et=c,Qt=f,et!==null)if(Qt)try{(et.nodeType===9?et.body:et.nodeName==="HTML"?et.ownerDocument.body:et).removeChild(o.stateNode)}catch(m){Ve(o,a,m)}else try{et.removeChild(o.stateNode)}catch(m){Ve(o,a,m)}break;case 18:et!==null&&(Qt?(n=et,Py(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),Ns(n)):Py(et,o.stateNode));break;case 4:c=et,f=Qt,et=o.stateNode.containerInfo,Qt=!0,kr(n,a,o),et=c,Qt=f;break;case 0:case 11:case 14:case 15:ut||Kr(2,o,a),ut||Kr(4,o,a),kr(n,a,o);break;case 1:ut||(nr(o,a),c=o.stateNode,typeof c.componentWillUnmount=="function"&&Z0(o,a,c)),kr(n,a,o);break;case 21:kr(n,a,o);break;case 22:ut=(c=ut)||o.memoizedState!==null,kr(n,a,o),ut=c;break;default:kr(n,a,o)}}function iy(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Ns(n)}catch(o){Ve(a,a.return,o)}}function IS(n){switch(n.tag){case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new ty),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new ty),a;default:throw Error(i(435,n.tag))}}function If(n,a){var o=IS(n);a.forEach(function(c){var f=QS.bind(null,n,c);o.has(c)||(o.add(c),c.then(f,f))})}function sn(n,a){var o=a.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c],m=n,x=a,k=x;e:for(;k!==null;){switch(k.tag){case 27:if(oa(k.type)){et=k.stateNode,Qt=!1;break e}break;case 5:et=k.stateNode,Qt=!1;break e;case 3:case 4:et=k.stateNode.containerInfo,Qt=!0;break e}k=k.return}if(et===null)throw Error(i(160));ay(m,x,f),et=null,Qt=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)oy(a,n),a=a.sibling}var $n=null;function oy(n,a){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:sn(a,n),ln(n),c&4&&(Kr(3,n,n.return),fs(3,n),Kr(5,n,n.return));break;case 1:sn(a,n),ln(n),c&512&&(ut||o===null||nr(o,o.return)),c&64&&Tr&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?c:o.concat(c))));break;case 26:var f=$n;if(sn(a,n),ln(n),c&512&&(ut||o===null||nr(o,o.return)),c&4){var m=o!==null?o.memoizedState:null;if(c=n.memoizedState,o===null)if(c===null)if(n.stateNode===null){e:{c=n.type,o=n.memoizedProps,f=f.ownerDocument||f;t:switch(c){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Lo]||m[Ut]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(c),f.head.insertBefore(m,f.querySelector("head > title"))),Rt(m,c,o),m[Ut]=n,Tt(m),c=m;break e;case"link":var x=eb("link","href",f).get(c+(o.href||""));if(x){for(var k=0;k<x.length;k++)if(m=x[k],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){x.splice(k,1);break t}}m=f.createElement(c),Rt(m,c,o),f.head.appendChild(m);break;case"meta":if(x=eb("meta","content",f).get(c+(o.content||""))){for(k=0;k<x.length;k++)if(m=x[k],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){x.splice(k,1);break t}}m=f.createElement(c),Rt(m,c,o),f.head.appendChild(m);break;default:throw Error(i(468,c))}m[Ut]=n,Tt(m),c=m}n.stateNode=c}else tb(f,n.type,n.stateNode);else n.stateNode=Jy(f,c,n.memoizedProps);else m!==c?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,c===null?tb(f,n.type,n.stateNode):Jy(f,c,n.memoizedProps)):c===null&&n.stateNode!==null&&Uf(n,n.memoizedProps,o.memoizedProps)}break;case 27:sn(a,n),ln(n),c&512&&(ut||o===null||nr(o,o.return)),o!==null&&c&4&&Uf(n,n.memoizedProps,o.memoizedProps);break;case 5:if(sn(a,n),ln(n),c&512&&(ut||o===null||nr(o,o.return)),n.flags&32){f=n.stateNode;try{Ti(f,"")}catch(F){Ve(n,n.return,F)}}c&4&&n.stateNode!=null&&(f=n.memoizedProps,Uf(n,f,o!==null?o.memoizedProps:f)),c&1024&&(Hf=!0);break;case 6:if(sn(a,n),ln(n),c&4){if(n.stateNode===null)throw Error(i(162));c=n.memoizedProps,o=n.stateNode;try{o.nodeValue=c}catch(F){Ve(n,n.return,F)}}break;case 3:if(Rc=null,f=$n,$n=Ac(a.containerInfo),sn(a,n),$n=f,ln(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Ns(a.containerInfo)}catch(F){Ve(n,n.return,F)}Hf&&(Hf=!1,sy(n));break;case 4:c=$n,$n=Ac(n.stateNode.containerInfo),sn(a,n),ln(n),$n=c;break;case 12:sn(a,n),ln(n);break;case 13:sn(a,n),ln(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Pf=Jn()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,If(n,c)));break;case 22:f=n.memoizedState!==null;var z=o!==null&&o.memoizedState!==null,Y=Tr,Q=ut;if(Tr=Y||f,ut=Q||z,sn(a,n),ut=Q,Tr=Y,ln(n),c&8192)e:for(a=n.stateNode,a._visibility=f?a._visibility&-2:a._visibility|1,f&&(o===null||z||Tr||ut||Ia(n)),o=null,a=n;;){if(a.tag===5||a.tag===26){if(o===null){z=o=a;try{if(m=z.stateNode,f)x=m.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{k=z.stateNode;var K=z.memoizedProps.style,X=K!=null&&K.hasOwnProperty("display")?K.display:null;k.style.display=X==null||typeof X=="boolean"?"":(""+X).trim()}}catch(F){Ve(z,z.return,F)}}}else if(a.tag===6){if(o===null){z=a;try{z.stateNode.nodeValue=f?"":z.memoizedProps}catch(F){Ve(z,z.return,F)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break e;for(;a.sibling===null;){if(a.return===null||a.return===n)break e;o===a&&(o=null),a=a.return}o===a&&(o=null),a.sibling.return=a.return,a=a.sibling}c&4&&(c=n.updateQueue,c!==null&&(o=c.retryQueue,o!==null&&(c.retryQueue=null,If(n,o))));break;case 19:sn(a,n),ln(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,If(n,c)));break;case 30:break;case 21:break;default:sn(a,n),ln(n)}}function ln(n){var a=n.flags;if(a&2){try{for(var o,c=n.return;c!==null;){if(J0(c)){o=c;break}c=c.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var f=o.stateNode,m=Lf(n);yc(n,m,f);break;case 5:var x=o.stateNode;o.flags&32&&(Ti(x,""),o.flags&=-33);var k=Lf(n);yc(n,k,x);break;case 3:case 4:var z=o.stateNode.containerInfo,Y=Lf(n);$f(n,Y,z);break;default:throw Error(i(161))}}catch(Q){Ve(n,n.return,Q)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function sy(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;sy(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function Jr(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)ny(n,a.alternate,a),a=a.sibling}function Ia(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:Kr(4,a,a.return),Ia(a);break;case 1:nr(a,a.return);var o=a.stateNode;typeof o.componentWillUnmount=="function"&&Z0(a,a.return,o),Ia(a);break;case 27:_s(a.stateNode);case 26:case 5:nr(a,a.return),Ia(a);break;case 22:a.memoizedState===null&&Ia(a);break;case 30:Ia(a);break;default:Ia(a)}n=n.sibling}}function ea(n,a,o){for(o=o&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var c=a.alternate,f=n,m=a,x=m.flags;switch(m.tag){case 0:case 11:case 15:ea(f,m,o),fs(4,m);break;case 1:if(ea(f,m,o),c=m,f=c.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(Y){Ve(c,c.return,Y)}if(c=m,f=c.updateQueue,f!==null){var k=c.stateNode;try{var z=f.shared.hiddenCallbacks;if(z!==null)for(f.shared.hiddenCallbacks=null,f=0;f<z.length;f++)Uv(z[f],k)}catch(Y){Ve(c,c.return,Y)}}o&&x&64&&W0(m),hs(m,m.return);break;case 27:ey(m);case 26:case 5:ea(f,m,o),o&&c===null&&x&4&&K0(m),hs(m,m.return);break;case 12:ea(f,m,o);break;case 13:ea(f,m,o),o&&x&4&&iy(f,m);break;case 22:m.memoizedState===null&&ea(f,m,o),hs(m,m.return);break;case 30:break;default:ea(f,m,o)}a=a.sibling}}function qf(n,a){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&Ko(o))}function Yf(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&Ko(n))}function rr(n,a,o,c){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)ly(n,a,o,c),a=a.sibling}function ly(n,a,o,c){var f=a.flags;switch(a.tag){case 0:case 11:case 15:rr(n,a,o,c),f&2048&&fs(9,a);break;case 1:rr(n,a,o,c);break;case 3:rr(n,a,o,c),f&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&Ko(n)));break;case 12:if(f&2048){rr(n,a,o,c),n=a.stateNode;try{var m=a.memoizedProps,x=m.id,k=m.onPostCommit;typeof k=="function"&&k(x,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(z){Ve(a,a.return,z)}}else rr(n,a,o,c);break;case 13:rr(n,a,o,c);break;case 23:break;case 22:m=a.stateNode,x=a.alternate,a.memoizedState!==null?m._visibility&2?rr(n,a,o,c):ps(n,a):m._visibility&2?rr(n,a,o,c):(m._visibility|=2,Bi(n,a,o,c,(a.subtreeFlags&10256)!==0)),f&2048&&qf(x,a);break;case 24:rr(n,a,o,c),f&2048&&Yf(a.alternate,a);break;default:rr(n,a,o,c)}}function Bi(n,a,o,c,f){for(f=f&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var m=n,x=a,k=o,z=c,Y=x.flags;switch(x.tag){case 0:case 11:case 15:Bi(m,x,k,z,f),fs(8,x);break;case 23:break;case 22:var Q=x.stateNode;x.memoizedState!==null?Q._visibility&2?Bi(m,x,k,z,f):ps(m,x):(Q._visibility|=2,Bi(m,x,k,z,f)),f&&Y&2048&&qf(x.alternate,x);break;case 24:Bi(m,x,k,z,f),f&&Y&2048&&Yf(x.alternate,x);break;default:Bi(m,x,k,z,f)}a=a.sibling}}function ps(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var o=n,c=a,f=c.flags;switch(c.tag){case 22:ps(o,c),f&2048&&qf(c.alternate,c);break;case 24:ps(o,c),f&2048&&Yf(c.alternate,c);break;default:ps(o,c)}a=a.sibling}}var ms=8192;function Xi(n){if(n.subtreeFlags&ms)for(n=n.child;n!==null;)cy(n),n=n.sibling}function cy(n){switch(n.tag){case 26:Xi(n),n.flags&ms&&n.memoizedState!==null&&kT($n,n.memoizedState,n.memoizedProps);break;case 5:Xi(n);break;case 3:case 4:var a=$n;$n=Ac(n.stateNode.containerInfo),Xi(n),$n=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=ms,ms=16777216,Xi(n),ms=a):Xi(n));break;default:Xi(n)}}function uy(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function gs(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var c=a[o];Et=c,fy(c,n)}uy(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)dy(n),n=n.sibling}function dy(n){switch(n.tag){case 0:case 11:case 15:gs(n),n.flags&2048&&Kr(9,n,n.return);break;case 3:gs(n);break;case 12:gs(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&2&&(n.return===null||n.return.tag!==13)?(a._visibility&=-3,bc(n)):gs(n);break;default:gs(n)}}function bc(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var c=a[o];Et=c,fy(c,n)}uy(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:Kr(8,a,a.return),bc(a);break;case 22:o=a.stateNode,o._visibility&2&&(o._visibility&=-3,bc(a));break;default:bc(a)}n=n.sibling}}function fy(n,a){for(;Et!==null;){var o=Et;switch(o.tag){case 0:case 11:case 15:Kr(8,o,a);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var c=o.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Ko(o.memoizedState.cache)}if(c=o.child,c!==null)c.return=o,Et=c;else e:for(o=n;Et!==null;){c=Et;var f=c.sibling,m=c.return;if(ry(c),c===o){Et=null;break e}if(f!==null){f.return=m,Et=f;break e}Et=m}}}var qS={getCacheForType:function(n){var a=Lt(bt),o=a.data.get(n);return o===void 0&&(o=n(),a.data.set(n,o)),o}},YS=typeof WeakMap=="function"?WeakMap:Map,Ye=0,We=null,ze=null,Ue=0,Be=0,cn=null,ta=!1,Fi=!1,Bf=!1,Er=0,ot=0,na=0,qa=0,Xf=0,Cn=0,Pi=0,vs=null,Wt=null,Ff=!1,Pf=0,wc=1/0,xc=null,ra=null,zt=0,aa=null,Vi=null,Gi=0,Vf=0,Gf=null,hy=null,ys=0,Qf=null;function un(){if((Ye&2)!==0&&Ue!==0)return Ue&-Ue;if(E.T!==null){var n=ji;return n!==0?n:nh()}return Og()}function py(){Cn===0&&(Cn=(Ue&536870912)===0||Ie?kg():536870912);var n=En.current;return n!==null&&(n.flags|=32),Cn}function dn(n,a,o){(n===We&&(Be===2||Be===9)||n.cancelPendingCommit!==null)&&(Qi(n,0),ia(n,Ue,Cn,!1)),Uo(n,o),((Ye&2)===0||n!==We)&&(n===We&&((Ye&2)===0&&(qa|=o),ot===4&&ia(n,Ue,Cn,!1)),ar(n))}function my(n,a,o){if((Ye&6)!==0)throw Error(i(327));var c=!o&&(a&124)===0&&(a&n.expiredLanes)===0||jo(n,a),f=c?FS(n,a):Kf(n,a,!0),m=c;do{if(f===0){Fi&&!c&&ia(n,a,0,!1);break}else{if(o=n.current.alternate,m&&!BS(o)){f=Kf(n,a,!1),m=!1;continue}if(f===2){if(m=a,n.errorRecoveryDisabledLanes&m)var x=0;else x=n.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){a=x;e:{var k=n;f=vs;var z=k.current.memoizedState.isDehydrated;if(z&&(Qi(k,x).flags|=256),x=Kf(k,x,!1),x!==2){if(Bf&&!z){k.errorRecoveryDisabledLanes|=m,qa|=m,f=4;break e}m=Wt,Wt=f,m!==null&&(Wt===null?Wt=m:Wt.push.apply(Wt,m))}f=x}if(m=!1,f!==2)continue}}if(f===1){Qi(n,0),ia(n,a,0,!0);break}e:{switch(c=n,m=f,m){case 0:case 1:throw Error(i(345));case 4:if((a&4194048)!==a)break;case 6:ia(c,a,Cn,!ta);break e;case 2:Wt=null;break;case 3:case 5:break;default:throw Error(i(329))}if((a&62914560)===a&&(f=Pf+300-Jn(),10<f)){if(ia(c,a,Cn,!ta),zl(c,0,!0)!==0)break e;c.timeoutHandle=Xy(gy.bind(null,c,o,Wt,xc,Ff,a,Cn,qa,Pi,ta,m,2,-0,0),f);break e}gy(c,o,Wt,xc,Ff,a,Cn,qa,Pi,ta,m,0,-0,0)}}break}while(!0);ar(n)}function gy(n,a,o,c,f,m,x,k,z,Y,Q,K,X,F){if(n.timeoutHandle=-1,K=a.subtreeFlags,(K&8192||(K&16785408)===16785408)&&(ks={stylesheets:null,count:0,unsuspend:TT},cy(a),K=ET(),K!==null)){n.cancelPendingCommit=K(Sy.bind(null,n,a,m,o,c,f,x,k,z,Q,1,X,F)),ia(n,m,x,!Y);return}Sy(n,a,m,o,c,f,x,k,z)}function BS(n){for(var a=n;;){var o=a.tag;if((o===0||o===11||o===15)&&a.flags&16384&&(o=a.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var c=0;c<o.length;c++){var f=o[c],m=f.getSnapshot;f=f.value;try{if(!an(m(),f))return!1}catch{return!1}}if(o=a.child,a.subtreeFlags&16384&&o!==null)o.return=a,a=o;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function ia(n,a,o,c){a&=~Xf,a&=~qa,n.suspendedLanes|=a,n.pingedLanes&=~a,c&&(n.warmLanes|=a),c=n.expirationTimes;for(var f=a;0<f;){var m=31-rn(f),x=1<<m;c[m]=-1,f&=~x}o!==0&&Cg(n,o,a)}function _c(){return(Ye&6)===0?(bs(0),!1):!0}function Wf(){if(ze!==null){if(Be===0)var n=ze.return;else n=ze,yr=ja=null,hf(n),qi=null,cs=0,n=ze;for(;n!==null;)Q0(n.alternate,n),n=n.return;ze=null}}function Qi(n,a){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,sT(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),Wf(),We=n,ze=o=mr(n.current,null),Ue=a,Be=0,cn=null,ta=!1,Fi=jo(n,a),Bf=!1,Pi=Cn=Xf=qa=na=ot=0,Wt=vs=null,Ff=!1,(a&8)!==0&&(a|=a&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=a;0<c;){var f=31-rn(c),m=1<<f;a|=n[f],c&=~m}return Er=a,Xl(),o}function vy(n,a){Oe=null,E.H=cc,a===es||a===Jl?(a=Dv(),Be=3):a===Av?(a=Dv(),Be=4):Be=a===j0?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,cn=a,ze===null&&(ot=1,pc(n,_n(a,n.current)))}function yy(){var n=E.H;return E.H=cc,n===null?cc:n}function by(){var n=E.A;return E.A=qS,n}function Zf(){ot=4,ta||(Ue&4194048)!==Ue&&En.current!==null||(Fi=!0),(na&134217727)===0&&(qa&134217727)===0||We===null||ia(We,Ue,Cn,!1)}function Kf(n,a,o){var c=Ye;Ye|=2;var f=yy(),m=by();(We!==n||Ue!==a)&&(xc=null,Qi(n,a)),a=!1;var x=ot;e:do try{if(Be!==0&&ze!==null){var k=ze,z=cn;switch(Be){case 8:Wf(),x=6;break e;case 3:case 2:case 9:case 6:En.current===null&&(a=!0);var Y=Be;if(Be=0,cn=null,Wi(n,k,z,Y),o&&Fi){x=0;break e}break;default:Y=Be,Be=0,cn=null,Wi(n,k,z,Y)}}XS(),x=ot;break}catch(Q){vy(n,Q)}while(!0);return a&&n.shellSuspendCounter++,yr=ja=null,Ye=c,E.H=f,E.A=m,ze===null&&(We=null,Ue=0,Xl()),x}function XS(){for(;ze!==null;)wy(ze)}function FS(n,a){var o=Ye;Ye|=2;var c=yy(),f=by();We!==n||Ue!==a?(xc=null,wc=Jn()+500,Qi(n,a)):Fi=jo(n,a);e:do try{if(Be!==0&&ze!==null){a=ze;var m=cn;t:switch(Be){case 1:Be=0,cn=null,Wi(n,a,m,1);break;case 2:case 9:if(zv(m)){Be=0,cn=null,xy(a);break}a=function(){Be!==2&&Be!==9||We!==n||(Be=7),ar(n)},m.then(a,a);break e;case 3:Be=7;break e;case 4:Be=5;break e;case 7:zv(m)?(Be=0,cn=null,xy(a)):(Be=0,cn=null,Wi(n,a,m,7));break;case 5:var x=null;switch(ze.tag){case 26:x=ze.memoizedState;case 5:case 27:var k=ze;if(!x||nb(x)){Be=0,cn=null;var z=k.sibling;if(z!==null)ze=z;else{var Y=k.return;Y!==null?(ze=Y,Sc(Y)):ze=null}break t}}Be=0,cn=null,Wi(n,a,m,5);break;case 6:Be=0,cn=null,Wi(n,a,m,6);break;case 8:Wf(),ot=6;break e;default:throw Error(i(462))}}PS();break}catch(Q){vy(n,Q)}while(!0);return yr=ja=null,E.H=c,E.A=f,Ye=o,ze!==null?0:(We=null,Ue=0,Xl(),ot)}function PS(){for(;ze!==null&&!p_();)wy(ze)}function wy(n){var a=V0(n.alternate,n,Er);n.memoizedProps=n.pendingProps,a===null?Sc(n):ze=a}function xy(n){var a=n,o=a.alternate;switch(a.tag){case 15:case 0:a=q0(o,a,a.pendingProps,a.type,void 0,Ue);break;case 11:a=q0(o,a,a.pendingProps,a.type.render,a.ref,Ue);break;case 5:hf(a);default:Q0(o,a),a=ze=_v(a,Er),a=V0(o,a,Er)}n.memoizedProps=n.pendingProps,a===null?Sc(n):ze=a}function Wi(n,a,o,c){yr=ja=null,hf(a),qi=null,cs=0;var f=a.return;try{if(jS(n,f,a,o,Ue)){ot=1,pc(n,_n(o,n.current)),ze=null;return}}catch(m){if(f!==null)throw ze=f,m;ot=1,pc(n,_n(o,n.current)),ze=null;return}a.flags&32768?(Ie||c===1?n=!0:Fi||(Ue&536870912)!==0?n=!1:(ta=n=!0,(c===2||c===9||c===3||c===6)&&(c=En.current,c!==null&&c.tag===13&&(c.flags|=16384))),_y(a,n)):Sc(a)}function Sc(n){var a=n;do{if((a.flags&32768)!==0){_y(a,ta);return}n=a.return;var o=LS(a.alternate,a,Er);if(o!==null){ze=o;return}if(a=a.sibling,a!==null){ze=a;return}ze=a=n}while(a!==null);ot===0&&(ot=5)}function _y(n,a){do{var o=$S(n.alternate,n);if(o!==null){o.flags&=32767,ze=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!a&&(n=n.sibling,n!==null)){ze=n;return}ze=n=o}while(n!==null);ot=6,ze=null}function Sy(n,a,o,c,f,m,x,k,z){n.cancelPendingCommit=null;do Tc();while(zt!==0);if((Ye&6)!==0)throw Error(i(327));if(a!==null){if(a===n.current)throw Error(i(177));if(m=a.lanes|a.childLanes,m|=qd,T_(n,o,m,x,k,z),n===We&&(ze=We=null,Ue=0),Vi=a,aa=n,Gi=o,Vf=m,Gf=f,hy=c,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,WS(Ol,function(){return My(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||c){c=E.T,E.T=null,f=N.p,N.p=2,x=Ye,Ye|=4;try{HS(n,a,o)}finally{Ye=x,N.p=f,E.T=c}}zt=1,Ty(),ky(),Ey()}}function Ty(){if(zt===1){zt=0;var n=aa,a=Vi,o=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||o){o=E.T,E.T=null;var c=N.p;N.p=2;var f=Ye;Ye|=4;try{oy(a,n);var m=uh,x=fv(n.containerInfo),k=m.focusedElem,z=m.selectionRange;if(x!==k&&k&&k.ownerDocument&&dv(k.ownerDocument.documentElement,k)){if(z!==null&&Ud(k)){var Y=z.start,Q=z.end;if(Q===void 0&&(Q=Y),"selectionStart"in k)k.selectionStart=Y,k.selectionEnd=Math.min(Q,k.value.length);else{var K=k.ownerDocument||document,X=K&&K.defaultView||window;if(X.getSelection){var F=X.getSelection(),ye=k.textContent.length,me=Math.min(z.start,ye),Pe=z.end===void 0?me:Math.min(z.end,ye);!F.extend&&me>Pe&&(x=Pe,Pe=me,me=x);var H=uv(k,me),j=uv(k,Pe);if(H&&j&&(F.rangeCount!==1||F.anchorNode!==H.node||F.anchorOffset!==H.offset||F.focusNode!==j.node||F.focusOffset!==j.offset)){var q=K.createRange();q.setStart(H.node,H.offset),F.removeAllRanges(),me>Pe?(F.addRange(q),F.extend(j.node,j.offset)):(q.setEnd(j.node,j.offset),F.addRange(q))}}}}for(K=[],F=k;F=F.parentNode;)F.nodeType===1&&K.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof k.focus=="function"&&k.focus(),k=0;k<K.length;k++){var Z=K[k];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}Uc=!!ch,uh=ch=null}finally{Ye=f,N.p=c,E.T=o}}n.current=a,zt=2}}function ky(){if(zt===2){zt=0;var n=aa,a=Vi,o=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||o){o=E.T,E.T=null;var c=N.p;N.p=2;var f=Ye;Ye|=4;try{ny(n,a.alternate,a)}finally{Ye=f,N.p=c,E.T=o}}zt=3}}function Ey(){if(zt===4||zt===3){zt=0,m_();var n=aa,a=Vi,o=Gi,c=hy;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?zt=5:(zt=0,Vi=aa=null,Cy(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(ra=null),md(o),a=a.stateNode,nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Do,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=E.T,f=N.p,N.p=2,E.T=null;try{for(var m=n.onRecoverableError,x=0;x<c.length;x++){var k=c[x];m(k.value,{componentStack:k.stack})}}finally{E.T=a,N.p=f}}(Gi&3)!==0&&Tc(),ar(n),f=n.pendingLanes,(o&4194090)!==0&&(f&42)!==0?n===Qf?ys++:(ys=0,Qf=n):ys=0,bs(0)}}function Cy(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,Ko(a)))}function Tc(n){return Ty(),ky(),Ey(),My()}function My(){if(zt!==5)return!1;var n=aa,a=Vf;Vf=0;var o=md(Gi),c=E.T,f=N.p;try{N.p=32>o?32:o,E.T=null,o=Gf,Gf=null;var m=aa,x=Gi;if(zt=0,Vi=aa=null,Gi=0,(Ye&6)!==0)throw Error(i(331));var k=Ye;if(Ye|=4,dy(m.current),ly(m,m.current,x,o),Ye=k,bs(0,!1),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Do,m)}catch{}return!0}finally{N.p=f,E.T=c,Cy(n,a)}}function Oy(n,a,o){a=_n(o,a),a=Cf(n.stateNode,a,2),n=Gr(n,a,2),n!==null&&(Uo(n,2),ar(n))}function Ve(n,a,o){if(n.tag===3)Oy(n,n,o);else for(;a!==null;){if(a.tag===3){Oy(a,n,o);break}else if(a.tag===1){var c=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ra===null||!ra.has(c))){n=_n(o,n),o=R0(2),c=Gr(a,o,2),c!==null&&(D0(o,c,a,n),Uo(c,2),ar(c));break}}a=a.return}}function Jf(n,a,o){var c=n.pingCache;if(c===null){c=n.pingCache=new YS;var f=new Set;c.set(a,f)}else f=c.get(a),f===void 0&&(f=new Set,c.set(a,f));f.has(o)||(Bf=!0,f.add(o),n=VS.bind(null,n,a,o),a.then(n,n))}function VS(n,a,o){var c=n.pingCache;c!==null&&c.delete(a),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,We===n&&(Ue&o)===o&&(ot===4||ot===3&&(Ue&62914560)===Ue&&300>Jn()-Pf?(Ye&2)===0&&Qi(n,0):Xf|=o,Pi===Ue&&(Pi=0)),ar(n)}function Ny(n,a){a===0&&(a=Eg()),n=Ai(n,a),n!==null&&(Uo(n,a),ar(n))}function GS(n){var a=n.memoizedState,o=0;a!==null&&(o=a.retryLane),Ny(n,o)}function QS(n,a){var o=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(a),Ny(n,o)}function WS(n,a){return qr(n,a)}var kc=null,Zi=null,eh=!1,Ec=!1,th=!1,Ya=0;function ar(n){n!==Zi&&n.next===null&&(Zi===null?kc=Zi=n:Zi=Zi.next=n),Ec=!0,eh||(eh=!0,KS())}function bs(n,a){if(!th&&Ec){th=!0;do for(var o=!1,c=kc;c!==null;){if(n!==0){var f=c.pendingLanes;if(f===0)var m=0;else{var x=c.suspendedLanes,k=c.pingedLanes;m=(1<<31-rn(42|n)+1)-1,m&=f&~(x&~k),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,Dy(c,m))}else m=Ue,m=zl(c,c===We?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||jo(c,m)||(o=!0,Dy(c,m));c=c.next}while(o);th=!1}}function ZS(){Ay()}function Ay(){Ec=eh=!1;var n=0;Ya!==0&&(oT()&&(n=Ya),Ya=0);for(var a=Jn(),o=null,c=kc;c!==null;){var f=c.next,m=zy(c,a);m===0?(c.next=null,o===null?kc=f:o.next=f,f===null&&(Zi=o)):(o=c,(n!==0||(m&3)!==0)&&(Ec=!0)),c=f}bs(n)}function zy(n,a){for(var o=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var x=31-rn(m),k=1<<x,z=f[x];z===-1?((k&o)===0||(k&c)!==0)&&(f[x]=S_(k,a)):z<=a&&(n.expiredLanes|=k),m&=~k}if(a=We,o=Ue,o=zl(n,n===a?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,o===0||n===a&&(Be===2||Be===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&gi(c),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||jo(n,o)){if(a=o&-o,a===n.callbackPriority)return a;switch(c!==null&&gi(c),md(o)){case 2:case 8:o=Sg;break;case 32:o=Ol;break;case 268435456:o=Tg;break;default:o=Ol}return c=Ry.bind(null,n),o=qr(o,c),n.callbackPriority=a,n.callbackNode=o,a}return c!==null&&c!==null&&gi(c),n.callbackPriority=2,n.callbackNode=null,2}function Ry(n,a){if(zt!==0&&zt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(Tc()&&n.callbackNode!==o)return null;var c=Ue;return c=zl(n,n===We?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:(my(n,c,a),zy(n,Jn()),n.callbackNode!=null&&n.callbackNode===o?Ry.bind(null,n):null)}function Dy(n,a){if(Tc())return null;my(n,a,!0)}function KS(){lT(function(){(Ye&6)!==0?qr(_g,ZS):Ay()})}function nh(){return Ya===0&&(Ya=kg()),Ya}function jy(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ll(""+n)}function Uy(n,a){var o=a.ownerDocument.createElement("input");return o.name=a.name,o.value=a.value,n.id&&o.setAttribute("form",n.id),a.parentNode.insertBefore(o,a),n=new FormData(n),o.parentNode.removeChild(o),n}function JS(n,a,o,c,f){if(a==="submit"&&o&&o.stateNode===f){var m=jy((f[Pt]||null).action),x=c.submitter;x&&(a=(a=x[Pt]||null)?jy(a.formAction):x.getAttribute("formAction"),a!==null&&(m=a,x=null));var k=new ql("action","action",null,c,f);n.push({event:k,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Ya!==0){var z=x?Uy(f,x):new FormData(f);_f(o,{pending:!0,data:z,method:f.method,action:m},null,z)}}else typeof m=="function"&&(k.preventDefault(),z=x?Uy(f,x):new FormData(f),_f(o,{pending:!0,data:z,method:f.method,action:m},m,z))},currentTarget:f}]})}}for(var rh=0;rh<Id.length;rh++){var ah=Id[rh],eT=ah.toLowerCase(),tT=ah[0].toUpperCase()+ah.slice(1);Ln(eT,"on"+tT)}Ln(mv,"onAnimationEnd"),Ln(gv,"onAnimationIteration"),Ln(vv,"onAnimationStart"),Ln("dblclick","onDoubleClick"),Ln("focusin","onFocus"),Ln("focusout","onBlur"),Ln(yS,"onTransitionRun"),Ln(bS,"onTransitionStart"),Ln(wS,"onTransitionCancel"),Ln(yv,"onTransitionEnd"),xi("onMouseEnter",["mouseout","mouseover"]),xi("onMouseLeave",["mouseout","mouseover"]),xi("onPointerEnter",["pointerout","pointerover"]),xi("onPointerLeave",["pointerout","pointerover"]),Ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ws="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ws));function Ly(n,a){a=(a&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],f=c.event;c=c.listeners;e:{var m=void 0;if(a)for(var x=c.length-1;0<=x;x--){var k=c[x],z=k.instance,Y=k.currentTarget;if(k=k.listener,z!==m&&f.isPropagationStopped())break e;m=k,f.currentTarget=Y;try{m(f)}catch(Q){hc(Q)}f.currentTarget=null,m=z}else for(x=0;x<c.length;x++){if(k=c[x],z=k.instance,Y=k.currentTarget,k=k.listener,z!==m&&f.isPropagationStopped())break e;m=k,f.currentTarget=Y;try{m(f)}catch(Q){hc(Q)}f.currentTarget=null,m=z}}}}function Re(n,a){var o=a[gd];o===void 0&&(o=a[gd]=new Set);var c=n+"__bubble";o.has(c)||($y(a,n,2,!1),o.add(c))}function ih(n,a,o){var c=0;a&&(c|=4),$y(o,n,c,a)}var Cc="_reactListening"+Math.random().toString(36).slice(2);function oh(n){if(!n[Cc]){n[Cc]=!0,Ag.forEach(function(o){o!=="selectionchange"&&(nT.has(o)||ih(o,!1,n),ih(o,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[Cc]||(a[Cc]=!0,ih("selectionchange",!1,a))}}function $y(n,a,o,c){switch(lb(a)){case 2:var f=OT;break;case 8:f=NT;break;default:f=wh}o=f.bind(null,a,o,n),f=void 0,!Cd||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(a,o,{capture:!0,passive:f}):n.addEventListener(a,o,!0):f!==void 0?n.addEventListener(a,o,{passive:f}):n.addEventListener(a,o,!1)}function sh(n,a,o,c,f){var m=c;if((a&1)===0&&(a&2)===0&&c!==null)e:for(;;){if(c===null)return;var x=c.tag;if(x===3||x===4){var k=c.stateNode.containerInfo;if(k===f)break;if(x===4)for(x=c.return;x!==null;){var z=x.tag;if((z===3||z===4)&&x.stateNode.containerInfo===f)return;x=x.return}for(;k!==null;){if(x=yi(k),x===null)return;if(z=x.tag,z===5||z===6||z===26||z===27){c=m=x;continue e}k=k.parentNode}}c=c.return}Fg(function(){var Y=m,Q=kd(o),K=[];e:{var X=bv.get(n);if(X!==void 0){var F=ql,ye=n;switch(n){case"keypress":if(Hl(o)===0)break e;case"keydown":case"keyup":F=W_;break;case"focusin":ye="focus",F=Ad;break;case"focusout":ye="blur",F=Ad;break;case"beforeblur":case"afterblur":F=Ad;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=Gg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=$_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=J_;break;case mv:case gv:case vv:F=q_;break;case yv:F=tS;break;case"scroll":case"scrollend":F=U_;break;case"wheel":F=rS;break;case"copy":case"cut":case"paste":F=B_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=Wg;break;case"toggle":case"beforetoggle":F=iS}var me=(a&4)!==0,Pe=!me&&(n==="scroll"||n==="scrollend"),H=me?X!==null?X+"Capture":null:X;me=[];for(var j=Y,q;j!==null;){var Z=j;if(q=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||q===null||H===null||(Z=Ho(j,H),Z!=null&&me.push(xs(j,Z,q))),Pe)break;j=j.return}0<me.length&&(X=new F(X,ye,null,o,Q),K.push({event:X,listeners:me}))}}if((a&7)===0){e:{if(X=n==="mouseover"||n==="pointerover",F=n==="mouseout"||n==="pointerout",X&&o!==Td&&(ye=o.relatedTarget||o.fromElement)&&(yi(ye)||ye[vi]))break e;if((F||X)&&(X=Q.window===Q?Q:(X=Q.ownerDocument)?X.defaultView||X.parentWindow:window,F?(ye=o.relatedTarget||o.toElement,F=Y,ye=ye?yi(ye):null,ye!==null&&(Pe=l(ye),me=ye.tag,ye!==Pe||me!==5&&me!==27&&me!==6)&&(ye=null)):(F=null,ye=Y),F!==ye)){if(me=Gg,Z="onMouseLeave",H="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&(me=Wg,Z="onPointerLeave",H="onPointerEnter",j="pointer"),Pe=F==null?X:$o(F),q=ye==null?X:$o(ye),X=new me(Z,j+"leave",F,o,Q),X.target=Pe,X.relatedTarget=q,Z=null,yi(Q)===Y&&(me=new me(H,j+"enter",ye,o,Q),me.target=q,me.relatedTarget=Pe,Z=me),Pe=Z,F&&ye)t:{for(me=F,H=ye,j=0,q=me;q;q=Ki(q))j++;for(q=0,Z=H;Z;Z=Ki(Z))q++;for(;0<j-q;)me=Ki(me),j--;for(;0<q-j;)H=Ki(H),q--;for(;j--;){if(me===H||H!==null&&me===H.alternate)break t;me=Ki(me),H=Ki(H)}me=null}else me=null;F!==null&&Hy(K,X,F,me,!1),ye!==null&&Pe!==null&&Hy(K,Pe,ye,me,!0)}}e:{if(X=Y?$o(Y):window,F=X.nodeName&&X.nodeName.toLowerCase(),F==="select"||F==="input"&&X.type==="file")var ce=av;else if(nv(X))if(iv)ce=mS;else{ce=hS;var Ae=fS}else F=X.nodeName,!F||F.toLowerCase()!=="input"||X.type!=="checkbox"&&X.type!=="radio"?Y&&Sd(Y.elementType)&&(ce=av):ce=pS;if(ce&&(ce=ce(n,Y))){rv(K,ce,o,Q);break e}Ae&&Ae(n,X,Y),n==="focusout"&&Y&&X.type==="number"&&Y.memoizedProps.value!=null&&_d(X,"number",X.value)}switch(Ae=Y?$o(Y):window,n){case"focusin":(nv(Ae)||Ae.contentEditable==="true")&&(Mi=Ae,Ld=Y,Vo=null);break;case"focusout":Vo=Ld=Mi=null;break;case"mousedown":$d=!0;break;case"contextmenu":case"mouseup":case"dragend":$d=!1,hv(K,o,Q);break;case"selectionchange":if(vS)break;case"keydown":case"keyup":hv(K,o,Q)}var fe;if(Rd)e:{switch(n){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else Ci?ev(n,o)&&(ge="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ge="onCompositionStart");ge&&(Zg&&o.locale!=="ko"&&(Ci||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Ci&&(fe=Pg()):(Xr=Q,Md="value"in Xr?Xr.value:Xr.textContent,Ci=!0)),Ae=Mc(Y,ge),0<Ae.length&&(ge=new Qg(ge,n,null,o,Q),K.push({event:ge,listeners:Ae}),fe?ge.data=fe:(fe=tv(o),fe!==null&&(ge.data=fe)))),(fe=sS?lS(n,o):cS(n,o))&&(ge=Mc(Y,"onBeforeInput"),0<ge.length&&(Ae=new Qg("onBeforeInput","beforeinput",null,o,Q),K.push({event:Ae,listeners:ge}),Ae.data=fe)),JS(K,n,Y,o,Q)}Ly(K,a)})}function xs(n,a,o){return{instance:n,listener:a,currentTarget:o}}function Mc(n,a){for(var o=a+"Capture",c=[];n!==null;){var f=n,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Ho(n,o),f!=null&&c.unshift(xs(n,f,m)),f=Ho(n,a),f!=null&&c.push(xs(n,f,m))),n.tag===3)return c;n=n.return}return[]}function Ki(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Hy(n,a,o,c,f){for(var m=a._reactName,x=[];o!==null&&o!==c;){var k=o,z=k.alternate,Y=k.stateNode;if(k=k.tag,z!==null&&z===c)break;k!==5&&k!==26&&k!==27||Y===null||(z=Y,f?(Y=Ho(o,m),Y!=null&&x.unshift(xs(o,Y,z))):f||(Y=Ho(o,m),Y!=null&&x.push(xs(o,Y,z)))),o=o.return}x.length!==0&&n.push({event:a,listeners:x})}var rT=/\r\n?/g,aT=/\u0000|\uFFFD/g;function Iy(n){return(typeof n=="string"?n:""+n).replace(rT,`
`).replace(aT,"")}function qy(n,a){return a=Iy(a),Iy(n)===a}function Oc(){}function Fe(n,a,o,c,f,m){switch(o){case"children":typeof c=="string"?a==="body"||a==="textarea"&&c===""||Ti(n,c):(typeof c=="number"||typeof c=="bigint")&&a!=="body"&&Ti(n,""+c);break;case"className":Dl(n,"class",c);break;case"tabIndex":Dl(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Dl(n,o,c);break;case"style":Bg(n,c,m);break;case"data":if(a!=="object"){Dl(n,"data",c);break}case"src":case"href":if(c===""&&(a!=="a"||o!=="href")){n.removeAttribute(o);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(o);break}c=Ll(""+c),n.setAttribute(o,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(a!=="input"&&Fe(n,a,"name",f.name,f,null),Fe(n,a,"formEncType",f.formEncType,f,null),Fe(n,a,"formMethod",f.formMethod,f,null),Fe(n,a,"formTarget",f.formTarget,f,null)):(Fe(n,a,"encType",f.encType,f,null),Fe(n,a,"method",f.method,f,null),Fe(n,a,"target",f.target,f,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(o);break}c=Ll(""+c),n.setAttribute(o,c);break;case"onClick":c!=null&&(n.onclick=Oc);break;case"onScroll":c!=null&&Re("scroll",n);break;case"onScrollEnd":c!=null&&Re("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(o=c.__html,o!=null){if(f.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}o=Ll(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(o,""+c):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":c===!0?n.setAttribute(o,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(o,c):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(o,c):n.removeAttribute(o);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(o):n.setAttribute(o,c);break;case"popover":Re("beforetoggle",n),Re("toggle",n),Rl(n,"popover",c);break;case"xlinkActuate":hr(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":hr(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":hr(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":hr(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":hr(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":hr(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":hr(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":hr(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":hr(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Rl(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=D_.get(o)||o,Rl(n,o,c))}}function lh(n,a,o,c,f,m){switch(o){case"style":Bg(n,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(o=c.__html,o!=null){if(f.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"children":typeof c=="string"?Ti(n,c):(typeof c=="number"||typeof c=="bigint")&&Ti(n,""+c);break;case"onScroll":c!=null&&Re("scroll",n);break;case"onScrollEnd":c!=null&&Re("scrollend",n);break;case"onClick":c!=null&&(n.onclick=Oc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!zg.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),a=o.slice(2,f?o.length-7:void 0),m=n[Pt]||null,m=m!=null?m[o]:null,typeof m=="function"&&n.removeEventListener(a,m,f),typeof c=="function")){typeof m!="function"&&m!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(a,c,f);break e}o in n?n[o]=c:c===!0?n.setAttribute(o,""):Rl(n,o,c)}}}function Rt(n,a,o){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Re("error",n),Re("load",n);var c=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var x=o[m];if(x!=null)switch(m){case"src":c=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Fe(n,a,m,x,o,null)}}f&&Fe(n,a,"srcSet",o.srcSet,o,null),c&&Fe(n,a,"src",o.src,o,null);return;case"input":Re("invalid",n);var k=m=x=f=null,z=null,Y=null;for(c in o)if(o.hasOwnProperty(c)){var Q=o[c];if(Q!=null)switch(c){case"name":f=Q;break;case"type":x=Q;break;case"checked":z=Q;break;case"defaultChecked":Y=Q;break;case"value":m=Q;break;case"defaultValue":k=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(i(137,a));break;default:Fe(n,a,c,Q,o,null)}}Hg(n,m,k,z,Y,x,f,!1),jl(n);return;case"select":Re("invalid",n),c=x=m=null;for(f in o)if(o.hasOwnProperty(f)&&(k=o[f],k!=null))switch(f){case"value":m=k;break;case"defaultValue":x=k;break;case"multiple":c=k;default:Fe(n,a,f,k,o,null)}a=m,o=x,n.multiple=!!c,a!=null?Si(n,!!c,a,!1):o!=null&&Si(n,!!c,o,!0);return;case"textarea":Re("invalid",n),m=f=c=null;for(x in o)if(o.hasOwnProperty(x)&&(k=o[x],k!=null))switch(x){case"value":c=k;break;case"defaultValue":f=k;break;case"children":m=k;break;case"dangerouslySetInnerHTML":if(k!=null)throw Error(i(91));break;default:Fe(n,a,x,k,o,null)}qg(n,c,f,m),jl(n);return;case"option":for(z in o)if(o.hasOwnProperty(z)&&(c=o[z],c!=null))switch(z){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:Fe(n,a,z,c,o,null)}return;case"dialog":Re("beforetoggle",n),Re("toggle",n),Re("cancel",n),Re("close",n);break;case"iframe":case"object":Re("load",n);break;case"video":case"audio":for(c=0;c<ws.length;c++)Re(ws[c],n);break;case"image":Re("error",n),Re("load",n);break;case"details":Re("toggle",n);break;case"embed":case"source":case"link":Re("error",n),Re("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Y in o)if(o.hasOwnProperty(Y)&&(c=o[Y],c!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Fe(n,a,Y,c,o,null)}return;default:if(Sd(a)){for(Q in o)o.hasOwnProperty(Q)&&(c=o[Q],c!==void 0&&lh(n,a,Q,c,o,void 0));return}}for(k in o)o.hasOwnProperty(k)&&(c=o[k],c!=null&&Fe(n,a,k,c,o,null))}function iT(n,a,o,c){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,x=null,k=null,z=null,Y=null,Q=null;for(F in o){var K=o[F];if(o.hasOwnProperty(F)&&K!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":z=K;default:c.hasOwnProperty(F)||Fe(n,a,F,null,c,K)}}for(var X in c){var F=c[X];if(K=o[X],c.hasOwnProperty(X)&&(F!=null||K!=null))switch(X){case"type":m=F;break;case"name":f=F;break;case"checked":Y=F;break;case"defaultChecked":Q=F;break;case"value":x=F;break;case"defaultValue":k=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(i(137,a));break;default:F!==K&&Fe(n,a,X,F,c,K)}}xd(n,x,k,z,Y,Q,m,f);return;case"select":F=x=k=X=null;for(m in o)if(z=o[m],o.hasOwnProperty(m)&&z!=null)switch(m){case"value":break;case"multiple":F=z;default:c.hasOwnProperty(m)||Fe(n,a,m,null,c,z)}for(f in c)if(m=c[f],z=o[f],c.hasOwnProperty(f)&&(m!=null||z!=null))switch(f){case"value":X=m;break;case"defaultValue":k=m;break;case"multiple":x=m;default:m!==z&&Fe(n,a,f,m,c,z)}a=k,o=x,c=F,X!=null?Si(n,!!o,X,!1):!!c!=!!o&&(a!=null?Si(n,!!o,a,!0):Si(n,!!o,o?[]:"",!1));return;case"textarea":F=X=null;for(k in o)if(f=o[k],o.hasOwnProperty(k)&&f!=null&&!c.hasOwnProperty(k))switch(k){case"value":break;case"children":break;default:Fe(n,a,k,null,c,f)}for(x in c)if(f=c[x],m=o[x],c.hasOwnProperty(x)&&(f!=null||m!=null))switch(x){case"value":X=f;break;case"defaultValue":F=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(i(91));break;default:f!==m&&Fe(n,a,x,f,c,m)}Ig(n,X,F);return;case"option":for(var ye in o)if(X=o[ye],o.hasOwnProperty(ye)&&X!=null&&!c.hasOwnProperty(ye))switch(ye){case"selected":n.selected=!1;break;default:Fe(n,a,ye,null,c,X)}for(z in c)if(X=c[z],F=o[z],c.hasOwnProperty(z)&&X!==F&&(X!=null||F!=null))switch(z){case"selected":n.selected=X&&typeof X!="function"&&typeof X!="symbol";break;default:Fe(n,a,z,X,c,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var me in o)X=o[me],o.hasOwnProperty(me)&&X!=null&&!c.hasOwnProperty(me)&&Fe(n,a,me,null,c,X);for(Y in c)if(X=c[Y],F=o[Y],c.hasOwnProperty(Y)&&X!==F&&(X!=null||F!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(i(137,a));break;default:Fe(n,a,Y,X,c,F)}return;default:if(Sd(a)){for(var Pe in o)X=o[Pe],o.hasOwnProperty(Pe)&&X!==void 0&&!c.hasOwnProperty(Pe)&&lh(n,a,Pe,void 0,c,X);for(Q in c)X=c[Q],F=o[Q],!c.hasOwnProperty(Q)||X===F||X===void 0&&F===void 0||lh(n,a,Q,X,c,F);return}}for(var H in o)X=o[H],o.hasOwnProperty(H)&&X!=null&&!c.hasOwnProperty(H)&&Fe(n,a,H,null,c,X);for(K in c)X=c[K],F=o[K],!c.hasOwnProperty(K)||X===F||X==null&&F==null||Fe(n,a,K,X,c,F)}var ch=null,uh=null;function Nc(n){return n.nodeType===9?n:n.ownerDocument}function Yy(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function By(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function dh(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var fh=null;function oT(){var n=window.event;return n&&n.type==="popstate"?n===fh?!1:(fh=n,!0):(fh=null,!1)}var Xy=typeof setTimeout=="function"?setTimeout:void 0,sT=typeof clearTimeout=="function"?clearTimeout:void 0,Fy=typeof Promise=="function"?Promise:void 0,lT=typeof queueMicrotask=="function"?queueMicrotask:typeof Fy<"u"?function(n){return Fy.resolve(null).then(n).catch(cT)}:Xy;function cT(n){setTimeout(function(){throw n})}function oa(n){return n==="head"}function Py(n,a){var o=a,c=0,f=0;do{var m=o.nextSibling;if(n.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<c&&8>c){o=c;var x=n.ownerDocument;if(o&1&&_s(x.documentElement),o&2&&_s(x.body),o&4)for(o=x.head,_s(o),x=o.firstChild;x;){var k=x.nextSibling,z=x.nodeName;x[Lo]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&x.rel.toLowerCase()==="stylesheet"||o.removeChild(x),x=k}}if(f===0){n.removeChild(m),Ns(a);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:c=o.charCodeAt(0)-48;else c=0;o=m}while(o);Ns(a)}function hh(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var o=a;switch(a=a.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":hh(o),vd(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function uT(n,a,o,c){for(;n.nodeType===1;){var f=o;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[Lo])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=Hn(n.nextSibling),n===null)break}return null}function dT(n,a,o){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=Hn(n.nextSibling),n===null))return null;return n}function ph(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function fT(n,a){var o=n.ownerDocument;if(n.data!=="$?"||o.readyState==="complete")a();else{var c=function(){a(),o.removeEventListener("DOMContentLoaded",c)};o.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function Hn(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return n}var mh=null;function Vy(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(a===0)return n;a--}else o==="/$"&&a++}n=n.previousSibling}return null}function Gy(n,a,o){switch(a=Nc(o),n){case"html":if(n=a.documentElement,!n)throw Error(i(452));return n;case"head":if(n=a.head,!n)throw Error(i(453));return n;case"body":if(n=a.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}function _s(n){for(var a=n.attributes;a.length;)n.removeAttributeNode(a[0]);vd(n)}var Mn=new Map,Qy=new Set;function Ac(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Cr=N.d;N.d={f:hT,r:pT,D:mT,C:gT,L:vT,m:yT,X:wT,S:bT,M:xT};function hT(){var n=Cr.f(),a=_c();return n||a}function pT(n){var a=bi(n);a!==null&&a.tag===5&&a.type==="form"?m0(a):Cr.r(n)}var Ji=typeof document>"u"?null:document;function Wy(n,a,o){var c=Ji;if(c&&typeof a=="string"&&a){var f=xn(a);f='link[rel="'+n+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),Qy.has(f)||(Qy.add(f),n={rel:n,crossOrigin:o,href:a},c.querySelector(f)===null&&(a=c.createElement("link"),Rt(a,"link",n),Tt(a),c.head.appendChild(a)))}}function mT(n){Cr.D(n),Wy("dns-prefetch",n,null)}function gT(n,a){Cr.C(n,a),Wy("preconnect",n,a)}function vT(n,a,o){Cr.L(n,a,o);var c=Ji;if(c&&n&&a){var f='link[rel="preload"][as="'+xn(a)+'"]';a==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+xn(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+xn(o.imageSizes)+'"]')):f+='[href="'+xn(n)+'"]';var m=f;switch(a){case"style":m=eo(n);break;case"script":m=to(n)}Mn.has(m)||(n=y({rel:"preload",href:a==="image"&&o&&o.imageSrcSet?void 0:n,as:a},o),Mn.set(m,n),c.querySelector(f)!==null||a==="style"&&c.querySelector(Ss(m))||a==="script"&&c.querySelector(Ts(m))||(a=c.createElement("link"),Rt(a,"link",n),Tt(a),c.head.appendChild(a)))}}function yT(n,a){Cr.m(n,a);var o=Ji;if(o&&n){var c=a&&typeof a.as=="string"?a.as:"script",f='link[rel="modulepreload"][as="'+xn(c)+'"][href="'+xn(n)+'"]',m=f;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=to(n)}if(!Mn.has(m)&&(n=y({rel:"modulepreload",href:n},a),Mn.set(m,n),o.querySelector(f)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Ts(m)))return}c=o.createElement("link"),Rt(c,"link",n),Tt(c),o.head.appendChild(c)}}}function bT(n,a,o){Cr.S(n,a,o);var c=Ji;if(c&&n){var f=wi(c).hoistableStyles,m=eo(n);a=a||"default";var x=f.get(m);if(!x){var k={loading:0,preload:null};if(x=c.querySelector(Ss(m)))k.loading=5;else{n=y({rel:"stylesheet",href:n,"data-precedence":a},o),(o=Mn.get(m))&&gh(n,o);var z=x=c.createElement("link");Tt(z),Rt(z,"link",n),z._p=new Promise(function(Y,Q){z.onload=Y,z.onerror=Q}),z.addEventListener("load",function(){k.loading|=1}),z.addEventListener("error",function(){k.loading|=2}),k.loading|=4,zc(x,a,c)}x={type:"stylesheet",instance:x,count:1,state:k},f.set(m,x)}}}function wT(n,a){Cr.X(n,a);var o=Ji;if(o&&n){var c=wi(o).hoistableScripts,f=to(n),m=c.get(f);m||(m=o.querySelector(Ts(f)),m||(n=y({src:n,async:!0},a),(a=Mn.get(f))&&vh(n,a),m=o.createElement("script"),Tt(m),Rt(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(f,m))}}function xT(n,a){Cr.M(n,a);var o=Ji;if(o&&n){var c=wi(o).hoistableScripts,f=to(n),m=c.get(f);m||(m=o.querySelector(Ts(f)),m||(n=y({src:n,async:!0,type:"module"},a),(a=Mn.get(f))&&vh(n,a),m=o.createElement("script"),Tt(m),Rt(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(f,m))}}function Zy(n,a,o,c){var f=(f=re.current)?Ac(f):null;if(!f)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(a=eo(o.href),o=wi(f).hoistableStyles,c=o.get(a),c||(c={type:"style",instance:null,count:0,state:null},o.set(a,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=eo(o.href);var m=wi(f).hoistableStyles,x=m.get(n);if(x||(f=f.ownerDocument||f,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,x),(m=f.querySelector(Ss(n)))&&!m._p&&(x.instance=m,x.state.loading=5),Mn.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Mn.set(n,o),m||_T(f,n,o,x.state))),a&&c===null)throw Error(i(528,""));return x}if(a&&c!==null)throw Error(i(529,""));return null;case"script":return a=o.async,o=o.src,typeof o=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=to(o),o=wi(f).hoistableScripts,c=o.get(a),c||(c={type:"script",instance:null,count:0,state:null},o.set(a,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function eo(n){return'href="'+xn(n)+'"'}function Ss(n){return'link[rel="stylesheet"]['+n+"]"}function Ky(n){return y({},n,{"data-precedence":n.precedence,precedence:null})}function _T(n,a,o,c){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?c.loading=1:(a=n.createElement("link"),c.preload=a,a.addEventListener("load",function(){return c.loading|=1}),a.addEventListener("error",function(){return c.loading|=2}),Rt(a,"link",o),Tt(a),n.head.appendChild(a))}function to(n){return'[src="'+xn(n)+'"]'}function Ts(n){return"script[async]"+n}function Jy(n,a,o){if(a.count++,a.instance===null)switch(a.type){case"style":var c=n.querySelector('style[data-href~="'+xn(o.href)+'"]');if(c)return a.instance=c,Tt(c),c;var f=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),Tt(c),Rt(c,"style",f),zc(c,o.precedence,n),a.instance=c;case"stylesheet":f=eo(o.href);var m=n.querySelector(Ss(f));if(m)return a.state.loading|=4,a.instance=m,Tt(m),m;c=Ky(o),(f=Mn.get(f))&&gh(c,f),m=(n.ownerDocument||n).createElement("link"),Tt(m);var x=m;return x._p=new Promise(function(k,z){x.onload=k,x.onerror=z}),Rt(m,"link",c),a.state.loading|=4,zc(m,o.precedence,n),a.instance=m;case"script":return m=to(o.src),(f=n.querySelector(Ts(m)))?(a.instance=f,Tt(f),f):(c=o,(f=Mn.get(m))&&(c=y({},o),vh(c,f)),n=n.ownerDocument||n,f=n.createElement("script"),Tt(f),Rt(f,"link",c),n.head.appendChild(f),a.instance=f);case"void":return null;default:throw Error(i(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(c=a.instance,a.state.loading|=4,zc(c,o.precedence,n));return a.instance}function zc(n,a,o){for(var c=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=c.length?c[c.length-1]:null,m=f,x=0;x<c.length;x++){var k=c[x];if(k.dataset.precedence===a)m=k;else if(m!==f)break}m?m.parentNode.insertBefore(n,m.nextSibling):(a=o.nodeType===9?o.head:o,a.insertBefore(n,a.firstChild))}function gh(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function vh(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var Rc=null;function eb(n,a,o){if(Rc===null){var c=new Map,f=Rc=new Map;f.set(o,c)}else f=Rc,c=f.get(o),c||(c=new Map,f.set(o,c));if(c.has(n))return c;for(c.set(n,null),o=o.getElementsByTagName(n),f=0;f<o.length;f++){var m=o[f];if(!(m[Lo]||m[Ut]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var x=m.getAttribute(a)||"";x=n+x;var k=c.get(x);k?k.push(m):c.set(x,[m])}}return c}function tb(n,a,o){n=n.ownerDocument||n,n.head.insertBefore(o,a==="title"?n.querySelector("head > title"):null)}function ST(n,a,o){if(o===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return n=a.disabled,typeof a.precedence=="string"&&n==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function nb(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var ks=null;function TT(){}function kT(n,a,o){if(ks===null)throw Error(i(475));var c=ks;if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var f=eo(o.href),m=n.querySelector(Ss(f));if(m){n=m._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(c.count++,c=Dc.bind(c),n.then(c,c)),a.state.loading|=4,a.instance=m,Tt(m);return}m=n.ownerDocument||n,o=Ky(o),(f=Mn.get(f))&&gh(o,f),m=m.createElement("link"),Tt(m);var x=m;x._p=new Promise(function(k,z){x.onload=k,x.onerror=z}),Rt(m,"link",o),a.instance=m}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(c.count++,a=Dc.bind(c),n.addEventListener("load",a),n.addEventListener("error",a))}}function ET(){if(ks===null)throw Error(i(475));var n=ks;return n.stylesheets&&n.count===0&&yh(n,n.stylesheets),0<n.count?function(a){var o=setTimeout(function(){if(n.stylesheets&&yh(n,n.stylesheets),n.unsuspend){var c=n.unsuspend;n.unsuspend=null,c()}},6e4);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(o)}}:null}function Dc(){if(this.count--,this.count===0){if(this.stylesheets)yh(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var jc=null;function yh(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,jc=new Map,a.forEach(CT,n),jc=null,Dc.call(n))}function CT(n,a){if(!(a.state.loading&4)){var o=jc.get(n);if(o)var c=o.get(null);else{o=new Map,jc.set(n,o);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var x=f[m];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(o.set(x.dataset.precedence,x),c=x)}c&&o.set(null,c)}f=a.instance,x=f.getAttribute("data-precedence"),m=o.get(x)||c,m===c&&o.set(null,f),o.set(x,f),this.count++,c=Dc.bind(this),f.addEventListener("load",c),f.addEventListener("error",c),m?m.parentNode.insertBefore(f,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),a.state.loading|=4}}var Es={$$typeof:A,Provider:null,Consumer:null,_currentValue:R,_currentValue2:R,_threadCount:0};function MT(n,a,o,c,f,m,x,k){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=hd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hd(0),this.hiddenUpdates=hd(null),this.identifierPrefix=c,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function rb(n,a,o,c,f,m,x,k,z,Y,Q,K){return n=new MT(n,a,o,x,k,z,Y,K),a=1,m===!0&&(a|=24),m=on(3,null,null,a),n.current=m,m.stateNode=n,a=Kd(),a.refCount++,n.pooledCache=a,a.refCount++,m.memoizedState={element:c,isDehydrated:o,cache:a},nf(m),n}function ab(n){return n?(n=zi,n):zi}function ib(n,a,o,c,f,m){f=ab(f),c.context===null?c.context=f:c.pendingContext=f,c=Vr(a),c.payload={element:o},m=m===void 0?null:m,m!==null&&(c.callback=m),o=Gr(n,c,a),o!==null&&(dn(o,n,a),ns(o,n,a))}function ob(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<a?o:a}}function bh(n,a){ob(n,a),(n=n.alternate)&&ob(n,a)}function sb(n){if(n.tag===13){var a=Ai(n,67108864);a!==null&&dn(a,n,67108864),bh(n,67108864)}}var Uc=!0;function OT(n,a,o,c){var f=E.T;E.T=null;var m=N.p;try{N.p=2,wh(n,a,o,c)}finally{N.p=m,E.T=f}}function NT(n,a,o,c){var f=E.T;E.T=null;var m=N.p;try{N.p=8,wh(n,a,o,c)}finally{N.p=m,E.T=f}}function wh(n,a,o,c){if(Uc){var f=xh(c);if(f===null)sh(n,a,c,Lc,o),cb(n,c);else if(zT(f,n,a,o,c))c.stopPropagation();else if(cb(n,c),a&4&&-1<AT.indexOf(n)){for(;f!==null;){var m=bi(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var x=ka(m.pendingLanes);if(x!==0){var k=m;for(k.pendingLanes|=2,k.entangledLanes|=2;x;){var z=1<<31-rn(x);k.entanglements[1]|=z,x&=~z}ar(m),(Ye&6)===0&&(wc=Jn()+500,bs(0))}}break;case 13:k=Ai(m,2),k!==null&&dn(k,m,2),_c(),bh(m,2)}if(m=xh(c),m===null&&sh(n,a,c,Lc,o),m===f)break;f=m}f!==null&&c.stopPropagation()}else sh(n,a,c,null,o)}}function xh(n){return n=kd(n),_h(n)}var Lc=null;function _h(n){if(Lc=null,n=yi(n),n!==null){var a=l(n);if(a===null)n=null;else{var o=a.tag;if(o===13){if(n=u(a),n!==null)return n;n=null}else if(o===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return Lc=n,null}function lb(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(g_()){case _g:return 2;case Sg:return 8;case Ol:case v_:return 32;case Tg:return 268435456;default:return 32}default:return 32}}var Sh=!1,sa=null,la=null,ca=null,Cs=new Map,Ms=new Map,ua=[],AT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cb(n,a){switch(n){case"focusin":case"focusout":sa=null;break;case"dragenter":case"dragleave":la=null;break;case"mouseover":case"mouseout":ca=null;break;case"pointerover":case"pointerout":Cs.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ms.delete(a.pointerId)}}function Os(n,a,o,c,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:a,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},a!==null&&(a=bi(a),a!==null&&sb(a)),n):(n.eventSystemFlags|=c,a=n.targetContainers,f!==null&&a.indexOf(f)===-1&&a.push(f),n)}function zT(n,a,o,c,f){switch(a){case"focusin":return sa=Os(sa,n,a,o,c,f),!0;case"dragenter":return la=Os(la,n,a,o,c,f),!0;case"mouseover":return ca=Os(ca,n,a,o,c,f),!0;case"pointerover":var m=f.pointerId;return Cs.set(m,Os(Cs.get(m)||null,n,a,o,c,f)),!0;case"gotpointercapture":return m=f.pointerId,Ms.set(m,Os(Ms.get(m)||null,n,a,o,c,f)),!0}return!1}function ub(n){var a=yi(n.target);if(a!==null){var o=l(a);if(o!==null){if(a=o.tag,a===13){if(a=u(o),a!==null){n.blockedOn=a,k_(n.priority,function(){if(o.tag===13){var c=un();c=pd(c);var f=Ai(o,c);f!==null&&dn(f,o,c),bh(o,c)}});return}}else if(a===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function $c(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var o=xh(n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);Td=c,o.target.dispatchEvent(c),Td=null}else return a=bi(o),a!==null&&sb(a),n.blockedOn=o,!1;a.shift()}return!0}function db(n,a,o){$c(n)&&o.delete(a)}function RT(){Sh=!1,sa!==null&&$c(sa)&&(sa=null),la!==null&&$c(la)&&(la=null),ca!==null&&$c(ca)&&(ca=null),Cs.forEach(db),Ms.forEach(db)}function Hc(n,a){n.blockedOn===a&&(n.blockedOn=null,Sh||(Sh=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,RT)))}var Ic=null;function fb(n){Ic!==n&&(Ic=n,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Ic===n&&(Ic=null);for(var a=0;a<n.length;a+=3){var o=n[a],c=n[a+1],f=n[a+2];if(typeof c!="function"){if(_h(c||o)===null)continue;break}var m=bi(o);m!==null&&(n.splice(a,3),a-=3,_f(m,{pending:!0,data:f,method:o.method,action:c},c,f))}}))}function Ns(n){function a(z){return Hc(z,n)}sa!==null&&Hc(sa,n),la!==null&&Hc(la,n),ca!==null&&Hc(ca,n),Cs.forEach(a),Ms.forEach(a);for(var o=0;o<ua.length;o++){var c=ua[o];c.blockedOn===n&&(c.blockedOn=null)}for(;0<ua.length&&(o=ua[0],o.blockedOn===null);)ub(o),o.blockedOn===null&&ua.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(c=0;c<o.length;c+=3){var f=o[c],m=o[c+1],x=f[Pt]||null;if(typeof m=="function")x||fb(o);else if(x){var k=null;if(m&&m.hasAttribute("formAction")){if(f=m,x=m[Pt]||null)k=x.formAction;else if(_h(f)!==null)continue}else k=x.action;typeof k=="function"?o[c+1]=k:(o.splice(c,3),c-=3),fb(o)}}}function Th(n){this._internalRoot=n}qc.prototype.render=Th.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(i(409));var o=a.current,c=un();ib(o,c,n,a,null,null)},qc.prototype.unmount=Th.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;ib(n.current,2,null,n,null,null),_c(),a[vi]=null}};function qc(n){this._internalRoot=n}qc.prototype.unstable_scheduleHydration=function(n){if(n){var a=Og();n={blockedOn:null,target:n,priority:a};for(var o=0;o<ua.length&&a!==0&&a<ua[o].priority;o++);ua.splice(o,0,n),o===0&&ub(n)}};var hb=t.version;if(hb!=="19.1.0")throw Error(i(527,hb,"19.1.0"));N.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=h(a),n=n!==null?p(n):null,n=n===null?null:n.stateNode,n};var DT={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yc.isDisabled&&Yc.supportsFiber)try{Do=Yc.inject(DT),nn=Yc}catch{}}return Us.createRoot=function(n,a){if(!s(n))throw Error(i(299));var o=!1,c="",f=O0,m=N0,x=A0,k=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(x=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(k=a.unstable_transitionCallbacks)),a=rb(n,1,!1,null,null,o,c,f,m,x,k,null),n[vi]=a.current,oh(n),new Th(a)},Us.hydrateRoot=function(n,a,o){if(!s(n))throw Error(i(299));var c=!1,f="",m=O0,x=N0,k=A0,z=null,Y=null;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(x=o.onCaughtError),o.onRecoverableError!==void 0&&(k=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(z=o.unstable_transitionCallbacks),o.formState!==void 0&&(Y=o.formState)),a=rb(n,1,!0,a,o??null,c,f,m,x,k,z,Y),a.context=ab(null),o=a.current,c=un(),c=pd(c),f=Vr(c),f.callback=null,Gr(o,f,c),o=c,a.current.lanes=o,Uo(a,o),ar(a),n[vi]=a.current,oh(n),new qc(a)},Us.version="19.1.0",Us}var Mw;function eM(){if(Mw)return Qh.exports;Mw=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Qh.exports=J3(),Qh.exports}var tM=eM();function Ju(e,t){for(const r in e)t(e[r],r)}function mn(e,t){e.forEach(t)}function St(e,t,r){if(!e)throw Error(`${r?r+": ":""}${t}`)}function $r({node:e=[],from:t,source:r,parent:i=t||r,to:s,target:l,child:u=s||l,scope:d={},meta:h={},family:p={type:"regular"},regional:y}={}){const g=Fs(i),w=Fs(p.links),b=Fs(p.owners),_=[];mn(e,M=>M&&Rn(_,M));const T={id:fM(),seq:_,next:Fs(u),meta:h,scope:d,family:{triggers:g.length,type:p.type||"crosslink",links:w,owners:b}};return mn(w,M=>Rn(ed(M),T)),mn(b,M=>Rn(td(M),T)),mn(g,M=>Rn(M.next,T)),T}function Wx(e,t,r){let i,s=jr,l=null,u=at;if(e.target&&(t=e.params,r=e.defer,i=e.meta,s="page"in e?e.page:s,e.stack&&(l=e.stack),u=eu(e)||u,e=e.target),u&&at&&u!==at&&(at=null),Array.isArray(e))for(let _=0;_<e.length;_++)Pa("pure",s,yn(e[_]),l,t[_],u,i);else Pa("pure",s,yn(e),l,t,u,i);if(r&&!tu)return;const d={isRoot:tu,currentPage:jr,scope:at,isWatch:np,isPure:vu};let h,p,y,g,w,b;tu=0;e:for(;g=bM();){const{idx:_,stack:T,type:M}=g;y=T.node,jr=w=T.page,at=eu(T),w?b=w.reg:at&&(b=at.reg);const S=!!w,C=!!at,A={fail:0,scope:y.scope};h=p=0;for(let U=_;U<y.seq.length&&!h;U++){const D=y.seq[U];if(D.order){const{priority:P,barrierID:V}=D.order,ee=V?w?`${w.fullID}_${V}`:V:0;if(U!==_||M!==P){V?tp.has(ee)||(tp.add(ee),Kp(U,T,P,V)):Kp(U,T,P,0);continue e}V&&tp.delete(ee)}switch(D.type){case"mov":{const V=D.data;let ee;switch(V.from){case"stack":ee=mu(T);break;case"a":case"b":ee=T[V.from];break;case"value":ee=V.store;break;case"store":if(b&&!b[V.store.id])if(S){const ne=o2(w,V.store.id);T.page=w=ne,ne?b=ne.reg:C?(To(at,V.store,0,1,V.softRead),b=at.reg):b=void 0}else C&&To(at,V.store,0,1,V.softRead);ee=Js(b&&b[V.store.id]||V.store)}switch(V.to){case"stack":T.value=ee;break;case"a":case"b":T[V.to]=ee;break;case"store":wM(w,at,V.target,0).current=ee}break}case"compute":const P=D.data;if(P.fn){np=y.meta.op==="watch",vu=P.pure;const V=P.safe?(0,P.fn)(mu(T),A.scope,T):_M(A,P.fn,T);P.filter?p=!V:T.value=V,np=d.isWatch,vu=d.isPure}}h=A.fail||p}if(!h){const U=mu(T),D=eu(T);if(mn(y.next,P=>{Pa("child",w,P,T,U,D)}),D){y.meta.needFxCounter&&Pa("child",w,D.fxCount,T,U,D),y.meta.storeChange&&Pa("child",w,D.storeChange,T,U,D),y.meta.warnSerialize&&Pa("child",w,D.warnSerializeNode,T,U,D);const P=D.additionalLinks[y.id];P&&mn(P,V=>{Pa("child",w,V,T,U,D)})}}}tu=d.isRoot,jr=d.currentPage,at=eu(d)}function nM(e,t="combine"){let r=t+"(",i="",s=0;return Ju(e,l=>{s<25&&(l!=null&&(r+=i,r+=Ta(l)?Kx(l).fullName:l.toString()),s+=1,i=", ")}),r+")"}function rM(e,t){let r,i;const s=e;if(t){const l=Kx(t);e.length===0?(r=l.path,i=l.fullName):(r=l.path.concat([e]),i=l.fullName.length===0?e:l.fullName+"/"+e)}else r=e.length===0?[]:[e],i=e;return{shortName:s,fullName:i,path:r}}function hi(e,t){if(!t||!t.name&&!t.named&&!t.loc)return e;let r=`[${e}]`;const i=t.named||t.name;i&&(r+=` unit '${i}'`);const s=t.loc;return!i&&s&&(r+=` (${s.file}:${s.line}:${s.column})`),r}function tg(e,t){const r=e[0];r2(r);let i=r.or;const s=r.and;if(s){const l=s[0];if(ur(l)&&"and"in l){const u=tg(s);e=u[0],i={...i,...u[1]}}else e=s}return[e,i]}function Qp(e){const t=()=>e();return t.unsubscribe=()=>e(),t}function Gn(e,...t){}function Qe(e,t){const r=ml({or:t,and:typeof e=="string"?{name:e}:e}),i=hi("event",r),s=(d,...h)=>(St(!ba(s,"derived"),"call of derived event is not supported, use createEvent instead",i),St(!vu,"unit call from pure function is not supported, use operators like sample instead",i),jr?((p,y,g,w)=>{const b=jr;Rw(null);const T=p.create(g,w);return Rw(b),T})(s,l,d,h):s.create(d,h)),l=pM(),u=Object.assign(s,{graphite:$r({meta:c2(r.actualOp||"event",s,r,rd(Qe)),regional:1}),create:d=>(Wx({target:s,params:d,scope:at}),d),watch:d=>s2(s,d),map:d=>rp(s,xo,d,[Dr()]),filter:d=>rp(s,"filter",d.fn?d:d.fn,[Dr(nd,1)]),filterMap:d=>rp(s,"filterMap",d,[Dr(),_o(h=>!Dn(h),1)]),prepend(d){St(s.targetable,".prepend of derived event is not supported, call source event instead",i);const h=Qe("* → "+s.shortName,{parent:fl(s)});return Gn("eventPrepend",yn(h)),si(h,s,[Dr()],"prepend",d),TM(s,h),h}});return r!=null&&r.domain&&r.domain.hooks.event(u),Rr(u,"id",u.graphite.id),n2(u.graphite),u}function Ow(e,t,r,i,s){return Wp(r,`${s} ${t}`,"first argument"),St(Ir(i),"second argument should be a function",s),hl(!ba(e,"derived"),`${t} in derived store`,`${t} in store created via createStore`,s),mn(Array.isArray(r)?r:[r],l=>{e.off(l),u2(l,e,"on",vM,i)}),e}function vn(e,t){const r=ml(t),i=So(e),s=hi("store",r),l=Qe({named:"updates",derived:1});Gn("storeBase",i);const u=i.id,d="skipVoid"in r,h=d&&!r.skipVoid;hl(!(d&&r.skipVoid),"{skipVoid: true}","updateFilter",s);const p={updates:l,defaultState:e,stateRef:i,getState(){let S,C=i;if(jr){let A=jr;for(;A&&!A.reg[u];)A=fl(A);A&&(S=A)}return!S&&at&&(To(at,i,1),S=at),S&&(C=S.reg[u]),Js(C)},setState:S=>Wx({target:p,params:S,defer:1,scope:at}),reset:(...S)=>(St(p.targetable,".reset of derived store is not supported",s),mn(S,C=>Ow(p,".reset",C,()=>p.defaultState,s)),p),on:(S,C)=>(St(p.targetable,".on of derived store is not supported",s),Ow(p,".on",S,C,s)),off(S){const C=yn(S).id,A=yn(p).family.links.find(U=>U.meta.onTrigger===C);return A&&Hu(A),p},map(S,C){let A,U;ur(S)&&(A=S,S=S.fn);const D=p.getState(),P=Dn(D);(!P||P&&h)&&(U=S(D));const V=vn(U,{name:`${p.shortName} → *`,derived:1,...C,and:A}),ee=u2(p,V,xo,nd,S);return Zp(sr(V),{type:xo,fn:S,from:i}),sr(V).noInit=1,Gn("storeMap",i,ee),V},watch(S,C){if(hl(!C,"watch second argument","sample",s),!C||!Ta(S)){const A=s2(p,S);return Gn("storeWatch",i,S)||S(p.getState()),A}return St(Ir(C),"second argument should be a function",s),S.watch(A=>C(p.getState(),A))}},y=c2("store",p,r,rd(vn)),g=p.defaultConfig.updateFilter;p.graphite=$r({scope:{state:i,fn:g},node:[_o((S,C,A)=>(A.scope&&!A.scope.reg[i.id]&&(A.b=1),S)),ni(i),_o((S,C,{a:A,b:U})=>{const D=Dn(S);return D&&!d&&uM(`${s}: ${bu}`,ba(p,"unitTrace")),(D&&h||!D)&&(S!==A||U)},1),g&&Dr(a2,1),zn({from:"stack",target:i})],child:l,meta:{...y,defaultState:e,stateRef:i},regional:1}),Rr(p,"id",p.graphite.id),Rr(p,"rootStateRefId",u);const w=ba(p,"serialize"),b=ba(p,"derived"),_=w==="ignore",T=ba(p,"sid");T&&(Rr(p,"storeChange",1),i.sid=T),T||_||b||Rr(p,"warnSerialize",1);const M=Dn(e);return St(b||!M||M&&h,bu,s),b&&M&&!d&&console.error(`${s}: ${bu}`),$u(p,[l]),r!=null&&r.domain&&r.domain.hooks.store(p),b||(p.reinit=Qe({named:"reinit"}),p.reset(p.reinit)),i.meta=p.graphite.meta,n2(p.graphite),p}function Qn(...e){let t,r,i;[e,i]=tg(e);const s=hi("combine",i),l=e[e.length-1],u=e.length>1&&!Un(l)&&ur(l),d=u&&l,h=u?e[e.length-2]:l;let p,y,g;if(Ir(h)?(r=e.slice(0,u?-2:-1),t=h):r=e,r.length===1){const w=r[0];Un(w)||(p=w,y=1)}if(!y&&(p=r,t)){g=1;const w=t;t=b=>w(...b)}return St(ur(p),`${s}: shape should be an object`),kM(Array.isArray(p),!g,p,rd(Qn),i,t,d)}function aM(e,t){let r=0;return mn(EM,i=>{i in e&&(St(e[i]!=null,d2(t,i)),r=1)}),r}function pi(...e){let t,r,i,s,[[l,u,d],h]=tg(e),p=1;const y=hi("sample",h);return Dn(u)&&ur(l)&&aM(l,y)&&(u=l.clock,d=l.fn,"batch"in l?p=l.batch:(hl(!("greedy"in l),"greedy in sample","batch",y),p=!l.greedy),s=l.filter,t=l.target,r=l.name,i=l.sid,l=l.source),CM("sample",u,l,s,t,d,r,h,p,1,0,i)}function zo(e,t,r){const i=hi("restore",r);if(St(!Un(e),"restore($store) is not supported",i),Jx(e)||Lu(e)){const l=fl(e),u=vn(t,{parent:l,name:e.shortName,and:r});return si(Lu(e)?e.doneData:e,u),l&&l.hooks.store(u),u}const s=Array.isArray(e)?[]:{};return Ju(e,(l,u)=>s[u]=Un(l)?l:vn(l,{name:u})),s}function iM(e,{scope:t,safe:r}={}){St(t||at||r,"scopeBind: scope not found");const i=t||at;return(...s)=>{function l(){zw(h)}let u,d=0;const h=at;zw(i);try{u=e(...s)}catch(p){u=p,d=1}if(l(),d)throw u;return u instanceof Promise&&u.then(l,l),u}}function Zx({unit:e,fn:t,scope:r,batch:i}){const s=[gu.run({fn:u=>t(u)})];i&&s.unshift(gu.compute({priority:"sampler",batch:1})),Un(e)&&s.unshift(gu.mov({store:e.stateRef,to:"stack"}));const l=Array.isArray(e)?e:[e];if(r){const u=[],d=r.additionalLinks;return l.forEach(h=>{const p=d[h.graphite.id]||[];d[h.graphite.id]=p;const y=$r({node:oM(s,h),meta:{watchOp:h.kind}});p.push(y),u.push(()=>{const g=p.indexOf(y);g!==-1&&p.splice(g,1),Hu(y)})}),Qp(()=>{u.forEach(h=>h())})}{const u=$r({node:s,parent:l,family:{owners:l}});return Qp(()=>{Hu(u)})}}function oM(e,t){return Un(t)?[gu.mov({store:t.stateRef,to:"stack"}),...e]:e}const sM=typeof Symbol<"u"&&Symbol.observable||"@@observable",xo="map",yn=e=>e.graphite||e,ed=e=>e.family.owners,td=e=>e.family.links,sr=e=>e.stateRef,mu=e=>e.value,fl=e=>e.parent,eu=e=>e.scope,ba=(e,t)=>yn(e).meta[t],Rr=(e,t,r)=>yn(e).meta[t]=r,Kx=e=>e.compositeName,Ta=e=>(Ir(e)||ur(e))&&"kind"in e,Sl=e=>t=>Ta(t)&&t.kind===e,Un=Sl("store"),Jx=Sl("event"),Lu=Sl("effect"),lM=e=>Ta(e)&&!!e.targetable,e2=Sl("domain"),cM=Sl("scope");var Xs={__proto__:null,unit:Ta,store:Un,event:Jx,effect:Lu,targetable:lM,domain:e2,scope:cM,attached:e=>Lu(e)&&ba(e,"attached")==1};const Jh=(e,t)=>e.includes(t),ep=(e,t)=>{const r=e.indexOf(t);r!==-1&&e.splice(r,1)},Rn=(e,t)=>e.push(t),hl=(e,t,r,i)=>!e&&console.error(`${i?i+": ":""}${t} is deprecated${r?`, use ${r} instead`:""}`),uM=(e,t)=>{const r=Error(e);r.stack=t,console.error(r)},ng=()=>{let e=0;return()=>""+ ++e},dM=ng(),t2=ng(),fM=ng();let hM=null;const n2=e=>{},pM=()=>hM,mM=e=>e,$u=(e,t)=>{const r=yn(e);mn(t,i=>{const s=yn(i);r.family.type!=="domain"&&(s.family.type="crosslink"),Rn(ed(s),r),Rn(td(r),s)})},Fs=(e=[])=>(Array.isArray(e)?e:[e]).flat().map(yn),ur=e=>typeof e=="object"&&e!==null,Ir=e=>typeof e=="function",Dn=e=>e===void 0,r2=e=>St(ur(e)||Ir(e),"expect first argument be an object"),Nw=(e,t,r,i)=>St(!(!ur(e)&&!Ir(e)||!("family"in e)&&!("graphite"in e)),`${t}: expect ${r} to be a unit (store, event or effect)${i}`),Wp=(e,t,r)=>{Array.isArray(e)?mn(e,(i,s)=>Nw(i,t,`${s} item of ${r}`,"")):Nw(e,t,r," or array of units")},gM=(e,t,r="target")=>mn(Fs(t),i=>St(!ba(i,"derived"),`${e}: derived unit in "${r}" is not supported, use createStore/createEvent instead"`)),a2=(e,{fn:t},{a:r})=>t(e,r),vM=(e,{fn:t},{a:r})=>t(r,e),nd=(e,{fn:t})=>t(e),i2=(e,t,r,i)=>{const s={id:t2(),type:e,data:t};return r&&(s.order={priority:r},i&&(s.order.barrierID=++yM)),s};let yM=0;const zn=({from:e="store",store:t,target:r,to:i=r?"store":"stack",batch:s,priority:l})=>i2("mov",{from:e,store:t,to:i,target:r},l,s),pl=({fn:e,batch:t,priority:r,safe:i=0,filter:s=0,pure:l=0})=>i2("compute",{fn:e,safe:i,filter:s,pure:l},r,t),rg=({fn:e})=>pl({fn:e,priority:"effect"}),_o=(e,t,r)=>pl({fn:e,safe:1,filter:t,priority:r}),ni=(e,t,r)=>zn({store:e,to:t?"stack":"a",priority:r&&"sampler",batch:1}),Dr=(e=nd,t)=>pl({fn:e,pure:1,filter:t}),gu={mov:zn,compute:pl,filter:({fn:e,pure:t})=>pl({fn:e,filter:1,pure:t}),run:rg},So=e=>({id:t2(),current:e,initial:e}),Js=({current:e})=>e,Zp=(e,t)=>{e.before||(e.before=[]),Rn(e.before,t)};let fo=null;const ag=(e,t)=>{if(!e)return t;if(!t)return e;let r;return(e.v.type===t.v.type&&e.v.id>t.v.id||Jp(e.v.type)>Jp(t.v.type))&&(r=e,e=t,t=r),r=ag(e.r,t),e.r=e.l,e.l=r,e},ig=[];let Aw=0;for(;Aw<6;)Rn(ig,{first:null,last:null,size:0}),Aw+=1;const bM=()=>{for(let e=0;e<6;e++){const t=ig[e];if(t.size>0){if(e===3||e===4){t.size-=1;const i=fo.v;return fo=ag(fo.l,fo.r),i}t.size===1&&(t.last=null);const r=t.first;return t.first=r.r,t.size-=1,r.v}}},Pa=(e,t,r,i,s,l,u)=>Kp(0,{a:null,b:null,node:r,parent:i,value:s,page:t,scope:l,meta:u},e,0),Kp=(e,t,r,i)=>{const s=Jp(r),l=ig[s],u={v:{idx:e,stack:t,type:r,id:i},l:null,r:null};s===3||s===4?fo=ag(fo,u):(l.size===0?l.first=u:l.last.r=u,l.last=u),l.size+=1},Jp=e=>{switch(e){case"child":return 0;case"pure":return 1;case"read":return 2;case"barrier":return 3;case"sampler":return 4;case"effect":return 5;default:return-1}},tp=new Set;let at,tu=1,np=0,vu=0,jr=null;const zw=e=>{at=e},Rw=e=>{jr=e},o2=(e,t)=>{if(e){for(;e&&!e.reg[t];)e=e.parent;if(e)return e}return null},wM=(e,t,r,i)=>{const s=o2(e,r.id);return s?s.reg[r.id]:t?(To(t,r,i),t.reg[r.id]):r},xM=e=>e,To=(e,t,r,i,s)=>{const l=e.reg;if(l[t.id])return;const u=t.sid,d={id:t.id,current:t.initial,meta:t.meta};if(d.id in e.values.idMap)d.current=e.values.idMap[d.id];else if(u&&u in e.values.sidMap&&!(u in e.sidIdMap)){var h;const p=t==null||(h=t.meta)===null||h===void 0?void 0:h.serialize;d.current=(e.fromSerialize&&p!=="ignore"&&(p==null?void 0:p.read)||xM)(e.values.sidMap[u])}else if(t.before&&!s){let p=0;const y=r||!t.noInit||i;mn(t.before,g=>{switch(g.type){case"map":{const w=g.from;if((w||g.fn)&&(w&&To(e,w,r,i),y)){const b=w&&l[w.id].current;d.current=g.fn?g.fn(b):b}break}case"field":To(e,g.from,r,i),p||(p=1,d.current=Array.isArray(d.current)?[...d.current]:{...d.current}),y&&(d.current[g.field]=l[l[g.from.id].id].current)}})}u&&(e.sidIdMap[u]=t.id),l[t.id]=d},_M=(e,t,r)=>{try{return t(mu(r),e.scope,r)}catch(i){console.error(i),e.fail=1,e.failReason=i}},ml=(e,t={})=>(ur(e)&&(ml(e.or,t),Ju(e,(r,i)=>{Dn(r)||i==="or"||i==="and"||(t[i]=r)}),ml(e.and,t)),t),Dw=(e,t)=>{ep(e.next,t),ep(ed(e),t),ep(td(e),t)},jw=["on","reset","sample","split","merge","guard","forward"],yu=(e,t,r,i,s)=>{let l;e.next.length=0,e.seq.length=0,e.scope=null;let u=td(e);const{stateRef:d,defaultShape:h,isRegion:p,op:y}=e.meta;if(d&&(d.before=[],e.meta.stateRef=null),h)for(const w in h)h[w]=null;const g=p?e:i;if(u.length>0){const w=Jh(jw,y),b=!p&&!s,_=b&&r&&!w;for(;l=u.pop();){const T=Jh(l.next,e);Dw(l,e),p&&yu(l,0,0,e,1),T||(l.family.triggers-=1),(t||_||b&&l.family.type==="crosslink"&&!w||s&&Jh(jw,l.meta.op)&&(T&&l.next.length===0||!T&&l.family.triggers<=0))&&yu(l,t,r&&l.meta.op!=="on",g,s)}}for(u=ed(e);l=u.pop();)Dw(l,e),r&&l.family.type==="crosslink"&&yu(l,t,l.meta.op!=="on",g,s)},nu=e=>e.clear(),Hu=(e,{deep:t}={})=>{let r=0;if(e.ownerSet&&e.ownerSet.delete(e),e2(e)){r=1;const i=e.history;nu(i.events),nu(i.effects),nu(i.stores),nu(i.domains)}yu(yn(e),!!t,r,null,0)},SM=e=>Qp(()=>Hu(e)),si=(e,t,r,i,s)=>$r({node:r,parent:e,child:t,scope:{fn:s},meta:{op:i},family:{owners:[e,t],links:t},regional:1}),s2=(e,t)=>(St(Ir(t),".watch argument should be a function"),SM($r({scope:{fn:t},node:[rg({fn:nd})],parent:e,meta:{op:"watch"},family:{owners:e},regional:1}))),TM=(e,t,r="event")=>{fl(e)&&fl(e).hooks[r](t)},l2=(e,t)=>Rr(e,"unitTrace",t),rd=e=>{const t=Error("unit trace");return Error.captureStackTrace&&Error.captureStackTrace(t,e),t.stack},c2=(e,t,r,i)=>{const s=ml(r),l=e==="domain",u=dM(),{sid:d=null,named:h=null,domain:p=null,parent:y=p}=s,g=h||s.name||(l?"":u),w=rM(g,y),b={op:t.kind=e,name:t.shortName=g,sid:t.sid=mM(d),named:h,unitId:t.id=u,serialize:s.serialize,derived:s.derived,config:s,unitTrace:i};return t.targetable=!s.derived,t.parent=y,t.compositeName=w,t.defaultConfig=s,t.getType=()=>(hl(0,"getType","compositeName.fullName"),w.fullName),!l&&(t.subscribe=_=>(r2(_),t.watch(Ir(_)?_:T=>_.next&&_.next(T))),t[sM]=()=>t),b},rp=(e,t,r,i)=>{let s;ur(r)&&(s=r,r=r.fn);const l=Qe({name:`${e.shortName} → *`,derived:1,and:s});return si(e,l,i,t,r),l},bu="undefined is used to skip updates. To allow undefined as a value provide explicit { skipVoid: false } option",u2=(e,t,r,i,s)=>{const l=sr(t),u=zn({store:l,to:"a",priority:"read"});r===xo&&(u.data.softRead=1);const d=[u,Dr(i)];Gn("storeOnMap",l,d,Un(e)&&sr(e));const h=si(e,t,d,r,s);return r!==xo&&Rr(h,"onTrigger",yn(e).id),h},kM=(e,t,r,i,s,l,u)=>{const d=hi("combine",s),h=e?C=>[...C]:C=>({...C}),p=e?[]:{},y=h(p),g=So(y),w=So(1);g.type=e?"list":"shape",g.noInit=1,Gn("combineBase",g,w);const b=vn(y,{name:nM(r),derived:1,...u,and:s});l2(b,i);const _=sr(b);_.noInit=1,Rr(b,"isCombine",1),$u(b,[$r({meta:{stateRef:g}})]);const T=ni(g);T.order={priority:"barrier"};const M=zn({store:_,to:"b",priority:"read"});M.data.softRead=1;const S=[_o((C,A,U)=>(U.scope&&!U.scope.reg[g.id]&&(U.c=1),C)),T,zn({store:w,to:"b"}),_o((C,{key:A},U)=>{if(U.c||C!==U.a[A])return t&&U.b&&(U.a=h(U.a)),U.a[A]=C,1},1),zn({from:"a",target:g}),zn({from:"value",store:0,target:w}),zn({from:"value",store:1,target:w,priority:"barrier",batch:1}),ni(g,1,1),l&&Dr(),M];if(Ju(r,(C,A)=>{if(!Un(C))return St(!Ta(C)&&!Dn(C),`combine expects a store in a field ${A}`,d),void(y[A]=p[A]=C);p[A]=C.defaultState,y[A]=C.getState();const U=si(C,b,S,"combine",l);U.scope.key=A;const D=sr(C);Zp(g,{type:"field",field:A,from:D}),Gn("combineField",D,U)}),b.defaultShape=r,Rr(b,"defaultShape",r),Zp(_,{type:xo,from:g,fn:l}),l){const C=l(y);!Dn(C)||u&&"skipVoid"in u||console.error(`${d}: ${bu}`),_.current=C,_.initial=C,b.defaultState=C}else b.defaultState=p;return b};$r({node:[rg({fn:({fn:e,value:t})=>e(t)})],meta:{op:"fx",fx:"sidechain"}});const EM=["source","clock","target"],d2=(e,t)=>e+`: ${t} should be defined`,CM=(e,t,r,i,s,l,u,d,h,p,y,g)=>{const w=hi(e,d),b=!!s;St(!Dn(r)||!Dn(t),d2(w,"either source or clock"));let _=0;Dn(r)?_=1:Ta(r)||(r=Qn(r)),Dn(t)?t=r:(Wp(t,w,"clock"),Array.isArray(t)&&(t=si(t,[],[],e))),_&&(r=t),d||u?d&&u?d.name=u:!d&&u&&(d={name:u}):u=r.shortName;let T="none";i&&(Ta(i)?T="unit":(St(Ir(i),"`filter` should be function or unit"),T="fn")),s?(Wp(s,w,"target"),gM(w,s)):T==="none"&&p&&Un(r)&&Un(t)?s=vn(l?l(Js(sr(r)),Js(sr(t))):Js(sr(r)),{name:u,sid:g,or:d}):(s=Qe({name:u,derived:1,or:d}),Gn("sampleTarget",yn(s)));const M=So();let S=[];const C=[];if(T==="unit"){const[D,P,V,ee]=Uw(i,s,t,M,e);ee&&Rn(C,ee),V||S.push(...ap(P)),S.push(...ap(D))}const A=[];if(_)h&&Rn(A,ni(M,1,1));else{const[D,P,V,ee]=Uw(r,s,t,M,e);ee&&Rn(C,ee),V||A.push(...ap(P)),Rn(A,ni(D,1,h))}const U=si(t,s,[Gn(),zn({from:"stack",target:M}),...A,...S,ni(M),T==="fn"&&Dr((D,P,{a:V})=>i(D,V),1),l&&Dr(a2),Gn("sampleSourceUpward",b)],e,l);return $u(r,[U]),$u(U,C),Object.assign(U.meta,d,{joint:1,stateRef:M}),l2(U,rd(pi)),s},ap=e=>[ni(e),_o((t,r,{a:i})=>i,1)],Uw=(e,t,r,i,s)=>{const l=Un(e),u=l?sr(e):So(),d=So(l);let h;return l||(h=$r({parent:e,node:[zn({from:"stack",target:u}),zn({from:"value",store:1,target:d})],family:{owners:[...new Set([e,t,r].flat())],links:t},meta:{op:s},regional:1})),Gn("sampleSource",d,u,i),[u,d,l,h]};var ip={exports:{}},op={},sp={exports:{}},lp={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lw;function MM(){if(Lw)return lp;Lw=1;var e=xl();function t(g,w){return g===w&&(g!==0||1/g===1/w)||g!==g&&w!==w}var r=typeof Object.is=="function"?Object.is:t,i=e.useState,s=e.useEffect,l=e.useLayoutEffect,u=e.useDebugValue;function d(g,w){var b=w(),_=i({inst:{value:b,getSnapshot:w}}),T=_[0].inst,M=_[1];return l(function(){T.value=b,T.getSnapshot=w,h(T)&&M({inst:T})},[g,b,w]),s(function(){return h(T)&&M({inst:T}),g(function(){h(T)&&M({inst:T})})},[g]),u(b),b}function h(g){var w=g.getSnapshot;g=g.value;try{var b=w();return!r(g,b)}catch{return!0}}function p(g,w){return w()}var y=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?p:d;return lp.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:y,lp}var $w;function f2(){return $w||($w=1,sp.exports=MM()),sp.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hw;function OM(){if(Hw)return op;Hw=1;var e=xl(),t=f2();function r(p,y){return p===y&&(p!==0||1/p===1/y)||p!==p&&y!==y}var i=typeof Object.is=="function"?Object.is:r,s=t.useSyncExternalStore,l=e.useRef,u=e.useEffect,d=e.useMemo,h=e.useDebugValue;return op.useSyncExternalStoreWithSelector=function(p,y,g,w,b){var _=l(null);if(_.current===null){var T={hasValue:!1,value:null};_.current=T}else T=_.current;_=d(function(){function S(P){if(!C){if(C=!0,A=P,P=w(P),b!==void 0&&T.hasValue){var V=T.value;if(b(V,P))return U=V}return U=P}if(V=U,i(A,P))return V;var ee=w(P);return b!==void 0&&b(V,ee)?(A=P,V):(A=P,U=ee)}var C=!1,A,U,D=g===void 0?null:g;return[function(){return S(y())},D===null?void 0:function(){return S(D())}]},[y,g,w,b]);var M=s(p,_[0],_[1]);return u(function(){T.hasValue=!0,T.value=M},[M]),h(M),M},op}var Iw;function NM(){return Iw||(Iw=1,ip.exports=OM()),ip.exports}var AM=NM();const zM=km(AM);var RM=f2();const DM=km(RM);function jM(e,t){const r=Xs.unit(e);let i={};r?i={unit:e}:"@@unitShape"in e?typeof e["@@unitShape"]=="function"?i=e["@@unitShape"]():yo("expect @@unitShape to be a function"):i=e;const s=Array.isArray(i),l=Ft.useRef({stale:1,justSubscribed:0,scope:t}),[u,d,h,p,y]=Ft.useMemo(()=>{l.current.stale=1;const _=Array.isArray(i)?[]:{},T=[],M=[],S=[],C=[];for(const A in i){if(!{}.hasOwnProperty.call(i,A))continue;const U=i[A];Xs.unit(U)||yo(`expect useUnit ${r?"argument":`value in key "${A}"`} to be a unit`),Xs.event(U)||Xs.effect(U)?(_[A]=t?iM(U,{scope:t}):U,S.push(A),C.push(U)):(_[A]=null,T.push(A),M.push(U))}return[_,T,M,S,C]},[l,t,...Object.keys(i),...Object.values(i)]),g=Ft.useRef({value:u,storeKeys:d,eventKeys:p,eventValues:y}),w=Ft.useCallback(_=>{const T=l.current;return T.justSubscribed=1,Zx({unit:h,fn:()=>{T.stale||(T.stale=1,_())},scope:t,batch:1})},[h,t,g,l]),b=Ft.useCallback(()=>{const _=g.current,T=l.current;let M,S=0;const C=_.value,A=_.storeKeys,U=_.eventKeys,D=_.eventValues,P=t!==T.scope;if(T.stale||T.justSubscribed||P){S=!T.justSubscribed||P,M=s?[...u]:{...u},A.length===d.length&&U.length===p.length||(S=1);for(let V=0;V<d.length;V++){const ee=p2(h[V],t),ne=d[V];S||(S=A.includes(ne)?C[ne]!==ee:1),M[ne]=ee}for(let V=0;V<p.length;V++){const ee=y[V],ne=p[V];S||(S=U.includes(ne)?D[U.indexOf(ne)]!==ee:1)}}return S&&(_.value=M),_.storeKeys=d,_.eventKeys=p,_.eventValues=y,T.stale=0,T.justSubscribed=!S,T.scope=t,r?_.value.unit:_.value},[w,h,y,t,g,l]);return LM(w,b,b)}function UM([e,t],r){let i,s,l,u,d=Yw;t?(i=t,l=e,u=[]):{fn:i,store:l,keys:u,defaultValue:s,updateFilter:d=Yw}=e,Xs.store(l)||yo("useStoreMap expects a store"),Array.isArray(u)||yo("useStoreMap expects an array as keys"),typeof i!="function"&&yo("useStoreMap expects a function");const h=Ft.useCallback(b=>Zx({unit:l,fn:b,scope:r}),[l,r]),p=Ft.useCallback(()=>p2(l,r),[l,r]),y=Ft.useRef(),g=Ft.useRef(),w=Ft.useRef(u);return $M(h,p,p,b=>{if(y.current!==b||!((_,T)=>{if(!_||!T||_.length!==T.length)return 0;let M=1;for(let S=0;S<_.length;S++)if(_[S]!==T[S]){M=0;break}return M})(w.current,u)){let _=i(b,u);_===void 0&&s!==void 0&&(_=s),y.current=b,w.current=u,_!==void 0&&(g.current=_)}return g.current},(b,_)=>!d(_,b))}function h2(e){const t=Ft.useContext(m2);return e&&!t&&yo("No scope found, consider adding <Provider> to app root"),t}function lt(e,t){return jM(e,h2(void 0))}function qw(e,t){return UM([e,t],h2(e==null?void 0:e.forceScope))}const yo=e=>{throw Error(e)};typeof window<"u"?Ft.useLayoutEffect:Ft.useEffect;const{useSyncExternalStore:LM}=DM,{useSyncExternalStoreWithSelector:$M}=zM,p2=(e,t)=>t?t.getState(e):e.getState(),Yw=(e,t)=>e!==t,m2=Ft.createContext(null),{Provider:I6}=m2;function hn(e){if(typeof e=="number")return(Math.abs(e*2654435761)>>>0).toString(16);if(typeof e=="boolean")return e?"1":"0";if(e===null)return"null";if(e===void 0)return"undefined";if(typeof e=="string"){let t=2166136261;for(let r=0;r<e.length;r++)t^=e.charCodeAt(r),t+=(t<<1)+(t<<4)+(t<<7)+(t<<8)+(t<<24),t=t>>>0;return t.toString(16)}if(Array.isArray(e)){let t=2166136261;for(let r=0;r<e.length;r++){t^=(r+1)*2654435761;const i=hn(e[r]);for(let s=0;s<i.length;s++)t^=i.charCodeAt(s),t*=16777619,t=t>>>0}return t.toString(16)}if(typeof e=="object"){let t=2166136261;const r=Object.keys(e).sort();for(let i=0;i<r.length;i++){const s=r[i],l=hn(s);t^=parseInt(l,16),t*=16777619,t=t>>>0;const u=hn(e[s]);t^=parseInt(u,16),t*=16777619,t=t>>>0}return t.toString(16)}return hn(String(e))}const pt={Remove:"remove",Replace:"replace",Add:"add"},g2=Symbol.for("__MUTATIVE_PROXY_DRAFT__"),HM=Symbol("__MUTATIVE_RAW_RETURN_SYMBOL__"),wu=Symbol.iterator,gn={mutable:"mutable",immutable:"immutable"},og={};function el(e,t){return e instanceof Map?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Bw(e,t){if(t in e){let r=Reflect.getPrototypeOf(e);for(;r;){const i=Reflect.getOwnPropertyDescriptor(r,t);if(i)return i;r=Reflect.getPrototypeOf(r)}}}function sg(e){return Object.getPrototypeOf(e)===Set.prototype}function lg(e){return Object.getPrototypeOf(e)===Map.prototype}function pn(e){var t;return(t=e.copy)!==null&&t!==void 0?t:e.original}function li(e){return!!De(e)}function De(e){return typeof e!="object"?null:e==null?void 0:e[g2]}function cg(e){var t;const r=De(e);return r?(t=r.copy)!==null&&t!==void 0?t:r.original:e}function Zn(e,t){if(!e||typeof e!="object")return!1;let r;return Object.getPrototypeOf(e)===Object.prototype||Array.isArray(e)||e instanceof Map||e instanceof Set||!!(t!=null&&t.mark)&&((r=t.mark(e,gn))===gn.immutable||typeof r=="function")}function v2(e,t=[]){if(Object.hasOwnProperty.call(e,"key")){const r=e.parent.copy,i=De(Hr(r,e.key));if(i!==null&&(i==null?void 0:i.original)!==e.original)return null;const s=e.parent.type===3,l=s?Array.from(e.parent.setMap.keys()).indexOf(e.key):e.key;if(!(s&&r.size>l||el(r,l)))return null;t.push(l)}if(e.parent)return v2(e.parent,t);t.reverse();try{IM(e.copy,t)}catch{return null}return t}function mi(e){return Array.isArray(e)?1:e instanceof Map?2:e instanceof Set?3:0}function Hr(e,t){return mi(e)===2?e.get(t):e[t]}function Tl(e,t,r){mi(e)===2?e.set(t,r):e[t]=r}function cp(e,t){const r=De(e);return(r?pn(r):e)[t]}function Lr(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function em(e){if(e)for(;e.finalities.revoke.length>0;)e.finalities.revoke.pop()()}function ei(e,t){return t?e:[""].concat(e).map(r=>{const i=`${r}`;return i.indexOf("/")===-1&&i.indexOf("~")===-1?i:i.replace(/~/g,"~0").replace(/\//g,"~1")}).join("/")}function IM(e,t){for(let r=0;r<t.length-1;r+=1){const i=t[r];if(e=Hr(mi(e)===3?Array.from(e):e,i),typeof e!="object")throw new Error(`Cannot resolve patch at '${t.join("/")}'.`)}return e}function qM(e){const t=Object.create(Object.getPrototypeOf(e));return Reflect.ownKeys(e).forEach(r=>{let i=Reflect.getOwnPropertyDescriptor(e,r);if(i.enumerable&&i.configurable&&i.writable){t[r]=e[r];return}i.writable||(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(i={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[r]}),Reflect.defineProperty(t,r,i)}),t}const YM=Object.prototype.propertyIsEnumerable;function y2(e,t){let r;if(Array.isArray(e))return Array.prototype.concat.call(e);if(e instanceof Set){if(!sg(e)){const i=Object.getPrototypeOf(e).constructor;return new i(e.values())}return Set.prototype.difference?Set.prototype.difference.call(e,new Set):new Set(e.values())}else if(e instanceof Map){if(!lg(e)){const i=Object.getPrototypeOf(e).constructor;return new i(e)}return new Map(e)}else if(t!=null&&t.mark&&(r=t.mark(e,gn),r!==void 0)&&r!==gn.mutable){if(r===gn.immutable)return qM(e);if(typeof r=="function"){if(t.enablePatches||t.enableAutoFreeze)throw new Error("You can't use mark and patches or auto freeze together.");return r()}throw new Error(`Unsupported mark result: ${r}`)}else if(typeof e=="object"&&Object.getPrototypeOf(e)===Object.prototype){const i={};return Object.keys(e).forEach(s=>{i[s]=e[s]}),Object.getOwnPropertySymbols(e).forEach(s=>{YM.call(e,s)&&(i[s]=e[s])}),i}else throw new Error("Please check mark() to ensure that it is a stable marker draftable function.")}function Xt(e){e.copy||(e.copy=y2(e.original,e.options))}function Ps(e){if(!Zn(e))return cg(e);if(Array.isArray(e))return e.map(Ps);if(e instanceof Map){const r=Array.from(e.entries()).map(([i,s])=>[i,Ps(s)]);if(!lg(e)){const i=Object.getPrototypeOf(e).constructor;return new i(r)}return new Map(r)}if(e instanceof Set){const r=Array.from(e).map(Ps);if(!sg(e)){const i=Object.getPrototypeOf(e).constructor;return new i(r)}return new Set(r)}const t=Object.create(Object.getPrototypeOf(e));for(const r in e)t[r]=Ps(e[r]);return t}function xu(e){return li(e)?Ps(e):e}function lr(e){var t;e.assignedMap=(t=e.assignedMap)!==null&&t!==void 0?t:new Map,e.operated||(e.operated=!0,e.parent&&lr(e.parent))}function Xw(){throw new Error("Cannot modify frozen object")}function co(e,t,r,i,s){{r=r??new WeakMap,i=i??[],s=s??[];const u=r.has(e)?r.get(e):e;if(i.length>0){const d=i.indexOf(u);if(u&&typeof u=="object"&&d!==-1)throw i[0]===u?new Error("Forbids circular reference"):new Error(`Forbids circular reference: ~/${s.slice(0,d).map((h,p)=>{if(typeof h=="symbol")return`[${h.toString()}]`;const y=i[p];return typeof h=="object"&&(y instanceof Map||y instanceof Set)?Array.from(y.keys()).indexOf(h):h}).join("/")}`);i.push(u),s.push(t)}else i.push(u)}if(Object.isFrozen(e)||li(e)){i.pop(),s.pop();return}switch(mi(e)){case 2:for(const[d,h]of e)co(d,d,r,i,s),co(h,d,r,i,s);e.set=e.clear=e.delete=Xw;break;case 3:for(const d of e)co(d,d,r,i,s);e.add=e.clear=e.delete=Xw;break;case 1:Object.freeze(e);let u=0;for(const d of e)co(d,u,r,i,s),u+=1;break;default:Object.freeze(e),Object.keys(e).forEach(d=>{const h=e[d];co(h,d,r,i,s)})}i.pop(),s.pop()}function ug(e,t){const r=mi(e);if(r===0)Reflect.ownKeys(e).forEach(i=>{t(i,e[i],e)});else if(r===1){let i=0;for(const s of e)t(i,s,e),i+=1}else e.forEach((i,s)=>t(s,i,e))}function b2(e,t,r){if(li(e)||!Zn(e,r)||t.has(e)||Object.isFrozen(e))return;const i=e instanceof Set,s=i?new Map:void 0;if(t.add(e),ug(e,(l,u)=>{var d;if(li(u)){const h=De(u);Xt(h);const p=!((d=h.assignedMap)===null||d===void 0)&&d.size||h.operated?h.copy:h.original;Tl(i?s:e,l,p)}else b2(u,t,r)}),s){const l=e,u=Array.from(l);l.clear(),u.forEach(d=>{l.add(s.has(d)?s.get(d):d)})}}function BM(e,t){const r=e.type===3?e.setMap:e.copy;e.finalities.revoke.length>1&&e.assignedMap.get(t)&&r&&b2(Hr(r,t),e.finalities.handledSet,e.options)}function tm(e){e.type===3&&e.copy&&(e.copy.clear(),e.setMap.forEach(t=>{e.copy.add(cg(t))}))}function nm(e,t,r,i){if(e.operated&&e.assignedMap&&e.assignedMap.size>0&&!e.finalized){if(r&&i){const l=v2(e);l&&t(e,l,r,i)}e.finalized=!0}}function dg(e,t,r,i){const s=De(r);s&&(s.callbacks||(s.callbacks=[]),s.callbacks.push((l,u)=>{var d;const h=e.type===3?e.setMap:e.copy;if(Lr(Hr(h,t),r)){let p=s.original;s.copy&&(p=s.copy),tm(e),nm(e,i,l,u),e.options.enableAutoFreeze&&(e.options.updatedValues=(d=e.options.updatedValues)!==null&&d!==void 0?d:new WeakMap,e.options.updatedValues.set(p,s.original)),Tl(h,t,p)}}),e.options.enableAutoFreeze&&s.finalities!==e.finalities&&(e.options.enableAutoFreeze=!1)),Zn(r,e.options)&&e.finalities.draft.push(()=>{const l=e.type===3?e.setMap:e.copy;Lr(Hr(l,t),r)&&BM(e,t)})}function XM(e,t,r,i,s){let{original:l,assignedMap:u,options:d}=e,h=e.copy;h.length<l.length&&([l,h]=[h,l],[r,i]=[i,r]);for(let p=0;p<l.length;p+=1)if(u.get(p.toString())&&h[p]!==l[p]){const y=t.concat([p]),g=ei(y,s);r.push({op:pt.Replace,path:g,value:xu(h[p])}),i.push({op:pt.Replace,path:g,value:xu(l[p])})}for(let p=l.length;p<h.length;p+=1){const y=t.concat([p]),g=ei(y,s);r.push({op:pt.Add,path:g,value:xu(h[p])})}if(l.length<h.length){const{arrayLengthAssignment:p=!0}=d.enablePatches;if(p){const y=t.concat(["length"]),g=ei(y,s);i.push({op:pt.Replace,path:g,value:l.length})}else for(let y=h.length;l.length<y;y-=1){const g=t.concat([y-1]),w=ei(g,s);i.push({op:pt.Remove,path:w})}}}function FM({original:e,copy:t,assignedMap:r},i,s,l,u){r.forEach((d,h)=>{const p=Hr(e,h),y=xu(Hr(t,h)),g=d?el(e,h)?pt.Replace:pt.Add:pt.Remove;if(Lr(p,y)&&g===pt.Replace)return;const w=i.concat(h),b=ei(w,u);s.push(g===pt.Remove?{op:g,path:b}:{op:g,path:b,value:y}),l.push(g===pt.Add?{op:pt.Remove,path:b}:g===pt.Remove?{op:pt.Add,path:b,value:p}:{op:pt.Replace,path:b,value:p})})}function PM({original:e,copy:t},r,i,s,l){let u=0;e.forEach(d=>{if(!t.has(d)){const h=r.concat([u]),p=ei(h,l);i.push({op:pt.Remove,path:p,value:d}),s.unshift({op:pt.Add,path:p,value:d})}u+=1}),u=0,t.forEach(d=>{if(!e.has(d)){const h=r.concat([u]),p=ei(h,l);i.push({op:pt.Add,path:p,value:d}),s.unshift({op:pt.Remove,path:p,value:d})}u+=1})}function gl(e,t,r,i){const{pathAsArray:s=!0}=e.options.enablePatches;switch(e.type){case 0:case 2:return FM(e,t,r,i,s);case 1:return XM(e,t,r,i,s);case 3:return PM(e,t,r,i,s)}}const Iu=(e,t,r=!1)=>{if(typeof e=="object"&&e!==null&&(!Zn(e,t)||r))throw new Error("Strict mode: Mutable data cannot be accessed directly, please use 'unsafe(callback)' wrap.")},rm={get size(){return pn(De(this)).size},has(e){return pn(De(this)).has(e)},set(e,t){const r=De(this),i=pn(r);return(!i.has(e)||!Lr(i.get(e),t))&&(Xt(r),lr(r),r.assignedMap.set(e,!0),r.copy.set(e,t),dg(r,e,t,gl)),this},delete(e){if(!this.has(e))return!1;const t=De(this);return Xt(t),lr(t),t.original.has(e)?t.assignedMap.set(e,!1):t.assignedMap.delete(e),t.copy.delete(e),!0},clear(){const e=De(this);if(this.size){Xt(e),lr(e),e.assignedMap=new Map;for(const[t]of e.original)e.assignedMap.set(t,!1);e.copy.clear()}},forEach(e,t){const r=De(this);pn(r).forEach((i,s)=>{e.call(t,this.get(s),s,this)})},get(e){var t,r;const i=De(this),s=pn(i).get(e),l=((r=(t=i.options).mark)===null||r===void 0?void 0:r.call(t,s,gn))===gn.mutable;if(i.options.strict&&Iu(s,i.options,l),l||i.finalized||!Zn(s,i.options)||s!==i.original.get(e))return s;const u=og.createDraft({original:s,parentDraft:i,key:e,finalities:i.finalities,options:i.options});return Xt(i),i.copy.set(e,u),u},keys(){return pn(De(this)).keys()},values(){const e=this.keys();return{[wu]:()=>this.values(),next:()=>{const t=e.next();return t.done?t:{done:!1,value:this.get(t.value)}}}},entries(){const e=this.keys();return{[wu]:()=>this.entries(),next:()=>{const t=e.next();if(t.done)return t;const r=this.get(t.value);return{done:!1,value:[t.value,r]}}}},[wu](){return this.entries()}},VM=Reflect.ownKeys(rm),Fw=(e,t,{isValuesIterator:r})=>()=>{var i,s;const l=t.next();if(l.done)return l;const u=l.value;let d=e.setMap.get(u);const h=De(d),p=((s=(i=e.options).mark)===null||s===void 0?void 0:s.call(i,d,gn))===gn.mutable;if(e.options.strict&&Iu(u,e.options,p),!p&&!h&&Zn(u,e.options)&&!e.finalized&&e.original.has(u)){const y=og.createDraft({original:u,parentDraft:e,key:u,finalities:e.finalities,options:e.options});e.setMap.set(u,y),d=y}else h&&(d=h.proxy);return{done:!1,value:r?d:[d,d]}},qu={get size(){return De(this).setMap.size},has(e){const t=De(this);if(t.setMap.has(e))return!0;Xt(t);const r=De(e);return!!(r&&t.setMap.has(r.original))},add(e){const t=De(this);return this.has(e)||(Xt(t),lr(t),t.assignedMap.set(e,!0),t.setMap.set(e,e),dg(t,e,e,gl)),this},delete(e){if(!this.has(e))return!1;const t=De(this);Xt(t),lr(t);const r=De(e);return r&&t.setMap.has(r.original)?(t.assignedMap.set(r.original,!1),t.setMap.delete(r.original)):(!r&&t.setMap.has(e)?t.assignedMap.set(e,!1):t.assignedMap.delete(e),t.setMap.delete(e))},clear(){if(!this.size)return;const e=De(this);Xt(e),lr(e);for(const t of e.original)e.assignedMap.set(t,!1);e.setMap.clear()},values(){const e=De(this);Xt(e);const t=e.setMap.keys();return{[Symbol.iterator]:()=>this.values(),next:Fw(e,t,{isValuesIterator:!0})}},entries(){const e=De(this);Xt(e);const t=e.setMap.keys();return{[Symbol.iterator]:()=>this.entries(),next:Fw(e,t,{isValuesIterator:!1})}},keys(){return this.values()},[wu](){return this.values()},forEach(e,t){const r=this.values();let i=r.next();for(;!i.done;)e.call(t,i.value,i.value,this),i=r.next()}};Set.prototype.difference&&Object.assign(qu,{intersection(e){return Set.prototype.intersection.call(new Set(this.values()),e)},union(e){return Set.prototype.union.call(new Set(this.values()),e)},difference(e){return Set.prototype.difference.call(new Set(this.values()),e)},symmetricDifference(e){return Set.prototype.symmetricDifference.call(new Set(this.values()),e)},isSubsetOf(e){return Set.prototype.isSubsetOf.call(new Set(this.values()),e)},isSupersetOf(e){return Set.prototype.isSupersetOf.call(new Set(this.values()),e)},isDisjointFrom(e){return Set.prototype.isDisjointFrom.call(new Set(this.values()),e)}});const GM=Reflect.ownKeys(qu),w2=new WeakSet,x2={get(e,t,r){var i,s;const l=(i=e.copy)===null||i===void 0?void 0:i[t];if(l&&w2.has(l))return l;if(t===g2)return e;let u;if(e.options.mark){const p=t==="size"&&(e.original instanceof Map||e.original instanceof Set)?Reflect.get(e.original,t):Reflect.get(e.original,t,r);if(u=e.options.mark(p,gn),u===gn.mutable)return e.options.strict&&Iu(p,e.options,!0),p}const d=pn(e);if(d instanceof Map&&VM.includes(t)){if(t==="size")return Object.getOwnPropertyDescriptor(rm,"size").get.call(e.proxy);const p=rm[t];if(p)return p.bind(e.proxy)}if(d instanceof Set&&GM.includes(t)){if(t==="size")return Object.getOwnPropertyDescriptor(qu,"size").get.call(e.proxy);const p=qu[t];if(p)return p.bind(e.proxy)}if(!el(d,t)){const p=Bw(d,t);return p?"value"in p?p.value:(s=p.get)===null||s===void 0?void 0:s.call(e.proxy):void 0}const h=d[t];if(e.options.strict&&Iu(h,e.options),e.finalized||!Zn(h,e.options))return h;if(h===cp(e.original,t)){if(Xt(e),e.copy[t]=fg({original:e.original[t],parentDraft:e,key:e.type===1?Number(t):t,finalities:e.finalities,options:e.options}),typeof u=="function"){const p=De(e.copy[t]);return Xt(p),lr(p),p.copy}return e.copy[t]}return h},set(e,t,r){var i;if(e.type===3||e.type===2)throw new Error("Map/Set draft does not support any property assignment.");let s;if(e.type===1&&t!=="length"&&!(Number.isInteger(s=Number(t))&&s>=0&&(t===0||s===0||String(s)===String(t))))throw new Error("Only supports setting array indices and the 'length' property.");const l=Bw(pn(e),t);if(l!=null&&l.set)return l.set.call(e.proxy,r),!0;const u=cp(pn(e),t),d=De(u);return d&&Lr(d.original,r)?(e.copy[t]=r,e.assignedMap=(i=e.assignedMap)!==null&&i!==void 0?i:new Map,e.assignedMap.set(t,!1),!0):(Lr(r,u)&&(r!==void 0||el(e.original,t))||(Xt(e),lr(e),el(e.original,t)&&Lr(r,e.original[t])?e.assignedMap.delete(t):e.assignedMap.set(t,!0),e.copy[t]=r,dg(e,t,r,gl)),!0)},has(e,t){return t in pn(e)},ownKeys(e){return Reflect.ownKeys(pn(e))},getOwnPropertyDescriptor(e,t){const r=pn(e),i=Reflect.getOwnPropertyDescriptor(r,t);return i&&{writable:!0,configurable:e.type!==1||t!=="length",enumerable:i.enumerable,value:r[t]}},getPrototypeOf(e){return Reflect.getPrototypeOf(e.original)},setPrototypeOf(){throw new Error("Cannot call 'setPrototypeOf()' on drafts")},defineProperty(){throw new Error("Cannot call 'defineProperty()' on drafts")},deleteProperty(e,t){var r;return e.type===1?x2.set.call(this,e,t,void 0,e.proxy):(cp(e.original,t)!==void 0||t in e.original?(Xt(e),lr(e),e.assignedMap.set(t,!1)):(e.assignedMap=(r=e.assignedMap)!==null&&r!==void 0?r:new Map,e.assignedMap.delete(t)),e.copy&&delete e.copy[t],!0)}};function fg(e){const{original:t,parentDraft:r,key:i,finalities:s,options:l}=e,u=mi(t),d={type:u,finalized:!1,parent:r,original:t,copy:null,proxy:null,finalities:s,options:l,setMap:u===3?new Map(t.entries()):void 0};(i||"key"in e)&&(d.key=i);const{proxy:h,revoke:p}=Proxy.revocable(u===1?Object.assign([],d):d,x2);if(s.revoke.push(p),w2.add(h),d.proxy=h,r){const y=r;y.finalities.draft.push((g,w)=>{var b,_;const T=De(h);let M=y.type===3?y.setMap:y.copy;const S=Hr(M,i),C=De(S);if(C){let A=C.original;C.operated&&(A=cg(S)),tm(C),nm(C,gl,g,w),y.options.enableAutoFreeze&&(y.options.updatedValues=(b=y.options.updatedValues)!==null&&b!==void 0?b:new WeakMap,y.options.updatedValues.set(A,C.original)),Tl(M,i,A)}(_=T.callbacks)===null||_===void 0||_.forEach(A=>{A(g,w)})})}else{const y=De(h);y.finalities.draft.push((g,w)=>{tm(y),nm(y,gl,g,w)})}return h}og.createDraft=fg;function QM(e,t,r,i,s){var l;const u=De(e),d=(l=u==null?void 0:u.original)!==null&&l!==void 0?l:e,h=!!t.length;if(u!=null&&u.operated)for(;u.finalities.draft.length>0;)u.finalities.draft.pop()(r,i);const p=h?t[0]:u?u.operated?u.copy:u.original:e;return u&&em(u),s&&co(p,p,u==null?void 0:u.options.updatedValues),[p,r&&h?[{op:pt.Replace,path:[],value:t[0]}]:r,i&&h?[{op:pt.Replace,path:[],value:d}]:i]}function WM(e,t){var r;const i={draft:[],revoke:[],handledSet:new WeakSet};let s,l;t.enablePatches&&(s=[],l=[]);const d=((r=t.mark)===null||r===void 0?void 0:r.call(t,e,gn))===gn.mutable||!Zn(e,t)?e:fg({original:e,parentDraft:null,finalities:i,options:t});return[d,(h=[])=>{const[p,y,g]=QM(d,h,s,l,t.enableAutoFreeze);return t.enablePatches?[p,y,g]:p}]}function am(e){const{rootDraft:t,value:r,useRawReturn:i=!1,isRoot:s=!0}=e;ug(r,(l,u,d)=>{const h=De(u);if(h&&t&&h.finalities===t.finalities){e.isContainDraft=!0;const p=h.original;if(d instanceof Set){const y=Array.from(d);d.clear(),y.forEach(g=>d.add(l===g?p:g))}else Tl(d,l,p)}else typeof u=="object"&&u!==null&&(e.value=u,e.isRoot=!1,am(e))}),s&&(e.isContainDraft||console.warn("The return value does not contain any draft, please use 'rawReturn()' to wrap the return value to improve performance."),i&&console.warn("The return value contains drafts, please don't use 'rawReturn()' to wrap the return value."))}function _2(e){var t;const r=De(e);if(!Zn(e,r==null?void 0:r.options))return e;const i=mi(e);if(r&&!r.operated)return r.original;let s;function l(){s=i===2?lg(e)?new Map(e):new(Object.getPrototypeOf(e)).constructor(e):i===3?Array.from(r.setMap.values()):y2(e,r==null?void 0:r.options)}if(r){r.finalized=!0;try{l()}finally{r.finalized=!1}}else s=e;if(ug(s,(u,d)=>{if(r&&Lr(Hr(r.original,u),d))return;const h=_2(d);h!==d&&(s===e&&l(),Tl(s,u,h))}),i===3){const u=(t=r==null?void 0:r.original)!==null&&t!==void 0?t:s;return sg(u)?new Set(s):new(Object.getPrototypeOf(u)).constructor(s)}return s}function Pw(e){if(!li(e))throw new Error(`current() is only used for Draft, parameter: ${e}`);return _2(e)}const ZM=e=>function t(r,i,s){var l,u,d;if(typeof r=="function"&&typeof i!="function")return function(D,...P){return t(D,V=>r.call(this,V,...P),i)};const h=r,p=i;let y=s;if(typeof i!="function"&&(y=i),y!==void 0&&Object.prototype.toString.call(y)!=="[object Object]")throw new Error(`Invalid options: ${y}, 'options' should be an object.`);y=Object.assign(Object.assign({},e),y);const g=li(h)?Pw(h):h,w=Array.isArray(y.mark)?(D,P)=>{for(const V of y.mark){if(typeof V!="function")throw new Error(`Invalid mark: ${V}, 'mark' should be a function.`);const ee=V(D,P);if(ee)return ee}}:y.mark,b=(l=y.enablePatches)!==null&&l!==void 0?l:!1,_=(u=y.strict)!==null&&u!==void 0?u:!1,M={enableAutoFreeze:(d=y.enableAutoFreeze)!==null&&d!==void 0?d:!1,mark:w,strict:_,enablePatches:b};if(!Zn(g,M)&&typeof g=="object"&&g!==null)throw new Error("Invalid base state: create() only supports plain objects, arrays, Set, Map or using mark() to mark the state as immutable.");const[S,C]=WM(g,M);if(typeof i!="function"){if(!Zn(g,M))throw new Error("Invalid base state: create() only supports plain objects, arrays, Set, Map or using mark() to mark the state as immutable.");return[S,C]}let A;try{A=p(S)}catch(D){throw em(De(S)),D}const U=D=>{const P=De(S);if(!li(D)){if(D!==void 0&&!Lr(D,S)&&(P!=null&&P.operated))throw new Error("Either the value is returned as a new non-draft value, or only the draft is modified without returning any value.");const ee=D==null?void 0:D[HM];if(ee){const ne=ee[0];return M.strict&&typeof D=="object"&&D!==null&&am({rootDraft:P,value:D,useRawReturn:!0}),C([ne])}if(D!==void 0)return typeof D=="object"&&D!==null&&am({rootDraft:P,value:D}),C([D])}if(D===S||D===void 0)return C([]);const V=De(D);if(M===V.options){if(V.operated)throw new Error("Cannot return a modified child draft.");return C([Pw(D)])}return C([D])};return A instanceof Promise?A.then(U,D=>{throw em(De(S)),D}):U(A)},im=ZM();Object.prototype.constructor.toString();function S2(e,t){const r=Object.keys(e),i=Object.keys(t);return r.length===i.length&&Object.keys(e).every(s=>t.hasOwnProperty(s))}function Vw(e,t){return Object.keys(e).length===Object.keys(t).length&&Object.keys(e).every(r=>t.hasOwnProperty(r)&&e[r]===t[r])}function _u(e,t){return typeof e!="object"||typeof t!="object"||e===null||t===null?e===t:S2(e,t)?Object.keys(e).every(r=>_u(e[r],t[r])):!1}function hg(e){if(!Vs(e))return e;const t={};for(const[r,i]of Object.entries(e))i!==void 0&&(t[r]=i);return t}function T2(e,t){if(!Vs(e)||!Vs(t))return t;const r=Object.assign({},e);for(const i of Object.keys(t)){if(t[i]===void 0)continue;if(t[i]===null){delete r[i];continue}const s=Vs(e[i])&&Vs(t[i]);r[i]=s?T2(e[i],t[i]):t[i]}return r}function Vs(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function KM(e,t,r){if(!e||t.length===0)return;let i=e||{};for(let l=0;l<t.length-1;l++){const u=t[l];(!(u in i)||typeof i[u]!="object")&&(i[u]=typeof t[l+1]=="number"?[]:{}),i=i[u]}const s=t[t.length-1];Array.isArray(i)&&typeof s=="number"?i.splice(s,0,r):i[s]=r}function Gw(e,t,r){if(!e||t.length===0)return;let i=e||{};for(let s=0;s<t.length-1;s++){const l=t[s];(!(l in i)||typeof i[l]!="object")&&(i[l]=typeof t[s+1]=="number"?[]:{}),i=i[l]}i[t[t.length-1]]=r}function k2(e,t){if(!e||t.length===0)return;const[r,...i]=t;if(r in e){if(i.length===0){Array.isArray(e)?e.splice(r,1):delete e[r];return}k2(e[r],i),JM(e[r])&&delete e[r]}}function JM(e){return e&&Object.keys(e).length===0}function e5(e){return new Date(e)}function t5(e){return new Date(e+"Z")}function n5(e){return new Date(e+"T00:00:00Z")}function r5(e){const[t,r]=e.split(" ");return new Date(t+"T"+r+"Z")}function a5(e){const[t,r]=e.split(" ");return new Date(t+"T"+r+"Z")}function i5(e){return new Date(e)}function o5(e){const t=/^(\w{3}) (\w{3}) (\d{2}) (\d{4})$/;if(!e.match(t))throw new Error(`Unable to parse \`${e}\` as a date.`);const i=new Date(e+" UTC");return new Date(Date.UTC(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate(),0,0,0,0))}function s5(e){const t=/^(.+T.+)([+-])(\d{2})$/,r=e.match(t);if(r){const[,i,s,l]=r,u=`${i}${s}${l}:00`;return new Date(u)}return null}const l5=[a5,o5,i5,n5,t5,e5,s5,r5];function c5(e,t){try{const r=e(t);return r instanceof Date&&!isNaN(r.getTime())?r:null}catch{return null}}function E2(e){for(const t of l5){const r=c5(t,e);if(r)return r}return null}function u5(e){try{const t=JSON.parse(e);return typeof t=="string"?E2(t):null}catch{return null}}function ad(e){if(e instanceof Date)return e;if(typeof e=="string"){const t=E2(e)||u5(e);if(!t)throw new Error(`Unable to parse \`${e}\` as a date.`);return t}else if(typeof e=="number")return new Date(e);throw new Error(`Invalid date value \`${e}\`. Expected a date, number, or string, got type ${typeof e}.`)}function d5(e){return e.cardinality==="one"}function pg(e){return e["value-type"]==="ref"}function mg(e){return e["value-type"]==="blob"}function kl(e,t){return e[t]}function id(e,t){return t.reduce((r,i)=>r&&r.get(i),e)}function Xn(e,t){if(t.length===0)throw new Error("path must have at least one element");if(t.length===1){e.delete(t[0]);return}const[r,...i]=t;e.has(r)&&Xn(e.get(r),i)}function Kt(e,t,r){if(t.length===0)throw new Error("path must have at least one element");if(t.length===1){e.set(t[0],r);return}const[i,...s]=t;let l=e.get(i);l||(l=new Map,e.set(i,l)),Kt(l,s,r)}function C2(e,t,r){const i=new Map,s=new Map,l=new Map;for(const u of t){let[d,h,p,y]=u;const g=kl(e,h);if(!g){console.warn("no such attr",d,e);continue}g["checked-data-type"]==="date"&&r&&(p=ad(p),u[2]=p),pg(g)&&Kt(l,[p,h,d],u),Kt(i,[d,h,p],u),Kt(s,[h,d,p],u)}return{eav:i,aev:s,vae:l}}function M2(e){const t=new Map,r=new Map,i=new Map,s=new Map;for(const l of Object.values(e)){const u=l["forward-identity"],[d,h,p]=u,y=l["reverse-identity"];if(Kt(i,[h,p],l),mg(l)&&Kt(t,[h,p],l),l["primary?"]&&Kt(r,[h],l),y){const[g,w,b]=y;Kt(s,[w,b],l)}}return{blobAttrs:t,primaryKeys:r,forwardIdents:i,revIdents:s}}function f5(e){return{__type:e.__type,attrs:e.attrs,triples:Jt(e.eav,3),cardinalityInference:e.cardinalityInference,linkIndex:e.linkIndex,useDateObjects:e.useDateObjects}}function h5(e){return om(e.attrs,e.triples,e.cardinalityInference,e.linkIndex,e.useDateObjects)}function gg(e){e.attrIndexes=M2(e.attrs)}function om(e,t,r,i,s){const l=C2(e,t,s);return l.useDateObjects=s,l.attrs=e,l.attrIndexes=M2(e),l.cardinalityInference=r,l.linkIndex=i,l.__type="store",l}function El(e,t){var r,i;let s;if(Array.isArray(t[0])){const[u,d]=t[0],h=e.aev.get(u);if(!h)return null;s=(r=Jt(h,2).find(y=>y[2]===d))===null||r===void 0?void 0:r[0]}else s=t[0];if(!s)return null;const l=t[2];if(Array.isArray(l)&&l.length===2&&e.aev.get(l[0])){const[u,d]=l,h=e.aev.get(u);if(!h)return null;const y=(i=Jt(h,2).find(T=>T[2]===d))===null||i===void 0?void 0:i[0];if(!y)return null;const[g,w,b,..._]=t;return[s,w,y,..._]}else{const[u,...d]=t;return[s,...d]}}function p5(e,t){const r=El(e,t);if(!r)return;const[i,s,l]=r,u=kl(e.attrs,s);u&&(Xn(e.eav,[i,s,l]),Xn(e.aev,[s,i,l]),pg(u)&&Xn(e.vae,[l,s,i]))}let m5=0;function O2(e,t,r){const[i,s,l]=r;let u;const d=id(e.ea,[i,s,l]);return d&&(u=d[3]),u||Date.now()*10+m5++}function g5(e,t){var r;const i=El(e,t);if(!i)return;let[s,l,u]=i;const d=kl(e.attrs,l);if(!d)return;d["checked-data-type"]==="date"&&e.useDateObjects&&(u=ad(u));const h=id(e.eav,[s,l,u]),p=(r=h==null?void 0:h[3])!==null&&r!==void 0?r:O2(e,d,i),y=[s,l,u,p];d5(d)?(Kt(e.eav,[s,l],new Map([[u,y]])),Kt(e.aev,[l,s],new Map([[u,y]]))):(Kt(e.eav,[s,l,u],y),Kt(e.aev,[l,s,u],y)),pg(d)&&Kt(e.vae,[u,l,s],y)}function v5(e,t){var r;const i=El(e,t);if(!i)return;const[s,l,u]=i,d=kl(e.attrs,l);if(!d)return;if(!mg(d))throw new Error("merge operation is not supported for links");const h=id(e.eav,[s,l]);if(!h)return;const p=(r=h.values().next())===null||r===void 0?void 0:r.value;if(!p)return;const y=p[2],g=T2(y,u),w=[s,l,g,O2(e,d,p)];Kt(e.eav,[s,l],new Map([[g,w]]))}function sm(e,t){var r,i;const[s,l]=t,u=El(e,[s]);if(!u)return;const[d]=u,h=e.eav.get(d);if(h){for(const y of h.keys()){const g=e.attrs[y];g&&g["on-delete-reverse"]==="cascade"&&Jt(h.get(y),1).forEach(([w,b,_])=>{var T;return sm(e,[_,(T=g["reverse-identity"])===null||T===void 0?void 0:T[1]])}),(!l||!g||((r=g["forward-identity"])===null||r===void 0?void 0:r[1])===l)&&(Xn(e.aev,[y,d]),Xn(e.eav,[d,y]))}h.size===0&&Xn(e.eav,[d])}const p=e.vae.get(d)&&Jt(e.vae.get(d),2);p&&p.forEach(y=>{var g,w,b;const[_,T,M]=y,S=e.attrs[T];(!l||!S||((g=S["reverse-identity"])===null||g===void 0?void 0:g[1])===l)&&(Xn(e.eav,[_,T,M]),Xn(e.aev,[T,_,M]),Xn(e.vae,[M,T,_])),S&&S["on-delete"]==="cascade"&&((w=S["reverse-identity"])===null||w===void 0?void 0:w[1])===l&&sm(e,[_,(b=S["forward-identity"])===null||b===void 0?void 0:b[1]])}),((i=e.vae.get(d))===null||i===void 0?void 0:i.size)===0&&Xn(e.vae,[d])}function N2(e,t){const r=C2(e.attrs,t,e.useDateObjects);Object.keys(r).forEach(i=>{e[i]=r[i]})}function y5(e,[t]){e.attrs[t.id]=t,gg(e)}function A2(e){return Jt(e.eav,3)}function b5(e,[t]){if(!e.attrs[t])return;const r=A2(e).filter(([i,s])=>s!==t);delete e.attrs[t],gg(e),N2(e,r)}function w5(e,[t]){const r=e.attrs[t.id];r&&(e.attrs[t.id]=Object.assign(Object.assign({},r),t),gg(e),N2(e,A2(e)))}function x5(e,t){const[r,...i]=t;switch(r){case"add-triple":g5(e,i);break;case"deep-merge-triple":v5(e,i);break;case"retract-triple":p5(e,i);break;case"delete-entity":sm(e,i);break;case"add-attr":y5(e,i);break;case"delete-attr":b5(e,i);break;case"update-attr":w5(e,i);break;case"rule-params":break;default:throw new Error(`unhandled transaction action: ${r}`)}}function Jt(e,t,r=[]){if(!e||t===0)return r;if(t===1){for(const i of e.values())r.push(i);return r}for(const i of e.values())Jt(i,t-1,r);return r}function ru(e,t,r){var i,s;const l=[];if(r!=null&&r.hasOwnProperty("$not")){for(const d of t.keys())r.$not!==d&&l.push(t.get(d));return l}if(r!=null&&r.hasOwnProperty("$isNull")){const{attrId:d,isNull:h,reverse:p}=r.$isNull;if(p)for(const y of t.keys()){const g=e.vae.get(y),w=!g||((i=g.get(d))===null||i===void 0?void 0:i.get(null))||!g.get(d);(h?w:!w)&&l.push(t.get(y))}else{const y=e.aev.get(d);for(const g of t.keys()){const w=!y||((s=y.get(g))===null||s===void 0?void 0:s.get(null))||!y.get(g);(h?w:!w)&&l.push(t.get(g))}}return l}if(r!=null&&r.$comparator)return Jt(t,1).filter(r.$op);const u=r.in||r.$in||[r];for(const d of u){const h=t.get(d);h&&l.push(h)}return l}function _5(e,t,r){let i="";return e!==void 0&&(i+="e"),t!==void 0&&(i+="a"),r!==void 0&&(i+="v"),i}function S5(e,[t,r,i]){var s,l;switch(_5(t,r,i)){case"e":{const d=e.eav.get(t);return Jt(d,2)}case"ea":{const d=(s=e.eav.get(t))===null||s===void 0?void 0:s.get(r);return Jt(d,1)}case"eav":{const d=(l=e.eav.get(t))===null||l===void 0?void 0:l.get(r);return d?ru(e,d,i):[]}case"ev":{const d=e.eav.get(t);if(!d)return[];const h=[];for(const p of d.values())h.push(...ru(e,p,i));return h}case"a":{const d=e.aev.get(r);return Jt(d,2)}case"av":{const d=e.aev.get(r);if(!d)return[];const h=[];for(const p of d.values())h.push(...ru(e,p,i));return h}case"v":{const d=[];for(const h of e.eav.values())for(const p of h.values())d.push(...ru(e,p,i));return d}default:return Jt(e.eav,3)}}function T5(e,t,r){var i;const s={};for(const[l,u]of t.entries()){const d=(i=e.eav.get(r))===null||i===void 0?void 0:i.get(u.id),h=Jt(d,1);for(const p of h)s[l]=p[2]}return s}function ko(e,t,r){var i;return(i=e.attrIndexes.forwardIdents.get(t))===null||i===void 0?void 0:i.get(r)}function z2(e,t,r){var i;return(i=e.attrIndexes.revIdents.get(t))===null||i===void 0?void 0:i.get(r)}function k5(e,t){return e.attrIndexes.blobAttrs.get(t)}function E5(e,t){var r;const i=e.attrIndexes.primaryKeys.get(t);return i||((r=e.attrIndexes.forwardIdents.get(t))===null||r===void 0?void 0:r.get("id"))}function C5(e,t){const r=El(e,t);if(!r)return;const[i,s,l]=r;if(kl(e.attrs,s))return id(e.eav,[i,s])}function M5(e,t){const r=t.filter(([i,...s])=>{var l;if(i!=="add-triple"&&i!=="deep-merge-triple")return!0;const u=(l=s[3])===null||l===void 0?void 0:l.mode;if(u!=="create"&&u!=="update")return!0;const d=C5(e,s);return!(u==="create"&&d||u==="update"&&!d)});return im(e,i=>{r.forEach(s=>{x5(i,s)})})}function O5(e){return typeof e=="string"&&e.startsWith("?")}function N5(e,t,r){if(r.hasOwnProperty(e)){const i=r[e];return R2(i,t,r)}return Object.assign(Object.assign({},r),{[e]:t})}function Qw(e,t,r){return e===t?r:null}function A5(e){switch(typeof e){case"string":return e.startsWith("?")?N5:Qw;default:return Qw}}const z5=["in","$in","$not","$isNull","$comparator"];function R5(e){for(const t of z5)if(e.hasOwnProperty(t))return!0;return!1}function R2(e,t,r){return r?typeof e=="object"?R5(e)?r:null:A5(e)(e,t,r):null}function D5(e,t,r){return e.reduce((i,s,l)=>{const u=t[l];return R2(s,u,i)},r)}function j5(e,t,r){return $5(e,t,r).map(i=>D5(t,i,r)).filter(i=>i)}function U5(e,t,r){return t.or?t.or.patterns.flatMap(i=>lm(e,i,r)):t.and?t.and.patterns.reduce((i,s)=>lm(e,s,i),r):r.flatMap(i=>j5(e,t,i))}function lm(e,t,r=[{}]){return t.reduce((i,s)=>U5(e,s,i),r)}function vg(e,t){return Array.isArray(t)?t.map(r=>vg(e,r)):O5(t)?e[t]:t}function L5(e,{find:t,where:r}){return lm(e,r).map(s=>vg(s,t))}function $5(e,t,r){return S5(e,vg(r,t))}const Dt=[];for(let e=0;e<256;++e)Dt.push((e+256).toString(16).slice(1));function H5(e,t=0){return(Dt[e[t+0]]+Dt[e[t+1]]+Dt[e[t+2]]+Dt[e[t+3]]+"-"+Dt[e[t+4]]+Dt[e[t+5]]+"-"+Dt[e[t+6]]+Dt[e[t+7]]+"-"+Dt[e[t+8]]+Dt[e[t+9]]+"-"+Dt[e[t+10]]+Dt[e[t+11]]+Dt[e[t+12]]+Dt[e[t+13]]+Dt[e[t+14]]+Dt[e[t+15]]).toLowerCase()}let up;const I5=new Uint8Array(16);function q5(){if(!up){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");up=crypto.getRandomValues.bind(crypto)}return up(I5)}const Y5=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Ww={randomUUID:Y5};function B5(e,t,r){var s;if(Ww.randomUUID&&!e)return Ww.randomUUID();e=e||{};const i=e.random??((s=e.rng)==null?void 0:s.call(e))??q5();if(i.length<16)throw new Error("Random bytes length must be >= 16");return i[6]=i[6]&15|64,i[8]=i[8]&63|128,H5(i)}function Zw(e){const t=e.replace(/-/g,""),r=[];for(let i=0;i<t.length;i+=2)r.push(parseInt(t.substring(i,i+2),16));return r}function X5(e,t){for(let r=0;r<e.length;r++){if(e[r]<t[r])return-1;if(e[r]>t[r])return 1}return 0}function F5(e,t){return X5(Zw(e),Zw(t))}function tt(){return B5()}let P5=0;function tl(e){return od(`_${e}`,P5++)}function od(e,t){return`?${e}-${t}`}class Eo extends Error{constructor(t){super(t),this.name="AttrNotFoundError"}}function V5(e,t){const r=E5(e,t);if(!r)throw new Eo(`Could not find id attr for ${t}`);return r}function Kw(e,t,r,i){return[G5(e,t,r,i)]}function G5(e,t,r,i){return[e(r,i),V5(t,r).id,e(r,i),e("time",i)]}function Q5(e,t,r){return e.map(i=>i===t?r:i)}function D2(e,t,r,i,s){const l=ko(t,r,s),u=z2(t,r,s),d=l||u;if(!d)throw new Eo(`Could not find attr for ${[r,s]}`);if(d["value-type"]!=="ref")throw new Error(`Attr ${d.id} is not a ref`);const[h,p]=d["forward-identity"],[y,g]=d["reverse-identity"],w=i+1,b=l?[e(p,i),d.id,e(g,w),tl("time")]:[e(p,w),d.id,e(g,i),tl("time")];return[l?g:p,w,b,d,!!l]}function Jw(e,t){if(typeof t!="string")return function(u){return!1};const i=t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/%/g,".*").replace(/_/g,"."),s=new RegExp(`^${i}$`,e?void 0:"i");return function(u){return typeof u!="string"?!1:s.test(u)}}function W5(e,t){if(typeof t!="object"||t.hasOwnProperty("$in")||t.hasOwnProperty("in"))return t;const r=e["checked-data-type"]==="date";if(t.hasOwnProperty("$gt"))return{$comparator:!0,$op:r?function(s){return new Date(s[2])>new Date(t.$gt)}:function(s){return s[2]>t.$gt}};if(t.hasOwnProperty("$gte"))return{$comparator:!0,$op:r?function(s){return new Date(s[2])>=new Date(t.$gte)}:function(s){return s[2]>=t.$gte}};if(t.hasOwnProperty("$lt"))return{$comparator:!0,$op:r?function(s){return new Date(s[2])<new Date(t.$lt)}:function(s){return s[2]<t.$lt}};if(t.hasOwnProperty("$lte"))return{$comparator:!0,$op:r?function(s){return new Date(s[2])<=new Date(t.$lte)}:function(s){return s[2]<=t.$lte}};if(t.hasOwnProperty("$like")){const i=Jw(!0,t.$like);return{$comparator:!0,$op:function(l){return i(l[2])}}}if(t.hasOwnProperty("$ilike")){const i=Jw(!1,t.$ilike);return{$comparator:!0,$op:function(l){return i(l[2])}}}return t}function Z5(e,t,r,i,s,l){const u=ko(t,r,s),d=z2(t,r,s),h=u||d;if(!h)throw new Eo(`No attr for etype = ${r} label = ${s}`);if(l!=null&&l.hasOwnProperty("$isNull")){const p=ko(t,r,"id");if(!p)throw new Eo(`No attr for etype = ${r} label = id`);return[e(r,i),p.id,{$isNull:{attrId:h.id,isNull:l.$isNull,reverse:!u}},tl("time")]}return u?[e(r,i),h.id,W5(h,l),tl("time")]:[l,h.id,e(r,i),tl("time")]}function K5(e,t,r,i,s){const[l,u,d]=s.reduce((h,p)=>{const[y,g,w]=h,[b,_,T]=D2(e,t,y,g,p);return[b,_,[...w,T]]},[r,i,[]]);return[l,u,d]}function cm(e,t,r,i,s,l){const u=s.slice(0,s.length-1),d=s[s.length-1],[h,p,y]=K5(e,t,r,i,u),g=Z5(e,t,h,p,d,l);return y.concat([g])}function J5(e,t){return t?[t].concat(e):e}function eO([e,t]){return e==="or"&&Array.isArray(t)}function tO([e,t]){return e==="and"&&Array.isArray(t)}function nO(e,t,r){return(i,s)=>{const l=e(i,s);return t==l?l:`${l}-${r}`}}function e1(e,t,r,i,s,l){const u=e(i,s),d=l.map((h,p)=>{const y=nO(e,u,p);return j2(y,r,i,s,h)});return{[t]:{patterns:d,joinSym:u}}}function rO(e){const t=[];for(let r=1;r<=e.length;r++)t.push(e.slice(0,r));return t}function t1(e,t,r,i,s){return rO(s).map(l=>cm(e,t,r,i,l,{$isNull:!0}))}function j2(e,t,r,i,s){return Object.entries(s).flatMap(([l,u])=>{if(eO([l,u]))return e1(e,"or",t,r,i,u);if(tO([l,u]))return e1(e,"and",t,r,i,u);if(l==="$entityIdStartsWith")return[];const d=l.split(".");if(u!=null&&u.hasOwnProperty("$not")){const h=cm(e,t,r,i,d,u),p=t1(e,t,r,i,d);return[{or:{patterns:[h,...p],joinSym:e(r,i)}}]}return u!=null&&u.hasOwnProperty("$isNull")&&u.$isNull===!0&&d.length>1?[{or:{patterns:t1(e,t,r,i,d),joinSym:e(r,i)}}]:cm(e,t,r,i,d,u)})}function aO(e,t,r,i){const s=od;return i?j2(s,e,t,r,i).concat(Kw(s,e,t,r)):Kw(s,e,t,r)}function iO(e,t,r){return[e(t,r),e("time",r)]}function oO(e,t,r,i,s,l){const[u,d,h,p,y]=D2(e,t,r,i,s),g=Q5(h,e(r,i),l);return[u,d,g,p,y]}function sO(e,t,{etype:r,level:i,form:s},l){const u=Object.keys(s).filter(d=>d!=="$");return u.length?Object.entries(l).map(function([h,p]){return u.map(function(w){var b,_,T;const M=!!(t.cardinalityInference&&(!((T=(_=(b=t.linkIndex)===null||b===void 0?void 0:b[r])===null||_===void 0?void 0:_[w])===null||T===void 0)&&T.isSingular));try{const[S,C,A]=oO(e,t,r,i,w,h),U=U2(t,{etype:S,level:C,form:s[w],join:A}),D=M?U[0]:U;return{[w]:D}}catch(S){if(S instanceof Eo)return{[w]:M?void 0:[]};throw S}}).reduce(function(w,b){return Object.assign(Object.assign({},w),b)},p)}):Object.values(l)}function Yu([e,t],[r,i]){return t===i||t==null&&i==null?F5(e,r):i==null?1:t==null?-1:t>i?1:-1}function um(e){return e==null?e:new Date(e).getTime()}function lO(e,t,r,i){var s;const[l,u,d,h]=e,p=r==="desc"?1:-1;if(((s=t["forward-identity"])===null||s===void 0?void 0:s[2])==="id")return Yu(i,[l,h])===p;const[y,g]=i,w=t["checked-data-type"]==="date"?um(g):g,b=t["checked-data-type"]==="date"?um(d):d;return Yu([y,w],[l,b])===p}function cO(e,t){const r=t[1];return e.attrs[r]}function uO(e,t,r){const i=Object.keys(r)[0];return ko(e,t,i)}function dO(e,t,r,i){if(r)return cO(e,r);if(i)return uO(e,t,i)}function fO(e,t,r){var i,s;if(!Array.isArray(r.fields))return k5(e,t);const l=new Map;for(const u of r.fields){const d=ko(e,t,u),h=(i=d==null?void 0:d["forward-identity"])===null||i===void 0?void 0:i[2];h&&mg(d)&&l.set(h,d)}if(!l.has("id")){const u=ko(e,t,"id"),d=(s=u==null?void 0:u["forward-identity"])===null||s===void 0?void 0:s[2];d&&l.set(d,u)}return l}function hO(e,t,r,i,s,l){var u;let d=L5(e,l);const h=i==null?void 0:i["start-cursor"],p=dO(e,t,h,s);if(p&&((u=p==null?void 0:p["forward-identity"])===null||u===void 0?void 0:u[2])!=="id"){const w=p["checked-data-type"]==="date",b=p.id;d=d.map(([_])=>{var T,M,S,C,A;let U=(A=(C=(S=(M=(T=e.eav.get(_))===null||T===void 0?void 0:T.get(b))===null||M===void 0?void 0:M.values())===null||S===void 0?void 0:S.next())===null||C===void 0?void 0:C.value)===null||A===void 0?void 0:A[2];return w&&(U=um(U)),[_,U]})}d.sort(r==="asc"?function(b,_){return Yu(b,_)}:function(b,_){return Yu(_,b)});let y={};const g=fO(e,t,l);for(const w of d){const[b]=w;if(y[b]||h&&p&&lO(h,p,r,w))continue;const _=T5(e,g,b);_&&(y[b]=_)}return y}function pO(e){var t;const r=(t=e.$)===null||t===void 0?void 0:t.order;return r&&r[Object.keys(r)[0]]||"asc"}function mO(e,{etype:t,level:r,form:i,join:s,pageInfo:l}){var u,d,h,p,y,g,w,b,_;const T=((u=i.$)===null||u===void 0?void 0:u.limit)||((d=i.$)===null||d===void 0?void 0:d.first)||((h=i.$)===null||h===void 0?void 0:h.last),M=(p=i.$)===null||p===void 0?void 0:p.offset,S=(y=i.$)===null||y===void 0?void 0:y.before,C=(g=i.$)===null||g===void 0?void 0:g.after,A=(w=i.$)===null||w===void 0?void 0:w.order,U=(b=i.$)===null||b===void 0?void 0:b.fields;if((M||S||C)&&(!l||!l["start-cursor"]))return[];const D=J5(aO(e,t,r,(_=i.$)===null||_===void 0?void 0:_.where),s),P=iO(od,t,r),V=hO(e,t,pO(i),l,A,{where:D,find:P,fields:U});if(T!=null){const ee=Object.entries(V);return ee.length<=T?V:Object.fromEntries(ee.slice(0,T))}return V}function gO(e,t){try{return mO(e,t)}catch(r){if(r instanceof Eo)return{};throw r}}function U2(e,t){const r=gO(e,t);return sO(od,e,t,r)}function vO(e){const t={};for(const[r,i]of Object.entries(e))t[r]={startCursor:i["start-cursor"],endCursor:i["end-cursor"],hasNextPage:i["has-next-page?"],hasPreviousPage:i["has-previous-page?"]};return t}function yO({store:e,pageInfo:t,aggregate:r},i){const l={data:Object.keys(i).reduce(function(d,h){return r!=null&&r[h]||h==="$$ruleParams"||(d[h]=U2(e,{etype:h,form:i[h],level:0,pageInfo:t==null?void 0:t[h]})),d},{})};return t&&(l.pageInfo=vO(t)),r&&(l.aggregate=r),l}function bO(){const t={__etype:1,__ops:1,create:1,update:1,link:1,unlink:1,delete:1,merge:1,ruleParams:1};return new Set(Object.keys(t))}const wO=bO();function dm(e,t,r){const i={__etype:e,__ops:r};return new Proxy(i,{get:(s,l)=>{if(l==="__ops")return r;if(l==="__etype")return e;if(wO.has(l))return(u,d)=>dm(e,t,[...r,d?[l,e,t,u,d]:[l,e,t,u]])}})}function fm(e){return e.startsWith("lookup__")}function L2(e){const[t,r,...i]=e.split("__");return[r,JSON.parse(i.join("__"))]}function xO(e){return new Proxy({__etype:e},{get(t,r){if(r==="__etype")return e;const i=r;return fm(i)?dm(e,L2(i),[]):dm(e,i,[])}})}function $2(){return new Proxy({},{get(e,t){return xO(t)}})}$2();function _O(e){return e.__ops}function SO(e,t){const{attrIdMap:r,refSwapAttrIds:i}=e,s=[];for(const u of t){const d=r[u];if(d)s.push(d);else if(Array.isArray(u)&&u.length==2&&r[u[0]]){const[h,p]=u;s.push([r[h],p])}else s.push(u)}const[l]=t;if((l==="add-triple"||l==="retract-triple")&&i.has(t[2])){const u=s[1];s[1]=s[3],s[3]=u}return s}function It(e,t,r){return Object.values(e).find(i=>{const[s,l,u]=i["forward-identity"];return l===t&&u===r})}function ri(e,t,r){return Object.values(e).find(i=>{const s=i["reverse-identity"];if(!s)return!1;const[l,u,d]=s;return u===t&&d===r})}function TO(e){if(Array.isArray(e))return e;const t=Object.entries(e);if(t.length!==1)throw new Error("lookup must be an object with a single unique attr and value.");return t[0]}function hm(e,t,r){return r.indexOf(".")!==-1&&!It(e,t,r)}function pm(e){const[t,r,...i]=e.split(".");if(i.length>0||r!=="id")throw new Error(`${e} is not a valid lookup attribute.`);return t}function kO(e,t,r){if(!hm(e,t,r))return It(e,t,r);const i=pm(r),s=It(e,t,i)||ri(e,t,i);if(s&&s["value-type"]!=="ref")throw new Error(`${r} does not reference a valid link attribute.`);return s}function mm(e){return typeof e=="string"&&!fm(e)?null:typeof e=="string"&&fm(e)?L2(e):TO(e)}function en(e,t,r){const i=mm(r);if(i===null)return r;const[s,l]=i,u=kO(e,t,s);if(!u||!u["unique?"])throw new Error(`${s} is not a unique attribute.`);return[u.id,l]}function H2(e,t,r,i){const s=en(e,t,r);return Array.isArray(s)?[["add-triple",s,It(e,t,"id").id,s]].concat(i):i}function EO({attrs:e},[t,r,i]){const s=Object.entries(i).flatMap(([l,u])=>{const d=Array.isArray(u)?u:[u],h=It(e,t,l),p=ri(e,t,l);return d.map(y=>h?["add-triple",en(e,t,r),h.id,en(e,h["reverse-identity"][1],y)]:["add-triple",en(e,p["forward-identity"][1],y),p.id,en(e,t,r)])});return H2(e,t,r,s)}function CO({attrs:e},[t,r,i]){const s=Object.entries(i).flatMap(([l,u])=>{const d=Array.isArray(u)?u:[u],h=It(e,t,l),p=ri(e,t,l);return d.map(y=>h?["retract-triple",en(e,t,r),h.id,en(e,h["reverse-identity"][1],y)]:["retract-triple",en(e,p["forward-identity"][1],y),p.id,en(e,t,r)])});return H2(e,t,r,s)}function MO(e,t,r){if(Array.isArray(r)){const[i,s]=r;for(const l of e||[]){const u=l==null?void 0:l.aev.get(i);if(u){for(const[d,h,p]of Jt(u,2))if(p===s)return!0}}}else for(const i of e||[]){const s=i==null?void 0:i.eav.get(r);if(s){for(const l of s.keys())if(i.attrs[l]["forward-identity"][1]==t)return!0}}return!1}function I2({stores:e,attrs:t},[r,i,s,l]){return(l==null?void 0:l.upsert)===!1?{mode:"update"}:(l==null?void 0:l.upsert)===!0?null:MO(e,r,i)?{mode:"update"}:null}function OO(e,t){const{stores:r,attrs:i}=e,[s,l,u,d]=t,h=hg(u),p=en(i,s,l);return[["id",p]].concat(Object.entries(h)).map(([g,w])=>{const b=It(i,s,g);return b["checked-data-type"]==="date"&&e.useDateObjects&&(w=ad(w)),["add-triple",p,b.id,w,{mode:"create"}]})}function NO(e,t){const{stores:r,attrs:i}=e,[s,l,u,d]=t,h=hg(u),p=en(i,s,l),y=I2(e,[s,p,u,d]);return[["id",p]].concat(Object.entries(h)).map(([w,b])=>{const _=It(i,s,w);return _["checked-data-type"]==="date"&&e.useDateObjects&&(b=ad(b)),["add-triple",p,_.id,b,...y?[y]:[]]})}function AO({attrs:e},[t,r]){return[["delete-entity",en(e,t,r),t]]}function zO(e,t){const{stores:r,attrs:i}=e,[s,l,u,d]=t,h=hg(u),p=en(i,s,l),y=I2(e,[s,p,u,d]),g=Object.entries(h).map(([b,_])=>{const T=It(i,s,b);return["deep-merge-triple",p,T.id,_,...y?[y]:[]]});return[["add-triple",p,It(i,s,"id").id,p,...y?[y]:[]]].concat(g)}function RO({attrs:e},[t,r,i]){return[["rule-params",en(e,t,r),t,i]]}function DO(e){const[t,r,i,s,l]=e;if(!s)return e;const u=Object.assign({},s);return delete u.id,[t,r,i,u,...l?[l]:[]]}function jO(e,t){const[r,...i]=DO(t);switch(r){case"merge":return zO(e,i);case"create":return OO(e,i);case"update":return NO(e,i);case"link":return EO(e,i);case"unlink":return CO(e,i);case"delete":return AO(e,i);case"ruleParams":return RO(e,i);default:throw new Error(`unsupported action ${r}`)}}function UO(e){switch(e){case"string":case"date":case"boolean":case"number":return e;default:return}}function LO(e,t,r){var i,s;const l=(s=(i=e.entities[t])===null||i===void 0?void 0:i.attrs)===null||s===void 0?void 0:s[r];if(r==="id")return null;if(!l)throw new Error(`${t}.${r} does not exist in your schema`);const{unique:u,indexed:d}=l==null?void 0:l.config,h=UO(l==null?void 0:l.valueType);return{"index?":d,"unique?":u,"checked-data-type":h}}function dp(e,t,r,i){const s=e?LO(e,t,r):null,l=tt(),d=[tt(),t,r];return Object.assign(Object.assign({id:l,"forward-identity":d,"value-type":"blob",cardinality:"one","unique?":!1,"index?":!1,isUnsynced:!0},s||{}),i||{})}function $O(e,t,r){return Object.values(e.links).find(s=>s.forward.on===t&&s.forward.label===r||s.reverse.on===t&&s.reverse.label===r)}function HO(e,t,r){const i=$O(e,t,r);if(!i)throw new Error(`Couldn't find the link ${t}.${r} in your schema`);const{forward:s,reverse:l}=i;return{"forward-identity":[tt(),s.on,s.label],"reverse-identity":[tt(),l.on,l.label],cardinality:s.has==="one"?"one":"many","unique?":l.has==="one","on-delete":s.onDelete,"on-delete-reverse":l.onDelete}}function n1(e,t,r,i){const s=e?HO(e,t,r):null,l=tt(),u=[tt(),t,r],d=[tt(),r,t];return Object.assign(Object.assign({id:l,"forward-identity":u,"reverse-identity":d,"value-type":"ref",cardinality:"many","unique?":!1,"index?":!1,isUnsynced:!0},s||{}),i||{})}const IO=new Set(["create","update","merge","link","unlink"]),qO=new Set(["link","unlink"]),YO=new Set(["create","update","merge"]),BO=new Set(["link","unlink","create","update","merge","delete","ruleParams"]),gm={"unique?":!0,"index?":!0},XO=Object.assign(Object.assign({},gm),{cardinality:"one"});function FO(e){const t=[],[r,i,s,l]=e;if(!BO.has(r))return t;const u=mm(s);if(u&&t.push({etype:i,lookupPair:u}),r==="link")for(const[d,h]of Object.entries(l)){const p=Array.isArray(h)?h:[h];for(const y of p){const g=mm(y);g&&t.push({etype:i,lookupPair:g,linkLabel:d})}}return t}function PO({attrs:e,schema:t},r){var i,s;const[l,u,d]=[new Set,Object.assign({},e),[]];function h(g){u[g.id]=g,d.push(["add-attr",g]),l.add(g.id)}function p(g){g!=null&&g.isUnsynced&&!l.has(g.id)&&(d.push(["add-attr",g]),l.add(g.id))}function y(g,w){const b=It(u,g,w),_=ri(u,g,w);p(b),p(_),!b&&!_&&h(n1(t,g,w,XO))}for(const g of r)for(const{etype:w,lookupPair:b,linkLabel:_}of FO(g)){const T=b[0];if(_){y(w,_);const M=It(u,w,_),S=ri(u,w,_);p(M),p(S);const C=((i=M==null?void 0:M["reverse-identity"])===null||i===void 0?void 0:i[1])||((s=S==null?void 0:S["forward-identity"])===null||s===void 0?void 0:s[1])||_;if(hm(u,C,T))y(C,pm(T));else{const A=It(u,C,T);A||h(dp(t,C,T,gm)),p(A)}}else if(hm(u,w,T))y(w,pm(T));else{const M=It(u,w,T);M||h(dp(t,w,T,gm)),p(M)}}for(const g of r){const[w,b,_,T]=g;if(IO.has(w)){const M=Object.keys(T);M.push("id");for(const S of M){const C=It(u,b,S);if(p(C),YO.has(w)&&(C||h(dp(t,b,S,S==="id"?{"unique?":!0}:null))),qO.has(w)){const A=ri(u,b,S);!C&&!A&&h(n1(t,b,S)),p(A)}}}}return[u,d]}function VO(e,t){const i=(Array.isArray(t)?t:[t]).flatMap(h=>_O(h)),[s,l]=PO(e,i),u=Object.assign(Object.assign({},e),{attrs:s}),d=i.flatMap(h=>jO(u,h));return[...l,...d]}var r1=function(e,t,r,i){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(y){try{p(i.next(y))}catch(g){u(g)}}function h(y){try{p(i.throw(y))}catch(g){u(g)}}function p(y){y.done?l(y.value):s(y.value).then(d,h)}p((i=i.apply(e,t||[])).next())})};class q2{constructor(t){this.dbName=t,this._storeName="kv",this._dbPromise=this._init()}_init(){return new Promise((t,r)=>{const i=indexedDB.open(this.dbName,1);i.onerror=s=>{r(s)},i.onsuccess=s=>{t(s.target.result)},i.onupgradeneeded=s=>{s.target.result.createObjectStore(this._storeName)}})}getItem(t){return r1(this,void 0,void 0,function*(){const r=yield this._dbPromise;return new Promise((i,s)=>{const d=r.transaction([this._storeName],"readonly").objectStore(this._storeName).get(t);d.onerror=h=>{s(h)},d.onsuccess=h=>{d.result?i(d.result):i(null)}})})}setItem(t,r){return r1(this,void 0,void 0,function*(){const i=yield this._dbPromise;return new Promise((s,l)=>{const h=i.transaction([this._storeName],"readwrite").objectStore(this._storeName).put(r,t);h.onerror=p=>{l(p)},h.onsuccess=p=>{s()}})})}}var GO=function(e,t,r,i){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(y){try{p(i.next(y))}catch(g){u(g)}}function h(y){try{p(i.throw(y))}catch(g){u(g)}}function p(y){y.done?l(y.value):s(y.value).then(d,h)}p((i=i.apply(e,t||[])).next())})};class Y2{static getIsOnline(){return GO(this,void 0,void 0,function*(){return navigator.onLine})}static listen(t){const r=()=>{t(!0)},i=()=>{t(!1)};return addEventListener("online",r),addEventListener("offline",i),()=>{removeEventListener("online",r),removeEventListener("offline",i)}}}var QO=function(e,t,r,i){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(y){try{p(i.next(y))}catch(g){u(g)}}function h(y){try{p(i.throw(y))}catch(g){u(g)}}function p(y){y.done?l(y.value):s(y.value).then(d,h)}p((i=i.apply(e,t||[])).next())})};class yg extends Error{constructor(t){var r;const i=((r=t.body)===null||r===void 0?void 0:r.message)||`API Error (${t.status})`;super(i);const s=new.target.prototype;Object.setPrototypeOf&&Object.setPrototypeOf(this,s),Error.captureStackTrace&&Error.captureStackTrace(this,yg),this.name="InstantAPIError",this.status=t.status,this.body=t.body}get[Symbol.toStringTag](){return"InstantAPIError"}}function dr(e,t){return QO(this,void 0,void 0,function*(){const r=yield fetch(e,t),i=yield r.json();return r.status===200?Promise.resolve(i):Promise.reject(new yg({status:r.status,body:i}))})}var Cl=function(e,t,r,i){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(y){try{p(i.next(y))}catch(g){u(g)}}function h(y){try{p(i.throw(y))}catch(g){u(g)}}function p(y){y.done?l(y.value):s(y.value).then(d,h)}p((i=i.apply(e,t||[])).next())})};function WO({apiURI:e,appId:t,email:r}){return dr(`${e}/runtime/auth/send_magic_code`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({"app-id":t,email:r})})}function ZO(e){return Cl(this,arguments,void 0,function*({apiURI:t,appId:r,email:i,code:s}){return yield dr(`${t}/runtime/auth/verify_magic_code`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({"app-id":r,email:i,code:s})})})}function KO(e){return Cl(this,arguments,void 0,function*({apiURI:t,appId:r,refreshToken:i}){return yield dr(`${t}/runtime/auth/verify_refresh_token`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({"app-id":r,"refresh-token":i})})})}function a1(e){return Cl(this,arguments,void 0,function*({apiURI:t,appId:r,code:i,codeVerifier:s}){return yield dr(`${t}/runtime/oauth/token`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({app_id:r,code:i,code_verifier:s})})})}function JO(e){return Cl(this,arguments,void 0,function*({apiURI:t,appId:r,nonce:i,idToken:s,clientName:l,refreshToken:u}){return yield dr(`${t}/runtime/oauth/id_token`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({app_id:r,nonce:i,id_token:s,client_name:l,refresh_token:u})})})}function eN(e){return Cl(this,arguments,void 0,function*({apiURI:t,appId:r,refreshToken:i}){return yield dr(`${t}/runtime/signout`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({app_id:r,refresh_token:i})})})}var Ml=function(e,t,r,i){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(y){try{p(i.next(y))}catch(g){u(g)}}function h(y){try{p(i.throw(y))}catch(g){u(g)}}function p(y){y.done?l(y.value):s(y.value).then(d,h)}p((i=i.apply(e,t||[])).next())})};function tN(e){return Ml(this,arguments,void 0,function*({apiURI:t,appId:r,path:i,file:s,refreshToken:l,contentType:u,contentDisposition:d}){const h={app_id:r,path:i,authorization:`Bearer ${l}`,"content-type":u||s.type};return d&&(h["content-disposition"]=d),yield dr(`${t}/storage/upload`,{method:"PUT",headers:h,body:s})})}function nN(e){return Ml(this,arguments,void 0,function*({apiURI:t,appId:r,path:i,refreshToken:s}){const{data:l}=yield dr(`${t}/storage/files?app_id=${r}&filename=${encodeURIComponent(i)}`,{method:"DELETE",headers:{"content-type":"application/json",authorization:`Bearer ${s}`}});return l})}function rN(e){return Ml(this,arguments,void 0,function*({apiURI:t,appId:r,fileName:i,refreshToken:s,metadata:l={}}){const{data:u}=yield dr(`${t}/storage/signed-upload-url`,{method:"POST",headers:{"content-type":"application/json",authorization:`Bearer ${s}`},body:JSON.stringify({app_id:r,filename:i})});return u})}function aN(e,t){return Ml(this,void 0,void 0,function*(){return(yield fetch(e,{method:"PUT",body:t,headers:{"Content-Type":t.type}})).ok})}function iN(e){return Ml(this,arguments,void 0,function*({apiURI:t,appId:r,path:i,refreshToken:s}){const{data:l}=yield dr(`${t}/storage/signed-download-url?app_id=${r}&filename=${encodeURIComponent(i)}`,{method:"GET",headers:{"content-type":"application/json",authorization:`Bearer ${s}`}});return l})}let bg=!1,B2=!1,X2=!1;typeof window<"u"&&typeof window.localStorage<"u"&&(bg=!!window.localStorage.getItem("devBackend"),B2=!!window.localStorage.getItem("__instantLogging"),X2=!!window.localStorage.getItem("__devtoolLocalDash"));function i1(e,t){if(!t)return e;const r={};return t.forEach(i=>{r[i]=e[i]}),r}function oN(e,t,r){var i,s;const l={peers:{}};if(t&&"user"in t?t.user:!0){const d=i1((i=e.user)!==null&&i!==void 0?i:{},t==null?void 0:t.keys);l.user=Object.assign(Object.assign({},d),{peerId:r})}for(const d of Object.keys((s=e.peers)!==null&&s!==void 0?s:{})){const h=(t==null?void 0:t.peers)===void 0,p=Array.isArray(t==null?void 0:t.peers)&&(t==null?void 0:t.peers.includes(d));if(h||p){const y=i1(e.peers[d],t==null?void 0:t.keys);l.peers[d]=Object.assign(Object.assign({},y),{peerId:d})}}return l}function sN(e,t){if(e.isLoading!==t.isLoading||e.error!==t.error||(e.user||t.user)&&(!e.user||!t.user||!Vw(e.user,t.user))||!S2(e.peers,t.peers))return!0;for(const i of Object.keys(e.peers))if(!Vw(e.peers[i],t.peers[i]))return!0;return!1}class o1{constructor(){this.promise=new Promise((t,r)=>{this._resolve=t,this._reject=r})}resolve(t){this._resolve(t)}reject(t){this._reject(t)}}var au=function(e,t,r,i){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(y){try{p(i.next(y))}catch(g){u(g)}}function h(y){try{p(i.throw(y))}catch(g){u(g)}}function p(y){y.done?l(y.value):s(y.value).then(d,h)}p((i=i.apply(e,t||[])).next())})};class s1{constructor(t,r,i,s,l=h=>JSON.stringify(h),u=h=>JSON.parse(h),d=100){this._subs=[],this._persister=t,this._key=r,this._onMerge=s,this._loadedCbs=[],this._isLoading=!0,this.currentValue=i,this.toJSON=l,this.fromJSON=u,this._saveThrottleMs=d,this._pendingSaveCbs=[],this._version=0,this._load()}_load(){return au(this,void 0,void 0,function*(){const t=this.fromJSON(yield this._persister.getItem(this._key));this._isLoading=!1,this._onMerge(t,this.currentValue);for(const r of this._loadedCbs)r()})}waitForLoaded(){return au(this,void 0,void 0,function*(){if(!this._isLoading)return;yield new Promise(r=>{this._loadedCbs.push(r)})})}isLoading(){return this._isLoading}version(){return this._version}waitForSync(){return au(this,void 0,void 0,function*(){if(!this._nextSave)return;yield new Promise(r=>{this._pendingSaveCbs.push(r)})})}_writeToStorage(){this._persister.setItem(this._key,this.toJSON(this.currentValue));for(const t of this._pendingSaveCbs)t();this._pendingSaveCbs.length=0}flush(){return au(this,void 0,void 0,function*(){this._nextSave&&(clearTimeout(this._nextSave),this._writeToStorage())})}_enqueuePersist(t){if(this._nextSave){t&&this._pendingSaveCbs.push(t);return}this._nextSave=setTimeout(()=>{this._nextSave=null,this._writeToStorage()},this._saveThrottleMs)}set(t,r){this._version++,this.currentValue=t(this.currentValue),this._isLoading?this._loadedCbs.push(()=>this._enqueuePersist(r)):this._enqueuePersist(r);for(const i of this._subs)i(this.currentValue)}subscribe(t){return this._subs.push(t),t(this.currentValue),()=>{this._subs=this._subs.filter(r=>r!==t)}}}function F2(e,t=[]){e.forEach(r=>{const{data:i}=r,{"datalog-result":s}=i,{"join-rows":l}=s;for(const u of l)for(const d of u)t.push(d);F2(r["child-nodes"],t)})}function l1(e){const t=[];return F2(e,t),t}function c1(e){return Object.values(e.links).reduce((t,r)=>{var i,s,l,u;return(i=t[l=r.forward.on])!==null&&i!==void 0||(t[l]={}),t[r.forward.on][r.forward.label]={isForward:!0,isSingular:r.forward.has==="one",link:r},(s=t[u=r.reverse.on])!==null&&s!==void 0||(t[u]={}),t[r.reverse.on][r.reverse.label]={isForward:!1,isSingular:r.reverse.has==="one",link:r},t},{})}const P2="v0.20.12";function lN(e){return{info:e?console.info.bind(console):()=>{},debug:e?console.debug.bind(console):()=>{},error:e?console.error.bind(console):()=>{}}}var Mt=function(e,t,r,i){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(y){try{p(i.next(y))}catch(g){u(g)}}function h(y){try{p(i.throw(y))}catch(g){u(g)}}function p(y){y.done?l(y.value):s(y.value).then(d,h)}p((i=i.apply(e,t||[])).next())})};const Or={CONNECTING:"connecting",OPENED:"opened",AUTHENTICATED:"authenticated",CLOSED:"closed",ERRORED:"errored"},cN=3e4,uN=3e4,dN=0,u1=1,fN={apiURI:"https://api.instantdb.com",websocketURI:"wss://api.instantdb.com/runtime/session"},fp="_instant_oauth_redirect",hp="currentUser";let hN=0;function pN(e){const t=new WebSocket(e);return t._id=hN++,t}function mN(){return typeof window<"u"||typeof chrome<"u"}const d1={"set-presence":!0,"set-presence-ok":!0,"refresh-presence":!0,"patch-presence":!0};function gN(e,t){var r;const i=JSON.parse(e);for(const s in i){const l=i[s];if(!((r=l==null?void 0:l.result)===null||r===void 0)&&r.store){const u=l.result.store;l.result.store=h5(Object.assign(Object.assign({},u),{useDateObjects:t}))}}return i}function vN(e){var t;const r={};for(const i in e){const s=e[i],l=Object.assign({},s);!((t=s.result)===null||t===void 0)&&t.store&&(l.result=Object.assign(Object.assign({},s.result),{store:f5(s.result.store)})),r[i]=l}return JSON.stringify(r)}function f1(e){return[...e].sort((t,r)=>{const[i,s]=t,[l,u]=r,d=s.order||0,h=u.order||0;return d==h?i<l?-1:i>l?1:0:d-h})}class yN{constructor(t,r=q2,i=Y2,s){var l;this._isOnline=!0,this._isShutdown=!1,this.status=Or.CONNECTING,this.queryCbs={},this.queryOnceDfds={},this.authCbs=[],this.attrsCbs=[],this.mutationErrorCbs=[],this.connectionStatusCbs=[],this.mutationDeferredStore=new Map,this._reconnectTimeoutId=null,this._reconnectTimeoutMs=0,this._localIdPromises={},this._errorMessage=null,this._oauthCallbackResponse=null,this._linkIndex=null,this._rooms={},this._roomsPendingLeave={},this._presence={},this._broadcastQueue=[],this._broadcastSubs={},this._currentUserCached={isLoading:!0,error:void 0,user:void 0},this._beforeUnloadCbs=[],this._dataForQueryCache={},this._onMergeQuerySubs=(u,d)=>{const h=u||{},p=Object.assign({},d);Object.entries(d).forEach(([g,w])=>{var b;const _=(b=h==null?void 0:h[g])===null||b===void 0?void 0:b.result,T=w.result;_&&!T&&(p[g].result=_)}),Object.keys(h).filter(g=>!d[g]).sort((g,w)=>{var b,_;const T=((b=h[g])===null||b===void 0?void 0:b.lastAccessed)||0;return(((_=h[w])===null||_===void 0?void 0:_.lastAccessed)||0)-T}).slice(0,this.queryCacheLimit).forEach(g=>{p[g]=h[g]}),this.querySubs.set(g=>p),this.loadedNotifyAll()},this._onMergePendingMutations=(u,d)=>{const h=new Map([...u.entries(),...d.entries()]);this.pendingMutations.set(y=>h),this.loadedNotifyAll(),this._rewriteMutationsSorted(this.attrs,u).forEach(([y,g])=>{!d.has(y)&&!g["tx-id"]&&this._sendMutation(y,g)})},this.getPreviousResult=u=>{const d=hn(u);return this.dataForQuery(d)},this.notifyOne=u=>{var d,h;const p=(d=this.queryCbs[u])!==null&&d!==void 0?d:[],y=(h=this._dataForQueryCache[u])===null||h===void 0?void 0:h.data,g=this.dataForQuery(u);g&&(_u(g,y)||p.forEach(w=>w.cb(g)))},this.notifyOneQueryOnce=u=>{var d;const h=(d=this.queryOnceDfds[u])!==null&&d!==void 0?d:[],p=this.dataForQuery(u);h.forEach(y=>{this._completeQueryOnce(y.q,u,y.dfd),y.dfd.resolve(p)})},this.notifyQueryError=(u,d)=>{(this.queryCbs[u]||[]).forEach(p=>p.cb({error:d}))},this.pushTx=u=>{try{const d=VO({attrs:this.optimisticAttrs(),schema:this.config.schema,stores:Object.values(this.querySubs.currentValue).map(h=>{var p;return(p=h==null?void 0:h.result)===null||p===void 0?void 0:p.store}),useDateObjects:this.config.useDateObjects},u);return this.pushOps(d)}catch(d){return this.pushOps([],d)}},this.pushOps=(u,d)=>{const h=tt(),p=[...this.pendingMutations.currentValue.values()],y=Math.max(0,...p.map(b=>b.order||0))+1,g={op:"transact","tx-steps":u,created:Date.now(),error:d,order:y};this.pendingMutations.set(b=>(b.set(h,g),b));const w=new o1;return this.mutationDeferredStore.set(h,w),this._sendMutation(h,g),this.notifyAll(),w.promise},this._wsOnOpen=u=>{const d=u.target;if(this._ws!==d){this._log.info("[socket][open]",d._id,"skip; this is no longer the current ws");return}this._log.info("[socket][open]",this._ws._id),this._setStatus(Or.OPENED),this.getCurrentUser().then(h=>{var p;this._trySend(tt(),{op:"init","app-id":this.config.appId,"refresh-token":(p=h.user)===null||p===void 0?void 0:p.refresh_token,versions:this.versions,"__admin-token":this.config.__adminToken})}).catch(h=>{this._log.error("[socket][error]",d._id,h)})},this._wsOnMessage=u=>{const d=u.target,h=JSON.parse(u.data.toString());if(this._ws!==d){this._log.info("[socket][message]",d._id,h,"skip; this is no longer the current ws");return}this._handleReceive(d._id,JSON.parse(u.data.toString()))},this._wsOnError=u=>{const d=u.target;if(this._ws!==d){this._log.info("[socket][error]",d._id,"skip; this is no longer the current ws");return}this._log.error("[socket][error]",d._id,u)},this._wsOnClose=u=>{const d=u.target;if(this._ws!==d){this._log.info("[socket][close]",d._id,"skip; this is no longer the current ws");return}this._setStatus(Or.CLOSED);for(const h of Object.values(this._rooms))h.isConnected=!1;if(this._isShutdown){this._log.info("[socket][close]",d._id,"Reactor has been shut down and will not reconnect");return}this._log.info("[socket][close]",d._id,"schedule reconnect, ms =",this._reconnectTimeoutMs),setTimeout(()=>{if(this._reconnectTimeoutMs=Math.min(this._reconnectTimeoutMs+1e3,1e4),!this._isOnline){this._log.info("[socket][close]",d._id,"we are offline, no need to start socket");return}this._startSocket()},this._reconnectTimeoutMs)},this.config=Object.assign(Object.assign({},fN),t),this.queryCacheLimit=(l=this.config.queryCacheLimit)!==null&&l!==void 0?l:10,this._log=lN(t.verbose||bg||B2),this.versions=Object.assign(Object.assign({},s||{}),{"@instantdb/core":P2}),this.config.schema&&(this._linkIndex=c1(this.config.schema)),mN()&&(typeof BroadcastChannel=="function"&&(this._broadcastChannel=new BroadcastChannel("@instantdb"),this._broadcastChannel.addEventListener("message",u=>Mt(this,void 0,void 0,function*(){var d;try{if(((d=u.data)===null||d===void 0?void 0:d.type)==="auth"){const h=yield this.getCurrentUser();this.updateUser(h.user)}}catch(h){this._log.error("[error] handle broadcast channel",h)}}))),this._oauthCallbackResponse=this._oauthLoginInit(),this._initStorage(r),this.getCurrentUser(),i.getIsOnline().then(u=>{this._isOnline=u,this._startSocket(),i.listen(d=>{d!==this._isOnline&&(this._log.info("[network] online =",d),this._isOnline=d,this._isOnline?this._startSocket():(this._log.info("Changing status from",this.status,"to",Or.CLOSED),this._setStatus(Or.CLOSED)))})}),typeof addEventListener<"u"&&(this._beforeUnload=this._beforeUnload.bind(this),addEventListener("beforeunload",this._beforeUnload)))}updateSchema(t){this.config=Object.assign(Object.assign({},this.config),{schema:t,cardinalityInference:!!t}),this._linkIndex=t?c1(this.config.schema):null}_initStorage(t){this._persister=new t(`instant_${this.config.appId}_5`),this.querySubs=new s1(this._persister,"querySubs",{},this._onMergeQuerySubs,vN,r=>gN(r,this.config.useDateObjects)),this.pendingMutations=new s1(this._persister,"pendingMutations",new Map,this._onMergePendingMutations,r=>JSON.stringify([...r.entries()]),r=>new Map(JSON.parse(r))),this._beforeUnloadCbs.push(()=>{this.pendingMutations.flush(),this.querySubs.flush()})}_beforeUnload(){for(const t of this._beforeUnloadCbs)t()}_finishTransaction(t,r,i){const s=this.mutationDeferredStore.get(r);this.mutationDeferredStore.delete(r);const l=t!=="error"&&t!=="timeout";!s&&!l&&console.error("Mutation failed",Object.assign({status:t,eventId:r},i)),s&&(l?s.resolve({status:t,eventId:r}):s.reject(Object.assign({status:t,eventId:r},i)))}_setStatus(t,r){this.status=t,this._errorMessage=r,this.notifyConnectionStatusSubs(t)}_flushEnqueuedRoomData(t){var r,i;const s=(i=(r=this._presence[t])===null||r===void 0?void 0:r.result)===null||i===void 0?void 0:i.user,l=this._broadcastQueue[t];if(this._broadcastQueue[t]=[],s&&this._trySetPresence(t,s),l)for(const u of l){const{topic:d,roomType:h,data:p}=u;this._tryBroadcast(t,h,d,p)}}_handleReceive(t,r){var i,s,l,u,d,h;const p=!!this.config.schema&&("cardinalityInference"in this.config?!!this.config.cardinalityInference:!0);switch(d1[r.op]||this._log.info("[receive]",t,r.op,r),r.op){case"init-ok":this._setStatus(Or.AUTHENTICATED),this._reconnectTimeoutMs=0,this._setAttrs(r.attrs),this._flushPendingMessages(),this._sessionId=r["session-id"];for(const R of Object.keys(this._rooms)){const B=(s=(i=this._presence[R])===null||i===void 0?void 0:i.result)===null||s===void 0?void 0:s.user;this._tryJoinRoom(R,B)}break;case"add-query-exists":this.notifyOneQueryOnce(hn(r.q));break;case"add-query-ok":const{q:y,result:g}=r,w=hn(y),b=(u=(l=g==null?void 0:g[0])===null||l===void 0?void 0:l.data)===null||u===void 0?void 0:u["page-info"],_=(h=(d=g==null?void 0:g[0])===null||d===void 0?void 0:d.data)===null||h===void 0?void 0:h.aggregate,T=l1(g),M=om(this.attrs,T,p,this._linkIndex,this.config.useDateObjects);this.querySubs.set(R=>(R[w].result={store:M,pageInfo:b,aggregate:_,processedTxId:r["processed-tx-id"]},R)),this._cleanupPendingMutationsQueries(),this.notifyOne(w),this.notifyOneQueryOnce(w),this._cleanupPendingMutationsTimeout();break;case"refresh-ok":const{computations:S,attrs:C}=r,A=r["processed-tx-id"];C&&this._setAttrs(C),this._cleanupPendingMutationsTimeout();const U=this._rewriteMutations(this.attrs,this.pendingMutations.currentValue,A);U!==this.pendingMutations.currentValue&&this.pendingMutations.set(()=>U);const D=f1(U.entries()),P=S.map(R=>{var B,O,I,W;const J=R["instaql-query"],te=R["instaql-result"],ie=hn(J),re=l1(te),ve=om(this.attrs,re,p,this._linkIndex,this.config.useDateObjects),de=this._applyOptimisticUpdates(ve,D,A),ke=(O=(B=te==null?void 0:te[0])===null||B===void 0?void 0:B.data)===null||O===void 0?void 0:O["page-info"],$e=(W=(I=te==null?void 0:te[0])===null||I===void 0?void 0:I.data)===null||W===void 0?void 0:W.aggregate;return{hash:ie,store:de,pageInfo:ke,aggregate:$e}});P.forEach(({hash:R,store:B,pageInfo:O,aggregate:I})=>{this.querySubs.set(W=>(W[R].result={store:B,pageInfo:O,aggregate:I,processedTxId:A},W))}),this._cleanupPendingMutationsQueries(),P.forEach(({hash:R})=>{this.notifyOne(R)});break;case"transact-ok":const{"client-event-id":V,"tx-id":ee}=r,ue=this._rewriteMutations(this.attrs,this.pendingMutations.currentValue).get(V);if(!ue)break;this.pendingMutations.set(R=>(R.set(V,Object.assign(Object.assign({},R.get(V)),{"tx-id":ee,confirmed:Date.now()})),R)),this._cleanupPendingMutationsTimeout();const se=ue["tx-steps"].filter(([R,...B])=>R==="add-attr").map(([R,B])=>B).concat(Object.values(this.attrs));this._setAttrs(se),this._finishTransaction("synced",V);break;case"patch-presence":{const R=r["room-id"];this._patchPresencePeers(R,r.edits),this._notifyPresenceSubs(R);break}case"refresh-presence":{const R=r["room-id"];this._setPresencePeers(R,r.data),this._notifyPresenceSubs(R);break}case"server-broadcast":const ae=r["room-id"],be=r.topic;this._notifyBroadcastSubs(ae,be,r);break;case"join-room-ok":const xe=r["room-id"],Se=this._rooms[xe];if(!Se){this._roomsPendingLeave[xe]&&(this._tryLeaveRoom(xe),delete this._roomsPendingLeave[xe]);break}Se.isConnected=!0,this._notifyPresenceSubs(xe),this._flushEnqueuedRoomData(xe);break;case"join-room-error":const E=r["room-id"],N=this._rooms[E];N&&(N.error=r.error),this._notifyPresenceSubs(E);break;case"error":this._handleReceiveError(r);break}}_handleMutationError(t,r,i){const s=this.pendingMutations.currentValue.get(r);s&&(t!=="timeout"||!s["tx-id"])&&(this.pendingMutations.set(l=>(l.delete(r),l)),this.notifyAll(),this.notifyAttrsSubs(),this.notifyMutationErrorSubs(i),this._finishTransaction(t,r,i))}_handleReceiveError(t){var r,i,s,l,u;const d=t["client-event-id"],h=this.pendingMutations.currentValue.get(d),p={message:t.message||"Uh-oh, something went wrong. Ping Joe & Stopa."};if(t.hint&&(p.hint=t.hint),h){const w={message:t.message,hint:t.hint};this._handleMutationError("error",d,w);return}if(!((r=t["original-event"])===null||r===void 0)&&r.hasOwnProperty("q")&&((i=t["original-event"])===null||i===void 0?void 0:i.op)==="add-query"){const w=(s=t["original-event"])===null||s===void 0?void 0:s.q,b=hn(w);this.notifyQueryError(hn(w),p),this.notifyQueryOnceError(w,b,d,p);return}if(((l=t["original-event"])===null||l===void 0?void 0:l.op)==="init"){if(t.type==="record-not-found"&&((u=t.hint)===null||u===void 0?void 0:u["record-type"])==="app-user"){this.changeCurrentUser(null);return}this._setStatus(Or.ERRORED,p),this.notifyAll();return}const g=Object.assign({},t);delete g.message,delete g.hint,console.error(t.message,g),t.hint&&console.error(`This error comes with some debugging information. Here it is: 
`,t.hint)}notifyQueryOnceError(t,r,i,s){var l;const u=(l=this.queryOnceDfds[r])===null||l===void 0?void 0:l.find(d=>d.eventId===i);u&&(u.dfd.reject(s),this._completeQueryOnce(t,r,u.dfd))}_setAttrs(t){this.attrs=t.reduce((r,i)=>(r[i.id]=i,r),{}),this.notifyAttrsSubs()}_startQuerySub(t,r){const i=tt();return this.querySubs.set(s=>(s[r]=s[r]||{q:t,result:null,eventId:i},s[r].lastAccessed=Date.now(),s)),this._trySendAuthed(i,{op:"add-query",q:t}),i}subscribeQuery(t,r,i){var s;i&&"ruleParams"in i&&(t=Object.assign({$$ruleParams:i.ruleParams},t));const l=hn(t),u=this.getPreviousResult(t);return u&&r(u),this.queryCbs[l]=(s=this.queryCbs[l])!==null&&s!==void 0?s:[],this.queryCbs[l].push({q:t,cb:r}),this._startQuerySub(t,l),()=>{this._unsubQuery(t,l,r)}}queryOnce(t,r){var i;r&&"ruleParams"in r&&(t=Object.assign({$$ruleParams:r.ruleParams},t));const s=new o1;if(!this._isOnline)return s.reject(new Error("We can't run `queryOnce`, because the device is offline.")),s.promise;if(!this.querySubs)return s.reject(new Error("We can't run `queryOnce` on the backend. Use adminAPI.query instead: https://www.instantdb.com/docs/backend#query")),s.promise;const l=hn(t),u=this._startQuerySub(t,l);return this.queryOnceDfds[l]=(i=this.queryOnceDfds[l])!==null&&i!==void 0?i:[],this.queryOnceDfds[l].push({q:t,dfd:s,eventId:u}),setTimeout(()=>s.reject(new Error("Query timed out")),cN),s.promise}_completeQueryOnce(t,r,i){this.queryOnceDfds[r]&&(this.queryOnceDfds[r]=this.queryOnceDfds[r].filter(s=>s.dfd!==i),this._cleanupQuery(t,r))}_unsubQuery(t,r,i){this.queryCbs[r]&&(this.queryCbs[r]=this.queryCbs[r].filter(s=>s.cb!==i),this._cleanupQuery(t,r))}_cleanupQuery(t,r){var i,s;!((i=this.queryCbs[r])===null||i===void 0)&&i.length||!((s=this.queryOnceDfds[r])===null||s===void 0)&&s.length||(delete this.queryCbs[r],delete this.queryOnceDfds[r],this._trySendAuthed(tt(),{op:"remove-query",q:t}))}_rewriteMutations(t,r,i){if(!t)return r;const s=y=>{const[g,w,b]=y["forward-identity"];return It(t,w,b)},l=y=>{const[g,w,b]=y["forward-identity"];return ri(t,w,b)},u={attrIdMap:{},refSwapAttrIds:new Set};let d=!1;const h=(y,g)=>{const w=[];for(const b of y){const[_]=b;if(_==="add-attr"){const[M,S]=b,C=s(S);if(C&&S.id!==C.id){u.attrIdMap[S.id]=C.id,d=!0;continue}if(S["value-type"]==="ref"){const A=l(S);if(A){u.attrIdMap[S.id]=A.id,u.refSwapAttrIds.add(S.id),d=!0;continue}}}if(i&&g&&i>=g&&_==="add-attr"||_==="update-attr"||_==="delete-attr"){d=!0;continue}const T=d?SO(u,b):b;w.push(T)}return d?w:y},p=new Map;for(const[y,g]of r.entries())p.set(y,Object.assign(Object.assign({},g),{"tx-steps":h(g["tx-steps"],g["tx-id"])}));return d?p:r}_rewriteMutationsSorted(t,r){return f1(this._rewriteMutations(t,r).entries())}optimisticAttrs(){var t;const r=[...this.pendingMutations.currentValue.values()].flatMap(d=>d["tx-steps"]),i=new Set(r.filter(([d,h])=>d==="delete-attr").map(([d,h])=>h)),s=[];for(const[d,h]of r)if(d==="add-attr")s.push(h);else if(d==="update-attr"&&h.id&&(!((t=this.attrs)===null||t===void 0)&&t[h.id])){const p=Object.assign(Object.assign({},this.attrs[h.id]),h);s.push(p)}const l=[...Object.values(this.attrs||{}),...s].filter(d=>!i.has(d.id));return Object.fromEntries(l.map(d=>[d.id,d]))}dataForQuery(t){const r=this._errorMessage;if(r)return{error:r};if(!this.querySubs||!this.pendingMutations)return;const i=this.querySubs.version(),s=this.querySubs.currentValue,l=this.pendingMutations.version(),u=this.pendingMutations.currentValue,{q:d,result:h}=s[t]||{};if(!h)return;const p=this._dataForQueryCache[t];if(p&&i===p.querySubVersion&&l===p.pendingMutationsVersion)return p.data;const{store:y,pageInfo:g,aggregate:w,processedTxId:b}=h,_=this._rewriteMutationsSorted(y.attrs,u),T=this._applyOptimisticUpdates(y,_,b),M=yO({store:T,pageInfo:g,aggregate:w},d);return this._dataForQueryCache[t]={querySubVersion:i,pendingMutationsVersion:l,data:M},M}_applyOptimisticUpdates(t,r,i){for(const[s,l]of r)(!l["tx-id"]||i&&l["tx-id"]>i)&&(t=M5(t,l["tx-steps"]));return t}notifyAll(){Object.keys(this.queryCbs).forEach(t=>{this.notifyOne(t)})}loadedNotifyAll(){this.pendingMutations.isLoading()||this.querySubs.isLoading()||this.notifyAll()}shutdown(){var t;this._log.info("[shutdown]",this.config.appId),this._isShutdown=!0,(t=this._ws)===null||t===void 0||t.close()}_sendMutation(t,r){if(r.error){this._handleMutationError("error",t,{error:r.error,message:r.error.message});return}if(this.status!==Or.AUTHENTICATED){this._finishTransaction("enqueued",t);return}const i=Math.max(5e3,this.pendingMutations.currentValue.size*5e3);this._isOnline?(this._trySend(t,r),setTimeout(()=>{this._isOnline&&this._handleMutationError("timeout",t,{message:"transaction timed out"})},i)):this._finishTransaction("enqueued",t)}_flushPendingMessages(){Object.keys(this.queryCbs).map(s=>this.querySubs.currentValue[s]).filter(s=>s).forEach(({eventId:s,q:l})=>{this._trySendAuthed(s,{op:"add-query",q:l})}),Object.values(this.queryOnceDfds).flat().forEach(({eventId:s,q:l})=>{this._trySendAuthed(s,{op:"add-query",q:l})}),this._rewriteMutationsSorted(this.attrs,this.pendingMutations.currentValue).forEach(([s,l])=>{l["tx-id"]||this._sendMutation(s,l)})}_cleanupPendingMutationsQueries(){let t=Number.MAX_SAFE_INTEGER;for(const{result:r}of Object.values(this.querySubs.currentValue))r!=null&&r.processedTxId&&(t=Math.min(t,r==null?void 0:r.processedTxId));this.pendingMutations.set(r=>{for(const[i,s]of Array.from(r.entries()))s["tx-id"]&&s["tx-id"]<=t&&r.delete(i);return r})}_cleanupPendingMutationsTimeout(){const t=Date.now();this.pendingMutations.currentValue.size<200||this.pendingMutations.set(r=>{let i=!1,s=!1;for(const[l,u]of Array.from(r.entries()))u.confirmed||(s=!0),u.confirmed&&u.confirmed+uN<t&&(r.delete(l),i=!0);if(i&&s)for(const[l,u]of Array.from(r.entries()))u.confirmed||r.delete(l);return r})}_trySendAuthed(...t){this.status===Or.AUTHENTICATED&&this._trySend(...t)}_trySend(t,r,i){this._ws.readyState===u1&&(d1[r.op]||this._log.info("[send]",this._ws._id,r.op,r),this._ws.send(JSON.stringify(Object.assign({"client-event-id":t},r))))}_startSocket(){if(this._isShutdown){this._log.info("[socket][start]",this.config.appId,"Reactor has been shut down and will not start a new socket");return}if(this._ws&&this._ws.readyState==dN){this._log.info("[socket][start]",this._ws._id,"maintained as current ws, we were still in a connecting state");return}const t=this._ws;this._ws=pN(`${this.config.websocketURI}?app_id=${this.config.appId}`),this._ws.onopen=this._wsOnOpen,this._ws.onmessage=this._wsOnMessage,this._ws.onclose=this._wsOnClose,this._ws.onerror=this._wsOnError,this._log.info("[socket][start]",this._ws._id),(t==null?void 0:t.readyState)===u1&&(this._log.info("[socket][start]",this._ws._id,"close previous ws id = ",t._id),t.close())}getLocalId(t){return Mt(this,void 0,void 0,function*(){const r=`localToken_${t}`,i=yield this._persister.getItem(r);if(i)return i;if(this._localIdPromises[r])return this._localIdPromises[r];const s=tt();return this._localIdPromises[r]=this._persister.setItem(r,s).then(()=>s),this._localIdPromises[r]})}_replaceUrlAfterOAuth(){if(typeof URL>"u")return;const t=new URL(window.location.href);if(t.searchParams.get(fp)){const r=t.toString();t.searchParams.delete(fp),t.searchParams.delete("code"),t.searchParams.delete("error");const i=t.pathname+(t.searchParams.size?"?"+t.searchParams:"")+t.hash;if(history.replaceState(history.state,"",i),typeof navigation=="object"&&typeof navigation.addEventListener=="function"&&typeof navigation.removeEventListener=="function"){let s=!1;const l=u=>{var d;s||(s=!0,navigation.removeEventListener("navigate",l),!u.userInitiated&&u.navigationType==="replace"&&((d=u.destination)===null||d===void 0?void 0:d.url)===r&&history.replaceState(history.state,"",i))};navigation.addEventListener("navigate",l)}}}_oauthLoginInit(){return Mt(this,void 0,void 0,function*(){var t,r,i,s;if(typeof window>"u"||typeof window.location>"u"||typeof URLSearchParams>"u")return null;const l=new URLSearchParams(window.location.search);if(!l.get(fp))return null;const u=l.get("error");if(u)return this._replaceUrlAfterOAuth(),{error:{message:u}};const d=l.get("code");if(!d)return null;this._replaceUrlAfterOAuth();try{const{user:h}=yield a1({apiURI:this.config.apiURI,appId:this.config.appId,code:d});return this.setCurrentUser(h),null}catch(h){return((t=h==null?void 0:h.body)===null||t===void 0?void 0:t.type)==="record-not-found"&&((i=(r=h==null?void 0:h.body)===null||r===void 0?void 0:r.hint)===null||i===void 0?void 0:i["record-type"])==="app-oauth-code"&&(yield this._hasCurrentUser())?null:{error:{message:((s=h==null?void 0:h.body)===null||s===void 0?void 0:s.message)||"Error logging in."}}}})}_waitForOAuthCallbackResponse(){return Mt(this,void 0,void 0,function*(){return yield this._oauthCallbackResponse})}__subscribeMutationErrors(t){return this.mutationErrorCbs.push(t),()=>{this.mutationErrorCbs=this.mutationErrorCbs.filter(r=>r!==t)}}subscribeAuth(t){this.authCbs.push(t);const r=this._currentUserCached;r.isLoading||t(this._currentUserCached);let i=!1;return this.getCurrentUser().then(s=>{i||_u(s,r)||t(s)}),()=>{i=!0,this.authCbs=this.authCbs.filter(s=>s!==t)}}getAuth(){return Mt(this,void 0,void 0,function*(){const{user:t,error:r}=yield this.getCurrentUser();if(r)throw r;return t})}subscribeConnectionStatus(t){return this.connectionStatusCbs.push(t),()=>{this.connectionStatusCbs=this.connectionStatusCbs.filter(r=>r!==t)}}subscribeAttrs(t){return this.attrsCbs.push(t),this.attrs&&t(this.attrs),()=>{this.attrsCbs=this.attrsCbs.filter(r=>r!==t)}}notifyAuthSubs(t){this.authCbs.forEach(r=>r(t))}notifyMutationErrorSubs(t){this.mutationErrorCbs.forEach(r=>r(t))}notifyAttrsSubs(){if(!this.attrs)return;const t=this.optimisticAttrs();this.attrsCbs.forEach(r=>r(t))}notifyConnectionStatusSubs(t){this.connectionStatusCbs.forEach(r=>r(t))}setCurrentUser(t){return Mt(this,void 0,void 0,function*(){yield this._persister.setItem(hp,JSON.stringify(t))})}getCurrentUserCached(){return this._currentUserCached}getCurrentUser(){return Mt(this,void 0,void 0,function*(){const t=yield this._waitForOAuthCallbackResponse();if(t!=null&&t.error){const s={error:t.error,user:void 0};return this._currentUserCached=Object.assign({isLoading:!1},s),s}const r=yield this._persister.getItem(hp),i={user:JSON.parse(r),error:void 0};return this._currentUserCached=Object.assign({isLoading:!1},i),i})}_hasCurrentUser(){return Mt(this,void 0,void 0,function*(){const t=yield this._persister.getItem(hp);return JSON.parse(t)!=null})}changeCurrentUser(t){return Mt(this,void 0,void 0,function*(){var r;const{user:i}=yield this.getCurrentUser();if(!_u(i,t)){yield this.setCurrentUser(t),this.updateUser(t);try{(r=this._broadcastChannel)===null||r===void 0||r.postMessage({type:"auth"})}catch(s){console.error("Error posting message to broadcast channel",s)}}})}updateUser(t){const r={error:void 0,user:t};this._currentUserCached=Object.assign({isLoading:!1},r),this._dataForQueryCache={},this.querySubs.set(i=>(Object.keys(i).forEach(s=>{delete i[s].result}),i)),this._reconnectTimeoutMs=0,this._ws.close(),this._oauthCallbackResponse=null,this.notifyAuthSubs(r)}sendMagicCode({email:t}){return WO({apiURI:this.config.apiURI,appId:this.config.appId,email:t})}signInWithMagicCode(t){return Mt(this,arguments,void 0,function*({email:r,code:i}){const s=yield ZO({apiURI:this.config.apiURI,appId:this.config.appId,email:r,code:i});return yield this.changeCurrentUser(s.user),s})}signInWithCustomToken(t){return Mt(this,void 0,void 0,function*(){const r=yield KO({apiURI:this.config.apiURI,appId:this.config.appId,refreshToken:t});return yield this.changeCurrentUser(r.user),r})}potentiallyInvalidateToken(t,r){var i;const s=(i=t==null?void 0:t.user)===null||i===void 0?void 0:i.refresh_token;if(!s)return;if(r.invalidateToken===!1){this._log.info("[auth-invalidate] skipped invalidateToken");return}eN({apiURI:this.config.apiURI,appId:this.config.appId,refreshToken:s}).then(()=>{this._log.info("[auth-invalidate] completed invalidateToken")}).catch(u=>{})}signOut(t){return Mt(this,void 0,void 0,function*(){const r=yield this.getCurrentUser();this.potentiallyInvalidateToken(r,t),yield this.changeCurrentUser(null)})}createAuthorizationURL({clientName:t,redirectURL:r}){const{apiURI:i,appId:s}=this.config;return`${i}/runtime/oauth/start?app_id=${s}&client_name=${t}&redirect_uri=${r}`}exchangeCodeForToken(t){return Mt(this,arguments,void 0,function*({code:r,codeVerifier:i}){const s=yield a1({apiURI:this.config.apiURI,appId:this.config.appId,code:r,codeVerifier:i});return yield this.changeCurrentUser(s.user),s})}issuerURI(){const{apiURI:t,appId:r}=this.config;return`${t}/runtime/${r}`}signInWithIdToken(t){return Mt(this,arguments,void 0,function*({idToken:r,clientName:i,nonce:s}){var l;const u=yield this.getCurrentUser(),d=(l=u==null?void 0:u.user)===null||l===void 0?void 0:l.refresh_token,h=yield JO({apiURI:this.config.apiURI,appId:this.config.appId,idToken:r,clientName:i,nonce:s,refreshToken:d});return yield this.changeCurrentUser(h.user),h})}joinRoom(t,r){return this._rooms[t]||(this._rooms[t]={isConnected:!1,error:void 0}),this._presence[t]=this._presence[t]||{},r&&(this._presence[t].result=this._presence[t].result||{},this._presence[t].result.user=r,this._notifyPresenceSubs(t)),this._tryJoinRoom(t,r),()=>{this._cleanupRoom(t)}}_cleanupRoom(t){var r,i,s,l;if(!(!((i=(r=this._presence[t])===null||r===void 0?void 0:r.handlers)===null||i===void 0)&&i.length)&&!Object.keys((s=this._broadcastSubs[t])!==null&&s!==void 0?s:{}).length){const u=(l=this._rooms[t])===null||l===void 0?void 0:l.isConnected;delete this._rooms[t],delete this._presence[t],delete this._broadcastSubs[t],u?this._tryLeaveRoom(t):this._roomsPendingLeave[t]=!0}}getPresence(t,r,i={}){const s=this._rooms[r],l=this._presence[r];return!s||!l||!l.result?null:Object.assign(Object.assign({},oN(l.result,i,this._sessionId)),{isLoading:!s.isConnected,error:s.error})}publishPresence(t,r,i){const s=this._rooms[r],l=this._presence[r];if(!s||!l)return;l.result=l.result||{};const u=Object.assign(Object.assign({},l.result.user),i);l.result.user=u,s.isConnected&&(this._trySetPresence(r,u),this._notifyPresenceSubs(r))}_trySetPresence(t,r){this._trySendAuthed(tt(),{op:"set-presence","room-id":t,data:r})}_tryJoinRoom(t,r){this._trySendAuthed(tt(),{op:"join-room","room-id":t,data:r}),delete this._roomsPendingLeave[t]}_tryLeaveRoom(t){this._trySendAuthed(tt(),{op:"leave-room","room-id":t})}subscribePresence(t,r,i,s){const l=this.joinRoom(r,i.data),u=Object.assign(Object.assign({},i),{roomId:r,cb:s,prev:null});return this._presence[r]=this._presence[r]||{},this._presence[r].handlers=this._presence[r].handlers||[],this._presence[r].handlers.push(u),this._notifyPresenceSub(r,u),()=>{var d,h,p;this._presence[r].handlers=(p=(h=(d=this._presence[r])===null||d===void 0?void 0:d.handlers)===null||h===void 0?void 0:h.filter(y=>y!==u))!==null&&p!==void 0?p:[],l()}}_notifyPresenceSubs(t){var r,i;(i=(r=this._presence[t])===null||r===void 0?void 0:r.handlers)===null||i===void 0||i.forEach(s=>{this._notifyPresenceSub(t,s)})}_notifyPresenceSub(t,r){const i=this.getPresence("",t,r);i&&(r.prev&&!sN(i,r.prev)||(r.prev=i,r.cb(i)))}_patchPresencePeers(t,r){var i,s,l;const u=((s=(i=this._presence[t])===null||i===void 0?void 0:i.result)===null||s===void 0?void 0:s.peers)||{};let d=Object.fromEntries(Object.entries(u).map(([p,y])=>[p,{data:y}]));(l=this._presence[t])===null||l===void 0||l.result;const h=im(d,p=>{for(let[y,g,w]of r)switch(g){case"+":KM(p,y,w);break;case"r":Gw(p,y,w);break;case"-":k2(p,y);break}delete p[this._sessionId]});this._setPresencePeers(t,h)}_setPresencePeers(t,r){const i=Object.assign({},r);delete i[this._sessionId];const s=Object.fromEntries(Object.entries(i).map(([l,u])=>[l,u.data]));this._presence=im(this._presence,l=>{Gw(l,[t,"result","peers"],s)})}publishTopic({roomType:t,roomId:r,topic:i,data:s}){var l;const u=this._rooms[r];if(u){if(!u.isConnected){this._broadcastQueue[r]=(l=this._broadcastQueue[r])!==null&&l!==void 0?l:[],this._broadcastQueue[r].push({topic:i,roomType:t,data:s});return}this._tryBroadcast(r,t,i,s)}}_tryBroadcast(t,r,i,s){this._trySendAuthed(tt(),{op:"client-broadcast","room-id":t,roomType:r,topic:i,data:s})}subscribeTopic(t,r,i){const s=this.joinRoom(t);return this._broadcastSubs[t]=this._broadcastSubs[t]||{},this._broadcastSubs[t][r]=this._broadcastSubs[t][r]||[],this._broadcastSubs[t][r].push(i),this._presence[t]=this._presence[t]||{},()=>{this._broadcastSubs[t][r]=this._broadcastSubs[t][r].filter(l=>l!==i),this._broadcastSubs[t][r].length||delete this._broadcastSubs[t][r],s()}}_notifyBroadcastSubs(t,r,i){var s,l,u;(u=(l=(s=this._broadcastSubs)===null||s===void 0?void 0:s[t])===null||l===void 0?void 0:l[r])===null||u===void 0||u.forEach(d=>{var h,p,y,g,w,b;const _=(h=i.data)===null||h===void 0?void 0:h.data,T=i.data["peer-id"]===this._sessionId?(y=(p=this._presence[t])===null||p===void 0?void 0:p.result)===null||y===void 0?void 0:y.user:(b=(w=(g=this._presence[t])===null||g===void 0?void 0:g.result)===null||w===void 0?void 0:w.peers)===null||b===void 0?void 0:b[i.data["peer-id"]];return d(_,T)})}uploadFile(t,r,i){return Mt(this,void 0,void 0,function*(){var s;const l=yield this.getCurrentUser(),u=(s=l==null?void 0:l.user)===null||s===void 0?void 0:s.refresh_token;return tN(Object.assign(Object.assign({},i),{apiURI:this.config.apiURI,appId:this.config.appId,path:t,file:r,refreshToken:u}))})}deleteFile(t){return Mt(this,void 0,void 0,function*(){var r;const i=yield this.getCurrentUser(),s=(r=i==null?void 0:i.user)===null||r===void 0?void 0:r.refresh_token;return yield nN({apiURI:this.config.apiURI,appId:this.config.appId,path:t,refreshToken:s})})}upload(t,r){return Mt(this,void 0,void 0,function*(){var i;const s=yield this.getCurrentUser(),l=(i=s==null?void 0:s.user)===null||i===void 0?void 0:i.refresh_token,u=t||r.name,d=yield rN({apiURI:this.config.apiURI,appId:this.config.appId,fileName:u,refreshToken:l});return yield aN(d,r)})}getDownloadUrl(t){return Mt(this,void 0,void 0,function*(){var r;const i=yield this.getCurrentUser(),s=(r=i==null?void 0:i.user)===null||r===void 0?void 0:r.refresh_token;return yield iN({apiURI:this.config.apiURI,appId:this.config.appId,path:t,refreshToken:s})})}}class Pn{constructor(t,r,i,s={indexed:!1,unique:!1}){this.valueType=t,this.required=r,this.isIndexed=i,this.config=s,this.metadata={}}clientRequired(){return new Pn(this.valueType,!1,this.isIndexed,this.config)}optional(){return new Pn(this.valueType,!1,this.isIndexed,this.config)}unique(){return new Pn(this.valueType,this.required,this.isIndexed,Object.assign(Object.assign({},this.config),{unique:!0}))}indexed(){return new Pn(this.valueType,this.required,!0,Object.assign(Object.assign({},this.config),{indexed:!0}))}}class sd{constructor(t,r){this.attrs=t,this.links=r}asType(){return new sd(this.attrs,this.links)}}class ld{constructor(t,r,i){this.entities=t,this.links=r,this.rooms=i}withRoomSchema(){return new ld(this.entities,this.links,{})}}function bN(e,t){return new ld(V2(e,t),t,void 0)}function wN(e){return new sd(e,{})}function xN(){return new Pn("string",!0,!1)}function _N(){return new Pn("number",!0,!1)}function SN(){return new Pn("boolean",!0,!1)}function TN(){return new Pn("date",!0,!1)}function kN(){return new Pn("json",!0,!1)}function EN(){return new Pn("json",!0,!1)}function V2(e,t){var r,i,s,l;const u={fwd:{},rev:{}};for(const h of Object.values(t))(r=u.fwd)[i=h.forward.on]||(r[i]={}),(s=u.rev)[l=h.reverse.on]||(s[l]={}),u.fwd[h.forward.on][h.forward.label]={entityName:h.reverse.on,cardinality:h.forward.has},u.rev[h.reverse.on][h.reverse.label]={entityName:h.forward.on,cardinality:h.reverse.has};return Object.fromEntries(Object.entries(e).map(([h,p])=>[h,new sd(p.attrs,Object.assign(Object.assign({},u.fwd[h]),u.rev[h]))]))}function CN({entities:e,links:t,rooms:r}){const i=t??{},s=r??{};return new ld(V2(e,i),i,s)}const xt={graph:bN,schema:CN,entity:wN,string:xN,number:_N,boolean:SN,date:TN,json:kN,any:EN};let iu;function MN(e,t){iu==null||iu.dispose();const r=DN(t),i=AN(t,d),s=NN(ON(e));function l(y){var g;y.source===s.element.contentWindow&&((g=y.data)===null||g===void 0?void 0:g.type)==="close"&&r.isVisible()&&d()}function u(y){const g=y.shiftKey&&y.ctrlKey&&y.key==="0",w=y.key==="Escape"||y.key==="Esc";(g||w&&r.isVisible())&&d()}function d(){r.isVisible()?r.element.style.display="none":(r.element.style.display="block",r.element.contains(s.element)||r.element.appendChild(s.element))}function h(){r.element.remove(),i.element.remove(),removeEventListener("keydown",u),removeEventListener("message",l)}function p(){document.body.appendChild(r.element),document.body.appendChild(i.element),addEventListener("keydown",u),addEventListener("message",l),iu={dispose:h}}return p()}function ON(e){return`${bg||X2?"http://localhost:3000":"https://instantdb.com"}/_devtool?appId=${e}`}function NN(e){const t=document.createElement("iframe");return t.src=e,t.className="instant-devtool-iframe",Object.assign(t.style,{width:"100%",height:"100%",backgroundColor:"white",border:"none"}),{element:t}}function AN(e,t){const r=`
    <svg width="32" height="32" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" fill="black"/>
      <rect x="97.0973" y="91.3297" width="140" height="330" fill="white"/>
    </svg>
  `,i=document.createElement("button");return i.innerHTML=r,i.className="instant-devtool-toggler",Object.assign(i.style,Object.assign(Object.assign({position:"fixed"},zN(e.position)),{height:"32px",width:"32px",display:"flex",alignItems:"center",justifyContent:"center",zIndex:"9010",padding:"0",margin:"0",border:"none",cursor:"pointer"})),i.addEventListener("click",t),{element:i}}function zN(e){switch(e){case"bottom-left":return{bottom:"24px",left:"24px"};case"bottom-right":return{bottom:"24px",right:"24px"};case"top-right":return{top:"24px",right:"24px"};case"top-left":return{top:"24px",left:"24px"}}}function RN(e){switch(e){case"bottom-left":return{bottom:"24px",right:"24px",left:"60px",top:"72px"};case"bottom-right":return{bottom:"24px",left:"24px",right:"60px",top:"72px"};case"top-right":return{top:"24px",left:"24px",right:"60px",bottom:"72px"};case"top-left":return{top:"24px",right:"24px",left:"60px",bottom:"72px"}}}function DN(e){const t=document.createElement("div");Object.assign(t.style,Object.assign(Object.assign({position:"fixed"},RN(e.position)),{display:"block",borderRadius:"4px",border:"1px #ccc solid",boxShadow:"0px 0px 8px #00000044",backgroundColor:"#eee",zIndex:"999990"})),t.style.display="none",t.className="instant-devtool-container";function r(){return t.style.display!=="none"}return{element:t,isVisible:r}}const jN={apiURI:"https://api.instantdb.com",websocketURI:"wss://api.instantdb.com/runtime/session"};function UN(){var e;return globalThis.__instantDbSchemaHashStore=(e=globalThis.__instantDbSchemaHashStore)!==null&&e!==void 0?e:new WeakMap,globalThis.__instantDbSchemaHashStore}function LN(){var e;return globalThis.__instantDbStore=(e=globalThis.__instantDbStore)!==null&&e!==void 0?e:{},globalThis.__instantDbStore}function vm(e){const t=e.__adminToken;return e.appId+"_"+(e.websocketURI||"default_ws_uri")+"_"+(e.apiURI||"default_api_uri")+"_"+(t||"client_only")+"_"+e.useDateObjects}const ym=LN(),pp=UN();class $N{constructor(t){this.db=t,this.sendMagicCode=r=>this.db.sendMagicCode(r),this.signInWithMagicCode=r=>this.db.signInWithMagicCode(r),this.signInWithToken=r=>this.db.signInWithCustomToken(r),this.createAuthorizationURL=r=>this.db.createAuthorizationURL(r),this.signInWithIdToken=r=>this.db.signInWithIdToken(r),this.exchangeOAuthCode=r=>this.db.exchangeCodeForToken(r),this.issuerURI=()=>this.db.issuerURI(),this.signOut=(r={invalidateToken:!0})=>this.db.signOut(r)}}class HN{constructor(t){this.db=t,this.uploadFile=(r,i,s={})=>this.db.uploadFile(r,i,s),this.delete=r=>this.db.deleteFile(r),this.upload=(r,i)=>this.db.upload(r,i),this.put=this.upload,this.getDownloadUrl=r=>this.db.getDownloadUrl(r)}}class IN{constructor(t){this.tx=$2(),this._reactor=t,this.auth=new $N(this._reactor),this.storage=new HN(this._reactor)}transact(t){return this._reactor.pushTx(t)}getLocalId(t){return this._reactor.getLocalId(t)}subscribeQuery(t,r,i){return this._reactor.subscribeQuery(t,r,i)}subscribeAuth(t){return this._reactor.subscribeAuth(t)}getAuth(){return this._reactor.getAuth()}subscribeConnectionStatus(t){return this._reactor.subscribeConnectionStatus(t)}joinRoom(t="_defaultRoomType",r="_defaultRoomId",i){return{leaveRoom:this._reactor.joinRoom(r,i==null?void 0:i.initialPresence),subscribeTopic:(l,u)=>this._reactor.subscribeTopic(r,l,u),subscribePresence:(l,u)=>this._reactor.subscribePresence(t,r,l,u),publishTopic:(l,u)=>this._reactor.publishTopic({roomType:t,roomId:r,topic:l,data:u}),publishPresence:l=>this._reactor.publishPresence(t,r,l),getPresence:l=>this._reactor.getPresence(t,r,l)}}shutdown(){delete ym[vm(this._reactor.config)],this._reactor.shutdown()}queryOnce(t,r){return this._reactor.queryOnce(t,r)}}function h1(e){if(!e)return"0";if(pp.get(e))return pp.get(e);const t=hn(e);return pp.set(e,t),t}function qN(e,t){return h1(e._reactor.config.schema)!==h1(t)}function YN(e,t,r,i){const s=ym[vm(e)];if(s)return qN(s,e.schema)&&s._reactor.updateSchema(e.schema),s;const l=new yN(Object.assign(Object.assign(Object.assign({},jN),e),{cardinalityInference:!!e.schema}),t||q2,r||Y2,Object.assign(Object.assign({},i||{}),{"@instantdb/core":P2})),u=new IN(l);return ym[vm(e)]=u,BN(e.appId,e.devtool),u}function BN(e,t){if(typeof window>"u"||typeof window.location>"u"||typeof document>"u"||typeof t=="boolean"&&!t)return;const r=Object.assign({position:"bottom-right",allowedHosts:["localhost"]},typeof t=="object"?t:{});r.allowedHosts.includes(window.location.hostname)&&MN(e,r)}const XN=xt.schema({entities:{party:xt.entity({name:xt.string().unique().indexed(),players:xt.any().optional(),gameState:xt.any().optional()}),roomEvent:xt.entity({it:xt.any()}),players:xt.entity({localId:xt.string().unique().indexed(),name:xt.string(),avatar:xt.string()}),words:xt.entity({word:xt.string().unique().indexed(),lang:xt.string(),category:xt.string().optional()}),curretLine:xt.entity({color:xt.string(),dots:xt.any(),width:xt.number()})},links:{partyRoomEvents:{forward:{on:"party",has:"many",label:"roomEvents"},reverse:{on:"roomEvent",has:"one",label:"party"}},partyPlayers:{forward:{on:"party",has:"many",label:"players2"},reverse:{on:"players",has:"many",label:"parties"}},partyCurrentLine:{forward:{on:"party",has:"one",label:"currentLine"},reverse:{on:"curretLine",has:"one",label:"party"}}},rooms:{}}),FN=XN,PN="59599101-16e7-493b-8644-ccb75b6cb032",Te=YN({appId:PN,schema:FN}),{$allParties:G2}=VN();function VN(){const e=Qe(),t=zo(e,[]);return Te.subscribeQuery({party:{players2:{}}},r=>{r.error&&console.error(r.error),r.data&&e(r.data.party)}),{$allParties:t}}const bm=600;function cd(e,t){let r,i=()=>{};e.watch(s=>{s!==r&&(i(),i=t(s),r=s)})}const GN=(()=>{const e=window.location.search.slice(1);if(e)return e;const t=window.location.pathname,r="/scribble/";return t.startsWith(r)&&t.slice(r.length)||""})();function Ls(e){return e[Math.floor(Math.random()*e.length)]}function p1(e){if(!e.length)return"";const t=e.reduce((r,[i,s],l,u)=>{const[d,h]=u[(l+1)%u.length];return r.push(i,s,(i+d)/2,(s+h)/2),r},["M",...e[0],"Q"]);return t.push("Z"),t.map(QN).join(" ")}function QN(e){return typeof e=="number"?+e.toFixed(1):e}function ou(e,t=0){if(e.length<=1||!t)return e;const r=[e[0]];for(let l=1;l<e.length;l++){const u=e[l],d=r[r.length-1],h=u[0]-d[0],p=u[1]-d[1];Math.sqrt(h*h+p*p)>=t&&r.push(u)}const i=e[e.length-1],s=r[r.length-1];return i!==s&&r.push(i),r}function WN(e,t,r){return Math.max(t,Math.min(e,r))}function wa(e){return Math.round(e*1e4)/1e4}function su(e){return Math.round(e*100)/100}function mp(e,t){if(!e)throw new Error(t||"Assertion failed")}function $s(e){return`${wa(e.x)},${wa(e.y)} `}function m1(e,t){return`${wa((e.x+t.x)/2)},${wa((e.y+t.y)/2)} `}function ZN(){return window.location.pathname.includes("/scribble/")?"/scribble/":"/"}function ti(e){return`${ZN()}${e||""}`}function KN(e,t,r,i){if(t.length===0)throw new Event("Can't play without players");let s={playerIds:t,params:r,messages:[],paintings:[],state:{state:"choosing-word",playerId:t[0],words:i}};const l=[],u={};return e.forEach(d=>{var h;if(d.type==="line"||d.type==="undo"){(h=l.at(-1))==null||h.events.push(d);return}(d.type==="guess"||d.type==="choosing-word"||d.type==="new-word")&&(d.type==="guess"&&s.state.state==="drawing"&&(Q2(s.state.word,d.text),d.isRevealed==="revealed"&&s.state.revealed.push({playerId:d.player})),s.messages.push(d)),d.type==="choosing-word"?s={...s,state:{state:"choosing-word",playerId:d.playerId,words:d.words}}:d.type==="new-word"&&(u[d.playerId]||(u[d.playerId]=[]),l.push({events:[],playerId:d.playerId,word:d.word}),u[d.playerId].push(d.playerId),s={...s,state:{state:"drawing",playerId:d.playerId,word:d.word,revealed:[]}})}),[s,l]}function Q2(e,t){return e=e.replace(/\S/g,"").toLowerCase(),t=e.replace(/\S/g,"").toLowerCase(),e===t?"revealed":"none"}function g1(e){return e[Math.floor(Math.random()*e.length)]}function JN(){return g1(tA)+" "+g1(eA)}const eA=["cat","dog","sun","sky","tree","bird","fish","hand","foot","ball","star","book","car","bed","toy","hat","cup","box","map","pen"],tA=["big","hot","red","old","wet","new","sad","tall","cold","fat","dry","fun","shy","blue","cute","kind","dark","loud","warm","fast"],W2=Qe(),wg=vn([]);wg.on(W2,(e,t)=>t);Te.subscribeQuery({words:{}},e=>{e.error&&console.error(e.error),e.data&&W2(e.data.words||[])});function nA(e,t){return Te.transact(Te.tx.words[tt()].create({word:e.trim(),lang:t.toUpperCase(),category:""}))}function rA(e,t){return Te.transact(e.slice(0,100).map(r=>Te.tx.words[tt()].create({word:r.trim(),lang:"RU",category:""})))}const aA={linear:e=>e},iA={simulatePressure:!1,smoothing:1,thinning:.1,streamline:0,easing:aA.linear},Gs=[3,8,15,20,25],Z2=["#111111","#34495e","#faf9f5","#ffffff","#8b4513","#fa3224","#ffa729","#ffd129","#2ecc71","#3498db","#9b59b6","#ff69b4"],wm={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e*e:-1+(4-2*e)*e,easeInCubic:e=>e*e*e,easeOutCubic:e=>--e*e*e+1,easeInOutCubic:e=>e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1- --e*e*e*e,easeInOutQuart:e=>e<.5?8*e*e*e*e:1-8*--e*e*e*e,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1+--e*e*e*e*e,easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>e<=0?0:Math.pow(2,10*e-10),easeOutExpo:e=>e>=1?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>e<=0?0:e>=1?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2};class G{constructor(t=0,r=0,i=1){this.x=t,this.y=r,this.z=i}get pressure(){return this.z}set(t=this.x,r=this.y,i=this.z){return this.x=t,this.y=r,this.z=i,this}setTo({x:t=0,y:r=0,z:i=1}){return this.x=t,this.y=r,this.z=i,this}rot(t){if(t===0)return this;const{x:r,y:i}=this,s=Math.sin(t),l=Math.cos(t);return this.x=r*l-i*s,this.y=r*s+i*l,this}rotWith(t,r){if(r===0)return this;const i=this.x-t.x,s=this.y-t.y,l=Math.sin(r),u=Math.cos(r);return this.x=t.x+(i*u-s*l),this.y=t.y+(i*l+s*u),this}clone(){const{x:t,y:r,z:i}=this;return new G(t,r,i)}sub(t){return this.x-=t.x,this.y-=t.y,this}subXY(t,r){return this.x-=t,this.y-=r,this}subScalar(t){return this.x-=t,this.y-=t,this}add(t){return this.x+=t.x,this.y+=t.y,this}addXY(t,r){return this.x+=t,this.y+=r,this}addScalar(t){return this.x+=t,this.y+=t,this}clamp(t,r){return this.x=Math.max(this.x,t),this.y=Math.max(this.y,t),r!==void 0&&(this.x=Math.min(this.x,r),this.y=Math.min(this.y,r)),this}div(t){return this.x/=t,this.y/=t,this}divV(t){return this.x/=t.x,this.y/=t.y,this}mul(t){return this.x*=t,this.y*=t,this}mulV(t){return this.x*=t.x,this.y*=t.y,this}abs(){return this.x=Math.abs(this.x),this.y=Math.abs(this.y),this}nudge(t,r){const i=G.Tan(t,this);return this.add(i.mul(r))}neg(){return this.x*=-1,this.y*=-1,this}cross(t){return this.x=this.y*t.z-this.z*t.y,this.y=this.z*t.x-this.x*t.z,this}dpr(t){return G.Dpr(this,t)}cpr(t){return G.Cpr(this,t)}len2(){return G.Len2(this)}len(){return G.Len(this)}pry(t){return G.Pry(this,t)}per(){const{x:t,y:r}=this;return this.x=r,this.y=-t,this}uni(){const t=this.len();return t===0?this:(this.x/=t,this.y/=t,this)}tan(t){return this.sub(t).uni()}dist(t){return G.Dist(this,t)}distanceToLineSegment(t,r){return G.DistanceToLineSegment(t,r,this)}slope(t){return G.Slope(this,t)}snapToGrid(t){return this.x=Math.round(this.x/t)*t,this.y=Math.round(this.y/t)*t,this}angle(t){return G.Angle(this,t)}toAngle(){return G.ToAngle(this)}lrp(t,r){return this.x=this.x+(t.x-this.x)*r,this.y=this.y+(t.y-this.y)*r,this}equals(t){return G.Equals(this,t)}equalsXY(t,r){return G.EqualsXY(this,t,r)}norm(){return this.uni()}toFixed(){return this.x=su(this.x),this.y=su(this.y),this}toString(){return G.ToString(G.ToFixed(this))}toJson(){return G.ToJson(this)}toArray(){return G.ToArray(this)}static Add(t,r){return new G(t.x+r.x,t.y+r.y)}static AddXY(t,r,i){return new G(t.x+r,t.y+i)}static Sub(t,r){return new G(t.x-r.x,t.y-r.y)}static SubXY(t,r,i){return new G(t.x-r,t.y-i)}static AddScalar(t,r){return new G(t.x+r,t.y+r)}static SubScalar(t,r){return new G(t.x-r,t.y-r)}static Div(t,r){return new G(t.x/r,t.y/r)}static Mul(t,r){return new G(t.x*r,t.y*r)}static DivV(t,r){return new G(t.x/r.x,t.y/r.y)}static MulV(t,r){return new G(t.x*r.x,t.y*r.y)}static Neg(t){return new G(-t.x,-t.y)}static Per(t){return new G(t.y,-t.x)}static Abs(t){return new G(Math.abs(t.x),Math.abs(t.y))}static Dist(t,r){return((t.y-r.y)**2+(t.x-r.x)**2)**.5}static ManhattanDist(t,r){return Math.abs(t.x-r.x)+Math.abs(t.y-r.y)}static DistMin(t,r,i){return(t.x-r.x)*(t.x-r.x)+(t.y-r.y)*(t.y-r.y)<i**2}static Dist2(t,r){return(t.x-r.x)*(t.x-r.x)+(t.y-r.y)*(t.y-r.y)}static Dpr(t,r){return t.x*r.x+t.y*r.y}static Cross(t,r){return new G(t.y*r.z-t.z*r.y,t.z*r.x-t.x*r.z)}static Cpr(t,r){return t.x*r.y-r.x*t.y}static Len2(t){return t.x*t.x+t.y*t.y}static Len(t){return(t.x*t.x+t.y*t.y)**.5}static Pry(t,r){return G.Dpr(t,r)/G.Len(r)}static Uni(t){const r=G.Len(t);return new G(r===0?0:t.x/r,r===0?0:t.y/r)}static Tan(t,r){return G.Uni(G.Sub(t,r))}static Min(t,r){return new G(Math.min(t.x,r.x),Math.min(t.y,r.y))}static Max(t,r){return new G(Math.max(t.x,r.x),Math.max(t.y,r.y))}static From({x:t,y:r,z:i=1}){return new G(t,r,i)}static FromArray(t){return new G(t[0],t[1])}static Rot(t,r=0){const i=Math.sin(r),s=Math.cos(r);return new G(t.x*s-t.y*i,t.x*i+t.y*s)}static RotWith(t,r,i){const s=t.x-r.x,l=t.y-r.y,u=Math.sin(i),d=Math.cos(i);return new G(r.x+(s*d-l*u),r.y+(s*u+l*d))}static NearestPointOnLineThroughPoint(t,r,i){return G.Mul(r,G.Sub(i,t).pry(r)).add(t)}static NearestPointOnLineSegment(t,r,i,s=!0){if(G.Equals(t,i)||G.Equals(r,i))return G.From(i);const l=G.Tan(r,t),u=G.Add(t,G.Mul(l,G.Sub(i,t).pry(l)));if(s){if(u.x<Math.min(t.x,r.x))return G.Cast(t.x<r.x?t:r);if(u.x>Math.max(t.x,r.x))return G.Cast(t.x>r.x?t:r);if(u.y<Math.min(t.y,r.y))return G.Cast(t.y<r.y?t:r);if(u.y>Math.max(t.y,r.y))return G.Cast(t.y>r.y?t:r)}return u}static DistanceToLineThroughPoint(t,r,i){return G.Dist(i,G.NearestPointOnLineThroughPoint(t,r,i))}static DistanceToLineSegment(t,r,i,s=!0){return G.Dist(i,G.NearestPointOnLineSegment(t,r,i,s))}static Snap(t,r=1){return new G(Math.round(t.x/r)*r,Math.round(t.y/r)*r)}static Cast(t){return t instanceof G?t:G.From(t)}static Slope(t,r){return t.x===r.y?NaN:(t.y-r.y)/(t.x-r.x)}static IsNaN(t){return isNaN(t.x)||isNaN(t.y)}static Angle(t,r){return Math.atan2(r.y-t.y,r.x-t.x)}static AngleBetween(t,r){const i=t.x*r.x+t.y*r.y,s=Math.sqrt((Math.pow(t.x,2)+Math.pow(t.y,2))*(Math.pow(r.x,2)+Math.pow(r.y,2)));return(t.x*r.y-t.y*r.x<0?-1:1)*Math.acos(WN(i/s,-1,1))}static Lrp(t,r,i){return G.Sub(r,t).mul(i).add(t)}static Med(t,r){return new G((t.x+r.x)/2,(t.y+r.y)/2)}static Equals(t,r){return Math.abs(t.x-r.x)<1e-4&&Math.abs(t.y-r.y)<1e-4}static EqualsXY(t,r,i){return t.x===r&&t.y===i}static Clockwise(t,r,i){return(i.x-t.x)*(r.y-t.y)-(r.x-t.x)*(i.y-t.y)<0}static Rescale(t,r){const i=G.Len(t);return new G(r*t.x/i,r*t.y/i)}static ScaleWithOrigin(t,r,i){return G.Sub(t,i).mul(r).add(i)}static ToFixed(t){return new G(su(t.x),su(t.y))}static ToInt(t){return new G(parseInt(t.x.toFixed(0)),parseInt(t.y.toFixed(0)),parseInt((t.z??0).toFixed(0)))}static ToCss(t){return`${t.x},${t.y}`}static Nudge(t,r,i){return G.Add(t,G.Tan(r,t).mul(i))}static ToString(t){return`${t.x}, ${t.y}`}static ToAngle(t){let r=Math.atan2(t.y,t.x);return r<0&&(r+=Math.PI*2),r}static FromAngle(t,r=1){return new G(Math.cos(t)*r,Math.sin(t)*r)}static ToArray(t){return[t.x,t.y,t.z]}static ToJson(t){const{x:r,y:i,z:s}=t;return{x:r,y:i,z:s}}static Average(t){const r=t.length,i=new G(0,0);if(r===0)return i;for(let s=0;s<r;s++)i.add(t[s]);return i.div(r)}static Clamp(t,r,i){return i===void 0?new G(Math.min(Math.max(t.x,r)),Math.min(Math.max(t.y,r))):new G(Math.min(Math.max(t.x,r),i),Math.min(Math.max(t.y,r),i))}static PointsBetween(t,r,i=6){const s=[];for(let l=0;l<i;l++){const u=wm.easeInQuad(l/(i-1)),d=G.Lrp(t,r,u);d.z=Math.min(1,.5+Math.abs(.5-oA(u))*.65),s.push(d)}return s}static SnapToGrid(t,r=8){return new G(Math.round(t.x/r)*r,Math.round(t.y/r)*r)}}const oA=e=>e<.5?2*e*e:-1+(4-2*e)*e,{PI:sA}=Math,gp=sA+1e-4;function K2(e,t={}){const{size:r=16,smoothing:i=.5}=t;if(e.length===0||r<=0)return{left:[],right:[]};const s=e[0],l=e[e.length-1],u=l.runningLength,d=Math.pow(r*i,2),h=[],p=[];let y=e[0].vector,g=e[0].point,w=g,b=g,_=w,T=!1,M;for(let S=0;S<e.length;S++){M=e[S];const{point:C,vector:A}=e[S],U=M.vector.dpr(y),D=(S<e.length-1?e[S+1]:e[S]).vector,P=S<e.length-1?D.dpr(M.vector):1,V=U<0&&!T,ee=P!==null&&P<.2;if(V||ee){if(P>-.62&&u-M.runningLength>M.radius){const ue=y.clone().mul(M.radius);y.clone().cpr(D)<0?(b=G.Add(C,ue),_=G.Sub(C,ue)):(b=G.Sub(C,ue),_=G.Add(C,ue)),h.push(b),p.push(_)}else{const ue=y.clone().mul(M.radius).per(),se=G.Sub(M.input,ue);for(let ae=1/13,be=0;be<1;be+=ae)b=G.RotWith(se,M.input,gp*be),h.push(b),_=G.RotWith(se,M.input,gp+gp*-be),p.push(_)}g=b,w=_,ee&&(T=!0);continue}if(T=!1,M===s||M===l){const ue=G.Per(A).mul(M.radius);h.push(G.Sub(C,ue)),p.push(G.Add(C,ue));continue}const ne=G.Lrp(D,A,P).per().mul(M.radius);b=G.Sub(C,ne),(S<=1||G.Dist2(g,b)>d)&&(h.push(b),g=b),_=G.Add(C,ne),(S<=1||G.Dist2(w,_)>d)&&(p.push(_),w=_),y=A}return{left:h,right:p}}const lA=.025,cA=.01;function J2(e,t={}){var M;const{streamline:r=.5,size:i=16,simulatePressure:s=!1}=t;if(e.length===0)return[];const l=.15+(1-r)*.85;let u=e.map(G.From),d=0;if(!s){let S=u[0];for(;S&&!(S.z>=lA);)u.shift(),S=u[0]}if(!s){let S=u[u.length-1];for(;S&&!(S.z>=cA);)u.pop(),S=u[u.length-1]}if(u.length===0)return[{point:G.From(e[0]),input:G.From(e[0]),pressure:s?.5:.15,vector:new G(1,1),distance:0,runningLength:0,radius:1}];let h=u[1];for(;h&&!(G.Dist2(h,u[0])>(i/3)**2);)u[0].z=Math.max(u[0].z,h.z),u.splice(1,1),h=u[1];const p=u.pop();for(h=u[u.length-1];h&&!(G.Dist2(h,p)>(i/3)**2);)u.pop(),h=u[u.length-1],d++;u.push(p);const y=t.last||!t.simulatePressure||u.length>1&&G.Dist2(u[u.length-1],u[u.length-2])<i**2||d>0;if(u.length===2&&t.simulatePressure){const S=u[1];u=u.slice(0,-1);for(let C=1;C<5;C++){const A=G.Lrp(u[0],S,C/4);A.z=(u[0].z+(S.z-u[0].z))*C/4,u.push(A)}}const g=[{point:u[0],input:u[0],pressure:s?.5:u[0].z,vector:new G(1,1),distance:0,runningLength:0,radius:1}];let w=0,b=g[0],_,T;y&&r>0&&u.push(u[u.length-1].clone());for(let S=1,C=u.length;S<C;S++)_=!l||t.last&&S===C-1?u[S].clone():u[S].clone().lrp(b.point,1-l),!b.point.equals(_)&&(T=G.Dist(_,b.point),w+=T,!(S<4&&w<i)&&(b={input:u[S],point:_,pressure:s?.5:u[S].z,vector:G.Sub(b.point,_).uni(),distance:T,runningLength:w,radius:1},g.push(b)));if((M=g[1])!=null&&M.vector&&(g[0].vector=g[1].vector.clone()),w<1){const S=Math.max(.5,...g.map(C=>C.pressure));g.forEach(C=>C.pressure=S)}return g}const{min:pa}=Math,vp=.275;function e_(e,t){const{size:r=16,thinning:i=.5,simulatePressure:s=!0,easing:l=M=>M,start:u={},end:d={}}=t,{easing:h=wm.easeOutQuad}=u,{easing:p=wm.easeOutCubic}=d,y=e[e.length-1].runningLength;let g,w=e[0].pressure,b;if(!s&&y<r){const M=e.reduce((S,C)=>Math.max(S,C.pressure),.5);return e.forEach(S=>{S.pressure=M,S.radius=r*l(.5-i*(.5-S.pressure))}),e}else{let M;for(let S=0,C=e.length;S<C&&(b=e[S],!(b.runningLength>r*5));S++){const A=pa(1,b.distance/r);if(s){const U=pa(1,1-A);M=pa(1,w+(U-w)*(A*vp))}else M=pa(1,w+(b.pressure-w)*.5);w=w+(M-w)*.5}for(let S=0;S<e.length;S++){if(b=e[S],i){let{pressure:C}=b;const A=pa(1,b.distance/r);if(s){const U=pa(1,1-A);C=pa(1,w+(U-w)*(A*vp))}else C=pa(1,w+(C-w)*(A*vp));b.radius=r*l(.5-i*(.5-C)),w=C}else b.radius=r/2;g===void 0&&(g=b.radius)}}const _=u.taper===!1?0:u.taper===!0?Math.max(r,y):u.taper,T=d.taper===!1?0:d.taper===!0?Math.max(r,y):d.taper;if(_||T)for(let M=0;M<e.length;M++){b=e[M];const{runningLength:S}=b,C=S<_?h(S/_):1,A=y-S<T?p((y-S)/T):1;b.radius=Math.max(.01,b.radius*Math.min(C,A))}return e}function Co(e,t={}){const{start:r={},end:i={}}=t,{cap:s=!0}=r,{cap:l=!0}=i;mp(!r.taper&&!i.taper,"cap taper not supported here"),mp(!r.easing&&!i.easing,"cap easing not supported here"),mp(s&&l,"cap must be true");const u=J2(e,t);e_(u,t);const d=uA(u);let h="";for(const p of d)h+=fA(p,t);return h}function uA(e){if(e.length<=2)return[e];const t=[];let r=[e[0]],i=G.Sub(e[1].point,e[0].point).uni(),s,l,u,d,h;for(let p=1,y=e.length;p<y-1;p++){if(u=e[p-1],d=e[p],h=e[p+1],s=G.Sub(h.point,d.point).uni(),l=G.Dpr(i,s),i=s,l<-.8){const g={...d,point:d.input};r.push(g),t.push(yp(r)),r=[g];continue}if(r.push(d),!(l>.7)&&(G.Dist2(u.point,d.point)+G.Dist2(d.point,h.point))/((u.radius+d.radius+h.radius)/3)**2<1.5){r.push(d),t.push(yp(r)),r=[d];continue}}return r.push(e[e.length-1]),t.push(yp(r)),t}function yp(e){const t=e[0];let r;for(;e.length>2&&(r=e[1],G.Dist2(t.point,r.point)<((t.radius+r.radius)/2*.5)**2);)e.splice(1,1);const i=e[e.length-1];let s;for(;e.length>2&&(s=e[e.length-2],G.Dist2(i.point,s.point)<((i.radius+s.radius)/2*.5)**2);)e.splice(e.length-2,1);return e.length>1&&(e[0]={...e[0],vector:G.Sub(e[0].point,e[1].point).uni()},e[e.length-1]={...e[e.length-1],vector:G.Sub(e[e.length-2].point,e[e.length-1].point).uni()}),e}function dA(e,t,r){return"M "+e+" "+t+" m -"+r+", 0 a "+r+","+r+" 0 1,1 "+r*2+",0 a "+r+","+r+" 0 1,1 -"+r*2+",0"}function fA(e,t={}){if(e.length===0)return"";if(e.length===1)return dA(e[0].point.x,e[0].point.y,e[0].radius);const{left:r,right:i}=K2(e,t);i.reverse();let s=`M${$s(r[0])}T`;for(let l=1;l<r.length;l++)s+=m1(r[l-1],r[l]);{const l=e[e.length-1],u=l.radius,d=l.vector.clone().per().neg(),h=G.Add(l.point,G.Mul(d,u)),p=G.Add(l.point,G.Mul(d,-u));s+=`${$s(h)}A${wa(u)},${wa(u)} 0 0 1 ${$s(p)}T`}for(let l=1;l<i.length;l++)s+=m1(i[l-1],i[l]);{const l=e[0],u=l.radius,d=l.vector.clone().per(),h=G.Add(l.point,G.Mul(d,u)),p=G.Add(l.point,G.Mul(d,-u));s+=`${$s(h)}A${wa(u)},${wa(u)} 0 0 1 ${$s(p)}Z`}return s}function v1(e,t,r,i=s=>s){return e*i(.5-t*(.5-r))}function hA(e){return[-e[0],-e[1]]}function Bn(e,t){return[e[0]+t[0],e[1]+t[1]]}function An(e,t){return[e[0]-t[0],e[1]-t[1]]}function qn(e,t){return[e[0]*t,e[1]*t]}function pA(e,t){return[e[0]/t,e[1]/t]}function Hs(e){return[e[1],-e[0]]}function y1(e,t){return e[0]*t[0]+e[1]*t[1]}function mA(e,t){return e[0]===t[0]&&e[1]===t[1]}function gA(e){return Math.hypot(e[0],e[1])}function vA(e){return e[0]*e[0]+e[1]*e[1]}function b1(e,t){return vA(An(e,t))}function t_(e){return pA(e,gA(e))}function yA(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function Is(e,t,r){let i=Math.sin(r),s=Math.cos(r),l=e[0]-t[0],u=e[1]-t[1],d=l*s-u*i,h=l*i+u*s;return[d+t[0],h+t[1]]}function xm(e,t,r){return Bn(e,qn(An(t,e),r))}function w1(e,t,r){return Bn(e,qn(t,r))}var{min:so,PI:bA}=Math,x1=.275,qs=bA+1e-4;function wA(e,t={}){let{size:r=16,smoothing:i=.5,thinning:s=.5,simulatePressure:l=!0,easing:u=N=>N,start:d={},end:h={},last:p=!1}=t,{cap:y=!0,easing:g=N=>N*(2-N)}=d,{cap:w=!0,easing:b=N=>--N*N*N+1}=h;if(e.length===0||r<=0)return[];let _=e[e.length-1].runningLength,T=d.taper===!1?0:d.taper===!0?Math.max(r,_):d.taper,M=h.taper===!1?0:h.taper===!0?Math.max(r,_):h.taper,S=Math.pow(r*i,2),C=[],A=[],U=e.slice(0,10).reduce((N,R)=>{let B=R.pressure;if(l){let O=so(1,R.distance/r),I=so(1,1-O);B=so(1,N+(I-N)*(O*x1))}return(N+B)/2},e[0].pressure),D=v1(r,s,e[e.length-1].pressure,u),P,V=e[0].vector,ee=e[0].point,ne=ee,ue=ee,se=ne,ae=!1;for(let N=0;N<e.length;N++){let{pressure:R}=e[N],{point:B,vector:O,distance:I,runningLength:W}=e[N];if(N<e.length-1&&_-W<3)continue;if(s){if(l){let $e=so(1,I/r),qt=so(1,1-$e);R=so(1,U+(qt-U)*($e*x1))}D=v1(r,s,R,u)}else D=r/2;P===void 0&&(P=D);let J=W<T?g(W/T):1,te=_-W<M?b((_-W)/M):1;D=Math.max(.01,D*Math.min(J,te));let ie=(N<e.length-1?e[N+1]:e[N]).vector,re=N<e.length-1?y1(O,ie):1,ve=y1(O,V)<0&&!ae,de=re!==null&&re<0;if(ve||de){let $e=qn(Hs(V),D);for(let qt=1/13,tn=0;tn<=1;tn+=qt)ue=Is(An(B,$e),B,qs*tn),C.push(ue),se=Is(Bn(B,$e),B,qs*-tn),A.push(se);ee=ue,ne=se,de&&(ae=!0);continue}if(ae=!1,N===e.length-1){let $e=qn(Hs(O),D);C.push(An(B,$e)),A.push(Bn(B,$e));continue}let ke=qn(Hs(xm(ie,O,re)),D);ue=An(B,ke),(N<=1||b1(ee,ue)>S)&&(C.push(ue),ee=ue),se=Bn(B,ke),(N<=1||b1(ne,se)>S)&&(A.push(se),ne=se),U=R,V=O}let be=e[0].point.slice(0,2),xe=e.length>1?e[e.length-1].point.slice(0,2):Bn(e[0].point,[1,1]),Se=[],E=[];if(e.length===1){if(!(T||M)||p){let N=w1(be,t_(Hs(An(be,xe))),-(P||D)),R=[];for(let B=1/13,O=B;O<=1;O+=B)R.push(Is(N,be,qs*2*O));return R}}else{if(!(T||M&&e.length===1))if(y)for(let R=1/13,B=R;B<=1;B+=R){let O=Is(A[0],be,qs*B);Se.push(O)}else{let R=An(C[0],A[0]),B=qn(R,.5),O=qn(R,.51);Se.push(An(be,B),An(be,O),Bn(be,O),Bn(be,B))}let N=Hs(hA(e[e.length-1].vector));if(M||T&&e.length===1)E.push(xe);else if(w){let R=w1(xe,N,D);for(let B=1/29,O=B;O<1;O+=B)E.push(Is(R,xe,qs*3*O))}else E.push(Bn(xe,qn(N,D)),Bn(xe,qn(N,D*.99)),An(xe,qn(N,D*.99)),An(xe,qn(N,D)))}return C.concat(E,A.reverse(),Se)}function xA(e,t={}){var r;let{streamline:i=.5,size:s=16,last:l=!1}=t;if(e.length===0)return[];let u=.15+(1-i)*.85,d=Array.isArray(e[0])?e:e.map(({x:b,y:_,pressure:T=.5})=>[b,_,T]);if(d.length===2){let b=d[1];d=d.slice(0,-1);for(let _=1;_<5;_++)d.push(xm(d[0],b,_/4))}d.length===1&&(d=[...d,[...Bn(d[0],[1,1]),...d[0].slice(2)]]);let h=[{point:[d[0][0],d[0][1]],pressure:d[0][2]>=0?d[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,y=0,g=h[0],w=d.length-1;for(let b=1;b<d.length;b++){let _=l&&b===w?d[b].slice(0,2):xm(g.point,d[b],u);if(mA(g.point,_))continue;let T=yA(_,g.point);if(y+=T,b<w&&!p){if(y<s)continue;p=!0}g={point:_,pressure:d[b][2]>=0?d[b][2]:.5,vector:t_(An(g.point,_)),distance:T,runningLength:y},h.push(g)}return h[0].vector=((r=h[1])==null?void 0:r.vector)||[0,0],h}function _A(e,t={}){return wA(xA(e,t),t)}var _1=_A;function SA(e,t){for(let r=e.length-1;r>=0;r--)if(t(e[r]))return{i:r};return null}function TA(e,t){const r=t.filter(i=>i.type==="guess"||i.type==="new-word"||i.type==="choosing-word");return r.length!==e.length?r:e}function kA({$renderMode:e,$allRoomEvents:t,$currentLine:r}){const i=Qe(),s=zo(i,iA),l=Qe(),u=t.map(g=>{const w=SA(g,_=>_.type==="new-word");if(!w)return[];const b=[];return g.slice(w.i).forEach(_=>{_.type==="line"?b.push(_):_.type==="undo"&&b.pop()}),b}),d=Qn(u,e,s,(g,w,b)=>{const _=[];return g.forEach(T=>{const M=Co(ou(T.dots).map(C=>new G(C[0],C[1])),{size:T.width}),S=p1(_1(ou(T.dots),{...b,size:T.width}));_.push({d:w==="tldraw"?M:S,color:T.color})}),_}),h=Qn(r,e,s,(g,w,b)=>{if(g.dots.length===0)return null;let _=Date.now();const T=Co(ou(g.dots).map(U=>new G(U[0],U[1])),{size:g.width});let M=Date.now()-_,S=Date.now();const C=p1(_1(ou(g.dots),{...b,size:g.width}));let A=Date.now()-S;return{d:w==="tldraw"?T:C,color:g.color,perf:{oldTime:A,newTime:M}}}),p=u,y=Qn(u,g=>{const w=[];return g.forEach((b,_)=>{const M=b.dots.map(([S,C])=>`${S},${C}`).join(" ");w.push({points:M,color:b.color,strokeWidth:b.width})}),w});return l.watch(()=>{Te.transact(Te.tx.roomEvent[tt()].create({it:{type:"undo"}}).link({party:fr.getState()}))}),{$svgCanvasPaths:d,$svgCurrentLine:h,$rawPath:p,$polylinePaths:y,undoClicked:l,$smoothConf:s,setSmoothConf:i}}const n_=Qe(),Kn=zo(n_,"");Te.getLocalId("guest").then(e=>n_(e));h_();const r_=Qe(),Mo=zo(r_,{gameState:{drawing:""},name:"",id:""}),EA=Qe(),fr=zo(EA,GN),a_=Qe(),CA=zo(a_,{id:"",localId:"",name:"",avatar:""}),ud=vn([]),_m=vn([]);pi({source:_m,clock:ud,fn:(e,t)=>TA(e,t),target:_m});const Ro=Qn(ud,e=>KN(e,["foo"],{lang:"RU",rounds:1e3,suggestions:3,canvasSize:600},"foo|bar|baz")),dd=Qn(Ro,Kn,([{state:e}],t)=>e.state==="drawing"&&e.playerId===t?e.word:""),MA=Qn(Ro,Kn,([{state:e}],t)=>e.state==="drawing"&&e.revealed.find(r=>r.playerId===t)?e.word:""),OA=Qn(Ro,Kn,([{state:e}],t)=>e.state==="drawing"?e.word.replace(/\S/g,"_"):null),NA=Qn(Ro,Kn,([{state:e}],t)=>e.state==="choosing-word"?e.words.split("|"):null),{currentLineChanged:S1,$currentLine:Bu,addLine:AA,lineStarted:zA,lineExtended:RA}=FA(fr,dd),xg=vn("tldraw"),{undoClicked:DA,$svgCanvasPaths:jA,$rawPath:UA,$polylinePaths:LA,$svgCurrentLine:$A}=kA({$allRoomEvents:ud,$renderMode:xg,$currentLine:Bu}),i_=vn(!1),HA=Qe(),IA=Qe(),o_=Qe(),s_=Qe(),l_=Qe(),c_=Qe(),u_=Qe(),d_=Qe();pi({source:[Kn,Mo],clock:o_,fn:([e,t])=>({...t,gameState:{...t.gameState,drawing:e}}),target:Mo});ud.on(d_,(e,{history:t})=>t);xg.on(HA,(e,t)=>t);i_.on(IA,(e,t)=>t);cd(fr,e=>e?Te.subscribeQuery({party:{$:{where:{id:e}},players2:{}}},t=>{var r;t.error&&console.error(t.error),(r=t.data)!=null&&r.party[0]?r_(t.data.party[0]):console.error(`No room with "${e}" id`)}):()=>{});cd(fr,e=>e?Te.subscribeQuery({roomEvent:{$:{where:{party:e},order:{serverCreatedAt:"asc"}}}},t=>{t.error&&console.error(t.error),t.data&&(console.log(t.data.roomEvent),d_({history:t.data.roomEvent.map(r=>r.it)}))}):()=>{});pi({source:[Kn,fr,Ro],clock:c_,fn:(e,t)=>[e,t]}).watch(([[e,t,[r]],{guess:i}])=>{const s={type:"guess",text:i,player:e,isRevealed:Q2(r.state.word,i)};Te.transact(Te.tx.roomEvent[tt()].create({it:s}).link({party:t}))});pi({source:[Kn,fr,wg],clock:s_}).watch(([e,t,r])=>{const i={type:"choosing-word",playerId:e,words:[Ls(r).word,Ls(r).word,Ls(r).word,Ls(r).word,Ls(r).word].join("|")};Te.transact(Te.tx.roomEvent[tt()].create({it:i}).link({party:t}))});pi({source:[Kn,fr],clock:l_,fn:(e,t)=>[e,t]}).watch(([[e,t],r])=>{const i={type:"new-word",playerId:e,word:r};Te.transact(Te.tx.roomEvent[tt()].create({it:i}).link({party:t}))});u_.watch(async()=>{const{roomEvent:e}=await Te.queryOnce({roomEvent:{$:{where:{party:fr.getState()}}}}).then(t=>t.data);console.log("DELETE"),console.log(e),e.length>0&&Te.transact(e.map(t=>Te.tx.roomEvent[t.id].delete()))});pi({source:Mo,clock:o_}).watch(e=>{Te.transact(Te.tx.party[e.id].update({gameState:{...e.gameState,drawing:e.gameState.drawing}}))});async function qA(e){const t=tt();await Te.transact([Te.tx.party[t].create({name:e,players:[],gameState:{drawing:""}}),Te.tx.curretLine[t].create({dots:[],width:8,color:"#34495e"}).link({party:t})])}async function f_(e){const t=await Te.getLocalId("guest");return await Te.transact([Te.tx.players[t].update({name:e,localId:t,avatar:""})])}async function YA(e){const t=await Te.getLocalId("guest");return await Te.transact([Te.tx.players[t].link({parties:e})])}async function BA(e){const t=await Te.getLocalId("guest");return await Te.transact([Te.tx.players[t].unlink({parties:e})])}async function h_(e=3){if(e<0)throw new Error("Can't get user");const t=await Te.getLocalId("guest"),r=await Te.queryOnce({players:{$:{where:{id:t}}}}).then(s=>s.data.players[0]);if(r)return r;const i=JN();return await f_(i),h_(e-1)}cd(Kn,e=>e?Te.subscribeQuery({players:{$:{where:{id:e}}}},t=>{if(t.error&&console.error(t.error),t.data){const r=t.data.players[0];a_(r)}}):()=>{});async function XA(){throw new Error("Not implemented")}function FA(e,t){const r=vn(""),i=vn({dots:[],color:Z2[1],width:Gs[1]}),s=Qe(),l=Qe(),u=Qe(),d=Qe(),h=Qe();r.on(d,(y,g)=>g),i.on(s,(y,g)=>({...y,...g})).on(l,(y,g)=>({...y,dots:[g]})).on(u,(y,g)=>({...y,dots:[...y.dots,g]})).on(h,y=>({...y,dots:[]}));let p=!1;return Qn([i,t,r]).watch(([y,g,w])=>{if(g&&w){if(p)return;p=!0,Te.transact(Te.tx.curretLine[w].update({width:y.width,dots:y.dots,color:y.color})).finally(()=>{p=!1})}}),cd(e,y=>y?Te.subscribeQuery({party:{$:{where:{id:y}},currentLine:{}}},g=>{if(g.error&&console.error(g.error),g.data){const w=g.data.party[0];w!=null&&w.currentLine&&(d(w.currentLine.id),t.getState()||s(w.currentLine))}}):()=>{}),h.watch(y=>{Te.transact(Te.tx.roomEvent[tt()].create({it:{type:"line",dots:y.dots,color:y.color,width:y.width}}).link({party:e.getState()}))}),{$currentLine:i,currentLineChanged:s,addLine:h,lineStarted:l,lineExtended:u}}function PA(){const e=lt(CA);return $.jsxs("div",{style:{padding:"20px",display:"grid",alignContent:"center",gap:"16px"},children:[e&&e.name&&$.jsx(QA,{name:e.name}),$.jsx(VA,{}),$.jsx(GA,{}),$.jsxs("div",{style:{marginTop:"20px"},children:[$.jsx("h3",{children:"Canvas Demos"}),$.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[$.jsxs("a",{href:ti("?simple"),style:{textDecoration:"none",padding:"8px",background:"#f0f0f0",borderRadius:"4px"},children:["📝 Simple Canvas (SVG-based)",$.jsx("div",{style:{fontSize:"12px",color:"#666"},children:"Pure React + useState with SVG rendering"})]}),$.jsxs("a",{href:ti("?canvas-html5"),style:{textDecoration:"none",padding:"8px",background:"#e8f4f8",borderRadius:"4px"},children:["🎨 HTML5 Canvas (Path2D + svgInk)",$.jsx("div",{style:{fontSize:"12px",color:"#666"},children:"Canvas rendering using svgInk via Path2D"})]}),$.jsxs("a",{href:ti("?canvas-optimized"),style:{textDecoration:"none",padding:"8px",background:"#f0f8e8",borderRadius:"4px"},children:["🚀 Optimized Canvas (Direct rendering)",$.jsx("div",{style:{fontSize:"12px",color:"#666"},children:"Maximum performance, direct Canvas 2D API"})]})]})]}),$.jsxs("div",{style:{marginTop:"20px"},children:[$.jsx("h3",{children:"Other Pages"}),$.jsx("a",{href:ti("?words"),children:"📖 Слова"})]})]})}function VA(){const e=lt(G2);return $.jsxs("div",{children:[$.jsx("h2",{children:"All Parties"}),e.length===0?$.jsx("p",{children:"No parties found"}):$.jsx("ul",{style:{listStyle:"none",padding:0},children:e.map(t=>{var i;const r=((i=t.players2)==null?void 0:i.length)||0;return $.jsx("li",{style:{marginBottom:"10px"},children:$.jsxs("a",{href:ti("?"+t.id),children:[t.name," (игроков: ",r,")"]})},t.id)})})]})}function GA(){const[e,t]=pe.useState(""),[r,i]=pe.useState(!1),s=async()=>{if(e.trim()){i(!0);try{await qA(e.trim()),t("")}catch(l){console.error("Failed to create party:",l)}finally{i(!1)}}};return $.jsxs("form",{style:{margin:"8px 0",display:"grid",gridTemplateColumns:"1fr min-content",gap:"8px",maxWidth:"300px"},onSubmit:l=>{l.preventDefault(),s()},children:[$.jsx("input",{type:"text",value:e,onChange:l=>t(l.target.value),disabled:r}),$.jsx("button",{type:"submit",disabled:!e.trim()||r,children:r?"Создаю...":"Создать"})]})}function QA(e){const[t,r]=pe.useState(e.name),[i,s]=pe.useState(!1),l=async()=>{if(t.trim()){s(!0);try{await f_(t.trim()),r(t.trim())}catch(u){console.error(u)}finally{s(!1)}}};return $.jsxs("div",{children:[$.jsx("p",{children:"Имя"}),$.jsxs("form",{style:{margin:"8px 0",display:"grid",gridTemplateColumns:"1fr min-content",gap:"8px",maxWidth:"300px"},onSubmit:u=>{u.preventDefault(),l()},children:[$.jsx("input",{type:"text",value:t,onChange:u=>r(u.target.value),disabled:i}),$.jsx("button",{type:"submit",disabled:!t.trim()||i||t===e.name,children:"Сохранить"})]})]})}function bp(e){const r=document.querySelector("#player-canvas").getBoundingClientRect(),i=bm/r.width;if("touches"in e){const s=e.touches[0]||e.changedTouches[0];return{x:(s.clientX-r.left)*i,y:(s.clientY-r.top)*i}}else return{x:(e.clientX-r.left)*i,y:(e.clientY-r.top)*i}}function WA(){const[e,t]=pe.useState(!1),r=lt(dd),i=lt(Bu),s=lt(i_),l=h=>{if(!r)return;h.preventDefault();const{x:p,y}=bp(h);zA([p,y]),t(!0)},u=h=>{if(!r||!e)return;h.preventDefault();const{x:p,y}=bp(h);RA([p,y])},d=h=>{if(!r||!e)return;h&&h.preventDefault();const{x:p,y}=bp(h);AA({dots:[...i.dots,[p,y]],color:i.color,width:i.width}),t(!1)};return $.jsx("div",{style:{margin:"0 auto",maxWidth:"500px",maxHeight:"100%",height:"auto",aspectRatio:"1 / 1",display:"flex",justifyContent:"center",background:"#f6eee2"},children:$.jsxs("svg",{id:"player-canvas",onMouseDown:l,onMouseMove:u,onMouseUp:d,onMouseLeave:d,onTouchStart:l,onTouchMove:u,onTouchEnd:d,onTouchCancel:d,viewBox:`0 0 ${bm} ${bm}`,style:{touchAction:"none",border:"2px dashed #ccc",cursor:"crosshair",aspectRatio:"1 / 1"},children:[!1,$.jsx(ZA,{}),$.jsx(KA,{}),s&&$.jsx(JA,{})]})})}const ZA=pe.memo(()=>{const e=lt(jA),t=lt(LA);return lt(xg)==="polyline"?t.map((i,s)=>$.jsx("polyline",{points:i.points,stroke:i.color,strokeWidth:i.strokeWidth,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},"ExistingPolylines"+s)):e.map((i,s)=>$.jsx("path",{d:i.d,fill:i.color},"ExistingLines"+s))}),KA=pe.memo(()=>{const e=lt($A);return e?$.jsxs($.Fragment,{children:[$.jsxs("text",{x:"10",y:"15",children:["newTime: ",e.perf.newTime]}),$.jsxs("text",{x:"10",y:"35",children:["oldTime: ",e.perf.oldTime]}),$.jsx("path",{d:e.d,fill:e.color})]}):null}),JA=pe.memo(()=>lt(UA).map((t,r)=>$.jsxs("g",{children:[$.jsx("polyline",{points:t.map(([i,s])=>`${i},${s}`).join(" ")||"",stroke:"white",strokeWidth:2,strokeDasharray:"2,5",fill:"none"}),t.map(([i,s],l)=>$.jsx("circle",{cx:i,cy:s,r:1,fill:`hsl(0, 70%, ${l%5*10+30}%)`},`${r}-${l}`))]},"debug"+r)));function e6(){const[e,t]=pe.useState(!0),r=lt(Kn),i=lt(Mo);return $.jsxs("div",{children:[$.jsxs("button",{onClick:()=>t(!e),children:["Dev ",e?"▼":"▲"]}),!e&&$.jsxs("div",{children:[$.jsx("div",{children:$.jsx("a",{href:"https://joxter.github.io/scribble/",target:"_blank",children:"website"})}),$.jsxs("p",{children:["localId: ",r]}),$.jsxs("div",{children:[$.jsx("button",{onClick:u_,children:"Удалить все сообщения"}),$.jsx("br",{}),$.jsx("br",{}),$.jsx("button",{onClick:XA,children:"перезагрузить всю комнату"})]}),$.jsx("pre",{style:{maxWidth:"300px"},children:JSON.stringify(i,null,2)})]})]})}const T1=4;function t6({value:e,onChange:t}){const r=Gs.indexOf(e),i=Math.max(...Gs);let s=r*i+T1*r;return $.jsxs("div",{style:{display:"inline-flex",gap:"4px",position:"relative",height:"32px",backgroundColor:"#eee",borderRadius:"16px",cursor:"pointer",padding:"4px",boxShadow:"0 0px 4px rgba(0,0,0,0.1)",overflow:"hidden"},children:[$.jsx("div",{style:{position:"absolute",left:s+"px",display:"flex",top:"0px",width:r===Gs.length-1?i+10+"px":i+4+"px",height:"100%",backgroundColor:"#007bff"}}),$.jsx("div",{style:{display:"flex",gap:T1+"px",position:"relative",width:"100%"},children:Gs.map(l=>$.jsx("div",{onClick:()=>t(l),style:{display:"flex",width:i+"px",height:i+"px"},children:$.jsx("div",{style:{margin:"auto",width:`${l}px`,height:`${l}px`,backgroundColor:l===e?"#555":"#666",borderRadius:"50%"}})},l))})]})}const n6="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M29%2023C29%2023.2652%2028.8946%2023.5196%2028.7071%2023.7071C28.5196%2023.8946%2028.2652%2024%2028%2024C27.7348%2024%2027.4804%2023.8946%2027.2929%2023.7071C27.1054%2023.5196%2027%2023.2652%2027%2023C26.9997%2020.8246%2026.3545%2018.6981%2025.1457%2016.8894C23.937%2015.0807%2022.2192%2013.671%2020.2093%2012.8386C18.1995%2012.0061%2015.988%2011.7883%2013.8544%2012.2126C11.7208%2012.6369%209.76087%2013.6844%208.2225%2015.2225L5.425%2018H11C11.2652%2018%2011.5196%2018.1053%2011.7071%2018.2929C11.8946%2018.4804%2012%2018.7348%2012%2019C12%2019.2652%2011.8946%2019.5196%2011.7071%2019.7071C11.5196%2019.8946%2011.2652%2020%2011%2020H3C2.73478%2020%202.48043%2019.8946%202.29289%2019.7071C2.10536%2019.5196%202%2019.2652%202%2019V11C2%2010.7348%202.10536%2010.4804%202.29289%2010.2929C2.48043%2010.1053%202.73478%209.99999%203%209.99999C3.26522%209.99999%203.51957%2010.1053%203.70711%2010.2929C3.89464%2010.4804%204%2010.7348%204%2011V16.5962L6.81%2013.805C8.62837%2011.9876%2010.9448%2010.7501%2013.4664%2010.249C15.988%209.74799%2018.6015%2010.0059%2020.9765%2010.99C23.3516%2011.9742%2025.3815%2013.6405%2026.8097%2015.7782C28.2378%2017.9159%2029%2020.4291%2029%2023Z'%20fill='%23343330'/%3e%3c/svg%3e",k1=28,r6=8;function a6({value:e,onChange:t}){return $.jsx("div",{style:{flexWrap:"wrap",display:"flex",gap:r6+"px",justifyContent:"space-between"},children:Z2.map((r,i)=>$.jsx("button",{onClick:()=>t(r),style:{width:k1+"px",height:k1+"px",border:i===2||i===3?"1px solid #333":"none",borderRadius:"100%",padding:"0",backgroundColor:r,cursor:"pointer",boxShadow:r===e?"0 0 0 2px #fff, 0 0 0 5px rgb(0, 123, 255)":"none"}},r))})}function i6(){const e=qw(Bu,r=>r.width),t=qw(Bu,r=>r.color);return $.jsxs("div",{style:{display:"grid",alignContent:"start",padding:"8px",gap:"12px"},children:[$.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between"},children:[$.jsx("button",{onClick:DA,children:$.jsx("img",{style:{width:"20px"},src:n6})}),$.jsx(t6,{value:e,onChange:r=>S1({width:r})})]}),$.jsx("div",{children:$.jsx(a6,{value:t,onChange:r=>S1({color:r})})})]})}const o6="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M28.4138%209.17122L22.8288%203.58497C22.643%203.39921%2022.4225%203.25185%2022.1799%203.15131C21.9372%203.05077%2021.6771%202.99902%2021.4144%202.99902C21.1517%202.99902%2020.8916%203.05077%2020.6489%203.15131C20.4062%203.25185%2020.1857%203.39921%2020%203.58497L4.58626%2019C4.39973%2019.185%204.25185%2019.4053%204.15121%2019.648C4.05057%2019.8907%203.99917%2020.151%204.00001%2020.4137V26C4.00001%2026.5304%204.21072%2027.0391%204.5858%2027.4142C4.96087%2027.7893%205.46958%2028%206.00001%2028H11.5863C11.849%2028.0008%2012.1093%2027.9494%2012.352%2027.8488C12.5947%2027.7481%2012.815%2027.6002%2013%2027.4137L28.4138%2012C28.5995%2011.8142%2028.7469%2011.5937%2028.8474%2011.3511C28.948%2011.1084%2028.9997%2010.8483%2028.9997%2010.5856C28.9997%2010.3229%2028.948%2010.0628%2028.8474%209.82012C28.7469%209.57744%2028.5995%209.35695%2028.4138%209.17122ZM6.41376%2020L17%209.41372L19.0863%2011.5L8.50001%2022.085L6.41376%2020ZM6.00001%2022.4137L9.58626%2026H6.00001V22.4137ZM12%2025.5862L9.91376%2023.5L20.5%2012.9137L22.5863%2015L12%2025.5862ZM24%2013.5862L18.4138%207.99997L21.4138%204.99997L27%2010.585L24%2013.5862Z'%20fill='%23343330'/%3e%3c/svg%3e";function s6(){var h;const e=lt(Mo),t=lt(Kn),r=lt(G2),i=lt(fr),[s]=lt(Ro),l=e.players2||[],u=!!l.find(p=>p.localId===t),d=s.state.state==="drawing"?s.state.playerId:"";return $.jsxs("div",{children:[$.jsxs("p",{children:['Комната "',(h=r.find(p=>p.id===i))==null?void 0:h.name,'" ',$.jsx("br",{}),u?$.jsx("button",{type:"button",onClick:()=>{BA(e.id)},children:"уйти"}):$.jsx("button",{type:"button",onClick:()=>{YA(e.id)},children:"зайти"})]}),$.jsxs("div",{style:{display:"grid",alignContent:"start",gap:"4px"},children:[l.length===0?$.jsx("p",{children:"никого нет"}):null,l==null?void 0:l.map(p=>{const y=p.id===d;return $.jsxs("div",{style:{padding:"8px 12px",borderRadius:"4px",backgroundColor:"#fff",color:"#333",border:"1px solid #ddd"},children:[p.name," ",y&&$.jsx("img",{src:o6,style:{width:"18px"}})]},p.id)})]})]})}const l6="_page_96w0a_2",c6="_header_96w0a_31",u6="_headerContent_96w0a_35",d6="_canvasSection_96w0a_42",f6="_footer_96w0a_48",h6="_players_96w0a_56",lo={page:l6,header:c6,headerContent:u6,canvasSection:d6,footer:f6,players:h6};function p6({revealed:e,clue:t}){const[r,i]=pe.useState(""),s=u=>{u.preventDefault(),c_({guess:r.trim()}),i("")},l=u=>{i(u.target.value)};return t.split(" ").map(u=>u.length).join(" "),$.jsx("form",{onSubmit:s,children:$.jsxs("div",{style:{display:"grid",gridTemplateColumns:e?"1fr min-content":`calc(${t.length*10}px + ${(t.length-1)*3}px + 10px) min-content`,gap:"0px 8px",fontFamily:"monospace",letterSpacing:"2px"},children:[$.jsx("p",{style:{padding:"0 4px",color:e?"green":"initial",textAlign:e?"center":"initial"},children:e?e+"!":t}),$.jsx("div",{}),$.jsx("div",{children:$.jsx("input",{type:"text",value:r,onChange:l,style:{outline:"none",width:"100%",font:"inherit",fontFamily:"inherit",letterSpacing:"inherit"}})}),$.jsx("button",{type:"submit",children:"OK"})]})})}function m6(e){const t=pe.useRef(null);return pe.useEffect(()=>{t.current&&t.current.scrollTo({top:t.current.scrollHeight,behavior:"smooth"})},[e]),t}function g6(){const[e,{players2:t}]=lt([_m,Mo]),r=m6(e),i=Object.fromEntries((t||[]).map(s=>[s.id,s.name]));return $.jsx("div",{ref:r,style:{display:"grid",alignContent:"start",gap:"4px",padding:"4px",paddingRight:"12px",borderRadius:"4px",backgroundColor:"#fff",color:"#333",border:"1px solid #ddd",overflow:"auto",lineHeight:"1",fontSize:"14px",wordBreak:"break-word"},children:e.slice(-50).map((s,l)=>{const u=s.type+l;if(s.type==="guess"){let{text:d,player:h,isRevealed:p}=s;return p==="revealed"?$.jsx("p",{style:{fontStyle:"italic",color:"green"},children:$.jsxs("b",{children:[i[h]," отгадал слово!"]})},u):$.jsxs("p",{style:{},children:[$.jsxs("b",{children:[i[h],":"]})," ",d]},u)}if(s.type==="new-word"){let{word:d}=s;return $.jsxs("p",{style:{fontStyle:"italic"},children:["Слово выбрано!"," ",$.jsxs("b",{style:{letterSpacing:"2px"},children:[d.replace(/\S/g,"_")," (",d.split(" ").map(h=>h.length).join(" "),")"]})]},u)}if(s.type==="choosing-word"){let{playerId:d}=s;return $.jsxs("p",{style:{fontStyle:"italic"},children:[i[d]," выбирает слово"]},u)}return $.jsxs("p",{style:{color:"#888"},children:["[",s.type,"]"]},u)})})}function fd(){const[e,t]=pe.useState(0),r=pe.useRef(0),i=pe.useRef(performance.now()),s=pe.useRef(0);return pe.useEffect(()=>{const l=()=>{const u=performance.now();if(r.current++,u-i.current>=1e3){const d=Math.round(r.current*1e3/(u-i.current));t(d),r.current=0,i.current=u}s.current=requestAnimationFrame(l)};return s.current=requestAnimationFrame(l),()=>{s.current&&cancelAnimationFrame(s.current)}},[]),$.jsxs("div",{style:{position:"fixed",top:"10px",right:"10px",backgroundColor:"#fff",color:"#333",border:"1px solid #333",padding:"2px 4px",borderRadius:"4px",fontSize:"14px",fontFamily:"monospace",zIndex:1e3,userSelect:"none"},children:[e," FPS"]})}function v6(){const[e,t,r,i]=lt([dd,NA,OA,MA]);return $.jsxs("div",{className:lo.page,children:[$.jsx("div",{className:lo.header,children:$.jsxs("div",{className:lo.headerContent,children:[$.jsx("a",{href:ti(),children:"Главная"}),e&&$.jsx("h2",{children:e}),$.jsx(fd,{})]})}),$.jsx("div",{className:lo.canvasSection,children:t?$.jsx("div",{style:{width:"100%",aspectRatio:"1"},children:$.jsx(y6,{words:t})}):$.jsx(WA,{})}),$.jsxs("div",{className:lo.footer,children:[e&&$.jsx(i6,{}),!e&&r&&$.jsx("div",{style:{padding:"4px 12px"},children:$.jsx("div",{style:{display:"flex",justifyContent:"center"},children:$.jsx(p6,{clue:r,revealed:i})})}),$.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:$.jsx(e6,{})})]}),$.jsxs("div",{className:lo.players,children:[$.jsx(s6,{}),$.jsx(b6,{}),$.jsx(g6,{})]})]})}function y6({words:e}){return $.jsx("div",{style:{backgroundColor:"#ddd",height:"100%",display:"flex",gap:"8px",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:e.map((t,r)=>$.jsx("button",{type:"button",onClick:()=>l_(t),children:t},r))})}function b6(){return lt(dd),$.jsx("div",{style:{},children:$.jsx("button",{onClick:s_,children:"выбрать слово"})})}const w6=["домино","стрэй кидс","феликс","бан чан","лино","лифт","концерт","скотч","дом","вода","лёд","квадрат","круг","карандаш","линейка","суши","рамён","дождь","играть","читать","учиться","дерево","растение","работать","сундук","майнкрафт","рисовать","кей-поп","акула","рыба","холод","свет","балкон","программист","пенал","мороженое","куб","лава","вулкан","кот","мяч","танцевать","урок","колонка","плавать","диплом","тюльпан","фото","чашка","кунг-фу","цирк","кролик","рокета","хранилище","семья","родители","ребёнок","мама","папа","счастье","космос","солнце","небо","корона","земля","флаг","королева","король","ворота","сердечко","пульт","маркер","ручка","рука","ножницы","кнопка","тетрадь","айпад","ниндзя","воздух","звук","единорог","телевизор","цветок","гусь","корея","Нидерланды"],x6=["кот","собака","птица","рыба","корова","лошадь","свинья","утка","курица","петух","тигр","лев","слон","жираф","медведь","волк","лиса","еж","кролик","коала","панда","кенгуру","обезьяна","змея","лягушка","крокодил","черепаха","дельфин","акула","кит","осьминог","краб","пингвин","страус","фламинго","орел","сова","воробей","голубь","аист","сурикат","бегемот","носорог","антилопа","яблоко","груша","банан","апельсин","лимон","арбуз","дыня","виноград","вишня","клубника","малина","ежевика","морковь","картошка","лук","чеснок","капуста","огурец","помидор","перец","тыква","баклажан","гриб","хлеб","пицца","бургер","суп","торт","мороженое","шоколад","печенье","конфета","чай","кофе","сок","вода","молоко","стол","стул","кровать","шкаф","диван","лампа","телевизор","компьютер","телефон","часы","зеркало","окно","дверь","книга","тетрадь","ручка","карандаш","кисть","краска","бутылка","стакан","тарелка","вилка","ложка","нож","чайник","сумка","рюкзак","шапка","куртка","пальто","ботинки","носки","перчатки","зонт","очки","дерево","куст","трава","цветок","роза","подсолнух","ромашка","тюльпан","лес","гора","река","озеро","море","пляж","остров","пещера","облако","солнце","луна","звезда","дождь","снег","молния","радуга","ветер","волна","машина","поезд","самолет","корабль","лодка","велосипед","мотоцикл","автобус","троллейбус","трамвай","метро","такси","ракета","вертолет","танк","трактор","грузовик","катер","учитель","врач","повар","пожарный","полицейский","солдат","строитель","фермер","летчик","моряк","шофер","художник","музыкант","писатель","рыбак","спортсмен","танцор","актёр","дом","замок","школа","магазин","церковь","мост","дорога","парк","площадь","фонтан","статуя","флаг","карта","шар","кукла","мяч","пирамидка","машинка","самокат","скейт","качели","горка","песочница","робот","ракета","кот","собака","птица","рыба","корова","лошадь","свинья","утка","курица","петух","тигр","лев","слон","жираф","медведь","волк","лиса","еж","кролик","коала","панда","кенгуру","обезьяна","змея","лягушка","крокодил","черепаха","дельфин","акула","кит","осьминог","краб","пингвин","страус","фламинго","орел","сова","воробей","голубь","аист","сурикат","бегемот","носорог","антилопа","яблоко","груша","банан","апельсин","лимон","арбуз","дыня","виноград","вишня","клубника","малина","ежевика","морковь","картошка","лук","чеснок","капуста","огурец","помидор","перец","тыква","баклажан","гриб","хлеб","пицца","бургер","суп","торт","мороженое","шоколад","печенье","конфета","чай","кофе","сок","вода","молоко","стол","стул","кровать","шкаф","диван","лампа","телевизор","компьютер","телефон","часы","зеркало","окно","дверь","книга","тетрадь"],_6=["кот","собака","дом","машина","дерево","солнце","луна","звезда","море","река","гора","лес","цветок","трава","небо","облако","дождь","снег","ветер","огонь","вода","земля","камень","песок","лед","пламя","дым","туман","радуга","молния","хлеб","молоко","мясо","рыба","яйцо","сыр","масло","сахар","соль","перец","яблоко","банан","апельсин","лимон","виноград","клубника","вишня","персик","груша","ананас","морковь","картофель","лук","чеснок","помидор","огурец","капуста","салат","редис","свекла","стол","стул","кровать","шкаф","диван","кресло","лампа","зеркало","часы","телевизор","компьютер","телефон","книга","ручка","карандаш","бумага","тетрадь","рюкзак","сумка","кошелек","рубашка","брюки","платье","юбка","куртка","пальто","шляпа","кепка","носки","туфли","сапоги","кроссовки","тапочки","перчатки","шарф","ремень","очки","часы","кольцо","серьги","автобус","поезд","самолет","корабль","велосипед","мотоцикл","грузовик","такси","метро","трамвай","врач","учитель","водитель","повар","продавец","строитель","художник","музыкант","актер","писатель","мама","папа","сын","дочь","брат","сестра","дедушка","бабушка","дядя","тетя","школа","университет","больница","магазин","ресторан","кафе","театр","кино","музей","парк","спорт","футбол","баскетбол","теннис","плавание","бег","йога","танцы","музыка","пение","гитара","пианино","скрипка","барабаны","флейта","труба","саксофон","микрофон","динамик","наушники","красный","синий","зеленый","желтый","черный","белый","серый","розовый","фиолетовый","оранжевый","большой","маленький","высокий","низкий","длинный","короткий","широкий","узкий","толстый","тонкий","быстрый","медленный","горячий","холодный","сухой","мокрый","чистый","грязный","новый","старый","один","два","три","четыре","пять","шесть","семь","восемь","девять","десять","понедельник","вторник","среда","четверг","пятница","суббота","воскресенье","день","ночь","утром","весна","лето","осень","зима","январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь","год","месяц","неделя","час","минута","секунда","время","часы","будильник","календарь","дата","праздник","день рождения","свадьба","любовь","дружба","семья","счастье","радость","грусть","злость","страх","удивление","смех","плач","улыбка","объятие","поцелуй","подарок","сюрприз","мечта","надежда","вера","удача","работа","отдых","игра","развлечение","хобби","путешествие","отпуск","выходные","каникулы","приключение","здоровье","болезнь","лекарство","витамины","спорт","диета","сон","усталость","энергия","сила","деньги","покупки","продажа","цена","скидка","банк","кредит","зарплата","бюджет","экономия","еда","завтрак","обед","ужин","кухня","рецепт","готовка","посуда","тарелка","чашка","нож","вилка","ложка","кастрюля","сковорода","духовка","холодильник","микроволновка","тостер","блендер","шоколад","конфеты","торт","печенье","мороженое","напиток","сок","чай","кофе","лимонад","пляж","отель","чемодан","билет","паспорт","фото","камера","видео","селфи","воспоминание","интернет","сайт","email","сообщение","чат","социальная сеть","блог","видеоблог","подписчик","лайк","фильм","сериал","актер","режиссер","сценарий","роль","премьера","билет","попкорн","3D","животное","птица","рыба","насекомое","млекопитающее","хищник","травоядное","дикое","домашнее","зоопарк","лев","тигр","слон","жираф","обезьяна","медведь","волк","лиса","заяц","белка","птица","орел","сова","попугай","воробей","голубь","ласточка","аист","пингвин","фламинго","акула","дельфин","кит","осьминог","краб","морская звезда","медуза","креветка","лосось","тунец","пчела","бабочка","муравей","паук","жук","комар","муха","стрекоза","кузнечик","божья коровка","роза","тюльпан","ромашка","подсолнух","лилия","орхидея","фиалка","гвоздика","пион","ирис","дуб","береза","сосна","ель","клен","липа","каштан","ива","тополь","рябина","футболист","теннисист","пловец","боксер","гимнаст","лыжник","хоккеист","баскетболист","велосипедист","бегун","стадион","спортзал","бассейн","корт","поле","каток","лыжня","беговая дорожка","тренажер","мяч","ракетка","клюшка","шайба","ворота","сетка","финиш","старт","медаль","кубок","чемпион","математика","физика","химия","биология","история","география","литература","русский язык","английский","информатика","урок","учебник","тетрадь","доска","мел","парта","класс","перемена","звонок","домашнее задание","оценка","экзамен","тест","контрольная","диктант","сочинение","презентация","проект","исследование","эксперимент","погода","прогноз","температура","градус","термометр","барометр","влажность","давление","ветер","буря","ясно","пасмурно","дождливо","снежно","туманно","солнечно","ветрено","прохладно","тепло","жарко","зонт","дождевик","солнцезащитные очки","крем от загара","шляпа от солнца","перчатки","варежки","шарф","шапка","сапоги","космос","планета","звезда","галактика","солнечная система","астронавт","ракета","спутник","телескоп","НЛО","Земля","Марс","Венера","Юпитер","Сатурн","Меркурий","Уран","Нептун","Плутон","комета","океан","континент","страна","город","деревня","столица","граница","карта","компас","GPS","Россия","Москва","Санкт-Петербург","Америка","Европа","Азия","Африка","Австралия","Антарктида","остров","церковь","храм","мечеть","синагога","монастырь","собор","колокол","крест","икона","свеча","праздник","Новый год","Рождество","Пасха","день рождения","свадьба","юбилей","выпускной","крестины","именины","подарок","торт","свечи","воздушные шары","фейерверк","конфетти","украшения","гирлянда","елка","Дед Мороз","больница","поликлиника","врач","медсестра","пациент","лечение","операция","таблетки","укол","рентген","стоматолог","окулист","кардиолог","хирург","терапевт","педиатр","психолог","ветеринар","фармацевт","скорая помощь","полиция","пожарные","спасатель","солдат","генерал","офицер","сержант","капитан","майор","полковник","суд","судья","адвокат","прокурор","свидетель","подозреваемый","обвиняемый","приговор","штраф","тюрьма","банк","банкир","кассир","счет","вклад","кредит","ипотека","процент","банкомат","карта","ресторан","кафе","бар","повар","официант","меню","заказ","счет","чаевые","кухня","отель","гостиница","номер","ключ","ресепшн","администратор","горничная","завтрак","обслуживание","бронирование","магазин","супермаркет","продавец","касса","чек","сдача","скидка","акция","распродажа","витрина","одежда","обувь","аксессуары","украшения","косметика","парфюм","сумка","кошелек","ремень","галстук","парикмахерская","салон красоты","стрижка","прическа","маникюр","педикюр","массаж","косметолог","визажист","стилист","театр","опера","балет","концерт","симфония","оркестр","дирижер","солист","хор","декорации","музей","галерея","выставка","экскурсия","гид","экспонат","картина","скульптура","археология","история","библиотека","книга","автор","писатель","поэт","роман","повесть","рассказ","стихи","сказка","газета","журнал","статья","интервью","репортаж","новости","журналист","редактор","типография","издательство","радио","телевидение","программа","ведущий","корреспондент","прямой эфир","запись","трансляция","канал","антенна","компьютер","ноутбук","планшет","смартфон","клавиатура","мышь","монитор","процессор","память","жесткий диск","программа","приложение","игра","файл","папка","документ","презентация","таблица","база данных","сайт","интернет","браузер","поиск","ссылка","домен","сервер","облако","загрузка","скачивание","обновление","email","сообщение","чат","видеозвонок","конференция","вебинар","стрим","подкаст","блог","влог","социальная сеть","профиль","друзья","подписчики","пост","фото","видео","лайк","комментарий","репост","игрушка","кукла","мишка","конструктор","пазл","настольная игра","карты","шахматы","шашки","домино","мяч","скакалка","велосипед","самокат","ролики","коньки","лыжи","сноуборд","кайт","воздушный змей","сад","огород","грядка","теплица","лейка","лопата","грабли","семена","рассада","урожай","дача","беседка","мангал","шашлык","пикник","костер","палатка","поход","рюкзак","спальный мешок","рыбалка","удочка","крючок","наживка","улов","лодка","сети","рыбак","озеро","пруд","охота","ружье","охотник","дичь","капкан","следы","лес","чаща","поляна","тропа","грибы","ягоды","корзина","нож","компас","карта","ориентирование","заблудиться","выход","тропинка","цирк","клоун","акробат","жонглер","фокусник","дрессировщик","арена","шапито","представление","номер","аттракцион","карусель","колесо обозрения","американские горки","батут","качели","горка","песочница","площадка","парк","зоопарк","вольер","клетка","кормление","экскурсия","смотритель","ветеринар","животное","хищник","травоядное","аквариум","рыбка","водоросли","ракушка","кораллы","фильтр","компрессор","корм","освещение","температура","террариум","змея","ящерица","черепаха","игуана","хамелеон","геккон","варан","питон","кобра","ферма","фермер","трактор","комбайн","плуг","борона","сеялка","жатка","силос","сено","коровник","свинарник","курятник","конюшня","овчарня","пастбище","загон","кормушка","поилка","доярка","корова","бык","теленок","свинья","поросенок","овца","баран","ягненок","коза","козленок","лошадь","жеребенок","пони","осел","мул","верблюд","олень","лось","кабан","бизон","курица","петух","цыпленок","утка","гусь","индейка","перепел","фазан","павлин","страус","мастерская","инструмент","молоток","гвоздь","винт","гайка","болт","отвертка","плоскогубцы","ключ","пила","дрель","шуруповерт","рубанок","стамеска","напильник","наждачка","уровень","рулетка","циркуль","строительство","фундамент","стены","крыша","окна","двери","лестница","балкон","терраса","веранда","кирпич","цемент","песок","щебень","арматура","бетон","раствор","штукатурка","краска","обои","электричество","проводка","розетка","выключатель","лампочка","светильник","люстра","торшер","настольная лампа","бра","водопровод","канализация","трубы","кран","смеситель","раковина","ванна","душ","унитаз","биде","отопление","батарея","радиатор","котел","трубы","термостат","камин","печь","дымоход","дрова","мебель","изготовление","дизайн","материал","дерево","металл","пластик","стекло","кожа","ткань","портной","швея","ателье","выкройка","ткань","нитки","иголка","булавка","ножницы","машинка","вышивка","вязание","спицы","крючок","пряжа","узор","петля","ряд","свитер","шарф","ювелир","золото","серебро","платина","драгоценный камень","алмаз","рубин","изумруд","сапфир","жемчуг","часовщик","механизм","циферблат","стрелки","пружина","маятник","будильник","секундомер","хронометр","таймер"],Sm=[...w6,...x6,..._6];console.log("RU",Sm.length,[...new Set(Sm)].length);const S6="АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".split(""),T6="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");function k6(){const e=lt(wg),[t,r]=pe.useState("RU"),[i,s]=pe.useState("А"),[l,u]=pe.useState(""),d=t==="RU"?S6:T6,h=e.filter(b=>b.lang===t&&b.word[0].toUpperCase().startsWith(i)),p=b=>{r(b),s(b==="RU"?"А":"A")},y=b=>{b.preventDefault(),nA(l,t).then(()=>{u("")}).catch(_=>{console.error(_),String(_.message).includes("is a unique attribute on")&&alert(`Слово "${l}" уже добавлено`)})},g=new Set(e.filter(b=>b.lang==="RU").map(b=>b.word)),w=[...new Set(Sm)].filter(b=>!g.has(b)).slice(0,100);return $.jsxs("div",{style:{padding:"20px",display:"grid",gap:"20px"},children:[$.jsxs("div",{children:[$.jsx("a",{href:ti(),children:"Главная"}),$.jsx("h1",{children:"Все слова"})]}),w.length>0&&$.jsx("div",{children:$.jsxs("button",{onClick:()=>{rA(w).then(()=>{console.log(`Добавлено ${w.length} новых слов`)}).catch(b=>{console.error(b)})},children:["ADD ",$.jsx("b",{children:"RU"})," ",w.length]})}),$.jsx(E6,{selectedLang:t,onLangChange:p,totalWords:e.length}),$.jsx(C6,{selectedLang:t,newWord:l,onWordChange:u,onSubmit:y}),$.jsx(M6,{letters:d,selectedLetter:i,onLetterChange:s}),$.jsx(O6,{filteredWords:h,selectedLetter:i})]})}function E6({selectedLang:e,onLangChange:t,totalWords:r}){return $.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[$.jsx("button",{onClick:()=>t("RU"),style:{padding:"8px 16px",backgroundColor:e==="RU"?"#007bff":"#f8f9fa",color:e==="RU"?"white":"black",border:"1px solid #dee2e6",borderRadius:"4px",cursor:"pointer"},children:"RU"}),$.jsx("button",{onClick:()=>t("EN"),style:{padding:"8px 16px",backgroundColor:e==="EN"?"#007bff":"#f8f9fa",color:e==="EN"?"white":"black",border:"1px solid #dee2e6",borderRadius:"4px",cursor:"pointer"},children:"EN"}),$.jsx("p",{children:r})]})}function C6({selectedLang:e,newWord:t,onWordChange:r,onSubmit:i}){return $.jsx("div",{children:$.jsxs("form",{onSubmit:i,style:{display:"grid",gridTemplateColumns:"1fr 130px",gap:"4px",maxWidth:"300px"},children:[$.jsx("input",{type:"text",placeholder:"Слово",value:t,onChange:s=>r(s.target.value),style:{}}),$.jsxs("button",{type:"submit",disabled:!t.trim(),children:["Добавить ",e]})]})})}function M6({letters:e,selectedLetter:t,onLetterChange:r}){return $.jsx("div",{children:$.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:e.map(i=>$.jsx("button",{onClick:()=>r(i),style:{padding:"4px 8px",backgroundColor:t===i?"#007bff":"#f8f9fa",color:t===i?"white":"black",border:"1px solid #dee2e6",borderRadius:"4px",cursor:"pointer",minWidth:"30px"},children:i},i))})})}function O6({filteredWords:e,selectedLetter:t}){return $.jsxs("div",{children:[$.jsxs("h3",{children:["Слова на букву ",t," (",e.length,"):"]}),e.length===0?$.jsx("p",{children:"Нет слов"}):$.jsx("ul",{style:{paddingLeft:"15px"},children:e.map(r=>r.word).toSorted().map((r,i)=>$.jsx("li",{style:{},children:r},i))})]})}const Tm=600;let wp=null,ma=null,E1=0;const N6=100;function C1(e){wp||(wp=document.querySelector("#simple-canvas"));const t=Date.now();(!ma||t-E1>N6)&&(ma=wp.getBoundingClientRect(),E1=t);const r=Tm/ma.width;if("touches"in e){const i=e.touches[0]||e.changedTouches[0];return{x:(i.clientX-ma.left)*r,y:(i.clientY-ma.top)*r}}else return{x:(e.clientX-ma.left)*r,y:(e.clientY-ma.top)*r}}function A6(){const[e,t]=pe.useState(!1),[r,i]=pe.useState([]),[s,l]=pe.useState([]),u=Ft.useRef(0),d=8,h=pe.useCallback(w=>{w.preventDefault();const{x:b,y:_}=C1(w);i([[b,_]]),t(!0),ma=null},[]),p=pe.useCallback(w=>{if(!e)return;const b=Date.now();if(b-u.current<d)return;u.current=b,w.preventDefault();const{x:_,y:T}=C1(w);i(M=>[...M,[_,T]])},[e]),y=pe.useCallback(w=>{e&&(w&&w.preventDefault(),r.length>1&&l(b=>[...b,{dots:r,color:"#000000",width:8}]),i([]),t(!1))},[e,r]),g=pe.useCallback(()=>{l([]),i([]),t(!1)},[]);return $.jsxs("div",{style:{padding:"20px",textAlign:"center"},children:[$.jsx(fd,{}),$.jsx("h2",{children:"Simple Canvas"}),$.jsx("p",{children:"optimisations"}),$.jsx("button",{onClick:g,style:{marginBottom:"20px",padding:"10px 20px",backgroundColor:"#ff4444",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Clear Canvas"}),$.jsx("div",{style:{margin:"0 auto",maxWidth:"500px",maxHeight:"100%",height:"auto",aspectRatio:"1 / 1",display:"flex",justifyContent:"center",background:"#f6eee2"},children:$.jsxs("svg",{id:"simple-canvas",onMouseDown:h,onMouseMove:p,onMouseUp:y,onMouseLeave:y,onTouchStart:h,onTouchMove:p,onTouchEnd:y,onTouchCancel:y,viewBox:`0 0 ${Tm} ${Tm}`,style:{touchAction:"none",border:"2px dashed #ccc",cursor:"crosshair",aspectRatio:"1 / 1"},children:[$.jsx(z6,{lines:s}),$.jsx(R6,{currentLine:r})]})})]})}const z6=pe.memo(({lines:e})=>{const t=pe.useMemo(()=>e.map((r,i)=>{const s=r.dots;return{d:Co(s.map(([u,d])=>new G(u,d)),{size:r.width}),key:`line-${i}`,color:r.color}}),[e]);return $.jsx($.Fragment,{children:t.map(r=>$.jsx("path",{d:r.d,fill:r.color},r.key))})}),R6=pe.memo(({currentLine:e})=>{const t=pe.useMemo(()=>e.length<2?"":Co(e.map(([i,s])=>new G(i,s)),{size:8}),[e]);return t?$.jsx("path",{d:t,fill:"#000000"}):null}),Va=600;function M1(e,t){const r=new Path2D(t);e.fill(r)}let xp=null,ga=null,O1=0;const D6=100;function N1(e){xp||(xp=document.querySelector("#html5-canvas"));const t=Date.now();(!ga||t-O1>D6)&&(ga=xp.getBoundingClientRect(),O1=t);const r=Va/ga.width;if("touches"in e){const i=e.touches[0]||e.changedTouches[0];return{x:(i.clientX-ga.left)*r,y:(i.clientY-ga.top)*r}}else return{x:(e.clientX-ga.left)*r,y:(e.clientY-ga.top)*r}}function j6(){const e=pe.useRef(null),[t,r]=pe.useState(!1),[i,s]=pe.useState([]),[l,u]=pe.useState([]),d=pe.useRef(0),h=8;pe.useEffect(()=>{const b=e.current;if(!b)return;const _=b.getContext("2d");if(_&&(_.clearRect(0,0,Va,Va),_.fillStyle="#f6eee2",_.fillRect(0,0,Va,Va),l.forEach(T=>{const M=Co(T.dots.map(([S,C])=>new G(S,C)),{size:T.width});_.fillStyle=T.color,M1(_,M)}),i.length>=2)){const T=Co(i.map(([M,S])=>new G(M,S)),{size:8});_.fillStyle="#000000",M1(_,T)}},[l,i]);const p=pe.useCallback(b=>{b.preventDefault();const{x:_,y:T}=N1(b);s([[_,T]]),r(!0),ga=null},[]),y=pe.useCallback(b=>{if(!t)return;const _=Date.now();if(_-d.current<h)return;d.current=_,b.preventDefault();const{x:T,y:M}=N1(b);s(S=>[...S,[T,M]])},[t]),g=pe.useCallback(b=>{t&&(b&&b.preventDefault(),i.length>1&&u(_=>[..._,{dots:i,color:"#000000",width:8}]),s([]),r(!1))},[t,i]),w=pe.useCallback(()=>{u([]),s([]),r(!1)},[]);return $.jsxs("div",{style:{padding:"20px",textAlign:"center"},children:[$.jsx(fd,{}),$.jsx("h2",{children:"HTML5 Canvas Version"}),$.jsx("p",{children:"Using Canvas 2D + svgInk via Path2D"}),$.jsx("button",{onClick:w,style:{marginBottom:"20px",padding:"10px 20px",backgroundColor:"#ff4444",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Clear Canvas"}),$.jsx("div",{style:{margin:"0 auto",maxWidth:"500px",maxHeight:"100%",height:"auto",aspectRatio:"1 / 1",display:"flex",justifyContent:"center"},children:$.jsx("canvas",{ref:e,id:"html5-canvas",width:Va,height:Va,onMouseDown:p,onMouseMove:y,onMouseUp:g,onMouseLeave:g,onTouchStart:p,onTouchMove:y,onTouchEnd:g,onTouchCancel:g,style:{touchAction:"none",border:"2px dashed #ccc",cursor:"crosshair",aspectRatio:"1 / 1",maxWidth:"100%",height:"auto"}})})]})}const Ga=600;function A1(e,t,r){if(t.length===0)return;if(t.length===1){e.beginPath(),e.arc(t[0].x,t[0].y,r.size/2,0,Math.PI*2),e.fill();return}const i=J2(t,r);e_(i,r);const{left:s,right:l}=K2(i,r);if(s.length===0||l.length===0)return;e.beginPath(),e.moveTo(s[0].x,s[0].y);for(let w=1;w<s.length;w++){const b=s[w-1],_=s[w],T={x:(b.x+_.x)/2,y:(b.y+_.y)/2};e.quadraticCurveTo(b.x,b.y,T.x,T.y)}const u=i[i.length-1],d=u.radius,h=u.vector.clone().per().neg();e.arc(u.point.x,u.point.y,d,Math.atan2(-h.y,-h.x),Math.atan2(h.y,h.x)),l.reverse();for(let w=1;w<l.length;w++){const b=l[w-1],_=l[w],T={x:(b.x+_.x)/2,y:(b.y+_.y)/2};e.quadraticCurveTo(b.x,b.y,T.x,T.y)}const p=i[0],y=p.radius,g=p.vector.clone().per();e.arc(p.point.x,p.point.y,y,Math.atan2(-g.y,-g.x),Math.atan2(g.y,g.x)),e.closePath(),e.fill()}let _p=null,va=null,z1=0;const U6=100;function R1(e){_p||(_p=document.querySelector("#optimized-canvas"));const t=Date.now();(!va||t-z1>U6)&&(va=_p.getBoundingClientRect(),z1=t);const r=Ga/va.width;if("touches"in e){const i=e.touches[0]||e.changedTouches[0];return{x:(i.clientX-va.left)*r,y:(i.clientY-va.top)*r}}else return{x:(e.clientX-va.left)*r,y:(e.clientY-va.top)*r}}function L6(){const e=pe.useRef(null),[t,r]=pe.useState(!1),[i,s]=pe.useState([]),[l,u]=pe.useState([]),d=pe.useRef(0),h=8;pe.useEffect(()=>{const b=e.current;if(!b)return;const _=b.getContext("2d");_&&(_.clearRect(0,0,Ga,Ga),_.fillStyle="#f6eee2",_.fillRect(0,0,Ga,Ga),l.forEach(T=>{_.fillStyle=T.color,A1(_,T.dots.map(([M,S])=>new G(M,S)),{size:T.width})}),i.length>=2&&(_.fillStyle="#000000",A1(_,i.map(([T,M])=>new G(T,M)),{size:8})))},[l,i]);const p=pe.useCallback(b=>{b.preventDefault();const{x:_,y:T}=R1(b);s([[_,T]]),r(!0),va=null},[]),y=pe.useCallback(b=>{if(!t)return;const _=Date.now();if(_-d.current<h)return;d.current=_,b.preventDefault();const{x:T,y:M}=R1(b);s(S=>[...S,[T,M]])},[t]),g=pe.useCallback(b=>{t&&(b&&b.preventDefault(),i.length>1&&u(_=>[..._,{dots:i,color:"#000000",width:8}]),s([]),r(!1))},[t,i]),w=pe.useCallback(()=>{u([]),s([]),r(!1)},[]);return $.jsxs("div",{style:{padding:"20px",textAlign:"center"},children:[$.jsx(fd,{}),$.jsx("h2",{children:"Optimized Canvas Version"}),$.jsx("p",{children:"Direct stroke rendering (no SVG)"}),$.jsx("button",{onClick:w,style:{marginBottom:"20px",padding:"10px 20px",backgroundColor:"#ff4444",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Clear Canvas"}),$.jsx("div",{style:{margin:"0 auto",maxWidth:"500px",maxHeight:"100%",height:"auto",aspectRatio:"1 / 1",display:"flex",justifyContent:"center"},children:$.jsx("canvas",{ref:e,id:"optimized-canvas",width:Ga,height:Ga,onMouseDown:p,onMouseMove:y,onMouseUp:g,onMouseLeave:g,onTouchStart:p,onTouchMove:y,onTouchEnd:g,onTouchCancel:g,style:{touchAction:"none",border:"2px dashed #ccc",cursor:"crosshair",aspectRatio:"1 / 1",maxWidth:"100%",height:"auto"}})})]})}function $6(){const e=lt(fr);return $.jsx("div",{style:{height:"100%"},children:e==="words"?$.jsx(k6,{}):e==="simple"?$.jsx(A6,{}):e==="canvas-html5"?$.jsx(j6,{}):e==="canvas-optimized"?$.jsx(L6,{}):e?$.jsx(v6,{}):$.jsx(PA,{})})}V3({enabled:!0});const H6=tM.createRoot(document.getElementById("app"));H6.render($.jsx($6,{}));
