function RT(e,t){for(var r=0;r<t.length;r++){const i=t[r];if(typeof i!="string"&&!Array.isArray(i)){for(const s in i)if(s!=="default"&&!(s in e)){const l=Object.getOwnPropertyDescriptor(i,s);l&&Object.defineProperty(e,s,l.get?l:{enumerable:!0,get:()=>i[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function r(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=r(s);fetch(s.href,l)}})();function dm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mh={exports:{}},Ts={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lb;function zT(){if(lb)return Ts;lb=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(i,s,l){var u=null;if(l!==void 0&&(u=""+l),s.key!==void 0&&(u=""+s.key),"key"in s){l={};for(var d in s)d!=="key"&&(l[d]=s[d])}else l=s;return s=l.ref,{$$typeof:e,type:i,key:u,ref:s!==void 0?s:null,props:l}}return Ts.Fragment=t,Ts.jsx=r,Ts.jsxs=r,Ts}var cb;function DT(){return cb||(cb=1,mh.exports=zT()),mh.exports}var z=DT();/**
 * @license bippy
 *
 * Copyright (c) Aiden Bai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const jT="0.3.18",fm=`bippy-${jT}`,ub=Object.defineProperty,UT=Object.prototype.hasOwnProperty,zs=()=>{},w1=e=>{try{Function.prototype.toString.call(e).indexOf("^_^")>-1&&setTimeout(()=>{throw new Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")})}catch{}},x1=(e=ei())=>"getFiberRoots"in e;let _1=!1,Uc;const dp=(e=ei())=>_1?!0:(typeof e.inject=="function"&&(Uc=e.inject.toString()),!!(Uc!=null&&Uc.includes("(injected)"))),nu=new Set,fp=new Set,LT=e=>{const t=new Map;let r=0,i={checkDCE:w1,supportsFiber:!0,supportsFlight:!0,hasUnsupportedRendererAttached:!1,renderers:t,onCommitFiberRoot:zs,onCommitFiberUnmount:zs,onPostCommitFiberRoot:zs,on:zs,inject(s){const l=++r;return t.set(l,s),fp.add(s),i._instrumentationIsActive||(i._instrumentationIsActive=!0,nu.forEach(u=>u())),l},_instrumentationSource:fm,_instrumentationIsActive:!1};try{ub(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__",{get(){return i},set(u){if(u&&typeof u=="object"){const d=i.renderers;i=u,d.size>0&&(d.forEach((h,p)=>{fp.add(h),u.renderers.set(p,h)}),hp(e))}},configurable:!0,enumerable:!0});const s=window.hasOwnProperty;let l=!1;ub(window,"hasOwnProperty",{value:function(){try{if(!l&&arguments[0]==="__REACT_DEVTOOLS_GLOBAL_HOOK__")return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,l=!0,-0}catch{}return s.apply(this,arguments)},configurable:!0,writable:!0})}catch{hp(e)}return i},hp=e=>{e&&nu.add(e);try{const t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t)return;if(!t._instrumentationSource){if(t.checkDCE=w1,t.supportsFiber=!0,t.supportsFlight=!0,t.hasUnsupportedRendererAttached=!1,t._instrumentationSource=fm,t._instrumentationIsActive=!1,t.on=zs,t.renderers.size){t._instrumentationIsActive=!0,nu.forEach(i=>i());return}const r=t.inject;dp(t)&&!x1()&&(_1=!0,t.inject({scheduleRefresh(){}})&&(t._instrumentationIsActive=!0)),t.inject=i=>{const s=r(i);return fp.add(i),t._instrumentationIsActive=!0,nu.forEach(l=>l()),s}}(t.renderers.size||t._instrumentationIsActive||dp())&&(e==null||e())}catch{}},$T=()=>UT.call(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__"),ei=e=>$T()?(hp(e),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):LT(e),HT=()=>{var e,t;return!!(typeof window<"u"&&((e=window.document)!=null&&e.createElement||((t=window.navigator)==null?void 0:t.product)==="ReactNative"))},IT=()=>{try{HT()&&ei()}catch{}};/**
 * @license bippy
 *
 * Copyright (c) Aiden Bai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Lu=0,oi=1,S1=3,qT=5,BT=6,YT=7,PT=9,$u=11,Hu=13,ll=14,cl=15,XT=18,FT=22,GT=23,VT=26,QT=27,WT=60111,ZT="Symbol(react.concurrent_mode)",KT="Symbol(react.async_mode)",db=1,JT=2,ek=4096,tk=4,fb=8,nk=16,rk=32,ak=1024,ik=8192,hb=JT|tk|nk|rk|ek|ik|ak,Gs=e=>{switch(e.tag){case qT:case VT:case QT:return!0;default:return typeof e.type=="string"}},Iu=e=>{switch(e.tag){case Lu:case oi:case cl:case ll:case $u:return!0;default:return!1}},ok=(e,t)=>{var r;try{const i=e.dependencies,s=(r=e.alternate)==null?void 0:r.dependencies;if(!i||!s||typeof i!="object"||!("firstContext"in i)||typeof s!="object"||!("firstContext"in s))return!1;let l=i.firstContext,u=s.firstContext;for(;l&&typeof l=="object"&&"memoizedValue"in l||u&&typeof u=="object"&&"memoizedValue"in u;){if(t(l,u)===!0)return!0;l=l==null?void 0:l.next,u=u==null?void 0:u.next}}catch{}return!1},hm=e=>{var s;const t=e.memoizedProps,r=((s=e.alternate)==null?void 0:s.memoizedProps)||{},i=e.flags??e.effectTag??0;switch(e.tag){case oi:case Lu:case PT:case $u:case ll:case cl:return(i&db)===db;default:return e.alternate?r!==t||e.alternate.memoizedState!==e.memoizedState||e.alternate.ref!==e.ref:!0}},pm=e=>(e.flags&(hb|fb))!==0||(e.subtreeFlags&(hb|fb))!==0,sk=e=>{const t=[],r=[e];for(;r.length;){const i=r.pop();i&&(Gs(i)&&pm(i)&&hm(i)&&t.push(i),i.child&&r.push(i.child),i.sibling&&r.push(i.sibling))}return t},mm=e=>{switch(e.tag){case XT:return!0;case BT:case YT:case GT:case FT:return!0;case S1:return!1;default:{const t=typeof e.type=="object"&&e.type!==null?e.type.$$typeof:e.type;switch(typeof t=="symbol"?t.toString():t){case WT:case ZT:case KT:return!0;default:return!1}}}},lk=e=>{const t=[],r=[];for(Gs(e)?t.push(e):e.child&&r.push(e.child);r.length;){const i=r.pop();if(!i)break;Gs(i)?t.push(i):i.child&&r.push(i.child),i.sibling&&r.push(i.sibling)}return t},gm=(e,t,r=!1)=>{if(!e)return null;if(t(e)===!0)return e;let i=r?e.return:e.child;for(;i;){const s=gm(i,t,r);if(s)return s;i=r?null:i.sibling}return null},Ga=e=>{const t=(e==null?void 0:e.actualDuration)??0;let r=t,i=(e==null?void 0:e.child)??null;for(;t>0&&i!=null;)r-=i.actualDuration??0,i=i.sibling;return{selfTime:r,totalTime:t}},Vs=e=>{var t;return!!((t=e.updateQueue)!=null&&t.memoCache)},si=e=>{const t=e;return typeof t=="function"?t:typeof t=="object"&&t?si(t.type||t.render):null},Ot=e=>{const t=e;if(typeof t=="string")return t;if(typeof t!="function"&&!(typeof t=="object"&&t))return null;const r=t.displayName||t.name||null;if(r)return r;const i=si(t);return i&&(i.displayName||i.name)||null},ck=e=>{try{if(typeof e.version=="string"&&e.bundleType>0)return"development"}catch{}return"production"},uk=()=>!!ei()._instrumentationIsActive||x1()||dp();let T1=0;const mo=new WeakMap,dk=(e,t=T1++)=>{mo.set(e,t)},xa=e=>{let t=mo.get(e);return!t&&e.alternate&&(t=mo.get(e.alternate)),t||(t=T1++,dk(e,t)),t},wa=(e,t,r)=>{let i=t;for(;i!=null;){if(mo.has(i)||xa(i),!mm(i)&&hm(i)&&e(i,"mount"),i.tag===Hu)if(i.memoizedState!==null){const u=i.child,d=u?u.sibling:null;if(d){const h=d.child;h!==null&&wa(e,h,!1)}}else{let u=null;i.child!==null&&(u=i.child.child),u!==null&&wa(e,u,!1)}else i.child!=null&&wa(e,i.child,!0);i=r?i.sibling:null}},pp=(e,t,r,i)=>{var h,p,y;if(mo.has(t)||xa(t),!r)return;mo.has(r)||xa(r);const s=t.tag===Hu;!mm(t)&&hm(t)&&e(t,"update");const u=s&&r.memoizedState!==null,d=s&&t.memoizedState!==null;if(u&&d){const g=((h=t.child)==null?void 0:h.sibling)??null,b=((p=r.child)==null?void 0:p.sibling)??null;g!==null&&b!==null&&pp(e,g,b)}else if(u&&!d){const g=t.child;g!==null&&wa(e,g,!0)}else if(!u&&d){k1(e,r);const g=((y=t.child)==null?void 0:y.sibling)??null;g!==null&&wa(e,g,!0)}else if(t.child!==r.child){let g=t.child;for(;g;){if(g.alternate){const b=g.alternate;pp(e,g,b)}else wa(e,g,!1);g=g.sibling}}},mp=(e,t)=>{(t.tag===S1||!mm(t))&&e(t,"unmount")},k1=(e,t)=>{const r=t.tag===Hu&&t.memoizedState!==null;let i=t.child;if(r){const s=t.child,l=(s==null?void 0:s.sibling)??null;i=(l==null?void 0:l.child)??null}for(;i!==null;)i.return!==null&&(mp(e,i),k1(e,i)),i=i.sibling};let fk=0;const pb=new WeakMap,hk=(e,t)=>{const r="current"in e?e.current:e;let i=pb.get(e);i||(i={prevFiber:null,id:fk++},pb.set(e,i));const{prevFiber:s}=i;if(!r)mp(t,r);else if(s!==null){const l=s&&s.memoizedState!=null&&s.memoizedState.element!=null&&s.memoizedState.isDehydrated!==!0,u=r.memoizedState!=null&&r.memoizedState.element!=null&&r.memoizedState.isDehydrated!==!0;!l&&u?wa(t,r,!1):l&&u?pp(t,r,r.alternate):l&&!u&&mp(t,r)}else wa(t,r,!0);i.prevFiber=r},pk=e=>ei(()=>{var l;const t=ei();(l=e.onActive)==null||l.call(e),t._instrumentationSource=e.name??fm;const r=t.onCommitFiberRoot;e.onCommitFiberRoot&&(t.onCommitFiberRoot=(u,d,h)=>{var p;r&&r(u,d,h),(p=e.onCommitFiberRoot)==null||p.call(e,u,d,h)});const i=t.onCommitFiberUnmount;e.onCommitFiberUnmount&&(t.onCommitFiberUnmount=(u,d)=>{var h;i&&i(u,d),(h=e.onCommitFiberUnmount)==null||h.call(e,u,d)});const s=t.onPostCommitFiberRoot;e.onPostCommitFiberRoot&&(t.onPostCommitFiberRoot=(u,d)=>{var h;s&&s(u,d),(h=e.onPostCommitFiberRoot)==null||h.call(e,u,d)})});/**
 * @license bippy
 *
 * Copyright (c) Aiden Bai
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */IT();var qu,xe,E1,C1,Fa,mb,M1,N1,O1,vm,gp,vp,A1,Qs={},R1=[],mk=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ul=Array.isArray;function Ar(e,t){for(var r in t)e[r]=t[r];return e}function ym(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function ti(e,t,r){var i,s,l,u={};for(l in t)l=="key"?i=t[l]:l=="ref"?s=t[l]:u[l]=t[l];if(arguments.length>2&&(u.children=arguments.length>3?qu.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(l in e.defaultProps)u[l]===void 0&&(u[l]=e.defaultProps[l]);return ru(e,u,i,s,null)}function ru(e,t,r,i,s){var l={type:e,props:t,key:r,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++E1,__i:-1,__u:0};return s==null&&xe.vnode!=null&&xe.vnode(l),l}function De(e){return e.children}function jn(e,t){this.props=e,this.context=t}function go(e,t){if(t==null)return e.__?go(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?go(e):null}function z1(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return z1(e)}}function yp(e){(!e.__d&&(e.__d=!0)&&Fa.push(e)&&!vu.__r++||mb!=xe.debounceRendering)&&((mb=xe.debounceRendering)||M1)(vu)}function vu(){for(var e,t,r,i,s,l,u,d=1;Fa.length;)Fa.length>d&&Fa.sort(N1),e=Fa.shift(),d=Fa.length,e.__d&&(r=void 0,s=(i=(t=e).__v).__e,l=[],u=[],t.__P&&((r=Ar({},i)).__v=i.__v+1,xe.vnode&&xe.vnode(r),bm(t.__P,r,i,t.__n,t.__P.namespaceURI,32&i.__u?[s]:null,l,s??go(i),!!(32&i.__u),u),r.__v=i.__v,r.__.__k[r.__i]=r,U1(l,r,u),r.__e!=s&&z1(r)));vu.__r=0}function D1(e,t,r,i,s,l,u,d,h,p,y){var g,b,w,S,T,M,_,C=i&&i.__k||R1,O=t.length;for(h=gk(r,t,C,h,O),g=0;g<O;g++)(w=r.__k[g])!=null&&(b=w.__i==-1?Qs:C[w.__i]||Qs,w.__i=g,M=bm(e,w,b,s,l,u,d,h,p,y),S=w.__e,w.ref&&b.ref!=w.ref&&(b.ref&&wm(b.ref,null,w),y.push(w.ref,w.__c||S,w)),T==null&&S!=null&&(T=S),(_=!!(4&w.__u))||b.__k===w.__k?h=j1(w,h,e,_):typeof w.type=="function"&&M!==void 0?h=M:S&&(h=S.nextSibling),w.__u&=-7);return r.__e=T,h}function gk(e,t,r,i,s){var l,u,d,h,p,y=r.length,g=y,b=0;for(e.__k=new Array(s),l=0;l<s;l++)(u=t[l])!=null&&typeof u!="boolean"&&typeof u!="function"?(h=l+b,(u=e.__k[l]=typeof u=="string"||typeof u=="number"||typeof u=="bigint"||u.constructor==String?ru(null,u,null,null,null):ul(u)?ru(De,{children:u},null,null,null):u.constructor==null&&u.__b>0?ru(u.type,u.props,u.key,u.ref?u.ref:null,u.__v):u).__=e,u.__b=e.__b+1,d=null,(p=u.__i=vk(u,r,h,g))!=-1&&(g--,(d=r[p])&&(d.__u|=2)),d==null||d.__v==null?(p==-1&&(s>y?b--:s<y&&b++),typeof u.type!="function"&&(u.__u|=4)):p!=h&&(p==h-1?b--:p==h+1?b++:(p>h?b--:b++,u.__u|=4))):e.__k[l]=null;if(g)for(l=0;l<y;l++)(d=r[l])!=null&&(2&d.__u)==0&&(d.__e==i&&(i=go(d)),$1(d,d));return i}function j1(e,t,r,i){var s,l;if(typeof e.type=="function"){for(s=e.__k,l=0;s&&l<s.length;l++)s[l]&&(s[l].__=e,t=j1(s[l],t,r,i));return t}e.__e!=t&&(i&&(t&&e.type&&!t.parentNode&&(t=go(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function yu(e,t){return t=t||[],e==null||typeof e=="boolean"||(ul(e)?e.some(function(r){yu(r,t)}):t.push(e)),t}function vk(e,t,r,i){var s,l,u,d=e.key,h=e.type,p=t[r],y=p!=null&&(2&p.__u)==0;if(p===null&&e.key==null||y&&d==p.key&&h==p.type)return r;if(i>(y?1:0)){for(s=r-1,l=r+1;s>=0||l<t.length;)if((p=t[u=s>=0?s--:l++])!=null&&(2&p.__u)==0&&d==p.key&&h==p.type)return u}return-1}function gb(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||mk.test(t)?r:r+"px"}function Lc(e,t,r,i,s){var l,u;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)r&&t in r||gb(e.style,t,"");if(r)for(t in r)i&&r[t]==i[t]||gb(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")l=t!=(t=t.replace(O1,"$1")),u=t.toLowerCase(),t=u in e||t=="onFocusOut"||t=="onFocusIn"?u.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+l]=r,r?i?r.u=i.u:(r.u=vm,e.addEventListener(t,l?vp:gp,l)):e.removeEventListener(t,l?vp:gp,l);else{if(s=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function vb(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=vm++;else if(t.t<r.u)return;return r(xe.event?xe.event(t):t)}}}function bm(e,t,r,i,s,l,u,d,h,p){var y,g,b,w,S,T,M,_,C,O,U,D,X,F,ee,ne,pe,ue=t.type;if(t.constructor!=null)return null;128&r.__u&&(h=!!(32&r.__u),l=[d=t.__e=r.__e]),(y=xe.__b)&&y(t);e:if(typeof ue=="function")try{if(_=t.props,C="prototype"in ue&&ue.prototype.render,O=(y=ue.contextType)&&i[y.__c],U=y?O?O.props.value:y.__:i,r.__c?M=(g=t.__c=r.__c).__=g.__E:(C?t.__c=g=new ue(_,U):(t.__c=g=new jn(_,U),g.constructor=ue,g.render=bk),O&&O.sub(g),g.props=_,g.state||(g.state={}),g.context=U,g.__n=i,b=g.__d=!0,g.__h=[],g._sb=[]),C&&g.__s==null&&(g.__s=g.state),C&&ue.getDerivedStateFromProps!=null&&(g.__s==g.state&&(g.__s=Ar({},g.__s)),Ar(g.__s,ue.getDerivedStateFromProps(_,g.__s))),w=g.props,S=g.state,g.__v=t,b)C&&ue.getDerivedStateFromProps==null&&g.componentWillMount!=null&&g.componentWillMount(),C&&g.componentDidMount!=null&&g.__h.push(g.componentDidMount);else{if(C&&ue.getDerivedStateFromProps==null&&_!==w&&g.componentWillReceiveProps!=null&&g.componentWillReceiveProps(_,U),!g.__e&&g.shouldComponentUpdate!=null&&g.shouldComponentUpdate(_,g.__s,U)===!1||t.__v==r.__v){for(t.__v!=r.__v&&(g.props=_,g.state=g.__s,g.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(ie){ie&&(ie.__=t)}),D=0;D<g._sb.length;D++)g.__h.push(g._sb[D]);g._sb=[],g.__h.length&&u.push(g);break e}g.componentWillUpdate!=null&&g.componentWillUpdate(_,g.__s,U),C&&g.componentDidUpdate!=null&&g.__h.push(function(){g.componentDidUpdate(w,S,T)})}if(g.context=U,g.props=_,g.__P=e,g.__e=!1,X=xe.__r,F=0,C){for(g.state=g.__s,g.__d=!1,X&&X(t),y=g.render(g.props,g.state,g.context),ee=0;ee<g._sb.length;ee++)g.__h.push(g._sb[ee]);g._sb=[]}else do g.__d=!1,X&&X(t),y=g.render(g.props,g.state,g.context),g.state=g.__s;while(g.__d&&++F<25);g.state=g.__s,g.getChildContext!=null&&(i=Ar(Ar({},i),g.getChildContext())),C&&!b&&g.getSnapshotBeforeUpdate!=null&&(T=g.getSnapshotBeforeUpdate(w,S)),ne=y,y!=null&&y.type===De&&y.key==null&&(ne=L1(y.props.children)),d=D1(e,ul(ne)?ne:[ne],t,r,i,s,l,u,d,h,p),g.base=t.__e,t.__u&=-161,g.__h.length&&u.push(g),M&&(g.__E=g.__=null)}catch(ie){if(t.__v=null,h||l!=null)if(ie.then){for(t.__u|=h?160:128;d&&d.nodeType==8&&d.nextSibling;)d=d.nextSibling;l[l.indexOf(d)]=null,t.__e=d}else{for(pe=l.length;pe--;)ym(l[pe]);bp(t)}else t.__e=r.__e,t.__k=r.__k,ie.then||bp(t);xe.__e(ie,t,r)}else l==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):d=t.__e=yk(r.__e,t,r,i,s,l,u,h,p);return(y=xe.diffed)&&y(t),128&t.__u?void 0:d}function bp(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(bp)}function U1(e,t,r){for(var i=0;i<r.length;i++)wm(r[i],r[++i],r[++i]);xe.__c&&xe.__c(t,e),e.some(function(s){try{e=s.__h,s.__h=[],e.some(function(l){l.call(s)})}catch(l){xe.__e(l,s.__v)}})}function L1(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:ul(e)?e.map(L1):Ar({},e)}function yk(e,t,r,i,s,l,u,d,h){var p,y,g,b,w,S,T,M=r.props,_=t.props,C=t.type;if(C=="svg"?s="http://www.w3.org/2000/svg":C=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),l!=null){for(p=0;p<l.length;p++)if((w=l[p])&&"setAttribute"in w==!!C&&(C?w.localName==C:w.nodeType==3)){e=w,l[p]=null;break}}if(e==null){if(C==null)return document.createTextNode(_);e=document.createElementNS(s,C,_.is&&_),d&&(xe.__m&&xe.__m(t,l),d=!1),l=null}if(C==null)M===_||d&&e.data==_||(e.data=_);else{if(l=l&&qu.call(e.childNodes),M=r.props||Qs,!d&&l!=null)for(M={},p=0;p<e.attributes.length;p++)M[(w=e.attributes[p]).name]=w.value;for(p in M)if(w=M[p],p!="children"){if(p=="dangerouslySetInnerHTML")g=w;else if(!(p in _)){if(p=="value"&&"defaultValue"in _||p=="checked"&&"defaultChecked"in _)continue;Lc(e,p,null,w,s)}}for(p in _)w=_[p],p=="children"?b=w:p=="dangerouslySetInnerHTML"?y=w:p=="value"?S=w:p=="checked"?T=w:d&&typeof w!="function"||M[p]===w||Lc(e,p,w,M[p],s);if(y)d||g&&(y.__html==g.__html||y.__html==e.innerHTML)||(e.innerHTML=y.__html),t.__k=[];else if(g&&(e.innerHTML=""),D1(t.type=="template"?e.content:e,ul(b)?b:[b],t,r,i,C=="foreignObject"?"http://www.w3.org/1999/xhtml":s,l,u,l?l[0]:r.__k&&go(r,0),d,h),l!=null)for(p=l.length;p--;)ym(l[p]);d||(p="value",C=="progress"&&S==null?e.removeAttribute("value"):S!=null&&(S!==e[p]||C=="progress"&&!S||C=="option"&&S!=M[p])&&Lc(e,p,S,M[p],s),p="checked",T!=null&&T!=e[p]&&Lc(e,p,T,M[p],s))}return e}function wm(e,t,r){try{if(typeof e=="function"){var i=typeof e.__u=="function";i&&e.__u(),i&&t==null||(e.__u=e(t))}else e.current=t}catch(s){xe.__e(s,r)}}function $1(e,t,r){var i,s;if(xe.unmount&&xe.unmount(e),(i=e.ref)&&(i.current&&i.current!=e.__e||wm(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(l){xe.__e(l,t)}i.base=i.__P=null}if(i=e.__k)for(s=0;s<i.length;s++)i[s]&&$1(i[s],t,r||typeof e.type!="function");r||ym(e.__e),e.__c=e.__=e.__e=void 0}function bk(e,t,r){return this.constructor(e,r)}function Is(e,t,r){var i,s,l,u;t==document&&(t=document.documentElement),xe.__&&xe.__(e,t),s=(i=!1)?null:t.__k,l=[],u=[],bm(t,e=t.__k=ti(De,null,[e]),s||Qs,Qs,t.namespaceURI,s?null:t.firstChild?qu.call(t.childNodes):null,l,s?s.__e:t.firstChild,i,u),U1(l,e,u)}function H1(e){function t(r){var i,s;return this.getChildContext||(i=new Set,(s={})[t.__c]=this,this.getChildContext=function(){return s},this.componentWillUnmount=function(){i=null},this.shouldComponentUpdate=function(l){this.props.value!=l.value&&i.forEach(function(u){u.__e=!0,yp(u)})},this.sub=function(l){i.add(l);var u=l.componentWillUnmount;l.componentWillUnmount=function(){i&&i.delete(l),u&&u.call(l)}}),r.children}return t.__c="__cC"+A1++,t.__=e,t.Provider=t.__l=(t.Consumer=function(r,i){return r.children(i)}).contextType=t,t}qu=R1.slice,xe={__e:function(e,t,r,i){for(var s,l,u;t=t.__;)if((s=t.__c)&&!s.__)try{if((l=s.constructor)&&l.getDerivedStateFromError!=null&&(s.setState(l.getDerivedStateFromError(e)),u=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,i||{}),u=s.__d),u)return s.__E=s}catch(d){e=d}throw e}},E1=0,C1=function(e){return e!=null&&e.constructor==null},jn.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Ar({},this.state),typeof e=="function"&&(e=e(Ar({},r),this.props)),e&&Ar(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),yp(this))},jn.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),yp(this))},jn.prototype.render=De,Fa=[],M1=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,N1=function(e,t){return e.__v.__b-t.__v.__b},vu.__r=0,O1=/(PointerCapture)$|Capture$/i,vm=0,gp=vb(!1),vp=vb(!0),A1=0;var ni,tt,gh,yb,Ws=0,I1=[],ht=xe,bb=ht.__b,wb=ht.__r,xb=ht.diffed,_b=ht.__c,Sb=ht.unmount,Tb=ht.__;function dl(e,t){ht.__h&&ht.__h(tt,e,Ws||t),Ws=0;var r=tt.__H||(tt.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function Ee(e){return Ws=1,wk(q1,e)}function wk(e,t,r){var i=dl(ni++,2);if(i.t=e,!i.__c&&(i.__=[r?r(t):q1(void 0,t),function(d){var h=i.__N?i.__N[0]:i.__[0],p=i.t(h,d);h!==p&&(i.__N=[p,i.__[1]],i.__c.setState({}))}],i.__c=tt,!tt.__f)){var s=function(d,h,p){if(!i.__c.__H)return!0;var y=i.__c.__H.__.filter(function(b){return!!b.__c});if(y.every(function(b){return!b.__N}))return!l||l.call(this,d,h,p);var g=i.__c.props!==d;return y.forEach(function(b){if(b.__N){var w=b.__[0];b.__=b.__N,b.__N=void 0,w!==b.__[0]&&(g=!0)}}),l&&l.call(this,d,h,p)||g};tt.__f=!0;var l=tt.shouldComponentUpdate,u=tt.componentWillUpdate;tt.componentWillUpdate=function(d,h,p){if(this.__e){var y=l;l=void 0,s(d,h,p),l=y}u&&u.call(this,d,h,p)},tt.shouldComponentUpdate=s}return i.__N||i.__}function Te(e,t){var r=dl(ni++,3);!ht.__s&&Sm(r.__H,t)&&(r.__=e,r.u=t,tt.__H.__h.push(r))}function xm(e,t){var r=dl(ni++,4);!ht.__s&&Sm(r.__H,t)&&(r.__=e,r.u=t,tt.__h.push(r))}function he(e){return Ws=5,Qn(function(){return{current:e}},[])}function Qn(e,t){var r=dl(ni++,7);return Sm(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function ft(e,t){return Ws=8,Qn(function(){return e},t)}function _m(e){var t=tt.context[e.__c],r=dl(ni++,9);return r.c=e,t?(r.__==null&&(r.__=!0,t.sub(tt)),t.props.value):e.__}function xk(){for(var e;e=I1.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(au),e.__H.__h.forEach(wp),e.__H.__h=[]}catch(t){e.__H.__h=[],ht.__e(t,e.__v)}}ht.__b=function(e){tt=null,bb&&bb(e)},ht.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Tb&&Tb(e,t)},ht.__r=function(e){wb&&wb(e),ni=0;var t=(tt=e.__c).__H;t&&(gh===tt?(t.__h=[],tt.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(au),t.__h.forEach(wp),t.__h=[],ni=0)),gh=tt},ht.diffed=function(e){xb&&xb(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(I1.push(t)!==1&&yb===ht.requestAnimationFrame||((yb=ht.requestAnimationFrame)||_k)(xk)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),gh=tt=null},ht.__c=function(e,t){t.some(function(r){try{r.__h.forEach(au),r.__h=r.__h.filter(function(i){return!i.__||wp(i)})}catch(i){t.some(function(s){s.__h&&(s.__h=[])}),t=[],ht.__e(i,r.__v)}}),_b&&_b(e,t)},ht.unmount=function(e){Sb&&Sb(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(i){try{au(i)}catch(s){t=s}}),r.__H=void 0,t&&ht.__e(t,r.__v))};var kb=typeof requestAnimationFrame=="function";function _k(e){var t,r=function(){clearTimeout(i),kb&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(r,35);kb&&(t=requestAnimationFrame(r))}function au(e){var t=tt,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),tt=t}function wp(e){var t=tt;e.__c=e.__(),tt=t}function Sm(e,t){return!e||e.length!==t.length||t.some(function(r,i){return r!==e[i]})}function q1(e,t){return typeof t=="function"?t(e):t}var Sk=Symbol.for("preact-signals");function Tm(){if(co>1)co--;else{for(var e,t=!1;qs!==void 0;){var r=qs;for(qs=void 0,xp++;r!==void 0;){var i=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&Y1(r))try{r.c()}catch(s){t||(e=s,t=!0)}r=i}}if(xp=0,co--,t)throw e}}var Ie=void 0;function Zs(e){var t=Ie;Ie=void 0;try{return e()}finally{Ie=t}}var qs=void 0,co=0,xp=0,bu=0;function B1(e){if(Ie!==void 0){var t=e.n;if(t===void 0||t.t!==Ie)return t={i:0,S:e,p:Ie.s,n:void 0,t:Ie,e:void 0,x:void 0,r:t},Ie.s!==void 0&&(Ie.s.n=t),Ie.s=t,e.n=t,32&Ie.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=Ie.s,t.n=void 0,Ie.s.n=t,Ie.s=t),t}}function Lt(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched}Lt.prototype.brand=Sk;Lt.prototype.h=function(){return!0};Lt.prototype.S=function(e){var t=this,r=this.t;r!==e&&e.e===void 0&&(e.x=r,this.t=e,r!==void 0?r.e=e:Zs(function(){var i;(i=t.W)==null||i.call(t)}))};Lt.prototype.U=function(e){var t=this;if(this.t!==void 0){var r=e.e,i=e.x;r!==void 0&&(r.x=i,e.e=void 0),i!==void 0&&(i.e=r,e.x=void 0),e===this.t&&(this.t=i,i===void 0&&Zs(function(){var s;(s=t.Z)==null||s.call(t)}))}};Lt.prototype.subscribe=function(e){var t=this;return Bu(function(){var r=t.value,i=Ie;Ie=void 0;try{e(r)}finally{Ie=i}})};Lt.prototype.valueOf=function(){return this.value};Lt.prototype.toString=function(){return this.value+""};Lt.prototype.toJSON=function(){return this.value};Lt.prototype.peek=function(){var e=Ie;Ie=void 0;try{return this.value}finally{Ie=e}};Object.defineProperty(Lt.prototype,"value",{get:function(){var e=B1(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(xp>100)throw new Error("Cycle detected");this.v=e,this.i++,bu++,co++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Tm()}}}});function wt(e,t){return new Lt(e,t)}function Y1(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function P1(e){for(var t=e.s;t!==void 0;t=t.n){var r=t.S.n;if(r!==void 0&&(t.r=r),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function X1(e){for(var t=e.s,r=void 0;t!==void 0;){var i=t.p;t.i===-1?(t.S.U(t),i!==void 0&&(i.n=t.n),t.n!==void 0&&(t.n.p=i)):r=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=i}e.s=r}function li(e,t){Lt.call(this,void 0),this.x=e,this.s=void 0,this.g=bu-1,this.f=4,this.W=t==null?void 0:t.watched,this.Z=t==null?void 0:t.unwatched}li.prototype=new Lt;li.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===bu))return!0;if(this.g=bu,this.f|=1,this.i>0&&!Y1(this))return this.f&=-2,!0;var e=Ie;try{P1(this),Ie=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(r){this.v=r,this.f|=16,this.i++}return Ie=e,X1(this),this.f&=-2,!0};li.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}Lt.prototype.S.call(this,e)};li.prototype.U=function(e){if(this.t!==void 0&&(Lt.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};li.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};Object.defineProperty(li.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var e=B1(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function ci(e,t){return new li(e,t)}function F1(e){var t=e.u;if(e.u=void 0,typeof t=="function"){co++;var r=Ie;Ie=void 0;try{t()}catch(i){throw e.f&=-2,e.f|=8,km(e),i}finally{Ie=r,Tm()}}}function km(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,F1(e)}function Tk(e){if(Ie!==this)throw new Error("Out-of-order effect");X1(this),Ie=e,this.f&=-2,8&this.f&&km(this),Tm()}function So(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}So.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};So.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,F1(this),P1(this),co++;var e=Ie;return Ie=this,Tk.bind(this,e)};So.prototype.N=function(){2&this.f||(this.f|=2,this.o=qs,qs=this)};So.prototype.d=function(){this.f|=8,1&this.f||km(this)};So.prototype.dispose=function(){this.d()};function Bu(e){var t=new So(e);try{t.c()}catch(i){throw t.d(),i}var r=t.d.bind(t);return r[Symbol.dispose]=r,r}var vh;function To(e,t){xe[e]=t.bind(null,xe[e]||function(){})}function wu(e){vh&&vh(),vh=e&&e.S()}function G1(e){var t=this,r=e.data,i=Ek(r);i.value=r;var s=Qn(function(){for(var l=t.__v;l=l.__;)if(l.__c){l.__c.__$f|=4;break}return t.__$u.c=function(){var u,d=t.__$u.S(),h=s.value;d(),C1(h)||((u=t.base)==null?void 0:u.nodeType)!==3?(t.__$f|=1,t.setState({})):t.base.data=h},ci(function(){var u=i.value.value;return u===0?0:u===!0?"":u||""})},[]);return s.value}G1.displayName="_st";Object.defineProperties(Lt.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:G1},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});To("__b",function(e,t){if(typeof t.type=="string"){var r,i=t.props;for(var s in i)if(s!=="children"){var l=i[s];l instanceof Lt&&(r||(t.__np=r={}),r[s]=l,i[s]=l.peek())}}e(t)});To("__r",function(e,t){wu();var r,i=t.__c;i&&(i.__$f&=-2,(r=i.__$u)===void 0&&(i.__$u=r=function(s){var l;return Bu(function(){l=this}),l.c=function(){i.__$f|=1,i.setState({})},l}())),wu(r),e(t)});To("__e",function(e,t,r,i){wu(),e(t,r,i)});To("diffed",function(e,t){wu();var r;if(typeof t.type=="string"&&(r=t.__e)){var i=t.__np,s=t.props;if(i){var l=r.U;if(l)for(var u in l){var d=l[u];d!==void 0&&!(u in i)&&(d.d(),l[u]=void 0)}else r.U=l={};for(var h in i){var p=l[h],y=i[h];p===void 0?(p=kk(r,h,y,s),l[h]=p):p.o(y,s)}}}e(t)});function kk(e,t,r,i){var s=t in e&&e.ownerSVGElement===void 0,l=wt(r);return{o:function(u,d){l.value=u,i=d},d:Bu(function(){var u=l.value.value;i[t]!==u&&(i[t]=u,s?e[t]=u:u?e.setAttribute(t,u):e.removeAttribute(t))})}}To("unmount",function(e,t){if(typeof t.type=="string"){var r=t.__e;if(r){var i=r.U;if(i){r.U=void 0;for(var s in i){var l=i[s];l&&l.d()}}}}else{var u=t.__c;if(u){var d=u.__$u;d&&(u.__$u=void 0,d.d())}}e(t)});To("__h",function(e,t,r,i){(i<3||i===9)&&(t.__$f|=2),e(t,r,i)});jn.prototype.shouldComponentUpdate=function(e,t){var r=this.__$u,i=r&&r.s!==void 0;for(var s in t)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(i||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(i||4&this.__$f)||3&this.__$f)return!0;for(var l in e)if(l!=="__source"&&e[l]!==this.props[l])return!0;for(var u in this.props)if(!(u in e))return!0;return!1};function Ek(e){return Qn(function(){return wt(e)},[])}function Ks(e){var t=he(e);t.current=e,Te(function(){return Bu(function(){return t.current()})},[])}function V1(e,t){for(var r in t)e[r]=t[r];return e}function _p(e,t){for(var r in e)if(r!=="__source"&&!(r in t))return!0;for(var i in t)if(i!=="__source"&&e[i]!==t[i])return!0;return!1}function Ck(e,t){var r=t(),i=Ee({t:{__:r,u:t}}),s=i[0].t,l=i[1];return xm(function(){s.__=r,s.u=t,yh(s)&&l({t:s})},[e,r,t]),Te(function(){return yh(s)&&l({t:s}),e(function(){yh(s)&&l({t:s})})},[e]),r}function yh(e){var t,r,i=e.u,s=e.__;try{var l=i();return!((t=s)===(r=l)&&(t!==0||1/t==1/r)||t!=t&&r!=r)}catch{return!0}}function Eb(e,t){this.props=e,this.context=t}function Yu(e,t){function r(s){var l=this.props.ref,u=l==s.ref;return!u&&l&&(l.call?l(null):l.current=null),t?!t(this.props,s)||!u:_p(this.props,s)}function i(s){return this.shouldComponentUpdate=r,ti(e,s)}return i.displayName="Memo("+(e.displayName||e.name)+")",i.prototype.isReactComponent=!0,i.__f=!0,i.type=e,i}(Eb.prototype=new jn).isPureReactComponent=!0,Eb.prototype.shouldComponentUpdate=function(e,t){return _p(this.props,e)||_p(this.state,t)};var Cb=xe.__b;xe.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Cb&&Cb(e)};var Mk=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Em(e){function t(r){var i=V1({},r);return delete i.ref,e(i,r.ref||null)}return t.$$typeof=Mk,t.render=e,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var Nk=xe.__e;xe.__e=function(e,t,r,i){if(e.then){for(var s,l=t;l=l.__;)if((s=l.__c)&&s.__c)return t.__e==null&&(t.__e=r.__e,t.__k=r.__k),s.__c(e,t)}Nk(e,t,r,i)};var Mb=xe.unmount;function Q1(e,t,r){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(i){typeof i.__c=="function"&&i.__c()}),e.__c.__H=null),(e=V1({},e)).__c!=null&&(e.__c.__P===r&&(e.__c.__P=t),e.__c.__e=!0,e.__c=null),e.__k=e.__k&&e.__k.map(function(i){return Q1(i,t,r)})),e}function W1(e,t,r){return e&&r&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(i){return W1(i,t,r)}),e.__c&&e.__c.__P===t&&(e.__e&&r.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=r)),e}function bh(){this.__u=0,this.o=null,this.__b=null}function Z1(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function $c(){this.i=null,this.l=null}xe.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Mb&&Mb(e)},(bh.prototype=new jn).__c=function(e,t){var r=t.__c,i=this;i.o==null&&(i.o=[]),i.o.push(r);var s=Z1(i.__v),l=!1,u=function(){l||(l=!0,r.__R=null,s?s(d):d())};r.__R=u;var d=function(){if(!--i.__u){if(i.state.__a){var h=i.state.__a;i.__v.__k[0]=W1(h,h.__c.__P,h.__c.__O)}var p;for(i.setState({__a:i.__b=null});p=i.o.pop();)p.forceUpdate()}};i.__u++||32&t.__u||i.setState({__a:i.__b=i.__v.__k[0]}),e.then(u,u)},bh.prototype.componentWillUnmount=function(){this.o=[]},bh.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=Q1(this.__b,r,i.__O=i.__P)}this.__b=null}var s=t.__a&&ti(De,null,e.fallback);return s&&(s.__u&=-33),[ti(De,null,t.__a?null:e.children),s]};var Nb=function(e,t,r){if(++r[1]===r[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(r=e.i;r;){for(;r.length>3;)r.pop()();if(r[1]<r[0])break;e.i=r=r[2]}};function Ok(e){return this.getChildContext=function(){return e.context},e.children}function Ak(e){var t=this,r=e.h;if(t.componentWillUnmount=function(){Is(null,t.v),t.v=null,t.h=null},t.h&&t.h!==r&&t.componentWillUnmount(),!t.v){for(var i=t.__v;i!==null&&!i.__m&&i.__!==null;)i=i.__;t.h=r,t.v={nodeType:1,parentNode:r,childNodes:[],__k:{__m:i.__m},contains:function(){return!0},insertBefore:function(s,l){this.childNodes.push(s),t.h.insertBefore(s,l)},removeChild:function(s){this.childNodes.splice(this.childNodes.indexOf(s)>>>1,1),t.h.removeChild(s)}}}Is(ti(Ok,{context:t.context},e.__v),t.v)}function Rk(e,t){var r=ti(Ak,{__v:e,h:t});return r.containerInfo=t,r}($c.prototype=new jn).__a=function(e){var t=this,r=Z1(t.__v),i=t.l.get(e);return i[0]++,function(s){var l=function(){t.props.revealOrder?(i.push(s),Nb(t,e,i)):s()};r?r(l):l()}},$c.prototype.render=function(e){this.i=null,this.l=new Map;var t=yu(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var r=t.length;r--;)this.l.set(t[r],this.i=[1,0,this.i]);return e.children},$c.prototype.componentDidUpdate=$c.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,r){Nb(e,r,t)})};var zk=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Dk=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,jk=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Uk=/[A-Z0-9]/g,Lk=typeof document<"u",$k=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};jn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(jn.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Ob=xe.event;function Hk(){}function Ik(){return this.cancelBubble}function qk(){return this.defaultPrevented}xe.event=function(e){return Ob&&(e=Ob(e)),e.persist=Hk,e.isPropagationStopped=Ik,e.isDefaultPrevented=qk,e.nativeEvent=e};var Bk={enumerable:!1,configurable:!0,get:function(){return this.class}},Ab=xe.vnode;xe.vnode=function(e){typeof e.type=="string"&&function(t){var r=t.props,i=t.type,s={},l=i.indexOf("-")===-1;for(var u in r){var d=r[u];if(!(u==="value"&&"defaultValue"in r&&d==null||Lk&&u==="children"&&i==="noscript"||u==="class"||u==="className")){var h=u.toLowerCase();u==="defaultValue"&&"value"in r&&r.value==null?u="value":u==="download"&&d===!0?d="":h==="translate"&&d==="no"?d=!1:h[0]==="o"&&h[1]==="n"?h==="ondoubleclick"?u="ondblclick":h!=="onchange"||i!=="input"&&i!=="textarea"||$k(r.type)?h==="onfocus"?u="onfocusin":h==="onblur"?u="onfocusout":jk.test(u)&&(u=h):h=u="oninput":l&&Dk.test(u)?u=u.replace(Uk,"-$&").toLowerCase():d===null&&(d=void 0),h==="oninput"&&s[u=h]&&(u="oninputCapture"),s[u]=d}}i=="select"&&s.multiple&&Array.isArray(s.value)&&(s.value=yu(r.children).forEach(function(p){p.props.selected=s.value.indexOf(p.props.value)!=-1})),i=="select"&&s.defaultValue!=null&&(s.value=yu(r.children).forEach(function(p){p.props.selected=s.multiple?s.defaultValue.indexOf(p.props.value)!=-1:s.defaultValue==p.props.value})),r.class&&!r.className?(s.class=r.class,Object.defineProperty(s,"className",Bk)):(r.className&&!r.class||r.class&&r.className)&&(s.class=s.className=r.className),t.props=s}(e),e.$$typeof=zk,Ab&&Ab(e)};var Rb=xe.__r;xe.__r=function(e){Rb&&Rb(e),e.__c};var zb=xe.diffed;xe.diffed=function(e){zb&&zb(e);var t=e.props,r=e.__e;r!=null&&e.type==="textarea"&&"value"in t&&t.value!==r.value&&(r.value=t.value==null?"":t.value)};var Yk=0;function v(e,t,r,i,s,l){t||(t={});var u,d,h=t;if("ref"in h)for(d in h={},t)d=="ref"?u=t[d]:h[d]=t[d];var p={type:e,props:h,key:r,ref:u,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Yk,__i:-1,__u:0,__source:s,__self:l};if(typeof e=="function"&&(u=e.defaultProps))for(d in u)h[d]===void 0&&(h[d]=u[d]);return xe.vnode&&xe.vnode(p),p}var wh={exports:{}},_e={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Db;function Pk(){if(Db)return _e;Db=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),g=Symbol.iterator;function b(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,T={};function M(N,q,Z){this.props=N,this.context=q,this.refs=T,this.updater=Z||w}M.prototype.isReactComponent={},M.prototype.setState=function(N,q){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,q,"setState")},M.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function _(){}_.prototype=M.prototype;function C(N,q,Z){this.props=N,this.context=q,this.refs=T,this.updater=Z||w}var O=C.prototype=new _;O.constructor=C,S(O,M.prototype),O.isPureReactComponent=!0;var U=Array.isArray,D={H:null,A:null,T:null,S:null,V:null},X=Object.prototype.hasOwnProperty;function F(N,q,Z,J,te,oe){return Z=oe.ref,{$$typeof:e,type:N,key:q,ref:Z!==void 0?Z:null,props:oe}}function ee(N,q){return F(N.type,q,void 0,void 0,void 0,N.props)}function ne(N){return typeof N=="object"&&N!==null&&N.$$typeof===e}function pe(N){var q={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Z){return q[Z]})}var ue=/\/+/g;function ie(N,q){return typeof N=="object"&&N!==null&&N.key!=null?pe(""+N.key):q.toString(36)}function ze(){}function je(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(ze,ze):(N.status="pending",N.then(function(q){N.status==="pending"&&(N.status="fulfilled",N.value=q)},function(q){N.status==="pending"&&(N.status="rejected",N.reason=q)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function Ce(N,q,Z,J,te){var oe=typeof N;(oe==="undefined"||oe==="boolean")&&(N=null);var re=!1;if(N===null)re=!0;else switch(oe){case"bigint":case"string":case"number":re=!0;break;case"object":switch(N.$$typeof){case e:case t:re=!0;break;case y:return re=N._init,Ce(re(N._payload),q,Z,J,te)}}if(re)return te=te(N),re=J===""?"."+ie(N,0):J,U(te)?(Z="",re!=null&&(Z=re.replace(ue,"$&/")+"/"),Ce(te,q,Z,"",function(Me){return Me})):te!=null&&(ne(te)&&(te=ee(te,Z+(te.key==null||N&&N.key===te.key?"":(""+te.key).replace(ue,"$&/")+"/")+re)),q.push(te)),1;re=0;var be=J===""?".":J+":";if(U(N))for(var de=0;de<N.length;de++)J=N[de],oe=be+ie(J,de),re+=Ce(J,q,Z,oe,te);else if(de=b(N),typeof de=="function")for(N=de.call(N),de=0;!(J=N.next()).done;)J=J.value,oe=be+ie(J,de++),re+=Ce(J,q,Z,oe,te);else if(oe==="object"){if(typeof N.then=="function")return Ce(je(N),q,Z,J,te);throw q=String(N),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return re}function E(N,q,Z){if(N==null)return N;var J=[],te=0;return Ce(N,J,"","",function(oe){return q.call(Z,oe,te++)}),J}function R(N){if(N._status===-1){var q=N._result;q=q(),q.then(function(Z){(N._status===0||N._status===-1)&&(N._status=1,N._result=Z)},function(Z){(N._status===0||N._status===-1)&&(N._status=2,N._result=Z)}),N._status===-1&&(N._status=0,N._result=q)}if(N._status===1)return N._result.default;throw N._result}var j=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function G(){}return _e.Children={map:E,forEach:function(N,q,Z){E(N,function(){q.apply(this,arguments)},Z)},count:function(N){var q=0;return E(N,function(){q++}),q},toArray:function(N){return E(N,function(q){return q})||[]},only:function(N){if(!ne(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},_e.Component=M,_e.Fragment=r,_e.Profiler=s,_e.PureComponent=C,_e.StrictMode=i,_e.Suspense=h,_e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,_e.__COMPILER_RUNTIME={__proto__:null,c:function(N){return D.H.useMemoCache(N)}},_e.cache=function(N){return function(){return N.apply(null,arguments)}},_e.cloneElement=function(N,q,Z){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var J=S({},N.props),te=N.key,oe=void 0;if(q!=null)for(re in q.ref!==void 0&&(oe=void 0),q.key!==void 0&&(te=""+q.key),q)!X.call(q,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&q.ref===void 0||(J[re]=q[re]);var re=arguments.length-2;if(re===1)J.children=Z;else if(1<re){for(var be=Array(re),de=0;de<re;de++)be[de]=arguments[de+2];J.children=be}return F(N.type,te,void 0,void 0,oe,J)},_e.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:l,_context:N},N},_e.createElement=function(N,q,Z){var J,te={},oe=null;if(q!=null)for(J in q.key!==void 0&&(oe=""+q.key),q)X.call(q,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(te[J]=q[J]);var re=arguments.length-2;if(re===1)te.children=Z;else if(1<re){for(var be=Array(re),de=0;de<re;de++)be[de]=arguments[de+2];te.children=be}if(N&&N.defaultProps)for(J in re=N.defaultProps,re)te[J]===void 0&&(te[J]=re[J]);return F(N,oe,void 0,void 0,null,te)},_e.createRef=function(){return{current:null}},_e.forwardRef=function(N){return{$$typeof:d,render:N}},_e.isValidElement=ne,_e.lazy=function(N){return{$$typeof:y,_payload:{_status:-1,_result:N},_init:R}},_e.memo=function(N,q){return{$$typeof:p,type:N,compare:q===void 0?null:q}},_e.startTransition=function(N){var q=D.T,Z={};D.T=Z;try{var J=N(),te=D.S;te!==null&&te(Z,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(G,j)}catch(oe){j(oe)}finally{D.T=q}},_e.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},_e.use=function(N){return D.H.use(N)},_e.useActionState=function(N,q,Z){return D.H.useActionState(N,q,Z)},_e.useCallback=function(N,q){return D.H.useCallback(N,q)},_e.useContext=function(N){return D.H.useContext(N)},_e.useDebugValue=function(){},_e.useDeferredValue=function(N,q){return D.H.useDeferredValue(N,q)},_e.useEffect=function(N,q,Z){var J=D.H;if(typeof Z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(N,q)},_e.useId=function(){return D.H.useId()},_e.useImperativeHandle=function(N,q,Z){return D.H.useImperativeHandle(N,q,Z)},_e.useInsertionEffect=function(N,q){return D.H.useInsertionEffect(N,q)},_e.useLayoutEffect=function(N,q){return D.H.useLayoutEffect(N,q)},_e.useMemo=function(N,q){return D.H.useMemo(N,q)},_e.useOptimistic=function(N,q){return D.H.useOptimistic(N,q)},_e.useReducer=function(N,q,Z){return D.H.useReducer(N,q,Z)},_e.useRef=function(N){return D.H.useRef(N)},_e.useState=function(N){return D.H.useState(N)},_e.useSyncExternalStore=function(N,q,Z){return D.H.useSyncExternalStore(N,q,Z)},_e.useTransition=function(){return D.H.useTransition()},_e.version="19.1.0",_e}var jb;function fl(){return jb||(jb=1,wh.exports=Pk()),wh.exports}var ce=fl();const or=dm(ce),Xk=RT({__proto__:null,default:or},[ce]);Array.prototype.toSorted||Object.defineProperty(Array.prototype,"toSorted",{value:function(e){return[...this].sort(e)},writable:!0,configurable:!0});function Fk(e,t){return t-e}function Gk(e){let t=e[0].name;const r=e.length,i=Math.min(4,r);for(let s=1;s<i;s++)t+=`, ${e[s].name}`;return t}function Vk(e){let t=e[0].time;for(let r=1,i=e.length;r<i;r++)t+=e[r].time;return t}function Qk(e){for(let t=0,r=e.length;t<r;t++)if(e[t].forget)return!0;return!1}var Wk=e=>{let t="";const r=new Map;for(const u of e){const{forget:d,time:h,aggregatedCount:p,name:y}=u;r.has(p)||r.set(p,[]);const g=r.get(p);g&&g.push({name:y,forget:d,time:h??0})}const i=Array.from(r.keys()).sort(Fk),s=[];let l=0;for(const u of i){const d=r.get(u);if(!d)continue;let h=Gk(d);const p=Vk(d),y=Qk(d);l+=p,d.length>4&&(h+="…"),u>1&&(h+=` × ${u}`),y&&(h=`✨${h}`),s.push(h)}return t=s.join(", "),t.length?(t.length>40&&(t=`${t.slice(0,40)}…`),l>=.01&&(t+=` (${Number(l.toFixed(2))}ms)`),t):null};function _a(e,t){return e===t||e!==e&&t!==t}var Cm=e=>{const t=e.createOscillator(),r=e.createGain();t.connect(r),r.connect(e.destination);const i={type:"sine",freq:[392,600],duration:.3,gain:.12},s=i.freq,l=i.duration/s.length;s.forEach((u,d)=>{t.frequency.setValueAtTime(u,e.currentTime+d*l)}),t.type=i.type,r.gain.setValueAtTime(i.gain,e.currentTime),r.gain.setTargetAtTime(0,e.currentTime+i.duration*.7,.05),t.start(),t.stop(e.currentTime+i.duration)},Zk=e=>new Promise(t=>{const r=new Map,i=new IntersectionObserver(s=>{for(const l of s){const u=l.target,d=l.boundingClientRect;r.set(u,d)}i.disconnect(),t(r)});for(const s of e)i.observe(s)}),Kk={mount:1,update:2,unmount:4},lt=Em(({size:e=15,name:t,fill:r="currentColor",stroke:i="currentColor",className:s,externalURL:l="",style:u},d)=>{const h=Array.isArray(e)?e[0]:e,p=Array.isArray(e)?e[1]||e[0]:e,y=`${l}#${t}`;return v("svg",{ref:d,width:`${h}px`,height:`${p}px`,fill:r,stroke:i,className:s,style:{...u,minWidth:`${h}px`,maxWidth:`${h}px`,minHeight:`${p}px`,maxHeight:`${p}px`},children:[v("title",{children:t}),v("use",{href:y})]})}),we=24,bt={width:550,height:350,initialHeight:400},Pn=240,Rr="react-scan-widget-settings-v2",iu="react-scan-widget-collapsed-v1",Ki="react-scan-widget-last-view-v1",cr=typeof window<"u";function K1(e){var t,r,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=K1(e[t]))&&(i&&(i+=" "),i+=r)}else for(r in e)e[r]&&(i&&(i+=" "),i+=r);return i}function Jk(){for(var e,t,r=0,i="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=K1(e))&&(i&&(i+=" "),i+=t);return i}var Mm="-",e4=e=>{const t=n4(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:i}=e;return{getClassGroupId:u=>{const d=u.split(Mm);return d[0]===""&&d.length!==1&&d.shift(),J1(d,t)||t4(u)},getConflictingClassGroupIds:(u,d)=>{const h=r[u]||[];return d&&i[u]?[...h,...i[u]]:h}}},J1=(e,t)=>{var u;if(e.length===0)return t.classGroupId;const r=e[0],i=t.nextPart.get(r),s=i?J1(e.slice(1),i):void 0;if(s)return s;if(t.validators.length===0)return;const l=e.join(Mm);return(u=t.validators.find(({validator:d})=>d(l)))==null?void 0:u.classGroupId},Ub=/^\[(.+)\]$/,t4=e=>{if(Ub.test(e)){const t=Ub.exec(e)[1],r=t==null?void 0:t.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},n4=e=>{const{theme:t,prefix:r}=e,i={nextPart:new Map,validators:[]};return a4(Object.entries(e.classGroups),r).forEach(([l,u])=>{Sp(u,i,l,t)}),i},Sp=(e,t,r,i)=>{e.forEach(s=>{if(typeof s=="string"){const l=s===""?t:Lb(t,s);l.classGroupId=r;return}if(typeof s=="function"){if(r4(s)){Sp(s(i),t,r,i);return}t.validators.push({validator:s,classGroupId:r});return}Object.entries(s).forEach(([l,u])=>{Sp(u,Lb(t,l),r,i)})})},Lb=(e,t)=>{let r=e;return t.split(Mm).forEach(i=>{r.nextPart.has(i)||r.nextPart.set(i,{nextPart:new Map,validators:[]}),r=r.nextPart.get(i)}),r},r4=e=>e.isThemeGetter,a4=(e,t)=>t?e.map(([r,i])=>{const s=i.map(l=>typeof l=="string"?t+l:typeof l=="object"?Object.fromEntries(Object.entries(l).map(([u,d])=>[t+u,d])):l);return[r,s]}):e,i4=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=new Map,i=new Map;const s=(l,u)=>{r.set(l,u),t++,t>e&&(t=0,i=r,r=new Map)};return{get(l){let u=r.get(l);if(u!==void 0)return u;if((u=i.get(l))!==void 0)return s(l,u),u},set(l,u){r.has(l)?r.set(l,u):s(l,u)}}},ex="!",o4=e=>{const{separator:t,experimentalParseClassName:r}=e,i=t.length===1,s=t[0],l=t.length,u=d=>{const h=[];let p=0,y=0,g;for(let M=0;M<d.length;M++){let _=d[M];if(p===0){if(_===s&&(i||d.slice(M,M+l)===t)){h.push(d.slice(y,M)),y=M+l;continue}if(_==="/"){g=M;continue}}_==="["?p++:_==="]"&&p--}const b=h.length===0?d:d.substring(y),w=b.startsWith(ex),S=w?b.substring(1):b,T=g&&g>y?g-y:void 0;return{modifiers:h,hasImportantModifier:w,baseClassName:S,maybePostfixModifierPosition:T}};return r?d=>r({className:d,parseClassName:u}):u},s4=e=>{if(e.length<=1)return e;const t=[];let r=[];return e.forEach(i=>{i[0]==="["?(t.push(...r.sort(),i),r=[]):r.push(i)}),t.push(...r.sort()),t},l4=e=>({cache:i4(e.cacheSize),parseClassName:o4(e),...e4(e)}),c4=/\s+/,u4=(e,t)=>{const{parseClassName:r,getClassGroupId:i,getConflictingClassGroupIds:s}=t,l=[],u=e.trim().split(c4);let d="";for(let h=u.length-1;h>=0;h-=1){const p=u[h],{modifiers:y,hasImportantModifier:g,baseClassName:b,maybePostfixModifierPosition:w}=r(p);let S=!!w,T=i(S?b.substring(0,w):b);if(!T){if(!S){d=p+(d.length>0?" "+d:d);continue}if(T=i(b),!T){d=p+(d.length>0?" "+d:d);continue}S=!1}const M=s4(y).join(":"),_=g?M+ex:M,C=_+T;if(l.includes(C))continue;l.push(C);const O=s(T,S);for(let U=0;U<O.length;++U){const D=O[U];l.push(_+D)}d=p+(d.length>0?" "+d:d)}return d};function d4(){let e=0,t,r,i="";for(;e<arguments.length;)(t=arguments[e++])&&(r=tx(t))&&(i&&(i+=" "),i+=r);return i}var tx=e=>{if(typeof e=="string")return e;let t,r="";for(let i=0;i<e.length;i++)e[i]&&(t=tx(e[i]))&&(r&&(r+=" "),r+=t);return r};function f4(e,...t){let r,i,s,l=u;function u(h){const p=t.reduce((y,g)=>g(y),e());return r=l4(p),i=r.cache.get,s=r.cache.set,l=d,d(h)}function d(h){const p=i(h);if(p)return p;const y=u4(h,r);return s(h,y),y}return function(){return l(d4.apply(null,arguments))}}var Je=e=>{const t=r=>r[e]||[];return t.isThemeGetter=!0,t},nx=/^\[(?:([a-z-]+):)?(.+)\]$/i,h4=/^\d+\/\d+$/,p4=new Set(["px","full","screen"]),m4=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,g4=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,v4=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,y4=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,b4=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Mr=e=>uo(e)||p4.has(e)||h4.test(e),pa=e=>ko(e,"length",C4),uo=e=>!!e&&!Number.isNaN(Number(e)),xh=e=>ko(e,"number",uo),ks=e=>!!e&&Number.isInteger(Number(e)),w4=e=>e.endsWith("%")&&uo(e.slice(0,-1)),Se=e=>nx.test(e),ma=e=>m4.test(e),x4=new Set(["length","size","percentage"]),_4=e=>ko(e,x4,rx),S4=e=>ko(e,"position",rx),T4=new Set(["image","url"]),k4=e=>ko(e,T4,N4),E4=e=>ko(e,"",M4),Es=()=>!0,ko=(e,t,r)=>{const i=nx.exec(e);return i?i[1]?typeof t=="string"?i[1]===t:t.has(i[1]):r(i[2]):!1},C4=e=>g4.test(e)&&!v4.test(e),rx=()=>!1,M4=e=>y4.test(e),N4=e=>b4.test(e),O4=()=>{const e=Je("colors"),t=Je("spacing"),r=Je("blur"),i=Je("brightness"),s=Je("borderColor"),l=Je("borderRadius"),u=Je("borderSpacing"),d=Je("borderWidth"),h=Je("contrast"),p=Je("grayscale"),y=Je("hueRotate"),g=Je("invert"),b=Je("gap"),w=Je("gradientColorStops"),S=Je("gradientColorStopPositions"),T=Je("inset"),M=Je("margin"),_=Je("opacity"),C=Je("padding"),O=Je("saturate"),U=Je("scale"),D=Je("sepia"),X=Je("skew"),F=Je("space"),ee=Je("translate"),ne=()=>["auto","contain","none"],pe=()=>["auto","hidden","clip","visible","scroll"],ue=()=>["auto",Se,t],ie=()=>[Se,t],ze=()=>["",Mr,pa],je=()=>["auto",uo,Se],Ce=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],E=()=>["solid","dashed","dotted","double","none"],R=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],j=()=>["start","end","center","between","around","evenly","stretch"],G=()=>["","0",Se],N=()=>["auto","avoid","all","avoid-page","page","left","right","column"],q=()=>[uo,Se];return{cacheSize:500,separator:":",theme:{colors:[Es],spacing:[Mr,pa],blur:["none","",ma,Se],brightness:q(),borderColor:[e],borderRadius:["none","","full",ma,Se],borderSpacing:ie(),borderWidth:ze(),contrast:q(),grayscale:G(),hueRotate:q(),invert:G(),gap:ie(),gradientColorStops:[e],gradientColorStopPositions:[w4,pa],inset:ue(),margin:ue(),opacity:q(),padding:ie(),saturate:q(),scale:q(),sepia:G(),skew:q(),space:ie(),translate:ie()},classGroups:{aspect:[{aspect:["auto","square","video",Se]}],container:["container"],columns:[{columns:[ma]}],"break-after":[{"break-after":N()}],"break-before":[{"break-before":N()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Ce(),Se]}],overflow:[{overflow:pe()}],"overflow-x":[{"overflow-x":pe()}],"overflow-y":[{"overflow-y":pe()}],overscroll:[{overscroll:ne()}],"overscroll-x":[{"overscroll-x":ne()}],"overscroll-y":[{"overscroll-y":ne()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[T]}],"inset-x":[{"inset-x":[T]}],"inset-y":[{"inset-y":[T]}],start:[{start:[T]}],end:[{end:[T]}],top:[{top:[T]}],right:[{right:[T]}],bottom:[{bottom:[T]}],left:[{left:[T]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ks,Se]}],basis:[{basis:ue()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Se]}],grow:[{grow:G()}],shrink:[{shrink:G()}],order:[{order:["first","last","none",ks,Se]}],"grid-cols":[{"grid-cols":[Es]}],"col-start-end":[{col:["auto",{span:["full",ks,Se]},Se]}],"col-start":[{"col-start":je()}],"col-end":[{"col-end":je()}],"grid-rows":[{"grid-rows":[Es]}],"row-start-end":[{row:["auto",{span:[ks,Se]},Se]}],"row-start":[{"row-start":je()}],"row-end":[{"row-end":je()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Se]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Se]}],gap:[{gap:[b]}],"gap-x":[{"gap-x":[b]}],"gap-y":[{"gap-y":[b]}],"justify-content":[{justify:["normal",...j()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...j(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...j(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[C]}],px:[{px:[C]}],py:[{py:[C]}],ps:[{ps:[C]}],pe:[{pe:[C]}],pt:[{pt:[C]}],pr:[{pr:[C]}],pb:[{pb:[C]}],pl:[{pl:[C]}],m:[{m:[M]}],mx:[{mx:[M]}],my:[{my:[M]}],ms:[{ms:[M]}],me:[{me:[M]}],mt:[{mt:[M]}],mr:[{mr:[M]}],mb:[{mb:[M]}],ml:[{ml:[M]}],"space-x":[{"space-x":[F]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[F]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Se,t]}],"min-w":[{"min-w":[Se,t,"min","max","fit"]}],"max-w":[{"max-w":[Se,t,"none","full","min","max","fit","prose",{screen:[ma]},ma]}],h:[{h:[Se,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Se,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Se,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Se,t,"auto","min","max","fit"]}],"font-size":[{text:["base",ma,pa]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",xh]}],"font-family":[{font:[Es]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Se]}],"line-clamp":[{"line-clamp":["none",uo,xh]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Mr,Se]}],"list-image":[{"list-image":["none",Se]}],"list-style-type":[{list:["none","disc","decimal",Se]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[_]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[_]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...E(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Mr,pa]}],"underline-offset":[{"underline-offset":["auto",Mr,Se]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:ie()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Se]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Se]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[_]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Ce(),S4]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",_4]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},k4]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[S]}],"gradient-via-pos":[{via:[S]}],"gradient-to-pos":[{to:[S]}],"gradient-from":[{from:[w]}],"gradient-via":[{via:[w]}],"gradient-to":[{to:[w]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[d]}],"border-w-x":[{"border-x":[d]}],"border-w-y":[{"border-y":[d]}],"border-w-s":[{"border-s":[d]}],"border-w-e":[{"border-e":[d]}],"border-w-t":[{"border-t":[d]}],"border-w-r":[{"border-r":[d]}],"border-w-b":[{"border-b":[d]}],"border-w-l":[{"border-l":[d]}],"border-opacity":[{"border-opacity":[_]}],"border-style":[{border:[...E(),"hidden"]}],"divide-x":[{"divide-x":[d]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[d]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[_]}],"divide-style":[{divide:E()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...E()]}],"outline-offset":[{"outline-offset":[Mr,Se]}],"outline-w":[{outline:[Mr,pa]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:ze()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[_]}],"ring-offset-w":[{"ring-offset":[Mr,pa]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",ma,E4]}],"shadow-color":[{shadow:[Es]}],opacity:[{opacity:[_]}],"mix-blend":[{"mix-blend":[...R(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":R()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[i]}],contrast:[{contrast:[h]}],"drop-shadow":[{"drop-shadow":["","none",ma,Se]}],grayscale:[{grayscale:[p]}],"hue-rotate":[{"hue-rotate":[y]}],invert:[{invert:[g]}],saturate:[{saturate:[O]}],sepia:[{sepia:[D]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[h]}],"backdrop-grayscale":[{"backdrop-grayscale":[p]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[y]}],"backdrop-invert":[{"backdrop-invert":[g]}],"backdrop-opacity":[{"backdrop-opacity":[_]}],"backdrop-saturate":[{"backdrop-saturate":[O]}],"backdrop-sepia":[{"backdrop-sepia":[D]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[u]}],"border-spacing-x":[{"border-spacing-x":[u]}],"border-spacing-y":[{"border-spacing-y":[u]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Se]}],duration:[{duration:q()}],ease:[{ease:["linear","in","out","in-out",Se]}],delay:[{delay:q()}],animate:[{animate:["none","spin","ping","pulse","bounce",Se]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[U]}],"scale-x":[{"scale-x":[U]}],"scale-y":[{"scale-y":[U]}],rotate:[{rotate:[ks,Se]}],"translate-x":[{"translate-x":[ee]}],"translate-y":[{"translate-y":[ee]}],"skew-x":[{"skew-x":[X]}],"skew-y":[{"skew-y":[X]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Se]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Se]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":ie()}],"scroll-mx":[{"scroll-mx":ie()}],"scroll-my":[{"scroll-my":ie()}],"scroll-ms":[{"scroll-ms":ie()}],"scroll-me":[{"scroll-me":ie()}],"scroll-mt":[{"scroll-mt":ie()}],"scroll-mr":[{"scroll-mr":ie()}],"scroll-mb":[{"scroll-mb":ie()}],"scroll-ml":[{"scroll-ml":ie()}],"scroll-p":[{"scroll-p":ie()}],"scroll-px":[{"scroll-px":ie()}],"scroll-py":[{"scroll-py":ie()}],"scroll-ps":[{"scroll-ps":ie()}],"scroll-pe":[{"scroll-pe":ie()}],"scroll-pt":[{"scroll-pt":ie()}],"scroll-pr":[{"scroll-pr":ie()}],"scroll-pb":[{"scroll-pb":ie()}],"scroll-pl":[{"scroll-pl":ie()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Se]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Mr,pa,xh]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},A4=f4(O4),$=(...e)=>A4(Jk(e));typeof navigator<"u"&&navigator.userAgent.includes("Firefox");var ax=(e,t)=>{let r=0;return i=>{const s=Date.now();if(s-r>=t)return r=s,e(i)}},Ur=e=>{if(!cr)return null;try{const t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}},Kt=(e,t)=>{if(cr)try{window.localStorage.setItem(e,JSON.stringify(t))}catch{}},$b=e=>{if(cr)try{window.localStorage.removeItem(e)}catch{}},R4=24,z4=12,Js=e=>{if(!e)return{name:"Unknown",wrappers:[],wrapperTypes:[]};const{tag:t,type:r,elementType:i}=e;let s=Ot(r);const l=[],u=[];if(Vs(e)||t===cl||t===ll||(r==null?void 0:r.$$typeof)===Symbol.for("react.memo")||(i==null?void 0:i.$$typeof)===Symbol.for("react.memo")){const d=Vs(e);u.push({type:"memo",title:d?"This component has been auto-memoized by the React Compiler.":"Memoized component that skips re-renders if props are the same",compiler:d})}if(t===R4&&u.push({type:"lazy",title:"Lazily loaded component that supports code splitting"}),t===Hu&&u.push({type:"suspense",title:"Component that can suspend while content is loading"}),t===z4&&u.push({type:"profiler",title:"Component that measures rendering performance"}),typeof s=="string"){const d=/^(\w+)\((.*)\)$/;let h=s;for(;d.test(h);){const p=h.match(d);if(p!=null&&p[1]&&(p!=null&&p[2]))l.unshift(p[1]),h=p[2];else break}s=h}return{name:s||"Unknown",wrappers:l,wrapperTypes:u}},Pu=wt(!1),Tp=wt(null),ar={corner:"bottom-right",dimensions:{isFullWidth:!1,isFullHeight:!1,width:bt.width,height:bt.height,position:{x:we,y:we}},lastDimensions:{isFullWidth:!1,isFullHeight:!1,width:bt.width,height:bt.height,position:{x:we,y:we}},componentsTree:{width:Pn}},D4=()=>{const e=Ur(Rr);return e?{corner:e.corner??ar.corner,dimensions:e.dimensions??ar.dimensions,lastDimensions:e.lastDimensions??e.dimensions??ar.lastDimensions,componentsTree:e.componentsTree??ar.componentsTree}:(Kt(Rr,{corner:ar.corner,dimensions:ar.dimensions,lastDimensions:ar.lastDimensions,componentsTree:ar.componentsTree}),ar)},se=wt(D4()),_h=()=>{if(!cr)return;const{dimensions:e}=se.value,{width:t,height:r,position:i}=e;se.value={...se.value,dimensions:{isFullWidth:t>=window.innerWidth-we*2,isFullHeight:r>=window.innerHeight-we*2,width:t,height:r,position:i}}},Ke=wt({view:"none"}),j4=Ur(iu),fn=wt(j4??null);function U4(){return!1}function Nm(e){function t(r){return this.shouldComponentUpdate=U4,ti(e,r)}return t.displayName=`Memo(${e.displayName||e.name})`,t.prototype.isReactComponent=!0,t._forwarded=!0,t}var L4=e=>{const{count:t,getScrollElement:r,estimateSize:i,overscan:s=5}=e,[l,u]=Ee(0),[d,h]=Ee(0),p=he(),y=he(null),g=he(null),b=i(),w=ft(_=>{var O;if(!y.current)return;const C=((O=_==null?void 0:_[0])==null?void 0:O.contentRect.height)??y.current.getBoundingClientRect().height;h(C)},[]),S=ft(()=>{g.current!==null&&cancelAnimationFrame(g.current),g.current=requestAnimationFrame(()=>{w(),g.current=null})},[w]);Te(()=>{const _=r();if(!_)return;y.current=_;const C=()=>{y.current&&u(y.current.scrollTop)};w(),p.current||(p.current=new ResizeObserver(()=>{S()})),p.current.observe(_),_.addEventListener("scroll",C,{passive:!0});const O=new MutationObserver(S);return O.observe(_,{attributes:!0,childList:!0,subtree:!0}),()=>{_.removeEventListener("scroll",C),p.current&&p.current.disconnect(),O.disconnect(),g.current!==null&&cancelAnimationFrame(g.current)}},[r,w,S]);const T=Qn(()=>{const _=Math.floor(l/b),C=Math.ceil(d/b);return{start:Math.max(0,_-s),end:Math.min(t,_+C+s)}},[l,b,d,t,s]);return{virtualItems:Qn(()=>{const _=[];for(let C=T.start;C<T.end;C++)_.push({key:C,index:C,start:C*b});return _},[T,b]),totalSize:t*b,scrollTop:l,containerHeight:d}};Ur("react-scann-pinned");var $4=e=>{const t=[];let r=e;for(;r;){const i=r.elementType,s=typeof i=="function"?i.displayName||i.name:typeof i=="string"?i:"Unknown",l=r.index!==void 0?`[${r.index}]`:"";t.unshift(`${s}${l}`),r=r.return??null}return t.join("::")},Ba=new WeakMap,H4=(e,t)=>{const r=t.bind(null,e);return document.addEventListener("scroll",r,{passive:!0,capture:!0}),()=>{document.removeEventListener("scroll",r,{capture:!0})}},I4={activeFlashes:new Map,create(e){const t=e.querySelector(".react-scan-flash-overlay"),r=t instanceof HTMLElement?t:(()=>{const s=document.createElement("div");s.className="react-scan-flash-overlay",e.appendChild(s);const l=H4(e,()=>{e.querySelector(".react-scan-flash-overlay")&&this.create(e)});return this.activeFlashes.set(e,{element:e,overlay:s,scrollCleanup:l}),s})(),i=Ba.get(r);i&&(clearTimeout(i),Ba.delete(r)),requestAnimationFrame(()=>{r.style.transition="none",r.style.opacity="0.9";const s=setTimeout(()=>{r.style.transition="opacity 150ms ease-out",r.style.opacity="0";const l=setTimeout(()=>{r.parentNode&&r.parentNode.removeChild(r);const u=this.activeFlashes.get(e);u!=null&&u.scrollCleanup&&u.scrollCleanup(),this.activeFlashes.delete(e),Ba.delete(r)},150);Ba.set(r,l)},300);Ba.set(r,s)})},cleanup(e){const t=this.activeFlashes.get(e);if(t){const r=Ba.get(t.overlay);r&&(clearTimeout(r),Ba.delete(t.overlay)),t.overlay.parentNode&&t.overlay.parentNode.removeChild(t.overlay),t.scrollCleanup&&t.scrollCleanup(),this.activeFlashes.delete(e)}},cleanupAll(){for(const[,e]of this.activeFlashes)this.cleanup(e.element)}},Hb=1e3,ix={updates:[],currentFiber:null,totalUpdates:0,windowOffset:0,currentIndex:0,isViewingHistory:!1,latestFiber:null,isVisible:!1,playbackSpeed:1},Xt=wt(ix),Om=wt(0),Va=[],Ya=null,q4=()=>{if(Va.length===0)return;const e=[...Va],{updates:t,totalUpdates:r,currentIndex:i,isViewingHistory:s}=Xt.value,l=[...t];let u=r;for(const{update:y}of e)l.length>=Hb&&l.shift(),l.push(y),u++;const d=Math.max(0,u-Hb);let h;s?i===r-1?h=l.length-1:i===0?h=0:d===0?h=i:h=i-1:h=l.length-1;const p=e[e.length-1];Xt.value={...Xt.value,latestFiber:p.fiber,updates:l,totalUpdates:u,windowOffset:d,currentIndex:h,isViewingHistory:s},Va=Va.slice(e.length)},ox={showTimeline:()=>{Xt.value={...Xt.value,isVisible:!0}},hideTimeline:()=>{Xt.value={...Xt.value,isVisible:!1,currentIndex:Xt.value.updates.length-1}},updateFrame:(e,t)=>{Xt.value={...Xt.value,currentIndex:e,isViewingHistory:t}},updatePlaybackSpeed:e=>{Xt.value={...Xt.value,playbackSpeed:e}},addUpdate:(e,t)=>{if(Va.push({update:e,fiber:t}),!Ya){const r=()=>{q4(),Ya=null,Va.length>0&&(Ya=setTimeout(r,96))};Ya=setTimeout(r,96)}},reset:()=>{Ya&&(clearTimeout(Ya),Ya=null),Va=[],Xt.value=ix}},It=wt({query:"",matches:[],currentMatchIndex:-1}),Sh=wt(!1),sx=(e,t=0,r=null)=>e.reduce((i,s,l)=>{var p,y;const u=s.element?$4(s.fiber):`${r}-${l}`,d=(p=s.fiber)!=null&&p.type?bx(s.fiber):void 0,h={...s,depth:t,nodeId:u,parentId:r,fiber:s.fiber,renderData:d};return i.push(h),(y=s.children)!=null&&y.length&&i.push(...sx(s.children,t+1,u)),i},[]),B4=e=>e.reduce((t,r)=>Math.max(t,r.depth),0),Y4=(e,t)=>{if(t<=0)return 24;const l=Math.max(0,e-Pn);if(l<24)return 0;const d=Math.min(l*.3,t*24)/t;return Math.max(0,Math.min(24,d))},P4=["memo","forwardRef","lazy","suspense"],lx=e=>{const t=e.match(/\[(.*?)\]/);if(!t)return null;const r=[],i=t[1].split(",");for(const s of i){const l=s.trim().toLowerCase();l&&r.push(l)}return r},X4=e=>{if(e.length===0)return!1;for(const t of e){let r=!1;for(const i of P4)if(i.toLowerCase().includes(t)){r=!0;break}if(!r)return!1}return!0},cx=(e,t)=>{if(e.length===0)return!0;if(!t.length)return!1;for(const r of e){let i=!1;for(const s of t)if(s.type.toLowerCase().includes(r)){i=!0;break}if(!i)return!1}return!0},F4=(e,t)=>Qn(()=>{const{query:r,matches:i}=t,s=i.some(p=>p.nodeId===e.nodeId),l=lx(r)||[],u=r?r.replace(/\[.*?\]/,"").trim():"";if(!r||!s)return{highlightedText:v("span",{className:"truncate",children:e.label}),typeHighlight:!1};let d=!0;if(l.length>0)if(!e.fiber)d=!1;else{const{wrapperTypes:p}=Js(e.fiber);d=cx(l,p)}let h=v("span",{className:"truncate",children:e.label});if(u)try{if(u.startsWith("/")&&u.endsWith("/")){const p=u.slice(1,-1),y=new RegExp(`(${p})`,"i"),g=e.label.split(y);h=v("span",{className:"tree-node-search-highlight",children:g.map((b,w)=>y.test(b)?v("span",{className:$("regex",{start:y.test(b)&&w===0,middle:y.test(b)&&w%2===1,end:y.test(b)&&w===g.length-1,"!ml-0":w===1}),children:b},`${e.nodeId}-${b}`):b)})}else{const p=e.label.toLowerCase(),y=u.toLowerCase(),g=p.indexOf(y);g>=0&&(h=v("span",{className:"tree-node-search-highlight",children:[e.label.slice(0,g),v("span",{className:"single",children:e.label.slice(g,g+u.length)}),e.label.slice(g+u.length)]}))}}catch{}return{highlightedText:h,typeHighlight:d&&l.length>0}},[e.label,e.nodeId,e.fiber,t]),Ib=e=>e>0?e<.1-Number.EPSILON?"< 0.1":e<1e3?Number(e.toFixed(1)).toString():`${(e/1e3).toFixed(1)}k`:"0",G4=({node:e,nodeIndex:t,hasChildren:r,isCollapsed:i,handleTreeNodeClick:s,handleTreeNodeToggle:l,searchValue:u})=>{var w,S;const d=he(null),h=he(((w=e.renderData)==null?void 0:w.renderCount)??0),{highlightedText:p,typeHighlight:y}=F4(e,u);Te(()=>{var _;const T=(_=e.renderData)==null?void 0:_.renderCount,M=d.current;!M||!h.current||!T||h.current===T||(M.classList.remove("count-flash"),M.offsetWidth,M.classList.add("count-flash"),h.current=T)},[(S=e.renderData)==null?void 0:S.renderCount]);const g=Qn(()=>{if(!e.renderData)return null;const{selfTime:T,totalTime:M,renderCount:_}=e.renderData;return _?v("span",{className:$("flex items-center gap-x-0.5 ml-1.5","text-[10px] text-neutral-400"),children:v("span",{ref:d,title:`Self time: ${Ib(T)}ms
Total time: ${Ib(M)}ms`,className:"count-badge",children:["×",_]})}):null},[e.renderData]),b=Qn(()=>{if(!e.fiber)return null;const{wrapperTypes:T}=Js(e.fiber),M=T[0];return v("span",{className:$("flex items-center gap-x-1","text-[10px] text-neutral-400 tracking-wide","overflow-hidden"),children:[M&&v(De,{children:[v("span",{title:M==null?void 0:M.title,className:$("rounded py-[1px] px-1","bg-neutral-700 text-neutral-300","truncate",M.type==="memo"&&"bg-[#8e61e3] text-white",y&&"bg-yellow-300 text-black"),children:M.type},M.type),M.compiler&&v("span",{className:"text-yellow-300 ml-1",children:"✨"})]}),T.length>1&&`×${T.length}`,g]})},[e.fiber,y,g]);return v("button",{type:"button",title:e.title,"data-index":t,className:$("flex items-center gap-x-1","pl-1 pr-2","w-full h-7","text-left","rounded","cursor-pointer select-none"),onClick:s,children:[v("button",{type:"button","data-index":t,onClick:l,className:$("w-6 h-6 flex items-center justify-center","text-left"),children:r&&v(lt,{name:"icon-chevron-right",size:12,className:$("transition-transform",!i&&"rotate-90")})}),p,b]})},V4=()=>{const e=he(null),t=he(null),r=he(null),i=he(null),s=he(null),l=he(0),u=he(!1),d=he(!1),h=he(null),[p,y]=Ee([]),[g,b]=Ee(new Set),[w,S]=Ee(void 0),[T,M]=Ee(It.value),_=Qn(()=>{const E=[],R=p,j=new Map(R.map(G=>[G.nodeId,G]));for(const G of R){let N=!0,q=G;for(;q.parentId;){const Z=j.get(q.parentId);if(!Z)break;if(g.has(Z.nodeId)){N=!1;break}q=Z}N&&E.push(G)}return E},[g,p]),C=28,{virtualItems:O,totalSize:U}=L4({count:_.length,getScrollElement:()=>e.current,estimateSize:()=>C,overscan:5}),D=ft(E=>{var G;u.current=!0,(G=i.current)==null||G.blur(),Sh.value=!0;const{parentCompositeFiber:R}=Qa(E);if(!R)return;ae.inspectState.value={kind:"focused",focusedDomElement:E,fiber:R};const j=_.findIndex(N=>N.element===E);if(j!==-1){S(j);const N=j*C,q=e.current;if(q){const Z=q.clientHeight,J=q.scrollTop;(N<J||N+C>J+Z)&&q.scrollTo({top:Math.max(0,N-Z/2),behavior:"instant"})}}},[_]),X=ft(E=>{const R=E.currentTarget,j=Number(R.dataset.index);if(Number.isNaN(j))return;const G=_[j].element;G&&D(G)},[_,D]),F=ft(E=>{b(R=>{const j=new Set(R);return j.has(E)?j.delete(E):j.add(E),j})},[]),ee=ft(E=>{E.stopPropagation();const R=E.target,j=Number(R.dataset.index);if(Number.isNaN(j))return;const G=_[j].nodeId;F(G)},[_,F]),ne=ft(E=>{var Z,J,te,oe,re;(Z=r.current)==null||Z.classList.remove("!border-red-500");const R=[];if(!E){It.value={query:E,matches:R,currentMatchIndex:-1};return}if(E.includes("[")&&!E.includes("]")&&E.length>E.indexOf("[")+1){(J=r.current)==null||J.classList.add("!border-red-500");return}const j=lx(E)||[];if(E.includes("[")&&!X4(j)){(te=r.current)==null||te.classList.add("!border-red-500");return}const G=E.replace(/\[.*?\]/,"").trim(),N=/^\/.*\/$/.test(G);let q=be=>!1;if(G.startsWith("/")&&!N&&G.length>1){(oe=r.current)==null||oe.classList.add("!border-red-500");return}if(N)try{const be=G.slice(1,-1),de=new RegExp(be,"i");q=Me=>de.test(Me)}catch{(re=r.current)==null||re.classList.add("!border-red-500");return}else if(G){const be=G.toLowerCase();q=de=>de.toLowerCase().includes(be)}for(const be of p){let de=!0;if(G&&(de=q(be.label)),de&&j.length>0)if(!be.fiber)de=!1;else{const{wrapperTypes:Me}=Js(be.fiber);de=cx(j,Me)}de&&R.push(be)}if(It.value={query:E,matches:R,currentMatchIndex:R.length>0?0:-1},R.length>0){const be=R[0],de=_.findIndex(Me=>Me.nodeId===be.nodeId);if(de!==-1){const Me=de*C,rt=e.current;if(rt){const Ln=rt.clientHeight;rt.scrollTo({top:Math.max(0,Me-Ln/2),behavior:"instant"})}}}},[p,_]),pe=ft(E=>{const R=E.currentTarget;R&&ne(R.value)},[ne]),ue=ft(E=>{const{matches:R,currentMatchIndex:j}=It.value;if(R.length===0)return;const G=E==="next"?(j+1)%R.length:(j-1+R.length)%R.length;It.value={...It.value,currentMatchIndex:G};const N=R[G],q=_.findIndex(Z=>Z.nodeId===N.nodeId);if(q!==-1){S(q);const Z=q*C,J=e.current;if(J){const te=J.clientHeight;J.scrollTo({top:Math.max(0,Z-te/2),behavior:"instant"})}}},[_]),ie=ft(E=>{if(t.current&&(t.current.style.width=`${E}px`),e.current){e.current.style.width=`${E}px`;const R=Y4(E,l.current);e.current.style.setProperty("--indentation-size",`${R}px`)}},[]),ze=ft(E=>{if(!h.current)return;const R=se.value.dimensions.width,j=Math.floor(R-Pn/2);h.current.classList.remove("cursor-ew-resize","cursor-w-resize","cursor-e-resize"),E<=Pn?h.current.classList.add("cursor-w-resize"):E>=j?h.current.classList.add("cursor-e-resize"):h.current.classList.add("cursor-ew-resize")},[]),je=ft(E=>{if(E.preventDefault(),E.stopPropagation(),!e.current)return;e.current.style.setProperty("pointer-events","none"),d.current=!0;const R=E.clientX,j=e.current.offsetWidth,G=se.value.dimensions.width,N=Math.floor(G-Pn/2);ze(j);const q=J=>{const te=R-J.clientX,oe=j+te;ze(oe);const re=Math.min(N,Math.max(Pn,oe));ie(re)},Z=()=>{e.current&&(e.current.style.removeProperty("pointer-events"),document.removeEventListener("pointermove",q),document.removeEventListener("pointerup",Z),se.value={...se.value,componentsTree:{...se.value.componentsTree,width:e.current.offsetWidth}},Kt(Rr,se.value),d.current=!1)};document.addEventListener("pointermove",q),document.addEventListener("pointerup",Z)},[ie,ze]);Te(()=>{if(!e.current)return;const E=e.current.offsetWidth;return ze(E),se.subscribe(()=>{e.current&&ze(e.current.offsetWidth)})},[ze]);const Ce=ft(()=>{u.current=!1},[]);return Te(()=>{let E=!0;const R=Z=>{const J=new Map,te=[];for(const{element:oe,name:re,fiber:be}of Z){if(!oe)continue;let de=re;const{name:Me,wrappers:rt}=Js(be);Me&&(rt.length>0?de=`${rt.join("(")}(${Me})${")".repeat(rt.length)}`:de=Me),J.set(oe,{label:Me||re,title:de,children:[],element:oe,fiber:be})}for(const{element:oe,depth:re}of Z){if(!oe)continue;const be=J.get(oe);if(be)if(re===0)te.push(be);else{let de=oe.parentElement;for(;de;){const Me=J.get(de);if(Me){Me.children=Me.children||[],Me.children.push(be);break}de=de.parentElement}}}return te},j=()=>{const Z=s.current;if(!Z)return;const J=pE(),te=R(J);if(te.length>0){const oe=sx(te),re=B4(oe);if(l.current=re,ie(se.value.componentsTree.width),y(oe),E){E=!1;const be=oe.findIndex(de=>de.element===Z);if(be!==-1){const de=be*C,Me=e.current;Me&&setTimeout(()=>{Me.scrollTo({top:de,behavior:"instant"})},96)}}}},G=ae.inspectState.subscribe(Z=>{if(Z.kind==="focused"){if(Sh.value)return;ne(""),s.current=Z.focusedDomElement,j()}});let N=0;const q=Om.subscribe(()=>{if(ae.inspectState.value.kind==="focused"){if(cancelAnimationFrame(N),d.current)return;N=requestAnimationFrame(()=>{Sh.value=!1,j()})}});return()=>{G(),q(),It.value={query:"",matches:[],currentMatchIndex:-1}}},[]),Te(()=>{const E=R=>{if(u.current&&w)switch(R.key){case"ArrowUp":{if(R.preventDefault(),R.stopPropagation(),w>0){const j=_[w-1];j!=null&&j.element&&D(j.element)}return}case"ArrowDown":{if(R.preventDefault(),R.stopPropagation(),w<_.length-1){const j=_[w+1];j!=null&&j.element&&D(j.element)}return}case"ArrowLeft":{R.preventDefault(),R.stopPropagation();const j=_[w];j!=null&&j.nodeId&&F(j.nodeId);return}case"ArrowRight":{R.preventDefault(),R.stopPropagation();const j=_[w];j!=null&&j.nodeId&&F(j.nodeId);return}}};return document.addEventListener("keydown",E),()=>{document.removeEventListener("keydown",E)}},[w,_,D,F]),Te(()=>It.subscribe(M),[]),Te(()=>se.subscribe(R=>{var j;(j=t.current)==null||j.style.setProperty("transition","width 0.1s"),ie(R.componentsTree.width),setTimeout(()=>{var G;(G=t.current)==null||G.style.removeProperty("transition")},500)}),[]),v("div",{className:"react-scan-components-tree flex",children:[v("div",{ref:h,onPointerDown:je,className:"relative resize-v-line",children:v("span",{children:v(lt,{name:"icon-ellipsis",size:18})})}),v("div",{ref:t,className:"flex flex-col h-full",children:[v("div",{className:"p-2 border-b border-[#1e1e1e]",children:v("div",{ref:r,title:`Search components by:

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
`,className:$("relative","flex items-center gap-x-1 px-2","rounded","border border-transparent","focus-within:border-[#454545]","bg-[#1e1e1e] text-neutral-300","transition-colors","whitespace-nowrap","overflow-hidden"),children:[v(lt,{name:"icon-search",size:12,className:" text-neutral-500"}),v("div",{className:"relative flex-1 h-7 overflow-hidden",children:v("input",{ref:i,type:"text",value:It.value.query,onClick:E=>{E.stopPropagation(),E.currentTarget.focus()},onPointerDown:E=>{E.stopPropagation()},onKeyDown:E=>{E.key==="Escape"&&E.currentTarget.blur(),It.value.matches.length&&(E.key==="Enter"&&E.shiftKey?ue("prev"):E.key==="Enter"&&(E.metaKey||E.ctrlKey?(E.preventDefault(),E.stopPropagation(),D(It.value.matches[It.value.currentMatchIndex].element),E.currentTarget.focus()):ue("next")))},onChange:pe,className:"absolute inset-y-0 inset-x-1",placeholder:"Component name, /regex/, or [type]"})}),It.value.query?v(De,{children:[v("span",{className:"flex items-center gap-x-0.5 text-xs text-neutral-500",children:[It.value.currentMatchIndex+1,"|",It.value.matches.length]}),!!It.value.matches.length&&v(De,{children:[v("button",{type:"button",onClick:E=>{E.stopPropagation(),ue("prev")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:v(lt,{name:"icon-chevron-right",className:"-rotate-90",size:12})}),v("button",{type:"button",onClick:E=>{E.stopPropagation(),ue("next")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:v(lt,{name:"icon-chevron-right",className:"rotate-90",size:12})})]}),v("button",{type:"button",onClick:E=>{E.stopPropagation(),ne("")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:v(lt,{name:"icon-close",size:12})})]}):!!p.length&&v("span",{className:"text-xs text-neutral-500",children:p.length})]})}),v("div",{className:"flex-1 overflow-hidden",children:v("div",{ref:e,onPointerLeave:Ce,className:"tree h-full overflow-auto will-change-transform",children:v("div",{className:"relative w-full",style:{height:U},children:O.map(E=>{var N;const R=_[E.index];if(!R)return null;const j=ae.inspectState.value.kind==="focused"&&R.element===ae.inspectState.value.focusedDomElement,G=E.index===w;return v("div",{className:$("absolute left-0 w-full overflow-hidden","text-neutral-400 hover:text-neutral-300","bg-transparent hover:bg-[#5f3f9a]/20",(j||G)&&"text-neutral-300 bg-[#5f3f9a]/40 hover:bg-[#5f3f9a]/40"),style:{top:E.start,height:C},children:v("div",{className:"w-full h-full",style:{paddingLeft:`calc(${R.depth} * var(--indentation-size))`},children:v(G4,{node:R,nodeIndex:E.index,hasChildren:!!((N=R.children)!=null&&N.length),isCollapsed:g.has(R.nodeId),handleTreeNodeClick:X,handleTreeNodeToggle:ee,searchValue:T})})},R.nodeId)})})})})]})]})},xu=Yu(({text:e,children:t,onCopy:r,className:i,iconSize:s=14})=>{const[l,u]=Ee(!1);Te(()=>{if(l){const p=setTimeout(()=>u(!1),600);return()=>{clearTimeout(p)}}},[l]);const d=ft(p=>{p.preventDefault(),p.stopPropagation(),navigator.clipboard.writeText(e).then(()=>{u(!0),r==null||r(!0,e)},()=>{r==null||r(!1,e)})},[e,r]),h=v("button",{onClick:d,type:"button",className:$("z-10","flex items-center justify-center","hover:text-dev-pink-400","transition-colors duration-200 ease-in-out","cursor-pointer",`size-[${s}px]`,i),children:v(lt,{name:`icon-${l?"check":"copy"}`,size:[s],className:$(l&&"text-green-500")})});return t?t({ClipboardIcon:h,onClick:d}):h}),Q4=({length:e,expanded:t,onToggle:r,isNegative:i})=>v("div",{className:"flex items-center gap-1",children:[v("button",{type:"button",onClick:r,className:"flex items-center p-0 opacity-50",children:v(lt,{name:"icon-chevron-right",size:12,className:$("transition-[color,transform]",i?"text-[#f87171]":"text-[#4ade80]",t&&"rotate-90")})}),v("span",{children:["Array(",e,")"]})]}),kp=({value:e,path:t,isNegative:r})=>{const[i,s]=Ee(!1);if(!(e!==null&&typeof e=="object"&&!(e instanceof Date)))return v("div",{className:"flex items-center gap-1",children:[v("span",{className:"text-gray-500",children:[t,":"]}),v("span",{className:"truncate",children:ku(e)})]});const u=Object.entries(e);return v("div",{className:"flex flex-col",children:[v("div",{className:"flex items-center gap-1",children:[v("button",{type:"button",onClick:()=>s(!i),className:"flex items-center p-0 opacity-50",children:v(lt,{name:"icon-chevron-right",size:12,className:$("transition-[color,transform]",r?"text-[#f87171]":"text-[#4ade80]",i&&"rotate-90")})}),v("span",{className:"text-gray-500",children:[t,":"]}),!i&&v("span",{className:"truncate",children:e instanceof Date?ku(e):`{${Object.keys(e).join(", ")}}`})]}),i&&v("div",{className:"pl-5 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:u.map(([d,h])=>v(kp,{value:h,path:d,isNegative:r},d))})]})},_u=({value:e,expanded:t,onToggle:r,isNegative:i})=>{const{value:s,error:l}=vE(e);return l?v("span",{className:"text-gray-500 font-italic",children:l}):s!==null&&typeof s=="object"&&!(s instanceof Promise)?Array.isArray(s)?v("div",{className:"flex flex-col gap-1 relative",children:[v(Q4,{length:s.length,expanded:t,onToggle:r,isNegative:i}),t&&v("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:s.map((d,h)=>v(kp,{value:d,path:h.toString(),isNegative:i},h.toString()))}),v(xu,{text:Xb(s),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:d})=>v(De,{children:d})})]}):v("div",{className:"flex items-start gap-1 relative",children:[v("button",{type:"button",onClick:r,className:$("flex items-center","p-0 mt-0.5 mr-1","opacity-50"),children:v(lt,{name:"icon-chevron-right",size:12,className:$("transition-[color,transform]",i?"text-[#f87171]":"text-[#4ade80]",t&&"rotate-90")})}),v("div",{className:"flex-1",children:t?v("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:Object.entries(s).map(([d,h])=>v(kp,{value:h,path:d,isNegative:i},d))}):v("span",{children:ku(s)})}),v(xu,{text:Xb(s),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:d})=>v(De,{children:d})})]}):v("span",{children:ku(s)})},W4=50;wt({fiber:null,fiberProps:{current:[],changes:new Set},fiberState:{current:[],changes:new Set},fiberContext:{current:[],changes:new Set}});var Ep=e=>{switch(e.kind){case"initialized":return e.changes.currentValue;case"partially-initialized":return e.value}},qb=(e,t)=>{for(const r of e){const i=t.get(r.name);if(i){t.set(i.name,{count:i.count+1,currentValue:r.value,id:i.name,lastUpdated:Date.now(),name:i.name,previousValue:r.prevValue});continue}t.set(r.name,{count:1,currentValue:r.value,id:r.name,lastUpdated:Date.now(),name:r.name,previousValue:r.prevValue})}},Z4=(e,t)=>{for(const r of e){const i=t.contextChanges.get(r.contextType);if(i){if(_a(Ep(i),r.value))continue;if(i.kind==="partially-initialized"){t.contextChanges.set(r.contextType,{kind:"initialized",changes:{count:1,currentValue:r.value,id:r.contextType.toString(),lastUpdated:Date.now(),name:r.name,previousValue:i.value}});continue}t.contextChanges.set(r.contextType,{kind:"initialized",changes:{count:i.changes.count+1,currentValue:r.value,id:r.contextType.toString(),lastUpdated:Date.now(),name:r.name,previousValue:i.changes.currentValue}});continue}t.contextChanges.set(r.contextType,{kind:"partially-initialized",id:r.contextType.toString(),lastUpdated:Date.now(),name:r.name,value:r.value})}},K4=e=>{const t={contextChanges:new Map,propsChanges:new Map,stateChanges:new Map};return e.forEach(r=>{Z4(r.contextChanges,t),qb(r.stateChanges,t.stateChanges),qb(r.propsChanges,t.propsChanges)}),t},Bb=(e,t)=>{const r=new Map;return e.forEach((i,s)=>{r.set(s,i)}),t.forEach((i,s)=>{const l=r.get(s);if(!l){r.set(s,i);return}r.set(s,{count:l.count+i.count,currentValue:i.currentValue,id:i.id,lastUpdated:i.lastUpdated,name:i.name,previousValue:i.previousValue})}),r},J4=(e,t)=>{const r=new Map;return e.contextChanges.forEach((i,s)=>{r.set(s,i)}),t.contextChanges.forEach((i,s)=>{const l=r.get(s);if(!l){r.set(s,i);return}if(Ep(i)!==Ep(l))switch(l.kind){case"initialized":switch(i.kind){case"initialized":{r.set(s,{kind:"initialized",changes:{...i.changes,count:i.changes.count+l.changes.count+1,currentValue:i.changes.currentValue,previousValue:i.changes.previousValue}});return}case"partially-initialized":{r.set(s,{kind:"initialized",changes:{count:l.changes.count+1,currentValue:i.value,id:i.id,lastUpdated:i.lastUpdated,name:i.name,previousValue:l.changes.currentValue}});return}}case"partially-initialized":switch(i.kind){case"initialized":{r.set(s,{kind:"initialized",changes:{count:i.changes.count+1,currentValue:i.changes.currentValue,id:i.changes.id,lastUpdated:i.changes.lastUpdated,name:i.changes.name,previousValue:l.value}});return}case"partially-initialized":{r.set(s,{kind:"initialized",changes:{count:1,currentValue:i.value,id:i.id,lastUpdated:i.lastUpdated,name:i.name,previousValue:l.value}});return}}}}),r},eE=(e,t)=>{const r=J4(e,t),i=Bb(e.propsChanges,t.propsChanges),s=Bb(e.stateChanges,t.stateChanges);return{contextChanges:r,propsChanges:i,stateChanges:s}},Cp=e=>Array.from(e.propsChanges.values()).reduce((t,r)=>t+r.count,0)+Array.from(e.stateChanges.values()).reduce((t,r)=>t+r.count,0)+Array.from(e.contextChanges.values()).filter(t=>t.kind==="initialized").reduce((t,r)=>t+r.changes.count,0),tE=e=>{const t=he({queue:[]}),[r,i]=Ee({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),s=ae.inspectState.value.kind==="focused"?ae.inspectState.value.fiber:null,l=s?xa(s):null;return Te(()=>{const u=setInterval(()=>{t.current.queue.length!==0&&(i(d=>{const h=K4(t.current.queue),p=eE(d,h);return Cp(d),Cp(p),p}),t.current.queue=[])},W4);return()=>{clearInterval(u)}},[s]),Te(()=>{if(!l)return;const u=h=>{var p;(p=t.current)==null||p.queue.push(h)};let d=ae.changesListeners.get(l);return d||(d=[],ae.changesListeners.set(l,d)),d.push(u),()=>{var h;i({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),t.current.queue=[],ae.changesListeners.set(l,((h=ae.changesListeners.get(l))==null?void 0:h.filter(p=>p!==u))??[])}},[l]),Te(()=>()=>{i({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),t.current.queue=[]},[l]),r},Su=e=>{var t;if(e==null)return{value:e};if(typeof e=="function")return{value:e};if(typeof e!="object")return{value:e};if(ho(e))return{value:"Promise"};try{const r=Object.getPrototypeOf(e);return r===Promise.prototype||((t=r==null?void 0:r.constructor)==null?void 0:t.name)==="Promise"?{value:"Promise"}:{value:e}}catch{return{value:null,error:"Error accessing value"}}},nE=Yu(()=>{const[e,t]=Ee(!0),r=tE(),[i,s]=Ee(!1),l=Cp(r)>0;Te(()=>{if(!i&&l){const h=setTimeout(()=>{s(!0),requestAnimationFrame(()=>{t(!0)})},0);return()=>clearTimeout(h)}},[i,l]);const u=new Map(Array.from(r.contextChanges.entries()).filter(([,h])=>h.kind==="initialized").map(([h,p])=>[h,p.kind==="partially-initialized"?null:p.changes])),d=ae.inspectState.value.kind==="focused"?ae.inspectState.value.fiber:null;if(d)return v(De,{children:[v(aE,{}),v("div",{className:"overflow-hidden h-full flex flex-col gap-y-2",children:[v("div",{className:"flex flex-col gap-2 px-3 pt-2",children:[v("span",{className:"text-sm font-medium text-[#888]",children:["Why did"," ",v("span",{className:"text-[#A855F7]",children:Ot(d)})," ","render?"]}),!l&&v("div",{className:"text-sm text-[#737373] bg-[#1E1E1E] rounded-md p-4 flex flex-col gap-4",children:[v("div",{children:"No changes detected since selecting"}),v("div",{children:"The props, state, and context changes within your component will be reported here"})]})]}),v("div",{className:$("flex flex-col gap-y-2 pl-3 relative overflow-y-auto h-full"),children:[v(Th,{changes:r.propsChanges,title:"Changed Props",isExpanded:e}),v(Th,{renderName:h=>rE(h,Ot(si(d))??"Unknown Component"),changes:r.stateChanges,title:"Changed State",isExpanded:e}),v(Th,{changes:u,title:"Changed Context",isExpanded:e})]})]})]})}),rE=(e,t)=>{if(Number.isNaN(Number(e)))return e;const r=Number.parseInt(e);return v("span",{className:"truncate",children:[v("span",{className:"text-white",children:[r,(s=>{const l=s%10,u=s%100;if(u>=11&&u<=13)return"th";switch(l){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}})(r)," hook"," "]}),v("span",{style:{color:"#666"},children:["called in ",v("i",{className:"text-[#A855F7] truncate",children:t})]})]})},aE=Yu(()=>{const e=he(null),t=he(null),r=he(null),i=he({isPropsChanged:!1,isStateChanged:!1,isContextChanged:!1});return Te(()=>{const s=ax(()=>{var d,h,p;const u=[];((d=e.current)==null?void 0:d.dataset.flash)==="true"&&u.push(e.current),((h=t.current)==null?void 0:h.dataset.flash)==="true"&&u.push(t.current),((p=r.current)==null?void 0:p.dataset.flash)==="true"&&u.push(r.current);for(const y of u)y.classList.remove("count-flash-white"),y.offsetWidth,y.classList.add("count-flash-white")},400);return Xt.subscribe(u=>{var y,g,b,w,S,T;if(!e.current||!t.current||!r.current)return;const{currentIndex:d,updates:h}=u,p=h[d];!p||d===0||(s(),i.current={isPropsChanged:(((g=(y=p.props)==null?void 0:y.changes)==null?void 0:g.size)??0)>0,isStateChanged:(((w=(b=p.state)==null?void 0:b.changes)==null?void 0:w.size)??0)>0,isContextChanged:(((T=(S=p.context)==null?void 0:S.changes)==null?void 0:T.size)??0)>0},e.current.dataset.flash!=="true"&&(e.current.dataset.flash=i.current.isPropsChanged.toString()),t.current.dataset.flash!=="true"&&(t.current.dataset.flash=i.current.isStateChanged.toString()),r.current.dataset.flash!=="true"&&(r.current.dataset.flash=i.current.isContextChanged.toString()))})},[]),v("button",{type:"button",className:$("react-section-header","overflow-hidden","max-h-0","transition-[max-height]"),children:v("div",{className:$("flex-1 react-scan-expandable"),children:v("div",{className:"overflow-hidden",children:v("div",{className:"flex items-center whitespace-nowrap",children:[v("div",{className:"flex items-center gap-x-2",children:"What changed?"}),v("div",{className:$("ml-auto","change-scope","transition-opacity duration-300 delay-150"),children:[v("div",{ref:e,children:"props"}),v("div",{ref:t,children:"state"}),v("div",{ref:r,children:"context"})]})]})})})})}),iE=e=>e,Th=Yu(({title:e,changes:t,renderName:r=iE})=>{const[i,s]=Ee(new Set),[l,u]=Ee(new Set),d=Array.from(t.entries());return t.size===0?null:v("div",{children:[v("div",{className:"text-xs text-[#888] mb-1.5",children:e}),v("div",{className:"flex flex-col gap-2",children:d.map(([h,p])=>{const y=l.has(String(h)),{value:g,error:b}=Su(p.previousValue),{value:w,error:S}=Su(p.currentValue),T=hx(g,w);return v("div",{children:[v("button",{onClick:()=>{u(M=>{const _=new Set(M);return _.has(String(h))?_.delete(String(h)):_.add(String(h)),_})},className:"flex items-center gap-2 w-full bg-transparent border-none p-0 cursor-pointer text-white text-xs",children:v("div",{className:"flex items-center gap-1.5 flex-1",children:[v(lt,{name:"icon-chevron-right",size:12,className:$("text-[#666] transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",{"rotate-90":y})}),v("div",{className:"whitespace-pre-wrap break-words text-left font-medium flex items-center gap-x-1.5",children:[r(p.name),v(cE,{count:p.count,isFunction:typeof p.currentValue=="function",showWarning:T.changes.length===0,forceFlash:!0})]})]})}),v("div",{className:$("react-scan-expandable",{"react-scan-expanded":y}),children:v("div",{className:"pl-3 text-xs font-mono border-l-1 border-[#333]",children:v("div",{className:"flex flex-col gap-0.5",children:b||S?v(oE,{currError:S,prevError:b}):T.changes.length>0?v(sE,{change:p,diff:T,expandedFns:i,renderName:r,setExpandedFns:s,title:e}):v(lE,{currValue:w,entryKey:h,expandedFns:i,prevValue:g,setExpandedFns:s})})})})]},h)})})]})}),oE=({prevError:e,currError:t})=>v(De,{children:[e&&v("div",{className:"text-[#f87171] bg-[#2a1515] pr-1.5 py-[3px] rounded italic",children:e}),t&&v("div",{className:"text-[#4ade80] bg-[#1a2a1a] pr-1.5 py-[3px] rounded italic mt-0.5",children:t})]}),sE=({diff:e,title:t,renderName:r,change:i,expandedFns:s,setExpandedFns:l})=>e.changes.map((u,d)=>{const{value:h,error:p}=Su(u.prevValue),{value:y,error:g}=Su(u.currentValue),b=typeof h=="function"||typeof y=="function";let w;return t==="Props"&&(w=u.path.length>0?`${r(String(i.name))}.${qn(u.path)}`:void 0),t==="State"&&u.path.length>0&&(w=`state.${qn(u.path)}`),w||(w=qn(u.path)),v("div",{className:$("flex flex-col gap-y-1",d<e.changes.length-1&&"mb-4"),children:[w&&v("div",{className:"text-[#666] text-[10px]",children:w}),v("button",{type:"button",className:$("group","flex items-start","py-[3px] px-1.5","text-left text-[#f87171] bg-[#2a1515]","rounded","overflow-hidden break-all",b&&"cursor-pointer"),onClick:b?()=>{const S=`${qn(u.path)}-prev`;l(T=>{const M=new Set(T);return M.has(S)?M.delete(S):M.add(S),M})}:void 0,children:[v("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),v("span",{className:"flex-1 whitespace-nowrap font-mono",children:p?v("span",{className:"italic text-[#f87171]",children:p}):b?v("div",{className:"flex gap-1 items-start flex-col",children:[v("div",{className:"flex gap-1 items-start w-full",children:[v("span",{className:"flex-1 max-h-40",children:Np(h,s.has(`${qn(u.path)}-prev`))}),typeof h=="function"&&v(xu,{text:h.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:S})=>v(De,{children:S})})]}),(h==null?void 0:h.toString())===(y==null?void 0:y.toString())&&v("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):v(_u,{value:h,expanded:s.has(`${qn(u.path)}-prev`),onToggle:()=>{const S=`${qn(u.path)}-prev`;l(T=>{const M=new Set(T);return M.has(S)?M.delete(S):M.add(S),M})},isNegative:!0})})]}),v("button",{type:"button",className:$("group","flex items-start","py-[3px] px-1.5","text-left text-[#4ade80] bg-[#1a2a1a]","rounded","overflow-hidden break-all",b&&"cursor-pointer"),onClick:b?()=>{const S=`${qn(u.path)}-current`;l(T=>{const M=new Set(T);return M.has(S)?M.delete(S):M.add(S),M})}:void 0,children:[v("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),v("span",{className:"flex-1 whitespace-pre-wrap font-mono",children:g?v("span",{className:"italic text-[#4ade80]",children:g}):b?v("div",{className:"flex gap-1 items-start flex-col",children:[v("div",{className:"flex gap-1 items-start w-full",children:[v("span",{className:"flex-1",children:Np(y,s.has(`${qn(u.path)}-current`))}),typeof y=="function"&&v(xu,{text:y.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:S})=>v(De,{children:S})})]}),(h==null?void 0:h.toString())===(y==null?void 0:y.toString())&&v("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):v(_u,{value:y,expanded:s.has(`${qn(u.path)}-current`),onToggle:()=>{const S=`${qn(u.path)}-current`;l(T=>{const M=new Set(T);return M.has(S)?M.delete(S):M.add(S),M})},isNegative:!1})})]})]},`${w}-${i.name}-${d}`)}),lE=({prevValue:e,currValue:t,entryKey:r,expandedFns:i,setExpandedFns:s})=>v(De,{children:[v("div",{className:"group flex gap-0.5 items-start text-[#f87171] bg-[#2a1515] py-[3px] px-1.5 rounded",children:[v("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),v("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:v(_u,{value:e,expanded:i.has(`${String(r)}-prev`),onToggle:()=>{const l=`${String(r)}-prev`;s(u=>{const d=new Set(u);return d.has(l)?d.delete(l):d.add(l),d})},isNegative:!0})})]}),v("div",{className:"group flex gap-0.5 items-start text-[#4ade80] bg-[#1a2a1a] py-[3px] px-1.5 rounded mt-0.5",children:[v("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),v("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:v(_u,{value:t,expanded:i.has(`${String(r)}-current`),onToggle:()=>{const l=`${String(r)}-current`;s(u=>{const d=new Set(u);return d.has(l)?d.delete(l):d.add(l),d})},isNegative:!1})})]}),typeof t=="object"&&t!==null&&v("div",{className:"text-[#666] text-[10px] italic mt-1 flex items-center gap-x-1",children:[v(lt,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),v("span",{children:"Reference changed but objects are structurally the same"})]})]}),cE=({count:e,forceFlash:t,isFunction:r,showWarning:i})=>{const s=he(!0),l=he(null),u=he(e);return Te(()=>{const d=l.current;!d||u.current===e||(d.classList.remove("count-flash"),d.offsetWidth,d.classList.add("count-flash"),u.current=e)},[e]),Te(()=>{if(s.current){s.current=!1;return}if(t){let d=setTimeout(()=>{var h;(h=l.current)==null||h.classList.add("count-flash-white"),d=setTimeout(()=>{var p;(p=l.current)==null||p.classList.remove("count-flash-white")},300)},500);return()=>{clearTimeout(d)}}},[t]),v("div",{ref:l,className:"count-badge",children:[i&&v(lt,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),r&&v(lt,{name:"icon-function",className:"text-[#A855F7] mb-px",size:14}),"x",e]})},va={lastRendered:new Map,expandedPaths:new Set,cleanup:()=>{va.lastRendered.clear(),va.expandedPaths.clear(),I4.cleanupAll(),xE(),ox.reset()}},ux=class extends jn{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null}),va.cleanup()}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){var e;return this.state.hasError?v("div",{className:"p-4 bg-red-950/50 h-screen backdrop-blur-sm",children:[v("div",{className:"flex items-center gap-2 mb-3 text-red-400 font-medium",children:[v(lt,{name:"icon-flame",className:"text-red-500",size:16}),"Something went wrong in the inspector"]}),v("div",{className:"p-3 bg-black/40 rounded font-mono text-xs text-red-300 mb-4 break-words",children:((e=this.state.error)==null?void 0:e.message)||JSON.stringify(this.state.error)}),v("button",{type:"button",onClick:this.handleReset,className:"px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2",children:"Reset Inspector"})]}):this.props.children}},uE=ci(()=>$("react-scan-inspector","flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",!Pu.value&&"opacity-100 delay-300 pointer-events-auto")),dE=Nm(()=>{const e=he(null),t=r=>{if(!r)return;e.current=r;const{data:i,shouldUpdate:s}=SE(r);if(s){const l={timestamp:Date.now(),fiberInfo:yE(r),props:i.fiberProps,state:i.fiberState,context:i.fiberContext,stateNames:wE(r)};ox.addUpdate(l,r)}};return Ks(()=>{const r=ae.inspectState.value;Zs(()=>{var l;if(r.kind!=="focused"||!r.focusedDomElement){e.current=null,va.cleanup();return}r.kind==="focused"&&(Pu.value=!1);const{parentCompositeFiber:i}=Pb(r.focusedDomElement,r.fiber);if(!i){ae.inspectState.value={kind:"inspect-off"},Ke.value={view:"none"};return}((l=e.current)==null?void 0:l.type)!==i.type&&(e.current=i,va.cleanup(),t(i))})}),Ks(()=>{Om.value,Zs(()=>{const r=ae.inspectState.value;if(r.kind!=="focused"||!r.focusedDomElement){e.current=null,va.cleanup();return}const{parentCompositeFiber:i}=Pb(r.focusedDomElement,r.fiber);if(!i){ae.inspectState.value={kind:"inspect-off"},Ke.value={view:"none"};return}t(i),r.focusedDomElement.isConnected||(e.current=null,va.cleanup(),ae.inspectState.value={kind:"inspecting",hoveredDomElement:null})})}),Te(()=>()=>{va.cleanup()},[]),v(ux,{children:v("div",{className:uE,children:v("div",{className:"w-full h-full",children:v(nE,{})})})})}),fE=Nm(()=>ae.inspectState.value.kind!=="focused"?null:v(ux,{children:[v(dE,{}),v(V4,{})]})),dx=e=>{var t,r,i;if("__REACT_DEVTOOLS_GLOBAL_HOOK__"in window){const s=window.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!(s!=null&&s.renderers))return null;for(const[,l]of Array.from(s.renderers))try{const u=(t=l.findFiberByHostInstance)==null?void 0:t.call(l,e);if(u)return u}catch{}}if("_reactRootContainer"in e){const l=e._reactRootContainer;return((i=(r=l==null?void 0:l._internalRoot)==null?void 0:r.current)==null?void 0:i.child)??null}for(const s in e)if(s.startsWith("__reactInternalInstance$")||s.startsWith("__reactFiber"))return e[s];return null},Am=e=>{let t=e;for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.child)break;t=t.child}for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.return)break;t=t.return}return null},Rm=e=>{if(!e)return null;try{const t=dx(e);if(!t)return null;const r=fo(t);return r?r[0]:null}catch{return null}},fo=e=>{let t=e,r=null;for(;t;){if(Iu(t))return[t,r];Gs(t)&&!r&&(r=t),t=t.return}return null},Yb=(e,t)=>!!gm(t,i=>i===e),hE=async e=>{const t=Rm(e);if(!t)return null;const r=Am(t);if(!r)return null;const i=(await Zk([r])).get(r);return i||null},Qa=e=>{const t=Rm(e);if(!t)return{};if(!Am(t))return{};const i=fo(t);if(!i)return{};const[s]=i;return{parentCompositeFiber:s}},Pb=(e,t)=>{var d,h;if(!e.isConnected)return{};let r=t??Rm(e);if(!r)return{};let i=r,s=null,l=null;for(;i;){if(!i.stateNode){i=i.return;continue}if((d=Le.instrumentation)!=null&&d.fiberRoots.has(i.stateNode)){s=i,l=i.stateNode.current;break}i=i.return}if(!s||!l)return{};if(r=Yb(r,l)?r:r.alternate??r,!r)return{};if(!Am(r))return{};const u=(h=fo(r))==null?void 0:h[0];return u?{parentCompositeFiber:Yb(u,l)?u:u.alternate??u}:{}},fx=e=>{var s;const t=e.memoizedProps??{},r=((s=e.alternate)==null?void 0:s.memoizedProps)??{},i=[];for(const l in t){if(l==="children")continue;const u=t[l],d=r[l];_a(u,d)||i.push({name:l,value:u,prevValue:d,type:1})}return i},Mp=new Set(["HTML","HEAD","META","TITLE","BASE","SCRIPT","SCRIPT","STYLE","LINK","NOSCRIPT","SOURCE","TRACK","EMBED","OBJECT","PARAM","TEMPLATE","PORTAL","SLOT","AREA","XML","DOCTYPE","COMMENT"]),Tu=(e,t=!0)=>{if(e.stateNode&&"nodeType"in e.stateNode){const i=e.stateNode;return t&&i.tagName&&Mp.has(i.tagName.toLowerCase())?null:i}let r=e.child;for(;r;){const i=Tu(r,t);if(i)return i;r=r.sibling}return null},pE=(e=document.body)=>{const t=[],r=s=>{if(!s)return null;const{parentCompositeFiber:l}=Qa(s);return l&&Tu(l)===s?s:null},i=(s,l=0)=>{const u=r(s);if(u){const{parentCompositeFiber:d}=Qa(u);if(!d)return;t.push({element:u,depth:l,name:Ot(d.type)??"Unknown",fiber:d})}for(const d of Array.from(s.children))i(d,u?l+1:l)};return i(e),t},Xb=e=>{try{if(e===null)return"null";if(e===void 0)return"undefined";if(ho(e))return"Promise";if(typeof e=="function"){const t=e.toString();try{return t.replace(/\s+/g," ").replace(/{\s+/g,`{
  `).replace(/;\s+/g,`;
  `).replace(/}\s*$/g,`
}`).replace(/\(\s+/g,"(").replace(/\s+\)/g,")").replace(/,\s+/g,", ")}catch{return t}}switch(!0){case e instanceof Date:return e.toISOString();case e instanceof RegExp:return e.toString();case e instanceof Error:return`${e.name}: ${e.message}`;case e instanceof Map:return JSON.stringify(Array.from(e.entries()),null,2);case e instanceof Set:return JSON.stringify(Array.from(e),null,2);case e instanceof DataView:return JSON.stringify(Array.from(new Uint8Array(e.buffer)),null,2);case e instanceof ArrayBuffer:return JSON.stringify(Array.from(new Uint8Array(e)),null,2);case(ArrayBuffer.isView(e)&&"length"in e):return JSON.stringify(Array.from(e),null,2);case Array.isArray(e):return JSON.stringify(e,null,2);case typeof e=="object":return JSON.stringify(e,null,2);default:return String(e)}}catch{return String(e)}},mE=(e,t)=>{try{return typeof e!="function"||typeof t!="function"?!1:e.toString()===t.toString()}catch{return!1}},hx=(e,t,r=[],i=new WeakSet)=>{if(e===t)return{type:"primitive",changes:[],hasDeepChanges:!1};if(typeof e=="function"&&typeof t=="function"){const p=mE(e,t);return{type:"primitive",changes:[{path:r,prevValue:e,currentValue:t,sameFunction:p}],hasDeepChanges:!p}}if(e===null||t===null||e===void 0||t===void 0||typeof e!="object"||typeof t!="object")return{type:"primitive",changes:[{path:r,prevValue:e,currentValue:t}],hasDeepChanges:!0};if(i.has(e)||i.has(t))return{type:"object",changes:[{path:r,prevValue:"[Circular]",currentValue:"[Circular]"}],hasDeepChanges:!1};i.add(e),i.add(t);const s=e,l=t,u=new Set([...Object.keys(s),...Object.keys(l)]),d=[];let h=!1;for(const p of u){const y=s[p],g=l[p];if(y!==g)if(typeof y=="object"&&typeof g=="object"&&y!==null&&g!==null){const b=hx(y,g,[...r,p],i);d.push(...b.changes),b.hasDeepChanges&&(h=!0)}else d.push({path:[...r,p],prevValue:y,currentValue:g}),h=!0}return{type:"object",changes:d,hasDeepChanges:h}},qn=e=>e.length===0?"":e.reduce((t,r,i)=>/^\d+$/.test(r)?`${t}[${r}]`:i===0?r:`${t}.${r}`,"");function gE(e){const t=e.replace(/\s+/g," ").trim(),r=[];let i="";for(let _=0;_<t.length;_++){const C=t[_];if(C==="="&&t[_+1]===">"){i.trim()&&r.push(i.trim()),r.push("=>"),i="",_++;continue}/[(){}[\];,<>:\?!]/.test(C)?(i.trim()&&r.push(i.trim()),r.push(C),i=""):/\s/.test(C)?(i.trim()&&r.push(i.trim()),i=""):i+=C}i.trim()&&r.push(i.trim());const s=[];for(let _=0;_<r.length;_++){const C=r[_],O=r[_+1];C==="("&&O===")"||C==="["&&O==="]"||C==="{"&&O==="}"||C==="<"&&O===">"?(s.push(C+O),_++):s.push(C)}const l=new Set,u=new Set;function d(_,C,O){let U=0;for(let D=O;D<s.length;D++){const X=s[D];if(X===_)U++;else if(X===C&&(U--,U===0))return D}return-1}for(let _=0;_<s.length;_++)if(s[_]==="("){const O=d("(",")",_);if(O!==-1&&s[O+1]==="=>")for(let U=_;U<=O;U++)l.add(U)}for(let _=1;_<s.length;_++){const C=s[_-1],O=s[_];if(/^[a-zA-Z0-9_$]+$/.test(C)&&O==="<"){const U=d("<",">",_);if(U!==-1)for(let D=_;D<=U;D++)u.add(D)}}let h=0;const p="  ",y=[];let g="";function b(){g.trim()&&y.push(g.replace(/\s+$/,"")),g=""}function w(){b(),g=p.repeat(h)}const S=[];function T(){return S.length?S[S.length-1]:null}function M(_,C=!1){g.trim()?C||/^[),;:\].}>]$/.test(_)?g+=_:g+=` ${_}`:g+=_}for(let _=0;_<s.length;_++){const C=s[_],O=s[_+1]||"";if(["(","{","[","<"].includes(C)){if(M(C),S.push(C),C==="{")h++,w();else if((C==="("||C==="["||C==="<")&&!(l.has(_)&&C==="("||u.has(_)&&C==="<")){const U={"(":")","[":"]","<":">"}[C];O!==U&&O!=="()"&&O!=="[]"&&O!=="<>"&&(h++,w())}}else if([")","}","]",">"].includes(C)){const U=T();C===")"&&U==="("||C==="]"&&U==="["||C===">"&&U==="<"?!(l.has(_)&&C===")")&&!(u.has(_)&&C===">")&&(h=Math.max(h-1,0),w()):C==="}"&&U==="{"&&(h=Math.max(h-1,0),w()),S.pop(),M(C),C==="}"&&w()}else if(/^\(\)|\[\]|\{\}|\<\>$/.test(C))M(C);else if(C==="=>")M(C);else if(C===";")M(C,!0),w();else if(C===","){M(C,!0);const U=T();!(l.has(_)&&U==="(")&&!(u.has(_)&&U==="<")&&U&&["{","[","(","<"].includes(U)&&w()}else M(C)}return b(),y.join(`
`).replace(/\n\s*\n+/g,`
`).trim()}var Np=(e,t=!1)=>{try{const r=e.toString(),i=r.match(/(?:function\s*)?(?:\(([^)]*)\)|([^=>\s]+))\s*=>?/);if(!i)return"ƒ";const l=(i[1]||i[2]||"").replace(/\s+/g,"");return t?gE(r):`ƒ (${l}) => ...`}catch{return"ƒ"}},ku=e=>{if(e===null)return"null";if(e===void 0)return"undefined";if(typeof e=="string")return`"${e.length>150?`${e.slice(0,20)}...`:e}"`;if(typeof e=="number"||typeof e=="boolean")return String(e);if(typeof e=="function")return Np(e);if(Array.isArray(e))return`Array(${e.length})`;if(e instanceof Map)return`Map(${e.size})`;if(e instanceof Set)return`Set(${e.size})`;if(e instanceof Date)return e.toISOString();if(e instanceof RegExp)return e.toString();if(e instanceof Error)return`${e.name}: ${e.message}`;if(typeof e=="object"){const t=Object.keys(e);return`{${t.length>2?`${t.slice(0,2).join(", ")}, ...`:t.join(", ")}}`}return String(e)},vE=e=>{var t;if(e==null)return{value:e};if(typeof e=="function")return{value:e};if(typeof e!="object")return{value:e};if(e instanceof Promise)return{value:"Promise"};try{const r=Object.getPrototypeOf(e);return r===Promise.prototype||((t=r==null?void 0:r.constructor)==null?void 0:t.name)==="Promise"?{value:"Promise"}:{value:e}}catch{return{value:null,error:"Error accessing value"}}},ho=e=>!!e&&(e instanceof Promise||typeof e=="object"&&"then"in e),yE=e=>{const t=Ga(e);return{displayName:Ot(e)||"Unknown",type:e.type,key:e.key,id:e.index,selfTime:(t==null?void 0:t.selfTime)??null,totalTime:(t==null?void 0:t.totalTime)??null}},zm=new Map,px=new Map,Dm=new Map,Op=null,bE=/\[(?<name>\w+),\s*set\w+\]/g,wE=e=>{var r,i;const t=((i=(r=e.type)==null?void 0:r.toString)==null?void 0:i.call(r))||"";return t?Array.from(t.matchAll(bE),s=>{var l;return((l=s.groups)==null?void 0:l.name)??""}):[]},xE=()=>{zm.clear(),px.clear(),Dm.clear(),Op=null},_E=e=>{const t=e.type!==Op;return Op=e.type,t},kh=(e,t,r,i)=>{const s=e.get(t),l=e===zm||e===Dm,u=!_a(r,i);if(!s)return e.set(t,{count:u&&l?1:0,currentValue:r,previousValue:i,lastUpdated:Date.now()}),{hasChanged:u,count:u&&l?1:l?0:1};if(!_a(s.currentValue,r)){const d=s.count+1;return e.set(t,{count:d,currentValue:r,previousValue:s.currentValue,lastUpdated:Date.now()}),{hasChanged:!0,count:d}}return{hasChanged:!1,count:s.count}},Fb=e=>{if(!e)return{};if(e.tag===Lu||e.tag===$u||e.tag===cl||e.tag===ll){let t=e.memoizedState;const r={};let i=0;for(;t;)t.queue&&t.memoizedState!==void 0&&(r[i]=t.memoizedState),t=t.next,i++;return r}return e.tag===oi?e.memoizedState||{}:{}},jm=e=>{var d;const t=e.memoizedProps||{},r=((d=e.alternate)==null?void 0:d.memoizedProps)||{},i={},s={},l=Object.keys(t);for(const h of l)h in t&&(i[h]=t[h],s[h]=r[h]);const u=fx(e).map(h=>({name:h.name,value:h.value,prevValue:h.prevValue}));return{current:i,prev:s,changes:u}},Um=e=>{const t=Fb(e),r=e.alternate?Fb(e.alternate):{},i=[];for(const[s,l]of Object.entries(t)){const u=e.tag===oi?s:Number(s);e.alternate&&!_a(r[s],l)&&i.push({name:u,value:l,prevValue:r[s]})}return{current:t,prev:r,changes:i}},Lm=e=>{const t=Vb(e),r=e.alternate?Vb(e.alternate):new Map,i={},s={},l=[],u=new Set;for(const[d,h]of t){const p=h.displayName,y=d;if(u.has(y))continue;u.add(y),i[p]=h.value;const g=r.get(d);g&&(s[p]=g.value,_a(g.value,h.value)||l.push({name:p,value:h.value,prevValue:g.value,contextType:d}))}return{current:i,prev:s,changes:l}},SE=e=>{const t=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{data:{fiberProps:t(),fiberState:t(),fiberContext:t()},shouldUpdate:!1};let r=!1;const i=_E(e),s=t();if(e.memoizedProps){const{current:g,changes:b}=jm(e);for(const[w,S]of Object.entries(g))s.current.push({name:w,value:ho(S)?{type:"promise",displayValue:"Promise"}:S});for(const w of b){const{hasChanged:S,count:T}=kh(zm,w.name,w.value,w.prevValue);S&&(r=!0,s.changes.add(w.name),s.changesCounts.set(w.name,T))}}const l=t(),{current:u,changes:d}=Um(e);for(const[g,b]of Object.entries(u)){const w=e.tag===oi?g:Number(g);l.current.push({name:w,value:b})}for(const g of d){const{hasChanged:b,count:w}=kh(px,g.name,g.value,g.prevValue);b&&(r=!0,l.changes.add(g.name),l.changesCounts.set(g.name,w))}const h=t(),{current:p,changes:y}=Lm(e);for(const[g,b]of Object.entries(p))h.current.push({name:g,value:b});if(!i)for(const g of y){const{hasChanged:b,count:w}=kh(Dm,g.name,g.value,g.prevValue);b&&(r=!0,h.changes.add(g.name),h.changesCounts.set(g.name,w))}return!r&&!i&&(s.changes.clear(),l.changes.clear(),h.changes.clear()),{data:{fiberProps:s,fiberState:l,fiberContext:h},shouldUpdate:r||i}},Gb=new WeakMap,Vb=e=>{var s;if(!e)return new Map;const t=Gb.get(e);if(t)return t;const r=new Map;let i=e;for(;i;){const l=i.dependencies;if(l!=null&&l.firstContext){let u=l.firstContext;for(;u;){const d=u.memoizedValue,h=(s=u.context)==null?void 0:s.displayName;if(r.has(d)||r.set(u.context,{value:d,displayName:h??"UnnamedContext",contextType:null}),u===u.next)break;u=u.next}}i=i.return}return Gb.set(e,r),r},Qb=e=>{const t=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{fiberProps:t(),fiberState:t(),fiberContext:t()};const r=t();if(e.memoizedProps){const{current:d,changes:h}=jm(e);for(const[p,y]of Object.entries(d))r.current.push({name:p,value:ho(y)?{type:"promise",displayValue:"Promise"}:y});for(const p of h)r.changes.add(p.name),r.changesCounts.set(p.name,1)}const i=t();if(e.memoizedState){const{current:d,changes:h}=Um(e);for(const[p,y]of Object.entries(d))i.current.push({name:p,value:ho(y)?{type:"promise",displayValue:"Promise"}:y});for(const p of h)i.changes.add(p.name),i.changesCounts.set(p.name,1)}const s=t(),{current:l,changes:u}=Lm(e);for(const[d,h]of Object.entries(l))s.current.push({name:d,value:ho(h)?{type:"promise",displayValue:"Promise"}:h});for(const d of u)s.changes.add(d.name),s.changesCounts.set(d.name,1);return{fiberProps:r,fiberState:i,fiberContext:s}},Ap=0,Wb=performance.now(),Eh=0,Zb=!1,mx=()=>{Eh++;const e=performance.now();e-Wb>=1e3&&(Ap=Eh,Eh=0,Wb=e),requestAnimationFrame(mx)},gx=()=>(Zb||(Zb=!0,mx(),Ap=60),Ap),TE=e=>{var r,i;if(!e)return[];const t=[];if(e.tag===Lu||e.tag===$u||e.tag===cl||e.tag===ll){let s=e.memoizedState,l=(r=e.alternate)==null?void 0:r.memoizedState,u=0;for(;s;){if(s.queue&&s.memoizedState!==void 0){const d={type:2,name:u.toString(),value:s.memoizedState,prevValue:l==null?void 0:l.memoizedState};_a(d.prevValue,d.value)||t.push(d)}s=s.next,l=l==null?void 0:l.next,u++}return t}if(e.tag===oi){const s={type:3,name:"state",value:e.memoizedState,prevValue:(i=e.alternate)==null?void 0:i.memoizedState};return _a(s.prevValue,s.value)||t.push(s),t}return t},Ch=0,Kb=new WeakMap,kE=e=>{const t=Kb.get(e);return t||(Ch++,Kb.set(e,Ch),Ch)};function EE(e,t){if(!e||!t)return;const r=e.memoizedValue,i={type:4,name:e.context.displayName??"Context.Provider",value:r,contextType:kE(e.context)};this.push(i)}var CE=e=>{const t=[];return ok(e,EE.bind(t)),t},vx=new Map,Jb=!1,Mh=()=>Array.from(vx.values()),ME=16,Rp=new WeakMap;function yx(e){return String(xa(e))}function bx(e){const t=yx(e),r=Rp.get(si(e));if(r)return r.get(t)}function NE(e,t){const r=si(e.type),i=yx(e);let s=Rp.get(r);s||(s=new Map,Rp.set(r,s)),s.set(i,t)}var OE=(e,t,r,i,s)=>{const l=Date.now(),u=bx(e);if((i||s)&&(!u||l-(u.lastRenderTimestamp||0)>ME)){const d=u||{selfTime:0,totalTime:0,renderCount:0,lastRenderTimestamp:l};d.renderCount=(d.renderCount||0)+1,d.selfTime=t||0,d.totalTime=r||0,d.lastRenderTimestamp=l,NE(e,{...d})}},AE=(e,t)=>{const r={isPaused:wt(!Le.options.value.enabled),fiberRoots:new WeakSet};return vx.set(e,{key:e,config:t,instrumentation:r}),Jb||(Jb=!0,pk({name:"react-scan",onActive:t.onActive,onCommitFiberRoot(i,s){r.fiberRoots.add(s);const l=Mh();for(const u of l)u.config.onCommitStart();hk(s.current,(u,d)=>{const h=si(u.type);if(!h)return null;const p=Mh(),y=[];for(let C=0,O=p.length;C<O;C++)p[C].config.isValidFiber(u)&&y.push(C);if(!y.length)return null;const g=[];if(p.some(C=>C.config.trackChanges)){const C=jm(u).changes,O=Um(u).changes,U=Lm(u).changes;g.push.apply(null,C.map(D=>({type:1,name:D.name,value:D.value})));for(const D of O)u.tag===oi?g.push({type:3,name:D.name.toString(),value:D.value}):g.push({type:2,name:D.name.toString(),value:D.value});g.push.apply(null,U.map(D=>({type:4,name:D.name,value:D.value,contextType:Number(D.contextType)})))}const{selfTime:b,totalTime:w}=Ga(u),S=gx(),T={phase:Kk[d],componentName:Ot(h),count:1,changes:g,time:b,forget:Vs(u),unnecessary:null,didCommit:pm(u),fps:S},M=g.length>0,_=sk(u).length>0;d==="update"&&OE(u,b,w,M,_);for(let C=0,O=y.length;C<O;C++){const U=y[C];p[U].config.onRender(u,[T])}});for(const u of l)u.config.onCommitFinish()},onPostCommitFiberRoot(){const i=Mh();for(const s of i)s.config.onPostCommitFiberRoot()}})),r},RE=e=>{const t=new Map;for(let r=0,i=e.length;r<i;r++){const s=e[r];if(!s.componentName)continue;const l=t.get(s.componentName)??[],u=Wk([{aggregatedCount:1,computedKey:null,name:s.componentName,frame:null,...s,changes:{type:s.changes.reduce((p,y)=>p|y.type,0),unstable:s.changes.some(p=>p.unstable)},phase:s.phase,computedCurrent:null}]);if(!u)continue;let d=null,h=null;if(s.changes)for(let p=0,y=s.changes.length;p<y;p++){const{name:g,prevValue:b,nextValue:w,unstable:S,type:T}=s.changes[p];T===1?(d??(d={}),h??(h={}),d[`${S?"⚠️":""}${g} (prev)`]=b,h[`${S?"⚠️":""}${g} (next)`]=w):l.push({prev:b,next:w,type:T===4?"context":"state",unstable:S??!1})}d&&h&&l.push({prev:d,next:h,type:"props",unstable:!1}),t.set(u,l)}for(const[r,i]of Array.from(t.entries())){console.group(`%c${r}`,"background: hsla(0,0%,70%,.3); border-radius:3px; padding: 0 2px;");for(const{type:s,prev:l,next:u,unstable:d}of i)console.log(`${s}:`,d?"⚠️":"",l,"!==",u);console.groupEnd()}},zE=()=>{if(window.hideIntro){window.hideIntro=void 0;return}console.log("%c[·] %cReact Scan","font-weight:bold;color:#7a68e8;font-size:20px;","font-weight:bold;font-size:14px;"),console.log("Try React Scan Monitoring to target performance issues in production: https://react-scan.com/monitoring")},ew=7,DE="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace",jE=.1,Hc=(e,t)=>Math.floor(e+(t-e)*jE),UE=4,Eu=40,Nh=45,Oh="115,97,230";function LE(e,t){return t[0]-e[0]}function $E(e){return[...e.entries()].sort(LE)}function tw([e,t]){let r=`${t.slice(0,UE).join(", ")} ×${e}`;return r.length>Eu&&(r=`${r.slice(0,Eu)}…`),r}var nw=e=>{const t=new Map;for(const{name:l,count:u}of e)t.set(l,(t.get(l)||0)+u);const r=new Map;for(const[l,u]of t){const d=r.get(u);d?d.push(l):r.set(u,[l])}const i=$E(r);let s=tw(i[0]);for(let l=1,u=i.length;l<u;l++)s+=", "+tw(i[l]);return s.length>Eu?`${s.slice(0,Eu)}…`:s},rw=e=>{let t=0;for(const r of e)t+=r.width*r.height;return t},HE=(e,t)=>{for(const{id:r,name:i,count:s,x:l,y:u,width:d,height:h,didCommit:p}of t){const y={id:r,name:i,count:s,x:l,y:u,width:d,height:h,frame:0,targetX:l,targetY:u,targetWidth:d,targetHeight:h,didCommit:p},g=String(y.id),b=e.get(g);b?(b.count++,b.frame=0,b.targetX=l,b.targetY=u,b.targetWidth=d,b.targetHeight=h,b.didCommit=p):e.set(g,y)}},IE=(e,t,r)=>{for(const i of e.values()){const s=i.x-t,l=i.y-r;i.targetX=s,i.targetY=l}},qE=(e,t)=>{const r=e.getContext("2d",{alpha:!0});return r&&r.scale(t,t),r},BE=(e,t,r,i)=>{e.clearRect(0,0,t.width/r,t.height/r);const s=new Map,l=new Map;for(const h of i.values()){const{x:p,y,width:g,height:b,targetX:w,targetY:S,targetWidth:T,targetHeight:M,frame:_}=h;w!==p&&(h.x=Hc(p,w)),S!==y&&(h.y=Hc(y,S)),T!==g&&(h.width=Hc(g,T)),M!==b&&(h.height=Hc(b,M));const C=`${w??p},${S??y}`,O=`${C},${T??g},${M??b}`,U=s.get(C);U?U.push(h):s.set(C,[h]);const D=1-_/Nh;h.frame++;const X=l.get(O)||{x:p,y,width:g,height:b,alpha:D};D>X.alpha&&(X.alpha=D),l.set(O,X)}for(const{x:h,y:p,width:y,height:g,alpha:b}of l.values())e.strokeStyle=`rgba(${Oh},${b})`,e.lineWidth=1,e.beginPath(),e.rect(h,p,y,g),e.stroke(),e.fillStyle=`rgba(${Oh},${b*.1})`,e.fill();e.font=`11px ${DE}`;const u=new Map;e.textRendering="optimizeSpeed";for(const h of s.values()){const p=h[0],{x:y,y:g,frame:b}=p,w=1-b/Nh,S=nw(h),{width:T}=e.measureText(S);if(u.set(`${y},${g},${T},${S}`,{text:S,width:T,height:11,alpha:w,x:y,y:g,outlines:h}),b>Nh)for(const _ of h)i.delete(String(_.id))}const d=Array.from(u.entries()).sort(([h,p],[y,g])=>rw(g.outlines)-rw(p.outlines));for(const[h,p]of d)if(u.has(h))for(const[y,g]of u.entries()){if(h===y)continue;const{x:b,y:w,width:S,height:T}=p,{x:M,y:_,width:C,height:O}=g;b+S>M&&M+C>b&&w+T>_&&_+O>w&&(p.text=nw(p.outlines.concat(g.outlines)),p.width=e.measureText(p.text).width,u.delete(y))}for(const h of u.values()){const{x:p,y,alpha:g,width:b,height:w,text:S}=h;let T=y-w-4;T<0&&(T=0),e.fillStyle=`rgba(${Oh},${g})`,e.fillRect(p,T,b+4,w+4),e.fillStyle=`rgba(255,255,255,${g})`,e.fillText(S,p+2,T+w)}return i.size>0},YE='"use strict";(()=>{var D="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";var M=(t,i)=>Math.floor(t+(i-t)*.1);var _="115,97,230";function F(t,i){return i[0]-t[0]}function I(t){return[...t.entries()].sort(F)}function $([t,i]){let o=`${i.slice(0,4).join(", ")} \\xD7${t}`;return o.length>40&&(o=`${o.slice(0,40)}\\u2026`),o}var S=t=>{let i=new Map;for(let{name:e,count:u}of t)i.set(e,(i.get(e)||0)+u);let o=new Map;for(let[e,u]of i){let A=o.get(u);A?A.push(e):o.set(u,[e])}let h=I(o),s=$(h[0]);for(let e=1,u=h.length;e<u;e++)s+=", "+$(h[e]);return s.length>40?`${s.slice(0,40)}\\u2026`:s},X=t=>{let i=0;for(let o of t)i+=o.width*o.height;return i};var N=(t,i)=>{let o=t.getContext("2d",{alpha:!0});return o&&o.scale(i,i),o},Y=(t,i,o,h)=>{t.clearRect(0,0,i.width/o,i.height/o);let s=new Map,e=new Map;for(let n of h.values()){let{x:r,y:c,width:a,height:g,targetX:l,targetY:d,targetWidth:f,targetHeight:p,frame:O}=n;l!==r&&(n.x=M(r,l)),d!==c&&(n.y=M(c,d)),f!==a&&(n.width=M(a,f)),p!==g&&(n.height=M(g,p));let w=`${l??r},${d??c}`,y=`${w},${f??a},${p??g}`,v=s.get(w);v?v.push(n):s.set(w,[n]);let E=1-O/45;n.frame++;let x=e.get(y)||{x:r,y:c,width:a,height:g,alpha:E};E>x.alpha&&(x.alpha=E),e.set(y,x)}for(let{x:n,y:r,width:c,height:a,alpha:g}of e.values())t.strokeStyle=`rgba(${_},${g})`,t.lineWidth=1,t.beginPath(),t.rect(n,r,c,a),t.stroke(),t.fillStyle=`rgba(${_},${g*.1})`,t.fill();t.font=`11px ${D}`;let u=new Map;t.textRendering="optimizeSpeed";for(let n of s.values()){let r=n[0],{x:c,y:a,frame:g}=r,l=1-g/45,d=S(n),{width:f}=t.measureText(d),p=11;u.set(`${c},${a},${f},${d}`,{text:d,width:f,height:p,alpha:l,x:c,y:a,outlines:n});let O=a-p-4;if(O<0&&(O=0),g>45)for(let w of n)h.delete(String(w.id))}let A=Array.from(u.entries()).sort(([n,r],[c,a])=>X(a.outlines)-X(r.outlines));for(let[n,r]of A)if(u.has(n))for(let[c,a]of u.entries()){if(n===c)continue;let{x:g,y:l,width:d,height:f}=r,{x:p,y:O,width:w,height:y}=a;g+d>p&&p+w>g&&l+f>O&&O+y>l&&(r.text=S(r.outlines.concat(a.outlines)),r.width=t.measureText(r.text).width,u.delete(c))}for(let n of u.values()){let{x:r,y:c,alpha:a,width:g,height:l,text:d}=n,f=c-l-4;f<0&&(f=0),t.fillStyle=`rgba(${_},${a})`,t.fillRect(r,f,g+4,l+4),t.fillStyle=`rgba(255,255,255,${a})`,t.fillText(d,r+2,f+l)}return h.size>0};var m=null,L=null,b=1,T=new Map,C=null,R=()=>{if(!L||!m)return;Y(L,m,b,T)?C=requestAnimationFrame(R):C=null};self.onmessage=t=>{let{type:i}=t.data;if(i==="init"&&(m=t.data.canvas,b=t.data.dpr,m&&(m.width=t.data.width,m.height=t.data.height,L=N(m,b))),!(!m||!L)){if(i==="resize"){b=t.data.dpr,m.width=t.data.width*b,m.height=t.data.height*b,L.resetTransform(),L.scale(b,b),R();return}if(i==="draw-outlines"){let{data:o,names:h}=t.data,s=new Float32Array(o);for(let e=0;e<s.length;e+=7){let u=s[e+2],A=s[e+3],n=s[e+4],r=s[e+5],c=s[e+6],a={id:s[e],name:h[e/7],count:s[e+1],x:u,y:A,width:n,height:r,frame:0,targetX:u,targetY:A,targetWidth:n,targetHeight:r,didCommit:c},g=String(a.id),l=T.get(g);l?(l.count++,l.frame=0,l.targetX=u,l.targetY=A,l.targetWidth=n,l.targetHeight=r,l.didCommit=c):T.set(g,a)}C||(C=requestAnimationFrame(R));return}if(i==="scroll"){let{deltaX:o,deltaY:h}=t.data;for(let s of T.values()){let e=s.x-o,u=s.y-h;s.targetX=e,s.targetY=u}}}};})();\n',An=null,Cu=null,Wa=null,On=1,Mu=null,$m=new Map,Bs=new Map,oo=new Set,PE=e=>{if(!Iu(e))return;const t=typeof e.type=="string"?e.type:Ot(e);if(!t)return;const r=Bs.get(e),i=lk(e),s=pm(e);r?r.count++:(Bs.set(e,{name:t,count:1,elements:i.map(l=>l.stateNode),didCommit:s?1:0}),oo.add(e))},XE=e=>{const t=e[0];if(e.length===1)return t;let r,i,s,l;for(let u=0,d=e.length;u<d;u++){const h=e[u];r=r==null?h.x:Math.min(r,h.x),i=i==null?h.y:Math.min(i,h.y),s=s==null?h.x+h.width:Math.max(s,h.x+h.width),l=l==null?h.y+h.height:Math.max(l,h.y+h.height)}return r==null||i==null||s==null||l==null?e[0]:new DOMRect(r,i,s-r,l-i)};function FE(e,t){const r=[];for(const i of e){const s=i.target;this.seenElements.has(s)||(this.seenElements.add(s),r.push(i))}r.length>0&&this.resolveNext&&(this.resolveNext(r),this.resolveNext=null),this.seenElements.size===this.uniqueElements.size&&(t.disconnect(),this.done=!0,this.resolveNext&&this.resolveNext([]))}var wx=async function*(e){const t={uniqueElements:new Set(e),seenElements:new Set,resolveNext:null,done:!1},r=new IntersectionObserver(FE.bind(t));for(const i of t.uniqueElements)r.observe(i);for(;!t.done;){const i=await new Promise(s=>{t.resolveNext=s});i.length>0&&(yield i)}},GE=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:ArrayBuffer,VE=async()=>{const e=[];for(const r of oo){const i=Bs.get(r);if(i)for(let s=0;s<i.elements.length;s++)i.elements[s]instanceof Element&&e.push(i.elements[s])}const t=new Map;for await(const r of wx(e)){for(const u of r){const d=u.target,h=u.intersectionRect;u.isIntersecting&&h.width&&h.height&&t.set(d,h)}const i=[],s=[],l=[];for(const u of oo){const d=Bs.get(u);if(!d)continue;const h=[];for(let p=0;p<d.elements.length;p++){const y=d.elements[p],g=t.get(y);g&&h.push(g)}h.length&&(i.push(d),s.push(XE(h)),l.push(xa(u)))}if(i.length>0){const u=new GE(i.length*ew*4),d=new Float32Array(u),h=new Array(i.length);let p;for(let y=0,g=i.length;y<g;y++){const b=i[y],w=l[y],{x:S,y:T,width:M,height:_}=s[y],{count:C,name:O,didCommit:U}=b;if(An){const D=y*ew;d[D]=w,d[D+1]=C,d[D+2]=S,d[D+3]=T,d[D+4]=M,d[D+5]=_,d[D+6]=U,h[y]=O}else p||(p=new Array(i.length)),p[y]={id:w,name:O,count:C,x:S,y:T,width:M,height:_,didCommit:U}}An?An.postMessage({type:"draw-outlines",data:u,names:h}):Cu&&Wa&&p&&(HE($m,p),Mu||(Mu=requestAnimationFrame(Hm)))}}for(const r of oo)Bs.delete(r),oo.delete(r)},Hm=()=>{if(!Wa||!Cu)return;BE(Wa,Cu,On,$m)?Mu=requestAnimationFrame(Hm):Mu=null},QE=typeof OffscreenCanvas<"u"&&typeof Worker<"u",aw=()=>Math.min(window.devicePixelRatio||1,2),WE=()=>{ZE();const e=document.createElement("div");e.setAttribute("data-react-scan","true");const t=e.attachShadow({mode:"open"}),r=document.createElement("canvas");if(r.style.position="fixed",r.style.top="0",r.style.left="0",r.style.pointerEvents="none",r.style.zIndex="2147483646",r.setAttribute("aria-hidden","true"),t.appendChild(r),!r)return null;On=aw(),Cu=r;const{innerWidth:i,innerHeight:s}=window;r.style.width=`${i}px`,r.style.height=`${s}px`;const l=i*On,u=s*On;if(r.width=l,r.height=u,QE&&!window.__REACT_SCAN_EXTENSION__)try{An=new Worker(URL.createObjectURL(new Blob([YE],{type:"application/javascript"})));const g=r.transferControlToOffscreen();An==null||An.postMessage({type:"init",canvas:g,width:r.width,height:r.height,dpr:On},[g])}catch(g){console.warn("Failed to initialize OffscreenCanvas worker:",g)}An||(Wa=qE(r,On));let d=!1;window.addEventListener("resize",()=>{d||(d=!0,setTimeout(()=>{const g=window.innerWidth,b=window.innerHeight;On=aw(),r.style.width=`${g}px`,r.style.height=`${b}px`,An?An.postMessage({type:"resize",width:g,height:b,dpr:On}):(r.width=g*On,r.height=b*On,Wa&&(Wa.resetTransform(),Wa.scale(On,On)),Hm()),d=!1}))});let h=window.scrollX,p=window.scrollY,y=!1;return window.addEventListener("scroll",()=>{y||(y=!0,setTimeout(()=>{const{scrollX:g,scrollY:b}=window,w=g-h,S=b-p;h=g,p=b,An?An.postMessage({type:"scroll",deltaX:w,deltaY:S}):requestAnimationFrame(IE.bind(null,$m,w,S)),y=!1},16*2))}),setInterval(()=>{oo.size&&requestAnimationFrame(VE)},16*2),t.appendChild(r),e},iw=()=>globalThis.__REACT_SCAN_STOP__,ZE=()=>{const e=document.querySelector("[data-react-scan]");e&&e.remove()},KE=e=>{if(Iu(e)&&Le.options.value.showToolbar!==!1&&ae.inspectState.value.kind==="focused"){const t=e,{selfTime:r}=Ga(e),i=Ot(e.type),s=xa(t),l=ae.reportData.get(s),u=(l==null?void 0:l.count)??0,d=(l==null?void 0:l.time)??0,h=[],p=ae.changesListeners.get(xa(e));if(p!=null&&p.length){const g=fx(e).map(T=>({type:1,name:T.name,value:T.value,prevValue:T.prevValue,unstable:!1})),b=TE(e),S=CE(e).map(T=>({name:T.name,type:4,value:T.value,contextType:T.contextType}));p.forEach(T=>{T({propsChanges:g,stateChanges:b,contextChanges:S})})}const y={count:u+1,time:d+r||0,renders:[],displayName:i,type:si(e.type)||null,changes:h};ae.reportData.set(s,y),zp=!0}},zp=!1,ow,JE=()=>{clearInterval(ow),ow=setInterval(()=>{zp&&(ae.lastReportTime.value=Date.now(),zp=!1)},50)},e3=e=>!FC.has(e.memoizedProps),t3=e=>{if(iw())return;let t,r=!1;const i=()=>{r||(t&&cancelAnimationFrame(t),t=requestAnimationFrame(()=>{r=!0;const l=WE();l&&document.documentElement.appendChild(l),e()}))},s=AE("react-scan-devtools-0.1.0",{onCommitStart:()=>{var l,u;(u=(l=Le.options.value).onCommitStart)==null||u.call(l)},onActive:()=>{iw()||(i(),window.__REACT_SCAN_EXTENSION__||(globalThis.__REACT_SCAN__={ReactScanInternals:Le}),JE(),zE())},onError:()=>{},isValidFiber:e3,onRender:(l,u)=>{var y,g,b,w;Iu(l)&&((y=ae.interactionListeningForRenders)==null||y.call(ae,l,u));const d=(g=Le.instrumentation)==null?void 0:g.isPaused.value,h=ae.inspectState.value.kind==="inspect-off"||ae.inspectState.value.kind==="uninitialized";d&&h||(d||PE(l),Le.options.value.log&&RE(u),ae.inspectState.value.kind==="focused"&&(Om.value=Date.now()),h||KE(l),(w=(b=Le.options.value).onRender)==null||w.call(b,l,u))},onCommitFinish:()=>{var l,u;i(),(u=(l=Le.options.value).onCommitFinish)==null||u.call(l)},onPostCommitFiberRoot(){i()},trackChanges:!1});Le.instrumentation=s},n3=`*, ::before, ::after {
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
`,r3=(e,t,r=t)=>{const[i,s]=Ee(e);return Te(()=>{if(e===i)return;const u=setTimeout(()=>s(e),e?t:r);return()=>clearTimeout(u)},[e,t,r]),i},a3=ci(()=>$("absolute inset-0 flex items-center gap-x-2","translate-y-0","transition-transform duration-300",Pu.value&&"-translate-y-[200%]")),i3=()=>{const e=he(null),t=he(null),[r,i]=Ee(null);Ks(()=>{const l=ae.inspectState.value;l.kind==="focused"&&i(l.fiber)}),Ks(()=>{const l=Xt.value;Zs(()=>{var S,T;if(ae.inspectState.value.kind!=="focused"||!e.current||!t.current)return;const{totalUpdates:u,currentIndex:d,updates:h,isVisible:p,windowOffset:y}=l,g=Math.max(0,u-1),b=p?`#${y+d} Re-render`:g>0?`×${g}`:"";let w;if(g>0&&d>=0&&d<h.length){const M=(T=(S=h[d])==null?void 0:S.fiberInfo)==null?void 0:T.selfTime;w=M>0?M<.1-Number.EPSILON?"< 0.1ms":`${Number(M.toFixed(1))}ms`:void 0}e.current.dataset.text=b?` • ${b}`:"",t.current.dataset.text=w?` • ${w}`:""})});const s=Qn(()=>{if(!r)return null;const{name:l,wrappers:u,wrapperTypes:d}=Js(r),h=u.length?`${u.join("(")}(${l})${")".repeat(u.length)}`:l??"",p=d[0];return v("span",{title:h,className:"flex items-center gap-x-1",children:[l??"Unknown",v("span",{title:p==null?void 0:p.title,className:"flex items-center gap-x-1 text-[10px] text-purple-400",children:!!p&&v(De,{children:[v("span",{className:$("rounded py-[1px] px-1","truncate",p.compiler&&"bg-purple-800 text-neutral-400",!p.compiler&&"bg-neutral-700 text-neutral-300",p.type==="memo"&&"bg-[#5f3f9a] text-white"),children:p.type},p.type),p.compiler&&v("span",{className:"text-yellow-300",children:"✨"})]})}),d.length>1&&v("span",{className:"text-[10px] text-neutral-400",children:["×",d.length-1]})]})},[r]);return v("div",{className:a3,children:[s,v("div",{className:"flex items-center gap-x-2 mr-auto text-xs text-[#888]",children:[v("span",{ref:e,className:"with-data-text cursor-pointer !overflow-visible",title:"Click to toggle between rerenders and total renders"}),v("span",{ref:t,className:"with-data-text !overflow-visible"})]})]})},o3=()=>{const e=r3(ae.inspectState.value.kind==="focused",150,0),t=()=>{Ke.value={view:"none"},ae.inspectState.value={kind:"inspect-off"}};if(Ke.value.view!=="notifications")return v("div",{className:"react-scan-header",children:[v("div",{className:"relative flex-1 h-full",children:v("div",{className:$("react-scan-header-item is-visible",!e&&"!duration-0"),children:v(i3,{})})}),v("button",{type:"button",title:"Close",className:"react-scan-close-button",onClick:t,children:v(lt,{name:"icon-close"})})]})},s3=({className:e,...t})=>v("div",{className:$("react-scan-toggle",e),children:[v("input",{type:"checkbox",...t}),v("div",{})]}),l3=({fps:e})=>{const t=r=>r<30?"#EF4444":r<50?"#F59E0B":"rgb(214,132,245)";return v("div",{className:$("flex items-center gap-x-1 px-2 w-full","h-6","rounded-md","font-mono leading-none","bg-[#141414]","ring-1 ring-white/[0.08]"),children:[v("div",{style:{color:t(e)},className:"text-sm font-semibold tracking-wide transition-colors ease-in-out w-full flex justify-center items-center",children:e}),v("span",{className:"text-white/30 text-[11px] font-medium tracking-wide ml-auto min-w-fit",children:"FPS"})]})},c3=()=>{const[e,t]=Ee(null);return Te(()=>{const r=setInterval(()=>{t(gx())},200);return()=>clearInterval(r)},[]),v("div",{className:$("flex items-center justify-end gap-x-2 px-1 ml-1 w-[72px]","whitespace-nowrap text-sm text-white"),children:e===null?v(De,{children:"️"}):v(l3,{fps:e})})},Bn=()=>cr?(window.reactScanIdCounter===void 0&&(window.reactScanIdCounter=0),`${++window.reactScanIdCounter}`):"0",Gn=e=>e(),St=class xx extends Array{constructor(t=25){super(),this.capacity=t}push(...t){const r=super.push(...t);for(;this.length>this.capacity;)this.shift();return r}static fromArray(t,r){const i=new xx(r);return i.push(...t),i}},u3=class{constructor(e){this.subscribers=new Set,this.currentValue=e}subscribe(e){return this.subscribers.add(e),e(this.currentValue),()=>{this.subscribers.delete(e)}}setState(e){this.currentValue=e,this.subscribers.forEach(t=>t(e))}getCurrentState(){return this.currentValue}},_x=150,sw=new u3(new St(_x)),ir=50,d3=class{constructor(){this.channels={}}publish(e,t,r=!0){const i=this.channels[t];if(!i){if(!r)return;this.channels[t]={callbacks:new St(ir),state:new St(ir)},this.channels[t].state.push(e);return}i.state.push(e),i.callbacks.forEach(s=>s(e))}getAvailableChannels(){return St.fromArray(Object.keys(this.channels),ir)}subscribe(e,t,r=!1){const i=()=>(r||this.channels[e].state.forEach(l=>{t(l)}),()=>{const l=this.channels[e].callbacks.filter(u=>u!==t);this.channels[e].callbacks=St.fromArray(l,ir)}),s=this.channels[e];return s?(s.callbacks.push(t),i()):(this.channels[e]={callbacks:new St(ir),state:new St(ir)},this.channels[e].callbacks.push(t),i())}updateChannelState(e,t,r=!0){const i=this.channels[e];if(!i){if(!r)return;const s=new St(ir),l={callbacks:new St(ir),state:s};this.channels[e]=l,l.state=t(s);return}i.state=t(i.state)}getChannelState(e){return this.channels[e].state??new St(ir)}},Nu=new d3,Sx={skipProviders:!0,skipHocs:!0,skipContainers:!0,skipMinified:!0,skipUtilities:!0,skipBoundaries:!0},Cs={providers:[/Provider$/,/^Provider$/,/^Context$/],hocs:[/^with[A-Z]/,/^forward(?:Ref)?$/i,/^Forward(?:Ref)?\(/],containers:[/^(?:App)?Container$/,/^Root$/,/^ReactDev/],utilities:[/^Fragment$/,/^Suspense$/,/^ErrorBoundary$/,/^Portal$/,/^Consumer$/,/^Layout$/,/^Router/,/^Hydration/],boundaries:[/^Boundary$/,/Boundary$/,/^Provider$/,/Provider$/]},f3=(e,t=Sx)=>{const r=[];return t.skipProviders&&r.push(...Cs.providers),t.skipHocs&&r.push(...Cs.hocs),t.skipContainers&&r.push(...Cs.containers),t.skipUtilities&&r.push(...Cs.utilities),t.skipBoundaries&&r.push(...Cs.boundaries),!r.some(i=>i.test(e))},lw=[/^[a-z]$/,/^[a-z][0-9]$/,/^_+$/,/^[A-Za-z][_$]$/,/^[a-z]{1,2}$/],h3=e=>{var l;for(let u=0;u<lw.length;u++)if(lw[u].test(e))return!0;const t=!/[aeiou]/i.test(e),r=(((l=e.match(/\d/g))==null?void 0:l.length)??0)>e.length/2,i=/^[a-z]+$/.test(e),s=/[$_]{2,}/.test(e);return Number(t)+Number(r)+Number(i)+Number(s)>=2},p3=(e,t=Sx)=>{if(!e)return[];if(!Ot(e.type))return[];const i=new Array;let s=e;for(;s.return;){const u=m3(s.type);u&&!h3(u)&&f3(u,t)&&u.toLowerCase()!==u&&i.push(u),s=s.return}const l=new Array(i.length);for(let u=0;u<i.length;u++)l[u]=i[i.length-u-1];return l},m3=e=>{const t=Ot(e);return t?t.replace(/^(?:Memo|Forward(?:Ref)?|With.*?)\((?<inner>.*?)\)$/,"$<inner>"):""},g3=(e,t=()=>!0)=>{let r=e;for(;r;){const i=Ot(r.type);if(i&&t(i))return i;r=r.return}return null},Ic,Dp="never-hidden",v3=()=>{Ic==null||Ic();const e=()=>{document.hidden&&(Dp=Date.now())};document.addEventListener("visibilitychange",e),Ic=()=>{document.removeEventListener("visibilitychange",e)}},y3=e=>["pointerup","click"].includes(e)?"pointer":(e.includes("key"),["keydown","keyup"].includes(e)?"keyboard":null),Ah=null,b3=e=>{v3();const t=new Map,r=new Map,i=l=>{if(!l.interactionId)return;if(l.interactionId&&l.target&&!r.has(l.interactionId)&&r.set(l.interactionId,l.target),l.target){let d=l.target;for(;d;){if(d.id==="react-scan-toolbar-root"||d.id==="react-scan-root")return;d=d.parentElement}}const u=t.get(l.interactionId);if(u)l.duration>u.latency?(u.entries=[l],u.latency=l.duration):l.duration===u.latency&&l.startTime===u.entries[0].startTime&&u.entries.push(l);else{const d=y3(l.name);if(!d)return;const h={id:l.interactionId,latency:l.duration,entries:[l],target:l.target,type:d,startTime:l.startTime,endTime:Date.now(),processingStart:l.processingStart,processingEnd:l.processingEnd,duration:l.duration,inputDelay:l.processingStart-l.startTime,processingDuration:l.processingEnd-l.processingStart,presentationDelay:l.duration-(l.processingEnd-l.startTime),timestamp:Date.now(),timeSinceTabInactive:Dp==="never-hidden"?"never-hidden":Date.now()-Dp,visibilityState:document.visibilityState,timeOrigin:performance.timeOrigin,referrer:document.referrer};t.set(h.id,h),Ah||(Ah=requestAnimationFrame(()=>{requestAnimationFrame(()=>{e(t.get(h.id)),Ah=null})}))}},s=new PerformanceObserver(l=>{const u=l.getEntries();for(let d=0,h=u.length;d<h;d++){const p=u[d];i(p)}});try{s.observe({type:"event",buffered:!0,durationThreshold:16}),s.observe({type:"first-input",buffered:!0})}catch{}return()=>s.disconnect()},w3=()=>b3(e=>{Nu.publish({kind:"entry-received",entry:e},"recording")}),ou=25,Or=new St(ou),x3=(e,t)=>{let r=null;for(const i of t){if(i.type!==e.type)continue;if(r===null){r=i;continue}const s=(l,u)=>Math.abs(l.startDateTime)-(u.startTime+u.timeOrigin);s(i,e)<s(r,e)&&(r=i)}return r},_3=e=>Nu.subscribe("recording",r=>{const i=r.kind==="auto-complete-race"?Or.find(l=>l.interactionUUID===r.interactionUUID):x3(r.entry,Or);if(!i)return;const s=i.completeInteraction(r);e(s)}),S3=({onMicroTask:e,onRAF:t,onTimeout:r,abort:i})=>{queueMicrotask(()=>{(i==null?void 0:i())!==!0&&e()&&requestAnimationFrame(()=>{(i==null?void 0:i())!==!0&&t()&&setTimeout(()=>{(i==null?void 0:i())!==!0&&r()},0)})})},T3=e=>{const t=dx(e);if(!t)return;let r=t?Ot(t==null?void 0:t.type):"N/A";return r||(r=g3(t,s=>s.length>2)??"N/A"),r?{componentPath:p3(t),childrenTree:{},componentName:r,elementFiber:t}:void 0},cw=(e,t)=>{let r=null;const i=h=>{switch(e){case"pointer":return h.phase==="start"?"pointerup":h.target instanceof HTMLInputElement||h.target instanceof HTMLSelectElement?"change":"click";case"keyboard":return h.phase==="start"?"keydown":"change"}},s={current:{kind:"uninitialized-stage",interactionUUID:Bn(),stageStart:Date.now(),interactionType:e}},l=h=>{var T,M;if(h.composedPath().some(_=>_ instanceof Element&&_.id==="react-scan-toolbar-root")||(Date.now()-s.current.stageStart>2e3&&(s.current={kind:"uninitialized-stage",interactionUUID:Bn(),stageStart:Date.now(),interactionType:e}),s.current.kind!=="uninitialized-stage"))return;const y=performance.now();(T=t==null?void 0:t.onStart)==null||T.call(t,s.current.interactionUUID);const g=T3(h.target);if(!g){(M=t==null?void 0:t.onError)==null||M.call(t,s.current.interactionUUID);return}const b={},w=Tx(b);s.current={...s.current,interactionType:e,blockingTimeStart:Date.now(),childrenTree:g.childrenTree,componentName:g.componentName,componentPath:g.componentPath,fiberRenders:b,kind:"interaction-start",interactionStartDetail:y,stopListeningForRenders:w};const S=i({phase:"end",target:h.target});document.addEventListener(S,u,{once:!0}),requestAnimationFrame(()=>{document.removeEventListener(S,u)})};document.addEventListener(i({phase:"start"}),l,{capture:!0});const u=(h,p,y)=>{var g;if(s.current.kind!=="interaction-start"&&p===r){if(e==="pointer"&&h.target instanceof HTMLSelectElement){s.current={kind:"uninitialized-stage",interactionUUID:Bn(),stageStart:Date.now(),interactionType:e};return}(g=t==null?void 0:t.onError)==null||g.call(t,s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:Bn(),stageStart:Date.now(),interactionType:e};return}r=p,S3({abort:y,onMicroTask:()=>s.current.kind==="uninitialized-stage"?!1:(s.current={...s.current,kind:"js-end-stage",jsEndDetail:performance.now()},!0),onRAF:()=>{var b;return s.current.kind!=="js-end-stage"&&s.current.kind!=="raf-stage"?((b=t==null?void 0:t.onError)==null||b.call(t,s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:Bn(),stageStart:Date.now(),interactionType:e},!1):(s.current={...s.current,kind:"raf-stage",rafStart:performance.now()},!0)},onTimeout:()=>{var _;if(s.current.kind!=="raf-stage"){(_=t==null?void 0:t.onError)==null||_.call(t,s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:Bn(),stageStart:Date.now(),interactionType:e};return}const b=Date.now(),w=Object.freeze({...s.current,kind:"timeout-stage",blockingTimeEnd:b,commitEnd:performance.now()});s.current={kind:"uninitialized-stage",interactionUUID:Bn(),stageStart:b,interactionType:e};let S=!1;const T=C=>{var X;S=!0;const O=C.kind==="auto-complete-race"?C.detailedTiming.commitEnd-C.detailedTiming.interactionStartDetail:C.entry.latency,U={detailedTiming:w,latency:O,completedAt:Date.now(),flushNeeded:!0};(X=t==null?void 0:t.onComplete)==null||X.call(t,w.interactionUUID,U,C);const D=Or.filter(F=>F.interactionUUID!==w.interactionUUID);return Or=St.fromArray(D,ou),U},M={completeInteraction:T,endDateTime:Date.now(),startDateTime:w.blockingTimeStart,type:e,interactionUUID:w.interactionUUID};if(Or.push(M),k3())setTimeout(()=>{if(S)return;T({kind:"auto-complete-race",detailedTiming:w,interactionUUID:w.interactionUUID});const C=Or.filter(O=>O.interactionUUID!==w.interactionUUID);Or=St.fromArray(C,ou)},1e3);else{const C=Or.filter(O=>O.interactionUUID!==w.interactionUUID);Or=St.fromArray(C,ou),T({kind:"auto-complete-race",detailedTiming:w,interactionUUID:w.interactionUUID})}}})},d=h=>{const p=Bn();u(h,p,()=>p!==r)};return e==="keyboard"&&document.addEventListener("keypress",d),()=>{document.removeEventListener(i({phase:"start"}),l,{capture:!0}),document.removeEventListener("keypress",d)}},uw=e=>{var t;return(t=gm(e,r=>{if(Gs(r))return!0}))==null?void 0:t.stateNode},k3=()=>"PerformanceEventTiming"in globalThis,Tx=e=>{const t=r=>{var y,g,b,w,S;const i=Ot(r.type);if(!i)return;const s=e[i];if(!s){const T=new Set,M=r.return&&fo(r.return),_=M&&Ot(M[0]);_&&T.add(_);const{selfTime:C,totalTime:O}=Ga(r),U=Qb(r),D={current:[],changes:new Set,changesCounts:new Map},X={fiberProps:U.fiberProps||D,fiberState:U.fiberState||D,fiberContext:U.fiberContext||D};e[i]={renderCount:1,hasMemoCache:Vs(r),wasFiberRenderMount:dw(r),parents:T,selfTime:C,totalTime:O,nodeInfo:[{element:uw(r),name:Ot(r.type)??"Unknown",selfTime:Ga(r).selfTime}],changes:X};return}if((g=(y=fo(r))==null?void 0:y[0])==null?void 0:g.type){const T=r.return&&fo(r.return),M=T&&Ot(T[0]);M&&s.parents.add(M)}const{selfTime:u,totalTime:d}=Ga(r),h=Qb(r);if(!h)return;const p={current:[],changes:new Set,changesCounts:new Map};s.wasFiberRenderMount=s.wasFiberRenderMount||dw(r),s.hasMemoCache=s.hasMemoCache||Vs(r),s.changes={fiberProps:Rh(((b=s.changes)==null?void 0:b.fiberProps)||p,h.fiberProps||p),fiberState:Rh(((w=s.changes)==null?void 0:w.fiberState)||p,h.fiberState||p),fiberContext:Rh(((S=s.changes)==null?void 0:S.fiberContext)||p,h.fiberContext||p)},s.renderCount+=1,s.selfTime+=u,s.totalTime+=d,s.nodeInfo.push({element:uw(r),name:Ot(r.type)??"Unknown",selfTime:Ga(r).selfTime})};return ae.interactionListeningForRenders=t,()=>{ae.interactionListeningForRenders===t&&(ae.interactionListeningForRenders=null)}},Rh=(e,t)=>{const r={current:[...e.current],changes:new Set,changesCounts:new Map};for(const i of t.current)r.current.some(s=>s.name===i.name)||r.current.push(i);for(const i of t.changes)if(typeof i=="string"||typeof i=="number"){r.changes.add(i);const s=e.changesCounts.get(i)||0,l=t.changesCounts.get(i)||0;r.changesCounts.set(i,s+l)}return r},dw=e=>{if(!e.alternate)return!0;const t=e.alternate,r=t&&t.memoizedState!=null&&t.memoizedState.element!=null&&t.memoizedState.isDehydrated!==!0,i=e.memoizedState!=null&&e.memoizedState.element!=null&&e.memoizedState.isDehydrated!==!0;return!r&&i},E3=e=>{let t;const r=new Set,i=(p,y)=>{const g=typeof p=="function"?p(t):p;if(!Object.is(g,t)){const b=t;t=y??(typeof g!="object"||g===null)?g:Object.assign({},t,g),r.forEach(w=>w(t,b))}},s=()=>t,d={setState:i,getState:s,getInitialState:()=>h,subscribe:(p,y)=>{let g,b;y?(g=p,b=y):b=p;let w=g?g(t):void 0;const S=(T,M)=>{if(g){const _=g(T),C=g(M);Object.is(w,_)||(w=_,b(_,C))}else b(T,M)};return r.add(S),()=>r.delete(S)}},h=t=e(i,s,d);return d},kx=e=>E3,qc=null;kx()(e=>({state:{events:[]},actions:{addEvent:t=>{e(r=>({state:{events:[...r.state.events,t]}}))},clear:()=>{e({state:{events:[]}})}}}));var zh=200,el=kx()((e,t)=>{const r=new Set;return{state:{events:new St(zh)},actions:{addEvent:i=>{r.forEach(h=>h(i));const s=[...t().state.events,i],l=(h,p)=>{const y=s.find(g=>{if(g.kind!=="long-render"&&g.id!==h.id&&(h.data.startAt<=g.data.startAt&&h.data.endAt<=g.data.endAt&&h.data.endAt>=g.data.startAt||g.data.startAt<=h.data.startAt&&g.data.endAt>=h.data.startAt||h.data.startAt<=g.data.startAt&&h.data.endAt>=g.data.endAt))return!0});y&&p(y)},u=new Set;s.forEach(h=>{h.kind!=="interaction"&&l(h,()=>{u.add(h.id)})});const d=s.filter(h=>!u.has(h.id));e(()=>({state:{events:St.fromArray(d,zh)}}))},addListener:i=>(r.add(i),()=>{r.delete(i)}),clear:()=>{e({state:{events:new St(zh)}})}}}}),C3=()=>Ck(el.subscribe,el.getState),su=null,lu=null,Dh=null,jp,M3=()=>{const e=t=>{jp=t.composedPath().map(r=>r.id).filter(Boolean).includes("react-scan-toolbar")};return document.addEventListener("mouseover",e),Dh=e,()=>{Dh&&document.removeEventListener("mouseover",Dh)}},N3=()=>{const e=()=>{su=performance.now(),lu=performance.timeOrigin};return document.addEventListener("visibilitychange",e),()=>{document.removeEventListener("visibilitychange",e)}},Ex=150,jh=[];function O3(){let e,t;function r(){let s=null;qc=null,qc={},s=Tx(qc);const l=performance.timeOrigin,u=performance.now();return e=requestAnimationFrame(()=>{t=setTimeout(()=>{const d=performance.now(),h=d-u,p=performance.timeOrigin;jh.push(d+p);const y=jh.filter(S=>d+p-S<=1e3),g=y.length;jh=y;const b=su!==null&&lu!==null?d+p-(lu+su)<100:null,w=jp!==null&&jp;if(h>Ex&&!b&&document.visibilityState==="visible"&&!w){const S=p+d,T=u+l;el.getState().actions.addEvent({kind:"long-render",id:Bn(),data:{endAt:S,startAt:T,meta:{fiberRenders:qc,latency:h,fps:g}}})}su=null,lu=null,s==null||s(),r()},0)}),s}const i=r();return()=>{i(),cancelAnimationFrame(e),clearTimeout(t)}}var A3=()=>{const e=w3(),t=M3(),r=N3(),i=O3(),s=async(h,p,y)=>{el.getState().actions.addEvent({kind:"interaction",id:Bn(),data:{startAt:p.detailedTiming.blockingTimeStart,endAt:performance.now()+performance.timeOrigin,meta:{...p,kind:y.kind}}});const g=Nu.getChannelState("recording");p.detailedTiming.stopListeningForRenders(),g.length&&Nu.updateChannelState("recording",()=>new St(ir))},l=cw("pointer",{onComplete:s}),u=cw("keyboard",{onComplete:s}),d=_3(h=>{sw.setState(St.fromArray(sw.getCurrentState().concat(h),_x))});return()=>{t(),r(),i(),e(),l(),d(),u()}},tl=e=>{const t=e.filter(r=>r.length>2);return t.length===0?e.at(-1)??"Unknown":t.at(-1)},Rt=e=>{switch(e.kind){case"interaction":{const{renderTime:t,otherJSTime:r,framePreparation:i,frameConstruction:s,frameDraw:l}=e;return t+r+i+s+(l??0)}case"dropped-frames":return e.otherTime+e.renderTime}},R3=e=>e.wasFiberRenderMount||e.hasMemoCache?!1:e.changes.context.length===0&&e.changes.props.length===0&&e.changes.state.length===0,hl=e=>{const t=Rt(e.timing);switch(e.kind){case"interaction":return t<200?"low":t<500?"needs-improvement":"high";case"dropped-frames":return t<50?"low":t<Ex?"needs-improvement":"high"}},bn=()=>_m(Cx),Cx=H1(null),Mx=({size:e=24,className:t})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:$(["lucide lucide-chevron-right",t]),children:v("path",{d:"m9 18 6-6-6-6"})}),z3=({className:e="",size:t=24,events:r=[]})=>{const i=r.includes(!0),s=r.filter(d=>d).length,l=s>99?">99":s,u=i?Math.max(t*.6,14):Math.max(t*.4,6);return v("div",{className:"relative",children:[v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:`lucide lucide-bell ${e}`,children:[v("path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}),v("path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"})]}),r.length>0&&s>0&&Le.options.value.showNotificationCount&&v("div",{className:$(["absolute",i?"-top-2.5 -right-2.5":"-top-1 -right-1","rounded-full","flex items-center justify-center","text-[8px] font-medium text-white","aspect-square",i?"bg-red-500/90":"bg-purple-500/90"]),style:{width:`${u}px`,height:`${u}px`,padding:i?"0.5px":"0"},children:i&&l})]})},Ou=({className:e="",size:t=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[v("path",{d:"M18 6 6 18"}),v("path",{d:"m6 6 12 12"})]}),D3=({className:e="",size:t=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[v("path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}),v("path",{d:"M16 9a5 5 0 0 1 0 6"}),v("path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"})]}),j3=({className:e="",size:t=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[v("path",{d:"M16 9a5 5 0 0 1 .95 2.293"}),v("path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96"}),v("path",{d:"m2 2 20 20"}),v("path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"}),v("path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686"})]}),U3=({size:e=24,className:t})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:$(["lucide lucide-arrow-left",t]),children:[v("path",{d:"m12 19-7-7 7-7"}),v("path",{d:"M19 12H5"})]}),L3=({className:e="",size:t=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[v("path",{d:"M14 4.1 12 6"}),v("path",{d:"m5.1 8-2.9-.8"}),v("path",{d:"m6 12-1.9 2"}),v("path",{d:"M7.2 2.2 8 5.1"}),v("path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"})]}),$3=({className:e="",size:t=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,children:[v("path",{d:"M10 8h.01"}),v("path",{d:"M12 12h.01"}),v("path",{d:"M14 8h.01"}),v("path",{d:"M16 12h.01"}),v("path",{d:"M18 8h.01"}),v("path",{d:"M6 8h.01"}),v("path",{d:"M7 16h10"}),v("path",{d:"M8 12h.01"}),v("rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"})]}),H3=({className:e="",size:t=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:e,style:{transform:"rotate(180deg)"},children:[v("circle",{cx:"12",cy:"12",r:"10"}),v("path",{d:"m4.9 4.9 14.2 14.2"})]}),I3=({className:e="",size:t=24})=>v("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[v("polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}),v("polyline",{points:"16 17 22 17 22 11"})]}),Nx=({children:e,triggerContent:t,wrapperProps:r})=>{const[i,s]=Ee("closed"),[l,u]=Ee(null),[d,h]=Ee({width:window.innerWidth,height:window.innerHeight}),p=he(null),y=he(null),g=_m(Im),b=he(!1);Te(()=>{const _=()=>{h({width:window.innerWidth,height:window.innerHeight}),w()};return window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)},[]);const w=()=>{if(p.current&&g){const _=p.current.getBoundingClientRect(),C=g.getBoundingClientRect(),O=_.left+_.width/2,U=_.top,D=new DOMRect(O-C.left,U-C.top,_.width,_.height);u(D)}};Te(()=>{w()},[p.current]),Te(()=>{if(i==="opening"){const _=setTimeout(()=>s("open"),120);return()=>clearTimeout(_)}else if(i==="closing"){const _=setTimeout(()=>s("closed"),120);return()=>clearTimeout(_)}},[i]),Te(()=>{const _=setInterval(()=>{!b.current&&i!=="closed"&&s("closing")},1e3);return()=>clearInterval(_)},[i]);const S=()=>{b.current=!0,w(),s("opening")},T=()=>{b.current=!1,w(),s("closing")},M=()=>{var ne;if(!l||!g)return{top:0,left:0};const _=g.getBoundingClientRect(),C=175,O=((ne=y.current)==null?void 0:ne.offsetHeight)||40,U=5,D=l.x+_.left,X=l.y+_.top;let F=D,ee=X-4;return F-C/2<U?F=U+C/2:F+C/2>d.width-U&&(F=d.width-U-C/2),ee-O<U&&(ee=X+l.height+4),{top:ee-_.top,left:F-_.left}};return v(De,{children:[g&&l&&i!=="closed"&&Rk(v("div",{ref:y,className:$(["absolute z-100 bg-white text-black rounded-lg px-3 py-2 shadow-lg","transform transition-all duration-120 ease-[cubic-bezier(0.23,1,0.32,1)]",'after:content-[""] after:absolute after:top-[100%]',"after:left-1/2 after:-translate-x-1/2","after:w-[10px] after:h-[6px]","after:border-l-[5px] after:border-l-transparent","after:border-r-[5px] after:border-r-transparent","after:border-t-[6px] after:border-t-white","pointer-events-none",i==="opening"||i==="closing"?"opacity-0 translate-y-1":"opacity-100 translate-y-0"]),style:{top:M().top+"px",left:M().left+"px",transform:"translate(-50%, -100%)",minWidth:"175px"},children:e}),g),v("div",{ref:p,onMouseEnter:S,onMouseLeave:T,...r,children:t})]})},q3=({selectedEvent:e})=>{const{notificationState:t,setNotificationState:r,setRoute:i}=bn();return v("div",{className:$(["flex w-full justify-between items-center px-3 py-2 text-xs"]),children:[v("div",{className:$(["bg-[#18181B] flex items-center gap-x-1 p-1 rounded-sm"]),children:[v("button",{onClick:()=>{i({route:"render-visualization",routeMessage:null})},className:$(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",t.route==="render-visualization"||t.route==="render-explanation"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Ranked"}),v("button",{onClick:()=>{i({route:"other-visualization",routeMessage:null})},className:$(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",t.route==="other-visualization"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Overview"}),v("button",{onClick:()=>{i({route:"optimize",routeMessage:null})},className:$(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",t.route==="optimize"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:v("span",{children:"Prompts"})})]}),v(Nx,{triggerContent:v("button",{onClick:()=>{r(s=>{s.audioNotificationsOptions.enabled&&s.audioNotificationsOptions.audioContext.state!=="closed"&&s.audioNotificationsOptions.audioContext.close();const l=s.audioNotificationsOptions.enabled;localStorage.setItem("react-scan-notifications-audio",String(!l));const u=new AudioContext;return s.audioNotificationsOptions.enabled||Cm(u),l&&u.close(),{...s,audioNotificationsOptions:l?{audioContext:null,enabled:!1}:{audioContext:u,enabled:!0}}})},className:"ml-auto",children:v("div",{className:$(["flex gap-x-2 justify-center items-center text-[#6E6E77]"]),children:[v("span",{children:"Alerts"}),t.audioNotificationsOptions.enabled?v(D3,{size:16,className:"text-[#6E6E77]"}):v(j3,{size:16,className:"text-[#6E6E77]"})]})}),children:v(De,{children:"Play a chime when a slowdown is recorded"})})]})},Ji=e=>{let t="";return e.toSorted((i,s)=>s.totalTime-i.totalTime).slice(0,30).filter(i=>i.totalTime>5).forEach(i=>{let s="";s+="Component Name:",s+=i.name,s+=`
`,s+=`Rendered: ${i.count} times
`,s+=`Sum of self times for ${i.name} is ${i.totalTime.toFixed(0)}ms
`,i.changes.props.length>0&&(s+=`Changed props for all ${i.name} instances ("name:count" pairs)
`,i.changes.props.forEach(l=>{s+=`${l.name}:${l.count}x
`})),i.changes.state.length>0&&(s+=`Changed state for all ${i.name} instances ("hook index:count" pairs)
`,i.changes.state.forEach(l=>{s+=`${l.index}:${l.count}x
`})),i.changes.context.length>0&&(s+=`Changed context for all ${i.name} instances ("context display name (if exists):count" pairs)
`,i.changes.context.forEach(l=>{s+=`${l.name}:${l.count}x
`})),t+=s,t+=`
`}),t},B3=({renderTime:e,eHandlerTimeExcludingRenders:t,toRafTime:r,commitTime:i,framePresentTime:s,formattedReactData:l})=>`I will provide you with a set of high level, and low level performance data about an interaction in a React App:
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
${l}`,Y3=({interactionType:e,name:t,componentPath:r,time:i,renderTime:s,eHandlerTimeExcludingRenders:l,toRafTime:u,commitTime:d,framePresentTime:h,formattedReactData:p})=>`You will attempt to implement a performance improvement to a user interaction in a React app. You will be provided with data about the interaction, and the slow down.

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

`,P3=({renderTime:e,otherTime:t,formattedReactData:r})=>`You will attempt to implement a performance improvement to a large slowdown in a react app

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
`,X3=({renderTime:e,otherTime:t,formattedReactData:r})=>`Your goal will be to help me find the source of a performance problem in a React App. I collected a large dataset about this specific performance problem.

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
`,F3=({renderTime:e,otherTime:t,formattedReactData:r})=>`I will provide you with a set of high level, and low level performance data about a large frame drop in a React App:
### High level
- react component render time: ${e.toFixed(0)}ms
- how long it took to run everything else (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${t}ms

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${r}`,G3=({interactionType:e,name:t,time:r,renderTime:i,eHandlerTimeExcludingRenders:s,toRafTime:l,commitTime:u,framePresentTime:d,formattedReactData:h})=>`Your goal will be to help me find the source of a performance problem. I collected a large dataset about this specific performance problem.

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
`,Up=(e,t)=>Gn(()=>{switch(e){case"data":switch(t.kind){case"dropped-frames":return F3({formattedReactData:Ji(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return B3({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:Ji(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,renderTime:t.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),toRafTime:t.timing.framePreparation})}case"explanation":switch(t.kind){case"dropped-frames":return X3({formattedReactData:Ji(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return G3({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:Ji(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:tl(t.componentPath),renderTime:t.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),time:Rt(t.timing),toRafTime:t.timing.framePreparation})}case"fix":switch(t.kind){case"dropped-frames":return P3({formattedReactData:Ji(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),otherTime:t.timing.otherTime});case"interaction":return Y3({commitTime:t.timing.frameConstruction,componentPath:t.componentPath.join(">"),eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:Ji(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:tl(t.componentPath),renderTime:t.groupedFiberRenders.reduce((r,i)=>r+i.totalTime,0),time:Rt(t.timing),toRafTime:t.timing.framePreparation})}}}),V3=({selectedEvent:e})=>{const[t,r]=Ee("fix"),[i,s]=Ee(!1);return v("div",{className:$(["w-full h-full"]),children:[v("div",{className:$(["border border-[#27272A] rounded-sm h-4/5 text-xs overflow-hidden"]),children:[v("div",{className:$(["bg-[#18181B] p-1 rounded-t-sm"]),children:v("div",{className:$(["flex items-center gap-x-1"]),children:[v("button",{onClick:()=>r("fix"),className:$(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",t==="fix"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Fix"}),v("button",{onClick:()=>r("explanation"),className:$(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",t==="explanation"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Explanation"}),v("button",{onClick:()=>r("data"),className:$(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",t==="data"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Data"})]})}),v("div",{className:$(["overflow-y-auto h-full"]),children:v("pre",{className:$(["p-2 h-full","whitespace-pre-wrap break-words","text-gray-300 font-mono "]),children:Up(t,e)})})]}),v("button",{onClick:async()=>{const l=Up(t,e);await navigator.clipboard.writeText(l),s(!0),setTimeout(()=>s(!1),1e3)},className:$(["mt-4 px-4 py-2 bg-[#18181B] text-[#6E6E77] rounded-sm","hover:text-white transition-colors duration-200","flex items-center justify-center gap-x-2 text-xs"]),children:[v("span",{children:i?"Copied!":"Copy Prompt"}),v("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:$(["transition-transform duration-200",i&&"scale-110"]),children:i?v("path",{d:"M20 6L9 17l-5-5"}):v(De,{children:[v("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),v("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})]})},Q3=(e,t)=>{switch(e.kind){case"dropped-frames":return[...t?[{name:"Total Processing Time",time:Rt(e.timing),color:"bg-red-500",kind:"total-processing-time"}]:[{name:"Renders",time:e.timing.renderTime,color:"bg-purple-500",kind:"render"},{name:"JavaScript, DOM updates, Draw Frame",time:e.timing.otherTime,color:"bg-[#4b4b4b]",kind:"other-frame-drop"}]];case"interaction":return[...t?[]:[{name:"Renders",time:e.timing.renderTime,color:"bg-purple-500",kind:"render"}],{name:t?"React Renders, Hooks, Other JavaScript":"JavaScript/React Hooks ",time:e.timing.otherJSTime,color:"bg-[#EFD81A]",kind:"other-javascript"},{name:"Update DOM and Draw New Frame",time:Rt(e.timing)-e.timing.renderTime-e.timing.otherJSTime,color:"bg-[#1D3A66]",kind:"other-not-javascript"}]}},W3=({selectedEvent:e})=>{var h;const[t]=Ee(Xu()??!1),{notificationState:r}=bn(),[i,s]=Ee((h=r.routeMessage)!=null&&h.name?[r.routeMessage.name]:[]),l=Q3(e,t),u=_m(Im);Te(()=>{var p;if((p=r.routeMessage)!=null&&p.name){const y=u==null?void 0:u.querySelector("#overview-scroll-container"),g=u==null?void 0:u.querySelector(`#react-scan-overview-bar-${r.routeMessage.name}`);if(y&&g){const b=g.getBoundingClientRect().top,w=y.getBoundingClientRect().top,S=b-w;y.scrollTop=y.scrollTop+S}}},[r.route]),Te(()=>{r.route==="other-visualization"&&s(p=>{var y;return(y=r.routeMessage)!=null&&y.name?[r.routeMessage.name]:p})},[r.route]);const d=l.reduce((p,y)=>p+y.time,0);return v("div",{className:"rounded-sm border border-zinc-800 text-xs",children:[v("div",{className:"p-2 border-b border-zinc-800 bg-zinc-900/50",children:v("div",{className:"flex items-center justify-between",children:[v("h3",{className:"text-xs font-medium",children:"What was time spent on?"}),v("span",{className:"text-xs text-zinc-400",children:["Total: ",d.toFixed(0),"ms"]})]})}),v("div",{className:"divide-y divide-zinc-800",children:l.map(p=>{const y=i.includes(p.kind);return v("div",{id:`react-scan-overview-bar-${p.kind}`,children:[v("button",{onClick:()=>s(g=>g.includes(p.kind)?g.filter(b=>b!==p.kind):[...g,p.kind]),className:"w-full px-3 py-2 flex items-center gap-4 hover:bg-zinc-800/50 transition-colors",children:v("div",{className:"flex-1",children:[v("div",{className:"flex items-center justify-between mb-2",children:[v("div",{className:"flex items-center gap-0.5",children:[v("svg",{className:`h-4 w-4 text-zinc-400 transition-transform ${y?"rotate-90":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:v("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),v("span",{className:"font-medium flex items-center text-left",children:p.name})]}),v("span",{className:" text-zinc-400",children:[p.time.toFixed(0),"ms"]})]}),v("div",{className:"h-1 bg-zinc-800 rounded-full overflow-hidden",children:v("div",{className:`h-full ${p.color} transition-all`,style:{width:`${p.time/d*100}%`}})})]})}),y&&v("div",{className:"bg-zinc-900/30 border-t border-zinc-800 px-2.5 py-3",children:v("p",{className:" text-zinc-400 mb-4 text-xs",children:Gn(()=>{switch(e.kind){case"interaction":switch(p.kind){case"render":return v(eo,{input:K3(e)});case"other-javascript":return v(eo,{input:J3(e)});case"other-not-javascript":return v(eo,{input:Z3(e)})}case"dropped-frames":switch(p.kind){case"total-processing-time":return v(eo,{input:{kind:"total-processing",data:{time:Rt(e.timing)}}});case"render":return v(De,{children:v(eo,{input:{kind:"render",data:{topByTime:e.groupedFiberRenders.toSorted((g,b)=>b.totalTime-g.totalTime).slice(0,3).map(g=>({name:g.name,percentage:g.totalTime/Rt(e.timing)}))}}})});case"other-frame-drop":return v(eo,{input:{kind:"other"}})}}})})})]},p.kind)})})]})},Z3=e=>{const t=e.groupedFiberRenders.reduce((l,u)=>l+u.count,0),r=e.timing.renderTime,i=Rt(e.timing),s=r/i*100;return t>100?{kind:"high-render-count-update-dom-draw-frame",data:{count:t,percentageOfTotal:s,copyButton:v(fw,{})}}:{kind:"update-dom-draw-frame",data:{copyButton:v(fw,{})}}},fw=()=>{const[e,t]=Ee(!1),{notificationState:r}=bn();return v("button",{onClick:async()=>{r.selectedEvent&&(await navigator.clipboard.writeText(Up("explanation",r.selectedEvent)),t(!0),setTimeout(()=>t(!1),1e3))},className:"bg-zinc-800 flex hover:bg-zinc-700 text-zinc-200 px-2 py-1 rounded gap-x-3",children:[v("span",{children:e?"Copied!":"Copy Prompt"}),v("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:$(["transition-transform duration-200",e&&"scale-110"]),children:e?v("path",{d:"M20 6L9 17l-5-5"}):v(De,{children:[v("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),v("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})},K3=e=>e.timing.renderTime/Rt(e.timing)>.3?{kind:"render",data:{topByTime:e.groupedFiberRenders.toSorted((t,r)=>r.totalTime-t.totalTime).slice(0,3).map(t=>({percentage:t.totalTime/Rt(e.timing),name:t.name}))}}:{kind:"other"},J3=e=>{const t=e.groupedFiberRenders.reduce((r,i)=>r+i.count,0);return e.timing.otherJSTime/Rt(e.timing)<.2?{kind:"js-explanation-base"}:e.groupedFiberRenders.find(r=>r.count>200)||e.groupedFiberRenders.reduce((r,i)=>r+i.count,0)>500?{kind:"high-render-count-high-js",data:{renderCount:t,topByCount:e.groupedFiberRenders.filter(r=>r.count>100).toSorted((r,i)=>i.count-r.count).slice(0,3)}}:e.timing.otherJSTime/Rt(e.timing)>.3?e.timing.renderTime>.2?{kind:"js-explanation-base"}:{kind:"low-render-count-high-js",data:{renderCount:t}}:{kind:"js-explanation-base"}},eo=({input:e})=>{switch(e.kind){case"total-processing":return v("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:["This is the time it took to draw the entire frame that was presented to the user. To be at 60FPS, this number needs to be ","<=16ms"]}),v("p",{children:'To debug the issue, check the "Ranked" tab to see if there are significant component renders'}),v("p",{children:"On a production React build, React Scan can't access the time it took for component to render. To get that information, run React Scan on a development build"}),v("p",{children:["To understand precisely what caused the slowdown while in production, use the ",v("strong",{children:"Chrome profiler"})," and analyze the function call times."]}),v("p",{})]});case"render":return v("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:"This is the time it took React to run components, and internal logic to handle the output of your component."}),v("div",{className:$(["flex flex-col"]),children:[v("p",{children:"The slowest components for this time period were:"}),e.data.topByTime.map(t=>v("div",{children:[v("strong",{children:t.name}),":"," ",(t.percentage*100).toFixed(0),"% of total"]},t.name))]}),v("p",{children:'To view the render times of all your components, and what caused them to render, go to the "Ranked" tab'}),v("p",{children:'The "Ranked" tab shows the render times of every component.'}),v("p",{children:"The render times of the same components are grouped together into one bar."}),v("p",{children:"Clicking the component will show you what props, state, or context caused the component to re-render."})]});case"js-explanation-base":return v("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),v("p",{children:["The most common culprit for high JS time is expensive hooks, like expensive callbacks inside of ",v("code",{children:"useEffect"}),"'s or a large number of useEffect's called, but this can also be JavaScript event handlers (",v("code",{children:"'onclick'"}),", ",v("code",{children:"'onchange'"}),") that performed expensive computation."]}),v("p",{children:"If you have lots of components rendering that call hooks, like useEffect, it can add significant overhead even if the callbacks are not expensive. If this is the case, you can try optimizing the renders of those components to avoid the hook from having to run."}),v("p",{children:["You should profile your app using the"," ",v("strong",{children:"Chrome DevTools profiler"})," to learn exactly which functions took the longest to execute."]})]});case"high-render-count-high-js":return v("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),e.data.renderCount===0?v(De,{children:[v("p",{children:"There were no renders, which means nothing related to React caused this slowdown. The most likely cause of the slowdown is a slow JavaScript event handler, or code related to a Web API"}),v("p",{children:["You should try to reproduce the slowdown while profiling your website with the",v("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]}):v(De,{children:[" ",v("p",{children:["There were ",v("strong",{children:e.data.renderCount})," renders, which could have contributed to the high JavaScript/Hook time if they ran lots of hooks, like ",v("code",{children:"useEffects"}),"."]}),v("div",{className:$(["flex flex-col"]),children:[v("p",{children:"You should try optimizing the renders of:"}),e.data.topByCount.map(t=>v("div",{children:["- ",v("strong",{children:t.name})," (rendered ",t.count,"x)"]},t.name))]}),"and then checking if the problem still exists.",v("p",{children:["You can also try profiling your app using the"," ",v("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]})]});case"low-render-count-high-js":return v("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),v("p",{children:["There were only ",v("strong",{children:e.data.renderCount})," renders detected, which means either you had very expensive hooks like"," ",v("code",{children:"useEffect"}),"/",v("code",{children:"useLayoutEffect"}),", or there is other JavaScript running during this interaction that took up the majority of the time."]}),v("p",{children:["To understand precisely what caused the slowdown, use the"," ",v("strong",{children:"Chrome profiler"})," and analyze the function call times."]})]});case"high-render-count-update-dom-draw-frame":return v("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),v("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),v("p",{children:["During this interaction, there were"," ",v("strong",{children:e.data.count})," renders, which was"," ",v("strong",{children:[e.data.percentageOfTotal.toFixed(0),"%"]})," of the time spent processing"]}),v("p",{children:"The work performed as a result of the renders may have forced the browser to spend a lot of time to draw the next frame."}),v("p",{children:'You can try optimizing the renders to see if the performance problem still exists using the "Ranked" tab.'}),v("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),v("p",{children:e.data.copyButton}),v("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),v("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"update-dom-draw-frame":return v("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),v("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),v("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),v("p",{children:e.data.copyButton}),v("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),v("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"other":return v("div",{className:$(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[v("p",{children:["This is the time it took to run everything other than React renders. This can be hooks like ",v("code",{children:"useEffect"}),", other JavaScript not part of React, or work the browser has to do to update the DOM and draw the next frame."]}),v("p",{children:["To get a better picture of what happened, profile your app using the"," ",v("strong",{children:"Chrome profiler"})," when the performance problem arises."]})]})}},Ze=null,dt=null,Qe=wt({kind:"idle",current:null}),Uh=null,po=()=>{Uh&&cancelAnimationFrame(Uh),Uh=requestAnimationFrame(()=>{if(!Ze||!dt)return;dt.clearRect(0,0,Ze.width,Ze.height);const e="hsl(271, 76%, 53%)",t=Qe.value,{alpha:r,current:i}=Gn(()=>{var s,l;switch(t.kind){case"transition":{const u=(s=t.current)!=null&&s.alpha&&t.current.alpha>0?t.current:t.transitionTo;return{alpha:u?u.alpha:0,current:u}}case"move-out":return{alpha:((l=t.current)==null?void 0:l.alpha)??0,current:t.current};case"idle":return{alpha:1,current:t.current}}});switch(i==null||i.rects.forEach(s=>{dt&&(dt.shadowColor=e,dt.shadowBlur=6,dt.strokeStyle=e,dt.lineWidth=2,dt.globalAlpha=r,dt.beginPath(),dt.rect(s.left,s.top,s.width,s.height),dt.stroke(),dt.shadowBlur=0,dt.beginPath(),dt.rect(s.left,s.top,s.width,s.height),dt.stroke())}),t.kind){case"move-out":{if(t.current.alpha===0){Qe.value={kind:"idle",current:null};return}t.current.alpha<=.01&&(t.current.alpha=0),t.current.alpha=Math.max(0,t.current.alpha-.03),po();return}case"transition":{if(t.current&&t.current.alpha>0){t.current.alpha=Math.max(0,t.current.alpha-.03),po();return}if(t.transitionTo.alpha===1){Qe.value={kind:"idle",current:t.transitionTo};return}t.transitionTo.alpha=Math.min(t.transitionTo.alpha+.03,1),po()}case"idle":return}})},Lh=null,eC=e=>{if(Ze=document.createElement("canvas"),dt=Ze.getContext("2d",{alpha:!0}),!dt)return null;const t=window.devicePixelRatio||1,{innerWidth:r,innerHeight:i}=window;Ze.style.width=`${r}px`,Ze.style.height=`${i}px`,Ze.width=r*t,Ze.height=i*t,Ze.style.position="fixed",Ze.style.left="0",Ze.style.top="0",Ze.style.pointerEvents="none",Ze.style.zIndex="2147483600",dt.scale(t,t),e.appendChild(Ze),Lh&&window.removeEventListener("resize",Lh);const s=()=>{if(!Ze||!dt)return;const l=window.devicePixelRatio||1,{innerWidth:u,innerHeight:d}=window;Ze.style.width=`${u}px`,Ze.style.height=`${d}px`,Ze.width=u*l,Ze.height=d*l,dt.scale(l,l),po()};return Lh=s,window.addEventListener("resize",s),Qe.subscribe(()=>{requestAnimationFrame(()=>{po()})}),tC};function tC(){Ze!=null&&Ze.parentNode&&Ze.parentNode.removeChild(Ze),Ze=null,dt=null}var Ds=()=>{var t;const e=Qe.value.current?Qe.value.current:Qe.value.kind==="transition"?Qe.value.transitionTo:null;if(e){if(Qe.value.kind==="transition"){Qe.value={kind:"move-out",current:((t=Qe.value.current)==null?void 0:t.alpha)===0?Qe.value.transitionTo:Qe.value.current??Qe.value.transitionTo};return}Qe.value={kind:"move-out",current:{alpha:0,...e}}}},nC=({selectedEvent:e})=>{const t=Rt(e.timing),r=t-e.timing.renderTime,[i]=Ee(Xu()),l=e.groupedFiberRenders.map(p=>({event:p,kind:"render",totalTime:i?p.count:p.totalTime})),u=Gn(()=>{switch(e.kind){case"dropped-frames":return e.timing.renderTime/t<.1;case"interaction":return(e.timing.otherJSTime+e.timing.renderTime)/t<.2}});e.kind==="interaction"&&!i&&l.push({kind:"other-javascript",totalTime:e.timing.otherJSTime}),u&&!i&&(e.kind==="interaction"?l.push({kind:"other-not-javascript",totalTime:Rt(e.timing)-e.timing.renderTime-e.timing.otherJSTime}):l.push({kind:"other-frame-drop",totalTime:r}));const d=he({lastCallAt:null,timer:null}),h=l.reduce((p,y)=>p+y.totalTime,0);return v("div",{className:$(["flex flex-col h-full w-full gap-y-1"]),children:[Gn(()=>{if(i&&l.length===0)return v("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[v("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No data available"}),v("p",{className:"text-x w-full text-lefts",children:"No data was collected during this period"})]});if(l.length===0)return v("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[v("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No renders collected"}),v("p",{className:"text-x w-full text-lefts",children:"There were no renders during this period"})]})}),l.toSorted((p,y)=>y.totalTime-p.totalTime).map(p=>v(Ox,{bars:l,bar:p,debouncedMouseEnter:d,totalBarTime:h,isProduction:i},p.kind==="render"?p.event.id:p.kind))]})},rC=e=>e.current&&e.current.alpha>0?"fading-out":"fading-in",Ox=({bar:e,debouncedMouseEnter:t,totalBarTime:r,isProduction:i,bars:s,depth:l=0})=>{const{setNotificationState:u,setRoute:d}=bn(),[h,p]=Ee(!1),y=e.kind==="render"?e.event.parents.size===0:!0,g=s.filter(S=>S.kind==="render"&&e.kind==="render"?e.event.parents.has(S.event.name)&&S.event.name!==e.event.name:!1),b=e.kind==="render"?Array.from(e.event.parents).filter(S=>!s.some(T=>T.kind==="render"&&T.event.name===S)):[],w=()=>{e.kind==="render"?(u(S=>({...S,selectedFiber:e.event})),d({route:"render-explanation",routeMessage:null})):d({route:"other-visualization",routeMessage:{kind:"auto-open-overview-accordion",name:e.kind}})};return v("div",{className:"w-full",children:[v("div",{className:$(["w-full flex items-center relative text-xs min-w-0"]),children:[v("button",{onMouseLeave:()=>{t.current.timer&&clearTimeout(t.current.timer),Ds()},onMouseEnter:async()=>{const S=async()=>{if(t.current.lastCallAt=Date.now(),e.kind!=="render"){const O=Qe.value.current?Qe.value.current:Qe.value.kind==="transition"?Qe.value.transitionTo:null;if(!O){Qe.value={kind:"idle",current:null};return}Qe.value={kind:"move-out",current:{alpha:0,...O}};return}const T=Qe.value,M=Gn(()=>{switch(T.kind){case"transition":return T.transitionTo;case"idle":case"move-out":return T.current}}),_=[];if(T.kind==="transition"){const O=rC(T);Gn(()=>{switch(O){case"fading-in":{Qe.value={kind:"transition",current:T.transitionTo,transitionTo:{rects:_,alpha:0,name:e.event.name}};return}case"fading-out":{Qe.value={kind:"transition",current:Qe.value.current?{alpha:0,...Qe.value.current}:null,transitionTo:{rects:_,alpha:0,name:e.event.name}};return}}})}else Qe.value={kind:"transition",transitionTo:{rects:_,alpha:0,name:e.event.name},current:M?{alpha:0,...M}:null};const C=e.event.elements.filter(O=>O instanceof Element);for await(const O of wx(C))O.forEach(({boundingClientRect:U})=>{_.push(U)}),po()};if(t.current.lastCallAt&&Date.now()-t.current.lastCallAt<200){t.current.timer&&clearTimeout(t.current.timer),t.current.timer=setTimeout(()=>{S()},200);return}S()},onClick:w,className:$(["h-full w-[90%] flex items-center hover:bg-[#0f0f0f] rounded-l-md min-w-0 relative"]),children:[v("div",{style:{minWidth:"fit-content",width:`${e.totalTime/r*100}%`},className:$(["flex items-center rounded-sm text-white text-xs h-[28px] shrink-0",e.kind==="render"&&"bg-[#412162] group-hover:bg-[#5b2d89]",e.kind==="other-frame-drop"&&"bg-[#44444a] group-hover:bg-[#6a6a6a]",e.kind==="other-javascript"&&"bg-[#efd81a6b] group-hover:bg-[#efda1a2f]",e.kind==="other-not-javascript"&&"bg-[#214379d4] group-hover:bg-[#21437982]"])}),v("div",{className:$(["absolute inset-0 flex items-center px-2","min-w-0"]),children:v("div",{className:"flex items-center gap-x-2 min-w-0 w-full",children:[v("span",{className:$(["truncate"]),children:Gn(()=>{switch(e.kind){case"other-frame-drop":return"JavaScript, DOM updates, Draw Frame";case"other-javascript":return"JavaScript/React Hooks";case"other-not-javascript":return"Update DOM and Draw New Frame";case"render":return e.event.name}})}),e.kind==="render"&&R3(e.event)&&v("div",{style:{lineHeight:"10px"},className:$(["px-1 py-0.5 bg-[#6a369e] flex items-center rounded-sm font-semibold text-[8px] shrink-0"]),children:"Memoizable"})]})})]}),v("button",{onClick:()=>e.kind==="render"&&!y&&p(!h),className:$(["flex items-center min-w-fit shrink-0 rounded-r-md h-[28px]",!y&&"hover:bg-[#0f0f0f]",e.kind==="render"&&!y?"cursor-pointer":"cursor-default"]),children:[v("div",{className:"w-[20px] flex items-center justify-center",children:e.kind==="render"&&!y&&v(Mx,{className:$("transition-transform",h&&"rotate-90"),size:16})}),v("div",{style:{minWidth:y?"fit-content":i?"30px":"60px"},className:"flex items-center justify-end gap-x-1",children:[e.kind==="render"&&v("span",{className:$(["text-[10px]"]),children:["x",e.event.count]}),(e.kind!=="render"||!i)&&v("span",{className:"text-[10px] text-[#7346a0] pr-1",children:[e.totalTime<1?"<1":e.totalTime.toFixed(0),"ms"]})]})]}),l===0&&v("div",{className:$(["absolute right-0 top-1/2 transition-none -translate-y-1/2 bg-white text-black px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity mr-16","pointer-events-none"]),children:"Click to learn more"})]}),h&&(g.length>0||b.length>0)&&v("div",{className:"pl-3 flex flex-col gap-y-1 mt-1",children:[g.toSorted((S,T)=>T.totalTime-S.totalTime).map((S,T)=>v(Ox,{depth:l+1,bar:S,debouncedMouseEnter:t,totalBarTime:r,isProduction:i,bars:s},T)),b.map(S=>v("div",{className:"w-full",children:v("div",{className:"w-full flex items-center relative text-xs",children:v("div",{className:"h-full w-full flex items-center relative",children:[v("div",{className:"flex items-center rounded-sm text-white text-xs h-[28px] w-full"}),v("div",{className:"absolute inset-0 flex items-center px-2",children:v("span",{className:"truncate whitespace-nowrap text-white/70 w-full",children:S})})]})})},S))]})]})},aC=({selectedEvent:e,selectedFiber:t})=>{const{setRoute:r}=bn(),[i,s]=Ee(!0),[l]=Ee(Xu());xm(()=>{const d=localStorage.getItem("react-scan-tip-shown"),h=d==="true"?!0:d==="false"?!1:null;if(h===null){s(!0),localStorage.setItem("react-scan-tip-is-shown","true");return}h||s(!1)},[]);const u=t.changes.context.length===0&&t.changes.props.length===0&&t.changes.state.length===0;return v("div",{className:$(["w-full min-h-fit h-full flex flex-col py-4 pt-0 rounded-sm"]),children:[v("div",{className:$(["flex items-start gap-x-4 "]),children:[v("button",{onClick:()=>{r({route:"render-visualization",routeMessage:null})},className:$(["text-white hover:bg-[#34343b] flex gap-x-1 justify-center items-center mb-4 w-fit px-2.5 py-1.5 text-xs rounded-sm bg-[#18181B]"]),children:[v(U3,{size:14})," ",v("span",{children:"Overview"})]}),v("div",{className:$(["flex flex-col gap-y-1"]),children:[v("div",{className:$(["text-sm font-bold text-white overflow-x-hidden"]),children:v("div",{className:"flex items-center gap-x-2 truncate",children:t.name})}),v("div",{className:$(["flex gap-x-2"]),children:[!l&&v(De,{children:v("div",{className:$(["text-xs text-gray-400"]),children:["• Render time: ",t.totalTime.toFixed(0),"ms"]})}),v("div",{className:$(["text-xs text-gray-400 mb-4"]),children:["• Renders: ",t.count,"x"]})]})]})]}),i&&!u&&v("div",{className:$(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex relative"]),children:[v("button",{onClick:()=>{s(!1),localStorage.setItem("react-scan-tip-shown","false")},className:$(["absolute right-2 top-2 rounded-sm p-1 hover:bg-[#18181B]"]),children:v(Ou,{size:12})}),v("div",{className:$(["w-1 bg-[#d36cff]"])}),v("div",{className:$(["flex-1"]),children:[v("div",{className:$(["px-3 py-2 text-gray-100 text-xs font-semibold"]),children:"How to stop renders"}),v("div",{className:$(["px-3 pb-2 text-gray-400 text-[10px]"]),children:"Stop the following props, state and context from changing between renders, and wrap the component in React.memo if not already"})]})]}),u&&v("div",{className:$(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex"]),children:[v("div",{className:$(["w-1 bg-[#d36cff]"])}),v("div",{className:$(["flex-1"]),children:[v("div",{className:$(["px-3 py-2 text-gray-100 text-sm font-semibold"]),children:"No changes detected"}),v("div",{className:$(["px-3 pb-2 text-gray-400 text-xs"]),children:"This component would not of rendered if it was memoized"})]})]}),v("div",{className:$(["flex w-full"]),children:[v("div",{className:$(["flex flex-col border border-[#27272A] rounded-l-sm overflow-hidden w-1/3"]),children:[v("div",{className:$(["text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Props"}),t.changes.props.length>0?t.changes.props.toSorted((d,h)=>h.count-d.count).map(d=>v("div",{className:$(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[v("span",{className:$(["text-white "]),children:d.name}),v("div",{className:$([" text-[8px]  text-[#d36cff] pl-1 py-1 "]),children:[d.count,"/",t.count,"x"]})]},d.name)):v("div",{className:$(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),v("div",{className:$(["flex flex-col border border-[#27272A] border-l-0 overflow-hidden w-1/3"]),children:[v("div",{className:$([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed State"}),t.changes.state.length>0?t.changes.state.toSorted((d,h)=>h.count-d.count).map(d=>v("div",{className:$(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[v("span",{className:$(["text-white "]),children:["index ",d.index]}),v("div",{className:$(["rounded-full  text-[#d36cff] pl-1 py-1 text-[8px]"]),children:[d.count,"/",t.count,"x"]})]},d.index)):v("div",{className:$(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),v("div",{className:$(["flex flex-col border border-[#27272A] border-l-0 rounded-r-sm overflow-hidden w-1/3"]),children:[v("div",{className:$([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Context"}),t.changes.context.length>0?t.changes.context.toSorted((d,h)=>h.count-d.count).map(d=>v("div",{className:$(["flex flex-col justify-between items-center border-t  border-[#27272A] px-1 py-1 bg-[#0A0A0A] text-[10px] overflow-x-auto"]),children:[v("span",{className:$(["text-white "]),children:d.name}),v("div",{className:$(["rounded-full text-[#d36cff] pl-1 py-1 text-[8px] text-wrap"]),children:[d.count,"/",t.count,"x"]})]},d.name)):v("div",{className:$(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A] py-2"]),children:"No changes"})]})]})]})},iC=()=>{const{notificationState:e,setNotificationState:t}=bn(),[r,i]=Ee("..."),s=he(null);if(Te(()=>{const l=setInterval(()=>{i(u=>u==="..."?"":u+".")},500);return()=>clearInterval(l)},[]),!e.selectedEvent)return v("div",{ref:s,className:$(["h-full w-full flex flex-col items-center justify-center relative py-2 px-4"]),children:[v("div",{className:$(["p-2 flex justify-center items-center border-[#27272A] absolute top-0 right-0"]),children:v("button",{onClick:()=>{Ke.value={view:"none"}},children:v(Ou,{size:18,className:"text-[#6F6F78]"})})}),v("div",{className:$(["flex flex-col items-start pt-5 bg-[#0A0A0A] p-5 rounded-sm max-w-md"," shadow-lg"]),children:v("div",{className:$(["flex flex-col items-start gap-y-4"]),children:[v("div",{className:$(["flex items-center"]),children:v("span",{className:$(["text-zinc-400 font-medium text-[17px]"]),children:["Scanning for slowdowns",r]})}),e.events.length!==0&&v("p",{className:$(["text-xs"]),children:["Click on an item in the"," ",v("span",{className:$(["text-purple-400"]),children:"History"})," list to get started"]}),v("p",{className:$(["text-zinc-600 text-xs"]),children:"You don't need to keep this panel open for React Scan to record slowdowns"}),v("p",{className:$(["text-zinc-600 text-xs"]),children:"Enable audio alerts to hear a delightful ding every time a large slowdown is recorded"}),v("button",{onClick:()=>{if(e.audioNotificationsOptions.enabled){t(u=>{var d,h;return((d=u.audioNotificationsOptions.audioContext)==null?void 0:d.state)!=="closed"&&((h=u.audioNotificationsOptions.audioContext)==null||h.close()),localStorage.setItem("react-scan-notifications-audio","false"),{...u,audioNotificationsOptions:{audioContext:null,enabled:!1}}});return}localStorage.setItem("react-scan-notifications-audio","true");const l=new AudioContext;Cm(l),t(u=>({...u,audioNotificationsOptions:{enabled:!0,audioContext:l}}))},className:$(["px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-sm w-full"," text-sm flex items-center gap-x-2 justify-center"]),children:e.audioNotificationsOptions.enabled?v(De,{children:v("span",{className:"flex items-center gap-x-1",children:"Disable audio alerts"})}):v(De,{children:v("span",{className:"flex items-center gap-x-1",children:"Enable audio alerts"})})})]})})]});switch(e.route){case"render-visualization":return v(Bc,{children:v(nC,{selectedEvent:e.selectedEvent})});case"render-explanation":{if(!e.selectedFiber)throw new Error("Invariant: must have selected fiber when viewing render explanation");return v(Bc,{children:v(aC,{selectedFiber:e.selectedFiber,selectedEvent:e.selectedEvent})})}case"other-visualization":return v(Bc,{children:v("div",{className:$(["flex w-full h-full flex-col overflow-y-auto"]),id:"overview-scroll-container",children:v(W3,{selectedEvent:e.selectedEvent})})});case"optimize":return v(Bc,{children:v(V3,{selectedEvent:e.selectedEvent})})}e.route},Bc=({children:e})=>{const{notificationState:t}=bn();if(!t.selectedEvent)throw new Error("Invariant: d must have selected event when viewing render explanation");return v("div",{className:$(["w-full h-full flex flex-col gap-y-2"]),children:[v("div",{className:$(["h-[50px] w-full"]),children:v(q3,{selectedEvent:t.selectedEvent})}),v("div",{className:$(["h-calc(100%-50px) flex flex-col overflow-y-auto px-3"]),children:e})]})},oC=({selectedEvent:e})=>{const t=hl(e);switch(e.kind){case"interaction":return v("div",{className:$(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:v("div",{className:$(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[v("div",{className:$(["flex items-center gap-x-2 "]),children:[v("span",{className:$(["text-[#5a5a5a] mr-0.5"]),children:e.type==="click"?"Clicked ":"Typed in "}),v("span",{children:tl(e.componentPath)}),v("div",{className:$(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",t==="low"&&"bg-green-500/50",t==="needs-improvement"&&"bg-[#b77116]",t==="high"&&"bg-[#b94040]"]),children:[Rt(e.timing).toFixed(0),"ms processing time"]})]}),v("div",{className:$(["flex items-center gap-x-2  justify-end ml-auto"]),children:v("div",{className:$(["p-2 flex justify-center items-center border-[#27272A]"]),children:v("button",{onClick:()=>{Ke.value={view:"none"}},title:"Close",children:v(Ou,{size:18,className:"text-[#6F6F78]"})})})})]})});case"dropped-frames":return v("div",{className:$(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:v("div",{className:$(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[v("div",{className:$(["flex items-center gap-x-2 "]),children:["FPS Drop",v("div",{className:$(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",t==="low"&&"bg-green-500/50",t==="needs-improvement"&&"bg-[#b77116]",t==="high"&&"bg-[#b94040]"]),children:["dropped to ",e.fps," FPS"]})]}),v("div",{className:$(["flex items-center gap-x-2 w-2/4 justify-end ml-auto"]),children:v("div",{className:$(["p-2 flex justify-center items-center border-[#27272A]"]),children:v("button",{onClick:()=>{Ke.value={view:"none"}},children:v(Ou,{size:18,className:"text-[#6F6F78]"})})})})]})})}},sC=({flashingItemsCount:e,totalEvents:t})=>{const[r,i]=Ee(!1),s=he(0),l=he(0);return Te(()=>{if(s.current>=t)return;const u=Date.now(),d=250,h=u-l.current;if(h>=d){i(!1);const p=setTimeout(()=>{s.current=t,l.current=Date.now(),i(!0),setTimeout(()=>{i(!1)},2e3)},50);return()=>clearTimeout(p)}else{const p=d-h,y=setTimeout(()=>{i(!1),setTimeout(()=>{s.current=t,l.current=Date.now(),i(!0),setTimeout(()=>{i(!1)},2e3)},50)},p);return()=>clearTimeout(y)}},[e]),r},hw=({item:e,shouldFlash:t})=>{var d;const[r,i]=Ee(!1),s=e.events.map(hl).reduce((h,p)=>{switch(p){case"high":return"high";case"needs-improvement":return h==="high"?"high":"needs-improvement";case"low":return h}},"low"),l=e.events.reduce((h,p)=>t(p.id)?h+1:h,0),u=sC({flashingItemsCount:l,totalEvents:e.events.length});return v("div",{className:$(["flex flex-col gap-y-0.5"]),children:[v("button",{onClick:()=>i(h=>!h),className:$(["pl-2 py-1.5  text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",u&&!r&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[v("div",{className:$(["w-4/5 flex items-center justify-start h-full text-xs truncate gap-x-1.5"]),children:[v("span",{className:$(["min-w-fit"]),children:v(Mx,{className:$(["text-[#A1A1AA] transition-transform",r?"rotate-90":""]),size:14},`chevron-${e.timestamp}`)}),v("span",{className:$(["text-xs"]),children:e.kind==="collapsed-frame-drops"?"FPS Drops":tl(((d=e.events.at(0))==null?void 0:d.componentPath)??[])})]}),v("div",{className:$(["ml-auto min-w-fit flex justify-end items-center"]),children:v("div",{style:{lineHeight:"10px"},className:$(["w-fit flex items-center text-[10px] justify-center h-full text-white px-1 py-1 rounded-sm font-semibold",s==="low"&&"bg-green-500/60",s==="needs-improvement"&&"bg-[#b77116] text-[10px]",s==="high"&&"bg-[#b94040]"]),children:["x",e.events.length]})})]}),r&&v(lC,{children:e.events.toSorted((h,p)=>p.timestamp-h.timestamp).map(h=>v(Ax,{event:h,shouldFlash:t(h.id)}))})]})},lC=({children:e})=>v("div",{className:"relative pl-6 flex flex-col gap-y-1",children:[v("div",{className:"absolute left-3 top-0 bottom-0 w-px bg-[#27272A]"}),e]}),cC=e=>{const t=he([]),[r,i]=Ee(new Set),s=he(!0);return Te(()=>{if(s.current){s.current=!1,t.current=e;return}const l=new Set(e.map(h=>h.id)),u=new Set(t.current.map(h=>h.id)),d=new Set;l.forEach(h=>{u.has(h)||d.add(h)}),d.size>0&&(i(d),setTimeout(()=>{i(new Set)},2e3)),t.current=e},[e]),l=>r.has(l)},uC=({shouldFlash:e})=>{const[t,r]=Ee(e);return Te(()=>{if(e){r(!0);const i=setTimeout(()=>{r(!1)},1e3);return()=>clearTimeout(i)}},[e]),t},Ax=({event:e,shouldFlash:t})=>{var u,d;const{notificationState:r,setNotificationState:i}=bn(),s=hl(e),l=uC({shouldFlash:t});switch(e.kind){case"interaction":return v("button",{onClick:()=>{i(h=>({...h,selectedEvent:e,route:"render-visualization",selectedFiber:null}))},className:$(["pl-2 py-1.5  text-sm flex w-full items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",e.id===((u=r.selectedEvent)==null?void 0:u.id)&&"bg-[#18181B]",l&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[v("div",{className:$(["w-4/5 flex items-center justify-start h-full gap-x-1.5"]),children:[v("span",{className:$(["min-w-fit text-xs"]),children:Gn(()=>{switch(e.type){case"click":return v(L3,{size:14});case"keyboard":return v($3,{size:14})}})}),v("span",{className:$(["text-xs pr-1 truncate"]),children:tl(e.componentPath)})]}),v("div",{className:$([" min-w-fit flex justify-end items-center ml-auto"]),children:v("div",{style:{lineHeight:"10px"},className:$(["gap-x-0.5 w-fit flex items-end justify-center h-full text-white px-1 py-1 rounded-sm font-semibold text-[10px]",s==="low"&&"bg-green-500/50",s==="needs-improvement"&&"bg-[#b77116] text-[10px]",s==="high"&&"bg-[#b94040]"]),children:v("div",{style:{lineHeight:"10px"},className:$(["text-[10px] text-white flex items-end"]),children:[Rt(e.timing).toFixed(0),"ms"]})})})]});case"dropped-frames":return v("button",{onClick:()=>{i(h=>({...h,selectedEvent:e,route:"render-visualization",selectedFiber:null}))},className:$(["pl-2 py-1.5  w-full text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",e.id===((d=r.selectedEvent)==null?void 0:d.id)&&"bg-[#18181B]",l&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[v("div",{className:$(["w-4/5 flex items-center justify-start h-full text-xs truncate"]),children:[v(I3,{size:14,className:"mr-1.5"})," FPS Drop"]}),v("div",{className:$([" min-w-fit flex justify-end items-center ml-auto"]),children:v("div",{style:{lineHeight:"10px"},className:$(["w-fit flex items-center justify-center h-full text-white px-1 py-1 rounded-sm text-[10px] font-bold",s==="low"&&"bg-green-500/60",s==="needs-improvement"&&"bg-[#b77116] text-[10px]",s==="high"&&"bg-[#b94040]"]),children:[e.fps," FPS"]})})]})}},dC=e=>e.reduce((r,i)=>{const s=r.at(-1);if(!s)return[{kind:"single",event:i,timestamp:i.timestamp}];switch(s.kind){case"collapsed-keyboard":return i.kind==="interaction"&&i.type==="keyboard"&&i.componentPath.join("-")===s.events[0].componentPath.join("-")?[...r.filter(u=>u!==s),{kind:"collapsed-keyboard",events:[...s.events,i],timestamp:Math.max(...[...s.events,i].map(u=>u.timestamp))}]:[...r,{kind:"single",event:i,timestamp:i.timestamp}];case"single":return s.event.kind==="interaction"&&s.event.type==="keyboard"&&i.kind==="interaction"&&i.type==="keyboard"&&s.event.componentPath.join("-")===i.componentPath.join("-")?[...r.filter(u=>u!==s),{kind:"collapsed-keyboard",events:[s.event,i],timestamp:Math.max(s.event.timestamp,i.timestamp)}]:s.event.kind==="dropped-frames"&&i.kind==="dropped-frames"?[...r.filter(u=>u!==s),{kind:"collapsed-frame-drops",events:[s.event,i],timestamp:Math.max(s.event.timestamp,i.timestamp)}]:[...r,{kind:"single",event:i,timestamp:i.timestamp}];case"collapsed-frame-drops":return i.kind==="dropped-frames"?[...r.filter(u=>u!==s),{kind:"collapsed-frame-drops",events:[...s.events,i],timestamp:Math.max(...[...s.events,i].map(u=>u.timestamp))}]:[...r,{kind:"single",event:i,timestamp:i.timestamp}]}},[]),Rx=(e=150)=>{const{notificationState:t}=bn(),[r,i]=Ee(t.events);return Te(()=>{setTimeout(()=>{i(t.events)},e)},[t.events]),[r,i]},fC=()=>{const{notificationState:e,setNotificationState:t}=bn(),r=cC(e.events),[i,s]=Rx(),l=dC(i).toSorted((u,d)=>d.timestamp-u.timestamp);return v("div",{className:$(["w-full h-full gap-y-2 flex flex-col border-r border-[#27272A] overflow-y-auto"]),children:[v("div",{className:$(["text-sm text-[#65656D] pl-3 pr-1 w-full flex items-center justify-between"]),children:[v("span",{children:"History"}),v(Nx,{wrapperProps:{className:"h-full flex items-center justify-center ml-auto"},triggerContent:v("button",{className:$(["hover:bg-[#18181B] rounded-full p-2"]),title:"Clear all events",onClick:()=>{el.getState().actions.clear(),t(u=>({...u,selectedEvent:null,selectedFiber:null,route:u.route==="other-visualization"?"other-visualization":"render-visualization"})),s([])},children:v(H3,{className:$([""]),size:16})}),children:v("div",{className:$(["w-full flex justify-center"]),children:"Clear all events"})})]}),v("div",{className:$(["flex flex-col px-1 gap-y-1"]),children:[l.length===0&&v("div",{className:$(["flex items-center justify-center text-zinc-500 text-sm py-4"]),children:"No Events"}),l.map(u=>Gn(()=>{switch(u.kind){case"collapsed-keyboard":return v(hw,{shouldFlash:r,item:u});case"single":return v(Ax,{event:u.event,shouldFlash:r(u.event.id)},u.event.id);case"collapsed-frame-drops":return v(hw,{shouldFlash:r,item:u})}}))]})]})},hC=e=>Object.values(e).map(r=>({id:Bn(),totalTime:r.nodeInfo.reduce((i,s)=>i+s.selfTime,0),count:r.nodeInfo.length,name:r.nodeInfo[0].name,deletedAll:!1,parents:r.parents,hasMemoCache:r.hasMemoCache,wasFiberRenderMount:r.wasFiberRenderMount,elements:r.nodeInfo.map(i=>i.element),changes:{context:r.changes.fiberContext.current.filter(i=>r.changes.fiberContext.changesCounts.get(i.name)).map(i=>({name:String(i.name),count:r.changes.fiberContext.changesCounts.get(i.name)??0})),props:r.changes.fiberProps.current.filter(i=>r.changes.fiberProps.changesCounts.get(i.name)).map(i=>({name:String(i.name),count:r.changes.fiberProps.changesCounts.get(i.name)??0})),state:r.changes.fiberState.current.filter(i=>r.changes.fiberState.changesCounts.get(Number(i.name))).map(i=>({index:i.name,count:r.changes.fiberState.changesCounts.get(Number(i.name))??0}))}})),pC=e=>{Te(()=>{const r=setInterval(()=>{e.forEach(i=>{i.groupedFiberRenders&&i.groupedFiberRenders.forEach(s=>{if(s.deletedAll)return;if(!s.elements||s.elements.length===0){s.deletedAll=!0;return}const l=s.elements.length;s.elements=s.elements.filter(u=>u&&u.isConnected),s.elements.length===0&&l>0&&(s.deletedAll=!0)})})},5e3);return()=>{clearInterval(r)}},[e])},zx=()=>{const e=C3(),t=[];return pC(t),e.state.events.forEach(r=>{const i=r.kind==="interaction"?r.data.meta.detailedTiming.fiberRenders:r.data.meta.fiberRenders,s=hC(i),l=s.reduce((u,d)=>u+d.totalTime,0);switch(r.kind){case"interaction":{const{commitEnd:u,jsEndDetail:d,interactionStartDetail:h,rafStart:p}=r.data.meta.detailedTiming,y=Math.max(0,d-h-l),g=Math.max(r.data.meta.latency-(u-h),0);t.push({componentPath:r.data.meta.detailedTiming.componentPath,groupedFiberRenders:s,id:r.id,kind:"interaction",memory:null,timestamp:r.data.startAt,type:r.data.meta.detailedTiming.interactionType==="keyboard"?"keyboard":"click",timing:{renderTime:l,kind:"interaction",otherJSTime:y,framePreparation:p-d,frameConstruction:u-p,frameDraw:g}});return}case"long-render":{t.push({kind:"dropped-frames",id:r.id,memory:null,timing:{kind:"dropped-frames",renderTime:l,otherTime:r.data.meta.latency},groupedFiberRenders:s,timestamp:r.data.startAt,fps:r.data.meta.fps});return}}}),t},mC=1e3,gC=()=>{const{notificationState:e,setNotificationState:t}=bn(),r=he(null),i=he(null),s=he(0),[l]=Rx(),u=l.filter(d=>hl(d)==="high").length;return Te(()=>{const d=localStorage.getItem("react-scan-notifications-audio");if(d!=="false"&&d!=="true"){localStorage.setItem("react-scan-notifications-audio","false");return}if(d!=="false"){t(p=>p.audioNotificationsOptions.enabled?p:{...p,audioNotificationsOptions:{enabled:!0,audioContext:new AudioContext}});return}},[]),Te(()=>{const{audioNotificationsOptions:d}=e;if(!d.enabled||u===0||r.current&&r.current>=u)return;i.current&&clearTimeout(i.current);const p=Date.now()-s.current,y=Math.max(0,mC-p);i.current=setTimeout(()=>{Cm(d.audioContext),r.current=u,s.current=Date.now(),i.current=null},y)},[u]),Te(()=>{u===0&&(r.current=null)},[u]),Te(()=>()=>{i.current&&clearTimeout(i.current)},[]),null},vC=Em((e,t)=>{const r=zx(),[i,s]=Ee({detailsExpanded:!1,events:r,filterBy:"latest",moreInfoExpanded:!1,route:"render-visualization",selectedEvent:r.toSorted((l,u)=>l.timestamp-u.timestamp).at(-1)??null,selectedFiber:null,routeMessage:null,audioNotificationsOptions:{enabled:!1,audioContext:null}});return i.events=r,v(Cx.Provider,{value:{notificationState:i,setNotificationState:s,setRoute:({route:l,routeMessage:u})=>{s(d=>{const h={...d,route:l,routeMessage:u};switch(l){case"render-visualization":return Ds(),{...h,selectedFiber:null};case"optimize":return Ds(),{...h,selectedFiber:null};case"other-visualization":return Ds(),{...h,selectedFiber:null};case"render-explanation":return Ds(),h}})}},children:[v(gC,{}),v(yC,{ref:t})]})}),yC=Em((e,t)=>{var i;const{notificationState:r}=bn();return v("div",{ref:t,className:$(["h-full w-full flex flex-col"]),children:[r.selectedEvent&&v("div",{className:$(["w-full h-[48px] flex flex-col",r.moreInfoExpanded&&"h-[235px]",r.moreInfoExpanded&&r.selectedEvent.kind==="dropped-frames"&&"h-[150px]"]),children:[v(oC,{selectedEvent:r.selectedEvent}),r.moreInfoExpanded&&v(bC,{})]}),v("div",{className:$(["flex ",r.selectedEvent?"h-[calc(100%-48px)]":"h-full",r.moreInfoExpanded&&"h-[calc(100%-200px)]",r.moreInfoExpanded&&((i=r.selectedEvent)==null?void 0:i.kind)==="dropped-frames"&&"h-[calc(100%-150px)]"]),children:[v("div",{className:$(["h-full min-w-[200px]"]),children:v(fC,{})}),v("div",{className:$(["w-[calc(100%-200px)] h-full overflow-y-auto"]),children:v(iC,{})})]})]})}),bC=()=>{const{notificationState:e}=bn();if(!e.selectedEvent)throw new Error("Invariant must have selected event for more info");const t=e.selectedEvent;return v("div",{className:$(["px-4 py-2 border-b border-[#27272A] bg-[#18181B]/50 h-[calc(100%-40px)]",t.kind==="dropped-frames"&&"h-[calc(100%-25px)]"]),children:v("div",{className:$(["flex flex-col gap-y-4 h-full"]),children:Gn(()=>{switch(t.kind){case"interaction":return v(De,{children:[v("div",{className:$(["flex items-center gap-x-3"]),children:[v("span",{className:"text-[#6F6F78] text-xs font-medium",children:t.type==="click"?"Clicked component location":"Typed in component location"}),v("div",{className:"font-mono text-[#E4E4E7] flex items-center bg-[#27272A] pl-2 py-1 rounded-sm overflow-x-auto",children:t.componentPath.toReversed().map((r,i)=>v(De,{children:[v("span",{style:{lineHeight:"14px"},className:"text-[10px] whitespace-nowrap",children:r},r),i<t.componentPath.length-1&&v("span",{className:"text-[#6F6F78] mx-0.5",children:"‹"})]}))})]}),v("div",{className:$(["flex items-center gap-x-3"]),children:[v("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),v("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[Rt(t.timing).toFixed(0),"ms"]})]}),v("div",{className:$(["flex items-center gap-x-3"]),children:[v("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),v("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]});case"dropped-frames":return v(De,{children:[v("div",{className:$(["flex items-center gap-x-3"]),children:[v("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),v("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[Rt(t.timing).toFixed(0),"ms"]})]}),v("div",{className:$(["flex items-center gap-x-3"]),children:[v("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),v("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]})}})})})},wC=Nm(()=>{var b;const e=zx(),[t,r]=Ee(e);Te(()=>{const w=setTimeout(()=>{r(e)},600);return()=>{clearTimeout(w)}},[e]);const i=ae.inspectState,s=i.value.kind==="inspecting",l=i.value.kind==="focused",[u,d]=Ee([]),h=ft(()=>{switch(ae.inspectState.value.kind){case"inspecting":{Ke.value={view:"none"},ae.inspectState.value={kind:"inspect-off"};return}case"focused":{Ke.value={view:"inspector"},ae.inspectState.value={kind:"inspecting",hoveredDomElement:null};return}case"inspect-off":{Ke.value={view:"none"},ae.inspectState.value={kind:"inspecting",hoveredDomElement:null};return}case"uninitialized":return}},[]),p=ft(w=>{if(w.preventDefault(),w.stopPropagation(),!Le.instrumentation)return;const S=!Le.instrumentation.isPaused.value;Le.instrumentation.isPaused.value=S;const T=Ur("react-scan-options");Kt("react-scan-options",{...T,enabled:!S})},[]);Ks(()=>{ae.inspectState.value.kind==="uninitialized"&&(ae.inspectState.value={kind:"inspect-off"})});let y=null,g="#999";return s?(y=v(lt,{name:"icon-inspect"}),g="#8e61e3"):l?(y=v(lt,{name:"icon-focus"}),g="#8e61e3"):(y=v(lt,{name:"icon-inspect"}),g="#999"),xm(()=>{if(Ke.value.view!=="notifications")return;const w=new Set(e.map(S=>S.id));d([...w.values()])},[e.length,Ke.value.view]),v("div",{className:"flex max-h-9 min-h-9 flex-1 items-stretch overflow-hidden",children:[v("div",{className:"h-full flex items-center min-w-fit",children:v("button",{type:"button",id:"react-scan-inspect-element",title:"Inspect element",onClick:h,className:"button flex items-center justify-center h-full w-full pl-3 pr-2.5",style:{color:g},children:y})}),v("div",{className:"h-full flex items-center justify-center",children:v("button",{type:"button",id:"react-scan-notifications",title:"Notifications",onClick:()=>{switch(ae.inspectState.value.kind!=="inspect-off"&&(ae.inspectState.value={kind:"inspect-off"}),Ke.value.view){case"inspector":{ae.inspectState.value={kind:"inspect-off"};const w=new Set(e.map(S=>S.id));d([...w.values()]),Ke.value={view:"notifications"};return}case"notifications":{Ke.value={view:"none"};return}case"none":{const w=new Set(e.map(S=>S.id));d([...w.values()]),Ke.value={view:"notifications"};return}}},className:"button flex items-center justify-center h-full pl-2.5 pr-2.5",style:{color:g},children:v(z3,{events:t.filter(w=>!u.includes(w.id)).map(w=>hl(w)==="high"),size:16,className:$(["text-[#999]",Ke.value.view==="notifications"&&"text-[#8E61E3]"])})})}),v(s3,{checked:!((b=Le.instrumentation)!=null&&b.isPaused.value),onChange:p,className:"place-self-center",title:"Outline Re-renders"}),Le.options.value.showFPS&&v(c3,{})]})}),xC=ci(()=>ae.inspectState.value.kind==="inspecting"),_C=ci(()=>$("relative","flex-1","flex flex-col","rounded-t-lg","overflow-hidden","opacity-100","transition-[opacity]",xC.value&&"opacity-0 duration-0 delay-0")),SC=ci(()=>Ke.value.view==="inspector"),TC=ci(()=>Ke.value.view==="notifications"),kC=()=>v("div",{className:$("flex flex-1 flex-col","overflow-hidden z-10","rounded-lg","bg-black","opacity-100","transition-[border-radius]","peer-hover/left:rounded-l-none","peer-hover/right:rounded-r-none","peer-hover/top:rounded-t-none","peer-hover/bottom:rounded-b-none"),children:[v("div",{className:_C,children:[v(o3,{}),v("div",{className:$("relative","flex-1 flex","text-white","bg-[#0A0A0A]","transition-opacity delay-150","overflow-hidden","border-b border-[#222]"),children:[v(pw,{isOpen:SC,children:v(fE,{})}),v(pw,{isOpen:TC,children:v(vC,{})})]})]}),v(wC,{})]}),pw=({isOpen:e,children:t})=>v("div",{className:$("flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",e.value&&"opacity-100 delay-150 pointer-events-auto"),children:v("div",{className:"absolute inset-0 flex",children:t})}),Yc=(e,t,r)=>e+(t-e)*r,$h={frameInterval:1e3/60,speeds:{fast:.51,slow:.1,off:0}},to=cr&&window.devicePixelRatio||1,EC=()=>{const e=he(null),t=he(null),r=he(null),i=he(null),s=he(null),l=he(0),u=he(),d=he(new Map),h=he(!1),p=he(0),y=(E,R,j,G)=>{E.save(),E.strokeStyle="white",E.fillStyle="white",E.lineWidth=1.5;const N=G*.6,q=G*.5,Z=R+(G-N)/2,J=j;E.beginPath(),E.arc(Z+N/2,J+q/2,N/2,Math.PI,0,!1),E.stroke();const te=G*.8,oe=G*.5,re=R+(G-te)/2,be=j+q/2;E.fillRect(re,be,te,oe),E.restore()},g=(E,R,j,G)=>{if(!G)return;const N=24,q=8,J=((G==null?void 0:G.type)&&Ot(G.type))??"Unknown";E.save(),E.font="12px system-ui, -apple-system, sans-serif";const oe=E.measureText(J).width,re=j==="locked"?14:0,be=j==="locked"?6:0,de=oe+q*2+re+be,Me=R.left,rt=R.top-N-4;if(E.fillStyle="rgb(37, 37, 38, .75)",E.beginPath(),E.roundRect(Me,rt,de,N,3),E.fill(),j==="locked"){const Br=Me+q,Yr=rt+(N-re)/2+2;y(E,Br,Yr,re),i.current={x:Br,y:Yr,width:re,height:re}}else i.current=null;E.fillStyle="white",E.textBaseline="middle";const Ln=Me+q+(j==="locked"?re+be:0);E.fillText(J,Ln,rt+N/2),E.restore()},b=(E,R,j,G)=>{if(!r.current)return;const N=r.current;R.clearRect(0,0,E.width,E.height),R.strokeStyle="rgba(142, 97, 227, 0.5)",R.fillStyle="rgba(173, 97, 230, 0.10)",j==="locked"?R.setLineDash([]):R.setLineDash([4]),R.lineWidth=1,R.fillRect(N.left,N.top,N.width,N.height),R.strokeRect(N.left,N.top,N.width,N.height),g(R,N,j,G)},w=(E,R,j,G,N,q)=>{const Z=Le.options.value.animationSpeed,J=$h.speeds[Z]??$h.speeds.off,te=oe=>{if(oe-p.current<$h.frameInterval){l.current=requestAnimationFrame(te);return}if(p.current=oe,!r.current){cancelAnimationFrame(l.current);return}r.current={left:Yc(r.current.left,j.left,J),top:Yc(r.current.top,j.top,J),width:Yc(r.current.width,j.width,J),height:Yc(r.current.height,j.height,J)},b(E,R,G,N),Math.abs(r.current.left-j.left)>.1||Math.abs(r.current.top-j.top)>.1||Math.abs(r.current.width-j.width)>.1||Math.abs(r.current.height-j.height)>.1?l.current=requestAnimationFrame(te):(r.current=j,b(E,R,G,N),cancelAnimationFrame(l.current),R.restore())};cancelAnimationFrame(l.current),clearTimeout(u.current),l.current=requestAnimationFrame(te),u.current=setTimeout(()=>{cancelAnimationFrame(l.current),r.current=j,b(E,R,G,N),R.restore()},1e3)},S=(E,R,j,G,N)=>{if(R.save(),!r.current){r.current=j,b(E,R,G,N),R.restore();return}w(E,R,j,G,N)},T=async(E,R,j,G)=>{if(!E||!R||!j)return;const{parentCompositeFiber:N}=Qa(E),q=await hE(E);!N||!q||S(R,j,q,G,N)},M=()=>{for(const E of d.current.values())E==null||E()},_=E=>{const R=E.getContext("2d");R&&R.clearRect(0,0,E.width,E.height),r.current=null,i.current=null,s.current=null,E.classList.remove("fade-in"),h.current=!1},C=E=>{if(!e.current||h.current)return;const R=G=>{!e.current||G.propertyName!=="opacity"||!h.current||(e.current.removeEventListener("transitionend",R),_(e.current),E==null||E())},j=d.current.get("fade-out");j&&(j(),d.current.delete("fade-out")),e.current.addEventListener("transitionend",R),d.current.set("fade-out",()=>{var G;(G=e.current)==null||G.removeEventListener("transitionend",R)}),h.current=!0,e.current.classList.remove("fade-in"),requestAnimationFrame(()=>{var G;(G=e.current)==null||G.classList.add("fade-out")})},O=()=>{e.current&&(h.current=!1,e.current.classList.remove("fade-out"),requestAnimationFrame(()=>{var E;(E=e.current)==null||E.classList.add("fade-in")}))},U=E=>{E!==s.current&&(s.current=E,Mp.has(E.tagName)?C():O(),ae.inspectState.value={kind:"inspecting",hoveredDomElement:E})},D=()=>{!r.current||!e.current||h.current||C()},X=ax(E=>{if(ae.inspectState.peek().kind!=="inspecting"||!t.current)return;t.current.style.pointerEvents="none";const j=document.elementFromPoint((E==null?void 0:E.clientX)??0,(E==null?void 0:E.clientY)??0);if(t.current.style.removeProperty("pointer-events"),clearTimeout(u.current),j&&j!==e.current){const{parentCompositeFiber:G}=Qa(j);if(G){const N=Tu(G);if(N){U(N);return}}}D()},32),F=(E,R)=>{const j=i.current;if(!j)return!1;const G=R.getBoundingClientRect(),N=R.width/G.width,q=R.height/G.height,Z=(E.clientX-G.left)*N,J=(E.clientY-G.top)*q,te=Z/to,oe=J/to;return te>=j.x&&te<=j.x+j.width&&oe>=j.y&&oe<=j.y+j.height},ee=E=>{E.kind==="focused"&&(ae.inspectState.value={kind:"inspecting",hoveredDomElement:E.focusedDomElement})},ne=E=>{var J;const R=["react-scan-inspect-element","react-scan-power"];if(E.target instanceof HTMLElement&&R.includes(E.target.id))return;const j=(J=s.current)==null?void 0:J.tagName;if(j&&Mp.has(j))return;E.preventDefault(),E.stopPropagation();const G=s.current??document.elementFromPoint(E.clientX,E.clientY);if(!G)return;const N=E.composedPath().at(0);if(N instanceof HTMLElement&&R.includes(N.id)){const te=new MouseEvent(E.type,E);te.__reactScanSyntheticEvent=!0,N.dispatchEvent(te);return}const{parentCompositeFiber:q}=Qa(G);if(!q)return;const Z=Tu(q);if(!Z){s.current=null,ae.inspectState.value={kind:"inspect-off"};return}ae.inspectState.value={kind:"focused",focusedDomElement:Z,fiber:q}},pe=E=>{if(E.__reactScanSyntheticEvent)return;const R=ae.inspectState.peek(),j=e.current;if(!(!j||!t.current)){if(F(E,j)){E.preventDefault(),E.stopPropagation(),ee(R);return}R.kind==="inspecting"&&ne(E)}},ue=E=>{var G;if(E.key!=="Escape")return;const R=ae.inspectState.peek();if(e.current&&((G=document.activeElement)==null?void 0:G.id)!=="react-scan-root"&&(Ke.value={view:"none"},R.kind==="focused"||R.kind==="inspecting"))switch(E.preventDefault(),E.stopPropagation(),R.kind){case"focused":{O(),r.current=null,s.current=R.focusedDomElement,ae.inspectState.value={kind:"inspecting",hoveredDomElement:R.focusedDomElement};break}case"inspecting":{C(()=>{Pu.value=!1,ae.inspectState.value={kind:"inspect-off"}});break}}},ie=(E,R,j)=>{var N;(N=d.current.get(E.kind))==null||N(),t.current&&E.kind!=="inspecting"&&(t.current.style.pointerEvents="none"),l.current&&cancelAnimationFrame(l.current);let G;switch(E.kind){case"inspect-off":C();return;case"inspecting":T(E.hoveredDomElement,R,j,"inspecting");break;case"focused":if(!E.focusedDomElement)return;s.current!==E.focusedDomElement&&(s.current=E.focusedDomElement),Ke.value={view:"inspector"},T(E.focusedDomElement,R,j,"locked"),G=ae.lastReportTime.subscribe(()=>{if(l.current&&r.current){const{parentCompositeFiber:q}=Qa(E.focusedDomElement);q&&T(E.focusedDomElement,R,j,"locked")}}),G&&d.current.set(E.kind,G);break}},ze=(E,R)=>{const j=E.getBoundingClientRect();E.width=j.width*to,E.height=j.height*to,R.scale(to,to),R.save()},je=()=>{const E=ae.inspectState.peek(),R=e.current;if(!R)return;const j=R==null?void 0:R.getContext("2d");j&&(cancelAnimationFrame(l.current),clearTimeout(u.current),ze(R,j),r.current=null,E.kind==="focused"&&E.focusedDomElement?T(E.focusedDomElement,R,j,"locked"):E.kind==="inspecting"&&E.hoveredDomElement&&T(E.hoveredDomElement,R,j,"inspecting"))},Ce=E=>{const R=ae.inspectState.peek(),j=e.current;j&&(R.kind==="inspecting"||F(E,j))&&(E.preventDefault(),E.stopPropagation(),E.stopImmediatePropagation())};return Te(()=>{const E=e.current;if(!E)return;const R=E==null?void 0:E.getContext("2d");if(!R)return;ze(E,R);const j=ae.inspectState.subscribe(G=>{ie(G,E,R)});return window.addEventListener("scroll",je,{passive:!0}),window.addEventListener("resize",je,{passive:!0}),document.addEventListener("pointermove",X,{passive:!0,capture:!0}),document.addEventListener("pointerdown",Ce,{capture:!0}),document.addEventListener("click",pe,{capture:!0}),document.addEventListener("keydown",ue,{capture:!0}),()=>{M(),j(),window.removeEventListener("scroll",je),window.removeEventListener("resize",je),document.removeEventListener("pointermove",X,{capture:!0}),document.removeEventListener("click",pe,{capture:!0}),document.removeEventListener("pointerdown",Ce,{capture:!0}),document.removeEventListener("keydown",ue,{capture:!0}),l.current&&cancelAnimationFrame(l.current),clearTimeout(u.current)}},[]),v(De,{children:[v("div",{ref:t,className:$("fixed top-0 left-0 w-screen h-screen","z-[214748365]"),style:{pointerEvents:"none"}}),v("canvas",{ref:e,dir:"ltr",className:$("react-scan-inspector-overlay","fixed top-0 left-0 w-screen h-screen","pointer-events-none","z-[214748367]")})]})},CC=class{constructor(e,t){this.width=e,this.height=t,this.maxWidth=e-we*2,this.maxHeight=t-we*2}rightEdge(e){return this.width-e-we}bottomEdge(e){return this.height-e-we}isFullWidth(e){return e>=this.maxWidth}isFullHeight(e){return e>=this.maxHeight}},no,nl=()=>{const e=window.innerWidth,t=window.innerHeight;return no&&no.width===e&&no.height===t||(no=new CC(e,t)),no},MC=(e,t,r,i,s)=>{if(r){if(e==="top-left")return"bottom-right";if(e==="top-right")return"bottom-left";if(e==="bottom-left")return"top-right";if(e==="bottom-right")return"top-left";const[l,u]=t.split("-");if(e==="left")return`${l}-right`;if(e==="right")return`${l}-left`;if(e==="top")return`bottom-${u}`;if(e==="bottom")return`top-${u}`}if(i){if(e==="left")return`${t.split("-")[0]}-right`;if(e==="right")return`${t.split("-")[0]}-left`}if(s){if(e==="top")return`bottom-${t.split("-")[1]}`;if(e==="bottom")return`top-${t.split("-")[1]}`}return t},Ys=(e,t,r)=>{const i=getComputedStyle(document.body).direction==="rtl",s=window.innerWidth,l=window.innerHeight,u=t===bt.width,d=u?t:Math.min(t,s-we*2),h=u?r:Math.min(r,l-we*2);let p,y,g=we,b=s-d-we,w=we,S=l-h-we;switch(e){case"top-right":p=i?-g:b,y=w;break;case"bottom-right":p=i?-g:b,y=S;break;case"bottom-left":p=i?-b:g,y=S;break;case"top-left":p=i?-b:g,y=w;break;default:p=g,y=w;break}return u&&(i?p=Math.min(-g,Math.max(p,-b)):p=Math.max(g,Math.min(p,b)),y=Math.max(w,Math.min(y,S))),{x:p,y}},NC=(e,t)=>{const[r,i]=t.split("-");return e!==r&&e!==i},OC=(e,t,r,i)=>r&&i?!0:!r&&!i?NC(e,t):r?e!==t.split("-")[0]:i?e!==t.split("-")[1]:!1,Pc=(e,t,r)=>{const i=r?bt.width:bt.initialHeight,s=r?nl().maxWidth:nl().maxHeight,l=e+t;return Math.min(Math.max(i,l),s)},AC=(e,t,r,i,s)=>{const l=getComputedStyle(document.body).direction==="rtl",u=window.innerWidth-we*2,d=window.innerHeight-we*2;let h=t.width,p=t.height,y=r.x,g=r.y;if(l&&e.includes("right")){const M=-r.x+t.width-we,_=Math.min(t.width+i,M);h=Math.min(u,Math.max(bt.width,_)),y=r.x+(h-t.width)}if(l&&e.includes("left")){const M=window.innerWidth-r.x-we,_=Math.min(t.width-i,M);h=Math.min(u,Math.max(bt.width,_))}if(!l&&e.includes("right")){const M=window.innerWidth-r.x-we,_=Math.min(t.width+i,M);h=Math.min(u,Math.max(bt.width,_))}if(!l&&e.includes("left")){const M=r.x+t.width-we,_=Math.min(t.width-i,M);h=Math.min(u,Math.max(bt.width,_)),y=r.x-(h-t.width)}if(e.includes("bottom")){const M=window.innerHeight-r.y-we,_=Math.min(t.height+s,M);p=Math.min(d,Math.max(bt.initialHeight,_))}if(e.includes("top")){const M=r.y+t.height-we,_=Math.min(t.height-s,M);p=Math.min(d,Math.max(bt.initialHeight,_)),g=r.y-(p-t.height)}let b=we,w=window.innerWidth-we-h,S=we,T=window.innerHeight-we-p;return l?y=Math.min(-b,Math.max(y,-w)):y=Math.max(b,Math.min(y,w)),g=Math.max(S,Math.min(g,T)),{newSize:{width:h,height:p},newPosition:{x:y,y:g}}},RC=e=>{const t=nl(),r={"top-left":Math.hypot(e.x,e.y),"top-right":Math.hypot(t.maxWidth-e.x,e.y),"bottom-left":Math.hypot(e.x,t.maxHeight-e.y),"bottom-right":Math.hypot(t.maxWidth-e.x,t.maxHeight-e.y)};let i="top-left";for(const s in r)r[s]<r[i]&&(i=s);return i},zC=(e,t,r,i,s=100)=>{const l=r!==void 0?e-r:0,u=i!==void 0?t-i:0,d=window.innerWidth/2,h=window.innerHeight/2,p=l>s,y=l<-s,g=u>s,b=u<-s;if(p||y){const w=t>h;return p?w?"bottom-right":"top-right":w?"bottom-left":"top-left"}if(g||b){const w=e>d;return g?w?"bottom-right":"bottom-left":w?"top-right":"top-left"}return e>d?t>h?"bottom-right":"top-right":t>h?"bottom-left":"top-left"},Xc=({position:e})=>{const t=he(null),r=he(null),i=he(null),s=he(null);Te(()=>{const d=t.current;if(!d)return;const h=()=>{d.classList.remove("pointer-events-none");const g=ae.inspectState.value.kind==="focused",b=Ke.value.view!=="none";(g||b)&&OC(e,se.value.corner,se.value.dimensions.isFullWidth,se.value.dimensions.isFullHeight)?d.classList.remove("hidden","pointer-events-none","opacity-0"):d.classList.add("hidden","pointer-events-none","opacity-0")},p=se.subscribe(g=>{r.current!==null&&i.current!==null&&s.current!==null&&g.dimensions.width===r.current&&g.dimensions.height===i.current&&g.corner===s.current||(h(),r.current=g.dimensions.width,i.current=g.dimensions.height,s.current=g.corner)}),y=ae.inspectState.subscribe(()=>{h()});return()=>{p(),y(),r.current=null,i.current=null,s.current=null}},[]);const l=ft(d=>{d.preventDefault(),d.stopPropagation();const h=Tp.value;if(!h)return;const p=h.style,{dimensions:y}=se.value,g=d.clientX,b=d.clientY,w=y.width,S=y.height,T=y.position;se.value={...se.value,dimensions:{...y,isFullWidth:!1,isFullHeight:!1,width:w,height:S,position:T}};let M=null;const _=O=>{M||(p.transition="none",M=requestAnimationFrame(()=>{const{newSize:U,newPosition:D}=AC(e,{width:w,height:S},T,O.clientX-g,O.clientY-b);p.transform=`translate3d(${D.x}px, ${D.y}px, 0)`,p.width=`${U.width}px`,p.height=`${U.height}px`;const X=Math.floor(U.width-Pn/2),F=se.value.componentsTree.width,ee=Math.min(X,Math.max(Pn,F));se.value={...se.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:U.width,height:U.height,position:D},componentsTree:{...se.value.componentsTree,width:ee}},M=null}))},C=()=>{M&&(cancelAnimationFrame(M),M=null),document.removeEventListener("pointermove",_),document.removeEventListener("pointerup",C);const{dimensions:O,corner:U}=se.value,D=nl(),X=D.isFullWidth(O.width),F=D.isFullHeight(O.height),ee=X&&F;let ne=U;(ee||X||F)&&(ne=RC(O.position));const pe=Ys(ne,O.width,O.height),ue=()=>{h.removeEventListener("transitionend",ue)};h.addEventListener("transitionend",ue),p.transform=`translate3d(${pe.x}px, ${pe.y}px, 0)`,se.value={...se.value,corner:ne,dimensions:{isFullWidth:X,isFullHeight:F,width:O.width,height:O.height,position:pe},lastDimensions:{isFullWidth:X,isFullHeight:F,width:O.width,height:O.height,position:pe}},Kt(Rr,{corner:ne,dimensions:se.value.dimensions,lastDimensions:se.value.lastDimensions,componentsTree:se.value.componentsTree})};document.addEventListener("pointermove",_,{passive:!0}),document.addEventListener("pointerup",C)},[]),u=ft(d=>{d.preventDefault(),d.stopPropagation();const h=Tp.value;if(!h)return;const p=h.style,{dimensions:y,corner:g}=se.value,b=nl(),w=b.isFullWidth(y.width),S=b.isFullHeight(y.height),T=w&&S,M=(w||S)&&!T;let _=y.width,C=y.height;const O=MC(e,g,T,w,S);e==="left"||e==="right"?(_=w?y.width:b.maxWidth,M&&(_=w?bt.width:b.maxWidth)):(C=S?y.height:b.maxHeight,M&&(C=S?bt.initialHeight:b.maxHeight)),T&&(e==="left"||e==="right"?_=bt.width:C=bt.initialHeight);const U=Ys(O,_,C),D={isFullWidth:b.isFullWidth(_),isFullHeight:b.isFullHeight(C),width:_,height:C,position:U},X=Math.floor(_-bt.width/2),F=se.value.componentsTree.width,ee=Math.floor(_*.3),ne=w?Pn:(e==="left"||e==="right")&&!w?Math.min(X,Math.max(Pn,ee)):Math.min(X,Math.max(Pn,F));requestAnimationFrame(()=>{se.value={corner:O,dimensions:D,lastDimensions:y,componentsTree:{...se.value.componentsTree,width:ne}},p.transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",p.width=`${_}px`,p.height=`${C}px`,p.transform=`translate3d(${U.x}px, ${U.y}px, 0)`}),Kt(Rr,{corner:O,dimensions:D,lastDimensions:y,componentsTree:{...se.value.componentsTree,width:ne}})},[]);return v("div",{ref:t,onPointerDown:l,onDblClick:u,className:$("absolute z-50","flex items-center justify-center","group","transition-colors select-none","peer",{"resize-left peer/left":e==="left","resize-right peer/right z-10":e==="right","resize-top peer/top":e==="top","resize-bottom peer/bottom":e==="bottom"}),children:v("span",{className:"resize-line-wrapper",children:v("span",{className:"resize-line",children:v(lt,{name:"icon-ellipsis",size:18,className:$("text-neutral-400",(e==="left"||e==="right")&&"rotate-90")})})})})},mw={horizontal:{width:20,height:48},vertical:{width:48,height:20}},DC=()=>{const e=he(null),t=he(!1),r=he(0),i=he(0),s=he(!1),l=ft((b=!0)=>{if(!e.current)return;const{corner:w}=se.value;let S,T;if(fn.value){const ne=fn.value.orientation||"horizontal",pe=mw[ne];S=pe.width,T=pe.height}else if(t.current){const ne=se.value.lastDimensions;S=Pc(ne.width,0,!0),T=Pc(ne.height,0,!1),s.current&&(s.current=!1)}else S=r.current,T=i.current;let _=Ys(w,S,T);if(fn.value){const{corner:ne,orientation:pe="horizontal"}=fn.value,ue=mw[pe];switch(ne){case"top-left":_=pe==="horizontal"?{x:-1,y:we}:{x:we,y:-1};break;case"bottom-left":_=pe==="horizontal"?{x:-1,y:window.innerHeight-ue.height-we}:{x:we,y:window.innerHeight-ue.height+1};break;case"top-right":_=pe==="horizontal"?{x:window.innerWidth-ue.width+1,y:we}:{x:window.innerWidth-ue.width-we,y:-1};break;case"bottom-right":default:_=pe==="horizontal"?{x:window.innerWidth-ue.width+1,y:window.innerHeight-ue.height-we}:{x:window.innerWidth-ue.width-we,y:window.innerHeight-ue.height+1};break}}const C=S<bt.width||T<bt.initialHeight,O=b&&!C,U=e.current,D=U.style;let X=null;const F=()=>{_h(),U.removeEventListener("transitionend",F),X&&(cancelAnimationFrame(X),X=null)};U.addEventListener("transitionend",F),D.transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",X=requestAnimationFrame(()=>{D.width=`${S}px`,D.height=`${T}px`,D.transform=`translate3d(${_.x}px, ${_.y}px, 0)`,X=null});const ee={isFullWidth:S>=window.innerWidth-we*2,isFullHeight:T>=window.innerHeight-we*2,width:S,height:T,position:_};se.value={corner:w,dimensions:ee,lastDimensions:t?se.value.lastDimensions:S>r.current?ee:se.value.lastDimensions,componentsTree:se.value.componentsTree},O&&Kt(Rr,{corner:se.value.corner,dimensions:se.value.dimensions,lastDimensions:se.value.lastDimensions,componentsTree:se.value.componentsTree}),_h()},[]),u=ft(b=>{if(b.preventDefault(),!e.current||b.target.closest("button"))return;const w=e.current,S=w.style,{dimensions:T}=se.value,M=b.clientX,_=b.clientY,C=T.position.x,O=T.position.y;let U=C,D=O,X=null,F=!1,ee=M,ne=_;const pe=ie=>{X||(F=!0,ee=ie.clientX,ne=ie.clientY,X=requestAnimationFrame(()=>{const ze=ee-M,je=ne-_;U=Number(C)+ze,D=Number(O)+je,S.transition="none",S.transform=`translate3d(${U}px, ${D}px, 0)`;const Ce=U+T.width,E=D+T.height,R=Math.max(0,-U),j=Math.max(0,Ce-window.innerWidth),G=Math.max(0,-D),N=Math.max(0,E-window.innerHeight),q=Math.min(T.width,R+j),Z=Math.min(T.height,G+N),J=q*T.height+Z*T.width-q*Z,te=T.width*T.height;let oe=J>te*.35;if(!oe&&Le.options.value.showFPS){const re=U+T.width,be=re-100;oe=re<=0||be>=window.innerWidth||D+T.height<=0||D>=window.innerHeight}if(oe){const re=U+T.width/2,be=D+T.height/2,de=window.innerWidth/2,Me=window.innerHeight/2;let rt;re<de?rt=be<Me?"top-left":"bottom-left":rt=be<Me?"top-right":"bottom-right";let Ln;const Br=Math.max(R,j),Yr=Math.max(G,N);Ln=Br>Yr?"horizontal":"vertical",se.value={...se.value,corner:rt,lastDimensions:{...T,position:Ys(rt,T.width,T.height)}};const fi={corner:rt,orientation:Ln};fn.value=fi,Kt(iu,fi),Kt(Rr,se.value),l(!1),document.removeEventListener("pointermove",pe),document.removeEventListener("pointerup",ue),X&&(cancelAnimationFrame(X),X=null)}X=null}))},ue=()=>{if(!w)return;X&&(cancelAnimationFrame(X),X=null),document.removeEventListener("pointermove",pe),document.removeEventListener("pointerup",ue);const ie=Math.abs(ee-M),ze=Math.abs(ne-_),je=Math.sqrt(ie*ie+ze*ze);if(!F||je<60)return;const Ce=zC(ee,ne,M,_,ae.inspectState.value.kind==="focused"?80:40);if(Ce===se.value.corner){S.transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)";const j=se.value.dimensions.position;requestAnimationFrame(()=>{S.transform=`translate3d(${j.x}px, ${j.y}px, 0)`});return}const E=Ys(Ce,T.width,T.height);if(U===C&&D===O)return;const R=()=>{S.transition="none",_h(),w.removeEventListener("transitionend",R),X&&(cancelAnimationFrame(X),X=null)};w.addEventListener("transitionend",R),S.transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",requestAnimationFrame(()=>{S.transform=`translate3d(${E.x}px, ${E.y}px, 0)`}),se.value={corner:Ce,dimensions:{isFullWidth:T.isFullWidth,isFullHeight:T.isFullHeight,width:T.width,height:T.height,position:E},lastDimensions:se.value.lastDimensions,componentsTree:se.value.componentsTree},Kt(Rr,{corner:Ce,dimensions:se.value.dimensions,lastDimensions:se.value.lastDimensions,componentsTree:se.value.componentsTree})};document.addEventListener("pointermove",pe),document.addEventListener("pointerup",ue)},[]),d=ft(b=>{if(b.preventDefault(),!e.current||!fn.value)return;const{corner:w,orientation:S="horizontal"}=fn.value,T=b.clientX,M=b.clientY;let _=null,C=!1;const O=50,U=X=>{if(C||_)return;const F=X.clientX-T,ee=X.clientY-M;let ne=!1;if(S==="horizontal"?(w.endsWith("left")&&F>O||w.endsWith("right")&&F<-O)&&(ne=!0):(w.startsWith("top")&&ee>O||w.startsWith("bottom")&&ee<-O)&&(ne=!0),ne){if(C=!0,fn.value=null,Kt(iu,null),r.current===0&&e.current)requestAnimationFrame(()=>{if(e.current){e.current.style.width="min-content";const pe=e.current.offsetWidth;r.current=pe||300;const ue=se.value.lastDimensions,ie=Pc(ue.width,0,!0),ze=Pc(ue.height,0,!1);let je=X.clientX-ie/2,Ce=X.clientY-ze/2;je=Math.max(we,Math.min(je,window.innerWidth-ie-we)),Ce=Math.max(we,Math.min(Ce,window.innerHeight-ze-we)),se.value={...se.value,dimensions:{...se.value.dimensions,position:{x:je,y:Ce}}},l(!0);const E=Ur(Ki);Ke.value=E||{view:"none"},setTimeout(()=>{if(e.current){const R=new PointerEvent("pointerdown",{clientX:X.clientX,clientY:X.clientY,pointerId:X.pointerId,bubbles:!0});e.current.dispatchEvent(R)}},100)}});else{l(!0);const pe=Ur(Ki);Ke.value=pe||{view:"none"}}document.removeEventListener("pointermove",U),document.removeEventListener("pointerup",D)}},D=()=>{document.removeEventListener("pointermove",U),document.removeEventListener("pointerup",D)};document.addEventListener("pointermove",U),document.addEventListener("pointerup",D)},[]);Te(()=>{if(!e.current)return;$b(Ki),fn.value?(i.current=36,r.current=0):(e.current.style.width="min-content",i.current=36,r.current=e.current.offsetWidth),e.current.style.maxWidth=`calc(100vw - ${we*2}px)`,e.current.style.maxHeight=`calc(100vh - ${we*2}px)`,l(),ae.inspectState.value.kind!=="focused"&&!fn.value&&!s.current&&(se.value={...se.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:r.current,height:i.current,position:se.value.dimensions.position}}),Tp.value=e.current;const b=se.subscribe(M=>{if(!e.current)return;const{x:_,y:C}=M.dimensions.position,{width:O,height:U}=M.dimensions,D=e.current;requestAnimationFrame(()=>{D.style.transform=`translate3d(${_}px, ${C}px, 0)`,D.style.width=`${O}px`,D.style.height=`${U}px`})}),w=Ke.subscribe(M=>{t.current=M.view!=="none",l(),fn.value||(M.view!=="none"?Kt(Ki,M):$b(Ki))}),S=ae.inspectState.subscribe(M=>{t.current=M.kind==="focused",l()}),T=()=>{l(!0)};return window.addEventListener("resize",T,{passive:!0}),()=>{window.removeEventListener("resize",T),w(),S(),b(),Kt(Rr,{...ar,corner:se.value.corner})}},[]);const[h,p]=Ee(!1);Te(()=>{p(!0)},[]);const y=fn.value;let g="";if(y){const{orientation:b="horizontal",corner:w}=y;b==="horizontal"?g=w!=null&&w.endsWith("right")?"rotate-180":"":g=w!=null&&w.startsWith("bottom")?"-rotate-90":"rotate-90"}return v(De,{children:[v(EC,{}),v(Im.Provider,{value:e.current,children:v("div",{id:"react-scan-toolbar",dir:"ltr",ref:e,onPointerDown:y?d:u,className:$("fixed inset-0",y?(()=>{const{orientation:b="horizontal",corner:w}=y;return b==="horizontal"?w!=null&&w.endsWith("right")?"rounded-tl-lg rounded-bl-lg shadow-lg":"rounded-tr-lg rounded-br-lg shadow-lg":w!=null&&w.startsWith("bottom")?"rounded-tl-lg rounded-tr-lg shadow-lg":"rounded-bl-lg rounded-br-lg shadow-lg"})():"rounded-lg shadow-lg","flex flex-col","font-mono text-[13px]","user-select-none","opacity-0",y?"cursor-pointer":"cursor-move","z-[124124124124]","animate-fade-in animation-duration-300 animation-delay-300","will-change-transform","[touch-action:none]"),children:y?v("button",{type:"button",onClick:()=>{fn.value=null,Kt(iu,null),r.current===0&&e.current&&requestAnimationFrame(()=>{if(e.current){e.current.style.width="min-content";const w=e.current.offsetWidth;r.current=w||300,l(!0)}});const b=Ur(Ki);Ke.value=b||{view:"none"}},className:"flex items-center justify-center w-full h-full text-white",title:"Expand toolbar",children:v(lt,{name:"icon-chevron-right",size:16,className:$("transition-transform",g)})}):v(De,{children:[v(Xc,{position:"top"}),v(Xc,{position:"bottom"}),v(Xc,{position:"left"}),v(Xc,{position:"right"}),v(kC,{})]})})})]})},Im=H1(null),jC=()=>v("svg",{xmlns:"http://www.w3.org/2000/svg",style:"display: none;",children:[v("title",{children:"React Scan Icons"}),v("symbol",{id:"icon-inspect",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),v("path",{d:"M5 3a2 2 0 0 0-2 2"}),v("path",{d:"M19 3a2 2 0 0 1 2 2"}),v("path",{d:"M5 21a2 2 0 0 1-2-2"}),v("path",{d:"M9 3h1"}),v("path",{d:"M9 21h2"}),v("path",{d:"M14 3h1"}),v("path",{d:"M3 9v1"}),v("path",{d:"M21 9v2"}),v("path",{d:"M3 14v1"})]}),v("symbol",{id:"icon-focus",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),v("path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"})]}),v("symbol",{id:"icon-next",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:v("path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z"})}),v("symbol",{id:"icon-previous",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:v("path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"})}),v("symbol",{id:"icon-close",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),v("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),v("symbol",{id:"icon-replay",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}),v("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),v("path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}),v("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),v("circle",{cx:"12",cy:"12",r:"1"}),v("path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"})]}),v("symbol",{id:"icon-ellipsis",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("circle",{cx:"12",cy:"12",r:"1"}),v("circle",{cx:"19",cy:"12",r:"1"}),v("circle",{cx:"5",cy:"12",r:"1"})]}),v("symbol",{id:"icon-copy",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),v("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]}),v("symbol",{id:"icon-check",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:v("path",{d:"M20 6 9 17l-5-5"})}),v("symbol",{id:"icon-chevron-right",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:v("path",{d:"m9 18 6-6-6-6"})}),v("symbol",{id:"icon-settings",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),v("circle",{cx:"12",cy:"12",r:"3"})]}),v("symbol",{id:"icon-flame",viewBox:"0 0 24 24",children:v("path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"})}),v("symbol",{id:"icon-function",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}),v("path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}),v("path",{d:"M9 11.2h5.7"})]}),v("symbol",{id:"icon-triangle-alert",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}),v("path",{d:"M12 9v4"}),v("path",{d:"M12 17h.01"})]}),v("symbol",{id:"icon-gallery-horizontal-end",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"M2 7v10"}),v("path",{d:"M6 5v14"}),v("rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"})]}),v("symbol",{id:"icon-search",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("circle",{cx:"11",cy:"11",r:"8"}),v("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),v("symbol",{id:"icon-lock",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),v("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),v("symbol",{id:"icon-lock-open",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),v("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"})]}),v("symbol",{id:"icon-sanil",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[v("path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}),v("circle",{cx:"10",cy:"13",r:"8"}),v("path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}),v("path",{d:"M18 3 19.1 5.2"})]})]}),UC=class extends jn{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null})}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){var e;return this.state.hasError?v("div",{className:"fixed bottom-4 right-4 z-[124124124124]",children:v("div",{className:"p-3 bg-black rounded-lg shadow-lg w-80",children:[v("div",{className:"flex items-center gap-2 mb-2 text-red-400 text-sm font-medium",children:[v(lt,{name:"icon-flame",className:"text-red-500",size:14}),"React Scan ran into a problem"]}),v("div",{className:"p-2 bg-black rounded font-mono text-xs text-red-300 mb-3 break-words",children:((e=this.state.error)==null?void 0:e.message)||JSON.stringify(this.state.error)}),v("button",{type:"button",onClick:this.handleReset,className:"px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-medium transition-colors flex items-center justify-center gap-1.5",children:"Restart"})]})}):this.props.children}},LC=e=>{const t=document.createElement("div");t.id="react-scan-toolbar-root",window.__REACT_SCAN_TOOLBAR_CONTAINER__=t,e.appendChild(t),Is(v(UC,{children:v(De,{children:[v(jC,{}),v(DC,{})]})}),t);const r=t.remove.bind(t);return t.remove=()=>{window.__REACT_SCAN_TOOLBAR_CONTAINER__=void 0,t.hasChildNodes()&&(Is(null,t),Is(null,t)),r()},t},$C={version:"0.4.3"},Pa=null,Ms=null,HC=()=>{if(Pa&&Ms)return{rootContainer:Pa,shadowRoot:Ms};Pa=document.createElement("div"),Pa.id="react-scan-root",Ms=Pa.attachShadow({mode:"open"});const e=document.createElement("style");return e.textContent=n3,Ms.appendChild(e),document.documentElement.appendChild(Pa),{rootContainer:Pa,shadowRoot:Ms}},ae={wasDetailsOpen:wt(!0),isInIframe:wt(cr&&window.self!==window.top),inspectState:wt({kind:"uninitialized"}),monitor:wt(null),fiberRoots:new Set,reportData:new Map,legacyReportData:new Map,lastReportTime:wt(0),interactionListeningForRenders:null,changesListeners:new Map},Le={instrumentation:null,componentAllowList:null,options:wt({enabled:!0,log:!1,showToolbar:!0,animationSpeed:"fast",dangerouslyForceRunInProduction:!1,showFPS:!0,showNotificationCount:!0,allowInIframe:!1}),runInAllEnvironments:!1,onRender:null,scheduledOutlines:new Map,activeOutlines:new Map,Store:ae,version:$C.version};cr&&window.__REACT_SCAN_EXTENSION__&&(window.__REACT_SCAN_VERSION__=Le.version);function IC(e){return e in Le.options.value}var Dx=e=>{const t=[],r={};for(const i in e){if(!IC(i))continue;const s=e[i];switch(i){case"enabled":case"log":case"showToolbar":case"showNotificationCount":case"dangerouslyForceRunInProduction":case"showFPS":case"allowInIframe":typeof s!="boolean"?t.push(`- ${i} must be a boolean. Got "${s}"`):r[i]=s;break;case"animationSpeed":["slow","fast","off"].includes(s)?r[i]=s:t.push(`- Invalid animation speed "${s}". Using default "fast"`);break;case"onCommitStart":typeof s!="function"?t.push(`- ${i} must be a function. Got "${s}"`):r.onCommitStart=s;break;case"onCommitFinish":typeof s!="function"?t.push(`- ${i} must be a function. Got "${s}"`):r.onCommitFinish=s;break;case"onRender":typeof s!="function"?t.push(`- ${i} must be a function. Got "${s}"`):r.onRender=s;break;case"onPaintStart":case"onPaintFinish":typeof s!="function"?t.push(`- ${i} must be a function. Got "${s}"`):r[i]=s;break;default:t.push(`- Unknown option "${i}"`)}}return t.length>0&&console.warn(`[React Scan] Invalid options:
${t.join(`
`)}`),r},qC=e=>{var t;try{const r=Dx(e);if(Object.keys(r).length===0)return;const i="showToolbar"in r&&r.showToolbar!==void 0,s={...Le.options.value,...r},{instrumentation:l}=Le;l&&"enabled"in r&&(l.isPaused.value=r.enabled===!1),Le.options.value=s;try{const u=(t=Ur("react-scan-options"))==null?void 0:t.enabled;typeof u=="boolean"&&(s.enabled=u)}catch(u){Le.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",u)}return Kt("react-scan-options",s),i&&jx(!!s.showToolbar),s}catch(r){Le.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",r)}},BC=()=>Le.options,Fc=null,gw,Xu=()=>{if(Fc!==null)return Fc;gw??(gw=ei());for(const e of gw.renderers.values())ck(e)==="production"&&(Fc=!0);return Fc},YC=()=>{try{if(!cr||!Le.runInAllEnvironments&&Xu()&&!Le.options.value.dangerouslyForceRunInProduction)return;const e=Ur("react-scan-options");if(e){const r=Dx(e);Object.keys(r).length>0&&(Le.options.value={...Le.options.value,...r})}const t=BC();t3(()=>{jx(!!t.value.showToolbar)}),!ae.monitor.value&&cr&&setTimeout(()=>{uk()||console.error("[React Scan] Failed to load. Must import React Scan before React runs.")},5e3)}catch(e){Le.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}},jx=e=>{var l;(l=window.reactScanCleanupListeners)==null||l.call(window);const t=A3(),r=PC();window.reactScanCleanupListeners=()=>{t(),r==null||r()};const i=window.__REACT_SCAN_TOOLBAR_CONTAINER__;if(!e){i==null||i.remove();return}i==null||i.remove();const{shadowRoot:s}=HC();LC(s)},PC=()=>{try{const e=document.documentElement;return eC(e)}catch(e){Le.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",e)}},XC=(e={})=>{qC(e),!(ae.isInIframe.value&&!Le.options.value.allowInIframe&&!Le.runInAllEnvironments)&&(e.enabled===!1&&e.showToolbar!==!0||YC())},FC=new WeakSet,Hh={exports:{}},Ns={},Ih={exports:{}},qh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vw;function GC(){return vw||(vw=1,function(e){function t(E,R){var j=E.length;E.push(R);e:for(;0<j;){var G=j-1>>>1,N=E[G];if(0<s(N,R))E[G]=R,E[j]=N,j=G;else break e}}function r(E){return E.length===0?null:E[0]}function i(E){if(E.length===0)return null;var R=E[0],j=E.pop();if(j!==R){E[0]=j;e:for(var G=0,N=E.length,q=N>>>1;G<q;){var Z=2*(G+1)-1,J=E[Z],te=Z+1,oe=E[te];if(0>s(J,j))te<N&&0>s(oe,J)?(E[G]=oe,E[te]=j,G=te):(E[G]=J,E[Z]=j,G=Z);else if(te<N&&0>s(oe,j))E[G]=oe,E[te]=j,G=te;else break e}}return R}function s(E,R){var j=E.sortIndex-R.sortIndex;return j!==0?j:E.id-R.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();e.unstable_now=function(){return u.now()-d}}var h=[],p=[],y=1,g=null,b=3,w=!1,S=!1,T=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function U(E){for(var R=r(p);R!==null;){if(R.callback===null)i(p);else if(R.startTime<=E)i(p),R.sortIndex=R.expirationTime,t(h,R);else break;R=r(p)}}function D(E){if(T=!1,U(E),!S)if(r(h)!==null)S=!0,X||(X=!0,ie());else{var R=r(p);R!==null&&Ce(D,R.startTime-E)}}var X=!1,F=-1,ee=5,ne=-1;function pe(){return M?!0:!(e.unstable_now()-ne<ee)}function ue(){if(M=!1,X){var E=e.unstable_now();ne=E;var R=!0;try{e:{S=!1,T&&(T=!1,C(F),F=-1),w=!0;var j=b;try{t:{for(U(E),g=r(h);g!==null&&!(g.expirationTime>E&&pe());){var G=g.callback;if(typeof G=="function"){g.callback=null,b=g.priorityLevel;var N=G(g.expirationTime<=E);if(E=e.unstable_now(),typeof N=="function"){g.callback=N,U(E),R=!0;break t}g===r(h)&&i(h),U(E)}else i(h);g=r(h)}if(g!==null)R=!0;else{var q=r(p);q!==null&&Ce(D,q.startTime-E),R=!1}}break e}finally{g=null,b=j,w=!1}R=void 0}}finally{R?ie():X=!1}}}var ie;if(typeof O=="function")ie=function(){O(ue)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,je=ze.port2;ze.port1.onmessage=ue,ie=function(){je.postMessage(null)}}else ie=function(){_(ue,0)};function Ce(E,R){F=_(function(){E(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return b},e.unstable_next=function(E){switch(b){case 1:case 2:case 3:var R=3;break;default:R=b}var j=b;b=R;try{return E()}finally{b=j}},e.unstable_requestPaint=function(){M=!0},e.unstable_runWithPriority=function(E,R){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var j=b;b=E;try{return R()}finally{b=j}},e.unstable_scheduleCallback=function(E,R,j){var G=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?G+j:G):j=G,E){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=j+N,E={id:y++,callback:R,priorityLevel:E,startTime:j,expirationTime:N,sortIndex:-1},j>G?(E.sortIndex=j,t(p,E),r(h)===null&&E===r(p)&&(T?(C(F),F=-1):T=!0,Ce(D,j-G))):(E.sortIndex=N,t(h,E),S||w||(S=!0,X||(X=!0,ie()))),E},e.unstable_shouldYield=pe,e.unstable_wrapCallback=function(E){var R=b;return function(){var j=b;b=R;try{return E.apply(this,arguments)}finally{b=j}}}}(qh)),qh}var yw;function VC(){return yw||(yw=1,Ih.exports=GC()),Ih.exports}var Bh={exports:{}},qt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bw;function QC(){if(bw)return qt;bw=1;var e=fl();function t(h){var p="https://react.dev/errors/"+h;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+h+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var i={d:{f:r,r:function(){throw Error(t(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(h,p,y){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:g==null?null:""+g,children:h,containerInfo:p,implementation:y}}var u=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(h,p){if(h==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return qt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,qt.createPortal=function(h,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return l(h,p,null,y)},qt.flushSync=function(h){var p=u.T,y=i.p;try{if(u.T=null,i.p=2,h)return h()}finally{u.T=p,i.p=y,i.d.f()}},qt.preconnect=function(h,p){typeof h=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,i.d.C(h,p))},qt.prefetchDNS=function(h){typeof h=="string"&&i.d.D(h)},qt.preinit=function(h,p){if(typeof h=="string"&&p&&typeof p.as=="string"){var y=p.as,g=d(y,p.crossOrigin),b=typeof p.integrity=="string"?p.integrity:void 0,w=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?i.d.S(h,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:b,fetchPriority:w}):y==="script"&&i.d.X(h,{crossOrigin:g,integrity:b,fetchPriority:w,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},qt.preinitModule=function(h,p){if(typeof h=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=d(p.as,p.crossOrigin);i.d.M(h,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&i.d.M(h)},qt.preload=function(h,p){if(typeof h=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,g=d(y,p.crossOrigin);i.d.L(h,y,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},qt.preloadModule=function(h,p){if(typeof h=="string")if(p){var y=d(p.as,p.crossOrigin);i.d.m(h,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else i.d.m(h)},qt.requestFormReset=function(h){i.d.r(h)},qt.unstable_batchedUpdates=function(h,p){return h(p)},qt.useFormState=function(h,p,y){return u.H.useFormState(h,p,y)},qt.useFormStatus=function(){return u.H.useHostTransitionStatus()},qt.version="19.1.0",qt}var ww;function WC(){if(ww)return Bh.exports;ww=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Bh.exports=QC(),Bh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xw;function ZC(){if(xw)return Ns;xw=1;var e=VC(),t=fl(),r=WC();function i(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)a+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var a=n,o=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(o=a.return),n=a.return;while(n)}return a.tag===3?o:null}function u(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function d(n){if(l(n)!==n)throw Error(i(188))}function h(n){var a=n.alternate;if(!a){if(a=l(n),a===null)throw Error(i(188));return a!==n?null:n}for(var o=n,c=a;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),n;if(m===c)return d(f),a;m=m.sibling}throw Error(i(188))}if(o.return!==c.return)o=f,c=m;else{for(var x=!1,k=f.child;k;){if(k===o){x=!0,o=f,c=m;break}if(k===c){x=!0,c=f,o=m;break}k=k.sibling}if(!x){for(k=m.child;k;){if(k===o){x=!0,o=m,c=f;break}if(k===c){x=!0,c=m,o=f;break}k=k.sibling}if(!x)throw Error(i(189))}}if(o.alternate!==c)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?n:a}function p(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=p(n),a!==null)return a;n=n.sibling}return null}var y=Object.assign,g=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),C=Symbol.for("react.consumer"),O=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),ne=Symbol.for("react.activity"),pe=Symbol.for("react.memo_cache_sentinel"),ue=Symbol.iterator;function ie(n){return n===null||typeof n!="object"?null:(n=ue&&n[ue]||n["@@iterator"],typeof n=="function"?n:null)}var ze=Symbol.for("react.client.reference");function je(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===ze?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case S:return"Fragment";case M:return"Profiler";case T:return"StrictMode";case D:return"Suspense";case X:return"SuspenseList";case ne:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case w:return"Portal";case O:return(n.displayName||"Context")+".Provider";case C:return(n._context.displayName||"Context")+".Consumer";case U:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case F:return a=n.displayName||null,a!==null?a:je(n.type)||"Memo";case ee:a=n._payload,n=n._init;try{return je(n(a))}catch{}}return null}var Ce=Array.isArray,E=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},G=[],N=-1;function q(n){return{current:n}}function Z(n){0>N||(n.current=G[N],G[N]=null,N--)}function J(n,a){N++,G[N]=n.current,n.current=a}var te=q(null),oe=q(null),re=q(null),be=q(null);function de(n,a){switch(J(re,a),J(oe,n),J(te,null),a.nodeType){case 9:case 11:n=(n=a.documentElement)&&(n=n.namespaceURI)?Uy(n):0;break;default:if(n=a.tagName,a=a.namespaceURI)a=Uy(a),n=Ly(a,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Z(te),J(te,n)}function Me(){Z(te),Z(oe),Z(re)}function rt(n){n.memoizedState!==null&&J(be,n);var a=te.current,o=Ly(a,n.type);a!==o&&(J(oe,n),J(te,o))}function Ln(n){oe.current===n&&(Z(te),Z(oe)),be.current===n&&(Z(be),bs._currentValue=j)}var Br=Object.prototype.hasOwnProperty,Yr=e.unstable_scheduleCallback,fi=e.unstable_cancelCallback,u_=e.unstable_shouldYield,d_=e.unstable_requestPaint,Kn=e.unstable_now,f_=e.unstable_getCurrentPriorityLevel,gg=e.unstable_ImmediatePriority,vg=e.unstable_UserBlockingPriority,_l=e.unstable_NormalPriority,h_=e.unstable_LowPriority,yg=e.unstable_IdlePriority,p_=e.log,m_=e.unstable_setDisableYieldValue,Co=null,nn=null;function Pr(n){if(typeof p_=="function"&&m_(n),nn&&typeof nn.setStrictMode=="function")try{nn.setStrictMode(Co,n)}catch{}}var rn=Math.clz32?Math.clz32:y_,g_=Math.log,v_=Math.LN2;function y_(n){return n>>>=0,n===0?32:31-(g_(n)/v_|0)|0}var Sl=256,Tl=4194304;function Ta(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function kl(n,a,o){var c=n.pendingLanes;if(c===0)return 0;var f=0,m=n.suspendedLanes,x=n.pingedLanes;n=n.warmLanes;var k=c&134217727;return k!==0?(c=k&~m,c!==0?f=Ta(c):(x&=k,x!==0?f=Ta(x):o||(o=k&~n,o!==0&&(f=Ta(o))))):(k=c&~m,k!==0?f=Ta(k):x!==0?f=Ta(x):o||(o=c&~n,o!==0&&(f=Ta(o)))),f===0?0:a!==0&&a!==f&&(a&m)===0&&(m=f&-f,o=a&-a,m>=o||m===32&&(o&4194048)!==0)?a:f}function Mo(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function b_(n,a){switch(n){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bg(){var n=Sl;return Sl<<=1,(Sl&4194048)===0&&(Sl=256),n}function wg(){var n=Tl;return Tl<<=1,(Tl&62914560)===0&&(Tl=4194304),n}function rd(n){for(var a=[],o=0;31>o;o++)a.push(n);return a}function No(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function w_(n,a,o,c,f,m){var x=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var k=n.entanglements,A=n.expirationTimes,B=n.hiddenUpdates;for(o=x&~o;0<o;){var Q=31-rn(o),K=1<<Q;k[Q]=0,A[Q]=-1;var Y=B[Q];if(Y!==null)for(B[Q]=null,Q=0;Q<Y.length;Q++){var P=Y[Q];P!==null&&(P.lane&=-536870913)}o&=~K}c!==0&&xg(n,c,0),m!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=m&~(x&~a))}function xg(n,a,o){n.pendingLanes|=a,n.suspendedLanes&=~a;var c=31-rn(a);n.entangledLanes|=a,n.entanglements[c]=n.entanglements[c]|1073741824|o&4194090}function _g(n,a){var o=n.entangledLanes|=a;for(n=n.entanglements;o;){var c=31-rn(o),f=1<<c;f&a|n[c]&a&&(n[c]|=a),o&=~f}}function ad(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function id(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Sg(){var n=R.p;return n!==0?n:(n=window.event,n===void 0?32:nb(n.type))}function x_(n,a){var o=R.p;try{return R.p=n,a()}finally{R.p=o}}var Xr=Math.random().toString(36).slice(2),$t="__reactFiber$"+Xr,Gt="__reactProps$"+Xr,hi="__reactContainer$"+Xr,od="__reactEvents$"+Xr,__="__reactListeners$"+Xr,S_="__reactHandles$"+Xr,Tg="__reactResources$"+Xr,Oo="__reactMarker$"+Xr;function sd(n){delete n[$t],delete n[Gt],delete n[od],delete n[__],delete n[S_]}function pi(n){var a=n[$t];if(a)return a;for(var o=n.parentNode;o;){if(a=o[hi]||o[$t]){if(o=a.alternate,a.child!==null||o!==null&&o.child!==null)for(n=qy(n);n!==null;){if(o=n[$t])return o;n=qy(n)}return a}n=o,o=n.parentNode}return null}function mi(n){if(n=n[$t]||n[hi]){var a=n.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return n}return null}function Ao(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(i(33))}function gi(n){var a=n[Tg];return a||(a=n[Tg]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function kt(n){n[Oo]=!0}var kg=new Set,Eg={};function ka(n,a){vi(n,a),vi(n+"Capture",a)}function vi(n,a){for(Eg[n]=a,n=0;n<a.length;n++)kg.add(a[n])}var T_=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Cg={},Mg={};function k_(n){return Br.call(Mg,n)?!0:Br.call(Cg,n)?!1:T_.test(n)?Mg[n]=!0:(Cg[n]=!0,!1)}function El(n,a,o){if(k_(a))if(o===null)n.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var c=a.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+o)}}function Cl(n,a,o){if(o===null)n.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+o)}}function hr(n,a,o,c){if(c===null)n.removeAttribute(o);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(a,o,""+c)}}var ld,Ng;function yi(n){if(ld===void 0)try{throw Error()}catch(o){var a=o.stack.trim().match(/\n( *(at )?)/);ld=a&&a[1]||"",Ng=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ld+n+Ng}var cd=!1;function ud(n,a){if(!n||cd)return"";cd=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(a){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(P){var Y=P}Reflect.construct(n,[],K)}else{try{K.call()}catch(P){Y=P}n.call(K.prototype)}}else{try{throw Error()}catch(P){Y=P}(K=n())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(P){if(P&&Y&&typeof P.stack=="string")return[P.stack,Y.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),x=m[0],k=m[1];if(x&&k){var A=x.split(`
`),B=k.split(`
`);for(f=c=0;c<A.length&&!A[c].includes("DetermineComponentFrameRoot");)c++;for(;f<B.length&&!B[f].includes("DetermineComponentFrameRoot");)f++;if(c===A.length||f===B.length)for(c=A.length-1,f=B.length-1;1<=c&&0<=f&&A[c]!==B[f];)f--;for(;1<=c&&0<=f;c--,f--)if(A[c]!==B[f]){if(c!==1||f!==1)do if(c--,f--,0>f||A[c]!==B[f]){var Q=`
`+A[c].replace(" at new "," at ");return n.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",n.displayName)),Q}while(1<=c&&0<=f);break}}}finally{cd=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?yi(o):""}function E_(n){switch(n.tag){case 26:case 27:case 5:return yi(n.type);case 16:return yi("Lazy");case 13:return yi("Suspense");case 19:return yi("SuspenseList");case 0:case 15:return ud(n.type,!1);case 11:return ud(n.type.render,!1);case 1:return ud(n.type,!0);case 31:return yi("Activity");default:return""}}function Og(n){try{var a="";do a+=E_(n),n=n.return;while(n);return a}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function xn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ag(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function C_(n){var a=Ag(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,a),c=""+n[a];if(!n.hasOwnProperty(a)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return f.call(this)},set:function(x){c=""+x,m.call(this,x)}}),Object.defineProperty(n,a,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(x){c=""+x},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function Ml(n){n._valueTracker||(n._valueTracker=C_(n))}function Rg(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var o=a.getValue(),c="";return n&&(c=Ag(n)?n.checked?"true":"false":n.value),n=c,n!==o?(a.setValue(n),!0):!1}function Nl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var M_=/[\n"\\]/g;function _n(n){return n.replace(M_,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function dd(n,a,o,c,f,m,x,k){n.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?n.type=x:n.removeAttribute("type"),a!=null?x==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+xn(a)):n.value!==""+xn(a)&&(n.value=""+xn(a)):x!=="submit"&&x!=="reset"||n.removeAttribute("value"),a!=null?fd(n,x,xn(a)):o!=null?fd(n,x,xn(o)):c!=null&&n.removeAttribute("value"),f==null&&m!=null&&(n.defaultChecked=!!m),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),k!=null&&typeof k!="function"&&typeof k!="symbol"&&typeof k!="boolean"?n.name=""+xn(k):n.removeAttribute("name")}function zg(n,a,o,c,f,m,x,k){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),a!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||a!=null))return;o=o!=null?""+xn(o):"",a=a!=null?""+xn(a):o,k||a===n.value||(n.value=a),n.defaultValue=a}c=c??f,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=k?n.checked:!!c,n.defaultChecked=!!c,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(n.name=x)}function fd(n,a,o){a==="number"&&Nl(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function bi(n,a,o,c){if(n=n.options,a){a={};for(var f=0;f<o.length;f++)a["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=a.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&c&&(n[o].defaultSelected=!0)}else{for(o=""+xn(o),a=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}a!==null||n[f].disabled||(a=n[f])}a!==null&&(a.selected=!0)}}function Dg(n,a,o){if(a!=null&&(a=""+xn(a),a!==n.value&&(n.value=a),o==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=o!=null?""+xn(o):""}function jg(n,a,o,c){if(a==null){if(c!=null){if(o!=null)throw Error(i(92));if(Ce(c)){if(1<c.length)throw Error(i(93));c=c[0]}o=c}o==null&&(o=""),a=o}o=xn(a),n.defaultValue=o,c=n.textContent,c===o&&c!==""&&c!==null&&(n.value=c)}function wi(n,a){if(a){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=a;return}}n.textContent=a}var N_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ug(n,a,o){var c=a.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?c?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":c?n.setProperty(a,o):typeof o!="number"||o===0||N_.has(a)?a==="float"?n.cssFloat=o:n[a]=(""+o).trim():n[a]=o+"px"}function Lg(n,a,o){if(a!=null&&typeof a!="object")throw Error(i(62));if(n=n.style,o!=null){for(var c in o)!o.hasOwnProperty(c)||a!=null&&a.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var f in a)c=a[f],a.hasOwnProperty(f)&&o[f]!==c&&Ug(n,f,c)}else for(var m in a)a.hasOwnProperty(m)&&Ug(n,m,a[m])}function hd(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var O_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),A_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ol(n){return A_.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var pd=null;function md(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var xi=null,_i=null;function $g(n){var a=mi(n);if(a&&(n=a.stateNode)){var o=n[Gt]||null;e:switch(n=a.stateNode,a.type){case"input":if(dd(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),a=o.name,o.type==="radio"&&a!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+_n(""+a)+'"][type="radio"]'),a=0;a<o.length;a++){var c=o[a];if(c!==n&&c.form===n.form){var f=c[Gt]||null;if(!f)throw Error(i(90));dd(c,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(a=0;a<o.length;a++)c=o[a],c.form===n.form&&Rg(c)}break e;case"textarea":Dg(n,o.value,o.defaultValue);break e;case"select":a=o.value,a!=null&&bi(n,!!o.multiple,a,!1)}}}var gd=!1;function Hg(n,a,o){if(gd)return n(a,o);gd=!0;try{var c=n(a);return c}finally{if(gd=!1,(xi!==null||_i!==null)&&(mc(),xi&&(a=xi,n=_i,_i=xi=null,$g(a),n)))for(a=0;a<n.length;a++)$g(n[a])}}function Ro(n,a){var o=n.stateNode;if(o===null)return null;var c=o[Gt]||null;if(c===null)return null;o=c[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(i(231,a,typeof o));return o}var pr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vd=!1;if(pr)try{var zo={};Object.defineProperty(zo,"passive",{get:function(){vd=!0}}),window.addEventListener("test",zo,zo),window.removeEventListener("test",zo,zo)}catch{vd=!1}var Fr=null,yd=null,Al=null;function Ig(){if(Al)return Al;var n,a=yd,o=a.length,c,f="value"in Fr?Fr.value:Fr.textContent,m=f.length;for(n=0;n<o&&a[n]===f[n];n++);var x=o-n;for(c=1;c<=x&&a[o-c]===f[m-c];c++);return Al=f.slice(n,1<c?1-c:void 0)}function Rl(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function zl(){return!0}function qg(){return!1}function Vt(n){function a(o,c,f,m,x){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=x,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(o=n[k],this[k]=o?o(m):m[k]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?zl:qg,this.isPropagationStopped=qg,this}return y(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=zl)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=zl)},persist:function(){},isPersistent:zl}),a}var Ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dl=Vt(Ea),Do=y({},Ea,{view:0,detail:0}),R_=Vt(Do),bd,wd,jo,jl=y({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_d,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==jo&&(jo&&n.type==="mousemove"?(bd=n.screenX-jo.screenX,wd=n.screenY-jo.screenY):wd=bd=0,jo=n),bd)},movementY:function(n){return"movementY"in n?n.movementY:wd}}),Bg=Vt(jl),z_=y({},jl,{dataTransfer:0}),D_=Vt(z_),j_=y({},Do,{relatedTarget:0}),xd=Vt(j_),U_=y({},Ea,{animationName:0,elapsedTime:0,pseudoElement:0}),L_=Vt(U_),$_=y({},Ea,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),H_=Vt($_),I_=y({},Ea,{data:0}),Yg=Vt(I_),q_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},B_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function P_(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=Y_[n])?!!a[n]:!1}function _d(){return P_}var X_=y({},Do,{key:function(n){if(n.key){var a=q_[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=Rl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?B_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_d,charCode:function(n){return n.type==="keypress"?Rl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Rl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),F_=Vt(X_),G_=y({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pg=Vt(G_),V_=y({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_d}),Q_=Vt(V_),W_=y({},Ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),Z_=Vt(W_),K_=y({},jl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),J_=Vt(K_),eS=y({},Ea,{newState:0,oldState:0}),tS=Vt(eS),nS=[9,13,27,32],Sd=pr&&"CompositionEvent"in window,Uo=null;pr&&"documentMode"in document&&(Uo=document.documentMode);var rS=pr&&"TextEvent"in window&&!Uo,Xg=pr&&(!Sd||Uo&&8<Uo&&11>=Uo),Fg=" ",Gg=!1;function Vg(n,a){switch(n){case"keyup":return nS.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Si=!1;function aS(n,a){switch(n){case"compositionend":return Qg(a);case"keypress":return a.which!==32?null:(Gg=!0,Fg);case"textInput":return n=a.data,n===Fg&&Gg?null:n;default:return null}}function iS(n,a){if(Si)return n==="compositionend"||!Sd&&Vg(n,a)?(n=Ig(),Al=yd=Fr=null,Si=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Xg&&a.locale!=="ko"?null:a.data;default:return null}}var oS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wg(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!oS[n.type]:a==="textarea"}function Zg(n,a,o,c){xi?_i?_i.push(c):_i=[c]:xi=c,a=xc(a,"onChange"),0<a.length&&(o=new Dl("onChange","change",null,o,c),n.push({event:o,listeners:a}))}var Lo=null,$o=null;function sS(n){Ay(n,0)}function Ul(n){var a=Ao(n);if(Rg(a))return n}function Kg(n,a){if(n==="change")return a}var Jg=!1;if(pr){var Td;if(pr){var kd="oninput"in document;if(!kd){var ev=document.createElement("div");ev.setAttribute("oninput","return;"),kd=typeof ev.oninput=="function"}Td=kd}else Td=!1;Jg=Td&&(!document.documentMode||9<document.documentMode)}function tv(){Lo&&(Lo.detachEvent("onpropertychange",nv),$o=Lo=null)}function nv(n){if(n.propertyName==="value"&&Ul($o)){var a=[];Zg(a,$o,n,md(n)),Hg(sS,a)}}function lS(n,a,o){n==="focusin"?(tv(),Lo=a,$o=o,Lo.attachEvent("onpropertychange",nv)):n==="focusout"&&tv()}function cS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ul($o)}function uS(n,a){if(n==="click")return Ul(a)}function dS(n,a){if(n==="input"||n==="change")return Ul(a)}function fS(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var an=typeof Object.is=="function"?Object.is:fS;function Ho(n,a){if(an(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var o=Object.keys(n),c=Object.keys(a);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!Br.call(a,f)||!an(n[f],a[f]))return!1}return!0}function rv(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function av(n,a){var o=rv(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=a&&c>=a)return{node:o,offset:a-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=rv(o)}}function iv(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?iv(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function ov(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=Nl(n.document);a instanceof n.HTMLIFrameElement;){try{var o=typeof a.contentWindow.location.href=="string"}catch{o=!1}if(o)n=a.contentWindow;else break;a=Nl(n.document)}return a}function Ed(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}var hS=pr&&"documentMode"in document&&11>=document.documentMode,Ti=null,Cd=null,Io=null,Md=!1;function sv(n,a,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Md||Ti==null||Ti!==Nl(c)||(c=Ti,"selectionStart"in c&&Ed(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Io&&Ho(Io,c)||(Io=c,c=xc(Cd,"onSelect"),0<c.length&&(a=new Dl("onSelect","select",null,a,o),n.push({event:a,listeners:c}),a.target=Ti)))}function Ca(n,a){var o={};return o[n.toLowerCase()]=a.toLowerCase(),o["Webkit"+n]="webkit"+a,o["Moz"+n]="moz"+a,o}var ki={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionrun:Ca("Transition","TransitionRun"),transitionstart:Ca("Transition","TransitionStart"),transitioncancel:Ca("Transition","TransitionCancel"),transitionend:Ca("Transition","TransitionEnd")},Nd={},lv={};pr&&(lv=document.createElement("div").style,"AnimationEvent"in window||(delete ki.animationend.animation,delete ki.animationiteration.animation,delete ki.animationstart.animation),"TransitionEvent"in window||delete ki.transitionend.transition);function Ma(n){if(Nd[n])return Nd[n];if(!ki[n])return n;var a=ki[n],o;for(o in a)if(a.hasOwnProperty(o)&&o in lv)return Nd[n]=a[o];return n}var cv=Ma("animationend"),uv=Ma("animationiteration"),dv=Ma("animationstart"),pS=Ma("transitionrun"),mS=Ma("transitionstart"),gS=Ma("transitioncancel"),fv=Ma("transitionend"),hv=new Map,Od="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Od.push("scrollEnd");function $n(n,a){hv.set(n,a),ka(a,[n])}var pv=new WeakMap;function Sn(n,a){if(typeof n=="object"&&n!==null){var o=pv.get(n);return o!==void 0?o:(a={value:n,source:a,stack:Og(a)},pv.set(n,a),a)}return{value:n,source:a,stack:Og(a)}}var Tn=[],Ei=0,Ad=0;function Ll(){for(var n=Ei,a=Ad=Ei=0;a<n;){var o=Tn[a];Tn[a++]=null;var c=Tn[a];Tn[a++]=null;var f=Tn[a];Tn[a++]=null;var m=Tn[a];if(Tn[a++]=null,c!==null&&f!==null){var x=c.pending;x===null?f.next=f:(f.next=x.next,x.next=f),c.pending=f}m!==0&&mv(o,f,m)}}function $l(n,a,o,c){Tn[Ei++]=n,Tn[Ei++]=a,Tn[Ei++]=o,Tn[Ei++]=c,Ad|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function Rd(n,a,o,c){return $l(n,a,o,c),Hl(n)}function Ci(n,a){return $l(n,null,null,a),Hl(n)}function mv(n,a,o){n.lanes|=o;var c=n.alternate;c!==null&&(c.lanes|=o);for(var f=!1,m=n.return;m!==null;)m.childLanes|=o,c=m.alternate,c!==null&&(c.childLanes|=o),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(f=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,f&&a!==null&&(f=31-rn(o),n=m.hiddenUpdates,c=n[f],c===null?n[f]=[a]:c.push(a),a.lane=o|536870912),m):null}function Hl(n){if(50<ds)throw ds=0,Hf=null,Error(i(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var Mi={};function vS(n,a,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(n,a,o,c){return new vS(n,a,o,c)}function zd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function mr(n,a){var o=n.alternate;return o===null?(o=on(n.tag,a,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=a,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,a=n.dependencies,o.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function gv(n,a){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,a=o.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function Il(n,a,o,c,f,m){var x=0;if(c=n,typeof n=="function")zd(n)&&(x=1);else if(typeof n=="string")x=bT(n,o,te.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case ne:return n=on(31,o,a,f),n.elementType=ne,n.lanes=m,n;case S:return Na(o.children,f,m,a);case T:x=8,f|=24;break;case M:return n=on(12,o,a,f|2),n.elementType=M,n.lanes=m,n;case D:return n=on(13,o,a,f),n.elementType=D,n.lanes=m,n;case X:return n=on(19,o,a,f),n.elementType=X,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case _:case O:x=10;break e;case C:x=9;break e;case U:x=11;break e;case F:x=14;break e;case ee:x=16,c=null;break e}x=29,o=Error(i(130,n===null?"null":typeof n,"")),c=null}return a=on(x,o,a,f),a.elementType=n,a.type=c,a.lanes=m,a}function Na(n,a,o,c){return n=on(7,n,c,a),n.lanes=o,n}function Dd(n,a,o){return n=on(6,n,null,a),n.lanes=o,n}function jd(n,a,o){return a=on(4,n.children!==null?n.children:[],n.key,a),a.lanes=o,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}var Ni=[],Oi=0,ql=null,Bl=0,kn=[],En=0,Oa=null,gr=1,vr="";function Aa(n,a){Ni[Oi++]=Bl,Ni[Oi++]=ql,ql=n,Bl=a}function vv(n,a,o){kn[En++]=gr,kn[En++]=vr,kn[En++]=Oa,Oa=n;var c=gr;n=vr;var f=32-rn(c)-1;c&=~(1<<f),o+=1;var m=32-rn(a)+f;if(30<m){var x=f-f%5;m=(c&(1<<x)-1).toString(32),c>>=x,f-=x,gr=1<<32-rn(a)+f|o<<f|c,vr=m+n}else gr=1<<m|o<<f|c,vr=n}function Ud(n){n.return!==null&&(Aa(n,1),vv(n,1,0))}function Ld(n){for(;n===ql;)ql=Ni[--Oi],Ni[Oi]=null,Bl=Ni[--Oi],Ni[Oi]=null;for(;n===Oa;)Oa=kn[--En],kn[En]=null,vr=kn[--En],kn[En]=null,gr=kn[--En],kn[En]=null}var Pt=null,ot=null,He=!1,Ra=null,Jn=!1,$d=Error(i(519));function za(n){var a=Error(i(418,""));throw Yo(Sn(a,n)),$d}function yv(n){var a=n.stateNode,o=n.type,c=n.memoizedProps;switch(a[$t]=n,a[Gt]=c,o){case"dialog":Ae("cancel",a),Ae("close",a);break;case"iframe":case"object":case"embed":Ae("load",a);break;case"video":case"audio":for(o=0;o<hs.length;o++)Ae(hs[o],a);break;case"source":Ae("error",a);break;case"img":case"image":case"link":Ae("error",a),Ae("load",a);break;case"details":Ae("toggle",a);break;case"input":Ae("invalid",a),zg(a,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Ml(a);break;case"select":Ae("invalid",a);break;case"textarea":Ae("invalid",a),jg(a,c.value,c.defaultValue,c.children),Ml(a)}o=c.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||a.textContent===""+o||c.suppressHydrationWarning===!0||jy(a.textContent,o)?(c.popover!=null&&(Ae("beforetoggle",a),Ae("toggle",a)),c.onScroll!=null&&Ae("scroll",a),c.onScrollEnd!=null&&Ae("scrollend",a),c.onClick!=null&&(a.onclick=_c),a=!0):a=!1,a||za(n)}function bv(n){for(Pt=n.return;Pt;)switch(Pt.tag){case 5:case 13:Jn=!1;return;case 27:case 3:Jn=!0;return;default:Pt=Pt.return}}function qo(n){if(n!==Pt)return!1;if(!He)return bv(n),He=!0,!1;var a=n.tag,o;if((o=a!==3&&a!==27)&&((o=a===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||th(n.type,n.memoizedProps)),o=!o),o&&ot&&za(n),bv(n),a===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));e:{for(n=n.nextSibling,a=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(a===0){ot=In(n.nextSibling);break e}a--}else o!=="$"&&o!=="$!"&&o!=="$?"||a++;n=n.nextSibling}ot=null}}else a===27?(a=ot,la(n.type)?(n=ih,ih=null,ot=n):ot=a):ot=Pt?In(n.stateNode.nextSibling):null;return!0}function Bo(){ot=Pt=null,He=!1}function wv(){var n=Ra;return n!==null&&(Zt===null?Zt=n:Zt.push.apply(Zt,n),Ra=null),n}function Yo(n){Ra===null?Ra=[n]:Ra.push(n)}var Hd=q(null),Da=null,yr=null;function Gr(n,a,o){J(Hd,a._currentValue),a._currentValue=o}function br(n){n._currentValue=Hd.current,Z(Hd)}function Id(n,a,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,c!==null&&(c.childLanes|=a)):c!==null&&(c.childLanes&a)!==a&&(c.childLanes|=a),n===o)break;n=n.return}}function qd(n,a,o,c){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var m=f.dependencies;if(m!==null){var x=f.child;m=m.firstContext;e:for(;m!==null;){var k=m;m=f;for(var A=0;A<a.length;A++)if(k.context===a[A]){m.lanes|=o,k=m.alternate,k!==null&&(k.lanes|=o),Id(m.return,o,n),c||(x=null);break e}m=k.next}}else if(f.tag===18){if(x=f.return,x===null)throw Error(i(341));x.lanes|=o,m=x.alternate,m!==null&&(m.lanes|=o),Id(x,o,n),x=null}else x=f.child;if(x!==null)x.return=f;else for(x=f;x!==null;){if(x===n){x=null;break}if(f=x.sibling,f!==null){f.return=x.return,x=f;break}x=x.return}f=x}}function Po(n,a,o,c){n=null;for(var f=a,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var x=f.alternate;if(x===null)throw Error(i(387));if(x=x.memoizedProps,x!==null){var k=f.type;an(f.pendingProps.value,x.value)||(n!==null?n.push(k):n=[k])}}else if(f===be.current){if(x=f.alternate,x===null)throw Error(i(387));x.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(bs):n=[bs])}f=f.return}n!==null&&qd(a,n,o,c),a.flags|=262144}function Yl(n){for(n=n.firstContext;n!==null;){if(!an(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ja(n){Da=n,yr=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Ht(n){return xv(Da,n)}function Pl(n,a){return Da===null&&ja(n),xv(n,a)}function xv(n,a){var o=a._currentValue;if(a={context:a,memoizedValue:o,next:null},yr===null){if(n===null)throw Error(i(308));yr=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else yr=yr.next=a;return o}var yS=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(o,c){n.push(c)}};this.abort=function(){a.aborted=!0,n.forEach(function(o){return o()})}},bS=e.unstable_scheduleCallback,wS=e.unstable_NormalPriority,xt={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bd(){return{controller:new yS,data:new Map,refCount:0}}function Xo(n){n.refCount--,n.refCount===0&&bS(wS,function(){n.controller.abort()})}var Fo=null,Yd=0,Ai=0,Ri=null;function xS(n,a){if(Fo===null){var o=Fo=[];Yd=0,Ai=Ff(),Ri={status:"pending",value:void 0,then:function(c){o.push(c)}}}return Yd++,a.then(_v,_v),a}function _v(){if(--Yd===0&&Fo!==null){Ri!==null&&(Ri.status="fulfilled");var n=Fo;Fo=null,Ai=0,Ri=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function _S(n,a){var o=[],c={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return n.then(function(){c.status="fulfilled",c.value=a;for(var f=0;f<o.length;f++)(0,o[f])(a)},function(f){for(c.status="rejected",c.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),c}var Sv=E.S;E.S=function(n,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&xS(n,a),Sv!==null&&Sv(n,a)};var Ua=q(null);function Pd(){var n=Ua.current;return n!==null?n:We.pooledCache}function Xl(n,a){a===null?J(Ua,Ua.current):J(Ua,a.pool)}function Tv(){var n=Pd();return n===null?null:{parent:xt._currentValue,pool:n}}var Go=Error(i(460)),kv=Error(i(474)),Fl=Error(i(542)),Xd={then:function(){}};function Ev(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Gl(){}function Cv(n,a,o){switch(o=n[o],o===void 0?n.push(a):o!==a&&(a.then(Gl,Gl),a=o),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,Nv(n),n;default:if(typeof a.status=="string")a.then(Gl,Gl);else{if(n=We,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=a,n.status="pending",n.then(function(c){if(a.status==="pending"){var f=a;f.status="fulfilled",f.value=c}},function(c){if(a.status==="pending"){var f=a;f.status="rejected",f.reason=c}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,Nv(n),n}throw Vo=a,Go}}var Vo=null;function Mv(){if(Vo===null)throw Error(i(459));var n=Vo;return Vo=null,n}function Nv(n){if(n===Go||n===Fl)throw Error(i(483))}var Vr=!1;function Fd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gd(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Qr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Wr(n,a,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(qe&2)!==0){var f=c.pending;return f===null?a.next=a:(a.next=f.next,f.next=a),c.pending=a,a=Hl(n),mv(n,null,o),a}return $l(n,c,a,o),Hl(n)}function Qo(n,a,o){if(a=a.updateQueue,a!==null&&(a=a.shared,(o&4194048)!==0)){var c=a.lanes;c&=n.pendingLanes,o|=c,a.lanes=o,_g(n,o)}}function Vd(n,a){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var x={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=x:m=m.next=x,o=o.next}while(o!==null);m===null?f=m=a:m=m.next=a}else f=m=a;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=a:n.next=a,o.lastBaseUpdate=a}var Qd=!1;function Wo(){if(Qd){var n=Ri;if(n!==null)throw n}}function Zo(n,a,o,c){Qd=!1;var f=n.updateQueue;Vr=!1;var m=f.firstBaseUpdate,x=f.lastBaseUpdate,k=f.shared.pending;if(k!==null){f.shared.pending=null;var A=k,B=A.next;A.next=null,x===null?m=B:x.next=B,x=A;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,k=Q.lastBaseUpdate,k!==x&&(k===null?Q.firstBaseUpdate=B:k.next=B,Q.lastBaseUpdate=A))}if(m!==null){var K=f.baseState;x=0,Q=B=A=null,k=m;do{var Y=k.lane&-536870913,P=Y!==k.lane;if(P?(Ue&Y)===Y:(c&Y)===Y){Y!==0&&Y===Ai&&(Qd=!0),Q!==null&&(Q=Q.next={lane:0,tag:k.tag,payload:k.payload,callback:null,next:null});e:{var ve=n,me=k;Y=a;var Xe=o;switch(me.tag){case 1:if(ve=me.payload,typeof ve=="function"){K=ve.call(Xe,K,Y);break e}K=ve;break e;case 3:ve.flags=ve.flags&-65537|128;case 0:if(ve=me.payload,Y=typeof ve=="function"?ve.call(Xe,K,Y):ve,Y==null)break e;K=y({},K,Y);break e;case 2:Vr=!0}}Y=k.callback,Y!==null&&(n.flags|=64,P&&(n.flags|=8192),P=f.callbacks,P===null?f.callbacks=[Y]:P.push(Y))}else P={lane:Y,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Q===null?(B=Q=P,A=K):Q=Q.next=P,x|=Y;if(k=k.next,k===null){if(k=f.shared.pending,k===null)break;P=k,k=P.next,P.next=null,f.lastBaseUpdate=P,f.shared.pending=null}}while(!0);Q===null&&(A=K),f.baseState=A,f.firstBaseUpdate=B,f.lastBaseUpdate=Q,m===null&&(f.shared.lanes=0),aa|=x,n.lanes=x,n.memoizedState=K}}function Ov(n,a){if(typeof n!="function")throw Error(i(191,n));n.call(a)}function Av(n,a){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)Ov(o[n],a)}var zi=q(null),Vl=q(0);function Rv(n,a){n=Er,J(Vl,n),J(zi,a),Er=n|a.baseLanes}function Wd(){J(Vl,Er),J(zi,zi.current)}function Zd(){Er=Vl.current,Z(zi),Z(Vl)}var Zr=0,ke=null,Ye=null,gt=null,Ql=!1,Di=!1,La=!1,Wl=0,Ko=0,ji=null,SS=0;function ct(){throw Error(i(321))}function Kd(n,a){if(a===null)return!1;for(var o=0;o<a.length&&o<n.length;o++)if(!an(n[o],a[o]))return!1;return!0}function Jd(n,a,o,c,f,m){return Zr=m,ke=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,E.H=n===null||n.memoizedState===null?m0:g0,La=!1,m=o(c,f),La=!1,Di&&(m=Dv(a,o,c,f)),zv(n),m}function zv(n){E.H=nc;var a=Ye!==null&&Ye.next!==null;if(Zr=0,gt=Ye=ke=null,Ql=!1,Ko=0,ji=null,a)throw Error(i(300));n===null||Et||(n=n.dependencies,n!==null&&Yl(n)&&(Et=!0))}function Dv(n,a,o,c){ke=n;var f=0;do{if(Di&&(ji=null),Ko=0,Di=!1,25<=f)throw Error(i(301));if(f+=1,gt=Ye=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}E.H=OS,m=a(o,c)}while(Di);return m}function TS(){var n=E.H,a=n.useState()[0];return a=typeof a.then=="function"?Jo(a):a,n=n.useState()[0],(Ye!==null?Ye.memoizedState:null)!==n&&(ke.flags|=1024),a}function ef(){var n=Wl!==0;return Wl=0,n}function tf(n,a,o){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~o}function nf(n){if(Ql){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}Ql=!1}Zr=0,gt=Ye=ke=null,Di=!1,Ko=Wl=0,ji=null}function Qt(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?ke.memoizedState=gt=n:gt=gt.next=n,gt}function vt(){if(Ye===null){var n=ke.alternate;n=n!==null?n.memoizedState:null}else n=Ye.next;var a=gt===null?ke.memoizedState:gt.next;if(a!==null)gt=a,Ye=n;else{if(n===null)throw ke.alternate===null?Error(i(467)):Error(i(310));Ye=n,n={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},gt===null?ke.memoizedState=gt=n:gt=gt.next=n}return gt}function rf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jo(n){var a=Ko;return Ko+=1,ji===null&&(ji=[]),n=Cv(ji,n,a),a=ke,(gt===null?a.memoizedState:gt.next)===null&&(a=a.alternate,E.H=a===null||a.memoizedState===null?m0:g0),n}function Zl(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Jo(n);if(n.$$typeof===O)return Ht(n)}throw Error(i(438,String(n)))}function af(n){var a=null,o=ke.updateQueue;if(o!==null&&(a=o.memoCache),a==null){var c=ke.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(a={data:c.data.map(function(f){return f.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),o===null&&(o=rf(),ke.updateQueue=o),o.memoCache=a,o=a.data[a.index],o===void 0)for(o=a.data[a.index]=Array(n),c=0;c<n;c++)o[c]=pe;return a.index++,o}function wr(n,a){return typeof a=="function"?a(n):a}function Kl(n){var a=vt();return of(a,Ye,n)}function of(n,a,o){var c=n.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=o;var f=n.baseQueue,m=c.pending;if(m!==null){if(f!==null){var x=f.next;f.next=m.next,m.next=x}a.baseQueue=f=m,c.pending=null}if(m=n.baseState,f===null)n.memoizedState=m;else{a=f.next;var k=x=null,A=null,B=a,Q=!1;do{var K=B.lane&-536870913;if(K!==B.lane?(Ue&K)===K:(Zr&K)===K){var Y=B.revertLane;if(Y===0)A!==null&&(A=A.next={lane:0,revertLane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),K===Ai&&(Q=!0);else if((Zr&Y)===Y){B=B.next,Y===Ai&&(Q=!0);continue}else K={lane:0,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},A===null?(k=A=K,x=m):A=A.next=K,ke.lanes|=Y,aa|=Y;K=B.action,La&&o(m,K),m=B.hasEagerState?B.eagerState:o(m,K)}else Y={lane:K,revertLane:B.revertLane,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},A===null?(k=A=Y,x=m):A=A.next=Y,ke.lanes|=K,aa|=K;B=B.next}while(B!==null&&B!==a);if(A===null?x=m:A.next=k,!an(m,n.memoizedState)&&(Et=!0,Q&&(o=Ri,o!==null)))throw o;n.memoizedState=m,n.baseState=x,n.baseQueue=A,c.lastRenderedState=m}return f===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function sf(n){var a=vt(),o=a.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=n;var c=o.dispatch,f=o.pending,m=a.memoizedState;if(f!==null){o.pending=null;var x=f=f.next;do m=n(m,x.action),x=x.next;while(x!==f);an(m,a.memoizedState)||(Et=!0),a.memoizedState=m,a.baseQueue===null&&(a.baseState=m),o.lastRenderedState=m}return[m,c]}function jv(n,a,o){var c=ke,f=vt(),m=He;if(m){if(o===void 0)throw Error(i(407));o=o()}else o=a();var x=!an((Ye||f).memoizedState,o);x&&(f.memoizedState=o,Et=!0),f=f.queue;var k=$v.bind(null,c,f,n);if(es(2048,8,k,[n]),f.getSnapshot!==a||x||gt!==null&&gt.memoizedState.tag&1){if(c.flags|=2048,Ui(9,Jl(),Lv.bind(null,c,f,o,a),null),We===null)throw Error(i(349));m||(Zr&124)!==0||Uv(c,a,o)}return o}function Uv(n,a,o){n.flags|=16384,n={getSnapshot:a,value:o},a=ke.updateQueue,a===null?(a=rf(),ke.updateQueue=a,a.stores=[n]):(o=a.stores,o===null?a.stores=[n]:o.push(n))}function Lv(n,a,o,c){a.value=o,a.getSnapshot=c,Hv(a)&&Iv(n)}function $v(n,a,o){return o(function(){Hv(a)&&Iv(n)})}function Hv(n){var a=n.getSnapshot;n=n.value;try{var o=a();return!an(n,o)}catch{return!0}}function Iv(n){var a=Ci(n,2);a!==null&&dn(a,n,2)}function lf(n){var a=Qt();if(typeof n=="function"){var o=n;if(n=o(),La){Pr(!0);try{o()}finally{Pr(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wr,lastRenderedState:n},a}function qv(n,a,o,c){return n.baseState=o,of(n,Ye,typeof c=="function"?c:wr)}function kS(n,a,o,c,f){if(tc(n))throw Error(i(485));if(n=a.action,n!==null){var m={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){m.listeners.push(x)}};E.T!==null?o(!0):m.isTransition=!1,c(m),o=a.pending,o===null?(m.next=a.pending=m,Bv(a,m)):(m.next=o.next,a.pending=o.next=m)}}function Bv(n,a){var o=a.action,c=a.payload,f=n.state;if(a.isTransition){var m=E.T,x={};E.T=x;try{var k=o(f,c),A=E.S;A!==null&&A(x,k),Yv(n,a,k)}catch(B){cf(n,a,B)}finally{E.T=m}}else try{m=o(f,c),Yv(n,a,m)}catch(B){cf(n,a,B)}}function Yv(n,a,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(c){Pv(n,a,c)},function(c){return cf(n,a,c)}):Pv(n,a,o)}function Pv(n,a,o){a.status="fulfilled",a.value=o,Xv(a),n.state=o,a=n.pending,a!==null&&(o=a.next,o===a?n.pending=null:(o=o.next,a.next=o,Bv(n,o)))}function cf(n,a,o){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do a.status="rejected",a.reason=o,Xv(a),a=a.next;while(a!==c)}n.action=null}function Xv(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function Fv(n,a){return a}function Gv(n,a){if(He){var o=We.formState;if(o!==null){e:{var c=ke;if(He){if(ot){t:{for(var f=ot,m=Jn;f.nodeType!==8;){if(!m){f=null;break t}if(f=In(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){ot=In(f.nextSibling),c=f.data==="F!";break e}}za(c)}c=!1}c&&(a=o[0])}}return o=Qt(),o.memoizedState=o.baseState=a,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fv,lastRenderedState:a},o.queue=c,o=f0.bind(null,ke,c),c.dispatch=o,c=lf(!1),m=pf.bind(null,ke,!1,c.queue),c=Qt(),f={state:a,dispatch:null,action:n,pending:null},c.queue=f,o=kS.bind(null,ke,f,m,o),f.dispatch=o,c.memoizedState=n,[a,o,!1]}function Vv(n){var a=vt();return Qv(a,Ye,n)}function Qv(n,a,o){if(a=of(n,a,Fv)[0],n=Kl(wr)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var c=Jo(a)}catch(x){throw x===Go?Fl:x}else c=a;a=vt();var f=a.queue,m=f.dispatch;return o!==a.memoizedState&&(ke.flags|=2048,Ui(9,Jl(),ES.bind(null,f,o),null)),[c,m,n]}function ES(n,a){n.action=a}function Wv(n){var a=vt(),o=Ye;if(o!==null)return Qv(a,o,n);vt(),a=a.memoizedState,o=vt();var c=o.queue.dispatch;return o.memoizedState=n,[a,c,!1]}function Ui(n,a,o,c){return n={tag:n,create:o,deps:c,inst:a,next:null},a=ke.updateQueue,a===null&&(a=rf(),ke.updateQueue=a),o=a.lastEffect,o===null?a.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,a.lastEffect=n),n}function Jl(){return{destroy:void 0,resource:void 0}}function Zv(){return vt().memoizedState}function ec(n,a,o,c){var f=Qt();c=c===void 0?null:c,ke.flags|=n,f.memoizedState=Ui(1|a,Jl(),o,c)}function es(n,a,o,c){var f=vt();c=c===void 0?null:c;var m=f.memoizedState.inst;Ye!==null&&c!==null&&Kd(c,Ye.memoizedState.deps)?f.memoizedState=Ui(a,m,o,c):(ke.flags|=n,f.memoizedState=Ui(1|a,m,o,c))}function Kv(n,a){ec(8390656,8,n,a)}function Jv(n,a){es(2048,8,n,a)}function e0(n,a){return es(4,2,n,a)}function t0(n,a){return es(4,4,n,a)}function n0(n,a){if(typeof a=="function"){n=n();var o=a(n);return function(){typeof o=="function"?o():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function r0(n,a,o){o=o!=null?o.concat([n]):null,es(4,4,n0.bind(null,a,n),o)}function uf(){}function a0(n,a){var o=vt();a=a===void 0?null:a;var c=o.memoizedState;return a!==null&&Kd(a,c[1])?c[0]:(o.memoizedState=[n,a],n)}function i0(n,a){var o=vt();a=a===void 0?null:a;var c=o.memoizedState;if(a!==null&&Kd(a,c[1]))return c[0];if(c=n(),La){Pr(!0);try{n()}finally{Pr(!1)}}return o.memoizedState=[c,a],c}function df(n,a,o){return o===void 0||(Zr&1073741824)!==0?n.memoizedState=a:(n.memoizedState=o,n=ly(),ke.lanes|=n,aa|=n,o)}function o0(n,a,o,c){return an(o,a)?o:zi.current!==null?(n=df(n,o,c),an(n,a)||(Et=!0),n):(Zr&42)===0?(Et=!0,n.memoizedState=o):(n=ly(),ke.lanes|=n,aa|=n,a)}function s0(n,a,o,c,f){var m=R.p;R.p=m!==0&&8>m?m:8;var x=E.T,k={};E.T=k,pf(n,!1,a,o);try{var A=f(),B=E.S;if(B!==null&&B(k,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var Q=_S(A,c);ts(n,a,Q,un(n))}else ts(n,a,c,un(n))}catch(K){ts(n,a,{then:function(){},status:"rejected",reason:K},un())}finally{R.p=m,E.T=x}}function CS(){}function ff(n,a,o,c){if(n.tag!==5)throw Error(i(476));var f=l0(n).queue;s0(n,f,a,j,o===null?CS:function(){return c0(n),o(c)})}function l0(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wr,lastRenderedState:j},next:null};var o={};return a.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wr,lastRenderedState:o},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function c0(n){var a=l0(n).next.queue;ts(n,a,{},un())}function hf(){return Ht(bs)}function u0(){return vt().memoizedState}function d0(){return vt().memoizedState}function MS(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var o=un();n=Qr(o);var c=Wr(a,n,o);c!==null&&(dn(c,a,o),Qo(c,a,o)),a={cache:Bd()},n.payload=a;return}a=a.return}}function NS(n,a,o){var c=un();o={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},tc(n)?h0(a,o):(o=Rd(n,a,o,c),o!==null&&(dn(o,n,c),p0(o,a,c)))}function f0(n,a,o){var c=un();ts(n,a,o,c)}function ts(n,a,o,c){var f={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(tc(n))h0(a,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=a.lastRenderedReducer,m!==null))try{var x=a.lastRenderedState,k=m(x,o);if(f.hasEagerState=!0,f.eagerState=k,an(k,x))return $l(n,a,f,0),We===null&&Ll(),!1}catch{}finally{}if(o=Rd(n,a,f,c),o!==null)return dn(o,n,c),p0(o,a,c),!0}return!1}function pf(n,a,o,c){if(c={lane:2,revertLane:Ff(),action:c,hasEagerState:!1,eagerState:null,next:null},tc(n)){if(a)throw Error(i(479))}else a=Rd(n,o,c,2),a!==null&&dn(a,n,2)}function tc(n){var a=n.alternate;return n===ke||a!==null&&a===ke}function h0(n,a){Di=Ql=!0;var o=n.pending;o===null?a.next=a:(a.next=o.next,o.next=a),n.pending=a}function p0(n,a,o){if((o&4194048)!==0){var c=a.lanes;c&=n.pendingLanes,o|=c,a.lanes=o,_g(n,o)}}var nc={readContext:Ht,use:Zl,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useLayoutEffect:ct,useInsertionEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useSyncExternalStore:ct,useId:ct,useHostTransitionStatus:ct,useFormState:ct,useActionState:ct,useOptimistic:ct,useMemoCache:ct,useCacheRefresh:ct},m0={readContext:Ht,use:Zl,useCallback:function(n,a){return Qt().memoizedState=[n,a===void 0?null:a],n},useContext:Ht,useEffect:Kv,useImperativeHandle:function(n,a,o){o=o!=null?o.concat([n]):null,ec(4194308,4,n0.bind(null,a,n),o)},useLayoutEffect:function(n,a){return ec(4194308,4,n,a)},useInsertionEffect:function(n,a){ec(4,2,n,a)},useMemo:function(n,a){var o=Qt();a=a===void 0?null:a;var c=n();if(La){Pr(!0);try{n()}finally{Pr(!1)}}return o.memoizedState=[c,a],c},useReducer:function(n,a,o){var c=Qt();if(o!==void 0){var f=o(a);if(La){Pr(!0);try{o(a)}finally{Pr(!1)}}}else f=a;return c.memoizedState=c.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},c.queue=n,n=n.dispatch=NS.bind(null,ke,n),[c.memoizedState,n]},useRef:function(n){var a=Qt();return n={current:n},a.memoizedState=n},useState:function(n){n=lf(n);var a=n.queue,o=f0.bind(null,ke,a);return a.dispatch=o,[n.memoizedState,o]},useDebugValue:uf,useDeferredValue:function(n,a){var o=Qt();return df(o,n,a)},useTransition:function(){var n=lf(!1);return n=s0.bind(null,ke,n.queue,!0,!1),Qt().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,o){var c=ke,f=Qt();if(He){if(o===void 0)throw Error(i(407));o=o()}else{if(o=a(),We===null)throw Error(i(349));(Ue&124)!==0||Uv(c,a,o)}f.memoizedState=o;var m={value:o,getSnapshot:a};return f.queue=m,Kv($v.bind(null,c,m,n),[n]),c.flags|=2048,Ui(9,Jl(),Lv.bind(null,c,m,o,a),null),o},useId:function(){var n=Qt(),a=We.identifierPrefix;if(He){var o=vr,c=gr;o=(c&~(1<<32-rn(c)-1)).toString(32)+o,a="«"+a+"R"+o,o=Wl++,0<o&&(a+="H"+o.toString(32)),a+="»"}else o=SS++,a="«"+a+"r"+o.toString(32)+"»";return n.memoizedState=a},useHostTransitionStatus:hf,useFormState:Gv,useActionState:Gv,useOptimistic:function(n){var a=Qt();a.memoizedState=a.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=o,a=pf.bind(null,ke,!0,o),o.dispatch=a,[n,a]},useMemoCache:af,useCacheRefresh:function(){return Qt().memoizedState=MS.bind(null,ke)}},g0={readContext:Ht,use:Zl,useCallback:a0,useContext:Ht,useEffect:Jv,useImperativeHandle:r0,useInsertionEffect:e0,useLayoutEffect:t0,useMemo:i0,useReducer:Kl,useRef:Zv,useState:function(){return Kl(wr)},useDebugValue:uf,useDeferredValue:function(n,a){var o=vt();return o0(o,Ye.memoizedState,n,a)},useTransition:function(){var n=Kl(wr)[0],a=vt().memoizedState;return[typeof n=="boolean"?n:Jo(n),a]},useSyncExternalStore:jv,useId:u0,useHostTransitionStatus:hf,useFormState:Vv,useActionState:Vv,useOptimistic:function(n,a){var o=vt();return qv(o,Ye,n,a)},useMemoCache:af,useCacheRefresh:d0},OS={readContext:Ht,use:Zl,useCallback:a0,useContext:Ht,useEffect:Jv,useImperativeHandle:r0,useInsertionEffect:e0,useLayoutEffect:t0,useMemo:i0,useReducer:sf,useRef:Zv,useState:function(){return sf(wr)},useDebugValue:uf,useDeferredValue:function(n,a){var o=vt();return Ye===null?df(o,n,a):o0(o,Ye.memoizedState,n,a)},useTransition:function(){var n=sf(wr)[0],a=vt().memoizedState;return[typeof n=="boolean"?n:Jo(n),a]},useSyncExternalStore:jv,useId:u0,useHostTransitionStatus:hf,useFormState:Wv,useActionState:Wv,useOptimistic:function(n,a){var o=vt();return Ye!==null?qv(o,Ye,n,a):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:af,useCacheRefresh:d0},Li=null,ns=0;function rc(n){var a=ns;return ns+=1,Li===null&&(Li=[]),Cv(Li,n,a)}function rs(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function ac(n,a){throw a.$$typeof===g?Error(i(525)):(n=Object.prototype.toString.call(a),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function v0(n){var a=n._init;return a(n._payload)}function y0(n){function a(H,L){if(n){var I=H.deletions;I===null?(H.deletions=[L],H.flags|=16):I.push(L)}}function o(H,L){if(!n)return null;for(;L!==null;)a(H,L),L=L.sibling;return null}function c(H){for(var L=new Map;H!==null;)H.key!==null?L.set(H.key,H):L.set(H.index,H),H=H.sibling;return L}function f(H,L){return H=mr(H,L),H.index=0,H.sibling=null,H}function m(H,L,I){return H.index=I,n?(I=H.alternate,I!==null?(I=I.index,I<L?(H.flags|=67108866,L):I):(H.flags|=67108866,L)):(H.flags|=1048576,L)}function x(H){return n&&H.alternate===null&&(H.flags|=67108866),H}function k(H,L,I,W){return L===null||L.tag!==6?(L=Dd(I,H.mode,W),L.return=H,L):(L=f(L,I),L.return=H,L)}function A(H,L,I,W){var le=I.type;return le===S?Q(H,L,I.props.children,W,I.key):L!==null&&(L.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ee&&v0(le)===L.type)?(L=f(L,I.props),rs(L,I),L.return=H,L):(L=Il(I.type,I.key,I.props,null,H.mode,W),rs(L,I),L.return=H,L)}function B(H,L,I,W){return L===null||L.tag!==4||L.stateNode.containerInfo!==I.containerInfo||L.stateNode.implementation!==I.implementation?(L=jd(I,H.mode,W),L.return=H,L):(L=f(L,I.children||[]),L.return=H,L)}function Q(H,L,I,W,le){return L===null||L.tag!==7?(L=Na(I,H.mode,W,le),L.return=H,L):(L=f(L,I),L.return=H,L)}function K(H,L,I){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=Dd(""+L,H.mode,I),L.return=H,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case b:return I=Il(L.type,L.key,L.props,null,H.mode,I),rs(I,L),I.return=H,I;case w:return L=jd(L,H.mode,I),L.return=H,L;case ee:var W=L._init;return L=W(L._payload),K(H,L,I)}if(Ce(L)||ie(L))return L=Na(L,H.mode,I,null),L.return=H,L;if(typeof L.then=="function")return K(H,rc(L),I);if(L.$$typeof===O)return K(H,Pl(H,L),I);ac(H,L)}return null}function Y(H,L,I,W){var le=L!==null?L.key:null;if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return le!==null?null:k(H,L,""+I,W);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case b:return I.key===le?A(H,L,I,W):null;case w:return I.key===le?B(H,L,I,W):null;case ee:return le=I._init,I=le(I._payload),Y(H,L,I,W)}if(Ce(I)||ie(I))return le!==null?null:Q(H,L,I,W,null);if(typeof I.then=="function")return Y(H,L,rc(I),W);if(I.$$typeof===O)return Y(H,L,Pl(H,I),W);ac(H,I)}return null}function P(H,L,I,W,le){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return H=H.get(I)||null,k(L,H,""+W,le);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case b:return H=H.get(W.key===null?I:W.key)||null,A(L,H,W,le);case w:return H=H.get(W.key===null?I:W.key)||null,B(L,H,W,le);case ee:var Ne=W._init;return W=Ne(W._payload),P(H,L,I,W,le)}if(Ce(W)||ie(W))return H=H.get(I)||null,Q(L,H,W,le,null);if(typeof W.then=="function")return P(H,L,I,rc(W),le);if(W.$$typeof===O)return P(H,L,I,Pl(L,W),le);ac(L,W)}return null}function ve(H,L,I,W){for(var le=null,Ne=null,fe=L,ge=L=0,Mt=null;fe!==null&&ge<I.length;ge++){fe.index>ge?(Mt=fe,fe=null):Mt=fe.sibling;var $e=Y(H,fe,I[ge],W);if($e===null){fe===null&&(fe=Mt);break}n&&fe&&$e.alternate===null&&a(H,fe),L=m($e,L,ge),Ne===null?le=$e:Ne.sibling=$e,Ne=$e,fe=Mt}if(ge===I.length)return o(H,fe),He&&Aa(H,ge),le;if(fe===null){for(;ge<I.length;ge++)fe=K(H,I[ge],W),fe!==null&&(L=m(fe,L,ge),Ne===null?le=fe:Ne.sibling=fe,Ne=fe);return He&&Aa(H,ge),le}for(fe=c(fe);ge<I.length;ge++)Mt=P(fe,H,ge,I[ge],W),Mt!==null&&(n&&Mt.alternate!==null&&fe.delete(Mt.key===null?ge:Mt.key),L=m(Mt,L,ge),Ne===null?le=Mt:Ne.sibling=Mt,Ne=Mt);return n&&fe.forEach(function(ha){return a(H,ha)}),He&&Aa(H,ge),le}function me(H,L,I,W){if(I==null)throw Error(i(151));for(var le=null,Ne=null,fe=L,ge=L=0,Mt=null,$e=I.next();fe!==null&&!$e.done;ge++,$e=I.next()){fe.index>ge?(Mt=fe,fe=null):Mt=fe.sibling;var ha=Y(H,fe,$e.value,W);if(ha===null){fe===null&&(fe=Mt);break}n&&fe&&ha.alternate===null&&a(H,fe),L=m(ha,L,ge),Ne===null?le=ha:Ne.sibling=ha,Ne=ha,fe=Mt}if($e.done)return o(H,fe),He&&Aa(H,ge),le;if(fe===null){for(;!$e.done;ge++,$e=I.next())$e=K(H,$e.value,W),$e!==null&&(L=m($e,L,ge),Ne===null?le=$e:Ne.sibling=$e,Ne=$e);return He&&Aa(H,ge),le}for(fe=c(fe);!$e.done;ge++,$e=I.next())$e=P(fe,H,ge,$e.value,W),$e!==null&&(n&&$e.alternate!==null&&fe.delete($e.key===null?ge:$e.key),L=m($e,L,ge),Ne===null?le=$e:Ne.sibling=$e,Ne=$e);return n&&fe.forEach(function(AT){return a(H,AT)}),He&&Aa(H,ge),le}function Xe(H,L,I,W){if(typeof I=="object"&&I!==null&&I.type===S&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case b:e:{for(var le=I.key;L!==null;){if(L.key===le){if(le=I.type,le===S){if(L.tag===7){o(H,L.sibling),W=f(L,I.props.children),W.return=H,H=W;break e}}else if(L.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===ee&&v0(le)===L.type){o(H,L.sibling),W=f(L,I.props),rs(W,I),W.return=H,H=W;break e}o(H,L);break}else a(H,L);L=L.sibling}I.type===S?(W=Na(I.props.children,H.mode,W,I.key),W.return=H,H=W):(W=Il(I.type,I.key,I.props,null,H.mode,W),rs(W,I),W.return=H,H=W)}return x(H);case w:e:{for(le=I.key;L!==null;){if(L.key===le)if(L.tag===4&&L.stateNode.containerInfo===I.containerInfo&&L.stateNode.implementation===I.implementation){o(H,L.sibling),W=f(L,I.children||[]),W.return=H,H=W;break e}else{o(H,L);break}else a(H,L);L=L.sibling}W=jd(I,H.mode,W),W.return=H,H=W}return x(H);case ee:return le=I._init,I=le(I._payload),Xe(H,L,I,W)}if(Ce(I))return ve(H,L,I,W);if(ie(I)){if(le=ie(I),typeof le!="function")throw Error(i(150));return I=le.call(I),me(H,L,I,W)}if(typeof I.then=="function")return Xe(H,L,rc(I),W);if(I.$$typeof===O)return Xe(H,L,Pl(H,I),W);ac(H,I)}return typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint"?(I=""+I,L!==null&&L.tag===6?(o(H,L.sibling),W=f(L,I),W.return=H,H=W):(o(H,L),W=Dd(I,H.mode,W),W.return=H,H=W),x(H)):o(H,L)}return function(H,L,I,W){try{ns=0;var le=Xe(H,L,I,W);return Li=null,le}catch(fe){if(fe===Go||fe===Fl)throw fe;var Ne=on(29,fe,null,H.mode);return Ne.lanes=W,Ne.return=H,Ne}finally{}}}var $i=y0(!0),b0=y0(!1),Cn=q(null),er=null;function Kr(n){var a=n.alternate;J(_t,_t.current&1),J(Cn,n),er===null&&(a===null||zi.current!==null||a.memoizedState!==null)&&(er=n)}function w0(n){if(n.tag===22){if(J(_t,_t.current),J(Cn,n),er===null){var a=n.alternate;a!==null&&a.memoizedState!==null&&(er=n)}}else Jr()}function Jr(){J(_t,_t.current),J(Cn,Cn.current)}function xr(n){Z(Cn),er===n&&(er=null),Z(_t)}var _t=q(0);function ic(n){for(var a=n;a!==null;){if(a.tag===13){var o=a.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||ah(o)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function mf(n,a,o,c){a=n.memoizedState,o=o(c,a),o=o==null?a:y({},a,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var gf={enqueueSetState:function(n,a,o){n=n._reactInternals;var c=un(),f=Qr(c);f.payload=a,o!=null&&(f.callback=o),a=Wr(n,f,c),a!==null&&(dn(a,n,c),Qo(a,n,c))},enqueueReplaceState:function(n,a,o){n=n._reactInternals;var c=un(),f=Qr(c);f.tag=1,f.payload=a,o!=null&&(f.callback=o),a=Wr(n,f,c),a!==null&&(dn(a,n,c),Qo(a,n,c))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var o=un(),c=Qr(o);c.tag=2,a!=null&&(c.callback=a),a=Wr(n,c,o),a!==null&&(dn(a,n,o),Qo(a,n,o))}};function x0(n,a,o,c,f,m,x){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,x):a.prototype&&a.prototype.isPureReactComponent?!Ho(o,c)||!Ho(f,m):!0}function _0(n,a,o,c){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(o,c),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(o,c),a.state!==n&&gf.enqueueReplaceState(a,a.state,null)}function $a(n,a){var o=a;if("ref"in a){o={};for(var c in a)c!=="ref"&&(o[c]=a[c])}if(n=n.defaultProps){o===a&&(o=y({},o));for(var f in n)o[f]===void 0&&(o[f]=n[f])}return o}var oc=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function S0(n){oc(n)}function T0(n){console.error(n)}function k0(n){oc(n)}function sc(n,a){try{var o=n.onUncaughtError;o(a.value,{componentStack:a.stack})}catch(c){setTimeout(function(){throw c})}}function E0(n,a,o){try{var c=n.onCaughtError;c(o.value,{componentStack:o.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function vf(n,a,o){return o=Qr(o),o.tag=3,o.payload={element:null},o.callback=function(){sc(n,a)},o}function C0(n){return n=Qr(n),n.tag=3,n}function M0(n,a,o,c){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=c.value;n.payload=function(){return f(m)},n.callback=function(){E0(a,o,c)}}var x=o.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(n.callback=function(){E0(a,o,c),typeof f!="function"&&(ia===null?ia=new Set([this]):ia.add(this));var k=c.stack;this.componentDidCatch(c.value,{componentStack:k!==null?k:""})})}function AS(n,a,o,c,f){if(o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(a=o.alternate,a!==null&&Po(a,o,f,!0),o=Cn.current,o!==null){switch(o.tag){case 13:return er===null?qf():o.alternate===null&&st===0&&(st=3),o.flags&=-257,o.flags|=65536,o.lanes=f,c===Xd?o.flags|=16384:(a=o.updateQueue,a===null?o.updateQueue=new Set([c]):a.add(c),Yf(n,c,f)),!1;case 22:return o.flags|=65536,c===Xd?o.flags|=16384:(a=o.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([c])},o.updateQueue=a):(o=a.retryQueue,o===null?a.retryQueue=new Set([c]):o.add(c)),Yf(n,c,f)),!1}throw Error(i(435,o.tag))}return Yf(n,c,f),qf(),!1}if(He)return a=Cn.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=f,c!==$d&&(n=Error(i(422),{cause:c}),Yo(Sn(n,o)))):(c!==$d&&(a=Error(i(423),{cause:c}),Yo(Sn(a,o))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,c=Sn(c,o),f=vf(n.stateNode,c,f),Vd(n,f),st!==4&&(st=2)),!1;var m=Error(i(520),{cause:c});if(m=Sn(m,o),us===null?us=[m]:us.push(m),st!==4&&(st=2),a===null)return!0;c=Sn(c,o),o=a;do{switch(o.tag){case 3:return o.flags|=65536,n=f&-f,o.lanes|=n,n=vf(o.stateNode,c,n),Vd(o,n),!1;case 1:if(a=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ia===null||!ia.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=C0(f),M0(f,n,o,c),Vd(o,f),!1}o=o.return}while(o!==null);return!1}var N0=Error(i(461)),Et=!1;function zt(n,a,o,c){a.child=n===null?b0(a,null,o,c):$i(a,n.child,o,c)}function O0(n,a,o,c,f){o=o.render;var m=a.ref;if("ref"in c){var x={};for(var k in c)k!=="ref"&&(x[k]=c[k])}else x=c;return ja(a),c=Jd(n,a,o,x,m,f),k=ef(),n!==null&&!Et?(tf(n,a,f),_r(n,a,f)):(He&&k&&Ud(a),a.flags|=1,zt(n,a,c,f),a.child)}function A0(n,a,o,c,f){if(n===null){var m=o.type;return typeof m=="function"&&!zd(m)&&m.defaultProps===void 0&&o.compare===null?(a.tag=15,a.type=m,R0(n,a,m,c,f)):(n=Il(o.type,null,c,a,a.mode,f),n.ref=a.ref,n.return=a,a.child=n)}if(m=n.child,!kf(n,f)){var x=m.memoizedProps;if(o=o.compare,o=o!==null?o:Ho,o(x,c)&&n.ref===a.ref)return _r(n,a,f)}return a.flags|=1,n=mr(m,c),n.ref=a.ref,n.return=a,a.child=n}function R0(n,a,o,c,f){if(n!==null){var m=n.memoizedProps;if(Ho(m,c)&&n.ref===a.ref)if(Et=!1,a.pendingProps=c=m,kf(n,f))(n.flags&131072)!==0&&(Et=!0);else return a.lanes=n.lanes,_r(n,a,f)}return yf(n,a,o,c,f)}function z0(n,a,o){var c=a.pendingProps,f=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden"){if((a.flags&128)!==0){if(c=m!==null?m.baseLanes|o:o,n!==null){for(f=a.child=n.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;a.childLanes=m&~c}else a.childLanes=0,a.child=null;return D0(n,a,c,o)}if((o&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&Xl(a,m!==null?m.cachePool:null),m!==null?Rv(a,m):Wd(),w0(a);else return a.lanes=a.childLanes=536870912,D0(n,a,m!==null?m.baseLanes|o:o,o)}else m!==null?(Xl(a,m.cachePool),Rv(a,m),Jr(),a.memoizedState=null):(n!==null&&Xl(a,null),Wd(),Jr());return zt(n,a,f,o),a.child}function D0(n,a,o,c){var f=Pd();return f=f===null?null:{parent:xt._currentValue,pool:f},a.memoizedState={baseLanes:o,cachePool:f},n!==null&&Xl(a,null),Wd(),w0(a),n!==null&&Po(n,a,c,!0),null}function lc(n,a){var o=a.ref;if(o===null)n!==null&&n.ref!==null&&(a.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(n===null||n.ref!==o)&&(a.flags|=4194816)}}function yf(n,a,o,c,f){return ja(a),o=Jd(n,a,o,c,void 0,f),c=ef(),n!==null&&!Et?(tf(n,a,f),_r(n,a,f)):(He&&c&&Ud(a),a.flags|=1,zt(n,a,o,f),a.child)}function j0(n,a,o,c,f,m){return ja(a),a.updateQueue=null,o=Dv(a,c,o,f),zv(n),c=ef(),n!==null&&!Et?(tf(n,a,m),_r(n,a,m)):(He&&c&&Ud(a),a.flags|=1,zt(n,a,o,m),a.child)}function U0(n,a,o,c,f){if(ja(a),a.stateNode===null){var m=Mi,x=o.contextType;typeof x=="object"&&x!==null&&(m=Ht(x)),m=new o(c,m),a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=gf,a.stateNode=m,m._reactInternals=a,m=a.stateNode,m.props=c,m.state=a.memoizedState,m.refs={},Fd(a),x=o.contextType,m.context=typeof x=="object"&&x!==null?Ht(x):Mi,m.state=a.memoizedState,x=o.getDerivedStateFromProps,typeof x=="function"&&(mf(a,o,x,c),m.state=a.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(x=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),x!==m.state&&gf.enqueueReplaceState(m,m.state,null),Zo(a,c,m,f),Wo(),m.state=a.memoizedState),typeof m.componentDidMount=="function"&&(a.flags|=4194308),c=!0}else if(n===null){m=a.stateNode;var k=a.memoizedProps,A=$a(o,k);m.props=A;var B=m.context,Q=o.contextType;x=Mi,typeof Q=="object"&&Q!==null&&(x=Ht(Q));var K=o.getDerivedStateFromProps;Q=typeof K=="function"||typeof m.getSnapshotBeforeUpdate=="function",k=a.pendingProps!==k,Q||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(k||B!==x)&&_0(a,m,c,x),Vr=!1;var Y=a.memoizedState;m.state=Y,Zo(a,c,m,f),Wo(),B=a.memoizedState,k||Y!==B||Vr?(typeof K=="function"&&(mf(a,o,K,c),B=a.memoizedState),(A=Vr||x0(a,o,A,c,Y,B,x))?(Q||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(a.flags|=4194308)):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=c,a.memoizedState=B),m.props=c,m.state=B,m.context=x,c=A):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),c=!1)}else{m=a.stateNode,Gd(n,a),x=a.memoizedProps,Q=$a(o,x),m.props=Q,K=a.pendingProps,Y=m.context,B=o.contextType,A=Mi,typeof B=="object"&&B!==null&&(A=Ht(B)),k=o.getDerivedStateFromProps,(B=typeof k=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(x!==K||Y!==A)&&_0(a,m,c,A),Vr=!1,Y=a.memoizedState,m.state=Y,Zo(a,c,m,f),Wo();var P=a.memoizedState;x!==K||Y!==P||Vr||n!==null&&n.dependencies!==null&&Yl(n.dependencies)?(typeof k=="function"&&(mf(a,o,k,c),P=a.memoizedState),(Q=Vr||x0(a,o,Q,c,Y,P,A)||n!==null&&n.dependencies!==null&&Yl(n.dependencies))?(B||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,P,A),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,P,A)),typeof m.componentDidUpdate=="function"&&(a.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof m.componentDidUpdate!="function"||x===n.memoizedProps&&Y===n.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||x===n.memoizedProps&&Y===n.memoizedState||(a.flags|=1024),a.memoizedProps=c,a.memoizedState=P),m.props=c,m.state=P,m.context=A,c=Q):(typeof m.componentDidUpdate!="function"||x===n.memoizedProps&&Y===n.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||x===n.memoizedProps&&Y===n.memoizedState||(a.flags|=1024),c=!1)}return m=c,lc(n,a),c=(a.flags&128)!==0,m||c?(m=a.stateNode,o=c&&typeof o.getDerivedStateFromError!="function"?null:m.render(),a.flags|=1,n!==null&&c?(a.child=$i(a,n.child,null,f),a.child=$i(a,null,o,f)):zt(n,a,o,f),a.memoizedState=m.state,n=a.child):n=_r(n,a,f),n}function L0(n,a,o,c){return Bo(),a.flags|=256,zt(n,a,o,c),a.child}var bf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wf(n){return{baseLanes:n,cachePool:Tv()}}function xf(n,a,o){return n=n!==null?n.childLanes&~o:0,a&&(n|=Mn),n}function $0(n,a,o){var c=a.pendingProps,f=!1,m=(a.flags&128)!==0,x;if((x=m)||(x=n!==null&&n.memoizedState===null?!1:(_t.current&2)!==0),x&&(f=!0,a.flags&=-129),x=(a.flags&32)!==0,a.flags&=-33,n===null){if(He){if(f?Kr(a):Jr(),He){var k=ot,A;if(A=k){e:{for(A=k,k=Jn;A.nodeType!==8;){if(!k){k=null;break e}if(A=In(A.nextSibling),A===null){k=null;break e}}k=A}k!==null?(a.memoizedState={dehydrated:k,treeContext:Oa!==null?{id:gr,overflow:vr}:null,retryLane:536870912,hydrationErrors:null},A=on(18,null,null,0),A.stateNode=k,A.return=a,a.child=A,Pt=a,ot=null,A=!0):A=!1}A||za(a)}if(k=a.memoizedState,k!==null&&(k=k.dehydrated,k!==null))return ah(k)?a.lanes=32:a.lanes=536870912,null;xr(a)}return k=c.children,c=c.fallback,f?(Jr(),f=a.mode,k=cc({mode:"hidden",children:k},f),c=Na(c,f,o,null),k.return=a,c.return=a,k.sibling=c,a.child=k,f=a.child,f.memoizedState=wf(o),f.childLanes=xf(n,x,o),a.memoizedState=bf,c):(Kr(a),_f(a,k))}if(A=n.memoizedState,A!==null&&(k=A.dehydrated,k!==null)){if(m)a.flags&256?(Kr(a),a.flags&=-257,a=Sf(n,a,o)):a.memoizedState!==null?(Jr(),a.child=n.child,a.flags|=128,a=null):(Jr(),f=c.fallback,k=a.mode,c=cc({mode:"visible",children:c.children},k),f=Na(f,k,o,null),f.flags|=2,c.return=a,f.return=a,c.sibling=f,a.child=c,$i(a,n.child,null,o),c=a.child,c.memoizedState=wf(o),c.childLanes=xf(n,x,o),a.memoizedState=bf,a=f);else if(Kr(a),ah(k)){if(x=k.nextSibling&&k.nextSibling.dataset,x)var B=x.dgst;x=B,c=Error(i(419)),c.stack="",c.digest=x,Yo({value:c,source:null,stack:null}),a=Sf(n,a,o)}else if(Et||Po(n,a,o,!1),x=(o&n.childLanes)!==0,Et||x){if(x=We,x!==null&&(c=o&-o,c=(c&42)!==0?1:ad(c),c=(c&(x.suspendedLanes|o))!==0?0:c,c!==0&&c!==A.retryLane))throw A.retryLane=c,Ci(n,c),dn(x,n,c),N0;k.data==="$?"||qf(),a=Sf(n,a,o)}else k.data==="$?"?(a.flags|=192,a.child=n.child,a=null):(n=A.treeContext,ot=In(k.nextSibling),Pt=a,He=!0,Ra=null,Jn=!1,n!==null&&(kn[En++]=gr,kn[En++]=vr,kn[En++]=Oa,gr=n.id,vr=n.overflow,Oa=a),a=_f(a,c.children),a.flags|=4096);return a}return f?(Jr(),f=c.fallback,k=a.mode,A=n.child,B=A.sibling,c=mr(A,{mode:"hidden",children:c.children}),c.subtreeFlags=A.subtreeFlags&65011712,B!==null?f=mr(B,f):(f=Na(f,k,o,null),f.flags|=2),f.return=a,c.return=a,c.sibling=f,a.child=c,c=f,f=a.child,k=n.child.memoizedState,k===null?k=wf(o):(A=k.cachePool,A!==null?(B=xt._currentValue,A=A.parent!==B?{parent:B,pool:B}:A):A=Tv(),k={baseLanes:k.baseLanes|o,cachePool:A}),f.memoizedState=k,f.childLanes=xf(n,x,o),a.memoizedState=bf,c):(Kr(a),o=n.child,n=o.sibling,o=mr(o,{mode:"visible",children:c.children}),o.return=a,o.sibling=null,n!==null&&(x=a.deletions,x===null?(a.deletions=[n],a.flags|=16):x.push(n)),a.child=o,a.memoizedState=null,o)}function _f(n,a){return a=cc({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function cc(n,a){return n=on(22,n,null,a),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Sf(n,a,o){return $i(a,n.child,null,o),n=_f(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function H0(n,a,o){n.lanes|=a;var c=n.alternate;c!==null&&(c.lanes|=a),Id(n.return,a,o)}function Tf(n,a,o,c,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(m.isBackwards=a,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=o,m.tailMode=f)}function I0(n,a,o){var c=a.pendingProps,f=c.revealOrder,m=c.tail;if(zt(n,a,c.children,o),c=_t.current,(c&2)!==0)c=c&1|2,a.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&H0(n,o,a);else if(n.tag===19)H0(n,o,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break e;for(;n.sibling===null;){if(n.return===null||n.return===a)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}switch(J(_t,c),f){case"forwards":for(o=a.child,f=null;o!==null;)n=o.alternate,n!==null&&ic(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=a.child,a.child=null):(f=o.sibling,o.sibling=null),Tf(a,!1,f,o,m);break;case"backwards":for(o=null,f=a.child,a.child=null;f!==null;){if(n=f.alternate,n!==null&&ic(n)===null){a.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}Tf(a,!0,o,null,m);break;case"together":Tf(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function _r(n,a,o){if(n!==null&&(a.dependencies=n.dependencies),aa|=a.lanes,(o&a.childLanes)===0)if(n!==null){if(Po(n,a,o,!1),(o&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(i(153));if(a.child!==null){for(n=a.child,o=mr(n,n.pendingProps),a.child=o,o.return=a;n.sibling!==null;)n=n.sibling,o=o.sibling=mr(n,n.pendingProps),o.return=a;o.sibling=null}return a.child}function kf(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&Yl(n)))}function RS(n,a,o){switch(a.tag){case 3:de(a,a.stateNode.containerInfo),Gr(a,xt,n.memoizedState.cache),Bo();break;case 27:case 5:rt(a);break;case 4:de(a,a.stateNode.containerInfo);break;case 10:Gr(a,a.type,a.memoizedProps.value);break;case 13:var c=a.memoizedState;if(c!==null)return c.dehydrated!==null?(Kr(a),a.flags|=128,null):(o&a.child.childLanes)!==0?$0(n,a,o):(Kr(a),n=_r(n,a,o),n!==null?n.sibling:null);Kr(a);break;case 19:var f=(n.flags&128)!==0;if(c=(o&a.childLanes)!==0,c||(Po(n,a,o,!1),c=(o&a.childLanes)!==0),f){if(c)return I0(n,a,o);a.flags|=128}if(f=a.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),J(_t,_t.current),c)break;return null;case 22:case 23:return a.lanes=0,z0(n,a,o);case 24:Gr(a,xt,n.memoizedState.cache)}return _r(n,a,o)}function q0(n,a,o){if(n!==null)if(n.memoizedProps!==a.pendingProps)Et=!0;else{if(!kf(n,o)&&(a.flags&128)===0)return Et=!1,RS(n,a,o);Et=(n.flags&131072)!==0}else Et=!1,He&&(a.flags&1048576)!==0&&vv(a,Bl,a.index);switch(a.lanes=0,a.tag){case 16:e:{n=a.pendingProps;var c=a.elementType,f=c._init;if(c=f(c._payload),a.type=c,typeof c=="function")zd(c)?(n=$a(c,n),a.tag=1,a=U0(null,a,c,n,o)):(a.tag=0,a=yf(null,a,c,n,o));else{if(c!=null){if(f=c.$$typeof,f===U){a.tag=11,a=O0(null,a,c,n,o);break e}else if(f===F){a.tag=14,a=A0(null,a,c,n,o);break e}}throw a=je(c)||c,Error(i(306,a,""))}}return a;case 0:return yf(n,a,a.type,a.pendingProps,o);case 1:return c=a.type,f=$a(c,a.pendingProps),U0(n,a,c,f,o);case 3:e:{if(de(a,a.stateNode.containerInfo),n===null)throw Error(i(387));c=a.pendingProps;var m=a.memoizedState;f=m.element,Gd(n,a),Zo(a,c,null,o);var x=a.memoizedState;if(c=x.cache,Gr(a,xt,c),c!==m.cache&&qd(a,[xt],o,!0),Wo(),c=x.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:x.cache},a.updateQueue.baseState=m,a.memoizedState=m,a.flags&256){a=L0(n,a,c,o);break e}else if(c!==f){f=Sn(Error(i(424)),a),Yo(f),a=L0(n,a,c,o);break e}else{switch(n=a.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(ot=In(n.firstChild),Pt=a,He=!0,Ra=null,Jn=!0,o=b0(a,null,c,o),a.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Bo(),c===f){a=_r(n,a,o);break e}zt(n,a,c,o)}a=a.child}return a;case 26:return lc(n,a),n===null?(o=Xy(a.type,null,a.pendingProps,null))?a.memoizedState=o:He||(o=a.type,n=a.pendingProps,c=Sc(re.current).createElement(o),c[$t]=a,c[Gt]=n,jt(c,o,n),kt(c),a.stateNode=c):a.memoizedState=Xy(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return rt(a),n===null&&He&&(c=a.stateNode=By(a.type,a.pendingProps,re.current),Pt=a,Jn=!0,f=ot,la(a.type)?(ih=f,ot=In(c.firstChild)):ot=f),zt(n,a,a.pendingProps.children,o),lc(n,a),n===null&&(a.flags|=4194304),a.child;case 5:return n===null&&He&&((f=c=ot)&&(c=oT(c,a.type,a.pendingProps,Jn),c!==null?(a.stateNode=c,Pt=a,ot=In(c.firstChild),Jn=!1,f=!0):f=!1),f||za(a)),rt(a),f=a.type,m=a.pendingProps,x=n!==null?n.memoizedProps:null,c=m.children,th(f,m)?c=null:x!==null&&th(f,x)&&(a.flags|=32),a.memoizedState!==null&&(f=Jd(n,a,TS,null,null,o),bs._currentValue=f),lc(n,a),zt(n,a,c,o),a.child;case 6:return n===null&&He&&((n=o=ot)&&(o=sT(o,a.pendingProps,Jn),o!==null?(a.stateNode=o,Pt=a,ot=null,n=!0):n=!1),n||za(a)),null;case 13:return $0(n,a,o);case 4:return de(a,a.stateNode.containerInfo),c=a.pendingProps,n===null?a.child=$i(a,null,c,o):zt(n,a,c,o),a.child;case 11:return O0(n,a,a.type,a.pendingProps,o);case 7:return zt(n,a,a.pendingProps,o),a.child;case 8:return zt(n,a,a.pendingProps.children,o),a.child;case 12:return zt(n,a,a.pendingProps.children,o),a.child;case 10:return c=a.pendingProps,Gr(a,a.type,c.value),zt(n,a,c.children,o),a.child;case 9:return f=a.type._context,c=a.pendingProps.children,ja(a),f=Ht(f),c=c(f),a.flags|=1,zt(n,a,c,o),a.child;case 14:return A0(n,a,a.type,a.pendingProps,o);case 15:return R0(n,a,a.type,a.pendingProps,o);case 19:return I0(n,a,o);case 31:return c=a.pendingProps,o=a.mode,c={mode:c.mode,children:c.children},n===null?(o=cc(c,o),o.ref=a.ref,a.child=o,o.return=a,a=o):(o=mr(n.child,c),o.ref=a.ref,a.child=o,o.return=a,a=o),a;case 22:return z0(n,a,o);case 24:return ja(a),c=Ht(xt),n===null?(f=Pd(),f===null&&(f=We,m=Bd(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),a.memoizedState={parent:c,cache:f},Fd(a),Gr(a,xt,f)):((n.lanes&o)!==0&&(Gd(n,a),Zo(a,null,null,o),Wo()),f=n.memoizedState,m=a.memoizedState,f.parent!==c?(f={parent:c,cache:c},a.memoizedState=f,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=f),Gr(a,xt,c)):(c=m.cache,Gr(a,xt,c),c!==f.cache&&qd(a,[xt],o,!0))),zt(n,a,a.pendingProps.children,o),a.child;case 29:throw a.pendingProps}throw Error(i(156,a.tag))}function Sr(n){n.flags|=4}function B0(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Wy(a)){if(a=Cn.current,a!==null&&((Ue&4194048)===Ue?er!==null:(Ue&62914560)!==Ue&&(Ue&536870912)===0||a!==er))throw Vo=Xd,kv;n.flags|=8192}}function uc(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?wg():536870912,n.lanes|=a,Bi|=a)}function as(n,a){if(!He)switch(n.tailMode){case"hidden":a=n.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function at(n){var a=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(a)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&65011712,c|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=o,a}function zS(n,a,o){var c=a.pendingProps;switch(Ld(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(a),null;case 1:return at(a),null;case 3:return o=a.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),a.memoizedState.cache!==c&&(a.flags|=2048),br(xt),Me(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(qo(a)?Sr(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,wv())),at(a),null;case 26:return o=a.memoizedState,n===null?(Sr(a),o!==null?(at(a),B0(a,o)):(at(a),a.flags&=-16777217)):o?o!==n.memoizedState?(Sr(a),at(a),B0(a,o)):(at(a),a.flags&=-16777217):(n.memoizedProps!==c&&Sr(a),at(a),a.flags&=-16777217),null;case 27:Ln(a),o=re.current;var f=a.type;if(n!==null&&a.stateNode!=null)n.memoizedProps!==c&&Sr(a);else{if(!c){if(a.stateNode===null)throw Error(i(166));return at(a),null}n=te.current,qo(a)?yv(a):(n=By(f,c,o),a.stateNode=n,Sr(a))}return at(a),null;case 5:if(Ln(a),o=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==c&&Sr(a);else{if(!c){if(a.stateNode===null)throw Error(i(166));return at(a),null}if(n=te.current,qo(a))yv(a);else{switch(f=Sc(re.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof c.is=="string"?f.createElement("select",{is:c.is}):f.createElement("select"),c.multiple?n.multiple=!0:c.size&&(n.size=c.size);break;default:n=typeof c.is=="string"?f.createElement(o,{is:c.is}):f.createElement(o)}}n[$t]=a,n[Gt]=c;e:for(f=a.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===a)break e;for(;f.sibling===null;){if(f.return===null||f.return===a)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}a.stateNode=n;e:switch(jt(n,o,c),o){case"button":case"input":case"select":case"textarea":n=!!c.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Sr(a)}}return at(a),a.flags&=-16777217,null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==c&&Sr(a);else{if(typeof c!="string"&&a.stateNode===null)throw Error(i(166));if(n=re.current,qo(a)){if(n=a.stateNode,o=a.memoizedProps,c=null,f=Pt,f!==null)switch(f.tag){case 27:case 5:c=f.memoizedProps}n[$t]=a,n=!!(n.nodeValue===o||c!==null&&c.suppressHydrationWarning===!0||jy(n.nodeValue,o)),n||za(a)}else n=Sc(n).createTextNode(c),n[$t]=a,a.stateNode=n}return at(a),null;case 13:if(c=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=qo(a),c!==null&&c.dehydrated!==null){if(n===null){if(!f)throw Error(i(318));if(f=a.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[$t]=a}else Bo(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;at(a),f=!1}else f=wv(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return a.flags&256?(xr(a),a):(xr(a),null)}if(xr(a),(a.flags&128)!==0)return a.lanes=o,a;if(o=c!==null,n=n!==null&&n.memoizedState!==null,o){c=a.child,f=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(f=c.alternate.memoizedState.cachePool.pool);var m=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==f&&(c.flags|=2048)}return o!==n&&o&&(a.child.flags|=8192),uc(a,a.updateQueue),at(a),null;case 4:return Me(),n===null&&Wf(a.stateNode.containerInfo),at(a),null;case 10:return br(a.type),at(a),null;case 19:if(Z(_t),f=a.memoizedState,f===null)return at(a),null;if(c=(a.flags&128)!==0,m=f.rendering,m===null)if(c)as(f,!1);else{if(st!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(m=ic(n),m!==null){for(a.flags|=128,as(f,!1),n=m.updateQueue,a.updateQueue=n,uc(a,n),a.subtreeFlags=0,n=o,o=a.child;o!==null;)gv(o,n),o=o.sibling;return J(_t,_t.current&1|2),a.child}n=n.sibling}f.tail!==null&&Kn()>hc&&(a.flags|=128,c=!0,as(f,!1),a.lanes=4194304)}else{if(!c)if(n=ic(m),n!==null){if(a.flags|=128,c=!0,n=n.updateQueue,a.updateQueue=n,uc(a,n),as(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!He)return at(a),null}else 2*Kn()-f.renderingStartTime>hc&&o!==536870912&&(a.flags|=128,c=!0,as(f,!1),a.lanes=4194304);f.isBackwards?(m.sibling=a.child,a.child=m):(n=f.last,n!==null?n.sibling=m:a.child=m,f.last=m)}return f.tail!==null?(a=f.tail,f.rendering=a,f.tail=a.sibling,f.renderingStartTime=Kn(),a.sibling=null,n=_t.current,J(_t,c?n&1|2:n&1),a):(at(a),null);case 22:case 23:return xr(a),Zd(),c=a.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(a.flags|=8192):c&&(a.flags|=8192),c?(o&536870912)!==0&&(a.flags&128)===0&&(at(a),a.subtreeFlags&6&&(a.flags|=8192)):at(a),o=a.updateQueue,o!==null&&uc(a,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),c=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(c=a.memoizedState.cachePool.pool),c!==o&&(a.flags|=2048),n!==null&&Z(Ua),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),a.memoizedState.cache!==o&&(a.flags|=2048),br(xt),at(a),null;case 25:return null;case 30:return null}throw Error(i(156,a.tag))}function DS(n,a){switch(Ld(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return br(xt),Me(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return Ln(a),null;case 13:if(xr(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(i(340));Bo()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return Z(_t),null;case 4:return Me(),null;case 10:return br(a.type),null;case 22:case 23:return xr(a),Zd(),n!==null&&Z(Ua),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return br(xt),null;case 25:return null;default:return null}}function Y0(n,a){switch(Ld(a),a.tag){case 3:br(xt),Me();break;case 26:case 27:case 5:Ln(a);break;case 4:Me();break;case 13:xr(a);break;case 19:Z(_t);break;case 10:br(a.type);break;case 22:case 23:xr(a),Zd(),n!==null&&Z(Ua);break;case 24:br(xt)}}function is(n,a){try{var o=a.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&n)===n){c=void 0;var m=o.create,x=o.inst;c=m(),x.destroy=c}o=o.next}while(o!==f)}}catch(k){Ge(a,a.return,k)}}function ea(n,a,o){try{var c=a.updateQueue,f=c!==null?c.lastEffect:null;if(f!==null){var m=f.next;c=m;do{if((c.tag&n)===n){var x=c.inst,k=x.destroy;if(k!==void 0){x.destroy=void 0,f=a;var A=o,B=k;try{B()}catch(Q){Ge(f,A,Q)}}}c=c.next}while(c!==m)}}catch(Q){Ge(a,a.return,Q)}}function P0(n){var a=n.updateQueue;if(a!==null){var o=n.stateNode;try{Av(a,o)}catch(c){Ge(n,n.return,c)}}}function X0(n,a,o){o.props=$a(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(c){Ge(n,a,c)}}function os(n,a){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof o=="function"?n.refCleanup=o(c):o.current=c}}catch(f){Ge(n,a,f)}}function tr(n,a){var o=n.ref,c=n.refCleanup;if(o!==null)if(typeof c=="function")try{c()}catch(f){Ge(n,a,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){Ge(n,a,f)}else o.current=null}function F0(n){var a=n.type,o=n.memoizedProps,c=n.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":o.autoFocus&&c.focus();break e;case"img":o.src?c.src=o.src:o.srcSet&&(c.srcset=o.srcSet)}}catch(f){Ge(n,n.return,f)}}function Ef(n,a,o){try{var c=n.stateNode;tT(c,n.type,o,a),c[Gt]=a}catch(f){Ge(n,n.return,f)}}function G0(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&la(n.type)||n.tag===4}function Cf(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||G0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&la(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Mf(n,a,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,a):(a=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,a.appendChild(n),o=o._reactRootContainer,o!=null||a.onclick!==null||(a.onclick=_c));else if(c!==4&&(c===27&&la(n.type)&&(o=n.stateNode,a=null),n=n.child,n!==null))for(Mf(n,a,o),n=n.sibling;n!==null;)Mf(n,a,o),n=n.sibling}function dc(n,a,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,a?o.insertBefore(n,a):o.appendChild(n);else if(c!==4&&(c===27&&la(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(dc(n,a,o),n=n.sibling;n!==null;)dc(n,a,o),n=n.sibling}function V0(n){var a=n.stateNode,o=n.memoizedProps;try{for(var c=n.type,f=a.attributes;f.length;)a.removeAttributeNode(f[0]);jt(a,c,o),a[$t]=n,a[Gt]=o}catch(m){Ge(n,n.return,m)}}var Tr=!1,ut=!1,Nf=!1,Q0=typeof WeakSet=="function"?WeakSet:Set,Ct=null;function jS(n,a){if(n=n.containerInfo,Jf=Nc,n=ov(n),Ed(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var x=0,k=-1,A=-1,B=0,Q=0,K=n,Y=null;t:for(;;){for(var P;K!==o||f!==0&&K.nodeType!==3||(k=x+f),K!==m||c!==0&&K.nodeType!==3||(A=x+c),K.nodeType===3&&(x+=K.nodeValue.length),(P=K.firstChild)!==null;)Y=K,K=P;for(;;){if(K===n)break t;if(Y===o&&++B===f&&(k=x),Y===m&&++Q===c&&(A=x),(P=K.nextSibling)!==null)break;K=Y,Y=K.parentNode}K=P}o=k===-1||A===-1?null:{start:k,end:A}}else o=null}o=o||{start:0,end:0}}else o=null;for(eh={focusedElem:n,selectionRange:o},Nc=!1,Ct=a;Ct!==null;)if(a=Ct,n=a.child,(a.subtreeFlags&1024)!==0&&n!==null)n.return=a,Ct=n;else for(;Ct!==null;){switch(a=Ct,m=a.alternate,n=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,o=a,f=m.memoizedProps,m=m.memoizedState,c=o.stateNode;try{var ve=$a(o.type,f,o.elementType===o.type);n=c.getSnapshotBeforeUpdate(ve,m),c.__reactInternalSnapshotBeforeUpdate=n}catch(me){Ge(o,o.return,me)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,o=n.nodeType,o===9)rh(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":rh(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=a.sibling,n!==null){n.return=a.return,Ct=n;break}Ct=a.return}}function W0(n,a,o){var c=o.flags;switch(o.tag){case 0:case 11:case 15:ta(n,o),c&4&&is(5,o);break;case 1:if(ta(n,o),c&4)if(n=o.stateNode,a===null)try{n.componentDidMount()}catch(x){Ge(o,o.return,x)}else{var f=$a(o.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(f,a,n.__reactInternalSnapshotBeforeUpdate)}catch(x){Ge(o,o.return,x)}}c&64&&P0(o),c&512&&os(o,o.return);break;case 3:if(ta(n,o),c&64&&(n=o.updateQueue,n!==null)){if(a=null,o.child!==null)switch(o.child.tag){case 27:case 5:a=o.child.stateNode;break;case 1:a=o.child.stateNode}try{Av(n,a)}catch(x){Ge(o,o.return,x)}}break;case 27:a===null&&c&4&&V0(o);case 26:case 5:ta(n,o),a===null&&c&4&&F0(o),c&512&&os(o,o.return);break;case 12:ta(n,o);break;case 13:ta(n,o),c&4&&J0(n,o),c&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=PS.bind(null,o),lT(n,o))));break;case 22:if(c=o.memoizedState!==null||Tr,!c){a=a!==null&&a.memoizedState!==null||ut,f=Tr;var m=ut;Tr=c,(ut=a)&&!m?na(n,o,(o.subtreeFlags&8772)!==0):ta(n,o),Tr=f,ut=m}break;case 30:break;default:ta(n,o)}}function Z0(n){var a=n.alternate;a!==null&&(n.alternate=null,Z0(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&sd(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var et=null,Wt=!1;function kr(n,a,o){for(o=o.child;o!==null;)K0(n,a,o),o=o.sibling}function K0(n,a,o){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Co,o)}catch{}switch(o.tag){case 26:ut||tr(o,a),kr(n,a,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:ut||tr(o,a);var c=et,f=Wt;la(o.type)&&(et=o.stateNode,Wt=!1),kr(n,a,o),ms(o.stateNode),et=c,Wt=f;break;case 5:ut||tr(o,a);case 6:if(c=et,f=Wt,et=null,kr(n,a,o),et=c,Wt=f,et!==null)if(Wt)try{(et.nodeType===9?et.body:et.nodeName==="HTML"?et.ownerDocument.body:et).removeChild(o.stateNode)}catch(m){Ge(o,a,m)}else try{et.removeChild(o.stateNode)}catch(m){Ge(o,a,m)}break;case 18:et!==null&&(Wt?(n=et,Iy(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),Ss(n)):Iy(et,o.stateNode));break;case 4:c=et,f=Wt,et=o.stateNode.containerInfo,Wt=!0,kr(n,a,o),et=c,Wt=f;break;case 0:case 11:case 14:case 15:ut||ea(2,o,a),ut||ea(4,o,a),kr(n,a,o);break;case 1:ut||(tr(o,a),c=o.stateNode,typeof c.componentWillUnmount=="function"&&X0(o,a,c)),kr(n,a,o);break;case 21:kr(n,a,o);break;case 22:ut=(c=ut)||o.memoizedState!==null,kr(n,a,o),ut=c;break;default:kr(n,a,o)}}function J0(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Ss(n)}catch(o){Ge(a,a.return,o)}}function US(n){switch(n.tag){case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new Q0),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new Q0),a;default:throw Error(i(435,n.tag))}}function Of(n,a){var o=US(n);a.forEach(function(c){var f=XS.bind(null,n,c);o.has(c)||(o.add(c),c.then(f,f))})}function sn(n,a){var o=a.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c],m=n,x=a,k=x;e:for(;k!==null;){switch(k.tag){case 27:if(la(k.type)){et=k.stateNode,Wt=!1;break e}break;case 5:et=k.stateNode,Wt=!1;break e;case 3:case 4:et=k.stateNode.containerInfo,Wt=!0;break e}k=k.return}if(et===null)throw Error(i(160));K0(m,x,f),et=null,Wt=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)ey(a,n),a=a.sibling}var Hn=null;function ey(n,a){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:sn(a,n),ln(n),c&4&&(ea(3,n,n.return),is(3,n),ea(5,n,n.return));break;case 1:sn(a,n),ln(n),c&512&&(ut||o===null||tr(o,o.return)),c&64&&Tr&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?c:o.concat(c))));break;case 26:var f=Hn;if(sn(a,n),ln(n),c&512&&(ut||o===null||tr(o,o.return)),c&4){var m=o!==null?o.memoizedState:null;if(c=n.memoizedState,o===null)if(c===null)if(n.stateNode===null){e:{c=n.type,o=n.memoizedProps,f=f.ownerDocument||f;t:switch(c){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Oo]||m[$t]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(c),f.head.insertBefore(m,f.querySelector("head > title"))),jt(m,c,o),m[$t]=n,kt(m),c=m;break e;case"link":var x=Vy("link","href",f).get(c+(o.href||""));if(x){for(var k=0;k<x.length;k++)if(m=x[k],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){x.splice(k,1);break t}}m=f.createElement(c),jt(m,c,o),f.head.appendChild(m);break;case"meta":if(x=Vy("meta","content",f).get(c+(o.content||""))){for(k=0;k<x.length;k++)if(m=x[k],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){x.splice(k,1);break t}}m=f.createElement(c),jt(m,c,o),f.head.appendChild(m);break;default:throw Error(i(468,c))}m[$t]=n,kt(m),c=m}n.stateNode=c}else Qy(f,n.type,n.stateNode);else n.stateNode=Gy(f,c,n.memoizedProps);else m!==c?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,c===null?Qy(f,n.type,n.stateNode):Gy(f,c,n.memoizedProps)):c===null&&n.stateNode!==null&&Ef(n,n.memoizedProps,o.memoizedProps)}break;case 27:sn(a,n),ln(n),c&512&&(ut||o===null||tr(o,o.return)),o!==null&&c&4&&Ef(n,n.memoizedProps,o.memoizedProps);break;case 5:if(sn(a,n),ln(n),c&512&&(ut||o===null||tr(o,o.return)),n.flags&32){f=n.stateNode;try{wi(f,"")}catch(P){Ge(n,n.return,P)}}c&4&&n.stateNode!=null&&(f=n.memoizedProps,Ef(n,f,o!==null?o.memoizedProps:f)),c&1024&&(Nf=!0);break;case 6:if(sn(a,n),ln(n),c&4){if(n.stateNode===null)throw Error(i(162));c=n.memoizedProps,o=n.stateNode;try{o.nodeValue=c}catch(P){Ge(n,n.return,P)}}break;case 3:if(Ec=null,f=Hn,Hn=Tc(a.containerInfo),sn(a,n),Hn=f,ln(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Ss(a.containerInfo)}catch(P){Ge(n,n.return,P)}Nf&&(Nf=!1,ty(n));break;case 4:c=Hn,Hn=Tc(n.stateNode.containerInfo),sn(a,n),ln(n),Hn=c;break;case 12:sn(a,n),ln(n);break;case 13:sn(a,n),ln(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Uf=Kn()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Of(n,c)));break;case 22:f=n.memoizedState!==null;var A=o!==null&&o.memoizedState!==null,B=Tr,Q=ut;if(Tr=B||f,ut=Q||A,sn(a,n),ut=Q,Tr=B,ln(n),c&8192)e:for(a=n.stateNode,a._visibility=f?a._visibility&-2:a._visibility|1,f&&(o===null||A||Tr||ut||Ha(n)),o=null,a=n;;){if(a.tag===5||a.tag===26){if(o===null){A=o=a;try{if(m=A.stateNode,f)x=m.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{k=A.stateNode;var K=A.memoizedProps.style,Y=K!=null&&K.hasOwnProperty("display")?K.display:null;k.style.display=Y==null||typeof Y=="boolean"?"":(""+Y).trim()}}catch(P){Ge(A,A.return,P)}}}else if(a.tag===6){if(o===null){A=a;try{A.stateNode.nodeValue=f?"":A.memoizedProps}catch(P){Ge(A,A.return,P)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break e;for(;a.sibling===null;){if(a.return===null||a.return===n)break e;o===a&&(o=null),a=a.return}o===a&&(o=null),a.sibling.return=a.return,a=a.sibling}c&4&&(c=n.updateQueue,c!==null&&(o=c.retryQueue,o!==null&&(c.retryQueue=null,Of(n,o))));break;case 19:sn(a,n),ln(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Of(n,c)));break;case 30:break;case 21:break;default:sn(a,n),ln(n)}}function ln(n){var a=n.flags;if(a&2){try{for(var o,c=n.return;c!==null;){if(G0(c)){o=c;break}c=c.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var f=o.stateNode,m=Cf(n);dc(n,m,f);break;case 5:var x=o.stateNode;o.flags&32&&(wi(x,""),o.flags&=-33);var k=Cf(n);dc(n,k,x);break;case 3:case 4:var A=o.stateNode.containerInfo,B=Cf(n);Mf(n,B,A);break;default:throw Error(i(161))}}catch(Q){Ge(n,n.return,Q)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function ty(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;ty(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function ta(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)W0(n,a.alternate,a),a=a.sibling}function Ha(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:ea(4,a,a.return),Ha(a);break;case 1:tr(a,a.return);var o=a.stateNode;typeof o.componentWillUnmount=="function"&&X0(a,a.return,o),Ha(a);break;case 27:ms(a.stateNode);case 26:case 5:tr(a,a.return),Ha(a);break;case 22:a.memoizedState===null&&Ha(a);break;case 30:Ha(a);break;default:Ha(a)}n=n.sibling}}function na(n,a,o){for(o=o&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var c=a.alternate,f=n,m=a,x=m.flags;switch(m.tag){case 0:case 11:case 15:na(f,m,o),is(4,m);break;case 1:if(na(f,m,o),c=m,f=c.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(B){Ge(c,c.return,B)}if(c=m,f=c.updateQueue,f!==null){var k=c.stateNode;try{var A=f.shared.hiddenCallbacks;if(A!==null)for(f.shared.hiddenCallbacks=null,f=0;f<A.length;f++)Ov(A[f],k)}catch(B){Ge(c,c.return,B)}}o&&x&64&&P0(m),os(m,m.return);break;case 27:V0(m);case 26:case 5:na(f,m,o),o&&c===null&&x&4&&F0(m),os(m,m.return);break;case 12:na(f,m,o);break;case 13:na(f,m,o),o&&x&4&&J0(f,m);break;case 22:m.memoizedState===null&&na(f,m,o),os(m,m.return);break;case 30:break;default:na(f,m,o)}a=a.sibling}}function Af(n,a){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&Xo(o))}function Rf(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&Xo(n))}function nr(n,a,o,c){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)ny(n,a,o,c),a=a.sibling}function ny(n,a,o,c){var f=a.flags;switch(a.tag){case 0:case 11:case 15:nr(n,a,o,c),f&2048&&is(9,a);break;case 1:nr(n,a,o,c);break;case 3:nr(n,a,o,c),f&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&Xo(n)));break;case 12:if(f&2048){nr(n,a,o,c),n=a.stateNode;try{var m=a.memoizedProps,x=m.id,k=m.onPostCommit;typeof k=="function"&&k(x,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(A){Ge(a,a.return,A)}}else nr(n,a,o,c);break;case 13:nr(n,a,o,c);break;case 23:break;case 22:m=a.stateNode,x=a.alternate,a.memoizedState!==null?m._visibility&2?nr(n,a,o,c):ss(n,a):m._visibility&2?nr(n,a,o,c):(m._visibility|=2,Hi(n,a,o,c,(a.subtreeFlags&10256)!==0)),f&2048&&Af(x,a);break;case 24:nr(n,a,o,c),f&2048&&Rf(a.alternate,a);break;default:nr(n,a,o,c)}}function Hi(n,a,o,c,f){for(f=f&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var m=n,x=a,k=o,A=c,B=x.flags;switch(x.tag){case 0:case 11:case 15:Hi(m,x,k,A,f),is(8,x);break;case 23:break;case 22:var Q=x.stateNode;x.memoizedState!==null?Q._visibility&2?Hi(m,x,k,A,f):ss(m,x):(Q._visibility|=2,Hi(m,x,k,A,f)),f&&B&2048&&Af(x.alternate,x);break;case 24:Hi(m,x,k,A,f),f&&B&2048&&Rf(x.alternate,x);break;default:Hi(m,x,k,A,f)}a=a.sibling}}function ss(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var o=n,c=a,f=c.flags;switch(c.tag){case 22:ss(o,c),f&2048&&Af(c.alternate,c);break;case 24:ss(o,c),f&2048&&Rf(c.alternate,c);break;default:ss(o,c)}a=a.sibling}}var ls=8192;function Ii(n){if(n.subtreeFlags&ls)for(n=n.child;n!==null;)ry(n),n=n.sibling}function ry(n){switch(n.tag){case 26:Ii(n),n.flags&ls&&n.memoizedState!==null&&xT(Hn,n.memoizedState,n.memoizedProps);break;case 5:Ii(n);break;case 3:case 4:var a=Hn;Hn=Tc(n.stateNode.containerInfo),Ii(n),Hn=a;break;case 22:n.memoizedState===null&&(a=n.alternate,a!==null&&a.memoizedState!==null?(a=ls,ls=16777216,Ii(n),ls=a):Ii(n));break;default:Ii(n)}}function ay(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function cs(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var c=a[o];Ct=c,oy(c,n)}ay(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)iy(n),n=n.sibling}function iy(n){switch(n.tag){case 0:case 11:case 15:cs(n),n.flags&2048&&ea(9,n,n.return);break;case 3:cs(n);break;case 12:cs(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&2&&(n.return===null||n.return.tag!==13)?(a._visibility&=-3,fc(n)):cs(n);break;default:cs(n)}}function fc(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var c=a[o];Ct=c,oy(c,n)}ay(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:ea(8,a,a.return),fc(a);break;case 22:o=a.stateNode,o._visibility&2&&(o._visibility&=-3,fc(a));break;default:fc(a)}n=n.sibling}}function oy(n,a){for(;Ct!==null;){var o=Ct;switch(o.tag){case 0:case 11:case 15:ea(8,o,a);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var c=o.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Xo(o.memoizedState.cache)}if(c=o.child,c!==null)c.return=o,Ct=c;else e:for(o=n;Ct!==null;){c=Ct;var f=c.sibling,m=c.return;if(Z0(c),c===o){Ct=null;break e}if(f!==null){f.return=m,Ct=f;break e}Ct=m}}}var LS={getCacheForType:function(n){var a=Ht(xt),o=a.data.get(n);return o===void 0&&(o=n(),a.data.set(n,o)),o}},$S=typeof WeakMap=="function"?WeakMap:Map,qe=0,We=null,Oe=null,Ue=0,Be=0,cn=null,ra=!1,qi=!1,zf=!1,Er=0,st=0,aa=0,Ia=0,Df=0,Mn=0,Bi=0,us=null,Zt=null,jf=!1,Uf=0,hc=1/0,pc=null,ia=null,Dt=0,oa=null,Yi=null,Pi=0,Lf=0,$f=null,sy=null,ds=0,Hf=null;function un(){if((qe&2)!==0&&Ue!==0)return Ue&-Ue;if(E.T!==null){var n=Ai;return n!==0?n:Ff()}return Sg()}function ly(){Mn===0&&(Mn=(Ue&536870912)===0||He?bg():536870912);var n=Cn.current;return n!==null&&(n.flags|=32),Mn}function dn(n,a,o){(n===We&&(Be===2||Be===9)||n.cancelPendingCommit!==null)&&(Xi(n,0),sa(n,Ue,Mn,!1)),No(n,o),((qe&2)===0||n!==We)&&(n===We&&((qe&2)===0&&(Ia|=o),st===4&&sa(n,Ue,Mn,!1)),rr(n))}function cy(n,a,o){if((qe&6)!==0)throw Error(i(327));var c=!o&&(a&124)===0&&(a&n.expiredLanes)===0||Mo(n,a),f=c?qS(n,a):Bf(n,a,!0),m=c;do{if(f===0){qi&&!c&&sa(n,a,0,!1);break}else{if(o=n.current.alternate,m&&!HS(o)){f=Bf(n,a,!1),m=!1;continue}if(f===2){if(m=a,n.errorRecoveryDisabledLanes&m)var x=0;else x=n.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){a=x;e:{var k=n;f=us;var A=k.current.memoizedState.isDehydrated;if(A&&(Xi(k,x).flags|=256),x=Bf(k,x,!1),x!==2){if(zf&&!A){k.errorRecoveryDisabledLanes|=m,Ia|=m,f=4;break e}m=Zt,Zt=f,m!==null&&(Zt===null?Zt=m:Zt.push.apply(Zt,m))}f=x}if(m=!1,f!==2)continue}}if(f===1){Xi(n,0),sa(n,a,0,!0);break}e:{switch(c=n,m=f,m){case 0:case 1:throw Error(i(345));case 4:if((a&4194048)!==a)break;case 6:sa(c,a,Mn,!ra);break e;case 2:Zt=null;break;case 3:case 5:break;default:throw Error(i(329))}if((a&62914560)===a&&(f=Uf+300-Kn(),10<f)){if(sa(c,a,Mn,!ra),kl(c,0,!0)!==0)break e;c.timeoutHandle=$y(uy.bind(null,c,o,Zt,pc,jf,a,Mn,Ia,Bi,ra,m,2,-0,0),f);break e}uy(c,o,Zt,pc,jf,a,Mn,Ia,Bi,ra,m,0,-0,0)}}break}while(!0);rr(n)}function uy(n,a,o,c,f,m,x,k,A,B,Q,K,Y,P){if(n.timeoutHandle=-1,K=a.subtreeFlags,(K&8192||(K&16785408)===16785408)&&(ys={stylesheets:null,count:0,unsuspend:wT},ry(a),K=_T(),K!==null)){n.cancelPendingCommit=K(vy.bind(null,n,a,m,o,c,f,x,k,A,Q,1,Y,P)),sa(n,m,x,!B);return}vy(n,a,m,o,c,f,x,k,A)}function HS(n){for(var a=n;;){var o=a.tag;if((o===0||o===11||o===15)&&a.flags&16384&&(o=a.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var c=0;c<o.length;c++){var f=o[c],m=f.getSnapshot;f=f.value;try{if(!an(m(),f))return!1}catch{return!1}}if(o=a.child,a.subtreeFlags&16384&&o!==null)o.return=a,a=o;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function sa(n,a,o,c){a&=~Df,a&=~Ia,n.suspendedLanes|=a,n.pingedLanes&=~a,c&&(n.warmLanes|=a),c=n.expirationTimes;for(var f=a;0<f;){var m=31-rn(f),x=1<<m;c[m]=-1,f&=~x}o!==0&&xg(n,o,a)}function mc(){return(qe&6)===0?(fs(0),!1):!0}function If(){if(Oe!==null){if(Be===0)var n=Oe.return;else n=Oe,yr=Da=null,nf(n),Li=null,ns=0,n=Oe;for(;n!==null;)Y0(n.alternate,n),n=n.return;Oe=null}}function Xi(n,a){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,rT(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),If(),We=n,Oe=o=mr(n.current,null),Ue=a,Be=0,cn=null,ra=!1,qi=Mo(n,a),zf=!1,Bi=Mn=Df=Ia=aa=st=0,Zt=us=null,jf=!1,(a&8)!==0&&(a|=a&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=a;0<c;){var f=31-rn(c),m=1<<f;a|=n[f],c&=~m}return Er=a,Ll(),o}function dy(n,a){ke=null,E.H=nc,a===Go||a===Fl?(a=Mv(),Be=3):a===kv?(a=Mv(),Be=4):Be=a===N0?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,cn=a,Oe===null&&(st=1,sc(n,Sn(a,n.current)))}function fy(){var n=E.H;return E.H=nc,n===null?nc:n}function hy(){var n=E.A;return E.A=LS,n}function qf(){st=4,ra||(Ue&4194048)!==Ue&&Cn.current!==null||(qi=!0),(aa&134217727)===0&&(Ia&134217727)===0||We===null||sa(We,Ue,Mn,!1)}function Bf(n,a,o){var c=qe;qe|=2;var f=fy(),m=hy();(We!==n||Ue!==a)&&(pc=null,Xi(n,a)),a=!1;var x=st;e:do try{if(Be!==0&&Oe!==null){var k=Oe,A=cn;switch(Be){case 8:If(),x=6;break e;case 3:case 2:case 9:case 6:Cn.current===null&&(a=!0);var B=Be;if(Be=0,cn=null,Fi(n,k,A,B),o&&qi){x=0;break e}break;default:B=Be,Be=0,cn=null,Fi(n,k,A,B)}}IS(),x=st;break}catch(Q){dy(n,Q)}while(!0);return a&&n.shellSuspendCounter++,yr=Da=null,qe=c,E.H=f,E.A=m,Oe===null&&(We=null,Ue=0,Ll()),x}function IS(){for(;Oe!==null;)py(Oe)}function qS(n,a){var o=qe;qe|=2;var c=fy(),f=hy();We!==n||Ue!==a?(pc=null,hc=Kn()+500,Xi(n,a)):qi=Mo(n,a);e:do try{if(Be!==0&&Oe!==null){a=Oe;var m=cn;t:switch(Be){case 1:Be=0,cn=null,Fi(n,a,m,1);break;case 2:case 9:if(Ev(m)){Be=0,cn=null,my(a);break}a=function(){Be!==2&&Be!==9||We!==n||(Be=7),rr(n)},m.then(a,a);break e;case 3:Be=7;break e;case 4:Be=5;break e;case 7:Ev(m)?(Be=0,cn=null,my(a)):(Be=0,cn=null,Fi(n,a,m,7));break;case 5:var x=null;switch(Oe.tag){case 26:x=Oe.memoizedState;case 5:case 27:var k=Oe;if(!x||Wy(x)){Be=0,cn=null;var A=k.sibling;if(A!==null)Oe=A;else{var B=k.return;B!==null?(Oe=B,gc(B)):Oe=null}break t}}Be=0,cn=null,Fi(n,a,m,5);break;case 6:Be=0,cn=null,Fi(n,a,m,6);break;case 8:If(),st=6;break e;default:throw Error(i(462))}}BS();break}catch(Q){dy(n,Q)}while(!0);return yr=Da=null,E.H=c,E.A=f,qe=o,Oe!==null?0:(We=null,Ue=0,Ll(),st)}function BS(){for(;Oe!==null&&!u_();)py(Oe)}function py(n){var a=q0(n.alternate,n,Er);n.memoizedProps=n.pendingProps,a===null?gc(n):Oe=a}function my(n){var a=n,o=a.alternate;switch(a.tag){case 15:case 0:a=j0(o,a,a.pendingProps,a.type,void 0,Ue);break;case 11:a=j0(o,a,a.pendingProps,a.type.render,a.ref,Ue);break;case 5:nf(a);default:Y0(o,a),a=Oe=gv(a,Er),a=q0(o,a,Er)}n.memoizedProps=n.pendingProps,a===null?gc(n):Oe=a}function Fi(n,a,o,c){yr=Da=null,nf(a),Li=null,ns=0;var f=a.return;try{if(AS(n,f,a,o,Ue)){st=1,sc(n,Sn(o,n.current)),Oe=null;return}}catch(m){if(f!==null)throw Oe=f,m;st=1,sc(n,Sn(o,n.current)),Oe=null;return}a.flags&32768?(He||c===1?n=!0:qi||(Ue&536870912)!==0?n=!1:(ra=n=!0,(c===2||c===9||c===3||c===6)&&(c=Cn.current,c!==null&&c.tag===13&&(c.flags|=16384))),gy(a,n)):gc(a)}function gc(n){var a=n;do{if((a.flags&32768)!==0){gy(a,ra);return}n=a.return;var o=zS(a.alternate,a,Er);if(o!==null){Oe=o;return}if(a=a.sibling,a!==null){Oe=a;return}Oe=a=n}while(a!==null);st===0&&(st=5)}function gy(n,a){do{var o=DS(n.alternate,n);if(o!==null){o.flags&=32767,Oe=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!a&&(n=n.sibling,n!==null)){Oe=n;return}Oe=n=o}while(n!==null);st=6,Oe=null}function vy(n,a,o,c,f,m,x,k,A){n.cancelPendingCommit=null;do vc();while(Dt!==0);if((qe&6)!==0)throw Error(i(327));if(a!==null){if(a===n.current)throw Error(i(177));if(m=a.lanes|a.childLanes,m|=Ad,w_(n,o,m,x,k,A),n===We&&(Oe=We=null,Ue=0),Yi=a,oa=n,Pi=o,Lf=m,$f=f,sy=c,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,FS(_l,function(){return _y(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||c){c=E.T,E.T=null,f=R.p,R.p=2,x=qe,qe|=4;try{jS(n,a,o)}finally{qe=x,R.p=f,E.T=c}}Dt=1,yy(),by(),wy()}}function yy(){if(Dt===1){Dt=0;var n=oa,a=Yi,o=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||o){o=E.T,E.T=null;var c=R.p;R.p=2;var f=qe;qe|=4;try{ey(a,n);var m=eh,x=ov(n.containerInfo),k=m.focusedElem,A=m.selectionRange;if(x!==k&&k&&k.ownerDocument&&iv(k.ownerDocument.documentElement,k)){if(A!==null&&Ed(k)){var B=A.start,Q=A.end;if(Q===void 0&&(Q=B),"selectionStart"in k)k.selectionStart=B,k.selectionEnd=Math.min(Q,k.value.length);else{var K=k.ownerDocument||document,Y=K&&K.defaultView||window;if(Y.getSelection){var P=Y.getSelection(),ve=k.textContent.length,me=Math.min(A.start,ve),Xe=A.end===void 0?me:Math.min(A.end,ve);!P.extend&&me>Xe&&(x=Xe,Xe=me,me=x);var H=av(k,me),L=av(k,Xe);if(H&&L&&(P.rangeCount!==1||P.anchorNode!==H.node||P.anchorOffset!==H.offset||P.focusNode!==L.node||P.focusOffset!==L.offset)){var I=K.createRange();I.setStart(H.node,H.offset),P.removeAllRanges(),me>Xe?(P.addRange(I),P.extend(L.node,L.offset)):(I.setEnd(L.node,L.offset),P.addRange(I))}}}}for(K=[],P=k;P=P.parentNode;)P.nodeType===1&&K.push({element:P,left:P.scrollLeft,top:P.scrollTop});for(typeof k.focus=="function"&&k.focus(),k=0;k<K.length;k++){var W=K[k];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}Nc=!!Jf,eh=Jf=null}finally{qe=f,R.p=c,E.T=o}}n.current=a,Dt=2}}function by(){if(Dt===2){Dt=0;var n=oa,a=Yi,o=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||o){o=E.T,E.T=null;var c=R.p;R.p=2;var f=qe;qe|=4;try{W0(n,a.alternate,a)}finally{qe=f,R.p=c,E.T=o}}Dt=3}}function wy(){if(Dt===4||Dt===3){Dt=0,d_();var n=oa,a=Yi,o=Pi,c=sy;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Dt=5:(Dt=0,Yi=oa=null,xy(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(ia=null),id(o),a=a.stateNode,nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Co,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=E.T,f=R.p,R.p=2,E.T=null;try{for(var m=n.onRecoverableError,x=0;x<c.length;x++){var k=c[x];m(k.value,{componentStack:k.stack})}}finally{E.T=a,R.p=f}}(Pi&3)!==0&&vc(),rr(n),f=n.pendingLanes,(o&4194090)!==0&&(f&42)!==0?n===Hf?ds++:(ds=0,Hf=n):ds=0,fs(0)}}function xy(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,Xo(a)))}function vc(n){return yy(),by(),wy(),_y()}function _y(){if(Dt!==5)return!1;var n=oa,a=Lf;Lf=0;var o=id(Pi),c=E.T,f=R.p;try{R.p=32>o?32:o,E.T=null,o=$f,$f=null;var m=oa,x=Pi;if(Dt=0,Yi=oa=null,Pi=0,(qe&6)!==0)throw Error(i(331));var k=qe;if(qe|=4,iy(m.current),ny(m,m.current,x,o),qe=k,fs(0,!1),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Co,m)}catch{}return!0}finally{R.p=f,E.T=c,xy(n,a)}}function Sy(n,a,o){a=Sn(o,a),a=vf(n.stateNode,a,2),n=Wr(n,a,2),n!==null&&(No(n,2),rr(n))}function Ge(n,a,o){if(n.tag===3)Sy(n,n,o);else for(;a!==null;){if(a.tag===3){Sy(a,n,o);break}else if(a.tag===1){var c=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ia===null||!ia.has(c))){n=Sn(o,n),o=C0(2),c=Wr(a,o,2),c!==null&&(M0(o,c,a,n),No(c,2),rr(c));break}}a=a.return}}function Yf(n,a,o){var c=n.pingCache;if(c===null){c=n.pingCache=new $S;var f=new Set;c.set(a,f)}else f=c.get(a),f===void 0&&(f=new Set,c.set(a,f));f.has(o)||(zf=!0,f.add(o),n=YS.bind(null,n,a,o),a.then(n,n))}function YS(n,a,o){var c=n.pingCache;c!==null&&c.delete(a),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,We===n&&(Ue&o)===o&&(st===4||st===3&&(Ue&62914560)===Ue&&300>Kn()-Uf?(qe&2)===0&&Xi(n,0):Df|=o,Bi===Ue&&(Bi=0)),rr(n)}function Ty(n,a){a===0&&(a=wg()),n=Ci(n,a),n!==null&&(No(n,a),rr(n))}function PS(n){var a=n.memoizedState,o=0;a!==null&&(o=a.retryLane),Ty(n,o)}function XS(n,a){var o=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(a),Ty(n,o)}function FS(n,a){return Yr(n,a)}var yc=null,Gi=null,Pf=!1,bc=!1,Xf=!1,qa=0;function rr(n){n!==Gi&&n.next===null&&(Gi===null?yc=Gi=n:Gi=Gi.next=n),bc=!0,Pf||(Pf=!0,VS())}function fs(n,a){if(!Xf&&bc){Xf=!0;do for(var o=!1,c=yc;c!==null;){if(n!==0){var f=c.pendingLanes;if(f===0)var m=0;else{var x=c.suspendedLanes,k=c.pingedLanes;m=(1<<31-rn(42|n)+1)-1,m&=f&~(x&~k),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,My(c,m))}else m=Ue,m=kl(c,c===We?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||Mo(c,m)||(o=!0,My(c,m));c=c.next}while(o);Xf=!1}}function GS(){ky()}function ky(){bc=Pf=!1;var n=0;qa!==0&&(nT()&&(n=qa),qa=0);for(var a=Kn(),o=null,c=yc;c!==null;){var f=c.next,m=Ey(c,a);m===0?(c.next=null,o===null?yc=f:o.next=f,f===null&&(Gi=o)):(o=c,(n!==0||(m&3)!==0)&&(bc=!0)),c=f}fs(n)}function Ey(n,a){for(var o=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var x=31-rn(m),k=1<<x,A=f[x];A===-1?((k&o)===0||(k&c)!==0)&&(f[x]=b_(k,a)):A<=a&&(n.expiredLanes|=k),m&=~k}if(a=We,o=Ue,o=kl(n,n===a?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,o===0||n===a&&(Be===2||Be===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&fi(c),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||Mo(n,o)){if(a=o&-o,a===n.callbackPriority)return a;switch(c!==null&&fi(c),id(o)){case 2:case 8:o=vg;break;case 32:o=_l;break;case 268435456:o=yg;break;default:o=_l}return c=Cy.bind(null,n),o=Yr(o,c),n.callbackPriority=a,n.callbackNode=o,a}return c!==null&&c!==null&&fi(c),n.callbackPriority=2,n.callbackNode=null,2}function Cy(n,a){if(Dt!==0&&Dt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(vc()&&n.callbackNode!==o)return null;var c=Ue;return c=kl(n,n===We?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:(cy(n,c,a),Ey(n,Kn()),n.callbackNode!=null&&n.callbackNode===o?Cy.bind(null,n):null)}function My(n,a){if(vc())return null;cy(n,a,!0)}function VS(){aT(function(){(qe&6)!==0?Yr(gg,GS):ky()})}function Ff(){return qa===0&&(qa=bg()),qa}function Ny(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ol(""+n)}function Oy(n,a){var o=a.ownerDocument.createElement("input");return o.name=a.name,o.value=a.value,n.id&&o.setAttribute("form",n.id),a.parentNode.insertBefore(o,a),n=new FormData(n),o.parentNode.removeChild(o),n}function QS(n,a,o,c,f){if(a==="submit"&&o&&o.stateNode===f){var m=Ny((f[Gt]||null).action),x=c.submitter;x&&(a=(a=x[Gt]||null)?Ny(a.formAction):x.getAttribute("formAction"),a!==null&&(m=a,x=null));var k=new Dl("action","action",null,c,f);n.push({event:k,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(qa!==0){var A=x?Oy(f,x):new FormData(f);ff(o,{pending:!0,data:A,method:f.method,action:m},null,A)}}else typeof m=="function"&&(k.preventDefault(),A=x?Oy(f,x):new FormData(f),ff(o,{pending:!0,data:A,method:f.method,action:m},m,A))},currentTarget:f}]})}}for(var Gf=0;Gf<Od.length;Gf++){var Vf=Od[Gf],WS=Vf.toLowerCase(),ZS=Vf[0].toUpperCase()+Vf.slice(1);$n(WS,"on"+ZS)}$n(cv,"onAnimationEnd"),$n(uv,"onAnimationIteration"),$n(dv,"onAnimationStart"),$n("dblclick","onDoubleClick"),$n("focusin","onFocus"),$n("focusout","onBlur"),$n(pS,"onTransitionRun"),$n(mS,"onTransitionStart"),$n(gS,"onTransitionCancel"),$n(fv,"onTransitionEnd"),vi("onMouseEnter",["mouseout","mouseover"]),vi("onMouseLeave",["mouseout","mouseover"]),vi("onPointerEnter",["pointerout","pointerover"]),vi("onPointerLeave",["pointerout","pointerover"]),ka("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ka("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ka("onBeforeInput",["compositionend","keypress","textInput","paste"]),ka("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ka("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ka("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),KS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hs));function Ay(n,a){a=(a&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],f=c.event;c=c.listeners;e:{var m=void 0;if(a)for(var x=c.length-1;0<=x;x--){var k=c[x],A=k.instance,B=k.currentTarget;if(k=k.listener,A!==m&&f.isPropagationStopped())break e;m=k,f.currentTarget=B;try{m(f)}catch(Q){oc(Q)}f.currentTarget=null,m=A}else for(x=0;x<c.length;x++){if(k=c[x],A=k.instance,B=k.currentTarget,k=k.listener,A!==m&&f.isPropagationStopped())break e;m=k,f.currentTarget=B;try{m(f)}catch(Q){oc(Q)}f.currentTarget=null,m=A}}}}function Ae(n,a){var o=a[od];o===void 0&&(o=a[od]=new Set);var c=n+"__bubble";o.has(c)||(Ry(a,n,2,!1),o.add(c))}function Qf(n,a,o){var c=0;a&&(c|=4),Ry(o,n,c,a)}var wc="_reactListening"+Math.random().toString(36).slice(2);function Wf(n){if(!n[wc]){n[wc]=!0,kg.forEach(function(o){o!=="selectionchange"&&(KS.has(o)||Qf(o,!1,n),Qf(o,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[wc]||(a[wc]=!0,Qf("selectionchange",!1,a))}}function Ry(n,a,o,c){switch(nb(a)){case 2:var f=kT;break;case 8:f=ET;break;default:f=uh}o=f.bind(null,a,o,n),f=void 0,!vd||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(a,o,{capture:!0,passive:f}):n.addEventListener(a,o,!0):f!==void 0?n.addEventListener(a,o,{passive:f}):n.addEventListener(a,o,!1)}function Zf(n,a,o,c,f){var m=c;if((a&1)===0&&(a&2)===0&&c!==null)e:for(;;){if(c===null)return;var x=c.tag;if(x===3||x===4){var k=c.stateNode.containerInfo;if(k===f)break;if(x===4)for(x=c.return;x!==null;){var A=x.tag;if((A===3||A===4)&&x.stateNode.containerInfo===f)return;x=x.return}for(;k!==null;){if(x=pi(k),x===null)return;if(A=x.tag,A===5||A===6||A===26||A===27){c=m=x;continue e}k=k.parentNode}}c=c.return}Hg(function(){var B=m,Q=md(o),K=[];e:{var Y=hv.get(n);if(Y!==void 0){var P=Dl,ve=n;switch(n){case"keypress":if(Rl(o)===0)break e;case"keydown":case"keyup":P=F_;break;case"focusin":ve="focus",P=xd;break;case"focusout":ve="blur",P=xd;break;case"beforeblur":case"afterblur":P=xd;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=Bg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=D_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=Q_;break;case cv:case uv:case dv:P=L_;break;case fv:P=Z_;break;case"scroll":case"scrollend":P=R_;break;case"wheel":P=J_;break;case"copy":case"cut":case"paste":P=H_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=Pg;break;case"toggle":case"beforetoggle":P=tS}var me=(a&4)!==0,Xe=!me&&(n==="scroll"||n==="scrollend"),H=me?Y!==null?Y+"Capture":null:Y;me=[];for(var L=B,I;L!==null;){var W=L;if(I=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||I===null||H===null||(W=Ro(L,H),W!=null&&me.push(ps(L,W,I))),Xe)break;L=L.return}0<me.length&&(Y=new P(Y,ve,null,o,Q),K.push({event:Y,listeners:me}))}}if((a&7)===0){e:{if(Y=n==="mouseover"||n==="pointerover",P=n==="mouseout"||n==="pointerout",Y&&o!==pd&&(ve=o.relatedTarget||o.fromElement)&&(pi(ve)||ve[hi]))break e;if((P||Y)&&(Y=Q.window===Q?Q:(Y=Q.ownerDocument)?Y.defaultView||Y.parentWindow:window,P?(ve=o.relatedTarget||o.toElement,P=B,ve=ve?pi(ve):null,ve!==null&&(Xe=l(ve),me=ve.tag,ve!==Xe||me!==5&&me!==27&&me!==6)&&(ve=null)):(P=null,ve=B),P!==ve)){if(me=Bg,W="onMouseLeave",H="onMouseEnter",L="mouse",(n==="pointerout"||n==="pointerover")&&(me=Pg,W="onPointerLeave",H="onPointerEnter",L="pointer"),Xe=P==null?Y:Ao(P),I=ve==null?Y:Ao(ve),Y=new me(W,L+"leave",P,o,Q),Y.target=Xe,Y.relatedTarget=I,W=null,pi(Q)===B&&(me=new me(H,L+"enter",ve,o,Q),me.target=I,me.relatedTarget=Xe,W=me),Xe=W,P&&ve)t:{for(me=P,H=ve,L=0,I=me;I;I=Vi(I))L++;for(I=0,W=H;W;W=Vi(W))I++;for(;0<L-I;)me=Vi(me),L--;for(;0<I-L;)H=Vi(H),I--;for(;L--;){if(me===H||H!==null&&me===H.alternate)break t;me=Vi(me),H=Vi(H)}me=null}else me=null;P!==null&&zy(K,Y,P,me,!1),ve!==null&&Xe!==null&&zy(K,Xe,ve,me,!0)}}e:{if(Y=B?Ao(B):window,P=Y.nodeName&&Y.nodeName.toLowerCase(),P==="select"||P==="input"&&Y.type==="file")var le=Kg;else if(Wg(Y))if(Jg)le=dS;else{le=cS;var Ne=lS}else P=Y.nodeName,!P||P.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?B&&hd(B.elementType)&&(le=Kg):le=uS;if(le&&(le=le(n,B))){Zg(K,le,o,Q);break e}Ne&&Ne(n,Y,B),n==="focusout"&&B&&Y.type==="number"&&B.memoizedProps.value!=null&&fd(Y,"number",Y.value)}switch(Ne=B?Ao(B):window,n){case"focusin":(Wg(Ne)||Ne.contentEditable==="true")&&(Ti=Ne,Cd=B,Io=null);break;case"focusout":Io=Cd=Ti=null;break;case"mousedown":Md=!0;break;case"contextmenu":case"mouseup":case"dragend":Md=!1,sv(K,o,Q);break;case"selectionchange":if(hS)break;case"keydown":case"keyup":sv(K,o,Q)}var fe;if(Sd)e:{switch(n){case"compositionstart":var ge="onCompositionStart";break e;case"compositionend":ge="onCompositionEnd";break e;case"compositionupdate":ge="onCompositionUpdate";break e}ge=void 0}else Si?Vg(n,o)&&(ge="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ge="onCompositionStart");ge&&(Xg&&o.locale!=="ko"&&(Si||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&Si&&(fe=Ig()):(Fr=Q,yd="value"in Fr?Fr.value:Fr.textContent,Si=!0)),Ne=xc(B,ge),0<Ne.length&&(ge=new Yg(ge,n,null,o,Q),K.push({event:ge,listeners:Ne}),fe?ge.data=fe:(fe=Qg(o),fe!==null&&(ge.data=fe)))),(fe=rS?aS(n,o):iS(n,o))&&(ge=xc(B,"onBeforeInput"),0<ge.length&&(Ne=new Yg("onBeforeInput","beforeinput",null,o,Q),K.push({event:Ne,listeners:ge}),Ne.data=fe)),QS(K,n,B,o,Q)}Ay(K,a)})}function ps(n,a,o){return{instance:n,listener:a,currentTarget:o}}function xc(n,a){for(var o=a+"Capture",c=[];n!==null;){var f=n,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Ro(n,o),f!=null&&c.unshift(ps(n,f,m)),f=Ro(n,a),f!=null&&c.push(ps(n,f,m))),n.tag===3)return c;n=n.return}return[]}function Vi(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function zy(n,a,o,c,f){for(var m=a._reactName,x=[];o!==null&&o!==c;){var k=o,A=k.alternate,B=k.stateNode;if(k=k.tag,A!==null&&A===c)break;k!==5&&k!==26&&k!==27||B===null||(A=B,f?(B=Ro(o,m),B!=null&&x.unshift(ps(o,B,A))):f||(B=Ro(o,m),B!=null&&x.push(ps(o,B,A)))),o=o.return}x.length!==0&&n.push({event:a,listeners:x})}var JS=/\r\n?/g,eT=/\u0000|\uFFFD/g;function Dy(n){return(typeof n=="string"?n:""+n).replace(JS,`
`).replace(eT,"")}function jy(n,a){return a=Dy(a),Dy(n)===a}function _c(){}function Pe(n,a,o,c,f,m){switch(o){case"children":typeof c=="string"?a==="body"||a==="textarea"&&c===""||wi(n,c):(typeof c=="number"||typeof c=="bigint")&&a!=="body"&&wi(n,""+c);break;case"className":Cl(n,"class",c);break;case"tabIndex":Cl(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Cl(n,o,c);break;case"style":Lg(n,c,m);break;case"data":if(a!=="object"){Cl(n,"data",c);break}case"src":case"href":if(c===""&&(a!=="a"||o!=="href")){n.removeAttribute(o);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(o);break}c=Ol(""+c),n.setAttribute(o,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(a!=="input"&&Pe(n,a,"name",f.name,f,null),Pe(n,a,"formEncType",f.formEncType,f,null),Pe(n,a,"formMethod",f.formMethod,f,null),Pe(n,a,"formTarget",f.formTarget,f,null)):(Pe(n,a,"encType",f.encType,f,null),Pe(n,a,"method",f.method,f,null),Pe(n,a,"target",f.target,f,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(o);break}c=Ol(""+c),n.setAttribute(o,c);break;case"onClick":c!=null&&(n.onclick=_c);break;case"onScroll":c!=null&&Ae("scroll",n);break;case"onScrollEnd":c!=null&&Ae("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(o=c.__html,o!=null){if(f.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}o=Ol(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(o,""+c):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":c===!0?n.setAttribute(o,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(o,c):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(o,c):n.removeAttribute(o);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(o):n.setAttribute(o,c);break;case"popover":Ae("beforetoggle",n),Ae("toggle",n),El(n,"popover",c);break;case"xlinkActuate":hr(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":hr(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":hr(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":hr(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":hr(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":hr(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":hr(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":hr(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":hr(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":El(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=O_.get(o)||o,El(n,o,c))}}function Kf(n,a,o,c,f,m){switch(o){case"style":Lg(n,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(o=c.__html,o!=null){if(f.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"children":typeof c=="string"?wi(n,c):(typeof c=="number"||typeof c=="bigint")&&wi(n,""+c);break;case"onScroll":c!=null&&Ae("scroll",n);break;case"onScrollEnd":c!=null&&Ae("scrollend",n);break;case"onClick":c!=null&&(n.onclick=_c);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Eg.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),a=o.slice(2,f?o.length-7:void 0),m=n[Gt]||null,m=m!=null?m[o]:null,typeof m=="function"&&n.removeEventListener(a,m,f),typeof c=="function")){typeof m!="function"&&m!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(a,c,f);break e}o in n?n[o]=c:c===!0?n.setAttribute(o,""):El(n,o,c)}}}function jt(n,a,o){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ae("error",n),Ae("load",n);var c=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var x=o[m];if(x!=null)switch(m){case"src":c=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Pe(n,a,m,x,o,null)}}f&&Pe(n,a,"srcSet",o.srcSet,o,null),c&&Pe(n,a,"src",o.src,o,null);return;case"input":Ae("invalid",n);var k=m=x=f=null,A=null,B=null;for(c in o)if(o.hasOwnProperty(c)){var Q=o[c];if(Q!=null)switch(c){case"name":f=Q;break;case"type":x=Q;break;case"checked":A=Q;break;case"defaultChecked":B=Q;break;case"value":m=Q;break;case"defaultValue":k=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(i(137,a));break;default:Pe(n,a,c,Q,o,null)}}zg(n,m,k,A,B,x,f,!1),Ml(n);return;case"select":Ae("invalid",n),c=x=m=null;for(f in o)if(o.hasOwnProperty(f)&&(k=o[f],k!=null))switch(f){case"value":m=k;break;case"defaultValue":x=k;break;case"multiple":c=k;default:Pe(n,a,f,k,o,null)}a=m,o=x,n.multiple=!!c,a!=null?bi(n,!!c,a,!1):o!=null&&bi(n,!!c,o,!0);return;case"textarea":Ae("invalid",n),m=f=c=null;for(x in o)if(o.hasOwnProperty(x)&&(k=o[x],k!=null))switch(x){case"value":c=k;break;case"defaultValue":f=k;break;case"children":m=k;break;case"dangerouslySetInnerHTML":if(k!=null)throw Error(i(91));break;default:Pe(n,a,x,k,o,null)}jg(n,c,f,m),Ml(n);return;case"option":for(A in o)if(o.hasOwnProperty(A)&&(c=o[A],c!=null))switch(A){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:Pe(n,a,A,c,o,null)}return;case"dialog":Ae("beforetoggle",n),Ae("toggle",n),Ae("cancel",n),Ae("close",n);break;case"iframe":case"object":Ae("load",n);break;case"video":case"audio":for(c=0;c<hs.length;c++)Ae(hs[c],n);break;case"image":Ae("error",n),Ae("load",n);break;case"details":Ae("toggle",n);break;case"embed":case"source":case"link":Ae("error",n),Ae("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in o)if(o.hasOwnProperty(B)&&(c=o[B],c!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:Pe(n,a,B,c,o,null)}return;default:if(hd(a)){for(Q in o)o.hasOwnProperty(Q)&&(c=o[Q],c!==void 0&&Kf(n,a,Q,c,o,void 0));return}}for(k in o)o.hasOwnProperty(k)&&(c=o[k],c!=null&&Pe(n,a,k,c,o,null))}function tT(n,a,o,c){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,x=null,k=null,A=null,B=null,Q=null;for(P in o){var K=o[P];if(o.hasOwnProperty(P)&&K!=null)switch(P){case"checked":break;case"value":break;case"defaultValue":A=K;default:c.hasOwnProperty(P)||Pe(n,a,P,null,c,K)}}for(var Y in c){var P=c[Y];if(K=o[Y],c.hasOwnProperty(Y)&&(P!=null||K!=null))switch(Y){case"type":m=P;break;case"name":f=P;break;case"checked":B=P;break;case"defaultChecked":Q=P;break;case"value":x=P;break;case"defaultValue":k=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(i(137,a));break;default:P!==K&&Pe(n,a,Y,P,c,K)}}dd(n,x,k,A,B,Q,m,f);return;case"select":P=x=k=Y=null;for(m in o)if(A=o[m],o.hasOwnProperty(m)&&A!=null)switch(m){case"value":break;case"multiple":P=A;default:c.hasOwnProperty(m)||Pe(n,a,m,null,c,A)}for(f in c)if(m=c[f],A=o[f],c.hasOwnProperty(f)&&(m!=null||A!=null))switch(f){case"value":Y=m;break;case"defaultValue":k=m;break;case"multiple":x=m;default:m!==A&&Pe(n,a,f,m,c,A)}a=k,o=x,c=P,Y!=null?bi(n,!!o,Y,!1):!!c!=!!o&&(a!=null?bi(n,!!o,a,!0):bi(n,!!o,o?[]:"",!1));return;case"textarea":P=Y=null;for(k in o)if(f=o[k],o.hasOwnProperty(k)&&f!=null&&!c.hasOwnProperty(k))switch(k){case"value":break;case"children":break;default:Pe(n,a,k,null,c,f)}for(x in c)if(f=c[x],m=o[x],c.hasOwnProperty(x)&&(f!=null||m!=null))switch(x){case"value":Y=f;break;case"defaultValue":P=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(i(91));break;default:f!==m&&Pe(n,a,x,f,c,m)}Dg(n,Y,P);return;case"option":for(var ve in o)if(Y=o[ve],o.hasOwnProperty(ve)&&Y!=null&&!c.hasOwnProperty(ve))switch(ve){case"selected":n.selected=!1;break;default:Pe(n,a,ve,null,c,Y)}for(A in c)if(Y=c[A],P=o[A],c.hasOwnProperty(A)&&Y!==P&&(Y!=null||P!=null))switch(A){case"selected":n.selected=Y&&typeof Y!="function"&&typeof Y!="symbol";break;default:Pe(n,a,A,Y,c,P)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var me in o)Y=o[me],o.hasOwnProperty(me)&&Y!=null&&!c.hasOwnProperty(me)&&Pe(n,a,me,null,c,Y);for(B in c)if(Y=c[B],P=o[B],c.hasOwnProperty(B)&&Y!==P&&(Y!=null||P!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(i(137,a));break;default:Pe(n,a,B,Y,c,P)}return;default:if(hd(a)){for(var Xe in o)Y=o[Xe],o.hasOwnProperty(Xe)&&Y!==void 0&&!c.hasOwnProperty(Xe)&&Kf(n,a,Xe,void 0,c,Y);for(Q in c)Y=c[Q],P=o[Q],!c.hasOwnProperty(Q)||Y===P||Y===void 0&&P===void 0||Kf(n,a,Q,Y,c,P);return}}for(var H in o)Y=o[H],o.hasOwnProperty(H)&&Y!=null&&!c.hasOwnProperty(H)&&Pe(n,a,H,null,c,Y);for(K in c)Y=c[K],P=o[K],!c.hasOwnProperty(K)||Y===P||Y==null&&P==null||Pe(n,a,K,Y,c,P)}var Jf=null,eh=null;function Sc(n){return n.nodeType===9?n:n.ownerDocument}function Uy(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ly(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function th(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var nh=null;function nT(){var n=window.event;return n&&n.type==="popstate"?n===nh?!1:(nh=n,!0):(nh=null,!1)}var $y=typeof setTimeout=="function"?setTimeout:void 0,rT=typeof clearTimeout=="function"?clearTimeout:void 0,Hy=typeof Promise=="function"?Promise:void 0,aT=typeof queueMicrotask=="function"?queueMicrotask:typeof Hy<"u"?function(n){return Hy.resolve(null).then(n).catch(iT)}:$y;function iT(n){setTimeout(function(){throw n})}function la(n){return n==="head"}function Iy(n,a){var o=a,c=0,f=0;do{var m=o.nextSibling;if(n.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<c&&8>c){o=c;var x=n.ownerDocument;if(o&1&&ms(x.documentElement),o&2&&ms(x.body),o&4)for(o=x.head,ms(o),x=o.firstChild;x;){var k=x.nextSibling,A=x.nodeName;x[Oo]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&x.rel.toLowerCase()==="stylesheet"||o.removeChild(x),x=k}}if(f===0){n.removeChild(m),Ss(a);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:c=o.charCodeAt(0)-48;else c=0;o=m}while(o);Ss(a)}function rh(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var o=a;switch(a=a.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":rh(o),sd(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function oT(n,a,o,c){for(;n.nodeType===1;){var f=o;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[Oo])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=In(n.nextSibling),n===null)break}return null}function sT(n,a,o){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=In(n.nextSibling),n===null))return null;return n}function ah(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function lT(n,a){var o=n.ownerDocument;if(n.data!=="$?"||o.readyState==="complete")a();else{var c=function(){a(),o.removeEventListener("DOMContentLoaded",c)};o.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function In(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return n}var ih=null;function qy(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(a===0)return n;a--}else o==="/$"&&a++}n=n.previousSibling}return null}function By(n,a,o){switch(a=Sc(o),n){case"html":if(n=a.documentElement,!n)throw Error(i(452));return n;case"head":if(n=a.head,!n)throw Error(i(453));return n;case"body":if(n=a.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}function ms(n){for(var a=n.attributes;a.length;)n.removeAttributeNode(a[0]);sd(n)}var Nn=new Map,Yy=new Set;function Tc(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Cr=R.d;R.d={f:cT,r:uT,D:dT,C:fT,L:hT,m:pT,X:gT,S:mT,M:vT};function cT(){var n=Cr.f(),a=mc();return n||a}function uT(n){var a=mi(n);a!==null&&a.tag===5&&a.type==="form"?c0(a):Cr.r(n)}var Qi=typeof document>"u"?null:document;function Py(n,a,o){var c=Qi;if(c&&typeof a=="string"&&a){var f=_n(a);f='link[rel="'+n+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),Yy.has(f)||(Yy.add(f),n={rel:n,crossOrigin:o,href:a},c.querySelector(f)===null&&(a=c.createElement("link"),jt(a,"link",n),kt(a),c.head.appendChild(a)))}}function dT(n){Cr.D(n),Py("dns-prefetch",n,null)}function fT(n,a){Cr.C(n,a),Py("preconnect",n,a)}function hT(n,a,o){Cr.L(n,a,o);var c=Qi;if(c&&n&&a){var f='link[rel="preload"][as="'+_n(a)+'"]';a==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+_n(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+_n(o.imageSizes)+'"]')):f+='[href="'+_n(n)+'"]';var m=f;switch(a){case"style":m=Wi(n);break;case"script":m=Zi(n)}Nn.has(m)||(n=y({rel:"preload",href:a==="image"&&o&&o.imageSrcSet?void 0:n,as:a},o),Nn.set(m,n),c.querySelector(f)!==null||a==="style"&&c.querySelector(gs(m))||a==="script"&&c.querySelector(vs(m))||(a=c.createElement("link"),jt(a,"link",n),kt(a),c.head.appendChild(a)))}}function pT(n,a){Cr.m(n,a);var o=Qi;if(o&&n){var c=a&&typeof a.as=="string"?a.as:"script",f='link[rel="modulepreload"][as="'+_n(c)+'"][href="'+_n(n)+'"]',m=f;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Zi(n)}if(!Nn.has(m)&&(n=y({rel:"modulepreload",href:n},a),Nn.set(m,n),o.querySelector(f)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(vs(m)))return}c=o.createElement("link"),jt(c,"link",n),kt(c),o.head.appendChild(c)}}}function mT(n,a,o){Cr.S(n,a,o);var c=Qi;if(c&&n){var f=gi(c).hoistableStyles,m=Wi(n);a=a||"default";var x=f.get(m);if(!x){var k={loading:0,preload:null};if(x=c.querySelector(gs(m)))k.loading=5;else{n=y({rel:"stylesheet",href:n,"data-precedence":a},o),(o=Nn.get(m))&&oh(n,o);var A=x=c.createElement("link");kt(A),jt(A,"link",n),A._p=new Promise(function(B,Q){A.onload=B,A.onerror=Q}),A.addEventListener("load",function(){k.loading|=1}),A.addEventListener("error",function(){k.loading|=2}),k.loading|=4,kc(x,a,c)}x={type:"stylesheet",instance:x,count:1,state:k},f.set(m,x)}}}function gT(n,a){Cr.X(n,a);var o=Qi;if(o&&n){var c=gi(o).hoistableScripts,f=Zi(n),m=c.get(f);m||(m=o.querySelector(vs(f)),m||(n=y({src:n,async:!0},a),(a=Nn.get(f))&&sh(n,a),m=o.createElement("script"),kt(m),jt(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(f,m))}}function vT(n,a){Cr.M(n,a);var o=Qi;if(o&&n){var c=gi(o).hoistableScripts,f=Zi(n),m=c.get(f);m||(m=o.querySelector(vs(f)),m||(n=y({src:n,async:!0,type:"module"},a),(a=Nn.get(f))&&sh(n,a),m=o.createElement("script"),kt(m),jt(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(f,m))}}function Xy(n,a,o,c){var f=(f=re.current)?Tc(f):null;if(!f)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(a=Wi(o.href),o=gi(f).hoistableStyles,c=o.get(a),c||(c={type:"style",instance:null,count:0,state:null},o.set(a,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=Wi(o.href);var m=gi(f).hoistableStyles,x=m.get(n);if(x||(f=f.ownerDocument||f,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,x),(m=f.querySelector(gs(n)))&&!m._p&&(x.instance=m,x.state.loading=5),Nn.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Nn.set(n,o),m||yT(f,n,o,x.state))),a&&c===null)throw Error(i(528,""));return x}if(a&&c!==null)throw Error(i(529,""));return null;case"script":return a=o.async,o=o.src,typeof o=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Zi(o),o=gi(f).hoistableScripts,c=o.get(a),c||(c={type:"script",instance:null,count:0,state:null},o.set(a,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function Wi(n){return'href="'+_n(n)+'"'}function gs(n){return'link[rel="stylesheet"]['+n+"]"}function Fy(n){return y({},n,{"data-precedence":n.precedence,precedence:null})}function yT(n,a,o,c){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?c.loading=1:(a=n.createElement("link"),c.preload=a,a.addEventListener("load",function(){return c.loading|=1}),a.addEventListener("error",function(){return c.loading|=2}),jt(a,"link",o),kt(a),n.head.appendChild(a))}function Zi(n){return'[src="'+_n(n)+'"]'}function vs(n){return"script[async]"+n}function Gy(n,a,o){if(a.count++,a.instance===null)switch(a.type){case"style":var c=n.querySelector('style[data-href~="'+_n(o.href)+'"]');if(c)return a.instance=c,kt(c),c;var f=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),kt(c),jt(c,"style",f),kc(c,o.precedence,n),a.instance=c;case"stylesheet":f=Wi(o.href);var m=n.querySelector(gs(f));if(m)return a.state.loading|=4,a.instance=m,kt(m),m;c=Fy(o),(f=Nn.get(f))&&oh(c,f),m=(n.ownerDocument||n).createElement("link"),kt(m);var x=m;return x._p=new Promise(function(k,A){x.onload=k,x.onerror=A}),jt(m,"link",c),a.state.loading|=4,kc(m,o.precedence,n),a.instance=m;case"script":return m=Zi(o.src),(f=n.querySelector(vs(m)))?(a.instance=f,kt(f),f):(c=o,(f=Nn.get(m))&&(c=y({},o),sh(c,f)),n=n.ownerDocument||n,f=n.createElement("script"),kt(f),jt(f,"link",c),n.head.appendChild(f),a.instance=f);case"void":return null;default:throw Error(i(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(c=a.instance,a.state.loading|=4,kc(c,o.precedence,n));return a.instance}function kc(n,a,o){for(var c=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=c.length?c[c.length-1]:null,m=f,x=0;x<c.length;x++){var k=c[x];if(k.dataset.precedence===a)m=k;else if(m!==f)break}m?m.parentNode.insertBefore(n,m.nextSibling):(a=o.nodeType===9?o.head:o,a.insertBefore(n,a.firstChild))}function oh(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function sh(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var Ec=null;function Vy(n,a,o){if(Ec===null){var c=new Map,f=Ec=new Map;f.set(o,c)}else f=Ec,c=f.get(o),c||(c=new Map,f.set(o,c));if(c.has(n))return c;for(c.set(n,null),o=o.getElementsByTagName(n),f=0;f<o.length;f++){var m=o[f];if(!(m[Oo]||m[$t]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var x=m.getAttribute(a)||"";x=n+x;var k=c.get(x);k?k.push(m):c.set(x,[m])}}return c}function Qy(n,a,o){n=n.ownerDocument||n,n.head.insertBefore(o,a==="title"?n.querySelector("head > title"):null)}function bT(n,a,o){if(o===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return n=a.disabled,typeof a.precedence=="string"&&n==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Wy(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var ys=null;function wT(){}function xT(n,a,o){if(ys===null)throw Error(i(475));var c=ys;if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var f=Wi(o.href),m=n.querySelector(gs(f));if(m){n=m._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(c.count++,c=Cc.bind(c),n.then(c,c)),a.state.loading|=4,a.instance=m,kt(m);return}m=n.ownerDocument||n,o=Fy(o),(f=Nn.get(f))&&oh(o,f),m=m.createElement("link"),kt(m);var x=m;x._p=new Promise(function(k,A){x.onload=k,x.onerror=A}),jt(m,"link",o),a.instance=m}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(c.count++,a=Cc.bind(c),n.addEventListener("load",a),n.addEventListener("error",a))}}function _T(){if(ys===null)throw Error(i(475));var n=ys;return n.stylesheets&&n.count===0&&lh(n,n.stylesheets),0<n.count?function(a){var o=setTimeout(function(){if(n.stylesheets&&lh(n,n.stylesheets),n.unsuspend){var c=n.unsuspend;n.unsuspend=null,c()}},6e4);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(o)}}:null}function Cc(){if(this.count--,this.count===0){if(this.stylesheets)lh(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Mc=null;function lh(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Mc=new Map,a.forEach(ST,n),Mc=null,Cc.call(n))}function ST(n,a){if(!(a.state.loading&4)){var o=Mc.get(n);if(o)var c=o.get(null);else{o=new Map,Mc.set(n,o);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var x=f[m];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(o.set(x.dataset.precedence,x),c=x)}c&&o.set(null,c)}f=a.instance,x=f.getAttribute("data-precedence"),m=o.get(x)||c,m===c&&o.set(null,f),o.set(x,f),this.count++,c=Cc.bind(this),f.addEventListener("load",c),f.addEventListener("error",c),m?m.parentNode.insertBefore(f,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),a.state.loading|=4}}var bs={$$typeof:O,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function TT(n,a,o,c,f,m,x,k){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rd(0),this.hiddenUpdates=rd(null),this.identifierPrefix=c,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function Zy(n,a,o,c,f,m,x,k,A,B,Q,K){return n=new TT(n,a,o,x,k,A,B,K),a=1,m===!0&&(a|=24),m=on(3,null,null,a),n.current=m,m.stateNode=n,a=Bd(),a.refCount++,n.pooledCache=a,a.refCount++,m.memoizedState={element:c,isDehydrated:o,cache:a},Fd(m),n}function Ky(n){return n?(n=Mi,n):Mi}function Jy(n,a,o,c,f,m){f=Ky(f),c.context===null?c.context=f:c.pendingContext=f,c=Qr(a),c.payload={element:o},m=m===void 0?null:m,m!==null&&(c.callback=m),o=Wr(n,c,a),o!==null&&(dn(o,n,a),Qo(o,n,a))}function eb(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<a?o:a}}function ch(n,a){eb(n,a),(n=n.alternate)&&eb(n,a)}function tb(n){if(n.tag===13){var a=Ci(n,67108864);a!==null&&dn(a,n,67108864),ch(n,67108864)}}var Nc=!0;function kT(n,a,o,c){var f=E.T;E.T=null;var m=R.p;try{R.p=2,uh(n,a,o,c)}finally{R.p=m,E.T=f}}function ET(n,a,o,c){var f=E.T;E.T=null;var m=R.p;try{R.p=8,uh(n,a,o,c)}finally{R.p=m,E.T=f}}function uh(n,a,o,c){if(Nc){var f=dh(c);if(f===null)Zf(n,a,c,Oc,o),rb(n,c);else if(MT(f,n,a,o,c))c.stopPropagation();else if(rb(n,c),a&4&&-1<CT.indexOf(n)){for(;f!==null;){var m=mi(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var x=Ta(m.pendingLanes);if(x!==0){var k=m;for(k.pendingLanes|=2,k.entangledLanes|=2;x;){var A=1<<31-rn(x);k.entanglements[1]|=A,x&=~A}rr(m),(qe&6)===0&&(hc=Kn()+500,fs(0))}}break;case 13:k=Ci(m,2),k!==null&&dn(k,m,2),mc(),ch(m,2)}if(m=dh(c),m===null&&Zf(n,a,c,Oc,o),m===f)break;f=m}f!==null&&c.stopPropagation()}else Zf(n,a,c,null,o)}}function dh(n){return n=md(n),fh(n)}var Oc=null;function fh(n){if(Oc=null,n=pi(n),n!==null){var a=l(n);if(a===null)n=null;else{var o=a.tag;if(o===13){if(n=u(a),n!==null)return n;n=null}else if(o===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return Oc=n,null}function nb(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(f_()){case gg:return 2;case vg:return 8;case _l:case h_:return 32;case yg:return 268435456;default:return 32}default:return 32}}var hh=!1,ca=null,ua=null,da=null,ws=new Map,xs=new Map,fa=[],CT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rb(n,a){switch(n){case"focusin":case"focusout":ca=null;break;case"dragenter":case"dragleave":ua=null;break;case"mouseover":case"mouseout":da=null;break;case"pointerover":case"pointerout":ws.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":xs.delete(a.pointerId)}}function _s(n,a,o,c,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:a,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},a!==null&&(a=mi(a),a!==null&&tb(a)),n):(n.eventSystemFlags|=c,a=n.targetContainers,f!==null&&a.indexOf(f)===-1&&a.push(f),n)}function MT(n,a,o,c,f){switch(a){case"focusin":return ca=_s(ca,n,a,o,c,f),!0;case"dragenter":return ua=_s(ua,n,a,o,c,f),!0;case"mouseover":return da=_s(da,n,a,o,c,f),!0;case"pointerover":var m=f.pointerId;return ws.set(m,_s(ws.get(m)||null,n,a,o,c,f)),!0;case"gotpointercapture":return m=f.pointerId,xs.set(m,_s(xs.get(m)||null,n,a,o,c,f)),!0}return!1}function ab(n){var a=pi(n.target);if(a!==null){var o=l(a);if(o!==null){if(a=o.tag,a===13){if(a=u(o),a!==null){n.blockedOn=a,x_(n.priority,function(){if(o.tag===13){var c=un();c=ad(c);var f=Ci(o,c);f!==null&&dn(f,o,c),ch(o,c)}});return}}else if(a===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ac(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var o=dh(n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);pd=c,o.target.dispatchEvent(c),pd=null}else return a=mi(o),a!==null&&tb(a),n.blockedOn=o,!1;a.shift()}return!0}function ib(n,a,o){Ac(n)&&o.delete(a)}function NT(){hh=!1,ca!==null&&Ac(ca)&&(ca=null),ua!==null&&Ac(ua)&&(ua=null),da!==null&&Ac(da)&&(da=null),ws.forEach(ib),xs.forEach(ib)}function Rc(n,a){n.blockedOn===a&&(n.blockedOn=null,hh||(hh=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,NT)))}var zc=null;function ob(n){zc!==n&&(zc=n,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){zc===n&&(zc=null);for(var a=0;a<n.length;a+=3){var o=n[a],c=n[a+1],f=n[a+2];if(typeof c!="function"){if(fh(c||o)===null)continue;break}var m=mi(o);m!==null&&(n.splice(a,3),a-=3,ff(m,{pending:!0,data:f,method:o.method,action:c},c,f))}}))}function Ss(n){function a(A){return Rc(A,n)}ca!==null&&Rc(ca,n),ua!==null&&Rc(ua,n),da!==null&&Rc(da,n),ws.forEach(a),xs.forEach(a);for(var o=0;o<fa.length;o++){var c=fa[o];c.blockedOn===n&&(c.blockedOn=null)}for(;0<fa.length&&(o=fa[0],o.blockedOn===null);)ab(o),o.blockedOn===null&&fa.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(c=0;c<o.length;c+=3){var f=o[c],m=o[c+1],x=f[Gt]||null;if(typeof m=="function")x||ob(o);else if(x){var k=null;if(m&&m.hasAttribute("formAction")){if(f=m,x=m[Gt]||null)k=x.formAction;else if(fh(f)!==null)continue}else k=x.action;typeof k=="function"?o[c+1]=k:(o.splice(c,3),c-=3),ob(o)}}}function ph(n){this._internalRoot=n}Dc.prototype.render=ph.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(i(409));var o=a.current,c=un();Jy(o,c,n,a,null,null)},Dc.prototype.unmount=ph.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;Jy(n.current,2,null,n,null,null),mc(),a[hi]=null}};function Dc(n){this._internalRoot=n}Dc.prototype.unstable_scheduleHydration=function(n){if(n){var a=Sg();n={blockedOn:null,target:n,priority:a};for(var o=0;o<fa.length&&a!==0&&a<fa[o].priority;o++);fa.splice(o,0,n),o===0&&ab(n)}};var sb=t.version;if(sb!=="19.1.0")throw Error(i(527,sb,"19.1.0"));R.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=h(a),n=n!==null?p(n):null,n=n===null?null:n.stateNode,n};var OT={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jc.isDisabled&&jc.supportsFiber)try{Co=jc.inject(OT),nn=jc}catch{}}return Ns.createRoot=function(n,a){if(!s(n))throw Error(i(299));var o=!1,c="",f=S0,m=T0,x=k0,k=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(x=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(k=a.unstable_transitionCallbacks)),a=Zy(n,1,!1,null,null,o,c,f,m,x,k,null),n[hi]=a.current,Wf(n),new ph(a)},Ns.hydrateRoot=function(n,a,o){if(!s(n))throw Error(i(299));var c=!1,f="",m=S0,x=T0,k=k0,A=null,B=null;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(x=o.onCaughtError),o.onRecoverableError!==void 0&&(k=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(A=o.unstable_transitionCallbacks),o.formState!==void 0&&(B=o.formState)),a=Zy(n,1,!0,a,o??null,c,f,m,x,k,A,B),a.context=Ky(null),o=a.current,c=un(),c=ad(c),f=Qr(c),f.callback=null,Wr(o,f,c),o=c,a.current.lanes=o,No(a,o),rr(a),n[hi]=a.current,Wf(n),new Dc(a)},Ns.version="19.1.0",Ns}var _w;function KC(){if(_w)return Hh.exports;_w=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),Hh.exports=ZC(),Hh.exports}var JC=KC();function e5(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var r,i,s,l,u=[],d="",h=e.split("/");for(h[0]||h.shift();s=h.shift();)r=s[0],r==="*"?(u.push(r),d+=s[1]==="?"?"(?:/(.*))?":"/(.*)"):r===":"?(i=s.indexOf("?",1),l=s.indexOf(".",1),u.push(s.substring(1,~i?i:~l?l:s.length)),d+=~i&&!~l?"(?:/([^/]+?))?":"/([^/]+?)",~l&&(d+=(~i?"?":"")+"\\"+s.substring(l))):d+="/"+s;return{keys:u,pattern:new RegExp("^"+d+(t?"(?=$|/)":"/?$"),"i")}}var Yh={exports:{}},Ph={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sw;function t5(){if(Sw)return Ph;Sw=1;var e=fl();function t(g,b){return g===b&&(g!==0||1/g===1/b)||g!==g&&b!==b}var r=typeof Object.is=="function"?Object.is:t,i=e.useState,s=e.useEffect,l=e.useLayoutEffect,u=e.useDebugValue;function d(g,b){var w=b(),S=i({inst:{value:w,getSnapshot:b}}),T=S[0].inst,M=S[1];return l(function(){T.value=w,T.getSnapshot=b,h(T)&&M({inst:T})},[g,w,b]),s(function(){return h(T)&&M({inst:T}),g(function(){h(T)&&M({inst:T})})},[g]),u(w),w}function h(g){var b=g.getSnapshot;g=g.value;try{var w=b();return!r(g,w)}catch{return!0}}function p(g,b){return b()}var y=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?p:d;return Ph.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:y,Ph}var Tw;function Ux(){return Tw||(Tw=1,Yh.exports=t5()),Yh.exports}var Lx=Ux();const n5=dm(Lx),r5=Xk.useInsertionEffect,a5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",i5=a5?ce.useLayoutEffect:ce.useEffect,o5=r5||i5,$x=e=>{const t=ce.useRef([e,(...r)=>t[0](...r)]).current;return o5(()=>{t[0]=e}),t[1]},s5="popstate",qm="pushState",Bm="replaceState",l5="hashchange",kw=[s5,qm,Bm,l5],c5=e=>{for(const t of kw)addEventListener(t,e);return()=>{for(const t of kw)removeEventListener(t,e)}},Hx=(e,t)=>Lx.useSyncExternalStore(c5,e,t),u5=()=>location.search,d5=({ssrSearch:e=""}={})=>Hx(u5,()=>e),Ew=()=>location.pathname,f5=({ssrPath:e}={})=>Hx(Ew,e?()=>e:Ew),h5=(e,{replace:t=!1,state:r=null}={})=>history[t?Bm:qm](r,"",e),p5=(e={})=>[f5(e),h5],Cw=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[Cw]>"u"){for(const e of[qm,Bm]){const t=history[e];history[e]=function(){const r=t.apply(this,arguments),i=new Event(e);return i.arguments=arguments,dispatchEvent(i),r}}Object.defineProperty(window,Cw,{value:!0})}const m5=(e,t)=>t.toLowerCase().indexOf(e.toLowerCase())?"~"+t:t.slice(e.length)||"/",Ix=(e="")=>e==="/"?"":e,g5=(e,t)=>e[0]==="~"?e.slice(1):Ix(t)+e,v5=(e="",t)=>m5(Mw(Ix(e)),Mw(t)),Mw=e=>{try{return decodeURI(e)}catch{return e}},qx={hook:p5,searchHook:d5,parser:e5,base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:e=>e},Bx=ce.createContext(qx),pl=()=>ce.useContext(Bx),Yx={},Px=ce.createContext(Yx),y5=()=>ce.useContext(Px),Fu=e=>{const[t,r]=e.hook(e);return[v5(e.base,t),$x((i,s)=>r(g5(i,e.base),s))]},Ym=()=>Fu(pl()),Xx=(e,t,r,i)=>{const{pattern:s,keys:l}=t instanceof RegExp?{keys:!1,pattern:t}:e(t||"*",i),u=s.exec(r)||[],[d,...h]=u;return d!==void 0?[!0,(()=>{const p=l!==!1?Object.fromEntries(l.map((g,b)=>[g,h[b]])):u.groups;let y={...h};return p&&Object.assign(y,p),y})(),...i?[d]:[]]:[!1,null]},b5=({children:e,...t})=>{var y,g;const r=pl(),i=t.hook?qx:r;let s=i;const[l,u]=((y=t.ssrPath)==null?void 0:y.split("?"))??[];u&&(t.ssrSearch=u,t.ssrPath=l),t.hrefs=t.hrefs??((g=t.hook)==null?void 0:g.hrefs);let d=ce.useRef({}),h=d.current,p=h;for(let b in i){const w=b==="base"?i[b]+(t[b]||""):t[b]||i[b];h===p&&w!==p[b]&&(d.current=p={...p}),p[b]=w,(w!==i[b]||w!==s[b])&&(s=p)}return ce.createElement(Bx.Provider,{value:s,children:e})},Nw=({children:e,component:t},r)=>t?ce.createElement(t,{params:r}):typeof e=="function"?e(r):e,w5=e=>{let t=ce.useRef(Yx);const r=t.current;return t.current=Object.keys(e).length!==Object.keys(r).length||Object.entries(e).some(([i,s])=>s!==r[i])?e:r},ro=({path:e,nest:t,match:r,...i})=>{const s=pl(),[l]=Fu(s),[u,d,h]=r??Xx(s.parser,e,l,t),p=w5({...y5(),...d});if(!u)return null;const y=h?ce.createElement(b5,{base:h},Nw(i,p)):Nw(i,p);return ce.createElement(Px.Provider,{value:p,children:y})},ao=ce.forwardRef((e,t)=>{const r=pl(),[i,s]=Fu(r),{to:l="",href:u=l,onClick:d,asChild:h,children:p,className:y,replace:g,state:b,...w}=e,S=$x(M=>{M.ctrlKey||M.metaKey||M.altKey||M.shiftKey||M.button!==0||(d==null||d(M),M.defaultPrevented||(M.preventDefault(),s(u,e)))}),T=r.hrefs(u[0]==="~"?u.slice(1):r.base+u,r);return h&&ce.isValidElement(p)?ce.cloneElement(p,{onClick:S,href:T}):ce.createElement("a",{...w,onClick:S,href:T,className:y!=null&&y.call?y(i===u):y,children:p,ref:t})}),Fx=e=>Array.isArray(e)?e.flatMap(t=>Fx(t&&t.type===ce.Fragment?t.props.children:t)):[e],x5=({children:e,location:t})=>{const r=pl(),[i]=Fu(r);for(const s of Fx(e)){let l=0;if(ce.isValidElement(s)&&(l=Xx(r.parser,s.props.path,t||i,s.props.nest))[0])return ce.cloneElement(s,{match:l})}return null};function Gu(e,t){for(const r in e)t(e[r],r)}function gn(e,t){e.forEach(t)}function Tt(e,t,r){if(!e)throw Error(`${r?r+": ":""}${t}`)}function Hr({node:e=[],from:t,source:r,parent:i=t||r,to:s,target:l,child:u=s||l,scope:d={},meta:h={},family:p={type:"regular"},regional:y}={}){const g=js(i),b=js(p.links),w=js(p.owners),S=[];gn(e,M=>M&&zn(S,M));const T={id:z5(),seq:S,next:js(u),meta:h,scope:d,family:{triggers:g.length,type:p.type||"crosslink",links:b,owners:w}};return gn(b,M=>zn(Vu(M),T)),gn(w,M=>zn(Qu(M),T)),gn(g,M=>zn(M.next,T)),T}function Gx(e,t,r){let i,s=jr,l=null,u=it;if(e.target&&(t=e.params,r=e.defer,i=e.meta,s="page"in e?e.page:s,e.stack&&(l=e.stack),u=Gc(e)||u,e=e.target),u&&it&&u!==it&&(it=null),Array.isArray(e))for(let S=0;S<e.length;S++)Xa("pure",s,yn(e[S]),l,t[S],u,i);else Xa("pure",s,yn(e),l,t,u,i);if(r&&!Qc)return;const d={isRoot:Qc,currentPage:jr,scope:it,isWatch:Vh,isPure:du};let h,p,y,g,b,w;Qc=0;e:for(;g=I5();){const{idx:S,stack:T,type:M}=g;y=T.node,jr=b=T.page,it=Gc(T),b?w=b.reg:it&&(w=it.reg);const _=!!b,C=!!it,O={fail:0,scope:y.scope};h=p=0;for(let U=S;U<y.seq.length&&!h;U++){const D=y.seq[U];if(D.order){const{priority:X,barrierID:F}=D.order,ee=F?b?`${b.fullID}_${F}`:F:0;if(U!==S||M!==X){F?Gh.has(ee)||(Gh.add(ee),Ip(U,T,X,F)):Ip(U,T,X,0);continue e}F&&Gh.delete(ee)}switch(D.type){case"mov":{const F=D.data;let ee;switch(F.from){case"stack":ee=cu(T);break;case"a":case"b":ee=T[F.from];break;case"value":ee=F.store;break;case"store":if(w&&!w[F.store.id])if(_){const ne=n2(b,F.store.id);T.page=b=ne,ne?w=ne.reg:C?(wo(it,F.store,0,1,F.softRead),w=it.reg):w=void 0}else C&&wo(it,F.store,0,1,F.softRead);ee=Ps(w&&w[F.store.id]||F.store)}switch(F.to){case"stack":T.value=ee;break;case"a":case"b":T[F.to]=ee;break;case"store":q5(b,it,F.target,0).current=ee}break}case"compute":const X=D.data;if(X.fn){Vh=y.meta.op==="watch",du=X.pure;const F=X.safe?(0,X.fn)(cu(T),O.scope,T):Y5(O,X.fn,T);X.filter?p=!F:T.value=F,Vh=d.isWatch,du=d.isPure}}h=O.fail||p}if(!h){const U=cu(T),D=Gc(T);if(gn(y.next,X=>{Xa("child",b,X,T,U,D)}),D){y.meta.needFxCounter&&Xa("child",b,D.fxCount,T,U,D),y.meta.storeChange&&Xa("child",b,D.storeChange,T,U,D),y.meta.warnSerialize&&Xa("child",b,D.warnSerializeNode,T,U,D);const X=D.additionalLinks[y.id];X&&gn(X,F=>{Xa("child",b,F,T,U,D)})}}}Qc=d.isRoot,jr=d.currentPage,it=Gc(d)}function _5(e,t="combine"){let r=t+"(",i="",s=0;return Gu(e,l=>{s<25&&(l!=null&&(r+=i,r+=Sa(l)?Vx(l).fullName:l.toString()),s+=1,i=", ")}),r+")"}function S5(e,t){let r,i;const s=e;if(t){const l=Vx(t);e.length===0?(r=l.path,i=l.fullName):(r=l.path.concat([e]),i=l.fullName.length===0?e:l.fullName+"/"+e)}else r=e.length===0?[]:[e],i=e;return{shortName:s,fullName:i,path:r}}function ui(e,t){if(!t||!t.name&&!t.named&&!t.loc)return e;let r=`[${e}]`;const i=t.named||t.name;i&&(r+=` unit '${i}'`);const s=t.loc;return!i&&s&&(r+=` (${s.file}:${s.line}:${s.column})`),r}function Pm(e,t){const r=t?e:e[0];Jx(r);let i=r.or;const s=r.and;if(s){const l=s[0];if(ur(l)&&"and"in l){const u=Pm(s,t);e=u[0],i={...i,...u[1]}}else e=s}return[e,i]}function Lp(e){const t=()=>e();return t.unsubscribe=()=>e(),t}function Vn(e,...t){}function Fe(e,t){const r=ol({or:t,and:typeof e=="string"?{name:e}:e}),i=ui("event",r),s=(d,...h)=>(Tt(!ya(s,"derived"),"call of derived event is not supported, use createEvent instead",i),Tt(!du,"unit call from pure function is not supported, use operators like sample instead",i),jr?((p,y,g,b)=>{const w=jr;Dw(null);const T=p.create(g,b);return Dw(w),T})(s,l,d,h):s.create(d,h)),l=j5(),u=Object.assign(s,{graphite:Hr({meta:i2(r.actualOp||"event",s,r,Zu(Fe)),regional:1}),create:d=>(Gx({target:s,params:d,scope:it}),d),watch:d=>r2(s,d),map:d=>Qh(s,vo,d,[Dr()]),filter:d=>Qh(s,"filter",d.fn?d:d.fn,[Dr(Wu,1)]),filterMap:d=>Qh(s,"filterMap",d,[Dr(),yo(h=>!Dn(h),1)]),prepend(d){Tt(s.targetable,".prepend of derived event is not supported, call source event instead",i);const h=Fe("* → "+s.shortName,{parent:rl(s)});return Vn("eventPrepend",yn(h)),ai(h,s,[Dr()],"prepend",d),X5(s,h),h}});return r!=null&&r.domain&&r.domain.hooks.event(u),zr(u,"id",u.graphite.id),Kx(u.graphite),u}function Ow(e,t,r,i,s){return $p(r,`${s} ${t}`,"first argument"),Tt(qr(i),"second argument should be a function",s),al(!ya(e,"derived"),`${t} in derived store`,`${t} in store created via createStore`,s),gn(Array.isArray(r)?r:[r],l=>{e.off(l),o2(l,e,"on",$5,i)}),e}function At(e,t){const r=ol(t),i=bo(e),s=ui("store",r),l=Fe({named:"updates",derived:1});Vn("storeBase",i);const u=i.id,d="skipVoid"in r,h=d&&!r.skipVoid;al(!(d&&r.skipVoid),"{skipVoid: true}","updateFilter",s);const p={updates:l,defaultState:e,stateRef:i,getState(){let _,C=i;if(jr){let O=jr;for(;O&&!O.reg[u];)O=rl(O);O&&(_=O)}return!_&&it&&(wo(it,i,1),_=it),_&&(C=_.reg[u]),Ps(C)},setState:_=>Gx({target:p,params:_,defer:1,scope:it}),reset:(..._)=>(Tt(p.targetable,".reset of derived store is not supported",s),gn(_,C=>Ow(p,".reset",C,()=>p.defaultState,s)),p),on:(_,C)=>(Tt(p.targetable,".on of derived store is not supported",s),Ow(p,".on",_,C,s)),off(_){const C=yn(_).id,O=yn(p).family.links.find(U=>U.meta.onTrigger===C);return O&&zu(O),p},map(_,C){let O,U;ur(_)&&(O=_,_=_.fn);const D=p.getState(),X=Dn(D);(!X||X&&h)&&(U=_(D));const F=At(U,{name:`${p.shortName} → *`,derived:1,...C,and:O}),ee=o2(p,F,vo,Wu,_);return Hp(sr(F),{type:vo,fn:_,from:i}),sr(F).noInit=1,Vn("storeMap",i,ee),F},watch(_,C){if(al(!C,"watch second argument","sample",s),!C||!Sa(_)){const O=r2(p,_);return Vn("storeWatch",i,_)||_(p.getState()),O}return Tt(qr(C),"second argument should be a function",s),_.watch(O=>C(p.getState(),O))}},y=i2("store",p,r,Zu(At)),g=p.defaultConfig.updateFilter;p.graphite=Hr({scope:{state:i,fn:g},node:[yo((_,C,O)=>(O.scope&&!O.scope.reg[i.id]&&(O.b=1),_)),Ka(i),yo((_,C,{a:O,b:U})=>{const D=Dn(_);return D&&!d&&A5(`${s}: ${hu}`,ya(p,"unitTrace")),(D&&h||!D)&&(_!==O||U)},1),g&&Dr(e2,1),Rn({from:"stack",target:i})],child:l,meta:{...y,defaultState:e,stateRef:i},regional:1}),zr(p,"id",p.graphite.id),zr(p,"rootStateRefId",u);const b=ya(p,"serialize"),w=ya(p,"derived"),S=b==="ignore",T=ya(p,"sid");T&&(zr(p,"storeChange",1),i.sid=T),T||S||w||zr(p,"warnSerialize",1);const M=Dn(e);return Tt(w||!M||M&&h,hu,s),w&&M&&!d&&console.error(`${s}: ${hu}`),Ru(p,[l]),r!=null&&r.domain&&r.domain.hooks.store(p),w||(p.reinit=Fe({named:"reinit"}),p.reset(p.reinit)),i.meta=p.graphite.meta,Kx(p.graphite),p}function ri(...e){let t,r,i;[e,i]=Pm(e);const s=ui("combine",i),l=e[e.length-1],u=e.length>1&&!Un(l)&&ur(l),d=u&&l,h=u?e[e.length-2]:l;let p,y,g;if(qr(h)?(r=e.slice(0,u?-2:-1),t=h):r=e,r.length===1){const b=r[0];Un(b)||(p=b,y=1)}if(!y&&(p=r,t)){g=1;const b=t;t=w=>b(...w)}return Tt(ur(p),`${s}: shape should be an object`),F5(Array.isArray(p),!g,p,Zu(ri),i,t,d)}function T5(e,t){let r=0;return gn(G5,i=>{i in e&&(Tt(e[i]!=null,s2(t,i)),r=1)}),r}function ml(...e){let t,r,i,s,[[l,u,d],h]=Pm(e),p=1;const y=ui("sample",h);return Dn(u)&&ur(l)&&T5(l,y)&&(u=l.clock,d=l.fn,"batch"in l?p=l.batch:(al(!("greedy"in l),"greedy in sample","batch",y),p=!l.greedy),s=l.filter,t=l.target,r=l.name,i=l.sid,l=l.source),V5("sample",u,l,s,t,d,r,h,p,1,0,i)}function Eo(e,t,r){const i=ui("restore",r);if(Tt(!Un(e),"restore($store) is not supported",i),Qx(e)||Au(e)){const l=rl(e),u=At(t,{parent:l,name:e.shortName,and:r});return ai(Au(e)?e.doneData:e,u),l&&l.hooks.store(u),u}const s=Array.isArray(e)?[]:{};return Gu(e,(l,u)=>s[u]=Un(l)?l:At(l,{name:u})),s}function k5(e,{scope:t,safe:r}={}){Tt(t||it||r,"scopeBind: scope not found");const i=t||it;return(...s)=>{function l(){zw(h)}let u,d=0;const h=it;zw(i);try{u=e(...s)}catch(p){u=p,d=1}if(l(),d)throw u;return u instanceof Promise&&u.then(l,l),u}}function E5({unit:e,fn:t,scope:r,batch:i}){const s=[uu.run({fn:u=>t(u)})];s.unshift(uu.compute({priority:"sampler",batch:1})),Un(e)&&s.unshift(uu.mov({store:e.stateRef,to:"stack"}));const l=Array.isArray(e)?e:[e];if(r){const u=[],d=r.additionalLinks;return l.forEach(h=>{const p=d[h.graphite.id]||[];d[h.graphite.id]=p;const y=Hr({node:C5(s,h),meta:{watchOp:h.kind}});p.push(y),u.push(()=>{const g=p.indexOf(y);g!==-1&&p.splice(g,1),zu(y)})}),Lp(()=>{u.forEach(h=>h())})}{const u=Hr({node:s,parent:l,family:{owners:l}});return Lp(()=>{zu(u)})}}function C5(e,t){return Un(t)?[uu.mov({store:t.stateRef,to:"stack"}),...e]:e}const M5=typeof Symbol<"u"&&Symbol.observable||"@@observable",vo="map",yn=e=>e.graphite||e,Vu=e=>e.family.owners,Qu=e=>e.family.links,sr=e=>e.stateRef,cu=e=>e.value,rl=e=>e.parent,Gc=e=>e.scope,ya=(e,t)=>yn(e).meta[t],zr=(e,t,r)=>yn(e).meta[t]=r,Vx=e=>e.compositeName,Sa=e=>(qr(e)||ur(e))&&"kind"in e,gl=e=>t=>Sa(t)&&t.kind===e,Un=gl("store"),Qx=gl("event"),Au=gl("effect"),N5=e=>Sa(e)&&!!e.targetable,Wx=gl("domain"),O5=gl("scope");var Vc={__proto__:null,unit:Sa,store:Un,event:Qx,effect:Au,targetable:N5,domain:Wx,scope:O5,attached:e=>Au(e)&&ya(e,"attached")==1};const Xh=(e,t)=>e.includes(t),Fh=(e,t)=>{const r=e.indexOf(t);r!==-1&&e.splice(r,1)},zn=(e,t)=>e.push(t),al=(e,t,r,i)=>!e&&console.error(`${i?i+": ":""}${t} is deprecated${r?`, use ${r} instead`:""}`),A5=(e,t)=>{const r=Error(e);r.stack=t,console.error(r)},Xm=()=>{let e=0;return()=>""+ ++e},R5=Xm(),Zx=Xm(),z5=Xm();let D5=null;const Kx=e=>{},j5=()=>D5,U5=e=>e,Ru=(e,t)=>{const r=yn(e);gn(t,i=>{const s=yn(i);r.family.type!=="domain"&&(s.family.type="crosslink"),zn(Vu(s),r),zn(Qu(r),s)})},js=(e=[])=>(Array.isArray(e)?e:[e]).flat().map(yn),ur=e=>typeof e=="object"&&e!==null,qr=e=>typeof e=="function",Dn=e=>e===void 0,Jx=e=>Tt(ur(e)||qr(e),"expect first argument be an object"),Aw=(e,t,r,i)=>Tt(!(!ur(e)&&!qr(e)||!("family"in e)&&!("graphite"in e)),`${t}: expect ${r} to be a unit (store, event or effect)${i}`),$p=(e,t,r)=>{Array.isArray(e)?gn(e,(i,s)=>Aw(i,t,`${s} item of ${r}`,"")):Aw(e,t,r," or array of units")},L5=(e,t,r="target")=>gn(js(t),i=>Tt(!ya(i,"derived"),`${e}: derived unit in "${r}" is not supported, use createStore/createEvent instead"`)),e2=(e,{fn:t},{a:r})=>t(e,r),$5=(e,{fn:t},{a:r})=>t(r,e),Wu=(e,{fn:t})=>t(e),t2=(e,t,r,i)=>{const s={id:Zx(),type:e,data:t};return r&&(s.order={priority:r},i&&(s.order.barrierID=++H5)),s};let H5=0;const Rn=({from:e="store",store:t,target:r,to:i=r?"store":"stack",batch:s,priority:l})=>t2("mov",{from:e,store:t,to:i,target:r},l,s),il=({fn:e,batch:t,priority:r,safe:i=0,filter:s=0,pure:l=0})=>t2("compute",{fn:e,safe:i,filter:s,pure:l},r,t),Fm=({fn:e})=>il({fn:e,priority:"effect"}),yo=(e,t,r)=>il({fn:e,safe:1,filter:t,priority:r}),Ka=(e,t,r)=>Rn({store:e,to:t?"stack":"a",priority:r&&"sampler",batch:1}),Dr=(e=Wu,t)=>il({fn:e,pure:1,filter:t}),uu={mov:Rn,compute:il,filter:({fn:e,pure:t})=>il({fn:e,filter:1,pure:t}),run:Fm},bo=e=>({id:Zx(),current:e,initial:e}),Ps=({current:e})=>e,Hp=(e,t)=>{e.before||(e.before=[]),zn(e.before,t)};let so=null;const Gm=(e,t)=>{if(!e)return t;if(!t)return e;let r;return(e.v.type===t.v.type&&e.v.id>t.v.id||qp(e.v.type)>qp(t.v.type))&&(r=e,e=t,t=r),r=Gm(e.r,t),e.r=e.l,e.l=r,e},Vm=[];let Rw=0;for(;Rw<6;)zn(Vm,{first:null,last:null,size:0}),Rw+=1;const I5=()=>{for(let e=0;e<6;e++){const t=Vm[e];if(t.size>0){if(e===3||e===4){t.size-=1;const i=so.v;return so=Gm(so.l,so.r),i}t.size===1&&(t.last=null);const r=t.first;return t.first=r.r,t.size-=1,r.v}}},Xa=(e,t,r,i,s,l,u)=>Ip(0,{a:null,b:null,node:r,parent:i,value:s,page:t,scope:l,meta:u},e,0),Ip=(e,t,r,i)=>{const s=qp(r),l=Vm[s],u={v:{idx:e,stack:t,type:r,id:i},l:null,r:null};s===3||s===4?so=Gm(so,u):(l.size===0?l.first=u:l.last.r=u,l.last=u),l.size+=1},qp=e=>{switch(e){case"child":return 0;case"pure":return 1;case"read":return 2;case"barrier":return 3;case"sampler":return 4;case"effect":return 5;default:return-1}},Gh=new Set;let it,Qc=1,Vh=0,du=0,jr=null;const zw=e=>{it=e},Dw=e=>{jr=e},n2=(e,t)=>{if(e){for(;e&&!e.reg[t];)e=e.parent;if(e)return e}return null},q5=(e,t,r,i)=>{const s=n2(e,r.id);return s?s.reg[r.id]:t?(wo(t,r,i),t.reg[r.id]):r},B5=e=>e,wo=(e,t,r,i,s)=>{const l=e.reg;if(l[t.id])return;const u=t.sid,d={id:t.id,current:t.initial,meta:t.meta};if(d.id in e.values.idMap)d.current=e.values.idMap[d.id];else if(u&&u in e.values.sidMap&&!(u in e.sidIdMap)){var h;const p=t==null||(h=t.meta)===null||h===void 0?void 0:h.serialize;d.current=(e.fromSerialize&&p!=="ignore"&&(p==null?void 0:p.read)||B5)(e.values.sidMap[u])}else if(t.before&&!s){let p=0;const y=r||!t.noInit||i;gn(t.before,g=>{switch(g.type){case"map":{const b=g.from;if((b||g.fn)&&(b&&wo(e,b,r,i),y)){const w=b&&l[b.id].current;d.current=g.fn?g.fn(w):w}break}case"field":wo(e,g.from,r,i),p||(p=1,d.current=Array.isArray(d.current)?[...d.current]:{...d.current}),y&&(d.current[g.field]=l[l[g.from.id].id].current)}})}u&&(e.sidIdMap[u]=t.id),l[t.id]=d},Y5=(e,t,r)=>{try{return t(cu(r),e.scope,r)}catch(i){console.error(i),e.fail=1,e.failReason=i}},ol=(e,t={})=>(ur(e)&&(ol(e.or,t),Gu(e,(r,i)=>{Dn(r)||i==="or"||i==="and"||(t[i]=r)}),ol(e.and,t)),t),jw=(e,t)=>{Fh(e.next,t),Fh(Vu(e),t),Fh(Qu(e),t)},Uw=["on","reset","sample","split","merge","guard","forward"],fu=(e,t,r,i,s)=>{let l;e.next.length=0,e.seq.length=0,e.scope=null;let u=Qu(e);const{stateRef:d,defaultShape:h,isRegion:p,op:y}=e.meta;if(d&&(d.before=[],e.meta.stateRef=null),h)for(const b in h)h[b]=null;const g=p?e:i;if(u.length>0){const b=Xh(Uw,y),w=!p&&!s,S=w&&r&&!b;for(;l=u.pop();){const T=Xh(l.next,e);jw(l,e),p&&fu(l,0,0,e,1),T||(l.family.triggers-=1),(t||S||w&&l.family.type==="crosslink"&&!b||s&&Xh(Uw,l.meta.op)&&(T&&l.next.length===0||!T&&l.family.triggers<=0))&&fu(l,t,r&&l.meta.op!=="on",g,s)}}for(u=Vu(e);l=u.pop();)jw(l,e),r&&l.family.type==="crosslink"&&fu(l,t,l.meta.op!=="on",g,s)},Wc=e=>e.clear(),zu=(e,{deep:t}={})=>{let r=0;if(e.ownerSet&&e.ownerSet.delete(e),Wx(e)){r=1;const i=e.history;Wc(i.events),Wc(i.effects),Wc(i.stores),Wc(i.domains)}fu(yn(e),!!t,r,null,0)},P5=e=>Lp(()=>zu(e)),ai=(e,t,r,i,s)=>Hr({node:r,parent:e,child:t,scope:{fn:s},meta:{op:i},family:{owners:[e,t],links:t},regional:1}),r2=(e,t)=>(Tt(qr(t),".watch argument should be a function"),P5(Hr({scope:{fn:t},node:[Fm({fn:Wu})],parent:e,meta:{op:"watch"},family:{owners:e},regional:1}))),X5=(e,t,r="event")=>{rl(e)&&rl(e).hooks[r](t)},a2=(e,t)=>zr(e,"unitTrace",t),Zu=e=>{const t=Error("unit trace");return Error.captureStackTrace&&Error.captureStackTrace(t,e),t.stack},i2=(e,t,r,i)=>{const s=ol(r),l=e==="domain",u=R5(),{sid:d=null,named:h=null,domain:p=null,parent:y=p}=s,g=h||s.name||(l?"":u),b=S5(g,y),w={op:t.kind=e,name:t.shortName=g,sid:t.sid=U5(d),named:h,unitId:t.id=u,serialize:s.serialize,derived:s.derived,config:s,unitTrace:i};return t.targetable=!s.derived,t.parent=y,t.compositeName=b,t.defaultConfig=s,t.getType=()=>(al(0,"getType","compositeName.fullName"),b.fullName),!l&&(t.subscribe=S=>(Jx(S),t.watch(qr(S)?S:T=>S.next&&S.next(T))),t[M5]=()=>t),w},Qh=(e,t,r,i)=>{let s;ur(r)&&(s=r,r=r.fn);const l=Fe({name:`${e.shortName} → *`,derived:1,and:s});return ai(e,l,i,t,r),l},hu="undefined is used to skip updates. To allow undefined as a value provide explicit { skipVoid: false } option",o2=(e,t,r,i,s)=>{const l=sr(t),u=Rn({store:l,to:"a",priority:"read"});r===vo&&(u.data.softRead=1);const d=[u,Dr(i)];Vn("storeOnMap",l,d,Un(e)&&sr(e));const h=ai(e,t,d,r,s);return r!==vo&&zr(h,"onTrigger",yn(e).id),h},F5=(e,t,r,i,s,l,u)=>{const d=ui("combine",s),h=e?C=>[...C]:C=>({...C}),p=e?[]:{},y=h(p),g=bo(y),b=bo(1);g.type=e?"list":"shape",g.noInit=1,Vn("combineBase",g,b);const w=At(y,{name:_5(r),derived:1,...u,and:s});a2(w,i);const S=sr(w);S.noInit=1,zr(w,"isCombine",1),Ru(w,[Hr({meta:{stateRef:g}})]);const T=Ka(g);T.order={priority:"barrier"};const M=Rn({store:S,to:"b",priority:"read"});M.data.softRead=1;const _=[yo((C,O,U)=>(U.scope&&!U.scope.reg[g.id]&&(U.c=1),C)),T,Rn({store:b,to:"b"}),yo((C,{key:O},U)=>{if(U.c||C!==U.a[O])return t&&U.b&&(U.a=h(U.a)),U.a[O]=C,1},1),Rn({from:"a",target:g}),Rn({from:"value",store:0,target:b}),Rn({from:"value",store:1,target:b,priority:"barrier",batch:1}),Ka(g,1,1),l&&Dr(),M];if(Gu(r,(C,O)=>{if(!Un(C))return Tt(!Sa(C)&&!Dn(C),`combine expects a store in a field ${O}`,d),void(y[O]=p[O]=C);p[O]=C.defaultState,y[O]=C.getState();const U=ai(C,w,_,"combine",l);U.scope.key=O;const D=sr(C);Hp(g,{type:"field",field:O,from:D}),Vn("combineField",D,U)}),w.defaultShape=r,zr(w,"defaultShape",r),Hp(S,{type:vo,from:g,fn:l}),l){const C=l(y);!Dn(C)||u&&"skipVoid"in u||console.error(`${d}: ${hu}`),S.current=C,S.initial=C,w.defaultState=C}else w.defaultState=p;return w};Hr({node:[Fm({fn:({fn:e,value:t})=>e(t)})],meta:{op:"fx",fx:"sidechain"}});const G5=["source","clock","target"],s2=(e,t)=>e+`: ${t} should be defined`,V5=(e,t,r,i,s,l,u,d,h,p,y,g)=>{const b=ui(e,d),w=!!s;Tt(!Dn(r)||!Dn(t),s2(b,"either source or clock"));let S=0;Dn(r)?S=1:Sa(r)||(r=ri(r)),Dn(t)?t=r:($p(t,b,"clock"),Array.isArray(t)&&(t=ai(t,[],[],e))),S&&(r=t),d||u?d&&u?d.name=u:!d&&u&&(d={name:u}):u=r.shortName;let T="none";i&&(Sa(i)?T="unit":(Tt(qr(i),"`filter` should be function or unit"),T="fn")),s?($p(s,b,"target"),L5(b,s)):T==="none"&&p&&Un(r)&&Un(t)?s=At(l?l(Ps(sr(r)),Ps(sr(t))):Ps(sr(r)),{name:u,sid:g,or:d}):(s=Fe({name:u,derived:1,or:d}),Vn("sampleTarget",yn(s)));const M=bo();let _=[];const C=[];if(T==="unit"){const[D,X,F,ee]=Lw(i,s,t,M,e);ee&&zn(C,ee),F||_.push(...Wh(X)),_.push(...Wh(D))}const O=[];if(S)h&&zn(O,Ka(M,1,1));else{const[D,X,F,ee]=Lw(r,s,t,M,e);ee&&zn(C,ee),F||O.push(...Wh(X)),zn(O,Ka(D,1,h))}const U=ai(t,s,[Vn(),Rn({from:"stack",target:M}),...O,..._,Ka(M),T==="fn"&&Dr((D,X,{a:F})=>i(D,F),1),l&&Dr(e2),Vn("sampleSourceUpward",w)],e,l);return Ru(r,[U]),Ru(U,C),Object.assign(U.meta,d,{joint:1,stateRef:M}),a2(U,Zu(ml)),s},Wh=e=>[Ka(e),yo((t,r,{a:i})=>i,1)],Lw=(e,t,r,i,s)=>{const l=Un(e),u=l?sr(e):bo(),d=bo(l);let h;return l||(h=Hr({parent:e,node:[Rn({from:"stack",target:u}),Rn({from:"value",store:1,target:d})],family:{owners:[...new Set([e,t,r].flat())],links:t},meta:{op:s},regional:1})),Vn("sampleSource",d,u,i),[u,d,l,h]};var Zh={exports:{}},Kh={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $w;function Q5(){if($w)return Kh;$w=1;var e=fl(),t=Ux();function r(p,y){return p===y&&(p!==0||1/p===1/y)||p!==p&&y!==y}var i=typeof Object.is=="function"?Object.is:r,s=t.useSyncExternalStore,l=e.useRef,u=e.useEffect,d=e.useMemo,h=e.useDebugValue;return Kh.useSyncExternalStoreWithSelector=function(p,y,g,b,w){var S=l(null);if(S.current===null){var T={hasValue:!1,value:null};S.current=T}else T=S.current;S=d(function(){function _(X){if(!C){if(C=!0,O=X,X=b(X),w!==void 0&&T.hasValue){var F=T.value;if(w(F,X))return U=F}return U=X}if(F=U,i(O,X))return F;var ee=b(X);return w!==void 0&&w(F,ee)?(O=X,F):(O=X,U=ee)}var C=!1,O,U,D=g===void 0?null:g;return[function(){return _(y())},D===null?void 0:function(){return _(D())}]},[y,g,b,w]);var M=s(p,S[0],S[1]);return u(function(){T.hasValue=!0,T.value=M},[M]),h(M),M},Kh}var Hw;function W5(){return Hw||(Hw=1,Zh.exports=Q5()),Zh.exports}var Z5=W5();const K5=dm(Z5);function J5(e,t){const r=Vc.unit(e);let i={};r?i={unit:e}:"@@unitShape"in e?typeof e["@@unitShape"]=="function"?i=e["@@unitShape"]():Iw("expect @@unitShape to be a function"):i=e;const s=Array.isArray(i),l=or.useRef({stale:1,justSubscribed:0,scope:t}),[u,d,h,p,y]=or.useMemo(()=>{l.current.stale=1;const S=Array.isArray(i)?[]:{},T=[],M=[],_=[],C=[];for(const O in i){if(!{}.hasOwnProperty.call(i,O))continue;const U=i[O];Vc.unit(U)||Iw(`expect useUnit ${r?"argument":`value in key "${O}"`} to be a unit`),Vc.event(U)||Vc.effect(U)?(S[O]=t?k5(U,{scope:t}):U,_.push(O),C.push(U)):(S[O]=null,T.push(O),M.push(U))}return[S,T,M,_,C]},[l,t,...Object.keys(i),...Object.values(i)]),g=or.useRef({value:u,storeKeys:d,eventKeys:p,eventValues:y}),b=or.useCallback(S=>{const T=l.current;return T.justSubscribed=1,E5({unit:h,fn:()=>{T.stale||(T.stale=1,S())},scope:t,batch:1})},[h,t,g,l]),w=or.useCallback(()=>{const S=g.current,T=l.current;let M,_=0;const C=S.value,O=S.storeKeys,U=S.eventKeys,D=S.eventValues,X=t!==T.scope;if(T.stale||T.justSubscribed||X){_=!T.justSubscribed||X,M=s?[...u]:{...u},O.length===d.length&&U.length===p.length||(_=1);for(let F=0;F<d.length;F++){const ee=nM(h[F],t),ne=d[F];_||(_=O.includes(ne)?C[ne]!==ee:1),M[ne]=ee}for(let F=0;F<p.length;F++){const ee=y[F],ne=p[F];_||(_=U.includes(ne)?D[U.indexOf(ne)]!==ee:1)}}return _&&(S.value=M),S.storeKeys=d,S.eventKeys=p,S.eventValues=y,T.stale=0,T.justSubscribed=!_,T.scope=t,r?S.value.unit:S.value},[b,h,y,t,g,l]);return tM(b,w,w)}function eM(e){return or.useContext(l2)}function nt(e,t){return J5(e,eM())}const Iw=e=>{throw Error(e)};typeof window<"u"?or.useLayoutEffect:or.useEffect;const{useSyncExternalStore:tM}=n5,{useSyncExternalStoreWithSelector:BR}=K5,nM=(e,t)=>t?t.getState(e):e.getState(),l2=or.createContext(null),{Provider:YR}=l2,c2=["кот","собака","птица","рыба","корова","лошадь","свинья","утка","курица","петух","тигр","лев","слон","жираф","медведь","волк","лиса","еж","кролик","коала","панда","кенгуру","обезьяна","змея","лягушка","крокодил","черепаха","дельфин","акула","кит","осьминог","краб","пингвин","страус","фламинго","орел","сова","воробей","голубь","аист","сурикат","бегемот","носорог","антилопа","яблоко","груша","банан","апельсин","лимон","арбуз","дыня","виноград","вишня","клубника","малина","ежевика","морковь","картошка","лук","чеснок","капуста","огурец","помидор","перец","тыква","баклажан","гриб","хлеб","пицца","бургер","суп","торт","мороженое","шоколад","печенье","конфета","чай","кофе","сок","вода","молоко","стол","стул","кровать","шкаф","диван","лампа","телевизор","компьютер","телефон","часы","зеркало","окно","дверь","книга","тетрадь","ручка","карандаш","кисть","краска","бутылка","стакан","тарелка","вилка","ложка","нож","чайник","сумка","рюкзак","шапка","куртка","пальто","ботинки","носки","перчатки","зонт","очки","дерево","куст","трава","цветок","роза","подсолнух","ромашка","тюльпан","лес","гора","река","озеро","море","пляж","остров","пещера","облако","солнце","луна","звезда","дождь","снег","молния","радуга","ветер","волна","машина","поезд","самолет","корабль","лодка","велосипед","мотоцикл","автобус","троллейбус","трамвай","метро","такси","ракета","вертолет","танк","трактор","грузовик","катер","учитель","врач","повар","пожарный","полицейский","солдат","строитель","фермер","летчик","моряк","шофер","художник","музыкант","писатель","рыбак","спортсмен","танцор","актёр","дом","замок","школа","магазин","церковь","мост","дорога","парк","площадь","фонтан","статуя","флаг","карта","шар","кукла","мяч","пирамидка","машинка","самокат","скейт","качели","горка","песочница","робот","ракета","кот","собака","птица","рыба","корова","лошадь","свинья","утка","курица","петух","тигр","лев","слон","жираф","медведь","волк","лиса","еж","кролик","коала","панда","кенгуру","обезьяна","змея","лягушка","крокодил","черепаха","дельфин","акула","кит","осьминог","краб","пингвин","страус","фламинго","орел","сова","воробей","голубь","аист","сурикат","бегемот","носорог","антилопа","яблоко","груша","банан","апельсин","лимон","арбуз","дыня","виноград","вишня","клубника","малина","ежевика","морковь","картошка","лук","чеснок","капуста","огурец","помидор","перец","тыква","баклажан","гриб","хлеб","пицца","бургер","суп","торт","мороженое","шоколад","печенье","конфета","чай","кофе","сок","вода","молоко","стол","стул","кровать","шкаф","диван","лампа","телевизор","компьютер","телефон","часы","зеркало","окно","дверь","книга","тетрадь"],Wn=600;function Qm(e,t){let r,i=()=>{};e.watch(s=>{s!==r&&(i(),i=t(s),r=s)})}const rM=(()=>{const e=window.location.pathname,t=e.match(/\/scribble\/room\/([^\/]+)/);if(t)return t[1];if(e.endsWith("/words"))return"words";if(e.endsWith("/paintings"))return"paintings";const r=window.location.search.slice(1);if(r)return r;const i="/scribble/";if(e.startsWith(i)){const s=e.slice(i.length);if(s&&!s.includes("/"))return s}return""})();function aM(e){return e[Math.floor(Math.random()*e.length)]}function u2(e){const t=[];for(;t.length<e;){const r=aM(c2);t.includes(r)||t.push(r)}return t}function iM(e,t,r){return Math.max(t,Math.min(e,r))}function ba(e){return Math.round(e*1e4)/1e4}function lo(e){return Math.round(e*100)/100}function Jh(e,t){if(!e)throw new Error(t||"Assertion failed")}function Os(e){return`${ba(e.x)},${ba(e.y)} `}function qw(e,t){return`${ba((e.x+t.x)/2)},${ba((e.y+t.y)/2)} `}function oM(){return window.location.pathname.includes("/scribble")?"/scribble/":"/"}function Xn(e){const t=oM();return e?`${t}${e}`:t.endsWith("/")?t.slice(0,-1):t}function sM(e,t,r,i){if(t.length===0)throw new Event("Can't play without players");let s={playerIds:t,params:r,messages:[],paintings:[],state:{state:"choosing-word",playerId:t[0],words:i}};const l=[],u={};return e.forEach(d=>{var h;if(d.type==="line"||d.type==="undo"){(h=l.at(-1))==null||h.events.push(d);return}(d.type==="guess"||d.type==="choosing-word"||d.type==="new-word")&&(d.type==="guess"&&s.state.state==="drawing"&&(lM(s.state.word,d.text),d.isRevealed==="revealed"&&s.state.revealed.push({playerId:d.player})),s.messages.push(d)),d.type==="choosing-word"?s={...s,state:{state:"choosing-word",playerId:d.playerId,words:d.words}}:d.type==="new-word"&&(u[d.playerId]||(u[d.playerId]=[]),l.push({events:[],playerId:d.playerId,word:d.word}),u[d.playerId].push(d.playerId),s={...s,state:{state:"drawing",playerId:d.playerId,word:d.word,revealed:[]}})}),[s,l]}function lM(e,t){return e=e.replace(/\S/g,"").toLowerCase(),t=e.replace(/\S/g,"").toLowerCase(),e===t?"revealed":"none"}function hn(e){if(typeof e=="number")return(Math.abs(e*2654435761)>>>0).toString(16);if(typeof e=="boolean")return e?"1":"0";if(e===null)return"null";if(e===void 0)return"undefined";if(typeof e=="string"){let t=2166136261;for(let r=0;r<e.length;r++)t^=e.charCodeAt(r),t+=(t<<1)+(t<<4)+(t<<7)+(t<<8)+(t<<24),t=t>>>0;return t.toString(16)}if(Array.isArray(e)){let t=2166136261;for(let r=0;r<e.length;r++){t^=(r+1)*2654435761;const i=hn(e[r]);for(let s=0;s<i.length;s++)t^=i.charCodeAt(s),t*=16777619,t=t>>>0}return t.toString(16)}if(typeof e=="object"){let t=2166136261;const r=Object.keys(e).sort();for(let i=0;i<r.length;i++){const s=r[i],l=hn(s);t^=parseInt(l,16),t*=16777619,t=t>>>0;const u=hn(e[s]);t^=parseInt(u,16),t*=16777619,t=t>>>0}return t.toString(16)}return hn(String(e))}const pt={Remove:"remove",Replace:"replace",Add:"add"},d2=Symbol.for("__MUTATIVE_PROXY_DRAFT__"),cM=Symbol("__MUTATIVE_RAW_RETURN_SYMBOL__"),pu=Symbol.iterator,vn={mutable:"mutable",immutable:"immutable"},Wm={};function Xs(e,t){return e instanceof Map?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Bw(e,t){if(t in e){let r=Reflect.getPrototypeOf(e);for(;r;){const i=Reflect.getOwnPropertyDescriptor(r,t);if(i)return i;r=Reflect.getPrototypeOf(r)}}}function Zm(e){return Object.getPrototypeOf(e)===Set.prototype}function Km(e){return Object.getPrototypeOf(e)===Map.prototype}function mn(e){var t;return(t=e.copy)!==null&&t!==void 0?t:e.original}function ii(e){return!!Re(e)}function Re(e){return typeof e!="object"?null:e==null?void 0:e[d2]}function Jm(e){var t;const r=Re(e);return r?(t=r.copy)!==null&&t!==void 0?t:r.original:e}function Zn(e,t){if(!e||typeof e!="object")return!1;let r;return Object.getPrototypeOf(e)===Object.prototype||Array.isArray(e)||e instanceof Map||e instanceof Set||!!(t!=null&&t.mark)&&((r=t.mark(e,vn))===vn.immutable||typeof r=="function")}function f2(e,t=[]){if(Object.hasOwnProperty.call(e,"key")){const r=e.parent.copy,i=Re(Ir(r,e.key));if(i!==null&&(i==null?void 0:i.original)!==e.original)return null;const s=e.parent.type===3,l=s?Array.from(e.parent.setMap.keys()).indexOf(e.key):e.key;if(!(s&&r.size>l||Xs(r,l)))return null;t.push(l)}if(e.parent)return f2(e.parent,t);t.reverse();try{uM(e.copy,t)}catch{return null}return t}function di(e){return Array.isArray(e)?1:e instanceof Map?2:e instanceof Set?3:0}function Ir(e,t){return di(e)===2?e.get(t):e[t]}function vl(e,t,r){di(e)===2?e.set(t,r):e[t]=r}function ep(e,t){const r=Re(e);return(r?mn(r):e)[t]}function Lr(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function Bp(e){if(e)for(;e.finalities.revoke.length>0;)e.finalities.revoke.pop()()}function Za(e,t){return t?e:[""].concat(e).map(r=>{const i=`${r}`;return i.indexOf("/")===-1&&i.indexOf("~")===-1?i:i.replace(/~/g,"~0").replace(/\//g,"~1")}).join("/")}function uM(e,t){for(let r=0;r<t.length-1;r+=1){const i=t[r];if(e=Ir(di(e)===3?Array.from(e):e,i),typeof e!="object")throw new Error(`Cannot resolve patch at '${t.join("/")}'.`)}return e}function dM(e){const t=Object.create(Object.getPrototypeOf(e));return Reflect.ownKeys(e).forEach(r=>{let i=Reflect.getOwnPropertyDescriptor(e,r);if(i.enumerable&&i.configurable&&i.writable){t[r]=e[r];return}i.writable||(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(i={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[r]}),Reflect.defineProperty(t,r,i)}),t}const fM=Object.prototype.propertyIsEnumerable;function h2(e,t){let r;if(Array.isArray(e))return Array.prototype.concat.call(e);if(e instanceof Set){if(!Zm(e)){const i=Object.getPrototypeOf(e).constructor;return new i(e.values())}return Set.prototype.difference?Set.prototype.difference.call(e,new Set):new Set(e.values())}else if(e instanceof Map){if(!Km(e)){const i=Object.getPrototypeOf(e).constructor;return new i(e)}return new Map(e)}else if(t!=null&&t.mark&&(r=t.mark(e,vn),r!==void 0)&&r!==vn.mutable){if(r===vn.immutable)return dM(e);if(typeof r=="function"){if(t.enablePatches||t.enableAutoFreeze)throw new Error("You can't use mark and patches or auto freeze together.");return r()}throw new Error(`Unsupported mark result: ${r}`)}else if(typeof e=="object"&&Object.getPrototypeOf(e)===Object.prototype){const i={};return Object.keys(e).forEach(s=>{i[s]=e[s]}),Object.getOwnPropertySymbols(e).forEach(s=>{fM.call(e,s)&&(i[s]=e[s])}),i}else throw new Error("Please check mark() to ensure that it is a stable marker draftable function.")}function Ft(e){e.copy||(e.copy=h2(e.original,e.options))}function Us(e){if(!Zn(e))return Jm(e);if(Array.isArray(e))return e.map(Us);if(e instanceof Map){const r=Array.from(e.entries()).map(([i,s])=>[i,Us(s)]);if(!Km(e)){const i=Object.getPrototypeOf(e).constructor;return new i(r)}return new Map(r)}if(e instanceof Set){const r=Array.from(e).map(Us);if(!Zm(e)){const i=Object.getPrototypeOf(e).constructor;return new i(r)}return new Set(r)}const t=Object.create(Object.getPrototypeOf(e));for(const r in e)t[r]=Us(e[r]);return t}function mu(e){return ii(e)?Us(e):e}function lr(e){var t;e.assignedMap=(t=e.assignedMap)!==null&&t!==void 0?t:new Map,e.operated||(e.operated=!0,e.parent&&lr(e.parent))}function Yw(){throw new Error("Cannot modify frozen object")}function io(e,t,r,i,s){{r=r??new WeakMap,i=i??[],s=s??[];const u=r.has(e)?r.get(e):e;if(i.length>0){const d=i.indexOf(u);if(u&&typeof u=="object"&&d!==-1)throw i[0]===u?new Error("Forbids circular reference"):new Error(`Forbids circular reference: ~/${s.slice(0,d).map((h,p)=>{if(typeof h=="symbol")return`[${h.toString()}]`;const y=i[p];return typeof h=="object"&&(y instanceof Map||y instanceof Set)?Array.from(y.keys()).indexOf(h):h}).join("/")}`);i.push(u),s.push(t)}else i.push(u)}if(Object.isFrozen(e)||ii(e)){i.pop(),s.pop();return}switch(di(e)){case 2:for(const[d,h]of e)io(d,d,r,i,s),io(h,d,r,i,s);e.set=e.clear=e.delete=Yw;break;case 3:for(const d of e)io(d,d,r,i,s);e.add=e.clear=e.delete=Yw;break;case 1:Object.freeze(e);let u=0;for(const d of e)io(d,u,r,i,s),u+=1;break;default:Object.freeze(e),Object.keys(e).forEach(d=>{const h=e[d];io(h,d,r,i,s)})}i.pop(),s.pop()}function eg(e,t){const r=di(e);if(r===0)Reflect.ownKeys(e).forEach(i=>{t(i,e[i],e)});else if(r===1){let i=0;for(const s of e)t(i,s,e),i+=1}else e.forEach((i,s)=>t(s,i,e))}function p2(e,t,r){if(ii(e)||!Zn(e,r)||t.has(e)||Object.isFrozen(e))return;const i=e instanceof Set,s=i?new Map:void 0;if(t.add(e),eg(e,(l,u)=>{var d;if(ii(u)){const h=Re(u);Ft(h);const p=!((d=h.assignedMap)===null||d===void 0)&&d.size||h.operated?h.copy:h.original;vl(i?s:e,l,p)}else p2(u,t,r)}),s){const l=e,u=Array.from(l);l.clear(),u.forEach(d=>{l.add(s.has(d)?s.get(d):d)})}}function hM(e,t){const r=e.type===3?e.setMap:e.copy;e.finalities.revoke.length>1&&e.assignedMap.get(t)&&r&&p2(Ir(r,t),e.finalities.handledSet,e.options)}function Yp(e){e.type===3&&e.copy&&(e.copy.clear(),e.setMap.forEach(t=>{e.copy.add(Jm(t))}))}function Pp(e,t,r,i){if(e.operated&&e.assignedMap&&e.assignedMap.size>0&&!e.finalized){if(r&&i){const l=f2(e);l&&t(e,l,r,i)}e.finalized=!0}}function tg(e,t,r,i){const s=Re(r);s&&(s.callbacks||(s.callbacks=[]),s.callbacks.push((l,u)=>{var d;const h=e.type===3?e.setMap:e.copy;if(Lr(Ir(h,t),r)){let p=s.original;s.copy&&(p=s.copy),Yp(e),Pp(e,i,l,u),e.options.enableAutoFreeze&&(e.options.updatedValues=(d=e.options.updatedValues)!==null&&d!==void 0?d:new WeakMap,e.options.updatedValues.set(p,s.original)),vl(h,t,p)}}),e.options.enableAutoFreeze&&s.finalities!==e.finalities&&(e.options.enableAutoFreeze=!1)),Zn(r,e.options)&&e.finalities.draft.push(()=>{const l=e.type===3?e.setMap:e.copy;Lr(Ir(l,t),r)&&hM(e,t)})}function pM(e,t,r,i,s){let{original:l,assignedMap:u,options:d}=e,h=e.copy;h.length<l.length&&([l,h]=[h,l],[r,i]=[i,r]);for(let p=0;p<l.length;p+=1)if(u.get(p.toString())&&h[p]!==l[p]){const y=t.concat([p]),g=Za(y,s);r.push({op:pt.Replace,path:g,value:mu(h[p])}),i.push({op:pt.Replace,path:g,value:mu(l[p])})}for(let p=l.length;p<h.length;p+=1){const y=t.concat([p]),g=Za(y,s);r.push({op:pt.Add,path:g,value:mu(h[p])})}if(l.length<h.length){const{arrayLengthAssignment:p=!0}=d.enablePatches;if(p){const y=t.concat(["length"]),g=Za(y,s);i.push({op:pt.Replace,path:g,value:l.length})}else for(let y=h.length;l.length<y;y-=1){const g=t.concat([y-1]),b=Za(g,s);i.push({op:pt.Remove,path:b})}}}function mM({original:e,copy:t,assignedMap:r},i,s,l,u){r.forEach((d,h)=>{const p=Ir(e,h),y=mu(Ir(t,h)),g=d?Xs(e,h)?pt.Replace:pt.Add:pt.Remove;if(Lr(p,y)&&g===pt.Replace)return;const b=i.concat(h),w=Za(b,u);s.push(g===pt.Remove?{op:g,path:w}:{op:g,path:w,value:y}),l.push(g===pt.Add?{op:pt.Remove,path:w}:g===pt.Remove?{op:pt.Add,path:w,value:p}:{op:pt.Replace,path:w,value:p})})}function gM({original:e,copy:t},r,i,s,l){let u=0;e.forEach(d=>{if(!t.has(d)){const h=r.concat([u]),p=Za(h,l);i.push({op:pt.Remove,path:p,value:d}),s.unshift({op:pt.Add,path:p,value:d})}u+=1}),u=0,t.forEach(d=>{if(!e.has(d)){const h=r.concat([u]),p=Za(h,l);i.push({op:pt.Add,path:p,value:d}),s.unshift({op:pt.Remove,path:p,value:d})}u+=1})}function sl(e,t,r,i){const{pathAsArray:s=!0}=e.options.enablePatches;switch(e.type){case 0:case 2:return mM(e,t,r,i,s);case 1:return pM(e,t,r,i,s);case 3:return gM(e,t,r,i,s)}}const Du=(e,t,r=!1)=>{if(typeof e=="object"&&e!==null&&(!Zn(e,t)||r))throw new Error("Strict mode: Mutable data cannot be accessed directly, please use 'unsafe(callback)' wrap.")},Xp={get size(){return mn(Re(this)).size},has(e){return mn(Re(this)).has(e)},set(e,t){const r=Re(this),i=mn(r);return(!i.has(e)||!Lr(i.get(e),t))&&(Ft(r),lr(r),r.assignedMap.set(e,!0),r.copy.set(e,t),tg(r,e,t,sl)),this},delete(e){if(!this.has(e))return!1;const t=Re(this);return Ft(t),lr(t),t.original.has(e)?t.assignedMap.set(e,!1):t.assignedMap.delete(e),t.copy.delete(e),!0},clear(){const e=Re(this);if(this.size){Ft(e),lr(e),e.assignedMap=new Map;for(const[t]of e.original)e.assignedMap.set(t,!1);e.copy.clear()}},forEach(e,t){const r=Re(this);mn(r).forEach((i,s)=>{e.call(t,this.get(s),s,this)})},get(e){var t,r;const i=Re(this),s=mn(i).get(e),l=((r=(t=i.options).mark)===null||r===void 0?void 0:r.call(t,s,vn))===vn.mutable;if(i.options.strict&&Du(s,i.options,l),l||i.finalized||!Zn(s,i.options)||s!==i.original.get(e))return s;const u=Wm.createDraft({original:s,parentDraft:i,key:e,finalities:i.finalities,options:i.options});return Ft(i),i.copy.set(e,u),u},keys(){return mn(Re(this)).keys()},values(){const e=this.keys();return{[pu]:()=>this.values(),next:()=>{const t=e.next();return t.done?t:{done:!1,value:this.get(t.value)}}}},entries(){const e=this.keys();return{[pu]:()=>this.entries(),next:()=>{const t=e.next();if(t.done)return t;const r=this.get(t.value);return{done:!1,value:[t.value,r]}}}},[pu](){return this.entries()}},vM=Reflect.ownKeys(Xp),Pw=(e,t,{isValuesIterator:r})=>()=>{var i,s;const l=t.next();if(l.done)return l;const u=l.value;let d=e.setMap.get(u);const h=Re(d),p=((s=(i=e.options).mark)===null||s===void 0?void 0:s.call(i,d,vn))===vn.mutable;if(e.options.strict&&Du(u,e.options,p),!p&&!h&&Zn(u,e.options)&&!e.finalized&&e.original.has(u)){const y=Wm.createDraft({original:u,parentDraft:e,key:u,finalities:e.finalities,options:e.options});e.setMap.set(u,y),d=y}else h&&(d=h.proxy);return{done:!1,value:r?d:[d,d]}},ju={get size(){return Re(this).setMap.size},has(e){const t=Re(this);if(t.setMap.has(e))return!0;Ft(t);const r=Re(e);return!!(r&&t.setMap.has(r.original))},add(e){const t=Re(this);return this.has(e)||(Ft(t),lr(t),t.assignedMap.set(e,!0),t.setMap.set(e,e),tg(t,e,e,sl)),this},delete(e){if(!this.has(e))return!1;const t=Re(this);Ft(t),lr(t);const r=Re(e);return r&&t.setMap.has(r.original)?(t.assignedMap.set(r.original,!1),t.setMap.delete(r.original)):(!r&&t.setMap.has(e)?t.assignedMap.set(e,!1):t.assignedMap.delete(e),t.setMap.delete(e))},clear(){if(!this.size)return;const e=Re(this);Ft(e),lr(e);for(const t of e.original)e.assignedMap.set(t,!1);e.setMap.clear()},values(){const e=Re(this);Ft(e);const t=e.setMap.keys();return{[Symbol.iterator]:()=>this.values(),next:Pw(e,t,{isValuesIterator:!0})}},entries(){const e=Re(this);Ft(e);const t=e.setMap.keys();return{[Symbol.iterator]:()=>this.entries(),next:Pw(e,t,{isValuesIterator:!1})}},keys(){return this.values()},[pu](){return this.values()},forEach(e,t){const r=this.values();let i=r.next();for(;!i.done;)e.call(t,i.value,i.value,this),i=r.next()}};Set.prototype.difference&&Object.assign(ju,{intersection(e){return Set.prototype.intersection.call(new Set(this.values()),e)},union(e){return Set.prototype.union.call(new Set(this.values()),e)},difference(e){return Set.prototype.difference.call(new Set(this.values()),e)},symmetricDifference(e){return Set.prototype.symmetricDifference.call(new Set(this.values()),e)},isSubsetOf(e){return Set.prototype.isSubsetOf.call(new Set(this.values()),e)},isSupersetOf(e){return Set.prototype.isSupersetOf.call(new Set(this.values()),e)},isDisjointFrom(e){return Set.prototype.isDisjointFrom.call(new Set(this.values()),e)}});const yM=Reflect.ownKeys(ju),m2=new WeakSet,g2={get(e,t,r){var i,s;const l=(i=e.copy)===null||i===void 0?void 0:i[t];if(l&&m2.has(l))return l;if(t===d2)return e;let u;if(e.options.mark){const p=t==="size"&&(e.original instanceof Map||e.original instanceof Set)?Reflect.get(e.original,t):Reflect.get(e.original,t,r);if(u=e.options.mark(p,vn),u===vn.mutable)return e.options.strict&&Du(p,e.options,!0),p}const d=mn(e);if(d instanceof Map&&vM.includes(t)){if(t==="size")return Object.getOwnPropertyDescriptor(Xp,"size").get.call(e.proxy);const p=Xp[t];if(p)return p.bind(e.proxy)}if(d instanceof Set&&yM.includes(t)){if(t==="size")return Object.getOwnPropertyDescriptor(ju,"size").get.call(e.proxy);const p=ju[t];if(p)return p.bind(e.proxy)}if(!Xs(d,t)){const p=Bw(d,t);return p?"value"in p?p.value:(s=p.get)===null||s===void 0?void 0:s.call(e.proxy):void 0}const h=d[t];if(e.options.strict&&Du(h,e.options),e.finalized||!Zn(h,e.options))return h;if(h===ep(e.original,t)){if(Ft(e),e.copy[t]=ng({original:e.original[t],parentDraft:e,key:e.type===1?Number(t):t,finalities:e.finalities,options:e.options}),typeof u=="function"){const p=Re(e.copy[t]);return Ft(p),lr(p),p.copy}return e.copy[t]}return h},set(e,t,r){var i;if(e.type===3||e.type===2)throw new Error("Map/Set draft does not support any property assignment.");let s;if(e.type===1&&t!=="length"&&!(Number.isInteger(s=Number(t))&&s>=0&&(t===0||s===0||String(s)===String(t))))throw new Error("Only supports setting array indices and the 'length' property.");const l=Bw(mn(e),t);if(l!=null&&l.set)return l.set.call(e.proxy,r),!0;const u=ep(mn(e),t),d=Re(u);return d&&Lr(d.original,r)?(e.copy[t]=r,e.assignedMap=(i=e.assignedMap)!==null&&i!==void 0?i:new Map,e.assignedMap.set(t,!1),!0):(Lr(r,u)&&(r!==void 0||Xs(e.original,t))||(Ft(e),lr(e),Xs(e.original,t)&&Lr(r,e.original[t])?e.assignedMap.delete(t):e.assignedMap.set(t,!0),e.copy[t]=r,tg(e,t,r,sl)),!0)},has(e,t){return t in mn(e)},ownKeys(e){return Reflect.ownKeys(mn(e))},getOwnPropertyDescriptor(e,t){const r=mn(e),i=Reflect.getOwnPropertyDescriptor(r,t);return i&&{writable:!0,configurable:e.type!==1||t!=="length",enumerable:i.enumerable,value:r[t]}},getPrototypeOf(e){return Reflect.getPrototypeOf(e.original)},setPrototypeOf(){throw new Error("Cannot call 'setPrototypeOf()' on drafts")},defineProperty(){throw new Error("Cannot call 'defineProperty()' on drafts")},deleteProperty(e,t){var r;return e.type===1?g2.set.call(this,e,t,void 0,e.proxy):(ep(e.original,t)!==void 0||t in e.original?(Ft(e),lr(e),e.assignedMap.set(t,!1)):(e.assignedMap=(r=e.assignedMap)!==null&&r!==void 0?r:new Map,e.assignedMap.delete(t)),e.copy&&delete e.copy[t],!0)}};function ng(e){const{original:t,parentDraft:r,key:i,finalities:s,options:l}=e,u=di(t),d={type:u,finalized:!1,parent:r,original:t,copy:null,proxy:null,finalities:s,options:l,setMap:u===3?new Map(t.entries()):void 0};(i||"key"in e)&&(d.key=i);const{proxy:h,revoke:p}=Proxy.revocable(u===1?Object.assign([],d):d,g2);if(s.revoke.push(p),m2.add(h),d.proxy=h,r){const y=r;y.finalities.draft.push((g,b)=>{var w,S;const T=Re(h);let M=y.type===3?y.setMap:y.copy;const _=Ir(M,i),C=Re(_);if(C){let O=C.original;C.operated&&(O=Jm(_)),Yp(C),Pp(C,sl,g,b),y.options.enableAutoFreeze&&(y.options.updatedValues=(w=y.options.updatedValues)!==null&&w!==void 0?w:new WeakMap,y.options.updatedValues.set(O,C.original)),vl(M,i,O)}(S=T.callbacks)===null||S===void 0||S.forEach(O=>{O(g,b)})})}else{const y=Re(h);y.finalities.draft.push((g,b)=>{Yp(y),Pp(y,sl,g,b)})}return h}Wm.createDraft=ng;function bM(e,t,r,i,s){var l;const u=Re(e),d=(l=u==null?void 0:u.original)!==null&&l!==void 0?l:e,h=!!t.length;if(u!=null&&u.operated)for(;u.finalities.draft.length>0;)u.finalities.draft.pop()(r,i);const p=h?t[0]:u?u.operated?u.copy:u.original:e;return u&&Bp(u),s&&io(p,p,u==null?void 0:u.options.updatedValues),[p,r&&h?[{op:pt.Replace,path:[],value:t[0]}]:r,i&&h?[{op:pt.Replace,path:[],value:d}]:i]}function wM(e,t){var r;const i={draft:[],revoke:[],handledSet:new WeakSet};let s,l;t.enablePatches&&(s=[],l=[]);const d=((r=t.mark)===null||r===void 0?void 0:r.call(t,e,vn))===vn.mutable||!Zn(e,t)?e:ng({original:e,parentDraft:null,finalities:i,options:t});return[d,(h=[])=>{const[p,y,g]=bM(d,h,s,l,t.enableAutoFreeze);return t.enablePatches?[p,y,g]:p}]}function Fp(e){const{rootDraft:t,value:r,useRawReturn:i=!1,isRoot:s=!0}=e;eg(r,(l,u,d)=>{const h=Re(u);if(h&&t&&h.finalities===t.finalities){e.isContainDraft=!0;const p=h.original;if(d instanceof Set){const y=Array.from(d);d.clear(),y.forEach(g=>d.add(l===g?p:g))}else vl(d,l,p)}else typeof u=="object"&&u!==null&&(e.value=u,e.isRoot=!1,Fp(e))}),s&&(e.isContainDraft||console.warn("The return value does not contain any draft, please use 'rawReturn()' to wrap the return value to improve performance."),i&&console.warn("The return value contains drafts, please don't use 'rawReturn()' to wrap the return value."))}function v2(e){var t;const r=Re(e);if(!Zn(e,r==null?void 0:r.options))return e;const i=di(e);if(r&&!r.operated)return r.original;let s;function l(){s=i===2?Km(e)?new Map(e):new(Object.getPrototypeOf(e)).constructor(e):i===3?Array.from(r.setMap.values()):h2(e,r==null?void 0:r.options)}if(r){r.finalized=!0;try{l()}finally{r.finalized=!1}}else s=e;if(eg(s,(u,d)=>{if(r&&Lr(Ir(r.original,u),d))return;const h=v2(d);h!==d&&(s===e&&l(),vl(s,u,h))}),i===3){const u=(t=r==null?void 0:r.original)!==null&&t!==void 0?t:s;return Zm(u)?new Set(s):new(Object.getPrototypeOf(u)).constructor(s)}return s}function Xw(e){if(!ii(e))throw new Error(`current() is only used for Draft, parameter: ${e}`);return v2(e)}const xM=e=>function t(r,i,s){var l,u,d;if(typeof r=="function"&&typeof i!="function")return function(D,...X){return t(D,F=>r.call(this,F,...X),i)};const h=r,p=i;let y=s;if(typeof i!="function"&&(y=i),y!==void 0&&Object.prototype.toString.call(y)!=="[object Object]")throw new Error(`Invalid options: ${y}, 'options' should be an object.`);y=Object.assign(Object.assign({},e),y);const g=ii(h)?Xw(h):h,b=Array.isArray(y.mark)?(D,X)=>{for(const F of y.mark){if(typeof F!="function")throw new Error(`Invalid mark: ${F}, 'mark' should be a function.`);const ee=F(D,X);if(ee)return ee}}:y.mark,w=(l=y.enablePatches)!==null&&l!==void 0?l:!1,S=(u=y.strict)!==null&&u!==void 0?u:!1,M={enableAutoFreeze:(d=y.enableAutoFreeze)!==null&&d!==void 0?d:!1,mark:b,strict:S,enablePatches:w};if(!Zn(g,M)&&typeof g=="object"&&g!==null)throw new Error("Invalid base state: create() only supports plain objects, arrays, Set, Map or using mark() to mark the state as immutable.");const[_,C]=wM(g,M);if(typeof i!="function"){if(!Zn(g,M))throw new Error("Invalid base state: create() only supports plain objects, arrays, Set, Map or using mark() to mark the state as immutable.");return[_,C]}let O;try{O=p(_)}catch(D){throw Bp(Re(_)),D}const U=D=>{const X=Re(_);if(!ii(D)){if(D!==void 0&&!Lr(D,_)&&(X!=null&&X.operated))throw new Error("Either the value is returned as a new non-draft value, or only the draft is modified without returning any value.");const ee=D==null?void 0:D[cM];if(ee){const ne=ee[0];return M.strict&&typeof D=="object"&&D!==null&&Fp({rootDraft:X,value:D,useRawReturn:!0}),C([ne])}if(D!==void 0)return typeof D=="object"&&D!==null&&Fp({rootDraft:X,value:D}),C([D])}if(D===_||D===void 0)return C([]);const F=Re(D);if(M===F.options){if(F.operated)throw new Error("Cannot return a modified child draft.");return C([Xw(D)])}return C([D])};return O instanceof Promise?O.then(U,D=>{throw Bp(Re(_)),D}):U(O)},Gp=xM();Object.prototype.constructor.toString();function y2(e,t){const r=Object.keys(e),i=Object.keys(t);return r.length===i.length&&Object.keys(e).every(s=>t.hasOwnProperty(s))}function Fw(e,t){return Object.keys(e).length===Object.keys(t).length&&Object.keys(e).every(r=>t.hasOwnProperty(r)&&e[r]===t[r])}function gu(e,t){return typeof e!="object"||typeof t!="object"||e===null||t===null?e===t:y2(e,t)?Object.keys(e).every(r=>gu(e[r],t[r])):!1}function rg(e){if(!Ls(e))return e;const t={};for(const[r,i]of Object.entries(e))i!==void 0&&(t[r]=i);return t}function b2(e,t){if(!Ls(e)||!Ls(t))return t;const r=Object.assign({},e);for(const i of Object.keys(t)){if(t[i]===void 0)continue;if(t[i]===null){delete r[i];continue}const s=Ls(e[i])&&Ls(t[i]);r[i]=s?b2(e[i],t[i]):t[i]}return r}function Ls(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function _M(e,t,r){if(!e||t.length===0)return;let i=e||{};for(let l=0;l<t.length-1;l++){const u=t[l];(!(u in i)||typeof i[u]!="object")&&(i[u]=typeof t[l+1]=="number"?[]:{}),i=i[u]}const s=t[t.length-1];Array.isArray(i)&&typeof s=="number"?i.splice(s,0,r):i[s]=r}function Gw(e,t,r){if(!e||t.length===0)return;let i=e||{};for(let s=0;s<t.length-1;s++){const l=t[s];(!(l in i)||typeof i[l]!="object")&&(i[l]=typeof t[s+1]=="number"?[]:{}),i=i[l]}i[t[t.length-1]]=r}function w2(e,t){if(!e||t.length===0)return;const[r,...i]=t;if(r in e){if(i.length===0){Array.isArray(e)?e.splice(r,1):delete e[r];return}w2(e[r],i),SM(e[r])&&delete e[r]}}function SM(e){return e&&Object.keys(e).length===0}function TM(e){return new Date(e)}function kM(e){return new Date(e+"Z")}function EM(e){return new Date(e+"T00:00:00Z")}function CM(e){const[t,r]=e.split(" ");return new Date(t+"T"+r+"Z")}function MM(e){const[t,r]=e.split(" ");return new Date(t+"T"+r+"Z")}function NM(e){return new Date(e)}function OM(e){const t=/^(\w{3}) (\w{3}) (\d{2}) (\d{4})$/;if(!e.match(t))throw new Error(`Unable to parse \`${e}\` as a date.`);const i=new Date(e+" UTC");return new Date(Date.UTC(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate(),0,0,0,0))}function AM(e){const t=/^(.+T.+)([+-])(\d{2})$/,r=e.match(t);if(r){const[,i,s,l]=r,u=`${i}${s}${l}:00`;return new Date(u)}return null}const RM=[MM,OM,NM,EM,kM,TM,AM,CM];function zM(e,t){try{const r=e(t);return r instanceof Date&&!isNaN(r.getTime())?r:null}catch{return null}}function x2(e){for(const t of RM){const r=zM(t,e);if(r)return r}return null}function DM(e){try{const t=JSON.parse(e);return typeof t=="string"?x2(t):null}catch{return null}}function Ku(e){if(e instanceof Date)return e;if(typeof e=="string"){const t=x2(e)||DM(e);if(!t)throw new Error(`Unable to parse \`${e}\` as a date.`);return t}else if(typeof e=="number")return new Date(e);throw new Error(`Invalid date value \`${e}\`. Expected a date, number, or string, got type ${typeof e}.`)}function jM(e){return e.cardinality==="one"}function ag(e){return e["value-type"]==="ref"}function ig(e){return e["value-type"]==="blob"}function yl(e,t){return e[t]}function Ju(e,t){return t.reduce((r,i)=>r&&r.get(i),e)}function Yn(e,t){if(t.length===0)throw new Error("path must have at least one element");if(t.length===1){e.delete(t[0]);return}const[r,...i]=t;e.has(r)&&Yn(e.get(r),i)}function Jt(e,t,r){if(t.length===0)throw new Error("path must have at least one element");if(t.length===1){e.set(t[0],r);return}const[i,...s]=t;let l=e.get(i);l||(l=new Map,e.set(i,l)),Jt(l,s,r)}function _2(e,t,r){const i=new Map,s=new Map,l=new Map;for(const u of t){let[d,h,p,y]=u;const g=yl(e,h);if(!g){console.warn("no such attr",d,e);continue}g["checked-data-type"]==="date"&&r&&(p=Ku(p),u[2]=p),ag(g)&&Jt(l,[p,h,d],u),Jt(i,[d,h,p],u),Jt(s,[h,d,p],u)}return{eav:i,aev:s,vae:l}}function S2(e){const t=new Map,r=new Map,i=new Map,s=new Map;for(const l of Object.values(e)){const u=l["forward-identity"],[d,h,p]=u,y=l["reverse-identity"];if(Jt(i,[h,p],l),ig(l)&&Jt(t,[h,p],l),l["primary?"]&&Jt(r,[h],l),y){const[g,b,w]=y;Jt(s,[b,w],l)}}return{blobAttrs:t,primaryKeys:r,forwardIdents:i,revIdents:s}}function UM(e){return{__type:e.__type,attrs:e.attrs,triples:en(e.eav,3),cardinalityInference:e.cardinalityInference,linkIndex:e.linkIndex,useDateObjects:e.useDateObjects}}function LM(e){return Vp(e.attrs,e.triples,e.cardinalityInference,e.linkIndex,e.useDateObjects)}function og(e){e.attrIndexes=S2(e.attrs)}function Vp(e,t,r,i,s){const l=_2(e,t,s);return l.useDateObjects=s,l.attrs=e,l.attrIndexes=S2(e),l.cardinalityInference=r,l.linkIndex=i,l.__type="store",l}function bl(e,t){var r,i;let s;if(Array.isArray(t[0])){const[u,d]=t[0],h=e.aev.get(u);if(!h)return null;s=(r=en(h,2).find(y=>y[2]===d))===null||r===void 0?void 0:r[0]}else s=t[0];if(!s)return null;const l=t[2];if(Array.isArray(l)&&l.length===2&&e.aev.get(l[0])){const[u,d]=l,h=e.aev.get(u);if(!h)return null;const y=(i=en(h,2).find(T=>T[2]===d))===null||i===void 0?void 0:i[0];if(!y)return null;const[g,b,w,...S]=t;return[s,b,y,...S]}else{const[u,...d]=t;return[s,...d]}}function $M(e,t){const r=bl(e,t);if(!r)return;const[i,s,l]=r,u=yl(e.attrs,s);u&&(Yn(e.eav,[i,s,l]),Yn(e.aev,[s,i,l]),ag(u)&&Yn(e.vae,[l,s,i]))}let HM=0;function T2(e,t,r){const[i,s,l]=r;let u;const d=Ju(e.ea,[i,s,l]);return d&&(u=d[3]),u||Date.now()*10+HM++}function IM(e,t){var r;const i=bl(e,t);if(!i)return;let[s,l,u]=i;const d=yl(e.attrs,l);if(!d)return;d["checked-data-type"]==="date"&&e.useDateObjects&&(u=Ku(u));const h=Ju(e.eav,[s,l,u]),p=(r=h==null?void 0:h[3])!==null&&r!==void 0?r:T2(e,d,i),y=[s,l,u,p];jM(d)?(Jt(e.eav,[s,l],new Map([[u,y]])),Jt(e.aev,[l,s],new Map([[u,y]]))):(Jt(e.eav,[s,l,u],y),Jt(e.aev,[l,s,u],y)),ag(d)&&Jt(e.vae,[u,l,s],y)}function qM(e,t){var r;const i=bl(e,t);if(!i)return;const[s,l,u]=i,d=yl(e.attrs,l);if(!d)return;if(!ig(d))throw new Error("merge operation is not supported for links");const h=Ju(e.eav,[s,l]);if(!h)return;const p=(r=h.values().next())===null||r===void 0?void 0:r.value;if(!p)return;const y=p[2],g=b2(y,u),b=[s,l,g,T2(e,d,p)];Jt(e.eav,[s,l],new Map([[g,b]]))}function Qp(e,t){var r,i;const[s,l]=t,u=bl(e,[s]);if(!u)return;const[d]=u,h=e.eav.get(d);if(h){for(const y of h.keys()){const g=e.attrs[y];g&&g["on-delete-reverse"]==="cascade"&&en(h.get(y),1).forEach(([b,w,S])=>{var T;return Qp(e,[S,(T=g["reverse-identity"])===null||T===void 0?void 0:T[1]])}),(!l||!g||((r=g["forward-identity"])===null||r===void 0?void 0:r[1])===l)&&(Yn(e.aev,[y,d]),Yn(e.eav,[d,y]))}h.size===0&&Yn(e.eav,[d])}const p=e.vae.get(d)&&en(e.vae.get(d),2);p&&p.forEach(y=>{var g,b,w;const[S,T,M]=y,_=e.attrs[T];(!l||!_||((g=_["reverse-identity"])===null||g===void 0?void 0:g[1])===l)&&(Yn(e.eav,[S,T,M]),Yn(e.aev,[T,S,M]),Yn(e.vae,[M,T,S])),_&&_["on-delete"]==="cascade"&&((b=_["reverse-identity"])===null||b===void 0?void 0:b[1])===l&&Qp(e,[S,(w=_["forward-identity"])===null||w===void 0?void 0:w[1]])}),((i=e.vae.get(d))===null||i===void 0?void 0:i.size)===0&&Yn(e.vae,[d])}function k2(e,t){const r=_2(e.attrs,t,e.useDateObjects);Object.keys(r).forEach(i=>{e[i]=r[i]})}function BM(e,[t]){e.attrs[t.id]=t,og(e)}function E2(e){return en(e.eav,3)}function YM(e,[t]){if(!e.attrs[t])return;const r=E2(e).filter(([i,s])=>s!==t);delete e.attrs[t],og(e),k2(e,r)}function PM(e,[t]){const r=e.attrs[t.id];r&&(e.attrs[t.id]=Object.assign(Object.assign({},r),t),og(e),k2(e,E2(e)))}function XM(e,t){const[r,...i]=t;switch(r){case"add-triple":IM(e,i);break;case"deep-merge-triple":qM(e,i);break;case"retract-triple":$M(e,i);break;case"delete-entity":Qp(e,i);break;case"add-attr":BM(e,i);break;case"delete-attr":YM(e,i);break;case"update-attr":PM(e,i);break;case"rule-params":break;default:throw new Error(`unhandled transaction action: ${r}`)}}function en(e,t,r=[]){if(!e||t===0)return r;if(t===1){for(const i of e.values())r.push(i);return r}for(const i of e.values())en(i,t-1,r);return r}function Zc(e,t,r){var i,s;const l=[];if(r!=null&&r.hasOwnProperty("$not")){for(const d of t.keys())r.$not!==d&&l.push(t.get(d));return l}if(r!=null&&r.hasOwnProperty("$isNull")){const{attrId:d,isNull:h,reverse:p}=r.$isNull;if(p)for(const y of t.keys()){const g=e.vae.get(y),b=!g||((i=g.get(d))===null||i===void 0?void 0:i.get(null))||!g.get(d);(h?b:!b)&&l.push(t.get(y))}else{const y=e.aev.get(d);for(const g of t.keys()){const b=!y||((s=y.get(g))===null||s===void 0?void 0:s.get(null))||!y.get(g);(h?b:!b)&&l.push(t.get(g))}}return l}if(r!=null&&r.$comparator)return en(t,1).filter(r.$op);const u=r.in||r.$in||[r];for(const d of u){const h=t.get(d);h&&l.push(h)}return l}function FM(e,t,r){let i="";return e!==void 0&&(i+="e"),t!==void 0&&(i+="a"),r!==void 0&&(i+="v"),i}function GM(e,[t,r,i]){var s,l;switch(FM(t,r,i)){case"e":{const d=e.eav.get(t);return en(d,2)}case"ea":{const d=(s=e.eav.get(t))===null||s===void 0?void 0:s.get(r);return en(d,1)}case"eav":{const d=(l=e.eav.get(t))===null||l===void 0?void 0:l.get(r);return d?Zc(e,d,i):[]}case"ev":{const d=e.eav.get(t);if(!d)return[];const h=[];for(const p of d.values())h.push(...Zc(e,p,i));return h}case"a":{const d=e.aev.get(r);return en(d,2)}case"av":{const d=e.aev.get(r);if(!d)return[];const h=[];for(const p of d.values())h.push(...Zc(e,p,i));return h}case"v":{const d=[];for(const h of e.eav.values())for(const p of h.values())d.push(...Zc(e,p,i));return d}default:return en(e.eav,3)}}function VM(e,t,r){var i;const s={};for(const[l,u]of t.entries()){const d=(i=e.eav.get(r))===null||i===void 0?void 0:i.get(u.id),h=en(d,1);for(const p of h)s[l]=p[2]}return s}function xo(e,t,r){var i;return(i=e.attrIndexes.forwardIdents.get(t))===null||i===void 0?void 0:i.get(r)}function C2(e,t,r){var i;return(i=e.attrIndexes.revIdents.get(t))===null||i===void 0?void 0:i.get(r)}function QM(e,t){return e.attrIndexes.blobAttrs.get(t)}function WM(e,t){var r;const i=e.attrIndexes.primaryKeys.get(t);return i||((r=e.attrIndexes.forwardIdents.get(t))===null||r===void 0?void 0:r.get("id"))}function ZM(e,t){const r=bl(e,t);if(!r)return;const[i,s,l]=r;if(yl(e.attrs,s))return Ju(e.eav,[i,s])}function KM(e,t){const r=t.filter(([i,...s])=>{var l;if(i!=="add-triple"&&i!=="deep-merge-triple")return!0;const u=(l=s[3])===null||l===void 0?void 0:l.mode;if(u!=="create"&&u!=="update")return!0;const d=ZM(e,s);return!(u==="create"&&d||u==="update"&&!d)});return Gp(e,i=>{r.forEach(s=>{XM(i,s)})})}function JM(e){return typeof e=="string"&&e.startsWith("?")}function eN(e,t,r){if(r.hasOwnProperty(e)){const i=r[e];return M2(i,t,r)}return Object.assign(Object.assign({},r),{[e]:t})}function Vw(e,t,r){return e===t?r:null}function tN(e){switch(typeof e){case"string":return e.startsWith("?")?eN:Vw;default:return Vw}}const nN=["in","$in","$not","$isNull","$comparator"];function rN(e){for(const t of nN)if(e.hasOwnProperty(t))return!0;return!1}function M2(e,t,r){return r?typeof e=="object"?rN(e)?r:null:tN(e)(e,t,r):null}function aN(e,t,r){return e.reduce((i,s,l)=>{const u=t[l];return M2(s,u,i)},r)}function iN(e,t,r){return lN(e,t,r).map(i=>aN(t,i,r)).filter(i=>i)}function oN(e,t,r){return t.or?t.or.patterns.flatMap(i=>Wp(e,i,r)):t.and?t.and.patterns.reduce((i,s)=>Wp(e,s,i),r):r.flatMap(i=>iN(e,t,i))}function Wp(e,t,r=[{}]){return t.reduce((i,s)=>oN(e,s,i),r)}function sg(e,t){return Array.isArray(t)?t.map(r=>sg(e,r)):JM(t)?e[t]:t}function sN(e,{find:t,where:r}){return Wp(e,r).map(s=>sg(s,t))}function lN(e,t,r){return GM(e,sg(r,t))}const Ut=[];for(let e=0;e<256;++e)Ut.push((e+256).toString(16).slice(1));function cN(e,t=0){return(Ut[e[t+0]]+Ut[e[t+1]]+Ut[e[t+2]]+Ut[e[t+3]]+"-"+Ut[e[t+4]]+Ut[e[t+5]]+"-"+Ut[e[t+6]]+Ut[e[t+7]]+"-"+Ut[e[t+8]]+Ut[e[t+9]]+"-"+Ut[e[t+10]]+Ut[e[t+11]]+Ut[e[t+12]]+Ut[e[t+13]]+Ut[e[t+14]]+Ut[e[t+15]]).toLowerCase()}let tp;const uN=new Uint8Array(16);function dN(){if(!tp){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");tp=crypto.getRandomValues.bind(crypto)}return tp(uN)}const fN=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Qw={randomUUID:fN};function hN(e,t,r){var s;if(Qw.randomUUID&&!e)return Qw.randomUUID();e=e||{};const i=e.random??((s=e.rng)==null?void 0:s.call(e))??dN();if(i.length<16)throw new Error("Random bytes length must be >= 16");return i[6]=i[6]&15|64,i[8]=i[8]&63|128,cN(i)}function Ww(e){const t=e.replace(/-/g,""),r=[];for(let i=0;i<t.length;i+=2)r.push(parseInt(t.substring(i,i+2),16));return r}function pN(e,t){for(let r=0;r<e.length;r++){if(e[r]<t[r])return-1;if(e[r]>t[r])return 1}return 0}function mN(e,t){return pN(Ww(e),Ww(t))}function mt(){return hN()}let gN=0;function Fs(e){return ed(`_${e}`,gN++)}function ed(e,t){return`?${e}-${t}`}class _o extends Error{constructor(t){super(t),this.name="AttrNotFoundError"}}function vN(e,t){const r=WM(e,t);if(!r)throw new _o(`Could not find id attr for ${t}`);return r}function Zw(e,t,r,i){return[yN(e,t,r,i)]}function yN(e,t,r,i){return[e(r,i),vN(t,r).id,e(r,i),e("time",i)]}function bN(e,t,r){return e.map(i=>i===t?r:i)}function N2(e,t,r,i,s){const l=xo(t,r,s),u=C2(t,r,s),d=l||u;if(!d)throw new _o(`Could not find attr for ${[r,s]}`);if(d["value-type"]!=="ref")throw new Error(`Attr ${d.id} is not a ref`);const[h,p]=d["forward-identity"],[y,g]=d["reverse-identity"],b=i+1,w=l?[e(p,i),d.id,e(g,b),Fs("time")]:[e(p,b),d.id,e(g,i),Fs("time")];return[l?g:p,b,w,d,!!l]}function Kw(e,t){if(typeof t!="string")return function(u){return!1};const i=t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/%/g,".*").replace(/_/g,"."),s=new RegExp(`^${i}$`,e?void 0:"i");return function(u){return typeof u!="string"?!1:s.test(u)}}function wN(e,t){if(typeof t!="object"||t.hasOwnProperty("$in")||t.hasOwnProperty("in"))return t;const r=e["checked-data-type"]==="date";if(t.hasOwnProperty("$gt"))return{$comparator:!0,$op:r?function(s){return new Date(s[2])>new Date(t.$gt)}:function(s){return s[2]>t.$gt}};if(t.hasOwnProperty("$gte"))return{$comparator:!0,$op:r?function(s){return new Date(s[2])>=new Date(t.$gte)}:function(s){return s[2]>=t.$gte}};if(t.hasOwnProperty("$lt"))return{$comparator:!0,$op:r?function(s){return new Date(s[2])<new Date(t.$lt)}:function(s){return s[2]<t.$lt}};if(t.hasOwnProperty("$lte"))return{$comparator:!0,$op:r?function(s){return new Date(s[2])<=new Date(t.$lte)}:function(s){return s[2]<=t.$lte}};if(t.hasOwnProperty("$like")){const i=Kw(!0,t.$like);return{$comparator:!0,$op:function(l){return i(l[2])}}}if(t.hasOwnProperty("$ilike")){const i=Kw(!1,t.$ilike);return{$comparator:!0,$op:function(l){return i(l[2])}}}return t}function xN(e,t,r,i,s,l){const u=xo(t,r,s),d=C2(t,r,s),h=u||d;if(!h)throw new _o(`No attr for etype = ${r} label = ${s}`);if(l!=null&&l.hasOwnProperty("$isNull")){const p=xo(t,r,"id");if(!p)throw new _o(`No attr for etype = ${r} label = id`);return[e(r,i),p.id,{$isNull:{attrId:h.id,isNull:l.$isNull,reverse:!u}},Fs("time")]}return u?[e(r,i),h.id,wN(h,l),Fs("time")]:[l,h.id,e(r,i),Fs("time")]}function _N(e,t,r,i,s){const[l,u,d]=s.reduce((h,p)=>{const[y,g,b]=h,[w,S,T]=N2(e,t,y,g,p);return[w,S,[...b,T]]},[r,i,[]]);return[l,u,d]}function Zp(e,t,r,i,s,l){const u=s.slice(0,s.length-1),d=s[s.length-1],[h,p,y]=_N(e,t,r,i,u),g=xN(e,t,h,p,d,l);return y.concat([g])}function SN(e,t){return t?[t].concat(e):e}function TN([e,t]){return e==="or"&&Array.isArray(t)}function kN([e,t]){return e==="and"&&Array.isArray(t)}function EN(e,t,r){return(i,s)=>{const l=e(i,s);return t==l?l:`${l}-${r}`}}function Jw(e,t,r,i,s,l){const u=e(i,s),d=l.map((h,p)=>{const y=EN(e,u,p);return O2(y,r,i,s,h)});return{[t]:{patterns:d,joinSym:u}}}function CN(e){const t=[];for(let r=1;r<=e.length;r++)t.push(e.slice(0,r));return t}function e1(e,t,r,i,s){return CN(s).map(l=>Zp(e,t,r,i,l,{$isNull:!0}))}function O2(e,t,r,i,s){return Object.entries(s).flatMap(([l,u])=>{if(TN([l,u]))return Jw(e,"or",t,r,i,u);if(kN([l,u]))return Jw(e,"and",t,r,i,u);if(l==="$entityIdStartsWith")return[];const d=l.split(".");if(u!=null&&u.hasOwnProperty("$not")){const h=Zp(e,t,r,i,d,u),p=e1(e,t,r,i,d);return[{or:{patterns:[h,...p],joinSym:e(r,i)}}]}return u!=null&&u.hasOwnProperty("$isNull")&&u.$isNull===!0&&d.length>1?[{or:{patterns:e1(e,t,r,i,d),joinSym:e(r,i)}}]:Zp(e,t,r,i,d,u)})}function MN(e,t,r,i){const s=ed;return i?O2(s,e,t,r,i).concat(Zw(s,e,t,r)):Zw(s,e,t,r)}function NN(e,t,r){return[e(t,r),e("time",r)]}function ON(e,t,r,i,s,l){const[u,d,h,p,y]=N2(e,t,r,i,s),g=bN(h,e(r,i),l);return[u,d,g,p,y]}function AN(e,t,{etype:r,level:i,form:s},l){const u=Object.keys(s).filter(d=>d!=="$");return u.length?Object.entries(l).map(function([h,p]){return u.map(function(b){var w,S,T;const M=!!(t.cardinalityInference&&(!((T=(S=(w=t.linkIndex)===null||w===void 0?void 0:w[r])===null||S===void 0?void 0:S[b])===null||T===void 0)&&T.isSingular));try{const[_,C,O]=ON(e,t,r,i,b,h),U=A2(t,{etype:_,level:C,form:s[b],join:O}),D=M?U[0]:U;return{[b]:D}}catch(_){if(_ instanceof _o)return{[b]:M?void 0:[]};throw _}}).reduce(function(b,w){return Object.assign(Object.assign({},b),w)},p)}):Object.values(l)}function Uu([e,t],[r,i]){return t===i||t==null&&i==null?mN(e,r):i==null?1:t==null?-1:t>i?1:-1}function Kp(e){return e==null?e:new Date(e).getTime()}function RN(e,t,r,i){var s;const[l,u,d,h]=e,p=r==="desc"?1:-1;if(((s=t["forward-identity"])===null||s===void 0?void 0:s[2])==="id")return Uu(i,[l,h])===p;const[y,g]=i,b=t["checked-data-type"]==="date"?Kp(g):g,w=t["checked-data-type"]==="date"?Kp(d):d;return Uu([y,b],[l,w])===p}function zN(e,t){const r=t[1];return e.attrs[r]}function DN(e,t,r){const i=Object.keys(r)[0];return xo(e,t,i)}function jN(e,t,r,i){if(r)return zN(e,r);if(i)return DN(e,t,i)}function UN(e,t,r){var i,s;if(!Array.isArray(r.fields))return QM(e,t);const l=new Map;for(const u of r.fields){const d=xo(e,t,u),h=(i=d==null?void 0:d["forward-identity"])===null||i===void 0?void 0:i[2];h&&ig(d)&&l.set(h,d)}if(!l.has("id")){const u=xo(e,t,"id"),d=(s=u==null?void 0:u["forward-identity"])===null||s===void 0?void 0:s[2];d&&l.set(d,u)}return l}function LN(e,t,r,i,s,l){var u;let d=sN(e,l);const h=i==null?void 0:i["start-cursor"],p=jN(e,t,h,s);if(p&&((u=p==null?void 0:p["forward-identity"])===null||u===void 0?void 0:u[2])!=="id"){const b=p["checked-data-type"]==="date",w=p.id;d=d.map(([S])=>{var T,M,_,C,O;let U=(O=(C=(_=(M=(T=e.eav.get(S))===null||T===void 0?void 0:T.get(w))===null||M===void 0?void 0:M.values())===null||_===void 0?void 0:_.next())===null||C===void 0?void 0:C.value)===null||O===void 0?void 0:O[2];return b&&(U=Kp(U)),[S,U]})}d.sort(r==="asc"?function(w,S){return Uu(w,S)}:function(w,S){return Uu(S,w)});let y={};const g=UN(e,t,l);for(const b of d){const[w]=b;if(y[w]||h&&p&&RN(h,p,r,b))continue;const S=VM(e,g,w);S&&(y[w]=S)}return y}function $N(e){var t;const r=(t=e.$)===null||t===void 0?void 0:t.order;return r&&r[Object.keys(r)[0]]||"asc"}function HN(e,{etype:t,level:r,form:i,join:s,pageInfo:l}){var u,d,h,p,y,g,b,w,S;const T=((u=i.$)===null||u===void 0?void 0:u.limit)||((d=i.$)===null||d===void 0?void 0:d.first)||((h=i.$)===null||h===void 0?void 0:h.last),M=(p=i.$)===null||p===void 0?void 0:p.offset,_=(y=i.$)===null||y===void 0?void 0:y.before,C=(g=i.$)===null||g===void 0?void 0:g.after,O=(b=i.$)===null||b===void 0?void 0:b.order,U=(w=i.$)===null||w===void 0?void 0:w.fields;if((M||_||C)&&(!l||!l["start-cursor"]))return[];const D=SN(MN(e,t,r,(S=i.$)===null||S===void 0?void 0:S.where),s),X=NN(ed,t,r),F=LN(e,t,$N(i),l,O,{where:D,find:X,fields:U});if(T!=null){const ee=Object.entries(F);return ee.length<=T?F:Object.fromEntries(ee.slice(0,T))}return F}function IN(e,t){try{return HN(e,t)}catch(r){if(r instanceof _o)return{};throw r}}function A2(e,t){const r=IN(e,t);return AN(ed,e,t,r)}function qN(e){const t={};for(const[r,i]of Object.entries(e))t[r]={startCursor:i["start-cursor"],endCursor:i["end-cursor"],hasNextPage:i["has-next-page?"],hasPreviousPage:i["has-previous-page?"]};return t}function BN({store:e,pageInfo:t,aggregate:r},i){const l={data:Object.keys(i).reduce(function(d,h){return r!=null&&r[h]||h==="$$ruleParams"||(d[h]=A2(e,{etype:h,form:i[h],level:0,pageInfo:t==null?void 0:t[h]})),d},{})};return t&&(l.pageInfo=qN(t)),r&&(l.aggregate=r),l}function YN(){const t={__etype:1,__ops:1,create:1,update:1,link:1,unlink:1,delete:1,merge:1,ruleParams:1};return new Set(Object.keys(t))}const PN=YN();function Jp(e,t,r){const i={__etype:e,__ops:r};return new Proxy(i,{get:(s,l)=>{if(l==="__ops")return r;if(l==="__etype")return e;if(PN.has(l))return(u,d)=>Jp(e,t,[...r,d?[l,e,t,u,d]:[l,e,t,u]])}})}function em(e){return e.startsWith("lookup__")}function R2(e){const[t,r,...i]=e.split("__");return[r,JSON.parse(i.join("__"))]}function XN(e){return new Proxy({__etype:e},{get(t,r){if(r==="__etype")return e;const i=r;return em(i)?Jp(e,R2(i),[]):Jp(e,i,[])}})}function z2(){return new Proxy({},{get(e,t){return XN(t)}})}z2();function FN(e){return e.__ops}function GN(e,t){const{attrIdMap:r,refSwapAttrIds:i}=e,s=[];for(const u of t){const d=r[u];if(d)s.push(d);else if(Array.isArray(u)&&u.length==2&&r[u[0]]){const[h,p]=u;s.push([r[h],p])}else s.push(u)}const[l]=t;if((l==="add-triple"||l==="retract-triple")&&i.has(t[2])){const u=s[1];s[1]=s[3],s[3]=u}return s}function Bt(e,t,r){return Object.values(e).find(i=>{const[s,l,u]=i["forward-identity"];return l===t&&u===r})}function Ja(e,t,r){return Object.values(e).find(i=>{const s=i["reverse-identity"];if(!s)return!1;const[l,u,d]=s;return u===t&&d===r})}function VN(e){if(Array.isArray(e))return e;const t=Object.entries(e);if(t.length!==1)throw new Error("lookup must be an object with a single unique attr and value.");return t[0]}function tm(e,t,r){return r.indexOf(".")!==-1&&!Bt(e,t,r)}function nm(e){const[t,r,...i]=e.split(".");if(i.length>0||r!=="id")throw new Error(`${e} is not a valid lookup attribute.`);return t}function QN(e,t,r){if(!tm(e,t,r))return Bt(e,t,r);const i=nm(r),s=Bt(e,t,i)||Ja(e,t,i);if(s&&s["value-type"]!=="ref")throw new Error(`${r} does not reference a valid link attribute.`);return s}function rm(e){return typeof e=="string"&&!em(e)?null:typeof e=="string"&&em(e)?R2(e):VN(e)}function tn(e,t,r){const i=rm(r);if(i===null)return r;const[s,l]=i,u=QN(e,t,s);if(!u||!u["unique?"])throw new Error(`${s} is not a unique attribute.`);return[u.id,l]}function D2(e,t,r,i){const s=tn(e,t,r);return Array.isArray(s)?[["add-triple",s,Bt(e,t,"id").id,s]].concat(i):i}function WN({attrs:e},[t,r,i]){const s=Object.entries(i).flatMap(([l,u])=>{const d=Array.isArray(u)?u:[u],h=Bt(e,t,l),p=Ja(e,t,l);return d.map(y=>h?["add-triple",tn(e,t,r),h.id,tn(e,h["reverse-identity"][1],y)]:["add-triple",tn(e,p["forward-identity"][1],y),p.id,tn(e,t,r)])});return D2(e,t,r,s)}function ZN({attrs:e},[t,r,i]){const s=Object.entries(i).flatMap(([l,u])=>{const d=Array.isArray(u)?u:[u],h=Bt(e,t,l),p=Ja(e,t,l);return d.map(y=>h?["retract-triple",tn(e,t,r),h.id,tn(e,h["reverse-identity"][1],y)]:["retract-triple",tn(e,p["forward-identity"][1],y),p.id,tn(e,t,r)])});return D2(e,t,r,s)}function KN(e,t,r){if(Array.isArray(r)){const[i,s]=r;for(const l of e||[]){const u=l==null?void 0:l.aev.get(i);if(u){for(const[d,h,p]of en(u,2))if(p===s)return!0}}}else for(const i of e||[]){const s=i==null?void 0:i.eav.get(r);if(s){for(const l of s.keys())if(i.attrs[l]["forward-identity"][1]==t)return!0}}return!1}function j2({stores:e,attrs:t},[r,i,s,l]){return(l==null?void 0:l.upsert)===!1?{mode:"update"}:(l==null?void 0:l.upsert)===!0?null:KN(e,r,i)?{mode:"update"}:null}function JN(e,t){const{stores:r,attrs:i}=e,[s,l,u,d]=t,h=rg(u),p=tn(i,s,l);return[["id",p]].concat(Object.entries(h)).map(([g,b])=>{const w=Bt(i,s,g);return w["checked-data-type"]==="date"&&e.useDateObjects&&(b=Ku(b)),["add-triple",p,w.id,b,{mode:"create"}]})}function eO(e,t){const{stores:r,attrs:i}=e,[s,l,u,d]=t,h=rg(u),p=tn(i,s,l),y=j2(e,[s,p,u,d]);return[["id",p]].concat(Object.entries(h)).map(([b,w])=>{const S=Bt(i,s,b);return S["checked-data-type"]==="date"&&e.useDateObjects&&(w=Ku(w)),["add-triple",p,S.id,w,...y?[y]:[]]})}function tO({attrs:e},[t,r]){return[["delete-entity",tn(e,t,r),t]]}function nO(e,t){const{stores:r,attrs:i}=e,[s,l,u,d]=t,h=rg(u),p=tn(i,s,l),y=j2(e,[s,p,u,d]),g=Object.entries(h).map(([w,S])=>{const T=Bt(i,s,w);return["deep-merge-triple",p,T.id,S,...y?[y]:[]]});return[["add-triple",p,Bt(i,s,"id").id,p,...y?[y]:[]]].concat(g)}function rO({attrs:e},[t,r,i]){return[["rule-params",tn(e,t,r),t,i]]}function aO(e){const[t,r,i,s,l]=e;if(!s)return e;const u=Object.assign({},s);return delete u.id,[t,r,i,u,...l?[l]:[]]}function iO(e,t){const[r,...i]=aO(t);switch(r){case"merge":return nO(e,i);case"create":return JN(e,i);case"update":return eO(e,i);case"link":return WN(e,i);case"unlink":return ZN(e,i);case"delete":return tO(e,i);case"ruleParams":return rO(e,i);default:throw new Error(`unsupported action ${r}`)}}function oO(e){switch(e){case"string":case"date":case"boolean":case"number":return e;default:return}}function sO(e,t,r){var i,s;const l=(s=(i=e.entities[t])===null||i===void 0?void 0:i.attrs)===null||s===void 0?void 0:s[r];if(r==="id")return null;if(!l)throw new Error(`${t}.${r} does not exist in your schema`);const{unique:u,indexed:d}=l==null?void 0:l.config,h=oO(l==null?void 0:l.valueType);return{"index?":d,"unique?":u,"checked-data-type":h}}function np(e,t,r,i){const s=e?sO(e,t,r):null,l=mt(),d=[mt(),t,r];return Object.assign(Object.assign({id:l,"forward-identity":d,"value-type":"blob",cardinality:"one","unique?":!1,"index?":!1,isUnsynced:!0},s||{}),i||{})}function lO(e,t,r){return Object.values(e.links).find(s=>s.forward.on===t&&s.forward.label===r||s.reverse.on===t&&s.reverse.label===r)}function cO(e,t,r){const i=lO(e,t,r);if(!i)throw new Error(`Couldn't find the link ${t}.${r} in your schema`);const{forward:s,reverse:l}=i;return{"forward-identity":[mt(),s.on,s.label],"reverse-identity":[mt(),l.on,l.label],cardinality:s.has==="one"?"one":"many","unique?":l.has==="one","on-delete":s.onDelete,"on-delete-reverse":l.onDelete}}function t1(e,t,r,i){const s=e?cO(e,t,r):null,l=mt(),u=[mt(),t,r],d=[mt(),r,t];return Object.assign(Object.assign({id:l,"forward-identity":u,"reverse-identity":d,"value-type":"ref",cardinality:"many","unique?":!1,"index?":!1,isUnsynced:!0},s||{}),i||{})}const uO=new Set(["create","update","merge","link","unlink"]),dO=new Set(["link","unlink"]),fO=new Set(["create","update","merge"]),hO=new Set(["link","unlink","create","update","merge","delete","ruleParams"]),am={"unique?":!0,"index?":!0},pO=Object.assign(Object.assign({},am),{cardinality:"one"});function mO(e){const t=[],[r,i,s,l]=e;if(!hO.has(r))return t;const u=rm(s);if(u&&t.push({etype:i,lookupPair:u}),r==="link")for(const[d,h]of Object.entries(l)){const p=Array.isArray(h)?h:[h];for(const y of p){const g=rm(y);g&&t.push({etype:i,lookupPair:g,linkLabel:d})}}return t}function gO({attrs:e,schema:t},r){var i,s;const[l,u,d]=[new Set,Object.assign({},e),[]];function h(g){u[g.id]=g,d.push(["add-attr",g]),l.add(g.id)}function p(g){g!=null&&g.isUnsynced&&!l.has(g.id)&&(d.push(["add-attr",g]),l.add(g.id))}function y(g,b){const w=Bt(u,g,b),S=Ja(u,g,b);p(w),p(S),!w&&!S&&h(t1(t,g,b,pO))}for(const g of r)for(const{etype:b,lookupPair:w,linkLabel:S}of mO(g)){const T=w[0];if(S){y(b,S);const M=Bt(u,b,S),_=Ja(u,b,S);p(M),p(_);const C=((i=M==null?void 0:M["reverse-identity"])===null||i===void 0?void 0:i[1])||((s=_==null?void 0:_["forward-identity"])===null||s===void 0?void 0:s[1])||S;if(tm(u,C,T))y(C,nm(T));else{const O=Bt(u,C,T);O||h(np(t,C,T,am)),p(O)}}else if(tm(u,b,T))y(b,nm(T));else{const M=Bt(u,b,T);M||h(np(t,b,T,am)),p(M)}}for(const g of r){const[b,w,S,T]=g;if(uO.has(b)){const M=Object.keys(T);M.push("id");for(const _ of M){const C=Bt(u,w,_);if(p(C),fO.has(b)&&(C||h(np(t,w,_,_==="id"?{"unique?":!0}:null))),dO.has(b)){const O=Ja(u,w,_);!C&&!O&&h(t1(t,w,_)),p(O)}}}}return[u,d]}function vO(e,t){const i=(Array.isArray(t)?t:[t]).flatMap(h=>FN(h)),[s,l]=gO(e,i),u=Object.assign(Object.assign({},e),{attrs:s}),d=i.flatMap(h=>iO(u,h));return[...l,...d]}var n1=function(e,t,r,i){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(y){try{p(i.next(y))}catch(g){u(g)}}function h(y){try{p(i.throw(y))}catch(g){u(g)}}function p(y){y.done?l(y.value):s(y.value).then(d,h)}p((i=i.apply(e,t||[])).next())})};class U2{constructor(t){this.dbName=t,this._storeName="kv",this._dbPromise=this._init()}_init(){return new Promise((t,r)=>{const i=indexedDB.open(this.dbName,1);i.onerror=s=>{r(s)},i.onsuccess=s=>{t(s.target.result)},i.onupgradeneeded=s=>{s.target.result.createObjectStore(this._storeName)}})}getItem(t){return n1(this,void 0,void 0,function*(){const r=yield this._dbPromise;return new Promise((i,s)=>{const d=r.transaction([this._storeName],"readonly").objectStore(this._storeName).get(t);d.onerror=h=>{s(h)},d.onsuccess=h=>{d.result?i(d.result):i(null)}})})}setItem(t,r){return n1(this,void 0,void 0,function*(){const i=yield this._dbPromise;return new Promise((s,l)=>{const h=i.transaction([this._storeName],"readwrite").objectStore(this._storeName).put(r,t);h.onerror=p=>{l(p)},h.onsuccess=p=>{s()}})})}}var yO=function(e,t,r,i){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(y){try{p(i.next(y))}catch(g){u(g)}}function h(y){try{p(i.throw(y))}catch(g){u(g)}}function p(y){y.done?l(y.value):s(y.value).then(d,h)}p((i=i.apply(e,t||[])).next())})};class L2{static getIsOnline(){return yO(this,void 0,void 0,function*(){return navigator.onLine})}static listen(t){const r=()=>{t(!0)},i=()=>{t(!1)};return addEventListener("online",r),addEventListener("offline",i),()=>{removeEventListener("online",r),removeEventListener("offline",i)}}}var bO=function(e,t,r,i){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(y){try{p(i.next(y))}catch(g){u(g)}}function h(y){try{p(i.throw(y))}catch(g){u(g)}}function p(y){y.done?l(y.value):s(y.value).then(d,h)}p((i=i.apply(e,t||[])).next())})};class lg extends Error{constructor(t){var r;const i=((r=t.body)===null||r===void 0?void 0:r.message)||`API Error (${t.status})`;super(i);const s=new.target.prototype;Object.setPrototypeOf&&Object.setPrototypeOf(this,s),Error.captureStackTrace&&Error.captureStackTrace(this,lg),this.name="InstantAPIError",this.status=t.status,this.body=t.body}get[Symbol.toStringTag](){return"InstantAPIError"}}function dr(e,t){return bO(this,void 0,void 0,function*(){const r=yield fetch(e,t),i=yield r.json();return r.status===200?Promise.resolve(i):Promise.reject(new lg({status:r.status,body:i}))})}var wl=function(e,t,r,i){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(y){try{p(i.next(y))}catch(g){u(g)}}function h(y){try{p(i.throw(y))}catch(g){u(g)}}function p(y){y.done?l(y.value):s(y.value).then(d,h)}p((i=i.apply(e,t||[])).next())})};function wO({apiURI:e,appId:t,email:r}){return dr(`${e}/runtime/auth/send_magic_code`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({"app-id":t,email:r})})}function xO(e){return wl(this,arguments,void 0,function*({apiURI:t,appId:r,email:i,code:s}){return yield dr(`${t}/runtime/auth/verify_magic_code`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({"app-id":r,email:i,code:s})})})}function _O(e){return wl(this,arguments,void 0,function*({apiURI:t,appId:r,refreshToken:i}){return yield dr(`${t}/runtime/auth/verify_refresh_token`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({"app-id":r,"refresh-token":i})})})}function r1(e){return wl(this,arguments,void 0,function*({apiURI:t,appId:r,code:i,codeVerifier:s}){return yield dr(`${t}/runtime/oauth/token`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({app_id:r,code:i,code_verifier:s})})})}function SO(e){return wl(this,arguments,void 0,function*({apiURI:t,appId:r,nonce:i,idToken:s,clientName:l,refreshToken:u}){return yield dr(`${t}/runtime/oauth/id_token`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({app_id:r,nonce:i,id_token:s,client_name:l,refresh_token:u})})})}function TO(e){return wl(this,arguments,void 0,function*({apiURI:t,appId:r,refreshToken:i}){return yield dr(`${t}/runtime/signout`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({app_id:r,refresh_token:i})})})}var xl=function(e,t,r,i){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(y){try{p(i.next(y))}catch(g){u(g)}}function h(y){try{p(i.throw(y))}catch(g){u(g)}}function p(y){y.done?l(y.value):s(y.value).then(d,h)}p((i=i.apply(e,t||[])).next())})};function kO(e){return xl(this,arguments,void 0,function*({apiURI:t,appId:r,path:i,file:s,refreshToken:l,contentType:u,contentDisposition:d}){const h={app_id:r,path:i,authorization:`Bearer ${l}`,"content-type":u||s.type};return d&&(h["content-disposition"]=d),yield dr(`${t}/storage/upload`,{method:"PUT",headers:h,body:s})})}function EO(e){return xl(this,arguments,void 0,function*({apiURI:t,appId:r,path:i,refreshToken:s}){const{data:l}=yield dr(`${t}/storage/files?app_id=${r}&filename=${encodeURIComponent(i)}`,{method:"DELETE",headers:{"content-type":"application/json",authorization:`Bearer ${s}`}});return l})}function CO(e){return xl(this,arguments,void 0,function*({apiURI:t,appId:r,fileName:i,refreshToken:s,metadata:l={}}){const{data:u}=yield dr(`${t}/storage/signed-upload-url`,{method:"POST",headers:{"content-type":"application/json",authorization:`Bearer ${s}`},body:JSON.stringify({app_id:r,filename:i})});return u})}function MO(e,t){return xl(this,void 0,void 0,function*(){return(yield fetch(e,{method:"PUT",body:t,headers:{"Content-Type":t.type}})).ok})}function NO(e){return xl(this,arguments,void 0,function*({apiURI:t,appId:r,path:i,refreshToken:s}){const{data:l}=yield dr(`${t}/storage/signed-download-url?app_id=${r}&filename=${encodeURIComponent(i)}`,{method:"GET",headers:{"content-type":"application/json",authorization:`Bearer ${s}`}});return l})}let cg=!1,$2=!1,H2=!1;typeof window<"u"&&typeof window.localStorage<"u"&&(cg=!!window.localStorage.getItem("devBackend"),$2=!!window.localStorage.getItem("__instantLogging"),H2=!!window.localStorage.getItem("__devtoolLocalDash"));function a1(e,t){if(!t)return e;const r={};return t.forEach(i=>{r[i]=e[i]}),r}function OO(e,t,r){var i,s;const l={peers:{}};if(t&&"user"in t?t.user:!0){const d=a1((i=e.user)!==null&&i!==void 0?i:{},t==null?void 0:t.keys);l.user=Object.assign(Object.assign({},d),{peerId:r})}for(const d of Object.keys((s=e.peers)!==null&&s!==void 0?s:{})){const h=(t==null?void 0:t.peers)===void 0,p=Array.isArray(t==null?void 0:t.peers)&&(t==null?void 0:t.peers.includes(d));if(h||p){const y=a1(e.peers[d],t==null?void 0:t.keys);l.peers[d]=Object.assign(Object.assign({},y),{peerId:d})}}return l}function AO(e,t){if(e.isLoading!==t.isLoading||e.error!==t.error||(e.user||t.user)&&(!e.user||!t.user||!Fw(e.user,t.user))||!y2(e.peers,t.peers))return!0;for(const i of Object.keys(e.peers))if(!Fw(e.peers[i],t.peers[i]))return!0;return!1}class i1{constructor(){this.promise=new Promise((t,r)=>{this._resolve=t,this._reject=r})}resolve(t){this._resolve(t)}reject(t){this._reject(t)}}var Kc=function(e,t,r,i){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(y){try{p(i.next(y))}catch(g){u(g)}}function h(y){try{p(i.throw(y))}catch(g){u(g)}}function p(y){y.done?l(y.value):s(y.value).then(d,h)}p((i=i.apply(e,t||[])).next())})};class o1{constructor(t,r,i,s,l=h=>JSON.stringify(h),u=h=>JSON.parse(h),d=100){this._subs=[],this._persister=t,this._key=r,this._onMerge=s,this._loadedCbs=[],this._isLoading=!0,this.currentValue=i,this.toJSON=l,this.fromJSON=u,this._saveThrottleMs=d,this._pendingSaveCbs=[],this._version=0,this._load()}_load(){return Kc(this,void 0,void 0,function*(){const t=this.fromJSON(yield this._persister.getItem(this._key));this._isLoading=!1,this._onMerge(t,this.currentValue);for(const r of this._loadedCbs)r()})}waitForLoaded(){return Kc(this,void 0,void 0,function*(){if(!this._isLoading)return;yield new Promise(r=>{this._loadedCbs.push(r)})})}isLoading(){return this._isLoading}version(){return this._version}waitForSync(){return Kc(this,void 0,void 0,function*(){if(!this._nextSave)return;yield new Promise(r=>{this._pendingSaveCbs.push(r)})})}_writeToStorage(){this._persister.setItem(this._key,this.toJSON(this.currentValue));for(const t of this._pendingSaveCbs)t();this._pendingSaveCbs.length=0}flush(){return Kc(this,void 0,void 0,function*(){this._nextSave&&(clearTimeout(this._nextSave),this._writeToStorage())})}_enqueuePersist(t){if(this._nextSave){t&&this._pendingSaveCbs.push(t);return}this._nextSave=setTimeout(()=>{this._nextSave=null,this._writeToStorage()},this._saveThrottleMs)}set(t,r){this._version++,this.currentValue=t(this.currentValue),this._isLoading?this._loadedCbs.push(()=>this._enqueuePersist(r)):this._enqueuePersist(r);for(const i of this._subs)i(this.currentValue)}subscribe(t){return this._subs.push(t),t(this.currentValue),()=>{this._subs=this._subs.filter(r=>r!==t)}}}function I2(e,t=[]){e.forEach(r=>{const{data:i}=r,{"datalog-result":s}=i,{"join-rows":l}=s;for(const u of l)for(const d of u)t.push(d);I2(r["child-nodes"],t)})}function s1(e){const t=[];return I2(e,t),t}function l1(e){return Object.values(e.links).reduce((t,r)=>{var i,s,l,u;return(i=t[l=r.forward.on])!==null&&i!==void 0||(t[l]={}),t[r.forward.on][r.forward.label]={isForward:!0,isSingular:r.forward.has==="one",link:r},(s=t[u=r.reverse.on])!==null&&s!==void 0||(t[u]={}),t[r.reverse.on][r.reverse.label]={isForward:!1,isSingular:r.reverse.has==="one",link:r},t},{})}const q2="v0.20.12";function RO(e){return{info:e?console.info.bind(console):()=>{},debug:e?console.debug.bind(console):()=>{},error:e?console.error.bind(console):()=>{}}}var Nt=function(e,t,r,i){function s(l){return l instanceof r?l:new r(function(u){u(l)})}return new(r||(r=Promise))(function(l,u){function d(y){try{p(i.next(y))}catch(g){u(g)}}function h(y){try{p(i.throw(y))}catch(g){u(g)}}function p(y){y.done?l(y.value):s(y.value).then(d,h)}p((i=i.apply(e,t||[])).next())})};const Nr={CONNECTING:"connecting",OPENED:"opened",AUTHENTICATED:"authenticated",CLOSED:"closed",ERRORED:"errored"},zO=3e4,DO=3e4,jO=0,c1=1,UO={apiURI:"https://api.instantdb.com",websocketURI:"wss://api.instantdb.com/runtime/session"},rp="_instant_oauth_redirect",ap="currentUser";let LO=0;function $O(e){const t=new WebSocket(e);return t._id=LO++,t}function HO(){return typeof window<"u"||typeof chrome<"u"}const u1={"set-presence":!0,"set-presence-ok":!0,"refresh-presence":!0,"patch-presence":!0};function IO(e,t){var r;const i=JSON.parse(e);for(const s in i){const l=i[s];if(!((r=l==null?void 0:l.result)===null||r===void 0)&&r.store){const u=l.result.store;l.result.store=LM(Object.assign(Object.assign({},u),{useDateObjects:t}))}}return i}function qO(e){var t;const r={};for(const i in e){const s=e[i],l=Object.assign({},s);!((t=s.result)===null||t===void 0)&&t.store&&(l.result=Object.assign(Object.assign({},s.result),{store:UM(s.result.store)})),r[i]=l}return JSON.stringify(r)}function d1(e){return[...e].sort((t,r)=>{const[i,s]=t,[l,u]=r,d=s.order||0,h=u.order||0;return d==h?i<l?-1:i>l?1:0:d-h})}class BO{constructor(t,r=U2,i=L2,s){var l;this._isOnline=!0,this._isShutdown=!1,this.status=Nr.CONNECTING,this.queryCbs={},this.queryOnceDfds={},this.authCbs=[],this.attrsCbs=[],this.mutationErrorCbs=[],this.connectionStatusCbs=[],this.mutationDeferredStore=new Map,this._reconnectTimeoutId=null,this._reconnectTimeoutMs=0,this._localIdPromises={},this._errorMessage=null,this._oauthCallbackResponse=null,this._linkIndex=null,this._rooms={},this._roomsPendingLeave={},this._presence={},this._broadcastQueue=[],this._broadcastSubs={},this._currentUserCached={isLoading:!0,error:void 0,user:void 0},this._beforeUnloadCbs=[],this._dataForQueryCache={},this._onMergeQuerySubs=(u,d)=>{const h=u||{},p=Object.assign({},d);Object.entries(d).forEach(([g,b])=>{var w;const S=(w=h==null?void 0:h[g])===null||w===void 0?void 0:w.result,T=b.result;S&&!T&&(p[g].result=S)}),Object.keys(h).filter(g=>!d[g]).sort((g,b)=>{var w,S;const T=((w=h[g])===null||w===void 0?void 0:w.lastAccessed)||0;return(((S=h[b])===null||S===void 0?void 0:S.lastAccessed)||0)-T}).slice(0,this.queryCacheLimit).forEach(g=>{p[g]=h[g]}),this.querySubs.set(g=>p),this.loadedNotifyAll()},this._onMergePendingMutations=(u,d)=>{const h=new Map([...u.entries(),...d.entries()]);this.pendingMutations.set(y=>h),this.loadedNotifyAll(),this._rewriteMutationsSorted(this.attrs,u).forEach(([y,g])=>{!d.has(y)&&!g["tx-id"]&&this._sendMutation(y,g)})},this.getPreviousResult=u=>{const d=hn(u);return this.dataForQuery(d)},this.notifyOne=u=>{var d,h;const p=(d=this.queryCbs[u])!==null&&d!==void 0?d:[],y=(h=this._dataForQueryCache[u])===null||h===void 0?void 0:h.data,g=this.dataForQuery(u);g&&(gu(g,y)||p.forEach(b=>b.cb(g)))},this.notifyOneQueryOnce=u=>{var d;const h=(d=this.queryOnceDfds[u])!==null&&d!==void 0?d:[],p=this.dataForQuery(u);h.forEach(y=>{this._completeQueryOnce(y.q,u,y.dfd),y.dfd.resolve(p)})},this.notifyQueryError=(u,d)=>{(this.queryCbs[u]||[]).forEach(p=>p.cb({error:d}))},this.pushTx=u=>{try{const d=vO({attrs:this.optimisticAttrs(),schema:this.config.schema,stores:Object.values(this.querySubs.currentValue).map(h=>{var p;return(p=h==null?void 0:h.result)===null||p===void 0?void 0:p.store}),useDateObjects:this.config.useDateObjects},u);return this.pushOps(d)}catch(d){return this.pushOps([],d)}},this.pushOps=(u,d)=>{const h=mt(),p=[...this.pendingMutations.currentValue.values()],y=Math.max(0,...p.map(w=>w.order||0))+1,g={op:"transact","tx-steps":u,created:Date.now(),error:d,order:y};this.pendingMutations.set(w=>(w.set(h,g),w));const b=new i1;return this.mutationDeferredStore.set(h,b),this._sendMutation(h,g),this.notifyAll(),b.promise},this._wsOnOpen=u=>{const d=u.target;if(this._ws!==d){this._log.info("[socket][open]",d._id,"skip; this is no longer the current ws");return}this._log.info("[socket][open]",this._ws._id),this._setStatus(Nr.OPENED),this.getCurrentUser().then(h=>{var p;this._trySend(mt(),{op:"init","app-id":this.config.appId,"refresh-token":(p=h.user)===null||p===void 0?void 0:p.refresh_token,versions:this.versions,"__admin-token":this.config.__adminToken})}).catch(h=>{this._log.error("[socket][error]",d._id,h)})},this._wsOnMessage=u=>{const d=u.target,h=JSON.parse(u.data.toString());if(this._ws!==d){this._log.info("[socket][message]",d._id,h,"skip; this is no longer the current ws");return}this._handleReceive(d._id,JSON.parse(u.data.toString()))},this._wsOnError=u=>{const d=u.target;if(this._ws!==d){this._log.info("[socket][error]",d._id,"skip; this is no longer the current ws");return}this._log.error("[socket][error]",d._id,u)},this._wsOnClose=u=>{const d=u.target;if(this._ws!==d){this._log.info("[socket][close]",d._id,"skip; this is no longer the current ws");return}this._setStatus(Nr.CLOSED);for(const h of Object.values(this._rooms))h.isConnected=!1;if(this._isShutdown){this._log.info("[socket][close]",d._id,"Reactor has been shut down and will not reconnect");return}this._log.info("[socket][close]",d._id,"schedule reconnect, ms =",this._reconnectTimeoutMs),setTimeout(()=>{if(this._reconnectTimeoutMs=Math.min(this._reconnectTimeoutMs+1e3,1e4),!this._isOnline){this._log.info("[socket][close]",d._id,"we are offline, no need to start socket");return}this._startSocket()},this._reconnectTimeoutMs)},this.config=Object.assign(Object.assign({},UO),t),this.queryCacheLimit=(l=this.config.queryCacheLimit)!==null&&l!==void 0?l:10,this._log=RO(t.verbose||cg||$2),this.versions=Object.assign(Object.assign({},s||{}),{"@instantdb/core":q2}),this.config.schema&&(this._linkIndex=l1(this.config.schema)),HO()&&(typeof BroadcastChannel=="function"&&(this._broadcastChannel=new BroadcastChannel("@instantdb"),this._broadcastChannel.addEventListener("message",u=>Nt(this,void 0,void 0,function*(){var d;try{if(((d=u.data)===null||d===void 0?void 0:d.type)==="auth"){const h=yield this.getCurrentUser();this.updateUser(h.user)}}catch(h){this._log.error("[error] handle broadcast channel",h)}}))),this._oauthCallbackResponse=this._oauthLoginInit(),this._initStorage(r),this.getCurrentUser(),i.getIsOnline().then(u=>{this._isOnline=u,this._startSocket(),i.listen(d=>{d!==this._isOnline&&(this._log.info("[network] online =",d),this._isOnline=d,this._isOnline?this._startSocket():(this._log.info("Changing status from",this.status,"to",Nr.CLOSED),this._setStatus(Nr.CLOSED)))})}),typeof addEventListener<"u"&&(this._beforeUnload=this._beforeUnload.bind(this),addEventListener("beforeunload",this._beforeUnload)))}updateSchema(t){this.config=Object.assign(Object.assign({},this.config),{schema:t,cardinalityInference:!!t}),this._linkIndex=t?l1(this.config.schema):null}_initStorage(t){this._persister=new t(`instant_${this.config.appId}_5`),this.querySubs=new o1(this._persister,"querySubs",{},this._onMergeQuerySubs,qO,r=>IO(r,this.config.useDateObjects)),this.pendingMutations=new o1(this._persister,"pendingMutations",new Map,this._onMergePendingMutations,r=>JSON.stringify([...r.entries()]),r=>new Map(JSON.parse(r))),this._beforeUnloadCbs.push(()=>{this.pendingMutations.flush(),this.querySubs.flush()})}_beforeUnload(){for(const t of this._beforeUnloadCbs)t()}_finishTransaction(t,r,i){const s=this.mutationDeferredStore.get(r);this.mutationDeferredStore.delete(r);const l=t!=="error"&&t!=="timeout";!s&&!l&&console.error("Mutation failed",Object.assign({status:t,eventId:r},i)),s&&(l?s.resolve({status:t,eventId:r}):s.reject(Object.assign({status:t,eventId:r},i)))}_setStatus(t,r){this.status=t,this._errorMessage=r,this.notifyConnectionStatusSubs(t)}_flushEnqueuedRoomData(t){var r,i;const s=(i=(r=this._presence[t])===null||r===void 0?void 0:r.result)===null||i===void 0?void 0:i.user,l=this._broadcastQueue[t];if(this._broadcastQueue[t]=[],s&&this._trySetPresence(t,s),l)for(const u of l){const{topic:d,roomType:h,data:p}=u;this._tryBroadcast(t,h,d,p)}}_handleReceive(t,r){var i,s,l,u,d,h;const p=!!this.config.schema&&("cardinalityInference"in this.config?!!this.config.cardinalityInference:!0);switch(u1[r.op]||this._log.info("[receive]",t,r.op,r),r.op){case"init-ok":this._setStatus(Nr.AUTHENTICATED),this._reconnectTimeoutMs=0,this._setAttrs(r.attrs),this._flushPendingMessages(),this._sessionId=r["session-id"];for(const j of Object.keys(this._rooms)){const G=(s=(i=this._presence[j])===null||i===void 0?void 0:i.result)===null||s===void 0?void 0:s.user;this._tryJoinRoom(j,G)}break;case"add-query-exists":this.notifyOneQueryOnce(hn(r.q));break;case"add-query-ok":const{q:y,result:g}=r,b=hn(y),w=(u=(l=g==null?void 0:g[0])===null||l===void 0?void 0:l.data)===null||u===void 0?void 0:u["page-info"],S=(h=(d=g==null?void 0:g[0])===null||d===void 0?void 0:d.data)===null||h===void 0?void 0:h.aggregate,T=s1(g),M=Vp(this.attrs,T,p,this._linkIndex,this.config.useDateObjects);this.querySubs.set(j=>(j[b].result={store:M,pageInfo:w,aggregate:S,processedTxId:r["processed-tx-id"]},j)),this._cleanupPendingMutationsQueries(),this.notifyOne(b),this.notifyOneQueryOnce(b),this._cleanupPendingMutationsTimeout();break;case"refresh-ok":const{computations:_,attrs:C}=r,O=r["processed-tx-id"];C&&this._setAttrs(C),this._cleanupPendingMutationsTimeout();const U=this._rewriteMutations(this.attrs,this.pendingMutations.currentValue,O);U!==this.pendingMutations.currentValue&&this.pendingMutations.set(()=>U);const D=d1(U.entries()),X=_.map(j=>{var G,N,q,Z;const J=j["instaql-query"],te=j["instaql-result"],oe=hn(J),re=s1(te),be=Vp(this.attrs,re,p,this._linkIndex,this.config.useDateObjects),de=this._applyOptimisticUpdates(be,D,O),Me=(N=(G=te==null?void 0:te[0])===null||G===void 0?void 0:G.data)===null||N===void 0?void 0:N["page-info"],rt=(Z=(q=te==null?void 0:te[0])===null||q===void 0?void 0:q.data)===null||Z===void 0?void 0:Z.aggregate;return{hash:oe,store:de,pageInfo:Me,aggregate:rt}});X.forEach(({hash:j,store:G,pageInfo:N,aggregate:q})=>{this.querySubs.set(Z=>(Z[j].result={store:G,pageInfo:N,aggregate:q,processedTxId:O},Z))}),this._cleanupPendingMutationsQueries(),X.forEach(({hash:j})=>{this.notifyOne(j)});break;case"transact-ok":const{"client-event-id":F,"tx-id":ee}=r,pe=this._rewriteMutations(this.attrs,this.pendingMutations.currentValue).get(F);if(!pe)break;this.pendingMutations.set(j=>(j.set(F,Object.assign(Object.assign({},j.get(F)),{"tx-id":ee,confirmed:Date.now()})),j)),this._cleanupPendingMutationsTimeout();const ue=pe["tx-steps"].filter(([j,...G])=>j==="add-attr").map(([j,G])=>G).concat(Object.values(this.attrs));this._setAttrs(ue),this._finishTransaction("synced",F);break;case"patch-presence":{const j=r["room-id"];this._patchPresencePeers(j,r.edits),this._notifyPresenceSubs(j);break}case"refresh-presence":{const j=r["room-id"];this._setPresencePeers(j,r.data),this._notifyPresenceSubs(j);break}case"server-broadcast":const ie=r["room-id"],ze=r.topic;this._notifyBroadcastSubs(ie,ze,r);break;case"join-room-ok":const je=r["room-id"],Ce=this._rooms[je];if(!Ce){this._roomsPendingLeave[je]&&(this._tryLeaveRoom(je),delete this._roomsPendingLeave[je]);break}Ce.isConnected=!0,this._notifyPresenceSubs(je),this._flushEnqueuedRoomData(je);break;case"join-room-error":const E=r["room-id"],R=this._rooms[E];R&&(R.error=r.error),this._notifyPresenceSubs(E);break;case"error":this._handleReceiveError(r);break}}_handleMutationError(t,r,i){const s=this.pendingMutations.currentValue.get(r);s&&(t!=="timeout"||!s["tx-id"])&&(this.pendingMutations.set(l=>(l.delete(r),l)),this.notifyAll(),this.notifyAttrsSubs(),this.notifyMutationErrorSubs(i),this._finishTransaction(t,r,i))}_handleReceiveError(t){var r,i,s,l,u;const d=t["client-event-id"],h=this.pendingMutations.currentValue.get(d),p={message:t.message||"Uh-oh, something went wrong. Ping Joe & Stopa."};if(t.hint&&(p.hint=t.hint),h){const b={message:t.message,hint:t.hint};this._handleMutationError("error",d,b);return}if(!((r=t["original-event"])===null||r===void 0)&&r.hasOwnProperty("q")&&((i=t["original-event"])===null||i===void 0?void 0:i.op)==="add-query"){const b=(s=t["original-event"])===null||s===void 0?void 0:s.q,w=hn(b);this.notifyQueryError(hn(b),p),this.notifyQueryOnceError(b,w,d,p);return}if(((l=t["original-event"])===null||l===void 0?void 0:l.op)==="init"){if(t.type==="record-not-found"&&((u=t.hint)===null||u===void 0?void 0:u["record-type"])==="app-user"){this.changeCurrentUser(null);return}this._setStatus(Nr.ERRORED,p),this.notifyAll();return}const g=Object.assign({},t);delete g.message,delete g.hint,console.error(t.message,g),t.hint&&console.error(`This error comes with some debugging information. Here it is: 
`,t.hint)}notifyQueryOnceError(t,r,i,s){var l;const u=(l=this.queryOnceDfds[r])===null||l===void 0?void 0:l.find(d=>d.eventId===i);u&&(u.dfd.reject(s),this._completeQueryOnce(t,r,u.dfd))}_setAttrs(t){this.attrs=t.reduce((r,i)=>(r[i.id]=i,r),{}),this.notifyAttrsSubs()}_startQuerySub(t,r){const i=mt();return this.querySubs.set(s=>(s[r]=s[r]||{q:t,result:null,eventId:i},s[r].lastAccessed=Date.now(),s)),this._trySendAuthed(i,{op:"add-query",q:t}),i}subscribeQuery(t,r,i){var s;i&&"ruleParams"in i&&(t=Object.assign({$$ruleParams:i.ruleParams},t));const l=hn(t),u=this.getPreviousResult(t);return u&&r(u),this.queryCbs[l]=(s=this.queryCbs[l])!==null&&s!==void 0?s:[],this.queryCbs[l].push({q:t,cb:r}),this._startQuerySub(t,l),()=>{this._unsubQuery(t,l,r)}}queryOnce(t,r){var i;r&&"ruleParams"in r&&(t=Object.assign({$$ruleParams:r.ruleParams},t));const s=new i1;if(!this._isOnline)return s.reject(new Error("We can't run `queryOnce`, because the device is offline.")),s.promise;if(!this.querySubs)return s.reject(new Error("We can't run `queryOnce` on the backend. Use adminAPI.query instead: https://www.instantdb.com/docs/backend#query")),s.promise;const l=hn(t),u=this._startQuerySub(t,l);return this.queryOnceDfds[l]=(i=this.queryOnceDfds[l])!==null&&i!==void 0?i:[],this.queryOnceDfds[l].push({q:t,dfd:s,eventId:u}),setTimeout(()=>s.reject(new Error("Query timed out")),zO),s.promise}_completeQueryOnce(t,r,i){this.queryOnceDfds[r]&&(this.queryOnceDfds[r]=this.queryOnceDfds[r].filter(s=>s.dfd!==i),this._cleanupQuery(t,r))}_unsubQuery(t,r,i){this.queryCbs[r]&&(this.queryCbs[r]=this.queryCbs[r].filter(s=>s.cb!==i),this._cleanupQuery(t,r))}_cleanupQuery(t,r){var i,s;!((i=this.queryCbs[r])===null||i===void 0)&&i.length||!((s=this.queryOnceDfds[r])===null||s===void 0)&&s.length||(delete this.queryCbs[r],delete this.queryOnceDfds[r],this._trySendAuthed(mt(),{op:"remove-query",q:t}))}_rewriteMutations(t,r,i){if(!t)return r;const s=y=>{const[g,b,w]=y["forward-identity"];return Bt(t,b,w)},l=y=>{const[g,b,w]=y["forward-identity"];return Ja(t,b,w)},u={attrIdMap:{},refSwapAttrIds:new Set};let d=!1;const h=(y,g)=>{const b=[];for(const w of y){const[S]=w;if(S==="add-attr"){const[M,_]=w,C=s(_);if(C&&_.id!==C.id){u.attrIdMap[_.id]=C.id,d=!0;continue}if(_["value-type"]==="ref"){const O=l(_);if(O){u.attrIdMap[_.id]=O.id,u.refSwapAttrIds.add(_.id),d=!0;continue}}}if(i&&g&&i>=g&&S==="add-attr"||S==="update-attr"||S==="delete-attr"){d=!0;continue}const T=d?GN(u,w):w;b.push(T)}return d?b:y},p=new Map;for(const[y,g]of r.entries())p.set(y,Object.assign(Object.assign({},g),{"tx-steps":h(g["tx-steps"],g["tx-id"])}));return d?p:r}_rewriteMutationsSorted(t,r){return d1(this._rewriteMutations(t,r).entries())}optimisticAttrs(){var t;const r=[...this.pendingMutations.currentValue.values()].flatMap(d=>d["tx-steps"]),i=new Set(r.filter(([d,h])=>d==="delete-attr").map(([d,h])=>h)),s=[];for(const[d,h]of r)if(d==="add-attr")s.push(h);else if(d==="update-attr"&&h.id&&(!((t=this.attrs)===null||t===void 0)&&t[h.id])){const p=Object.assign(Object.assign({},this.attrs[h.id]),h);s.push(p)}const l=[...Object.values(this.attrs||{}),...s].filter(d=>!i.has(d.id));return Object.fromEntries(l.map(d=>[d.id,d]))}dataForQuery(t){const r=this._errorMessage;if(r)return{error:r};if(!this.querySubs||!this.pendingMutations)return;const i=this.querySubs.version(),s=this.querySubs.currentValue,l=this.pendingMutations.version(),u=this.pendingMutations.currentValue,{q:d,result:h}=s[t]||{};if(!h)return;const p=this._dataForQueryCache[t];if(p&&i===p.querySubVersion&&l===p.pendingMutationsVersion)return p.data;const{store:y,pageInfo:g,aggregate:b,processedTxId:w}=h,S=this._rewriteMutationsSorted(y.attrs,u),T=this._applyOptimisticUpdates(y,S,w),M=BN({store:T,pageInfo:g,aggregate:b},d);return this._dataForQueryCache[t]={querySubVersion:i,pendingMutationsVersion:l,data:M},M}_applyOptimisticUpdates(t,r,i){for(const[s,l]of r)(!l["tx-id"]||i&&l["tx-id"]>i)&&(t=KM(t,l["tx-steps"]));return t}notifyAll(){Object.keys(this.queryCbs).forEach(t=>{this.notifyOne(t)})}loadedNotifyAll(){this.pendingMutations.isLoading()||this.querySubs.isLoading()||this.notifyAll()}shutdown(){var t;this._log.info("[shutdown]",this.config.appId),this._isShutdown=!0,(t=this._ws)===null||t===void 0||t.close()}_sendMutation(t,r){if(r.error){this._handleMutationError("error",t,{error:r.error,message:r.error.message});return}if(this.status!==Nr.AUTHENTICATED){this._finishTransaction("enqueued",t);return}const i=Math.max(5e3,this.pendingMutations.currentValue.size*5e3);this._isOnline?(this._trySend(t,r),setTimeout(()=>{this._isOnline&&this._handleMutationError("timeout",t,{message:"transaction timed out"})},i)):this._finishTransaction("enqueued",t)}_flushPendingMessages(){Object.keys(this.queryCbs).map(s=>this.querySubs.currentValue[s]).filter(s=>s).forEach(({eventId:s,q:l})=>{this._trySendAuthed(s,{op:"add-query",q:l})}),Object.values(this.queryOnceDfds).flat().forEach(({eventId:s,q:l})=>{this._trySendAuthed(s,{op:"add-query",q:l})}),this._rewriteMutationsSorted(this.attrs,this.pendingMutations.currentValue).forEach(([s,l])=>{l["tx-id"]||this._sendMutation(s,l)})}_cleanupPendingMutationsQueries(){let t=Number.MAX_SAFE_INTEGER;for(const{result:r}of Object.values(this.querySubs.currentValue))r!=null&&r.processedTxId&&(t=Math.min(t,r==null?void 0:r.processedTxId));this.pendingMutations.set(r=>{for(const[i,s]of Array.from(r.entries()))s["tx-id"]&&s["tx-id"]<=t&&r.delete(i);return r})}_cleanupPendingMutationsTimeout(){const t=Date.now();this.pendingMutations.currentValue.size<200||this.pendingMutations.set(r=>{let i=!1,s=!1;for(const[l,u]of Array.from(r.entries()))u.confirmed||(s=!0),u.confirmed&&u.confirmed+DO<t&&(r.delete(l),i=!0);if(i&&s)for(const[l,u]of Array.from(r.entries()))u.confirmed||r.delete(l);return r})}_trySendAuthed(...t){this.status===Nr.AUTHENTICATED&&this._trySend(...t)}_trySend(t,r,i){this._ws.readyState===c1&&(u1[r.op]||this._log.info("[send]",this._ws._id,r.op,r),this._ws.send(JSON.stringify(Object.assign({"client-event-id":t},r))))}_startSocket(){if(this._isShutdown){this._log.info("[socket][start]",this.config.appId,"Reactor has been shut down and will not start a new socket");return}if(this._ws&&this._ws.readyState==jO){this._log.info("[socket][start]",this._ws._id,"maintained as current ws, we were still in a connecting state");return}const t=this._ws;this._ws=$O(`${this.config.websocketURI}?app_id=${this.config.appId}`),this._ws.onopen=this._wsOnOpen,this._ws.onmessage=this._wsOnMessage,this._ws.onclose=this._wsOnClose,this._ws.onerror=this._wsOnError,this._log.info("[socket][start]",this._ws._id),(t==null?void 0:t.readyState)===c1&&(this._log.info("[socket][start]",this._ws._id,"close previous ws id = ",t._id),t.close())}getLocalId(t){return Nt(this,void 0,void 0,function*(){const r=`localToken_${t}`,i=yield this._persister.getItem(r);if(i)return i;if(this._localIdPromises[r])return this._localIdPromises[r];const s=mt();return this._localIdPromises[r]=this._persister.setItem(r,s).then(()=>s),this._localIdPromises[r]})}_replaceUrlAfterOAuth(){if(typeof URL>"u")return;const t=new URL(window.location.href);if(t.searchParams.get(rp)){const r=t.toString();t.searchParams.delete(rp),t.searchParams.delete("code"),t.searchParams.delete("error");const i=t.pathname+(t.searchParams.size?"?"+t.searchParams:"")+t.hash;if(history.replaceState(history.state,"",i),typeof navigation=="object"&&typeof navigation.addEventListener=="function"&&typeof navigation.removeEventListener=="function"){let s=!1;const l=u=>{var d;s||(s=!0,navigation.removeEventListener("navigate",l),!u.userInitiated&&u.navigationType==="replace"&&((d=u.destination)===null||d===void 0?void 0:d.url)===r&&history.replaceState(history.state,"",i))};navigation.addEventListener("navigate",l)}}}_oauthLoginInit(){return Nt(this,void 0,void 0,function*(){var t,r,i,s;if(typeof window>"u"||typeof window.location>"u"||typeof URLSearchParams>"u")return null;const l=new URLSearchParams(window.location.search);if(!l.get(rp))return null;const u=l.get("error");if(u)return this._replaceUrlAfterOAuth(),{error:{message:u}};const d=l.get("code");if(!d)return null;this._replaceUrlAfterOAuth();try{const{user:h}=yield r1({apiURI:this.config.apiURI,appId:this.config.appId,code:d});return this.setCurrentUser(h),null}catch(h){return((t=h==null?void 0:h.body)===null||t===void 0?void 0:t.type)==="record-not-found"&&((i=(r=h==null?void 0:h.body)===null||r===void 0?void 0:r.hint)===null||i===void 0?void 0:i["record-type"])==="app-oauth-code"&&(yield this._hasCurrentUser())?null:{error:{message:((s=h==null?void 0:h.body)===null||s===void 0?void 0:s.message)||"Error logging in."}}}})}_waitForOAuthCallbackResponse(){return Nt(this,void 0,void 0,function*(){return yield this._oauthCallbackResponse})}__subscribeMutationErrors(t){return this.mutationErrorCbs.push(t),()=>{this.mutationErrorCbs=this.mutationErrorCbs.filter(r=>r!==t)}}subscribeAuth(t){this.authCbs.push(t);const r=this._currentUserCached;r.isLoading||t(this._currentUserCached);let i=!1;return this.getCurrentUser().then(s=>{i||gu(s,r)||t(s)}),()=>{i=!0,this.authCbs=this.authCbs.filter(s=>s!==t)}}getAuth(){return Nt(this,void 0,void 0,function*(){const{user:t,error:r}=yield this.getCurrentUser();if(r)throw r;return t})}subscribeConnectionStatus(t){return this.connectionStatusCbs.push(t),()=>{this.connectionStatusCbs=this.connectionStatusCbs.filter(r=>r!==t)}}subscribeAttrs(t){return this.attrsCbs.push(t),this.attrs&&t(this.attrs),()=>{this.attrsCbs=this.attrsCbs.filter(r=>r!==t)}}notifyAuthSubs(t){this.authCbs.forEach(r=>r(t))}notifyMutationErrorSubs(t){this.mutationErrorCbs.forEach(r=>r(t))}notifyAttrsSubs(){if(!this.attrs)return;const t=this.optimisticAttrs();this.attrsCbs.forEach(r=>r(t))}notifyConnectionStatusSubs(t){this.connectionStatusCbs.forEach(r=>r(t))}setCurrentUser(t){return Nt(this,void 0,void 0,function*(){yield this._persister.setItem(ap,JSON.stringify(t))})}getCurrentUserCached(){return this._currentUserCached}getCurrentUser(){return Nt(this,void 0,void 0,function*(){const t=yield this._waitForOAuthCallbackResponse();if(t!=null&&t.error){const s={error:t.error,user:void 0};return this._currentUserCached=Object.assign({isLoading:!1},s),s}const r=yield this._persister.getItem(ap),i={user:JSON.parse(r),error:void 0};return this._currentUserCached=Object.assign({isLoading:!1},i),i})}_hasCurrentUser(){return Nt(this,void 0,void 0,function*(){const t=yield this._persister.getItem(ap);return JSON.parse(t)!=null})}changeCurrentUser(t){return Nt(this,void 0,void 0,function*(){var r;const{user:i}=yield this.getCurrentUser();if(!gu(i,t)){yield this.setCurrentUser(t),this.updateUser(t);try{(r=this._broadcastChannel)===null||r===void 0||r.postMessage({type:"auth"})}catch(s){console.error("Error posting message to broadcast channel",s)}}})}updateUser(t){const r={error:void 0,user:t};this._currentUserCached=Object.assign({isLoading:!1},r),this._dataForQueryCache={},this.querySubs.set(i=>(Object.keys(i).forEach(s=>{delete i[s].result}),i)),this._reconnectTimeoutMs=0,this._ws.close(),this._oauthCallbackResponse=null,this.notifyAuthSubs(r)}sendMagicCode({email:t}){return wO({apiURI:this.config.apiURI,appId:this.config.appId,email:t})}signInWithMagicCode(t){return Nt(this,arguments,void 0,function*({email:r,code:i}){const s=yield xO({apiURI:this.config.apiURI,appId:this.config.appId,email:r,code:i});return yield this.changeCurrentUser(s.user),s})}signInWithCustomToken(t){return Nt(this,void 0,void 0,function*(){const r=yield _O({apiURI:this.config.apiURI,appId:this.config.appId,refreshToken:t});return yield this.changeCurrentUser(r.user),r})}potentiallyInvalidateToken(t,r){var i;const s=(i=t==null?void 0:t.user)===null||i===void 0?void 0:i.refresh_token;if(!s)return;if(r.invalidateToken===!1){this._log.info("[auth-invalidate] skipped invalidateToken");return}TO({apiURI:this.config.apiURI,appId:this.config.appId,refreshToken:s}).then(()=>{this._log.info("[auth-invalidate] completed invalidateToken")}).catch(u=>{})}signOut(t){return Nt(this,void 0,void 0,function*(){const r=yield this.getCurrentUser();this.potentiallyInvalidateToken(r,t),yield this.changeCurrentUser(null)})}createAuthorizationURL({clientName:t,redirectURL:r}){const{apiURI:i,appId:s}=this.config;return`${i}/runtime/oauth/start?app_id=${s}&client_name=${t}&redirect_uri=${r}`}exchangeCodeForToken(t){return Nt(this,arguments,void 0,function*({code:r,codeVerifier:i}){const s=yield r1({apiURI:this.config.apiURI,appId:this.config.appId,code:r,codeVerifier:i});return yield this.changeCurrentUser(s.user),s})}issuerURI(){const{apiURI:t,appId:r}=this.config;return`${t}/runtime/${r}`}signInWithIdToken(t){return Nt(this,arguments,void 0,function*({idToken:r,clientName:i,nonce:s}){var l;const u=yield this.getCurrentUser(),d=(l=u==null?void 0:u.user)===null||l===void 0?void 0:l.refresh_token,h=yield SO({apiURI:this.config.apiURI,appId:this.config.appId,idToken:r,clientName:i,nonce:s,refreshToken:d});return yield this.changeCurrentUser(h.user),h})}joinRoom(t,r){return this._rooms[t]||(this._rooms[t]={isConnected:!1,error:void 0}),this._presence[t]=this._presence[t]||{},r&&(this._presence[t].result=this._presence[t].result||{},this._presence[t].result.user=r,this._notifyPresenceSubs(t)),this._tryJoinRoom(t,r),()=>{this._cleanupRoom(t)}}_cleanupRoom(t){var r,i,s,l;if(!(!((i=(r=this._presence[t])===null||r===void 0?void 0:r.handlers)===null||i===void 0)&&i.length)&&!Object.keys((s=this._broadcastSubs[t])!==null&&s!==void 0?s:{}).length){const u=(l=this._rooms[t])===null||l===void 0?void 0:l.isConnected;delete this._rooms[t],delete this._presence[t],delete this._broadcastSubs[t],u?this._tryLeaveRoom(t):this._roomsPendingLeave[t]=!0}}getPresence(t,r,i={}){const s=this._rooms[r],l=this._presence[r];return!s||!l||!l.result?null:Object.assign(Object.assign({},OO(l.result,i,this._sessionId)),{isLoading:!s.isConnected,error:s.error})}publishPresence(t,r,i){const s=this._rooms[r],l=this._presence[r];if(!s||!l)return;l.result=l.result||{};const u=Object.assign(Object.assign({},l.result.user),i);l.result.user=u,s.isConnected&&(this._trySetPresence(r,u),this._notifyPresenceSubs(r))}_trySetPresence(t,r){this._trySendAuthed(mt(),{op:"set-presence","room-id":t,data:r})}_tryJoinRoom(t,r){this._trySendAuthed(mt(),{op:"join-room","room-id":t,data:r}),delete this._roomsPendingLeave[t]}_tryLeaveRoom(t){this._trySendAuthed(mt(),{op:"leave-room","room-id":t})}subscribePresence(t,r,i,s){const l=this.joinRoom(r,i.data),u=Object.assign(Object.assign({},i),{roomId:r,cb:s,prev:null});return this._presence[r]=this._presence[r]||{},this._presence[r].handlers=this._presence[r].handlers||[],this._presence[r].handlers.push(u),this._notifyPresenceSub(r,u),()=>{var d,h,p;this._presence[r].handlers=(p=(h=(d=this._presence[r])===null||d===void 0?void 0:d.handlers)===null||h===void 0?void 0:h.filter(y=>y!==u))!==null&&p!==void 0?p:[],l()}}_notifyPresenceSubs(t){var r,i;(i=(r=this._presence[t])===null||r===void 0?void 0:r.handlers)===null||i===void 0||i.forEach(s=>{this._notifyPresenceSub(t,s)})}_notifyPresenceSub(t,r){const i=this.getPresence("",t,r);i&&(r.prev&&!AO(i,r.prev)||(r.prev=i,r.cb(i)))}_patchPresencePeers(t,r){var i,s,l;const u=((s=(i=this._presence[t])===null||i===void 0?void 0:i.result)===null||s===void 0?void 0:s.peers)||{};let d=Object.fromEntries(Object.entries(u).map(([p,y])=>[p,{data:y}]));(l=this._presence[t])===null||l===void 0||l.result;const h=Gp(d,p=>{for(let[y,g,b]of r)switch(g){case"+":_M(p,y,b);break;case"r":Gw(p,y,b);break;case"-":w2(p,y);break}delete p[this._sessionId]});this._setPresencePeers(t,h)}_setPresencePeers(t,r){const i=Object.assign({},r);delete i[this._sessionId];const s=Object.fromEntries(Object.entries(i).map(([l,u])=>[l,u.data]));this._presence=Gp(this._presence,l=>{Gw(l,[t,"result","peers"],s)})}publishTopic({roomType:t,roomId:r,topic:i,data:s}){var l;const u=this._rooms[r];if(u){if(!u.isConnected){this._broadcastQueue[r]=(l=this._broadcastQueue[r])!==null&&l!==void 0?l:[],this._broadcastQueue[r].push({topic:i,roomType:t,data:s});return}this._tryBroadcast(r,t,i,s)}}_tryBroadcast(t,r,i,s){this._trySendAuthed(mt(),{op:"client-broadcast","room-id":t,roomType:r,topic:i,data:s})}subscribeTopic(t,r,i){const s=this.joinRoom(t);return this._broadcastSubs[t]=this._broadcastSubs[t]||{},this._broadcastSubs[t][r]=this._broadcastSubs[t][r]||[],this._broadcastSubs[t][r].push(i),this._presence[t]=this._presence[t]||{},()=>{this._broadcastSubs[t][r]=this._broadcastSubs[t][r].filter(l=>l!==i),this._broadcastSubs[t][r].length||delete this._broadcastSubs[t][r],s()}}_notifyBroadcastSubs(t,r,i){var s,l,u;(u=(l=(s=this._broadcastSubs)===null||s===void 0?void 0:s[t])===null||l===void 0?void 0:l[r])===null||u===void 0||u.forEach(d=>{var h,p,y,g,b,w;const S=(h=i.data)===null||h===void 0?void 0:h.data,T=i.data["peer-id"]===this._sessionId?(y=(p=this._presence[t])===null||p===void 0?void 0:p.result)===null||y===void 0?void 0:y.user:(w=(b=(g=this._presence[t])===null||g===void 0?void 0:g.result)===null||b===void 0?void 0:b.peers)===null||w===void 0?void 0:w[i.data["peer-id"]];return d(S,T)})}uploadFile(t,r,i){return Nt(this,void 0,void 0,function*(){var s;const l=yield this.getCurrentUser(),u=(s=l==null?void 0:l.user)===null||s===void 0?void 0:s.refresh_token;return kO(Object.assign(Object.assign({},i),{apiURI:this.config.apiURI,appId:this.config.appId,path:t,file:r,refreshToken:u}))})}deleteFile(t){return Nt(this,void 0,void 0,function*(){var r;const i=yield this.getCurrentUser(),s=(r=i==null?void 0:i.user)===null||r===void 0?void 0:r.refresh_token;return yield EO({apiURI:this.config.apiURI,appId:this.config.appId,path:t,refreshToken:s})})}upload(t,r){return Nt(this,void 0,void 0,function*(){var i;const s=yield this.getCurrentUser(),l=(i=s==null?void 0:s.user)===null||i===void 0?void 0:i.refresh_token,u=t||r.name,d=yield CO({apiURI:this.config.apiURI,appId:this.config.appId,fileName:u,refreshToken:l});return yield MO(d,r)})}getDownloadUrl(t){return Nt(this,void 0,void 0,function*(){var r;const i=yield this.getCurrentUser(),s=(r=i==null?void 0:i.user)===null||r===void 0?void 0:r.refresh_token;return yield NO({apiURI:this.config.apiURI,appId:this.config.appId,path:t,refreshToken:s})})}}class Fn{constructor(t,r,i,s={indexed:!1,unique:!1}){this.valueType=t,this.required=r,this.isIndexed=i,this.config=s,this.metadata={}}clientRequired(){return new Fn(this.valueType,!1,this.isIndexed,this.config)}optional(){return new Fn(this.valueType,!1,this.isIndexed,this.config)}unique(){return new Fn(this.valueType,this.required,this.isIndexed,Object.assign(Object.assign({},this.config),{unique:!0}))}indexed(){return new Fn(this.valueType,this.required,!0,Object.assign(Object.assign({},this.config),{indexed:!0}))}}class td{constructor(t,r){this.attrs=t,this.links=r}asType(){return new td(this.attrs,this.links)}}class nd{constructor(t,r,i){this.entities=t,this.links=r,this.rooms=i}withRoomSchema(){return new nd(this.entities,this.links,{})}}function YO(e,t){return new nd(B2(e,t),t,void 0)}function PO(e){return new td(e,{})}function XO(){return new Fn("string",!0,!1)}function FO(){return new Fn("number",!0,!1)}function GO(){return new Fn("boolean",!0,!1)}function VO(){return new Fn("date",!0,!1)}function QO(){return new Fn("json",!0,!1)}function WO(){return new Fn("json",!0,!1)}function B2(e,t){var r,i,s,l;const u={fwd:{},rev:{}};for(const h of Object.values(t))(r=u.fwd)[i=h.forward.on]||(r[i]={}),(s=u.rev)[l=h.reverse.on]||(s[l]={}),u.fwd[h.forward.on][h.forward.label]={entityName:h.reverse.on,cardinality:h.forward.has},u.rev[h.reverse.on][h.reverse.label]={entityName:h.forward.on,cardinality:h.reverse.has};return Object.fromEntries(Object.entries(e).map(([h,p])=>[h,new td(p.attrs,Object.assign(Object.assign({},u.fwd[h]),u.rev[h]))]))}function ZO({entities:e,links:t,rooms:r}){const i=t??{},s=r??{};return new nd(B2(e,i),i,s)}const Ve={graph:YO,schema:ZO,entity:PO,string:XO,number:FO,boolean:GO,date:VO,json:QO,any:WO};let Jc;function KO(e,t){Jc==null||Jc.dispose();const r=aA(t),i=tA(t,d),s=eA(JO(e));function l(y){var g;y.source===s.element.contentWindow&&((g=y.data)===null||g===void 0?void 0:g.type)==="close"&&r.isVisible()&&d()}function u(y){const g=y.shiftKey&&y.ctrlKey&&y.key==="0",b=y.key==="Escape"||y.key==="Esc";(g||b&&r.isVisible())&&d()}function d(){r.isVisible()?r.element.style.display="none":(r.element.style.display="block",r.element.contains(s.element)||r.element.appendChild(s.element))}function h(){r.element.remove(),i.element.remove(),removeEventListener("keydown",u),removeEventListener("message",l)}function p(){document.body.appendChild(r.element),document.body.appendChild(i.element),addEventListener("keydown",u),addEventListener("message",l),Jc={dispose:h}}return p()}function JO(e){return`${cg||H2?"http://localhost:3000":"https://instantdb.com"}/_devtool?appId=${e}`}function eA(e){const t=document.createElement("iframe");return t.src=e,t.className="instant-devtool-iframe",Object.assign(t.style,{width:"100%",height:"100%",backgroundColor:"white",border:"none"}),{element:t}}function tA(e,t){const r=`
    <svg width="32" height="32" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" fill="black"/>
      <rect x="97.0973" y="91.3297" width="140" height="330" fill="white"/>
    </svg>
  `,i=document.createElement("button");return i.innerHTML=r,i.className="instant-devtool-toggler",Object.assign(i.style,Object.assign(Object.assign({position:"fixed"},nA(e.position)),{height:"32px",width:"32px",display:"flex",alignItems:"center",justifyContent:"center",zIndex:"9010",padding:"0",margin:"0",border:"none",cursor:"pointer"})),i.addEventListener("click",t),{element:i}}function nA(e){switch(e){case"bottom-left":return{bottom:"24px",left:"24px"};case"bottom-right":return{bottom:"24px",right:"24px"};case"top-right":return{top:"24px",right:"24px"};case"top-left":return{top:"24px",left:"24px"}}}function rA(e){switch(e){case"bottom-left":return{bottom:"24px",right:"24px",left:"60px",top:"72px"};case"bottom-right":return{bottom:"24px",left:"24px",right:"60px",top:"72px"};case"top-right":return{top:"24px",left:"24px",right:"60px",bottom:"72px"};case"top-left":return{top:"24px",right:"24px",left:"60px",bottom:"72px"}}}function aA(e){const t=document.createElement("div");Object.assign(t.style,Object.assign(Object.assign({position:"fixed"},rA(e.position)),{display:"block",borderRadius:"4px",border:"1px #ccc solid",boxShadow:"0px 0px 8px #00000044",backgroundColor:"#eee",zIndex:"999990"})),t.style.display="none",t.className="instant-devtool-container";function r(){return t.style.display!=="none"}return{element:t,isVisible:r}}const iA={apiURI:"https://api.instantdb.com",websocketURI:"wss://api.instantdb.com/runtime/session"};function oA(){var e;return globalThis.__instantDbSchemaHashStore=(e=globalThis.__instantDbSchemaHashStore)!==null&&e!==void 0?e:new WeakMap,globalThis.__instantDbSchemaHashStore}function sA(){var e;return globalThis.__instantDbStore=(e=globalThis.__instantDbStore)!==null&&e!==void 0?e:{},globalThis.__instantDbStore}function im(e){const t=e.__adminToken;return e.appId+"_"+(e.websocketURI||"default_ws_uri")+"_"+(e.apiURI||"default_api_uri")+"_"+(t||"client_only")+"_"+e.useDateObjects}const om=sA(),ip=oA();class lA{constructor(t){this.db=t,this.sendMagicCode=r=>this.db.sendMagicCode(r),this.signInWithMagicCode=r=>this.db.signInWithMagicCode(r),this.signInWithToken=r=>this.db.signInWithCustomToken(r),this.createAuthorizationURL=r=>this.db.createAuthorizationURL(r),this.signInWithIdToken=r=>this.db.signInWithIdToken(r),this.exchangeOAuthCode=r=>this.db.exchangeCodeForToken(r),this.issuerURI=()=>this.db.issuerURI(),this.signOut=(r={invalidateToken:!0})=>this.db.signOut(r)}}class cA{constructor(t){this.db=t,this.uploadFile=(r,i,s={})=>this.db.uploadFile(r,i,s),this.delete=r=>this.db.deleteFile(r),this.upload=(r,i)=>this.db.upload(r,i),this.put=this.upload,this.getDownloadUrl=r=>this.db.getDownloadUrl(r)}}class uA{constructor(t){this.tx=z2(),this._reactor=t,this.auth=new lA(this._reactor),this.storage=new cA(this._reactor)}transact(t){return this._reactor.pushTx(t)}getLocalId(t){return this._reactor.getLocalId(t)}subscribeQuery(t,r,i){return this._reactor.subscribeQuery(t,r,i)}subscribeAuth(t){return this._reactor.subscribeAuth(t)}getAuth(){return this._reactor.getAuth()}subscribeConnectionStatus(t){return this._reactor.subscribeConnectionStatus(t)}joinRoom(t="_defaultRoomType",r="_defaultRoomId",i){return{leaveRoom:this._reactor.joinRoom(r,i==null?void 0:i.initialPresence),subscribeTopic:(l,u)=>this._reactor.subscribeTopic(r,l,u),subscribePresence:(l,u)=>this._reactor.subscribePresence(t,r,l,u),publishTopic:(l,u)=>this._reactor.publishTopic({roomType:t,roomId:r,topic:l,data:u}),publishPresence:l=>this._reactor.publishPresence(t,r,l),getPresence:l=>this._reactor.getPresence(t,r,l)}}shutdown(){delete om[im(this._reactor.config)],this._reactor.shutdown()}queryOnce(t,r){return this._reactor.queryOnce(t,r)}}function f1(e){if(!e)return"0";if(ip.get(e))return ip.get(e);const t=hn(e);return ip.set(e,t),t}function dA(e,t){return f1(e._reactor.config.schema)!==f1(t)}function fA(e,t,r,i){const s=om[im(e)];if(s)return dA(s,e.schema)&&s._reactor.updateSchema(e.schema),s;const l=new BO(Object.assign(Object.assign(Object.assign({},iA),e),{cardinalityInference:!!e.schema}),t||U2,r||L2,Object.assign(Object.assign({},i||{}),{"@instantdb/core":q2})),u=new uA(l);return om[im(e)]=u,hA(e.appId,e.devtool),u}function hA(e,t){if(typeof window>"u"||typeof window.location>"u"||typeof document>"u"||typeof t=="boolean"&&!t)return;const r=Object.assign({position:"bottom-right",allowedHosts:["localhost"]},typeof t=="object"?t:{});r.allowedHosts.includes(window.location.hostname)&&KO(e,r)}const pA=Ve.schema({entities:{party:Ve.entity({name:Ve.string().unique().indexed(),host:Ve.string().optional(),gameState:Ve.any().optional(),gameParams:Ve.any().optional(),status:Ve.string()}),roomEvent:Ve.entity({type:Ve.string(),payload:Ve.any()}),players:Ve.entity({localId:Ve.string().unique().indexed(),name:Ve.string(),avatar:Ve.string()}),paintings:Ve.entity({canvas:Ve.any(),playerId:Ve.string(),word:Ve.string()}),words:Ve.entity({word:Ve.string().unique().indexed(),lang:Ve.string(),category:Ve.string().optional(),hidden:Ve.boolean().optional()})},links:{partyRoomEvents:{forward:{on:"party",has:"many",label:"roomEvents"},reverse:{on:"roomEvent",has:"one",label:"party"}},partyPlayers:{forward:{on:"party",has:"many",label:"players"},reverse:{on:"players",has:"many",label:"parties"}}},rooms:{party:{presence:Ve.entity({user:Ve.any().optional()}),topics:{currentCanvas:Ve.entity({currentDrawing:Ve.any().optional()})}}}}),mA=pA,gA="59599101-16e7-493b-8644-ccb75b6cb032",ye=fA({appId:gA,schema:mA});function h1(e){return e[Math.floor(Math.random()*e.length)]}function vA(){return h1(bA)+" "+h1(yA)}const yA=["cat","dog","sun","sky","tree","bird","fish","hand","foot","ball","star","book","car","bed","toy","hat","cup","box","map","pen"],bA=["big","hot","red","old","wet","new","sad","tall","cold","fat","dry","fun","shy","blue","cute","kind","dark","loud","warm","fast"],Yt={nothing:"nothing",prepare:"prepare",inProgress:"in-progress",finished:"finished"};function Y2(){return{gameState:{players:[],innerState:{}},name:"",host:"",gameParams:{rounds:5,wordSuggestions:3,drawTime:60},status:Yt.nothing,players:[],id:""}}function P2(e){const t=[];return e.forEach(r=>{r.type==="line"?t.push(r):r.type==="undo"&&t.pop()}),t}async function ug(e){const t=await ye.getLocalId("guest");return await ye.transact([ye.tx.players[t].update({name:e,localId:t,avatar:""})])}async function wA(e){const{data:{party:t}}=await ye.queryOnce({party:{$:{where:{status:Yt.prepare,name:e}}}});return t&&t[0]||null}async function X2(e){const{data:{party:t}}=await ye.queryOnce({party:{$:{where:{id:e}}}});return t[0]||null}async function xA(e){const t=await ye.getLocalId("guest"),r=await X2(e);if(!r)throw new Error(`Party not found '${e}'`);if(r.status!==Yt.prepare)throw new Error(`Can't join to party in '${r.status}' status`);return await ye.transact([ye.tx.party[e].link({players:t})])}async function _A(e){const t=e.id,r=await X2(t);if(!r)throw new Error(`Party not found '${t}'`);if(r.status!==Yt.prepare)throw new Error(`Can't start to party in '${r.status}' status`);const i=e.players.map(s=>s.id);await ye.transact([ye.tx.party[t].update({status:Yt.inProgress,gameState:{...r.gameState,players:i,innerState:{state:"choosing-word",playerId:i[0],words:u2(3)}}})])}async function SA(e,t){return await ye.transact([ye.tx.party[e].unlink({players:t})])}async function TA(e){const t=await ye.getLocalId("guest");return await ye.transact([ye.tx.party[e].unlink({players:t})])}async function F2(e){return await ye.transact([ye.tx.party[e].update({status:Yt.finished})])}async function op(e,t){return await ye.transact([ye.tx.party[e].update({gameParams:t})])}async function kA(e){var l;const t=mt(),r=await ye.getLocalId("guest"),{players:i}=await ye.queryOnce({players:{$:{where:{id:r}},parties:{$:{where:{status:Yt.prepare}}}}}).then(u=>u.data);if((l=i[0])!=null&&l.parties&&i[0].parties.length>0)throw new Error("Player already has a party in prepare status. Please finish or leave that party first.");return await ye.transact([ye.tx.party[t].create({gameState:{drawing:""},name:e,host:r,gameParams:{rounds:5,wordSuggestions:3},status:Yt.prepare}).link({players:r})])}const G2=Fe(),fr=Eo(G2,"");fr.watch(e=>console.log("$localId",e));ye.getLocalId("guest").then(e=>G2(e));K2();const EA=Fe(),p1=Eo(EA,Y2()),V2=Fe();Eo(V2,rM);const Q2=Fe(),dg=Eo(Q2,{id:"",localId:"",name:"",avatar:""}),W2=At([]);ri(W2,e=>sM(e,["foo"],{lang:"RU",rounds:1e3,suggestions:3,canvasSize:600},"foo|bar|baz"));const CA=At(""),MA=At(null),Z2=At(!1);Fe();const NA=Fe(),OA=Fe(),AA=Fe(),RA=Fe();ml({source:[fr,p1],clock:OA,fn:([e,t])=>({...t,gameState:{...t.gameState,drawing:e}}),target:p1});W2.on(RA,(e,{history:t})=>t);Z2.on(NA,(e,t)=>t);async function K2(e=3){if(e<0)throw new Error("Can't get user");const t=await ye.getLocalId("guest"),r=await ye.queryOnce({players:{$:{where:{id:t}}}}).then(s=>s.data.players[0]);if(r)return r;const i=vA();return await ug(i),K2(e-1)}Qm(fr,e=>e?ye.subscribeQuery({players:{$:{where:{id:e}}}},t=>{if(t.error&&console.error(t.error),t.data){const r=t.data.players[0];Q2(r)}}):()=>{});async function zA(){throw new Error("Not implemented")}async function DA(){return(await ye.queryOnce({players:{}})).data.players}const jA={buildTimestamp:parseInt(1761598489515)},UA={linear:e=>e},LA={simulatePressure:!1,smoothing:1,thinning:.1,streamline:0,easing:UA.linear},$s=[3,8,15,20,25],J2=["#111111","#34495e","#f6eee2","#ffffff","#8b4513","#fa3224","#ffa729","#ffd129","#2ecc71","#3498db","#9b59b6","#ff69b4"],$A="container_ccgudew",HA="header_hf1ec1k",IA="title_t1chi7ru",qA="content_c1xprte0",BA="footer_f13fsgpf";function $r({children:e}){const t=Date.now()-jA.buildTimestamp;return z.jsxs("div",{className:$A,children:[z.jsx("header",{className:HA,children:z.jsx(ao,{href:Xn(""),children:z.jsx("h1",{className:IA,children:"Drawinchi"})})}),z.jsx("main",{className:qA,children:e}),z.jsxs("footer",{className:BA,children:[z.jsx(ao,{href:Xn(""),children:"Главная"}),z.jsx(ao,{href:Xn("all-rooms"),children:"Все комнаты"}),z.jsx(ao,{href:Xn("words"),children:"Слова"}),z.jsx(ao,{href:Xn("paintings"),children:"Картины"}),z.jsxs("p",{children:["build ",t/(1e3*60)," min ago"]})]})]})}const YA="root_r6f0ecm";function sm({label:e,value:t,onChange:r,maxLen:i,type:s="text",placeholder:l}){return z.jsxs("div",{className:YA,children:[e&&z.jsx("label",{children:e}),z.jsx("input",{maxLength:i,type:s,value:t,onChange:u=>r(u.target.value),placeholder:l})]})}const PA="_form_1h2bc_1",XA="_roomCodeRow_1h2bc_9",FA="_joinButton_1h2bc_14",GA="_divider_1h2bc_26",As={form:PA,roomCodeRow:XA,joinButton:FA,divider:GA},VA="root_r1cb9caz";function e_({children:e,onClick:t,className:r,type:i}){return z.jsx("button",{type:i||"button",className:`${VA} ${r||""}`,onClick:t,children:e})}function m1(){return nt(dg).id?z.jsx($r,{children:z.jsx(QA,{})}):null}function QA(){const e=nt(dg),[t,r]=ce.useState(""),[i,s]=ce.useState(e.name),[l,u]=ce.useState(u2(3).join("-")),[d,h]=Ym(),p=async()=>{try{await kA(l)}catch(y){console.error("Failed to create party:",y)}};return z.jsxs("div",{className:As.form,children:[z.jsx(sm,{label:"Имя",value:i,onChange:s}),z.jsx("div",{className:As.field,children:z.jsxs("form",{onSubmit:y=>{y.preventDefault(),ug(i.trim()),wA(t).then(g=>{if(g)return xA(g.id).then(()=>{h(Xn("current-party"))})})},className:As.roomCodeRow,children:[z.jsx(sm,{label:"Комната",value:t,onChange:r}),z.jsx("button",{type:"submit",className:As.joinButton,children:"Войти"})]})}),z.jsx("div",{className:As.divider,children:z.jsx("span",{children:"или"})}),z.jsx(e_,{onClick:p,children:"Создать новую игру"})]})}const WA=["домино","стрэй кидс","феликс","бан чан","лино","лифт","концерт","скотч","дом","вода","лёд","квадрат","круг","карандаш","линейка","суши","рамён","дождь","играть","читать","учиться","дерево","растение","работать","сундук","майнкрафт","рисовать","кей-поп","акула","рыба","холод","свет","балкон","программист","пенал","мороженое","куб","лава","вулкан","кот","мяч","танцевать","урок","колонка","плавать","диплом","тюльпан","фото","чашка","кунг-фу","цирк","кролик","рокета","хранилище","семья","родители","ребёнок","мама","папа","счастье","космос","солнце","небо","корона","земля","флаг","королева","король","ворота","сердечко","пульт","маркер","ручка","рука","ножницы","кнопка","тетрадь","айпад","ниндзя","воздух","звук","единорог","телевизор","цветок","гусь","корея","Нидерланды"],ZA=["кот","собака","дом","машина","дерево","солнце","луна","звезда","море","река","гора","лес","цветок","трава","небо","облако","дождь","снег","ветер","огонь","вода","земля","камень","песок","лед","пламя","дым","туман","радуга","молния","хлеб","молоко","мясо","рыба","яйцо","сыр","масло","сахар","соль","перец","яблоко","банан","апельсин","лимон","виноград","клубника","вишня","персик","груша","ананас","морковь","картофель","лук","чеснок","помидор","огурец","капуста","салат","редис","свекла","стол","стул","кровать","шкаф","диван","кресло","лампа","зеркало","часы","телевизор","компьютер","телефон","книга","ручка","карандаш","бумага","тетрадь","рюкзак","сумка","кошелек","рубашка","брюки","платье","юбка","куртка","пальто","шляпа","кепка","носки","туфли","сапоги","кроссовки","тапочки","перчатки","шарф","ремень","очки","часы","кольцо","серьги","автобус","поезд","самолет","корабль","велосипед","мотоцикл","грузовик","такси","метро","трамвай","врач","учитель","водитель","повар","продавец","строитель","художник","музыкант","актер","писатель","мама","папа","сын","дочь","брат","сестра","дедушка","бабушка","дядя","тетя","школа","университет","больница","магазин","ресторан","кафе","театр","кино","музей","парк","спорт","футбол","баскетбол","теннис","плавание","бег","йога","танцы","музыка","пение","гитара","пианино","скрипка","барабаны","флейта","труба","саксофон","микрофон","динамик","наушники","красный","синий","зеленый","желтый","черный","белый","серый","розовый","фиолетовый","оранжевый","большой","маленький","высокий","низкий","длинный","короткий","широкий","узкий","толстый","тонкий","быстрый","медленный","горячий","холодный","сухой","мокрый","чистый","грязный","новый","старый","один","два","три","четыре","пять","шесть","семь","восемь","девять","десять","понедельник","вторник","среда","четверг","пятница","суббота","воскресенье","день","ночь","утром","весна","лето","осень","зима","январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь","год","месяц","неделя","час","минута","секунда","время","часы","будильник","календарь","дата","праздник","день рождения","свадьба","любовь","дружба","семья","счастье","радость","грусть","злость","страх","удивление","смех","плач","улыбка","объятие","поцелуй","подарок","сюрприз","мечта","надежда","вера","удача","работа","отдых","игра","развлечение","хобби","путешествие","отпуск","выходные","каникулы","приключение","здоровье","болезнь","лекарство","витамины","спорт","диета","сон","усталость","энергия","сила","деньги","покупки","продажа","цена","скидка","банк","кредит","зарплата","бюджет","экономия","еда","завтрак","обед","ужин","кухня","рецепт","готовка","посуда","тарелка","чашка","нож","вилка","ложка","кастрюля","сковорода","духовка","холодильник","микроволновка","тостер","блендер","шоколад","конфеты","торт","печенье","мороженое","напиток","сок","чай","кофе","лимонад","пляж","отель","чемодан","билет","паспорт","фото","камера","видео","селфи","воспоминание","интернет","сайт","email","сообщение","чат","социальная сеть","блог","видеоблог","подписчик","лайк","фильм","сериал","актер","режиссер","сценарий","роль","премьера","билет","попкорн","3D","животное","птица","рыба","насекомое","млекопитающее","хищник","травоядное","дикое","домашнее","зоопарк","лев","тигр","слон","жираф","обезьяна","медведь","волк","лиса","заяц","белка","птица","орел","сова","попугай","воробей","голубь","ласточка","аист","пингвин","фламинго","акула","дельфин","кит","осьминог","краб","морская звезда","медуза","креветка","лосось","тунец","пчела","бабочка","муравей","паук","жук","комар","муха","стрекоза","кузнечик","божья коровка","роза","тюльпан","ромашка","подсолнух","лилия","орхидея","фиалка","гвоздика","пион","ирис","дуб","береза","сосна","ель","клен","липа","каштан","ива","тополь","рябина","футболист","теннисист","пловец","боксер","гимнаст","лыжник","хоккеист","баскетболист","велосипедист","бегун","стадион","спортзал","бассейн","корт","поле","каток","лыжня","беговая дорожка","тренажер","мяч","ракетка","клюшка","шайба","ворота","сетка","финиш","старт","медаль","кубок","чемпион","математика","физика","химия","биология","история","география","литература","русский язык","английский","информатика","урок","учебник","тетрадь","доска","мел","парта","класс","перемена","звонок","домашнее задание","оценка","экзамен","тест","контрольная","диктант","сочинение","презентация","проект","исследование","эксперимент","погода","прогноз","температура","градус","термометр","барометр","влажность","давление","ветер","буря","ясно","пасмурно","дождливо","снежно","туманно","солнечно","ветрено","прохладно","тепло","жарко","зонт","дождевик","солнцезащитные очки","крем от загара","шляпа от солнца","перчатки","варежки","шарф","шапка","сапоги","космос","планета","звезда","галактика","солнечная система","астронавт","ракета","спутник","телескоп","НЛО","Земля","Марс","Венера","Юпитер","Сатурн","Меркурий","Уран","Нептун","Плутон","комета","океан","континент","страна","город","деревня","столица","граница","карта","компас","GPS","Россия","Москва","Санкт-Петербург","Америка","Европа","Азия","Африка","Австралия","Антарктида","остров","церковь","храм","мечеть","синагога","монастырь","собор","колокол","крест","икона","свеча","праздник","Новый год","Рождество","Пасха","день рождения","свадьба","юбилей","выпускной","крестины","именины","подарок","торт","свечи","воздушные шары","фейерверк","конфетти","украшения","гирлянда","елка","Дед Мороз","больница","поликлиника","врач","медсестра","пациент","лечение","операция","таблетки","укол","рентген","стоматолог","окулист","кардиолог","хирург","терапевт","педиатр","психолог","ветеринар","фармацевт","скорая помощь","полиция","пожарные","спасатель","солдат","генерал","офицер","сержант","капитан","майор","полковник","суд","судья","адвокат","прокурор","свидетель","подозреваемый","обвиняемый","приговор","штраф","тюрьма","банк","банкир","кассир","счет","вклад","кредит","ипотека","процент","банкомат","карта","ресторан","кафе","бар","повар","официант","меню","заказ","счет","чаевые","кухня","отель","гостиница","номер","ключ","ресепшн","администратор","горничная","завтрак","обслуживание","бронирование","магазин","супермаркет","продавец","касса","чек","сдача","скидка","акция","распродажа","витрина","одежда","обувь","аксессуары","украшения","косметика","парфюм","сумка","кошелек","ремень","галстук","парикмахерская","салон красоты","стрижка","прическа","маникюр","педикюр","массаж","косметолог","визажист","стилист","театр","опера","балет","концерт","симфония","оркестр","дирижер","солист","хор","декорации","музей","галерея","выставка","экскурсия","гид","экспонат","картина","скульптура","археология","история","библиотека","книга","автор","писатель","поэт","роман","повесть","рассказ","стихи","сказка","газета","журнал","статья","интервью","репортаж","новости","журналист","редактор","типография","издательство","радио","телевидение","программа","ведущий","корреспондент","прямой эфир","запись","трансляция","канал","антенна","компьютер","ноутбук","планшет","смартфон","клавиатура","мышь","монитор","процессор","память","жесткий диск","программа","приложение","игра","файл","папка","документ","презентация","таблица","база данных","сайт","интернет","браузер","поиск","ссылка","домен","сервер","облако","загрузка","скачивание","обновление","email","сообщение","чат","видеозвонок","конференция","вебинар","стрим","подкаст","блог","влог","социальная сеть","профиль","друзья","подписчики","пост","фото","видео","лайк","комментарий","репост","игрушка","кукла","мишка","конструктор","пазл","настольная игра","карты","шахматы","шашки","домино","мяч","скакалка","велосипед","самокат","ролики","коньки","лыжи","сноуборд","кайт","воздушный змей","сад","огород","грядка","теплица","лейка","лопата","грабли","семена","рассада","урожай","дача","беседка","мангал","шашлык","пикник","костер","палатка","поход","рюкзак","спальный мешок","рыбалка","удочка","крючок","наживка","улов","лодка","сети","рыбак","озеро","пруд","охота","ружье","охотник","дичь","капкан","следы","лес","чаща","поляна","тропа","грибы","ягоды","корзина","нож","компас","карта","ориентирование","заблудиться","выход","тропинка","цирк","клоун","акробат","жонглер","фокусник","дрессировщик","арена","шапито","представление","номер","аттракцион","карусель","колесо обозрения","американские горки","батут","качели","горка","песочница","площадка","парк","зоопарк","вольер","клетка","кормление","экскурсия","смотритель","ветеринар","животное","хищник","травоядное","аквариум","рыбка","водоросли","ракушка","кораллы","фильтр","компрессор","корм","освещение","температура","террариум","змея","ящерица","черепаха","игуана","хамелеон","геккон","варан","питон","кобра","ферма","фермер","трактор","комбайн","плуг","борона","сеялка","жатка","силос","сено","коровник","свинарник","курятник","конюшня","овчарня","пастбище","загон","кормушка","поилка","доярка","корова","бык","теленок","свинья","поросенок","овца","баран","ягненок","коза","козленок","лошадь","жеребенок","пони","осел","мул","верблюд","олень","лось","кабан","бизон","курица","петух","цыпленок","утка","гусь","индейка","перепел","фазан","павлин","страус","мастерская","инструмент","молоток","гвоздь","винт","гайка","болт","отвертка","плоскогубцы","ключ","пила","дрель","шуруповерт","рубанок","стамеска","напильник","наждачка","уровень","рулетка","циркуль","строительство","фундамент","стены","крыша","окна","двери","лестница","балкон","терраса","веранда","кирпич","цемент","песок","щебень","арматура","бетон","раствор","штукатурка","краска","обои","электричество","проводка","розетка","выключатель","лампочка","светильник","люстра","торшер","настольная лампа","бра","водопровод","канализация","трубы","кран","смеситель","раковина","ванна","душ","унитаз","биде","отопление","батарея","радиатор","котел","трубы","термостат","камин","печь","дымоход","дрова","мебель","изготовление","дизайн","материал","дерево","металл","пластик","стекло","кожа","ткань","портной","швея","ателье","выкройка","ткань","нитки","иголка","булавка","ножницы","машинка","вышивка","вязание","спицы","крючок","пряжа","узор","петля","ряд","свитер","шарф","ювелир","золото","серебро","платина","драгоценный камень","алмаз","рубин","изумруд","сапфир","жемчуг","часовщик","механизм","циферблат","стрелки","пружина","маятник","будильник","секундомер","хронометр","таймер"],lm=[...WA,...c2,...ZA];console.log("RU",lm.length,[...new Set(lm)].length);const t_=Fe(),fg=At([]);fg.map(e=>e.filter(t=>t.lang==="RU"));fg.on(t_,(e,t)=>t);ye.subscribeQuery({words:{}},e=>{e.error&&console.error(e.error),e.data&&t_(e.data.words||[])});function KA(e,t){return ye.transact(ye.tx.words[mt()].create({word:e.trim(),lang:t.toUpperCase(),category:""}))}function JA(e,t){return ye.transact(e.slice(0,100).map(r=>ye.tx.words[mt()].create({word:r.trim(),lang:"RU",category:"",hidden:!1})))}function e6(e){return ye.transact(ye.tx.words[e].update({hidden:!0}))}function t6(e){return ye.transact(ye.tx.words[e].update({hidden:!1}))}const n6="_container_alhqe_1",r6="_langSelector_alhqe_9",a6="_langButton_alhqe_15",i6="_langButtonActive_alhqe_22",o6="_langButtonInactive_alhqe_27",s6="_checkboxLabel_alhqe_32",l6="_addWordForm_alhqe_39",c6="_letterSelector_alhqe_46",u6="_letterButton_alhqe_52",d6="_letterButtonActive_alhqe_60",f6="_letterButtonInactive_alhqe_65",h6="_wordsList_alhqe_70",p6="_wordItem_alhqe_74",m6="_wordItemHidden_alhqe_78",g6="_wordToggleButton_alhqe_84",v6="_wordToggleButtonShow_alhqe_93",y6="_wordToggleButtonHide_alhqe_97",yt={container:n6,langSelector:r6,langButton:a6,langButtonActive:i6,langButtonInactive:o6,checkboxLabel:s6,addWordForm:l6,letterSelector:c6,letterButton:u6,letterButtonActive:d6,letterButtonInactive:f6,wordsList:h6,wordItem:p6,wordItemHidden:m6,wordToggleButton:g6,wordToggleButtonShow:v6,wordToggleButtonHide:y6},b6="АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".split(""),w6="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");function x6(){const e=nt(fg),[t,r]=ce.useState("RU"),[i,s]=ce.useState("А"),[l,u]=ce.useState(""),[d,h]=ce.useState(!0),p=t==="RU"?b6:w6,y=e.filter(M=>{const _=M.lang===t,C=M.word[0].toUpperCase().startsWith(i),O=d?!0:!M.hidden;return _&&C&&O}),g=async(M,_)=>{try{_?await t6(M):await e6(M)}catch(C){console.error("Failed to toggle word visibility:",C)}},b=M=>{r(M),s(M==="RU"?"А":"A")},w=M=>{M.preventDefault(),KA(l,t).then(()=>{u("")}).catch(_=>{console.error(_),String(_.message).includes("is a unique attribute on")&&alert(`Слово "${l}" уже добавлено`)})},S=new Set(e.filter(M=>M.lang==="RU").map(M=>M.word)),T=[...new Set(lm)].filter(M=>!S.has(M)).slice(0,100);return z.jsx($r,{children:z.jsxs("div",{className:yt.container,children:[T.length>0&&z.jsx("div",{children:z.jsxs("button",{onClick:()=>{JA(T).then(()=>{console.log(`Добавлено ${T.length} новых слов`)}).catch(M=>{console.error(M)})},children:["ADD ",z.jsx("b",{children:"RU"})," ",T.length]})}),z.jsx(_6,{selectedLang:t,onLangChange:b,totalWords:e.length}),z.jsxs("label",{className:yt.checkboxLabel,children:[z.jsx("input",{type:"checkbox",checked:d,onChange:M=>h(M.target.checked)}),"Показать скрытые слова"]}),z.jsx(S6,{selectedLang:t,newWord:l,onWordChange:u,onSubmit:w}),z.jsx(T6,{letters:p,selectedLetter:i,onLetterChange:s}),z.jsx(k6,{filteredWords:y,selectedLetter:i,onWordClick:g})]})})}function _6({selectedLang:e,onLangChange:t,totalWords:r}){return z.jsxs("div",{className:yt.langSelector,children:[z.jsx("button",{onClick:()=>t("RU"),className:`${yt.langButton} ${e==="RU"?yt.langButtonActive:yt.langButtonInactive}`,children:"RU"}),z.jsx("button",{onClick:()=>t("EN"),className:`${yt.langButton} ${e==="EN"?yt.langButtonActive:yt.langButtonInactive}`,children:"EN"}),z.jsx("p",{children:r})]})}function S6({selectedLang:e,newWord:t,onWordChange:r,onSubmit:i}){return z.jsxs("form",{onSubmit:i,className:yt.addWordForm,children:[z.jsx("input",{type:"text",placeholder:"Слово",value:t,onChange:s=>r(s.target.value)}),z.jsxs("button",{type:"submit",disabled:!t.trim(),children:["Добавить ",e]})]})}function T6({letters:e,selectedLetter:t,onLetterChange:r}){return z.jsx("div",{className:yt.letterSelector,children:e.map(i=>z.jsx("button",{onClick:()=>r(i),className:`${yt.letterButton} ${t===i?yt.letterButtonActive:yt.letterButtonInactive}`,children:i},i))})}function k6({filteredWords:e,selectedLetter:t,onWordClick:r}){return z.jsxs("div",{children:[z.jsxs("h3",{children:["Слова на букву ",t," (",e.length,"):"]}),e.length===0?z.jsx("p",{children:"Нет слов"}):z.jsx("ol",{className:yt.wordsList,children:e.toSorted((i,s)=>i.word.localeCompare(s.word)).map(i=>{const s=i.hidden||!1;return z.jsxs("li",{className:`${yt.wordItem} ${s?yt.wordItemHidden:""}`,children:[i.word,z.jsx("button",{onClick:()=>r(i.id,s),className:`${yt.wordToggleButton} ${s?yt.wordToggleButtonShow:yt.wordToggleButtonHide}`,title:s?"Восстановить слово":"Скрыть слово",children:s?"↻":"✕"})]},i.id)})})]})}const eu=window.devicePixelRatio||1;function E6(e,t=Wn){const r=e.getContext("2d");return e.width=t*eu,e.height=t*eu,r.scale(eu,eu),r}function C6(e,t,r){const i=r/Wn;e.scale(i,i),P2(t).forEach(l=>{if(l.dots.length===1)e.fillStyle=l.color,e.beginPath(),e.arc(l.dots[0][0],l.dots[0][1],l.width/2,0,2*Math.PI),e.fill();else{e.strokeStyle=l.color,e.lineWidth=l.width,e.lineCap="round",e.lineJoin="round",e.beginPath(),e.moveTo(l.dots[0][0],l.dots[0][1]);for(let u=1;u<l.dots.length;u++)e.lineTo(l.dots[u][0],l.dots[u][1]);e.stroke()}})}function M6({canvas:e,size:t=200,className:r}){const i=ce.useRef(null);ce.useEffect(()=>{if(!i.current)return;const u=E6(i.current,t);u.clearRect(0,0,t,t),C6(u,e,t)},[e,t]);const s={width:`${t}px`,height:`${t}px`,position:"relative",background:"#f6eee2",borderRadius:"4px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.1)"},l={position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"4px"};return z.jsx("div",{style:s,className:r,children:z.jsx("canvas",{ref:i,style:l})})}async function N6(){return(await ye.queryOnce({paintings:{}})).data.paintings}function O6(e){return ye.transact([ye.tx.paintings[e].delete()])}const A6="_container_1xxrm_1",R6="_header_1xxrm_9",z6="_deleteButton_1xxrm_15",D6="_deleteButtonDisabled_1xxrm_25",j6="_paintingsGrid_1xxrm_31",U6="_paintingCard_1xxrm_37",L6="_paintingLabel_1xxrm_45",$6="_paintingCheckbox_1xxrm_51",H6="_paintingTitle_1xxrm_55",I6="_paintingInfo_1xxrm_61",q6="_paintingMeta_1xxrm_67",pn={container:A6,header:R6,deleteButton:z6,deleteButtonDisabled:D6,paintingsGrid:j6,paintingCard:U6,paintingLabel:L6,paintingCheckbox:$6,paintingTitle:H6,paintingInfo:I6,paintingMeta:q6};function B6(){const[e,t]=ce.useState([]),[r,i]=ce.useState([]),[s,l]=ce.useState(!0),[u,d]=ce.useState(new Set),[h,p]=ce.useState(!1),y=Object.fromEntries(r.map(S=>[S.id,S]));ce.useEffect(()=>{N6().then(t).then(()=>DA().then(i)).catch(console.error).finally(()=>l(!1))},[]);const g=(S,T)=>{const M=new Set(u);T?M.add(S):M.delete(S),d(M)},b=async()=>{if(u.size!==0){p(!0);try{await Promise.all(Array.from(u).map(S=>O6(S))),t(S=>S.filter(T=>!u.has(T.id))),d(new Set)}catch(S){console.error("Failed to delete paintings:",S),alert("Ошибка при удалении картин")}finally{p(!1)}}};if(s)return z.jsx($r,{children:z.jsx("div",{className:pn.container,children:z.jsx("p",{children:"Загрузка..."})})});const w=h||u.size===0;return z.jsx($r,{children:z.jsxs("div",{className:pn.container,children:[z.jsxs("div",{className:pn.header,children:[z.jsxs("h3",{children:["Картины (",e.length,"):"]}),z.jsx("button",{onClick:b,disabled:w,className:`${pn.deleteButton} ${w?pn.deleteButtonDisabled:""}`,children:h?"Удаление...":`Удалить ${u.size}`})]}),e.length===0?z.jsx("p",{children:"Нет картин"}):z.jsx("div",{className:pn.paintingsGrid,children:e.map(S=>z.jsx(Y6,{painting:S,author:y[S.playerId],selected:u.has(S.id),onSelectionChange:T=>g(S.id,T)},S.id))})]})})}function Y6({painting:e,author:t,selected:r,onSelectionChange:i}){const s=P2(e.canvas),l=e.canvas.length,u=s.length,d=s.map(h=>h.dots.length).reduce((h,p)=>h+p,0);return z.jsxs("div",{className:pn.paintingCard,onClick:()=>{const h=JSON.stringify(s.map(p=>(p.dots=p.dots.map(([y,g])=>[+y.toFixed(1),+g.toFixed(1)]),p)));console.log(h),console.log(h.length)},children:[z.jsxs("label",{className:pn.paintingLabel,children:[z.jsx("input",{type:"checkbox",checked:r,onChange:h=>i(h.target.checked),className:pn.paintingCheckbox}),z.jsx("h4",{className:pn.paintingTitle,children:e.word})]}),z.jsx(M6,{canvas:e.canvas,size:200}),z.jsxs("div",{className:pn.paintingInfo,children:[z.jsxs("p",{className:pn.paintingMeta,children:["Автор: ",t.name]}),z.jsxs("p",{className:pn.paintingMeta,children:["Линий ",u,l!==u?`(${l})`:"",", точек"," ",d]})]})]})}const cm={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e*e:-1+(4-2*e)*e,easeInCubic:e=>e*e*e,easeOutCubic:e=>--e*e*e+1,easeInOutCubic:e=>e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1,easeInQuart:e=>e*e*e*e,easeOutQuart:e=>1- --e*e*e*e,easeInOutQuart:e=>e<.5?8*e*e*e*e:1-8*--e*e*e*e,easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>1+--e*e*e*e*e,easeInOutQuint:e=>e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e,easeInSine:e=>1-Math.cos(e*Math.PI/2),easeOutSine:e=>Math.sin(e*Math.PI/2),easeInOutSine:e=>-(Math.cos(Math.PI*e)-1)/2,easeInExpo:e=>e<=0?0:Math.pow(2,10*e-10),easeOutExpo:e=>e>=1?1:1-Math.pow(2,-10*e),easeInOutExpo:e=>e<=0?0:e>=1?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2};class V{constructor(t=0,r=0,i=1){this.x=t,this.y=r,this.z=i}get pressure(){return this.z}set(t=this.x,r=this.y,i=this.z){return this.x=t,this.y=r,this.z=i,this}setTo({x:t=0,y:r=0,z:i=1}){return this.x=t,this.y=r,this.z=i,this}rot(t){if(t===0)return this;const{x:r,y:i}=this,s=Math.sin(t),l=Math.cos(t);return this.x=r*l-i*s,this.y=r*s+i*l,this}rotWith(t,r){if(r===0)return this;const i=this.x-t.x,s=this.y-t.y,l=Math.sin(r),u=Math.cos(r);return this.x=t.x+(i*u-s*l),this.y=t.y+(i*l+s*u),this}clone(){const{x:t,y:r,z:i}=this;return new V(t,r,i)}sub(t){return this.x-=t.x,this.y-=t.y,this}subXY(t,r){return this.x-=t,this.y-=r,this}subScalar(t){return this.x-=t,this.y-=t,this}add(t){return this.x+=t.x,this.y+=t.y,this}addXY(t,r){return this.x+=t,this.y+=r,this}addScalar(t){return this.x+=t,this.y+=t,this}clamp(t,r){return this.x=Math.max(this.x,t),this.y=Math.max(this.y,t),r!==void 0&&(this.x=Math.min(this.x,r),this.y=Math.min(this.y,r)),this}div(t){return this.x/=t,this.y/=t,this}divV(t){return this.x/=t.x,this.y/=t.y,this}mul(t){return this.x*=t,this.y*=t,this}mulV(t){return this.x*=t.x,this.y*=t.y,this}abs(){return this.x=Math.abs(this.x),this.y=Math.abs(this.y),this}nudge(t,r){const i=V.Tan(t,this);return this.add(i.mul(r))}neg(){return this.x*=-1,this.y*=-1,this}cross(t){return this.x=this.y*t.z-this.z*t.y,this.y=this.z*t.x-this.x*t.z,this}dpr(t){return V.Dpr(this,t)}cpr(t){return V.Cpr(this,t)}len2(){return V.Len2(this)}len(){return V.Len(this)}pry(t){return V.Pry(this,t)}per(){const{x:t,y:r}=this;return this.x=r,this.y=-t,this}uni(){const t=this.len();return t===0?this:(this.x/=t,this.y/=t,this)}tan(t){return this.sub(t).uni()}dist(t){return V.Dist(this,t)}distanceToLineSegment(t,r){return V.DistanceToLineSegment(t,r,this)}slope(t){return V.Slope(this,t)}snapToGrid(t){return this.x=Math.round(this.x/t)*t,this.y=Math.round(this.y/t)*t,this}angle(t){return V.Angle(this,t)}toAngle(){return V.ToAngle(this)}lrp(t,r){return this.x=this.x+(t.x-this.x)*r,this.y=this.y+(t.y-this.y)*r,this}equals(t){return V.Equals(this,t)}equalsXY(t,r){return V.EqualsXY(this,t,r)}norm(){return this.uni()}toFixed(){return this.x=lo(this.x),this.y=lo(this.y),this}toString(){return V.ToString(V.ToFixed(this))}toJson(){return V.ToJson(this)}toArray(){return V.ToArray(this)}static Add(t,r){return new V(t.x+r.x,t.y+r.y)}static AddXY(t,r,i){return new V(t.x+r,t.y+i)}static Sub(t,r){return new V(t.x-r.x,t.y-r.y)}static SubXY(t,r,i){return new V(t.x-r,t.y-i)}static AddScalar(t,r){return new V(t.x+r,t.y+r)}static SubScalar(t,r){return new V(t.x-r,t.y-r)}static Div(t,r){return new V(t.x/r,t.y/r)}static Mul(t,r){return new V(t.x*r,t.y*r)}static DivV(t,r){return new V(t.x/r.x,t.y/r.y)}static MulV(t,r){return new V(t.x*r.x,t.y*r.y)}static Neg(t){return new V(-t.x,-t.y)}static Per(t){return new V(t.y,-t.x)}static Abs(t){return new V(Math.abs(t.x),Math.abs(t.y))}static Dist(t,r){return((t.y-r.y)**2+(t.x-r.x)**2)**.5}static ManhattanDist(t,r){return Math.abs(t.x-r.x)+Math.abs(t.y-r.y)}static DistMin(t,r,i){return(t.x-r.x)*(t.x-r.x)+(t.y-r.y)*(t.y-r.y)<i**2}static Dist2(t,r){return(t.x-r.x)*(t.x-r.x)+(t.y-r.y)*(t.y-r.y)}static Dpr(t,r){return t.x*r.x+t.y*r.y}static Cross(t,r){return new V(t.y*r.z-t.z*r.y,t.z*r.x-t.x*r.z)}static Cpr(t,r){return t.x*r.y-r.x*t.y}static Len2(t){return t.x*t.x+t.y*t.y}static Len(t){return(t.x*t.x+t.y*t.y)**.5}static Pry(t,r){return V.Dpr(t,r)/V.Len(r)}static Uni(t){const r=V.Len(t);return new V(r===0?0:t.x/r,r===0?0:t.y/r)}static Tan(t,r){return V.Uni(V.Sub(t,r))}static Min(t,r){return new V(Math.min(t.x,r.x),Math.min(t.y,r.y))}static Max(t,r){return new V(Math.max(t.x,r.x),Math.max(t.y,r.y))}static From({x:t,y:r,z:i=1}){return new V(t,r,i)}static FromArray(t){return new V(t[0],t[1])}static Rot(t,r=0){const i=Math.sin(r),s=Math.cos(r);return new V(t.x*s-t.y*i,t.x*i+t.y*s)}static RotWith(t,r,i){const s=t.x-r.x,l=t.y-r.y,u=Math.sin(i),d=Math.cos(i);return new V(r.x+(s*d-l*u),r.y+(s*u+l*d))}static NearestPointOnLineThroughPoint(t,r,i){return V.Mul(r,V.Sub(i,t).pry(r)).add(t)}static NearestPointOnLineSegment(t,r,i,s=!0){if(V.Equals(t,i)||V.Equals(r,i))return V.From(i);const l=V.Tan(r,t),u=V.Add(t,V.Mul(l,V.Sub(i,t).pry(l)));if(s){if(u.x<Math.min(t.x,r.x))return V.Cast(t.x<r.x?t:r);if(u.x>Math.max(t.x,r.x))return V.Cast(t.x>r.x?t:r);if(u.y<Math.min(t.y,r.y))return V.Cast(t.y<r.y?t:r);if(u.y>Math.max(t.y,r.y))return V.Cast(t.y>r.y?t:r)}return u}static DistanceToLineThroughPoint(t,r,i){return V.Dist(i,V.NearestPointOnLineThroughPoint(t,r,i))}static DistanceToLineSegment(t,r,i,s=!0){return V.Dist(i,V.NearestPointOnLineSegment(t,r,i,s))}static Snap(t,r=1){return new V(Math.round(t.x/r)*r,Math.round(t.y/r)*r)}static Cast(t){return t instanceof V?t:V.From(t)}static Slope(t,r){return t.x===r.y?NaN:(t.y-r.y)/(t.x-r.x)}static IsNaN(t){return isNaN(t.x)||isNaN(t.y)}static Angle(t,r){return Math.atan2(r.y-t.y,r.x-t.x)}static AngleBetween(t,r){const i=t.x*r.x+t.y*r.y,s=Math.sqrt((Math.pow(t.x,2)+Math.pow(t.y,2))*(Math.pow(r.x,2)+Math.pow(r.y,2)));return(t.x*r.y-t.y*r.x<0?-1:1)*Math.acos(iM(i/s,-1,1))}static Lrp(t,r,i){return V.Sub(r,t).mul(i).add(t)}static Med(t,r){return new V((t.x+r.x)/2,(t.y+r.y)/2)}static Equals(t,r){return Math.abs(t.x-r.x)<1e-4&&Math.abs(t.y-r.y)<1e-4}static EqualsXY(t,r,i){return t.x===r&&t.y===i}static Clockwise(t,r,i){return(i.x-t.x)*(r.y-t.y)-(r.x-t.x)*(i.y-t.y)<0}static Rescale(t,r){const i=V.Len(t);return new V(r*t.x/i,r*t.y/i)}static ScaleWithOrigin(t,r,i){return V.Sub(t,i).mul(r).add(i)}static ToFixed(t){return new V(lo(t.x),lo(t.y))}static ToInt(t){return new V(parseInt(t.x.toFixed(0)),parseInt(t.y.toFixed(0)),parseInt((t.z??0).toFixed(0)))}static ToCss(t){return`${t.x},${t.y}`}static Nudge(t,r,i){return V.Add(t,V.Tan(r,t).mul(i))}static ToString(t){return`${t.x}, ${t.y}`}static ToAngle(t){let r=Math.atan2(t.y,t.x);return r<0&&(r+=Math.PI*2),r}static FromAngle(t,r=1){return new V(Math.cos(t)*r,Math.sin(t)*r)}static ToArray(t){return[t.x,t.y,t.z]}static ToJson(t){const{x:r,y:i,z:s}=t;return{x:r,y:i,z:s}}static Average(t){const r=t.length,i=new V(0,0);if(r===0)return i;for(let s=0;s<r;s++)i.add(t[s]);return i.div(r)}static Clamp(t,r,i){return i===void 0?new V(Math.min(Math.max(t.x,r)),Math.min(Math.max(t.y,r))):new V(Math.min(Math.max(t.x,r),i),Math.min(Math.max(t.y,r),i))}static PointsBetween(t,r,i=6){const s=[];for(let l=0;l<i;l++){const u=cm.easeInQuad(l/(i-1)),d=V.Lrp(t,r,u);d.z=Math.min(1,.5+Math.abs(.5-P6(u))*.65),s.push(d)}return s}static SnapToGrid(t,r=8){return new V(Math.round(t.x/r)*r,Math.round(t.y/r)*r)}}const P6=e=>e<.5?2*e*e:-1+(4-2*e)*e,{PI:X6}=Math,sp=X6+1e-4;function F6(e,t={}){const{size:r=16,smoothing:i=.5}=t;if(e.length===0||r<=0)return{left:[],right:[]};const s=e[0],l=e[e.length-1],u=l.runningLength,d=Math.pow(r*i,2),h=[],p=[];let y=e[0].vector,g=e[0].point,b=g,w=g,S=b,T=!1,M;for(let _=0;_<e.length;_++){M=e[_];const{point:C,vector:O}=e[_],U=M.vector.dpr(y),D=(_<e.length-1?e[_+1]:e[_]).vector,X=_<e.length-1?D.dpr(M.vector):1,F=U<0&&!T,ee=X!==null&&X<.2;if(F||ee){if(X>-.62&&u-M.runningLength>M.radius){const pe=y.clone().mul(M.radius);y.clone().cpr(D)<0?(w=V.Add(C,pe),S=V.Sub(C,pe)):(w=V.Sub(C,pe),S=V.Add(C,pe)),h.push(w),p.push(S)}else{const pe=y.clone().mul(M.radius).per(),ue=V.Sub(M.input,pe);for(let ie=1/13,ze=0;ze<1;ze+=ie)w=V.RotWith(ue,M.input,sp*ze),h.push(w),S=V.RotWith(ue,M.input,sp+sp*-ze),p.push(S)}g=w,b=S,ee&&(T=!0);continue}if(T=!1,M===s||M===l){const pe=V.Per(O).mul(M.radius);h.push(V.Sub(C,pe)),p.push(V.Add(C,pe));continue}const ne=V.Lrp(D,O,X).per().mul(M.radius);w=V.Sub(C,ne),(_<=1||V.Dist2(g,w)>d)&&(h.push(w),g=w),S=V.Add(C,ne),(_<=1||V.Dist2(b,S)>d)&&(p.push(S),b=S),y=O}return{left:h,right:p}}const G6=.025,V6=.01;function Q6(e,t={}){var M;const{streamline:r=.5,size:i=16,simulatePressure:s=!1}=t;if(e.length===0)return[];const l=.15+(1-r)*.85;let u=e.map(V.From),d=0;if(!s){let _=u[0];for(;_&&!(_.z>=G6);)u.shift(),_=u[0]}if(!s){let _=u[u.length-1];for(;_&&!(_.z>=V6);)u.pop(),_=u[u.length-1]}if(u.length===0)return[{point:V.From(e[0]),input:V.From(e[0]),pressure:s?.5:.15,vector:new V(1,1),distance:0,runningLength:0,radius:1}];let h=u[1];for(;h&&!(V.Dist2(h,u[0])>(i/3)**2);)u[0].z=Math.max(u[0].z,h.z),u.splice(1,1),h=u[1];const p=u.pop();for(h=u[u.length-1];h&&!(V.Dist2(h,p)>(i/3)**2);)u.pop(),h=u[u.length-1],d++;u.push(p);const y=t.last||!t.simulatePressure||u.length>1&&V.Dist2(u[u.length-1],u[u.length-2])<i**2||d>0;if(u.length===2&&t.simulatePressure){const _=u[1];u=u.slice(0,-1);for(let C=1;C<5;C++){const O=V.Lrp(u[0],_,C/4);O.z=(u[0].z+(_.z-u[0].z))*C/4,u.push(O)}}const g=[{point:u[0],input:u[0],pressure:s?.5:u[0].z,vector:new V(1,1),distance:0,runningLength:0,radius:1}];let b=0,w=g[0],S,T;y&&r>0&&u.push(u[u.length-1].clone());for(let _=1,C=u.length;_<C;_++)S=!l||t.last&&_===C-1?u[_].clone():u[_].clone().lrp(w.point,1-l),!w.point.equals(S)&&(T=V.Dist(S,w.point),b+=T,!(_<4&&b<i)&&(w={input:u[_],point:S,pressure:s?.5:u[_].z,vector:V.Sub(w.point,S).uni(),distance:T,runningLength:b,radius:1},g.push(w)));if((M=g[1])!=null&&M.vector&&(g[0].vector=g[1].vector.clone()),b<1){const _=Math.max(.5,...g.map(C=>C.pressure));g.forEach(C=>C.pressure=_)}return g}const{min:ga}=Math,lp=.275;function W6(e,t){const{size:r=16,thinning:i=.5,simulatePressure:s=!0,easing:l=M=>M,start:u={},end:d={}}=t,{easing:h=cm.easeOutQuad}=u,{easing:p=cm.easeOutCubic}=d,y=e[e.length-1].runningLength;let g,b=e[0].pressure,w;if(!s&&y<r){const M=e.reduce((_,C)=>Math.max(_,C.pressure),.5);return e.forEach(_=>{_.pressure=M,_.radius=r*l(.5-i*(.5-_.pressure))}),e}else{let M;for(let _=0,C=e.length;_<C&&(w=e[_],!(w.runningLength>r*5));_++){const O=ga(1,w.distance/r);if(s){const U=ga(1,1-O);M=ga(1,b+(U-b)*(O*lp))}else M=ga(1,b+(w.pressure-b)*.5);b=b+(M-b)*.5}for(let _=0;_<e.length;_++){if(w=e[_],i){let{pressure:C}=w;const O=ga(1,w.distance/r);if(s){const U=ga(1,1-O);C=ga(1,b+(U-b)*(O*lp))}else C=ga(1,b+(C-b)*(O*lp));w.radius=r*l(.5-i*(.5-C)),b=C}else w.radius=r/2;g===void 0&&(g=w.radius)}}const S=u.taper===!1?0:u.taper===!0?Math.max(r,y):u.taper,T=d.taper===!1?0:d.taper===!0?Math.max(r,y):d.taper;if(S||T)for(let M=0;M<e.length;M++){w=e[M];const{runningLength:_}=w,C=_<S?h(_/S):1,O=y-_<T?p((y-_)/T):1;w.radius=Math.max(.01,w.radius*Math.min(C,O))}return e}function Z6(e,t={}){const{start:r={},end:i={}}=t,{cap:s=!0}=r,{cap:l=!0}=i;Jh(!r.taper&&!i.taper,"cap taper not supported here"),Jh(!r.easing&&!i.easing,"cap easing not supported here"),Jh(s&&l,"cap must be true");const u=Q6(e,t);W6(u,t);const d=K6(u);let h="";for(const p of d)h+=eR(p,t);return h}function K6(e){if(e.length<=2)return[e];const t=[];let r=[e[0]],i=V.Sub(e[1].point,e[0].point).uni(),s,l,u,d,h;for(let p=1,y=e.length;p<y-1;p++){if(u=e[p-1],d=e[p],h=e[p+1],s=V.Sub(h.point,d.point).uni(),l=V.Dpr(i,s),i=s,l<-.8){const g={...d,point:d.input};r.push(g),t.push(cp(r)),r=[g];continue}if(r.push(d),!(l>.7)&&(V.Dist2(u.point,d.point)+V.Dist2(d.point,h.point))/((u.radius+d.radius+h.radius)/3)**2<1.5){r.push(d),t.push(cp(r)),r=[d];continue}}return r.push(e[e.length-1]),t.push(cp(r)),t}function cp(e){const t=e[0];let r;for(;e.length>2&&(r=e[1],V.Dist2(t.point,r.point)<((t.radius+r.radius)/2*.5)**2);)e.splice(1,1);const i=e[e.length-1];let s;for(;e.length>2&&(s=e[e.length-2],V.Dist2(i.point,s.point)<((i.radius+s.radius)/2*.5)**2);)e.splice(e.length-2,1);return e.length>1&&(e[0]={...e[0],vector:V.Sub(e[0].point,e[1].point).uni()},e[e.length-1]={...e[e.length-1],vector:V.Sub(e[e.length-2].point,e[e.length-1].point).uni()}),e}function J6(e,t,r){return"M "+e+" "+t+" m -"+r+", 0 a "+r+","+r+" 0 1,1 "+r*2+",0 a "+r+","+r+" 0 1,1 -"+r*2+",0"}function eR(e,t={}){if(e.length===0)return"";if(e.length===1)return J6(e[0].point.x,e[0].point.y,e[0].radius);const{left:r,right:i}=F6(e,t);i.reverse();let s=`M${Os(r[0])}T`;for(let l=1;l<r.length;l++)s+=qw(r[l-1],r[l]);{const l=e[e.length-1],u=l.radius,d=l.vector.clone().per().neg(),h=V.Add(l.point,V.Mul(d,u)),p=V.Add(l.point,V.Mul(d,-u));s+=`${Os(h)}A${ba(u)},${ba(u)} 0 0 1 ${Os(p)}T`}for(let l=1;l<i.length;l++)s+=qw(i[l-1],i[l]);{const l=e[0],u=l.radius,d=l.vector.clone().per(),h=V.Add(l.point,V.Mul(d,u)),p=V.Add(l.point,V.Mul(d,-u));s+=`${Os(h)}A${ba(u)},${ba(u)} 0 0 1 ${Os(p)}Z`}return s}function tR(e,t,r){const i=Fe(),s=Eo(i,LA),l=At({color:J2[1],width:$s[1]}),u=At([]),d=Fe(),h=Fe(),p=Fe(),y=Fe(),g=At([]),b=g.map(_=>_.length),w=Fe(),S=Fe();g.on(p,_=>{const C=Date.now(),O=C-1e3,U=_.filter(D=>D>O);return U.push(C),U}),l.on(d,(_,C)=>({..._,...C})),u.on(S,(_,C)=>C).on(p,(_,C)=>{const O=[..._],U=O.at(-1);return U.dots=[...U.dots,C],O}).on(y,(_,C)=>{const O=[..._];return O.pop(),O}),ml({source:[u,l],clock:h,fn:([_,{color:C,width:O}],U)=>[..._,{dots:[U],color:C,width:O}],target:u});const T=ri(u,r,s,(_,C,O)=>{const U=[];return _.forEach(D=>{const X=Z6(D.dots.map(F=>new V(F[0],F[1])),{size:D.width});U.push({d:X,color:D.color})}),U}),M=ri(u,_=>{const C=[];return _.forEach((O,U)=>{const X=O.dots.map(([F,ee])=>`${F},${ee}`).join(" ");C.push({points:X,color:O.color,strokeWidth:O.width})}),C});return w.watch(_=>{console.warn("todo addLine")}),{$currentDrawing:u,$currentLineParams:l,lineParamsChanged:d,addLine:w,undoClicked:y,lineStarted:h,lineExtended:p,somebodyDrawing:S,$svgCanvasPaths:T,$polylinePaths:M,$lineExtendedCount:b}}const n_=At("tldraw"),hg=Fe(),wn=At(Y2());wn.on(hg,(e,t)=>t);const r_=At([]);r_.on(hg,(e,t)=>t.roomEvents);const a_=Fe(),i_=Fe(),Hs=Fe(),o_=At([]);o_.on(Hs,(e,t)=>[...e,t]);const nR=o_.map(e=>{if(e.length===0)return[];const t=[];let r=null,i=0;for(const s of e)typeof s=="string"&&s===r?i++:(r!==null&&t.push(i>1?`${r} ${i}`:r),r=s,i=1);return r!==null&&t.push(i>1?`${r} ${i}`:r),t}),pg=ri(fr,wn,(e,t)=>{if(t.status===Yt.inProgress&&t.gameState.innerState.state==="drawing"){const r=t.gameState.innerState;return{drawing:!0,iam:e===r.playerId,who:r.playerId,word:r.word}}return{drawing:!1}}),rR=wn.map(e=>e.id),um=pg.map(e=>e.drawing&&e.iam),{lineParamsChanged:g1,$currentLineParams:aR,lineStarted:iR,somebodyDrawing:oR,lineExtended:sR,undoClicked:lR,$svgCanvasPaths:s_,$currentDrawing:mg,$polylinePaths:cR}=tR(rR,um,n_),uR=ri(fr,wn,(e,t)=>t.status!==Yt.inProgress?{choose:!1}:t.gameState.innerState.state==="choosing-word"?e===t.gameState.innerState.playerId?{choose:!0,iam:!0,who:t.gameState.innerState.playerId,words:t.gameState.innerState.words}:{choose:!0,iam:!1,who:t.gameState.innerState.playerId,words:[]}:{choose:!1});Qm(wn,e=>{if(!e.id)return()=>[];Hs(`join.. ${e.id}`);const t=ye.joinRoom("party",e.id);Hs("joined");const r=mg.watch(s=>{um.getState()&&(Hs("publishTopic"),console.log("publishTopic"),t.publishTopic("currentCanvas",{currentDrawing:s}))}),i=t.subscribeTopic("currentCanvas",s=>{Hs("currentCanvas"),um.getState()||(console.log("somebodyDrawing",s.currentDrawing),oR(s.currentDrawing))});return()=>{r(),i(),t.leaveRoom()}});Qm(fr,e=>e?ye.subscribeQuery({party:{$:{where:{or:[{and:[{status:Yt.prepare},{"players.id":e}]},{and:[{status:Yt.inProgress},{"players.id":e}]}]}},players:{},roomEvents:{}}},t=>{var r;if(t.data){const i=(r=t.data.party)==null?void 0:r[0];if(i){hg(i);return}}console.warn("Something went wrong"),console.log(t)}):()=>{});ml({source:[fr,wn],clock:i_,fn:(e,t)=>[e,t]}).watch(([[e,t],r])=>{const i={type:"new-selected-word",payload:{playerId:e,word:r}};ye.transact([ye.tx.roomEvent[mt()].create(i).link({party:t.id}),ye.tx.party[t.id].update({gameState:{...t.gameState,innerState:{state:"drawing",playerId:e,word:r}}})])});ml({source:[fr,wn],clock:a_,fn:(e,t)=>[e,t]}).watch(([[e,t],{guess:r}])=>{const i={type:"user-message",payload:{text:r,playerId:e,isRevealed:"none"}};ye.transact(ye.tx.roomEvent[mt()].create(i).link({party:t.id}))});const dR="root_r1e037uf";function up({label:e,value:t,onChange:r,options:i,disabled:s}){return z.jsxs("div",{className:dR,children:[e&&z.jsx("label",{children:e}),z.jsx("select",{value:String(t),onChange:l=>{const u=i.find(d=>String(d.value)===l.target.value);u&&r(u.value)},disabled:s,children:i.map(l=>z.jsx("option",{value:String(l.value),children:l.label},String(l.value)))})]})}const tu=window.devicePixelRatio||1;function l_(e){const t=e.getContext("2d");return e.width=Wn*tu,e.height=Wn*tu,t.scale(tu,tu),t}function v1(e,t){const r=t.getBoundingClientRect(),i=Wn/r.width,s="touches"in e?(e.touches[0]||e.changedTouches[0]).clientX:e.clientX,l="touches"in e?(e.touches[0]||e.changedTouches[0]).clientY:e.clientY;return{x:lo((s-r.left)*i),y:lo((l-r.top)*i)}}function fR(e,t){t.forEach(r=>{const i=r.points.split(" ").map(s=>{const[l,u]=s.split(",").map(Number);return[l,u]});if(i.length>=2){e.strokeStyle=r.color,e.lineWidth=r.strokeWidth,e.lineCap="round",e.lineJoin="round",e.beginPath(),e.moveTo(i[0][0],i[0][1]);for(let s=1;s<i.length;s++)e.lineTo(i[s][0],i[s][1]);e.stroke()}})}const hR={margin:"0 auto",maxWidth:"500px",maxHeight:"100%",height:"auto",aspectRatio:"1 / 1",position:"relative",background:"#f6eee2",borderRadius:"8px",boxShadow:"0 4px 20px rgba(0, 0, 0, 0.1)"},c_={position:"absolute",top:0,left:0,width:"100%",height:"100%",touchAction:"none",borderRadius:"8px",cursor:"crosshair"};function pR(){const e=ce.useRef(null),t=nt(n_),r=nt(Z2),i=nt(cR),s=nt(s_);return ce.useEffect(()=>{const l=e.current,u=l_(l);u.clearRect(0,0,Wn,Wn),t==="polyline"?fR(u,i):s.forEach(d=>{u.fillStyle=d.color,u.fill(new Path2D(d.d))})},[i,s,t]),z.jsxs("div",{style:hR,children:[z.jsx("canvas",{ref:e,style:c_}),z.jsx(mR,{}),r&&z.jsx(gR,{})]})}const mR=ce.memo(()=>{const e=ce.useRef(null),[t,r]=ce.useState(!1),s=nt(pg).iam||!1,l=nt(s_).at(-1);ce.useEffect(()=>{const p=e.current,y=l_(p);y.clearRect(0,0,Wn,Wn),l&&(y.fillStyle=l.color,y.fill(new Path2D(l.d)))},[l]);const u=ce.useCallback(p=>{if(!s)return;p.preventDefault();const{x:y,y:g}=v1(p,e.current);iR([y,g]),r(!0)},[s]),d=ce.useCallback(p=>{if(!s||!t)return;p.preventDefault();const{x:y,y:g}=v1(p,e.current);sR([y,g])},[s,t]),h=ce.useCallback(p=>{!s||!t||(p.preventDefault(),r(!1))},[s,t]);return z.jsx("canvas",{ref:e,onMouseDown:u,onMouseMove:d,onMouseUp:h,onMouseLeave:h,onTouchStart:u,onTouchMove:d,onTouchEnd:h,onTouchCancel:h,style:c_})}),gR=ce.memo(()=>{const e=nt(mg),t={position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none"};return z.jsx("svg",{style:t,viewBox:`0 0 ${Wn} ${Wn}`,children:e.map((r,i)=>z.jsxs("g",{children:[z.jsx("polyline",{points:r.dots.map(([s,l])=>`${s},${l}`).join(" "),stroke:"white",strokeWidth:2,strokeDasharray:"2,5",fill:"none"}),r.dots.map(([s,l],u)=>z.jsx("circle",{cx:s,cy:l,r:1,fill:`hsl(0, 70%, ${u%5*10+30}%)`},`${i}-${u}`))]},`debug-${i}`))})});function vR(){var u,d,h;const[e,t]=ce.useState(!0),r=nt(fr),i=nt(wn),s=nt(mg),l=nt(nR);return z.jsxs("div",{children:[z.jsxs("button",{onClick:()=>t(!e),children:["Dev ",e?"▼":"▲"]}),!e&&z.jsxs("div",{style:{maxWidth:"90vw",overflow:"scroll"},children:[z.jsx("div",{style:{display:"grid"},children:l.map((p,y)=>z.jsx("p",{children:JSON.stringify(p)},y))}),z.jsxs("p",{children:["dots.len: ",(u=s.at(-1))==null?void 0:u.dots.length]}),z.jsxs("p",{children:["color: ",(d=s.at(-1))==null?void 0:d.color]}),z.jsxs("p",{children:["width: ",(h=s.at(-1))==null?void 0:h.width]}),z.jsx("pre",{children:JSON.stringify(i.gameState,null,2)}),z.jsx("div",{children:z.jsx(ao,{href:"https://joxter.github.io/scribble/",target:"_blank",children:"website"})}),z.jsxs("p",{children:["localId: ",r]}),z.jsxs("div",{children:[z.jsx("button",{onClick:AA,children:"Удалить все сообщения"}),z.jsx("br",{}),z.jsx("br",{}),z.jsx("button",{onClick:zA,children:"перезагрузить всю комнату"})]}),z.jsx("pre",{style:{maxWidth:"300px"},children:JSON.stringify(i,null,2)})]})]})}const y1=4;function yR({value:e,onChange:t}){const r=$s.indexOf(e),i=Math.max(...$s);let s=r*i+y1*r;return z.jsxs("div",{style:{display:"inline-flex",gap:"4px",position:"relative",height:"32px",backgroundColor:"#eee",borderRadius:"16px",cursor:"pointer",padding:"4px",boxShadow:"0 0px 4px rgba(0,0,0,0.1)",overflow:"hidden"},children:[z.jsx("div",{style:{position:"absolute",left:s+"px",display:"flex",top:"0px",width:r===$s.length-1?i+10+"px":i+4+"px",height:"100%",backgroundColor:"#007bff"}}),z.jsx("div",{style:{display:"flex",gap:y1+"px",position:"relative",width:"100%"},children:$s.map(l=>z.jsx("div",{onClick:()=>t(l),style:{display:"flex",width:i+"px",height:i+"px"},children:z.jsx("div",{style:{margin:"auto",width:`${l}px`,height:`${l}px`,backgroundColor:l===e?"#555":"#666",borderRadius:"50%"}})},l))})]})}const bR="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M29%2023C29%2023.2652%2028.8946%2023.5196%2028.7071%2023.7071C28.5196%2023.8946%2028.2652%2024%2028%2024C27.7348%2024%2027.4804%2023.8946%2027.2929%2023.7071C27.1054%2023.5196%2027%2023.2652%2027%2023C26.9997%2020.8246%2026.3545%2018.6981%2025.1457%2016.8894C23.937%2015.0807%2022.2192%2013.671%2020.2093%2012.8386C18.1995%2012.0061%2015.988%2011.7883%2013.8544%2012.2126C11.7208%2012.6369%209.76087%2013.6844%208.2225%2015.2225L5.425%2018H11C11.2652%2018%2011.5196%2018.1053%2011.7071%2018.2929C11.8946%2018.4804%2012%2018.7348%2012%2019C12%2019.2652%2011.8946%2019.5196%2011.7071%2019.7071C11.5196%2019.8946%2011.2652%2020%2011%2020H3C2.73478%2020%202.48043%2019.8946%202.29289%2019.7071C2.10536%2019.5196%202%2019.2652%202%2019V11C2%2010.7348%202.10536%2010.4804%202.29289%2010.2929C2.48043%2010.1053%202.73478%209.99999%203%209.99999C3.26522%209.99999%203.51957%2010.1053%203.70711%2010.2929C3.89464%2010.4804%204%2010.7348%204%2011V16.5962L6.81%2013.805C8.62837%2011.9876%2010.9448%2010.7501%2013.4664%2010.249C15.988%209.74799%2018.6015%2010.0059%2020.9765%2010.99C23.3516%2011.9742%2025.3815%2013.6405%2026.8097%2015.7782C28.2378%2017.9159%2029%2020.4291%2029%2023Z'%20fill='%23343330'/%3e%3c/svg%3e",b1=28,wR=8;function xR({value:e,onChange:t}){return z.jsx("div",{style:{flexWrap:"wrap",display:"flex",gap:wR+"px",justifyContent:"space-between"},children:J2.map((r,i)=>z.jsx("button",{onClick:()=>t(r),style:{width:b1+"px",height:b1+"px",border:r==="#ffffff"?"1px solid #333":"none",borderRadius:"100%",padding:"0",backgroundColor:r,cursor:"pointer",boxShadow:r===e?"0 0 0 2px #fff, 0 0 0 5px rgb(0, 123, 255)":"none"}},r))})}function _R(){const{width:e,color:t}=nt(aR);return z.jsxs("div",{style:{display:"grid",alignContent:"start",padding:"8px",gap:"12px"},children:[z.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between"},children:[z.jsx("button",{onClick:lR,children:z.jsx("img",{style:{width:"20px"},src:bR})}),z.jsx(yR,{value:e,onChange:r=>g1({width:r})})]}),z.jsx("div",{children:z.jsx(xR,{value:t,onChange:r=>g1({color:r})})})]})}const SR="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M28.4138%209.17122L22.8288%203.58497C22.643%203.39921%2022.4225%203.25185%2022.1799%203.15131C21.9372%203.05077%2021.6771%202.99902%2021.4144%202.99902C21.1517%202.99902%2020.8916%203.05077%2020.6489%203.15131C20.4062%203.25185%2020.1857%203.39921%2020%203.58497L4.58626%2019C4.39973%2019.185%204.25185%2019.4053%204.15121%2019.648C4.05057%2019.8907%203.99917%2020.151%204.00001%2020.4137V26C4.00001%2026.5304%204.21072%2027.0391%204.5858%2027.4142C4.96087%2027.7893%205.46958%2028%206.00001%2028H11.5863C11.849%2028.0008%2012.1093%2027.9494%2012.352%2027.8488C12.5947%2027.7481%2012.815%2027.6002%2013%2027.4137L28.4138%2012C28.5995%2011.8142%2028.7469%2011.5937%2028.8474%2011.3511C28.948%2011.1084%2028.9997%2010.8483%2028.9997%2010.5856C28.9997%2010.3229%2028.948%2010.0628%2028.8474%209.82012C28.7469%209.57744%2028.5995%209.35695%2028.4138%209.17122ZM6.41376%2020L17%209.41372L19.0863%2011.5L8.50001%2022.085L6.41376%2020ZM6.00001%2022.4137L9.58626%2026H6.00001V22.4137ZM12%2025.5862L9.91376%2023.5L20.5%2012.9137L22.5863%2015L12%2025.5862ZM24%2013.5862L18.4138%207.99997L21.4138%204.99997L27%2010.585L24%2013.5862Z'%20fill='%23343330'/%3e%3c/svg%3e";function TR(){const e=nt(wn),t=e.gameState.players.map(i=>e.players.find(s=>s.id===i)),r="not implemented, take something from gameState";return z.jsxs("div",{children:[z.jsxs("p",{children:['Комната "',e.name,'"'," ",z.jsx("button",{onClick:()=>{F2(e.id)},children:"close"})]}),z.jsx("br",{}),z.jsx("p",{children:"Игроки:"}),z.jsx("div",{style:{display:"grid",alignContent:"start",gap:"4px"},children:t==null?void 0:t.map(i=>{const s=i.id===r;return z.jsxs("div",{style:{padding:"8px 12px",borderRadius:"4px",backgroundColor:"#fff",color:"#333",border:"1px solid #ddd"},children:[i.name," ",s&&z.jsx("img",{src:SR,style:{width:"18px"}})]},i.id)})})]})}const kR="_page_14hut_2",ER="_header_14hut_31",CR="_canvasSection_14hut_35",MR="_footer_14hut_41",NR="_players_14hut_49",Rs={page:kR,header:ER,canvasSection:CR,footer:MR,players:NR};function OR({revealed:e,clue:t}){const[r,i]=ce.useState(""),s=u=>{u.preventDefault(),a_({guess:r.trim()}),i("")},l=u=>{i(u.target.value)};return t==null||t.split(" ").map(u=>u.length).join(" "),z.jsx("form",{onSubmit:s,children:z.jsxs("div",{style:{display:"grid",gridTemplateColumns:e||!t?"1fr min-content":`calc(${t.length*10}px + ${(t.length-1)*3}px + 10px) min-content`,gap:"0px 8px",fontFamily:"monospace",letterSpacing:"2px"},children:[z.jsx("p",{style:{padding:"0 4px",color:e?"green":"initial",textAlign:e?"center":"initial"},children:e?e+"!":t}),z.jsx("div",{}),z.jsx("div",{children:z.jsx("input",{type:"text",value:r,onChange:l,style:{outline:"none",width:"100%",font:"inherit",fontFamily:"inherit",letterSpacing:"inherit"}})}),z.jsx("button",{type:"submit",children:"OK"})]})})}function AR(e){const t=ce.useRef(null);return ce.useEffect(()=>{t.current&&t.current.scrollTo({top:t.current.scrollHeight,behavior:"smooth"})},[e]),t}function RR(){const[e,{players:t}]=nt([r_,wn]),r=AR(e),i=Object.fromEntries(t.map(s=>[s.id,s.name]));return z.jsx("div",{ref:r,style:{display:"grid",alignContent:"start",gap:"4px",padding:"4px",paddingRight:"12px",borderRadius:"4px",backgroundColor:"#fff",color:"#333",border:"1px solid #ddd",overflow:"auto",lineHeight:"1",fontSize:"14px",wordBreak:"break-word"},children:e.slice(-50).map((s,l)=>{const u=s.type+l;if(s.type==="user-message"){let{text:d,playerId:h,isRevealed:p}=s.payload;return p==="revealed"?z.jsx("p",{style:{fontStyle:"italic",color:"green"},children:z.jsxs("b",{children:[i[h]," отгадал слово!"]})},u):z.jsxs("p",{style:{},children:[z.jsxs("b",{children:[i[h],":"]})," ",d]},u)}if(s.type==="new-selected-word"){let{word:d}=s.payload;return z.jsxs("p",{style:{fontStyle:"italic"},children:["Слово выбрано!"," ",z.jsxs("b",{style:{letterSpacing:"2px"},children:[d.replace(/\S/g,"_")," (",d.split(" ").map(h=>h.length).join(" "),")"]})]},u)}if(s.type==="choosing-word"){let{playerId:d}=s;return z.jsxs("p",{style:{fontStyle:"italic"},children:[i[d]," выбирает слово"]},u)}return z.jsxs("p",{style:{color:"#888"},children:["[",s.type,"]"]},u)})})}function zR(){const[e,t]=ce.useState(0),r=ce.useRef(0),i=ce.useRef(performance.now()),s=ce.useRef(0);return ce.useEffect(()=>{const l=()=>{const u=performance.now();if(r.current++,u-i.current>=1e3){const d=Math.round(r.current*1e3/(u-i.current));t(d),r.current=0,i.current=u}s.current=requestAnimationFrame(l)};return s.current=requestAnimationFrame(l),()=>{s.current&&cancelAnimationFrame(s.current)}},[]),z.jsxs("div",{style:{position:"fixed",top:"10px",right:"10px",backgroundColor:"#fff",color:"#333",border:"1px solid #333",padding:"2px 4px",borderRadius:"4px",fontSize:"14px",fontFamily:"monospace",zIndex:1e3,userSelect:"none"},children:[e," FPS"]})}function DR({words:e}){return z.jsx("div",{style:{backgroundColor:"#ddd",height:"100%",display:"flex",gap:"8px",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:e.map((t,r)=>z.jsx("button",{type:"button",onClick:()=>i_(t),children:t},r))})}function jR(){const t=nt(wn).id,[r,i,s,l]=nt([pg,uR,MA,CA]);return ce.useEffect(()=>{t&&V2(t)},[t]),z.jsxs($r,{children:[z.jsx(zR,{}),z.jsxs("div",{className:Rs.page,children:[z.jsx("div",{className:Rs.header,children:r.iam&&z.jsx("p",{style:{textAlign:"center"},children:z.jsx("b",{children:r.word})})}),z.jsx("div",{className:Rs.canvasSection,children:i.choose&&i.iam?z.jsx("div",{style:{width:"100%",aspectRatio:"1"},children:z.jsx(DR,{words:i.words})}):i.choose&&!i.iam?z.jsx("div",{style:{width:"100%",aspectRatio:"1"},children:z.jsxs("p",{children:[i.who," выбирает слово!"]})}):z.jsx(pR,{})}),z.jsxs("div",{className:Rs.footer,children:[r.iam?z.jsx(_R,{}):z.jsx("div",{style:{padding:"4px 12px"},children:z.jsx("div",{style:{display:"flex",justifyContent:"center"},children:z.jsx(OR,{clue:s,revealed:l})})}),z.jsx(vR,{})]}),z.jsxs("div",{className:Rs.players,children:[z.jsx(TR,{}),z.jsx(RR,{})]})]})]})}function UR(){var p;const e=nt(wn),t=nt(dg),r=nt(fr),[i,s]=ce.useState(t.name),[l,u]=Ym();if(ce.useEffect(()=>{t.name&&s(t.name)},[t]),!e.id)return z.jsx($r,{children:z.jsx("p",{children:"группа не найдена"})});if(e.status===Yt.inProgress)return z.jsx(jR,{});if(e.status!=="prepare")return z.jsx($r,{children:z.jsx("p",{children:"группа уже играет или закончила играть"})});const d=((p=e.players.find(y=>y.id===e.host))==null?void 0:p.name)||e.host,h=r===e.host;return z.jsx($r,{children:z.jsxs("div",{children:[z.jsxs("h1",{children:['Комната "',e.name,'"']}),z.jsxs("p",{children:["хост: ",z.jsx("b",{children:d})]}),z.jsxs("p",{children:["Ждем всех игроков [поделиться] ",e.id]}),z.jsx("br",{}),z.jsxs("form",{style:{maxWidth:"200px",display:"grid",gap:"4px",gridTemplateColumns:"1fr min-content"},onSubmit:y=>{y.preventDefault();const g=i.trim();g!==t.name?ug(g):s(g)},children:[z.jsx(sm,{maxLen:30,label:"Имя",onChange:s,value:i}),z.jsx(e_,{type:"submit",children:"ОК"})]}),z.jsx("br",{}),z.jsxs("div",{style:{display:"grid",gap:"8px",padding:"8px",borderRadius:"4px",backgroundColor:"#bddcf3",maxWidth:"200px"},children:[z.jsx(up,{label:"Количество раундов",value:e.gameParams.rounds,onChange:y=>{op(e.id,{...e.gameParams,rounds:y})},options:[{value:3,label:"3 раунда"},{value:5,label:"5 раундов"},{value:7,label:"7 раундов"},{value:10,label:"10 раундов"}],disabled:!h}),z.jsx(up,{label:"Слов на выбор",value:e.gameParams.wordSuggestions,onChange:y=>{op(e.id,{...e.gameParams,wordSuggestions:y})},options:[{value:2,label:"2 слова"},{value:3,label:"3 слова"},{value:4,label:"4 слова"},{value:5,label:"5 слов"}],disabled:!h}),z.jsx(up,{label:"Время",value:e.gameParams.drawTime||60,onChange:y=>{op(e.id,{...e.gameParams,drawTime:y})},options:[{value:10,label:"10 секунд"},{value:30,label:"30 секунд"},{value:60,label:"60 секунд"},{value:90,label:"90 секунд"}],disabled:!h})]}),z.jsx("br",{}),z.jsx("p",{children:"Игроки: "}),z.jsx("br",{}),z.jsx("ul",{children:e.players.map(y=>z.jsxs("li",{children:[y.name," ",y.id===r&&z.jsx("button",{onClick:()=>{TA(e.id).then(()=>{u(Xn(""))})},children:"выйти"}),y.id!==r&&h&&z.jsx("button",{onClick:()=>{SA(e.id,y.id)},children:"кикнуть"})]},y.id))}),h&&z.jsxs("div",{children:[z.jsx("button",{onClick:()=>{_A(e)},children:"Начать игру!"}),z.jsx("br",{}),z.jsx("br",{}),z.jsx("button",{onClick:()=>{F2(e.id)},children:"закрыть игру"})]})]})})}const{$allParties:LR}=$R();function $R(){const e=Fe(),t=Eo(e,[]);return ye.subscribeQuery({party:{players:{}}},r=>{r.error&&console.error(r.error),r.data&&e(r.data.party)}),{$allParties:t}}function HR(){const e=nt(LR);return z.jsxs($r,{children:[z.jsx("h1",{children:"Все комнаты"}),e.length===0?z.jsx("h2",{children:"Комнат пока нет"}):z.jsx("ul",{children:e.map(t=>{var i;const r=((i=t.players)==null?void 0:i.length)||0;return z.jsxs("li",{children:['"',t.name,'" ',r," ",r===1?"игрок":"игроков"," ",z.jsx("b",{children:t.status})]},t.id)})})]})}function IR(){const e=nt(wn),[t,r]=Ym();return ce.useEffect(()=>{console.log("party.status",e.status),e?e.status===Yt.prepare||e.status===Yt.inProgress?r(Xn("current-party")):(e.status,Yt.finished,r(Xn(""))):r(Xn(""))},[e]),z.jsx("div",{style:{height:"100%"},children:z.jsxs(x5,{children:[z.jsx(ro,{path:"/scribble/words",component:x6}),z.jsx(ro,{path:"/scribble/paintings",component:B6}),z.jsx(ro,{path:"/scribble/all-rooms",component:HR}),z.jsx(ro,{path:"/scribble/current-party",component:UR}),z.jsx(ro,{path:"/scribble",component:m1}),z.jsx(ro,{path:"/",component:m1})]})})}XC({enabled:!0});const qR=JC.createRoot(document.getElementById("app"));qR.render(z.jsx(IR,{}));
