(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function r(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=r(s);fetch(s.href,l)}})();function pm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var yh={exports:{}},Ts={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rb;function mT(){if(rb)return Ts;rb=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(i,s,l){var u=null;if(l!==void 0&&(u=""+l),s.key!==void 0&&(u=""+s.key),"key"in s){l={};for(var d in s)d!=="key"&&(l[d]=s[d])}else l=s;return s=l.ref,{$$typeof:e,type:i,key:u,ref:s!==void 0?s:null,props:l}}return Ts.Fragment=t,Ts.jsx=r,Ts.jsxs=r,Ts}var ab;function gT(){return ab||(ab=1,yh.exports=mT()),yh.exports}var F=gT();/**
 * @license bippy
 *
 * Copyright (c) Aiden Bai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const vT="0.3.18",mm=`bippy-${vT}`,ib=Object.defineProperty,yT=Object.prototype.hasOwnProperty,Us=()=>{},g1=e=>{try{Function.prototype.toString.call(e).indexOf("^_^")>-1&&setTimeout(()=>{throw new Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")})}catch{}},v1=(e=Ka())=>"getFiberRoots"in e;let y1=!1,Lc;const hp=(e=Ka())=>y1?!0:(typeof e.inject=="function"&&(Lc=e.inject.toString()),!!(Lc!=null&&Lc.includes("(injected)"))),tu=new Set,pp=new Set,bT=e=>{const t=new Map;let r=0,i={checkDCE:g1,supportsFiber:!0,supportsFlight:!0,hasUnsupportedRendererAttached:!1,renderers:t,onCommitFiberRoot:Us,onCommitFiberUnmount:Us,onPostCommitFiberRoot:Us,on:Us,inject(s){const l=++r;return t.set(l,s),pp.add(s),i._instrumentationIsActive||(i._instrumentationIsActive=!0,tu.forEach(u=>u())),l},_instrumentationSource:mm,_instrumentationIsActive:!1};try{ib(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__",{get(){return i},set(u){if(u&&typeof u=="object"){const d=i.renderers;i=u,d.size>0&&(d.forEach((h,p)=>{pp.add(h),u.renderers.set(p,h)}),mp(e))}},configurable:!0,enumerable:!0});const s=window.hasOwnProperty;let l=!1;ib(window,"hasOwnProperty",{value:function(){try{if(!l&&arguments[0]==="__REACT_DEVTOOLS_GLOBAL_HOOK__")return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,l=!0,-0}catch{}return s.apply(this,arguments)},configurable:!0,writable:!0})}catch{mp(e)}return i},mp=e=>{e&&tu.add(e);try{const t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t)return;if(!t._instrumentationSource){if(t.checkDCE=g1,t.supportsFiber=!0,t.supportsFlight=!0,t.hasUnsupportedRendererAttached=!1,t._instrumentationSource=mm,t._instrumentationIsActive=!1,t.on=Us,t.renderers.size){t._instrumentationIsActive=!0,tu.forEach(i=>i());return}const r=t.inject;hp(t)&&!v1()&&(y1=!0,t.inject({scheduleRefresh(){}})&&(t._instrumentationIsActive=!0)),t.inject=i=>{const s=r(i);return pp.add(i),t._instrumentationIsActive=!0,tu.forEach(l=>l()),s}}(t.renderers.size||t._instrumentationIsActive||hp())&&(e==null||e())}catch{}},wT=()=>yT.call(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__"),Ka=e=>wT()?(mp(e),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):bT(e),xT=()=>{var e,t;return!!(typeof window<"u"&&((e=window.document)!=null&&e.createElement||((t=window.navigator)==null?void 0:t.product)==="ReactNative"))},_T=()=>{try{xT()&&Ka()}catch{}};/**
 * @license bippy
 *
 * Copyright (c) Aiden Bai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Lu=0,ri=1,b1=3,ST=5,TT=6,kT=7,ET=9,$u=11,Hu=13,dl=14,fl=15,CT=18,MT=22,NT=23,OT=26,AT=27,zT=60111,RT="Symbol(react.concurrent_mode)",DT="Symbol(react.async_mode)",ob=1,jT=2,UT=4096,LT=4,sb=8,$T=16,HT=32,qT=1024,IT=8192,lb=jT|LT|$T|HT|UT|IT|qT,Ws=e=>{switch(e.tag){case ST:case OT:case AT:return!0;default:return typeof e.type=="string"}},qu=e=>{switch(e.tag){case Lu:case ri:case fl:case dl:case $u:return!0;default:return!1}},YT=(e,t)=>{var r;try{const i=e.dependencies,s=(r=e.alternate)==null?void 0:r.dependencies;if(!i||!s||typeof i!="object"||!("firstContext"in i)||typeof s!="object"||!("firstContext"in s))return!1;let l=i.firstContext,u=s.firstContext;for(;l&&typeof l=="object"&&"memoizedValue"in l||u&&typeof u=="object"&&"memoizedValue"in u;){if(t(l,u)===!0)return!0;l=l==null?void 0:l.next,u=u==null?void 0:u.next}}catch{}return!1},gm=e=>{var s;const t=e.memoizedProps,r=((s=e.alternate)==null?void 0:s.memoizedProps)||{},i=e.flags??e.effectTag??0;switch(e.tag){case ri:case Lu:case ET:case $u:case dl:case fl:return(i&ob)===ob;default:return e.alternate?r!==t||e.alternate.memoizedState!==e.memoizedState||e.alternate.ref!==e.ref:!0}},vm=e=>(e.flags&(lb|sb))!==0||(e.subtreeFlags&(lb|sb))!==0,BT=e=>{const t=[],r=[e];for(;r.length;){const i=r.pop();i&&(Ws(i)&&vm(i)&&gm(i)&&t.push(i),i.child&&r.push(i.child),i.sibling&&r.push(i.sibling))}return t},ym=e=>{switch(e.tag){case CT:return!0;case TT:case kT:case NT:case MT:return!0;case b1:return!1;default:{const t=typeof e.type=="object"&&e.type!==null?e.type.$$typeof:e.type;switch(typeof t=="symbol"?t.toString():t){case zT:case RT:case DT:return!0;default:return!1}}}},XT=e=>{const t=[],r=[];for(Ws(e)?t.push(e):e.child&&r.push(e.child);r.length;){const i=r.pop();if(!i)break;Ws(i)?t.push(i):i.child&&r.push(i.child),i.sibling&&r.push(i.sibling)}return t},bm=(e,t,r=!1)=>{if(!e)return null;if(t(e)===!0)return e;let i=r?e.return:e.child;for(;i;){const s=bm(i,t,r);if(s)return s;i=r?null:i.sibling}return null},Fa=e=>{const t=(e==null?void 0:e.actualDuration)??0;let r=t,i=(e==null?void 0:e.child)??null;for(;t>0&&i!=null;)r-=i.actualDuration??0,i=i.sibling;return{selfTime:r,totalTime:t}},Zs=e=>{var t;return!!((t=e.updateQueue)!=null&&t.memoCache)},ai=e=>{const t=e;return typeof t=="function"?t:typeof t=="object"&&t?ai(t.type||t.render):null},Nt=e=>{const t=e;if(typeof t=="string")return t;if(typeof t!="function"&&!(typeof t=="object"&&t))return null;const r=t.displayName||t.name||null;if(r)return r;const i=ai(t);return i&&(i.displayName||i.name)||null},FT=e=>{try{if(typeof e.version=="string"&&e.bundleType>0)return"development"}catch{}return"production"},PT=()=>!!Ka()._instrumentationIsActive||v1()||hp();let w1=0;const ho=new WeakMap,GT=(e,t=w1++)=>{ho.set(e,t)},ba=e=>{let t=ho.get(e);return!t&&e.alternate&&(t=ho.get(e.alternate)),t||(t=w1++,GT(e,t)),t},ya=(e,t,r)=>{let i=t;for(;i!=null;){if(ho.has(i)||ba(i),!ym(i)&&gm(i)&&e(i,"mount"),i.tag===Hu)if(i.memoizedState!==null){const u=i.child,d=u?u.sibling:null;if(d){const h=d.child;h!==null&&ya(e,h,!1)}}else{let u=null;i.child!==null&&(u=i.child.child),u!==null&&ya(e,u,!1)}else i.child!=null&&ya(e,i.child,!0);i=r?i.sibling:null}},gp=(e,t,r,i)=>{var h,p,y;if(ho.has(t)||ba(t),!r)return;ho.has(r)||ba(r);const s=t.tag===Hu;!ym(t)&&gm(t)&&e(t,"update");const u=s&&r.memoizedState!==null,d=s&&t.memoizedState!==null;if(u&&d){const g=((h=t.child)==null?void 0:h.sibling)??null,w=((p=r.child)==null?void 0:p.sibling)??null;g!==null&&w!==null&&gp(e,g,w)}else if(u&&!d){const g=t.child;g!==null&&ya(e,g,!0)}else if(!u&&d){x1(e,r);const g=((y=t.child)==null?void 0:y.sibling)??null;g!==null&&ya(e,g,!0)}else if(t.child!==r.child){let g=t.child;for(;g;){if(g.alternate){const w=g.alternate;gp(e,g,w)}else ya(e,g,!1);g=g.sibling}}},vp=(e,t)=>{(t.tag===b1||!ym(t))&&e(t,"unmount")},x1=(e,t)=>{const r=t.tag===Hu&&t.memoizedState!==null;let i=t.child;if(r){const s=t.child,l=(s==null?void 0:s.sibling)??null;i=(l==null?void 0:l.child)??null}for(;i!==null;)i.return!==null&&(vp(e,i),x1(e,i)),i=i.sibling};let VT=0;const cb=new WeakMap,QT=(e,t)=>{const r="current"in e?e.current:e;let i=cb.get(e);i||(i={prevFiber:null,id:VT++},cb.set(e,i));const{prevFiber:s}=i;if(!r)vp(t,r);else if(s!==null){const l=s&&s.memoizedState!=null&&s.memoizedState.element!=null&&s.memoizedState.isDehydrated!==!0,u=r.memoizedState!=null&&r.memoizedState.element!=null&&r.memoizedState.isDehydrated!==!0;!l&&u?ya(t,r,!1):l&&u?gp(t,r,r.alternate):l&&!u&&vp(t,r)}else ya(t,r,!0);i.prevFiber=r},WT=e=>Ka(()=>{var l;const t=Ka();(l=e.onActive)==null||l.call(e),t._instrumentationSource=e.name??mm;const r=t.onCommitFiberRoot;e.onCommitFiberRoot&&(t.onCommitFiberRoot=(u,d,h)=>{var p;r&&r(u,d,h),(p=e.onCommitFiberRoot)==null||p.call(e,u,d,h)});const i=t.onCommitFiberUnmount;e.onCommitFiberUnmount&&(t.onCommitFiberUnmount=(u,d)=>{var h;i&&i(u,d),(h=e.onCommitFiberUnmount)==null||h.call(e,u,d)});const s=t.onPostCommitFiberRoot;e.onPostCommitFiberRoot&&(t.onPostCommitFiberRoot=(u,d)=>{var h;s&&s(u,d),(h=e.onPostCommitFiberRoot)==null||h.call(e,u,d)})});/**
 * @license bippy
 *
 * Copyright (c) Aiden Bai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */_T();var Iu,xe,_1,S1,Xa,ub,T1,k1,E1,wm,yp,bp,C1,Ks={},M1=[],ZT=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,hl=Array.isArray;function Ar(e,t){for(var r in t)e[r]=t[r];return e}function xm(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Ja(e,t,r){var i,s,l,u={};for(l in t)l=="key"?i=t[l]:l=="ref"?s=t[l]:u[l]=t[l];if(arguments.length>2&&(u.children=arguments.length>3?Iu.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(l in e.defaultProps)u[l]===void 0&&(u[l]=e.defaultProps[l]);return nu(e,u,i,s,null)}function nu(e,t,r,i,s){var l={type:e,props:t,key:r,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++_1,__i:-1,__u:0};return s==null&&xe.vnode!=null&&xe.vnode(l),l}function De(e){return e.children}function jn(e,t){this.props=e,this.context=t}function po(e,t){if(t==null)return e.__?po(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?po(e):null}function N1(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return N1(e)}}function wp(e){(!e.__d&&(e.__d=!0)&&Xa.push(e)&&!gu.__r++||ub!=xe.debounceRendering)&&((ub=xe.debounceRendering)||T1)(gu)}function gu(){for(var e,t,r,i,s,l,u,d=1;Xa.length;)Xa.length>d&&Xa.sort(k1),e=Xa.shift(),d=Xa.length,e.__d&&(r=void 0,s=(i=(t=e).__v).__e,l=[],u=[],t.__P&&((r=Ar({},i)).__v=i.__v+1,xe.vnode&&xe.vnode(r),_m(t.__P,r,i,t.__n,t.__P.namespaceURI,32&i.__u?[s]:null,l,s??po(i),!!(32&i.__u),u),r.__v=i.__v,r.__.__k[r.__i]=r,z1(l,r,u),r.__e!=s&&N1(r)));gu.__r=0}function O1(e,t,r,i,s,l,u,d,h,p,y){var g,w,b,S,T,M,_,C=i&&i.__k||M1,A=t.length;for(h=KT(r,t,C,h,A),g=0;g<A;g++)(b=r.__k[g])!=null&&(w=b.__i==-1?Ks:C[b.__i]||Ks,b.__i=g,M=_m(e,b,w,s,l,u,d,h,p,y),S=b.__e,b.ref&&w.ref!=b.ref&&(w.ref&&Sm(w.ref,null,b),y.push(b.ref,b.__c||S,b)),T==null&&S!=null&&(T=S),(_=!!(4&b.__u))||w.__k===b.__k?h=A1(b,h,e,_):typeof b.type=="function"&&M!==void 0?h=M:S&&(h=S.nextSibling),b.__u&=-7);return r.__e=T,h}function KT(e,t,r,i,s){var l,u,d,h,p,y=r.length,g=y,w=0;for(e.__k=new Array(s),l=0;l<s;l++)(u=t[l])!=null&&typeof u!="boolean"&&typeof u!="function"?(h=l+w,(u=e.__k[l]=typeof u=="string"||typeof u=="number"||typeof u=="bigint"||u.constructor==String?nu(null,u,null,null,null):hl(u)?nu(De,{children:u},null,null,null):u.constructor==null&&u.__b>0?nu(u.type,u.props,u.key,u.ref?u.ref:null,u.__v):u).__=e,u.__b=e.__b+1,d=null,(p=u.__i=JT(u,r,h,g))!=-1&&(g--,(d=r[p])&&(d.__u|=2)),d==null||d.__v==null?(p==-1&&(s>y?w--:s<y&&w++),typeof u.type!="function"&&(u.__u|=4)):p!=h&&(p==h-1?w--:p==h+1?w++:(p>h?w--:w++,u.__u|=4))):e.__k[l]=null;if(g)for(l=0;l<y;l++)(d=r[l])!=null&&(2&d.__u)==0&&(d.__e==i&&(i=po(d)),D1(d,d));return i}function A1(e,t,r,i){var s,l;if(typeof e.type=="function"){for(s=e.__k,l=0;s&&l<s.length;l++)s[l]&&(s[l].__=e,t=A1(s[l],t,r,i));return t}e.__e!=t&&(i&&(t&&e.type&&!t.parentNode&&(t=po(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function vu(e,t){return t=t||[],e==null||typeof e=="boolean"||(hl(e)?e.some(function(r){vu(r,t)}):t.push(e)),t}function JT(e,t,r,i){var s,l,u,d=e.key,h=e.type,p=t[r],y=p!=null&&(2&p.__u)==0;if(p===null&&e.key==null||y&&d==p.key&&h==p.type)return r;if(i>(y?1:0)){for(s=r-1,l=r+1;s>=0||l<t.length;)if((p=t[u=s>=0?s--:l++])!=null&&(2&p.__u)==0&&d==p.key&&h==p.type)return u}return-1}function db(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||ZT.test(t)?r:r+"px"}function $c(e,t,r,i,s){var l,u;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)r&&t in r||db(e.style,t,"");if(r)for(t in r)i&&r[t]==i[t]||db(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")l=t!=(t=t.replace(E1,"$1")),u=t.toLowerCase(),t=u in e||t=="onFocusOut"||t=="onFocusIn"?u.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+l]=r,r?i?r.u=i.u:(r.u=wm,e.addEventListener(t,l?bp:yp,l)):e.removeEventListener(t,l?bp:yp,l);else{if(s=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function fb(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=wm++;else if(t.t<r.u)return;return r(xe.event?xe.event(t):t)}}}function _m(e,t,r,i,s,l,u,d,h,p){var y,g,w,b,S,T,M,_,C,A,U,D,P,G,ee,ne,ue,se=t.type;if(t.constructor!=null)return null;128&r.__u&&(h=!!(32&r.__u),l=[d=t.__e=r.__e]),(y=xe.__b)&&y(t);e:if(typeof se=="function")try{if(_=t.props,C="prototype"in se&&se.prototype.render,A=(y=se.contextType)&&i[y.__c],U=y?A?A.props.value:y.__:i,r.__c?M=(g=t.__c=r.__c).__=g.__E:(C?t.__c=g=new se(_,U):(t.__c=g=new jn(_,U),g.constructor=se,g.render=tk),A&&A.sub(g),g.props=_,g.state||(g.state={}),g.context=U,g.__n=i,w=g.__d=!0,g.__h=[],g._sb=[]),C&&g.__s==null&&(g.__s=g.state),C&&se.getDerivedStateFromProps!=null&&(g.__s==g.state&&(g.__s=Ar({},g.__s)),Ar(g.__s,se.getDerivedStateFromProps(_,g.__s))),b=g.props,S=g.state,g.__v=t,w)C&&se.getDerivedStateFromProps==null&&g.componentWillMount!=null&&g.componentWillMount(),C&&g.componentDidMount!=null&&g.__h.push(g.componentDidMount);else{if(C&&se.getDerivedStateFromProps==null&&_!==b&&g.componentWillReceiveProps!=null&&g.componentWillReceiveProps(_,U),!g.__e&&g.shouldComponentUpdate!=null&&g.shouldComponentUpdate(_,g.__s,U)===!1||t.__v==r.__v){for(t.__v!=r.__v&&(g.props=_,g.state=g.__s,g.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(ae){ae&&(ae.__=t)}),D=0;D<g._sb.length;D++)g.__h.push(g._sb[D]);g._sb=[],g.__h.length&&u.push(g);break e}g.componentWillUpdate!=null&&g.componentWillUpdate(_,g.__s,U),C&&g.componentDidUpdate!=null&&g.__h.push(function(){g.componentDidUpdate(b,S,T)})}if(g.context=U,g.props=_,g.__P=e,g.__e=!1,P=xe.__r,G=0,C){for(g.state=g.__s,g.__d=!1,P&&P(t),y=g.render(g.props,g.state,g.context),ee=0;ee<g._sb.length;ee++)g.__h.push(g._sb[ee]);g._sb=[]}else do g.__d=!1,P&&P(t),y=g.render(g.props,g.state,g.context),g.state=g.__s;while(g.__d&&++G<25);g.state=g.__s,g.getChildContext!=null&&(i=Ar(Ar({},i),g.getChildContext())),C&&!w&&g.getSnapshotBeforeUpdate!=null&&(T=g.getSnapshotBeforeUpdate(b,S)),ne=y,y!=null&&y.type===De&&y.key==null&&(ne=R1(y.props.children)),d=O1(e,hl(ne)?ne:[ne],t,r,i,s,l,u,d,h,p),g.base=t.__e,t.__u&=-161,g.__h.length&&u.push(g),M&&(g.__E=g.__=null)}catch(ae){if(t.__v=null,h||l!=null)if(ae.then){for(t.__u|=h?160:128;d&&d.nodeType==8&&d.nextSibling;)d=d.nextSibling;l[l.indexOf(d)]=null,t.__e=d}else{for(ue=l.length;ue--;)xm(l[ue]);xp(t)}else t.__e=r.__e,t.__k=r.__k,ae.then||xp(t);xe.__e(ae,t,r)}else l==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):d=t.__e=ek(r.__e,t,r,i,s,l,u,h,p);return(y=xe.diffed)&&y(t),128&t.__u?void 0:d}function xp(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(xp)}function z1(e,t,r){for(var i=0;i<r.length;i++)Sm(r[i],r[++i],r[++i]);xe.__c&&xe.__c(t,e),e.some(function(s){try{e=s.__h,s.__h=[],e.some(function(l){l.call(s)})}catch(l){xe.__e(l,s.__v)}})}function R1(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:hl(e)?e.map(R1):Ar({},e)}function ek(e,t,r,i,s,l,u,d,h){var p,y,g,w,b,S,T,M=r.props,_=t.props,C=t.type;if(C=="svg"?s="http://www.w3.org/2000/svg":C=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),l!=null){for(p=0;p<l.length;p++)if((b=l[p])&&"setAttribute"in b==!!C&&(C?b.localName==C:b.nodeType==3)){e=b,l[p]=null;break}}if(e==null){if(C==null)return document.createTextNode(_);e=document.createElementNS(s,C,_.is&&_),d&&(xe.__m&&xe.__m(t,l),d=!1),l=null}if(C==null)M===_||d&&e.data==_||(e.data=_);else{if(l=l&&Iu.call(e.childNodes),M=r.props||Ks,!d&&l!=null)for(M={},p=0;p<e.attributes.length;p++)M[(b=e.attributes[p]).name]=b.value;for(p in M)if(b=M[p],p!="children"){if(p=="dangerouslySetInnerHTML")g=b;else if(!(p in _)){if(p=="value"&&"defaultValue"in _||p=="checked"&&"defaultChecked"in _)continue;$c(e,p,null,b,s)}}for(p in _)b=_[p],p=="children"?w=b:p=="dangerouslySetInnerHTML"?y=b:p=="value"?S=b:p=="checked"?T=b:d&&typeof b!="function"||M[p]===b||$c(e,p,b,M[p],s);if(y)d||g&&(y.__html==g.__html||y.__html==e.innerHTML)||(e.innerHTML=y.__html),t.__k=[];else if(g&&(e.innerHTML=""),O1(t.type=="template"?e.content:e,hl(w)?w:[w],t,r,i,C=="foreignObject"?"http://www.w3.org/1999/xhtml":s,l,u,l?l[0]:r.__k&&po(r,0),d,h),l!=null)for(p=l.length;p--;)xm(l[p]);d||(p="value",C=="progress"&&S==null?e.removeAttribute("value"):S!=null&&(S!==e[p]||C=="progress"&&!S||C=="option"&&S!=M[p])&&$c(e,p,S,M[p],s),p="checked",T!=null&&T!=e[p]&&$c(e,p,T,M[p],s))}return e}function Sm(e,t,r){try{if(typeof e=="function"){var i=typeof e.__u=="function";i&&e.__u(),i&&t==null||(e.__u=e(t))}else e.current=t}catch(s){xe.__e(s,r)}}function D1(e,t,r){var i,s;if(xe.unmount&&xe.unmount(e),(i=e.ref)&&(i.current&&i.current!=e.__e||Sm(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(l){xe.__e(l,t)}i.base=i.__P=null}if(i=e.__k)for(s=0;s<i.length;s++)i[s]&&D1(i[s],t,r||typeof e.type!="function");r||xm(e.__e),e.__c=e.__=e.__e=void 0}function tk(e,t,r){return this.constructor(e,r)}function Bs(e,t,r){var i,s,l,u;t==document&&(t=document.documentElement),xe.__&&xe.__(e,t),s=(i=!1)?null:t.__k,l=[],u=[],_m(t,e=t.__k=Ja(De,null,[e]),s||Ks,Ks,t.namespaceURI,s?null:t.firstChild?Iu.call(t.childNodes):null,l,s?s.__e:t.firstChild,i,u),z1(l,e,u)}function j1(e){function t(r){var i,s;return this.getChildContext||(i=new Set,(s={})[t.__c]=this,this.getChildContext=function(){return s},this.componentWillUnmount=function(){i=null},this.shouldComponentUpdate=function(l){this.props.value!=l.value&&i.forEach(function(u){u.__e=!0,wp(u)})},this.sub=function(l){i.add(l);var u=l.componentWillUnmount;l.componentWillUnmount=function(){i&&i.delete(l),u&&u.call(l)}}),r.children}return t.__c="__cC"+C1++,t.__=e,t.Provider=t.__l=(t.Consumer=function(r,i){return r.children(i)}).contextType=t,t}Iu=M1.slice,xe={__e:function(e,t,r,i){for(var s,l,u;t=t.__;)if((s=t.__c)&&!s.__)try{if((l=s.constructor)&&l.getDerivedStateFromError!=null&&(s.setState(l.getDerivedStateFromError(e)),u=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,i||{}),u=s.__d),u)return s.__E=s}catch(d){e=d}throw e}},_1=0,S1=function(e){return e!=null&&e.constructor==null},jn.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Ar({},this.state),typeof e=="function"&&(e=e(Ar({},r),this.props)),e&&Ar(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),wp(this))},jn.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),wp(this))},jn.prototype.render=De,Xa=[],T1=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,k1=function(e,t){return e.__v.__b-t.__v.__b},gu.__r=0,E1=/(PointerCapture)$|Capture$/i,wm=0,yp=fb(!1),bp=fb(!0),C1=0;var ei,tt,bh,hb,Js=0,U1=[],ft=xe,pb=ft.__b,mb=ft.__r,gb=ft.diffed,vb=ft.__c,yb=ft.unmount,bb=ft.__;function pl(e,t){ft.__h&&ft.__h(tt,e,Js||t),Js=0;var r=tt.__H||(tt.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function Ne(e){return Js=1,nk(L1,e)}function nk(e,t,r){var i=pl(ei++,2);if(i.t=e,!i.__c&&(i.__=[r?r(t):L1(void 0,t),function(d){var h=i.__N?i.__N[0]:i.__[0],p=i.t(h,d);h!==p&&(i.__N=[p,i.__[1]],i.__c.setState({}))}],i.__c=tt,!tt.__f)){var s=function(d,h,p){if(!i.__c.__H)return!0;var y=i.__c.__H.__.filter(function(w){return!!w.__c});if(y.every(function(w){return!w.__N}))return!l||l.call(this,d,h,p);var g=i.__c.props!==d;return y.forEach(function(w){if(w.__N){var b=w.__[0];w.__=w.__N,w.__N=void 0,b!==w.__[0]&&(g=!0)}}),l&&l.call(this,d,h,p)||g};tt.__f=!0;var l=tt.shouldComponentUpdate,u=tt.componentWillUpdate;tt.componentWillUpdate=function(d,h,p){if(this.__e){var y=l;l=void 0,s(d,h,p),l=y}u&&u.call(this,d,h,p)},tt.shouldComponentUpdate=s}return i.__N||i.__}function Ce(e,t){var r=pl(ei++,3);!ft.__s&&Em(r.__H,t)&&(r.__=e,r.u=t,tt.__H.__h.push(r))}function Tm(e,t){var r=pl(ei++,4);!ft.__s&&Em(r.__H,t)&&(r.__=e,r.u=t,tt.__h.push(r))}function he(e){return Js=5,Wn(function(){return{current:e}},[])}function Wn(e,t){var r=pl(ei++,7);return Em(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function dt(e,t){return Js=8,Wn(function(){return e},t)}function km(e){var t=tt.context[e.__c],r=pl(ei++,9);return r.c=e,t?(r.__==null&&(r.__=!0,t.sub(tt)),t.props.value):e.__}function rk(){for(var e;e=U1.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ru),e.__H.__h.forEach(_p),e.__H.__h=[]}catch(t){e.__H.__h=[],ft.__e(t,e.__v)}}ft.__b=function(e){tt=null,pb&&pb(e)},ft.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),bb&&bb(e,t)},ft.__r=function(e){mb&&mb(e),ei=0;var t=(tt=e.__c).__H;t&&(bh===tt?(t.__h=[],tt.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(ru),t.__h.forEach(_p),t.__h=[],ei=0)),bh=tt},ft.diffed=function(e){gb&&gb(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(U1.push(t)!==1&&hb===ft.requestAnimationFrame||((hb=ft.requestAnimationFrame)||ak)(rk)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),bh=tt=null},ft.__c=function(e,t){t.some(function(r){try{r.__h.forEach(ru),r.__h=r.__h.filter(function(i){return!i.__||_p(i)})}catch(i){t.some(function(s){s.__h&&(s.__h=[])}),t=[],ft.__e(i,r.__v)}}),vb&&vb(e,t)},ft.unmount=function(e){yb&&yb(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(i){try{ru(i)}catch(s){t=s}}),r.__H=void 0,t&&ft.__e(t,r.__v))};var wb=typeof requestAnimationFrame=="function";function ak(e){var t,r=function(){clearTimeout(i),wb&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(r,35);wb&&(t=requestAnimationFrame(r))}function ru(e){var t=tt,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),tt=t}function _p(e){var t=tt;e.__c=e.__(),tt=t}function Em(e,t){return!e||e.length!==t.length||t.some(function(r,i){return r!==e[i]})}function L1(e,t){return typeof t=="function"?t(e):t}var ik=Symbol.for("preact-signals");function Cm(){if(oo>1)oo--;else{for(var e,t=!1;Xs!==void 0;){var r=Xs;for(Xs=void 0,Sp++;r!==void 0;){var i=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&H1(r))try{r.c()}catch(s){t||(e=s,t=!0)}r=i}}if(Sp=0,oo--,t)throw e}}var qe=void 0;function el(e){var t=qe;qe=void 0;try{return e()}finally{qe=t}}var Xs=void 0,oo=0,Sp=0,yu=0;function $1(e){if(qe!==void 0){var t=e.n;if(t===void 0||t.t!==qe)return t={i:0,S:e,p:qe.s,n:void 0,t:qe,e:void 0,x:void 0,r:t},qe.s!==void 0&&(qe.s.n=t),qe.s=t,e.n=t,32&qe.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=qe.s,t.n=void 0,qe.s.n=t,qe.s=t),t}}function jt(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched}jt.prototype.brand=ik;jt.prototype.h=function(){return!0};jt.prototype.S=function(e){var t=this,r=this.t;r!==e&&e.e===void 0&&(e.x=r,this.t=e,r!==void 0?r.e=e:el(function(){var i;(i=t.W)==null||i.call(t)}))};jt.prototype.U=function(e){var t=this;if(this.t!==void 0){var r=e.e,i=e.x;r!==void 0&&(r.x=i,e.e=void 0),i!==void 0&&(i.e=r,e.x=void 0),e===this.t&&(this.t=i,i===void 0&&el(function(){var s;(s=t.Z)==null||s.call(t)}))}};jt.prototype.subscribe=function(e){var t=this;return Yu(function(){var r=t.value,i=qe;qe=void 0;try{e(r)}finally{qe=i}})};jt.prototype.valueOf=function(){return this.value};jt.prototype.toString=function(){return this.value+""};jt.prototype.toJSON=function(){return this.value};jt.prototype.peek=function(){var e=qe;qe=void 0;try{return this.value}finally{qe=e}};Object.defineProperty(jt.prototype,"value",{get:function(){var e=$1(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(Sp>100)throw new Error("Cycle detected");this.v=e,this.i++,yu++,oo++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Cm()}}}});function yt(e,t){return new jt(e,t)}function H1(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function q1(e){for(var t=e.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function I1(e){for(var t=e.s,r=void 0;t!==void 0;){var i=t.p;t.i===-1?(t.S.U(t),i!==void 0&&(i.n=t.n),t.n!==void 0&&(t.n.p=i)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=i}e.s=r}function ii(e,t){jt.call(this,void 0),this.x=e,this.s=void 0,this.g=yu-1,this.f=4,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched}ii.prototype=new jt;ii.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===yu))return!0;if(this.g=yu,this.f|=1,this.i>0&&!H1(this))return this.f&=-2,!0;var e=qe;try{q1(this),qe=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return qe=e,I1(this),this.f&=-2,!0};ii.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}jt.prototype.S.call(this,e)};ii.prototype.U=function(e){if(this.t!==void 0&&(jt.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};ii.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(ii.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=$1(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function oi(e,t){return new ii(e,t)}function Y1(e){var t=e.u;if(e.u=void 0,typeof t=="function"){oo++;var r=qe;qe=void 0;try{t()}catch(i){throw e.f&=-2,e.f|=8,Mm(e),i}finally{qe=r,Cm()}}}function Mm(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,Y1(e)}function ok(e){if(qe!==this)throw new Error("Out-of-order effect");I1(this),qe=e,this.f&=-2,8&this.f&&Mm(this),Cm()}function _o(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}_o.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};_o.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Y1(this),q1(this),oo++;var e=qe;return qe=this,ok.bind(this,e)};_o.prototype.N=function(){2&this.f||(this.f|=2,this.o=Xs,Xs=this)};_o.prototype.d=function(){this.f|=8,1&this.f||Mm(this)};_o.prototype.dispose=function(){this.d()};function Yu(e){var t=new _o(e);try{t.c()}catch(i){throw t.d(),i}var r=t.d.bind(t);return r[Symbol.dispose]=r,r}var wh;function So(e,t){xe[e]=t.bind(null,xe[e]||function(){})}function bu(e){wh&&wh(),wh=e&&e.S()}function B1(e){var t=this,r=e.data,i=lk(r);i.value=r;var s=Wn(function(){for(var l=t.__v;l=l.__;)if(l.__c){l.__c.__$f|=4;break}return t.__$u.c=function(){var u,d=t.__$u.S(),h=s.value;d(),S1(h)||((u=t.base)==null?void 0:u.nodeType)!==3?(t.__$f|=1,t.setState({})):t.base.data=h},oi(function(){var u=i.value.value;return u===0?0:u===!0?"":u||""})},[]);return s.value}B1.displayName="_st";Object.defineProperties(jt.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:B1},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});So("__b",function(e,t){if(typeof t.type=="string"){var r,i=t.props;for(var s in i)if(s!=="children"){var l=i[s];l instanceof jt&&(r||(t.__np=r={}),r[s]=l,i[s]=l.peek())}}e(t)});So("__r",function(e,t){bu();var r,i=t.__c;i&&(i.__$f&=-2,(r=i.__$u)===void 0&&(i.__$u=r=function(s){var l;return Yu(function(){l=this}),l.c=function(){i.__$f|=1,i.setState({})},l}())),bu(r),e(t)});So("__e",function(e,t,r,i){bu(),e(t,r,i)});So("diffed",function(e,t){bu();var r;if(typeof t.type=="string"&&(r=t.__e)){var i=t.__np,s=t.props;if(i){var l=r.U;if(l)for(var u in l){var d=l[u];d!==void 0&&!(u in i)&&(d.d(),l[u]=void 0)}else r.U=l={};for(var h in i){var p=l[h],y=i[h];p===void 0?(p=sk(r,h,y,s),l[h]=p):p.o(y,s)}}}e(t)});function sk(e,t,r,i){var s=t in e&&e.ownerSVGElement===void 0,l=yt(r);return{o:function(u,d){l.value=u,i=d},d:Yu(function(){var u=l.value.value;i[t]!==u&&(i[t]=u,s?e[t]=u:u?e.setAttribute(t,u):e.removeAttribute(t))})}}So("unmount",function(e,t){if(typeof t.type=="string"){var r=t.__e;if(r){var i=r.U;if(i){r.U=void 0;for(var s in i){var l=i[s];l&&l.d()}}}}else{var u=t.__c;if(u){var d=u.__$u;d&&(u.__$u=void 0,d.d())}}e(t)});So("__h",function(e,t,r,i){(i<3||i===9)&&(t.__$f|=2),e(t,r,i)});jn.prototype.shouldComponentUpdate=function(e,t){var r=this.__$u,i=r&&r.s!==void 0;for(var s in t)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(i||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(i||4&this.__$f)||3&this.__$f)return!0;for(var l in e)if(l!=="__source"&&e[l]!==this.props[l])return!0;for(var u in this.props)if(!(u in e))return!0;return!1};function lk(e){return Wn(function(){return yt(e)},[])}function tl(e){var t=he(e);t.current=e,Ce(function(){return Yu(function(){return t.current()})},[])}function X1(e,t){for(var r in t)e[r]=t[r];return e}function Tp(e,t){for(var r in e)if(r!=="__source"&&!(r in t))return!0;for(var i in t)if(i!=="__source"&&e[i]!==t[i])return!0;return!1}function ck(e,t){var r=t(),i=Ne({t:{__:r,u:t}}),s=i[0].t,l=i[1];return Tm(function(){s.__=r,s.u=t,xh(s)&&l({t:s})},[e,r,t]),Ce(function(){return xh(s)&&l({t:s}),e(function(){xh(s)&&l({t:s})})},[e]),r}function xh(e){var t,r,i=e.u,s=e.__;try{var l=i();return!((t=s)===(r=l)&&(t!==0||1/t==1/r)||t!=t&&r!=r)}catch{return!0}}function xb(e,t){this.props=e,this.context=t}function Bu(e,t){function r(s){var l=this.props.ref,u=l==s.ref;return!u&&l&&(l.call?l(null):l.current=null),t?!t(this.props,s)||!u:Tp(this.props,s)}function i(s){return this.shouldComponentUpdate=r,Ja(e,s)}return i.displayName="Memo("+(e.displayName||e.name)+")",i.prototype.isReactComponent=!0,i.__f=!0,i.type=e,i}(xb.prototype=new jn).isPureReactComponent=!0,xb.prototype.shouldComponentUpdate=function(e,t){return Tp(this.props,e)||Tp(this.state,t)};var _b=xe.__b;xe.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),_b&&_b(e)};var uk=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Nm(e){function t(r){var i=X1({},r);return delete i.ref,e(i,r.ref||null)}return t.$$typeof=uk,t.render=e,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var dk=xe.__e;xe.__e=function(e,t,r,i){if(e.then){for(var s,l=t;l=l.__;)if((s=l.__c)&&s.__c)return t.__e==null&&(t.__e=r.__e,t.__k=r.__k),s.__c(e,t)}dk(e,t,r,i)};var Sb=xe.unmount;function F1(e,t,r){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(i){typeof i.__c=="function"&&i.__c()}),e.__c.__H=null),(e=X1({},e)).__c!=null&&(e.__c.__P===r&&(e.__c.__P=t),e.__c.__e=!0,e.__c=null),e.__k=e.__k&&e.__k.map(function(i){return F1(i,t,r)})),e}function P1(e,t,r){return e&&r&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(i){return P1(i,t,r)}),e.__c&&e.__c.__P===t&&(e.__e&&r.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=r)),e}function _h(){this.__u=0,this.o=null,this.__b=null}function G1(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function Hc(){this.i=null,this.l=null}xe.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Sb&&Sb(e)},(_h.prototype=new jn).__c=function(e,t){var r=t.__c,i=this;i.o==null&&(i.o=[]),i.o.push(r);var s=G1(i.__v),l=!1,u=function(){l||(l=!0,r.__R=null,s?s(d):d())};r.__R=u;var d=function(){if(!--i.__u){if(i.state.__a){var h=i.state.__a;i.__v.__k[0]=P1(h,h.__c.__P,h.__c.__O)}var p;for(i.setState({__a:i.__b=null});p=i.o.pop();)p.forceUpdate()}};i.__u++||32&t.__u||i.setState({__a:i.__b=i.__v.__k[0]}),e.then(u,u)},_h.prototype.componentWillUnmount=function(){this.o=[]},_h.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=F1(this.__b,r,i.__O=i.__P)}this.__b=null}var s=t.__a&&Ja(De,null,e.fallback);return s&&(s.__u&=-33),[Ja(De,null,t.__a?null:e.children),s]};var Tb=function(e,t,r){if(++r[1]===r[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(r=e.i;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.i=r=r[2]}};function fk(e){return this.getChildContext=function(){return e.context},e.children}function hk(e){var t=this,r=e.h;if(t.componentWillUnmount=function(){Bs(null,t.v),t.v=null,t.h=null},t.h&&t.h!==r&&t.componentWillUnmount(),!t.v){for(var i=t.__v;i!==null&&!i.__m&&i.__!==null;)i=i.__;t.h=r,t.v={nodeType:1,parentNode:r,childNodes:[],__k:{__m:i.__m},contains:function(){return!0},insertBefore:function(s,l){this.childNodes.push(s),t.h.insertBefore(s,l)},removeChild:function(s){this.childNodes.splice(this.childNodes.indexOf(s)>>>1,1),t.h.removeChild(s)}}}Bs(Ja(fk,{context:t.context},e.__v),t.v)}function pk(e,t){var r=Ja(hk,{__v:e,h:t});return r.containerInfo=t,r}(Hc.prototype=new jn).__a=function(e){var t=this,r=G1(t.__v),i=t.l.get(e);return i[0]++,function(s){var l=function(){t.props.revealOrder?(i.push(s),Tb(t,e,i)):s()};r?r(l):l()}},Hc.prototype.render=function(e){this.i=null,this.l=new Map;var t=vu(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var r=t.length;r--;)this.l.set(t[r],this.i=[1,0,this.i]);return e.children},Hc.prototype.componentDidUpdate=Hc.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,r){Tb(e,r,t)})};var mk=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,gk=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,vk=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,yk=/[A-Z0-9]/g,bk=typeof document<"u",wk=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};jn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(jn.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var kb=xe.event;function xk(){}function _k(){return this.cancelBubble}function Sk(){return this.defaultPrevented}xe.event=function(e){return kb&&(e=kb(e)),e.persist=xk,e.isPropagationStopped=_k,e.isDefaultPrevented=Sk,e.nativeEvent=e};var Tk={enumerable:!1,configurable:!0,get:function(){return this.class}},Eb=xe.vnode;xe.vnode=function(e){typeof e.type=="string"&&function(t){var r=t.props,i=t.type,s={},l=i.indexOf("-")===-1;for(var u in r){var d=r[u];if(!(u==="value"&&"defaultValue"in r&&d==null||bk&&u==="children"&&i==="noscript"||u==="class"||u==="className")){var h=u.toLowerCase();u==="defaultValue"&&"value"in r&&r.value==null?u="value":u==="download"&&d===!0?d="":h==="translate"&&d==="no"?d=!1:h[0]==="o"&&h[1]==="n"?h==="ondoubleclick"?u="ondblclick":h!=="onchange"||i!=="input"&&i!=="textarea"||wk(r.type)?h==="onfocus"?u="onfocusin":h==="onblur"?u="onfocusout":vk.test(u)&&(u=h):h=u="oninput":l&&gk.test(u)?u=u.replace(yk,"-$&").toLowerCase():d===null&&(d=void 0),h==="oninput"&&s[u=h]&&(u="oninputCapture"),s[u]=d}}i=="select"&&s.multiple&&Array.isArray(s.value)&&(s.value=vu(r.children).forEach(function(p){p.props.selected=s.value.indexOf(p.props.value)!=-1})),i=="select"&&s.defaultValue!=null&&(s.value=vu(r.children).forEach(function(p){p.props.selected=s.multiple?s.defaultValue.indexOf(p.props.value)!=-1:s.defaultValue==p.props.value})),r.class&&!r.className?(s.class=r.class,Object.defineProperty(s,"className",Tk)):(r.className&&!r.class||r.class&&r.className)&&(s.class=s.className=r.className),t.props=s}(e),e.$$typeof=mk,Eb&&Eb(e)};var Cb=xe.__r;xe.__r=function(e){Cb&&Cb(e),e.__c};var Mb=xe.diffed;xe.diffed=function(e){Mb&&Mb(e);var t=e.props,r=e.__e;r!=null&&e.type==="textarea"&&"value"in t&&t.value!==r.value&&(r.value=t.value==null?"":t.value)};var kk=0;function v(e,t,r,i,s,l){t||(t={});var u,d,h=t;if("ref"in h)for(d in h={},t)d=="ref"?u=t[d]:h[d]=t[d];var p={type:e,props:h,key:r,ref:u,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--kk,__i:-1,__u:0,__source:s,__self:l};if(typeof e=="function"&&(u=e.defaultProps))for(d in u)h[d]===void 0&&(h[d]=u[d]);return xe.vnode&&xe.vnode(p),p}var Sh={exports:{}},ke={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nb;function Ek(){if(Nb)return ke;Nb=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),g=Symbol.iterator;function w(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,T={};function M(N,H,W){this.props=N,this.context=H,this.refs=T,this.updater=W||b}M.prototype.isReactComponent={},M.prototype.setState=function(N,H){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,H,"setState")},M.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function _(){}_.prototype=M.prototype;function C(N,H,W){this.props=N,this.context=H,this.refs=T,this.updater=W||b}var A=C.prototype=new _;A.constructor=C,S(A,M.prototype),A.isPureReactComponent=!0;var U=Array.isArray,D={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function G(N,H,W,J,te,ie){return W=ie.ref,{$$typeof:e,type:N,key:H,ref:W!==void 0?W:null,props:ie}}function ee(N,H){return G(N.type,H,void 0,void 0,void 0,N.props)}function ne(N){return typeof N=="object"&&N!==null&&N.$$typeof===e}function ue(N){var H={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(W){return H[W]})}var se=/\/+/g;function ae(N,H){return typeof N=="object"&&N!==null&&N.key!=null?ue(""+N.key):H.toString(36)}function ye(){}function we(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(ye,ye):(N.status="pending",N.then(function(H){N.status==="pending"&&(N.status="fulfilled",N.value=H)},function(H){N.status==="pending"&&(N.status="rejected",N.reason=H)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function _e(N,H,W,J,te){var ie=typeof N;(ie==="undefined"||ie==="boolean")&&(N=null);var re=!1;if(N===null)re=!0;else switch(ie){case"bigint":case"string":case"number":re=!0;break;case"object":switch(N.$$typeof){case e:case t:re=!0;break;case y:return re=N._init,_e(re(N._payload),H,W,J,te)}}if(re)return te=te(N),re=J===""?"."+ae(N,0):J,U(te)?(W="",re!=null&&(W=re.replace(se,"$&/")+"/"),_e(te,H,W,"",function(Te){return Te})):te!=null&&(ne(te)&&(te=ee(te,W+(te.key==null||N&&N.key===te.key?"":(""+te.key).replace(se,"$&/")+"/")+re)),H.push(te)),1;re=0;var ge=J===""?".":J+":";if(U(N))for(var de=0;de<N.length;de++)J=N[de],ie=ge+ae(J,de),re+=_e(J,H,W,ie,te);else if(de=w(N),typeof de=="function")for(N=de.call(N),de=0;!(J=N.next()).done;)J=J.value,ie=ge+ae(J,de++),re+=_e(J,H,W,ie,te);else if(ie==="object"){if(typeof N.then=="function")return _e(we(N),H,W,J,te);throw H=String(N),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return re}function E(N,H,W){if(N==null)return N;var J=[],te=0;return _e(N,J,"","",function(ie){return H.call(W,ie,te++)}),J}function O(N){if(N._status===-1){var H=N._result;H=H(),H.then(function(W){(N._status===0||N._status===-1)&&(N._status=1,N._result=W)},function(W){(N._status===0||N._status===-1)&&(N._status=2,N._result=W)}),N._status===-1&&(N._status=0,N._result=H)}if(N._status===1)return N._result.default;throw N._result}var R=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function Y(){}return ke.Children={map:E,forEach:function(N,H,W){E(N,function(){H.apply(this,arguments)},W)},count:function(N){var H=0;return E(N,function(){H++}),H},toArray:function(N){return E(N,function(H){return H})||[]},only:function(N){if(!ne(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ke.Component=M,ke.Fragment=r,ke.Profiler=s,ke.PureComponent=C,ke.StrictMode=i,ke.Suspense=h,ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,ke.__COMPILER_RUNTIME={__proto__:null,c:function(N){return D.H.useMemoCache(N)}},ke.cache=function(N){return function(){return N.apply(null,arguments)}},ke.cloneElement=function(N,H,W){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var J=S({},N.props),te=N.key,ie=void 0;if(H!=null)for(re in H.ref!==void 0&&(ie=void 0),H.key!==void 0&&(te=""+H.key),H)!P.call(H,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&H.ref===void 0||(J[re]=H[re]);var re=arguments.length-2;if(re===1)J.children=W;else if(1<re){for(var ge=Array(re),de=0;de<re;de++)ge[de]=arguments[de+2];J.children=ge}return G(N.type,te,void 0,void 0,ie,J)},ke.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:l,_context:N},N},ke.createElement=function(N,H,W){var J,te={},ie=null;if(H!=null)for(J in H.key!==void 0&&(ie=""+H.key),H)P.call(H,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(te[J]=H[J]);var re=arguments.length-2;if(re===1)te.children=W;else if(1<re){for(var ge=Array(re),de=0;de<re;de++)ge[de]=arguments[de+2];te.children=ge}if(N&&N.defaultProps)for(J in re=N.defaultProps,re)te[J]===void 0&&(te[J]=re[J]);return G(N,ie,void 0,void 0,null,te)},ke.createRef=function(){return{current:null}},ke.forwardRef=function(N){return{$$typeof:d,render:N}},ke.isValidElement=ne,ke.lazy=function(N){return{$$typeof:y,_payload:{_status:-1,_result:N},_init:O}},ke.memo=function(N,H){return{$$typeof:p,type:N,compare:H===void 0?null:H}},ke.startTransition=function(N){var H=D.T,W={};D.T=W;try{var J=N(),te=D.S;te!==null&&te(W,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(Y,R)}catch(ie){R(ie)}finally{D.T=H}},ke.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},ke.use=function(N){return D.H.use(N)},ke.useActionState=function(N,H,W){return D.H.useActionState(N,H,W)},ke.useCallback=function(N,H){return D.H.useCallback(N,H)},ke.useContext=function(N){return D.H.useContext(N)},ke.useDebugValue=function(){},ke.useDeferredValue=function(N,H){return D.H.useDeferredValue(N,H)},ke.useEffect=function(N,H,W){var J=D.H;if(typeof W=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(N,H)},ke.useId=function(){return D.H.useId()},ke.useImperativeHandle=function(N,H,W){return D.H.useImperativeHandle(N,H,W)},ke.useInsertionEffect=function(N,H){return D.H.useInsertionEffect(N,H)},ke.useLayoutEffect=function(N,H){return D.H.useLayoutEffect(N,H)},ke.useMemo=function(N,H){return D.H.useMemo(N,H)},ke.useOptimistic=function(N,H){return D.H.useOptimistic(N,H)},ke.useReducer=function(N,H,W){return D.H.useReducer(N,H,W)},ke.useRef=function(N){return D.H.useRef(N)},ke.useState=function(N){return D.H.useState(N)},ke.useSyncExternalStore=function(N,H,W){return D.H.useSyncExternalStore(N,H,W)},ke.useTransition=function(){return D.H.useTransition()},ke.version="19.1.0",ke}var Ob;function ml(){return Ob||(Ob=1,Sh.exports=Ek()),Sh.exports}var pt=ml();const Zt=pm(pt);Array.prototype.toSorted||Object.defineProperty(Array.prototype,"toSorted",{value:function(e){return[...this].sort(e)},writable:!0,configurable:!0});function Ck(e,t){return t-e}function Mk(e){let t=e[0].name;const r=e.length,i=Math.min(4,r);for(let s=1;s<i;s++)t+=`, ${e[s].name}`;return t}function Nk(e){let t=e[0].time;for(let r=1,i=e.length;r<i;r++)t+=e[r].time;return t}function Ok(e){for(let t=0,r=e.length;t<r;t++)if(e[t].forget)return!0;return!1}var Ak=e=>{let t="";const r=new Map;for(const u of e){const{forget:d,time:h,aggregatedCount:p,name:y}=u;r.has(p)||r.set(p,[]);const g=r.get(p);g&&g.push({name:y,forget:d,time:h??0})}const i=Array.from(r.keys()).sort(Ck),s=[];let l=0;for(const u of i){const d=r.get(u);if(!d)continue;let h=Mk(d);const p=Nk(d),y=Ok(d);l+=p,d.length>4&&(h+="…"),u>1&&(h+=` × ${u}`),y&&(h=`✨${h}`),s.push(h)}return t=s.join(", "),t.length?(t.length>40&&(t=`${t.slice(0,40)}…`),l>=.01&&(t+=` (${Number(l.toFixed(2))}ms)`),t):null};function wa(e,t){return e===t||e!==e&&t!==t}var Om=e=>{const t=e.createOscillator(),r=e.createGain();t.connect(r),r.connect(e.destination);const i={type:"sine",freq:[392,600],duration:.3,gain:.12},s=i.freq,l=i.duration/s.length;s.forEach((u,d)=>{t.frequency.setValueAtTime(u,e.currentTime+d*l)}),t.type=i.type,r.gain.setValueAtTime(i.gain,e.currentTime),r.gain.setTargetAtTime(0,e.currentTime+i.duration*.7,.05),t.start(),t.stop(e.currentTime+i.duration)},zk=e=>new Promise(t=>{const r=new Map,i=new IntersectionObserver(s=>{for(const l of s){const u=l.target,d=l.boundingClientRect;r.set(u,d)}i.disconnect(),t(r)});for(const s of e)i.observe(s)}),Rk={mount:1,update:2,unmount:4},ot=Nm(({size:e=15,name:t,fill:r="currentColor",stroke:i="currentColor",className:s,externalURL:l="",style:u},d)=>{const h=Array.isArray(e)?e[0]:e,p=Array.isArray(e)?e[1]||e[0]:e,y=`${l}#${t}`;return v("svg",{ref:d,width:`${h}px`,height:`${p}px`,fill:r,stroke:i,className:s,style:{...u,minWidth:`${h}px`,maxWidth:`${h}px`,minHeight:`${p}px`,maxHeight:`${p}px`},children:[v("title",{children:t}),v("use",{href:y})]})}),be=24,vt={width:550,height:350,initialHeight:400},Fn=240,zr="react-scan-widget-settings-v2",au="react-scan-widget-collapsed-v1",Wi="react-scan-widget-last-view-v1",cr=typeof window<"u";function V1(e){var t,r,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=V1(e[t]))&&(i&&(i+=" "),i+=r)}else for(r in e)e[r]&&(i&&(i+=" "),i+=r);return i}function Dk(){for(var e,t,r=0,i="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=V1(e))&&(i&&(i+=" "),i+=t);return i}var Am="-",jk=e=>{const t=Lk(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:i}=e;return{getClassGroupId:u=>{const d=u.split(Am);return d[0]===""&&d.length!==1&&d.shift(),Q1(d,t)||Uk(u)},getConflictingClassGroupIds:(u,d)=>{const h=r[u]||[];return d&&i[u]?[...h,...i[u]]:h}}},Q1=(e,t)=>{var u;if(e.length===0)return t.classGroupId;const r=e[0],i=t.nextPart.get(r),s=i?Q1(e.slice(1),i):void 0;if(s)return s;if(t.validators.length===0)return;const l=e.join(Am);return(u=t.validators.find(({validator:d})=>d(l)))==null?void 0:u.classGroupId},Ab=/^\[(.+)\]$/,Uk=e=>{if(Ab.test(e)){const t=Ab.exec(e)[1],r=t==null?void 0:t.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},Lk=e=>{const{theme:t,prefix:r}=e,i={nextPart:new Map,validators:[]};return Hk(Object.entries(e.classGroups),r).forEach(([l,u])=>{kp(u,i,l,t)}),i},kp=(e,t,r,i)=>{e.forEach(s=>{if(typeof s=="string"){const l=s===""?t:zb(t,s);l.classGroupId=r;return}if(typeof s=="function"){if($k(s)){kp(s(i),t,r,i);return}t.validators.push({validator:s,classGroupId:r});return}Object.entries(s).forEach(([l,u])=>{kp(u,zb(t,l),r,i)})})},zb=(e,t)=>{let r=e;return t.split(Am).forEach(i=>{r.nextPart.has(i)||r.nextPart.set(i,{nextPart:new Map,validators:[]}),r=r.nextPart.get(i)}),r},$k=e=>e.isThemeGetter,Hk=(e,t)=>t?e.map(([r,i])=>{const s=i.map(l=>typeof l=="string"?t+l:typeof l=="object"?Object.fromEntries(Object.entries(l).map(([u,d])=>[t+u,d])):l);return[r,s]}):e,qk=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,i=new Map;const s=(l,u)=>{r.set(l,u),t++,t>e&&(t=0,i=r,r=new Map)};return{get(l){let u=r.get(l);if(u!==void 0)return u;if((u=i.get(l))!==void 0)return s(l,u),u},set(l,u){r.has(l)?r.set(l,u):s(l,u)}}},W1="!",Ik=e=>{const{separator:t,experimentalParseClassName:r}=e,i=t.length===1,s=t[0],l=t.length,u=d=>{const h=[];let p=0,y=0,g;for(let M=0;M<d.length;M++){let _=d[M];if(p===0){if(_===s&&(i||d.slice(M,M+l)===t)){h.push(d.slice(y,M)),y=M+l;continue}if(_==="/"){g=M;continue}}_==="["?p++:_==="]"&&p--}const w=h.length===0?d:d.substring(y),b=w.startsWith(W1),S=b?w.substring(1):w,T=g&&g>y?g-y:void 0;return{modifiers:h,hasImportantModifier:b,baseClassName:S,maybePostfixModifierPosition:T}};return r?d=>r({className:d,parseClassName:u}):u},Yk=e=>{if(e.length<=1)return e;const t=[];let r=[];return e.forEach(i=>{i[0]==="["?(t.push(...r.sort(),i),r=[]):r.push(i)}),t.push(...r.sort()),t},Bk=e=>({cache:qk(e.cacheSize),parseClassName:Ik(e),...jk(e)}),Xk=/\s+/,Fk=(e,t)=>{const{parseClassName:r,getClassGroupId:i,getConflictingClassGroupIds:s}=t,l=[],u=e.trim().split(Xk);let d="";for(let h=u.length-1;h>=0;h-=1){const p=u[h],{modifiers:y,hasImportantModifier:g,baseClassName:w,maybePostfixModifierPosition:b}=r(p);let S=!!b,T=i(S?w.substring(0,b):w);if(!T){if(!S){d=p+(d.length>0?" "+d:d);continue}if(T=i(w),!T){d=p+(d.length>0?" "+d:d);continue}S=!1}const M=Yk(y).join(":"),_=g?M+W1:M,C=_+T;if(l.includes(C))continue;l.push(C);const A=s(T,S);for(let U=0;U<A.length;++U){const D=A[U];l.push(_+D)}d=p+(d.length>0?" "+d:d)}return d};function Pk(){let e=0,t,r,i="";for(;e<arguments.length;)(t=arguments[e++])&&(r=Z1(t))&&(i&&(i+=" "),i+=r);return i}var Z1=e=>{if(typeof e=="string")return e;let t,r="";for(let i=0;i<e.length;i++)e[i]&&(t=Z1(e[i]))&&(r&&(r+=" "),r+=t);return r};function Gk(e,...t){let r,i,s,l=u;function u(h){const p=t.reduce((y,g)=>g(y),e());return r=Bk(p),i=r.cache.get,s=r.cache.set,l=d,d(h)}function d(h){const p=i(h);if(p)return p;const y=Fk(h,r);return s(h,y),y}return function(){return l(Pk.apply(null,arguments))}}var Ke=e=>{const t=r=>r[e]||[];return t.isThemeGetter=!0,t},K1=/^\[(?:([a-z-]+):)?(.+)\]$/i,Vk=/^\d+\/\d+$/,Qk=new Set(["px","full","screen"]),Wk=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Zk=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Kk=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Jk=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,e4=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Mr=e=>so(e)||Qk.has(e)||Vk.test(e),fa=e=>To(e,"length",l4),so=e=>!!e&&!Number.isNaN(Number(e)),Th=e=>To(e,"number",so),ks=e=>!!e&&Number.isInteger(Number(e)),t4=e=>e.endsWith("%")&&so(e.slice(0,-1)),Ee=e=>K1.test(e),ha=e=>Wk.test(e),n4=new Set(["length","size","percentage"]),r4=e=>To(e,n4,J1),a4=e=>To(e,"position",J1),i4=new Set(["image","url"]),o4=e=>To(e,i4,u4),s4=e=>To(e,"",c4),Es=()=>!0,To=(e,t,r)=>{const i=K1.exec(e);return i?i[1]?typeof t=="string"?i[1]===t:t.has(i[1]):r(i[2]):!1},l4=e=>Zk.test(e)&&!Kk.test(e),J1=()=>!1,c4=e=>Jk.test(e),u4=e=>e4.test(e),d4=()=>{const e=Ke("colors"),t=Ke("spacing"),r=Ke("blur"),i=Ke("brightness"),s=Ke("borderColor"),l=Ke("borderRadius"),u=Ke("borderSpacing"),d=Ke("borderWidth"),h=Ke("contrast"),p=Ke("grayscale"),y=Ke("hueRotate"),g=Ke("invert"),w=Ke("gap"),b=Ke("gradientColorStops"),S=Ke("gradientColorStopPositions"),T=Ke("inset"),M=Ke("margin"),_=Ke("opacity"),C=Ke("padding"),A=Ke("saturate"),U=Ke("scale"),D=Ke("sepia"),P=Ke("skew"),G=Ke("space"),ee=Ke("translate"),ne=()=>["auto","contain","none"],ue=()=>["auto","hidden","clip","visible","scroll"],se=()=>["auto",Ee,t],ae=()=>[Ee,t],ye=()=>["",Mr,fa],we=()=>["auto",so,Ee],_e=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],E=()=>["solid","dashed","dotted","double","none"],O=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],R=()=>["start","end","center","between","around","evenly","stretch"],Y=()=>["","0",Ee],N=()=>["auto","avoid","all","avoid-page","page","left","right","column"],H=()=>[so,Ee];return{cacheSize:500,separator:":",theme:{colors:[Es],spacing:[Mr,fa],blur:["none","",ha,Ee],brightness:H(),borderColor:[e],borderRadius:["none","","full",ha,Ee],borderSpacing:ae(),borderWidth:ye(),contrast:H(),grayscale:Y(),hueRotate:H(),invert:Y(),gap:ae(),gradientColorStops:[e],gradientColorStopPositions:[t4,fa],inset:se(),margin:se(),opacity:H(),padding:ae(),saturate:H(),scale:H(),sepia:Y(),skew:H(),space:ae(),translate:ae()},classGroups:{aspect:[{aspect:["auto","square","video",Ee]}],container:["container"],columns:[{columns:[ha]}],"break-after":[{"break-after":N()}],"break-before":[{"break-before":N()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[..._e(),Ee]}],overflow:[{overflow:ue()}],"overflow-x":[{"overflow-x":ue()}],"overflow-y":[{"overflow-y":ue()}],overscroll:[{overscroll:ne()}],"overscroll-x":[{"overscroll-x":ne()}],"overscroll-y":[{"overscroll-y":ne()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[T]}],"inset-x":[{"inset-x":[T]}],"inset-y":[{"inset-y":[T]}],start:[{start:[T]}],end:[{end:[T]}],top:[{top:[T]}],right:[{right:[T]}],bottom:[{bottom:[T]}],left:[{left:[T]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ks,Ee]}],basis:[{basis:se()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Ee]}],grow:[{grow:Y()}],shrink:[{shrink:Y()}],order:[{order:["first","last","none",ks,Ee]}],"grid-cols":[{"grid-cols":[Es]}],"col-start-end":[{col:["auto",{span:["full",ks,Ee]},Ee]}],"col-start":[{"col-start":we()}],"col-end":[{"col-end":we()}],"grid-rows":[{"grid-rows":[Es]}],"row-start-end":[{row:["auto",{span:[ks,Ee]},Ee]}],"row-start":[{"row-start":we()}],"row-end":[{"row-end":we()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Ee]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Ee]}],gap:[{gap:[w]}],"gap-x":[{"gap-x":[w]}],"gap-y":[{"gap-y":[w]}],"justify-content":[{justify:["normal",...R()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...R(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...R(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[C]}],px:[{px:[C]}],py:[{py:[C]}],ps:[{ps:[C]}],pe:[{pe:[C]}],pt:[{pt:[C]}],pr:[{pr:[C]}],pb:[{pb:[C]}],pl:[{pl:[C]}],m:[{m:[M]}],mx:[{mx:[M]}],my:[{my:[M]}],ms:[{ms:[M]}],me:[{me:[M]}],mt:[{mt:[M]}],mr:[{mr:[M]}],mb:[{mb:[M]}],ml:[{ml:[M]}],"space-x":[{"space-x":[G]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[G]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Ee,t]}],"min-w":[{"min-w":[Ee,t,"min","max","fit"]}],"max-w":[{"max-w":[Ee,t,"none","full","min","max","fit","prose",{screen:[ha]},ha]}],h:[{h:[Ee,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Ee,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Ee,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Ee,t,"auto","min","max","fit"]}],"font-size":[{text:["base",ha,fa]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Th]}],"font-family":[{font:[Es]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Ee]}],"line-clamp":[{"line-clamp":["none",so,Th]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Mr,Ee]}],"list-image":[{"list-image":["none",Ee]}],"list-style-type":[{list:["none","disc","decimal",Ee]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[_]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[_]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...E(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Mr,fa]}],"underline-offset":[{"underline-offset":["auto",Mr,Ee]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:ae()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Ee]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Ee]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[_]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[..._e(),a4]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",r4]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},o4]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[S]}],"gradient-via-pos":[{via:[S]}],"gradient-to-pos":[{to:[S]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[d]}],"border-w-x":[{"border-x":[d]}],"border-w-y":[{"border-y":[d]}],"border-w-s":[{"border-s":[d]}],"border-w-e":[{"border-e":[d]}],"border-w-t":[{"border-t":[d]}],"border-w-r":[{"border-r":[d]}],"border-w-b":[{"border-b":[d]}],"border-w-l":[{"border-l":[d]}],"border-opacity":[{"border-opacity":[_]}],"border-style":[{border:[...E(),"hidden"]}],"divide-x":[{"divide-x":[d]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[d]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[_]}],"divide-style":[{divide:E()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...E()]}],"outline-offset":[{"outline-offset":[Mr,Ee]}],"outline-w":[{outline:[Mr,fa]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:ye()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[_]}],"ring-offset-w":[{"ring-offset":[Mr,fa]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",ha,s4]}],"shadow-color":[{shadow:[Es]}],opacity:[{opacity:[_]}],"mix-blend":[{"mix-blend":[...O(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":O()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[i]}],contrast:[{contrast:[h]}],"drop-shadow":[{"drop-shadow":["","none",ha,Ee]}],grayscale:[{grayscale:[p]}],"hue-rotate":[{"hue-rotate":[y]}],invert:[{invert:[g]}],saturate:[{saturate:[A]}],sepia:[{sepia:[D]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[h]}],"backdrop-grayscale":[{"backdrop-grayscale":[p]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[y]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[_]}],"backdrop-saturate":[{"backdrop-saturate":[A]}],"backdrop-sepia":[{"backdrop-sepia":[D]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[u]}],"border-spacing-x":[{"border-spacing-x":[u]}],"border-spacing-y":[{"border-spacing-y":[u]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Ee]}],duration:[{duration:H()}],ease:[{ease:["linear","in","out","in-out",Ee]}],delay:[{delay:H()}],animate:[{animate:["none","spin","ping","pulse","bounce",Ee]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[U]}],"scale-x":[{"scale-x":[U]}],"scale-y":[{"scale-y":[U]}],rotate:[{rotate:[ks,Ee]}],"translate-x":[{"translate-x":[ee]}],"translate-y":[{"translate-y":[ee]}],"skew-x":[{"skew-x":[P]}],"skew-y":[{"skew-y":[P]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Ee]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Ee]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":ae()}],"scroll-mx":[{"scroll-mx":ae()}],"scroll-my":[{"scroll-my":ae()}],"scroll-ms":[{"scroll-ms":ae()}],"scroll-me":[{"scroll-me":ae()}],"scroll-mt":[{"scroll-mt":ae()}],"scroll-mr":[{"scroll-mr":ae()}],"scroll-mb":[{"scroll-mb":ae()}],"scroll-ml":[{"scroll-ml":ae()}],"scroll-p":[{"scroll-p":ae()}],"scroll-px":[{"scroll-px":ae()}],"scroll-py":[{"scroll-py":ae()}],"scroll-ps":[{"scroll-ps":ae()}],"scroll-pe":[{"scroll-pe":ae()}],"scroll-pt":[{"scroll-pt":ae()}],"scroll-pr":[{"scroll-pr":ae()}],"scroll-pb":[{"scroll-pb":ae()}],"scroll-pl":[{"scroll-pl":ae()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Ee]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Mr,fa,Th]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},f4=Gk(d4),L=(...e)=>f4(Dk(e));typeof navigator<"u"&&navigator.userAgent.includes("Firefox");var ex=(e,t)=>{let r=0;return i=>{const s=Date.now();if(s-r>=t)return r=s,e(i)}},Ur=e=>{if(!cr)return null;try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}},Wt=(e,t)=>{if(cr)try{window.localStorage.setItem(e,JSON.stringify(t))}catch{}},Rb=e=>{if(cr)try{window.localStorage.removeItem(e)}catch{}},h4=24,p4=12,nl=e=>{if(!e)return{name:"Unknown",wrappers:[],wrapperTypes:[]};const{tag:t,type:r,elementType:i}=e;let s=Nt(r);const l=[],u=[];if(Zs(e)||t===fl||t===dl||(r==null?void 0:r.$$typeof)===Symbol.for("react.memo")||(i==null?void 0:i.$$typeof)===Symbol.for("react.memo")){const d=Zs(e);u.push({type:"memo",title:d?"This component has been auto-memoized by the React Compiler.":"Memoized component that skips re-renders if props are the same",compiler:d})}if(t===h4&&u.push({type:"lazy",title:"Lazily loaded component that supports code splitting"}),t===Hu&&u.push({type:"suspense",title:"Component that can suspend while content is loading"}),t===p4&&u.push({type:"profiler",title:"Component that measures rendering performance"}),typeof s=="string"){const d=/^(\w+)\((.*)\)$/;let h=s;for(;d.test(h);){const p=h.match(d);if(p!=null&&p[1]&&(p!=null&&p[2]))l.unshift(p[1]),h=p[2];else break}s=h}return{name:s||"Unknown",wrappers:l,wrapperTypes:u}},Xu=yt(!1),Ep=yt(null),ir={corner:"bottom-right",dimensions:{isFullWidth:!1,isFullHeight:!1,width:vt.width,height:vt.height,position:{x:be,y:be}},lastDimensions:{isFullWidth:!1,isFullHeight:!1,width:vt.width,height:vt.height,position:{x:be,y:be}},componentsTree:{width:Fn}},m4=()=>{const e=Ur(zr);return e?{corner:e.corner??ir.corner,dimensions:e.dimensions??ir.dimensions,lastDimensions:e.lastDimensions??e.dimensions??ir.lastDimensions,componentsTree:e.componentsTree??ir.componentsTree}:(Wt(zr,{corner:ir.corner,dimensions:ir.dimensions,lastDimensions:ir.lastDimensions,componentsTree:ir.componentsTree}),ir)},le=yt(m4()),kh=()=>{if(!cr)return;const{dimensions:e}=le.value,{width:t,height:r,position:i}=e;le.value={...le.value,dimensions:{isFullWidth:t>=window.innerWidth-be*2,isFullHeight:r>=window.innerHeight-be*2,width:t,height:r,position:i}}},Ze=yt({view:"none"}),g4=Ur(au),fn=yt(g4??null);function v4(){return!1}function zm(e){function t(r){return this.shouldComponentUpdate=v4,Ja(e,r)}return t.displayName=`Memo(${e.displayName||e.name})`,t.prototype.isReactComponent=!0,t._forwarded=!0,t}var y4=e=>{const{count:t,getScrollElement:r,estimateSize:i,overscan:s=5}=e,[l,u]=Ne(0),[d,h]=Ne(0),p=he(),y=he(null),g=he(null),w=i(),b=dt(_=>{var A;if(!y.current)return;const C=((A=_==null?void 0:_[0])==null?void 0:A.contentRect.height)??y.current.getBoundingClientRect().height;h(C)},[]),S=dt(()=>{g.current!==null&&cancelAnimationFrame(g.current),g.current=requestAnimationFrame(()=>{b(),g.current=null})},[b]);Ce(()=>{const _=r();if(!_)return;y.current=_;const C=()=>{y.current&&u(y.current.scrollTop)};b(),p.current||(p.current=new ResizeObserver(()=>{S()})),p.current.observe(_),_.addEventListener("scroll",C,{passive:!0});const A=new MutationObserver(S);return A.observe(_,{attributes:!0,childList:!0,subtree:!0}),()=>{_.removeEventListener("scroll",C),p.current&&p.current.disconnect(),A.disconnect(),g.current!==null&&cancelAnimationFrame(g.current)}},[r,b,S]);const T=Wn(()=>{const _=Math.floor(l/w),C=Math.ceil(d/w);return{start:Math.max(0,_-s),end:Math.min(t,_+C+s)}},[l,w,d,t,s]);return{virtualItems:Wn(()=>{const _=[];for(let C=T.start;C<T.end;C++)_.push({key:C,index:C,start:C*w});return _},[T,w]),totalSize:t*w,scrollTop:l,containerHeight:d}};Ur("react-scann-pinned");var b4=e=>{const t=[];let r=e;for(;r;){const i=r.elementType,s=typeof i=="function"?i.displayName||i.name:typeof i=="string"?i:"Unknown",l=r.index!==void 0?`[${r.index}]`:"";t.unshift(`${s}${l}`),r=r.return??null}return t.join("::")},qa=new WeakMap,w4=(e,t)=>{const r=t.bind(null,e);return document.addEventListener("scroll",r,{passive:!0,capture:!0}),()=>{document.removeEventListener("scroll",r,{capture:!0})}},x4={activeFlashes:new Map,create(e){const t=e.querySelector(".react-scan-flash-overlay"),r=t instanceof HTMLElement?t:(()=>{const s=document.createElement("div");s.className="react-scan-flash-overlay",e.appendChild(s);const l=w4(e,()=>{e.querySelector(".react-scan-flash-overlay")&&this.create(e)});return this.activeFlashes.set(e,{element:e,overlay:s,scrollCleanup:l}),s})(),i=qa.get(r);i&&(clearTimeout(i),qa.delete(r)),requestAnimationFrame(()=>{r.style.transition="none",r.style.opacity="0.9";const s=setTimeout(()=>{r.style.transition="opacity 150ms ease-out",r.style.opacity="0";const l=setTimeout(()=>{r.parentNode&&r.parentNode.removeChild(r);const u=this.activeFlashes.get(e);u!=null&&u.scrollCleanup&&u.scrollCleanup(),this.activeFlashes.delete(e),qa.delete(r)},150);qa.set(r,l)},300);qa.set(r,s)})},cleanup(e){const t=this.activeFlashes.get(e);if(t){const r=qa.get(t.overlay);r&&(clearTimeout(r),qa.delete(t.overlay)),t.overlay.parentNode&&t.overlay.parentNode.removeChild(t.overlay),t.scrollCleanup&&t.scrollCleanup(),this.activeFlashes.delete(e)}},cleanupAll(){for(const[,e]of this.activeFlashes)this.cleanup(e.element)}},Db=1e3,tx={updates:[],currentFiber:null,totalUpdates:0,windowOffset:0,currentIndex:0,isViewingHistory:!1,latestFiber:null,isVisible:!1,playbackSpeed:1},Bt=yt(tx),Rm=yt(0),Pa=[],Ia=null,_4=()=>{if(Pa.length===0)return;const e=[...Pa],{updates:t,totalUpdates:r,currentIndex:i,isViewingHistory:s}=Bt.value,l=[...t];let u=r;for(const{update:y}of e)l.length>=Db&&l.shift(),l.push(y),u++;const d=Math.max(0,u-Db);let h;s?i===r-1?h=l.length-1:i===0?h=0:d===0?h=i:h=i-1:h=l.length-1;const p=e[e.length-1];Bt.value={...Bt.value,latestFiber:p.fiber,updates:l,totalUpdates:u,windowOffset:d,currentIndex:h,isViewingHistory:s},Pa=Pa.slice(e.length)},nx={showTimeline:()=>{Bt.value={...Bt.value,isVisible:!0}},hideTimeline:()=>{Bt.value={...Bt.value,isVisible:!1,currentIndex:Bt.value.updates.length-1}},updateFrame:(e,t)=>{Bt.value={...Bt.value,currentIndex:e,isViewingHistory:t}},updatePlaybackSpeed:e=>{Bt.value={...Bt.value,playbackSpeed:e}},addUpdate:(e,t)=>{if(Pa.push({update:e,fiber:t}),!Ia){const r=()=>{_4(),Ia=null,Pa.length>0&&(Ia=setTimeout(r,96))};Ia=setTimeout(r,96)}},reset:()=>{Ia&&(clearTimeout(Ia),Ia=null),Pa=[],Bt.value=tx}},$t=yt({query:"",matches:[],currentMatchIndex:-1}),Eh=yt(!1),rx=(e,t=0,r=null)=>e.reduce((i,s,l)=>{var p,y;const u=s.element?b4(s.fiber):`${r}-${l}`,d=(p=s.fiber)!=null&&p.type?mx(s.fiber):void 0,h={...s,depth:t,nodeId:u,parentId:r,fiber:s.fiber,renderData:d};return i.push(h),(y=s.children)!=null&&y.length&&i.push(...rx(s.children,t+1,u)),i},[]),S4=e=>e.reduce((t,r)=>Math.max(t,r.depth),0),T4=(e,t)=>{if(t<=0)return 24;const l=Math.max(0,e-Fn);if(l<24)return 0;const d=Math.min(l*.3,t*24)/t;return Math.max(0,Math.min(24,d))},k4=["memo","forwardRef","lazy","suspense"],ax=e=>{const t=e.match(/\[(.*?)\]/);if(!t)return null;const r=[],i=t[1].split(",");for(const s of i){const l=s.trim().toLowerCase();l&&r.push(l)}return r},E4=e=>{if(e.length===0)return!1;for(const t of e){let r=!1;for(const i of k4)if(i.toLowerCase().includes(t)){r=!0;break}if(!r)return!1}return!0},ix=(e,t)=>{if(e.length===0)return!0;if(!t.length)return!1;for(const r of e){let i=!1;for(const s of t)if(s.type.toLowerCase().includes(r)){i=!0;break}if(!i)return!1}return!0},C4=(e,t)=>Wn(()=>{const{query:r,matches:i}=t,s=i.some(p=>p.nodeId===e.nodeId),l=ax(r)||[],u=r?r.replace(/\[.*?\]/,"").trim():"";if(!r||!s)return{highlightedText:v("span",{className:"truncate",children:e.label}),typeHighlight:!1};let d=!0;if(l.length>0)if(!e.fiber)d=!1;else{const{wrapperTypes:p}=nl(e.fiber);d=ix(l,p)}let h=v("span",{className:"truncate",children:e.label});if(u)try{if(u.startsWith("/")&&u.endsWith("/")){const p=u.slice(1,-1),y=new RegExp(`(${p})`,"i"),g=e.label.split(y);h=v("span",{className:"tree-node-search-highlight",children:g.map((w,b)=>y.test(w)?v("span",{className:L("regex",{start:y.test(w)&&b===0,middle:y.test(w)&&b%2===1,end:y.test(w)&&b===g.length-1,"!ml-0":b===1}),children:w},`${e.nodeId}-${w}`):w)})}else{const p=e.label.toLowerCase(),y=u.toLowerCase(),g=p.indexOf(y);g>=0&&(h=v("span",{className:"tree-node-search-highlight",children:[e.label.slice(0,g),v("span",{className:"single",children:e.label.slice(g,g+u.length)}),e.label.slice(g+u.length)]}))}}catch{}return{highlightedText:h,typeHighlight:d&&l.length>0}},[e.label,e.nodeId,e.fiber,t]),jb=e=>e>0?e<.1-Number.EPSILON?"< 0.1":e<1e3?Number(e.toFixed(1)).toString():`${(e/1e3).toFixed(1)}k`:"0",M4=({node:e,nodeIndex:t,hasChildren:r,isCollapsed:i,handleTreeNodeClick:s,handleTreeNodeToggle:l,searchValue:u})=>{var b,S;const d=he(null),h=he(((b=e.renderData)==null?void 0:b.renderCount)??0),{highlightedText:p,typeHighlight:y}=C4(e,u);Ce(()=>{var _;const T=(_=e.renderData)==null?void 0:_.renderCount,M=d.current;!M||!h.current||!T||h.current===T||(M.classList.remove("count-flash"),M.offsetWidth,M.classList.add("count-flash"),h.current=T)},[(S=e.renderData)==null?void 0:S.renderCount]);const g=Wn(()=>{if(!e.renderData)return null;const{selfTime:T,totalTime:M,renderCount:_}=e.renderData;return _?v("span",{className:L("flex items-center gap-x-0.5 ml-1.5","text-[10px] text-neutral-400"),children:v("span",{ref:d,title:`Self time: ${jb(T)}ms
Total time: ${jb(M)}ms`,className:"count-badge",children:["×",_]})}):null},[e.renderData]),w=Wn(()=>{if(!e.fiber)return null;const{wrapperTypes:T}=nl(e.fiber),M=T[0];return v("span",{className:L("flex items-center gap-x-1","text-[10px] text-neutral-400 tracking-wide","overflow-hidden"),children:[M&&v(De,{children:[v("span",{title:M==null?void 0:M.title,className:L("rounded py-[1px] px-1","bg-neutral-700 text-neutral-300","truncate",M.type==="memo"&&"bg-[#8e61e3] text-white",y&&"bg-yellow-300 text-black"),children:M.type},M.type),M.compiler&&v("span",{className:"text-yellow-300 ml-1",children:"✨"})]}),T.length>1&&`×${T.length}`,g]})},[e.fiber,y,g]);return v("button",{type:"button",title:e.title,"data-index":t,className:L("flex items-center gap-x-1","pl-1 pr-2","w-full h-7","text-left","rounded","cursor-pointer select-none"),onClick:s,children:[v("button",{type:"button","data-index":t,onClick:l,className:L("w-6 h-6 flex items-center justify-center","text-left"),children:r&&v(ot,{name:"icon-chevron-right",size:12,className:L("transition-transform",!i&&"rotate-90")})}),p,w]})},N4=()=>{const e=he(null),t=he(null),r=he(null),i=he(null),s=he(null),l=he(0),u=he(!1),d=he(!1),h=he(null),[p,y]=Ne([]),[g,w]=Ne(new Set),[b,S]=Ne(void 0),[T,M]=Ne($t.value),_=Wn(()=>{const E=[],O=p,R=new Map(O.map(Y=>[Y.nodeId,Y]));for(const Y of O){let N=!0,H=Y;for(;H.parentId;){const W=R.get(H.parentId);if(!W)break;if(g.has(W.nodeId)){N=!1;break}H=W}N&&E.push(Y)}return E},[g,p]),C=28,{virtualItems:A,totalSize:U}=y4({count:_.length,getScrollElement:()=>e.current,estimateSize:()=>C,overscan:5}),D=dt(E=>{var Y;u.current=!0,(Y=i.current)==null||Y.blur(),Eh.value=!0;const{parentCompositeFiber:O}=Ga(E);if(!O)return;oe.inspectState.value={kind:"focused",focusedDomElement:E,fiber:O};const R=_.findIndex(N=>N.element===E);if(R!==-1){S(R);const N=R*C,H=e.current;if(H){const W=H.clientHeight,J=H.scrollTop;(N<J||N+C>J+W)&&H.scrollTo({top:Math.max(0,N-W/2),behavior:"instant"})}}},[_]),P=dt(E=>{const O=E.currentTarget,R=Number(O.dataset.index);if(Number.isNaN(R))return;const Y=_[R].element;Y&&D(Y)},[_,D]),G=dt(E=>{w(O=>{const R=new Set(O);return R.has(E)?R.delete(E):R.add(E),R})},[]),ee=dt(E=>{E.stopPropagation();const O=E.target,R=Number(O.dataset.index);if(Number.isNaN(R))return;const Y=_[R].nodeId;G(Y)},[_,G]),ne=dt(E=>{var W,J,te,ie,re;(W=r.current)==null||W.classList.remove("!border-red-500");const O=[];if(!E){$t.value={query:E,matches:O,currentMatchIndex:-1};return}if(E.includes("[")&&!E.includes("]")&&E.length>E.indexOf("[")+1){(J=r.current)==null||J.classList.add("!border-red-500");return}const R=ax(E)||[];if(E.includes("[")&&!E4(R)){(te=r.current)==null||te.classList.add("!border-red-500");return}const Y=E.replace(/\[.*?\]/,"").trim(),N=/^\/.*\/$/.test(Y);let H=ge=>!1;if(Y.startsWith("/")&&!N&&Y.length>1){(ie=r.current)==null||ie.classList.add("!border-red-500");return}if(N)try{const ge=Y.slice(1,-1),de=new RegExp(ge,"i");H=Te=>de.test(Te)}catch{(re=r.current)==null||re.classList.add("!border-red-500");return}else if(Y){const ge=Y.toLowerCase();H=de=>de.toLowerCase().includes(ge)}for(const ge of p){let de=!0;if(Y&&(de=H(ge.label)),de&&R.length>0)if(!ge.fiber)de=!1;else{const{wrapperTypes:Te}=nl(ge.fiber);de=ix(R,Te)}de&&O.push(ge)}if($t.value={query:E,matches:O,currentMatchIndex:O.length>0?0:-1},O.length>0){const ge=O[0],de=_.findIndex(Te=>Te.nodeId===ge.nodeId);if(de!==-1){const Te=de*C,Le=e.current;if(Le){const It=Le.clientHeight;Le.scrollTo({top:Math.max(0,Te-It/2),behavior:"instant"})}}}},[p,_]),ue=dt(E=>{const O=E.currentTarget;O&&ne(O.value)},[ne]),se=dt(E=>{const{matches:O,currentMatchIndex:R}=$t.value;if(O.length===0)return;const Y=E==="next"?(R+1)%O.length:(R-1+O.length)%O.length;$t.value={...$t.value,currentMatchIndex:Y};const N=O[Y],H=_.findIndex(W=>W.nodeId===N.nodeId);if(H!==-1){S(H);const W=H*C,J=e.current;if(J){const te=J.clientHeight;J.scrollTo({top:Math.max(0,W-te/2),behavior:"instant"})}}},[_]),ae=dt(E=>{if(t.current&&(t.current.style.width=`${E}px`),e.current){e.current.style.width=`${E}px`;const O=T4(E,l.current);e.current.style.setProperty("--indentation-size",`${O}px`)}},[]),ye=dt(E=>{if(!h.current)return;const O=le.value.dimensions.width,R=Math.floor(O-Fn/2);h.current.classList.remove("cursor-ew-resize","cursor-w-resize","cursor-e-resize"),E<=Fn?h.current.classList.add("cursor-w-resize"):E>=R?h.current.classList.add("cursor-e-resize"):h.current.classList.add("cursor-ew-resize")},[]),we=dt(E=>{if(E.preventDefault(),E.stopPropagation(),!e.current)return;e.current.style.setProperty("pointer-events","none"),d.current=!0;const O=E.clientX,R=e.current.offsetWidth,Y=le.value.dimensions.width,N=Math.floor(Y-Fn/2);ye(R);const H=J=>{const te=O-J.clientX,ie=R+te;ye(ie);const re=Math.min(N,Math.max(Fn,ie));ae(re)},W=()=>{e.current&&(e.current.style.removeProperty("pointer-events"),document.removeEventListener("pointermove",H),document.removeEventListener("pointerup",W),le.value={...le.value,componentsTree:{...le.value.componentsTree,width:e.current.offsetWidth}},Wt(zr,le.value),d.current=!1)};document.addEventListener("pointermove",H),document.addEventListener("pointerup",W)},[ae,ye]);Ce(()=>{if(!e.current)return;const E=e.current.offsetWidth;return ye(E),le.subscribe(()=>{e.current&&ye(e.current.offsetWidth)})},[ye]);const _e=dt(()=>{u.current=!1},[]);return Ce(()=>{let E=!0;const O=W=>{const J=new Map,te=[];for(const{element:ie,name:re,fiber:ge}of W){if(!ie)continue;let de=re;const{name:Te,wrappers:Le}=nl(ge);Te&&(Le.length>0?de=`${Le.join("(")}(${Te})${")".repeat(Le.length)}`:de=Te),J.set(ie,{label:Te||re,title:de,children:[],element:ie,fiber:ge})}for(const{element:ie,depth:re}of W){if(!ie)continue;const ge=J.get(ie);if(ge)if(re===0)te.push(ge);else{let de=ie.parentElement;for(;de;){const Te=J.get(de);if(Te){Te.children=Te.children||[],Te.children.push(ge);break}de=de.parentElement}}}return te},R=()=>{const W=s.current;if(!W)return;const J=Q4(),te=O(J);if(te.length>0){const ie=rx(te),re=S4(ie);if(l.current=re,ae(le.value.componentsTree.width),y(ie),E){E=!1;const ge=ie.findIndex(de=>de.element===W);if(ge!==-1){const de=ge*C,Te=e.current;Te&&setTimeout(()=>{Te.scrollTo({top:de,behavior:"instant"})},96)}}}},Y=oe.inspectState.subscribe(W=>{if(W.kind==="focused"){if(Eh.value)return;ne(""),s.current=W.focusedDomElement,R()}});let N=0;const H=Rm.subscribe(()=>{if(oe.inspectState.value.kind==="focused"){if(cancelAnimationFrame(N),d.current)return;N=requestAnimationFrame(()=>{Eh.value=!1,R()})}});return()=>{Y(),H(),$t.value={query:"",matches:[],currentMatchIndex:-1}}},[]),Ce(()=>{const E=O=>{if(u.current&&b)switch(O.key){case"ArrowUp":{if(O.preventDefault(),O.stopPropagation(),b>0){const R=_[b-1];R!=null&&R.element&&D(R.element)}return}case"ArrowDown":{if(O.preventDefault(),O.stopPropagation(),b<_.length-1){const R=_[b+1];R!=null&&R.element&&D(R.element)}return}case"ArrowLeft":{O.preventDefault(),O.stopPropagation();const R=_[b];R!=null&&R.nodeId&&G(R.nodeId);return}case"ArrowRight":{O.preventDefault(),O.stopPropagation();const R=_[b];R!=null&&R.nodeId&&G(R.nodeId);return}}};return document.addEventListener("keydown",E),()=>{document.removeEventListener("keydown",E)}},[b,_,D,G]),Ce(()=>$t.subscribe(M),[]),Ce(()=>le.subscribe(O=>{var R;(R=t.current)==null||R.style.setProperty("transition","width 0.1s"),ae(O.componentsTree.width),setTimeout(()=>{var Y;(Y=t.current)==null||Y.style.removeProperty("transition")},500)}),[]),v("div",{className:"react-scan-components-tree flex",children:[v("div",{ref:h,onPointerDown:we,className:"relative resize-v-line",children:v("span",{children:v(ot,{name:"icon-ellipsis",size:18})})}),v("div",{ref:t,className:"flex flex-col h-full",children:[v("div",{className:"p-2 border-b border-[#1e1e1e]",children:v("div",{ref:r,title:`Search components by:

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
`,className:L("relative","flex items-center gap-x-1 px-2","rounded","border border-transparent","focus-within:border-[#454545]","bg-[#1e1e1e] text-neutral-300","transition-colors","whitespace-nowrap","overflow-hidden"),children:[v(ot,{name:"icon-search",size:12,className:" text-neutral-500"}),v("div",{className:"relative flex-1 h-7 overflow-hidden",children:v("input",{ref:i,type:"text",value:$t.value.query,onClick:E=>{E.stopPropagation(),E.currentTarget.focus()},onPointerDown:E=>{E.stopPropagation()},onKeyDown:E=>{E.key==="Escape"&&E.currentTarget.blur(),$t.value.matches.length&&(E.key==="Enter"&&E.shiftKey?se("prev"):E.key==="Enter"&&(E.metaKey||E.ctrlKey?(E.preventDefault(),E.stopPropagation(),D($t.value.matches[$t.value.currentMatchIndex].element),E.currentTarget.focus()):se("next")))},onChange:ue,className:"absolute inset-y-0 inset-x-1",placeholder:"Component name, /regex/, or [type]"})}),$t.value.query?v(De,{children:[v("span",{className:"flex items-center gap-x-0.5 text-xs text-neutral-500",children:[$t.value.currentMatchIndex+1,"|",$t.value.matches.length]}),!!$t.value.matches.length&&v(De,{children:[v("button",{type:"button",onClick:E=>{E.stopPropagation(),se("prev")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:v(ot,{name:"icon-chevron-right",className:"-rotate-90",size:12})}),v("button",{type:"button",onClick:E=>{E.stopPropagation(),se("next")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:v(ot,{name:"icon-chevron-right",className:"rotate-90",size:12})})]}),v("button",{type:"button",onClick:E=>{E.stopPropagation(),ne("")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:v(ot,{name:"icon-close",size:12})})]}):!!p.length&&v("span",{className:"text-xs text-neutral-500",children:p.length})]})}),v("div",{className:"flex-1 overflow-hidden",children:v("div",{ref:e,onPointerLeave:_e,className:"tree h-full overflow-auto will-change-transform",children:v("div",{className:"relative w-full",style:{height:U},children:A.map(E=>{var N;const O=_[E.index];if(!O)return null;const R=oe.inspectState.value.kind==="focused"&&O.element===oe.inspectState.value.focusedDomElement,Y=E.index===b;return v("div",{className:L("absolute left-0 w-full overflow-hidden","text-neutral-400 hover:text-neutral-300","bg-transparent hover:bg-[#5f3f9a]/20",(R||Y)&&"text-neutral-300 bg-[#5f3f9a]/40 hover:bg-[#5f3f9a]/40"),style:{top:E.start,height:C},children:v("div",{className:"w-full h-full",style:{paddingLeft:`calc(${O.depth} * var(--indentation-size))`},children:v(M4,{node:O,nodeIndex:E.index,hasChildren:!!((N=O.children)!=null&&N.length),isCollapsed:g.has(O.nodeId),handleTreeNodeClick:P,handleTreeNodeToggle:ee,searchValue:T})})},O.nodeId)})})})})]})]})},wu=Bu(({text:e,children:t,onCopy:r,className:i,iconSize:s=14})=>{const[l,u]=Ne(!1);Ce(()=>{if(l){const p=setTimeout(()=>u(!1),600);return()=>{clearTimeout(p)}}},[l]);const d=dt(p=>{p.preventDefault(),p.stopPropagation(),navigator.clipboard.writeText(e).then(()=>{u(!0),r==null||r(!0,e)},()=>{r==null||r(!1,e)})},[e,r]),h=v("button",{onClick:d,type:"button",className:L("z-10","flex items-center justify-center","hover:text-dev-pink-400","transition-colors duration-200 ease-in-out","cursor-pointer",`size-[${s}px]`,i),children:v(ot,{name:`icon-${l?"check":"copy"}`,size:[s],className:L(l&&"text-green-500")})});return t?t({ClipboardIcon:h,onClick:d}):h}),O4=({length:e,expanded:t,onToggle:r,isNegative:i})=>v("div",{className:"flex items-center gap-1",children:[v("button",{type:"button",onClick:r,className:"flex items-center p-0 opacity-50",children:v(ot,{name:"icon-chevron-right",size:12,className:L("transition-[color,transform]",i?"text-[#f87171]":"text-[#4ade80]",t&&"rotate-90")})}),v("span",{children:["Array(",e,")"]})]}),Cp=({value:e,path:t,isNegative:r})=>{const[i,s]=Ne(!1);if(!(e!==null&&typeof e=="object"&&!(e instanceof Date)))return v("div",{className:"flex items-center gap-1",children:[v("span",{className:"text-gray-500",children:[t,":"]}),v("span",{className:"truncate",children:Tu(e)})]});const u=Object.entries(e);return v("div",{className:"flex flex-col",children:[v("div",{className:"flex items-center gap-1",children:[v("button",{type:"button",onClick:()=>s(!i),className:"flex items-center p-0 opacity-50",children:v(ot,{name:"icon-chevron-right",size:12,className:L("transition-[color,transform]",r?"text-[#f87171]":"text-[#4ade80]",i&&"rotate-90")})}),v("span",{className:"text-gray-500",children:[t,":"]}),!i&&v("span",{className:"truncate",children:e instanceof Date?Tu(e):`{${Object.keys(e).join(", ")}}`})]}),i&&v("div",{className:"pl-5 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:u.map(([d,h])=>v(Cp,{value:h,path:d,isNegative:r},d))})]})},xu=({value:e,expanded:t,onToggle:r,isNegative:i})=>{const{value:s,error:l}=K4(e);return l?v("span",{className:"text-gray-500 font-italic",children:l}):s!==null&&typeof s=="object"&&!(s instanceof Promise)?Array.isArray(s)?v("div",{className:"flex flex-col gap-1 relative",children:[v(O4,{length:s.length,expanded:t,onToggle:r,isNegative:i}),t&&v("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:s.map((d,h)=>v(Cp,{value:d,path:h.toString(),isNegative:i},h.toString()))}),v(wu,{text:qb(s),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:d})=>v(De,{children:d})})]}):v("div",{className:"flex items-start gap-1 relative",children:[v("button",{type:"button",onClick:r,className:L("flex items-center","p-0 mt-0.5 mr-1","opacity-50"),children:v(ot,{name:"icon-chevron-right",size:12,className:L("transition-[color,transform]",i?"text-[#f87171]":"text-[#4ade80]",t&&"rotate-90")})}),v("div",{className:"flex-1",children:t?v("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:Object.entries(s).map(([d,h])=>v(Cp,{value:h,path:d,isNegative:i},d))}):v("span",{children:Tu(s)})}),v(wu,{text:qb(s),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:d})=>v(De,{children:d})})]}):v("span",{children:Tu(s)})},A4=50;yt({fiber:null,fiberProps:{current:[],changes:new Set},fiberState:{current:[],changes:new Set},fiberContext:{current:[],changes:new Set}});var Mp=e=>{switch(e.kind){case"initialized":return e.changes.currentValue;case"partially-initialized":return e.value}},Ub=(e,t)=>{for(const r of e){const i=t.get(r.name);if(i){t.set(i.name,{count:i.count+1,currentValue:r.value,id:i.name,lastUpdated:Date.now(),name:i.name,previousValue:r.prevValue});continue}t.set(r.name,{count:1,currentValue:r.value,id:r.name,lastUpdated:Date.now(),name:r.name,previousValue:r.prevValue})}},z4=(e,t)=>{for(const r of e){const i=t.contextChanges.get(r.contextType);if(i){if(wa(Mp(i),r.value))continue;if(i.kind==="partially-initialized"){t.contextChanges.set(r.contextType,{kind:"initialized",changes:{count:1,currentValue:r.value,id:r.contextType.toString(),lastUpdated:Date.now(),name:r.name,previousValue:i.value}});continue}t.contextChanges.set(r.contextType,{kind:"initialized",changes:{count:i.changes.count+1,currentValue:r.value,id:r.contextType.toString(),lastUpdated:Date.now(),name:r.name,previousValue:i.changes.currentValue}});continue}t.contextChanges.set(r.contextType,{kind:"partially-initialized",id:r.contextType.toString(),lastUpdated:Date.now(),name:r.name,value:r.value})}},R4=e=>{const t={contextChanges:new Map,propsChanges:new Map,stateChanges:new Map};return e.forEach(r=>{z4(r.contextChanges,t),Ub(r.stateChanges,t.stateChanges),Ub(r.propsChanges,t.propsChanges)}),t},Lb=(e,t)=>{const r=new Map;return e.forEach((i,s)=>{r.set(s,i)}),t.forEach((i,s)=>{const l=r.get(s);if(!l){r.set(s,i);return}r.set(s,{count:l.count+i.count,currentValue:i.currentValue,id:i.id,lastUpdated:i.lastUpdated,name:i.name,previousValue:i.previousValue})}),r},D4=(e,t)=>{const r=new Map;return e.contextChanges.forEach((i,s)=>{r.set(s,i)}),t.contextChanges.forEach((i,s)=>{const l=r.get(s);if(!l){r.set(s,i);return}if(Mp(i)!==Mp(l))switch(l.kind){case"initialized":switch(i.kind){case"initialized":{r.set(s,{kind:"initialized",changes:{...i.changes,count:i.changes.count+l.changes.count+1,currentValue:i.changes.currentValue,previousValue:i.changes.previousValue}});return}case"partially-initialized":{r.set(s,{kind:"initialized",changes:{count:l.changes.count+1,currentValue:i.value,id:i.id,lastUpdated:i.lastUpdated,name:i.name,previousValue:l.changes.currentValue}});return}}case"partially-initialized":switch(i.kind){case"initialized":{r.set(s,{kind:"initialized",changes:{count:i.changes.count+1,currentValue:i.changes.currentValue,id:i.changes.id,lastUpdated:i.changes.lastUpdated,name:i.changes.name,previousValue:l.value}});return}case"partially-initialized":{r.set(s,{kind:"initialized",changes:{count:1,currentValue:i.value,id:i.id,lastUpdated:i.lastUpdated,name:i.name,previousValue:l.value}});return}}}}),r},j4=(e,t)=>{const r=D4(e,t),i=Lb(e.propsChanges,t.propsChanges),s=Lb(e.stateChanges,t.stateChanges);return{contextChanges:r,propsChanges:i,stateChanges:s}},Np=e=>Array.from(e.propsChanges.values()).reduce((t,r)=>t+r.count,0)+Array.from(e.stateChanges.values()).reduce((t,r)=>t+r.count,0)+Array.from(e.contextChanges.values()).filter(t=>t.kind==="initialized").reduce((t,r)=>t+r.changes.count,0),U4=e=>{const t=he({queue:[]}),[r,i]=Ne({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),s=oe.inspectState.value.kind==="focused"?oe.inspectState.value.fiber:null,l=s?ba(s):null;return Ce(()=>{const u=setInterval(()=>{t.current.queue.length!==0&&(i(d=>{const h=R4(t.current.queue),p=j4(d,h);return Np(d),Np(p),p}),t.current.queue=[])},A4);return()=>{clearInterval(u)}},[s]),Ce(()=>{if(!l)return;const u=h=>{var p;(p=t.current)==null||p.queue.push(h)};let d=oe.changesListeners.get(l);return d||(d=[],oe.changesListeners.set(l,d)),d.push(u),()=>{var h;i({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),t.current.queue=[],oe.changesListeners.set(l,((h=oe.changesListeners.get(l))==null?void 0:h.filter(p=>p!==u))??[])}},[l]),Ce(()=>()=>{i({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),t.current.queue=[]},[l]),r},_u=e=>{var t;if(e==null)return{value:e};if(typeof e=="function")return{value:e};if(typeof e!="object")return{value:e};if(co(e))return{value:"Promise"};try{const r=Object.getPrototypeOf(e);return r===Promise.prototype||((t=r==null?void 0:r.constructor)==null?void 0:t.name)==="Promise"?{value:"Promise"}:{value:e}}catch{return{value:null,error:"Error accessing value"}}},L4=Bu(()=>{const[e,t]=Ne(!0),r=U4(),[i,s]=Ne(!1),l=Np(r)>0;Ce(()=>{if(!i&&l){const h=setTimeout(()=>{s(!0),requestAnimationFrame(()=>{t(!0)})},0);return()=>clearTimeout(h)}},[i,l]);const u=new Map(Array.from(r.contextChanges.entries()).filter(([,h])=>h.kind==="initialized").map(([h,p])=>[h,p.kind==="partially-initialized"?null:p.changes])),d=oe.inspectState.value.kind==="focused"?oe.inspectState.value.fiber:null;if(d)return v(De,{children:[v(H4,{}),v("div",{className:"overflow-hidden h-full flex flex-col gap-y-2",children:[v("div",{className:"flex flex-col gap-2 px-3 pt-2",children:[v("span",{className:"text-sm font-medium text-[#888]",children:["Why did"," ",v("span",{className:"text-[#A855F7]",children:Nt(d)})," ","render?"]}),!l&&v("div",{className:"text-sm text-[#737373] bg-[#1E1E1E] rounded-md p-4 flex flex-col gap-4",children:[v("div",{children:"No changes detected since selecting"}),v("div",{children:"The props, state, and context changes within your component will be reported here"})]})]}),v("div",{className:L("flex flex-col gap-y-2 pl-3 relative overflow-y-auto h-full"),children:[v(Ch,{changes:r.propsChanges,title:"Changed Props",isExpanded:e}),v(Ch,{renderName:h=>$4(h,Nt(ai(d))??"Unknown Component"),changes:r.stateChanges,title:"Changed State",isExpanded:e}),v(Ch,{changes:u,title:"Changed Context",isExpanded:e})]})]})]})}),$4=(e,t)=>{if(Number.isNaN(Number(e)))return e;const r=Number.parseInt(e);return v("span",{className:"truncate",children:[v("span",{className:"text-white",children:[r,(s=>{const l=s%10,u=s%100;if(u>=11&&u<=13)return"th";switch(l){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}})(r)," hook"," "]}),v("span",{style:{color:"#666"},children:["called in ",v("i",{className:"text-[#A855F7] truncate",children:t})]})]})},H4=Bu(()=>{const e=he(null),t=he(null),r=he(null),i=he({isPropsChanged:!1,isStateChanged:!1,isContextChanged:!1});return Ce(()=>{const s=ex(()=>{var d,h,p;const u=[];((d=e.current)==null?void 0:d.dataset.flash)==="true"&&u.push(e.current),((h=t.current)==null?void 0:h.dataset.flash)==="true"&&u.push(t.current),((p=r.current)==null?void 0:p.dataset.flash)==="true"&&u.push(r.current);for(const y of u)y.classList.remove("count-flash-white"),y.offsetWidth,y.classList.add("count-flash-white")},400);return Bt.subscribe(u=>{var y,g,w,b,S,T;if(!e.current||!t.current||!r.current)return;const{currentIndex:d,updates:h}=u,p=h[d];!p||d===0||(s(),i.current={isPropsChanged:(((g=(y=p.props)==null?void 0:y.changes)==null?void 0:g.size)??0)>0,isStateChanged:(((b=(w=p.state)==null?void 0:w.changes)==null?void 0:b.size)??0)>0,isContextChanged:(((T=(S=p.context)==null?void 0:S.changes)==null?void 0:T.size)??0)>0},e.current.dataset.flash!=="true"&&(e.current.dataset.flash=i.current.isPropsChanged.toString()),t.current.dataset.flash!=="true"&&(t.current.dataset.flash=i.current.isStateChanged.toString()),r.current.dataset.flash!=="true"&&(r.current.dataset.flash=i.current.isContextChanged.toString()))})},[]),v("button",{type:"button",className:L("react-section-header","overflow-hidden","max-h-0","transition-[max-height]"),children:v("div",{className:L("flex-1 react-scan-expandable"),children:v("div",{className:"overflow-hidden",children:v("div",{className:"flex items-center whitespace-nowrap",children:[v("div",{className:"flex items-center gap-x-2",children:"What changed?"}),v("div",{className:L("ml-auto","change-scope","transition-opacity duration-300 delay-150"),children:[v("div",{ref:e,children:"props"}),v("div",{ref:t,children:"state"}),v("div",{ref:r,children:"context"})]})]})})})})}),q4=e=>e,Ch=Bu(({title:e,changes:t,renderName:r=q4})=>{const[i,s]=Ne(new Set),[l,u]=Ne(new Set),d=Array.from(t.entries());return t.size===0?null:v("div",{children:[v("div",{className:"text-xs text-[#888] mb-1.5",children:e}),v("div",{className:"flex flex-col gap-2",children:d.map(([h,p])=>{const y=l.has(String(h)),{value:g,error:w}=_u(p.previousValue),{value:b,error:S}=_u(p.currentValue),T=cx(g,b);return v("div",{children:[v("button",{onClick:()=>{u(M=>{const _=new Set(M);return _.has(String(h))?_.delete(String(h)):_.add(String(h)),_})},className:"flex items-center gap-2 w-full bg-transparent border-none p-0 cursor-pointer text-white text-xs",children:v("div",{className:"flex items-center gap-1.5 flex-1",children:[v(ot,{name:"icon-chevron-right",size:12,className:L("text-[#666] transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",{"rotate-90":y})}),v("div",{className:"whitespace-pre-wrap break-words text-left font-medium flex items-center gap-x-1.5",children:[r(p.name),v(X4,{count:p.count,isFunction:typeof p.currentValue=="function",showWarning:T.changes.length===0,forceFlash:!0})]})]})}),v("div",{className:L("react-scan-expandable",{"react-scan-expanded":y}),children:v("div",{className:"pl-3 text-xs font-mono border-l-1 border-[#333]",children:v("div",{className:"flex flex-col gap-0.5",children:w||S?v(I4,{currError:S,prevError:w}):T.changes.length>0?v(Y4,{change:p,diff:T,expandedFns:i,renderName:r,setExpandedFns:s,title:e}):v(B4,{currValue:b,entryKey:h,expandedFns:i,prevValue:g,setExpandedFns:s})})})})]},h)})})]})}),I4=({prevError:e,currError:t})=>v(De,{children:[e&&v("div",{className:"text-[#f87171] bg-[#2a1515] pr-1.5 py-[3px] rounded italic",children:e}),t&&v("div",{className:"text-[#4ade80] bg-[#1a2a1a] pr-1.5 py-[3px] rounded italic mt-0.5",children:t})]}),Y4=({diff:e,title:t,renderName:r,change:i,expandedFns:s,setExpandedFns:l})=>e.changes.map((u,d)=>{const{value:h,error:p}=_u(u.prevValue),{value:y,error:g}=_u(u.currentValue),w=typeof h=="function"||typeof y=="function";let b;return t==="Props"&&(b=u.path.length>0?`${r(String(i.name))}.${qn(u.path)}`:void 0),t==="State"&&u.path.length>0&&(b=`state.${qn(u.path)}`),b||(b=qn(u.path)),v("div",{className:L("flex flex-col gap-y-1",d<e.changes.length-1&&"mb-4"),children:[b&&v("div",{className:"text-[#666] text-[10px]",children:b}),v("button",{type:"button",className:L("group","flex items-start","py-[3px] px-1.5","text-left text-[#f87171] bg-[#2a1515]","rounded","overflow-hidden break-all",w&&"cursor-pointer"),onClick:w?()=>{const S=`${qn(u.path)}-prev`;l(T=>{const M=new Set(T);return M.has(S)?M.delete(S):M.add(S),M})}:void 0,children:[v("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),v("span",{className:"flex-1 whitespace-nowrap font-mono",children:p?v("span",{className:"italic text-[#f87171]",children:p}):w?v("div",{className:"flex gap-1 items-start flex-col",children:[v("div",{className:"flex gap-1 items-start w-full",children:[v("span",{className:"flex-1 max-h-40",children:Ap(h,s.has(`${qn(u.path)}-prev`))}),typeof h=="function"&&v(wu,{text:h.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:S})=>v(De,{children:S})})]}),(h==null?void 0:h.toString())===(y==null?void 0:y.toString())&&v("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):v(xu,{value:h,expanded:s.has(`${qn(u.path)}-prev`),onToggle:()=>{const S=`${qn(u.path)}-prev`;l(T=>{const M=new Set(T);return M.has(S)?M.delete(S):M.add(S),M})},isNegative:!0})})]}),v("button",{type:"button",className:L("group","flex items-start","py-[3px] px-1.5","text-left text-[#4ade80] bg-[#1a2a1a]","rounded","overflow-hidden break-all",w&&"cursor-pointer"),onClick:w?()=>{const S=`${qn(u.path)}-current`;l(T=>{const M=new Set(T);return M.has(S)?M.delete(S):M.add(S),M})}:void 0,children:[v("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),v("span",{className:"flex-1 whitespace-pre-wrap font-mono",children:g?v("span",{className:"italic text-[#4ade80]",children:g}):w?v("div",{className:"flex gap-1 items-start flex-col",children:[v("div",{className:"flex gap-1 items-start w-full",children:[v("span",{className:"flex-1",children:Ap(y,s.has(`${qn(u.path)}-current`))}),typeof y=="function"&&v(wu,{text:y.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:S})=>v(De,{children:S})})]}),(h==null?void 0:h.toString())===(y==null?void 0:y.toString())&&v("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):v(xu,{value:y,expanded:s.has(`${qn(u.path)}-current`),onToggle:()=>{const S=`${qn(u.path)}-current`;l(T=>{const M=new Set(T);return M.has(S)?M.delete(S):M.add(S),M})},isNegative:!1})})]})]},`${b}-${i.name}-${d}`)}),B4=({prevValue:e,currValue:t,entryKey:r,expandedFns:i,setExpandedFns:s})=>v(De,{children:[v("div",{className:"group flex gap-0.5 items-start text-[#f87171] bg-[#2a1515] py-[3px] px-1.5 rounded",children:[v("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),v("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:v(xu,{value:e,expanded:i.has(`${String(r)}-prev`),onToggle:()=>{const l=`${String(r)}-prev`;s(u=>{const d=new Set(u);return d.has(l)?d.delete(l):d.add(l),d})},isNegative:!0})})]}),v("div",{className:"group flex gap-0.5 items-start text-[#4ade80] bg-[#1a2a1a] py-[3px] px-1.5 rounded mt-0.5",children:[v("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),v("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:v(xu,{value:t,expanded:i.has(`${String(r)}-current`),onToggle:()=>{const l=`${String(r)}-current`;s(u=>{const d=new Set(u);return d.has(l)?d.delete(l):d.add(l),d})},isNegative:!1})})]}),typeof t=="object"&&t!==null&&v("div",{className:"text-[#666] text-[10px] italic mt-1 flex items-center gap-x-1",children:[v(ot,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),v("span",{children:"Reference changed but objects are structurally the same"})]})]}),X4=({count:e,forceFlash:t,isFunction:r,showWarning:i})=>{const s=he(!0),l=he(null),u=he(e);return Ce(()=>{const d=l.current;!d||u.current===e||(d.classList.remove("count-flash"),d.offsetWidth,d.classList.add("count-flash"),u.current=e)},[e]),Ce(()=>{if(s.current){s.current=!1;return}if(t){let d=setTimeout(()=>{var h;(h=l.current)==null||h.classList.add("count-flash-white"),d=setTimeout(()=>{var p;(p=l.current)==null||p.classList.remove("count-flash-white")},300)},500);return()=>{clearTimeout(d)}}},[t]),v("div",{ref:l,className:"count-badge",children:[i&&v(ot,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),r&&v(ot,{name:"icon-function",className:"text-[#A855F7] mb-px",size:14}),"x",e]})},ma={lastRendered:new Map,expandedPaths:new Set,cleanup:()=>{ma.lastRendered.clear(),ma.expandedPaths.clear(),x4.cleanupAll(),n3(),nx.reset()}},ox=class extends jn{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null}),ma.cleanup()}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){var e;return this.state.hasError?v("div",{className:"p-4 bg-red-950/50 h-screen backdrop-blur-sm",children:[v("div",{className:"flex items-center gap-2 mb-3 text-red-400 font-medium",children:[v(ot,{name:"icon-flame",className:"text-red-500",size:16}),"Something went wrong in the inspector"]}),v("div",{className:"p-3 bg-black/40 rounded font-mono text-xs text-red-300 mb-4 break-words",children:((e=this.state.error)==null?void 0:e.message)||JSON.stringify(this.state.error)}),v("button",{type:"button",onClick:this.handleReset,className:"px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2",children:"Reset Inspector"})]}):this.props.children}},F4=oi(()=>L("react-scan-inspector","flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",!Xu.value&&"opacity-100 delay-300 pointer-events-auto")),P4=zm(()=>{const e=he(null),t=r=>{if(!r)return;e.current=r;const{data:i,shouldUpdate:s}=a3(r);if(s){const l={timestamp:Date.now(),fiberInfo:J4(r),props:i.fiberProps,state:i.fiberState,context:i.fiberContext,stateNames:t3(r)};nx.addUpdate(l,r)}};return tl(()=>{const r=oe.inspectState.value;el(()=>{var l;if(r.kind!=="focused"||!r.focusedDomElement){e.current=null,ma.cleanup();return}r.kind==="focused"&&(Xu.value=!1);const{parentCompositeFiber:i}=Hb(r.focusedDomElement,r.fiber);if(!i){oe.inspectState.value={kind:"inspect-off"},Ze.value={view:"none"};return}((l=e.current)==null?void 0:l.type)!==i.type&&(e.current=i,ma.cleanup(),t(i))})}),tl(()=>{Rm.value,el(()=>{const r=oe.inspectState.value;if(r.kind!=="focused"||!r.focusedDomElement){e.current=null,ma.cleanup();return}const{parentCompositeFiber:i}=Hb(r.focusedDomElement,r.fiber);if(!i){oe.inspectState.value={kind:"inspect-off"},Ze.value={view:"none"};return}t(i),r.focusedDomElement.isConnected||(e.current=null,ma.cleanup(),oe.inspectState.value={kind:"inspecting",hoveredDomElement:null})})}),Ce(()=>()=>{ma.cleanup()},[]),v(ox,{children:v("div",{className:F4,children:v("div",{className:"w-full h-full",children:v(L4,{})})})})}),G4=zm(()=>oe.inspectState.value.kind!=="focused"?null:v(ox,{children:[v(P4,{}),v(N4,{})]})),sx=e=>{var t,r,i;if("__REACT_DEVTOOLS_GLOBAL_HOOK__"in window){const s=window.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!(s!=null&&s.renderers))return null;for(const[,l]of Array.from(s.renderers))try{const u=(t=l.findFiberByHostInstance)==null?void 0:t.call(l,e);if(u)return u}catch{}}if("_reactRootContainer"in e){const l=e._reactRootContainer;return((i=(r=l==null?void 0:l._internalRoot)==null?void 0:r.current)==null?void 0:i.child)??null}for(const s in e)if(s.startsWith("__reactInternalInstance$")||s.startsWith("__reactFiber"))return e[s];return null},Dm=e=>{let t=e;for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.child)break;t=t.child}for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.return)break;t=t.return}return null},jm=e=>{if(!e)return null;try{const t=sx(e);if(!t)return null;const r=lo(t);return r?r[0]:null}catch{return null}},lo=e=>{let t=e,r=null;for(;t;){if(qu(t))return[t,r];Ws(t)&&!r&&(r=t),t=t.return}return null},$b=(e,t)=>!!bm(t,i=>i===e),V4=async e=>{const t=jm(e);if(!t)return null;const r=Dm(t);if(!r)return null;const i=(await zk([r])).get(r);return i||null},Ga=e=>{const t=jm(e);if(!t)return{};if(!Dm(t))return{};const i=lo(t);if(!i)return{};const[s]=i;return{parentCompositeFiber:s}},Hb=(e,t)=>{var d,h;if(!e.isConnected)return{};let r=t??jm(e);if(!r)return{};let i=r,s=null,l=null;for(;i;){if(!i.stateNode){i=i.return;continue}if((d=Ue.instrumentation)!=null&&d.fiberRoots.has(i.stateNode)){s=i,l=i.stateNode.current;break}i=i.return}if(!s||!l)return{};if(r=$b(r,l)?r:r.alternate??r,!r)return{};if(!Dm(r))return{};const u=(h=lo(r))==null?void 0:h[0];return u?{parentCompositeFiber:$b(u,l)?u:u.alternate??u}:{}},lx=e=>{var s;const t=e.memoizedProps??{},r=((s=e.alternate)==null?void 0:s.memoizedProps)??{},i=[];for(const l in t){if(l==="children")continue;const u=t[l],d=r[l];wa(u,d)||i.push({name:l,value:u,prevValue:d,type:1})}return i},Op=new Set(["HTML","HEAD","META","TITLE","BASE","SCRIPT","SCRIPT","STYLE","LINK","NOSCRIPT","SOURCE","TRACK","EMBED","OBJECT","PARAM","TEMPLATE","PORTAL","SLOT","AREA","XML","DOCTYPE","COMMENT"]),Su=(e,t=!0)=>{if(e.stateNode&&"nodeType"in e.stateNode){const i=e.stateNode;return t&&i.tagName&&Op.has(i.tagName.toLowerCase())?null:i}let r=e.child;for(;r;){const i=Su(r,t);if(i)return i;r=r.sibling}return null},Q4=(e=document.body)=>{const t=[],r=s=>{if(!s)return null;const{parentCompositeFiber:l}=Ga(s);return l&&Su(l)===s?s:null},i=(s,l=0)=>{const u=r(s);if(u){const{parentCompositeFiber:d}=Ga(u);if(!d)return;t.push({element:u,depth:l,name:Nt(d.type)??"Unknown",fiber:d})}for(const d of Array.from(s.children))i(d,u?l+1:l)};return i(e),t},qb=e=>{try{if(e===null)return"null";if(e===void 0)return"undefined";if(co(e))return"Promise";if(typeof e=="function"){const t=e.toString();try{return t.replace(/\s+/g," ").replace(/{\s+/g,`{
  `).replace(/;\s+/g,`;
  `).replace(/}\s*$/g,`
}`).replace(/\(\s+/g,"(").replace(/\s+\)/g,")").replace(/,\s+/g,", ")}catch{return t}}switch(!0){case e instanceof Date:return e.toISOString();case e instanceof RegExp:return e.toString();case e instanceof Error:return`${e.name}: ${e.message}`;case e instanceof Map:return JSON.stringify(Array.from(e.entries()),null,2);case e instanceof Set:return JSON.stringify(Array.from(e),null,2);case e instanceof DataView:return JSON.stringify(Array.from(new Uint8Array(e.buffer)),null,2);case e instanceof ArrayBuffer:return JSON.stringify(Array.from(new Uint8Array(e)),null,2);case(ArrayBuffer.isView(e)&&"length"in e):return JSON.stringify(Array.from(e),null,2);case Array.isArray(e):return JSON.stringify(e,null,2);case typeof e=="object":return JSON.stringify(e,null,2);default:return String(e)}}catch{return String(e)}},W4=(e,t)=>{try{return typeof e!="function"||typeof t!="function"?!1:e.toString()===t.toString()}catch{return!1}},cx=(e,t,r=[],i=new WeakSet)=>{if(e===t)return{type:"primitive",changes:[],hasDeepChanges:!1};if(typeof e=="function"&&typeof t=="function"){const p=W4(e,t);return{type:"primitive",changes:[{path:r,prevValue:e,currentValue:t,sameFunction:p}],hasDeepChanges:!p}}if(e===null||t===null||e===void 0||t===void 0||typeof e!="object"||typeof t!="object")return{type:"primitive",changes:[{path:r,prevValue:e,currentValue:t}],hasDeepChanges:!0};if(i.has(e)||i.has(t))return{type:"object",changes:[{path:r,prevValue:"[Circular]",currentValue:"[Circular]"}],hasDeepChanges:!1};i.add(e),i.add(t);const s=e,l=t,u=new Set([...Object.keys(s),...Object.keys(l)]),d=[];let h=!1;for(const p of u){const y=s[p],g=l[p];if(y!==g)if(typeof y=="object"&&typeof g=="object"&&y!==null&&g!==null){const w=cx(y,g,[...r,p],i);d.push(...w.changes),w.hasDeepChanges&&(h=!0)}else d.push({path:[...r,p],prevValue:y,currentValue:g}),h=!0}return{type:"object",changes:d,hasDeepChanges:h}},qn=e=>e.length===0?"":e.reduce((t,r,i)=>/^\d+$/.test(r)?`${t}[${r}]`:i===0?r:`${t}.${r}`,"");function Z4(e){const t=e.replace(/\s+/g," ").trim(),r=[];let i="";for(let _=0;_<t.length;_++){const C=t[_];if(C==="="&&t[_+1]===">"){i.trim()&&r.push(i.trim()),r.push("=>"),i="",_++;continue}/[(){}[\];,<>:\?!]/.test(C)?(i.trim()&&r.push(i.trim()),r.push(C),i=""):/\s/.test(C)?(i.trim()&&r.push(i.trim()),i=""):i+=C}i.trim()&&r.push(i.trim());const s=[];for(let _=0;_<r.length;_++){const C=r[_],A=r[_+1];C==="("&&A===")"||C==="["&&A==="]"||C==="{"&&A==="}"||C==="<"&&A===">"?(s.push(C+A),_++):s.push(C)}const l=new Set,u=new Set;function d(_,C,A){let U=0;for(let D=A;D<s.length;D++){const P=s[D];if(P===_)U++;else if(P===C&&(U--,U===0))return D}return-1}for(let _=0;_<s.length;_++)if(s[_]==="("){const A=d("(",")",_);if(A!==-1&&s[A+1]==="=>")for(let U=_;U<=A;U++)l.add(U)}for(let _=1;_<s.length;_++){const C=s[_-1],A=s[_];if(/^[a-zA-Z0-9_$]+$/.test(C)&&A==="<"){const U=d("<",">",_);if(U!==-1)for(let D=_;D<=U;D++)u.add(D)}}let h=0;const p="  ",y=[];let g="";function w(){g.trim()&&y.push(g.replace(/\s+$/,"")),g=""}function b(){w(),g=p.repeat(h)}const S=[];function T(){return S.length?S[S.length-1]:null}function M(_,C=!1){g.trim()?C||/^[),;:\].}>]$/.test(_)?g+=_:g+=` ${_}`:g+=_}for(let _=0;_<s.length;_++){const C=s[_],A=s[_+1]||"";if(["(","{","[","<"].includes(C)){if(M(C),S.push(C),C==="{")h++,b();else if((C==="("||C==="["||C==="<")&&!(l.has(_)&&C==="("||u.has(_)&&C==="<")){const U={"(":")","[":"]","<":">"}[C];A!==U&&A!=="()"&&A!=="[]"&&A!=="<>"&&(h++,b())}}else if([")","}","]",">"].includes(C)){const U=T();C===")"&&U==="("||C==="]"&&U==="["||C===">"&&U==="<"?!(l.has(_)&&C===")")&&!(u.has(_)&&C===">")&&(h=Math.max(h-1,0),b()):C==="}"&&U==="{"&&(h=Math.max(h-1,0),b()),S.pop(),M(C),C==="}"&&b()}else if(/^\(\)|\[\]|\{\}|\<\>$/.test(C))M(C);else if(C==="=>")M(C);else if(C===";")M(C,!0),b();else if(C===","){M(C,!0);const U=T();!(l.has(_)&&U==="(")&&!(u.has(_)&&U==="<")&&U&&["{","[","(","<"].includes(U)&&b()}else M(C)}return w(),y.join(`
`).replace(/\n\s*\n+/g,`
`).trim()}var Ap=(e,t=!1)=>{try{const r=e.toString(),i=r.match(/(?:function\s*)?(?:\(([^)]*)\)|([^=>\s]+))\s*=>?/);if(!i)return"ƒ";const l=(i[1]||i[2]||"").replace(/\s+/g,"");return t?Z4(r):`ƒ (${l}) => ...`}catch{return"ƒ"}},Tu=e=>{if(e===null)return"null";if(e===void 0)return"undefined";if(typeof e=="string")return`"${e.length>150?`${e.slice(0,20)}...`:e}"`;if(typeof e=="number"||typeof e=="boolean")return String(e);if(typeof e=="function")return Ap(e);if(Array.isArray(e))return`Array(${e.length})`;if(e instanceof Map)return`Map(${e.size})`;if(e instanceof Set)return`Set(${e.size})`;if(e instanceof Date)return e.toISOString();if(e instanceof RegExp)return e.toString();if(e instanceof Error)return`${e.name}: ${e.message}`;if(typeof e=="object"){const t=Object.keys(e);return`{${t.length>2?`${t.slice(0,2).join(", ")}, ...`:t.join(", ")}}`}return String(e)},K4=e=>{var t;if(e==null)return{value:e};if(typeof e=="function")return{value:e};if(typeof e!="object")return{value:e};if(e instanceof Promise)return{value:"Promise"};try{const r=Object.getPrototypeOf(e);return r===Promise.prototype||((t=r==null?void 0:r.constructor)==null?void 0:t.name)==="Promise"?{value:"Promise"}:{value:e}}catch{return{value:null,error:"Error accessing value"}}},co=e=>!!e&&(e instanceof Promise||typeof e=="object"&&"then"in e),J4=e=>{const t=Fa(e);return{displayName:Nt(e)||"Unknown",type:e.type,key:e.key,id:e.index,selfTime:(t==null?void 0:t.selfTime)??null,totalTime:(t==null?void 0:t.totalTime)??null}},Um=new Map,ux=new Map,Lm=new Map,zp=null,e3=/\[(?<name>\w+),\s*set\w+\]/g,t3=e=>{var r,i;const t=((i=(r=e.type)==null?void 0:r.toString)==null?void 0:i.call(r))||"";return t?Array.from(t.matchAll(e3),s=>{var l;return((l=s.groups)==null?void 0:l.name)??""}):[]},n3=()=>{Um.clear(),ux.clear(),Lm.clear(),zp=null},r3=e=>{const t=e.type!==zp;return zp=e.type,t},Mh=(e,t,r,i)=>{const s=e.get(t),l=e===Um||e===Lm,u=!wa(r,i);if(!s)return e.set(t,{count:u&&l?1:0,currentValue:r,previousValue:i,lastUpdated:Date.now()}),{hasChanged:u,count:u&&l?1:l?0:1};if(!wa(s.currentValue,r)){const d=s.count+1;return e.set(t,{count:d,currentValue:r,previousValue:s.currentValue,lastUpdated:Date.now()}),{hasChanged:!0,count:d}}return{hasChanged:!1,count:s.count}},Ib=e=>{if(!e)return{};if(e.tag===Lu||e.tag===$u||e.tag===fl||e.tag===dl){let t=e.memoizedState;const r={};let i=0;for(;t;)t.queue&&t.memoizedState!==void 0&&(r[i]=t.memoizedState),t=t.next,i++;return r}return e.tag===ri?e.memoizedState||{}:{}},$m=e=>{var d;const t=e.memoizedProps||{},r=((d=e.alternate)==null?void 0:d.memoizedProps)||{},i={},s={},l=Object.keys(t);for(const h of l)h in t&&(i[h]=t[h],s[h]=r[h]);const u=lx(e).map(h=>({name:h.name,value:h.value,prevValue:h.prevValue}));return{current:i,prev:s,changes:u}},Hm=e=>{const t=Ib(e),r=e.alternate?Ib(e.alternate):{},i=[];for(const[s,l]of Object.entries(t)){const u=e.tag===ri?s:Number(s);e.alternate&&!wa(r[s],l)&&i.push({name:u,value:l,prevValue:r[s]})}return{current:t,prev:r,changes:i}},qm=e=>{const t=Bb(e),r=e.alternate?Bb(e.alternate):new Map,i={},s={},l=[],u=new Set;for(const[d,h]of t){const p=h.displayName,y=d;if(u.has(y))continue;u.add(y),i[p]=h.value;const g=r.get(d);g&&(s[p]=g.value,wa(g.value,h.value)||l.push({name:p,value:h.value,prevValue:g.value,contextType:d}))}return{current:i,prev:s,changes:l}},a3=e=>{const t=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{data:{fiberProps:t(),fiberState:t(),fiberContext:t()},shouldUpdate:!1};let r=!1;const i=r3(e),s=t();if(e.memoizedProps){const{current:g,changes:w}=$m(e);for(const[b,S]of Object.entries(g))s.current.push({name:b,value:co(S)?{type:"promise",displayValue:"Promise"}:S});for(const b of w){const{hasChanged:S,count:T}=Mh(Um,b.name,b.value,b.prevValue);S&&(r=!0,s.changes.add(b.name),s.changesCounts.set(b.name,T))}}const l=t(),{current:u,changes:d}=Hm(e);for(const[g,w]of Object.entries(u)){const b=e.tag===ri?g:Number(g);l.current.push({name:b,value:w})}for(const g of d){const{hasChanged:w,count:b}=Mh(ux,g.name,g.value,g.prevValue);w&&(r=!0,l.changes.add(g.name),l.changesCounts.set(g.name,b))}const h=t(),{current:p,changes:y}=qm(e);for(const[g,w]of Object.entries(p))h.current.push({name:g,value:w});if(!i)for(const g of y){const{hasChanged:w,count:b}=Mh(Lm,g.name,g.value,g.prevValue);w&&(r=!0,h.changes.add(g.name),h.changesCounts.set(g.name,b))}return!r&&!i&&(s.changes.clear(),l.changes.clear(),h.changes.clear()),{data:{fiberProps:s,fiberState:l,fiberContext:h},shouldUpdate:r||i}},Yb=new WeakMap,Bb=e=>{var s;if(!e)return new Map;const t=Yb.get(e);if(t)return t;const r=new Map;let i=e;for(;i;){const l=i.dependencies;if(l!=null&&l.firstContext){let u=l.firstContext;for(;u;){const d=u.memoizedValue,h=(s=u.context)==null?void 0:s.displayName;if(r.has(d)||r.set(u.context,{value:d,displayName:h??"UnnamedContext",contextType:null}),u===u.next)break;u=u.next}}i=i.return}return Yb.set(e,r),r},Xb=e=>{const t=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{fiberProps:t(),fiberState:t(),fiberContext:t()};const r=t();if(e.memoizedProps){const{current:d,changes:h}=$m(e);for(const[p,y]of Object.entries(d))r.current.push({name:p,value:co(y)?{type:"promise",displayValue:"Promise"}:y});for(const p of h)r.changes.add(p.name),r.changesCounts.set(p.name,1)}const i=t();if(e.memoizedState){const{current:d,changes:h}=Hm(e);for(const[p,y]of Object.entries(d))i.current.push({name:p,value:co(y)?{type:"promise",displayValue:"Promise"}:y});for(const p of h)i.changes.add(p.name),i.changesCounts.set(p.name,1)}const s=t(),{current:l,changes:u}=qm(e);for(const[d,h]of Object.entries(l))s.current.push({name:d,value:co(h)?{type:"promise",displayValue:"Promise"}:h});for(const d of u)s.changes.add(d.name),s.changesCounts.set(d.name,1);return{fiberProps:r,fiberState:i,fiberContext:s}},Rp=0,Fb=performance.now(),Nh=0,Pb=!1,dx=()=>{Nh++;const e=performance.now();e-Fb>=1e3&&(Rp=Nh,Nh=0,Fb=e),requestAnimationFrame(dx)},fx=()=>(Pb||(Pb=!0,dx(),Rp=60),Rp),i3=e=>{var r,i;if(!e)return[];const t=[];if(e.tag===Lu||e.tag===$u||e.tag===fl||e.tag===dl){let s=e.memoizedState,l=(r=e.alternate)==null?void 0:r.memoizedState,u=0;for(;s;){if(s.queue&&s.memoizedState!==void 0){const d={type:2,name:u.toString(),value:s.memoizedState,prevValue:l==null?void 0:l.memoizedState};wa(d.prevValue,d.value)||t.push(d)}s=s.next,l=l==null?void 0:l.next,u++}return t}if(e.tag===ri){const s={type:3,name:"state",value:e.memoizedState,prevValue:(i=e.alternate)==null?void 0:i.memoizedState};return wa(s.prevValue,s.value)||t.push(s),t}return t},Oh=0,Gb=new WeakMap,o3=e=>{const t=Gb.get(e);return t||(Oh++,Gb.set(e,Oh),Oh)};function s3(e,t){if(!e||!t)return;const r=e.memoizedValue,i={type:4,name:e.context.displayName??"Context.Provider",value:r,contextType:o3(e.context)};this.push(i)}var l3=e=>{const t=[];return YT(e,s3.bind(t)),t},hx=new Map,Vb=!1,Ah=()=>Array.from(hx.values()),c3=16,Dp=new WeakMap;function px(e){return String(ba(e))}function mx(e){const t=px(e),r=Dp.get(ai(e));if(r)return r.get(t)}function u3(e,t){const r=ai(e.type),i=px(e);let s=Dp.get(r);s||(s=new Map,Dp.set(r,s)),s.set(i,t)}var d3=(e,t,r,i,s)=>{const l=Date.now(),u=mx(e);if((i||s)&&(!u||l-(u.lastRenderTimestamp||0)>c3)){const d=u||{selfTime:0,totalTime:0,renderCount:0,lastRenderTimestamp:l};d.renderCount=(d.renderCount||0)+1,d.selfTime=t||0,d.totalTime=r||0,d.lastRenderTimestamp=l,u3(e,{...d})}},f3=(e,t)=>{const r={isPaused:yt(!Ue.options.value.enabled),fiberRoots:new WeakSet};return hx.set(e,{key:e,config:t,instrumentation:r}),Vb||(Vb=!0,WT({name:"react-scan",onActive:t.onActive,onCommitFiberRoot(i,s){r.fiberRoots.add(s);const l=Ah();for(const u of l)u.config.onCommitStart();QT(s.current,(u,d)=>{const h=ai(u.type);if(!h)return null;const p=Ah(),y=[];for(let C=0,A=p.length;C<A;C++)p[C].config.isValidFiber(u)&&y.push(C);if(!y.length)return null;const g=[];if(p.some(C=>C.config.trackChanges)){const C=$m(u).changes,A=Hm(u).changes,U=qm(u).changes;g.push.apply(null,C.map(D=>({type:1,name:D.name,value:D.value})));for(const D of A)u.tag===ri?g.push({type:3,name:D.name.toString(),value:D.value}):g.push({type:2,name:D.name.toString(),value:D.value});g.push.apply(null,U.map(D=>({type:4,name:D.name,value:D.value,contextType:Number(D.contextType)})))}const{selfTime:w,totalTime:b}=Fa(u),S=fx(),T={phase:Rk[d],componentName:Nt(h),count:1,changes:g,time:w,forget:Zs(u),unnecessary:null,didCommit:vm(u),fps:S},M=g.length>0,_=BT(u).length>0;d==="update"&&d3(u,w,b,M,_);for(let C=0,A=y.length;C<A;C++){const U=y[C];p[U].config.onRender(u,[T])}});for(const u of l)u.config.onCommitFinish()},onPostCommitFiberRoot(){const i=Ah();for(const s of i)s.config.onPostCommitFiberRoot()}})),r},h3=e=>{const t=new Map;for(let r=0,i=e.length;r<i;r++){const s=e[r];if(!s.componentName)continue;const l=t.get(s.componentName)??[],u=Ak([{aggregatedCount:1,computedKey:null,name:s.componentName,frame:null,...s,changes:{type:s.changes.reduce((p,y)=>p|y.type,0),unstable:s.changes.some(p=>p.unstable)},phase:s.phase,computedCurrent:null}]);if(!u)continue;let d=null,h=null;if(s.changes)for(let p=0,y=s.changes.length;p<y;p++){const{name:g,prevValue:w,nextValue:b,unstable:S,type:T}=s.changes[p];T===1?(d??(d={}),h??(h={}),d[`${S?"⚠️":""}${g} (prev)`]=w,h[`${S?"⚠️":""}${g} (next)`]=b):l.push({prev:w,next:b,type:T===4?"context":"state",unstable:S??!1})}d&&h&&l.push({prev:d,next:h,type:"props",unstable:!1}),t.set(u,l)}for(const[r,i]of Array.from(t.entries())){console.group(`%c${r}`,"background: hsla(0,0%,70%,.3); border-radius:3px; padding: 0 2px;");for(const{type:s,prev:l,next:u,unstable:d}of i)console.log(`${s}:`,d?"⚠️":"",l,"!==",u);console.groupEnd()}},p3=()=>{if(window.hideIntro){window.hideIntro=void 0;return}console.log("%c[·] %cReact Scan","font-weight:bold;color:#7a68e8;font-size:20px;","font-weight:bold;font-size:14px;"),console.log("Try React Scan Monitoring to target performance issues in production: https://react-scan.com/monitoring")},Qb=7,m3="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace",g3=.1,qc=(e,t)=>Math.floor(e+(t-e)*g3),v3=4,ku=40,zh=45,Rh="115,97,230";function y3(e,t){return t[0]-e[0]}function b3(e){return[...e.entries()].sort(y3)}function Wb([e,t]){let r=`${t.slice(0,v3).join(", ")} ×${e}`;return r.length>ku&&(r=`${r.slice(0,ku)}…`),r}var Zb=e=>{const t=new Map;for(const{name:l,count:u}of e)t.set(l,(t.get(l)||0)+u);const r=new Map;for(const[l,u]of t){const d=r.get(u);d?d.push(l):r.set(u,[l])}const i=b3(r);let s=Wb(i[0]);for(let l=1,u=i.length;l<u;l++)s+=", "+Wb(i[l]);return s.length>ku?`${s.slice(0,ku)}…`:s},Kb=e=>{let t=0;for(const r of e)t+=r.width*r.height;return t},w3=(e,t)=>{for(const{id:r,name:i,count:s,x:l,y:u,width:d,height:h,didCommit:p}of t){const y={id:r,name:i,count:s,x:l,y:u,width:d,height:h,frame:0,targetX:l,targetY:u,targetWidth:d,targetHeight:h,didCommit:p},g=String(y.id),w=e.get(g);w?(w.count++,w.frame=0,w.targetX=l,w.targetY=u,w.targetWidth=d,w.targetHeight=h,w.didCommit=p):e.set(g,y)}},x3=(e,t,r)=>{for(const i of e.values()){const s=i.x-t,l=i.y-r;i.targetX=s,i.targetY=l}},_3=(e,t)=>{const r=e.getContext("2d",{alpha:!0});return r&&r.scale(t,t),r},S3=(e,t,r,i)=>{e.clearRect(0,0,t.width/r,t.height/r);const s=new Map,l=new Map;for(const h of i.values()){const{x:p,y,width:g,height:w,targetX:b,targetY:S,targetWidth:T,targetHeight:M,frame:_}=h;b!==p&&(h.x=qc(p,b)),S!==y&&(h.y=qc(y,S)),T!==g&&(h.width=qc(g,T)),M!==w&&(h.height=qc(w,M));const C=`${b??p},${S??y}`,A=`${C},${T??g},${M??w}`,U=s.get(C);U?U.push(h):s.set(C,[h]);const D=1-_/zh;h.frame++;const P=l.get(A)||{x:p,y,width:g,height:w,alpha:D};D>P.alpha&&(P.alpha=D),l.set(A,P)}for(const{x:h,y:p,width:y,height:g,alpha:w}of l.values())e.strokeStyle=`rgba(${Rh},${w})`,e.lineWidth=1,e.beginPath(),e.rect(h,p,y,g),e.stroke(),e.fillStyle=`rgba(${Rh},${w*.1})`,e.fill();e.font=`11px ${m3}`;const u=new Map;e.textRendering="optimizeSpeed";for(const h of s.values()){const p=h[0],{x:y,y:g,frame:w}=p,b=1-w/zh,S=Zb(h),{width:T}=e.measureText(S);if(u.set(`${y},${g},${T},${S}`,{text:S,width:T,height:11,alpha:b,x:y,y:g,outlines:h}),w>zh)for(const _ of h)i.delete(String(_.id))}const d=Array.from(u.entries()).sort(([h,p],[y,g])=>Kb(g.outlines)-Kb(p.outlines));for(const[h,p]of d)if(u.has(h))for(const[y,g]of u.entries()){if(h===y)continue;const{x:w,y:b,width:S,height:T}=p,{x:M,y:_,width:C,height:A}=g;w+S>M&&M+C>w&&b+T>_&&_+A>b&&(p.text=Zb(p.outlines.concat(g.outlines)),p.width=e.measureText(p.text).width,u.delete(y))}for(const h of u.values()){const{x:p,y,alpha:g,width:w,height:b,text:S}=h;let T=y-b-4;T<0&&(T=0),e.fillStyle=`rgba(${Rh},${g})`,e.fillRect(p,T,w+4,b+4),e.fillStyle=`rgba(255,255,255,${g})`,e.fillText(S,p+2,T+b)}return i.size>0},T3='"use strict";(()=>{var D="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";var M=(t,i)=>Math.floor(t+(i-t)*.1);var _="115,97,230";function F(t,i){return i[0]-t[0]}function I(t){return[...t.entries()].sort(F)}function $([t,i]){let o=`${i.slice(0,4).join(", ")} \\xD7${t}`;return o.length>40&&(o=`${o.slice(0,40)}\\u2026`),o}var S=t=>{let i=new Map;for(let{name:e,count:u}of t)i.set(e,(i.get(e)||0)+u);let o=new Map;for(let[e,u]of i){let A=o.get(u);A?A.push(e):o.set(u,[e])}let h=I(o),s=$(h[0]);for(let e=1,u=h.length;e<u;e++)s+=", "+$(h[e]);return s.length>40?`${s.slice(0,40)}\\u2026`:s},X=t=>{let i=0;for(let o of t)i+=o.width*o.height;return i};var N=(t,i)=>{let o=t.getContext("2d",{alpha:!0});return o&&o.scale(i,i),o},Y=(t,i,o,h)=>{t.clearRect(0,0,i.width/o,i.height/o);let s=new Map,e=new Map;for(let n of h.values()){let{x:r,y:c,width:a,height:g,targetX:l,targetY:d,targetWidth:f,targetHeight:p,frame:O}=n;l!==r&&(n.x=M(r,l)),d!==c&&(n.y=M(c,d)),f!==a&&(n.width=M(a,f)),p!==g&&(n.height=M(g,p));let w=`${l??r},${d??c}`,y=`${w},${f??a},${p??g}`,v=s.get(w);v?v.push(n):s.set(w,[n]);let E=1-O/45;n.frame++;let x=e.get(y)||{x:r,y:c,width:a,height:g,alpha:E};E>x.alpha&&(x.alpha=E),e.set(y,x)}for(let{x:n,y:r,width:c,height:a,alpha:g}of e.values())t.strokeStyle=`rgba(${_},${g})`,t.lineWidth=1,t.beginPath(),t.rect(n,r,c,a),t.stroke(),t.fillStyle=`rgba(${_},${g*.1})`,t.fill();t.font=`11px ${D}`;let u=new Map;t.textRendering="optimizeSpeed";for(let n of s.values()){let r=n[0],{x:c,y:a,frame:g}=r,l=1-g/45,d=S(n),{width:f}=t.measureText(d),p=11;u.set(`${c},${a},${f},${d}`,{text:d,width:f,height:p,alpha:l,x:c,y:a,outlines:n});let O=a-p-4;if(O<0&&(O=0),g>45)for(let w of n)h.delete(String(w.id))}let A=Array.from(u.entries()).sort(([n,r],[c,a])=>X(a.outlines)-X(r.outlines));for(let[n,r]of A)if(u.has(n))for(let[c,a]of u.entries()){if(n===c)continue;let{x:g,y:l,width:d,height:f}=r,{x:p,y:O,width:w,height:y}=a;g+d>p&&p+w>g&&l+f>O&&O+y>l&&(r.text=S(r.outlines.concat(a.outlines)),r.width=t.measureText(r.text).width,u.delete(c))}for(let n of u.values()){let{x:r,y:c,alpha:a,width:g,height:l,text:d}=n,f=c-l-4;f<0&&(f=0),t.fillStyle=`rgba(${_},${a})`,t.fillRect(r,f,g+4,l+4),t.fillStyle=`rgba(255,255,255,${a})`,t.fillText(d,r+2,f+l)}return h.size>0};var m=null,L=null,b=1,T=new Map,C=null,R=()=>{if(!L||!m)return;Y(L,m,b,T)?C=requestAnimationFrame(R):C=null};self.onmessage=t=>{let{type:i}=t.data;if(i==="init"&&(m=t.data.canvas,b=t.data.dpr,m&&(m.width=t.data.width,m.height=t.data.height,L=N(m,b))),!(!m||!L)){if(i==="resize"){b=t.data.dpr,m.width=t.data.width*b,m.height=t.data.height*b,L.resetTransform(),L.scale(b,b),R();return}if(i==="draw-outlines"){let{data:o,names:h}=t.data,s=new Float32Array(o);for(let e=0;e<s.length;e+=7){let u=s[e+2],A=s[e+3],n=s[e+4],r=s[e+5],c=s[e+6],a={id:s[e],name:h[e/7],count:s[e+1],x:u,y:A,width:n,height:r,frame:0,targetX:u,targetY:A,targetWidth:n,targetHeight:r,didCommit:c},g=String(a.id),l=T.get(g);l?(l.count++,l.frame=0,l.targetX=u,l.targetY=A,l.targetWidth=n,l.targetHeight=r,l.didCommit=c):T.set(g,a)}C||(C=requestAnimationFrame(R));return}if(i==="scroll"){let{deltaX:o,deltaY:h}=t.data;for(let s of T.values()){let e=s.x-o,u=s.y-h;s.targetX=e,s.targetY=u}}}};})();\n',On=null,Eu=null,Va=null,Nn=1,Cu=null,Im=new Map,Fs=new Map,ao=new Set,k3=e=>{if(!qu(e))return;const t=typeof e.type=="string"?e.type:Nt(e);if(!t)return;const r=Fs.get(e),i=XT(e),s=vm(e);r?r.count++:(Fs.set(e,{name:t,count:1,elements:i.map(l=>l.stateNode),didCommit:s?1:0}),ao.add(e))},E3=e=>{const t=e[0];if(e.length===1)return t;let r,i,s,l;for(let u=0,d=e.length;u<d;u++){const h=e[u];r=r==null?h.x:Math.min(r,h.x),i=i==null?h.y:Math.min(i,h.y),s=s==null?h.x+h.width:Math.max(s,h.x+h.width),l=l==null?h.y+h.height:Math.max(l,h.y+h.height)}return r==null||i==null||s==null||l==null?e[0]:new DOMRect(r,i,s-r,l-i)};function C3(e,t){const r=[];for(const i of e){const s=i.target;this.seenElements.has(s)||(this.seenElements.add(s),r.push(i))}r.length>0&&this.resolveNext&&(this.resolveNext(r),this.resolveNext=null),this.seenElements.size===this.uniqueElements.size&&(t.disconnect(),this.done=!0,this.resolveNext&&this.resolveNext([]))}var gx=async function*(e){const t={uniqueElements:new Set(e),seenElements:new Set,resolveNext:null,done:!1},r=new IntersectionObserver(C3.bind(t));for(const i of t.uniqueElements)r.observe(i);for(;!t.done;){const i=await new Promise(s=>{t.resolveNext=s});i.length>0&&(yield i)}},M3=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:ArrayBuffer,N3=async()=>{const e=[];for(const r of ao){const i=Fs.get(r);if(i)for(let s=0;s<i.elements.length;s++)i.elements[s]instanceof Element&&e.push(i.elements[s])}const t=new Map;for await(const r of gx(e)){for(const u of r){const d=u.target,h=u.intersectionRect;u.isIntersecting&&h.width&&h.height&&t.set(d,h)}const i=[],s=[],l=[];for(const u of ao){const d=Fs.get(u);if(!d)continue;const h=[];for(let p=0;p<d.elements.length;p++){const y=d.elements[p],g=t.get(y);g&&h.push(g)}h.length&&(i.push(d),s.push(E3(h)),l.push(ba(u)))}if(i.length>0){const u=new M3(i.length*Qb*4),d=new Float32Array(u),h=new Array(i.length);let p;for(let y=0,g=i.length;y<g;y++){const w=i[y],b=l[y],{x:S,y:T,width:M,height:_}=s[y],{count:C,name:A,didCommit:U}=w;if(On){const D=y*Qb;d[D]=b,d[D+1]=C,d[D+2]=S,d[D+3]=T,d[D+4]=M,d[D+5]=_,d[D+6]=U,h[y]=A}else p||(p=new Array(i.length)),p[y]={id:b,name:A,count:C,x:S,y:T,width:M,height:_,didCommit:U}}On?On.postMessage({type:"draw-outlines",data:u,names:h}):Eu&&Va&&p&&(w3(Im,p),Cu||(Cu=requestAnimationFrame(Ym)))}}for(const r of ao)Fs.delete(r),ao.delete(r)},Ym=()=>{if(!Va||!Eu)return;S3(Va,Eu,Nn,Im)?Cu=requestAnimationFrame(Ym):Cu=null},O3=typeof OffscreenCanvas<"u"&&typeof Worker<"u",Jb=()=>Math.min(window.devicePixelRatio||1,2),A3=()=>{z3();const e=document.createElement("div");e.setAttribute("data-react-scan","true");const t=e.attachShadow({mode:"open"}),r=document.createElement("canvas");if(r.style.position="fixed",r.style.top="0",r.style.left="0",r.style.pointerEvents="none",r.style.zIndex="2147483646",r.setAttribute("aria-hidden","true"),t.appendChild(r),!r)return null;Nn=Jb(),Eu=r;const{innerWidth:i,innerHeight:s}=window;r.style.width=`${i}px`,r.style.height=`${s}px`;const l=i*Nn,u=s*Nn;if(r.width=l,r.height=u,O3&&!window.__REACT_SCAN_EXTENSION__)try{On=new Worker(URL.createObjectURL(new Blob([T3],{type:"application/javascript"})));const g=r.transferControlToOffscreen();On==null||On.postMessage({type:"init",canvas:g,width:r.width,height:r.height,dpr:Nn},[g])}catch(g){console.warn("Failed to initialize OffscreenCanvas worker:",g)}On||(Va=_3(r,Nn));let d=!1;window.addEventListener("resize",()=>{d||(d=!0,setTimeout(()=>{const g=window.innerWidth,w=window.innerHeight;Nn=Jb(),r.style.width=`${g}px`,r.style.height=`${w}px`,On?On.postMessage({type:"resize",width:g,height:w,dpr:Nn}):(r.width=g*Nn,r.height=w*Nn,Va&&(Va.resetTransform(),Va.scale(Nn,Nn)),Ym()),d=!1}))});let h=window.scrollX,p=window.scrollY,y=!1;return window.addEventListener("scroll",()=>{y||(y=!0,setTimeout(()=>{const{scrollX:g,scrollY:w}=window,b=g-h,S=w-p;h=g,p=w,On?On.postMessage({type:"scroll",deltaX:b,deltaY:S}):requestAnimationFrame(x3.bind(null,Im,b,S)),y=!1},16*2))}),setInterval(()=>{ao.size&&requestAnimationFrame(N3)},16*2),t.appendChild(r),e},ew=()=>globalThis.__REACT_SCAN_STOP__,z3=()=>{const e=document.querySelector("[data-react-scan]");e&&e.remove()},R3=e=>{if(qu(e)&&Ue.options.value.showToolbar!==!1&&oe.inspectState.value.kind==="focused"){const t=e,{selfTime:r}=Fa(e),i=Nt(e.type),s=ba(t),l=oe.reportData.get(s),u=(l==null?void 0:l.count)??0,d=(l==null?void 0:l.time)??0,h=[],p=oe.changesListeners.get(ba(e));if(p!=null&&p.length){const g=lx(e).map(T=>({type:1,name:T.name,value:T.value,prevValue:T.prevValue,unstable:!1})),w=i3(e),S=l3(e).map(T=>({name:T.name,type:4,value:T.value,contextType:T.contextType}));p.forEach(T=>{T({propsChanges:g,stateChanges:w,contextChanges:S})})}const y={count:u+1,time:d+r||0,renders:[],displayName:i,type:ai(e.type)||null,changes:h};oe.reportData.set(s,y),jp=!0}},jp=!1,tw,D3=()=>{clearInterval(tw),tw=setInterval(()=>{jp&&(oe.lastReportTime.value=Date.now(),jp=!1)},50)},j3=e=>!CC.has(e.memoizedProps),U3=e=>{if(ew())return;let t,r=!1;const i=()=>{r||(t&&cancelAnimationFrame(t),t=requestAnimationFrame(()=>{r=!0;const l=A3();l&&document.documentElement.appendChild(l),e()}))},s=f3("react-scan-devtools-0.1.0",{onCommitStart:()=>{var l,u;(u=(l=Ue.options.value).onCommitStart)==null||u.call(l)},onActive:()=>{ew()||(i(),window.__REACT_SCAN_EXTENSION__||(globalThis.__REACT_SCAN__={ReactScanInternals:Ue}),D3(),p3())},onError:()=>{},isValidFiber:j3,onRender:(l,u)=>{var y,g,w,b;qu(l)&&((y=oe.interactionListeningForRenders)==null||y.call(oe,l,u));const d=(g=Ue.instrumentation)==null?void 0:g.isPaused.value,h=oe.inspectState.value.kind==="inspect-off"||oe.inspectState.value.kind==="uninitialized";d&&h||(d||k3(l),Ue.options.value.log&&h3(u),oe.inspectState.value.kind==="focused"&&(Rm.value=Date.now()),h||R3(l),(b=(w=Ue.options.value).onRender)==null||b.call(w,l,u))},onCommitFinish:()=>{var l,u;i(),(u=(l=Ue.options.value).onCommitFinish)==null||u.call(l)},onPostCommitFiberRoot(){i()},trackChanges:!1});Ue.instrumentation=s},L3=`*, ::before, ::after {
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
`,$3=(e,t,r=t)=>{const[i,s]=Ne(e);return Ce(()=>{if(e===i)return;const u=setTimeout(()=>s(e),e?t:r);return()=>clearTimeout(u)},[e,t,r]),i},H3=oi(()=>L("absolute inset-0 flex items-center gap-x-2","translate-y-0","transition-transform duration-300",Xu.value&&"-translate-y-[200%]")),q3=()=>{const e=he(null),t=he(null),[r,i]=Ne(null);tl(()=>{const l=oe.inspectState.value;l.kind==="focused"&&i(l.fiber)}),tl(()=>{const l=Bt.value;el(()=>{var S,T;if(oe.inspectState.value.kind!=="focused"||!e.current||!t.current)return;const{totalUpdates:u,currentIndex:d,updates:h,isVisible:p,windowOffset:y}=l,g=Math.max(0,u-1),w=p?`#${y+d} Re-render`:g>0?`×${g}`:"";let b;if(g>0&&d>=0&&d<h.length){const M=(T=(S=h[d])==null?void 0:S.fiberInfo)==null?void 0:T.selfTime;b=M>0?M<.1-Number.EPSILON?"< 0.1ms":`${Number(M.toFixed(1))}ms`:void 0}e.current.dataset.text=w?` • ${w}`:"",t.current.dataset.text=b?` • ${b}`:""})});const s=Wn(()=>{if(!r)return null;const{name:l,wrappers:u,wrapperTypes:d}=nl(r),h=u.length?`${u.join("(")}(${l})${")".repeat(u.length)}`:l??"",p=d[0];return v("span",{title:h,className:"flex items-center gap-x-1",children:[l??"Unknown",v("span",{title:p==null?void 0:p.title,className:"flex items-center gap-x-1 text-[10px] text-purple-400",children:!!p&&v(De,{children:[v("span",{className:L("rounded py-[1px] px-1","truncate",p.compiler&&"bg-purple-800 text-neutral-400",!p.compiler&&"bg-neutral-700 text-neutral-300",p.type==="memo"&&"bg-[#5f3f9a] text-white"),children:p.type},p.type),p.compiler&&v("span",{className:"text-yellow-300",children:"✨"})]})}),d.length>1&&v("span",{className:"text-[10px] text-neutral-400",children:["×",d.length-1]})]})},[r]);return v("div",{className:H3,children:[s,v("div",{className:"flex items-center gap-x-2 mr-auto text-xs text-[#888]",children:[v("span",{ref:e,className:"with-data-text cursor-pointer !overflow-visible",title:"Click to toggle between rerenders and total renders"}),v("span",{ref:t,className:"with-data-text !overflow-visible"})]})]})},I3=()=>{const e=$3(oe.inspectState.value.kind==="focused",150,0),t=()=>{Ze.value={view:"none"},oe.inspectState.value={kind:"inspect-off"}};if(Ze.value.view!=="notifications")return v("div",{className:"react-scan-header",children:[v("div",{className:"relative flex-1 h-full",children:v("div",{className:L("react-scan-header-item is-visible",!e&&"!duration-0"),children:v(q3,{})})}),v("button",{type:"button",title:"Close",className:"react-scan-close-button",onClick:t,children:v(ot,{name:"icon-close"})})]})},Y3=({className:e,...t})=>v("div",{className:L("react-scan-toggle",e),children:[v("input",{type:"checkbox",...t}),v("div",{})]}),B3=({fps:e})=>{const t=r=>r<30?"#EF4444":r<50?"#F59E0B":"rgb(214,132,245)";return v("div",{className:L("flex items-center gap-x-1 px-2 w-full","h-6","rounded-md","font-mono leading-none","bg-[#141414]","ring-1 ring-white/[0.08]"),children:[v("div",{style:{color:t(e)},className:"text-sm font-semibold tracking-wide transition-colors ease-in-out w-full flex justify-center items-center",children:e}),v("span",{className:"text-white/30 text-[11px] font-medium tracking-wide ml-auto min-w-fit",children:"FPS"})]})},X3=()=>{const[e,t]=Ne(null);return Ce(()=>{const r=setInterval(()=>{t(fx())},200);return()=>clearInterval(r)},[]),v("div",{className:L("flex items-center justify-end gap-x-2 px-1 ml-1 w-[72px]","whitespace-nowrap text-sm text-white"),children:e===null?v(De,{children:"️"}):v(B3,{fps:e})})},Yn=()=>cr?(window.reactScanIdCounter===void 0&&(window.reactScanIdCounter=0),`${++window.reactScanIdCounter}`):"0",Gn=e=>e(),_t=class vx extends Array{constructor(t=25){super(),this.capacity=t}push(...t){const r=super.push(...t);for(;this.length>this.capacity;)this.shift();return r}static fromArray(t,r){const i=new vx(r);return i.push(...t),i}},F3=class{constructor(e){this.subscribers=new Set,this.currentValue=e}subscribe(e){return this.subscribers.add(e),e(this.currentValue),()=>{this.subscribers.delete(e)}}setState(e){this.currentValue=e,this.subscribers.forEach(t=>t(e))}getCurrentState(){return this.currentValue}},yx=150,nw=new F3(new _t(yx)),or=50,P3=class{constructor(){this.channels={}}publish(e,t,r=!0){const i=this.channels[t];if(!i){if(!r)return;this.channels[t]={callbacks:new _t(or),state:new _t(or)},this.channels[t].state.push(e);return}i.state.push(e),i.callbacks.forEach(s=>s(e))}getAvailableChannels(){return _t.fromArray(Object.keys(this.channels),or)}subscribe(e,t,r=!1){const i=()=>(r||this.channels[e].state.forEach(l=>{t(l)}),()=>{const l=this.channels[e].callbacks.filter(u=>u!==t);this.channels[e].callbacks=_t.fromArray(l,or)}),s=this.channels[e];return s?(s.callbacks.push(t),i()):(this.channels[e]={callbacks:new _t(or),state:new _t(or)},this.channels[e].callbacks.push(t),i())}updateChannelState(e,t,r=!0){const i=this.channels[e];if(!i){if(!r)return;const s=new _t(or),l={callbacks:new _t(or),state:s};this.channels[e]=l,l.state=t(s);return}i.state=t(i.state)}getChannelState(e){return this.channels[e].state??new _t(or)}},Mu=new P3,bx={skipProviders:!0,skipHocs:!0,skipContainers:!0,skipMinified:!0,skipUtilities:!0,skipBoundaries:!0},Cs={providers:[/Provider$/,/^Provider$/,/^Context$/],hocs:[/^with[A-Z]/,/^forward(?:Ref)?$/i,/^Forward(?:Ref)?\(/],containers:[/^(?:App)?Container$/,/^Root$/,/^ReactDev/],utilities:[/^Fragment$/,/^Suspense$/,/^ErrorBoundary$/,/^Portal$/,/^Consumer$/,/^Layout$/,/^Router/,/^Hydration/],boundaries:[/^Boundary$/,/Boundary$/,/^Provider$/,/Provider$/]},G3=(e,t=bx)=>{const r=[];return t.skipProviders&&r.push(...Cs.providers),t.skipHocs&&r.push(...Cs.hocs),t.skipContainers&&r.push(...Cs.containers),t.skipUtilities&&r.push(...Cs.utilities),t.skipBoundaries&&r.push(...Cs.boundaries),!r.some(i=>i.test(e))},rw=[/^[a-z]$/,/^[a-z][0-9]$/,/^_+$/,/^[A-Za-z][_$]$/,/^[a-z]{1,2}$/],V3=e=>{var l;for(let u=0;u<rw.length;u++)if(rw[u].test(e))return!0;const t=!/[aeiou]/i.test(e),r=(((l=e.match(/\d/g))==null?void 0:l.length)??0)>e.length/2,i=/^[a-z]+$/.test(e),s=/[$_]{2,}/.test(e);return Number(t)+Number(r)+Number(i)+Number(s)>=2},Q3=(e,t=bx)=>{if(!e)return[];if(!Nt(e.type))return[];const i=new Array;let s=e;for(;s.return;){const u=W3(s.type);u&&!V3(u)&&G3(u,t)&&u.toLowerCase()!==u&&i.push(u),s=s.return}const l=new Array(i.length);for(let u=0;u<i.length;u++)l[u]=i[i.length-u-1];return l},W3=e=>{const t=Nt(e);return t?t.replace(/^(?:Memo|Forward(?:Ref)?|With.*?)\((?<inner>.*?)\)$/,"$<inner>"):""},Z3=(e,t=()=>!0)=>{let r=e;for(;r;){const i=Nt(r.type);if(i&&t(i))return i;r=r.return}return null},Ic,Up="never-hidden",K3=()=>{Ic==null||Ic();const e=()=>{document.hidden&&(Up=Date.now())};document.addEventListener("visibilitychange",e),Ic=()=>{document.removeEventListener("visibilitychange",e)}},J3=e=>["pointerup","click"].includes(e)?"pointer":(e.includes("key"),["keydown","keyup"].includes(e)?"keyboard":null),Dh=null,eE=e=>{K3();const t=new Map,r=new Map,i=l=>{if(!l.interactionId)return;if(l.interactionId&&l.target&&!r.has(l.interactionId)&&r.set(l.interactionId,l.target),l.target){let d=l.target;for(;d;){if(d.id==="react-scan-toolbar-root"||d.id==="react-scan-root")return;d=d.parentElement}}const u=t.get(l.interactionId);if(u)l.duration>u.latency?(u.entries=[l],u.latency=l.duration):l.duration===u.latency&&l.startTime===u.entries[0].startTime&&u.entries.push(l);else{const d=J3(l.name);if(!d)return;const h={id:l.interactionId,latency:l.duration,entries:[l],target:l.target,type:d,startTime:l.startTime,endTime:Date.now(),processingStart:l.processingStart,processingEnd:l.processingEnd,duration:l.duration,inputDelay:l.processingStart-l.startTime,processingDuration:l.processingEnd-l.processingStart,presentationDelay:l.duration-(l.processingEnd-l.startTime),timestamp:Date.now(),timeSinceTabInactive:Up==="never-hidden"?"never-hidden":Date.now()-Up,visibilityState:document.visibilityState,timeOrigin:performance.timeOrigin,referrer:document.referrer};t.set(h.id,h),Dh||(Dh=requestAnimationFrame(()=>{requestAnimationFrame(()=>{e(t.get(h.id)),Dh=null})}))}},s=new PerformanceObserver(l=>{const u=l.getEntries();for(let d=0,h=u.length;d<h;d++){const p=u[d];i(p)}});try{s.observe({type:"event",buffered:!0,durationThreshold:16}),s.observe({type:"first-input",buffered:!0})}catch{}return()=>s.disconnect()},tE=()=>eE(e=>{Mu.publish({kind:"entry-received",entry:e},"recording")}),iu=25,Or=new _t(iu),nE=(e,t)=>{let r=null;for(const i of t){if(i.type!==e.type)continue;if(r===null){r=i;continue}const s=(l,u)=>Math.abs(l.startDateTime)-(u.startTime+u.timeOrigin);s(i,e)<s(r,e)&&(r=i)}return r},rE=e=>Mu.subscribe("recording",r=>{const i=r.kind==="auto-complete-race"?Or.find(l=>l.interactionUUID===r.interactionUUID):nE(r.entry,Or);if(!i)return;const s=i.completeInteraction(r);e(s)}),aE=({onMicroTask:e,onRAF:t,onTimeout:r,abort:i})=>{queueMicrotask(()=>{(i==null?void 0:i())!==!0&&e()&&requestAnimationFrame(()=>{(i==null?void 0:i())!==!0&&t()&&setTimeout(()=>{(i==null?void 0:i())!==!0&&r()},0)})})},iE=e=>{const t=sx(e);if(!t)return;let r=t?Nt(t==null?void 0:t.type):"N/A";return r||(r=Z3(t,s=>s.length>2)??"N/A"),r?{componentPath:Q3(t),childrenTree:{},componentName:r,elementFiber:t}:void 0},aw=(e,t)=>{let r=null;const i=h=>{switch(e){case"pointer":return h.phase==="start"?"pointerup":h.target instanceof HTMLInputElement||h.target instanceof HTMLSelectElement?"change":"click";case"keyboard":return h.phase==="start"?"keydown":"change"}},s={current:{kind:"uninitialized-stage",interactionUUID:Yn(),stageStart:Date.now(),interactionType:e}},l=h=>{var T,M;if(h.composedPath().some(_=>_ instanceof Element&&_.id==="react-scan-toolbar-root")||(Date.now()-s.current.stageStart>2e3&&(s.current={kind:"uninitialized-stage",interactionUUID:Yn(),stageStart:Date.now(),interactionType:e}),s.current.kind!=="uninitialized-stage"))return;const y=performance.now();(T=t==null?void 0:t.onStart)==null||T.call(t,s.current.interactionUUID);const g=iE(h.target);if(!g){(M=t==null?void 0:t.onError)==null||M.call(t,s.current.interactionUUID);return}const w={},b=wx(w);s.current={...s.current,interactionType:e,blockingTimeStart:Date.now(),childrenTree:g.childrenTree,componentName:g.componentName,componentPath:g.componentPath,fiberRenders:w,kind:"interaction-start",interactionStartDetail:y,stopListeningForRenders:b};const S=i({phase:"end",target:h.target});document.addEventListener(S,u,{once:!0}),requestAnimationFrame(()=>{document.removeEventListener(S,u)})};document.addEventListener(i({phase:"start"}),l,{capture:!0});const u=(h,p,y)=>{var g;if(s.current.kind!=="interaction-start"&&p===r){if(e==="pointer"&&h.target instanceof HTMLSelectElement){s.current={kind:"uninitialized-stage",interactionUUID:Yn(),stageStart:Date.now(),interactionType:e};return}(g=t==null?void 0:t.onError)==null||g.call(t,s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:Yn(),stageStart:Date.now(),interactionType:e};return}r=p,aE({abort:y,onMicroTask:()=>s.current.kind==="uninitialized-stage"?!1:(s.current={...s.current,kind:"js-end-stage",jsEndDetail:performance.now()},!0),onRAF:()=>{var w;return s.current.kind!=="js-end-stage"&&s.current.kind!=="raf-stage"?((w=t==null?void 0:t.onError)==null||w.call(t,s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:Yn(),stageStart:Date.now(),interactionType:e},!1):(s.current={...s.current,kind:"raf-stage",rafStart:performance.now()},!0)},onTimeout:()=>{var _;if(s.current.kind!=="raf-stage"){(_=t==null?void 0:t.onError)==null||_.call(t,s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:Yn(),stageStart:Date.now(),interactionType:e};return}const w=Date.now(),b=Object.freeze({...s.current,kind:"timeout-stage",blockingTimeEnd:w,commitEnd:performance.now()});s.current={kind:"uninitialized-stage",interactionUUID:Yn(),stageStart:w,interactionType:e};let S=!1;const T=C=>{var P;S=!0;const A=C.kind==="auto-complete-race"?C.detailedTiming.commitEnd-C.detailedTiming.interactionStartDetail:C.entry.latency,U={detailedTiming:b,latency:A,completedAt:Date.now(),flushNeeded:!0};(P=t==null?void 0:t.onComplete)==null||P.call(t,b.interactionUUID,U,C);const D=Or.filter(G=>G.interactionUUID!==b.interactionUUID);return Or=_t.fromArray(D,iu),U},M={completeInteraction:T,endDateTime:Date.now(),startDateTime:b.blockingTimeStart,type:e,interactionUUID:b.interactionUUID};if(Or.push(M),oE())setTimeout(()=>{if(S)return;T({kind:"auto-complete-race",detailedTiming:b,interactionUUID:b.interactionUUID});const C=Or.filter(A=>A.interactionUUID!==b.interactionUUID);Or=_t.fromArray(C,iu)},1e3);else{const C=Or.filter(A=>A.interactionUUID!==b.interactionUUID);Or=_t.fromArray(C,iu),T({kind:"auto-complete-race",detailedTiming:b,interactionUUID:b.interactionUUID})}}})},d=h=>{const p=Yn();u(h,p,()=>p!==r)};return e==="keyboard"&&document.addEventListener("keypress",d),()=>{document.removeEventListener(i({phase:"start"}),l,{capture:!0}),document.removeEventListener("keypress",d)}},iw=e=>{var t;return(t=bm(e,r=>{if(Ws(r))return!0}))==null?void 0:t.stateNode},oE=()=>"PerformanceEventTiming"in globalThis,wx=e=>{const t=r=>{var y,g,w,b,S;const i=Nt(r.type);if(!i)return;const s=e[i];if(!s){const T=new Set,M=r.return&&lo(r.return),_=M&&Nt(M[0]);_&&T.add(_);const{selfTime:C,totalTime:A}=Fa(r),U=Xb(r),D={current:[],changes:new Set,changesCounts:new Map},P={fiberProps:U.fiberProps||D,fiberState:U.fiberState||D,fiberContext:U.fiberContext||D};e[i]={renderCount:1,hasMemoCache:Zs(r),wasFiberRenderMount:ow(r),parents:T,selfTime:C,totalTime:A,nodeInfo:[{element:iw(r),name:Nt(r.type)??"Unknown",selfTime:Fa(r).selfTime}],changes:P};return}if((g=(y=lo(r))==null?void 0:y[0])==null?void 0:g.type){const T=r.return&&lo(r.return),M=T&&Nt(T[0]);M&&s.parents.add(M)}const{selfTime:u,totalTime:d}=Fa(r),h=Xb(r);if(!h)return;const p={current:[],changes:new Set,changesCounts:new Map};s.wasFiberRenderMount=s.wasFiberRenderMount||ow(r),s.hasMemoCache=s.hasMemoCache||Zs(r),s.changes={fiberProps:jh(((w=s.changes)==null?void 0:w.fiberProps)||p,h.fiberProps||p),fiberState:jh(((b=s.changes)==null?void 0:b.fiberState)||p,h.fiberState||p),fiberContext:jh(((S=s.changes)==null?void 0:S.fiberContext)||p,h.fiberContext||p)},s.renderCount+=1,s.selfTime+=u,s.totalTime+=d,s.nodeInfo.push({element:iw(r),name:Nt(r.type)??"Unknown",selfTime:Fa(r).selfTime})};return oe.interactionListeningForRenders=t,()=>{oe.interactionListeningForRenders===t&&(oe.interactionListeningForRenders=null)}},jh=(e,t)=>{const r={current:[...e.current],changes:new Set,changesCounts:new Map};for(const i of t.current)r.current.some(s=>s.name===i.name)||r.current.push(i);for(const i of t.changes)if(typeof i=="string"||typeof i=="number"){r.changes.add(i);const s=e.changesCounts.get(i)||0,l=t.changesCounts.get(i)||0;r.changesCounts.set(i,s+l)}return r},ow=e=>{if(!e.alternate)return!0;const t=e.alternate,r=t&&t.memoizedState!=null&&t.memoizedState.element!=null&&t.memoizedState.isDehydrated!==!0,i=e.memoizedState!=null&&e.memoizedState.element!=null&&e.memoizedState.isDehydrated!==!0;return!r&&i},sE=e=>{let t;const r=new Set,i=(p,y)=>{const g=typeof p=="function"?p(t):p;if(!Object.is(g,t)){const w=t;t=y??(typeof g!="object"||g===null)?g:Object.assign({},t,g),r.forEach(b=>b(t,w))}},s=()=>t,d={setState:i,getState:s,getInitialState:()=>h,subscribe:(p,y)=>{let g,w;y?(g=p,w=y):w=p;let b=g?g(t):void 0;const S=(T,M)=>{if(g){const _=g(T),C=g(M);Object.is(b,_)||(b=_,w(_,C))}else w(T,M)};return r.add(S),()=>r.delete(S)}},h=t=e(i,s,d);return d},xx=e=>sE,Yc=null;xx()(e=>({state:{events:[]},actions:{addEvent:t=>{e(r=>({state:{events:[...r.state.events,t]}}))},clear:()=>{e({state:{events:[]}})}}}));var Uh=200,rl=xx()((e,t)=>{const r=new Set;return{state:{events:new _t(Uh)},actions:{addEvent:i=>{r.forEach(h=>h(i));const s=[...t().state.events,i],l=(h,p)=>{const y=s.find(g=>{if(g.kind!=="long-render"&&g.id!==h.id&&(h.data.startAt<=g.data.startAt&&h.data.endAt<=g.data.endAt&&h.data.endAt>=g.data.startAt||g.data.startAt<=h.data.startAt&&g.data.endAt>=h.data.startAt||h.data.startAt<=g.data.startAt&&h.data.endAt>=g.data.endAt))return!0});y&&p(y)},u=new Set;s.forEach(h=>{h.kind!=="interaction"&&l(h,()=>{u.add(h.id)})});const d=s.filter(h=>!u.has(h.id));e(()=>({state:{events:_t.fromArray(d,Uh)}}))},addListener:i=>(r.add(i),()=>{r.delete(i)}),clear:()=>{e({state:{events:new _t(Uh)}})}}}}),lE=()=>ck(rl.subscribe,rl.getState),ou=null,su=null,Lh=null,Lp,cE=()=>{const e=t=>{Lp=t.composedPath().map(r=>r.id).filter(Boolean).includes("react-scan-toolbar")};return document.addEventListener("mouseover",e),Lh=e,()=>{Lh&&document.removeEventListener("mouseover",Lh)}},uE=()=>{const e=()=>{ou=performance.now(),su=performance.timeOrigin};return document.addEventListener("visibilitychange",e),()=>{document.removeEventListener("visibilitychange",e)}},_x=150,$h=[];function dE(){let e,t;function r(){let s=null;Yc=null,Yc={},s=wx(Yc);const l=performance.timeOrigin,u=performance.now();return e=requestAnimationFrame(()=>{t=setTimeout(()=>{const d=performance.now(),h=d-u,p=performance.timeOrigin;$h.push(d+p);const y=$h.filter(S=>d+p-S<=1e3),g=y.length;$h=y;const w=ou!==null&&su!==null?d+p-(su+ou)<100:null,b=Lp!==null&&Lp;if(h>_x&&!w&&document.visibilityState==="visible"&&!b){const S=p+d,T=u+l;rl.getState().actions.addEvent({kind:"long-render",id:Yn(),data:{endAt:S,startAt:T,meta:{fiberRenders:Yc,latency:h,fps:g}}})}ou=null,su=null,s==null||s(),r()},0)}),s}const i=r();return()=>{i(),cancelAnimationFrame(e),clearTimeout(t)}}var fE=()=>{const e=tE(),t=cE(),r=uE(),i=dE(),s=async(h,p,y)=>{rl.getState().actions.addEvent({kind:"interaction",id:Yn(),data:{startAt:p.detailedTiming.blockingTimeStart,endAt:performance.now()+performance.timeOrigin,meta:{...p,kind:y.kind}}});const g=Mu.getChannelState("recording");p.detailedTiming.stopListeningForRenders(),g.length&&Mu.updateChannelState("recording",()=>new _t(or))},l=aw("pointer",{onComplete:s}),u=aw("keyboard",{onComplete:s}),d=rE(h=>{nw.setState(_t.fromArray(nw.getCurrentState().concat(h),yx))});return()=>{t(),r(),i(),e(),l(),d(),u()}},al=e=>{const t=e.filter(r=>r.length>2);return t.length===0?e.at(-1)??"Unknown":t.at(-1)},Ot=e=>{switch(e.kind){case"interaction":{const{renderTime:t,otherJSTime:r,framePreparation:i,frameConstruction:s,frameDraw:l}=e;return t+r+i+s+(l??0)}case"dropped-frames":return e.otherTime+e.renderTime}},hE=e=>e.wasFiberRenderMount||e.hasMemoCache?!1:e.changes.context.length===0&&e.changes.props.length===0&&e.changes.state.length===0,gl=e=>{const t=Ot(e.timing);switch(e.kind){case"interaction":return t<200?"low":t<500?"needs-improvement":"high";case"dropped-frames":return t<50?"low":t<_x?"needs-improvement":"high"}},bn=()=>km(Sx),Sx=j1(null),Tx=({size:e=24,className:t})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:L(["lucide lucide-chevron-right",t]),children:v("path",{d:"m9 18 6-6-6-6"})}),pE=({className:e="",size:t=24,events:r=[]})=>{const i=r.includes(!0),s=r.filter(d=>d).length,l=s>99?">99":s,u=i?Math.max(t*.6,14):Math.max(t*.4,6);return v("div",{className:"relative",children:[v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:`lucide lucide-bell ${e}`,children:[v("path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}),v("path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"})]}),r.length>0&&s>0&&Ue.options.value.showNotificationCount&&v("div",{className:L(["absolute",i?"-top-2.5 -right-2.5":"-top-1 -right-1","rounded-full","flex items-center justify-center","text-[8px] font-medium text-white","aspect-square",i?"bg-red-500/90":"bg-purple-500/90"]),style:{width:`${u}px`,height:`${u}px`,padding:i?"0.5px":"0"},children:i&&l})]})},Nu=({className:e="",size:t=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[v("path",{d:"M18 6 6 18"}),v("path",{d:"m6 6 12 12"})]}),mE=({className:e="",size:t=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[v("path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}),v("path",{d:"M16 9a5 5 0 0 1 0 6"}),v("path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"})]}),gE=({className:e="",size:t=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[v("path",{d:"M16 9a5 5 0 0 1 .95 2.293"}),v("path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96"}),v("path",{d:"m2 2 20 20"}),v("path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"}),v("path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686"})]}),vE=({size:e=24,className:t})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:L(["lucide lucide-arrow-left",t]),children:[v("path",{d:"m12 19-7-7 7-7"}),v("path",{d:"M19 12H5"})]}),yE=({className:e="",size:t=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[v("path",{d:"M14 4.1 12 6"}),v("path",{d:"m5.1 8-2.9-.8"}),v("path",{d:"m6 12-1.9 2"}),v("path",{d:"M7.2 2.2 8 5.1"}),v("path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"})]}),bE=({className:e="",size:t=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[v("path",{d:"M10 8h.01"}),v("path",{d:"M12 12h.01"}),v("path",{d:"M14 8h.01"}),v("path",{d:"M16 12h.01"}),v("path",{d:"M18 8h.01"}),v("path",{d:"M6 8h.01"}),v("path",{d:"M7 16h10"}),v("path",{d:"M8 12h.01"}),v("rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"})]}),wE=({className:e="",size:t=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,style:{transform:"rotate(180deg)"},children:[v("circle",{cx:"12",cy:"12",r:"10"}),v("path",{d:"m4.9 4.9 14.2 14.2"})]}),xE=({className:e="",size:t=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[v("polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}),v("polyline",{points:"16 17 22 17 22 11"})]}),kx=({children:e,triggerContent:t,wrapperProps:r})=>{const[i,s]=Ne("closed"),[l,u]=Ne(null),[d,h]=Ne({width:window.innerWidth,height:window.innerHeight}),p=he(null),y=he(null),g=km(Bm),w=he(!1);Ce(()=>{const _=()=>{h({width:window.innerWidth,height:window.innerHeight}),b()};return window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)},[]);const b=()=>{if(p.current&&g){const _=p.current.getBoundingClientRect(),C=g.getBoundingClientRect(),A=_.left+_.width/2,U=_.top,D=new DOMRect(A-C.left,U-C.top,_.width,_.height);u(D)}};Ce(()=>{b()},[p.current]),Ce(()=>{if(i==="opening"){const _=setTimeout(()=>s("open"),120);return()=>clearTimeout(_)}else if(i==="closing"){const _=setTimeout(()=>s("closed"),120);return()=>clearTimeout(_)}},[i]),Ce(()=>{const _=setInterval(()=>{!w.current&&i!=="closed"&&s("closing")},1e3);return()=>clearInterval(_)},[i]);const S=()=>{w.current=!0,b(),s("opening")},T=()=>{w.current=!1,b(),s("closing")},M=()=>{var ne;if(!l||!g)return{top:0,left:0};const _=g.getBoundingClientRect(),C=175,A=((ne=y.current)==null?void 0:ne.offsetHeight)||40,U=5,D=l.x+_.left,P=l.y+_.top;let G=D,ee=P-4;return G-C/2<U?G=U+C/2:G+C/2>d.width-U&&(G=d.width-U-C/2),ee-A<U&&(ee=P+l.height+4),{top:ee-_.top,left:G-_.left}};return v(De,{children:[g&&l&&i!=="closed"&&pk(v("div",{ref:y,className:L(["absolute z-100 bg-white text-black rounded-lg px-3 py-2 shadow-lg","transform transition-all duration-120 ease-[cubic-bezier(0.23,1,0.32,1)]",'after:content-[""] after:absolute after:top-[100%]',"after:left-1/2 after:-translate-x-1/2","after:w-[10px] after:h-[6px]","after:border-l-[5px] after:border-l-transparent","after:border-r-[5px] after:border-r-transparent","after:border-t-[6px] after:border-t-white","pointer-events-none",i==="opening"||i==="closing"?"opacity-0 translate-y-1":"opacity-100 translate-y-0"]),style:{top:M().top+"px",left:M().left+"px",transform:"translate(-50%, -100%)",minWidth:"175px"},children:e}),g),v("div",{ref:p,onMouseEnter:S,onMouseLeave:T,...r,children:t})]})},_E=({selectedEvent:e})=>{const{notificationState:t,setNotificationState:r,setRoute:i}=bn();return v("div",{className:L(["flex w-full justify-between items-center px-3 py-2 text-xs"]),children:[v("div",{className:L(["bg-[#18181B] flex items-center gap-x-1 p-1 rounded-sm"]),children:[v("button",{onClick:()=>{i({route:"render-visualization",routeMessage:null})},className:L(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",t.route==="render-visualization"||t.route==="render-explanation"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Ranked"}),v("button",{onClick:()=>{i({route:"other-visualization",routeMessage:null})},className:L(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",t.route==="other-visualization"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Overview"}),v("button",{onClick:()=>{i({route:"optimize",routeMessage:null})},className:L(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",t.route==="optimize"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:v("span",{children:"Prompts"})})]}),v(kx,{triggerContent:v("button",{onClick:()=>{r(s=>{s.audioNotificationsOptions.enabled&&s.audioNotificationsOptions.audioContext.state!=="closed"&&s.audioNotificationsOptions.audioContext.close();const l=s.audioNotificationsOptions.enabled;localStorage.setItem("react-scan-notifications-audio",String(!l));const u=new AudioContext;return s.audioNotificationsOptions.enabled||Om(u),l&&u.close(),{...s,audioNotificationsOptions:l?{audioContext:null,enabled:!1}:{audioContext:u,enabled:!0}}})},className:"ml-auto",children:v("div",{className:L(["flex gap-x-2 justify-center items-center text-[#6E6E77]"]),children:[v("span",{children:"Alerts"}),t.audioNotificationsOptions.enabled?v(mE,{size:16,className:"text-[#6E6E77]"}):v(gE,{size:16,className:"text-[#6E6E77]"})]})}),children:v(De,{children:"Play a chime when a slowdown is recorded"})})]})},Zi=e=>{let t="";return e.toSorted((i,s)=>s.totalTime-i.totalTime).slice(0,30).filter(i=>i.totalTime>5).forEach(i=>{let s="";s+="Component Name:",s+=i.name,s+=`
`,s+=`Rendered: ${i.count} times
`,s+=`Sum of self times for ${i.name} is ${i.totalTime.toFixed(0)}ms
`,i.changes.props.length>0&&(s+=`Changed props for all ${i.name} instances ("name:count" pairs)
`,i.changes.props.forEach(l=>{s+=`${l.name}:${l.count}x
`})),i.changes.state.length>0&&(s+=`Changed state for all ${i.name} instances ("hook index:count" pairs)
`,i.changes.state.forEach(l=>{s+=`${l.index}:${l.count}x
`})),i.changes.context.length>0&&(s+=`Changed context for all ${i.name} instances ("context display name (if exists):count" pairs)
`,i.changes.context.forEach(l=>{s+=`${l.name}:${l.count}x
`})),t+=s,t+=`
`}),t},SE=({renderTime:e,eHandlerTimeExcludingRenders:t,toRafTime:r,commitTime:i,framePresentTime:s,formattedReactData:l})=>`I will provide you with a set of high level, and low level performance data about an interaction in a React App:
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
${l}`,TE=({interactionType:e,name:t,componentPath:r,time:i,renderTime:s,eHandlerTimeExcludingRenders:l,toRafTime:u,commitTime:d,framePresentTime:h,formattedReactData:p})=>`You will attempt to implement a performance improvement to a user interaction in a React app. You will be provided with data about the interaction, and the slow down.

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

`,kE=({renderTime:e,otherTime:t,formattedReactData:r})=>`You will attempt to implement a performance improvement to a large slowdown in a react app

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
`,EE=({renderTime:e,otherTime:t,formattedReactData:r})=>`Your goal will be to help me find the source of a performance problem in a React App. I collected a large dataset about this specific performance problem.

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
`,CE=({renderTime:e,otherTime:t,formattedReactData:r})=>`I will provide you with a set of high level, and low level performance data about a large frame drop in a React App:
### High level
- react component render time: ${e.toFixed(0)}ms
- how long it took to run everything else (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${t}ms

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${r}`,ME=({interactionType:e,name:t,time:r,renderTime:i,eHandlerTimeExcludingRenders:s,toRafTime:l,commitTime:u,framePresentTime:d,formattedReactData:h})=>`Your goal will be to help me find the source of a performance problem. I collected a large dataset about this specific performance problem.

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
`,$p=(e,t)=>Gn(()=>{switch(e){case"data":switch(t.kind){case"dropped-frames":return CE({formattedReactData:Zi(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return SE({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:Zi(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,renderTime:t.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),toRafTime:t.timing.framePreparation})}case"explanation":switch(t.kind){case"dropped-frames":return EE({formattedReactData:Zi(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return ME({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:Zi(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:al(t.componentPath),renderTime:t.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),time:Ot(t.timing),toRafTime:t.timing.framePreparation})}case"fix":switch(t.kind){case"dropped-frames":return kE({formattedReactData:Zi(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return TE({commitTime:t.timing.frameConstruction,componentPath:t.componentPath.join(">"),eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:Zi(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:al(t.componentPath),renderTime:t.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),time:Ot(t.timing),toRafTime:t.timing.framePreparation})}}}),NE=({selectedEvent:e})=>{const[t,r]=Ne("fix"),[i,s]=Ne(!1);return v("div",{className:L(["w-full h-full"]),children:[v("div",{className:L(["border border-[#27272A] rounded-sm h-4/5 text-xs overflow-hidden"]),children:[v("div",{className:L(["bg-[#18181B] p-1 rounded-t-sm"]),children:v("div",{className:L(["flex items-center gap-x-1"]),children:[v("button",{onClick:()=>r("fix"),className:L(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",t==="fix"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Fix"}),v("button",{onClick:()=>r("explanation"),className:L(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",t==="explanation"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Explanation"}),v("button",{onClick:()=>r("data"),className:L(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",t==="data"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Data"})]})}),v("div",{className:L(["overflow-y-auto h-full"]),children:v("pre",{className:L(["p-2 h-full","whitespace-pre-wrap break-words","text-gray-300 font-mono "]),children:$p(t,e)})})]}),v("button",{onClick:async()=>{const l=$p(t,e);await navigator.clipboard.writeText(l),s(!0),setTimeout(()=>s(!1),1e3)},className:L(["mt-4 px-4 py-2 bg-[#18181B] text-[#6E6E77] rounded-sm","hover:text-white transition-colors duration-200","flex items-center justify-center gap-x-2 text-xs"]),children:[v("span",{children:i?"Copied!":"Copy Prompt"}),v("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:L(["transition-transform duration-200",i&&"scale-110"]),children:i?v("path",{d:"M20 6L9 17l-5-5"}):v(De,{children:[v("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),v("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})]})},OE=(e,t)=>{switch(e.kind){case"dropped-frames":return[...t?[{name:"Total Processing Time",time:Ot(e.timing),color:"bg-red-500",kind:"total-processing-time"}]:[{name:"Renders",time:e.timing.renderTime,color:"bg-purple-500",kind:"render"},{name:"JavaScript, DOM updates, Draw Frame",time:e.timing.otherTime,color:"bg-[#4b4b4b]",kind:"other-frame-drop"}]];case"interaction":return[...t?[]:[{name:"Renders",time:e.timing.renderTime,color:"bg-purple-500",kind:"render"}],{name:t?"React Renders, Hooks, Other JavaScript":"JavaScript/React Hooks ",time:e.timing.otherJSTime,color:"bg-[#EFD81A]",kind:"other-javascript"},{name:"Update DOM and Draw New Frame",time:Ot(e.timing)-e.timing.renderTime-e.timing.otherJSTime,color:"bg-[#1D3A66]",kind:"other-not-javascript"}]}},AE=({selectedEvent:e})=>{var h;const[t]=Ne(Fu()??!1),{notificationState:r}=bn(),[i,s]=Ne((h=r.routeMessage)!=null&&h.name?[r.routeMessage.name]:[]),l=OE(e,t),u=km(Bm);Ce(()=>{var p;if((p=r.routeMessage)!=null&&p.name){const y=u==null?void 0:u.querySelector("#overview-scroll-container"),g=u==null?void 0:u.querySelector(`#react-scan-overview-bar-${r.routeMessage.name}`);if(y&&g){const w=g.getBoundingClientRect().top,b=y.getBoundingClientRect().top,S=w-b;y.scrollTop=y.scrollTop+S}}},[r.route]),Ce(()=>{r.route==="other-visualization"&&s(p=>{var y;return(y=r.routeMessage)!=null&&y.name?[r.routeMessage.name]:p})},[r.route]);const d=l.reduce((p,y)=>p+y.time,0);return v("div",{className:"rounded-sm border border-zinc-800 text-xs",children:[v("div",{className:"p-2 border-b border-zinc-800 bg-zinc-900/50",children:v("div",{className:"flex items-center justify-between",children:[v("h3",{className:"text-xs font-medium",children:"What was time spent on?"}),v("span",{className:"text-xs text-zinc-400",children:["Total: ",d.toFixed(0),"ms"]})]})}),v("div",{className:"divide-y divide-zinc-800",children:l.map(p=>{const y=i.includes(p.kind);return v("div",{id:`react-scan-overview-bar-${p.kind}`,children:[v("button",{onClick:()=>s(g=>g.includes(p.kind)?g.filter(w=>w!==p.kind):[...g,p.kind]),className:"w-full px-3 py-2 flex items-center gap-4 hover:bg-zinc-800/50 transition-colors",children:v("div",{className:"flex-1",children:[v("div",{className:"flex items-center justify-between mb-2",children:[v("div",{className:"flex items-center gap-0.5",children:[v("svg",{className:`h-4 w-4 text-zinc-400 transition-transform ${y?"rotate-90":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:v("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),v("span",{className:"font-medium flex items-center text-left",children:p.name})]}),v("span",{className:" text-zinc-400",children:[p.time.toFixed(0),"ms"]})]}),v("div",{className:"h-1 bg-zinc-800 rounded-full overflow-hidden",children:v("div",{className:`h-full ${p.color} transition-all`,style:{width:`${p.time/d*100}%`}})})]})}),y&&v("div",{className:"bg-zinc-900/30 border-t border-zinc-800 px-2.5 py-3",children:v("p",{className:" text-zinc-400 mb-4 text-xs",children:Gn(()=>{switch(e.kind){case"interaction":switch(p.kind){case"render":return v(Ki,{input:RE(e)});case"other-javascript":return v(Ki,{input:DE(e)});case"other-not-javascript":return v(Ki,{input:zE(e)})}case"dropped-frames":switch(p.kind){case"total-processing-time":return v(Ki,{input:{kind:"total-processing",data:{time:Ot(e.timing)}}});case"render":return v(De,{children:v(Ki,{input:{kind:"render",data:{topByTime:e.groupedFiberRenders.toSorted((g,w)=>w.totalTime-g.totalTime).slice(0,3).map(g=>({name:g.name,percentage:g.totalTime/Ot(e.timing)}))}}})});case"other-frame-drop":return v(Ki,{input:{kind:"other"}})}}})})})]},p.kind)})})]})},zE=e=>{const t=e.groupedFiberRenders.reduce((l,u)=>l+u.count,0),r=e.timing.renderTime,i=Ot(e.timing),s=r/i*100;return t>100?{kind:"high-render-count-update-dom-draw-frame",data:{count:t,percentageOfTotal:s,copyButton:v(sw,{})}}:{kind:"update-dom-draw-frame",data:{copyButton:v(sw,{})}}},sw=()=>{const[e,t]=Ne(!1),{notificationState:r}=bn();return v("button",{onClick:async()=>{r.selectedEvent&&(await navigator.clipboard.writeText($p("explanation",r.selectedEvent)),t(!0),setTimeout(()=>t(!1),1e3))},className:"bg-zinc-800 flex hover:bg-zinc-700 text-zinc-200 px-2 py-1 rounded gap-x-3",children:[v("span",{children:e?"Copied!":"Copy Prompt"}),v("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:L(["transition-transform duration-200",e&&"scale-110"]),children:e?v("path",{d:"M20 6L9 17l-5-5"}):v(De,{children:[v("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),v("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})},RE=e=>e.timing.renderTime/Ot(e.timing)>.3?{kind:"render",data:{topByTime:e.groupedFiberRenders.toSorted((t,r)=>r.totalTime-t.totalTime).slice(0,3).map(t=>({percentage:t.totalTime/Ot(e.timing),name:t.name}))}}:{kind:"other"},DE=e=>{const t=e.groupedFiberRenders.reduce((r,i)=>r+i.count,0);return e.timing.otherJSTime/Ot(e.timing)<.2?{kind:"js-explanation-base"}:e.groupedFiberRenders.find(r=>r.count>200)||e.groupedFiberRenders.reduce((r,i)=>r+i.count,0)>500?{kind:"high-render-count-high-js",data:{renderCount:t,topByCount:e.groupedFiberRenders.filter(r=>r.count>100).toSorted((r,i)=>i.count-r.count).slice(0,3)}}:e.timing.otherJSTime/Ot(e.timing)>.3?e.timing.renderTime>.2?{kind:"js-explanation-base"}:{kind:"low-render-count-high-js",data:{renderCount:t}}:{kind:"js-explanation-base"}},Ki=({input:e})=>{switch(e.kind){case"total-processing":return v("div",{className:L(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:["This is the time it took to draw the entire frame that was presented to the user. To be at 60FPS, this number needs to be ","<=16ms"]}),v("p",{children:'To debug the issue, check the "Ranked" tab to see if there are significant component renders'}),v("p",{children:"On a production React build, React Scan can't access the time it took for component to render. To get that information, run React Scan on a development build"}),v("p",{children:["To understand precisely what caused the slowdown while in production, use the ",v("strong",{children:"Chrome profiler"})," and analyze the function call times."]}),v("p",{})]});case"render":return v("div",{className:L(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:"This is the time it took React to run components, and internal logic to handle the output of your component."}),v("div",{className:L(["flex flex-col"]),children:[v("p",{children:"The slowest components for this time period were:"}),e.data.topByTime.map(t=>v("div",{children:[v("strong",{children:t.name}),":"," ",(t.percentage*100).toFixed(0),"% of total"]},t.name))]}),v("p",{children:'To view the render times of all your components, and what caused them to render, go to the "Ranked" tab'}),v("p",{children:'The "Ranked" tab shows the render times of every component.'}),v("p",{children:"The render times of the same components are grouped together into one bar."}),v("p",{children:"Clicking the component will show you what props, state, or context caused the component to re-render."})]});case"js-explanation-base":return v("div",{className:L(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),v("p",{children:["The most common culprit for high JS time is expensive hooks, like expensive callbacks inside of ",v("code",{children:"useEffect"}),"'s or a large number of useEffect's called, but this can also be JavaScript event handlers (",v("code",{children:"'onclick'"}),", ",v("code",{children:"'onchange'"}),") that performed expensive computation."]}),v("p",{children:"If you have lots of components rendering that call hooks, like useEffect, it can add significant overhead even if the callbacks are not expensive. If this is the case, you can try optimizing the renders of those components to avoid the hook from having to run."}),v("p",{children:["You should profile your app using the"," ",v("strong",{children:"Chrome DevTools profiler"})," to learn exactly which functions took the longest to execute."]})]});case"high-render-count-high-js":return v("div",{className:L(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),e.data.renderCount===0?v(De,{children:[v("p",{children:"There were no renders, which means nothing related to React caused this slowdown. The most likely cause of the slowdown is a slow JavaScript event handler, or code related to a Web API"}),v("p",{children:["You should try to reproduce the slowdown while profiling your website with the",v("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]}):v(De,{children:[" ",v("p",{children:["There were ",v("strong",{children:e.data.renderCount})," renders, which could have contributed to the high JavaScript/Hook time if they ran lots of hooks, like ",v("code",{children:"useEffects"}),"."]}),v("div",{className:L(["flex flex-col"]),children:[v("p",{children:"You should try optimizing the renders of:"}),e.data.topByCount.map(t=>v("div",{children:["- ",v("strong",{children:t.name})," (rendered ",t.count,"x)"]},t.name))]}),"and then checking if the problem still exists.",v("p",{children:["You can also try profiling your app using the"," ",v("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]})]});case"low-render-count-high-js":return v("div",{className:L(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),v("p",{children:["There were only ",v("strong",{children:e.data.renderCount})," renders detected, which means either you had very expensive hooks like"," ",v("code",{children:"useEffect"}),"/",v("code",{children:"useLayoutEffect"}),", or there is other JavaScript running during this interaction that took up the majority of the time."]}),v("p",{children:["To understand precisely what caused the slowdown, use the"," ",v("strong",{children:"Chrome profiler"})," and analyze the function call times."]})]});case"high-render-count-update-dom-draw-frame":return v("div",{className:L(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),v("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),v("p",{children:["During this interaction, there were"," ",v("strong",{children:e.data.count})," renders, which was"," ",v("strong",{children:[e.data.percentageOfTotal.toFixed(0),"%"]})," of the time spent processing"]}),v("p",{children:"The work performed as a result of the renders may have forced the browser to spend a lot of time to draw the next frame."}),v("p",{children:'You can try optimizing the renders to see if the performance problem still exists using the "Ranked" tab.'}),v("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),v("p",{children:e.data.copyButton}),v("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),v("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"update-dom-draw-frame":return v("div",{className:L(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),v("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),v("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),v("p",{children:e.data.copyButton}),v("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),v("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"other":return v("div",{className:L(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:["This is the time it took to run everything other than React renders. This can be hooks like ",v("code",{children:"useEffect"}),", other JavaScript not part of React, or work the browser has to do to update the DOM and draw the next frame."]}),v("p",{children:["To get a better picture of what happened, profile your app using the"," ",v("strong",{children:"Chrome profiler"})," when the performance problem arises."]})]})}},We=null,ut=null,Ge=yt({kind:"idle",current:null}),Hh=null,uo=()=>{Hh&&cancelAnimationFrame(Hh),Hh=requestAnimationFrame(()=>{if(!We||!ut)return;ut.clearRect(0,0,We.width,We.height);const e="hsl(271, 76%, 53%)",t=Ge.value,{alpha:r,current:i}=Gn(()=>{var s,l;switch(t.kind){case"transition":{const u=(s=t.current)!=null&&s.alpha&&t.current.alpha>0?t.current:t.transitionTo;return{alpha:u?u.alpha:0,current:u}}case"move-out":return{alpha:((l=t.current)==null?void 0:l.alpha)??0,current:t.current};case"idle":return{alpha:1,current:t.current}}});switch(i==null||i.rects.forEach(s=>{ut&&(ut.shadowColor=e,ut.shadowBlur=6,ut.strokeStyle=e,ut.lineWidth=2,ut.globalAlpha=r,ut.beginPath(),ut.rect(s.left,s.top,s.width,s.height),ut.stroke(),ut.shadowBlur=0,ut.beginPath(),ut.rect(s.left,s.top,s.width,s.height),ut.stroke())}),t.kind){case"move-out":{if(t.current.alpha===0){Ge.value={kind:"idle",current:null};return}t.current.alpha<=.01&&(t.current.alpha=0),t.current.alpha=Math.max(0,t.current.alpha-.03),uo();return}case"transition":{if(t.current&&t.current.alpha>0){t.current.alpha=Math.max(0,t.current.alpha-.03),uo();return}if(t.transitionTo.alpha===1){Ge.value={kind:"idle",current:t.transitionTo};return}t.transitionTo.alpha=Math.min(t.transitionTo.alpha+.03,1),uo()}case"idle":return}})},qh=null,jE=e=>{if(We=document.createElement("canvas"),ut=We.getContext("2d",{alpha:!0}),!ut)return null;const t=window.devicePixelRatio||1,{innerWidth:r,innerHeight:i}=window;We.style.width=`${r}px`,We.style.height=`${i}px`,We.width=r*t,We.height=i*t,We.style.position="fixed",We.style.left="0",We.style.top="0",We.style.pointerEvents="none",We.style.zIndex="2147483600",ut.scale(t,t),e.appendChild(We),qh&&window.removeEventListener("resize",qh);const s=()=>{if(!We||!ut)return;const l=window.devicePixelRatio||1,{innerWidth:u,innerHeight:d}=window;We.style.width=`${u}px`,We.style.height=`${d}px`,We.width=u*l,We.height=d*l,ut.scale(l,l),uo()};return qh=s,window.addEventListener("resize",s),Ge.subscribe(()=>{requestAnimationFrame(()=>{uo()})}),UE};function UE(){We!=null&&We.parentNode&&We.parentNode.removeChild(We),We=null,ut=null}var Ls=()=>{var t;const e=Ge.value.current?Ge.value.current:Ge.value.kind==="transition"?Ge.value.transitionTo:null;if(e){if(Ge.value.kind==="transition"){Ge.value={kind:"move-out",current:((t=Ge.value.current)==null?void 0:t.alpha)===0?Ge.value.transitionTo:Ge.value.current??Ge.value.transitionTo};return}Ge.value={kind:"move-out",current:{alpha:0,...e}}}},LE=({selectedEvent:e})=>{const t=Ot(e.timing),r=t-e.timing.renderTime,[i]=Ne(Fu()),l=e.groupedFiberRenders.map(p=>({event:p,kind:"render",totalTime:i?p.count:p.totalTime})),u=Gn(()=>{switch(e.kind){case"dropped-frames":return e.timing.renderTime/t<.1;case"interaction":return(e.timing.otherJSTime+e.timing.renderTime)/t<.2}});e.kind==="interaction"&&!i&&l.push({kind:"other-javascript",totalTime:e.timing.otherJSTime}),u&&!i&&(e.kind==="interaction"?l.push({kind:"other-not-javascript",totalTime:Ot(e.timing)-e.timing.renderTime-e.timing.otherJSTime}):l.push({kind:"other-frame-drop",totalTime:r}));const d=he({lastCallAt:null,timer:null}),h=l.reduce((p,y)=>p+y.totalTime,0);return v("div",{className:L(["flex flex-col h-full w-full gap-y-1"]),children:[Gn(()=>{if(i&&l.length===0)return v("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[v("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No data available"}),v("p",{className:"text-x w-full text-lefts",children:"No data was collected during this period"})]});if(l.length===0)return v("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[v("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No renders collected"}),v("p",{className:"text-x w-full text-lefts",children:"There were no renders during this period"})]})}),l.toSorted((p,y)=>y.totalTime-p.totalTime).map(p=>v(Ex,{bars:l,bar:p,debouncedMouseEnter:d,totalBarTime:h,isProduction:i},p.kind==="render"?p.event.id:p.kind))]})},$E=e=>e.current&&e.current.alpha>0?"fading-out":"fading-in",Ex=({bar:e,debouncedMouseEnter:t,totalBarTime:r,isProduction:i,bars:s,depth:l=0})=>{const{setNotificationState:u,setRoute:d}=bn(),[h,p]=Ne(!1),y=e.kind==="render"?e.event.parents.size===0:!0,g=s.filter(S=>S.kind==="render"&&e.kind==="render"?e.event.parents.has(S.event.name)&&S.event.name!==e.event.name:!1),w=e.kind==="render"?Array.from(e.event.parents).filter(S=>!s.some(T=>T.kind==="render"&&T.event.name===S)):[],b=()=>{e.kind==="render"?(u(S=>({...S,selectedFiber:e.event})),d({route:"render-explanation",routeMessage:null})):d({route:"other-visualization",routeMessage:{kind:"auto-open-overview-accordion",name:e.kind}})};return v("div",{className:"w-full",children:[v("div",{className:L(["w-full flex items-center relative text-xs min-w-0"]),children:[v("button",{onMouseLeave:()=>{t.current.timer&&clearTimeout(t.current.timer),Ls()},onMouseEnter:async()=>{const S=async()=>{if(t.current.lastCallAt=Date.now(),e.kind!=="render"){const A=Ge.value.current?Ge.value.current:Ge.value.kind==="transition"?Ge.value.transitionTo:null;if(!A){Ge.value={kind:"idle",current:null};return}Ge.value={kind:"move-out",current:{alpha:0,...A}};return}const T=Ge.value,M=Gn(()=>{switch(T.kind){case"transition":return T.transitionTo;case"idle":case"move-out":return T.current}}),_=[];if(T.kind==="transition"){const A=$E(T);Gn(()=>{switch(A){case"fading-in":{Ge.value={kind:"transition",current:T.transitionTo,transitionTo:{rects:_,alpha:0,name:e.event.name}};return}case"fading-out":{Ge.value={kind:"transition",current:Ge.value.current?{alpha:0,...Ge.value.current}:null,transitionTo:{rects:_,alpha:0,name:e.event.name}};return}}})}else Ge.value={kind:"transition",transitionTo:{rects:_,alpha:0,name:e.event.name},current:M?{alpha:0,...M}:null};const C=e.event.elements.filter(A=>A instanceof Element);for await(const A of gx(C))A.forEach(({boundingClientRect:U})=>{_.push(U)}),uo()};if(t.current.lastCallAt&&Date.now()-t.current.lastCallAt<200){t.current.timer&&clearTimeout(t.current.timer),t.current.timer=setTimeout(()=>{S()},200);return}S()},onClick:b,className:L(["h-full w-[90%] flex items-center hover:bg-[#0f0f0f] rounded-l-md min-w-0 relative"]),children:[v("div",{style:{minWidth:"fit-content",width:`${e.totalTime/r*100}%`},className:L(["flex items-center rounded-sm text-white text-xs h-[28px] shrink-0",e.kind==="render"&&"bg-[#412162] group-hover:bg-[#5b2d89]",e.kind==="other-frame-drop"&&"bg-[#44444a] group-hover:bg-[#6a6a6a]",e.kind==="other-javascript"&&"bg-[#efd81a6b] group-hover:bg-[#efda1a2f]",e.kind==="other-not-javascript"&&"bg-[#214379d4] group-hover:bg-[#21437982]"])}),v("div",{className:L(["absolute inset-0 flex items-center px-2","min-w-0"]),children:v("div",{className:"flex items-center gap-x-2 min-w-0 w-full",children:[v("span",{className:L(["truncate"]),children:Gn(()=>{switch(e.kind){case"other-frame-drop":return"JavaScript, DOM updates, Draw Frame";case"other-javascript":return"JavaScript/React Hooks";case"other-not-javascript":return"Update DOM and Draw New Frame";case"render":return e.event.name}})}),e.kind==="render"&&hE(e.event)&&v("div",{style:{lineHeight:"10px"},className:L(["px-1 py-0.5 bg-[#6a369e] flex items-center rounded-sm font-semibold text-[8px] shrink-0"]),children:"Memoizable"})]})})]}),v("button",{onClick:()=>e.kind==="render"&&!y&&p(!h),className:L(["flex items-center min-w-fit shrink-0 rounded-r-md h-[28px]",!y&&"hover:bg-[#0f0f0f]",e.kind==="render"&&!y?"cursor-pointer":"cursor-default"]),children:[v("div",{className:"w-[20px] flex items-center justify-center",children:e.kind==="render"&&!y&&v(Tx,{className:L("transition-transform",h&&"rotate-90"),size:16})}),v("div",{style:{minWidth:y?"fit-content":i?"30px":"60px"},className:"flex items-center justify-end gap-x-1",children:[e.kind==="render"&&v("span",{className:L(["text-[10px]"]),children:["x",e.event.count]}),(e.kind!=="render"||!i)&&v("span",{className:"text-[10px] text-[#7346a0] pr-1",children:[e.totalTime<1?"<1":e.totalTime.toFixed(0),"ms"]})]})]}),l===0&&v("div",{className:L(["absolute right-0 top-1/2 transition-none -translate-y-1/2 bg-white text-black px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity mr-16","pointer-events-none"]),children:"Click to learn more"})]}),h&&(g.length>0||w.length>0)&&v("div",{className:"pl-3 flex flex-col gap-y-1 mt-1",children:[g.toSorted((S,T)=>T.totalTime-S.totalTime).map((S,T)=>v(Ex,{depth:l+1,bar:S,debouncedMouseEnter:t,totalBarTime:r,isProduction:i,bars:s},T)),w.map(S=>v("div",{className:"w-full",children:v("div",{className:"w-full flex items-center relative text-xs",children:v("div",{className:"h-full w-full flex items-center relative",children:[v("div",{className:"flex items-center rounded-sm text-white text-xs h-[28px] w-full"}),v("div",{className:"absolute inset-0 flex items-center px-2",children:v("span",{className:"truncate whitespace-nowrap text-white/70 w-full",children:S})})]})})},S))]})]})},HE=({selectedEvent:e,selectedFiber:t})=>{const{setRoute:r}=bn(),[i,s]=Ne(!0),[l]=Ne(Fu());Tm(()=>{const d=localStorage.getItem("react-scan-tip-shown"),h=d==="true"?!0:d==="false"?!1:null;if(h===null){s(!0),localStorage.setItem("react-scan-tip-is-shown","true");return}h||s(!1)},[]);const u=t.changes.context.length===0&&t.changes.props.length===0&&t.changes.state.length===0;return v("div",{className:L(["w-full min-h-fit h-full flex flex-col py-4 pt-0 rounded-sm"]),children:[v("div",{className:L(["flex items-start gap-x-4 "]),children:[v("button",{onClick:()=>{r({route:"render-visualization",routeMessage:null})},className:L(["text-white hover:bg-[#34343b] flex gap-x-1 justify-center items-center mb-4 w-fit px-2.5 py-1.5 text-xs rounded-sm bg-[#18181B]"]),children:[v(vE,{size:14})," ",v("span",{children:"Overview"})]}),v("div",{className:L(["flex flex-col gap-y-1"]),children:[v("div",{className:L(["text-sm font-bold text-white overflow-x-hidden"]),children:v("div",{className:"flex items-center gap-x-2 truncate",children:t.name})}),v("div",{className:L(["flex gap-x-2"]),children:[!l&&v(De,{children:v("div",{className:L(["text-xs text-gray-400"]),children:["• Render time: ",t.totalTime.toFixed(0),"ms"]})}),v("div",{className:L(["text-xs text-gray-400 mb-4"]),children:["• Renders: ",t.count,"x"]})]})]})]}),i&&!u&&v("div",{className:L(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex relative"]),children:[v("button",{onClick:()=>{s(!1),localStorage.setItem("react-scan-tip-shown","false")},className:L(["absolute right-2 top-2 rounded-sm p-1 hover:bg-[#18181B]"]),children:v(Nu,{size:12})}),v("div",{className:L(["w-1 bg-[#d36cff]"])}),v("div",{className:L(["flex-1"]),children:[v("div",{className:L(["px-3 py-2 text-gray-100 text-xs font-semibold"]),children:"How to stop renders"}),v("div",{className:L(["px-3 pb-2 text-gray-400 text-[10px]"]),children:"Stop the following props, state and context from changing between renders, and wrap the component in React.memo if not already"})]})]}),u&&v("div",{className:L(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex"]),children:[v("div",{className:L(["w-1 bg-[#d36cff]"])}),v("div",{className:L(["flex-1"]),children:[v("div",{className:L(["px-3 py-2 text-gray-100 text-sm font-semibold"]),children:"No changes detected"}),v("div",{className:L(["px-3 pb-2 text-gray-400 text-xs"]),children:"This component would not of rendered if it was memoized"})]})]}),v("div",{className:L(["flex w-full"]),children:[v("div",{className:L(["flex flex-col border border-[#27272A] rounded-l-sm overflow-hidden w-1/3"]),children:[v("div",{className:L(["text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Props"}),t.changes.props.length>0?t.changes.props.toSorted((d,h)=>h.count-d.count).map(d=>v("div",{className:L(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[v("span",{className:L(["text-white "]),children:d.name}),v("div",{className:L([" text-[8px]  text-[#d36cff] pl-1 py-1 "]),children:[d.count,"/",t.count,"x"]})]},d.name)):v("div",{className:L(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),v("div",{className:L(["flex flex-col border border-[#27272A] border-l-0 overflow-hidden w-1/3"]),children:[v("div",{className:L([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed State"}),t.changes.state.length>0?t.changes.state.toSorted((d,h)=>h.count-d.count).map(d=>v("div",{className:L(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[v("span",{className:L(["text-white "]),children:["index ",d.index]}),v("div",{className:L(["rounded-full  text-[#d36cff] pl-1 py-1 text-[8px]"]),children:[d.count,"/",t.count,"x"]})]},d.index)):v("div",{className:L(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),v("div",{className:L(["flex flex-col border border-[#27272A] border-l-0 rounded-r-sm overflow-hidden w-1/3"]),children:[v("div",{className:L([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Context"}),t.changes.context.length>0?t.changes.context.toSorted((d,h)=>h.count-d.count).map(d=>v("div",{className:L(["flex flex-col justify-between items-center border-t  border-[#27272A] px-1 py-1 bg-[#0A0A0A] text-[10px] overflow-x-auto"]),children:[v("span",{className:L(["text-white "]),children:d.name}),v("div",{className:L(["rounded-full text-[#d36cff] pl-1 py-1 text-[8px] text-wrap"]),children:[d.count,"/",t.count,"x"]})]},d.name)):v("div",{className:L(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A] py-2"]),children:"No changes"})]})]})]})},qE=()=>{const{notificationState:e,setNotificationState:t}=bn(),[r,i]=Ne("..."),s=he(null);if(Ce(()=>{const l=setInterval(()=>{i(u=>u==="..."?"":u+".")},500);return()=>clearInterval(l)},[]),!e.selectedEvent)return v("div",{ref:s,className:L(["h-full w-full flex flex-col items-center justify-center relative py-2 px-4"]),children:[v("div",{className:L(["p-2 flex justify-center items-center border-[#27272A] absolute top-0 right-0"]),children:v("button",{onClick:()=>{Ze.value={view:"none"}},children:v(Nu,{size:18,className:"text-[#6F6F78]"})})}),v("div",{className:L(["flex flex-col items-start pt-5 bg-[#0A0A0A] p-5 rounded-sm max-w-md"," shadow-lg"]),children:v("div",{className:L(["flex flex-col items-start gap-y-4"]),children:[v("div",{className:L(["flex items-center"]),children:v("span",{className:L(["text-zinc-400 font-medium text-[17px]"]),children:["Scanning for slowdowns",r]})}),e.events.length!==0&&v("p",{className:L(["text-xs"]),children:["Click on an item in the"," ",v("span",{className:L(["text-purple-400"]),children:"History"})," list to get started"]}),v("p",{className:L(["text-zinc-600 text-xs"]),children:"You don't need to keep this panel open for React Scan to record slowdowns"}),v("p",{className:L(["text-zinc-600 text-xs"]),children:"Enable audio alerts to hear a delightful ding every time a large slowdown is recorded"}),v("button",{onClick:()=>{if(e.audioNotificationsOptions.enabled){t(u=>{var d,h;return((d=u.audioNotificationsOptions.audioContext)==null?void 0:d.state)!=="closed"&&((h=u.audioNotificationsOptions.audioContext)==null||h.close()),localStorage.setItem("react-scan-notifications-audio","false"),{...u,audioNotificationsOptions:{audioContext:null,enabled:!1}}});return}localStorage.setItem("react-scan-notifications-audio","true");const l=new AudioContext;Om(l),t(u=>({...u,audioNotificationsOptions:{enabled:!0,audioContext:l}}))},className:L(["px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-sm w-full"," text-sm flex items-center gap-x-2 justify-center"]),children:e.audioNotificationsOptions.enabled?v(De,{children:v("span",{className:"flex items-center gap-x-1",children:"Disable audio alerts"})}):v(De,{children:v("span",{className:"flex items-center gap-x-1",children:"Enable audio alerts"})})})]})})]});switch(e.route){case"render-visualization":return v(Bc,{children:v(LE,{selectedEvent:e.selectedEvent})});case"render-explanation":{if(!e.selectedFiber)throw new Error("Invariant: must have selected fiber when viewing render explanation");return v(Bc,{children:v(HE,{selectedFiber:e.selectedFiber,selectedEvent:e.selectedEvent})})}case"other-visualization":return v(Bc,{children:v("div",{className:L(["flex w-full h-full flex-col overflow-y-auto"]),id:"overview-scroll-container",children:v(AE,{selectedEvent:e.selectedEvent})})});case"optimize":return v(Bc,{children:v(NE,{selectedEvent:e.selectedEvent})})}e.route},Bc=({children:e})=>{const{notificationState:t}=bn();if(!t.selectedEvent)throw new Error("Invariant: d must have selected event when viewing render explanation");return v("div",{className:L(["w-full h-full flex flex-col gap-y-2"]),children:[v("div",{className:L(["h-[50px] w-full"]),children:v(_E,{selectedEvent:t.selectedEvent})}),v("div",{className:L(["h-calc(100%-50px) flex flex-col overflow-y-auto px-3"]),children:e})]})},IE=({selectedEvent:e})=>{const t=gl(e);switch(e.kind){case"interaction":return v("div",{className:L(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:v("div",{className:L(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[v("div",{className:L(["flex items-center gap-x-2 "]),children:[v("span",{className:L(["text-[#5a5a5a] mr-0.5"]),children:e.type==="click"?"Clicked ":"Typed in "}),v("span",{children:al(e.componentPath)}),v("div",{className:L(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",t==="low"&&"bg-green-500/50",t==="needs-improvement"&&"bg-[#b77116]",t==="high"&&"bg-[#b94040]"]),children:[Ot(e.timing).toFixed(0),"ms processing time"]})]}),v("div",{className:L(["flex items-center gap-x-2  justify-end ml-auto"]),children:v("div",{className:L(["p-2 flex justify-center items-center border-[#27272A]"]),children:v("button",{onClick:()=>{Ze.value={view:"none"}},title:"Close",children:v(Nu,{size:18,className:"text-[#6F6F78]"})})})})]})});case"dropped-frames":return v("div",{className:L(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:v("div",{className:L(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[v("div",{className:L(["flex items-center gap-x-2 "]),children:["FPS Drop",v("div",{className:L(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",t==="low"&&"bg-green-500/50",t==="needs-improvement"&&"bg-[#b77116]",t==="high"&&"bg-[#b94040]"]),children:["dropped to ",e.fps," FPS"]})]}),v("div",{className:L(["flex items-center gap-x-2 w-2/4 justify-end ml-auto"]),children:v("div",{className:L(["p-2 flex justify-center items-center border-[#27272A]"]),children:v("button",{onClick:()=>{Ze.value={view:"none"}},children:v(Nu,{size:18,className:"text-[#6F6F78]"})})})})]})})}},YE=({flashingItemsCount:e,totalEvents:t})=>{const[r,i]=Ne(!1),s=he(0),l=he(0);return Ce(()=>{if(s.current>=t)return;const u=Date.now(),d=250,h=u-l.current;if(h>=d){i(!1);const p=setTimeout(()=>{s.current=t,l.current=Date.now(),i(!0),setTimeout(()=>{i(!1)},2e3)},50);return()=>clearTimeout(p)}else{const p=d-h,y=setTimeout(()=>{i(!1),setTimeout(()=>{s.current=t,l.current=Date.now(),i(!0),setTimeout(()=>{i(!1)},2e3)},50)},p);return()=>clearTimeout(y)}},[e]),r},lw=({item:e,shouldFlash:t})=>{var d;const[r,i]=Ne(!1),s=e.events.map(gl).reduce((h,p)=>{switch(p){case"high":return"high";case"needs-improvement":return h==="high"?"high":"needs-improvement";case"low":return h}},"low"),l=e.events.reduce((h,p)=>t(p.id)?h+1:h,0),u=YE({flashingItemsCount:l,totalEvents:e.events.length});return v("div",{className:L(["flex flex-col gap-y-0.5"]),children:[v("button",{onClick:()=>i(h=>!h),className:L(["pl-2 py-1.5  text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",u&&!r&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[v("div",{className:L(["w-4/5 flex items-center justify-start h-full text-xs truncate gap-x-1.5"]),children:[v("span",{className:L(["min-w-fit"]),children:v(Tx,{className:L(["text-[#A1A1AA] transition-transform",r?"rotate-90":""]),size:14},`chevron-${e.timestamp}`)}),v("span",{className:L(["text-xs"]),children:e.kind==="collapsed-frame-drops"?"FPS Drops":al(((d=e.events.at(0))==null?void 0:d.componentPath)??[])})]}),v("div",{className:L(["ml-auto min-w-fit flex justify-end items-center"]),children:v("div",{style:{lineHeight:"10px"},className:L(["w-fit flex items-center text-[10px] justify-center h-full text-white px-1 py-1 rounded-sm font-semibold",s==="low"&&"bg-green-500/60",s==="needs-improvement"&&"bg-[#b77116] text-[10px]",s==="high"&&"bg-[#b94040]"]),children:["x",e.events.length]})})]}),r&&v(BE,{children:e.events.toSorted((h,p)=>p.timestamp-h.timestamp).map(h=>v(Cx,{event:h,shouldFlash:t(h.id)}))})]})},BE=({children:e})=>v("div",{className:"relative pl-6 flex flex-col gap-y-1",children:[v("div",{className:"absolute left-3 top-0 bottom-0 w-px bg-[#27272A]"}),e]}),XE=e=>{const t=he([]),[r,i]=Ne(new Set),s=he(!0);return Ce(()=>{if(s.current){s.current=!1,t.current=e;return}const l=new Set(e.map(h=>h.id)),u=new Set(t.current.map(h=>h.id)),d=new Set;l.forEach(h=>{u.has(h)||d.add(h)}),d.size>0&&(i(d),setTimeout(()=>{i(new Set)},2e3)),t.current=e},[e]),l=>r.has(l)},FE=({shouldFlash:e})=>{const[t,r]=Ne(e);return Ce(()=>{if(e){r(!0);const i=setTimeout(()=>{r(!1)},1e3);return()=>clearTimeout(i)}},[e]),t},Cx=({event:e,shouldFlash:t})=>{var u,d;const{notificationState:r,setNotificationState:i}=bn(),s=gl(e),l=FE({shouldFlash:t});switch(e.kind){case"interaction":return v("button",{onClick:()=>{i(h=>({...h,selectedEvent:e,route:"render-visualization",selectedFiber:null}))},className:L(["pl-2 py-1.5  text-sm flex w-full items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",e.id===((u=r.selectedEvent)==null?void 0:u.id)&&"bg-[#18181B]",l&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[v("div",{className:L(["w-4/5 flex items-center justify-start h-full gap-x-1.5"]),children:[v("span",{className:L(["min-w-fit text-xs"]),children:Gn(()=>{switch(e.type){case"click":return v(yE,{size:14});case"keyboard":return v(bE,{size:14})}})}),v("span",{className:L(["text-xs pr-1 truncate"]),children:al(e.componentPath)})]}),v("div",{className:L([" min-w-fit flex justify-end items-center ml-auto"]),children:v("div",{style:{lineHeight:"10px"},className:L(["gap-x-0.5 w-fit flex items-end justify-center h-full text-white px-1 py-1 rounded-sm font-semibold text-[10px]",s==="low"&&"bg-green-500/50",s==="needs-improvement"&&"bg-[#b77116] text-[10px]",s==="high"&&"bg-[#b94040]"]),children:v("div",{style:{lineHeight:"10px"},className:L(["text-[10px] text-white flex items-end"]),children:[Ot(e.timing).toFixed(0),"ms"]})})})]});case"dropped-frames":return v("button",{onClick:()=>{i(h=>({...h,selectedEvent:e,route:"render-visualization",selectedFiber:null}))},className:L(["pl-2 py-1.5  w-full text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",e.id===((d=r.selectedEvent)==null?void 0:d.id)&&"bg-[#18181B]",l&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[v("div",{className:L(["w-4/5 flex items-center justify-start h-full text-xs truncate"]),children:[v(xE,{size:14,className:"mr-1.5"})," FPS Drop"]}),v("div",{className:L([" min-w-fit flex justify-end items-center ml-auto"]),children:v("div",{style:{lineHeight:"10px"},className:L(["w-fit flex items-center justify-center h-full text-white px-1 py-1 rounded-sm text-[10px] font-bold",s==="low"&&"bg-green-500/60",s==="needs-improvement"&&"bg-[#b77116] text-[10px]",s==="high"&&"bg-[#b94040]"]),children:[e.fps," FPS"]})})]})}},PE=e=>e.reduce((r,i)=>{const s=r.at(-1);if(!s)return[{kind:"single",event:i,timestamp:i.timestamp}];switch(s.kind){case"collapsed-keyboard":return i.kind==="interaction"&&i.type==="keyboard"&&i.componentPath.join("-")===s.events[0].componentPath.join("-")?[...r.filter(u=>u!==s),{kind:"collapsed-keyboard",events:[...s.events,i],timestamp:Math.max(...[...s.events,i].map(u=>u.timestamp))}]:[...r,{kind:"single",event:i,timestamp:i.timestamp}];case"single":return s.event.kind==="interaction"&&s.event.type==="keyboard"&&i.kind==="interaction"&&i.type==="keyboard"&&s.event.componentPath.join("-")===i.componentPath.join("-")?[...r.filter(u=>u!==s),{kind:"collapsed-keyboard",events:[s.event,i],timestamp:Math.max(s.event.timestamp,i.timestamp)}]:s.event.kind==="dropped-frames"&&i.kind==="dropped-frames"?[...r.filter(u=>u!==s),{kind:"collapsed-frame-drops",events:[s.event,i],timestamp:Math.max(s.event.timestamp,i.timestamp)}]:[...r,{kind:"single",event:i,timestamp:i.timestamp}];case"collapsed-frame-drops":return i.kind==="dropped-frames"?[...r.filter(u=>u!==s),{kind:"collapsed-frame-drops",events:[...s.events,i],timestamp:Math.max(...[...s.events,i].map(u=>u.timestamp))}]:[...r,{kind:"single",event:i,timestamp:i.timestamp}]}},[]),Mx=(e=150)=>{const{notificationState:t}=bn(),[r,i]=Ne(t.events);return Ce(()=>{setTimeout(()=>{i(t.events)},e)},[t.events]),[r,i]},GE=()=>{const{notificationState:e,setNotificationState:t}=bn(),r=XE(e.events),[i,s]=Mx(),l=PE(i).toSorted((u,d)=>d.timestamp-u.timestamp);return v("div",{className:L(["w-full h-full gap-y-2 flex flex-col border-r border-[#27272A] overflow-y-auto"]),children:[v("div",{className:L(["text-sm text-[#65656D] pl-3 pr-1 w-full flex items-center justify-between"]),children:[v("span",{children:"History"}),v(kx,{wrapperProps:{className:"h-full flex items-center justify-center ml-auto"},triggerContent:v("button",{className:L(["hover:bg-[#18181B] rounded-full p-2"]),title:"Clear all events",onClick:()=>{rl.getState().actions.clear(),t(u=>({...u,selectedEvent:null,selectedFiber:null,route:u.route==="other-visualization"?"other-visualization":"render-visualization"})),s([])},children:v(wE,{className:L([""]),size:16})}),children:v("div",{className:L(["w-full flex justify-center"]),children:"Clear all events"})})]}),v("div",{className:L(["flex flex-col px-1 gap-y-1"]),children:[l.length===0&&v("div",{className:L(["flex items-center justify-center text-zinc-500 text-sm py-4"]),children:"No Events"}),l.map(u=>Gn(()=>{switch(u.kind){case"collapsed-keyboard":return v(lw,{shouldFlash:r,item:u});case"single":return v(Cx,{event:u.event,shouldFlash:r(u.event.id)},u.event.id);case"collapsed-frame-drops":return v(lw,{shouldFlash:r,item:u})}}))]})]})},VE=e=>Object.values(e).map(r=>({id:Yn(),totalTime:r.nodeInfo.reduce((i,s)=>i+s.selfTime,0),count:r.nodeInfo.length,name:r.nodeInfo[0].name,deletedAll:!1,parents:r.parents,hasMemoCache:r.hasMemoCache,wasFiberRenderMount:r.wasFiberRenderMount,elements:r.nodeInfo.map(i=>i.element),changes:{context:r.changes.fiberContext.current.filter(i=>r.changes.fiberContext.changesCounts.get(i.name)).map(i=>({name:String(i.name),count:r.changes.fiberContext.changesCounts.get(i.name)??0})),props:r.changes.fiberProps.current.filter(i=>r.changes.fiberProps.changesCounts.get(i.name)).map(i=>({name:String(i.name),count:r.changes.fiberProps.changesCounts.get(i.name)??0})),state:r.changes.fiberState.current.filter(i=>r.changes.fiberState.changesCounts.get(Number(i.name))).map(i=>({index:i.name,count:r.changes.fiberState.changesCounts.get(Number(i.name))??0}))}})),QE=e=>{Ce(()=>{const r=setInterval(()=>{e.forEach(i=>{i.groupedFiberRenders&&i.groupedFiberRenders.forEach(s=>{if(s.deletedAll)return;if(!s.elements||s.elements.length===0){s.deletedAll=!0;return}const l=s.elements.length;s.elements=s.elements.filter(u=>u&&u.isConnected),s.elements.length===0&&l>0&&(s.deletedAll=!0)})})},5e3);return()=>{clearInterval(r)}},[e])},Nx=()=>{const e=lE(),t=[];return QE(t),e.state.events.forEach(r=>{const i=r.kind==="interaction"?r.data.meta.detailedTiming.fiberRenders:r.data.meta.fiberRenders,s=VE(i),l=s.reduce((u,d)=>u+d.totalTime,0);switch(r.kind){case"interaction":{const{commitEnd:u,jsEndDetail:d,interactionStartDetail:h,rafStart:p}=r.data.meta.detailedTiming,y=Math.max(0,d-h-l),g=Math.max(r.data.meta.latency-(u-h),0);t.push({componentPath:r.data.meta.detailedTiming.componentPath,groupedFiberRenders:s,id:r.id,kind:"interaction",memory:null,timestamp:r.data.startAt,type:r.data.meta.detailedTiming.interactionType==="keyboard"?"keyboard":"click",timing:{renderTime:l,kind:"interaction",otherJSTime:y,framePreparation:p-d,frameConstruction:u-p,frameDraw:g}});return}case"long-render":{t.push({kind:"dropped-frames",id:r.id,memory:null,timing:{kind:"dropped-frames",renderTime:l,otherTime:r.data.meta.latency},groupedFiberRenders:s,timestamp:r.data.startAt,fps:r.data.meta.fps});return}}}),t},WE=1e3,ZE=()=>{const{notificationState:e,setNotificationState:t}=bn(),r=he(null),i=he(null),s=he(0),[l]=Mx(),u=l.filter(d=>gl(d)==="high").length;return Ce(()=>{const d=localStorage.getItem("react-scan-notifications-audio");if(d!=="false"&&d!=="true"){localStorage.setItem("react-scan-notifications-audio","false");return}if(d!=="false"){t(p=>p.audioNotificationsOptions.enabled?p:{...p,audioNotificationsOptions:{enabled:!0,audioContext:new AudioContext}});return}},[]),Ce(()=>{const{audioNotificationsOptions:d}=e;if(!d.enabled||u===0||r.current&&r.current>=u)return;i.current&&clearTimeout(i.current);const p=Date.now()-s.current,y=Math.max(0,WE-p);i.current=setTimeout(()=>{Om(d.audioContext),r.current=u,s.current=Date.now(),i.current=null},y)},[u]),Ce(()=>{u===0&&(r.current=null)},[u]),Ce(()=>()=>{i.current&&clearTimeout(i.current)},[]),null},KE=Nm((e,t)=>{const r=Nx(),[i,s]=Ne({detailsExpanded:!1,events:r,filterBy:"latest",moreInfoExpanded:!1,route:"render-visualization",selectedEvent:r.toSorted((l,u)=>l.timestamp-u.timestamp).at(-1)??null,selectedFiber:null,routeMessage:null,audioNotificationsOptions:{enabled:!1,audioContext:null}});return i.events=r,v(Sx.Provider,{value:{notificationState:i,setNotificationState:s,setRoute:({route:l,routeMessage:u})=>{s(d=>{const h={...d,route:l,routeMessage:u};switch(l){case"render-visualization":return Ls(),{...h,selectedFiber:null};case"optimize":return Ls(),{...h,selectedFiber:null};case"other-visualization":return Ls(),{...h,selectedFiber:null};case"render-explanation":return Ls(),h}})}},children:[v(ZE,{}),v(JE,{ref:t})]})}),JE=Nm((e,t)=>{var i;const{notificationState:r}=bn();return v("div",{ref:t,className:L(["h-full w-full flex flex-col"]),children:[r.selectedEvent&&v("div",{className:L(["w-full h-[48px] flex flex-col",r.moreInfoExpanded&&"h-[235px]",r.moreInfoExpanded&&r.selectedEvent.kind==="dropped-frames"&&"h-[150px]"]),children:[v(IE,{selectedEvent:r.selectedEvent}),r.moreInfoExpanded&&v(eC,{})]}),v("div",{className:L(["flex ",r.selectedEvent?"h-[calc(100%-48px)]":"h-full",r.moreInfoExpanded&&"h-[calc(100%-200px)]",r.moreInfoExpanded&&((i=r.selectedEvent)==null?void 0:i.kind)==="dropped-frames"&&"h-[calc(100%-150px)]"]),children:[v("div",{className:L(["h-full min-w-[200px]"]),children:v(GE,{})}),v("div",{className:L(["w-[calc(100%-200px)] h-full overflow-y-auto"]),children:v(qE,{})})]})]})}),eC=()=>{const{notificationState:e}=bn();if(!e.selectedEvent)throw new Error("Invariant must have selected event for more info");const t=e.selectedEvent;return v("div",{className:L(["px-4 py-2 border-b border-[#27272A] bg-[#18181B]/50 h-[calc(100%-40px)]",t.kind==="dropped-frames"&&"h-[calc(100%-25px)]"]),children:v("div",{className:L(["flex flex-col gap-y-4 h-full"]),children:Gn(()=>{switch(t.kind){case"interaction":return v(De,{children:[v("div",{className:L(["flex items-center gap-x-3"]),children:[v("span",{className:"text-[#6F6F78] text-xs font-medium",children:t.type==="click"?"Clicked component location":"Typed in component location"}),v("div",{className:"font-mono text-[#E4E4E7] flex items-center bg-[#27272A] pl-2 py-1 rounded-sm overflow-x-auto",children:t.componentPath.toReversed().map((r,i)=>v(De,{children:[v("span",{style:{lineHeight:"14px"},className:"text-[10px] whitespace-nowrap",children:r},r),i<t.componentPath.length-1&&v("span",{className:"text-[#6F6F78] mx-0.5",children:"‹"})]}))})]}),v("div",{className:L(["flex items-center gap-x-3"]),children:[v("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),v("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[Ot(t.timing).toFixed(0),"ms"]})]}),v("div",{className:L(["flex items-center gap-x-3"]),children:[v("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),v("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]});case"dropped-frames":return v(De,{children:[v("div",{className:L(["flex items-center gap-x-3"]),children:[v("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),v("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[Ot(t.timing).toFixed(0),"ms"]})]}),v("div",{className:L(["flex items-center gap-x-3"]),children:[v("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),v("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]})}})})})},tC=zm(()=>{var w;const e=Nx(),[t,r]=Ne(e);Ce(()=>{const b=setTimeout(()=>{r(e)},600);return()=>{clearTimeout(b)}},[e]);const i=oe.inspectState,s=i.value.kind==="inspecting",l=i.value.kind==="focused",[u,d]=Ne([]),h=dt(()=>{switch(oe.inspectState.value.kind){case"inspecting":{Ze.value={view:"none"},oe.inspectState.value={kind:"inspect-off"};return}case"focused":{Ze.value={view:"inspector"},oe.inspectState.value={kind:"inspecting",hoveredDomElement:null};return}case"inspect-off":{Ze.value={view:"none"},oe.inspectState.value={kind:"inspecting",hoveredDomElement:null};return}case"uninitialized":return}},[]),p=dt(b=>{if(b.preventDefault(),b.stopPropagation(),!Ue.instrumentation)return;const S=!Ue.instrumentation.isPaused.value;Ue.instrumentation.isPaused.value=S;const T=Ur("react-scan-options");Wt("react-scan-options",{...T,enabled:!S})},[]);tl(()=>{oe.inspectState.value.kind==="uninitialized"&&(oe.inspectState.value={kind:"inspect-off"})});let y=null,g="#999";return s?(y=v(ot,{name:"icon-inspect"}),g="#8e61e3"):l?(y=v(ot,{name:"icon-focus"}),g="#8e61e3"):(y=v(ot,{name:"icon-inspect"}),g="#999"),Tm(()=>{if(Ze.value.view!=="notifications")return;const b=new Set(e.map(S=>S.id));d([...b.values()])},[e.length,Ze.value.view]),v("div",{className:"flex max-h-9 min-h-9 flex-1 items-stretch overflow-hidden",children:[v("div",{className:"h-full flex items-center min-w-fit",children:v("button",{type:"button",id:"react-scan-inspect-element",title:"Inspect element",onClick:h,className:"button flex items-center justify-center h-full w-full pl-3 pr-2.5",style:{color:g},children:y})}),v("div",{className:"h-full flex items-center justify-center",children:v("button",{type:"button",id:"react-scan-notifications",title:"Notifications",onClick:()=>{switch(oe.inspectState.value.kind!=="inspect-off"&&(oe.inspectState.value={kind:"inspect-off"}),Ze.value.view){case"inspector":{oe.inspectState.value={kind:"inspect-off"};const b=new Set(e.map(S=>S.id));d([...b.values()]),Ze.value={view:"notifications"};return}case"notifications":{Ze.value={view:"none"};return}case"none":{const b=new Set(e.map(S=>S.id));d([...b.values()]),Ze.value={view:"notifications"};return}}},className:"button flex items-center justify-center h-full pl-2.5 pr-2.5",style:{color:g},children:v(pE,{events:t.filter(b=>!u.includes(b.id)).map(b=>gl(b)==="high"),size:16,className:L(["text-[#999]",Ze.value.view==="notifications"&&"text-[#8E61E3]"])})})}),v(Y3,{checked:!((w=Ue.instrumentation)!=null&&w.isPaused.value),onChange:p,className:"place-self-center",title:"Outline Re-renders"}),Ue.options.value.showFPS&&v(X3,{})]})}),nC=oi(()=>oe.inspectState.value.kind==="inspecting"),rC=oi(()=>L("relative","flex-1","flex flex-col","rounded-t-lg","overflow-hidden","opacity-100","transition-[opacity]",nC.value&&"opacity-0 duration-0 delay-0")),aC=oi(()=>Ze.value.view==="inspector"),iC=oi(()=>Ze.value.view==="notifications"),oC=()=>v("div",{className:L("flex flex-1 flex-col","overflow-hidden z-10","rounded-lg","bg-black","opacity-100","transition-[border-radius]","peer-hover/left:rounded-l-none","peer-hover/right:rounded-r-none","peer-hover/top:rounded-t-none","peer-hover/bottom:rounded-b-none"),children:[v("div",{className:rC,children:[v(I3,{}),v("div",{className:L("relative","flex-1 flex","text-white","bg-[#0A0A0A]","transition-opacity delay-150","overflow-hidden","border-b border-[#222]"),children:[v(cw,{isOpen:aC,children:v(G4,{})}),v(cw,{isOpen:iC,children:v(KE,{})})]})]}),v(tC,{})]}),cw=({isOpen:e,children:t})=>v("div",{className:L("flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",e.value&&"opacity-100 delay-150 pointer-events-auto"),children:v("div",{className:"absolute inset-0 flex",children:t})}),Xc=(e,t,r)=>e+(t-e)*r,Ih={frameInterval:1e3/60,speeds:{fast:.51,slow:.1,off:0}},Ji=cr&&window.devicePixelRatio||1,sC=()=>{const e=he(null),t=he(null),r=he(null),i=he(null),s=he(null),l=he(0),u=he(),d=he(new Map),h=he(!1),p=he(0),y=(E,O,R,Y)=>{E.save(),E.strokeStyle="white",E.fillStyle="white",E.lineWidth=1.5;const N=Y*.6,H=Y*.5,W=O+(Y-N)/2,J=R;E.beginPath(),E.arc(W+N/2,J+H/2,N/2,Math.PI,0,!1),E.stroke();const te=Y*.8,ie=Y*.5,re=O+(Y-te)/2,ge=R+H/2;E.fillRect(re,ge,te,ie),E.restore()},g=(E,O,R,Y)=>{if(!Y)return;const N=24,H=8,J=((Y==null?void 0:Y.type)&&Nt(Y.type))??"Unknown";E.save(),E.font="12px system-ui, -apple-system, sans-serif";const ie=E.measureText(J).width,re=R==="locked"?14:0,ge=R==="locked"?6:0,de=ie+H*2+re+ge,Te=O.left,Le=O.top-N-4;if(E.fillStyle="rgb(37, 37, 38, .75)",E.beginPath(),E.roundRect(Te,Le,de,N,3),E.fill(),R==="locked"){const tn=Te+H,Ir=Le+(N-re)/2+2;y(E,tn,Ir,re),i.current={x:tn,y:Ir,width:re,height:re}}else i.current=null;E.fillStyle="white",E.textBaseline="middle";const It=Te+H+(R==="locked"?re+ge:0);E.fillText(J,It,Le+N/2),E.restore()},w=(E,O,R,Y)=>{if(!r.current)return;const N=r.current;O.clearRect(0,0,E.width,E.height),O.strokeStyle="rgba(142, 97, 227, 0.5)",O.fillStyle="rgba(173, 97, 230, 0.10)",R==="locked"?O.setLineDash([]):O.setLineDash([4]),O.lineWidth=1,O.fillRect(N.left,N.top,N.width,N.height),O.strokeRect(N.left,N.top,N.width,N.height),g(O,N,R,Y)},b=(E,O,R,Y,N,H)=>{const W=Ue.options.value.animationSpeed,J=Ih.speeds[W]??Ih.speeds.off,te=ie=>{if(ie-p.current<Ih.frameInterval){l.current=requestAnimationFrame(te);return}if(p.current=ie,!r.current){cancelAnimationFrame(l.current);return}r.current={left:Xc(r.current.left,R.left,J),top:Xc(r.current.top,R.top,J),width:Xc(r.current.width,R.width,J),height:Xc(r.current.height,R.height,J)},w(E,O,Y,N),Math.abs(r.current.left-R.left)>.1||Math.abs(r.current.top-R.top)>.1||Math.abs(r.current.width-R.width)>.1||Math.abs(r.current.height-R.height)>.1?l.current=requestAnimationFrame(te):(r.current=R,w(E,O,Y,N),cancelAnimationFrame(l.current),O.restore())};cancelAnimationFrame(l.current),clearTimeout(u.current),l.current=requestAnimationFrame(te),u.current=setTimeout(()=>{cancelAnimationFrame(l.current),r.current=R,w(E,O,Y,N),O.restore()},1e3)},S=(E,O,R,Y,N)=>{if(O.save(),!r.current){r.current=R,w(E,O,Y,N),O.restore();return}b(E,O,R,Y,N)},T=async(E,O,R,Y)=>{if(!E||!O||!R)return;const{parentCompositeFiber:N}=Ga(E),H=await V4(E);!N||!H||S(O,R,H,Y,N)},M=()=>{for(const E of d.current.values())E==null||E()},_=E=>{const O=E.getContext("2d");O&&O.clearRect(0,0,E.width,E.height),r.current=null,i.current=null,s.current=null,E.classList.remove("fade-in"),h.current=!1},C=E=>{if(!e.current||h.current)return;const O=Y=>{!e.current||Y.propertyName!=="opacity"||!h.current||(e.current.removeEventListener("transitionend",O),_(e.current),E==null||E())},R=d.current.get("fade-out");R&&(R(),d.current.delete("fade-out")),e.current.addEventListener("transitionend",O),d.current.set("fade-out",()=>{var Y;(Y=e.current)==null||Y.removeEventListener("transitionend",O)}),h.current=!0,e.current.classList.remove("fade-in"),requestAnimationFrame(()=>{var Y;(Y=e.current)==null||Y.classList.add("fade-out")})},A=()=>{e.current&&(h.current=!1,e.current.classList.remove("fade-out"),requestAnimationFrame(()=>{var E;(E=e.current)==null||E.classList.add("fade-in")}))},U=E=>{E!==s.current&&(s.current=E,Op.has(E.tagName)?C():A(),oe.inspectState.value={kind:"inspecting",hoveredDomElement:E})},D=()=>{!r.current||!e.current||h.current||C()},P=ex(E=>{if(oe.inspectState.peek().kind!=="inspecting"||!t.current)return;t.current.style.pointerEvents="none";const R=document.elementFromPoint((E==null?void 0:E.clientX)??0,(E==null?void 0:E.clientY)??0);if(t.current.style.removeProperty("pointer-events"),clearTimeout(u.current),R&&R!==e.current){const{parentCompositeFiber:Y}=Ga(R);if(Y){const N=Su(Y);if(N){U(N);return}}}D()},32),G=(E,O)=>{const R=i.current;if(!R)return!1;const Y=O.getBoundingClientRect(),N=O.width/Y.width,H=O.height/Y.height,W=(E.clientX-Y.left)*N,J=(E.clientY-Y.top)*H,te=W/Ji,ie=J/Ji;return te>=R.x&&te<=R.x+R.width&&ie>=R.y&&ie<=R.y+R.height},ee=E=>{E.kind==="focused"&&(oe.inspectState.value={kind:"inspecting",hoveredDomElement:E.focusedDomElement})},ne=E=>{var J;const O=["react-scan-inspect-element","react-scan-power"];if(E.target instanceof HTMLElement&&O.includes(E.target.id))return;const R=(J=s.current)==null?void 0:J.tagName;if(R&&Op.has(R))return;E.preventDefault(),E.stopPropagation();const Y=s.current??document.elementFromPoint(E.clientX,E.clientY);if(!Y)return;const N=E.composedPath().at(0);if(N instanceof HTMLElement&&O.includes(N.id)){const te=new MouseEvent(E.type,E);te.__reactScanSyntheticEvent=!0,N.dispatchEvent(te);return}const{parentCompositeFiber:H}=Ga(Y);if(!H)return;const W=Su(H);if(!W){s.current=null,oe.inspectState.value={kind:"inspect-off"};return}oe.inspectState.value={kind:"focused",focusedDomElement:W,fiber:H}},ue=E=>{if(E.__reactScanSyntheticEvent)return;const O=oe.inspectState.peek(),R=e.current;if(!(!R||!t.current)){if(G(E,R)){E.preventDefault(),E.stopPropagation(),ee(O);return}O.kind==="inspecting"&&ne(E)}},se=E=>{var Y;if(E.key!=="Escape")return;const O=oe.inspectState.peek();if(e.current&&((Y=document.activeElement)==null?void 0:Y.id)!=="react-scan-root"&&(Ze.value={view:"none"},O.kind==="focused"||O.kind==="inspecting"))switch(E.preventDefault(),E.stopPropagation(),O.kind){case"focused":{A(),r.current=null,s.current=O.focusedDomElement,oe.inspectState.value={kind:"inspecting",hoveredDomElement:O.focusedDomElement};break}case"inspecting":{C(()=>{Xu.value=!1,oe.inspectState.value={kind:"inspect-off"}});break}}},ae=(E,O,R)=>{var N;(N=d.current.get(E.kind))==null||N(),t.current&&E.kind!=="inspecting"&&(t.current.style.pointerEvents="none"),l.current&&cancelAnimationFrame(l.current);let Y;switch(E.kind){case"inspect-off":C();return;case"inspecting":T(E.hoveredDomElement,O,R,"inspecting");break;case"focused":if(!E.focusedDomElement)return;s.current!==E.focusedDomElement&&(s.current=E.focusedDomElement),Ze.value={view:"inspector"},T(E.focusedDomElement,O,R,"locked"),Y=oe.lastReportTime.subscribe(()=>{if(l.current&&r.current){const{parentCompositeFiber:H}=Ga(E.focusedDomElement);H&&T(E.focusedDomElement,O,R,"locked")}}),Y&&d.current.set(E.kind,Y);break}},ye=(E,O)=>{const R=E.getBoundingClientRect();E.width=R.width*Ji,E.height=R.height*Ji,O.scale(Ji,Ji),O.save()},we=()=>{const E=oe.inspectState.peek(),O=e.current;if(!O)return;const R=O==null?void 0:O.getContext("2d");R&&(cancelAnimationFrame(l.current),clearTimeout(u.current),ye(O,R),r.current=null,E.kind==="focused"&&E.focusedDomElement?T(E.focusedDomElement,O,R,"locked"):E.kind==="inspecting"&&E.hoveredDomElement&&T(E.hoveredDomElement,O,R,"inspecting"))},_e=E=>{const O=oe.inspectState.peek(),R=e.current;R&&(O.kind==="inspecting"||G(E,R))&&(E.preventDefault(),E.stopPropagation(),E.stopImmediatePropagation())};return Ce(()=>{const E=e.current;if(!E)return;const O=E==null?void 0:E.getContext("2d");if(!O)return;ye(E,O);const R=oe.inspectState.subscribe(Y=>{ae(Y,E,O)});return window.addEventListener("scroll",we,{passive:!0}),window.addEventListener("resize",we,{passive:!0}),document.addEventListener("pointermove",P,{passive:!0,capture:!0}),document.addEventListener("pointerdown",_e,{capture:!0}),document.addEventListener("click",ue,{capture:!0}),document.addEventListener("keydown",se,{capture:!0}),()=>{M(),R(),window.removeEventListener("scroll",we),window.removeEventListener("resize",we),document.removeEventListener("pointermove",P,{capture:!0}),document.removeEventListener("click",ue,{capture:!0}),document.removeEventListener("pointerdown",_e,{capture:!0}),document.removeEventListener("keydown",se,{capture:!0}),l.current&&cancelAnimationFrame(l.current),clearTimeout(u.current)}},[]),v(De,{children:[v("div",{ref:t,className:L("fixed top-0 left-0 w-screen h-screen","z-[214748365]"),style:{pointerEvents:"none"}}),v("canvas",{ref:e,dir:"ltr",className:L("react-scan-inspector-overlay","fixed top-0 left-0 w-screen h-screen","pointer-events-none","z-[214748367]")})]})},lC=class{constructor(e,t){this.width=e,this.height=t,this.maxWidth=e-be*2,this.maxHeight=t-be*2}rightEdge(e){return this.width-e-be}bottomEdge(e){return this.height-e-be}isFullWidth(e){return e>=this.maxWidth}isFullHeight(e){return e>=this.maxHeight}},eo,il=()=>{const e=window.innerWidth,t=window.innerHeight;return eo&&eo.width===e&&eo.height===t||(eo=new lC(e,t)),eo},cC=(e,t,r,i,s)=>{if(r){if(e==="top-left")return"bottom-right";if(e==="top-right")return"bottom-left";if(e==="bottom-left")return"top-right";if(e==="bottom-right")return"top-left";const[l,u]=t.split("-");if(e==="left")return`${l}-right`;if(e==="right")return`${l}-left`;if(e==="top")return`bottom-${u}`;if(e==="bottom")return`top-${u}`}if(i){if(e==="left")return`${t.split("-")[0]}-right`;if(e==="right")return`${t.split("-")[0]}-left`}if(s){if(e==="top")return`bottom-${t.split("-")[1]}`;if(e==="bottom")return`top-${t.split("-")[1]}`}return t},Ps=(e,t,r)=>{const i=getComputedStyle(document.body).direction==="rtl",s=window.innerWidth,l=window.innerHeight,u=t===vt.width,d=u?t:Math.min(t,s-be*2),h=u?r:Math.min(r,l-be*2);let p,y,g=be,w=s-d-be,b=be,S=l-h-be;switch(e){case"top-right":p=i?-g:w,y=b;break;case"bottom-right":p=i?-g:w,y=S;break;case"bottom-left":p=i?-w:g,y=S;break;case"top-left":p=i?-w:g,y=b;break;default:p=g,y=b;break}return u&&(i?p=Math.min(-g,Math.max(p,-w)):p=Math.max(g,Math.min(p,w)),y=Math.max(b,Math.min(y,S))),{x:p,y}},uC=(e,t)=>{const[r,i]=t.split("-");return e!==r&&e!==i},dC=(e,t,r,i)=>r&&i?!0:!r&&!i?uC(e,t):r?e!==t.split("-")[0]:i?e!==t.split("-")[1]:!1,Fc=(e,t,r)=>{const i=r?vt.width:vt.initialHeight,s=r?il().maxWidth:il().maxHeight,l=e+t;return Math.min(Math.max(i,l),s)},fC=(e,t,r,i,s)=>{const l=getComputedStyle(document.body).direction==="rtl",u=window.innerWidth-be*2,d=window.innerHeight-be*2;let h=t.width,p=t.height,y=r.x,g=r.y;if(l&&e.includes("right")){const M=-r.x+t.width-be,_=Math.min(t.width+i,M);h=Math.min(u,Math.max(vt.width,_)),y=r.x+(h-t.width)}if(l&&e.includes("left")){const M=window.innerWidth-r.x-be,_=Math.min(t.width-i,M);h=Math.min(u,Math.max(vt.width,_))}if(!l&&e.includes("right")){const M=window.innerWidth-r.x-be,_=Math.min(t.width+i,M);h=Math.min(u,Math.max(vt.width,_))}if(!l&&e.includes("left")){const M=r.x+t.width-be,_=Math.min(t.width-i,M);h=Math.min(u,Math.max(vt.width,_)),y=r.x-(h-t.width)}if(e.includes("bottom")){const M=window.innerHeight-r.y-be,_=Math.min(t.height+s,M);p=Math.min(d,Math.max(vt.initialHeight,_))}if(e.includes("top")){const M=r.y+t.height-be,_=Math.min(t.height-s,M);p=Math.min(d,Math.max(vt.initialHeight,_)),g=r.y-(p-t.height)}let w=be,b=window.innerWidth-be-h,S=be,T=window.innerHeight-be-p;return l?y=Math.min(-w,Math.max(y,-b)):y=Math.max(w,Math.min(y,b)),g=Math.max(S,Math.min(g,T)),{newSize:{width:h,height:p},newPosition:{x:y,y:g}}},hC=e=>{const t=il(),r={"top-left":Math.hypot(e.x,e.y),"top-right":Math.hypot(t.maxWidth-e.x,e.y),"bottom-left":Math.hypot(e.x,t.maxHeight-e.y),"bottom-right":Math.hypot(t.maxWidth-e.x,t.maxHeight-e.y)};let i="top-left";for(const s in r)r[s]<r[i]&&(i=s);return i},pC=(e,t,r,i,s=100)=>{const l=r!==void 0?e-r:0,u=i!==void 0?t-i:0,d=window.innerWidth/2,h=window.innerHeight/2,p=l>s,y=l<-s,g=u>s,w=u<-s;if(p||y){const b=t>h;return p?b?"bottom-right":"top-right":b?"bottom-left":"top-left"}if(g||w){const b=e>d;return g?b?"bottom-right":"bottom-left":b?"top-right":"top-left"}return e>d?t>h?"bottom-right":"top-right":t>h?"bottom-left":"top-left"},Pc=({position:e})=>{const t=he(null),r=he(null),i=he(null),s=he(null);Ce(()=>{const d=t.current;if(!d)return;const h=()=>{d.classList.remove("pointer-events-none");const g=oe.inspectState.value.kind==="focused",w=Ze.value.view!=="none";(g||w)&&dC(e,le.value.corner,le.value.dimensions.isFullWidth,le.value.dimensions.isFullHeight)?d.classList.remove("hidden","pointer-events-none","opacity-0"):d.classList.add("hidden","pointer-events-none","opacity-0")},p=le.subscribe(g=>{r.current!==null&&i.current!==null&&s.current!==null&&g.dimensions.width===r.current&&g.dimensions.height===i.current&&g.corner===s.current||(h(),r.current=g.dimensions.width,i.current=g.dimensions.height,s.current=g.corner)}),y=oe.inspectState.subscribe(()=>{h()});return()=>{p(),y(),r.current=null,i.current=null,s.current=null}},[]);const l=dt(d=>{d.preventDefault(),d.stopPropagation();const h=Ep.value;if(!h)return;const p=h.style,{dimensions:y}=le.value,g=d.clientX,w=d.clientY,b=y.width,S=y.height,T=y.position;le.value={...le.value,dimensions:{...y,isFullWidth:!1,isFullHeight:!1,width:b,height:S,position:T}};let M=null;const _=A=>{M||(p.transition="none",M=requestAnimationFrame(()=>{const{newSize:U,newPosition:D}=fC(e,{width:b,height:S},T,A.clientX-g,A.clientY-w);p.transform=`translate3d(${D.x}px, ${D.y}px, 0)`,p.width=`${U.width}px`,p.height=`${U.height}px`;const P=Math.floor(U.width-Fn/2),G=le.value.componentsTree.width,ee=Math.min(P,Math.max(Fn,G));le.value={...le.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:U.width,height:U.height,position:D},componentsTree:{...le.value.componentsTree,width:ee}},M=null}))},C=()=>{M&&(cancelAnimationFrame(M),M=null),document.removeEventListener("pointermove",_),document.removeEventListener("pointerup",C);const{dimensions:A,corner:U}=le.value,D=il(),P=D.isFullWidth(A.width),G=D.isFullHeight(A.height),ee=P&&G;let ne=U;(ee||P||G)&&(ne=hC(A.position));const ue=Ps(ne,A.width,A.height),se=()=>{h.removeEventListener("transitionend",se)};h.addEventListener("transitionend",se),p.transform=`translate3d(${ue.x}px, ${ue.y}px, 0)`,le.value={...le.value,corner:ne,dimensions:{isFullWidth:P,isFullHeight:G,width:A.width,height:A.height,position:ue},lastDimensions:{isFullWidth:P,isFullHeight:G,width:A.width,height:A.height,position:ue}},Wt(zr,{corner:ne,dimensions:le.value.dimensions,lastDimensions:le.value.lastDimensions,componentsTree:le.value.componentsTree})};document.addEventListener("pointermove",_,{passive:!0}),document.addEventListener("pointerup",C)},[]),u=dt(d=>{d.preventDefault(),d.stopPropagation();const h=Ep.value;if(!h)return;const p=h.style,{dimensions:y,corner:g}=le.value,w=il(),b=w.isFullWidth(y.width),S=w.isFullHeight(y.height),T=b&&S,M=(b||S)&&!T;let _=y.width,C=y.height;const A=cC(e,g,T,b,S);e==="left"||e==="right"?(_=b?y.width:w.maxWidth,M&&(_=b?vt.width:w.maxWidth)):(C=S?y.height:w.maxHeight,M&&(C=S?vt.initialHeight:w.maxHeight)),T&&(e==="left"||e==="right"?_=vt.width:C=vt.initialHeight);const U=Ps(A,_,C),D={isFullWidth:w.isFullWidth(_),isFullHeight:w.isFullHeight(C),width:_,height:C,position:U},P=Math.floor(_-vt.width/2),G=le.value.componentsTree.width,ee=Math.floor(_*.3),ne=b?Fn:(e==="left"||e==="right")&&!b?Math.min(P,Math.max(Fn,ee)):Math.min(P,Math.max(Fn,G));requestAnimationFrame(()=>{le.value={corner:A,dimensions:D,lastDimensions:y,componentsTree:{...le.value.componentsTree,width:ne}},p.transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",p.width=`${_}px`,p.height=`${C}px`,p.transform=`translate3d(${U.x}px, ${U.y}px, 0)`}),Wt(zr,{corner:A,dimensions:D,lastDimensions:y,componentsTree:{...le.value.componentsTree,width:ne}})},[]);return v("div",{ref:t,onPointerDown:l,onDblClick:u,className:L("absolute z-50","flex items-center justify-center","group","transition-colors select-none","peer",{"resize-left peer/left":e==="left","resize-right peer/right z-10":e==="right","resize-top peer/top":e==="top","resize-bottom peer/bottom":e==="bottom"}),children:v("span",{className:"resize-line-wrapper",children:v("span",{className:"resize-line",children:v(ot,{name:"icon-ellipsis",size:18,className:L("text-neutral-400",(e==="left"||e==="right")&&"rotate-90")})})})})},uw={horizontal:{width:20,height:48},vertical:{width:48,height:20}},mC=()=>{const e=he(null),t=he(!1),r=he(0),i=he(0),s=he(!1),l=dt((w=!0)=>{if(!e.current)return;const{corner:b}=le.value;let S,T;if(fn.value){const ne=fn.value.orientation||"horizontal",ue=uw[ne];S=ue.width,T=ue.height}else if(t.current){const ne=le.value.lastDimensions;S=Fc(ne.width,0,!0),T=Fc(ne.height,0,!1),s.current&&(s.current=!1)}else S=r.current,T=i.current;let _=Ps(b,S,T);if(fn.value){const{corner:ne,orientation:ue="horizontal"}=fn.value,se=uw[ue];switch(ne){case"top-left":_=ue==="horizontal"?{x:-1,y:be}:{x:be,y:-1};break;case"bottom-left":_=ue==="horizontal"?{x:-1,y:window.innerHeight-se.height-be}:{x:be,y:window.innerHeight-se.height+1};break;case"top-right":_=ue==="horizontal"?{x:window.innerWidth-se.width+1,y:be}:{x:window.innerWidth-se.width-be,y:-1};break;case"bottom-right":default:_=ue==="horizontal"?{x:window.innerWidth-se.width+1,y:window.innerHeight-se.height-be}:{x:window.innerWidth-se.width-be,y:window.innerHeight-se.height+1};break}}const C=S<vt.width||T<vt.initialHeight,A=w&&!C,U=e.current,D=U.style;let P=null;const G=()=>{kh(),U.removeEventListener("transitionend",G),P&&(cancelAnimationFrame(P),P=null)};U.addEventListener("transitionend",G),D.transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",P=requestAnimationFrame(()=>{D.width=`${S}px`,D.height=`${T}px`,D.transform=`translate3d(${_.x}px, ${_.y}px, 0)`,P=null});const ee={isFullWidth:S>=window.innerWidth-be*2,isFullHeight:T>=window.innerHeight-be*2,width:S,height:T,position:_};le.value={corner:b,dimensions:ee,lastDimensions:t?le.value.lastDimensions:S>r.current?ee:le.value.lastDimensions,componentsTree:le.value.componentsTree},A&&Wt(zr,{corner:le.value.corner,dimensions:le.value.dimensions,lastDimensions:le.value.lastDimensions,componentsTree:le.value.componentsTree}),kh()},[]),u=dt(w=>{if(w.preventDefault(),!e.current||w.target.closest("button"))return;const b=e.current,S=b.style,{dimensions:T}=le.value,M=w.clientX,_=w.clientY,C=T.position.x,A=T.position.y;let U=C,D=A,P=null,G=!1,ee=M,ne=_;const ue=ae=>{P||(G=!0,ee=ae.clientX,ne=ae.clientY,P=requestAnimationFrame(()=>{const ye=ee-M,we=ne-_;U=Number(C)+ye,D=Number(A)+we,S.transition="none",S.transform=`translate3d(${U}px, ${D}px, 0)`;const _e=U+T.width,E=D+T.height,O=Math.max(0,-U),R=Math.max(0,_e-window.innerWidth),Y=Math.max(0,-D),N=Math.max(0,E-window.innerHeight),H=Math.min(T.width,O+R),W=Math.min(T.height,Y+N),J=H*T.height+W*T.width-H*W,te=T.width*T.height;let ie=J>te*.35;if(!ie&&Ue.options.value.showFPS){const re=U+T.width,ge=re-100;ie=re<=0||ge>=window.innerWidth||D+T.height<=0||D>=window.innerHeight}if(ie){const re=U+T.width/2,ge=D+T.height/2,de=window.innerWidth/2,Te=window.innerHeight/2;let Le;re<de?Le=ge<Te?"top-left":"bottom-left":Le=ge<Te?"top-right":"bottom-right";let It;const tn=Math.max(O,R),Ir=Math.max(Y,N);It=tn>Ir?"horizontal":"vertical",le.value={...le.value,corner:Le,lastDimensions:{...T,position:Ps(Le,T.width,T.height)}};const ui={corner:Le,orientation:It};fn.value=ui,Wt(au,ui),Wt(zr,le.value),l(!1),document.removeEventListener("pointermove",ue),document.removeEventListener("pointerup",se),P&&(cancelAnimationFrame(P),P=null)}P=null}))},se=()=>{if(!b)return;P&&(cancelAnimationFrame(P),P=null),document.removeEventListener("pointermove",ue),document.removeEventListener("pointerup",se);const ae=Math.abs(ee-M),ye=Math.abs(ne-_),we=Math.sqrt(ae*ae+ye*ye);if(!G||we<60)return;const _e=pC(ee,ne,M,_,oe.inspectState.value.kind==="focused"?80:40);if(_e===le.value.corner){S.transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)";const R=le.value.dimensions.position;requestAnimationFrame(()=>{S.transform=`translate3d(${R.x}px, ${R.y}px, 0)`});return}const E=Ps(_e,T.width,T.height);if(U===C&&D===A)return;const O=()=>{S.transition="none",kh(),b.removeEventListener("transitionend",O),P&&(cancelAnimationFrame(P),P=null)};b.addEventListener("transitionend",O),S.transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",requestAnimationFrame(()=>{S.transform=`translate3d(${E.x}px, ${E.y}px, 0)`}),le.value={corner:_e,dimensions:{isFullWidth:T.isFullWidth,isFullHeight:T.isFullHeight,width:T.width,height:T.height,position:E},lastDimensions:le.value.lastDimensions,componentsTree:le.value.componentsTree},Wt(zr,{corner:_e,dimensions:le.value.dimensions,lastDimensions:le.value.lastDimensions,componentsTree:le.value.componentsTree})};document.addEventListener("pointermove",ue),document.addEventListener("pointerup",se)},[]),d=dt(w=>{if(w.preventDefault(),!e.current||!fn.value)return;const{corner:b,orientation:S="horizontal"}=fn.value,T=w.clientX,M=w.clientY;let _=null,C=!1;const A=50,U=P=>{if(C||_)return;const G=P.clientX-T,ee=P.clientY-M;let ne=!1;if(S==="horizontal"?(b.endsWith("left")&&G>A||b.endsWith("right")&&G<-A)&&(ne=!0):(b.startsWith("top")&&ee>A||b.startsWith("bottom")&&ee<-A)&&(ne=!0),ne){if(C=!0,fn.value=null,Wt(au,null),r.current===0&&e.current)requestAnimationFrame(()=>{if(e.current){e.current.style.width="min-content";const ue=e.current.offsetWidth;r.current=ue||300;const se=le.value.lastDimensions,ae=Fc(se.width,0,!0),ye=Fc(se.height,0,!1);let we=P.clientX-ae/2,_e=P.clientY-ye/2;we=Math.max(be,Math.min(we,window.innerWidth-ae-be)),_e=Math.max(be,Math.min(_e,window.innerHeight-ye-be)),le.value={...le.value,dimensions:{...le.value.dimensions,position:{x:we,y:_e}}},l(!0);const E=Ur(Wi);Ze.value=E||{view:"none"},setTimeout(()=>{if(e.current){const O=new PointerEvent("pointerdown",{clientX:P.clientX,clientY:P.clientY,pointerId:P.pointerId,bubbles:!0});e.current.dispatchEvent(O)}},100)}});else{l(!0);const ue=Ur(Wi);Ze.value=ue||{view:"none"}}document.removeEventListener("pointermove",U),document.removeEventListener("pointerup",D)}},D=()=>{document.removeEventListener("pointermove",U),document.removeEventListener("pointerup",D)};document.addEventListener("pointermove",U),document.addEventListener("pointerup",D)},[]);Ce(()=>{if(!e.current)return;Rb(Wi),fn.value?(i.current=36,r.current=0):(e.current.style.width="min-content",i.current=36,r.current=e.current.offsetWidth),e.current.style.maxWidth=`calc(100vw - ${be*2}px)`,e.current.style.maxHeight=`calc(100vh - ${be*2}px)`,l(),oe.inspectState.value.kind!=="focused"&&!fn.value&&!s.current&&(le.value={...le.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:r.current,height:i.current,position:le.value.dimensions.position}}),Ep.value=e.current;const w=le.subscribe(M=>{if(!e.current)return;const{x:_,y:C}=M.dimensions.position,{width:A,height:U}=M.dimensions,D=e.current;requestAnimationFrame(()=>{D.style.transform=`translate3d(${_}px, ${C}px, 0)`,D.style.width=`${A}px`,D.style.height=`${U}px`})}),b=Ze.subscribe(M=>{t.current=M.view!=="none",l(),fn.value||(M.view!=="none"?Wt(Wi,M):Rb(Wi))}),S=oe.inspectState.subscribe(M=>{t.current=M.kind==="focused",l()}),T=()=>{l(!0)};return window.addEventListener("resize",T,{passive:!0}),()=>{window.removeEventListener("resize",T),b(),S(),w(),Wt(zr,{...ir,corner:le.value.corner})}},[]);const[h,p]=Ne(!1);Ce(()=>{p(!0)},[]);const y=fn.value;let g="";if(y){const{orientation:w="horizontal",corner:b}=y;w==="horizontal"?g=b!=null&&b.endsWith("right")?"rotate-180":"":g=b!=null&&b.startsWith("bottom")?"-rotate-90":"rotate-90"}return v(De,{children:[v(sC,{}),v(Bm.Provider,{value:e.current,children:v("div",{id:"react-scan-toolbar",dir:"ltr",ref:e,onPointerDown:y?d:u,className:L("fixed inset-0",y?(()=>{const{orientation:w="horizontal",corner:b}=y;return w==="horizontal"?b!=null&&b.endsWith("right")?"rounded-tl-lg rounded-bl-lg shadow-lg":"rounded-tr-lg rounded-br-lg shadow-lg":b!=null&&b.startsWith("bottom")?"rounded-tl-lg rounded-tr-lg shadow-lg":"rounded-bl-lg rounded-br-lg shadow-lg"})():"rounded-lg shadow-lg","flex flex-col","font-mono text-[13px]","user-select-none","opacity-0",y?"cursor-pointer":"cursor-move","z-[124124124124]","animate-fade-in animation-duration-300 animation-delay-300","will-change-transform","[touch-action:none]"),children:y?v("button",{type:"button",onClick:()=>{fn.value=null,Wt(au,null),r.current===0&&e.current&&requestAnimationFrame(()=>{if(e.current){e.current.style.width="min-content";const b=e.current.offsetWidth;r.current=b||300,l(!0)}});const w=Ur(Wi);Ze.value=w||{view:"none"}},className:"flex items-center justify-center w-full h-full text-white",title:"Expand toolbar",children:v(ot,{name:"icon-chevron-right",size:16,className:L("transition-transform",g)})}):v(De,{children:[v(Pc,{position:"top"}),v(Pc,{position:"bottom"}),v(Pc,{position:"left"}),v(Pc,{position:"right"}),v(oC,{})]})})})]})},Bm=j1(null),gC=()=>v("svg",{xmlns:"http://www.w3.org/2000/svg",style:"display: none;",children:[v("title",{children:"React Scan Icons"}),v("symbol",{id:"icon-inspect",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),v("path",{d:"M5 3a2 2 0 0 0-2 2"}),v("path",{d:"M19 3a2 2 0 0 1 2 2"}),v("path",{d:"M5 21a2 2 0 0 1-2-2"}),v("path",{d:"M9 3h1"}),v("path",{d:"M9 21h2"}),v("path",{d:"M14 3h1"}),v("path",{d:"M3 9v1"}),v("path",{d:"M21 9v2"}),v("path",{d:"M3 14v1"})]}),v("symbol",{id:"icon-focus",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),v("path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"})]}),v("symbol",{id:"icon-next",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:v("path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z"})}),v("symbol",{id:"icon-previous",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:v("path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"})}),v("symbol",{id:"icon-close",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),v("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),v("symbol",{id:"icon-replay",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}),v("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),v("path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}),v("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),v("circle",{cx:"12",cy:"12",r:"1"}),v("path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"})]}),v("symbol",{id:"icon-ellipsis",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("circle",{cx:"12",cy:"12",r:"1"}),v("circle",{cx:"19",cy:"12",r:"1"}),v("circle",{cx:"5",cy:"12",r:"1"})]}),v("symbol",{id:"icon-copy",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),v("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]}),v("symbol",{id:"icon-check",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:v("path",{d:"M20 6 9 17l-5-5"})}),v("symbol",{id:"icon-chevron-right",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:v("path",{d:"m9 18 6-6-6-6"})}),v("symbol",{id:"icon-settings",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),v("circle",{cx:"12",cy:"12",r:"3"})]}),v("symbol",{id:"icon-flame",viewBox:"0 0 24 24",children:v("path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"})}),v("symbol",{id:"icon-function",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}),v("path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}),v("path",{d:"M9 11.2h5.7"})]}),v("symbol",{id:"icon-triangle-alert",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}),v("path",{d:"M12 9v4"}),v("path",{d:"M12 17h.01"})]}),v("symbol",{id:"icon-gallery-horizontal-end",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"M2 7v10"}),v("path",{d:"M6 5v14"}),v("rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"})]}),v("symbol",{id:"icon-search",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("circle",{cx:"11",cy:"11",r:"8"}),v("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),v("symbol",{id:"icon-lock",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),v("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),v("symbol",{id:"icon-lock-open",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),v("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"})]}),v("symbol",{id:"icon-sanil",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}),v("circle",{cx:"10",cy:"13",r:"8"}),v("path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}),v("path",{d:"M18 3 19.1 5.2"})]})]}),vC=class extends jn{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null})}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){var e;return this.state.hasError?v("div",{className:"fixed bottom-4 right-4 z-[124124124124]",children:v("div",{className:"p-3 bg-black rounded-lg shadow-lg w-80",children:[v("div",{className:"flex items-center gap-2 mb-2 text-red-400 text-sm font-medium",children:[v(ot,{name:"icon-flame",className:"text-red-500",size:14}),"React Scan ran into a problem"]}),v("div",{className:"p-2 bg-black rounded font-mono text-xs text-red-300 mb-3 break-words",children:((e=this.state.error)==null?void 0:e.message)||JSON.stringify(this.state.error)}),v("button",{type:"button",onClick:this.handleReset,className:"px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-medium transition-colors flex items-center justify-center gap-1.5",children:"Restart"})]})}):this.props.children}},yC=e=>{const t=document.createElement("div");t.id="react-scan-toolbar-root",window.__REACT_SCAN_TOOLBAR_CONTAINER__=t,e.appendChild(t),Bs(v(vC,{children:v(De,{children:[v(gC,{}),v(mC,{})]})}),t);const r=t.remove.bind(t);return t.remove=()=>{window.__REACT_SCAN_TOOLBAR_CONTAINER__=void 0,t.hasChildNodes()&&(Bs(null,t),Bs(null,t)),r()},t},bC={version:"0.4.3"},Ya=null,Ms=null,wC=()=>{if(Ya&&Ms)return{rootContainer:Ya,shadowRoot:Ms};Ya=document.createElement("div"),Ya.id="react-scan-root",Ms=Ya.attachShadow({mode:"open"});const e=document.createElement("style");return e.textContent=L3,Ms.appendChild(e),document.documentElement.appendChild(Ya),{rootContainer:Ya,shadowRoot:Ms}},oe={wasDetailsOpen:yt(!0),isInIframe:yt(cr&&window.self!==window.top),inspectState:yt({kind:"uninitialized"}),monitor:yt(null),fiberRoots:new Set,reportData:new Map,legacyReportData:new Map,lastReportTime:yt(0),interactionListeningForRenders:null,changesListeners:new Map},Ue={instrumentation:null,componentAllowList:null,options:yt({enabled:!0,log:!1,showToolbar:!0,animationSpeed:"fast",dangerouslyForceRunInProduction:!1,showFPS:!0,showNotificationCount:!0,allowInIframe:!1}),runInAllEnvironments:!1,onRender:null,scheduledOutlines:new Map,activeOutlines:new Map,Store:oe,version:bC.version};cr&&window.__REACT_SCAN_EXTENSION__&&(window.__REACT_SCAN_VERSION__=Ue.version);function xC(e){return e in Ue.options.value}var Ox=e=>{const t=[],r={};for(const i in e){if(!xC(i))continue;const s=e[i];switch(i){case"enabled":case"log":case"showToolbar":case"showNotificationCount":case"dangerouslyForceRunInProduction":case"showFPS":case"allowInIframe":typeof s!="boolean"?t.push(`- ${i} must be a boolean. Got "${s}"`):r[i]=s;break;case"animationSpeed":["slow","fast","off"].includes(s)?r[i]=s:t.push(`- Invalid animation speed "${s}". Using default "fast"`);break;case"onCommitStart":typeof s!="function"?t.push(`- ${i} must be a function. Got "${s}"`):r.onCommitStart=s;break;case"onCommitFinish":typeof s!="function"?t.push(`- ${i} must be a function. Got "${s}"`):r.onCommitFinish=s;break;case"onRender":typeof s!="function"?t.push(`- ${i} must be a function. Got "${s}"`):r.onRender=s;break;case"onPaintStart":case"onPaintFinish":typeof s!="function"?t.push(`- ${i} must be a function. Got "${s}"`):r[i]=s;break;default:t.push(`- Unknown option "${i}"`)}}return t.length>0&&console.warn(`[React Scan] Invalid options:
${t.join(`
`)}`),r},_C=e=>{var t;try{const r=Ox(e);if(Object.keys(r).length===0)return;const i="showToolbar"in r&&r.showToolbar!==void 0,s={...Ue.options.value,...r},{instrumentation:l}=Ue;l&&"enabled"in r&&(l.isPaused.value=r.enabled===!1),Ue.options.value=s;try{const u=(t=Ur("react-scan-options"))==null?void 0:t.enabled;typeof u=="boolean"&&(s.enabled=u)}catch(u){Ue.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",u)}return Wt("react-scan-options",s),i&&Ax(!!s.showToolbar),s}catch(r){Ue.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",r)}},SC=()=>Ue.options,Gc=null,dw,Fu=()=>{if(Gc!==null)return Gc;dw??(dw=Ka());for(const e of dw.renderers.values())FT(e)==="production"&&(Gc=!0);return Gc},TC=()=>{try{if(!cr||!Ue.runInAllEnvironments&&Fu()&&!Ue.options.value.dangerouslyForceRunInProduction)return;const e=Ur("react-scan-options");if(e){const r=Ox(e);Object.keys(r).length>0&&(Ue.options.value={...Ue.options.value,...r})}const t=SC();U3(()=>{Ax(!!t.value.showToolbar)}),!oe.monitor.value&&cr&&setTimeout(()=>{PT()||console.error("[React Scan] Failed to load. Must import React Scan before React runs.")},5e3)}catch(e){Ue.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}},Ax=e=>{var l;(l=window.reactScanCleanupListeners)==null||l.call(window);const t=fE(),r=kC();window.reactScanCleanupListeners=()=>{t(),r==null||r()};const i=window.__REACT_SCAN_TOOLBAR_CONTAINER__;if(!e){i==null||i.remove();return}i==null||i.remove();const{shadowRoot:s}=wC();yC(s)},kC=()=>{try{const e=document.documentElement;return jE(e)}catch(e){Ue.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}},EC=(e={})=>{_C(e),!(oe.isInIframe.value&&!Ue.options.value.allowInIframe&&!Ue.runInAllEnvironments)&&(e.enabled===!1&&e.showToolbar!==!0||TC())},CC=new WeakSet,Yh={exports:{}},Ns={},Bh={exports:{}},Xh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fw;function MC(){return fw||(fw=1,function(e){function t(E,O){var R=E.length;E.push(O);e:for(;0<R;){var Y=R-1>>>1,N=E[Y];if(0<s(N,O))E[Y]=O,E[R]=N,R=Y;else break e}}function r(E){return E.length===0?null:E[0]}function i(E){if(E.length===0)return null;var O=E[0],R=E.pop();if(R!==O){E[0]=R;e:for(var Y=0,N=E.length,H=N>>>1;Y<H;){var W=2*(Y+1)-1,J=E[W],te=W+1,ie=E[te];if(0>s(J,R))te<N&&0>s(ie,J)?(E[Y]=ie,E[te]=R,Y=te):(E[Y]=J,E[W]=R,Y=W);else if(te<N&&0>s(ie,R))E[Y]=ie,E[te]=R,Y=te;else break e}}return O}function s(E,O){var R=E.sortIndex-O.sortIndex;return R!==0?R:E.id-O.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();e.unstable_now=function(){return u.now()-d}}var h=[],p=[],y=1,g=null,w=3,b=!1,S=!1,T=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function U(E){for(var O=r(p);O!==null;){if(O.callback===null)i(p);else if(O.startTime<=E)i(p),O.sortIndex=O.expirationTime,t(h,O);else break;O=r(p)}}function D(E){if(T=!1,U(E),!S)if(r(h)!==null)S=!0,P||(P=!0,ae());else{var O=r(p);O!==null&&_e(D,O.startTime-E)}}var P=!1,G=-1,ee=5,ne=-1;function ue(){return M?!0:!(e.unstable_now()-ne<ee)}function se(){if(M=!1,P){var E=e.unstable_now();ne=E;var O=!0;try{e:{S=!1,T&&(T=!1,C(G),G=-1),b=!0;var R=w;try{t:{for(U(E),g=r(h);g!==null&&!(g.expirationTime>E&&ue());){var Y=g.callback;if(typeof Y=="function"){g.callback=null,w=g.priorityLevel;var N=Y(g.expirationTime<=E);if(E=e.unstable_now(),typeof N=="function"){g.callback=N,U(E),O=!0;break t}g===r(h)&&i(h),U(E)}else i(h);g=r(h)}if(g!==null)O=!0;else{var H=r(p);H!==null&&_e(D,H.startTime-E),O=!1}}break e}finally{g=null,w=R,b=!1}O=void 0}}finally{O?ae():P=!1}}}var ae;if(typeof A=="function")ae=function(){A(se)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,we=ye.port2;ye.port1.onmessage=se,ae=function(){we.postMessage(null)}}else ae=function(){_(se,0)};function _e(E,O){G=_(function(){E(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return w},e.unstable_next=function(E){switch(w){case 1:case 2:case 3:var O=3;break;default:O=w}var R=w;w=O;try{return E()}finally{w=R}},e.unstable_requestPaint=function(){M=!0},e.unstable_runWithPriority=function(E,O){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var R=w;w=E;try{return O()}finally{w=R}},e.unstable_scheduleCallback=function(E,O,R){var Y=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?Y+R:Y):R=Y,E){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=R+N,E={id:y++,callback:O,priorityLevel:E,startTime:R,expirationTime:N,sortIndex:-1},R>Y?(E.sortIndex=R,t(p,E),r(h)===null&&E===r(p)&&(T?(C(G),G=-1):T=!0,_e(D,R-Y))):(E.sortIndex=N,t(h,E),S||b||(S=!0,P||(P=!0,ae()))),E},e.unstable_shouldYield=ue,e.unstable_wrapCallback=function(E){var O=w;return function(){var R=w;w=O;try{return E.apply(this,arguments)}finally{w=R}}}}(Xh)),Xh}var hw;function NC(){return hw||(hw=1,Bh.exports=MC()),Bh.exports}var Fh={exports:{}},Ht={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pw;function OC(){if(pw)return Ht;pw=1;var e=ml();function t(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var i={d:{f:r,r:function(){throw Error(t(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(h,p,y){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:g==null?null:""+g,children:h,containerInfo:p,implementation:y}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Ht.createPortal=function(h,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return l(h,p,null,y)},Ht.flushSync=function(h){var p=u.T,y=i.p;try{if(u.T=null,i.p=2,h)return h()}finally{u.T=p,i.p=y,i.d.f()}},Ht.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,i.d.C(h,p))},Ht.prefetchDNS=function(h){typeof h=="string"&&i.d.D(h)},Ht.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var y=p.as,g=d(y,p.crossOrigin),w=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?i.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:w,fetchPriority:b}):y==="script"&&i.d.X(h,{crossOrigin:g,integrity:w,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ht.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=d(p.as,p.crossOrigin);i.d.M(h,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&i.d.M(h)},Ht.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,g=d(y,p.crossOrigin);i.d.L(h,y,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ht.preloadModule=function(h,p){if(typeof h=="string")if(p){var y=d(p.as,p.crossOrigin);i.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else i.d.m(h)},Ht.requestFormReset=function(h){i.d.r(h)},Ht.unstable_batchedUpdates=function(h,p){return h(p)},Ht.useFormState=function(h,p,y){return u.H.useFormState(h,p,y)},Ht.useFormStatus=function(){return u.H.useHostTransitionStatus()},Ht.version="19.1.0",Ht}var mw;function AC(){if(mw)return Fh.exports;mw=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Fh.exports=OC(),Fh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gw;function zC(){if(gw)return Ns;gw=1;var e=NC(),t=ml(),r=AC();function i(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)a+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var a=n,o=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(o=a.return),n=a.return;while(n)}return a.tag===3?o:null}function u(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function d(n){if(l(n)!==n)throw Error(i(188))}function h(n){var a=n.alternate;if(!a){if(a=l(n),a===null)throw Error(i(188));return a!==n?null:n}for(var o=n,c=a;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),n;if(m===c)return d(f),a;m=m.sibling}throw Error(i(188))}if(o.return!==c.return)o=f,c=m;else{for(var x=!1,k=f.child;k;){if(k===o){x=!0,o=f,c=m;break}if(k===c){x=!0,c=f,o=m;break}k=k.sibling}if(!x){for(k=m.child;k;){if(k===o){x=!0,o=m,c=f;break}if(k===c){x=!0,c=m,o=f;break}k=k.sibling}if(!x)throw Error(i(189))}}if(o.alternate!==c)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?n:a}function p(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=p(n),a!==null)return a;n=n.sibling}return null}var y=Object.assign,g=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),C=Symbol.for("react.consumer"),A=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),ne=Symbol.for("react.activity"),ue=Symbol.for("react.memo_cache_sentinel"),se=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=se&&n[se]||n["@@iterator"],typeof n=="function"?n:null)}var ye=Symbol.for("react.client.reference");function we(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===ye?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case S:return"Fragment";case M:return"Profiler";case T:return"StrictMode";case D:return"Suspense";case P:return"SuspenseList";case ne:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case b:return"Portal";case A:return(n.displayName||"Context")+".Provider";case C:return(n._context.displayName||"Context")+".Consumer";case U:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case G:return a=n.displayName||null,a!==null?a:we(n.type)||"Memo";case ee:a=n._payload,n=n._init;try{return we(n(a))}catch{}}return null}var _e=Array.isArray,E=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R={pending:!1,data:null,method:null,action:null},Y=[],N=-1;function H(n){return{current:n}}function W(n){0>N||(n.current=Y[N],Y[N]=null,N--)}function J(n,a){N++,Y[N]=n.current,n.current=a}var te=H(null),ie=H(null),re=H(null),ge=H(null);function de(n,a){switch(J(re,a),J(ie,n),J(te,null),a.nodeType){case 9:case 11:n=(n=a.documentElement)&&(n=n.namespaceURI)?Ay(n):0;break;default:if(n=a.tagName,a=a.namespaceURI)a=Ay(a),n=zy(a,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}W(te),J(te,n)}function Te(){W(te),W(ie),W(re)}function Le(n){n.memoizedState!==null&&J(ge,n);var a=te.current,o=zy(a,n.type);a!==o&&(J(ie,n),J(te,o))}function It(n){ie.current===n&&(W(te),W(ie)),ge.current===n&&(W(ge),bs._currentValue=R)}var tn=Object.prototype.hasOwnProperty,Ir=e.unstable_scheduleCallback,ui=e.unstable_cancelCallback,G2=e.unstable_shouldYield,V2=e.unstable_requestPaint,Jn=e.unstable_now,Q2=e.unstable_getCurrentPriorityLevel,dg=e.unstable_ImmediatePriority,fg=e.unstable_UserBlockingPriority,Sl=e.unstable_NormalPriority,W2=e.unstable_LowPriority,hg=e.unstable_IdlePriority,Z2=e.log,K2=e.unstable_setDisableYieldValue,Co=null,nn=null;function Yr(n){if(typeof Z2=="function"&&K2(n),nn&&typeof nn.setStrictMode=="function")try{nn.setStrictMode(Co,n)}catch{}}var rn=Math.clz32?Math.clz32:t_,J2=Math.log,e_=Math.LN2;function t_(n){return n>>>=0,n===0?32:31-(J2(n)/e_|0)|0}var Tl=256,kl=4194304;function _a(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function El(n,a,o){var c=n.pendingLanes;if(c===0)return 0;var f=0,m=n.suspendedLanes,x=n.pingedLanes;n=n.warmLanes;var k=c&134217727;return k!==0?(c=k&~m,c!==0?f=_a(c):(x&=k,x!==0?f=_a(x):o||(o=k&~n,o!==0&&(f=_a(o))))):(k=c&~m,k!==0?f=_a(k):x!==0?f=_a(x):o||(o=c&~n,o!==0&&(f=_a(o)))),f===0?0:a!==0&&a!==f&&(a&m)===0&&(m=f&-f,o=a&-a,m>=o||m===32&&(o&4194048)!==0)?a:f}function Mo(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function n_(n,a){switch(n){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pg(){var n=Tl;return Tl<<=1,(Tl&4194048)===0&&(Tl=256),n}function mg(){var n=kl;return kl<<=1,(kl&62914560)===0&&(kl=4194304),n}function od(n){for(var a=[],o=0;31>o;o++)a.push(n);return a}function No(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function r_(n,a,o,c,f,m){var x=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var k=n.entanglements,z=n.expirationTimes,I=n.hiddenUpdates;for(o=x&~o;0<o;){var Q=31-rn(o),K=1<<Q;k[Q]=0,z[Q]=-1;var B=I[Q];if(B!==null)for(I[Q]=null,Q=0;Q<B.length;Q++){var X=B[Q];X!==null&&(X.lane&=-536870913)}o&=~K}c!==0&&gg(n,c,0),m!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=m&~(x&~a))}function gg(n,a,o){n.pendingLanes|=a,n.suspendedLanes&=~a;var c=31-rn(a);n.entangledLanes|=a,n.entanglements[c]=n.entanglements[c]|1073741824|o&4194090}function vg(n,a){var o=n.entangledLanes|=a;for(n=n.entanglements;o;){var c=31-rn(o),f=1<<c;f&a|n[c]&a&&(n[c]|=a),o&=~f}}function sd(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function ld(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function yg(){var n=O.p;return n!==0?n:(n=window.event,n===void 0?32:Zy(n.type))}function a_(n,a){var o=O.p;try{return O.p=n,a()}finally{O.p=o}}var Br=Math.random().toString(36).slice(2),Ut="__reactFiber$"+Br,Ft="__reactProps$"+Br,di="__reactContainer$"+Br,cd="__reactEvents$"+Br,i_="__reactListeners$"+Br,o_="__reactHandles$"+Br,bg="__reactResources$"+Br,Oo="__reactMarker$"+Br;function ud(n){delete n[Ut],delete n[Ft],delete n[cd],delete n[i_],delete n[o_]}function fi(n){var a=n[Ut];if(a)return a;for(var o=n.parentNode;o;){if(a=o[di]||o[Ut]){if(o=a.alternate,a.child!==null||o!==null&&o.child!==null)for(n=Uy(n);n!==null;){if(o=n[Ut])return o;n=Uy(n)}return a}n=o,o=n.parentNode}return null}function hi(n){if(n=n[Ut]||n[di]){var a=n.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return n}return null}function Ao(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(i(33))}function pi(n){var a=n[bg];return a||(a=n[bg]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Tt(n){n[Oo]=!0}var wg=new Set,xg={};function Sa(n,a){mi(n,a),mi(n+"Capture",a)}function mi(n,a){for(xg[n]=a,n=0;n<a.length;n++)wg.add(a[n])}var s_=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_g={},Sg={};function l_(n){return tn.call(Sg,n)?!0:tn.call(_g,n)?!1:s_.test(n)?Sg[n]=!0:(_g[n]=!0,!1)}function Cl(n,a,o){if(l_(a))if(o===null)n.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var c=a.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+o)}}function Ml(n,a,o){if(o===null)n.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+o)}}function hr(n,a,o,c){if(c===null)n.removeAttribute(o);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(a,o,""+c)}}var dd,Tg;function gi(n){if(dd===void 0)try{throw Error()}catch(o){var a=o.stack.trim().match(/\n( *(at )?)/);dd=a&&a[1]||"",Tg=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+dd+n+Tg}var fd=!1;function hd(n,a){if(!n||fd)return"";fd=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(a){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(X){var B=X}Reflect.construct(n,[],K)}else{try{K.call()}catch(X){B=X}n.call(K.prototype)}}else{try{throw Error()}catch(X){B=X}(K=n())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(X){if(X&&B&&typeof X.stack=="string")return[X.stack,B.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),x=m[0],k=m[1];if(x&&k){var z=x.split(`
`),I=k.split(`
`);for(f=c=0;c<z.length&&!z[c].includes("DetermineComponentFrameRoot");)c++;for(;f<I.length&&!I[f].includes("DetermineComponentFrameRoot");)f++;if(c===z.length||f===I.length)for(c=z.length-1,f=I.length-1;1<=c&&0<=f&&z[c]!==I[f];)f--;for(;1<=c&&0<=f;c--,f--)if(z[c]!==I[f]){if(c!==1||f!==1)do if(c--,f--,0>f||z[c]!==I[f]){var Q=`
`+z[c].replace(" at new "," at ");return n.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",n.displayName)),Q}while(1<=c&&0<=f);break}}}finally{fd=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?gi(o):""}function c_(n){switch(n.tag){case 26:case 27:case 5:return gi(n.type);case 16:return gi("Lazy");case 13:return gi("Suspense");case 19:return gi("SuspenseList");case 0:case 15:return hd(n.type,!1);case 11:return hd(n.type.render,!1);case 1:return hd(n.type,!0);case 31:return gi("Activity");default:return""}}function kg(n){try{var a="";do a+=c_(n),n=n.return;while(n);return a}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function wn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Eg(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function u_(n){var a=Eg(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,a),c=""+n[a];if(!n.hasOwnProperty(a)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return f.call(this)},set:function(x){c=""+x,m.call(this,x)}}),Object.defineProperty(n,a,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(x){c=""+x},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function Nl(n){n._valueTracker||(n._valueTracker=u_(n))}function Cg(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var o=a.getValue(),c="";return n&&(c=Eg(n)?n.checked?"true":"false":n.value),n=c,n!==o?(a.setValue(n),!0):!1}function Ol(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var d_=/[\n"\\]/g;function xn(n){return n.replace(d_,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function pd(n,a,o,c,f,m,x,k){n.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?n.type=x:n.removeAttribute("type"),a!=null?x==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+wn(a)):n.value!==""+wn(a)&&(n.value=""+wn(a)):x!=="submit"&&x!=="reset"||n.removeAttribute("value"),a!=null?md(n,x,wn(a)):o!=null?md(n,x,wn(o)):c!=null&&n.removeAttribute("value"),f==null&&m!=null&&(n.defaultChecked=!!m),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),k!=null&&typeof k!="function"&&typeof k!="symbol"&&typeof k!="boolean"?n.name=""+wn(k):n.removeAttribute("name")}function Mg(n,a,o,c,f,m,x,k){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),a!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||a!=null))return;o=o!=null?""+wn(o):"",a=a!=null?""+wn(a):o,k||a===n.value||(n.value=a),n.defaultValue=a}c=c??f,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=k?n.checked:!!c,n.defaultChecked=!!c,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(n.name=x)}function md(n,a,o){a==="number"&&Ol(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function vi(n,a,o,c){if(n=n.options,a){a={};for(var f=0;f<o.length;f++)a["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=a.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&c&&(n[o].defaultSelected=!0)}else{for(o=""+wn(o),a=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}a!==null||n[f].disabled||(a=n[f])}a!==null&&(a.selected=!0)}}function Ng(n,a,o){if(a!=null&&(a=""+wn(a),a!==n.value&&(n.value=a),o==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=o!=null?""+wn(o):""}function Og(n,a,o,c){if(a==null){if(c!=null){if(o!=null)throw Error(i(92));if(_e(c)){if(1<c.length)throw Error(i(93));c=c[0]}o=c}o==null&&(o=""),a=o}o=wn(a),n.defaultValue=o,c=n.textContent,c===o&&c!==""&&c!==null&&(n.value=c)}function yi(n,a){if(a){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=a;return}}n.textContent=a}var f_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ag(n,a,o){var c=a.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?c?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":c?n.setProperty(a,o):typeof o!="number"||o===0||f_.has(a)?a==="float"?n.cssFloat=o:n[a]=(""+o).trim():n[a]=o+"px"}function zg(n,a,o){if(a!=null&&typeof a!="object")throw Error(i(62));if(n=n.style,o!=null){for(var c in o)!o.hasOwnProperty(c)||a!=null&&a.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var f in a)c=a[f],a.hasOwnProperty(f)&&o[f]!==c&&Ag(n,f,c)}else for(var m in a)a.hasOwnProperty(m)&&Ag(n,m,a[m])}function gd(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var h_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),p_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Al(n){return p_.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var vd=null;function yd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var bi=null,wi=null;function Rg(n){var a=hi(n);if(a&&(n=a.stateNode)){var o=n[Ft]||null;e:switch(n=a.stateNode,a.type){case"input":if(pd(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),a=o.name,o.type==="radio"&&a!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+xn(""+a)+'"][type="radio"]'),a=0;a<o.length;a++){var c=o[a];if(c!==n&&c.form===n.form){var f=c[Ft]||null;if(!f)throw Error(i(90));pd(c,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(a=0;a<o.length;a++)c=o[a],c.form===n.form&&Cg(c)}break e;case"textarea":Ng(n,o.value,o.defaultValue);break e;case"select":a=o.value,a!=null&&vi(n,!!o.multiple,a,!1)}}}var bd=!1;function Dg(n,a,o){if(bd)return n(a,o);bd=!0;try{var c=n(a);return c}finally{if(bd=!1,(bi!==null||wi!==null)&&(gc(),bi&&(a=bi,n=wi,wi=bi=null,Rg(a),n)))for(a=0;a<n.length;a++)Rg(n[a])}}function zo(n,a){var o=n.stateNode;if(o===null)return null;var c=o[Ft]||null;if(c===null)return null;o=c[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(i(231,a,typeof o));return o}var pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wd=!1;if(pr)try{var Ro={};Object.defineProperty(Ro,"passive",{get:function(){wd=!0}}),window.addEventListener("test",Ro,Ro),window.removeEventListener("test",Ro,Ro)}catch{wd=!1}var Xr=null,xd=null,zl=null;function jg(){if(zl)return zl;var n,a=xd,o=a.length,c,f="value"in Xr?Xr.value:Xr.textContent,m=f.length;for(n=0;n<o&&a[n]===f[n];n++);var x=o-n;for(c=1;c<=x&&a[o-c]===f[m-c];c++);return zl=f.slice(n,1<c?1-c:void 0)}function Rl(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function Dl(){return!0}function Ug(){return!1}function Pt(n){function a(o,c,f,m,x){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=x,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(o=n[k],this[k]=o?o(m):m[k]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Dl:Ug,this.isPropagationStopped=Ug,this}return y(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Dl)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Dl)},persist:function(){},isPersistent:Dl}),a}var Ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=Pt(Ta),Do=y({},Ta,{view:0,detail:0}),m_=Pt(Do),_d,Sd,jo,Ul=y({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kd,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==jo&&(jo&&n.type==="mousemove"?(_d=n.screenX-jo.screenX,Sd=n.screenY-jo.screenY):Sd=_d=0,jo=n),_d)},movementY:function(n){return"movementY"in n?n.movementY:Sd}}),Lg=Pt(Ul),g_=y({},Ul,{dataTransfer:0}),v_=Pt(g_),y_=y({},Do,{relatedTarget:0}),Td=Pt(y_),b_=y({},Ta,{animationName:0,elapsedTime:0,pseudoElement:0}),w_=Pt(b_),x_=y({},Ta,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),__=Pt(x_),S_=y({},Ta,{data:0}),$g=Pt(S_),T_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},E_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function C_(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=E_[n])?!!a[n]:!1}function kd(){return C_}var M_=y({},Do,{key:function(n){if(n.key){var a=T_[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=Rl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?k_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kd,charCode:function(n){return n.type==="keypress"?Rl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Rl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),N_=Pt(M_),O_=y({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hg=Pt(O_),A_=y({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kd}),z_=Pt(A_),R_=y({},Ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),D_=Pt(R_),j_=y({},Ul,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),U_=Pt(j_),L_=y({},Ta,{newState:0,oldState:0}),$_=Pt(L_),H_=[9,13,27,32],Ed=pr&&"CompositionEvent"in window,Uo=null;pr&&"documentMode"in document&&(Uo=document.documentMode);var q_=pr&&"TextEvent"in window&&!Uo,qg=pr&&(!Ed||Uo&&8<Uo&&11>=Uo),Ig=" ",Yg=!1;function Bg(n,a){switch(n){case"keyup":return H_.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var xi=!1;function I_(n,a){switch(n){case"compositionend":return Xg(a);case"keypress":return a.which!==32?null:(Yg=!0,Ig);case"textInput":return n=a.data,n===Ig&&Yg?null:n;default:return null}}function Y_(n,a){if(xi)return n==="compositionend"||!Ed&&Bg(n,a)?(n=jg(),zl=xd=Xr=null,xi=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return qg&&a.locale!=="ko"?null:a.data;default:return null}}var B_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fg(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!B_[n.type]:a==="textarea"}function Pg(n,a,o,c){bi?wi?wi.push(c):wi=[c]:bi=c,a=_c(a,"onChange"),0<a.length&&(o=new jl("onChange","change",null,o,c),n.push({event:o,listeners:a}))}var Lo=null,$o=null;function X_(n){Ey(n,0)}function Ll(n){var a=Ao(n);if(Cg(a))return n}function Gg(n,a){if(n==="change")return a}var Vg=!1;if(pr){var Cd;if(pr){var Md="oninput"in document;if(!Md){var Qg=document.createElement("div");Qg.setAttribute("oninput","return;"),Md=typeof Qg.oninput=="function"}Cd=Md}else Cd=!1;Vg=Cd&&(!document.documentMode||9<document.documentMode)}function Wg(){Lo&&(Lo.detachEvent("onpropertychange",Zg),$o=Lo=null)}function Zg(n){if(n.propertyName==="value"&&Ll($o)){var a=[];Pg(a,$o,n,yd(n)),Dg(X_,a)}}function F_(n,a,o){n==="focusin"?(Wg(),Lo=a,$o=o,Lo.attachEvent("onpropertychange",Zg)):n==="focusout"&&Wg()}function P_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ll($o)}function G_(n,a){if(n==="click")return Ll(a)}function V_(n,a){if(n==="input"||n==="change")return Ll(a)}function Q_(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var an=typeof Object.is=="function"?Object.is:Q_;function Ho(n,a){if(an(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var o=Object.keys(n),c=Object.keys(a);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!tn.call(a,f)||!an(n[f],a[f]))return!1}return!0}function Kg(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Jg(n,a){var o=Kg(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=a&&c>=a)return{node:o,offset:a-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Kg(o)}}function ev(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?ev(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function tv(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=Ol(n.document);a instanceof n.HTMLIFrameElement;){try{var o=typeof a.contentWindow.location.href=="string"}catch{o=!1}if(o)n=a.contentWindow;else break;a=Ol(n.document)}return a}function Nd(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}var W_=pr&&"documentMode"in document&&11>=document.documentMode,_i=null,Od=null,qo=null,Ad=!1;function nv(n,a,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ad||_i==null||_i!==Ol(c)||(c=_i,"selectionStart"in c&&Nd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),qo&&Ho(qo,c)||(qo=c,c=_c(Od,"onSelect"),0<c.length&&(a=new jl("onSelect","select",null,a,o),n.push({event:a,listeners:c}),a.target=_i)))}function ka(n,a){var o={};return o[n.toLowerCase()]=a.toLowerCase(),o["Webkit"+n]="webkit"+a,o["Moz"+n]="moz"+a,o}var Si={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionrun:ka("Transition","TransitionRun"),transitionstart:ka("Transition","TransitionStart"),transitioncancel:ka("Transition","TransitionCancel"),transitionend:ka("Transition","TransitionEnd")},zd={},rv={};pr&&(rv=document.createElement("div").style,"AnimationEvent"in window||(delete Si.animationend.animation,delete Si.animationiteration.animation,delete Si.animationstart.animation),"TransitionEvent"in window||delete Si.transitionend.transition);function Ea(n){if(zd[n])return zd[n];if(!Si[n])return n;var a=Si[n],o;for(o in a)if(a.hasOwnProperty(o)&&o in rv)return zd[n]=a[o];return n}var av=Ea("animationend"),iv=Ea("animationiteration"),ov=Ea("animationstart"),Z_=Ea("transitionrun"),K_=Ea("transitionstart"),J_=Ea("transitioncancel"),sv=Ea("transitionend"),lv=new Map,Rd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Rd.push("scrollEnd");function Ln(n,a){lv.set(n,a),Sa(a,[n])}var cv=new WeakMap;function _n(n,a){if(typeof n=="object"&&n!==null){var o=cv.get(n);return o!==void 0?o:(a={value:n,source:a,stack:kg(a)},cv.set(n,a),a)}return{value:n,source:a,stack:kg(a)}}var Sn=[],Ti=0,Dd=0;function $l(){for(var n=Ti,a=Dd=Ti=0;a<n;){var o=Sn[a];Sn[a++]=null;var c=Sn[a];Sn[a++]=null;var f=Sn[a];Sn[a++]=null;var m=Sn[a];if(Sn[a++]=null,c!==null&&f!==null){var x=c.pending;x===null?f.next=f:(f.next=x.next,x.next=f),c.pending=f}m!==0&&uv(o,f,m)}}function Hl(n,a,o,c){Sn[Ti++]=n,Sn[Ti++]=a,Sn[Ti++]=o,Sn[Ti++]=c,Dd|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function jd(n,a,o,c){return Hl(n,a,o,c),ql(n)}function ki(n,a){return Hl(n,null,null,a),ql(n)}function uv(n,a,o){n.lanes|=o;var c=n.alternate;c!==null&&(c.lanes|=o);for(var f=!1,m=n.return;m!==null;)m.childLanes|=o,c=m.alternate,c!==null&&(c.childLanes|=o),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(f=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,f&&a!==null&&(f=31-rn(o),n=m.hiddenUpdates,c=n[f],c===null?n[f]=[a]:c.push(a),a.lane=o|536870912),m):null}function ql(n){if(50<ds)throw ds=0,Yf=null,Error(i(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var Ei={};function eS(n,a,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(n,a,o,c){return new eS(n,a,o,c)}function Ud(n){return n=n.prototype,!(!n||!n.isReactComponent)}function mr(n,a){var o=n.alternate;return o===null?(o=on(n.tag,a,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=a,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,a=n.dependencies,o.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function dv(n,a){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,a=o.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function Il(n,a,o,c,f,m){var x=0;if(c=n,typeof n=="function")Ud(n)&&(x=1);else if(typeof n=="string")x=nT(n,o,te.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case ne:return n=on(31,o,a,f),n.elementType=ne,n.lanes=m,n;case S:return Ca(o.children,f,m,a);case T:x=8,f|=24;break;case M:return n=on(12,o,a,f|2),n.elementType=M,n.lanes=m,n;case D:return n=on(13,o,a,f),n.elementType=D,n.lanes=m,n;case P:return n=on(19,o,a,f),n.elementType=P,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case _:case A:x=10;break e;case C:x=9;break e;case U:x=11;break e;case G:x=14;break e;case ee:x=16,c=null;break e}x=29,o=Error(i(130,n===null?"null":typeof n,"")),c=null}return a=on(x,o,a,f),a.elementType=n,a.type=c,a.lanes=m,a}function Ca(n,a,o,c){return n=on(7,n,c,a),n.lanes=o,n}function Ld(n,a,o){return n=on(6,n,null,a),n.lanes=o,n}function $d(n,a,o){return a=on(4,n.children!==null?n.children:[],n.key,a),a.lanes=o,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}var Ci=[],Mi=0,Yl=null,Bl=0,Tn=[],kn=0,Ma=null,gr=1,vr="";function Na(n,a){Ci[Mi++]=Bl,Ci[Mi++]=Yl,Yl=n,Bl=a}function fv(n,a,o){Tn[kn++]=gr,Tn[kn++]=vr,Tn[kn++]=Ma,Ma=n;var c=gr;n=vr;var f=32-rn(c)-1;c&=~(1<<f),o+=1;var m=32-rn(a)+f;if(30<m){var x=f-f%5;m=(c&(1<<x)-1).toString(32),c>>=x,f-=x,gr=1<<32-rn(a)+f|o<<f|c,vr=m+n}else gr=1<<m|o<<f|c,vr=n}function Hd(n){n.return!==null&&(Na(n,1),fv(n,1,0))}function qd(n){for(;n===Yl;)Yl=Ci[--Mi],Ci[Mi]=null,Bl=Ci[--Mi],Ci[Mi]=null;for(;n===Ma;)Ma=Tn[--kn],Tn[kn]=null,vr=Tn[--kn],Tn[kn]=null,gr=Tn[--kn],Tn[kn]=null}var Yt=null,at=null,He=!1,Oa=null,er=!1,Id=Error(i(519));function Aa(n){var a=Error(i(418,""));throw Bo(_n(a,n)),Id}function hv(n){var a=n.stateNode,o=n.type,c=n.memoizedProps;switch(a[Ut]=n,a[Ft]=c,o){case"dialog":ze("cancel",a),ze("close",a);break;case"iframe":case"object":case"embed":ze("load",a);break;case"video":case"audio":for(o=0;o<hs.length;o++)ze(hs[o],a);break;case"source":ze("error",a);break;case"img":case"image":case"link":ze("error",a),ze("load",a);break;case"details":ze("toggle",a);break;case"input":ze("invalid",a),Mg(a,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Nl(a);break;case"select":ze("invalid",a);break;case"textarea":ze("invalid",a),Og(a,c.value,c.defaultValue,c.children),Nl(a)}o=c.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||a.textContent===""+o||c.suppressHydrationWarning===!0||Oy(a.textContent,o)?(c.popover!=null&&(ze("beforetoggle",a),ze("toggle",a)),c.onScroll!=null&&ze("scroll",a),c.onScrollEnd!=null&&ze("scrollend",a),c.onClick!=null&&(a.onclick=Sc),a=!0):a=!1,a||Aa(n)}function pv(n){for(Yt=n.return;Yt;)switch(Yt.tag){case 5:case 13:er=!1;return;case 27:case 3:er=!0;return;default:Yt=Yt.return}}function Io(n){if(n!==Yt)return!1;if(!He)return pv(n),He=!0,!1;var a=n.tag,o;if((o=a!==3&&a!==27)&&((o=a===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||ah(n.type,n.memoizedProps)),o=!o),o&&at&&Aa(n),pv(n),a===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));e:{for(n=n.nextSibling,a=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(a===0){at=Hn(n.nextSibling);break e}a--}else o!=="$"&&o!=="$!"&&o!=="$?"||a++;n=n.nextSibling}at=null}}else a===27?(a=at,oa(n.type)?(n=lh,lh=null,at=n):at=a):at=Yt?Hn(n.stateNode.nextSibling):null;return!0}function Yo(){at=Yt=null,He=!1}function mv(){var n=Oa;return n!==null&&(Qt===null?Qt=n:Qt.push.apply(Qt,n),Oa=null),n}function Bo(n){Oa===null?Oa=[n]:Oa.push(n)}var Yd=H(null),za=null,yr=null;function Fr(n,a,o){J(Yd,a._currentValue),a._currentValue=o}function br(n){n._currentValue=Yd.current,W(Yd)}function Bd(n,a,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,c!==null&&(c.childLanes|=a)):c!==null&&(c.childLanes&a)!==a&&(c.childLanes|=a),n===o)break;n=n.return}}function Xd(n,a,o,c){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var m=f.dependencies;if(m!==null){var x=f.child;m=m.firstContext;e:for(;m!==null;){var k=m;m=f;for(var z=0;z<a.length;z++)if(k.context===a[z]){m.lanes|=o,k=m.alternate,k!==null&&(k.lanes|=o),Bd(m.return,o,n),c||(x=null);break e}m=k.next}}else if(f.tag===18){if(x=f.return,x===null)throw Error(i(341));x.lanes|=o,m=x.alternate,m!==null&&(m.lanes|=o),Bd(x,o,n),x=null}else x=f.child;if(x!==null)x.return=f;else for(x=f;x!==null;){if(x===n){x=null;break}if(f=x.sibling,f!==null){f.return=x.return,x=f;break}x=x.return}f=x}}function Xo(n,a,o,c){n=null;for(var f=a,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var x=f.alternate;if(x===null)throw Error(i(387));if(x=x.memoizedProps,x!==null){var k=f.type;an(f.pendingProps.value,x.value)||(n!==null?n.push(k):n=[k])}}else if(f===ge.current){if(x=f.alternate,x===null)throw Error(i(387));x.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(bs):n=[bs])}f=f.return}n!==null&&Xd(a,n,o,c),a.flags|=262144}function Xl(n){for(n=n.firstContext;n!==null;){if(!an(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ra(n){za=n,yr=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Lt(n){return gv(za,n)}function Fl(n,a){return za===null&&Ra(n),gv(n,a)}function gv(n,a){var o=a._currentValue;if(a={context:a,memoizedValue:o,next:null},yr===null){if(n===null)throw Error(i(308));yr=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else yr=yr.next=a;return o}var tS=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(o,c){n.push(c)}};this.abort=function(){a.aborted=!0,n.forEach(function(o){return o()})}},nS=e.unstable_scheduleCallback,rS=e.unstable_NormalPriority,bt={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Fd(){return{controller:new tS,data:new Map,refCount:0}}function Fo(n){n.refCount--,n.refCount===0&&nS(rS,function(){n.controller.abort()})}var Po=null,Pd=0,Ni=0,Oi=null;function aS(n,a){if(Po===null){var o=Po=[];Pd=0,Ni=Qf(),Oi={status:"pending",value:void 0,then:function(c){o.push(c)}}}return Pd++,a.then(vv,vv),a}function vv(){if(--Pd===0&&Po!==null){Oi!==null&&(Oi.status="fulfilled");var n=Po;Po=null,Ni=0,Oi=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function iS(n,a){var o=[],c={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return n.then(function(){c.status="fulfilled",c.value=a;for(var f=0;f<o.length;f++)(0,o[f])(a)},function(f){for(c.status="rejected",c.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),c}var yv=E.S;E.S=function(n,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&aS(n,a),yv!==null&&yv(n,a)};var Da=H(null);function Gd(){var n=Da.current;return n!==null?n:Qe.pooledCache}function Pl(n,a){a===null?J(Da,Da.current):J(Da,a.pool)}function bv(){var n=Gd();return n===null?null:{parent:bt._currentValue,pool:n}}var Go=Error(i(460)),wv=Error(i(474)),Gl=Error(i(542)),Vd={then:function(){}};function xv(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Vl(){}function _v(n,a,o){switch(o=n[o],o===void 0?n.push(a):o!==a&&(a.then(Vl,Vl),a=o),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,Tv(n),n;default:if(typeof a.status=="string")a.then(Vl,Vl);else{if(n=Qe,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=a,n.status="pending",n.then(function(c){if(a.status==="pending"){var f=a;f.status="fulfilled",f.value=c}},function(c){if(a.status==="pending"){var f=a;f.status="rejected",f.reason=c}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,Tv(n),n}throw Vo=a,Go}}var Vo=null;function Sv(){if(Vo===null)throw Error(i(459));var n=Vo;return Vo=null,n}function Tv(n){if(n===Go||n===Gl)throw Error(i(483))}var Pr=!1;function Qd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wd(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Gr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Vr(n,a,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ie&2)!==0){var f=c.pending;return f===null?a.next=a:(a.next=f.next,f.next=a),c.pending=a,a=ql(n),uv(n,null,o),a}return Hl(n,c,a,o),ql(n)}function Qo(n,a,o){if(a=a.updateQueue,a!==null&&(a=a.shared,(o&4194048)!==0)){var c=a.lanes;c&=n.pendingLanes,o|=c,a.lanes=o,vg(n,o)}}function Zd(n,a){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var x={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=x:m=m.next=x,o=o.next}while(o!==null);m===null?f=m=a:m=m.next=a}else f=m=a;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=a:n.next=a,o.lastBaseUpdate=a}var Kd=!1;function Wo(){if(Kd){var n=Oi;if(n!==null)throw n}}function Zo(n,a,o,c){Kd=!1;var f=n.updateQueue;Pr=!1;var m=f.firstBaseUpdate,x=f.lastBaseUpdate,k=f.shared.pending;if(k!==null){f.shared.pending=null;var z=k,I=z.next;z.next=null,x===null?m=I:x.next=I,x=z;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,k=Q.lastBaseUpdate,k!==x&&(k===null?Q.firstBaseUpdate=I:k.next=I,Q.lastBaseUpdate=z))}if(m!==null){var K=f.baseState;x=0,Q=I=z=null,k=m;do{var B=k.lane&-536870913,X=B!==k.lane;if(X?(je&B)===B:(c&B)===B){B!==0&&B===Ni&&(Kd=!0),Q!==null&&(Q=Q.next={lane:0,tag:k.tag,payload:k.payload,callback:null,next:null});e:{var ve=n,pe=k;B=a;var Fe=o;switch(pe.tag){case 1:if(ve=pe.payload,typeof ve=="function"){K=ve.call(Fe,K,B);break e}K=ve;break e;case 3:ve.flags=ve.flags&-65537|128;case 0:if(ve=pe.payload,B=typeof ve=="function"?ve.call(Fe,K,B):ve,B==null)break e;K=y({},K,B);break e;case 2:Pr=!0}}B=k.callback,B!==null&&(n.flags|=64,X&&(n.flags|=8192),X=f.callbacks,X===null?f.callbacks=[B]:X.push(B))}else X={lane:B,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Q===null?(I=Q=X,z=K):Q=Q.next=X,x|=B;if(k=k.next,k===null){if(k=f.shared.pending,k===null)break;X=k,k=X.next,X.next=null,f.lastBaseUpdate=X,f.shared.pending=null}}while(!0);Q===null&&(z=K),f.baseState=z,f.firstBaseUpdate=I,f.lastBaseUpdate=Q,m===null&&(f.shared.lanes=0),na|=x,n.lanes=x,n.memoizedState=K}}function kv(n,a){if(typeof n!="function")throw Error(i(191,n));n.call(a)}function Ev(n,a){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)kv(o[n],a)}var Ai=H(null),Ql=H(0);function Cv(n,a){n=Er,J(Ql,n),J(Ai,a),Er=n|a.baseLanes}function Jd(){J(Ql,Er),J(Ai,Ai.current)}function ef(){Er=Ql.current,W(Ai),W(Ql)}var Qr=0,Me=null,Be=null,mt=null,Wl=!1,zi=!1,ja=!1,Zl=0,Ko=0,Ri=null,oS=0;function lt(){throw Error(i(321))}function tf(n,a){if(a===null)return!1;for(var o=0;o<a.length&&o<n.length;o++)if(!an(n[o],a[o]))return!1;return!0}function nf(n,a,o,c,f,m){return Qr=m,Me=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,E.H=n===null||n.memoizedState===null?u0:d0,ja=!1,m=o(c,f),ja=!1,zi&&(m=Nv(a,o,c,f)),Mv(n),m}function Mv(n){E.H=rc;var a=Be!==null&&Be.next!==null;if(Qr=0,mt=Be=Me=null,Wl=!1,Ko=0,Ri=null,a)throw Error(i(300));n===null||kt||(n=n.dependencies,n!==null&&Xl(n)&&(kt=!0))}function Nv(n,a,o,c){Me=n;var f=0;do{if(zi&&(Ri=null),Ko=0,zi=!1,25<=f)throw Error(i(301));if(f+=1,mt=Be=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}E.H=hS,m=a(o,c)}while(zi);return m}function sS(){var n=E.H,a=n.useState()[0];return a=typeof a.then=="function"?Jo(a):a,n=n.useState()[0],(Be!==null?Be.memoizedState:null)!==n&&(Me.flags|=1024),a}function rf(){var n=Zl!==0;return Zl=0,n}function af(n,a,o){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~o}function of(n){if(Wl){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}Wl=!1}Qr=0,mt=Be=Me=null,zi=!1,Ko=Zl=0,Ri=null}function Gt(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?Me.memoizedState=mt=n:mt=mt.next=n,mt}function gt(){if(Be===null){var n=Me.alternate;n=n!==null?n.memoizedState:null}else n=Be.next;var a=mt===null?Me.memoizedState:mt.next;if(a!==null)mt=a,Be=n;else{if(n===null)throw Me.alternate===null?Error(i(467)):Error(i(310));Be=n,n={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},mt===null?Me.memoizedState=mt=n:mt=mt.next=n}return mt}function sf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jo(n){var a=Ko;return Ko+=1,Ri===null&&(Ri=[]),n=_v(Ri,n,a),a=Me,(mt===null?a.memoizedState:mt.next)===null&&(a=a.alternate,E.H=a===null||a.memoizedState===null?u0:d0),n}function Kl(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Jo(n);if(n.$$typeof===A)return Lt(n)}throw Error(i(438,String(n)))}function lf(n){var a=null,o=Me.updateQueue;if(o!==null&&(a=o.memoCache),a==null){var c=Me.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(a={data:c.data.map(function(f){return f.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),o===null&&(o=sf(),Me.updateQueue=o),o.memoCache=a,o=a.data[a.index],o===void 0)for(o=a.data[a.index]=Array(n),c=0;c<n;c++)o[c]=ue;return a.index++,o}function wr(n,a){return typeof a=="function"?a(n):a}function Jl(n){var a=gt();return cf(a,Be,n)}function cf(n,a,o){var c=n.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=o;var f=n.baseQueue,m=c.pending;if(m!==null){if(f!==null){var x=f.next;f.next=m.next,m.next=x}a.baseQueue=f=m,c.pending=null}if(m=n.baseState,f===null)n.memoizedState=m;else{a=f.next;var k=x=null,z=null,I=a,Q=!1;do{var K=I.lane&-536870913;if(K!==I.lane?(je&K)===K:(Qr&K)===K){var B=I.revertLane;if(B===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null}),K===Ni&&(Q=!0);else if((Qr&B)===B){I=I.next,B===Ni&&(Q=!0);continue}else K={lane:0,revertLane:I.revertLane,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null},z===null?(k=z=K,x=m):z=z.next=K,Me.lanes|=B,na|=B;K=I.action,ja&&o(m,K),m=I.hasEagerState?I.eagerState:o(m,K)}else B={lane:K,revertLane:I.revertLane,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null},z===null?(k=z=B,x=m):z=z.next=B,Me.lanes|=K,na|=K;I=I.next}while(I!==null&&I!==a);if(z===null?x=m:z.next=k,!an(m,n.memoizedState)&&(kt=!0,Q&&(o=Oi,o!==null)))throw o;n.memoizedState=m,n.baseState=x,n.baseQueue=z,c.lastRenderedState=m}return f===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function uf(n){var a=gt(),o=a.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=n;var c=o.dispatch,f=o.pending,m=a.memoizedState;if(f!==null){o.pending=null;var x=f=f.next;do m=n(m,x.action),x=x.next;while(x!==f);an(m,a.memoizedState)||(kt=!0),a.memoizedState=m,a.baseQueue===null&&(a.baseState=m),o.lastRenderedState=m}return[m,c]}function Ov(n,a,o){var c=Me,f=gt(),m=He;if(m){if(o===void 0)throw Error(i(407));o=o()}else o=a();var x=!an((Be||f).memoizedState,o);x&&(f.memoizedState=o,kt=!0),f=f.queue;var k=Rv.bind(null,c,f,n);if(es(2048,8,k,[n]),f.getSnapshot!==a||x||mt!==null&&mt.memoizedState.tag&1){if(c.flags|=2048,Di(9,ec(),zv.bind(null,c,f,o,a),null),Qe===null)throw Error(i(349));m||(Qr&124)!==0||Av(c,a,o)}return o}function Av(n,a,o){n.flags|=16384,n={getSnapshot:a,value:o},a=Me.updateQueue,a===null?(a=sf(),Me.updateQueue=a,a.stores=[n]):(o=a.stores,o===null?a.stores=[n]:o.push(n))}function zv(n,a,o,c){a.value=o,a.getSnapshot=c,Dv(a)&&jv(n)}function Rv(n,a,o){return o(function(){Dv(a)&&jv(n)})}function Dv(n){var a=n.getSnapshot;n=n.value;try{var o=a();return!an(n,o)}catch{return!0}}function jv(n){var a=ki(n,2);a!==null&&dn(a,n,2)}function df(n){var a=Gt();if(typeof n=="function"){var o=n;if(n=o(),ja){Yr(!0);try{o()}finally{Yr(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wr,lastRenderedState:n},a}function Uv(n,a,o,c){return n.baseState=o,cf(n,Be,typeof c=="function"?c:wr)}function lS(n,a,o,c,f){if(nc(n))throw Error(i(485));if(n=a.action,n!==null){var m={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){m.listeners.push(x)}};E.T!==null?o(!0):m.isTransition=!1,c(m),o=a.pending,o===null?(m.next=a.pending=m,Lv(a,m)):(m.next=o.next,a.pending=o.next=m)}}function Lv(n,a){var o=a.action,c=a.payload,f=n.state;if(a.isTransition){var m=E.T,x={};E.T=x;try{var k=o(f,c),z=E.S;z!==null&&z(x,k),$v(n,a,k)}catch(I){ff(n,a,I)}finally{E.T=m}}else try{m=o(f,c),$v(n,a,m)}catch(I){ff(n,a,I)}}function $v(n,a,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(c){Hv(n,a,c)},function(c){return ff(n,a,c)}):Hv(n,a,o)}function Hv(n,a,o){a.status="fulfilled",a.value=o,qv(a),n.state=o,a=n.pending,a!==null&&(o=a.next,o===a?n.pending=null:(o=o.next,a.next=o,Lv(n,o)))}function ff(n,a,o){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do a.status="rejected",a.reason=o,qv(a),a=a.next;while(a!==c)}n.action=null}function qv(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function Iv(n,a){return a}function Yv(n,a){if(He){var o=Qe.formState;if(o!==null){e:{var c=Me;if(He){if(at){t:{for(var f=at,m=er;f.nodeType!==8;){if(!m){f=null;break t}if(f=Hn(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){at=Hn(f.nextSibling),c=f.data==="F!";break e}}Aa(c)}c=!1}c&&(a=o[0])}}return o=Gt(),o.memoizedState=o.baseState=a,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Iv,lastRenderedState:a},o.queue=c,o=s0.bind(null,Me,c),c.dispatch=o,c=df(!1),m=vf.bind(null,Me,!1,c.queue),c=Gt(),f={state:a,dispatch:null,action:n,pending:null},c.queue=f,o=lS.bind(null,Me,f,m,o),f.dispatch=o,c.memoizedState=n,[a,o,!1]}function Bv(n){var a=gt();return Xv(a,Be,n)}function Xv(n,a,o){if(a=cf(n,a,Iv)[0],n=Jl(wr)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var c=Jo(a)}catch(x){throw x===Go?Gl:x}else c=a;a=gt();var f=a.queue,m=f.dispatch;return o!==a.memoizedState&&(Me.flags|=2048,Di(9,ec(),cS.bind(null,f,o),null)),[c,m,n]}function cS(n,a){n.action=a}function Fv(n){var a=gt(),o=Be;if(o!==null)return Xv(a,o,n);gt(),a=a.memoizedState,o=gt();var c=o.queue.dispatch;return o.memoizedState=n,[a,c,!1]}function Di(n,a,o,c){return n={tag:n,create:o,deps:c,inst:a,next:null},a=Me.updateQueue,a===null&&(a=sf(),Me.updateQueue=a),o=a.lastEffect,o===null?a.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,a.lastEffect=n),n}function ec(){return{destroy:void 0,resource:void 0}}function Pv(){return gt().memoizedState}function tc(n,a,o,c){var f=Gt();c=c===void 0?null:c,Me.flags|=n,f.memoizedState=Di(1|a,ec(),o,c)}function es(n,a,o,c){var f=gt();c=c===void 0?null:c;var m=f.memoizedState.inst;Be!==null&&c!==null&&tf(c,Be.memoizedState.deps)?f.memoizedState=Di(a,m,o,c):(Me.flags|=n,f.memoizedState=Di(1|a,m,o,c))}function Gv(n,a){tc(8390656,8,n,a)}function Vv(n,a){es(2048,8,n,a)}function Qv(n,a){return es(4,2,n,a)}function Wv(n,a){return es(4,4,n,a)}function Zv(n,a){if(typeof a=="function"){n=n();var o=a(n);return function(){typeof o=="function"?o():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function Kv(n,a,o){o=o!=null?o.concat([n]):null,es(4,4,Zv.bind(null,a,n),o)}function hf(){}function Jv(n,a){var o=gt();a=a===void 0?null:a;var c=o.memoizedState;return a!==null&&tf(a,c[1])?c[0]:(o.memoizedState=[n,a],n)}function e0(n,a){var o=gt();a=a===void 0?null:a;var c=o.memoizedState;if(a!==null&&tf(a,c[1]))return c[0];if(c=n(),ja){Yr(!0);try{n()}finally{Yr(!1)}}return o.memoizedState=[c,a],c}function pf(n,a,o){return o===void 0||(Qr&1073741824)!==0?n.memoizedState=a:(n.memoizedState=o,n=ry(),Me.lanes|=n,na|=n,o)}function t0(n,a,o,c){return an(o,a)?o:Ai.current!==null?(n=pf(n,o,c),an(n,a)||(kt=!0),n):(Qr&42)===0?(kt=!0,n.memoizedState=o):(n=ry(),Me.lanes|=n,na|=n,a)}function n0(n,a,o,c,f){var m=O.p;O.p=m!==0&&8>m?m:8;var x=E.T,k={};E.T=k,vf(n,!1,a,o);try{var z=f(),I=E.S;if(I!==null&&I(k,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var Q=iS(z,c);ts(n,a,Q,un(n))}else ts(n,a,c,un(n))}catch(K){ts(n,a,{then:function(){},status:"rejected",reason:K},un())}finally{O.p=m,E.T=x}}function uS(){}function mf(n,a,o,c){if(n.tag!==5)throw Error(i(476));var f=r0(n).queue;n0(n,f,a,R,o===null?uS:function(){return a0(n),o(c)})}function r0(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:R,baseState:R,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wr,lastRenderedState:R},next:null};var o={};return a.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wr,lastRenderedState:o},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function a0(n){var a=r0(n).next.queue;ts(n,a,{},un())}function gf(){return Lt(bs)}function i0(){return gt().memoizedState}function o0(){return gt().memoizedState}function dS(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var o=un();n=Gr(o);var c=Vr(a,n,o);c!==null&&(dn(c,a,o),Qo(c,a,o)),a={cache:Fd()},n.payload=a;return}a=a.return}}function fS(n,a,o){var c=un();o={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},nc(n)?l0(a,o):(o=jd(n,a,o,c),o!==null&&(dn(o,n,c),c0(o,a,c)))}function s0(n,a,o){var c=un();ts(n,a,o,c)}function ts(n,a,o,c){var f={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(nc(n))l0(a,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=a.lastRenderedReducer,m!==null))try{var x=a.lastRenderedState,k=m(x,o);if(f.hasEagerState=!0,f.eagerState=k,an(k,x))return Hl(n,a,f,0),Qe===null&&$l(),!1}catch{}finally{}if(o=jd(n,a,f,c),o!==null)return dn(o,n,c),c0(o,a,c),!0}return!1}function vf(n,a,o,c){if(c={lane:2,revertLane:Qf(),action:c,hasEagerState:!1,eagerState:null,next:null},nc(n)){if(a)throw Error(i(479))}else a=jd(n,o,c,2),a!==null&&dn(a,n,2)}function nc(n){var a=n.alternate;return n===Me||a!==null&&a===Me}function l0(n,a){zi=Wl=!0;var o=n.pending;o===null?a.next=a:(a.next=o.next,o.next=a),n.pending=a}function c0(n,a,o){if((o&4194048)!==0){var c=a.lanes;c&=n.pendingLanes,o|=c,a.lanes=o,vg(n,o)}}var rc={readContext:Lt,use:Kl,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useLayoutEffect:lt,useInsertionEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useSyncExternalStore:lt,useId:lt,useHostTransitionStatus:lt,useFormState:lt,useActionState:lt,useOptimistic:lt,useMemoCache:lt,useCacheRefresh:lt},u0={readContext:Lt,use:Kl,useCallback:function(n,a){return Gt().memoizedState=[n,a===void 0?null:a],n},useContext:Lt,useEffect:Gv,useImperativeHandle:function(n,a,o){o=o!=null?o.concat([n]):null,tc(4194308,4,Zv.bind(null,a,n),o)},useLayoutEffect:function(n,a){return tc(4194308,4,n,a)},useInsertionEffect:function(n,a){tc(4,2,n,a)},useMemo:function(n,a){var o=Gt();a=a===void 0?null:a;var c=n();if(ja){Yr(!0);try{n()}finally{Yr(!1)}}return o.memoizedState=[c,a],c},useReducer:function(n,a,o){var c=Gt();if(o!==void 0){var f=o(a);if(ja){Yr(!0);try{o(a)}finally{Yr(!1)}}}else f=a;return c.memoizedState=c.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},c.queue=n,n=n.dispatch=fS.bind(null,Me,n),[c.memoizedState,n]},useRef:function(n){var a=Gt();return n={current:n},a.memoizedState=n},useState:function(n){n=df(n);var a=n.queue,o=s0.bind(null,Me,a);return a.dispatch=o,[n.memoizedState,o]},useDebugValue:hf,useDeferredValue:function(n,a){var o=Gt();return pf(o,n,a)},useTransition:function(){var n=df(!1);return n=n0.bind(null,Me,n.queue,!0,!1),Gt().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,o){var c=Me,f=Gt();if(He){if(o===void 0)throw Error(i(407));o=o()}else{if(o=a(),Qe===null)throw Error(i(349));(je&124)!==0||Av(c,a,o)}f.memoizedState=o;var m={value:o,getSnapshot:a};return f.queue=m,Gv(Rv.bind(null,c,m,n),[n]),c.flags|=2048,Di(9,ec(),zv.bind(null,c,m,o,a),null),o},useId:function(){var n=Gt(),a=Qe.identifierPrefix;if(He){var o=vr,c=gr;o=(c&~(1<<32-rn(c)-1)).toString(32)+o,a="«"+a+"R"+o,o=Zl++,0<o&&(a+="H"+o.toString(32)),a+="»"}else o=oS++,a="«"+a+"r"+o.toString(32)+"»";return n.memoizedState=a},useHostTransitionStatus:gf,useFormState:Yv,useActionState:Yv,useOptimistic:function(n){var a=Gt();a.memoizedState=a.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=o,a=vf.bind(null,Me,!0,o),o.dispatch=a,[n,a]},useMemoCache:lf,useCacheRefresh:function(){return Gt().memoizedState=dS.bind(null,Me)}},d0={readContext:Lt,use:Kl,useCallback:Jv,useContext:Lt,useEffect:Vv,useImperativeHandle:Kv,useInsertionEffect:Qv,useLayoutEffect:Wv,useMemo:e0,useReducer:Jl,useRef:Pv,useState:function(){return Jl(wr)},useDebugValue:hf,useDeferredValue:function(n,a){var o=gt();return t0(o,Be.memoizedState,n,a)},useTransition:function(){var n=Jl(wr)[0],a=gt().memoizedState;return[typeof n=="boolean"?n:Jo(n),a]},useSyncExternalStore:Ov,useId:i0,useHostTransitionStatus:gf,useFormState:Bv,useActionState:Bv,useOptimistic:function(n,a){var o=gt();return Uv(o,Be,n,a)},useMemoCache:lf,useCacheRefresh:o0},hS={readContext:Lt,use:Kl,useCallback:Jv,useContext:Lt,useEffect:Vv,useImperativeHandle:Kv,useInsertionEffect:Qv,useLayoutEffect:Wv,useMemo:e0,useReducer:uf,useRef:Pv,useState:function(){return uf(wr)},useDebugValue:hf,useDeferredValue:function(n,a){var o=gt();return Be===null?pf(o,n,a):t0(o,Be.memoizedState,n,a)},useTransition:function(){var n=uf(wr)[0],a=gt().memoizedState;return[typeof n=="boolean"?n:Jo(n),a]},useSyncExternalStore:Ov,useId:i0,useHostTransitionStatus:gf,useFormState:Fv,useActionState:Fv,useOptimistic:function(n,a){var o=gt();return Be!==null?Uv(o,Be,n,a):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:lf,useCacheRefresh:o0},ji=null,ns=0;function ac(n){var a=ns;return ns+=1,ji===null&&(ji=[]),_v(ji,n,a)}function rs(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function ic(n,a){throw a.$$typeof===g?Error(i(525)):(n=Object.prototype.toString.call(a),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function f0(n){var a=n._init;return a(n._payload)}function h0(n){function a($,j){if(n){var q=$.deletions;q===null?($.deletions=[j],$.flags|=16):q.push(j)}}function o($,j){if(!n)return null;for(;j!==null;)a($,j),j=j.sibling;return null}function c($){for(var j=new Map;$!==null;)$.key!==null?j.set($.key,$):j.set($.index,$),$=$.sibling;return j}function f($,j){return $=mr($,j),$.index=0,$.sibling=null,$}function m($,j,q){return $.index=q,n?(q=$.alternate,q!==null?(q=q.index,q<j?($.flags|=67108866,j):q):($.flags|=67108866,j)):($.flags|=1048576,j)}function x($){return n&&$.alternate===null&&($.flags|=67108866),$}function k($,j,q,Z){return j===null||j.tag!==6?(j=Ld(q,$.mode,Z),j.return=$,j):(j=f(j,q),j.return=$,j)}function z($,j,q,Z){var ce=q.type;return ce===S?Q($,j,q.props.children,Z,q.key):j!==null&&(j.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===ee&&f0(ce)===j.type)?(j=f(j,q.props),rs(j,q),j.return=$,j):(j=Il(q.type,q.key,q.props,null,$.mode,Z),rs(j,q),j.return=$,j)}function I($,j,q,Z){return j===null||j.tag!==4||j.stateNode.containerInfo!==q.containerInfo||j.stateNode.implementation!==q.implementation?(j=$d(q,$.mode,Z),j.return=$,j):(j=f(j,q.children||[]),j.return=$,j)}function Q($,j,q,Z,ce){return j===null||j.tag!==7?(j=Ca(q,$.mode,Z,ce),j.return=$,j):(j=f(j,q),j.return=$,j)}function K($,j,q){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Ld(""+j,$.mode,q),j.return=$,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case w:return q=Il(j.type,j.key,j.props,null,$.mode,q),rs(q,j),q.return=$,q;case b:return j=$d(j,$.mode,q),j.return=$,j;case ee:var Z=j._init;return j=Z(j._payload),K($,j,q)}if(_e(j)||ae(j))return j=Ca(j,$.mode,q,null),j.return=$,j;if(typeof j.then=="function")return K($,ac(j),q);if(j.$$typeof===A)return K($,Fl($,j),q);ic($,j)}return null}function B($,j,q,Z){var ce=j!==null?j.key:null;if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return ce!==null?null:k($,j,""+q,Z);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case w:return q.key===ce?z($,j,q,Z):null;case b:return q.key===ce?I($,j,q,Z):null;case ee:return ce=q._init,q=ce(q._payload),B($,j,q,Z)}if(_e(q)||ae(q))return ce!==null?null:Q($,j,q,Z,null);if(typeof q.then=="function")return B($,j,ac(q),Z);if(q.$$typeof===A)return B($,j,Fl($,q),Z);ic($,q)}return null}function X($,j,q,Z,ce){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return $=$.get(q)||null,k(j,$,""+Z,ce);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case w:return $=$.get(Z.key===null?q:Z.key)||null,z(j,$,Z,ce);case b:return $=$.get(Z.key===null?q:Z.key)||null,I(j,$,Z,ce);case ee:var Oe=Z._init;return Z=Oe(Z._payload),X($,j,q,Z,ce)}if(_e(Z)||ae(Z))return $=$.get(q)||null,Q(j,$,Z,ce,null);if(typeof Z.then=="function")return X($,j,q,ac(Z),ce);if(Z.$$typeof===A)return X($,j,q,Fl(j,Z),ce);ic(j,Z)}return null}function ve($,j,q,Z){for(var ce=null,Oe=null,fe=j,me=j=0,Ct=null;fe!==null&&me<q.length;me++){fe.index>me?(Ct=fe,fe=null):Ct=fe.sibling;var $e=B($,fe,q[me],Z);if($e===null){fe===null&&(fe=Ct);break}n&&fe&&$e.alternate===null&&a($,fe),j=m($e,j,me),Oe===null?ce=$e:Oe.sibling=$e,Oe=$e,fe=Ct}if(me===q.length)return o($,fe),He&&Na($,me),ce;if(fe===null){for(;me<q.length;me++)fe=K($,q[me],Z),fe!==null&&(j=m(fe,j,me),Oe===null?ce=fe:Oe.sibling=fe,Oe=fe);return He&&Na($,me),ce}for(fe=c(fe);me<q.length;me++)Ct=X(fe,$,me,q[me],Z),Ct!==null&&(n&&Ct.alternate!==null&&fe.delete(Ct.key===null?me:Ct.key),j=m(Ct,j,me),Oe===null?ce=Ct:Oe.sibling=Ct,Oe=Ct);return n&&fe.forEach(function(da){return a($,da)}),He&&Na($,me),ce}function pe($,j,q,Z){if(q==null)throw Error(i(151));for(var ce=null,Oe=null,fe=j,me=j=0,Ct=null,$e=q.next();fe!==null&&!$e.done;me++,$e=q.next()){fe.index>me?(Ct=fe,fe=null):Ct=fe.sibling;var da=B($,fe,$e.value,Z);if(da===null){fe===null&&(fe=Ct);break}n&&fe&&da.alternate===null&&a($,fe),j=m(da,j,me),Oe===null?ce=da:Oe.sibling=da,Oe=da,fe=Ct}if($e.done)return o($,fe),He&&Na($,me),ce;if(fe===null){for(;!$e.done;me++,$e=q.next())$e=K($,$e.value,Z),$e!==null&&(j=m($e,j,me),Oe===null?ce=$e:Oe.sibling=$e,Oe=$e);return He&&Na($,me),ce}for(fe=c(fe);!$e.done;me++,$e=q.next())$e=X(fe,$,me,$e.value,Z),$e!==null&&(n&&$e.alternate!==null&&fe.delete($e.key===null?me:$e.key),j=m($e,j,me),Oe===null?ce=$e:Oe.sibling=$e,Oe=$e);return n&&fe.forEach(function(pT){return a($,pT)}),He&&Na($,me),ce}function Fe($,j,q,Z){if(typeof q=="object"&&q!==null&&q.type===S&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case w:e:{for(var ce=q.key;j!==null;){if(j.key===ce){if(ce=q.type,ce===S){if(j.tag===7){o($,j.sibling),Z=f(j,q.props.children),Z.return=$,$=Z;break e}}else if(j.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===ee&&f0(ce)===j.type){o($,j.sibling),Z=f(j,q.props),rs(Z,q),Z.return=$,$=Z;break e}o($,j);break}else a($,j);j=j.sibling}q.type===S?(Z=Ca(q.props.children,$.mode,Z,q.key),Z.return=$,$=Z):(Z=Il(q.type,q.key,q.props,null,$.mode,Z),rs(Z,q),Z.return=$,$=Z)}return x($);case b:e:{for(ce=q.key;j!==null;){if(j.key===ce)if(j.tag===4&&j.stateNode.containerInfo===q.containerInfo&&j.stateNode.implementation===q.implementation){o($,j.sibling),Z=f(j,q.children||[]),Z.return=$,$=Z;break e}else{o($,j);break}else a($,j);j=j.sibling}Z=$d(q,$.mode,Z),Z.return=$,$=Z}return x($);case ee:return ce=q._init,q=ce(q._payload),Fe($,j,q,Z)}if(_e(q))return ve($,j,q,Z);if(ae(q)){if(ce=ae(q),typeof ce!="function")throw Error(i(150));return q=ce.call(q),pe($,j,q,Z)}if(typeof q.then=="function")return Fe($,j,ac(q),Z);if(q.$$typeof===A)return Fe($,j,Fl($,q),Z);ic($,q)}return typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint"?(q=""+q,j!==null&&j.tag===6?(o($,j.sibling),Z=f(j,q),Z.return=$,$=Z):(o($,j),Z=Ld(q,$.mode,Z),Z.return=$,$=Z),x($)):o($,j)}return function($,j,q,Z){try{ns=0;var ce=Fe($,j,q,Z);return ji=null,ce}catch(fe){if(fe===Go||fe===Gl)throw fe;var Oe=on(29,fe,null,$.mode);return Oe.lanes=Z,Oe.return=$,Oe}finally{}}}var Ui=h0(!0),p0=h0(!1),En=H(null),tr=null;function Wr(n){var a=n.alternate;J(wt,wt.current&1),J(En,n),tr===null&&(a===null||Ai.current!==null||a.memoizedState!==null)&&(tr=n)}function m0(n){if(n.tag===22){if(J(wt,wt.current),J(En,n),tr===null){var a=n.alternate;a!==null&&a.memoizedState!==null&&(tr=n)}}else Zr()}function Zr(){J(wt,wt.current),J(En,En.current)}function xr(n){W(En),tr===n&&(tr=null),W(wt)}var wt=H(0);function oc(n){for(var a=n;a!==null;){if(a.tag===13){var o=a.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||sh(o)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function yf(n,a,o,c){a=n.memoizedState,o=o(c,a),o=o==null?a:y({},a,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var bf={enqueueSetState:function(n,a,o){n=n._reactInternals;var c=un(),f=Gr(c);f.payload=a,o!=null&&(f.callback=o),a=Vr(n,f,c),a!==null&&(dn(a,n,c),Qo(a,n,c))},enqueueReplaceState:function(n,a,o){n=n._reactInternals;var c=un(),f=Gr(c);f.tag=1,f.payload=a,o!=null&&(f.callback=o),a=Vr(n,f,c),a!==null&&(dn(a,n,c),Qo(a,n,c))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var o=un(),c=Gr(o);c.tag=2,a!=null&&(c.callback=a),a=Vr(n,c,o),a!==null&&(dn(a,n,o),Qo(a,n,o))}};function g0(n,a,o,c,f,m,x){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,x):a.prototype&&a.prototype.isPureReactComponent?!Ho(o,c)||!Ho(f,m):!0}function v0(n,a,o,c){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(o,c),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(o,c),a.state!==n&&bf.enqueueReplaceState(a,a.state,null)}function Ua(n,a){var o=a;if("ref"in a){o={};for(var c in a)c!=="ref"&&(o[c]=a[c])}if(n=n.defaultProps){o===a&&(o=y({},o));for(var f in n)o[f]===void 0&&(o[f]=n[f])}return o}var sc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function y0(n){sc(n)}function b0(n){console.error(n)}function w0(n){sc(n)}function lc(n,a){try{var o=n.onUncaughtError;o(a.value,{componentStack:a.stack})}catch(c){setTimeout(function(){throw c})}}function x0(n,a,o){try{var c=n.onCaughtError;c(o.value,{componentStack:o.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function wf(n,a,o){return o=Gr(o),o.tag=3,o.payload={element:null},o.callback=function(){lc(n,a)},o}function _0(n){return n=Gr(n),n.tag=3,n}function S0(n,a,o,c){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=c.value;n.payload=function(){return f(m)},n.callback=function(){x0(a,o,c)}}var x=o.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(n.callback=function(){x0(a,o,c),typeof f!="function"&&(ra===null?ra=new Set([this]):ra.add(this));var k=c.stack;this.componentDidCatch(c.value,{componentStack:k!==null?k:""})})}function pS(n,a,o,c,f){if(o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(a=o.alternate,a!==null&&Xo(a,o,f,!0),o=En.current,o!==null){switch(o.tag){case 13:return tr===null?Xf():o.alternate===null&&it===0&&(it=3),o.flags&=-257,o.flags|=65536,o.lanes=f,c===Vd?o.flags|=16384:(a=o.updateQueue,a===null?o.updateQueue=new Set([c]):a.add(c),Pf(n,c,f)),!1;case 22:return o.flags|=65536,c===Vd?o.flags|=16384:(a=o.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([c])},o.updateQueue=a):(o=a.retryQueue,o===null?a.retryQueue=new Set([c]):o.add(c)),Pf(n,c,f)),!1}throw Error(i(435,o.tag))}return Pf(n,c,f),Xf(),!1}if(He)return a=En.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=f,c!==Id&&(n=Error(i(422),{cause:c}),Bo(_n(n,o)))):(c!==Id&&(a=Error(i(423),{cause:c}),Bo(_n(a,o))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,c=_n(c,o),f=wf(n.stateNode,c,f),Zd(n,f),it!==4&&(it=2)),!1;var m=Error(i(520),{cause:c});if(m=_n(m,o),us===null?us=[m]:us.push(m),it!==4&&(it=2),a===null)return!0;c=_n(c,o),o=a;do{switch(o.tag){case 3:return o.flags|=65536,n=f&-f,o.lanes|=n,n=wf(o.stateNode,c,n),Zd(o,n),!1;case 1:if(a=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ra===null||!ra.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=_0(f),S0(f,n,o,c),Zd(o,f),!1}o=o.return}while(o!==null);return!1}var T0=Error(i(461)),kt=!1;function At(n,a,o,c){a.child=n===null?p0(a,null,o,c):Ui(a,n.child,o,c)}function k0(n,a,o,c,f){o=o.render;var m=a.ref;if("ref"in c){var x={};for(var k in c)k!=="ref"&&(x[k]=c[k])}else x=c;return Ra(a),c=nf(n,a,o,x,m,f),k=rf(),n!==null&&!kt?(af(n,a,f),_r(n,a,f)):(He&&k&&Hd(a),a.flags|=1,At(n,a,c,f),a.child)}function E0(n,a,o,c,f){if(n===null){var m=o.type;return typeof m=="function"&&!Ud(m)&&m.defaultProps===void 0&&o.compare===null?(a.tag=15,a.type=m,C0(n,a,m,c,f)):(n=Il(o.type,null,c,a,a.mode,f),n.ref=a.ref,n.return=a,a.child=n)}if(m=n.child,!Mf(n,f)){var x=m.memoizedProps;if(o=o.compare,o=o!==null?o:Ho,o(x,c)&&n.ref===a.ref)return _r(n,a,f)}return a.flags|=1,n=mr(m,c),n.ref=a.ref,n.return=a,a.child=n}function C0(n,a,o,c,f){if(n!==null){var m=n.memoizedProps;if(Ho(m,c)&&n.ref===a.ref)if(kt=!1,a.pendingProps=c=m,Mf(n,f))(n.flags&131072)!==0&&(kt=!0);else return a.lanes=n.lanes,_r(n,a,f)}return xf(n,a,o,c,f)}function M0(n,a,o){var c=a.pendingProps,f=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden"){if((a.flags&128)!==0){if(c=m!==null?m.baseLanes|o:o,n!==null){for(f=a.child=n.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;a.childLanes=m&~c}else a.childLanes=0,a.child=null;return N0(n,a,c,o)}if((o&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&Pl(a,m!==null?m.cachePool:null),m!==null?Cv(a,m):Jd(),m0(a);else return a.lanes=a.childLanes=536870912,N0(n,a,m!==null?m.baseLanes|o:o,o)}else m!==null?(Pl(a,m.cachePool),Cv(a,m),Zr(),a.memoizedState=null):(n!==null&&Pl(a,null),Jd(),Zr());return At(n,a,f,o),a.child}function N0(n,a,o,c){var f=Gd();return f=f===null?null:{parent:bt._currentValue,pool:f},a.memoizedState={baseLanes:o,cachePool:f},n!==null&&Pl(a,null),Jd(),m0(a),n!==null&&Xo(n,a,c,!0),null}function cc(n,a){var o=a.ref;if(o===null)n!==null&&n.ref!==null&&(a.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(n===null||n.ref!==o)&&(a.flags|=4194816)}}function xf(n,a,o,c,f){return Ra(a),o=nf(n,a,o,c,void 0,f),c=rf(),n!==null&&!kt?(af(n,a,f),_r(n,a,f)):(He&&c&&Hd(a),a.flags|=1,At(n,a,o,f),a.child)}function O0(n,a,o,c,f,m){return Ra(a),a.updateQueue=null,o=Nv(a,c,o,f),Mv(n),c=rf(),n!==null&&!kt?(af(n,a,m),_r(n,a,m)):(He&&c&&Hd(a),a.flags|=1,At(n,a,o,m),a.child)}function A0(n,a,o,c,f){if(Ra(a),a.stateNode===null){var m=Ei,x=o.contextType;typeof x=="object"&&x!==null&&(m=Lt(x)),m=new o(c,m),a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=bf,a.stateNode=m,m._reactInternals=a,m=a.stateNode,m.props=c,m.state=a.memoizedState,m.refs={},Qd(a),x=o.contextType,m.context=typeof x=="object"&&x!==null?Lt(x):Ei,m.state=a.memoizedState,x=o.getDerivedStateFromProps,typeof x=="function"&&(yf(a,o,x,c),m.state=a.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(x=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),x!==m.state&&bf.enqueueReplaceState(m,m.state,null),Zo(a,c,m,f),Wo(),m.state=a.memoizedState),typeof m.componentDidMount=="function"&&(a.flags|=4194308),c=!0}else if(n===null){m=a.stateNode;var k=a.memoizedProps,z=Ua(o,k);m.props=z;var I=m.context,Q=o.contextType;x=Ei,typeof Q=="object"&&Q!==null&&(x=Lt(Q));var K=o.getDerivedStateFromProps;Q=typeof K=="function"||typeof m.getSnapshotBeforeUpdate=="function",k=a.pendingProps!==k,Q||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(k||I!==x)&&v0(a,m,c,x),Pr=!1;var B=a.memoizedState;m.state=B,Zo(a,c,m,f),Wo(),I=a.memoizedState,k||B!==I||Pr?(typeof K=="function"&&(yf(a,o,K,c),I=a.memoizedState),(z=Pr||g0(a,o,z,c,B,I,x))?(Q||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(a.flags|=4194308)):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=c,a.memoizedState=I),m.props=c,m.state=I,m.context=x,c=z):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),c=!1)}else{m=a.stateNode,Wd(n,a),x=a.memoizedProps,Q=Ua(o,x),m.props=Q,K=a.pendingProps,B=m.context,I=o.contextType,z=Ei,typeof I=="object"&&I!==null&&(z=Lt(I)),k=o.getDerivedStateFromProps,(I=typeof k=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(x!==K||B!==z)&&v0(a,m,c,z),Pr=!1,B=a.memoizedState,m.state=B,Zo(a,c,m,f),Wo();var X=a.memoizedState;x!==K||B!==X||Pr||n!==null&&n.dependencies!==null&&Xl(n.dependencies)?(typeof k=="function"&&(yf(a,o,k,c),X=a.memoizedState),(Q=Pr||g0(a,o,Q,c,B,X,z)||n!==null&&n.dependencies!==null&&Xl(n.dependencies))?(I||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,X,z),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,X,z)),typeof m.componentDidUpdate=="function"&&(a.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof m.componentDidUpdate!="function"||x===n.memoizedProps&&B===n.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||x===n.memoizedProps&&B===n.memoizedState||(a.flags|=1024),a.memoizedProps=c,a.memoizedState=X),m.props=c,m.state=X,m.context=z,c=Q):(typeof m.componentDidUpdate!="function"||x===n.memoizedProps&&B===n.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||x===n.memoizedProps&&B===n.memoizedState||(a.flags|=1024),c=!1)}return m=c,cc(n,a),c=(a.flags&128)!==0,m||c?(m=a.stateNode,o=c&&typeof o.getDerivedStateFromError!="function"?null:m.render(),a.flags|=1,n!==null&&c?(a.child=Ui(a,n.child,null,f),a.child=Ui(a,null,o,f)):At(n,a,o,f),a.memoizedState=m.state,n=a.child):n=_r(n,a,f),n}function z0(n,a,o,c){return Yo(),a.flags|=256,At(n,a,o,c),a.child}var _f={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sf(n){return{baseLanes:n,cachePool:bv()}}function Tf(n,a,o){return n=n!==null?n.childLanes&~o:0,a&&(n|=Cn),n}function R0(n,a,o){var c=a.pendingProps,f=!1,m=(a.flags&128)!==0,x;if((x=m)||(x=n!==null&&n.memoizedState===null?!1:(wt.current&2)!==0),x&&(f=!0,a.flags&=-129),x=(a.flags&32)!==0,a.flags&=-33,n===null){if(He){if(f?Wr(a):Zr(),He){var k=at,z;if(z=k){e:{for(z=k,k=er;z.nodeType!==8;){if(!k){k=null;break e}if(z=Hn(z.nextSibling),z===null){k=null;break e}}k=z}k!==null?(a.memoizedState={dehydrated:k,treeContext:Ma!==null?{id:gr,overflow:vr}:null,retryLane:536870912,hydrationErrors:null},z=on(18,null,null,0),z.stateNode=k,z.return=a,a.child=z,Yt=a,at=null,z=!0):z=!1}z||Aa(a)}if(k=a.memoizedState,k!==null&&(k=k.dehydrated,k!==null))return sh(k)?a.lanes=32:a.lanes=536870912,null;xr(a)}return k=c.children,c=c.fallback,f?(Zr(),f=a.mode,k=uc({mode:"hidden",children:k},f),c=Ca(c,f,o,null),k.return=a,c.return=a,k.sibling=c,a.child=k,f=a.child,f.memoizedState=Sf(o),f.childLanes=Tf(n,x,o),a.memoizedState=_f,c):(Wr(a),kf(a,k))}if(z=n.memoizedState,z!==null&&(k=z.dehydrated,k!==null)){if(m)a.flags&256?(Wr(a),a.flags&=-257,a=Ef(n,a,o)):a.memoizedState!==null?(Zr(),a.child=n.child,a.flags|=128,a=null):(Zr(),f=c.fallback,k=a.mode,c=uc({mode:"visible",children:c.children},k),f=Ca(f,k,o,null),f.flags|=2,c.return=a,f.return=a,c.sibling=f,a.child=c,Ui(a,n.child,null,o),c=a.child,c.memoizedState=Sf(o),c.childLanes=Tf(n,x,o),a.memoizedState=_f,a=f);else if(Wr(a),sh(k)){if(x=k.nextSibling&&k.nextSibling.dataset,x)var I=x.dgst;x=I,c=Error(i(419)),c.stack="",c.digest=x,Bo({value:c,source:null,stack:null}),a=Ef(n,a,o)}else if(kt||Xo(n,a,o,!1),x=(o&n.childLanes)!==0,kt||x){if(x=Qe,x!==null&&(c=o&-o,c=(c&42)!==0?1:sd(c),c=(c&(x.suspendedLanes|o))!==0?0:c,c!==0&&c!==z.retryLane))throw z.retryLane=c,ki(n,c),dn(x,n,c),T0;k.data==="$?"||Xf(),a=Ef(n,a,o)}else k.data==="$?"?(a.flags|=192,a.child=n.child,a=null):(n=z.treeContext,at=Hn(k.nextSibling),Yt=a,He=!0,Oa=null,er=!1,n!==null&&(Tn[kn++]=gr,Tn[kn++]=vr,Tn[kn++]=Ma,gr=n.id,vr=n.overflow,Ma=a),a=kf(a,c.children),a.flags|=4096);return a}return f?(Zr(),f=c.fallback,k=a.mode,z=n.child,I=z.sibling,c=mr(z,{mode:"hidden",children:c.children}),c.subtreeFlags=z.subtreeFlags&65011712,I!==null?f=mr(I,f):(f=Ca(f,k,o,null),f.flags|=2),f.return=a,c.return=a,c.sibling=f,a.child=c,c=f,f=a.child,k=n.child.memoizedState,k===null?k=Sf(o):(z=k.cachePool,z!==null?(I=bt._currentValue,z=z.parent!==I?{parent:I,pool:I}:z):z=bv(),k={baseLanes:k.baseLanes|o,cachePool:z}),f.memoizedState=k,f.childLanes=Tf(n,x,o),a.memoizedState=_f,c):(Wr(a),o=n.child,n=o.sibling,o=mr(o,{mode:"visible",children:c.children}),o.return=a,o.sibling=null,n!==null&&(x=a.deletions,x===null?(a.deletions=[n],a.flags|=16):x.push(n)),a.child=o,a.memoizedState=null,o)}function kf(n,a){return a=uc({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function uc(n,a){return n=on(22,n,null,a),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Ef(n,a,o){return Ui(a,n.child,null,o),n=kf(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function D0(n,a,o){n.lanes|=a;var c=n.alternate;c!==null&&(c.lanes|=a),Bd(n.return,a,o)}function Cf(n,a,o,c,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(m.isBackwards=a,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=o,m.tailMode=f)}function j0(n,a,o){var c=a.pendingProps,f=c.revealOrder,m=c.tail;if(At(n,a,c.children,o),c=wt.current,(c&2)!==0)c=c&1|2,a.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&D0(n,o,a);else if(n.tag===19)D0(n,o,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break e;for(;n.sibling===null;){if(n.return===null||n.return===a)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}switch(J(wt,c),f){case"forwards":for(o=a.child,f=null;o!==null;)n=o.alternate,n!==null&&oc(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=a.child,a.child=null):(f=o.sibling,o.sibling=null),Cf(a,!1,f,o,m);break;case"backwards":for(o=null,f=a.child,a.child=null;f!==null;){if(n=f.alternate,n!==null&&oc(n)===null){a.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}Cf(a,!0,o,null,m);break;case"together":Cf(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function _r(n,a,o){if(n!==null&&(a.dependencies=n.dependencies),na|=a.lanes,(o&a.childLanes)===0)if(n!==null){if(Xo(n,a,o,!1),(o&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(i(153));if(a.child!==null){for(n=a.child,o=mr(n,n.pendingProps),a.child=o,o.return=a;n.sibling!==null;)n=n.sibling,o=o.sibling=mr(n,n.pendingProps),o.return=a;o.sibling=null}return a.child}function Mf(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&Xl(n)))}function mS(n,a,o){switch(a.tag){case 3:de(a,a.stateNode.containerInfo),Fr(a,bt,n.memoizedState.cache),Yo();break;case 27:case 5:Le(a);break;case 4:de(a,a.stateNode.containerInfo);break;case 10:Fr(a,a.type,a.memoizedProps.value);break;case 13:var c=a.memoizedState;if(c!==null)return c.dehydrated!==null?(Wr(a),a.flags|=128,null):(o&a.child.childLanes)!==0?R0(n,a,o):(Wr(a),n=_r(n,a,o),n!==null?n.sibling:null);Wr(a);break;case 19:var f=(n.flags&128)!==0;if(c=(o&a.childLanes)!==0,c||(Xo(n,a,o,!1),c=(o&a.childLanes)!==0),f){if(c)return j0(n,a,o);a.flags|=128}if(f=a.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),J(wt,wt.current),c)break;return null;case 22:case 23:return a.lanes=0,M0(n,a,o);case 24:Fr(a,bt,n.memoizedState.cache)}return _r(n,a,o)}function U0(n,a,o){if(n!==null)if(n.memoizedProps!==a.pendingProps)kt=!0;else{if(!Mf(n,o)&&(a.flags&128)===0)return kt=!1,mS(n,a,o);kt=(n.flags&131072)!==0}else kt=!1,He&&(a.flags&1048576)!==0&&fv(a,Bl,a.index);switch(a.lanes=0,a.tag){case 16:e:{n=a.pendingProps;var c=a.elementType,f=c._init;if(c=f(c._payload),a.type=c,typeof c=="function")Ud(c)?(n=Ua(c,n),a.tag=1,a=A0(null,a,c,n,o)):(a.tag=0,a=xf(null,a,c,n,o));else{if(c!=null){if(f=c.$$typeof,f===U){a.tag=11,a=k0(null,a,c,n,o);break e}else if(f===G){a.tag=14,a=E0(null,a,c,n,o);break e}}throw a=we(c)||c,Error(i(306,a,""))}}return a;case 0:return xf(n,a,a.type,a.pendingProps,o);case 1:return c=a.type,f=Ua(c,a.pendingProps),A0(n,a,c,f,o);case 3:e:{if(de(a,a.stateNode.containerInfo),n===null)throw Error(i(387));c=a.pendingProps;var m=a.memoizedState;f=m.element,Wd(n,a),Zo(a,c,null,o);var x=a.memoizedState;if(c=x.cache,Fr(a,bt,c),c!==m.cache&&Xd(a,[bt],o,!0),Wo(),c=x.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:x.cache},a.updateQueue.baseState=m,a.memoizedState=m,a.flags&256){a=z0(n,a,c,o);break e}else if(c!==f){f=_n(Error(i(424)),a),Bo(f),a=z0(n,a,c,o);break e}else{switch(n=a.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(at=Hn(n.firstChild),Yt=a,He=!0,Oa=null,er=!0,o=p0(a,null,c,o),a.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Yo(),c===f){a=_r(n,a,o);break e}At(n,a,c,o)}a=a.child}return a;case 26:return cc(n,a),n===null?(o=qy(a.type,null,a.pendingProps,null))?a.memoizedState=o:He||(o=a.type,n=a.pendingProps,c=Tc(re.current).createElement(o),c[Ut]=a,c[Ft]=n,Rt(c,o,n),Tt(c),a.stateNode=c):a.memoizedState=qy(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return Le(a),n===null&&He&&(c=a.stateNode=Ly(a.type,a.pendingProps,re.current),Yt=a,er=!0,f=at,oa(a.type)?(lh=f,at=Hn(c.firstChild)):at=f),At(n,a,a.pendingProps.children,o),cc(n,a),n===null&&(a.flags|=4194304),a.child;case 5:return n===null&&He&&((f=c=at)&&(c=BS(c,a.type,a.pendingProps,er),c!==null?(a.stateNode=c,Yt=a,at=Hn(c.firstChild),er=!1,f=!0):f=!1),f||Aa(a)),Le(a),f=a.type,m=a.pendingProps,x=n!==null?n.memoizedProps:null,c=m.children,ah(f,m)?c=null:x!==null&&ah(f,x)&&(a.flags|=32),a.memoizedState!==null&&(f=nf(n,a,sS,null,null,o),bs._currentValue=f),cc(n,a),At(n,a,c,o),a.child;case 6:return n===null&&He&&((n=o=at)&&(o=XS(o,a.pendingProps,er),o!==null?(a.stateNode=o,Yt=a,at=null,n=!0):n=!1),n||Aa(a)),null;case 13:return R0(n,a,o);case 4:return de(a,a.stateNode.containerInfo),c=a.pendingProps,n===null?a.child=Ui(a,null,c,o):At(n,a,c,o),a.child;case 11:return k0(n,a,a.type,a.pendingProps,o);case 7:return At(n,a,a.pendingProps,o),a.child;case 8:return At(n,a,a.pendingProps.children,o),a.child;case 12:return At(n,a,a.pendingProps.children,o),a.child;case 10:return c=a.pendingProps,Fr(a,a.type,c.value),At(n,a,c.children,o),a.child;case 9:return f=a.type._context,c=a.pendingProps.children,Ra(a),f=Lt(f),c=c(f),a.flags|=1,At(n,a,c,o),a.child;case 14:return E0(n,a,a.type,a.pendingProps,o);case 15:return C0(n,a,a.type,a.pendingProps,o);case 19:return j0(n,a,o);case 31:return c=a.pendingProps,o=a.mode,c={mode:c.mode,children:c.children},n===null?(o=uc(c,o),o.ref=a.ref,a.child=o,o.return=a,a=o):(o=mr(n.child,c),o.ref=a.ref,a.child=o,o.return=a,a=o),a;case 22:return M0(n,a,o);case 24:return Ra(a),c=Lt(bt),n===null?(f=Gd(),f===null&&(f=Qe,m=Fd(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),a.memoizedState={parent:c,cache:f},Qd(a),Fr(a,bt,f)):((n.lanes&o)!==0&&(Wd(n,a),Zo(a,null,null,o),Wo()),f=n.memoizedState,m=a.memoizedState,f.parent!==c?(f={parent:c,cache:c},a.memoizedState=f,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=f),Fr(a,bt,c)):(c=m.cache,Fr(a,bt,c),c!==f.cache&&Xd(a,[bt],o,!0))),At(n,a,a.pendingProps.children,o),a.child;case 29:throw a.pendingProps}throw Error(i(156,a.tag))}function Sr(n){n.flags|=4}function L0(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Fy(a)){if(a=En.current,a!==null&&((je&4194048)===je?tr!==null:(je&62914560)!==je&&(je&536870912)===0||a!==tr))throw Vo=Vd,wv;n.flags|=8192}}function dc(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?mg():536870912,n.lanes|=a,qi|=a)}function as(n,a){if(!He)switch(n.tailMode){case"hidden":a=n.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function nt(n){var a=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(a)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&65011712,c|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=o,a}function gS(n,a,o){var c=a.pendingProps;switch(qd(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(a),null;case 1:return nt(a),null;case 3:return o=a.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),a.memoizedState.cache!==c&&(a.flags|=2048),br(bt),Te(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(Io(a)?Sr(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,mv())),nt(a),null;case 26:return o=a.memoizedState,n===null?(Sr(a),o!==null?(nt(a),L0(a,o)):(nt(a),a.flags&=-16777217)):o?o!==n.memoizedState?(Sr(a),nt(a),L0(a,o)):(nt(a),a.flags&=-16777217):(n.memoizedProps!==c&&Sr(a),nt(a),a.flags&=-16777217),null;case 27:It(a),o=re.current;var f=a.type;if(n!==null&&a.stateNode!=null)n.memoizedProps!==c&&Sr(a);else{if(!c){if(a.stateNode===null)throw Error(i(166));return nt(a),null}n=te.current,Io(a)?hv(a):(n=Ly(f,c,o),a.stateNode=n,Sr(a))}return nt(a),null;case 5:if(It(a),o=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==c&&Sr(a);else{if(!c){if(a.stateNode===null)throw Error(i(166));return nt(a),null}if(n=te.current,Io(a))hv(a);else{switch(f=Tc(re.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof c.is=="string"?f.createElement("select",{is:c.is}):f.createElement("select"),c.multiple?n.multiple=!0:c.size&&(n.size=c.size);break;default:n=typeof c.is=="string"?f.createElement(o,{is:c.is}):f.createElement(o)}}n[Ut]=a,n[Ft]=c;e:for(f=a.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===a)break e;for(;f.sibling===null;){if(f.return===null||f.return===a)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}a.stateNode=n;e:switch(Rt(n,o,c),o){case"button":case"input":case"select":case"textarea":n=!!c.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Sr(a)}}return nt(a),a.flags&=-16777217,null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==c&&Sr(a);else{if(typeof c!="string"&&a.stateNode===null)throw Error(i(166));if(n=re.current,Io(a)){if(n=a.stateNode,o=a.memoizedProps,c=null,f=Yt,f!==null)switch(f.tag){case 27:case 5:c=f.memoizedProps}n[Ut]=a,n=!!(n.nodeValue===o||c!==null&&c.suppressHydrationWarning===!0||Oy(n.nodeValue,o)),n||Aa(a)}else n=Tc(n).createTextNode(c),n[Ut]=a,a.stateNode=n}return nt(a),null;case 13:if(c=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=Io(a),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(i(318));if(f=a.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[Ut]=a}else Yo(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;nt(a),f=!1}else f=mv(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return a.flags&256?(xr(a),a):(xr(a),null)}if(xr(a),(a.flags&128)!==0)return a.lanes=o,a;if(o=c!==null,n=n!==null&&n.memoizedState!==null,o){c=a.child,f=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(f=c.alternate.memoizedState.cachePool.pool);var m=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==f&&(c.flags|=2048)}return o!==n&&o&&(a.child.flags|=8192),dc(a,a.updateQueue),nt(a),null;case 4:return Te(),n===null&&Jf(a.stateNode.containerInfo),nt(a),null;case 10:return br(a.type),nt(a),null;case 19:if(W(wt),f=a.memoizedState,f===null)return nt(a),null;if(c=(a.flags&128)!==0,m=f.rendering,m===null)if(c)as(f,!1);else{if(it!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(m=oc(n),m!==null){for(a.flags|=128,as(f,!1),n=m.updateQueue,a.updateQueue=n,dc(a,n),a.subtreeFlags=0,n=o,o=a.child;o!==null;)dv(o,n),o=o.sibling;return J(wt,wt.current&1|2),a.child}n=n.sibling}f.tail!==null&&Jn()>pc&&(a.flags|=128,c=!0,as(f,!1),a.lanes=4194304)}else{if(!c)if(n=oc(m),n!==null){if(a.flags|=128,c=!0,n=n.updateQueue,a.updateQueue=n,dc(a,n),as(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!He)return nt(a),null}else 2*Jn()-f.renderingStartTime>pc&&o!==536870912&&(a.flags|=128,c=!0,as(f,!1),a.lanes=4194304);f.isBackwards?(m.sibling=a.child,a.child=m):(n=f.last,n!==null?n.sibling=m:a.child=m,f.last=m)}return f.tail!==null?(a=f.tail,f.rendering=a,f.tail=a.sibling,f.renderingStartTime=Jn(),a.sibling=null,n=wt.current,J(wt,c?n&1|2:n&1),a):(nt(a),null);case 22:case 23:return xr(a),ef(),c=a.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(a.flags|=8192):c&&(a.flags|=8192),c?(o&536870912)!==0&&(a.flags&128)===0&&(nt(a),a.subtreeFlags&6&&(a.flags|=8192)):nt(a),o=a.updateQueue,o!==null&&dc(a,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==o&&(a.flags|=2048),n!==null&&W(Da),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),a.memoizedState.cache!==o&&(a.flags|=2048),br(bt),nt(a),null;case 25:return null;case 30:return null}throw Error(i(156,a.tag))}function vS(n,a){switch(qd(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return br(bt),Te(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return It(a),null;case 13:if(xr(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(i(340));Yo()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return W(wt),null;case 4:return Te(),null;case 10:return br(a.type),null;case 22:case 23:return xr(a),ef(),n!==null&&W(Da),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return br(bt),null;case 25:return null;default:return null}}function $0(n,a){switch(qd(a),a.tag){case 3:br(bt),Te();break;case 26:case 27:case 5:It(a);break;case 4:Te();break;case 13:xr(a);break;case 19:W(wt);break;case 10:br(a.type);break;case 22:case 23:xr(a),ef(),n!==null&&W(Da);break;case 24:br(bt)}}function is(n,a){try{var o=a.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&n)===n){c=void 0;var m=o.create,x=o.inst;c=m(),x.destroy=c}o=o.next}while(o!==f)}}catch(k){Pe(a,a.return,k)}}function Kr(n,a,o){try{var c=a.updateQueue,f=c!==null?c.lastEffect:null;if(f!==null){var m=f.next;c=m;do{if((c.tag&n)===n){var x=c.inst,k=x.destroy;if(k!==void 0){x.destroy=void 0,f=a;var z=o,I=k;try{I()}catch(Q){Pe(f,z,Q)}}}c=c.next}while(c!==m)}}catch(Q){Pe(a,a.return,Q)}}function H0(n){var a=n.updateQueue;if(a!==null){var o=n.stateNode;try{Ev(a,o)}catch(c){Pe(n,n.return,c)}}}function q0(n,a,o){o.props=Ua(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(c){Pe(n,a,c)}}function os(n,a){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof o=="function"?n.refCleanup=o(c):o.current=c}}catch(f){Pe(n,a,f)}}function nr(n,a){var o=n.ref,c=n.refCleanup;if(o!==null)if(typeof c=="function")try{c()}catch(f){Pe(n,a,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Pe(n,a,f)}else o.current=null}function I0(n){var a=n.type,o=n.memoizedProps,c=n.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":o.autoFocus&&c.focus();break e;case"img":o.src?c.src=o.src:o.srcSet&&(c.srcset=o.srcSet)}}catch(f){Pe(n,n.return,f)}}function Nf(n,a,o){try{var c=n.stateNode;$S(c,n.type,o,a),c[Ft]=a}catch(f){Pe(n,n.return,f)}}function Y0(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&oa(n.type)||n.tag===4}function Of(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Y0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&oa(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Af(n,a,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,a):(a=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,a.appendChild(n),o=o._reactRootContainer,o!=null||a.onclick!==null||(a.onclick=Sc));else if(c!==4&&(c===27&&oa(n.type)&&(o=n.stateNode,a=null),n=n.child,n!==null))for(Af(n,a,o),n=n.sibling;n!==null;)Af(n,a,o),n=n.sibling}function fc(n,a,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?o.insertBefore(n,a):o.appendChild(n);else if(c!==4&&(c===27&&oa(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(fc(n,a,o),n=n.sibling;n!==null;)fc(n,a,o),n=n.sibling}function B0(n){var a=n.stateNode,o=n.memoizedProps;try{for(var c=n.type,f=a.attributes;f.length;)a.removeAttributeNode(f[0]);Rt(a,c,o),a[Ut]=n,a[Ft]=o}catch(m){Pe(n,n.return,m)}}var Tr=!1,ct=!1,zf=!1,X0=typeof WeakSet=="function"?WeakSet:Set,Et=null;function yS(n,a){if(n=n.containerInfo,nh=Oc,n=tv(n),Nd(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var x=0,k=-1,z=-1,I=0,Q=0,K=n,B=null;t:for(;;){for(var X;K!==o||f!==0&&K.nodeType!==3||(k=x+f),K!==m||c!==0&&K.nodeType!==3||(z=x+c),K.nodeType===3&&(x+=K.nodeValue.length),(X=K.firstChild)!==null;)B=K,K=X;for(;;){if(K===n)break t;if(B===o&&++I===f&&(k=x),B===m&&++Q===c&&(z=x),(X=K.nextSibling)!==null)break;K=B,B=K.parentNode}K=X}o=k===-1||z===-1?null:{start:k,end:z}}else o=null}o=o||{start:0,end:0}}else o=null;for(rh={focusedElem:n,selectionRange:o},Oc=!1,Et=a;Et!==null;)if(a=Et,n=a.child,(a.subtreeFlags&1024)!==0&&n!==null)n.return=a,Et=n;else for(;Et!==null;){switch(a=Et,m=a.alternate,n=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,o=a,f=m.memoizedProps,m=m.memoizedState,c=o.stateNode;try{var ve=Ua(o.type,f,o.elementType===o.type);n=c.getSnapshotBeforeUpdate(ve,m),c.__reactInternalSnapshotBeforeUpdate=n}catch(pe){Pe(o,o.return,pe)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,o=n.nodeType,o===9)oh(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":oh(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=a.sibling,n!==null){n.return=a.return,Et=n;break}Et=a.return}}function F0(n,a,o){var c=o.flags;switch(o.tag){case 0:case 11:case 15:Jr(n,o),c&4&&is(5,o);break;case 1:if(Jr(n,o),c&4)if(n=o.stateNode,a===null)try{n.componentDidMount()}catch(x){Pe(o,o.return,x)}else{var f=Ua(o.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(f,a,n.__reactInternalSnapshotBeforeUpdate)}catch(x){Pe(o,o.return,x)}}c&64&&H0(o),c&512&&os(o,o.return);break;case 3:if(Jr(n,o),c&64&&(n=o.updateQueue,n!==null)){if(a=null,o.child!==null)switch(o.child.tag){case 27:case 5:a=o.child.stateNode;break;case 1:a=o.child.stateNode}try{Ev(n,a)}catch(x){Pe(o,o.return,x)}}break;case 27:a===null&&c&4&&B0(o);case 26:case 5:Jr(n,o),a===null&&c&4&&I0(o),c&512&&os(o,o.return);break;case 12:Jr(n,o);break;case 13:Jr(n,o),c&4&&V0(n,o),c&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=CS.bind(null,o),FS(n,o))));break;case 22:if(c=o.memoizedState!==null||Tr,!c){a=a!==null&&a.memoizedState!==null||ct,f=Tr;var m=ct;Tr=c,(ct=a)&&!m?ea(n,o,(o.subtreeFlags&8772)!==0):Jr(n,o),Tr=f,ct=m}break;case 30:break;default:Jr(n,o)}}function P0(n){var a=n.alternate;a!==null&&(n.alternate=null,P0(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&ud(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Je=null,Vt=!1;function kr(n,a,o){for(o=o.child;o!==null;)G0(n,a,o),o=o.sibling}function G0(n,a,o){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Co,o)}catch{}switch(o.tag){case 26:ct||nr(o,a),kr(n,a,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:ct||nr(o,a);var c=Je,f=Vt;oa(o.type)&&(Je=o.stateNode,Vt=!1),kr(n,a,o),ms(o.stateNode),Je=c,Vt=f;break;case 5:ct||nr(o,a);case 6:if(c=Je,f=Vt,Je=null,kr(n,a,o),Je=c,Vt=f,Je!==null)if(Vt)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(o.stateNode)}catch(m){Pe(o,a,m)}else try{Je.removeChild(o.stateNode)}catch(m){Pe(o,a,m)}break;case 18:Je!==null&&(Vt?(n=Je,jy(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),Ss(n)):jy(Je,o.stateNode));break;case 4:c=Je,f=Vt,Je=o.stateNode.containerInfo,Vt=!0,kr(n,a,o),Je=c,Vt=f;break;case 0:case 11:case 14:case 15:ct||Kr(2,o,a),ct||Kr(4,o,a),kr(n,a,o);break;case 1:ct||(nr(o,a),c=o.stateNode,typeof c.componentWillUnmount=="function"&&q0(o,a,c)),kr(n,a,o);break;case 21:kr(n,a,o);break;case 22:ct=(c=ct)||o.memoizedState!==null,kr(n,a,o),ct=c;break;default:kr(n,a,o)}}function V0(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Ss(n)}catch(o){Pe(a,a.return,o)}}function bS(n){switch(n.tag){case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new X0),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new X0),a;default:throw Error(i(435,n.tag))}}function Rf(n,a){var o=bS(n);a.forEach(function(c){var f=MS.bind(null,n,c);o.has(c)||(o.add(c),c.then(f,f))})}function sn(n,a){var o=a.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c],m=n,x=a,k=x;e:for(;k!==null;){switch(k.tag){case 27:if(oa(k.type)){Je=k.stateNode,Vt=!1;break e}break;case 5:Je=k.stateNode,Vt=!1;break e;case 3:case 4:Je=k.stateNode.containerInfo,Vt=!0;break e}k=k.return}if(Je===null)throw Error(i(160));G0(m,x,f),Je=null,Vt=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)Q0(a,n),a=a.sibling}var $n=null;function Q0(n,a){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:sn(a,n),ln(n),c&4&&(Kr(3,n,n.return),is(3,n),Kr(5,n,n.return));break;case 1:sn(a,n),ln(n),c&512&&(ct||o===null||nr(o,o.return)),c&64&&Tr&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?c:o.concat(c))));break;case 26:var f=$n;if(sn(a,n),ln(n),c&512&&(ct||o===null||nr(o,o.return)),c&4){var m=o!==null?o.memoizedState:null;if(c=n.memoizedState,o===null)if(c===null)if(n.stateNode===null){e:{c=n.type,o=n.memoizedProps,f=f.ownerDocument||f;t:switch(c){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Oo]||m[Ut]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(c),f.head.insertBefore(m,f.querySelector("head > title"))),Rt(m,c,o),m[Ut]=n,Tt(m),c=m;break e;case"link":var x=By("link","href",f).get(c+(o.href||""));if(x){for(var k=0;k<x.length;k++)if(m=x[k],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){x.splice(k,1);break t}}m=f.createElement(c),Rt(m,c,o),f.head.appendChild(m);break;case"meta":if(x=By("meta","content",f).get(c+(o.content||""))){for(k=0;k<x.length;k++)if(m=x[k],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){x.splice(k,1);break t}}m=f.createElement(c),Rt(m,c,o),f.head.appendChild(m);break;default:throw Error(i(468,c))}m[Ut]=n,Tt(m),c=m}n.stateNode=c}else Xy(f,n.type,n.stateNode);else n.stateNode=Yy(f,c,n.memoizedProps);else m!==c?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,c===null?Xy(f,n.type,n.stateNode):Yy(f,c,n.memoizedProps)):c===null&&n.stateNode!==null&&Nf(n,n.memoizedProps,o.memoizedProps)}break;case 27:sn(a,n),ln(n),c&512&&(ct||o===null||nr(o,o.return)),o!==null&&c&4&&Nf(n,n.memoizedProps,o.memoizedProps);break;case 5:if(sn(a,n),ln(n),c&512&&(ct||o===null||nr(o,o.return)),n.flags&32){f=n.stateNode;try{yi(f,"")}catch(X){Pe(n,n.return,X)}}c&4&&n.stateNode!=null&&(f=n.memoizedProps,Nf(n,f,o!==null?o.memoizedProps:f)),c&1024&&(zf=!0);break;case 6:if(sn(a,n),ln(n),c&4){if(n.stateNode===null)throw Error(i(162));c=n.memoizedProps,o=n.stateNode;try{o.nodeValue=c}catch(X){Pe(n,n.return,X)}}break;case 3:if(Cc=null,f=$n,$n=kc(a.containerInfo),sn(a,n),$n=f,ln(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Ss(a.containerInfo)}catch(X){Pe(n,n.return,X)}zf&&(zf=!1,W0(n));break;case 4:c=$n,$n=kc(n.stateNode.containerInfo),sn(a,n),ln(n),$n=c;break;case 12:sn(a,n),ln(n);break;case 13:sn(a,n),ln(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Hf=Jn()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Rf(n,c)));break;case 22:f=n.memoizedState!==null;var z=o!==null&&o.memoizedState!==null,I=Tr,Q=ct;if(Tr=I||f,ct=Q||z,sn(a,n),ct=Q,Tr=I,ln(n),c&8192)e:for(a=n.stateNode,a._visibility=f?a._visibility&-2:a._visibility|1,f&&(o===null||z||Tr||ct||La(n)),o=null,a=n;;){if(a.tag===5||a.tag===26){if(o===null){z=o=a;try{if(m=z.stateNode,f)x=m.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{k=z.stateNode;var K=z.memoizedProps.style,B=K!=null&&K.hasOwnProperty("display")?K.display:null;k.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(X){Pe(z,z.return,X)}}}else if(a.tag===6){if(o===null){z=a;try{z.stateNode.nodeValue=f?"":z.memoizedProps}catch(X){Pe(z,z.return,X)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break e;for(;a.sibling===null;){if(a.return===null||a.return===n)break e;o===a&&(o=null),a=a.return}o===a&&(o=null),a.sibling.return=a.return,a=a.sibling}c&4&&(c=n.updateQueue,c!==null&&(o=c.retryQueue,o!==null&&(c.retryQueue=null,Rf(n,o))));break;case 19:sn(a,n),ln(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Rf(n,c)));break;case 30:break;case 21:break;default:sn(a,n),ln(n)}}function ln(n){var a=n.flags;if(a&2){try{for(var o,c=n.return;c!==null;){if(Y0(c)){o=c;break}c=c.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var f=o.stateNode,m=Of(n);fc(n,m,f);break;case 5:var x=o.stateNode;o.flags&32&&(yi(x,""),o.flags&=-33);var k=Of(n);fc(n,k,x);break;case 3:case 4:var z=o.stateNode.containerInfo,I=Of(n);Af(n,I,z);break;default:throw Error(i(161))}}catch(Q){Pe(n,n.return,Q)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function W0(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;W0(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function Jr(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)F0(n,a.alternate,a),a=a.sibling}function La(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:Kr(4,a,a.return),La(a);break;case 1:nr(a,a.return);var o=a.stateNode;typeof o.componentWillUnmount=="function"&&q0(a,a.return,o),La(a);break;case 27:ms(a.stateNode);case 26:case 5:nr(a,a.return),La(a);break;case 22:a.memoizedState===null&&La(a);break;case 30:La(a);break;default:La(a)}n=n.sibling}}function ea(n,a,o){for(o=o&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var c=a.alternate,f=n,m=a,x=m.flags;switch(m.tag){case 0:case 11:case 15:ea(f,m,o),is(4,m);break;case 1:if(ea(f,m,o),c=m,f=c.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(I){Pe(c,c.return,I)}if(c=m,f=c.updateQueue,f!==null){var k=c.stateNode;try{var z=f.shared.hiddenCallbacks;if(z!==null)for(f.shared.hiddenCallbacks=null,f=0;f<z.length;f++)kv(z[f],k)}catch(I){Pe(c,c.return,I)}}o&&x&64&&H0(m),os(m,m.return);break;case 27:B0(m);case 26:case 5:ea(f,m,o),o&&c===null&&x&4&&I0(m),os(m,m.return);break;case 12:ea(f,m,o);break;case 13:ea(f,m,o),o&&x&4&&V0(f,m);break;case 22:m.memoizedState===null&&ea(f,m,o),os(m,m.return);break;case 30:break;default:ea(f,m,o)}a=a.sibling}}function Df(n,a){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&Fo(o))}function jf(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&Fo(n))}function rr(n,a,o,c){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Z0(n,a,o,c),a=a.sibling}function Z0(n,a,o,c){var f=a.flags;switch(a.tag){case 0:case 11:case 15:rr(n,a,o,c),f&2048&&is(9,a);break;case 1:rr(n,a,o,c);break;case 3:rr(n,a,o,c),f&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&Fo(n)));break;case 12:if(f&2048){rr(n,a,o,c),n=a.stateNode;try{var m=a.memoizedProps,x=m.id,k=m.onPostCommit;typeof k=="function"&&k(x,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(z){Pe(a,a.return,z)}}else rr(n,a,o,c);break;case 13:rr(n,a,o,c);break;case 23:break;case 22:m=a.stateNode,x=a.alternate,a.memoizedState!==null?m._visibility&2?rr(n,a,o,c):ss(n,a):m._visibility&2?rr(n,a,o,c):(m._visibility|=2,Li(n,a,o,c,(a.subtreeFlags&10256)!==0)),f&2048&&Df(x,a);break;case 24:rr(n,a,o,c),f&2048&&jf(a.alternate,a);break;default:rr(n,a,o,c)}}function Li(n,a,o,c,f){for(f=f&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var m=n,x=a,k=o,z=c,I=x.flags;switch(x.tag){case 0:case 11:case 15:Li(m,x,k,z,f),is(8,x);break;case 23:break;case 22:var Q=x.stateNode;x.memoizedState!==null?Q._visibility&2?Li(m,x,k,z,f):ss(m,x):(Q._visibility|=2,Li(m,x,k,z,f)),f&&I&2048&&Df(x.alternate,x);break;case 24:Li(m,x,k,z,f),f&&I&2048&&jf(x.alternate,x);break;default:Li(m,x,k,z,f)}a=a.sibling}}function ss(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var o=n,c=a,f=c.flags;switch(c.tag){case 22:ss(o,c),f&2048&&Df(c.alternate,c);break;case 24:ss(o,c),f&2048&&jf(c.alternate,c);break;default:ss(o,c)}a=a.sibling}}var ls=8192;function $i(n){if(n.subtreeFlags&ls)for(n=n.child;n!==null;)K0(n),n=n.sibling}function K0(n){switch(n.tag){case 26:$i(n),n.flags&ls&&n.memoizedState!==null&&aT($n,n.memoizedState,n.memoizedProps);break;case 5:$i(n);break;case 3:case 4:var a=$n;$n=kc(n.stateNode.containerInfo),$i(n),$n=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=ls,ls=16777216,$i(n),ls=a):$i(n));break;default:$i(n)}}function J0(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function cs(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var c=a[o];Et=c,ty(c,n)}J0(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ey(n),n=n.sibling}function ey(n){switch(n.tag){case 0:case 11:case 15:cs(n),n.flags&2048&&Kr(9,n,n.return);break;case 3:cs(n);break;case 12:cs(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&2&&(n.return===null||n.return.tag!==13)?(a._visibility&=-3,hc(n)):cs(n);break;default:cs(n)}}function hc(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var c=a[o];Et=c,ty(c,n)}J0(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:Kr(8,a,a.return),hc(a);break;case 22:o=a.stateNode,o._visibility&2&&(o._visibility&=-3,hc(a));break;default:hc(a)}n=n.sibling}}function ty(n,a){for(;Et!==null;){var o=Et;switch(o.tag){case 0:case 11:case 15:Kr(8,o,a);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var c=o.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Fo(o.memoizedState.cache)}if(c=o.child,c!==null)c.return=o,Et=c;else e:for(o=n;Et!==null;){c=Et;var f=c.sibling,m=c.return;if(P0(c),c===o){Et=null;break e}if(f!==null){f.return=m,Et=f;break e}Et=m}}}var wS={getCacheForType:function(n){var a=Lt(bt),o=a.data.get(n);return o===void 0&&(o=n(),a.data.set(n,o)),o}},xS=typeof WeakMap=="function"?WeakMap:Map,Ie=0,Qe=null,Ae=null,je=0,Ye=0,cn=null,ta=!1,Hi=!1,Uf=!1,Er=0,it=0,na=0,$a=0,Lf=0,Cn=0,qi=0,us=null,Qt=null,$f=!1,Hf=0,pc=1/0,mc=null,ra=null,zt=0,aa=null,Ii=null,Yi=0,qf=0,If=null,ny=null,ds=0,Yf=null;function un(){if((Ie&2)!==0&&je!==0)return je&-je;if(E.T!==null){var n=Ni;return n!==0?n:Qf()}return yg()}function ry(){Cn===0&&(Cn=(je&536870912)===0||He?pg():536870912);var n=En.current;return n!==null&&(n.flags|=32),Cn}function dn(n,a,o){(n===Qe&&(Ye===2||Ye===9)||n.cancelPendingCommit!==null)&&(Bi(n,0),ia(n,je,Cn,!1)),No(n,o),((Ie&2)===0||n!==Qe)&&(n===Qe&&((Ie&2)===0&&($a|=o),it===4&&ia(n,je,Cn,!1)),ar(n))}function ay(n,a,o){if((Ie&6)!==0)throw Error(i(327));var c=!o&&(a&124)===0&&(a&n.expiredLanes)===0||Mo(n,a),f=c?TS(n,a):Ff(n,a,!0),m=c;do{if(f===0){Hi&&!c&&ia(n,a,0,!1);break}else{if(o=n.current.alternate,m&&!_S(o)){f=Ff(n,a,!1),m=!1;continue}if(f===2){if(m=a,n.errorRecoveryDisabledLanes&m)var x=0;else x=n.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){a=x;e:{var k=n;f=us;var z=k.current.memoizedState.isDehydrated;if(z&&(Bi(k,x).flags|=256),x=Ff(k,x,!1),x!==2){if(Uf&&!z){k.errorRecoveryDisabledLanes|=m,$a|=m,f=4;break e}m=Qt,Qt=f,m!==null&&(Qt===null?Qt=m:Qt.push.apply(Qt,m))}f=x}if(m=!1,f!==2)continue}}if(f===1){Bi(n,0),ia(n,a,0,!0);break}e:{switch(c=n,m=f,m){case 0:case 1:throw Error(i(345));case 4:if((a&4194048)!==a)break;case 6:ia(c,a,Cn,!ta);break e;case 2:Qt=null;break;case 3:case 5:break;default:throw Error(i(329))}if((a&62914560)===a&&(f=Hf+300-Jn(),10<f)){if(ia(c,a,Cn,!ta),El(c,0,!0)!==0)break e;c.timeoutHandle=Ry(iy.bind(null,c,o,Qt,mc,$f,a,Cn,$a,qi,ta,m,2,-0,0),f);break e}iy(c,o,Qt,mc,$f,a,Cn,$a,qi,ta,m,0,-0,0)}}break}while(!0);ar(n)}function iy(n,a,o,c,f,m,x,k,z,I,Q,K,B,X){if(n.timeoutHandle=-1,K=a.subtreeFlags,(K&8192||(K&16785408)===16785408)&&(ys={stylesheets:null,count:0,unsuspend:rT},K0(a),K=iT(),K!==null)){n.cancelPendingCommit=K(fy.bind(null,n,a,m,o,c,f,x,k,z,Q,1,B,X)),ia(n,m,x,!I);return}fy(n,a,m,o,c,f,x,k,z)}function _S(n){for(var a=n;;){var o=a.tag;if((o===0||o===11||o===15)&&a.flags&16384&&(o=a.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var c=0;c<o.length;c++){var f=o[c],m=f.getSnapshot;f=f.value;try{if(!an(m(),f))return!1}catch{return!1}}if(o=a.child,a.subtreeFlags&16384&&o!==null)o.return=a,a=o;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function ia(n,a,o,c){a&=~Lf,a&=~$a,n.suspendedLanes|=a,n.pingedLanes&=~a,c&&(n.warmLanes|=a),c=n.expirationTimes;for(var f=a;0<f;){var m=31-rn(f),x=1<<m;c[m]=-1,f&=~x}o!==0&&gg(n,o,a)}function gc(){return(Ie&6)===0?(fs(0),!1):!0}function Bf(){if(Ae!==null){if(Ye===0)var n=Ae.return;else n=Ae,yr=za=null,of(n),ji=null,ns=0,n=Ae;for(;n!==null;)$0(n.alternate,n),n=n.return;Ae=null}}function Bi(n,a){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,qS(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),Bf(),Qe=n,Ae=o=mr(n.current,null),je=a,Ye=0,cn=null,ta=!1,Hi=Mo(n,a),Uf=!1,qi=Cn=Lf=$a=na=it=0,Qt=us=null,$f=!1,(a&8)!==0&&(a|=a&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=a;0<c;){var f=31-rn(c),m=1<<f;a|=n[f],c&=~m}return Er=a,$l(),o}function oy(n,a){Me=null,E.H=rc,a===Go||a===Gl?(a=Sv(),Ye=3):a===wv?(a=Sv(),Ye=4):Ye=a===T0?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,cn=a,Ae===null&&(it=1,lc(n,_n(a,n.current)))}function sy(){var n=E.H;return E.H=rc,n===null?rc:n}function ly(){var n=E.A;return E.A=wS,n}function Xf(){it=4,ta||(je&4194048)!==je&&En.current!==null||(Hi=!0),(na&134217727)===0&&($a&134217727)===0||Qe===null||ia(Qe,je,Cn,!1)}function Ff(n,a,o){var c=Ie;Ie|=2;var f=sy(),m=ly();(Qe!==n||je!==a)&&(mc=null,Bi(n,a)),a=!1;var x=it;e:do try{if(Ye!==0&&Ae!==null){var k=Ae,z=cn;switch(Ye){case 8:Bf(),x=6;break e;case 3:case 2:case 9:case 6:En.current===null&&(a=!0);var I=Ye;if(Ye=0,cn=null,Xi(n,k,z,I),o&&Hi){x=0;break e}break;default:I=Ye,Ye=0,cn=null,Xi(n,k,z,I)}}SS(),x=it;break}catch(Q){oy(n,Q)}while(!0);return a&&n.shellSuspendCounter++,yr=za=null,Ie=c,E.H=f,E.A=m,Ae===null&&(Qe=null,je=0,$l()),x}function SS(){for(;Ae!==null;)cy(Ae)}function TS(n,a){var o=Ie;Ie|=2;var c=sy(),f=ly();Qe!==n||je!==a?(mc=null,pc=Jn()+500,Bi(n,a)):Hi=Mo(n,a);e:do try{if(Ye!==0&&Ae!==null){a=Ae;var m=cn;t:switch(Ye){case 1:Ye=0,cn=null,Xi(n,a,m,1);break;case 2:case 9:if(xv(m)){Ye=0,cn=null,uy(a);break}a=function(){Ye!==2&&Ye!==9||Qe!==n||(Ye=7),ar(n)},m.then(a,a);break e;case 3:Ye=7;break e;case 4:Ye=5;break e;case 7:xv(m)?(Ye=0,cn=null,uy(a)):(Ye=0,cn=null,Xi(n,a,m,7));break;case 5:var x=null;switch(Ae.tag){case 26:x=Ae.memoizedState;case 5:case 27:var k=Ae;if(!x||Fy(x)){Ye=0,cn=null;var z=k.sibling;if(z!==null)Ae=z;else{var I=k.return;I!==null?(Ae=I,vc(I)):Ae=null}break t}}Ye=0,cn=null,Xi(n,a,m,5);break;case 6:Ye=0,cn=null,Xi(n,a,m,6);break;case 8:Bf(),it=6;break e;default:throw Error(i(462))}}kS();break}catch(Q){oy(n,Q)}while(!0);return yr=za=null,E.H=c,E.A=f,Ie=o,Ae!==null?0:(Qe=null,je=0,$l(),it)}function kS(){for(;Ae!==null&&!G2();)cy(Ae)}function cy(n){var a=U0(n.alternate,n,Er);n.memoizedProps=n.pendingProps,a===null?vc(n):Ae=a}function uy(n){var a=n,o=a.alternate;switch(a.tag){case 15:case 0:a=O0(o,a,a.pendingProps,a.type,void 0,je);break;case 11:a=O0(o,a,a.pendingProps,a.type.render,a.ref,je);break;case 5:of(a);default:$0(o,a),a=Ae=dv(a,Er),a=U0(o,a,Er)}n.memoizedProps=n.pendingProps,a===null?vc(n):Ae=a}function Xi(n,a,o,c){yr=za=null,of(a),ji=null,ns=0;var f=a.return;try{if(pS(n,f,a,o,je)){it=1,lc(n,_n(o,n.current)),Ae=null;return}}catch(m){if(f!==null)throw Ae=f,m;it=1,lc(n,_n(o,n.current)),Ae=null;return}a.flags&32768?(He||c===1?n=!0:Hi||(je&536870912)!==0?n=!1:(ta=n=!0,(c===2||c===9||c===3||c===6)&&(c=En.current,c!==null&&c.tag===13&&(c.flags|=16384))),dy(a,n)):vc(a)}function vc(n){var a=n;do{if((a.flags&32768)!==0){dy(a,ta);return}n=a.return;var o=gS(a.alternate,a,Er);if(o!==null){Ae=o;return}if(a=a.sibling,a!==null){Ae=a;return}Ae=a=n}while(a!==null);it===0&&(it=5)}function dy(n,a){do{var o=vS(n.alternate,n);if(o!==null){o.flags&=32767,Ae=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!a&&(n=n.sibling,n!==null)){Ae=n;return}Ae=n=o}while(n!==null);it=6,Ae=null}function fy(n,a,o,c,f,m,x,k,z){n.cancelPendingCommit=null;do yc();while(zt!==0);if((Ie&6)!==0)throw Error(i(327));if(a!==null){if(a===n.current)throw Error(i(177));if(m=a.lanes|a.childLanes,m|=Dd,r_(n,o,m,x,k,z),n===Qe&&(Ae=Qe=null,je=0),Ii=a,aa=n,Yi=o,qf=m,If=f,ny=c,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,NS(Sl,function(){return vy(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||c){c=E.T,E.T=null,f=O.p,O.p=2,x=Ie,Ie|=4;try{yS(n,a,o)}finally{Ie=x,O.p=f,E.T=c}}zt=1,hy(),py(),my()}}function hy(){if(zt===1){zt=0;var n=aa,a=Ii,o=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||o){o=E.T,E.T=null;var c=O.p;O.p=2;var f=Ie;Ie|=4;try{Q0(a,n);var m=rh,x=tv(n.containerInfo),k=m.focusedElem,z=m.selectionRange;if(x!==k&&k&&k.ownerDocument&&ev(k.ownerDocument.documentElement,k)){if(z!==null&&Nd(k)){var I=z.start,Q=z.end;if(Q===void 0&&(Q=I),"selectionStart"in k)k.selectionStart=I,k.selectionEnd=Math.min(Q,k.value.length);else{var K=k.ownerDocument||document,B=K&&K.defaultView||window;if(B.getSelection){var X=B.getSelection(),ve=k.textContent.length,pe=Math.min(z.start,ve),Fe=z.end===void 0?pe:Math.min(z.end,ve);!X.extend&&pe>Fe&&(x=Fe,Fe=pe,pe=x);var $=Jg(k,pe),j=Jg(k,Fe);if($&&j&&(X.rangeCount!==1||X.anchorNode!==$.node||X.anchorOffset!==$.offset||X.focusNode!==j.node||X.focusOffset!==j.offset)){var q=K.createRange();q.setStart($.node,$.offset),X.removeAllRanges(),pe>Fe?(X.addRange(q),X.extend(j.node,j.offset)):(q.setEnd(j.node,j.offset),X.addRange(q))}}}}for(K=[],X=k;X=X.parentNode;)X.nodeType===1&&K.push({element:X,left:X.scrollLeft,top:X.scrollTop});for(typeof k.focus=="function"&&k.focus(),k=0;k<K.length;k++){var Z=K[k];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}Oc=!!nh,rh=nh=null}finally{Ie=f,O.p=c,E.T=o}}n.current=a,zt=2}}function py(){if(zt===2){zt=0;var n=aa,a=Ii,o=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||o){o=E.T,E.T=null;var c=O.p;O.p=2;var f=Ie;Ie|=4;try{F0(n,a.alternate,a)}finally{Ie=f,O.p=c,E.T=o}}zt=3}}function my(){if(zt===4||zt===3){zt=0,V2();var n=aa,a=Ii,o=Yi,c=ny;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?zt=5:(zt=0,Ii=aa=null,gy(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(ra=null),ld(o),a=a.stateNode,nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Co,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=E.T,f=O.p,O.p=2,E.T=null;try{for(var m=n.onRecoverableError,x=0;x<c.length;x++){var k=c[x];m(k.value,{componentStack:k.stack})}}finally{E.T=a,O.p=f}}(Yi&3)!==0&&yc(),ar(n),f=n.pendingLanes,(o&4194090)!==0&&(f&42)!==0?n===Yf?ds++:(ds=0,Yf=n):ds=0,fs(0)}}function gy(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,Fo(a)))}function yc(n){return hy(),py(),my(),vy()}function vy(){if(zt!==5)return!1;var n=aa,a=qf;qf=0;var o=ld(Yi),c=E.T,f=O.p;try{O.p=32>o?32:o,E.T=null,o=If,If=null;var m=aa,x=Yi;if(zt=0,Ii=aa=null,Yi=0,(Ie&6)!==0)throw Error(i(331));var k=Ie;if(Ie|=4,ey(m.current),Z0(m,m.current,x,o),Ie=k,fs(0,!1),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Co,m)}catch{}return!0}finally{O.p=f,E.T=c,gy(n,a)}}function yy(n,a,o){a=_n(o,a),a=wf(n.stateNode,a,2),n=Vr(n,a,2),n!==null&&(No(n,2),ar(n))}function Pe(n,a,o){if(n.tag===3)yy(n,n,o);else for(;a!==null;){if(a.tag===3){yy(a,n,o);break}else if(a.tag===1){var c=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ra===null||!ra.has(c))){n=_n(o,n),o=_0(2),c=Vr(a,o,2),c!==null&&(S0(o,c,a,n),No(c,2),ar(c));break}}a=a.return}}function Pf(n,a,o){var c=n.pingCache;if(c===null){c=n.pingCache=new xS;var f=new Set;c.set(a,f)}else f=c.get(a),f===void 0&&(f=new Set,c.set(a,f));f.has(o)||(Uf=!0,f.add(o),n=ES.bind(null,n,a,o),a.then(n,n))}function ES(n,a,o){var c=n.pingCache;c!==null&&c.delete(a),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,Qe===n&&(je&o)===o&&(it===4||it===3&&(je&62914560)===je&&300>Jn()-Hf?(Ie&2)===0&&Bi(n,0):Lf|=o,qi===je&&(qi=0)),ar(n)}function by(n,a){a===0&&(a=mg()),n=ki(n,a),n!==null&&(No(n,a),ar(n))}function CS(n){var a=n.memoizedState,o=0;a!==null&&(o=a.retryLane),by(n,o)}function MS(n,a){var o=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(a),by(n,o)}function NS(n,a){return Ir(n,a)}var bc=null,Fi=null,Gf=!1,wc=!1,Vf=!1,Ha=0;function ar(n){n!==Fi&&n.next===null&&(Fi===null?bc=Fi=n:Fi=Fi.next=n),wc=!0,Gf||(Gf=!0,AS())}function fs(n,a){if(!Vf&&wc){Vf=!0;do for(var o=!1,c=bc;c!==null;){if(n!==0){var f=c.pendingLanes;if(f===0)var m=0;else{var x=c.suspendedLanes,k=c.pingedLanes;m=(1<<31-rn(42|n)+1)-1,m&=f&~(x&~k),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,Sy(c,m))}else m=je,m=El(c,c===Qe?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||Mo(c,m)||(o=!0,Sy(c,m));c=c.next}while(o);Vf=!1}}function OS(){wy()}function wy(){wc=Gf=!1;var n=0;Ha!==0&&(HS()&&(n=Ha),Ha=0);for(var a=Jn(),o=null,c=bc;c!==null;){var f=c.next,m=xy(c,a);m===0?(c.next=null,o===null?bc=f:o.next=f,f===null&&(Fi=o)):(o=c,(n!==0||(m&3)!==0)&&(wc=!0)),c=f}fs(n)}function xy(n,a){for(var o=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var x=31-rn(m),k=1<<x,z=f[x];z===-1?((k&o)===0||(k&c)!==0)&&(f[x]=n_(k,a)):z<=a&&(n.expiredLanes|=k),m&=~k}if(a=Qe,o=je,o=El(n,n===a?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,o===0||n===a&&(Ye===2||Ye===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&ui(c),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||Mo(n,o)){if(a=o&-o,a===n.callbackPriority)return a;switch(c!==null&&ui(c),ld(o)){case 2:case 8:o=fg;break;case 32:o=Sl;break;case 268435456:o=hg;break;default:o=Sl}return c=_y.bind(null,n),o=Ir(o,c),n.callbackPriority=a,n.callbackNode=o,a}return c!==null&&c!==null&&ui(c),n.callbackPriority=2,n.callbackNode=null,2}function _y(n,a){if(zt!==0&&zt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(yc()&&n.callbackNode!==o)return null;var c=je;return c=El(n,n===Qe?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:(ay(n,c,a),xy(n,Jn()),n.callbackNode!=null&&n.callbackNode===o?_y.bind(null,n):null)}function Sy(n,a){if(yc())return null;ay(n,a,!0)}function AS(){IS(function(){(Ie&6)!==0?Ir(dg,OS):wy()})}function Qf(){return Ha===0&&(Ha=pg()),Ha}function Ty(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Al(""+n)}function ky(n,a){var o=a.ownerDocument.createElement("input");return o.name=a.name,o.value=a.value,n.id&&o.setAttribute("form",n.id),a.parentNode.insertBefore(o,a),n=new FormData(n),o.parentNode.removeChild(o),n}function zS(n,a,o,c,f){if(a==="submit"&&o&&o.stateNode===f){var m=Ty((f[Ft]||null).action),x=c.submitter;x&&(a=(a=x[Ft]||null)?Ty(a.formAction):x.getAttribute("formAction"),a!==null&&(m=a,x=null));var k=new jl("action","action",null,c,f);n.push({event:k,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Ha!==0){var z=x?ky(f,x):new FormData(f);mf(o,{pending:!0,data:z,method:f.method,action:m},null,z)}}else typeof m=="function"&&(k.preventDefault(),z=x?ky(f,x):new FormData(f),mf(o,{pending:!0,data:z,method:f.method,action:m},m,z))},currentTarget:f}]})}}for(var Wf=0;Wf<Rd.length;Wf++){var Zf=Rd[Wf],RS=Zf.toLowerCase(),DS=Zf[0].toUpperCase()+Zf.slice(1);Ln(RS,"on"+DS)}Ln(av,"onAnimationEnd"),Ln(iv,"onAnimationIteration"),Ln(ov,"onAnimationStart"),Ln("dblclick","onDoubleClick"),Ln("focusin","onFocus"),Ln("focusout","onBlur"),Ln(Z_,"onTransitionRun"),Ln(K_,"onTransitionStart"),Ln(J_,"onTransitionCancel"),Ln(sv,"onTransitionEnd"),mi("onMouseEnter",["mouseout","mouseover"]),mi("onMouseLeave",["mouseout","mouseover"]),mi("onPointerEnter",["pointerout","pointerover"]),mi("onPointerLeave",["pointerout","pointerover"]),Sa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Sa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Sa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Sa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Sa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Sa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hs));function Ey(n,a){a=(a&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],f=c.event;c=c.listeners;e:{var m=void 0;if(a)for(var x=c.length-1;0<=x;x--){var k=c[x],z=k.instance,I=k.currentTarget;if(k=k.listener,z!==m&&f.isPropagationStopped())break e;m=k,f.currentTarget=I;try{m(f)}catch(Q){sc(Q)}f.currentTarget=null,m=z}else for(x=0;x<c.length;x++){if(k=c[x],z=k.instance,I=k.currentTarget,k=k.listener,z!==m&&f.isPropagationStopped())break e;m=k,f.currentTarget=I;try{m(f)}catch(Q){sc(Q)}f.currentTarget=null,m=z}}}}function ze(n,a){var o=a[cd];o===void 0&&(o=a[cd]=new Set);var c=n+"__bubble";o.has(c)||(Cy(a,n,2,!1),o.add(c))}function Kf(n,a,o){var c=0;a&&(c|=4),Cy(o,n,c,a)}var xc="_reactListening"+Math.random().toString(36).slice(2);function Jf(n){if(!n[xc]){n[xc]=!0,wg.forEach(function(o){o!=="selectionchange"&&(jS.has(o)||Kf(o,!1,n),Kf(o,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[xc]||(a[xc]=!0,Kf("selectionchange",!1,a))}}function Cy(n,a,o,c){switch(Zy(a)){case 2:var f=lT;break;case 8:f=cT;break;default:f=hh}o=f.bind(null,a,o,n),f=void 0,!wd||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(a,o,{capture:!0,passive:f}):n.addEventListener(a,o,!0):f!==void 0?n.addEventListener(a,o,{passive:f}):n.addEventListener(a,o,!1)}function eh(n,a,o,c,f){var m=c;if((a&1)===0&&(a&2)===0&&c!==null)e:for(;;){if(c===null)return;var x=c.tag;if(x===3||x===4){var k=c.stateNode.containerInfo;if(k===f)break;if(x===4)for(x=c.return;x!==null;){var z=x.tag;if((z===3||z===4)&&x.stateNode.containerInfo===f)return;x=x.return}for(;k!==null;){if(x=fi(k),x===null)return;if(z=x.tag,z===5||z===6||z===26||z===27){c=m=x;continue e}k=k.parentNode}}c=c.return}Dg(function(){var I=m,Q=yd(o),K=[];e:{var B=lv.get(n);if(B!==void 0){var X=jl,ve=n;switch(n){case"keypress":if(Rl(o)===0)break e;case"keydown":case"keyup":X=N_;break;case"focusin":ve="focus",X=Td;break;case"focusout":ve="blur",X=Td;break;case"beforeblur":case"afterblur":X=Td;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=Lg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=v_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=z_;break;case av:case iv:case ov:X=w_;break;case sv:X=D_;break;case"scroll":case"scrollend":X=m_;break;case"wheel":X=U_;break;case"copy":case"cut":case"paste":X=__;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=Hg;break;case"toggle":case"beforetoggle":X=$_}var pe=(a&4)!==0,Fe=!pe&&(n==="scroll"||n==="scrollend"),$=pe?B!==null?B+"Capture":null:B;pe=[];for(var j=I,q;j!==null;){var Z=j;if(q=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||q===null||$===null||(Z=zo(j,$),Z!=null&&pe.push(ps(j,Z,q))),Fe)break;j=j.return}0<pe.length&&(B=new X(B,ve,null,o,Q),K.push({event:B,listeners:pe}))}}if((a&7)===0){e:{if(B=n==="mouseover"||n==="pointerover",X=n==="mouseout"||n==="pointerout",B&&o!==vd&&(ve=o.relatedTarget||o.fromElement)&&(fi(ve)||ve[di]))break e;if((X||B)&&(B=Q.window===Q?Q:(B=Q.ownerDocument)?B.defaultView||B.parentWindow:window,X?(ve=o.relatedTarget||o.toElement,X=I,ve=ve?fi(ve):null,ve!==null&&(Fe=l(ve),pe=ve.tag,ve!==Fe||pe!==5&&pe!==27&&pe!==6)&&(ve=null)):(X=null,ve=I),X!==ve)){if(pe=Lg,Z="onMouseLeave",$="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&(pe=Hg,Z="onPointerLeave",$="onPointerEnter",j="pointer"),Fe=X==null?B:Ao(X),q=ve==null?B:Ao(ve),B=new pe(Z,j+"leave",X,o,Q),B.target=Fe,B.relatedTarget=q,Z=null,fi(Q)===I&&(pe=new pe($,j+"enter",ve,o,Q),pe.target=q,pe.relatedTarget=Fe,Z=pe),Fe=Z,X&&ve)t:{for(pe=X,$=ve,j=0,q=pe;q;q=Pi(q))j++;for(q=0,Z=$;Z;Z=Pi(Z))q++;for(;0<j-q;)pe=Pi(pe),j--;for(;0<q-j;)$=Pi($),q--;for(;j--;){if(pe===$||$!==null&&pe===$.alternate)break t;pe=Pi(pe),$=Pi($)}pe=null}else pe=null;X!==null&&My(K,B,X,pe,!1),ve!==null&&Fe!==null&&My(K,Fe,ve,pe,!0)}}e:{if(B=I?Ao(I):window,X=B.nodeName&&B.nodeName.toLowerCase(),X==="select"||X==="input"&&B.type==="file")var ce=Gg;else if(Fg(B))if(Vg)ce=V_;else{ce=P_;var Oe=F_}else X=B.nodeName,!X||X.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?I&&gd(I.elementType)&&(ce=Gg):ce=G_;if(ce&&(ce=ce(n,I))){Pg(K,ce,o,Q);break e}Oe&&Oe(n,B,I),n==="focusout"&&I&&B.type==="number"&&I.memoizedProps.value!=null&&md(B,"number",B.value)}switch(Oe=I?Ao(I):window,n){case"focusin":(Fg(Oe)||Oe.contentEditable==="true")&&(_i=Oe,Od=I,qo=null);break;case"focusout":qo=Od=_i=null;break;case"mousedown":Ad=!0;break;case"contextmenu":case"mouseup":case"dragend":Ad=!1,nv(K,o,Q);break;case"selectionchange":if(W_)break;case"keydown":case"keyup":nv(K,o,Q)}var fe;if(Ed)e:{switch(n){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else xi?Bg(n,o)&&(me="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(me="onCompositionStart");me&&(qg&&o.locale!=="ko"&&(xi||me!=="onCompositionStart"?me==="onCompositionEnd"&&xi&&(fe=jg()):(Xr=Q,xd="value"in Xr?Xr.value:Xr.textContent,xi=!0)),Oe=_c(I,me),0<Oe.length&&(me=new $g(me,n,null,o,Q),K.push({event:me,listeners:Oe}),fe?me.data=fe:(fe=Xg(o),fe!==null&&(me.data=fe)))),(fe=q_?I_(n,o):Y_(n,o))&&(me=_c(I,"onBeforeInput"),0<me.length&&(Oe=new $g("onBeforeInput","beforeinput",null,o,Q),K.push({event:Oe,listeners:me}),Oe.data=fe)),zS(K,n,I,o,Q)}Ey(K,a)})}function ps(n,a,o){return{instance:n,listener:a,currentTarget:o}}function _c(n,a){for(var o=a+"Capture",c=[];n!==null;){var f=n,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=zo(n,o),f!=null&&c.unshift(ps(n,f,m)),f=zo(n,a),f!=null&&c.push(ps(n,f,m))),n.tag===3)return c;n=n.return}return[]}function Pi(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function My(n,a,o,c,f){for(var m=a._reactName,x=[];o!==null&&o!==c;){var k=o,z=k.alternate,I=k.stateNode;if(k=k.tag,z!==null&&z===c)break;k!==5&&k!==26&&k!==27||I===null||(z=I,f?(I=zo(o,m),I!=null&&x.unshift(ps(o,I,z))):f||(I=zo(o,m),I!=null&&x.push(ps(o,I,z)))),o=o.return}x.length!==0&&n.push({event:a,listeners:x})}var US=/\r\n?/g,LS=/\u0000|\uFFFD/g;function Ny(n){return(typeof n=="string"?n:""+n).replace(US,`
`).replace(LS,"")}function Oy(n,a){return a=Ny(a),Ny(n)===a}function Sc(){}function Xe(n,a,o,c,f,m){switch(o){case"children":typeof c=="string"?a==="body"||a==="textarea"&&c===""||yi(n,c):(typeof c=="number"||typeof c=="bigint")&&a!=="body"&&yi(n,""+c);break;case"className":Ml(n,"class",c);break;case"tabIndex":Ml(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Ml(n,o,c);break;case"style":zg(n,c,m);break;case"data":if(a!=="object"){Ml(n,"data",c);break}case"src":case"href":if(c===""&&(a!=="a"||o!=="href")){n.removeAttribute(o);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(o);break}c=Al(""+c),n.setAttribute(o,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(a!=="input"&&Xe(n,a,"name",f.name,f,null),Xe(n,a,"formEncType",f.formEncType,f,null),Xe(n,a,"formMethod",f.formMethod,f,null),Xe(n,a,"formTarget",f.formTarget,f,null)):(Xe(n,a,"encType",f.encType,f,null),Xe(n,a,"method",f.method,f,null),Xe(n,a,"target",f.target,f,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(o);break}c=Al(""+c),n.setAttribute(o,c);break;case"onClick":c!=null&&(n.onclick=Sc);break;case"onScroll":c!=null&&ze("scroll",n);break;case"onScrollEnd":c!=null&&ze("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(o=c.__html,o!=null){if(f.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}o=Al(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(o,""+c):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":c===!0?n.setAttribute(o,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(o,c):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(o,c):n.removeAttribute(o);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(o):n.setAttribute(o,c);break;case"popover":ze("beforetoggle",n),ze("toggle",n),Cl(n,"popover",c);break;case"xlinkActuate":hr(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":hr(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":hr(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":hr(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":hr(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":hr(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":hr(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":hr(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":hr(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Cl(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=h_.get(o)||o,Cl(n,o,c))}}function th(n,a,o,c,f,m){switch(o){case"style":zg(n,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(o=c.__html,o!=null){if(f.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"children":typeof c=="string"?yi(n,c):(typeof c=="number"||typeof c=="bigint")&&yi(n,""+c);break;case"onScroll":c!=null&&ze("scroll",n);break;case"onScrollEnd":c!=null&&ze("scrollend",n);break;case"onClick":c!=null&&(n.onclick=Sc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xg.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),a=o.slice(2,f?o.length-7:void 0),m=n[Ft]||null,m=m!=null?m[o]:null,typeof m=="function"&&n.removeEventListener(a,m,f),typeof c=="function")){typeof m!="function"&&m!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(a,c,f);break e}o in n?n[o]=c:c===!0?n.setAttribute(o,""):Cl(n,o,c)}}}function Rt(n,a,o){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ze("error",n),ze("load",n);var c=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var x=o[m];if(x!=null)switch(m){case"src":c=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Xe(n,a,m,x,o,null)}}f&&Xe(n,a,"srcSet",o.srcSet,o,null),c&&Xe(n,a,"src",o.src,o,null);return;case"input":ze("invalid",n);var k=m=x=f=null,z=null,I=null;for(c in o)if(o.hasOwnProperty(c)){var Q=o[c];if(Q!=null)switch(c){case"name":f=Q;break;case"type":x=Q;break;case"checked":z=Q;break;case"defaultChecked":I=Q;break;case"value":m=Q;break;case"defaultValue":k=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(i(137,a));break;default:Xe(n,a,c,Q,o,null)}}Mg(n,m,k,z,I,x,f,!1),Nl(n);return;case"select":ze("invalid",n),c=x=m=null;for(f in o)if(o.hasOwnProperty(f)&&(k=o[f],k!=null))switch(f){case"value":m=k;break;case"defaultValue":x=k;break;case"multiple":c=k;default:Xe(n,a,f,k,o,null)}a=m,o=x,n.multiple=!!c,a!=null?vi(n,!!c,a,!1):o!=null&&vi(n,!!c,o,!0);return;case"textarea":ze("invalid",n),m=f=c=null;for(x in o)if(o.hasOwnProperty(x)&&(k=o[x],k!=null))switch(x){case"value":c=k;break;case"defaultValue":f=k;break;case"children":m=k;break;case"dangerouslySetInnerHTML":if(k!=null)throw Error(i(91));break;default:Xe(n,a,x,k,o,null)}Og(n,c,f,m),Nl(n);return;case"option":for(z in o)if(o.hasOwnProperty(z)&&(c=o[z],c!=null))switch(z){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:Xe(n,a,z,c,o,null)}return;case"dialog":ze("beforetoggle",n),ze("toggle",n),ze("cancel",n),ze("close",n);break;case"iframe":case"object":ze("load",n);break;case"video":case"audio":for(c=0;c<hs.length;c++)ze(hs[c],n);break;case"image":ze("error",n),ze("load",n);break;case"details":ze("toggle",n);break;case"embed":case"source":case"link":ze("error",n),ze("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(I in o)if(o.hasOwnProperty(I)&&(c=o[I],c!=null))switch(I){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Xe(n,a,I,c,o,null)}return;default:if(gd(a)){for(Q in o)o.hasOwnProperty(Q)&&(c=o[Q],c!==void 0&&th(n,a,Q,c,o,void 0));return}}for(k in o)o.hasOwnProperty(k)&&(c=o[k],c!=null&&Xe(n,a,k,c,o,null))}function $S(n,a,o,c){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,x=null,k=null,z=null,I=null,Q=null;for(X in o){var K=o[X];if(o.hasOwnProperty(X)&&K!=null)switch(X){case"checked":break;case"value":break;case"defaultValue":z=K;default:c.hasOwnProperty(X)||Xe(n,a,X,null,c,K)}}for(var B in c){var X=c[B];if(K=o[B],c.hasOwnProperty(B)&&(X!=null||K!=null))switch(B){case"type":m=X;break;case"name":f=X;break;case"checked":I=X;break;case"defaultChecked":Q=X;break;case"value":x=X;break;case"defaultValue":k=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(i(137,a));break;default:X!==K&&Xe(n,a,B,X,c,K)}}pd(n,x,k,z,I,Q,m,f);return;case"select":X=x=k=B=null;for(m in o)if(z=o[m],o.hasOwnProperty(m)&&z!=null)switch(m){case"value":break;case"multiple":X=z;default:c.hasOwnProperty(m)||Xe(n,a,m,null,c,z)}for(f in c)if(m=c[f],z=o[f],c.hasOwnProperty(f)&&(m!=null||z!=null))switch(f){case"value":B=m;break;case"defaultValue":k=m;break;case"multiple":x=m;default:m!==z&&Xe(n,a,f,m,c,z)}a=k,o=x,c=X,B!=null?vi(n,!!o,B,!1):!!c!=!!o&&(a!=null?vi(n,!!o,a,!0):vi(n,!!o,o?[]:"",!1));return;case"textarea":X=B=null;for(k in o)if(f=o[k],o.hasOwnProperty(k)&&f!=null&&!c.hasOwnProperty(k))switch(k){case"value":break;case"children":break;default:Xe(n,a,k,null,c,f)}for(x in c)if(f=c[x],m=o[x],c.hasOwnProperty(x)&&(f!=null||m!=null))switch(x){case"value":B=f;break;case"defaultValue":X=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(i(91));break;default:f!==m&&Xe(n,a,x,f,c,m)}Ng(n,B,X);return;case"option":for(var ve in o)if(B=o[ve],o.hasOwnProperty(ve)&&B!=null&&!c.hasOwnProperty(ve))switch(ve){case"selected":n.selected=!1;break;default:Xe(n,a,ve,null,c,B)}for(z in c)if(B=c[z],X=o[z],c.hasOwnProperty(z)&&B!==X&&(B!=null||X!=null))switch(z){case"selected":n.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:Xe(n,a,z,B,c,X)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pe in o)B=o[pe],o.hasOwnProperty(pe)&&B!=null&&!c.hasOwnProperty(pe)&&Xe(n,a,pe,null,c,B);for(I in c)if(B=c[I],X=o[I],c.hasOwnProperty(I)&&B!==X&&(B!=null||X!=null))switch(I){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(i(137,a));break;default:Xe(n,a,I,B,c,X)}return;default:if(gd(a)){for(var Fe in o)B=o[Fe],o.hasOwnProperty(Fe)&&B!==void 0&&!c.hasOwnProperty(Fe)&&th(n,a,Fe,void 0,c,B);for(Q in c)B=c[Q],X=o[Q],!c.hasOwnProperty(Q)||B===X||B===void 0&&X===void 0||th(n,a,Q,B,c,X);return}}for(var $ in o)B=o[$],o.hasOwnProperty($)&&B!=null&&!c.hasOwnProperty($)&&Xe(n,a,$,null,c,B);for(K in c)B=c[K],X=o[K],!c.hasOwnProperty(K)||B===X||B==null&&X==null||Xe(n,a,K,B,c,X)}var nh=null,rh=null;function Tc(n){return n.nodeType===9?n:n.ownerDocument}function Ay(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function zy(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function ah(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var ih=null;function HS(){var n=window.event;return n&&n.type==="popstate"?n===ih?!1:(ih=n,!0):(ih=null,!1)}var Ry=typeof setTimeout=="function"?setTimeout:void 0,qS=typeof clearTimeout=="function"?clearTimeout:void 0,Dy=typeof Promise=="function"?Promise:void 0,IS=typeof queueMicrotask=="function"?queueMicrotask:typeof Dy<"u"?function(n){return Dy.resolve(null).then(n).catch(YS)}:Ry;function YS(n){setTimeout(function(){throw n})}function oa(n){return n==="head"}function jy(n,a){var o=a,c=0,f=0;do{var m=o.nextSibling;if(n.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<c&&8>c){o=c;var x=n.ownerDocument;if(o&1&&ms(x.documentElement),o&2&&ms(x.body),o&4)for(o=x.head,ms(o),x=o.firstChild;x;){var k=x.nextSibling,z=x.nodeName;x[Oo]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&x.rel.toLowerCase()==="stylesheet"||o.removeChild(x),x=k}}if(f===0){n.removeChild(m),Ss(a);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:c=o.charCodeAt(0)-48;else c=0;o=m}while(o);Ss(a)}function oh(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var o=a;switch(a=a.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":oh(o),ud(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function BS(n,a,o,c){for(;n.nodeType===1;){var f=o;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[Oo])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=Hn(n.nextSibling),n===null)break}return null}function XS(n,a,o){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=Hn(n.nextSibling),n===null))return null;return n}function sh(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function FS(n,a){var o=n.ownerDocument;if(n.data!=="$?"||o.readyState==="complete")a();else{var c=function(){a(),o.removeEventListener("DOMContentLoaded",c)};o.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function Hn(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return n}var lh=null;function Uy(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(a===0)return n;a--}else o==="/$"&&a++}n=n.previousSibling}return null}function Ly(n,a,o){switch(a=Tc(o),n){case"html":if(n=a.documentElement,!n)throw Error(i(452));return n;case"head":if(n=a.head,!n)throw Error(i(453));return n;case"body":if(n=a.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}function ms(n){for(var a=n.attributes;a.length;)n.removeAttributeNode(a[0]);ud(n)}var Mn=new Map,$y=new Set;function kc(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Cr=O.d;O.d={f:PS,r:GS,D:VS,C:QS,L:WS,m:ZS,X:JS,S:KS,M:eT};function PS(){var n=Cr.f(),a=gc();return n||a}function GS(n){var a=hi(n);a!==null&&a.tag===5&&a.type==="form"?a0(a):Cr.r(n)}var Gi=typeof document>"u"?null:document;function Hy(n,a,o){var c=Gi;if(c&&typeof a=="string"&&a){var f=xn(a);f='link[rel="'+n+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),$y.has(f)||($y.add(f),n={rel:n,crossOrigin:o,href:a},c.querySelector(f)===null&&(a=c.createElement("link"),Rt(a,"link",n),Tt(a),c.head.appendChild(a)))}}function VS(n){Cr.D(n),Hy("dns-prefetch",n,null)}function QS(n,a){Cr.C(n,a),Hy("preconnect",n,a)}function WS(n,a,o){Cr.L(n,a,o);var c=Gi;if(c&&n&&a){var f='link[rel="preload"][as="'+xn(a)+'"]';a==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+xn(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+xn(o.imageSizes)+'"]')):f+='[href="'+xn(n)+'"]';var m=f;switch(a){case"style":m=Vi(n);break;case"script":m=Qi(n)}Mn.has(m)||(n=y({rel:"preload",href:a==="image"&&o&&o.imageSrcSet?void 0:n,as:a},o),Mn.set(m,n),c.querySelector(f)!==null||a==="style"&&c.querySelector(gs(m))||a==="script"&&c.querySelector(vs(m))||(a=c.createElement("link"),Rt(a,"link",n),Tt(a),c.head.appendChild(a)))}}function ZS(n,a){Cr.m(n,a);var o=Gi;if(o&&n){var c=a&&typeof a.as=="string"?a.as:"script",f='link[rel="modulepreload"][as="'+xn(c)+'"][href="'+xn(n)+'"]',m=f;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Qi(n)}if(!Mn.has(m)&&(n=y({rel:"modulepreload",href:n},a),Mn.set(m,n),o.querySelector(f)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(vs(m)))return}c=o.createElement("link"),Rt(c,"link",n),Tt(c),o.head.appendChild(c)}}}function KS(n,a,o){Cr.S(n,a,o);var c=Gi;if(c&&n){var f=pi(c).hoistableStyles,m=Vi(n);a=a||"default";var x=f.get(m);if(!x){var k={loading:0,preload:null};if(x=c.querySelector(gs(m)))k.loading=5;else{n=y({rel:"stylesheet",href:n,"data-precedence":a},o),(o=Mn.get(m))&&ch(n,o);var z=x=c.createElement("link");Tt(z),Rt(z,"link",n),z._p=new Promise(function(I,Q){z.onload=I,z.onerror=Q}),z.addEventListener("load",function(){k.loading|=1}),z.addEventListener("error",function(){k.loading|=2}),k.loading|=4,Ec(x,a,c)}x={type:"stylesheet",instance:x,count:1,state:k},f.set(m,x)}}}function JS(n,a){Cr.X(n,a);var o=Gi;if(o&&n){var c=pi(o).hoistableScripts,f=Qi(n),m=c.get(f);m||(m=o.querySelector(vs(f)),m||(n=y({src:n,async:!0},a),(a=Mn.get(f))&&uh(n,a),m=o.createElement("script"),Tt(m),Rt(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(f,m))}}function eT(n,a){Cr.M(n,a);var o=Gi;if(o&&n){var c=pi(o).hoistableScripts,f=Qi(n),m=c.get(f);m||(m=o.querySelector(vs(f)),m||(n=y({src:n,async:!0,type:"module"},a),(a=Mn.get(f))&&uh(n,a),m=o.createElement("script"),Tt(m),Rt(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(f,m))}}function qy(n,a,o,c){var f=(f=re.current)?kc(f):null;if(!f)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(a=Vi(o.href),o=pi(f).hoistableStyles,c=o.get(a),c||(c={type:"style",instance:null,count:0,state:null},o.set(a,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=Vi(o.href);var m=pi(f).hoistableStyles,x=m.get(n);if(x||(f=f.ownerDocument||f,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,x),(m=f.querySelector(gs(n)))&&!m._p&&(x.instance=m,x.state.loading=5),Mn.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Mn.set(n,o),m||tT(f,n,o,x.state))),a&&c===null)throw Error(i(528,""));return x}if(a&&c!==null)throw Error(i(529,""));return null;case"script":return a=o.async,o=o.src,typeof o=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Qi(o),o=pi(f).hoistableScripts,c=o.get(a),c||(c={type:"script",instance:null,count:0,state:null},o.set(a,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function Vi(n){return'href="'+xn(n)+'"'}function gs(n){return'link[rel="stylesheet"]['+n+"]"}function Iy(n){return y({},n,{"data-precedence":n.precedence,precedence:null})}function tT(n,a,o,c){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?c.loading=1:(a=n.createElement("link"),c.preload=a,a.addEventListener("load",function(){return c.loading|=1}),a.addEventListener("error",function(){return c.loading|=2}),Rt(a,"link",o),Tt(a),n.head.appendChild(a))}function Qi(n){return'[src="'+xn(n)+'"]'}function vs(n){return"script[async]"+n}function Yy(n,a,o){if(a.count++,a.instance===null)switch(a.type){case"style":var c=n.querySelector('style[data-href~="'+xn(o.href)+'"]');if(c)return a.instance=c,Tt(c),c;var f=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),Tt(c),Rt(c,"style",f),Ec(c,o.precedence,n),a.instance=c;case"stylesheet":f=Vi(o.href);var m=n.querySelector(gs(f));if(m)return a.state.loading|=4,a.instance=m,Tt(m),m;c=Iy(o),(f=Mn.get(f))&&ch(c,f),m=(n.ownerDocument||n).createElement("link"),Tt(m);var x=m;return x._p=new Promise(function(k,z){x.onload=k,x.onerror=z}),Rt(m,"link",c),a.state.loading|=4,Ec(m,o.precedence,n),a.instance=m;case"script":return m=Qi(o.src),(f=n.querySelector(vs(m)))?(a.instance=f,Tt(f),f):(c=o,(f=Mn.get(m))&&(c=y({},o),uh(c,f)),n=n.ownerDocument||n,f=n.createElement("script"),Tt(f),Rt(f,"link",c),n.head.appendChild(f),a.instance=f);case"void":return null;default:throw Error(i(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(c=a.instance,a.state.loading|=4,Ec(c,o.precedence,n));return a.instance}function Ec(n,a,o){for(var c=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=c.length?c[c.length-1]:null,m=f,x=0;x<c.length;x++){var k=c[x];if(k.dataset.precedence===a)m=k;else if(m!==f)break}m?m.parentNode.insertBefore(n,m.nextSibling):(a=o.nodeType===9?o.head:o,a.insertBefore(n,a.firstChild))}function ch(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function uh(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var Cc=null;function By(n,a,o){if(Cc===null){var c=new Map,f=Cc=new Map;f.set(o,c)}else f=Cc,c=f.get(o),c||(c=new Map,f.set(o,c));if(c.has(n))return c;for(c.set(n,null),o=o.getElementsByTagName(n),f=0;f<o.length;f++){var m=o[f];if(!(m[Oo]||m[Ut]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var x=m.getAttribute(a)||"";x=n+x;var k=c.get(x);k?k.push(m):c.set(x,[m])}}return c}function Xy(n,a,o){n=n.ownerDocument||n,n.head.insertBefore(o,a==="title"?n.querySelector("head > title"):null)}function nT(n,a,o){if(o===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return n=a.disabled,typeof a.precedence=="string"&&n==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Fy(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var ys=null;function rT(){}function aT(n,a,o){if(ys===null)throw Error(i(475));var c=ys;if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var f=Vi(o.href),m=n.querySelector(gs(f));if(m){n=m._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(c.count++,c=Mc.bind(c),n.then(c,c)),a.state.loading|=4,a.instance=m,Tt(m);return}m=n.ownerDocument||n,o=Iy(o),(f=Mn.get(f))&&ch(o,f),m=m.createElement("link"),Tt(m);var x=m;x._p=new Promise(function(k,z){x.onload=k,x.onerror=z}),Rt(m,"link",o),a.instance=m}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(c.count++,a=Mc.bind(c),n.addEventListener("load",a),n.addEventListener("error",a))}}function iT(){if(ys===null)throw Error(i(475));var n=ys;return n.stylesheets&&n.count===0&&dh(n,n.stylesheets),0<n.count?function(a){var o=setTimeout(function(){if(n.stylesheets&&dh(n,n.stylesheets),n.unsuspend){var c=n.unsuspend;n.unsuspend=null,c()}},6e4);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(o)}}:null}function Mc(){if(this.count--,this.count===0){if(this.stylesheets)dh(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Nc=null;function dh(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Nc=new Map,a.forEach(oT,n),Nc=null,Mc.call(n))}function oT(n,a){if(!(a.state.loading&4)){var o=Nc.get(n);if(o)var c=o.get(null);else{o=new Map,Nc.set(n,o);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var x=f[m];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(o.set(x.dataset.precedence,x),c=x)}c&&o.set(null,c)}f=a.instance,x=f.getAttribute("data-precedence"),m=o.get(x)||c,m===c&&o.set(null,f),o.set(x,f),this.count++,c=Mc.bind(this),f.addEventListener("load",c),f.addEventListener("error",c),m?m.parentNode.insertBefore(f,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),a.state.loading|=4}}var bs={$$typeof:A,Provider:null,Consumer:null,_currentValue:R,_currentValue2:R,_threadCount:0};function sT(n,a,o,c,f,m,x,k){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=od(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=od(0),this.hiddenUpdates=od(null),this.identifierPrefix=c,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function Py(n,a,o,c,f,m,x,k,z,I,Q,K){return n=new sT(n,a,o,x,k,z,I,K),a=1,m===!0&&(a|=24),m=on(3,null,null,a),n.current=m,m.stateNode=n,a=Fd(),a.refCount++,n.pooledCache=a,a.refCount++,m.memoizedState={element:c,isDehydrated:o,cache:a},Qd(m),n}function Gy(n){return n?(n=Ei,n):Ei}function Vy(n,a,o,c,f,m){f=Gy(f),c.context===null?c.context=f:c.pendingContext=f,c=Gr(a),c.payload={element:o},m=m===void 0?null:m,m!==null&&(c.callback=m),o=Vr(n,c,a),o!==null&&(dn(o,n,a),Qo(o,n,a))}function Qy(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<a?o:a}}function fh(n,a){Qy(n,a),(n=n.alternate)&&Qy(n,a)}function Wy(n){if(n.tag===13){var a=ki(n,67108864);a!==null&&dn(a,n,67108864),fh(n,67108864)}}var Oc=!0;function lT(n,a,o,c){var f=E.T;E.T=null;var m=O.p;try{O.p=2,hh(n,a,o,c)}finally{O.p=m,E.T=f}}function cT(n,a,o,c){var f=E.T;E.T=null;var m=O.p;try{O.p=8,hh(n,a,o,c)}finally{O.p=m,E.T=f}}function hh(n,a,o,c){if(Oc){var f=ph(c);if(f===null)eh(n,a,c,Ac,o),Ky(n,c);else if(dT(f,n,a,o,c))c.stopPropagation();else if(Ky(n,c),a&4&&-1<uT.indexOf(n)){for(;f!==null;){var m=hi(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var x=_a(m.pendingLanes);if(x!==0){var k=m;for(k.pendingLanes|=2,k.entangledLanes|=2;x;){var z=1<<31-rn(x);k.entanglements[1]|=z,x&=~z}ar(m),(Ie&6)===0&&(pc=Jn()+500,fs(0))}}break;case 13:k=ki(m,2),k!==null&&dn(k,m,2),gc(),fh(m,2)}if(m=ph(c),m===null&&eh(n,a,c,Ac,o),m===f)break;f=m}f!==null&&c.stopPropagation()}else eh(n,a,c,null,o)}}function ph(n){return n=yd(n),mh(n)}var Ac=null;function mh(n){if(Ac=null,n=fi(n),n!==null){var a=l(n);if(a===null)n=null;else{var o=a.tag;if(o===13){if(n=u(a),n!==null)return n;n=null}else if(o===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return Ac=n,null}function Zy(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q2()){case dg:return 2;case fg:return 8;case Sl:case W2:return 32;case hg:return 268435456;default:return 32}default:return 32}}var gh=!1,sa=null,la=null,ca=null,ws=new Map,xs=new Map,ua=[],uT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ky(n,a){switch(n){case"focusin":case"focusout":sa=null;break;case"dragenter":case"dragleave":la=null;break;case"mouseover":case"mouseout":ca=null;break;case"pointerover":case"pointerout":ws.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":xs.delete(a.pointerId)}}function _s(n,a,o,c,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:a,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},a!==null&&(a=hi(a),a!==null&&Wy(a)),n):(n.eventSystemFlags|=c,a=n.targetContainers,f!==null&&a.indexOf(f)===-1&&a.push(f),n)}function dT(n,a,o,c,f){switch(a){case"focusin":return sa=_s(sa,n,a,o,c,f),!0;case"dragenter":return la=_s(la,n,a,o,c,f),!0;case"mouseover":return ca=_s(ca,n,a,o,c,f),!0;case"pointerover":var m=f.pointerId;return ws.set(m,_s(ws.get(m)||null,n,a,o,c,f)),!0;case"gotpointercapture":return m=f.pointerId,xs.set(m,_s(xs.get(m)||null,n,a,o,c,f)),!0}return!1}function Jy(n){var a=fi(n.target);if(a!==null){var o=l(a);if(o!==null){if(a=o.tag,a===13){if(a=u(o),a!==null){n.blockedOn=a,a_(n.priority,function(){if(o.tag===13){var c=un();c=sd(c);var f=ki(o,c);f!==null&&dn(f,o,c),fh(o,c)}});return}}else if(a===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function zc(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var o=ph(n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);vd=c,o.target.dispatchEvent(c),vd=null}else return a=hi(o),a!==null&&Wy(a),n.blockedOn=o,!1;a.shift()}return!0}function eb(n,a,o){zc(n)&&o.delete(a)}function fT(){gh=!1,sa!==null&&zc(sa)&&(sa=null),la!==null&&zc(la)&&(la=null),ca!==null&&zc(ca)&&(ca=null),ws.forEach(eb),xs.forEach(eb)}function Rc(n,a){n.blockedOn===a&&(n.blockedOn=null,gh||(gh=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,fT)))}var Dc=null;function tb(n){Dc!==n&&(Dc=n,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){Dc===n&&(Dc=null);for(var a=0;a<n.length;a+=3){var o=n[a],c=n[a+1],f=n[a+2];if(typeof c!="function"){if(mh(c||o)===null)continue;break}var m=hi(o);m!==null&&(n.splice(a,3),a-=3,mf(m,{pending:!0,data:f,method:o.method,action:c},c,f))}}))}function Ss(n){function a(z){return Rc(z,n)}sa!==null&&Rc(sa,n),la!==null&&Rc(la,n),ca!==null&&Rc(ca,n),ws.forEach(a),xs.forEach(a);for(var o=0;o<ua.length;o++){var c=ua[o];c.blockedOn===n&&(c.blockedOn=null)}for(;0<ua.length&&(o=ua[0],o.blockedOn===null);)Jy(o),o.blockedOn===null&&ua.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(c=0;c<o.length;c+=3){var f=o[c],m=o[c+1],x=f[Ft]||null;if(typeof m=="function")x||tb(o);else if(x){var k=null;if(m&&m.hasAttribute("formAction")){if(f=m,x=m[Ft]||null)k=x.formAction;else if(mh(f)!==null)continue}else k=x.action;typeof k=="function"?o[c+1]=k:(o.splice(c,3),c-=3),tb(o)}}}function vh(n){this._internalRoot=n}jc.prototype.render=vh.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(i(409));var o=a.current,c=un();Vy(o,c,n,a,null,null)},jc.prototype.unmount=vh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;Vy(n.current,2,null,n,null,null),gc(),a[di]=null}};function jc(n){this._internalRoot=n}jc.prototype.unstable_scheduleHydration=function(n){if(n){var a=yg();n={blockedOn:null,target:n,priority:a};for(var o=0;o<ua.length&&a!==0&&a<ua[o].priority;o++);ua.splice(o,0,n),o===0&&Jy(n)}};var nb=t.version;if(nb!=="19.1.0")throw Error(i(527,nb,"19.1.0"));O.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=h(a),n=n!==null?p(n):null,n=n===null?null:n.stateNode,n};var hT={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uc.isDisabled&&Uc.supportsFiber)try{Co=Uc.inject(hT),nn=Uc}catch{}}return Ns.createRoot=function(n,a){if(!s(n))throw Error(i(299));var o=!1,c="",f=y0,m=b0,x=w0,k=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(x=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(k=a.unstable_transitionCallbacks)),a=Py(n,1,!1,null,null,o,c,f,m,x,k,null),n[di]=a.current,Jf(n),new vh(a)},Ns.hydrateRoot=function(n,a,o){if(!s(n))throw Error(i(299));var c=!1,f="",m=y0,x=b0,k=w0,z=null,I=null;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(x=o.onCaughtError),o.onRecoverableError!==void 0&&(k=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(z=o.unstable_transitionCallbacks),o.formState!==void 0&&(I=o.formState)),a=Py(n,1,!0,a,o??null,c,f,m,x,k,z,I),a.context=Gy(null),o=a.current,c=un(),c=sd(c),f=Gr(c),f.callback=null,Vr(o,f,c),o=c,a.current.lanes=o,No(a,o),ar(a),n[di]=a.current,Jf(n),new jc(a)},Ns.version="19.1.0",Ns}var vw;function RC(){if(vw)return Yh.exports;vw=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Yh.exports=zC(),Yh.exports}var DC=RC();function Pu(e,t){for(const r in e)t(e[r],r)}function mn(e,t){e.forEach(t)}function St(e,t,r){if(!e)throw Error(`${r?r+": ":""}${t}`)}function $r({node:e=[],from:t,source:r,parent:i=t||r,to:s,target:l,child:u=s||l,scope:d={},meta:h={},family:p={type:"regular"},regional:y}={}){const g=Hs(i),w=Hs(p.links),b=Hs(p.owners),S=[];mn(e,M=>M&&Rn(S,M));const T={id:FC(),seq:S,next:Hs(u),meta:h,scope:d,family:{triggers:g.length,type:p.type||"crosslink",links:w,owners:b}};return mn(w,M=>Rn(Gu(M),T)),mn(b,M=>Rn(Vu(M),T)),mn(g,M=>Rn(M.next,T)),T}function zx(e,t,r){let i,s=jr,l=null,u=rt;if(e.target&&(t=e.params,r=e.defer,i=e.meta,s="page"in e?e.page:s,e.stack&&(l=e.stack),u=Vc(e)||u,e=e.target),u&&rt&&u!==rt&&(rt=null),Array.isArray(e))for(let S=0;S<e.length;S++)Ba("pure",s,yn(e[S]),l,t[S],u,i);else Ba("pure",s,yn(e),l,t,u,i);if(r&&!Qc)return;const d={isRoot:Qc,currentPage:jr,scope:rt,isWatch:Qh,isPure:uu};let h,p,y,g,w,b;Qc=0;e:for(;g=KC();){const{idx:S,stack:T,type:M}=g;y=T.node,jr=w=T.page,rt=Vc(T),w?b=w.reg:rt&&(b=rt.reg);const _=!!w,C=!!rt,A={fail:0,scope:y.scope};h=p=0;for(let U=S;U<y.seq.length&&!h;U++){const D=y.seq[U];if(D.order){const{priority:P,barrierID:G}=D.order,ee=G?w?`${w.fullID}_${G}`:G:0;if(U!==S||M!==P){G?Vh.has(ee)||(Vh.add(ee),Yp(U,T,P,G)):Yp(U,T,P,0);continue e}G&&Vh.delete(ee)}switch(D.type){case"mov":{const G=D.data;let ee;switch(G.from){case"stack":ee=lu(T);break;case"a":case"b":ee=T[G.from];break;case"value":ee=G.store;break;case"store":if(b&&!b[G.store.id])if(_){const ne=Yx(w,G.store.id);T.page=w=ne,ne?b=ne.reg:C?(yo(rt,G.store,0,1,G.softRead),b=rt.reg):b=void 0}else C&&yo(rt,G.store,0,1,G.softRead);ee=Gs(b&&b[G.store.id]||G.store)}switch(G.to){case"stack":T.value=ee;break;case"a":case"b":T[G.to]=ee;break;case"store":JC(w,rt,G.target,0).current=ee}break}case"compute":const P=D.data;if(P.fn){Qh=y.meta.op==="watch",uu=P.pure;const G=P.safe?(0,P.fn)(lu(T),A.scope,T):t5(A,P.fn,T);P.filter?p=!G:T.value=G,Qh=d.isWatch,uu=d.isPure}}h=A.fail||p}if(!h){const U=lu(T),D=Vc(T);if(mn(y.next,P=>{Ba("child",w,P,T,U,D)}),D){y.meta.needFxCounter&&Ba("child",w,D.fxCount,T,U,D),y.meta.storeChange&&Ba("child",w,D.storeChange,T,U,D),y.meta.warnSerialize&&Ba("child",w,D.warnSerializeNode,T,U,D);const P=D.additionalLinks[y.id];P&&mn(P,G=>{Ba("child",w,G,T,U,D)})}}}Qc=d.isRoot,jr=d.currentPage,rt=Vc(d)}function jC(e,t="combine"){let r=t+"(",i="",s=0;return Pu(e,l=>{s<25&&(l!=null&&(r+=i,r+=xa(l)?Dx(l).fullName:l.toString()),s+=1,i=", ")}),r+")"}function UC(e,t){let r,i;const s=e;if(t){const l=Dx(t);e.length===0?(r=l.path,i=l.fullName):(r=l.path.concat([e]),i=l.fullName.length===0?e:l.fullName+"/"+e)}else r=e.length===0?[]:[e],i=e;return{shortName:s,fullName:i,path:r}}function si(e,t){if(!t||!t.name&&!t.named&&!t.loc)return e;let r=`[${e}]`;const i=t.named||t.name;i&&(r+=` unit '${i}'`);const s=t.loc;return!i&&s&&(r+=` (${s.file}:${s.line}:${s.column})`),r}function Xm(e,t){const r=e[0];Hx(r);let i=r.or;const s=r.and;if(s){const l=s[0];if(ur(l)&&"and"in l){const u=Xm(s);e=u[0],i={...i,...u[1]}}else e=s}return[e,i]}function Hp(e){const t=()=>e();return t.unsubscribe=()=>e(),t}function Vn(e,...t){}function Ve(e,t){const r=cl({or:t,and:typeof e=="string"?{name:e}:e}),i=si("event",r),s=(d,...h)=>(St(!ga(s,"derived"),"call of derived event is not supported, use createEvent instead",i),St(!uu,"unit call from pure function is not supported, use operators like sample instead",i),jr?((p,y,g,w)=>{const b=jr;_w(null);const T=p.create(g,w);return _w(b),T})(s,l,d,h):s.create(d,h)),l=GC(),u=Object.assign(s,{graphite:$r({meta:Fx(r.actualOp||"event",s,r,Wu(Ve)),regional:1}),create:d=>(zx({target:s,params:d,scope:rt}),d),watch:d=>Bx(s,d),map:d=>Wh(s,mo,d,[Dr()]),filter:d=>Wh(s,"filter",d.fn?d:d.fn,[Dr(Qu,1)]),filterMap:d=>Wh(s,"filterMap",d,[Dr(),go(h=>!Dn(h),1)]),prepend(d){St(s.targetable,".prepend of derived event is not supported, call source event instead",i);const h=Ve("* → "+s.shortName,{parent:ol(s)});return Vn("eventPrepend",yn(h)),ti(h,s,[Dr()],"prepend",d),r5(s,h),h}});return r!=null&&r.domain&&r.domain.hooks.event(u),Rr(u,"id",u.graphite.id),$x(u.graphite),u}function yw(e,t,r,i,s){return qp(r,`${s} ${t}`,"first argument"),St(qr(i),"second argument should be a function",s),sl(!ga(e,"derived"),`${t} in derived store`,`${t} in store created via createStore`,s),mn(Array.isArray(r)?r:[r],l=>{e.off(l),Px(l,e,"on",WC,i)}),e}function vn(e,t){const r=cl(t),i=vo(e),s=si("store",r),l=Ve({named:"updates",derived:1});Vn("storeBase",i);const u=i.id,d="skipVoid"in r,h=d&&!r.skipVoid;sl(!(d&&r.skipVoid),"{skipVoid: true}","updateFilter",s);const p={updates:l,defaultState:e,stateRef:i,getState(){let _,C=i;if(jr){let A=jr;for(;A&&!A.reg[u];)A=ol(A);A&&(_=A)}return!_&&rt&&(yo(rt,i,1),_=rt),_&&(C=_.reg[u]),Gs(C)},setState:_=>zx({target:p,params:_,defer:1,scope:rt}),reset:(..._)=>(St(p.targetable,".reset of derived store is not supported",s),mn(_,C=>yw(p,".reset",C,()=>p.defaultState,s)),p),on:(_,C)=>(St(p.targetable,".on of derived store is not supported",s),yw(p,".on",_,C,s)),off(_){const C=yn(_).id,A=yn(p).family.links.find(U=>U.meta.onTrigger===C);return A&&zu(A),p},map(_,C){let A,U;ur(_)&&(A=_,_=_.fn);const D=p.getState(),P=Dn(D);(!P||P&&h)&&(U=_(D));const G=vn(U,{name:`${p.shortName} → *`,derived:1,...C,and:A}),ee=Px(p,G,mo,Qu,_);return Ip(sr(G),{type:mo,fn:_,from:i}),sr(G).noInit=1,Vn("storeMap",i,ee),G},watch(_,C){if(sl(!C,"watch second argument","sample",s),!C||!xa(_)){const A=Bx(p,_);return Vn("storeWatch",i,_)||_(p.getState()),A}return St(qr(C),"second argument should be a function",s),_.watch(A=>C(p.getState(),A))}},y=Fx("store",p,r,Wu(vn)),g=p.defaultConfig.updateFilter;p.graphite=$r({scope:{state:i,fn:g},node:[go((_,C,A)=>(A.scope&&!A.scope.reg[i.id]&&(A.b=1),_)),Wa(i),go((_,C,{a:A,b:U})=>{const D=Dn(_);return D&&!d&&BC(`${s}: ${fu}`,ga(p,"unitTrace")),(D&&h||!D)&&(_!==A||U)},1),g&&Dr(qx,1),zn({from:"stack",target:i})],child:l,meta:{...y,defaultState:e,stateRef:i},regional:1}),Rr(p,"id",p.graphite.id),Rr(p,"rootStateRefId",u);const w=ga(p,"serialize"),b=ga(p,"derived"),S=w==="ignore",T=ga(p,"sid");T&&(Rr(p,"storeChange",1),i.sid=T),T||S||b||Rr(p,"warnSerialize",1);const M=Dn(e);return St(b||!M||M&&h,fu,s),b&&M&&!d&&console.error(`${s}: ${fu}`),Au(p,[l]),r!=null&&r.domain&&r.domain.hooks.store(p),b||(p.reinit=Ve({named:"reinit"}),p.reset(p.reinit)),i.meta=p.graphite.meta,$x(p.graphite),p}function Qn(...e){let t,r,i;[e,i]=Xm(e);const s=si("combine",i),l=e[e.length-1],u=e.length>1&&!Un(l)&&ur(l),d=u&&l,h=u?e[e.length-2]:l;let p,y,g;if(qr(h)?(r=e.slice(0,u?-2:-1),t=h):r=e,r.length===1){const w=r[0];Un(w)||(p=w,y=1)}if(!y&&(p=r,t)){g=1;const w=t;t=b=>w(...b)}return St(ur(p),`${s}: shape should be an object`),a5(Array.isArray(p),!g,p,Wu(Qn),i,t,d)}function LC(e,t){let r=0;return mn(i5,i=>{i in e&&(St(e[i]!=null,Gx(t,i)),r=1)}),r}function li(...e){let t,r,i,s,[[l,u,d],h]=Xm(e),p=1;const y=si("sample",h);return Dn(u)&&ur(l)&&LC(l,y)&&(u=l.clock,d=l.fn,"batch"in l?p=l.batch:(sl(!("greedy"in l),"greedy in sample","batch",y),p=!l.greedy),s=l.filter,t=l.target,r=l.name,i=l.sid,l=l.source),o5("sample",u,l,s,t,d,r,h,p,1,0,i)}function ko(e,t,r){const i=si("restore",r);if(St(!Un(e),"restore($store) is not supported",i),jx(e)||Ou(e)){const l=ol(e),u=vn(t,{parent:l,name:e.shortName,and:r});return ti(Ou(e)?e.doneData:e,u),l&&l.hooks.store(u),u}const s=Array.isArray(e)?[]:{};return Pu(e,(l,u)=>s[u]=Un(l)?l:vn(l,{name:u})),s}function $C(e,{scope:t,safe:r}={}){St(t||rt||r,"scopeBind: scope not found");const i=t||rt;return(...s)=>{function l(){xw(h)}let u,d=0;const h=rt;xw(i);try{u=e(...s)}catch(p){u=p,d=1}if(l(),d)throw u;return u instanceof Promise&&u.then(l,l),u}}function Rx({unit:e,fn:t,scope:r,batch:i}){const s=[cu.run({fn:u=>t(u)})];i&&s.unshift(cu.compute({priority:"sampler",batch:1})),Un(e)&&s.unshift(cu.mov({store:e.stateRef,to:"stack"}));const l=Array.isArray(e)?e:[e];if(r){const u=[],d=r.additionalLinks;return l.forEach(h=>{const p=d[h.graphite.id]||[];d[h.graphite.id]=p;const y=$r({node:HC(s,h),meta:{watchOp:h.kind}});p.push(y),u.push(()=>{const g=p.indexOf(y);g!==-1&&p.splice(g,1),zu(y)})}),Hp(()=>{u.forEach(h=>h())})}{const u=$r({node:s,parent:l,family:{owners:l}});return Hp(()=>{zu(u)})}}function HC(e,t){return Un(t)?[cu.mov({store:t.stateRef,to:"stack"}),...e]:e}const qC=typeof Symbol<"u"&&Symbol.observable||"@@observable",mo="map",yn=e=>e.graphite||e,Gu=e=>e.family.owners,Vu=e=>e.family.links,sr=e=>e.stateRef,lu=e=>e.value,ol=e=>e.parent,Vc=e=>e.scope,ga=(e,t)=>yn(e).meta[t],Rr=(e,t,r)=>yn(e).meta[t]=r,Dx=e=>e.compositeName,xa=e=>(qr(e)||ur(e))&&"kind"in e,vl=e=>t=>xa(t)&&t.kind===e,Un=vl("store"),jx=vl("event"),Ou=vl("effect"),IC=e=>xa(e)&&!!e.targetable,Ux=vl("domain"),YC=vl("scope");var $s={__proto__:null,unit:xa,store:Un,event:jx,effect:Ou,targetable:IC,domain:Ux,scope:YC,attached:e=>Ou(e)&&ga(e,"attached")==1};const Ph=(e,t)=>e.includes(t),Gh=(e,t)=>{const r=e.indexOf(t);r!==-1&&e.splice(r,1)},Rn=(e,t)=>e.push(t),sl=(e,t,r,i)=>!e&&console.error(`${i?i+": ":""}${t} is deprecated${r?`, use ${r} instead`:""}`),BC=(e,t)=>{const r=Error(e);r.stack=t,console.error(r)},Fm=()=>{let e=0;return()=>""+ ++e},XC=Fm(),Lx=Fm(),FC=Fm();let PC=null;const $x=e=>{},GC=()=>PC,VC=e=>e,Au=(e,t)=>{const r=yn(e);mn(t,i=>{const s=yn(i);r.family.type!=="domain"&&(s.family.type="crosslink"),Rn(Gu(s),r),Rn(Vu(r),s)})},Hs=(e=[])=>(Array.isArray(e)?e:[e]).flat().map(yn),ur=e=>typeof e=="object"&&e!==null,qr=e=>typeof e=="function",Dn=e=>e===void 0,Hx=e=>St(ur(e)||qr(e),"expect first argument be an object"),bw=(e,t,r,i)=>St(!(!ur(e)&&!qr(e)||!("family"in e)&&!("graphite"in e)),`${t}: expect ${r} to be a unit (store, event or effect)${i}`),qp=(e,t,r)=>{Array.isArray(e)?mn(e,(i,s)=>bw(i,t,`${s} item of ${r}`,"")):bw(e,t,r," or array of units")},QC=(e,t,r="target")=>mn(Hs(t),i=>St(!ga(i,"derived"),`${e}: derived unit in "${r}" is not supported, use createStore/createEvent instead"`)),qx=(e,{fn:t},{a:r})=>t(e,r),WC=(e,{fn:t},{a:r})=>t(r,e),Qu=(e,{fn:t})=>t(e),Ix=(e,t,r,i)=>{const s={id:Lx(),type:e,data:t};return r&&(s.order={priority:r},i&&(s.order.barrierID=++ZC)),s};let ZC=0;const zn=({from:e="store",store:t,target:r,to:i=r?"store":"stack",batch:s,priority:l})=>Ix("mov",{from:e,store:t,to:i,target:r},l,s),ll=({fn:e,batch:t,priority:r,safe:i=0,filter:s=0,pure:l=0})=>Ix("compute",{fn:e,safe:i,filter:s,pure:l},r,t),Pm=({fn:e})=>ll({fn:e,priority:"effect"}),go=(e,t,r)=>ll({fn:e,safe:1,filter:t,priority:r}),Wa=(e,t,r)=>zn({store:e,to:t?"stack":"a",priority:r&&"sampler",batch:1}),Dr=(e=Qu,t)=>ll({fn:e,pure:1,filter:t}),cu={mov:zn,compute:ll,filter:({fn:e,pure:t})=>ll({fn:e,filter:1,pure:t}),run:Pm},vo=e=>({id:Lx(),current:e,initial:e}),Gs=({current:e})=>e,Ip=(e,t)=>{e.before||(e.before=[]),Rn(e.before,t)};let io=null;const Gm=(e,t)=>{if(!e)return t;if(!t)return e;let r;return(e.v.type===t.v.type&&e.v.id>t.v.id||Bp(e.v.type)>Bp(t.v.type))&&(r=e,e=t,t=r),r=Gm(e.r,t),e.r=e.l,e.l=r,e},Vm=[];let ww=0;for(;ww<6;)Rn(Vm,{first:null,last:null,size:0}),ww+=1;const KC=()=>{for(let e=0;e<6;e++){const t=Vm[e];if(t.size>0){if(e===3||e===4){t.size-=1;const i=io.v;return io=Gm(io.l,io.r),i}t.size===1&&(t.last=null);const r=t.first;return t.first=r.r,t.size-=1,r.v}}},Ba=(e,t,r,i,s,l,u)=>Yp(0,{a:null,b:null,node:r,parent:i,value:s,page:t,scope:l,meta:u},e,0),Yp=(e,t,r,i)=>{const s=Bp(r),l=Vm[s],u={v:{idx:e,stack:t,type:r,id:i},l:null,r:null};s===3||s===4?io=Gm(io,u):(l.size===0?l.first=u:l.last.r=u,l.last=u),l.size+=1},Bp=e=>{switch(e){case"child":return 0;case"pure":return 1;case"read":return 2;case"barrier":return 3;case"sampler":return 4;case"effect":return 5;default:return-1}},Vh=new Set;let rt,Qc=1,Qh=0,uu=0,jr=null;const xw=e=>{rt=e},_w=e=>{jr=e},Yx=(e,t)=>{if(e){for(;e&&!e.reg[t];)e=e.parent;if(e)return e}return null},JC=(e,t,r,i)=>{const s=Yx(e,r.id);return s?s.reg[r.id]:t?(yo(t,r,i),t.reg[r.id]):r},e5=e=>e,yo=(e,t,r,i,s)=>{const l=e.reg;if(l[t.id])return;const u=t.sid,d={id:t.id,current:t.initial,meta:t.meta};if(d.id in e.values.idMap)d.current=e.values.idMap[d.id];else if(u&&u in e.values.sidMap&&!(u in e.sidIdMap)){var h;const p=t==null||(h=t.meta)===null||h===void 0?void 0:h.serialize;d.current=(e.fromSerialize&&p!=="ignore"&&(p==null?void 0:p.read)||e5)(e.values.sidMap[u])}else if(t.before&&!s){let p=0;const y=r||!t.noInit||i;mn(t.before,g=>{switch(g.type){case"map":{const w=g.from;if((w||g.fn)&&(w&&yo(e,w,r,i),y)){const b=w&&l[w.id].current;d.current=g.fn?g.fn(b):b}break}case"field":yo(e,g.from,r,i),p||(p=1,d.current=Array.isArray(d.current)?[...d.current]:{...d.current}),y&&(d.current[g.field]=l[l[g.from.id].id].current)}})}u&&(e.sidIdMap[u]=t.id),l[t.id]=d},t5=(e,t,r)=>{try{return t(lu(r),e.scope,r)}catch(i){console.error(i),e.fail=1,e.failReason=i}},cl=(e,t={})=>(ur(e)&&(cl(e.or,t),Pu(e,(r,i)=>{Dn(r)||i==="or"||i==="and"||(t[i]=r)}),cl(e.and,t)),t),Sw=(e,t)=>{Gh(e.next,t),Gh(Gu(e),t),Gh(Vu(e),t)},Tw=["on","reset","sample","split","merge","guard","forward"],du=(e,t,r,i,s)=>{let l;e.next.length=0,e.seq.length=0,e.scope=null;let u=Vu(e);const{stateRef:d,defaultShape:h,isRegion:p,op:y}=e.meta;if(d&&(d.before=[],e.meta.stateRef=null),h)for(const w in h)h[w]=null;const g=p?e:i;if(u.length>0){const w=Ph(Tw,y),b=!p&&!s,S=b&&r&&!w;for(;l=u.pop();){const T=Ph(l.next,e);Sw(l,e),p&&du(l,0,0,e,1),T||(l.family.triggers-=1),(t||S||b&&l.family.type==="crosslink"&&!w||s&&Ph(Tw,l.meta.op)&&(T&&l.next.length===0||!T&&l.family.triggers<=0))&&du(l,t,r&&l.meta.op!=="on",g,s)}}for(u=Gu(e);l=u.pop();)Sw(l,e),r&&l.family.type==="crosslink"&&du(l,t,l.meta.op!=="on",g,s)},Wc=e=>e.clear(),zu=(e,{deep:t}={})=>{let r=0;if(e.ownerSet&&e.ownerSet.delete(e),Ux(e)){r=1;const i=e.history;Wc(i.events),Wc(i.effects),Wc(i.stores),Wc(i.domains)}du(yn(e),!!t,r,null,0)},n5=e=>Hp(()=>zu(e)),ti=(e,t,r,i,s)=>$r({node:r,parent:e,child:t,scope:{fn:s},meta:{op:i},family:{owners:[e,t],links:t},regional:1}),Bx=(e,t)=>(St(qr(t),".watch argument should be a function"),n5($r({scope:{fn:t},node:[Pm({fn:Qu})],parent:e,meta:{op:"watch"},family:{owners:e},regional:1}))),r5=(e,t,r="event")=>{ol(e)&&ol(e).hooks[r](t)},Xx=(e,t)=>Rr(e,"unitTrace",t),Wu=e=>{const t=Error("unit trace");return Error.captureStackTrace&&Error.captureStackTrace(t,e),t.stack},Fx=(e,t,r,i)=>{const s=cl(r),l=e==="domain",u=XC(),{sid:d=null,named:h=null,domain:p=null,parent:y=p}=s,g=h||s.name||(l?"":u),w=UC(g,y),b={op:t.kind=e,name:t.shortName=g,sid:t.sid=VC(d),named:h,unitId:t.id=u,serialize:s.serialize,derived:s.derived,config:s,unitTrace:i};return t.targetable=!s.derived,t.parent=y,t.compositeName=w,t.defaultConfig=s,t.getType=()=>(sl(0,"getType","compositeName.fullName"),w.fullName),!l&&(t.subscribe=S=>(Hx(S),t.watch(qr(S)?S:T=>S.next&&S.next(T))),t[qC]=()=>t),b},Wh=(e,t,r,i)=>{let s;ur(r)&&(s=r,r=r.fn);const l=Ve({name:`${e.shortName} → *`,derived:1,and:s});return ti(e,l,i,t,r),l},fu="undefined is used to skip updates. To allow undefined as a value provide explicit { skipVoid: false } option",Px=(e,t,r,i,s)=>{const l=sr(t),u=zn({store:l,to:"a",priority:"read"});r===mo&&(u.data.softRead=1);const d=[u,Dr(i)];Vn("storeOnMap",l,d,Un(e)&&sr(e));const h=ti(e,t,d,r,s);return r!==mo&&Rr(h,"onTrigger",yn(e).id),h},a5=(e,t,r,i,s,l,u)=>{const d=si("combine",s),h=e?C=>[...C]:C=>({...C}),p=e?[]:{},y=h(p),g=vo(y),w=vo(1);g.type=e?"list":"shape",g.noInit=1,Vn("combineBase",g,w);const b=vn(y,{name:jC(r),derived:1,...u,and:s});Xx(b,i);const S=sr(b);S.noInit=1,Rr(b,"isCombine",1),Au(b,[$r({meta:{stateRef:g}})]);const T=Wa(g);T.order={priority:"barrier"};const M=zn({store:S,to:"b",priority:"read"});M.data.softRead=1;const _=[go((C,A,U)=>(U.scope&&!U.scope.reg[g.id]&&(U.c=1),C)),T,zn({store:w,to:"b"}),go((C,{key:A},U)=>{if(U.c||C!==U.a[A])return t&&U.b&&(U.a=h(U.a)),U.a[A]=C,1},1),zn({from:"a",target:g}),zn({from:"value",store:0,target:w}),zn({from:"value",store:1,target:w,priority:"barrier",batch:1}),Wa(g,1,1),l&&Dr(),M];if(Pu(r,(C,A)=>{if(!Un(C))return St(!xa(C)&&!Dn(C),`combine expects a store in a field ${A}`,d),void(y[A]=p[A]=C);p[A]=C.defaultState,y[A]=C.getState();const U=ti(C,b,_,"combine",l);U.scope.key=A;const D=sr(C);Ip(g,{type:"field",field:A,from:D}),Vn("combineField",D,U)}),b.defaultShape=r,Rr(b,"defaultShape",r),Ip(S,{type:mo,from:g,fn:l}),l){const C=l(y);!Dn(C)||u&&"skipVoid"in u||console.error(`${d}: ${fu}`),S.current=C,S.initial=C,b.defaultState=C}else b.defaultState=p;return b};$r({node:[Pm({fn:({fn:e,value:t})=>e(t)})],meta:{op:"fx",fx:"sidechain"}});const i5=["source","clock","target"],Gx=(e,t)=>e+`: ${t} should be defined`,o5=(e,t,r,i,s,l,u,d,h,p,y,g)=>{const w=si(e,d),b=!!s;St(!Dn(r)||!Dn(t),Gx(w,"either source or clock"));let S=0;Dn(r)?S=1:xa(r)||(r=Qn(r)),Dn(t)?t=r:(qp(t,w,"clock"),Array.isArray(t)&&(t=ti(t,[],[],e))),S&&(r=t),d||u?d&&u?d.name=u:!d&&u&&(d={name:u}):u=r.shortName;let T="none";i&&(xa(i)?T="unit":(St(qr(i),"`filter` should be function or unit"),T="fn")),s?(qp(s,w,"target"),QC(w,s)):T==="none"&&p&&Un(r)&&Un(t)?s=vn(l?l(Gs(sr(r)),Gs(sr(t))):Gs(sr(r)),{name:u,sid:g,or:d}):(s=Ve({name:u,derived:1,or:d}),Vn("sampleTarget",yn(s)));const M=vo();let _=[];const C=[];if(T==="unit"){const[D,P,G,ee]=kw(i,s,t,M,e);ee&&Rn(C,ee),G||_.push(...Zh(P)),_.push(...Zh(D))}const A=[];if(S)h&&Rn(A,Wa(M,1,1));else{const[D,P,G,ee]=kw(r,s,t,M,e);ee&&Rn(C,ee),G||A.push(...Zh(P)),Rn(A,Wa(D,1,h))}const U=ti(t,s,[Vn(),zn({from:"stack",target:M}),...A,..._,Wa(M),T==="fn"&&Dr((D,P,{a:G})=>i(D,G),1),l&&Dr(qx),Vn("sampleSourceUpward",b)],e,l);return Au(r,[U]),Au(U,C),Object.assign(U.meta,d,{joint:1,stateRef:M}),Xx(U,Wu(li)),s},Zh=e=>[Wa(e),go((t,r,{a:i})=>i,1)],kw=(e,t,r,i,s)=>{const l=Un(e),u=l?sr(e):vo(),d=vo(l);let h;return l||(h=$r({parent:e,node:[zn({from:"stack",target:u}),zn({from:"value",store:1,target:d})],family:{owners:[...new Set([e,t,r].flat())],links:t},meta:{op:s},regional:1})),Vn("sampleSource",d,u,i),[u,d,l,h]};var Kh={exports:{}},Jh={},ep={exports:{}},tp={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ew;function s5(){if(Ew)return tp;Ew=1;var e=ml();function t(g,w){return g===w&&(g!==0||1/g===1/w)||g!==g&&w!==w}var r=typeof Object.is=="function"?Object.is:t,i=e.useState,s=e.useEffect,l=e.useLayoutEffect,u=e.useDebugValue;function d(g,w){var b=w(),S=i({inst:{value:b,getSnapshot:w}}),T=S[0].inst,M=S[1];return l(function(){T.value=b,T.getSnapshot=w,h(T)&&M({inst:T})},[g,b,w]),s(function(){return h(T)&&M({inst:T}),g(function(){h(T)&&M({inst:T})})},[g]),u(b),b}function h(g){var w=g.getSnapshot;g=g.value;try{var b=w();return!r(g,b)}catch{return!0}}function p(g,w){return w()}var y=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?p:d;return tp.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:y,tp}var Cw;function Vx(){return Cw||(Cw=1,ep.exports=s5()),ep.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mw;function l5(){if(Mw)return Jh;Mw=1;var e=ml(),t=Vx();function r(p,y){return p===y&&(p!==0||1/p===1/y)||p!==p&&y!==y}var i=typeof Object.is=="function"?Object.is:r,s=t.useSyncExternalStore,l=e.useRef,u=e.useEffect,d=e.useMemo,h=e.useDebugValue;return Jh.useSyncExternalStoreWithSelector=function(p,y,g,w,b){var S=l(null);if(S.current===null){var T={hasValue:!1,value:null};S.current=T}else T=S.current;S=d(function(){function _(P){if(!C){if(C=!0,A=P,P=w(P),b!==void 0&&T.hasValue){var G=T.value;if(b(G,P))return U=G}return U=P}if(G=U,i(A,P))return G;var ee=w(P);return b!==void 0&&b(G,ee)?(A=P,G):(A=P,U=ee)}var C=!1,A,U,D=g===void 0?null:g;return[function(){return _(y())},D===null?void 0:function(){return _(D())}]},[y,g,w,b]);var M=s(p,S[0],S[1]);return u(function(){T.hasValue=!0,T.value=M},[M]),h(M),M},Jh}var Nw;function c5(){return Nw||(Nw=1,Kh.exports=l5()),Kh.exports}var u5=c5();const d5=pm(u5);var f5=Vx();const h5=pm(f5);function p5(e,t){const r=$s.unit(e);let i={};r?i={unit:e}:"@@unitShape"in e?typeof e["@@unitShape"]=="function"?i=e["@@unitShape"]():fo("expect @@unitShape to be a function"):i=e;const s=Array.isArray(i),l=Zt.useRef({stale:1,justSubscribed:0,scope:t}),[u,d,h,p,y]=Zt.useMemo(()=>{l.current.stale=1;const S=Array.isArray(i)?[]:{},T=[],M=[],_=[],C=[];for(const A in i){if(!{}.hasOwnProperty.call(i,A))continue;const U=i[A];$s.unit(U)||fo(`expect useUnit ${r?"argument":`value in key "${A}"`} to be a unit`),$s.event(U)||$s.effect(U)?(S[A]=t?$C(U,{scope:t}):U,_.push(A),C.push(U)):(S[A]=null,T.push(A),M.push(U))}return[S,T,M,_,C]},[l,t,...Object.keys(i),...Object.values(i)]),g=Zt.useRef({value:u,storeKeys:d,eventKeys:p,eventValues:y}),w=Zt.useCallback(S=>{const T=l.current;return T.justSubscribed=1,Rx({unit:h,fn:()=>{T.stale||(T.stale=1,S())},scope:t,batch:1})},[h,t,g,l]),b=Zt.useCallback(()=>{const S=g.current,T=l.current;let M,_=0;const C=S.value,A=S.storeKeys,U=S.eventKeys,D=S.eventValues,P=t!==T.scope;if(T.stale||T.justSubscribed||P){_=!T.justSubscribed||P,M=s?[...u]:{...u},A.length===d.length&&U.length===p.length||(_=1);for(let G=0;G<d.length;G++){const ee=Wx(h[G],t),ne=d[G];_||(_=A.includes(ne)?C[ne]!==ee:1),M[ne]=ee}for(let G=0;G<p.length;G++){const ee=y[G],ne=p[G];_||(_=U.includes(ne)?D[U.indexOf(ne)]!==ee:1)}}return _&&(S.value=M),S.storeKeys=d,S.eventKeys=p,S.eventValues=y,T.stale=0,T.justSubscribed=!_,T.scope=t,r?S.value.unit:S.value},[w,h,y,t,g,l]);return g5(w,b,b)}function m5([e,t],r){let i,s,l,u,d=Aw;t?(i=t,l=e,u=[]):{fn:i,store:l,keys:u,defaultValue:s,updateFilter:d=Aw}=e,$s.store(l)||fo("useStoreMap expects a store"),Array.isArray(u)||fo("useStoreMap expects an array as keys"),typeof i!="function"&&fo("useStoreMap expects a function");const h=Zt.useCallback(b=>Rx({unit:l,fn:b,scope:r}),[l,r]),p=Zt.useCallback(()=>Wx(l,r),[l,r]),y=Zt.useRef(),g=Zt.useRef(),w=Zt.useRef(u);return v5(h,p,p,b=>{if(y.current!==b||!((S,T)=>{if(!S||!T||S.length!==T.length)return 0;let M=1;for(let _=0;_<S.length;_++)if(S[_]!==T[_]){M=0;break}return M})(w.current,u)){let S=i(b,u);S===void 0&&s!==void 0&&(S=s),y.current=b,w.current=u,S!==void 0&&(g.current=S)}return g.current},(b,S)=>!d(S,b))}function Qx(e){const t=Zt.useContext(Zx);return e&&!t&&fo("No scope found, consider adding <Provider> to app root"),t}function st(e,t){return p5(e,Qx(void 0))}function Ow(e,t){return m5([e,t],Qx(e==null?void 0:e.forceScope))}const fo=e=>{throw Error(e)};typeof window<"u"?Zt.useLayoutEffect:Zt.useEffect;const{useSyncExternalStore:g5}=h5,{useSyncExternalStoreWithSelector:v5}=d5,Wx=(e,t)=>t?t.getState(e):e.getState(),Aw=(e,t)=>e!==t,Zx=Zt.createContext(null),{Provider:m6}=Zx;function hn(e){if(typeof e=="number")return(Math.abs(e*2654435761)>>>0).toString(16);if(typeof e=="boolean")return e?"1":"0";if(e===null)return"null";if(e===void 0)return"undefined";if(typeof e=="string"){let t=2166136261;for(let r=0;r<e.length;r++)t^=e.charCodeAt(r),t+=(t<<1)+(t<<4)+(t<<7)+(t<<8)+(t<<24),t=t>>>0;return t.toString(16)}if(Array.isArray(e)){let t=2166136261;for(let r=0;r<e.length;r++){t^=(r+1)*2654435761;const i=hn(e[r]);for(let s=0;s<i.length;s++)t^=i.charCodeAt(s),t*=16777619,t=t>>>0}return t.toString(16)}if(typeof e=="object"){let t=2166136261;const r=Object.keys(e).sort();for(let i=0;i<r.length;i++){const s=r[i],l=hn(s);t^=parseInt(l,16),t*=16777619,t=t>>>0;const u=hn(e[s]);t^=parseInt(u,16),t*=16777619,t=t>>>0}return t.toString(16)}return hn(String(e))}const ht={Remove:"remove",Replace:"replace",Add:"add"},Kx=Symbol.for("__MUTATIVE_PROXY_DRAFT__"),y5=Symbol("__MUTATIVE_RAW_RETURN_SYMBOL__"),hu=Symbol.iterator,gn={mutable:"mutable",immutable:"immutable"},Qm={};function Vs(e,t){return e instanceof Map?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function zw(e,t){if(t in e){let r=Reflect.getPrototypeOf(e);for(;r;){const i=Reflect.getOwnPropertyDescriptor(r,t);if(i)return i;r=Reflect.getPrototypeOf(r)}}}function Wm(e){return Object.getPrototypeOf(e)===Set.prototype}function Zm(e){return Object.getPrototypeOf(e)===Map.prototype}function pn(e){var t;return(t=e.copy)!==null&&t!==void 0?t:e.original}function ni(e){return!!Re(e)}function Re(e){return typeof e!="object"?null:e==null?void 0:e[Kx]}function Km(e){var t;const r=Re(e);return r?(t=r.copy)!==null&&t!==void 0?t:r.original:e}function Zn(e,t){if(!e||typeof e!="object")return!1;let r;return Object.getPrototypeOf(e)===Object.prototype||Array.isArray(e)||e instanceof Map||e instanceof Set||!!(t!=null&&t.mark)&&((r=t.mark(e,gn))===gn.immutable||typeof r=="function")}function Jx(e,t=[]){if(Object.hasOwnProperty.call(e,"key")){const r=e.parent.copy,i=Re(Hr(r,e.key));if(i!==null&&(i==null?void 0:i.original)!==e.original)return null;const s=e.parent.type===3,l=s?Array.from(e.parent.setMap.keys()).indexOf(e.key):e.key;if(!(s&&r.size>l||Vs(r,l)))return null;t.push(l)}if(e.parent)return Jx(e.parent,t);t.reverse();try{b5(e.copy,t)}catch{return null}return t}function ci(e){return Array.isArray(e)?1:e instanceof Map?2:e instanceof Set?3:0}function Hr(e,t){return ci(e)===2?e.get(t):e[t]}function yl(e,t,r){ci(e)===2?e.set(t,r):e[t]=r}function np(e,t){const r=Re(e);return(r?pn(r):e)[t]}function Lr(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Xp(e){if(e)for(;e.finalities.revoke.length>0;)e.finalities.revoke.pop()()}function Qa(e,t){return t?e:[""].concat(e).map(r=>{const i=`${r}`;return i.indexOf("/")===-1&&i.indexOf("~")===-1?i:i.replace(/~/g,"~0").replace(/\//g,"~1")}).join("/")}function b5(e,t){for(let r=0;r<t.length-1;r+=1){const i=t[r];if(e=Hr(ci(e)===3?Array.from(e):e,i),typeof e!="object")throw new Error(`Cannot resolve patch at '${t.join("/")}'.`)}return e}function w5(e){const t=Object.create(Object.getPrototypeOf(e));return Reflect.ownKeys(e).forEach(r=>{let i=Reflect.getOwnPropertyDescriptor(e,r);if(i.enumerable&&i.configurable&&i.writable){t[r]=e[r];return}i.writable||(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(i={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[r]}),Reflect.defineProperty(t,r,i)}),t}const x5=Object.prototype.propertyIsEnumerable;function e2(e,t){let r;if(Array.isArray(e))return Array.prototype.concat.call(e);if(e instanceof Set){if(!Wm(e)){const i=Object.getPrototypeOf(e).constructor;return new i(e.values())}return Set.prototype.difference?Set.prototype.difference.call(e,new Set):new Set(e.values())}else if(e instanceof Map){if(!Zm(e)){const i=Object.getPrototypeOf(e).constructor;return new i(e)}return new Map(e)}else if(t!=null&&t.mark&&(r=t.mark(e,gn),r!==void 0)&&r!==gn.mutable){if(r===gn.immutable)return w5(e);if(typeof r=="function"){if(t.enablePatches||t.enableAutoFreeze)throw new Error("You can't use mark and patches or auto freeze together.");return r()}throw new Error(`Unsupported mark result: ${r}`)}else if(typeof e=="object"&&Object.getPrototypeOf(e)===Object.prototype){const i={};return Object.keys(e).forEach(s=>{i[s]=e[s]}),Object.getOwnPropertySymbols(e).forEach(s=>{x5.call(e,s)&&(i[s]=e[s])}),i}else throw new Error("Please check mark() to ensure that it is a stable marker draftable function.")}function Xt(e){e.copy||(e.copy=e2(e.original,e.options))}function qs(e){if(!Zn(e))return Km(e);if(Array.isArray(e))return e.map(qs);if(e instanceof Map){const r=Array.from(e.entries()).map(([i,s])=>[i,qs(s)]);if(!Zm(e)){const i=Object.getPrototypeOf(e).constructor;return new i(r)}return new Map(r)}if(e instanceof Set){const r=Array.from(e).map(qs);if(!Wm(e)){const i=Object.getPrototypeOf(e).constructor;return new i(r)}return new Set(r)}const t=Object.create(Object.getPrototypeOf(e));for(const r in e)t[r]=qs(e[r]);return t}function pu(e){return ni(e)?qs(e):e}function lr(e){var t;e.assignedMap=(t=e.assignedMap)!==null&&t!==void 0?t:new Map,e.operated||(e.operated=!0,e.parent&&lr(e.parent))}function Rw(){throw new Error("Cannot modify frozen object")}function ro(e,t,r,i,s){{r=r??new WeakMap,i=i??[],s=s??[];const u=r.has(e)?r.get(e):e;if(i.length>0){const d=i.indexOf(u);if(u&&typeof u=="object"&&d!==-1)throw i[0]===u?new Error("Forbids circular reference"):new Error(`Forbids circular reference: ~/${s.slice(0,d).map((h,p)=>{if(typeof h=="symbol")return`[${h.toString()}]`;const y=i[p];return typeof h=="object"&&(y instanceof Map||y instanceof Set)?Array.from(y.keys()).indexOf(h):h}).join("/")}`);i.push(u),s.push(t)}else i.push(u)}if(Object.isFrozen(e)||ni(e)){i.pop(),s.pop();return}switch(ci(e)){case 2:for(const[d,h]of e)ro(d,d,r,i,s),ro(h,d,r,i,s);e.set=e.clear=e.delete=Rw;break;case 3:for(const d of e)ro(d,d,r,i,s);e.add=e.clear=e.delete=Rw;break;case 1:Object.freeze(e);let u=0;for(const d of e)ro(d,u,r,i,s),u+=1;break;default:Object.freeze(e),Object.keys(e).forEach(d=>{const h=e[d];ro(h,d,r,i,s)})}i.pop(),s.pop()}function Jm(e,t){const r=ci(e);if(r===0)Reflect.ownKeys(e).forEach(i=>{t(i,e[i],e)});else if(r===1){let i=0;for(const s of e)t(i,s,e),i+=1}else e.forEach((i,s)=>t(s,i,e))}function t2(e,t,r){if(ni(e)||!Zn(e,r)||t.has(e)||Object.isFrozen(e))return;const i=e instanceof Set,s=i?new Map:void 0;if(t.add(e),Jm(e,(l,u)=>{var d;if(ni(u)){const h=Re(u);Xt(h);const p=!((d=h.assignedMap)===null||d===void 0)&&d.size||h.operated?h.copy:h.original;yl(i?s:e,l,p)}else t2(u,t,r)}),s){const l=e,u=Array.from(l);l.clear(),u.forEach(d=>{l.add(s.has(d)?s.get(d):d)})}}function _5(e,t){const r=e.type===3?e.setMap:e.copy;e.finalities.revoke.length>1&&e.assignedMap.get(t)&&r&&t2(Hr(r,t),e.finalities.handledSet,e.options)}function Fp(e){e.type===3&&e.copy&&(e.copy.clear(),e.setMap.forEach(t=>{e.copy.add(Km(t))}))}function Pp(e,t,r,i){if(e.operated&&e.assignedMap&&e.assignedMap.size>0&&!e.finalized){if(r&&i){const l=Jx(e);l&&t(e,l,r,i)}e.finalized=!0}}function eg(e,t,r,i){const s=Re(r);s&&(s.callbacks||(s.callbacks=[]),s.callbacks.push((l,u)=>{var d;const h=e.type===3?e.setMap:e.copy;if(Lr(Hr(h,t),r)){let p=s.original;s.copy&&(p=s.copy),Fp(e),Pp(e,i,l,u),e.options.enableAutoFreeze&&(e.options.updatedValues=(d=e.options.updatedValues)!==null&&d!==void 0?d:new WeakMap,e.options.updatedValues.set(p,s.original)),yl(h,t,p)}}),e.options.enableAutoFreeze&&s.finalities!==e.finalities&&(e.options.enableAutoFreeze=!1)),Zn(r,e.options)&&e.finalities.draft.push(()=>{const l=e.type===3?e.setMap:e.copy;Lr(Hr(l,t),r)&&_5(e,t)})}function S5(e,t,r,i,s){let{original:l,assignedMap:u,options:d}=e,h=e.copy;h.length<l.length&&([l,h]=[h,l],[r,i]=[i,r]);for(let p=0;p<l.length;p+=1)if(u.get(p.toString())&&h[p]!==l[p]){const y=t.concat([p]),g=Qa(y,s);r.push({op:ht.Replace,path:g,value:pu(h[p])}),i.push({op:ht.Replace,path:g,value:pu(l[p])})}for(let p=l.length;p<h.length;p+=1){const y=t.concat([p]),g=Qa(y,s);r.push({op:ht.Add,path:g,value:pu(h[p])})}if(l.length<h.length){const{arrayLengthAssignment:p=!0}=d.enablePatches;if(p){const y=t.concat(["length"]),g=Qa(y,s);i.push({op:ht.Replace,path:g,value:l.length})}else for(let y=h.length;l.length<y;y-=1){const g=t.concat([y-1]),w=Qa(g,s);i.push({op:ht.Remove,path:w})}}}function T5({original:e,copy:t,assignedMap:r},i,s,l,u){r.forEach((d,h)=>{const p=Hr(e,h),y=pu(Hr(t,h)),g=d?Vs(e,h)?ht.Replace:ht.Add:ht.Remove;if(Lr(p,y)&&g===ht.Replace)return;const w=i.concat(h),b=Qa(w,u);s.push(g===ht.Remove?{op:g,path:b}:{op:g,path:b,value:y}),l.push(g===ht.Add?{op:ht.Remove,path:b}:g===ht.Remove?{op:ht.Add,path:b,value:p}:{op:ht.Replace,path:b,value:p})})}function k5({original:e,copy:t},r,i,s,l){let u=0;e.forEach(d=>{if(!t.has(d)){const h=r.concat([u]),p=Qa(h,l);i.push({op:ht.Remove,path:p,value:d}),s.unshift({op:ht.Add,path:p,value:d})}u+=1}),u=0,t.forEach(d=>{if(!e.has(d)){const h=r.concat([u]),p=Qa(h,l);i.push({op:ht.Add,path:p,value:d}),s.unshift({op:ht.Remove,path:p,value:d})}u+=1})}function ul(e,t,r,i){const{pathAsArray:s=!0}=e.options.enablePatches;switch(e.type){case 0:case 2:return T5(e,t,r,i,s);case 1:return S5(e,t,r,i,s);case 3:return k5(e,t,r,i,s)}}const Ru=(e,t,r=!1)=>{if(typeof e=="object"&&e!==null&&(!Zn(e,t)||r))throw new Error("Strict mode: Mutable data cannot be accessed directly, please use 'unsafe(callback)' wrap.")},Gp={get size(){return pn(Re(this)).size},has(e){return pn(Re(this)).has(e)},set(e,t){const r=Re(this),i=pn(r);return(!i.has(e)||!Lr(i.get(e),t))&&(Xt(r),lr(r),r.assignedMap.set(e,!0),r.copy.set(e,t),eg(r,e,t,ul)),this},delete(e){if(!this.has(e))return!1;const t=Re(this);return Xt(t),lr(t),t.original.has(e)?t.assignedMap.set(e,!1):t.assignedMap.delete(e),t.copy.delete(e),!0},clear(){const e=Re(this);if(this.size){Xt(e),lr(e),e.assignedMap=new Map;for(const[t]of e.original)e.assignedMap.set(t,!1);e.copy.clear()}},forEach(e,t){const r=Re(this);pn(r).forEach((i,s)=>{e.call(t,this.get(s),s,this)})},get(e){var t,r;const i=Re(this),s=pn(i).get(e),l=((r=(t=i.options).mark)===null||r===void 0?void 0:r.call(t,s,gn))===gn.mutable;if(i.options.strict&&Ru(s,i.options,l),l||i.finalized||!Zn(s,i.options)||s!==i.original.get(e))return s;const u=Qm.createDraft({original:s,parentDraft:i,key:e,finalities:i.finalities,options:i.options});return Xt(i),i.copy.set(e,u),u},keys(){return pn(Re(this)).keys()},values(){const e=this.keys();return{[hu]:()=>this.values(),next:()=>{const t=e.next();return t.done?t:{done:!1,value:this.get(t.value)}}}},entries(){const e=this.keys();return{[hu]:()=>this.entries(),next:()=>{const t=e.next();if(t.done)return t;const r=this.get(t.value);return{done:!1,value:[t.value,r]}}}},[hu](){return this.entries()}},E5=Reflect.ownKeys(Gp),Dw=(e,t,{isValuesIterator:r})=>()=>{var i,s;const l=t.next();if(l.done)return l;const u=l.value;let d=e.setMap.get(u);const h=Re(d),p=((s=(i=e.options).mark)===null||s===void 0?void 0:s.call(i,d,gn))===gn.mutable;if(e.options.strict&&Ru(u,e.options,p),!p&&!h&&Zn(u,e.options)&&!e.finalized&&e.original.has(u)){const y=Qm.createDraft({original:u,parentDraft:e,key:u,finalities:e.finalities,options:e.options});e.setMap.set(u,y),d=y}else h&&(d=h.proxy);return{done:!1,value:r?d:[d,d]}},Du={get size(){return Re(this).setMap.size},has(e){const t=Re(this);if(t.setMap.has(e))return!0;Xt(t);const r=Re(e);return!!(r&&t.setMap.has(r.original))},add(e){const t=Re(this);return this.has(e)||(Xt(t),lr(t),t.assignedMap.set(e,!0),t.setMap.set(e,e),eg(t,e,e,ul)),this},delete(e){if(!this.has(e))return!1;const t=Re(this);Xt(t),lr(t);const r=Re(e);return r&&t.setMap.has(r.original)?(t.assignedMap.set(r.original,!1),t.setMap.delete(r.original)):(!r&&t.setMap.has(e)?t.assignedMap.set(e,!1):t.assignedMap.delete(e),t.setMap.delete(e))},clear(){if(!this.size)return;const e=Re(this);Xt(e),lr(e);for(const t of e.original)e.assignedMap.set(t,!1);e.setMap.clear()},values(){const e=Re(this);Xt(e);const t=e.setMap.keys();return{[Symbol.iterator]:()=>this.values(),next:Dw(e,t,{isValuesIterator:!0})}},entries(){const e=Re(this);Xt(e);const t=e.setMap.keys();return{[Symbol.iterator]:()=>this.entries(),next:Dw(e,t,{isValuesIterator:!1})}},keys(){return this.values()},[hu](){return this.values()},forEach(e,t){const r=this.values();let i=r.next();for(;!i.done;)e.call(t,i.value,i.value,this),i=r.next()}};Set.prototype.difference&&Object.assign(Du,{intersection(e){return Set.prototype.intersection.call(new Set(this.values()),e)},union(e){return Set.prototype.union.call(new Set(this.values()),e)},difference(e){return Set.prototype.difference.call(new Set(this.values()),e)},symmetricDifference(e){return Set.prototype.symmetricDifference.call(new Set(this.values()),e)},isSubsetOf(e){return Set.prototype.isSubsetOf.call(new Set(this.values()),e)},isSupersetOf(e){return Set.prototype.isSupersetOf.call(new Set(this.values()),e)},isDisjointFrom(e){return Set.prototype.isDisjointFrom.call(new Set(this.values()),e)}});const C5=Reflect.ownKeys(Du),n2=new WeakSet,r2={get(e,t,r){var i,s;const l=(i=e.copy)===null||i===void 0?void 0:i[t];if(l&&n2.has(l))return l;if(t===Kx)return e;let u;if(e.options.mark){const p=t==="size"&&(e.original instanceof Map||e.original instanceof Set)?Reflect.get(e.original,t):Reflect.get(e.original,t,r);if(u=e.options.mark(p,gn),u===gn.mutable)return e.options.strict&&Ru(p,e.options,!0),p}const d=pn(e);if(d instanceof Map&&E5.includes(t)){if(t==="size")return Object.getOwnPropertyDescriptor(Gp,"size").get.call(e.proxy);const p=Gp[t];if(p)return p.bind(e.proxy)}if(d instanceof Set&&C5.includes(t)){if(t==="size")return Object.getOwnPropertyDescriptor(Du,"size").get.call(e.proxy);const p=Du[t];if(p)return p.bind(e.proxy)}if(!Vs(d,t)){const p=zw(d,t);return p?"value"in p?p.value:(s=p.get)===null||s===void 0?void 0:s.call(e.proxy):void 0}const h=d[t];if(e.options.strict&&Ru(h,e.options),e.finalized||!Zn(h,e.options))return h;if(h===np(e.original,t)){if(Xt(e),e.copy[t]=tg({original:e.original[t],parentDraft:e,key:e.type===1?Number(t):t,finalities:e.finalities,options:e.options}),typeof u=="function"){const p=Re(e.copy[t]);return Xt(p),lr(p),p.copy}return e.copy[t]}return h},set(e,t,r){var i;if(e.type===3||e.type===2)throw new Error("Map/Set draft does not support any property assignment.");let s;if(e.type===1&&t!=="length"&&!(Number.isInteger(s=Number(t))&&s>=0&&(t===0||s===0||String(s)===String(t))))throw new Error("Only supports setting array indices and the 'length' property.");const l=zw(pn(e),t);if(l!=null&&l.set)return l.set.call(e.proxy,r),!0;const u=np(pn(e),t),d=Re(u);return d&&Lr(d.original,r)?(e.copy[t]=r,e.assignedMap=(i=e.assignedMap)!==null&&i!==void 0?i:new Map,e.assignedMap.set(t,!1),!0):(Lr(r,u)&&(r!==void 0||Vs(e.original,t))||(Xt(e),lr(e),Vs(e.original,t)&&Lr(r,e.original[t])?e.assignedMap.delete(t):e.assignedMap.set(t,!0),e.copy[t]=r,eg(e,t,r,ul)),!0)},has(e,t){return t in pn(e)},ownKeys(e){return Reflect.ownKeys(pn(e))},getOwnPropertyDescriptor(e,t){const r=pn(e),i=Reflect.getOwnPropertyDescriptor(r,t);return i&&{writable:!0,configurable:e.type!==1||t!=="length",enumerable:i.enumerable,value:r[t]}},getPrototypeOf(e){return Reflect.getPrototypeOf(e.original)},setPrototypeOf(){throw new Error("Cannot call 'setPrototypeOf()' on drafts")},defineProperty(){throw new Error("Cannot call 'defineProperty()' on drafts")},deleteProperty(e,t){var r;return e.type===1?r2.set.call(this,e,t,void 0,e.proxy):(np(e.original,t)!==void 0||t in e.original?(Xt(e),lr(e),e.assignedMap.set(t,!1)):(e.assignedMap=(r=e.assignedMap)!==null&&r!==void 0?r:new Map,e.assignedMap.delete(t)),e.copy&&delete e.copy[t],!0)}};function tg(e){const{original:t,parentDraft:r,key:i,finalities:s,options:l}=e,u=ci(t),d={type:u,finalized:!1,parent:r,original:t,copy:null,proxy:null,finalities:s,options:l,setMap:u===3?new Map(t.entries()):void 0};(i||"key"in e)&&(d.key=i);const{proxy:h,revoke:p}=Proxy.revocable(u===1?Object.assign([],d):d,r2);if(s.revoke.push(p),n2.add(h),d.proxy=h,r){const y=r;y.finalities.draft.push((g,w)=>{var b,S;const T=Re(h);let M=y.type===3?y.setMap:y.copy;const _=Hr(M,i),C=Re(_);if(C){let A=C.original;C.operated&&(A=Km(_)),Fp(C),Pp(C,ul,g,w),y.options.enableAutoFreeze&&(y.options.updatedValues=(b=y.options.updatedValues)!==null&&b!==void 0?b:new WeakMap,y.options.updatedValues.set(A,C.original)),yl(M,i,A)}(S=T.callbacks)===null||S===void 0||S.forEach(A=>{A(g,w)})})}else{const y=Re(h);y.finalities.draft.push((g,w)=>{Fp(y),Pp(y,ul,g,w)})}return h}Qm.createDraft=tg;function M5(e,t,r,i,s){var l;const u=Re(e),d=(l=u==null?void 0:u.original)!==null&&l!==void 0?l:e,h=!!t.length;if(u!=null&&u.operated)for(;u.finalities.draft.length>0;)u.finalities.draft.pop()(r,i);const p=h?t[0]:u?u.operated?u.copy:u.original:e;return u&&Xp(u),s&&ro(p,p,u==null?void 0:u.options.updatedValues),[p,r&&h?[{op:ht.Replace,path:[],value:t[0]}]:r,i&&h?[{op:ht.Replace,path:[],value:d}]:i]}function N5(e,t){var r;const i={draft:[],revoke:[],handledSet:new WeakSet};let s,l;t.enablePatches&&(s=[],l=[]);const d=((r=t.mark)===null||r===void 0?void 0:r.call(t,e,gn))===gn.mutable||!Zn(e,t)?e:tg({original:e,parentDraft:null,finalities:i,options:t});return[d,(h=[])=>{const[p,y,g]=M5(d,h,s,l,t.enableAutoFreeze);return t.enablePatches?[p,y,g]:p}]}function Vp(e){const{rootDraft:t,value:r,useRawReturn:i=!1,isRoot:s=!0}=e;Jm(r,(l,u,d)=>{const h=Re(u);if(h&&t&&h.finalities===t.finalities){e.isContainDraft=!0;const p=h.original;if(d instanceof Set){const y=Array.from(d);d.clear(),y.forEach(g=>d.add(l===g?p:g))}else yl(d,l,p)}else typeof u=="object"&&u!==null&&(e.value=u,e.isRoot=!1,Vp(e))}),s&&(e.isContainDraft||console.warn("The return value does not contain any draft, please use 'rawReturn()' to wrap the return value to improve performance."),i&&console.warn("The return value contains drafts, please don't use 'rawReturn()' to wrap the return value."))}function a2(e){var t;const r=Re(e);if(!Zn(e,r==null?void 0:r.options))return e;const i=ci(e);if(r&&!r.operated)return r.original;let s;function l(){s=i===2?Zm(e)?new Map(e):new(Object.getPrototypeOf(e)).constructor(e):i===3?Array.from(r.setMap.values()):e2(e,r==null?void 0:r.options)}if(r){r.finalized=!0;try{l()}finally{r.finalized=!1}}else s=e;if(Jm(s,(u,d)=>{if(r&&Lr(Hr(r.original,u),d))return;const h=a2(d);h!==d&&(s===e&&l(),yl(s,u,h))}),i===3){const u=(t=r==null?void 0:r.original)!==null&&t!==void 0?t:s;return Wm(u)?new Set(s):new(Object.getPrototypeOf(u)).constructor(s)}return s}function jw(e){if(!ni(e))throw new Error(`current() is only used for Draft, parameter: ${e}`);return a2(e)}const O5=e=>function t(r,i,s){var l,u,d;if(typeof r=="function"&&typeof i!="function")return function(D,...P){return t(D,G=>r.call(this,G,...P),i)};const h=r,p=i;let y=s;if(typeof i!="function"&&(y=i),y!==void 0&&Object.prototype.toString.call(y)!=="[object Object]")throw new Error(`Invalid options: ${y}, 'options' should be an object.`);y=Object.assign(Object.assign({},e),y);const g=ni(h)?jw(h):h,w=Array.isArray(y.mark)?(D,P)=>{for(const G of y.mark){if(typeof G!="function")throw new Error(`Invalid mark: ${G}, 'mark' should be a function.`);const ee=G(D,P);if(ee)return ee}}:y.mark,b=(l=y.enablePatches)!==null&&l!==void 0?l:!1,S=(u=y.strict)!==null&&u!==void 0?u:!1,M={enableAutoFreeze:(d=y.enableAutoFreeze)!==null&&d!==void 0?d:!1,mark:w,strict:S,enablePatches:b};if(!Zn(g,M)&&typeof g=="object"&&g!==null)throw new Error("Invalid base state: create() only supports plain objects, arrays, Set, Map or using mark() to mark the state as immutable.");const[_,C]=N5(g,M);if(typeof i!="function"){if(!Zn(g,M))throw new Error("Invalid base state: create() only supports plain objects, arrays, Set, Map or using mark() to mark the state as immutable.");return[_,C]}let A;try{A=p(_)}catch(D){throw Xp(Re(_)),D}const U=D=>{const P=Re(_);if(!ni(D)){if(D!==void 0&&!Lr(D,_)&&(P!=null&&P.operated))throw new Error("Either the value is returned as a new non-draft value, or only the draft is modified without returning any value.");const ee=D==null?void 0:D[y5];if(ee){const ne=ee[0];return M.strict&&typeof D=="object"&&D!==null&&Vp({rootDraft:P,value:D,useRawReturn:!0}),C([ne])}if(D!==void 0)return typeof D=="object"&&D!==null&&Vp({rootDraft:P,value:D}),C([D])}if(D===_||D===void 0)return C([]);const G=Re(D);if(M===G.options){if(G.operated)throw new Error("Cannot return a modified child draft.");return C([jw(D)])}return C([D])};return A instanceof Promise?A.then(U,D=>{throw Xp(Re(_)),D}):U(A)},Qp=O5();Object.prototype.constructor.toString();function i2(e,t){const r=Object.keys(e),i=Object.keys(t);return r.length===i.length&&Object.keys(e).every(s=>t.hasOwnProperty(s))}function Uw(e,t){return Object.keys(e).length===Object.keys(t).length&&Object.keys(e).every(r=>t.hasOwnProperty(r)&&e[r]===t[r])}function mu(e,t){return typeof e!="object"||typeof t!="object"||e===null||t===null?e===t:i2(e,t)?Object.keys(e).every(r=>mu(e[r],t[r])):!1}function ng(e){if(!Is(e))return e;const t={};for(const[r,i]of Object.entries(e))i!==void 0&&(t[r]=i);return t}function o2(e,t){if(!Is(e)||!Is(t))return t;const r=Object.assign({},e);for(const i of Object.keys(t)){if(t[i]===void 0)continue;if(t[i]===null){delete r[i];continue}const s=Is(e[i])&&Is(t[i]);r[i]=s?o2(e[i],t[i]):t[i]}return r}function Is(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function A5(e,t,r){if(!e||t.length===0)return;let i=e||{};for(let l=0;l<t.length-1;l++){const u=t[l];(!(u in i)||typeof i[u]!="object")&&(i[u]=typeof t[l+1]=="number"?[]:{}),i=i[u]}const s=t[t.length-1];Array.isArray(i)&&typeof s=="number"?i.splice(s,0,r):i[s]=r}function Lw(e,t,r){if(!e||t.length===0)return;let i=e||{};for(let s=0;s<t.length-1;s++){const l=t[s];(!(l in i)||typeof i[l]!="object")&&(i[l]=typeof t[s+1]=="number"?[]:{}),i=i[l]}i[t[t.length-1]]=r}function s2(e,t){if(!e||t.length===0)return;const[r,...i]=t;if(r in e){if(i.length===0){Array.isArray(e)?e.splice(r,1):delete e[r];return}s2(e[r],i),z5(e[r])&&delete e[r]}}function z5(e){return e&&Object.keys(e).length===0}function R5(e){return new Date(e)}function D5(e){return new Date(e+"Z")}function j5(e){return new Date(e+"T00:00:00Z")}function U5(e){const[t,r]=e.split(" ");return new Date(t+"T"+r+"Z")}function L5(e){const[t,r]=e.split(" ");return new Date(t+"T"+r+"Z")}function $5(e){return new Date(e)}function H5(e){const t=/^(\w{3}) (\w{3}) (\d{2}) (\d{4})$/;if(!e.match(t))throw new Error(`Unable to parse \`${e}\` as a date.`);const i=new Date(e+" UTC");return new Date(Date.UTC(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate(),0,0,0,0))}function q5(e){const t=/^(.+T.+)([+-])(\d{2})$/,r=e.match(t);if(r){const[,i,s,l]=r,u=`${i}${s}${l}:00`;return new Date(u)}return null}const I5=[L5,H5,$5,j5,D5,R5,q5,U5];function Y5(e,t){try{const r=e(t);return r instanceof Date&&!isNaN(r.getTime())?r:null}catch{return null}}function l2(e){for(const t of I5){const r=Y5(t,e);if(r)return r}return null}function B5(e){try{const t=JSON.parse(e);return typeof t=="string"?l2(t):null}catch{return null}}function Zu(e){if(e instanceof Date)return e;if(typeof e=="string"){const t=l2(e)||B5(e);if(!t)throw new Error(`Unable to parse \`${e}\` as a date.`);return t}else if(typeof e=="number")return new Date(e);throw new Error(`Invalid date value \`${e}\`. Expected a date, number, or string, got type ${typeof e}.`)}function X5(e){return e.cardinality==="one"}function rg(e){return e["value-type"]==="ref"}function ag(e){return e["value-type"]==="blob"}function bl(e,t){return e[t]}function Ku(e,t){return t.reduce((r,i)=>r&&r.get(i),e)}function Xn(e,t){if(t.length===0)throw new Error("path must have at least one element");if(t.length===1){e.delete(t[0]);return}const[r,...i]=t;e.has(r)&&Xn(e.get(r),i)}function Kt(e,t,r){if(t.length===0)throw new Error("path must have at least one element");if(t.length===1){e.set(t[0],r);return}const[i,...s]=t;let l=e.get(i);l||(l=new Map,e.set(i,l)),Kt(l,s,r)}function c2(e,t,r){const i=new Map,s=new Map,l=new Map;for(const u of t){let[d,h,p,y]=u;const g=bl(e,h);if(!g){console.warn("no such attr",d,e);continue}g["checked-data-type"]==="date"&&r&&(p=Zu(p),u[2]=p),rg(g)&&Kt(l,[p,h,d],u),Kt(i,[d,h,p],u),Kt(s,[h,d,p],u)}return{eav:i,aev:s,vae:l}}function u2(e){const t=new Map,r=new Map,i=new Map,s=new Map;for(const l of Object.values(e)){const u=l["forward-identity"],[d,h,p]=u,y=l["reverse-identity"];if(Kt(i,[h,p],l),ag(l)&&Kt(t,[h,p],l),l["primary?"]&&Kt(r,[h],l),y){const[g,w,b]=y;Kt(s,[w,b],l)}}return{blobAttrs:t,primaryKeys:r,forwardIdents:i,revIdents:s}}function F5(e){return{__type:e.__type,attrs:e.attrs,triples:Jt(e.eav,3),cardinalityInference:e.cardinalityInference,linkIndex:e.linkIndex,useDateObjects:e.useDateObjects}}function P5(e){return Wp(e.attrs,e.triples,e.cardinalityInference,e.linkIndex,e.useDateObjects)}function ig(e){e.attrIndexes=u2(e.attrs)}function Wp(e,t,r,i,s){const l=c2(e,t,s);return l.useDateObjects=s,l.attrs=e,l.attrIndexes=u2(e),l.cardinalityInference=r,l.linkIndex=i,l.__type="store",l}function wl(e,t){var r,i;let s;if(Array.isArray(t[0])){const[u,d]=t[0],h=e.aev.get(u);if(!h)return null;s=(r=Jt(h,2).find(y=>y[2]===d))===null||r===void 0?void 0:r[0]}else s=t[0];if(!s)return null;const l=t[2];if(Array.isArray(l)&&l.length===2&&e.aev.get(l[0])){const[u,d]=l,h=e.aev.get(u);if(!h)return null;const y=(i=Jt(h,2).find(T=>T[2]===d))===null||i===void 0?void 0:i[0];if(!y)return null;const[g,w,b,...S]=t;return[s,w,y,...S]}else{const[u,...d]=t;return[s,...d]}}function G5(e,t){const r=wl(e,t);if(!r)return;const[i,s,l]=r,u=bl(e.attrs,s);u&&(Xn(e.eav,[i,s,l]),Xn(e.aev,[s,i,l]),rg(u)&&Xn(e.vae,[l,s,i]))}let V5=0;function d2(e,t,r){const[i,s,l]=r;let u;const d=Ku(e.ea,[i,s,l]);return d&&(u=d[3]),u||Date.now()*10+V5++}function Q5(e,t){var r;const i=wl(e,t);if(!i)return;let[s,l,u]=i;const d=bl(e.attrs,l);if(!d)return;d["checked-data-type"]==="date"&&e.useDateObjects&&(u=Zu(u));const h=Ku(e.eav,[s,l,u]),p=(r=h==null?void 0:h[3])!==null&&r!==void 0?r:d2(e,d,i),y=[s,l,u,p];X5(d)?(Kt(e.eav,[s,l],new Map([[u,y]])),Kt(e.aev,[l,s],new Map([[u,y]]))):(Kt(e.eav,[s,l,u],y),Kt(e.aev,[l,s,u],y)),rg(d)&&Kt(e.vae,[u,l,s],y)}function W5(e,t){var r;const i=wl(e,t);if(!i)return;const[s,l,u]=i,d=bl(e.attrs,l);if(!d)return;if(!ag(d))throw new Error("merge operation is not supported for links");const h=Ku(e.eav,[s,l]);if(!h)return;const p=(r=h.values().next())===null||r===void 0?void 0:r.value;if(!p)return;const y=p[2],g=o2(y,u),w=[s,l,g,d2(e,d,p)];Kt(e.eav,[s,l],new Map([[g,w]]))}function Zp(e,t){var r,i;const[s,l]=t,u=wl(e,[s]);if(!u)return;const[d]=u,h=e.eav.get(d);if(h){for(const y of h.keys()){const g=e.attrs[y];g&&g["on-delete-reverse"]==="cascade"&&Jt(h.get(y),1).forEach(([w,b,S])=>{var T;return Zp(e,[S,(T=g["reverse-identity"])===null||T===void 0?void 0:T[1]])}),(!l||!g||((r=g["forward-identity"])===null||r===void 0?void 0:r[1])===l)&&(Xn(e.aev,[y,d]),Xn(e.eav,[d,y]))}h.size===0&&Xn(e.eav,[d])}const p=e.vae.get(d)&&Jt(e.vae.get(d),2);p&&p.forEach(y=>{var g,w,b;const[S,T,M]=y,_=e.attrs[T];(!l||!_||((g=_["reverse-identity"])===null||g===void 0?void 0:g[1])===l)&&(Xn(e.eav,[S,T,M]),Xn(e.aev,[T,S,M]),Xn(e.vae,[M,T,S])),_&&_["on-delete"]==="cascade"&&((w=_["reverse-identity"])===null||w===void 0?void 0:w[1])===l&&Zp(e,[S,(b=_["forward-identity"])===null||b===void 0?void 0:b[1]])}),((i=e.vae.get(d))===null||i===void 0?void 0:i.size)===0&&Xn(e.vae,[d])}function f2(e,t){const r=c2(e.attrs,t,e.useDateObjects);Object.keys(r).forEach(i=>{e[i]=r[i]})}function Z5(e,[t]){e.attrs[t.id]=t,ig(e)}function h2(e){return Jt(e.eav,3)}function K5(e,[t]){if(!e.attrs[t])return;const r=h2(e).filter(([i,s])=>s!==t);delete e.attrs[t],ig(e),f2(e,r)}function J5(e,[t]){const r=e.attrs[t.id];r&&(e.attrs[t.id]=Object.assign(Object.assign({},r),t),ig(e),f2(e,h2(e)))}function eM(e,t){const[r,...i]=t;switch(r){case"add-triple":Q5(e,i);break;case"deep-merge-triple":W5(e,i);break;case"retract-triple":G5(e,i);break;case"delete-entity":Zp(e,i);break;case"add-attr":Z5(e,i);break;case"delete-attr":K5(e,i);break;case"update-attr":J5(e,i);break;case"rule-params":break;default:throw new Error(`unhandled transaction action: ${r}`)}}function Jt(e,t,r=[]){if(!e||t===0)return r;if(t===1){for(const i of e.values())r.push(i);return r}for(const i of e.values())Jt(i,t-1,r);return r}function Zc(e,t,r){var i,s;const l=[];if(r!=null&&r.hasOwnProperty("$not")){for(const d of t.keys())r.$not!==d&&l.push(t.get(d));return l}if(r!=null&&r.hasOwnProperty("$isNull")){const{attrId:d,isNull:h,reverse:p}=r.$isNull;if(p)for(const y of t.keys()){const g=e.vae.get(y),w=!g||((i=g.get(d))===null||i===void 0?void 0:i.get(null))||!g.get(d);(h?w:!w)&&l.push(t.get(y))}else{const y=e.aev.get(d);for(const g of t.keys()){const w=!y||((s=y.get(g))===null||s===void 0?void 0:s.get(null))||!y.get(g);(h?w:!w)&&l.push(t.get(g))}}return l}if(r!=null&&r.$comparator)return Jt(t,1).filter(r.$op);const u=r.in||r.$in||[r];for(const d of u){const h=t.get(d);h&&l.push(h)}return l}function tM(e,t,r){let i="";return e!==void 0&&(i+="e"),t!==void 0&&(i+="a"),r!==void 0&&(i+="v"),i}function nM(e,[t,r,i]){var s,l;switch(tM(t,r,i)){case"e":{const d=e.eav.get(t);return Jt(d,2)}case"ea":{const d=(s=e.eav.get(t))===null||s===void 0?void 0:s.get(r);return Jt(d,1)}case"eav":{const d=(l=e.eav.get(t))===null||l===void 0?void 0:l.get(r);return d?Zc(e,d,i):[]}case"ev":{const d=e.eav.get(t);if(!d)return[];const h=[];for(const p of d.values())h.push(...Zc(e,p,i));return h}case"a":{const d=e.aev.get(r);return Jt(d,2)}case"av":{const d=e.aev.get(r);if(!d)return[];const h=[];for(const p of d.values())h.push(...Zc(e,p,i));return h}case"v":{const d=[];for(const h of e.eav.values())for(const p of h.values())d.push(...Zc(e,p,i));return d}default:return Jt(e.eav,3)}}function rM(e,t,r){var i;const s={};for(const[l,u]of t.entries()){const d=(i=e.eav.get(r))===null||i===void 0?void 0:i.get(u.id),h=Jt(d,1);for(const p of h)s[l]=p[2]}return s}function bo(e,t,r){var i;return(i=e.attrIndexes.forwardIdents.get(t))===null||i===void 0?void 0:i.get(r)}function p2(e,t,r){var i;return(i=e.attrIndexes.revIdents.get(t))===null||i===void 0?void 0:i.get(r)}function aM(e,t){return e.attrIndexes.blobAttrs.get(t)}function iM(e,t){var r;const i=e.attrIndexes.primaryKeys.get(t);return i||((r=e.attrIndexes.forwardIdents.get(t))===null||r===void 0?void 0:r.get("id"))}function oM(e,t){const r=wl(e,t);if(!r)return;const[i,s,l]=r;if(bl(e.attrs,s))return Ku(e.eav,[i,s])}function sM(e,t){const r=t.filter(([i,...s])=>{var l;if(i!=="add-triple"&&i!=="deep-merge-triple")return!0;const u=(l=s[3])===null||l===void 0?void 0:l.mode;if(u!=="create"&&u!=="update")return!0;const d=oM(e,s);return!(u==="create"&&d||u==="update"&&!d)});return Qp(e,i=>{r.forEach(s=>{eM(i,s)})})}function lM(e){return typeof e=="string"&&e.startsWith("?")}function cM(e,t,r){if(r.hasOwnProperty(e)){const i=r[e];return m2(i,t,r)}return Object.assign(Object.assign({},r),{[e]:t})}function $w(e,t,r){return e===t?r:null}function uM(e){switch(typeof e){case"string":return e.startsWith("?")?cM:$w;default:return $w}}const dM=["in","$in","$not","$isNull","$comparator"];function fM(e){for(const t of dM)if(e.hasOwnProperty(t))return!0;return!1}function m2(e,t,r){return r?typeof e=="object"?fM(e)?r:null:uM(e)(e,t,r):null}function hM(e,t,r){return e.reduce((i,s,l)=>{const u=t[l];return m2(s,u,i)},r)}function pM(e,t,r){return vM(e,t,r).map(i=>hM(t,i,r)).filter(i=>i)}function mM(e,t,r){return t.or?t.or.patterns.flatMap(i=>Kp(e,i,r)):t.and?t.and.patterns.reduce((i,s)=>Kp(e,s,i),r):r.flatMap(i=>pM(e,t,i))}function Kp(e,t,r=[{}]){return t.reduce((i,s)=>mM(e,s,i),r)}function og(e,t){return Array.isArray(t)?t.map(r=>og(e,r)):lM(t)?e[t]:t}function gM(e,{find:t,where:r}){return Kp(e,r).map(s=>og(s,t))}function vM(e,t,r){return nM(e,og(r,t))}const Dt=[];for(let e=0;e<256;++e)Dt.push((e+256).toString(16).slice(1));function yM(e,t=0){return(Dt[e[t+0]]+Dt[e[t+1]]+Dt[e[t+2]]+Dt[e[t+3]]+"-"+Dt[e[t+4]]+Dt[e[t+5]]+"-"+Dt[e[t+6]]+Dt[e[t+7]]+"-"+Dt[e[t+8]]+Dt[e[t+9]]+"-"+Dt[e[t+10]]+Dt[e[t+11]]+Dt[e[t+12]]+Dt[e[t+13]]+Dt[e[t+14]]+Dt[e[t+15]]).toLowerCase()}let rp;const bM=new Uint8Array(16);function wM(){if(!rp){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");rp=crypto.getRandomValues.bind(crypto)}return rp(bM)}const xM=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Hw={randomUUID:xM};function _M(e,t,r){var s;if(Hw.randomUUID&&!e)return Hw.randomUUID();e=e||{};const i=e.random??((s=e.rng)==null?void 0:s.call(e))??wM();if(i.length<16)throw new Error("Random bytes length must be >= 16");return i[6]=i[6]&15|64,i[8]=i[8]&63|128,yM(i)}function qw(e){const t=e.replace(/-/g,""),r=[];for(let i=0;i<t.length;i+=2)r.push(parseInt(t.substring(i,i+2),16));return r}function SM(e,t){for(let r=0;r<e.length;r++){if(e[r]<t[r])return-1;if(e[r]>t[r])return 1}return 0}function TM(e,t){return SM(qw(e),qw(t))}function et(){return _M()}let kM=0;function Qs(e){return Ju(`_${e}`,kM++)}function Ju(e,t){return`?${e}-${t}`}class wo extends Error{constructor(t){super(t),this.name="AttrNotFoundError"}}function EM(e,t){const r=iM(e,t);if(!r)throw new wo(`Could not find id attr for ${t}`);return r}function Iw(e,t,r,i){return[CM(e,t,r,i)]}function CM(e,t,r,i){return[e(r,i),EM(t,r).id,e(r,i),e("time",i)]}function MM(e,t,r){return e.map(i=>i===t?r:i)}function g2(e,t,r,i,s){const l=bo(t,r,s),u=p2(t,r,s),d=l||u;if(!d)throw new wo(`Could not find attr for ${[r,s]}`);if(d["value-type"]!=="ref")throw new Error(`Attr ${d.id} is not a ref`);const[h,p]=d["forward-identity"],[y,g]=d["reverse-identity"],w=i+1,b=l?[e(p,i),d.id,e(g,w),Qs("time")]:[e(p,w),d.id,e(g,i),Qs("time")];return[l?g:p,w,b,d,!!l]}function Yw(e,t){if(typeof t!="string")return function(u){return!1};const i=t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/%/g,".*").replace(/_/g,"."),s=new RegExp(`^${i}$`,e?void 0:"i");return function(u){return typeof u!="string"?!1:s.test(u)}}function NM(e,t){if(typeof t!="object"||t.hasOwnProperty("$in")||t.hasOwnProperty("in"))return t;const r=e["checked-data-type"]==="date";if(t.hasOwnProperty("$gt"))return{$comparator:!0,$op:r?function(s){return new Date(s[2])>new Date(t.$gt)}:function(s){return s[2]>t.$gt}};if(t.hasOwnProperty("$gte"))return{$comparator:!0,$op:r?function(s){return new Date(s[2])>=new Date(t.$gte)}:function(s){return s[2]>=t.$gte}};if(t.hasOwnProperty("$lt"))return{$comparator:!0,$op:r?function(s){return new Date(s[2])<new Date(t.$lt)}:function(s){return s[2]<t.$lt}};if(t.hasOwnProperty("$lte"))return{$comparator:!0,$op:r?function(s){return new Date(s[2])<=new Date(t.$lte)}:function(s){return s[2]<=t.$lte}};if(t.hasOwnProperty("$like")){const i=Yw(!0,t.$like);return{$comparator:!0,$op:function(l){return i(l[2])}}}if(t.hasOwnProperty("$ilike")){const i=Yw(!1,t.$ilike);return{$comparator:!0,$op:function(l){return i(l[2])}}}return t}function OM(e,t,r,i,s,l){const u=bo(t,r,s),d=p2(t,r,s),h=u||d;if(!h)throw new wo(`No attr for etype = ${r} label = ${s}`);if(l!=null&&l.hasOwnProperty("$isNull")){const p=bo(t,r,"id");if(!p)throw new wo(`No attr for etype = ${r} label = id`);return[e(r,i),p.id,{$isNull:{attrId:h.id,isNull:l.$isNull,reverse:!u}},Qs("time")]}return u?[e(r,i),h.id,NM(h,l),Qs("time")]:[l,h.id,e(r,i),Qs("time")]}function AM(e,t,r,i,s){const[l,u,d]=s.reduce((h,p)=>{const[y,g,w]=h,[b,S,T]=g2(e,t,y,g,p);return[b,S,[...w,T]]},[r,i,[]]);return[l,u,d]}function Jp(e,t,r,i,s,l){const u=s.slice(0,s.length-1),d=s[s.length-1],[h,p,y]=AM(e,t,r,i,u),g=OM(e,t,h,p,d,l);return y.concat([g])}function zM(e,t){return t?[t].concat(e):e}function RM([e,t]){return e==="or"&&Array.isArray(t)}function DM([e,t]){return e==="and"&&Array.isArray(t)}function jM(e,t,r){return(i,s)=>{const l=e(i,s);return t==l?l:`${l}-${r}`}}function Bw(e,t,r,i,s,l){const u=e(i,s),d=l.map((h,p)=>{const y=jM(e,u,p);return v2(y,r,i,s,h)});return{[t]:{patterns:d,joinSym:u}}}function UM(e){const t=[];for(let r=1;r<=e.length;r++)t.push(e.slice(0,r));return t}function Xw(e,t,r,i,s){return UM(s).map(l=>Jp(e,t,r,i,l,{$isNull:!0}))}function v2(e,t,r,i,s){return Object.entries(s).flatMap(([l,u])=>{if(RM([l,u]))return Bw(e,"or",t,r,i,u);if(DM([l,u]))return Bw(e,"and",t,r,i,u);if(l==="$entityIdStartsWith")return[];const d=l.split(".");if(u!=null&&u.hasOwnProperty("$not")){const h=Jp(e,t,r,i,d,u),p=Xw(e,t,r,i,d);return[{or:{patterns:[h,...p],joinSym:e(r,i)}}]}return u!=null&&u.hasOwnProperty("$isNull")&&u.$isNull===!0&&d.length>1?[{or:{patterns:Xw(e,t,r,i,d),joinSym:e(r,i)}}]:Jp(e,t,r,i,d,u)})}function LM(e,t,r,i){const s=Ju;return i?v2(s,e,t,r,i).concat(Iw(s,e,t,r)):Iw(s,e,t,r)}function $M(e,t,r){return[e(t,r),e("time",r)]}function HM(e,t,r,i,s,l){const[u,d,h,p,y]=g2(e,t,r,i,s),g=MM(h,e(r,i),l);return[u,d,g,p,y]}function qM(e,t,{etype:r,level:i,form:s},l){const u=Object.keys(s).filter(d=>d!=="$");return u.length?Object.entries(l).map(function([h,p]){return u.map(function(w){var b,S,T;const M=!!(t.cardinalityInference&&(!((T=(S=(b=t.linkIndex)===null||b===void 0?void 0:b[r])===null||S===void 0?void 0:S[w])===null||T===void 0)&&T.isSingular));try{const[_,C,A]=HM(e,t,r,i,w,h),U=y2(t,{etype:_,level:C,form:s[w],join:A}),D=M?U[0]:U;return{[w]:D}}catch(_){if(_ instanceof wo)return{[w]:M?void 0:[]};throw _}}).reduce(function(w,b){return Object.assign(Object.assign({},w),b)},p)}):Object.values(l)}function ju([e,t],[r,i]){return t===i||t==null&&i==null?TM(e,r):i==null?1:t==null?-1:t>i?1:-1}function em(e){return e==null?e:new Date(e).getTime()}function IM(e,t,r,i){var s;const[l,u,d,h]=e,p=r==="desc"?1:-1;if(((s=t["forward-identity"])===null||s===void 0?void 0:s[2])==="id")return ju(i,[l,h])===p;const[y,g]=i,w=t["checked-data-type"]==="date"?em(g):g,b=t["checked-data-type"]==="date"?em(d):d;return ju([y,w],[l,b])===p}function YM(e,t){const r=t[1];return e.attrs[r]}function BM(e,t,r){const i=Object.keys(r)[0];return bo(e,t,i)}function XM(e,t,r,i){if(r)return YM(e,r);if(i)return BM(e,t,i)}function FM(e,t,r){var i,s;if(!Array.isArray(r.fields))return aM(e,t);const l=new Map;for(const u of r.fields){const d=bo(e,t,u),h=(i=d==null?void 0:d["forward-identity"])===null||i===void 0?void 0:i[2];h&&ag(d)&&l.set(h,d)}if(!l.has("id")){const u=bo(e,t,"id"),d=(s=u==null?void 0:u["forward-identity"])===null||s===void 0?void 0:s[2];d&&l.set(d,u)}return l}function PM(e,t,r,i,s,l){var u;let d=gM(e,l);const h=i==null?void 0:i["start-cursor"],p=XM(e,t,h,s);if(p&&((u=p==null?void 0:p["forward-identity"])===null||u===void 0?void 0:u[2])!=="id"){const w=p["checked-data-type"]==="date",b=p.id;d=d.map(([S])=>{var T,M,_,C,A;let U=(A=(C=(_=(M=(T=e.eav.get(S))===null||T===void 0?void 0:T.get(b))===null||M===void 0?void 0:M.values())===null||_===void 0?void 0:_.next())===null||C===void 0?void 0:C.value)===null||A===void 0?void 0:A[2];return w&&(U=em(U)),[S,U]})}d.sort(r==="asc"?function(b,S){return ju(b,S)}:function(b,S){return ju(S,b)});let y={};const g=FM(e,t,l);for(const w of d){const[b]=w;if(y[b]||h&&p&&IM(h,p,r,w))continue;const S=rM(e,g,b);S&&(y[b]=S)}return y}function GM(e){var t;const r=(t=e.$)===null||t===void 0?void 0:t.order;return r&&r[Object.keys(r)[0]]||"asc"}function VM(e,{etype:t,level:r,form:i,join:s,pageInfo:l}){var u,d,h,p,y,g,w,b,S;const T=((u=i.$)===null||u===void 0?void 0:u.limit)||((d=i.$)===null||d===void 0?void 0:d.first)||((h=i.$)===null||h===void 0?void 0:h.last),M=(p=i.$)===null||p===void 0?void 0:p.offset,_=(y=i.$)===null||y===void 0?void 0:y.before,C=(g=i.$)===null||g===void 0?void 0:g.after,A=(w=i.$)===null||w===void 0?void 0:w.order,U=(b=i.$)===null||b===void 0?void 0:b.fields;if((M||_||C)&&(!l||!l["start-cursor"]))return[];const D=zM(LM(e,t,r,(S=i.$)===null||S===void 0?void 0:S.where),s),P=$M(Ju,t,r),G=PM(e,t,GM(i),l,A,{where:D,find:P,fields:U});if(T!=null){const ee=Object.entries(G);return ee.length<=T?G:Object.fromEntries(ee.slice(0,T))}return G}function QM(e,t){try{return VM(e,t)}catch(r){if(r instanceof wo)return{};throw r}}function y2(e,t){const r=QM(e,t);return qM(Ju,e,t,r)}function WM(e){const t={};for(const[r,i]of Object.entries(e))t[r]={startCursor:i["start-cursor"],endCursor:i["end-cursor"],hasNextPage:i["has-next-page?"],hasPreviousPage:i["has-previous-page?"]};return t}function ZM({store:e,pageInfo:t,aggregate:r},i){const l={data:Object.keys(i).reduce(function(d,h){return r!=null&&r[h]||h==="$$ruleParams"||(d[h]=y2(e,{etype:h,form:i[h],level:0,pageInfo:t==null?void 0:t[h]})),d},{})};return t&&(l.pageInfo=WM(t)),r&&(l.aggregate=r),l}function KM(){const t={__etype:1,__ops:1,create:1,update:1,link:1,unlink:1,delete:1,merge:1,ruleParams:1};return new Set(Object.keys(t))}const JM=KM();function tm(e,t,r){const i={__etype:e,__ops:r};return new Proxy(i,{get:(s,l)=>{if(l==="__ops")return r;if(l==="__etype")return e;if(JM.has(l))return(u,d)=>tm(e,t,[...r,d?[l,e,t,u,d]:[l,e,t,u]])}})}function nm(e){return e.startsWith("lookup__")}function b2(e){const[t,r,...i]=e.split("__");return[r,JSON.parse(i.join("__"))]}function eN(e){return new Proxy({__etype:e},{get(t,r){if(r==="__etype")return e;const i=r;return nm(i)?tm(e,b2(i),[]):tm(e,i,[])}})}function w2(){return new Proxy({},{get(e,t){return eN(t)}})}w2();function tN(e){return e.__ops}function nN(e,t){const{attrIdMap:r,refSwapAttrIds:i}=e,s=[];for(const u of t){const d=r[u];if(d)s.push(d);else if(Array.isArray(u)&&u.length==2&&r[u[0]]){const[h,p]=u;s.push([r[h],p])}else s.push(u)}const[l]=t;if((l==="add-triple"||l==="retract-triple")&&i.has(t[2])){const u=s[1];s[1]=s[3],s[3]=u}return s}function qt(e,t,r){return Object.values(e).find(i=>{const[s,l,u]=i["forward-identity"];return l===t&&u===r})}function Za(e,t,r){return Object.values(e).find(i=>{const s=i["reverse-identity"];if(!s)return!1;const[l,u,d]=s;return u===t&&d===r})}function rN(e){if(Array.isArray(e))return e;const t=Object.entries(e);if(t.length!==1)throw new Error("lookup must be an object with a single unique attr and value.");return t[0]}function rm(e,t,r){return r.indexOf(".")!==-1&&!qt(e,t,r)}function am(e){const[t,r,...i]=e.split(".");if(i.length>0||r!=="id")throw new Error(`${e} is not a valid lookup attribute.`);return t}function aN(e,t,r){if(!rm(e,t,r))return qt(e,t,r);const i=am(r),s=qt(e,t,i)||Za(e,t,i);if(s&&s["value-type"]!=="ref")throw new Error(`${r} does not reference a valid link attribute.`);return s}function im(e){return typeof e=="string"&&!nm(e)?null:typeof e=="string"&&nm(e)?b2(e):rN(e)}function en(e,t,r){const i=im(r);if(i===null)return r;const[s,l]=i,u=aN(e,t,s);if(!u||!u["unique?"])throw new Error(`${s} is not a unique attribute.`);return[u.id,l]}function x2(e,t,r,i){const s=en(e,t,r);return Array.isArray(s)?[["add-triple",s,qt(e,t,"id").id,s]].concat(i):i}function iN({attrs:e},[t,r,i]){const s=Object.entries(i).flatMap(([l,u])=>{const d=Array.isArray(u)?u:[u],h=qt(e,t,l),p=Za(e,t,l);return d.map(y=>h?["add-triple",en(e,t,r),h.id,en(e,h["reverse-identity"][1],y)]:["add-triple",en(e,p["forward-identity"][1],y),p.id,en(e,t,r)])});return x2(e,t,r,s)}function oN({attrs:e},[t,r,i]){const s=Object.entries(i).flatMap(([l,u])=>{const d=Array.isArray(u)?u:[u],h=qt(e,t,l),p=Za(e,t,l);return d.map(y=>h?["retract-triple",en(e,t,r),h.id,en(e,h["reverse-identity"][1],y)]:["retract-triple",en(e,p["forward-identity"][1],y),p.id,en(e,t,r)])});return x2(e,t,r,s)}function sN(e,t,r){if(Array.isArray(r)){const[i,s]=r;for(const l of e||[]){const u=l==null?void 0:l.aev.get(i);if(u){for(const[d,h,p]of Jt(u,2))if(p===s)return!0}}}else for(const i of e||[]){const s=i==null?void 0:i.eav.get(r);if(s){for(const l of s.keys())if(i.attrs[l]["forward-identity"][1]==t)return!0}}return!1}function _2({stores:e,attrs:t},[r,i,s,l]){return(l==null?void 0:l.upsert)===!1?{mode:"update"}:(l==null?void 0:l.upsert)===!0?null:sN(e,r,i)?{mode:"update"}:null}function lN(e,t){const{stores:r,attrs:i}=e,[s,l,u,d]=t,h=ng(u),p=en(i,s,l);return[["id",p]].concat(Object.entries(h)).map(([g,w])=>{const b=qt(i,s,g);return b["checked-data-type"]==="date"&&e.useDateObjects&&(w=Zu(w)),["add-triple",p,b.id,w,{mode:"create"}]})}function cN(e,t){const{stores:r,attrs:i}=e,[s,l,u,d]=t,h=ng(u),p=en(i,s,l),y=_2(e,[s,p,u,d]);return[["id",p]].concat(Object.entries(h)).map(([w,b])=>{const S=qt(i,s,w);return S["checked-data-type"]==="date"&&e.useDateObjects&&(b=Zu(b)),["add-triple",p,S.id,b,...y?[y]:[]]})}function uN({attrs:e},[t,r]){return[["delete-entity",en(e,t,r),t]]}function dN(e,t){const{stores:r,attrs:i}=e,[s,l,u,d]=t,h=ng(u),p=en(i,s,l),y=_2(e,[s,p,u,d]),g=Object.entries(h).map(([b,S])=>{const T=qt(i,s,b);return["deep-merge-triple",p,T.id,S,...y?[y]:[]]});return[["add-triple",p,qt(i,s,"id").id,p,...y?[y]:[]]].concat(g)}function fN({attrs:e},[t,r,i]){return[["rule-params",en(e,t,r),t,i]]}function hN(e){const[t,r,i,s,l]=e;if(!s)return e;const u=Object.assign({},s);return delete u.id,[t,r,i,u,...l?[l]:[]]}function pN(e,t){const[r,...i]=hN(t);switch(r){case"merge":return dN(e,i);case"create":return lN(e,i);case"update":return cN(e,i);case"link":return iN(e,i);case"unlink":return oN(e,i);case"delete":return uN(e,i);case"ruleParams":return fN(e,i);default:throw new Error(`unsupported action ${r}`)}}function mN(e){switch(e){case"string":case"date":case"boolean":case"number":return e;default:return}}function gN(e,t,r){var i,s;const l=(s=(i=e.entities[t])===null||i===void 0?void 0:i.attrs)===null||s===void 0?void 0:s[r];if(r==="id")return null;if(!l)throw new Error(`${t}.${r} does not exist in your schema`);const{unique:u,indexed:d}=l==null?void 0:l.config,h=mN(l==null?void 0:l.valueType);return{"index?":d,"unique?":u,"checked-data-type":h}}function ap(e,t,r,i){const s=e?gN(e,t,r):null,l=et(),d=[et(),t,r];return Object.assign(Object.assign({id:l,"forward-identity":d,"value-type":"blob",cardinality:"one","unique?":!1,"index?":!1,isUnsynced:!0},s||{}),i||{})}function vN(e,t,r){return Object.values(e.links).find(s=>s.forward.on===t&&s.forward.label===r||s.reverse.on===t&&s.reverse.label===r)}function yN(e,t,r){const i=vN(e,t,r);if(!i)throw new Error(`Couldn't find the link ${t}.${r} in your schema`);const{forward:s,reverse:l}=i;return{"forward-identity":[et(),s.on,s.label],"reverse-identity":[et(),l.on,l.label],cardinality:s.has==="one"?"one":"many","unique?":l.has==="one","on-delete":s.onDelete,"on-delete-reverse":l.onDelete}}function Fw(e,t,r,i){const s=e?yN(e,t,r):null,l=et(),u=[et(),t,r],d=[et(),r,t];return Object.assign(Object.assign({id:l,"forward-identity":u,"reverse-identity":d,"value-type":"ref",cardinality:"many","unique?":!1,"index?":!1,isUnsynced:!0},s||{}),i||{})}const bN=new Set(["create","update","merge","link","unlink"]),wN=new Set(["link","unlink"]),xN=new Set(["create","update","merge"]),_N=new Set(["link","unlink","create","update","merge","delete","ruleParams"]),om={"unique?":!0,"index?":!0},SN=Object.assign(Object.assign({},om),{cardinality:"one"});function TN(e){const t=[],[r,i,s,l]=e;if(!_N.has(r))return t;const u=im(s);if(u&&t.push({etype:i,lookupPair:u}),r==="link")for(const[d,h]of Object.entries(l)){const p=Array.isArray(h)?h:[h];for(const y of p){const g=im(y);g&&t.push({etype:i,lookupPair:g,linkLabel:d})}}return t}function kN({attrs:e,schema:t},r){var i,s;const[l,u,d]=[new Set,Object.assign({},e),[]];function h(g){u[g.id]=g,d.push(["add-attr",g]),l.add(g.id)}function p(g){g!=null&&g.isUnsynced&&!l.has(g.id)&&(d.push(["add-attr",g]),l.add(g.id))}function y(g,w){const b=qt(u,g,w),S=Za(u,g,w);p(b),p(S),!b&&!S&&h(Fw(t,g,w,SN))}for(const g of r)for(const{etype:w,lookupPair:b,linkLabel:S}of TN(g)){const T=b[0];if(S){y(w,S);const M=qt(u,w,S),_=Za(u,w,S);p(M),p(_);const C=((i=M==null?void 0:M["reverse-identity"])===null||i===void 0?void 0:i[1])||((s=_==null?void 0:_["forward-identity"])===null||s===void 0?void 0:s[1])||S;if(rm(u,C,T))y(C,am(T));else{const A=qt(u,C,T);A||h(ap(t,C,T,om)),p(A)}}else if(rm(u,w,T))y(w,am(T));else{const M=qt(u,w,T);M||h(ap(t,w,T,om)),p(M)}}for(const g of r){const[w,b,S,T]=g;if(bN.has(w)){const M=Object.keys(T);M.push("id");for(const _ of M){const C=qt(u,b,_);if(p(C),xN.has(w)&&(C||h(ap(t,b,_,_==="id"?{"unique?":!0}:null))),wN.has(w)){const A=Za(u,b,_);!C&&!A&&h(Fw(t,b,_)),p(A)}}}}return[u,d]}function EN(e,t){const i=(Array.isArray(t)?t:[t]).flatMap(h=>tN(h)),[s,l]=kN(e,i),u=Object.assign(Object.assign({},e),{attrs:s}),d=i.flatMap(h=>pN(u,h));return[...l,...d]}var Pw=function(e,t,r,i){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(y){try{p(i.next(y))}catch(g){u(g)}}function h(y){try{p(i.throw(y))}catch(g){u(g)}}function p(y){y.done?l(y.value):s(y.value).then(d,h)}p((i=i.apply(e,t||[])).next())})};class S2{constructor(t){this.dbName=t,this._storeName="kv",this._dbPromise=this._init()}_init(){return new Promise((t,r)=>{const i=indexedDB.open(this.dbName,1);i.onerror=s=>{r(s)},i.onsuccess=s=>{t(s.target.result)},i.onupgradeneeded=s=>{s.target.result.createObjectStore(this._storeName)}})}getItem(t){return Pw(this,void 0,void 0,function*(){const r=yield this._dbPromise;return new Promise((i,s)=>{const d=r.transaction([this._storeName],"readonly").objectStore(this._storeName).get(t);d.onerror=h=>{s(h)},d.onsuccess=h=>{d.result?i(d.result):i(null)}})})}setItem(t,r){return Pw(this,void 0,void 0,function*(){const i=yield this._dbPromise;return new Promise((s,l)=>{const h=i.transaction([this._storeName],"readwrite").objectStore(this._storeName).put(r,t);h.onerror=p=>{l(p)},h.onsuccess=p=>{s()}})})}}var CN=function(e,t,r,i){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(y){try{p(i.next(y))}catch(g){u(g)}}function h(y){try{p(i.throw(y))}catch(g){u(g)}}function p(y){y.done?l(y.value):s(y.value).then(d,h)}p((i=i.apply(e,t||[])).next())})};class T2{static getIsOnline(){return CN(this,void 0,void 0,function*(){return navigator.onLine})}static listen(t){const r=()=>{t(!0)},i=()=>{t(!1)};return addEventListener("online",r),addEventListener("offline",i),()=>{removeEventListener("online",r),removeEventListener("offline",i)}}}var MN=function(e,t,r,i){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(y){try{p(i.next(y))}catch(g){u(g)}}function h(y){try{p(i.throw(y))}catch(g){u(g)}}function p(y){y.done?l(y.value):s(y.value).then(d,h)}p((i=i.apply(e,t||[])).next())})};class sg extends Error{constructor(t){var r;const i=((r=t.body)===null||r===void 0?void 0:r.message)||`API Error (${t.status})`;super(i);const s=new.target.prototype;Object.setPrototypeOf&&Object.setPrototypeOf(this,s),Error.captureStackTrace&&Error.captureStackTrace(this,sg),this.name="InstantAPIError",this.status=t.status,this.body=t.body}get[Symbol.toStringTag](){return"InstantAPIError"}}function dr(e,t){return MN(this,void 0,void 0,function*(){const r=yield fetch(e,t),i=yield r.json();return r.status===200?Promise.resolve(i):Promise.reject(new sg({status:r.status,body:i}))})}var xl=function(e,t,r,i){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(y){try{p(i.next(y))}catch(g){u(g)}}function h(y){try{p(i.throw(y))}catch(g){u(g)}}function p(y){y.done?l(y.value):s(y.value).then(d,h)}p((i=i.apply(e,t||[])).next())})};function NN({apiURI:e,appId:t,email:r}){return dr(`${e}/runtime/auth/send_magic_code`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({"app-id":t,email:r})})}function ON(e){return xl(this,arguments,void 0,function*({apiURI:t,appId:r,email:i,code:s}){return yield dr(`${t}/runtime/auth/verify_magic_code`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({"app-id":r,email:i,code:s})})})}function AN(e){return xl(this,arguments,void 0,function*({apiURI:t,appId:r,refreshToken:i}){return yield dr(`${t}/runtime/auth/verify_refresh_token`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({"app-id":r,"refresh-token":i})})})}function Gw(e){return xl(this,arguments,void 0,function*({apiURI:t,appId:r,code:i,codeVerifier:s}){return yield dr(`${t}/runtime/oauth/token`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({app_id:r,code:i,code_verifier:s})})})}function zN(e){return xl(this,arguments,void 0,function*({apiURI:t,appId:r,nonce:i,idToken:s,clientName:l,refreshToken:u}){return yield dr(`${t}/runtime/oauth/id_token`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({app_id:r,nonce:i,id_token:s,client_name:l,refresh_token:u})})})}function RN(e){return xl(this,arguments,void 0,function*({apiURI:t,appId:r,refreshToken:i}){return yield dr(`${t}/runtime/signout`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({app_id:r,refresh_token:i})})})}var _l=function(e,t,r,i){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(y){try{p(i.next(y))}catch(g){u(g)}}function h(y){try{p(i.throw(y))}catch(g){u(g)}}function p(y){y.done?l(y.value):s(y.value).then(d,h)}p((i=i.apply(e,t||[])).next())})};function DN(e){return _l(this,arguments,void 0,function*({apiURI:t,appId:r,path:i,file:s,refreshToken:l,contentType:u,contentDisposition:d}){const h={app_id:r,path:i,authorization:`Bearer ${l}`,"content-type":u||s.type};return d&&(h["content-disposition"]=d),yield dr(`${t}/storage/upload`,{method:"PUT",headers:h,body:s})})}function jN(e){return _l(this,arguments,void 0,function*({apiURI:t,appId:r,path:i,refreshToken:s}){const{data:l}=yield dr(`${t}/storage/files?app_id=${r}&filename=${encodeURIComponent(i)}`,{method:"DELETE",headers:{"content-type":"application/json",authorization:`Bearer ${s}`}});return l})}function UN(e){return _l(this,arguments,void 0,function*({apiURI:t,appId:r,fileName:i,refreshToken:s,metadata:l={}}){const{data:u}=yield dr(`${t}/storage/signed-upload-url`,{method:"POST",headers:{"content-type":"application/json",authorization:`Bearer ${s}`},body:JSON.stringify({app_id:r,filename:i})});return u})}function LN(e,t){return _l(this,void 0,void 0,function*(){return(yield fetch(e,{method:"PUT",body:t,headers:{"Content-Type":t.type}})).ok})}function $N(e){return _l(this,arguments,void 0,function*({apiURI:t,appId:r,path:i,refreshToken:s}){const{data:l}=yield dr(`${t}/storage/signed-download-url?app_id=${r}&filename=${encodeURIComponent(i)}`,{method:"GET",headers:{"content-type":"application/json",authorization:`Bearer ${s}`}});return l})}let lg=!1,k2=!1,E2=!1;typeof window<"u"&&typeof window.localStorage<"u"&&(lg=!!window.localStorage.getItem("devBackend"),k2=!!window.localStorage.getItem("__instantLogging"),E2=!!window.localStorage.getItem("__devtoolLocalDash"));function Vw(e,t){if(!t)return e;const r={};return t.forEach(i=>{r[i]=e[i]}),r}function HN(e,t,r){var i,s;const l={peers:{}};if(t&&"user"in t?t.user:!0){const d=Vw((i=e.user)!==null&&i!==void 0?i:{},t==null?void 0:t.keys);l.user=Object.assign(Object.assign({},d),{peerId:r})}for(const d of Object.keys((s=e.peers)!==null&&s!==void 0?s:{})){const h=(t==null?void 0:t.peers)===void 0,p=Array.isArray(t==null?void 0:t.peers)&&(t==null?void 0:t.peers.includes(d));if(h||p){const y=Vw(e.peers[d],t==null?void 0:t.keys);l.peers[d]=Object.assign(Object.assign({},y),{peerId:d})}}return l}function qN(e,t){if(e.isLoading!==t.isLoading||e.error!==t.error||(e.user||t.user)&&(!e.user||!t.user||!Uw(e.user,t.user))||!i2(e.peers,t.peers))return!0;for(const i of Object.keys(e.peers))if(!Uw(e.peers[i],t.peers[i]))return!0;return!1}class Qw{constructor(){this.promise=new Promise((t,r)=>{this._resolve=t,this._reject=r})}resolve(t){this._resolve(t)}reject(t){this._reject(t)}}var Kc=function(e,t,r,i){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(y){try{p(i.next(y))}catch(g){u(g)}}function h(y){try{p(i.throw(y))}catch(g){u(g)}}function p(y){y.done?l(y.value):s(y.value).then(d,h)}p((i=i.apply(e,t||[])).next())})};class Ww{constructor(t,r,i,s,l=h=>JSON.stringify(h),u=h=>JSON.parse(h),d=100){this._subs=[],this._persister=t,this._key=r,this._onMerge=s,this._loadedCbs=[],this._isLoading=!0,this.currentValue=i,this.toJSON=l,this.fromJSON=u,this._saveThrottleMs=d,this._pendingSaveCbs=[],this._version=0,this._load()}_load(){return Kc(this,void 0,void 0,function*(){const t=this.fromJSON(yield this._persister.getItem(this._key));this._isLoading=!1,this._onMerge(t,this.currentValue);for(const r of this._loadedCbs)r()})}waitForLoaded(){return Kc(this,void 0,void 0,function*(){if(!this._isLoading)return;yield new Promise(r=>{this._loadedCbs.push(r)})})}isLoading(){return this._isLoading}version(){return this._version}waitForSync(){return Kc(this,void 0,void 0,function*(){if(!this._nextSave)return;yield new Promise(r=>{this._pendingSaveCbs.push(r)})})}_writeToStorage(){this._persister.setItem(this._key,this.toJSON(this.currentValue));for(const t of this._pendingSaveCbs)t();this._pendingSaveCbs.length=0}flush(){return Kc(this,void 0,void 0,function*(){this._nextSave&&(clearTimeout(this._nextSave),this._writeToStorage())})}_enqueuePersist(t){if(this._nextSave){t&&this._pendingSaveCbs.push(t);return}this._nextSave=setTimeout(()=>{this._nextSave=null,this._writeToStorage()},this._saveThrottleMs)}set(t,r){this._version++,this.currentValue=t(this.currentValue),this._isLoading?this._loadedCbs.push(()=>this._enqueuePersist(r)):this._enqueuePersist(r);for(const i of this._subs)i(this.currentValue)}subscribe(t){return this._subs.push(t),t(this.currentValue),()=>{this._subs=this._subs.filter(r=>r!==t)}}}function C2(e,t=[]){e.forEach(r=>{const{data:i}=r,{"datalog-result":s}=i,{"join-rows":l}=s;for(const u of l)for(const d of u)t.push(d);C2(r["child-nodes"],t)})}function Zw(e){const t=[];return C2(e,t),t}function Kw(e){return Object.values(e.links).reduce((t,r)=>{var i,s,l,u;return(i=t[l=r.forward.on])!==null&&i!==void 0||(t[l]={}),t[r.forward.on][r.forward.label]={isForward:!0,isSingular:r.forward.has==="one",link:r},(s=t[u=r.reverse.on])!==null&&s!==void 0||(t[u]={}),t[r.reverse.on][r.reverse.label]={isForward:!1,isSingular:r.reverse.has==="one",link:r},t},{})}const M2="v0.20.12";function IN(e){return{info:e?console.info.bind(console):()=>{},debug:e?console.debug.bind(console):()=>{},error:e?console.error.bind(console):()=>{}}}var Mt=function(e,t,r,i){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(y){try{p(i.next(y))}catch(g){u(g)}}function h(y){try{p(i.throw(y))}catch(g){u(g)}}function p(y){y.done?l(y.value):s(y.value).then(d,h)}p((i=i.apply(e,t||[])).next())})};const Nr={CONNECTING:"connecting",OPENED:"opened",AUTHENTICATED:"authenticated",CLOSED:"closed",ERRORED:"errored"},YN=3e4,BN=3e4,XN=0,Jw=1,FN={apiURI:"https://api.instantdb.com",websocketURI:"wss://api.instantdb.com/runtime/session"},ip="_instant_oauth_redirect",op="currentUser";let PN=0;function GN(e){const t=new WebSocket(e);return t._id=PN++,t}function VN(){return typeof window<"u"||typeof chrome<"u"}const e1={"set-presence":!0,"set-presence-ok":!0,"refresh-presence":!0,"patch-presence":!0};function QN(e,t){var r;const i=JSON.parse(e);for(const s in i){const l=i[s];if(!((r=l==null?void 0:l.result)===null||r===void 0)&&r.store){const u=l.result.store;l.result.store=P5(Object.assign(Object.assign({},u),{useDateObjects:t}))}}return i}function WN(e){var t;const r={};for(const i in e){const s=e[i],l=Object.assign({},s);!((t=s.result)===null||t===void 0)&&t.store&&(l.result=Object.assign(Object.assign({},s.result),{store:F5(s.result.store)})),r[i]=l}return JSON.stringify(r)}function t1(e){return[...e].sort((t,r)=>{const[i,s]=t,[l,u]=r,d=s.order||0,h=u.order||0;return d==h?i<l?-1:i>l?1:0:d-h})}class ZN{constructor(t,r=S2,i=T2,s){var l;this._isOnline=!0,this._isShutdown=!1,this.status=Nr.CONNECTING,this.queryCbs={},this.queryOnceDfds={},this.authCbs=[],this.attrsCbs=[],this.mutationErrorCbs=[],this.connectionStatusCbs=[],this.mutationDeferredStore=new Map,this._reconnectTimeoutId=null,this._reconnectTimeoutMs=0,this._localIdPromises={},this._errorMessage=null,this._oauthCallbackResponse=null,this._linkIndex=null,this._rooms={},this._roomsPendingLeave={},this._presence={},this._broadcastQueue=[],this._broadcastSubs={},this._currentUserCached={isLoading:!0,error:void 0,user:void 0},this._beforeUnloadCbs=[],this._dataForQueryCache={},this._onMergeQuerySubs=(u,d)=>{const h=u||{},p=Object.assign({},d);Object.entries(d).forEach(([g,w])=>{var b;const S=(b=h==null?void 0:h[g])===null||b===void 0?void 0:b.result,T=w.result;S&&!T&&(p[g].result=S)}),Object.keys(h).filter(g=>!d[g]).sort((g,w)=>{var b,S;const T=((b=h[g])===null||b===void 0?void 0:b.lastAccessed)||0;return(((S=h[w])===null||S===void 0?void 0:S.lastAccessed)||0)-T}).slice(0,this.queryCacheLimit).forEach(g=>{p[g]=h[g]}),this.querySubs.set(g=>p),this.loadedNotifyAll()},this._onMergePendingMutations=(u,d)=>{const h=new Map([...u.entries(),...d.entries()]);this.pendingMutations.set(y=>h),this.loadedNotifyAll(),this._rewriteMutationsSorted(this.attrs,u).forEach(([y,g])=>{!d.has(y)&&!g["tx-id"]&&this._sendMutation(y,g)})},this.getPreviousResult=u=>{const d=hn(u);return this.dataForQuery(d)},this.notifyOne=u=>{var d,h;const p=(d=this.queryCbs[u])!==null&&d!==void 0?d:[],y=(h=this._dataForQueryCache[u])===null||h===void 0?void 0:h.data,g=this.dataForQuery(u);g&&(mu(g,y)||p.forEach(w=>w.cb(g)))},this.notifyOneQueryOnce=u=>{var d;const h=(d=this.queryOnceDfds[u])!==null&&d!==void 0?d:[],p=this.dataForQuery(u);h.forEach(y=>{this._completeQueryOnce(y.q,u,y.dfd),y.dfd.resolve(p)})},this.notifyQueryError=(u,d)=>{(this.queryCbs[u]||[]).forEach(p=>p.cb({error:d}))},this.pushTx=u=>{try{const d=EN({attrs:this.optimisticAttrs(),schema:this.config.schema,stores:Object.values(this.querySubs.currentValue).map(h=>{var p;return(p=h==null?void 0:h.result)===null||p===void 0?void 0:p.store}),useDateObjects:this.config.useDateObjects},u);return this.pushOps(d)}catch(d){return this.pushOps([],d)}},this.pushOps=(u,d)=>{const h=et(),p=[...this.pendingMutations.currentValue.values()],y=Math.max(0,...p.map(b=>b.order||0))+1,g={op:"transact","tx-steps":u,created:Date.now(),error:d,order:y};this.pendingMutations.set(b=>(b.set(h,g),b));const w=new Qw;return this.mutationDeferredStore.set(h,w),this._sendMutation(h,g),this.notifyAll(),w.promise},this._wsOnOpen=u=>{const d=u.target;if(this._ws!==d){this._log.info("[socket][open]",d._id,"skip; this is no longer the current ws");return}this._log.info("[socket][open]",this._ws._id),this._setStatus(Nr.OPENED),this.getCurrentUser().then(h=>{var p;this._trySend(et(),{op:"init","app-id":this.config.appId,"refresh-token":(p=h.user)===null||p===void 0?void 0:p.refresh_token,versions:this.versions,"__admin-token":this.config.__adminToken})}).catch(h=>{this._log.error("[socket][error]",d._id,h)})},this._wsOnMessage=u=>{const d=u.target,h=JSON.parse(u.data.toString());if(this._ws!==d){this._log.info("[socket][message]",d._id,h,"skip; this is no longer the current ws");return}this._handleReceive(d._id,JSON.parse(u.data.toString()))},this._wsOnError=u=>{const d=u.target;if(this._ws!==d){this._log.info("[socket][error]",d._id,"skip; this is no longer the current ws");return}this._log.error("[socket][error]",d._id,u)},this._wsOnClose=u=>{const d=u.target;if(this._ws!==d){this._log.info("[socket][close]",d._id,"skip; this is no longer the current ws");return}this._setStatus(Nr.CLOSED);for(const h of Object.values(this._rooms))h.isConnected=!1;if(this._isShutdown){this._log.info("[socket][close]",d._id,"Reactor has been shut down and will not reconnect");return}this._log.info("[socket][close]",d._id,"schedule reconnect, ms =",this._reconnectTimeoutMs),setTimeout(()=>{if(this._reconnectTimeoutMs=Math.min(this._reconnectTimeoutMs+1e3,1e4),!this._isOnline){this._log.info("[socket][close]",d._id,"we are offline, no need to start socket");return}this._startSocket()},this._reconnectTimeoutMs)},this.config=Object.assign(Object.assign({},FN),t),this.queryCacheLimit=(l=this.config.queryCacheLimit)!==null&&l!==void 0?l:10,this._log=IN(t.verbose||lg||k2),this.versions=Object.assign(Object.assign({},s||{}),{"@instantdb/core":M2}),this.config.schema&&(this._linkIndex=Kw(this.config.schema)),VN()&&(typeof BroadcastChannel=="function"&&(this._broadcastChannel=new BroadcastChannel("@instantdb"),this._broadcastChannel.addEventListener("message",u=>Mt(this,void 0,void 0,function*(){var d;try{if(((d=u.data)===null||d===void 0?void 0:d.type)==="auth"){const h=yield this.getCurrentUser();this.updateUser(h.user)}}catch(h){this._log.error("[error] handle broadcast channel",h)}}))),this._oauthCallbackResponse=this._oauthLoginInit(),this._initStorage(r),this.getCurrentUser(),i.getIsOnline().then(u=>{this._isOnline=u,this._startSocket(),i.listen(d=>{d!==this._isOnline&&(this._log.info("[network] online =",d),this._isOnline=d,this._isOnline?this._startSocket():(this._log.info("Changing status from",this.status,"to",Nr.CLOSED),this._setStatus(Nr.CLOSED)))})}),typeof addEventListener<"u"&&(this._beforeUnload=this._beforeUnload.bind(this),addEventListener("beforeunload",this._beforeUnload)))}updateSchema(t){this.config=Object.assign(Object.assign({},this.config),{schema:t,cardinalityInference:!!t}),this._linkIndex=t?Kw(this.config.schema):null}_initStorage(t){this._persister=new t(`instant_${this.config.appId}_5`),this.querySubs=new Ww(this._persister,"querySubs",{},this._onMergeQuerySubs,WN,r=>QN(r,this.config.useDateObjects)),this.pendingMutations=new Ww(this._persister,"pendingMutations",new Map,this._onMergePendingMutations,r=>JSON.stringify([...r.entries()]),r=>new Map(JSON.parse(r))),this._beforeUnloadCbs.push(()=>{this.pendingMutations.flush(),this.querySubs.flush()})}_beforeUnload(){for(const t of this._beforeUnloadCbs)t()}_finishTransaction(t,r,i){const s=this.mutationDeferredStore.get(r);this.mutationDeferredStore.delete(r);const l=t!=="error"&&t!=="timeout";!s&&!l&&console.error("Mutation failed",Object.assign({status:t,eventId:r},i)),s&&(l?s.resolve({status:t,eventId:r}):s.reject(Object.assign({status:t,eventId:r},i)))}_setStatus(t,r){this.status=t,this._errorMessage=r,this.notifyConnectionStatusSubs(t)}_flushEnqueuedRoomData(t){var r,i;const s=(i=(r=this._presence[t])===null||r===void 0?void 0:r.result)===null||i===void 0?void 0:i.user,l=this._broadcastQueue[t];if(this._broadcastQueue[t]=[],s&&this._trySetPresence(t,s),l)for(const u of l){const{topic:d,roomType:h,data:p}=u;this._tryBroadcast(t,h,d,p)}}_handleReceive(t,r){var i,s,l,u,d,h;const p=!!this.config.schema&&("cardinalityInference"in this.config?!!this.config.cardinalityInference:!0);switch(e1[r.op]||this._log.info("[receive]",t,r.op,r),r.op){case"init-ok":this._setStatus(Nr.AUTHENTICATED),this._reconnectTimeoutMs=0,this._setAttrs(r.attrs),this._flushPendingMessages(),this._sessionId=r["session-id"];for(const R of Object.keys(this._rooms)){const Y=(s=(i=this._presence[R])===null||i===void 0?void 0:i.result)===null||s===void 0?void 0:s.user;this._tryJoinRoom(R,Y)}break;case"add-query-exists":this.notifyOneQueryOnce(hn(r.q));break;case"add-query-ok":const{q:y,result:g}=r,w=hn(y),b=(u=(l=g==null?void 0:g[0])===null||l===void 0?void 0:l.data)===null||u===void 0?void 0:u["page-info"],S=(h=(d=g==null?void 0:g[0])===null||d===void 0?void 0:d.data)===null||h===void 0?void 0:h.aggregate,T=Zw(g),M=Wp(this.attrs,T,p,this._linkIndex,this.config.useDateObjects);this.querySubs.set(R=>(R[w].result={store:M,pageInfo:b,aggregate:S,processedTxId:r["processed-tx-id"]},R)),this._cleanupPendingMutationsQueries(),this.notifyOne(w),this.notifyOneQueryOnce(w),this._cleanupPendingMutationsTimeout();break;case"refresh-ok":const{computations:_,attrs:C}=r,A=r["processed-tx-id"];C&&this._setAttrs(C),this._cleanupPendingMutationsTimeout();const U=this._rewriteMutations(this.attrs,this.pendingMutations.currentValue,A);U!==this.pendingMutations.currentValue&&this.pendingMutations.set(()=>U);const D=t1(U.entries()),P=_.map(R=>{var Y,N,H,W;const J=R["instaql-query"],te=R["instaql-result"],ie=hn(J),re=Zw(te),ge=Wp(this.attrs,re,p,this._linkIndex,this.config.useDateObjects),de=this._applyOptimisticUpdates(ge,D,A),Te=(N=(Y=te==null?void 0:te[0])===null||Y===void 0?void 0:Y.data)===null||N===void 0?void 0:N["page-info"],Le=(W=(H=te==null?void 0:te[0])===null||H===void 0?void 0:H.data)===null||W===void 0?void 0:W.aggregate;return{hash:ie,store:de,pageInfo:Te,aggregate:Le}});P.forEach(({hash:R,store:Y,pageInfo:N,aggregate:H})=>{this.querySubs.set(W=>(W[R].result={store:Y,pageInfo:N,aggregate:H,processedTxId:A},W))}),this._cleanupPendingMutationsQueries(),P.forEach(({hash:R})=>{this.notifyOne(R)});break;case"transact-ok":const{"client-event-id":G,"tx-id":ee}=r,ue=this._rewriteMutations(this.attrs,this.pendingMutations.currentValue).get(G);if(!ue)break;this.pendingMutations.set(R=>(R.set(G,Object.assign(Object.assign({},R.get(G)),{"tx-id":ee,confirmed:Date.now()})),R)),this._cleanupPendingMutationsTimeout();const se=ue["tx-steps"].filter(([R,...Y])=>R==="add-attr").map(([R,Y])=>Y).concat(Object.values(this.attrs));this._setAttrs(se),this._finishTransaction("synced",G);break;case"patch-presence":{const R=r["room-id"];this._patchPresencePeers(R,r.edits),this._notifyPresenceSubs(R);break}case"refresh-presence":{const R=r["room-id"];this._setPresencePeers(R,r.data),this._notifyPresenceSubs(R);break}case"server-broadcast":const ae=r["room-id"],ye=r.topic;this._notifyBroadcastSubs(ae,ye,r);break;case"join-room-ok":const we=r["room-id"],_e=this._rooms[we];if(!_e){this._roomsPendingLeave[we]&&(this._tryLeaveRoom(we),delete this._roomsPendingLeave[we]);break}_e.isConnected=!0,this._notifyPresenceSubs(we),this._flushEnqueuedRoomData(we);break;case"join-room-error":const E=r["room-id"],O=this._rooms[E];O&&(O.error=r.error),this._notifyPresenceSubs(E);break;case"error":this._handleReceiveError(r);break}}_handleMutationError(t,r,i){const s=this.pendingMutations.currentValue.get(r);s&&(t!=="timeout"||!s["tx-id"])&&(this.pendingMutations.set(l=>(l.delete(r),l)),this.notifyAll(),this.notifyAttrsSubs(),this.notifyMutationErrorSubs(i),this._finishTransaction(t,r,i))}_handleReceiveError(t){var r,i,s,l,u;const d=t["client-event-id"],h=this.pendingMutations.currentValue.get(d),p={message:t.message||"Uh-oh, something went wrong. Ping Joe & Stopa."};if(t.hint&&(p.hint=t.hint),h){const w={message:t.message,hint:t.hint};this._handleMutationError("error",d,w);return}if(!((r=t["original-event"])===null||r===void 0)&&r.hasOwnProperty("q")&&((i=t["original-event"])===null||i===void 0?void 0:i.op)==="add-query"){const w=(s=t["original-event"])===null||s===void 0?void 0:s.q,b=hn(w);this.notifyQueryError(hn(w),p),this.notifyQueryOnceError(w,b,d,p);return}if(((l=t["original-event"])===null||l===void 0?void 0:l.op)==="init"){if(t.type==="record-not-found"&&((u=t.hint)===null||u===void 0?void 0:u["record-type"])==="app-user"){this.changeCurrentUser(null);return}this._setStatus(Nr.ERRORED,p),this.notifyAll();return}const g=Object.assign({},t);delete g.message,delete g.hint,console.error(t.message,g),t.hint&&console.error(`This error comes with some debugging information. Here it is: 
`,t.hint)}notifyQueryOnceError(t,r,i,s){var l;const u=(l=this.queryOnceDfds[r])===null||l===void 0?void 0:l.find(d=>d.eventId===i);u&&(u.dfd.reject(s),this._completeQueryOnce(t,r,u.dfd))}_setAttrs(t){this.attrs=t.reduce((r,i)=>(r[i.id]=i,r),{}),this.notifyAttrsSubs()}_startQuerySub(t,r){const i=et();return this.querySubs.set(s=>(s[r]=s[r]||{q:t,result:null,eventId:i},s[r].lastAccessed=Date.now(),s)),this._trySendAuthed(i,{op:"add-query",q:t}),i}subscribeQuery(t,r,i){var s;i&&"ruleParams"in i&&(t=Object.assign({$$ruleParams:i.ruleParams},t));const l=hn(t),u=this.getPreviousResult(t);return u&&r(u),this.queryCbs[l]=(s=this.queryCbs[l])!==null&&s!==void 0?s:[],this.queryCbs[l].push({q:t,cb:r}),this._startQuerySub(t,l),()=>{this._unsubQuery(t,l,r)}}queryOnce(t,r){var i;r&&"ruleParams"in r&&(t=Object.assign({$$ruleParams:r.ruleParams},t));const s=new Qw;if(!this._isOnline)return s.reject(new Error("We can't run `queryOnce`, because the device is offline.")),s.promise;if(!this.querySubs)return s.reject(new Error("We can't run `queryOnce` on the backend. Use adminAPI.query instead: https://www.instantdb.com/docs/backend#query")),s.promise;const l=hn(t),u=this._startQuerySub(t,l);return this.queryOnceDfds[l]=(i=this.queryOnceDfds[l])!==null&&i!==void 0?i:[],this.queryOnceDfds[l].push({q:t,dfd:s,eventId:u}),setTimeout(()=>s.reject(new Error("Query timed out")),YN),s.promise}_completeQueryOnce(t,r,i){this.queryOnceDfds[r]&&(this.queryOnceDfds[r]=this.queryOnceDfds[r].filter(s=>s.dfd!==i),this._cleanupQuery(t,r))}_unsubQuery(t,r,i){this.queryCbs[r]&&(this.queryCbs[r]=this.queryCbs[r].filter(s=>s.cb!==i),this._cleanupQuery(t,r))}_cleanupQuery(t,r){var i,s;!((i=this.queryCbs[r])===null||i===void 0)&&i.length||!((s=this.queryOnceDfds[r])===null||s===void 0)&&s.length||(delete this.queryCbs[r],delete this.queryOnceDfds[r],this._trySendAuthed(et(),{op:"remove-query",q:t}))}_rewriteMutations(t,r,i){if(!t)return r;const s=y=>{const[g,w,b]=y["forward-identity"];return qt(t,w,b)},l=y=>{const[g,w,b]=y["forward-identity"];return Za(t,w,b)},u={attrIdMap:{},refSwapAttrIds:new Set};let d=!1;const h=(y,g)=>{const w=[];for(const b of y){const[S]=b;if(S==="add-attr"){const[M,_]=b,C=s(_);if(C&&_.id!==C.id){u.attrIdMap[_.id]=C.id,d=!0;continue}if(_["value-type"]==="ref"){const A=l(_);if(A){u.attrIdMap[_.id]=A.id,u.refSwapAttrIds.add(_.id),d=!0;continue}}}if(i&&g&&i>=g&&S==="add-attr"||S==="update-attr"||S==="delete-attr"){d=!0;continue}const T=d?nN(u,b):b;w.push(T)}return d?w:y},p=new Map;for(const[y,g]of r.entries())p.set(y,Object.assign(Object.assign({},g),{"tx-steps":h(g["tx-steps"],g["tx-id"])}));return d?p:r}_rewriteMutationsSorted(t,r){return t1(this._rewriteMutations(t,r).entries())}optimisticAttrs(){var t;const r=[...this.pendingMutations.currentValue.values()].flatMap(d=>d["tx-steps"]),i=new Set(r.filter(([d,h])=>d==="delete-attr").map(([d,h])=>h)),s=[];for(const[d,h]of r)if(d==="add-attr")s.push(h);else if(d==="update-attr"&&h.id&&(!((t=this.attrs)===null||t===void 0)&&t[h.id])){const p=Object.assign(Object.assign({},this.attrs[h.id]),h);s.push(p)}const l=[...Object.values(this.attrs||{}),...s].filter(d=>!i.has(d.id));return Object.fromEntries(l.map(d=>[d.id,d]))}dataForQuery(t){const r=this._errorMessage;if(r)return{error:r};if(!this.querySubs||!this.pendingMutations)return;const i=this.querySubs.version(),s=this.querySubs.currentValue,l=this.pendingMutations.version(),u=this.pendingMutations.currentValue,{q:d,result:h}=s[t]||{};if(!h)return;const p=this._dataForQueryCache[t];if(p&&i===p.querySubVersion&&l===p.pendingMutationsVersion)return p.data;const{store:y,pageInfo:g,aggregate:w,processedTxId:b}=h,S=this._rewriteMutationsSorted(y.attrs,u),T=this._applyOptimisticUpdates(y,S,b),M=ZM({store:T,pageInfo:g,aggregate:w},d);return this._dataForQueryCache[t]={querySubVersion:i,pendingMutationsVersion:l,data:M},M}_applyOptimisticUpdates(t,r,i){for(const[s,l]of r)(!l["tx-id"]||i&&l["tx-id"]>i)&&(t=sM(t,l["tx-steps"]));return t}notifyAll(){Object.keys(this.queryCbs).forEach(t=>{this.notifyOne(t)})}loadedNotifyAll(){this.pendingMutations.isLoading()||this.querySubs.isLoading()||this.notifyAll()}shutdown(){var t;this._log.info("[shutdown]",this.config.appId),this._isShutdown=!0,(t=this._ws)===null||t===void 0||t.close()}_sendMutation(t,r){if(r.error){this._handleMutationError("error",t,{error:r.error,message:r.error.message});return}if(this.status!==Nr.AUTHENTICATED){this._finishTransaction("enqueued",t);return}const i=Math.max(5e3,this.pendingMutations.currentValue.size*5e3);this._isOnline?(this._trySend(t,r),setTimeout(()=>{this._isOnline&&this._handleMutationError("timeout",t,{message:"transaction timed out"})},i)):this._finishTransaction("enqueued",t)}_flushPendingMessages(){Object.keys(this.queryCbs).map(s=>this.querySubs.currentValue[s]).filter(s=>s).forEach(({eventId:s,q:l})=>{this._trySendAuthed(s,{op:"add-query",q:l})}),Object.values(this.queryOnceDfds).flat().forEach(({eventId:s,q:l})=>{this._trySendAuthed(s,{op:"add-query",q:l})}),this._rewriteMutationsSorted(this.attrs,this.pendingMutations.currentValue).forEach(([s,l])=>{l["tx-id"]||this._sendMutation(s,l)})}_cleanupPendingMutationsQueries(){let t=Number.MAX_SAFE_INTEGER;for(const{result:r}of Object.values(this.querySubs.currentValue))r!=null&&r.processedTxId&&(t=Math.min(t,r==null?void 0:r.processedTxId));this.pendingMutations.set(r=>{for(const[i,s]of Array.from(r.entries()))s["tx-id"]&&s["tx-id"]<=t&&r.delete(i);return r})}_cleanupPendingMutationsTimeout(){const t=Date.now();this.pendingMutations.currentValue.size<200||this.pendingMutations.set(r=>{let i=!1,s=!1;for(const[l,u]of Array.from(r.entries()))u.confirmed||(s=!0),u.confirmed&&u.confirmed+BN<t&&(r.delete(l),i=!0);if(i&&s)for(const[l,u]of Array.from(r.entries()))u.confirmed||r.delete(l);return r})}_trySendAuthed(...t){this.status===Nr.AUTHENTICATED&&this._trySend(...t)}_trySend(t,r,i){this._ws.readyState===Jw&&(e1[r.op]||this._log.info("[send]",this._ws._id,r.op,r),this._ws.send(JSON.stringify(Object.assign({"client-event-id":t},r))))}_startSocket(){if(this._isShutdown){this._log.info("[socket][start]",this.config.appId,"Reactor has been shut down and will not start a new socket");return}if(this._ws&&this._ws.readyState==XN){this._log.info("[socket][start]",this._ws._id,"maintained as current ws, we were still in a connecting state");return}const t=this._ws;this._ws=GN(`${this.config.websocketURI}?app_id=${this.config.appId}`),this._ws.onopen=this._wsOnOpen,this._ws.onmessage=this._wsOnMessage,this._ws.onclose=this._wsOnClose,this._ws.onerror=this._wsOnError,this._log.info("[socket][start]",this._ws._id),(t==null?void 0:t.readyState)===Jw&&(this._log.info("[socket][start]",this._ws._id,"close previous ws id = ",t._id),t.close())}getLocalId(t){return Mt(this,void 0,void 0,function*(){const r=`localToken_${t}`,i=yield this._persister.getItem(r);if(i)return i;if(this._localIdPromises[r])return this._localIdPromises[r];const s=et();return this._localIdPromises[r]=this._persister.setItem(r,s).then(()=>s),this._localIdPromises[r]})}_replaceUrlAfterOAuth(){if(typeof URL>"u")return;const t=new URL(window.location.href);if(t.searchParams.get(ip)){const r=t.toString();t.searchParams.delete(ip),t.searchParams.delete("code"),t.searchParams.delete("error");const i=t.pathname+(t.searchParams.size?"?"+t.searchParams:"")+t.hash;if(history.replaceState(history.state,"",i),typeof navigation=="object"&&typeof navigation.addEventListener=="function"&&typeof navigation.removeEventListener=="function"){let s=!1;const l=u=>{var d;s||(s=!0,navigation.removeEventListener("navigate",l),!u.userInitiated&&u.navigationType==="replace"&&((d=u.destination)===null||d===void 0?void 0:d.url)===r&&history.replaceState(history.state,"",i))};navigation.addEventListener("navigate",l)}}}_oauthLoginInit(){return Mt(this,void 0,void 0,function*(){var t,r,i,s;if(typeof window>"u"||typeof window.location>"u"||typeof URLSearchParams>"u")return null;const l=new URLSearchParams(window.location.search);if(!l.get(ip))return null;const u=l.get("error");if(u)return this._replaceUrlAfterOAuth(),{error:{message:u}};const d=l.get("code");if(!d)return null;this._replaceUrlAfterOAuth();try{const{user:h}=yield Gw({apiURI:this.config.apiURI,appId:this.config.appId,code:d});return this.setCurrentUser(h),null}catch(h){return((t=h==null?void 0:h.body)===null||t===void 0?void 0:t.type)==="record-not-found"&&((i=(r=h==null?void 0:h.body)===null||r===void 0?void 0:r.hint)===null||i===void 0?void 0:i["record-type"])==="app-oauth-code"&&(yield this._hasCurrentUser())?null:{error:{message:((s=h==null?void 0:h.body)===null||s===void 0?void 0:s.message)||"Error logging in."}}}})}_waitForOAuthCallbackResponse(){return Mt(this,void 0,void 0,function*(){return yield this._oauthCallbackResponse})}__subscribeMutationErrors(t){return this.mutationErrorCbs.push(t),()=>{this.mutationErrorCbs=this.mutationErrorCbs.filter(r=>r!==t)}}subscribeAuth(t){this.authCbs.push(t);const r=this._currentUserCached;r.isLoading||t(this._currentUserCached);let i=!1;return this.getCurrentUser().then(s=>{i||mu(s,r)||t(s)}),()=>{i=!0,this.authCbs=this.authCbs.filter(s=>s!==t)}}getAuth(){return Mt(this,void 0,void 0,function*(){const{user:t,error:r}=yield this.getCurrentUser();if(r)throw r;return t})}subscribeConnectionStatus(t){return this.connectionStatusCbs.push(t),()=>{this.connectionStatusCbs=this.connectionStatusCbs.filter(r=>r!==t)}}subscribeAttrs(t){return this.attrsCbs.push(t),this.attrs&&t(this.attrs),()=>{this.attrsCbs=this.attrsCbs.filter(r=>r!==t)}}notifyAuthSubs(t){this.authCbs.forEach(r=>r(t))}notifyMutationErrorSubs(t){this.mutationErrorCbs.forEach(r=>r(t))}notifyAttrsSubs(){if(!this.attrs)return;const t=this.optimisticAttrs();this.attrsCbs.forEach(r=>r(t))}notifyConnectionStatusSubs(t){this.connectionStatusCbs.forEach(r=>r(t))}setCurrentUser(t){return Mt(this,void 0,void 0,function*(){yield this._persister.setItem(op,JSON.stringify(t))})}getCurrentUserCached(){return this._currentUserCached}getCurrentUser(){return Mt(this,void 0,void 0,function*(){const t=yield this._waitForOAuthCallbackResponse();if(t!=null&&t.error){const s={error:t.error,user:void 0};return this._currentUserCached=Object.assign({isLoading:!1},s),s}const r=yield this._persister.getItem(op),i={user:JSON.parse(r),error:void 0};return this._currentUserCached=Object.assign({isLoading:!1},i),i})}_hasCurrentUser(){return Mt(this,void 0,void 0,function*(){const t=yield this._persister.getItem(op);return JSON.parse(t)!=null})}changeCurrentUser(t){return Mt(this,void 0,void 0,function*(){var r;const{user:i}=yield this.getCurrentUser();if(!mu(i,t)){yield this.setCurrentUser(t),this.updateUser(t);try{(r=this._broadcastChannel)===null||r===void 0||r.postMessage({type:"auth"})}catch(s){console.error("Error posting message to broadcast channel",s)}}})}updateUser(t){const r={error:void 0,user:t};this._currentUserCached=Object.assign({isLoading:!1},r),this._dataForQueryCache={},this.querySubs.set(i=>(Object.keys(i).forEach(s=>{delete i[s].result}),i)),this._reconnectTimeoutMs=0,this._ws.close(),this._oauthCallbackResponse=null,this.notifyAuthSubs(r)}sendMagicCode({email:t}){return NN({apiURI:this.config.apiURI,appId:this.config.appId,email:t})}signInWithMagicCode(t){return Mt(this,arguments,void 0,function*({email:r,code:i}){const s=yield ON({apiURI:this.config.apiURI,appId:this.config.appId,email:r,code:i});return yield this.changeCurrentUser(s.user),s})}signInWithCustomToken(t){return Mt(this,void 0,void 0,function*(){const r=yield AN({apiURI:this.config.apiURI,appId:this.config.appId,refreshToken:t});return yield this.changeCurrentUser(r.user),r})}potentiallyInvalidateToken(t,r){var i;const s=(i=t==null?void 0:t.user)===null||i===void 0?void 0:i.refresh_token;if(!s)return;if(r.invalidateToken===!1){this._log.info("[auth-invalidate] skipped invalidateToken");return}RN({apiURI:this.config.apiURI,appId:this.config.appId,refreshToken:s}).then(()=>{this._log.info("[auth-invalidate] completed invalidateToken")}).catch(u=>{})}signOut(t){return Mt(this,void 0,void 0,function*(){const r=yield this.getCurrentUser();this.potentiallyInvalidateToken(r,t),yield this.changeCurrentUser(null)})}createAuthorizationURL({clientName:t,redirectURL:r}){const{apiURI:i,appId:s}=this.config;return`${i}/runtime/oauth/start?app_id=${s}&client_name=${t}&redirect_uri=${r}`}exchangeCodeForToken(t){return Mt(this,arguments,void 0,function*({code:r,codeVerifier:i}){const s=yield Gw({apiURI:this.config.apiURI,appId:this.config.appId,code:r,codeVerifier:i});return yield this.changeCurrentUser(s.user),s})}issuerURI(){const{apiURI:t,appId:r}=this.config;return`${t}/runtime/${r}`}signInWithIdToken(t){return Mt(this,arguments,void 0,function*({idToken:r,clientName:i,nonce:s}){var l;const u=yield this.getCurrentUser(),d=(l=u==null?void 0:u.user)===null||l===void 0?void 0:l.refresh_token,h=yield zN({apiURI:this.config.apiURI,appId:this.config.appId,idToken:r,clientName:i,nonce:s,refreshToken:d});return yield this.changeCurrentUser(h.user),h})}joinRoom(t,r){return this._rooms[t]||(this._rooms[t]={isConnected:!1,error:void 0}),this._presence[t]=this._presence[t]||{},r&&(this._presence[t].result=this._presence[t].result||{},this._presence[t].result.user=r,this._notifyPresenceSubs(t)),this._tryJoinRoom(t,r),()=>{this._cleanupRoom(t)}}_cleanupRoom(t){var r,i,s,l;if(!(!((i=(r=this._presence[t])===null||r===void 0?void 0:r.handlers)===null||i===void 0)&&i.length)&&!Object.keys((s=this._broadcastSubs[t])!==null&&s!==void 0?s:{}).length){const u=(l=this._rooms[t])===null||l===void 0?void 0:l.isConnected;delete this._rooms[t],delete this._presence[t],delete this._broadcastSubs[t],u?this._tryLeaveRoom(t):this._roomsPendingLeave[t]=!0}}getPresence(t,r,i={}){const s=this._rooms[r],l=this._presence[r];return!s||!l||!l.result?null:Object.assign(Object.assign({},HN(l.result,i,this._sessionId)),{isLoading:!s.isConnected,error:s.error})}publishPresence(t,r,i){const s=this._rooms[r],l=this._presence[r];if(!s||!l)return;l.result=l.result||{};const u=Object.assign(Object.assign({},l.result.user),i);l.result.user=u,s.isConnected&&(this._trySetPresence(r,u),this._notifyPresenceSubs(r))}_trySetPresence(t,r){this._trySendAuthed(et(),{op:"set-presence","room-id":t,data:r})}_tryJoinRoom(t,r){this._trySendAuthed(et(),{op:"join-room","room-id":t,data:r}),delete this._roomsPendingLeave[t]}_tryLeaveRoom(t){this._trySendAuthed(et(),{op:"leave-room","room-id":t})}subscribePresence(t,r,i,s){const l=this.joinRoom(r,i.data),u=Object.assign(Object.assign({},i),{roomId:r,cb:s,prev:null});return this._presence[r]=this._presence[r]||{},this._presence[r].handlers=this._presence[r].handlers||[],this._presence[r].handlers.push(u),this._notifyPresenceSub(r,u),()=>{var d,h,p;this._presence[r].handlers=(p=(h=(d=this._presence[r])===null||d===void 0?void 0:d.handlers)===null||h===void 0?void 0:h.filter(y=>y!==u))!==null&&p!==void 0?p:[],l()}}_notifyPresenceSubs(t){var r,i;(i=(r=this._presence[t])===null||r===void 0?void 0:r.handlers)===null||i===void 0||i.forEach(s=>{this._notifyPresenceSub(t,s)})}_notifyPresenceSub(t,r){const i=this.getPresence("",t,r);i&&(r.prev&&!qN(i,r.prev)||(r.prev=i,r.cb(i)))}_patchPresencePeers(t,r){var i,s,l;const u=((s=(i=this._presence[t])===null||i===void 0?void 0:i.result)===null||s===void 0?void 0:s.peers)||{};let d=Object.fromEntries(Object.entries(u).map(([p,y])=>[p,{data:y}]));(l=this._presence[t])===null||l===void 0||l.result;const h=Qp(d,p=>{for(let[y,g,w]of r)switch(g){case"+":A5(p,y,w);break;case"r":Lw(p,y,w);break;case"-":s2(p,y);break}delete p[this._sessionId]});this._setPresencePeers(t,h)}_setPresencePeers(t,r){const i=Object.assign({},r);delete i[this._sessionId];const s=Object.fromEntries(Object.entries(i).map(([l,u])=>[l,u.data]));this._presence=Qp(this._presence,l=>{Lw(l,[t,"result","peers"],s)})}publishTopic({roomType:t,roomId:r,topic:i,data:s}){var l;const u=this._rooms[r];if(u){if(!u.isConnected){this._broadcastQueue[r]=(l=this._broadcastQueue[r])!==null&&l!==void 0?l:[],this._broadcastQueue[r].push({topic:i,roomType:t,data:s});return}this._tryBroadcast(r,t,i,s)}}_tryBroadcast(t,r,i,s){this._trySendAuthed(et(),{op:"client-broadcast","room-id":t,roomType:r,topic:i,data:s})}subscribeTopic(t,r,i){const s=this.joinRoom(t);return this._broadcastSubs[t]=this._broadcastSubs[t]||{},this._broadcastSubs[t][r]=this._broadcastSubs[t][r]||[],this._broadcastSubs[t][r].push(i),this._presence[t]=this._presence[t]||{},()=>{this._broadcastSubs[t][r]=this._broadcastSubs[t][r].filter(l=>l!==i),this._broadcastSubs[t][r].length||delete this._broadcastSubs[t][r],s()}}_notifyBroadcastSubs(t,r,i){var s,l,u;(u=(l=(s=this._broadcastSubs)===null||s===void 0?void 0:s[t])===null||l===void 0?void 0:l[r])===null||u===void 0||u.forEach(d=>{var h,p,y,g,w,b;const S=(h=i.data)===null||h===void 0?void 0:h.data,T=i.data["peer-id"]===this._sessionId?(y=(p=this._presence[t])===null||p===void 0?void 0:p.result)===null||y===void 0?void 0:y.user:(b=(w=(g=this._presence[t])===null||g===void 0?void 0:g.result)===null||w===void 0?void 0:w.peers)===null||b===void 0?void 0:b[i.data["peer-id"]];return d(S,T)})}uploadFile(t,r,i){return Mt(this,void 0,void 0,function*(){var s;const l=yield this.getCurrentUser(),u=(s=l==null?void 0:l.user)===null||s===void 0?void 0:s.refresh_token;return DN(Object.assign(Object.assign({},i),{apiURI:this.config.apiURI,appId:this.config.appId,path:t,file:r,refreshToken:u}))})}deleteFile(t){return Mt(this,void 0,void 0,function*(){var r;const i=yield this.getCurrentUser(),s=(r=i==null?void 0:i.user)===null||r===void 0?void 0:r.refresh_token;return yield jN({apiURI:this.config.apiURI,appId:this.config.appId,path:t,refreshToken:s})})}upload(t,r){return Mt(this,void 0,void 0,function*(){var i;const s=yield this.getCurrentUser(),l=(i=s==null?void 0:s.user)===null||i===void 0?void 0:i.refresh_token,u=t||r.name,d=yield UN({apiURI:this.config.apiURI,appId:this.config.appId,fileName:u,refreshToken:l});return yield LN(d,r)})}getDownloadUrl(t){return Mt(this,void 0,void 0,function*(){var r;const i=yield this.getCurrentUser(),s=(r=i==null?void 0:i.user)===null||r===void 0?void 0:r.refresh_token;return yield $N({apiURI:this.config.apiURI,appId:this.config.appId,path:t,refreshToken:s})})}}class Pn{constructor(t,r,i,s={indexed:!1,unique:!1}){this.valueType=t,this.required=r,this.isIndexed=i,this.config=s,this.metadata={}}clientRequired(){return new Pn(this.valueType,!1,this.isIndexed,this.config)}optional(){return new Pn(this.valueType,!1,this.isIndexed,this.config)}unique(){return new Pn(this.valueType,this.required,this.isIndexed,Object.assign(Object.assign({},this.config),{unique:!0}))}indexed(){return new Pn(this.valueType,this.required,!0,Object.assign(Object.assign({},this.config),{indexed:!0}))}}class ed{constructor(t,r){this.attrs=t,this.links=r}asType(){return new ed(this.attrs,this.links)}}class td{constructor(t,r,i){this.entities=t,this.links=r,this.rooms=i}withRoomSchema(){return new td(this.entities,this.links,{})}}function KN(e,t){return new td(N2(e,t),t,void 0)}function JN(e){return new ed(e,{})}function eO(){return new Pn("string",!0,!1)}function tO(){return new Pn("number",!0,!1)}function nO(){return new Pn("boolean",!0,!1)}function rO(){return new Pn("date",!0,!1)}function aO(){return new Pn("json",!0,!1)}function iO(){return new Pn("json",!0,!1)}function N2(e,t){var r,i,s,l;const u={fwd:{},rev:{}};for(const h of Object.values(t))(r=u.fwd)[i=h.forward.on]||(r[i]={}),(s=u.rev)[l=h.reverse.on]||(s[l]={}),u.fwd[h.forward.on][h.forward.label]={entityName:h.reverse.on,cardinality:h.forward.has},u.rev[h.reverse.on][h.reverse.label]={entityName:h.forward.on,cardinality:h.reverse.has};return Object.fromEntries(Object.entries(e).map(([h,p])=>[h,new ed(p.attrs,Object.assign(Object.assign({},u.fwd[h]),u.rev[h]))]))}function oO({entities:e,links:t,rooms:r}){const i=t??{},s=r??{};return new td(N2(e,i),i,s)}const xt={graph:KN,schema:oO,entity:JN,string:eO,number:tO,boolean:nO,date:rO,json:aO,any:iO};let Jc;function sO(e,t){Jc==null||Jc.dispose();const r=hO(t),i=uO(t,d),s=cO(lO(e));function l(y){var g;y.source===s.element.contentWindow&&((g=y.data)===null||g===void 0?void 0:g.type)==="close"&&r.isVisible()&&d()}function u(y){const g=y.shiftKey&&y.ctrlKey&&y.key==="0",w=y.key==="Escape"||y.key==="Esc";(g||w&&r.isVisible())&&d()}function d(){r.isVisible()?r.element.style.display="none":(r.element.style.display="block",r.element.contains(s.element)||r.element.appendChild(s.element))}function h(){r.element.remove(),i.element.remove(),removeEventListener("keydown",u),removeEventListener("message",l)}function p(){document.body.appendChild(r.element),document.body.appendChild(i.element),addEventListener("keydown",u),addEventListener("message",l),Jc={dispose:h}}return p()}function lO(e){return`${lg||E2?"http://localhost:3000":"https://instantdb.com"}/_devtool?appId=${e}`}function cO(e){const t=document.createElement("iframe");return t.src=e,t.className="instant-devtool-iframe",Object.assign(t.style,{width:"100%",height:"100%",backgroundColor:"white",border:"none"}),{element:t}}function uO(e,t){const r=`
    <svg width="32" height="32" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" fill="black"/>
      <rect x="97.0973" y="91.3297" width="140" height="330" fill="white"/>
    </svg>
  `,i=document.createElement("button");return i.innerHTML=r,i.className="instant-devtool-toggler",Object.assign(i.style,Object.assign(Object.assign({position:"fixed"},dO(e.position)),{height:"32px",width:"32px",display:"flex",alignItems:"center",justifyContent:"center",zIndex:"9010",padding:"0",margin:"0",border:"none",cursor:"pointer"})),i.addEventListener("click",t),{element:i}}function dO(e){switch(e){case"bottom-left":return{bottom:"24px",left:"24px"};case"bottom-right":return{bottom:"24px",right:"24px"};case"top-right":return{top:"24px",right:"24px"};case"top-left":return{top:"24px",left:"24px"}}}function fO(e){switch(e){case"bottom-left":return{bottom:"24px",right:"24px",left:"60px",top:"72px"};case"bottom-right":return{bottom:"24px",left:"24px",right:"60px",top:"72px"};case"top-right":return{top:"24px",left:"24px",right:"60px",bottom:"72px"};case"top-left":return{top:"24px",right:"24px",left:"60px",bottom:"72px"}}}function hO(e){const t=document.createElement("div");Object.assign(t.style,Object.assign(Object.assign({position:"fixed"},fO(e.position)),{display:"block",borderRadius:"4px",border:"1px #ccc solid",boxShadow:"0px 0px 8px #00000044",backgroundColor:"#eee",zIndex:"999990"})),t.style.display="none",t.className="instant-devtool-container";function r(){return t.style.display!=="none"}return{element:t,isVisible:r}}const pO={apiURI:"https://api.instantdb.com",websocketURI:"wss://api.instantdb.com/runtime/session"};function mO(){var e;return globalThis.__instantDbSchemaHashStore=(e=globalThis.__instantDbSchemaHashStore)!==null&&e!==void 0?e:new WeakMap,globalThis.__instantDbSchemaHashStore}function gO(){var e;return globalThis.__instantDbStore=(e=globalThis.__instantDbStore)!==null&&e!==void 0?e:{},globalThis.__instantDbStore}function sm(e){const t=e.__adminToken;return e.appId+"_"+(e.websocketURI||"default_ws_uri")+"_"+(e.apiURI||"default_api_uri")+"_"+(t||"client_only")+"_"+e.useDateObjects}const lm=gO(),sp=mO();class vO{constructor(t){this.db=t,this.sendMagicCode=r=>this.db.sendMagicCode(r),this.signInWithMagicCode=r=>this.db.signInWithMagicCode(r),this.signInWithToken=r=>this.db.signInWithCustomToken(r),this.createAuthorizationURL=r=>this.db.createAuthorizationURL(r),this.signInWithIdToken=r=>this.db.signInWithIdToken(r),this.exchangeOAuthCode=r=>this.db.exchangeCodeForToken(r),this.issuerURI=()=>this.db.issuerURI(),this.signOut=(r={invalidateToken:!0})=>this.db.signOut(r)}}class yO{constructor(t){this.db=t,this.uploadFile=(r,i,s={})=>this.db.uploadFile(r,i,s),this.delete=r=>this.db.deleteFile(r),this.upload=(r,i)=>this.db.upload(r,i),this.put=this.upload,this.getDownloadUrl=r=>this.db.getDownloadUrl(r)}}class bO{constructor(t){this.tx=w2(),this._reactor=t,this.auth=new vO(this._reactor),this.storage=new yO(this._reactor)}transact(t){return this._reactor.pushTx(t)}getLocalId(t){return this._reactor.getLocalId(t)}subscribeQuery(t,r,i){return this._reactor.subscribeQuery(t,r,i)}subscribeAuth(t){return this._reactor.subscribeAuth(t)}getAuth(){return this._reactor.getAuth()}subscribeConnectionStatus(t){return this._reactor.subscribeConnectionStatus(t)}joinRoom(t="_defaultRoomType",r="_defaultRoomId",i){return{leaveRoom:this._reactor.joinRoom(r,i==null?void 0:i.initialPresence),subscribeTopic:(l,u)=>this._reactor.subscribeTopic(r,l,u),subscribePresence:(l,u)=>this._reactor.subscribePresence(t,r,l,u),publishTopic:(l,u)=>this._reactor.publishTopic({roomType:t,roomId:r,topic:l,data:u}),publishPresence:l=>this._reactor.publishPresence(t,r,l),getPresence:l=>this._reactor.getPresence(t,r,l)}}shutdown(){delete lm[sm(this._reactor.config)],this._reactor.shutdown()}queryOnce(t,r){return this._reactor.queryOnce(t,r)}}function n1(e){if(!e)return"0";if(sp.get(e))return sp.get(e);const t=hn(e);return sp.set(e,t),t}function wO(e,t){return n1(e._reactor.config.schema)!==n1(t)}function xO(e,t,r,i){const s=lm[sm(e)];if(s)return wO(s,e.schema)&&s._reactor.updateSchema(e.schema),s;const l=new ZN(Object.assign(Object.assign(Object.assign({},pO),e),{cardinalityInference:!!e.schema}),t||S2,r||T2,Object.assign(Object.assign({},i||{}),{"@instantdb/core":M2})),u=new bO(l);return lm[sm(e)]=u,_O(e.appId,e.devtool),u}function _O(e,t){if(typeof window>"u"||typeof window.location>"u"||typeof document>"u"||typeof t=="boolean"&&!t)return;const r=Object.assign({position:"bottom-right",allowedHosts:["localhost"]},typeof t=="object"?t:{});r.allowedHosts.includes(window.location.hostname)&&sO(e,r)}const SO=xt.schema({entities:{party:xt.entity({name:xt.string().unique().indexed(),players:xt.any().optional(),gameState:xt.any().optional()}),roomEvent:xt.entity({it:xt.any()}),players:xt.entity({localId:xt.string().unique().indexed(),name:xt.string(),avatar:xt.string()}),words:xt.entity({word:xt.string().unique().indexed(),lang:xt.string(),category:xt.string().optional()}),curretLine:xt.entity({color:xt.string(),dots:xt.any(),width:xt.number()})},links:{partyRoomEvents:{forward:{on:"party",has:"many",label:"roomEvents"},reverse:{on:"roomEvent",has:"one",label:"party"}},partyPlayers:{forward:{on:"party",has:"many",label:"players2"},reverse:{on:"players",has:"many",label:"parties"}},partyCurrentLine:{forward:{on:"party",has:"one",label:"currentLine"},reverse:{on:"curretLine",has:"one",label:"party"}}},rooms:{}}),TO=SO,kO="59599101-16e7-493b-8644-ccb75b6cb032",Se=xO({appId:kO,schema:TO}),{$allParties:O2}=EO();function EO(){const e=Ve(),t=ko(e,[]);return Se.subscribeQuery({party:{players2:{}}},r=>{r.error&&console.error(r.error),r.data&&e(r.data.party)}),{$allParties:t}}const cm=600;function nd(e,t){let r,i=()=>{};e.watch(s=>{s!==r&&(i(),i=t(s),r=s)})}const CO=(()=>{const e=window.location.search.slice(1);if(e)return e;const t=window.location.pathname,r="/scribble/";return t.startsWith(r)&&t.slice(r.length)||""})();function Os(e){return e[Math.floor(Math.random()*e.length)]}function r1(e){if(!e.length)return"";const t=e.reduce((r,[i,s],l,u)=>{const[d,h]=u[(l+1)%u.length];return r.push(i,s,(i+d)/2,(s+h)/2),r},["M",...e[0],"Q"]);return t.push("Z"),t.map(MO).join(" ")}function MO(e){return typeof e=="number"?+e.toFixed(1):e}function As(e,t=0){if(e.length<=1||!t)return e;const r=[e[0]];for(let l=1;l<e.length;l++){const u=e[l],d=r[r.length-1],h=u[0]-d[0],p=u[1]-d[1];Math.sqrt(h*h+p*p)>=t&&r.push(u)}const i=e[e.length-1],s=r[r.length-1];return i!==s&&r.push(i),r}function NO(e,t,r){return Math.max(t,Math.min(e,r))}function va(e){return Math.round(e*1e4)/1e4}function eu(e){return Math.round(e*100)/100}function lp(e,t){if(!e)throw new Error(t||"Assertion failed")}function zs(e){return`${va(e.x)},${va(e.y)} `}function a1(e,t){return`${va((e.x+t.x)/2)},${va((e.y+t.y)/2)} `}function OO(){return window.location.pathname.includes("/scribble/")?"/scribble/":"/"}function rd(e){return`${OO()}${e||""}`}function AO(e,t,r,i){if(t.length===0)throw new Event("Can't play without players");let s={playerIds:t,params:r,messages:[],paintings:[],state:{state:"choosing-word",playerId:t[0],words:i}};const l=[],u={};return e.forEach(d=>{var h;if(d.type==="line"||d.type==="undo"){(h=l.at(-1))==null||h.events.push(d);return}(d.type==="guess"||d.type==="choosing-word"||d.type==="new-word")&&(d.type==="guess"&&s.state.state==="drawing"&&(A2(s.state.word,d.text),d.isRevealed==="revealed"&&s.state.revealed.push({playerId:d.player})),s.messages.push(d)),d.type==="choosing-word"?s={...s,state:{state:"choosing-word",playerId:d.playerId,words:d.words}}:d.type==="new-word"&&(u[d.playerId]||(u[d.playerId]=[]),l.push({events:[],playerId:d.playerId,word:d.word}),u[d.playerId].push(d.playerId),s={...s,state:{state:"drawing",playerId:d.playerId,word:d.word,revealed:[]}})}),[s,l]}function A2(e,t){return e=e.replace(/\S/g,"").toLowerCase(),t=e.replace(/\S/g,"").toLowerCase(),e===t?"revealed":"none"}function i1(e){return e[Math.floor(Math.random()*e.length)]}function zO(){return i1(DO)+" "+i1(RO)}const RO=["cat","dog","sun","sky","tree","bird","fish","hand","foot","ball","star","book","car","bed","toy","hat","cup","box","map","pen"],DO=["big","hot","red","old","wet","new","sad","tall","cold","fat","dry","fun","shy","blue","cute","kind","dark","loud","warm","fast"],z2=Ve(),cg=vn([]);cg.on(z2,(e,t)=>t);Se.subscribeQuery({words:{}},e=>{e.error&&console.error(e.error),e.data&&z2(e.data.words||[])});function jO(e,t){return Se.transact(Se.tx.words[et()].create({word:e.trim(),lang:t.toUpperCase(),category:""}))}function UO(e,t){return Se.transact(e.slice(0,100).map(r=>Se.tx.words[et()].create({word:r.trim(),lang:"RU",category:""})))}const LO={linear:e=>e},$O={simulatePressure:!1,smoothing:1,thinning:.1,streamline:0,easing:LO.linear},Ys=[3,8,15,20,25],R2=["#111111","#34495e","#faf9f5","#ffffff","#8b4513","#fa3224","#ffa729","#ffd129","#2ecc71","#3498db","#9b59b6","#ff69b4"],um={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e*e:-1+(4-2*e)*e,easeInCubic:e=>e*e*e,easeOutCubic:e=>--e*e*e+1,easeInOutCubic:e=>e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1- --e*e*e*e,easeInOutQuart:e=>e<.5?8*e*e*e*e:1-8*--e*e*e*e,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1+--e*e*e*e*e,easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>e<=0?0:Math.pow(2,10*e-10),easeOutExpo:e=>e>=1?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>e<=0?0:e>=1?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2};class V{constructor(t=0,r=0,i=1){this.x=t,this.y=r,this.z=i}get pressure(){return this.z}set(t=this.x,r=this.y,i=this.z){return this.x=t,this.y=r,this.z=i,this}setTo({x:t=0,y:r=0,z:i=1}){return this.x=t,this.y=r,this.z=i,this}rot(t){if(t===0)return this;const{x:r,y:i}=this,s=Math.sin(t),l=Math.cos(t);return this.x=r*l-i*s,this.y=r*s+i*l,this}rotWith(t,r){if(r===0)return this;const i=this.x-t.x,s=this.y-t.y,l=Math.sin(r),u=Math.cos(r);return this.x=t.x+(i*u-s*l),this.y=t.y+(i*l+s*u),this}clone(){const{x:t,y:r,z:i}=this;return new V(t,r,i)}sub(t){return this.x-=t.x,this.y-=t.y,this}subXY(t,r){return this.x-=t,this.y-=r,this}subScalar(t){return this.x-=t,this.y-=t,this}add(t){return this.x+=t.x,this.y+=t.y,this}addXY(t,r){return this.x+=t,this.y+=r,this}addScalar(t){return this.x+=t,this.y+=t,this}clamp(t,r){return this.x=Math.max(this.x,t),this.y=Math.max(this.y,t),r!==void 0&&(this.x=Math.min(this.x,r),this.y=Math.min(this.y,r)),this}div(t){return this.x/=t,this.y/=t,this}divV(t){return this.x/=t.x,this.y/=t.y,this}mul(t){return this.x*=t,this.y*=t,this}mulV(t){return this.x*=t.x,this.y*=t.y,this}abs(){return this.x=Math.abs(this.x),this.y=Math.abs(this.y),this}nudge(t,r){const i=V.Tan(t,this);return this.add(i.mul(r))}neg(){return this.x*=-1,this.y*=-1,this}cross(t){return this.x=this.y*t.z-this.z*t.y,this.y=this.z*t.x-this.x*t.z,this}dpr(t){return V.Dpr(this,t)}cpr(t){return V.Cpr(this,t)}len2(){return V.Len2(this)}len(){return V.Len(this)}pry(t){return V.Pry(this,t)}per(){const{x:t,y:r}=this;return this.x=r,this.y=-t,this}uni(){const t=this.len();return t===0?this:(this.x/=t,this.y/=t,this)}tan(t){return this.sub(t).uni()}dist(t){return V.Dist(this,t)}distanceToLineSegment(t,r){return V.DistanceToLineSegment(t,r,this)}slope(t){return V.Slope(this,t)}snapToGrid(t){return this.x=Math.round(this.x/t)*t,this.y=Math.round(this.y/t)*t,this}angle(t){return V.Angle(this,t)}toAngle(){return V.ToAngle(this)}lrp(t,r){return this.x=this.x+(t.x-this.x)*r,this.y=this.y+(t.y-this.y)*r,this}equals(t){return V.Equals(this,t)}equalsXY(t,r){return V.EqualsXY(this,t,r)}norm(){return this.uni()}toFixed(){return this.x=eu(this.x),this.y=eu(this.y),this}toString(){return V.ToString(V.ToFixed(this))}toJson(){return V.ToJson(this)}toArray(){return V.ToArray(this)}static Add(t,r){return new V(t.x+r.x,t.y+r.y)}static AddXY(t,r,i){return new V(t.x+r,t.y+i)}static Sub(t,r){return new V(t.x-r.x,t.y-r.y)}static SubXY(t,r,i){return new V(t.x-r,t.y-i)}static AddScalar(t,r){return new V(t.x+r,t.y+r)}static SubScalar(t,r){return new V(t.x-r,t.y-r)}static Div(t,r){return new V(t.x/r,t.y/r)}static Mul(t,r){return new V(t.x*r,t.y*r)}static DivV(t,r){return new V(t.x/r.x,t.y/r.y)}static MulV(t,r){return new V(t.x*r.x,t.y*r.y)}static Neg(t){return new V(-t.x,-t.y)}static Per(t){return new V(t.y,-t.x)}static Abs(t){return new V(Math.abs(t.x),Math.abs(t.y))}static Dist(t,r){return((t.y-r.y)**2+(t.x-r.x)**2)**.5}static ManhattanDist(t,r){return Math.abs(t.x-r.x)+Math.abs(t.y-r.y)}static DistMin(t,r,i){return(t.x-r.x)*(t.x-r.x)+(t.y-r.y)*(t.y-r.y)<i**2}static Dist2(t,r){return(t.x-r.x)*(t.x-r.x)+(t.y-r.y)*(t.y-r.y)}static Dpr(t,r){return t.x*r.x+t.y*r.y}static Cross(t,r){return new V(t.y*r.z-t.z*r.y,t.z*r.x-t.x*r.z)}static Cpr(t,r){return t.x*r.y-r.x*t.y}static Len2(t){return t.x*t.x+t.y*t.y}static Len(t){return(t.x*t.x+t.y*t.y)**.5}static Pry(t,r){return V.Dpr(t,r)/V.Len(r)}static Uni(t){const r=V.Len(t);return new V(r===0?0:t.x/r,r===0?0:t.y/r)}static Tan(t,r){return V.Uni(V.Sub(t,r))}static Min(t,r){return new V(Math.min(t.x,r.x),Math.min(t.y,r.y))}static Max(t,r){return new V(Math.max(t.x,r.x),Math.max(t.y,r.y))}static From({x:t,y:r,z:i=1}){return new V(t,r,i)}static FromArray(t){return new V(t[0],t[1])}static Rot(t,r=0){const i=Math.sin(r),s=Math.cos(r);return new V(t.x*s-t.y*i,t.x*i+t.y*s)}static RotWith(t,r,i){const s=t.x-r.x,l=t.y-r.y,u=Math.sin(i),d=Math.cos(i);return new V(r.x+(s*d-l*u),r.y+(s*u+l*d))}static NearestPointOnLineThroughPoint(t,r,i){return V.Mul(r,V.Sub(i,t).pry(r)).add(t)}static NearestPointOnLineSegment(t,r,i,s=!0){if(V.Equals(t,i)||V.Equals(r,i))return V.From(i);const l=V.Tan(r,t),u=V.Add(t,V.Mul(l,V.Sub(i,t).pry(l)));if(s){if(u.x<Math.min(t.x,r.x))return V.Cast(t.x<r.x?t:r);if(u.x>Math.max(t.x,r.x))return V.Cast(t.x>r.x?t:r);if(u.y<Math.min(t.y,r.y))return V.Cast(t.y<r.y?t:r);if(u.y>Math.max(t.y,r.y))return V.Cast(t.y>r.y?t:r)}return u}static DistanceToLineThroughPoint(t,r,i){return V.Dist(i,V.NearestPointOnLineThroughPoint(t,r,i))}static DistanceToLineSegment(t,r,i,s=!0){return V.Dist(i,V.NearestPointOnLineSegment(t,r,i,s))}static Snap(t,r=1){return new V(Math.round(t.x/r)*r,Math.round(t.y/r)*r)}static Cast(t){return t instanceof V?t:V.From(t)}static Slope(t,r){return t.x===r.y?NaN:(t.y-r.y)/(t.x-r.x)}static IsNaN(t){return isNaN(t.x)||isNaN(t.y)}static Angle(t,r){return Math.atan2(r.y-t.y,r.x-t.x)}static AngleBetween(t,r){const i=t.x*r.x+t.y*r.y,s=Math.sqrt((Math.pow(t.x,2)+Math.pow(t.y,2))*(Math.pow(r.x,2)+Math.pow(r.y,2)));return(t.x*r.y-t.y*r.x<0?-1:1)*Math.acos(NO(i/s,-1,1))}static Lrp(t,r,i){return V.Sub(r,t).mul(i).add(t)}static Med(t,r){return new V((t.x+r.x)/2,(t.y+r.y)/2)}static Equals(t,r){return Math.abs(t.x-r.x)<1e-4&&Math.abs(t.y-r.y)<1e-4}static EqualsXY(t,r,i){return t.x===r&&t.y===i}static Clockwise(t,r,i){return(i.x-t.x)*(r.y-t.y)-(r.x-t.x)*(i.y-t.y)<0}static Rescale(t,r){const i=V.Len(t);return new V(r*t.x/i,r*t.y/i)}static ScaleWithOrigin(t,r,i){return V.Sub(t,i).mul(r).add(i)}static ToFixed(t){return new V(eu(t.x),eu(t.y))}static ToInt(t){return new V(parseInt(t.x.toFixed(0)),parseInt(t.y.toFixed(0)),parseInt((t.z??0).toFixed(0)))}static ToCss(t){return`${t.x},${t.y}`}static Nudge(t,r,i){return V.Add(t,V.Tan(r,t).mul(i))}static ToString(t){return`${t.x}, ${t.y}`}static ToAngle(t){let r=Math.atan2(t.y,t.x);return r<0&&(r+=Math.PI*2),r}static FromAngle(t,r=1){return new V(Math.cos(t)*r,Math.sin(t)*r)}static ToArray(t){return[t.x,t.y,t.z]}static ToJson(t){const{x:r,y:i,z:s}=t;return{x:r,y:i,z:s}}static Average(t){const r=t.length,i=new V(0,0);if(r===0)return i;for(let s=0;s<r;s++)i.add(t[s]);return i.div(r)}static Clamp(t,r,i){return i===void 0?new V(Math.min(Math.max(t.x,r)),Math.min(Math.max(t.y,r))):new V(Math.min(Math.max(t.x,r),i),Math.min(Math.max(t.y,r),i))}static PointsBetween(t,r,i=6){const s=[];for(let l=0;l<i;l++){const u=um.easeInQuad(l/(i-1)),d=V.Lrp(t,r,u);d.z=Math.min(1,.5+Math.abs(.5-HO(u))*.65),s.push(d)}return s}static SnapToGrid(t,r=8){return new V(Math.round(t.x/r)*r,Math.round(t.y/r)*r)}}const HO=e=>e<.5?2*e*e:-1+(4-2*e)*e,{PI:qO}=Math,cp=qO+1e-4;function IO(e,t={}){const{size:r=16,smoothing:i=.5}=t;if(e.length===0||r<=0)return{left:[],right:[]};const s=e[0],l=e[e.length-1],u=l.runningLength,d=Math.pow(r*i,2),h=[],p=[];let y=e[0].vector,g=e[0].point,w=g,b=g,S=w,T=!1,M;for(let _=0;_<e.length;_++){M=e[_];const{point:C,vector:A}=e[_],U=M.vector.dpr(y),D=(_<e.length-1?e[_+1]:e[_]).vector,P=_<e.length-1?D.dpr(M.vector):1,G=U<0&&!T,ee=P!==null&&P<.2;if(G||ee){if(P>-.62&&u-M.runningLength>M.radius){const ue=y.clone().mul(M.radius);y.clone().cpr(D)<0?(b=V.Add(C,ue),S=V.Sub(C,ue)):(b=V.Sub(C,ue),S=V.Add(C,ue)),h.push(b),p.push(S)}else{const ue=y.clone().mul(M.radius).per(),se=V.Sub(M.input,ue);for(let ae=1/13,ye=0;ye<1;ye+=ae)b=V.RotWith(se,M.input,cp*ye),h.push(b),S=V.RotWith(se,M.input,cp+cp*-ye),p.push(S)}g=b,w=S,ee&&(T=!0);continue}if(T=!1,M===s||M===l){const ue=V.Per(A).mul(M.radius);h.push(V.Sub(C,ue)),p.push(V.Add(C,ue));continue}const ne=V.Lrp(D,A,P).per().mul(M.radius);b=V.Sub(C,ne),(_<=1||V.Dist2(g,b)>d)&&(h.push(b),g=b),S=V.Add(C,ne),(_<=1||V.Dist2(w,S)>d)&&(p.push(S),w=S),y=A}return{left:h,right:p}}const YO=.025,BO=.01;function XO(e,t={}){var M;const{streamline:r=.5,size:i=16,simulatePressure:s=!1}=t;if(e.length===0)return[];const l=.15+(1-r)*.85;let u=e.map(V.From),d=0;if(!s){let _=u[0];for(;_&&!(_.z>=YO);)u.shift(),_=u[0]}if(!s){let _=u[u.length-1];for(;_&&!(_.z>=BO);)u.pop(),_=u[u.length-1]}if(u.length===0)return[{point:V.From(e[0]),input:V.From(e[0]),pressure:s?.5:.15,vector:new V(1,1),distance:0,runningLength:0,radius:1}];let h=u[1];for(;h&&!(V.Dist2(h,u[0])>(i/3)**2);)u[0].z=Math.max(u[0].z,h.z),u.splice(1,1),h=u[1];const p=u.pop();for(h=u[u.length-1];h&&!(V.Dist2(h,p)>(i/3)**2);)u.pop(),h=u[u.length-1],d++;u.push(p);const y=t.last||!t.simulatePressure||u.length>1&&V.Dist2(u[u.length-1],u[u.length-2])<i**2||d>0;if(u.length===2&&t.simulatePressure){const _=u[1];u=u.slice(0,-1);for(let C=1;C<5;C++){const A=V.Lrp(u[0],_,C/4);A.z=(u[0].z+(_.z-u[0].z))*C/4,u.push(A)}}const g=[{point:u[0],input:u[0],pressure:s?.5:u[0].z,vector:new V(1,1),distance:0,runningLength:0,radius:1}];let w=0,b=g[0],S,T;y&&r>0&&u.push(u[u.length-1].clone());for(let _=1,C=u.length;_<C;_++)S=!l||t.last&&_===C-1?u[_].clone():u[_].clone().lrp(b.point,1-l),!b.point.equals(S)&&(T=V.Dist(S,b.point),w+=T,!(_<4&&w<i)&&(b={input:u[_],point:S,pressure:s?.5:u[_].z,vector:V.Sub(b.point,S).uni(),distance:T,runningLength:w,radius:1},g.push(b)));if((M=g[1])!=null&&M.vector&&(g[0].vector=g[1].vector.clone()),w<1){const _=Math.max(.5,...g.map(C=>C.pressure));g.forEach(C=>C.pressure=_)}return g}const{min:pa}=Math,up=.275;function FO(e,t){const{size:r=16,thinning:i=.5,simulatePressure:s=!0,easing:l=M=>M,start:u={},end:d={}}=t,{easing:h=um.easeOutQuad}=u,{easing:p=um.easeOutCubic}=d,y=e[e.length-1].runningLength;let g,w=e[0].pressure,b;if(!s&&y<r){const M=e.reduce((_,C)=>Math.max(_,C.pressure),.5);return e.forEach(_=>{_.pressure=M,_.radius=r*l(.5-i*(.5-_.pressure))}),e}else{let M;for(let _=0,C=e.length;_<C&&(b=e[_],!(b.runningLength>r*5));_++){const A=pa(1,b.distance/r);if(s){const U=pa(1,1-A);M=pa(1,w+(U-w)*(A*up))}else M=pa(1,w+(b.pressure-w)*.5);w=w+(M-w)*.5}for(let _=0;_<e.length;_++){if(b=e[_],i){let{pressure:C}=b;const A=pa(1,b.distance/r);if(s){const U=pa(1,1-A);C=pa(1,w+(U-w)*(A*up))}else C=pa(1,w+(C-w)*(A*up));b.radius=r*l(.5-i*(.5-C)),w=C}else b.radius=r/2;g===void 0&&(g=b.radius)}}const S=u.taper===!1?0:u.taper===!0?Math.max(r,y):u.taper,T=d.taper===!1?0:d.taper===!0?Math.max(r,y):d.taper;if(S||T)for(let M=0;M<e.length;M++){b=e[M];const{runningLength:_}=b,C=_<S?h(_/S):1,A=y-_<T?p((y-_)/T):1;b.radius=Math.max(.01,b.radius*Math.min(C,A))}return e}function o1(e,t={}){const{start:r={},end:i={}}=t,{cap:s=!0}=r,{cap:l=!0}=i;lp(!r.taper&&!i.taper,"cap taper not supported here"),lp(!r.easing&&!i.easing,"cap easing not supported here"),lp(s&&l,"cap must be true");const u=XO(e,t);FO(u,t);const d=PO(u);let h="";for(const p of d)h+=VO(p,t);return h}function PO(e){if(e.length<=2)return[e];const t=[];let r=[e[0]],i=V.Sub(e[1].point,e[0].point).uni(),s,l,u,d,h;for(let p=1,y=e.length;p<y-1;p++){if(u=e[p-1],d=e[p],h=e[p+1],s=V.Sub(h.point,d.point).uni(),l=V.Dpr(i,s),i=s,l<-.8){const g={...d,point:d.input};r.push(g),t.push(dp(r)),r=[g];continue}if(r.push(d),!(l>.7)&&(V.Dist2(u.point,d.point)+V.Dist2(d.point,h.point))/((u.radius+d.radius+h.radius)/3)**2<1.5){r.push(d),t.push(dp(r)),r=[d];continue}}return r.push(e[e.length-1]),t.push(dp(r)),t}function dp(e){const t=e[0];let r;for(;e.length>2&&(r=e[1],V.Dist2(t.point,r.point)<((t.radius+r.radius)/2*.5)**2);)e.splice(1,1);const i=e[e.length-1];let s;for(;e.length>2&&(s=e[e.length-2],V.Dist2(i.point,s.point)<((i.radius+s.radius)/2*.5)**2);)e.splice(e.length-2,1);return e.length>1&&(e[0]={...e[0],vector:V.Sub(e[0].point,e[1].point).uni()},e[e.length-1]={...e[e.length-1],vector:V.Sub(e[e.length-2].point,e[e.length-1].point).uni()}),e}function GO(e,t,r){return"M "+e+" "+t+" m -"+r+", 0 a "+r+","+r+" 0 1,1 "+r*2+",0 a "+r+","+r+" 0 1,1 -"+r*2+",0"}function VO(e,t={}){if(e.length===0)return"";if(e.length===1)return GO(e[0].point.x,e[0].point.y,e[0].radius);const{left:r,right:i}=IO(e,t);i.reverse();let s=`M${zs(r[0])}T`;for(let l=1;l<r.length;l++)s+=a1(r[l-1],r[l]);{const l=e[e.length-1],u=l.radius,d=l.vector.clone().per().neg(),h=V.Add(l.point,V.Mul(d,u)),p=V.Add(l.point,V.Mul(d,-u));s+=`${zs(h)}A${va(u)},${va(u)} 0 0 1 ${zs(p)}T`}for(let l=1;l<i.length;l++)s+=a1(i[l-1],i[l]);{const l=e[0],u=l.radius,d=l.vector.clone().per(),h=V.Add(l.point,V.Mul(d,u)),p=V.Add(l.point,V.Mul(d,-u));s+=`${zs(h)}A${va(u)},${va(u)} 0 0 1 ${zs(p)}Z`}return s}function s1(e,t,r,i=s=>s){return e*i(.5-t*(.5-r))}function QO(e){return[-e[0],-e[1]]}function Bn(e,t){return[e[0]+t[0],e[1]+t[1]]}function An(e,t){return[e[0]-t[0],e[1]-t[1]]}function In(e,t){return[e[0]*t,e[1]*t]}function WO(e,t){return[e[0]/t,e[1]/t]}function Rs(e){return[e[1],-e[0]]}function l1(e,t){return e[0]*t[0]+e[1]*t[1]}function ZO(e,t){return e[0]===t[0]&&e[1]===t[1]}function KO(e){return Math.hypot(e[0],e[1])}function JO(e){return e[0]*e[0]+e[1]*e[1]}function c1(e,t){return JO(An(e,t))}function D2(e){return WO(e,KO(e))}function eA(e,t){return Math.hypot(e[1]-t[1],e[0]-t[0])}function Ds(e,t,r){let i=Math.sin(r),s=Math.cos(r),l=e[0]-t[0],u=e[1]-t[1],d=l*s-u*i,h=l*i+u*s;return[d+t[0],h+t[1]]}function dm(e,t,r){return Bn(e,In(An(t,e),r))}function u1(e,t,r){return Bn(e,In(t,r))}var{min:to,PI:tA}=Math,d1=.275,js=tA+1e-4;function nA(e,t={}){let{size:r=16,smoothing:i=.5,thinning:s=.5,simulatePressure:l=!0,easing:u=O=>O,start:d={},end:h={},last:p=!1}=t,{cap:y=!0,easing:g=O=>O*(2-O)}=d,{cap:w=!0,easing:b=O=>--O*O*O+1}=h;if(e.length===0||r<=0)return[];let S=e[e.length-1].runningLength,T=d.taper===!1?0:d.taper===!0?Math.max(r,S):d.taper,M=h.taper===!1?0:h.taper===!0?Math.max(r,S):h.taper,_=Math.pow(r*i,2),C=[],A=[],U=e.slice(0,10).reduce((O,R)=>{let Y=R.pressure;if(l){let N=to(1,R.distance/r),H=to(1,1-N);Y=to(1,O+(H-O)*(N*d1))}return(O+Y)/2},e[0].pressure),D=s1(r,s,e[e.length-1].pressure,u),P,G=e[0].vector,ee=e[0].point,ne=ee,ue=ee,se=ne,ae=!1;for(let O=0;O<e.length;O++){let{pressure:R}=e[O],{point:Y,vector:N,distance:H,runningLength:W}=e[O];if(O<e.length-1&&S-W<3)continue;if(s){if(l){let Le=to(1,H/r),It=to(1,1-Le);R=to(1,U+(It-U)*(Le*d1))}D=s1(r,s,R,u)}else D=r/2;P===void 0&&(P=D);let J=W<T?g(W/T):1,te=S-W<M?b((S-W)/M):1;D=Math.max(.01,D*Math.min(J,te));let ie=(O<e.length-1?e[O+1]:e[O]).vector,re=O<e.length-1?l1(N,ie):1,ge=l1(N,G)<0&&!ae,de=re!==null&&re<0;if(ge||de){let Le=In(Rs(G),D);for(let It=1/13,tn=0;tn<=1;tn+=It)ue=Ds(An(Y,Le),Y,js*tn),C.push(ue),se=Ds(Bn(Y,Le),Y,js*-tn),A.push(se);ee=ue,ne=se,de&&(ae=!0);continue}if(ae=!1,O===e.length-1){let Le=In(Rs(N),D);C.push(An(Y,Le)),A.push(Bn(Y,Le));continue}let Te=In(Rs(dm(ie,N,re)),D);ue=An(Y,Te),(O<=1||c1(ee,ue)>_)&&(C.push(ue),ee=ue),se=Bn(Y,Te),(O<=1||c1(ne,se)>_)&&(A.push(se),ne=se),U=R,G=N}let ye=e[0].point.slice(0,2),we=e.length>1?e[e.length-1].point.slice(0,2):Bn(e[0].point,[1,1]),_e=[],E=[];if(e.length===1){if(!(T||M)||p){let O=u1(ye,D2(Rs(An(ye,we))),-(P||D)),R=[];for(let Y=1/13,N=Y;N<=1;N+=Y)R.push(Ds(O,ye,js*2*N));return R}}else{if(!(T||M&&e.length===1))if(y)for(let R=1/13,Y=R;Y<=1;Y+=R){let N=Ds(A[0],ye,js*Y);_e.push(N)}else{let R=An(C[0],A[0]),Y=In(R,.5),N=In(R,.51);_e.push(An(ye,Y),An(ye,N),Bn(ye,N),Bn(ye,Y))}let O=Rs(QO(e[e.length-1].vector));if(M||T&&e.length===1)E.push(we);else if(w){let R=u1(we,O,D);for(let Y=1/29,N=Y;N<1;N+=Y)E.push(Ds(R,we,js*3*N))}else E.push(Bn(we,In(O,D)),Bn(we,In(O,D*.99)),An(we,In(O,D*.99)),An(we,In(O,D)))}return C.concat(E,A.reverse(),_e)}function rA(e,t={}){var r;let{streamline:i=.5,size:s=16,last:l=!1}=t;if(e.length===0)return[];let u=.15+(1-i)*.85,d=Array.isArray(e[0])?e:e.map(({x:b,y:S,pressure:T=.5})=>[b,S,T]);if(d.length===2){let b=d[1];d=d.slice(0,-1);for(let S=1;S<5;S++)d.push(dm(d[0],b,S/4))}d.length===1&&(d=[...d,[...Bn(d[0],[1,1]),...d[0].slice(2)]]);let h=[{point:[d[0][0],d[0][1]],pressure:d[0][2]>=0?d[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,y=0,g=h[0],w=d.length-1;for(let b=1;b<d.length;b++){let S=l&&b===w?d[b].slice(0,2):dm(g.point,d[b],u);if(ZO(g.point,S))continue;let T=eA(S,g.point);if(y+=T,b<w&&!p){if(y<s)continue;p=!0}g={point:S,pressure:d[b][2]>=0?d[b][2]:.5,vector:D2(An(g.point,S)),distance:T,runningLength:y},h.push(g)}return h[0].vector=((r=h[1])==null?void 0:r.vector)||[0,0],h}function aA(e,t={}){return nA(rA(e,t),t)}var f1=aA;function iA(e,t){for(let r=e.length-1;r>=0;r--)if(t(e[r]))return{i:r};return null}function oA(e,t){const r=t.filter(i=>i.type==="guess"||i.type==="new-word"||i.type==="choosing-word");return r.length!==e.length?r:e}function sA({$renderMode:e,$allRoomEvents:t,$currentLine:r}){const i=Ve(),s=ko(i,$O),l=Ve(),u=t.map(g=>{const w=iA(g,S=>S.type==="new-word");if(!w)return[];const b=[];return g.slice(w.i).forEach(S=>{S.type==="line"?b.push(S):S.type==="undo"&&b.pop()}),b}),d=Qn(u,e,s,(g,w,b)=>{const S=[];return g.forEach(T=>{const M=o1(As(T.dots).map(C=>new V(C[0],C[1])),{size:T.width}),_=r1(f1(As(T.dots),{...b,size:T.width}));S.push({d:w==="tldraw"?M:_,color:T.color})}),S}),h=Qn(r,e,s,(g,w,b)=>{if(g.dots.length===0)return null;let S=Date.now();const T=o1(As(g.dots).map(U=>new V(U[0],U[1])),{size:g.width});let M=Date.now()-S,_=Date.now();const C=r1(f1(As(g.dots),{...b,size:g.width}));let A=Date.now()-_;return{d:w==="tldraw"?T:C,color:g.color,perf:{oldTime:A,newTime:M}}}),p=u,y=Qn(u,g=>{const w=[];return g.forEach((b,S)=>{const M=As(b.dots).map(([_,C])=>`${_},${C}`).join(" ");w.push({points:M,color:b.color,strokeWidth:b.width})}),w});return l.watch(()=>{Se.transact(Se.tx.roomEvent[et()].create({it:{type:"undo"}}).link({party:fr.getState()}))}),{$svgCanvasPaths:d,$svgCurrentLine:h,$rawPath:p,$polylinePaths:y,undoClicked:l,$smoothConf:s,setSmoothConf:i}}const j2=Ve(),Kn=ko(j2,"");Se.getLocalId("guest").then(e=>j2(e));P2();const U2=Ve(),xo=ko(U2,{gameState:{drawing:""},name:"",id:""}),lA=Ve(),fr=ko(lA,CO),L2=Ve(),cA=ko(L2,{id:"",localId:"",name:"",avatar:""}),ad=vn([]),fm=vn([]);li({source:fm,clock:ad,fn:(e,t)=>oA(e,t),target:fm});const Eo=Qn(ad,e=>AO(e,["foo"],{lang:"RU",rounds:1e3,suggestions:3,canvasSize:600},"foo|bar|baz")),id=Qn(Eo,Kn,([{state:e}],t)=>e.state==="drawing"&&e.playerId===t?e.word:""),uA=Qn(Eo,Kn,([{state:e}],t)=>e.state==="drawing"&&e.revealed.find(r=>r.playerId===t)?e.word:""),dA=Qn(Eo,Kn,([{state:e}],t)=>e.state==="drawing"?e.word.replace(/\S/g,"_"):null),fA=Qn(Eo,Kn,([{state:e}],t)=>e.state==="choosing-word"?e.words.split("|"):null),{currentLineChanged:h1,$currentLine:Uu,addLine:hA,lineStarted:pA,lineExtended:mA}=CA(fr,id),ug=vn("tldraw"),{undoClicked:gA,$svgCanvasPaths:vA,$rawPath:yA,$polylinePaths:bA,$svgCurrentLine:wA}=sA({$allRoomEvents:ad,$renderMode:ug,$currentLine:Uu}),$2=vn(!1),xA=Ve(),_A=Ve(),H2=Ve(),q2=Ve(),I2=Ve(),Y2=Ve(),B2=Ve(),X2=Ve();li({source:[Kn,xo],clock:H2,fn:([e,t])=>({...t,gameState:{...t.gameState,drawing:e}}),target:xo});ad.on(X2,(e,{history:t})=>t);ug.on(xA,(e,t)=>t);$2.on(_A,(e,t)=>t);nd(fr,e=>e?Se.subscribeQuery({party:{$:{where:{id:e}},players2:{}}},t=>{var r;t.error&&console.error(t.error),(r=t.data)!=null&&r.party[0]?U2(t.data.party[0]):console.error(`No room with "${e}" id`)}):()=>{});nd(fr,e=>e?Se.subscribeQuery({roomEvent:{$:{where:{party:e},order:{serverCreatedAt:"asc"}}}},t=>{t.error&&console.error(t.error),t.data&&(console.log(t.data.roomEvent),X2({history:t.data.roomEvent.map(r=>r.it)}))}):()=>{});li({source:[Kn,fr,Eo],clock:Y2,fn:(e,t)=>[e,t]}).watch(([[e,t,[r]],{guess:i}])=>{const s={type:"guess",text:i,player:e,isRevealed:A2(r.state.word,i)};Se.transact(Se.tx.roomEvent[et()].create({it:s}).link({party:t}))});li({source:[Kn,fr,cg],clock:q2}).watch(([e,t,r])=>{const i={type:"choosing-word",playerId:e,words:[Os(r).word,Os(r).word,Os(r).word,Os(r).word,Os(r).word].join("|")};Se.transact(Se.tx.roomEvent[et()].create({it:i}).link({party:t}))});li({source:[Kn,fr],clock:I2,fn:(e,t)=>[e,t]}).watch(([[e,t],r])=>{const i={type:"new-word",playerId:e,word:r};Se.transact(Se.tx.roomEvent[et()].create({it:i}).link({party:t}))});B2.watch(async()=>{const{roomEvent:e}=await Se.queryOnce({roomEvent:{$:{where:{party:fr.getState()}}}}).then(t=>t.data);console.log("DELETE"),console.log(e),e.length>0&&Se.transact(e.map(t=>Se.tx.roomEvent[t.id].delete()))});li({source:xo,clock:H2}).watch(e=>{Se.transact(Se.tx.party[e.id].update({gameState:{...e.gameState,drawing:e.gameState.drawing}}))});async function SA(e){const t=et();await Se.transact([Se.tx.party[t].create({name:e,players:[],gameState:{drawing:""}}),Se.tx.curretLine[t].create({dots:[],width:8,color:"#34495e"}).link({party:t})])}async function F2(e){const t=await Se.getLocalId("guest");return await Se.transact([Se.tx.players[t].update({name:e,localId:t,avatar:""})])}async function TA(e){const t=await Se.getLocalId("guest");return await Se.transact([Se.tx.players[t].link({parties:e})])}async function kA(e){const t=await Se.getLocalId("guest");return await Se.transact([Se.tx.players[t].unlink({parties:e})])}async function P2(e=3){if(e<0)throw new Error("Can't get user");const t=await Se.getLocalId("guest"),r=await Se.queryOnce({players:{$:{where:{id:t}}}}).then(s=>s.data.players[0]);if(r)return r;const i=zO();return await F2(i),P2(e-1)}nd(Kn,e=>e?Se.subscribeQuery({players:{$:{where:{id:e}}}},t=>{if(t.error&&console.error(t.error),t.data){const r=t.data.players[0];L2(r)}}):()=>{});async function EA(){throw new Error("Not implemented")}function CA(e,t){const r=vn(""),i=vn({dots:[],color:R2[1],width:Ys[1]}),s=Ve(),l=Ve(),u=Ve(),d=Ve(),h=Ve();r.on(d,(y,g)=>g),i.on(s,(y,g)=>({...y,...g})).on(l,(y,g)=>({...y,dots:[g]})).on(u,(y,g)=>({...y,dots:[...y.dots,g]})).on(h,y=>({...y,dots:[]}));let p=!1;return Qn([i,t,r]).watch(([y,g,w])=>{if(g&&w){if(p)return;p=!0,Se.transact(Se.tx.curretLine[w].update({width:y.width,dots:y.dots,color:y.color})).finally(()=>{p=!1})}}),nd(e,y=>y?Se.subscribeQuery({party:{$:{where:{id:y}},currentLine:{}}},g=>{if(g.error&&console.error(g.error),g.data){const w=g.data.party[0];w!=null&&w.currentLine&&(d(w.currentLine.id),t.getState()||s(w.currentLine))}}):()=>{}),h.watch(y=>{Se.transact(Se.tx.roomEvent[et()].create({it:{type:"line",dots:y.dots,color:y.color,width:y.width}}).link({party:e.getState()}))}),{$currentLine:i,currentLineChanged:s,addLine:h,lineStarted:l,lineExtended:u}}function MA(){const e=st(cA);return F.jsxs("div",{style:{padding:"20px",display:"grid",alignContent:"center",gap:"16px"},children:[e&&e.name&&F.jsx(AA,{name:e.name}),F.jsx(NA,{}),F.jsx(OA,{}),F.jsx("a",{href:rd("?words"),children:"Слова"})]})}function NA(){const e=st(O2);return F.jsxs("div",{children:[F.jsx("h2",{children:"All Parties"}),e.length===0?F.jsx("p",{children:"No parties found"}):F.jsx("ul",{style:{listStyle:"none",padding:0},children:e.map(t=>{var i;const r=((i=t.players2)==null?void 0:i.length)||0;return F.jsx("li",{style:{marginBottom:"10px"},children:F.jsxs("a",{href:rd("?"+t.id),children:[t.name," (игроков: ",r,")"]})},t.id)})})]})}function OA(){const[e,t]=pt.useState(""),[r,i]=pt.useState(!1),s=async()=>{if(e.trim()){i(!0);try{await SA(e.trim()),t("")}catch(l){console.error("Failed to create party:",l)}finally{i(!1)}}};return F.jsxs("form",{style:{margin:"8px 0",display:"grid",gridTemplateColumns:"1fr min-content",gap:"8px",maxWidth:"300px"},onSubmit:l=>{l.preventDefault(),s()},children:[F.jsx("input",{type:"text",value:e,onChange:l=>t(l.target.value),disabled:r}),F.jsx("button",{type:"submit",disabled:!e.trim()||r,children:r?"Создаю...":"Создать"})]})}function AA(e){const[t,r]=pt.useState(e.name),[i,s]=pt.useState(!1),l=async()=>{if(t.trim()){s(!0);try{await F2(t.trim()),r(t.trim())}catch(u){console.error(u)}finally{s(!1)}}};return F.jsxs("div",{children:[F.jsx("p",{children:"Имя"}),F.jsxs("form",{style:{margin:"8px 0",display:"grid",gridTemplateColumns:"1fr min-content",gap:"8px",maxWidth:"300px"},onSubmit:u=>{u.preventDefault(),l()},children:[F.jsx("input",{type:"text",value:t,onChange:u=>r(u.target.value),disabled:i}),F.jsx("button",{type:"submit",disabled:!t.trim()||i||t===e.name,children:"Сохранить"})]})]})}function fp(e){const r=document.querySelector("#player-canvas").getBoundingClientRect(),i=cm/r.width;if("touches"in e){const s=e.touches[0]||e.changedTouches[0];return{x:(s.clientX-r.left)*i,y:(s.clientY-r.top)*i}}else return{x:(e.clientX-r.left)*i,y:(e.clientY-r.top)*i}}function zA(){const[e,t]=pt.useState(!1),r=st(id),i=st(Uu),s=st($2),l=h=>{if(!r)return;h.preventDefault();const{x:p,y}=fp(h);pA([p,y]),t(!0)},u=h=>{if(!r||!e)return;h.preventDefault();const{x:p,y}=fp(h);mA([p,y])},d=h=>{if(!r||!e)return;h&&h.preventDefault();const{x:p,y}=fp(h);hA({dots:[...i.dots,[p,y]],color:i.color,width:i.width}),t(!1)};return F.jsx("div",{style:{margin:"0 auto",maxWidth:"500px",maxHeight:"100%",height:"auto",aspectRatio:"1 / 1",display:"flex",justifyContent:"center",background:"#f6eee2"},children:F.jsxs("svg",{id:"player-canvas",onMouseDown:l,onMouseMove:u,onMouseUp:d,onMouseLeave:d,onTouchStart:l,onTouchMove:u,onTouchEnd:d,onTouchCancel:d,viewBox:`0 0 ${cm} ${cm}`,style:{touchAction:"none",border:"2px dashed #ccc",cursor:"crosshair",aspectRatio:"1 / 1"},children:[!1,F.jsx(RA,{}),F.jsx(DA,{}),s&&F.jsx(jA,{})]})})}const RA=pt.memo(()=>{const e=st(vA),t=st(bA);return st(ug)==="polyline"?t.map((i,s)=>F.jsx("polyline",{points:i.points,stroke:i.color,strokeWidth:i.strokeWidth,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},"ExistingPolylines"+s)):e.map((i,s)=>F.jsx("path",{d:i.d,fill:i.color},"ExistingLines"+s))}),DA=pt.memo(()=>{const e=st(wA);return e?[F.jsxs("text",{x:"10",y:"15",children:["newTime: ",e.perf.newTime]}),F.jsxs("text",{x:"10",y:"35",children:["oldTime: ",e.perf.oldTime]}),F.jsx("path",{d:e.d,fill:e.color})]:null}),jA=pt.memo(()=>st(yA).map((t,r)=>F.jsxs("g",{children:[F.jsx("polyline",{points:t.map(([i,s])=>`${i},${s}`).join(" ")||"",stroke:"white",strokeWidth:2,strokeDasharray:"2,5",fill:"none"}),t.map(([i,s],l)=>F.jsx("circle",{cx:i,cy:s,r:1,fill:`hsl(0, 70%, ${l%5*10+30}%)`},`${r}-${l}`))]},"debug"+r)));function UA(){const[e,t]=pt.useState(!0),r=st(Kn),i=st(xo);return F.jsxs("div",{children:[F.jsxs("button",{onClick:()=>t(!e),children:["Dev ",e?"▼":"▲"]}),!e&&F.jsxs("div",{children:[F.jsx("div",{children:F.jsx("a",{href:"https://joxter.github.io/scribble/",target:"_blank",children:"website"})}),F.jsxs("p",{children:["localId: ",r]}),F.jsxs("div",{children:[F.jsx("button",{onClick:B2,children:"Удалить все сообщения"}),F.jsx("br",{}),F.jsx("br",{}),F.jsx("button",{onClick:EA,children:"перезагрузить всю комнату"})]}),F.jsx("pre",{style:{maxWidth:"300px"},children:JSON.stringify(i,null,2)})]})]})}const p1=4;function LA({value:e,onChange:t}){const r=Ys.indexOf(e),i=Math.max(...Ys);let s=r*i+p1*r;return F.jsxs("div",{style:{display:"inline-flex",gap:"4px",position:"relative",height:"32px",backgroundColor:"#eee",borderRadius:"16px",cursor:"pointer",padding:"4px",boxShadow:"0 0px 4px rgba(0,0,0,0.1)",overflow:"hidden"},children:[F.jsx("div",{style:{position:"absolute",left:s+"px",display:"flex",top:"0px",width:r===Ys.length-1?i+10+"px":i+4+"px",height:"100%",backgroundColor:"#007bff"}}),F.jsx("div",{style:{display:"flex",gap:p1+"px",position:"relative",width:"100%"},children:Ys.map(l=>F.jsx("div",{onClick:()=>t(l),style:{display:"flex",width:i+"px",height:i+"px"},children:F.jsx("div",{style:{margin:"auto",width:`${l}px`,height:`${l}px`,backgroundColor:l===e?"#555":"#666",borderRadius:"50%"}})},l))})]})}const $A="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M29%2023C29%2023.2652%2028.8946%2023.5196%2028.7071%2023.7071C28.5196%2023.8946%2028.2652%2024%2028%2024C27.7348%2024%2027.4804%2023.8946%2027.2929%2023.7071C27.1054%2023.5196%2027%2023.2652%2027%2023C26.9997%2020.8246%2026.3545%2018.6981%2025.1457%2016.8894C23.937%2015.0807%2022.2192%2013.671%2020.2093%2012.8386C18.1995%2012.0061%2015.988%2011.7883%2013.8544%2012.2126C11.7208%2012.6369%209.76087%2013.6844%208.2225%2015.2225L5.425%2018H11C11.2652%2018%2011.5196%2018.1053%2011.7071%2018.2929C11.8946%2018.4804%2012%2018.7348%2012%2019C12%2019.2652%2011.8946%2019.5196%2011.7071%2019.7071C11.5196%2019.8946%2011.2652%2020%2011%2020H3C2.73478%2020%202.48043%2019.8946%202.29289%2019.7071C2.10536%2019.5196%202%2019.2652%202%2019V11C2%2010.7348%202.10536%2010.4804%202.29289%2010.2929C2.48043%2010.1053%202.73478%209.99999%203%209.99999C3.26522%209.99999%203.51957%2010.1053%203.70711%2010.2929C3.89464%2010.4804%204%2010.7348%204%2011V16.5962L6.81%2013.805C8.62837%2011.9876%2010.9448%2010.7501%2013.4664%2010.249C15.988%209.74799%2018.6015%2010.0059%2020.9765%2010.99C23.3516%2011.9742%2025.3815%2013.6405%2026.8097%2015.7782C28.2378%2017.9159%2029%2020.4291%2029%2023Z'%20fill='%23343330'/%3e%3c/svg%3e",m1=28,HA=8;function qA({value:e,onChange:t}){return F.jsx("div",{style:{flexWrap:"wrap",display:"flex",gap:HA+"px",justifyContent:"space-between"},children:R2.map((r,i)=>F.jsx("button",{onClick:()=>t(r),style:{width:m1+"px",height:m1+"px",border:i===2||i===3?"1px solid #333":"none",borderRadius:"100%",padding:"0",backgroundColor:r,cursor:"pointer",boxShadow:r===e?"0 0 0 2px #fff, 0 0 0 5px rgb(0, 123, 255)":"none"}},r))})}function IA(){const e=Ow(Uu,r=>r.width),t=Ow(Uu,r=>r.color);return F.jsxs("div",{style:{display:"grid",alignContent:"start",padding:"8px",gap:"12px"},children:[F.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between"},children:[F.jsx("button",{onClick:gA,children:F.jsx("img",{style:{width:"20px"},src:$A})}),F.jsx(LA,{value:e,onChange:r=>h1({width:r})})]}),F.jsx("div",{children:F.jsx(qA,{value:t,onChange:r=>h1({color:r})})})]})}const YA="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M28.4138%209.17122L22.8288%203.58497C22.643%203.39921%2022.4225%203.25185%2022.1799%203.15131C21.9372%203.05077%2021.6771%202.99902%2021.4144%202.99902C21.1517%202.99902%2020.8916%203.05077%2020.6489%203.15131C20.4062%203.25185%2020.1857%203.39921%2020%203.58497L4.58626%2019C4.39973%2019.185%204.25185%2019.4053%204.15121%2019.648C4.05057%2019.8907%203.99917%2020.151%204.00001%2020.4137V26C4.00001%2026.5304%204.21072%2027.0391%204.5858%2027.4142C4.96087%2027.7893%205.46958%2028%206.00001%2028H11.5863C11.849%2028.0008%2012.1093%2027.9494%2012.352%2027.8488C12.5947%2027.7481%2012.815%2027.6002%2013%2027.4137L28.4138%2012C28.5995%2011.8142%2028.7469%2011.5937%2028.8474%2011.3511C28.948%2011.1084%2028.9997%2010.8483%2028.9997%2010.5856C28.9997%2010.3229%2028.948%2010.0628%2028.8474%209.82012C28.7469%209.57744%2028.5995%209.35695%2028.4138%209.17122ZM6.41376%2020L17%209.41372L19.0863%2011.5L8.50001%2022.085L6.41376%2020ZM6.00001%2022.4137L9.58626%2026H6.00001V22.4137ZM12%2025.5862L9.91376%2023.5L20.5%2012.9137L22.5863%2015L12%2025.5862ZM24%2013.5862L18.4138%207.99997L21.4138%204.99997L27%2010.585L24%2013.5862Z'%20fill='%23343330'/%3e%3c/svg%3e";function BA(){var h;const e=st(xo),t=st(Kn),r=st(O2),i=st(fr),[s]=st(Eo),l=e.players2||[],u=!!l.find(p=>p.localId===t),d=s.state.state==="drawing"?s.state.playerId:"";return F.jsxs("div",{children:[F.jsxs("p",{children:['Комната "',(h=r.find(p=>p.id===i))==null?void 0:h.name,'" ',F.jsx("br",{}),u?F.jsx("button",{type:"button",onClick:()=>{kA(e.id)},children:"уйти"}):F.jsx("button",{type:"button",onClick:()=>{TA(e.id)},children:"зайти"})]}),F.jsxs("div",{style:{display:"grid",alignContent:"start",gap:"4px"},children:[l.length===0?F.jsx("p",{children:"никого нет"}):null,l==null?void 0:l.map(p=>{const y=p.id===d;return F.jsxs("div",{style:{padding:"8px 12px",borderRadius:"4px",backgroundColor:"#fff",color:"#333",border:"1px solid #ddd"},children:[p.name," ",y&&F.jsx("img",{src:YA,style:{width:"18px"}})]},p.id)})]})]})}const XA="_page_96w0a_2",FA="_header_96w0a_31",PA="_headerContent_96w0a_35",GA="_canvasSection_96w0a_42",VA="_footer_96w0a_48",QA="_players_96w0a_56",no={page:XA,header:FA,headerContent:PA,canvasSection:GA,footer:VA,players:QA};function WA({revealed:e,clue:t}){const[r,i]=pt.useState(""),s=u=>{u.preventDefault(),Y2({guess:r.trim()}),i("")},l=u=>{i(u.target.value)};return t.split(" ").map(u=>u.length).join(" "),F.jsx("form",{onSubmit:s,children:F.jsxs("div",{style:{display:"grid",gridTemplateColumns:e?"1fr min-content":`calc(${t.length*10}px + ${(t.length-1)*3}px + 10px) min-content`,gap:"0px 8px",fontFamily:"monospace",letterSpacing:"2px"},children:[F.jsx("p",{style:{padding:"0 4px",color:e?"green":"initial",textAlign:e?"center":"initial"},children:e?e+"!":t}),F.jsx("div",{}),F.jsx("div",{children:F.jsx("input",{type:"text",value:r,onChange:l,style:{outline:"none",width:"100%",font:"inherit",fontFamily:"inherit",letterSpacing:"inherit"}})}),F.jsx("button",{type:"submit",children:"OK"})]})})}function ZA(e){const t=pt.useRef(null);return pt.useEffect(()=>{t.current&&t.current.scrollTo({top:t.current.scrollHeight,behavior:"smooth"})},[e]),t}function KA(){const[e,{players2:t}]=st([fm,xo]),r=ZA(e),i=Object.fromEntries((t||[]).map(s=>[s.id,s.name]));return F.jsx("div",{ref:r,style:{display:"grid",alignContent:"start",gap:"4px",padding:"4px",paddingRight:"12px",borderRadius:"4px",backgroundColor:"#fff",color:"#333",border:"1px solid #ddd",overflow:"auto",lineHeight:"1",fontSize:"14px",wordBreak:"break-word"},children:e.slice(-50).map((s,l)=>{const u=s.type+l;if(s.type==="guess"){let{text:d,player:h,isRevealed:p}=s;return p==="revealed"?F.jsx("p",{style:{fontStyle:"italic",color:"green"},children:F.jsxs("b",{children:[i[h]," отгадал слово!"]})},u):F.jsxs("p",{style:{},children:[F.jsxs("b",{children:[i[h],":"]})," ",d]},u)}if(s.type==="new-word"){let{word:d}=s;return F.jsxs("p",{style:{fontStyle:"italic"},children:["Слово выбрано!"," ",F.jsxs("b",{style:{letterSpacing:"2px"},children:[d.replace(/\S/g,"_")," (",d.split(" ").map(h=>h.length).join(" "),")"]})]},u)}if(s.type==="choosing-word"){let{playerId:d}=s;return F.jsxs("p",{style:{fontStyle:"italic"},children:[i[d]," выбирает слово"]},u)}return F.jsxs("p",{style:{color:"#888"},children:["[",s.type,"]"]},u)})})}function JA(){const[e,t]=pt.useState(0),r=pt.useRef(0),i=pt.useRef(performance.now()),s=pt.useRef(0);return pt.useEffect(()=>{const l=()=>{const u=performance.now();if(r.current++,u-i.current>=1e3){const d=Math.round(r.current*1e3/(u-i.current));t(d),r.current=0,i.current=u}s.current=requestAnimationFrame(l)};return s.current=requestAnimationFrame(l),()=>{s.current&&cancelAnimationFrame(s.current)}},[]),F.jsxs("div",{style:{position:"fixed",top:"10px",right:"10px",backgroundColor:"#fff",color:"#333",border:"1px solid #333",padding:"2px 4px",borderRadius:"4px",fontSize:"14px",fontFamily:"monospace",zIndex:1e3,userSelect:"none"},children:[e," FPS"]})}function e6(){const[e,t,r,i]=st([id,fA,dA,uA]);return F.jsxs("div",{className:no.page,children:[F.jsx("div",{className:no.header,children:F.jsxs("div",{className:no.headerContent,children:[F.jsx("a",{href:rd(),children:"Главная"}),e&&F.jsx("h2",{children:e}),F.jsx(JA,{})]})}),F.jsx("div",{className:no.canvasSection,children:t?F.jsx("div",{style:{width:"100%",aspectRatio:"1"},children:F.jsx(t6,{words:t})}):F.jsx(zA,{})}),F.jsxs("div",{className:no.footer,children:[e&&F.jsx(IA,{}),!e&&r&&F.jsx("div",{style:{padding:"4px 12px"},children:F.jsx("div",{style:{display:"flex",justifyContent:"center"},children:F.jsx(WA,{clue:r,revealed:i})})}),F.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:F.jsx(UA,{})})]}),F.jsxs("div",{className:no.players,children:[F.jsx(BA,{}),F.jsx(n6,{}),F.jsx(KA,{})]})]})}function t6({words:e}){return F.jsx("div",{style:{backgroundColor:"#ddd",height:"100%",display:"flex",gap:"8px",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:e.map((t,r)=>F.jsx("button",{type:"button",onClick:()=>I2(t),children:t},r))})}function n6(){return st(id),F.jsx("div",{style:{},children:F.jsx("button",{onClick:q2,children:"выбрать слово"})})}const r6=["домино","стрэй кидс","феликс","бан чан","лино","лифт","концерт","скотч","дом","вода","лёд","квадрат","круг","карандаш","линейка","суши","рамён","дождь","играть","читать","учиться","дерево","растение","работать","сундук","майнкрафт","рисовать","кей-поп","акула","рыба","холод","свет","балкон","программист","пенал","мороженое","куб","лава","вулкан","кот","мяч","танцевать","урок","колонка","плавать","диплом","тюльпан","фото","чашка","кунг-фу","цирк","кролик","рокета","хранилище","семья","родители","ребёнок","мама","папа","счастье","космос","солнце","небо","корона","земля","флаг","королева","король","ворота","сердечко","пульт","маркер","ручка","рука","ножницы","кнопка","тетрадь","айпад","ниндзя","воздух","звук","единорог","телевизор","цветок","гусь","корея","Нидерланды"],a6=["кот","собака","птица","рыба","корова","лошадь","свинья","утка","курица","петух","тигр","лев","слон","жираф","медведь","волк","лиса","еж","кролик","коала","панда","кенгуру","обезьяна","змея","лягушка","крокодил","черепаха","дельфин","акула","кит","осьминог","краб","пингвин","страус","фламинго","орел","сова","воробей","голубь","аист","сурикат","бегемот","носорог","антилопа","яблоко","груша","банан","апельсин","лимон","арбуз","дыня","виноград","вишня","клубника","малина","ежевика","морковь","картошка","лук","чеснок","капуста","огурец","помидор","перец","тыква","баклажан","гриб","хлеб","пицца","бургер","суп","торт","мороженое","шоколад","печенье","конфета","чай","кофе","сок","вода","молоко","стол","стул","кровать","шкаф","диван","лампа","телевизор","компьютер","телефон","часы","зеркало","окно","дверь","книга","тетрадь","ручка","карандаш","кисть","краска","бутылка","стакан","тарелка","вилка","ложка","нож","чайник","сумка","рюкзак","шапка","куртка","пальто","ботинки","носки","перчатки","зонт","очки","дерево","куст","трава","цветок","роза","подсолнух","ромашка","тюльпан","лес","гора","река","озеро","море","пляж","остров","пещера","облако","солнце","луна","звезда","дождь","снег","молния","радуга","ветер","волна","машина","поезд","самолет","корабль","лодка","велосипед","мотоцикл","автобус","троллейбус","трамвай","метро","такси","ракета","вертолет","танк","трактор","грузовик","катер","учитель","врач","повар","пожарный","полицейский","солдат","строитель","фермер","летчик","моряк","шофер","художник","музыкант","писатель","рыбак","спортсмен","танцор","актёр","дом","замок","школа","магазин","церковь","мост","дорога","парк","площадь","фонтан","статуя","флаг","карта","шар","кукла","мяч","пирамидка","машинка","самокат","скейт","качели","горка","песочница","робот","ракета","кот","собака","птица","рыба","корова","лошадь","свинья","утка","курица","петух","тигр","лев","слон","жираф","медведь","волк","лиса","еж","кролик","коала","панда","кенгуру","обезьяна","змея","лягушка","крокодил","черепаха","дельфин","акула","кит","осьминог","краб","пингвин","страус","фламинго","орел","сова","воробей","голубь","аист","сурикат","бегемот","носорог","антилопа","яблоко","груша","банан","апельсин","лимон","арбуз","дыня","виноград","вишня","клубника","малина","ежевика","морковь","картошка","лук","чеснок","капуста","огурец","помидор","перец","тыква","баклажан","гриб","хлеб","пицца","бургер","суп","торт","мороженое","шоколад","печенье","конфета","чай","кофе","сок","вода","молоко","стол","стул","кровать","шкаф","диван","лампа","телевизор","компьютер","телефон","часы","зеркало","окно","дверь","книга","тетрадь"],i6=["кот","собака","дом","машина","дерево","солнце","луна","звезда","море","река","гора","лес","цветок","трава","небо","облако","дождь","снег","ветер","огонь","вода","земля","камень","песок","лед","пламя","дым","туман","радуга","молния","хлеб","молоко","мясо","рыба","яйцо","сыр","масло","сахар","соль","перец","яблоко","банан","апельсин","лимон","виноград","клубника","вишня","персик","груша","ананас","морковь","картофель","лук","чеснок","помидор","огурец","капуста","салат","редис","свекла","стол","стул","кровать","шкаф","диван","кресло","лампа","зеркало","часы","телевизор","компьютер","телефон","книга","ручка","карандаш","бумага","тетрадь","рюкзак","сумка","кошелек","рубашка","брюки","платье","юбка","куртка","пальто","шляпа","кепка","носки","туфли","сапоги","кроссовки","тапочки","перчатки","шарф","ремень","очки","часы","кольцо","серьги","автобус","поезд","самолет","корабль","велосипед","мотоцикл","грузовик","такси","метро","трамвай","врач","учитель","водитель","повар","продавец","строитель","художник","музыкант","актер","писатель","мама","папа","сын","дочь","брат","сестра","дедушка","бабушка","дядя","тетя","школа","университет","больница","магазин","ресторан","кафе","театр","кино","музей","парк","спорт","футбол","баскетбол","теннис","плавание","бег","йога","танцы","музыка","пение","гитара","пианино","скрипка","барабаны","флейта","труба","саксофон","микрофон","динамик","наушники","красный","синий","зеленый","желтый","черный","белый","серый","розовый","фиолетовый","оранжевый","большой","маленький","высокий","низкий","длинный","короткий","широкий","узкий","толстый","тонкий","быстрый","медленный","горячий","холодный","сухой","мокрый","чистый","грязный","новый","старый","один","два","три","четыре","пять","шесть","семь","восемь","девять","десять","понедельник","вторник","среда","четверг","пятница","суббота","воскресенье","день","ночь","утром","весна","лето","осень","зима","январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь","год","месяц","неделя","час","минута","секунда","время","часы","будильник","календарь","дата","праздник","день рождения","свадьба","любовь","дружба","семья","счастье","радость","грусть","злость","страх","удивление","смех","плач","улыбка","объятие","поцелуй","подарок","сюрприз","мечта","надежда","вера","удача","работа","отдых","игра","развлечение","хобби","путешествие","отпуск","выходные","каникулы","приключение","здоровье","болезнь","лекарство","витамины","спорт","диета","сон","усталость","энергия","сила","деньги","покупки","продажа","цена","скидка","банк","кредит","зарплата","бюджет","экономия","еда","завтрак","обед","ужин","кухня","рецепт","готовка","посуда","тарелка","чашка","нож","вилка","ложка","кастрюля","сковорода","духовка","холодильник","микроволновка","тостер","блендер","шоколад","конфеты","торт","печенье","мороженое","напиток","сок","чай","кофе","лимонад","пляж","отель","чемодан","билет","паспорт","фото","камера","видео","селфи","воспоминание","интернет","сайт","email","сообщение","чат","социальная сеть","блог","видеоблог","подписчик","лайк","фильм","сериал","актер","режиссер","сценарий","роль","премьера","билет","попкорн","3D","животное","птица","рыба","насекомое","млекопитающее","хищник","травоядное","дикое","домашнее","зоопарк","лев","тигр","слон","жираф","обезьяна","медведь","волк","лиса","заяц","белка","птица","орел","сова","попугай","воробей","голубь","ласточка","аист","пингвин","фламинго","акула","дельфин","кит","осьминог","краб","морская звезда","медуза","креветка","лосось","тунец","пчела","бабочка","муравей","паук","жук","комар","муха","стрекоза","кузнечик","божья коровка","роза","тюльпан","ромашка","подсолнух","лилия","орхидея","фиалка","гвоздика","пион","ирис","дуб","береза","сосна","ель","клен","липа","каштан","ива","тополь","рябина","футболист","теннисист","пловец","боксер","гимнаст","лыжник","хоккеист","баскетболист","велосипедист","бегун","стадион","спортзал","бассейн","корт","поле","каток","лыжня","беговая дорожка","тренажер","мяч","ракетка","клюшка","шайба","ворота","сетка","финиш","старт","медаль","кубок","чемпион","математика","физика","химия","биология","история","география","литература","русский язык","английский","информатика","урок","учебник","тетрадь","доска","мел","парта","класс","перемена","звонок","домашнее задание","оценка","экзамен","тест","контрольная","диктант","сочинение","презентация","проект","исследование","эксперимент","погода","прогноз","температура","градус","термометр","барометр","влажность","давление","ветер","буря","ясно","пасмурно","дождливо","снежно","туманно","солнечно","ветрено","прохладно","тепло","жарко","зонт","дождевик","солнцезащитные очки","крем от загара","шляпа от солнца","перчатки","варежки","шарф","шапка","сапоги","космос","планета","звезда","галактика","солнечная система","астронавт","ракета","спутник","телескоп","НЛО","Земля","Марс","Венера","Юпитер","Сатурн","Меркурий","Уран","Нептун","Плутон","комета","океан","континент","страна","город","деревня","столица","граница","карта","компас","GPS","Россия","Москва","Санкт-Петербург","Америка","Европа","Азия","Африка","Австралия","Антарктида","остров","церковь","храм","мечеть","синагога","монастырь","собор","колокол","крест","икона","свеча","праздник","Новый год","Рождество","Пасха","день рождения","свадьба","юбилей","выпускной","крестины","именины","подарок","торт","свечи","воздушные шары","фейерверк","конфетти","украшения","гирлянда","елка","Дед Мороз","больница","поликлиника","врач","медсестра","пациент","лечение","операция","таблетки","укол","рентген","стоматолог","окулист","кардиолог","хирург","терапевт","педиатр","психолог","ветеринар","фармацевт","скорая помощь","полиция","пожарные","спасатель","солдат","генерал","офицер","сержант","капитан","майор","полковник","суд","судья","адвокат","прокурор","свидетель","подозреваемый","обвиняемый","приговор","штраф","тюрьма","банк","банкир","кассир","счет","вклад","кредит","ипотека","процент","банкомат","карта","ресторан","кафе","бар","повар","официант","меню","заказ","счет","чаевые","кухня","отель","гостиница","номер","ключ","ресепшн","администратор","горничная","завтрак","обслуживание","бронирование","магазин","супермаркет","продавец","касса","чек","сдача","скидка","акция","распродажа","витрина","одежда","обувь","аксессуары","украшения","косметика","парфюм","сумка","кошелек","ремень","галстук","парикмахерская","салон красоты","стрижка","прическа","маникюр","педикюр","массаж","косметолог","визажист","стилист","театр","опера","балет","концерт","симфония","оркестр","дирижер","солист","хор","декорации","музей","галерея","выставка","экскурсия","гид","экспонат","картина","скульптура","археология","история","библиотека","книга","автор","писатель","поэт","роман","повесть","рассказ","стихи","сказка","газета","журнал","статья","интервью","репортаж","новости","журналист","редактор","типография","издательство","радио","телевидение","программа","ведущий","корреспондент","прямой эфир","запись","трансляция","канал","антенна","компьютер","ноутбук","планшет","смартфон","клавиатура","мышь","монитор","процессор","память","жесткий диск","программа","приложение","игра","файл","папка","документ","презентация","таблица","база данных","сайт","интернет","браузер","поиск","ссылка","домен","сервер","облако","загрузка","скачивание","обновление","email","сообщение","чат","видеозвонок","конференция","вебинар","стрим","подкаст","блог","влог","социальная сеть","профиль","друзья","подписчики","пост","фото","видео","лайк","комментарий","репост","игрушка","кукла","мишка","конструктор","пазл","настольная игра","карты","шахматы","шашки","домино","мяч","скакалка","велосипед","самокат","ролики","коньки","лыжи","сноуборд","кайт","воздушный змей","сад","огород","грядка","теплица","лейка","лопата","грабли","семена","рассада","урожай","дача","беседка","мангал","шашлык","пикник","костер","палатка","поход","рюкзак","спальный мешок","рыбалка","удочка","крючок","наживка","улов","лодка","сети","рыбак","озеро","пруд","охота","ружье","охотник","дичь","капкан","следы","лес","чаща","поляна","тропа","грибы","ягоды","корзина","нож","компас","карта","ориентирование","заблудиться","выход","тропинка","цирк","клоун","акробат","жонглер","фокусник","дрессировщик","арена","шапито","представление","номер","аттракцион","карусель","колесо обозрения","американские горки","батут","качели","горка","песочница","площадка","парк","зоопарк","вольер","клетка","кормление","экскурсия","смотритель","ветеринар","животное","хищник","травоядное","аквариум","рыбка","водоросли","ракушка","кораллы","фильтр","компрессор","корм","освещение","температура","террариум","змея","ящерица","черепаха","игуана","хамелеон","геккон","варан","питон","кобра","ферма","фермер","трактор","комбайн","плуг","борона","сеялка","жатка","силос","сено","коровник","свинарник","курятник","конюшня","овчарня","пастбище","загон","кормушка","поилка","доярка","корова","бык","теленок","свинья","поросенок","овца","баран","ягненок","коза","козленок","лошадь","жеребенок","пони","осел","мул","верблюд","олень","лось","кабан","бизон","курица","петух","цыпленок","утка","гусь","индейка","перепел","фазан","павлин","страус","мастерская","инструмент","молоток","гвоздь","винт","гайка","болт","отвертка","плоскогубцы","ключ","пила","дрель","шуруповерт","рубанок","стамеска","напильник","наждачка","уровень","рулетка","циркуль","строительство","фундамент","стены","крыша","окна","двери","лестница","балкон","терраса","веранда","кирпич","цемент","песок","щебень","арматура","бетон","раствор","штукатурка","краска","обои","электричество","проводка","розетка","выключатель","лампочка","светильник","люстра","торшер","настольная лампа","бра","водопровод","канализация","трубы","кран","смеситель","раковина","ванна","душ","унитаз","биде","отопление","батарея","радиатор","котел","трубы","термостат","камин","печь","дымоход","дрова","мебель","изготовление","дизайн","материал","дерево","металл","пластик","стекло","кожа","ткань","портной","швея","ателье","выкройка","ткань","нитки","иголка","булавка","ножницы","машинка","вышивка","вязание","спицы","крючок","пряжа","узор","петля","ряд","свитер","шарф","ювелир","золото","серебро","платина","драгоценный камень","алмаз","рубин","изумруд","сапфир","жемчуг","часовщик","механизм","циферблат","стрелки","пружина","маятник","будильник","секундомер","хронометр","таймер"],hm=[...r6,...a6,...i6];console.log("RU",hm.length,[...new Set(hm)].length);const o6="АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".split(""),s6="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");function l6(){const e=st(cg),[t,r]=pt.useState("RU"),[i,s]=pt.useState("А"),[l,u]=pt.useState(""),d=t==="RU"?o6:s6,h=e.filter(b=>b.lang===t&&b.word[0].toUpperCase().startsWith(i)),p=b=>{r(b),s(b==="RU"?"А":"A")},y=b=>{b.preventDefault(),jO(l,t).then(()=>{u("")}).catch(S=>{console.error(S),String(S.message).includes("is a unique attribute on")&&alert(`Слово "${l}" уже добавлено`)})},g=new Set(e.filter(b=>b.lang==="RU").map(b=>b.word)),w=[...new Set(hm)].filter(b=>!g.has(b)).slice(0,100);return F.jsxs("div",{style:{padding:"20px",display:"grid",gap:"20px"},children:[F.jsxs("div",{children:[F.jsx("a",{href:rd(),children:"Главная"}),F.jsx("h1",{children:"Все слова"})]}),w.length>0&&F.jsx("div",{children:F.jsxs("button",{onClick:()=>{UO(w).then(()=>{console.log(`Добавлено ${w.length} новых слов`)}).catch(b=>{console.error(b)})},children:["ADD ",F.jsx("b",{children:"RU"})," ",w.length]})}),F.jsx(c6,{selectedLang:t,onLangChange:p,totalWords:e.length}),F.jsx(u6,{selectedLang:t,newWord:l,onWordChange:u,onSubmit:y}),F.jsx(d6,{letters:d,selectedLetter:i,onLetterChange:s}),F.jsx(f6,{filteredWords:h,selectedLetter:i})]})}function c6({selectedLang:e,onLangChange:t,totalWords:r}){return F.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[F.jsx("button",{onClick:()=>t("RU"),style:{padding:"8px 16px",backgroundColor:e==="RU"?"#007bff":"#f8f9fa",color:e==="RU"?"white":"black",border:"1px solid #dee2e6",borderRadius:"4px",cursor:"pointer"},children:"RU"}),F.jsx("button",{onClick:()=>t("EN"),style:{padding:"8px 16px",backgroundColor:e==="EN"?"#007bff":"#f8f9fa",color:e==="EN"?"white":"black",border:"1px solid #dee2e6",borderRadius:"4px",cursor:"pointer"},children:"EN"}),F.jsx("p",{children:r})]})}function u6({selectedLang:e,newWord:t,onWordChange:r,onSubmit:i}){return F.jsx("div",{children:F.jsxs("form",{onSubmit:i,style:{display:"grid",gridTemplateColumns:"1fr 130px",gap:"4px",maxWidth:"300px"},children:[F.jsx("input",{type:"text",placeholder:"Слово",value:t,onChange:s=>r(s.target.value),style:{}}),F.jsxs("button",{type:"submit",disabled:!t.trim(),children:["Добавить ",e]})]})})}function d6({letters:e,selectedLetter:t,onLetterChange:r}){return F.jsx("div",{children:F.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:e.map(i=>F.jsx("button",{onClick:()=>r(i),style:{padding:"4px 8px",backgroundColor:t===i?"#007bff":"#f8f9fa",color:t===i?"white":"black",border:"1px solid #dee2e6",borderRadius:"4px",cursor:"pointer",minWidth:"30px"},children:i},i))})})}function f6({filteredWords:e,selectedLetter:t}){return F.jsxs("div",{children:[F.jsxs("h3",{children:["Слова на букву ",t," (",e.length,"):"]}),e.length===0?F.jsx("p",{children:"Нет слов"}):F.jsx("ul",{style:{paddingLeft:"15px"},children:e.map(r=>r.word).toSorted().map((r,i)=>F.jsx("li",{style:{},children:r},i))})]})}function h6(){const e=st(fr);return F.jsx("div",{style:{height:"100%"},children:e==="words"?F.jsx(l6,{}):e?F.jsx(e6,{}):F.jsx(MA,{})})}EC({enabled:!0});const p6=DC.createRoot(document.getElementById("app"));p6.render(F.jsx(h6,{}));
